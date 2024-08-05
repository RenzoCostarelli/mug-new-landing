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
            src="https://res.cloudinary.com/dkgnaegp9/video/upload/v1722811184/output2_svh41r.webm"
            autoPlay
            loop
            muted
            playsInline
          >
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
      </Link>
    </>
  );
}
