// Lesson 97 Quiz Data: Media Press, Velocity, Achievement, Communication & Concerns
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 97 - Media Press, Velocity, Achievement, Communication & Concerns",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "press",
    "pos": "n. / v.",
    "cn_def": "新聞媒體；按壓",
    "en_def": "newspapers and journalists; to push firmly against something",
    "sentence": "The government held an urgent press conference to address public concerns, and the minister took questions from the {{BLANK}}.",
    "cn": "政府召開緊急新聞發布會以回應公眾關切，部長接受了新聞媒體記者的提問。"
  },
  {
    "word": "rapid",
    "pos": "adj.",
    "cn_def": "快速的；迅速的",
    "en_def": "happening in a short period of time or at great speed",
    "sentence": "The widespread use of smartphones has led to {{BLANK}} development in electronic payment systems across Asia.",
    "cn": "智慧型手機的廣泛普及引發了全亞洲電子支付系統的迅速發展。"
  },
  {
    "word": "speed",
    "pos": "n. / v.",
    "cn_def": "速度；超速行駛",
    "en_def": "the rate at which someone or something moves; to move fast",
    "sentence": "Traffic cameras were installed on the highway to catch reckless drivers who {{BLANK}} over the legal limit.",
    "cn": "高速公路上安裝了測速照相機，以取締超過法定限制超速行駛的魯莽司機。"
  },
  {
    "word": "sharp",
    "pos": "adj.",
    "cn_def": "鋒利的；尖銳的；敏銳的",
    "en_def": "having a thin edge or point that can cut easily; clear and quick-witted",
    "sentence": "The chef used an exceptionally {{BLANK}} knife to slice the raw tuna fillets into delicate pieces.",
    "cn": "主廚使用一把異常鋒利的刀子，將生鮪魚柳切成細緻薄片。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達成；實現",
    "en_def": "to successfully finish or gain something after hard work",
    "sentence": "With continuous discipline and daily practice, the young athlete hoped to {{BLANK}} his dream of an Olympic medal.",
    "cn": "憑藉持續的自律與每日訓練，這位年輕運動員希望能實現奪得奧運獎牌的夢想。"
  },
  {
    "word": "reach",
    "pos": "v.",
    "cn_def": "抵達；伸手觸及",
    "en_def": "to arrive at a place; to stretch out an arm to touch something",
    "sentence": "After climbing steep mountain paths for six exhausting hours, the hikers finally managed to {{BLANK}} the summit.",
    "cn": "在陡峭山徑上艱難攀登了筋疲力竭的六小時後，登山客們終於成功抵達了山頂。"
  },
  {
    "word": "regard",
    "pos": "v. / n.",
    "cn_def": "看待；尊重；問候",
    "en_def": "to consider or think of in a particular way; respect",
    "sentence": "Many literary critics {{BLANK}} this classic novel as one of the greatest masterpieces of the twentieth century.",
    "cn": "許多文學評論家將這本經典小說視為二十世紀最偉大的傑作之一。"
  },
  {
    "word": "concern",
    "pos": "n. / v.",
    "cn_def": "擔憂；關切；涉及",
    "en_def": "a feeling of worry; to cause worry to someone",
    "sentence": "Parents expressed deep {{BLANK}} regarding the safety of school pedestrian crossings near busy morning intersections.",
    "cn": "家長們對繁忙晨間十字路口附近的學校行人穿越道安全表達了深切的擔憂。"
  },
  {
    "word": "reply",
    "pos": "v. / n.",
    "cn_def": "回覆；答覆",
    "en_def": "to answer someone by words or writing; an answer",
    "sentence": "I sent an urgent email inquiry to the airline customer service desk, but I have received no {{BLANK}} yet.",
    "cn": "我給航空公司客服處寄去了一封緊急電子郵件諮詢，但我至今尚未收到回覆。"
  },
  {
    "word": "result",
    "pos": "n. / v.",
    "cn_def": "結果；後果；成效",
    "en_def": "something that happens because of something else; an outcome",
    "sentence": "The hard work of the research team produced an impressive {{BLANK}} that was published in a prestigious journal.",
    "cn": "研究團隊的辛勤工作產生了令人矚目的成果（結果），該成果發表在一本聲譽卓著的期刊上。"
  }
];

