/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Rust Cheats',
	/** Short product label if needed */
	shortName: 'Rust Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://rustcheats.co',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@rustcheats.co',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Frust-novaxware',

	/** Game this template instance targets */
	game: 'Rust',
	/** Official game store page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/252490/Rust/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/rust-cheats-logo.webp',
	logoRaster: '/images/rust-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Rust Cheats logo',
	defaultOgImage: '/images/rust-cheats-hero-1024w.webp',
	heroImage: '/images/rust-cheats-hero-1024w.webp',

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
		accent: '#d94a2b',
		bg: '#070707',
		soft: '#f08a6a',
		deep: '#8f2416',
		hover: '#f15b3a',
		panel: '#121212',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'rust cheats',
		list: [
			'rust cheats',
			'rust hacks',
			'rust esp',
			'rust aimbot',
			'rust wallhack',
			'rust hack',
			'undetected rust cheats',
			'best rust cheats',
			'rust radar hack',
			'rust mod menu',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Rust Cheats | Undetected Aimbot, ESP & Wallhack 2026',
		homeDescription:
			'Rust cheats for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, soft aim, radar, raid tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you raid on Windows PC today.',
		previewTitle: 'Rust Cheats Guide | ESP, Aimbot, Radar & EAC Info',
		previewDescription: 'What rust cheats include — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat maintenance for Rust on Windows PC. Full cheats guide before you buy.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can load in faster. Follow each step in order before your first raid.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for Rust — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Rust on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — raid tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Rust on Windows PC.',
		blogLabel: 'Rust Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you raid.',
		previewIntro: '{brand} for Rust — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat rebuilds after patches.',
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
		contentLastmod: '2026-08-22',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/rust-screenshot-01.webp',
				title: 'Rust Cheats mod menu overlay',
				caption: 'Rust Cheats mod menu overlay on Windows PC',
			},
			{
				src: '/images/rust-screenshot-02.webp',
				title: 'Rust ESP wallhack player boxes',
				caption: 'Rust ESP wallhack showing player boxes and names',
			},
			{
				src: '/images/rust-screenshot-03.webp',
				title: 'Rust wallhack ESP through walls',
				caption: 'Rust wallhack ESP highlighting enemies through walls',
			},
			{
				src: '/images/rust-screenshot-04.webp',
				title: 'Rust aimbot soft aim PvP',
				caption: 'Rust aimbot soft aim targeting in PvP combat',
			},
			{
				src: '/images/rust-screenshot-05.webp',
				title: 'Rust aimbot FOV settings',
				caption: 'Rust aimbot FOV and bone targeting settings',
			},
			{
				src: '/images/rust-screenshot-06.webp',
				title: 'Rust 2D radar hack map',
				caption: 'Rust 2D radar hack with player blips on map',
			},
			{
				src: '/images/rust-screenshot-07.webp',
				title: 'Rust Cheats session HUD',
				caption: 'Rust Cheats session HUD with ESP and radar active',
			},
			{
				src: '/images/rust-screenshot-08.webp',
				title: 'Rust combat ESP aimbot overlay',
				caption: 'Rust combat screenshot with ESP and aimbot overlays',
			},
			{
				src: '/images/rust-screenshot-09.webp',
				title: 'Rust player ESP distance tags',
				caption: 'Rust player ESP tags and distance labels in raid',
			},
			{
				src: '/images/rust-screenshot-10.webp',
				title: 'Rust aimbot skeleton overlay',
				caption: 'Rust aimbot skeleton overlay on hostile player',
			},
			{
				src: '/images/rust-screenshot-11.webp',
				title: 'Rust monument PvP with cheats',
				caption: 'Rust monument PvP fight with cheat overlays enabled',
			},
			{
				src: '/images/rust-screenshot-12.webp',
				title: 'Rust base raid ESP wallhack',
				caption: 'Rust base raid combat with ESP wallhack active',
			},
			{
				src: '/images/rust-screenshot-13.webp',
				title: 'Rust loot run radar ESP',
				caption: 'Rust loot run with radar and player ESP enabled',
			},
			{
				src: '/images/rust-screenshot-14.webp',
				title: 'Rust map radar player positions',
				caption: 'Rust map overview with radar and player positions',
			},
			{
				src: '/images/rust-screenshot-15.webp',
				title: 'Rust wallhack skeleton ESP',
				caption: 'Rust wallhack skeleton ESP on enemy player model',
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
