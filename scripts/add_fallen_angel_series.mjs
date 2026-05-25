import fs from 'fs';

const fallenAngelData = [
  {
    id: 'fallen_angel_01',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '墮天聖殿夜翼',
    clothing: '黑銀色哥德式長袍，羽毛紋路刺繡與金屬束腰結構，巨大黑羽披風與銀色肩甲。頭飾包含黑曜石額冠、銀色流蘇、黑珍珠耳墜與十字吊飾。胸前配戴多層銀鍊與黑寶石項鍊，服裝布料具有真實重量與羽毛層次感。',
    makeup: '冷白霧感底妝，深灰與暗紅色眼影，黑色細長眼線，低飽和暗酒紅唇色。保留真實臉部骨架與自然皮膚紋理，眼神平靜直視鏡頭。',
    scene: '巨大哥德式聖堂與破碎彩窗，黑羽飄落與燭火煙霧漂浮空中。人物站立於石階中央，一側黑翼自然展開，單手扶著長劍自然回望鏡頭。冷藍月光與暖金燭火交錯形成電影級黑暗奇幻氛圍。'
  },
  {
    id: 'fallen_angel_02',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '深淵黑羽裁決',
    clothing: '黑金色墮天使戰袍，暗金羽毛刺繡與厚重絲絨披風，金屬羽翼肩甲與紅寶石胸甲，黑色羽冠與珍珠流蘇吊飾。',
    makeup: '冷灰白底妝，深黑煙燻眼妝，暗紅唇色，中性平靜神態。',
    scene: '巨大黑曜石神殿與燃燒火焰祭壇，人物坐於石製王座自然扶著扶手，黑羽與火星漂浮空氣中，紅黑色電影光影形成史詩氛圍。'
  },
  {
    id: 'fallen_angel_03',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '月夜墮羽聖歌',
    clothing: '銀黑色長袍與透明羽紗披風，銀色十字胸鍊，黑羽耳飾與水晶額鍊，絲綢布料自然垂墜。',
    makeup: '冷白底妝，灰紫色眼妝，淡暗紅唇色，保留真實面部紋理。',
    scene: '月夜廢墟教堂與殘破石柱，人物站於月光中央自然抬頭，銀藍月光穿過破碎彩窗形成真實電影級空氣感。'
  },
  {
    id: 'fallen_angel_04',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '黑翼審判王座',
    clothing: '深紅與黑色絲絨長袍，金屬鎖鏈與黑羽刺繡，巨大羽翼披肩與寶石皇冠，銀色流蘇腰鏈與玉石吊飾。',
    makeup: '冷霧底妝，深酒紅眼妝，黑紅色霧面唇妝。',
    scene: '黑色王座廳與巨大火焰窗景，人物端坐於王座中央自然交疊雙手，火焰與灰燼漂浮形成黑暗史詩電影氛圍。'
  },
  {
    id: 'fallen_angel_05',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '聖城墮羽禁域',
    clothing: '黑白色神官長袍，銀絲羽紋刺繡，黑羽披風與十字吊飾，珍珠垂鏈頭冠與銀色護肩。',
    makeup: '冷白底妝，灰黑色眼妝，低飽和莓果唇色。',
    scene: '禁忌聖城長廊與巨大石像，人物緩步穿過燭光走道自然扶著披風，霧氣與灰塵漂浮空中，真實電影攝影感。'
  },
  {
    id: 'fallen_angel_06',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '血月羽翼魔姬',
    clothing: '黑紅色羽毛長裙，金屬胸甲與紅寶石項鍊，巨大黑羽翅膀與銀色流蘇耳飾，透明黑紗披風。',
    makeup: '冷白霧感底妝，深紅煙燻眼妝，暗酒紅唇色。',
    scene: '血月夜空與黑色祭壇，人物站於石橋中央自然側身，紅色月光與霧氣形成強烈電影光影層次。'
  },
  {
    id: 'fallen_angel_07',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '幽冥聖翼墮影',
    clothing: '深紫與黑色長袍，羽毛紋刺繡與銀色肩甲，黑寶石耳墜與十字流蘇，厚重絲絨披肩。',
    makeup: '冷灰底妝，紫黑色眼妝，暗紅唇色，自然平靜神態。',
    scene: '幽冥神殿與藍色鬼火，人物站立於祭壇前自然低頭回望鏡頭，鬼火與霧氣形成深層電影空氣感。'
  },
  {
    id: 'fallen_angel_08',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '墮羽王庭夜歌',
    clothing: '黑金色宮廷禮裙，金線羽翼刺繡與珍珠腰鏈，黑羽頭冠與紅寶石吊飾，長絲絨披風自然拖地。',
    makeup: '霧感底妝，深紅眼妝，黑紅唇色。',
    scene: '巨大哥德式宮廷與燭火宴席，人物站於長桌前自然扶椅背，暖金燭火與暗紅色調形成電影級黑暗宮廷氛圍。'
  },
  {
    id: 'fallen_angel_09',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '深空黑翼神諭',
    clothing: '銀黑色未來感羽翼長袍，金屬羽片肩甲，黑水晶頭環與銀色流蘇耳飾，多層銀鍊胸飾。',
    makeup: '冷白底妝，灰藍眼妝，低飽和暗紫唇色。',
    scene: '巨大星空神殿與漂浮石柱，人物站於高台中央自然張開羽翼，藍銀星光形成真實宇宙電影氛圍。'
  },
  {
    id: 'fallen_angel_10',
    category: '奇幻魔法',
    subcategory: '墮天使系列',
    title: '墮天禁域終章',
    clothing: '黑色絲絨與銀絲交織長袍，羽毛刺繡與金屬束腰，巨大黑羽披風與黑曜石皇冠，珍珠流蘇與銀鍊吊飾層層交錯。',
    makeup: '冷霧白皙底妝，深灰黑眼妝，暗紅霧面唇色，自然沉穩神態。',
    scene: '崩壞神殿與燃燒天空，人物站於破碎石階中央自然扶著長劍，黑羽與灰燼漂浮空中。火光與冷藍天空形成史詩級電影末日氛圍。'
  }
];

// Read existing content
const existingContent = fs.readFileSync('核心資料/風格範例.md', 'utf-8');

// Generate new content
let newContent = '\n\n### 墮天使系列\n\n';

fallenAngelData.forEach(entry => {
  newContent += `#### ${entry.title}\n`;
  newContent += `- **ID:** \`${entry.id}\`\n`;
  newContent += `- **分類:** ${entry.category}｜${entry.subcategory}\n`;
  newContent += `- **妝容:** natural_clean\n`;
  newContent += `- **場景背景:** 50mm cinematic perspective, mid-distance full-body composition. ${entry.clothing} ${entry.makeup} ${entry.scene}\n\n`;
});

// Append to file
fs.writeFileSync('核心資料/風格範例.md', existingContent + newContent);

console.log('✅ 成功添加 10 組墮天使系列角色卡');
