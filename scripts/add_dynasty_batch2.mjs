import fs from 'fs';

const newContent = `
#### 大明宮廷孝端顯皇后
- **ID:** \`dynasty_11\`
- **分類:** 明代系列
- **妝容:** natural_clean
- **場景背景:** 50mm cinematic perspective, mid-distance full-body. Scene: inside Forbidden City Taihe Hall red lacquer wooden pillars and gold lacquer throne front. Indoor light obliquely shooting from gate entrance, forming reflection on ground gold bricks. Air with a trace of tiny incense smoke, picture spatial perspective grand and real.
- **光線:** ls_cinematic
- **妝容描述:** dignified atmospheric Ming dynasty court makeup. Eyebrows are natural qiu-bo brows, lip color is stable dark brick red, no bright oil. Foundation full and preserving skin fine texture, face is frontal camera peaceful neutral expression.
- **服裝:** wearing Ming dynasty bright red gold-woven gauze jacket-skirt, outer draped with a deep blue kesi xia-pei. Xia-pei embroidered with real gold thread and five-color silk thread densely stitched cloud-swallow double-flying patterns, lower end hanging a solid pure gold carved flower pendant, vertically pulling fabric tight due to real weight. Inner ma-mian skirt is gold thread woven flower satin, pleats crisp. Head wearing gold thread dotted-cui zhai crown, inlaid with countless real pearls.
- **動作與鏡頭:** woman standing centered in hall with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with hall depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** incense smoke, golden throne atmosphere, palace hall depth
- **色調:** warm palace tones with gold and red imperial colors
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 金陵秦淮河畔李香君
- **ID:** \`dynasty_12\`
- **分類:** 明代系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition. Scene: dusk Qinhuai River wooden pavilion window front, background with blurred river water and distant lit classical painted boats. Sunset afterglow horizontally shooting from window outside, plating figure and wooden window frame with a layer of golden warm halo.
- **光線:** ls_cinematic
- **妝容描述:** exquisite Ming dynasty Jiangnan makeup. Fine long willow-leaf brows, lips are natural rouge red. Foundation presenting tiny pores and warm luster, face slightly tilted, maintaining calm relaxed 1/3 profile expression.
- **服裝:** wearing Ming-style standing-collar dui-jin long shirt, material is light pink printed large crepe gauze, inner moon-white zhong-dan and ink-color ma-mian skirt. Standing collar fastened with two fine white jade mother-child buttons. Clothing material thin yet with real drape sensation, chest front fabric naturally undulating with standing posture. Holding a spotted bamboo bone peach blossom folding fan.
- **動作與鏡頭:** woman standing by window with grounded posture, holding fan naturally, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with window depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** sunset glow, river reflection, painted boat lights atmosphere
- **色調:** warm sunset tones with Qinhuai River golden hour lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 明代才女畫家薛濤箋
- **ID:** \`dynasty_13\`
- **分類:** 明代系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame perspective, mid-distance full-body. Scene: Ming dynasty study room piled with ancient books, xuan paper and duan inkstone. Outside window bamboo shadows swaying, mottled natural light through window lattice uniformly illuminating indoor, air with some ink fragrance calm sensation and depth layers.
- **光線:** ls_cinematic
- **妝容描述:** literati-style plain elegant makeup. Following natural brow bone light dai-brows, lip color is low-saturation bean-paste red. Face presenting completely relaxed, focused peaceful expression, eyes focusing forward.
- **服裝:** wearing Ming-style cross-collar jacket-skirt, upper clothing is cross-collar heavy silk moon-white long shirt, lower wearing deep blue gold-woven ma-mian skirt. Skirt hem embroidered with fine regular script poetry text and plum blossom patterns. Waist wearing simple agarwood pressing-lapel. Clothing lines smooth, conforming to real adult female skeletal proportion and center of gravity.
- **動作與鏡頭:** woman standing in study with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with study depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** bamboo shadows, window lattice light, ink fragrance atmosphere
- **色調:** warm study tones with natural window lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 牡丹亭驚夢杜麗娘
- **ID:** \`dynasty_14\`
- **分類:** 明代系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body framing. Scene: desolate classical Ming dynasty garden depths, background with broken walls covered with moss Taihu rocks and several blooming azalea flowers. Early morning cold-toned natural light scattering from above, creating dream-like but spatially real cinematic picture.
- **光線:** ls_cinematic
- **妝容描述:** cinematic-grade opera-style court makeup (not exaggerated stage makeup). Eyebrows are fine slightly raised diao-shao brows, eye corners with extremely light rouge red blur, lips are cinnabar red. Face calm, eyes clear directly facing camera.
- **服裝:** wearing Ming dynasty typical pi-feng matching jacket-skirt. Outer wearing a water-green heavy real silk wide-sleeve pi-feng, lapel embroidered with exquisite large pink peonies and butterfly-chasing-flower; inner cross-collar white jacket and light yellow hundred-pleat skirt. Clothing thick, folds natural, completely adhering to real female body structure.
- **動作與鏡頭:** woman standing in garden with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with garden depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** moss atmosphere, azalea flowers, broken wall depth
- **色調:** cool morning tones with dream-like garden atmosphere
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 出塞和親公主王昭君
- **ID:** \`dynasty_15\`
- **分類:** 明代系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame cinematic perspective, full-body composition. Scene: fierce wind rolling snow frontier desert yellow earth plateau. Background with flying snow all over sky and distant blurred Great Wall remnants. Light is overcast cold-toned scattered light, air filled with flying snow dynamics and strong bitter cold air sensation.
- **光線:** ls_cinematic
- **妝容描述:** cold-resistant cinematic makeup. Foundation fair and preserving pores and tiny skin reflection. Eyebrows are dai-color qiu-bo brows, lips are rich retro bright red. Facial expression maintaining calm and relaxed in cold wind, directly facing forward.
- **服裝:** draped with an extremely heavy Ming-style bright red wool hooded dou-peng, dou-peng edges surrounded with real texture white fox fur (no plastic sensation, fur flow clear). Inside dou-peng faintly visible Ming dynasty gold-woven cross-collar long robe and ma-mian skirt. Hands holding a wooden qin pipa, fabric tension naturally folding due to instrument and arm movement.
- **動作與鏡頭:** woman standing in snow with grounded posture, holding pipa, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with frontier depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** flying snow, fierce wind, Great Wall remnants atmosphere
- **色調:** cold overcast tones with snow and frontier desolation
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 魏晉竹林七賢女名士
- **ID:** \`dynasty_16\`
- **分類:** 魏晉系列
- **妝容:** natural_clean
- **場景背景:** 50mm cinematic photography perspective, mid-distance full-body framing. Scene: a tall dense wild bamboo forest depths. Sunlight through bamboo leaf gaps forming clear cinematic side-backlight beams, air with tiny mist and bamboo leaf debris, spatial depth extremely strong.
- **光線:** ls_cinematic
- **妝容描述:** extremely simple bare makeup sensation. Preserving facial real skin texture and flaws. Eyebrows following natural skeleton slightly applying qing-dai, lips are bare pink. Facial expression completely relaxed, presenting neutral peaceful transcendent expression.
- **服裝:** wearing Wei-Jin period typical wide-sleeve dui-jin shirt, inner cross-collar right-ren wide ru-skirt. Overall clothing made of multiple layers undyed natural raw silk and fine cotton-linen, presenting semi-transparent gray-white and ink color. Lapel wide open, casually drooping, fabric weight sensation real, following adult female center of gravity (preset F-cup chest structure).
- **動作與鏡頭:** woman standing in bamboo forest with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with bamboo forest depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** bamboo forest light beams, mist, bamboo leaf debris atmosphere
- **色調:** natural bamboo forest tones with dramatic side-backlight
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 漢宮飛燕掌中舞趙飛燕
- **ID:** \`dynasty_17\`
- **分類:** 漢代系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition. Scene: Han dynasty palace huge bronze mirror front, ground is mirror-polished black marble bricks. Background with tall red lacquer wooden palace walls and blurred bronze curtains. Light is distant row of real palace lanterns bringing low-angle side-light, light-shadow layers distinct.
- **光線:** ls_cinematic
- **妝容描述:** Han dynasty retro cinematic makeup. Fine long straight distant-mountain dai-brows, lips applied into extremely small Han dynasty jiang-lips (dot-lip makeup), preserving lip skin texture. Face maintaining 1/3 profile neutral peaceful expression.
- **服裝:** wearing Han dynasty three-layer clothing qu-ju robe, outermost layer is thin as cicada-wing light gold xiao-gauze, inner two layers are cinnabar red and ivory white heavy silk. Qu-ju wrapping body layer by layer tightly, showing real human body pelvis and spine natural standing posture, not exaggerated anime proportion. Clothing hem long dragging on ground. Head wearing bronze gilt bu-yao.
- **動作與鏡頭:** woman standing before mirror with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with palace depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** bronze mirror reflection, palace lantern glow atmosphere
- **色調:** warm palace tones with bronze and red lacquer colors
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 木蘭從軍卸甲還長姐
- **ID:** \`dynasty_18\`
- **分類:** 漢代系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame perspective, mid-distance full-body. Scene: northern ancient village earth wall small courtyard inside. Background with drying grain and blurred wooden water wheel. Twilight weak natural light horizontally shooting in, picture filled with real rural air sensation and earth smell.
- **光線:** ls_cinematic
- **妝容描述:** with wind-sand sensation real cinematic makeup. Foundation presenting slightly healthy wheat color, preserving tiny pores, sun spots and skin reflection. Eyebrows rough natural, lips are natural light flesh color. Face presenting neutral, resolute and relaxed expression.
- **服裝:** wearing Han-style dui-jin cross-collar ru-skirt, upper clothing is coarse cotton-linen material ochre short jacket, lower wearing deep gray woven hemp hundred-pleat skirt. Clothing surface with real wear and rough fabric texture, no any flashy gold-silver embroidery. Waist tied with a wide cowhide belt, hands naturally drooping.
- **動作與鏡頭:** woman standing in courtyard with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with courtyard depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** rural atmosphere, grain drying, water wheel depth
- **色調:** warm twilight tones with rural earth atmosphere
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 楚漢傳奇虞姬月下舞
- **ID:** \`dynasty_19\`
- **分類:** 秦漢系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body framing. Scene: deep night Chu army large tent outside, background with several burning real bonfires and distant hazy wilderness. Firelight from below and side illuminating figure, casting warm, leaping and high-contrast cinematic light-shadow on real silk clothing.
- **光線:** ls_cinematic
- **妝容描述:** slightly tragic cinematic makeup. Slightly thick and line-smooth dai-brows, lip color is deep cinnabar red. Foundation fitting, showing female natural facial jawline and real age sensation, expression peaceful and relaxed.
- **服裝:** wearing Qin-Han style wrapped-lapel qu-ju deep-robe, material is heavy crimson purple real silk brocade. Clothing edges, collar all inlaid with wide black-base gold thread beast-face pattern woven bands. Outer draped with a pure white real silk large pi-bo, naturally drooping fitting with body standing posture. Wearing high-ancient jade carved dragon-form pendant.
- **動作與鏡頭:** woman standing outside tent with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with tent depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** bonfire flames, night wilderness atmosphere
- **色調:** warm firelight tones with dramatic night contrast
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 銅雀台賦曹植驚鴻仙
- **ID:** \`dynasty_20\`
- **分類:** 魏晉系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame cinematic perspective, full-body composition. Scene: towering white marble Bronze Sparrow Platform edge, distant view with ethereal sea of clouds and dusk sunset. Strong golden backlight outlining figure contour with a circle of gold edge, picture with extremely high-quality air sensation and spatial depth.
- **光線:** ls_cinematic
- **妝容描述:** clear transparent fairy-qi cinematic makeup. Not changing bone structure, preserving natural eye shape and nose shape. Dai-color crescent-moon brows, lips are light jiang-red. Face presenting frontal directly facing camera neutral relaxed expression.
- **服裝:** wearing Wei-Jin style za-ju chui-shao clothing. Layer upon layer real silk pointed-angle swallow-tail shaped fabric strips (shao) naturally drooping from waist and skirt hem, presenting ink-green, light blue and ivory white color interlacing. Sleeves extremely large, hands holding a white jade ru-yi. Clothing tailoring conforming to real mature female chest and shoulder structure.
- **動作與鏡頭:** woman standing on platform edge with grounded posture, holding ru-yi, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with platform depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** sea of clouds, sunset backlight, platform edge atmosphere
- **色調:** warm golden sunset tones with dramatic backlight
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡
`;

fs.appendFileSync('核心資料/風格範例.md', newContent, 'utf-8');

console.log('✅ 已添加第 11-20 組中國朝代古裝設定');
console.log('📊 新增角色卡：10 個');
console.log('📝 接下來處理第 21-30 組...');
