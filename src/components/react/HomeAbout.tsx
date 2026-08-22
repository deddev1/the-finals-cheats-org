import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { demoVideo } from '../../data/media';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

function DemoVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);

	const play = useCallback(() => {
		const el = videoRef.current;
		if (!el) return;
		setPlaying(true);
		void el.play();
	}, []);

	return (
		<figure className="home__about-media">
			<div className="home__video-wrap">
				<video
					ref={videoRef}
					className="home__video"
					src={demoVideo.src}
					poster={demoVideo.poster}
					width={demoVideo.width}
					height={demoVideo.height}
					preload="metadata"
					playsInline
					controls={playing}
					onPlay={() => setPlaying(true)}
					onPause={() => setPlaying(false)}
					onEnded={() => setPlaying(false)}
					aria-label={demoVideo.title}
				/>
				{!playing && (
					<button
						type="button"
						className="home__video-play"
						onClick={play}
						aria-label={`Play video: ${demoVideo.title}`}
					>
						<span className="home__video-play-icon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M8 5.14v13.72L19 12 8 5.14z" />
							</svg>
						</span>
					</button>
				)}
			</div>
			<figcaption className="home__video-caption">{demoVideo.title}</figcaption>
		</figure>
	);
}

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<div className="home__about-grid">
				<div className="home__prose-callout">
					<h2 id="home-about-title" className="home__prose-kicker">
						{t('home.aboutTitle')}
					</h2>
					<p>{t('home.aboutP1')}</p>
					<p>
						{t('home.aboutP2Before')}{' '}
						<a href="/">{t('home.aboutPillar')}</a>
						{t('home.aboutP2Mid')}
						<a href="/rust-esp/">{t('home.aboutEsp')}</a>
						{t('home.aboutP2Mid')}
						<a href="/rust-aimbot/">{t('home.aboutAimbot')}</a>
						{t('home.aboutP2Or')}
						<a href="/updates/">{t('home.aboutUndetected')}</a>
						{t('home.aboutP2After')}
					</p>
				</div>
				<DemoVideo />
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
