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

  return (
    <>
      <div className={s.hero}>
        <div className={`${s.canvas_container} mask`}>
          <Experience style={{ borderRadius: borderRadius }} />
        </div>
      </div>
    </>
  );
}
