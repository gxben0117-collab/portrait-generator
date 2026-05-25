import fs from 'fs';

const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 10組大唐飛天系列角色卡數據
const tangFlyingCards = [
  {
    id: "theme_460",
    name: "大唐飛天・赤霞神宮",
    icon: "🏛️",
    scene: "massive white jade platform in Tang Dynasty celestial palace, violent wind blowing massive flying crimson silk ribbons, red silk sweeping across entire sky, sunset smoke and dancing flower petals forming truly epic cinematic scene",
    outfit: "imperial crimson heavy ceremonial silk with royal brocade embroidery and transparent layered silk chiffon with handcrafted gold-thread weaving, twelve-layer flying skirt hem with ultra-long trailing structure, massive transparent flying silk shawls, multi-layer fabric stacking with Tang Dynasty imperial three-dimensional tailoring, shoulders with large phoenix feather ornaments and semi-transparent crimson shawls with red-gold tassel chains, chest and waist corset with ruby inlay white jade pendants gold chain tassels phoenix metal carvings and three-dimensional jewelry craftsmanship, ultra-long flying red silk extending tens of meters from arms and waist, fabric presenting realistic weight wind resistance fabric tension silk reflection and high-end couture feel, avoiding cheap cosplay feel Taobao costume feel CG game costume feel plastic fabric feel",
    makeup: "warm golden Tang Dynasty cinematic makeup with deep red soft matte lip color and realistic mature bone structure"
  },
  {
    id: "theme_461",
    name: "長相思・飛天赤鳳長歌",
    icon: "🦅",
    scene: "Chang'an palace high platform with fire cloud sky, flying red silk and shawls forming massive streamlines in gale",
    outfit: "crimson velvet couture texture with transparent silk chiffon layers gold phoenix embroidery and luxury ceremonial tailoring, extensive use of phoenix gold-thread embroidery peony three-dimensional embroidery red-gold filigree craftsmanship ultra-long shawls and flowing flying sleeve structure, skirt hem with multi-layer gradient red gauze gold-thread piping and transparent outer gauze layer, waist decoration with ruby corset Dongzhu pearl chains white jade tassels and red-gold carved pendants, headdress with oversized Tang Dynasty phoenix crown phoenix feather buyao and hanging gold chain tassels, fabric presenting realistic silk weight natural air flow and high-end cinematic costume physics"
  },
  {
    id: "theme_462",
    name: "敦煌飛天・赤金神舞",
    icon: "🎨",
    scene: "Dunhuang grottoes with desert sunset, flying red silk and smoke",
    outfit: "fusion of Dunhuang flying apsara murals Tang Dynasty court and Longest Promise film art style, main body using sheer silk chiffon gold-thread embroidery and luxury layered ceremonial fabric, costume with ultra-long flying ribbons transparent water sleeves gold lotus embroidery and three-dimensional jewel pearl chains, shoulder-neck structure naturally soft showing realistic mature female physique and high-end flying divinity, avoiding anime explosive chest feel plastic fabric AI game character feel"
  },
  {
    id: "theme_463",
    name: "大唐赤羽・萬綢飛天",
    icon: "🪶",
    scene: "massive Chang'an palace gate with white jade imperial road, dozens of flying red silk ribbons dancing in sky",
    outfit: "ultra-high-end Tang Dynasty imperial flying travel photography costume using heavy ceremonial silk transparent crimson chiffon and royal embroidery fabric, costume details including twelve-layer trailing skirt hem large phoenix feather shoulder armor red-gold coiled flower embroidery metal carved waist corset and jewel pearl chains, flying red silk with realistic wind pressure realistic air pull and realistic weight feel"
  },
  {
    id: "theme_464",
    name: "長相思・神庭赤霞飛舞",
    icon: "✨",
    scene: "divine court style Tang Dynasty palace with massive stone steps, flying red silk forming epic scene in sunset",
    outfit: "imperial crimson couture gown using luxury silk brocade transparent layered shawls and gold phoenix embroidery, costume structure with high-end couture three-dimensional tailoring realistic court costume thickness and realistic jewelry craftsmanship, extensively adding Dongzhu tassels red-gold filigree phoenix metal carvings and ultra-long flying shawls"
  },
  {
    id: "theme_465",
    name: "大唐飛天・花海赤舞",
    icon: "🌺",
    scene: "massive flower field with Tang Dynasty high platform, flying red silk and flower petals dancing wildly in wind together",
    outfit: "warm red and gold-white Tang Dynasty flying long dress as core using transparent silk chiffon heavy ceremonial silk and embroidered phoenix patterns, skirt hem with ultra-large area trailing multi-layer transparent red gauze and petal embroidery, shoulders with large flying water sleeves and phoenix feather structure, waist with ruby belt pearl pearl chains and gold tassels"
  },
  {
    id: "theme_466",
    name: "赤鳳長歌・大唐神女",
    icon: "👑",
    scene: "fire cloud sky with white jade high platform, flying red silk forming overwhelming visual momentum",
    outfit: "deep crimson velvet with royal brocade and transparent layered fabric, extensively using gold-thread phoenix embroidery red-gold dragon patterns three-dimensional jewelry craftsmanship and ultra-long flying long sleeves, headdress with large phoenix feather crown Dongzhu tassels and ruby buyao"
  },
  {
    id: "theme_467",
    name: "長安赤霞・飛天神宴",
    icon: "🏮",
    scene: "Chang'an palace high platform with massive palace lanterns, flying red silk and smoke forming cinematic-level scene",
    outfit: "costume like truly filmable Tang Dynasty cinematic costume, extensively using high-end silk handcrafted gold-thread embroidery transparent flying red gauze and multi-layer shawl structure, costume with realistic sewing structure realistic fabric thickness and realistic high-end costume silhouette"
  },
  {
    id: "theme_468",
    name: "飛天赤綾・神宮長歌",
    icon: "🎭",
    scene: "divine palace white jade stone steps with sunset glow, flying red silk fully dancing in gale",
    outfit: "main body using luxury ceremonial silk transparent chiffon layers and gold-thread phoenix embroidery, shoulders and arms with ultra-long flying shawls fully extending, extensively adding pearl chains Dongzhu gold carvings and red-gold waist corset"
  },
  {
    id: "theme_469",
    name: "長相思・萬丈赤巾飛天",
    icon: "🌅",
    scene: "Tang Dynasty celestial palace with rolling sea of clouds, dozens of flying red silk ribbons fully dancing in sky, forming true Longest Promise × Tang Dynasty flying apsara epic cinematic scene",
    outfit: "ultimate Tang Dynasty flying imperial travel photography costume using heavy ceremonial silk royal brocade embroidery and transparent layered crimson fabric, costume structure including massive flying water sleeves ultra-long trailing skirt hem three-dimensional phoenix feather shoulder ornaments and multi-layer transparent red gauze, jewelry and decoration fully loaded with ruby Dongzhu white jade gold chain tassels and red-gold filigree craftsmanship"
  }
];

