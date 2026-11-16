// Topic 6 Subunit 4 Quiz Data: Exams & Grading 考試與評分
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S04 - Exams & Grading 考試與評分",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "a formal test of knowledge or skill",
    "sentence": "The final {{BLANK}} is next Tuesday, so the library will stay open until ten o'clock every night this week.",
    "cn": "期末考試在下週二，所以這週圖書館每晚都會開到十點。"
  },
  {
    "word": "examiner",
    "pos": "n.",
    "cn_def": "主考官；閱卷人",
    "en_def": "a person who sets or marks an exam, or tests speaking",
    "sentence": "The IELTS {{BLANK}} asked me about my hometown, and I tried to give long answers with examples.",
    "cn": "雅思主考官問我關於家鄉的問題，我試著用例子給出較長的回答。"
  },
  {
    "word": "invigilator",
    "pos": "n.",
    "cn_def": "監考人員",
    "en_def": "a person who watches students during an exam",
    "sentence": "The {{BLANK}} walked slowly around the hall, and she collected all the phones before the test began.",
    "cn": "監考人員在考場裡慢慢走動，並在考試開始前收走所有手機。"
  },
  {
    "word": "candidate",
    "pos": "n.",
    "cn_def": "考生；應試者",
    "en_def": "a person who is taking an exam",
    "sentence": "Each {{BLANK}} must bring an ID card to the test centre, or they will not be allowed to enter the room.",
    "cn": "每位考生都必須攜帶身分證到考場，否則將不被允許進入考場。"
  },
  {
    "word": "mock exam",
    "pos": "n.phr.",
    "cn_def": "模擬考",
    "en_def": "a practice exam taken before the real one",
    "sentence": "My score on the {{BLANK}} was disappointing, but it showed me exactly which topics I needed to review.",
    "cn": "我模擬考的成績令人失望，但它讓我清楚知道需要複習哪些主題。"
  },
  {
    "word": "past paper",
    "pos": "n.phr.",
    "cn_def": "考古題",
    "en_def": "an exam from a previous year used for practice",
    "sentence": "Our teacher gave us a {{BLANK}} from 2023, and we did it under real time limits in class.",
    "cn": "老師給了我們一份2023年的考古題，我們在課堂上依照真實的時間限制作答。"
  },
  {
    "word": "multiple-choice",
    "pos": "adj.",
    "cn_def": "選擇題的",
    "en_def": "giving several possible answers to choose from",
    "sentence": "The first part of the test has forty {{BLANK}} questions, while the second part asks students to write short answers.",
    "cn": "測驗第一部分有四十題選擇題，而第二部分要學生寫簡答。"
  },
  {
    "word": "open-book",
    "pos": "adj.",
    "cn_def": "開書考的",
    "en_def": "allowing students to use books during the exam",
    "sentence": "The history test was {{BLANK}}, but it was still difficult because the questions asked for our own opinions.",
    "cn": "這次歷史考試是開書考，但仍然很難，因為題目要求我們提出自己的看法。"
  },
  {
    "word": "oral",
    "pos": "adj.",
    "cn_def": "口語的；口試的",
    "en_def": "spoken rather than written",
    "sentence": "I was nervous before the {{BLANK}} exam, but the teacher smiled and asked easy questions at first.",
    "cn": "口試前我很緊張，但老師面帶微笑，一開始問的是簡單的問題。"
  },
  {
    "word": "transcript",
    "pos": "n.",
    "cn_def": "成績單",
    "en_def": "an official record of a student's courses and results",
    "sentence": "Universities abroad asked for my high school {{BLANK}}, so I requested an English copy from the school office.",
    "cn": "國外大學要求我提供高中成績單，所以我向學校辦公室申請了英文版。"
  },
  {
    "word": "report card",
    "pos": "n.phr.",
    "cn_def": "成績通知單",
    "en_def": "a school report showing a student's results",
    "sentence": "When I brought my {{BLANK}} home, my parents were happy because my science result had improved a lot.",
    "cn": "我把成績單帶回家時，爸媽很開心，因為我的自然成績進步了很多。"
  },
  {
    "word": "mark",
    "pos": "v.",
    "cn_def": "批改；評分",
    "en_def": "to check and give a score to students' work",
    "sentence": "The teacher stayed up late to {{BLANK}} our tests, so we got them back the very next morning.",
    "cn": "老師熬夜批改我們的考卷，所以我們隔天早上就拿回來了。"
  },
  {
    "word": "retake",
    "pos": "v.",
    "cn_def": "重考",
    "en_def": "to take an exam again after failing or to get a better score",
    "sentence": "He decided to {{BLANK}} the driving test next month, because he had made a small mistake when parking.",
    "cn": "他決定下個月重考駕照，因為他在停車時犯了一個小錯。"
  },
  {
    "word": "standardised",
    "pos": "adj.",
    "cn_def": "標準化的",
    "en_def": "the same for everyone, so results can be compared",
    "sentence": "The GSAT is a {{BLANK}} test, so students across Taiwan answer the same questions on the same day.",
    "cn": "學測是標準化測驗，所以全台學生在同一天回答同樣的題目。"
  },
  {
    "word": "entrance exam",
    "pos": "n.phr.",
    "cn_def": "入學考試",
    "en_def": "an exam you must pass to join a school or university",
    "sentence": "She studied for months for the {{BLANK}}, and she was accepted by the medical school she wanted.",
    "cn": "她為入學考試準備了好幾個月，最後被她想要的醫學系錄取。"
  },
  {
    "word": "scholarship",
    "pos": "n.",
    "cn_def": "獎學金",
    "en_def": "money given to a student to help pay for education",
    "sentence": "He won a full {{BLANK}} to study in Canada, so his parents did not have to worry about the fees.",
    "cn": "他獲得了全額獎學金到加拿大念書，所以他父母不必擔心學費。"
  },
  {
    "word": "distinction",
    "pos": "n.",
    "cn_def": "優等；優異成績",
    "en_def": "the highest level of result in an exam",
    "sentence": "She passed her piano exam with {{BLANK}}, and her teacher invited her to play at the school concert.",
    "cn": "她以優異成績通過鋼琴檢定，老師邀請她在學校音樂會上演奏。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "學分",
    "en_def": "a unit that shows a student has completed part of a course",
    "sentence": "Each elective course is worth two {{BLANK}}, and students need a certain number of them to graduate.",
    "cn": "每門選修課值兩個學分，學生需要修滿一定數量才能畢業。"
  },
  {
    "word": "ranking",
    "pos": "n.",
    "cn_def": "排名",
    "en_def": "a position in a list showing who is better or worse",
    "sentence": "The school no longer posts each student's {{BLANK}} on the wall, because it made many teenagers feel stressed.",
    "cn": "學校不再把每位學生的排名貼在牆上，因為那讓許多青少年感到壓力。"
  },
  {
    "word": "percentile",
    "pos": "n.",
    "cn_def": "百分位數",
    "en_def": "a position showing what percentage of people scored lower",
    "sentence": "His score put him in the 90th {{BLANK}}, which means he did better than ninety percent of test takers.",
    "cn": "他的分數落在第90百分位數，這表示他考得比百分之九十的考生好。"
  },
  {
    "word": "high-stakes",
    "pos": "adj.",
    "cn_def": "高利害的；攸關重大的",
    "en_def": "having very important results or effects",
    "sentence": "University entrance tests are {{BLANK}} exams, so many students feel huge pressure in their final year.",
    "cn": "大學入學考試是攸關重大的考試，所以許多學生在最後一年感到巨大壓力。"
  },
  {
    "word": "formative",
    "pos": "adj.",
    "cn_def": "形成性的",
    "en_def": "used during learning to help students improve",
    "sentence": "Short {{BLANK}} tests help teachers see what students do not understand, and they do not count towards the final score.",
    "cn": "簡短的形成性測驗幫助老師看出學生不懂的地方，而且不計入總成績。"
  },
  {
    "word": "summative",
    "pos": "adj.",
    "cn_def": "總結性的",
    "en_def": "used at the end to judge what students have learned",
    "sentence": "The final exam is a {{BLANK}} test, so it shows how much students have learned during the whole semester.",
    "cn": "期末考是總結性測驗，所以它顯示學生整學期學到了多少。"
  },
  {
    "word": "answer sheet",
    "pos": "n.phr.",
    "cn_def": "答案卡；答案紙",
    "en_def": "the paper on which students write or mark their answers",
    "sentence": "Use a 2B pencil on the {{BLANK}}, and make sure you fill in each circle completely.",
    "cn": "在答案卡上要用2B鉛筆，並確保每個圓圈都完整塗滿。"
  },
  {
    "word": "extension",
    "pos": "n.",
    "cn_def": "延期；延長期限",
    "en_def": "extra time given to finish a piece of work",
    "sentence": "I was ill for a week, so the teacher gave me an {{BLANK}} and I handed in my project on Friday.",
    "cn": "我病了一週，所以老師讓我延期，我在星期五交了專題。"
  },
  {
    "word": "crib sheet",
    "pos": "n.phr.",
    "cn_def": "小抄",
    "en_def": "a small hidden paper with answers used to cheat",
    "sentence": "The student hid a {{BLANK}} in his pencil case, but the invigilator found it within five minutes.",
    "cn": "那位學生把小抄藏在鉛筆盒裡，但監考人員五分鐘內就發現了。"
  },
  {
    "word": "pass rate",
    "pos": "n.phr.",
    "cn_def": "及格率；通過率",
    "en_def": "the percentage of people who pass an exam",
    "sentence": "The {{BLANK}} for the driving test is quite low, so most people take extra lessons before trying it.",
    "cn": "駕照考試的通過率相當低，所以大部分人在應考前會多上幾堂課。"
  },
  {
    "word": "marking scheme",
    "pos": "n.phr.",
    "cn_def": "評分標準",
    "en_def": "the official guide for scoring an exam",
    "sentence": "Teachers follow the same {{BLANK}}, so students at different schools are scored in a fair way.",
    "cn": "老師們遵循同一套評分標準，所以不同學校的學生都能被公平評分。"
  },
  {
    "word": "diploma",
    "pos": "n.",
    "cn_def": "文憑；畢業證書",
    "en_def": "a document showing you have completed a course",
    "sentence": "She proudly held her {{BLANK}} on stage, and her grandparents took dozens of photos from the audience.",
    "cn": "她在台上驕傲地拿著畢業證書，她的祖父母在觀眾席拍了好幾十張照片。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；學歷證照",
    "en_def": "an official record that you have passed exams or training",
    "sentence": "You need a teaching {{BLANK}} to work in a public school, but private cram schools are not always so strict.",
    "cn": "在公立學校任教需要教師資格，但私人補習班不一定那麼嚴格。"
  },
  {
    "word": "band score",
    "pos": "n.phr.",
    "cn_def": "（雅思）級分",
    "en_def": "a level from 1 to 9 given in the IELTS test",
    "sentence": "She needs a {{BLANK}} of 6.5 for her university application, so she is practising writing every day.",
    "cn": "她的大學申請需要6.5的級分，所以她每天都在練習寫作。"
  },
  {
    "word": "underachieve",
    "pos": "v.",
    "cn_def": "表現低於應有水準",
    "en_def": "to do less well than your ability suggests",
    "sentence": "Bright students sometimes {{BLANK}} when they feel bored, so teachers try to give them more challenging tasks.",
    "cn": "聰明的學生有時在感到無聊時會表現不如預期，所以老師會試著給他們更有挑戰性的任務。"
  },
  {
    "word": "high achiever",
    "pos": "n.phr.",
    "cn_def": "成就卓越者；資優生",
    "en_def": "a person who is very successful, especially at school",
    "sentence": "Lucy is a {{BLANK}} in every subject, but she still asks for help when she does not understand something.",
    "cn": "露西每一科都是成績頂尖的學生，但遇到不懂的地方她仍然會請求協助。"
  }
];

