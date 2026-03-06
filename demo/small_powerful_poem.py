




def metamorphosis(value):



    new_coords = []

    if value <= 0.33:
        t = value * 3
        new_coords = interpolate_vertices(sphere_vertices, cuboid_vertices, t)
        material.color = Color(t, 0, 1)
    elif value <= 0.66:
        t = (value - 0.33) * 3
        new_coords = interpolate_vertices(cuboid_vertices, torus_vertices, t)
        material.color = Color(1, t, 1-t)
    else:
        t = (value - 0.66) * 3
        new_coords = interpolate_vertices(torus_vertices, spiraled_torus, t)
        if t>1:
            t=1
        material.color = Color(1-t, 1, t)

    for i, vertex in enumerate(mesh.vertices()):
        mesh.vertex_attributes(vertex, ["x", "y", "z"], new_coords[i])




    viz.update_geometry(mesh)
    viz.update_material(material)
