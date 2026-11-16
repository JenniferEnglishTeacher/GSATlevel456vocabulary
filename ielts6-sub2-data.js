// Topic 6 Subunit 2 Quiz Data: Teaching & Classroom Practice 教學與課堂實務
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S02 - Teaching & Classroom Practice 教學與課堂實務",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pedagogy",
    "pos": "n.",
    "cn_def": "教學法",
    "en_def": "the methods and practice of teaching",
    "sentence": "The new teacher studied modern {{BLANK}} at university, so she uses games and discussions instead of just talking for an hour.",
    "cn": "這位新老師在大學研讀過現代教學法，所以她用遊戲和討論，而不是只講課一個小時。"
  },
  {
    "word": "educator",
    "pos": "n.",
    "cn_def": "教育工作者",
    "en_def": "a person whose job is teaching or education",
    "sentence": "Many {{BLANK}} in Taiwan are trying new methods, but they still need time and support from their schools.",
    "cn": "台灣許多教育工作者正在嘗試新方法，但他們仍然需要學校給予時間和支持。"
  },
  {
    "word": "instructor",
    "pos": "n.",
    "cn_def": "教練；講師",
    "en_def": "a person who teaches a practical skill",
    "sentence": "My swimming {{BLANK}} is very patient, and she never shouts when I make the same mistake again.",
    "cn": "我的游泳教練非常有耐心，即使我再犯同樣的錯誤，她也從不大吼。"
  },
  {
    "word": "lesson plan",
    "pos": "n.phr.",
    "cn_def": "教案",
    "en_def": "a teacher's written plan for one class",
    "sentence": "Ms Lin writes a detailed {{BLANK}} for every class, but she changes it when the students need more practice.",
    "cn": "林老師每堂課都會寫詳細的教案，但當學生需要更多練習時她會調整。"
  },
  {
    "word": "worksheet",
    "pos": "n.",
    "cn_def": "學習單",
    "en_def": "a paper with exercises for students to complete",
    "sentence": "The teacher handed out a {{BLANK}} about the reading passage, and we had ten minutes to answer the questions in pairs.",
    "cn": "老師發下一張關於閱讀文章的學習單，我們有十分鐘兩人一組回答問題。"
  },
  {
    "word": "handout",
    "pos": "n.",
    "cn_def": "講義",
    "en_def": "a sheet of information given to students in class",
    "sentence": "Please keep this {{BLANK}} in your folder, because it has all the grammar rules that will be on the test.",
    "cn": "請把這份講義收在你的資料夾裡，因為上面有所有會考的文法規則。"
  },
  {
    "word": "whiteboard",
    "pos": "n.",
    "cn_def": "白板",
    "en_def": "a white board that teachers write on with markers",
    "sentence": "The teacher drew a timeline on the {{BLANK}}, and the students copied it carefully into their notebooks.",
    "cn": "老師在白板上畫了一條時間軸，學生們仔細地把它抄進筆記本。"
  },
  {
    "word": "projector",
    "pos": "n.",
    "cn_def": "投影機",
    "en_def": "a machine that shows pictures or slides on a screen",
    "sentence": "The {{BLANK}} stopped working in the middle of my presentation, so I had to explain my ideas without any slides.",
    "cn": "投影機在我報告到一半時壞了，所以我只好在沒有投影片的情況下解釋我的想法。"
  },
  {
    "word": "group work",
    "pos": "n.phr.",
    "cn_def": "小組作業；分組活動",
    "en_def": "tasks that students do together in small teams",
    "sentence": "Some students enjoy {{BLANK}}, but others feel that one or two members always do most of the job.",
    "cn": "有些學生喜歡分組活動，但也有人覺得總是一兩位組員做了大部分的工作。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討課；專題討論",
    "en_def": "a small class where students discuss a subject with a teacher",
    "sentence": "In the weekly {{BLANK}} each student shares an article, and the others ask questions about it.",
    "cn": "在每週的專題討論課中，每位學生分享一篇文章，其他人則針對它提問。"
  },
  {
    "word": "tutorial",
    "pos": "n.",
    "cn_def": "個別指導課；教學影片",
    "en_def": "a short lesson for one student or a small group",
    "sentence": "I watched an online {{BLANK}} about using spreadsheets, and then I finally finished my science report.",
    "cn": "我看了一段關於使用試算表的線上教學影片，然後終於完成了我的科學報告。"
  },
  {
    "word": "role-play",
    "pos": "n.",
    "cn_def": "角色扮演",
    "en_def": "an activity where students act as other people",
    "sentence": "We did a {{BLANK}} about ordering food in a restaurant, and it helped shy students speak more English.",
    "cn": "我們做了一個在餐廳點餐的角色扮演，它幫助害羞的學生說更多英文。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；口頭報告",
    "en_def": "a talk in which someone shows and explains information",
    "sentence": "I practised my {{BLANK}} in front of a mirror many times, so I felt much calmer when I spoke to the class.",
    "cn": "我對著鏡子練習口頭報告很多次，所以向全班說話時我覺得冷靜多了。"
  },
  {
    "word": "brainstorm",
    "pos": "v.",
    "cn_def": "腦力激盪",
    "en_def": "to share many ideas quickly in a group",
    "sentence": "Before writing, the students {{BLANK}} ideas about their dream school, and the teacher wrote every idea on the board.",
    "cn": "寫作前，學生們針對理想中的學校腦力激盪，老師把每個想法都寫在黑板上。"
  },
  {
    "word": "hands-on",
    "pos": "adj.",
    "cn_def": "動手做的；實作的",
    "en_def": "learning by doing things yourself",
    "sentence": "The science class is very {{BLANK}}, because we build simple machines instead of only reading about them.",
    "cn": "這堂科學課非常注重實作，因為我們親手製作簡單機械，而不只是讀有關它們的內容。"
  },
  {
    "word": "learner-centred",
    "pos": "adj.",
    "cn_def": "以學習者為中心的",
    "en_def": "focusing on what students need and do",
    "sentence": "In a {{BLANK}} classroom students ask more questions, while the teacher guides them rather than gives long talks.",
    "cn": "在以學習者為中心的教室裡，學生提出更多問題，而老師是引導他們，而不是長篇講課。"
  },
  {
    "word": "teacher-centred",
    "pos": "adj.",
    "cn_def": "以教師為中心的",
    "en_def": "focusing mainly on the teacher talking and controlling",
    "sentence": "Old-fashioned lessons were often {{BLANK}}, and students simply listened and copied notes for most of the class.",
    "cn": "傳統的課堂常常是以教師為中心的，學生大部分時間只是聽講和抄筆記。"
  },
  {
    "word": "classroom management",
    "pos": "n.phr.",
    "cn_def": "班級經營",
    "en_def": "the ways a teacher keeps a class organised and calm",
    "sentence": "Good {{BLANK}} makes lessons run smoothly, and new teachers often learn it from experienced colleagues.",
    "cn": "良好的班級經營讓課程進行順利，新老師常從資深同事那裡學習。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；管教",
    "en_def": "training people to obey rules and control behaviour",
    "sentence": "The coach believes in strict {{BLANK}}, so players who arrive late have to run extra laps.",
    "cn": "教練相信嚴格的紀律，所以遲到的球員必須多跑幾圈。"
  },
  {
    "word": "flipped classroom",
    "pos": "n.phr.",
    "cn_def": "翻轉教室",
    "en_def": "students watch lessons at home and practise in class",
    "sentence": "In a {{BLANK}} we watch short videos at home, and then we use class time for projects and questions.",
    "cn": "在翻轉教室裡，我們在家看短片，然後把上課時間用來做專題和提問。"
  },
  {
    "word": "inquiry-based",
    "pos": "adj.",
    "cn_def": "探究式的",
    "en_def": "learning by asking questions and finding answers",
    "sentence": "Our school uses {{BLANK}} learning in science, so students design their own experiments to test ideas.",
    "cn": "我們學校在科學課採用探究式學習，所以學生自己設計實驗來驗證想法。"
  },
  {
    "word": "project-based",
    "pos": "adj.",
    "cn_def": "專題式的",
    "en_def": "learning through long practical projects",
    "sentence": "The {{BLANK}} course asked us to plan a school garden, and we learned maths, science and teamwork at the same time.",
    "cn": "這門專題式課程要我們規劃一座校園花園，而我們同時學到了數學、科學和團隊合作。"
  },
  {
    "word": "rubric",
    "pos": "n.",
    "cn_def": "評分規準",
    "en_def": "a chart that explains how work will be scored",
    "sentence": "The teacher gave us the {{BLANK}} before we started writing, so we knew exactly how our stories would be marked.",
    "cn": "老師在我們開始寫作前就給了評分規準，所以我們清楚知道故事會如何被評分。"
  },
  {
    "word": "pace",
    "pos": "n.",
    "cn_def": "速度；步調",
    "en_def": "the speed at which something happens",
    "sentence": "The teacher explained the new grammar at a slow {{BLANK}}, because many students had never seen it before.",
    "cn": "老師用緩慢的速度解釋新文法，因為許多學生以前從未見過。"
  },
  {
    "word": "recap",
    "pos": "v.",
    "cn_def": "扼要重述",
    "en_def": "to repeat the main points briefly",
    "sentence": "At the end of each lesson the teacher asks one student to {{BLANK}} the key ideas, and the others add anything missing.",
    "cn": "每堂課結束時，老師會請一位學生扼要重述重點，其他人再補充遺漏的部分。"
  },
  {
    "word": "rapport",
    "pos": "n.",
    "cn_def": "融洽關係",
    "en_def": "a friendly relationship of trust and understanding",
    "sentence": "Mr Wang has a great {{BLANK}} with his students, so they feel comfortable asking him about anything.",
    "cn": "王老師和學生之間關係非常融洽，所以他們什麼事都敢問他。"
  },
  {
    "word": "visual aid",
    "pos": "n.phr.",
    "cn_def": "視覺輔助教具",
    "en_def": "a picture, chart or object that helps people understand",
    "sentence": "Maps and photos are useful {{BLANK}}, because they help students remember new words more easily.",
    "cn": "地圖和照片是很有用的視覺輔助教具，因為它們幫助學生更容易記住新單字。"
  },
  {
    "word": "blended learning",
    "pos": "n.phr.",
    "cn_def": "混成學習",
    "en_def": "a mix of online learning and classroom teaching",
    "sentence": "Since the pandemic many schools use {{BLANK}}, and students do some lessons online and some in class.",
    "cn": "自從疫情以來，許多學校採用混成學習，學生有些課在線上上，有些在教室上。"
  },
  {
    "word": "student teacher",
    "pos": "n.phr.",
    "cn_def": "實習教師",
    "en_def": "a person who is training to become a teacher",
    "sentence": "A {{BLANK}} joined our class for six weeks, and she taught us some fun songs about grammar.",
    "cn": "一位實習老師來我們班六週，她教了我們一些有趣的文法歌。"
  },
  {
    "word": "teaching assistant",
    "pos": "n.phr.",
    "cn_def": "助教",
    "en_def": "a person who helps a teacher in class",
    "sentence": "The {{BLANK}} helps students who fall behind, while the main teacher works with the rest of the class.",
    "cn": "助教協助進度落後的學生，而主要老師則帶領班上其他同學。"
  },
  {
    "word": "drill",
    "pos": "n.",
    "cn_def": "反覆練習",
    "en_def": "practice by repeating the same exercise many times",
    "sentence": "We did a pronunciation {{BLANK}} for ten minutes, and by the end everyone could say \"th\" correctly.",
    "cn": "我們做了十分鐘的發音反覆練習，到最後每個人都能正確發出 th 的音。"
  },
  {
    "word": "dictation",
    "pos": "n.",
    "cn_def": "聽寫",
    "en_def": "writing down words that someone reads aloud",
    "sentence": "Every Friday we have a spelling {{BLANK}}, so I review the new words on the bus every Thursday night.",
    "cn": "每個星期五我們有拼字聽寫，所以我每週四晚上都在公車上複習新單字。"
  },
  {
    "word": "spoon-feed",
    "pos": "v.",
    "cn_def": "填鴨式餵答案；過度灌輸",
    "en_def": "to give students answers so they do not think for themselves",
    "sentence": "Some tutors {{BLANK}} students with model answers, but this does not teach them how to solve new problems.",
    "cn": "有些補習老師用範本答案填鴨學生，但這並不能教會他們如何解決新問題。"
  },
  {
    "word": "role model",
    "pos": "n.phr.",
    "cn_def": "榜樣；模範",
    "en_def": "a person whose behaviour others want to copy",
    "sentence": "My aunt is my {{BLANK}}, because she became a doctor while helping her family run a small shop.",
    "cn": "我阿姨是我的榜樣，因為她一邊幫家裡經營小店一邊成為了醫生。"
  }
];

