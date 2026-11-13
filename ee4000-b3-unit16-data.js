// Unit 16 Quiz Data: adolescent – tidy
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "4000 Essential Words Book 3 U16 - adolescent – tidy",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adolescent",
    "pos": "n.",
    "cn_def": "青少年",
    "en_def": "a young person who is growing from a child into an adult",
    "sentence": "Every {{BLANK}} wants more freedom, but parents still worry about them.",
    "cn": "每個青少年都想要更多自由，但父母仍然擔心他們。"
  },
  {
    "word": "aptitude",
    "pos": "n.",
    "cn_def": "天資；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "She showed an {{BLANK}} for music at the age of four, when she first played the piano.",
    "cn": "她四歲第一次彈鋼琴時就展現出音樂天分。"
  },
  {
    "word": "compliment",
    "pos": "v.",
    "cn_def": "讚美；恭維",
    "en_def": "to say something nice about someone",
    "sentence": "Guests often {{BLANK}} my mother on her delicious cooking.",
    "cn": "客人常常稱讚我媽媽做的菜好吃。"
  },
  {
    "word": "hinder",
    "pos": "v.",
    "cn_def": "阻礙；妨礙",
    "en_def": "to make it difficult for someone to do something",
    "sentence": "Heavy snow will {{BLANK}} the rescue team from reaching the village.",
    "cn": "大雪會阻礙救援隊抵達村莊。"
  },
  {
    "word": "journalism",
    "pos": "n.",
    "cn_def": "新聞業",
    "en_def": "the work of collecting and writing news",
    "sentence": "She studied {{BLANK}} in college and now writes for a newspaper.",
    "cn": "她大學主修新聞學，現在為報社寫稿。"
  },
  {
    "word": "jury",
    "pos": "n.",
    "cn_def": "陪審團",
    "en_def": "a group of ordinary people who decide in court if someone is guilty",
    "sentence": "The {{BLANK}} of twelve people decided that the man was not guilty.",
    "cn": "由十二人組成的陪審團認定那名男子無罪。"
  },
  {
    "word": "justice",
    "pos": "n.",
    "cn_def": "正義；公平",
    "en_def": "fair treatment under the law",
    "sentence": "The family of the dead man asked the court for {{BLANK}}.",
    "cn": "死者的家屬請求法院主持正義。"
  },
  {
    "word": "liberty",
    "pos": "n.",
    "cn_def": "自由",
    "en_def": "the freedom to live as you choose",
    "sentence": "The people fought for their {{BLANK}} and finally became a free nation.",
    "cn": "人民為自由而戰，最後成為一個自由的國家。"
  },
  {
    "word": "literary",
    "pos": "adj.",
    "cn_def": "文學的",
    "en_def": "connected with books and writing of high quality",
    "sentence": "She won a {{BLANK}} prize for her first novel.",
    "cn": "她的第一本小說贏得了文學獎。"
  },
  {
    "word": "pharmacy",
    "pos": "n.",
    "cn_def": "藥局；藥房",
    "en_def": "a store where medicine is prepared and sold",
    "sentence": "I went to the {{BLANK}} to buy some medicine for my headache.",
    "cn": "我去藥局買頭痛藥。"
  },
  {
    "word": "pill",
    "pos": "n.",
    "cn_def": "藥丸",
    "en_def": "a small, round piece of medicine that you swallow",
    "sentence": "The doctor told him to take one {{BLANK}} after each meal.",
    "cn": "醫生叫他每餐飯後吃一顆藥丸。"
  },
  {
    "word": "presume",
    "pos": "v.",
    "cn_def": "假定；推測",
    "en_def": "to think that something is true without being sure",
    "sentence": "Her coat is gone, so I {{BLANK}} she has already left the office.",
    "cn": "她的外套不見了，所以我推測她已經離開辦公室。"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the state of being alone and not watched by others",
    "sentence": "Please knock before you come in; teenagers need their {{BLANK}}.",
    "cn": "進來前請先敲門，青少年需要隱私。"
  },
  {
    "word": "punishment",
    "pos": "n.",
    "cn_def": "懲罰",
    "en_def": "something bad that is done to someone because they did something wrong",
    "sentence": "As a {{BLANK}} for breaking the window, he had to clean the classroom for a week.",
    "cn": "作為打破窗戶的懲罰，他必須打掃教室一週。"
  },
  {
    "word": "sensible",
    "pos": "adj.",
    "cn_def": "明智的；講理的",
    "en_def": "showing good judgment; reasonable",
    "sentence": "It is {{BLANK}} to save some money every month for the future.",
    "cn": "每個月為將來存點錢是明智的。"
  },
  {
    "word": "slice",
    "pos": "n.",
    "cn_def": "薄片；一片",
    "en_def": "a thin, flat piece cut from something",
    "sentence": "Would you like a {{BLANK}} of lemon in your tea?",
    "cn": "你的茶裡要加一片檸檬嗎？"
  },
  {
    "word": "sorrow",
    "pos": "n.",
    "cn_def": "悲傷；哀痛",
    "en_def": "a feeling of great sadness",
    "sentence": "Her eyes were full of {{BLANK}} when she spoke about her dead husband.",
    "cn": "她談到過世的丈夫時，眼裡充滿悲傷。"
  },
  {
    "word": "straw",
    "pos": "n.",
    "cn_def": "吸管",
    "en_def": "a thin tube used for drinking",
    "sentence": "The child drank her juice through a {{BLANK}}.",
    "cn": "那個孩子用吸管喝果汁。"
  },
  {
    "word": "swell",
    "pos": "v.",
    "cn_def": "腫脹；膨脹",
    "en_def": "to become larger than normal",
    "sentence": "If a bee stings your hand, your fingers may {{BLANK}} and turn red.",
    "cn": "如果蜜蜂螫了你的手，你的手指可能會腫起來變紅。"
  },
  {
    "word": "tidy",
    "pos": "adj.",
    "cn_def": "整潔的",
    "en_def": "neat and in order",
    "sentence": "She keeps her desk {{BLANK}}, with every pen and book in its place.",
    "cn": "她把書桌保持整潔，每支筆和每本書都放在固定位置。"
  }
];

