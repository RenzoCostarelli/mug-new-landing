import { Band } from "@/app/types/bands";
import s from "./bands-cards.module.scss";
import Image from "next/image";

const dummyData: Band[] = [
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715770/choke_vly6d8.jpg",
    link_url: "https://open.spotify.com/artist/2MGzb68P8ec7JFuzkwi0sJ",
    title: "Chokenbici",
    description: "Feel the funk and groove with the master!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715770/caliope_swkx9j.jpg",
    link_url: "https://open.spotify.com/artist/3yF4Lj2Sl3QkKQNQwtYya6",
    title: "Caliope Family",
    description: "Get ready for some mind-bending funky beats!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715770/cortito_y7nuhl.jpg",
    link_url: "https://open.spotify.com/artist/1jPpQw1FGkiNBkYEPE3WRY",
    title: "Cortito y Funky",
    description: "A fusion of soul and groove that moves your soul!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715771/grooving_wl5heg.jpg",
    link_url: "https://open.spotify.com/artist/2h61fAPumECGmmEmJPJkj1",
    title: "Groovin’ Bohemia",
    description: "These masters of groove will keep you dancing all night.",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715771/joako22_z4swou.jpg",
    link_url: "https://open.spotify.com/artist/0UDzdnndviQU4dtzQ47zqz",
    title: "Joako22",
    description: "Experience the perfect fusion of funk and grooves!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715772/latelo_wipviw.jpg",
    link_url: "https://open.spotify.com/artist/5Xn7CUcKrK1h5id15B7NQc",
    title: "Latelonius",
    description: "Get on the dance floor and let the machine groove you!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715771/lann_h2x0m2.jpg",
    link_url: "https://open.spotify.com/artist/6MgMaAZpctJvlIEKrkvDtC",
    title: "La N.N",
    description: "Join the revolution of funky rhythms and moves!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715772/suave_l2yx8l.jpg",
    link_url: "https://open.spotify.com/artist/1TcJ950NL1latyKZLfHaI1",
    title: "Suave Lomito",
    description: "A sensation of groove that electrifies the crowd!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715772/trigga_whgkmg.jpg",
    link_url: "https://soundcloud.com/triganigga-dj",
    title: "Triga Nigga",
    description: "Vibes so funky, they`ll make you move instantly!",
  },
  {
    img_url:
      "https://res.cloudinary.com/dkgnaegp9/image/upload/v1694715769/bifes_uh4cas.jpg",
    link_url: "https://open.spotify.com/artist/65HV0X2MrHeNzgCEfruD3Y",
    title: "Bifes con Ensalada",
    description: "Vibes so funky, they`ll make you move instantly!",
  },
];

function BandsCards({ bandData }: { bandData: Band }) {
  const { img_url, link_url, title, description } = bandData;

  return (
    <>
      <div>
        <a href={link_url} target="blank">
          <div className={s.card}>
            <div className={s.card_picture}>
              <Image
                className={s.image}
                src={img_url}
                alt={title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={s.card_info}>
              <h2 className={s.title}>{title}</h2>
              <div className={s.purchase_button}>Escuchar</div>
              <div className={s.play_icon}>
                <svg
                  viewBox="-3 0 28 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className={s.svg}
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Icon-Set-Filled"
                      transform="translate(-419.000000, -571.000000)"
                      fill="#ffffff"
                    >
                      <path
                        d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                        id="play"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default function Bands() {
  return (
    <div className={`${s.bands_section}`}>
      <h1>BANDAS</h1>
      <div className={s.cards_container}>
        {dummyData.map((band) => (
          <BandsCards key={band.title} bandData={band} />
        ))}
      </div>
      <div className={s.lema}>
        La unión es movimiento y el movimiento es groove
      </div>
    </div>
  );
}
