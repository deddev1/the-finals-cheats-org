#!/usr/bin/env node
/**
 * Second-pass cleanup: remove Isle gameplay leftovers after adapt-rust.mjs
 * Run: node scripts/fix-rust-content.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Ordered — specific patterns first. */
const REPLACEMENTS = [
	// Brand leftovers
	['THE ISLE HACKS', 'RUST CHEATS'],
	['The Isle Hacks', 'Rust Cheats'],
	['Isle Hacks', 'Rust Cheats'],
	['Isle Hack Shops', 'Rust Cheat Shops'],
	['Isle Hack Shop', 'Rust Cheat Shop'],
	['Isle Hack', 'Rust Cheat'],
	['Isle wallhack', 'Rust wallhack'],
	['Isle radar', 'Rust radar'],
	['Isle Wiki', 'Rust Wiki'],
	['Isle Intel', 'Rust Intel'],
	['Isle ESP', 'Rust ESP'],
	['Isle Aimbot', 'Rust Aimbot'],
	['Isle cheats', 'Rust cheats'],
	['Isle cheat', 'Rust cheat'],
	['Isle hacks', 'Rust cheats'],
	['Isle hack', 'Rust cheat'],
	['Isle esp', 'Rust ESP'],
	['Isle aimbot', 'Rust Aimbot'],
	['Two-Week Isle Hack Comparison Test', 'Two-Week Rust Cheat Comparison Test'],
	['Typical Budget Isle Hack Shops', 'Typical Budget Rust Cheat Shops'],

	// Broken doubles from partial migration
	['PvP raid raids', 'PvP raids'],
	['raid raid', 'raid'],
	['raid raids', 'raids'],
	['base raids and PvP raids', 'base raids and PvP fights'],
	['base raids and PvP raid raids', 'base raids and PvP fights'],

	// Isle survival mechanics → Rust mechanics
	['herbivore and carnivore', 'solo farmers and raiders'],
	['herbivore & carnivore', 'solo farmers & raiders'],
	['herbivore-and-carnivore-raids', 'solo-farmer-and-raider-sessions'],
	['herbivore-and-carnivore-sessions', 'solo-farmer-and-raider-sessions'],
	['carnivores, ambush builds, bolt-action species', 'ARs, SMGs, and bolt-action rifles'],
	['carnivores and ambush builds', 'ARs and SMGs'],
	['adult carnivores', 'heavy armor kits'],
	['mid-tier species', 'mid-tier weapons'],
	['main species', 'main loadout'],
	['per-species', 'per-weapon'],
	['Per-species', 'Per-weapon'],
	['species profiles', 'weapon profiles'],
	['species comparison', 'weapon comparison'],
	['species choice', 'loadout choice'],
	['species unlocks', 'blueprint unlocks'],
	['juvenile player', 'starting player'],
	['juvenile players', 'starting players'],
	['juvenile build', 'starter kit'],
	['juvenile builds', 'starter kits'],
	['juvenile or practice server', 'aim train or practice server'],
	['spawn as a juvenile', 'spawn with a starter kit'],
	['growth-run-aggressive', 'farming-run-aggressive'],
	['growth-run strategies', 'farming-run strategies'],
	['growth-run player', 'farming-run player'],
	['growth-run meta', 'farming-run meta'],
	['growth strategies', 'farming strategies'],
	['growth aggression', 'farming aggression'],
	['growth path', 'loot path'],
	['growth points', 'scrap'],
	['growth economy', 'resource economy'],
	['growth stat tables', 'weapon stat tables'],
	['growth tiers', 'armor tiers'],
	['growth timer', 'raid timer'],
	['growth tools', 'raid tools'],
	['growth instead', 'loot instead'],
	['growth advantage', 'gear advantage'],
	['growth goals', 'raid goals'],
	['growth progress', 'raid progress'],
	['growth run', 'farming run'],
	['growth runs', 'farming runs'],
	['Growth Runs', 'Farming Runs'],
	['Growth Run', 'Farming Run'],
	['farming run,', 'farming run,'],
	['apex spawn rates', 'heli spawn rates'],
	['apex markers', 'heli markers'],
	['apex threat cues', 'threat cues'],
	['apex players', 'enemy players'],
	['Apex and nest', 'Heli and base'],
	['Apex and juvenile', 'Heli and player'],
	['nest camping', 'base camping'],
	['nest campers', 'base campers'],
	['nest calls', 'footstep audio'],
	['nest route', 'raid route'],
	['nest routes', 'raid routes'],
	['nest plans', 'raid plans'],
	['nest plan', 'raid plan'],
	['nest zones', 'compound zones'],
	['nest zone', 'compound zone'],
	['nest fights', 'base fights'],
	['nest fight', 'base fight'],
	['nest markers', 'base markers'],
	['nest awareness', 'base awareness'],
	['nest cues', 'base cues'],
	['nest before', 'extract before'],
	['and nest before', 'and extract before'],
	['who holds nest', 'who holds the base'],
	['holding a nest', 'holding a base'],
	['clear a nest', 'clear a base'],
	['carcass filters', 'loot filters'],
	['carcass pins', 'loot pins'],
	['carcass highlights', 'loot highlights'],
	['carcass ESP', 'loot ESP'],
	['carcass esp', 'loot esp'],
	['Carcass ESP', 'Loot ESP'],
	['carcass and water', 'loot and resources'],
	['carcass and', 'loot and'],
	['Carcass and', 'Loot and'],
	['carcasses and', 'loot and'],
	['carcasses or', 'loot or'],
	['carcasses.', 'loot.'],
	['carcasses,', 'loot,'],
	['carcasses ', 'loot '],
	['carcasses', 'loot'],
	['carcass ', 'loot '],
	['carcass', 'loot'],
	['carcassesing', 'looting'],
	['carcass like', 'loot like'],
	['carcass-timer', 'loot-timer'],
	['Print Loot', 'Farm Loot'],
	['water sources', 'resource nodes'],
	['water markers', 'resource markers'],
	['pack fights', 'squad fights'],
	['pack fight', 'squad fight'],
	['pack pushes', 'squad pushes'],
	['pack spawns', 'squad spawns'],
	['enemy packs', 'enemy squads'],
	['pack hunting', 'squad raiding'],
	['bite height', 'head height'],
	['attack timing', 'recoil control'],
	['kill speed', 'TTK'],
	['player calls', 'footsteps'],
	['AI player', 'NPC'],
	['AI players', 'NPCs'],
	['practice server raids', 'aim train sessions'],
	['survival sessions', 'raid sessions'],
	['survival session', 'raid session'],
	['Survival Sessions', 'Raid Sessions'],
	['Survival Session', 'Raid Session'],
	['survival queues', 'server queues'],
	['survival queue', 'server queue'],
	['survival flow', 'raid flow'],
	['survival tips', 'raid tips'],
	['survival load ins', 'raid sessions'],
	['survival load in', 'raid session'],
	['survival-game', 'survival'],
	['survivalCombat', 'raidCombat'],
	['survivalIsland', 'raidMap'],
	['ESP markers for loot and bases in Rust', 'ESP markers for loot and bases in Rust'],
	['Gateway', 'Outpost'],
	['Outpost river zones', 'monument river zones'],
	['river banks', 'monument edges'],
	['river bank', 'monument edge'],
	['forest and river', 'forest and monument'],
	['forest zones', 'monument zones'],
	['forest ambushes', 'monument ambushes'],
	['long forest ambushes', 'long-range monument fights'],
	['high-traffic zones sprays', 'close-range sprays'],
	['spawn in', 'load in'],
	['spawning in', 'loading in'],
	['spawn with', 'load in with'],
	['spawn plans', 'raid plans'],
	['spawn rich', 'spawn with good loot'],
	['spawn rules', 'loot rules'],
	['unlock all species', 'unlock all items'],
	['EXT.activision', 'EXT.rust'],
	['${EXT.activision}', '${EXT.rust}'],
	['growthRunCombat', 'farmingRunCombat'],
	['growthRunMode', 'farmingRunMode'],
	['nestBuilder', 'baseBuilder'],
	['packFight', 'squadFight'],
	['ambushFight', 'raidFight'],
	['playerEsp', 'playerEsp'],
	['dinoEsp', 'playerEsp'],

	// Remaining Isle terms
	['Herbivore and carnivore', 'Solo farmers and raiders'],
	['herbivore and carnivore', 'solo farmers and raiders'],
	['carnivores, ambush builds, and bolt-action species', 'ARs, SMGs, and bolt-action rifles'],
	['carnivores, ambush builds', 'ARs and SMGs'],
	['carnivore, ambush', 'AR, SMG'],
	['carnivores, ambush', 'ARs, SMG'],
	['mid-tier carnivore', 'mid-tier AR'],
	['mid-tier carnivores', 'mid-tier ARs'],
	['carnivore', 'raider'],
	['carnivores', 'raiders'],
	['herbivore', 'solo farmer'],
	['herbivores', 'solo farmers'],
	['per species', 'per weapon'],
	['per-species', 'per-weapon'],
	['Per-species', 'Per-weapon'],
	['species balance', 'weapon balance'],
	['species profiles', 'weapon profiles'],
	['species comparison', 'weapon comparison'],
	['species choice', 'loadout choice'],
	['species unlocks', 'blueprint unlocks'],
	['a species', 'a weapon'],
	['the species', 'the weapon'],
	['main species', 'main loadout'],
	['demote a species', 'demote a weapon'],
	['Nest markers', 'Base markers'],
	['nest markers', 'base markers'],
	['Nest cues', 'Base cues'],
	['nest cues', 'base cues'],
	['Nest approaches', 'Base approaches'],
	['nest approaches', 'base approaches'],
	['nest timing', 'raid timing'],
	['nest safety', 'base safety'],
	['toward a nest', 'toward a base'],
	['which nest or map', 'which base or map'],
	['nest survival', 'base survival'],
	['Find Carcasses', 'Farm Loot'],
	['Actually Find Carcasses', 'Actually Farm Loot'],
	['apex spawn changes', 'heli spawn changes'],
	['grown player', 'geared player'],
	['grown players', 'geared players'],

	// Player tier list blog fixes
	['Rust player tier list for herbivore and carnivore raids', 'Rust weapon tier list for PvP and farming raids'],
	['player build comparison', 'weapon loadout comparison'],
	['Players for Survival', 'Weapons for Raids'],
	['What Wins Sessions', 'What Wins Raids'],
	['Sessions in 2026', 'Raids in 2026'],
	['for Sessions', 'for Raids'],
	['Sessions', 'Raids'],

	// Misc cleanup
	['an Rust', 'a Rust'],
	['what-is-an-rust-wallhack', 'what-is-a-rust-wallhack'],
	['Easy Anti-Cheat Anti-Cheat', 'Easy Anti-Cheat'],
	['Facepunch Studios service health', 'Rust server status'],
	['Facepunch Studios ships', 'Facepunch ships'],
	['Facepunch Studios (${EXT.rust})', 'Facepunch (${EXT.rust})'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-theisle.mjs', 'adapt-rust.mjs', 'fix-rust-content.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function main() {
	let changed = 0;
	for (const dir of TARGET_DIRS) {
		const base = path.join(ROOT, dir);
		const files = await walk(base);
		for (const file of files) {
			if (!TEXT_EXTENSIONS.has(path.extname(file))) continue;
			if (SKIP_FILES.has(path.basename(file))) continue;
			const original = await readFile(file, 'utf8');
			const updated = applyReplacements(original);
			if (updated !== original) {
				await writeFile(file, updated, 'utf8');
				changed++;
			}
		}
	}
	console.log(`Fixed ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
