#!/usr/bin/env node
/** Final pass: fix remaining Rust references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['rustImages', 'rustImages'],
	["from '../data/rust'", "from '../data/rust'"],
	["from './rust'", "from './rust'"],
	['/undetected-rust-cheats/', '/undetected-rust-cheats/'],
	['/rust-wallhack/', '/rust-wallhack/'],
	['/rust-radar-hack/', '/rust-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/rust-cheats-2026/', '/rust-cheats-2026/'],
	['/rust-aimbot/', '/rust-aimbot/'],
	['/rust-esp/', '/rust-esp/'],
	['/rust-cheats/', '/rust-esp/'],
	['Rust Hacks', 'Rust Hacks'],
	['rust cheats', 'rust cheats'],
	['rust wallhack', 'Rust wallhack'],
	['rust radar', 'Rust radar'],
	['Rust Aimbot', 'Rust Aimbot'],
	['Rust ESP', 'Rust ESP'],
	['Rust', 'Rust'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['rustcheats.co', 'rustcheats.co'],
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
