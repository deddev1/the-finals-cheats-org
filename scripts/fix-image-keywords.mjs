#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'the finals cheats', espWallhack: 'the finals cheats wallhack', aimbotCombat: 'the finals cheats aimbot', squadFight: 'the finals cheats', playerEsp: 'the finals cheats esp', headerArt: 'the finals cheats aimbot', hacksPackage: 'the finals cheats radar', matchFight: 'the finals cheats aimbot', battleRoyale: 'the finals cheats', matchMap: 'the finals cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', matchFight: '[^']+', battleRoyale: '[^']+', matchMap: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'The Finals ESP player tags hack'", "imageAlt: 'the finals cheats esp'"],
	["imageAlt: 'The Finals ESP radar hack'", "imageAlt: 'the finals cheats radar'"],
	["imageAlt: 'The Finals Aimbot sniper kill'", "imageAlt: 'the finals cheats aimbot'"],
	["imageAlt: 'The Finals Aimbot skeleton targeting'", "imageAlt: 'the finals cheats aimbot'"],
	["imageAlt: 'the finals cheats ADS combat'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats setup PC activation'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats FAQ ESP aimbot'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats support license help'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'Undetected the finals cheats ESP wallhack'", "imageAlt: 'undetected the finals cheats'"],
	["imageAlt: 'the finals wallhack skeleton ESP'", "imageAlt: 'the finals cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass rust ESP aimbot'", "imageAlt: 'the finals cheats eac'"],
	["imageAlt: 'the finals cheats 2026 ESP aimbot'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats combat aimbot'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheat download ESP aimbot'", "imageAlt: 'the finals cheats download'"],
	["imageAlt: 'The Finals mod menu ESP aimbot'", "imageAlt: 'the finals cheats mod menu'"],
	["imageAlt: 'The Finals soft aim aimbot settings'", "imageAlt: 'the finals cheats soft aim'"],
	["imageAlt: 'Best the finals cheats 2026 ESP'", "imageAlt: 'best the finals cheats'"],
	["imageAlt: 'The Finals Aimbot hack combat'", "imageAlt: 'the finals cheats aimbot'"],
	["imageAlt: 'The Finals ESP hack wallhack'", "imageAlt: 'the finals cheats esp'"],
	["imageAlt: 'The Finals unlock all items ESP aimbot guide'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats privacy policy'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats refund policy'", "imageAlt: 'the finals cheats'"],
	["imageAlt: 'the finals cheats terms of use'", "imageAlt: 'the finals cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `The Finals ${meta.altKeyword}`")
	.join("imageAlt: 'the finals cheats'")
	.split("galleryTitle: `The Finals Hacks ${topicName}`")
	.join("galleryTitle: 'the finals cheats'")
	.split("imageAlt: `the finals cheats ${kind} policy`")
	.join("imageAlt: 'the finals cheats'")
	.split("galleryTitle: `The Finals Hacks ${kind} resources`")
	.join("galleryTitle: 'the finals cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
