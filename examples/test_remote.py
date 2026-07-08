"""
Quick test to verify the Remote class can be imported and instantiated.
This doesn't test the actual connection (which requires a running Viewer).
"""

from compas_threejs.viewer import Remote

# Test instantiation
remote = Remote()
print(f"✓ Remote instance created")
print(f"  Host: {remote.host}")
print(f"  Port: {remote.port}")
print(f"  WS URL: {remote.ws_url}")
print(f"  Connected: {remote.connected}")

# Test instantiation with custom host/port
remote2 = Remote(host="192.168.1.1", port=8080)
print(f"\n✓ Remote instance with custom settings created")
print(f"  Host: {remote2.host}")
print(f"  Port: {remote2.port}")
print(f"  WS URL: {remote2.ws_url}")

# Test context manager
with Remote() as remote3:
    print(f"\n✓ Remote context manager works")
    print(f"  Remote instance: {remote3}")

print("\n✓ All basic tests passed!")
print("\nTo test actual functionality:")
print("1. Run: python examples/remote_viewer.py")
print("2. In another terminal, run: python examples/remote_client.py")
