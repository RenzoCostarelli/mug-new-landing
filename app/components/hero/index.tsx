"use client";

import Experience from "../experience";
import s from "./hero.module.scss";

export default function Hero() {
  return (
    <>
      <div className={s.hero}>
        <div className={s.canvas_container}>
          <Experience style={{ borderRadius: 20 }} />
        </div>
      </div>
    </>
  );
}
