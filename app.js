const state = {
  lang: 'zh',
  currency: 'NT$',
  goal: null,
  scene: null,
  path: null,
  month: 0,
  cash: 0,
  clarity: 22,
  stability: 24,
  confidence: 20,
};

const screen = document.getElementById('screen');
const langToggle = document.getElementById('langToggle');
const brandSub = document.getElementById('brandSub');

function t(){ return OPC_DATA[state.lang]; }
function fmtMoney(n){ return `${state.currency}${Number(n).toLocaleString()}`; }
function goalNum(label){ return Number(String(label).replace(/[^\d]/g,'')); }
function replaceMonth(str,n){ return str.replace('{n}', n); }

langToggle.addEventListener('click', ()=>{
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  state.currency = state.lang === 'zh' ? 'NT$' : 'US$';
  brandSub.textContent = t().brandSub;
  renderHome();
});

function setScreen(html){ screen.innerHTML = `<div class="fade-in">${html}</div>`; }

function renderHome(){
  brandSub.textContent = t().brandSub;
  const d = t();
  setScreen(`
    <section class="scene-card">
      <div class="hero-tag">${d.startTag}</div>
      <h1 class="hero-title">${d.heroTitle.replace(/\n/g,'<br>')}</h1>
      <div class="hero-copy">${d.heroCopy}</div>
      <button class="cta-main" id="startGameBtn">${d.startBtn}</button>
    </section>
    <section class="dialogue">
      <div class="avatar">🧭</div>
      <div>
        <div class="dialogue-role">${d.mentorRole}</div>
        <div class="dialogue-text">${d.mentorIntro}</div>
      </div>
    </section>
  `);
  document.getElementById('startGameBtn').onclick = renderGoal;
}

function renderGoal(){
  const d = t();
  setScreen(`
    <div class="section-title">${d.goalsTitle}</div>
    <div class="section-sub">${d.goalsSub}</div>
    <div class="choice-list">
      ${d.goalChoices.map((g,i)=>`
        <button class="choice-card" data-idx="${i}">
          <div class="choice-top"><div class="choice-title">${g.label}</div><div class="choice-icon">💸</div></div>
          <div class="choice-copy">${g.note}</div>
          <div class="choice-chip">${state.lang==='zh'?'就以這個目標開局':'Start with this target'}</div>
        </button>
      `).join('')}
    </div>
  `);
  [...document.querySelectorAll('.choice-card')].forEach((el, i)=>{
    el.onclick = ()=>{
      state.goal = d.goalChoices[i].label;
      renderScene();
    };
  });
}

function renderScene(){
  const d = t();
  setScreen(`
    <div class="hud">
      <div class="hud-card"><div class="hud-label">${d.hudTarget}</div><div class="hud-value">${state.goal}</div></div>
      <div class="hud-card"><div class="hud-label">Round</div><div class="hud-value">1 / 4</div></div>
    </div>
    <div class="section-title">${d.sceneTitle}</div>
    <div class="section-sub">${d.sceneSub}</div>
    <div class="choice-list">
      ${d.scenes.map((s,i)=>`
        <button class="choice-card" data-scene="${i}">
          <div class="choice-top"><div class="choice-title">${s.title}</div><div class="choice-icon">${s.icon}</div></div>
          <div class="choice-copy">${s.copy}</div>
          <div class="choice-chip">${s.chip}</div>
        </button>
      `).join('')}
    </div>
  `);
  [...document.querySelectorAll('.choice-card')].forEach((el, i)=>{
    el.onclick = ()=>{
      state.scene = d.scenes[i];
      renderPath();
    };
  });
}

