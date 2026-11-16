// Topic 6 Subunit 3 Quiz Data: Learning Skills & Study Habits 學習技巧與讀書習慣
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S03 - Learning Skills & Study Habits 學習技巧與讀書習慣",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "note-taking",
    "pos": "n.",
    "cn_def": "做筆記",
    "en_def": "writing down the key points while listening or reading",
    "sentence": "Good {{BLANK}} helps you remember a lecture, but you should also read your notes again within a day.",
    "cn": "良好的做筆記技巧能幫你記住一堂課，但你也應該在一天內重讀筆記。"
  },
  {
    "word": "underline",
    "pos": "v.",
    "cn_def": "在…底下畫線",
    "en_def": "to draw a line under words to show they are important",
    "sentence": "When I read a hard article, I {{BLANK}} the main ideas, and then I write a short summary in the margin.",
    "cn": "讀困難的文章時，我會在主要概念底下畫線，然後在頁邊寫一段簡短摘要。"
  },
  {
    "word": "skim",
    "pos": "v.",
    "cn_def": "略讀",
    "en_def": "to read something quickly to get the main idea",
    "sentence": "First {{BLANK}} the passage to understand the topic, and then read the questions before you look for details.",
    "cn": "先略讀文章以了解主題，然後在找細節之前先讀題目。"
  },
  {
    "word": "scan",
    "pos": "v.",
    "cn_def": "掃讀；瀏覽搜尋",
    "en_def": "to look quickly through a text for a particular piece of information",
    "sentence": "I {{BLANK}} the timetable for the date of the exam, but I could not find it anywhere on the page.",
    "cn": "我快速瀏覽時刻表尋找考試日期，但在整頁上都找不到。"
  },
  {
    "word": "memorise",
    "pos": "v.",
    "cn_def": "背誦；記住",
    "en_def": "to learn something so well that you can remember it exactly",
    "sentence": "She tried to {{BLANK}} fifty words in one night, but she forgot most of them by the next morning.",
    "cn": "她試著在一個晚上背五十個單字，但到隔天早上就忘了大部分。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "複習",
    "en_def": "to study something again in order to remember it",
    "sentence": "I {{BLANK}} my notes for ten minutes every evening, so I do not have to stay up late before tests.",
    "cn": "我每天晚上複習筆記十分鐘，所以考試前不必熬夜。"
  },
  {
    "word": "flashcard",
    "pos": "n.",
    "cn_def": "單字卡；閃卡",
    "en_def": "a small card with a word on one side and its meaning on the other",
    "sentence": "My sister makes a {{BLANK}} for every new word, and she tests herself while she waits for the bus.",
    "cn": "我妹妹為每個新單字做一張單字卡，並在等公車時自我測驗。"
  },
  {
    "word": "mind map",
    "pos": "n.phr.",
    "cn_def": "心智圖",
    "en_def": "a diagram that connects ideas around a central topic",
    "sentence": "Before writing my essay I drew a {{BLANK}}, and it helped me organise my ideas into three clear paragraphs.",
    "cn": "寫作文前我畫了一張心智圖，它幫助我把想法整理成三個清楚的段落。"
  },
  {
    "word": "study group",
    "pos": "n.phr.",
    "cn_def": "讀書會",
    "en_def": "a small group of students who learn together",
    "sentence": "We formed a {{BLANK}} before the final exams, and we met in the library every Saturday afternoon.",
    "cn": "我們在期末考前組了一個讀書會，每個星期六下午在圖書館見面。"
  },
  {
    "word": "self-study",
    "pos": "n.",
    "cn_def": "自學；自修",
    "en_def": "learning by yourself without a teacher",
    "sentence": "The school gives seniors two hours of {{BLANK}} every afternoon, but some students just chat with friends.",
    "cn": "學校每天下午給高三學生兩小時自修時間，但有些學生只是和朋友聊天。"
  },
  {
    "word": "self-directed",
    "pos": "adj.",
    "cn_def": "自主的；自我導向的",
    "en_def": "controlled and planned by the learner themselves",
    "sentence": "Taiwan's new curriculum encourages {{BLANK}} learning, so students choose a topic and plan their own research.",
    "cn": "台灣的新課綱鼓勵自主學習，所以學生自己選擇主題並規劃研究。"
  },
  {
    "word": "learning style",
    "pos": "n.phr.",
    "cn_def": "學習風格",
    "en_def": "the way a person learns best",
    "sentence": "Some people say each child has one {{BLANK}}, but many researchers believe we all learn in mixed ways.",
    "cn": "有些人說每個孩子都有一種學習風格，但許多研究者認為我們都以混合的方式學習。"
  },
  {
    "word": "kinaesthetic",
    "pos": "adj.",
    "cn_def": "動覺的；肢體操作的",
    "en_def": "learning by moving and touching things",
    "sentence": "My brother is a {{BLANK}} learner, so he remembers science better when he builds models with his hands.",
    "cn": "我弟弟是動覺型學習者，所以他親手做模型時對科學記得更牢。"
  },
  {
    "word": "time management",
    "pos": "n.phr.",
    "cn_def": "時間管理",
    "en_def": "the skill of planning and using your time well",
    "sentence": "Good {{BLANK}} is important in senior high school, because students have many tests and club activities.",
    "cn": "良好的時間管理在高中很重要，因為學生有許多考試和社團活動。"
  },
  {
    "word": "proofread",
    "pos": "v.",
    "cn_def": "校對",
    "en_def": "to read writing carefully to find and correct mistakes",
    "sentence": "Always {{BLANK}} your report before you hand it in, because small spelling mistakes can make a bad impression.",
    "cn": "交報告前務必要校對，因為小小的拼字錯誤可能會給人不好的印象。"
  },
  {
    "word": "dictionary",
    "pos": "n.",
    "cn_def": "字典",
    "en_def": "a book or app that explains the meanings of words",
    "sentence": "I checked the word in an online {{BLANK}}, and I also listened to its pronunciation several times.",
    "cn": "我在線上字典查了這個字，還聽了好幾次它的發音。"
  },
  {
    "word": "glossary",
    "pos": "n.",
    "cn_def": "詞彙表",
    "en_def": "a list of difficult words with their meanings, often at the end of a book",
    "sentence": "The biology book has a {{BLANK}} at the back, so students can quickly look up difficult terms.",
    "cn": "這本生物書後面附有詞彙表，所以學生能快速查找困難的術語。"
  },
  {
    "word": "bibliography",
    "pos": "n.",
    "cn_def": "參考書目",
    "en_def": "a list of books and articles used in a piece of writing",
    "sentence": "Our teacher reminded us to include a {{BLANK}}, because we must show where all our information came from.",
    "cn": "老師提醒我們要附上參考書目，因為我們必須說明所有資訊的來源。"
  },
  {
    "word": "librarian",
    "pos": "n.",
    "cn_def": "圖書館員",
    "en_def": "a person who works in a library",
    "sentence": "The {{BLANK}} helped me find three useful books on Taiwanese history, and she showed me how to use the online catalogue.",
    "cn": "圖書館員幫我找到三本有關台灣歷史的實用書籍，還教我如何使用線上目錄。"
  },
  {
    "word": "reading list",
    "pos": "n.phr.",
    "cn_def": "書單；閱讀清單",
    "en_def": "a list of books students are told to read",
    "sentence": "The summer {{BLANK}} includes five English novels, but students only need to write a report on one of them.",
    "cn": "暑假書單包含五本英文小說，但學生只需要針對其中一本寫報告。"
  },
  {
    "word": "grasp",
    "pos": "v.",
    "cn_def": "理解；領會",
    "en_def": "to understand something, especially something difficult",
    "sentence": "At first I could not {{BLANK}} how the past perfect works, but my teacher's timeline made it clear.",
    "cn": "一開始我無法理解過去完成式怎麼用，但老師畫的時間軸讓它變清楚了。"
  },
  {
    "word": "master",
    "pos": "v.",
    "cn_def": "精通；掌握",
    "en_def": "to learn something completely and become very good at it",
    "sentence": "It takes years to {{BLANK}} a musical instrument, so you should not give up after only a few lessons.",
    "cn": "要精通一種樂器需要好幾年，所以不應該只上幾堂課就放棄。"
  },
  {
    "word": "familiarise",
    "pos": "v.",
    "cn_def": "使熟悉",
    "en_def": "to learn about something so that you know it well",
    "sentence": "New students should {{BLANK}} themselves with the school rules, because teachers will not accept excuses later.",
    "cn": "新生應該熟悉校規，因為之後老師不會接受任何藉口。"
  },
  {
    "word": "practise",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again and again to improve",
    "sentence": "I {{BLANK}} speaking English with a language partner online, and my confidence has grown a lot this year.",
    "cn": "我在線上和語言夥伴練習說英文，今年我的自信心增加了很多。"
  },
  {
    "word": "metacognition",
    "pos": "n.",
    "cn_def": "後設認知",
    "en_def": "thinking about how you think and learn",
    "sentence": "Teachers want to develop students' {{BLANK}}, so they ask them to explain how they solved each problem.",
    "cn": "老師們想培養學生的後設認知，所以會請他們說明自己如何解出每個問題。"
  },
  {
    "word": "studious",
    "pos": "adj.",
    "cn_def": "好學的；用功的",
    "en_def": "spending a lot of time studying and reading",
    "sentence": "Ben is very {{BLANK}} and often reads in the library, but he also enjoys playing basketball with friends.",
    "cn": "班非常用功，常在圖書館讀書，但他也喜歡和朋友打籃球。"
  },
  {
    "word": "bookworm",
    "pos": "n.",
    "cn_def": "書蟲",
    "en_def": "a person who loves reading books",
    "sentence": "My best friend is a real {{BLANK}}, and she finished the whole Harry Potter series in two weeks.",
    "cn": "我最好的朋友是個十足的書蟲，她兩週就讀完了整套哈利波特。"
  },
  {
    "word": "learning curve",
    "pos": "n.phr.",
    "cn_def": "學習曲線",
    "en_def": "how quickly someone learns something new",
    "sentence": "Coding has a steep {{BLANK}} at first, but it becomes much easier after a few weeks of practice.",
    "cn": "寫程式一開始的學習曲線很陡峭，但練習幾週之後就容易多了。"
  },
  {
    "word": "plateau",
    "pos": "n.",
    "cn_def": "停滯期；高原期",
    "en_def": "a period when progress stops for a while",
    "sentence": "Many language learners reach a {{BLANK}} after a year, so they need new challenges to keep improving.",
    "cn": "許多語言學習者在一年後會進入停滯期，所以他們需要新挑戰才能持續進步。"
  },
  {
    "word": "annotate",
    "pos": "v.",
    "cn_def": "加註解",
    "en_def": "to add short notes to a text to explain or comment",
    "sentence": "We {{BLANK}} the poem with our own comments, and then we compared our ideas in small groups.",
    "cn": "我們在詩上加了自己的註解，然後在小組中比較彼此的想法。"
  },
  {
    "word": "highlighter",
    "pos": "n.",
    "cn_def": "螢光筆",
    "en_def": "a bright pen used to mark important words",
    "sentence": "He used a yellow {{BLANK}} on almost every line, so the colour no longer showed what was really important.",
    "cn": "他幾乎每一行都用黃色螢光筆畫，所以顏色已經無法顯示真正重要的內容。"
  },
  {
    "word": "audiobook",
    "pos": "n.",
    "cn_def": "有聲書",
    "en_def": "a recording of someone reading a book aloud",
    "sentence": "I listen to an English {{BLANK}} on my way to school, and it has improved my listening skills.",
    "cn": "我上學途中聽英文有聲書，它提升了我的聽力。"
  },
  {
    "word": "self-taught",
    "pos": "adj.",
    "cn_def": "自學的",
    "en_def": "having learned a skill by yourself, without lessons",
    "sentence": "The {{BLANK}} guitarist never took a single lesson, but he learned hundreds of songs from online videos.",
    "cn": "這位自學的吉他手從沒上過一堂課，但他從網路影片學會了好幾百首歌。"
  }
];

