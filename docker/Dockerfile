# The sessions example (examples/sessions.py), with its session records in Redis.
# Built by docker-compose.yml from this repository's working copy, with its built frontend.

FROM python:3.13-slim-bookworm
ENV UV_LINK_MODE=copy \
    PYTHONUNBUFFERED=1
# The libraries of the OCC geometry kernel (compas_brep[occ]).
RUN apt-get update \
    && apt-get install -y --no-install-recommends libgl1 libglu1-mesa libxrender1 libxext6 libsm6 libice6 libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir uv

WORKDIR /app
COPY . .
RUN test -f src/compas_threejs/viewer/frontend/index.html || (echo "Build the frontend first: the viewer's frontend/ is missing" && exit 1)
RUN uv sync --frozen --no-dev --extra sessions

RUN useradd --create-home viewer && chown -R viewer /app
USER viewer

ENV COMPAS_THREEJS_HOST=0.0.0.0
EXPOSE 9001
CMD [".venv/bin/python", "examples/sessions.py"]
