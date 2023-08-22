import { PropsWithChildren, useRef } from "react"
import { Group } from "three"

export const CameraRig = ({ children }: PropsWithChildren) => {
  const group = useRef<Group>(null)

//   useFrame((state, delta) => {
//     const isBreakpoint = window.innerWidth <= 1260;
//     const isMobile = window.innerWidth <= 600

//     let targetPosition: [x: number,  y: number, z: number] = [-0.4, 0, 2]
//     if (snap.intro) {
//       if (isBreakpoint) targetPosition = [0, 0, 2]
//       if (isMobile) targetPosition = [0, 0.8, 2.5]
//     } else {
//       if (isMobile) targetPosition = [0, 0, 2.5]
//       else targetPosition = [0, 0, 2]
//     }

//     easing.damp3(state.camera.position, targetPosition, 0.25, delta)

//     easing.dampE(
//       group.current!.rotation,
//       [state.pointer.y / 5, -state.pointer.x / 3, 0],
//       0.25,
//       delta
//     )
//   })

  

  return (
    <group ref={group}>{children}</group>
  )
}