const MCQS = [
  {
    "q": "The final _____ is next Tuesday, so the library will stay open until ten o'clock every night this week.",
    "options": [
      "kindergarten",
      "brevity",
      "exam",
      "orientation"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The IELTS _____ asked me about my hometown, and I tried to give long answers with examples.",
    "options": [
      "educator",
      "examiner",
      "librarian",
      "plateau"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ walked slowly around the hall, and she collected all the phones before the test began.",
    "options": [
      "credential",
      "seminar",
      "faculty",
      "invigilator"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Each _____ must bring an ID card to the test centre, or they will not be allowed to enter the room.",
    "options": [
      "candidate",
      "credential",
      "worksheet",
      "acumen"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "My score on the _____ was disappointing, but it showed me exactly which topics I needed to review.",
    "options": [
      "mind map",
      "mock exam",
      "study group",
      "higher education"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Our teacher gave us a _____ from 2023, and we did it under real time limits in class.",
    "options": [
      "exchange student",
      "learning disability",
      "classroom management",
      "past paper"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The first part of the test has forty _____ questions, while the second part asks students to write short answers.",
    "options": [
      "intellectual",
      "dogmatic",
      "multiple-choice",
      "competent"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The history test was _____, but it was still difficult because the questions asked for our own opinions.",
    "options": [
      "open-book",
      "colloquial",
      "myopic",
      "nominal"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "I was nervous before the _____ exam, but the teacher smiled and asked easy questions at first.",
    "options": [
      "formulaic",
      "innocuous",
      "oral",
      "disadvantaged"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Universities abroad asked for my high school _____, so I requested an English copy from the school office.",
    "options": [
      "bureaucracy",
      "note-taking",
      "prodigy",
      "transcript"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "When I brought my _____ home, my parents were happy because my science result had improved a lot.",
    "options": [
      "student loan",
      "report card",
      "learning style",
      "learning curve"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The teacher stayed up late to _____ our tests, so we got them back the very next morning.",
    "options": [
      "mark",
      "allot",
      "quote",
      "endow"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "He decided to _____ the driving test next month, because he had made a small mistake when parking.",
    "options": [
      "practise",
      "engender",
      "retake",
      "supersede"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The GSAT is a _____ test, so students across Taiwan answer the same questions on the same day.",
    "options": [
      "heterogeneous",
      "standardised",
      "cursory",
      "perfunctory"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "She studied for months for the _____, and she was accepted by the medical school she wanted.",
    "options": [
      "learning curve",
      "field trip",
      "gap year",
      "entrance exam"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "He won a full _____ to study in Canada, so his parents did not have to worry about the fees.",
    "options": [
      "scholarship",
      "discipline",
      "reform",
      "pace"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "She passed her piano exam with _____, and her teacher invited her to play at the school concert.",
    "options": [
      "bureaucracy",
      "distinction",
      "humanities",
      "headteacher"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Each elective course is worth two _____, and students need a certain number of them to graduate.",
    "options": [
      "numeracy",
      "kindergarten",
      "credit",
      "deference"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The school no longer posts each student's _____ on the wall, because it made many teenagers feel stressed.",
    "options": [
      "ranking",
      "note-taking",
      "orientation",
      "highlighter"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "His score put him in the 90th _____, which means he did better than ninety percent of test takers.",
    "options": [
      "brevity",
      "pedagogy",
      "doctrine",
      "percentile"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "University entrance tests are _____ exams, so many students feel huge pressure in their final year.",
    "options": [
      "intellectual",
      "benevolent",
      "high-stakes",
      "pedantic"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Short _____ tests help teachers see what students do not understand, and they do not count towards the final score.",
    "options": [
      "formative",
      "mainstream",
      "abridged",
      "socioeconomic"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The final exam is a _____ test, so it shows how much students have learned during the whole semester.",
    "options": [
      "laborious",
      "summative",
      "adaptable",
      "elementary"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Use a 2B pencil on the _____, and make sure you fill in each circle completely.",
    "options": [
      "study group",
      "field trip",
      "self-fulfilling prophecy",
      "answer sheet"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "I was ill for a week, so the teacher gave me an _____ and I handed in my project on Friday.",
    "options": [
      "extension",
      "glossary",
      "jargon",
      "numeracy"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The student hid a _____ in his pencil case, but the invigilator found it within five minutes.",
    "options": [
      "blended learning",
      "boarding school",
      "crib sheet",
      "sign language"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The _____ for the driving test is quite low, so most people take extra lessons before trying it.",
    "options": [
      "higher education",
      "pass rate",
      "trial and error",
      "special needs"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Teachers follow the same _____, so students at different schools are scored in a fair way.",
    "options": [
      "visual aid",
      "special needs",
      "group work",
      "marking scheme"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "She proudly held her _____ on stage, and her grandparents took dozens of photos from the audience.",
    "options": [
      "roommate",
      "diploma",
      "seminar",
      "bureaucracy"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "You need a teaching _____ to work in a public school, but private cram schools are not always so strict.",
    "options": [
      "precedent",
      "bureaucracy",
      "qualification",
      "prowess"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "She needs a _____ of 6.5 for her university application, so she is practising writing every day.",
    "options": [
      "band score",
      "lesson plan",
      "sign language",
      "classroom management"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Bright students sometimes _____ when they feel bored, so teachers try to give them more challenging tasks.",
    "options": [
      "spur",
      "familiarise",
      "endow",
      "underachieve"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Lucy is a _____ in every subject, but she still asks for help when she does not understand something.",
    "options": [
      "mind map",
      "learning style",
      "high achiever",
      "group work"
    ],
    "answer": 2,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "examiner": {
    "pos": "n.",
    "en_def": "a person who sets or marks an exam, or tests speaking",
    "cn_def": "主考官；閱卷人"
  },
  "invigilator": {
    "pos": "n.",
    "en_def": "a person who watches students during an exam",
    "cn_def": "監考人員"
  },
  "candidate": {
    "pos": "n.",
    "en_def": "a person who is taking an exam",
    "cn_def": "考生；應試者"
  },
  "mock exam": {
    "pos": "n.phr.",
    "en_def": "a practice exam taken before the real one",
    "cn_def": "模擬考"
  },
  "past paper": {
    "pos": "n.phr.",
    "en_def": "an exam from a previous year used for practice",
    "cn_def": "考古題"
  },
  "multiple-choice": {
    "pos": "adj.",
    "en_def": "giving several possible answers to choose from",
    "cn_def": "選擇題的"
  },
  "open-book": {
    "pos": "adj.",
    "en_def": "allowing students to use books during the exam",
    "cn_def": "開書考的"
  },
  "oral": {
    "pos": "adj.",
    "en_def": "spoken rather than written",
    "cn_def": "口語的；口試的"
  },
  "transcript": {
    "pos": "n.",
    "en_def": "an official record of a student's courses and results",
    "cn_def": "成績單"
  },
  "report card": {
    "pos": "n.phr.",
    "en_def": "a school report showing a student's results",
    "cn_def": "成績通知單"
  },
  "mark": {
    "pos": "v.",
    "en_def": "to check and give a score to students' work",
    "cn_def": "批改；評分"
  },
  "retake": {
    "pos": "v.",
    "en_def": "to take an exam again after failing or to get a better score",
    "cn_def": "重考"
  },
  "standardised": {
    "pos": "adj.",
    "en_def": "the same for everyone, so results can be compared",
    "cn_def": "標準化的"
  },
  "entrance exam": {
    "pos": "n.phr.",
    "en_def": "an exam you must pass to join a school or university",
    "cn_def": "入學考試"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for education",
    "cn_def": "獎學金"
  },
  "distinction": {
    "pos": "n.",
    "en_def": "the highest level of result in an exam",
    "cn_def": "優等；優異成績"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has completed part of a course",
    "cn_def": "學分"
  },
  "ranking": {
    "pos": "n.",
    "en_def": "a position in a list showing who is better or worse",
    "cn_def": "排名"
  },
  "percentile": {
    "pos": "n.",
    "en_def": "a position showing what percentage of people scored lower",
    "cn_def": "百分位數"
  },
  "high-stakes": {
    "pos": "adj.",
    "en_def": "having very important results or effects",
    "cn_def": "高利害的；攸關重大的"
  },
  "formative": {
    "pos": "adj.",
    "en_def": "used during learning to help students improve",
    "cn_def": "形成性的"
  },
  "summative": {
    "pos": "adj.",
    "en_def": "used at the end to judge what students have learned",
    "cn_def": "總結性的"
  },
  "answer sheet": {
    "pos": "n.phr.",
    "en_def": "the paper on which students write or mark their answers",
    "cn_def": "答案卡；答案紙"
  },
  "extension": {
    "pos": "n.",
    "en_def": "extra time given to finish a piece of work",
    "cn_def": "延期；延長期限"
  },
  "crib sheet": {
    "pos": "n.phr.",
    "en_def": "a small hidden paper with answers used to cheat",
    "cn_def": "小抄"
  },
  "pass rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who pass an exam",
    "cn_def": "及格率；通過率"
  },
  "marking scheme": {
    "pos": "n.phr.",
    "en_def": "the official guide for scoring an exam",
    "cn_def": "評分標準"
  },
  "diploma": {
    "pos": "n.",
    "en_def": "a document showing you have completed a course",
    "cn_def": "文憑；畢業證書"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record that you have passed exams or training",
    "cn_def": "資格；學歷證照"
  },
  "band score": {
    "pos": "n.phr.",
    "en_def": "a level from 1 to 9 given in the IELTS test",
    "cn_def": "（雅思）級分"
  },
  "underachieve": {
    "pos": "v.",
    "en_def": "to do less well than your ability suggests",
    "cn_def": "表現低於應有水準"
  },
  "high achiever": {
    "pos": "n.phr.",
    "en_def": "a person who is very successful, especially at school",
    "cn_def": "成就卓越者；資優生"
  },
  "kindergarten": {
    "pos": "n.",
    "en_def": "a school for children aged about three to six",
    "cn_def": "幼兒園"
  },
  "brevity": {
    "pos": "n.",
    "en_def": "the quality of using few words",
    "cn_def": "簡潔；簡短"
  },
  "orientation": {
    "pos": "n.",
    "en_def": "a time of introduction for new students",
    "cn_def": "新生訓練；入門介紹"
  },
  "educator": {
    "pos": "n.",
    "en_def": "a person whose job is teaching or education",
    "cn_def": "教育工作者"
  },
  "librarian": {
    "pos": "n.",
    "en_def": "a person who works in a library",
    "cn_def": "圖書館員"
  },
  "plateau": {
    "pos": "n.",
    "en_def": "a period when progress stops for a while",
    "cn_def": "停滯期；高原期"
  },
  "credential": {
    "pos": "n.",
    "en_def": "a qualification that shows you are able to do a job",
    "cn_def": "資歷證明；資格證書"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a small class where students discuss a subject with a teacher",
    "cn_def": "研討課；專題討論"
  },
  "faculty": {
    "pos": "n.",
    "en_def": "a group of university departments, or all the teaching staff",
    "cn_def": "學院；全體教職員"
  },
  "worksheet": {
    "pos": "n.",
    "en_def": "a paper with exercises for students to complete",
    "cn_def": "學習單"
  },
  "acumen": {
    "pos": "n.",
    "en_def": "the ability to make good, quick judgements",
    "cn_def": "敏銳；精明"
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
  "higher education": {
    "pos": "n.phr.",
    "en_def": "education at university or college",
    "cn_def": "高等教育"
  },
  "exchange student": {
    "pos": "n.phr.",
    "en_def": "a student who studies in another country for a short time",
    "cn_def": "交換學生"
  },
  "learning disability": {
    "pos": "n.phr.",
    "en_def": "a condition that makes some kinds of learning difficult",
    "cn_def": "學習障礙"
  },
  "classroom management": {
    "pos": "n.phr.",
    "en_def": "the ways a teacher keeps a class organised and calm",
    "cn_def": "班級經營"
  },
  "intellectual": {
    "pos": "adj.",
    "en_def": "relating to the ability to think and understand ideas",
    "cn_def": "智力的；知識性的"
  },
  "dogmatic": {
    "pos": "adj.",
    "en_def": "sure that your beliefs are right and refusing other ideas",
    "cn_def": "武斷的；教條的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill to do something well",
    "cn_def": "有能力的；稱職的"
  },
  "colloquial": {
    "pos": "adj.",
    "en_def": "used in informal conversation, not formal writing",
    "cn_def": "口語的"
  },
  "myopic": {
    "pos": "adj.",
    "en_def": "not thinking about the future",
    "cn_def": "短視的"
  },
  "nominal": {
    "pos": "adj.",
    "en_def": "very small, much less than the real value",
    "cn_def": "象徵性的；極少的"
  },
  "formulaic": {
    "pos": "adj.",
    "en_def": "following a fixed pattern, with no originality",
    "cn_def": "公式化的"
  },
  "innocuous": {
    "pos": "adj.",
    "en_def": "not harmful or offensive",
    "cn_def": "無害的；無惡意的"
  },
  "disadvantaged": {
    "pos": "adj.",
    "en_def": "facing problems such as poverty that make success harder",
    "cn_def": "處於不利地位的"
  },
  "bureaucracy": {
    "pos": "n.",
    "en_def": "a system with many complicated official rules",
    "cn_def": "官僚制度；繁文縟節"
  },
  "note-taking": {
    "pos": "n.",
    "en_def": "writing down the key points while listening or reading",
    "cn_def": "做筆記"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person with extraordinary ability",
    "cn_def": "神童"
  },
  "student loan": {
    "pos": "n.phr.",
    "en_def": "money borrowed to pay for university, paid back later",
    "cn_def": "學生貸款"
  },
  "learning style": {
    "pos": "n.phr.",
    "en_def": "the way a person learns best",
    "cn_def": "學習風格"
  },
  "learning curve": {
    "pos": "n.phr.",
    "en_def": "how quickly someone learns something new",
    "cn_def": "學習曲線"
  },
  "allot": {
    "pos": "v.",
    "en_def": "to give a share of time or money for a purpose",
    "cn_def": "分配；撥出"
  },
  "quote": {
    "pos": "v.",
    "en_def": "to repeat the exact words that someone else said or wrote",
    "cn_def": "引用；引述"
  },
  "endow": {
    "pos": "v.",
    "en_def": "to give a large amount of money to a school or other organisation",
    "cn_def": "捐贈；資助"
  },
  "practise": {
    "pos": "v.",
    "en_def": "to do something again and again to improve",
    "cn_def": "練習"
  },
  "engender": {
    "pos": "v.",
    "en_def": "to cause a feeling or situation to exist",
    "cn_def": "引起；產生"
  },
  "supersede": {
    "pos": "v.",
    "en_def": "to replace something older or less useful",
    "cn_def": "取代"
  },
  "heterogeneous": {
    "pos": "adj.",
    "en_def": "made up of many different kinds",
    "cn_def": "異質的；多樣混雜的"
  },
  "cursory": {
    "pos": "adj.",
    "en_def": "done quickly without paying attention to details",
    "cn_def": "粗略的；草率的"
  },
  "perfunctory": {
    "pos": "adj.",
    "en_def": "done quickly with little care or interest",
    "cn_def": "敷衍的"
  },
  "field trip": {
    "pos": "n.phr.",
    "en_def": "a visit made by students to learn outside school",
    "cn_def": "校外教學"
  },
  "gap year": {
    "pos": "n.phr.",
    "en_def": "a year off between school and university",
    "cn_def": "空檔年"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "training people to obey rules and control behaviour",
    "cn_def": "紀律；管教"
  },
  "reform": {
    "pos": "n.",
    "en_def": "a change made to improve a system",
    "cn_def": "改革"
  },
  "pace": {
    "pos": "n.",
    "en_def": "the speed at which something happens",
    "cn_def": "速度；步調"
  },
  "humanities": {
    "pos": "n.",
    "en_def": "subjects such as history, literature and philosophy",
    "cn_def": "人文學科"
  },
  "headteacher": {
    "pos": "n.",
    "en_def": "the teacher who is in charge of a school",
    "cn_def": "校長"
  },
  "numeracy": {
    "pos": "n.",
    "en_def": "the ability to understand and work with numbers",
    "cn_def": "數理能力；算術能力"
  },
  "deference": {
    "pos": "n.",
    "en_def": "polite respect for someone's opinion or position",
    "cn_def": "尊重；敬意"
  },
  "highlighter": {
    "pos": "n.",
    "en_def": "a bright pen used to mark important words",
    "cn_def": "螢光筆"
  },
  "pedagogy": {
    "pos": "n.",
    "en_def": "the methods and practice of teaching",
    "cn_def": "教學法"
  },
  "doctrine": {
    "pos": "n.",
    "en_def": "a set of beliefs taught by a group",
    "cn_def": "學說；教義"
  },
  "benevolent": {
    "pos": "adj.",
    "en_def": "kind and wanting to help others",
    "cn_def": "仁慈的；慈善的"
  },
  "pedantic": {
    "pos": "adj.",
    "en_def": "caring too much about small details and rules",
    "cn_def": "迂腐的；過分拘泥細節的"
  },
  "mainstream": {
    "pos": "adj.",
    "en_def": "ordinary and used by most people",
    "cn_def": "主流的；一般的"
  },
  "abridged": {
    "pos": "adj.",
    "en_def": "made shorter by removing some parts",
    "cn_def": "刪節的；簡寫的"
  },
  "socioeconomic": {
    "pos": "adj.",
    "en_def": "relating to social class and money",
    "cn_def": "社會經濟的"
  },
  "laborious": {
    "pos": "adj.",
    "en_def": "needing a lot of time and effort",
    "cn_def": "費力的；辛苦的"
  },
  "adaptable": {
    "pos": "adj.",
    "en_def": "able to change to suit new situations",
    "cn_def": "適應力強的"
  },
  "elementary": {
    "pos": "adj.",
    "en_def": "about the first, simplest stage of school or learning",
    "cn_def": "初級的；小學的"
  },
  "self-fulfilling prophecy": {
    "pos": "n.phr.",
    "en_def": "a belief that makes itself come true",
    "cn_def": "自我應驗的預言"
  },
  "glossary": {
    "pos": "n.",
    "en_def": "a list of difficult words with their meanings, often at the end of a book",
    "cn_def": "詞彙表"
  },
  "jargon": {
    "pos": "n.",
    "en_def": "special words used by a group that others find hard to understand",
    "cn_def": "術語；行話"
  },
  "blended learning": {
    "pos": "n.phr.",
    "en_def": "a mix of online learning and classroom teaching",
    "cn_def": "混成學習"
  },
  "boarding school": {
    "pos": "n.phr.",
    "en_def": "a school where students live and sleep during the term",
    "cn_def": "寄宿學校"
  },
  "sign language": {
    "pos": "n.phr.",
    "en_def": "a language that uses hand movements instead of sounds",
    "cn_def": "手語"
  },
  "trial and error": {
    "pos": "n.phr.",
    "en_def": "trying different ways until you find one that works",
    "cn_def": "反覆試驗；試誤"
  },
  "special needs": {
    "pos": "n.phr.",
    "en_def": "extra help that some students need to learn",
    "cn_def": "特殊需求"
  },
  "visual aid": {
    "pos": "n.phr.",
    "en_def": "a picture, chart or object that helps people understand",
    "cn_def": "視覺輔助教具"
  },
  "group work": {
    "pos": "n.phr.",
    "en_def": "tasks that students do together in small teams",
    "cn_def": "小組作業；分組活動"
  },
  "roommate": {
    "pos": "n.",
    "en_def": "a person who shares a room with you",
    "cn_def": "室友"
  },
  "precedent": {
    "pos": "n.",
    "en_def": "an earlier event used as an example for later decisions",
    "cn_def": "先例"
  },
  "prowess": {
    "pos": "n.",
    "en_def": "great skill at doing something",
    "cn_def": "高超技能；本領"
  },
  "lesson plan": {
    "pos": "n.phr.",
    "en_def": "a teacher's written plan for one class",
    "cn_def": "教案"
  },
  "spur": {
    "pos": "v.",
    "en_def": "to encourage someone to do something",
    "cn_def": "激勵；鞭策"
  },
  "familiarise": {
    "pos": "v.",
    "en_def": "to learn about something so that you know it well",
    "cn_def": "使熟悉"
  }
};

const EXTRA_GLOSSES = {};
