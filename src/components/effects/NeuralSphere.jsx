import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 140 }) {
  const mesh = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 2.8;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      scales[i] = Math.random() * 0.5 + 0.2;
    }
    return { positions, scales };
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.04;
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.025) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles.positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#818cf8"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ConnectionLines({ count = 70 }) {
  const linesRef = useRef();

  const lineData = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.acos(2 * Math.random() - 1);
      const r1 = 2.2 + Math.random() * 2;
      const x1 = r1 * Math.sin(phi1) * Math.cos(theta1);
      const y1 = r1 * Math.sin(phi1) * Math.sin(theta1);
      const z1 = r1 * Math.cos(phi1);
      const theta2 = theta1 + (Math.random() - 0.5) * 0.8;
      const phi2 = phi1 + (Math.random() - 0.5) * 0.8;
      const r2 = 2.2 + Math.random() * 2;
      const x2 = r2 * Math.sin(phi2) * Math.cos(theta2);
      const y2 = r2 * Math.sin(phi2) * Math.sin(theta2);
      const z2 = r2 * Math.cos(phi2);
      positions.push(x1, y1, z1, x2, y2, z2);
    }
    return new Float32Array(positions);
  }, [count]);

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    linesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.025) * 0.1;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count * 2} array={lineData} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.06} blending={THREE.AdditiveBlending} depthWrite={false} />
    </lineSegments>
  );
}

function CoreSphere() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.06;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.4}>
      <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <icosahedronGeometry args={[1.8, 1]} />
        <MeshDistortMaterial
          color="#4f46e5"
          emissive="#6366f1"
          emissiveIntensity={hovered ? 0.4 : 0.2}
          roughness={0.4}
          metalness={0.8}
          wireframe
          distort={0.15}
          speed={2}
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.12}
          roughness={0.5}
          metalness={0.9}
          wireframe
          distort={0.1}
          speed={1.5}
          transparent
          opacity={0.12}
        />
      </mesh>
    </Float>
  );
}

function GlowOrbs() {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = -clock.getElapsedTime() * 0.06;
  });

  return (
    <group ref={group}>
      {[
        { pos: [3.2, 1.5, 0], color: '#818cf8', size: 0.07 },
        { pos: [-2.8, -1, 2], color: '#a78bfa', size: 0.05 },
        { pos: [1, -2.5, -1.5], color: '#6366f1', size: 0.09 },
        { pos: [-1.2, 2.2, -2], color: '#c4b5fd', size: 0.04 },
        { pos: [2.2, 0, -3], color: '#f59e0b', size: 0.06 },
      ].map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[orb.size, 8, 8]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.7} />
          <pointLight color={orb.color} intensity={0.4} distance={3} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const { mouse } = useThree();
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mouse.x * 0.25 - groupRef.current.rotation.y) * 0.015;
    groupRef.current.rotation.x += (-mouse.y * 0.15 - groupRef.current.rotation.x) * 0.015;
  });

  return (
    <group ref={groupRef}>
      <CoreSphere />
      <Particles />
      <ConnectionLines />
      <GlowOrbs />
    </group>
  );
}

export default function NeuralSphere() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.25} color="#818cf8" />
        <directionalLight position={[-5, -3, -5]} intensity={0.1} color="#a78bfa" />
        <Scene />
      </Canvas>
    </div>
  );
}
