#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Embark Studios'"],
	['Activision\u2019', "Embark Studios'"],
	['Activision services', 'Embark Studios services'],
	['Activision service', 'Embark Studios service'],
	['Activision platform', 'Embark Studios platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Embark Studios bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'The Finals on Steam'],
	['Activision The Finals', 'The Finals'],
	['Activision Support', 'The Finals on Steam'],
	['Activision', 'Embark Studios'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'store.steampowered.com/app/376210/The_Isle'],
	['www.epicgames.com/rust', 'store.steampowered.com/app/376210/The_Isle'],
	['www.rust.com/official server', 'store.steampowered.com/app/376210/The_Isle'],
	['https://www.rust.com/', 'https://store.steampowered.com/app/2073850/THE_FINALS/'],
	['The Finals.com', 'The Finals'],
	['The Finals Competitive', 'The Finals'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
