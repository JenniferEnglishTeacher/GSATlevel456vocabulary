// Part 3 Quiz Data: greenhouse – mob
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 16-3 - greenhouse – mob",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "greenhouse",
    "pos": "n.",
    "cn_def": "溫室；暖房（可數）",
    "en_def": "a glass building in which plants that need protection from cold weather are grown",
    "sentence": "By cultivating delicate tomatoes inside a climate-controlled glass {{BLANK}}, the organic farmer can harvest fresh produce year-round.",
    "cn": "透過在溫控玻璃溫室內培育嬌嫩的番茄，這位有機農夫一年四季都能採收新鮮農產。"
  },
  {
    "word": "industrial",
    "pos": "adj.",
    "cn_def": "工業的；產業的；製造業的",
    "en_def": "relating to, or used in industry, manufacturing, or factories",
    "sentence": "During the eighteenth century, the historic {{BLANK}} Revolution fundamentally transformed agricultural societies into modern economies.",
    "cn": "十八世紀期間，歷史性的工業革命從根本上將農業社會轉變為現代經濟體。"
  },
  {
    "word": "industry",
    "pos": "n.",
    "cn_def": "工業；行業；勤勉（可數/不可數）",
    "en_def": "economic activity concerned with the processing of raw materials and manufacture of goods",
    "sentence": "Taiwan's high-tech semiconductor {{BLANK}} plays a pivotal role in supplying microchips to electronics companies worldwide.",
    "cn": "台灣高科技半導體產業／工業在為全球電子企業供應晶片方面發揮了關鍵作用。"
  },
  {
    "word": "ivory",
    "pos": "n.",
    "cn_def": "象牙；象牙製品（不可數）",
    "en_def": "a hard creamy-white substance composing the main part of the tusks of an elephant or walrus",
    "sentence": "International wildlife conservation agreements strictly prohibit the commercial trading of poached elephant {{BLANK}} across all borders.",
    "cn": "國際野生動物保育公約嚴格禁止跨國非法盜獵大象牙的商業貿易。"
  },
  {
    "word": "ivory",
    "pos": "adj.",
    "cn_def": "象牙色的；乳白色的",
    "en_def": "having a creamy-white color like that of ivory",
    "sentence": "The bride looked breathtakingly elegant as she walked down the church aisle in a stunning {{BLANK}} silk gown.",
    "cn": "新娘身穿驚豔的象牙色絲綢禮服走過教堂走道，顯得無比高雅。"
  },
  {
    "word": "jelly",
    "pos": "n.",
    "cn_def": "果凍；果醬（可數/不可數）",
    "en_def": "a sweet, clear, semi-solid food made with fruit juice and gelatin",
    "sentence": "American schoolchildren often pack classic peanut butter and grape {{BLANK}} sandwiches into their school lunchboxes.",
    "cn": "美國學童經常把經典的花生醬配葡萄果醬三明治裝進學校便當盒裡。"
  },
  {
    "word": "knot",
    "pos": "n.",
    "cn_def": "結；繩結；樹結（可數）",
    "en_def": "a fastening made by tying a piece of string, rope, or cloth",
    "sentence": "Before hoisting the heavy sails on the boat, the experienced sailor tied a firm nautical {{BLANK}} in the rope.",
    "cn": "在船上升起沉重的帆之前，經驗豐富的水手在繩索上打了一個牢固的水手結。"
  },
  {
    "word": "tie the knot",
    "pos": "v.phr.",
    "cn_def": "結為連理；結婚（俚語）",
    "en_def": "an informal idiom meaning to get married",
    "sentence": "After dating happily for more than seven years, the devoted couple finally decided to {{BLANK}} in Hawaii next summer.",
    "cn": "在愉快地交往七年多之後，這對專一的情侶終於決定明年夏天在夏威夷結為連理／結婚。"
  },
  {
    "word": "lobby",
    "pos": "n.",
    "cn_def": "大廳；門廳；遊說團體（可數）",
    "en_def": "a room providing a space out of which one or more other rooms lead; an entrance hall",
    "sentence": "Environmental protection groups formed a powerful political {{BLANK}} to urge lawmakers to pass cleaner energy laws.",
    "cn": "環境保護團體組成了強大的政治遊說集團，敦促立法者通過更潔淨的能源法案。"
  },
  {
    "word": "missing",
    "pos": "adj.",
    "cn_def": "失蹤的；找不到的；遺漏的",
    "en_def": "not present or not able to be found; lost",
    "sentence": "Local police officers and volunteers searched the dense mountain forest all night trying to locate the {{BLANK}} child.",
    "cn": "當地警員與志工整夜在茂密的山林中搜索，試圖尋找那名失蹤的孩子。"
  },
  {
    "word": "mob",
    "pos": "n.",
    "cn_def": "暴民；烏合之眾；犯罪黑幫（可數）",
    "en_def": "a large crowd of people, especially one that is disorderly and intent on causing trouble",
    "sentence": "Riot police with heavy shields were dispatched downtown to disperse an angry {{BLANK}} that was smashing shop windows.",
    "cn": "手持重型盾牌的防暴警察被派往市中心，以驅散正在砸毀商店櫥窗的憤怒暴民。"
  },
  {
    "word": "mobbed",
    "pos": "v.",
    "cn_def": "蜂擁而上；圍堵；團團圍住（動詞）",
    "en_def": "to crowd around someone in an unruly and excited way",
    "sentence": "As soon as the world-famous pop idol stepped out of the private terminal, he was completely {{BLANK}} by cheering teenage fans.",
    "cn": "那位世界聞名的流行偶像一走出私人航廈，便立刻被歡呼的青少年粉絲團團包圍。"
  }
];

