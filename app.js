
const state = {target:null,start:null,path:null,monthIndex:-1,chosenChoice:null,cashFlow:20000,pressure:45,stability:50,confidence:45};
const screen=document.getElementById('screen'); const hud=document.getElementById('hud');
const hudTarget=document.getElementById('hudTarget'); const hudMonth=document.getElementById('hudMonth');
const hudCash=document.getElementById('hudCash'); const hudGap=document.getElementById('hudGap');
const restartBtn=document.getElementById('restartBtn');

restartBtn.addEventListener('click', ()=>resetRun());
function fmt(n){ return "NT$"+Number(n).toLocaleString("en-US"); }
function clamp(v,min,max){ return Math.max(min,Math.min(max,v)); }
function resetRun(){ state.target=null; state.start=null; state.path=null; state.monthIndex=-1; state.chosenChoice=null; state.cashFlow=20000; state.pressure=45; state.stability=50; state.confidence=45; renderIntro(); }
function updateHUD(){ if(state.path){hud.classList.remove('hidden'); restartBtn.hidden=false;} else {hud.classList.add('hidden'); restartBtn.hidden=true;}
  hudTarget.textContent=fmt(state.target||50000); hudMonth.textContent=state.monthIndex>=0?`${state.monthIndex+1} / 3`:"0 / 3"; hudCash.textContent=fmt(state.cashFlow); hudGap.textContent=fmt(Math.max((state.target||50000)-state.cashFlow,0)); }

function renderIntro(){ updateHUD(); screen.innerHTML=`
<section class="hero">
  <div class="hero-visual">
    <div class="float-card"><div class="small">第 0 回合</div><div class="big">先定現金目標</div></div>
    <div class="avatar"></div><div class="cityline3"></div><div class="cityline2"></div><div class="cityline"></div>
  </div>
  <h1 class="hero-title">你的現金流之路，從這一局開始。</h1>
  <div class="hero-sub">這不是問卷，也不是課程。這是一局 3 個月的商業人生模擬。每個月你都會遇到一個真實情境，做一個選擇，然後立刻看見代價與收穫。</div>
  <button class="btn-primary" id="startRunBtn">開始這一局</button>
</section>
<section class="dialogue"><div class="npc"></div><div><div class="name">顧問 / 貴人</div><div class="line">先不要急著變很厲害。先找一條你現在走得動，而且越走越穩的路。</div></div></section>`;
document.getElementById('startRunBtn').onclick=renderGoal; }

function renderGoal(){ updateHUD();
screen.innerHTML=`<section class="panel"><div class="kicker">第 0 回合</div><h2 class="title">你每個月需要多少現金流？</h2><p class="subtitle">不用先證明自己。先誠實地說出你想補到多少，我們再往下走。</p><div class="option-grid">${
GAME_DATA.cashTargets.map(t=>`<button class="btn-pick pick-card" data-target="${t.value}"><div class="pick-top"><div class="pick-icon">💰</div><div class="pick-badge">每月目標</div></div><div class="pick-title">${t.label}</div><p class="pick-desc">先說出你每個月真正需要的現金流。我們再幫你看，哪條路比較有機會接近它。</p><div class="pick-note">先定目標，不先評價高低。</div></button>`).join('')
}</div></section>`;
document.querySelectorAll('[data-target]').forEach(el=>el.onclick=()=>{state.target=Number(el.dataset.target); renderStartType();}); }

function renderStartType(){ updateHUD();
screen.innerHTML=`<section class="panel"><div class="kicker">第 0 回合</div><h2 class="title">你現在站在哪種起點？</h2><p class="subtitle">這不是貼標籤，只是讓這一局更貼近現實。</p><div class="option-grid">${
GAME_DATA.starts.map(s=>`<button class="btn-pick pick-card" data-start="${s.id}"><div class="pick-top"><div class="pick-icon">${s.icon}</div><div class="pick-badge">${s.badge}</div></div><div class="pick-title">${s.title}</div><p class="pick-desc">${s.desc}</p><div class="pick-note">選最接近你現在的狀態，不需要完美。</div></button>`).join('')
}</div></section>`;
document.querySelectorAll('[data-start]').forEach(el=>el.onclick=()=>{state.start=el.dataset.start; if(state.start==='stable'){state.cashFlow=26000; state.pressure=28; state.stability=58; state.confidence=54;} if(state.start==='pressure'){state.cashFlow=20000; state.pressure=45; state.stability=50; state.confidence=45;} if(state.start==='zero'){state.cashFlow=12000; state.pressure=68; state.stability=38; state.confidence=36;} renderPath();}); }

function renderPath(){ updateHUD();
screen.innerHTML=`<section class="panel"><div class="kicker">第 0 回合</div><h2 class="title">先選你這一局的第一條路</h2><p class="subtitle">這不是永遠的身份，只是你先測的第一條可行收入路。</p><div class="option-grid">${
GAME_DATA.paths.map(p=>`<button class="btn-pick pick-card" data-path="${p.id}"><div class="pick-top"><div class="pick-icon">${p.icon}</div><div class="pick-badge">${p.badge}</div></div><div class="pick-title">${p.title}</div><p class="pick-desc">${p.desc}</p><div class="pick-note">${p.note}</div></button>`).join('')
}</div></section><section class="dialogue"><div class="npc"></div><div><div class="name">顧問 / 貴人</div><div class="line">先選一條你現在走得動的路，不要急著選看起來最厲害的。</div></div></section>`;
document.querySelectorAll('[data-path]').forEach(el=>el.onclick=()=>{state.path=el.dataset.path; state.monthIndex=0; renderMonth();}); }

