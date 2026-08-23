import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
export const PAGE_META_HOME = {
	es: { title: 'Rust Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Rust indetectables para Rust en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Rust Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Rust en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Rust ESP — etiquetas de jugador hack', gallery: 'Galería Rust Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Rust Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y farming run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Rust Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Rust indétectables pour Rust sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Rust Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Rust sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Rust ESP — tags joueur hack', gallery: 'Galerie Rust Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Rust Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et farming run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Rust Cheats für Rust auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Rust Cheats — Undetected ESP, Wallhack und Aimbot', intro: 'Undetected Windows PC Paket für Rust: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Rust ESP — Spieler-Tags Hack', gallery: 'Rust Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Rust Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und farming run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Rust Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Rust indetectáveis para Rust no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Rust Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Rust no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Rust ESP player tags hack', gallery: 'Galeria Rust Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Rust Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler epackrões inimigos em BR e farming run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Rust Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Rust indetectable per Rust su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Rust Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Rust su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Rust ESP player tags hack', gallery: 'Galleria Rust Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Rust Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere packre nemiche in BR e farming run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected rust cheats voor Rust op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Rust: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Rust ESP player tags hack', gallery: 'Rust Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Rust Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke packs te lezen in BR en farming run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Rust Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Rust dla Rust na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Rust Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Rust na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Rust ESP player tags hack', gallery: 'Galeria Rust Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Rust Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich packów w BR i farming run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Rust Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Rust для Rust на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Rust Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Rust на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Rust ESP — теги игроков hack', gallery: 'Галерея Rust Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Rust Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и farming run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Rust Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Rust için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Rust Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Rust Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Rust ESP player tags hack', gallery: 'Rust Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Rust Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve farming run\'da düşman pack okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Rust Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Rust undetected لـ Rust على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Rust Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Rust على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'Rust ESP player tags hack', gallery: 'معرض Rust Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Rust Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وfarming run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Rust Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Rust向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Rust Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Rust Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'rust cheats hero ESP aimbot wallhack', gallery: 'Rust Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にRust Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとfarming runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Rust Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Rust undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Rust Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Rust Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'rust cheats hero ESP aimbot wallhack', gallery: 'Rust Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Rust Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 farming run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Rust Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Rust undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Rust Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Rust Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'rust cheats hero ESP aimbot wallhack', gallery: 'Rust Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Rust Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和farming run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Rust Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Rust undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Rust Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Rust Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'rust cheats hero ESP aimbot wallhack', gallery: 'Rust Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Rust Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और farming run में दुश्मन pack पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Rust undetected untuk Rust di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Rust di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Rust ESP player tags hack', gallery: 'Galeri Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Rust Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca pack musuh di BR dan farming run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Rust Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Rust undetected สำหรับ Rust บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Rust Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Rust บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'Rust ESP player tags hack', gallery: 'แกลเลอรี Rust Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Rust Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน pack ศัตรูใน BR และ farming run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Rust undetected cho Rust trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Rust trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'Rust ESP player tags hack', gallery: 'Thư viện Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Rust Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc pack địch trong BR và farming run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Rust Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Rust для Rust на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Rust Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Rust на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Rust ESP player tags hack', gallery: 'Галерея Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Rust Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і farming run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Rust Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected rust cheaty pro Rust na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Rust Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Rust na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'Rust ESP player tags hack', gallery: 'Galerie Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Rust Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských packů v BR a farming run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Rust Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Rust undetected pentru Rust pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Rust Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Rust pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'Rust ESP player tags hack', gallery: 'Galerie Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Rust Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea pack-urilor inamice în BR și farming run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected rust cheats för Rust på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Rust på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'Rust ESP player tags hack', gallery: 'Rust Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Rust Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendepacks i BR och farming run.', topicB: 'En licens istället för separata verktyg.' },
};

