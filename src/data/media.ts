import { siteConfig } from './site';

/** Homepage product demo — stable on-domain URLs for crawl + VideoObject schema. */
export const demoVideo = {
	src: '/videos/rust-cheats-demo.mp4',
	poster: '/images/rust-cheats-demo-poster.webp',
	title: 'Rust Cheats ESP, aimbot and radar demo',
	description:
		'Gameplay demo of Rust Cheats on Windows PC — ESP wallhack overlays, soft aim, and 2D radar during a live Rust raid.',
	width: 960,
	height: 540,
	durationIso: 'PT20S',
	uploadDate: '2026-08-22',
} as const;

export function demoVideoAbsoluteUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function demoVideoSchema(pageUrl: string) {
	return {
		'@type': 'VideoObject',
		'@id': `${pageUrl}#demo-video`,
		name: demoVideo.title,
		description: demoVideo.description,
		thumbnailUrl: demoVideoAbsoluteUrl(demoVideo.poster),
		contentUrl: demoVideoAbsoluteUrl(demoVideo.src),
		embedUrl: demoVideoAbsoluteUrl(demoVideo.src),
		uploadDate: demoVideo.uploadDate,
		duration: demoVideo.durationIso,
		width: demoVideo.width,
		height: demoVideo.height,
		inLanguage: 'en',
		isFamilyFriendly: false,
		publisher: {
			'@type': 'Organization',
			name: siteConfig.name,
			url: siteConfig.url,
		},
	};
}
