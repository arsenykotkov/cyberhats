import React from 'react'
import { Canvas } from '@react-three/fiber'
import CameraControls from './CameraControls'
import Cube from './Cube';

function Identica() {
  return (
    <Canvas style={{ 'height': 'calc(100vh - 46px)' }}>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[-1.2, 0, 0]} />
      <Cube position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default Identica;