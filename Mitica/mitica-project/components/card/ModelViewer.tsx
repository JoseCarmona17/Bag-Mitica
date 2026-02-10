"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ModelProps {
  url: string;
  selectedPart: string | null;
  colors: { [key: string]: string };
}

// Mapeo de tabs a los meshes del modelo
const MESH_MAPPING: { [key: string]: string[] } = {
  "Front 1": ["LeatherGeo1"],
  "Front 2": ["LeatherGeo2"],
  "Flap": ["LeatherGeo3"],
  "Closure": ["LeatherGeo4"],
  "Band": ["LeatherGeo5"],
  "Edge": ["LeatherGeo6"],
  "Straps": ["LeatherGeo7"],
  "Back": ["LeatherGeo8"],
  "Loops": ["LeatherGeo9"],
  "Bottom": ["LeatherGeo10"],
  "Metals": ["MetalGeo"],
  "Customization": ["OwnerNameGeo"],
};

function Model({ url, selectedPart, colors }: ModelProps) {
  const { scene } = useGLTF(url);
  const originalMaterials = useRef<Map<string, THREE.Material>>(new Map());

  // Guardar los materiales originales solo una vez
  useEffect(() => {
    if (originalMaterials.current.size === 0) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          // Clonar el material original para preservarlo
          originalMaterials.current.set(
            child.name,
            child.material.clone()
          );
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Restaurar material original primero
        const originalMaterial = originalMaterials.current.get(child.name);
        
        if (originalMaterial) {
          // Clonar el material original
          child.material = originalMaterial.clone();
          
          // Aplicar tinte de color si existe
          for (const [part, meshNames] of Object.entries(MESH_MAPPING)) {
            if (meshNames.includes(child.name) && colors[part]) {
              const material = child.material as THREE.MeshStandardMaterial;
              // Aplicar el color como tinte multiplicativo
              material.color.set(colors[part]);
            }
          }

          // Highlight de la parte seleccionada
          if (selectedPart) {
            const selectedMeshes = MESH_MAPPING[selectedPart] || [];
            if (selectedMeshes.includes(child.name)) {
              const material = child.material as THREE.MeshStandardMaterial;
              material.emissive.set(0x444444);
              material.emissiveIntensity = 0.15;
            }
          }
        }
      }
    });
  }, [scene, selectedPart, colors]);

  return (
    <Center>
      <primitive object={scene} scale={5} position={[0, -1.5, 0]} />
    </Center>
  );
}

interface ModelViewerProps {
  selectedPart: string | null;
  colors: { [key: string]: string };
}

export default function ModelViewer({ selectedPart, colors }: ModelViewerProps) {
  return (
    <div className="h-[360px] w-full">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        {/* Iluminación */}
        <ambientLight intensity={3.0} />

        <hemisphereLight intensity={0.8} groundColor="#444" color="#ffffff" />

        <directionalLight position={[5, 5, 5]} intensity={1.8} />

        <directionalLight position={[-5, 3, -5]} intensity={1.2} />

        <Model
          url="/BZ-FNTN-NMM_v12.glb"
          selectedPart={selectedPart}
          colors={colors}
        />

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