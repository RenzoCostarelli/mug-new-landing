"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import s from "./mouse-follower.module.scss";

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorClass, setCursorClass] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: event.clientX - cursorRef.current.offsetWidth / 2,
          y: event.clientY - cursorRef.current.offsetHeight / 2,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      console.log(target.dataset);
      if (target.dataset.cursorVideo !== undefined) {
        setCursorClass("s.video");
        setLabel("Ver Reel");
        gsap.to(cursorRef.current, {
          scale: 1.5,
        });
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      setCursorClass("");
      setLabel("");
      gsap.to(cursorRef.current, {
        scale: 0,
        duration: 0.1,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className={`${s.cursor} ${s.cursorClass}`} ref={cursorRef}>
      {label}
    </div>
  );
}
