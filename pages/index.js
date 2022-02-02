import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'

export default function IndexPage() {
  
  return (
    <>
      
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Box position={[10, 0,50]} endPos={12}/>
        <Box position={[-10, 0, 40]} endPos={13}/>
        <Box position={[0, 10, 35]} endPos={11}/>
        <Box position={[0, -10, 25]} endPos={10}>
        </Box>
        <OrbitControls />
      </Canvas>
    </>
  )
}
