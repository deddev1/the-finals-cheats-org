export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global The Final Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'The Final Cheats Blog | Raid Guides',
		blogDescription:
			'The Finals guides — arena tips, ESP, aimbot notes, cashout routes, and Easy Anti-Cheat update coverage. English blog at thefinalscheats.org/blog/.',
		blogH1: 'The Final Cheats Intel',
		blogIntro:
			'Short The Finals guides for cashout rounds and arena PvP fights. Pair these tips with The Final Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'The Final Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog The Final Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de The Final Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para The Finals en PC Windows.',
		blogH1: 'Blog The Final Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos The Finals indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías The Finals relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio The Final Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog The Final Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog The Final Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour The Finals sur PC Windows.',
		blogH1: 'Blog The Final Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches The Finals indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides The Finals associés',
		allPosts: 'Tous les articles',
		home: 'Accueil The Final Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'The Final Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'The Final Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für The Finals auf Windows PC.',
		blogH1: 'The Final Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected The Final Cheats, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte The Finals Guides',
		allPosts: 'Alle Beiträge',
		home: 'The Final Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog The Final Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog The Final Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para The Finals no PC.',
		blogH1: 'Blog The Final Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats The Finals indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias The Finals relacionados',
		allPosts: 'Todos os posts',
		home: 'Início The Final Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog The Final Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog The Final Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per The Finals su PC Windows.',
		blogH1: 'Blog The Final Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat The Finals indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide The Finals correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home The Final Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'The Final Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'The Final Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor The Finals op Windows PC.',
		blogH1: 'The Final Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected the finals cheats, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde The Finals gidsen',
		allPosts: 'Alle posts',
		home: 'The Final Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog The Final Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog The Final Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla The Finals na PC.',
		blogH1: 'Blog The Final Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów The Finals, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki The Finals',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna The Final Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог The Final Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог The Final Cheats: undetected ESP, wallhack, radar и Aimbot для The Finals на Windows PC.',
		blogH1: 'Блог The Final Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам The Finals, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды The Finals',
		allPosts: 'Все статьи',
		home: 'Главная The Final Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'The Final Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'The Final Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri The Finals Windows PC.',
		blogH1: 'The Final Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected The Finals hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili The Finals rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'The Final Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة The Final Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة The Final Cheats: غش undetected وESP wallhack ورadar وAimbot لـ The Finals على Windows PC.',
		blogH1: 'مدونة The Final Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش The Finals undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة The Finals ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية The Final Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'The Final Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'The Final Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。The Finals Windows PC向け。',
		blogH1: 'The Final Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected The Finalsチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連The Finalsガイド',
		allPosts: 'すべての記事',
		home: 'The Final Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'The Final Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'The Final Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. The Finals Windows PC.',
		blogH1: 'The Final Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected The Finals 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 The Finals 가이드',
		allPosts: '모든 게시물',
		home: 'The Final Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'The Final Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'The Final Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于The Finals Windows PC。',
		blogH1: 'The Final Cheats 博客 — 全球指南',
		blogIntro:
			'undetected The Finals作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关The Finals指南',
		allPosts: '所有文章',
		home: 'The Final Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'The Final Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'The Final Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड The Finals Windows PC के लिए।',
		blogH1: 'The Final Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected the finals cheats, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित The Finals गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'The Final Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog The Final Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog The Final Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk The Finals di PC Windows.',
		blogH1: 'Blog The Final Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat The Finals undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua The Finals terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda The Final Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก The Final Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก The Final Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ The Finals บน PC',
		blogH1: 'บล็อก The Final Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat The Finals undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ The Finals ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก The Final Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog The Final Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog The Final Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho The Finals trên PC.',
		blogH1: 'Blog The Final Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat The Finals undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn The Finals liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ The Final Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог The Final Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог The Final Cheats: undetected ESP, wallhack, radar та Aimbot для The Finals на Windows PC.',
		blogH1: 'Блог The Final Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів The Finals, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди The Finals",
		allPosts: 'Усі статті',
		home: 'Головна The Final Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog The Final Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog The Final Cheats: undetected ESP, wallhack, radar a Aimbot pro The Finals na Windows PC.',
		blogH1: 'Blog The Final Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected the finals cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související The Finals průvodce',
		allPosts: 'Všechny články',
		home: 'Domů The Final Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog The Final Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog The Final Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru The Finals pe PC.',
		blogH1: 'Blog The Final Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri The Finals undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri The Finals related',
		allPosts: 'Toate articolele',
		home: 'Acasă The Final Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'The Final Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'The Final Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för The Finals på PC.',
		blogH1: 'The Final Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected the finals cheats, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade The Finals guider',
		allPosts: 'Alla inlägg',
		home: 'The Final Cheats hem',
		language: 'Språk',
	},
};
