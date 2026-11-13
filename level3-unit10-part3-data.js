// Part 3 Quiz Data: harvest – quote
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 10-3 - harvest – quote",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "harvest",
    "pos": "n.",
    "cn_def": "收穫；收割；收成（可數/不可數）",
    "en_def": "the process or period of gathering in crops; the quantity of a crop gathered",
    "sentence": "Favorable warm weather and adequate rainfall in spring resulted in a bountiful wheat {{BLANK}} in autumn.",
    "cn": "春季溫暖的氣候與充足的降雨促成了秋天小麥的豐收。"
  },
  {
    "word": "harvest",
    "pos": "v.",
    "cn_def": "收割；採集；收成（動詞）",
    "en_def": "to gather a crop as a harvest; to collect or extract resources",
    "sentence": "Modern green technologies allow high-tech facilities to {{BLANK}} solar energy and convert it into clean electricity.",
    "cn": "現代綠色科技使得高科技設施能夠採集太陽能並將其轉化為乾淨的電力。"
  },
  {
    "word": "merry",
    "pos": "adj.",
    "cn_def": "歡樂的；愉快的；興高采烈的",
    "en_def": "cheerful and lively; joyful and festive",
    "sentence": "Because it was the final day of the semester, students turned on cheerful music to make {{BLANK}} in the courtyard.",
    "cn": "因為這是本學期的最後一天，學生們在院子裡放起歡快的音樂尋歡作樂／盡情狂歡。"
  },
  {
    "word": "oak",
    "pos": "n.",
    "cn_def": "橡樹；橡木（可數/不可數）",
    "en_def": "a large tree that bears acorns and has tough, durable wood; oak wood",
    "sentence": "My grandfather built a heavy dining table crafted completely out of solid {{BLANK}} wood that has lasted forty years.",
    "cn": "我祖父打造了一張完全由堅固橡木精製而成的沉重餐桌，至今已歷經四十年之久。"
  },
  {
    "word": "omit",
    "pos": "v.",
    "cn_def": "略過；遺漏；省略（動詞）",
    "en_def": "to leave out or exclude someone or something, either intentionally or forgetfully",
    "sentence": "When delivering your concise oral summary to the executive board, please {{BLANK}} unnecessary minor details.",
    "cn": "向執行董事會進行簡明口頭摘要報告時，請略過不必要的次要細節。"
  },
  {
    "word": "optimistic",
    "pos": "adj.",
    "cn_def": "樂觀的；抱持希望的",
    "en_def": "hopeful and confident about the future",
    "sentence": "Despite experiencing several commercial setbacks, the ambitious founder remains highly {{BLANK}} about the company's future growth.",
    "cn": "儘管經歷了幾次商業挫折，這位胸懷大志的創辦人對公司未來的成長依然保持高度樂觀。"
  },
  {
    "word": "optimism",
    "pos": "n.",
    "cn_def": "樂觀；樂觀主義（不可數）",
    "en_def": "hopefulness and confidence about the future or the success of something",
    "sentence": "After positive medical trial results were published, a strong wave of {{BLANK}} spread among doctors and patients.",
    "cn": "在正面的臨床試驗結果公布後，一股強烈的樂觀氛圍在醫師與病患間蔓延開來。"
  },
  {
    "word": "ownership",
    "pos": "n.",
    "cn_def": "所有權；產權；責任感（不可數）",
    "en_def": "the act, state, or right of possessing something",
    "sentence": "The official legal documents kept in the safe prove our family's clear {{BLANK}} of this historic countryside cottage.",
    "cn": "存放在保險箱中的正式法律文件證明了我們家族對這棟歷史悠久的鄉村別墅擁有明確的所有權。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "執行；履行；表演；運轉（動詞）",
    "en_def": "to carry out, accomplish, or fulfill an action; to present an entertainment to an audience",
    "sentence": "The chief surgeon prepared thoroughly to {{BLANK}} a delicate five-hour heart operation on the elderly patient.",
    "cn": "外科主任做了充分準備，為這位年邁病患執行／進行一場耗時五小時的精細心臟手術。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "演出；表演；表現；性能（可數/不可數）",
    "en_def": "an act of staging or presenting a play or concert; the execution of an action",
    "sentence": "At the end of the magnificent ballet {{BLANK}}, the audience stood up and clapped enthusiastically for five minutes.",
    "cn": "在壯麗的芭蕾舞演出結束時，全場觀眾起立熱烈鼓掌長達五分鐘。"
  },
  {
    "word": "quoted",
    "pos": "v.",
    "cn_def": "引用；引述；報價（動詞）",
    "en_def": "to repeat or copy out words from a text or speech written or spoken by another person",
    "sentence": "During his inspiring graduation address, the university president {{BLANK}} a famous sentence from William Shakespeare.",
    "cn": "在啟發人心的畢業演說中，大學校長引用了威廉·莎士比亞的一句名言。"
  },
  {
    "word": "quote",
    "pos": "n.",
    "cn_def": "引文；名言；報價單（可數）",
    "en_def": "a quotation from a text or speech; an estimated price given for a job",
    "sentence": "The student opened his history research essay with an insightful {{BLANK}} from Abraham Lincoln about democracy.",
    "cn": "該學生在其歷史研究論文開篇使用了一句亞伯拉罕·林肯關於民主的深刻名言／引文。"
  }
];

