window.GAME_DATA = {
  introZh: '你不是在填資料，你正在開始一局。先選你的現金目標，再選一條你走得動的路。',
  cashTargets: [
    { id:'30k', label:'NT$30,000', desc:'先穩住生活節奏。', goal:30000 },
    { id:'50k', label:'NT$50,000', desc:'開始有基本安全感。', goal:50000 },
    { id:'100k', label:'NT$100,000', desc:'進入成長與選擇期。', goal:100000 },
    { id:'300k', label:'NT$300,000', desc:'高目標，需要更強槓桿。', goal:300000 }
  ],
  situations: [
    { id:'stable', title:'一般起步', desc:'你還有一些空間，可以先看清方向。', cash:20000, confidence:58, stability:56 },
    { id:'pressure', title:'壓力起步', desc:'你需要比較快補到現金流。', cash:10000, confidence:46, stability:38 },
    { id:'debt', title:'零現金 / 高負債', desc:'先活下來，再慢慢重建。', cash:3000, confidence:36, stability:24 }
  ],
  paths: [
    { id:'solo', title:'一人公司', icon:'🧠', tag:'低成本上手', desc:'用技能、服務、AI 與低成本模式建立收入。' },
    { id:'smallbiz', title:'小生意', icon:'🛍️', tag:'直接做生意', desc:'用商品、擺攤、販售或在地經營去換現金流。' },
    { id:'asset', title:'資產型', icon:'🏠', tag:'偏資產路線', desc:'從租賃、房產、設備或收租思維開始布局。' },
    { id:'mixed', title:'混合型', icon:'🧩', tag:'分散風險', desc:'把勞動、小生意與資產思維混搭，降低風險。' }
  ],
  months: [
    {
      title:'第 1 月：先活下來，還是先衝一波？',
      advisor:'先別急著找完美答案，先選一個你這個月走得動的做法。',
      choices:[
        { title:'先守住現金', text:'保住手上資源，少犯錯。', effect:{cash:+12000, stability:+10, confidence:+6, clarity:+8}, result:'你先保住了現金與節奏，雖然還沒爆發，但壓力沒有繼續惡化。', lesson:'你學到：穩住現金流，常常比表面成長更重要。' },
        { title:'試一次主動出擊', text:'多曝光、多接觸，換更大可能。', effect:{cash:+18000, stability:-2, confidence:+10, clarity:+5}, result:'你拿到了一些新機會，但節奏也開始變得比較緊。', lesson:'你學到：成長可以更快，但不一定更穩。' },
        { title:'借時間換空間', text:'先借一點，補眼前缺口。', effect:{cash:+24000, stability:-8, confidence:+4, clarity:+7}, result:'你暫時補上了現金缺口，但後面的壓力也開始跟上來。', lesson:'你學到：借款能救急，但不是免費的時間。' }
      ]
    },
    {
      title:'第 2 月：你要更聚焦，還是更分散？',
      advisor:'現在開始，你的每個選擇都會決定這條路是越來越穩，還是越來越忙。',
      choices:[
        { title:'聚焦一條主路', text:'把力氣集中到最可能的地方。', effect:{cash:+18000, stability:+12, confidence:+8, clarity:+10}, result:'你開始看出哪一條路真的能帶來現金，雜訊變少了。', lesson:'你學到：不是做越多越好，而是做更準。' },
        { title:'什麼都試一點', text:'用更多方式碰碰運氣。', effect:{cash:+8000, stability:-4, confidence:+2, clarity:-2}, result:'你感覺很忙，但真正有效的結果沒有想像中多。', lesson:'你學到：分散嘗試可以找方向，但太散也會讓現金變慢。' },
        { title:'用 AI 放大自己', text:'花月費換更高產能。', effect:{cash:+15000, stability:+4, confidence:+10, clarity:+8}, result:'你多了一點效率，也看到一人模式的槓桿開始出現。', lesson:'你學到：工具不是魔法，但可以讓你少走很多重複路。' }
      ]
    },
    {
      title:'第 3 月：現在要衝刺，還是先穩穩收？',
      advisor:'這個月不是看你多拼，而是看你有沒有用對方式接近自己的目標。',
      choices:[
        { title:'提高單位價值', text:'不要只追求量，先讓每單更值錢。', effect:{cash:+22000, stability:+8, confidence:+12, clarity:+10}, result:'你的收入品質開始變好，壓力沒有跟著等比例增加。', lesson:'你學到：高目標常常不是靠更忙，而是靠更高價值。' },
        { title:'拼命放大量', text:'衝訂單、衝曝光、衝更多。', effect:{cash:+26000, stability:-10, confidence:+6, clarity:+2}, result:'你衝出了一波數字，但身體與現金節奏都開始變緊。', lesson:'你學到：放大量能帶來成長，但如果結構不穩，壓力會一起放大。' },
        { title:'先守住可持續', text:'保留餘裕，避免下月崩盤。', effect:{cash:+14000, stability:+14, confidence:+8, clarity:+8}, result:'雖然沒有衝很高，但你把這條路變得更能走下去。', lesson:'你學到：真正的進步，是下個月你還走得動。' }
      ]
    }
  ]
};
