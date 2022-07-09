import React, { Suspense, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Cap from "./Cap";

export default function App() {
  const [visorColor, setVisorColor] = useState('#ffffff');
  return (
    <>
      <input type='color' id='visorColor' name='visorColor' value={visorColor} onChange={event => setVisorColor(event.target.value)} />
      <Canvas style={{height: '100vh'}}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={2}
        />
        <Suspense> {/* Catch errors */}
          <ambientLight />
          <spotLight
            intensity={0.9}
            position={[10, 15, 10]}
            penumbra={1}
            angle={0.1}
            castShadow
          />
          <Cap customColors={{
            crown: 'white',
            topPoint: 'grey',
            visor: visorColor,
            cape: 'skyblue'
          }}/>
        </Suspense>
      </Canvas>
    </>
  );
}