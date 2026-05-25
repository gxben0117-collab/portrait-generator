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

// 需要添加罩杯設定的系列關鍵字
const cupSizeKeywords = ['魅魔', '魔王', '女王', '暗夜魔女', '吸血鬼', '墮天使', '惡魔'];

let updateCount = 0;

// 遍歷所有角色卡
cats.forEach(cat => {
  cat.entries.forEach(entry => {
    // 檢查是否屬於需要添加罩杯的系列
    const needsCupSize = cupSizeKeywords.some(keyword =>
      (entry.sub && entry.sub.includes(keyword)) ||
      (entry.series && entry.series.includes(keyword)) ||
      (entry.name && entry.name.includes(keyword))
    );

    // 如果需要添加且尚未添加
    if (needsCupSize && !entry.cupSize) {
      entry.cupSize = 'F';
      updateCount++;
      console.log(`✓ 添加罩杯設定: ${entry.name} (${entry.sub || entry.series})`);
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

console.log(`\n✅ 完成！共為 ${updateCount} 個角色卡添加了 cupSize: "F" 欄位`);
