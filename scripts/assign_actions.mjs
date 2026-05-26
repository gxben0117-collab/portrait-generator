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

// 10組動作＋鏡頭語言
const actions = [
  {
    name: '正面慢步凝視',
    action: 'slowly walking toward the camera, face fully visible, maintaining direct eye contact, one hand lightly holding flowing fabric near the waist, natural relaxed shoulder posture, subtle breathing motion, body movement remains physically natural',
    camera: 'cinematic tracking shot, captured with a realistic 50mm full-frame lens, shallow depth of field, soft atmospheric haze, natural cinematic lighting'
  },
  {
    name: '王座壓迫感',
    action: 'sitting upright on a dark gothic throne, face fully visible toward the camera, chin slightly lowered, hands resting naturally on the armrests, calm dominant expression, stable body posture',
    camera: 'low-angle cinematic composition, 50mm full-frame portrait photography, soft firelight reflections, foreground depth blur, dark luxury atmosphere'
  },
  {
    name: '月光站立型',
    action: 'standing beneath pale moonlight, body angled slightly toward camera, face remaining fully visible, one shoulder lowered naturally, hair moving softly in the wind, subtle breathing motion',
    camera: 'cinematic medium shot, captured with a realistic 50mm lens, moonlit rim lighting, soft fog diffusion, dark fantasy film atmosphere'
  },
  {
    name: '低頭抬眼型',
    action: 'head lowered slightly while eyes look directly toward the camera, face fully unobstructed, hands relaxed naturally near the waist, subtle unreadable smile, natural shoulder balance, physically realistic posture',
    camera: 'cinematic portrait framing, 50mm full-frame photography, soft shallow depth of field, subtle candlelight glow, captured like a frame from a dark fantasy film'
  },
  {
    name: '黑霧降臨型',
    action: 'standing motionless within drifting black smoke, face fully visible and stable, arms relaxed naturally at the sides, calm dangerous expression, hair and fabric moving softly in the air',
    camera: 'wide cinematic composition, captured using a realistic 50mm lens, dramatic backlight, volumetric smoke lighting, epic dark fantasy atmosphere'
  },
  {
    name: '披風展開型',
    action: 'slowly spreading dark flowing fabric behind her, face remaining fully visible, balanced body posture, natural hand movement, hair moving naturally with the motion, elegant dominant presence',
    camera: 'cinematic hero framing, 50mm full-frame realism, slow-motion fantasy atmosphere, soft particle lighting, dramatic fabric motion'
  },
  {
    name: '魔法施展型',
    action: 'raising one hand naturally while magical energy gathers around her fingers, face fully visible toward the camera, stable realistic posture, subtle breathing motion, calm focused gaze',
    camera: 'dark fantasy cinematic shot, captured using a realistic 50mm lens, floating magical particles, controlled volumetric lighting, natural fantasy realism'
  },
  {
    name: '火光凝視型',
    action: 'standing calmly before burning flames, face fully visible and stable, eyes locked directly toward the camera, hands resting naturally near the waist, physically realistic body posture, slow graceful movement',
    camera: 'cinematic firelit portrait, 50mm full-frame composition, warm ember reflections, dark atmospheric depth, natural cinematic contrast'
  },
  {
    name: '長廊慢步型',
    action: 'walking slowly through a dark gothic hallway, face fully visible throughout the composition, one hand brushing lightly against the wall, long fabric layers moving naturally, stable cinematic posture',
    camera: 'tracking cinematic composition, captured using realistic 50mm photography, foreground blur, volumetric light beams, dark fantasy film realism'
  },
  {
    name: '正面壓迫凝視型',
    action: 'standing directly facing the camera, face fully visible and unobstructed, chin slightly lowered, intense direct eye contact, shoulders relaxed but confident, hands resting naturally near the waist, natural cinematic posture',
    camera: 'cinematic centered framing, captured with a realistic 50mm full-frame lens, shallow depth of field, soft dark background separation, captured like a frame from a dark fantasy film'
  }
];

// 隨機打亂動作數組
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

let updateCount = 0;
let succubusActions = shuffleArray(actions);
let queenActions = shuffleArray(actions);

let succubusIndex = 0;
let queenIndex = 0;

// 遍歷所有角色卡
cats.forEach(cat => {
  cat.entries.forEach(entry => {
    // 魅魔系列
    if ((entry.sub === '魅魔系列' || entry.series === '魅魔系列') &&
        (!entry.action || entry.action.trim() === '')) {

      const actionData = succubusActions[succubusIndex % 10];
      entry.action = `${actionData.action}, ${actionData.camera}`;

      updateCount++;
      console.log(`✓ 魅魔 - ${entry.name}`);
      console.log(`  動作: ${actionData.name}`);
      console.log('');

      succubusIndex++;
    }

    // 女王系列
    if ((entry.sub === '女王系列' || entry.series === '女王系列') &&
        (!entry.action || entry.action.trim() === '')) {

      const actionData = queenActions[queenIndex % 10];
      entry.action = `${actionData.action}, ${actionData.camera}`;

      updateCount++;
      console.log(`✓ 女王 - ${entry.name}`);
      console.log(`  動作: ${actionData.name}`);
      console.log('');

      queenIndex++;
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

console.log(`\n✅ 完成！共為 ${updateCount} 個角色卡分配動作`);
console.log(`   魅魔系列：${succubusIndex} 個`);
console.log(`   女王系列：${queenIndex} 個`);
