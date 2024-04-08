import {
  Center,
  Cloud,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { easing } from "maath";

import { Suspense, useMemo, useReducer, useRef, useState } from "react";
import Loader from "./Loader";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

export default function Experience(props: any) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <>
      <Canvas
        shadows
        onClick={click}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
        {...props}
      >
        <color attach="background" args={["#141622"]} />
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Physics /*debug*/ gravity={[0, 0, 0]}>
          <Pointer />
          {
            connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
          }
          <Connector position={[10, 10, 5]}>
            <Model>
              <MeshTransmissionMaterial
                clearcoat={1}
                thickness={0.1}
                anisotropicBlur={0.1}
                chromaticAberration={0.1}
                samples={8}
                resolution={512}
                distortionScale={0}
                temporalDistortion={0}
              />
            </Model>
          </Connector>
        </Physics>
        <EffectComposer disableNormalPass multisampling={8}>
          <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        </EffectComposer>

        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer
              form="circle"
              intensity={4}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={8}
            />
          </group>
        </Environment>
      </Canvas>
    </>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

interface ConnectorProps {
  position?: [number, number, number];
  children?: React.ReactNode;
  vec?: THREE.Vector3;
  scale?: number;
  accent?: boolean;
  color?: string;
  roughness?: number;
  r?: (spread: number) => number;
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  r = THREE.MathUtils.randFloatSpread,
  accent,
  color = "white",
  roughness = 0.1,
  ...props
}: ConnectorProps) {
  const api = useRef<any>(null);
  const pos: [number, number, number] = useMemo(
    () => position || [r(10), r(10), r(10)],
    [position, r]
  );

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
  });

  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && <pointLight intensity={4} distance={2.5} color={color} />}
    </RigidBody>
  );
}

interface ModelProps extends MeshProps {
  children?: React.ReactNode;
  color?: string;
  roughness?: number;
}

interface ModelGLTF extends GLTF {
  nodes: any;
  materials: {
    base: THREE.MeshStandardMaterial;
  };
}

function Model({
  children,
  color = "white",
  roughness = 0,
  ...props
}: ModelProps) {
  const ref = useRef<any>(null);
  const { nodes, materials } = useGLTF("/model/mug.glb") as ModelGLTF;
  // console.log(nodes.Scene.children[0]);

  useFrame((state, delta) => {
    if (ref.current) {
      easing.dampC(ref.current.material.color, color, 0.2, delta);
    }
  });

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={1}
      geometry={nodes.Scene.children[0].geometry}
    >
      <meshStandardMaterial metalness={0.2} roughness={roughness} />
      {children}
    </mesh>
  );
}
