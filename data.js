window.GAME_DATA = {
  langs: {
    zh: {
      brandEyebrow: 'Cash Goal Game',
      introChapter: '第 0 回合',
      introTitle: '先定你的現金流目標，再開始這一局',
      introCopy: '這不是填表。這是一場把焦慮變成方向的模擬。你每做一次選擇，就會看見一條不同的路。',
      introStoryLabel: '今晚的起點',
      introStoryTitle: '你不是來證明自己，你是來找到能活下來、再慢慢變強的路。',
      introCta: '開始這一局',
      goalChapter: '第 1 步', goalTitle:'你每月想要多少現金流？', goalCopy:'先說出你真正想要的數字。系統會陪你測試：哪條路比較有機會靠近它。',
      continue:'繼續', situationChapter:'第 2 步', situationTitle:'你現在站在哪種起點？', situationCopy:'你不需要證明自己過得很好。只要選最接近現在的狀態。',
      pathChapter:'第 3 步', pathTitle:'這一局，你想先走哪條路？', pathCopy:'沒有完美路徑。我們先選一條，跑三個月，看它怎麼影響你的現金流。', startRun:'開始第 1 個月',
      targetLabel:'目標', cashLabel:'目前現金流', gapLabel:'差距', clarity:'清晰度', stability:'穩定度', confidence:'信心度',
      monthEventLabel:'本月事件', mentorLabel:'貴人提醒', lessonLabel:'這次你學到', summaryChapter:'本局總結', summaryTitle:'你已經比剛開始更懂了', bestPath:'目前最適合的路', mainPressure:'最大壓力點', nextStepLabel:'下一步', replay:'再玩一次', changePath:'換條路試試'
    },
    en: {
      brandEyebrow: 'Cash Goal Game',
      introChapter: 'Round 0', introTitle:'Set your cash goal, then start this run', introCopy:'This is not a form. It is a simulation that turns anxiety into direction. Every choice shows you a different path.', introStoryLabel:'Tonight\'s starting point', introStoryTitle:'You are not here to prove yourself. You are here to find a path that can keep you going and help you grow stronger.', introCta:'Start This Run',
      goalChapter:'Step 1', goalTitle:'How much cash do you want each month?', goalCopy:'Say the number honestly. We will test which path has a better chance of moving you closer.', continue:'Continue',
      situationChapter:'Step 2', situationTitle:'What kind of starting point are you in?', situationCopy:'You do not need to pretend things are easy. Just choose the one closest to your current reality.',
      pathChapter:'Step 3', pathTitle:'Which path do you want to try first?', pathCopy:'There is no perfect path. Pick one, run three months, and see how it changes your cash flow.', startRun:'Start Month 1',
      targetLabel:'Target', cashLabel:'Cash Now', gapLabel:'Gap', clarity:'Clarity', stability:'Stability', confidence:'Confidence', monthEventLabel:'This Month', mentorLabel:'Mentor Note', lessonLabel:'What You Learned', summaryChapter:'Run Summary', summaryTitle:'You understand more now', bestPath:'Best-fit path for now', mainPressure:'Main pressure point', nextStepLabel:'Next step', replay:'Play Again', changePath:'Try Another Path'
    }
  },
  goals: {
    zh: ['NT$30,000','NT$50,000','NT$100,000','NT$300,000'],
    en: ['US$1,000','US$2,000','US$3,000','US$10,000']
  },
  situations: [
    {id:'stable', title:{zh:'一般起步', en:'Stable Start'}, copy:{zh:'你還有一點規劃空間，可以慢慢試。', en:'You still have some room to plan and test.'}, tag:{zh:'壓力較低', en:'Lower pressure'}, stats:{cash:18, clarity:28, stability:32, confidence:30}},
    {id:'pressure', title:{zh:'壓力起步', en:'Pressure Start'}, copy:{zh:'你需要比較快補到現金流。', en:'You need cash flow sooner.'}, tag:{zh:'現金缺口明顯', en:'Cash gap visible'}, stats:{cash:10, clarity:24, stability:22, confidence:24}},
    {id:'debt', title:{zh:'零現金 / 高負債', en:'Zero Cash / High Debt'}, copy:{zh:'你必須小心生存，先穩住，再慢慢翻。', en:'You need to survive carefully, stabilize first, then rebuild.'}, tag:{zh:'高壓模式', en:'High-pressure mode'}, stats:{cash:5, clarity:20, stability:14, confidence:18}},
  ],
  paths: [
    {id:'opc', title:{zh:'一人公司', en:'One-Person Company'}, copy:{zh:'用技能、服務、AI 與低成本模式建立收入。', en:'Build income with skills, service, AI, and low-overhead work.'}, tag:{zh:'靈活、高可調', en:'Flexible, adjustable'}},
    {id:'smallbiz', title:{zh:'小生意', en:'Small Business'}, copy:{zh:'用商品、販售、攤販或社區型生意換現金流。', en:'Use products, selling, stalls, or local commerce to create cash flow.'}, tag:{zh:'有爆發也有壓力', en:'Upside with pressure'}},
    {id:'asset', title:{zh:'資產型', en:'Asset Path'}, copy:{zh:'透過租賃、資產配置與穩定現金流思維前進。', en:'Move through rental logic, asset thinking, and stable cash-flow ideas.'}, tag:{zh:'前期壓力高', en:'Heavier upfront load'}},
    {id:'mixed', title:{zh:'混合型', en:'Mixed Path'}, copy:{zh:'混合兩條以上路徑，降低單一路的風險。', en:'Combine more than one path to reduce dependence on a single route.'}, tag:{zh:'穩中求進', en:'Balanced growth'}},
  ],
  months: {
    opc:[
      {title:{zh:'你接到一個可能的案源，但時間有限。',en:'A possible client appears, but your time is limited.'}, copy:{zh:'你可以先保住節奏，也可以主動換更多機會。',en:'You can protect your rhythm or push harder for more opportunities.'}, options:[
        {title:{zh:'先保住現金流',en:'Protect cash flow first'}, copy:{zh:'維持精簡，不急著放大。',en:'Stay lean and avoid growing too fast.'}, effect:{cash:+12000, clarity:+8, stability:+10, confidence:+6}, mentor:{zh:'你先守住了節奏，這會讓後面的選擇更穩。',en:'You protected your rhythm first. That makes later choices steadier.'}, lesson:{zh:'先活下來，比看起來很忙更重要。',en:'Survival matters more than looking busy.'}},
        {title:{zh:'增加曝光搶機會',en:'Push visibility for more chances'}, copy:{zh:'可能有更多案子，也可能先增加消耗。',en:'You may get more work, but you also increase pressure.'}, effect:{cash:+18000, clarity:+4, stability:-4, confidence:+8}, mentor:{zh:'你主動出擊了，這帶來了機會，也帶來了壓力。',en:'You pushed forward. It created opportunity, but also pressure.'}, lesson:{zh:'收入成長和壓力上升，常常會一起來。',en:'Income growth and pressure often arrive together.'}},
      ]},
      {title:{zh:'你開始覺得時間不夠，要不要用 AI 幫你加速？',en:'Time is getting tight. Do you use AI to speed things up?'}, copy:{zh:'現在的問題不是只有收入，還有產能。',en:'The issue is not only income now. It is also capacity.'}, options:[
        {title:{zh:'導入 AI 工具',en:'Use AI tools'}, copy:{zh:'月費會增加，但你能多接一些。',en:'Monthly cost rises, but you can take on more.'}, effect:{cash:+16000, clarity:+8, stability:+2, confidence:+10}, mentor:{zh:'這是一個成熟的槓桿選擇，你不是硬撐，而是在放大自己。',en:'This is a mature leverage move. You are not just pushing harder; you are expanding yourself.'}, lesson:{zh:'AI 不只是省時間，它也可能改變你的產能上限。',en:'AI does more than save time. It can change your capacity ceiling.'}},
        {title:{zh:'先維持手動',en:'Stay manual for now'}, copy:{zh:'先少花錢，但產能會比較慢。',en:'Spend less now, but your capacity grows more slowly.'}, effect:{cash:+9000, clarity:+6, stability:+8, confidence:+4}, mentor:{zh:'你現在選擇保守，不代表退步，而是把風險留在可控範圍內。',en:'Choosing caution now is not a step back. It keeps risk manageable.'}, lesson:{zh:'不是每一個工具都要立刻買，先看節奏也很重要。',en:'Not every tool needs to be bought right away. Timing matters too.'}},
      ]},
      {title:{zh:'你已經有一點成果，現在要衝價格，還是穩穩做？',en:'You have some traction now. Do you raise price or stay steady?'}, copy:{zh:'你開始進入不是只靠努力，而是靠判斷的階段。',en:'You are moving from pure effort into judgment.'}, options:[
        {title:{zh:'提高價格',en:'Raise your price'}, copy:{zh:'單位收入會上升，但轉換可能會掉。',en:'Unit income rises, but conversion may drop.'}, effect:{cash:+22000, clarity:+10, stability:+2, confidence:+12}, mentor:{zh:'你開始往更高品質的收入靠近了，這是很重要的一步。',en:'You are moving toward higher-quality income. That is an important step.'}, lesson:{zh:'有時候不是做更多，而是讓每一單更有價值。',en:'Sometimes the answer is not doing more, but making each deal worth more.'}},
        {title:{zh:'先維持穩定',en:'Stay steady'}, copy:{zh:'現金流比較穩，但拉升速度有限。',en:'Cash flow stays steadier, but growth is slower.'}, effect:{cash:+14000, clarity:+8, stability:+10, confidence:+7}, mentor:{zh:'先站穩，本身就是很成熟的選擇。',en:'Standing steady first is already a mature choice.'}, lesson:{zh:'穩定也是一種成長，只是它沒有那麼吵。',en:'Stability is also growth. It is just quieter.'}},
      ]}
    ],
    smallbiz:[
      {title:{zh:'你找到一個不錯的販售點，但攤位成本不低。',en:'You found a promising selling spot, but the stall cost is not low.'}, copy:{zh:'你要先測試市場，還是直接押一次？',en:'Do you test lightly, or commit harder right away?'}, options:[
        {title:{zh:'小額試賣',en:'Test with a small setup'}, copy:{zh:'先看反應，保留現金。',en:'See the response first and keep cash safer.'}, effect:{cash:+9000, clarity:+10, stability:+8, confidence:+6}, mentor:{zh:'先試小一點，是很聰明的節奏。',en:'Starting smaller is a smart rhythm.'}, lesson:{zh:'先看市場，再放大，會比一開始就重壓更安全。',en:'Testing before scaling is safer than going all in too early.'}},
        {title:{zh:'直接加碼進貨',en:'Go bigger on inventory'}, copy:{zh:'如果賣得動，收入會漂亮；如果不動，壓力也會快。',en:'If sales move, income looks great. If not, pressure comes fast.'}, effect:{cash:+15000, clarity:+4, stability:-6, confidence:+10}, mentor:{zh:'你拿到了更大的可能，但也讓現金流更敏感了。',en:'You opened a bigger upside, but made cash flow more sensitive.'}, lesson:{zh:'小生意最大的朋友是周轉，最大的敵人也是周轉。',en:'In small business, turnover is both your best friend and your biggest enemy.'}},
      ]},
      {title:{zh:'有人建議你做促銷衝量。',en:'Someone suggests a promotion to boost volume.'}, copy:{zh:'你要衝數量，還是保毛利？',en:'Do you chase volume, or protect margin?'}, options:[
        {title:{zh:'做促銷衝量',en:'Run promotion for volume'}, copy:{zh:'量可能上來，但毛利會變薄。',en:'Volume may rise, but margin gets thinner.'}, effect:{cash:+12000, clarity:+8, stability:+2, confidence:+7}, mentor:{zh:'你換到了流量，但也要更小心每一單剩下多少。',en:'You bought traffic, but now each order matters even more.'}, lesson:{zh:'賣得快不一定賺得多。',en:'Selling faster does not always mean earning more.'}},
        {title:{zh:'保價格保毛利',en:'Protect price and margin'}, copy:{zh:'賣得慢一點，但每單比較健康。',en:'Sales may be slower, but each order is healthier.'}, effect:{cash:+10000, clarity:+10, stability:+8, confidence:+8}, mentor:{zh:'你選擇了比較健康的單位經濟，這很有價值。',en:'You chose healthier unit economics. That matters.'}, lesson:{zh:'毛利不是面子，它是你能不能撐下去的空間。',en:'Margin is not a vanity number. It is survival room.'}},
      ]},
      {title:{zh:'你開始忙不過來，要不要找幫手？',en:'Things are getting busy. Do you bring in help?'}, copy:{zh:'這會讓你更有產能，但每月壓力也會升高。',en:'Capacity rises, but so does monthly pressure.'}, options:[
        {title:{zh:'先找兼職幫手',en:'Hire part-time help'}, copy:{zh:'增加產能，但不要把固定成本拉太高。',en:'Add capacity without locking in too much fixed cost.'}, effect:{cash:+17000, clarity:+8, stability:+4, confidence:+10}, mentor:{zh:'你不是硬撐，而是在用比較穩的方式放大自己。',en:'You are not just grinding harder; you are scaling more carefully.'}, lesson:{zh:'請人不是只有薪水，真正重點是你有沒有撐起新的產能。',en:'Hiring is not just about salary. It is about whether you can support the new capacity.'}},
        {title:{zh:'先自己扛住',en:'Carry it yourself for now'}, copy:{zh:'少一筆成本，但會比較累。',en:'You save cost now, but the load stays on you.'}, effect:{cash:+11000, clarity:+7, stability:+6, confidence:+5}, mentor:{zh:'你先保住壓力邊界，這是可以理解的。',en:'You protected your pressure boundary first. That is understandable.'}, lesson:{zh:'產能不夠時，收入上限會先出現。',en:'When capacity is tight, income ceilings appear early.'}},
      ]}
    ],
    asset:[
      {title:{zh:'你看到一個租賃型機會，但前期壓力不小。',en:'You spot a rental-style opportunity, but the upfront pressure is real.'}, copy:{zh:'你要先觀察，還是試著卡位？',en:'Do you observe first, or try to secure the position?'}, options:[
        {title:{zh:'先小額試水',en:'Test with a smaller move'}, copy:{zh:'風險低一些，但速度也慢。',en:'Lower risk, slower momentum.'}, effect:{cash:+6000, clarity:+10, stability:+8, confidence:+5}, mentor:{zh:'資產路徑最怕的是衝太快，先看清楚是很成熟的做法。',en:'Asset paths are most dangerous when rushed. Seeing clearly first is mature.'}, lesson:{zh:'資產型現金流通常不是快，而是穩。',en:'Asset-based cash flow is usually not fast. It is steady.'}},
        {title:{zh:'借力進場',en:'Use leverage to enter'}, copy:{zh:'如果順，現金流會變好；如果不順，壓力會先來。',en:'If it works, cash flow improves; if not, pressure comes first.'}, effect:{cash:+14000, clarity:+4, stability:-8, confidence:+9}, mentor:{zh:'你打開了槓桿，也打開了更敏感的風險。',en:'You opened leverage, and with it, more fragile risk.'}, lesson:{zh:'借來的時間和借來的錢，最後都要還。',en:'Borrowed time and borrowed money both come due.'}},
      ]},
      {title:{zh:'市場開始有波動，你要穩住還是調整配置？',en:'The market starts moving. Do you stay steady or reallocate?'}, copy:{zh:'你現在要想的是韌性，不是刺激。',en:'This is about resilience now, not excitement.'}, options:[
        {title:{zh:'維持穩定配置',en:'Hold a steadier position'}, copy:{zh:'少一點驚喜，也少一點驚嚇。',en:'Fewer surprises, fewer shocks.'}, effect:{cash:+9000, clarity:+8, stability:+10, confidence:+6}, mentor:{zh:'你守住了穩定，這會讓你更有餘裕看下一步。',en:'You protected stability. That gives you more room for the next move.'}, lesson:{zh:'不是每一次波動都值得跟。',en:'Not every movement is worth chasing.'}},
        {title:{zh:'主動調整換收益',en:'Reallocate for higher return'}, copy:{zh:'可能拉高收益，也可能讓波動變大。',en:'It may lift return, but volatility can rise too.'}, effect:{cash:+12000, clarity:+6, stability:-4, confidence:+8}, mentor:{zh:'你選擇了更主動的配置，接下來要更看重風險管理。',en:'You chose a more active allocation. Risk control now matters more.'}, lesson:{zh:'收益和波動，通常不會分開來。',en:'Return and volatility rarely travel separately.'}},
      ]},
      {title:{zh:'你開始想：資產要當現金機器，還是當成長工具？',en:'You start asking: should the asset be a cash machine or a growth tool?'}, copy:{zh:'這會決定你接下來的節奏。',en:'That choice shapes your next rhythm.'}, options:[
        {title:{zh:'優先穩定現金流',en:'Prioritize steady cash flow'}, copy:{zh:'先讓現金流站穩。',en:'Get the cash flow standing first.'}, effect:{cash:+15000, clarity:+10, stability:+10, confidence:+10}, mentor:{zh:'你開始把資產當成支撐，而不是賭注。',en:'You are starting to treat the asset as support, not a bet.'}, lesson:{zh:'先穩，再談大，是資產路徑很重要的節奏。',en:'In asset paths, stability before scale is a very important rhythm.'}},
        {title:{zh:'優先追求成長',en:'Prioritize growth upside'}, copy:{zh:'未來可能更大，但眼前更不穩。',en:'Future upside may be larger, but the present gets less stable.'}, effect:{cash:+16000, clarity:+8, stability:-2, confidence:+12}, mentor:{zh:'你選擇了更大的可能，也要接受更長的不確定。',en:'You chose bigger upside, and with it, longer uncertainty.'}, lesson:{zh:'成長常常要先穿過一段不舒服的波動。',en:'Growth often requires moving through an uncomfortable stretch of volatility.'}},
      ]}
    ],
    mixed:[
      {title:{zh:'你決定不把希望壓在單一路上。',en:'You decide not to place all your hope on a single path.'}, copy:{zh:'混合型起步會比較忙，但抗風險比較好。',en:'A mixed path is busier at first, but often more resilient.'}, options:[
        {title:{zh:'主路 + 小副路',en:'One main path + one small side path'}, copy:{zh:'先穩主線，再給自己一個備援。',en:'Protect the main path and give yourself a backup.'}, effect:{cash:+13000, clarity:+9, stability:+9, confidence:+8}, mentor:{zh:'你不是貪多，而是在替自己減少脆弱性。',en:'You are not spreading too thin. You are reducing fragility.'}, lesson:{zh:'多一條路，不一定更亂，也可能更穩。',en:'One more path does not always mean more chaos. It can mean more stability.'}},
        {title:{zh:'同時拉兩條線',en:'Push two paths at once'}, copy:{zh:'如果撐得住，成長較快；如果撐不住，壓力也會疊。',en:'If you can handle it, growth speeds up. If not, pressure stacks.'}, effect:{cash:+19000, clarity:+4, stability:-6, confidence:+10}, mentor:{zh:'你打開了更多可能，但也讓節奏更緊。',en:'You opened more possibilities, but made your rhythm tighter.'}, lesson:{zh:'分散不代表輕鬆，分散也要有主次。',en:'Diversification is not automatically easy. It still needs priorities.'}},
      ]},
      {title:{zh:'你開始發現：切換太多，會讓自己分心。',en:'You begin to notice: too much switching can split your focus.'}, copy:{zh:'你要更聚焦，還是繼續多線發展？',en:'Do you focus harder, or keep multiple lines moving?'}, options:[
        {title:{zh:'收斂到最強主線',en:'Narrow down to the strongest main line'}, copy:{zh:'少一點雜訊，多一點可複製性。',en:'Less noise, more repeatability.'}, effect:{cash:+15000, clarity:+12, stability:+8, confidence:+9}, mentor:{zh:'聚焦不是縮小，而是把力量集中。',en:'Focus is not shrinking. It is concentration of force.'}, lesson:{zh:'一條跑得順的路，常常比三條半吊子的路更值錢。',en:'One path that runs well is often worth more than three half-built ones.'}},
        {title:{zh:'維持多線試探',en:'Keep testing multiple lines'}, copy:{zh:'保留彈性，但也增加管理難度。',en:'You keep flexibility, but make management harder.'}, effect:{cash:+11000, clarity:+6, stability:+2, confidence:+7}, mentor:{zh:'這讓你保留選擇，但接下來更需要節奏感。',en:'This keeps options open, but rhythm matters even more now.'}, lesson:{zh:'選擇變多時，管理自己的注意力會更重要。',en:'When choices multiply, managing your attention matters more.'}},
      ]},
      {title:{zh:'這一局的最後一個月，你要穩穩收尾，還是再推一次？',en:'In the final month of this run, do you close steady or push once more?'}, copy:{zh:'現在不是證明勇敢，而是看哪個節奏更適合你。',en:'This is not about proving courage. It is about finding your better rhythm.'}, options:[
        {title:{zh:'穩穩收尾',en:'Close with stability'}, copy:{zh:'把節奏站穩，為下一輪打底。',en:'Lock in rhythm and build a better base for the next run.'}, effect:{cash:+14000, clarity:+10, stability:+10, confidence:+8}, mentor:{zh:'你開始懂得，穩穩收尾也是一種很高級的能力。',en:'You are starting to understand that finishing steadily is a high-level skill.'}, lesson:{zh:'不是每一輪都要衝，會收也很重要。',en:'Not every round should be a push. Knowing how to land matters too.'}},
        {title:{zh:'再推一次',en:'Push one more time'}, copy:{zh:'可能拉高結果，也可能把壓力帶進下一輪。',en:'You may boost the outcome, or carry more pressure into the next run.'}, effect:{cash:+17000, clarity:+8, stability:-2, confidence:+10}, mentor:{zh:'你選擇再衝一次，這能帶來結果，也要記得顧好後勁。',en:'You chose one more push. It can create results, but you also need to protect your stamina.'}, lesson:{zh:'最後一把的判斷，會決定你是漂亮收尾，還是把壓力延後。',en:'How you play the last hand decides whether you finish strong or delay the pressure.'}},
      ]}
    ]
  }
};
