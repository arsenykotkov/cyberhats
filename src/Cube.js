import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Cube(props) {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        mesh.current.rotation.x += 0.005;
        mesh.current.rotation.y += 0.006
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.1 : 1}
            onClick={event => {
                event.stopPropagation();
                setActive(!active)
            }}
            onPointerOver={event => {
                event.stopPropagation();
                setHover(true);
            }}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'pink' : 'orange'} />
        </mesh>
    )
}