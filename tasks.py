from invoke.tasks import task


@task
def rundev(c):
    with c.cd("frontend/compas_threejs"):
        c.run("npm run dev")


@task
def buildstatic(c):
    with c.cd("frontend/compas_threejs"):
        c.run("npm run build")
