import { Center, Environment, OrbitControls, Shadow } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CameraRig } from './CameraRig'
import { Shirt } from '../models/Shirt'

export const CanvasModel = () => {
    
    return (
        <Canvas 
          camera={{ position: [0, 0, 2.5], fov: 20 }}
          style={{ backgroundColor: '#eeeeee', height: '100vh' }}
          gl={{ preserveDrawingBuffer: true }}

        >
        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={1} 
          maxPolarAngle={1.5} 
          minAzimuthAngle={-1}
          maxAzimuthAngle={1}
        />
        
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
    
        <CameraRig>
          {/* <Backdrop /> */}
    
          <Center>
            <Shirt />
          </Center>
          <Shadow 
              scale={[3, 4, 3]} 
              position={[-0.2, -0.4, 0]} 
              rotation={[-Math.PI / 10, 0, 0]} 
              color={'#0a0a08'}
            />
        </CameraRig>
      </Canvas>
    )
  }
  