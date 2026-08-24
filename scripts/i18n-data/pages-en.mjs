import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'thefinals Cheats 2026 | ESP, Aimbot & Wallhack',
		description:
			'Buy undetected thefinals cheats at thefinalscheats.org — ESP, aimbot, wallhack & 2D radar for Windows PC. Easy Anti-Cheat updates after patches. Plans from $35/month.',
		h1: 'Thefinals cheats',
		intro:
			'The Final Cheats is the undetected The Finals cheat package for Windows PC — ESP wallhack, 2D radar, and soft aim with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: 'The Finals characters in front of a glowing red neon logo — The Final Cheats hero',
		galleryTitle: 'The Final Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose thefinals cheats in 2026',
				'The Finals rewards map awareness. The Final Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on match, farming run, and official servers.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.finals} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/finals-cheats/">The Final Cheats pillar</a>, <a href="/finals-esp/">ESP guide</a>, <a href="/finals-aimbot/">Aimbot controls</a>, and <a href="/finals-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, The Final Cheats bundles player ESP wallhack, vault markers, 2D radar overlays, and Aimbot profiles in one undetected package built for cashout rounds and arena PvP fights — covering both “thefinals cheats” and “thefinals cheats” search intent.',
				'Browse the <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/finals-esp/">wallhack</a>, and <a href="/finals-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for The Finals server status, then confirm our maintenance notes so you are not loading in on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'finals-esp': {
		title: 'The Finals ESP 2026 | Wallhack & Player Boxes | The Final Cheats',
		description:
			'The Finals ESP wallhack with player boxes, vault markers and distance tags on Windows PC. Undetected thefinals cheats from The Final Cheats — aimbot and radar included. Buy at thefinalscheats.org.',
		h1: 'The Finals ESP — Player Boxes & Wallhack',
		intro:
			'The Finals ESP visibility tools for match and farming run. Read enemy squads, players, NPCs, loot, and distance before you commit — toggleable The Finals ESP wallhack overlays bundled in our The Final Cheats package.',
		imageAlt: "The Finals ESP player boxes and distance readouts in a match",
		galleryTitle: 'The Finals ESP overlay visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'the finals wallhack guide',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'What The Finals ESP solves in matches',
				'The Finals maps punish incomplete information. The Final Cheats ESP wallhack helps you spot enemy squads early, spot players and NPCs before they push your angle, and mark high-value cashout worth the detour.',
				'On match, farming run, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.',
				`The Finals’s live seasons and map updates are published by Facepunch (${EXT.finals}). When POIs or match rules shift, ESP categories stay useful because they track players and loot — not a single static landmark.`,
			),
			section(
				'Player, apex, and vault ESP wallhack categories',
				'Toggle enemy player outlines, heli markers, match cues, and loot pins so only match-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports cashout rounds and arena PvP fights lobbies alike.',
				'Compare category detail on the <a href="/finals-esp/">wallhack page</a> and pair visibility with the <a href="/finals-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and vault markers for faster rotations',
					'Heli and base awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'The Final Cheats ESP wallhack is maintained for The Finals with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first match.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the arena fight. Review <a href="/finals-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/finals-cheats/">The Final Cheats pillar</a> and <a href="/finals-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'finals-aimbot': {
		title: 'The Finals Aimbot 2026 | Soft Aim Settings | The Final Cheats',
		description:
			'The Finals aimbot and soft aim with FOV, bone priority and hotkeys on Windows PC. Part of undetected The Final Cheats with ESP wallhack and radar. Plans from $35 at thefinalscheats.org.',
		h1: 'The Finals Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for The Finals arena fights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "The Finals Aimbot and soft aim controls on Windows PC",
		galleryTitle: 'The Finals Aimbot combat previews',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'Aimbot tuned for The Finals combat pace',
				'The Finals mixes long-range mid-size arena fights with close-quarters ambush rushes. The Final Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range squad fights.',
				`Weapon balance and season rules change via ${EXT.finals}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and long-range rifles. Switch between long-range ambush arena fights and high-traffic zone clears without reopening menus every match.',
				'Prefer softer tracking? Read the <a href="/finals-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/finals-esp/">ESP wallhack</a> and <a href="/finals-radar-hack/">2D radar</a> in the same The Final Cheats license.',
				[
					'Smoothness, FOV, and aim smoothing sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / long-range',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'The Final Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major The Finals patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> before loading in on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'The Finals Features 2026 | ESP, Aimbot & Radar | The Final Cheats',
		description:
			'Full thefinals cheats feature list at The Final Cheats — ESP wallhack, soft aim, 2D radar and mod menu toggles for Windows PC. Easy Anti-Cheat maintenance included. Compare at thefinalscheats.org.',
		h1: 'The Final Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in The Final Cheats for The Finals on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "The Final Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'The Final Cheats feature gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, apex and base awareness cues, loot and resources markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.',
				'Team and enemy colour coding supports cashout rounds and arena PvP fights. Deep-dive the <a href="/finals-esp/">ESP page</a> and <a href="/finals-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.finals} patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-session bases, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live The Finals matches. See <a href="/finals-radar-hack/">radar</a> and <a href="/finals-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/finals-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@thefinalscheats.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/finals-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'The Final Cheats Pricing 2026 | $35/mo or $150 Lifetime',
		description:
			'Buy thefinals cheats at thefinalscheats.org — $35 monthly or $150 lifetime for undetected ESP, aimbot and radar on Windows PC. Same features on both plans. Instant delivery after checkout.',
		h1: 'The Final Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected The Final Cheats — ESP wallhack, radar hack, and Aimbot for The Finals on Windows PC. Instant digital delivery after payment.',
		imageAlt: "The Final Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'The Final Cheats package visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime The Final Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected The Final Cheats package — ideal if you play The Finals regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, vault markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major The Finals patches.',
				`Season calendars and client updates come from ${EXT.finals}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/finals-cheats/">thefinals cheats</a>, <a href="/finals-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'The Final Cheats Setup 2026 | Windows PC Install Guide',
		description:
			'Install The Final Cheats on Windows PC after checkout — activate ESP, soft aim and radar step by step. Setup guide at thefinalscheats.org. Check Easy Anti-Cheat status before your first match.',
		h1: 'The Final Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure The Final Cheats for The Finals on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before loading in.',
		imageAlt: "The Final Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'The Final Cheats setup visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install The Final Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching The Finals.',
				`Also glance at ${EXT.status} if Embark Studios services look unstable on patch day — a platform outage is not a license fault.`,
				'The Final Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, NPCs, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, and <a href="/finals-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/finals-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After The Finals or Easy Anti-Cheat patches',
				'When Facepunch ships a major The Finals update or Easy Anti-Cheat patch, revisit Updates before loading in. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/finals-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'The Finals Status 2026 | Undetected Easy Anti-Cheat Updates | The Final Cheats',
		description:
			'Live The Final Cheats status after The Finals or Easy Anti-Cheat patches. Check undetected ESP, aimbot and radar rebuilds on Windows PC before you queue. Updated at thefinalscheats.org.',
		h1: 'The Final Cheats Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and The Finals patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before loading in after major updates.',
		imageAlt: "The Final Cheats live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'The Finals patch and maintenance visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/finals-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'The Finals and Easy Anti-Cheat receive frequent patches. The Final Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Embark Studios platform health and this page for The Final Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on match and farming run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/finals-cheats/">undetected thefinals cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.finals}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'The Final Cheats FAQ 2026 | ESP, Aimbot & Easy Anti-Cheat Answers',
		description:
			'The Final Cheats FAQ — delivery, setup, undetected status, Easy Anti-Cheat updates, pricing and refunds for thefinals cheats on Windows PC. Clear answers at thefinalscheats.org before you buy.',
		h1: 'The Final Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected The Final Cheats — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and The Finals compatibility on Windows PC.',
		imageAlt: "The Final Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'The Final Cheats FAQ visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is The Final Cheats?',
				'The Final Cheats is an undetected cheat package for The Finals on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover match and farming run. Explore <a href="/features/">Features</a> for the full control list and <a href="/finals-esp/">ESP</a> / <a href="/finals-aimbot/">Aimbot</a> for module detail.',
				`The Finals itself is published by Facepunch (${EXT.finals}). Cheats are third-player tools and may violate Embark Studios' rules — use is at your own risk.`,
			),
			section(
				'Are The Final Cheats undetected in 2026?',
				'The Final Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/finals-cheats/">undetected thefinals cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before loading in are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@thefinalscheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'The Final Cheats Support 2026 | License & Setup Help',
		description:
			'The Final Cheats support for license delivery, ESP setup and billing on Windows PC. Email support@thefinalscheats.org with your order ID. Visit thefinalscheats.org/support for FAQs and guides.',
		h1: 'The Final Cheats Support — Contact Us',
		intro:
			'Get help with The Final Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for The Finals on Windows PC.',
		imageAlt: "The Final Cheats support page for license and setup help",
		galleryTitle: 'The Final Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. The Final Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Embark Studios bans.',
				`Account and game policy questions belong with Embark Studios. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@thefinalscheats.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected The Final Cheats 2026 | EAC Safe | The Final Cheats',
		description:
			'Undetected thefinals cheats with Easy Anti-Cheat maintenance for ESP, soft aim and radar on Windows PC. Check live status at The Final Cheats before every match. Buy at thefinalscheats.org from $35.',
		h1: 'Undetected The Final Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How The Final Cheats stays maintained for The Finals after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "The Final Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected The Final Cheats visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for The Final Cheats',
				'Undetected The Final Cheats means the package is actively maintained against Easy Anti-Cheat and major The Finals patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; The Finals client updates ship through ${EXT.finals}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or The Finals updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass The Finals guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/finals-cheats/">thefinals cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'The Finals Wallhack 2026 | ESP Boxes & Loot | The Final Cheats',
		description:
			'The Finals wallhack ESP — player boxes, vault markers and skeleton overlays on Windows PC. Undetected thefinals cheats from The Final Cheats with EAC patch rebuilds. Get access at thefinalscheats.org.',
		h1: 'The Finals Wallhack — ESP Boxes & Visibility',
		intro:
			'The Finals wallhack ESP for The Finals — see players, loot, enemy players, and resource nodes through toggleable wallhack overlays built for cashout rounds and arena PvP fights.',
		imageAlt: "the finals wallhack visibility through walls in a match",
		galleryTitle: 'the finals wallhack ESP gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'The Finals ESP page',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'An The Finals wallhack focuses on information — player outlines, loot pins, threat cues — rather than automatic aiming. The Final Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and cashout zones.',
				'For the broader ESP keyword page see <a href="/finals-esp/">The Finals ESP</a>; for combat assist see <a href="/finals-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support match, farming run, and official servers with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.finals}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/finals-radar-hack/">radar hack</a> cues for flanks during forest and monument edge ambushes.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/finals-cheats/">undetected thefinals cheats</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/finals-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'The Finals Radar Hack 2026 | 2D Threat Map | The Final Cheats',
		description:
			'The Finals 2D radar hack for flank awareness on Windows PC. Bundled with ESP wallhack and soft aim in one The Final Cheats license. Undetected with Easy Anti-Cheat maintenance at thefinalscheats.org.',
		h1: 'The Finals Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for The Finals — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "The Finals 2D radar overlay showing nearby threats",
		galleryTitle: 'the finals radar hack visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'Why radar hack matters in The Finals',
				'survival arena fights happen across open terrain — hills, forests, and monument edges. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.',
				'The Final Cheats radar complements <a href="/finals-esp/">ESP wallhack</a> markers during squad pushes and compound zone fights.',
				`Mode rules and seasonal changes come from ${EXT.finals}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight cashout zones. Directional cues highlight flanks during building clears and flank pushes across match and farming run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/finals-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/finals-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full The Final Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major The Finals patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/finals-cheats/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'The Finals EAC Bypass 2026 | Easy Anti-Cheat | The Final Cheats',
		description:
			'How The Final Cheats rebuilds ESP, aimbot and radar after Easy Anti-Cheat patches on Windows PC. EAC bypass maintenance — check status before loading in at thefinalscheats.org.',
		h1: 'Easy Anti-Cheat Bypass — The Final Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for The Final Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after The Finals security updates.',
		imageAlt: "The Final Cheats maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Embark Studios' anti-cheat for The Finals on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`The Final Cheats monitors Easy Anti-Cheat patch notes and The Finals seasonal updates from ${EXT.finals} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm The Finals server status on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid loading in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/finals-cheats/">undetected thefinals cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every match.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'The Final Cheats 2026 | Undetected Hacks for Windows PC',
		description:
			'Best thefinals cheats 2026 — undetected ESP wallhack, soft aim and 2D radar for Windows PC. Easy Anti-Cheat maintenance and instant delivery from The Final Cheats at thefinalscheats.org.',
		h1: 'The Final Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 The Final Cheats package for The Finals — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "The Final Cheats product overview for The Finals",
		galleryTitle: 'The Final Cheats 2026 gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why thefinals cheats buyers choose The Final Cheats in 2026',
				'2026 updates bring new maps, player balance changes, and Easy Anti-Cheat patches. The Final Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.finals}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover match and farming run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, vault markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/finals-cheats/">The Final Cheats pillar</a>, <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/finals-esp/">wallhack</a>, <a href="/finals-radar-hack/">radar</a>, <a href="/finals-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/finals-cheats/">thefinals cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/finals-cheats/">thefinals cheats</a> checklist, <a href="/blog/finals-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@thefinalscheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'The Finals Hacks Guide 2026 | ESP, Aimbot & Wallhack | The Final Cheats',
		description:
			'Full thefinals cheats guide from The Final Cheats — undetected ESP wallhack, soft aim, 2D radar and Easy Anti-Cheat rebuilds on Windows PC. Compare features and buy at thefinalscheats.org from $35.',
		h1: 'The Final Cheats — What You Get & How It Works',
		intro:
			'The Finals cheats give you extra information and combat tools on top of the base game: player ESP, vault markers, 2D radar, and configurable soft aim in one Windows PC license. This page explains what thefinals cheats are, what The Final Cheats includes, and how maintenance works after Easy Anti-Cheat patches.',
		imageAlt: 'The Final Cheats overview — ESP, aimbot, and radar for The Finals',
		galleryTitle: 'The Finals cheats feature gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What are thefinals cheats?',
				'The Finals is an information-heavy survival game. The Finals cheats are third-party tools that add overlays and assist features — typically ESP to see players and loot through walls, radar for off-screen threats, and soft aim to smooth combat under pressure.',
				'The Final Cheats bundles those tools in one maintained package instead of juggling separate downloads. One license covers match sessions, farming runs, and official servers on Windows 10 and 11.',
				`Game updates publish on ${EXT.finals}. Our rebuild notes live on the <a href="/updates/">Updates page</a> so you know when to load in after a patch.`,
			),
			section(
				'What The Final Cheats includes',
				'Player ESP wallhack outlines enemies and NPCs with distance readouts. Loot ESP highlights crates, corpses, and high-value resources. A 2D radar shows threats outside your view. Soft aim profiles let you tune FOV and smoothness per weapon.',
				'Monthly ($35) and lifetime ($150) plans include the same feature stack — compare options on <a href="/pricing/">Pricing</a>.',
				'Deep dives: <a href="/finals-esp/">The Finals ESP</a>, <a href="/finals-aimbot/">The Finals Aimbot</a>, <a href="/finals-radar-hack/">radar hack</a>, and the full <a href="/features/">Features</a> list.',
			),
			section(
				'Undetected status and Easy Anti-Cheat',
				'The Finals runs on Easy Anti-Cheat. No cheat can promise permanent undetected status — what matters is maintenance after patches. The Final Cheats rebuilds ESP, radar, and aim modules when Easy Anti-Cheat or The Finals updates ship.',
				'Check the <a href="/updates/">Status page</a> before patch-day load ins. Read the <a href="/undetected-finals-cheats/">undetected thefinals cheats guide</a> and <a href="/eac-bypass/">Easy Anti-Cheat maintenance notes</a> for the full workflow.',
				'Official background: <a href="https://www.easy.ac/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>. Questions before checkout: <a href="/faq/">FAQ</a> and <a href="/support/">Support</a>.',
			),
			section(
				'Getting started',
				'After checkout, follow the <a href="/setup/">Setup guide</a> to activate your license and load default ESP and aim profiles. Keep your order ID ready for support at support@thefinalscheats.org.',
				'New buyers should also read the <a href="/blog/finals-cheats-complete-guide-2026/">2026 complete guide</a> and <a href="/blog/finals-cheats-buyers-guide/">buyers guide</a> before comparing shops.',
				'Ready to buy? Open <a href="/pricing/">Pricing</a> or return to the <a href="/">homepage</a> for the latest status summary.',
			),
		],
	},
	'cheat-download': {
		title: 'The Finals Cheat Download 2026 | Instant Access | The Final Cheats',
		description:
			'The Finals cheat download with instant license delivery — ESP, soft aim and radar for Windows PC. Buy The Final Cheats, activate and match. Secure checkout at thefinalscheats.org from $35.',
		h1: 'The Finals Hack Download — Instant License Delivery',
		intro:
			'How thefinals cheat download works for The Finals — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "The Final Cheats download and install delivery flow",
		galleryTitle: 'thefinals cheat download visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How thefinals cheat download delivery works',
				'After checkout confirms payment, The Final Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Embark Studios services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every thefinals cheat download includes player ESP wallhack, loot and vault markers, 2D radar overlays, Aimbot profiles, and in-client toggles for cashout rounds and arena PvP fights.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When The Finals or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/finals-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'The Finals Mod Menu 2026 | ESP & Aimbot Toggles | The Final Cheats',
		description:
			'The Finals mod menu for in-match ESP, soft aim and radar toggles on Windows PC. Undetected The Final Cheats with hotkeys and EAC maintenance. Get access at thefinalscheats.org from $35/month.',
		h1: 'The Finals Mod Menu — In-Client Control Panel',
		intro:
			'The Finals mod menu controls for The Finals — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your The Finals match on Windows PC.',
		imageAlt: "The Final Cheats in-game menu controls",
		galleryTitle: 'The Finals mod menu gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a The Finals mod menu controls',
				'A The Finals mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. The Final Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, vault markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of The Finals.',
				'Control deep-dives: <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/finals-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for cashout rounds and arena PvP fights',
				'Separate ESP wallhack categories for players, loot, resource nodes, and enemy players let you reduce overlay noise during rotations and cashout zones.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.finals} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/finals-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'The Finals mod menu behavior is rebuilt when Easy Anti-Cheat or major The Finals updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before loading in on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'The Finals Soft Aim 2026 | Natural Aimbot Settings | The Final Cheats',
		description:
			'The Finals soft aim settings for natural tracking on Windows PC — smoothness, FOV and bone priority. Included in undetected The Final Cheats with ESP and radar at thefinalscheats.org.',
		h1: 'The Finals Soft Aim — Smooth Aimbot Controls',
		intro:
			'The Finals soft aim settings for The Finals — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "The Finals soft aim FOV and smoothness settings",
		galleryTitle: 'The Finals soft aim gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/finals-aimbot/',
		sections: [
			section(
				'What The Finals soft aim means',
				'The Finals soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. The Final Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR arena fights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/finals-aimbot/">The Finals Aimbot</a>. Alternate wording: <a href="/finals-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon',
				'Save separate soft aim profiles for ARs, SMGs, and long-range rifles. Switch between long-range ambush arena fights and close squad fights with hotkeys mid-session.',
				`Weapon TTKs shift with ${EXT.finals} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/finals-esp/">ESP wallhack</a> and <a href="/finals-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Easy Anti-Cheat maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before loading in — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best The Final Cheats 2026 | Compare & Buy | The Final Cheats',
		description:
			'Best thefinals cheats for 2026 — undetected ESP, soft aim and Easy Anti-Cheat maintenance on Windows PC. Use this The Final Cheats buyer checklist before checkout at thefinalscheats.org from $35.',
		h1: 'Best The Final Cheats — 2026 Buyer Guide',
		intro:
			'Compare thefinals cheats for The Finals in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "The Final Cheats overview for The Finals on PC",
		galleryTitle: 'Best thefinals cheats gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes thefinals cheats in 2026',
				'The thefinals cheats combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'The Final Cheats covers match and farming run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best thefinals cheats feature checklist',
				'Look for player ESP wallhack, vault markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after The Finals patches.',
				'Review <a href="/features/">Features</a>, <a href="/finals-cheats/">undetected status</a>, and <a href="/finals-cheats/">thefinals cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/finals-cheats/">hacks</a>.',
			),
			section(
				'Buying thefinals cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first load in — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Embark Studios terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'The Finals Aimbot Hack 2026 | Soft Aim Assist | The Final Cheats',
		description:
			'The Finals aimbot hack with soft aim, FOV and bone priority on Windows PC. Bundled with ESP wallhack and radar in The Final Cheats. Undetected with EAC updates at thefinalscheats.org.',
		h1: 'The Finals Aimbot Hack — Soft Aim Assist',
		intro:
			'The Finals Aimbot hack tools for The Finals — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "The Finals Aimbot hack controls and bone priority",
		galleryTitle: 'The Finals Aimbot hack gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/finals-aimbot/',
		sections: [
			section(
				'The Finals Aimbot hack vs visibility tools',
				'A The Finals Aimbot hack focuses on assisted targeting during arena fights — while ESP wallhack and radar handle map awareness. The Final Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and aim smoothing controls tune assist for The Finals combat pace across cashout rounds and arena PvP fights.',
				'Prefer softer tracking language? See <a href="/finals-aimbot/">soft aim</a>. Full settings: <a href="/finals-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session bases.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.finals} can change ideal FOV — retune after major weapon balance updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before loading in after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/finals-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'The Finals ESP Hack 2026 | Player & Loot Boxes | The Final Cheats',
		description:
			'The Finals ESP hack with player boxes and vault markers on Windows PC. Undetected thefinals cheats from The Final Cheats — wallhack, radar and aimbot included. Buy at thefinalscheats.org from $35.',
		h1: 'The Finals ESP Hack — Player Boxes Guide',
		intro:
			'The Finals ESP hack overlays for The Finals — player outlines, threat cues, loot and resources markers with distance readouts across match and farming run.',
		imageAlt: "The Finals ESP hack boxes and vault markers",
		galleryTitle: 'The Finals ESP hack gallery',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'What a The Finals ESP hack shows',
				'A The Finals ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-player scenarios.',
				'Canonical visibility guide: <a href="/finals-esp/">The Finals ESP</a>. Wallhack wording: <a href="/finals-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for matches',
				'Toggle player ESP hack, vault markers, chest pins, and vehicle cues independently so only match-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports cashout rounds and arena PvP fights.',
				`POI and loot changes publish through ${EXT.finals} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and The Finals patches. Check the <a href="/updates/">Updates page</a> before loading in — pair ESP hack awareness with <a href="/finals-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/finals-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'The Finals Unlock All 2026 | What It Means | The Final Cheats',
		description:
			'The Finals unlock-all explained vs real thefinals cheats — ESP wallhack, soft aim and radar for Windows PC. Know what The Final Cheats actually provides before buying at thefinalscheats.org.',
		h1: 'The Finals Unlock All — What Players Search For',
		intro:
			'The Finals unlock-all is a common search term for The Finals — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools The Final Cheats actually provides on Windows PC.',
		imageAlt: "The Final Cheats license features overview",
		galleryTitle: 'The Finals unlock-all guide visuals',
		ctaPrimary: 'Buy The Final Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What The Finals unlock-all usually means',
				'The Finals unlock-all searches often refer to instant access to players, skins, or armor tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'The Final Cheats focuses on in-match awareness — player ESP, vault markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and patch cycle progression items are sold through ${EXT.finals}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, enemy players, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and vault markers speed map rotations — see the <a href="/finals-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/finals-cheats/">thefinals cheats</a> and <a href="/finals-cheats/">thefinals cheats</a>.',
			),
			section(
				'Buying The Final Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for The Finals on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | The Final Cheats — thefinalscheats.org',
		description:
			'Privacy policy for The Final Cheats at thefinalscheats.org. How we handle support emails, order data and secure checkout for thefinals cheats licenses on Windows PC.',
		h1: 'Privacy Policy',
		intro: 'How The Final Cheats handles information when you browse thefinalscheats.org or contact support about a The Finals license.',
		imageAlt: "The Final Cheats privacy policy page",
		galleryTitle: 'The Final Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual The Final Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@thefinalscheats.org with your request details.',
				'Policy updates publish on this page. Continued use of thefinalscheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | The Final Cheats — thefinalscheats.org',
		description:
			'Refund policy for The Final Cheats digital licenses at thefinalscheats.org. Eligibility, delivery terms and how to request a refund for ESP, aimbot and radar packages.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for The Final Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for The Finals.',
		imageAlt: "The Final Cheats refund policy page",
		galleryTitle: 'The Final Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'The Final Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@thefinalscheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use | The Final Cheats — thefinalscheats.org',
		description:
			'Terms of use for thefinalscheats.org and The Final Cheats licenses. Usage rules, Easy Anti-Cheat risk disclaimer and liability for Windows PC thefinals cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of thefinalscheats.org and The Final Cheats licenses for The Finals on Windows PC.',
		imageAlt: "The Final Cheats terms of use page",
		galleryTitle: 'The Final Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using The Final Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for The Finals on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in The Finals may violate Embark Studios terms and result in account penalties. The Final Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/finals-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@thefinalscheats.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
