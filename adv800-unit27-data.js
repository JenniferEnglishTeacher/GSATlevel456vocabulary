// Unit 27 Quiz Data: power – project
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U27 - power – project",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "power",
    "pos": "n.",
    "cn_def": "力量，電力",
    "en_def": "electricity",
    "sentence": "The {{BLANK}} went out during the storm.",
    "cn": "暴風雨期間停電了。"
  },
  {
    "word": "powder",
    "pos": "n.",
    "cn_def": "粉末",
    "en_def": "something dry in very small pieces, like flour",
    "sentence": "She added cocoa {{BLANK}} to the recipe.",
    "cn": "她在食譜裡加了可可粉。"
  },
  {
    "word": "praise",
    "pos": "v.",
    "cn_def": "讚美，表揚",
    "en_def": "to say good things about someone or something",
    "sentence": "The teacher {{BLANK}} the students for their hard work.",
    "cn": "老師表揚了學生們的努力。"
  },
  {
    "word": "precious",
    "pos": "adj.",
    "cn_def": "珍貴的，寶貴的",
    "en_def": "very special and important to you; worth a lot",
    "sentence": "This ring is very {{BLANK}} to her.",
    "cn": "這枚戒指對她來說非常珍貴。"
  },
  {
    "word": "president",
    "pos": "n.",
    "cn_def": "總統，主席",
    "en_def": "the leader of a country or a company",
    "sentence": "The {{BLANK}} gave a speech at the ceremony.",
    "cn": "總統在儀式上發表了演講。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力，壓迫",
    "en_def": "a feeling of worry because you must do a lot or do well",
    "sentence": "She felt a lot of {{BLANK}} to succeed.",
    "cn": "她感到很大的成功壓力。"
  },
  {
    "word": "priest",
    "pos": "n.",
    "cn_def": "神父，牧師",
    "en_def": "a person who leads people in prayer in a church",
    "sentence": "The {{BLANK}} led the congregation in prayer.",
    "cn": "神父帶領會眾祈禱。"
  },
  {
    "word": "primary",
    "pos": "adj.",
    "cn_def": "主要的，初級的",
    "en_def": "main; most important",
    "sentence": "Her {{BLANK}} concern is her child's safety.",
    "cn": "她主要關心的是孩子的安全。"
  },
  {
    "word": "prince",
    "pos": "n.",
    "cn_def": "王子",
    "en_def": "the son of a king or queen",
    "sentence": "The {{BLANK}} will inherit the throne.",
    "cn": "王子將繼承王位。"
  },
  {
    "word": "princess",
    "pos": "n.",
    "cn_def": "公主",
    "en_def": "the daughter of a king or queen",
    "sentence": "The {{BLANK}} wore a beautiful gown.",
    "cn": "公主穿著美麗的禮服。"
  },
  {
    "word": "principal",
    "pos": "n.",
    "cn_def": "校長",
    "en_def": "the head of a school",
    "sentence": "The {{BLANK}} of the school is very strict.",
    "cn": "學校的校長非常嚴格。"
  },
  {
    "word": "principle",
    "pos": "n.",
    "cn_def": "原則，信條",
    "en_def": "a rule or idea about what is right that you live by",
    "sentence": "He lives by strong moral {{BLANK}}.",
    "cn": "他遵循強烈的道德原則生活。"
  },
  {
    "word": "print",
    "pos": "v.",
    "cn_def": "打印，印刷",
    "en_def": "to put words or pictures on paper with a machine",
    "sentence": "She needs to {{BLANK}} the documents.",
    "cn": "她需要打印文件。"
  },
  {
    "word": "printer",
    "pos": "n.",
    "cn_def": "印表機",
    "en_def": "a machine that puts words and pictures from a computer on paper",
    "sentence": "The {{BLANK}} is out of ink.",
    "cn": "印表機沒墨水了。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的，私密的",
    "en_def": "only for one person or a small group; not public",
    "sentence": "They had a {{BLANK}} conversation.",
    "cn": "他們進行了一次私密的對話。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "生產，製造",
    "en_def": "to make or grow something",
    "sentence": "The factory {{BLANK}} thousands of cars each year.",
    "cn": "工廠每年生產數千輛汽車。"
  },
  {
    "word": "production",
    "pos": "n.",
    "cn_def": "生產，製作",
    "en_def": "the work of making something, like cars or a film",
    "sentence": "The film is currently in {{BLANK}}.",
    "cn": "這部電影目前正在製作中。"
  },
  {
    "word": "professor",
    "pos": "n.",
    "cn_def": "教授",
    "en_def": "a teacher at a university",
    "sentence": "She is a {{BLANK}} of biology.",
    "cn": "她是一位生物學教授。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進步，進展",
    "en_def": "getting better or moving forward",
    "sentence": "The project is making good {{BLANK}}.",
    "cn": "專案進展順利。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案，計劃",
    "en_def": "a big piece of work that is planned carefully",
    "sentence": "They are working on a new {{BLANK}}.",
    "cn": "他們正在進行一個新專案。"
  }
];

