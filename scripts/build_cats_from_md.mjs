#!/usr/bin/env node
// 從風格範例.md 生成 index.html 的 CATS 陣列
// 用途：讓風格範例.md 成為唯一資料來源

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔨 從風格範例.md 建置 CATS 陣列...\n');

// 讀取風格範例.md
const mdPath = join(rootDir, '核心資料', '風格範例.md');
const mdContent = readFileSync(mdPath, 'utf-8');

// 解析 Markdown
const entries = [];
const lines = mdContent.split('\n');
let currentEntry = null;
let currentCategory = null;
const categoryMap = new Map(); // 用於分組

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // 解析標題：#### 角色名稱
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

  // 解析欄位
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

// 加入最後一個條目
if (currentEntry) {
  entries.push(currentEntry);
}

console.log(`✓ 解析完成：${entries.length} 個角色卡`);

// 分組（使用從 .md 讀取的分類資訊）
for (const entry of entries) {
  if (!entry.id) continue;

  const category = entry.category || '未分類';
  if (!categoryMap.has(category)) {
    categoryMap.set(category, []);
  }

  // 補充必要欄位
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
let themeId = 1;

for (const [categoryName, categoryEntries] of categoryMap) {
  CATS.push({
    id: `theme_${String(themeId).padStart(3, '0')}`,
    name: categoryName,
    icon: '🎭',
    tpl: 'default',
    entries: categoryEntries
  });
  themeId++;
}

console.log(`✓ 生成 ${CATS.length} 個分類`);

// 生成 JavaScript 代碼
const catsCode = `const CATS = ${JSON.stringify(CATS, null, 2)};`;

// 讀取原始 index.html
const htmlPath = join(rootDir, 'index.html');
const htmlContent = readFileSync(htmlPath, 'utf-8');

// 替換 CATS 陣列
const newHtmlContent = htmlContent.replace(
  /const CATS = \[[\s\S]*?\n\];/,
  catsCode
);

// 寫回 index.html
writeFileSync(htmlPath, newHtmlContent, 'utf-8');

console.log(`\n✅ 建置完成！`);
console.log(`   總分類數：${CATS.length}`);
console.log(`   總角色卡：${entries.length}`);
console.log(`   已更新：index.html`);
console.log(`\n💡 現在風格範例.md 是唯一資料來源`);
