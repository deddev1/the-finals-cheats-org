/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1400w') ||
		name.endsWith('-1024w') ||
		name.endsWith('-1536w') ||
		name.endsWith('-480w')
	) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/**
 * Homepage / banner hero — wide banner (~3.15:1); LCP uses the 1536w WebP variant.
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/rust-cheats-hero-640w.webp', width: 640 },
	{ src: '/images/rust-cheats-hero-1024w.webp', width: 1024 },
	{ src: '/images/rust-cheats-hero-1536w.webp', width: 1536 },
	{ src: '/images/rust-cheats-hero-1778w.webp', width: 1778 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — sharp mid-high ladder WebP for retina desktops. */
export const heroSrc = '/images/rust-cheats-hero-1536w.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** LCP preload — same compressed WebP. */
export const heroPreloadSrc = heroSrc;
export const heroMimeType = 'image/webp';

/** Intrinsic dimensions of the default LCP asset (1536w variant). */
export const heroWidth = 1536;
export const heroHeight = 488;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

/** Canonical screenshot path — responsive variants use -480w / -960w suffixes. */
export function screenshotSrc(n: number): string {
	return `/images/rust-screenshot-${String(n).padStart(2, '0')}.webp`;
}

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
