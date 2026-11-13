// Unit 31 Quiz Data: Conjunctions 連接詞（第32區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U31 - Conjunctions",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "or",
    "pos": "conj.",
    "cn_def": "或；還是",
    "en_def": "used to join two choices",
    "sentence": "Q: Does your brother want tea {{BLANK}} coffee? — A: He wants coffee. He doesn't like tea.",
    "cn": "你哥哥想要茶還是咖啡？ — 他想要咖啡，他不喜歡茶。"
  },
  {
    "word": "and",
    "pos": "conj.",
    "cn_def": "和；而且",
    "en_def": "also; used to join two words or sentences",
    "sentence": "Q: What do you have in your bag? — A: I have a pencil case {{BLANK}} two books.",
    "cn": "你的書包裡有什麼？ — 我有一個鉛筆盒和兩本書。"
  },
  {
    "word": "but",
    "pos": "conj.",
    "cn_def": "但是",
    "en_def": "used to join two ideas that are different",
    "sentence": "Q: Does Amy like math? — A: Yes, she does, {{BLANK}} she doesn't like science.",
    "cn": "艾美喜歡數學嗎？ — 是的，她喜歡，但是她不喜歡自然。"
  },
  {
    "word": "however",
    "pos": "adv.",
    "cn_def": "然而",
    "en_def": "but; used at the start of a different idea",
    "sentence": "Q: Do your parents like the new house? — A: Yes, they do. {{BLANK}}, it is far from the MRT station.",
    "cn": "你爸媽喜歡新房子嗎？ — 是的，他們喜歡。然而，它離捷運站很遠。"
  },
  {
    "word": "because",
    "pos": "conj.",
    "cn_def": "因為",
    "en_def": "for the reason that",
    "sentence": "Q: Why does Tom stay at home today? — A: He stays at home {{BLANK}} he is sick.",
    "cn": "湯姆今天為什麼待在家？ — 他待在家，因為他生病了。"
  },
  {
    "word": "since",
    "pos": "conj.",
    "cn_def": "因為；自從",
    "en_def": "because; as",
    "sentence": "Q: Why do you and your sister take a taxi today? — A: {{BLANK}} it is raining hard, we don't want to walk.",
    "cn": "你和你妹妹今天為什麼搭計程車？ — 因為雨下得很大，我們不想走路。"
  },
  {
    "word": "though (although)",
    "pos": "conj.",
    "cn_def": "雖然",
    "en_def": "used to join two ideas when the second is a surprise",
    "sentence": "Q: Does your grandpa walk to the park every day? — A: Yes, he does. {{BLANK}} he is eighty, he walks there every morning.",
    "cn": "你爺爺每天走路去公園嗎？ — 是的。雖然他八十歲了，他每天早上都走去那裡。",
    "alts": [
      "although"
    ]
  },
  {
    "word": "if",
    "pos": "conj.",
    "cn_def": "如果",
    "en_def": "used to say that one thing must happen before another thing can",
    "sentence": "Q: What do you usually do on rainy Sundays? — A: {{BLANK}} it rains on Sunday, I stay at home and watch TV.",
    "cn": "下雨的星期天你通常做什麼？ — 如果星期天下雨，我就待在家看電視。"
  },
  {
    "word": "that",
    "pos": "conj.",
    "cn_def": "引導子句（可省略）",
    "en_def": "used to join a sentence to what someone says or thinks",
    "sentence": "Q: What does your teacher say about the test? — A: She says {{BLANK}} it is easy. Don't worry.",
    "cn": "你的老師對考試怎麼說？ — 她說考試很簡單。別擔心。"
  },
  {
    "word": "than",
    "pos": "conj.",
    "cn_def": "比",
    "en_def": "used when you compare two actions or things",
    "sentence": "Q: Who runs faster, Tom or Ben? — A: Tom runs faster {{BLANK}} Ben does.",
    "cn": "誰跑得比較快，湯姆還是班？ — 湯姆跑得比班快。"
  },
  {
    "word": "as",
    "pos": "conj.",
    "cn_def": "和…一樣；如同",
    "en_def": "used to say two things are the same in some way",
    "sentence": "Q: Do your two dogs eat a lot? — A: Yes, they do. The small dog eats as much {{BLANK}} the big one.",
    "cn": "你的兩隻狗吃很多嗎？ — 是的。小狗吃得和大狗一樣多。"
  }
];

