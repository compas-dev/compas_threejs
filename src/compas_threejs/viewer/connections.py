"""The open WebSocket connections, by session and workspace, and what is replayed to them.

Each connection is a browser tab (or a `Remote`) showing one workspace of one session. What
is sent is addressed the same way, at one of three reaches:

========================  ==========================================================
``(session, workspace)``  the tabs of one workspace of one session
``(session, None)``       every workspace of one session
``(default, ...)``        the same, for every session: the default session's content
                          is the app's own (what app.py adds at startup), seen by all
========================  ==========================================================

What is persisted is kept per address and replayed to a tab that connects or reconnects:
everyone's first, then the session's own - so a session's own settings come after, and
over, the app's.
"""

from __future__ import annotations

from collections import defaultdict
from typing import Optional

from .session import DEFAULT_SESSION_ID


class ConnectionManager:
    """The open sockets and the persisted messages, by session and workspace."""

    def __init__(self):
        self._sockets = defaultdict(set)  # (session id, workspace id) -> sockets
        self._saved = defaultdict(dict)  # (session id, workspace id or None) -> {key: message}

    # ---- CONNECTIONS ------------------------------------------------------------------------

    def connect(self, websocket, session_id: str, workspace_id: str) -> list:
        """Adds `websocket`, and returns what to replay to it, in order."""
        self._sockets[(session_id, workspace_id)].add(websocket)
        return self.replay(session_id, workspace_id)

    def disconnect(self, websocket, session_id: str, workspace_id: str) -> None:
        sockets = self._sockets.get((session_id, workspace_id))
        if sockets is not None:
            sockets.discard(websocket)
            if not sockets:
                del self._sockets[(session_id, workspace_id)]

    def count(self, session_id: Optional[str] = None) -> int:
        """How many connections are open: in all, or for one session."""
        return sum(len(sockets) for (sid, _), sockets in self._sockets.items() if session_id is None or sid == session_id)

    def clients(self, session_id: str, workspace_id: Optional[str]) -> set:
        """The sockets a message addressed to `(session_id, workspace_id)` reaches."""
        everyone = session_id == DEFAULT_SESSION_ID
        found = set()
        for (sid, wid), sockets in self._sockets.items():
            if (everyone or sid == session_id) and (workspace_id is None or wid == workspace_id):
                found |= sockets
        return found

    # ---- PERSISTED MESSAGES -----------------------------------------------------------------

    def keep(self, binary_data, obj_id, persist, session_id, workspace_id, remove_key) -> None:
        """The persisted messages' bookkeeping for one message (see `AppServer.broadcast`)."""
        saved = self._saved[(session_id, workspace_id)]
        if remove_key is not None:
            # Drops the object's earlier persisted "add" so it isn't replayed to clients that
            # connect (or reconnect) after this removal.
            saved.pop(remove_key, None)
        elif persist:
            key = obj_id or str(len(saved))
            saved[key] = binary_data

    def replay(self, session_id: str, workspace_id: str) -> list:
        """What a tab of `(session_id, workspace_id)` is sent when it connects, in order."""
        sessions = [DEFAULT_SESSION_ID] if session_id == DEFAULT_SESSION_ID else [DEFAULT_SESSION_ID, session_id]
        messages = []
        for workspace in (None, workspace_id):  # every workspace's first, then this one's
            for sid in sessions:
                messages.extend(self._saved.get((sid, workspace), {}).values())
        return messages

    def saved(self, session_id: str, workspace_id: Optional[str]) -> dict:
        """The persisted messages of one address (read-only use)."""
        return self._saved[(session_id, workspace_id)]

    def forget_session(self, session_id: str) -> None:
        """Drops everything persisted for `session_id` - when it ends."""
        if session_id == DEFAULT_SESSION_ID:
            raise ValueError("The default session's messages are everyone's")
        for address in [address for address in self._saved if address[0] == session_id]:
            del self._saved[address]