const MCQS = [
  {
    "q": "The storm cut off the ______. We had no lights for two days.",
    "options": [
      "powder",
      "pressure",
      "power",
      "progress"
    ],
    "answer": 2,
    "cn": "暴風雨期間停電了。",
    "vocabIndex": 0
  },
  {
    "q": "Mix the milk ______ with warm water for the baby.",
    "options": [
      "power",
      "powder",
      "pressure",
      "progress"
    ],
    "answer": 1,
    "cn": "她在食譜裡加了可可粉。",
    "vocabIndex": 1
  },
  {
    "q": "The teacher ______ Amy for her good work. She said, \"Well done!\"",
    "options": [
      "praised",
      "printed",
      "produced",
      "punished"
    ],
    "answer": 0,
    "cn": "老師表揚了學生們的努力。",
    "vocabIndex": 2
  },
  {
    "q": "Time is ______. Don't waste it.",
    "options": [
      "private",
      "primary",
      "plain",
      "precious"
    ],
    "answer": 3,
    "cn": "這枚戒指對她來說非常珍貴。",
    "vocabIndex": 3
  },
  {
    "q": "The ______ of the U.S.A. lives in the White House.",
    "options": [
      "priest",
      "prince",
      "president",
      "professor"
    ],
    "answer": 2,
    "cn": "總統在儀式上發表了演講。",
    "vocabIndex": 4
  },
  {
    "q": "Students are under a lot of ______ before big exams. They worry and can't sleep.",
    "options": [
      "powder",
      "progress",
      "project",
      "pressure"
    ],
    "answer": 3,
    "cn": "她感到很大的成功壓力。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ spoke to the people in the church on Sunday morning.",
    "options": [
      "priest",
      "prince",
      "printer",
      "professor"
    ],
    "answer": 0,
    "cn": "神父帶領會眾祈禱。",
    "vocabIndex": 6
  },
  {
    "q": "My ______ goal this year is to pass the exam. Nothing is more important.",
    "options": [
      "private",
      "primary",
      "precious",
      "plain"
    ],
    "answer": 1,
    "cn": "她主要關心的是孩子的安全。",
    "vocabIndex": 7
  },
  {
    "q": "The king's son is the ______. He will be the king one day.",
    "options": [
      "princess",
      "priest",
      "prince",
      "president"
    ],
    "answer": 2,
    "cn": "王子將繼承王位。",
    "vocabIndex": 8
  },
  {
    "q": "The king's daughter is the ______. She lives in the castle.",
    "options": [
      "prince",
      "priest",
      "professor",
      "princess"
    ],
    "answer": 3,
    "cn": "公主穿著美麗的禮服。",
    "vocabIndex": 9
  },
  {
    "q": "The ______ of our school gave a speech to all the teachers and students.",
    "options": [
      "principle",
      "principal",
      "printer",
      "project"
    ],
    "answer": 1,
    "cn": "學校的校長非常嚴格。",
    "vocabIndex": 10
  },
  {
    "q": "He is a man of strong ______. He never lies or cheats.",
    "options": [
      "principles",
      "printers",
      "projects",
      "powders"
    ],
    "answer": 0,
    "cn": "他遵循強烈的道德原則生活。",
    "vocabIndex": 11
  },
  {
    "q": "Please ______ ten copies of this report for the meeting.",
    "options": [
      "praise",
      "print",
      "produce",
      "punish"
    ],
    "answer": 1,
    "cn": "她需要打印文件。",
    "vocabIndex": 12
  },
  {
    "q": "The ______ is out of paper, so I can't print my homework.",
    "options": [
      "principal",
      "priest",
      "president",
      "printer"
    ],
    "answer": 3,
    "cn": "印表機沒墨水了。",
    "vocabIndex": 13
  },
  {
    "q": "This is a ______ room. Only family members can come in.",
    "options": [
      "precious",
      "primary",
      "private",
      "positive"
    ],
    "answer": 2,
    "cn": "他們進行了一次私密的對話。",
    "vocabIndex": 14
  },
  {
    "q": "This factory ______ five hundred cars a day.",
    "options": [
      "produces",
      "praises",
      "prints",
      "punishes"
    ],
    "answer": 0,
    "cn": "工廠每年生產數千輛汽車。",
    "vocabIndex": 15
  },
  {
    "q": "The ______ of the new phone will begin next month. The factory is ready.",
    "options": [
      "pressure",
      "powder",
      "production",
      "principal"
    ],
    "answer": 2,
    "cn": "這部電影目前正在製作中。",
    "vocabIndex": 16
  },
  {
    "q": "Dr. Lin is a ______ at National Taiwan University. He teaches physics there.",
    "options": [
      "priest",
      "prince",
      "printer",
      "professor"
    ],
    "answer": 3,
    "cn": "她是一位生物學教授。",
    "vocabIndex": 17
  },
  {
    "q": "Amy is making good ______ in English. Her grades are getting better.",
    "options": [
      "powder",
      "progress",
      "pressure",
      "power"
    ],
    "answer": 1,
    "cn": "專案進展順利。",
    "vocabIndex": 18
  },
  {
    "q": "Our group is working on a science ______ about plants. We must finish it by Friday.",
    "options": [
      "project",
      "powder",
      "pressure",
      "prince"
    ],
    "answer": 0,
    "cn": "他們正在進行一個新專案。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "powder": {
    "pos": "n.",
    "en_def": "something dry in very small pieces, like flour",
    "cn_def": "粉末"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of worry because you must do a lot or do well",
    "cn_def": "壓力，壓迫"
  },
  "power": {
    "pos": "n.",
    "en_def": "electricity",
    "cn_def": "力量，電力"
  },
  "progress": {
    "pos": "n.",
    "en_def": "getting better or moving forward",
    "cn_def": "進步，進展"
  },
  "praised": {
    "pos": "v.",
    "en_def": "to say good things about someone or something",
    "cn_def": "讚美，表揚"
  },
  "printed": {
    "pos": "v.",
    "en_def": "to put words or pictures on paper with a machine",
    "cn_def": "打印，印刷"
  },
  "produced": {
    "pos": "v.",
    "en_def": "to make or grow something",
    "cn_def": "生產，製造"
  },
  "punished": {
    "pos": "v.",
    "en_def": "to make someone suffer because they did something wrong",
    "cn_def": "懲罰，處罰"
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or a small group; not public",
    "cn_def": "私人的，私密的"
  },
  "primary": {
    "pos": "adj.",
    "en_def": "main; most important",
    "cn_def": "主要的，初級的"
  },
  "plain": {
    "pos": "adj.",
    "en_def": "simple, with no pattern or decoration",
    "cn_def": "樸素的，平凡的"
  },
  "precious": {
    "pos": "adj.",
    "en_def": "very special and important to you; worth a lot",
    "cn_def": "珍貴的，寶貴的"
  },
  "priest": {
    "pos": "n.",
    "en_def": "a person who leads people in prayer in a church",
    "cn_def": "神父，牧師"
  },
  "prince": {
    "pos": "n.",
    "en_def": "the son of a king or queen",
    "cn_def": "王子"
  },
  "president": {
    "pos": "n.",
    "en_def": "the leader of a country or a company",
    "cn_def": "總統，主席"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a teacher at a university",
    "cn_def": "教授"
  },
  "project": {
    "pos": "n.",
    "en_def": "a big piece of work that is planned carefully",
    "cn_def": "專案，計劃"
  },
  "printer": {
    "pos": "n.",
    "en_def": "a machine that puts words and pictures from a computer on paper",
    "cn_def": "印表機"
  },
  "princess": {
    "pos": "n.",
    "en_def": "the daughter of a king or queen",
    "cn_def": "公主"
  },
  "principle": {
    "pos": "n.",
    "en_def": "a rule or idea about what is right that you live by",
    "cn_def": "原則，信條"
  },
  "principal": {
    "pos": "n.",
    "en_def": "the head of a school",
    "cn_def": "校長"
  },
  "principles": {
    "pos": "n.",
    "en_def": "a rule or idea about what is right that you live by",
    "cn_def": "原則，信條"
  },
  "printers": {
    "pos": "n.",
    "en_def": "a machine that puts words and pictures from a computer on paper",
    "cn_def": "印表機"
  },
  "projects": {
    "pos": "n.",
    "en_def": "a big piece of work that is planned carefully",
    "cn_def": "專案，計劃"
  },
  "powders": {
    "pos": "n.",
    "en_def": "something dry in very small pieces, like flour",
    "cn_def": "粉末"
  },
  "praise": {
    "pos": "v.",
    "en_def": "to say good things about someone or something",
    "cn_def": "讚美，表揚"
  },
  "print": {
    "pos": "v.",
    "en_def": "to put words or pictures on paper with a machine",
    "cn_def": "打印，印刷"
  },
  "produce": {
    "pos": "v.",
    "en_def": "to make or grow something",
    "cn_def": "生產，製造"
  },
  "punish": {
    "pos": "v.",
    "en_def": "to make someone suffer because they did something wrong",
    "cn_def": "懲罰，處罰"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "thinking about the good side of things",
    "cn_def": "積極的，正面的"
  },
  "produces": {
    "pos": "v.",
    "en_def": "to make or grow something",
    "cn_def": "生產，製造"
  },
  "praises": {
    "pos": "v.",
    "en_def": "to say good things about someone or something",
    "cn_def": "讚美，表揚"
  },
  "prints": {
    "pos": "v.",
    "en_def": "to put words or pictures on paper with a machine",
    "cn_def": "打印，印刷"
  },
  "punishes": {
    "pos": "v.",
    "en_def": "to make someone suffer because they did something wrong",
    "cn_def": "懲罰，處罰"
  },
  "production": {
    "pos": "n.",
    "en_def": "the work of making something, like cars or a film",
    "cn_def": "生產，製作"
  }
};

const EXTRA_GLOSSES = {};
