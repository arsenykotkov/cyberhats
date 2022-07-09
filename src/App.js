import React, { useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function App() {
  const ref = useRef();
  return (
    <Canvas>
      <mesh ref={ref}>
        <boxGeometry attach={'geometry'} args={[2, 2, 2]} />
      </mesh>
    </Canvas>
  );
}