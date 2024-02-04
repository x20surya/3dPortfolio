import React, { Suspense, useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { useFBX } from "@react-three/drei"
import { useAnimations } from "@react-three/drei"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader" 

const Man = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./earth.glb')
  const { actions, names } = useAnimations(animations, group)
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh castShadow name="MutantMesh" geometry={nodes.MutantMesh.geometry} material={materials.mutant_M} skeleton={nodes.MutantMesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./earth.glb')

const EarthCanvas = () => {
  return (
    <Canvas
      
      gl={{ preserveDrawingBuffer: true }}
      camera={{position : [1,1.5,2.5], fov:50}}
      shadows
    >
      <ambientLight intensity={2} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        enablePan={false}
        />
        <group position={[0,-1,0]}>
          <Man />
        </group>
        
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas