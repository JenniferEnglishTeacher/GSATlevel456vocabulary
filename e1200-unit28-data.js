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
    "en_def": "",
    "sentence": "Q: {{BLANK}} is that tall girl? — A: She is my cousin, Amy.",
    "cn": "那個高個子女孩是誰？ — 她是我的表妹艾美。"
  },
  {
    "word": "how",
    "pos": "adv.",
    "cn_def": "如何；怎麼樣",
    "en_def": "",
    "sentence": "Q: {{BLANK}} is your grandma today? — A: She is much better, thank you.",
    "cn": "你奶奶今天好嗎？ — 她好多了，謝謝你。"
  },
  {
    "word": "what",
    "pos": "pron.",
    "cn_def": "什麼",
    "en_def": "",
    "sentence": "Q: {{BLANK}} do you usually do after school? — A: I usually play basketball with my friends.",
    "cn": "你放學後通常做什麼？ — 我通常和朋友打籃球。"
  },
  {
    "word": "where",
    "pos": "adv.",
    "cn_def": "哪裡；何處",
    "en_def": "",
    "sentence": "Q: {{BLANK}} does your uncle live? — A: He lives in Kaohsiung. He works at a hospital there.",
    "cn": "你叔叔住在哪裡？ — 他住在高雄，他在那裡的一家醫院工作。"
  },
  {
    "word": "when",
    "pos": "adv.",
    "cn_def": "什麼時候；何時",
    "en_def": "",
    "sentence": "Q: {{BLANK}} do you get up on Sundays? — A: I get up at nine. I don't go to school on Sundays.",
    "cn": "你星期天什麼時候起床？ — 我九點起床。我星期天不用上學。"
  },
  {
    "word": "why",
    "pos": "adv.",
    "cn_def": "為什麼",
    "en_def": "",
    "sentence": "Q: {{BLANK}} does Tom look sad? — A: Because he can't find his dog.",
    "cn": "湯姆為什麼看起來很難過？ — 因為他找不到他的狗。"
  },
  {
    "word": "whose",
    "pos": "det.",
    "cn_def": "誰的",
    "en_def": "",
    "sentence": "Q: {{BLANK}} notebook is this? Is it yours? — A: No, it isn't. It's Ben's. His name is on it.",
    "cn": "這是誰的筆記本？是你的嗎？ — 不，不是。是班的，上面有他的名字。"
  },
  {
    "word": "which",
    "pos": "det.",
    "cn_def": "哪一個",
    "en_def": "",
    "sentence": "Q: {{BLANK}} bike do you like, the red one or the blue one? — A: I like the blue one. It's really cool.",
    "cn": "你喜歡哪一輛腳踏車，紅色的還是藍色的？ — 我喜歡藍色那輛，它真的很酷。"
  },
  {
    "word": "whether",
    "pos": "conj.",
    "cn_def": "是否",
    "en_def": "",
    "sentence": "Q: Does Ben like coffee? — A: I don't know {{BLANK}} he likes it. Let's ask him.",
    "cn": "班喜歡咖啡嗎？ — 我不知道他是否喜歡。我們問問他吧。"
  },
  {
    "word": "while",
    "pos": "conj.",
    "cn_def": "當…的時候",
    "en_def": "",
    "sentence": "Q: What does your mom do in the evening? — A: She watches TV {{BLANK}} I do my homework.",
    "cn": "你媽媽晚上做什麼？ — 我寫功課的時候，她在看電視。"
  }
];

const MCQS = [
  {
    "q": "Q: ______ is that tall girl? — A: She is my cousin, Amy.【誰】",
    "options": [
      "What",
      "Yourself",
      "Who",
      "Both"
    ],
    "answer": 2,
    "cn": "那個高個子女孩是誰？ — 她是我的表妹艾美。",
    "vocabIndex": 0
  },
  {
    "q": "Q: ______ is your grandma today? — A: She is much better, thank you.【如何；怎麼樣】",
    "options": [
      "When",
      "Why",
      "Where",
      "How"
    ],
    "answer": 3,
    "cn": "你奶奶今天好嗎？ — 她好多了，謝謝你。",
    "vocabIndex": 1
  },
  {
    "q": "Q: ______ do you usually do after school? — A: I usually play basketball with my friends.【什麼】",
    "options": [
      "Who",
      "What",
      "Some",
      "Everyone"
    ],
    "answer": 1,
    "cn": "你放學後通常做什麼？ — 我通常和朋友打籃球。",
    "vocabIndex": 2
  },
  {
    "q": "Q: ______ does your uncle live? — A: He lives in Kaohsiung. He works at a hospital there.【哪裡；何處】",
    "options": [
      "Where",
      "How",
      "When",
      "Why"
    ],
    "answer": 0,
    "cn": "你叔叔住在哪裡？ — 他住在高雄，他在那裡的一家醫院工作。",
    "vocabIndex": 3
  },
  {
    "q": "Q: ______ do you get up on Sundays? — A: I get up at nine. I don't go to school on Sundays.【什麼時候；何時】",
    "options": [
      "Where",
      "Why",
      "How",
      "When"
    ],
    "answer": 3,
    "cn": "你星期天什麼時候起床？ — 我九點起床。我星期天不用上學。",
    "vocabIndex": 4
  },
  {
    "q": "Q: ______ does Tom look sad? — A: Because he can't find his dog.【為什麼】",
    "options": [
      "How",
      "Why",
      "When",
      "Where"
    ],
    "answer": 1,
    "cn": "湯姆為什麼看起來很難過？ — 因為他找不到他的狗。",
    "vocabIndex": 5
  },
  {
    "q": "Q: ______ notebook is this? Is it yours? — A: No, it isn't. It's Ben's. His name is on it.【誰的】",
    "options": [
      "Which",
      "Her",
      "Whose",
      "Those"
    ],
    "answer": 2,
    "cn": "這是誰的筆記本？是你的嗎？ — 不，不是。是班的，上面有他的名字。",
    "vocabIndex": 6
  },
  {
    "q": "Q: ______ bike do you like, the red one or the blue one? — A: I like the blue one. It's really cool.【哪一個】",
    "options": [
      "Which",
      "Whose",
      "My",
      "Her"
    ],
    "answer": 0,
    "cn": "你喜歡哪一輛腳踏車，紅色的還是藍色的？ — 我喜歡藍色那輛，它真的很酷。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Does Ben like coffee? — A: I don't know ______ he likes it. Let's ask him.【是否】",
    "options": [
      "while",
      "whether",
      "because",
      "though"
    ],
    "answer": 1,
    "cn": "班喜歡咖啡嗎？ — 我不知道他是否喜歡。我們問問他吧。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What does your mom do in the evening? — A: She watches TV ______ I do my homework.【當…的時候】",
    "options": [
      "whether",
      "though",
      "while",
      "than"
    ],
    "answer": 2,
    "cn": "你媽媽晚上做什麼？ — 我寫功課的時候，她在看電視。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "some": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "一些"
  },
  "both": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "兩者都"
  },
  "those": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "那些"
  },
  "my": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "我的"
  },
  "her": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "她的"
  },
  "yourself": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "你（們）"
  },
  "everyone": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "每一個人"
  },
  "who": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "誰"
  },
  "how": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "如何；怎麼樣"
  },
  "what": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "什麼"
  },
  "where": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "哪裡；何處"
  },
  "when": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "什麼時候；何時"
  },
  "why": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "為什麼"
  },
  "whose": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "誰的"
  },
  "which": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "哪一個"
  },
  "whether": {
    "pos": "conj.",
    "en_def": "",
    "cn_def": "是否"
  },
  "while": {
    "pos": "conj.",
    "en_def": "",
    "cn_def": "當…的時候"
  },
  "than": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "比"
  },
  "because": {
    "pos": "conj.",
    "en_def": "",
    "cn_def": "因為"
  },
  "though": {
    "pos": "conj.",
    "en_def": "",
    "cn_def": "雖然"
  }
};

const EXTRA_GLOSSES = {};
