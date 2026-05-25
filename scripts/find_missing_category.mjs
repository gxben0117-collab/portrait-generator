import fs from 'fs';

const md = fs.readFileSync('核心資料/風格範例.md', 'utf-8');
const lines = md.split('\n');

const entries = [];
let currentEntry = null;
let currentBigCategory = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.startsWith('## ')) {
    currentBigCategory = line.replace('## ', '').trim();
    continue;
  }

  if (line.startsWith('#### ')) {
    if (currentEntry) {
      entries.push(currentEntry);
    }
    currentEntry = {
      name: line.replace('#### ', '').trim(),
      bigCategory: currentBigCategory,
      lineNumber: i + 1,
      hasId: false,
      hasCategory: false,
      id: null
    };
    continue;
  }

  if (!currentEntry) continue;

  const idMatch = line.match(/^- \*\*ID:\*\* `([^`]+)`/);
  if (idMatch) {
    currentEntry.hasId = true;
    currentEntry.id = idMatch[1];
    currentEntry.idLine = i + 1;
  }

  const categoryMatch = line.match(/^- \*\*分類:\*\* (.+)/);
  if (categoryMatch) {
    currentEntry.hasCategory = true;
    currentEntry.category = categoryMatch[1].trim();
  }
}

if (currentEntry) {
  entries.push(currentEntry);
}

// Find entries missing category
const missingCategory = entries.filter(e => e.hasId && !e.hasCategory);

console.log(`\n找到 ${missingCategory.length} 個缺少「分類」欄位的角色卡：\n`);

missingCategory.forEach(entry => {
  console.log(`行 ${entry.lineNumber}: ${entry.name}`);
  console.log(`  ID: ${entry.id}`);
  console.log(`  大分類: ${entry.bigCategory}`);
  console.log(`  ID 所在行: ${entry.idLine}`);
  console.log('');
});
