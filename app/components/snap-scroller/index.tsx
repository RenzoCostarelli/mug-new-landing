"use client";
import s from "./snap-scroller.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function SnapScroller() {
  const sectionRef = useRef(null);
  const columnRef = useRef(null);
  const snapColumnRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const areas = gsap.utils.toArray(".text_area:not(:first-child)");
      const photos: any = gsap.utils.toArray(
        ".desktop_photo:not(:first-child)"
      );
      const photosInner: any = gsap.utils.toArray(".inner_img");

      gsap.set(photos, { yPercent: 101 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: snapColumnRef.current,
      });

      areas.forEach((area: any, index) => {
        let headline = area.querySelector("h1");
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: gsap.to(photos[index], { yPercent: 0 }),
          scrub: true,
          markers: false,
        });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: gsap.to(photosInner[index], { yPercent: -15 }),
          scrub: true,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={s.vertical_scroller} ref={sectionRef}>
        <div className={s.cols_container}>
          <div className={`${s.column} ${s.left_column}`} ref={columnRef}>
            <div className={`${s.desktop_content}`}>
              <div className={`${s.desktop_content_section} text_area`}>
                <div className={`${s.mobile_image}`}>
                  <Image
                    src="/images/1.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h1>Somos</h1>
                <p>
                  Somos una Asociación Civil que reúne a trabajadores de la
                  cultura para fomentar su actividad y contribuir de forma
                  activa en la profesionalización de sus proyectos.Con
                  organización creativa y una motivación comunitaria logramos
                  realizar 3 ediciónes del emblemático Festimug, nuestra nave
                  insignia, fortalecido año tras año con nuestro crecimiento
                  conjunto y sostenido, albergando el trabajo mancomunado de más
                  de 100 personas relacionadas con la industria cultural y
                  gastronómica de la ciudad. Sostenemos una sala de ensayo y
                  recientemente incorporamos nuestra propia plataforma web y una
                  ticketera online. De dinámica asamblearia, el colectivo defina
                  su rumbo de manera horizontal y busca siempre estar en
                  contacto con el ecositema que la rodea.
                </p>
              </div>
              <div className={`${s.desktop_content_section} text_area`}>
                <div className={`${s.mobile_image}`}>
                  <Image
                    src="/images/2.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h1>La Unión</h1>
                <p>
                  Al ritmo de la gestión colaborativa, el MUG nace en 2017 como
                  vehículo para expandir fronteras artísticas y profesionales,
                  creando espacios de encuentro para la cultura rosarina. Desde
                  la música, la técnica escénica, la producción, la gastronomía
                  y la comunicación, sus partes se entienden agentes de la misma
                  trama. Asociación Civil desde 2021, el Movimiento Unión Groove
                  reúne a trabajadores y trabajadoras de la cultura para
                  fomentar su actividad y mejorar sus condiciones laborales.
                </p>
              </div>
              <div className={`${s.desktop_content_section} text_area`}>
                <div className={`${s.mobile_image}`}>
                  <Image
                    src="/images/3.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h1>El Movimiento</h1>
                <p>
                  Una <span className="fw-bold">organización creativa</span>,
                  horizontal y colaborativa construye el valor de nuestro
                  colectivo, lo pone en movimiento para generar acuerdos y logra
                  transformarlos en acción. De funcionamiento asambleario, el
                  MUG abre espacios de decisión para construir su realidad,
                  coordinando espacios de balance para capitalizar sus diversas
                  experiencias.
                </p>
              </div>
              <div className={`${s.desktop_content_section} text_area`}>
                <div className={`${s.mobile_image}`}>
                  <Image
                    src="/images/4.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h1>El Groove</h1>
                <p>
                  Más allá de una estética, el groove como política del cuerpo
                  en movimiento define al colectivo. En contacto y colaboración
                  con una amplia red de agentes que trabajan de manera cercana y
                  comparten las recompensas por los objetivos alcanzados,
                  generando también el marco de interés de una comunidad en
                  constante crecimiento. El MUG es respaldado por un público
                  joven, activo y danzante que deviene en un actor social clave
                  de esta experiencia colaborativa, compartiendo no sólo la
                  dimensión estética del hacer artístico, sino también las
                  formas éticas del colectivo.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${s.snap_column} ${s.right_coolumn}`}
            ref={snapColumnRef}
          >
            <div className={`${s.desktop_photos}`}>
              <div className={`${s.box} ${s.red} desktop_photo`} ref={boxRef}>
                <Image
                  src="/images/1.jpg"
                  alt="Mug team"
                  fill
                  sizes="1200px"
                  className={`${s.background_image}`}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className={`${s.inner_image} inner_img`}>
                  <Image
                    src="/images/1.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className={`${s.box} ${s.red} desktop_photo`} ref={boxRef}>
                <Image
                  src="/images/2.jpg"
                  alt="Mug team"
                  fill
                  sizes="1200px"
                  className={`${s.background_image}`}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className={`${s.inner_image} inner_img`}>
                  <Image
                    src="/images/2.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className={`${s.box} ${s.green} desktop_photo`} ref={boxRef}>
                <Image
                  src="/images/3.jpg"
                  alt="Mug team"
                  fill
                  sizes="1200px"
                  className={`${s.background_image}`}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className={`${s.inner_image} inner_img`}>
                  <Image
                    src="/images/3.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className={`${s.box} ${s.pink} desktop_photo`} ref={boxRef}>
                <Image
                  src="/images/4.jpg"
                  alt="Mug team"
                  fill
                  sizes="1200px"
                  className={`${s.background_image}`}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className={`${s.inner_image} inner_img`}>
                  <Image
                    src="/images/4.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
