import { siteConfig } from './site';
import {
	getProductScreenshot,
	productScreenshots,
	PRODUCT_SCREENSHOT_COUNT,
	screenshotSrc,
} from './product-images';

/** @deprecated Use screenshotSrc from product-images */
export const rustScreenshot = screenshotSrc;

export const rustScreenshotAlts: Record<number, string> = Object.fromEntries(
	productScreenshots.map((s) => [s.id, s.alt]),
);

export function rustScreenshotAlt(n: number): string {
	return getProductScreenshot(n).alt;
}

/** Screenshots used across product pages. Hero uses brand.ts heroImage — not these. */
export const finalsImages = {
	hero: screenshotSrc(1),
	espWallhack: screenshotSrc(2),
	aimbotCombat: screenshotSrc(3),
	aimbotSkeleton: screenshotSrc(4),
	playerEsp: screenshotSrc(1),
	hacksCombat: screenshotSrc(3),
	logo: siteConfig.logo,
	cover: screenshotSrc(4),
	baseBuilder: screenshotSrc(1),
	squadFight: screenshotSrc(3),
	hacksPackage: screenshotSrc(4),
	headerArt: screenshotSrc(2),
	raidCombat: screenshotSrc(3),
	extractFight: screenshotSrc(3),
	raidFight: screenshotSrc(3),
	farmingRunCombat: screenshotSrc(2),
	farmingRunMode: screenshotSrc(1),
	raidMap: screenshotSrc(1),
	sessionMap: screenshotSrc(2),
	product: productScreenshots.map((s) => ({ src: s.src, alt: s.alt, url: s.url })),
	gallery: productScreenshots.map((s, i) => ({
		src: s.src,
		alt: s.alt,
		url: s.url,
		featured: i === 0,
	})),
	sitemap: productScreenshots.map((s) => ({
		src: s.src,
		url: s.url,
		title: s.title,
		caption: s.caption,
	})),
} as const;

export { PRODUCT_SCREENSHOT_COUNT };
