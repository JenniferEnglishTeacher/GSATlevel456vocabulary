// Part 1 Quiz Data: bitter – define
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 22-1 - bitter – define",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bitter",
    "pos": "adj.",
    "cn_def": "苦的；嚴寒的；怨恨的",
    "en_def": "having a sharp, pungent taste; resentful; extremely cold",
    "sentence": "The black coffee was far too {{BLANK}} for the child, so he added a spoonful of sugar.",
    "cn": "這杯黑咖啡對孩子來說太苦了，所以他加了一匙糖。"
  },
  {
    "word": "charm",
    "pos": "n./v.",
    "cn_def": "魅力；符咒；吸引",
    "en_def": "the power of attracting or pleasing others; to delight greatly",
    "sentence": "The small mountain cottage had a rustic {{BLANK}} that immediately attracted many tourists.",
    "cn": "這座小山屋有一種鄉村魅力，立刻吸引了許多遊客。"
  },
  {
    "word": "charming",
    "pos": "adj.",
    "cn_def": "迷人的；有魅力的",
    "en_def": "pleasant, delightful, and attractive",
    "sentence": "The village is famous for its {{BLANK}} cobblestone streets and friendly local residents.",
    "cn": "這個村莊以其迷人的鵝卵石街道和友善的當地居民而聞名。"
  },
  {
    "word": "cheerful",
    "pos": "adj.",
    "cn_def": "開朗的；令人愉快的",
    "en_def": "noticeably happy and optimistic; causing good feelings",
    "sentence": "Despite facing severe financial difficulties, she always maintains a {{BLANK}} attitude toward life.",
    "cn": "儘管面臨嚴重的經濟困難，她對生活始終保持著開朗的態度。"
  },
  {
    "word": "cranes",
    "pos": "n./v.",
    "cn_def": "鶴；起重機；伸長(脖子)",
    "en_def": "a large long-legged bird; a lifting machine; to stretch out one's neck",
    "sentence": "A pair of white {{BLANK}} gracefully landed near the tranquil surface of the mountain lake.",
    "cn": "一對白鶴優雅地降落在平靜的山林湖面上。"
  },
  {
    "word": "crickets",
    "pos": "n.",
    "cn_def": "蟋蟀；板球",
    "en_def": "a jumping insect that makes chirping sounds; a popular bat-and-ball sport",
    "sentence": "On warm summer evenings, the constant chirping of {{BLANK}} filled the peaceful garden air.",
    "cn": "在溫暖的夏日傍晚，蟋蟀持續的鳴叫聲充滿了寧靜的花園空氣。"
  },
  {
    "word": "criminal",
    "pos": "n./adj.",
    "cn_def": "罪犯；犯罪的",
    "en_def": "a person who has committed a crime; relating to illegal acts",
    "sentence": "Selling pirated movies and illegal counterfeit goods is considered a serious {{BLANK}} act under federal law.",
    "cn": "販賣盜版電影與非法仿冒品在聯邦法律下被視為嚴重的犯罪行為。"
  },
  {
    "word": "darling",
    "pos": "n./adj.",
    "cn_def": "親愛的；心愛的人",
    "en_def": "a dearly loved person; beloved, charming, or endearing",
    "sentence": "She tucked her {{BLANK}} daughter into bed and read her a sweet bedtime story.",
    "cn": "她為自己心愛的女兒蓋好被子，並為她讀了一個甜蜜的睡前故事。"
  },
  {
    "word": "definition",
    "pos": "n.",
    "cn_def": "定義；清晰度",
    "en_def": "a statement of the exact meaning of a word; clarity or sharpness",
    "sentence": "When reading complex legal documents, you must look up the exact {{BLANK}} of technical terms.",
    "cn": "閱讀複雜的法律文件時，你必須查閱專業術語的精確定義。"
  },
  {
    "word": "define",
    "pos": "v.",
    "cn_def": "定義；明確界定",
    "en_def": "to state or describe exactly the nature, scope, or meaning of",
    "sentence": "The committee needs to {{BLANK}} the scope of the new project before allocating financial resources.",
    "cn": "委員會在分配財務資源之前，需要明確界定新專案的範疇。"
  }
];

