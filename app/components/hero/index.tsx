"use client";
import { useMediaQuery } from "@mantine/hooks";
import Experience from "../experience";
import s from "./hero.module.scss";

export default function Hero() {
  const matches = useMediaQuery("(min-width: 800px)");
  const borderRadius = matches ? 20 : 0;
  return (
    <>
      <div className={s.hero}>
        <div className={s.canvas_container}>
          <Experience style={{ borderRadius: borderRadius }} />
        </div>
      </div>
    </>
  );
}
