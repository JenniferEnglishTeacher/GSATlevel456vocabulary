// Unit 20 Quiz Data: Countries & Languages 國家與地區、語言（第20–21區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U20 - Countries & Languages",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "country",
    "pos": "n.",
    "cn_def": "國家",
    "en_def": "a land with its own people and government, like Japan",
    "sentence": "Q: What {{BLANK}} do you and your family come from? — A: We come from Taiwan.",
    "cn": "你和你的家人來自哪個國家？ — 我們來自臺灣。"
  },
  {
    "word": "Taiwan",
    "pos": "n.",
    "cn_def": "臺灣",
    "en_def": "an island country in East Asia; its biggest city is Taipei",
    "sentence": "Q: Where are you from? — A: I'm from {{BLANK}}. I live in Taipei.",
    "cn": "你來自哪裡？ — 我來自臺灣，我住在臺北。"
  },
  {
    "word": "China",
    "pos": "n.",
    "cn_def": "中國",
    "en_def": "a very big country in East Asia",
    "sentence": "Q: Where does Mr. Li come from? — A: He comes from {{BLANK}}. He lives in Beijing now.",
    "cn": "李先生來自哪裡？ — 他來自中國，他現在住在北京。"
  },
  {
    "word": "America",
    "pos": "n.",
    "cn_def": "美國",
    "en_def": "a short name for the United States",
    "sentence": "Q: Where is your English teacher from? — A: She's from {{BLANK}}. She's American.",
    "cn": "你的英文老師來自哪裡？ — 她來自美國，她是美國人。"
  },
  {
    "word": "world",
    "pos": "n.",
    "cn_def": "世界",
    "en_def": "the earth and all the countries and people on it",
    "sentence": "Q: Where do your pen pals live? — A: They live in different countries around the {{BLANK}}.",
    "cn": "你的筆友們住在哪裡？ — 他們住在世界各地不同的國家。"
  },
  {
    "word": "U.S.A. / USA",
    "pos": "n.",
    "cn_def": "美國（縮寫）",
    "en_def": "the short name of the United States of America",
    "sentence": "Q: Where does your cousin Ben live? — A: He lives in the {{BLANK}} He lives in New York.",
    "cn": "你的堂哥班住在哪裡？ — 他住在美國，他住在紐約。",
    "alts": [
      "USA"
    ]
  },
  {
    "word": "R.O.C. / ROC",
    "pos": "n.",
    "cn_def": "中華民國",
    "en_def": "the short name of the Republic of China (Taiwan)",
    "sentence": "Q: Does Lisa live in Japan? — A: No, she doesn't. She lives in Taiwan. Its other name is the {{BLANK}}",
    "cn": "莉莎住在日本嗎？ — 不，她不是。她住在臺灣，臺灣的另一個名字是中華民國。",
    "alts": [
      "ROC"
    ]
  },
  {
    "word": "Chinese",
    "pos": "n.",
    "cn_def": "中文",
    "en_def": "the language people speak in Taiwan and China",
    "sentence": "Q: What language do people in Taiwan speak? — A: They speak {{BLANK}}.",
    "cn": "臺灣的人說什麼語言？ — 他們說中文。"
  },
  {
    "word": "English",
    "pos": "n.",
    "cn_def": "英語",
    "en_def": "the language people speak in the U.S.A. and the U.K.",
    "sentence": "Q: What language does your English teacher speak in class? — A: She speaks {{BLANK}}. She doesn't speak Chinese.",
    "cn": "你的英文老師上課說什麼語言？ — 她說英語，她不說中文。"
  }
];