const MCQS = [
  {
    "q": "The Arctic winds brought ______ cold to the northern region, forcing schools and businesses to close.",
    "options": [
      "cheerful",
      "darling",
      "bitter",
      "charming"
    ],
    "answer": 2,
    "cn": "北極寒風給北部地區帶來了嚴寒，迫使學校與企業關閉。",
    "vocabIndex": 0
  },
  {
    "q": "The quaint village retains an undeniable rustic ______, which appeals to city dwellers looking for peace.",
    "options": [
      "cricket",
      "charm",
      "crane",
      "definition"
    ],
    "answer": 1,
    "cn": "這座古雅的村莊保有無法抗拒的鄉村魅力，吸引著尋求平靜的城市居民。",
    "vocabIndex": 1
  },
  {
    "q": "Despite working long hours every day, Mary always greets her customers with a ______ smile.",
    "options": [
      "bitter",
      "criminal",
      "charming",
      "cheerful"
    ],
    "answer": 3,
    "cn": "儘管每天工時很長，瑪麗總是帶著開朗的微笑迎接顧客。",
    "vocabIndex": 3
  },
  {
    "q": "On the construction site, a huge mechanical ______ was used to hoist the heavy steel girders into place.",
    "options": [
      "crane",
      "cricket",
      "charm",
      "definition"
    ],
    "answer": 0,
    "cn": "在建築工地上，一台巨大的機械起重機被用來將沉重的鋼梁吊裝到位。",
    "vocabIndex": 4
  },
  {
    "q": "As we sat on the porch at dusk, the gentle chirping of a ______ was the only sound breaking the silence.",
    "options": [
      "criminal",
      "cricket",
      "darling",
      "crane"
    ],
    "answer": 1,
    "cn": "當我們在黃昏坐在門廊時，蟋蟀輕柔的鳴叫聲是打破寧靜的唯一聲音。",
    "vocabIndex": 5
  },
  {
    "q": "Stealing proprietary source code from the tech company was deemed a serious ______ offense.",
    "options": [
      "charming",
      "bitter",
      "criminal",
      "cheerful"
    ],
    "answer": 2,
    "cn": "從這家科技公司竊取專有原始碼被視為嚴重的犯罪違法行為。",
    "vocabIndex": 6
  },
  {
    "q": "The grandmother always refers to her youngest grandchild as her sweet little ______.",
    "options": [
      "darling",
      "crane",
      "definition",
      "cricket"
    ],
    "answer": 0,
    "cn": "祖母總是把她最小的孫子稱作她可愛心愛的小寶貝。",
    "vocabIndex": 7
  },
  {
    "q": "If you are unsure about the precise meaning of this medical term, consult the dictionary for its ______.",
    "options": [
      "crane",
      "charm",
      "criminal",
      "definition"
    ],
    "answer": 3,
    "cn": "如果你對這個醫學術語的精確意義不確定，請查閱字典以獲取其定義。",
    "vocabIndex": 8
  },
  {
    "q": "The leader was asked to clearly ______ the project goals so that all team members understood their roles.",
    "options": [
      "define",
      "bitter",
      "charm",
      "crane"
    ],
    "answer": 0,
    "cn": "該領導者被要求清楚界定專案目標，以便所有團隊成員了解各自的職責。",
    "vocabIndex": 9
  },
  {
    "q": "Because of the dense crowd in front of him, the tourist had to ______ his neck to view the monument.",
    "options": [
      "cricket",
      "charm",
      "crane",
      "define"
    ],
    "answer": 2,
    "cn": "由於前方人群密集，這名遊客不得不伸長脖子觀看紀念碑。",
    "vocabIndex": 4
  },
  {
    "q": "The two former business partners engaged in a ______ dispute over the distribution of company assets.",
    "options": [
      "charming",
      "bitter",
      "cheerful",
      "darling"
    ],
    "answer": 1,
    "cn": "這兩位前商業合夥人就公司資產的分配展開了激烈的爭吵。",
    "vocabIndex": 0
  },
  {
    "q": "The salesman used his natural ______ to win over the skeptical clients and close the deal.",
    "options": [
      "definition",
      "criminal",
      "crane",
      "charm"
    ],
    "answer": 3,
    "cn": "這位業務員運用他天生的魅力贏得了持懷疑態度的客戶並促成交易。",
    "vocabIndex": 1
  },
  {
    "q": "The bright yellow curtains gave the previously gloomy bedroom a much more ______ appearance.",
    "options": [
      "cheerful",
      "criminal",
      "bitter",
      "crane"
    ],
    "answer": 0,
    "cn": "明亮的黃色窗簾讓原本陰暗的臥室呈現出更加明亮愉悅的外觀。",
    "vocabIndex": 3
  },
  {
    "q": "Flocks of migrating ______ rest on the wetlands each November before continuing south.",
    "options": [
      "crickets",
      "cranes",
      "definitions",
      "criminals"
    ],
    "answer": 1,
    "cn": "每年十一月，成群的遷徙鶴類都會在濕地上休息，然後繼續向南飛行。",
    "vocabIndex": 4
  },
  {
    "q": "In the game of ______, players use a wooden bat to hit a hard leather ball on an oval field.",
    "options": [
      "definition",
      "charm",
      "crane",
      "cricket"
    ],
    "answer": 3,
    "cn": "在板球運動中，選手在橢圓形場地上使用木製球棒擊打堅硬的皮球。",
    "vocabIndex": 5
  },
  {
    "q": "The convicted ______ was sentenced to ten years of imprisonment for aggravated burglary.",
    "options": [
      "darling",
      "cricket",
      "criminal",
      "crane"
    ],
    "answer": 2,
    "cn": "這名被定罪的罪犯因嚴重入室盜竊罪被判處十年徒刑。",
    "vocabIndex": 6
  },
  {
    "q": "The young author became the new ______ of the literary circle after publishing her breakthrough novel.",
    "options": [
      "darling",
      "definition",
      "crane",
      "charm"
    ],
    "answer": 0,
    "cn": "在出版她的突破性小說後，這位年輕作家成為了文壇的新寵兒。",
    "vocabIndex": 7
  },
  {
    "q": "The screen's ultra-high ______ allows video editors to inspect microscopic visual flaws easily.",
    "options": [
      "criminal",
      "crane",
      "definition",
      "cricket"
    ],
    "answer": 2,
    "cn": "螢幕的超高清晰度使影片剪輯人員能輕鬆檢查微小的視覺瑕疵。",
    "vocabIndex": 8
  },
  {
    "q": "It is difficult to ______ true happiness in purely financial terms, as emotional factors play a key role.",
    "options": [
      "crane",
      "define",
      "charm",
      "cricket"
    ],
    "answer": 1,
    "cn": "很難純粹用金錢來定義真正的幸福，因為情感因素起著關鍵作用。",
    "vocabIndex": 9
  },
  {
    "q": "He was still ______ about being passed over for promotion in favor of a newer employee.",
    "options": [
      "cheerful",
      "darling",
      "charming",
      "bitter"
    ],
    "answer": 3,
    "cn": "他對自己被忽視升職、反而拔擢新進員工一事仍然感到忿忿不平。",
    "vocabIndex": 0
  },
  {
    "q": "The cozy little cafe with its vintage wooden furniture was completely ______.",
    "options": [
      "bitter",
      "criminal",
      "charming",
      "definition"
    ],
    "answer": 2,
    "cn": "那家擁有復古木質家具的溫馨小咖啡館非常迷人。",
    "vocabIndex": 2
  },
  {
    "q": "The volunteers maintained a ______ mood even when heavy rain disrupted the charity marathon.",
    "options": [
      "cheerful",
      "darling",
      "bitter",
      "criminal"
    ],
    "answer": 0,
    "cn": "即使大雨打亂了慈善馬拉松，志工們仍然保持著開朗的心情。",
    "vocabIndex": 3
  },
  {
    "q": "The harbor was crowded with shipping vessels and towering cargo ______ loading freight.",
    "options": [
      "charms",
      "cranes",
      "crickets",
      "definitions"
    ],
    "answer": 1,
    "cn": "港口擠滿了貨船以及正在裝載貨物的高聳貨運起重機。",
    "vocabIndex": 4
  },
  {
    "q": "Law enforcement launched an extensive manhunt to capture the escaped ______.",
    "options": [
      "cricket",
      "definition",
      "darling",
      "criminal"
    ],
    "answer": 3,
    "cn": "執法人員展開了大規模搜捕，以抓捕逃跑的罪犯。",
    "vocabIndex": 6
  },
  {
    "q": "Before writing the legal brief, the lawyer needed to review the statutory ______ of intellectual property.",
    "options": [
      "crane",
      "cricket",
      "definition",
      "charm"
    ],
    "answer": 2,
    "cn": "在撰寫法律訴狀之前，律師需要審視智慧財產權的法定定義。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "bitter": {
    "pos": "adj.",
    "en_def": "having a sharp, pungent taste; resentful; extremely cold",
    "cn_def": "苦的；嚴寒的；怨恨的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a sharp, pungent taste; resentful; extremely cold",
        "cn_def": "苦的；嚴寒的；怨恨的"
      }
    ]
  },
  "charm": {
    "pos": "n./v.",
    "en_def": "the power of attracting or pleasing others; to delight greatly",
    "cn_def": "魅力；符咒；吸引",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "the power of attracting or pleasing others; to delight greatly",
        "cn_def": "魅力；符咒；吸引"
      }
    ]
  },
  "charming": {
    "pos": "adj.",
    "en_def": "pleasant, delightful, and attractive",
    "cn_def": "迷人的；有魅力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasant, delightful, and attractive",
        "cn_def": "迷人的；有魅力的"
      }
    ]
  },
  "cheerful": {
    "pos": "adj.",
    "en_def": "noticeably happy and optimistic; causing good feelings",
    "cn_def": "開朗的；令人愉快的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "noticeably happy and optimistic; causing good feelings",
        "cn_def": "開朗的；令人愉快的"
      }
    ]
  },
  "crane": {
    "pos": "n./v.",
    "en_def": "a large long-legged bird; a lifting machine; to stretch out one's neck",
    "cn_def": "鶴；起重機；伸長(脖子)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a large long-legged bird; a lifting machine; to stretch out one's neck",
        "cn_def": "鶴；起重機；伸長(脖子)"
      }
    ]
  },
  "cranes": {
    "pos": "n./v.",
    "en_def": "a large long-legged bird; a lifting machine; to stretch out one's neck",
    "cn_def": "鶴；起重機；伸長(脖子)",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a large long-legged bird; a lifting machine; to stretch out one's neck",
        "cn_def": "鶴；起重機；伸長(脖子)"
      }
    ]
  },
  "cricket": {
    "pos": "n.",
    "en_def": "a jumping insect that makes chirping sounds; a popular bat-and-ball sport",
    "cn_def": "蟋蟀；板球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a jumping insect that makes chirping sounds; a popular bat-and-ball sport",
        "cn_def": "蟋蟀；板球"
      }
    ]
  },
  "crickets": {
    "pos": "n.",
    "en_def": "a jumping insect that makes chirping sounds; a popular bat-and-ball sport",
    "cn_def": "蟋蟀；板球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a jumping insect that makes chirping sounds; a popular bat-and-ball sport",
        "cn_def": "蟋蟀；板球"
      }
    ]
  },
  "criminal": {
    "pos": "n./adj.",
    "en_def": "a person who has committed a crime; relating to illegal acts",
    "cn_def": "罪犯；犯罪的",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "a person who has committed a crime; relating to illegal acts",
        "cn_def": "罪犯；犯罪的"
      }
    ]
  },
  "darling": {
    "pos": "n./adj.",
    "en_def": "a dearly loved person; beloved, charming, or endearing",
    "cn_def": "親愛的；心愛的人",
    "combined": [
      {
        "pos": "n./adj.",
        "en_def": "a dearly loved person; beloved, charming, or endearing",
        "cn_def": "親愛的；心愛的人"
      }
    ]
  },
  "definition": {
    "pos": "n.",
    "en_def": "a statement of the exact meaning of a word; clarity or sharpness",
    "cn_def": "定義；清晰度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement of the exact meaning of a word; clarity or sharpness",
        "cn_def": "定義；清晰度"
      }
    ]
  },
  "define": {
    "pos": "v.",
    "en_def": "to state or describe exactly the nature, scope, or meaning of",
    "cn_def": "定義；明確界定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to state or describe exactly the nature, scope, or meaning of",
        "cn_def": "定義；明確界定"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
