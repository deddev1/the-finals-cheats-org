import { siteConfig } from './site';

/** User-provided Supabase originals — kept for provenance; site serves optimized WebP copies. */
export const PRODUCT_SCREENSHOT_SOURCES = [
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/thefinals/Screenshot%202026-08-23%20193309.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/thefinals/Screenshot%202026-08-23%20193319.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/thefinals/Screenshot%202026-08-23%20193327.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/thefinals/Screenshot%202026-08-23%20193335.png',
] as const;

export const PRODUCT_SCREENSHOT_COUNT = PRODUCT_SCREENSHOT_SOURCES.length;

export type ProductScreenshotMeta = {
	id: number;
	src: string;
	url: string;
	sourceUrl: string;
	alt: string;
	title: string;
	caption: string;
};

const alts: Record<number, { alt: string; title: string; caption: string }> = {
	1: {
		alt: 'The Finals ESP wallhack showing player boxes in arena combat',
		title: 'The Finals ESP wallhack player boxes',
		caption: 'The Finals ESP wallhack showing player boxes and distance tags',
	},
	2: {
		alt: 'The Finals wallhack ESP highlighting enemies through walls',
		title: 'The Finals wallhack ESP overlay',
		caption: 'The Finals wallhack ESP highlighting enemies through arena geometry',
	},
	3: {
		alt: 'The Finals aimbot soft aim targeting in PvP combat',
		title: 'The Finals aimbot soft aim in match',
		caption: 'The Finals aimbot soft aim targeting during PvP combat',
	},
	4: {
		alt: 'The Final Cheats mod menu with ESP and radar toggles',
		title: 'The Final Cheats mod menu overlay',
		caption: 'The Final Cheats mod menu with ESP, aimbot, and radar toggles on Windows PC',
	},
};

export function screenshotSrc(n: number): string {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	return `/images/finals-screenshot-${String(id).padStart(2, '0')}.webp`;
}

export function absoluteScreenshotUrl(n: number): string {
	return new URL(screenshotSrc(n), siteConfig.url).href;
}

export function getProductScreenshot(n: number): ProductScreenshotMeta {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	const meta = alts[id] ?? {
		alt: `The Final Cheats gameplay screenshot ${id}`,
		title: `The Final Cheats screenshot ${id}`,
		caption: `The Final Cheats screenshot ${id} for The Finals on Windows PC`,
	};
	const src = screenshotSrc(id);
	return {
		id,
		src,
		url: new URL(src, siteConfig.url).href,
		sourceUrl: PRODUCT_SCREENSHOT_SOURCES[id - 1]!,
		...meta,
	};
}

export const productScreenshots: ProductScreenshotMeta[] = Array.from(
	{ length: PRODUCT_SCREENSHOT_COUNT },
	(_, i) => getProductScreenshot(i + 1),
);

/** JSON-LD ImageObject nodes for gallery / sitemap parity. */
export function screenshotImageObjects(limit = PRODUCT_SCREENSHOT_COUNT) {
	return productScreenshots.slice(0, limit).map((shot) => ({
		'@type': 'ImageObject' as const,
		'@id': `${shot.url}#image`,
		url: shot.url,
		contentUrl: shot.url,
		name: shot.title,
		description: shot.caption,
		thumbnailUrl: shot.url,
	}));
}
