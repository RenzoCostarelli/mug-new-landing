"use client";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import Experience from "../experience";
import s from "./hero.module.scss";
import { Canvas } from "@react-three/fiber";
import UI from "../ui";

export default function Hero() {
  return (
    <>
      <div className={s.hero}>
        <div className={s.canvas_container}>
          {/* <Canvas
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            camera={{
              fov: 45,
              near: 0.1,
              far: 100,
              position: [0, 0, 5],
            }}
          >
        </Canvas> */}
          <Experience style={{ borderRadius: 20 }} />
        </div>
      </div>
    </>
  );
}
