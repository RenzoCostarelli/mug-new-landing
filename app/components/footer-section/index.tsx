import Link from "next/link";
import s from "./footer-section.module.scss";
import Image from "next/image";

type Redes = {
  src: string;
  href: string;
  alt: string;
};

const redes: Redes[] = [
  {
    src: "https://res.cloudinary.com/dkgnaegp9/image/upload/v1695167524/youtube-svgrepo-com_hqo8aw.png",
    href: "https://www.youtube.com/@mugrosario",
    alt: "YouTube",
  },
  {
    src: "https://res.cloudinary.com/dkgnaegp9/image/upload/v1695167524/facebook-svgrepo-com_gayt20.png",
    href: "https://www.facebook.com/movimientouniongroove",
    alt: "Facebook",
  },
  {
    src: "https://res.cloudinary.com/dkgnaegp9/image/upload/v1695167524/instagram-svgrepo-com_geambd.png",
    href: "https://www.instagram.com/mug.rosario/",
    alt: "Instagram",
  },
];

export default function FooterSection() {
  return (
    <>
      <div className={s.content_wrapper}>
        <div className={s.social_network}>
          <h1>Nos encontras en</h1>
          <div className={s.social_network_logos}>
            {redes.map((red) => (
              <div key={red.alt}>
                <Link href={red.href} className={`${s.logo_container}`}>
                  <Image src={red.src} alt={red.alt} fill sizes="300px" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
