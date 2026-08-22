import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; hacksPackage: string; raidFight: string; battleRoyale: string; raidMap: string;
	};
};
export type PageId = 'home' | 'rust-esp' | 'rust-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected rust cheats 2026",
					subtitle: "rust cheats with Rust ESP, radar hack and Rust Aimbot for Windows PC — Easy Anti-Cheat maintenance included.",
					subtitleShort: "Rust ESP, radar & aimbot for PC",
					buyNow: "Buy Rust Cheats",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Rust Cheats — undetected rust cheats live for Rust on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected rust cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Rust Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Rust Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected rust cheats for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats | Undetected Aimbot, ESP & Wallhack 2026",
					description: "Rust hacks for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.",
					h1: "Rust Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Rust Cheats is the undetected Rust Cheats package for Windows PC — built for Rust on Windows PC. Rust ESP wallhack, 2D radar, and Rust Aimbot with Easy Anti-Cheat maintenance after every major patch.",
					imageAlt: "Rust Cheats homepage hero — ESP and aimbot for Rust",
					galleryTitle: "Rust Cheats gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose rust cheats in 2026",
							paragraphs: [
								"Rust rewards map awareness. Rust Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, farming run, and official servers.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a> and <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/rust-cheats/\">Rust Cheats pillar</a>, <a href=\"/rust-esp/\">ESP guide</a>, <a href=\"/rust-aimbot/\">Aimbot controls</a>, and <a href=\"/rust-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Rust Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for base raids and PvP fights — covering both “rust cheats” and “rust cheats” search intent.",
								"Browse the <a href=\"/rust-esp/\">ESP</a>, <a href=\"/rust-aimbot/\">Aimbot</a>, <a href=\"/rust-esp/\">wallhack</a>, and <a href=\"/rust-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> for Rust server status, then confirm our maintenance notes so you are not loading in on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/rust-cheats-esp.webp",
				},
				"rust-esp": {
					title: "Rust ESP 2026 | Player Boxes & Wallhack",
					description: "Rust ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected rust cheats for Rust.",
					h1: "Rust ESP — Player Boxes & Wallhack",
					intro: "Rust ESP visibility tools for raid and farming run. Read enemy squads, players, NPCs, loot, and distance before you commit — toggleable Rust ESP wallhack overlays bundled in our Rust Cheats package.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP overlay visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "rust wallhack guide",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "What Rust ESP solves in raids",
							paragraphs: [
								"Rust maps punish incomplete information. Rust Cheats ESP wallhack helps you spot enemy squads early, spot players and NPCs before they push your angle, and mark high-value loot worth the detour.",
								"On raid, farming run, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Rust’s live seasons and map updates are published by Facepunch (<a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and loot — not a single static landmark.",
							],
						},
						{
							h2: "Player, apex, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, heli markers, raid cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports base raids and PvP fights lobbies alike.",
								"Compare category detail on the <a href=\"/rust-esp/\">wallhack page</a> and pair visibility with the <a href=\"/rust-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and loot markers for faster rotations",
								"Heli and base awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Rust Cheats ESP wallhack is maintained for Rust with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you raid — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/rust-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/rust-cheats/\">Rust Cheats pillar</a> and <a href=\"/rust-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/rust-cheats-radar.webp",
				},
				"rust-aimbot": {
					title: "Rust Aimbot 2026 | Soft Aim for Windows PC",
					description: "Rust Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Rust Cheats package.",
					h1: "Rust Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Rust firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot combat previews",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Rust combat pace",
							paragraphs: [
								"Rust mixes bolt-action mid-size firefights with close-quarters ambush rushes. Rust Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range squad fights.",
								"Weapon balance and season rules change via <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-action rifles. Switch between bolt-action ambush firefights and high-traffic zone clears without reopening menus every raid.",
								"Prefer softer tracking? Read the <a href=\"/rust-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/rust-esp/\">ESP wallhack</a> and <a href=\"/rust-radar-hack/\">2D radar</a> in the same Rust Cheats license.",
							],
							list: [
								"Smoothness, FOV, and aim smoothing sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance for undetected Aimbot",
							paragraphs: [
								"Rust Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Rust patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> and anti-cheat context on <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>, then follow our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> before loading in on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot.webp",
				},
				features: {
					title: "Rust Cheats Features | ESP, Soft Aim & RadarRadar",
					description: "Full rust cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Rust Cheats Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in Rust Cheats for Rust on Windows PC — with Easy Anti-Cheat maintenance after major patches.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Rust Cheats feature gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, apex and base awareness cues, loot and resources markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports base raids and PvP fights. Deep-dive the <a href=\"/rust-esp/\">ESP page</a> and <a href=\"/rust-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a> patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-session bases, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Rust raids. See <a href=\"/rust-radar-hack/\">radar</a> and <a href=\"/rust-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/rust-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Easy Anti-Cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> on patch days, then confirm rebuild notes before you raid. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@rustcheats.co.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/rust-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot-view.webp",
				},
				pricing: {
					title: "Rust Cheats Pricing | $35/mo or $150 Life",
					description: "rust cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Rust Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Rust Cheats — ESP wallhack, radar hack, and Aimbot for Rust on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Rust Cheats package visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Rust Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Rust Cheats package — ideal if you play Rust regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Rust patches.",
								"Season calendars and client updates come from <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/rust-cheats/\">rust cheats</a>, <a href=\"/rust-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/rust-cheats-session.webp",
				},
				setup: {
					title: "Rust Cheats Setup | Windows PC Guide",
					description: "Set up rust cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first load in.",
					h1: "Rust Cheats Setup — Windows PC Guide",
					intro: "Install and configure Rust Cheats for Rust on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before loading in.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Rust Cheats setup visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Rust Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Rust.",
								"Also glance at <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> if Facepunch Studios services look unstable on patch day — a platform outage is not a license fault.",
								"Rust Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, NPCs, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/rust-esp/\">ESP</a>, <a href=\"/rust-aimbot/\">Aimbot</a>, and <a href=\"/rust-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/rust-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Rust or Easy Anti-Cheat patches",
							paragraphs: [
								"When Facepunch ships a major Rust update or Easy Anti-Cheat patch, revisit Updates before loading in. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Easy Anti-Cheat bypass page</a> and <a href=\"/rust-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/rust-cheats-radar.webp",
				},
				updates: {
					title: "Rust Cheats Updates | Easy Anti-Cheat Maintenance Log",
					description: "rust cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before loading in after patches.",
					h1: "Rust Cheats Updates — Maintenance Log",
					intro: "Track Easy Anti-Cheat maintenance and Rust patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before loading in after major updates.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Rust patch and maintenance visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Rust and Easy Anti-Cheat receive frequent patches. Rust Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> for Facepunch Studios platform health and this page for Rust Cheats build status — both matter on big update days.",
								"Checking this log before you raid reduces surprises after game days or seasonal launches on raid and farming run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> and <a href=\"/rust-cheats/\">undetected rust cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>, then confirm our rebuild is live before you raid.",
								"For urgent status questions after a Easy Anti-Cheat update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/rust-cheats-esp.webp",
				},
				faq: {
					title: "Rust Cheats FAQ | ESP, Soft Aim & RadarRadar Answers",
					description: "rust cheats FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Rust Cheats FAQ — Common Questions",
					intro: "Answers about undetected Rust Cheats — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and Rust compatibility on Windows PC.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "Rust Cheats FAQ visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Rust Cheats?",
							paragraphs: [
								"Rust Cheats is an undetected cheat package for Rust on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.",
								"Packages cover raid and farming run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/rust-esp/\">ESP</a> / <a href=\"/rust-aimbot/\">Aimbot</a> for module detail.",
								"Rust itself is published by Facepunch (<a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>). Cheats are third-player tools and may violate Facepunch Studios' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Rust Cheats undetected in 2026?",
							paragraphs: [
								"Rust Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/rust-cheats/\">undetected rust cheats</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before loading in are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@rustcheats.co or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot-view.webp",
				},
				support: {
					title: "Rust Cheats Support | Help & Contact",
					description: "Contact rust cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Rust Cheats Support — Contact Us",
					intro: "Get help with Rust Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Rust on Windows PC.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Rust Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Rust Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Facepunch Studios bans.",
								"Account and game policy questions belong with Facepunch Studios. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@rustcheats.co",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-session.webp",
				},
				undetected: {
					title: "Undetected Rust Cheats 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected rust cheats with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you raid.",
					h1: "Undetected Rust Cheats — Easy Anti-Cheat Maintenance",
					intro: "How Rust Cheats stays maintained for Rust after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Rust Cheats visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Easy Anti-Cheat bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Rust Cheats",
							paragraphs: [
								"Undetected Rust Cheats means the package is actively maintained against Easy Anti-Cheat and major Rust patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>; Rust client updates ship through <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or Rust updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Easy Anti-Cheat bypass Rust guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/rust-cheats/\">rust cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/rust-cheats-wallhack.webp",
				},
				wallhack: {
					title: "Rust Wallhack 2026 | ESP Boxes & Visibility",
					description: "rust wallhack ESP with player boxes and loot markers for Windows PC. Undetected rust cheats — learn overlays and buy.",
					h1: "Rust Wallhack — ESP Boxes & Visibility",
					intro: "Rust wallhack ESP for Rust — see players, loot, enemy players, and resource nodes through toggleable wallhack overlays built for base raids and PvP fights.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "rust wallhack ESP gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Rust ESP page",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"An Rust wallhack focuses on information — player outlines, loot pins, threat cues — rather than automatic aiming. Rust Cheats bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and compound zones.",
								"For the broader ESP keyword page see <a href=\"/rust-esp/\">Rust ESP</a>; for combat assist see <a href=\"/rust-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, farming run, and official servers with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/rust-radar-hack/\">radar hack</a> cues for flanks during forest and monument edge ambushes.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/rust-cheats/\">undetected rust cheats</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/rust-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/rust-cheats-wallhack.webp",
				},
				radar: {
					title: "Rust Radar Hack 2026 | 2D Threat Overlay",
					description: "rust radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our Rust Cheats package.",
					h1: "Rust Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Rust — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "rust radar hack visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Rust",
							paragraphs: [
								"survival firefights happen across open terrain — hills, forests, and monument edges. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.",
								"Rust Cheats radar complements <a href=\"/rust-esp/\">ESP wallhack</a> markers during squad pushes and compound zone fights.",
								"Mode rules and seasonal changes come from <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight compound zones. Directional cues highlight flanks during building clears and flank pushes across raid and farming run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/rust-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/rust-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full Rust Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Rust patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/rust-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-radar.webp",
				},
				eac: {
					title: "Easy Anti-Cheat Bypass Rust | Rust Cheats Maintenance",
					description: "How rust cheats rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before loading in.",
					h1: "Easy Anti-Cheat Bypass — Rust Cheats Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for Rust Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Rust security updates.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat maintenance visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Facepunch Studios' anti-cheat for Rust on PC (see <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Rust Cheats monitors Easy Anti-Cheat patch notes and Rust seasonal updates from <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a> to schedule module reviews.",
								"“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Easy Anti-Cheat patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Rust server status on <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> if the launcher or matchmaking fails during the same window.",
								"Avoid loading in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/rust-cheats/\">undetected rust cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every raid.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot.webp",
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | ESP Soft Aim & Radar",
					description: "Best rust cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected rust cheats with Easy Anti-Cheat maintenance — compare and buy.",
					h1: "Rust Cheats 2026 — ESP, Soft Aim & RadarRadar",
					intro: "The 2026 Rust Cheats package for Rust — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026 gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why rust cheats buyers choose Rust Cheats in 2026",
							paragraphs: [
								"2026 updates bring new maps, player balance changes, and Easy Anti-Cheat patches. Rust Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raid and farming run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/rust-cheats/\">Rust Cheats pillar</a>, <a href=\"/rust-esp/\">ESP</a>, <a href=\"/rust-aimbot/\">Aimbot</a>, <a href=\"/rust-esp/\">wallhack</a>, <a href=\"/rust-radar-hack/\">radar</a>, <a href=\"/rust-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/rust-cheats/\">rust cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/rust-cheats/\">rust cheats</a> checklist, <a href=\"/blog/rust-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@rustcheats.co via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-esp.webp",
				},
				hacks: {
					title: "Rust Cheats 2026 | Undetected ESP, Aimbot & Radar Guide",
					description: "Learn what rust cheats include — ESP wallhack, radar, soft aim, and Easy Anti-Cheat maintenance for Windows PC. Full rust cheats guide before you buy.",
					h1: "Rust Cheats — What You Get & How It Works",
					intro: "Rust cheats give you extra information and combat tools on top of the base game: player ESP, loot markers, 2D radar, and configurable soft aim in one Windows PC license. This page explains what rust cheats are, what Rust Cheats includes, and how maintenance works after Easy Anti-Cheat patches.",
					imageAlt: "Rust Cheats overview — ESP, aimbot, and radar for Rust",
					galleryTitle: "Rust cheats feature gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What are rust cheats?",
							paragraphs: [
								"Rust is an information-heavy survival game. Rust cheats are third-party tools that add overlays and assist features — typically ESP to see players and loot through walls, radar for off-screen threats, and soft aim to smooth combat under pressure.",
								"Rust Cheats bundles those tools in one maintained package instead of juggling separate downloads. One license covers raid sessions, farming runs, and official servers on Windows 10 and 11.",
								"Game updates publish on <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>. Our rebuild notes live on the <a href=\"/updates/\">Updates page</a> so you know when to load in after a patch.",
							],
						},
						{
							h2: "What Rust Cheats includes",
							paragraphs: [
								"Player ESP wallhack outlines enemies and NPCs with distance readouts. Loot ESP highlights crates, corpses, and high-value resources. A 2D radar shows threats outside your view. Soft aim profiles let you tune FOV and smoothness per weapon.",
								"Monthly ($35) and lifetime ($150) plans include the same feature stack — compare options on <a href=\"/pricing/\">Pricing</a>.",
								"Deep dives: <a href=\"/rust-esp/\">Rust ESP</a>, <a href=\"/rust-aimbot/\">Rust Aimbot</a>, <a href=\"/rust-radar-hack/\">radar hack</a>, and the full <a href=\"/features/\">Features</a> list.",
							],
						},
						{
							h2: "Undetected status and Easy Anti-Cheat",
							paragraphs: [
								"Rust runs on Easy Anti-Cheat. No cheat can promise permanent undetected status — what matters is maintenance after patches. Rust Cheats rebuilds ESP, radar, and aim modules when Easy Anti-Cheat or Rust updates ship.",
								"Check the <a href=\"/updates/\">Status page</a> before patch-day load ins. Read the <a href=\"/undetected-rust-cheats/\">undetected rust cheats guide</a> and <a href=\"/eac-bypass/\">Easy Anti-Cheat maintenance notes</a> for the full workflow.",
								"Official background: <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Questions before checkout: <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a>.",
							],
						},
						{
							h2: "Getting started",
							paragraphs: [
								"After checkout, follow the <a href=\"/setup/\">Setup guide</a> to activate your license and load default ESP and aim profiles. Keep your order ID ready for support at support@rustcheats.co.",
								"New buyers should also read the <a href=\"/blog/rust-cheats-complete-guide-2026/\">2026 complete guide</a> and <a href=\"/blog/rust-cheats-buyers-guide/\">buyers guide</a> before comparing shops.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a> or return to the <a href=\"/\">homepage</a> for the latest status summary.",
							],
						},
					],
					heroImage: "/images/rust-cheats-combat.webp",
				},
				"cheat-download": {
					title: "Rust Hack Download 2026 | Instant Access",
					description: "rust cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Rust Hack Download — Instant License Delivery",
					intro: "How rust cheat download works for Rust — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "rust cheat download visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How rust cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, Rust Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Facepunch Studios services are down, check <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every rust cheat download includes player ESP wallhack, loot and loot markers, 2D radar overlays, Aimbot profiles, and in-client toggles for base raids and PvP fights.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/rust-esp/\">ESP</a>, <a href=\"/rust-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Rust or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/rust-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/rust-cheats-session.webp",
				},
				"mod-menu": {
					title: "Rust Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Rust mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected Rust Cheats package.",
					h1: "Rust Mod Menu — In-Client Control Panel",
					intro: "Rust mod menu controls for Rust — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Rust raid on Windows PC.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust mod menu gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Rust mod menu controls",
							paragraphs: [
								"A Rust mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Rust Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Rust.",
								"Control deep-dives: <a href=\"/rust-esp/\">ESP</a>, <a href=\"/rust-aimbot/\">Aimbot</a>, <a href=\"/rust-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for base raids and PvP fights",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, resource nodes, and enemy players let you reduce overlay noise during rotations and compound zones.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.rust} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/rust-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Easy Anti-Cheat patches",
							paragraphs: [
								"Rust mod menu behavior is rebuilt when Easy Anti-Cheat or major Rust updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before loading in on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/rust-cheats-radar.webp",
				},
				"soft-aim": {
					title: "Rust Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Rust soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our rust cheats with ESP boxes.",
					h1: "Rust Soft Aim — Smooth Aimbot Controls",
					intro: "Rust soft aim settings for Rust — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust soft aim gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "What Rust soft aim means",
							paragraphs: [
								"Rust soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Rust Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/rust-aimbot/\">Rust Aimbot</a>. Alternate wording: <a href=\"/rust-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-action rifles. Switch between bolt-action ambush firefights and close squad fights with hotkeys mid-session.",
								"Weapon TTKs shift with <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/rust-esp/\">ESP wallhack</a> and <a href=\"/rust-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before loading in — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Rust Cheats 2026 | Buyer Guide",
					description: "Best rust cheats for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Rust Cheats — 2026 Buyer Guide",
					intro: "Compare rust cheats for Rust in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Best rust cheats gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes rust cheats in 2026",
							paragraphs: [
								"The rust cheats combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Rust Cheats covers raid and farming run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust on Steam</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best rust cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Rust patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/rust-cheats/\">undetected status</a>, and <a href=\"/rust-cheats/\">rust cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/rust-esp/\">ESP</a>, <a href=\"/rust-aimbot/\">Aimbot</a>, <a href=\"/rust-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying rust cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first load in — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Facepunch Studios terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/rust-cheats-esp.webp",
				},
				"aimbot-hack": {
					title: "Rust Aimbot Hack 2026 | Soft Aim Assist",
					description: "Rust Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Rust Cheats package.",
					h1: "Rust Aimbot Hack — Soft Aim Assist",
					intro: "Rust Aimbot hack tools for Rust — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot hack gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot hack vs visibility tools",
							paragraphs: [
								"A Rust Aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Rust Cheats bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and aim smoothing controls tune assist for Rust combat pace across base raids and PvP fights.",
								"Prefer softer tracking language? See <a href=\"/rust-aimbot/\">soft aim</a>. Full settings: <a href=\"/rust-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session bases.",
								"Per-weapon profile slots separate bolt-action AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a> can change ideal FOV — retune after major weapon balance updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before loading in after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/rust-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Rust ESP Hack 2026 | Player Boxes & Loot",
					description: "Rust ESP hack with player boxes and loot markers for Windows PC. Undetected rust cheats with — see overlays and buy.",
					h1: "Rust ESP Hack — Player Boxes Guide",
					intro: "Rust ESP hack overlays for Rust — player outlines, threat cues, loot and resources markers with distance readouts across raid and farming run.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP hack gallery",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "What a Rust ESP hack shows",
							paragraphs: [
								"A Rust ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-player scenarios.",
								"Canonical visibility guide: <a href=\"/rust-esp/\">Rust ESP</a>. Wallhack wording: <a href=\"/rust-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports base raids and PvP fights.",
								"POI and loot changes publish through <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Easy Anti-Cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and Rust patches. Check the <a href=\"/updates/\">Updates page</a> before loading in — pair ESP hack awareness with <a href=\"/rust-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/rust-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-wallhack.webp",
				},
				"unlock-all": {
					title: "Rust Unlock All 2026 | What It Really Means",
					description: "Rust unlock-all explained vs real rust cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Rust Unlock All — What Players Search For",
					intro: "Rust unlock-all is a common search term for Rust — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Rust Cheats actually provides on Windows PC.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust unlock-all guide visuals",
					ctaPrimary: "Buy Rust Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Rust unlock-all usually means",
							paragraphs: [
								"Rust unlock-all searches often refer to instant access to players, skins, or armor tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Rust Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and patch cycle progression items are sold through <a href=\"https://store.steampowered.com/app/252490/Rust/\" target=\"_blank\" rel=\"noopener noreferrer\">Rust</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, enemy players, and high-value loot during live raids. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and loot markers speed map rotations — see the <a href=\"/rust-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/rust-cheats/\">rust cheats</a> and <a href=\"/rust-cheats/\">rust cheats</a>.",
							],
						},
						{
							h2: "Buying Rust Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Rust on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/rust-cheats-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Rust Cheats",
					description: "Privacy policy for Rust Cheats. How we handle support emails, order data, and checkout for rust cheats licenses on rustcheats.co.",
					h1: "Privacy Policy",
					intro: "How Rust Cheats handles information when you browse rustcheats.co or contact support about a Rust license.",
					imageAlt: "Rust Cheats privacy policy page",
					galleryTitle: "Rust Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Rust Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@rustcheats.co with your request details.",
								"Policy updates publish on this page. Continued use of rustcheats.co after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Rust Cheats",
					description: "Refund policy for Rust Cheats. Digital delivery terms and eligibility for Rust Cheats packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Rust Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Rust.",
					imageAlt: "Rust Cheats refund policy page",
					galleryTitle: "Rust Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Rust Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@rustcheats.co with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-session.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Rust Cheats Rules",
					description: "Terms of use for rustcheats.co and Rust Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of rustcheats.co and Rust Cheats licenses for Rust on Windows PC.",
					imageAlt: "Rust Cheats terms of use page",
					galleryTitle: "Rust Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Rust Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Rust on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Rust may violate Facepunch Studios terms and result in account penalties. Rust Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/rust-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@rustcheats.co for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/rust-cheats-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Rust indetectables",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack y Aimbot para Rust en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Rust PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Rust Cheats está activo para Rust en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Rust",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Rust Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Rust — checkout en Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Rust indetectables para Rust en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "Rust Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Rust en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "Rust ESP — etiquetas de jugador hack",
					galleryTitle: "Galería Rust Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Rust Cheats en 2026",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Ideal para leer escuadrones enemigos en BR y farming run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Cajas de jugador y wallhack",
					description: "ESP Rust: cajas de jugador, marcadores de carcasa y overlays wallhack. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. cajas de jugador, marcadores de carcasa y overlays wallhack.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Controles soft aim",
					description: "Aimbot Rust: soft aim, FOV y perfiles Aimbot por especie. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. soft aim, FOV y perfiles Aimbot por especie.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, controles de radar. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Funciones.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. ESP, soft aim, controles de radar.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: licencias de $35 mensuales o $150 de por vida. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Precios.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. licencias de $35 mensuales o $150 de por vida.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: activación en Windows PC y configuración del primer arranque. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Instalación.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. activación en Windows PC y configuración del primer arranque.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: estado de parches Easy Anti-Cheat y notas de reconstrucción. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Actualizaciones.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. estado de parches Easy Anti-Cheat y notas de reconstrucción.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: preguntas sobre ESP, soft aim, entrega y Easy Anti-Cheat. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. preguntas sobre ESP, soft aim, entrega y Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: ayuda con pedidos y contacto de soporte de licencias. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Soporte.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. ayuda con pedidos y contacto de soporte de licencias.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: mantenimiento undetected tras parches Easy Anti-Cheat. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Trucos indetectables.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. mantenimiento undetected tras parches Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | Visibilidad ESP",
					description: "Rust Wallhack: wallhack ESP para jugadores, loot y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. wallhack ESP para jugadores, loot y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: señales de radar 2D para flancos y rotaciones. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. señales de radar 2D para flancos y rotaciones.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: cómo se gestionan las actualizaciones Easy Anti-Cheat para Rust hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. cómo se gestionan las actualizaciones Easy Anti-Cheat para Rust hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Rust 2026 | Guía del comprador",
					description: "Trucos Rust 2026: checklist de rust cheats 2026 antes del checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Rust 2026",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Trucos Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Trucos Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Trucos Rust 2026",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. checklist de rust cheats 2026 antes del checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Rust | Guía ESP y Aimbot",
					description: "Trucos Rust: pilar Rust Cheats para ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Trucos Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. pilar Rust Cheats para ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Rust Cheats | Acceso instantáneo",
					description: "Descarga Rust Cheats: descarga de licencia digital tras el pago. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Rust Cheats",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Descarga Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Descarga Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Rust Cheats",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. descarga de licencia digital tras el pago.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Rust | Controles en partida",
					description: "Menú mod Rust: toggles de ESP y soft aim en el cliente. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Menú mod Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Menú mod Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. toggles de ESP y soft aim en el cliente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Ajustes soft aim",
					description: "Soft aim Rust: ajustes suaves de soft aim para Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. ajustes suaves de soft aim para Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Rust | Lista de compra",
					description: "Mejores trucos Rust: qué comparar antes de comprar rust cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Mejores trucos Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Mejores trucos Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. qué comparar antes de comprar rust cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Asistencia soft aim",
					description: "Hack aimbot Rust: asistencia undetected de hack Aimbot para Rust. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. asistencia undetected de hack Aimbot para Rust.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Cajas y loot",
					description: "Hack ESP Rust: cajas ESP hack, pins de carcasa y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. cajas ESP hack, pins de carcasa y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | Qué significa",
					description: "Unlock all Rust: búsquedas unlock-all vs herramientas reales ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. búsquedas unlock-all vs herramientas reales ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Rust Cheats",
					description: "Política de privacidad para Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Política de privacidad para rustcheats.co y licencias de Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Los datos de pago se procesan en el checkout de Zadeyo — no se almacenan en rustcheats.co.",
							],
						},
						{
							h2: "Cómo usamos los datos",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
								"Correo: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Rust Cheats",
					description: "Política de reembolso para Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Política de reembolso para rustcheats.co y licencias de Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprobación de reembolso",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
								"Correo: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Rust Cheats",
					description: "Términos de uso para Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Términos de uso para rustcheats.co y licencias de Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aviso de riesgos",
							paragraphs: [
								"Rust Cheats ofrece ESP wallhack, radar hack y Rust Aimbot indetectables para Rust en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Usar cheats puede violar los términos del equipo de Rust — asumes todo riesgo de ban.",
							],
						},
						{
							h2: "Cambios de política",
							paragraphs: [
								"Contacta support@rustcheats.co para solicitudes legales o de soporte.",
								"Correo: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Rust indétectables",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Rust sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Rust PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Rust Cheats est actif pour Rust sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Rust",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Rust Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Rust — checkout via Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Rust indétectables pour Rust sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.",
					h1: "Rust Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Rust sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "Rust ESP — tags joueur hack",
					galleryTitle: "Galerie Rust Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Rust Cheats en 2026",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Parfait pour lire les escouades ennemies en BR et farming run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Boîtes joueur et wallhack",
					description: "ESP Rust: boîtes joueur, marqueurs de loote et overlays wallhack. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. boîtes joueur, marqueurs de loote et overlays wallhack.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Contrôles soft aim",
					description: "Aimbot Rust: soft aim, FOV et profils Aimbot par espèce. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. soft aim, FOV et profils Aimbot par espèce.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, contrôles radar. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Fonctions.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. ESP, soft aim, contrôles radar.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: licences à $35/mois ou $150 à vie. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Tarifs.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. licences à $35/mois ou $150 à vie.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: activation Windows PC et configuration au premier lancement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Installation.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. activation Windows PC et configuration au premier lancement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: statut des patchs Easy Anti-Cheat et notes de rebuild. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Mises à jour.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. statut des patchs Easy Anti-Cheat et notes de rebuild.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: questions ESP, soft aim, livraison et Easy Anti-Cheat. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. questions ESP, soft aim, livraison et Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: aide commande et contact support licence. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Support.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. aide commande et contact support licence.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: maintenance undetected après patchs Easy Anti-Cheat. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Triches indétectables.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. maintenance undetected après patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | Visibilité ESP",
					description: "Rust Wallhack: wallhack ESP pour joueurs, loot et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. wallhack ESP pour joueurs, loot et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: indices radar 2D pour flancs et rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. indices radar 2D pour flancs et rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: gestion des mises à jour Easy Anti-Cheat pour Rust hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. gestion des mises à jour Easy Anti-Cheat pour Rust hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Rust 2026 | Guide acheteur",
					description: "Triches Rust 2026: checklist rust cheats 2026 avant checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Rust 2026",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Triches Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Triches Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Triches Rust 2026",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. checklist rust cheats 2026 avant checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Rust | Guide ESP et Aimbot",
					description: "Triches Rust: pilier Rust Cheats pour ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Triches Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. pilier Rust Cheats pour ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Rust Cheats | Accès instantané",
					description: "Téléchargement Rust Cheats: téléchargement licence numérique après paiement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Rust Cheats",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Téléchargement Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Téléchargement Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Rust Cheats",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. téléchargement licence numérique après paiement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Rust | Contrôles en jeu",
					description: "Menu mod Rust: toggles ESP et soft aim in-client. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Menu mod Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Menu mod Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. toggles ESP et soft aim in-client.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Réglages soft aim",
					description: "Soft aim Rust: réglages soft aim fluides pour Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. réglages soft aim fluides pour Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Rust | Checklist acheteur",
					description: "Meilleures triches Rust: quoi comparer avant d'acheter rust cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Meilleures triches Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Meilleures triches Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. quoi comparer avant d'acheter rust cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Assistance soft aim",
					description: "Hack aimbot Rust: assist hack Aimbot undetected pour Rust. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. assist hack Aimbot undetected pour Rust.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Boîtes et loot",
					description: "Hack ESP Rust: boîtes ESP hack, pins loote et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. boîtes ESP hack, pins loote et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | Ce que ça signifie",
					description: "Unlock all Rust: recherches unlock-all vs vrais outils ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acheter Rust Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. recherches unlock-all vs vrais outils ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Rust Cheats",
					description: "Politique de confidentialité pour Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Politique de confidentialité pour rustcheats.co et les licences Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire les conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Les détails de paiement sont traités par le checkout Zadeyo — non stockés sur rustcheats.co.",
							],
						},
						{
							h2: "Utilisation des données",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
								"E-mail : support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Rust Cheats",
					description: "Politique de remboursement pour Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Politique de remboursement pour rustcheats.co et les licences Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation du remboursement",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
								"E-mail : support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Rust Cheats",
					description: "Conditions d'utilisation pour Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Conditions d'utilisation pour rustcheats.co et les licences Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation des conditions",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Avertissement sur les risques",
							paragraphs: [
								"Rust Cheats combine ESP wallhack, radar hack et Rust Aimbot indétectables pour Rust sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Utiliser des cheats peut enfreindre les conditions de l'équipe Rust — vous assumez tout risque de bannissement.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@rustcheats.co pour le support ou les demandes légales.",
								"E-mail : support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Rust Cheats",
					accentShort: "Rust Cheats",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Rust auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Rust PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Rust Cheats Paket ist live für Rust auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Rust Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Rust — Checkout über Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Rust Cheats für Rust auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Rust Cheats — Undetected ESP, Wallhack und Aimbot",
					intro: "Undetected Windows PC Paket für Rust: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "Rust ESP — Spieler-Tags Hack",
					galleryTitle: "Rust Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Rust Cheats 2026 führt",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Ideal um feindliche Squads in BR und farming run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Spielerboxen & Wallhack",
					description: "Rust ESP: Spielerboxen, Kadaver-Marker und Wallhack-Overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Spielerboxen, Kadaver-Marker und Wallhack-Overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft-Aim Steuerung",
					description: "Rust Aimbot: Soft Aim, FOV und Aimbot-Profile pro Spezies. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Soft Aim, FOV und Aimbot-Profile pro Spezies.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, Soft Aim, Radar-Steuerung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Features.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. ESP, Soft Aim, Radar-Steuerung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monatliche oder $150 Lifetime-Lizenzen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Preise.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. $35 monatliche oder $150 Lifetime-Lizenzen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC Aktivierung und Erststart-Setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Setup.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Windows PC Aktivierung und Erststart-Setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: Easy Anti-Cheat Patch-Status und Rebuild-Notizen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Updates.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Easy Anti-Cheat Patch-Status und Rebuild-Notizen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: Fragen zu ESP, Soft Aim, Lieferung und Easy Anti-Cheat. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Fragen zu ESP, Soft Aim, Lieferung und Easy Anti-Cheat.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: Bestellhilfe und Lizenz-Support-Kontakt. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Support.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Bestellhilfe und Lizenz-Support-Kontakt.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: Undetected-Wartung nach Easy Anti-Cheat Patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Undetected Cheats.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Undetected-Wartung nach Easy Anti-Cheat Patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Sichtbarkeit",
					description: "Rust Wallhack: Wallhack ESP für Spieler, Kadaver und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Wallhack ESP für Spieler, Kadaver und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D-Radar-Hinweise für Flanken und Rotationen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. 2D-Radar-Hinweise für Flanken und Rotationen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch-Wartung",
					description: "Easy Anti-Cheat Bypass: wie Easy Anti-Cheat Updates für Rust Cheats gehandhabt werden. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. wie Easy Anti-Cheat Updates für Rust Cheats gehandhabt werden.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | Käuferleitfaden",
					description: "Rust Cheats 2026: 2026 rust cheats Checkliste vor dem Checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Cheats 2026",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Cheats 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. 2026 rust cheats Checkliste vor dem Checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Rust Cheats | ESP Aimbot Guide",
					description: "Rust Cheats: Rust Cheats Säule für ESP und Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Cheats",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Cheats.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Cheats",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Cheats Säule für ESP und Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust Cheat Download | Sofortzugang",
					description: "Rust Cheat Download: digitaler Lizenz-Download nach Zahlung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Cheat Download",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Cheat Download.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust Cheat Download",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust Cheat Download",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. digitaler Lizenz-Download nach Zahlung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust Mod-Menü | In-Game Toggles",
					description: "Rust Mod-Menü: In-Client ESP- und Soft-Aim-Toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Mod-Menü",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Mod-Menü.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust Mod-Menü",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Mod-Menü",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. In-Client ESP- und Soft-Aim-Toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Soft-Aim Einstellungen",
					description: "Rust Soft Aim: sanfte Soft-Aim-Einstellungen für Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. sanfte Soft-Aim-Einstellungen für Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Rust Cheats | Käufer-Checkliste",
					description: "Beste Rust Cheats: was vor dem Kauf der rust cheats verglichen werden sollte. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Rust Cheats",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Beste Rust Cheats.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Beste Rust Cheats",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Rust Cheats",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. was vor dem Kauf der rust cheats verglichen werden sollte.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust Aimbot Hack | Soft-Aim Assist",
					description: "Rust Aimbot Hack: undetected Aimbot-Hack-Assist für Rust. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Aimbot Hack",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Aimbot Hack.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot Hack",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot Hack",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. undetected Aimbot-Hack-Assist für Rust.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP Hack | Boxen & Loot",
					description: "Rust ESP Hack: ESP-Hack-Boxen, Kadaver-Pins und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust ESP Hack",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust ESP Hack.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP Hack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP Hack",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. ESP-Hack-Boxen, Kadaver-Pins und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | Was es bedeutet",
					description: "Rust Unlock All: unlock-all Suchen vs echte ESP- und Aimbot-Tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. unlock-all Suchen vs echte ESP- und Aimbot-Tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@rustcheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Rust Cheats",
					description: "Datenschutz für Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Datenschutz für rustcheats.co und Rust-Lizenzen.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Zahlungsdaten werden über Zadeyo-Checkout verarbeitet — nicht auf rustcheats.co gespeichert.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@rustcheats.co für Support und rechtliche Anfragen.",
								"E-Mail: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Rust Cheats",
					description: "Rückerstattung für Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Rückerstattung für rustcheats.co und Rust-Lizenzen.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Rückerstattungsgenehmigung",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "So beantragen",
							paragraphs: [
								"support@rustcheats.co für Support und rechtliche Anfragen.",
								"E-Mail: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Rust Cheats",
					description: "Nutzungsbedingungen für Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Nutzungsbedingungen für rustcheats.co und Rust-Lizenzen.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme der Bedingungen",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risikohinweis",
							paragraphs: [
								"Rust Cheats bündelt ESP wallhack, radar hack und Rust Aimbot als undetected Paket für Rust auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Cheats können gegen die Nutzungsbedingungen des Rust Teams verstoßen — Sie tragen das volle Ban-Risiko.",
							],
						},
						{
							h2: "Richtlinienänderungen",
							paragraphs: [
								"support@rustcheats.co für Support und rechtliche Anfragen.",
								"E-Mail: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Rust indetectáveis",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot para Rust no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Rust PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Rust Cheats está ativo para Rust no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Rust",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Rust Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Rust — checkout via Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Rust indetectáveis para Rust no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "Rust Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Rust no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Galeria Rust Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Rust Cheats em 2026",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Ideal para ler epackrões inimigos em BR e farming run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Caixas de jogador e wallhack",
					description: "ESP Rust: caixas de jogador, marcadores de carcaça e overlays wallhack. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. caixas de jogador, marcadores de carcaça e overlays wallhack.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Controles soft aim",
					description: "Aimbot Rust: soft aim, FOV e perfis Aimbot por espécie. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. soft aim, FOV e perfis Aimbot por espécie.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, controles de radar. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Recursos.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. ESP, soft aim, controles de radar.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: licenças de $35 mensais ou $150 vitalícias. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Preços.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. licenças de $35 mensais ou $150 vitalícias.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: ativação no Windows PC e configuração do primeiro lançamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Instalação.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. ativação no Windows PC e configuração do primeiro lançamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: status de patches Easy Anti-Cheat e notas de rebuild. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Atualizações.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. status de patches Easy Anti-Cheat e notas de rebuild.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: perguntas sobre ESP, soft aim, entrega e Easy Anti-Cheat. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. perguntas sobre ESP, soft aim, entrega e Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: ajuda com pedidos e contato de suporte de licenças. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Suporte.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. ajuda com pedidos e contato de suporte de licenças.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: manutenção undetected após patches Easy Anti-Cheat. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Cheats indetectáveis.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. manutenção undetected após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | Visibilidade ESP",
					description: "Rust Wallhack: wallhack ESP para jogadores, carcaças e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. wallhack ESP para jogadores, carcaças e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: sinais de radar 2D para flancos e rotações. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. sinais de radar 2D para flancos e rotações.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: como as atualizações Easy Anti-Cheat são tratadas para Rust hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. como as atualizações Easy Anti-Cheat são tratadas para Rust hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Rust 2026 | Guia do comprador",
					description: "Cheats Rust 2026: checklist de rust cheats 2026 antes do checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Rust 2026",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Cheats Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Cheats Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheats Rust 2026",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. checklist de rust cheats 2026 antes do checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Rust | Guia ESP e Aimbot",
					description: "Cheats Rust: pilar Rust Cheats para ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Cheats Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. pilar Rust Cheats para ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Rust Cheats | Acesso instantâneo",
					description: "Download Rust Cheats: download de licença digital após pagamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Rust Cheats",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Download Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Download Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Rust Cheats",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. download de licença digital após pagamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Rust | Controles in-game",
					description: "Menu mod Rust: toggles de ESP e soft aim no cliente. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Menu mod Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Menu mod Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. toggles de ESP e soft aim no cliente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Ajustes soft aim",
					description: "Soft aim Rust: ajustes suaves de soft aim para Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. ajustes suaves de soft aim para Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Rust | Checklist do comprador",
					description: "Melhores cheats Rust: o que comparar antes de comprar rust cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Melhores cheats Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Melhores cheats Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. o que comparar antes de comprar rust cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Assistência soft aim",
					description: "Hack aimbot Rust: assistência undetected de hack Aimbot para Rust. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. assistência undetected de hack Aimbot para Rust.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Caixas e loot",
					description: "Hack ESP Rust: caixas ESP hack, pins de carcaça e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. caixas ESP hack, pins de carcaça e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | O que significa",
					description: "Unlock all Rust: buscas unlock-all vs ferramentas reais ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Comprar Rust Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. buscas unlock-all vs ferramentas reais ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@rustcheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Rust Cheats",
					description: "Política de privacidade para Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Política de privacidade para rustcheats.co e licenças Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler termos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informações que coletamos",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Detalhes de pagamento são processados pelo checkout Zadeyo — não armazenados em rustcheats.co.",
							],
						},
						{
							h2: "Como usamos os dados",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Seus direitos",
							paragraphs: [
								"Contacte support@rustcheats.co para suporte ou questões legais.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Rust Cheats",
					description: "Política de reembolso para Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Política de reembolso para rustcheats.co e licenças Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprovação de reembolso",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Como solicitar",
							paragraphs: [
								"Contacte support@rustcheats.co para suporte ou questões legais.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Rust Cheats",
					description: "Termos de uso para Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Termos de uso para rustcheats.co e licenças Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceitação dos termos",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aviso de risco",
							paragraphs: [
								"Rust Cheats reúne ESP wallhack, radar hack e Rust Aimbot indetectáveis para Rust no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Usar cheats pode violar os termos da equipe Rust — você assume todo risco de ban.",
							],
						},
						{
							h2: "Alterações de política",
							paragraphs: [
								"Contacte support@rustcheats.co para suporte ou questões legais.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Rust indetectable",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot per Rust su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Rust PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Rust Cheats è attivo per Rust su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Rust",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Rust Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Rust — checkout via Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Rust indetectable per Rust su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.",
					h1: "Rust Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Rust su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Galleria Rust Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Rust Cheats nel 2026",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Ideale per leggere packre nemiche in BR e farming run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Box giocatore e wallhack",
					description: "ESP Rust: box giocatore, marcatori loota e overlay wallhack. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. box giocatore, marcatori loota e overlay wallhack.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Controlli soft aim",
					description: "Aimbot Rust: soft aim, FOV e profili Aimbot per specie. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. soft aim, FOV e profili Aimbot per specie.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, controlli radar. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Funzioni.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. ESP, soft aim, controlli radar.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: licenze $35 mensili o $150 lifetime. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Prezzi.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. licenze $35 mensili o $150 lifetime.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: attivazione Windows PC e setup al primo avvio. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Setup.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. attivazione Windows PC e setup al primo avvio.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: stato patch Easy Anti-Cheat e note di rebuild. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Aggiornamenti.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. stato patch Easy Anti-Cheat e note di rebuild.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: domande su ESP, soft aim, consegna e Easy Anti-Cheat. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. domande su ESP, soft aim, consegna e Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: aiuto ordini e contatto supporto licenze. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Supporto.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. aiuto ordini e contatto supporto licenze.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: manutenzione undetected dopo patch Easy Anti-Cheat. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Cheat indetectable.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. manutenzione undetected dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | Visibilità ESP",
					description: "Rust Wallhack: wallhack ESP per giocatori, loot e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. wallhack ESP per giocatori, loot e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: segnali radar 2D per flanchi e rotazioni. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. segnali radar 2D per flanchi e rotazioni.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: come vengono gestiti gli aggiornamenti Easy Anti-Cheat per Rust hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. come vengono gestiti gli aggiornamenti Easy Anti-Cheat per Rust hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Rust 2026 | Guida acquirente",
					description: "Cheat Rust 2026: checklist rust cheats 2026 prima del checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Rust 2026",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Cheat Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Cheat Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheat Rust 2026",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. checklist rust cheats 2026 prima del checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Rust | Guida ESP e Aimbot",
					description: "Cheat Rust: pilastro Rust Cheats per ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Cheat Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. pilastro Rust Cheats per ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Rust Cheats | Accesso istantaneo",
					description: "Download Rust Cheats: download licenza digitale dopo il pagamento. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Rust Cheats",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Download Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Download Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Rust Cheats",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. download licenza digitale dopo il pagamento.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Rust | Toggle in-game",
					description: "Mod menu Rust: toggle ESP e soft aim in-client. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Mod menu Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Mod menu Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. toggle ESP e soft aim in-client.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Impostazioni soft aim",
					description: "Soft aim Rust: impostazioni soft aim fluide per Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. impostazioni soft aim fluide per Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Rust | Checklist acquirente",
					description: "Migliori cheat Rust: cosa confrontare prima di acquistare rust cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Migliori cheat Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Migliori cheat Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. cosa confrontare prima di acquistare rust cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Assist soft aim",
					description: "Hack aimbot Rust: assist undetected hack Aimbot per Rust. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. assist undetected hack Aimbot per Rust.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Box e loot",
					description: "Hack ESP Rust: box ESP hack, pin loota e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. box ESP hack, pin loota e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | Cosa significa",
					description: "Unlock all Rust: ricerche unlock-all vs veri strumenti ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Acquista Rust Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. ricerche unlock-all vs veri strumenti ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@rustcheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Rust Cheats",
					description: "Informativa privacy per Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Informativa privacy per rustcheats.co e licenze Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi i termini",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informazioni raccolte",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"I dati di pagamento sono elaborati dal checkout Zadeyo — non memorizzati su rustcheats.co.",
							],
						},
						{
							h2: "Uso dei dati",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "I tuoi diritti",
							paragraphs: [
								"Contatta support@rustcheats.co per supporto o richieste legali.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Rust Cheats",
					description: "Politica di rimborso per Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Politica di rimborso per rustcheats.co e licenze Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Consegna digitale",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approvazione rimborso",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Come richiedere",
							paragraphs: [
								"Contatta support@rustcheats.co per supporto o richieste legali.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Rust Cheats",
					description: "Termini di utilizzo per Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Termini di utilizzo per rustcheats.co e licenze Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Accettazione dei termini",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Avviso sui rischi",
							paragraphs: [
								"Rust Cheats unisce ESP wallhack, radar hack e Rust Aimbot indetectable per Rust su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Usare cheat può violare i termini del team Rust — assumi tutto il rischio di ban.",
							],
						},
						{
							h2: "Modifiche alla policy",
							paragraphs: [
								"Contatta support@rustcheats.co per supporto o richieste legali.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Rust Cheats",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Rust op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Rust PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Rust Cheats pakket is live voor Rust op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback va Rust Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Rust — checkout via Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected rust cheats voor Rust op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "Rust Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Rust: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Rust Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Rust Cheats in 2026",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Ideaal om vijandelijke packs te lezen in BR en farming run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: spelerboxen, karkas-markers en wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. spelerboxen, karkas-markers en wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim, FOV en Aimbot-profielen per soort. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. soft aim, FOV en Aimbot-profielen per soort.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar bediening. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Functies.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. ESP, soft aim, radar bediening.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 maandelijkse of $150 lifetime licenties. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Prijzen.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. $35 maandelijkse of $150 lifetime licenties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activatie en eerste-start setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Setup.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Windows PC activatie en eerste-start setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: Easy Anti-Cheat patchstatus en rebuild-notities. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Updates.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Easy Anti-Cheat patchstatus en rebuild-notities.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: vragen over ESP, soft aim, levering en Easy Anti-Cheat. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. vragen over ESP, soft aim, levering en Easy Anti-Cheat.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: bestelhulp en licentie support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Support.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. bestelhulp en licentie support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected onderhoud na Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Undetected Cheats.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. undetected onderhoud na Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP voor spelers, karkassen en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. wallhack ESP voor spelers, karkassen en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signalen voor flanks en rotaties. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. 2D radar signalen voor flanks en rotaties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: hoe Easy Anti-Cheat updates worden afgehandeld voor Rust hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. hoe Easy Anti-Cheat updates worden afgehandeld voor Rust hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | Buyer Guide",
					description: "Rust Cheats 2026: 2026 rust cheats checklist vóór checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Cheats 2026",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Cheats 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. 2026 rust cheats checklist vóór checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Rust Cheats | ESP Aimbot Guide",
					description: "Rust Cheats: Rust Cheats pijler voor ESP en Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Cheats",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Cheats.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Cheats",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Cheats pijler voor ESP en Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust Cheat Download | Instant Access",
					description: "Rust Cheat Download: digitale licentiedownload na betaling. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Cheat Download",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Cheat Download.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust Cheat Download",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust Cheat Download",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. digitale licentiedownload na betaling.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust Mod Menu | In-Game Toggles",
					description: "Rust Mod Menu: in-client ESP en soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Mod Menu",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Mod Menu.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust Mod Menu",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Mod Menu",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. in-client ESP en soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: vloeiende soft aim instellingen voor Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. vloeiende soft aim instellingen voor Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Rust Cheats | Buyer Checklist",
					description: "Beste Rust Cheats: wat te vergelijken vóór aankoop van rust cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Rust Cheats",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Beste Rust Cheats.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Beste Rust Cheats",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Rust Cheats",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. wat te vergelijken vóór aankoop van rust cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust Aimbot Hack | Soft Aim Assist",
					description: "Rust Aimbot Hack: undetected Aimbot hack assist voor Rust. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Aimbot Hack",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Aimbot Hack.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot Hack",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot Hack",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. undetected Aimbot hack assist voor Rust.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP Hack | Boxes & Loot",
					description: "Rust ESP Hack: ESP hack boxen, karkas pins en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "Rust ESP Hack",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust ESP Hack.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP Hack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP Hack",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. ESP hack boxen, karkas pins en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: unlock-all zoekopdrachten vs echte ESP en Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. unlock-all zoekopdrachten vs echte ESP en Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@rustcheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Rust Cheats",
					description: "Privacybeleid voor Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Privacybeleid voor rustcheats.co en Rust-licenties.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Voorwaarden lezen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informatie die we verzamelen",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Betalingsgegevens worden verwerkt via Zadeyo checkout — niet opgeslagen op rustcheats.co.",
							],
						},
						{
							h2: "Hoe we gegevens gebruiken",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Uw rechten",
							paragraphs: [
								"support@rustcheats.co voor support en juridische vragen.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Rust Cheats",
					description: "Restitutiebeleid voor Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Restitutiebeleid voor rustcheats.co en Rust-licenties.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale levering",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Restitutiegoedkeuring",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Hoe aanvragen",
							paragraphs: [
								"support@rustcheats.co voor support en juridische vragen.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Rust Cheats",
					description: "Gebruiksvoorwaarden voor Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Gebruiksvoorwaarden voor rustcheats.co en Rust-licenties.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptatie van voorwaarden",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risicowaarschuwing",
							paragraphs: [
								"Rust Cheats bundelt ESP wallhack, radar hack en Rust Aimbot als undetected pakket voor Rust op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Cheats gebruiken kan in strijd zijn met de voorwaarden van het Facepunch Studios — u neemt alle ban-risico's op u.",
							],
						},
						{
							h2: "Beleidswijzigingen",
							paragraphs: [
								"support@rustcheats.co voor support en juridische vragen.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Rust",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack i Aimbot do Rust na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Rust PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Rust Cheats jest aktywny dla Rust na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Rust",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Rust Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Rust — checkout przez Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Rust dla Rust na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "Rust Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Rust na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Galeria Rust Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Rust Cheats w 2026",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Idealny do czytania wrogich packów w BR i farming run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Player Boxes & Wallhack",
					description: "ESP Rust: boxy graczy, markery tusz i overlay wallhack. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. boxy graczy, markery tusz i overlay wallhack.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Soft Aim Controls",
					description: "Aimbot Rust: soft aim, FOV i profile Aimbot per gatunek. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. soft aim, FOV i profile Aimbot per gatunek.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, sterowanie radar. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Funkcje.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. ESP, soft aim, sterowanie radar.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: licencje $35 miesięcznie lub $150 lifetime. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Cennik.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. licencje $35 miesięcznie lub $150 lifetime.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: aktywacja Windows PC i konfiguracja pierwszego uruchomienia. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Instalacja.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. aktywacja Windows PC i konfiguracja pierwszego uruchomienia.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: status patchy Easy Anti-Cheat i notatki rebuild. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Aktualizacje.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. status patchy Easy Anti-Cheat i notatki rebuild.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pytania o ESP, soft aim, dostawę i Easy Anti-Cheat. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. pytania o ESP, soft aim, dostawę i Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: pomoc przy zamówieniu i kontakt wsparcia licencji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Wsparcie.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. pomoc przy zamówieniu i kontakt wsparcia licencji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected konserwacja po patchach Easy Anti-Cheat. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Cheaty undetected.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. undetected konserwacja po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP dla graczy, tusz i dystansu. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. wallhack ESP dla graczy, tusz i dystansu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar wskazówki dla flank i rotacji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. 2D radar wskazówki dla flank i rotacji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: jak obsługiwane są aktualizacje Easy Anti-Cheat dla Rust hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. jak obsługiwane są aktualizacje Easy Anti-Cheat dla Rust hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Rust 2026 | Buyer Guide",
					description: "Cheaty Rust 2026: checklista rust cheats 2026 przed checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Rust 2026",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Cheaty Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Cheaty Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheaty Rust 2026",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. checklista rust cheats 2026 przed checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Rust | ESP Aimbot Guide",
					description: "Cheaty Rust: filary Rust Cheats dla ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Cheaty Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. filary Rust Cheats dla ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Rust Cheats | Instant Access",
					description: "Pobieranie Rust Cheats: cyfrowe pobranie licencji po płatności. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Rust Cheats",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Pobieranie Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Pobieranie Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Rust Cheats",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. cyfrowe pobranie licencji po płatności.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Rust | In-Game Toggles",
					description: "Mod menu Rust: przełączniki ESP i soft aim w kliencie. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Mod menu Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Mod menu Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. przełączniki ESP i soft aim w kliencie.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Smooth Aim Settings",
					description: "Soft aim Rust: płynne ustawienia soft aim dla Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. płynne ustawienia soft aim dla Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Rust | Buyer Checklist",
					description: "Najlepsze cheaty Rust: co porównać przed zakupem rust cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Najlepsze cheaty Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Najlepsze cheaty Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. co porównać przed zakupem rust cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Soft Aim Assist",
					description: "Hack aimbot Rust: undetected Aimbot hack assist dla Rust. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. undetected Aimbot hack assist dla Rust.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Boxes & Loot",
					description: "Hack ESP Rust: boxy ESP hack, piny tusz i dystans. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. boxy ESP hack, piny tusz i dystans.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | What It Means",
					description: "Unlock all Rust: wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Kup Rust Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Rust Cheats",
					description: "Polityka prywatności dla Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Polityka prywatności dla rustcheats.co i licencji Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj warunki",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informacje, które zbieramy",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Dane płatności są przetwarzane przez checkout Zadeyo — nie przechowywane na rustcheats.co.",
							],
						},
						{
							h2: "Jak wykorzystujemy dane",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Twoje prawa",
							paragraphs: [
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Rust Cheats",
					description: "Polityka zwrotów dla Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Polityka zwrotów dla rustcheats.co i licencji Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dostawa cyfrowa",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Zatwierdzenie zwrotu",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Jak złożyć wniosek",
							paragraphs: [
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Rust Cheats",
					description: "Warunki użytkowania dla Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Warunki użytkowania dla rustcheats.co i licencji Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Akceptacja warunków",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Ostrzeżenie o ryzyku",
							paragraphs: [
								"Rust Cheats łączy ESP wallhack, radar hack i Rust Aimbot jako pakiet undetected dla Rust na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Korzystanie z cheatów może naruszać warunki zespołu Rust — bierzesz na siebie ryzyko bana.",
							],
						},
						{
							h2: "Zmiany polityki",
							paragraphs: [
								"support@rustcheats.co w sprawach wsparcia i prawnych.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Rust",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack и Aimbot для Rust на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Rust PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Rust Cheats активен для Rust на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Rust Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Rust — оплата через Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Rust для Rust на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "Rust Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Rust на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "Rust ESP — теги игроков hack",
					galleryTitle: "Галерея Rust Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Rust Cheats в 2026",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Идеально для чтения вражеских отрядов в BR и farming run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Боксы игроков и wallhack",
					description: "ESP Rust: боксы игроков, маркеры туш и wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. боксы игроков, маркеры туш и wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Управление soft aim",
					description: "Aimbot Rust: soft aim, FOV и профили Aimbot по видам. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. soft aim, FOV и профили Aimbot по видам.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, управление radar. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Функции.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. ESP, soft aim, управление radar.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: лицензии $35 в месяц или $150 lifetime. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Цены.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. лицензии $35 в месяц или $150 lifetime.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: активация на Windows PC и настройка первого запуска. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Установка.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. активация на Windows PC и настройка первого запуска.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: статус патчей Easy Anti-Cheat и заметки о rebuild. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Обновления.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. статус патчей Easy Anti-Cheat и заметки о rebuild.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: вопросы об ESP, soft aim, доставке и Easy Anti-Cheat. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. вопросы об ESP, soft aim, доставке и Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: помощь с заказом и контакт поддержки лицензий. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Поддержка.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. помощь с заказом и контакт поддержки лицензий.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected обслуживание после патчей Easy Anti-Cheat. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Undetected читы.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. undetected обслуживание после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | Видимость ESP",
					description: "Rust Wallhack: wallhack ESP для игроков, туш и дистанции. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. wallhack ESP для игроков, туш и дистанции.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar подсказки для флангов и ротаций. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. 2D radar подсказки для флангов и ротаций.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: как обрабатываются обновления Easy Anti-Cheat для Rust hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. как обрабатываются обновления Easy Anti-Cheat для Rust hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Rust 2026 | Гайд покупателя",
					description: "Читы Rust 2026: чеклист rust cheats 2026 перед checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Rust 2026",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Читы Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Читы Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Читы Rust 2026",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. чеклист rust cheats 2026 перед checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Rust | Гайд ESP и Aimbot",
					description: "Читы Rust: столп Rust Cheats для ESP и Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Читы Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. столп Rust Cheats для ESP и Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Rust Cheats | Мгновенный доступ",
					description: "Скачать Rust Cheats: цифровая загрузка лицензии после оплаты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Rust Cheats",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Скачать Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Скачать Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Rust Cheats",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. цифровая загрузка лицензии после оплаты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Rust | Игровые переключатели",
					description: "Мод-меню Rust: переключатели ESP и soft aim в клиенте. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Мод-меню Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Мод-меню Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. переключатели ESP и soft aim в клиенте.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Настройки soft aim",
					description: "Soft aim Rust: плавные настройки soft aim для Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. плавные настройки soft aim для Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Rust | Чеклист покупателя",
					description: "Лучшие читы Rust: что сравнить перед покупкой rust cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Лучшие читы Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Лучшие читы Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. что сравнить перед покупкой rust cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Rust | Soft aim ассист",
					description: "Хак aimbot Rust: undetected Aimbot hack assist для Rust. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Хак aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. undetected Aimbot hack assist для Rust.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Rust | Боксы и лут",
					description: "Хак ESP Rust: ESP hack боксы, pins туш и дистанция. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Хак ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Хак ESP Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. ESP hack боксы, pins туш и дистанция.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | Что это значит",
					description: "Unlock all Rust: поиски unlock-all vs настоящие ESP и Aimbot инструменты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купить Rust Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. поиски unlock-all vs настоящие ESP и Aimbot инструменты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@rustcheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Rust Cheats",
					description: "Политика конфиденциальности для Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Политика конфиденциальности для rustcheats.co и лицензий Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать условия",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Информация, которую мы собираем",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Платёжные данные обрабатываются через checkout Zadeyo — не хранятся на rustcheats.co.",
							],
						},
						{
							h2: "Как мы используем данные",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Ваши права",
							paragraphs: [
								"support@rustcheats.co для поддержки и юридических вопросов.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Rust Cheats",
					description: "Политика возврата для Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Политика возврата для rustcheats.co и лицензий Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифровая доставка",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Одобрение возврата",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Как запросить",
							paragraphs: [
								"support@rustcheats.co для поддержки и юридических вопросов.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Rust Cheats",
					description: "Условия использования для Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Условия использования для rustcheats.co и лицензий Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Принятие условий",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Предупреждение о рисках",
							paragraphs: [
								"Rust Cheats объединяет ESP wallhack, radar hack и Rust Aimbot в undetected пакете для Rust на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Использование читов может нарушать условия команды Rust — вы принимаете на себя риск бана.",
							],
						},
						{
							h2: "Изменения политики",
							paragraphs: [
								"support@rustcheats.co для поддержки и юридических вопросов.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Rust hileleri",
					accentShort: "Rust Cheats",
					subtitle: "Rust Windows PC için ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "Rust PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Rust Cheats paketi Rust Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Rust Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Rust için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "Rust için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "Rust Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "Rust Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Rust Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Rust Cheats",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. BR ve farming run'da düşman pack okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: oyuncu kutuları, leş işaretleri ve wallhack overlay'leri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. oyuncu kutuları, leş işaretleri ve wallhack overlay'leri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim, FOV ve türe özel Aimbot profilleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. soft aim, FOV ve türe özel Aimbot profilleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar kontrolleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. ESP, soft aim, radar kontrolleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: aylık $35 veya lifetime $150 lisanslar. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. aylık $35 veya lifetime $150 lisanslar.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC aktivasyonu ve ilk açılış kurulumu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Windows PC aktivasyonu ve ilk açılış kurulumu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: Easy Anti-Cheat yama durumu ve rebuild notları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Easy Anti-Cheat yama durumu ve rebuild notları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, teslimat ve Easy Anti-Cheat soruları. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. SSS.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. ESP, soft aim, teslimat ve Easy Anti-Cheat soruları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: sipariş yardımı ve lisans destek iletişimi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Destek.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. sipariş yardımı ve lisans destek iletişimi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: Easy Anti-Cheat yamalarından sonra undetected bakım. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Easy Anti-Cheat yamalarından sonra undetected bakım.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: oyuncular, leşler ve mesafe için wallhack ESP. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. oyuncular, leşler ve mesafe için wallhack ESP.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: flank ve rotasyonlar için 2D radar ipuçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. flank ve rotasyonlar için 2D radar ipuçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat bypass | Patch Maintenance",
					description: "Easy Anti-Cheat bypass: Rust hacks için Easy Anti-Cheat güncellemelerinin nasıl yönetildiği. anında dijital teslimat. undetected — Windows PC.",
					h1: "Easy Anti-Cheat bypass",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Easy Anti-Cheat bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat bypass",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust hacks için Easy Anti-Cheat güncellemelerinin nasıl yönetildiği.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Hileleri 2026 | Buyer Guide",
					description: "Rust Hileleri 2026: checkout öncesi 2026 rust cheats kontrol listesi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Hileleri 2026",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Hileleri 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Hileleri 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Hileleri 2026",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. checkout öncesi 2026 rust cheats kontrol listesi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				hacks: {
					title: "Rust Hileleri | ESP Aimbot Guide",
					description: "Rust Hileleri: ESP ve Aimbot için Rust Cheats sütunu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Hileleri",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Hileleri.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Hileleri",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Hileleri",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. ESP ve Aimbot için Rust Cheats sütunu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust Hile İndir | Instant Access",
					description: "Rust Hile İndir: ödeme sonrası dijital lisans indirme. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Hile İndir",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Hile İndir.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust Hile İndir",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust Hile İndir",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. ödeme sonrası dijital lisans indirme.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust Mod Menü | In-Game Toggles",
					description: "Rust Mod Menü: istemci içi ESP ve soft aim toggle'ları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Mod Menü",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Mod Menü.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust Mod Menü",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Mod Menü",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. istemci içi ESP ve soft aim toggle'ları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: Windows PC için akıcı soft aim ayarları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Windows PC için akıcı soft aim ayarları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Rust Hileleri | Buyer Checklist",
					description: "En İyi Rust Hileleri: rust cheats satın almadan önce ne karşılaştırılmalı. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Rust Hileleri",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. En İyi Rust Hileleri.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "En İyi Rust Hileleri",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Rust Hileleri",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. rust cheats satın almadan önce ne karşılaştırılmalı.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust Aimbot Hilesi | Soft Aim Assist",
					description: "Rust Aimbot Hilesi: Rust için undetected Aimbot hack assist. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Aimbot Hilesi",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Aimbot Hilesi.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot Hilesi",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot Hilesi",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust için undetected Aimbot hack assist.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP Hilesi | Boxes & Loot",
					description: "Rust ESP Hilesi: ESP hack kutuları, leş pinleri ve mesafe. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust ESP Hilesi",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust ESP Hilesi.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP Hilesi",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP Hilesi",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. ESP hack kutuları, leş pinleri ve mesafe.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: unlock-all aramaları vs gerçek ESP ve Aimbot araçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. unlock-all aramaları vs gerçek ESP ve Aimbot araçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@rustcheats.co.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Rust Cheats",
					description: "Gizlilik politikası Rust Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Gizlilik politikası rustcheats.co ve Rust lisansları için.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Şartları oku",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Topladığımız bilgiler",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Ödeme bilgileri Zadeyo checkout ile işlenir — rustcheats.co'da saklanmaz.",
							],
						},
						{
							h2: "Verileri nasıl kullanıyoruz",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Haklarınız",
							paragraphs: [
								"Destek ve yasal sorular için support@rustcheats.co.",
								"E-posta: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Rust Cheats",
					description: "İade politikası Rust Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "İade politikası",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. İade politikası rustcheats.co ve Rust lisansları için.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dijital teslimat",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "İade onayı",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Nasıl talep edilir",
							paragraphs: [
								"Destek ve yasal sorular için support@rustcheats.co.",
								"E-posta: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Rust Cheats",
					description: "Kullanım şartları Rust Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Kullanım şartları rustcheats.co ve Rust lisansları için.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Şartların kabulü",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk uyarısı",
							paragraphs: [
								"Rust Cheats, Rust için Windows PC üzerinde ESP wallhack, radar hack ve Rust Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Hile kullanmak Rust ekibi şartlarını ihlal edebilir — tüm ban riskini üstlenirsiniz.",
							],
						},
						{
							h2: "Politika değişiklikleri",
							paragraphs: [
								"Destek ve yasal sorular için support@rustcheats.co.",
								"E-posta: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Rust غير مكتشف",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Rust على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Rust PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Rust Cheats نشطة لـ Rust على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Rust Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Rust — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش Rust undetected لـ Rust على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "Rust Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Rust على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "معرض Rust Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Rust Cheats في 2026",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. مثالي لقراءة فرق العدو في BR وfarming run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Player Boxes & Wallhack",
					description: "ESP Rust: صناديق اللاعبين وعلامات الجيفة وoverlays wallhack. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. صناديق اللاعبين وعلامات الجيفة وoverlays wallhack.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Soft Aim Controls",
					description: "Aimbot Rust: soft aim وFOV وملفات Aimbot لكل نوع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. soft aim وFOV وملفات Aimbot لكل نوع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP وsoft aim وضوابط radar. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. الميزات.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ESP وsoft aim وضوابط radar.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: تراخيص $35 شهرياً أو $150 lifetime. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. الأسعار.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. تراخيص $35 شهرياً أو $150 lifetime.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: تفعيل Windows PC وإعداد أول تشغيل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. التثبيت.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. تفعيل Windows PC وإعداد أول تشغيل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: حالة patch Easy Anti-Cheat وملاحظات rebuild. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. التحديثات.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. حالة patch Easy Anti-Cheat وملاحظات rebuild.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: أسئلة ESP وsoft aim والتسليم وEasy Anti-Cheat. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. الأسئلة.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. أسئلة ESP وsoft aim والتسليم وEasy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: مساعدة الطلبات واتصال دعم التراخيص. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. الدعم.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. مساعدة الطلبات واتصال دعم التراخيص.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: صيانة undetected بعد patch Easy Anti-Cheat. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. غش undetected.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. صيانة undetected بعد patch Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP للاعبين والجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. wallhack ESP للاعبين والجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: كيف تُدار تحديثات Easy Anti-Cheat لـ Rust hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. كيف تُدار تحديثات Easy Anti-Cheat لـ Rust hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Rust 2026 | Buyer Guide",
					description: "غش Rust 2026: قائمة rust cheats 2026 قبل checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Rust 2026",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. غش Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "غش Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "غش Rust 2026",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. قائمة rust cheats 2026 قبل checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Rust | ESP Aimbot Guide",
					description: "غش Rust: ركيزة Rust Cheats لـ ESP وAimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. غش Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "غش Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ركيزة Rust Cheats لـ ESP وAimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Rust Cheats | Instant Access",
					description: "تحميل Rust Cheats: تنزيل ترخيص رقمي بعد الدفع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Rust Cheats",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. تحميل Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "تحميل Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Rust Cheats",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. تنزيل ترخيص رقمي بعد الدفع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Rust | In-Game Toggles",
					description: "قائمة مود Rust: مفاتيح ESP وsoft aim داخل العميل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. قائمة مود Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "قائمة مود Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. مفاتيح ESP وsoft aim داخل العميل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Smooth Aim Settings",
					description: "Soft aim Rust: إعدادات soft aim سلسة لـ Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. إعدادات soft aim سلسة لـ Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Rust | Buyer Checklist",
					description: "أفضل غش Rust: ما يجب مقارنته قبل شراء rust cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. أفضل غش Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "أفضل غش Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ما يجب مقارنته قبل شراء rust cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Rust | Soft Aim Assist",
					description: "هاك Aimbot Rust: مساعدة hack Aimbot undetected لـ Rust. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. هاك Aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. مساعدة hack Aimbot undetected لـ Rust.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Rust | Boxes & Loot",
					description: "هاك ESP Rust: صناديق ESP hack وpins الجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. هاك ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "هاك ESP Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. صناديق ESP hack وpins الجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | What It Means",
					description: "Unlock all Rust: بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "اشترِ Rust Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@rustcheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Rust Cheats",
					description: "سياسة الخصوصية لـ Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. سياسة الخصوصية لـ rustcheats.co وتراخيص Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تُعالَج تفاصيل الدفع عبر checkout Zadeyo — ولا تُخزَّن على rustcheats.co.",
							],
						},
						{
							h2: "كيف نستخدم البيانات",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@rustcheats.co للدعم والطلبات القانونية.",
								"البريد: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Rust Cheats",
					description: "سياسة الاسترداد لـ Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. سياسة الاسترداد لـ rustcheats.co وتراخيص Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@rustcheats.co للدعم والطلبات القانونية.",
								"البريد: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Rust Cheats",
					description: "شروط الاستخدام لـ Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. شروط الاستخدام لـ rustcheats.co وتراخيص Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "إخلاء المسؤولية عن المخاطر",
							paragraphs: [
								"Rust Cheats يجمع ESP wallhack وradar hack وRust Aimbot غير مكتشف لـ Rust على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"استخدام الغش قد ينتهك شروط فريق Rust — أنت تتحمل كل مخاطر الحظر.",
							],
						},
						{
							h2: "تغييرات السياسة",
							paragraphs: [
								"support@rustcheats.co للدعم والطلبات القانونية.",
								"البريد: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Rustチート",
					accentShort: "Rust Cheats",
					subtitle: "Rust Windows PC向けESP wallhack、radar hack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "Rust PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Rust CheatsパッケージはRust Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Rust Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Rust向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "Rust向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "Rust Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "Rust Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "rust cheats hero ESP aimbot wallhack",
					galleryTitle: "Rust Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にRust Cheatsを選ぶ理由",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。BRとfarming runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: プレイヤーボックス、死体マーカー、wallhackオーバーレイ. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。プレイヤーボックス、死体マーカー、wallhackオーバーレイ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim、FOV、種別ごとのAimbotプロファイル. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。soft aim、FOV、種別ごとのAimbotプロファイル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP、soft aim、radarコントロール. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。機能.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。ESP、soft aim、radarコントロール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: 月額$35またはlifetime $150ライセンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。料金.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。月額$35またはlifetime $150ライセンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PCアクティベーションと初回起動セットアップ. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Windows PCアクティベーションと初回起動セットアップ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheatパッチ状況とrebuildメモ. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。更新.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Easy Anti-Cheatパッチ状況とrebuildメモ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP、soft aim、配信、Easy Anti-Cheatに関する質問. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。ESP、soft aim、配信、Easy Anti-Cheatに関する質問.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: 注文ヘルプとライセンスサポート連絡先. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。注文ヘルプとライセンスサポート連絡先.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: Easy Anti-Cheatパッチ後のundetectedメンテナンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Easy Anti-Cheatパッチ後のundetectedメンテナンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: プレイヤー、死体、距離向けwallhack ESP. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。プレイヤー、死体、距離向けwallhack ESP.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 側面攻撃とローテーション向け2D radarキュー. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。側面攻撃とローテーション向け2D radarキュー.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Rust hacks向けEasy Anti-Cheat更新の対応方法. 即時デジタル配信. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust hacks向けEasy Anti-Cheat更新の対応方法.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | Buyer Guide",
					description: "Rust Cheats 2026: checkout前の2026 rust cheatsチェックリスト. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Cheats 2026",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Cheats 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Cheats 2026",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。checkout前の2026 rust cheatsチェックリスト.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Rust Cheats | ESP Aimbot Guide",
					description: "Rust Cheats: ESPとAimbotのRust Cheats柱. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Cheats",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Cheats.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Cheats",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。ESPとAimbotのRust Cheats柱.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust Cheat Download | Instant Access",
					description: "Rust Cheat Download: 支払い後のデジタルライセンスダウンロード. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Cheat Download",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Cheat Download.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust Cheat Download",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust Cheat Download",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。支払い後のデジタルライセンスダウンロード.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust Mod Menu | In-Game Toggles",
					description: "Rust Mod Menu: クライアント内ESPとsoft aimトグル. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Mod Menu",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Mod Menu.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust Mod Menu",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Mod Menu",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。クライアント内ESPとsoft aimトグル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: Windows PC向けスムーズなsoft aim設定. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Windows PC向けスムーズなsoft aim設定.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Rustチート | Buyer Checklist",
					description: "最強Rustチート: rust cheats購入前に比較すべき点. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Rustチート",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。最強Rustチート.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "最強Rustチート",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Rustチート",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。rust cheats購入前に比較すべき点.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust Aimbot Hack | Soft Aim Assist",
					description: "Rust Aimbot Hack: Rust向けundetected Aimbot hack assist. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Aimbot Hack",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Aimbot Hack.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot Hack",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot Hack",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust向けundetected Aimbot hack assist.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP Hack | Boxes & Loot",
					description: "Rust ESP Hack: ESP hackボックス、死体pin、距離. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust ESP Hack",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust ESP Hack.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP Hack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP Hack",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。ESP hackボックス、死体pin、距離.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: unlock-all検索 vs 本物のESPとAimbotツール. 即時デジタル配信. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。unlock-all検索 vs 本物のESPとAimbotツール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@rustcheats.co",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Rust Cheats",
					description: "プライバシーポリシー Rust Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。プライバシーポリシー rustcheats.coおよびRustライセンス向け。",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約を読む",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"支払い情報はZadeyo checkoutで処理され、rustcheats.coには保存されません。",
							],
						},
						{
							h2: "データの利用方法",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@rustcheats.co",
								"メール: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Rust Cheats",
					description: "返金ポリシー Rust Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "返金ポリシー",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。返金ポリシー rustcheats.coおよびRustライセンス向け。",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@rustcheats.co",
								"メール: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Rust Cheats",
					description: "利用規約 Rust Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "利用規約",
					intro: "Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。利用規約 rustcheats.coおよびRustライセンス向け。",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク免責",
							paragraphs: [
								"Rust CheatsはRust向けWindows PC用ESP wallhack、radar hack、Rust Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"チートの使用はRustチームの利用規約に違反する可能性があり、BANリスクはすべて自己負担です。",
							],
						},
						{
							h2: "ポリシー変更",
							paragraphs: [
								"サポート・法務: support@rustcheats.co",
								"メール: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Rust 치트",
					accentShort: "Rust Cheats",
					subtitle: "Rust Windows PC용 ESP wallhack, radar hack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "Rust PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Rust Cheats 패키지는 Rust Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Rust Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Rust용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "Rust undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "Rust Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "Rust Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "rust cheats hero ESP aimbot wallhack",
					galleryTitle: "Rust Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Rust Cheats를 선택하는 이유",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. BR 및 farming run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: 플레이어 박스, 시체 마커, wallhack 오버레이. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 플레이어 박스, 시체 마커, wallhack 오버레이.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim, FOV, 종별 Aimbot 프로필. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. soft aim, FOV, 종별 Aimbot 프로필.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar 컨트롤. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. ESP, soft aim, radar 컨트롤.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: 월 $35 또는 lifetime $150 라이선스. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 월 $35 또는 lifetime $150 라이선스.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC 활성화 및 첫 실행 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Windows PC 활성화 및 첫 실행 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: Easy Anti-Cheat 패치 상태 및 rebuild 메모. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Easy Anti-Cheat 패치 상태 및 rebuild 메모.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, 배송, Easy Anti-Cheat 질문. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. ESP, soft aim, 배송, Easy Anti-Cheat 질문.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: 주문 도움 및 라이선스 지원 연락처. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 주문 도움 및 라이선스 지원 연락처.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: Easy Anti-Cheat 패치 후 undetected 유지보수. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Easy Anti-Cheat 패치 후 undetected 유지보수.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: 플레이어, 시체, 거리용 wallhack ESP. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 플레이어, 시체, 거리용 wallhack ESP.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 측면 공격과 로테이션용 2D radar 신호. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 측면 공격과 로테이션용 2D radar 신호.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Rust hacks용 Easy Anti-Cheat 업데이트 처리 방법. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust hacks용 Easy Anti-Cheat 업데이트 처리 방법.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | Buyer Guide",
					description: "Rust Cheats 2026: checkout 전 2026 rust cheats 체크리스트. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust Cheats 2026",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust Cheats 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. checkout 전 2026 rust cheats 체크리스트.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Rust Cheats | ESP Aimbot Guide",
					description: "Rust Cheats: ESP와 Aimbot을 위한 Rust Cheats 기둥. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust Cheats",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust Cheats.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Cheats",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. ESP와 Aimbot을 위한 Rust Cheats 기둥.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust Cheat Download | Instant Access",
					description: "Rust Cheat Download: 결제 후 디지털 라이선스 다운로드. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust Cheat Download",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust Cheat Download.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust Cheat Download",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust Cheat Download",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 결제 후 디지털 라이선스 다운로드.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust 모드 메뉴 | In-Game Toggles",
					description: "Rust 모드 메뉴: 클라이언트 내 ESP 및 soft aim 토글. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust 모드 메뉴",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust 모드 메뉴.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust 모드 메뉴",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust 모드 메뉴",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 클라이언트 내 ESP 및 soft aim 토글.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: Windows PC용 부드러운 soft aim 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Windows PC용 부드러운 soft aim 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Rust 치트 | Buyer Checklist",
					description: "최고의 Rust 치트: rust cheats 구매 전 비교할 항목. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Rust 치트",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 최고의 Rust 치트.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "최고의 Rust 치트",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Rust 치트",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. rust cheats 구매 전 비교할 항목.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust 에임봇 핵 | Soft Aim Assist",
					description: "Rust 에임봇 핵: Rust용 undetected Aimbot hack assist. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust 에임봇 핵",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust 에임봇 핵.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust 에임봇 핵",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust 에임봇 핵",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust용 undetected Aimbot hack assist.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP 핵 | Boxes & Loot",
					description: "Rust ESP 핵: ESP hack 박스, 시체 pin, 거리. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust ESP 핵",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust ESP 핵.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP 핵",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP 핵",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. ESP hack 박스, 시체 pin, 거리.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: unlock-all 검색 vs 실제 ESP 및 Aimbot 도구. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. unlock-all 검색 vs 실제 ESP 및 Aimbot 도구.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@rustcheats.co",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Rust Cheats",
					description: "개인정보 처리방침 Rust Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 개인정보 처리방침 rustcheats.co 및 Rust 라이선스용.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "이용 약관 읽기",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "수집하는 정보",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"결제 정보는 Zadeyo checkout에서 처리되며 rustcheats.co에 저장되지 않습니다.",
							],
						},
						{
							h2: "데이터 사용 방법",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "귀하의 권리",
							paragraphs: [
								"지원 및 법무: support@rustcheats.co",
								"이메일: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Rust Cheats",
					description: "환불 정책 Rust Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "환불 정책",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 환불 정책 rustcheats.co 및 Rust 라이선스용.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "디지털 배송",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "환불 승인",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "신청 방법",
							paragraphs: [
								"지원 및 법무: support@rustcheats.co",
								"이메일: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Rust Cheats",
					description: "이용 약관 Rust Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "이용 약관",
					intro: "Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 이용 약관 rustcheats.co 및 Rust 라이선스용.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "약관 동의",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "위험 고지",
							paragraphs: [
								"Rust Cheats는 Rust Windows PC용 ESP wallhack, radar hack, Rust Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"치트 사용은 Rust 팀 약관 위반일 수 있으며 모든 밴 위험은 본인 부담입니다.",
							],
						},
						{
							h2: "정책 변경",
							paragraphs: [
								"지원 및 법무: support@rustcheats.co",
								"이메일: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Rust作弊",
					accentShort: "Rust Cheats",
					subtitle: "适用于Rust Windows PC的ESP wallhack、radar hack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "Rust PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Rust Cheats套餐已在Rust Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Rust Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Rust undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "Rust undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "Rust Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "Rust Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "rust cheats hero ESP aimbot wallhack",
					galleryTitle: "Rust Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Rust Cheats的原因",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。适合在BR和farming run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: 玩家方框、尸体标记和wallhack overlay. 即时数字交付. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。玩家方框、尸体标记和wallhack overlay.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim、FOV和按物种的Aimbot配置. 即时数字交付. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。soft aim、FOV和按物种的Aimbot配置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP、soft aim、radar控制. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。功能.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。ESP、soft aim、radar控制.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: 月付$35或lifetime $150许可证. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。价格.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。月付$35或lifetime $150许可证.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC激活和首次启动设置. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。安装.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Windows PC激活和首次启动设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat补丁状态和rebuild说明. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。更新.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Easy Anti-Cheat补丁状态和rebuild说明.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP、soft aim、交付和Easy Anti-Cheat问题. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。常见问题.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。ESP、soft aim、交付和Easy Anti-Cheat问题.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: 订单帮助和许可证支持联系方式. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。支持.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。订单帮助和许可证支持联系方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: Easy Anti-Cheat补丁后的undetected维护. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Easy Anti-Cheat补丁后的undetected维护.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: 玩家、尸体和距离的wallhack ESP. 即时数字交付. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。玩家、尸体和距离的wallhack ESP.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 侧翼和轮换的2D radar提示. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。侧翼和轮换的2D radar提示.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Rust hacks的Easy Anti-Cheat更新处理方式. 即时数字交付. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust hacks的Easy Anti-Cheat更新处理方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust作弊 2026 | Buyer Guide",
					description: "Rust作弊 2026: checkout前的2026 rust cheats清单. 即时数字交付. undetected — Windows PC.",
					h1: "Rust作弊 2026",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust作弊 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust作弊 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust作弊 2026",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。checkout前的2026 rust cheats清单.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Rust作弊 | ESP Aimbot Guide",
					description: "Rust作弊: ESP和Aimbot的Rust Cheats支柱. 即时数字交付. undetected — Windows PC.",
					h1: "Rust作弊",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust作弊.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust作弊",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust作弊",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。ESP和Aimbot的Rust Cheats支柱.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust作弊下载 | Instant Access",
					description: "Rust作弊下载: 付款后的数字许可证下载. 即时数字交付. undetected — Windows PC.",
					h1: "Rust作弊下载",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust作弊下载.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust作弊下载",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust作弊下载",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。付款后的数字许可证下载.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust修改菜单 | In-Game Toggles",
					description: "Rust修改菜单: 客户端内ESP和soft aim开关. 即时数字交付. undetected — Windows PC.",
					h1: "Rust修改菜单",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust修改菜单.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust修改菜单",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust修改菜单",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。客户端内ESP和soft aim开关.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: Windows PC的流畅soft aim设置. 即时数字交付. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Windows PC的流畅soft aim设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Rust作弊 | Buyer Checklist",
					description: "最佳Rust作弊: 购买rust cheats前应比较的内容. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Rust作弊",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。最佳Rust作弊.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "最佳Rust作弊",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Rust作弊",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。购买rust cheats前应比较的内容.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust自瞄外挂 | Soft Aim Assist",
					description: "Rust自瞄外挂: Rust的undetected Aimbot hack assist. 即时数字交付. undetected — Windows PC.",
					h1: "Rust自瞄外挂",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust自瞄外挂.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust自瞄外挂",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust自瞄外挂",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust的undetected Aimbot hack assist.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP外挂 | Boxes & Loot",
					description: "Rust ESP外挂: ESP hack方框、尸体pin和距离. 即时数字交付. undetected — Windows PC.",
					h1: "Rust ESP外挂",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust ESP外挂.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP外挂",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP外挂",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。ESP hack方框、尸体pin和距离.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: unlock-all搜索 vs 真正的ESP和Aimbot工具. 即时数字交付. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "购买 Rust Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。unlock-all搜索 vs 真正的ESP和Aimbot工具.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@rustcheats.co",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Rust Cheats",
					description: "隐私政策 Rust Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。隐私政策 适用于 rustcheats.co 和 Rust 许可证。",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读使用条款",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "我们收集的信息",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"支付详情由 Zadeyo checkout 处理 — 不存储在 rustcheats.co。",
							],
						},
						{
							h2: "数据使用方式",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "您的权利",
							paragraphs: [
								"支持与法务：support@rustcheats.co",
								"邮箱: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Rust Cheats",
					description: "退款政策 Rust Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。退款政策 适用于 rustcheats.co 和 Rust 许可证。",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "数字交付",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "退款批准",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "如何申请",
							paragraphs: [
								"支持与法务：support@rustcheats.co",
								"邮箱: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Rust Cheats",
					description: "使用条款 Rust Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。使用条款 适用于 rustcheats.co 和 Rust 许可证。",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "接受条款",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "风险免责声明",
							paragraphs: [
								"Rust Cheats为RustWindows PC提供ESP wallhack、radar hack和Rust Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"使用作弊可能违反 Rust 团队条款 — 您承担所有封禁风险。",
							],
						},
						{
							h2: "政策变更",
							paragraphs: [
								"支持与法务：support@rustcheats.co",
								"邮箱: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected rust cheats",
					accentShort: "Rust Cheats",
					subtitle: "Rust Windows PC के लिए ESP wallhack, radar hack और Aimbot — Easy Anti-Cheat maintenance शामिल।",
					subtitleShort: "Rust PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Rust Cheats पैकेज Rust Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Easy Anti-Cheat maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Rust Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Rust के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "Rust undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.",
					h1: "Rust Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "Rust Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.",
					imageAlt: "rust cheats hero ESP aimbot wallhack",
					galleryTitle: "Rust Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Rust Cheats क्यों",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। BR और farming run में दुश्मन pack पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: प्लेयर बॉक्स, loot markers और wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। प्लेयर बॉक्स, loot markers और wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim, FOV और प्रजाति-वार Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। soft aim, FOV और प्रजाति-वार Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly या $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। $35 monthly या $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation और first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Windows PC activation और first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: Easy Anti-Cheat patch status और rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Easy Anti-Cheat patch status और rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery और Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। ESP, soft aim, delivery और Easy Anti-Cheat questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help और license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। order help और license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: Easy Anti-Cheat patches के बाद undetected maintenance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Easy Anti-Cheat patches के बाद undetected maintenance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: players, loot और distance के लिए wallhack ESP. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। players, loot और distance के लिए wallhack ESP.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: flanks और rotations के लिए 2D radar cues. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। flanks और rotations के लिए 2D radar cues.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: Rust hacks के लिए Easy Anti-Cheat updates कैसे handle होते हैं. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust hacks के लिए Easy Anti-Cheat updates कैसे handle होते हैं.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | Buyer Guide",
					description: "Rust Cheats 2026: checkout से पहले 2026 rust cheats checklist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Cheats 2026",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Cheats 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। checkout से पहले 2026 rust cheats checklist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Rust Cheats | ESP Aimbot Guide",
					description: "Rust Cheats: ESP और Aimbot के लिए Rust Cheats pillar. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Cheats",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Cheats.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Cheats",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। ESP और Aimbot के लिए Rust Cheats pillar.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust Cheat Download | Instant Access",
					description: "Rust Cheat Download: payment के बाद digital license download. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Cheat Download",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Cheat Download.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust Cheat Download",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust Cheat Download",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। payment के बाद digital license download.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust Mod Menu | In-Game Toggles",
					description: "Rust Mod Menu: in-client ESP और soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Mod Menu",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Mod Menu.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust Mod Menu",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Mod Menu",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। in-client ESP और soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: Windows PC के लिए smooth soft aim settings. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Windows PC के लिए smooth soft aim settings.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Rust Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ Rust Cheats: rust cheats खरीदने से पहले क्या compare करें. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Rust Cheats",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Rust Cheats.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "सर्वश्रेष्ठ Rust Cheats",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Rust Cheats",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। rust cheats खरीदने से पहले क्या compare करें.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust Aimbot Hack | Soft Aim Assist",
					description: "Rust Aimbot Hack: Rust के लिए undetected Aimbot hack assist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Aimbot Hack",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Aimbot Hack.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot Hack",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot Hack",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust के लिए undetected Aimbot hack assist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP Hack | Boxes & Loot",
					description: "Rust ESP Hack: ESP hack boxes, loot pins और distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust ESP Hack",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust ESP Hack.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP Hack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP Hack",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। ESP hack boxes, loot pins और distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: unlock-all searches vs real ESP और Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Rust Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। unlock-all searches vs real ESP और Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@rustcheats.co",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Rust Cheats",
					description: "गोपनीयता नीति Rust Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। गोपनीयता नीति rustcheats.co और Rust लाइसेंस के लिए।",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "शर्तें पढ़ें",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "हम जो जानकारी एकत्र करते हैं",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"भुगतान विवरण Zadeyo checkout द्वारा संसाधित — rustcheats.co पर संग्रहीत नहीं।",
							],
						},
						{
							h2: "हम डेटा का उपयोग कैसे करते हैं",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "आपके अधिकार",
							paragraphs: [
								"सहायता: support@rustcheats.co",
								"ईमेल: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Rust Cheats",
					description: "रिफंड नीति Rust Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। रिफंड नीति rustcheats.co और Rust लाइसेंस के लिए।",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "डिजिटल डिलीवरी",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "रिफंड स्वीकृति",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "कैसे अनुरोध करें",
							paragraphs: [
								"सहायता: support@rustcheats.co",
								"ईमेल: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Rust Cheats",
					description: "उपयोग की शर्तें Rust Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। उपयोग की शर्तें rustcheats.co और Rust लाइसेंस के लिए।",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "शर्तों की स्वीकृति",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "जोखिम अस्वीकरण",
							paragraphs: [
								"Rust Cheats Rust के लिए Windows PC पर ESP wallhack, radar hack और Rust Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"cheat का उपयोग Rust टीम की शर्तों का उल्लंघन हो सकता है — आप सभी ban जोखिम स्वीकार करते हैं।",
							],
						},
						{
							h2: "नीति परिवर्तन",
							paragraphs: [
								"सहायता: support@rustcheats.co",
								"ईमेल: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Rust undetected",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Rust di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Rust PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Rust Cheats aktif untuk Rust di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Rust Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Rust — checkout via Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Rust undetected untuk Rust di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.",
					h1: "Rust Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Rust di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Galeri Rust Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Rust Cheats di 2026",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Ideal membaca pack musuh di BR dan farming run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Player Boxes & Wallhack",
					description: "ESP Rust: kotak pemain, penanda bangkai, dan overlay wallhack. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. kotak pemain, penanda bangkai, dan overlay wallhack.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Soft Aim Controls",
					description: "Aimbot Rust: soft aim, FOV, dan profil Aimbot per spesies. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. soft aim, FOV, dan profil Aimbot per spesies.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, kontrol radar. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Fitur.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. ESP, soft aim, kontrol radar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: lisensi $35 bulanan atau $150 lifetime. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Harga.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. lisensi $35 bulanan atau $150 lifetime.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: aktivasi Windows PC dan setup peluncuran pertama. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Setup.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. aktivasi Windows PC dan setup peluncuran pertama.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: status patch Easy Anti-Cheat dan catatan rebuild. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Pembaruan.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. status patch Easy Anti-Cheat dan catatan rebuild.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pertanyaan ESP, soft aim, pengiriman, dan Easy Anti-Cheat. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. pertanyaan ESP, soft aim, pengiriman, dan Easy Anti-Cheat.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: bantuan pesanan dan kontak dukungan lisensi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Dukungan.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. bantuan pesanan dan kontak dukungan lisensi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: pemeliharaan undetected setelah patch Easy Anti-Cheat. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Cheat undetected.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. pemeliharaan undetected setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP untuk pemain, bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. wallhack ESP untuk pemain, bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: petunjuk radar 2D untuk flanking dan rotasi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. petunjuk radar 2D untuk flanking dan rotasi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cara pembaruan Easy Anti-Cheat ditangani untuk Rust hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. cara pembaruan Easy Anti-Cheat ditangani untuk Rust hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Rust 2026 | Buyer Guide",
					description: "Cheat Rust 2026: checklist rust cheats 2026 sebelum checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Rust 2026",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Cheat Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Cheat Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheat Rust 2026",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. checklist rust cheats 2026 sebelum checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Rust | ESP Aimbot Guide",
					description: "Cheat Rust: pilar Rust Cheats untuk ESP dan Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Cheat Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. pilar Rust Cheats untuk ESP dan Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Rust | Instant Access",
					description: "Download Cheat Rust: unduhan lisensi digital setelah pembayaran. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Download Cheat Rust.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Download Cheat Rust",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. unduhan lisensi digital setelah pembayaran.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Rust | In-Game Toggles",
					description: "Menu mod Rust: toggle ESP dan soft aim in-client. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Menu mod Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Menu mod Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. toggle ESP dan soft aim in-client.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Smooth Aim Settings",
					description: "Soft aim Rust: pengaturan soft aim halus untuk Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. pengaturan soft aim halus untuk Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Rust terbaik | Buyer Checklist",
					description: "Cheat Rust terbaik: apa yang dibandingkan sebelum membeli rust cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Rust terbaik",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Cheat Rust terbaik.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Cheat Rust terbaik",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Rust terbaik",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. apa yang dibandingkan sebelum membeli rust cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Soft Aim Assist",
					description: "Hack aimbot Rust: assist hack Aimbot undetected untuk Rust. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. assist hack Aimbot undetected untuk Rust.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Boxes & Loot",
					description: "Hack ESP Rust: kotak ESP hack, pin bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. kotak ESP hack, pin bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | What It Means",
					description: "Unlock all Rust: pencarian unlock-all vs alat ESP dan Aimbot asli. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Beli Rust Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. pencarian unlock-all vs alat ESP dan Aimbot asli.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@rustcheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Rust Cheats",
					description: "Kebijakan privasi untuk Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Kebijakan privasi untuk rustcheats.co dan lisensi Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca syarat",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informasi yang kami kumpulkan",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"Detail pembayaran diproses oleh checkout Zadeyo — tidak disimpan di rustcheats.co.",
							],
						},
						{
							h2: "Cara kami menggunakan data",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Hak Anda",
							paragraphs: [
								"support@rustcheats.co untuk dukungan dan legal.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Rust Cheats",
					description: "Kebijakan refund untuk Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Kebijakan refund untuk rustcheats.co dan lisensi Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Pengiriman digital",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Persetujuan refund",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Cara meminta",
							paragraphs: [
								"support@rustcheats.co untuk dukungan dan legal.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Rust Cheats",
					description: "Syarat penggunaan untuk Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Syarat penggunaan untuk rustcheats.co dan lisensi Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Penerimaan syarat",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Penyangkalan risiko",
							paragraphs: [
								"Rust Cheats menyediakan ESP wallhack, radar hack, dan Rust Aimbot undetected untuk Rust di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Menggunakan cheat dapat melanggar ketentuan tim Rust — Anda menanggung semua risiko ban.",
							],
						},
						{
							h2: "Perubahan kebijakan",
							paragraphs: [
								"support@rustcheats.co untuk dukungan dan legal.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "rust cheats ไม่ถูกตรวจจับ",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Rust บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Rust PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Rust Cheats พร้อมใช้งานสำหรับ Rust บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Rust Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Rust — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Rust undetected สำหรับ Rust บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Rust Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Rust บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "แกลเลอรี Rust Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Rust Cheats ปี 2026",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC เหมาะสำหรับอ่าน pack ศัตรูใน BR และ farming run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, การควบคุม radar. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ฟีเจอร์.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ESP, soft aim, การควบคุม radar.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: ใบอนุญาต $35 รายเดือนหรือ $150 lifetime. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ราคา.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ใบอนุญาต $35 รายเดือนหรือ $150 lifetime.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ติดตั้ง.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: สถานะ patch Easy Anti-Cheat และบันทึก rebuild. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC อัปเดต.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC สถานะ patch Easy Anti-Cheat และบันทึก rebuild.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: คำถาม ESP, soft aim, การจัดส่ง และ Easy Anti-Cheat. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC คำถาม ESP, soft aim, การจัดส่ง และ Easy Anti-Cheat.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC สนับสนุน.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: การบำรุงรักษา undetected หลัง patch Easy Anti-Cheat. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Cheats undetected.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC การบำรุงรักษา undetected หลัง patch Easy Anti-Cheat.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: วิธีจัดการอัปเดต Easy Anti-Cheat สำหรับ Rust hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC วิธีจัดการอัปเดต Easy Anti-Cheat สำหรับ Rust hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | Buyer Guide",
					description: "Rust Cheats 2026: checklist rust cheats 2026 ก่อน checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Rust Cheats 2026",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Rust Cheats 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC checklist rust cheats 2026 ก่อน checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Rust Cheats | ESP Aimbot Guide",
					description: "Rust Cheats: เสาหลัก Rust Cheats สำหรับ ESP และ Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Rust Cheats",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Rust Cheats.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Cheats",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC เสาหลัก Rust Cheats สำหรับ ESP และ Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Rust Cheats | Instant Access",
					description: "ดาวน์โหลด Rust Cheats: ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Rust Cheats",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ดาวน์โหลด Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Rust Cheats",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Rust | In-Game Toggles",
					description: "เมนูมอด Rust: สวิตช์ ESP และ soft aim ในไคลเอนต์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Rust",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC เมนูมอด Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "เมนูมอด Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Rust",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC สวิตช์ ESP และ soft aim ในไคลเอนต์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Rust ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Rust ที่ดีที่สุด: สิ่งที่ควรเปรียบเทียบก่อนซื้อ rust cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Rust ที่ดีที่สุด",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Cheat Rust ที่ดีที่สุด.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Cheat Rust ที่ดีที่สุด",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Rust ที่ดีที่สุด",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC สิ่งที่ควรเปรียบเทียบก่อนซื้อ rust cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Rust | Soft Aim Assist",
					description: "Hack Aimbot Rust: assist hack Aimbot undetected สำหรับ Rust. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Rust",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Hack Aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Rust",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC assist hack Aimbot undetected สำหรับ Rust.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Boxes & Loot",
					description: "Hack ESP Rust: กล่อง ESP hack, pin ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC กล่อง ESP hack, pin ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "ซื้อ Rust Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@rustcheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Rust Cheats",
					description: "นโยบายความเป็นส่วนตัว สำหรับ Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC นโยบายความเป็นส่วนตัว สำหรับ rustcheats.co และใบอนุญาต Rust",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านข้อกำหนด",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "ข้อมูลที่เราเก็บ",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"รายละเอียดการชำระเงินประมวลผลผ่าน checkout Zadeyo — ไม่เก็บบน rustcheats.co",
							],
						},
						{
							h2: "การใช้ข้อมูล",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "สิทธิของคุณ",
							paragraphs: [
								"support@rustcheats.co สำหรับการสนับสนุน",
								"อีเมล: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Rust Cheats",
					description: "นโยบายการคืนเงิน สำหรับ Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC นโยบายการคืนเงิน สำหรับ rustcheats.co และใบอนุญาต Rust",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การจัดส่งดิจิทัล",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "การอนุมัติคืนเงิน",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "วิธีขอคืนเงิน",
							paragraphs: [
								"support@rustcheats.co สำหรับการสนับสนุน",
								"อีเมล: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Rust Cheats",
					description: "ข้อกำหนดการใช้งาน สำหรับ Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC ข้อกำหนดการใช้งาน สำหรับ rustcheats.co และใบอนุญาต Rust",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การยอมรับข้อกำหนด",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ข้อจำกัดความรับผิดชอบด้านความเสี่ยง",
							paragraphs: [
								"Rust Cheats รวม ESP wallhack, radar hack และ Rust Aimbot แบบ undetected สำหรับ Rust บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"การใช้ cheat อาจละเมิดข้อกำหนดของทีม Rust — คุณรับความเสี่ยง ban ทั้งหมด",
							],
						},
						{
							h2: "การเปลี่ยนแปลงนโยบาย",
							paragraphs: [
								"support@rustcheats.co สำหรับการสนับสนุน",
								"อีเมล: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Rust undetected",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Rust trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Rust PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Rust Cheats đang hoạt động cho Rust trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Rust Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Rust — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Rust undetected cho Rust trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "Rust Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Rust trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Thư viện Rust Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Lý tưởng đọc pack địch trong BR và farming run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Player Boxes & Wallhack",
					description: "ESP Rust: hộp người chơi, đánh dấu xác thịt và overlay wallhack. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. hộp người chơi, đánh dấu xác thịt và overlay wallhack.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Soft Aim Controls",
					description: "Aimbot Rust: soft aim, FOV và hồ sơ Aimbot theo loài. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. soft aim, FOV và hồ sơ Aimbot theo loài.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, điều khiển radar. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Tính năng.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. ESP, soft aim, điều khiển radar.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: giấy phép $35 hàng tháng hoặc $150 lifetime. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Giá.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. giấy phép $35 hàng tháng hoặc $150 lifetime.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: kích hoạt Windows PC và thiết lập lần chạy đầu. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Cài đặt.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. kích hoạt Windows PC và thiết lập lần chạy đầu.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: trạng thái patch Easy Anti-Cheat và ghi chú rebuild. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Cập nhật.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. trạng thái patch Easy Anti-Cheat và ghi chú rebuild.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: câu hỏi ESP, soft aim, giao hàng và Easy Anti-Cheat. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. câu hỏi ESP, soft aim, giao hàng và Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Hỗ trợ.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: bảo trì undetected sau patch Easy Anti-Cheat. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Cheat undetected.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. bảo trì undetected sau patch Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP cho người chơi, xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. wallhack ESP cho người chơi, xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: tín hiệu radar 2D cho đánh hông và xoay vòng. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. tín hiệu radar 2D cho đánh hông và xoay vòng.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cách xử lý cập nhật Easy Anti-Cheat cho Rust hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. cách xử lý cập nhật Easy Anti-Cheat cho Rust hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Rust 2026 | Buyer Guide",
					description: "Cheat Rust 2026: checklist rust cheats 2026 trước checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Rust 2026",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Cheat Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Cheat Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheat Rust 2026",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. checklist rust cheats 2026 trước checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Rust | ESP Aimbot Guide",
					description: "Cheat Rust: trụ cột Rust Cheats cho ESP và Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Cheat Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. trụ cột Rust Cheats cho ESP và Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Rust | Instant Access",
					description: "Tải Cheat Rust: tải giấy phép kỹ thuật số sau thanh toán. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Tải Cheat Rust.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Tải Cheat Rust",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. tải giấy phép kỹ thuật số sau thanh toán.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Rust | In-Game Toggles",
					description: "Mod menu Rust: công tắc ESP và soft aim trong client. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Mod menu Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Mod menu Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. công tắc ESP và soft aim trong client.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Smooth Aim Settings",
					description: "Soft aim Rust: cài đặt soft aim mượt cho Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. cài đặt soft aim mượt cho Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Rust tốt nhất | Buyer Checklist",
					description: "Cheat Rust tốt nhất: nên so sánh gì trước khi mua rust cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Rust tốt nhất",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Cheat Rust tốt nhất.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Cheat Rust tốt nhất",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Rust tốt nhất",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. nên so sánh gì trước khi mua rust cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Soft Aim Assist",
					description: "Hack aimbot Rust: hỗ trợ hack Aimbot undetected cho Rust. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. hỗ trợ hack Aimbot undetected cho Rust.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Boxes & Loot",
					description: "Hack ESP Rust: hộp ESP hack, pin xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. hộp ESP hack, pin xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | What It Means",
					description: "Unlock all Rust: tìm kiếm unlock-all vs công cụ ESP và Aimbot thật. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Mua Rust Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. tìm kiếm unlock-all vs công cụ ESP và Aimbot thật.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Rust Cheats",
					description: "Chính sách bảo mật cho Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Chính sách bảo mật cho rustcheats.co và giấy phép Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc điều khoản",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Thông tin chúng tôi thu thập",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"Chi tiết thanh toán được xử lý qua checkout Zadeyo — không lưu trên rustcheats.co.",
							],
						},
						{
							h2: "Cách chúng tôi sử dụng dữ liệu",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Quyền của bạn",
							paragraphs: [
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Rust Cheats",
					description: "Chính sách hoàn tiền cho Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Chính sách hoàn tiền cho rustcheats.co và giấy phép Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Giao hàng kỹ thuật số",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Phê duyệt hoàn tiền",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Cách yêu cầu",
							paragraphs: [
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Rust Cheats",
					description: "Điều khoản sử dụng cho Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Điều khoản sử dụng cho rustcheats.co và giấy phép Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Chấp nhận điều khoản",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Tuyên bố miễn trừ rủi ro",
							paragraphs: [
								"Rust Cheats cung cấp ESP wallhack, radar hack và Rust Aimbot undetected cho Rust trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Dùng cheat có thể vi phạm điều khoản của đội Rust — bạn chịu mọi rủi ro ban.",
							],
						},
						{
							h2: "Thay đổi chính sách",
							paragraphs: [
								"support@rustcheats.co cho hỗ trợ và pháp lý.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Rust",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack і Aimbot для Rust на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Rust PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Rust Cheats активний для Rust на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Rust Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Rust — оплата через Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Rust для Rust на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "Rust Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Rust на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Галерея Rust Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Rust Cheats у 2026",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Ідеально для читання ворожих загонів у BR і farming run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Player Boxes & Wallhack",
					description: "ESP Rust: бокси гравців, маркери туш і wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. бокси гравців, маркери туш і wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Soft Aim Controls",
					description: "Aimbot Rust: soft aim, FOV і профілі Aimbot за видами. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. soft aim, FOV і профілі Aimbot за видами.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, керування radar. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Функції.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. ESP, soft aim, керування radar.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: ліцензії $35 на місяць або $150 lifetime. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Ціни.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. ліцензії $35 на місяць або $150 lifetime.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: активація Windows PC і налаштування першого запуску. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Встановлення.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. активація Windows PC і налаштування першого запуску.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: статус патчів Easy Anti-Cheat і нотатки rebuild. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Оновлення.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. статус патчів Easy Anti-Cheat і нотатки rebuild.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: питання про ESP, soft aim, доставку та Easy Anti-Cheat. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. питання про ESP, soft aim, доставку та Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: допомога з замовленням і контакт підтримки ліцензій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Підтримка.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. допомога з замовленням і контакт підтримки ліцензій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected обслуговування після патчів Easy Anti-Cheat. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Undetected чіти.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. undetected обслуговування після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP для гравців, туш і дистанції. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. wallhack ESP для гравців, туш і дистанції.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar підказки для флангів і ротацій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. 2D radar підказки для флангів і ротацій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: як обробляються оновлення Easy Anti-Cheat для Rust hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. як обробляються оновлення Easy Anti-Cheat для Rust hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Rust 2026 | Buyer Guide",
					description: "Чіти Rust 2026: чеклист rust cheats 2026 перед checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Rust 2026",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Чіти Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Чіти Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Чіти Rust 2026",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. чеклист rust cheats 2026 перед checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Rust | ESP Aimbot Guide",
					description: "Чіти Rust: стовп Rust Cheats для ESP і Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Чіти Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. стовп Rust Cheats для ESP і Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Rust Cheats | Instant Access",
					description: "Завантаження Rust Cheats: цифрове завантаження ліцензії після оплати. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Rust Cheats",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Завантаження Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Завантаження Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Rust Cheats",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. цифрове завантаження ліцензії після оплати.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Rust | In-Game Toggles",
					description: "Мод-меню Rust: перемикачі ESP і soft aim у клієнті. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Мод-меню Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Мод-меню Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. перемикачі ESP і soft aim у клієнті.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Smooth Aim Settings",
					description: "Soft aim Rust: плавні налаштування soft aim для Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. плавні налаштування soft aim для Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Rust | Buyer Checklist",
					description: "Найкращі чіти Rust: що порівняти перед покупкою rust cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Найкращі чіти Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Найкращі чіти Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. що порівняти перед покупкою rust cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Rust | Soft Aim Assist",
					description: "Хак aimbot Rust: undetected Aimbot hack assist для Rust. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Хак aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. undetected Aimbot hack assist для Rust.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Rust | Boxes & Loot",
					description: "Хак ESP Rust: ESP hack бокси, pins туш і дистанція. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Хак ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Хак ESP Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. ESP hack бокси, pins туш і дистанція.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | What It Means",
					description: "Unlock all Rust: пошуки unlock-all vs справжні ESP і Aimbot інструменти. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Купити Rust Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. пошуки unlock-all vs справжні ESP і Aimbot інструменти.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@rustcheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Rust Cheats",
					description: "Політика конфіденційності для Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Політика конфіденційності для rustcheats.co та ліцензій Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати умови",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Інформація, яку ми збираємо",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Платіжні дані обробляються через checkout Zadeyo — не зберігаються на rustcheats.co.",
							],
						},
						{
							h2: "Як ми використовуємо дані",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Ваші права",
							paragraphs: [
								"support@rustcheats.co для підтримки та правових питань.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Rust Cheats",
					description: "Політика повернення для Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Політика повернення для rustcheats.co та ліцензій Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифрова доставка",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Схвалення повернення",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Як подати запит",
							paragraphs: [
								"support@rustcheats.co для підтримки та правових питань.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Rust Cheats",
					description: "Умови використання для Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Умови використання для rustcheats.co та ліцензій Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Прийняття умов",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Попередження про ризики",
							paragraphs: [
								"Rust Cheats об'єднує ESP wallhack, radar hack і Rust Aimbot у undetected пакеті для Rust на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Використання читів може порушувати умови команди Rust — ви приймаєте на себе ризик бану.",
							],
						},
						{
							h2: "Зміни політики",
							paragraphs: [
								"support@rustcheats.co для підтримки та правових питань.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected rust cheaty",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Rust na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Rust PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Rust Cheats je aktivní pro Rust na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Rust Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Rust — checkout přes Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected rust cheaty pro Rust na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "Rust Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Rust na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Galerie Rust Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Rust Cheats v roce 2026",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Ideální pro čtení nepřátelských packů v BR a farming run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: hráčské boxy, markery kadáverů a wallhack overlaye. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. hráčské boxy, markery kadáverů a wallhack overlaye.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim, FOV a Aimbot profily podle druhu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. soft aim, FOV a Aimbot profily podle druhu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, ovládání radar. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Funkce.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. ESP, soft aim, ovládání radar.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: licence $35 měsíčně nebo $150 lifetime. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Ceny.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. licence $35 měsíčně nebo $150 lifetime.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: aktivace Windows PC a nastavení prvního spuštění. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Instalace.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. aktivace Windows PC a nastavení prvního spuštění.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: stav patchů Easy Anti-Cheat a poznámky k rebuild. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Aktualizace.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. stav patchů Easy Anti-Cheat a poznámky k rebuild.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: otázky k ESP, soft aim, doručení a Easy Anti-Cheat. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. otázky k ESP, soft aim, doručení a Easy Anti-Cheat.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: pomoc s objednávkou a kontakt podpory licencí. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Podpora.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. pomoc s objednávkou a kontakt podpory licencí.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected údržba po patchech Easy Anti-Cheat. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Undetected cheaty.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. undetected údržba po patchech Easy Anti-Cheat.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP pro hráče, kadávery a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. wallhack ESP pro hráče, kadávery a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signály pro flanly a rotace. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. 2D radar signály pro flanly a rotace.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: jak se řeší aktualizace Easy Anti-Cheat pro Rust hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. jak se řeší aktualizace Easy Anti-Cheat pro Rust hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "rust cheaty 2026 | Buyer Guide",
					description: "rust cheaty 2026: checklist rust cheats 2026 před checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "rust cheaty 2026",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. rust cheaty 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "rust cheaty 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "rust cheaty 2026",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. checklist rust cheats 2026 před checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "rust cheaty | ESP Aimbot Guide",
					description: "rust cheaty: pilíř Rust Cheats pro ESP a Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "rust cheaty",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. rust cheaty.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "rust cheaty",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "rust cheaty",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. pilíř Rust Cheats pro ESP a Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Rust Cheats | Instant Access",
					description: "Stáhnout Rust Cheats: digitální stažení licence po platbě. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Rust Cheats",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Stáhnout Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Stáhnout Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Rust Cheats",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. digitální stažení licence po platbě.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust mod menu | In-Game Toggles",
					description: "Rust mod menu: přepínače ESP a soft aim v klientu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust mod menu",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust mod menu.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust mod menu",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust mod menu",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. přepínače ESP a soft aim v klientu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: plynulé nastavení soft aim pro Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. plynulé nastavení soft aim pro Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší rust cheaty | Buyer Checklist",
					description: "Nejlepší rust cheaty: co porovnat před nákupem rust cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší rust cheaty",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Nejlepší rust cheaty.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Nejlepší rust cheaty",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší rust cheaty",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. co porovnat před nákupem rust cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust Aimbot hack | Soft Aim Assist",
					description: "Rust Aimbot hack: undetected Aimbot hack assist pro Rust. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust Aimbot hack",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust Aimbot hack.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot hack",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot hack",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. undetected Aimbot hack assist pro Rust.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP hack | Boxes & Loot",
					description: "Rust ESP hack: ESP hack boxy, piny kadáverů a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust ESP hack",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust ESP hack.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP hack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP hack",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. ESP hack boxy, piny kadáverů a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Koupit Rust Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@rustcheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Rust Cheats",
					description: "Zásady ochrany soukromí pro Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Zásady ochrany soukromí pro rustcheats.co a licence Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst podmínky",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informace, které shromažďujeme",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Platební údaje zpracovává checkout Zadeyo — neukládají se na rustcheats.co.",
							],
						},
						{
							h2: "Jak používáme data",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Vaše práva",
							paragraphs: [
								"support@rustcheats.co pro podporu a právní dotazy.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Rust Cheats",
					description: "Zásady vrácení peněz pro Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Zásady vrácení peněz pro rustcheats.co a licence Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitální doručení",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Schválení vrácení",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Jak požádat",
							paragraphs: [
								"support@rustcheats.co pro podporu a právní dotazy.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Rust Cheats",
					description: "Podmínky použití pro Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Podmínky použití pro rustcheats.co a licence Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Přijetí podmínek",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Upozornění na rizika",
							paragraphs: [
								"Rust Cheats spojuje ESP wallhack, radar hack a Rust Aimbot jako undetected balíček pro Rust na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Používání cheatů může porušovat podmínky týmu Rust — nesete veškeré riziko bana.",
							],
						},
						{
							h2: "Změny zásad",
							paragraphs: [
								"support@rustcheats.co pro podporu a právní dotazy.",
								"E-mail: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Rust undetected",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Rust pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Rust PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Rust Cheats este activ pentru Rust pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Rust Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Rust — checkout via Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Rust undetected pentru Rust pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.",
					h1: "Rust Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Rust pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Galerie Rust Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Rust Cheats în 2026",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Ideal pentru citirea pack-urilor inamice în BR și farming run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"rust-esp": {
					title: "ESP Rust | Player Boxes & Wallhack",
					description: "ESP Rust: casete jucător, markere carcase și overlay-uri wallhack. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. ESP Rust.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "ESP Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. casete jucător, markere carcase și overlay-uri wallhack.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Aimbot Rust | Soft Aim Controls",
					description: "Aimbot Rust: soft aim, FOV și profile Aimbot pe specie. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Aimbot Rust.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Aimbot Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. soft aim, FOV și profile Aimbot pe specie.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, controale radar. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Funcții.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. ESP, soft aim, controale radar.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: licențe $35 lunar sau $150 lifetime. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Prețuri.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. licențe $35 lunar sau $150 lifetime.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: activare Windows PC și setup la prima lansare. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Instalare.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. activare Windows PC și setup la prima lansare.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: status patch Easy Anti-Cheat și note rebuild. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Actualizări.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. status patch Easy Anti-Cheat și note rebuild.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: întrebări ESP, soft aim, livrare și Easy Anti-Cheat. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. întrebări ESP, soft aim, livrare și Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: ajutor comenzi și contact suport licențe. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Suport.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. ajutor comenzi și contact suport licențe.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: mentenanță undetected după patch-uri Easy Anti-Cheat. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Cheats undetected.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. mentenanță undetected după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP pentru jucători, carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. wallhack ESP pentru jucători, carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: indicii radar 2D pentru flancuri și rotații. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Radar hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. indicii radar 2D pentru flancuri și rotații.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: cum sunt gestionate actualizările Easy Anti-Cheat pentru Rust hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. cum sunt gestionate actualizările Easy Anti-Cheat pentru Rust hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Rust 2026 | Buyer Guide",
					description: "Cheats Rust 2026: checklist rust cheats 2026 înainte de checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Rust 2026",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Cheats Rust 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Cheats Rust 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Cheats Rust 2026",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. checklist rust cheats 2026 înainte de checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Rust | ESP Aimbot Guide",
					description: "Cheats Rust: pilon Rust Cheats pentru ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Cheats Rust.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Rust",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. pilon Rust Cheats pentru ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Rust Cheats | Instant Access",
					description: "Descărcare Rust Cheats: descărcare licență digitală după plată. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Rust Cheats",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Descărcare Rust Cheats.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Descărcare Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Rust Cheats",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. descărcare licență digitală după plată.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Rust | In-Game Toggles",
					description: "Meniu mod Rust: toggle-uri ESP și soft aim in-client. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Meniu mod Rust.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Meniu mod Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. toggle-uri ESP și soft aim in-client.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Rust | Smooth Aim Settings",
					description: "Soft aim Rust: setări soft aim fluide pentru Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Soft aim Rust.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Soft aim Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. setări soft aim fluide pentru Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Rust | Buyer Checklist",
					description: "Cele mai bune cheats Rust: ce să compari înainte de a cumpăra rust cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Cele mai bune cheats Rust.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Cele mai bune cheats Rust",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. ce să compari înainte de a cumpăra rust cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Rust | Soft Aim Assist",
					description: "Hack aimbot Rust: assist hack Aimbot undetected pentru Rust. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Hack aimbot Rust.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Rust",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. assist hack Aimbot undetected pentru Rust.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Rust | Boxes & Loot",
					description: "Hack ESP Rust: casete ESP hack, pin-uri carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Hack ESP Rust.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Rust",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Hack ESP Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. casete ESP hack, pin-uri carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Rust | What It Means",
					description: "Unlock all Rust: căutări unlock-all vs instrumente reale ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Rust",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Unlock all Rust.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Unlock all Rust",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Cumpără Rust Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Rust",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. căutări unlock-all vs instrumente reale ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@rustcheats.co pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Rust Cheats",
					description: "Politica de confidențialitate pentru Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Politica de confidențialitate pentru rustcheats.co și licențe Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește termenii",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informații pe care le colectăm",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Detaliile de plată sunt procesate prin checkout Zadeyo — nu sunt stocate pe rustcheats.co.",
							],
						},
						{
							h2: "Cum folosim datele",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Drepturile tale",
							paragraphs: [
								"support@rustcheats.co pentru suport și legal.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Rust Cheats",
					description: "Politica de rambursare pentru Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Politica de rambursare pentru rustcheats.co și licențe Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livrare digitală",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Aprobare rambursare",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Cum să soliciți",
							paragraphs: [
								"support@rustcheats.co pentru suport și legal.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Rust Cheats",
					description: "Termeni de utilizare pentru Rust Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Termeni de utilizare pentru rustcheats.co și licențe Rust.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptarea termenilor",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Declinare responsabilitate",
							paragraphs: [
								"Rust Cheats combină ESP wallhack, radar hack și Rust Aimbot undetected pentru Rust pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Folosirea cheat-urilor poate încălca termenii echipei Rust — îți asumi tot riscul de ban.",
							],
						},
						{
							h2: "Modificări de politică",
							paragraphs: [
								"support@rustcheats.co pentru suport și legal.",
								"Email: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected rust cheats",
					accentShort: "Rust Cheats",
					subtitle: "ESP wallhack, radar hack och Aimbot för Rust på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Rust PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Rust Cheats-paketet är live för Rust på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "Rust Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Rust",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Rust Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Rust — checkout via Zadeyo.",
				},
				images: {
					hero: "Rust Cheats hero — ESP and aimbot overlay in Rust",
					espWallhack: "Wallhack outlines showing players and NPCs through walls",
					aimbotCombat: "Soft aim assist overlay during a Rust raid",
					squadFight: "Rust Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Rust raid",
					headerArt: "Aimbot view and bone priority controls for Rust",
					hacksPackage: "2D radar threat overlay for Rust",
					raidFight: "Aimbot assist during a Rust firefight",
					battleRoyale: "Rust Cheats in-session overview for Windows PC",
					raidMap: "ESP markers for loot and bases in Rust",
				},
			},
			pages: {
				home: {
					title: "Rust Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected rust cheats för Rust på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "Rust Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Rust på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "Rust ESP player tags hack",
					galleryTitle: "Rust Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Ideal för att läsa fiendepacks i BR och farming run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"rust-esp": {
					title: "Rust ESP | Player Boxes & Wallhack",
					description: "Rust ESP: spelarboxar, kadavermarkörer och wallhack-overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust ESP",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust ESP.",
					imageAlt: "Rust ESP player boxes and distance readouts in a raid",
					galleryTitle: "Rust ESP",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust ESP",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. spelarboxar, kadavermarkörer och wallhack-overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"rust-aimbot": {
					title: "Rust Aimbot | Soft Aim Controls",
					description: "Rust Aimbot: soft aim, FOV och Aimbot-profiler per art. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Aimbot",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Aimbot.",
					imageAlt: "Rust Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Rust Aimbot",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Aimbot",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. soft aim, FOV och Aimbot-profiler per art.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar-kontroller. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Funktioner.",
					imageAlt: "Rust Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. ESP, soft aim, radar-kontroller.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 månatliga eller $150 lifetime-licenser. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Priser.",
					imageAlt: "Rust Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. $35 månatliga eller $150 lifetime-licenser.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC-aktivering och första-start setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Installation.",
					imageAlt: "Rust Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Windows PC-aktivering och första-start setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: Easy Anti-Cheat patchstatus och rebuild-anteckningar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Uppdateringar.",
					imageAlt: "Rust Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Easy Anti-Cheat patchstatus och rebuild-anteckningar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: frågor om ESP, soft aim, leverans och Easy Anti-Cheat. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. FAQ.",
					imageAlt: "Rust Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. frågor om ESP, soft aim, leverans och Easy Anti-Cheat.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: orderhjälp och licens support-kontakt. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Support.",
					imageAlt: "Rust Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. orderhjälp och licens support-kontakt.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected underhåll efter Easy Anti-Cheat patchar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Undetected cheats.",
					imageAlt: "Rust Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. undetected underhåll efter Easy Anti-Cheat patchar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Rust Wallhack | ESP Visibility",
					description: "Rust Wallhack: wallhack ESP för spelare, kadaver och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Wallhack",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Wallhack.",
					imageAlt: "rust wallhack visibility through walls in a raid",
					galleryTitle: "Rust Wallhack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust Wallhack",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. wallhack ESP för spelare, kadaver och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar-signaler för flanker och rotationer. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Radar Hack.",
					imageAlt: "Rust 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. 2D radar-signaler för flanker och rotationer.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: hur Easy Anti-Cheat-uppdateringar hanteras för Rust hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Rust Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. hur Easy Anti-Cheat-uppdateringar hanteras för Rust hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Rust Cheats 2026 | Buyer Guide",
					description: "Rust Cheats 2026: 2026 rust cheats checklist före checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Cheats 2026",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Cheats 2026.",
					imageAlt: "Rust Cheats product overview for Rust",
					galleryTitle: "Rust Cheats 2026",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-cheats/",
					sections: [
						{
							h2: "Rust Cheats 2026",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. 2026 rust cheats checklist före checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Rust Cheats | ESP Aimbot Guide",
					description: "Rust Cheats: Rust Cheats pelare för ESP och Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Cheats",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Cheats.",
					imageAlt: "Rust Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-combat.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Cheats",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Cheats pelare för ESP och Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Rust Cheat Download | Instant Access",
					description: "Rust Cheat Download: digital licensnedladdning efter betalning. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Cheat Download",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Cheat Download.",
					imageAlt: "Rust Cheats download and install delivery flow",
					galleryTitle: "Rust Cheat Download",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Rust Cheat Download",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. digital licensnedladdning efter betalning.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Rust Mod-meny | In-Game Toggles",
					description: "Rust Mod-meny: in-client ESP och soft aim-växlar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Mod-meny",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Mod-meny.",
					imageAlt: "Rust Cheats in-game menu controls",
					galleryTitle: "Rust Mod-meny",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Mod-meny",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. in-client ESP och soft aim-växlar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Rust Soft Aim | Smooth Aim Settings",
					description: "Rust Soft Aim: mjuka soft aim-inställningar för Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Soft Aim",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Soft Aim.",
					imageAlt: "Rust soft aim FOV and smoothness settings",
					galleryTitle: "Rust Soft Aim",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Soft Aim",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. mjuka soft aim-inställningar för Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Rust Cheats | Buyer Checklist",
					description: "Bästa Rust Cheats: vad du ska jämföra innan du köper rust cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Rust Cheats",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Bästa Rust Cheats.",
					imageAlt: "Rust Cheats overview for Rust on PC",
					galleryTitle: "Bästa Rust Cheats",
					heroImage: "/images/rust-cheats-esp.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Rust Cheats",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. vad du ska jämföra innan du köper rust cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Rust Aimbot Hack | Soft Aim Assist",
					description: "Rust Aimbot Hack: undetected Aimbot hack assist för Rust. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Aimbot Hack",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Aimbot Hack.",
					imageAlt: "Rust Aimbot hack controls and bone priority",
					galleryTitle: "Rust Aimbot Hack",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-aimbot/",
					sections: [
						{
							h2: "Rust Aimbot Hack",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. undetected Aimbot hack assist för Rust.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Rust ESP Hack | Boxes & Loot",
					description: "Rust ESP Hack: ESP hack-boxar, kadaver-pins och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust ESP Hack",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust ESP Hack.",
					imageAlt: "Rust ESP hack boxes and loot markers",
					galleryTitle: "Rust ESP Hack",
					heroImage: "/images/rust-cheats-wallhack.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/rust-esp/",
					sections: [
						{
							h2: "Rust ESP Hack",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. ESP hack-boxar, kadaver-pins och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Rust Unlock All | What It Means",
					description: "Rust Unlock All: unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Rust Unlock All",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Rust Unlock All.",
					imageAlt: "Rust Cheats license features overview",
					galleryTitle: "Rust Unlock All",
					heroImage: "/images/rust-cheats-radar.webp",
					ctaPrimary: "Köp Rust Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Rust Unlock All",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@rustcheats.co för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Rust Cheats",
					description: "Integritetspolicy för Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Integritetspolicy för rustcheats.co och Rust-licenser.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs villkor",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information vi samlar in",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Betalningsuppgifter behandlas via Zadeyo checkout — lagras inte på rustcheats.co.",
							],
						},
						{
							h2: "Hur vi använder data",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Dina rättigheter",
							paragraphs: [
								"support@rustcheats.co för support och juridik.",
								"E-post: support@rustcheats.co",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Rust Cheats",
					description: "Återbetalningspolicy för Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Återbetalningspolicy för rustcheats.co och Rust-licenser.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-session.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital leverans",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Återbetalningsgodkännande",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates ruster Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Hur du begär",
							paragraphs: [
								"support@rustcheats.co för support och juridik.",
								"E-post: support@rustcheats.co",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Rust Cheats",
					description: "Användarvillkor för Rust Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Användarvillkor för rustcheats.co och Rust-licenser.",
					imageAlt: "Rust Cheats",
					galleryTitle: "Rust Cheats",
					heroImage: "/images/rust-cheats-aimbot-view.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Godkännande av villkor",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Riskvarning",
							paragraphs: [
								"Rust Cheats kombinerar ESP wallhack, radar hack och Rust Aimbot som undetected paket för Rust på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Att använda cheats kan bryta mot Facepunch Studios terms — du tar all ban-risk.",
							],
						},
						{
							h2: "Policyändringar",
							paragraphs: [
								"support@rustcheats.co för support och juridik.",
								"E-post: support@rustcheats.co",
							],
						},
					],
				},
			},
		},
	};
