const state = {
  lang: 'zh',
  country: null,
  goal: null,
  situation: null,
  path: null,
  month: 1,
  totalMonths: 3,
  actual: 0,
  clarity: 28,
  stability: 25,
  confidence: 30,
  history: []
};

const screenContainer = document.getElementById('screenContainer');
document.getElementById('langToggle').addEventListener('click', () => {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  render(currentScreen);
});

let currentScreen = 'landing';

function t(){ return window.APP_DATA[state.lang]; }

function currencyText(n){
  return state.country === 'us' ? `US$${n.toLocaleString()}` : `NT$${n.toLocaleString()}`;
}

function goalNumeric(goalText){
  const digits = goalText.replace(/[^\d]/g,'');
  return Number(digits || 0);
}

function shell(inner){
  screenContainer.innerHTML = `<section class="screen">${inner}</section>`;
}

function renderLanding(){
  const d = t();
  shell(`
    <div class="hero">
      <span class="pill">Mobile MVP</span>
      <h1>${d.landingTitle}</h1>
      <p>${d.landingBody}</p>
      <button class="cta" data-next="country">${d.start}</button>
    </div>
    <div class="section-title">${d.chooseLanguage}</div>
    <div class="grid2">
      <button class="choice" data-lang="zh"><div class="eyebrow">Traditional Chinese</div><h3>繁體中文</h3><p>比較貼近情緒與生活語感。</p></button>
      <button class="choice" data-lang="en"><div class="eyebrow">English</div><h3>English</h3><p>Use the English-first product version.</p></button>
    </div>
  `);
  bindCommon();
  [...document.querySelectorAll('[data-lang]')].forEach(btn=>btn.onclick=()=>{state.lang=btn.dataset.lang; renderLanding();});
}

function renderCountry(){
  const d=t();
  shell(`
    <div class="section-title">${d.chooseCountry}</div>
    ${d.countries.map(c=>`
      <button class="choice" data-country="${c.id}">
        <div class="eyebrow">Context</div>
        <h3>${c.title}</h3>
        <p>${c.body}</p>
      </button>`).join('')}
  `);
  document.querySelectorAll('[data-country]').forEach(btn=>btn.onclick=()=>{state.country=btn.dataset.country; currentScreen='goal'; render('goal');});
}

function renderGoal(){
  const d=t();
  const goals = d.goals[state.country || 'tw'];
  shell(`
    <div class="month-head"><div class="mini">Cash Goal First</div><h2>${d.chooseGoal}</h2><p>${d.goalBody}</p></div>
    ${goals.map(g=>`<button class="choice" data-goal="${g}"><div class="eyebrow">Target</div><h3>${g}</h3><p>${state.lang==='zh'?'先誠實選一個你想接近的數字。':'Choose the number you want to move toward first.'}</p></button>`).join('')}
  `);
  document.querySelectorAll('[data-goal]').forEach(btn=>btn.onclick=()=>{state.goal=btn.dataset.goal; currentScreen='situation'; render('situation');});
}

function renderSituation(){
  const d=t();
  shell(`
    <div class="section-title">${d.chooseSituation}</div>
    ${d.situations.map(s=>`<button class="choice" data-situation="${s.id}"><span class="pill">${s.tag}</span><h3>${s.title}</h3><p>${s.body}</p></button>`).join('')}
  `);
  document.querySelectorAll('[data-situation]').forEach(btn=>btn.onclick=()=>{state.situation=btn.dataset.situation; currentScreen='path'; render('path');});
}

function renderPath(){
  const d=t();
  shell(`
    <div class="section-title">${d.choosePath}</div>
    ${d.paths.map(p=>`<button class="choice" data-path="${p.id}"><div class="eyebrow">${p.eyebrow}</div><h3>${p.title}</h3><p>${p.body}</p><div class="meta">${p.meta}</div></button>`).join('')}
  `);
  document.querySelectorAll('[data-path]').forEach(btn=>btn.onclick=()=>{state.path=btn.dataset.path; startRun(); currentScreen='month'; render('month');});
}

function startRun(){
  state.month=1; state.history=[]; state.clarity=28; state.stability=25; state.confidence=30; 
  state.actual = Math.round(goalNumeric(state.goal) * initialRatio());
}

function initialRatio(){
  let base = 0.36;
  if(state.path==='opc') base = 0.42;
  if(state.path==='smallbiz') base = 0.40;
  if(state.path==='asset') base = 0.33;
  if(state.path==='mixed') base = 0.38;
  if(state.situation==='pressure') base -= 0.05;
  if(state.situation==='debt') base -= 0.10;
  return Math.max(0.18, base);
}

