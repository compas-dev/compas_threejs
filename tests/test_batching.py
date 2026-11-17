import asyncio
import threading

from fastapi.testclient import TestClient

from compas_threejs.viewer import App
from compas_threejs.viewer.server import AppServer
from compas_threejs.viewer.server import pack_batch


def unpack(frame):
    """The messages in a frame from `pack_batch` - as the frontend unpacks them."""
    assert frame[:1] == b"\x00"
    messages, i = [], 1
    while i < len(frame):
        size = int.from_bytes(frame[i : i + 4], "little")
        messages.append(frame[i + 4 : i + 4 + size])
        i += 4 + size
    return messages


def test_a_batch_holds_back_what_its_thread_sends_until_it_ends():
    app = App()
    with app.outbox.batch():
        app.outbox.send_bytes(b"one", "a")
        with app.outbox.batch():  # joins the outer one
            app.outbox.send_bytes(b"two", "b")
        app.outbox.forget("c")
        assert app.outbox._queue == []
        # Another thread's messages are not held back.
        other = threading.Thread(target=lambda: app.outbox.send_bytes(b"other", "d"))
        other.start()
        other.join()
        assert [entry[0] for entry in app.outbox._queue] == [b"other"]
    assert [entry[0] for entry in app.outbox._queue] == [b"other", b"one", b"two", None]


def test_send_batch_sends_what_was_gathered_so_far():
    app = App()
    with app.outbox.batch():
        app.main.start_spinner("Loading...")  # seen while the handler runs
        assert [entry[1] for entry in app.outbox._queue] == ["spinner"]
        app.outbox.send_bytes(b"model", "m")
        assert len(app.outbox._queue) == 1
    assert [entry[1] for entry in app.outbox._queue] == ["spinner", "m"]


def test_a_handler_s_messages_reach_each_tab_as_one_frame_and_are_kept_in_order():
    server = AppServer()
    asyncio.run(server.broadcast(b"old", "x", workspace_id="main"))
    entries = [
        (b"add", "x", True, "main", None, True),
        (b"shared", "s", True, None, None, True),
        (None, "", False, "main", "gone", True),
        (b"quiet", "q", True, "main", None, False),  # kept, not sent
        (b"other", "o", True, "beam", None, True),
    ]
    with TestClient(server.fastapi_app) as client:
        with client.websocket_connect("/ws?workspace=main") as main, client.websocket_connect("/ws?workspace=beam") as beam:
            assert main.receive_bytes() == b"old"  # the replay: a single message, sent as it is
            client.portal.call(server.broadcast_many, entries)
            assert unpack(main.receive_bytes()) == [b"add", b"shared"]
            assert unpack(beam.receive_bytes()) == [b"shared", b"other"]
    assert server.workspace_states["main"] == {"x": b"add", "q": b"quiet"}
    assert server.shared_state == {"s": b"shared"}


def test_a_batch_frame_is_the_marker_then_each_message_with_its_length():
    assert pack_batch([b"a", b"bc"]) == b"\x00\x01\x00\x00\x00a\x02\x00\x00\x00bc"
    assert unpack(pack_batch([b"a", b"bc"])) == [b"a", b"bc"]