const MCQS = [
  {
    "q": "Farmers in the village celebrated with a big feast after a rich corn ______.",
    "options": [
      "oak",
      "ownership",
      "quote",
      "harvest"
    ],
    "answer": 3,
    "cn": "在玉米豐收之後，村裡的農民們舉行盛大的宴會一同慶祝。",
    "vocabIndex": 0
  },
  {
    "q": "The birds built a safe nest in the branches of the giant ______ tree.",
    "options": [
      "quote",
      "harvest",
      "oak",
      "performance"
    ],
    "answer": 2,
    "cn": "鳥兒們在那棵巨大的橡樹枝頭上築了一個安全的小巢。",
    "vocabIndex": 3
  },
  {
    "q": "The legal paper shows that Mr. Adams has full ______ of the new house.",
    "options": [
      "oak",
      "ownership",
      "quote",
      "harvest"
    ],
    "answer": 1,
    "cn": "這份法律文件顯示亞當斯先生對這棟新房子擁有完整的所有權。",
    "vocabIndex": 7
  },
  {
    "q": "After the concert finished, the musicians bowed and thanked the crowd for their ______.",
    "options": [
      "performance",
      "oak",
      "harvest",
      "quote"
    ],
    "answer": 0,
    "cn": "音樂會結束後，音樂家們鞠躬並感謝大家觀賞他們的演出。",
    "vocabIndex": 9
  },
  {
    "q": "Jenny shared an inspiring ______ from her favorite writer in her short speech.",
    "options": [
      "oak",
      "ownership",
      "harvest",
      "quote"
    ],
    "answer": 3,
    "cn": "珍妮在她簡短的演說中分享了來自她最喜愛作家的一段激勵人心的名言／引言。",
    "vocabIndex": 10
  },
  {
    "q": "The kind doctor always shows ______ and believes the medicine will help patients.",
    "options": [
      "harvest",
      "oak",
      "optimism",
      "quote"
    ],
    "answer": 2,
    "cn": "那位仁慈的醫生總是展現樂觀態度，相信藥物會幫助病患。",
    "vocabIndex": 6
  },
  {
    "q": "Children danced in a circle and sang ______ songs on Christmas morning.",
    "options": [
      "merry",
      "solid",
      "raw",
      "bloody"
    ],
    "answer": 0,
    "cn": "在聖誕節早晨，孩子們圍成一圈跳舞並唱著歡樂的歌曲。",
    "vocabIndex": 2
  },
  {
    "q": "Tom is very ______ about the game and feels sure his team will win today.",
    "options": [
      "merry",
      "optimistic",
      "solid",
      "raw"
    ],
    "answer": 1,
    "cn": "湯姆對這場比賽非常樂觀，確信自己的隊伍今天會獲勝。",
    "vocabIndex": 5
  },
  {
    "q": "The little girl smiled in a ______ way when her grandmother gave her a gift.",
    "options": [
      "raw",
      "solid",
      "bloody",
      "merry"
    ],
    "answer": 3,
    "cn": "當祖母送給小女孩禮物時，她露出了歡快開心的笑容。",
    "vocabIndex": 2
  },
  {
    "q": "Even during hard times, keeping an ______ attitude helps you overcome fear.",
    "options": [
      "optimistic",
      "bloody",
      "solid",
      "raw"
    ],
    "answer": 0,
    "cn": "即使在艱困時期，保持樂觀的態度能幫助你克服恐懼。",
    "vocabIndex": 5
  },
  {
    "q": "Farmers wake up very early in autumn to ______ ripe apples in the orchard.",
    "options": [
      "perform",
      "omit",
      "harvest",
      "quote"
    ],
    "answer": 2,
    "cn": "農民們在秋天很早起床，在果園裡採收成熟的蘋果。",
    "vocabIndex": 0
  },
  {
    "q": "When writing your summary, do not ______ any important facts from the story.",
    "options": [
      "harvest",
      "omit",
      "perform",
      "quote"
    ],
    "answer": 1,
    "cn": "撰寫摘要時，不要遺漏／略過故事中的任何重要事實。",
    "vocabIndex": 4
  },
  {
    "q": "The talented young pianist will ______ a classical piece on stage tonight.",
    "options": [
      "perform",
      "omit",
      "harvest",
      "quote"
    ],
    "answer": 0,
    "cn": "那位才華洋溢的年輕鋼琴家今晚將在舞台上演奏／表演一首古典樂曲。",
    "vocabIndex": 8
  },
  {
    "q": "The student ______ two lines of poetry in her short essay about love.",
    "options": [
      "harvested",
      "omitted",
      "quoted",
      "performed"
    ],
    "answer": 2,
    "cn": "那名學生在關於愛情的短文中引用了兩行詩句。",
    "vocabIndex": 10
  },
  {
    "q": "The farm family worked together all weekend to ______ the sweet wheat crops.",
    "options": [
      "quote",
      "omit",
      "perform",
      "harvest"
    ],
    "answer": 3,
    "cn": "農家全家人整個週末齊心協力收割香甜的小麥農作物。",
    "vocabIndex": 0
  },
  {
    "q": "Please check your test paper carefully so that you do not ______ the last question.",
    "options": [
      "harvest",
      "omit",
      "perform",
      "quote"
    ],
    "answer": 1,
    "cn": "請仔細檢查你的試卷，以免你遺漏了最後一題。",
    "vocabIndex": 4
  },
  {
    "q": "Doctors must ______ surgery carefully to save people with heart trouble.",
    "options": [
      "perform",
      "omit",
      "harvest",
      "quote"
    ],
    "answer": 0,
    "cn": "醫生們必須謹慎地進行／執行手術，以拯救患有心臟疾病的病患。",
    "vocabIndex": 8
  },
  {
    "q": "The newspaper reporter ______ the chief of police in the front-page article.",
    "options": [
      "harvested",
      "quoted",
      "performed",
      "omitted"
    ],
    "answer": 1,
    "cn": "報社記者在頭版報導中引述了警察局長的話。",
    "vocabIndex": 10
  },
  {
    "q": "In October, wine makers ______ grapes from the sunny valley to make juice.",
    "options": [
      "perform",
      "omit",
      "harvest",
      "quote"
    ],
    "answer": 2,
    "cn": "十月份，釀酒師從陽光普照的山谷採收葡萄以製作果汁。",
    "vocabIndex": 0
  },
  {
    "q": "The book printer made a mistake and ______ chapter four by accident.",
    "options": [
      "harvested",
      "quoted",
      "performed",
      "omitted"
    ],
    "answer": 3,
    "cn": "書籍印刷廠犯了錯誤，不小心遺漏略過了第四章。",
    "vocabIndex": 4
  },
  {
    "q": "The magician will ______ on the small stage in front of twenty happy children.",
    "options": [
      "harvest",
      "omit",
      "perform",
      "quote"
    ],
    "answer": 2,
    "cn": "魔術師將在小舞台上、在二十位快樂的孩子面前表演。",
    "vocabIndex": 8
  },
  {
    "q": "Can you ______ a lower price for fixing our broken living room window?",
    "options": [
      "harvest",
      "quote",
      "perform",
      "omit"
    ],
    "answer": 1,
    "cn": "修理我們客廳損壞的窗戶，你能報出一個更低的價格嗎？",
    "vocabIndex": 10
  },
  {
    "q": "All of your classmates can come to our picnic, because ______!",
    "options": [
      "the more, the merrier",
      "speak of the devil",
      "a blessing in disguise",
      "brave the elements"
    ],
    "answer": 0,
    "cn": "你所有的同學都可以來參加我們的野餐，因為人越多越熱鬧（越開心）！"
  },
  {
    "q": "Every year, children love to ride the colorful horses on the ______ in the fair.",
    "options": [
      "speed bump",
      "oak barrel",
      "leap of faith",
      "merry-go-round"
    ],
    "answer": 3,
    "cn": "每年園遊會上，孩子們都喜愛騎乘旋轉木馬上色彩繽紛的木馬。",
    "vocabIndex": 2
  },
  {
    "q": "Good employees always take full ______ of their tasks and finish them on time.",
    "options": [
      "ownership of",
      "the more the merrier",
      "merry-go-round",
      "speak of the devil"
    ],
    "answer": 0,
    "cn": "優秀的員工總是對自己的任務展現完全的主人翁責任感並按時完成。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "harvest": {
    "pos": "n.",
    "en_def": "the process or period of gathering in crops; the quantity of a crop gathered",
    "cn_def": "收穫；收割；收成（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process or period of gathering in crops; the quantity of a crop gathered",
        "cn_def": "收穫；收割；收成（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to gather a crop as a harvest; to collect or extract resources",
        "cn_def": "收割；採集；收成（動詞）"
      }
    ]
  },
  "merry": {
    "pos": "adj.",
    "en_def": "cheerful and lively; joyful and festive",
    "cn_def": "歡樂的；愉快的；興高采烈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "cheerful and lively; joyful and festive",
        "cn_def": "歡樂的；愉快的；興高采烈的"
      }
    ]
  },
  "oak": {
    "pos": "n.",
    "en_def": "a large tree that bears acorns and has tough, durable wood; oak wood",
    "cn_def": "橡樹；橡木（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large tree that bears acorns and has tough, durable wood; oak wood",
        "cn_def": "橡樹；橡木（可數/不可數）"
      }
    ]
  },
  "omit": {
    "pos": "v.",
    "en_def": "to leave out or exclude someone or something, either intentionally or forgetfully",
    "cn_def": "略過；遺漏；省略（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave out or exclude someone or something, either intentionally or forgetfully",
        "cn_def": "略過；遺漏；省略（動詞）"
      }
    ]
  },
  "optimistic": {
    "pos": "adj.",
    "en_def": "hopeful and confident about the future",
    "cn_def": "樂觀的；抱持希望的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "hopeful and confident about the future",
        "cn_def": "樂觀的；抱持希望的"
      }
    ]
  },
  "optimism": {
    "pos": "n.",
    "en_def": "hopefulness and confidence about the future or the success of something",
    "cn_def": "樂觀；樂觀主義（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "hopefulness and confidence about the future or the success of something",
        "cn_def": "樂觀；樂觀主義（不可數）"
      }
    ]
  },
  "ownership": {
    "pos": "n.",
    "en_def": "the act, state, or right of possessing something",
    "cn_def": "所有權；產權；責任感（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act, state, or right of possessing something",
        "cn_def": "所有權；產權；責任感（不可數）"
      }
    ]
  },
  "perform": {
    "pos": "v.",
    "en_def": "to carry out, accomplish, or fulfill an action; to present an entertainment to an audience",
    "cn_def": "執行；履行；表演；運轉（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to carry out, accomplish, or fulfill an action; to present an entertainment to an audience",
        "cn_def": "執行；履行；表演；運轉（動詞）"
      }
    ]
  },
  "performance": {
    "pos": "n.",
    "en_def": "an act of staging or presenting a play or concert; the execution of an action",
    "cn_def": "演出；表演；表現；性能（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of staging or presenting a play or concert; the execution of an action",
        "cn_def": "演出；表演；表現；性能（可數/不可數）"
      }
    ]
  },
  "quoted": {
    "pos": "v.",
    "en_def": "to repeat or copy out words from a text or speech written or spoken by another person",
    "cn_def": "引用；引述；報價（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to repeat or copy out words from a text or speech written or spoken by another person",
        "cn_def": "引用；引述；報價（動詞）"
      }
    ]
  },
  "quote": {
    "pos": "v.",
    "en_def": "to repeat or copy out words from a text or speech written or spoken by another person",
    "cn_def": "引用；引述；報價（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to repeat or copy out words from a text or speech written or spoken by another person",
        "cn_def": "引用；引述；報價（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a quotation from a text or speech; an estimated price given for a job",
        "cn_def": "引文；名言；報價單（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
