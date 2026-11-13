// Unit 25 Quiz Data: painful – period
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U25 - painful – period",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "painful",
    "pos": "adj.",
    "cn_def": "痛苦的，疼痛的",
    "en_def": "making you feel pain or very sad",
    "sentence": "It was a {{BLANK}} experience.",
    "cn": "這是一個痛苦的經歷。"
  },
  {
    "word": "painter",
    "pos": "n.",
    "cn_def": "畫家，油漆工",
    "en_def": "a person who paints pictures or walls",
    "sentence": "The {{BLANK}} is working on a new piece.",
    "cn": "畫家正在創作一幅新作品。"
  },
  {
    "word": "pajamas",
    "pos": "n.",
    "cn_def": "睡衣",
    "en_def": "soft clothes that you wear in bed",
    "sentence": "She wore her favorite {{BLANK}}.",
    "cn": "她穿著她最喜歡的睡衣。"
  },
  {
    "word": "pale",
    "pos": "adj.",
    "cn_def": "蒼白的，淡色的",
    "en_def": "having a light or white face, often because you are sick",
    "sentence": "He looked very {{BLANK}} after being sick.",
    "cn": "他病後看起來很蒼白。"
  },
  {
    "word": "pan",
    "pos": "n.",
    "cn_def": "平底鍋，盆",
    "en_def": "a flat metal dish with a handle for cooking",
    "sentence": "She fried the eggs in a {{BLANK}}.",
    "cn": "她用平底鍋煎蛋。"
  },
  {
    "word": "panda",
    "pos": "n.",
    "cn_def": "熊貓",
    "en_def": "a big black and white bear from China",
    "sentence": "The {{BLANK}} is a symbol of China.",
    "cn": "熊貓是中國的象徵。"
  },
  {
    "word": "pardon",
    "pos": "v.",
    "cn_def": "原諒，寬恕",
    "en_def": "to forgive someone",
    "sentence": "She asked him to {{BLANK}} her mistake.",
    "cn": "她請求他原諒她的錯誤。"
  },
  {
    "word": "parking lot",
    "pos": "n.",
    "cn_def": "停車場",
    "en_def": "an open place where people leave their cars",
    "sentence": "There is a {{BLANK}} behind the building.",
    "cn": "建築物後面有一個停車場。",
    "nblanks": 2
  },
  {
    "word": "parrot",
    "pos": "n.",
    "cn_def": "鸚鵡",
    "en_def": "a colorful bird that can copy what people say",
    "sentence": "The {{BLANK}} can mimic human speech.",
    "cn": "鸚鵡能模仿人類的語音。"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "夥伴，搭檔",
    "en_def": "a person you work or do something with",
    "sentence": "She is my business {{BLANK}}.",
    "cn": "她是我的商業夥伴。"
  },
  {
    "word": "passenger",
    "pos": "n.",
    "cn_def": "乘客",
    "en_def": "a person riding in a bus, train, car, or plane who is not the driver",
    "sentence": "The {{BLANK}} boarded the bus.",
    "cn": "乘客上了公車。"
  },
  {
    "word": "path",
    "pos": "n.",
    "cn_def": "小路，路徑",
    "en_def": "a small road for walking",
    "sentence": "They walked along the garden {{BLANK}}.",
    "cn": "他們沿著花園的小路散步。"
  },
  {
    "word": "patient",
    "pos": "n.",
    "cn_def": "病人，耐心的",
    "en_def": "a person who is being treated by a doctor",
    "sentence": "The doctor treated the {{BLANK}}.",
    "cn": "醫生治療病人。"
  },
  {
    "word": "pattern",
    "pos": "n.",
    "cn_def": "圖案，模式",
    "en_def": "shapes, lines, or colors that repeat on cloth or paper",
    "sentence": "The dress has a beautiful floral {{BLANK}}.",
    "cn": "這件連衣裙有一個美麗的花卉圖案。"
  },
  {
    "word": "pause",
    "pos": "v.",
    "cn_def": "暫停，中止",
    "en_def": "to stop for a short time",
    "sentence": "She {{BLANK}} to catch her breath.",
    "cn": "她停下來喘口氣。"
  },
  {
    "word": "peace",
    "pos": "n.",
    "cn_def": "和平，安寧",
    "en_def": "a time when there is no war or fighting",
    "sentence": "They prayed for {{BLANK}}.",
    "cn": "他們祈求和平。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "和平的，安靜的",
    "en_def": "quiet and calm",
    "sentence": "It was a {{BLANK}} evening.",
    "cn": "那是一個平靜的夜晚。"
  },
  {
    "word": "pepper",
    "pos": "n.",
    "cn_def": "胡椒，辣椒",
    "en_def": "a black or white powder that makes food taste hot",
    "sentence": "She added some {{BLANK}} to the soup.",
    "cn": "她在湯裡加了一些胡椒。"
  },
  {
    "word": "perfect",
    "pos": "adj.",
    "cn_def": "完美的，理想的",
    "en_def": "so good that it cannot be better",
    "sentence": "She has a {{BLANK}} record.",
    "cn": "她有一個完美的記錄。"
  },
  {
    "word": "period",
    "pos": "n.",
    "cn_def": "時期，句號",
    "en_def": "a length of time; one part of a course",
    "sentence": "This is the final {{BLANK}} of the course.",
    "cn": "這是課程的最後一個階段。"
  }
];

