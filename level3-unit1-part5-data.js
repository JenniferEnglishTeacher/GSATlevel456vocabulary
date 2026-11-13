// Part 5 Quiz Data: suicide – tangerine
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 1-5 - suicide – tangerine",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "suicide",
    "pos": "n.",
    "cn_def": "自殺；自殺行為（不可數）",
    "en_def": "the act of intentionally causing one's own death",
    "sentence": "Tragically, many teenagers struggling with severe school bullying have committed {{BLANK}} in recent years.",
    "cn": "令人痛心的是，近年來許多遭受嚴重校園霸凌的青少年自殺身亡。"
  },
  {
    "word": "commit suicide",
    "pos": "v.phr.",
    "cn_def": "自殺；尋短（動詞片語）",
    "en_def": "to intentionally end one's own life",
    "sentence": "After losing all his investments in the stock market crash, the desperate man threatened to {{BLANK}}.",
    "cn": "在股市崩盤中失去所有投資後，這名絕望的男子揚言要自殺。"
  },
  {
    "word": "survey",
    "pos": "n.",
    "cn_def": "民意調查；調查研究（可數）",
    "en_def": "an investigation of the opinions or experiences of a group of people based on a series of questions",
    "sentence": "A recent {{BLANK}} shows that the vast majority of citizens are satisfied with the national healthcare system.",
    "cn": "最近一項調查顯示，絕大多數公民對全民健保體系感到滿意。"
  },
  {
    "word": "surveyed",
    "pos": "v.",
    "cn_def": "調查（民意）；審視；勘察（動詞）",
    "en_def": "to question a group of people in order to collect information; to examine an area carefully",
    "sentence": "Over one thousand local television viewers were {{BLANK}} to better understand which entertainment programs they preferred watching.",
    "cn": "超過一千名當地電視觀眾接受了調查，以便更清楚了解他們偏好收看哪些娛樂節目。"
  },
  {
    "word": "suspected",
    "pos": "v.",
    "cn_def": "懷疑；猜想；疑有（動詞，重音在後 /səˈspekt/）",
    "en_def": "to have an idea of the presence or truth of something without certain proof; to believe someone is guilty",
    "sentence": "The strict high school teacher {{BLANK}} the dishonest student of cheating on the chemistry final exam.",
    "cn": "那位嚴格的高中老師懷疑那個不誠實的學生在化學期末考作弊。"
  },
  {
    "word": "suspect",
    "pos": "n.",
    "cn_def": "嫌疑犯；犯罪嫌疑人（名詞，重音在前 /ˈsʌs.pekt/）",
    "en_def": "a person thought to be guilty of a crime or offense",
    "sentence": "The wealthy businessman immediately became the prime {{BLANK}} after his business partner was mysteriously murdered.",
    "cn": "在商業合夥人被神秘謀殺後，那位富商立即成為了頭號嫌犯。"
  },
  {
    "word": "suspect",
    "pos": "adj.",
    "cn_def": "可疑的；不可靠的；有問題的（形容詞，/ˈsʌs.pekt/）",
    "en_def": "not to be relied on or trusted; possibly dangerous or false",
    "sentence": "His nervous and {{BLANK}} actions in the luxury store immediately caught the sharp attention of the security guard.",
    "cn": "他在精品店中緊張且可疑的舉動立刻引起了警衛的敏銳注意。"
  },
  {
    "word": "suspicion",
    "pos": "n.",
    "cn_def": "懷疑；涉嫌；嫌疑（不可數/可數）",
    "en_def": "a feeling or thought that something is possible, likely, or that someone is guilty",
    "sentence": "Mrs. Watson had a strong {{BLANK}} that her noisy neighbor was secretly stealing fresh flowers from her garden.",
    "cn": "華生太太強烈懷疑她那吵鬧的鄰居在夜間偷偷摘取她花園裡的新鮮花朵。"
  },
  {
    "word": "suspicious",
    "pos": "adj.",
    "cn_def": "可疑的；多疑的；懷疑的",
    "en_def": "having or showing a cautious distrust of someone or something",
    "sentence": "The alert bank clerk became very {{BLANK}} of the nervous young man trying to withdraw a massive amount of cash.",
    "cn": "機警的銀行行員對那位試圖提領巨額現金且神情緊張的年輕人產生了極大懷疑。"
  },
  {
    "word": "doubt",
    "pos": "v.",
    "cn_def": "懷疑；不相信；感到懷疑（動詞）",
    "en_def": "to feel uncertain about something or lack conviction",
    "sentence": "Although the project seems very ambitious, no one can {{BLANK}} her dedication to environmental protection.",
    "cn": "雖然這項企劃看似雄心勃勃，但無人能懷疑她對環境保護的奉獻精神。"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "cn_def": "懷疑；疑問；不確定（不可數/可數）",
    "en_def": "a feeling of uncertainty or lack of conviction",
    "sentence": "Winning the international piano competition was without a {{BLANK}} the greatest and proudest moment of her musical career.",
    "cn": "贏得國際鋼琴大賽毫無疑問是她音樂生涯中最偉大也最引以為傲的時刻。"
  },
  {
    "word": "swan",
    "pos": "n.",
    "cn_def": "天鵝（可數）",
    "en_def": "a large waterbird with a long flexible neck, short legs, and typically all-white plumage",
    "sentence": "In Hans Christian Andersen's beloved fairy tale, the bullied and awkward ugly duckling finally transformed into a graceful white {{BLANK}}.",
    "cn": "在安徒生備受喜愛的童話故事中，那隻飽受欺凌且笨拙的醜小鴨最終蛻變成為了一隻優雅的白天鵝。"
  },
  {
    "word": "swan song",
    "pos": "n.phr.",
    "cn_def": "告別演出；最後絕唱；退隱作",
    "en_def": "the final performance, effort, or accomplishment given by an artist, athlete, or team before retirement or death",
    "sentence": "Tonight's breathtaking and emotional ballet performance at the national theater was the aging ballerina's official {{BLANK}}.",
    "cn": "今晚在國家劇院舉行令人驚嘆且感人肺腑的芭蕾舞演出，是這位年長芭蕾舞者的正式告別作／最後絕唱。"
  },
  {
    "word": "tangerine",
    "pos": "n.",
    "cn_def": "橘子；椪柑；柑橘（可數）",
    "en_def": "a small, sweet citrus fruit with a loose orange skin that peels easily",
    "sentence": "My grandmother kindly peeled a sweet and juicy {{BLANK}} and shared the delicious slices with the excited children.",
    "cn": "我祖母慈祥地剝開一顆酸甜多汁的椪柑／橘子，將美味的果瓣分給興奮的孩子們享用。"
  }
];

