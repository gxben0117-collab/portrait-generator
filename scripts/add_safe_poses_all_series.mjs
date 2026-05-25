import fs from 'fs';

const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const catsMatch = html.match(/const CATS = (\[[\s\S]*?\n\]);/);
if (!catsMatch) {
  console.error('找不到 CATS 數組');
  process.exit(1);
}

const cats = JSON.parse(catsMatch[1]);

console.log('=== 為所有角色系列添加安全的動作描述 ===\n');

// 安全的動作描述池 - 不遮擋臉部、不破壞五官、不變形
// 原則：臉部清晰可見、自然姿勢、整體氛圍
const safePoses = [
  // 站立姿勢 - 臉部清晰
  'standing confidently with body slightly turned, face clearly visible toward camera, natural elegant posture, arms relaxed at sides',
  'standing with one hand gently resting on hip, other arm naturally at side, face forward with serene expression, graceful stance',
  'standing tall with shoulders back, both arms hanging naturally, face clearly visible with confident gaze, poised posture',
  'standing with weight shifted to one leg, creating natural S-curve, face turned toward camera, relaxed elegant pose',

  // 坐姿 - 臉部不遮擋
  'sitting elegantly with legs crossed, hands resting on lap, face clearly visible with calm expression, refined posture',
  'sitting on edge of seat with back straight, hands placed beside body, face forward with gentle smile, graceful position',
  'sitting with one leg crossed over other, arms resting naturally, face clearly visible toward camera, composed demeanor',
  'reclining slightly with body turned, face clearly visible in three-quarter view, one arm draped elegantly, relaxed pose',

  // 行走姿勢 - 動態但臉部清晰
  'walking forward with natural stride, face clearly visible toward camera, fabric flowing behind, elegant movement',
  'mid-step with graceful motion, face turned toward camera with serene expression, natural walking pose, dynamic yet poised',
  'walking with confident gait, face clearly visible in profile, natural arm swing, elegant progression',

  // 王座/椅子姿勢 - 威嚴但臉部清晰
  'seated on throne with regal posture, face clearly visible with commanding gaze, hands resting on armrests, majestic presence',
  'sitting on elevated seat with legs elegantly positioned, face forward with authoritative expression, royal bearing',
  'reclining on throne with body angled, face clearly visible toward camera, one arm draped over armrest, powerful yet graceful',

  // 輕微動作 - 不遮擋臉部
  'standing with one hand lightly touching nearby surface for balance, face clearly visible, natural elegant pose',
  'standing with arms slightly away from body, palms facing forward in welcoming gesture, face clearly visible with warm expression',
  'standing with one foot slightly forward, hands clasped gently in front, face clearly visible with serene look',

  // 側身姿勢 - 臉部仍可見
  'body turned slightly to side but face toward camera, creating elegant silhouette, natural graceful stance',
  'standing in three-quarter view with face clearly visible, body creating elegant line, poised posture',

  // 特殊場景適用 - 臉部清晰
  'standing near architectural element with natural pose, face clearly visible toward camera, elegant interaction with environment',
  'positioned with fabric or clothing flowing naturally, face clearly visible with composed expression, dramatic yet natural'
];

// 排除的系列（世界景點拍照）
const excludeSeries = ['世界地標旅拍', '世界民族服飾', '亞洲地標', '歐洲地標', '美洲地標', '大洋洲地標', '非洲地標', '中東地標'];

let addedCount = 0;
const seriesCount = {};

cats.forEach(cat => {
  const catName = cat.cat || '未分類';

  cat.entries.forEach(entry => {
    const series = entry.sub || entry.series || '';

    // 排除世界景點拍照系列
    const isExcluded = excludeSeries.some(ex => series.includes(ex) || catName.includes(ex));

    // 如果沒有 pose 且不在排除列表中，添加動作描述
    if (!entry.pose && !isExcluded && series) {
      // 隨機選擇一個安全的動作描述
      const randomPose = safePoses[Math.floor(Math.random() * safePoses.length)];
      entry.pose = randomPose;
      addedCount++;

      if (!seriesCount[series]) {
        seriesCount[series] = 0;
      }
      seriesCount[series]++;
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
console.log(`\n總計添加動作描述: ${addedCount} 個角色卡\n`);

console.log('各系列統計（前 20 個）：');
const sortedSeries = Object.keys(seriesCount)
  .sort((a, b) => seriesCount[b] - seriesCount[a])
  .slice(0, 20);

sortedSeries.forEach(series => {
  console.log(`  - ${series}: ${seriesCount[series]} 個`);
});

console.log('\n動作描述原則：');
console.log('  ✅ 臉部清晰可見');
console.log('  ✅ 不遮擋五官');
console.log('  ✅ 自然優雅姿勢');
console.log('  ✅ 避免變形角度');
console.log('  ✅ 整體氛圍營造');
console.log('  ❌ 排除世界景點拍照系列');
