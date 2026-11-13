// Part 2 Quiz Data: destroy – moral
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 22-2 - destroy – moral",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "destroyed",
    "pos": "v.",
    "cn_def": "破壞；摧毀；毀滅",
    "en_def": "to damage something so severely that it no longer exists or functions",
    "sentence": "The historic city center was completely {{BLANK}} by the sudden outbreak of a devastating fire.",
    "cn": "這座歷史悠久的市中心被突如其來的毀滅性大火徹底摧毀了。"
  },
  {
    "word": "destruction",
    "pos": "n.",
    "cn_def": "破壞；毀滅",
    "en_def": "the action or process of causing so much damage that something is ruined",
    "sentence": "The violent Category 5 hurricane left a trail of widespread {{BLANK}} along the coastal towns.",
    "cn": "這場五級強烈颶風在沿海城鎮留下了一連串大規模破壞的痕跡。"
  },
  {
    "word": "destructive",
    "pos": "adj.",
    "cn_def": "破壞性的；毀滅性的",
    "en_def": "causing great and irreparable harm or damage",
    "sentence": "Engaging in prolonged negative self-talk is one of the most {{BLANK}} habits for mental health.",
    "cn": "長期進行負面的自我對話是對心理健康最具破壞性的習慣之一。"
  },
  {
    "word": "forever",
    "pos": "adv./n.",
    "cn_def": "永遠；長久地",
    "en_def": "for all future time; eternally; continually",
    "sentence": "The three university roommates made a solemn promise to remain best friends {{BLANK}}.",
    "cn": "這三位大學室友許下了莊嚴的承諾，要永遠當好朋友。"
  },
  {
    "word": "hasty",
    "pos": "adj.",
    "cn_def": "倉促的；草率的",
    "en_def": "done with excessive speed or urgency; hurried",
    "sentence": "You should carefully evaluate all potential investment risks before making a {{BLANK}} decision.",
    "cn": "在做出草率的決定之前，你應該仔細評估所有潛在的投資風險。"
  },
  {
    "word": "haste",
    "pos": "n.",
    "cn_def": "急忙；倉促",
    "en_def": "excessive speed or urgency of movement or action; hurry",
    "sentence": "My grandfather always reminded me that {{BLANK}} makes waste whenever I rushed through my homework.",
    "cn": "每當我匆忙趕做功課時，祖父總是提醒我欲速則不達。"
  },
  {
    "word": "hatch",
    "pos": "v./n.",
    "cn_def": "孵化；策劃(陰謀)；艙口",
    "en_def": "to emerge from an egg; to devise a secret plan; an opening or door",
    "sentence": "The excited children watched the baby chicks {{BLANK}} from their fragile shells in the incubator.",
    "cn": "興奮的孩子們看著小雞在孵化器中從脆弱的蛋殼中孵化出來。"
  },
  {
    "word": "hateful",
    "pos": "adj.",
    "cn_def": "可恨的；充滿仇恨的",
    "en_def": "arousing, deserving of, or filled with hatred",
    "sentence": "The moderator promptly removed the {{BLANK}} comments posted under the candidate's campaign video.",
    "cn": "管理員迅速刪除了候選人競選影片下方張貼的仇恨言論。"
  },
  {
    "word": "hay",
    "pos": "n.",
    "cn_def": "乾草",
    "en_def": "grass that has been mown and dried for use as animal fodder",
    "sentence": "After working twelve grueling hours in the fields, the tired farmer was ready to hit the {{BLANK}}.",
    "cn": "在田裡辛勞工作了十二個小時後，疲憊的農民準備好要上床睡覺了。"
  },
  {
    "word": "magical",
    "pos": "adj.",
    "cn_def": "神奇的；迷人的；魔幻的",
    "en_def": "relating to or resembling magic; enchanting and wonderful",
    "sentence": "Watching the northern lights dance across the Arctic night sky was an unforgettable and {{BLANK}} experience.",
    "cn": "看著北極光在北極夜空中舞動，是一次難忘且奇妙的體驗。"
  },
  {
    "word": "moral",
    "pos": "adj./n.",
    "cn_def": "道德的；寓意；道德規範",
    "en_def": "concerned with right and wrong conduct; a practical lesson taught by a story",
    "sentence": "The whistle-blower faced a severe {{BLANK}} dilemma between staying loyal to his boss and telling the truth.",
    "cn": "揭弊者面臨著在忠於老闆與講出真相之間的嚴峻道德兩難困境。"
  }
];

