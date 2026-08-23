#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { buildLocaleOverlay } from './i18n-data/locale-overlays.mjs';
import { FAQ_I18N } from './i18n-data/faq-i18n.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_FILE = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const ES_FILE = path.join(ROOT, 'public', 'locales', 'es', 'translation.json');

function deepMerge(base, overlay) {
	const out = structuredClone(base);
	for (const [key, value] of Object.entries(overlay)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			out[key] = deepMerge(out[key] ?? {}, value);
		} else if (value !== undefined) {
			out[key] = value;
		}
	}
	return out;
}

function flattenExternalResources(ext) {
	if (!ext) return {};
	const { title, lede, pillsTitle, pillsLabel, steam, patch, official, wiki, community, ...rest } = ext;
	return {
		title,
		lede,
		pillsTitle,
		pillsLabel,
		steam,
		patch,
		official,
		wiki,
		community,
		...rest,
	};
}

function buildFaqOverlay(locale, enFaq) {
	const map = FAQ_I18N[locale];
	if (!map) return {};
	return { items: map };
}

/** English FAQ seed for translation.json */
const EN_FAQ_ITEMS = {
	'what-are-rust-cheats': {
		q: 'What is Rust Cheats?',
		a: 'Rust Cheats is an undetected rust cheats package for Rust on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with Easy Anti-Cheat maintenance and setup support.',
	},
	'are-rust-cheats-undetected-in-2026': {
		q: 'Are rust cheats undetected in 2026?',
		a: 'Rust Cheats is maintained for Rust with rebuilds after Easy Anti-Cheat and game patches. Check the Status page before you raid. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	'solo-farmer-and-raider-sessions': {
		q: 'Does this work in base raids and PvP fights?',
		a: 'Yes. ESP, radar, and aimbot are built for Rust raid flow — reading players and NPCs, spotting loot, and staying aware near monuments and compounds.',
	},
	'esp-wallhack-radar-or-aimbot': {
		q: 'What is included — ESP, wallhack, radar, or Aimbot?',
		a: 'Rust Cheats bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
	},
	'how-are-licenses-delivered': {
		q: 'How are licenses delivered?',
		a: 'After payment is confirmed, Rust Cheats license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	'where-to-check-updates': {
		q: 'Where do I check updates after a Rust or Easy Anti-Cheat patch?',
		a: 'Maintenance notes are posted on the Status page when a Rust or Easy Anti-Cheat update affects the package. That is the fastest place to confirm whether a new Rust Cheats build is live.',
	},
	'how-to-contact-support': {
		q: 'How do I contact support?',
		a: 'Use the Support page or email support@rustcheats.co. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
	},
	'what-is-a-rust-wallhack': {
		q: 'What is a Rust wallhack?',
		a: 'A Rust wallhack is an ESP overlay that shows players, NPCs, and loot through walls. Rust Cheats includes distance readouts, raid cues, and toggleable categories.',
	},
	'does-rust-cheats-include-radar-hack': {
		q: 'Does Rust Cheats include a radar hack?',
		a: 'Yes. Rust Cheats includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and compound zones.',
	},
	'eac-anti-cheat-and-rust-cheats': {
		q: 'How does Easy Anti-Cheat affect rust cheats?',
		a: 'Easy Anti-Cheat monitors Rust on Windows PC. Rust Cheats posts maintenance notes after patches that may need a rebuild. Check Status before you raid.',
	},
	'buy-undetected-rust-cheats-windows-pc': {
		q: 'Can I buy undetected Rust cheats for Windows PC?',
		a: 'Yes — Rust Cheats sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
	},
};

FAQ_I18N.en = EN_FAQ_ITEMS;

async function main() {
	const en = JSON.parse(await readFile(EN_FILE, 'utf8'));
	en.faq = { items: EN_FAQ_ITEMS };
	en.media = {
		demoVideoTitle: 'Rust Cheats ESP, aimbot and radar demo',
		playVideo: 'Play video',
	};
	en.externalResources = {
		title: 'Official game guides & resources',
		lede: 'We link to trusted third-party sources so you can verify patch notes, player stats, and map info outside our site.',
		pillsTitle: 'Official guides',
		pillsLabel: 'Official Rust guides',
		steam: { label: 'Rust on Steam', note: 'Official store page, system requirements, and player reviews.' },
		patch: { label: 'Steam patch notes & news', note: 'Read official update posts before you change your loadout.' },
		official: { label: 'Official Rust website', note: 'Game overview from Facepunch Studios.' },
		wiki: { label: 'Rust Wiki (Fandom)', note: 'Player stats, maps, and survival mechanics.' },
		community: { label: 'Steam Community hub', note: 'Announcements and community discussions.' },
	};
	en.internalLinks = {
		relatedLede: 'Explore more Rust Cheats guides — the same topics covered on other cheat sites, mapped to our canonical pages.',
		topicsTitle: 'Product guides',
		topicsLabel: 'Product topic guides',
		topicsLede: 'Jump to the main Rust Cheats pages for ESP, aimbot, radar, setup, and status.',
		overview: 'Rust Cheats overview',
		esp: 'ESP & wallhack',
		aimbot: 'Aimbot & soft aim',
		radar: 'Radar hack',
		features: 'Full feature list',
		pricing: 'Store & pricing',
		setup: 'Setup guide',
		status: 'Live status',
		faq: 'FAQ',
		support: 'Support',
		blog: 'Blog',
		reviews: 'Buyer reviews',
		hacks: 'Rust cheats pillar',
		undetected: 'Undetected status',
	};

	let es;
	try {
		es = JSON.parse(await readFile(ES_FILE, 'utf8'));
		es.faq = { items: FAQ_I18N.es };
	} catch {
		es = en;
	}

	for (const locale of LOCALES) {
		const dir = path.join(ROOT, 'public', 'locales', locale);
		await mkdir(dir, { recursive: true });

		let translation = en;
		if (locale === 'es') {
			translation = deepMerge(en, es);
		} else if (locale !== 'en') {
			const ui = allUiStrings[locale];
			const overlay = buildLocaleOverlay(locale, ui);
			const faqOverlay = buildFaqOverlay(locale);
			translation = deepMerge(en, {
				...overlay,
				externalResources: flattenExternalResources(overlay.externalResources),
				faq: faqOverlay,
			});
		}

		const out = path.join(dir, 'translation.json');
		await writeFile(out, `${JSON.stringify(translation, null, 2)}\n`, 'utf8');
		console.log('✓', out);
	}

	// Refresh canonical EN with faq/media keys
	await writeFile(EN_FILE, `${JSON.stringify(en, null, 2)}\n`, 'utf8');
	console.log(`Generated ${LOCALES.length} locale translation files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
