// Topic 5 Subunit 12 Quiz Data: Academic Words 學術單字 5 (outlook – volition)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S12 - Academic Words 學術單字 5 (outlook – volition)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "outlook",
    "pos": "n.",
    "cn_def": "觀點;人生觀",
    "en_def": "a person's general attitude to life",
    "sentence": "Volunteering changed her {{BLANK}} on life, and she now feels thankful for the small things she has.",
    "cn": "當志工改變了她的人生觀,她現在對自己擁有的小事物心懷感激。"
  },
  {
    "word": "overrate",
    "pos": "v.",
    "cn_def": "高估;評價過高",
    "en_def": "to think something is better than it really is",
    "sentence": "Many people {{BLANK}} the value of expensive gadgets, but simple habits like walking often improve mood more.",
    "cn": "許多人高估了昂貴電子產品的價值,但像散步這樣簡單的習慣往往更能改善心情。"
  },
  {
    "word": "paradoxical",
    "pos": "adj.",
    "cn_def": "矛盾的;似非而是的",
    "en_def": "seeming impossible because it combines opposite ideas",
    "sentence": "It seems {{BLANK}}, but taking more breaks can help you finish your work faster, because your brain stays fresh.",
    "cn": "這看起來很矛盾,但多休息反而能幫助你更快完成工作,因為你的大腦能保持清醒。"
  },
  {
    "word": "peripheral",
    "pos": "adj.",
    "cn_def": "次要的;周邊的",
    "en_def": "not as important as the main part",
    "sentence": "Don't waste time on {{BLANK}} details in the reading test, because most questions focus on the main ideas.",
    "cn": "閱讀測驗中不要在次要細節上浪費時間,因為大多數題目都聚焦在主旨上。"
  },
  {
    "word": "predisposed",
    "pos": "adj.",
    "cn_def": "易於……的;有……傾向的",
    "en_def": "likely to behave or suffer in a certain way",
    "sentence": "Some people are {{BLANK}} to anxiety because of their family history, but healthy habits can still help a lot.",
    "cn": "有些人因為家族病史而容易焦慮,但健康的習慣仍然能有很大的幫助。"
  },
  {
    "word": "pronounced",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "very noticeable",
    "sentence": "There was a {{BLANK}} improvement in her mood after she started jogging, and her friends noticed it within a week.",
    "cn": "她開始慢跑之後心情有了明顯的改善,她的朋友們一週內就注意到了。"
  },
  {
    "word": "quantifiable",
    "pos": "adj.",
    "cn_def": "可量化的",
    "en_def": "able to be measured with numbers",
    "sentence": "Happiness is not easily {{BLANK}}, but researchers use surveys to compare how people feel in different countries.",
    "cn": "快樂不容易量化,但研究人員使用問卷調查來比較不同國家人們的感受。"
  },
  {
    "word": "receptive",
    "pos": "adj.",
    "cn_def": "樂於接受的",
    "en_def": "willing to listen to new ideas",
    "sentence": "Students are more {{BLANK}} to advice when they feel respected, so teachers should speak to them kindly.",
    "cn": "學生覺得受到尊重時更樂於接受建議,所以老師應該親切地跟他們說話。"
  },
  {
    "word": "reckon",
    "pos": "v.",
    "cn_def": "認為;估計",
    "en_def": "to think or believe",
    "sentence": "I {{BLANK}} that a short walk would help you relax, so why don't we go to the park after dinner?",
    "cn": "我認為短暫散個步能幫助你放鬆,所以我們晚餐後何不去公園走走?"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "cn_def": "反思;深思",
    "en_def": "to think carefully about something you did",
    "sentence": "At the end of each week, I {{BLANK}} on what went well and what I can do better, and I write my ideas in a notebook.",
    "cn": "每週結束時,我會反思哪些事做得好、哪些可以做得更好,並把想法寫在筆記本裡。"
  },
  {
    "word": "refrain",
    "pos": "v.",
    "cn_def": "克制;避免",
    "en_def": "to stop yourself from doing something",
    "sentence": "Please {{BLANK}} from using your phone during the exam, or the teacher will take your paper away.",
    "cn": "考試期間請避免使用手機,否則老師會把你的考卷收走。"
  },
  {
    "word": "remedial",
    "pos": "adj.",
    "cn_def": "補救的",
    "en_def": "aimed at improving skills that are weak",
    "sentence": "The school offers {{BLANK}} classes after school, and students who fell behind can catch up there.",
    "cn": "學校在放學後提供補救課程,落後的學生可以在那裡趕上進度。"
  },
  {
    "word": "restraint",
    "pos": "n.",
    "cn_def": "克制;自制",
    "en_def": "calm control over your feelings or actions",
    "sentence": "The referee showed great {{BLANK}} when the angry fans shouted at him, and he calmly continued the game.",
    "cn": "生氣的球迷對裁判大吼時,他表現出極大的克制,並冷靜地繼續比賽。"
  },
  {
    "word": "rigidity",
    "pos": "n.",
    "cn_def": "僵化;死板",
    "en_def": "being unwilling to change or adapt",
    "sentence": "The {{BLANK}} of the old timetable caused stress, so the school made it more flexible for students with long journeys.",
    "cn": "舊課表的僵化造成了壓力,所以學校讓它對通勤時間長的學生更有彈性。"
  },
  {
    "word": "scrutinise",
    "pos": "v.",
    "cn_def": "仔細檢查;審視",
    "en_def": "to examine something very carefully",
    "sentence": "Before signing the contract, my father {{BLANK}} every line, because he did not want any unpleasant surprises later.",
    "cn": "簽約前,我爸爸仔細檢查了每一行字,因為他不想之後有任何不愉快的意外。"
  },
  {
    "word": "sensible",
    "pos": "adj.",
    "cn_def": "明智的;合理的",
    "en_def": "reasonable and practical",
    "sentence": "It is {{BLANK}} to plan your revision early, because you will feel calmer and more prepared on the day of the exam.",
    "cn": "提早規劃複習是明智的,因為考試當天你會覺得更冷靜、更有準備。"
  },
  {
    "word": "shortcoming",
    "pos": "n.",
    "cn_def": "缺點;短處",
    "en_def": "a weakness or fault",
    "sentence": "Everyone has {{BLANK}}, but accepting them is the first step to improving yourself and feeling less stressed.",
    "cn": "每個人都有缺點,但接受它們是改善自己並減輕壓力的第一步。"
  },
  {
    "word": "signify",
    "pos": "v.",
    "cn_def": "表示;意味著",
    "en_def": "to be a sign of something",
    "sentence": "A sudden loss of interest in hobbies may {{BLANK}} that a friend is stressed, so it is kind to ask how they are.",
    "cn": "突然對嗜好失去興趣可能意味著朋友有壓力,所以關心問候他們近況是很貼心的。"
  },
  {
    "word": "subdue",
    "pos": "v.",
    "cn_def": "抑制;克制",
    "en_def": "to bring a strong feeling under control",
    "sentence": "She took a few deep breaths to {{BLANK}} her anger, and then she explained calmly why she was upset.",
    "cn": "她做了幾次深呼吸來抑制怒氣,然後冷靜地解釋她為什麼不高興。"
  },
  {
    "word": "substantiate",
    "pos": "v.",
    "cn_def": "證實",
    "en_def": "to prove something with evidence",
    "sentence": "You must {{BLANK}} your claims with examples in your essay, or the examiner will give you a lower score.",
    "cn": "你必須在文章中用例子證實你的主張,否則閱卷老師會給你較低的分數。"
  },
  {
    "word": "tedious",
    "pos": "adj.",
    "cn_def": "冗長乏味的",
    "en_def": "long and boring",
    "sentence": "Filling in the forms was {{BLANK}}, but my sister finished them quickly because she wanted to start her new job.",
    "cn": "填寫那些表格很冗長乏味,但我姊姊很快就填完了,因為她想趕快開始新工作。"
  },
  {
    "word": "tenacity",
    "pos": "n.",
    "cn_def": "堅韌;頑強",
    "en_def": "the quality of not giving up easily",
    "sentence": "The young scientist's {{BLANK}} paid off, because after many failed experiments she finally found the answer.",
    "cn": "那位年輕科學家的堅持不懈得到了回報,因為在許多次失敗的實驗後她終於找到了答案。"
  },
  {
    "word": "unequivocal",
    "pos": "adj.",
    "cn_def": "明確的;毫不含糊的",
    "en_def": "completely clear, with no doubt",
    "sentence": "The doctor's advice was {{BLANK}}, so my uncle stopped smoking and started exercising the very next day.",
    "cn": "醫生的建議毫不含糊,所以我叔叔隔天就戒菸並開始運動了。"
  },
  {
    "word": "variance",
    "pos": "n.",
    "cn_def": "差異;變異",
    "en_def": "the amount by which things differ",
    "sentence": "There is a large {{BLANK}} in how much sleep students get, and those who sleep more usually get better grades.",
    "cn": "學生的睡眠時數有很大的差異,而睡得多的人通常成績比較好。"
  },
  {
    "word": "volition",
    "pos": "n.",
    "cn_def": "自願;意志",
    "en_def": "the power to choose for yourself",
    "sentence": "She joined the extra classes of her own {{BLANK}}, and nobody had to tell her to study harder.",
    "cn": "她是出於自己的意願參加額外課程的,沒有人需要叫她更用功。"
  }
];

