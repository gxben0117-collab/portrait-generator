#!/usr/bin/env node
// 從風格範例.md 生成 index.html 的 CATS 陣列和 PARENT_CATEGORIES
// 自動根據分類名稱歸類到正確的大類

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔨 從風格範例.md 重建 CATS 和 PARENT_CATEGORIES...\n');

// 讀取風格範例.md
const mdPath = join(rootDir, '核心資料', '風格範例.md');
const mdContent = readFileSync(mdPath, 'utf-8');

// 解析 Markdown
const entries = [];
const lines = mdContent.split('\n');
let currentEntry = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  if (line.startsWith('#### ')) {
    if (currentEntry) {
      entries.push(currentEntry);
    }
    currentEntry = {
      name: line.replace('#### ', '').trim()
    };
    continue;
  }

  if (!currentEntry) continue;

  const idMatch = line.match(/^- \*\*ID:\*\* `([^`]+)`/);
  if (idMatch) {
    currentEntry.id = idMatch[1];
    continue;
  }

  const categoryMatch = line.match(/^- \*\*分類:\*\* (.+)/);
  if (categoryMatch) {
    currentEntry.category = categoryMatch[1].trim();
    continue;
  }

  const makeupMatch = line.match(/^- \*\*妝容：\*\* (.+)/);
  if (makeupMatch) {
    currentEntry.mk = makeupMatch[1].trim();
    continue;
  }

  const sceneMatch = line.match(/^- \*\*場景背景：\*\* (.+)/);
  if (sceneMatch) {
    currentEntry.scene = sceneMatch[1].trim();
    continue;
  }

  const lightMatch = line.match(/^- \*\*光線：\*\* (.+)/);
  if (lightMatch) {
    currentEntry.light = lightMatch[1].trim();
    continue;
  }

  const makeupDescMatch = line.match(/^- \*\*妝容描述：\*\* (.+)/);
  if (makeupDescMatch) {
    currentEntry.makeup = makeupDescMatch[1].trim();
    continue;
  }

  const outfitMatch = line.match(/^- \*\*服裝：\*\* (.+)/);
  if (outfitMatch) {
    currentEntry.outfit = outfitMatch[1].trim();
    continue;
  }

  const propMatch = line.match(/^- \*\*動作與鏡頭：\*\* (.+)/);
  if (propMatch) {
    currentEntry.prop = propMatch[1].trim();
    continue;
  }

  const compMatch = line.match(/^- \*\*構圖：\*\* (.+)/);
  if (compMatch) {
    currentEntry.comp = compMatch[1].trim();
    continue;
  }

  const fxMatch = line.match(/^- \*\*特效：\*\* (.+)/);
  if (fxMatch) {
    currentEntry.fx = fxMatch[1].trim();
    continue;
  }

  const toneMatch = line.match(/^- \*\*色調：\*\* (.+)/);
  if (toneMatch) {
    currentEntry.tone = toneMatch[1].trim();
    continue;
  }

  const angMatch = line.match(/^- \*\*鏡頭角度：\*\* `([^`]+)`/);
  if (angMatch) {
    currentEntry.ang = angMatch[1].trim();
    continue;
  }

  const ratioMatch = line.match(/^- \*\*圖片比例：\*\* `([^`]+)`/);
  if (ratioMatch) {
    currentEntry.ratio = ratioMatch[1].trim();
    continue;
  }

  const lensMatch = line.match(/^- \*\*鏡頭焦段：\*\* `([^`]+)`/);
  if (lensMatch) {
    currentEntry.lens = lensMatch[1].trim();
    continue;
  }

  const lightStyleMatch = line.match(/^- \*\*燈光風格：\*\* `([^`]+)`/);
  if (lightStyleMatch) {
    currentEntry.light = lightStyleMatch[1].trim();
    continue;
  }

  const atmMatch = line.match(/^- \*\*整體氛圍：\*\* `([^`]+)`/);
  if (atmMatch) {
    currentEntry.atm = atmMatch[1].trim();
    continue;
  }

  const camLangMatch = line.match(/^- \*\*鏡頭語言：\*\* `([^`]+)`/);
  if (camLangMatch) {
    currentEntry.camLang = camLangMatch[1].trim();
    continue;
  }

  const sourceBatchMatch = line.match(/^- \*\*來源批次：\*\* (.+)/);
  if (sourceBatchMatch) {
    currentEntry.source_batch = sourceBatchMatch[1].trim();
    continue;
  }
}

if (currentEntry) {
  entries.push(currentEntry);
}

console.log(`✓ 解析完成：${entries.length} 個角色卡`);

// 分組（使用從 .md 讀取的分類資訊）
const categoryMap = new Map();

for (const entry of entries) {
  if (!entry.id) continue;

  const category = entry.category || '未分類';
  if (!categoryMap.has(category)) {
    categoryMap.set(category, []);
  }

  const fullEntry = {
    id: entry.id,
    name: entry.name,
    sub: entry.category || '未分類',
    icon: '🎭',
    scene: entry.scene || '',
    light: entry.light || 'ls_natural',
    outfit: entry.outfit || '',
    makeup: entry.makeup || '',
    prop: entry.prop || '',
    comp: entry.comp || '',
    mk: entry.mk || 'natural_clean',
    tpl: 'default',
    ratio: entry.ratio || 'r_34',
    lens: entry.lens || 'l_50',
    ang: entry.ang || 'sanfen',
    camLang: entry.camLang || 'cl_magazine',
    atm: entry.atm || 'at_clear',
    series: entry.category || '未分類',
    ui_status: 'core',
    sort_weight: 1000,
    source_type: 'manual',
    source_batch: entry.source_batch || 'core',
    risk_flags: [],
    fx: entry.fx || '',
    tone: entry.tone || '',
    identity_mode: 'identity_sovereign',
    identity_risk_score: 0,
    style_contamination_risk: 'low',
    beauty_template_risk: 'low',
    archetype_face_risk: 'low',
    editorial_beauty_risk: 'low',
    dynamic_angle_identity_risk: 'low',
    head_scale_risk: 'low',
    makeup_restructure_risk: 'low',
    rewrite_needed: false
  };

  categoryMap.get(category).push(fullEntry);
}

// 生成 CATS 陣列
const CATS = [];
const themeIdMap = new Map(); // 分類名稱 -> theme ID
let themeId = 1;

for (const [categoryName, categoryEntries] of categoryMap) {
  const themeIdStr = `theme_${String(themeId).padStart(3, '0')}`;
  themeIdMap.set(categoryName, themeIdStr);

  CATS.push({
    id: themeIdStr,
    name: categoryName,
    icon: '🎭',
    tpl: 'default',
    entries: categoryEntries
  });
  themeId++;
}

console.log(`✓ 生成 ${CATS.length} 個分類`);

// 定義大類規則（根據分類名稱關鍵字自動歸類）
const parentCategoryRules = [
  {
    id: 'pc_dark_demon',
    name: '暗黑魔族',
    icon: '👿',
    description: '魅魔、女魔王、墮天使、吸血鬼、哥德風',
    keywords: ['魅魔', '女魔王', '墮天使', '吸血鬼', '哥德', '暗黑', '魔界', '冥界', '夜之女王', '莉莉絲', '魔冕', '滅世', '暗夜', '墮落', '墮天', '魔女', '女巫', '深淵', '魔域', '魅魔']
  },
  {
    id: 'pc_angel',
    name: '天使神聖',
    icon: '👼',
    description: '熾天使、智天使、聖女',
    keywords: ['天使', '聖女', '聖堂', '熾天使', '智天使', '座天使', '聖殿']
  },
  {
    id: 'pc_chinese_myth',
    name: '中國神話',
    icon: '🐉',
    description: '女媧、嫦娥、九天玄女、鳳凰',
    keywords: ['女媧', '嫦娥', '九天玄女', '鳳凰', '青鸞', '白鹿', '九尾狐', '麒麟', '瑤池', '月宮', '太陽鳥', '軒轅', '旱魃', '姑射', '湘夫人', '大荒', '西王母', '常羲', '羲和', '精衛', '織女', '巫山', '洛神', '孟婆', '后土', '祝融', '玄冥', '嫘祖', '神話火鳳']
  },
  {
    id: 'pc_changxiangsi',
    name: '長相思',
    icon: '🌸',
    description: '小夭、玟小六、青丘王妃',
    keywords: ['小夭', '玟小六', '青丘王妃', '阿念', '皓翎王姬', '防風意映', '辰榮馨悅', '西陵珩', '桑甜兒', '長相思', '瑱瑱']
  },
  {
    id: 'pc_liaozhai',
    name: '聊齋志異',
    icon: '👻',
    description: '聶小倩、嬰寧、畫皮',
    keywords: ['聶小倩', '嬰寧', '畫皮', '畫壁', '連城', '宦娘', '綠衣女', '阿寶', '香玉', '絳雪', '青鳳', '翩翩', '花姑子', '嬌娜', '梅女', '雲翠仙', '俠女', '鬼妻', '夜明珠', '封三娘', '聊齋', '蓮香', '巧娘', '辛十四娘', '白秋練']
  },
  {
    id: 'pc_classic_novels',
    name: '三國紅樓水滸',
    icon: '📚',
    description: '小喬、林黛玉、扈三娘',
    keywords: ['小喬', '大喬', '貂蟬', '孫尚香', '甄宓', '林黛玉', '薛寶釵', '王熙鳳', '賈元春', '晴雯', '妙玉', '史湘雲', '女兒國王', '鐵扇公主', '玉兔精', '白骨精', '蜘蛛精', '老鼠精', '扈三娘', '潘金蓮', '李師師', '孫二娘', '顧大嫂']
  },
  {
    id: 'pc_jinyong',
    name: '金庸武俠',
    icon: '⚔️',
    description: '黃蓉、小龍女、趙敏',
    keywords: ['黃蓉', '小龍女', '趙敏', '周芷若', '任盈盈', '東方不敗', '王語嫣', '阿朱', '郭襄', '霍青桐', '香香公主', '李莫愁', '梅超風', '金庸']
  },
  {
    id: 'pc_cdrama',
    name: '熱播陸劇',
    icon: '📺',
    description: '甄嬛、如懿、花千骨',
    keywords: ['甄嬛', '華妃', '眉莊', '陵容', '如懿', '魏瓔珞', '白淺', '鳳九', '花千骨', '盛明蘭', '小楓', '褚璇璣', '司藤', '蒼蘭訣', '黎蘇蘇', '葉夕霧', '薛芳菲', '姜雪寧', '趙盼兒', '柳舟記', '漼時宜', '陸文昔', '岳綺羅', '鳳知微', '李長歌', '熱播陸劇', '影視', '陸劇']
  },
  {
    id: 'pc_hanfu',
    name: '中國朝代古裝',
    icon: '👘',
    description: '漢唐宋明清、宮廷漢服',
    keywords: ['漢代', '唐代', '宋代', '明代', '清代', '魏晉', '戰國', '宮廷', '漢服', '朝代', '古裝', '故宮', '宮服', '龍魂金殿', '盛唐', '青銅古器', '漢代神話', '盛唐文士', '清代宮廷', '宮廷漢服', '宮廷劍姬', '春庭仕女', '絕代仕女']
  },
  {
    id: 'pc_xianxia',
    name: '仙俠修真',
    icon: '🗡️',
    description: '劍仙、花仙、狐仙',
    keywords: ['仙俠', '劍仙', '花仙', '水仙', '謫仙', '舞仙', '風仙', '雪仙', '狐仙', '龍女', '神女', '仙子', '月下劍仙', '仙俠桃花', '仙俠魔法', '桃花仙境']
  },
  {
    id: 'pc_world_costume',
    name: '世界民族服飾',
    icon: '🌍',
    description: '韓服、和服、莎麗',
    keywords: ['韓服', '和服', '泰服', '奧黛', '莎麗', '英倫', '法式', '意式', '美式', '埃及', '摩洛哥', '希臘', '墨西哥', '冰島', '瑞士', '環球', '世界民族', '異域', '首爾']
  },
  {
    id: 'pc_fantasy',
    name: '奇幻魔法',
    icon: '🔮',
    description: '人魚、冰雪女王、龍族',
    keywords: ['奇幻', '魔法', '人魚', '冰雪女王', '龍族', '精靈', '森林鹿女', '亡靈女王', '吟遊詩人', '大法師', '奇幻史詩', '奇幻戰甲', '奇幻魔法']
  },
  {
    id: 'pc_anime',
    name: '動漫遊戲',
    icon: '🎮',
    description: '魔法少女、機甲、COS',
    keywords: ['動漫', '遊戲', '魔法少女', '機甲', 'COS', '貓娘', '電競', '傲嬌', '病嬌', '御姐', '廢土', '女忍者', '女武士', '浪人', '機械姬', '虛擬偶像', '異界來客', '熱門COS', '初號機', '烈火傳人']
  },
  {
    id: 'pc_scifi',
    name: '科幻賽博',
    icon: '🤖',
    description: '賽博龐克風格',
    keywords: ['科幻', '賽博', '星際', '機械', '深海科幻', '機械戰鬥', '賽博華風']
  },
  {
    id: 'pc_wedding',
    name: '婚紗系列',
    icon: '💒',
    description: '各種婚紗風格',
    keywords: ['婚紗', '復古婚紗', '拖尾婚紗', '魚尾婚紗', '蓬蓬裙', '黑色婚紗', '粉色婚紗', '紅色婚紗', '藍色婚紗', '香檳婚紗', '輕婚紗', '褲裝婚紗', '國潮婚紗', '旅拍婚紗', '中式喜嫁']
  },
  {
    id: 'pc_travel',
    name: '世界地標旅拍',
    icon: '✈️',
    description: '巴黎、香港、台灣',
    keywords: ['旅拍', '地標', '巴黎', '香港', '台灣', '艾菲爾', '鳳凰古城', '歐洲漫遊', '異域旅拍', '清新旅拍']
  },
  {
    id: 'pc_urban',
    name: '都市時尚',
    icon: '🏙️',
    description: '都市麗人、旗袍',
    keywords: ['都市', '市井', '江南水鄉', '田園']
  },
  {
    id: 'pc_queen',
    name: '女王系列',
    icon: '👑',
    description: '女王主題',
    keywords: ['女王系列']
  },
  {
    id: 'pc_wuxia',
    name: '武俠江湖',
    icon: '⚔️',
    description: '武俠、刺客、劍客',
    keywords: ['武俠', '白衣女俠', '斗笠刺客', '絕代琴師', '桃源隱士', '紅衣刀客', '江湖女兒', '暗影刺客']
  },
  {
    id: 'pc_special',
    name: '特殊場景',
    icon: '🌙',
    description: '水下、雪夜、月光',
    keywords: ['水下', '雪夜', '月光', '冬雪', '冰晶', '絲路沙漠', '沙漠夕陽', '荒原', '白玫瑰花園', '暗香閨房', '庭院春光', '希臘神廟', '哥德城堡']
  },
  {
    id: 'pc_historical',
    name: '歷史人物',
    icon: '📜',
    description: '西施、花木蘭等',
    keywords: ['西施', '王昭君', '楊貴妃', '趙飛燕', '虞姬', '花木蘭']
  },
  {
    id: 'pc_other',
    name: '其他混合',
    icon: '🎭',
    description: '其他未分類',
    keywords: ['其他', '節日', '赫本風', '特工', '神社巫女', '聖殿女騎士', '聆聽者', '預言女巫', '黑化審判官', '荊棘之路', '孤獨者', '命運主宰', '盲目信仰', '荒原孤影']
  }
];

// 自動歸類
const PARENT_CATEGORIES = [];

for (const rule of parentCategoryRules) {
  const matchedThemes = [];

  for (const [categoryName, themeId] of themeIdMap) {
    // 檢查分類名稱是否包含任何關鍵字
    const matched = rule.keywords.some(keyword => categoryName.includes(keyword));
    if (matched) {
      matchedThemes.push(themeId);
    }
  }

  if (matchedThemes.length > 0) {
    PARENT_CATEGORIES.push({
      id: rule.id,
      name: rule.name,
      icon: rule.icon,
      description: rule.description,
      themes: matchedThemes
    });
  }
}

console.log(`✓ 生成 ${PARENT_CATEGORIES.length} 個大類`);

// 生成 JavaScript 代碼
const parentCatsCode = `const PARENT_CATEGORIES = ${JSON.stringify(PARENT_CATEGORIES, null, 2)};`;
const catsCode = `const CATS = ${JSON.stringify(CATS, null, 2)};`;

// 讀取原始 index.html
const htmlPath = join(rootDir, 'index.html');
const htmlContent = readFileSync(htmlPath, 'utf-8');

// 替換 PARENT_CATEGORIES 和 CATS 陣列
let newHtmlContent = htmlContent.replace(
  /const PARENT_CATEGORIES = \[[\s\S]*?\n\];/,
  parentCatsCode
);

newHtmlContent = newHtmlContent.replace(
  /const CATS = \[[\s\S]*?\n\];/,
  catsCode
);

// 寫回 index.html
writeFileSync(htmlPath, newHtmlContent, 'utf-8');

console.log(`\n✅ 重建完成！`);
console.log(`   總大類數：${PARENT_CATEGORIES.length}`);
console.log(`   總分類數：${CATS.length}`);
console.log(`   總角色卡：${entries.length}`);
console.log(`   已更新：index.html`);
console.log(`\n💡 現在風格範例.md 是唯一資料來源，大類會自動根據分類名稱歸類`);
