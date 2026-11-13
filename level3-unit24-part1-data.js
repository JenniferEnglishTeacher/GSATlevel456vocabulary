// Part 1 Quiz Data: armed – ditch
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 24-1 - armed – ditch",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "armed",
    "pos": "adj.",
    "cn_def": "武裝的；攜帶武器的；備妥裝備的",
    "en_def": "equipped with weapons; supplied with necessary information or tools",
    "sentence": "The security guards patrolling the international terminal were fully {{BLANK}} to ensure the safety of travelers.",
    "cn": "巡邏國際航廈的保全人員全副武裝，以確保旅客的安全。"
  },
  {
    "word": "bacon",
    "pos": "n.",
    "cn_def": "培根；燻豬肉",
    "en_def": "cured meat from the sides or belly of a pig, typically fried in slices",
    "sentence": "Every weekend, the traditional cafe serves a delicious breakfast featuring crispy fried {{BLANK}} and fluffy scrambled eggs.",
    "cn": "每逢週末，這間傳統咖啡館都會供應美味的早餐，主打香脆的煎培根與蓬鬆的炒蛋。"
  },
  {
    "word": "badly",
    "pos": "adv.",
    "cn_def": "拙劣地；嚴重地；極其",
    "en_def": "in an unsatisfactory, defective, or severe way; very much",
    "sentence": "The historic municipal library was {{BLANK}} damaged by the raging storm and required extensive restoration.",
    "cn": "這座歷史悠久的市立圖書館遭受狂風暴雨的嚴重損壞，需要進行大規模的修復。"
  },
  {
    "word": "breeze",
    "pos": "n./v.",
    "cn_def": "微風；輕而易舉的事 (n.)；輕快地走 (v.)",
    "en_def": "a gentle, pleasant wind; something very easy to accomplish",
    "sentence": "We sat on the oceanfront veranda and thoroughly enjoyed the refreshing cool {{BLANK}} blowing across the bay.",
    "cn": "我們坐在面海的陽台上，徹底享受著吹拂過海灣的清新涼爽微風。"
  },
  {
    "word": "clothed",
    "pos": "v.",
    "cn_def": "為…穿衣；覆蓋；籠罩",
    "en_def": "to provide with clothes; to put clothes on someone or dress",
    "sentence": "The caring mother gently {{BLANK}} her shivering toddler in a thick woolen sweater before going outdoors into the cold.",
    "cn": "這位關懷備至的母親在走到戶外嚴寒之前，溫柔地為顫抖的幼童穿上一件厚毛衣。"
  },
  {
    "word": "crew",
    "pos": "n.",
    "cn_def": "全體船員/機組人員；工作團隊",
    "en_def": "a group of people who work on and operate a ship, aircraft, or project",
    "sentence": "The attentive cabin {{BLANK}} demonstrated essential safety protocols and calmly served hot beverages to all passengers.",
    "cn": "細心的機組工作人員示範了關鍵的安全守則，並平靜地為所有乘客送上熱飲。"
  },
  {
    "word": "dealer",
    "pos": "n.",
    "cn_def": "經銷商；商人；發牌員",
    "en_def": "a person or firm that buys and sells goods; a card distributor in games",
    "sentence": "Before purchasing the imported sedan, my father negotiated aggressively with the experienced car {{BLANK}} to secure a reasonable discount.",
    "cn": "在購買進口轎車之前，我父親與經驗豐富的汽車經銷商積極協商，以爭取合理的折扣。"
  },
  {
    "word": "ditch",
    "pos": "n./v.",
    "cn_def": "水溝；溝渠 (n.)；拋棄；丟下 (v.)",
    "en_def": "a narrow channel dug at the side of a road; to discard or abandon",
    "sentence": "Due to the slippery frozen road, the postal delivery truck lost control and slid directly into a roadside {{BLANK}}.",
    "cn": "由於濕滑結冰的道路，郵務貨車失去控制，直接滑進了路邊的水溝。"
  }
];

