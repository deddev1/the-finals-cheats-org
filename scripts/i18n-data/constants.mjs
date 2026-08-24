/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'finals-esp', 'finals-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — simple thefinals cheats keyword filenames. */
export const HERO_IMAGES = {
	home: '/images/finals-cheats-esp.webp',
	'finals-esp': '/images/finals-cheats-radar.webp',
	'finals-aimbot': '/images/finals-cheats-aimbot.webp',
	features: '/images/finals-cheats-aimbot-view.webp',
	pricing: '/images/finals-cheats-session.webp',
	setup: '/images/finals-cheats-radar.webp',
	updates: '/images/finals-cheats-esp.webp',
	faq: '/images/finals-cheats-aimbot-view.webp',
	support: '/images/finals-cheats-session.webp',
	undetected: '/images/finals-cheats-wallhack.webp',
	wallhack: '/images/finals-cheats-wallhack.webp',
	radar: '/images/finals-cheats-radar.webp',
	eac: '/images/finals-cheats-aimbot.webp',
	'cheats-2026': '/images/finals-cheats-esp.webp',
	hacks: '/images/finals-cheats-combat.webp',
	'cheat-download': '/images/finals-cheats-session.webp',
	'mod-menu': '/images/finals-cheats-radar.webp',
	'soft-aim': '/images/finals-cheats-aimbot-view.webp',
	'best-cheats': '/images/finals-cheats-esp.webp',
	'aimbot-hack': '/images/finals-cheats-aimbot-view.webp',
	'esp-hack': '/images/finals-cheats-wallhack.webp',
	'unlock-all': '/images/finals-cheats-radar.webp',
	privacy: '/images/finals-cheats-aimbot.webp',
	refund: '/images/finals-cheats-session.webp',
	terms: '/images/finals-cheats-aimbot-view.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; hacksPackage: string; matchFight: string; battleRoyale: string; matchMap: string;
\t};
};
export type PageId = 'home' | 'finals-esp' | 'finals-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy The Final Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://store.steampowered.com/app/2073850/THE_FINALS/" target="_blank" rel="noopener noreferrer">The Finals</a>',
	rust:
		'<a href="https://store.steampowered.com/app/2073850/THE_FINALS/" target="_blank" rel="noopener noreferrer">The Finals</a>',
	status:
		'<a href="https://store.steampowered.com/app/2073850/THE_FINALS/" target="_blank" rel="noopener noreferrer">The Finals on Steam</a>',
	eac:
		'<a href="https://www.easy.ac/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>',
};
