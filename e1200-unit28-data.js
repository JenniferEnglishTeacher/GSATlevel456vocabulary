// Unit 28 Quiz Data: Wh-words 疑問詞（第29區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U28 - Wh-words",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "who",
    "pos": "pron.",
    "cn_def": "誰",
    "en_def": "which person",
    "sentence": "Q: {{BLANK}} is that tall girl? — A: She is my cousin, Amy.",
    "cn": "那個高個子女孩是誰？ — 她是我的表妹艾美。"
  },
  {
    "word": "how",
    "pos": "adv.",
    "cn_def": "如何；怎麼樣",
    "en_def": "in what way; in what condition",
    "sentence": "Q: {{BLANK}} is your grandma today? — A: She is much better, thank you.",
    "cn": "你奶奶今天好嗎？ — 她好多了，謝謝你。"
  },
  {
    "word": "what",
    "pos": "pron.",
    "cn_def": "什麼",
    "en_def": "which thing",
    "sentence": "Q: {{BLANK}} do you usually do after school? — A: I usually play basketball with my friends.",
    "cn": "你放學後通常做什麼？ — 我通常和朋友打籃球。"
  },
  {
    "word": "where",
    "pos": "adv.",
    "cn_def": "哪裡；何處",
    "en_def": "in or to which place",
    "sentence": "Q: {{BLANK}} does your uncle live? — A: He lives in Kaohsiung. He works at a hospital there.",
    "cn": "你叔叔住在哪裡？ — 他住在高雄，他在那裡的一家醫院工作。"
  },
  {
    "word": "when",
    "pos": "adv.",
    "cn_def": "什麼時候；何時",
    "en_def": "at what time",
    "sentence": "Q: {{BLANK}} do you get up on Sundays? — A: I get up at nine. I don't go to school on Sundays.",
    "cn": "你星期天什麼時候起床？ — 我九點起床。我星期天不用上學。"
  },
  {
    "word": "why",
    "pos": "adv.",
    "cn_def": "為什麼",
    "en_def": "for what reason",
    "sentence": "Q: {{BLANK}} does Tom look sad? — A: Because he can't find his dog.",
    "cn": "湯姆為什麼看起來很難過？ — 因為他找不到他的狗。"
  },
  {
    "word": "whose",
    "pos": "det.",
    "cn_def": "誰的",
    "en_def": "belonging to which person",
    "sentence": "Q: {{BLANK}} notebook is this? Is it yours? — A: No, it isn't. It's Ben's. His name is on it.",
    "cn": "這是誰的筆記本？是你的嗎？ — 不，不是。是班的，上面有他的名字。"
  },
  {
    "word": "which",
    "pos": "det.",
    "cn_def": "哪一個",
    "en_def": "what one of two or more",
    "sentence": "Q: {{BLANK}} bike do you like, the red one or the blue one? — A: I like the blue one. It's really cool.",
    "cn": "你喜歡哪一輛腳踏車，紅色的還是藍色的？ — 我喜歡藍色那輛，它真的很酷。"
  },
  {
    "word": "whether",
    "pos": "conj.",
    "cn_def": "是否",
    "en_def": "if (something is true) or not",
    "sentence": "Q: Does Ben like coffee? — A: I don't know {{BLANK}} he likes it. Let's ask him.",
    "cn": "班喜歡咖啡嗎？ — 我不知道他是否喜歡。我們問問他吧。"
  },
  {
    "word": "while",
    "pos": "conj.",
    "cn_def": "當…的時候",
    "en_def": "during the time that",
    "sentence": "Q: What does your mom do in the evening? — A: She watches TV {{BLANK}} I do my homework.",
    "cn": "你媽媽晚上做什麼？ — 我寫功課的時候，她在看電視。"
  }
];

