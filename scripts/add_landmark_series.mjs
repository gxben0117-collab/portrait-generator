import fs from 'fs';

const landmarkData = [
  {
    id: 'landmark_01',
    category: '世界地標旅拍',
    title: '巴黎鐵塔夜色旅拍',
    clothing: '黑色長版風衣搭配絲綢深紅長裙，皮革長靴與金色金屬腰帶，珍珠耳環與細鍊項鍊點綴，服裝保留高級布料垂墜感與真實秋冬層次。',
    makeup: '自然霧感底妝，暖棕眼影，低飽和酒紅唇色，保留真實皮膚紋理與自然五官比例。',
    scene: '巴黎鐵塔夜間燈光亮起，塞納河倒映金色光影，人物站在石橋旁自然扶著風衣回望鏡頭。冷夜空氣與城市燈火形成真實電影旅拍氛圍，中遠景全身構圖，整體色調以黑金、暖橘與深藍為主。'
  },
  {
    id: 'landmark_02',
    category: '世界地標旅拍',
    title: '威尼斯水城晨霧',
    clothing: '米白色羊毛大衣搭配淡藍絲綢長裙，珍珠耳飾與銀色細鍊，高級布料帶有真實光澤與重量感。',
    makeup: '柔霧奶油底妝，灰棕色眼妝，裸粉唇色，神態自然平和。',
    scene: '威尼斯運河與石橋籠罩晨霧，小船停靠水岸，人物站在橋邊自然扶欄，風吹動長髮與外套。水面反射柔和晨光，真實歐洲旅拍紀錄片氛圍。'
  },
  {
    id: 'landmark_03',
    category: '世界地標旅拍',
    title: '東京鐵塔夜雨街景',
    clothing: '黑灰色現代都會長風衣，內搭高領針織與短皮裙，黑色長靴與銀色耳飾，服裝具有真實街頭時尚感。',
    makeup: '冷調霧感底妝，細黑眼線，低飽和莓果唇色。',
    scene: '東京鐵塔夜景與雨後街道霓虹倒影，人物撐透明雨傘自然站立街口，暖紅與霓虹藍燈光映照濕潤地面，電影感都市旅拍氛圍。'
  },
  {
    id: 'landmark_04',
    category: '世界地標旅拍',
    title: '埃及金字塔暮色',
    clothing: '沙金色長袍式洋裝，金屬腰鍊與異域風耳環，透明披紗隨風飄動，布料呈現真實沙漠光影反射。',
    makeup: '暖金底妝，深棕眼影，焦糖色唇妝，自然沉穩神態。',
    scene: '金字塔與黃昏沙漠景色，夕陽形成暖橙逆光，人物站在沙丘中央自然側身望向遠方。風沙與熱空氣形成真實沙漠電影感。'
  },
  {
    id: 'landmark_05',
    category: '世界地標旅拍',
    title: '京都神社楓葉旅拍',
    clothing: '現代日系米白色大衣搭配深紅長裙，皮革短靴與細金屬項鍊，服裝具有柔和秋冬層次。',
    makeup: '自然奶油底妝，暖橘眼妝，豆沙紅唇色。',
    scene: '京都神社與紅色鳥居，秋季楓葉飄落石階，人物自然走過神社參道，午後暖光穿過樹葉形成真實日本旅拍氛圍。'
  },
  {
    id: 'landmark_06',
    category: '世界地標旅拍',
    title: '紐約時代廣場夜拍',
    clothing: '黑色皮革長外套搭配深灰色高領洋裝，銀色耳環與金屬腰帶，現代都市感強烈。',
    makeup: '冷調霧感底妝，灰黑眼妝，低飽和裸紅唇色。',
    scene: '紐約時代廣場大型霓虹廣告與車流燈軌，人物站在街口中央自然扶著外套，城市燈光與人群形成真實電影街拍氛圍。'
  },
  {
    id: 'landmark_07',
    category: '世界地標旅拍',
    title: '冰島極光雪原旅拍',
    clothing: '白色長版羽絨外套搭配灰藍色毛衣與雪地長靴，銀色耳飾與毛絨圍巾增加寒地層次。',
    makeup: '冷白底妝，灰藍眼影，淡粉唇色，保留真實寒冷肌膚感。',
    scene: '冰島雪原與綠色極光夜空，人物站立雪地中央自然抬頭望向天空。冷藍月光與極光形成真實空氣透視與紀錄片電影感。'
  },
  {
    id: 'landmark_08',
    category: '世界地標旅拍',
    title: '希臘白城海岸旅拍',
    clothing: '白色絲綢長洋裝搭配淡藍披肩，金色耳環與珍珠項鍊，布料呈現自然海風吹動感。',
    makeup: '自然奶油底妝，暖棕眼妝，裸粉唇色。',
    scene: '希臘聖托里尼白色建築與藍色海岸，夕陽暖光灑落石階與海面，人物站於露台邊自然扶欄，電影感地中海旅拍氛圍。'
  },
  {
    id: 'landmark_09',
    category: '世界地標旅拍',
    title: '倫敦大橋雨夜紀實',
    clothing: '深咖啡色英倫風長大衣，格紋圍巾與黑色皮革長靴，銀色耳環與皮革手套。',
    makeup: '冷霧底妝，深棕眼妝，酒紅唇色。',
    scene: '倫敦塔橋與夜間街燈，細雨與霧氣漂浮泰晤士河面，人物撐傘站於石橋邊自然回望鏡頭，真實英倫電影旅拍感。'
  },
  {
    id: 'landmark_10',
    category: '世界地標旅拍',
    title: '杜拜沙海夜光旅拍',
    clothing: '黑金色現代異域風長裙，金屬腰鏈與寶石耳墜，透明黑紗披風與高級絲綢布料。',
    makeup: '暖金底妝，深棕眼線，焦糖紅唇色。',
    scene: '杜拜沙漠與遠方城市夜景，高樓燈光與星空形成巨大反差，人物站於沙丘上自然扶披風，暖風與夜色營造電影級奢華旅拍氛圍。'
  }
];

// Read existing content
const existingContent = fs.readFileSync('核心資料/風格範例.md', 'utf-8');

// Generate new content
let newContent = '\n\n### 世界地標旅拍\n\n';

landmarkData.forEach(entry => {
  newContent += `#### ${entry.title}\n`;
  newContent += `- **ID:** \`${entry.id}\`\n`;
  newContent += `- **分類:** ${entry.category}\n`;
  newContent += `- **妝容:** natural_clean\n`;
  newContent += `- **場景背景:** 50mm cinematic perspective, mid-distance full-body composition. ${entry.clothing} ${entry.makeup} ${entry.scene}\n\n`;
});

// Append to file
fs.writeFileSync('核心資料/風格範例.md', existingContent + newContent);

console.log('✅ 成功添加 10 組世界地標旅拍角色卡');
