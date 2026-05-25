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

// 為每個女王角色卡設計專屬顏色和配備
const queenCustomizations = {
  '鳳凰焚天帝后': {
    prefix: 'blazing crimson and phoenix gold',
    accessories: 'phoenix feather accents, flame-pattern embroidery, ruby and gold jewelry, fire-motif metal ornaments with phoenix crown',
    scene: 'grand phoenix throne hall with eternal flames, floating fire embers, golden-red cinematic atmosphere, majestic fire architecture'
  },
  '深海銀月女皇': {
    prefix: 'deep ocean blue and silver moonlight',
    accessories: 'pearl and silver wave accents, moonlight-pattern embroidery, aquamarine jewelry, oceanic metal ornaments with silver crown',
    scene: 'underwater palace throne room with silver moonlight filtering through water, floating bioluminescent particles, deep blue cinematic atmosphere'
  },
  '暗夜玫瑰皇姬': {
    prefix: 'midnight black and dark rose red',
    accessories: 'black rose accents, thorn-pattern embroidery, dark ruby jewelry, rose-motif metal ornaments with thorn crown',
    scene: 'dark rose garden throne pavilion, floating black rose petals, dim moonlight, gothic romantic atmosphere'
  },
  '銀河星辰女帝': {
    prefix: 'cosmic deep purple and starlight silver',
    accessories: 'constellation accents, star-pattern embroidery, diamond and sapphire jewelry, celestial metal ornaments with star crown',
    scene: 'cosmic throne platform floating in starry space, nebula clouds, countless stars, ethereal galactic atmosphere'
  },
  '幽冥白骨妖后': {
    prefix: 'ghostly bone white and shadow black',
    accessories: 'bone-pattern accents, soul-fire embroidery, pale jade jewelry, skeletal metal ornaments with bone crown',
    scene: 'underworld bone throne hall, floating soul flames, pale green mist, eerie afterlife atmosphere'
  },
  '雪國銀狐女王': {
    prefix: 'pristine snow white and silver fox fur',
    accessories: 'fox fur accents, snowflake-pattern embroidery, diamond and silver jewelry, winter metal ornaments with ice crystal crown',
    scene: 'frozen palace throne room with ice sculptures, falling snow, silver-blue cold light, winter wonderland atmosphere'
  },
  '巴比倫傳奇': {
    prefix: 'ancient Babylonian gold and lapis lazuli blue',
    accessories: 'cuneiform pattern accents, ziggurat-inspired embroidery, lapis lazuli and gold jewelry, Mesopotamian metal ornaments with tiered crown',
    scene: 'ancient Babylonian ziggurat throne chamber, hanging gardens visible through arches, golden sunset light, ancient civilization atmosphere'
  },
  '北歐神話不朽': {
    prefix: 'Norse silver and deep ocean blue',
    accessories: 'runic pattern accents, Yggdrasil-inspired embroidery, amber and silver jewelry, Viking metal ornaments with valkyrie crown',
    scene: 'Asgard throne hall with Norse pillars, aurora borealis light, floating runes, mythological Nordic atmosphere'
  },
  '埃及史詩記憶': {
    prefix: 'ancient Egyptian gold and royal blue',
    accessories: 'hieroglyphic pattern accents, scarab and lotus embroidery, turquoise and gold jewelry, pharaonic metal ornaments with uraeus crown',
    scene: 'grand Egyptian temple throne room, massive columns with hieroglyphs, golden sunlight through high windows, ancient dynasty atmosphere'
  },
  '東斯拉夫傳奇': {
    prefix: 'Slavic crimson red and golden wheat',
    accessories: 'traditional Slavic pattern accents, firebird embroidery, amber and gold jewelry, kokoshnik crown with intricate metalwork',
    scene: 'ornate Slavic palace throne hall, colorful frescoes, golden onion domes visible through windows, rich cultural atmosphere'
  },
  '不列顛史詩': {
    prefix: 'Celtic emerald green and royal purple',
    accessories: 'Celtic knot pattern accents, dragon and thistle embroidery, emerald and gold jewelry, British crown with Celtic metalwork',
    scene: 'medieval British castle throne room, stone arches, stained glass windows, royal banners, legendary atmosphere'
  },
  '魔王｜黑曜石神殿的冷酷主宰': {
    prefix: 'obsidian black and cold steel silver',
    accessories: 'sharp geometric accents, dark crystal embroidery, black diamond jewelry, intimidating metal ornaments with obsidian crown',
    scene: 'massive obsidian temple throne hall, dark crystal formations, cold blue ambient light, oppressive majestic atmosphere'
  },
  '魔王｜熔岩王庭的赤焰女帝': {
    prefix: 'molten lava red and volcanic black',
    accessories: 'lava flow accents, volcanic pattern embroidery, fire opal jewelry, molten metal ornaments with flame crown',
    scene: 'volcanic throne chamber with flowing lava rivers, glowing magma cracks, intense heat shimmer, infernal royal atmosphere'
  },
  '亡靈領主｜白骨王座的冥界女王': {
    prefix: 'death pale bone and shadow void black',
    accessories: 'skeletal accents, necromantic pattern embroidery, black pearl jewelry, bone and dark metal ornaments with skull crown',
    scene: 'massive bone throne hall constructed from ancient remains, floating death energy, pale ghostly light, realm of the dead atmosphere'
  }
};

let updateCount = 0;

// 遍歷所有角色卡
cats.forEach(cat => {
  cat.entries.forEach(entry => {
    // 檢查是否為女王系列且服飾為空
    if ((entry.sub === '女王系列' || entry.series === '女王系列') &&
        queenCustomizations[entry.name] &&
        (!entry.outfit || entry.outfit.trim() === '')) {

      const custom = queenCustomizations[entry.name];

      // 組合完整服飾描述：顏色前綴 + 基礎描述 + 配備
      entry.outfit = `${custom.prefix} ${baseOutfit}, ${custom.accessories}`;

      // 如果場景為空且有自定義場景，更新場景
      if (custom.scene && (!entry.scene || entry.scene.trim() === '')) {
        entry.scene = custom.scene;
      }

      updateCount++;
      console.log(`✓ 更新: ${entry.name}`);
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

console.log(`\n✅ 完成！共更新了 ${updateCount} 個女王角色卡`);
console.log('\n基礎服飾描述：');
console.log(baseOutfit);