function renderMonth(){
  const d=t();
  const goalNum = goalNumeric(state.goal);
  const gap = Math.max(goalNum - state.actual,0);
  shell(`
    <div class="month-head">
      <div class="mini">Month ${state.month} / ${state.totalMonths}</div>
      <h2>${state.lang==='zh'?`第 ${state.month} 個月`:`Month ${state.month}`}</h2>
      <p>${d.monthIntro}</p>
    </div>

    <div class="stats">
      <div class="stat-box"><div class="k">${state.lang==='zh'?'每月目標':'Cash Goal'}</div><div class="v">${state.goal}</div></div>
      <div class="stat-box"><div class="k">${state.lang==='zh'?'本月現金':'This Month'}</div><div class="v">${currencyText(state.actual)}</div></div>
      <div class="stat-box"><div class="k">${state.lang==='zh'?'差距':'Gap'}</div><div class="v">${currencyText(gap)}</div></div>
    </div>

    <div class="card bars">
      ${barHtml(d.bars[0], state.clarity)}
      ${barHtml(d.bars[1], state.stability)}
      ${barHtml(d.bars[2], state.confidence)}
    </div>

    <div class="section-title">${d.decisionTitle}</div>
    ${d.actions.map(a=>`<button class="choice" data-action="${a.id}"><div class="eyebrow">${a.eyebrow}</div><h3>${a.title}</h3><p>${a.body}</p></button>`).join('')}
  `);
  document.querySelectorAll('[data-action]').forEach(btn=>btn.onclick=()=>applyAction(btn.dataset.action));
}

function barHtml(label,val){
  return `<div class="bar"><div class="label"><span>${label}</span><span>${val}</span></div><div class="track"><div class="fill" style="width:${val}%"></div></div></div>`;
}

function applyAction(action){
  const goalNum = goalNumeric(state.goal);
  let delta = 0;
  let mentor = '';
  let gain = '';
  let pressure = '';
  if(action==='lean'){
    delta = 0.08; state.stability += 12; state.clarity += 6; state.confidence += 5;
    mentor = state.lang==='zh' ? '你先把局勢穩住了。這種判斷，往往比急著放大更重要。' : 'You stabilized the board first. That judgment often matters more than rushing to expand.';
    gain = state.lang==='zh' ? '你保住了現金流的底線。' : 'You protected the floor of your cash flow.';
    pressure = state.lang==='zh' ? '成長速度還不快，但節奏更穩。' : 'Growth is still modest, but the rhythm is steadier.';
  }
  if(action==='exposure'){
    delta = 0.14; state.confidence += 8; state.clarity += 4; state.stability -= 3;
    mentor = state.lang==='zh' ? '你選擇主動出擊。多一點曝光，確實會換來更多可能。' : 'You chose to make a move. More exposure can create more possibility.';
    gain = state.lang==='zh' ? '收入機會被打開了一些。' : 'You opened the door to more income opportunities.';
    pressure = state.lang==='zh' ? '這也會讓你的能量消耗更明顯。' : 'This can also increase the pressure on your energy.';
  }
  if(action==='ai'){
    delta = 0.11; state.clarity += 10; state.confidence += 7; state.stability += 2;
    mentor = state.lang==='zh' ? '你開始用工具替自己換時間。這是一種成熟的放大方式。' : 'You used tools to buy back time. That is a mature form of leverage.';
    gain = state.lang==='zh' ? '你的產能開始被放大。' : 'Your capacity is starting to scale.';
    pressure = state.lang==='zh' ? '接下來要注意持續成本的節奏。' : 'Now the main thing is to manage recurring costs carefully.';
  }
  if(action==='borrow'){
    delta = 0.09; state.stability += 4; state.confidence += 3; state.clarity += 8;
    mentor = state.lang==='zh' ? '你先補上了眼前缺口。這不是退步，而是在爭取下一步的時間。' : 'You patched the immediate gap. This is not failure; it is buying time for the next move.';
    gain = state.lang==='zh' ? '本月的壓力先被緩了一些。' : 'The pressure eased a little this month.';
    pressure = state.lang==='zh' ? '但後面的利息與負擔，之後要一起看。' : 'But later, you will need to face the burden and cost that follow.';
  }
  const volatility = Math.random() * 0.04;
  state.actual = Math.min(goalNum, Math.round(state.actual + goalNum * (delta + volatility)));
  state.clarity = clamp(state.clarity); state.stability = clamp(state.stability); state.confidence = clamp(state.confidence);
  state.history.push({month: state.month, action, mentor, gain, pressure, actual: state.actual});
  renderResult(mentor, gain, pressure);
}

