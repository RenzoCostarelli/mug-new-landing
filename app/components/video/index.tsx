import s from './video.module.scss'

export default function VideoSection () {
    return <>
        <div className={s.video_area}>
            <div className={s.overlay}></div>
            <video className={s.video} src="https://res.cloudinary.com/dkgnaegp9/video/upload/v1694715653/video_km9g5w.mp4" autoPlay loop muted>
                Tu navegador no admite el elemento <code>video</code>.
            </video>
        </div>
    </>
}