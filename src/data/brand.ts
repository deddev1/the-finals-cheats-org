/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'The Final Cheats',
	/** Short product label if needed */
	shortName: 'The Final Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://thefinalscheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@thefinalscheats.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fthe-finals',

	/** Game this template instance targets */
	game: 'The Finals',
	/** Official game store page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/2073850/THE_FINALS/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/finals-cheats-logo.webp',
	logoRaster: '/images/finals-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'The Final Cheats logo',
	defaultOgImage: '/images/finals-cheats-hero-1448w.webp',
	heroImage: '/images/finals-cheats-hero-1448w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#E11D48',
		bg: '#08090D',
		soft: '#FB7185',
		deep: '#9F1239',
		hover: '#F43F5E',
		panel: '#11131A',
		ink: '#F8FAFC',
		inkMuted: '#A1A1AA',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'thefinals cheats',
		list: [
			'thefinals cheats',
			'thefinals hacks',
			'thefinals cheat',
			'thefinals hack',
			'undetected thefinals cheats',
			'undetected thefinals hacks',
			'best thefinals cheats',
			'best thefinals cheats 2026',
			'thefinals cheats 2026',
			'thefinals hacks 2026',
			'the finals esp',
			'the finals esp hack',
			'the finals wallhack',
			'the finals aimbot',
			'the finals aimbot hack',
			'the finals radar hack',
			'the finals mod menu',
			'the finals cheat download',
			'the finals hacks pc',
			'the finals cheats pc',
			'the finals eac bypass',
			'the finals anti cheat bypass',
			'the finals soft aim',
			'the finals silent aim',
			'the finals external cheat',
			'the finals hack menu',
			'buy the finals cheats',
			'the finals cheats undetected',
			'the finals pvp cheats',
			'the finals arena cheats',
			'the finals cheats with aimbot',
			'the finals cheats with esp',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'thefinals Cheats 2026 | ESP, Aimbot & Wallhack',
		homeDescription:
			'Buy undetected thefinals cheats at thefinalscheats.org — ESP, aimbot, wallhack & 2D radar for Windows PC. Easy Anti-Cheat updates after patches. Plans from $35/month.',
		featuresTitle: 'The Finals Features 2026 | ESP, Aimbot & Radar | {brand}',
		featuresDescription:
			'Full thefinals cheats feature list at {brand} — ESP wallhack, soft aim, 2D radar and mod menu toggles for Windows PC. {antiCheat} maintenance included. Compare at thefinalscheats.org.',
		storeTitle: 'The Final Cheats Pricing 2026 | $35/mo or $150 Lifetime',
		storeDescription:
			'Buy thefinals cheats at thefinalscheats.org — $35 monthly or $150 lifetime for undetected ESP, aimbot and radar on Windows PC. Same features on both plans. Instant delivery after checkout.',
		statusTitle: 'The Finals Status 2026 | Undetected {antiCheat} Updates | {brand}',
		statusDescription:
			'Live {brand} status after {game} or {antiCheat} patches. Check undetected ESP, aimbot and radar rebuilds on Windows PC before you queue. Updated at thefinalscheats.org.',
		previewTitle: 'The Finals Hacks Guide 2026 | ESP, Aimbot & Wallhack | {brand}',
		previewDescription:
			'Full thefinals cheats guide from {brand} — undetected ESP wallhack, soft aim, 2D radar and {antiCheat} rebuilds on Windows PC. Compare features and buy at thefinalscheats.org from $35.',
		setupTitle: 'The Final Cheats Setup 2026 | Windows PC Install Guide',
		setupDescription:
			'Install {brand} on Windows PC after checkout — activate ESP, soft aim and radar step by step. Setup guide at thefinalscheats.org. Check {antiCheat} status before your first match.',
		supportTitle: 'The Final Cheats Support 2026 | License & Setup Help',
		supportDescription:
			'{brand} support for license delivery, ESP setup and billing on Windows PC. Email {email} with your order ID. Visit thefinalscheats.org/support for FAQs and guides.',
		faqTitle: 'The Final Cheats FAQ 2026 | ESP, Aimbot & {antiCheat} Answers',
		faqDescription:
			'{brand} FAQ — delivery, setup, undetected status, {antiCheat} updates, pricing and refunds for thefinals cheats on Windows PC. Clear answers at thefinalscheats.org before you buy.',
		reviewsTitle: 'The Final Cheats Reviews 2026 | Real Buyer Feedback',
		reviewsDescription:
			'Real buyer reviews for {brand} — ESP wallhack, soft aim, radar and {antiCheat} maintenance on Windows PC. See what license holders say before you buy at thefinalscheats.org.',
		blogTitle: 'Finals Intel Blog 2026 | Guides & Patch Tips | {brand}',
		blogDescription:
			'Finals Intel blog from {brand} — arena tips, ESP and aimbot guides, cashout routes and {antiCheat} update notes for Windows PC players at thefinalscheats.org/blog.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for The Finals on Windows PC.',
		blogLabel: 'Finals Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for The Finals — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-24',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/finals-screenshot-01.webp',
				title: 'The Final Cheats mod menu overlay',
				caption: 'The Final Cheats mod menu overlay on Windows PC',
			},
			{
				src: '/images/finals-screenshot-02.webp',
				title: 'The Finals ESP wallhack player boxes',
				caption: 'The Finals ESP wallhack showing player boxes and names',
			},
			{
				src: '/images/finals-screenshot-03.webp',
				title: 'The Finals wallhack ESP through walls',
				caption: 'The Finals wallhack ESP highlighting enemies through walls',
			},
			{
				src: '/images/finals-screenshot-04.webp',
				title: 'The Finals aimbot soft aim PvP',
				caption: 'The Finals aimbot soft aim targeting in PvP combat',
			},
			{
				src: '/images/finals-screenshot-05.webp',
				title: 'The Finals aimbot FOV settings',
				caption: 'The Finals aimbot FOV and bone targeting settings',
			},
			{
				src: '/images/finals-screenshot-06.webp',
				title: 'The Finals 2D radar hack map',
				caption: 'The Finals 2D radar hack with player blips on map',
			},
			{
				src: '/images/finals-screenshot-07.webp',
				title: 'The Final Cheats session HUD',
				caption: 'The Final Cheats session HUD with ESP and radar active',
			},
			{
				src: '/images/finals-screenshot-08.webp',
				title: 'The Finals combat ESP aimbot overlay',
				caption: 'The Finals combat screenshot with ESP and aimbot overlays',
			},
			{
				src: '/images/finals-screenshot-09.webp',
				title: 'The Finals player ESP distance tags',
				caption: 'The Finals player ESP tags and distance labels in match',
			},
			{
				src: '/images/finals-screenshot-10.webp',
				title: 'The Finals aimbot skeleton overlay',
				caption: 'The Finals aimbot skeleton overlay on hostile player',
			},
			{
				src: '/images/finals-screenshot-11.webp',
				title: 'The Finals monument PvP with cheats',
				caption: 'The Finals monument PvP fight with cheat overlays enabled',
			},
			{
				src: '/images/finals-screenshot-12.webp',
				title: 'The Finals base match ESP wallhack',
				caption: 'The Finals base match combat with ESP wallhack active',
			},
			{
				src: '/images/finals-screenshot-13.webp',
				title: 'The Finals loot run radar ESP',
				caption: 'The Finals loot run with radar and player ESP enabled',
			},
			{
				src: '/images/finals-screenshot-14.webp',
				title: 'The Finals map radar player positions',
				caption: 'The Finals map overview with radar and player positions',
			},
			{
				src: '/images/finals-screenshot-15.webp',
				title: 'The Finals wallhack skeleton ESP',
				caption: 'The Finals wallhack skeleton ESP on enemy player model',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