function clamp(v){ return Math.max(8, Math.min(100, v)); }

function renderResult(mentor, gain, pressure){
  const goalNum = goalNumeric(state.goal);
  const gap = Math.max(goalNum - state.actual, 0);
  shell(`
    <div class="result-box">
      <span class="pill">${state.lang==='zh'?'這個月的結果':'Result this month'}</span>
      <h3>${state.lang==='zh'?'你又往前推了一步。':'You moved the run forward.'}</h3>
      <p>${state.lang==='zh'?'你的目標':'Your target'}：<strong>${state.goal}</strong><br>${state.lang==='zh'?'本月現金流':'This month'}：<strong>${currencyText(state.actual)}</strong><br>${state.lang==='zh'?'差距':'Gap'}：<strong>${currencyText(gap)}</strong></p>
    </div>
    <div class="mentor-box">
      <div class="title">${t().mentorTitle}</div>
      <p>${mentor}</p>
      <p style="margin-top:12px"><strong>${state.lang==='zh'?'這次的進步：':'Progress:'}</strong> ${gain}</p>
      <p style="margin-top:10px"><strong>${state.lang==='zh'?'接下來要注意：':'Watch next:'}</strong> ${pressure}</p>
    </div>
    <button class="primary-btn" id="nextBtn">${state.month >= state.totalMonths ? t().summaryTitle : t().nextMonth}</button>
  `);
  document.getElementById('nextBtn').onclick = ()=>{
    if(state.month >= state.totalMonths){ currentScreen='summary'; render('summary'); }
    else { state.month += 1; currentScreen='month'; render('month'); }
  };
}

function renderSummary(){
  const last = state.history[state.history.length-1];
  const pathTitle = t().paths.find(p=>p.id===state.path)?.title || '';
  const best = state.path==='opc' ? (state.lang==='zh'?'更聚焦地放大你的能力':'Focus on amplifying your capability') : state.path==='smallbiz' ? (state.lang==='zh'?'更清楚地管理毛利與節奏':'Manage margin and rhythm more clearly') : state.path==='asset' ? (state.lang==='zh'?'更耐心地看長短期平衡':'Balance short and long term more patiently') : (state.lang==='zh'?'把多條路拆成主次節奏':'Separate your multiple paths into a clearer order');
  shell(`
    <div class="summary-box">
      <span class="badge">${state.lang==='zh'?'這一局完成':'Run complete'}</span>
      <h3>${t().summaryTitle}</h3>
      <p>${state.lang==='zh'?'你這次選擇的主路徑是':'Your main path this run was'} <strong>${pathTitle}</strong>。</p>
      <p>${state.lang==='zh'?'你最需要補強的一件事是':'One thing to strengthen next is'}：<strong>${best}</strong></p>
      <p>${state.lang==='zh'?'你現在比開始時更清楚，這本身就是很重要的收穫。':'You now have more clarity than when you started. That itself is a real gain.'}</p>
    </div>
    <div class="mentor-box">
      <div class="title">${t().mentorTitle}</div>
      <p>${state.lang==='zh'?'你的目標不小，但方向已經比一開始更像一條路了。先把節奏站穩，後面的選擇就會慢慢變多。':'Your goal is not small, but it already looks more like a path now. Stabilize the rhythm first, and more options will open later.'}</p>
    </div>
    <button class="primary-btn" id="againBtn">${t().playAgain}</button>
    <button class="secondary-btn" id="switchBtn">${t().switchPath}</button>
    <div class="footnote">GitHub Pages mobile MVP · game-feel version</div>
  `);
  document.getElementById('againBtn').onclick = ()=>{ startRun(); currentScreen='month'; render('month'); };
  document.getElementById('switchBtn').onclick = ()=>{ currentScreen='path'; render('path'); };
}

function bindCommon(){
  document.querySelectorAll('[data-next]').forEach(btn=>btn.onclick=()=>{currentScreen=btn.dataset.next; render(currentScreen);});
}

function render(screen){
  currentScreen = screen;
  if(screen==='landing') return renderLanding();
  if(screen==='country') return renderCountry();
  if(screen==='goal') return renderGoal();
  if(screen==='situation') return renderSituation();
  if(screen==='path') return renderPath();
  if(screen==='month') return renderMonth();
  if(screen==='summary') return renderSummary();
}

render('landing');
