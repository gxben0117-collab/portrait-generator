#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdPath = path.join(__dirname, '..', '核心資料', '風格範例.md');

console.log('📖 读取风格範例.md...');
const content = fs.readFileSync(mdPath, 'utf8');

// 解析所有角色卡
const cards = [];
const lines = content.split('\n');
let currentCard = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.startsWith('#### ')) {
    if (currentCard) {
      cards.push(currentCard);
    }
    currentCard = {
      title: line.replace('#### ', '').trim(),
      content: [line],
      lineStart: i
    };
  } else if (currentCard) {
    currentCard.content.push(line);

    // 提取关键信息
    if (line.includes('- **ID:**')) {
      currentCard.id = line.match(/`([^`]+)`/)?.[1] || '';
    }
    if (line.includes('- **分類:**')) {
      currentCard.category = line.replace('- **分類:**', '').trim();
    }
    if (line.includes('- **場景背景:**')) {
      currentCard.scene = line.replace('- **場景背景:**', '').trim();
    }
  }
}

if (currentCard) {
  cards.push(currentCard);
}

console.log(`✓ 解析完成：${cards.length} 个角色卡`);

// 检测重复
const idMap = new Map();
const duplicates = [];

cards.forEach(card => {
  if (card.id) {
    if (idMap.has(card.id)) {
      duplicates.push({
        id: card.id,
        title: card.title,
        first: idMap.get(card.id),
        duplicate: card
      });
    } else {
      idMap.set(card.id, card);
    }
  }
});

console.log(`\n🔍 重复检测：`);
if (duplicates.length > 0) {
  console.log(`❌ 发现 ${duplicates.length} 个重复角色卡：`);
  duplicates.forEach(dup => {
    console.log(`   - ID: ${dup.id}, 标题: ${dup.title}`);
  });
} else {
  console.log(`✓ 没有发现重复的 ID`);
}

// 检测重复标题
const titleMap = new Map();
const titleDuplicates = [];

cards.forEach(card => {
  if (titleMap.has(card.title)) {
    titleDuplicates.push({
      title: card.title,
      first: titleMap.get(card.title),
      duplicate: card
    });
  } else {
    titleMap.set(card.title, card);
  }
});

if (titleDuplicates.length > 0) {
  console.log(`❌ 发现 ${titleDuplicates.length} 个重复标题：`);
  titleDuplicates.forEach(dup => {
    console.log(`   - 标题: ${dup.title}`);
  });
}

// 分析场景主题，智能分类
function analyzeTheme(card) {
  const scene = (card.scene || '').toLowerCase();
  const title = (card.title || '').toLowerCase();
  const category = card.category || '';

  // 魅魔/魔界系列
  if (scene.includes('underworld') || scene.includes('demon') || scene.includes('abyss') ||
      scene.includes('hell') || title.includes('魅魔') || title.includes('魔')) {
    return '魔界系列';
  }

  // 科幻/赛博朋克
  if (scene.includes('cyber') || scene.includes('neon') || scene.includes('hologram') ||
      scene.includes('mecha') || scene.includes('space') || scene.includes('sci-fi') ||
      scene.includes('future') || scene.includes('tech') || title.includes('機甲') ||
      title.includes('賽博') || title.includes('星') || title.includes('機械')) {
    return '科幻系列';
  }

  // 古装 - 汉代
  if (scene.includes('han dynasty') || title.includes('漢') || scene.includes('weiyang palace')) {
    return '漢代系列';
  }

  // 古装 - 唐代
  if (scene.includes('tang dynasty') || title.includes('唐') || title.includes('長安')) {
    return '唐代系列';
  }

  // 古装 - 宋代
  if (scene.includes('song dynasty') || title.includes('宋') || title.includes('汴京') || title.includes('臨安')) {
    return '宋代系列';
  }

  // 古装 - 明代
  if (scene.includes('ming dynasty') || title.includes('明') || title.includes('秦淮')) {
    return '明代系列';
  }

  // 古装 - 清代
  if (scene.includes('qing') || scene.includes('manchu') || title.includes('清') ||
      title.includes('格格') || title.includes('滿洲')) {
    return '清代系列';
  }

  // 武侠
  if (title.includes('俠') || title.includes('劍') || title.includes('神雕') ||
      title.includes('射鵰') || title.includes('倚天') || title.includes('天龍')) {
    return '武俠系列';
  }

  // 神话传说
  if (title.includes('山海經') || title.includes('封神') || title.includes('西遊') ||
      title.includes('白蛇') || title.includes('倩女') || scene.includes('mythological')) {
    return '神話傳說';
  }

  // 古典名著
  if (title.includes('紅樓夢') || title.includes('水滸') || title.includes('三國')) {
    return '古典名著';
  }

  // 江南水乡
  if (title.includes('江南') || scene.includes('jiangnan') || scene.includes('water town')) {
    return '江南水鄉';
  }

  // 西域
  if (title.includes('西域') || scene.includes('desert') || title.includes('絲路')) {
    return '西域系列';
  }

  // 奇幻
  if (scene.includes('fantasy') || title.includes('雪原') || title.includes('深海祭') ||
      title.includes('北境')) {
    return '奇幻系列';
  }

  // 现代都市
  if (scene.includes('shanghai') || scene.includes('hong kong') || title.includes('上海') ||
      title.includes('旗袍') || scene.includes('modern city')) {
    return '現代都市';
  }

  // 默认使用原分类或归为其他
  return category || '其他系列';
}

// 重新分类
const categorized = new Map();
const uniqueCards = [];

// 去重：使用 ID 作为唯一标识
const seenIds = new Set();
const seenTitles = new Set();

cards.forEach(card => {
  // 跳过重复的 ID
  if (card.id && seenIds.has(card.id)) {
    console.log(`⚠️  跳过重复 ID: ${card.id} - ${card.title}`);
    return;
  }

  // 跳过重复的标题
  if (seenTitles.has(card.title)) {
    console.log(`⚠️  跳过重复标题: ${card.title}`);
    return;
  }

  if (card.id) seenIds.add(card.id);
  seenTitles.add(card.title);

  const theme = analyzeTheme(card);
  card.analyzedCategory = theme;

  if (!categorized.has(theme)) {
    categorized.set(theme, []);
  }
  categorized.get(theme).push(card);
  uniqueCards.push(card);
});

console.log(`\n📊 分类统计（去重后）：`);
console.log(`   总角色卡数：${uniqueCards.length}`);
console.log(`   总分类数：${categorized.size}`);
console.log(`\n各分类详情：`);

const sortedCategories = Array.from(categorized.entries()).sort((a, b) => b[1].length - a[1].length);
sortedCategories.forEach(([category, cards]) => {
  console.log(`   ${category}: ${cards.length} 个`);
});

// 生成新的 Markdown 文件
console.log(`\n🔨 生成整理后的文件...`);

let newContent = `# 紅兵風格寫真咒語產生器 — 風格範例

日期：${new Date().toISOString().split('T')[0]}（智能分类整理版）

---
`;

// 按分类输出，每个分类内按 ID 排序
sortedCategories.forEach(([category, cards]) => {
  newContent += `\n## ${category}\n\n`;

  // 按 ID 排序
  const sortedCards = cards.sort((a, b) => {
    if (!a.id) return 1;
    if (!b.id) return -1;
    return a.id.localeCompare(b.id);
  });

  sortedCards.forEach(card => {
    newContent += card.content.join('\n') + '\n';
  });
});

// 保存到新文件
const outputPath = path.join(__dirname, '..', '核心資料', '風格範例_整理版.md');
fs.writeFileSync(outputPath, newContent, 'utf8');

console.log(`\n✅ 整理完成！`);
console.log(`   原始文件：${cards.length} 个角色卡`);
console.log(`   去重后：${uniqueCards.length} 个角色卡`);
console.log(`   删除重复：${cards.length - uniqueCards.length} 个`);
console.log(`   输出文件：風格範例_整理版.md`);
console.log(`\n💡 请检查整理版文件，确认无误后可替换原文件`);
