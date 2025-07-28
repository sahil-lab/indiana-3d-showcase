import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingElement = ({ position, color, geometry }: { position: [number, number, number], color: string, geometry: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[0.3, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[0.4, 0.4, 0.4]} />;
      case 'torus':
        return <torusGeometry args={[0.3, 0.1, 16, 100]} />;
      default:
        return <sphereGeometry args={[0.3, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

export const FloatingElements = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FF9933" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1E40AF" />
      
      <FloatingElement position={[-2, 1, -3]} color="#FF9933" geometry="sphere" />
      <FloatingElement position={[2, -1, -2]} color="#DC2626" geometry="box" />
      <FloatingElement position={[0, 2, -4]} color="#059669" geometry="torus" />
      <FloatingElement position={[-3, -2, -3]} color="#1E40AF" geometry="sphere" />
      <FloatingElement position={[3, 1, -2]} color="#FFD700" geometry="box" />
    </>
  );
};