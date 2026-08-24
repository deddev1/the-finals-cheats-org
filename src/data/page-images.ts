import { siteConfig } from './site';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

import { screenshotSrc, PRODUCT_SCREENSHOT_COUNT } from './product-images';

const shot = screenshotSrc;

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = Array.from({ length: PRODUCT_SCREENSHOT_COUNT }, (_, i) => shot(i + 1));

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/finals-cheats-hero-1448w.webp',
	'finals-esp': shot(1),
	'finals-aimbot': shot(3),
	features: shot(4),
	pricing: shot(2),
	setup: shot(1),
	updates: shot(1),
	faq: shot(4),
	support: shot(2),
	undetected: shot(2),
	wallhack: shot(2),
	radar: shot(1),
	eac: shot(3),
	'cheats-2026': shot(1),
	hacks: shot(3),
	'cheat-download': shot(2),
	'mod-menu': shot(1),
	'soft-aim': shot(4),
	'best-cheats': shot(1),
	'aimbot-hack': shot(4),
	'esp-hack': shot(2),
	'unlock-all': shot(1),
	privacy: shot(3),
	refund: shot(2),
	terms: shot(4),
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
