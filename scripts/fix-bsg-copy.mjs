#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Facepunch Studios'"],
	['Activision\u2019', "Facepunch Studios'"],
	['Activision services', 'Facepunch Studios services'],
	['Activision service', 'Facepunch Studios service'],
	['Activision platform', 'Facepunch Studios platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Facepunch Studios bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Rust on Steam'],
	['Activision Rust', 'Rust'],
	['Activision Support', 'Rust on Steam'],
	['Activision', 'Facepunch Studios'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'store.steampowered.com/app/376210/The_Isle'],
	['www.epicgames.com/rust', 'store.steampowered.com/app/376210/The_Isle'],
	['www.rust.com/official server', 'store.steampowered.com/app/376210/The_Isle'],
	['https://www.rust.com/', 'https://store.steampowered.com/app/252490/Rust/'],
	['Rust.com', 'Rust'],
	['Rust Competitive', 'Rust'],
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
