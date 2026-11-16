// Topic 6 Subunit 15 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S15 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hit the books",
    "pos": "v.phr.",
    "cn_def": "開始用功讀書",
    "en_def": "to start studying hard",
    "sentence": "The final exams start next week, so I need to {{BLANK}} instead of going to the cinema tonight.",
    "cn": "期末考下週開始，所以我今晚得開始用功讀書，而不是去看電影。"
  },
  {
    "word": "learn by heart",
    "pos": "v.phr.",
    "cn_def": "背熟；牢記",
    "en_def": "to memorise something so you can say it perfectly",
    "sentence": "We had to {{BLANK}} a short poem, and each student recited it in front of the class.",
    "cn": "我們必須背熟一首短詩，而且每位學生都要在全班面前背誦。"
  },
  {
    "word": "pass with flying colours",
    "pos": "v.phr.",
    "cn_def": "以優異成績通過",
    "en_def": "to pass a test very successfully",
    "sentence": "She was nervous about the speaking test, but she {{BLANK}} and got the highest score in her class.",
    "cn": "她對口說測驗很緊張，但她以優異成績通過，拿到班上最高分。"
  },
  {
    "word": "teacher's pet",
    "pos": "n.phr.",
    "cn_def": "老師的寵兒",
    "en_def": "a student whom the teacher seems to like best",
    "sentence": "Some classmates call him the {{BLANK}}, but he simply works hard and asks good questions.",
    "cn": "有些同學叫他老師的寵兒，但他只是很努力又會問好問題。"
  },
  {
    "word": "brush up on",
    "pos": "v.phr.",
    "cn_def": "複習；重溫",
    "en_def": "to practise and improve a skill you used to have",
    "sentence": "I need to {{BLANK}} my Japanese before the trip, because I have forgotten many useful phrases.",
    "cn": "出發前我需要複習一下日文，因為我忘了很多實用的句子。"
  },
  {
    "word": "show of hands",
    "pos": "n.phr.",
    "cn_def": "舉手表決",
    "en_def": "a vote where people raise their hands",
    "sentence": "The teacher asked for a {{BLANK}}, and most students chose to go to the science museum.",
    "cn": "老師請大家舉手表決，大部分學生選擇去科學博物館。"
  },
  {
    "word": "trial and error",
    "pos": "n.phr.",
    "cn_def": "反覆試驗；試誤",
    "en_def": "trying different ways until you find one that works",
    "sentence": "We built the bridge model by {{BLANK}}, and it finally held two kilograms after five attempts.",
    "cn": "我們用反覆試驗的方式做橋梁模型，試了五次後它終於撐住了兩公斤。"
  },
  {
    "word": "jot down",
    "pos": "v.phr.",
    "cn_def": "匆匆記下",
    "en_def": "to write something quickly",
    "sentence": "Please {{BLANK}} any new words during the video, and we will check their meanings together afterwards.",
    "cn": "請在看影片時記下任何生字，之後我們會一起查它們的意思。"
  },
  {
    "word": "look up",
    "pos": "v.phr.",
    "cn_def": "查詢（字典等）",
    "en_def": "to search for information in a book or online",
    "sentence": "When I find a new word, I {{BLANK}} its meaning, and then I write an example sentence in my notebook.",
    "cn": "我遇到生字時會查它的意思，然後在筆記本上寫一個例句。"
  },
  {
    "word": "read between the lines",
    "pos": "v.phr.",
    "cn_def": "領會言外之意",
    "en_def": "to understand a hidden meaning",
    "sentence": "The question asks you to {{BLANK}}, because the writer never says directly how she feels.",
    "cn": "這題要你讀出言外之意，因為作者從未直接說出她的感受。"
  },
  {
    "word": "growth mindset",
    "pos": "n.phr.",
    "cn_def": "成長型思維",
    "en_def": "the belief that ability can grow with effort",
    "sentence": "Teachers try to build a {{BLANK}} in students, so they see mistakes as chances to learn rather than signs of failure.",
    "cn": "老師們試著培養學生的成長型思維，讓他們把錯誤視為學習的機會，而不是失敗的象徵。"
  },
  {
    "word": "practice makes perfect",
    "pos": "phr.",
    "cn_def": "熟能生巧",
    "en_def": "doing something often is the way to become good at it",
    "sentence": "My piano teacher always says \"{{BLANK}}\", so I play for thirty minutes every day.",
    "cn": "我的鋼琴老師總是說「熟能生巧」，所以我每天彈三十分鐘。"
  },
  {
    "word": "hand in",
    "pos": "v.phr.",
    "cn_def": "繳交",
    "en_def": "to give your work to a teacher",
    "sentence": "Please {{BLANK}} your reports by Friday, or the teacher will take ten points off your score.",
    "cn": "請在星期五前繳交報告，否則老師會扣十分。"
  },
  {
    "word": "keep up with",
    "pos": "v.phr.",
    "cn_def": "跟上",
    "en_def": "to move or learn at the same speed as others",
    "sentence": "He missed two weeks of school, so it was hard to {{BLANK}} the rest of the class.",
    "cn": "他缺課兩週，所以很難跟上班上其他同學。"
  },
  {
    "word": "get the hang of",
    "pos": "v.phr.",
    "cn_def": "掌握訣竅；學會",
    "en_def": "to learn how to do something",
    "sentence": "Coding seemed impossible at first, but I {{BLANK}} it after a few weeks of practice.",
    "cn": "一開始寫程式似乎不可能，但練習幾週後我就掌握了訣竅。"
  },
  {
    "word": "cut corners",
    "pos": "v.phr.",
    "cn_def": "偷工減料；走捷徑",
    "en_def": "to do something badly to save time or effort",
    "sentence": "Don't {{BLANK}} on your science project, because the judges will check every step of your method.",
    "cn": "做科學專題別偷工減料，因為評審會檢查你方法中的每一個步驟。"
  },
  {
    "word": "pay attention to",
    "pos": "v.phr.",
    "cn_def": "注意",
    "en_def": "to listen or watch carefully",
    "sentence": "Please {{BLANK}} the instructions, because the order of the steps is very important in this experiment.",
    "cn": "請注意操作說明，因為這個實驗中步驟的順序非常重要。"
  },
  {
    "word": "learn the hard way",
    "pos": "v.phr.",
    "cn_def": "從慘痛經驗中學到",
    "en_def": "to learn something through a bad experience",
    "sentence": "I didn't back up my files, so I {{BLANK}} when my laptop crashed the night before the deadline.",
    "cn": "我沒有備份檔案，所以截止日前一晚筆電當機時，我從慘痛經驗中學到了教訓。"
  },
  {
    "word": "learn from one's mistakes",
    "pos": "v.phr.",
    "cn_def": "從錯誤中學習",
    "en_def": "to improve by understanding what you did wrong",
    "sentence": "Ken failed his first driving test, but he {{BLANK}} and passed easily the second time.",
    "cn": "肯第一次駕照考試沒過，但他從錯誤中學習，第二次輕鬆通過了。"
  },
  {
    "word": "self-fulfilling prophecy",
    "pos": "n.phr.",
    "cn_def": "自我應驗的預言",
    "en_def": "a belief that makes itself come true",
    "sentence": "If teachers expect a student to fail, it can become a {{BLANK}}, because the student may stop trying.",
    "cn": "如果老師預期某位學生會失敗，這可能會成為自我應驗的預言，因為學生可能會放棄努力。"
  }
];

