import time
from compas.geometry import Transformation, Scale, Box, Cylinder, Frame, Translation, Polyline, Line, Point
from compas.datastructures import Mesh as CompasMesh
from compas_fab.robots import RigidBody, RigidBodyState, JointTrajectory, JointTrajectoryPoint, ToolState
from compas_robots import RobotModel, Configuration, ToolModel
from compas_fab.robots.robot_library import RobotCellLibrary
import random
from compas_threejs.materials import LineMaterial, Material, PhysicalMaterial, PointMaterial
from compas.colors import Color

from compas_threejs.viewer import Viewer
from compas_threejs.ui import Slider

# 1. Setup Viewer
viewer = Viewer()

# 2. Load the UR10e Robot Cell
robot_cell, cell_state = RobotCellLibrary.ur10e()
model = robot_cell.robot_model

# 3. Create a Dummy Trajectory
trajectory_points = []
joint_names = model.get_configurable_joint_names()
for i in range(101):
    angle = (i / 100.0) * -1.57  # 0 to 90 degrees
    trajectory_points.append(JointTrajectoryPoint(
        joint_values=[angle, angle, angle, angle, angle, angle],
        joint_types=[0, 0, 0, 0, 0, 0]
    ))
trajectory = JointTrajectory(trajectory_points=trajectory_points, joint_names=joint_names)

# ======================================================================
# 3.5 [NEW] DEFINING DYNAMIC PICK AND PLACE DATA
# ======================================================================
# Here we define exactly where the workpiece is at any given frame.
# - Frames 0 to 30: Rests on table
# - Frames 31 to 70: Attached to gripper
# - Frames 71+: Rests at assembly destination

table_drop_frame = Frame([0.5, 0.0, 0.05], [1, 0, 0], [0, 1, 0])
assembly_drop_frame = Frame([0.0, 0.6, 0.05], [1, 0, 0], [0, 1, 0])
grasp_offset_frame = Frame([0, 0, 0.25], [1, 0, 0], [0, 1, 0]) # Offset relative to TCP

pnp_data = {
    "workpieces": {
        "dynamic_brick": {
            "states": [
                {
                    "start_frame": 0,
                    "end_frame": 30, # Exclusive (up to 29)
                    "parent": "world",
                    "transform": Transformation.from_frame(table_drop_frame)
                },
                {
                    "start_frame": 30,
                    "end_frame": 70,
                    "parent": "my_gripper", # Attached to tool
                    "transform": Transformation.from_frame(grasp_offset_frame)
                },
                {
                    "start_frame": 70,
                    "end_frame": 9999, # Arbitrary large number
                    "parent": "world",
                    "transform": Transformation.from_frame(assembly_drop_frame)
                }
            ]
        }
    }
}

# ======================================================================
# 4. INJECTING SCENE OBJECTS INTO CELL (Table & Tool)
# ======================================================================
print("Injecting Table and Tool into RobotCell...")

# A. The Table (RigidBody)
table_box = Box(1.0, 1.0, 0.5)
table_mesh = CompasMesh.from_shape(table_box)
table_rb = RigidBody.from_mesh(table_mesh)
table_rb.name = "main_table"

table_frame = Frame([0, 0, -0.25], [1, 0, 0], [0, 1, 0])

robot_cell.rigid_body_models["main_table"] = table_rb
cell_state.rigid_body_states["main_table"] = RigidBodyState(frame=table_frame)

# B. The Tool (ToolModel)
tool_mesh = CompasMesh.from_shape(Cylinder(0.025, 0.2)) 
for v in tool_mesh.vertices():
    tool_mesh.vertex_attribute(v, 'z', tool_mesh.vertex_attribute(v, 'z') + 0.1)

flange_name = model.get_end_effector_link_name()
tool_model = ToolModel(
    tool_mesh, 
    Frame.worldXY(), 
    name="my_gripper", 
    connected_to=flange_name
)

robot_cell.tool_models[tool_model.name] = tool_model
cell_state.tool_states[tool_model.name] = ToolState(
    frame=None, 
    attached_to_group=robot_cell.main_group_name, 
    attachment_frame=Frame.worldXY() 
)

# ======================================================================
# 5. EXTRACTING MESHES TO VIEWER
# ======================================================================
link_id_map = {}

