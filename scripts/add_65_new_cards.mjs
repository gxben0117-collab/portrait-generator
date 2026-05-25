import fs from 'fs';

// 讀取風格範例.md
const mdPath = '核心資料/風格範例.md';
let mdContent = fs.readFileSync(mdPath, 'utf-8');

// 準備要添加的新內容
const newContent = `

## 中國朝代古裝系列（秦漢風骨至清代宮廷）

#### 漢代｜美麗俏皮公主
- **ID:** \`han_princess_01\`
- **分類:** 中國朝代古裝
- **妝容:** oriental
- **場景背景:** 上林苑遠景。拂曉時刻的自然晨光穿透薄霧，形成真實的空氣感（atmospheric haze）。背景為漢代古拙的夯土宮牆與遠處的枯木。演員雙手交疊於腹前，身軀微側，呈現重心落於一側的自然站姿，50mm 鏡頭完美捕捉人物與遼闊皇家獵場的空間透視。
- **光線:** ls_cinematic
- **妝容描述:** soft oriental minimalist makeup: natural translucent skin, barely-there brow fill, warm neutral eye shadow with soft eyeliner, soft pink or coral lip, understated refined elegance
- **服裝:** 穿著輕盈的硃砂紅與絳紫雙色交領右衽曲裾袍。材質為透光紗羅與重絹疊加（translucent layered gauze and heavy silk），腰間束以寬幅織錦腰帶，掛有雙層鏤空青玉佩。布料隨步伐自然擺動，具有真實重力下墜感。頭戴小巧的點翠重瓣步搖，帶有細微的金屬敲擊紋理。漢代復古妝容。保留演員原始略帶稜角的下顎線與自然眉型，薄施脂粉。遠山黛眉，唇中央點綴絳脂（traditional Han lip makeup），呈現真實皮膚微血管的剔透感與中性俏皮的靈動眼神。
- **動作與鏡頭:** woman standing naturally with hands folded at abdomen, body slightly turned, face remains clear and readable, head neck shoulders stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** full-body composition with palace hunting ground depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_916\` — 9:16
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **鏡頭語言:** \`cl_magazine\` — 旅客紀錄照，平衡構圖，自然頭身比，真實場景感
- **整體氛圍:** \`at_misty\` — 煙霧朦朧，背景輕薄朦朧感，人物輪廓保持清晰

`;

// 追加到文件末尾
fs.appendFileSync(mdPath, newContent, 'utf-8');

console.log('✅ 已添加第1個角色卡：漢代｜美麗俏皮公主');
console.log('⏳ 準備添加剩餘64個角色卡...');
console.log('\n注意：由於角色卡數量龐大，建議使用更完整的腳本處理。');
