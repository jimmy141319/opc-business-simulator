window.APP_DATA = {
  zh: {
    landingTitle: '把你的人生現金流，玩成一條路。',
    landingBody: '先設定你每個月真正想拿到的現金，再走一條適合你的收入路徑。這不是冷冰冰的工具，而是一場可反覆練習的商業人生模擬。',
    start: '開始這一局',
    chooseLanguage: '選擇語言',
    chooseCountry: '選擇你的國家情境',
    chooseGoal: '你希望每個月有多少現金流進來？',
    goalBody: '不用先解釋人生。先誠實地選一個你現在想接近的數字。',
    chooseSituation: '你現在從哪裡開始？',
    choosePath: '你想先走哪一條路？',
    nextMonth: '進入下個月',
    playAgain: '再玩一局',
    switchPath: '換一條路試試',
    countries:[{id:'tw',title:'台灣',body:'較貼近你現在的生活情境與現金流感受。'},{id:'us',title:'United States',body:'以美國幣別與商業場景來體驗這一局。'}],
    goals:{tw:['NT$30,000','NT$50,000','NT$100,000','NT$300,000'],us:['US$1,000','US$2,000','US$3,000','US$10,000']},
    situations:[
      {id:'stable',title:'一般起步',body:'你還有一些規劃空間，可以慢慢試。',tag:'留有餘裕'},
      {id:'pressure',title:'壓力起步',body:'你需要比較快補到現金流，步伐要更準。',tag:'時間有限'},
      {id:'debt',title:'零現金 / 高負債',body:'現在最重要的是先活下來、先穩住。',tag:'先求穩住'}
    ],
    paths:[
      {id:'opc',eyebrow:'Path 01',title:'一人公司',body:'用技能、服務、AI 與低成本模式，慢慢把收入站穩。',meta:'比較適合先從能力與效率開始放大。'},
      {id:'smallbiz',eyebrow:'Path 02',title:'小生意',body:'透過商品、攤販、社區販售或小型在地生意累積現金流。',meta:'有機會更快碰到現金，但也更考驗毛利與穩定。'},
      {id:'asset',eyebrow:'Path 03',title:'資產型',body:'用出租、租賃或資產配置邏輯，建立另一種現金流節奏。',meta:'前期壓力可能較高，適合更重視長期穩定的人。'},
      {id:'mixed',eyebrow:'Path 04',title:'混合型',body:'同時走兩條以上的路，降低單一路徑失敗的風險。',meta:'更靈活，但也更需要取捨與節奏感。'}
    ],
    monthIntro:'你不需要一次做到全部。先把這一個月走穩。',
    bars:['清晰度','穩定度','信心度'],
    decisionTitle:'這個月，你想用哪一張牌？',
    actions:[
      {id:'lean',eyebrow:'穩住局面',title:'先守現金流',body:'減少不必要壓力，把自己先留在場上。'},
      {id:'exposure',eyebrow:'主動出擊',title:'換更多機會',body:'多一點曝光，換多一點可能，但也會更耗力。'},
      {id:'ai',eyebrow:'效率升級',title:'讓 AI 幫你放大',body:'增加產能與節奏，但也會有新的月費壓力。'},
      {id:'borrow',eyebrow:'向未來借時間',title:'先補缺口',body:'先把這個月撐過去，但後面的壓力會跟上來。'}
    ],
    mentorTitle:'今天的貴人提醒',
    summaryTitle:'這一局，你看見了什麼？'
  },
  en: {
    landingTitle: 'Turn your cash-flow goal into a path you can play.',
    landingBody: 'Start with the cash you truly want each month, then explore a realistic income path. This is not a cold tool. It is a replayable business-life simulation.',
    start: 'Start this run',
    chooseLanguage: 'Choose language',
    chooseCountry: 'Choose your country context',
    chooseGoal: 'How much cash do you want to bring in every month?',
    goalBody: 'You do not need to explain your whole life first. Just choose the number you want to move toward.',
    chooseSituation: 'Where are you starting from?',
    choosePath: 'Which path do you want to try first?',
    nextMonth: 'Go to next month',
    playAgain: 'Play again',
    switchPath: 'Try another path',
    countries:[{id:'tw',title:'Taiwan',body:'Closer to your current life context and cash-flow reality.'},{id:'us',title:'United States',body:'Use US currency and business context for this run.'}],
    goals:{tw:['NT$30,000','NT$50,000','NT$100,000','NT$300,000'],us:['US$1,000','US$2,000','US$3,000','US$10,000']},
    situations:[
      {id:'stable',title:'Stable Start',body:'You still have some room to plan and test.',tag:'Some room'},
      {id:'pressure',title:'Pressure Start',body:'You need cash flow sooner, so your moves matter more.',tag:'Limited time'},
      {id:'debt',title:'Zero Cash / High Debt',body:'Right now, survival and stability come first.',tag:'Stabilize first'}
    ],
    paths:[
      {id:'opc',eyebrow:'Path 01',title:'One-Person Company',body:'Use skill, service, AI, and low overhead to build income steadily.',meta:'Good when you want to grow through capability and leverage.'},
      {id:'smallbiz',eyebrow:'Path 02',title:'Small Business',body:'Use products, stalls, local selling, or small trade to create cash flow.',meta:'Can create cash faster, but margin and consistency matter more.'},
      {id:'asset',eyebrow:'Path 03',title:'Asset Path',body:'Use rental logic, leasing, or asset allocation to shape another cash rhythm.',meta:'Can feel heavier up front, but may fit long-term stability better.'},
      {id:'mixed',eyebrow:'Path 04',title:'Mixed Path',body:'Combine more than one route so one weak path does not break the whole run.',meta:'Flexible, but requires more judgment and pacing.'}
    ],
    monthIntro:'You do not need to solve everything at once. Just steady this month first.',
    bars:['Clarity','Stability','Confidence'],
    decisionTitle:'This month, which card do you want to play?',
    actions:[
      {id:'lean',eyebrow:'Hold the ground',title:'Protect cash flow',body:'Reduce unnecessary pressure and stay in the game first.'},
      {id:'exposure',eyebrow:'Make a move',title:'Create more chances',body:'More exposure may create more income, but it also costs energy.'},
      {id:'ai',eyebrow:'Upgrade efficiency',title:'Let AI amplify you',body:'Increase pace and output, but add a recurring cost.'},
      {id:'borrow',eyebrow:'Borrow time from the future',title:'Patch the gap first',body:'You may survive this month, but pressure can return later.'}
    ],
    mentorTitle:'Mentor note',
    summaryTitle:'What did this run reveal?'
  }
};
