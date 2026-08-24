#!/usr/bin/env node
/** Final pass: fix remaining The Finals references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['finalsImages', 'finalsImages'],
	["from '../data/finals'", "from '../data/finals'"],
	["from './finals'", "from './finals'"],
	['/undetected-finals-cheats/', '/undetected-finals-cheats/'],
	['/finals-wallhack/', '/finals-wallhack/'],
	['/finals-radar-hack/', '/finals-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/finals-cheats-2026/', '/finals-cheats-2026/'],
	['/finals-aimbot/', '/finals-aimbot/'],
	['/finals-esp/', '/finals-esp/'],
	['/finals-cheats/', '/finals-esp/'],
	['The Finals Hacks', 'The Finals Hacks'],
	['thefinals cheats', 'thefinals cheats'],
	['thefinals wallhack', 'The Finals wallhack'],
	['the finals radar', 'The Finals radar'],
	['The Finals Aimbot', 'The Finals Aimbot'],
	['The Finals ESP', 'The Finals ESP'],
	['The Finals', 'The Finals'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['thefinalscheats.org', 'thefinalscheats.org'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'raidFight'],
	['alMazrah', 'raidMap'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
