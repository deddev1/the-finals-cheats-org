#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea The Finals source. */
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
	['finals-esp', 'finals-esp'],
	['finals-aimbot', 'finals-aimbot'],
	['eac', 'eac'],
	['undetected-finals-cheats', 'undetected-finals-cheats'],
	['finals-wallhack', 'finals-wallhack'],
	['finals-radar-hack', 'finals-radar-hack'],
	['finals-cheats-2026', 'finals-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['thefinalscheats.org', 'thefinalscheats.org'],
	['trucos-finals', 'trucos-finals'],
	['triche-finals', 'triche-finals'],
	['finals-cheats', 'finals-cheats'],
	['cheats-finals', 'cheats-finals'],
	['trucchi-finals', 'trucchi-finals'],
	['cheaty-finals', 'cheaty-finals'],
	['chity-finals', 'chity-finals'],
	['chitov-finals', 'chitov-finals'],
	['chitiv-finals', 'chitiv-finals'],
	['cheatow-finals', 'cheatow-finals'],
	['hile-finals', 'hile-finals'],
	['finals-hile', 'finals-hile'],
	['finals-esp-chity', 'finals-esp-chity'],
	['finals-aimbot-chity', 'finals-aimbot-chity'],
	['unentdeckte-finals-cheats', 'unentdeckte-finals-cheats'],
	['cheats-finals-indetectaveis', 'cheats-finals-indetectaveis'],
	['trucchi-finals-indetectabili', 'trucchi-finals-indetectabili'],
	['niewykrywalne-cheats-finals', 'niewykrywalne-cheats-finals'],
	['nedecektiruemye-chity-finals', 'nedecektiruemye-chity-finals'],
	['tespit-edilemeyen-finals-hileleri', 'tespit-edilemeyen-finals-hileleri'],
	['nedecektovani-chity-finals', 'nedecektovani-chity-finals'],
	['cheats-finals-nedetectabile', 'cheats-finals-nedetectabile'],
	['basta-finals-cheats', 'basta-finals-cheats'],
	['eac-bypass-trucos-finals', 'eac-bypass-trucos-finals'],
	['eac-bypass-triche-finals', 'eac-bypass-triche-finals'],
	['eac-bypass-cheats-finals', 'eac-bypass-cheats-finals'],
	['eac-bypass-chity-finals', 'eac-bypass-chity-finals'],
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
	const heroImages = `/** Hero image per page topic — keyword-rich finals-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-finals-cheats-hero.webp',
	'finals-esp': '/images/the-finals-cheats-esp-wallhack.webp',
	'finals-aimbot': '/images/the-finals-cheats-aimbot-combat.webp',
	features: '/images/finals-cheats-package.webp',
	pricing: '/images/finals-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-pack-fight.webp',
	support: '/images/finals-cheats-package.webp',
	undetected: '/images/rust-survival-combat.webp',
	wallhack: '/images/the-finals-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'eac': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/the-finals-cheats-hero.webp',
	privacy: '/images/the-finals-cheats-aimbot-combat.webp',
	refund: '/images/finals-cheats-cover.webp',
	terms: '/images/finals-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'finals-esp', 'finals-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'finals-esp' | 'finals-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'raidFight');
	content = content.replace(/alMazrah/g, 'raidMap');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