function renderPath(){
  const d = t();
  setScreen(`
    <div class="hud">
      <div class="hud-card"><div class="hud-label">${d.hudTarget}</div><div class="hud-value">${state.goal}</div></div>
      <div class="hud-card"><div class="hud-label">${state.lang==='zh'?'起點':'Start'}</div><div class="hud-value" style="font-size:20px">${state.scene.title}</div></div>
      <div class="hud-card full"><div class="hud-label">Round</div><div class="hud-value">3 / 4</div></div>
    </div>
    <div class="dialogue">
      <div class="avatar">🤝</div>
      <div>
        <div class="dialogue-role">${d.mentorRole}</div>
        <div class="dialogue-text">${state.lang==='zh'?'先不要找完美答案，先選一條你現在走得動的路。':'Do not look for the perfect answer yet. Pick the first path you can actually walk.'}</div>
      </div>
    </div>
    <div class="section-title">${d.pathTitle}</div>
    <div class="section-sub">${d.pathSub}</div>
    <div class="choice-list">
      ${d.paths.map((p,i)=>`
        <button class="choice-card" data-path="${i}">
          <div class="choice-top"><div class="choice-title">${p.title}</div><div class="choice-icon">${p.icon}</div></div>
          <div class="choice-copy">${p.copy}</div>
          <div class="choice-chip">${p.chip}</div>
        </button>
      `).join('')}
    </div>
  `);
  [...document.querySelectorAll('.choice-card')].forEach((el, i)=>{
    el.onclick = ()=>{
      state.path = d.paths[i];
      state.month = 1;
      state.cash = Math.round(goalNum(state.goal) * 0.28);
      if (state.scene.id === 'pressure') state.cash = Math.round(state.cash * 0.92);
      if (state.scene.id === 'debt') state.cash = Math.round(state.cash * 0.82);
      renderMonth();
    };
  });
}

function renderMonth(){
  const d = t();
  const m = d.months[state.month-1];
  const gap = Math.max(goalNum(state.goal) - state.cash, 0);
  setScreen(`
    <div class="hud">
      <div class="hud-card"><div class="hud-label">${d.hudTarget}</div><div class="hud-value">${state.goal}</div></div>
      <div class="hud-card"><div class="hud-label">${d.hudCash}</div><div class="hud-value">${fmtMoney(state.cash)}</div></div>
      <div class="hud-card"><div class="hud-label">${d.hudGap}</div><div class="hud-value">${fmtMoney(gap)}</div></div>
      <div class="hud-card"><div class="hud-label">${d.monthLabel.replace('{n}',state.month)}</div><div class="hud-value" style="font-size:20px">${state.path.title}</div></div>
      <div class="hud-card full">
        <div class="hud-label">${d.hudState}</div>
        <div class="progress-wrap">
          <div class="progress-row"><div class="progress-label">${d.clarity}</div><div class="bar"><div class="bar-fill" style="width:${state.clarity}%"></div></div></div>
          <div class="progress-row"><div class="progress-label">${d.stability}</div><div class="bar"><div class="bar-fill" style="width:${state.stability}%"></div></div></div>
          <div class="progress-row"><div class="progress-label">${d.confidence}</div><div class="bar"><div class="bar-fill" style="width:${state.confidence}%"></div></div></div>
        </div>
      </div>
    </div>
    <div class="dialogue">
      <div class="avatar">🧑‍🏫</div>
      <div>
        <div class="dialogue-role">${d.mentorRole}</div>
        <div class="dialogue-text">${m.mentor}</div>
      </div>
    </div>
    <section class="event-card">
      <div class="event-badge">${d.eventLabel}</div>
      <div class="event-title">${m.title}</div>
      <div class="event-copy">${m.copy}</div>
      <div class="action-list">
        ${m.actions.map((a,i)=>`
          <button class="action-btn" data-action="${i}">
            <div class="action-title">${a.title}</div>
            <div class="action-sub">${a.sub}</div>
          </button>
        `).join('')}
      </div>
    </section>
  `);
  [...document.querySelectorAll('.action-btn')].forEach((el, i)=>{
    el.onclick = ()=>applyAction(m.actions[i]);
  });
}

