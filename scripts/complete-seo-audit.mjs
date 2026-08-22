#!/usr/bin/env node
/**
 * Completes rust-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'rust-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'rust-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'rust-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'rust-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-rust-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'rust-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'rust-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'rust-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/rust-rust/g, 'rust'],
	[/eac-bypass-rust/g, 'eac-bypass'],
	[/Rust/g, 'Rust'],
	[/Rust/g, 'Rust'],
	[/Call of Duty/g, 'Rust'],
	[/Rust Wallhack/g, 'Rust Wallhack'],
	[/Rust Radar Hack/g, 'Rust Radar Hack'],
	[/Rust Cheat Features/g, 'Rust Cheat Features'],
	[/Rust Cheat Pricing/g, 'Rust Cheat Pricing'],
	[/Rust Cheat Setup/g, 'Rust Cheat Setup'],
	[/Rust Cheat Status/g, 'Rust Cheat Status'],
	[/Rust Cheat Support/g, 'Rust Cheat Support'],
	[/Rust squad fight/g, 'Rust squad fight'],
	[/Rust pack builder/g, 'Rust loadout builder'],
	[/Rust store header/g, 'Rust header'],
	[/Rust wasteland combat/g, 'Rust battle royale combat'],
	[/Rust loadout builder/g, 'Rust loadout builder'],
	[/Rust pricing/g, 'Rust pricing'],
	[/Rust Easy Anti-Cheat/g, 'Rust Easy Anti-Cheat'],
	[/on Rust/g, 'on Rust'],
	[/for Rust/g, 'for Rust'],
	[/Rust guides/g, 'Rust guides'],
	[/Rust guide/g, 'Rust guide'],
	[/Rust hileleri/g, 'Rust hileleri'],
	[/Rust hile/g, 'Rust hile'],
	[/Rust hileleri/g, 'Rust hileleri'],
	[/cheatów Rust/g, 'cheatów Rust'],
	[/cheat Rust/g, 'cheat Rust'],
	[/cheats Rust/g, 'cheats Rust'],
	[/trucos Rust/g, 'trucos Rust'],
	[/triche Rust/g, 'triche Rust'],
	[/trucchi Rust/g, 'trucchi Rust'],
	[/Wallhack Rust/g, 'Rust Wallhack'],
	[/cheat Rust undetected/g, 'cheat Rust undetected'],
	[/cheats Rust undetected/g, 'cheats Rust undetected'],
	[/Verdansk beams/g, 'bolt-action AR beams'],
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
	[/rust-cheats/g, 'rust-cheats'],
	[/the-rust/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Rust'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Rust anti-cheat'],
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
		.replace(/Buy on Zadeyo/g, 'Buy Rust Hacks')
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
	content = content.replace(/Rust guides/g, 'Rust guides');
	content = content.replace(/Rust guide/g, 'Rust guide');
	content = content.replace(/Rust hileleri/g, 'Rust hileleri');
	content = content.replace(/Rust hile/g, 'Rust hile');
	content = content.replace(/cheat Rust/g, 'cheat Rust');
	content = content.replace(/cheats Rust/g, 'cheats Rust');
	content = content.replace(/trucos Rust/g, 'trucos Rust');
	content = content.replace(/triche Rust/g, 'triche Rust');
	content = content.replace(/trucchi Rust/g, 'trucchi Rust');
	content = content.replace(/cheatów Rust/g, 'cheatów Rust');
	content = content.replace(/читов Rust/g, 'читов Rust');
	content = content.replace(/читів Rust/g, 'читів Rust');
	content = content.replace(/Rustチート/g, 'Rustチート');
	content = content.replace(/Rust 치트/g, 'Rust 치트');
	content = content.replace(/Rust作弊/g, 'Rust作弊');
	content = content.replace(/Rust rehberleri/g, 'Rust rehberleri');
	content = content.replace(/Rust gidsen/g, 'Rust gidsen');
	content = content.replace(/Rust průvodce/g, 'Rust průvodce');
	content = content.replace(/Rust guider/g, 'Rust guider');
	content = content.replace(/Rust related/g, 'Rust related');
	content = content.replace(/Rust ガイド/g, 'Rust ガイド');
	content = content.replace(/Rust 가이드/g, 'Rust 가이드');
	content = content.replace(/Rust指南/g, 'Rust指南');
	content = content.replace(/Rust गाइड/g, 'Rust गाइड');
	content = content.replace(/Rust panduan/g, 'Rust panduan');
	content = content.replace(/Rust คู่มือ/g, 'Rust คู่มือ');
	content = content.replace(/Rust hướng dẫn/g, 'Rust hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Rust Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
