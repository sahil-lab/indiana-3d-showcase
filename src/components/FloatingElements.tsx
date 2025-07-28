import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
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

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.3]} position={position}>
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
        </Sphere>;
      case 'box':
        return <Box ref={meshRef} args={[0.4, 0.4, 0.4]} position={position}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
        </Box>;
      case 'torus':
        return <Torus ref={meshRef} args={[0.3, 0.1]} position={position}>
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
        </Torus>;
      default:
        return null;
    }
  };

  return renderGeometry();
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