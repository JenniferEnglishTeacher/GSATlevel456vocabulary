// Unit 5 Quiz Data: cause – classical
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U05 - cause – classical",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cause",
    "pos": "n.",
    "cn_def": "原因，理由",
    "en_def": "",
    "sentence": "The {{BLANK}} of the fire is still unknown.",
    "cn": "火災的原因仍然未知。"
  },
  {
    "word": "ceiling",
    "pos": "n.",
    "cn_def": "天花板",
    "en_def": "",
    "sentence": "The {{BLANK}} is decorated with beautiful paintings.",
    "cn": "天花板上裝飾著美麗的畫作。"
  },
  {
    "word": "central",
    "pos": "adj.",
    "cn_def": "中央的，核心的",
    "en_def": "",
    "sentence": "The {{BLANK}} heating system is very efficient.",
    "cn": "中央供暖系統非常高效。"
  },
  {
    "word": "century",
    "pos": "n.",
    "cn_def": "世紀",
    "en_def": "",
    "sentence": "The castle was built in the 12th {{BLANK}}.",
    "cn": "這座城堡建於12世紀。"
  },
  {
    "word": "cereal",
    "pos": "n.",
    "cn_def": "穀物，麥片",
    "en_def": "",
    "sentence": "She eats {{BLANK}} for breakfast every morning.",
    "cn": "她每天早上吃麥片當早餐。"
  },
  {
    "word": "certain",
    "pos": "adj.",
    "cn_def": "確定的，某些",
    "en_def": "",
    "sentence": "Are you {{BLANK}} about the time of the meeting?",
    "cn": "你確定會議的時間嗎？"
  },
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道，通道",
    "en_def": "",
    "sentence": "Change the {{BLANK}} to watch the news.",
    "cn": "換頻道看新聞。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "性格，角色，文字",
    "en_def": "",
    "sentence": "The main {{BLANK}} in the story is very brave.",
    "cn": "故事的主角非常勇敢。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "收費，主要負責，指控",
    "en_def": "",
    "sentence": "The hotel {{BLANK}} $100 per night.",
    "cn": "這家飯店每晚收費100美元。"
  },
  {
    "word": "chart",
    "pos": "n.",
    "cn_def": "圖表",
    "en_def": "",
    "sentence": "The {{BLANK}} shows the company's sales growth.",
    "cn": "圖表顯示了公司的銷售增長。"
  },
  {
    "word": "chase",
    "pos": "v.",
    "cn_def": "追趕",
    "en_def": "",
    "sentence": "The dog {{BLANK}} the cat around the garden.",
    "cn": "狗在花園裡追趕貓。"
  },
  {
    "word": "chemistry",
    "pos": "n.",
    "cn_def": "化學",
    "en_def": "",
    "sentence": "She is studying {{BLANK}} in college.",
    "cn": "她在大學學習化學。"
  },
  {
    "word": "chess",
    "pos": "n.",
    "cn_def": "西洋棋",
    "en_def": "",
    "sentence": "He enjoys playing {{BLANK}} in his free time.",
    "cn": "他在空閒時間喜歡下西洋棋。"
  },
  {
    "word": "chick",
    "pos": "n.",
    "cn_def": "小雞，少女",
    "en_def": "",
    "sentence": "The mother hen protected her {{BLANK}}.",
    "cn": "母雞保護她的小雞。",
    "alts": [
      "chick"
    ]
  },
  {
    "word": "chief",
    "pos": "n.",
    "cn_def": "首領，長官",
    "en_def": "",
    "sentence": "The {{BLANK}} of the village welcomed the guests.",
    "cn": "村長歡迎了客人。"
  },
  {
    "word": "childhood",
    "pos": "n.",
    "cn_def": "童年",
    "en_def": "",
    "sentence": "She had a happy {{BLANK}}.",
    "cn": "她有一個快樂的童年。"
  },
  {
    "word": "childish",
    "pos": "adj.",
    "cn_def": "幼稚的，孩子氣的",
    "en_def": "",
    "sentence": "His behavior is very {{BLANK}}.",
    "cn": "他的行為非常幼稚。"
  },
  {
    "word": "childlike",
    "pos": "adj.",
    "cn_def": "孩子般的，天真的",
    "en_def": "",
    "sentence": "She has a {{BLANK}} innocence.",
    "cn": "她有孩子般的天真。"
  },
  {
    "word": "chin",
    "pos": "n.",
    "cn_def": "下巴",
    "en_def": "",
    "sentence": "He rested his {{BLANK}} on his hand.",
    "cn": "他把下巴放在手上。"
  },
  {
    "word": "classical",
    "pos": "adj.",
    "cn_def": "古典的，經典的",
    "en_def": "",
    "sentence": "She prefers {{BLANK}} music to pop music.",
    "cn": "她更喜歡古典音樂而不是流行音樂。"
  }
];

