
const state = {target:null, role:null, path:null, monthIndex:-1, cashFlow:20000, pressure:45, stability:50, confidence:45};
const screen=document.getElementById('screen');
const hud=document.getElementById('hud');
const hudTarget=document.getElementById('hudTarget');
const hudMonth=document.getElementById('hudMonth');
const hudCash=document.getElementById('hudCash');
const hudGap=document.getElementById('hudGap');
const resetBtn=document.getElementById('resetBtn');
resetBtn.onclick = resetAll;

function money(n){return 'NT$'+Number(n).toLocaleString('en-US');}
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function gap(){ return Math.max((state.target||50000)-state.cashFlow,0); }
function renderHUD(){
  if(state.path){hud.classList.remove('hidden'); resetBtn.classList.remove('hidden');}
  else {hud.classList.add('hidden'); resetBtn.classList.add('hidden');}
  hudTarget.textContent=money(state.target||50000);
  hudMonth.textContent=state.monthIndex>=0?`${state.monthIndex+1} / 3`:'0 / 3';
  hudCash.textContent=money(state.cashFlow);
  hudGap.textContent=money(gap());
}
function resetAll(){
  state.target=null; state.role=null; state.path=null; state.monthIndex=-1;
  state.cashFlow=20000; state.pressure=45; state.stability=50; state.confidence=45;
  intro();
}
function intro(){
  renderHUD();
  screen.innerHTML = `
    <section class="hero">
      <div class="hero-visual">
        <div class="hero-grid"></div>
        <div class="scanline"></div>
        <div class="hook">
          <div class="hook-kicker">NEW RULES / FIRST DAY</div>
          <h1 class="hook-title">舊工作規則已經失效。<br>從今天開始，你得替自己建立現金流。</h1>
        </div>
        <div class="hero-avatar"></div>
        <div class="hero-badge">
          <div class="badge-big">第 0 回合</div>
          <div class="badge-small">你不是來填表，是來開始這一局。</div>
        </div>
      </div>
      <div class="hero-copy">
        <p class="hero-subtitle">這是一局 3 個月的找路遊戲。你會從失業當天、兼差起點、或零現金壓力中出發。每個月都要做一個選擇，承受一個後果，並學到一個真實商業規則。</p>
        <button id="startBtn" class="cta">開始這一局</button>
      </div>
    </section>
    <section class="npc-box">
      <div class="npc-avatar"></div>
      <div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">先不要急著變很厲害。先找一條你現在走得動，而且越走越穩的路。</div></div>
    </section>`;
  document.getElementById('startBtn').onclick = pickTarget;
}
function pickTarget(){
  renderHUD();
  screen.innerHTML = `
    <section class="section">
      <div class="section-kicker">ROUND 0</div>
      <h2 class="section-title">你每個月，至少要補多少現金？</h2>
      <p class="section-sub">先把目標說清楚，後面每一個選擇才有意義。</p>
    </section>
    <section class="card-list">
      ${GAME_DATA.targets.map(t=>`
        <button class="pick-card" data-target="${t.value}">
          <div class="pick-head"><div class="pick-icon">💰</div><div class="pick-badge">每月目標</div></div>
          <div class="pick-title">${t.label}</div>
          <div class="pick-desc">${t.hint}</div>
          <div class="pick-note">你不是在做理想測驗，而是在為這一局定出現實目標。</div>
        </button>`).join('')}
    </section>`;
  document.querySelectorAll('[data-target]').forEach(btn=>btn.onclick=()=>{state.target=Number(btn.dataset.target); pickRole();});
}
function pickRole(){
  renderHUD();
  screen.innerHTML = `
    <section class="section">
      <div class="section-kicker">ROUND 0</div>
      <h2 class="section-title">你現在是哪一種人？</h2>
      <p class="section-sub">不要想太遠，只要選最接近你現在的位置。</p>
    </section>
    <section class="card-list">
      ${GAME_DATA.roles.map(r=>`
        <button class="pick-card" data-role="${r.id}">
          <div class="pick-head"><div class="pick-icon">${r.icon}</div><div class="pick-badge">${r.badge}</div></div>
          <div class="pick-title">${r.title}</div>
          <div class="pick-desc">${r.desc}</div>
        </button>`).join('')}
    </section>`;
  document.querySelectorAll('[data-role]').forEach(btn=>btn.onclick=()=>{
    state.role=btn.dataset.role;
    if(state.role==='white'){ state.cashFlow=20000; state.pressure=46; state.stability=50; state.confidence=45; }
    if(state.role==='blue'){ state.cashFlow=18000; state.pressure=52; state.stability=46; state.confidence=43; }
    if(state.role==='side'){ state.cashFlow=26000; state.pressure=34; state.stability=55; state.confidence=52; }
    pickPath();
  });
}
function pickPath(){
  renderHUD();
  screen.innerHTML = `
    <section class="section">
      <div class="section-kicker">ROUND 0</div>
      <h2 class="section-title">先選你這一局的第一條路</h2>
      <p class="section-sub">不是永遠的身份，只是你先測的第一條可行收入路。</p>
    </section>
    <section class="npc-box">
      <div class="npc-avatar"></div>
      <div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">先選一條你現在走得動的路，不要急著選看起來最厲害的。</div></div>
    </section>
    <section class="card-list">
      ${GAME_DATA.paths.map(p=>`
        <button class="pick-card" data-path="${p.id}">
          <div class="pick-head"><div class="pick-icon">${p.icon}</div><div class="pick-badge">${p.badge}</div></div>
          <div class="pick-title">${p.title}</div>
          <div class="pick-desc">${p.desc}</div>
        </button>`).join('')}
    </section>`;
  document.querySelectorAll('[data-path]').forEach(btn=>btn.onclick=()=>{state.path=btn.dataset.path; state.monthIndex=0; renderMonth();});
}
function renderMonth(){
  renderHUD();
  const route=GAME_DATA.routes[state.path];
  const month=route.months[state.monthIndex];
  screen.innerHTML = `
    <section class="result">
      <div class="section-kicker">${state.path==='solo'?'一人公司路':'小生意路'}</div>
      <h2 class="result-title">${month.title}</h2>
      <p class="result-sub">${month.situation}</p>
    </section>
    <section class="npc-box">
      <div class="npc-avatar"></div>
      <div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">${month.mentor}</div></div>
    </section>
    <section class="section">
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-label">目標現金流</div><div class="stat-value">${money(state.target)}</div></div>
        <div class="stat-card"><div class="stat-label">目前現金流</div><div class="stat-value">${money(state.cashFlow)}</div></div>
        <div class="stat-card"><div class="stat-label">壓力值</div><div class="stat-value">${state.pressure}</div></div>
        <div class="stat-card"><div class="stat-label">穩定度</div><div class="stat-value">${state.stability}</div></div>
      </div>
    </section>
    <section class="card-list">
      ${month.choices.map((c,i)=>`
        <button class="choice-card" data-choice="${i}">
          <div class="choice-head"><div class="choice-title">${c.title}</div><div class="choice-tag">${c.tag}</div></div>
          <div class="choice-copy">${c.copy}</div>
          <div class="meter-row">${c.meters.map(m=>`<span class="meter">${m}</span>`).join('')}</div>
        </button>`).join('')}
    </section>`;
  document.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>applyChoice(Number(btn.dataset.choice)));
}
function applyChoice(i){
  const month=GAME_DATA.routes[state.path].months[state.monthIndex];
  const c=month.choices[i];
  state.cashFlow += c.delta.cash;
  state.pressure = clamp(state.pressure + c.delta.pressure, 0, 100);
  state.stability = clamp(state.stability + c.delta.stability, 0, 100);
  state.confidence = clamp(state.confidence + c.delta.confidence, 0, 100);
  renderHUD();
  screen.innerHTML = `
    <section class="result">
      <div class="section-kicker">RESULT</div>
      <h2 class="result-title">${c.resultTitle}</h2>
      <p class="result-sub">${c.resultText}</p>
    </section>
    <section class="section">
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-label">本月現金流</div><div class="stat-value">${money(state.cashFlow)}</div></div>
        <div class="stat-card"><div class="stat-label">壓力值</div><div class="stat-value">${state.pressure}</div></div>
        <div class="stat-card"><div class="stat-label">穩定度</div><div class="stat-value">${state.stability}</div></div>
        <div class="stat-card"><div class="stat-label">信心值</div><div class="stat-value">${state.confidence}</div></div>
      </div>
    </section>
    <section class="lesson"><strong>你這次學到：</strong><br>${c.lesson}</section>
    <section class="npc-box">
      <div class="npc-avatar"></div>
      <div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">你不是在被考試。你是在慢慢看懂：什麼選擇會把你帶近目標，什麼選擇只是看起來很忙。</div></div>
    </section>
    <div class="row-center"><button id="nextBtn" class="cta">${state.monthIndex===2?'看這一局總結':'進入下個月'}</button></div>`;
  document.getElementById('nextBtn').onclick=()=>{ if(state.monthIndex===2){ renderSummary(); } else { state.monthIndex+=1; renderMonth(); } };
}
function renderSummary(){
  const summary=GAME_DATA.routes[state.path].summary;
  renderHUD();
  screen.innerHTML = `
    <section class="result">
      <div class="section-kicker">FINAL</div>
      <h2 class="result-title">${summary.title}</h2>
      <p class="result-sub">你現在不一定已經達標，但你已經比剛開始更懂，自己該怎麼走。</p>
    </section>
    <section class="summary-grid">
      <div class="summary-card"><div class="summary-card-title">你的目標</div><div class="summary-big">${money(state.target)}</div></div>
      <div class="summary-card"><div class="summary-card-title">目前現金流</div><div class="summary-big">${money(state.cashFlow)}</div></div>
      <div class="summary-card"><div class="summary-card-title">還差多少</div><div class="summary-big">${money(gap())}</div></div>
      <div class="summary-card"><div class="summary-card-title">這一局狀態</div><div class="summary-big">壓力 ${state.pressure} / 穩定 ${state.stability} / 信心 ${state.confidence}</div></div>
    </section>
    <section class="section">
      <div class="section-kicker">你學到的 3 件事</div>
      <div class="card-list">${summary.learn.map(x=>`<div class="summary-card">${x}</div>`).join('')}</div>
    </section>
    <section class="npc-box">
      <div class="npc-avatar"></div>
      <div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">${summary.next}</div></div>
    </section>
    <div class="row-center"><button id="againBtn" class="cta">再玩一局</button></div>`;
  document.getElementById('againBtn').onclick=()=>{ state.path=null; state.monthIndex=-1; pickPath(); };
}
intro();
