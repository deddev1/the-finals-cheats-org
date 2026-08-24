import { brand } from './brand';
import type { PageId } from './i18n/routing';

export type ExternalResource = {
	id: string;
	label: string;
	href: string;
	note?: string;
};

export type GuideCta = {
	label: string;
	href: string;
};

/** Canonical outbound URLs — single source for CTAs, pills, and resource blocks. */
export const externalUrls = {
	steam: brand.gameUrl,
	steamNews: 'https://store.steampowered.com/app/2073850/news/',
	officialSite: 'https://www.reachthefinals.com/',
	wiki: 'https://thefinals.fandom.com/wiki/The_Finals',
	steamCommunity: 'https://steamcommunity.com/app/2073850',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		id: 'steam',
		label: 'The Finals on Steam',
		href: externalUrls.steam,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		id: 'patch',
		label: 'Steam patch notes & news',
		href: externalUrls.steamNews,
		note: 'Read official update posts before you change your loadout.',
	},
	{
		id: 'official',
		label: 'Official The Finals website',
		href: externalUrls.officialSite,
		note: 'Game overview from Embark Studios.',
	},
	{
		id: 'wiki',
		label: 'The Finals Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Player stats, maps, and survival mechanics.',
	},
	{
		id: 'community',
		label: 'Steam Community hub',
		href: externalUrls.steamCommunity,
		note: 'Announcements and community discussions.',
	},
];

/** Compact above-the-fold guide links for blogs and page banners. */
export const featuredGuidePills: GuideCta[] = [
	{ label: 'The Finals on Steam', href: externalUrls.steam },
	{ label: 'Official patch notes', href: externalUrls.steamNews },
	{ label: 'The Finals Wiki', href: externalUrls.wiki },
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.steamNews },
	updates: { label: 'Steam patch notes', href: externalUrls.steamNews },
	hacks: { label: 'The Finals Wiki', href: externalUrls.wiki },
	'finals-esp': { label: 'The Finals Wiki', href: externalUrls.wiki },
	'finals-aimbot': { label: 'The Finals Wiki', href: externalUrls.wiki },
	radar: { label: 'The Finals Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'Steam Community', href: externalUrls.steamCommunity },
	faq: { label: 'The Finals Wiki', href: externalUrls.wiki },
	undetected: { label: 'Steam patch notes', href: externalUrls.steamNews },
	wallhack: { label: 'The Finals Wiki', href: externalUrls.wiki },
	eac: { label: 'Steam patch notes', href: externalUrls.steamNews },
	'cheats-2026': { label: 'The Finals on Steam', href: externalUrls.steam },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'The Finals Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'The Finals Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'Steam Community', href: externalUrls.steamCommunity },
	'aimbot-hack': { label: 'The Finals Wiki', href: externalUrls.wiki },
	'esp-hack': { label: 'The Finals Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'The Finals on Steam', href: externalUrls.steam },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
