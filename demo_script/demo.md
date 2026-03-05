# ACT I

```python
"""
ACT I - THE ABSTRACT
-----
"""


viz = Viewer()



# the SINGULARITY
#       the eternal
#
point = Point(0, 0, 0)
viz.add_geometry(point, pt_material)


# the MOVEMENT
#       the ephemeral
#

movement = Vector(2, 3, 4)
viz.add_geometry(movement, vct_material)

point += movement
viz.update_geometry(point)


# the CHAOS
#   the eternal exploded into the plenty

points = create_fibonacci_sphere(500)
viz.add_geometries(points, pt_material)


# the CALM
#       the dynamism woven in the ethernal chaos

polyline = Polyline(points)
viz.add_geometry(polyline, ln_material)



viz.start()


```
