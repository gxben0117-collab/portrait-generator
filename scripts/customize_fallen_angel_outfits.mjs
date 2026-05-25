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

// 基礎服飾描述
const baseOutfit = 'high-end couture gown structure, cinematic fabric weight, realistic tailoring construction, natural fabric draping, realistic transparent layering, luxury embroidery craftsmanship, realistic gold-thread details, realistic jewelry craftsmanship, realistic metal ornaments, high-end cinematic costume silhouette, natural air flow sensation, realistic fabric translucency, multi-layer garment structure';

// 為每個墮天使角色卡設計「正邪衝擊」的服飾
// 設計理念：破碎性感服飾 + 神聖配件 = 正邪視覺衝擊
const fallenAngelCustomizations = {
  '孤星天使 · 最後守望': {
    prefix: 'torn divine white silk and shadow black sheer fabric',
    accessories: 'tattered sensual holy dress with exposed shoulders, sacred golden cross necklace contrasting with dark corruption, broken divine lace revealing skin, cracked holy crystal jewelry, one pristine white wing and one deteriorating dark wing, dying starlight halo mixed with shadow tendrils, sacred silver cross ornaments on corrupted black fabric',
    theme: '正邪衝擊：破碎聖潔服飾 + 神聖十字架 vs 黑暗侵蝕'
  },
  '星淚禁域聖姬 · 星穹孤城': {
    prefix: 'shredded celestial white and cosmic void purple transparent layers',
    accessories: 'torn sensual holy maiden gown with bare shoulders, large sacred cross pendant on exposed chest, ripped divine fabric revealing skin, holy star crystal jewelry contrasting with dark void accents, pristine white feather wings with darkness seeping through, sacred constellation cross ornaments on corrupted fabric',
    theme: '正邪衝擊：撕裂星辰聖衣 + 聖十字架 vs 宇宙黑暗'
  },
  '墮聖凋零天司 · 墮落聖域': {
    prefix: 'deteriorating sacred gold and corrupted black sheer fabric',
    accessories: 'crumbling sensual divine ceremonial dress with exposed skin, ornate golden cross necklace on corrupted chest, fading holy fabric torn and revealing, tarnished sacred jewelry with dark crystal growth, once-white wings now half-blackened, divine cross ornaments cracking and darkening, holy symbols on torn sensual fabric',
    theme: '正邪衝擊：凋零神權華服 + 黃金十字架 vs 墮落黑暗'
  },
  '叛逆黑翼 · 堕落之翼': {
    prefix: 'shattered divine silver and rebellious black leather-like fabric',
    accessories: 'torn sensual holy armor revealing skin, inverted silver cross necklace as rebellion symbol, broken divine fabric mixed with dark sensual materials, corrupted sacred jewelry embracing darkness, one broken white wing and one fully black rebellious wing, sacred cross ornaments forcefully transformed into dark symbols, holy metal on torn provocative fabric',
    theme: '正邪衝擊：破碎神聖戰甲 + 倒十字架 vs 叛逆黑暗'
  }
};

let updateCount = 0;

// 遍歷所有角色卡
cats.forEach(cat => {
  cat.entries.forEach(entry => {
    // 檢查是否為墮天使系列
    if ((entry.sub === '墮天使系列' || entry.series === '墮天使系列') &&
        fallenAngelCustomizations[entry.name]) {

      const custom = fallenAngelCustomizations[entry.name];

      // 組合完整服飾描述：顏色前綴 + 基礎描述 + 配備
      entry.outfit = `${custom.prefix} ${baseOutfit}, ${custom.accessories}`;

      updateCount++;
      console.log(`✓ 更新: ${entry.name}`);
      console.log(`  主題: ${custom.theme}`);
      console.log(`  顏色: ${custom.prefix}`);
      console.log(`  配備: ${custom.accessories.substring(0, 60)}...`);
      console.log('');
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

console.log(`\n✅ 完成！共更新了 ${updateCount} 個墮天使角色卡`);
console.log('\n基礎服飾描述：');
console.log(baseOutfit);
console.log('\n設計理念：正邪衝擊 - 神聖與墮落的視覺對抗');