const MCQS = [
  {
    "q": "The ______ of the fire is still unknown.【原因，理由】",
    "options": [
      "cereal",
      "cause",
      "channel",
      "character"
    ],
    "answer": 1,
    "cn": "火災的原因仍然未知。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ is decorated with beautiful paintings.【天花板】",
    "options": [
      "chart",
      "chicks",
      "ceiling",
      "character"
    ],
    "answer": 2,
    "cn": "天花板上裝飾著美麗的畫作。",
    "vocabIndex": 1
  },
  {
    "q": "The ______ heating system is very efficient.【中央的，核心的】",
    "options": [
      "central",
      "classical",
      "certain",
      "childish"
    ],
    "answer": 0,
    "cn": "中央供暖系統非常高效。",
    "vocabIndex": 2
  },
  {
    "q": "The castle was built in the 12th ______.【世紀】",
    "options": [
      "chin",
      "childhood",
      "chemistry",
      "century"
    ],
    "answer": 3,
    "cn": "這座城堡建於12世紀。",
    "vocabIndex": 3
  },
  {
    "q": "She eats ______ for breakfast every morning.【穀物，麥片】",
    "options": [
      "chief",
      "cereal",
      "channel",
      "cause"
    ],
    "answer": 1,
    "cn": "她每天早上吃麥片當早餐。",
    "vocabIndex": 4
  },
  {
    "q": "Are you ______ about the time of the meeting?【確定的，某些】",
    "options": [
      "certain",
      "childlike",
      "childish",
      "classical"
    ],
    "answer": 0,
    "cn": "你確定會議的時間嗎？",
    "vocabIndex": 5
  },
  {
    "q": "Change the ______ to watch the news.【頻道，通道】",
    "options": [
      "century",
      "chart",
      "channel",
      "chemistry"
    ],
    "answer": 2,
    "cn": "換頻道看新聞。",
    "vocabIndex": 6
  },
  {
    "q": "The main ______ in the story is very brave.【性格，角色，文字】",
    "options": [
      "cereal",
      "century",
      "chemistry",
      "character"
    ],
    "answer": 3,
    "cn": "故事的主角非常勇敢。",
    "vocabIndex": 7
  },
  {
    "q": "The hotel ______ $100 per night.【收費，主要負責，指控】",
    "options": [
      "charges",
      "chased",
      "sweeps",
      "discuss"
    ],
    "answer": 0,
    "cn": "這家飯店每晚收費100美元。",
    "vocabIndex": 8
  },
  {
    "q": "The ______ shows the company's sales growth.【圖表】",
    "options": [
      "chemistry",
      "chart",
      "channel",
      "century"
    ],
    "answer": 1,
    "cn": "圖表顯示了公司的銷售增長。",
    "vocabIndex": 9
  },
  {
    "q": "The dog ______ the cat around the garden.【追趕】",
    "options": [
      "charges",
      "divided",
      "chased",
      "lifted"
    ],
    "answer": 2,
    "cn": "狗在花園裡追趕貓。",
    "vocabIndex": 10
  },
  {
    "q": "She is studying ______ in college.【化學】",
    "options": [
      "character",
      "chin",
      "cereal",
      "chemistry"
    ],
    "answer": 3,
    "cn": "她在大學學習化學。",
    "vocabIndex": 11
  },
  {
    "q": "He enjoys playing ______ in his free time.【西洋棋】",
    "options": [
      "chess",
      "chicks",
      "ceiling",
      "cereal"
    ],
    "answer": 0,
    "cn": "他在空閒時間喜歡下西洋棋。",
    "vocabIndex": 12
  },
  {
    "q": "The mother hen protected her ______.【小雞，少女】",
    "options": [
      "chess",
      "ceiling",
      "chicks",
      "century"
    ],
    "answer": 2,
    "cn": "母雞保護她的小雞。",
    "vocabIndex": 13
  },
  {
    "q": "The ______ of the village welcomed the guests.【首領，長官】",
    "options": [
      "cereal",
      "chief",
      "chin",
      "cause"
    ],
    "answer": 1,
    "cn": "村長歡迎了客人。",
    "vocabIndex": 14
  },
  {
    "q": "She had a happy ______.【童年】",
    "options": [
      "character",
      "chin",
      "century",
      "childhood"
    ],
    "answer": 3,
    "cn": "她有一個快樂的童年。",
    "vocabIndex": 15
  },
  {
    "q": "His behavior is very ______.【幼稚的，孩子氣的】",
    "options": [
      "certain",
      "classical",
      "childish",
      "central"
    ],
    "answer": 2,
    "cn": "他的行為非常幼稚。",
    "vocabIndex": 16
  },
  {
    "q": "She has a ______ innocence.【孩子般的，天真的】",
    "options": [
      "childish",
      "childlike",
      "central",
      "certain"
    ],
    "answer": 1,
    "cn": "她有孩子般的天真。",
    "vocabIndex": 17
  },
  {
    "q": "He rested his ______ on his hand.【下巴】",
    "options": [
      "chin",
      "chemistry",
      "century",
      "chief"
    ],
    "answer": 0,
    "cn": "他把下巴放在手上。",
    "vocabIndex": 18
  },
  {
    "q": "She prefers ______ music to pop music.【古典的，經典的】",
    "options": [
      "central",
      "certain",
      "childish",
      "classical"
    ],
    "answer": 3,
    "cn": "她更喜歡古典音樂而不是流行音樂。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "cause": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "原因，理由"
  },
  "ceiling": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "天花板"
  },
  "central": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "中央的，核心的"
  },
  "century": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "世紀"
  },
  "cereal": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "穀物，麥片"
  },
  "certain": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "確定的，某些"
  },
  "channel": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "頻道，通道"
  },
  "character": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "性格，角色，文字"
  },
  "charges": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "收費，主要負責，指控"
  },
  "chart": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "圖表"
  },
  "chased": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "追趕"
  },
  "chemistry": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "化學"
  },
  "chess": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "西洋棋"
  },
  "chicks": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小雞，少女"
  },
  "chief": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "首領，長官"
  },
  "childhood": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "童年"
  },
  "childish": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "幼稚的，孩子氣的"
  },
  "childlike": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "孩子般的，天真的"
  },
  "chin": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "下巴"
  },
  "classical": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "古典的，經典的"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "討論，商議"
  },
  "divided": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "分開，劃分"
  },
  "lifted": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "舉起，抬起"
  },
  "sweeps": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "打掃，清掃"
  }
};

const EXTRA_GLOSSES = {};