def add_model_to_viewer(model_to_parse, name_prefix=""):
    for link in model_to_parse.iter_links():
        unique_name = f"{name_prefix}{link.name}"
        link_id_map[unique_name] = []
        for visual in link.visual:
            shape = visual.geometry.shape
            
            T_scale = Scale.from_factors(shape.scale) if hasattr(shape, 'scale') and shape.scale else Transformation()
            
            # --- FIX 1: The Safe Origin Extraction (Stops the exploding robot!) ---
            T_origin = Transformation()
            frame = getattr(visual, 'init_frame', None)
            if not frame:
                origin = getattr(visual, 'origin', None)
                if origin:
                    frame = getattr(origin, 'frame', origin)
            if frame:
                try: T_origin = Transformation.from_frame(frame)  # noqa: E701
                except Exception: pass
            # ----------------------------------------------------------------------
            
            T_local = T_origin * T_scale
            meshes_to_add = shape.meshes if hasattr(shape, 'meshes') else [shape]
            for item in meshes_to_add:
                if item is not None:
                    viewer.add_geometry(item)
                    link_id_map[unique_name].append({"geometry": item, "T_local": T_local})

# A. Extract Robot
add_model_to_viewer(model, name_prefix="")

# B. Extract ALL Tools
for tool_id, tool_mod in robot_cell.tool_models.items():
    add_model_to_viewer(tool_mod, name_prefix=f"{tool_id}_")

# C. Extract ALL RigidBodies
print("--- EXTRACTING RIGID BODIES ---")
for rb_name, rb_model in robot_cell.rigid_body_models.items():
    link_id_map[rb_name] = []
    rb_state = cell_state.rigid_body_states[rb_name]
    
    meshes_to_add = []
    
    # 1. Strictly extract the Visual Meshes for rendering
    if hasattr(rb_model, 'visual_meshes') and rb_model.visual_meshes:
        for wrapped_item in rb_model.visual_meshes:
            if hasattr(wrapped_item, 'mesh'):
                meshes_to_add.append(wrapped_item.mesh)
            elif hasattr(wrapped_item, 'geometry'):
                meshes_to_add.append(wrapped_item.geometry)
            else:
                meshes_to_add.append(wrapped_item)
    # Fallback just in case a simpler object only has the base '.mesh' property
    elif hasattr(rb_model, 'mesh') and rb_model.mesh:
        meshes_to_add.append(rb_model.mesh)
                    
    # 2. Deduplicate and send to viewer
    seen_guids = set()
    for item in meshes_to_add:
        if item is not None and hasattr(item, 'guid'):
            guid_str = str(item.guid)
            
            if guid_str in seen_guids:
                continue
            seen_guids.add(guid_str)
            
            viewer.add_geometry(item)
            link_id_map[rb_name].append({"geometry": item, "T_local": Transformation()})
            print(f"✅ Mapped RigidBody (Visual): {rb_name} (GUID: {guid_str})")
            
            if rb_state.frame:
                T_world = Transformation.from_frame(rb_state.frame)
                viewer.transform(item, T_world)

# D. [NEW] Inject Dynamic Workpieces directly into the viewer
workpiece_box = Box(0.1, 0.1, 0.1)
workpiece_mesh = CompasMesh.from_shape(workpiece_box)
viewer.add_geometry(workpiece_mesh, PhysicalMaterial(color=Color(1.0, 0.5, 0.0)))

# Add to the map so our callback can grab it easily
link_id_map["dynamic_brick"] = [{"geometry": workpiece_mesh, "T_local": Transformation()}]

# ======================================================================
# 6. STATIC TRACE & TCP TRIAD
# ======================================================================
print("Calculating Tool Path Trace and Triad...")
tcp_points = []
end_effector_name = model.get_end_effector_link_name() 

for point in trajectory.points:
    cfg = Configuration(
        joint_values=point.joint_values,
        joint_types=point.joint_types,
        joint_names=trajectory.joint_names
    )
    frame = model.forward_kinematics(cfg, link_name=end_effector_name)
    tip_point = frame.point + frame.zaxis.scaled(0.2)
    tcp_points.append(tip_point)

# --- A. Static Trace (Zero Lag, Native Geometry) ---
trace_line = Polyline(tcp_points)
# line_material = LineMaterial(color=Color(0.1, 0.1, 0.1), opacity=0.5)
# line_mat = LineMaterial()
# viewer.add_geometry(trace_line, line_material)
lines = trace_line.lines
num_lines = len(lines)

# Break the polyline into segments to color them individually
for i, line in enumerate(lines):
    # Calculate a simple gradient: Blue (Start) -> Purple -> Red (End)
    r = i / num_lines
    g = 0.0
    b = 1.0 - (i / num_lines)
    
    # Create a specific material for this segment
    grad_material = LineMaterial(color=Color(r, g, b), opacity=0.5)
    
    # Add it statically to the viewer (Do NOT save the GUID, do NOT update in callback)
    viewer.add_geometry(line, material=grad_material)

