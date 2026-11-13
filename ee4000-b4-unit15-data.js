// Unit 15 Quiz Data: aggregate – viral
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "4000 Essential Words Book 4 U15 - aggregate – viral",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "aggregate",
    "pos": "adj.",
    "cn_def": "總計的",
    "en_def": "made by adding together all the amounts",
    "sentence": "The {{BLANK}} score of the two games was five to three.",
    "cn": "兩場比賽的總比分是五比三。"
  },
  {
    "word": "antibiotic",
    "pos": "n.",
    "cn_def": "抗生素",
    "en_def": "a medicine that kills bacteria and cures infections",
    "sentence": "The doctor gave her an {{BLANK}} to treat the infection in her ear.",
    "cn": "醫生給她開了抗生素治療耳朵的感染。"
  },
  {
    "word": "circuit",
    "pos": "n.",
    "cn_def": "電路",
    "en_def": "the complete path that electricity flows around",
    "sentence": "When you turn on the switch, you close the {{BLANK}} and the light comes on.",
    "cn": "打開開關時電路接通，燈就亮了。"
  },
  {
    "word": "complement",
    "pos": "v.",
    "cn_def": "補足；與…相配",
    "en_def": "to make something better by adding to it",
    "sentence": "The red wine will {{BLANK}} the taste of the steak perfectly.",
    "cn": "紅酒和牛排的味道會搭配得恰到好處。"
  },
  {
    "word": "compress",
    "pos": "v.",
    "cn_def": "壓縮",
    "en_def": "to press something into a smaller space",
    "sentence": "You can {{BLANK}} the file to make it small enough to send by e-mail.",
    "cn": "你可以壓縮檔案，讓它小到能用電子郵件寄出。"
  },
  {
    "word": "database",
    "pos": "n.",
    "cn_def": "資料庫",
    "en_def": "a large collection of information stored in a computer",
    "sentence": "The library keeps the names of all its books in a {{BLANK}}.",
    "cn": "圖書館把所有書名存放在資料庫裡。"
  },
  {
    "word": "equivalent",
    "pos": "n.",
    "cn_def": "相等物；對應物",
    "en_def": "something that has the same value or meaning as another thing",
    "sentence": "There is no exact English {{BLANK}} for this Chinese word.",
    "cn": "這個中文字沒有完全對應的英文字。"
  },
  {
    "word": "immune",
    "pos": "adj.",
    "cn_def": "免疫的",
    "en_def": "not able to be harmed by a disease",
    "sentence": "After you have had the disease once, you are usually {{BLANK}} to it.",
    "cn": "得過一次這種病之後，你通常就對它免疫了。"
  },
  {
    "word": "input",
    "pos": "n.",
    "cn_def": "意見；投入",
    "en_def": "ideas or information that you give to help a project",
    "sentence": "We would like your {{BLANK}} before we make a final decision.",
    "cn": "在做最後決定前，我們想聽聽你的意見。"
  },
  {
    "word": "intimate",
    "pos": "adj.",
    "cn_def": "親密的",
    "en_def": "very close and personal",
    "sentence": "She shared the secret only with a few {{BLANK}} friends.",
    "cn": "她只把這個秘密告訴幾位親密的朋友。"
  },
  {
    "word": "magnet",
    "pos": "n.",
    "cn_def": "磁鐵",
    "en_def": "a piece of metal that pulls iron toward it",
    "sentence": "I used a {{BLANK}} to pick up the pins that fell on the floor.",
    "cn": "我用磁鐵把掉在地上的大頭針吸起來。"
  },
  {
    "word": "metabolism",
    "pos": "n.",
    "cn_def": "新陳代謝",
    "en_def": "the process by which the body turns food into energy",
    "sentence": "Exercise speeds up your {{BLANK}}, so you burn more energy.",
    "cn": "運動會加速你的新陳代謝，讓你燃燒更多能量。"
  },
  {
    "word": "microchip",
    "pos": "n.",
    "cn_def": "微晶片",
    "en_def": "a very small part that makes a computer or phone work",
    "sentence": "The vet put a {{BLANK}} under the dog's skin so it could be found if lost.",
    "cn": "獸醫在狗的皮下植入微晶片，這樣走失時能找回來。"
  },
  {
    "word": "phase",
    "pos": "n.",
    "cn_def": "階段",
    "en_def": "one part of a process",
    "sentence": "The first {{BLANK}} of the building project will take six months.",
    "cn": "建築工程的第一階段將需要六個月。"
  },
  {
    "word": "pinch",
    "pos": "v.",
    "cn_def": "捏",
    "en_def": "to press something tightly between your finger and thumb",
    "sentence": "Don't {{BLANK}} your little sister's arm; it hurts her.",
    "cn": "別捏你妹妹的手臂，她會痛。"
  },
  {
    "word": "prevalent",
    "pos": "adj.",
    "cn_def": "普遍的；盛行的",
    "en_def": "common in a place or at a time",
    "sentence": "Colds are most {{BLANK}} in winter, when people stay indoors.",
    "cn": "感冒在人們待在室內的冬天最為普遍。"
  },
  {
    "word": "quantum",
    "pos": "n.",
    "cn_def": "量子",
    "en_def": "the smallest amount of energy that can exist",
    "sentence": "He is studying {{BLANK}} physics, the science of the smallest things.",
    "cn": "他正在研究量子物理，也就是研究最微小事物的科學。"
  },
  {
    "word": "ratio",
    "pos": "n.",
    "cn_def": "比例",
    "en_def": "the relationship between two amounts",
    "sentence": "The {{BLANK}} of teachers to students in this school is one to twenty.",
    "cn": "這所學校的師生比是一比二十。"
  },
  {
    "word": "spiral",
    "pos": "n.",
    "cn_def": "螺旋",
    "en_def": "a shape that curves around and around a central point",
    "sentence": "The stairs go up in a {{BLANK}} to the top of the tower.",
    "cn": "樓梯以螺旋狀通往塔頂。"
  },
  {
    "word": "viral",
    "pos": "adj.",
    "cn_def": "病毒的；網路爆紅的",
    "en_def": "caused by a virus; spreading very quickly on the Internet",
    "sentence": "The funny cat video went {{BLANK}} and was watched ten million times.",
    "cn": "那支好笑的貓咪影片在網路上爆紅，被觀看一千萬次。"
  }
];

