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

// 強化版基礎服飾描述（含閃亮金屬光芒）
const enhancedBaseOutfit = 'high-end gothic couture gown structure with intricate shimmering metallic embroidery, cinematic heavy fabric weight with dramatic draping, realistic tailoring construction with asymmetric cuts, natural fabric flowing with wind effect, realistic transparent black layering with lace details, luxury dark embroidery craftsmanship with gleaming silver-gold thread patterns, realistic ornate jewelry craftsmanship with reflective gothic motifs, realistic shining metal ornaments with sharp geometric designs and golden-silver luster, high-end cinematic dark fantasy costume silhouette, natural air flow sensation with fabric movement, realistic fabric translucency with shadow play and metallic shimmer, multi-layer ceremonial structure with torn edges and sparkling metal accents';

// 完全黑化翅膀描述
const fullBlackWings = 'fully corrupted black demon wings with sharp feather edges, realistic dark wing texture with metallic sheen, gothic wing architecture with dramatic spread';

// 6 組完全黑化性感墮天使角色卡
const darkFallenAngels = [
  {
    name: '黑化墮天使｜深淵女王',
    sub: '墮天使系列',
    scene: 'throne of absolute darkness in deepest abyss, black flames surrounding, void energy swirling, complete corruption atmosphere, no light remaining',
    outfit: `absolute black and dark crimson sensual ${enhancedBaseOutfit}, torn provocative black dress revealing skin, inverted cross choker on exposed neck, shredded dark fabric with bare shoulders and thighs, black diamond jewelry with dark energy glow, corrupted metal ornaments with demonic symbols, ${fullBlackWings}`,
    theme: '完全黑化：深淵女王華服 + 倒十字頸鍊 vs 絕對黑暗'
  },
  {
    name: '黑化墮天使｜暗夜魅惑者',
    sub: '墮天使系列',
    scene: 'seductive dark chamber with black silk curtains, dim purple-black candlelight, sensual shadows dancing, complete darkness with hints of forbidden allure',
    outfit: `seductive black and dark purple transparent ${enhancedBaseOutfit}, sensual torn black lace dress with exposed skin, large black cross pendant between breasts, shredded provocative fabric revealing body curves, dark amethyst jewelry with seductive glow, black metal chain ornaments, ${fullBlackWings}`,
    theme: '完全黑化：魅惑黑紗 + 黑十字架 vs 禁忌誘惑'
  },
  {
    name: '黑化墮天使｜罪惡審判者',
    sub: '墮天使系列',
    scene: 'dark judgment hall with inverted crosses, black chains hanging, corrupted divine symbols, sinful atmosphere with dark red glow',
    outfit: `judgment black and blood red sensual ${enhancedBaseOutfit}, torn sensual judge robe revealing skin, seven black cross necklaces, shredded provocative ceremonial dress with exposed shoulders, blood ruby jewelry with dark power, corrupted metal ornaments with sin symbols, ${fullBlackWings}`,
    theme: '完全黑化：罪惡審判袍 + 七黑十字架 vs 墮落審判'
  },
  {
    name: '黑化墮天使｜暗影支配者',
    sub: '墮天使系列',
    scene: 'dark throne room with shadow tendrils, black crystal formations, dominance atmosphere, complete shadow control environment',
    outfit: `dominant black and dark silver sensual ${enhancedBaseOutfit}, torn provocative dominance dress revealing skin, spiked black cross collar, shredded commanding fabric with bare shoulders, black diamond jewelry with power glow, sharp metal chain ornaments with dominance symbols, ${fullBlackWings}`,
    theme: '完全黑化：支配黑裝 + 尖刺十字頸圈 vs 暗影統治'
  },
  {
    name: '黑化墮天使｜禁忌誘惑',
    sub: '墮天使系列',
    scene: 'forbidden dark garden with black roses, corrupted moonlight, sensual mist, taboo atmosphere with dark temptation',
    outfit: `forbidden black and dark rose sensual ${enhancedBaseOutfit}, torn seductive black dress revealing curves, black rose cross necklace, shredded provocative fabric with exposed skin, black rose jewelry with forbidden glow, thorn metal ornaments with temptation symbols, ${fullBlackWings}`,
    theme: '完全黑化：禁忌黑裝 + 黑玫瑰十字架 vs 墮落誘惑'
  },
  {
    name: '黑化墮天使｜永夜君主',
    sub: '墮天使系列',
    scene: 'eternal night palace with no dawn, black moon overhead, absolute darkness realm, perpetual night atmosphere with dark majesty',
    outfit: `eternal black and midnight blue sensual ${enhancedBaseOutfit}, torn majestic black dress revealing skin, crescent black cross crown, shredded royal fabric with exposed shoulders, black sapphire jewelry with night power, moon metal ornaments with eternal darkness symbols, ${fullBlackWings}`,
    theme: '完全黑化：永夜君主袍 + 黑月十字冠 vs 永恆黑暗'
  }
];

// 找到墮天使系列的分類
let fallenAngelCategory = null;
cats.forEach(cat => {
  cat.entries.forEach(entry => {
    if (entry.sub === '墮天使系列' || entry.series === '墮天使系列') {
      fallenAngelCategory = cat;
    }
  });
});

if (!fallenAngelCategory) {
  console.error('找不到墮天使系列分類');
  process.exit(1);
}

// 添加新角色卡
console.log('=== 添加完全黑化性感墮天使角色卡 ===\n');
darkFallenAngels.forEach((angel, index) => {
  fallenAngelCategory.entries.push(angel);
  console.log(`✓ 添加: ${angel.name}`);
  console.log(`  主題: ${angel.theme}`);
  console.log(`  場景: ${angel.scene.substring(0, 60)}...`);
  console.log('');
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

console.log(`\n✅ 完成！共添加了 ${darkFallenAngels.length} 個完全黑化性感墮天使角色卡`);
console.log('\n新角色卡主題：');
console.log('1. 深淵女王 - 絕對黑暗統治者');
console.log('2. 暗夜魅惑者 - 禁忌誘惑化身');
console.log('3. 罪惡審判者 - 墮落審判執行者');
console.log('4. 暗影支配者 - 黑暗力量掌控者');
console.log('5. 禁忌誘惑 - 墮落誘惑象徵');
console.log('6. 永夜君主 - 永恆黑暗主宰');
console.log('\n特色：');
console.log('- 完全黑化（無神聖元素殘留）');
console.log('- 性感撕裂服飾');
console.log('- 黑色十字架配件');
console.log('- 全黑惡魔翅膀');
console.log('- 閃亮金屬光芒效果');
