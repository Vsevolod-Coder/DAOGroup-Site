import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial color={0x0077ff} wireframe />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      {" "}
      {/* Контейнер займет весь экран */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
