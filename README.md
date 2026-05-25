# 美片咒語產生器 v2.0

電影級人像 AI 提示詞生成工具，專注於真人身份保護與高品質寫真風格。

## 🎯 核心特色

- **7 步驟咒語生成** - 鎖臉 → 身體比例 → 姿勢 → 背景服飾道具 → 鏡頭規格 → 禁止咒語 → 最終覆蓋
- **13-tier Prompt Governance** - 多層過濾系統確保真人身份保護
- **798 風格範例** - 涵蓋 394 個詳細分類（魅魔、武俠、仙俠、古裝等）
- **電影級 UI** - 流暢的風格選擇與即時預覽
- **單一資料來源** - Markdown 驅動的內容管理系統

## 📁 專案結構

```
├── index.html              # 主應用（自動生成 CATS 陣列）
├── core.js                 # 核心咒語生成邏輯
├── 核心資料/
│   ├── 風格範例.md         # ⭐ 唯一資料來源（798 個角色卡）
│   ├── 角色卡建檔指南.md   # 角色卡格式規範
│   └── 核心咒語規範.md     # 咒語生成規則
└── scripts/
    ├── build_cats_from_md.mjs      # 從 .md 生成 HTML
    ├── add_category_to_md.mjs      # 添加分類標記
    └── sync_cats_to_md.mjs         # 同步 HTML → .md（備用）
```

## 🚀 快速開始

### 開發模式

```bash
npm run dev
# 訪問 http://localhost:8080
```

### 建置流程

```bash
# 從風格範例.md 生成 index.html 的 CATS 陣列
npm run build

# 測試與檢查
npm run test
npm run check
```

## 📝 新增角色卡流程

### 1. 編輯風格範例.md

在 `核心資料/風格範例.md` 中添加新角色卡：

```markdown
#### 角色名稱
- **ID:** `rev_120`
- **分類:** 絲路沙漠
- **妝容：** oriental
- **場景背景：** golden hour desert merchant caravan camp...
- **光線：** ls_cinematic
- **妝容描述：** desert queen surface makeup...
- **服裝：** layered ivory and crimson fantasy robe...
- **動作與鏡頭：** woman in close-up selfie-style framing...
- **構圖：** close upper-body wide-angle selfie composition...
- **鏡頭角度：** `sanfen`
- **圖片比例：** `r_916`
- **鏡頭焦段：** `l_35`
- **鏡頭語言：** `cl_documentary`
- **整體氛圍：** `at_clear`
```

### 2. 執行建置

```bash
npm run build
```

### 3. 測試網頁

打開 `index.html`，檢查新角色卡是否正確顯示。

## 🛠️ 可用命令

| 命令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 從風格範例.md 生成 index.html |
| `npm run sync` | 從 index.html 同步到風格範例.md（備用） |
| `npm run add-categories` | 為風格範例.md 添加分類標記 |
| `npm run test` | 執行測試 |
| `npm run check` | 完整檢查（lint + test + build） |

## 📚 資料來源架構

### 單一資料來源原則

- **唯一來源：** `核心資料/風格範例.md`
- **自動生成：** `index.html` 的 CATS 陣列
- **建置工具：** `scripts/build_cats_from_md.mjs`

### 為什麼選擇 Markdown？

1. ✅ **易於編輯** - 純文字格式，任何編輯器都能使用
2. ✅ **版本控制友善** - Git diff 清晰可讀
3. ✅ **人類可讀** - 不需要解析 JSON 或 HTML
4. ✅ **備份簡單** - 單一檔案包含所有資料

## 🎨 角色卡格式規範

詳見 [角色卡建檔指南.md](核心資料/角色卡建檔指南.md)

### 必填欄位

- **ID** - 唯一識別碼（如 `rev_119`）
- **分類** - 所屬分類（如「絲路沙漠」）
- **妝容** - 妝容代碼（如 `oriental`）
- **場景背景** - 英文場景描述
- **服裝** - 英文服裝描述

### 禁止詞彙

避免使用會導致 AI 換臉的詞彙：
- ❌ beautiful, gorgeous, stunning
- ❌ goddess, queen (作為形容詞)
- ❌ perfect face, flawless skin
- ❌ 18-year-old, young girl

## 🔧 技術細節

### 7 步驟咒語生成順序

1. **鎖臉** - 真人身份保護
2. **身體比例** - 自然比例控制
3. **姿勢** - 動作與構圖
4. **背景服飾道具** - 場景與服裝
5. **鏡頭規格** - 焦段、角度、比例
6. **禁止咒語** - 過濾危險詞彙
7. **最終覆蓋** - 身份主權強化

### 13-tier Prompt Governance

多層過濾系統確保：
- 真人身份不被替換
- 避免美貌模板污染
- 防止風格過度渲染
- 保持自然真實感

## 📊 數據統計

- **總角色卡數：** 798
- **總分類數：** 394
- **主要系列：** 魅魔、武俠、仙俠、古裝、現代、奇幻
- **支援比例：** 2:3, 3:4, 4:5, 9:16, 16:9, 1:1

## 🌐 線上版本

GitHub Pages: [https://gxben0117.github.io/美片咒語產生器/](https://gxben0117.github.io/美片咒語產生器/)

## 📄 授權

UNLICENSED - 僅供內部使用

## 👨‍💻 開發者

紅兵開發 @ 龍蝦的家
