import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const read = (file) => readFileSync(join(rootDir, file), 'utf-8');

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const loadCore = () => {
  const module = { exports: {} };
  const exports = module.exports;
  const code = read('core.js');
  vm.runInNewContext(code, { module, exports, console }, { filename: 'core.js' });
  return module.exports;
};

const extractInlineScripts = (html) =>
  [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .join('\n');

const extractConstValue = (html, name, closingPattern) => {
  const match = html.match(new RegExp(`const ${name} = (${closingPattern});`));
  if (!match) {
    throw new Error(`找不到 ${name}`);
  }
  return Function(`return ${match[1]}`)();
};

class ElementStub {
  constructor(id) {
    this.id = id;
    this.children = [];
    this.style = {};
    this.value = '';
    this.textContent = '';
    this.innerHTML = '';
    this.className = '';
  }

  appendChild(child) {
    this.children.push(child);
  }

  select() {}

  scrollIntoView() {
    throw new Error('快速隨機不應觸發 scrollIntoView');
  }
}

const runUiRuntime = () => {
  const html = read('index.html');
  const external = `${read('prompt_governance.js')}\n${read('core.js')}`;
  const inline = extractInlineScripts(html);
  const ids = [
    'catStrip',
    'presetGrid',
    'ratioChips',
    'themeInput',
    'sceneInput',
    'costumeInput',
    'makeupInput',
    'out',
    'charCount',
    'outActions',
    'randStyleName',
    'outputShell',
    'totalEntryCount',
    'copyBtn'
  ];
  const elements = Object.fromEntries(ids.map((id) => [id, new ElementStub(id)]));
  let restoredScroll = null;

  const document = {
    body: new ElementStub('body'),
    createElement: (tag) => new ElementStub(tag),
    execCommand: () => true,
    getElementById: (id) => elements[id] || null
  };
  document.body.appendChild = () => {};
  document.body.removeChild = () => {};

  const window = {
    PROMPT_GOVERNANCE: {},
    pageXOffset: 0,
    pageYOffset: 360,
    scrollX: 0,
    scrollY: 360,
    scrollTo: (x, y) => {
      restoredScroll = [x, y];
    }
  };

  const sandbox = {
    console: { error() {}, warn() {}, log() {}, info() {} },
    document,
    window,
    navigator: {},
    localStorage: { getItem: () => null, setItem: () => {} },
    alert: (message) => {
      throw new Error(`Unexpected alert: ${message}`);
    },
    setTimeout: (fn) => fn()
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(`${external}\n${inline}`, sandbox, { filename: 'ui-runtime' });

  const initial = {
    parentPills: elements.catStrip.children.length,
    presetCards: elements.presetGrid.children.length,
    ratios: elements.ratioChips.children.length,
    totalEntryCount: elements.totalEntryCount.textContent,
    theme: elements.themeInput.value
  };

  sandbox.doRandomAndCopy();

  return {
    initial,
    random: {
      outputLength: elements.out.textContent.length,
      label: elements.randStyleName.textContent,
      restoredScroll
    }
  };
};

console.log('🧪 執行專案測試...\n');

try {
  const { buildPrompt } = loadCore();
  assert(typeof buildPrompt === 'function', 'core.js 未匯出 buildPrompt');

  const styleData = {
    scene: 'deep underworld palace throne room, glowing lava cracks on obsidian floors, cinematic volcanic embers drifting, dark majestic architecture',
    lighting: 'controlled cinematic key light on the face with soft rim light',
    costume: 'elegant sleek dark crimson queen gown, subtle surface cosmetics, elegant medium-sized black bat-like demon wings positioning behind shoulders, no horns, no tail',
    makeup: 'surface-level cinematic makeup, no facial structure changes',
    action: 'a woman standing in full regal presence, looking directly into camera with authentic emotion',
    composition: 'balanced full-body composition, realistic head-to-body proportion',
    effects: 'subtle embers behind the subject',
    tone: 'deep crimson, obsidian, warm gold',
    angle: 'quan',
    ratio: 'r_23',
    lens: 'l_50',
    lightStyle: 'ls_cinematic',
    atmosphere: 'at_moody',
    cameraLang: 'cl_magazine'
  };

  const prompt = buildPrompt(styleData);
  assert(prompt.length > 1200, `prompt 長度過短: ${prompt.length}`);
  assert(prompt.length <= 5000, `prompt 超過 5000 字元: ${prompt.length}`);

  const requiredSections = [
    '【真人身份優先｜最高權重】',
    '【真實人體骨架】',
    '【電影攝影結構】',
    '【真實攝影感】',
    '【動作控制】',
    '【場景】',
    '【動作與道具】',
    '【服裝】',
    '【妝容】',
    '【固定品質描述】',
    '【負面詞｜非常重要】'
  ];
  for (const section of requiredSections) {
    assert(prompt.includes(section), `prompt 缺少必要段落: ${section}`);
  }
  for (const forbidden of ['AI 美女臉', '大頭比例', '自拍視角']) {
    assert(prompt.includes(forbidden), `prompt 缺少負面詞: ${forbidden}`);
  }
  const identityPriorityRules = [
    'preserve the real facial identity first',
    'The fantasy world must support the photographed real person.',
    'not a redesigned fantasy heroine',
    'Prioritize real-person photographic identity and cinematic realism over fantasy beauty aesthetics'
  ];
  for (const rule of identityPriorityRules) {
    assert(prompt.includes(rule), `prompt 缺少真人身份優先規則: ${rule}`);
  }
  for (const content of [
    styleData.action,
    styleData.composition
  ]) {
    assert(prompt.includes(content), `prompt 未納入角色卡欄位內容: ${content}`);
  }
  console.log(`✓ Prompt 結構完整，長度 ${prompt.length} 字元`);

  const html = read('index.html');
  const cats = extractConstValue(html, 'CATS', '\\[[\\s\\S]*?\\n\\]');
  const makeups = extractConstValue(html, 'MAKEUPS', '\\{[\\s\\S]*?\\n\\}');
  let maxPrompt = { length: 0, id: '', name: '' };
  for (const cat of cats) {
    for (const entry of cat.entries || []) {
      const generated = buildPrompt({
        theme: entry.name,
        scene: entry.scene,
        lighting: entry.light,
        costume: entry.outfit,
        makeup: (entry.mk && makeups[entry.mk]) || entry.makeup || '',
        action: entry.prop,
        composition: entry.comp,
        effects: entry.fx,
        tone: entry.tone,
        angle: entry.ang,
        ratio: entry.ratio,
        lens: entry.lens,
        lightStyle: entry.light,
        atmosphere: entry.atm,
        cameraLang: entry.camLang
      });
      if (generated.length > maxPrompt.length) {
        maxPrompt = { length: generated.length, id: entry.id, name: entry.name };
      }
      assert(generated.length <= 5000, `角色卡 ${entry.id}/${entry.name} prompt 超過 5000 字元: ${generated.length}`);
    }
  }
  console.log(`✓ 全部角色卡 prompt 皆低於 5000 字元，最長 ${maxPrompt.length} 字元 (${maxPrompt.id} ${maxPrompt.name})`);

  const ui = runUiRuntime();
  assert(ui.initial.parentPills === 22, `風格大類數量錯誤: ${ui.initial.parentPills}`);
  assert(ui.initial.presetCards > 0, '初始角色卡未渲染');
  assert(ui.initial.ratios === 6, `尺寸比例數量錯誤: ${ui.initial.ratios}`);
  const totalCount = parseInt(ui.initial.totalEntryCount.replace(/,/g, ''));
  assert(totalCount === 923, `總角色數顯示錯誤: ${ui.initial.totalEntryCount} (期望 923)`);
  assert(ui.random.outputLength > 1200, `快速隨機未產生有效咒語: ${ui.random.outputLength}`);
  assert(ui.random.label && ui.random.label !== '尚未隨機', '快速隨機未更新風格名稱');
  assert(JSON.stringify(ui.random.restoredScroll) === JSON.stringify([0, 360]), '快速隨機未保持原捲動位置');
  console.log('✓ UI runtime、分類渲染、快速隨機皆正常');

  console.log('\n✓ 所有測試通過');
} catch (err) {
  console.error(`✗ 測試失敗: ${err.message}`);
  process.exit(1);
}
