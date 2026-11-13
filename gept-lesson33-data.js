// Lesson 33 Quiz Data: Community, Environmental Protection & Local Industry
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 33 - Community, Environmental Protection & Local Industry",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "local",
    "pos": "adj. / n.",
    "cn_def": "當地的；本地人",
    "en_def": "relating to a particular area or neighborhood",
    "sentence": "The friendly {{BLANK}} residents welcomed foreign visitors warmly, and they shared traditional homemade snacks with everyone.",
    "cn": "友善的當地居民熱情地歡迎外國訪客，並且與每個人分享傳統的手工自製點心。"
  },
  {
    "word": "overseas",
    "pos": "adv. / adj.",
    "cn_def": "在海外；海外的",
    "en_def": "in or to a foreign country across the sea",
    "sentence": "After graduating from high school, Emily plans to study {{BLANK}} in England to improve her English language skills.",
    "cn": "高中畢業之後，艾蜜莉計劃前往英國海外留學，以提升她的英語語言能力。"
  },
  {
    "word": "neighbor",
    "pos": "n.",
    "cn_def": "鄰居",
    "en_def": "a person living near or next door to someone",
    "sentence": "Our next-door {{BLANK}} is a kind retired teacher who always helps water our plants when we go on vacation.",
    "cn": "我們的隔壁鄰居是一位和藹的退休老師，當我們去度假時總是幫忙替我們的植物澆水。"
  },
  {
    "word": "pollute",
    "pos": "v.",
    "cn_def": "污染",
    "en_def": "to make air, water, or soil dirty and harmful to life",
    "sentence": "Chemical factories must not {{BLANK}} the river with untreated waste, or thousands of fish will die in the water.",
    "cn": "化學工廠絕不可用未經處理的廢棄物污染河流，否則水中成千上萬的魚群將會死亡。"
  },
  {
    "word": "pollution",
    "pos": "n.",
    "cn_def": "污染（名詞）",
    "en_def": "damage caused to water, air, or land by harmful substances",
    "sentence": "Heavy traffic in big cities creates severe air {{BLANK}}, causing serious breathing problems for young children and elderly people.",
    "cn": "大城市的擁擠交通造成了嚴重的空氣污染，導致幼童與年長者嚴重的呼吸道問題。"
  },
  {
    "word": "recycle",
    "pos": "v.",
    "cn_def": "資源回收；循環再造",
    "en_def": "to collect and treat rubbish to produce useful materials again",
    "sentence": "Students are encouraged to {{BLANK}} used paper and plastic bottles, which greatly helps reduce garbage in our school.",
    "cn": "學生們受到鼓勵要回收廢紙與塑膠瓶，這極大有助於減少我們學校裡的垃圾量。"
  },
  {
    "word": "industry",
    "pos": "n.",
    "cn_def": "工業；產業",
    "en_def": "economic activity concerned with processing raw materials and manufacturing",
    "sentence": "Taiwan is world-famous for its advanced semiconductor {{BLANK}}, which supplies vital computer chips to tech companies everywhere.",
    "cn": "台灣以其先進的半導體產業聞名全球，為各地的科技公司供應至關重要的電腦晶片。"
  },
  {
    "word": "noisy",
    "pos": "adj.",
    "cn_def": "喧鬧的；吵雜的",
    "en_def": "making a lot of loud or unpleasant noise",
    "sentence": "The downtown night market was very crowded and {{BLANK}}, but we enjoyed eating delicious local street food there.",
    "cn": "市中心的夜市非常擁擠且喧鬧，但我們在那裡吃著美味的當地街頭小吃非常開心。"
  },
  {
    "word": "poison",
    "pos": "n. / v.",
    "cn_def": "毒藥；毒害",
    "en_def": "a substance that causes illness or death when absorbed; to harm with it",
    "sentence": "Store all household cleaning chemicals in high locked cabinets so curious young children do not accidentally drink dangerous {{BLANK}}.",
    "cn": "將所有家用清潔化學品存放在高處上鎖的櫥櫃中，以免好奇的年幼孩童不小心喝下危險的毒藥。"
  },
  {
    "word": "excellent",
    "pos": "adj.",
    "cn_def": "優秀的；卓越的",
    "en_def": "extremely good; outstanding",
    "sentence": "Grace received an {{BLANK}} grade on her final science project because she worked diligently on it every single day.",
    "cn": "葛瑞絲在她的期末科學專題中獲得了優秀的成績，因為她每一天都極其勤勉地投入其中。"
  }
];

