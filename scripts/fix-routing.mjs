#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea Rust source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['rust-esp', 'rust-esp'],
	['rust-aimbot', 'rust-aimbot'],
	['eac', 'eac'],
	['undetected-rust-cheats', 'undetected-rust-cheats'],
	['rust-wallhack', 'rust-wallhack'],
	['rust-radar-hack', 'rust-radar-hack'],
	['rust-cheats-2026', 'rust-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['rustcheats.co', 'rustcheats.co'],
	['trucos-rust', 'trucos-rust'],
	['triche-rust', 'triche-rust'],
	['rust-cheats', 'rust-cheats'],
	['cheats-rust', 'cheats-rust'],
	['trucchi-rust', 'trucchi-rust'],
	['cheaty-rust', 'cheaty-rust'],
	['chity-rust', 'chity-rust'],
	['chitov-rust', 'chitov-rust'],
	['chitiv-rust', 'chitiv-rust'],
	['cheatow-rust', 'cheatow-rust'],
	['hile-rust', 'hile-rust'],
	['rust-hile', 'rust-hile'],
	['rust-esp-chity', 'rust-esp-chity'],
	['rust-aimbot-chity', 'rust-aimbot-chity'],
	['unentdeckte-rust-cheats', 'unentdeckte-rust-cheats'],
	['cheats-rust-indetectaveis', 'cheats-rust-indetectaveis'],
	['trucchi-rust-indetectabili', 'trucchi-rust-indetectabili'],
	['niewykrywalne-cheats-rust', 'niewykrywalne-cheats-rust'],
	['nedecektiruemye-chity-rust', 'nedecektiruemye-chity-rust'],
	['tespit-edilemeyen-rust-hileleri', 'tespit-edilemeyen-rust-hileleri'],
	['nedecektovani-chity-rust', 'nedecektovani-chity-rust'],
	['cheats-rust-nedetectabile', 'cheats-rust-nedetectabile'],
	['basta-rust-cheats', 'basta-rust-cheats'],
	['eac-bypass-trucos-rust', 'eac-bypass-trucos-rust'],
	['eac-bypass-triche-rust', 'eac-bypass-triche-rust'],
	['eac-bypass-cheats-rust', 'eac-bypass-cheats-rust'],
	['eac-bypass-chity-rust', 'eac-bypass-chity-rust'],
	['eac-bypass-rust', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich rust-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-rust-cheats-hero.webp',
	'rust-esp': '/images/the-rust-cheats-esp-wallhack.webp',
	'rust-aimbot': '/images/the-rust-cheats-aimbot-combat.webp',
	features: '/images/rust-cheats-package.webp',
	pricing: '/images/rust-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-pack-fight.webp',
	support: '/images/rust-cheats-package.webp',
	undetected: '/images/rust-survival-combat.webp',
	wallhack: '/images/the-rust-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'eac': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/the-rust-cheats-hero.webp',
	privacy: '/images/the-rust-cheats-aimbot-combat.webp',
	refund: '/images/rust-cheats-cover.webp',
	terms: '/images/rust-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'rust-esp', 'rust-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'rust-esp' | 'rust-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'raidFight');
	content = content.replace(/alMazrah/g, 'raidMap');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
