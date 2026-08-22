import { siteConfig } from './site';

/** Simple crawl URLs — one screenshot per asset slot. */
export const rustScreenshot = (n: number) =>
	`/images/rust-screenshot-${String(n).padStart(2, '0')}.webp`;

/** SEO-friendly alt text per screenshot slot (matches import order). */
export const rustScreenshotAlts: Record<number, string> = {
	1: 'Rust Cheats mod menu overlay on Windows PC',
	2: 'Rust ESP wallhack showing player boxes and names',
	3: 'Rust wallhack ESP highlighting enemies through walls',
	4: 'Rust aimbot soft aim targeting in PvP combat',
	5: 'Rust aimbot FOV and bone targeting settings',
	6: 'Rust 2D radar hack with player blips on map',
	7: 'Rust Cheats session HUD with ESP and radar active',
	8: 'Rust combat screenshot with ESP and aimbot overlays',
	9: 'Rust player ESP tags and distance labels in raid',
	10: 'Rust aimbot skeleton overlay on hostile player',
	11: 'Rust monument PvP fight with cheat overlays enabled',
	12: 'Rust base raid combat with ESP wallhack active',
	13: 'Rust loot run with radar and player ESP enabled',
	14: 'Rust map overview with radar and player positions',
	15: 'Rust wallhack skeleton ESP on enemy player model',
};

export function rustScreenshotAlt(n: number): string {
	return rustScreenshotAlts[n] ?? `Rust Cheats gameplay screenshot ${n}`;
}

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
		{ src: rustScreenshot(2), alt: rustScreenshotAlt(2) },
		{ src: rustScreenshot(3), alt: rustScreenshotAlt(3) },
		{ src: rustScreenshot(4), alt: rustScreenshotAlt(4) },
		{ src: rustScreenshot(6), alt: rustScreenshotAlt(6) },
		{ src: rustScreenshot(7), alt: rustScreenshotAlt(7) },
		{ src: rustScreenshot(8), alt: rustScreenshotAlt(8) },
	],
	gallery: [
		{ src: rustScreenshot(2), alt: rustScreenshotAlt(2), featured: true },
		{ src: rustScreenshot(3), alt: rustScreenshotAlt(3) },
		{ src: rustScreenshot(4), alt: rustScreenshotAlt(4) },
		{ src: rustScreenshot(9), alt: rustScreenshotAlt(9) },
		{ src: rustScreenshot(10), alt: rustScreenshotAlt(10) },
	],
	sitemap: Array.from({ length: 15 }, (_, i) => {
		const n = i + 1;
		return {
			src: rustScreenshot(n),
			title: `Rust Cheats screenshot ${n} — ESP, aimbot and radar`,
			caption: rustScreenshotAlt(n),
		};
	}),
} as const;
