# Why loading a big JSON model feels slow / "chunked"

Measured on `steko_model.json` (3.47 MB, 766 elements: 656 Plates, 90 Panels, 20 Beams):

| Stage | Time |
|---|---|
| WebSocket transfer of the payload | negligible |
| `compas.data.json_loads` (rebuild model from dict) | ~4.2 s |
| `_add_root_elements` (geometry building: `compute_geometry`, meshing) | ~8.6 s |
| `compas_pb.pb_dump_bts` x 2189 outgoing messages | ~0.3 s |
| **Total `load_timber_model`** | **~13.2 s** |

The transfer itself is not the bottleneck. The "chunks" you see are an artifact of how the
work is structured, not of network speed.

## Root cause

`AppServer._websocket_endpoint` (`compas_threejs/viewer/server.py`) calls
`self.app_instance.on_message(...)` **inline, on the server's asyncio event loop**. That
call runs the entire 13 s of deserialization + geometry building synchronously on the loop
thread.

Meanwhile, `Outbox.send_bytes` (`compas_threejs/viewer/outbox.py`) schedules each
`add_geometry` broadcast with `asyncio.run_coroutine_threadsafe` onto that same loop. Since
the loop is blocked for 13 s:

- no socket reads/writes happen at all during that time (server looks frozen)
- all 2189 geometry messages (3.34 MB) queue up as callbacks
- the instant `load_timber_model` returns, all 2189 flush back-to-back — that burst is the
  "chunked" delivery you're seeing in the browser

The same one-message-at-a-time replay happens again on every browser refresh, since all
2189 buffers are persisted in `workspace_states` (`server.py`, replay loop in
`_websocket_endpoint`).

## Secondary waste (small, but free to fix)

The payload is serialized/parsed **five times** end-to-end:
1. Browser `JSON.parse(file)` (file upload)
2. `JSON.stringify` in the frontend's `Ls()` send helper
3. uvicorn decodes bytes -> str
4. `server.py` re-`encode("utf-8")`, then `Inbox._decode` does `decode("utf-8")` + `json.loads`
5. `timber_viewer.py: _deserialize_timber_model` does `json_dumps(dict)` -> `json_loads(str)`

Also, `Ls()` (frontend bundle) and `LoadJsonButton`'s `onload` both `console.log` the full
parsed object — with DevTools open, logging a multi-MB object is itself a real cost and
keeps it retained in memory.

## Fixes, in priority order

1. **Move `on_message` off the event loop.**
   In `AppServer._websocket_endpoint`, run `self.app_instance.on_message(data, workspace_id)`
   via `asyncio.to_thread(...)` (or a dedicated executor) instead of calling it inline.
   Nothing else below matters until this lands — right now the server can't do anything
   else (including give progress feedback) while a model loads.

2. **Batch outgoing geometry instead of one message per object.**
   2189 separate `pb_dump_bts` + `send_bytes` calls means 2189 separate broadcasts and
   2189 separate handle-on-frontend calls, plus 2189 replayed messages on every reconnect.
   Group into a handful of batched messages (e.g. per element type, or chunks of N) so the
   frontend can build the scene in a few passes instead of thousands.

3. **Reduce the 8.6 s geometry-build cost.**
   This is the actual dominant cost, not transport. Worth profiling
   `_add_element_tree`/`compute_geometry` in `beam_viewer.py`/`plate_viewer.py`/
   `panel_viewer.py` to see if geometry (meshing, brep computation) can be cached, done
   lazily, or parallelized instead of eagerly for all 766 elements up front.

4. **Cut the serialize/parse round-trips.**
   Send the raw uploaded JSON text over the wire once and `json_loads` it once server-side,
   instead of parse -> stringify -> decode -> re-encode -> decode -> dumps -> loads. Drop the
   full-payload `console.log(t)` calls in the frontend's `Ls()` and `LoadJsonButton`.

Items 1 and 2 are the ones that would turn "frozen for 13 s then dumps everything at once"
into visible, progressive loading. Item 3 is what would actually make the total time
shorter.
