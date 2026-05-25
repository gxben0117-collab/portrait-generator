import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🔄 重新排序風格大類...\n');

// 读取 index.html
const htmlPath = join(projectRoot, 'index.html');
let html = readFileSync(htmlPath, 'utf-8');

// 提取 PARENT_CATEGORIES
const pcStart = html.indexOf('const PARENT_CATEGORIES = [');
const pcEnd = html.indexOf('];', pcStart) + 2;
const pcCode = html.substring(pcStart, pcEnd);

// 执行代码获取数组
const PARENT_CATEGORIES = eval(pcCode.replace('const PARENT_CATEGORIES = ', ''));

console.log(`📊 原始順序（共 ${PARENT_CATEGORIES.length} 個）：`);
PARENT_CATEGORIES.forEach((pc, i) => {
  console.log(`${i + 1}. ${pc.name} (${pc.id})`);
});

// 定义新的排序规则
const ORDER_RULES = [
  // 第一组：中国古装类（优先）
  { group: '🎭 中國古裝類', ids: [
    'pc_hanfu',           // 中國朝代古裝
    'pc_chinese_myth',    // 中國神話
    'pc_changxiangsi',    // 長相思
    'pc_liaozhai',        // 聊齋志異
    'pc_classic_novels',  // 三國紅樓水滸
    'pc_jinyong',         // 金庸武俠
    'pc_cdrama',          // 熱播陸劇
    'pc_xianxia',         // 仙俠修真
    'pc_wuxia',           // 武俠江湖
    'pc_historical'       // 歷史人物
  ]},

  // 第二组：其他风格类
  { group: '🌍 其他風格類', ids: [
    'pc_world_costume',   // 世界民族服飾
    'pc_anime',           // 動漫遊戲
    'pc_scifi',           // 科幻賽博
    'pc_wedding',         // 婚紗系列
    'pc_travel',          // 世界地標旅拍
    'pc_urban',           // 都市時尚
    'pc_queen'            // 女王系列
  ]},

  // 第三组：奇幻魔法类
  { group: '✨ 奇幻魔法類', ids: [
    'pc_fantasy',         // 奇幻魔法
    'pc_dark_demon',      // 暗黑魔族
    'pc_angel'            // 天使神聖
  ]},

  // 第四组：混合特殊类（最后）
  { group: '🔀 混合特殊類', ids: [
    'pc_special',         // 特殊場景
    'pc_other'            // 其他混合
  ]}
];

// 创建 ID 到对象的映射
const pcMap = new Map();
PARENT_CATEGORIES.forEach(pc => pcMap.set(pc.id, pc));

// 按新顺序重新排列
const reordered = [];
ORDER_RULES.forEach(rule => {
  rule.ids.forEach(id => {
    if (pcMap.has(id)) {
      reordered.push(pcMap.get(id));
    }
  });
});

// 检查是否有遗漏的分类
const reorderedIds = new Set(reordered.map(pc => pc.id));
const missing = PARENT_CATEGORIES.filter(pc => !reorderedIds.has(pc.id));
if (missing.length > 0) {
  console.log('\n⚠️  發現遺漏的分類：');
  missing.forEach(pc => console.log(`  - ${pc.name} (${pc.id})`));
  reordered.push(...missing);
}

console.log(`\n✅ 新順序（共 ${reordered.length} 個）：\n`);
ORDER_RULES.forEach(rule => {
  console.log(`${rule.group}:`);
  rule.ids.forEach((id, i) => {
    const pc = pcMap.get(id);
    if (pc) {
      const index = reordered.findIndex(p => p.id === id);
      console.log(`  ${index + 1}. ${pc.name} (${pc.id})`);
    }
  });
  console.log('');
});

// 生成新的 PARENT_CATEGORIES 代码
const newPcCode = 'const PARENT_CATEGORIES = ' + JSON.stringify(reordered, null, 2) + ';';

// 替换 HTML 中的 PARENT_CATEGORIES
const newHtml = html.substring(0, pcStart) + newPcCode + html.substring(pcEnd);

// 写回文件
writeFileSync(htmlPath, newHtml, 'utf-8');

console.log('✅ 已更新 index.html');
console.log('\n📝 排序規則：');
console.log('  1️⃣  中國古裝類（10個）- 優先顯示');
console.log('  2️⃣  其他風格類（7個）- 中間位置');
console.log('  3️⃣  奇幻魔法類（3個）- 靠後位置');
console.log('  4️⃣  混合特殊類（2個）- 最後顯示');
console.log('\n🎉 完成！');
