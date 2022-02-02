import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.position.lerp(
      new THREE.Vector3(props.position[0], props.position[1], props.endPos),
      0.05
    );
    if(hovered)
    {
      mesh.current.position.z += 0.15;
    }
  });
  const texture = useMemo(() => new THREE.TextureLoader().load(props.logo), []);
  return (
    <NativeBox
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      castShadow={true}
      scale={[10, 10, 0.2]}
      //scale={active ? [6, 6, 6] : [5, 5, 5]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshPhysicalMaterial
        map={texture}
        attach="material"
        color={"rgb(120,120,120)"}
        clearcoat={0.2}
        metalness={0.1}
        opacity={0.8}
        transparent={true}
        clearcoatRoughness={0.4}
      />
    </NativeBox>
  );
}