const MCQS = [
  {
    "q": "The elite police tactical unit arrived at the bank fully ______ with modern protective gear and specialized equipment.",
    "options": [
      "armed",
      "dizzy",
      "homesick",
      "tight"
    ],
    "answer": 0,
    "cn": "警方精銳特警部隊抵達銀行，全副武裝並配備現代防護裝備與專業器材。",
    "vocabIndex": 0
  },
  {
    "q": "My grandfather loves having a classic breakfast of sunny-side-up eggs, toast, and crispy ______ every morning.",
    "options": [
      "pigeon",
      "ditch",
      "breeze",
      "bacon"
    ],
    "answer": 3,
    "cn": "我祖父每天早晨都喜愛享用經典早餐，包括太陽蛋、吐司與香脆培根。",
    "vocabIndex": 1
  },
  {
    "q": "The centuries-old bridge was ______ damaged by the severe flash flood and was immediately closed to traffic.",
    "options": [
      "tight",
      "someday",
      "badly",
      "mostly"
    ],
    "answer": 2,
    "cn": "這座擁有數百年歷史的橋樑遭受嚴重山洪重創，隨即封閉禁止通行。",
    "vocabIndex": 2
  },
  {
    "q": "On hot summer evenings, sitting by the quiet harbor while feeling the gentle sea ______ is very relaxing.",
    "options": [
      "crew",
      "breeze",
      "dealer",
      "ditch"
    ],
    "answer": 1,
    "cn": "在炎熱的夏日傍晚，坐在寧靜的海港旁感受輕柔海風非常令人放鬆。",
    "vocabIndex": 3
  },
  {
    "q": "During the freezing winter months, social workers strive to feed and ______ the homeless individuals living on city streets.",
    "options": [
      "ditch",
      "interrupt",
      "edit",
      "clothe"
    ],
    "answer": 3,
    "cn": "在嚴寒的冬季，社工人員致力於為生活在城市街頭的無家可歸者提供食物與衣物穿戴。",
    "vocabIndex": 4
  },
  {
    "q": "The captain commended the dedicated cabin ______ for their exceptional courage and professionalism during the emergency landing.",
    "options": [
      "crew",
      "bacon",
      "dealer",
      "breeze"
    ],
    "answer": 0,
    "cn": "機長讚揚了敬業的客艙機組員在緊急迫降期間展現出的非凡勇氣與專業精神。",
    "vocabIndex": 5
  },
  {
    "q": "After comparing prices at several showrooms, we purchased our hybrid family vehicle from an authorized local ______.",
    "options": [
      "ditch",
      "dealer",
      "breeze",
      "crew"
    ],
    "answer": 1,
    "cn": "在比較了數家展示中心的價格後，我們向當地授權經銷商購買了這輛油電混合家庭房車。",
    "vocabIndex": 6
  },
  {
    "q": "Many technology startups have chosen to ______ traditional cubicles in favor of flexible, open collaborative spaces.",
    "options": [
      "clothe",
      "hesitate",
      "ditch",
      "interrupt"
    ],
    "answer": 2,
    "cn": "許多新創科技公司選擇捨棄傳統隔間辦公桌，轉而採用靈活的開放式協作空間。",
    "vocabIndex": 7
  },
  {
    "q": "A heavy downpour filled the narrow drainage ______ along the rural highway, causing water to spill onto the road.",
    "options": [
      "ditch",
      "crew",
      "dealer",
      "bacon"
    ],
    "answer": 0,
    "cn": "一場傾盆大雨填滿了鄉村公路旁狹窄的排水溝，導致積水溢流到路面上。",
    "vocabIndex": 7
  },
  {
    "q": "The university debate champion stepped onto the podium confidently ______ with thorough research and persuasive arguments.",
    "options": [
      "dizzy",
      "armed",
      "junior",
      "racial"
    ],
    "answer": 1,
    "cn": "大學辯論冠軍自信地步上講台，胸有成竹地備妥了詳盡研究與極具說服力的論點。",
    "vocabIndex": 0
  },
  {
    "q": "Since he graduated from business school, he has been working exhausting twelve-hour shifts to bring home the ______.",
    "options": [
      "crew",
      "dealer",
      "bacon",
      "breeze"
    ],
    "answer": 2,
    "cn": "自從商學院畢業後，他一直從事長達十二小時的繁重輪班工作以養家餬口。",
    "vocabIndex": 1
  },
  {
    "q": "The little boy knew he had behaved ______ at the party, so he wrote a heartfelt apology letter to the host.",
    "options": [
      "mostly",
      "someday",
      "tight",
      "badly"
    ],
    "answer": 3,
    "cn": "小男孩知道自己在派對上行為不檢，因此寫了一封誠摯的道歉信給主人。",
    "vocabIndex": 2
  },
  {
    "q": "Thanks to weeks of relentless practice, delivering the speech in front of hundreds of peers felt like a ______.",
    "options": [
      "ditch",
      "breeze",
      "bacon",
      "dealer"
    ],
    "answer": 1,
    "cn": "歸功於數週不懈的練習，在數百名同儕面前發表演說感覺就像小事一樁。",
    "vocabIndex": 3
  },
  {
    "q": "As night fell over the majestic valley, thick fog began to ______ the distant pine forests in a veil of silence.",
    "options": [
      "hesitate",
      "ditch",
      "edit",
      "clothe"
    ],
    "answer": 3,
    "cn": "當夜幕降臨雄偉的山谷時，濃霧開始將遠方的松林籠罩在一片寂靜之中。",
    "vocabIndex": 4
  },
  {
    "q": "The international news broadcast was made possible by an extraordinary technical ______ operating behind the scenes.",
    "options": [
      "crew",
      "bacon",
      "ditch",
      "breeze"
    ],
    "answer": 0,
    "cn": "這場國際新聞直播之所以能順利完成，全賴幕後一支非凡的技術團隊。",
    "vocabIndex": 5
  },
  {
    "q": "An experienced antique ______ was invited to examine the centuries-old painting to verify its historical authenticity.",
    "options": [
      "crew",
      "breeze",
      "dealer",
      "ditch"
    ],
    "answer": 2,
    "cn": "一位經驗豐富的古董商受邀鑑識這幅已有數百年歷史的畫作，以查驗其歷史真實性。",
    "vocabIndex": 6
  },
  {
    "q": "The weary traveler decided to ______ his heavy winter jacket once he arrived in the sunny tropical resort.",
    "options": [
      "interrupt",
      "clothe",
      "hesitate",
      "ditch"
    ],
    "answer": 3,
    "cn": "這位疲憊的旅客一抵達陽光明媚的熱帶度假勝地，便決定脫去他那件厚重的冬裝外套。",
    "vocabIndex": 7
  },
  {
    "q": "Citizens were deeply relieved to see ______ military personnel patrolling strategic train stations after the security warning.",
    "options": [
      "dizzy",
      "armed",
      "homesick",
      "underlying"
    ],
    "answer": 1,
    "cn": "安全警報發布後，市民看到全副武裝的軍法人員在重要戰略火車站巡邏，深感安心。",
    "vocabIndex": 0
  },
  {
    "q": "The enticing aroma of frying ______ drifted from the bustling kitchen, awakening everyone in the holiday cottage.",
    "options": [
      "ditch",
      "crew",
      "bacon",
      "dealer"
    ],
    "answer": 2,
    "cn": "煎培根的誘人香氣從忙碌的廚房飄了出來，喚醒了度假小屋裡的每個人。",
    "vocabIndex": 1
  },
  {
    "q": "The young soccer player twisted his ankle ______ during the championship match and could not continue playing.",
    "options": [
      "badly",
      "tight",
      "mostly",
      "someday"
    ],
    "answer": 0,
    "cn": "這名年輕足球員在冠軍爭奪賽中嚴重扭傷了腳踝，無法繼續上場比賽。",
    "vocabIndex": 2
  },
  {
    "q": "A refreshing morning ______ rustled through the lush garden trees, bringing welcomed relief from yesterday's heatwave.",
    "options": [
      "dealer",
      "ditch",
      "breeze",
      "bacon"
    ],
    "answer": 2,
    "cn": "清晨令人神清氣爽的微風吹過茂密的庭園樹木，為昨日的熱浪帶來了及時的舒緩。",
    "vocabIndex": 3
  },
  {
    "q": "Charitable organizations throughout the province collected blankets and warm garments to ______ impoverished villagers.",
    "options": [
      "ditch",
      "clothe",
      "edit",
      "squeeze"
    ],
    "answer": 1,
    "cn": "全省各慈善機構募集了毛毯與保暖衣物，以資助貧困村民的穿衣禦寒需求。",
    "vocabIndex": 4
  },
  {
    "q": "The private yacht required an experienced sailing ______ to navigate safely across the unpredictable coastal waters.",
    "options": [
      "ditch",
      "bacon",
      "breeze",
      "crew"
    ],
    "answer": 3,
    "cn": "這艘私人遊艇需要經驗豐富的航海工作團隊，才能在變幻莫測的沿海海域安全航行。",
    "vocabIndex": 5
  },
  {
    "q": "The certified coin ______ gave us an accurate valuation of the ancient silver coins discovered in grandfather's attic.",
    "options": [
      "dealer",
      "crew",
      "ditch",
      "breeze"
    ],
    "answer": 0,
    "cn": "合格錢幣鑑定商為我們在祖父閣樓中發現的古老銀幣進行了準確的估價。",
    "vocabIndex": 6
  },
  {
    "q": "Disappointed by the poor battery performance, Kevin resolved to ______ his outdated phone and upgrade to a new model.",
    "options": [
      "clothe",
      "interrupt",
      "ditch",
      "hesitate"
    ],
    "answer": 2,
    "cn": "由於對較差的電池續航力感到失望，Kevin 決定淘汰他那部過時的手機並升級至新機型。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "armed": {
    "pos": "adj.",
    "en_def": "equipped with weapons; supplied with necessary information or tools",
    "cn_def": "武裝的；攜帶武器的；備妥裝備的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "equipped with weapons; supplied with necessary information or tools",
        "cn_def": "武裝的；攜帶武器的；備妥裝備的"
      }
    ]
  },
  "bacon": {
    "pos": "n.",
    "en_def": "cured meat from the sides or belly of a pig, typically fried in slices",
    "cn_def": "培根；燻豬肉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "cured meat from the sides or belly of a pig, typically fried in slices",
        "cn_def": "培根；燻豬肉"
      }
    ]
  },
  "badly": {
    "pos": "adv.",
    "en_def": "in an unsatisfactory, defective, or severe way; very much",
    "cn_def": "拙劣地；嚴重地；極其",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in an unsatisfactory, defective, or severe way; very much",
        "cn_def": "拙劣地；嚴重地；極其"
      }
    ]
  },
  "breeze": {
    "pos": "n./v.",
    "en_def": "a gentle, pleasant wind; something very easy to accomplish",
    "cn_def": "微風；輕而易舉的事 (n.)；輕快地走 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a gentle, pleasant wind; something very easy to accomplish",
        "cn_def": "微風；輕而易舉的事 (n.)；輕快地走 (v.)"
      }
    ]
  },
  "clothed": {
    "pos": "v.",
    "en_def": "to provide with clothes; to put clothes on someone or dress",
    "cn_def": "為…穿衣；覆蓋；籠罩",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to provide with clothes; to put clothes on someone or dress",
        "cn_def": "為…穿衣；覆蓋；籠罩"
      }
    ]
  },
  "clothe": {
    "pos": "v.",
    "en_def": "to provide with clothes; to put clothes on someone or dress",
    "cn_def": "為…穿衣；覆蓋；籠罩",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to provide with clothes; to put clothes on someone or dress",
        "cn_def": "為…穿衣；覆蓋；籠罩"
      }
    ]
  },
  "crew": {
    "pos": "n.",
    "en_def": "a group of people who work on and operate a ship, aircraft, or project",
    "cn_def": "全體船員/機組人員；工作團隊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of people who work on and operate a ship, aircraft, or project",
        "cn_def": "全體船員/機組人員；工作團隊"
      }
    ]
  },
  "dealer": {
    "pos": "n.",
    "en_def": "a person or firm that buys and sells goods; a card distributor in games",
    "cn_def": "經銷商；商人；發牌員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or firm that buys and sells goods; a card distributor in games",
        "cn_def": "經銷商；商人；發牌員"
      }
    ]
  },
  "ditch": {
    "pos": "n./v.",
    "en_def": "a narrow channel dug at the side of a road; to discard or abandon",
    "cn_def": "水溝；溝渠 (n.)；拋棄；丟下 (v.)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a narrow channel dug at the side of a road; to discard or abandon",
        "cn_def": "水溝；溝渠 (n.)；拋棄；丟下 (v.)"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
