import fs from 'fs';

const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const catsMatch = html.match(/const CATS = (\[[\s\S]*?\n\]);/);
if (!catsMatch) {
  console.error('找不到 CATS 數組');
  process.exit(1);
}

const cats = JSON.parse(catsMatch[1]);

console.log('=== 開始重新整理分類 ===\n');

// 創建新的大類結構
const newCategories = {
  '中國古裝旅拍': { cat: '中國古裝旅拍', entries: [] },
  '暗黑魔幻': { cat: '暗黑魔幻', entries: [] },
  '魅魔墮天使': { cat: '魅魔墮天使', entries: [] },
  '女王系列': { cat: '女王系列', entries: [] },
  '其他': { cat: '其他', entries: [] }
};

let movedCount = {
  '中國古裝旅拍': 0,
  '暗黑魔幻': 0,
  '魅魔墮天使': 0,
  '女王系列': 0,
  '其他': 0
};

// 遍歷所有角色卡，重新分類
cats.forEach(cat => {
  const catName = cat.cat || '未分類';

  cat.entries.forEach(entry => {
    const series = entry.sub || entry.series || '';
    const name = entry.name;

    // 判斷應該移到哪個大類
    if (series.includes('中國朝代古裝') ||
        series.includes('漢代') ||
        series.includes('唐代') ||
        series.includes('宋代') ||
        series.includes('明代') ||
        series.includes('清代') ||
        series.includes('江南') ||
        series.includes('西域') ||
        series.includes('雪域') ||
        series.includes('海島') ||
        series.includes('紅金') ||
        series.includes('青綠') ||
        series.includes('黑銀') ||
        series.includes('白藍') ||
        series.includes('宮廷華服') ||
        series.includes('江湖輕裝') ||
        series.includes('仙俠飄逸') ||
        series.includes('皇室系列') ||
        series.includes('江湖系列') ||
        series.includes('仙俠系列') ||
        series.includes('市井系列') ||
        catName === '中國古裝旅拍') {
      newCategories['中國古裝旅拍'].entries.push(entry);
      movedCount['中國古裝旅拍']++;
    }
    else if (series.includes('暗黑') ||
             series.includes('魔幻') ||
             series.includes('哥德')) {
      newCategories['暗黑魔幻'].entries.push(entry);
      movedCount['暗黑魔幻']++;
    }
    else if (series.includes('魅魔') ||
             series.includes('墮天使')) {
      newCategories['魅魔墮天使'].entries.push(entry);
      movedCount['魅魔墮天使']++;
    }
    else if (series.includes('女王')) {
      newCategories['女王系列'].entries.push(entry);
      movedCount['女王系列']++;
    }
    else {
      // 保留在原大類或移到「其他」
      if (catName !== '未分類') {
        // 如果原本就有大類，保留原大類
        let existingCat = newCategories[catName];
        if (!existingCat) {
          newCategories[catName] = { cat: catName, entries: [] };
          movedCount[catName] = 0;
        }
        newCategories[catName].entries.push(entry);
        movedCount[catName]++;
      } else {
        newCategories['其他'].entries.push(entry);
        movedCount['其他']++;
      }
    }
  });
});

// 轉換為數組格式
const newCatsArray = Object.values(newCategories).filter(cat => cat.entries.length > 0);

// 輸出統計
console.log('重新分類完成！\n');
console.log('各大類統計：');
Object.keys(movedCount).forEach(catName => {
  const count = movedCount[catName];
  if (count > 0) {
    console.log(`  📁 ${catName}: ${count} 個角色卡`);
  }
});

console.log('\n新的大類結構：');
newCatsArray.forEach(cat => {
  console.log(`  📁 ${cat.cat}: ${cat.entries.length} 個角色卡`);

  // 統計系列分布
  const seriesCount = {};
  cat.entries.forEach(entry => {
    const series = entry.sub || entry.series || '未分類系列';
    seriesCount[series] = (seriesCount[series] || 0) + 1;
  });

  // 只顯示前10個系列
  const sortedSeries = Object.keys(seriesCount).sort((a, b) => seriesCount[b] - seriesCount[a]);
  sortedSeries.slice(0, 10).forEach(series => {
    console.log(`     └─ ${series}: ${seriesCount[series]} 個`);
  });

  if (sortedSeries.length > 10) {
    console.log(`     └─ ... 還有 ${sortedSeries.length - 10} 個系列`);
  }
  console.log('');
});

// 將更新後的數據轉換回 JSON
const newCatsJson = JSON.stringify(newCatsArray, null, 2);

// 替換原有的 CATS 數組
html = html.replace(
  /const CATS = \[[\s\S]*?\n\];/,
  `const CATS = ${newCatsJson};`
);

// 寫回文件
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('✅ 分類整理完成！');
console.log(`總計處理了 ${Object.values(movedCount).reduce((a, b) => a + b, 0)} 個角色卡`);
