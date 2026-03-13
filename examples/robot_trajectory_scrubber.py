import time
from compas.geometry import Transformation, Scale
from compas_robots import RobotModel, Configuration
from compas_fab.robots.robot_library import RobotCellLibrary
from compas_fab.robots import JointTrajectory, JointTrajectoryPoint

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
    angle = (i / 100.0) * 1.57  # 0 to 90 degrees
    trajectory_points.append(JointTrajectoryPoint(
        joint_values=[angle, angle, angle, angle, angle, angle],
        joint_types=[0, 0, 0, 0, 0, 0]
    ))
trajectory = JointTrajectory(trajectory_points=trajectory_points, joint_names=joint_names)

# 4. Extract meshes WITH their Local Scales and Offsets
link_id_map = {}
for link in model.iter_links():
    link_id_map[link.name] = []
    
    for visual in link.visual:
        shape = visual.geometry.shape
        
        # --- A. Extract Local Scale ---
        T_scale = Transformation()
        if hasattr(shape, 'scale') and shape.scale:
            sx, sy, sz = shape.scale
            # Prevent empty scaling issues
            if sx is not None:
                T_scale = Scale.from_factors([sx, sy, sz])
                
        # --- B. Extract Local Offset (Origin) ---
        T_origin = Transformation()
        frame = getattr(visual, 'init_frame', None)
        if not frame:
            origin = getattr(visual, 'origin', None)
            if origin:
                frame = getattr(origin, 'frame', origin)
                
        if frame:
            try:
                T_origin = Transformation.from_frame(frame)
            except Exception:
                pass
                
        # Combine: Scale the mesh first, then offset it!
        T_local = T_origin * T_scale
        
        # --- C. Add to Viewer ---
        meshes_to_add = shape.meshes if hasattr(shape, 'meshes') else [shape]
        for item in meshes_to_add:
            if item is not None:
                viewer.add_geometry(item)
                # We now store a DICTIONARY containing the GUID and its required local offset
                link_id_map[link.name].append({
                    "guid": str(item.guid),
                    "T_local": T_local
                })

# 5. The Callback
def scrub_robot(value):
    val = value[0] if isinstance(value, list) else value
    frame_index = int(val)
    point = trajectory.points[frame_index]
    
    config = Configuration(
        joint_values=point.joint_values,
        joint_types=point.joint_types,
        joint_names=trajectory.joint_names
    )
    
    for link_name, mesh_list in link_id_map.items():
        if not mesh_list:
            continue
            
        # 1. Ask COMPAS for the GLOBAL frame of the link hinge
        link_frame = model.forward_kinematics(config, link_name=link_name)
        T_link = Transformation.from_frame(link_frame)
        
        for mesh_data in mesh_list:
            guid = mesh_data['guid']
            T_local = mesh_data['T_local']
            
            # 2. Final Position = Global Hinge location * Local Mesh Offset
            T_final = T_link * T_local
            viewer.update_transform(guid, T_final)

# 6. Add UI and Launch
slider = Slider(
    label="Scrub Trajectory",
    min=0, 
    max=len(trajectory.points) - 1, 
    step=1,
    default_value=0,  # <-- Force slider to start at 0
    action=scrub_robot
)
viewer.add_ui_element(slider)

scrub_robot([0]) 

viewer.start(show=True)