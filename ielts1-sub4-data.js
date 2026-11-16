// Topic 1 Subunit 4 Quiz Data: AI in the Classroom 人工智慧與教育
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S04 - AI in the Classroom 人工智慧與教育",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程(綱要)",
    "en_def": "all the subjects and topics taught in a school",
    "sentence": "The government added AI lessons to the high school {{BLANK}}, but many teachers say they need more training first.",
    "cn": "政府把人工智慧課程加入高中課程綱要,但許多老師說他們需要先接受更多培訓。"
  },
  {
    "word": "tutor",
    "pos": "n.",
    "cn_def": "家教;導師",
    "en_def": "a teacher who helps one student or a small group",
    "sentence": "An AI {{BLANK}} is available all night, but it cannot notice when a student looks tired or upset like a human teacher can.",
    "cn": "人工智慧家教整晚都能使用,但它不像真人老師那樣能察覺學生看起來疲倦或沮喪。"
  },
  {
    "word": "tutoring",
    "pos": "n.",
    "cn_def": "課業輔導;家教",
    "en_def": "extra private teaching for one student or a small group",
    "sentence": "Private {{BLANK}} is very expensive in Taipei, so some families now try cheaper online AI lessons instead.",
    "cn": "在台北,私人家教非常昂貴,所以一些家庭現在改試更便宜的線上人工智慧課程。"
  },
  {
    "word": "plagiarism",
    "pos": "n.",
    "cn_def": "抄襲",
    "en_def": "copying someone else's work and saying it is yours",
    "sentence": "The university takes {{BLANK}} very seriously, so students who copy AI essays may fail the whole course.",
    "cn": "這所大學非常嚴肅看待抄襲,所以抄人工智慧作文的學生可能整門課都會被當。"
  },
  {
    "word": "plagiarise",
    "pos": "v.",
    "cn_def": "抄襲",
    "en_def": "to copy someone else's words or ideas as your own",
    "sentence": "He {{BLANK}}d a paragraph from a website, and the teacher found it in seconds with a checking tool.",
    "cn": "他從一個網站抄襲了一段文字,老師用檢查工具在幾秒內就發現了。"
  },
  {
    "word": "cheat",
    "pos": "v.",
    "cn_def": "作弊",
    "en_def": "to act dishonestly to win or pass a test",
    "sentence": "Some students {{BLANK}} by using phones during online tests, so the school now asks everyone to keep their cameras on.",
    "cn": "有些學生在線上考試時用手機作弊,所以學校現在要求每個人都要開著鏡頭。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "作業;任務",
    "en_def": "a piece of work given to a student",
    "sentence": "Our history {{BLANK}} is to interview an older relative, so an AI cannot easily do the work for us.",
    "cn": "我們的歷史作業是訪問一位年長的親戚,所以人工智慧很難幫我們完成。"
  },
  {
    "word": "essay",
    "pos": "n.",
    "cn_def": "文章;作文",
    "en_def": "a short piece of writing on a subject",
    "sentence": "The teacher asked us to write the {{BLANK}} in class by hand, because she wanted to see our real writing skills.",
    "cn": "老師要我們在課堂上手寫這篇作文,因為她想看到我們真正的寫作能力。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業",
    "en_def": "schoolwork that students do at home",
    "sentence": "My little brother finished his math {{BLANK}} in five minutes with an AI app, but he could not explain any of the answers.",
    "cn": "我弟弟用人工智慧應用程式五分鐘就寫完數學作業,但他一個答案都解釋不出來。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評量;評估",
    "en_def": "a test or judgement of how well someone has learned",
    "sentence": "Many schools are changing their {{BLANK}} methods, because take-home essays are now too easy to complete with AI.",
    "cn": "許多學校正在改變評量方式,因為帶回家寫的作文現在太容易用人工智慧完成了。"
  },
  {
    "word": "grade",
    "pos": "v.",
    "cn_def": "打分數;評分",
    "en_def": "to give a mark or score to students' work",
    "sentence": "Some teachers use AI to {{BLANK}} multiple-choice tests, so they have more time to write comments on students' essays.",
    "cn": "有些老師用人工智慧來評分選擇題測驗,這樣他們就有更多時間在學生作文上寫評語。"
  },
  {
    "word": "literacy",
    "pos": "n.",
    "cn_def": "讀寫能力;素養",
    "en_def": "the ability to read and write, or skill in an area",
    "sentence": "Digital {{BLANK}} is now as important as reading, because students must judge whether online information is true.",
    "cn": "數位素養現在和閱讀一樣重要,因為學生必須判斷網路資訊是否屬實。"
  },
  {
    "word": "adaptive",
    "pos": "adj.",
    "cn_def": "適性的;可調適的",
    "en_def": "able to change to suit different needs",
    "sentence": "The {{BLANK}} math program gives harder questions when you answer correctly, but easier ones when you make mistakes.",
    "cn": "這個適性數學程式在你答對時給更難的題目,但在你答錯時給較簡單的題目。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "遠距的;遠端的",
    "en_def": "done from a distance, not in the same place",
    "sentence": "During the typhoon, the school switched to {{BLANK}} learning, so students joined their classes from home.",
    "cn": "颱風期間,學校改為遠距教學,所以學生在家上課。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "講課;演講",
    "en_def": "a talk given to students on a subject",
    "sentence": "The professor recorded every {{BLANK}} and posted it online, but fewer students came to class after that.",
    "cn": "教授錄下每一堂講課並放到網路上,但在那之後來上課的學生變少了。"
  },
  {
    "word": "lecturer",
    "pos": "n.",
    "cn_def": "(大學)講師",
    "en_def": "a teacher at a university",
    "sentence": "Our {{BLANK}} allows us to use AI for brainstorming, but we must explain in writing how we used it.",
    "cn": "我們的講師允許我們用人工智慧腦力激盪,但我們必須書面說明如何使用它。"
  },
  {
    "word": "syllabus",
    "pos": "n.",
    "cn_def": "課程大綱",
    "en_def": "a list of topics and plans for a course",
    "sentence": "The {{BLANK}} says that AI tools are not allowed in the final exam, so please read it carefully before the term begins.",
    "cn": "課程大綱上寫著期末考不准使用人工智慧工具,所以請在學期開始前仔細閱讀。"
  },
  {
    "word": "enrol",
    "pos": "v.",
    "cn_def": "註冊;報名",
    "en_def": "to officially join a course or school",
    "sentence": "Thousands of adults {{BLANK}} in free online AI courses every month, because they want to keep their jobs safe.",
    "cn": "每個月有數千名成人報名免費的線上人工智慧課程,因為他們想保住自己的工作。"
  },
  {
    "word": "tuition",
    "pos": "n.",
    "cn_def": "學費",
    "en_def": "money paid for teaching at a school or university",
    "sentence": "University {{BLANK}} keeps rising, so some students prefer cheaper online courses that use AI teachers.",
    "cn": "大學學費持續上漲,所以有些學生偏好使用人工智慧老師的較便宜線上課程。"
  },
  {
    "word": "coursework",
    "pos": "n.",
    "cn_def": "課堂作業;平時作業",
    "en_def": "work students do during a course that counts towards a grade",
    "sentence": "Half of our final mark comes from {{BLANK}}, so the teacher checks every project carefully for AI-written parts.",
    "cn": "我們期末成績有一半來自平時作業,所以老師會仔細檢查每份專題中是否有人工智慧寫的部分。"
  },
  {
    "word": "quiz",
    "pos": "n.",
    "cn_def": "小考;測驗",
    "en_def": "a short test",
    "sentence": "The app gives me a quick vocabulary {{BLANK}} every evening, and it repeats the words I got wrong the next day.",
    "cn": "這個應用程式每天晚上給我一個快速的單字小考,並且隔天會重複出我答錯的字。"
  },
  {
    "word": "certificate",
    "pos": "n.",
    "cn_def": "證書",
    "en_def": "an official paper that shows you completed a course",
    "sentence": "After the six-week online course, I received a {{BLANK}} in data skills, and I added it to my job applications.",
    "cn": "上完六週的線上課程後,我拿到一張數據技能證書,並把它加進我的求職資料裡。"
  },
  {
    "word": "graduate",
    "pos": "n.",
    "cn_def": "畢業生",
    "en_def": "a person who has finished a degree",
    "sentence": "Many new {{BLANK}}s find that companies now expect AI skills, so they take extra courses after leaving university.",
    "cn": "許多應屆畢業生發現公司現在要求人工智慧技能,所以他們離開大學後會額外修課。"
  },
  {
    "word": "self-paced",
    "pos": "adj.",
    "cn_def": "自主進度的",
    "en_def": "letting you learn at your own speed",
    "sentence": "The course is {{BLANK}}, so busy workers can study at night, but some people never finish without a deadline.",
    "cn": "這門課是自主進度的,所以忙碌的上班族可以晚上學習,但有些人沒有截止日期就永遠讀不完。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動式的",
    "en_def": "allowing people and computers to respond to each other",
    "sentence": "The {{BLANK}} whiteboard lets students move pictures and answer questions, so lessons feel more like games.",
    "cn": "這塊互動式白板讓學生移動圖片和回答問題,所以上課感覺更像在玩遊戲。"
  },
  {
    "word": "detector",
    "pos": "n.",
    "cn_def": "偵測器;檢測工具",
    "en_def": "a tool that finds or notices something",
    "sentence": "The school uses an AI {{BLANK}} to check essays, but it sometimes marks honest students' work as machine-written.",
    "cn": "學校使用人工智慧檢測工具檢查作文,但它有時會把誠實學生的作品標記成機器寫的。"
  },
  {
    "word": "originality",
    "pos": "n.",
    "cn_def": "原創性",
    "en_def": "the quality of being new and not copied",
    "sentence": "The judges gave her the top prize for {{BLANK}}, because her story idea was unlike anything they had read before.",
    "cn": "評審因為原創性給了她最高獎項,因為她的故事點子和他們以前讀過的都不一樣。"
  },
  {
    "word": "dishonest",
    "pos": "adj.",
    "cn_def": "不誠實的",
    "en_def": "not telling the truth; likely to cheat",
    "sentence": "Handing in an AI essay as your own work is {{BLANK}}, and it also means you lose the chance to improve your writing.",
    "cn": "把人工智慧寫的作文當成自己的作品交出去是不誠實的,而且也代表你失去了提升寫作的機會。"
  },
  {
    "word": "mentor",
    "pos": "n.",
    "cn_def": "導師;良師",
    "en_def": "an experienced person who advises someone younger",
    "sentence": "An AI can answer questions, but a good {{BLANK}} shares real experience and helps you make big life decisions.",
    "cn": "人工智慧能回答問題,但一位好的導師會分享真實的經驗,並幫助你做出人生的重大決定。"
  },
  {
    "word": "textbook",
    "pos": "n.",
    "cn_def": "教科書;課本",
    "en_def": "a book used for studying a subject",
    "sentence": "The new English {{BLANK}} comes with an app that reads every dialogue aloud, so students can practise speaking at home.",
    "cn": "新的英文課本附有一個會朗讀每段對話的應用程式,所以學生可以在家練習口說。"
  }
];

