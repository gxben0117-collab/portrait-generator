import fs from 'fs';

const md = fs.readFileSync('核心資料/風格範例.md', 'utf-8');
const lines = md.split('\n');

// Define category mappings based on ID prefix and big category
const categoryMap = {
  'rev_119': '暗黑魅魔',
  'suc_32': '暗黑魅魔',
  'myth_32': '神話傳說',
  'mz_31': '古代美人',
  'mz_32': '古代美人',
  'rev_121': '奇幻系列',
  'rev_122': '奇幻系列',
  'wx_32': '武俠系列',
  'rev_120': '古風系列',
  'han_04': '漢代系列',
  'tang_09': '唐代系列',
  'song_05': '宋代系列',
  'ming_04': '明代系列',
  'qing_08': '清代系列',
  'tang_10': '唐代系列',
  'ming_05': '明代系列',
  'han_05': '漢代系列',
  'tang_11': '唐代系列',
  'qing_09': '清代系列'
};

let newLines = [];
let fixed = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  newLines.push(line);

  // Check if this is an ID line
  const idMatch = line.match(/^- \*\*ID:\*\* `([^`]+)`/);
  if (idMatch) {
    const id = idMatch[1];

    // Check if next line is NOT a category line
    const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
    if (!nextLine.match(/^- \*\*分類:\*\*/)) {
      // Check if we have a mapping for this ID
      if (categoryMap[id]) {
        newLines.push(`- **分類:** ${categoryMap[id]}`);
        fixed++;
        console.log(`✓ 添加分類: ${id} -> ${categoryMap[id]}`);
      }
    }
  }
}

// Write back
fs.writeFileSync('核心資料/風格範例.md', newLines.join('\n'), 'utf-8');

console.log(`\n✅ 修正完成！共添加 ${fixed} 個「分類」欄位`);
