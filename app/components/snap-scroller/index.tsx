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
                    src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715759/mug1_f3wawg.jpg"
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
                  creando espacios de encuentro constante para trabajadores y
                  trabajadoras de la cultura rosarina. Desde la música, la
                  técnica escénica, la producción, la gastronomía y la
                  comunicación, por fuera de la competencia, sus partes se
                  entienden agentes de la misma trama. Asociación Civil desde
                  2021, la unión del colectivo construye su norte de acción.
                </p>
              </div>
              <div className={`${s.desktop_content_section} text_area`}>
                <div className={`${s.mobile_image}`}>
                  <Image
                    src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715760/mug2_p472wp.jpg"
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
                  Una organización creativa y colaborativa pone al colectivo en
                  movimiento para generar acuerdos y transformarlos en acción.
                  De funcionamiento asambleario, el MUG abre espacios de
                  decisión para construir su realidad, asegurando un diálogo
                  horizontal donde todas las ideas son puestas en valor,
                  coordinando espacios de balance para avanzar siempre hacia la
                  acción transformadora.
                </p>
              </div>
              <div className={`${s.desktop_content_section} text_area`}>
                <div className={`${s.mobile_image}`}>
                  <Image
                    src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715760/mug3_b4j3sa.jpg"
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
                  con una amplia red de agentes y agitadores culturales que
                  trabajan de manera cercana y comparten las recompensas por los
                  objetivos alcanzados, generando también el marco de interés de
                  una comunidad en constante crecimiento. El MUG es respaldado
                  por un público joven, activo y danzante que deviene en un
                  actor social clave de esta experiencia colaborativa,
                  compartiendo no sólo la dimensión estética del hacer
                  artístico, sino también las formas éticas del colectivo.
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
                  src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715760/mug1blur_iaxune.jpg"
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
                    src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715759/mug1_f3wawg.jpg"
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
                  src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715759/mug2blur_ggky4p.jpg"
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
                    src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715760/mug2_p472wp.jpg"
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
                  src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715760/mug3blur_n2xiqf.jpg"
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
                    src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715760/mug3_b4j3sa.jpg"
                    alt="Mug team"
                    fill
                    sizes="1200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className={`${s.box} ${s.blue} desktop_photo`} ref={boxRef}>
                <Image
                  src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715760/mug4blur_nuuzzo.jpg"
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
                    src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715761/mug4_ex8yjc.jpg"
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
