// Part 1 Quiz Data: additional – electricity
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 17-1 - additional – electricity",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "additional",
    "pos": "adj.",
    "cn_def": "額外的；附加的",
    "en_def": "added, extra, or supplementary to what is already present or available",
    "sentence": "Ordering breakfast to your hotel room requires an {{BLANK}} charge of ten dollars.",
    "cn": "將早餐點送至飯店客房需要十美元的額外費用。"
  },
  {
    "word": "advantage",
    "pos": "n.",
    "cn_def": "優勢；好處；利益（可數/不可數）",
    "en_def": "a condition or circumstance that puts one in a favorable or superior position",
    "sentence": "She decided to take {{BLANK}} of the sunny afternoon by having a relaxing walk in the park.",
    "cn": "她決定利用陽光明媚的午後在公園裡輕鬆散步。"
  },
  {
    "word": "banker",
    "pos": "n.",
    "cn_def": "銀行家；銀行高級職員（可數）",
    "en_def": "an officer or owner of a bank, or a person who manages financial investments",
    "sentence": "In spite of his remarkable financial success, the wealthy {{BLANK}} had yet to find true happiness in life.",
    "cn": "儘管取得了顯著的財務成就，那位富有的銀行家在生活中仍未找到真正的幸福。"
  },
  {
    "word": "carpet",
    "pos": "n./v.",
    "cn_def": "地毯（名詞）；覆蓋厚厚一層（動詞）",
    "en_def": "a thick floor covering made of woven fabric; to cover thickly as if with a carpet",
    "sentence": "The host hotel rolled out the red {{BLANK}} to welcome the international diplomats.",
    "cn": "主辦飯店鋪上了紅地毯以隆重歡迎各國外交官。"
  },
  {
    "word": "compete",
    "pos": "v.",
    "cn_def": "競爭；比賽（動詞）",
    "en_def": "to strive to gain or win something by defeating or establishing superiority over others",
    "sentence": "Dozens of talented young athletes from across the country arrived to {{BLANK}} in the national championship.",
    "cn": "來自全國各地的數十名才華洋溢的年輕運動員抵達現場參加全國錦標賽的角逐／競爭。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；裝潢；點綴（動詞）",
    "en_def": "to make something look more attractive by adding ornament or color",
    "sentence": "The cheerful children used colorful balloons and paper ribbons to {{BLANK}} the classroom for Christmas.",
    "cn": "開朗的孩子們用彩色氣球和紙絲帶裝飾教室以迎接聖誕節。"
  },
  {
    "word": "dislike",
    "pos": "v./n.",
    "cn_def": "不喜歡；厭惡（動詞/名詞）",
    "en_def": "to feel distaste for or hostility toward; a feeling of distaste or hostility",
    "sentence": "What I {{BLANK}} most about living in a bustling metropolitan city is the severe air pollution.",
    "cn": "住在繁忙大都市裡我最不喜歡的一點就是嚴重的空氣污染。"
  },
  {
    "word": "electricity",
    "pos": "n.",
    "cn_def": "電；電力（不可數）",
    "en_def": "a form of energy resulting from the existence of charged particles, used for power",
    "sentence": "In order to save {{BLANK}} during the peak summer hours, citizens are advised to turn off unused air conditioners.",
    "cn": "為了在夏季尖峰時段節約電力，當局建議市民關閉未使用的冷氣機。"
  }
];

