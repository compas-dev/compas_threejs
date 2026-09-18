import unittest

from compas.geometry import Box
from compas.geometry import Frame
from compas.geometry import Point
from compas.geometry import Rotation
from compas.geometry import Scale
from compas.geometry import Sphere
from compas.geometry import Translation

from compas_threejs.viewer.inbox import _apply_transform_with_scale


class ObjectTransformScaleTest(unittest.TestCase):
    def test_box_translate_and_rotate_only_matches_plain_transform(self):
        # No scale component - should behave exactly like geometry.transform(delta),
        # the pre-fix (and still correct, for this case) behavior.
        box = Box(xsize=1, ysize=2, zsize=3, frame=Frame(Point(0, 0, 0), [1, 0, 0], [0, 1, 0]))
        delta = Translation.from_vector([1, 2, 3]) * Rotation.from_axis_and_angle([0, 0, 1], 0.4)

        reference = box.copy()
        reference.transform(delta)

        _apply_transform_with_scale(box, delta)

        self.assertAlmostEqual(box.frame.point.x, reference.frame.point.x)
        self.assertAlmostEqual(box.frame.point.y, reference.frame.point.y)
        self.assertAlmostEqual(box.frame.point.z, reference.frame.point.z)
        self.assertEqual((box.xsize, box.ysize, box.zsize), (1, 2, 3))

    def test_box_scale_resizes_and_recenters(self):
        # Box.transform() alone silently drops any scale component (it only applies
        # to the frame - see its own docstring) - this is the bug being fixed.
        box = Box(xsize=1, ysize=1, zsize=1, frame=Frame(Point(0, 0, 0.5), [1, 0, 0], [0, 1, 0]))
        delta = Translation.from_vector([1, 0, 0]) * Scale.from_factors([2, 1, 1])

        _apply_transform_with_scale(box, delta)

        self.assertEqual((box.xsize, box.ysize, box.zsize), (2.0, 1.0, 1.0))
        self.assertAlmostEqual(box.frame.point.x, 1.0)
        self.assertAlmostEqual(box.frame.point.z, 0.5)

    def test_scale_drag_keeps_the_gizmo_pivot_fixed_not_shifted(self):
        # Reproduces the reported "box jumps to another location after scaling" bug.
        # A TransformControls scale-mode drag keeps the object's OWN pivot fixed and
        # only changes its scale factor (confirmed against three.js's own source) -
        # relative to the object's drag-start frame, that delta is a "scale about the
        # object's original center" transform, which for a center at x=pos and factor
        # k is T(pos*(1-k)) * S(k) in 1D. Applying only the rigid (translation *
        # rotation) part of that to frame.point - the pre-fix behavior - recovers
        # pos*(2-k), not pos: for pos=0.36, k=1.6667, that's 0.12, a full grid unit
        # (0.24) away from the correct, gizmo-matching 0.36. The earlier version of
        # this test suite never caught this because it only ever used a starting
        # frame.point at x=0, where the wrong formula and the right one coincide.
        pos = 0.36
        k = 1.6667
        delta = Translation.from_vector([pos * (1 - k), 0, 0]) * Scale.from_factors([k, 1, 1])
        box = Box(xsize=0.72, ysize=1, zsize=1, frame=Frame(Point(pos, 0, 0), [1, 0, 0], [0, 1, 0]))

        _apply_transform_with_scale(box, delta)

        self.assertAlmostEqual(box.frame.point.x, pos)
        self.assertAlmostEqual(box.xsize, 0.72 * k)

    def test_non_uniform_scale_on_uniform_only_shape_falls_back_to_average(self):
        # Sphere.scale(factor) only takes one factor - a non-uniform delta (e.g. a
        # per-axis TransformControls scale drag) can't be applied exactly, so this
        # averages the three factors rather than crashing or dropping the resize.
        sphere = Sphere(radius=1, frame=Frame(Point(0, 0, 0)))

        _apply_transform_with_scale(sphere, Scale.from_factors([2, 3, 4]))

        self.assertAlmostEqual(sphere.radius, 3.0)

    def test_scale_on_a_frameless_geometry_uses_the_full_delta_directly(self):
        # A Point (or Mesh/Polyline) has no .frame at all - unlike Shape, its own
        # .transform() isn't scale-blind, so the full delta can go straight through.
        point = Point(1, 2, 3)

        _apply_transform_with_scale(point, Scale.from_factors([2, 3, 4]))

        self.assertAlmostEqual(point.x, 2.0)
        self.assertAlmostEqual(point.y, 6.0)
        self.assertAlmostEqual(point.z, 12.0)

    def test_identity_scale_is_a_no_op_and_does_not_call_scale(self):
        box = Box(xsize=1, ysize=1, zsize=1, frame=Frame(Point(0, 0, 0), [1, 0, 0], [0, 1, 0]))
        called = []
        box.scale = lambda *a: called.append(a)  # would fail loudly if invoked wrongly

        _apply_transform_with_scale(box, Translation.from_vector([1, 0, 0]))

        self.assertEqual(called, [])


if __name__ == "__main__":
    unittest.main()