const MCQS = [
  {
    "q": "Volunteering changed her _____ on life, and she now feels thankful for the small things she has.",
    "options": [
      "outlook",
      "perfectionism",
      "analogy",
      "frustration"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many people _____ the value of expensive gadgets, but simple habits like walking often improve mood more.",
    "options": [
      "precipitate",
      "pose",
      "second-guess",
      "overrate"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "It seems _____, but taking more breaks can help you finish your work faster, because your brain stays fresh.",
    "options": [
      "foremost",
      "paradoxical",
      "upset",
      "hardworking"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Don't waste time on _____ details in the reading test, because most questions focus on the main ideas.",
    "options": [
      "exhilarating",
      "outgoing",
      "peripheral",
      "ingrained"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Some people are _____ to anxiety because of their family history, but healthy habits can still help a lot.",
    "options": [
      "predisposed",
      "incessant",
      "unfounded",
      "perpetual"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "There was a _____ improvement in her mood after she started jogging, and her friends noticed it within a week.",
    "options": [
      "overt",
      "resolute",
      "pronounced",
      "unpredictable"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Happiness is not easily _____, but researchers use surveys to compare how people feel in different countries.",
    "options": [
      "demanding",
      "quantifiable",
      "reminiscent",
      "jittery"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Students are more _____ to advice when they feel respected, so teachers should speak to them kindly.",
    "options": [
      "monotonous",
      "erroneous",
      "restless",
      "receptive"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "I _____ that a short walk would help you relax, so why don't we go to the park after dinner?",
    "options": [
      "negate",
      "surmount",
      "reckon",
      "bewilder"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "At the end of each week, I _____ on what went well and what I can do better, and I write my ideas in a notebook.",
    "options": [
      "deprive",
      "reflect",
      "dawdle",
      "delay"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Please _____ from using your phone during the exam, or the teacher will take your paper away.",
    "options": [
      "reconsider",
      "overwork",
      "fortify",
      "refrain"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The school offers _____ classes after school, and students who fell behind can catch up there.",
    "options": [
      "remedial",
      "oblivious",
      "habitual",
      "preoccupied"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The referee showed great _____ when the angry fans shouted at him, and he calmly continued the game.",
    "options": [
      "gamble",
      "restraint",
      "groupthink",
      "avoidance"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The _____ of the old timetable caused stress, so the school made it more flexible for students with long journeys.",
    "options": [
      "journaling",
      "perseverance",
      "progress",
      "rigidity"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Before signing the contract, my father _____ every line, because he did not want any unpleasant surprises later.",
    "options": [
      "cram",
      "tempt",
      "scrutinise",
      "disregard"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "It is _____ to plan your revision early, because you will feel calmer and more prepared on the day of the exam.",
    "options": [
      "sensible",
      "burdensome",
      "erroneous",
      "restless"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Everyone has _____, but accepting them is the first step to improving yourself and feeling less stressed.",
    "options": [
      "overconfidence",
      "downtime",
      "shortcoming",
      "lapse"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "A sudden loss of interest in hobbies may _____ that a friend is stressed, so it is kind to ask how they are.",
    "options": [
      "signify",
      "evoke",
      "reassure",
      "soothe"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "She took a few deep breaths to _____ her anger, and then she explained calmly why she was upset.",
    "options": [
      "tempt",
      "subdue",
      "enlighten",
      "intervene"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "You must _____ your claims with examples in your essay, or the examiner will give you a lower score.",
    "options": [
      "detract",
      "mislead",
      "relinquish",
      "substantiate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Filling in the forms was _____, but my sister finished them quickly because she wanted to start her new job.",
    "options": [
      "utmost",
      "attentive",
      "tedious",
      "fervent"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The young scientist's _____ paid off, because after many failed experiments she finally found the answer.",
    "options": [
      "tenacity",
      "migraine",
      "sympathy",
      "obedience"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The doctor's advice was _____, so my uncle stopped smoking and started exercising the very next day.",
    "options": [
      "undue",
      "unequivocal",
      "tense",
      "inclined"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "There is a large _____ in how much sleep students get, and those who sleep more usually get better grades.",
    "options": [
      "streak",
      "boredom",
      "cohesion",
      "variance"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "She joined the extra classes of her own _____, and nobody had to tell her to study harder.",
    "options": [
      "volition",
      "vitality",
      "goal",
      "self-control"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "outlook": {
    "pos": "n.",
    "en_def": "a person's general attitude to life",
    "cn_def": "觀點;人生觀"
  },
  "overrate": {
    "pos": "v.",
    "en_def": "to think something is better than it really is",
    "cn_def": "高估;評價過高"
  },
  "paradoxical": {
    "pos": "adj.",
    "en_def": "seeming impossible because it combines opposite ideas",
    "cn_def": "矛盾的;似非而是的"
  },
  "peripheral": {
    "pos": "adj.",
    "en_def": "not as important as the main part",
    "cn_def": "次要的;周邊的"
  },
  "predisposed": {
    "pos": "adj.",
    "en_def": "likely to behave or suffer in a certain way",
    "cn_def": "易於……的;有……傾向的"
  },
  "pronounced": {
    "pos": "adj.",
    "en_def": "very noticeable",
    "cn_def": "明顯的"
  },
  "quantifiable": {
    "pos": "adj.",
    "en_def": "able to be measured with numbers",
    "cn_def": "可量化的"
  },
  "receptive": {
    "pos": "adj.",
    "en_def": "willing to listen to new ideas",
    "cn_def": "樂於接受的"
  },
  "reckon": {
    "pos": "v.",
    "en_def": "to think or believe",
    "cn_def": "認為;估計"
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to think carefully about something you did",
    "cn_def": "反思;深思"
  },
  "refrain": {
    "pos": "v.",
    "en_def": "to stop yourself from doing something",
    "cn_def": "克制;避免"
  },
  "remedial": {
    "pos": "adj.",
    "en_def": "aimed at improving skills that are weak",
    "cn_def": "補救的"
  },
  "restraint": {
    "pos": "n.",
    "en_def": "calm control over your feelings or actions",
    "cn_def": "克制;自制"
  },
  "rigidity": {
    "pos": "n.",
    "en_def": "being unwilling to change or adapt",
    "cn_def": "僵化;死板"
  },
  "scrutinise": {
    "pos": "v.",
    "en_def": "to examine something very carefully",
    "cn_def": "仔細檢查;審視"
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "reasonable and practical",
    "cn_def": "明智的;合理的"
  },
  "shortcoming": {
    "pos": "n.",
    "en_def": "a weakness or fault",
    "cn_def": "缺點;短處"
  },
  "signify": {
    "pos": "v.",
    "en_def": "to be a sign of something",
    "cn_def": "表示;意味著"
  },
  "subdue": {
    "pos": "v.",
    "en_def": "to bring a strong feeling under control",
    "cn_def": "抑制;克制"
  },
  "substantiate": {
    "pos": "v.",
    "en_def": "to prove something with evidence",
    "cn_def": "證實"
  },
  "tedious": {
    "pos": "adj.",
    "en_def": "long and boring",
    "cn_def": "冗長乏味的"
  },
  "tenacity": {
    "pos": "n.",
    "en_def": "the quality of not giving up easily",
    "cn_def": "堅韌;頑強"
  },
  "unequivocal": {
    "pos": "adj.",
    "en_def": "completely clear, with no doubt",
    "cn_def": "明確的;毫不含糊的"
  },
  "variance": {
    "pos": "n.",
    "en_def": "the amount by which things differ",
    "cn_def": "差異;變異"
  },
  "volition": {
    "pos": "n.",
    "en_def": "the power to choose for yourself",
    "cn_def": "自願;意志"
  },
  "perfectionism": {
    "pos": "n.",
    "en_def": "the need to make everything perfect",
    "cn_def": "完美主義"
  },
  "analogy": {
    "pos": "n.",
    "en_def": "a comparison that explains one thing by showing how it is like another",
    "cn_def": "類比"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do something",
    "cn_def": "挫折感"
  },
  "precipitate": {
    "pos": "v.",
    "en_def": "to make something bad happen suddenly or sooner",
    "cn_def": "促成;使突然發生"
  },
  "pose": {
    "pos": "v.",
    "en_def": "to create a problem or question",
    "cn_def": "造成;提出"
  },
  "second-guess": {
    "pos": "v.",
    "en_def": "to doubt a decision after you have made it",
    "cn_def": "事後懷疑;反覆猜疑"
  },
  "foremost": {
    "pos": "adj.",
    "en_def": "most important",
    "cn_def": "最重要的;首要的"
  },
  "upset": {
    "pos": "adj.",
    "en_def": "unhappy or worried because something bad happened",
    "cn_def": "難過的;心煩的"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "putting a lot of effort into work",
    "cn_def": "勤奮的"
  },
  "exhilarating": {
    "pos": "adj.",
    "en_def": "very exciting and making you feel happy",
    "cn_def": "令人振奮的"
  },
  "outgoing": {
    "pos": "adj.",
    "en_def": "friendly and liking to meet people",
    "cn_def": "外向的;友善的"
  },
  "ingrained": {
    "pos": "adj.",
    "en_def": "so fixed that it is hard to change",
    "cn_def": "根深蒂固的"
  },
  "incessant": {
    "pos": "adj.",
    "en_def": "never stopping",
    "cn_def": "不停的;持續不斷的"
  },
  "unfounded": {
    "pos": "adj.",
    "en_def": "not based on facts",
    "cn_def": "毫無根據的"
  },
  "perpetual": {
    "pos": "adj.",
    "en_def": "never ending; happening again and again",
    "cn_def": "永久的;不斷的"
  },
  "overt": {
    "pos": "adj.",
    "en_def": "done openly, not secretly",
    "cn_def": "公開的;明顯的"
  },
  "resolute": {
    "pos": "adj.",
    "en_def": "determined and not willing to change",
    "cn_def": "堅決的;果斷的"
  },
  "unpredictable": {
    "pos": "adj.",
    "en_def": "changing in a way that is hard to guess",
    "cn_def": "難以預測的"
  },
  "demanding": {
    "pos": "adj.",
    "en_def": "needing a lot of time, effort or skill",
    "cn_def": "要求高的;費力的"
  },
  "reminiscent": {
    "pos": "adj.",
    "en_def": "making you think of something in the past",
    "cn_def": "使人聯想起……的"
  },
  "jittery": {
    "pos": "adj.",
    "en_def": "nervous and shaky",
    "cn_def": "緊張不安的"
  },
  "monotonous": {
    "pos": "adj.",
    "en_def": "boring because it never changes",
    "cn_def": "單調乏味的"
  },
  "erroneous": {
    "pos": "adj.",
    "en_def": "wrong; not correct",
    "cn_def": "錯誤的"
  },
  "restless": {
    "pos": "adj.",
    "en_def": "unable to stay still or relax",
    "cn_def": "焦躁不安的"
  },
  "negate": {
    "pos": "v.",
    "en_def": "to cancel the effect of something",
    "cn_def": "抵消;使無效"
  },
  "surmount": {
    "pos": "v.",
    "en_def": "to deal with a difficulty successfully",
    "cn_def": "克服"
  },
  "bewilder": {
    "pos": "v.",
    "en_def": "to make someone very confused",
    "cn_def": "使迷惑;使不知所措"
  },
  "deprive": {
    "pos": "v.",
    "en_def": "to take something important away from someone",
    "cn_def": "剝奪"
  },
  "dawdle": {
    "pos": "v.",
    "en_def": "to move or act very slowly",
    "cn_def": "磨蹭;拖拖拉拉"
  },
  "delay": {
    "pos": "v.",
    "en_def": "to make something happen later than planned",
    "cn_def": "延遲;耽擱"
  },
  "reconsider": {
    "pos": "v.",
    "en_def": "to think again about a decision",
    "cn_def": "重新考慮"
  },
  "overwork": {
    "pos": "v.",
    "en_def": "to work too hard or too long",
    "cn_def": "過度工作"
  },
  "fortify": {
    "pos": "v.",
    "en_def": "to make something stronger",
    "cn_def": "強化;加強"
  },
  "oblivious": {
    "pos": "adj.",
    "en_def": "not aware of something",
    "cn_def": "未察覺的;渾然不覺的"
  },
  "habitual": {
    "pos": "adj.",
    "en_def": "done often or regularly as a habit",
    "cn_def": "習慣性的"
  },
  "preoccupied": {
    "pos": "adj.",
    "en_def": "thinking so much about something that you ignore other things",
    "cn_def": "心事重重的;全神貫注於"
  },
  "gamble": {
    "pos": "n.",
    "en_def": "a risky action that may succeed or fail",
    "cn_def": "冒險;賭注"
  },
  "groupthink": {
    "pos": "n.",
    "en_def": "when a group agrees too quickly and ignores other ideas",
    "cn_def": "團體迷思"
  },
  "avoidance": {
    "pos": "n.",
    "en_def": "staying away from something you do not want to face",
    "cn_def": "逃避;迴避"
  },
  "journaling": {
    "pos": "n.",
    "en_def": "writing about your thoughts and feelings regularly",
    "cn_def": "寫日記;寫心情筆記"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "continuing to try even when progress is slow",
    "cn_def": "毅力;堅持不懈"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement towards a goal or improvement",
    "cn_def": "進步;進展"
  },
  "cram": {
    "pos": "v.",
    "en_def": "to study a lot in a short time before an exam",
    "cn_def": "臨時抱佛腳;死記硬背"
  },
  "tempt": {
    "pos": "v.",
    "en_def": "to make someone want to do something, often something wrong",
    "cn_def": "引誘;吸引"
  },
  "disregard": {
    "pos": "v.",
    "en_def": "to ignore something",
    "cn_def": "忽視;不理會"
  },
  "burdensome": {
    "pos": "adj.",
    "en_def": "difficult to deal with; heavy",
    "cn_def": "繁重的;累贅的"
  },
  "overconfidence": {
    "pos": "n.",
    "en_def": "too much belief in your own ability",
    "cn_def": "過度自信"
  },
  "downtime": {
    "pos": "n.",
    "en_def": "time when you rest and do not work",
    "cn_def": "休息時間;空閒時間"
  },
  "lapse": {
    "pos": "n.",
    "en_def": "a short time when you fail to do something well",
    "cn_def": "失誤;疏忽"
  },
  "evoke": {
    "pos": "v.",
    "en_def": "to bring a feeling or memory into your mind",
    "cn_def": "喚起;引起"
  },
  "reassure": {
    "pos": "v.",
    "en_def": "to make someone feel less worried",
    "cn_def": "使安心"
  },
  "soothe": {
    "pos": "v.",
    "en_def": "to make someone calm or less upset",
    "cn_def": "撫慰;使平靜"
  },
  "enlighten": {
    "pos": "v.",
    "en_def": "to give someone more knowledge or understanding",
    "cn_def": "啟發;使明白"
  },
  "intervene": {
    "pos": "v.",
    "en_def": "to get involved to stop or change a situation",
    "cn_def": "介入;干預"
  },
  "detract": {
    "pos": "v.",
    "en_def": "to make something seem less good",
    "cn_def": "減損;貶低"
  },
  "mislead": {
    "pos": "v.",
    "en_def": "to make someone believe something false",
    "cn_def": "誤導"
  },
  "relinquish": {
    "pos": "v.",
    "en_def": "to give up control or a position",
    "cn_def": "放棄;讓出"
  },
  "utmost": {
    "pos": "adj.",
    "en_def": "the greatest possible",
    "cn_def": "最大的;極度的"
  },
  "attentive": {
    "pos": "adj.",
    "en_def": "listening or watching carefully",
    "cn_def": "專心的;留意的"
  },
  "fervent": {
    "pos": "adj.",
    "en_def": "having very strong feelings about something",
    "cn_def": "熱烈的;熱切的"
  },
  "migraine": {
    "pos": "n.",
    "en_def": "a very bad headache that can make you feel sick",
    "cn_def": "偏頭痛"
  },
  "sympathy": {
    "pos": "n.",
    "en_def": "feeling sorry for someone who is in trouble",
    "cn_def": "同情"
  },
  "obedience": {
    "pos": "n.",
    "en_def": "doing what you are told to do",
    "cn_def": "服從"
  },
  "undue": {
    "pos": "adj.",
    "en_def": "more than is reasonable or necessary",
    "cn_def": "過度的;不適當的"
  },
  "tense": {
    "pos": "adj.",
    "en_def": "unable to relax because you are worried",
    "cn_def": "緊繃的"
  },
  "inclined": {
    "pos": "adj.",
    "en_def": "likely to do something or behave in a certain way",
    "cn_def": "傾向於……的"
  },
  "streak": {
    "pos": "n.",
    "en_def": "a series of successes or days in a row",
    "cn_def": "連續紀錄"
  },
  "boredom": {
    "pos": "n.",
    "en_def": "the feeling of being tired because nothing is interesting",
    "cn_def": "無聊;厭倦"
  },
  "cohesion": {
    "pos": "n.",
    "en_def": "the state of a group being united",
    "cn_def": "凝聚力"
  },
  "vitality": {
    "pos": "n.",
    "en_def": "energy and liveliness",
    "cn_def": "活力"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you want to achieve",
    "cn_def": "目標"
  },
  "self-control": {
    "pos": "n.",
    "en_def": "the ability to control your feelings and actions",
    "cn_def": "自制力"
  }
};

const EXTRA_GLOSSES = {};
