import fs from 'fs';

const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const catsMatch = html.match(/const CATS = (\[[\s\S]*?\n\]);/);
if (!catsMatch) {
  console.error('找不到 CATS 數組');
  process.exit(1);
}

const cats = JSON.parse(catsMatch[1]);

console.log('=== 添加罩杯設定和動作描述 ===\n');

// 戲劇性動作描述池（根據主題）
const dramaticPoses = {
  // 魅魔系列 - 魅惑、誘惑、性感
  '魅魔': [
    'seductively leaning against ornate pillar with one hand raised to lips, other hand on hip, sultry gaze toward camera, body curved in S-shape, dramatic side lighting',
    'reclining on throne with legs crossed elegantly, one arm draped over armrest, head tilted back slightly, confident smirk, commanding presence',
    'standing with back arched, hands running through hair, eyes half-closed in seductive expression, fabric flowing around body, sensual pose',
    'sitting on edge of surface with legs dangling, leaning forward with hands on knees, playful yet dangerous smile, inviting gesture',
    'walking forward with hips swaying, one hand extended toward camera in beckoning gesture, mysterious smile, fabric trailing behind dramatically'
  ],

  // 墮天使系列 - 破碎、墮落、戲劇性
  '墮天使': [
    'kneeling on one knee with head bowed, one wing spread dramatically upward, other wing broken and trailing, hand clutching torn fabric, tragic beauty',
    'standing with arms outstretched as if crucified, head tilted back, wings spread wide showing contrast between white and black feathers, dramatic lighting from above',
    'sitting on ground with knees drawn up, arms wrapped around legs, head resting on knees, wings folded protectively, vulnerable yet powerful',
    'reaching upward toward sky with desperate expression, one hand extended high, body twisted in anguish, wings partially spread, falling feathers around',
    'standing with back to camera looking over shoulder, wings spread asymmetrically, one hand touching broken wing, sorrowful expression'
  ],

  // 女王系列 - 威嚴、霸氣、王權
  '女王': [
    'sitting on throne with legs crossed, one elbow on armrest supporting chin, other hand holding scepter, regal posture, commanding gaze down at viewer',
    'standing with one foot elevated on step, hand on hip, other arm extended with palm facing outward in commanding gesture, crown gleaming, authoritative presence',
    'reclining on throne with body turned sideways, one arm draped elegantly, head held high with imperious expression, jewelry catching light',
    'standing tall with arms crossed over chest, chin raised, looking down with disdain, crown and robes emphasizing height and power',
    'walking down steps with one hand lifting skirt slightly, other hand extended for balance, graceful yet powerful stride, royal procession'
  ],

  // 暗黑魔幻系列 - 神秘、黑暗、魔法
  '暗黑': [
    'standing with arms raised, dark energy swirling around hands, head tilted back as if channeling power, dramatic wind effect on clothing and hair',
    'crouching low with one hand touching ground, dark magic emanating from fingertips, intense focused expression, hair falling forward',
    'floating slightly above ground with arms spread wide, dark aura surrounding body, eyes glowing, fabric and hair defying gravity',
    'standing in profile with one arm extended forward casting spell, other arm pulled back, dynamic magical gesture, concentrated expression',
    'sitting on dark throne with legs crossed, one hand raised with dark energy ball hovering above palm, mysterious smile, power radiating'
  ]
};

let cupSizeCount = 0;
let poseCount = 0;

cats.forEach(cat => {
  const catName = cat.cat || '未分類';

  cat.entries.forEach(entry => {
    const series = entry.sub || entry.series || '';

    // 1. 為暗黑魔幻系列添加 cupSize: "F"
    if (catName === '暗黑魔幻') {
      if (!entry.cupSize) {
        entry.cupSize = 'F';
        cupSizeCount++;
      }
    }

    // 2. 為魅魔、墮天使、女王系列添加動作描述
    if (!entry.pose) {
      let posePool = null;

      if (catName === '魅魔墮天使') {
        if (series.includes('魅魔')) {
          posePool = dramaticPoses['魅魔'];
        } else if (series.includes('墮天使')) {
          posePool = dramaticPoses['墮天使'];
        }
      } else if (catName === '女王系列') {
        posePool = dramaticPoses['女王'];
      } else if (catName === '暗黑魔幻') {
        posePool = dramaticPoses['暗黑'];
      }

      if (posePool) {
        // 隨機選擇一個動作描述
        const randomPose = posePool[Math.floor(Math.random() * posePool.length)];
        entry.pose = randomPose;
        poseCount++;
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

console.log('✅ 完成！');
console.log(`\n統計：`);
console.log(`  - 添加 cupSize "F": ${cupSizeCount} 個角色卡`);
console.log(`  - 添加戲劇性動作描述: ${poseCount} 個角色卡`);
console.log(`\n動作描述類型：`);
console.log(`  - 魅魔系列：魅惑、誘惑、性感姿勢`);
console.log(`  - 墮天使系列：破碎、墮落、戲劇性姿勢`);
console.log(`  - 女王系列：威嚴、霸氣、王權姿勢`);
console.log(`  - 暗黑魔幻系列：神秘、黑暗、魔法姿勢`);
