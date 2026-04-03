const state = {
  lang: 'zh',
  country: 'tw',
  cashGoal: null,
  startType: null,
  path: null,
  monthIndex: 0,
  currentCash: 0,
  clarity: 26,
  stability: 24,
  confidence: 24,
  history: []
};

const app = document.getElementById('app');
const topSubtitle = document.getElementById('top-subtitle');
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  render();
});

function t() { return window.GAME_DATA[state.lang]; }
function clamp(v){ return Math.max(0, Math.min(100, v)); }
function currency(v) {
  if (state.country === 'us') {
    return new Intl.NumberFormat('en-US', { style:'currency', currency:'USD', maximumFractionDigits:0 }).format(v || 0);
  }
  return 'NT$' + Math.round(v || 0).toLocaleString('zh-Hant-TW');
}
function cashBaseGoalValue(optionValue) {
  return optionValue;
}
function getGoalOptions() {
  return t().cashGoal.options;
}
function getStartOption(key) { return t().starts.options.find(x=>x.key===key); }
function getPathOption(key) { return t().paths.options.find(x=>x.key===key); }

function renderLanding() {
  const c = t().landing;
  app.innerHTML = `
  <section class="screen hero">
    <div class="hero-kicker">🎮 ${c.kicker}</div>
    <div class="hero-title">${c.title.replace(/\n/g, '<br>')}</div>
    <div class="hero-copy">${c.copy}</div>
    <div class="hero-scene">
      <div class="avatar">🧑‍💼</div>
      <div class="scene-note">${c.note}</div>
    </div>
    <div class="actions">
      <button class="primary-btn" id="startGame">${c.start}</button>
    </div>
  </section>
  `;
  document.getElementById('startGame').onclick = renderCashGoal;
}

function renderCashGoal() {
  const c = t().cashGoal;
  app.innerHTML = `
    <section class="screen">
      <div class="progress-wrap">
        <div class="progress-chip">1 / 4</div>
        <div class="progress-chip">🎯 ${state.lang === 'zh' ? '設定目標' : 'Set goal'}</div>
      </div>
      <div class="section">
        <h1 class="section-title">${c.title}</h1>
        <div class="section-copy">${c.copy}</div>
        <div class="card-grid" id="goalGrid"></div>
        <div class="actions">
          <button class="primary-btn" id="goalNext" disabled>${c.cta}</button>
        </div>
      </div>
    </section>`;
  const grid = document.getElementById('goalGrid');
  c.options.forEach(opt => {
    const div = document.createElement('button');
    div.className = 'choice-card';
    div.innerHTML = `<div class="choice-top"><div class="choice-title">${opt.label}</div><div class="choice-icon">💵</div></div><div class="choice-desc">${state.lang==='zh' ? '這一局你真正想拿到手的現金。' : 'The amount of cash you truly want to take home in this run.'}</div><div class="choice-tag">${opt.tag}</div>`;
    div.onclick = () => {
      state.cashGoal = cashBaseGoalValue(opt.value);
      [...grid.children].forEach(x=>x.classList.remove('selected'));
      div.classList.add('selected');
      document.getElementById('goalNext').disabled = false;
    };
    grid.appendChild(div);
  });
  document.getElementById('goalNext').onclick = renderStartType;
}

function renderStartType() {
  const c = t().starts;
  app.innerHTML = `
    <section class="screen">
      <div class="progress-wrap">
        <div class="progress-chip">2 / 4</div>
        <div class="progress-chip">🧭 ${state.lang === 'zh' ? '你的起點' : 'Your start'}</div>
      </div>
      <div class="section">
        <h1 class="section-title">${c.title}</h1>
        <div class="section-copy">${c.copy}</div>
        <div class="card-grid" id="startGrid"></div>
        <div class="actions"><button class="primary-btn" id="startNext" disabled>${c.cta}</button></div>
      </div>
    </section>`;
  const grid = document.getElementById('startGrid');
  c.options.forEach(opt => {
    const div = document.createElement('button');
    div.className = 'choice-card';
    div.innerHTML = `<div class="choice-top"><div class="choice-title">${opt.title}</div><div class="choice-icon">${opt.icon}</div></div><div class="choice-desc">${opt.desc}</div><div class="choice-tag">${opt.tag}</div>`;
    div.onclick = () => {
      state.startType = opt.key;
      [...grid.children].forEach(x=>x.classList.remove('selected'));
      div.classList.add('selected');
      document.getElementById('startNext').disabled = false;
    };
    grid.appendChild(div);
  });
  document.getElementById('startNext').onclick = renderPath;
}