const MCQS = [
  {
    "q": "The farmer grows sweet red strawberries inside a warm glass ______ to protect them from snow.",
    "options": [
      "greenhouse",
      "knot",
      "lobby",
      "mob"
    ],
    "answer": 0,
    "cn": "農夫在溫暖的玻璃溫室裡種植香甜的紅草莓，以保護它們免受風雪侵襲。",
    "vocabIndex": 0
  },
  {
    "q": "The tourist hotel has a large ______ with soft armchairs and free coffee for guests.",
    "options": [
      "knot",
      "mob",
      "jelly",
      "lobby"
    ],
    "answer": 3,
    "cn": "這家觀光飯店有一個寬敞的大廳，為賓客提供柔軟的扶手椅與免費咖啡。",
    "vocabIndex": 8
  },
  {
    "q": "Mom spread sweet grape ______ on toast for our breakfast snack.",
    "options": [
      "knot",
      "lobby",
      "jelly",
      "mob"
    ],
    "answer": 2,
    "cn": "媽媽在吐司上塗抹香甜的葡萄果凍／果醬作為我們的早餐點心。",
    "vocabIndex": 5
  },
  {
    "q": "The sailor tied a tight ______ in the rope so the small boat would not drift away.",
    "options": [
      "lobby",
      "knot",
      "mob",
      "jelly"
    ],
    "answer": 1,
    "cn": "水手在繩索上打了一個緊緊的結，這樣小船就不會漂走。",
    "vocabIndex": 6
  },
  {
    "q": "An angry ______ of protesters broke windows and shouted loudly in front of city hall.",
    "options": [
      "mob",
      "knot",
      "lobby",
      "greenhouse"
    ],
    "answer": 0,
    "cn": "一群憤怒的暴民砸破窗戶，並在市政廳前大聲呼喊。",
    "vocabIndex": 10
  },
  {
    "q": "Poachers illegally hunt African elephants to sell their precious white ______ for money.",
    "options": [
      "greenhouse",
      "knot",
      "ivory",
      "lobby"
    ],
    "answer": 2,
    "cn": "盜獵者非法獵殺非洲象，以販售牠們珍貴的白色象牙牟利。",
    "vocabIndex": 3
  },
  {
    "q": "The car manufacturing ______ creates thousands of job opportunities for factory workers.",
    "options": [
      "knot",
      "industry",
      "jelly",
      "lobby"
    ],
    "answer": 1,
    "cn": "汽車製造產業／工業為工廠工人創造了數千個就業機會。",
    "vocabIndex": 2
  },
  {
    "q": "As soon as the movie star walked out of the car, he was ______ by hundreds of cheering fans.",
    "options": [
      "industrial",
      "knotted",
      "missed",
      "mobbed"
    ],
    "answer": 3,
    "cn": "那位電影明星一走出車門，立刻被數百名歡呼的粉絲蜂擁團團圍住。",
    "vocabIndex": 11
  },
  {
    "q": "The boy ______ the two pieces of string together to make a long kite line.",
    "options": [
      "mobbed",
      "knotted",
      "missing",
      "industrial"
    ],
    "answer": 1,
    "cn": "男孩把兩條細繩打了結接在一起，做成一條長長的風箏線。"
  },
  {
    "q": "Many people have lived in this busy ______ town where chemical factories operate.",
    "options": [
      "industrial",
      "ivory",
      "missing",
      "enjoyable"
    ],
    "answer": 0,
    "cn": "許多人住在這座有化工廠運作的繁忙工業城鎮裡。",
    "vocabIndex": 1
  },
  {
    "q": "Police put up photos in train stations to help locate the ______ little girl.",
    "options": [
      "ivory",
      "industrial",
      "missing",
      "constant"
    ],
    "answer": 2,
    "cn": "警察在火車站張貼照片，以協助尋找那名失蹤的小女孩。",
    "vocabIndex": 9
  },
  {
    "q": "The bride wore a lovely ______ silk dress that matched her pearl earrings.",
    "options": [
      "missing",
      "enjoyable",
      "industrial",
      "ivory"
    ],
    "answer": 3,
    "cn": "新娘穿著一件美麗的象牙色絲綢禮服，與她的珍珠耳環相配。",
    "vocabIndex": 3
  },
  {
    "q": "There is a ______ puzzle piece on the table, so we cannot finish the picture.",
    "options": [
      "industrial",
      "ivory",
      "missing",
      "constant"
    ],
    "answer": 2,
    "cn": "桌上少了一塊遺失的拼圖，因此我們無法完成這幅圖畫。",
    "vocabIndex": 9
  },
  {
    "q": "Smoke coming from ______ chimneys can pollute the air in the valley.",
    "options": [
      "ivory",
      "industrial",
      "frozen",
      "missing"
    ],
    "answer": 1,
    "cn": "來自工業煙囪的煙塵會污染山谷裡的空氣。",
    "vocabIndex": 1
  },
  {
    "q": "The keys on the ancient church piano were carved out of genuine ______ tusks.",
    "options": [
      "missing",
      "enjoyable",
      "industrial",
      "ivory"
    ],
    "answer": 3,
    "cn": "這座古老教堂鋼琴的琴鍵是由真正的象牙刻製而成的。",
    "vocabIndex": 3
  },
  {
    "q": "My pet dog has been ______ since yesterday, and we are searching the park for him.",
    "options": [
      "missing",
      "industrial",
      "ivory",
      "constant"
    ],
    "answer": 0,
    "cn": "我的寵物狗自昨天起就走失了，我們正在公園裡尋找牠。",
    "vocabIndex": 9
  },
  {
    "q": "The western district of our city is an ______ zone where large factories are built.",
    "options": [
      "ivory",
      "missing",
      "enjoyable",
      "industrial"
    ],
    "answer": 3,
    "cn": "我們城市的西部區域是一個建造了大型工廠的工業區。",
    "vocabIndex": 1
  },
  {
    "q": "The old woman painted the fence with ______ white paint to look classic.",
    "options": [
      "ivory",
      "missing",
      "industrial",
      "constant"
    ],
    "answer": 0,
    "cn": "老婦人用象牙白油漆粉刷籬笆，使它看起來古色古香。",
    "vocabIndex": 3
  },
  {
    "q": "Burning gasoline releases gases that make the global ______ effect worse.",
    "options": [
      "tie the knot",
      "greenhouse",
      "missing piece",
      "angry mob"
    ],
    "answer": 1,
    "cn": "燃燒汽油釋放的氣體使全球溫室效應更加惡化。",
    "vocabIndex": 0
  },
  {
    "q": "The young couple dated for six years and finally decided to ______ next May.",
    "options": [
      "missing piece",
      "green house",
      "tie the knot",
      "angry mob"
    ],
    "answer": 2,
    "cn": "這對年輕情侶交往了六年，終於決定在明年五月結婚／結為連理。",
    "vocabIndex": 7
  },
  {
    "q": "Peter and his girlfriend will travel to a romantic beach in Bali to ______ with family.",
    "options": [
      "missing piece",
      "tie the knot",
      "greenhouse effect",
      "angry mob"
    ],
    "answer": 1,
    "cn": "彼得和他的女友將前往峇里島浪漫的海灘，與家人一同步入禮堂／結婚。",
    "vocabIndex": 7
  },
  {
    "q": "The police had to protect the shop from the ______ that was shouting in the street.",
    "options": [
      "tie the knot",
      "greenhouse effect",
      "missing person",
      "angry mob"
    ],
    "answer": 3,
    "cn": "警方不得不保護商店免受在街上大聲呼喊的憤怒暴民的破壞。",
    "vocabIndex": 10
  },
  {
    "q": "The family called the emergency police station to report their grandmother as a ______.",
    "options": [
      "missing person",
      "tie the knot",
      "angry mob",
      "greenhouse effect"
    ],
    "answer": 0,
    "cn": "這家人打電話給緊急警察局，通報他們的祖母為失蹤人口。",
    "vocabIndex": 9
  },
  {
    "q": "We sat comfortably on leather couches in the hotel ______ while waiting for our taxi.",
    "options": [
      "mob",
      "knot",
      "lobby",
      "jelly"
    ],
    "answer": 2,
    "cn": "在等待計程車時，我們舒適地坐在飯店大廳的皮沙發上。",
    "vocabIndex": 8
  },
  {
    "q": "A loud ______ of cheering fans gathered outside the stadium gates to see their team.",
    "options": [
      "knot",
      "mob",
      "jelly",
      "greenhouse"
    ],
    "answer": 1,
    "cn": "一群歡呼的球迷蜂擁群眾聚集在體育場大門外看他們的球隊。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "greenhouse": {
    "pos": "n.",
    "en_def": "a glass building in which plants that need protection from cold weather are grown",
    "cn_def": "溫室；暖房（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a glass building in which plants that need protection from cold weather are grown",
        "cn_def": "溫室；暖房（可數）"
      }
    ]
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "relating to, or used in industry, manufacturing, or factories",
    "cn_def": "工業的；產業的；製造業的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, or used in industry, manufacturing, or factories",
        "cn_def": "工業的；產業的；製造業的"
      }
    ]
  },
  "industry": {
    "pos": "n.",
    "en_def": "economic activity concerned with the processing of raw materials and manufacture of goods",
    "cn_def": "工業；行業；勤勉（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "economic activity concerned with the processing of raw materials and manufacture of goods",
        "cn_def": "工業；行業；勤勉（可數/不可數）"
      }
    ]
  },
  "ivory": {
    "pos": "n.",
    "en_def": "a hard creamy-white substance composing the main part of the tusks of an elephant or walrus",
    "cn_def": "象牙；象牙製品（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a hard creamy-white substance composing the main part of the tusks of an elephant or walrus",
        "cn_def": "象牙；象牙製品（不可數）"
      },
      {
        "pos": "adj.",
        "en_def": "having a creamy-white color like that of ivory",
        "cn_def": "象牙色的；乳白色的"
      }
    ]
  },
  "jelly": {
    "pos": "n.",
    "en_def": "a sweet, clear, semi-solid food made with fruit juice and gelatin",
    "cn_def": "果凍；果醬（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sweet, clear, semi-solid food made with fruit juice and gelatin",
        "cn_def": "果凍；果醬（可數/不可數）"
      }
    ]
  },
  "knot": {
    "pos": "n.",
    "en_def": "a fastening made by tying a piece of string, rope, or cloth",
    "cn_def": "結；繩結；樹結（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fastening made by tying a piece of string, rope, or cloth",
        "cn_def": "結；繩結；樹結（可數）"
      }
    ]
  },
  "tie the knot": {
    "pos": "v.phr.",
    "en_def": "an informal idiom meaning to get married",
    "cn_def": "結為連理；結婚（俚語）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "an informal idiom meaning to get married",
        "cn_def": "結為連理；結婚（俚語）"
      }
    ]
  },
  "lobby": {
    "pos": "n.",
    "en_def": "a room providing a space out of which one or more other rooms lead; an entrance hall",
    "cn_def": "大廳；門廳；遊說團體（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a room providing a space out of which one or more other rooms lead; an entrance hall",
        "cn_def": "大廳；門廳；遊說團體（可數）"
      }
    ]
  },
  "missing": {
    "pos": "adj.",
    "en_def": "not present or not able to be found; lost",
    "cn_def": "失蹤的；找不到的；遺漏的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not present or not able to be found; lost",
        "cn_def": "失蹤的；找不到的；遺漏的"
      }
    ]
  },
  "mob": {
    "pos": "n.",
    "en_def": "a large crowd of people, especially one that is disorderly and intent on causing trouble",
    "cn_def": "暴民；烏合之眾；犯罪黑幫（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large crowd of people, especially one that is disorderly and intent on causing trouble",
        "cn_def": "暴民；烏合之眾；犯罪黑幫（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to crowd around someone in an unruly and excited way",
        "cn_def": "蜂擁而上；圍堵；團團圍住（動詞）"
      }
    ]
  },
  "mobbed": {
    "pos": "v.",
    "en_def": "to crowd around someone in an unruly and excited way",
    "cn_def": "蜂擁而上；圍堵；團團圍住（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to crowd around someone in an unruly and excited way",
        "cn_def": "蜂擁而上；圍堵；團團圍住（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