const MCQS = [
  {
    "q": "The government added AI lessons to the high school _____, but many teachers say they need more training first.",
    "options": [
      "domain",
      "curriculum",
      "theory",
      "entrepreneur"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "An AI _____ is available all night, but it cannot notice when a student looks tired or upset like a human teacher can.",
    "options": [
      "tutor",
      "dimension",
      "theory",
      "scam"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Private _____ is very expensive in Taipei, so some families now try cheaper online AI lessons instead.",
    "options": [
      "accountability",
      "proportion",
      "employer",
      "tutoring"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The university takes _____ very seriously, so students who copy AI essays may fail the whole course.",
    "options": [
      "potential",
      "template",
      "plagiarism",
      "divide"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "He _____d a paragraph from a website, and the teacher found it in seconds with a checking tool.",
    "options": [
      "plagiarise",
      "exploit",
      "dispute",
      "paraphrase"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Some students _____ by using phones during online tests, so the school now asks everyone to keep their cameras on.",
    "options": [
      "adopt",
      "cheat",
      "analyse",
      "verify"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Our history _____ is to interview an older relative, so an AI cannot easily do the work for us.",
    "options": [
      "user",
      "likelihood",
      "career",
      "assignment"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The teacher asked us to write the _____ in class by hand, because she wanted to see our real writing skills.",
    "options": [
      "tension",
      "productivity",
      "essay",
      "profit"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "My little brother finished his math _____ in five minutes with an AI app, but he could not explain any of the answers.",
    "options": [
      "homework",
      "backup",
      "prompt",
      "workforce"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many schools are changing their _____ methods, because take-home essays are now too easy to complete with AI.",
    "options": [
      "platform",
      "strategy",
      "recruiter",
      "assessment"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Some teachers use AI to _____ multiple-choice tests, so they have more time to write comments on students' essays.",
    "options": [
      "simulate",
      "grade",
      "criticise",
      "estimate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Digital _____ is now as important as reading, because students must judge whether online information is true.",
    "options": [
      "trend",
      "assumption",
      "literacy",
      "wage"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The _____ math program gives harder questions when you answer correctly, but easier ones when you make mistakes.",
    "options": [
      "transparent",
      "adaptive",
      "essential",
      "gradual"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "During the typhoon, the school switched to _____ learning, so students joined their classes from home.",
    "options": [
      "innovative",
      "biometric",
      "sufficient",
      "remote"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The professor recorded every _____ and posted it online, but fewer students came to class after that.",
    "options": [
      "lecture",
      "consent",
      "telemedicine",
      "subscription"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Our _____ allows us to use AI for brainstorming, but we must explain in writing how we used it.",
    "options": [
      "misinformation",
      "cookie",
      "lecturer",
      "trend"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ says that AI tools are not allowed in the final exam, so please read it carefully before the term begins.",
    "options": [
      "syllabus",
      "workforce",
      "cookie",
      "caption"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Thousands of adults _____ in free online AI courses every month, because they want to keep their jobs safe.",
    "options": [
      "customise",
      "establish",
      "hack",
      "enrol"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "University _____ keeps rising, so some students prefer cheaper online courses that use AI teachers.",
    "options": [
      "firewall",
      "regulator",
      "tuition",
      "prototype"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Half of our final mark comes from _____, so the teacher checks every project carefully for AI-written parts.",
    "options": [
      "fingerprint",
      "coursework",
      "household",
      "chatbot"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The app gives me a quick vocabulary _____ every evening, and it repeats the words I got wrong the next day.",
    "options": [
      "technique",
      "infrastructure",
      "quiz",
      "context"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "After the six-week online course, I received a _____ in data skills, and I added it to my job applications.",
    "options": [
      "fairness",
      "certificate",
      "criticism",
      "processor"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Many new _____s find that companies now expect AI skills, so they take extra courses after leaving university.",
    "options": [
      "warehouse",
      "applicant",
      "coding",
      "graduate"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The course is _____, so busy workers can study at night, but some people never finish without a deadline.",
    "options": [
      "self-paced",
      "dependent",
      "controversial",
      "innovative"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The _____ whiteboard lets students move pictures and answer questions, so lessons feel more like games.",
    "options": [
      "synthetic",
      "interactive",
      "subsequent",
      "objective"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The school uses an AI _____ to check essays, but it sometimes marks honest students' work as machine-written.",
    "options": [
      "detector",
      "deepfake",
      "divide",
      "diversity"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The judges gave her the top prize for _____, because her story idea was unlike anything they had read before.",
    "options": [
      "gig",
      "scam",
      "assumption",
      "originality"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Handing in an AI essay as your own work is _____, and it also means you lose the chance to improve your writing.",
    "options": [
      "abundant",
      "transparent",
      "dishonest",
      "convenient"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "An AI can answer questions, but a good _____ shares real experience and helps you make big life decisions.",
    "options": [
      "mentor",
      "identity",
      "cookie",
      "draft"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The new English _____ comes with an app that reads every dialogue aloud, so students can practise speaking at home.",
    "options": [
      "mechanism",
      "backup",
      "textbook",
      "limitation"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and topics taught in a school",
    "cn_def": "課程(綱要)"
  },
  "tutor": {
    "pos": "n.",
    "en_def": "a teacher who helps one student or a small group",
    "cn_def": "家教;導師"
  },
  "tutoring": {
    "pos": "n.",
    "en_def": "extra private teaching for one student or a small group",
    "cn_def": "課業輔導;家教"
  },
  "plagiarism": {
    "pos": "n.",
    "en_def": "copying someone else's work and saying it is yours",
    "cn_def": "抄襲"
  },
  "plagiarise": {
    "pos": "v.",
    "en_def": "to copy someone else's words or ideas as your own",
    "cn_def": "抄襲"
  },
  "cheat": {
    "pos": "v.",
    "en_def": "to act dishonestly to win or pass a test",
    "cn_def": "作弊"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to a student",
    "cn_def": "作業;任務"
  },
  "essay": {
    "pos": "n.",
    "en_def": "a short piece of writing on a subject",
    "cn_def": "文章;作文"
  },
  "homework": {
    "pos": "n.",
    "en_def": "schoolwork that students do at home",
    "cn_def": "家庭作業"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "a test or judgement of how well someone has learned",
    "cn_def": "評量;評估"
  },
  "grade": {
    "pos": "v.",
    "en_def": "to give a mark or score to students' work",
    "cn_def": "打分數;評分"
  },
  "literacy": {
    "pos": "n.",
    "en_def": "the ability to read and write, or skill in an area",
    "cn_def": "讀寫能力;素養"
  },
  "adaptive": {
    "pos": "adj.",
    "en_def": "able to change to suit different needs",
    "cn_def": "適性的;可調適的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "done from a distance, not in the same place",
    "cn_def": "遠距的;遠端的"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to students on a subject",
    "cn_def": "講課;演講"
  },
  "lecturer": {
    "pos": "n.",
    "en_def": "a teacher at a university",
    "cn_def": "(大學)講師"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of topics and plans for a course",
    "cn_def": "課程大綱"
  },
  "enrol": {
    "pos": "v.",
    "en_def": "to officially join a course or school",
    "cn_def": "註冊;報名"
  },
  "tuition": {
    "pos": "n.",
    "en_def": "money paid for teaching at a school or university",
    "cn_def": "學費"
  },
  "coursework": {
    "pos": "n.",
    "en_def": "work students do during a course that counts towards a grade",
    "cn_def": "課堂作業;平時作業"
  },
  "quiz": {
    "pos": "n.",
    "en_def": "a short test",
    "cn_def": "小考;測驗"
  },
  "certificate": {
    "pos": "n.",
    "en_def": "an official paper that shows you completed a course",
    "cn_def": "證書"
  },
  "graduate": {
    "pos": "n.",
    "en_def": "a person who has finished a degree",
    "cn_def": "畢業生"
  },
  "self-paced": {
    "pos": "adj.",
    "en_def": "letting you learn at your own speed",
    "cn_def": "自主進度的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people and computers to respond to each other",
    "cn_def": "互動式的"
  },
  "detector": {
    "pos": "n.",
    "en_def": "a tool that finds or notices something",
    "cn_def": "偵測器;檢測工具"
  },
  "originality": {
    "pos": "n.",
    "en_def": "the quality of being new and not copied",
    "cn_def": "原創性"
  },
  "dishonest": {
    "pos": "adj.",
    "en_def": "not telling the truth; likely to cheat",
    "cn_def": "不誠實的"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises someone younger",
    "cn_def": "導師;良師"
  },
  "textbook": {
    "pos": "n.",
    "en_def": "a book used for studying a subject",
    "cn_def": "教科書;課本"
  },
  "domain": {
    "pos": "n.",
    "en_def": "an area of knowledge or activity",
    "cn_def": "領域"
  },
  "theory": {
    "pos": "n.",
    "en_def": "an idea that tries to explain something",
    "cn_def": "理論"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts their own business",
    "cn_def": "創業家;企業家"
  },
  "dimension": {
    "pos": "n.",
    "en_def": "a part or feature of a situation",
    "cn_def": "面向;層面"
  },
  "scam": {
    "pos": "n.",
    "en_def": "a dishonest plan to get money from people",
    "cn_def": "詐騙"
  },
  "accountability": {
    "pos": "n.",
    "en_def": "being responsible for decisions and their results",
    "cn_def": "問責;責任歸屬"
  },
  "proportion": {
    "pos": "n.",
    "en_def": "a part of a whole, compared with the total",
    "cn_def": "比例"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work",
    "cn_def": "雇主"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility of developing or being useful in the future",
    "cn_def": "潛力;可能性"
  },
  "template": {
    "pos": "n.",
    "en_def": "a ready-made pattern you can use and fill in",
    "cn_def": "範本;模板"
  },
  "divide": {
    "pos": "n.",
    "en_def": "a large difference between two groups",
    "cn_def": "差距;鴻溝"
  },
  "exploit": {
    "pos": "v.",
    "en_def": "to use someone or something unfairly for your own gain",
    "cn_def": "剝削;利用"
  },
  "dispute": {
    "pos": "v.",
    "en_def": "to say that something is not true or correct",
    "cn_def": "質疑;爭論"
  },
  "paraphrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "改寫;換句話說"
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to start using a new idea or method",
    "cn_def": "採用"
  },
  "analyse": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "verify": {
    "pos": "v.",
    "en_def": "to check that something is true or correct",
    "cn_def": "核實;驗證"
  },
  "user": {
    "pos": "n.",
    "en_def": "a person who uses a product or service",
    "cn_def": "使用者;用戶"
  },
  "likelihood": {
    "pos": "n.",
    "en_def": "how probable something is",
    "cn_def": "可能性"
  },
  "career": {
    "pos": "n.",
    "en_def": "the jobs a person does during their working life",
    "cn_def": "職涯;事業"
  },
  "tension": {
    "pos": "n.",
    "en_def": "a feeling of worry or bad feeling between people",
    "cn_def": "緊張關係"
  },
  "productivity": {
    "pos": "n.",
    "en_def": "how much work is done in a certain time",
    "cn_def": "生產力"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money a business makes after paying its costs",
    "cn_def": "利潤;獲利"
  },
  "backup": {
    "pos": "n.",
    "en_def": "an extra copy of data kept in case the original is lost",
    "cn_def": "備份"
  },
  "prompt": {
    "pos": "n.",
    "en_def": "the instruction or question you type into an AI tool",
    "cn_def": "提示詞;指令"
  },
  "workforce": {
    "pos": "n.",
    "en_def": "all the people who work in a company or country",
    "cn_def": "勞動力;全體員工"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service where people share and use content",
    "cn_def": "平台"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan for reaching a goal",
    "cn_def": "策略"
  },
  "recruiter": {
    "pos": "n.",
    "en_def": "a person who finds new workers for companies",
    "cn_def": "招募人員"
  },
  "simulate": {
    "pos": "v.",
    "en_def": "to copy how something happens in real life using a computer",
    "cn_def": "模擬"
  },
  "criticise": {
    "pos": "v.",
    "en_def": "to say what is wrong with someone or something",
    "cn_def": "批評"
  },
  "estimate": {
    "pos": "v.",
    "en_def": "to guess a number or amount by thinking carefully",
    "cn_def": "估計"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which things are changing",
    "cn_def": "趨勢"
  },
  "assumption": {
    "pos": "n.",
    "en_def": "something you believe is true without proof",
    "cn_def": "假設;假定"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid to a worker, usually by the hour or week",
    "cn_def": "工資"
  },
  "transparent": {
    "pos": "adj.",
    "en_def": "open and easy to understand, with nothing hidden",
    "cn_def": "透明的;公開的"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary",
    "cn_def": "必要的;不可或缺的"
  },
  "gradual": {
    "pos": "adj.",
    "en_def": "happening slowly over a long time",
    "cn_def": "逐漸的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new ideas or methods",
    "cn_def": "創新的"
  },
  "biometric": {
    "pos": "adj.",
    "en_def": "using body features like fingerprints or faces to identify people",
    "cn_def": "生物辨識的"
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough for a particular purpose",
    "cn_def": "充足的;足夠的"
  },
  "consent": {
    "pos": "n.",
    "en_def": "permission to do something",
    "cn_def": "同意;許可"
  },
  "telemedicine": {
    "pos": "n.",
    "en_def": "seeing a doctor through video or phone instead of in person",
    "cn_def": "遠距醫療"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "money you pay regularly to use a service",
    "cn_def": "訂閱"
  },
  "misinformation": {
    "pos": "n.",
    "en_def": "wrong information that is spread, often by mistake",
    "cn_def": "錯誤訊息"
  },
  "cookie": {
    "pos": "n.",
    "en_def": "a small file a website saves to remember your activity",
    "cn_def": "(網站)Cookie;瀏覽紀錄檔"
  },
  "caption": {
    "pos": "n.",
    "en_def": "words on a screen that show what people are saying",
    "cn_def": "字幕;圖說"
  },
  "customise": {
    "pos": "v.",
    "en_def": "to change something to suit your own needs",
    "cn_def": "客製化;自訂"
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something that will last",
    "cn_def": "建立;設立"
  },
  "hack": {
    "pos": "v.",
    "en_def": "to secretly get into someone's computer or account",
    "cn_def": "入侵(電腦);駭入"
  },
  "firewall": {
    "pos": "n.",
    "en_def": "a system that blocks dangerous traffic from the internet",
    "cn_def": "防火牆"
  },
  "regulator": {
    "pos": "n.",
    "en_def": "an official group that makes sure rules are followed",
    "cn_def": "監管機構"
  },
  "prototype": {
    "pos": "n.",
    "en_def": "the first model of a new product, made for testing",
    "cn_def": "原型;樣品"
  },
  "fingerprint": {
    "pos": "n.",
    "en_def": "the pattern of lines on the tip of your finger",
    "cn_def": "指紋"
  },
  "household": {
    "pos": "n.",
    "en_def": "all the people who live together in one home",
    "cn_def": "家庭;家戶"
  },
  "chatbot": {
    "pos": "n.",
    "en_def": "a computer program that talks with people using text or voice",
    "cn_def": "聊天機器人"
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special way of doing something that needs skill",
    "cn_def": "技巧"
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "basic systems like roads, power and internet that a society needs",
    "cn_def": "基礎建設"
  },
  "context": {
    "pos": "n.",
    "en_def": "the situation or information around something that helps explain it",
    "cn_def": "上下文;背景脈絡"
  },
  "fairness": {
    "pos": "n.",
    "en_def": "treating people equally and in the right way",
    "cn_def": "公平"
  },
  "criticism": {
    "pos": "n.",
    "en_def": "comments saying what is wrong with something",
    "cn_def": "批評"
  },
  "processor": {
    "pos": "n.",
    "en_def": "the main part of a computer that does calculations",
    "cn_def": "處理器"
  },
  "warehouse": {
    "pos": "n.",
    "en_def": "a large building where goods are stored",
    "cn_def": "倉庫"
  },
  "applicant": {
    "pos": "n.",
    "en_def": "a person who applies for a job or place",
    "cn_def": "申請人;應徵者"
  },
  "coding": {
    "pos": "n.",
    "en_def": "writing instructions for a computer",
    "cn_def": "寫程式;編碼"
  },
  "dependent": {
    "pos": "adj.",
    "en_def": "needing someone or something to survive or work",
    "cn_def": "依賴的"
  },
  "controversial": {
    "pos": "adj.",
    "en_def": "causing a lot of disagreement",
    "cn_def": "有爭議的"
  },
  "synthetic": {
    "pos": "adj.",
    "en_def": "made artificially, not natural or real",
    "cn_def": "合成的;人造的"
  },
  "subsequent": {
    "pos": "adj.",
    "en_def": "happening after something else",
    "cn_def": "隨後的;後續的"
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on facts, not personal feelings",
    "cn_def": "客觀的"
  },
  "deepfake": {
    "pos": "n.",
    "en_def": "a fake video or voice made by AI that looks real",
    "cn_def": "深偽(影片)"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of many different people or things",
    "cn_def": "多樣性"
  },
  "gig": {
    "pos": "n.",
    "en_def": "a short job or piece of paid work",
    "cn_def": "零工;臨時工作"
  },
  "abundant": {
    "pos": "adj.",
    "en_def": "existing in large amounts",
    "cn_def": "豐富的;大量的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy and saving you time or trouble",
    "cn_def": "方便的"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person is; their name and personal details",
    "cn_def": "身分"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing",
    "cn_def": "草稿"
  },
  "mechanism": {
    "pos": "n.",
    "en_def": "a system or process that does a particular job",
    "cn_def": "機制"
  },
  "limitation": {
    "pos": "n.",
    "en_def": "a weakness or a point beyond which something cannot go",
    "cn_def": "局限;限制"
  }
};

const EXTRA_GLOSSES = {};