const MCQS = [
  {
    "q": "Good _____ helps you remember a lecture, but you should also read your notes again within a day.",
    "options": [
      "supervisor",
      "note-taking",
      "qualification",
      "credit"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "When I read a hard article, I _____ the main ideas, and then I write a short summary in the margin.",
    "options": [
      "instigate",
      "transcend",
      "accommodate",
      "underline"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "First _____ the passage to understand the topic, and then read the questions before you look for details.",
    "options": [
      "skim",
      "transcend",
      "debilitate",
      "epitomise"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "I _____ the timetable for the date of the exam, but I could not find it anywhere on the page.",
    "options": [
      "coerce",
      "spur",
      "scan",
      "exasperate"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "She tried to _____ fifty words in one night, but she forgot most of them by the next morning.",
    "options": [
      "glean",
      "reprimand",
      "spoon-feed",
      "memorise"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "I _____ my notes for ten minutes every evening, so I do not have to stay up late before tests.",
    "options": [
      "relegate",
      "review",
      "distil",
      "garner"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "My sister makes a _____ for every new word, and she tests herself while she waits for the bus.",
    "options": [
      "flashcard",
      "campus",
      "sanction",
      "playground"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Before writing my essay I drew a _____, and it helped me organise my ideas into three clear paragraphs.",
    "options": [
      "report card",
      "higher education",
      "mind map",
      "slow learner"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "We formed a _____ before the final exams, and we met in the library every Saturday afternoon.",
    "options": [
      "teacher's pet",
      "pass rate",
      "role model",
      "study group"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The school gives seniors two hours of _____ every afternoon, but some students just chat with friends.",
    "options": [
      "jargon",
      "self-study",
      "penchant",
      "commentary"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Taiwan's new curriculum encourages _____ learning, so students choose a topic and plan their own research.",
    "options": [
      "brief",
      "competent",
      "self-directed",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Some people say each child has one _____, but many researchers believe we all learn in mixed ways.",
    "options": [
      "learning style",
      "growth mindset",
      "classroom management",
      "teacher's pet"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "My brother is a _____ learner, so he remembers science better when he builds models with his hands.",
    "options": [
      "incongruous",
      "open-book",
      "instrumental",
      "kinaesthetic"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Good _____ is important in senior high school, because students have many tests and club activities.",
    "options": [
      "show of hands",
      "time management",
      "group work",
      "teacher's pet"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Always _____ your report before you hand it in, because small spelling mistakes can make a bad impression.",
    "options": [
      "proofread",
      "abide",
      "juxtapose",
      "digress"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "I checked the word in an online _____, and I also listened to its pronunciation several times.",
    "options": [
      "peer",
      "stationery",
      "dictionary",
      "braille"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The biology book has a _____ at the back, so students can quickly look up difficult terms.",
    "options": [
      "worksheet",
      "glossary",
      "axiom",
      "distinction"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Our teacher reminded us to include a _____, because we must show where all our information came from.",
    "options": [
      "pedagogy",
      "rubric",
      "preschool",
      "bibliography"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The _____ helped me find three useful books on Taiwanese history, and she showed me how to use the online catalogue.",
    "options": [
      "librarian",
      "pace",
      "braille",
      "axiom"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The summer _____ includes five English novels, but students only need to write a report on one of them.",
    "options": [
      "teacher's pet",
      "crib sheet",
      "reading list",
      "student teacher"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "At first I could not _____ how the past perfect works, but my teacher's timeline made it clear.",
    "options": [
      "coerce",
      "grasp",
      "indoctrinate",
      "garner"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "It takes years to _____ a musical instrument, so you should not give up after only a few lessons.",
    "options": [
      "compartmentalise",
      "amass",
      "master",
      "dissuade"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "New students should _____ themselves with the school rules, because teachers will not accept excuses later.",
    "options": [
      "bully",
      "ameliorate",
      "digress",
      "familiarise"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "I _____ speaking English with a language partner online, and my confidence has grown a lot this year.",
    "options": [
      "practise",
      "oversee",
      "quote",
      "condense"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Teachers want to develop students' _____, so they ask them to explain how they solved each problem.",
    "options": [
      "maxim",
      "prowess",
      "metacognition",
      "extension"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Ben is very _____ and often reads in the library, but he also enjoys playing basketball with friends.",
    "options": [
      "myopic",
      "seminal",
      "categorical",
      "studious"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "My best friend is a real _____, and she finished the whole Harry Potter series in two weeks.",
    "options": [
      "bookworm",
      "rubric",
      "diploma",
      "brevity"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Coding has a steep _____ at first, but it becomes much easier after a few weeks of practice.",
    "options": [
      "answer sheet",
      "learning curve",
      "crib sheet",
      "flipped classroom"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Many language learners reach a _____ after a year, so they need new challenges to keep improving.",
    "options": [
      "bureaucracy",
      "precedent",
      "plateau",
      "attendance"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "We _____ the poem with our own comments, and then we compared our ideas in small groups.",
    "options": [
      "annotate",
      "propagate",
      "polarise",
      "quote"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "He used a yellow _____ on almost every line, so the colour no longer showed what was really important.",
    "options": [
      "prowess",
      "highlighter",
      "detention",
      "dean"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "I listen to an English _____ on my way to school, and it has improved my listening skills.",
    "options": [
      "dormitory",
      "precedent",
      "sanction",
      "audiobook"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The _____ guitarist never took a single lesson, but he learned hundreds of songs from online videos.",
    "options": [
      "austere",
      "self-taught",
      "inquiry-based",
      "desirable"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "note-taking": {
    "pos": "n.",
    "en_def": "writing down the key points while listening or reading",
    "cn_def": "做筆記"
  },
  "underline": {
    "pos": "v.",
    "en_def": "to draw a line under words to show they are important",
    "cn_def": "在…底下畫線"
  },
  "skim": {
    "pos": "v.",
    "en_def": "to read something quickly to get the main idea",
    "cn_def": "略讀"
  },
  "scan": {
    "pos": "v.",
    "en_def": "to look quickly through a text for a particular piece of information",
    "cn_def": "掃讀；瀏覽搜尋"
  },
  "memorise": {
    "pos": "v.",
    "en_def": "to learn something so well that you can remember it exactly",
    "cn_def": "背誦；記住"
  },
  "review": {
    "pos": "v.",
    "en_def": "to study something again in order to remember it",
    "cn_def": "複習"
  },
  "flashcard": {
    "pos": "n.",
    "en_def": "a small card with a word on one side and its meaning on the other",
    "cn_def": "單字卡；閃卡"
  },
  "mind map": {
    "pos": "n.phr.",
    "en_def": "a diagram that connects ideas around a central topic",
    "cn_def": "心智圖"
  },
  "study group": {
    "pos": "n.phr.",
    "en_def": "a small group of students who learn together",
    "cn_def": "讀書會"
  },
  "self-study": {
    "pos": "n.",
    "en_def": "learning by yourself without a teacher",
    "cn_def": "自學；自修"
  },
  "self-directed": {
    "pos": "adj.",
    "en_def": "controlled and planned by the learner themselves",
    "cn_def": "自主的；自我導向的"
  },
  "learning style": {
    "pos": "n.phr.",
    "en_def": "the way a person learns best",
    "cn_def": "學習風格"
  },
  "kinaesthetic": {
    "pos": "adj.",
    "en_def": "learning by moving and touching things",
    "cn_def": "動覺的；肢體操作的"
  },
  "time management": {
    "pos": "n.phr.",
    "en_def": "the skill of planning and using your time well",
    "cn_def": "時間管理"
  },
  "proofread": {
    "pos": "v.",
    "en_def": "to read writing carefully to find and correct mistakes",
    "cn_def": "校對"
  },
  "dictionary": {
    "pos": "n.",
    "en_def": "a book or app that explains the meanings of words",
    "cn_def": "字典"
  },
  "glossary": {
    "pos": "n.",
    "en_def": "a list of difficult words with their meanings, often at the end of a book",
    "cn_def": "詞彙表"
  },
  "bibliography": {
    "pos": "n.",
    "en_def": "a list of books and articles used in a piece of writing",
    "cn_def": "參考書目"
  },
  "librarian": {
    "pos": "n.",
    "en_def": "a person who works in a library",
    "cn_def": "圖書館員"
  },
  "reading list": {
    "pos": "n.phr.",
    "en_def": "a list of books students are told to read",
    "cn_def": "書單；閱讀清單"
  },
  "grasp": {
    "pos": "v.",
    "en_def": "to understand something, especially something difficult",
    "cn_def": "理解；領會"
  },
  "master": {
    "pos": "v.",
    "en_def": "to learn something completely and become very good at it",
    "cn_def": "精通；掌握"
  },
  "familiarise": {
    "pos": "v.",
    "en_def": "to learn about something so that you know it well",
    "cn_def": "使熟悉"
  },
  "practise": {
    "pos": "v.",
    "en_def": "to do something again and again to improve",
    "cn_def": "練習"
  },
  "metacognition": {
    "pos": "n.",
    "en_def": "thinking about how you think and learn",
    "cn_def": "後設認知"
  },
  "studious": {
    "pos": "adj.",
    "en_def": "spending a lot of time studying and reading",
    "cn_def": "好學的；用功的"
  },
  "bookworm": {
    "pos": "n.",
    "en_def": "a person who loves reading books",
    "cn_def": "書蟲"
  },
  "learning curve": {
    "pos": "n.phr.",
    "en_def": "how quickly someone learns something new",
    "cn_def": "學習曲線"
  },
  "plateau": {
    "pos": "n.",
    "en_def": "a period when progress stops for a while",
    "cn_def": "停滯期；高原期"
  },
  "annotate": {
    "pos": "v.",
    "en_def": "to add short notes to a text to explain or comment",
    "cn_def": "加註解"
  },
  "highlighter": {
    "pos": "n.",
    "en_def": "a bright pen used to mark important words",
    "cn_def": "螢光筆"
  },
  "audiobook": {
    "pos": "n.",
    "en_def": "a recording of someone reading a book aloud",
    "cn_def": "有聲書"
  },
  "self-taught": {
    "pos": "adj.",
    "en_def": "having learned a skill by yourself, without lessons",
    "cn_def": "自學的"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a teacher who guides a student's research",
    "cn_def": "指導教授；主管"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record that you have passed exams or training",
    "cn_def": "資格；學歷證照"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has completed part of a course",
    "cn_def": "學分"
  },
  "instigate": {
    "pos": "v.",
    "en_def": "to start an action or event",
    "cn_def": "發起；促成"
  },
  "transcend": {
    "pos": "v.",
    "en_def": "to go beyond the usual limits of something",
    "cn_def": "超越"
  },
  "accommodate": {
    "pos": "v.",
    "en_def": "to provide what someone needs",
    "cn_def": "容納；照顧到（需求）"
  },
  "debilitate": {
    "pos": "v.",
    "en_def": "to make someone or something very weak",
    "cn_def": "使衰弱"
  },
  "epitomise": {
    "pos": "v.",
    "en_def": "to be a perfect example of something",
    "cn_def": "是…的典型；集中體現"
  },
  "coerce": {
    "pos": "v.",
    "en_def": "to force someone to do something they do not want to do",
    "cn_def": "強迫；脅迫"
  },
  "spur": {
    "pos": "v.",
    "en_def": "to encourage someone to do something",
    "cn_def": "激勵；鞭策"
  },
  "exasperate": {
    "pos": "v.",
    "en_def": "to make someone very annoyed",
    "cn_def": "激怒；使惱火"
  },
  "glean": {
    "pos": "v.",
    "en_def": "to collect information slowly, in small amounts",
    "cn_def": "蒐集（資訊）；點滴獲得"
  },
  "reprimand": {
    "pos": "v.",
    "en_def": "to tell someone officially that they did wrong",
    "cn_def": "斥責；訓誡"
  },
  "spoon-feed": {
    "pos": "v.",
    "en_def": "to give students answers so they do not think for themselves",
    "cn_def": "填鴨式餵答案；過度灌輸"
  },
  "relegate": {
    "pos": "v.",
    "en_def": "to move someone or something to a less important position",
    "cn_def": "降級；貶至次要地位"
  },
  "distil": {
    "pos": "v.",
    "en_def": "to take the most important ideas from something",
    "cn_def": "提煉；萃取精華"
  },
  "garner": {
    "pos": "v.",
    "en_def": "to collect or gain something such as support",
    "cn_def": "獲得；贏得"
  },
  "campus": {
    "pos": "n.",
    "en_def": "the land and buildings of a university or school",
    "cn_def": "校園"
  },
  "sanction": {
    "pos": "n.",
    "en_def": "official permission or approval",
    "cn_def": "批准；認可"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outdoor area at school where children play",
    "cn_def": "遊樂場；操場"
  },
  "report card": {
    "pos": "n.phr.",
    "en_def": "a school report showing a student's results",
    "cn_def": "成績通知單"
  },
  "higher education": {
    "pos": "n.phr.",
    "en_def": "education at university or college",
    "cn_def": "高等教育"
  },
  "slow learner": {
    "pos": "n.phr.",
    "en_def": "a student who needs more time to learn",
    "cn_def": "學習較慢的學生"
  },
  "teacher's pet": {
    "pos": "n.phr.",
    "en_def": "a student whom the teacher seems to like best",
    "cn_def": "老師的寵兒"
  },
  "pass rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who pass an exam",
    "cn_def": "及格率；通過率"
  },
  "role model": {
    "pos": "n.phr.",
    "en_def": "a person whose behaviour others want to copy",
    "cn_def": "榜樣；模範"
  },
  "jargon": {
    "pos": "n.",
    "en_def": "special words used by a group that others find hard to understand",
    "cn_def": "術語；行話"
  },
  "penchant": {
    "pos": "n.",
    "en_def": "a strong liking for something",
    "cn_def": "嗜好；偏好"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "a set of comments explaining or judging something",
    "cn_def": "評論；解說"
  },
  "brief": {
    "pos": "adj.",
    "en_def": "short, using few words or lasting a short time",
    "cn_def": "簡短的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill to do something well",
    "cn_def": "有能力的；稱職的"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or doing something at the right time",
    "cn_def": "準時的"
  },
  "growth mindset": {
    "pos": "n.phr.",
    "en_def": "the belief that ability can grow with effort",
    "cn_def": "成長型思維"
  },
  "classroom management": {
    "pos": "n.phr.",
    "en_def": "the ways a teacher keeps a class organised and calm",
    "cn_def": "班級經營"
  },
  "incongruous": {
    "pos": "adj.",
    "en_def": "strange because it does not fit the situation",
    "cn_def": "不協調的；格格不入的"
  },
  "open-book": {
    "pos": "adj.",
    "en_def": "allowing students to use books during the exam",
    "cn_def": "開書考的"
  },
  "instrumental": {
    "pos": "adj.",
    "en_def": "very important in making something happen",
    "cn_def": "起重要作用的"
  },
  "show of hands": {
    "pos": "n.phr.",
    "en_def": "a vote where people raise their hands",
    "cn_def": "舉手表決"
  },
  "group work": {
    "pos": "n.phr.",
    "en_def": "tasks that students do together in small teams",
    "cn_def": "小組作業；分組活動"
  },
  "abide": {
    "pos": "v.",
    "en_def": "to accept and follow a rule or decision",
    "cn_def": "遵守（abide by）"
  },
  "juxtapose": {
    "pos": "v.",
    "en_def": "to put two things side by side to compare them",
    "cn_def": "並列；並置"
  },
  "digress": {
    "pos": "v.",
    "en_def": "to talk about something not connected to the main topic",
    "cn_def": "離題"
  },
  "peer": {
    "pos": "n.",
    "en_def": "a person of the same age or level as you",
    "cn_def": "同儕"
  },
  "stationery": {
    "pos": "n.",
    "en_def": "pens, paper, rulers and other things for writing",
    "cn_def": "文具"
  },
  "braille": {
    "pos": "n.",
    "en_def": "a system of raised dots that blind people read by touch",
    "cn_def": "點字"
  },
  "worksheet": {
    "pos": "n.",
    "en_def": "a paper with exercises for students to complete",
    "cn_def": "學習單"
  },
  "axiom": {
    "pos": "n.",
    "en_def": "a statement accepted as true without needing proof",
    "cn_def": "公理；格言"
  },
  "distinction": {
    "pos": "n.",
    "en_def": "the highest level of result in an exam",
    "cn_def": "優等；優異成績"
  },
  "pedagogy": {
    "pos": "n.",
    "en_def": "the methods and practice of teaching",
    "cn_def": "教學法"
  },
  "rubric": {
    "pos": "n.",
    "en_def": "a chart that explains how work will be scored",
    "cn_def": "評分規準"
  },
  "preschool": {
    "pos": "n.",
    "en_def": "a school for young children before primary school",
    "cn_def": "學前教育機構；幼稚園"
  },
  "pace": {
    "pos": "n.",
    "en_def": "the speed at which something happens",
    "cn_def": "速度；步調"
  },
  "crib sheet": {
    "pos": "n.phr.",
    "en_def": "a small hidden paper with answers used to cheat",
    "cn_def": "小抄"
  },
  "student teacher": {
    "pos": "n.phr.",
    "en_def": "a person who is training to become a teacher",
    "cn_def": "實習教師"
  },
  "indoctrinate": {
    "pos": "v.",
    "en_def": "to teach people to accept beliefs without questioning them",
    "cn_def": "灌輸（思想）"
  },
  "compartmentalise": {
    "pos": "v.",
    "en_def": "to divide things into separate parts",
    "cn_def": "把…分隔開；區隔處理"
  },
  "amass": {
    "pos": "v.",
    "en_def": "to collect a large amount of something over time",
    "cn_def": "累積；積聚"
  },
  "dissuade": {
    "pos": "v.",
    "en_def": "to persuade someone not to do something",
    "cn_def": "勸阻"
  },
  "bully": {
    "pos": "v.",
    "en_def": "to hurt or frighten someone weaker again and again",
    "cn_def": "霸凌；欺負"
  },
  "ameliorate": {
    "pos": "v.",
    "en_def": "to make a bad situation better",
    "cn_def": "改善"
  },
  "oversee": {
    "pos": "v.",
    "en_def": "to watch and organise work to check it is done well",
    "cn_def": "監督；督導"
  },
  "quote": {
    "pos": "v.",
    "en_def": "to repeat the exact words that someone else said or wrote",
    "cn_def": "引用；引述"
  },
  "condense": {
    "pos": "v.",
    "en_def": "to make a text shorter but keep the main ideas",
    "cn_def": "濃縮；精簡"
  },
  "maxim": {
    "pos": "n.",
    "en_def": "a short saying that gives a rule for behaviour",
    "cn_def": "格言；座右銘"
  },
  "prowess": {
    "pos": "n.",
    "en_def": "great skill at doing something",
    "cn_def": "高超技能；本領"
  },
  "extension": {
    "pos": "n.",
    "en_def": "extra time given to finish a piece of work",
    "cn_def": "延期；延長期限"
  },
  "myopic": {
    "pos": "adj.",
    "en_def": "not thinking about the future",
    "cn_def": "短視的"
  },
  "seminal": {
    "pos": "adj.",
    "en_def": "very important and influencing later work",
    "cn_def": "開創性的；影響深遠的"
  },
  "categorical": {
    "pos": "adj.",
    "en_def": "very clear and certain, with no doubt",
    "cn_def": "絕對的；明確的"
  },
  "diploma": {
    "pos": "n.",
    "en_def": "a document showing you have completed a course",
    "cn_def": "文憑；畢業證書"
  },
  "brevity": {
    "pos": "n.",
    "en_def": "the quality of using few words",
    "cn_def": "簡潔；簡短"
  },
  "answer sheet": {
    "pos": "n.phr.",
    "en_def": "the paper on which students write or mark their answers",
    "cn_def": "答案卡；答案紙"
  },
  "flipped classroom": {
    "pos": "n.phr.",
    "en_def": "students watch lessons at home and practise in class",
    "cn_def": "翻轉教室"
  },
  "bureaucracy": {
    "pos": "n.",
    "en_def": "a system with many complicated official rules",
    "cn_def": "官僚制度；繁文縟節"
  },
  "precedent": {
    "pos": "n.",
    "en_def": "an earlier event used as an example for later decisions",
    "cn_def": "先例"
  },
  "attendance": {
    "pos": "n.",
    "en_def": "how often someone is present at school or class",
    "cn_def": "出席；出席率"
  },
  "propagate": {
    "pos": "v.",
    "en_def": "to spread ideas or beliefs to many people",
    "cn_def": "傳播；宣揚"
  },
  "polarise": {
    "pos": "v.",
    "en_def": "to divide people into two opposing groups",
    "cn_def": "使兩極化"
  },
  "detention": {
    "pos": "n.",
    "en_def": "a punishment where a student must stay after school",
    "cn_def": "課後留校（處罰）"
  },
  "dean": {
    "pos": "n.",
    "en_def": "a person in charge of a faculty or of students at a university",
    "cn_def": "院長；系主任"
  },
  "dormitory": {
    "pos": "n.",
    "en_def": "a large building where students live and sleep",
    "cn_def": "宿舍"
  },
  "austere": {
    "pos": "adj.",
    "en_def": "very plain and simple, without comfort",
    "cn_def": "簡樸的；樸素的"
  },
  "inquiry-based": {
    "pos": "adj.",
    "en_def": "learning by asking questions and finding answers",
    "cn_def": "探究式的"
  },
  "desirable": {
    "pos": "adj.",
    "en_def": "worth having or wanting",
    "cn_def": "令人嚮往的；理想的"
  }
};

const EXTRA_GLOSSES = {};
