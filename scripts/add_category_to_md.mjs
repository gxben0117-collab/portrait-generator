#!/usr/bin/env node
// 從 index.html 提取分類資訊，更新到風格範例.md

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔄 為風格範例.md 添加分類標記...\n');

// 讀取 index.html 並提取分類資訊
const html = readFileSync(join(rootDir, 'index.html'), 'utf-8');
const catsMatch = html.match(/const CATS = (\[[\s\S]*?\n\]);/);
if (!catsMatch) {
  console.error('❌ 找不到 CATS 陣列');
  process.exit(1);
}

const CATS = Function(`'use strict'; return (${catsMatch[1]})`)();

// 建立 ID -> 分類 的映射（使用 cat.name 作為詳細分類）
const idToCategoryMap = new Map();

for (const cat of CATS) {
  for (const entry of cat.entries || []) {
    idToCategoryMap.set(entry.id, cat.name);
  }
}

console.log(`✓ 找到 ${idToCategoryMap.size} 個角色卡的分類資訊`);
console.log(`✓ 範例：suc_11 -> ${idToCategoryMap.get('suc_11')}`);
console.log(`✓ 範例：suc_01 -> ${idToCategoryMap.get('suc_01')}`);

// 讀取風格範例.md
const mdPath = join(rootDir, '核心資料', '風格範例.md');
const mdContent = readFileSync(mdPath, 'utf-8');
const lines = mdContent.split('\n');

// 處理每一行
const newLines = [];
let justAddedId = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // 檢查是否是 ID 行
  const idMatch = line.match(/^- \*\*ID:\*\* `([^`]+)`/);

  if (idMatch) {
    const id = idMatch[1];
    const category = idToCategoryMap.get(id);

    newLines.push(line); // 保留 ID 行

    // 檢查下一行是否已經有分類標記
    const nextLine = lines[i + 1];
    if (nextLine && nextLine.match(/^- \*\*分類:\*\*/)) {
      // 跳過舊的分類行，稍後會添加新的
      i++;
    }

    // 添加新的分類行
    if (category) {
      newLines.push(`- **分類:** ${category}`);
    }
    justAddedId = true;
  } else {
    newLines.push(line);
    justAddedId = false;
  }
}

// 寫回檔案
writeFileSync(mdPath, newLines.join('\n'), 'utf-8');

console.log(`\n✅ 完成！已為所有角色卡添加分類標記`);
console.log(`   更新檔案：核心資料/風格範例.md`);
