import fs from 'fs';

const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 5張新角色卡數據
const newCards = [
  {
    id: "theme_455",
    name: "賽博朋克機械少女",
    icon: "🤖",
    sub: "動漫遊戲",
    scene: "futuristic Tokyo neon streets, giant holographic advertisement projections, wet ground after rain reflecting blue-purple light, cyberpunk city night scene",
    outfit: "black-white dual-color mechanical style combat suit, transparent plastic material mixed with metal armor, glowing circuit patterns throughout body, shoulders with movable mechanical wing pieces, waist with multi-layer belts and glowing devices, black over-knee boots equipped with LED strips",
    accessories: "glowing headphones, mechanical bracelets, holographic projection gloves, waist data cables, metal collar",
    headwear: "cyberpunk headband equipped with small antennas and LED indicators",
    makeup: "cyberpunk chrome makeup: clean high-contrast skin finish, cool-toned metallic sheen around eyes with blue-purple gradient, lips with metallic gloss",
    action: "standing on rain-soaked street, one hand touching holographic interface, hair and clothing flowing in wind"
  },
  {
    id: "theme_456",
    name: "星際艦隊指揮官",
    icon: "🚀",
    sub: "科幻賽博",
    scene: "space battleship command bridge, massive transparent viewing window showing vast starry space and distant nebula, holographic star maps floating in air, blue tech light effects surrounding",
    outfit: "white and deep blue futuristic military uniform, metallic texture shoulder and chest insignia, glowing energy armor covering key areas, long military coat over tight combat suit, waist equipped with energy belt and communication devices",
    accessories: "holographic bracelet, energy sword, communication badge, metal bracers, data tablet",
    headwear: "metal hair crown equipped with communication antenna and status indicator lights",
    makeup: "futuristic tech makeup: natural base with micro-glow effect, clean sharp eye makeup, cool-toned lip color",
    action: "standing at command platform, gesturing to operate holographic star map, displaying commander presence"
  },
  {
    id: "theme_457",
    name: "法式宮廷婚紗",
    icon: "👰",
    sub: "婚紗系列",
    scene: "Hall of Mirrors at Palace of Versailles France, massive crystal chandeliers, golden carved walls, marble floor reflecting soft light, outside window showing manicured French gardens",
    outfit: "ivory white French court wedding dress, multi-layer lace and tulle structure, pearl embroidery throughout body, puffy skirt hem with exquisite pleats, off-shoulder design with transparent lace long sleeves, waist ribbon and pearl tassel decoration",
    accessories: "pearl necklace, diamond earrings, white lace gloves, pearl bracelet",
    headwear: "diamond crown with white tulle veil, pearl hair ornaments embellishment",
    makeup: "French bridal makeup: natural luminous base, soft pink eyeshadow, rose lip color, overall elegant and refined",
    action: "elegantly standing in center of Hall of Mirrors, one hand gently lifting skirt hem, veil flowing in breeze"
  },
  {
    id: "theme_458",
    name: "巴黎鐵塔浪漫旅拍",
    icon: "🗼",
    sub: "世界地標旅拍",
    scene: "Trocadéro Square in front of Eiffel Tower Paris, dusk time, tower showing golden silhouette in sunset afterglow, square fountain and tourists forming authentic travel photography atmosphere",
    outfit: "French vintage style clothing: beige trench coat, black turtleneck sweater underneath, dark blue jeans, brown leather ankle boots, overall presenting Parisian street fashion sense",
    accessories: "brown leather bag, gold necklace, sunglasses, scarf",
    headwear: "black beret (French classic)",
    makeup: "French natural makeup: translucent base, natural brow shape, light pink lip color, showing relaxed travel feel",
    action: "standing in square looking back with smile, one hand lightly touching hat, Eiffel Tower fully visible in background"
  },
  {
    id: "theme_459",
    name: "紐約街頭時尚",
    icon: "🏙️",
    sub: "都市時尚",
    scene: "Manhattan street New York, yellow taxi passing by, skyscrapers towering, boutique shop windows on both sides of street, evening time with street lights just turning on",
    outfit: "modern urban fashion outfit: black leather motorcycle jacket, white basic T-shirt, black skinny jeans, white sneakers, overall presenting street cool vibe",
    accessories: "gold necklace, black sunglasses, leather bracelet, designer bag",
    headwear: "none (showing natural hairstyle)",
    makeup: "urban fashion makeup: matte base, sharp eyeliner, nude lip color, showing modern urban woman temperament",
    action: "walking on street, one hand in pocket, showing confident stride, background is blurred city street scene"
  }
];

// 為每個角色卡創建完整的 JSON 結構
const newThemes = newCards.map(card => ({
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
    prop: card.action + ", face remains clear and readable, head neck shoulders stay naturally aligned",
    comp: "full-body composition with cinematic depth, realistic head-to-body proportion, natural face-neck-shoulder alignment",
    mk: "natural_clean",
    tpl: "default",
    ratio: "r_916",
    lens: "l_50",
    ang: "quan",
    camLang: "cl_magazine",
    atm: "at_clear",
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

console.log('✓ 成功添加 5 張新角色卡');
console.log('✓ 新主題 ID: theme_455 到 theme_459');
console.log('\n新增角色卡：');
newCards.forEach(card => {
  console.log(`  ${card.icon} ${card.name} (${card.sub})`);
});
