const app = document.getElementById('app');
const state = {
  lang: 'zh',
  goal: null,
  situation: null,
  path: null,
  monthIndex: 0,
  cash: 0,
  confidence: 50,
  stability: 50,
  clarity: 50,
  lastResult: null
};
const fmt = n => `NT$${n.toLocaleString('en-US')}`;

function setScreen(html){ app.innerHTML = html; }
function shell(content){
  return `<div class="topbar">
    <div class="brand"><div class="logo">OPC</div><div><h1>OPC Business Simulator</h1><p>像遊戲一樣學現金流</p></div></div>
    <button class="lang" onclick="toggleLang()">EN / 中文</button>
  </div>${content}<div class="footer-space"></div>`;
}
function toggleLang(){ alert('這一版先固定中文沉浸體驗，下一版再做完整雙語遊戲切換。'); }

function renderIntro(){
  setScreen(shell(`
    <section class="screen active">
      <div class="hero">
        <div class="badge">第 0 回合</div>
        <h2>開始這一局</h2>
        <p>${GAME_DATA.introZh}</p>
        <button class="primary" onclick="renderGoal()">進入現金流世界</button>
      </div>
      <div class="section-title"><h3>你的引導者</h3><span class="chip">Angel NPC</span></div>
      <div class="panel story">
        <div class="avatar">🪽</div>
        <div class="dialog"><div class="name">貴人顧問</div><p>你的目標不需要完美，但這一局要誠實。先告訴我，你每月真正想拿到多少現金。</p></div>
      </div>
    </section>`));
}

function renderGoal(){
  setScreen(shell(`
    <section class="screen active">
      <div class="section-title"><h3>第 1 步：你的現金目標</h3><span class="chip">1 / 3</span></div>
      <div class="panel story">
        <div class="avatar">💰</div>
        <div class="dialog"><div class="name">本局主任務</div><p>先不要想太多，先選你這一局真正想接近的每月現金流。</p></div>
      </div>
      <div class="options">
        ${GAME_DATA.cashTargets.map(t=>`<button class="option-btn" onclick="chooseGoal('${t.id}')"><strong>${t.label}</strong><span>${t.desc}</span></button>`).join('')}
      </div>
    </section>`));
}
function chooseGoal(id){
  state.goal = GAME_DATA.cashTargets.find(x=>x.id===id);
  renderSituation();
}

function renderSituation(){
  setScreen(shell(`
    <section class="screen active">
      <div class="section-title"><h3>第 2 步：你的起點</h3><span class="chip">2 / 3</span></div>
      <div class="panel story">
        <div class="avatar">🧭</div>
        <div class="dialog"><div class="name">起始處境</div><p>沒有兩個人是一樣的局。選一個最像你現在狀態的起點。</p></div>
      </div>
      <div class="options">
        ${GAME_DATA.situations.map(s=>`<button class="option-btn" onclick="chooseSituation('${s.id}')"><strong>${s.title}</strong><span>${s.desc}</span></button>`).join('')}
      </div>
    </section>`));
}
function chooseSituation(id){
  state.situation = GAME_DATA.situations.find(x=>x.id===id);
  state.cash = state.situation.cash;
  state.confidence = state.situation.confidence;
  state.stability = state.situation.stability;
  state.clarity = 42;
  renderPath();
}

function renderPath(){
  setScreen(shell(`
    <section class="screen active">
      <div class="section-title"><h3>第 3 步：你的第一條路</h3><span class="chip">3 / 3</span></div>
      <div class="panel story">
        <div class="avatar">🎮</div>
        <div class="dialog"><div class="name">選路不是填表</div><p>把這一步想像成選職業。沒有完美答案，只有更適合這一局的起手式。</p></div>
      </div>
      <div class="cards">
        ${GAME_DATA.paths.map(p=>`<div class="card"><div class="icon">${p.icon}</div><h4>${p.title}</h4><p>${p.desc}</p><button class="ghost-btn" onclick="choosePath('${p.id}')">${p.tag}</button></div>`).join('')}
      </div>
    </section>`));
}
function choosePath(id){
  state.path = GAME_DATA.paths.find(x=>x.id===id);
  state.monthIndex = 0;
  renderMonth();
}

