import React, { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cap from "./Cap";
import { Button, Collapse } from "antd";
import { CirclePicker } from "react-color";
const { Panel } = Collapse;

export default function App() {
  const [visorColor, setVisorColor] = useState('#ffffff');
  const [autoRotationEnabled, setAutoRotationEnabled] = useState(true);
  const [capeVisibility, setCapeVisibility] = useState(true);

  function modelHandler(data) {
    console.log(data)
  }

  return (
    <>
      <Canvas style={{ height: '100vh', position: 'absolute' }}>
        <OrbitControls
          autoRotate={autoRotationEnabled}
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
          <Cap
            onChange={modelHandler}
            customColors={{
              crown: 'white',
              topPoint: 'grey',
              visor: visorColor,
              cape: 'skyblue'
            }}
            visibleObjects={{
              cape: capeVisibility
            }}
          />
        </Suspense>
      </Canvas>
      <Collapse accordion style={{ width: '230px' }}>
        <Panel header="Козырёк" key={1} style={{ overflow: 'auto' }}>
          <CirclePicker width="auto" onChange={color => setVisorColor(color.hex)} />
        </Panel>
        <Panel header="Отлетная часть" key={2}>
          <Button
            onClick={() => {
              setCapeVisibility(capeVisibility ? false : true);
            }}
            type={capeVisibility ? 'default' : 'primary'}
          >
            {capeVisibility ? 'Скрыть' : 'Показать'}
          </Button>
        </Panel>
      </Collapse>
      <Button
        onClick={() => setAutoRotationEnabled(autoRotationEnabled ? false : true)}
        type={autoRotationEnabled ? 'default' : 'primary'}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        {autoRotationEnabled ? 'Остановить' : 'Вращать'}
      </Button>
    </>
  );
}