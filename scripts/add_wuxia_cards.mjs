import fs from 'fs';
import path from 'path';

const wuxiaCards = [
  {
    id: "theme_425",
    name: "華山劍宗赤羽俠影",
    icon: "⚔️",
    sub: "武俠江湖",
    scene: "Mount Hua cliff with rolling sea of clouds, woman standing against wind, cloak and long hair flying dramatically",
    outfit: "black-red layered martial robe, heavy woven fabric with translucent cloak layered structure, shoulders with silver-black feather decoration and metal shoulder guards, inner dark red silk tunic, outer long cloak with realistic weight and wind resistance, waist accessories including dual swords jade pendant wine gourd silver chain tassels leather pouches",
    makeup: "cool-toned wuxia cinematic makeup with natural weathered skin texture",
    prop: "woman standing against wind on cliff, cloak and hair flying dramatically, face remains clear and readable"
  },
  {
    id: "theme_426",
    name: "黑木崖夜行劍客",
    icon: "🗡️",
    sub: "武俠江湖",
    scene: "Blackwood Cliff night rain with torch smoke",
    outfit: "deep black velvet cloak with dark crimson inner robe, extensive leather straps silver dark patterns and metal waist corset, accessories including throwing knife pouches silver bracers ancient sword dragon pendant",
    makeup: "cold moon wuxia makeup with natural mature bone structure",
    prop: "swordsman in night rain, face remains clear and readable"
  },
  {
    id: "theme_427",
    name: "江南煙雨玉簫俠客",
    icon: "🎋",
    sub: "武俠江湖",
    scene: "misty rain Jiangnan stone bridge with water alley lantern lights",
    outfit: "moon white and ink blue layered hanfu martial styling, transparent sleeves with silk scarf flowing interweaving, accessories including jade flute white jade waist pendant silver chain wine gourd",
    makeup: "natural cinematic makeup with soft skin glow",
    prop: "scholar swordsman on stone bridge, face remains clear and readable"
  },
  {
    id: "theme_428",
    name: "雪原狂刀快意江湖",
    icon: "❄️",
    sub: "武俠江湖",
    scene: "blizzard snowfield with ancient road lonely pavilion",
    outfit: "black-gray heavy layered warrior robe, fur shoulder cape with leather waist guard forming strong layering, accessories including dual blades beast fang ornaments silver chains bronze bracers",
    makeup: "cold wind cinematic makeup with natural skin details",
    prop: "warrior in blizzard, face remains clear and readable"
  },
  {
    id: "theme_429",
    name: "衡山竹影飛劍長歌",
    icon: "🎍",
    sub: "武俠江湖",
    scene: "morning mist bamboo forest with mountain path stone bridge",
    outfit: "deep green and black layered robe, transparent outer robe with leather belt layers interweaving, fabric naturally flying in wind, accessories including long sword bamboo flute green jade waist chain metal pendants",
    makeup: "soft cool-toned cinematic makeup",
    prop: "swordsman in bamboo forest, face remains clear and readable"
  },
  {
    id: "theme_430",
    name: "笑傲江湖赤衣劍仙",
    icon: "🔴",
    sub: "武俠江湖",
    scene: "sunset cliff with rolling sea of clouds",
    outfit: "deep wine red ceremonial martial robe with black silk cloak layered design, extensive embroidered phoenix details with flowing sleeves, accessories including dual swords red jade wine gourd gold chain tassels",
    makeup: "heroic wuxia cinematic makeup",
    prop: "sword immortal on cliff at sunset, face remains clear and readable"
  },
  {
    id: "theme_431",
    name: "古城長街仗義豪俠",
    icon: "🏮",
    sub: "武俠江湖",
    scene: "ancient city night market with lantern-lit long street",
    outfit: "black layered leather robe with dark gray cloak, multiple waist belts and silver buckles forming strong jianghu feel, accessories including long blade jade pendant hidden weapon pouch bracers",
    makeup: "righteous hero makeup",
    prop: "hero on night street, face remains clear and readable"
  },
  {
    id: "theme_432",
    name: "月夜孤舟劍影長歌",
    icon: "🌙",
    sub: "武俠江湖",
    scene: "moonlit lake surface with misty lonely boat",
    outfit: "white and deep blue layered silk robe, transparent shawls with flowing scarf layers, accessories including guqin long sword jade flute white jade pearl chain",
    makeup: "elegant moonlit makeup",
    prop: "swordsman on lonely boat, face remains clear and readable"
  },
  {
    id: "theme_433",
    name: "魔教聖壇黑金俠影",
    icon: "⚫",
    sub: "武俠江湖",
    scene: "Blackwood Cliff altar with flame smoke",
    outfit: "obsidian black velvet robe with crimson embroidered cloak, metal embroidery and dark red cloak with extreme presence, accessories including silver chains black jade ring long sword",
    makeup: "dark cult leader makeup",
    prop: "cult leader at altar, face remains clear and readable"
  },
  {
    id: "theme_434",
    name: "江湖快馬赤塵行義",
    icon: "🐎",
    sub: "武俠江湖",
    scene: "wilderness ancient road with sunset dust",
    outfit: "deep red and black riding outfit layered styling, long cloak with leather armor details, accessories including dual blades horse whip silver waist chain",
    makeup: "dusty road warrior makeup",
    prop: "rider on ancient road, face remains clear and readable"
  },
  {
    id: "theme_435",
    name: "桃花林間醉劍狂歌",
    icon: "🌸",
    sub: "武俠江湖",
    scene: "peach blossom forest with spring hillside",
    outfit: "warm white and light red layered hanfu robe, long sleeves with gauze shawl forming carefree flowing feel, accessories including wine gourd long sword white jade tassels",
    makeup: "drunken swordsman makeup",
    prop: "drunk swordsman in peach forest, face remains clear and readable"
  },
  {
    id: "theme_436",
    name: "青城夜雨俠客長行",
    icon: "🌧️",
    sub: "武俠江湖",
    scene: "drizzle ancient road with Qingcheng mountain gate",
    outfit: "ink green and gray-black layered cloak, silver embroidery with leather belts layered, accessories including throwing knives jade pendant bracers",
    makeup: "rain-soaked traveler makeup",
    prop: "swordsman in night rain, face remains clear and readable"
  },
  {
    id: "theme_437",
    name: "劍氣凌霄雪夜長歌",
    icon: "❄️",
    sub: "武俠江湖",
    scene: "snowy night cliff with blizzard",
    outfit: "white-gray ceremonial martial robe with transparent cloak, accessories including silver sword dragon pattern belt white jade pendant",
    makeup: "snow warrior makeup",
    prop: "sword master in blizzard, face remains clear and readable"
  },
  {
    id: "theme_438",
    name: "煙雨客棧仗義豪情",
    icon: "🏚️",
    sub: "武俠江湖",
    scene: "jianghu inn with hearth lantern lights",
    outfit: "deep brown and wine red layered leather robe, multiple cloaks with silver waist chain, accessories including wine gourd short blade bracers",
    makeup: "inn hero makeup",
    prop: "hero at inn, face remains clear and readable"
  },
  {
    id: "theme_439",
    name: "江南月橋俠影風流",
    icon: "🌉",
    sub: "武俠江湖",
    scene: "Jiangnan moon bridge with night mist water alley",
    outfit: "moon white and ink blue flowing robe, transparent scarf layers naturally floating, accessories including jade flute silver chain short sword",
    makeup: "romantic swordsman makeup",
    prop: "swordsman on moon bridge, face remains clear and readable"
  },
  {
    id: "theme_440",
    name: "長街黑衣快劍行義",
    icon: "⚫",
    sub: "武俠江湖",
    scene: "ancient city long street with night lantern lights",
    outfit: "all-black layered martial outfit with leather shoulder armor, accessories including throwing knife pouches dual swords silver waist chain",
    makeup: "night assassin makeup",
    prop: "black-clad swordsman on street, face remains clear and readable"
  },
  {
    id: "theme_441",
    name: "雪山赤羽孤劍天涯",
    icon: "🏔️",
    sub: "武俠江湖",
    scene: "snow mountain cliff with rolling blizzard",
    outfit: "deep red cloak with black heavy robe layered styling, accessories including long sword beast fang ornaments leather bracers",
    makeup: "lone wanderer makeup",
    prop: "lone swordsman on snow mountain, face remains clear and readable"
  },
  {
    id: "theme_442",
    name: "竹海青衫玉劍俠影",
    icon: "🎋",
    sub: "武俠江湖",
    scene: "bamboo sea morning mist with mountain stone bridge",
    outfit: "light cyan and white layered silk robe, long sleeves with transparent shawl forming flowing layers, accessories including jade sword green jade waist chain wine gourd",
    makeup: "scholar swordsman makeup",
    prop: "jade swordsman in bamboo sea, face remains clear and readable"
  },
  {
    id: "theme_443",
    name: "魔教夜宴黑羽長歌",
    icon: "🦅",
    sub: "武俠江湖",
    scene: "flame altar with smoke night scene",
    outfit: "black-gold velvet cloak with crimson silk inner robe, extensive metal chains and dark pattern embroidery, accessories including long sword silver ring black jade necklace",
    makeup: "dark cult makeup",
    prop: "cult member at night feast, face remains clear and readable"
  },
  {
    id: "theme_444",
    name: "華山月下劍酒狂歌",
    icon: "🍶",
    sub: "武俠江湖",
    scene: "Mount Hua moonlit night with sea of clouds cliff",
    outfit: "white and wine red layered robe, flowing sleeves with transparent scarf layers, accessories including ancient sword wine gourd white jade tassels",
    makeup: "moonlit drunk swordsman makeup",
    prop: "drunk swordsman under moon, face remains clear and readable"
  },
  {
    id: "theme_445",
    name: "俠骨丹心赤影天涯",
    icon: "❤️",
    sub: "武俠江湖",
    scene: "wilderness ancient road with sunset sand wind",
    outfit: "black-red layered warrior cloak with leather armor details, accessories including dual blades silver chain dragon pattern belt",
    makeup: "heroic warrior makeup",
    prop: "hero on dusty road, face remains clear and readable"
  },
  {
    id: "theme_446",
    name: "江湖琴酒仗義長歌",
    icon: "🎵",
    sub: "武俠江湖",
    scene: "lake pavilion night mist with palace lantern reflection",
    outfit: "light white and ink blue silk robe, layered shawls with flowing sleeves, accessories including guqin long sword jade flute",
    makeup: "elegant musician swordsman makeup",
    prop: "musician swordsman at pavilion, face remains clear and readable"
  },
  {
    id: "theme_447",
    name: "快雪長刀風塵孤俠",
    icon: "🌨️",
    sub: "武俠江湖",
    scene: "snow ground ancient bridge with blizzard gale",
    outfit: "gray-black heavy layered robe with fur shoulder cape, accessories including long blade beast fang silver waist chain",
    makeup: "lone snow warrior makeup",
    prop: "lone warrior in blizzard, face remains clear and readable"
  },
  {
    id: "theme_448",
    name: "笑傲天涯飛劍長歌",
    icon: "🌅",
    sub: "武俠江湖",
    scene: "high mountain sea of clouds with sunset cliff",
    outfit: "black-blue layered ceremonial robe with flowing cloak, accessories including long sword silver bracers jade pendant",
    makeup: "carefree swordsman makeup",
    prop: "swordsman on cliff, face remains clear and readable"
  },
  {
    id: "theme_449",
    name: "夜雨孤城仗劍行義",
    icon: "🌃",
    sub: "武俠江湖",
    scene: "night rain ancient city with lantern stone path",
    outfit: "deep gray and wine red layered cloak styling, accessories including throwing knife pouch wine gourd long sword",
    makeup: "night rain warrior makeup",
    prop: "warrior in night rain city, face remains clear and readable"
  },
  {
    id: "theme_450",
    name: "赤羽劍宗江湖豪情",
    icon: "🔥",
    sub: "武俠江湖",
    scene: "fire cloud sunset with cliff gale",
    outfit: "crimson cloak with black silk robe layered design, accessories including dual swords silver chain dragon pattern bracers",
    makeup: "heroic sect leader makeup",
    prop: "sect leader in gale, face remains clear and readable"
  },
  {
    id: "theme_451",
    name: "竹橋水霧青衫俠影",
    icon: "🌫️",
    sub: "武俠江湖",
    scene: "bamboo bridge morning mist with Jiangnan water town",
    outfit: "cyan-white flowing robe with transparent scarf layers, accessories including jade flute long sword silver chain",
    makeup: "misty morning swordsman makeup",
    prop: "swordsman on bamboo bridge, face remains clear and readable"
  },
  {
    id: "theme_452",
    name: "黑木崖上霸氣劍皇",
    icon: "👑",
    sub: "武俠江湖",
    scene: "Blackwood Cliff flame altar with storm night sky",
    outfit: "obsidian black velvet robe with crimson embroidered cloak, accessories including dual swords black jade ring metal chains",
    makeup: "domineering sword emperor makeup",
    prop: "sword emperor on cliff, face remains clear and readable"
  },
  {
    id: "theme_453",
    name: "月夜長街快意恩仇",
    icon: "🌜",
    sub: "武俠江湖",
    scene: "ancient city long street with moonlit lanterns",
    outfit: "deep blue and white layered silk robe, accessories including jade pendant wine gourd throwing knives",
    makeup: "moonlit avenger makeup",
    prop: "avenger on moonlit street, face remains clear and readable"
  },
  {
    id: "theme_454",
    name: "笑傲江湖劍氣凌雲",
    icon: "⚡",
    sub: "武俠江湖",
    scene: "Mount Hua peak with rolling sea of clouds, woman standing against wind, cloak and long hair flying dramatically in gale, forming true 'Swordsman live-action movie poster' level presence",
    outfit: "black-red layered martial couture, heavy cloak transparent scarf layers metallic embroidery leather armor details flowing sleeves, long cloak with double-layer waist corset structure, accessories fully loaded: dual swords jade pendant wine gourd silver chain throwing knife pouches bracers dragon pattern belt hidden weapon pendants",
    makeup: "legendary swordsman cinematic makeup with natural weathered heroic features",
    prop: "legendary swordsman standing against gale on peak, cloak and hair flying dramatically, face remains clear and readable, head neck shoulders stay naturally aligned"
  }
];

