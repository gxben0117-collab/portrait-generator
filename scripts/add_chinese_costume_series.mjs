import fs from 'fs';

const htmlPath = 'c:\\AIProjects\\001專案完成區\\美片咒語產生器\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const catsMatch = html.match(/const CATS = (\[[\s\S]*?\n\]);/);
if (!catsMatch) {
  console.error('找不到 CATS 數組');
  process.exit(1);
}

const cats = JSON.parse(catsMatch[1]);

// 高級訂製電影戲服基礎描述（中國古裝版）
const baseOutfit = 'high-end Chinese period drama costume structure, cinematic silk fabric weight with natural draping, realistic traditional tailoring construction, authentic fabric flowing with elegant movement, realistic transparent layering with traditional Chinese elements, luxury embroidery craftsmanship with cultural patterns, realistic gold-silver thread details, realistic jade jewelry craftsmanship, realistic metal ornaments with Chinese motifs, high-end cinematic historical costume silhouette, natural air flow sensation, realistic fabric translucency, multi-layer traditional structure';

// 30 個中國古裝旅拍角色卡（15 個系列 × 2）- 詳細場景描述
const chineseCharacters = [
  // 江南系列（2 個）
  {
    name: '江南｜蘇州園林煙雨',
    sub: '江南系列',
    scene: 'classical Suzhou garden pavilion surrounded by misty spring rain, elegant wooden architecture with intricately carved lattice windows and red pillars, blooming lotus pond with jade-green lily pads floating on still water, graceful weeping willow trees with long branches gently touching water surface, ancient moss-covered stone bridge with ornate railings arching over pond, soft diffused natural lighting filtering through translucent rain curtain creating ethereal glow, floating mist layers creating dreamy atmospheric depth, distant traditional white-walled black-tiled buildings barely visible through morning fog, gentle rain creating concentric ripples on pond surface, water droplets on lotus leaves, poetic Jiangnan water-town ambiance with scholarly elegance and timeless beauty',
    outfit: `light silk jade green and misty white ${baseOutfit}, delicate Jiangnan embroidery with lotus and willow patterns, flowing lightweight silk with rain-inspired transparency, elegant jade accessories, silver hairpin with plum blossom design, soft pastel color palette, graceful water-town aesthetic`,
    theme: '江南煙雨、輕薄絲綢、淡雅詩意'
  },
  {
    name: '江南｜西湖斷橋月夜',
    sub: '江南系列',
    scene: 'legendary West Lake broken bridge illuminated by full moon hanging in clear night sky, misty lake surface perfectly reflecting silver moonlight creating mirror-like effect, distant Leifeng Pagoda silhouette standing majestically against starlit sky, gentle night breeze creating subtle ripples on water, willow trees swaying softly along shoreline, traditional boats with red lanterns floating in distance, romantic Hangzhou atmosphere with legendary love story ambiance, moonbeams creating path of light across water, peaceful nocturnal beauty with poetic charm',
    outfit: `moonlight silver and lake blue ${baseOutfit}, refined Jiangnan silk embroidery with wave patterns, elegant flowing fabric with moonlit translucency, pearl and jade jewelry, delicate silver ornaments with water motifs, ethereal Jiangnan elegance`,
    theme: '西湖月色、銀藍絲綢、浪漫婉約'
  },

  // 西域系列（2 個）
  {
    name: '西域｜敦煌莫高窟',
    sub: '西域系列',
    scene: 'magnificent Dunhuang Mogao Caves carved into desert cliff face, ancient Buddhist murals with vibrant colors visible in cave interiors, golden desert sunset casting warm amber light across sand dunes and cave entrances, silk road caravans passing in distance, mystical Western Region atmosphere with spiritual energy, flying apsaras painted on cave ceilings, desert wind carrying sand particles creating atmospheric haze, ancient pilgrimage site with thousand-year history, dramatic shadows from cave architecture, exotic Silk Road cultural crossroads ambiance',
    outfit: `desert gold and crimson red ${baseOutfit}, exotic Western Region embroidery with geometric patterns, rich silk with golden thread details, turquoise and amber jewelry, ornate metal accessories with Silk Road motifs, luxurious exotic aesthetic`,
    theme: '敦煌金光、異域圖案、絲路風情'
  },
  {
    name: '西域｜天山雪峰駝鈴',
    sub: '西域系列',
    scene: 'majestic Tianshan snow-capped mountain peaks towering in background against azure sky, vast desert landscape with golden sand dunes in foreground, silk road caravan with Bactrian camels carrying goods, ancient trading post with colorful tents and merchants, dramatic sunset painting sky in orange and purple hues, desert wind creating sand waves, distant oasis with palm trees, camel bells ringing in wind creating melodic sound, exotic Western Region landscape with adventure atmosphere, silk road traders resting at waystation',
    outfit: `snow white and desert amber ${baseOutfit}, intricate Western Region patterns with camel and mountain motifs, layered silk with fur trim accents, gemstone jewelry with ethnic designs, metal ornaments with bell details, majestic Silk Road elegance`,
    theme: '天山雪域、駝鈴聲聲、異域華貴'
  },

  // 雪域系列（2 個）
  {
    name: '雪域｜布達拉宮聖光',
    sub: '雪域系列',
    scene: 'sacred Potala Palace rising majestically on Red Mountain with white and red walls gleaming in sunlight, snow-covered Tibetan plateau stretching endlessly below, colorful prayer flags fluttering in high-altitude wind carrying prayers to heaven, golden palace roofs reflecting brilliant sunlight, pilgrims prostrating on stone steps, thin mountain air creating crystal-clear visibility, spiritual Tibetan Buddhist atmosphere with divine presence, yaks grazing on distant grasslands, clouds floating below palace creating heavenly realm feeling, sacred architecture against pure blue sky',
    outfit: `sacred white and Tibetan red ${baseOutfit}, heavy brocade with Tibetan patterns, layered silk with traditional motifs, turquoise and coral jewelry, ornate silver accessories with Buddhist symbols, majestic plateau elegance`,
    theme: '布達拉宮、厚重織錦、聖潔神秘'
  },
  {
    name: '雪域｜高原湖泊冰晶',
    sub: '雪域系列',
    scene: 'pristine high-altitude plateau lake with crystal-clear turquoise water reflecting sky perfectly, snow-capped Himalayan mountain peaks mirrored in still lake surface, pure blue sky with white clouds drifting slowly, sacred natural beauty untouched by civilization, wild yaks drinking at water edge, colorful wildflowers blooming on lakeside meadow, thin air creating intense colors and sharp clarity, serene highland atmosphere with spiritual tranquility, ice crystals forming at lake edges, prayer stones stacked by pilgrims',
    outfit: `ice blue and snow white ${baseOutfit}, Tibetan brocade with snow mountain patterns, warm layered silk with fur details, silver and turquoise jewelry, metal ornaments with lake motifs, pure highland aesthetic`,
    theme: '高原湖泊、藏式配飾、冰晶聖潔'
  },

  // 海島系列（2 個）
  {
    name: '海島｜福建土樓漁火',
    sub: '海島系列',
    scene: 'iconic Fujian Tulou circular earthen building standing majestically at dusk, traditional Hakka fortress architecture with thick walls and inner courtyard, fishing boats returning to harbor with glowing lanterns creating warm orange reflections on water, coastal village atmosphere with smoke rising from cooking fires, warm golden evening light painting sky in sunset colors, traditional wooden boats moored at stone pier, fishing nets drying on racks, seagulls circling overhead, peaceful maritime community life, distant mountains silhouetted against twilight sky',
    outfit: `ocean blue and fishing village beige ${baseOutfit}, simple elegant embroidery with wave and fish patterns, lightweight breathable silk, shell and pearl accessories, silver ornaments with maritime motifs, coastal folk elegance`,
    theme: '福建土樓、輕便布衣、漁火溫暖'
  },
  {
    name: '海島｜海南椰林海風',
    sub: '海島系列',
    scene: 'tropical Hainan island paradise with tall coconut palm grove swaying in gentle sea breeze, pristine white sand beach meeting crystal-clear turquoise ocean water, gentle waves lapping at shore creating soothing sound, tropical sunshine filtering through palm fronds creating dappled shadows, distant sailboats on horizon, seashells scattered on beach, warm humid air carrying salt and coconut scent, island paradise ambiance with relaxed tropical atmosphere, coral reefs visible in shallow water, tropical birds in palm trees',
    outfit: `tropical white and ocean turquoise ${baseOutfit}, light flowing silk with palm and wave embroidery, breezy fabric with natural movement, shell and coral jewelry, silver accessories with tropical motifs, island elegance`,
    theme: '海南椰林、海洋元素、熱帶風情'
  },

  // 紅金系列（2 個）
  {
    name: '紅金｜鳳冠霞帔喜堂',
    sub: '紅金系列',
    scene: 'traditional Chinese wedding hall decorated lavishly with countless red silk lanterns hanging from ceiling, festive red and gold decorations covering every surface, golden dragon and phoenix ornaments adorning walls, joyful celebration atmosphere with guests in attendance, auspicious red carpets and curtains, golden candles burning brightly, traditional wedding altar with offerings, incense smoke rising creating mystical atmosphere, red double happiness characters everywhere, ceremonial music instruments ready for performance, ultimate festive magnificence',
    outfit: `bridal crimson red and royal gold ${baseOutfit}, intricate phoenix and dragon embroidery with golden threads, luxurious layered silk with festive patterns, jade and gold jewelry, ornate phoenix crown, traditional wedding magnificence`,
    theme: '大紅嫁衣、金線刺繡、喜慶華貴'
  },
  {
    name: '紅金｜花轎紅燈籠街',
    sub: '紅金系列',
    scene: 'ancient Chinese street decorated with hundreds of red lanterns creating tunnel of light, traditional wedding sedan chair procession moving through crowd, festive onlookers celebrating and throwing flower petals, traditional architecture with upturned eaves lining street, musicians playing celebratory music, firecrackers creating smoke and excitement, red silk banners with auspicious phrases hanging from buildings, golden afternoon sunlight filtering through lanterns, joyful celebratory atmosphere with community participation, traditional shops with red decorations',
    outfit: `festive red and golden yellow ${baseOutfit}, elaborate embroidery with auspicious symbols, rich silk with golden accents, traditional jewelry with red gemstones, ornate hair ornaments, joyful wedding elegance`,
    theme: '花轎遊街、紅燈高掛、喜慶吉祥'
  },

  // 青綠系列（2 個）
  {
    name: '青綠｜竹林茶室清雅',
    sub: '青綠系列',
    scene: 'serene bamboo forest with thousands of tall green bamboo stalks creating natural cathedral, traditional tea pavilion with elegant wooden architecture nestled among bamboo, dappled golden sunlight filtering through bamboo canopy creating dancing light patterns, peaceful atmosphere with only sound of wind rustling bamboo leaves, traditional tea ceremony setting with antique tea set, stone path winding through bamboo grove, morning mist lingering at ground level, scholarly elegance with Zen-like tranquility, bamboo shadows creating artistic patterns on pavilion floor',
    outfit: `elegant jade green and bamboo blue ${baseOutfit}, refined embroidery with bamboo and plum blossom patterns, flowing silk with natural grace, jade jewelry, simple silver hairpin, scholarly aesthetic`,
    theme: '青衫綠裙、竹林茶香、清雅脫俗'
  },
  {
    name: '青綠｜書齋山水畫卷',
    sub: '青綠系列',
    scene: 'traditional Chinese study room with walls adorned with landscape paintings and calligraphy scrolls, antique wooden furniture including scholar desk with brush and ink, tall bookshelves filled with ancient texts, window overlooking classical garden with rocks and plants, scholarly atmosphere with incense smoke curling upward, artistic ambiance with cultural refinement, soft natural lighting from paper windows, traditional four treasures of study displayed, mountain-water paintings creating contemplative mood, intellectual sanctuary for literary pursuits',
    outfit: `scholarly cyan and ink green ${baseOutfit}, delicate embroidery with landscape and poetry motifs, elegant silk with literary grace, jade and silver jewelry, refined hair ornaments, intellectual beauty`,
    theme: '書齋雅韻、山水詩意、文人氣質'
  },

  // 黑銀系列（2 個）
  {
    name: '黑銀｜夜宮月下神秘',
    sub: '黑銀系列',
    scene: 'imperial palace courtyard at night illuminated by full moon hanging in star-filled sky, mysterious long shadows cast by palace architecture creating dramatic contrast, silver moonbeams streaming through ornate windows and corridors, dark elegant palace buildings with upturned eaves silhouetted against night sky, enigmatic atmosphere with nocturnal beauty, palace lanterns providing subtle warm glow, marble courtyard reflecting moonlight, distant palace towers barely visible in darkness, peaceful night silence broken only by wind chimes, mystical nocturnal elegance',
    outfit: `midnight black and moonlight silver ${baseOutfit}, intricate embroidery with moon and cloud patterns, flowing dark silk with silver accents, silver jewelry with mysterious designs, elegant dark ornaments, nocturnal elegance`,
    theme: '黑色華服、銀飾月光、神秘夜宮'
  },
  {
    name: '黑銀｜暗夜江湖劍影',
    sub: '黑銀系列',
    scene: 'dark martial arts world at night with moonlit ancient rooftops creating dramatic stage, mysterious jianghu atmosphere with shadowy figures moving silently across tiles, silver moonlight glinting off sword blades, traditional architecture rooftops stretching into distance, martial elegance with danger lurking, night fog rolling through streets below, distant lantern lights from taverns, rooftop chase scene atmosphere, wind blowing through dark clothing, legendary martial arts world ambiance with honor and justice',
    outfit: `martial black and blade silver ${baseOutfit}, sleek embroidery with sword and martial patterns, practical flowing silk, silver accessories with weapon motifs, elegant dark ornaments, jianghu mystique`,
    theme: '暗夜江湖、銀劍黑衣、俠客神秘'
  },

  // 白藍系列（2 個）
  {
    name: '白藍｜雲海仙山飄渺',
    sub: '白藍系列',
    scene: 'endless sea of white clouds surrounding mystical immortal mountain peaks, ethereal mist swirling around floating islands, celestial peaks piercing through cloud layer into blue sky, heavenly realm ambiance with otherworldly beauty, golden sunlight illuminating cloud tops creating glowing effect, distant waterfalls cascading from floating mountains, cranes flying through clouds, spiritual energy visible as shimmering light, cultivation sect buildings perched on impossible peaks, transcendent atmosphere beyond mortal world',
    outfit: `immortal white and sky blue ${baseOutfit}, delicate embroidery with cloud and crane patterns, ultra-light flowing silk with ethereal movement, jade jewelry, silver ornaments with celestial motifs, otherworldly elegance`,
    theme: '白衣飄飄、雲海仙境、仙氣縹緲'
  },
  {
    name: '白藍｜瀑布仙境靈氣',
    sub: '白藍系列',
    scene: 'majestic waterfall cascading down from towering cliff in mystical ancient forest, rainbow forming in waterfall mist catching sunlight, spiritual energy visible as glowing particles floating in air, immortal realm atmosphere with natural wonder, crystal-clear pool at waterfall base reflecting sky, ancient trees with twisted roots surrounding sacred site, exotic flowers blooming on moss-covered rocks, natural wonder with divine presence, butterflies and spiritual creatures, cultivation paradise with pure spiritual energy',
    outfit: `celestial white and waterfall blue ${baseOutfit}, refined embroidery with water and spirit patterns, flowing silk with natural grace, crystal and jade jewelry, silver accessories with nature motifs, spiritual elegance`,
    theme: '瀑布仙境、藍白仙衣、靈氣逼人'
  },

  // 宮廷華服系列（2 個）
  {
    name: '宮廷｜金殿龍鳳呈祥',
    sub: '宮廷華服系列',
    scene: 'grand imperial palace golden hall with massive golden pillars supporting ornate ceiling, elaborate dragon and phoenix decorations carved and painted everywhere, majestic throne room with emperor throne on elevated platform, royal atmosphere with supreme authority, golden sunlight streaming through high windows creating divine glow, court officials standing in formation, red carpets leading to throne, incense burners with smoke rising, supreme elegance with imperial power, golden roof tiles visible through windows',
    outfit: `imperial gold and royal crimson ${baseOutfit}, elaborate multi-layer structure with dragon and phoenix embroidery, heavy luxurious silk with golden threads, jade and gold jewelry, ornate phoenix crown with pearls, supreme imperial magnificence`,
    theme: '多層華服、龍鳳刺繡、宮廷至尊'
  },
  {
    name: '宮廷｜珠寶鳳冠盛典',
    sub: '宮廷華服系列',
    scene: 'imperial ceremony hall decorated with elaborate silk banners and golden ornaments, court officials in formal attire standing in attendance, grand celebration with musicians and dancers, royal splendor with ceremonial magnificence, hundreds of candles and lanterns illuminating hall, ceremonial altar with offerings, incense smoke creating mystical atmosphere, traditional court music playing, supreme imperial grandeur with historical significance, architectural beauty with painted beams and carved pillars',
    outfit: `ceremonial purple and imperial gold ${baseOutfit}, complex layered structure with intricate embroidery, heavy brocade with gemstone accents, elaborate jewelry set, magnificent phoenix crown, ceremonial grandeur`,
    theme: '厚重華服、珠寶鳳冠、盛典威儀'
  },

  // 江湖輕裝系列（2 個）
  {
    name: '江湖｜輕功飛檐走壁',
    sub: '江湖輕裝系列',
    scene: 'ancient rooftops at night with martial artist in dynamic motion leaping between buildings, moonlit ceramic tiles reflecting silver light, dramatic movement captured mid-flight, jianghu atmosphere with martial arts action, traditional architecture rooftops creating urban landscape, action elegance with acrobatic grace, night wind blowing through clothing, distant city lights below, legendary lightness skill demonstration, freedom and martial prowess, rooftop chase scene with cinematic drama',
    outfit: `martial dark blue and practical gray ${baseOutfit}, streamlined structure for movement, lightweight silk with minimal embroidery, practical belt and accessories, simple hair tie, functional martial elegance`,
    theme: '輕裝簡潔、利落束腰、江湖俠女'
  },
  {
    name: '江湖｜劍佩斗笠行俠',
    sub: '江湖輕裝系列',
    scene: 'ancient mountain road winding through misty peaks, traveling martial artist walking with bamboo hat and sword, wandering hero atmosphere with freedom and justice, pine trees lining mountain path, morning mist creating atmospheric depth, distant villages visible in valleys below, traveling hero aesthetic with independence, stone markers along ancient road, wild mountain scenery with natural beauty, martial artist journey with purpose and honor, legendary jianghu wanderer ambiance',
    outfit: `wanderer earth tone and steel blue ${baseOutfit}, practical layered structure, durable silk with simple patterns, leather belt with sword, bamboo hat, traveling hero aesthetic`,
    theme: '斗笠劍佩、輕裝遠行、俠客風範'
  },

  // 仙俠飄逸系列（2 個）
  {
    name: '仙俠｜廣袖飛舞仙氣',
    sub: '仙俠飄逸系列',
    scene: 'immortal cultivation realm with floating islands suspended in sky, magical atmosphere with visible spiritual energy flowing like aurora, celestial energy creating glowing effects, ethereal beauty beyond mortal comprehension, cultivation world with ancient sect buildings on floating peaks, cranes and phoenixes flying through air, spiritual herbs growing on cliffs, immortal practitioners flying on swords in distance, transcendent realm with divine presence, clouds flowing between floating islands like rivers',
    outfit: `immortal white and celestial purple ${baseOutfit}, ultra-wide sleeves with flowing ribbons, ultra-light silk with cloud embroidery, jade accessories, silver ornaments with immortal motifs, transcendent elegance`,
    theme: '廣袖飄帶、輕薄仙衣、仙氣十足'
  },
  {
    name: '仙俠｜雲紋飄渺修仙',
    sub: '仙俠飄逸系列',
    scene: 'cultivation mountain peak with swirling clouds creating mystical atmosphere, spiritual energy visible as glowing mist and light particles, immortal sect architecture with elegant pavilions and halls, mystical cultivation realm with otherworldly beauty, ancient pine trees twisted by centuries of spiritual energy, meditation platforms on cliff edges, spiritual arrays glowing with power, cultivation disciples practicing in distance, sacred mountain with divine presence, heavenly realm atmosphere with transcendent beauty',
    outfit: `cultivation azure and cloud white ${baseOutfit}, flowing structure with long ribbons, ethereal silk with cloud patterns, spiritual jade jewelry, silver accessories with cultivation symbols, otherworldly grace`,
    theme: '雲紋飄逸、仙氣飄飄、修仙境界'
  },

  // 皇室系列（2 個）
  {
    name: '皇室｜皇后威儀天下',
    sub: '皇室系列',
    scene: 'empress throne room with supreme authority and imperial power, imperial court with officials bowing in respect, majestic atmosphere with absolute dignity, golden throne on elevated platform with dragon carvings, red pillars and golden decorations throughout hall, incense smoke rising creating divine atmosphere, court attendants standing in formation, supreme elegance with mother-of-nation presence, sunlight streaming through high windows creating heavenly glow, ultimate imperial authority and grace',
    outfit: `empress deep purple and imperial gold ${baseOutfit}, supreme multi-layer structure with dragon and phoenix, heavy ceremonial silk with golden embroidery, complete imperial jewelry set, magnificent empress crown, ultimate royal authority`,
    theme: '皇后威嚴、至高無上、母儀天下'
  },
  {
    name: '皇室｜公主天真爛漫',
    sub: '皇室系列',
    scene: 'imperial garden with hundreds of blooming flowers in vibrant colors, playful atmosphere with butterflies and birds, royal innocence with protected palace life, ornate pavilions and winding paths through garden, koi pond with lotus flowers, youthful joy with carefree spirit, palace maids attending in background, spring sunshine creating warm glow, traditional garden architecture with rockeries and bridges, princess playground with natural beauty and royal luxury',
    outfit: `princess pink and royal gold ${baseOutfit}, elegant youthful structure, light silk with flower embroidery, delicate jewelry, cute hair ornaments, innocent royal charm`,
    theme: '公主天真、花園嬉戲、皇室嬌寵'
  },

  // 江湖系列（2 個）
  {
    name: '江湖｜琴師優雅撫琴',
    sub: '江湖系列',
    scene: 'elegant music pavilion built over flowing river with water sounds creating natural harmony, traditional guqin instrument placed on carved wooden table, peaceful atmosphere with artistic jianghu life, willow trees surrounding pavilion with branches touching water, musical elegance with cultural refinement, incense burning creating fragrant smoke, traditional Chinese paintings on pavilion walls, afternoon sunlight filtering through lattice windows, artistic sanctuary with scholarly atmosphere, river flowing gently creating soothing background sound',
    outfit: `musician jade green and elegant white ${baseOutfit}, refined structure for playing instrument, flowing silk with music note patterns, jade jewelry, elegant hair ornaments, artistic grace`,
    theme: '琴師優雅、撫琴悠揚、藝術氣質'
  },
  {
    name: '江湖｜舞姬嫵媚風情',
    sub: '江湖系列',
    scene: 'performance stage in elegant restaurant with audience of merchants and scholars watching intently, artistic atmosphere with entertainment district charm, graceful performance with silk ribbons flowing, traditional Chinese architecture with red lanterns providing warm lighting, musicians playing traditional instruments in background, entertainment district with cultural sophistication, carved wooden stage with painted decorations, audience tables with tea and wine, folk art performance with seductive charm and artistic skill',
    outfit: `dancer crimson and golden yellow ${baseOutfit}, flowing structure for dance movement, light silk with ribbon details, elegant jewelry, ornate hair accessories, seductive performance charm`,
    theme: '舞姬嫵媚、翩翩起舞、風情萬種'
  },

  // 仙俠系列（2 個）
  {
    name: '仙俠｜仙子聖潔無瑕',
    sub: '仙俠系列',
    scene: 'heavenly palace with divine light radiating from every surface, celestial realm with pure white jade architecture, pure spiritual energy creating glowing atmosphere, sacred immortal atmosphere with divine beauty, golden clouds floating around palace, celestial beings in attendance, divine music playing from unknown source, lotus flowers blooming in celestial ponds, transcendent beauty beyond mortal world, heavenly realm with supreme purity and grace',
    outfit: `celestial pure white and holy silver ${baseOutfit}, sacred flowing structure, pristine silk with divine patterns, crystal and jade jewelry, silver crown with celestial motifs, divine purity`,
    theme: '仙子聖潔、神聖光輝、超凡脫俗'
  },
  {
    name: '仙俠｜妖女魅惑眾生',
    sub: '仙俠系列',
    scene: 'enchanted forest with mystical purple fog swirling between ancient twisted trees, seductive atmosphere with dangerous allure, demonic beauty with supernatural charm, dark flowers blooming with intoxicating fragrance, mysterious lights floating like will-o-wisps, dangerous allure with captivating presence, ancient trees with faces in bark, supernatural charm with otherworldly seduction, dark magic energy visible in air, legendary demon realm with forbidden beauty',
    outfit: `seductive deep red and mysterious black ${baseOutfit}, alluring flowing structure, sensual silk with enchanting patterns, dark jewelry, seductive ornaments, dangerous beauty`,
    theme: '妖女魅惑、危險誘惑、傾國傾城'
  },

  // 市井系列（2 個）
  {
    name: '市井｜才女書卷氣質',
    sub: '市井系列',
    scene: 'traditional bookstore with tall wooden shelves filled with ancient texts and scrolls, scholarly atmosphere with scent of old paper and ink, common people life with intellectual beauty, natural lighting from paper windows, cultural elegance with literary refinement, customers browsing books quietly, traditional furniture with scholar desk, calligraphy samples hanging on walls, intellectual sanctuary in bustling city, peaceful reading atmosphere with cultural depth',
    outfit: `scholarly light blue and ink black ${baseOutfit}, simple elegant structure, refined cotton-silk blend, minimal jewelry, simple hair ornaments, intellectual charm`,
    theme: '才女書卷、詩書氣質、知性美'
  },
  {
    name: '市井｜歌伎風情萬種',
    sub: '市井系列',
    scene: 'entertainment district tea house with lively atmosphere and cheerful conversations, common people entertainment with folk charm, artistic performance stage with traditional decorations, red lanterns casting warm glow throughout establishment, folk charm with cultural vitality, customers enjoying tea and snacks, traditional architecture with carved wooden details, musicians tuning instruments, entertainment district with vibrant energy, folk art tradition with community gathering',
    outfit: `entertainer rose pink and elegant purple ${baseOutfit}, graceful performance structure, colorful silk with floral patterns, modest jewelry, charming hair accessories, folk elegance`,
    theme: '歌伎風情、茶樓獻藝、民間藝術'
  }
];

// 找到或創建分類
let targetCategory = cats.find(cat => cat.cat === '中國古裝旅拍');
if (!targetCategory) {
  targetCategory = { cat: '中國古裝旅拍', entries: [] };
  cats.push(targetCategory);
}

// 添加新角色卡
console.log('=== 添加中國古裝旅拍角色卡（詳細場景版）===\n');
chineseCharacters.forEach((character, index) => {
  targetCategory.entries.push(character);
  console.log(`✓ 添加: ${character.name}`);
  console.log(`  系列: ${character.sub}`);
  console.log(`  主題: ${character.theme}`);
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

console.log(`\n✅ 完成！共添加了 ${chineseCharacters.length} 個中國古裝旅拍角色卡`);
console.log('\n✨ 所有場景描述都已詳細化（類似墮天使風格）');
console.log('\n系列統計：');
console.log('📍 地理場景差異化：8 個');
console.log('🎨 色彩主題差異化：8 個');
console.log('👗 服飾結構差異化：6 個');
console.log('🎭 身份角色差異化：8 個');
console.log('\n總計：30 個角色卡（15 個系列 × 2）');
