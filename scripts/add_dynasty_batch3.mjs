import fs from 'fs';

const newContent = `
#### 紅樓夢大觀園賈元春
- **ID:** \`dynasty_21\`
- **分類:** 清代系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition. Scene: Grand View Garden inside carved beams painted rafters luxurious main hall, background with exquisite red sandalwood multi-treasure shelf and blurred blue-white porcelain. Indoor light from both sides palace lanterns and outside window natural light converging, presenting rich light-shadow layers and real spatial sensation.
- **光線:** ls_cinematic
- **妝容描述:** graceful dignified early Qing court makeup. Eyebrow shape is fine long curved willow-leaf brows, lips are high-saturation cinnabar red. Foundation presenting porcelain luster but preserving pores, facial muscles relaxed, presenting frontal camera neutral expression.
- **服裝:** wearing Qing dynasty Kangxi period style cross-collar gold-woven large jacket, lower wearing five-color makeup-flower satin ma-mian skirt. Large jacket made of bright yellow heavy silk, full embroidered with gold dragon chapter patterns and sea-water river-cliff patterns, embroidery stitches dense three-dimensional. Neck wearing a circle of natural eastern-pearl court beads, each pearl with real weight sensation and restrained luster.
- **動作與鏡頭:** woman standing in hall with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with hall depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** palace lantern glow, treasure shelf atmosphere, hall depth
- **色調:** warm luxurious tones with imperial yellow and red sandalwood
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 聊齋志異畫皮狐仙女
- **ID:** \`dynasty_22\`
- **分類:** 清代系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame perspective, full-body mid-distance. Scene: deep night wilderness broken ancient temple inside. Background with broken Buddha statue and blurred dead tree branches. A beam of cold white moonlight horizontally shooting through broken roof on figure, creating strong cinematic mysterious air sensation.
- **光線:** ls_cinematic
- **妝容描述:** slightly cold-toned cinematic makeup. Eyebrows are slightly raised withered-dai brows, lips are low-saturation cold rouge red. Foundation presenting a kind of fair but with skin temperature real texture, face relaxed, eyes focusing camera.
- **服裝:** wearing late Ming early Qing style dui-jin wide-sleeve long shirt, material is semi-transparent ink-black silkworm silk ming-gauze, inner snow-white heavy silk chest-covering ru-skirt. Black gauze surface faintly revealing extremely fine silver thread skull and secluded orchid embroidery. Fabric extremely thin, producing natural physical folds with wind, fitting preset F-cup chest thickness.
- **動作與鏡頭:** woman standing in temple with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with temple depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** moonlight beam, broken temple atmosphere, mysterious air
- **色調:** cool moonlight tones with mysterious night atmosphere
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 甌江秋泛清代女詩人
- **ID:** \`dynasty_23\`
- **分類:** 清代系列
- **妝容:** natural_clean
- **場景背景:** full-body mid-distance framing. Scene: autumn river surface on a leaf of real wooden lone boat. Background with misty vast river water and distant blurred autumn mountains. Picture with extremely strong river surface water-vapor air sensation, light is overcast diffuse-reflection natural light, overall tone calm.
- **光線:** ls_cinematic
- **妝容描述:** Qing dynasty Jiangnan literati makeup. Light dai-brows, lip color is natural flesh pink. Foundation extremely fitting, preserving eye corner subtle natural age sensation wrinkles, face presenting peaceful, restrained neutral 1/3 profile expression.
- **服裝:** wearing Qing dynasty standing-collar pipa-lapel large jacket, matching smoke-gray hundred-pleat skirt. Large jacket is lake-blue silk-linen blended material, edges rolled with three extremely fine black satin tao-zi edges. Sleeves slightly wide, revealing a small section white heavy silk inner lining. Waist hanging a plain-surface green jade pendant. Clothing simple yet not losing heavy volume sensation.
- **動作與鏡頭:** woman standing on boat with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with river depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** river mist, autumn mountains, lone boat atmosphere
- **色調:** cool autumn river tones with overcast natural lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 鏡花緣百花仙子下凡
- **ID:** \`dynasty_24\`
- **分類:** 清代系列
- **妝容:** natural_clean
- **場景背景:** 50mm cinematic perspective, mid-distance full-body. Scene: mountain peak strange rocks and pine-cypress between, background with rolling real sea of clouds and early morning first ray of sunlight. Warm side-light completely highlighting mountain rocks and figure clothing fiber three-dimensional sensation, depth layers rich.
- **光線:** ls_cinematic
- **妝容描述:** clean classical cinematic foundation. Crescent-moon dai-brows, lips are coral red. Not changing facial any bone structure and asymmetric features, face presenting natural peaceful relaxed expression.
- **服裝:** wearing Qing dynasty style dui-jin long robe, inner lotus-root color kesi ru-skirt. Long robe made of matte sky-blue real silk, entire body with extremely exquisite Su embroidery craft embroidered hundreds of tiny various colored flowers, no any sequins and modern plastic sensation accessories. Head wearing white silver cumulus-silk magpie-climbing-plum hair pin.
- **動作與鏡頭:** woman standing among rocks with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with mountain depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** sea of clouds, sunrise, mountain peak atmosphere
- **色調:** warm sunrise tones with dramatic mountain lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 清代冷宮怨女冷月凝
- **ID:** \`dynasty_25\`
- **分類:** 清代系列
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition. Scene: Qing dynasty palace corner mottled, peeling red wall below, ground overgrown with weeds. Night a cold moon hanging high, cold-toned moonlight horizontally shooting, pulling long figure shadow on red wall, air with cold desolate sensation.
- **光線:** ls_cinematic
- **妝容描述:** pale and with real skin texture cinematic makeup. Foundation slightly presenting matte, preserving natural dark circles and facial fine lines, absolutely no beauty skin smoothing. Eyebrows are faint willow-leaf brows, lips colorless. Facial expression completely relaxed, calm.
- **服裝:** wearing a washed-out faded, slightly old Qing dynasty large-lapel qi-zhuang, no any complicated rolled-edges and embroidery. Material is coarse silk, presenting real folds and drooping gravity. Shoulder draped with a thin gray cotton-linen scarf, hands folded holding at abdomen front.
- **動作與鏡頭:** woman standing by wall with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with wall depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** cold moonlight, shadow on wall, desolate atmosphere
- **色調:** cool moonlight tones with desolate palace atmosphere
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 山海經西王母青鳥使
- **ID:** \`dynasty_26\`
- **分類:** 神話傳說
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame perspective, mid-distance full-body framing. Scene: towering into clouds savage Kunlun mountain stone platform above. Background with strange-shaped huge rocks and distant soaring real-volume giant bird phantoms. Strong top-light from cloud gap shooting down, producing high-contrast epic-level cinematic light-shadow.
- **光線:** ls_cinematic
- **妝容描述:** ancient mythology style cinematic makeup. Slightly thick and length entering temples sword-brows, eye shadow using red ochre color large-area lightly blurred. Lips are dark red, foundation preserving skin natural texture. Facial muscles calm, directly facing camera.
- **服裝:** wearing ancient Han-style cross-collar heavy silk deep-robe, color tone is stable black and emerald green. Collar using gold thread densely woven phoenix feather patterns, sleeves wide as wings, fabric crisp and with real gravity drape sensation. Waist bound with wide leather cowhide large belt, inlaid with unpolished natural malachite.
- **動作與鏡頭:** woman standing on platform with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with mountain depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** cloud gap light, giant bird phantoms, epic mountain atmosphere
- **色調:** dramatic epic tones with high-contrast lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚

#### 封神榜女媧娘娘真容
- **ID:** \`dynasty_27\`
- **分類:** 神話傳說
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition. Scene: ethereal Great Void Illusory Realm, background with huge bronze nine-tripods phantoms and real blurred five-color cloud-qi. Soft, non-directional sacred skylight scattering from all directions, presenting fine diffuse-reflection and rich air sensation on skin and fabric.
- **光線:** ls_cinematic
- **妝容描述:** sacred and neutral cinematic makeup. Preserving actor original eye shape and jawline, eyebrows are natural smooth distant-mountain dai-brows, lips are cinnabar red. Face presenting completely relaxed peaceful expression, eyes focusing camera.
- **服裝:** wearing high-ancient style dui-jin wide-sleeve ru-skirt, using ivory white heavy Shu brocade and multiple layers light gold ming-gauze overlapping. Front lapel embroidered with extremely grand gold thread mountains-rivers, sun-moon-stars patterns, fabric surface visible clear kesi texture. Clothing naturally wrapping mature female torso (preset F-cup structure), lines stable.
- **動作與鏡頭:** woman standing in void with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with void depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** five-color cloud-qi, bronze tripods phantoms, sacred atmosphere
- **色調:** ethereal sacred tones with soft omnidirectional lighting
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 九歌湘夫人沅湘水神
- **ID:** \`dynasty_28\`
- **分類:** 神話傳說
- **妝容:** natural_clean
- **場景背景:** 50mm cinematic photography perspective, full-body complete framing. Scene: heavy fog permeating Yuan River bank, figure standing on sandbar overgrown with reeds. Background with water-sky one-color white fog and blurred distant mountains. Picture with extremely rich moist fog-qi air sensation, light is early morning uniform scattered weak light.
- **光線:** ls_cinematic
- **妝容描述:** with water-moist sensation retro makeup. Fine long dai-brows, lips apply light rouge color, foundation revealing skin natural fine luster, no any skin smoothing and fake highlights. Face slightly tilted, maintaining natural calm neutral expression.
- **服裝:** wearing Wei-Jin style multiple-layer real silk cross-collar wide-sleeve shirt, color is faint secluded-orchid purple and pi-li green splicing. Clothing under water-vapor influence presenting slightly moist fitting sensation, fabric folds naturally following real adult female spine structure. Neck wearing a string of natural freshwater pearls and turquoise necklace.
- **動作與鏡頭:** woman standing on sandbar with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with river depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** heavy fog, reeds, river mist atmosphere
- **色調:** cool misty tones with water-vapor atmosphere
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 穆天子傳西王母瑤池
- **ID:** \`dynasty_29\`
- **分類:** 神話傳說
- **妝容:** natural_clean
- **場景背景:** mid-distance full-body composition. Scene: Yaochi poolside ancient bronze palace terrace, background with reflecting twilight glow emerald pool water and blurred distant mountains. Dusk strong side-light horizontally shooting in, pulling figure and huge bronze pillars deep shadow layers.
- **光線:** ls_cinematic
- **妝容描述:** retro dignified makeup sensation. Following natural brow bone slightly thick dai-brows, lips are rich brick red. Foundation full and preserving tiny skin reflection. Facial muscles relaxed, presenting frontal camera neutral peaceful expression.
- **服裝:** wearing Zhou dynasty style dui-jin deep-robe, inner vermilion heavy silk long skirt. Deep-robe material is extremely heavy gold-woven brocade, edges embroidered with bronze vessel tao-tie patterns. Outer draped with a several-meters-long heavy real silk purple-gold pi-bo, completely adhering to real human body center of gravity and shoulder balance, no floating unreal sensation.
- **動作與鏡頭:** woman standing on terrace with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with terrace depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** twilight glow, pool reflection, bronze palace atmosphere
- **色調:** warm twilight tones with dramatic side-light
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_fashion\` — 紀實造型照，刻意但自然的姿勢，完整服裝可讀性
- **整體氛圍:** \`at_clear\` — 清晰明亮，完整細節可讀，自然光影平衡

#### 聊齋志異連城絳雪竹妖
- **ID:** \`dynasty_30\`
- **分類:** 清代系列
- **妝容:** natural_clean
- **場景背景:** 50mm full-frame cinematic perspective, full-body framing. Scene: rainstorm approaching, fierce wind blowing deep night ancient bamboo forest. Background with violently swaying bamboo shadows and flying all over sky real bamboo leaf dynamics. Weak night skylight through cloud gap sprinkling down, creating strong cinematic dramatic sensation and real air perspective for entire picture.
- **光線:** ls_cinematic
- **妝容描述:** cold literati style cinematic makeup. Fine crescent-moon dai-brows, lips are natural flesh pink. Foundation fine fitting, completely preserving eye corner and jaw real true-person features. Face presenting 1/3 profile peaceful relaxed expression.
- **服裝:** wearing Ming-style standing-collar dui-jin long shirt, entire clothing using bamboo-leaf green and moon-white dual-color heavy silk stacking. Lapel and cuffs embroidered with extremely fine ink-green silk thread sparse few strokes bamboo-leaf mottled, appearing elegant and unusual. Clothing tailoring crisp, conforming to real adult female (preset F-cup) body volume sensation.
- **動作與鏡頭:** woman standing in bamboo forest with grounded posture, eyes facing forward, hands kept below face level, face remains clear and readable, head neck shoulders and torso stay naturally aligned, ChatGPT may adapt the body pose to the role and surrounding scene while preserving identity
- **構圖:** mid-distance full-body composition with bamboo forest depth, realistic head-to-body proportion, natural face-neck-shoulder alignment
- **特效:** fierce wind, flying bamboo leaves, rainstorm atmosphere
- **色調:** cool stormy night tones with dramatic wind dynamics
- **鏡頭角度:** \`quan\` — 全身人像，頭到腳完整可讀，身體姿勢配合頭臉自然對齊
- **圖片比例:** \`r_23\` — 2:3
- **鏡頭焦段:** \`l_50\` — 50mm 自然視角，保護頭身比例、完整服裝與真實肩頸連接
- **燈光風格:** \`ls_cinematic\` — 電影級照明，戲劇性光影，臉部清晰可讀
- **鏡頭語言:** \`cl_documentary\` — 紀實攝影，真實瞬間捕捉，自然光影與情緒
- **整體氛圍:** \`at_moody\` — 暗黑氛圍，深影與輪廓光並存，臉部必須清楚
`;

fs.appendFileSync('核心資料/風格範例.md', newContent, 'utf-8');

console.log('✅ 已添加第 21-30 組中國朝代古裝設定');
console.log('📊 新增角色卡：10 個');
console.log('\n🎉 全部 30 組中國朝代古裝設定已完成！');
console.log('📊 總計新增：30 個角色卡');
console.log('📝 接下來需要重新建置並測試...');