const MCQS = [
  {
    "q": "The hospitable ______ villagers opened their homes to travelers and served hot ginger tea on cold mornings.",
    "options": [
      "noisy",
      "local",
      "excellent",
      "overseas"
    ],
    "answer": 1,
    "cn": "熱情好客的當地村民向旅客敞開家門，並在寒冷的早晨端上熱薑茶款待。 【選項解析】(A) local 當地的  (B) noisy 吵鬧的  (C) excellent 優秀的  (D) overseas 海外的。local villagers（當地村民）。",
    "vocabIndex": 0
  },
  {
    "q": "Because the apartment complex is right beside an elevated highway, the bedrooms are often very ______ at night.",
    "options": [
      "noisy",
      "local",
      "excellent",
      "overseas"
    ],
    "answer": 0,
    "cn": "因為這棟公寓大樓緊鄰高架公路，臥室在夜間往往非常吵鬧喧囂。 【選項解析】(A) local 本地的  (B) noisy 吵雜的  (C) excellent 優秀的  (D) overseas 海外的。beside an elevated highway 可知很 noisy。",
    "vocabIndex": 7
  },
  {
    "q": "Samuel earned an ______ score on his chemistry exam, so his parents took him out to his favorite Italian restaurant.",
    "options": [
      "local",
      "overseas",
      "noisy",
      "excellent"
    ],
    "answer": 3,
    "cn": "塞繆爾在化學考試中拿到了優秀的成績，所以父母帶他前往他最愛的義大利餐廳慶祝。 【選項解析】(A) local 當地的  (B) overseas 海外的  (C) excellent 優秀的  (D) noisy 吵鬧的。excellent score（優秀成績）。",
    "vocabIndex": 9
  },
  {
    "q": "Many ambitious young engineers choose to work ______ in Silicon Valley to gain valuable international experience.",
    "options": [
      "noisy",
      "local",
      "overseas",
      "excellent"
    ],
    "answer": 2,
    "cn": "許多有抱負的年輕工程師選擇前往矽谷海外工作，以累積寶貴的國際實務經驗。 【選項解析】(A) noisy 吵鬧的  (B) local 當地的  (C) excellent 優秀的  (D) overseas 在海外。work overseas（在海外工作）。",
    "vocabIndex": 1
  },
  {
    "q": "Toxic exhaust fumes from millions of motor scooters create serious air ______ in the metropolitan area every morning.",
    "options": [
      "industry",
      "pollution",
      "poison",
      "neighbor"
    ],
    "answer": 1,
    "cn": "來自數百萬輛機車的有毒廢氣，每天早晨都會在都會區造成嚴重的空氣污染問題。 【選項解析】(A) pollution 污染  (B) industry 工業  (C) poison 毒藥  (D) neighbor 鄰居。air pollution（空氣污染）。",
    "vocabIndex": 4
  },
  {
    "q": "The high-tech manufacturing ______ in Hsinchu Science Park provides thousands of well-paid jobs for college graduates.",
    "options": [
      "industry",
      "neighbor",
      "pollution",
      "poison"
    ],
    "answer": 0,
    "cn": "新竹科學園區的高科技製造產業，為廣大大學畢業生提供了數以千計的高薪職缺。 【選項解析】(A) neighbor 鄰居  (B) industry 產業  (C) pollution 污染  (D) poison 毒藥。manufacturing industry（製造產業）。",
    "vocabIndex": 6
  },
  {
    "q": "The caring nurse warned parents that rat ______ must always be kept far out of reach of curious infants.",
    "options": [
      "pollution",
      "neighbor",
      "poison",
      "industry"
    ],
    "answer": 2,
    "cn": "細心的護士警告各位家長，老鼠藥必須永遠放在好奇幼兒拿不到的高處以免發生意外。 【選項解析】(A) pollution 污染  (B) neighbor 鄰居  (C) poison 毒藥  (D) industry 工業。rat poison（老鼠藥）。",
    "vocabIndex": 8
  },
  {
    "q": "Whenever Mr. Lin travels on business, his friendly next-door ______ gladly collects his mail and feeds his pet cat.",
    "options": [
      "poison",
      "pollution",
      "industry",
      "neighbor"
    ],
    "answer": 3,
    "cn": "每當林先生出差旅行時，他親切的隔壁鄰居總是樂於幫忙收取信件並餵食他的寵物貓。 【選項解析】(A) poison 毒藥  (B) pollution 污染  (C) industry 工業  (D) neighbor 鄰居。next-door neighbor（隔壁鄰居）。",
    "vocabIndex": 2
  },
  {
    "q": "Environmental laws strictly forbid industrial factories to ______ clean mountain streams with dangerous chemical dyes.",
    "options": [
      "poison",
      "recycle",
      "pollute",
      "desert"
    ],
    "answer": 2,
    "cn": "環境保護法規嚴格禁止工業廠房使用危險化學染劑污染原本清澈純淨的山澗溪流。 【選項解析】(A) pollute 污染  (B) recycle 回收  (C) poison 下毒  (D) desert 拋棄。pollute clean mountain streams（污染山澗）。",
    "vocabIndex": 3
  },
  {
    "q": "Our school cafeteria launched a green initiative to ______ all aluminum cans and plastic containers after lunchtime.",
    "options": [
      "recycle",
      "pollute",
      "poison",
      "plant"
    ],
    "answer": 0,
    "cn": "我們學校的餐廳推動了一項環保倡議，在午餐時間過後回收所有的鋁罐與塑膠容器。 【選項解析】(A) pollute 污染  (B) recycle 回收  (C) poison 下毒  (D) plant 種植。recycle used cans and containers（回收罐子與容器）。",
    "vocabIndex": 5
  },
  {
    "q": "After living in Tokyo for three years, Kevin decided to return from ______ and start his own graphic design company in Taipei.",
    "options": [
      "noisy",
      "local",
      "excellent",
      "overseas"
    ],
    "answer": 3,
    "cn": "在東京居住了三年之後，凱文決定從海外歸國，並在台北創立了自己的平面設計公司。 【選項解析】(A) noisy 吵鬧的  (B) local 本地的  (C) overseas 海外  (D) excellent 優秀的。return from overseas（從海外歸國）。",
    "vocabIndex": 1
  },
  {
    "q": "The library reading room has a strict silence rule because people cannot concentrate when students are being ______.",
    "options": [
      "excellent",
      "noisy",
      "overseas",
      "local"
    ],
    "answer": 1,
    "cn": "圖書館閱覽室設有嚴格的安靜規定，因為當學生吵鬧喧嘩時大家便無法專心閱讀。 【選項解析】(A) excellent 優秀的  (B) local 本地的  (C) overseas 海外的  (D) noisy 吵鬧的。being noisy（吵鬧喧嘩）。",
    "vocabIndex": 7
  },
  {
    "q": "Buying fresh produce from the ______ farmers market supports agricultural families and reduces transport emissions.",
    "options": [
      "overseas",
      "noisy",
      "local",
      "excellent"
    ],
    "answer": 2,
    "cn": "從當地的農夫市集採購新鮮蔬果，既能支持在地農戶家庭，又能減少長途運輸碳排放。 【選項解析】(A) local 當地的  (B) noisy 吵鬧的  (C) overseas 海外的  (D) excellent 優秀的。local farmers market（當地農夫市集）。",
    "vocabIndex": 0
  },
  {
    "q": "The talented chef cooked an ______ banquet for the wedding guests, and everyone praised the delicate seafood dishes.",
    "options": [
      "excellent",
      "overseas",
      "local",
      "noisy"
    ],
    "answer": 0,
    "cn": "才華橫溢的主廚為婚禮賓客烹調了一席出色的盛宴，每個人都對精緻海鮮料理讚不絕口。 【選項解析】(A) overseas 海外的  (B) excellent 出色的  (C) local 當地的  (D) noisy 吵鬧的。excellent banquet（出色的盛宴）。",
    "vocabIndex": 9
  },
  {
    "q": "Burning low-grade coal in power plants releases harmful particulate matter that causes heavy smog and health ______.",
    "options": [
      "neighbor",
      "pollution",
      "industry",
      "poison"
    ],
    "answer": 1,
    "cn": "發電廠燃燒劣質煤炭會釋放有害懸浮微粒，導致嚴重的煙霧問題並造成健康的重度污染。 【選項解析】(A) neighbor 鄰居  (B) industry 工業  (C) pollution 污染  (D) poison 毒藥。health/environmental pollution（污染）。",
    "vocabIndex": 4
  },
  {
    "q": "The global tourism ______ suffered heavy economic losses when international flights were suspended during the crisis.",
    "options": [
      "poison",
      "neighbor",
      "pollution",
      "industry"
    ],
    "answer": 3,
    "cn": "在危機期間國際航班全面停飛時，全球的觀光旅遊產業遭受了沉重無比的經濟打擊。 【選項解析】(A) poison 毒藥  (B) neighbor 鄰居  (C) pollution 污染  (D) industry 產業。tourism industry（觀光產業）。",
    "vocabIndex": 6
  },
  {
    "q": "The label on the pest control spray clearly warned that the liquid contains deadly ______ and must not touch bare skin.",
    "options": [
      "pollution",
      "industry",
      "poison",
      "neighbor"
    ],
    "answer": 2,
    "cn": "除蟲噴霧上的標籤明確警告該液體含有致命毒藥成份，絕不可接觸到人體裸露皮膚。 【選項解析】(A) poison 毒藥/毒素  (B) industry 工業  (C) pollution 污染  (D) neighbor 鄰居。deadly poison（致命毒藥）。",
    "vocabIndex": 8
  },
  {
    "q": "When our car broke down in the driveway, our generous ______ came over with his toolbox and helped us repair it.",
    "options": [
      "neighbor",
      "pollution",
      "poison",
      "industry"
    ],
    "answer": 0,
    "cn": "當我們的車子在車道上拋錨時，慷慨的鄰居立刻帶著工具箱走過來熱心協助修理。 【選項解析】(A) pollution 污染  (B) neighbor 鄰居  (C) poison 毒劑  (D) industry 產業。generous neighbor（慷慨鄰居）。",
    "vocabIndex": 2
  },
  {
    "q": "Careless tourists often ______ the pristine beach by leaving behind plastic wrappers and empty beverage cups.",
    "options": [
      "recycle",
      "plant",
      "poison",
      "pollute"
    ],
    "answer": 3,
    "cn": "粗心的遊客經常將塑膠包裝紙與空飲料杯隨意丟棄，污染了原本純淨原始的海灘環境。 【選項解析】(A) recycle 回收  (B) plant 種植  (C) pollute 污染  (D) poison 下毒。pollute the beach（污染海灘）。",
    "vocabIndex": 3
  },
  {
    "q": "It is our civic duty to separate household waste properly so sanitation workers can ______ cardboard boxes efficiently.",
    "options": [
      "pollute",
      "recycle",
      "rock",
      "poison"
    ],
    "answer": 1,
    "cn": "妥善做好家庭垃圾分類是我們的公民責任，如此清潔隊員才能有效率地回收瓦楞紙箱。 【選項解析】(A) pollute 污染  (B) poison 下毒  (C) rock 搖擺  (D) recycle 回收。recycle cardboard boxes（回收紙箱）。",
    "vocabIndex": 5
  },
  {
    "q": "The restaurant is renowned for its ______ customer service, ensuring that every guest feels genuinely respected and valued.",
    "options": [
      "excellent",
      "noisy",
      "local",
      "overseas"
    ],
    "answer": 0,
    "cn": "這家餐廳以其卓越的顧客服務聞名，確保每一位到訪的客人都感受到被由衷重視與款待。 【選項解析】(A) excellent 卓越的  (B) noisy 吵鬧的  (C) local 當地的  (D) overseas 海外的。excellent customer service（卓越客戶服務）。",
    "vocabIndex": 9
  },
  {
    "q": "The construction site was so ______ that workers were required by safety regulations to wear heavy ear protection.",
    "options": [
      "overseas",
      "noisy",
      "local",
      "excellent"
    ],
    "answer": 1,
    "cn": "施工現場非常吵鬧嘈雜，因此根據安全法規要求，工人們必須戴上厚重的護耳保護套。 【選項解析】(A) overseas 海外的  (B) noisy 嘈雜的  (C) local 當地的  (D) excellent 優秀的。construction site was noisy（工地非常吵鬧）。",
    "vocabIndex": 7
  },
  {
    "q": "Taiwanese food stalls pride themselves on using ______ ingredients grown by agricultural farmers in neighboring counties.",
    "options": [
      "overseas",
      "noisy",
      "local",
      "excellent"
    ],
    "answer": 2,
    "cn": "台灣的小吃攤以使用鄰近各縣在地農夫所種植的優質在地食材而深感自豪與驕傲。 【選項解析】(A) overseas 海外的  (B) noisy 吵鬧的  (C) local 在地的  (D) excellent 優秀的。local ingredients（在地食材）。",
    "vocabIndex": 0
  },
  {
    "q": "The government signed an economic partnership to encourage young entrepreneurs to expand their business ventures ______.",
    "options": [
      "local",
      "noisy",
      "excellent",
      "overseas"
    ],
    "answer": 3,
    "cn": "政府簽署了經濟夥伴合作協議，以鼓勵年輕創業家們將其商業版圖與投資積極拓展至海外。 【選項解析】(A) local 本地的  (B) noisy 吵鬧的  (C) excellent 優秀的  (D) overseas 在海外。expand business overseas（拓展至海外）。",
    "vocabIndex": 1
  },
  {
    "q": "If oil tankers leak petroleum into the open sea, the toxic slick will ______ marine ecosystems and kill coral reefs.",
    "options": [
      "plant",
      "recycle",
      "pollute",
      "rock"
    ],
    "answer": 2,
    "cn": "如果油輪在開闊公海上洩漏石油，有毒的浮油將會嚴重污染海洋生態系統並殺死珊瑚礁。 【選項解析】(A) pollute 污染  (B) recycle 回收  (C) plant 種植  (D) rock 搖擺。pollute marine ecosystems（污染海洋生態系統）。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "local": {
    "pos": "adj. / n.",
    "en_def": "relating to a particular area or neighborhood",
    "cn_def": "當地的；本地人",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to a particular area or neighborhood",
        "cn_def": "當地的；本地人"
      }
    ]
  },
  "overseas": {
    "pos": "adv. / adj.",
    "en_def": "in or to a foreign country across the sea",
    "cn_def": "在海外；海外的",
    "combined": [
      {
        "pos": "adv. / adj.",
        "en_def": "in or to a foreign country across the sea",
        "cn_def": "在海外；海外的"
      }
    ]
  },
  "neighbor": {
    "pos": "n.",
    "en_def": "a person living near or next door to someone",
    "cn_def": "鄰居",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person living near or next door to someone",
        "cn_def": "鄰居"
      }
    ]
  },
  "pollute": {
    "pos": "v.",
    "en_def": "to make air, water, or soil dirty and harmful to life",
    "cn_def": "污染",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make air, water, or soil dirty and harmful to life",
        "cn_def": "污染"
      }
    ]
  },
  "pollution": {
    "pos": "n.",
    "en_def": "damage caused to water, air, or land by harmful substances",
    "cn_def": "污染（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "damage caused to water, air, or land by harmful substances",
        "cn_def": "污染（名詞）"
      }
    ]
  },
  "recycle": {
    "pos": "v.",
    "en_def": "to collect and treat rubbish to produce useful materials again",
    "cn_def": "資源回收；循環再造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to collect and treat rubbish to produce useful materials again",
        "cn_def": "資源回收；循環再造"
      }
    ]
  },
  "industry": {
    "pos": "n.",
    "en_def": "economic activity concerned with processing raw materials and manufacturing",
    "cn_def": "工業；產業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "economic activity concerned with processing raw materials and manufacturing",
        "cn_def": "工業；產業"
      }
    ]
  },
  "noisy": {
    "pos": "adj.",
    "en_def": "making a lot of loud or unpleasant noise",
    "cn_def": "喧鬧的；吵雜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making a lot of loud or unpleasant noise",
        "cn_def": "喧鬧的；吵雜的"
      }
    ]
  },
  "poison": {
    "pos": "n. / v.",
    "en_def": "a substance that causes illness or death when absorbed; to harm with it",
    "cn_def": "毒藥；毒害",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a substance that causes illness or death when absorbed; to harm with it",
        "cn_def": "毒藥；毒害"
      }
    ]
  },
  "excellent": {
    "pos": "adj.",
    "en_def": "extremely good; outstanding",
    "cn_def": "優秀的；卓越的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely good; outstanding",
        "cn_def": "優秀的；卓越的"
      }
    ]
  },
  "desert": {
    "pos": "",
    "en_def": "",
    "cn_def": "拋棄",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "拋棄"
      }
    ]
  },
  "plant": {
    "pos": "",
    "en_def": "",
    "cn_def": "種植",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "種植"
      }
    ]
  },
  "rock": {
    "pos": "",
    "en_def": "",
    "cn_def": "搖擺",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "搖擺"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
