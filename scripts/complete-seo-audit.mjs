#!/usr/bin/env node
/**
 * Completes finals-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'finals-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'finals-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'finals-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'finals-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-finals-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'finals-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'finals-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'finals-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/rust-rust/g, 'rust'],
	[/eac-bypass-rust/g, 'eac-bypass'],
	[/The Finals/g, 'The Finals'],
	[/The Finals/g, 'The Finals'],
	[/Call of Duty/g, 'The Finals'],
	[/The Finals Wallhack/g, 'The Finals Wallhack'],
	[/The Finals Radar Hack/g, 'The Finals Radar Hack'],
	[/The Finals Cheat Features/g, 'The Finals Cheat Features'],
	[/The Finals Cheat Pricing/g, 'The Finals Cheat Pricing'],
	[/The Finals Cheat Setup/g, 'The Finals Cheat Setup'],
	[/The Finals Cheat Status/g, 'The Finals Cheat Status'],
	[/The Finals Cheat Support/g, 'The Finals Cheat Support'],
	[/The Finals squad fight/g, 'The Finals squad fight'],
	[/The Finals pack builder/g, 'The Finals loadout builder'],
	[/The Finals store header/g, 'The Finals header'],
	[/The Finals wasteland combat/g, 'The Finals battle royale combat'],
	[/The Finals loadout builder/g, 'The Finals loadout builder'],
	[/The Finals pricing/g, 'The Finals pricing'],
	[/The Finals Easy Anti-Cheat/g, 'The Finals Easy Anti-Cheat'],
	[/on The Finals/g, 'on The Finals'],
	[/for The Finals/g, 'for The Finals'],
	[/The Finals guides/g, 'The Finals guides'],
	[/The Finals guide/g, 'The Finals guide'],
	[/The Finals hileleri/g, 'The Finals hileleri'],
	[/The Finals hile/g, 'The Finals hile'],
	[/The Finals hileleri/g, 'The Finals hileleri'],
	[/cheatów The Finals/g, 'cheatów The Finals'],
	[/cheat The Finals/g, 'cheat The Finals'],
	[/cheats The Finals/g, 'cheats The Finals'],
	[/trucos The Finals/g, 'trucos The Finals'],
	[/triche The Finals/g, 'triche The Finals'],
	[/trucchi The Finals/g, 'trucchi The Finals'],
	[/Wallhack The Finals/g, 'The Finals Wallhack'],
	[/cheat The Finals undetected/g, 'cheat The Finals undetected'],
	[/cheats The Finals undetected/g, 'cheats The Finals undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/farming run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and farming run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, farming run'],
	[/session and farming run/g, 'session and farming run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/finals-cheats/g, 'finals-cheats'],
	[/the-rust/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for The Finals'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after The Finals anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy The Finals Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/The Finals guides/g, 'The Finals guides');
	content = content.replace(/The Finals guide/g, 'The Finals guide');
	content = content.replace(/The Finals hileleri/g, 'The Finals hileleri');
	content = content.replace(/The Finals hile/g, 'The Finals hile');
	content = content.replace(/cheat The Finals/g, 'cheat The Finals');
	content = content.replace(/cheats The Finals/g, 'cheats The Finals');
	content = content.replace(/trucos The Finals/g, 'trucos The Finals');
	content = content.replace(/triche The Finals/g, 'triche The Finals');
	content = content.replace(/trucchi The Finals/g, 'trucchi The Finals');
	content = content.replace(/cheatów The Finals/g, 'cheatów The Finals');
	content = content.replace(/читов The Finals/g, 'читов The Finals');
	content = content.replace(/читів The Finals/g, 'читів The Finals');
	content = content.replace(/The Finalsチート/g, 'The Finalsチート');
	content = content.replace(/The Finals 치트/g, 'The Finals 치트');
	content = content.replace(/The Finals作弊/g, 'The Finals作弊');
	content = content.replace(/The Finals rehberleri/g, 'The Finals rehberleri');
	content = content.replace(/The Finals gidsen/g, 'The Finals gidsen');
	content = content.replace(/The Finals průvodce/g, 'The Finals průvodce');
	content = content.replace(/The Finals guider/g, 'The Finals guider');
	content = content.replace(/The Finals related/g, 'The Finals related');
	content = content.replace(/The Finals ガイド/g, 'The Finals ガイド');
	content = content.replace(/The Finals 가이드/g, 'The Finals 가이드');
	content = content.replace(/The Finals指南/g, 'The Finals指南');
	content = content.replace(/The Finals गाइड/g, 'The Finals गाइड');
	content = content.replace(/The Finals panduan/g, 'The Finals panduan');
	content = content.replace(/The Finals คู่มือ/g, 'The Finals คู่มือ');
	content = content.replace(/The Finals hướng dẫn/g, 'The Finals hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== The Finals Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
