"use client";
import { Html, useProgress } from "@react-three/drei";
import s from "./loader.module.scss";
import useStore from "@/app/lib/store";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const { isLoaded } = useStore();
  const textRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isLoaded && textRef.current) {
      console.log("loaded", textRef.current.querySelectorAll(".char"));

      gsap.to(textRef.current.children, {
        duration: 1,
        // yPercent: 100,
        scale: 3,
        stagger: 0.1,
        opacity: 0,
        ease: "power1.inOut",
      });
      gsap.to(wrapperRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
        display: "none",
      });
    }
  }, [isLoaded]);
  return (
    <div className={s.loader_wrapper} ref={wrapperRef}>
      <h1 ref={textRef}>
        <span className="char">C</span>
        <span className="char">A</span>
        <span className="char">R</span>
        <span className="char">G</span>
        <span className="char">A</span>
        <span className="char">N</span>
        <span className="char">D</span>
        <span className="char">O</span>
      </h1>
    </div>
  );
}