function renderPath() {
  const c = t().paths;
  app.innerHTML = `
    <section class="screen">
      <div class="progress-wrap">
        <div class="progress-chip">3 / 4</div>
        <div class="progress-chip">🛤️ ${state.lang === 'zh' ? '你的第一條路' : 'Your first path'}</div>
      </div>
      <div class="section">
        <h1 class="section-title">${c.title}</h1>
        <div class="section-copy">${c.copy}</div>
        <div class="card-grid" id="pathGrid"></div>
        <div class="actions"><button class="primary-btn" id="pathNext" disabled>${c.cta}</button></div>
      </div>
    </section>`;
  const grid = document.getElementById('pathGrid');
  c.options.forEach(opt => {
    const div = document.createElement('button');
    div.className = 'choice-card';
    div.innerHTML = `<div class="choice-top"><div class="choice-title">${opt.title}</div><div class="choice-icon">${opt.icon}</div></div><div class="choice-desc">${opt.desc}</div><div class="choice-tag">${opt.tag}</div>`;
    div.onclick = () => {
      state.path = opt.key;
      [...grid.children].forEach(x=>x.classList.remove('selected'));
      div.classList.add('selected');
      document.getElementById('pathNext').disabled = false;
    };
    grid.appendChild(div);
  });
  document.getElementById('pathNext').onclick = startGame;
}

function startGame() {
  state.monthIndex = 0;
  state.history = [];
  state.clarity = state.startType === 'stable' ? 34 : state.startType === 'pressure' ? 24 : 18;
  state.stability = state.startType === 'stable' ? 36 : state.startType === 'pressure' ? 22 : 14;
  state.confidence = state.startType === 'stable' ? 34 : state.startType === 'pressure' ? 24 : 16;
  state.currentCash = state.startType === 'stable' ? Math.round(state.cashGoal * 0.28) : state.startType === 'pressure' ? Math.round(state.cashGoal * 0.18) : Math.round(state.cashGoal * 0.08);
  renderMonth();
}

function renderMonth() {
  const m = t().months[state.monthIndex];
  const labels = t().labels;
  const gap = Math.max(0, state.cashGoal - state.currentCash);
  app.innerHTML = `
    <section class="screen">
      <div class="progress-wrap">
        <div class="progress-chip">${m.badge}</div>
        <div class="progress-chip">🎲 ${state.lang === 'zh' ? '回合進行中' : 'Run in progress'}</div>
      </div>
      <section class="event-card">
        <div class="event-badge">${m.badge}</div>
        <div class="event-title">${m.title}</div>
        <div class="event-copy">${m.copy}</div>
        <div class="event-visual">
          <div class="event-emoji">🏢</div>
          <div>
            <div style="font-weight:800; margin-bottom:4px;">${m.visualTitle}</div>
            <div style="color:var(--muted); line-height:1.6; font-size:13px;">${m.visualCopy}</div>
          </div>
        </div>
      </section>
      <section class="company-panel">
        <div class="metric"><div class="metric-title">${labels.cashGoal}</div><div class="metric-value">${currency(state.cashGoal)}</div></div>
        <div class="metric"><div class="metric-title">${labels.actualCash}</div><div class="metric-value">${currency(state.currentCash)}</div></div>
        <div class="metric"><div class="metric-title">${labels.gap}</div><div class="metric-value">${currency(gap)}</div></div>
        <div class="metric"><div class="metric-title">${getPathOption(state.path).title}</div><div class="metric-value">${getStartOption(state.startType).title}</div></div>
      </section>
      <section class="choice-card section">
        <div class="choice-top"><div class="choice-title">${state.lang === 'zh' ? '公司狀態' : 'Company state'}</div><div class="choice-icon">📊</div></div>
        <div class="choice-desc">${state.lang === 'zh' ? '這不是成績單，而是你這一局的當前體感。' : 'This is not a grade. It is how this run currently feels.'}</div>
        <div class="summary-list">
          <div class="summary-item"><div class="summary-label">${labels.clarity}</div><div class="meter"><span style="width:${state.clarity}%"></span></div></div>
          <div class="summary-item"><div class="summary-label">${labels.stability}</div><div class="meter"><span style="width:${state.stability}%"></span></div></div>
          <div class="summary-item"><div class="summary-label">${labels.confidence}</div><div class="meter"><span style="width:${state.confidence}%"></span></div></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-title">${state.lang === 'zh' ? '這個月你要怎麼應對？' : 'How do you want to respond this month?'}</h2>
        <div class="event-choices" id="monthChoices"></div>
      </section>
      <div class="footer-gap"></div>
    </section>
  `;
  const wrap = document.getElementById('monthChoices');
  m.choices.forEach((choice) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `${choice.title}<small>${choice.desc}</small>`;
    btn.onclick = () => applyChoice(choice, m);
    wrap.appendChild(btn);
  });
}

function applyChoice(choice, monthData) {
  state.currentCash += choice.effects.cash;
  state.clarity = clamp(state.clarity + choice.effects.clarity);
  state.stability = clamp(state.stability + choice.effects.stability);
  state.confidence = clamp(state.confidence + choice.effects.confidence);
  state.history.push({ month: state.monthIndex + 1, choice: choice.title, result: choice.result });
  renderResult(choice, monthData);
}