const MCQS = [
  {
    "q": "The ______ score of the two games was five to three.",
    "options": [
      "aggregate",
      "viral",
      "prevalent",
      "intimate"
    ],
    "answer": 0,
    "cn": "兩場比賽的總比分是五比三。",
    "vocabIndex": 0
  },
  {
    "q": "The doctor gave her an ______ to treat the infection in her ear.",
    "options": [
      "quantum",
      "antibiotic",
      "equivalent",
      "metabolism"
    ],
    "answer": 1,
    "cn": "醫生給她開了抗生素治療耳朵的感染。",
    "vocabIndex": 1
  },
  {
    "q": "When you turn on the switch, you close the ______ and the light comes on.",
    "options": [
      "database",
      "equivalent",
      "circuit",
      "antibiotic"
    ],
    "answer": 2,
    "cn": "打開開關時電路接通，燈就亮了。",
    "vocabIndex": 2
  },
  {
    "q": "The red wine will ______ the taste of the steak perfectly.",
    "options": [
      "compress",
      "pinch",
      "conform",
      "complement"
    ],
    "answer": 3,
    "cn": "紅酒和牛排的味道會搭配得恰到好處。",
    "vocabIndex": 3
  },
  {
    "q": "You can ______ the file to make it small enough to send by e-mail.",
    "options": [
      "complement",
      "eliminate",
      "compress",
      "cite"
    ],
    "answer": 2,
    "cn": "你可以壓縮檔案，讓它小到能用電子郵件寄出。",
    "vocabIndex": 4
  },
  {
    "q": "The library keeps the names of all its books in a ______.",
    "options": [
      "database",
      "microchip",
      "equivalent",
      "ratio"
    ],
    "answer": 0,
    "cn": "圖書館把所有書名存放在資料庫裡。",
    "vocabIndex": 5
  },
  {
    "q": "There is no exact English ______ for this Chinese word.",
    "options": [
      "circuit",
      "equivalent",
      "phase",
      "database"
    ],
    "answer": 1,
    "cn": "這個中文字沒有完全對應的英文字。",
    "vocabIndex": 6
  },
  {
    "q": "After you have had the disease once, you are usually ______ to it.",
    "options": [
      "aggregate",
      "intimate",
      "prevalent",
      "immune"
    ],
    "answer": 3,
    "cn": "得過一次這種病之後，你通常就對它免疫了。",
    "vocabIndex": 7
  },
  {
    "q": "We would like your ______ before we make a final decision.",
    "options": [
      "metabolism",
      "spiral",
      "input",
      "quantum"
    ],
    "answer": 2,
    "cn": "在做最後決定前，我們想聽聽你的意見。",
    "vocabIndex": 8
  },
  {
    "q": "She shared the secret only with a few ______ friends.",
    "options": [
      "viral",
      "intimate",
      "aggregate",
      "immune"
    ],
    "answer": 1,
    "cn": "她只把這個秘密告訴幾位親密的朋友。",
    "vocabIndex": 9
  },
  {
    "q": "I used a ______ to pick up the pins that fell on the floor.",
    "options": [
      "ratio",
      "quantum",
      "spiral",
      "magnet"
    ],
    "answer": 3,
    "cn": "我用磁鐵把掉在地上的大頭針吸起來。",
    "vocabIndex": 10
  },
  {
    "q": "Exercise speeds up your ______, so you burn more energy.",
    "options": [
      "metabolism",
      "database",
      "equivalent",
      "quantum"
    ],
    "answer": 0,
    "cn": "運動會加速你的新陳代謝，讓你燃燒更多能量。",
    "vocabIndex": 11
  },
  {
    "q": "The vet put a ______ under the dog's skin so it could be found if lost.",
    "options": [
      "metabolism",
      "spiral",
      "microchip",
      "quantum"
    ],
    "answer": 2,
    "cn": "獸醫在狗的皮下植入微晶片，這樣走失時能找回來。",
    "vocabIndex": 12
  },
  {
    "q": "The first ______ of the building project will take six months.",
    "options": [
      "metabolism",
      "antibiotic",
      "quantum",
      "phase"
    ],
    "answer": 3,
    "cn": "建築工程的第一階段將需要六個月。",
    "vocabIndex": 13
  },
  {
    "q": "Don't ______ your little sister's arm; it hurts her.",
    "options": [
      "pinch",
      "complement",
      "tie",
      "undertake"
    ],
    "answer": 0,
    "cn": "別捏你妹妹的手臂，她會痛。",
    "vocabIndex": 14
  },
  {
    "q": "Colds are most ______ in winter, when people stay indoors.",
    "options": [
      "viral",
      "prevalent",
      "immune",
      "aggregate"
    ],
    "answer": 1,
    "cn": "感冒在人們待在室內的冬天最為普遍。",
    "vocabIndex": 15
  },
  {
    "q": "He is studying ______ physics, the science of the smallest things.",
    "options": [
      "quantum",
      "phase",
      "antibiotic",
      "magnet"
    ],
    "answer": 0,
    "cn": "他正在研究量子物理，也就是研究最微小事物的科學。",
    "vocabIndex": 16
  },
  {
    "q": "The ______ of teachers to students in this school is one to twenty.",
    "options": [
      "metabolism",
      "ratio",
      "magnet",
      "quantum"
    ],
    "answer": 1,
    "cn": "這所學校的師生比是一比二十。",
    "vocabIndex": 17
  },
  {
    "q": "The stairs go up in a ______ to the top of the tower.",
    "options": [
      "equivalent",
      "database",
      "spiral",
      "antibiotic"
    ],
    "answer": 2,
    "cn": "樓梯以螺旋狀通往塔頂。",
    "vocabIndex": 18
  },
  {
    "q": "The funny cat video went ______ and was watched ten million times.",
    "options": [
      "aggregate",
      "prevalent",
      "intimate",
      "viral"
    ],
    "answer": 3,
    "cn": "那支好笑的貓咪影片在網路上爆紅，被觀看一千萬次。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "tie": {
    "pos": "v.",
    "en_def": "to connect one thing closely with another",
    "cn_def": "使有關聯"
  },
  "undertake": {
    "pos": "v.",
    "en_def": "to agree to do a piece of work",
    "cn_def": "承擔；著手做"
  },
  "cite": {
    "pos": "v.",
    "en_def": "to mention something as an example or proof",
    "cn_def": "引用；舉出"
  },
  "aggregate": {
    "pos": "adj.",
    "en_def": "made by adding together all the amounts",
    "cn_def": "總計的"
  },
  "antibiotic": {
    "pos": "n.",
    "en_def": "a medicine that kills bacteria and cures infections",
    "cn_def": "抗生素"
  },
  "circuit": {
    "pos": "n.",
    "en_def": "the complete path that electricity flows around",
    "cn_def": "電路"
  },
  "complement": {
    "pos": "v.",
    "en_def": "to make something better by adding to it",
    "cn_def": "補足；與…相配"
  },
  "compress": {
    "pos": "v.",
    "en_def": "to press something into a smaller space",
    "cn_def": "壓縮"
  },
  "database": {
    "pos": "n.",
    "en_def": "a large collection of information stored in a computer",
    "cn_def": "資料庫"
  },
  "equivalent": {
    "pos": "n.",
    "en_def": "something that has the same value or meaning as another thing",
    "cn_def": "相等物；對應物"
  },
  "immune": {
    "pos": "adj.",
    "en_def": "not able to be harmed by a disease",
    "cn_def": "免疫的"
  },
  "input": {
    "pos": "n.",
    "en_def": "ideas or information that you give to help a project",
    "cn_def": "意見；投入"
  },
  "intimate": {
    "pos": "adj.",
    "en_def": "very close and personal",
    "cn_def": "親密的"
  },
  "magnet": {
    "pos": "n.",
    "en_def": "a piece of metal that pulls iron toward it",
    "cn_def": "磁鐵"
  },
  "metabolism": {
    "pos": "n.",
    "en_def": "the process by which the body turns food into energy",
    "cn_def": "新陳代謝"
  },
  "microchip": {
    "pos": "n.",
    "en_def": "a very small part that makes a computer or phone work",
    "cn_def": "微晶片"
  },
  "phase": {
    "pos": "n.",
    "en_def": "one part of a process",
    "cn_def": "階段"
  },
  "pinch": {
    "pos": "v.",
    "en_def": "to press something tightly between your finger and thumb",
    "cn_def": "捏"
  },
  "prevalent": {
    "pos": "adj.",
    "en_def": "common in a place or at a time",
    "cn_def": "普遍的；盛行的"
  },
  "quantum": {
    "pos": "n.",
    "en_def": "the smallest amount of energy that can exist",
    "cn_def": "量子"
  },
  "ratio": {
    "pos": "n.",
    "en_def": "the relationship between two amounts",
    "cn_def": "比例"
  },
  "spiral": {
    "pos": "n.",
    "en_def": "a shape that curves around and around a central point",
    "cn_def": "螺旋"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "caused by a virus; spreading very quickly on the Internet",
    "cn_def": "病毒的；網路爆紅的"
  },
  "eliminate": {
    "pos": "v.",
    "en_def": "to remove something completely",
    "cn_def": "消除；淘汰"
  },
  "conform": {
    "pos": "v.",
    "en_def": "to obey a rule or behave like everyone else",
    "cn_def": "遵守；順從"
  }
};

const EXTRA_GLOSSES = {};
