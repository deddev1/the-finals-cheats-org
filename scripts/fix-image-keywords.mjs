#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'rust cheats', espWallhack: 'rust cheats wallhack', aimbotCombat: 'rust cheats aimbot', squadFight: 'rust cheats', playerEsp: 'rust cheats esp', headerArt: 'rust cheats aimbot', hacksPackage: 'rust cheats radar', raidFight: 'rust cheats aimbot', battleRoyale: 'rust cheats', raidMap: 'rust cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', raidFight: '[^']+', battleRoyale: '[^']+', raidMap: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Rust ESP player tags hack'", "imageAlt: 'rust cheats esp'"],
	["imageAlt: 'Rust ESP radar hack'", "imageAlt: 'rust cheats radar'"],
	["imageAlt: 'Rust Aimbot sniper kill'", "imageAlt: 'rust cheats aimbot'"],
	["imageAlt: 'Rust Aimbot skeleton targeting'", "imageAlt: 'rust cheats aimbot'"],
	["imageAlt: 'rust cheats ADS combat'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats setup PC activation'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats FAQ ESP aimbot'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats support license help'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'Undetected rust cheats ESP wallhack'", "imageAlt: 'undetected rust cheats'"],
	["imageAlt: 'rust wallhack skeleton ESP'", "imageAlt: 'rust cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass rust ESP aimbot'", "imageAlt: 'rust cheats eac'"],
	["imageAlt: 'rust cheats 2026 ESP aimbot'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats combat aimbot'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheat download ESP aimbot'", "imageAlt: 'rust cheats download'"],
	["imageAlt: 'Rust mod menu ESP aimbot'", "imageAlt: 'rust cheats mod menu'"],
	["imageAlt: 'Rust soft aim aimbot settings'", "imageAlt: 'rust cheats soft aim'"],
	["imageAlt: 'Best rust cheats 2026 ESP'", "imageAlt: 'best rust cheats'"],
	["imageAlt: 'Rust Aimbot hack combat'", "imageAlt: 'rust cheats aimbot'"],
	["imageAlt: 'Rust ESP hack wallhack'", "imageAlt: 'rust cheats esp'"],
	["imageAlt: 'Rust unlock all items ESP aimbot guide'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats privacy policy'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats refund policy'", "imageAlt: 'rust cheats'"],
	["imageAlt: 'rust cheats terms of use'", "imageAlt: 'rust cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Rust ${meta.altKeyword}`")
	.join("imageAlt: 'rust cheats'")
	.split("galleryTitle: `Rust Hacks ${topicName}`")
	.join("galleryTitle: 'rust cheats'")
	.split("imageAlt: `rust cheats ${kind} policy`")
	.join("imageAlt: 'rust cheats'")
	.split("galleryTitle: `Rust Hacks ${kind} resources`")
	.join("galleryTitle: 'rust cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
