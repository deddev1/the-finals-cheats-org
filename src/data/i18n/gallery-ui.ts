import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'thefinals cheats',
		title: 'thefinals cheats gallery',
		subtitle: 'Simple thefinals cheats visuals — ESP, wallhack, aimbot, and radar for The Finals on PC.',
		lead: 'The Final Cheats helps you spot players, NPCs, loot, and bases with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'thefinals cheats esp', copy: 'See players through walls with thefinals cheats esp and wallhack overlays.' },
			{ title: 'thefinals cheats radar', copy: 'Track nearby threats with thefinals cheats radar before you push or extract.' },
			{ title: 'thefinals cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for The Finals matches on Windows PC.' },
		],
		updatesLabel: 'thefinals cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'The Final Cheats',
		title: 'Galería The Finals',
		subtitle: 'Visuales de The Finals con loadouts, peleas de escuadrón y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'The Final Cheats está pensado para el loop BR de The Finals: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Arena y loot run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot The Finals', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones The Final Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'The Final Cheats',
		title: 'Galerie The Finals',
		subtitle: 'Visuels The Finals — loadouts, combats d\'escouade et match — avec ESP, radar et Aimbot.',
		lead: 'The Final Cheats suit la boucle BR de The Finals : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Arena et loot run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot The Finals', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour The Final Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals Galerie',
		subtitle: 'The Finals-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'The Final Cheats passt zur Raid-Schleife von The Finals: Karte lesen, Gegner tracken, looten und Raids überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Arena und loot run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'The Finals Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'The Final Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'The Final Cheats',
		title: 'Galeria The Finals',
		subtitle: 'Visuais de The Finals com loadouts, combates de epackrão e match — com ESP, radar e Aimbot.',
		lead: 'The Final Cheats segue o loop BR do The Finals: ler o mapa, rastrear epackrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e epackrões', copy: 'Detecte players inimigos em Arena e loot run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot The Finals', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações The Final Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'The Final Cheats',
		title: 'Galleria The Finals',
		subtitle: 'Immagini The Finals — loadout, scontri di packra e match — con ESP, radar e Aimbot.',
		lead: 'The Final Cheats è pensato per il loop BR di The Finals: leggere la mappa, tracciare packre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e packre', copy: 'Individua playeri nemici su Arena e loot run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot The Finals', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti The Final Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals galerij',
		subtitle: 'The Finals-beelden van loadouts, packgevechten en match — met ESP, radar en Aimbot.',
		lead: 'The Final Cheats volgt de match-loop va The Finals: kaart lezen, vijandelijke packs volgen, jagen en cashout zones overleven.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spot vijandelijke players op Arena en loot run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'The Finals Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'The Final Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'The Final Cheats',
		title: 'Galeria The Finals',
		subtitle: 'Grafiki The Finals — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'The Final Cheats pasuje do pętli BR The Finals: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Arena i loot run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot The Finals', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje The Final Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'The Final Cheats',
		title: 'Галерея The Finals',
		subtitle: 'Визуалы The Finals — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'The Final Cheats создан для рейд-циклу The Finals: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Arena и loot run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot The Finals', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления The Final Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'The Final Cheats, The Finals BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Arena ve loot run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'The Finals Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'The Final Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'The Final Cheats',
		title: 'معرض The Finals',
		subtitle: 'صور The Finals — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'The Final Cheats مبني لحلقة BR في The Finals: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Arena وloot run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot The Finals', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات The Final Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのThe Finalsビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'The Final CheatsはThe FinalsのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Arenaとloot runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'The Finalsエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'The Final Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 The Finals 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'The Final Cheats는 The Finals survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Arena와 loot run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'The Finals 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'The Final Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals 图库',
		subtitle: 'The Finals 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'The Final Cheats 为 The Finals match loop设计：读图、追踪敌方小队、搜刮并在 base survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Arena 和 loot run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'The Finals 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'The Final Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals गैलरी',
		subtitle: 'Loadout, squad fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'The Final Cheats The Finals match loop के लिए: map पढ़ें, enemy squads track करें, loot करें और base survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Arena और loot run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'The Finals Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'The Final Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'The Final Cheats',
		title: 'Galeri The Finals',
		subtitle: 'Visual The Finals — loadout, pertempuran pack, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'The Final Cheats untuk loop BR The Finals: baca peta, lacak pack musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Deteksi player musuh di Arena dan loot run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot The Finals', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update The Final Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'The Final Cheats',
		title: 'แกลเลอรี The Finals',
		subtitle: 'ภาพ The Finals — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'The Final Cheats สำหรับลูป BR ของ The Finals: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Arena และ loot run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot The Finals', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต The Final Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'The Final Cheats',
		title: 'Thư viện The Finals',
		subtitle: 'Hình ảnh The Finals — loadout, chiến đấu pack và match — với ESP, radar và Aimbot.',
		lead: 'The Final Cheats cho vòng BR The Finals: đọc bản đồ, theo dõi pack địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Phát hiện player địch trên Arena và loot run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot The Finals', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật The Final Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'The Final Cheats',
		title: 'Галерея The Finals',
		subtitle: 'Візуали The Finals — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'The Final Cheats для рейд-циклу The Finals: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Arena і loot run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot The Finals', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення The Final Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'The Final Cheats',
		title: 'Galerie The Finals',
		subtitle: 'The Finals vizuály — loadouty, pack souboje a match — s ESP, radarem a Aimbot.',
		lead: 'The Final Cheats pro BR smyčku The Finals: číst mapu, sledovat nepřátelské packy, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a packů', copy: 'Spozorujte nepřátelské operátory na Arena a loot run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot The Finals', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace The Final Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'The Final Cheats',
		title: 'Galerie The Finals',
		subtitle: 'Vizualuri The Finals — loadout, lupte de pack și match — cu ESP, radar și Aimbot.',
		lead: 'The Final Cheats pentru bucla BR The Finals: citește harta, urmărește pack-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și pack-uri', copy: 'Detectează playeri inamici pe Arena și loot run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot The Finals', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări The Final Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'The Final Cheats',
		title: 'The Finals galleri',
		subtitle: 'The Finals-bilder — loadouts, packstrider och match — med ESP, radar och Aimbot.',
		lead: 'The Final Cheats för The Finals:s match-loop: läs kartan, spåra fiendepacks, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spotta fiendeplayerer på Arena och loot run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'The Finals Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'The Final Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
