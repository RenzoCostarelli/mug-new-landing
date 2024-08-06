import "./styles/globals.scss";
import { Inter } from "next/font/google";
import Lenis from "@studio-freight/lenis";
import { LenisScroller } from "./lenis-scroller";
import MouseFollowerr from "./components/mouse-follower/mouse-follower";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MUG",
  description:
    "Somos una Asociación Civil que reúne a trabajadores de la cultura para fomentar su actividad y contribuir de forma activa en la profesionalización de sus proyectos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MouseFollowerr />
      </body>
      <LenisScroller />
    </html>
  );
}
