import s from "./page.module.scss";
import Hero from "./components/hero";
import SnapScroller from "./components/snap-scroller";
import VideoSection from "./components/video";
import Bands from "./components/bands-cards";
import UI from "./components/ui";
import FooterSection from "./components/footer-section";
import Loader from "./components/loader/loader";
export default function Home() {
  return (
    <>
      <Loader />
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
        <section id="video" data-title="">
          <VideoSection />
        </section>
        <section
          className={`${s.bands_section} full-width`}
          data-title="Bandas"
        >
          <Bands />
        </section>
        <section
          className={`${s.footer_section} full-width`}
          data-title="Contacto"
        >
          <FooterSection />
        </section>
      </main>
    </>
  );
}