const MCQS = [
  {
    "q": "______ is that man over there? He is my uncle.",
    "options": [
      "Who",
      "Where",
      "When",
      "Why"
    ],
    "answer": 0,
    "cn": "那個高個子女孩是誰？ — 她是我的表妹艾美。",
    "vocabIndex": 0
  },
  {
    "q": "______ do you go to school? I go by bus.",
    "options": [
      "Who",
      "How",
      "What",
      "Why"
    ],
    "answer": 1,
    "cn": "你奶奶今天好嗎？ — 她好多了，謝謝你。",
    "vocabIndex": 1
  },
  {
    "q": "______ is in the box? It is a birthday present for you.",
    "options": [
      "Where",
      "When",
      "What",
      "Why"
    ],
    "answer": 2,
    "cn": "你放學後通常做什麼？ — 我通常和朋友打籃球。",
    "vocabIndex": 2
  },
  {
    "q": "______ do you live? I live in Taipei, near the zoo.",
    "options": [
      "Who",
      "What",
      "When",
      "Where"
    ],
    "answer": 3,
    "cn": "你叔叔住在哪裡？ — 他住在高雄，他在那裡的一家醫院工作。",
    "vocabIndex": 3
  },
  {
    "q": "______ is your birthday? It is on May 5.",
    "options": [
      "Where",
      "Who",
      "When",
      "Why"
    ],
    "answer": 2,
    "cn": "你星期天什麼時候起床？ — 我九點起床。我星期天不用上學。",
    "vocabIndex": 4
  },
  {
    "q": "______ are you late? Because I missed the bus.",
    "options": [
      "Where",
      "Who",
      "What",
      "Why"
    ],
    "answer": 3,
    "cn": "湯姆為什麼看起來很難過？ — 因為他找不到他的狗。",
    "vocabIndex": 5
  },
  {
    "q": "______ bag is this? It is Amy's. Her name is on it.",
    "options": [
      "Whose",
      "Who",
      "Where",
      "Why"
    ],
    "answer": 0,
    "cn": "這是誰的筆記本？是你的嗎？ — 不，不是。是班的，上面有他的名字。",
    "vocabIndex": 6
  },
  {
    "q": "______ season do you like better, summer or winter? I like summer.",
    "options": [
      "Whose",
      "Which",
      "Who",
      "Where"
    ],
    "answer": 1,
    "cn": "你喜歡哪一輛腳踏車，紅色的還是藍色的？ — 我喜歡藍色那輛，它真的很酷。",
    "vocabIndex": 7
  },
  {
    "q": "I don't know ______ it will rain tomorrow or not. Let's check the weather report.",
    "options": [
      "whether",
      "while",
      "whose",
      "which"
    ],
    "answer": 0,
    "cn": "班喜歡咖啡嗎？ — 我不知道他是否喜歡。我們問問他吧。",
    "vocabIndex": 8
  },
  {
    "q": "Mom cooked dinner ______ Dad was washing the car. They were both busy at the same time.",
    "options": [
      "whether",
      "while",
      "whose",
      "which"
    ],
    "answer": 1,
    "cn": "你媽媽晚上做什麼？ — 我寫功課的時候，她在看電視。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "who": {
    "pos": "pron.",
    "en_def": "which person",
    "cn_def": "誰"
  },
  "where": {
    "pos": "adv.",
    "en_def": "in or to which place",
    "cn_def": "哪裡；何處"
  },
  "when": {
    "pos": "adv.",
    "en_def": "at what time",
    "cn_def": "什麼時候；何時"
  },
  "why": {
    "pos": "adv.",
    "en_def": "for what reason",
    "cn_def": "為什麼"
  },
  "how": {
    "pos": "adv.",
    "en_def": "in what way; in what condition",
    "cn_def": "如何；怎麼樣"
  },
  "what": {
    "pos": "pron.",
    "en_def": "which thing",
    "cn_def": "什麼"
  },
  "whose": {
    "pos": "det.",
    "en_def": "belonging to which person",
    "cn_def": "誰的"
  },
  "which": {
    "pos": "det.",
    "en_def": "what one of two or more",
    "cn_def": "哪一個"
  },
  "whether": {
    "pos": "conj.",
    "en_def": "if (something is true) or not",
    "cn_def": "是否"
  },
  "while": {
    "pos": "conj.",
    "en_def": "during the time that",
    "cn_def": "當…的時候"
  }
};

const EXTRA_GLOSSES = {};
