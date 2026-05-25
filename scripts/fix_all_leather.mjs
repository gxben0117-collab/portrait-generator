import fs from 'fs';

const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 提取 CATS 數組
const catsMatch = html.match(/const CATS = (\[[\s\S]*?\n\]);/);
if (!catsMatch) {
  console.error('找不到 CATS 數組');
  process.exit(1);
}

const cats = JSON.parse(catsMatch[1]);

let leatherCount = 0;
const leatherReplacements = [
  { from: 'leather', to: 'high-quality fabric' },
  { from: 'leather-like', to: 'metallic' },
  { from: '皮衣', to: '高級布料' },
  { from: '皮革', to: '高級面料' }
];

// 遍歷所有角色卡，移除皮革描述
cats.forEach(cat => {
  cat.entries.forEach(entry => {
    const outfit = entry.outfit || '';

    if (outfit.includes('leather') || outfit.includes('皮衣') || outfit.includes('皮革')) {
      leatherCount++;
      console.log(`✓ 修正: ${entry.name} (${entry.sub || entry.series})`);

      // 替換所有皮革相關詞彙
      let newOutfit = outfit;
      leatherReplacements.forEach(replacement => {
        newOutfit = newOutfit.replace(new RegExp(replacement.from, 'gi'), replacement.to);
      });

      entry.outfit = newOutfit;
    }
  });
});

// 將更新後的數據轉換回 JSON
const newCatsJson = JSON.stringify(cats, null, 2);

// 替換原有的 CATS 數組
html = html.replace(
  /const CATS = \[[\s\S]*?\n\];/,
  `const CATS = ${newCatsJson};`
);

// 寫回文件
fs.writeFileSync(htmlPath, html, 'utf8');

console.log(`\n✅ 完成！共修正了 ${leatherCount} 個包含皮革的角色卡`);