const MCQS = [
  {
    "q": "The final exams start next week, so I need to _____ instead of going to the cinema tonight.",
    "options": [
      "study abroad",
      "read between the lines",
      "hit the books",
      "cut corners"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "We had to _____ a short poem, and each student recited it in front of the class.",
    "options": [
      "pay attention to",
      "learn from one's mistakes",
      "study abroad",
      "learn by heart"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "She was nervous about the speaking test, but she _____ and got the highest score in her class.",
    "options": [
      "pass with flying colours",
      "read between the lines",
      "get the hang of",
      "cut corners"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Some classmates call him the _____, but he simply works hard and asks good questions.",
    "options": [
      "student loan",
      "teacher's pet",
      "mind map",
      "marking scheme"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "I need to _____ my Japanese before the trip, because I have forgotten many useful phrases.",
    "options": [
      "brush up on",
      "hand in",
      "jot down",
      "learn from one's mistakes"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The teacher asked for a _____, and most students chose to go to the science museum.",
    "options": [
      "visual aid",
      "time management",
      "show of hands",
      "learning style"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "We built the bridge model by _____, and it finally held two kilograms after five attempts.",
    "options": [
      "learning disability",
      "boarding school",
      "student teacher",
      "trial and error"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please _____ any new words during the video, and we will check their meanings together afterwards.",
    "options": [
      "pass with flying colours",
      "jot down",
      "learn the hard way",
      "study abroad"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "When I find a new word, I _____ its meaning, and then I write an example sentence in my notebook.",
    "options": [
      "look up",
      "get the hang of",
      "hand in",
      "pass with flying colours"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The question asks you to _____, because the writer never says directly how she feels.",
    "options": [
      "keep up with",
      "cut corners",
      "learn the hard way",
      "read between the lines"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Teachers try to build a _____ in students, so they see mistakes as chances to learn rather than signs of failure.",
    "options": [
      "student teacher",
      "growth mindset",
      "time management",
      "state school"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "My piano teacher always says \"_____\", so I play for thirty minutes every day.",
    "options": [
      "ability grouping",
      "learn by heart",
      "practice makes perfect",
      "pass rate"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Please _____ your reports by Friday, or the teacher will take ten points off your score.",
    "options": [
      "jot down",
      "cut corners",
      "brush up on",
      "hand in"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "He missed two weeks of school, so it was hard to _____ the rest of the class.",
    "options": [
      "read between the lines",
      "keep up with",
      "cut corners",
      "brush up on"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Coding seemed impossible at first, but I _____ it after a few weeks of practice.",
    "options": [
      "pay attention to",
      "learn by heart",
      "get the hang of",
      "study abroad"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Don't _____ on your science project, because the judges will check every step of your method.",
    "options": [
      "cut corners",
      "learn from one's mistakes",
      "get the hang of",
      "pay attention to"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Please _____ the instructions, because the order of the steps is very important in this experiment.",
    "options": [
      "learn the hard way",
      "cut corners",
      "read between the lines",
      "pay attention to"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "I didn't back up my files, so I _____ when my laptop crashed the night before the deadline.",
    "options": [
      "brush up on",
      "learn the hard way",
      "study abroad",
      "cut corners"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Ken failed his first driving test, but he _____ and passed easily the second time.",
    "options": [
      "learn from one's mistakes",
      "cut corners",
      "pay attention to",
      "read between the lines"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "If teachers expect a student to fail, it can become a _____, because the student may stop trying.",
    "options": [
      "pass rate",
      "crib sheet",
      "self-fulfilling prophecy",
      "visual aid"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "hit the books": {
    "pos": "v.phr.",
    "en_def": "to start studying hard",
    "cn_def": "開始用功讀書"
  },
  "learn by heart": {
    "pos": "v.phr.",
    "en_def": "to memorise something so you can say it perfectly",
    "cn_def": "背熟；牢記"
  },
  "pass with flying colours": {
    "pos": "v.phr.",
    "en_def": "to pass a test very successfully",
    "cn_def": "以優異成績通過"
  },
  "teacher's pet": {
    "pos": "n.phr.",
    "en_def": "a student whom the teacher seems to like best",
    "cn_def": "老師的寵兒"
  },
  "brush up on": {
    "pos": "v.phr.",
    "en_def": "to practise and improve a skill you used to have",
    "cn_def": "複習；重溫"
  },
  "show of hands": {
    "pos": "n.phr.",
    "en_def": "a vote where people raise their hands",
    "cn_def": "舉手表決"
  },
  "trial and error": {
    "pos": "n.phr.",
    "en_def": "trying different ways until you find one that works",
    "cn_def": "反覆試驗；試誤"
  },
  "jot down": {
    "pos": "v.phr.",
    "en_def": "to write something quickly",
    "cn_def": "匆匆記下"
  },
  "look up": {
    "pos": "v.phr.",
    "en_def": "to search for information in a book or online",
    "cn_def": "查詢（字典等）"
  },
  "read between the lines": {
    "pos": "v.phr.",
    "en_def": "to understand a hidden meaning",
    "cn_def": "領會言外之意"
  },
  "growth mindset": {
    "pos": "n.phr.",
    "en_def": "the belief that ability can grow with effort",
    "cn_def": "成長型思維"
  },
  "practice makes perfect": {
    "pos": "phr.",
    "en_def": "doing something often is the way to become good at it",
    "cn_def": "熟能生巧"
  },
  "hand in": {
    "pos": "v.phr.",
    "en_def": "to give your work to a teacher",
    "cn_def": "繳交"
  },
  "keep up with": {
    "pos": "v.phr.",
    "en_def": "to move or learn at the same speed as others",
    "cn_def": "跟上"
  },
  "get the hang of": {
    "pos": "v.phr.",
    "en_def": "to learn how to do something",
    "cn_def": "掌握訣竅；學會"
  },
  "cut corners": {
    "pos": "v.phr.",
    "en_def": "to do something badly to save time or effort",
    "cn_def": "偷工減料；走捷徑"
  },
  "pay attention to": {
    "pos": "v.phr.",
    "en_def": "to listen or watch carefully",
    "cn_def": "注意"
  },
  "learn the hard way": {
    "pos": "v.phr.",
    "en_def": "to learn something through a bad experience",
    "cn_def": "從慘痛經驗中學到"
  },
  "learn from one's mistakes": {
    "pos": "v.phr.",
    "en_def": "to improve by understanding what you did wrong",
    "cn_def": "從錯誤中學習"
  },
  "self-fulfilling prophecy": {
    "pos": "n.phr.",
    "en_def": "a belief that makes itself come true",
    "cn_def": "自我應驗的預言"
  },
  "study abroad": {
    "pos": "v.phr.",
    "en_def": "to go to another country to study",
    "cn_def": "出國留學"
  },
  "student loan": {
    "pos": "n.phr.",
    "en_def": "money borrowed to pay for university, paid back later",
    "cn_def": "學生貸款"
  },
  "mind map": {
    "pos": "n.phr.",
    "en_def": "a diagram that connects ideas around a central topic",
    "cn_def": "心智圖"
  },
  "marking scheme": {
    "pos": "n.phr.",
    "en_def": "the official guide for scoring an exam",
    "cn_def": "評分標準"
  },
  "visual aid": {
    "pos": "n.phr.",
    "en_def": "a picture, chart or object that helps people understand",
    "cn_def": "視覺輔助教具"
  },
  "time management": {
    "pos": "n.phr.",
    "en_def": "the skill of planning and using your time well",
    "cn_def": "時間管理"
  },
  "learning style": {
    "pos": "n.phr.",
    "en_def": "the way a person learns best",
    "cn_def": "學習風格"
  },
  "learning disability": {
    "pos": "n.phr.",
    "en_def": "a condition that makes some kinds of learning difficult",
    "cn_def": "學習障礙"
  },
  "boarding school": {
    "pos": "n.phr.",
    "en_def": "a school where students live and sleep during the term",
    "cn_def": "寄宿學校"
  },
  "student teacher": {
    "pos": "n.phr.",
    "en_def": "a person who is training to become a teacher",
    "cn_def": "實習教師"
  },
  "state school": {
    "pos": "n.phr.",
    "en_def": "a school paid for by the government",
    "cn_def": "公立學校"
  },
  "ability grouping": {
    "pos": "n.phr.",
    "en_def": "forming small groups of students at similar levels",
    "cn_def": "能力分組"
  },
  "pass rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who pass an exam",
    "cn_def": "及格率；通過率"
  },
  "crib sheet": {
    "pos": "n.phr.",
    "en_def": "a small hidden paper with answers used to cheat",
    "cn_def": "小抄"
  }
};

const EXTRA_GLOSSES = {};