function renderMonth(){
  const m = GAME_DATA.months[state.monthIndex];
  const progress = Math.max(5, Math.min(100, Math.round(state.cash / state.goal.goal * 100)));
  setScreen(shell(`
    <section class="screen active">
      <div class="hud">
        <div class="pill">目標 ${fmt(state.goal.goal)}</div>
        <div class="pill">起點 ${state.situation.title}</div>
        <div class="pill">路線 ${state.path.title}</div>
        <div class="pill">第 ${state.monthIndex+1} 月 / 3</div>
      </div>
      <div class="goalbar">
        <div class="row"><strong>本局現金進度</strong><span>${fmt(state.cash)} / ${fmt(state.goal.goal)}</span></div>
        <div class="bar"><span style="width:${progress}%"></span></div>
      </div>
      <div class="stats">
        <div class="stat"><div class="label">清晰度</div><div class="value">${state.clarity}</div></div>
        <div class="stat"><div class="label">穩定度</div><div class="value">${state.stability}</div></div>
        <div class="stat"><div class="label">信心度</div><div class="value">${state.confidence}</div></div>
      </div>
      <div class="section-title"><h3>${m.title}</h3><span class="chip">Event</span></div>
      <div class="panel story">
        <div class="avatar">🪽</div>
        <div class="dialog"><div class="name">貴人顧問</div><p>${m.advisor}</p></div>
      </div>
      <div class="options">
        ${m.choices.map((c,i)=>`<button class="option-btn" onclick="applyChoice(${i})"><strong>${c.title}</strong><span>${c.text}</span></button>`).join('')}
      </div>
    </section>`));
}

function applyChoice(i){
  const choice = GAME_DATA.months[state.monthIndex].choices[i];
  state.cash += choice.effect.cash;
  state.stability = Math.max(0, Math.min(100, state.stability + choice.effect.stability));
  state.confidence = Math.max(0, Math.min(100, state.confidence + choice.effect.confidence));
  state.clarity = Math.max(0, Math.min(100, state.clarity + choice.effect.clarity));
  state.lastResult = choice;
  renderResult();
}

function renderResult(){
  const done = state.monthIndex === GAME_DATA.months.length - 1;
  const gap = Math.max(0, state.goal.goal - state.cash);
  setScreen(shell(`
    <section class="screen active">
      <div class="hud">
        <div class="pill">本月結算</div>
        <div class="pill">差距 ${fmt(gap)}</div>
      </div>
      <div class="section-title"><h3>結果揭曉</h3><span class="chip">Reveal</span></div>
      <div class="panel story">
        <div class="avatar">✨</div>
        <div class="dialog"><div class="name">這一回合發生了什麼</div><p>${state.lastResult.result}</p></div>
      </div>
      <div class="result-box">
        <h5>你這回合學到的事</h5>
        <p>${state.lastResult.lesson}</p>
        <p>目前現金：<strong>${fmt(state.cash)}</strong></p>
        <p>距離目標：<strong>${fmt(gap)}</strong></p>
      </div>
      ${done ? `<button class="next-btn" onclick="renderFinal()">看最終總結</button>` : `<button class="next-btn" onclick="nextMonth()">進入下一個月</button>`}
    </section>`));
}
function nextMonth(){ state.monthIndex += 1; renderMonth(); }

function renderFinal(){
  const hit = Math.round(state.cash / state.goal.goal * 100);
  const summary = hit >= 100 ? '你已經把這一局打到及格線以上。接下來不是亂衝，而是把這條路複製出來。' : hit >= 70 ? '你還沒完全達標，但這局已經證明你不是沒有路，而是還需要更穩的結構。' : '這一局沒有直接翻盤，但你已經看見差距真正從哪裡來。下一輪會更有感。';
  setScreen(shell(`
    <section class="screen active">
      <div class="section-title"><h3>這一局總結</h3><span class="chip">Finish</span></div>
      <div class="panel story">
        <div class="avatar">🏁</div>
        <div class="dialog"><div class="name">局後點評</div><p>${summary}</p></div>
      </div>
      <div class="stats">
        <div class="stat"><div class="label">目標完成度</div><div class="value">${hit}%</div></div>
        <div class="stat"><div class="label">最終現金</div><div class="value">${fmt(state.cash)}</div></div>
        <div class="stat"><div class="label">你的主路線</div><div class="value" style="font-size:18px">${state.path.title}</div></div>
      </div>
      <div class="result-box">
        <h5>貴人顧問給你的話</h5>
        <p>你不是在做問卷，你是在練一種真正的人生判斷力。願意再跑一輪，你會更快看出哪條路是你的局。</p>
      </div>
      <button class="next-btn" onclick="resetGame()">再開一局</button>
    </section>`));
}
function resetGame(){ state.goal = null; state.situation = null; state.path = null; state.monthIndex = 0; state.cash = 0; renderIntro(); }

renderIntro();
