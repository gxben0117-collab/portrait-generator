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

// 10 組新的墮天使角色卡
const newFallenAngels = [
  {
    name: '天界戰爭｜路西法的墮落',
    sub: '墮天使系列',
    scene: 'epic celestial battlefield in high heavens, divine armies clashing, falling from golden throne into dark abyss, shattered heaven gates, dramatic vertical descent through clouds',
    outfit: `rebellious divine gold and corrupted shadow black contrast ${baseOutfit}, shattered archangel armor revealing skin, inverted golden cross crown, torn holy war dress with exposed shoulders, sacred rebellion symbols mixed with dark power ornaments, massive black wings with golden feather remnants, broken divine sword accessories`,
    theme: '正邪衝擊：叛逆天使長戰甲 + 倒金十字架 vs 墮落深淵'
  },
  {
    name: '末日審判｜七號天使的背叛',
    sub: '墮天使系列',
    scene: 'apocalyptic judgment scene with seven trumpets, crumbling divine court, falling through layers of heaven, dark storm clouds and lightning, biblical end times atmosphere',
    outfit: `torn apocalyptic white and judgment black sheer fabric ${baseOutfit}, shredded divine judgment robe with bare skin, seven sacred cross pendants on corrupted chest, broken holy trumpet ornaments, tattered sensual ceremonial dress, pristine white wings turning black from tips, divine judgment symbols cracking into darkness`,
    theme: '正邪衝擊：破碎審判聖袍 + 七聖十字架 vs 末日黑暗'
  },
  {
    name: '伊甸園｜誘惑者的墮落',
    sub: '墮天使系列',
    scene: 'corrupted Garden of Eden with dying tree of knowledge, serpent coiling around ancient tree, forbidden fruit glowing darkly, paradise turning into wasteland, twilight corruption atmosphere',
    outfit: `seductive paradise white and serpent black transparent layers ${baseOutfit}, torn sensual Eden dress revealing skin, sacred apple-shaped cross necklace, snake-pattern embroidery on holy fabric, exposed shoulders with vine ornaments, white wings with serpent scales spreading, forbidden fruit jewelry mixed with holy symbols`,
    theme: '正邪衝擊：誘惑伊甸華服 + 聖果十字架 vs 蛇之墮落'
  },
  {
    name: '高空墜落｜九重天的放逐',
    sub: '墮天使系列',
    scene: 'dramatic high-altitude fall through nine layers of heaven, clouds rushing past, divine light fading above, dark void opening below, cinematic vertical descent with wind effects',
    outfit: `windswept divine white and void black flowing fabric ${baseOutfit}, torn sensual flight dress with exposed skin, sacred cross necklace flying in wind, shredded holy fabric revealing body, broken halo ornaments, massive white wings shedding feathers turning black, divine wind patterns on corrupted dress`,
    theme: '正邪衝擊：墜落天使飛行服 + 神聖十字架 vs 虛空深淵'
  },
  {
    name: '地獄之門｜守門者的墮落',
    sub: '墮天使系列',
    scene: 'massive infernal gate opening to hell, chains and dark flames, boundary between heaven and hell, guardian position at gate threshold, red-black hellfire atmosphere',
    outfit: `guardian divine silver and hellfire red sheer fabric ${baseOutfit}, torn sensual gate-keeper armor revealing skin, large sacred cross contrasting with hell chains, broken holy gate ornaments, exposed shoulders with chain accessories, white wings with hellfire burning edges, divine lock symbols corrupting into dark keys`,
    theme: '正邪衝擊：破碎守門戰甲 + 聖十字架 vs 地獄烈焰'
  },
  {
    name: '巴別塔｜驕傲者的墮落',
    sub: '墮天使系列',
    scene: 'crumbling Tower of Babel reaching toward heaven, divine lightning striking tower, falling from tower peak, scattered languages and chaos, ancient Mesopotamian architecture collapsing',
    outfit: `prideful divine gold and humbled black gradient fabric ${baseOutfit}, torn sensual tower-keeper dress with exposed skin, sacred Babylonian cross pendant, shattered holy architecture ornaments, broken crown of pride, white wings with tower debris, divine language symbols corrupting into chaos`,
    theme: '正邪衝擊：驕傲巴別華服 + 古聖十字架 vs 混亂墮落'
  },
  {
    name: '啟示錄｜紅龍之戰的墮落',
    sub: '墮天使系列',
    scene: 'apocalyptic battle with seven-headed red dragon, stars falling from sky, cosmic war in heavens, dragon tail sweeping across celestial realm, revelation prophecy atmosphere',
    outfit: `dragon-fighting divine white and crimson black battle fabric ${baseOutfit}, torn sensual war dress revealing skin, sacred dragon-slayer cross necklace, shredded holy battle armor with exposed shoulders, red dragon scale ornaments on white fabric, white wings with dragon claw marks, divine prophecy symbols turning dark`,
    theme: '正邪衝擊：破碎屠龍戰袍 + 聖十字架 vs 紅龍墮落'
  },
  {
    name: '所多瑪｜火焰審判的墮落',
    sub: '墮天使系列',
    scene: 'burning cities of Sodom and Gomorrah, divine fire and brimstone raining down, angel witnessing destruction, pillar of salt in background, biblical judgment fire atmosphere',
    outfit: `judgment divine white and sulfur black burning fabric ${baseOutfit}, torn sensual judgment dress with exposed skin, sacred fire-resistant cross pendant, burned holy fabric revealing body, brimstone crystal ornaments, white wings with fire damage, divine judgment symbols melting into darkness`,
    theme: '正邪衝擊：焚燒審判聖衣 + 聖十字架 vs 硫磺烈火'
  },
  {
    name: '約伯試煉｜信仰考驗的墮落',
    sub: '墮天使系列',
    scene: 'desolate wasteland of Job\'s trials, destroyed possessions and family, divine test atmosphere, suffering and questioning faith, dark clouds with single light ray',
    outfit: `tested divine white and suffering black torn fabric ${baseOutfit}, shredded sensual trial dress revealing skin, sacred endurance cross necklace, broken holy faith ornaments, exposed shoulders with wound-like decorations, white wings with suffering marks, divine test symbols cracking`,
    theme: '正邪衝擊：試煉破碎聖袍 + 信仰十字架 vs 苦難黑暗'
  },
  {
    name: '最後晚餐｜背叛者的墮落',
    sub: '墮天使系列',
    scene: 'dark version of last supper scene, betrayal moment frozen in time, silver coins scattered, broken bread and spilled wine, shadowy disciples, dramatic chiaroscuro lighting',
    outfit: `betrayer divine white and judas black gradient fabric ${baseOutfit}, torn sensual disciple robe revealing skin, thirty silver cross pendants, shredded holy supper dress with exposed shoulders, broken bread ornaments, white wings with silver coin patterns, divine loyalty symbols inverting to betrayal`,
    theme: '正邪衝擊：背叛者聖袍 + 三十銀幣十字架 vs 黑暗背叛'
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
console.log('=== 添加新的墮天使角色卡 ===\n');
newFallenAngels.forEach((angel, index) => {
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

console.log(`\n✅ 完成！共添加了 ${newFallenAngels.length} 個新的墮天使角色卡`);
console.log('\n新角色卡主題：');
console.log('1. 天界戰爭 - 路西法的墮落');
console.log('2. 末日審判 - 七號天使的背叛');
console.log('3. 伊甸園 - 誘惑者的墮落');
console.log('4. 高空墜落 - 九重天的放逐');
console.log('5. 地獄之門 - 守門者的墮落');
console.log('6. 巴別塔 - 驕傲者的墮落');
console.log('7. 啟示錄 - 紅龍之戰的墮落');
console.log('8. 所多瑪 - 火焰審判的墮落');
console.log('9. 約伯試煉 - 信仰考驗的墮落');
console.log('10. 最後晚餐 - 背叛者的墮落');
