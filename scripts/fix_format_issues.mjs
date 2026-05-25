import fs from 'fs';

const md = fs.readFileSync('核心資料/風格範例.md', 'utf-8');
const lines = md.split('\n');

let fixed = 0;
let newLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Fix 1: Add backticks to IDs without them
  if (line.match(/^- \*\*ID:\*\* ([a-z0-9_]+)$/i) && !line.includes('`')) {
    const match = line.match(/^- \*\*ID:\*\* ([a-z0-9_]+)$/i);
    newLines.push(`- **ID:** \`${match[1]}\``);
    fixed++;
    console.log(`✓ 修正 ID 格式（添加反引號）: ${match[1]}`);
    continue;
  }

  // Fix 2: Merge multiline IDs
  if (line.match(/^- \*\*ID:\*\*\s*$/) && i + 1 < lines.length) {
    const nextLine = lines[i + 1].trim();
    if (nextLine && /^[a-z0-9_]+$/i.test(nextLine)) {
      newLines.push(`- **ID:** \`${nextLine}\``);
      i++; // Skip next line
      fixed++;
      console.log(`✓ 修正 ID 格式（合併跨行）: ${nextLine}`);
      continue;
    }
  }

  newLines.push(line);
}

// Write back
fs.writeFileSync('核心資料/風格範例.md', newLines.join('\n'), 'utf-8');

console.log(`\n✅ 修正完成！共修正 ${fixed} 個 ID 格式問題`);
console.log('\n⚠️  注意：19 個缺少「分類」欄位的角色卡需要手動添加分類資訊');