const MCQS = [
  {
    "q": "Reputable journalists from international ______ agencies gathered in the capital to cover the presidential election.",
    "options": [
      "speed",
      "press",
      "result",
      "concern"
    ],
    "answer": 1,
    "cn": "來自國際新聞機構的信譽卓著記者聚集在首都，採訪報導總統大選。 【選項解析】(A) speed 速度  (B) press 媒體  (C) result 結果  (D) concern 關切。press agencies 指「新聞通訊社」。",
    "vocabIndex": 0
  },
  {
    "q": "The technology company achieved ______ economic growth after introducing its innovative artificial intelligence tools.",
    "options": [
      "sharp",
      "result",
      "concern",
      "rapid"
    ],
    "answer": 3,
    "cn": "這家科技公司在推出創新的生成式人工智慧工具後，實現了迅速的經濟成長。 【選項解析】(A) sharp 銳利的  (B) rapid 迅速的  (C) concern 擔憂  (D) result 結果。rapid economic growth 表「迅速經濟成長」。",
    "vocabIndex": 1
  },
  {
    "q": "Driving at high ______ during heavy rain increases the risk of slipping on wet highway pavement.",
    "options": [
      "reply",
      "press",
      "speed",
      "result"
    ],
    "answer": 2,
    "cn": "大雨期間在高速公路上高速行駛會增加在濕滑路面打滑的危險。 【選項解析】(A) speed 速度  (B) press 媒體  (C) reply 回覆  (D) result 結果。high speed 表「高速」。",
    "vocabIndex": 2
  },
  {
    "q": "Be extremely careful when using those ______ scissors, or you might accidentally cut your fingers.",
    "options": [
      "sharp",
      "rapid",
      "speed",
      "press"
    ],
    "answer": 0,
    "cn": "使用那把鋒利的剪刀時要格外小心，否則你可能會不小心割破手指。 【選項解析】(A) rapid 快速的  (B) sharp 鋒利的  (C) speed 速度  (D) press 按壓。sharp scissors 表「鋒利的剪刀」。",
    "vocabIndex": 3
  },
  {
    "q": "If you work consistently with determination, you will surely ______ your academic goals this semester.",
    "options": [
      "reply",
      "reach",
      "concern",
      "achieve"
    ],
    "answer": 3,
    "cn": "如果你帶著決心堅持不懈地努力，本學期你必定能實現你的學業目標。 【選項解析】(A) reply 回覆  (B) reach 抵達  (C) achieve 實現  (D) concern 擔憂。achieve goals 表「達成目標」。",
    "vocabIndex": 4
  },
  {
    "q": "After traveling on the night train for eight hours, we will ______ Taitung station just in time for sunrise.",
    "options": [
      "reach",
      "achieve",
      "reply",
      "press"
    ],
    "answer": 0,
    "cn": "搭乘夜車行駛八小時後，我們剛好會在日出時抵達台東火車站。 【選項解析】(A) reach 抵達  (B) achieve 達成  (C) reply 回覆  (D) press 按壓。reach Taitung station 表「抵達台東站」。",
    "vocabIndex": 5
  },
  {
    "q": "Most historians ______ this peace treaty as the crucial turning point that ended the long continental war.",
    "options": [
      "reply",
      "achieve",
      "regard",
      "speed"
    ],
    "answer": 2,
    "cn": "多數歷史學家將這份和平條約視為結束這場漫長歐陸戰爭的關鍵轉折點。 【選項解析】(A) reply 回答  (B) regard 視為  (C) achieve 達成  (D) speed 飛馳。regard A as B 表「將A視為B」。",
    "vocabIndex": 6
  },
  {
    "q": "Environmental pollution remains a major ______ for local residents living near industrial chemical plants.",
    "options": [
      "press",
      "concern",
      "speed",
      "reply"
    ],
    "answer": 1,
    "cn": "環境污染依然是居住在化工廠附近當地居民的主要擔憂關切事項。 【選項解析】(A) press 媒體  (B) speed 速度  (C) concern 擔憂  (D) reply 回答。major concern 表「主要擔憂」。",
    "vocabIndex": 7
  },
  {
    "q": "The school principal promised to ______ promptly to the parents' petition regarding cafeteria food hygiene.",
    "options": [
      "reach",
      "achieve",
      "reply",
      "regard"
    ],
    "answer": 2,
    "cn": "校長承諾將就家長們關於學校餐廳食品衛生的請願迅速給予回覆。 【選項解析】(A) reply 回覆  (B) achieve 達成  (C) reach 抵達  (D) regard 視為。reply to petition 表「回覆請願」。",
    "vocabIndex": 8
  },
  {
    "q": "As a direct ______ of regular physical exercise, grandfather's blood pressure returned to a healthy level.",
    "options": [
      "speed",
      "result",
      "concern",
      "press"
    ],
    "answer": 1,
    "cn": "規律運動的直接成效是，祖父的血壓恢復到了健康的水準。 【選項解析】(A) speed 速度  (B) press 媒體  (C) concern 擔憂  (D) result 結果。direct result 表「直接結果」。",
    "vocabIndex": 9
  },
  {
    "q": "Freedom of the ______ is an essential democratic right that allows citizens to stay informed about government decisions.",
    "options": [
      "press",
      "speed",
      "result",
      "concern"
    ],
    "answer": 0,
    "cn": "新聞自由是一項不可或缺的民主權利，能讓公民充分了解政府決策。 【選項解析】(A) press 新聞媒體  (B) speed 速度  (C) result 結果  (D) concern 關心。freedom of the press 表「新聞自由」。",
    "vocabIndex": 0
  },
  {
    "q": "Medical doctors noticed a ______ improvement in the patient's condition after the new medicine was administered.",
    "options": [
      "sharp",
      "speed",
      "result",
      "rapid"
    ],
    "answer": 3,
    "cn": "在施用了新藥物後，醫生們注意到病患的病情出現了迅速的改善。 【選項解析】(A) sharp 銳利的  (B) rapid 迅速的  (C) result 結果  (D) speed 速度。rapid improvement 表「迅速好轉」。",
    "vocabIndex": 1
  },
  {
    "q": "Police officers used handheld radar guns to monitor traffic ______ along the winding mountain highway.",
    "options": [
      "result",
      "reply",
      "speed",
      "press"
    ],
    "answer": 2,
    "cn": "警官們使用手持雷達測速槍監控蜿蜒山區公路沿線的交通車速。 【選項解析】(A) result 結果  (B) reply 回覆  (C) speed 速度  (D) press 媒體。traffic speed 表「行車速度」。",
    "vocabIndex": 2
  },
  {
    "q": "The teacher has a very ______ memory for historical dates and names, never forgetting a single detail.",
    "options": [
      "sharp",
      "rapid",
      "speed",
      "press"
    ],
    "answer": 0,
    "cn": "老師對歷史年代與人名有著非常敏銳清晰的記憶力，從不遺漏任何細節。 【選項解析】(A) sharp 敏銳的  (B) rapid 快速的  (C) speed 速度  (D) press 媒體。sharp memory 表「敏銳清晰的記憶力」。",
    "vocabIndex": 3
  },
  {
    "q": "The dedicated charity foundation worked tirelessly to ______ its mission of providing clean drinking water to remote villages.",
    "options": [
      "reach",
      "regard",
      "reply",
      "achieve"
    ],
    "answer": 3,
    "cn": "這家熱心的慈善基金會不知疲倦地工作，以實現為偏遠村莊提供乾淨飲用水的使命。 【選項解析】(A) reach 抵達  (B) achieve 實現  (C) reply 回覆  (D) regard 視為。achieve its mission 表「實現其使命」。",
    "vocabIndex": 4
  },
  {
    "q": "Can you please stretch your arm and see if you can ______ the dictionary on the uppermost bookshelf?",
    "options": [
      "achieve",
      "reach",
      "reply",
      "press"
    ],
    "answer": 1,
    "cn": "能否請你伸展手臂，看你能不能夠到最高層書架上的字典？ 【選項解析】(A) achieve 達成  (B) reply 回答  (C) reach 伸手夠到  (D) press 按壓。reach the book on the shelf 表「夠到書架上的書」。",
    "vocabIndex": 5
  },
  {
    "q": "Please give my warmest ______ to your grandparents when you return home to visit them this weekend.",
    "options": [
      "replies",
      "results",
      "speeds",
      "regards"
    ],
    "answer": 3,
    "cn": "這週末你回家探望祖父母時，請代我向他們致以最溫暖誠摯的問候。 【選項解析】(A) replies 回覆  (B) regards 問候  (C) speeds 速度  (D) results 結果。give my regards to 表「向…致意問候」。",
    "vocabIndex": 6
  },
  {
    "q": "The sudden rise in housing prices has caused widespread ______ among young families hoping to purchase a home.",
    "options": [
      "speed",
      "press",
      "concern",
      "result"
    ],
    "answer": 2,
    "cn": "房價的突然上漲引發了渴望購屋的年輕家庭廣泛的擔憂。 【選項解析】(A) speed 速度  (B) press 媒體  (C) concern 擔憂  (D) result 結果。widespread concern 表「廣泛擔憂」。",
    "vocabIndex": 7
  },
  {
    "q": "When the teacher asked a question about Taiwanese history, several eager students raised their hands to ______.",
    "options": [
      "reach",
      "reply",
      "achieve",
      "regard"
    ],
    "answer": 1,
    "cn": "當老師提出一個關於台灣歷史的問題時，幾位積極的學生舉手回答。 【選項解析】(A) reply 回答  (B) reach 觸及  (C) achieve 達成  (D) regard 視為。raised hands to reply 表「舉手作答」。",
    "vocabIndex": 8
  },
  {
    "q": "The final examination ______ will be posted on the school bulletin board next Monday morning.",
    "options": [
      "results",
      "speed",
      "presses",
      "concerns"
    ],
    "answer": 0,
    "cn": "期末考試的成績結果將於下週一早晨張貼在學校公佈欄上。 【選項解析】(A) speed 速度  (B) results 結果；成績  (C) presses 媒體  (D) concerns 擔憂。examination results 表「考試成績」。",
    "vocabIndex": 9
  },
  {
    "q": "The president invited foreign ______ correspondents to the palace for a special briefing on international trade.",
    "options": [
      "speed",
      "result",
      "press",
      "concern"
    ],
    "answer": 2,
    "cn": "總統邀請駐外媒體通訊記者前往總統府，就國際貿易進行專案簡報。 【選項解析】(A) speed 速度  (B) press 媒體  (C) result 結果  (D) concern 擔憂。foreign press correspondents 表「外國新聞記者」。",
    "vocabIndex": 0
  },
  {
    "q": "There has been a ______ rise in electric vehicle sales across Europe over the past two years.",
    "options": [
      "sharp",
      "speed",
      "press",
      "rapid"
    ],
    "answer": 3,
    "cn": "過去兩年來全歐洲的電動車銷售量出現了迅速增長。 【選項解析】(A) sharp 鋒利的  (B) speed 速度  (C) rapid 迅速的  (D) press 媒體。rapid rise 表「迅速攀升」。",
    "vocabIndex": 1
  },
  {
    "q": "The high-speed bullet train travels at a maximum ______ of three hundred kilometers per hour.",
    "options": [
      "result",
      "speed",
      "press",
      "concern"
    ],
    "answer": 1,
    "cn": "高速子彈列車以每小時最高三百公里的速度行駛疾馳。 【選項解析】(A) result 結果  (B) speed 速度  (C) press 媒體  (D) concern 擔憂。at a maximum speed of 表「以最高時速…」。",
    "vocabIndex": 2
  },
  {
    "q": "Look at that eagle circling in the sky; it has exceptionally ______ eyesight to spot mice in the grass.",
    "options": [
      "sharp",
      "speed",
      "rapid",
      "press"
    ],
    "answer": 0,
    "cn": "看那隻在空中盤旋的老鷹，牠有著格外敏銳的視力，能發現草叢中的老鼠。 【選項解析】(A) rapid 迅速的  (B) speed 速度  (C) sharp 敏銳的  (D) press 媒體。sharp eyesight 表「敏銳視力」。",
    "vocabIndex": 3
  },
  {
    "q": "With great courage and team collaboration, the rescue squad was able to ______ the trapped miners safely.",
    "options": [
      "reply",
      "achieve",
      "reach",
      "regard"
    ],
    "answer": 2,
    "cn": "憑藉巨大的勇氣與團隊協作，搜救隊成功安全接觸到了受困礦工。 【選項解析】(A) reach 抵達；接觸到  (B) achieve 達成  (C) reply 回覆  (D) regard 視為。reach the trapped miners 表「接觸/抵達受困礦工處」。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "press": {
    "pos": "n. / v.",
    "en_def": "newspapers and journalists; to push firmly against something",
    "cn_def": "新聞媒體；按壓",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "newspapers and journalists; to push firmly against something",
        "cn_def": "新聞媒體；按壓"
      }
    ]
  },
  "rapid": {
    "pos": "adj.",
    "en_def": "happening in a short period of time or at great speed",
    "cn_def": "快速的；迅速的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening in a short period of time or at great speed",
        "cn_def": "快速的；迅速的"
      }
    ]
  },
  "speed": {
    "pos": "n. / v.",
    "en_def": "the rate at which someone or something moves; to move fast",
    "cn_def": "速度；超速行駛",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the rate at which someone or something moves; to move fast",
        "cn_def": "速度；超速行駛"
      }
    ]
  },
  "sharp": {
    "pos": "adj.",
    "en_def": "having a thin edge or point that can cut easily; clear and quick-witted",
    "cn_def": "鋒利的；尖銳的；敏銳的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a thin edge or point that can cut easily; clear and quick-witted",
        "cn_def": "鋒利的；尖銳的；敏銳的"
      }
    ]
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to successfully finish or gain something after hard work",
    "cn_def": "達成；實現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to successfully finish or gain something after hard work",
        "cn_def": "達成；實現"
      }
    ]
  },
  "reach": {
    "pos": "v.",
    "en_def": "to arrive at a place; to stretch out an arm to touch something",
    "cn_def": "抵達；伸手觸及",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to arrive at a place; to stretch out an arm to touch something",
        "cn_def": "抵達；伸手觸及"
      }
    ]
  },
  "regard": {
    "pos": "v. / n.",
    "en_def": "to consider or think of in a particular way; respect",
    "cn_def": "看待；尊重；問候",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to consider or think of in a particular way; respect",
        "cn_def": "看待；尊重；問候"
      }
    ]
  },
  "concern": {
    "pos": "n. / v.",
    "en_def": "a feeling of worry; to cause worry to someone",
    "cn_def": "擔憂；關切；涉及",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a feeling of worry; to cause worry to someone",
        "cn_def": "擔憂；關切；涉及"
      }
    ]
  },
  "reply": {
    "pos": "v. / n.",
    "en_def": "to answer someone by words or writing; an answer",
    "cn_def": "回覆；答覆",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to answer someone by words or writing; an answer",
        "cn_def": "回覆；答覆"
      }
    ]
  },
  "result": {
    "pos": "n. / v.",
    "en_def": "something that happens because of something else; an outcome",
    "cn_def": "結果；後果；成效",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "something that happens because of something else; an outcome",
        "cn_def": "結果；後果；成效"
      }
    ]
  },
  "replies": {
    "pos": "",
    "en_def": "",
    "cn_def": "回覆",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "回覆"
      }
    ]
  },
  "results": {
    "pos": "",
    "en_def": "",
    "cn_def": "結果",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "結果"
      }
    ]
  },
  "speeds": {
    "pos": "",
    "en_def": "",
    "cn_def": "速度",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "速度"
      }
    ]
  },
  "regards": {
    "pos": "",
    "en_def": "",
    "cn_def": "問候",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "問候"
      }
    ]
  },
  "presses": {
    "pos": "",
    "en_def": "",
    "cn_def": "媒體",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "媒體"
      }
    ]
  },
  "concerns": {
    "pos": "",
    "en_def": "",
    "cn_def": "擔憂",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "擔憂"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
