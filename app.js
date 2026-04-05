
const state={target:null,role:null,path:null,monthIndex:-1,cashFlow:20000,pressure:45,stability:50,confidence:45};
const screen=document.getElementById('screen');
function money(n){return 'NT$'+Number(n).toLocaleString('en-US')}
function clamp(v,min,max){return Math.max(min,Math.min(max,v))}
function gap(){return Math.max((state.target||50000)-state.cashFlow,0)}

function titleScreen(){
  screen.innerHTML=`<div class="topbar"><button class="icon-btn">☰</button><button class="pill-btn">手遊 UI 版</button></div>
  <section class="title-screen">
    <div class="title-hero">
      <div class="grid"></div><div class="glow-line"></div>
      <div class="logo-wrap">
        <div class="logo-left"><div class="logo-mark">PF</div><div><div class="logo-title">Pathfinder｜實戰導航</div><div class="logo-sub">從失業當天開始，找回第一條可行收入路</div></div></div>
        <div class="lang-chip">RPG</div>
      </div>
      <div class="hook"><div class="hook-kicker">NEW RULES / FIRST DAY</div><h1 class="hook-title">舊工作規則已經失效。<br>從今天開始，你得建立現金流。</h1></div>
      <div class="character"><div class="ch-hair"></div><div class="ch-head"></div><div class="ch-body"></div><div class="ch-badge">START</div></div>
      <div class="hero-card"><div class="big">第 0 章</div><div class="small">你不是來填表，是來開始這一局。</div></div>
    </div>
    <div class="title-copy">
      <p>這是一局 3 個月的找路遊戲。你會從失業當天、兼差起點、或零現金壓力中出發。每個月都要做一個選擇，承受一個後果，並學到一個真實商業規則。</p>
      <button id="startBtn" class="cta-big">開始冒險</button>
    </div>
  </section>
  <section class="npc-box"><div class="npc-avatar"></div><div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">先不要急著變很厲害。先找一條你現在走得動，而且越走越穩的路。</div></div></section>`;
  document.getElementById('startBtn').onclick=chooseTarget;
}
function chooseTarget(){
  screen.innerHTML=`<div class="topbar"><button id="backIntro" class="icon-btn">←</button><button class="pill-btn">第 0 回合</button></div>
  <section class="panel"><div class="panel-kicker">MISSION SETUP</div><h2 class="panel-title">你的第一個月目標現金流是多少？</h2><p class="panel-sub">先定目標，後面所有決策才有意義。</p></section>
  <section class="chapter-map">${GAME.targets.map(t=>`<div class="chapter-node"><div class="chapter-top"><div><div class="chapter-title">${t.label}</div><div class="chapter-desc">${t.desc}</div></div><div class="chapter-badge">TARGET</div></div><button class="select-btn" data-target="${t.value}">選這個目標</button></div>`).join('')}</section>`;
  document.getElementById('backIntro').onclick=titleScreen;
  document.querySelectorAll('[data-target]').forEach(btn=>btn.onclick=()=>{state.target=Number(btn.dataset.target);chooseRole();});
}
function chooseRole(){
  screen.innerHTML=`<div class="topbar"><button id="backTarget" class="icon-btn">←</button><button class="pill-btn">選角色</button></div>
  <section class="panel"><div class="panel-kicker">PLAYER TYPE</div><h2 class="panel-title">你現在是哪一種起點？</h2><p class="panel-sub">不要想太遠，只要選最接近你現在的位置。</p></section>
  <section class="chapter-map">${GAME.roles.map(r=>`<div class="chapter-node"><div class="chapter-top"><div class="chapter-title">${r.icon} ${r.title}</div><div class="chapter-badge">${r.badge}</div></div><div class="chapter-desc">${r.desc}</div><button class="select-btn" data-role="${r.id}">選這個角色</button></div>`).join('')}</section>`;
  document.getElementById('backTarget').onclick=chooseTarget;
  document.querySelectorAll('[data-role]').forEach(btn=>btn.onclick=()=>{state.role=btn.dataset.role;const base=GAME.roles.find(x=>x.id===state.role).base;state.cashFlow=base.cash;state.pressure=base.pressure;state.stability=base.stability;state.confidence=base.confidence;choosePath();});
}
function choosePath(){
  screen.innerHTML=`<div class="topbar"><button id="backRole" class="icon-btn">←</button><button class="pill-btn">選路線</button></div>
  <section class="npc-box"><div class="npc-avatar"></div><div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">先選一條你現在走得動的路，不要急著選看起來最厲害的。</div></div></section>
  <section class="panel"><div class="panel-kicker">CHAPTER MAP</div><h2 class="panel-title">先選你這一局的第一條路</h2><p class="panel-sub">不是永遠的身份，只是你先測的第一條可行收入路。</p></section>
  <section class="chapter-map">${GAME.paths.map(p=>`<div class="chapter-node"><div class="chapter-top"><div class="chapter-title">${p.emoji} ${p.title}</div><div class="chapter-badge">${p.badge}</div></div><div class="chapter-desc">${p.desc}</div><button class="select-btn" data-path="${p.id}">進入這條路</button></div>`).join('')}</section>`;
  document.getElementById('backRole').onclick=chooseRole;
  document.querySelectorAll('[data-path]').forEach(btn=>btn.onclick=()=>{state.path=btn.dataset.path;state.monthIndex=0;renderMonth();});
}
function renderMonth(){
  const route=GAME.routes[state.path], month=route.months[state.monthIndex];
  screen.innerHTML=`<div class="topbar"><button id="backPath" class="icon-btn">←</button><button class="pill-btn">第 ${state.monthIndex+1} 章</button></div>
  <section class="hud-top">
    <div class="hud-card"><div class="hud-label">目標</div><div class="hud-value">${money(state.target)}</div></div>
    <div class="hud-card"><div class="hud-label">月數</div><div class="hud-value">${state.monthIndex+1} / 3</div></div>
    <div class="hud-card"><div class="hud-label">現金流</div><div class="hud-value">${money(state.cashFlow)}</div></div>
    <div class="hud-card"><div class="hud-label">差距</div><div class="hud-value">${money(gap())}</div></div>
  </section>
  <section class="stage-header"><div class="panel-kicker">${state.path==='solo'?'ONE-PERSON COMPANY':'SMALL BUSINESS'}</div><h2 class="stage-title">${month.title}</h2><p class="stage-copy">${month.situation}</p></section>
  <section class="npc-box"><div class="npc-avatar"></div><div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">${month.mentor}</div></div></section>
  <section class="choice-grid">${month.choices.map((c,i)=>`<button class="choice-card" data-choice="${i}"><div class="choice-head"><div class="choice-title">${c.title}</div><div class="choice-tag">${c.tag}</div></div><div class="choice-copy">${c.copy}</div><div class="meters">${c.meters.map(m=>`<span class="meter">${m}</span>`).join('')}</div></button>`).join('')}</section>`;
  document.getElementById('backPath').onclick=choosePath;
  document.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>applyChoice(Number(btn.dataset.choice)));
}
function applyChoice(i){
  const month=GAME.routes[state.path].months[state.monthIndex], c=month.choices[i];
  state.cashFlow += c.delta.cash; state.pressure=clamp(state.pressure+c.delta.pressure,0,100); state.stability=clamp(state.stability+c.delta.stability,0,100); state.confidence=clamp(state.confidence+c.delta.confidence,0,100);
  screen.innerHTML=`<div class="topbar"><button class="icon-btn">✓</button><button class="pill-btn">RESULT</button></div>
  <section class="result-panel"><div class="panel-kicker">RESULT</div><h2 class="result-title">${c.resultTitle}</h2><p class="result-copy">${c.resultText}</p></section>
  <section class="result-stats">
    <div class="hud-card"><div class="hud-label">本月現金流</div><div class="hud-value">${money(state.cashFlow)}</div></div>
    <div class="hud-card"><div class="hud-label">壓力值</div><div class="hud-value">${state.pressure}</div></div>
    <div class="hud-card"><div class="hud-label">穩定度</div><div class="hud-value">${state.stability}</div></div>
    <div class="hud-card"><div class="hud-label">信心值</div><div class="hud-value">${state.confidence}</div></div>
  </section>
  <section class="lesson"><strong>你這次學到：</strong><br>${c.lesson}</section>
  <section class="npc-box"><div class="npc-avatar"></div><div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">你不是在被考試。你是在慢慢看懂：什麼選擇會把你帶近目標，什麼選擇只是看起來很忙。</div></div></section>
  <button id="nextBtn" class="battle-btn">${state.monthIndex===2?'看這一局總結':'進入下個月'}</button>`;
  document.getElementById('nextBtn').onclick=()=>{if(state.monthIndex===2) renderSummary(); else {state.monthIndex+=1; renderMonth();}};
}
function renderSummary(){
  const summary=GAME.routes[state.path].summary;
  screen.innerHTML=`<div class="topbar"><button class="icon-btn">★</button><button class="pill-btn">FINAL REPORT</button></div>
  <section class="result-panel"><div class="panel-kicker">FINAL</div><h2 class="result-title">${summary.title}</h2><p class="result-copy">你現在不一定已經達標，但你已經比剛開始更懂，自己該怎麼走。</p></section>
  <section class="summary-grid">
    <div class="summary-card"><div class="summary-title">你的目標</div><div class="summary-big">${money(state.target)}</div></div>
    <div class="summary-card"><div class="summary-title">目前現金流</div><div class="summary-big">${money(state.cashFlow)}</div></div>
    <div class="summary-card"><div class="summary-title">還差多少</div><div class="summary-big">${money(gap())}</div></div>
    <div class="summary-card"><div class="summary-title">狀態</div><div class="summary-big">壓力 ${state.pressure} / 穩定 ${state.stability} / 信心 ${state.confidence}</div></div>
  </section>
  <section class="panel"><div class="panel-kicker">YOU LEARNED</div><div class="summary-grid">${summary.learns.map(x=>`<div class="summary-card">${x}</div>`).join('')}</div></section>
  <section class="npc-box"><div class="npc-avatar"></div><div><div class="npc-name">顧問 / 貴人</div><div class="npc-line">${summary.next}</div></div></section>
  <button id="restartBtn" class="battle-btn">再玩一局</button><div class="footer-space"></div>`;
  document.getElementById('restartBtn').onclick=()=>{state.path=null;state.monthIndex=-1;choosePath();};
}
titleScreen();
