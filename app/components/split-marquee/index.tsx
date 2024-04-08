'use client'
import s from './split-marquee.module.scss'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SplitMarquee() {

    const scrollerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const scrollerEl = scrollerRef.current;
        
    //     if (scrollerEl) {
    //         const pElements = scrollerEl.querySelectorAll('p:not(:first-child)');
    //         console.log('elements', pElements)
    //         gsap.to(pElements, {
    //             y: '400%',
    //             x: '20%',
    //             duration: 1,
    //             stagger: 0.2,
    //             scrollTrigger: {
    //               trigger: containerRef.current,
    //               start: 'top 30%',
    //               end: "bottom 50%",
    //               scrub: true,
    //               markers: false
    //             },
    //           });
    //     }
    // }, []);

    return <>
        <div className={s.marquee_container} ref={containerRef}>
            <div className={s.scroller} ref={scrollerRef}>
                <p>++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++</p>
                {/* <p className={s.outline}>++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++</p>
                <p className={s.outline}>++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++</p>
                <p className={s.outline}>++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++</p>
                <p className={s.outline}>++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++ MUG ONLINE ++</p> */}
            </div>
        </div>
    </>
}