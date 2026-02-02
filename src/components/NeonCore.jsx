import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Float, MeshDistortMaterial, Stars } from '@react-three/drei';

function Reactor({ ...props }) {
  const meshRef = useRef();
  
  // Auto-rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <MeshDistortMaterial
        color="#111"
        emissive="#D1F238" // Neon
        emissiveIntensity={2}
        roughness={0.1}
        metalness={1}
        distort={0.3} // Sci-fi warping effect
        speed={2}
      />
    </mesh>
  );
}

const NeonCore = () => {
  return (
    <div className="neon-core-container" style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#D1F238" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fff" />
        
        {/* Interactive Controls */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Reactor scale={1.2} />
          </Float>
        </PresentationControls>
        
        {/* Background Particles */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default NeonCore;
