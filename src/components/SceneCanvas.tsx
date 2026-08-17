import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(1300 * 3)
    for (let i = 0; i < arr.length; i += 3) {
      const r = 8 + Math.random() * 18
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i] = r * Math.sin(phi) * Math.cos(theta)
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.018
    ref.current.rotation.x = state.pointer.y * 0.025
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#88f7dd" size={0.028} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  )
}

function Core() {
  const group = useRef<THREE.Group>(null)
  const shell = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!group.current || !shell.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x += delta * 0.025
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.45, 0.025)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, state.pointer.y * 0.25, 0.025)
    shell.current.rotation.z -= delta * 0.08
  })

  return (
    <group ref={group} position={[2.5, 0.1, -0.6]}>
      <mesh ref={shell}>
        <icosahedronGeometry args={[2.25, 2]} />
        <meshBasicMaterial color="#9b8cff" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh rotation={[0.55, 0.4, 0.2]}>
        <torusGeometry args={[2.65, 0.012, 16, 180]} />
        <meshBasicMaterial color="#70f2cf" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[1.0, -0.65, 0.5]}>
        <torusGeometry args={[3.15, 0.008, 16, 180]} />
        <meshBasicMaterial color="#63c5ff" transparent opacity={0.32} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.88, 48, 48]} />
        <meshStandardMaterial color="#11182c" emissive="#305d69" emissiveIntensity={0.8} roughness={0.25} metalness={0.75} />
      </mesh>
    </group>
  )
}

function CatHead() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const isNarrow = window.innerWidth <= 980
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (isNarrow ? 0.04 : 0.02) + Math.sin(state.clock.elapsedTime * 1.15) * 0.06,
      0.08,
    )
  })

  const fur = '#d8ffe9'
  const innerEar = '#ff9db7'
  const dark = '#08130f'
  const eye = '#9effc6'

  return (
    <group
      ref={group}
      position={[0, 0.02, 0]}
      scale={window.innerWidth <= 980 ? 1.02 : 1.24}
      rotation={[-0.04, 0, 0]}
    >
      <mesh scale={[1, 0.86, 0.84]}>
        <sphereGeometry args={[1.82, 48, 32]} />
        <meshStandardMaterial color={fur} roughness={0.48} metalness={0.08} />
      </mesh>
      {[-1.04, 1.04].map((x) => (
        <group key={x}>
          <mesh position={[x, 1.15, -0.03]} rotation={[0, 0, x < 0 ? 0.16 : -0.16]}>
            <coneGeometry args={[0.72, 1.65, 3]} />
            <meshStandardMaterial color={fur} roughness={0.48} metalness={0.08} />
          </mesh>
          <mesh position={[x, 1.15, 0.18]} rotation={[0, 0, x < 0 ? 0.16 : -0.16]}>
            <coneGeometry args={[0.42, 1.05, 3]} />
            <meshStandardMaterial color={innerEar} roughness={0.7} />
          </mesh>
        </group>
      ))}
      {[-0.63, 0.63].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.18, 1.38]} scale={[1, 1.18, 0.5]}>
            <sphereGeometry args={[0.34, 28, 20]} />
            <meshStandardMaterial color={dark} roughness={0.38} />
          </mesh>
          <mesh position={[x, 0.18, 1.62]} scale={[0.68, 1.2, 0.48]}>
            <sphereGeometry args={[0.19, 24, 16]} />
            <meshPhysicalMaterial color={eye} emissive="#1b5c39" emissiveIntensity={0.7} roughness={0.18} clearcoat={1} />
          </mesh>
        </group>
      ))}
      {[-0.34, 0.34].map((x) => (
        <mesh key={x} position={[x, -0.47, 1.37]} scale={[1.05, 0.64, 0.6]}>
          <sphereGeometry args={[0.42, 28, 20]} />
          <meshStandardMaterial color="#f3fff7" roughness={0.75} />
        </mesh>
      ))}
      <mesh position={[0, -0.34, 1.55]} rotation={[0, 0, Math.PI]} scale={[0.13, 0.11, 0.08]}>
        <coneGeometry args={[1, 1, 3]} />
        <meshStandardMaterial color="#ff789d" roughness={0.7} />
      </mesh>
    </group>
  )
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.35, 0.025)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.2, 0.025)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export function SceneCanvas() {
  const [showCat, setShowCat] = useState(true)

  useEffect(() => {
    const updateScene = () => setShowCat(window.scrollY < window.innerHeight * 0.7)
    updateScene()
    window.addEventListener('scroll', updateScene, { passive: true })
    window.addEventListener('resize', updateScene)
    return () => {
      window.removeEventListener('scroll', updateScene)
      window.removeEventListener('resize', updateScene)
    }
  }, [])

  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.7]} camera={{ position: [0, 0, 9], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 6, 4]} intensity={2} color="#b9ffef" />
        <pointLight position={[-4, -2, 4]} intensity={15} color="#6657ff" distance={12} />
        <StarField />
        {showCat ? <CatHead /> : <Core />}
        <CameraRig />
      </Canvas>
    </div>
  )
}
