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
    "en_def": "",
    "sentence": "Q: Who is that man? — A: He is {{BLANK}} Wang. He teaches us math.",
    "cn": "那位男士是誰？ — 他是王先生，他教我們數學。"
  },
  {
    "word": "Mrs.",
    "pos": "abbr.",
    "cn_def": "太太",
    "en_def": "",
    "sentence": "Q: Who is she? Is she Mr. Chen's wife? — A: Yes, she is. She is {{BLANK}} Chen. She works at a bank.",
    "cn": "她是誰？她是陳先生的太太嗎？ — 是的，她是。她是陳太太，她在銀行工作。"
  },
  {
    "word": "Miss",
    "pos": "n.",
    "cn_def": "小姐",
    "en_def": "",
    "sentence": "Q: Who is your new music teacher? — A: She is {{BLANK}} Lin. She isn't married.",
    "cn": "你的新音樂老師是誰？ — 她是林小姐，她還沒結婚。"
  },
  {
    "word": "Ms.",
    "pos": "abbr.",
    "cn_def": "女士",
    "en_def": "",
    "sentence": "Q: Who is that woman? Does she teach English? — A: Yes, she does. She is {{BLANK}} Lee, our English teacher.",
    "cn": "那位女士是誰？她教英文嗎？ — 是的，她教。她是李女士，我們的英文老師。"
  },
  {
    "word": "doctor (Dr.)",
    "pos": "n.",
    "cn_def": "醫生",
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: What's your name? Do you have an English name? — A: Yes, I do. My English {{BLANK}} is Amy.",
    "cn": "你叫什麼名字？你有英文名字嗎？— 有，我的英文名字是艾美。"
  },
  {
    "word": "sir",
    "pos": "n.",
    "cn_def": "先生（稱呼，不加姓）",
    "en_def": "",
    "sentence": "Q: Excuse me, {{BLANK}}. Does this bus go to the zoo? — A: Yes, it does. Get off at the third stop.",
    "cn": "先生，不好意思，這班公車有到動物園嗎？ — 是的，有。在第三站下車。"
  }
];

const MCQS = [
  {
    "q": "Q: Who is that man? — A: He is ______ Wang. He teaches us math.【先生（加姓）】",
    "options": [
      "Mr.",
      "Mrs.",
      "Ms.",
      "A.m."
    ],
    "answer": 0,
    "cn": "那位男士是誰？ — 他是王先生，他教我們數學。",
    "vocabIndex": 0
  },
  {
    "q": "Q: Who is she? Is she Mr. Chen's wife? — A: Yes, she is. She is ______ Chen. She works at a bank.【太太】",
    "options": [
      "Ms.",
      "Mrs.",
      "Mr.",
      "A.m."
    ],
    "answer": 1,
    "cn": "她是誰？她是陳先生的太太嗎？ — 是的，她是。她是陳太太，她在銀行工作。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Who is your new music teacher? — A: She is ______ Lin. She isn't married.【小姐】",
    "options": [
      "Sir",
      "Dr.",
      "Miss",
      "Name"
    ],
    "answer": 2,
    "cn": "你的新音樂老師是誰？ — 她是林小姐，她還沒結婚。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Who is that woman? Does she teach English? — A: Yes, she does. She is ______ Lee, our English teacher.【女士】",
    "options": [
      "Mr.",
      "Mrs.",
      "P.m.",
      "Ms."
    ],
    "answer": 3,
    "cn": "那位女士是誰？她教英文嗎？ — 是的，她教。她是李女士，我們的英文老師。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Who is he? Do you know him? — A: Yes, I do. He is ______ Huang. He works at the hospital.【醫生】",
    "options": [
      "Name",
      "Sir",
      "Dr.",
      "Miss"
    ],
    "answer": 2,
    "cn": "他是誰？你認識他嗎？ — 是的，我認識。他是黃醫生，他在醫院工作。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What's your name? Do you have an English name? — A: Yes, I do. My English ______ is Amy.【名字】",
    "options": [
      "name",
      "sir",
      "dr.",
      "Miss"
    ],
    "answer": 0,
    "cn": "你叫什麼名字？你有英文名字嗎？— 有，我的英文名字是艾美。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Excuse me, ______. Does this bus go to the zoo? — A: Yes, it does. Get off at the third stop.【先生（稱呼，不加姓）】",
    "options": [
      "name",
      "sir",
      "dr.",
      "Miss"
    ],
    "answer": 1,
    "cn": "先生，不好意思，這班公車有到動物園嗎？ — 是的，有。在第三站下車。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "mr.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "先生（加姓）"
  },
  "mrs.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "太太"
  },
  "miss": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小姐"
  },
  "ms.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "女士"
  },
  "dr.": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "醫生"
  },
  "name": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "名字"
  },
  "sir": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "先生（稱呼，不加姓）"
  },
  "a.m.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "上午（用在時間後）"
  },
  "p.m.": {
    "pos": "abbr.",
    "en_def": "",
    "cn_def": "下午（用在時間後）"
  }
};

const EXTRA_GLOSSES = {};