function renderResult(choice, monthData) {
  const labels = t().labels;
  const gap = Math.max(0, state.cashGoal - state.currentCash);
  app.innerHTML = `
    <section class="screen">
      <div class="progress-wrap">
        <div class="progress-chip">${monthData.badge}</div>
        <div class="progress-chip">✨ ${state.lang === 'zh' ? '結果揭曉' : 'Result revealed'}</div>
      </div>
      <section class="result-panel">
        <div class="result-title">${state.lang === 'zh' ? '這一回合，你做了一個選擇。' : 'This turn, you made a move.'}</div>
        <div class="result-copy">${choice.result}</div>
      </section>
      <section class="company-panel section">
        <div class="metric"><div class="metric-title">${labels.cashGoal}</div><div class="metric-value">${currency(state.cashGoal)}</div></div>
        <div class="metric"><div class="metric-title">${labels.actualCash}</div><div class="metric-value">${currency(state.currentCash)}</div></div>
        <div class="metric"><div class="metric-title">${labels.gap}</div><div class="metric-value">${currency(gap)}</div></div>
        <div class="metric"><div class="metric-title">${state.lang === 'zh' ? '這局感受' : 'Run feeling'}</div><div class="metric-value">${gap <= state.cashGoal * 0.4 ? (state.lang === 'zh' ? '開始靠近' : 'Getting closer') : (state.lang === 'zh' ? '還在追趕' : 'Still chasing')}</div></div>
      </section>
      <section class="npc-card">
        <div class="npc-avatar">🧑‍🏫</div>
        <div>
          <div class="npc-name">${state.lang === 'zh' ? 'AI 貴人顧問' : 'AI mentor'}</div>
          <div class="npc-copy">${monthData.npc}</div>
        </div>
      </section>
      <div class="actions section">
        <button class="primary-btn" id="nextBtn">${state.monthIndex < t().months.length - 1 ? labels.next : labels.finish}</button>
      </div>
    </section>
  `;
  document.getElementById('nextBtn').onclick = () => {
    if (state.monthIndex < t().months.length - 1) {
      state.monthIndex += 1;
      renderMonth();
    } else {
      renderSummary();
    }
  };
}

function deriveLesson() {
  if (state.stability >= state.confidence && state.stability >= state.clarity) {
    return state.lang === 'zh' ? '先穩住現金流，比表面成長更重要。' : 'Stability matters more than surface growth.';
  }
  if (state.clarity >= state.confidence) {
    return state.lang === 'zh' ? '看懂差距從哪裡來，本身就是能力。' : 'Understanding where the gap comes from is already a skill.';
  }
  return state.lang === 'zh' ? '信心不是靠想像來的，而是靠一回合一回合建立起來。' : 'Confidence is built one turn at a time.';
}

function renderSummary() {
  const s = t().summary;
  const labels = t().labels;
  const gap = Math.max(0, state.cashGoal - state.currentCash);
  const closer = gap <= state.cashGoal * 0.4;
  const bestPath = getPathOption(state.path).title;
  app.innerHTML = `
    <section class="screen">
      <section class="hero">
        <div class="hero-kicker">🏁 ${s.title}</div>
        <div class="hero-title">${closer ? s.closer : s.stillFar}</div>
        <div class="hero-copy">${s.copy}</div>
        <div class="hero-scene">
          <div class="avatar">🏆</div>
          <div class="scene-note">${s.mentor}</div>
        </div>
      </section>
      <section class="summary-card section">
        <div class="summary-list">
          <div class="summary-item"><div class="summary-label">${labels.cashGoal}</div><div class="summary-value">${currency(state.cashGoal)}</div></div>
          <div class="summary-item"><div class="summary-label">${labels.actualCash}</div><div class="summary-value">${currency(state.currentCash)}</div></div>
          <div class="summary-item"><div class="summary-label">${labels.gap}</div><div class="summary-value">${currency(gap)}</div></div>
          <div class="summary-item"><div class="summary-label">${s.bestPath}</div><div class="summary-value">${bestPath}</div></div>
          <div class="summary-item"><div class="summary-label">${s.lesson}</div><div class="summary-value">${deriveLesson()}</div></div>
          <div class="summary-item"><div class="summary-label">${s.company}</div><div class="summary-value">${closer ? s.stateGood : s.stateTense}</div></div>
        </div>
      </section>
      <section class="npc-card section">
        <div class="npc-avatar">🤝</div>
        <div>
          <div class="npc-name">${s.mentorTitle}</div>
          <div class="npc-copy">${s.mentor}</div>
        </div>
      </section>
      <div class="actions section">
        <button class="primary-btn" id="replayBtn">${labels.replay}</button>
        <button class="secondary-btn" id="changeBtn">${labels.changePath}</button>
      </div>
    </section>
  `;
  document.getElementById('replayBtn').onclick = startGame;
  document.getElementById('changeBtn').onclick = renderPath;
}

function render() {
  topSubtitle.textContent = t().topSubtitle;
  renderLanding();
}
render();
