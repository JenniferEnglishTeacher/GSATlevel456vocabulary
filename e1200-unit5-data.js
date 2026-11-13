// Unit 5 Quiz Data: Forms of Address 稱謂（第05區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U05 - Forms of Address",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Mr.",
    "pos": "abbr.",
    "cn_def": "先生（加姓）",
    "en_def": "a word used before a man's family name",
    "sentence": "Q: Who is that man? — A: He is {{BLANK}} Wang. He teaches us math.",
    "cn": "那位男士是誰？ — 他是王先生，他教我們數學。"
  },
  {
    "word": "Mrs.",
    "pos": "abbr.",
    "cn_def": "太太",
    "en_def": "a word used before a married woman's family name",
    "sentence": "Q: Who is she? Is she Mr. Chen's wife? — A: Yes, she is. She is {{BLANK}} Chen. She works at a bank.",
    "cn": "她是誰？她是陳先生的太太嗎？ — 是的，她是。她是陳太太，她在銀行工作。"
  },
  {
    "word": "Miss",
    "pos": "n.",
    "cn_def": "小姐",
    "en_def": "a word used before the family name of a girl or a woman who is not married",
    "sentence": "Q: Who is your new music teacher? — A: She is {{BLANK}} Lin. She isn't married.",
    "cn": "你的新音樂老師是誰？ — 她是林小姐，她還沒結婚。"
  },
  {
    "word": "Ms.",
    "pos": "abbr.",
    "cn_def": "女士",
    "en_def": "a word used before a woman's family name",
    "sentence": "Q: Who is that woman? Does she teach English? — A: Yes, she does. She is {{BLANK}} Lee, our English teacher.",
    "cn": "那位女士是誰？她教英文嗎？ — 是的，她教。她是李女士，我們的英文老師。"
  },
  {
    "word": "doctor (Dr.)",
    "pos": "n.",
    "cn_def": "醫生",
    "en_def": "a person whose job is to help sick people get well",
    "sentence": "Q: Who is he? Do you know him? — A: Yes, I do. He is {{BLANK}} Huang. He works at the hospital.",
    "cn": "他是誰？你認識他嗎？ — 是的，我認識。他是黃醫生，他在醫院工作。",
    "alts": [
      "Doctor"
    ]
  },
  {
    "word": "name",
    "pos": "n.",
    "cn_def": "名字",
    "en_def": "the word that people call you",
    "sentence": "Q: What's your name? Do you have an English name? — A: Yes, I do. My English {{BLANK}} is Amy.",
    "cn": "你叫什麼名字？你有英文名字嗎？— 有，我的英文名字是艾美。"
  },
  {
    "word": "sir",
    "pos": "n.",
    "cn_def": "先生（稱呼，不加姓）",
    "en_def": "a polite word for a man when you do not use his name",
    "sentence": "Q: Excuse me, {{BLANK}}. Does this bus go to the zoo? — A: Yes, it does. Get off at the third stop.",
    "cn": "先生，不好意思，這班公車有到動物園嗎？ — 是的，有。在第三站下車。"
  }
];

const MCQS = [
  {
    "q": "Our math teacher is ______ Wang. He is a tall man with glasses, and his wife teaches English at our school, too.",
    "options": [
      "Mr.",
      "Mrs.",
      "Miss",
      "Ms."
    ],
    "answer": 0,
    "cn": "那位男士是誰？ — 他是王先生，他教我們數學。",
    "vocabIndex": 0
  },
  {
    "q": "Mr. Chen's wife is ______ Chen. She has been married to him for twenty years, and they have two sons.",
    "options": [
      "Mr.",
      "Miss",
      "sir",
      "Mrs."
    ],
    "answer": 3,
    "cn": "她是誰？她是陳先生的太太嗎？ — 是的，她是。她是陳太太，她在銀行工作。",
    "vocabIndex": 1
  },
  {
    "q": "Our music teacher is ______ Lin. She is young and not married, and she lives with her parents.",
    "options": [
      "Mr.",
      "Mrs.",
      "Miss",
      "sir"
    ],
    "answer": 2,
    "cn": "你的新音樂老師是誰？ — 她是林小姐，她還沒結婚。",
    "vocabIndex": 2
  },
  {
    "q": "We don't know if the new teacher is married or not, so we call her ______ Lee. It is polite for any woman.",
    "options": [
      "Mr.",
      "Ms.",
      "Mrs.",
      "Miss"
    ],
    "answer": 1,
    "cn": "那位女士是誰？她教英文嗎？ — 是的，她教。她是李女士，我們的英文老師。",
    "vocabIndex": 3
  },
  {
    "q": "My mom took me to the hospital, and ______ Huang looked at my throat. He gave me some medicine for my cold.",
    "options": [
      "Mrs.",
      "Miss",
      "sir",
      "Dr."
    ],
    "answer": 3,
    "cn": "他是誰？你認識他嗎？ — 是的，我認識。他是黃醫生，他在醫院工作。",
    "vocabIndex": 4
  },
  {
    "q": "What is your dog's ______? I call mine \"Lucky\" because it was lost for a week, and then it came back home.",
    "options": [
      "sir",
      "doctor",
      "name",
      "Miss"
    ],
    "answer": 2,
    "cn": "你叫什麼名字？你有英文名字嗎？— 有，我的英文名字是艾美。",
    "vocabIndex": 5
  },
  {
    "q": "\"Excuse me, ______. You dropped your wallet on the floor. Here you are.\" The man smiled and thanked the boy.",
    "options": [
      "sir",
      "Mrs.",
      "Miss",
      "name"
    ],
    "answer": 0,
    "cn": "先生，不好意思，這班公車有到動物園嗎？ — 是的，有。在第三站下車。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "mr.": {
    "pos": "abbr.",
    "en_def": "a word used before a man's family name",
    "cn_def": "先生（加姓）"
  },
  "mrs.": {
    "pos": "abbr.",
    "en_def": "a word used before a married woman's family name",
    "cn_def": "太太"
  },
  "miss": {
    "pos": "n.",
    "en_def": "a word used before the family name of a girl or a woman who is not married",
    "cn_def": "小姐"
  },
  "ms.": {
    "pos": "abbr.",
    "en_def": "a word used before a woman's family name",
    "cn_def": "女士"
  },
  "sir": {
    "pos": "n.",
    "en_def": "a polite word for a man when you do not use his name",
    "cn_def": "先生（稱呼，不加姓）"
  },
  "dr.": {
    "pos": "n.",
    "en_def": "a person whose job is to help sick people get well",
    "cn_def": "醫生"
  },
  "doctor": {
    "pos": "n.",
    "en_def": "a person whose job is to help sick people get well",
    "cn_def": "醫生"
  },
  "name": {
    "pos": "n.",
    "en_def": "the word that people call you",
    "cn_def": "名字"
  }
};

const EXTRA_GLOSSES = {};