const MCQS = [
  {
    "q": "A devastating tsunami struck the coast and caused widespread ______ across several provinces.",
    "options": [
      "hay",
      "haste",
      "destruction",
      "moral"
    ],
    "answer": 2,
    "cn": "一場毀滅性的海嘯襲擊了海岸，在幾個省份造成了大規模的破壞。",
    "vocabIndex": 1
  },
  {
    "q": "The intense heat from the wildfire managed to ______ entire blocks of residential buildings.",
    "options": [
      "hatch",
      "make",
      "hit",
      "destroy"
    ],
    "answer": 3,
    "cn": "野火產生的高溫摧毀了數個街區的住宅建築。",
    "vocabIndex": 0
  },
  {
    "q": "Termites are notorious for their quiet yet extremely ______ impact on wooden architecture.",
    "options": [
      "destructive",
      "hasty",
      "hateful",
      "magical"
    ],
    "answer": 0,
    "cn": "白蟻以其對木造建築隱蔽卻極具破壞性的影響而惡名昭彰。",
    "vocabIndex": 2
  },
  {
    "q": "True friendship is a treasure that loyal friends hope will endure ______ without changing.",
    "options": [
      "destructively",
      "forever",
      "hastily",
      "morally"
    ],
    "answer": 1,
    "cn": "真正的友誼是一份珍寶，忠實的朋友希望它能永遠維持不變。",
    "vocabIndex": 3
  },
  {
    "q": "Rushing into marriage after only two weeks of dating was considered a very ______ decision by her family.",
    "options": [
      "moral",
      "magical",
      "hasty",
      "destructive"
    ],
    "answer": 2,
    "cn": "約會僅兩週就倉促結婚被她的家人視為一項非常草率的決定。",
    "vocabIndex": 4
  },
  {
    "q": "As the old proverb wisely advises, ______ makes waste, so you should double-check your calculations.",
    "options": [
      "moral",
      "haste",
      "hay",
      "destruction"
    ],
    "answer": 1,
    "cn": "正如古老諺語明智所勸告的，「欲速則不達」，所以你應該仔細檢查你的計算。",
    "vocabIndex": 5
  },
  {
    "q": "The conspirators met secretly in an abandoned warehouse to ______ a scheme to overthrow the regime.",
    "options": [
      "hatch",
      "destroy",
      "hay",
      "haste"
    ],
    "answer": 0,
    "cn": "陰謀策劃者在一座廢棄倉庫秘密會面，密謀推翻政權的計謀。",
    "vocabIndex": 6
  },
  {
    "q": "The platform strictly bans users who post ______ remarks directed against ethnic minority communities.",
    "options": [
      "moral",
      "hasty",
      "magical",
      "hateful"
    ],
    "answer": 3,
    "cn": "該平台嚴格禁止用戶發表針對少數民族社群的仇恨言論。",
    "vocabIndex": 7
  },
  {
    "q": "I am exhausted after cleaning the entire barn, so I think I will just hit the ______ early tonight.",
    "options": [
      "moral",
      "hay",
      "hatch",
      "haste"
    ],
    "answer": 1,
    "cn": "打掃完整個穀倉後我精疲力竭，所以我想今晚早點上床睡覺。",
    "vocabIndex": 8
  },
  {
    "q": "The glowing fireflies on the summer lake created an atmosphere that felt completely ______.",
    "options": [
      "destructive",
      "hateful",
      "magical",
      "hasty"
    ],
    "answer": 2,
    "cn": "夏日湖面上閃爍的螢火蟲營造出一種讓人感到完全魔幻神奇的氛圍。",
    "vocabIndex": 9
  },
  {
    "q": "A doctor often faces a difficult ______ obligation when deciding how to allocate limited ventilators.",
    "options": [
      "hasty",
      "magical",
      "hateful",
      "moral"
    ],
    "answer": 3,
    "cn": "醫生在決定如何分配有限的呼吸器時，往往面臨艱難的道德義務。",
    "vocabIndex": 10
  },
  {
    "q": "The fable of the tortoise and the hare teaches a valuable ______ about perseverance and humility.",
    "options": [
      "moral",
      "hatch",
      "hay",
      "haste"
    ],
    "answer": 0,
    "cn": "龜兔賽跑的寓言傳授了一個關於毅力與謙遜的寶貴寓意。",
    "vocabIndex": 10
  },
  {
    "q": "The explosion resulted in the complete ______ of the chemical processing facility.",
    "options": [
      "moral",
      "hay",
      "haste",
      "destruction"
    ],
    "answer": 3,
    "cn": "爆炸導致化學品加工設施被完全摧毀。",
    "vocabIndex": 1
  },
  {
    "q": "Spreading false rumors online can easily ______ a person's hard-earned professional reputation.",
    "options": [
      "destroy",
      "haste",
      "hit",
      "hatch"
    ],
    "answer": 0,
    "cn": "在網路上散布虛假謠言很容易摧毀一個人辛苦建立的專業聲譽。",
    "vocabIndex": 0
  },
  {
    "q": "The military deployed weapons that possessed unprecedented ______ capabilities.",
    "options": [
      "magical",
      "destructive",
      "hateful",
      "hasty"
    ],
    "answer": 1,
    "cn": "軍方部署了具備前所未見之破壞能力的武器。",
    "vocabIndex": 2
  },
  {
    "q": "It seemed to take ______ for the slow bus to arrive in the pouring rain.",
    "options": [
      "hastily",
      "morally",
      "forever",
      "destructively"
    ],
    "answer": 2,
    "cn": "在傾盆大雨中，慢吞吞的公車似乎花了很久的時間才到達。",
    "vocabIndex": 3
  },
  {
    "q": "In his ______ to finish the exam before the bell, Kevin failed to read the instructions carefully.",
    "options": [
      "moral",
      "hay",
      "destruction",
      "haste"
    ],
    "answer": 3,
    "cn": "在鐘響前急忙想完成考試的匆忙中，凱文未能仔細閱讀說明。",
    "vocabIndex": 5
  },
  {
    "q": "Scientists were thrilled when the rare bird's eggs began to ______ in the research sanctuary.",
    "options": [
      "hay",
      "destroy",
      "hatch",
      "haste"
    ],
    "answer": 2,
    "cn": "當這種稀有鳥類的蛋開始在研究保護區內孵化時，科學家們興奮不已。",
    "vocabIndex": 6
  },
  {
    "q": "The sailor quickly secured the cargo ______ before the stormy waves washed over the deck.",
    "options": [
      "hay",
      "hatch",
      "moral",
      "haste"
    ],
    "answer": 1,
    "cn": "在風暴巨浪沖刷甲板之前，水手迅速固定好了貨艙艙口。",
    "vocabIndex": 6
  },
  {
    "q": "We were deeply repulsed by the ______ remarks written across the entrance of the community hall.",
    "options": [
      "hateful",
      "magical",
      "hasty",
      "moral"
    ],
    "answer": 0,
    "cn": "我們對社區活動中心入口處所寫的仇恨言論感到極度厭惡。",
    "vocabIndex": 7
  },
  {
    "q": "The golden bales of dried ______ were neatly stacked inside the wooden barn for winter feed.",
    "options": [
      "moral",
      "hay",
      "haste",
      "hatch"
    ],
    "answer": 1,
    "cn": "一捆捆金黃色的乾草整齊地堆放在木製穀倉內作為冬季飼料。",
    "vocabIndex": 8
  },
  {
    "q": "Visiting the ancient castle shrouded in morning fog was an utterly ______ moment for the travelers.",
    "options": [
      "hasty",
      "hateful",
      "magical",
      "destructive"
    ],
    "answer": 2,
    "cn": "造訪籠罩在晨霧中的古老城堡對旅人們而言是一個極其奇妙神奇的時刻。",
    "vocabIndex": 9
  },
  {
    "q": "Cheating on the university entrance exam is considered deeply ______ and brings severe disciplinary action.",
    "options": [
      "immoral",
      "hateful",
      "hasty",
      "magical"
    ],
    "answer": 0,
    "cn": "在大學入學考試中作弊被認為是非常不道德的，並會招致嚴厲的紀律處分。"
  },
  {
    "q": "The investor regretted making a ______ choice without reading the comprehensive financial audit.",
    "options": [
      "magical",
      "moral",
      "destructive",
      "hasty"
    ],
    "answer": 3,
    "cn": "該投資人後悔在沒有閱讀綜合財務審計報告的情況下做出了草率的選擇。",
    "vocabIndex": 4
  },
  {
    "q": "They promised to cherish each other and stand by one another ______ through thick and thin.",
    "options": [
      "morally",
      "forever",
      "hastily",
      "destructively"
    ],
    "answer": 1,
    "cn": "他們承諾會彼此珍惜，無論順境逆境都永遠相伴守護。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "destroy": {
    "pos": "v.",
    "en_def": "to damage something so severely that it no longer exists or functions",
    "cn_def": "破壞；摧毀；毀滅",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to damage something so severely that it no longer exists or functions",
        "cn_def": "破壞；摧毀；毀滅"
      }
    ]
  },
  "destroyed": {
    "pos": "v.",
    "en_def": "to damage something so severely that it no longer exists or functions",
    "cn_def": "破壞；摧毀；毀滅",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to damage something so severely that it no longer exists or functions",
        "cn_def": "破壞；摧毀；毀滅"
      }
    ]
  },
  "destruction": {
    "pos": "n.",
    "en_def": "the action or process of causing so much damage that something is ruined",
    "cn_def": "破壞；毀滅",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of causing so much damage that something is ruined",
        "cn_def": "破壞；毀滅"
      }
    ]
  },
  "destructive": {
    "pos": "adj.",
    "en_def": "causing great and irreparable harm or damage",
    "cn_def": "破壞性的；毀滅性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing great and irreparable harm or damage",
        "cn_def": "破壞性的；毀滅性的"
      }
    ]
  },
  "forever": {
    "pos": "adv./n.",
    "en_def": "for all future time; eternally; continually",
    "cn_def": "永遠；長久地",
    "combined": [
      {
        "pos": "adv./n.",
        "en_def": "for all future time; eternally; continually",
        "cn_def": "永遠；長久地"
      }
    ]
  },
  "hasty": {
    "pos": "adj.",
    "en_def": "done with excessive speed or urgency; hurried",
    "cn_def": "倉促的；草率的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done with excessive speed or urgency; hurried",
        "cn_def": "倉促的；草率的"
      }
    ]
  },
  "haste": {
    "pos": "n.",
    "en_def": "excessive speed or urgency of movement or action; hurry",
    "cn_def": "急忙；倉促",
    "combined": [
      {
        "pos": "n.",
        "en_def": "excessive speed or urgency of movement or action; hurry",
        "cn_def": "急忙；倉促"
      }
    ]
  },
  "hatch": {
    "pos": "v./n.",
    "en_def": "to emerge from an egg; to devise a secret plan; an opening or door",
    "cn_def": "孵化；策劃(陰謀)；艙口",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to emerge from an egg; to devise a secret plan; an opening or door",
        "cn_def": "孵化；策劃(陰謀)；艙口"
      }
    ]
  },
  "hateful": {
    "pos": "adj.",
    "en_def": "arousing, deserving of, or filled with hatred",
    "cn_def": "可恨的；充滿仇恨的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "arousing, deserving of, or filled with hatred",
        "cn_def": "可恨的；充滿仇恨的"
      }
    ]
  },
  "hay": {
    "pos": "n.",
    "en_def": "grass that has been mown and dried for use as animal fodder",
    "cn_def": "乾草",
    "combined": [
      {
        "pos": "n.",
        "en_def": "grass that has been mown and dried for use as animal fodder",
        "cn_def": "乾草"
      }
    ]
  },
  "magical": {
    "pos": "adj.",
    "en_def": "relating to or resembling magic; enchanting and wonderful",
    "cn_def": "神奇的；迷人的；魔幻的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or resembling magic; enchanting and wonderful",
        "cn_def": "神奇的；迷人的；魔幻的"
      }
    ]
  },
  "moral": {
    "pos": "adj./n.",
    "en_def": "concerned with right and wrong conduct; a practical lesson taught by a story",
    "cn_def": "道德的；寓意；道德規範",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "concerned with right and wrong conduct; a practical lesson taught by a story",
        "cn_def": "道德的；寓意；道德規範"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
