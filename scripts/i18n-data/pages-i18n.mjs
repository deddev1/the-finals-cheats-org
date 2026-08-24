import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
export const PAGE_META_HOME = {
	es: { title: 'The Final Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos The Finals indetectables para The Finals en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'The Final Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para The Finals en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'The Finals ESP — etiquetas de jugador hack', gallery: 'Galería The Final Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen The Final Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y farming run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'The Final Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches The Finals indétectables pour The Finals sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'The Final Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour The Finals sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'The Finals ESP — tags joueur hack', gallery: 'Galerie The Final Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir The Final Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et farming run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'The Final Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected The Final Cheats für The Finals auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'The Final Cheats — Undetected ESP, Wallhack und Aimbot', intro: 'Undetected Windows PC Paket für The Finals: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'The Finals ESP — Spieler-Tags Hack', gallery: 'The Final Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum The Final Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und farming run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'The Final Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats The Finals indetectáveis para The Finals no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'The Final Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para The Finals no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Galeria The Final Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher The Final Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler epackrões inimigos em BR e farming run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'The Final Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat The Finals indetectable per The Finals su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'The Final Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per The Finals su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Galleria The Final Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere The Final Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere packre nemiche in BR e farming run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'The Final Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected thefinals cheats voor The Finals op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'The Final Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor The Finals: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'The Finals ESP player tags hack', gallery: 'The Final Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom The Final Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke packs te lezen in BR en farming run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'The Final Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty The Finals dla The Finals na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'The Final Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla The Finals na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Galeria The Final Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego The Final Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich packów w BR i farming run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'The Final Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы The Finals для The Finals на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'The Final Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для The Finals на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'The Finals ESP — теги игроков hack', gallery: 'Галерея The Final Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают The Final Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и farming run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'The Final Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'The Finals için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'The Final Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'The Finals Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'The Finals ESP player tags hack', gallery: 'The Final Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden The Final Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve farming run\'da düşman pack okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'The Final Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش The Finals undetected لـ The Finals على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'The Final Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ The Finals على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'The Finals ESP player tags hack', gallery: 'معرض The Final Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا The Final Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وfarming run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'The Final Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'The Finals向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'The Final Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'The Finals Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'thefinals cheats hero ESP aimbot wallhack', gallery: 'The Final Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にThe Final Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとfarming runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'The Final Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'The Finals undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'The Final Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'The Finals Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'thefinals cheats hero ESP aimbot wallhack', gallery: 'The Final Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 The Final Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 farming run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'The Final Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'The Finals undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'The Final Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'The Finals Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'thefinals cheats hero ESP aimbot wallhack', gallery: 'The Final Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择The Final Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和farming run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'The Final Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'The Finals undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'The Final Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'The Finals Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'thefinals cheats hero ESP aimbot wallhack', gallery: 'The Final Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में The Final Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और farming run में दुश्मन pack पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'The Final Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat The Finals undetected untuk The Finals di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'The Final Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected The Finals di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Galeri The Final Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa The Final Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca pack musuh di BR dan farming run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'The Final Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat The Finals undetected สำหรับ The Finals บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'The Final Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ The Finals บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'The Finals ESP player tags hack', gallery: 'แกลเลอรี The Final Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก The Final Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน pack ศัตรูใน BR และ farming run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'The Final Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat The Finals undetected cho The Finals trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'The Final Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected The Finals trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Thư viện The Final Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn The Final Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc pack địch trong BR và farming run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'The Final Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти The Finals для The Finals на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'The Final Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для The Finals на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Галерея The Final Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому The Final Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і farming run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'The Final Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected thefinals cheaty pro The Finals na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'The Final Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro The Finals na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Galerie The Final Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč The Final Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských packů v BR a farming run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'The Final Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats The Finals undetected pentru The Finals pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'The Final Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected The Finals pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'The Finals ESP player tags hack', gallery: 'Galerie The Final Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce The Final Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea pack-urilor inamice în BR și farming run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'The Final Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected thefinals cheats för The Finals på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'The Final Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för The Finals på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'The Finals ESP player tags hack', gallery: 'The Final Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför The Final Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendepacks i BR och farming run.', topicB: 'En licens istället för separata verktyg.' },
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
	'finals-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, vault markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'finals-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for The Finals hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 thefinals cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'The Final Cheats pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying thefinals cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for The Finals', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all items ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
export const SUFFIX_I18N = {
	es: {
		'finals-esp': 'Cajas de jugador y wallhack',
		'finals-aimbot': 'Controles soft aim',
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
		'finals-esp': 'Boîtes joueur et wallhack',
		'finals-aimbot': 'Contrôles soft aim',
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
		'finals-esp': 'Spielerboxen & Wallhack',
		'finals-aimbot': 'Soft-Aim Steuerung',
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
		'finals-esp': 'Caixas de jogador e wallhack',
		'finals-aimbot': 'Controles soft aim',
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
		'finals-esp': 'Box giocatore e wallhack',
		'finals-aimbot': 'Controlli soft aim',
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
		'finals-esp': 'Боксы игроков и wallhack',
		'finals-aimbot': 'Управление soft aim',
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
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'The Final Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
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
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — The Final Cheats screenshot`,
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
	'finals-esp': { en: 'The Finals ESP', es: 'ESP The Finals', fr: 'ESP The Finals', de: 'The Finals ESP', pt: 'ESP The Finals', it: 'ESP The Finals', nl: 'The Finals ESP', pl: 'ESP The Finals', ru: 'ESP The Finals', tr: 'The Finals ESP', ar: 'ESP The Finals', ja: 'The Finals ESP', ko: 'The Finals ESP', zh: 'The Finals ESP', hi: 'The Finals ESP', id: 'ESP The Finals', th: 'The Finals ESP', vi: 'ESP The Finals', uk: 'ESP The Finals', cs: 'The Finals ESP', ro: 'ESP The Finals', sv: 'The Finals ESP' },
	'finals-aimbot': { en: 'The Finals Aimbot', es: 'Aimbot The Finals', fr: 'Aimbot The Finals', de: 'The Finals Aimbot', pt: 'Aimbot The Finals', it: 'Aimbot The Finals', nl: 'The Finals Aimbot', pl: 'Aimbot The Finals', ru: 'Aimbot The Finals', tr: 'The Finals Aimbot', ar: 'Aimbot The Finals', ja: 'The Finals Aimbot', ko: 'The Finals Aimbot', zh: 'The Finals Aimbot', hi: 'The Finals Aimbot', id: 'Aimbot The Finals', th: 'The Finals Aimbot', vi: 'Aimbot The Finals', uk: 'Aimbot The Finals', cs: 'The Finals Aimbot', ro: 'Aimbot The Finals', sv: 'The Finals Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'The Finals Wallhack', es: 'The Finals Wallhack', fr: 'The Finals Wallhack', de: 'The Finals Wallhack', pt: 'The Finals Wallhack', it: 'The Finals Wallhack', nl: 'The Finals Wallhack', pl: 'The Finals Wallhack', ru: 'The Finals Wallhack', tr: 'The Finals Wallhack', ar: 'The Finals Wallhack', ja: 'The Finals Wallhack', ko: 'The Finals Wallhack', zh: 'The Finals Wallhack', hi: 'The Finals Wallhack', id: 'The Finals Wallhack', th: 'The Finals Wallhack', vi: 'The Finals Wallhack', uk: 'The Finals Wallhack', cs: 'The Finals Wallhack', ro: 'The Finals Wallhack', sv: 'The Finals Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'The Final Cheats 2026', es: 'Trucos The Finals 2026', fr: 'Triches The Finals 2026', de: 'The Final Cheats 2026', pt: 'Cheats The Finals 2026', it: 'Cheat The Finals 2026', nl: 'The Final Cheats 2026', pl: 'Cheaty The Finals 2026', ru: 'Читы The Finals 2026', tr: 'The Finals Hileleri 2026', ar: 'غش The Finals 2026', ja: 'The Final Cheats 2026', ko: 'The Final Cheats 2026', zh: 'The Finals作弊 2026', hi: 'The Final Cheats 2026', id: 'Cheat The Finals 2026', th: 'The Final Cheats 2026', vi: 'Cheat The Finals 2026', uk: 'Чіти The Finals 2026', cs: 'thefinals cheaty 2026', ro: 'Cheats The Finals 2026', sv: 'The Final Cheats 2026' },
	hacks: { en: 'The Final Cheats', es: 'Trucos The Finals', fr: 'Triches The Finals', de: 'The Final Cheats', pt: 'Cheats The Finals', it: 'Cheat The Finals', nl: 'The Final Cheats', pl: 'Cheaty The Finals', ru: 'Читы The Finals', tr: 'The Finals Hileleri', ar: 'غش The Finals', ja: 'The Final Cheats', ko: 'The Final Cheats', zh: 'The Finals作弊', hi: 'The Final Cheats', id: 'Cheat The Finals', th: 'The Final Cheats', vi: 'Cheat The Finals', uk: 'Чіти The Finals', cs: 'thefinals cheaty', ro: 'Cheats The Finals', sv: 'The Final Cheats' },
	'cheat-download': { en: 'The Finals Cheat Download', es: 'Descarga The Final Cheats', fr: 'Téléchargement The Final Cheats', de: 'The Finals Cheat Download', pt: 'Download The Final Cheats', it: 'Download The Final Cheats', nl: 'The Finals Cheat Download', pl: 'Pobieranie The Final Cheats', ru: 'Скачать The Final Cheats', tr: 'The Finals Hile İndir', ar: 'تحميل The Final Cheats', ja: 'The Finals Cheat Download', ko: 'The Finals Cheat Download', zh: 'The Finals作弊下载', hi: 'The Finals Cheat Download', id: 'Download Cheat The Finals', th: 'ดาวน์โหลด The Final Cheats', vi: 'Tải Cheat The Finals', uk: 'Завантаження The Final Cheats', cs: 'Stáhnout The Final Cheats', ro: 'Descărcare The Final Cheats', sv: 'The Finals Cheat Download' },
	'mod-menu': { en: 'The Finals Mod Menu', es: 'Menú mod The Finals', fr: 'Menu mod The Finals', de: 'The Finals Mod-Menü', pt: 'Menu mod The Finals', it: 'Mod menu The Finals', nl: 'The Finals Mod Menu', pl: 'Mod menu The Finals', ru: 'Мод-меню The Finals', tr: 'The Finals Mod Menü', ar: 'قائمة مود The Finals', ja: 'The Finals Mod Menu', ko: 'The Finals 모드 메뉴', zh: 'The Finals修改菜单', hi: 'The Finals Mod Menu', id: 'Menu mod The Finals', th: 'เมนูมอด The Finals', vi: 'Mod menu The Finals', uk: 'Мод-меню The Finals', cs: 'The Finals mod menu', ro: 'Meniu mod The Finals', sv: 'The Finals Mod-meny' },
	'soft-aim': { en: 'The Finals Soft Aim', es: 'Soft aim The Finals', fr: 'Soft aim The Finals', de: 'The Finals Soft Aim', pt: 'Soft aim The Finals', it: 'Soft aim The Finals', nl: 'The Finals Soft Aim', pl: 'Soft aim The Finals', ru: 'Soft aim The Finals', tr: 'The Finals Soft Aim', ar: 'Soft aim The Finals', ja: 'The Finals Soft Aim', ko: 'The Finals Soft Aim', zh: 'The Finals Soft Aim', hi: 'The Finals Soft Aim', id: 'Soft aim The Finals', th: 'The Finals Soft Aim', vi: 'Soft aim The Finals', uk: 'Soft aim The Finals', cs: 'The Finals Soft Aim', ro: 'Soft aim The Finals', sv: 'The Finals Soft Aim' },
	'best-cheats': { en: 'Best The Final Cheats', es: 'Mejores trucos The Finals', fr: 'Meilleures triches The Finals', de: 'Beste The Final Cheats', pt: 'Melhores cheats The Finals', it: 'Migliori cheat The Finals', nl: 'Beste The Final Cheats', pl: 'Najlepsze cheaty The Finals', ru: 'Лучшие читы The Finals', tr: 'En İyi The Finals Hileleri', ar: 'أفضل غش The Finals', ja: '最強The Finalsチート', ko: '최고의 The Finals 치트', zh: '最佳The Finals作弊', hi: 'सर्वश्रेष्ठ The Final Cheats', id: 'Cheat The Finals terbaik', th: 'Cheat The Finals ที่ดีที่สุด', vi: 'Cheat The Finals tốt nhất', uk: 'Найкращі чіти The Finals', cs: 'Nejlepší thefinals cheaty', ro: 'Cele mai bune cheats The Finals', sv: 'Bästa The Final Cheats' },
	'aimbot-hack': { en: 'The Finals Aimbot Hack', es: 'Hack aimbot The Finals', fr: 'Hack aimbot The Finals', de: 'The Finals Aimbot Hack', pt: 'Hack aimbot The Finals', it: 'Hack aimbot The Finals', nl: 'The Finals Aimbot Hack', pl: 'Hack aimbot The Finals', ru: 'Хак aimbot The Finals', tr: 'The Finals Aimbot Hilesi', ar: 'هاك Aimbot The Finals', ja: 'The Finals Aimbot Hack', ko: 'The Finals 에임봇 핵', zh: 'The Finals自瞄外挂', hi: 'The Finals Aimbot Hack', id: 'Hack aimbot The Finals', th: 'Hack Aimbot The Finals', vi: 'Hack aimbot The Finals', uk: 'Хак aimbot The Finals', cs: 'The Finals Aimbot hack', ro: 'Hack aimbot The Finals', sv: 'The Finals Aimbot Hack' },
	'esp-hack': { en: 'The Finals ESP Hack', es: 'Hack ESP The Finals', fr: 'Hack ESP The Finals', de: 'The Finals ESP Hack', pt: 'Hack ESP The Finals', it: 'Hack ESP The Finals', nl: 'The Finals ESP Hack', pl: 'Hack ESP The Finals', ru: 'Хак ESP The Finals', tr: 'The Finals ESP Hilesi', ar: 'هاك ESP The Finals', ja: 'The Finals ESP Hack', ko: 'The Finals ESP 핵', zh: 'The Finals ESP外挂', hi: 'The Finals ESP Hack', id: 'Hack ESP The Finals', th: 'Hack ESP The Finals', vi: 'Hack ESP The Finals', uk: 'Хак ESP The Finals', cs: 'The Finals ESP hack', ro: 'Hack ESP The Finals', sv: 'The Finals ESP Hack' },
	'unlock-all': { en: 'The Finals Unlock All', es: 'Unlock all The Finals', fr: 'Unlock all The Finals', de: 'The Finals Unlock All', pt: 'Unlock all The Finals', it: 'Unlock all The Finals', nl: 'The Finals Unlock All', pl: 'Unlock all The Finals', ru: 'Unlock all The Finals', tr: 'The Finals Unlock All', ar: 'Unlock all The Finals', ja: 'The Finals Unlock All', ko: 'The Finals Unlock All', zh: 'The Finals Unlock All', hi: 'The Finals Unlock All', id: 'Unlock all The Finals', th: 'The Finals Unlock All', vi: 'Unlock all The Finals', uk: 'Unlock all The Finals', cs: 'The Finals Unlock All', ro: 'Unlock all The Finals', sv: 'The Finals Unlock All' },
};

export const CTA2_HREF = {
	'finals-esp': '/finals-cheats/',
	'finals-aimbot': '/finals-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/finals-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/finals-cheats/',
	wallhack: '/finals-esp/',
	radar: '/finals-esp/',
	eac: '/updates/',
	'cheats-2026': '/finals-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/finals-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/finals-aimbot/',
	'esp-hack': '/finals-esp/',
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
		title: clampTitle(stripZadeyoFromMeta(`${h1} | The Final Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for The Final Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for thefinalscheats.org and The Finals licenses.'}`),
		imageAlt: 'The Final Cheats',
		galleryTitle: 'The Final Cheats',
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
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by Zadeyo checkout — not stored on thefinalscheats.org.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Embark Studios terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@thefinalscheats.org`),
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