# viewer.add_geometry(trace_line, PhysicalMaterial(color=Color(0.1, 0.1, 0.1)))

# --- B. The TCP Triad ("Lines" built as 1mm Meshes so they can move!) ---
triad_objects = []

# 1mm radius makes them visually identical to lines, but WebGL can move them!
base_cyl = Cylinder(0.001, 0.15)

# X-Axis (Points along X) -> Red
x_mesh = CompasMesh.from_shape(base_cyl)
T_x = Transformation.from_frame(Frame([0,0,0], [0,1,0], [0,0,1])) * Translation.from_vector([0, 0, 0.075])
x_mesh.transform(T_x)

# Y-Axis (Points along Y) -> Green
y_mesh = CompasMesh.from_shape(base_cyl)
T_y = Transformation.from_frame(Frame([0,0,0], [0,0,1], [1,0,0])) * Translation.from_vector([0, 0, 0.075])
y_mesh.transform(T_y)

# Z-Axis (Points along Z) -> Blue
z_mesh = CompasMesh.from_shape(base_cyl)
T_z = Translation.from_vector([0, 0, 0.075])
z_mesh.transform(T_z)

# Add to viewer with bright colors
viewer.add_geometry(x_mesh, PhysicalMaterial(color=Color(1.0, 0.0, 0.0)))
viewer.add_geometry(y_mesh, PhysicalMaterial(color=Color(0.0, 1.0, 0.0)))
viewer.add_geometry(z_mesh, PhysicalMaterial(color=Color(0.0, 0.0, 1.0)))

# Save their GUIDs so the callback can move them
for mesh in [x_mesh, y_mesh, z_mesh]:
    if hasattr(mesh, 'guid') and mesh.guid:
        triad_objects.append(mesh)

# ======================================================================
# 6.5 THE GHOST ROBOT & TOOL (Target Configuration)
# ======================================================================
print("Spawning Ghost Robot and Tool at target state...")

# 1. Create a transparent material
ghost_mat = Material(color=Color(0.5, 0.7, 0.9), opacity = 0.2) 

# 2. Get the very last point in the trajectory
final_point = trajectory.points[-1]
final_cfg = Configuration(
    joint_values=final_point.joint_values,
    joint_types=final_point.joint_types,
    joint_names=trajectory.joint_names
)

# --- A. Ghost Robot Links ---
for link in model.iter_links():
    link_frame = model.forward_kinematics(final_cfg, link_name=link.name)
    T_link = Transformation.from_frame(link_frame)
    
    for visual in link.visual:
        shape = visual.geometry.shape
        
        T_scale = Scale.from_factors(shape.scale) if hasattr(shape, 'scale') and shape.scale else Transformation()
        T_origin = Transformation()
        frame = getattr(visual, 'init_frame', None)
        if not frame:
            origin = getattr(visual, 'origin', None)
            if origin:
                frame = getattr(origin, 'frame', origin)
        if frame:
            try: T_origin = Transformation.from_frame(frame)
            except Exception: pass
            
        T_local = T_origin * T_scale
        meshes_to_add = shape.meshes if hasattr(shape, 'meshes') else [shape]
        
        for item in meshes_to_add:
            if item is not None:
                ghost_mesh = item.copy()
                ghost_mesh.transform(T_link * T_local)
                viewer.add_geometry(ghost_mesh, material=ghost_mat)

# --- B. Ghost Tool Links ---
for tool_name, t_state in cell_state.tool_states.items():
    t_model = robot_cell.tool_models[tool_name]
    parent_link = t_model.connected_to
    
    parent_frame = model.forward_kinematics(final_cfg, link_name=parent_link)
    T_parent = Transformation.from_frame(parent_frame)
    T_attach = Transformation.from_frame(t_state.attachment_frame) if t_state.attachment_frame else Transformation()
    
    for t_link in t_model.iter_links():
        for visual in t_link.visual:
            shape = visual.geometry.shape
            
            T_scale = Scale.from_factors(shape.scale) if hasattr(shape, 'scale') and shape.scale else Transformation()
            T_origin = Transformation()
            frame = getattr(visual, 'init_frame', None)
            if not frame:
                origin = getattr(visual, 'origin', None)
                if origin:
                    frame = getattr(origin, 'frame', origin)
            if frame:
                try: T_origin = Transformation.from_frame(frame)
                except Exception: pass
            
            T_local = T_origin * T_scale
            meshes_to_add = shape.meshes if hasattr(shape, 'meshes') else [shape]
            
            for item in meshes_to_add:
                if item is not None:
                    ghost_tool_mesh = item.copy()
                    # Final Pos = Final Flange * Mounting Offset * Local Mesh Offset
                    ghost_tool_mesh.transform(T_parent * T_attach * T_local)
                    viewer.add_geometry(ghost_tool_mesh, material=ghost_mat)