// 讀取現有的 HTML 文件
const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 為每個角色卡創建完整的 JSON 結構
const newThemes = wuxiaCards.map(card => ({
  id: card.id,
  name: card.name,
  icon: card.icon,
  tpl: "default",
  entries: [{
    id: `${card.id}_01`,
    name: card.name,
    sub: card.sub,
    icon: card.icon,
    scene: card.scene,
    light: "ls_cinematic",
    outfit: card.outfit,
    makeup: card.makeup,
    prop: card.prop,
    comp: "full-body composition with cinematic depth, realistic head-to-body proportion, natural face-neck-shoulder alignment",
    mk: "natural_clean",
    tpl: "default",
    ratio: "r_916",
    lens: "l_50",
    ang: "quan",
    camLang: "cl_magazine",
    atm: "at_moody",
    series: card.sub,
    ui_status: "core",
    sort_weight: 1000,
    source_type: "manual",
    source_batch: "core",
    risk_flags: [],
    fx: "natural wind, water reflection, foliage, city light, or location atmosphere kept behind or beside the subject",
    tone: "location-authentic natural palette with balanced skin tones and clear environmental color",
    identity_mode: "identity_sovereign",
    identity_risk_score: 0,
    style_contamination_risk: "low",
    beauty_template_risk: "low",
    archetype_face_risk: "low",
    editorial_beauty_risk: "low",
    dynamic_angle_identity_risk: "low",
    head_scale_risk: "low",
    makeup_restructure_risk: "low",
    rewrite_needed: false
  }]
}));

// 將新主題轉換為 JSON 字符串
const newThemesJson = newThemes.map(theme =>
  '  ' + JSON.stringify(theme, null, 2).split('\n').join('\n  ')
).join(',\n');

// 找到 CATS 數組的結束位置並插入新數據
const catsEndPattern = /(\s+}\s+]\s+})\s*\];/;
const replacement = `$1,\n${newThemesJson}\n];`;

html = html.replace(catsEndPattern, replacement);

// 寫回文件
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('✓ 成功添加 30 組武俠江湖角色卡');
console.log('✓ 新主題 ID: theme_425 到 theme_454');
