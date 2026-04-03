const app = document.getElementById('app');
const state = { month: -1, currentCash: GAME.startCash, pressure: 40, stability: 45, learned: [] };

function money(n){ return `NT$${n.toLocaleString('en-US')}`; }

function renderStart(){
  app.innerHTML = `
    <div class="top">
      <div class="logo"><div class="logoBox">OPC</div><div><div class="title">OPC Business Simulator</div><div class="sub">核心玩法原型｜不是首頁，是先驗證玩法</div></div></div>
    </div>
    <div class="card hero">
      <span class="badge">第 0 回合</span>
      <div class="h1">你的現金流之路，現在開始。</div>
      <div class="p">目標不是一夜翻盤，而是先把每月現金流從 <b>${money(GAME.startCash)}</b>，慢慢往 <b>${money(GAME.goal)}</b> 推。</div>
      <button class="btn primary" id="startBtn">開始第一個月</button>
    </div>
    <div class="npc"><div class="avatar">🧭</div><div><div class="npcName">顧問 NPC</div><div class="npcText">先不要急著找最厲害的答案。先找一條你現在走得動、而且走得穩的路。</div></div></div>
    <div class="hud">
      <div class="pill">目標：${money(GAME.goal)}</div>
      <div class="pill">起點：壓力起步</div>
      <div class="pill">路線：一人公司</div>
    </div>`;
  document.getElementById('startBtn').onclick = () => { state.month = 0; renderMonth(); };
}

function renderMonth(){
  const m = GAME.months[state.month];
  app.innerHTML = `
    <div class="top">
      <div class="logo"><div class="logoBox">OPC</div><div><div class="title">OPC Business Simulator</div><div class="sub">像遊戲一樣學現金流</div></div></div>
      <div class="pill">${state.month+1} / ${GAME.months.length}</div>
    </div>
    <div class="hud">
      <div class="pill">目標：${money(GAME.goal)}</div>
      <div class="pill">目前：${money(state.currentCash)}</div>
      <div class="pill">差距：${money(Math.max(0,GAME.goal-state.currentCash))}</div>
    </div>
    <div class="sectionTitle">${m.title}</div>
    <div class="sectionSub">${m.situation}</div>
    <div class="npc"><div class="avatar">🧠</div><div><div class="npcName">顧問 NPC</div><div class="npcText">${m.npc}</div></div></div>
    ${m.choices.map((c,i)=>`
      <div class="option" data-i="${i}">
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="tag">${c.tag}</div>
      </div>`).join('')}
  `;
  document.querySelectorAll('.option').forEach(el=>el.onclick = ()=>choose(Number(el.dataset.i)));
}

function choose(i){
  const m = GAME.months[state.month];
  const c = m.choices[i];
  state.currentCash += c.result.cash;
  state.pressure += c.result.pressure;
  state.stability += c.result.stability;
  state.learned.push(c.result.lesson);
  app.innerHTML = `
    <div class="top">
      <div class="logo"><div class="logoBox">OPC</div><div><div class="title">結果揭曉</div><div class="sub">第 ${state.month+1} 個月</div></div></div>
    </div>
    <div class="stats">
      <div class="stat"><label>本月現金流變化</label><strong>+ ${money(c.result.cash)}</strong></div>
      <div class="stat"><label>目前現金流</label><strong>${money(state.currentCash)}</strong></div>
      <div class="stat"><label>壓力值</label><strong>${state.pressure}</strong></div>
      <div class="stat"><label>穩定度</label><strong>${state.stability}</strong></div>
    </div>
    <div class="npc"><div class="avatar">💬</div><div><div class="npcName">顧問 NPC</div><div class="npcText">${c.result.note}</div></div></div>
    <div class="lesson"><h4>你這次學到什麼</h4><p>${c.result.lesson}</p></div>
    <button class="btn primary" id="nextBtn">${state.month < GAME.months.length-1 ? '進入下一個月' : '查看 3 個月總結'}</button>
  `;
  document.getElementById('nextBtn').onclick = ()=>{
    if(state.month < GAME.months.length-1){ state.month += 1; renderMonth(); } else { renderEnd(); }
  }
}

function renderEnd(){
  app.innerHTML = `
    <div class="top">
      <div class="logo"><div class="logoBox">OPC</div><div><div class="title">3 個月總結</div><div class="sub">先看玩法有沒有用</div></div></div>
    </div>
    <div class="card">
      <div class="sectionTitle">你現在比開始時更懂了。</div>
      <div class="sectionSub">這 3 個月，你不是只在選答案，而是在看懂：哪些錢來得快但代價高，哪些選擇看起來慢卻更穩。</div>
      <div class="stats">
        <div class="stat"><label>目標</label><strong>${money(GAME.goal)}</strong></div>
        <div class="stat"><label>目前</label><strong>${money(state.currentCash)}</strong></div>
      </div>
    </div>
    <div class="lesson" style="margin-top:16px"><h4>這 3 個月你學到的 3 件事</h4><p class="small">1. ${state.learned[0] || ''}<br><br>2. ${state.learned[1] || ''}<br><br>3. ${state.learned[2] || ''}</p></div>
    <div class="npc"><div class="avatar">✨</div><div><div class="npcName">顧問 NPC</div><div class="npcText">你現在還沒到目標，這很正常。但你已經不再只是焦慮，而是開始知道差距從哪裡來，下一步該怎麼走。</div></div></div>
    <button class="btn secondary" id="restartBtn">再玩一次</button>
  `;
  document.getElementById('restartBtn').onclick = ()=>{ state.month=-1; state.currentCash=GAME.startCash; state.pressure=40; state.stability=45; state.learned=[]; renderStart(); };
}

renderStart();