# ======================================================================
# 7. THE CALLBACK
# ======================================================================
def scrub_robot(value):
    val = value[0] if isinstance(value, list) else value
    frame_index = int(val)
    point = trajectory.points[frame_index]


    
    config = Configuration(
        joint_values=point.joint_values,
        joint_types=point.joint_types,
        joint_names=trajectory.joint_names
    )

    full_config = cell_state.robot_configuration.merged(config)

    # A. Update Robot Links
    for link in model.iter_links():
        link_name = link.name
        if link_name in link_id_map and link_id_map[link_name]:
            link_frame = model.forward_kinematics(full_config, link_name=link_name)
            T_link = Transformation.from_frame(link_frame)
            for mesh_data in link_id_map[link_name]:
                viewer.transform(mesh_data['geometry'], T_link * mesh_data['T_local'])
                
    # B. Update Tool Links based on Cell State
    for tool_name, t_state in cell_state.tool_states.items():
        t_model = robot_cell.tool_models[tool_name]
        parent_link = t_model.connected_to
        
        parent_frame = model.forward_kinematics(config, link_name=parent_link)
        T_parent = Transformation.from_frame(parent_frame)
        T_attach = Transformation.from_frame(t_state.attachment_frame) if t_state.attachment_frame else Transformation()
        
        for t_link in t_model.iter_links():
            unique_name = f"{tool_name}_{t_link.name}"
            if unique_name in link_id_map:
                for mesh_data in link_id_map[unique_name]:
                    T_final = T_parent * T_attach * mesh_data['T_local']
                    viewer.transform(mesh_data['geometry'], T_final)
                    
    # C. Update RigidBody Links 
    for rb_name, rb_state in cell_state.rigid_body_states.items():
        if rb_name not in link_id_map: 
            continue
            
        # Is it picked up by a tool? (Dynamic Pick-and-Place!)
        if getattr(rb_state, 'attached_to_tool', None):
            tool_name = rb_state.attached_to_tool
            t_model = robot_cell.tool_models[tool_name]
            
            flange_frame = model.forward_kinematics(config, link_name=t_model.connected_to)
            T_flange = Transformation.from_frame(flange_frame)
            
            T_attach = Transformation.from_frame(rb_state.attachment_frame) if rb_state.attachment_frame else Transformation()
            for mesh_data in link_id_map[rb_name]:
                viewer.transform(mesh_data['geometry'], T_flange * T_attach)
    
    # D. [NEW] Update Dynamic Workpieces
    for wp_name, data in pnp_data["workpieces"].items():
        if wp_name not in link_id_map:
            continue
            
        # 1. Find the active state for the current frame
        current_state = None
        for state in data["states"]:
            if state["start_frame"] <= frame_index < state["end_frame"]:
                current_state = state
                break
                
        if not current_state:
            continue
            
        T_state = current_state["transform"]
        
        # 2. Determine the parent matrix
        if current_state["parent"] == "world":
            # If resting on a table, the final transform is just its state transform
            T_final = T_state
        else:
            # If attached to a tool, multiply TCP * ToolAttachOffset * StateTransform
            tool_name = current_state["parent"]
            t_model = robot_cell.tool_models[tool_name]
            
            # Get robot flange matrix
            flange_frame = model.forward_kinematics(full_config, link_name=t_model.connected_to)
            T_flange = Transformation.from_frame(flange_frame)
            
            # Get tool mounting offset
            t_state = cell_state.tool_states[tool_name]
            T_tool_attach = Transformation.from_frame(t_state.attachment_frame) if t_state.attachment_frame else Transformation()
            
            T_final = T_flange * T_tool_attach * T_state
            
        # 3. Apply the matrix override
        for mesh_data in link_id_map[wp_name]:
            viewer.transform(mesh_data['geometry'], T_final * mesh_data['T_local'])

    # E. Update TCP Triad (Only 3 updates per frame!)
    flange_frame = model.forward_kinematics(config, link_name=end_effector_name)
    T_flange = Transformation.from_frame(flange_frame)
    T_tcp = T_flange * Translation.from_vector([0, 0, 0.2])
    for guid in triad_objects:
        viewer.transform(guid, T_tcp)

# ======================================================================
# 8. Add UI and Launch
# ======================================================================
slider = Slider(
    label="Scrub Trajectory", min=0, max=len(trajectory.points) - 1, step=1,
    default_value=0, action=scrub_robot
)
viewer.add_ui_element(slider)
scrub_robot([0]) 

viewer.start(show=False)
