'use client'
import Image from 'next/image'
import s from './page.module.scss'
import Hero from './components/hero'
import SnapScroller from './components/snap-scroller'
import VideoSection from './components/video'
import SplitMarquee from './components/split-marquee'
import MarqueeScroller from './components/marquee-scroller'
import Bands from './components/bands-cards'
import UI from './components/ui'
import { useEffect, useState } from 'react'
import FooterSection from './components/footer-section'
export default function Home() {
  const [title1, setTitle1] = useState<string>('La web del Mug')
  useEffect(() => {
    let observers: IntersectionObserver[] = []
  
    const sections = document.querySelectorAll('[data-title]')
    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTitle1(section.getAttribute('data-title') || '')
            }
          });
        },
        { threshold: 0.15 } 
      )  
      observer.observe(section)
      observers.push(observer)
    })
  
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  return (<>
    <UI text1={title1} text2='Lorem ipsum' text3='lorem ipsum'/>
    <header className={s.header_container} id="header" data-title="La web del mug">
      <Hero />
    </header>
    <main className={s.main}>
      <section id="about" data-title="Sobre el mug">
        <SnapScroller />
      </section>
      <section id="video" data-title="Ver Reel">
        <VideoSection />
      </section>
      <section className={`${s.bands_section} full-width`} data-title="Bandas">
        <Bands />
      </section>
      <section className={`${s.footer_section} h100 full-width`} data-title="Contacto">
        <FooterSection />
      </section>
    </main>
    </>
  )
}
