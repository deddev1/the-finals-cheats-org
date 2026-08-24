#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'thefinals cheats', espWallhack: 'thefinals cheats wallhack', aimbotCombat: 'thefinals cheats aimbot', squadFight: 'thefinals cheats', playerEsp: 'thefinals cheats esp', headerArt: 'thefinals cheats aimbot', hacksPackage: 'thefinals cheats radar', matchFight: 'thefinals cheats aimbot', battleRoyale: 'thefinals cheats', matchMap: 'thefinals cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', matchFight: '[^']+', battleRoyale: '[^']+', matchMap: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'The Finals ESP player tags hack'", "imageAlt: 'thefinals cheats esp'"],
	["imageAlt: 'The Finals ESP radar hack'", "imageAlt: 'thefinals cheats radar'"],
	["imageAlt: 'The Finals Aimbot sniper kill'", "imageAlt: 'thefinals cheats aimbot'"],
	["imageAlt: 'The Finals Aimbot skeleton targeting'", "imageAlt: 'thefinals cheats aimbot'"],
	["imageAlt: 'thefinals cheats ADS combat'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats setup PC activation'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats FAQ ESP aimbot'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats support license help'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'Undetected thefinals cheats ESP wallhack'", "imageAlt: 'undetected thefinals cheats'"],
	["imageAlt: 'thefinals wallhack skeleton ESP'", "imageAlt: 'thefinals cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass rust ESP aimbot'", "imageAlt: 'thefinals cheats eac'"],
	["imageAlt: 'thefinals cheats 2026 ESP aimbot'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats combat aimbot'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheat download ESP aimbot'", "imageAlt: 'thefinals cheats download'"],
	["imageAlt: 'The Finals mod menu ESP aimbot'", "imageAlt: 'thefinals cheats mod menu'"],
	["imageAlt: 'The Finals soft aim aimbot settings'", "imageAlt: 'thefinals cheats soft aim'"],
	["imageAlt: 'Best thefinals cheats 2026 ESP'", "imageAlt: 'best thefinals cheats'"],
	["imageAlt: 'The Finals Aimbot hack combat'", "imageAlt: 'thefinals cheats aimbot'"],
	["imageAlt: 'The Finals ESP hack wallhack'", "imageAlt: 'thefinals cheats esp'"],
	["imageAlt: 'The Finals unlock all items ESP aimbot guide'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats privacy policy'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats refund policy'", "imageAlt: 'thefinals cheats'"],
	["imageAlt: 'thefinals cheats terms of use'", "imageAlt: 'thefinals cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `The Finals ${meta.altKeyword}`")
	.join("imageAlt: 'thefinals cheats'")
	.split("galleryTitle: `The Finals Hacks ${topicName}`")
	.join("galleryTitle: 'thefinals cheats'")
	.split("imageAlt: `thefinals cheats ${kind} policy`")
	.join("imageAlt: 'thefinals cheats'")
	.split("galleryTitle: `The Finals Hacks ${kind} resources`")
	.join("galleryTitle: 'thefinals cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