const MCQS = [
  {
    "q": "It was a ______ experience.【痛苦的，疼痛的】",
    "options": [
      "painful",
      "pale",
      "perfect",
      "peaceful"
    ],
    "answer": 0,
    "cn": "這是一個痛苦的經歷。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ is working on a new piece.【畫家，油漆工】",
    "options": [
      "partner",
      "painter",
      "pepper",
      "peace"
    ],
    "answer": 1,
    "cn": "畫家正在創作一幅新作品。",
    "vocabIndex": 1
  },
  {
    "q": "She wore her favorite ______.【睡衣】",
    "options": [
      "pattern",
      "period",
      "partner",
      "pajamas"
    ],
    "answer": 3,
    "cn": "她穿著她最喜歡的睡衣。",
    "vocabIndex": 2
  },
  {
    "q": "He looked very ______ after being sick.【蒼白的，淡色的】",
    "options": [
      "peaceful",
      "perfect",
      "pale",
      "painful"
    ],
    "answer": 2,
    "cn": "他病後看起來很蒼白。",
    "vocabIndex": 3
  },
  {
    "q": "She fried the eggs in a ______.【平底鍋，盆】",
    "options": [
      "painter",
      "pan",
      "passenger",
      "panda"
    ],
    "answer": 1,
    "cn": "她用平底鍋煎蛋。",
    "vocabIndex": 4
  },
  {
    "q": "The ______ is a symbol of China.【熊貓】",
    "options": [
      "partner",
      "period",
      "path",
      "panda"
    ],
    "answer": 3,
    "cn": "熊貓是中國的象徵。",
    "vocabIndex": 5
  },
  {
    "q": "She asked him to ______ her mistake.【原諒，寬恕】",
    "options": [
      "paused",
      "gain",
      "pardon",
      "develop"
    ],
    "answer": 2,
    "cn": "她請求他原諒她的錯誤。",
    "vocabIndex": 6
  },
  {
    "q": "There is a ______ behind the building.【停車場】",
    "options": [
      "parking lot",
      "pan",
      "pepper",
      "passenger"
    ],
    "answer": 0,
    "cn": "建築物後面有一個停車場。",
    "vocabIndex": 7
  },
  {
    "q": "The ______ can mimic human speech.【鸚鵡】",
    "options": [
      "period",
      "passenger",
      "partner",
      "parrot"
    ],
    "answer": 3,
    "cn": "鸚鵡能模仿人類的語音。",
    "vocabIndex": 8
  },
  {
    "q": "She is my business ______.【夥伴，搭檔】",
    "options": [
      "pattern",
      "period",
      "partner",
      "pepper"
    ],
    "answer": 2,
    "cn": "她是我的商業夥伴。",
    "vocabIndex": 9
  },
  {
    "q": "The ______ boarded the bus.【乘客】",
    "options": [
      "passenger",
      "peace",
      "period",
      "parking lot"
    ],
    "answer": 0,
    "cn": "乘客上了公車。",
    "vocabIndex": 10
  },
  {
    "q": "They walked along the garden ______.【小路，路徑】",
    "options": [
      "painter",
      "path",
      "patient",
      "panda"
    ],
    "answer": 1,
    "cn": "他們沿著花園的小路散步。",
    "vocabIndex": 11
  },
  {
    "q": "The doctor treated the ______.【病人，耐心的】",
    "options": [
      "patient",
      "period",
      "path",
      "peace"
    ],
    "answer": 0,
    "cn": "醫生治療病人。",
    "vocabIndex": 12
  },
  {
    "q": "The dress has a beautiful floral ______.【圖案，模式】",
    "options": [
      "painter",
      "pattern",
      "passenger",
      "pepper"
    ],
    "answer": 1,
    "cn": "這件連衣裙有一個美麗的花卉圖案。",
    "vocabIndex": 13
  },
  {
    "q": "She ______ to catch her breath.【暫停，中止】",
    "options": [
      "pardon",
      "ruined",
      "decorated",
      "paused"
    ],
    "answer": 3,
    "cn": "她停下來喘口氣。",
    "vocabIndex": 14
  },
  {
    "q": "They prayed for ______.【和平，安寧】",
    "options": [
      "patient",
      "period",
      "peace",
      "painter"
    ],
    "answer": 2,
    "cn": "他們祈求和平。",
    "vocabIndex": 15
  },
  {
    "q": "It was a ______ evening.【和平的，安靜的】",
    "options": [
      "peaceful",
      "pale",
      "perfect",
      "painful"
    ],
    "answer": 0,
    "cn": "那是一個平靜的夜晚。",
    "vocabIndex": 16
  },
  {
    "q": "She added some ______ to the soup.【胡椒，辣椒】",
    "options": [
      "path",
      "pepper",
      "patient",
      "parrot"
    ],
    "answer": 1,
    "cn": "她在湯裡加了一些胡椒。",
    "vocabIndex": 17
  },
  {
    "q": "She has a ______ record.【完美的，理想的】",
    "options": [
      "pale",
      "peaceful",
      "painful",
      "perfect"
    ],
    "answer": 3,
    "cn": "她有一個完美的記錄。",
    "vocabIndex": 18
  },
  {
    "q": "This is the final ______ of the course.【時期，句號】",
    "options": [
      "panda",
      "parrot",
      "period",
      "pan"
    ],
    "answer": 2,
    "cn": "這是課程的最後一個階段。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "decorated": {
    "pos": "v.",
    "en_def": "to make a place look nice by putting pretty things in it",
    "cn_def": "裝飾"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to make something new and better over time",
    "cn_def": "發展，開發"
  },
  "gain": {
    "pos": "v.",
    "en_def": "to get something that you want or need",
    "cn_def": "獲得，增加"
  },
  "painful": {
    "pos": "adj.",
    "en_def": "making you feel pain or very sad",
    "cn_def": "痛苦的，疼痛的"
  },
  "painter": {
    "pos": "n.",
    "en_def": "a person who paints pictures or walls",
    "cn_def": "畫家，油漆工"
  },
  "pajamas": {
    "pos": "n.",
    "en_def": "soft clothes that you wear in bed",
    "cn_def": "睡衣"
  },
  "pale": {
    "pos": "adj.",
    "en_def": "having a light or white face, often because you are sick",
    "cn_def": "蒼白的，淡色的"
  },
  "pan": {
    "pos": "n.",
    "en_def": "a flat metal dish with a handle for cooking",
    "cn_def": "平底鍋，盆"
  },
  "panda": {
    "pos": "n.",
    "en_def": "a big black and white bear from China",
    "cn_def": "熊貓"
  },
  "pardon": {
    "pos": "v.",
    "en_def": "to forgive someone",
    "cn_def": "原諒，寬恕"
  },
  "parking lot": {
    "pos": "n.",
    "en_def": "an open place where people leave their cars",
    "cn_def": "停車場"
  },
  "parrot": {
    "pos": "n.",
    "en_def": "a colorful bird that can copy what people say",
    "cn_def": "鸚鵡"
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person you work or do something with",
    "cn_def": "夥伴，搭檔"
  },
  "passenger": {
    "pos": "n.",
    "en_def": "a person riding in a bus, train, car, or plane who is not the driver",
    "cn_def": "乘客"
  },
  "path": {
    "pos": "n.",
    "en_def": "a small road for walking",
    "cn_def": "小路，路徑"
  },
  "patient": {
    "pos": "n.",
    "en_def": "a person who is being treated by a doctor",
    "cn_def": "病人，耐心的"
  },
  "pattern": {
    "pos": "n.",
    "en_def": "shapes, lines, or colors that repeat on cloth or paper",
    "cn_def": "圖案，模式"
  },
  "paused": {
    "pos": "v.",
    "en_def": "to stop for a short time",
    "cn_def": "暫停，中止"
  },
  "peace": {
    "pos": "n.",
    "en_def": "a time when there is no war or fighting",
    "cn_def": "和平，安寧"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "和平的，安靜的"
  },
  "pepper": {
    "pos": "n.",
    "en_def": "a black or white powder that makes food taste hot",
    "cn_def": "胡椒，辣椒"
  },
  "perfect": {
    "pos": "adj.",
    "en_def": "so good that it cannot be better",
    "cn_def": "完美的，理想的"
  },
  "period": {
    "pos": "n.",
    "en_def": "a length of time; one part of a course",
    "cn_def": "時期，句號"
  },
  "ruined": {
    "pos": "v.",
    "en_def": "to spoil or destroy something completely",
    "cn_def": "毀壞，破壞"
  }
};

const EXTRA_GLOSSES = {};