const MCQS = [
  {
    "q": "The new teacher studied modern _____ at university, so she uses games and discussions instead of just talking for an hour.",
    "options": [
      "preschool",
      "plethora",
      "orientation",
      "pedagogy"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Many _____ in Taiwan are trying new methods, but they still need time and support from their schools.",
    "options": [
      "professor",
      "educator",
      "dissertation",
      "accolade"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "My swimming _____ is very patient, and she never shouts when I make the same mistake again.",
    "options": [
      "instructor",
      "transcript",
      "tenet",
      "credential"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Ms Lin writes a detailed _____ for every class, but she changes it when the students need more practice.",
    "options": [
      "special needs",
      "learning style",
      "lesson plan",
      "answer sheet"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The teacher handed out a _____ about the reading passage, and we had ten minutes to answer the questions in pairs.",
    "options": [
      "alumni",
      "brevity",
      "penchant",
      "worksheet"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please keep this _____ in your folder, because it has all the grammar rules that will be on the test.",
    "options": [
      "major",
      "qualification",
      "handout",
      "axiom"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The teacher drew a timeline on the _____, and the students copied it carefully into their notebooks.",
    "options": [
      "whiteboard",
      "professor",
      "demeanour",
      "campus"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The _____ stopped working in the middle of my presentation, so I had to explain my ideas without any slides.",
    "options": [
      "laboratory",
      "projector",
      "privilege",
      "audiobook"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Some students enjoy _____, but others feel that one or two members always do most of the job.",
    "options": [
      "high achiever",
      "learning disability",
      "student union",
      "group work"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "In the weekly _____ each student shares an article, and the others ask questions about it.",
    "options": [
      "seminar",
      "exam",
      "supervisor",
      "professor"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "I watched an online _____ about using spreadsheets, and then I finally finished my science report.",
    "options": [
      "doctrine",
      "plateau",
      "tutorial",
      "genius"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "We did a _____ about ordering food in a restaurant, and it helped shy students speak more English.",
    "options": [
      "dissertation",
      "role-play",
      "accolade",
      "conference"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "I practised my _____ in front of a mirror many times, so I felt much calmer when I spoke to the class.",
    "options": [
      "prodigy",
      "homeroom",
      "presentation",
      "flashcard"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Before writing, the students _____ ideas about their dream school, and the teacher wrote every idea on the board.",
    "options": [
      "debilitate",
      "brainstorm",
      "endow",
      "redress"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The science class is very _____, because we build simple machines instead of only reading about them.",
    "options": [
      "hands-on",
      "exacting",
      "fastidious",
      "utilitarian"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "In a _____ classroom students ask more questions, while the teacher guides them rather than gives long talks.",
    "options": [
      "emphatic",
      "reticent",
      "struggling",
      "learner-centred"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Old-fashioned lessons were often _____, and students simply listened and copied notes for most of the class.",
    "options": [
      "outmoded",
      "teacher-centred",
      "competent",
      "professional"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Good _____ makes lessons run smoothly, and new teachers often learn it from experienced colleagues.",
    "options": [
      "classroom management",
      "growth mindset",
      "crib sheet",
      "trial and error"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The coach believes in strict _____, so players who arrive late have to run extra laps.",
    "options": [
      "jargon",
      "candidate",
      "predecessor",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "In a _____ we watch short videos at home, and then we use class time for projects and questions.",
    "options": [
      "high achiever",
      "gap year",
      "flipped classroom",
      "marking scheme"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Our school uses _____ learning in science, so students design their own experiments to test ideas.",
    "options": [
      "inquiry-based",
      "interdisciplinary",
      "legible",
      "desirable"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The _____ course asked us to plan a school garden, and we learned maths, science and teamwork at the same time.",
    "options": [
      "eclectic",
      "instrumental",
      "project-based",
      "co-educational"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The teacher gave us the _____ before we started writing, so we knew exactly how our stories would be marked.",
    "options": [
      "version",
      "rubric",
      "streaming",
      "elective"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The teacher explained the new grammar at a slow _____, because many students had never seen it before.",
    "options": [
      "scholarship",
      "guidance",
      "ingenuity",
      "pace"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "At the end of each lesson the teacher asks one student to _____ the key ideas, and the others add anything missing.",
    "options": [
      "recap",
      "epitomise",
      "mark",
      "homeschool"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Mr Wang has a great _____ with his students, so they feel comfortable asking him about anything.",
    "options": [
      "privilege",
      "semester",
      "professor",
      "rapport"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Maps and photos are useful _____, because they help students remember new words more easily.",
    "options": [
      "learning curve",
      "special needs",
      "visual aid",
      "reading list"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Since the pandemic many schools use _____, and students do some lessons online and some in class.",
    "options": [
      "band score",
      "blended learning",
      "dress code",
      "marking scheme"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "A _____ joined our class for six weeks, and she taught us some fun songs about grammar.",
    "options": [
      "student teacher",
      "past paper",
      "special needs",
      "bachelor's degree"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The _____ helps students who fall behind, while the main teacher works with the rest of the class.",
    "options": [
      "special needs",
      "mind map",
      "learning curve",
      "teaching assistant"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "We did a pronunciation _____ for ten minutes, and by the end everyone could say \"th\" correctly.",
    "options": [
      "reform",
      "IQ",
      "drill",
      "headteacher"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Every Friday we have a spelling _____, so I review the new words on the bus every Thursday night.",
    "options": [
      "freshman",
      "dictation",
      "maxim",
      "dictionary"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Some tutors _____ students with model answers, but this does not teach them how to solve new problems.",
    "options": [
      "demystify",
      "amass",
      "spoon-feed",
      "critique"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "My aunt is my _____, because she became a doctor while helping her family run a small shop.",
    "options": [
      "role model",
      "high achiever",
      "entrance exam",
      "bachelor's degree"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "pedagogy": {
    "pos": "n.",
    "en_def": "the methods and practice of teaching",
    "cn_def": "教學法"
  },
  "educator": {
    "pos": "n.",
    "en_def": "a person whose job is teaching or education",
    "cn_def": "教育工作者"
  },
  "instructor": {
    "pos": "n.",
    "en_def": "a person who teaches a practical skill",
    "cn_def": "教練；講師"
  },
  "lesson plan": {
    "pos": "n.phr.",
    "en_def": "a teacher's written plan for one class",
    "cn_def": "教案"
  },
  "worksheet": {
    "pos": "n.",
    "en_def": "a paper with exercises for students to complete",
    "cn_def": "學習單"
  },
  "handout": {
    "pos": "n.",
    "en_def": "a sheet of information given to students in class",
    "cn_def": "講義"
  },
  "whiteboard": {
    "pos": "n.",
    "en_def": "a white board that teachers write on with markers",
    "cn_def": "白板"
  },
  "projector": {
    "pos": "n.",
    "en_def": "a machine that shows pictures or slides on a screen",
    "cn_def": "投影機"
  },
  "group work": {
    "pos": "n.phr.",
    "en_def": "tasks that students do together in small teams",
    "cn_def": "小組作業；分組活動"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a small class where students discuss a subject with a teacher",
    "cn_def": "研討課；專題討論"
  },
  "tutorial": {
    "pos": "n.",
    "en_def": "a short lesson for one student or a small group",
    "cn_def": "個別指導課；教學影片"
  },
  "role-play": {
    "pos": "n.",
    "en_def": "an activity where students act as other people",
    "cn_def": "角色扮演"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk in which someone shows and explains information",
    "cn_def": "簡報；口頭報告"
  },
  "brainstorm": {
    "pos": "v.",
    "en_def": "to share many ideas quickly in a group",
    "cn_def": "腦力激盪"
  },
  "hands-on": {
    "pos": "adj.",
    "en_def": "learning by doing things yourself",
    "cn_def": "動手做的；實作的"
  },
  "learner-centred": {
    "pos": "adj.",
    "en_def": "focusing on what students need and do",
    "cn_def": "以學習者為中心的"
  },
  "teacher-centred": {
    "pos": "adj.",
    "en_def": "focusing mainly on the teacher talking and controlling",
    "cn_def": "以教師為中心的"
  },
  "classroom management": {
    "pos": "n.phr.",
    "en_def": "the ways a teacher keeps a class organised and calm",
    "cn_def": "班級經營"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "training people to obey rules and control behaviour",
    "cn_def": "紀律；管教"
  },
  "flipped classroom": {
    "pos": "n.phr.",
    "en_def": "students watch lessons at home and practise in class",
    "cn_def": "翻轉教室"
  },
  "inquiry-based": {
    "pos": "adj.",
    "en_def": "learning by asking questions and finding answers",
    "cn_def": "探究式的"
  },
  "project-based": {
    "pos": "adj.",
    "en_def": "learning through long practical projects",
    "cn_def": "專題式的"
  },
  "rubric": {
    "pos": "n.",
    "en_def": "a chart that explains how work will be scored",
    "cn_def": "評分規準"
  },
  "pace": {
    "pos": "n.",
    "en_def": "the speed at which something happens",
    "cn_def": "速度；步調"
  },
  "recap": {
    "pos": "v.",
    "en_def": "to repeat the main points briefly",
    "cn_def": "扼要重述"
  },
  "rapport": {
    "pos": "n.",
    "en_def": "a friendly relationship of trust and understanding",
    "cn_def": "融洽關係"
  },
  "visual aid": {
    "pos": "n.phr.",
    "en_def": "a picture, chart or object that helps people understand",
    "cn_def": "視覺輔助教具"
  },
  "blended learning": {
    "pos": "n.phr.",
    "en_def": "a mix of online learning and classroom teaching",
    "cn_def": "混成學習"
  },
  "student teacher": {
    "pos": "n.phr.",
    "en_def": "a person who is training to become a teacher",
    "cn_def": "實習教師"
  },
  "teaching assistant": {
    "pos": "n.phr.",
    "en_def": "a person who helps a teacher in class",
    "cn_def": "助教"
  },
  "drill": {
    "pos": "n.",
    "en_def": "practice by repeating the same exercise many times",
    "cn_def": "反覆練習"
  },
  "dictation": {
    "pos": "n.",
    "en_def": "writing down words that someone reads aloud",
    "cn_def": "聽寫"
  },
  "spoon-feed": {
    "pos": "v.",
    "en_def": "to give students answers so they do not think for themselves",
    "cn_def": "填鴨式餵答案；過度灌輸"
  },
  "role model": {
    "pos": "n.phr.",
    "en_def": "a person whose behaviour others want to copy",
    "cn_def": "榜樣；模範"
  },
  "preschool": {
    "pos": "n.",
    "en_def": "a school for young children before primary school",
    "cn_def": "學前教育機構；幼稚園"
  },
  "plethora": {
    "pos": "n.",
    "en_def": "a very large amount, often too much",
    "cn_def": "過多；大量"
  },
  "orientation": {
    "pos": "n.",
    "en_def": "a time of introduction for new students",
    "cn_def": "新生訓練；入門介紹"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a senior teacher at a university",
    "cn_def": "教授"
  },
  "dissertation": {
    "pos": "n.",
    "en_def": "a long piece of writing done for a university degree",
    "cn_def": "學位論文"
  },
  "accolade": {
    "pos": "n.",
    "en_def": "praise or an award for an achievement",
    "cn_def": "讚譽；獎項"
  },
  "transcript": {
    "pos": "n.",
    "en_def": "an official record of a student's courses and results",
    "cn_def": "成績單"
  },
  "tenet": {
    "pos": "n.",
    "en_def": "a main principle or belief",
    "cn_def": "原則；信條"
  },
  "credential": {
    "pos": "n.",
    "en_def": "a qualification that shows you are able to do a job",
    "cn_def": "資歷證明；資格證書"
  },
  "special needs": {
    "pos": "n.phr.",
    "en_def": "extra help that some students need to learn",
    "cn_def": "特殊需求"
  },
  "learning style": {
    "pos": "n.phr.",
    "en_def": "the way a person learns best",
    "cn_def": "學習風格"
  },
  "answer sheet": {
    "pos": "n.phr.",
    "en_def": "the paper on which students write or mark their answers",
    "cn_def": "答案卡；答案紙"
  },
  "alumni": {
    "pos": "n.",
    "en_def": "former students of a school or university",
    "cn_def": "校友（複數）"
  },
  "brevity": {
    "pos": "n.",
    "en_def": "the quality of using few words",
    "cn_def": "簡潔；簡短"
  },
  "penchant": {
    "pos": "n.",
    "en_def": "a strong liking for something",
    "cn_def": "嗜好；偏好"
  },
  "major": {
    "pos": "n.",
    "en_def": "the main subject a university student studies",
    "cn_def": "主修"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record that you have passed exams or training",
    "cn_def": "資格；學歷證照"
  },
  "axiom": {
    "pos": "n.",
    "en_def": "a statement accepted as true without needing proof",
    "cn_def": "公理；格言"
  },
  "demeanour": {
    "pos": "n.",
    "en_def": "the way a person behaves or looks",
    "cn_def": "舉止；態度"
  },
  "campus": {
    "pos": "n.",
    "en_def": "the land and buildings of a university or school",
    "cn_def": "校園"
  },
  "laboratory": {
    "pos": "n.",
    "en_def": "a room where scientific experiments are done",
    "cn_def": "實驗室"
  },
  "privilege": {
    "pos": "n.",
    "en_def": "a special advantage that only some people have",
    "cn_def": "特權；優勢"
  },
  "audiobook": {
    "pos": "n.",
    "en_def": "a recording of someone reading a book aloud",
    "cn_def": "有聲書"
  },
  "high achiever": {
    "pos": "n.phr.",
    "en_def": "a person who is very successful, especially at school",
    "cn_def": "成就卓越者；資優生"
  },
  "learning disability": {
    "pos": "n.phr.",
    "en_def": "a condition that makes some kinds of learning difficult",
    "cn_def": "學習障礙"
  },
  "student union": {
    "pos": "n.phr.",
    "en_def": "an organisation run by students to support them",
    "cn_def": "學生會"
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a teacher who guides a student's research",
    "cn_def": "指導教授；主管"
  },
  "doctrine": {
    "pos": "n.",
    "en_def": "a set of beliefs taught by a group",
    "cn_def": "學說；教義"
  },
  "plateau": {
    "pos": "n.",
    "en_def": "a period when progress stops for a while",
    "cn_def": "停滯期；高原期"
  },
  "genius": {
    "pos": "n.",
    "en_def": "a person with extremely high intelligence or skill",
    "cn_def": "天才"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where people discuss ideas",
    "cn_def": "研討會；會議"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person with extraordinary ability",
    "cn_def": "神童"
  },
  "homeroom": {
    "pos": "n.",
    "en_def": "the class where students meet their main teacher each day",
    "cn_def": "導師班；班級教室"
  },
  "flashcard": {
    "pos": "n.",
    "en_def": "a small card with a word on one side and its meaning on the other",
    "cn_def": "單字卡；閃卡"
  },
  "debilitate": {
    "pos": "v.",
    "en_def": "to make someone or something very weak",
    "cn_def": "使衰弱"
  },
  "endow": {
    "pos": "v.",
    "en_def": "to give a large amount of money to a school or other organisation",
    "cn_def": "捐贈；資助"
  },
  "redress": {
    "pos": "v.",
    "en_def": "to correct something unfair",
    "cn_def": "糾正；補救"
  },
  "exacting": {
    "pos": "adj.",
    "en_def": "needing a lot of care, effort and skill",
    "cn_def": "要求嚴格的；費力的"
  },
  "fastidious": {
    "pos": "adj.",
    "en_def": "very careful about details and wanting things perfect",
    "cn_def": "一絲不苟的；挑剔的"
  },
  "utilitarian": {
    "pos": "adj.",
    "en_def": "designed to be useful rather than beautiful",
    "cn_def": "實用的；功利的"
  },
  "emphatic": {
    "pos": "adj.",
    "en_def": "said with force to show something is important",
    "cn_def": "強調的；斷然的"
  },
  "reticent": {
    "pos": "adj.",
    "en_def": "not willing to say what you think or feel",
    "cn_def": "沉默寡言的；不願多說的"
  },
  "struggling": {
    "pos": "adj.",
    "en_def": "having difficulty doing something",
    "cn_def": "學習困難的；吃力的"
  },
  "outmoded": {
    "pos": "adj.",
    "en_def": "no longer fashionable or useful",
    "cn_def": "過時的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill to do something well",
    "cn_def": "有能力的；稱職的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "relating to a job that needs special training",
    "cn_def": "專業的"
  },
  "growth mindset": {
    "pos": "n.phr.",
    "en_def": "the belief that ability can grow with effort",
    "cn_def": "成長型思維"
  },
  "crib sheet": {
    "pos": "n.phr.",
    "en_def": "a small hidden paper with answers used to cheat",
    "cn_def": "小抄"
  },
  "trial and error": {
    "pos": "n.phr.",
    "en_def": "trying different ways until you find one that works",
    "cn_def": "反覆試驗；試誤"
  },
  "jargon": {
    "pos": "n.",
    "en_def": "special words used by a group that others find hard to understand",
    "cn_def": "術語；行話"
  },
  "candidate": {
    "pos": "n.",
    "en_def": "a person who is taking an exam",
    "cn_def": "考生；應試者"
  },
  "predecessor": {
    "pos": "n.",
    "en_def": "the person who had a job before someone else",
    "cn_def": "前任"
  },
  "gap year": {
    "pos": "n.phr.",
    "en_def": "a year off between school and university",
    "cn_def": "空檔年"
  },
  "marking scheme": {
    "pos": "n.phr.",
    "en_def": "the official guide for scoring an exam",
    "cn_def": "評分標準"
  },
  "interdisciplinary": {
    "pos": "adj.",
    "en_def": "involving two or more subjects",
    "cn_def": "跨學科的"
  },
  "legible": {
    "pos": "adj.",
    "en_def": "clear enough to read",
    "cn_def": "字跡清楚的；易讀的"
  },
  "desirable": {
    "pos": "adj.",
    "en_def": "worth having or wanting",
    "cn_def": "令人嚮往的；理想的"
  },
  "eclectic": {
    "pos": "adj.",
    "en_def": "including ideas or styles from many different sources",
    "cn_def": "兼容並蓄的；多元的"
  },
  "instrumental": {
    "pos": "adj.",
    "en_def": "very important in making something happen",
    "cn_def": "起重要作用的"
  },
  "co-educational": {
    "pos": "adj.",
    "en_def": "for both boys and girls together",
    "cn_def": "男女合校的"
  },
  "version": {
    "pos": "n.",
    "en_def": "a slightly different form of something",
    "cn_def": "版本"
  },
  "streaming": {
    "pos": "n.",
    "en_def": "putting students into classes by their ability level",
    "cn_def": "能力分班"
  },
  "elective": {
    "pos": "n.",
    "en_def": "a course that students can choose to take",
    "cn_def": "選修課"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for education",
    "cn_def": "獎學金"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about what to do",
    "cn_def": "指導；輔導"
  },
  "ingenuity": {
    "pos": "n.",
    "en_def": "skill in thinking of clever new ideas",
    "cn_def": "巧思；創造力"
  },
  "epitomise": {
    "pos": "v.",
    "en_def": "to be a perfect example of something",
    "cn_def": "是…的典型；集中體現"
  },
  "mark": {
    "pos": "v.",
    "en_def": "to check and give a score to students' work",
    "cn_def": "批改；評分"
  },
  "homeschool": {
    "pos": "v.",
    "en_def": "to teach your children at home instead of sending them to school",
    "cn_def": "在家自學（教育）"
  },
  "semester": {
    "pos": "n.",
    "en_def": "one of the two main periods in a school year",
    "cn_def": "學期"
  },
  "learning curve": {
    "pos": "n.phr.",
    "en_def": "how quickly someone learns something new",
    "cn_def": "學習曲線"
  },
  "reading list": {
    "pos": "n.phr.",
    "en_def": "a list of books students are told to read",
    "cn_def": "書單；閱讀清單"
  },
  "band score": {
    "pos": "n.phr.",
    "en_def": "a level from 1 to 9 given in the IELTS test",
    "cn_def": "（雅思）級分"
  },
  "dress code": {
    "pos": "n.phr.",
    "en_def": "rules about what clothes people may wear",
    "cn_def": "服裝規定"
  },
  "past paper": {
    "pos": "n.phr.",
    "en_def": "an exam from a previous year used for practice",
    "cn_def": "考古題"
  },
  "bachelor's degree": {
    "pos": "n.phr.",
    "en_def": "a first university degree, usually after four years",
    "cn_def": "學士學位"
  },
  "mind map": {
    "pos": "n.phr.",
    "en_def": "a diagram that connects ideas around a central topic",
    "cn_def": "心智圖"
  },
  "reform": {
    "pos": "n.",
    "en_def": "a change made to improve a system",
    "cn_def": "改革"
  },
  "iq": {
    "pos": "n.",
    "en_def": "a number that measures a person's thinking ability",
    "cn_def": "智商"
  },
  "headteacher": {
    "pos": "n.",
    "en_def": "the teacher who is in charge of a school",
    "cn_def": "校長"
  },
  "freshman": {
    "pos": "n.",
    "en_def": "a student in the first year of high school or university",
    "cn_def": "新鮮人；一年級新生"
  },
  "maxim": {
    "pos": "n.",
    "en_def": "a short saying that gives a rule for behaviour",
    "cn_def": "格言；座右銘"
  },
  "dictionary": {
    "pos": "n.",
    "en_def": "a book or app that explains the meanings of words",
    "cn_def": "字典"
  },
  "demystify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "使易懂；揭開神秘面紗"
  },
  "amass": {
    "pos": "v.",
    "en_def": "to collect a large amount of something over time",
    "cn_def": "累積；積聚"
  },
  "critique": {
    "pos": "v.",
    "en_def": "to judge something carefully, showing good and bad points",
    "cn_def": "評論；評析"
  },
  "entrance exam": {
    "pos": "n.phr.",
    "en_def": "an exam you must pass to join a school or university",
    "cn_def": "入學考試"
  }
};

const EXTRA_GLOSSES = {};
