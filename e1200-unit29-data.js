// Unit 29 Quiz Data: Be & auxiliaries Be 動詞與助動詞（第30區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U29 - Be & auxiliaries",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "be (are)",
    "pos": "v.",
    "cn_def": "是；在",
    "en_def": "am, is, or are; to exist or to be in a place",
    "sentence": "Q: {{BLANK}} your parents at home now? — A: No, they aren't. They are at work.",
    "cn": "你爸媽現在在家嗎？ — 不，他們不在。他們在上班。"
  },
  {
    "word": "do (does)",
    "pos": "v.",
    "cn_def": "做",
    "en_def": "to act; also used to make questions",
    "sentence": "Q: {{BLANK}} your sister do her homework after dinner? — A: Yes, she does. She does her homework at eight.",
    "cn": "你妹妹晚餐後寫功課嗎？ — 是的，她會。她八點寫功課。"
  },
  {
    "word": "have",
    "pos": "v.",
    "cn_def": "有",
    "en_def": "to own something",
    "sentence": "Q: Do your grandparents {{BLANK}} a pet? — A: Yes, they do. They have a cat. My uncle has two dogs.",
    "cn": "你的爺爺奶奶有養寵物嗎？ — 有，他們養一隻貓。我叔叔養兩隻狗。"
  },
  {
    "word": "can",
    "pos": "aux.",
    "cn_def": "能夠；會",
    "en_def": "to be able to do something",
    "sentence": "Q: {{BLANK}} your brother swim? — A: Yes, he can. He can swim very fast.",
    "cn": "你哥哥會游泳嗎？ — 是的，他會。他游得很快。"
  },
  {
    "word": "could",
    "pos": "aux.",
    "cn_def": "能；可以（客氣）",
    "en_def": "a polite word for asking someone to do something",
    "sentence": "Q: {{BLANK}} you help me, please? — A: Sure. What can I do for you?",
    "cn": "可以請你幫我嗎？ — 當然。我能為你做什麼？"
  },
  {
    "word": "may",
    "pos": "aux.",
    "cn_def": "可以；可能",
    "en_def": "to be allowed to do something",
    "sentence": "Q: {{BLANK}} I use your eraser? — A: Yes, you may. Here you are.",
    "cn": "我可以用你的橡皮擦嗎？ — 可以，拿去吧。"
  },
  {
    "word": "will",
    "pos": "aux.",
    "cn_def": "將會",
    "en_def": "used to talk about the future",
    "sentence": "Q: {{BLANK}} your mom cook dinner tonight? — A: No, she won't. We will eat out tonight.",
    "cn": "你媽媽今晚會煮晚餐嗎？ — 不，她不會。我們今晚要去外面吃。"
  },
  {
    "word": "must",
    "pos": "aux.",
    "cn_def": "必須",
    "en_def": "to have to do something",
    "sentence": "Q: {{BLANK}} we wear our uniforms on Monday? — A: Yes, we must. It's a school rule.",
    "cn": "我們星期一必須穿制服嗎？ — 是的，必須。這是校規。"
  },
  {
    "word": "should",
    "pos": "aux.",
    "cn_def": "應該",
    "en_def": "used to say what is right or good to do",
    "sentence": "Q: {{BLANK}} Tom go to bed early tonight? — A: Yes, he should. He has a test tomorrow.",
    "cn": "湯姆今晚應該早點睡嗎？ — 是的，他應該。他明天有考試。"
  }
];

const MCQS = [
  {
    "q": "Tom and Ben ______ brothers. They look very much alike.",
    "options": [
      "do",
      "are",
      "have",
      "can"
    ],
    "answer": 1,
    "cn": "你爸媽現在在家嗎？ — 不，他們不在。他們在上班。",
    "vocabIndex": 0
  },
  {
    "q": "What ______ your father do? He is a doctor.",
    "options": [
      "are",
      "have",
      "does",
      "must"
    ],
    "answer": 2,
    "cn": "你妹妹晚餐後寫功課嗎？ — 是的，她會。她八點寫功課。",
    "vocabIndex": 1
  },
  {
    "q": "I ______ two sisters and one brother. There are six people in my family.",
    "options": [
      "are",
      "does",
      "should",
      "have"
    ],
    "answer": 3,
    "cn": "你的爺爺奶奶有養寵物嗎？ — 有，他們養一隻貓。我叔叔養兩隻狗。",
    "vocabIndex": 2
  },
  {
    "q": "Birds ______ fly, but pigs can't. Fish are good at swimming, but they are not able to walk.",
    "options": [
      "can",
      "does",
      "are",
      "have"
    ],
    "answer": 0,
    "cn": "你哥哥會游泳嗎？ — 是的，他會。他游得很快。",
    "vocabIndex": 3
  },
  {
    "q": "______ you open the window, please? It is very hot in here.",
    "options": [
      "Must",
      "Are",
      "Have",
      "Could"
    ],
    "answer": 3,
    "cn": "可以請你幫我嗎？ — 當然。我能為你做什麼？",
    "vocabIndex": 4
  },
  {
    "q": "______ I come in? Yes, please sit down.",
    "options": [
      "Are",
      "May",
      "Does",
      "Have"
    ],
    "answer": 1,
    "cn": "我可以用你的橡皮擦嗎？ — 可以，拿去吧。",
    "vocabIndex": 5
  },
  {
    "q": "It ______ rain tomorrow, so the picnic will be on Sunday.",
    "options": [
      "will",
      "have",
      "are",
      "does"
    ],
    "answer": 0,
    "cn": "你媽媽今晚會煮晚餐嗎？ — 不，她不會。我們今晚要去外面吃。",
    "vocabIndex": 6
  },
  {
    "q": "You ______ stop when the traffic light is red. It is the law.",
    "options": [
      "are",
      "have",
      "must",
      "does"
    ],
    "answer": 2,
    "cn": "我們星期一必須穿制服嗎？ — 是的，必須。這是校規。",
    "vocabIndex": 7
  },
  {
    "q": "You look tired. You ______ go to bed early tonight.",
    "options": [
      "should",
      "are",
      "have",
      "does"
    ],
    "answer": 0,
    "cn": "湯姆今晚應該早點睡嗎？ — 是的，他應該。他明天有考試。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "do": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "做"
  },
  "are": {
    "pos": "v.",
    "en_def": "am, is, or are; to exist or to be in a place",
    "cn_def": "是；在"
  },
  "have": {
    "pos": "v.",
    "en_def": "to own something",
    "cn_def": "有"
  },
  "can": {
    "pos": "aux.",
    "en_def": "to be able to do something",
    "cn_def": "能夠；會"
  },
  "does": {
    "pos": "v.",
    "en_def": "to act; also used to make questions",
    "cn_def": "做"
  },
  "must": {
    "pos": "aux.",
    "en_def": "to have to do something",
    "cn_def": "必須"
  },
  "should": {
    "pos": "aux.",
    "en_def": "used to say what is right or good to do",
    "cn_def": "應該"
  },
  "could": {
    "pos": "aux.",
    "en_def": "a polite word for asking someone to do something",
    "cn_def": "能；可以（客氣）"
  },
  "may": {
    "pos": "n.",
    "en_def": "the fifth month of the year",
    "cn_def": "五月"
  },
  "will": {
    "pos": "aux.",
    "en_def": "used to talk about the future",
    "cn_def": "將會"
  }
};

const EXTRA_GLOSSES = {};
