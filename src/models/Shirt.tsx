import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useAppSelector } from '../hooks/useAppSelector'

export function Shirt() {
  const { color } = useAppSelector(state => state.root)

  //@ts-ignore
  const { nodes, materials } = useGLTF('models/shirt_baked_2.glft')
  useFrame((_, delta) => easing.dampC(materials.lambert1.color, color, 0.4, delta))
  return (
    <mesh 
      receiveShadow 
      castShadow
      geometry={nodes.T_Shirt_male.geometry} 
      material={materials.lambert1} 
      material-roughness={5} 
      position={[0, -0.03 , 0]}
      rotation={[1.5, 0, 0]} scale={1} 
      dispose={null}>
  
    </mesh>
  )
}

useGLTF.preload('models/shirt_baked_2.glb')