const MCQS = [
  {
    "q": "Q: Does your brother want tea ______ coffee? — A: He wants coffee. He doesn't like tea.【或；還是】",
    "options": [
      "or",
      "and",
      "since",
      "that"
    ],
    "answer": 0,
    "cn": "你哥哥想要茶還是咖啡？ — 他想要咖啡，他不喜歡茶。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What do you have in your bag? — A: I have a pencil case ______ two books.【和；而且】",
    "options": [
      "than",
      "and",
      "though",
      "since"
    ],
    "answer": 1,
    "cn": "你的書包裡有什麼？ — 我有一個鉛筆盒和兩本書。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Does Amy like math? — A: Yes, she does, ______ she doesn't like science.【但是】",
    "options": [
      "since",
      "or",
      "but",
      "though"
    ],
    "answer": 2,
    "cn": "艾美喜歡數學嗎？ — 是的，她喜歡，但是她不喜歡自然。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Do your parents like the new house? — A: Yes, they do. ______, it is far from the MRT station.【然而】",
    "options": [
      "Together",
      "Seldom",
      "Least",
      "However"
    ],
    "answer": 3,
    "cn": "你爸媽喜歡新房子嗎？ — 是的，他們喜歡。然而，它離捷運站很遠。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Why does Tom stay at home today? — A: He stays at home ______ he is sick.【因為】",
    "options": [
      "and",
      "though",
      "because",
      "if"
    ],
    "answer": 2,
    "cn": "湯姆今天為什麼待在家？ — 他待在家，因為他生病了。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Why do you and your sister take a taxi today? — A: ______ it is raining hard, we don't want to walk.【因為；自從】",
    "options": [
      "Because",
      "Since",
      "Than",
      "And"
    ],
    "answer": 1,
    "cn": "你和你妹妹今天為什麼搭計程車？ — 因為雨下得很大，我們不想走路。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Does your grandpa walk to the park every day? — A: Yes, he does. ______ he is eighty, he walks there every morning.【雖然】",
    "options": [
      "Though",
      "Or",
      "Than",
      "That"
    ],
    "answer": 0,
    "cn": "你爺爺每天走路去公園嗎？ — 是的。雖然他八十歲了，他每天早上都走去那裡。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What do you usually do on rainy Sundays? — A: ______ it rains on Sunday, I stay at home and watch TV.【如果】",
    "options": [
      "Since",
      "That",
      "Because",
      "If"
    ],
    "answer": 3,
    "cn": "下雨的星期天你通常做什麼？ — 如果星期天下雨，我就待在家看電視。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What does your teacher say about the test? — A: She says ______ it is easy. Don't worry.【引導子句（可省略）】",
    "options": [
      "that",
      "but",
      "than",
      "because"
    ],
    "answer": 0,
    "cn": "你的老師對考試怎麼說？ — 她說考試很簡單。別擔心。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Who runs faster, Tom or Ben? — A: Tom runs faster ______ Ben does.【比】",
    "options": [
      "if",
      "or",
      "than",
      "though"
    ],
    "answer": 2,
    "cn": "誰跑得比較快，湯姆還是班？ — 湯姆跑得比班快。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Do your two dogs eat a lot? — A: Yes, they do. The small dog eats as much ______ the big one.【和…一樣；如同】",
    "options": [
      "or",
      "as",
      "than",
      "but"
    ],
    "answer": 1,
    "cn": "你的兩隻狗吃很多嗎？ — 是的。小狗吃得和大狗一樣多。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "that": {
    "pos": "det.",
    "en_def": "the one that is there, not near me",
    "cn_def": "那個"
  },
  "since": {
    "pos": "prep.",
    "en_def": "from a time in the past up to now",
    "cn_def": "自從"
  },
  "than": {
    "pos": "prep.",
    "en_def": "used when you compare two people or things",
    "cn_def": "比"
  },
  "or": {
    "pos": "conj.",
    "en_def": "used to join two choices",
    "cn_def": "或；還是"
  },
  "and": {
    "pos": "conj.",
    "en_def": "also; used to join two words or sentences",
    "cn_def": "和；而且"
  },
  "but": {
    "pos": "conj.",
    "en_def": "used to join two ideas that are different",
    "cn_def": "但是"
  },
  "however": {
    "pos": "adv.",
    "en_def": "but; used at the start of a different idea",
    "cn_def": "然而"
  },
  "because": {
    "pos": "conj.",
    "en_def": "for the reason that",
    "cn_def": "因為"
  },
  "though": {
    "pos": "conj.",
    "en_def": "used to join two ideas when the second is a surprise",
    "cn_def": "雖然"
  },
  "if": {
    "pos": "conj.",
    "en_def": "used to say that one thing must happen before another thing can",
    "cn_def": "如果"
  },
  "as": {
    "pos": "conj.",
    "en_def": "used to say two things are the same in some way",
    "cn_def": "和…一樣；如同"
  },
  "seldom": {
    "pos": "adv.",
    "en_def": "not often",
    "cn_def": "很少"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other",
    "cn_def": "一起"
  },
  "least": {
    "pos": "adv.",
    "en_def": "less than all the others",
    "cn_def": "最不"
  }
};

const EXTRA_GLOSSES = {};
