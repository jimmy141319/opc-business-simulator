window.OPC_DATA = {
  zh: {
    brandSub: '像線上遊戲一樣，玩出你的現金流之路',
    startTag: '第 0 回合',
    heroTitle: '先定你的現金目標，\n再開始這一局。',
    heroCopy: '這不是填問卷，也不是冷冰冰的工具。你現在要做的，是選一條你走得動的路，然後看它會把你帶去哪裡。',
    startBtn: '開始這一局',
    mentorRole: '貴人顧問',
    mentorIntro: '先別急著找完美答案。先定你這一局想拿到多少現金，我會陪你把路走出來。',
    goalsTitle: '先定你的目標',
    goalsSub: '這不是別人要你賺多少，而是你這個月真正想拿到多少現金。',
    goalChoices: [
      {label:'NT$30,000', note:'先補基本現金流'},
      {label:'NT$50,000', note:'開始有喘息空間'},
      {label:'NT$100,000', note:'你想走得更穩更遠'},
      {label:'NT$300,000', note:'你想把局做大'},
    ],
    sceneTitle: '你的起點',
    sceneSub: '同樣的目標，不同起點，玩法會完全不同。',
    scenes: [
      {id:'stable', title:'一般起步', icon:'🧭', copy:'你還有一些空間可以試路，不需要每一步都硬撐。', chip:'比較穩'},
      {id:'pressure', title:'壓力起步', icon:'⏳', copy:'你需要比較快看到現金流，不能浪費太多時間。', chip:'現金急'},
      {id:'debt', title:'零現金／高負債', icon:'🪫', copy:'你不是從夢想開始，而是先想辦法活下來。', chip:'先保命'},
    ],
    pathTitle: '你的第一條路',
    pathSub: '沒有完美答案，只有更適合這一局的起手式。',
    paths: [
      {id:'solo', title:'一人公司', icon:'🧠', copy:'用技能、服務、AI 與低成本模式建立收入。', chip:'低成本上手'},
      {id:'smallbiz', title:'小生意', icon:'🛍️', copy:'用商品、擺販、販售或在地經營去換現金流。', chip:'直接做生意'},
      {id:'asset', title:'資產型', icon:'🏠', copy:'從租賃、房產、設備或收租思維開始布局。', chip:'偏資產路線'},
      {id:'mixed', title:'混合型', icon:'🧩', copy:'把勞動、小生意與資產思維混搭，降低風險。', chip:'比較穩'},
    ],
    monthLabel:'第 {n} 個月',
    hudTarget:'本局目標', hudCash:'本月現金流', hudGap:'差距', hudState:'公司狀態',
    clarity:'清晰度', stability:'穩定度', confidence:'信心度',
    eventLabel:'本月事件',
    months: [
      {
        title:'現金還不夠，你要先守還是先攻？',
        copy:'你的第一條路剛剛開始，現金還沒站穩。這個月，你要先保住局面，還是主動去換更多可能？',
        mentor:'第一個月不用急著證明自己很厲害。能先把局撐住，本身就是能力。',
        actions:[
          {title:'先守住現金流', sub:'先減少不必要壓力，換比較穩的下個月。', effect:{cash:14000, clarity:8, stability:12, confidence:6}},
          {title:'主動衝一次機會', sub:'換更高可能性，但本月波動也會更大。', effect:{cash:22000, clarity:5, stability:-4, confidence:10}},
          {title:'借時間換喘息', sub:'先補眼前缺口，但未來壓力會跟上來。', effect:{cash:26000, clarity:4, stability:-8, confidence:4}},
        ]
      },
      {
        title:'你開始有一點起色，現在要不要放大？',
        copy:'上一個月的選擇讓你看到一些路。這個月，是要先穩，還是拉高收入速度？',
        mentor:'很多人是在第二步太急，才把原本能走的路走斷。',
        actions:[
          {title:'穩穩做深', sub:'先讓這條路更清楚，降低亂試的成本。', effect:{cash:18000, clarity:10, stability:9, confidence:7}},
          {title:'加一點曝光', sub:'讓更多人看到你，換可能更高的收入。', effect:{cash:24000, clarity:4, stability:-2, confidence:9}},
          {title:'加 AI 提高產能', sub:'效率可能上來，但也會增加新的費用壓力。', effect:{cash:21000, clarity:9, stability:2, confidence:8}},
        ]
      },
      {
        title:'現在不是選最好看的路，而是選撐得久的路。',
        copy:'第三個月，你已經開始看見自己的節奏。最後這一步，決定你是只玩一局，還是找到一條能反覆走的路。',
        mentor:'你現在要選的，不是最熱鬧的一步，而是最能支撐下一局的一步。',
        actions:[
          {title:'把模式做穩', sub:'先把能重複跑的東西定下來。', effect:{cash:22000, clarity:10, stability:12, confidence:10}},
          {title:'再衝一次收入', sub:'有機會更快靠近目標，但也比較不穩。', effect:{cash:30000, clarity:4, stability:-6, confidence:12}},
          {title:'混合第二條路', sub:'用第二種做法幫你分擔風險。', effect:{cash:25000, clarity:8, stability:8, confidence:9}},
        ]
      }
    ],
    resultGood:'這一步幫你把局面往前推了一些。',
    resultNote:'你不是在填資料，你是在看一條路會把你帶去哪裡。',
    nextMonth:'進入下一個月',
    finalTitle:'這一局打完了',
    finalMentor:'你現在比剛開始時更懂了。下一局，不是重來，而是帶著理解再走一次。',
    replay:'再開一局',
    backHome:'回首頁'
  },
  en: {
    brandSub: 'Play your way into a real cash-flow path',
    startTag: 'Round 0',
    heroTitle: 'Set your cash goal.\nThen play this round.',
    heroCopy: 'This is not a survey and not a cold tool. You are entering a round, choosing a path, and seeing where that path actually takes you.',
    startBtn: 'Start this round',
    mentorRole: 'Mentor',
    mentorIntro: 'Do not chase the perfect answer yet. Set the cash goal for this round first, and I will help you walk the path.',
    goalsTitle: 'Set your target',
    goalsSub: 'This is not what others want from you. It is the cash you truly want each month.',
    goalChoices: [
      {label:'US$1,000', note:'Cover the basics first'},
      {label:'US$2,000', note:'Create breathing room'},
      {label:'US$3,000', note:'Build a more stable path'},
      {label:'US$10,000', note:'Play a bigger game'},
    ],
    sceneTitle: 'Your starting point',
    sceneSub: 'The same goal feels very different from a different starting point.',
    scenes: [
      {id:'stable', title:'Stable Start', icon:'🧭', copy:'You still have some room to test paths without panic.', chip:'More stable'},
      {id:'pressure', title:'Pressure Start', icon:'⏳', copy:'You need cash flow sooner, so wasted time hurts more.', chip:'Cash pressure'},
      {id:'debt', title:'Zero Cash / Debt', icon:'🪫', copy:'You are not starting from dreams. You are starting from pressure.', chip:'Survive first'},
    ],
    pathTitle: 'Your first path',
    pathSub: 'There is no perfect answer. Only a better opening move for this round.',
    paths: [
      {id:'solo', title:'One-Person Co.', icon:'🧠', copy:'Use skill, service, AI, and low overhead to build income.', chip:'Low-cost start'},
      {id:'smallbiz', title:'Small Business', icon:'🛍️', copy:'Sell products, run small offers, or turn local demand into cash.', chip:'Direct selling'},
      {id:'asset', title:'Asset Path', icon:'🏠', copy:'Start from rental logic, property thinking, or asset income.', chip:'Asset angle'},
      {id:'mixed', title:'Mixed Path', icon:'🧩', copy:'Blend labor, small business, and asset thinking to reduce risk.', chip:'More balanced'},
    ],
    monthLabel:'Month {n}',
    hudTarget:'Target', hudCash:'Cash this month', hudGap:'Gap', hudState:'Company state',
    clarity:'Clarity', stability:'Stability', confidence:'Confidence',
    eventLabel:'Monthly event',
    months: [
      {
        title:'Cash is still tight. Will you defend or attack?',
        copy:'Your first path has started, but cash is not stable yet. This month, will you protect the ground you have, or push for a bigger chance?',
        mentor:'In the first month, you do not need to look impressive. Keeping the round alive is already a skill.',
        actions:[
          {title:'Protect the cash flow', sub:'Reduce pressure first and buy a steadier next month.', effect:{cash:500, clarity:8, stability:12, confidence:6}},
          {title:'Push for a bigger chance', sub:'Higher upside, but more volatility right away.', effect:{cash:800, clarity:5, stability:-4, confidence:10}},
          {title:'Borrow time', sub:'Patch the gap now, but pressure comes later.', effect:{cash:950, clarity:4, stability:-8, confidence:4}},
        ]
      },
      {
        title:'You have a little momentum. Do you scale or steady?',
        copy:'Last month showed some movement. Now the question is simple: make it deeper, or try to make it bigger?',
        mentor:'A lot of people break a working path because they rush the second step.',
        actions:[
          {title:'Make the path deeper', sub:'Strengthen what is already working and cut wasted motion.', effect:{cash:650, clarity:10, stability:9, confidence:7}},
          {title:'Increase exposure', sub:'Get seen by more people and chase higher income.', effect:{cash:900, clarity:4, stability:-2, confidence:9}},
          {title:'Use AI for leverage', sub:'Better output, but new cost pressure appears too.', effect:{cash:760, clarity:9, stability:2, confidence:8}},
        ]
      },
      {
        title:'Now choose the path that lasts, not the path that looks loud.',
        copy:'By month three, you can already feel your rhythm. This move decides whether you only played a round or found a path you can repeat.',
        mentor:'You do not need the loudest move. You need the one that can carry into the next round.',
        actions:[
          {title:'Lock in a stable model', sub:'Turn this into something repeatable.', effect:{cash:780, clarity:10, stability:12, confidence:10}},
          {title:'Push income one more time', sub:'You may get closer faster, but it will feel less stable.', effect:{cash:1100, clarity:4, stability:-6, confidence:12}},
          {title:'Add a second path', sub:'Reduce risk by layering another cash move.', effect:{cash:900, clarity:8, stability:8, confidence:9}},
        ]
      }
    ],
    resultGood:'This move pushed your round forward.',
    resultNote:'You are not filling a form. You are seeing where a path actually leads.',
    nextMonth:'Go to next month',
    finalTitle:'Round complete',
    finalMentor:'You understand more now than when you started. The next round is not starting over. It is starting smarter.',
    replay:'Play another round',
    backHome:'Back to home'
  }
}
