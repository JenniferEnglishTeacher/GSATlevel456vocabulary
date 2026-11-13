// Unit 32 Quiz Data: Interjections 感嘆詞（第33區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U32 - Interjections",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hello",
    "pos": "int.",
    "cn_def": "哈囉；你好",
    "en_def": "a word you say when you meet someone or answer the phone",
    "sentence": "Q: What does Amy say when she answers the phone? — A: She says, \"{{BLANK}}, this is Amy speaking.\"",
    "cn": "艾美接電話時說什麼？ — 她說：「哈囉，我是艾美。」"
  },
  {
    "word": "hi",
    "pos": "int.",
    "cn_def": "嗨",
    "en_def": "a friendly, short way to say hello",
    "sentence": "Q: {{BLANK}}, Ben! Do you go to this school, too? — A: Yes, I do. I'm in Class 7. Nice to meet you.",
    "cn": "嗨，班！你也讀這所學校嗎？ — 是的，我在七班。很高興認識你。"
  },
  {
    "word": "hey",
    "pos": "int.",
    "cn_def": "嘿",
    "en_def": "a word you say to get someone's attention",
    "sentence": "Q: {{BLANK}}, Tom! Does your brother want to play basketball with us? — A: Yes, he does. Thank you! He's coming now.",
    "cn": "嘿，湯姆！你哥哥想跟我們一起打籃球嗎？ — 是的，他想。謝謝！他現在就來。"
  },
  {
    "word": "good-bye (goodbye, bye)",
    "pos": "int.",
    "cn_def": "再見",
    "en_def": "a word you say when you leave someone",
    "sentence": "Q: What do you say to your teacher after school? — A: I say, \"{{BLANK}}, Ms. Wang. See you tomorrow!\"",
    "cn": "放學後你跟老師說什麼？ — 我說：「再見，王老師。明天見！」",
    "alts": [
      "goodbye",
      "bye"
    ]
  }
];

const MCQS = [
  {
    "q": "\"______, this is Amy. May I speak to Tom, please?\" I said on the phone.",
    "options": [
      "Good-bye",
      "Thanks",
      "Sorry",
      "Hello"
    ],
    "answer": 3,
    "cn": "艾美接電話時說什麼？ — 她說：「哈囉，我是艾美。」",
    "vocabIndex": 0
  },
  {
    "q": "\"______, Ben! How are you today?\" \"I'm fine, thanks. And you?\"",
    "options": [
      "Hi",
      "Good-bye",
      "Sorry",
      "Please"
    ],
    "answer": 0,
    "cn": "嗨，班！你也讀這所學校嗎？ — 是的，我在七班。很高興認識你。",
    "vocabIndex": 1
  },
  {
    "q": "\"______! Watch out! A car is coming!\" Tom shouted to the boy in the street.",
    "options": [
      "Good-bye",
      "Please",
      "Hey",
      "Thanks"
    ],
    "answer": 2,
    "cn": "嘿，湯姆！你哥哥想跟我們一起打籃球嗎？ — 是的，他想。謝謝！他現在就來。",
    "vocabIndex": 2
  },
  {
    "q": "\"______, Mom. See you tonight,\" I said and walked out the door to go to school.",
    "options": [
      "Hello",
      "Good-bye",
      "Hi",
      "Hey"
    ],
    "answer": 1,
    "cn": "放學後你跟老師說什麼？ — 我說：「再見，王老師。明天見！」",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "good-bye": {
    "pos": "int.",
    "en_def": "a word you say when you leave someone",
    "cn_def": "再見"
  },
  "thanks": {
    "pos": "int.",
    "en_def": "",
    "cn_def": "謝謝"
  },
  "sorry": {
    "pos": "int.",
    "en_def": "",
    "cn_def": "抱歉"
  },
  "hello": {
    "pos": "int.",
    "en_def": "a word you say when you meet someone or answer the phone",
    "cn_def": "哈囉；你好"
  },
  "hi": {
    "pos": "int.",
    "en_def": "a friendly, short way to say hello",
    "cn_def": "嗨"
  },
  "please": {
    "pos": "int.",
    "en_def": "",
    "cn_def": "請"
  },
  "hey": {
    "pos": "int.",
    "en_def": "a word you say to get someone's attention",
    "cn_def": "嘿"
  }
};

const EXTRA_GLOSSES = {};
