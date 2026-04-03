window.GAME_DATA = {
  zh: {
    topSubtitle: '像遊戲一樣學現金流',
    landing: {
      kicker: '第 0 回合｜你的現金流之路',
      title: '不是填問卷，\n而是開始這一局。',
      copy: '先選你每月想拿到多少現金，再走進一條收入路徑。每一回合，你都會更懂自己離目標有多遠。',
      note: '你的 AI 顧問不會打擊你。它會像一位支持型天使投資人，陪你把一局一局走穩。',
      start: '開始這一局'
    },
    cashGoal: {
      title: '先定這一局的現金目標',
      copy: '不用先解釋人生。我們先從你每個月真正想拿到的現金開始。',
      options: [
        { value: 30000, label: 'NT$30,000', tag: '先穩住' },
        { value: 50000, label: 'NT$50,000', tag: '開始拉高' },
        { value: 100000, label: 'NT$100,000', tag: '有企圖心' },
        { value: 300000, label: 'NT$300,000', tag: '高目標路線' }
      ],
      cta: '下一步：選你的起點'
    },
    starts: {
      title: '你現在站在哪個起點？',
      copy: '這不是評分，而是這一局的開場條件。',
      options: [
        { key:'stable', icon:'🌤️', title:'一般起步', desc:'你還有一些空間可以規劃，不需要每一步都太急。', tag:'空間較大' },
        { key:'pressure', icon:'⏳', title:'壓力起步', desc:'你需要比較快補到現金流，節奏會更緊。', tag:'需要快一點' },
        { key:'debt', icon:'🧱', title:'零現金 / 高負債', desc:'你必須先活下來，先守，再找翻身的路。', tag:'高壓局' }
      ],
      cta: '下一步：選你的第一條路'
    },
    paths: {
      title: '你的第一條路',
      copy: '沒有完美答案，只有更適合這一局的起手式。',
      options: [
        { key:'opc', icon:'🧠', title:'一人公司', desc:'用技能、服務、AI 與低成本模式建立收入。', tag:'低成本上手' },
        { key:'smallbiz', icon:'🛍️', title:'小生意', desc:'用商品、攤販、販售或在地經營去換現金流。', tag:'直接做生意' },
        { key:'asset', icon:'🏠', title:'資產型', desc:'從租賃、房產、設備或收租思維開始布局。', tag:'偏資產路線' },
        { key:'mixed', icon:'🧩', title:'混合型', desc:'把勞動、小生意與資產思維混搭，降低風險。', tag:'多路並行' }
      ],
      cta: '進入第 1 個月'
    },
    months: [
      {
        badge: '第 1 個月',
        title: '你剛開局，現金還不夠，這個月先守還是先攻？',
        copy: '你的目標很明確，但現在每一步都會影響接下來的節奏。先把這個月走穩。',
        visualTitle: '本月局勢',
        visualCopy: '你手上時間有限，壓力在後面推。先決定你要保現金，還是換取更多機會。',
        choices: [
          { key:'steady', title:'先守住現金', desc:'縮小支出，保住節奏。', effects:{cash:+8000, confidence:+8, clarity:+6, stability:+10}, result:'你先把腳站穩了。這個選擇不華麗，但它保住了你的下一步。'},
          { key:'exposure', title:'主動增加曝光', desc:'多一些接觸機會，也多一些消耗。', effects:{cash:+14000, confidence:+6, clarity:+4, stability:-4}, result:'你爭取到更多可能，但壓力也變得更真實了。'},
          { key:'ai', title:'導入 AI 工具', desc:'用月費換效率，先試試槓桿。', effects:{cash:+10000, confidence:+9, clarity:+8, stability:+2}, result:'工具開始替你省時間，你看見了更有槓桿的路。'}
        ],
        npc: '先穩住，不代表退步。很多局，就是贏在第一個月沒有亂。'
      },
      {
        badge: '第 2 個月',
        title: '機會來了，但你要衝收入，還是先顧回收速度？',
        copy: '這個月不是沒有機會，而是你要決定：要更多表面成長，還是更穩的現金回來。',
        visualTitle: '本月局勢',
        visualCopy: '有人開始注意到你，但真正重要的是：錢回得夠不夠快。',
        choices: [
          { key:'raise', title:'提高單位收入', desc:'少做一點，但每次更值錢。', effects:{cash:+16000, confidence:+10, clarity:+7, stability:+4}, result:'你開始不是只靠更累，而是靠更高價值前進。'},
          { key:'cheap', title:'先搶量再說', desc:'看起來有成長，但後面壓力會跟上。', effects:{cash:+12000, confidence:+4, clarity:+2, stability:-8}, result:'你拿到了一些量，但這條路也更考驗耐力。'},
          { key:'outsource', title:'找外援分工', desc:'用少量支出換取更穩的產能。', effects:{cash:+15000, confidence:+8, clarity:+6, stability:+6}, result:'你開始把時間從混亂裡救回來了。'}
        ],
        npc: '收入不是只看多不多，也看回得快不快。你現在開始摸到門了。'
      },
      {
        badge: '第 3 個月',
        title: '你要借時間，還是守住自由？',
        copy: '這個月你可以用資金換速度，但未來的壓力也會一起被打開。',
        visualTitle: '本月局勢',
        visualCopy: '你前兩個月已經看見一些可能，現在要決定是否加槓桿。',
        choices: [
          { key:'loan', title:'借一點資金換速度', desc:'補眼前缺口，但後面會更重。', effects:{cash:+22000, confidence:+7, clarity:+8, stability:-6}, result:'你換來了更大的動能，但也把未來的壓力往前拉近。'},
          { key:'lean', title:'不借，先守穩', desc:'走慢一點，但更輕。', effects:{cash:+13000, confidence:+9, clarity:+8, stability:+10}, result:'你保住了自由度，也讓這條路更穩。'},
          { key:'pivot', title:'微調路徑再上', desc:'試著換一種更適合你的走法。', effects:{cash:+18000, confidence:+12, clarity:+12, stability:+4}, result:'你不是重來，而是在更聰明地重新站位。'}
        ],
        npc: '會走得遠的人，不一定最猛，而是知道什麼時候該借力，什麼時候該守。'
      }
    ],
    labels: {
      cashGoal: '每月目標', actualCash: '目前現金', gap: '差距', clarity: '清晰度', stability: '穩定度', confidence: '信心度',
      next: '進入下一個月', finish: '看這一局的結果', replay: '再玩一局', changePath: '換條路重開'
    },
    summary: {
      title: '這一局的結果',
      copy: '先不要急著評價自己。我們先看，這一局教會了你什麼。',
      mentorTitle: 'AI 貴人短評',
      mentor: '你不是在填表，你正在練一種真實世界裡很少有人會先練過的能力：在壓力下做現金流決策。',
      closer: '你開始比較接近自己的目標了。',
      stillFar: '你離目標還有距離，但方向開始變清楚了。',
      bestPath: '目前看起來最適合你的節奏',
      lesson: '這一局你學到的一件事',
      company: '你的公司狀態',
      stateGood: '比剛開始更穩',
      stateTense: '還在壓力裡，但看見路了'
    }
  },
  en: {
    topSubtitle: 'Learn cash flow like a game',
    landing: {
      kicker: 'Turn 0 | Your cash-flow journey',
      title: 'This is not a form.\nThis is your first run.',
      copy: 'Pick the monthly cash you want, then step into an income path. Every turn helps you understand how close—or far—you really are.',
      note: 'Your AI guide will not shame you. It acts like a supportive angel investor and helps you steady your next move.',
      start: 'Start this run'
    },
    cashGoal: {
      title: 'Set the cash goal for this run',
      copy: 'You do not need to explain your life first. Start with the cash you truly want to bring in each month.',
      options: [
        { value: 1000, label: 'US$1,000', tag: 'Stabilize first' },
        { value: 2000, label: 'US$2,000', tag: 'Start building' },
        { value: 3000, label: 'US$3,000', tag: 'Push higher' },
        { value: 10000, label: 'US$10,000', tag: 'Ambitious path' }
      ],
      cta: 'Next: choose your starting point'
    },
    starts: {
      title: 'Where are you starting from?',
      copy: 'This is not a judgment. It only sets the opening conditions of this run.',
      options: [
        { key:'stable', icon:'🌤️', title:'Stable Start', desc:'You still have some room to plan before pressure gets too loud.', tag:'More room' },
        { key:'pressure', icon:'⏳', title:'Pressure Start', desc:'You need cash flow sooner, so each turn matters more.', tag:'Move faster' },
        { key:'debt', icon:'🧱', title:'Zero Cash / High Debt', desc:'You need to survive carefully before you can rebuild upward.', tag:'High-pressure mode' }
      ],
      cta: 'Next: choose your first path'
    },
    paths: {
      title: 'Choose your first path',
      copy: 'There is no perfect answer. Only a better opening move for this run.',
      options: [
        { key:'opc', icon:'🧠', title:'One-Person Company', desc:'Build income through skills, service, AI, and low-overhead work.', tag:'Lean start' },
        { key:'smallbiz', icon:'🛍️', title:'Small Business', desc:'Use products, selling, stalls, or local business to create cash flow.', tag:'Direct business path' },
        { key:'asset', icon:'🏠', title:'Asset Path', desc:'Think through rentals, property logic, or asset-based cash flow.', tag:'Asset-minded path' },
        { key:'mixed', icon:'🧩', title:'Mixed Path', desc:'Blend multiple approaches to reduce risk and increase resilience.', tag:'Multi-path strategy' }
      ],
      cta: 'Enter Month 1'
    },
    months: [
      {
        badge: 'Month 1',
        title: 'Cash is still tight. Do you protect this month, or push for momentum?',
        copy: 'Your goal is clear, but your rhythm still depends on the choices you make right now.',
        visualTitle: 'This month',
        visualCopy: 'Time is limited and pressure is already in the room. Decide whether to protect cash or buy more opportunity.',
        choices: [
          { key:'steady', title:'Protect cash first', desc:'Reduce pressure and keep your footing.', effects:{cash:+250, confidence:+8, clarity:+6, stability:+10}, result:'You chose stability over noise. It is not flashy, but it protected your next move.'},
          { key:'exposure', title:'Push visibility', desc:'More opportunities, but also more pressure.', effects:{cash:+420, confidence:+6, clarity:+4, stability:-4}, result:'You created more possibility, but the pressure around you became more real too.'},
          { key:'ai', title:'Use AI leverage', desc:'Spend a bit now to save time later.', effects:{cash:+320, confidence:+9, clarity:+8, stability:+2}, result:'The tool started buying back some of your time. You are beginning to see leverage.'}
        ],
        npc: 'Staying alive is not small thinking. Many runs are saved in Month 1.'
      },
      {
        badge: 'Month 2',
        title: 'A new opportunity appears. Do you chase scale, or strengthen how cash comes back?',
        copy: 'This month is not short on possibility. The real question is whether your money returns fast enough.',
        visualTitle: 'This month',
        visualCopy: 'People are starting to notice what you do. The question now is whether that attention becomes usable cash.',
        choices: [
          { key:'raise', title:'Raise unit income', desc:'Do less, but make each move worth more.', effects:{cash:+520, confidence:+10, clarity:+7, stability:+4}, result:'You moved from hustle to value. That shift matters.'},
          { key:'cheap', title:'Grab volume first', desc:'Looks bigger, but comes with future strain.', effects:{cash:+380, confidence:+4, clarity:+2, stability:-8}, result:'You got more movement, but the path became harder to carry.'},
          { key:'outsource', title:'Use outside help', desc:'Spend a little to gain steadier output.', effects:{cash:+460, confidence:+8, clarity:+6, stability:+6}, result:'You started rescuing your time from chaos. That changes the game.'}
        ],
        npc: 'Revenue is one thing. How quickly money comes back is another. You are starting to feel that difference.'
      },
      {
        badge: 'Month 3',
        title: 'Do you borrow time, or protect your freedom?',
        copy: 'You can use money to create speed now—but pressure will arrive earlier too.',
        visualTitle: 'This month',
        visualCopy: 'You now see a few possible paths. The question is whether you want to add leverage or keep the run lighter.',
        choices: [
          { key:'loan', title:'Borrow for speed', desc:'Fill the short-term gap, but create future weight.', effects:{cash:+700, confidence:+7, clarity:+8, stability:-6}, result:'You bought yourself momentum, but you also invited future pressure closer.'},
          { key:'lean', title:'Stay lean and free', desc:'Slower, but lighter.', effects:{cash:+340, confidence:+9, clarity:+8, stability:+10}, result:'You protected your freedom. This run became steadier, even if slower.'},
          { key:'pivot', title:'Adjust the path', desc:'Shift before pressure becomes identity.', effects:{cash:+560, confidence:+12, clarity:+12, stability:+4}, result:'You did not restart. You repositioned with more wisdom.'}
        ],
        npc: 'People who go far are not always the boldest. Often they simply know when to borrow—and when to stay light.'
      }
    ],
    labels: {
      cashGoal: 'Monthly goal', actualCash: 'Current cash', gap: 'Gap', clarity: 'Clarity', stability: 'Stability', confidence: 'Confidence',
      next: 'Go to next month', finish: 'See the result of this run', replay: 'Play again', changePath: 'Restart with another path'
    },
    summary: {
      title: 'The result of this run',
      copy: 'Do not judge yourself too quickly. First, look at what this run taught you.',
      mentorTitle: 'AI mentor note',
      mentor: 'You are not filling out a form. You are practicing a skill most people never practice before real life forces them to: making cash-flow decisions under pressure.',
      closer: 'You are getting closer to your goal.',
      stillFar: 'You still have distance to cover, but your direction is becoming clearer.',
      bestPath: 'The pace that currently fits you best',
      lesson: 'One lesson this run taught you',
      company: 'Your company state',
      stateGood: 'More stable than where you started',
      stateTense: 'Still under pressure, but no longer blind'
    }
  }
};
