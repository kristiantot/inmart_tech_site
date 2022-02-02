import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox, Html } from "@react-three/drei";
import { Vector3 } from "three";
import { Tween } from "three";

export default function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.position.lerp(
      new Vector3(props.position[0], props.position[1], props.endPos),
      0.05
    );
    //   let speedMultiplier = 0;
    //   let speed = 0;
    // speedMultiplier -= 0.5

    // if(mesh.current.position.z > 10.0)
    // {

    //    speed = 0.2 * -speedMultiplier;
    // }
    // mesh.current.position.z -= speed;

    //console.log(mesh.current.position.z);
  });

  return (
    <NativeBox
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={[10, 12, 0.2]}
      //scale={active ? [6, 6, 6] : [5, 5, 5]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        attach="material"
        transparent="true"
        opacity={0.2}
        color={"rgba(127,255,255)"}
      />
      <Html
        style={{
          transition: "all 0.2s",
          opacity: 0.8,
          transform: `scale(5)`,
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        transform
        occlude
      >
        <span>Size</span>
      </Html>
    </NativeBox>
  );
}