const MCQS = [
  {
    "q": "The city library asked three hundred readers to answer a paper ______ about their reading habits.",
    "options": [
      "swan",
      "suicide",
      "tangerine",
      "survey"
    ],
    "answer": 3,
    "cn": "市立圖書館請三百名讀者填寫一份關於他們閱讀習慣的紙本調查／問卷。",
    "vocabIndex": 2
  },
  {
    "q": "Police caught the dangerous bank robbery ______ when he was trying to board a flight to Canada.",
    "options": [
      "swan",
      "tangerine",
      "suspect",
      "survey"
    ],
    "answer": 2,
    "cn": "警方在危險的銀行搶案嫌疑犯試圖登上飛往加拿大的航班時抓住了他。",
    "vocabIndex": 4
  },
  {
    "q": "A beautiful white ______ swam peacefully across the cool green lake in the park.",
    "options": [
      "suicide",
      "swan",
      "suspect",
      "survey"
    ],
    "answer": 1,
    "cn": "一隻美麗的白天鵝在公園涼爽的綠色湖面上平靜地游著。",
    "vocabIndex": 11
  },
  {
    "q": "Mom put a sweet, orange ______ into my school lunchbox for my afternoon snack.",
    "options": [
      "tangerine",
      "suspect",
      "survey",
      "suicide"
    ],
    "answer": 0,
    "cn": "媽媽把一顆甜甜的橘色橘子／椪柑放進我的學校便當盒當下午點心。",
    "vocabIndex": 13
  },
  {
    "q": "Bullying is so harmful that schools work hard to stop any student from trying to commit ______.",
    "options": [
      "tangerine",
      "swan",
      "suicide",
      "suspect"
    ],
    "answer": 2,
    "cn": "霸凌極具危害性，因此學校努力阻止任何學生企圖自殺。",
    "vocabIndex": 0
  },
  {
    "q": "The guard looked at the man with deep ______ because he was hiding something under his coat.",
    "options": [
      "swan",
      "suspicion",
      "tangerine",
      "suspect"
    ],
    "answer": 1,
    "cn": "警衛帶著深深的懷疑看著那名男子，因為他在外套底下藏了東西。",
    "vocabIndex": 7
  },
  {
    "q": "There is no ______ in my mind that Lucy is the smartest student in our class.",
    "options": [
      "doubt",
      "tangerine",
      "swan",
      "survey"
    ],
    "answer": 0,
    "cn": "在我心中毫無疑問／懷疑，露西是我們班上最聰明的學生。",
    "vocabIndex": 9
  },
  {
    "q": "According to the national school ______, most teenagers spend two hours online every night.",
    "options": [
      "swan",
      "tangerine",
      "suspect",
      "survey"
    ],
    "answer": 3,
    "cn": "根據全國學校調查，大多數青少年每晚花兩個小時上網。",
    "vocabIndex": 2
  },
  {
    "q": "Detectives arrested a twenty-year-old ______ who was seen running away from the broken shop.",
    "options": [
      "suspect",
      "swan",
      "tangerine",
      "suicide"
    ],
    "answer": 0,
    "cn": "便衣刑警逮捕了一名被看見從遭破壞商店逃跑的二十歲嫌疑犯。",
    "vocabIndex": 4
  },
  {
    "q": "In Chinese culture during the New Year, eating a juicy ______ brings good luck to your family.",
    "options": [
      "survey",
      "suspect",
      "suicide",
      "tangerine"
    ],
    "answer": 3,
    "cn": "在華人過年文化中，吃一顆多汁的椪柑／橘子會為全家帶來好運。",
    "vocabIndex": 13
  },
  {
    "q": "The police ______ that the clever thief entered the house through the open kitchen window.",
    "options": [
      "peel",
      "dive",
      "suspect",
      "stir"
    ],
    "answer": 2,
    "cn": "警方懷疑／猜想那個聰明的竊賊是透過開著的廚房窗戶進入屋內的。",
    "vocabIndex": 4
  },
  {
    "q": "The dark clouds are moving away, so I ______ that it will rain this afternoon.",
    "options": [
      "suspect",
      "doubt",
      "survey",
      "dive"
    ],
    "answer": 1,
    "cn": "烏雲正在散去，所以我懷疑／認為不太可能今天下午會下雨。",
    "vocabIndex": 9
  },
  {
    "q": "The school ______ all parents to find out whether they wanted a longer summer vacation.",
    "options": [
      "surveyed",
      "peeled",
      "stirred",
      "dived"
    ],
    "answer": 0,
    "cn": "學校調查了所有家長，以了解他們是否希望暑假時間更長。",
    "vocabIndex": 3
  },
  {
    "q": "After the storm, the farmer walked around to ______ the broken trees and crops in the field.",
    "options": [
      "suspect",
      "doubt",
      "peel",
      "survey"
    ],
    "answer": 3,
    "cn": "暴風雨過後，農民四處走動以審視／勘察田地裡折斷的樹木與農作物。",
    "vocabIndex": 2
  },
  {
    "q": "The teacher ______ that Tim did not write the essay himself because the words were too advanced.",
    "options": [
      "stirs",
      "peels",
      "suspects",
      "dives"
    ],
    "answer": 2,
    "cn": "老師懷疑／猜想這篇短文不是提姆自己寫的，因為用字實在太深奧了。",
    "vocabIndex": 4
  },
  {
    "q": "It is Sunday, so I ______ that the dentist office is open to see patients today.",
    "options": [
      "survey",
      "doubt",
      "suspect",
      "dive"
    ],
    "answer": 1,
    "cn": "今天是星期天，所以我懷疑／認為不可能牙醫診所今天會開門看診。",
    "vocabIndex": 9
  },
  {
    "q": "The company will ______ five hundred shoppers to see which soft drink tastes the best.",
    "options": [
      "suspect",
      "doubt",
      "peel",
      "survey"
    ],
    "answer": 3,
    "cn": "這家公司將會調查五百位購物者，看看哪種汽水喝起來最美味。",
    "vocabIndex": 2
  },
  {
    "q": "The security guard noticed a ______ man wearing a dark mask standing near the jewelry shop.",
    "options": [
      "sweet",
      "suspicious",
      "calm",
      "polite"
    ],
    "answer": 1,
    "cn": "保全人員注意到一名戴著黑色面具且神情可疑的男子站在珠寶店附近。",
    "vocabIndex": 8
  },
  {
    "q": "The police stopped the car because the driver showed ______ behavior and smelled of wine.",
    "options": [
      "round",
      "fresh",
      "suspect",
      "sunny"
    ],
    "answer": 2,
    "cn": "警察攔下了那輛車，因為駕駛人表現出令人起疑的／可疑的舉止並且有酒味。",
    "vocabIndex": 4
  },
  {
    "q": "You should not click on strange links in emails that look ______ and unfamiliar.",
    "options": [
      "suspicious",
      "polite",
      "sweet",
      "calm"
    ],
    "answer": 0,
    "cn": "你不應該點擊電子郵件中看起來可疑且陌生的奇怪連結。",
    "vocabIndex": 8
  },
  {
    "q": "The teacher told the sad boy that asking for help is always better than wanting to ______.",
    "options": [
      "sing a swan song",
      "conduct a survey",
      "peel a tangerine",
      "commit suicide"
    ],
    "answer": 3,
    "cn": "老師告訴那個悲傷的男孩，尋求協助永遠比想自殺尋短好得多。",
    "vocabIndex": 1
  },
  {
    "q": "Tonight's final basketball match will be the legendary superstar's ______ before he leaves the league.",
    "options": [
      "commit suicide",
      "conduct a survey",
      "swan song",
      "sweet tangerine"
    ],
    "answer": 2,
    "cn": "今晚最後一場籃球賽將是這位傳奇巨星在離開聯盟前的告別之作／最後絕唱。",
    "vocabIndex": 12
  },
  {
    "q": "The hospital will ______ among its doctors to find better ways to care for sick children.",
    "options": [
      "conduct a survey",
      "die by suicide",
      "commit suicide",
      "be a swan song"
    ],
    "answer": 0,
    "cn": "醫院將在醫師群中進行一項調查，以找出照護病童的更好方法。",
    "vocabIndex": 2
  },
  {
    "q": "The old singer's emotional last concert was praised by music critics as a brilliant ______.",
    "options": [
      "paper survey",
      "swan song",
      "prime suspect",
      "sweet tangerine"
    ],
    "answer": 1,
    "cn": "那位老歌手深情的最後一場演唱會被樂評家譽為極為精彩的告別絕唱。",
    "vocabIndex": 12
  },
  {
    "q": "The mental health clinic works night and day so that fewer depressed people ______.",
    "options": [
      "conduct a survey",
      "sing a swan song",
      "eat a tangerine",
      "die by suicide"
    ],
    "answer": 3,
    "cn": "該心理健康診所日夜運作，以便讓更少憂鬱症患者因自殺而逝世。",
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "suicide": {
    "pos": "n.",
    "en_def": "the act of intentionally causing one's own death",
    "cn_def": "自殺；自殺行為（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of intentionally causing one's own death",
        "cn_def": "自殺；自殺行為（不可數）"
      }
    ]
  },
  "commit suicide": {
    "pos": "v.phr.",
    "en_def": "to intentionally end one's own life",
    "cn_def": "自殺；尋短（動詞片語）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to intentionally end one's own life",
        "cn_def": "自殺；尋短（動詞片語）"
      }
    ]
  },
  "survey": {
    "pos": "n.",
    "en_def": "an investigation of the opinions or experiences of a group of people based on a series of questions",
    "cn_def": "民意調查；調查研究（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an investigation of the opinions or experiences of a group of people based on a series of questions",
        "cn_def": "民意調查；調查研究（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to question a group of people in order to collect information; to examine an area carefully",
        "cn_def": "調查（民意）；審視；勘察（動詞）"
      }
    ]
  },
  "surveyed": {
    "pos": "v.",
    "en_def": "to question a group of people in order to collect information; to examine an area carefully",
    "cn_def": "調查（民意）；審視；勘察（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to question a group of people in order to collect information; to examine an area carefully",
        "cn_def": "調查（民意）；審視；勘察（動詞）"
      }
    ]
  },
  "suspect": {
    "pos": "v.",
    "en_def": "to have an idea of the presence or truth of something without certain proof; to believe someone is guilty",
    "cn_def": "懷疑；猜想；疑有（動詞，重音在後 /səˈspekt/）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have an idea of the presence or truth of something without certain proof; to believe someone is guilty",
        "cn_def": "懷疑；猜想；疑有（動詞，重音在後 /səˈspekt/）"
      },
      {
        "pos": "n.",
        "en_def": "a person thought to be guilty of a crime or offense",
        "cn_def": "嫌疑犯；犯罪嫌疑人（名詞，重音在前 /ˈsʌs.pekt/）"
      },
      {
        "pos": "adj.",
        "en_def": "not to be relied on or trusted; possibly dangerous or false",
        "cn_def": "可疑的；不可靠的；有問題的（形容詞，/ˈsʌs.pekt/）"
      }
    ]
  },
  "suspected": {
    "pos": "v.",
    "en_def": "to have an idea of the presence or truth of something without certain proof; to believe someone is guilty",
    "cn_def": "懷疑；猜想；疑有（動詞，重音在後 /səˈspekt/）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have an idea of the presence or truth of something without certain proof; to believe someone is guilty",
        "cn_def": "懷疑；猜想；疑有（動詞，重音在後 /səˈspekt/）"
      }
    ]
  },
  "suspicion": {
    "pos": "n.",
    "en_def": "a feeling or thought that something is possible, likely, or that someone is guilty",
    "cn_def": "懷疑；涉嫌；嫌疑（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling or thought that something is possible, likely, or that someone is guilty",
        "cn_def": "懷疑；涉嫌；嫌疑（不可數/可數）"
      }
    ]
  },
  "suspicious": {
    "pos": "adj.",
    "en_def": "having or showing a cautious distrust of someone or something",
    "cn_def": "可疑的；多疑的；懷疑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing a cautious distrust of someone or something",
        "cn_def": "可疑的；多疑的；懷疑的"
      }
    ]
  },
  "doubt": {
    "pos": "v.",
    "en_def": "to feel uncertain about something or lack conviction",
    "cn_def": "懷疑；不相信；感到懷疑（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to feel uncertain about something or lack conviction",
        "cn_def": "懷疑；不相信；感到懷疑（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a feeling of uncertainty or lack of conviction",
        "cn_def": "懷疑；疑問；不確定（不可數/可數）"
      }
    ]
  },
  "swan": {
    "pos": "n.",
    "en_def": "a large waterbird with a long flexible neck, short legs, and typically all-white plumage",
    "cn_def": "天鵝（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large waterbird with a long flexible neck, short legs, and typically all-white plumage",
        "cn_def": "天鵝（可數）"
      }
    ]
  },
  "swan song": {
    "pos": "n.phr.",
    "en_def": "the final performance, effort, or accomplishment given by an artist, athlete, or team before retirement or death",
    "cn_def": "告別演出；最後絕唱；退隱作",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "the final performance, effort, or accomplishment given by an artist, athlete, or team before retirement or death",
        "cn_def": "告別演出；最後絕唱；退隱作"
      }
    ]
  },
  "tangerine": {
    "pos": "n.",
    "en_def": "a small, sweet citrus fruit with a loose orange skin that peels easily",
    "cn_def": "橘子；椪柑；柑橘（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small, sweet citrus fruit with a loose orange skin that peels easily",
        "cn_def": "橘子；椪柑；柑橘（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
