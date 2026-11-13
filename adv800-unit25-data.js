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
    "q": "My broken arm is very ______. I can't sleep at night.",
    "options": [
      "peaceful",
      "painful",
      "perfect",
      "pale"
    ],
    "answer": 1,
    "cn": "這是一個痛苦的經歷。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ is making a picture of the mountains. He uses a brush and many colors.",
    "options": [
      "passenger",
      "partner",
      "patient",
      "painter"
    ],
    "answer": 3,
    "cn": "畫家正在創作一幅新作品。",
    "vocabIndex": 1
  },
  {
    "q": "I put on my ______ and went to bed at ten.",
    "options": [
      "pans",
      "paths",
      "pajamas",
      "parrots"
    ],
    "answer": 2,
    "cn": "她穿著她最喜歡的睡衣。",
    "vocabIndex": 2
  },
  {
    "q": "You look ______. Your face is white. Are you sick?",
    "options": [
      "pale",
      "painful",
      "peaceful",
      "perfect"
    ],
    "answer": 0,
    "cn": "他病後看起來很蒼白。",
    "vocabIndex": 3
  },
  {
    "q": "Dad fried two eggs in a ______.",
    "options": [
      "path",
      "parrot",
      "panda",
      "pan"
    ],
    "answer": 3,
    "cn": "她用平底鍋煎蛋。",
    "vocabIndex": 4
  },
  {
    "q": "A ______ is a black and white bear from China. It loves to eat bamboo.",
    "options": [
      "parrot",
      "painter",
      "panda",
      "partner"
    ],
    "answer": 2,
    "cn": "熊貓是中國的象徵。",
    "vocabIndex": 5
  },
  {
    "q": "Please ______ me for being late. The bus didn't come on time.",
    "options": [
      "pause",
      "pardon",
      "obey",
      "offer"
    ],
    "answer": 1,
    "cn": "她請求他原諒她的錯誤。",
    "vocabIndex": 6
  },
  {
    "q": "The supermarket has a big ______. You can leave your car there for free.",
    "options": [
      "parking lot",
      "pattern",
      "period",
      "path"
    ],
    "answer": 0,
    "cn": "建築物後面有一個停車場。",
    "vocabIndex": 7
  },
  {
    "q": "My ______ can say \"hello\" and \"good-bye.\" It is a very smart bird.",
    "options": [
      "panda",
      "painter",
      "passenger",
      "parrot"
    ],
    "answer": 3,
    "cn": "鸚鵡能模仿人類的語音。",
    "vocabIndex": 8
  },
  {
    "q": "Amy is my dance ______. We always practice together.",
    "options": [
      "partner",
      "pattern",
      "path",
      "pepper"
    ],
    "answer": 0,
    "cn": "她是我的商業夥伴。",
    "vocabIndex": 9
  },
  {
    "q": "There were forty ______ on the bus. The driver told them to sit down.",
    "options": [
      "patterns",
      "peppers",
      "passengers",
      "periods"
    ],
    "answer": 2,
    "cn": "乘客上了公車。",
    "vocabIndex": 10
  },
  {
    "q": "We walked along a small ______ through the forest. Cars can't use it.",
    "options": [
      "pan",
      "path",
      "pattern",
      "peace"
    ],
    "answer": 1,
    "cn": "他們沿著花園的小路散步。",
    "vocabIndex": 11
  },
  {
    "q": "The doctor is seeing a ______ now. The sick man has a high fever.",
    "options": [
      "painter",
      "passenger",
      "partner",
      "patient"
    ],
    "answer": 3,
    "cn": "醫生治療病人。",
    "vocabIndex": 12
  },
  {
    "q": "I like the ______ on your dress. The little blue flowers are very pretty.",
    "options": [
      "path",
      "pattern",
      "pepper",
      "peace"
    ],
    "answer": 1,
    "cn": "這件連衣裙有一個美麗的花卉圖案。",
    "vocabIndex": 13
  },
  {
    "q": "The speaker ______ for a moment to drink some water. Then he went on.",
    "options": [
      "paused",
      "pardoned",
      "obeyed",
      "offered"
    ],
    "answer": 0,
    "cn": "她停下來喘口氣。",
    "vocabIndex": 14
  },
  {
    "q": "After the long war, the two countries finally lived in ______.",
    "options": [
      "pepper",
      "pattern",
      "peace",
      "path"
    ],
    "answer": 2,
    "cn": "他們祈求和平。",
    "vocabIndex": 15
  },
  {
    "q": "It is quiet and ______ in the country. There are no cars or loud noises.",
    "options": [
      "painful",
      "pale",
      "perfect",
      "peaceful"
    ],
    "answer": 3,
    "cn": "那是一個平靜的夜晚。",
    "vocabIndex": 16
  },
  {
    "q": "The soup needs a little salt and ______.",
    "options": [
      "pepper",
      "peace",
      "pattern",
      "path"
    ],
    "answer": 0,
    "cn": "她在湯裡加了一些胡椒。",
    "vocabIndex": 17
  },
  {
    "q": "Your answers are all right. You got a ______ score: 100!",
    "options": [
      "painful",
      "perfect",
      "pale",
      "peaceful"
    ],
    "answer": 1,
    "cn": "她有一個完美的記錄。",
    "vocabIndex": 18
  },
  {
    "q": "We have math in the first ______ and English in the second.",
    "options": [
      "pattern",
      "pepper",
      "period",
      "path"
    ],
    "answer": 2,
    "cn": "這是課程的最後一個階段。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "和平的，安靜的"
  },
  "painful": {
    "pos": "adj.",
    "en_def": "making you feel pain or very sad",
    "cn_def": "痛苦的，疼痛的"
  },
  "perfect": {
    "pos": "adj.",
    "en_def": "so good that it cannot be better",
    "cn_def": "完美的，理想的"
  },
  "pale": {
    "pos": "adj.",
    "en_def": "having a light or white face, often because you are sick",
    "cn_def": "蒼白的，淡色的"
  },
  "passenger": {
    "pos": "n.",
    "en_def": "a person riding in a bus, train, car, or plane who is not the driver",
    "cn_def": "乘客"
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person you work or do something with",
    "cn_def": "夥伴，搭檔"
  },
  "patient": {
    "pos": "n.",
    "en_def": "a person who is being treated by a doctor",
    "cn_def": "病人，耐心的"
  },
  "painter": {
    "pos": "n.",
    "en_def": "a person who paints pictures or walls",
    "cn_def": "畫家，油漆工"
  },
  "pans": {
    "pos": "n.",
    "en_def": "a flat metal dish with a handle for cooking",
    "cn_def": "平底鍋，盆"
  },
  "paths": {
    "pos": "n.",
    "en_def": "a small road for walking",
    "cn_def": "小路，路徑"
  },
  "pajamas": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "睡衣"
  },
  "parrots": {
    "pos": "n.",
    "en_def": "a colorful bird that can copy what people say",
    "cn_def": "鸚鵡"
  },
  "path": {
    "pos": "n.",
    "en_def": "a small road for walking",
    "cn_def": "小路，路徑"
  },
  "parrot": {
    "pos": "n.",
    "en_def": "a colorful bird that can copy what people say",
    "cn_def": "鸚鵡"
  },
  "panda": {
    "pos": "n.",
    "en_def": "a big black and white bear from China",
    "cn_def": "熊貓"
  },
  "pan": {
    "pos": "n.",
    "en_def": "a flat metal dish with a handle for cooking",
    "cn_def": "平底鍋，盆"
  },
  "pause": {
    "pos": "v.",
    "en_def": "to stop for a short time",
    "cn_def": "暫停，中止"
  },
  "pardon": {
    "pos": "v.",
    "en_def": "to forgive someone",
    "cn_def": "原諒，寬恕"
  },
  "obey": {
    "pos": "v.",
    "en_def": "to do what someone tells you to do",
    "cn_def": "服從，遵守"
  },
  "offer": {
    "pos": "v.",
    "en_def": "to say that you will do something for someone or give them something",
    "cn_def": "提供，提議"
  },
  "parking lot": {
    "pos": "n.",
    "en_def": "an open place where people leave their cars",
    "cn_def": "停車場"
  },
  "pattern": {
    "pos": "n.",
    "en_def": "shapes, lines, or colors that repeat on cloth or paper",
    "cn_def": "圖案，模式"
  },
  "period": {
    "pos": "n.",
    "en_def": "a length of time; one part of a course",
    "cn_def": "時期，句號"
  },
  "pepper": {
    "pos": "n.",
    "en_def": "a black or white powder that makes food taste hot",
    "cn_def": "胡椒，辣椒"
  },
  "patterns": {
    "pos": "n.",
    "en_def": "shapes, lines, or colors that repeat on cloth or paper",
    "cn_def": "圖案，模式"
  },
  "peppers": {
    "pos": "n.",
    "en_def": "a black or white powder that makes food taste hot",
    "cn_def": "胡椒，辣椒"
  },
  "passengers": {
    "pos": "n.",
    "en_def": "a person riding in a bus, train, car, or plane who is not the driver",
    "cn_def": "乘客"
  },
  "periods": {
    "pos": "n.",
    "en_def": "a length of time; one part of a course",
    "cn_def": "時期，句號"
  },
  "peace": {
    "pos": "n.",
    "en_def": "a time when there is no war or fighting",
    "cn_def": "和平，安寧"
  },
  "paused": {
    "pos": "v.",
    "en_def": "to stop for a short time",
    "cn_def": "暫停，中止"
  },
  "pardoned": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "原諒"
  },
  "obeyed": {
    "pos": "v.",
    "en_def": "to do what someone tells you to do",
    "cn_def": "服從，遵守"
  },
  "offered": {
    "pos": "v.",
    "en_def": "to say that you will do something for someone or give them something",
    "cn_def": "提供，提議"
  }
};

const EXTRA_GLOSSES = {};
