
window.GAME = {
  targets: [
    {value:30000,label:"NT$30,000",desc:"先補到安全線"},
    {value:50000,label:"NT$50,000",desc:"先恢復基本掌控感"},
    {value:80000,label:"NT$80,000",desc:"開始往上拉收入"},
    {value:100000,label:"NT$100,000",desc:"挑戰高一級現金流"}
  ],
  roles: [
    {id:"white",title:"白領失業者",badge:"技能型",desc:"你原本有一份工作，現在收入中斷，想把技能重新變成現金流。",icon:"💼",base:{cash:20000,pressure:46,stability:50,confidence:45}},
    {id:"blue",title:"藍領失業者",badge:"行動型",desc:"你要的不是空話，是一條能在現實裡先補現金、先站穩的路。",icon:"🛠️",base:{cash:18000,pressure:52,stability:46,confidence:43}},
    {id:"side",title:"想兼差的人",badge:"保守起步",desc:"你還有工作，但你知道不能只靠一份收入，想先低風險開始。",icon:"🌙",base:{cash:26000,pressure:34,stability:55,confidence:52}}
  ],
  paths: [
    {id:"solo",title:"一人公司路",badge:"技能 / 服務 / AI",desc:"用技能、服務、AI 工具開始放大。",emoji:"🧠"},
    {id:"smallbiz",title:"小生意路",badge:"小量販售 / 低資本測試",desc:"從小量販售與低資本測試開始。",emoji:"🛍️"}
  ],
  routes: {
    solo: {
      months: [
        {title:"第 1 月｜先補現金，還是先拉高單價？",situation:"你接到一個熟人介紹的小案子。錢不多，但很快能進帳。你也知道，如果一直做低價案，很難把每月現金流拉到目標。",mentor:"先不要找最完美的答案。先找一條今天走得動、明天也走得下去的路。",choices:[
          {title:"先接低價案", tag:"快進帳", copy:"這個月比較快有錢，但你會更忙，下個月可能還是得繼續接低價工作。", meters:["現金 +12,000","壓力 +10","穩定 -5"], resultTitle:"你先補到了現金，但把自己塞得更滿。", resultText:"這不是錯，但如果一直只靠低價案，你會很忙，卻很難真的接近更高的現金流。", lesson:"低價忙碌，不一定能把你帶到更高的現金流。", delta:{cash:12000,pressure:10,stability:-5,confidence:-2}},
          {title:"直接整理高價服務", tag:"賭未來", copy:"本月現金壓力更大，但有機會替下個月的高價收入打底。", meters:["現金 +3,000","壓力 +15","信心 -1"], resultTitle:"方向是對的，但這個月會比較辛苦。", resultText:"如果完全不看現金壓力，太早只追高價，可能先被現實壓垮。", lesson:"對的方向，也要配合活得下去的節奏。", delta:{cash:3000,pressure:15,stability:-8,confidence:-1}},
          {title:"邊接邊升級", tag:"最穩", copy:"補一點現金，同時保留升級空間。這樣會累一些，但結構比較平衡。", meters:["現金 +8,000","壓力 +6","穩定 +4"], resultTitle:"你沒有只顧今天，也沒有忽略明天。", resultText:"這是一個比較成熟的平衡。你先補現金，也開始替未來拉高收入品質。", lesson:"先補現金，再慢慢升級，往往比只拚短期或只拚理想更穩。", delta:{cash:8000,pressure:6,stability:4,confidence:8}}
        ]},
        {title:"第 2 月｜借一口氣，還是先把洞補起來？",situation:"這個月你發現一件事：即使收入比上月好一點，固定支出還是很重。你可以借一筆小額資金先撐住，也可以先縮小不必要支出。",mentor:"現在最怕的不是窮，而是把壓力一路往後踢，最後一起爆。",choices:[
          {title:"先借一口氣", tag:"先喘一下", copy:"現在壓力小一點，但下月開始會有利息與還款壓力。", meters:["現金 +15,000","本月壓力 -5","下月壓力 +12"], resultTitle:"你暫時解決了眼前問題。", resultText:"但你不是沒事了，而是把一部分壓力往後移了。", lesson:"借款能救急，但不能取代穩定的收入結構。", delta:{cash:15000,pressure:-5,stability:-4,confidence:-1}},
          {title:"先縮支出", tag:"結構調整", copy:"本月會比較辛苦，但之後結構會更輕。", meters:["現金 +2,000","壓力 +8","穩定 +10"], resultTitle:"你選擇先把洞補起來。", resultText:"很多人只想補錢，卻忘了先把固定支出壓回到自己扛得住的範圍。", lesson:"縮小固定支出，往往比假裝成長更重要。", delta:{cash:2000,pressure:8,stability:10,confidence:4}},
          {title:"借一點、縮一點", tag:"平衡", copy:"有一點喘息空間，也不會把未來壓力拉太高。", meters:["現金 +9,000","壓力 +1","穩定 +9"], resultTitle:"你不是在撐一時，而是在讓未來更可管理。", resultText:"這種做法不華麗，但通常比較能走得久。", lesson:"現金缺口的處理，重點不是撐一時，而是讓未來更可管理。", delta:{cash:9000,pressure:1,stability:9,confidence:8}}
        ]},
        {title:"第 3 月｜自己更忙，還是開始做槓桿？",situation:"你開始發現，光靠自己做事，收入上升速度很有限。你可以自己再接更多工作，也可以開始用 AI 工具整理流程、提速、提高產能。",mentor:"如果每一次成長都只能靠你更累，這條路很快就會卡住。這一關看的是槓桿。",choices:[
          {title:"自己再接更多工作", tag:"硬撐上去", copy:"本月可能多一點錢，但時間與壓力會快速升高。", meters:["現金 +10,000","壓力 +15","穩定 -6"], resultTitle:"你換到了一點現金，但也把自己塞滿了。", resultText:"如果每次成長都只能靠你更累，這條路很快就會卡住。", lesson:"把自己塞滿，不等於建立了可持續的收入模式。", delta:{cash:10000,pressure:15,stability:-6,confidence:-3}},
          {title:"導入 AI 工具", tag:"開始做槓桿", copy:"本月要先付月費，但未來產能可能提高。", meters:["現金 +6,000","成本 +2,000","穩定 +8"], resultTitle:"你不是只追眼前收入，而是在替未來多留一點空間。", resultText:"這樣的選擇，會慢慢把你從『靠自己撐』帶向『有槓桿的成長』。", lesson:"AI 不是魔法，但它可以幫你把時間型收入，慢慢轉成更有效率的模式。", delta:{cash:6000,pressure:0,stability:8,confidence:10}},
          {title:"先維持現狀", tag:"暫時不動", copy:"壓力不會突然升高，但成長速度有限。", meters:["現金 +3,000","壓力 +0","穩定 +2"], resultTitle:"你先穩住了，但也暫時停住了。", resultText:"穩住沒有錯，只是如果一直不升級，你會發現自己離目標還是很遠。", lesson:"穩住很重要，但穩住之後，還是要找能放大收入的方法。", delta:{cash:3000,pressure:0,stability:2,confidence:-1}}
        ]}
      ],
      summary:{title:"你開始看懂，一人公司不是靠更忙，而是靠更好的結構。", learns:["低價忙碌，不一定能把你帶到更高的現金流","借款能救急，但不能取代收入結構","AI 與流程工具，能幫你從拼命型收入走向更有槓桿的模式"], next:"下一輪可以試著把目標提高或降低一級，再比較不同策略。"}
    },
    smallbiz: {
      months: [
        {title:"第 1 月｜先少量試賣，還是直接壓量？",situation:"你找到一個小商品方向。可能是社區販售、小零售、簡單商品或小型攤位。你現在要決定：先大量壓貨，還是先少量試賣。",mentor:"小生意最常見的錯，不是做得不夠努力，而是還沒站穩，就先把錢壓進錯的地方。",choices:[
          {title:"直接壓量", tag:"壓貨", copy:"看起來比較有規模，但會先壓住現金。如果賣不動，壓力會很大。", meters:["現金 +10,000","壓力 +12","穩定 -6"], resultTitle:"你看起來像真的開跑了，但現金被卡住了。", resultText:"對小生意來說，太快壓貨，常常不是成長，而是先把現金鎖死。", lesson:"壓量不等於更穩，庫存有時候是壓力，不是資產。", delta:{cash:10000,pressure:12,stability:-6,confidence:-2}},
          {title:"少量試賣", tag:"最穩", copy:"起步比較慢，但風險低，可以先看市場反應。", meters:["現金 +6,000","壓力 +2","穩定 +8"], resultTitle:"你現在做的是試水溫，不是退縮。", resultText:"先知道什麼賣得動、什麼賣不動，比一開始看起來很熱鬧更重要。", lesson:"小生意起步最重要的，不是做很多，而是先確認賣得出去。", delta:{cash:6000,pressure:2,stability:8,confidence:6}},
          {title:"中間量測試", tag:"折衷", copy:"有一點量感，也有測市場空間，但還是要盯住現金。", meters:["現金 +8,000","壓力 +6","穩定 +4"], resultTitle:"你有一點規模感，但也多背了一些壓力。", resultText:"這不是錯，只是起步期最怕的，不是賣得慢，而是看不清什麼真的有效。", lesson:"起步期最怕的，不是慢，而是看不清什麼真的有效。", delta:{cash:8000,pressure:6,stability:4,confidence:3}}
        ]},
        {title:"第 2 月｜先衝曝光，還是先守毛利？",situation:"這個月開始有一些客人了，但你發現：如果一直用太便宜的價格去賣，看起來有訂單，實際上錢沒留下多少。",mentor:"很多人以為熱鬧就是成長。其實小生意最怕的是：很忙，卻沒有留下現金。",choices:[
          {title:"低價衝量", tag:"熱鬧路線", copy:"訂單可能變多，但每單留下的錢不多，容易越賣越累。", meters:["現金 +12,000","壓力 +10","穩定 -5"], resultTitle:"看起來比較熱鬧了，但你留不下太多空間。", resultText:"如果每單都只剩很薄的空間，長期下來，你會一直很忙，卻不一定更穩。", lesson:"營收變多，不代表現金流會變健康。", delta:{cash:12000,pressure:10,stability:-5,confidence:-1}},
          {title:"調高價格，保住毛利", tag:"守結構", copy:"訂單可能少一些，但每一單更健康，也比較能撐長期。", meters:["現金 +8,000","壓力 +2","穩定 +10"], resultTitle:"你沒有只追表面熱鬧，而是開始守住結構。", resultText:"小生意要走得久，重點不是賣最多，而是每一單有沒有留下空間。", lesson:"毛利率不只是數字，它決定你能不能活下去。", delta:{cash:8000,pressure:2,stability:10,confidence:8}},
          {title:"小活動但不亂砍價", tag:"成熟做法", copy:"有曝光，也有機會促進成交，同時不把價格結構打爛。", meters:["現金 +10,000","壓力 +3","穩定 +8"], resultTitle:"你有拉新客，也沒有把價格打壞。", resultText:"這樣的成長通常比較站得住，也比較接近可持續。", lesson:"曝光可以做，但不要用犧牲未來的方式換今天的熱鬧。", delta:{cash:10000,pressure:3,stability:8,confidence:8}}
        ]},
        {title:"第 3 月｜自己硬撐，還是開始做流程？",situation:"你開始有穩定一點的訂單了，但你發現如果所有事情都靠你自己做，你很快會卡住。",mentor:"小生意不是靠一口氣撐大，而是靠流程慢慢變穩。",choices:[
          {title:"自己全包", tag:"硬撐", copy:"本月成本最低，但你會很累，產能上限很快就到。", meters:["現金 +9,000","壓力 +15","穩定 -4"], resultTitle:"你省下了眼前的成本，也把自己推到極限。", resultText:"這條路可以撐一陣子，但很難撐出真正穩定的成長。", lesson:"自己全包能撐一陣子，但很難撐出真正穩定的成長。", delta:{cash:9000,pressure:15,stability:-4,confidence:-3}},
          {title:"做流程或工具", tag:"做系統", copy:"本月要先付一點成本，但下月效率會提高，你不會一直重工。", meters:["現金 +7,000","壓力 +0","穩定 +10"], resultTitle:"你這次不是只想多賣一點，而是開始建立能運作的系統。", resultText:"小生意從『手作苦撐』走向『比較穩的經營』，就是從這一步開始。", lesson:"流程和工具不只是花錢，它是在幫你買回未來的空間。", delta:{cash:7000,pressure:0,stability:10,confidence:10}},
          {title:"先找兼職幫忙", tag:"先放手", copy:"能減輕一點壓力，但人力成本增加，管理難度也開始出現。", meters:["現金 +6,000","壓力 +4","穩定 +5"], resultTitle:"你開始放手一部分，但也把複雜度一起拉高了。", resultText:"在流程還沒穩以前，太早加人，有時只是把混亂變成更貴的混亂。", lesson:"小生意先要有流程，再談放大，不然人力只會把問題放大。", delta:{cash:6000,pressure:4,stability:5,confidence:2}}
        ]}
      ],
      summary:{title:"你開始看懂，小生意真正難的，不是賣，而是把錢留下來。", learns:["先賣得出去，比一開始壓量更重要","營收增加，不代表毛利與現金流健康","流程與工具，是小生意從苦撐走向穩定的關鍵"], next:"下一輪可以保持同目標，改玩一人公司路，看看兩條路哪條更適合你。"}
    }
  }
};