// 為每個角色卡創建完整的 JSON 結構
const newThemes = tangFlyingCards.map(card => ({
  id: card.id,
  name: card.name,
  icon: card.icon,
  tpl: "default",
  entries: [{
    id: `${card.id}_01`,
    name: card.name,
    sub: "中國朝代古裝",
    icon: card.icon,
    scene: card.scene,
    light: "ls_cinematic",
    outfit: card.outfit,
    makeup: card.makeup || "warm golden Tang Dynasty cinematic makeup with deep red soft matte lip color and realistic mature bone structure",
    prop: "woman in elaborate Tang Dynasty flying costume, massive flying silk ribbons extending and dancing in wind, face remains clear and readable, head neck shoulders stay naturally aligned, realistic high-end costume physics",
    comp: "full-body composition with epic cinematic depth, realistic head-to-body proportion, natural face-neck-shoulder alignment, Tang Dynasty imperial presence",
    mk: "oriental",
    tpl: "default",
    ratio: "r_916",
    lens: "l_50",
    ang: "quan",
    camLang: "cl_magazine",
    atm: "at_clear",
    series: "中國朝代古裝",
    ui_status: "core",
    sort_weight: 1000,
    source_type: "manual",
    source_batch: "core",
    risk_flags: [],
    fx: "flying silk ribbons, flower petals, smoke, sunset glow, palace atmosphere creating epic Tang Dynasty cinematic feel",
    tone: "warm golden Tang Dynasty palette with crimson red and imperial gold tones",
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

console.log('✓ 成功添加 10 組大唐飛天系列角色卡');
console.log('✓ 新主題 ID: theme_460 到 theme_469');
console.log('\n新增角色卡：');
tangFlyingCards.forEach(card => {
  console.log(`  ${card.icon} ${card.name}`);
});
