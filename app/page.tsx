import s from "./page.module.scss";
import Hero from "./components/hero";
import SnapScroller from "./components/snap-scroller";
import VideoSection from "./components/video";
import Bands from "./components/bands-cards";
import UI from "./components/ui";
import { useEffect, useState } from "react";
import FooterSection from "./components/footer-section";
export default function Home() {
  return (
    <>
      <UI />
      <header
        className={s.header_container}
        id="header"
        data-title="La web del mug"
      >
        <Hero />
      </header>
      <main className={s.main}>
        <section id="about" data-title="Sobre el mug">
          <SnapScroller />
        </section>
        <section id="video" data-title="Ver Reel">
          <VideoSection />
        </section>
        <section
          className={`${s.bands_section} full-width`}
          data-title="Bandas"
        >
          <Bands />
        </section>
        <section
          className={`${s.footer_section} h100 full-width`}
          data-title="Contacto"
        >
          <FooterSection />
        </section>
      </main>
    </>
  );
}
