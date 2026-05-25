#!/usr/bin/env node
// 從 index.html 的 CATS 陣列同步到風格範例.md
// 用途：完整匯出所有角色卡資料

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔄 開始同步 index.html CATS → 風格範例.md\n');

// 讀取 index.html
const html = readFileSync(join(rootDir, 'index.html'), 'utf-8');

// 提取 CATS 陣列（使用 Function 而非 eval 來安全執行）
const catsMatch = html.match(/const CATS = (\[[\s\S]*?\n\]);/);
if (!catsMatch) {
  console.error('❌ 找不到 CATS 陣列');
  process.exit(1);
}

let CATS;
try {
  CATS = Function(`'use strict'; return (${catsMatch[1]})`)();
} catch (e) {
  console.error('❌ 解析 CATS 陣列失敗:', e.message);
  process.exit(1);
}
console.log(`✓ 找到 ${CATS.length} 個分類`);

// 提取 MAKEUPS 物件
const makeupsMatch = html.match(/const MAKEUPS = (\{[\s\S]*?\n\});/);
let MAKEUPS = {};
if (makeupsMatch) {
  try {
    MAKEUPS = Function(`'use strict'; return (${makeupsMatch[1]})`)();
  } catch (e) {
    console.warn('⚠️ 解析 MAKEUPS 失敗，使用空物件');
  }
}

// 轉換函數
const ratioLabels = {
  r_11: '1:1',
  r_23: '2:3',
  r_34: '3:4',
  r_43: '4:3',
  r_45: '4:5',
  r_916: '9:16',
  r_cinema: '2.39:1'
};

const angLabels = {
  quan: '全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊',
  banshen: '半身人像，腰部以上，保留手部道具但不可遮五官',
  sanfen: '鎖臉微側，臉部只允許 10-15 度自然微轉，肩身可配合場景',
  huanjing: '環境人像，人物在更大場景中，強調環境氛圍'
};

const atmLabels = {
  at_clear: '清晰明亮，適合日光、戶外、清新場景',
  at_moody: '暗黑氛圍，深影與輪廓光並存，臉部必須清楚',
  at_misty: '煙霧朦朧，背景輕薄朦朧感，人物輪廓保持清晰',
  at_warm: '暖光環繞，適合宮廷、婚紗、柔和故事感'
};

const camLangLabels = {
  cl_magazine: '旅客紀錄照，平衡構圖，自然頭身比，真實場景感',
  cl_fashion: '紀實造型照，刻意但自然的姿勢，完整服裝可讀性',
  cl_documentary: '紀錄片風格，真實抓拍感，自然光影',
  dark_fantasy_realism: '暗黑奇幻寫實，真人攝影質感，保持身份真實性'
};

const lightLabels = {
  ls_natural: '自然光感，保留臉部主光，陰影不可吞掉五官',
  ls_cinematic: '電影級照明，戲劇性光影，臉部清晰可讀',
  ls_golden: '黃金時刻，暖橙色自然光，長陰影，真實膚色',
  ls_documentary: '紀錄片照明，真實環境光源'
};

// 生成 Markdown
let md = `# 紅兵風格寫真咒語產生器 — 風格範例

日期：2026-05-25（完整同步版）

---
`;

let totalEntries = 0;

for (const cat of CATS) {
  if (!cat.entries || cat.entries.length === 0) continue;

  for (const entry of cat.entries) {
    totalEntries++;

    // 標題
    md += `#### ${entry.name}\n`;

    // 基本資訊
    md += `- **ID:** \`${entry.id}\`\n`;

    // 妝容
    const makeupValue = entry.mk || 'natural_clean';
    md += `- **妝容：** ${makeupValue}\n`;

    // 場景背景
    if (entry.scene) {
      md += `- **場景背景：** ${entry.scene}\n`;
    }

    // 光線
    if (entry.light) {
      md += `- **光線：** ${entry.light}\n`;
    }

    // 妝容描述
    if (entry.makeup) {
      md += `- **妝容描述：** ${entry.makeup}\n`;
    } else if (entry.mk && MAKEUPS[entry.mk]) {
      md += `- **妝容描述：** ${MAKEUPS[entry.mk]}\n`;
    }

    // 服裝
    if (entry.outfit) {
      md += `- **服裝：** ${entry.outfit}\n`;
    }

    // 動作與鏡頭
    if (entry.prop) {
      md += `- **動作與鏡頭：** ${entry.prop}\n`;
    }

    // 構圖
    if (entry.comp) {
      md += `- **構圖：** ${entry.comp}\n`;
    }

    // 特效
    if (entry.fx) {
      md += `- **特效：** ${entry.fx}\n`;
    }

    // 色調
    if (entry.tone) {
      md += `- **色調：** ${entry.tone}\n`;
    }

    // 鏡頭角度
    if (entry.ang) {
      const angDesc = angLabels[entry.ang] || entry.ang;
      md += `- **鏡頭角度：** \`${entry.ang}\` — ${angDesc}\n`;
    }

    // 圖片比例
    if (entry.ratio) {
      const ratioDesc = ratioLabels[entry.ratio] || entry.ratio;
      md += `- **圖片比例：** \`${entry.ratio}\` — ${ratioDesc}\n`;
    }

    // 鏡頭焦段
    if (entry.lens) {
      md += `- **鏡頭焦段：** \`${entry.lens}\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接\n`;
    }

    // 燈光風格
    if (entry.light) {
      const lightDesc = lightLabels[entry.light] || entry.light;
      md += `- **燈光風格：** \`${entry.light}\` — ${lightDesc}\n`;
    }

    // 整體氛圍
    if (entry.atm) {
      const atmDesc = atmLabels[entry.atm] || entry.atm;
      md += `- **整體氛圍：** \`${entry.atm}\` — ${atmDesc}\n`;
    }

    // 鏡頭語言
    if (entry.camLang) {
      const camDesc = camLangLabels[entry.camLang] || entry.camLang;
      md += `- **鏡頭語言：** \`${entry.camLang}\` — ${camDesc}\n`;
    }

    // 來源資訊
    if (entry.source_batch) {
      md += `- **來源批次：** ${entry.source_batch}\n`;
    }
  }
}

// 寫入檔案
const outputPath = join(rootDir, '核心資料', '風格範例_完整版.md');
writeFileSync(outputPath, md, 'utf-8');

console.log(`\n✅ 同步完成！`);
console.log(`   總分類數：${CATS.length}`);
console.log(`   總角色卡：${totalEntries}`);
console.log(`   輸出檔案：核心資料/風格範例_完整版.md`);
console.log(`\n💡 請檢查檔案內容，確認無誤後可替換原本的風格範例.md`);
