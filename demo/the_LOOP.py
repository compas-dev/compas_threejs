def animate(time):
    torus.rotate(0.007, Vector(1, 0, 0))
    torus.rotate(0.017, Vector(0, 1, 0))
    torus.rotate(0.013, Vector(0, 0, 1))

    material.color = Color(0.5+0.5*math.sin(time/100), 0.5+0.5*math.cos(time/100), 0.5)

    viz.update_geometry(torus)
    viz.update_material(material)
