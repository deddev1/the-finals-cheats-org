#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 * Uses English as the structural base and overlays nav/hero/trust/product UI from i18n-data.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_FILE = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const ES_FILE = path.join(ROOT, 'public', 'locales', 'es', 'translation.json');

function deepMerge(base, overlay) {
	const out = { ...base };
	for (const [key, value] of Object.entries(overlay)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			out[key] = deepMerge(base[key] ?? {}, value);
		} else if (value !== undefined) {
			out[key] = value;
		}
	}
	return out;
}

function uiOverlay(locale) {
	const ui = allUiStrings[locale];
	if (!ui) return {};
	return {
		nav: {
			...ui.nav,
			preview: ui.nav.hacks,
			store: ui.nav.pricing,
			status: ui.nav.updates,
			reviews: 'Reviews',
			primaryAria: 'Primary',
			mobileAria: 'Mobile',
			openMenu: 'Open menu',
			closeMenu: 'Close menu',
		},
		hero: {
			...ui.hero,
			title: 'Rust Cheats',
			priceFrom: 'from',
			imageAlt: '{{brand}} — Rust ESP and aimbot overlay',
			chipEsp: 'ESP / wallhack',
			chipAim: 'Soft aim',
			chipRadar: '2D radar',
			chipUpdates: ui.nav.updates,
		},
		cta: {
			buy: ui.hero.buyNow,
			buyShort: ui.nav.buyNow,
		},
		trust: ui.trust,
		product: {
			...ui.product,
			days30: '30 days',
			oneTime: 'One-time',
			plans: ui.nav.pricing,
			perMonth: '/ month',
			once: ' once',
			buyMonthly: ui.product.monthly,
			buyLifetime: ui.product.lifetime,
		},
		reviews: {
			...ui.reviews,
			eyebrow: ui.reviews.title,
			homeTitle: `${ui.product.title} reviews`,
			buyerReviews: '{{count}} buyer reviews',
			averageAria: '{{rating}} average from {{count}} buyer reviews',
			outOfFiveAria: '{{rating}} out of 5',
			readAll: 'Read all reviews →',
		},
		common: {
			...ui.common,
			selectLanguage: 'Select language',
			englishOfficial: 'English — official language',
			englishIsOfficial: 'English is the official language',
		},
		footer: ui.footer,
		images: ui.images,
	};
}

async function main() {
	const en = JSON.parse(await readFile(EN_FILE, 'utf8'));
	let es;
	try {
		es = JSON.parse(await readFile(ES_FILE, 'utf8'));
	} catch {
		es = en;
	}

	for (const locale of LOCALES) {
		const dir = path.join(ROOT, 'public', 'locales', locale);
		await mkdir(dir, { recursive: true });

		let translation = en;
		if (locale === 'es') {
			translation = es;
		} else if (locale !== 'en') {
			translation = deepMerge(en, uiOverlay(locale));
		}

		const out = path.join(dir, 'translation.json');
		await writeFile(out, `${JSON.stringify(translation, null, 2)}\n`, 'utf8');
		console.log('✓', out);
	}

	console.log(`Generated ${LOCALES.length} locale translation files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