function applyAction(action){
  state.cash += action.effect.cash;
  state.clarity = clamp(state.clarity + action.effect.clarity);
  state.stability = clamp(state.stability + action.effect.stability);
  state.confidence = clamp(state.confidence + action.effect.confidence);
  renderResult(action);
}

function clamp(n){ return Math.max(0, Math.min(100, n)); }

function renderResult(action){
  const d = t();
  const goalN = goalNum(state.goal);
  const gap = Math.max(goalN - state.cash, 0);
  setScreen(`
    <section class="result-card">
      <div class="event-badge">${d.monthLabel.replace('{n}',state.month)}</div>
      <div class="event-title">${d.resultGood}</div>
      <div class="event-copy">${action.title}<br><br>${d.resultNote}</div>
      <div class="result-grid">
        <div class="result-item"><div class="k">${d.hudTarget}</div><div class="v">${state.goal}</div></div>
        <div class="result-item"><div class="k">${d.hudCash}</div><div class="v">${fmtMoney(state.cash)}</div></div>
        <div class="result-item"><div class="k">${d.hudGap}</div><div class="v">${fmtMoney(gap)}</div></div>
      </div>
      <div class="dialogue" style="margin-top:8px">
        <div class="avatar">🌟</div>
        <div>
          <div class="dialogue-role">${d.mentorRole}</div>
          <div class="dialogue-text">${monthMentorLine()}</div>
        </div>
      </div>
      <div class="button-row">
        ${state.month < 3 ? `<button class="cta-main" id="nextBtn">${d.nextMonth}</button>` : `<button class="cta-main" id="finalBtn">${d.finalTitle}</button>`}
      </div>
    </section>
  `);
  const btn = document.getElementById(state.month < 3 ? 'nextBtn' : 'finalBtn');
  btn.onclick = ()=>{
    if (state.month < 3) { state.month += 1; renderMonth(); }
    else renderFinal();
  };
}

function monthMentorLine(){
  const zh = [
    '你沒有只是選一個按鈕，而是在試一條真的會影響下一步的路。',
    '現在你已經開始看見：穩定、速度、壓力，三件事不會同時完美。',
    '你越來越不是在亂試，而是在做有意識的判斷。'
  ];
  const en = [
    'You did not just click a button. You tested a path that changes the next step.',
    'You can now feel that stability, speed, and pressure rarely stay perfect together.',
    'You are no longer guessing blindly. You are making more conscious calls.'
  ];
  return (state.lang==='zh'?zh:en)[state.month-1];
}

function renderFinal(){
  const d = t();
  const gap = Math.max(goalNum(state.goal)-state.cash,0);
  setScreen(`
    <section class="scene-card">
      <div class="hero-tag">${d.finalTitle}</div>
      <h1 class="hero-title">${state.lang==='zh'?'你打完了這一局。':'You finished this round.'}</h1>
      <div class="hero-copy">${d.finalMentor}</div>
      <div class="result-grid" style="margin-top:22px">
        <div class="result-item"><div class="k">${d.hudTarget}</div><div class="v">${state.goal}</div></div>
        <div class="result-item"><div class="k">${d.hudCash}</div><div class="v">${fmtMoney(state.cash)}</div></div>
        <div class="result-item"><div class="k">${d.hudGap}</div><div class="v">${fmtMoney(gap)}</div></div>
      </div>
      <div class="button-row">
        <button class="cta-main" id="replayBtn">${d.replay}</button>
        <button class="pill secondary" id="homeBtn">${d.backHome}</button>
      </div>
    </section>
  `);
  document.getElementById('replayBtn').onclick = resetAndGo;
  document.getElementById('homeBtn').onclick = resetAndHome;
}

function resetBase(){
  state.goal = null; state.scene = null; state.path = null; state.month = 0; state.cash = 0;
  state.clarity = 22; state.stability = 24; state.confidence = 20;
}
function resetAndGo(){ resetBase(); renderGoal(); }
function resetAndHome(){ resetBase(); renderHome(); }

renderHome();
