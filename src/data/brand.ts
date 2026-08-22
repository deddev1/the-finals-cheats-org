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
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Frust',

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
	defaultOgImage: '/images/rust-cheats-hero-1536w.webp',
	heroImage: '/images/rust-cheats-hero-1536w.webp',

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
			'rust cheat',
			'rust hack',
			'undetected rust cheats',
			'undetected rust hacks',
			'best rust cheats',
			'best rust cheats 2026',
			'rust cheats 2026',
			'rust hacks 2026',
			'rust esp',
			'rust esp hack',
			'rust wallhack',
			'rust aimbot',
			'rust aimbot hack',
			'rust radar hack',
			'rust mod menu',
			'rust cheat download',
			'rust hacks pc',
			'rust cheats pc',
			'rust eac bypass',
			'rust anti cheat bypass',
			'rust soft aim',
			'rust silent aim',
			'rust external cheat',
			'rust hack menu',
			'buy rust cheats',
			'rust cheats undetected',
			'rust pvp cheats',
			'rust raid cheats',
			'rust cheats with aimbot',
			'rust cheats with esp',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
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
