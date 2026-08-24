import { useTranslation } from 'react-i18next';
import { productScreenshots } from '../../data/product-images';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
	checkoutUrl: string;
};

function HomeAboutInner({ checkoutUrl }: Pick<Props, 'checkoutUrl'>) {
	const { t } = useTranslation();
	const preview = productScreenshots[0]!;

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<div className="home__about-grid">
				<div className="home__prose-callout">
					<p id="home-about-title" className="home__prose-kicker">
						{t('home.aboutTitle')}
					</p>
					<p>{t('home.aboutP1')}</p>
					<div className="home__about-actions">
						<a className="home__about-pricing" href={checkoutUrl} rel="noopener noreferrer">
							{t('home.aboutPricingCta')}
						</a>
					</div>
					<p>
						{t('home.aboutP2Before')}{' '}
						<a href="/">{t('home.aboutPillar')}</a>
						{t('home.aboutP2Mid')}
						<a href="/finals-esp/">{t('home.aboutEsp')}</a>
						{t('home.aboutP2Mid')}
						<a href="/finals-aimbot/">{t('home.aboutAimbot')}</a>
						{t('home.aboutP2Or')}
						<a href="/updates/">{t('home.aboutUndetected')}</a>
						{t('home.aboutP2After')}
					</p>
				</div>
				<figure className="home__about-media">
					<img
						className="home__about-image"
						src={preview.src}
						alt={preview.alt}
						width={640}
						height={398}
						loading="lazy"
						decoding="async"
					/>
					<figcaption className="home__about-caption">{preview.caption}</figcaption>
				</figure>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner checkoutUrl={props.checkoutUrl} />
		</I18nProvider>
	);
}
