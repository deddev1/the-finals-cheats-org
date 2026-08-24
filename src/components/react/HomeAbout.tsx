import { useTranslation } from 'react-i18next';
import { productInfo } from '../../data/site';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
	checkoutUrl: string;
};

function HomeAboutPricing({ checkoutUrl }: { checkoutUrl: string }) {
	const { t } = useTranslation();
	const monthly = productInfo.plans.find((p) => p.id === 'monthly') ?? productInfo.plans[0];
	const lifetime = productInfo.plans.find((p) => p.id === 'lifetime') ?? productInfo.plans[1];

	return (
		<aside className="home__about-pricing" aria-label={t('product.plans')}>
			<div className="home__about-pricing-grid">
				<article className="home__price-card">
					<p className="home__price-card-label">{t('product.monthly')}</p>
					<p className="home__price-card-price">
						<span className="home__price-card-amount">${monthly.price}</span>
						<span className="home__price-card-meta">{t('product.perMonth')}</span>
					</p>
					<p className="home__price-card-note">{t('product.days30')}</p>
					<a className="home__price-card-cta" href={checkoutUrl} rel="noopener noreferrer">
						{t('product.buyMonthly')}
					</a>
				</article>

				<article className="home__price-card is-featured">
					<p className="home__price-card-label">{t('product.lifetime')}</p>
					<p className="home__price-card-price">
						<span className="home__price-card-amount">${lifetime.price}</span>
						<span className="home__price-card-meta">{t('product.once')}</span>
					</p>
					<p className="home__price-card-note">{t('product.oneTime')}</p>
					<a
						className="home__price-card-cta home__price-card-cta--solid"
						href={checkoutUrl}
						rel="noopener noreferrer"
					>
						{t('product.buyLifetime')}
					</a>
				</article>
			</div>
		</aside>
	);
}

function HomeAboutInner({ checkoutUrl }: Pick<Props, 'checkoutUrl'>) {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<div className="home__about-grid">
				<div className="home__prose-callout">
					<p id="home-about-title" className="home__prose-kicker">
						{t('home.aboutTitle')}
					</p>
					<p>{t('home.aboutP1')}</p>
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
				<HomeAboutPricing checkoutUrl={checkoutUrl} />
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
