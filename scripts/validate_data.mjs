import fs from 'fs';

const md = fs.readFileSync('核心資料/風格範例.md', 'utf-8');
const lines = md.split('\n');

const entries = [];
const issues = [];
const idSet = new Set();
const categoryMap = new Map();

let currentEntry = null;
let currentPrompt = [];
let lineNumber = 0;
let currentBigCategory = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  lineNumber = i + 1;

  if (line.startsWith('## ')) {
    currentBigCategory = line.replace('## ', '').trim();
    continue;
  }

  if (line.startsWith('#### ')) {
    if (currentEntry) {
      if (currentPrompt.length > 0) {
        currentEntry.prompt = currentPrompt.join('\n').trim();
        currentPrompt = [];
      }
      entries.push(currentEntry);
    }
    currentEntry = {
      name: line.replace('#### ', '').trim(),
      bigCategory: currentBigCategory,
      lineNumber,
      fields: {}
    };
    continue;
  }

  if (!currentEntry) continue;

  const idMatch = line.match(/^- \*\*ID:\*\* `([^`]+)`/) || line.match(/^- \*\*ID:\*\* ([a-z0-9_]+)/i);
  if (idMatch) {
    currentEntry.id = idMatch[1];
    currentEntry.fields.id = lineNumber;
    continue;
  }

  if (line.match(/^- \*\*ID:\*\*\s*$/) && i + 1 < lines.length) {
    const nextLine = lines[i + 1].trim();
    if (nextLine && /^[a-z0-9_]+$/i.test(nextLine)) {
      currentEntry.id = nextLine;
      currentEntry.fields.id = lineNumber;
      i++;
      continue;
    }
  }

  const nameMatch = line.match(/^- \*\*名稱:\*\* (.+)/);
  if (nameMatch) {
    currentEntry.displayName = nameMatch[1].trim();
    currentEntry.fields.displayName = lineNumber;
    continue;
  }

  const categoryMatch = line.match(/^- \*\*分類:\*\* (.+)/);
  if (categoryMatch) {
    currentEntry.category = categoryMatch[1].trim();
    currentEntry.fields.category = lineNumber;
    continue;
  }

  const promptMatch = line.match(/^- \*\*Prompt:\*\*\s*(.*)$/);
  if (promptMatch) {
    currentPrompt = [promptMatch[1]];
    currentEntry.fields.prompt = lineNumber;
    continue;
  }

  if (currentPrompt.length > 0 && !line.startsWith('- **')) {
    currentPrompt.push(line);
  }
}

if (currentEntry) {
  if (currentPrompt.length > 0) {
    currentEntry.prompt = currentPrompt.join('\n').trim();
  }
  entries.push(currentEntry);
}

console.log(`\n📊 解析結果：${entries.length} 個角色卡\n`);

// 1. 檢查必填欄位
console.log('🔍 檢查必填欄位...');
let missingFields = 0;
entries.forEach(entry => {
  const missing = [];
  if (!entry.id) missing.push('ID');
  if (!entry.category) missing.push('分類');

  if (missing.length > 0) {
    issues.push({
      type: 'missing_fields',
      name: entry.name,
      bigCategory: entry.bigCategory,
      line: entry.lineNumber,
      missing
    });
    missingFields++;
  }
});

if (missingFields === 0) {
  console.log('✓ 所有角色卡都有必填欄位');
} else {
  console.log(`✗ ${missingFields} 個角色卡缺少必填欄位`);
}

// 2. 檢查 ID 唯一性
console.log('\n🔍 檢查 ID 唯一性...');
const duplicateIds = new Map();
entries.forEach(entry => {
  if (entry.id) {
    if (idSet.has(entry.id)) {
      if (!duplicateIds.has(entry.id)) {
        duplicateIds.set(entry.id, []);
      }
      duplicateIds.get(entry.id).push(entry);
    } else {
      idSet.add(entry.id);
    }
  }
});

if (duplicateIds.size === 0) {
  console.log('✓ 所有 ID 都是唯一的');
} else {
  console.log(`✗ 發現 ${duplicateIds.size} 個重複的 ID`);
  duplicateIds.forEach((entries, id) => {
    issues.push({
      type: 'duplicate_id',
      id,
      entries: entries.map(e => ({ category: e.category, line: e.lineNumber }))
    });
  });
}

// 3. 檢查分類名稱一致性
console.log('\n🔍 檢查分類名稱...');
entries.forEach(entry => {
  if (entry.category) {
    const cat = entry.category;
    if (!categoryMap.has(cat)) {
      categoryMap.set(cat, []);
    }
    categoryMap.get(cat).push(entry);
  }
});

console.log(`✓ 共有 ${categoryMap.size} 個不同的分類`);

// 4. 檢查 ID 格式一致性
console.log('\n🔍 檢查 ID 格式...');
let inconsistentIds = 0;
entries.forEach(entry => {
  if (entry.id) {
    const line = lines[entry.fields.id - 1];
    const hasBackticks = line.includes('`');
    const isMultiline = line.trim() === '- **ID:**';

    if (!hasBackticks && !isMultiline) {
      inconsistentIds++;
      issues.push({
        type: 'id_no_backticks',
        category: entry.category,
        id: entry.id,
        line: entry.fields.id
      });
    }

    if (isMultiline) {
      issues.push({
        type: 'id_multiline',
        category: entry.category,
        id: entry.id,
        line: entry.fields.id
      });
    }
  }
});

if (inconsistentIds === 0) {
  console.log('✓ 所有 ID 格式一致');
} else {
  console.log(`⚠ ${inconsistentIds} 個 ID 沒有使用反引號包裹`);
}

// 總結
console.log('\n' + '='.repeat(60));
if (issues.length === 0) {
  console.log('✅ 資料完整性檢查通過，沒有發現問題！');
} else {
  console.log(`⚠️  發現 ${issues.length} 個問題\n`);

  // 按類型分組顯示
  const byType = {};
  issues.forEach(issue => {
    if (!byType[issue.type]) byType[issue.type] = [];
    byType[issue.type].push(issue);
  });

  Object.entries(byType).forEach(([type, items]) => {
    console.log(`\n【${type}】 ${items.length} 個問題：`);
    items.forEach(issue => {
      console.log(`  - 行 ${issue.line}: ${issue.name || issue.bigCategory} (${issue.id || 'no ID'})`);
      if (issue.missing) {
        console.log(`    缺少欄位: ${issue.missing.join(', ')}`);
      }
    });
  });
}
console.log('='.repeat(60));