export function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'rust-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'rust-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for Rust hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 rust cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'Rust Cheats pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying rust cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Rust', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all items ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
export const SUFFIX_I18N = {
	es: {
		'rust-esp': 'Cajas de jugador y wallhack',
		'rust-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'rust-esp': 'Boîtes joueur et wallhack',
		'rust-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'rust-esp': 'Spielerboxen & Wallhack',
		'rust-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'rust-esp': 'Caixas de jogador e wallhack',
		'rust-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'rust-esp': 'Box giocatore e wallhack',
		'rust-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'rust-esp': 'Боксы игроков и wallhack',
		'rust-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Rust Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Rust Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

export const TOPIC_NAMES = {
	'rust-esp': { en: 'Rust ESP', es: 'ESP Rust', fr: 'ESP Rust', de: 'Rust ESP', pt: 'ESP Rust', it: 'ESP Rust', nl: 'Rust ESP', pl: 'ESP Rust', ru: 'ESP Rust', tr: 'Rust ESP', ar: 'ESP Rust', ja: 'Rust ESP', ko: 'Rust ESP', zh: 'Rust ESP', hi: 'Rust ESP', id: 'ESP Rust', th: 'Rust ESP', vi: 'ESP Rust', uk: 'ESP Rust', cs: 'Rust ESP', ro: 'ESP Rust', sv: 'Rust ESP' },
	'rust-aimbot': { en: 'Rust Aimbot', es: 'Aimbot Rust', fr: 'Aimbot Rust', de: 'Rust Aimbot', pt: 'Aimbot Rust', it: 'Aimbot Rust', nl: 'Rust Aimbot', pl: 'Aimbot Rust', ru: 'Aimbot Rust', tr: 'Rust Aimbot', ar: 'Aimbot Rust', ja: 'Rust Aimbot', ko: 'Rust Aimbot', zh: 'Rust Aimbot', hi: 'Rust Aimbot', id: 'Aimbot Rust', th: 'Rust Aimbot', vi: 'Aimbot Rust', uk: 'Aimbot Rust', cs: 'Rust Aimbot', ro: 'Aimbot Rust', sv: 'Rust Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Rust Wallhack', es: 'Rust Wallhack', fr: 'Rust Wallhack', de: 'Rust Wallhack', pt: 'Rust Wallhack', it: 'Rust Wallhack', nl: 'Rust Wallhack', pl: 'Rust Wallhack', ru: 'Rust Wallhack', tr: 'Rust Wallhack', ar: 'Rust Wallhack', ja: 'Rust Wallhack', ko: 'Rust Wallhack', zh: 'Rust Wallhack', hi: 'Rust Wallhack', id: 'Rust Wallhack', th: 'Rust Wallhack', vi: 'Rust Wallhack', uk: 'Rust Wallhack', cs: 'Rust Wallhack', ro: 'Rust Wallhack', sv: 'Rust Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Rust Cheats 2026', es: 'Trucos Rust 2026', fr: 'Triches Rust 2026', de: 'Rust Cheats 2026', pt: 'Cheats Rust 2026', it: 'Cheat Rust 2026', nl: 'Rust Cheats 2026', pl: 'Cheaty Rust 2026', ru: 'Читы Rust 2026', tr: 'Rust Hileleri 2026', ar: 'غش Rust 2026', ja: 'Rust Cheats 2026', ko: 'Rust Cheats 2026', zh: 'Rust作弊 2026', hi: 'Rust Cheats 2026', id: 'Cheat Rust 2026', th: 'Rust Cheats 2026', vi: 'Cheat Rust 2026', uk: 'Чіти Rust 2026', cs: 'rust cheaty 2026', ro: 'Cheats Rust 2026', sv: 'Rust Cheats 2026' },
	hacks: { en: 'Rust Cheats', es: 'Trucos Rust', fr: 'Triches Rust', de: 'Rust Cheats', pt: 'Cheats Rust', it: 'Cheat Rust', nl: 'Rust Cheats', pl: 'Cheaty Rust', ru: 'Читы Rust', tr: 'Rust Hileleri', ar: 'غش Rust', ja: 'Rust Cheats', ko: 'Rust Cheats', zh: 'Rust作弊', hi: 'Rust Cheats', id: 'Cheat Rust', th: 'Rust Cheats', vi: 'Cheat Rust', uk: 'Чіти Rust', cs: 'rust cheaty', ro: 'Cheats Rust', sv: 'Rust Cheats' },
	'cheat-download': { en: 'Rust Cheat Download', es: 'Descarga Rust Cheats', fr: 'Téléchargement Rust Cheats', de: 'Rust Cheat Download', pt: 'Download Rust Cheats', it: 'Download Rust Cheats', nl: 'Rust Cheat Download', pl: 'Pobieranie Rust Cheats', ru: 'Скачать Rust Cheats', tr: 'Rust Hile İndir', ar: 'تحميل Rust Cheats', ja: 'Rust Cheat Download', ko: 'Rust Cheat Download', zh: 'Rust作弊下载', hi: 'Rust Cheat Download', id: 'Download Cheat Rust', th: 'ดาวน์โหลด Rust Cheats', vi: 'Tải Cheat Rust', uk: 'Завантаження Rust Cheats', cs: 'Stáhnout Rust Cheats', ro: 'Descărcare Rust Cheats', sv: 'Rust Cheat Download' },
	'mod-menu': { en: 'Rust Mod Menu', es: 'Menú mod Rust', fr: 'Menu mod Rust', de: 'Rust Mod-Menü', pt: 'Menu mod Rust', it: 'Mod menu Rust', nl: 'Rust Mod Menu', pl: 'Mod menu Rust', ru: 'Мод-меню Rust', tr: 'Rust Mod Menü', ar: 'قائمة مود Rust', ja: 'Rust Mod Menu', ko: 'Rust 모드 메뉴', zh: 'Rust修改菜单', hi: 'Rust Mod Menu', id: 'Menu mod Rust', th: 'เมนูมอด Rust', vi: 'Mod menu Rust', uk: 'Мод-меню Rust', cs: 'Rust mod menu', ro: 'Meniu mod Rust', sv: 'Rust Mod-meny' },
	'soft-aim': { en: 'Rust Soft Aim', es: 'Soft aim Rust', fr: 'Soft aim Rust', de: 'Rust Soft Aim', pt: 'Soft aim Rust', it: 'Soft aim Rust', nl: 'Rust Soft Aim', pl: 'Soft aim Rust', ru: 'Soft aim Rust', tr: 'Rust Soft Aim', ar: 'Soft aim Rust', ja: 'Rust Soft Aim', ko: 'Rust Soft Aim', zh: 'Rust Soft Aim', hi: 'Rust Soft Aim', id: 'Soft aim Rust', th: 'Rust Soft Aim', vi: 'Soft aim Rust', uk: 'Soft aim Rust', cs: 'Rust Soft Aim', ro: 'Soft aim Rust', sv: 'Rust Soft Aim' },
	'best-cheats': { en: 'Best Rust Cheats', es: 'Mejores trucos Rust', fr: 'Meilleures triches Rust', de: 'Beste Rust Cheats', pt: 'Melhores cheats Rust', it: 'Migliori cheat Rust', nl: 'Beste Rust Cheats', pl: 'Najlepsze cheaty Rust', ru: 'Лучшие читы Rust', tr: 'En İyi Rust Hileleri', ar: 'أفضل غش Rust', ja: '最強Rustチート', ko: '최고의 Rust 치트', zh: '最佳Rust作弊', hi: 'सर्वश्रेष्ठ Rust Cheats', id: 'Cheat Rust terbaik', th: 'Cheat Rust ที่ดีที่สุด', vi: 'Cheat Rust tốt nhất', uk: 'Найкращі чіти Rust', cs: 'Nejlepší rust cheaty', ro: 'Cele mai bune cheats Rust', sv: 'Bästa Rust Cheats' },
	'aimbot-hack': { en: 'Rust Aimbot Hack', es: 'Hack aimbot Rust', fr: 'Hack aimbot Rust', de: 'Rust Aimbot Hack', pt: 'Hack aimbot Rust', it: 'Hack aimbot Rust', nl: 'Rust Aimbot Hack', pl: 'Hack aimbot Rust', ru: 'Хак aimbot Rust', tr: 'Rust Aimbot Hilesi', ar: 'هاك Aimbot Rust', ja: 'Rust Aimbot Hack', ko: 'Rust 에임봇 핵', zh: 'Rust自瞄外挂', hi: 'Rust Aimbot Hack', id: 'Hack aimbot Rust', th: 'Hack Aimbot Rust', vi: 'Hack aimbot Rust', uk: 'Хак aimbot Rust', cs: 'Rust Aimbot hack', ro: 'Hack aimbot Rust', sv: 'Rust Aimbot Hack' },
	'esp-hack': { en: 'Rust ESP Hack', es: 'Hack ESP Rust', fr: 'Hack ESP Rust', de: 'Rust ESP Hack', pt: 'Hack ESP Rust', it: 'Hack ESP Rust', nl: 'Rust ESP Hack', pl: 'Hack ESP Rust', ru: 'Хак ESP Rust', tr: 'Rust ESP Hilesi', ar: 'هاك ESP Rust', ja: 'Rust ESP Hack', ko: 'Rust ESP 핵', zh: 'Rust ESP外挂', hi: 'Rust ESP Hack', id: 'Hack ESP Rust', th: 'Hack ESP Rust', vi: 'Hack ESP Rust', uk: 'Хак ESP Rust', cs: 'Rust ESP hack', ro: 'Hack ESP Rust', sv: 'Rust ESP Hack' },
	'unlock-all': { en: 'Rust Unlock All', es: 'Unlock all Rust', fr: 'Unlock all Rust', de: 'Rust Unlock All', pt: 'Unlock all Rust', it: 'Unlock all Rust', nl: 'Rust Unlock All', pl: 'Unlock all Rust', ru: 'Unlock all Rust', tr: 'Rust Unlock All', ar: 'Unlock all Rust', ja: 'Rust Unlock All', ko: 'Rust Unlock All', zh: 'Rust Unlock All', hi: 'Rust Unlock All', id: 'Unlock all Rust', th: 'Rust Unlock All', vi: 'Unlock all Rust', uk: 'Unlock all Rust', cs: 'Rust Unlock All', ro: 'Unlock all Rust', sv: 'Rust Unlock All' },
};

export const CTA2_HREF = {
	'rust-esp': '/rust-cheats/',
	'rust-aimbot': '/rust-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/rust-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/rust-cheats/',
	wallhack: '/rust-esp/',
	radar: '/rust-esp/',
	eac: '/updates/',
	'cheats-2026': '/rust-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/rust-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/rust-aimbot/',
	'esp-hack': '/rust-esp/',
	'unlock-all': '/features/',
};

export function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	const L = LEGAL_I18N[locale];
	const pageCopy = L?.[kind] ?? {};
	const h2 = pageCopy.h2 ?? ['Information we collect', 'How we use data', 'Your rights'];
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Rust Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for Rust Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for rustcheats.co and Rust licenses.'}`),
		imageAlt: 'Rust Cheats',
		galleryTitle: 'Rust Cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: L?.emailSupport ?? 'Email support',
		ctaSecondary:
			kind === 'privacy'
				? L?.readTerms ?? 'Read terms'
				: L?.readPrivacy ?? 'Read privacy',
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				h2[0],
				p.s1(L?.sec1p1 ?? 'Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy'
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by Zadeyo checkout — not stored on rustcheats.co.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Facepunch Studios terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@rustcheats.co`),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
