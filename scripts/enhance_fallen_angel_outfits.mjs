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

// 強化版基礎服飾描述 - 基於圖片範本 + 閃亮金屬光芒
const enhancedBaseOutfit = 'high-end gothic couture gown structure with intricate shimmering metallic embroidery, cinematic heavy fabric weight with dramatic draping, realistic tailoring construction with asymmetric cuts, natural fabric flowing with wind effect, realistic transparent black layering with lace details, luxury dark embroidery craftsmanship with gleaming silver-gold thread patterns, realistic ornate jewelry craftsmanship with reflective gothic motifs, realistic shining metal ornaments with sharp geometric designs and golden-silver luster, high-end cinematic dark fantasy costume silhouette, natural air flow sensation with fabric movement, realistic fabric translucency with shadow play and metallic shimmer, multi-layer ceremonial structure with torn edges and sparkling metal accents';

// 強化翅膀描述
const enhancedWingDescriptions = {
  'white-to-black': 'massive dramatic wings transitioning from pristine white feathers at base to corrupted black feathers at tips, realistic feather layering with visible damage and tears, cinematic wing span with gothic architectural feel',
  'broken-white': 'shattered white angel wings with broken feather structure, realistic wing damage with exposed bone-like framework, dramatic asymmetric wing positioning',
  'full-black': 'fully corrupted black demon wings with sharp feather edges, realistic dark wing texture with metallic sheen, gothic wing architecture with dramatic spread',
  'half-half': 'one pristine white angel wing and one fully black demon wing creating dramatic asymmetry, realistic feather contrast with cinematic lighting, symbolic duality in wing structure'
};

let updateCount = 0;

console.log('=== 強化墮天使服飾描述（基於圖片範本）===\n');

// 遍歷所有墮天使角色卡
cats.forEach(cat => {
  cat.entries.forEach(entry => {
    if (entry.sub === '墮天使系列' || entry.series === '墮天使系列') {

      // 提取原有的顏色前綴和配件描述
      const parts = entry.outfit.split('high-end couture gown structure');

      if (parts.length === 2) {
        const colorPrefix = parts[0].trim();
        const accessories = parts[1].replace(/^,\s*/, '').trim();

        // 根據角色選擇翅膀類型
        let wingType = 'white-to-black'; // 默認
        if (entry.name.includes('路西法') || entry.name.includes('叛逆')) {
          wingType = 'full-black';
        } else if (entry.name.includes('孤星') || entry.name.includes('最後')) {
          wingType = 'broken-white';
        } else if (entry.name.includes('背叛') || entry.name.includes('試煉')) {
          wingType = 'half-half';
        }

        // 移除原有的翅膀描述（如果有）
        const accessoriesWithoutWings = accessories
          .replace(/,?\s*(one pristine white wing[^,]*|pristine white feather wings[^,]*|white wings[^,]*|massive white wings[^,]*|one broken white wing[^,]*|fully corrupted black demon wings[^,]*)/gi, '')
          .trim();

        // 組合強化版服飾描述
        entry.outfit = `${colorPrefix} ${enhancedBaseOutfit}, ${accessoriesWithoutWings}, ${enhancedWingDescriptions[wingType]}`;

        updateCount++;
        console.log(`✓ 強化: ${entry.name}`);
        console.log(`  翅膀類型: ${wingType}`);
        console.log('');
      }
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

console.log(`\n✅ 完成！共強化了 ${updateCount} 個墮天使角色卡`);
console.log('\n強化重點：');
console.log('1. 哥德式高級訂製結構');
console.log('2. 複雜金屬刺繡細節');
console.log('3. 厚重布料戲劇性垂墜');
console.log('4. 不對稱剪裁設計');
console.log('5. 黑色蕾絲透明層次');
console.log('6. 銀金線條哥德圖案');
console.log('7. 尖銳幾何金屬裝飾');
console.log('8. 破碎邊緣多層結構');
console.log('9. 戲劇性翅膀描述（四種類型）');
console.log('10. 電影級黑暗奇幻輪廓');
