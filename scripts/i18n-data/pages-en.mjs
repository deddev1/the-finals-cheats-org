import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Rust Cheats | Undetected Aimbot, ESP & Wallhack 2026',
		description:
			'Rust hacks for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Rust Cheats is the undetected Rust Cheats package for Windows PC — built for Rust on Windows PC. Rust ESP wallhack, 2D radar, and Rust Aimbot with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "Rust Cheats homepage hero — ESP and aimbot for Rust",
		galleryTitle: 'Rust Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose rust cheats in 2026',
				'Rust rewards map awareness. Rust Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, farming run, and official servers.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.rust} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/rust-cheats/">Rust Cheats pillar</a>, <a href="/rust-esp/">ESP guide</a>, <a href="/rust-aimbot/">Aimbot controls</a>, and <a href="/rust-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Rust Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for base raids and PvP fights — covering both “rust cheats” and “rust cheats” search intent.',
				'Browse the <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-esp/">wallhack</a>, and <a href="/rust-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Rust server status, then confirm our maintenance notes so you are not loading in on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'rust-esp': {
		title: 'Rust ESP 2026 | Player Boxes & Wallhack',
		description:
			'Rust ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected rust cheats for Rust.',
		h1: 'Rust ESP — Player Boxes & Wallhack',
		intro:
			'Rust ESP visibility tools for raid and farming run. Read enemy squads, players, NPCs, loot, and distance before you commit — toggleable Rust ESP wallhack overlays bundled in our Rust Cheats package.',
		imageAlt: "Rust ESP player boxes and distance readouts in a raid",
		galleryTitle: 'Rust ESP overlay visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'rust wallhack guide',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'What Rust ESP solves in raids',
				'Rust maps punish incomplete information. Rust Cheats ESP wallhack helps you spot enemy squads early, spot players and NPCs before they push your angle, and mark high-value loot worth the detour.',
				'On raid, farming run, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Rust’s live seasons and map updates are published by Facepunch (${EXT.rust}). When POIs or loot rules shift, ESP categories stay useful because they track players and loot — not a single static landmark.`,
			),
			section(
				'Player, apex, and loot ESP wallhack categories',
				'Toggle enemy player outlines, heli markers, raid cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports base raids and PvP fights lobbies alike.',
				'Compare category detail on the <a href="/rust-esp/">wallhack page</a> and pair visibility with the <a href="/rust-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and loot markers for faster rotations',
					'Heli and base awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'Rust Cheats ESP wallhack is maintained for Rust with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you raid — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/rust-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/rust-cheats/">Rust Cheats pillar</a> and <a href="/rust-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'rust-aimbot': {
		title: 'Rust Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Rust Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Rust Cheats package.',
		h1: 'Rust Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Rust firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Rust Aimbot combat previews',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Aimbot tuned for Rust combat pace',
				'Rust mixes bolt-action mid-size firefights with close-quarters ambush rushes. Rust Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range squad fights.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-action rifles. Switch between bolt-action ambush firefights and high-traffic zone clears without reopening menus every raid.',
				'Prefer softer tracking? Read the <a href="/rust-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/rust-esp/">ESP wallhack</a> and <a href="/rust-radar-hack/">2D radar</a> in the same Rust Cheats license.',
				[
					'Smoothness, FOV, and aim smoothing sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'Rust Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Rust patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
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
		title: 'Rust Cheats Features | ESP, Soft Aim & RadarRadar',
		description:
			'Full rust cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Rust Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in Rust Cheats for Rust on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Rust Cheats feature gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, apex and base awareness cues, loot and resources markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports base raids and PvP fights. Deep-dive the <a href="/rust-esp/">ESP page</a> and <a href="/rust-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.rust} patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-session bases, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Rust raids. See <a href="/rust-radar-hack/">radar</a> and <a href="/rust-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/rust-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you raid. Setup and billing help lives on <a href="/support/">Support</a> and support@rustcheats.co.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/rust-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Rust Cheats Pricing | $35/mo or $150 Life',
		description:
			'rust cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Rust Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Rust Cheats — ESP wallhack, radar hack, and Aimbot for Rust on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Rust Cheats package visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Rust Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Rust Cheats package — ideal if you play Rust regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Rust patches.',
				`Season calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/rust-cheats/">rust cheats</a>, <a href="/rust-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Rust Cheats Setup | Windows PC Guide',
		description:
			'Set up rust cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first load in.',
		h1: 'Rust Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Rust Cheats for Rust on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before loading in.',
		imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Rust Cheats setup visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Rust Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Rust.',
				`Also glance at ${EXT.status} if Facepunch Studios services look unstable on patch day — a platform outage is not a license fault.`,
				'Rust Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, NPCs, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, and <a href="/rust-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/rust-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Rust or Easy Anti-Cheat patches',
				'When Facepunch ships a major Rust update or Easy Anti-Cheat patch, revisit Updates before loading in. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/rust-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Rust Cheats Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'rust cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before loading in after patches.',
		h1: 'Rust Cheats Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and Rust patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before loading in after major updates.',
		imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'Rust patch and maintenance visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/rust-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Rust and Easy Anti-Cheat receive frequent patches. Rust Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Facepunch Studios platform health and this page for Rust Cheats build status — both matter on big update days.`,
				'Checking this log before you raid reduces surprises after game days or seasonal launches on raid and farming run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/rust-cheats/">undetected rust cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.rust}, then confirm our rebuild is live before you raid.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Rust Cheats FAQ | ESP, Soft Aim & RadarRadar Answers',
		description:
			'rust cheats FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Rust Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Rust Cheats — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and Rust compatibility on Windows PC.',
		imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Rust Cheats FAQ visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Rust Cheats?',
				'Rust Cheats is an undetected cheat package for Rust on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover raid and farming run. Explore <a href="/features/">Features</a> for the full control list and <a href="/rust-esp/">ESP</a> / <a href="/rust-aimbot/">Aimbot</a> for module detail.',
				`Rust itself is published by Facepunch (${EXT.rust}). Cheats are third-player tools and may violate Facepunch Studios' rules — use is at your own risk.`,
			),
			section(
				'Are Rust Cheats undetected in 2026?',
				'Rust Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/rust-cheats/">undetected rust cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before loading in are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@rustcheats.co or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Rust Cheats Support | Help & Contact',
		description:
			'Contact rust cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Rust Cheats Support — Contact Us',
		intro:
			'Get help with Rust Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Rust on Windows PC.',
		imageAlt: "Rust Cheats support page for license and setup help",
		galleryTitle: 'Rust Cheats support resources',
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
				'Support requests are reviewed daily. Rust Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Facepunch Studios bans.',
				`Account and game policy questions belong with Facepunch Studios. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@rustcheats.co',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Rust Cheats 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected rust cheats with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you raid.',
		h1: 'Undetected Rust Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How Rust Cheats stays maintained for Rust after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Rust Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Rust Cheats visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Rust Cheats',
				'Undetected Rust Cheats means the package is actively maintained against Easy Anti-Cheat and major Rust patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Rust client updates ship through ${EXT.rust}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or Rust updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass Rust guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/rust-cheats/">rust cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Rust Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'rust wallhack ESP with player boxes and loot markers for Windows PC. Undetected rust cheats — learn overlays and buy.',
		h1: 'Rust Wallhack — ESP Boxes & Visibility',
		intro:
			'Rust wallhack ESP for Rust — see players, loot, enemy players, and resource nodes through toggleable wallhack overlays built for base raids and PvP fights.',
		imageAlt: "rust wallhack visibility through walls in a raid",
		galleryTitle: 'rust wallhack ESP gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Rust ESP page',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'An Rust wallhack focuses on information — player outlines, loot pins, threat cues — rather than automatic aiming. Rust Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and compound zones.',
				'For the broader ESP keyword page see <a href="/rust-esp/">Rust ESP</a>; for combat assist see <a href="/rust-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, farming run, and official servers with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/rust-radar-hack/">radar hack</a> cues for flanks during forest and monument edge ambushes.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/rust-cheats/">undetected rust cheats</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/rust-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Rust Radar Hack 2026 | 2D Threat Overlay',
		description:
			'rust radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our Rust Cheats package.',
		h1: 'Rust Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Rust — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Rust 2D radar overlay showing nearby threats",
		galleryTitle: 'rust radar hack visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Why radar hack matters in Rust',
				'survival firefights happen across open terrain — hills, forests, and monument edges. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.',
				'Rust Cheats radar complements <a href="/rust-esp/">ESP wallhack</a> markers during squad pushes and compound zone fights.',
				`Mode rules and seasonal changes come from ${EXT.rust}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight compound zones. Directional cues highlight flanks during building clears and flank pushes across raid and farming run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/rust-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/rust-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full Rust Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Rust patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/rust-cheats/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'Easy Anti-Cheat Bypass Rust | Rust Cheats Maintenance',
		description:
			'How rust cheats rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before loading in.',
		h1: 'Easy Anti-Cheat Bypass — Rust Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for Rust Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Rust security updates.',
		imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Facepunch Studios' anti-cheat for Rust on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Rust Cheats monitors Easy Anti-Cheat patch notes and Rust seasonal updates from ${EXT.rust} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Rust server status on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid loading in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/rust-cheats/">undetected rust cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every raid.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Rust Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best rust cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected rust cheats with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'Rust Cheats 2026 — ESP, Soft Aim & RadarRadar',
		intro:
			'The 2026 Rust Cheats package for Rust — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Rust Cheats product overview for Rust",
		galleryTitle: 'Rust Cheats 2026 gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why rust cheats buyers choose Rust Cheats in 2026',
				'2026 updates bring new maps, player balance changes, and Easy Anti-Cheat patches. Rust Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover raid and farming run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/rust-cheats/">Rust Cheats pillar</a>, <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-esp/">wallhack</a>, <a href="/rust-radar-hack/">radar</a>, <a href="/rust-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/rust-cheats/">rust cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/rust-cheats/">rust cheats</a> checklist, <a href="/blog/rust-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@rustcheats.co via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Rust Cheats 2026 | Undetected ESP, Aimbot & Radar Guide',
		description:
			'Learn what rust cheats include — ESP wallhack, radar, soft aim, and Easy Anti-Cheat maintenance for Windows PC. Full rust cheats guide before you buy.',
		h1: 'Rust Cheats — What You Get & How It Works',
		intro:
			'Rust cheats give you extra information and combat tools on top of the base game: player ESP, loot markers, 2D radar, and configurable soft aim in one Windows PC license. This page explains what rust cheats are, what Rust Cheats includes, and how maintenance works after Easy Anti-Cheat patches.',
		imageAlt: 'Rust Cheats overview — ESP, aimbot, and radar for Rust',
		galleryTitle: 'Rust cheats feature gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What are rust cheats?',
				'Rust is an information-heavy survival game. Rust cheats are third-party tools that add overlays and assist features — typically ESP to see players and loot through walls, radar for off-screen threats, and soft aim to smooth combat under pressure.',
				'Rust Cheats bundles those tools in one maintained package instead of juggling separate downloads. One license covers raid sessions, farming runs, and official servers on Windows 10 and 11.',
				`Game updates publish on ${EXT.rust}. Our rebuild notes live on the <a href="/updates/">Updates page</a> so you know when to load in after a patch.`,
			),
			section(
				'What Rust Cheats includes',
				'Player ESP wallhack outlines enemies and NPCs with distance readouts. Loot ESP highlights crates, corpses, and high-value resources. A 2D radar shows threats outside your view. Soft aim profiles let you tune FOV and smoothness per weapon.',
				'Monthly ($35) and lifetime ($150) plans include the same feature stack — compare options on <a href="/pricing/">Pricing</a>.',
				'Deep dives: <a href="/rust-esp/">Rust ESP</a>, <a href="/rust-aimbot/">Rust Aimbot</a>, <a href="/rust-radar-hack/">radar hack</a>, and the full <a href="/features/">Features</a> list.',
			),
			section(
				'Undetected status and Easy Anti-Cheat',
				'Rust runs on Easy Anti-Cheat. No cheat can promise permanent undetected status — what matters is maintenance after patches. Rust Cheats rebuilds ESP, radar, and aim modules when Easy Anti-Cheat or Rust updates ship.',
				'Check the <a href="/updates/">Status page</a> before patch-day load ins. Read the <a href="/undetected-rust-cheats/">undetected rust cheats guide</a> and <a href="/eac-bypass/">Easy Anti-Cheat maintenance notes</a> for the full workflow.',
				'Official background: <a href="https://www.easy.ac/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>. Questions before checkout: <a href="/faq/">FAQ</a> and <a href="/support/">Support</a>.',
			),
			section(
				'Getting started',
				'After checkout, follow the <a href="/setup/">Setup guide</a> to activate your license and load default ESP and aim profiles. Keep your order ID ready for support at support@rustcheats.co.',
				'New buyers should also read the <a href="/blog/rust-cheats-complete-guide-2026/">2026 complete guide</a> and <a href="/blog/rust-cheats-buyers-guide/">buyers guide</a> before comparing shops.',
				'Ready to buy? Open <a href="/pricing/">Pricing</a> or return to the <a href="/">homepage</a> for the latest status summary.',
			),
		],
	},
	'cheat-download': {
		title: 'Rust Hack Download 2026 | Instant Access',
		description:
			'rust cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Rust Hack Download — Instant License Delivery',
		intro:
			'How rust cheat download works for Rust — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Rust Cheats download and install delivery flow",
		galleryTitle: 'rust cheat download visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How rust cheat download delivery works',
				'After checkout confirms payment, Rust Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Facepunch Studios services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every rust cheat download includes player ESP wallhack, loot and loot markers, 2D radar overlays, Aimbot profiles, and in-client toggles for base raids and PvP fights.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Rust or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/rust-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Rust Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Rust mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected Rust Cheats package.',
		h1: 'Rust Mod Menu — In-Client Control Panel',
		intro:
			'Rust mod menu controls for Rust — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Rust raid on Windows PC.',
		imageAlt: "Rust Cheats in-game menu controls",
		galleryTitle: 'Rust mod menu gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Rust mod menu controls',
				'A Rust mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Rust Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Rust.',
				'Control deep-dives: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for base raids and PvP fights',
				'Separate ESP wallhack categories for players, loot, resource nodes, and enemy players let you reduce overlay noise during rotations and compound zones.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.rust} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/rust-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'Rust mod menu behavior is rebuilt when Easy Anti-Cheat or major Rust updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before loading in on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Rust Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Rust soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our rust cheats with ESP boxes.',
		h1: 'Rust Soft Aim — Smooth Aimbot Controls',
		intro:
			'Rust soft aim settings for Rust — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Rust soft aim FOV and smoothness settings",
		galleryTitle: 'Rust soft aim gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/rust-aimbot/',
		sections: [
			section(
				'What Rust soft aim means',
				'Rust soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Rust Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/rust-aimbot/">Rust Aimbot</a>. Alternate wording: <a href="/rust-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-action rifles. Switch between bolt-action ambush firefights and close squad fights with hotkeys mid-session.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/rust-esp/">ESP wallhack</a> and <a href="/rust-radar-hack/">2D radar</a> overlays.',
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
		title: 'Best Rust Cheats 2026 | Buyer Guide',
		description:
			'Best rust cheats for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Rust Cheats — 2026 Buyer Guide',
		intro:
			'Compare rust cheats for Rust in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "Rust Cheats overview for Rust on PC",
		galleryTitle: 'Best rust cheats gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes rust cheats in 2026',
				'The rust cheats combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Rust Cheats covers raid and farming run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best rust cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Rust patches.',
				'Review <a href="/features/">Features</a>, <a href="/rust-cheats/">undetected status</a>, and <a href="/rust-cheats/">rust cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-cheats/">hacks</a>.',
			),
			section(
				'Buying rust cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first load in — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Facepunch Studios terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Rust Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Rust Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Rust Cheats package.',
		h1: 'Rust Aimbot Hack — Soft Aim Assist',
		intro:
			'Rust Aimbot hack tools for Rust — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Rust Aimbot hack controls and bone priority",
		galleryTitle: 'Rust Aimbot hack gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/rust-aimbot/',
		sections: [
			section(
				'Rust Aimbot hack vs visibility tools',
				'A Rust Aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Rust Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and aim smoothing controls tune assist for Rust combat pace across base raids and PvP fights.',
				'Prefer softer tracking language? See <a href="/rust-aimbot/">soft aim</a>. Full settings: <a href="/rust-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session bases.',
				'Per-weapon profile slots separate bolt-action AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon balance updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before loading in after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/rust-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Rust ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Rust ESP hack with player boxes and loot markers for Windows PC. Undetected rust cheats with — see overlays and buy.',
		h1: 'Rust ESP Hack — Player Boxes Guide',
		intro:
			'Rust ESP hack overlays for Rust — player outlines, threat cues, loot and resources markers with distance readouts across raid and farming run.',
		imageAlt: "Rust ESP hack boxes and loot markers",
		galleryTitle: 'Rust ESP hack gallery',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'What a Rust ESP hack shows',
				'A Rust ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-player scenarios.',
				'Canonical visibility guide: <a href="/rust-esp/">Rust ESP</a>. Wallhack wording: <a href="/rust-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports base raids and PvP fights.',
				`POI and loot changes publish through ${EXT.rust} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and Rust patches. Check the <a href="/updates/">Updates page</a> before loading in — pair ESP hack awareness with <a href="/rust-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/rust-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Rust Unlock All 2026 | What It Really Means',
		description:
			'Rust unlock-all explained vs real rust cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Rust Unlock All — What Players Search For',
		intro:
			'Rust unlock-all is a common search term for Rust — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Rust Cheats actually provides on Windows PC.',
		imageAlt: "Rust Cheats license features overview",
		galleryTitle: 'Rust unlock-all guide visuals',
		ctaPrimary: 'Buy Rust Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Rust unlock-all usually means',
				'Rust unlock-all searches often refer to instant access to players, skins, or armor tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Rust Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and patch cycle progression items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, enemy players, and high-value loot during live raids. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and loot markers speed map rotations — see the <a href="/rust-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/rust-cheats/">rust cheats</a> and <a href="/rust-cheats/">rust cheats</a>.',
			),
			section(
				'Buying Rust Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Rust on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Rust Cheats',
		description:
			'Privacy policy for Rust Cheats. How we handle support emails, order data, and checkout for rust cheats licenses on rustcheats.co.',
		h1: 'Privacy Policy',
		intro: 'How Rust Cheats handles information when you browse rustcheats.co or contact support about a Rust license.',
		imageAlt: "Rust Cheats privacy policy page",
		galleryTitle: 'Rust Cheats legal resources',
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
				'Analytics may use aggregated traffic data without identifying individual Rust Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@rustcheats.co with your request details.',
				'Policy updates publish on this page. Continued use of rustcheats.co after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Rust Cheats',
		description:
			'Refund policy for Rust Cheats. Digital delivery terms and eligibility for Rust Cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Rust Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Rust.',
		imageAlt: "Rust Cheats refund policy page",
		galleryTitle: 'Rust Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Rust Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@rustcheats.co with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Rust Cheats Rules',
		description:
			'Terms of use for rustcheats.co and Rust Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of rustcheats.co and Rust Cheats licenses for Rust on Windows PC.',
		imageAlt: "Rust Cheats terms of use page",
		galleryTitle: 'Rust Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Rust Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Rust on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Rust may violate Facepunch Studios terms and result in account penalties. Rust Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/rust-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@rustcheats.co for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
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