const MCQS = [
  {
    "q": "The hotel charges an ______ fee of twenty dollars if you wish to check out late.",
    "options": [
      "additional",
      "competitive",
      "electric",
      "decorative"
    ],
    "answer": 0,
    "cn": "如果您希望延遲退房，飯店會收取二十美元的額外費用。",
    "vocabIndex": 0
  },
  {
    "q": "The newly opened amusement park is very popular because it has modern ______ games.",
    "options": [
      "bankrupt",
      "additional",
      "electronic",
      "competitive"
    ],
    "answer": 2,
    "cn": "新開幕的遊樂園非常受歡迎，因為它擁有現代化的電子遊戲。"
  },
  {
    "q": "Fluency in three foreign languages gave Linda a great ______ in job interviews.",
    "options": [
      "banker",
      "advantage",
      "carpet",
      "electricity"
    ],
    "answer": 1,
    "cn": "精通三門外語讓琳達在工作面試中占有極大的優勢。",
    "vocabIndex": 1
  },
  {
    "q": "The wealthy ______ donated millions of dollars to build a new university library.",
    "options": [
      "carpet",
      "electricity",
      "advantage",
      "banker"
    ],
    "answer": 3,
    "cn": "那位富有的銀行家捐贈了數百萬美元來興建新的大學圖書館。",
    "vocabIndex": 2
  },
  {
    "q": "Mom bought a soft wool ______ to place on the cold living room floor.",
    "options": [
      "carpet",
      "banker",
      "electricity",
      "advantage"
    ],
    "answer": 0,
    "cn": "媽媽買了一塊柔軟的羊毛地毯鋪在冰冷的客廳地板上。",
    "vocabIndex": 3
  },
  {
    "q": "Remember to turn off all the lights before going out to save ______.",
    "options": [
      "banker",
      "carpet",
      "electricity",
      "advantage"
    ],
    "answer": 2,
    "cn": "出門前記得關掉所有的電燈以節約電力。",
    "vocabIndex": 7
  },
  {
    "q": "Tom has a strong ______ for spicy food and never eats hot peppers.",
    "options": [
      "banker",
      "dislike",
      "carpet",
      "electricity"
    ],
    "answer": 1,
    "cn": "湯姆對辛辣食物有著強烈的不喜歡／反感，從不吃辣椒。",
    "vocabIndex": 6
  },
  {
    "q": "Athletes from forty different nations came to ______ in the marathon.",
    "options": [
      "decorate",
      "dislike",
      "carpet",
      "compete"
    ],
    "answer": 3,
    "cn": "來自四十個不同國家的運動員前來參加馬拉松角逐／競賽。",
    "vocabIndex": 4
  },
  {
    "q": "The students stayed after school to ______ the gym with festive ribbons.",
    "options": [
      "compete",
      "decorate",
      "dislike",
      "elect"
    ],
    "answer": 1,
    "cn": "學生們放學後留下來用節慶絲帶裝飾體育館。",
    "vocabIndex": 5
  },
  {
    "q": "Cats usually ______ being forced into water for a bath.",
    "options": [
      "dislike",
      "decorate",
      "compete",
      "advance"
    ],
    "answer": 0,
    "cn": "貓咪通常不喜歡／討厭被強迫進水裡洗澡。",
    "vocabIndex": 6
  },
  {
    "q": "Heavy snowfall during the blizzard quickly ______ the roads with deep white ice.",
    "options": [
      "disliked",
      "competed",
      "carpeted",
      "decorated"
    ],
    "answer": 2,
    "cn": "暴風雪期間的大雪迅速在道路上覆蓋了厚厚一層白冰。",
    "vocabIndex": 3
  },
  {
    "q": "Our basketball team will ______ against the defending champions this Saturday.",
    "options": [
      "decorate",
      "dislike",
      "advance",
      "compete"
    ],
    "answer": 3,
    "cn": "我們的籃球隊本週六將與衛冕冠軍隊展開對決／競爭。",
    "vocabIndex": 4
  },
  {
    "q": "Could you provide some ______ details so that we can fully understand your proposal?",
    "options": [
      "decorative",
      "competitive",
      "additional",
      "electric"
    ],
    "answer": 2,
    "cn": "您能否提供一些額外的細節，以便我們能完全理解您的企劃？",
    "vocabIndex": 0
  },
  {
    "q": "The tech firm offers very ______ salaries to attract talented software engineers.",
    "options": [
      "additional",
      "decorative",
      "electrical",
      "competitive"
    ],
    "answer": 3,
    "cn": "這家科技公司提供極具競爭力的薪資來吸引優秀的軟體工程師。"
  },
  {
    "q": "The holiday lights were purely ______ and provided little actual warmth.",
    "options": [
      "decorative",
      "competitive",
      "electric",
      "additional"
    ],
    "answer": 0,
    "cn": "節日彩燈純粹是裝飾性的，幾乎不提供實際的溫暖。"
  },
  {
    "q": "An experienced ______ was hired to repair the damaged power lines in our building.",
    "options": [
      "banker",
      "electrician",
      "advantage",
      "carpet"
    ],
    "answer": 1,
    "cn": "一位經驗豐富的電工／水電師傅受聘來修理我們大樓受損的電源線路。"
  },
  {
    "q": "The international trade fair is an exciting ______ for high school students.",
    "options": [
      "carpet",
      "electricity",
      "banker",
      "competition"
    ],
    "answer": 3,
    "cn": "這場國際商務展覽對高中生而言是一場令人興奮的競賽／比賽。"
  },
  {
    "q": "Our company gained a major competitive ______ after launching the new app.",
    "options": [
      "banker",
      "advantage",
      "carpet",
      "dislike"
    ],
    "answer": 1,
    "cn": "在推出新應用程式後，我們公司獲得了重大的競爭優勢。",
    "vocabIndex": 1
  },
  {
    "q": "The movie star walked gracefully down the ______ while photographers snapped pictures.",
    "options": [
      "red carpet",
      "additional fee",
      "electric shock",
      "competitive edge"
    ],
    "answer": 0,
    "cn": "那位電影明星優雅地走在紅地毯上，攝影師們紛紛拍照。",
    "vocabIndex": 3
  },
  {
    "q": "We should ______ the clear weather today and go for a mountain hike.",
    "options": [
      "roll out the red carpet",
      "cut off the electricity",
      "take advantage of",
      "take a dislike to"
    ],
    "answer": 2,
    "cn": "我們應該利用今天晴朗的天氣去山上健行。",
    "vocabIndex": 1
  },
  {
    "q": "The city will ______ to celebrate the visiting Olympic champions.",
    "options": [
      "take a dislike to",
      "roll out the red carpet",
      "cut off the electricity",
      "take advantage of"
    ],
    "answer": 1,
    "cn": "該市將盛大鋪上紅地毯（隆重歡迎）以慶祝來訪的奧運冠軍。",
    "vocabIndex": 3
  },
  {
    "q": "For reasons nobody could explain, the baby seemed to ______ the barking dog.",
    "options": [
      "roll out the red carpet",
      "compete fiercely",
      "take advantage of",
      "take a dislike to"
    ],
    "answer": 3,
    "cn": "出於無人能解釋的原因，小寶寶似乎對那隻吠叫的狗產生了反感／討厭。",
    "vocabIndex": 6
  },
  {
    "q": "The power company had to ______ during the typhoon to ensure resident safety.",
    "options": [
      "cut off the electricity",
      "roll out the red carpet",
      "take a dislike to",
      "take advantage of"
    ],
    "answer": 0,
    "cn": "電力公司在颱風期間不得不切斷電力以確保居民安全。",
    "vocabIndex": 7
  },
  {
    "q": "The flight was delayed due to bad weather, but passengers received dinner ______.",
    "options": [
      "in high competition",
      "on the red carpet",
      "at no additional charge",
      "by electric shock"
    ],
    "answer": 2,
    "cn": "航班因惡劣天氣延誤，但乘客無需支付額外費用即可享用晚餐。",
    "vocabIndex": 0
  },
  {
    "q": "The factory uses modern wind turbines to ______ for thousands of homes.",
    "options": [
      "roll out the red carpet",
      "take advantage of",
      "take a dislike to",
      "generate electricity"
    ],
    "answer": 3,
    "cn": "這家工廠使用現代風力發電機為成千上萬戶家庭發電。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "additional": {
    "pos": "adj.",
    "en_def": "added, extra, or supplementary to what is already present or available",
    "cn_def": "額外的；附加的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "added, extra, or supplementary to what is already present or available",
        "cn_def": "額外的；附加的"
      }
    ]
  },
  "advantage": {
    "pos": "n.",
    "en_def": "a condition or circumstance that puts one in a favorable or superior position",
    "cn_def": "優勢；好處；利益（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a condition or circumstance that puts one in a favorable or superior position",
        "cn_def": "優勢；好處；利益（可數/不可數）"
      }
    ]
  },
  "banker": {
    "pos": "n.",
    "en_def": "an officer or owner of a bank, or a person who manages financial investments",
    "cn_def": "銀行家；銀行高級職員（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an officer or owner of a bank, or a person who manages financial investments",
        "cn_def": "銀行家；銀行高級職員（可數）"
      }
    ]
  },
  "carpet": {
    "pos": "n./v.",
    "en_def": "a thick floor covering made of woven fabric; to cover thickly as if with a carpet",
    "cn_def": "地毯（名詞）；覆蓋厚厚一層（動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a thick floor covering made of woven fabric; to cover thickly as if with a carpet",
        "cn_def": "地毯（名詞）；覆蓋厚厚一層（動詞）"
      }
    ]
  },
  "compete": {
    "pos": "v.",
    "en_def": "to strive to gain or win something by defeating or establishing superiority over others",
    "cn_def": "競爭；比賽（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to strive to gain or win something by defeating or establishing superiority over others",
        "cn_def": "競爭；比賽（動詞）"
      }
    ]
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make something look more attractive by adding ornament or color",
    "cn_def": "裝飾；裝潢；點綴（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something look more attractive by adding ornament or color",
        "cn_def": "裝飾；裝潢；點綴（動詞）"
      }
    ]
  },
  "dislike": {
    "pos": "v./n.",
    "en_def": "to feel distaste for or hostility toward; a feeling of distaste or hostility",
    "cn_def": "不喜歡；厭惡（動詞/名詞）",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to feel distaste for or hostility toward; a feeling of distaste or hostility",
        "cn_def": "不喜歡；厭惡（動詞/名詞）"
      }
    ]
  },
  "electricity": {
    "pos": "n.",
    "en_def": "a form of energy resulting from the existence of charged particles, used for power",
    "cn_def": "電；電力（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a form of energy resulting from the existence of charged particles, used for power",
        "cn_def": "電；電力（不可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