const MCQS = [
  {
    "q": "Every ______ wants more freedom, but parents still worry about them.",
    "options": [
      "adolescent",
      "pill",
      "justice",
      "punishment"
    ],
    "answer": 0,
    "cn": "每個青少年都想要更多自由，但父母仍然擔心他們。",
    "vocabIndex": 0
  },
  {
    "q": "She showed an ______ for music at the age of four, when she first played the piano.",
    "options": [
      "journalism",
      "jury",
      "aptitude",
      "slice"
    ],
    "answer": 2,
    "cn": "她四歲第一次彈鋼琴時就展現出音樂天分。",
    "vocabIndex": 1
  },
  {
    "q": "Guests often ______ my mother on her delicious cooking.",
    "options": [
      "hinder",
      "swell",
      "presume",
      "compliment"
    ],
    "answer": 3,
    "cn": "客人常常稱讚我媽媽做的菜好吃。",
    "vocabIndex": 2
  },
  {
    "q": "Heavy snow will ______ the rescue team from reaching the village.",
    "options": [
      "swell",
      "hinder",
      "compliment",
      "presume"
    ],
    "answer": 1,
    "cn": "大雪會阻礙救援隊抵達村莊。",
    "vocabIndex": 3
  },
  {
    "q": "She studied ______ in college and now writes for a newspaper.",
    "options": [
      "journalism",
      "straw",
      "punishment",
      "slice"
    ],
    "answer": 0,
    "cn": "她大學主修新聞學，現在為報社寫稿。",
    "vocabIndex": 4
  },
  {
    "q": "The ______ of twelve people decided that the man was not guilty.",
    "options": [
      "straw",
      "jury",
      "justice",
      "pharmacy"
    ],
    "answer": 1,
    "cn": "由十二人組成的陪審團認定那名男子無罪。",
    "vocabIndex": 5
  },
  {
    "q": "The family of the dead man asked the court for ______.",
    "options": [
      "adolescent",
      "pharmacy",
      "justice",
      "aptitude"
    ],
    "answer": 2,
    "cn": "死者的家屬請求法院主持正義。",
    "vocabIndex": 6
  },
  {
    "q": "The people fought for their ______ and finally became a free nation.",
    "options": [
      "sorrow",
      "straw",
      "aptitude",
      "liberty"
    ],
    "answer": 3,
    "cn": "人民為自由而戰，最後成為一個自由的國家。",
    "vocabIndex": 7
  },
  {
    "q": "She won a ______ prize for her first novel.",
    "options": [
      "tidy",
      "literary",
      "sensible",
      "miserable"
    ],
    "answer": 1,
    "cn": "她的第一本小說贏得了文學獎。",
    "vocabIndex": 8
  },
  {
    "q": "I went to the ______ to buy some medicine for my headache.",
    "options": [
      "pharmacy",
      "sorrow",
      "aptitude",
      "punishment"
    ],
    "answer": 0,
    "cn": "我去藥局買頭痛藥。",
    "vocabIndex": 9
  },
  {
    "q": "The doctor told him to take one ______ after each meal.",
    "options": [
      "justice",
      "journalism",
      "pill",
      "liberty"
    ],
    "answer": 2,
    "cn": "醫生叫他每餐飯後吃一顆藥丸。",
    "vocabIndex": 10
  },
  {
    "q": "Her coat is gone, so I ______ she has already left the office.",
    "options": [
      "swell",
      "hinder",
      "compliment",
      "presume"
    ],
    "answer": 3,
    "cn": "她的外套不見了，所以我推測她已經離開辦公室。",
    "vocabIndex": 11
  },
  {
    "q": "Please knock before you come in; teenagers need their ______.",
    "options": [
      "privacy",
      "straw",
      "journalism",
      "jury"
    ],
    "answer": 0,
    "cn": "進來前請先敲門，青少年需要隱私。",
    "vocabIndex": 12
  },
  {
    "q": "As a ______ for breaking the window, he had to clean the classroom for a week.",
    "options": [
      "pill",
      "straw",
      "punishment",
      "sorrow"
    ],
    "answer": 2,
    "cn": "作為打破窗戶的懲罰，他必須打掃教室一週。",
    "vocabIndex": 13
  },
  {
    "q": "It is ______ to save some money every month for the future.",
    "options": [
      "literary",
      "sensible",
      "tidy",
      "merry"
    ],
    "answer": 1,
    "cn": "每個月為將來存點錢是明智的。",
    "vocabIndex": 14
  },
  {
    "q": "Would you like a ______ of lemon in your tea?",
    "options": [
      "liberty",
      "sorrow",
      "aptitude",
      "slice"
    ],
    "answer": 3,
    "cn": "你的茶裡要加一片檸檬嗎？",
    "vocabIndex": 15
  },
  {
    "q": "Her eyes were full of ______ when she spoke about her dead husband.",
    "options": [
      "sorrow",
      "privacy",
      "jury",
      "journalism"
    ],
    "answer": 0,
    "cn": "她談到過世的丈夫時，眼裡充滿悲傷。",
    "vocabIndex": 16
  },
  {
    "q": "The child drank her juice through a ______.",
    "options": [
      "liberty",
      "straw",
      "pill",
      "journalism"
    ],
    "answer": 1,
    "cn": "那個孩子用吸管喝果汁。",
    "vocabIndex": 17
  },
  {
    "q": "If a bee stings your hand, your fingers may ______ and turn red.",
    "options": [
      "hinder",
      "presume",
      "compliment",
      "swell"
    ],
    "answer": 3,
    "cn": "如果蜜蜂螫了你的手，你的手指可能會腫起來變紅。",
    "vocabIndex": 18
  },
  {
    "q": "She keeps her desk ______, with every pen and book in its place.",
    "options": [
      "sensible",
      "literary",
      "tidy",
      "merry"
    ],
    "answer": 2,
    "cn": "她把書桌保持整潔，每支筆和每本書都放在固定位置。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "merry": {
    "pos": "adj.",
    "en_def": "happy and full of fun",
    "cn_def": "歡樂的；愉快的"
  },
  "adolescent": {
    "pos": "n.",
    "en_def": "a young person who is growing from a child into an adult",
    "cn_def": "青少年"
  },
  "aptitude": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天資；才能"
  },
  "compliment": {
    "pos": "v.",
    "en_def": "to say something nice about someone",
    "cn_def": "讚美；恭維"
  },
  "hinder": {
    "pos": "v.",
    "en_def": "to make it difficult for someone to do something",
    "cn_def": "阻礙；妨礙"
  },
  "journalism": {
    "pos": "n.",
    "en_def": "the work of collecting and writing news",
    "cn_def": "新聞業"
  },
  "jury": {
    "pos": "n.",
    "en_def": "a group of ordinary people who decide in court if someone is guilty",
    "cn_def": "陪審團"
  },
  "justice": {
    "pos": "n.",
    "en_def": "fair treatment under the law",
    "cn_def": "正義；公平"
  },
  "liberty": {
    "pos": "n.",
    "en_def": "the freedom to live as you choose",
    "cn_def": "自由"
  },
  "literary": {
    "pos": "adj.",
    "en_def": "connected with books and writing of high quality",
    "cn_def": "文學的"
  },
  "pharmacy": {
    "pos": "n.",
    "en_def": "a store where medicine is prepared and sold",
    "cn_def": "藥局；藥房"
  },
  "pill": {
    "pos": "n.",
    "en_def": "a small, round piece of medicine that you swallow",
    "cn_def": "藥丸"
  },
  "presume": {
    "pos": "v.",
    "en_def": "to think that something is true without being sure",
    "cn_def": "假定；推測"
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the state of being alone and not watched by others",
    "cn_def": "隱私"
  },
  "punishment": {
    "pos": "n.",
    "en_def": "something bad that is done to someone because they did something wrong",
    "cn_def": "懲罰"
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "showing good judgment; reasonable",
    "cn_def": "明智的；講理的"
  },
  "slice": {
    "pos": "n.",
    "en_def": "a thin, flat piece cut from something",
    "cn_def": "薄片；一片"
  },
  "sorrow": {
    "pos": "n.",
    "en_def": "a feeling of great sadness",
    "cn_def": "悲傷；哀痛"
  },
  "straw": {
    "pos": "n.",
    "en_def": "a thin tube used for drinking",
    "cn_def": "吸管"
  },
  "swell": {
    "pos": "v.",
    "en_def": "to become larger than normal",
    "cn_def": "腫脹；膨脹"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "neat and in order",
    "cn_def": "整潔的"
  },
  "miserable": {
    "pos": "adj.",
    "en_def": "very unhappy or uncomfortable",
    "cn_def": "悲慘的；痛苦的"
  }
};

const EXTRA_GLOSSES = {};