function renderMonth(){ updateHUD(); const route=GAME_DATA.routes[state.path]; const month=route.months[state.monthIndex];
screen.innerHTML=`<section class="result-hero"><div class="kicker">${state.path==='solo'?'一人公司路':'小生意路'}</div><h2 class="result-title">${month.title}</h2><div class="small-muted">${month.situation}</div></section>
<section class="dialogue"><div class="npc"></div><div><div class="name">顧問 / 貴人</div><div class="line">${month.mentor}</div></div></section>
<section class="panel"><div class="stat-row">
<div class="stat-box"><div class="stat-label">目標現金流</div><div class="stat-value">${fmt(state.target)}</div></div>
<div class="stat-box"><div class="stat-label">目前現金流</div><div class="stat-value">${fmt(state.cashFlow)}</div></div>
<div class="stat-box"><div class="stat-label">壓力值</div><div class="stat-value">${state.pressure}</div></div>
<div class="stat-box"><div class="stat-label">穩定度</div><div class="stat-value">${state.stability}</div></div>
</div></section>
<section class="choice-list">${
month.choices.map((c,idx)=>`<button class="choice-card" data-choice="${idx}"><div class="choice-head"><div class="choice-title">${c.title}</div><div class="choice-tag">${c.tag}</div></div><div class="choice-copy">${c.copy}</div><div class="meter-list">${c.meters.map(m=>`<span class="meter">${m}</span>`).join('')}</div></button>`).join('')
}</section>`;
document.querySelectorAll('[data-choice]').forEach(el=>el.onclick=()=>{state.chosenChoice=Number(el.dataset.choice); renderResult();}); }

function renderResult(){ const route=GAME_DATA.routes[state.path]; const month=route.months[state.monthIndex]; const choice=month.choices[state.chosenChoice];
state.cashFlow += choice.delta.cash; state.pressure=clamp(state.pressure+choice.delta.pressure,0,100); state.stability=clamp(state.stability+choice.delta.stability,0,100); state.confidence=clamp(state.confidence+choice.delta.confidence,0,100);
updateHUD();
screen.innerHTML=`<section class="result-hero"><div class="kicker">結果揭曉</div><h2 class="result-title">${choice.resultTitle}</h2><div class="small-muted">${choice.resultText}</div></section>
<section class="panel"><div class="stat-row">
<div class="stat-box"><div class="stat-label">本月現金流</div><div class="stat-value">${fmt(state.cashFlow)}</div></div>
<div class="stat-box"><div class="stat-label">壓力值</div><div class="stat-value">${state.pressure}</div></div>
<div class="stat-box"><div class="stat-label">穩定度</div><div class="stat-value">${state.stability}</div></div>
<div class="stat-box"><div class="stat-label">信心值</div><div class="stat-value">${state.confidence}</div></div>
</div></section>
<section class="lesson"><strong>你這次學到什麼：</strong><br>${choice.lesson}</section>
<section class="dialogue"><div class="npc"></div><div><div class="name">顧問 / 貴人</div><div class="line">你不是在被考試。你是在慢慢看懂：什麼選擇會把你帶近目標，什麼選擇只是看起來很忙。</div></div></section>
<div class="center"><button class="btn-next" id="nextBtn">${state.monthIndex===2?'看總結':'進入下個月'}</button></div>`;
document.getElementById('nextBtn').onclick=()=>{ if(state.monthIndex===2){ renderSummary(); } else { state.monthIndex += 1; renderMonth(); } };
}

function renderSummary(){ updateHUD(); const route=GAME_DATA.routes[state.path]; const gap=Math.max(state.target-state.cashFlow,0);
screen.innerHTML=`<section class="result-hero"><div class="kicker">3 個月總結</div><h2 class="result-title">${route.summary.headline}</h2><div class="small-muted">你現在不一定已經達標，但你已經比剛開始更懂，自己該怎麼走。</div></section>
<section class="summary-grid">
<div class="summary-card"><div class="summary-title">你的目標</div><div class="summary-big">${fmt(state.target)}</div></div>
<div class="summary-card"><div class="summary-title">目前現金流</div><div class="summary-big">${fmt(state.cashFlow)}</div></div>
<div class="summary-card"><div class="summary-title">還差多少</div><div class="summary-big">${fmt(gap)}</div></div>
<div class="summary-card"><div class="summary-title">這一局你的狀態</div><div class="summary-big">壓力 ${state.pressure} / 穩定 ${state.stability} / 信心 ${state.confidence}</div></div>
</section>
<section class="panel"><div class="kicker">你學到的 3 件事</div><div class="choice-list">${route.summary.bullets.map(b=>`<div class="summary-card">${b}</div>`).join('')}</div></section>
<section class="dialogue"><div class="npc"></div><div><div class="name">顧問 / 貴人</div><div class="line">${route.summary.next}</div></div></section>
<div class="center"><button class="btn-primary" id="playAgainBtn">再玩一局</button></div>`;
document.getElementById('playAgainBtn').onclick=()=>{ state.monthIndex=-1; state.path=null; renderPath(); };
}
renderIntro();
