import fs from 'fs';

// 讀取現有的風格範例.md
const existingContent = fs.readFileSync('核心資料/風格範例.md', 'utf-8');

// 30 組完整的中國朝代古裝設定
const newContent = `

## 中國朝代古裝

#### 大唐長安城牡丹花神
- **ID:** \`dynasty_01\`
- **分類:** 唐代系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame cinematic perspective, mid-distance full-body composition, figure standing with vertical center of gravity. Background: Daming Palace garden at dusk in Chang'an, surrounded by real-volume Wei purple peonies. Sunset side-backlight penetrates air, creating subtle dust sensation and warm orange depth halo, body and environment with real spatial perspective.
- **光線:** ls_cinematic
- **妝容描述:** matte court makeup preserving facial micro skin texture. Eyebrows are slightly thick slanted red dai brows following natural brow bone. Eye shadow uses ochre color naturally blended outward, lips are high-saturation cinnabar red jiang lips without changing bone structure. Face presents 1/3 profile peaceful neutral expression, eyes directly facing camera focus.
- **服裝:** Tang dynasty qi-chest shirt-skirt, inner heavy brocade bright red ru-robe, outer three-layer peacock green matte tao-gauze wide-sleeve shirt. Chest front double-layer wide brocade slightly exposed, fabric naturally droops according to preset F-cup volume and real gravity, tension fits real chest skeleton. Waist tied with two-color double-strand real silk woven palace tao, hanging Hetian white jade openwork forbidden step and gold thread pressing lapel tassel. Head wearing hand-made hammered metal peony crown, dotted with natural freshwater pearls and fine red coral bu-yao.
- **動作與鏡頭:** woman standing centered with grounded full-body posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with palace garden depth, realistic head-to-body proportion, natural face-neck-shoulder alignment, no forced perspective
- **特效:** natural sunset glow, dust particles, peony garden atmosphere kept behind or beside the subject
- **色調:** warm orange sunset tones with balanced skin tones and clear environmental color
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 霓裳羽衣舞楊玉環
- **ID:** \`dynasty_02\`
- **分類:** 唐代系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition, full-frame cinematic perspective. Background: palace Chenxiang Pavilion wooden corridor, distant ethereal palace incense smoke. Night lit with real palace lanterns, light from oblique upper 45-degree angle downward, forming natural three-dimensional skeletal light-shadow and real skin depth.
- **光線:** ls_cinematic
- **妝容描述:** cinematic-grade retro makeup, foundation with real skin reflection. Dai-color willow-leaf brows, lip color is low-saturation rouge red, facial lines completely relaxed, cheeks lightly swept with peach blossom makeup. Face maintains natural peaceful frontal camera expression.
- **服裝:** wearing dui-jin wide-sleeve large shirt, inner ivory white kesi chest-covering ru-skirt. Outer shirt made of extremely thin double-layer gradient pale gold silkworm silk ming-gauze, shoulders draped with five-color heavy brocade feather-thread large pi-bo, showing real fabric air drape sensation. Collar and cuffs densely woven with gold thread luan-bird patterns. Head wearing hanging-pearl phoenix crown, metal material without artificial highlights, pearl strings fitting hair bun according to weight.
- **動作與鏡頭:** woman standing centered with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with corridor depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** palace incense smoke, lantern glow, wooden corridor atmosphere
- **色調:** warm night tones with palace lantern lighting and natural skin reflection
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 則天登基武后祭天
- **ID:** \`dynasty_03\`
- **分類:** 唐代系列
- **妝容:** natural_clean
- **場景背景:** 50mm cinematic perspective mid-distance, full-body composition. Scene: magnificent white marble heaven-worship platform, distant view of overcast cloudy oppressive low sky, air with breeze blowing clothing corners real dynamics. Natural skylight top-light scattering, emphasizing fabric and white marble staircase material contrast.
- **光線:** ls_cinematic
- **妝容描述:** dignified neutral makeup. Slightly raised distant-mountain dai brows, lips are dark brick red, no artificial highlights. Foundation presents real mature female skin matte texture, facial muscles not tense, directly facing camera.
- **服裝:** wearing black heavy brocade hui-robe, inner vermilion deep-robe. Front lapel and sleeves using kesi craft weaving huge gold thread dragon patterns and five-color auspicious clouds, fabric heavy and with strong stiff volume sensation, naturally wrapping chest and shoulders. Waist seal is double-layer gold-woven brocade, bound with bronze gilt leather belt. Head wearing twelve-row eastern-pearl gun crown, pure gold dragon-head holding pearl bu-yao swaying slightly with breeze.
- **動作與鏡頭:** woman standing centered on platform with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with platform depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** breeze movement, overcast sky atmosphere, white marble platform depth
- **色調:** cool overcast tones with dramatic sky and marble contrast
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 上元夜宴太平公主
- **ID:** \`dynasty_04\`
- **分類:** 唐代系列
- **妝容:** natural_clean
- **場景背景:** palace inner garden filled with Shangyuan Festival lanterns, countless real red lanterns forming soft background bokeh. 50mm full-frame mid-distance, full-body complete framing. Warm-toned lantern fire scattering from multiple directions, producing subtle reflection and warm air sensation on figure skin and real silk clothing.
- **光線:** ls_cinematic
- **妝容描述:** fresh court makeup, preserving freckles and pores real texture. Eyebrow shape is straight moth-brow, lips apply coral orange lip rouge. Face presents 1/3 profile, eyes focusing forward, expression calm and relaxed.
- **服裝:** wearing wide-sleeve cross-collar qi-ru-skirt, inner autumn-fragrance green heavy silk chest-covering, outer pomegranate red makeup-flower satin wide-sleeve large shirt. Clothing body covered with hand-painted broken-branch plum blossoms and gold thread embroidery, outer draped with a thin cicada-wing gauze pi-bo sprinkled with gold powder. Chest front fabric naturally fitting standing posture (preset F-cup volume), center of gravity stable. Head wearing fine silver lotus crown, hanging fine silver bell bu-yao.
- **動作與鏡頭:** woman standing centered with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with garden depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** festival lanterns, soft bokeh, warm lantern glow atmosphere
- **色調:** warm festival tones with red lantern lighting and silk fabric reflection
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 敦煌飛天樂舞壁畫
- **ID:** \`dynasty_05\`
- **分類:** 唐代系列
- **妝容:** natural_clean
- **場景背景:** 50mm cinematic photography perspective, mid-distance full-body. Scene: ancient yellow earth cave interior, background with mottled mural remnants and airborne real tiny sand dust. Light is a beam of strong side-light shooting from cave entrance, producing high-contrast cinematic light-shadow, perfectly highlighting real actor and ancient environment perspective.
- **光線:** ls_cinematic
- **妝容描述:** imitating Dunhuang mural cinematic makeup. Eyebrows are slightly thick cui-brows, forehead dotted with objective ochre plum-blossom makeup hua-dian. Lips are cinnabar red, foundation presents healthy tiny pore texture, face maintains completely relaxed neutral expression.
- **服裝:** wearing Tang-style flying-apsara ru-skirt, upper body peacock blue kesi chest-covering, lower wearing cinnabar red and rattan yellow dual-color spliced heavy silk long skirt. Shoulders and arms wrapped with several meters long red-gold gradient real silk thin gauze pi-bo, fabric naturally drooping under real gravity, locally producing real physical floating with wind, not stiff lines. Waist wearing gilt silver belt hook and ruby inlaid ornaments.
- **動作與鏡頭:** woman standing centered with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with cave depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** sand dust particles, mottled mural atmosphere, strong side-light beam
- **色調:** warm cave tones with high-contrast dramatic lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 宋代詞人李清照歸來
- **ID:** \`dynasty_06\`
- **分類:** 宋代系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition. Scene: Jiangnan light rain courtyard with blue brick and black tile, background with real blurred green bamboo and banana leaves with water drops. Environment filled with Jiangnan rainy day moist air sensation, natural skylight uniformly scattering from above, light-shadow soft.
- **光線:** ls_cinematic
- **妝容描述:** extremely simple elegant makeup. Following natural brow bone fine small-mountain brows, lip color is natural flesh pink, preserving lip natural texture and skin pores. Face presents peaceful natural expression, eyes directly facing forward.
- **服裝:** wearing Song dynasty typical cross-collar long bei-zi, inner ivory white heavy silk chest-covering and smoke-silver gray hundred-pleat skirt. Bei-zi material is flower silk, edges embroidered with extremely fine blue-green color entwined-branch lotus patterns, overall fabric presents soft, draping and restrained cotton-linen and real silk mixed texture. Chest fabric naturally following mature female volume drooping. Head only coiled with a natural water buffalo horn hair pin, no exaggerated accessories.
- **動作與鏡頭:** woman standing in courtyard with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with courtyard depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** light rain, water drops on leaves, bamboo atmosphere, moist air sensation
- **色調:** cool rainy day tones with natural Jiangnan atmosphere
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 宋徽宗瑞鶴圖觀鶴
- **ID:** \`dynasty_07\`
- **分類:** 宋代系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame perspective, full-body framing. Scene: Xuanhe Hall rooftop platform of Bianliang palace, background with deep blue sky and several spreading real red-crowned cranes. Distant weak twilight glow, side-light outlining figure and palace roof tiles clear three-dimensional contour.
- **光線:** ls_cinematic
- **妝容描述:** Song dynasty san-bai makeup cinematic presentation. Forehead, nose bridge and chin lightly applied white powder (preserving real skin texture), eyebrows are light dai-brows, lip color is light jiang-red. Face presents natural peaceful neutral relaxed expression.
- **服裝:** wearing Song-style dui-jin wide-sleeve shirt, inner sky-blue kesi chest-covering and moon-white flower silk long skirt. Outer shirt is semi-transparent cicada-wing gauze, edges embroidered with extremely fine silver thread ethereal cloud-qi patterns. Waist tied with white jade double-ring pendant and light blue silk tao. Head high bun wearing plain silver crown, no flashy artificial gemstones, texture heavy.
- **動作與鏡頭:** woman standing on platform with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with palace platform depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** flying cranes, twilight glow, palace rooftop atmosphere
- **色調:** cool blue sky tones with twilight and crane silhouettes
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 白蛇傳西湖斷橋白素貞
- **ID:** \`dynasty_08\`
- **分類:** 宋代系列
- **妝容:** natural_clean
- **場景背景:** West Lake Broken Bridge side, background with breeze light rain, misty West Lake water surface and blurred willow trees. 50mm cinematic mid-distance composition, full-body complete framing. Picture with strong rain-mist air sensation, light is diffuse-reflection overcast natural light, presenting soft reflection on skin.
- **光線:** ls_cinematic
- **妝容描述:** moist sensation cinematic foundation, no skin smoothing. Eyebrow shape is fine willow-leaf dai-brows, lips are light cinnabar color. Facial muscles calm, eyes focusing on camera front.
- **服裝:** wearing Song-style cross-collar double-layer ru-skirt, entire clothing using pure white heavy silk and matte tao-gauze stacking. Collar and cuffs have extremely light silver thread water-wave embroidery. Waist bound with wide white satin waist belt, naturally fitting mature female (preset F-cup) body center of gravity, outer draped with a white gauze large pi-bo. Head wearing white gauze curtain hat, gauze naturally drooping, half-covering hair bun.
- **動作與鏡頭:** woman standing by bridge with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with lake depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** light rain, mist, willow trees, West Lake atmosphere
- **色調:** cool misty tones with soft overcast lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 瑤台步月宋代仙女
- **ID:** \`dynasty_09\`
- **分類:** 宋代系列
- **妝容:** natural_clean
- **場景背景:** 50mm cinematic perspective, mid-distance full-body. Scene: Song dynasty white marble terrace, background with a huge real full moon and faint night clouds. Moonlight as main light source from right 45-degree angle sprinkling down, in cold-toned night sky background, illuminating figure fabric edges.
- **光線:** ls_cinematic
- **妝容描述:** clear transparent cinematic makeup, preserving skin pores. Dai-color crescent-moon brows, lips apply light rose color lip rouge. Face maintains neutral calm expression, 1/3 profile focusing camera.
- **服裝:** wearing dui-jin bei-zi, matching double-layer moon-shadow white hundred-pleat skirt, inner lilac purple real silk chest-covering. Bei-zi surface covered with tiny gold thread woven star-awn patterns, pi-bo is extremely thin light purple ming-gauze, presenting real lightness and physical gravity drooping. Wearing plain silver pressing-lapel and Hetian green jade pendant.
- **動作與鏡頭:** woman standing on terrace with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with terrace depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** moonlight, night clouds, marble terrace atmosphere
- **色調:** cool moonlight tones with night sky and marble contrast
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 紈扇仕女圖庭院撲蝶
- **ID:** \`dynasty_10\`
- **分類:** 宋代系列
- **妝容:** natural_clean
- **場景背景:** full-body mid-distance framing, 50mm full-frame. Scene: early summer classical garden courtyard, background with Taihu rocks and blurred pink hydrangea flowers. Sunlight through upper tree leaf gaps sprinkling down mottled real light-shadow (light-leak effect), picture with rich spatial depth.
- **光線:** ls_cinematic
- **妝容描述:** retro lady makeup, foundation revealing skin natural luster. Straight short cui-brows, lips are cinnabar red small-lip makeup. Facial expression completely relaxed, presenting neutral peaceful expression.
- **服裝:** wearing Song-style dui-jin short bei-zi, inner goose-yellow flower silk chest-covering and tea-color long skirt. Holding a bamboo-handle double-sided kesi round fan, fan surface embroidered with broken-branch crabapple. Clothing fabric is real cotton-linen and silk texture, presenting natural folds and draping volume sensation (preset F-cup chest structure).
- **動作與鏡頭:** woman standing in courtyard with grounded posture, holding fan naturally, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with courtyard depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** dappled sunlight, tree shadows, garden atmosphere
- **色調:** warm summer garden tones with natural sunlight
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡
`;

// 追加到文件末尾
fs.appendFileSync('核心資料/風格範例.md', newContent, 'utf-8');

console.log('✅ 已添加前 10 組中國朝代古裝設定');
console.log('📊 新增角色卡：10 個');
console.log('📝 接下來處理第 11-20 組...');
