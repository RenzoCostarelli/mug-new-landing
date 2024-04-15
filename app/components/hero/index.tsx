"use client";
import { useMediaQuery } from "@mantine/hooks";
import Experience from "../experience";
import s from "./hero.module.scss";
import { Suspense, useEffect, useRef } from "react";
import Loader from "../loader/loader";
import { gsap } from "gsap";
import useStore from "@/app/lib/store";

export default function Hero() {
  const matches = useMediaQuery("(min-width: 800px)");
  const borderRadius = matches ? 20 : 0;
  const { isLoaded } = useStore();
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (isLoaded) {
        gsap.to(maskRef.current, {
          duration: 2,
          opacity: 1,
          delay: 2,
        });
      }
    });

    return () => ctx.revert();
  }, [isLoaded]);
  return (
    <>
      <div className={s.hero}>
        <div className={`${s.canvas_container} mask`} ref={maskRef}>
          <Experience style={{ borderRadius: borderRadius }} />
        </div>
      </div>
    </>
  );
}
