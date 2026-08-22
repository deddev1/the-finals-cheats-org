#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Rust source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['rust-esp', 'rust-esp'],
	['rust-aimbot', 'rust-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-rust-cheats', 'undetected-rust-cheats'],
	['rust-wallhack', 'rust-wallhack'],
	['rust-radar-hack', 'rust-radar-hack'],
	['rust-cheats-2026', 'rust-cheats-2026'],
	['rust-cheats', 'rust-cheats'],
	['the-rust', 'rust'],
	['Rust', 'Rust'],
	['Rust', 'Rust'],
	['Rust Hacks', 'Rust Hacks'],
	['rust cheats', 'rust cheats'],
	['rust cheat', 'rust cheat'],
	['Rust ESP', 'Rust ESP'],
	['Rust Aimbot', 'Rust Aimbot'],
	['rust wallhack', 'Rust wallhack'],
	['rust radar', 'Rust radar'],
	['Rust firefights', 'Rust firefights'],
	['Rust combat', 'Rust combat'],
	['Rust patches', 'Rust patches'],
	['Rust updates', 'Rust updates'],
	['Rust setup', 'Rust setup'],
	['Rust license', 'Rust license'],
	['Rust licenses', 'Rust licenses'],
	['Rust raids', 'Rust raids'],
	['in Rust', 'in Rust'],
	['for Rust', 'for Rust'],
	['Rust on', 'Rust on'],
	['Rust or', 'Rust or'],
	['Rust\'s', 'Rust\'s'],
	['Rust ', 'Rust '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@rustcheats.co', 'support@rustcheats.co'],
	['Outpost, monuments, and compound zones', 'Outpost, monuments, and compound zones'],
	['Outpost, monuments and compound zones', 'Outpost, monuments and compound zones'],
	['raid fights', 'raid fights'],
	['raid fight', 'raid fight'],
	['raid rounds', 'raid rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['raid timer', 'raid timer'],
	['base raids and PvP fights', 'base raids and PvP fights'],
	['base raids and PvP fights', 'base raids and PvP fights'],
	['raiders & survivors', 'raiders & survivors'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Rust combat pace'],
	['COD', 'Rust'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Rust Hacks',
	game: 'Rust',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Outpost, monuments, and compound zones'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
