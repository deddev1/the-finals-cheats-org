import { brand, fillBrandTokens, seoDescription, seoTitle } from './brand';

/**
 * Title clamp lives here — NOT in brand.ts.
 * Brand Studio rewrites brand.ts on every save; helpers here stay stable.
 */
export function seoPageTitle(template: string): string {
	const text = fillBrandTokens(template).trim();
	/** Google SERP titles typically display ~50–60 chars; clamp at 60. */
	return text.length <= 60 ? text : `${text.slice(0, 57).trim()}…`;
}

export { brand, fillBrandTokens, seoDescription, seoTitle };

const copyDefaults = {
	tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
	summary:
		'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
	heroLede: 'Hacks and cheats available — 0% detection.',
	blogLabel: '{game} Intel',
	ctaBuy: 'Buy now',
	ctaBuyShort: 'Buy',
	featuresIntro: 'Everything included in one license for {game} on Windows PC.',
	storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
	statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
	previewIntro: 'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.',
	setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
	supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
	faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
	reviewsIntro: 'Real feedback from {brand} buyers — ESP, soft aim, radar, and support.',
	chipEsp: 'ESP / wallhack',
	chipAim: 'Soft aim',
	chipRadar: '2D radar',
	chipUpdates: 'Patch updates',
	navPreview: 'Preview',
	navFeatures: 'Features',
	navStore: 'Store',
	navStatus: 'Status',
	navReviews: 'Reviews',
} as const;

const seoDefaults = {
	homeTitle: 'Rust Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
	homeDescription:
		'Buy undetected rust cheats at rustcheats.co — ESP wallhack, soft aim, 2D radar & mod menu for Windows PC. Easy Anti-Cheat patch updates. Plans from $35/month.',
	featuresTitle: 'Rust Features 2026 | ESP, Aimbot & Radar | {brand}',
	featuresDescription:
		'Full rust cheats feature list at {brand} — ESP wallhack, soft aim, 2D radar and mod menu toggles for Windows PC. {antiCheat} maintenance included. Compare at rustcheats.co.',
	storeTitle: 'Rust Cheats Pricing 2026 | $35/mo or $150 Lifetime',
	storeDescription:
		'Buy rust cheats at rustcheats.co — $35 monthly or $150 lifetime for undetected ESP, aimbot and radar on Windows PC. Same features on both plans. Instant delivery after checkout.',
	statusTitle: 'Rust Status 2026 | Undetected {antiCheat} Updates | {brand}',
	statusDescription:
		'Live {brand} status after {game} or {antiCheat} patches. Check undetected ESP, aimbot and radar rebuilds on Windows PC before you raid. Updated at rustcheats.co.',
	previewTitle: 'Rust Hacks Guide 2026 | ESP, Aimbot & Wallhack | {brand}',
	previewDescription:
		'Full rust cheats guide from {brand} — undetected ESP wallhack, soft aim, 2D radar and {antiCheat} rebuilds on Windows PC. Compare features and buy at rustcheats.co from $35.',
	setupTitle: 'Rust Cheats Setup 2026 | Windows PC Install Guide',
	setupDescription:
		'Install {brand} on Windows PC after checkout — activate ESP, soft aim and radar step by step. Setup guide at rustcheats.co. Check {antiCheat} status before your first raid.',
	supportTitle: 'Rust Cheats Support 2026 | License & Setup Help',
	supportDescription:
		'{brand} support for license delivery, ESP setup and billing on Windows PC. Email {email} with your order ID. Visit rustcheats.co/support for FAQs and guides.',
	faqTitle: 'Rust Cheats FAQ 2026 | ESP, Aimbot & {antiCheat} Answers',
	faqDescription:
		'{brand} FAQ — delivery, setup, undetected status, {antiCheat} updates, pricing and refunds for rust cheats on Windows PC. Clear answers at rustcheats.co before you buy.',
	reviewsTitle: 'Rust Cheats Reviews 2026 | Real Buyer Feedback',
	reviewsDescription:
		'Real buyer reviews for {brand} — ESP wallhack, soft aim, radar and {antiCheat} maintenance on Windows PC. See what license holders say before you buy at rustcheats.co.',
	blogTitle: 'Rust Intel Blog 2026 | Guides & Patch Tips | {brand}',
	blogDescription:
		'Rust Intel blog from {brand} — raid tips, ESP and aimbot guides, loot routes and {antiCheat} update notes for Windows PC players at rustcheats.co/blog.',
} as const;

type SeoShape = typeof seoDefaults;
type CopyShape = typeof copyDefaults;

/** Always-safe copy/seo — Brand Studio saves must never crash the site. */
const brandExtra = brand as typeof brand & { seo?: Partial<SeoShape>; copy?: Partial<CopyShape> };
export const brandSeo: SeoShape = { ...seoDefaults, ...brandExtra.seo };
export const brandCopy: CopyShape = { ...copyDefaults, ...brandExtra.copy };

/** Resolved EN home meta */
export function homeSeo() {
	return {
		title: seoPageTitle(brandSeo.homeTitle),
		description: seoDescription(brandSeo.homeDescription),
	};
}

/** Site config derived from brand — import this in layouts/components. */
export const siteConfig = {
	name: brand.name,
	url: brand.url,
	locale: brand.locale,
	market: brand.market,
	supportEmail: brand.supportEmail,
	logo: brand.logo,
	logoRaster: brand.logoRaster,
	logoRasterWidth: brand.logoRasterWidth,
	logoRasterHeight: brand.logoRasterHeight,
	logoAlt: brand.logoAlt,
	checkoutUrl: brand.checkoutUrl,
	gameUrl: brand.gameUrl,
	defaultOgImage: brand.defaultOgImage,
	heroImage: brand.heroImage,
} as const;

/** Prefer brand.keywords — kept for Layout meta keywords. */
export const seoKeywords = brand.keywords.list;

/** Blog eyebrow / title suffix */
export const blogLabel = fillBrandTokens(brandCopy.blogLabel);

export const productInfo = {
	name: brand.name,
	shortName: brand.game,
	brand: brand.name,
	tagline: fillBrandTokens(brandCopy.tagline),
	summary: fillBrandTokens(brandCopy.summary),
	game: brand.game,
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: [...brand.platforms],
	updateCadence: fillBrandTokens(
		'Updates are published when {game} or {antiCheat} patches need a rebuild',
	),
	supportHours: 'Support requests are reviewed daily',
	plans: brand.plans.map((p) => ({ ...p })),
	currency: brand.currency,
	heroLede: fillBrandTokens(brandCopy.heroLede),
	features: {
		esp: [
			'Solo farmers and raiders ESP / wallhack',
			'Player growth stage and threat cues',
			'Loot and base markers',
			'Distance readouts',
			'Toggleable ESP categories',
			'Corpse and loot highlights',
		],
		aimbot: [
			'Soft aim and aimbot controls',
			'Smoothness and FOV settings',
			'Bone priority',
			'Hotkeys mid-session',
			'Per-weapon profiles',
		],
		radar: ['2D radar overlay', 'Adjustable range', 'Works in base raids and PvP fights'],
		general: [
			fillBrandTokens('{antiCheat} maintenance after patches'),
			'Digital delivery after checkout',
			'Setup guide and support',
		],
	},
} as const;
