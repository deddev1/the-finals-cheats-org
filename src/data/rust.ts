import { siteConfig } from './site';

/** Simple crawl URLs — one screenshot per asset slot. */
export const rustScreenshot = (n: number) =>
	`/images/rust-screenshot-${String(n).padStart(2, '0')}.webp`;

/** Screenshots used across product pages. */
export const rustImages = {
	hero: rustScreenshot(1),
	espWallhack: rustScreenshot(3),
	aimbotCombat: rustScreenshot(4),
	aimbotSkeleton: rustScreenshot(5),
	playerEsp: rustScreenshot(6),
	hacksCombat: rustScreenshot(7),
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one screenshot URL */
	cover: rustScreenshot(7),
	baseBuilder: rustScreenshot(6),
	squadFight: rustScreenshot(5),
	hacksPackage: rustScreenshot(6),
	headerArt: rustScreenshot(5),
	raidCombat: rustScreenshot(7),
	extractFight: rustScreenshot(4),
	raidFight: rustScreenshot(4),
	farmingRunCombat: rustScreenshot(3),
	farmingRunMode: rustScreenshot(2),
	raidMap: rustScreenshot(2),
	sessionMap: rustScreenshot(2),
	product: [
		{ src: rustScreenshot(2), alt: 'Rust gameplay screenshot 2' },
		{ src: rustScreenshot(3), alt: 'Rust gameplay screenshot 3' },
		{ src: rustScreenshot(4), alt: 'Rust gameplay screenshot 4' },
		{ src: rustScreenshot(6), alt: 'Rust gameplay screenshot 6' },
		{ src: rustScreenshot(7), alt: 'Rust gameplay screenshot 7' },
		{ src: rustScreenshot(8), alt: 'Rust gameplay screenshot 8' },
	],
	gallery: [
		{ src: rustScreenshot(2), alt: 'Rust gameplay screenshot 2', featured: true },
		{ src: rustScreenshot(3), alt: 'Rust gameplay screenshot 3' },
		{ src: rustScreenshot(4), alt: 'Rust gameplay screenshot 4' },
		{ src: rustScreenshot(9), alt: 'Rust gameplay screenshot 9' },
		{ src: rustScreenshot(10), alt: 'Rust gameplay screenshot 10' },
	],
	sitemap: Array.from({ length: 15 }, (_, i) => ({
		src: rustScreenshot(i + 1),
		title: `Rust gameplay screenshot ${i + 1}`,
		caption: `Rust player survival screenshot ${i + 1}`,
	})),
} as const;
