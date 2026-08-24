#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from The Finals source. */
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
	['finals-esp', 'finals-esp'],
	['finals-aimbot', 'finals-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-finals-cheats', 'undetected-finals-cheats'],
	['finals-wallhack', 'finals-wallhack'],
	['finals-radar-hack', 'finals-radar-hack'],
	['finals-cheats-2026', 'finals-cheats-2026'],
	['finals-cheats', 'finals-cheats'],
	['the-rust', 'rust'],
	['The Finals', 'The Finals'],
	['The Finals', 'The Finals'],
	['The Finals Hacks', 'The Finals Hacks'],
	['the finals cheats', 'the finals cheats'],
	['the finals cheat', 'the finals cheat'],
	['The Finals ESP', 'The Finals ESP'],
	['The Finals Aimbot', 'The Finals Aimbot'],
	['the finals wallhack', 'The Finals wallhack'],
	['the finals radar', 'The Finals radar'],
	['The Finals arena fights', 'The Finals arena fights'],
	['The Finals combat', 'The Finals combat'],
	['The Finals patches', 'The Finals patches'],
	['The Finals updates', 'The Finals updates'],
	['The Finals setup', 'The Finals setup'],
	['The Finals license', 'The Finals license'],
	['The Finals licenses', 'The Finals licenses'],
	['The Finals matches', 'The Finals matches'],
	['in The Finals', 'in The Finals'],
	['for The Finals', 'for The Finals'],
	['The Finals on', 'The Finals on'],
	['The Finals or', 'The Finals or'],
	['The Finals\'s', 'The Finals\'s'],
	['The Finals ', 'The Finals '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@thefinalscheats.org', 'support@thefinalscheats.org'],
	['arenas, stadiums, and cashout zones', 'arenas, stadiums, and cashout zones'],
	['arenas, stadiums and cashout zones', 'arenas, stadiums and cashout zones'],
	['raid fights', 'raid fights'],
	['raid fight', 'raid fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['raid timer', 'raid timer'],
	['cashout rounds and arena PvP fights', 'cashout rounds and arena PvP fights'],
	['cashout rounds and arena PvP fights', 'cashout rounds and arena PvP fights'],
	['contestants & cashout teams', 'contestants & cashout teams'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'The Finals combat pace'],
	['COD', 'The Finals'],
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
	product: 'The Finals Hacks',
	game: 'The Finals',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'arenas, stadiums, and cashout zones'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
