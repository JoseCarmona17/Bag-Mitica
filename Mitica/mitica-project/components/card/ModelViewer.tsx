"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  return (
    <Center>
      <primitive
        object={scene}
        scale={5}
        position={[0, -1.5, 0]}
      />
    </Center>
  );
}

export default function ModelViewer() {
  return (
    <div className="h-[360px] w-full">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        {/* Iluminación */}
        <ambientLight intensity={3.0} />

        <hemisphereLight
          intensity={0.8}
          groundColor="#444"
          color="#ffffff"
        />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1.8}
        />

        <directionalLight
          position={[-5, 3, -5]}
          intensity={1.2}
        />

        <Model url="/BZ-FNTN-NMM_v12.glb" />

        {/* Controles */}
        <OrbitControls
          enableZoom
          enablePan={false}
          rotateSpeed={0.8}
          minDistance={1.5}
          maxDistance={2.5}
        />
      </Canvas>
    </div>
  );
}