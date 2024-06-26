"use client";
import {
  Box,
  Center,
  Cloud,
  Environment,
  Instance,
  Instances,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  Sphere,
  useGLTF,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import useStore from "@/app/lib/store";
// import { Model } from "./LogoModel";
import { easing } from "maath";
import * as THREE from "three";

import { Suspense, useEffect, useMemo, useReducer, useRef } from "react";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useMediaQuery } from "@mantine/hooks";
import Loader from "../loader/loader";
import React from "react";

const accents = ["#fc5e9b", "#ad79f5", "#ffdcb5"];
const shuffle = (accent = 0) => [
  // { color: "#444", roughness: 0.1 },
  // { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  // { color: "white", roughness: 0.1 },
  // { color: "white", roughness: 0.75 },
  { color: "#ad79f5", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

export default function Experience(props: any) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  const matches = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Canvas
        shadows
        onClick={click}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 15], fov: 17.5 }}
        {...props}
      >
        {/* <Perf /> */}
        {/* <OrbitControls /> */}
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
          {matches && (
            <Connector position={[0, 0, 0]}>
              <Model>
                <meshStandardMaterial metalness={0.2} roughness={0} />
              </Model>
            </Connector>
          )}
        </Physics>

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
      <BallCollider args={[0.75]} />
      {/* <Sphere args={[0.75]}>
        <meshStandardMaterial color="red" wireframe />
      </Sphere> */}
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
    // <Instance >
    <RigidBody
      linearDamping={2}
      angularDamping={2}
      friction={2}
      ref={api}
      colliders={false}
      position={pos}
    >
      <CuboidCollider args={[1, 1, 0.38]} />
      {/* <mesh>
        <boxBufferGeometry args={[1, 1, 0.38]} />
        <meshStandardMaterial color="red" wireframe />
      </mesh> */}
      <CuboidCollider args={[0.38, 0.38, 1.17]} />
      {/* <mesh>
        <boxBufferGeometry args={[0.38, 0.38, 1.17]} />
        <meshStandardMaterial color="red" wireframe />
      </mesh> */}
      {children ? children : <Model {...props} color={color} />}
      {accent && <pointLight intensity={4} distance={2.5} color={color} />}
    </RigidBody>
    // </Instance>
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

function ModelComponent({
  children,
  color = "white",
  roughness = 0,
  ...props
}: ModelProps) {
  const ref = useRef<any>(null);
  const { isLoaded, setLoaded } = useStore();
  const { nodes, materials } = useGLTF("/model/mug.glb") as ModelGLTF;

  useEffect(() => {
    if (nodes) {
      setLoaded(true);
    }
  }, [nodes, isLoaded, setLoaded]);

  const matches = useMediaQuery("(min-width: 800px)");
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
      scale={matches ? 0.8 : 0.5}
      geometry={nodes.Scene.children[0].geometry}
    >
      <meshStandardMaterial metalness={0.2} roughness={roughness} />
      {children}
    </mesh>
  );
}

const Model = React.memo(ModelComponent, (prevProps, nextProps) => {
  return (
    prevProps.color === nextProps.color &&
    prevProps.roughness === nextProps.roughness
  );
});
