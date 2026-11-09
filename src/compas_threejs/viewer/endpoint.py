"""The endpoint: which session a request or a WebSocket belongs to, decided once, at the door.

`SessionMiddleware` wraps the whole FastAPI app - pages, plugin routes, `/plugins.json`, the
WebSocket - when sessions are on (`App(sessions=True)`). For each request it:

1. reads the session cookie, and finds that session (`SessionManager.get`);
2. starts a new session if there's none, or it expired, and sets the cookie in the
   response (also in a WebSocket's handshake);
3. asks the app's `authorize_session` callbacks, which may refuse it (403);
4. binds the session (see `current_session`) while the request is handled, and puts it in
   the scope, where `AppServer` finds a WebSocket's.

The cookie only carries the session's id: random, unguessable (`SessionManager.create`),
`HttpOnly` (page scripts can't read it), `SameSite=Lax`, and `Secure` over HTTPS.
"""

from __future__ import annotations

import asyncio
from http.cookies import SimpleCookie
from typing import Callable
from typing import Optional

from starlette.requests import HTTPConnection
from starlette.responses import PlainTextResponse

from .session import _session

COOKIE = "compas_threejs_session"
SCOPE_KEY = "compas_threejs.session"


def session_of(scope) -> Optional[object]:
    """The `Session` the middleware found for this request or WebSocket, or None."""
    return scope.get(SCOPE_KEY)


class SessionMiddleware:
    """ASGI middleware: finds or starts the session of each request (see the module)."""

    def __init__(self, app, manager, *, authorize: Optional[Callable] = None, cookie: str = COOKIE, secure: Optional[bool] = None):
        self.app = app
        self.manager = manager
        self.authorize = authorize  # (connection, session) -> bool
        self.cookie = cookie
        self.secure = secure  # None: when the request is HTTPS

    async def __call__(self, scope, receive, send):
        if scope["type"] not in ("http", "websocket"):
            await self.app(scope, receive, send)
            return

        connection = HTTPConnection(scope)
        session_id = connection.cookies.get(self.cookie)
        # The store may be Redis: off the event loop.
        session = await asyncio.to_thread(self.manager.get, session_id) if session_id else None
        started = session is None
        if started:
            session = await asyncio.to_thread(self.manager.create)
        else:
            await asyncio.to_thread(self.manager.touch, session)

        if self.authorize is not None and not await asyncio.to_thread(session.run, self.authorize, connection, session):
            await self._refuse(scope, receive, send)
            return

        scope[SCOPE_KEY] = session
        if started:
            send = self._setting_cookie(send, session, connection.url.scheme in ("https", "wss"))
        token = _session.set(session)
        try:
            await self.app(scope, receive, send)
        finally:
            _session.reset(token)

    def _setting_cookie(self, send, session, https):
        cookie = SimpleCookie()
        cookie[self.cookie] = session.id
        morsel = cookie[self.cookie]
        morsel["path"] = "/"
        morsel["httponly"] = True
        morsel["samesite"] = "Lax"
        if self.secure if self.secure is not None else https:
            morsel["secure"] = True
        header = (b"set-cookie", morsel.OutputString().encode("latin-1"))

        async def sending(message):
            if message["type"] == "http.response.start":
                message = {**message, "headers": [*message.get("headers", []), header]}
            elif message["type"] == "websocket.accept":
                message = {**message, "headers": [*message.get("headers", []), header]}
            await send(message)

        return sending

    @staticmethod
    async def _refuse(scope, receive, send):
        if scope["type"] == "websocket":
            # Closing before accepting: the client's handshake gets a 403.
            await send({"type": "websocket.close", "code": 1008})
            return
        await PlainTextResponse("This session isn't allowed here.", status_code=403)(scope, receive, send)
