"""Where the records of sessions are kept: which sessions exist, and until when.

A record is small - its id, when it started, when it was last seen - and it is all a
store holds. What a session has (its `State`: geometry, workspaces, plugin data) lives in
the server's memory, with the live Python objects (see `SessionManager`).

`MemorySessionStore` keeps the records in the server's memory; `RedisSessionStore` keeps
them in Redis, where they expire by themselves and outlive a restart of the server.
"""

from __future__ import annotations

import json
import time
from typing import Callable
from typing import Iterator
from typing import Optional
from typing import Protocol


class SessionStore(Protocol):
    """The records of sessions. A record expires `timeout` seconds after it was last touched."""

    def create(self, session_id: str, timeout: float) -> dict:
        """Adds a record for `session_id`, and returns it."""

    def get(self, session_id: str) -> Optional[dict]:
        """The record of `session_id` - ``{"id", "created", "last_seen"}`` - or None if there's
        none, or it expired."""

    def touch(self, session_id: str, timeout: float) -> bool:
        """Marks `session_id` as seen now, so it expires `timeout` seconds from now. False if
        there's no record (any more)."""

    def remove(self, session_id: str) -> None:
        """Removes the record of `session_id`, if there is one."""

    def ids(self) -> Iterator[str]:
        """The ids of the records that haven't expired."""


class MemorySessionStore:
    """Records in the server's memory: gone when the server stops."""

    def __init__(self, clock: Callable[[], float] = time.time):
        self._records = {}  # id -> (record, expires at)
        self._clock = clock

    def create(self, session_id, timeout):
        now = self._clock()
        record = {"id": session_id, "created": now, "last_seen": now}
        self._records[session_id] = (record, now + timeout)
        return dict(record)

    def get(self, session_id):
        entry = self._records.get(session_id)
        if entry is None:
            return None
        record, expires = entry
        if self._clock() >= expires:
            del self._records[session_id]
            return None
        return dict(record)

    def touch(self, session_id, timeout):
        if self.get(session_id) is None:
            return False
        now = self._clock()
        record, _ = self._records[session_id]
        record["last_seen"] = now
        self._records[session_id] = (record, now + timeout)
        return True

    def remove(self, session_id):
        self._records.pop(session_id, None)

    def ids(self):
        return iter([session_id for session_id in list(self._records) if self.get(session_id) is not None])


class RedisSessionStore:
    """Records in Redis: each one a key that Redis expires by itself.

    Give it a `url` (``redis://host:6379/0``) or a `client` (a ``redis.Redis``). Needs the
    ``redis`` package: ``pip install compas_threejs[sessions]``.
    """

    def __init__(self, url: Optional[str] = None, *, client=None, prefix: str = "compas_threejs:session:", clock: Callable[[], float] = time.time):
        if client is None:
            try:
                import redis
            except ImportError as error:
                raise ImportError("RedisSessionStore needs the redis package: pip install compas_threejs[sessions]") from error
            client = redis.Redis.from_url(url or "redis://localhost:6379/0")
        self.client = client
        self.prefix = prefix
        self._clock = clock

    def _key(self, session_id):
        return f"{self.prefix}{session_id}"

    def create(self, session_id, timeout):
        now = self._clock()
        record = {"id": session_id, "created": now, "last_seen": now}
        self.client.set(self._key(session_id), json.dumps(record), px=_milliseconds(timeout))
        return record

    def get(self, session_id):
        value = self.client.get(self._key(session_id))
        return None if value is None else json.loads(value)

    def touch(self, session_id, timeout):
        record = self.get(session_id)
        if record is None:
            return False
        record["last_seen"] = self._clock()
        # xx: only if it is still there - a record that expired meanwhile stays gone.
        return bool(self.client.set(self._key(session_id), json.dumps(record), px=_milliseconds(timeout), xx=True))

    def remove(self, session_id):
        self.client.delete(self._key(session_id))

    def ids(self):
        for key in self.client.scan_iter(match=f"{self.prefix}*"):
            key = key.decode() if isinstance(key, bytes) else key
            yield key[len(self.prefix) :]


def _milliseconds(seconds):
    return max(1, int(seconds * 1000))
