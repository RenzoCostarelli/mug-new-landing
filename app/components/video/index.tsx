import Link from "next/link";
import s from "./video.module.scss";

export default function VideoSection() {
  return (
    <>
      <Link href="https://www.youtube.com/watch?v=jXrhxwyYw2I" target="blank">
        <div className={s.video_area}>
          <div className={s.overlay} data-cursor-video></div>
          <video
            className={s.video}
            src="/video/output2.webm"
            autoPlay
            loop
            muted
          >
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
      </Link>
    </>
  );
}
