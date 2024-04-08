"use client";
import s from "./marquee-scroller.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MarqueeScroller() {
  const wordsRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function getScrollAmount() {
      let wrapperWidth = wordsRef.current?.scrollWidth;
      // console.log(wrapperWidth)
      if (wrapperWidth) {
        return -(wrapperWidth - window.innerWidth);
      }
      return 0;
    }

    const tween = gsap.to(wordsRef.current, {
      x: getScrollAmount(),
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false,
    });
  }, []);

  return (
    <>
      <div className={`${s.scroll_wrapper} wrapper_selector`} ref={wrapperRef}>
        <div className={`${s.words} words_selector`} ref={wordsRef}>
          <div className={`${s.word}`}>EL GROOVE</div>
          <div className={`${s.word}`}>NOS</div>
          <div className={`${s.word}`}>UNE</div>
        </div>
      </div>
    </>
  );
}
