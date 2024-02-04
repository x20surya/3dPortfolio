import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const model = useGLTF("./lieutenantHead/lieutenantHead.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor="black" />
      <pointLight position={[2, 1, -2]} intensity={12}/>
      <pointLight position={[-2, -1, 2]} intensity={10}/>
      <pointLight position={[2, -1, 2]} intensity={2}/>
      <primitive
        object={model.scene}
        scale={isMobile ? 0.9 : 1}
        position={[-4, -1, 0]}
        rotation={[0.01, -1.6, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e)=>{
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [15, 6, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
     
     <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      autoRotate={true}
      autoRotateSpeed={2}
      enablePan={false}
      />
      <group scale={0.8}>
      <Computers isMobile={isMobile}/>
      </group>
     </Suspense>
     <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas