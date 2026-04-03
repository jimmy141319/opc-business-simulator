const state = {
  lang: 'zh',
  country: 'taiwan',
  goal: null,
  situation: null,
  path: null,
  month: 0,
  cash: 0,
  clarity: 0,
  stability: 0,
  confidence: 0,
  lastOutcome: null,
};

const app = document.getElementById('app');
const langToggle = document.getElementById('langToggle');
const t = (key) => GAME_DATA.langs[state.lang][key] || key;

function clone(id){ return document.getElementById(id).content.firstElementChild.cloneNode(true); }
function moneyValue(str){ return Number(String(str).replace(/[^\d]/g,'')) || 0; }
function formatMoney(num){
  const v = Math.max(0, Math.round(num));
  return state.country === 'us' ? `US$${v.toLocaleString()}` : `NT$${v.toLocaleString()}`;
}
function goalOptions(){ return GAME_DATA.goals[state.country === 'us' ? 'en':'zh']; }
function setTextScope(root){ root.querySelectorAll('[data-i18n]').forEach(el=> el.textContent = t(el.dataset.i18n)); document.querySelectorAll('[data-i18n]').forEach(el=>{ if(!root.contains(el) && el.closest('header')) el.textContent = t(el.dataset.i18n);}); }
function render(){ setHeader();
  if(!state.goal) return renderIntro();
}
function setHeader(){ document.documentElement.lang = state.lang === 'zh' ? 'zh-Hant' : 'en'; langToggle.textContent = state.lang === 'zh' ? 'EN' : '中文'; document.querySelectorAll('[data-i18n]').forEach(el => { if(el.closest('header')) el.textContent = t(el.dataset.i18n);}); }
function goIntro(){ const node = clone('intro-template'); setTextScope(node); node.querySelector('[data-action="go-goal"]').onclick = goGoal; app.replaceChildren(node); }
function goGoal(){ const node = clone('goal-template'); setTextScope(node); const list = node.querySelector('#goalList'); const cont = node.querySelector('#goalContinue'); goalOptions().forEach(g=>{
    const btn = makeChoiceCard(g, state.lang==='zh' ? '把這個數字當成這一局的北極星。' : 'Use this as the north star for this run.', '');
    btn.onclick = ()=>{ state.goal = g; [...list.children].forEach(x=>x.classList.remove('selected')); btn.classList.add('selected'); cont.classList.remove('hidden'); };
    list.appendChild(btn);
  });
  cont.onclick = goSituation; app.replaceChildren(node);
}
function goSituation(){ const node = clone('situation-template'); setTextScope(node); const list=node.querySelector('#situationList'); const cont=node.querySelector('#situationContinue'); GAME_DATA.situations.forEach(s=>{
  const btn = makeChoiceCard(s.title[state.lang], s.copy[state.lang], s.tag[state.lang]);
  btn.onclick=()=>{ state.situation=s; [...list.children].forEach(x=>x.classList.remove('selected')); btn.classList.add('selected'); cont.classList.remove('hidden'); };
  list.appendChild(btn);
}); cont.onclick=goPath; app.replaceChildren(node); }
function goPath(){ const node=clone('path-template'); setTextScope(node); const list=node.querySelector('#pathList'); const cont=node.querySelector('#pathContinue'); GAME_DATA.paths.forEach(p=>{
  const btn=makeChoiceCard(p.title[state.lang], p.copy[state.lang], p.tag[state.lang]);
  btn.onclick=()=>{ state.path=p; [...list.children].forEach(x=>x.classList.remove('selected')); btn.classList.add('selected'); cont.classList.remove('hidden'); };
  list.appendChild(btn);
}); cont.onclick=startRun; app.replaceChildren(node); }
function startRun(){
  state.month=0;
  state.cash = state.situation.stats.cash * (state.country==='us'?80:1000);
  state.clarity = state.situation.stats.clarity;
  state.stability = state.situation.stats.stability;
  state.confidence = state.situation.stats.confidence;
  nextMonth();
}
function nextMonth(){
  state.month += 1;
  const monthData = GAME_DATA.months[state.path.id][state.month-1];
  const node = clone('month-template'); setTextScope(node);
  node.querySelector('#monthChip').textContent = state.lang==='zh' ? `第 ${state.month} 個月` : `Month ${state.month}`;
  node.querySelector('#monthTitle').textContent = monthData.title[state.lang];
  node.querySelector('#monthStep').textContent = `${state.month} / 3`;
  node.querySelector('#hudTarget').textContent = state.goal;
  node.querySelector('#hudCash').textContent = formatMoney(state.cash);
  node.querySelector('#hudGap').textContent = formatMoney(Math.max(0, moneyValue(state.goal)-state.cash));
  setBar(node.querySelector('#clarityBar'), state.clarity);
  setBar(node.querySelector('#stabilityBar'), state.stability);
  setBar(node.querySelector('#confidenceBar'), state.confidence);
  node.querySelector('#eventTitle').textContent = monthData.title[state.lang];
  node.querySelector('#eventCopy').textContent = monthData.copy[state.lang];
  const optList = node.querySelector('#optionList');
  monthData.options.forEach(opt=>{
    const card = document.createElement('button');
    card.className='option-card';
    card.innerHTML = `<div class="option-top">${opt.title[state.lang]}</div><div class="option-middle">${opt.copy[state.lang]}</div><div class="option-bottom"><span class="mini-pill">${state.lang==='zh'?'按一下揭曉':'Tap to reveal'}</span><span class="mini-pill">${state.lang==='zh'?'本月選擇':'This month\'s move'}</span></div>`;
    card.onclick = ()=>applyOption(opt);
    optList.appendChild(card);
  });
  app.replaceChildren(node);
}
function applyOption(opt){
  state.cash += opt.effect.cash;
  state.clarity = clamp(state.clarity + opt.effect.clarity);
  state.stability = clamp(state.stability + opt.effect.stability);
  state.confidence = clamp(state.confidence + opt.effect.confidence);
  state.lastOutcome = opt;
  showReveal();
}
function showReveal(){
  const node = clone('reveal-template'); setTextScope(node);
  node.querySelector('#revealChip').textContent = state.lang==='zh' ? `第 ${state.month} 個月揭曉` : `Month ${state.month} Revealed`;
  node.querySelector('#revealTitle').textContent = state.lastOutcome.title[state.lang];
  node.querySelector('#revealTarget').textContent = state.goal;
  node.querySelector('#revealCash').textContent = formatMoney(state.cash);
  node.querySelector('#revealGap').textContent = formatMoney(Math.max(0, moneyValue(state.goal)-state.cash));
  node.querySelector('#mentorText').textContent = state.lastOutcome.mentor[state.lang];
  node.querySelector('#lessonText').textContent = state.lastOutcome.lesson[state.lang];
  const nextBtn = node.querySelector('#revealNext');
  if(state.month < 3){ nextBtn.textContent = state.lang==='zh' ? '進入下一個月' : 'Go to Next Month'; nextBtn.onclick = nextMonth; }
  else { nextBtn.textContent = state.lang==='zh' ? '看本局總結' : 'See Run Summary'; nextBtn.onclick = showSummary; }
  app.replaceChildren(node);
}
function showSummary(){
  const node = clone('summary-template'); setTextScope(node);
  const gap = Math.max(0, moneyValue(state.goal)-state.cash);
  const pathName = state.path.title[state.lang];
  node.querySelector('#summaryHeadline').textContent = state.lang==='zh'
    ? (gap===0 ? '你這一局已經碰到目標了。' : '你還沒到目標，但你已經更知道差距從哪裡來。')
    : (gap===0 ? 'You touched your goal in this run.' : 'You are not there yet, but you understand the gap much better now.');
  node.querySelector('#summaryCopy').textContent = state.lang==='zh'
    ? '這一局真正的收穫，不只是數字，而是你開始知道哪種路適合你，哪種壓力不值得硬扛。'
    : 'The real gain in this run is not just the number. It is that you now understand which path fits you and which pressure is not worth carrying.';
  node.querySelector('#summaryPath').textContent = pathName;
  node.querySelector('#summaryPressure').textContent = pressureText(gap);
  node.querySelector('#summaryNext').textContent = nextText(gap);
  node.querySelector('[data-action="replay"]').onclick = ()=>{ state.goal=null; state.situation=null; state.path=null; goIntro(); };
  node.querySelector('[data-action="repath"]').onclick = ()=>{ state.path=null; goPath(); };
  app.replaceChildren(node);
}
function pressureText(gap){
  if(state.lang==='zh'){
    if(gap===0) return '現在最重要的是把節奏站穩';
    if(gap > moneyValue(state.goal)*0.6) return '收入產能還不夠';
    if(state.stability < 28) return '現金流穩定度還偏低';
    return '下一步需要更聚焦';
  }
  if(gap===0) return 'Keeping the rhythm stable now matters most';
  if(gap > moneyValue(state.goal)*0.6) return 'Income capacity is still too limited';
  if(state.stability < 28) return 'Cash flow stability is still fragile';
  return 'The next move needs more focus';
}
function nextText(gap){
  if(state.lang==='zh'){
    if(gap===0) return '你已經看到一條可行路。下一輪可以試著把它做得更穩，或換一條路比較看看。';
    return '下一輪你可以保留這個目標，但換一條路再試一次。你會更快看出，什麼是值得你長期走的。';
  }
  if(gap===0) return 'You have seen a workable path. In the next run, either make it steadier or compare it with another route.';
  return 'Keep the same target for the next run, but try another path. You will see faster what is worth building long term.';
}
function makeChoiceCard(title, copy, tag){
  const btn=document.createElement('button'); btn.className='choice-card';
  btn.innerHTML = `<div class="choice-title">${title}</div><div class="choice-copy">${copy}</div>${tag?`<div class="choice-tag">${tag}</div>`:''}`;
  return btn;
}
function setBar(el,val){ el.style.width = `${Math.max(8,Math.min(100,val))}%`; }
function clamp(v){ return Math.max(0, Math.min(100, v)); }
langToggle.onclick = ()=>{
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  const current = app.firstElementChild;
  if(!current) return goIntro();
  const id = current.className;
  // rerender current stage based on state
  if(!state.goal) return goIntro();
  if(state.goal && !state.situation) return goGoal();
  if(state.situation && !state.path) return goPath();
  if(state.path && state.month===0) return goPath();
  if(state.path && state.month>0 && current.classList.contains('run-screen')) { state.month -=1; return nextMonth(); }
  if(current.classList.contains('reveal-screen')) return showReveal();
  if(current.classList.contains('summary-screen')) return showSummary();
};

// initial flow
function init(){ goIntro(); }
init();
