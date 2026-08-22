/**
 * Import Rust cheat screenshots from Supabase public storage.
 * Writes crawl URLs: /images/rust-screenshot-01.webp … 15.webp
 * plus -480w / -960w responsive variants. Does not touch hero assets.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/rust/';

/** User-provided screenshots (deduplicated, in display order). */
const SOURCE_URLS = [
	`${BASE}Screenshot%202026-08-22%20094108.png`,
	`${BASE}Screenshot%202026-08-22%20094119.png`,
	`${BASE}Screenshot%202026-08-22%20094126.png`,
	`${BASE}Screenshot%202026-08-22%20094132.png`,
	`${BASE}Screenshot%202026-08-22%20094207.png`,
	`${BASE}Screenshot%202026-08-22%20094339.png`,
	`${BASE}Screenshot%202026-08-22%20094248.png`,
	`${BASE}Screenshot%202026-08-22%20100844.png`,
	`${BASE}Screenshot%202026-08-22%20100955.png`,
	`${BASE}Screenshot%202026-08-22%20101030.png`,
	`${BASE}Screenshot%202026-08-22%20100852.png`,
];

const SCREENSHOT_COUNT = 15;

const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/rust-screenshots/sources');

const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 82, effort: 6, smartSubsample: true };

const LEGACY_MAP = {
	'rust-screenshot-02': ['rust-cheats-esp.webp'],
	'rust-screenshot-03': ['rust-cheats-wallhack.webp'],
	'rust-screenshot-04': ['rust-cheats-aimbot.webp'],
	'rust-screenshot-05': ['rust-cheats-aimbot-view.webp'],
	'rust-screenshot-06': ['rust-cheats-radar.webp'],
	'rust-screenshot-07': ['rust-cheats-session.webp'],
	'rust-screenshot-08': ['rust-cheats-combat.webp'],
	'rust-screenshot-09': ['rust-esp-player-tags.webp', 'rust-esp-radar.webp'],
	'rust-screenshot-10': ['rust-aimbot-skeleton.webp', 'rust-aimbot-sniper.webp'],
	'rust-screenshot-11': ['rust-extract-fight.webp'],
	'rust-screenshot-12': ['rust-growth-run-combat.webp'],
	'rust-screenshot-13': ['rust-growth-run-mode.webp'],
	'rust-screenshot-14': ['rust-verdansk-map.webp'],
	'rust-screenshot-15': ['rust-wallhack-skeleton.webp'],
};

async function fetchSource(url, index) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; RustCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Download failed (${index + 1}): HTTP ${res.status} — ${url}`);
	const buf = Buffer.from(await res.arrayBuffer());
	const file = path.join(tmpDir, `source-${String(index + 1).padStart(2, '0')}.png`);
	await writeFile(file, buf);
	return file;
}

async function encodeWebp(input, width, options = WEBP) {
	const meta = await sharp(input).metadata();
	const nativeWidth = meta.width ?? width;
	const targetWidth = Math.min(width, nativeWidth);
	const height = Math.round(((meta.height ?? 595) / nativeWidth) * targetWidth);
	return sharp(input)
		.resize(targetWidth, height, { fit: 'inside', withoutEnlargement: true })
		.webp(options)
		.toBuffer();
}

async function writeScreenshotSet(pngPath, baseName) {
	const outputs = [];
	let canonical = null;

	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await encodeWebp(pngPath, width);
		await writeFile(path.join(imagesDir, file), webp);
		outputs.push({ file, bytes: webp.length });
	}

	canonical = await encodeWebp(pngPath, 960);
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	outputs.push({ file: `${baseName}.webp`, bytes: canonical.length });

	return { outputs, canonical };
}

await mkdir(imagesDir, { recursive: true });
await mkdir(tmpDir, { recursive: true });

console.log(`Downloading ${SOURCE_URLS.length} Supabase screenshots…`);
const sourceFiles = [];
for (let i = 0; i < SOURCE_URLS.length; i += 1) {
	console.log(`  ↓ ${i + 1}/${SOURCE_URLS.length}`);
	sourceFiles.push(await fetchSource(SOURCE_URLS[i], i));
}

let totalBytes = 0;

for (let n = 1; n <= SCREENSHOT_COUNT; n += 1) {
	const num = String(n).padStart(2, '0');
	const base = `rust-screenshot-${num}`;
	const png = sourceFiles[(n - 1) % sourceFiles.length];

	console.log(`Processing ${base}…`);
	const { outputs, canonical } = await writeScreenshotSet(png, base);
	for (const { file, bytes } of outputs) {
		totalBytes += bytes;
		console.log(`  ✓ ${file} (${Math.round(bytes / 1024)}KB)`);
	}

	for (const name of LEGACY_MAP[base] ?? []) {
		await writeFile(path.join(imagesDir, name), canonical);
		console.log(`  ✓ ${name} (alias)`);
	}
}

console.log(`\nDone — ${SCREENSHOT_COUNT} canonical URLs + responsive variants (~${Math.round(totalBytes / 1024)}KB webp)`);
console.log('Hero assets unchanged — run fetch:hero separately if needed.');