const MCQS = [
  {
    "q": "Japan is a ______ in Asia. Its biggest city is Tokyo, and its people speak Japanese.",
    "options": [
      "world",
      "Chinese",
      "English",
      "country"
    ],
    "answer": 3,
    "cn": "你和你的家人來自哪個國家？ — 我們來自臺灣。",
    "vocabIndex": 0
  },
  {
    "q": "______ is a beautiful island. Taipei is its biggest city, and Mt. Jade is its highest mountain.",
    "options": [
      "China",
      "America",
      "Taiwan",
      "English"
    ],
    "answer": 2,
    "cn": "你來自哪裡？ — 我來自臺灣，我住在臺北。",
    "vocabIndex": 1
  },
  {
    "q": "The Great Wall is in ______. This very big country has more than one billion people.",
    "options": [
      "Taiwan",
      "China",
      "America",
      "English"
    ],
    "answer": 1,
    "cn": "李先生來自哪裡？ — 他來自中國，他現在住在北京。",
    "vocabIndex": 2
  },
  {
    "q": "New York and Los Angeles are big cities in ______. People there speak English and use dollars.",
    "options": [
      "America",
      "Taiwan",
      "China",
      "Chinese"
    ],
    "answer": 0,
    "cn": "你的英文老師來自哪裡？ — 她來自美國，她是美國人。",
    "vocabIndex": 3
  },
  {
    "q": "There are about two hundred countries in the ______. I want to travel to all of them one day.",
    "options": [
      "country",
      "Taiwan",
      "English",
      "world"
    ],
    "answer": 3,
    "cn": "你的筆友們住在哪裡？ — 他們住在世界各地不同的國家。",
    "vocabIndex": 4
  },
  {
    "q": "The ______ has fifty states. Its full name is the United States of America.",
    "options": [
      "R.O.C.",
      "China",
      "U.S.A.",
      "Taiwan"
    ],
    "answer": 2,
    "cn": "你的堂哥班住在哪裡？ — 他住在美國，他住在紐約。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ is the official name of Taiwan. The three letters stand for the Republic of China.",
    "options": [
      "R.O.C.",
      "U.S.A.",
      "America",
      "world"
    ],
    "answer": 0,
    "cn": "莉莎住在日本嗎？ — 不，她不是。她住在臺灣，臺灣的另一個名字是中華民國。",
    "vocabIndex": 6
  },
  {
    "q": "Most people in Taiwan speak ______. It is not easy for Americans to learn to write it.",
    "options": [
      "English",
      "Chinese",
      "America",
      "China"
    ],
    "answer": 1,
    "cn": "臺灣的人說什麼語言？ — 他們說中文。",
    "vocabIndex": 7
  },
  {
    "q": "People in the U.S.A. and the U.K. speak ______. Students in Taiwan learn it at school.",
    "options": [
      "Chinese",
      "Taiwan",
      "China",
      "English"
    ],
    "answer": 3,
    "cn": "你的英文老師上課說什麼語言？ — 她說英語，她不說中文。",
    "vocabIndex": 8
  }
];

const LOOKUP = {
  "world": {
    "pos": "n.",
    "en_def": "the earth and all the countries and people on it",
    "cn_def": "世界"
  },
  "chinese": {
    "pos": "n.",
    "en_def": "the language people speak in Taiwan and China; a school subject",
    "cn_def": "中文；國文"
  },
  "english": {
    "pos": "n.",
    "en_def": "the language people speak in the U.S.A. and the U.K.",
    "cn_def": "英語"
  },
  "country": {
    "pos": "n.",
    "en_def": "land outside cities, with farms and fields",
    "cn_def": "鄉村"
  },
  "china": {
    "pos": "n.",
    "en_def": "a very big country in East Asia",
    "cn_def": "中國"
  },
  "america": {
    "pos": "n.",
    "en_def": "a short name for the United States",
    "cn_def": "美國"
  },
  "taiwan": {
    "pos": "n.",
    "en_def": "an island country in East Asia; its biggest city is Taipei",
    "cn_def": "臺灣"
  },
  "r.o.c.": {
    "pos": "n.",
    "en_def": "the short name of the Republic of China (Taiwan)",
    "cn_def": "中華民國"
  },
  "u.s.a.": {
    "pos": "n.",
    "en_def": "the short name of the United States of America",
    "cn_def": "美國（縮寫）"
  }
};

const EXTRA_GLOSSES = {};
