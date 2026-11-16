// Topic 6 Subunit 6 Quiz Data: Gifted, Mixed-Ability & Inclusive Education 資優、混合能力與融合教育
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S06 - Gifted, Mixed-Ability & Inclusive Education 資優、混合能力與融合教育",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "gifted",
    "pos": "adj.",
    "cn_def": "有天賦的；資優的",
    "en_def": "having much greater natural ability than most people",
    "sentence": "The school runs a special class for {{BLANK}} children, but it also tries to keep them with friends their own age.",
    "cn": "學校為資優兒童開設特別班，但也盡量讓他們和同齡朋友待在一起。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的",
    "en_def": "having a natural ability to do something well",
    "sentence": "Many {{BLANK}} young musicians practise for hours every day, so they have little free time for other hobbies.",
    "cn": "許多有才華的年輕音樂家每天練習好幾個小時，所以很少有空從事其他嗜好。"
  },
  {
    "word": "prodigy",
    "pos": "n.",
    "cn_def": "神童",
    "en_def": "a young person with extraordinary ability",
    "sentence": "The chess {{BLANK}} beat several adult players at the age of eight, and newspapers wrote stories about him.",
    "cn": "這位西洋棋神童八歲就打敗了好幾位成人棋手，報紙紛紛報導他。"
  },
  {
    "word": "precocious",
    "pos": "adj.",
    "cn_def": "早熟的",
    "en_def": "developing skills much earlier than usual",
    "sentence": "She was a {{BLANK}} reader who read adult novels at seven, but she sometimes felt lonely with classmates.",
    "cn": "她是個閱讀能力早熟的孩子，七歲就讀成人小說，但和同學相處時有時會感到孤單。"
  },
  {
    "word": "genius",
    "pos": "n.",
    "cn_def": "天才",
    "en_def": "a person with extremely high intelligence or skill",
    "sentence": "People called him a {{BLANK}} after he won the science prize, but he said hard work mattered more than talent.",
    "cn": "他贏得科學獎後大家稱他為天才，但他說努力比天分更重要。"
  },
  {
    "word": "IQ",
    "pos": "n.",
    "cn_def": "智商",
    "en_def": "a number that measures a person's thinking ability",
    "sentence": "A high {{BLANK}} does not guarantee success, because skills like patience and teamwork also matter a lot.",
    "cn": "高智商並不保證成功，因為耐心和團隊合作等能力也非常重要。"
  },
  {
    "word": "mixed-ability",
    "pos": "adj.",
    "cn_def": "混合能力的",
    "en_def": "including students of different levels together",
    "sentence": "Teaching a {{BLANK}} class is challenging, so teachers often prepare easy and difficult versions of each task.",
    "cn": "教導混合能力班級很有挑戰性，所以老師常為每項任務準備簡單和困難兩種版本。"
  },
  {
    "word": "streaming",
    "pos": "n.",
    "cn_def": "能力分班",
    "en_def": "putting students into classes by their ability level",
    "sentence": "Some schools have stopped {{BLANK}}, because weaker students in the lowest class often lose confidence.",
    "cn": "有些學校已停止能力分班，因為在最低程度班的弱勢學生常會失去自信。"
  },
  {
    "word": "ability grouping",
    "pos": "n.phr.",
    "cn_def": "能力分組",
    "en_def": "forming small groups of students at similar levels",
    "sentence": "Our maths teacher uses {{BLANK}} for some activities, but she mixes the groups again for projects.",
    "cn": "我們數學老師在某些活動中採用能力分組，但做專題時她會再把各組打散混合。"
  },
  {
    "word": "inclusive",
    "pos": "adj.",
    "cn_def": "包容的；融合的",
    "en_def": "welcoming and including all kinds of people",
    "sentence": "An {{BLANK}} school welcomes students with disabilities, and teachers adapt lessons so everyone can take part.",
    "cn": "融合學校歡迎身心障礙學生，老師也調整課程讓每個人都能參與。"
  },
  {
    "word": "special needs",
    "pos": "n.phr.",
    "cn_def": "特殊需求",
    "en_def": "extra help that some students need to learn",
    "sentence": "Children with {{BLANK}} may get extra time in exams, so they have a fair chance to show what they know.",
    "cn": "有特殊需求的孩子考試時可能獲得額外時間，讓他們有公平的機會展現所學。"
  },
  {
    "word": "learning disability",
    "pos": "n.phr.",
    "cn_def": "學習障礙",
    "en_def": "a condition that makes some kinds of learning difficult",
    "sentence": "Having a {{BLANK}} does not mean a child is not clever, and many such students go on to university.",
    "cn": "有學習障礙並不代表孩子不聰明，許多這樣的學生後來都上了大學。"
  },
  {
    "word": "sign language",
    "pos": "n.phr.",
    "cn_def": "手語",
    "en_def": "a language that uses hand movements instead of sounds",
    "sentence": "Our class learned some basic {{BLANK}}, so we could chat with a new classmate who cannot hear.",
    "cn": "我們班學了一些基本手語，這樣就能和一位聽不見的新同學聊天。"
  },
  {
    "word": "braille",
    "pos": "n.",
    "cn_def": "點字",
    "en_def": "a system of raised dots that blind people read by touch",
    "sentence": "The library now has textbooks in {{BLANK}}, so blind students can read the same lessons as everyone else.",
    "cn": "圖書館現在有點字版課本，所以視障學生能和大家讀一樣的課程。"
  },
  {
    "word": "deaf",
    "pos": "adj.",
    "cn_def": "聾的；聽障的",
    "en_def": "unable to hear, or not able to hear well",
    "sentence": "The {{BLANK}} student follows lessons through a sign language interpreter, and she is one of the top students.",
    "cn": "這位聽障學生透過手語翻譯員上課，而且她是成績頂尖的學生之一。"
  },
  {
    "word": "individualised",
    "pos": "adj.",
    "cn_def": "個別化的",
    "en_def": "planned for one particular person",
    "sentence": "Each student with special needs has an {{BLANK}} learning plan, and teachers review it with parents twice a year.",
    "cn": "每位特殊需求學生都有一份個別化學習計畫，老師每年和家長檢討兩次。"
  },
  {
    "word": "one-to-one",
    "pos": "adj.",
    "cn_def": "一對一的",
    "en_def": "between one teacher and one student",
    "sentence": "He improved quickly after a few {{BLANK}} lessons, because the teacher could focus only on his mistakes.",
    "cn": "他上了幾堂一對一課後進步很快，因為老師能只專注在他的錯誤上。"
  },
  {
    "word": "slow learner",
    "pos": "n.phr.",
    "cn_def": "學習較慢的學生",
    "en_def": "a student who needs more time to learn",
    "sentence": "My father says he was a {{BLANK}} at school, but he later became an excellent engineer.",
    "cn": "我爸爸說他在學校時是個學得比較慢的學生，但後來成為了優秀的工程師。"
  },
  {
    "word": "struggling",
    "pos": "adj.",
    "cn_def": "學習困難的；吃力的",
    "en_def": "having difficulty doing something",
    "sentence": "Volunteers tutor {{BLANK}} readers after school, and many of the children now enjoy reading picture books.",
    "cn": "志工在放學後輔導閱讀有困難的學生，許多孩子現在都喜歡讀繪本了。"
  },
  {
    "word": "underprivileged",
    "pos": "adj.",
    "cn_def": "弱勢的；貧困的",
    "en_def": "having less money and fewer chances than most people",
    "sentence": "The charity gives free laptops to {{BLANK}} students, so they can join online classes at home.",
    "cn": "這個慈善團體免費提供筆電給弱勢學生，讓他們能在家參加線上課程。"
  },
  {
    "word": "disadvantaged",
    "pos": "adj.",
    "cn_def": "處於不利地位的",
    "en_def": "facing problems such as poverty that make success harder",
    "sentence": "Students from {{BLANK}} families often lack quiet places to study, so the school keeps its library open late.",
    "cn": "來自弱勢家庭的學生常缺乏安靜的讀書空間，所以學校讓圖書館開到很晚。"
  },
  {
    "word": "segregate",
    "pos": "v.",
    "cn_def": "隔離；分開",
    "en_def": "to separate one group of people from others",
    "sentence": "In the past many countries would {{BLANK}} disabled children in separate schools, but today most try to include them.",
    "cn": "過去許多國家會把身心障礙兒童隔離在不同學校，但現在大多數國家努力讓他們融入。"
  },
  {
    "word": "mainstream",
    "pos": "adj.",
    "cn_def": "主流的；一般的",
    "en_def": "ordinary and used by most people",
    "sentence": "Most students with mild disabilities now attend {{BLANK}} schools, and they get extra support in certain classes.",
    "cn": "大多數輕度障礙學生現在就讀一般學校，並在某些課程中獲得額外支援。"
  },
  {
    "word": "intensive",
    "pos": "adj.",
    "cn_def": "密集的",
    "en_def": "involving a lot of work in a short time",
    "sentence": "She took an {{BLANK}} English course in the summer, and she studied six hours a day for four weeks.",
    "cn": "她暑假上了密集英文課，連續四週每天學習六小時。"
  },
  {
    "word": "expectation",
    "pos": "n.",
    "cn_def": "期望",
    "en_def": "a belief about what someone should achieve",
    "sentence": "Her parents had high {{BLANK}} for her, but they never stopped her from choosing art as her major.",
    "cn": "她父母對她有很高的期望，但他們從未阻止她選擇藝術當主修。"
  },
  {
    "word": "peer",
    "pos": "n.",
    "cn_def": "同儕",
    "en_def": "a person of the same age or level as you",
    "sentence": "Teenagers often care more about the opinions of their {{BLANK}} than about what adults think.",
    "cn": "青少年往往更在意同儕的看法，而不是大人的想法。"
  },
  {
    "word": "outstanding",
    "pos": "adj.",
    "cn_def": "傑出的",
    "en_def": "extremely good",
    "sentence": "He gave an {{BLANK}} performance in the speech contest, and the judges gave him first prize.",
    "cn": "他在演講比賽中表現傑出，評審頒給他第一名。"
  },
  {
    "word": "elite",
    "pos": "adj.",
    "cn_def": "菁英的；頂尖的",
    "en_def": "belonging to the best or most powerful group",
    "sentence": "Only a few students get into the {{BLANK}} science class, so competition for places is very strong.",
    "cn": "只有少數學生能進入菁英科學班，所以名額競爭非常激烈。"
  },
  {
    "word": "meritocracy",
    "pos": "n.",
    "cn_def": "功績主義；菁英制度",
    "en_def": "a system where people succeed because of ability and hard work",
    "sentence": "Supporters say exams create a {{BLANK}}, but critics argue that rich families can still buy extra lessons.",
    "cn": "支持者說考試創造了功績主義的社會，但批評者認為有錢人家仍然可以花錢多補習。"
  },
  {
    "word": "privilege",
    "pos": "n.",
    "cn_def": "特權；優勢",
    "en_def": "a special advantage that only some people have",
    "sentence": "Studying abroad is a {{BLANK}} that many families cannot afford, so scholarships are very important.",
    "cn": "出國念書是許多家庭負擔不起的特權，所以獎學金非常重要。"
  },
  {
    "word": "homeschool",
    "pos": "v.",
    "cn_def": "在家自學（教育）",
    "en_def": "to teach your children at home instead of sending them to school",
    "sentence": "Some parents {{BLANK}} their children because they want more freedom, but the children still need chances to make friends.",
    "cn": "有些家長讓孩子在家自學，因為他們想要更多自由，但孩子仍需要交朋友的機會。"
  },
  {
    "word": "numeracy",
    "pos": "n.",
    "cn_def": "數理能力；算術能力",
    "en_def": "the ability to understand and work with numbers",
    "sentence": "Good {{BLANK}} is needed in daily life, because we use numbers when we shop, cook and plan our time.",
    "cn": "良好的數理能力在日常生活中是必要的，因為我們購物、煮飯和規劃時間時都會用到數字。"
  },
  {
    "word": "socioeconomic",
    "pos": "adj.",
    "cn_def": "社會經濟的",
    "en_def": "relating to social class and money",
    "sentence": "Researchers found that {{BLANK}} background affects test scores, so the government gives extra money to poorer schools.",
    "cn": "研究者發現社會經濟背景會影響考試成績，所以政府給較貧困的學校額外經費。"
  }
];

const MCQS = [
  {
    "q": "The school runs a special class for _____ children, but it also tries to keep them with friends their own age.",
    "options": [
      "legible",
      "copious",
      "gifted",
      "learner-centred"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Many _____ young musicians practise for hours every day, so they have little free time for other hobbies.",
    "options": [
      "talented",
      "obstinate",
      "postgraduate",
      "project-based"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The chess _____ beat several adult players at the age of eight, and newspapers wrote stories about him.",
    "options": [
      "qualification",
      "prodigy",
      "drill",
      "rhetoric"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "She was a _____ reader who read adult novels at seven, but she sometimes felt lonely with classmates.",
    "options": [
      "wholesome",
      "prospective",
      "prestigious",
      "precocious"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "People called him a _____ after he won the science prize, but he said hard work mattered more than talent.",
    "options": [
      "deference",
      "genius",
      "predecessor",
      "accolade"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "A high _____ does not guarantee success, because skills like patience and teamwork also matter a lot.",
    "options": [
      "classmate",
      "classroom",
      "dexterity",
      "IQ"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Teaching a _____ class is challenging, so teachers often prepare easy and difficult versions of each task.",
    "options": [
      "mixed-ability",
      "prospective",
      "literal",
      "lofty"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Some schools have stopped _____, because weaker students in the lowest class often lose confidence.",
    "options": [
      "role-play",
      "scholarship",
      "streaming",
      "bookworm"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Our maths teacher uses _____ for some activities, but she mixes the groups again for projects.",
    "options": [
      "ability grouping",
      "band score",
      "gap year",
      "visual aid"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "An _____ school welcomes students with disabilities, and teachers adapt lessons so everyone can take part.",
    "options": [
      "multiple-choice",
      "copious",
      "inclusive",
      "eminent"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Children with _____ may get extra time in exams, so they have a fair chance to show what they know.",
    "options": [
      "exchange student",
      "special needs",
      "band score",
      "study group"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Having a _____ does not mean a child is not clever, and many such students go on to university.",
    "options": [
      "report card",
      "classroom management",
      "blended learning",
      "learning disability"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our class learned some basic _____, so we could chat with a new classmate who cannot hear.",
    "options": [
      "trial and error",
      "sign language",
      "pass rate",
      "role model"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The library now has textbooks in _____, so blind students can read the same lessons as everyone else.",
    "options": [
      "credit",
      "commentary",
      "braille",
      "axiom"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The _____ student follows lessons through a sign language interpreter, and she is one of the top students.",
    "options": [
      "deaf",
      "ardent",
      "admirable",
      "eminent"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Each student with special needs has an _____ learning plan, and teachers review it with parents twice a year.",
    "options": [
      "lofty",
      "seminal",
      "innocuous",
      "individualised"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "He improved quickly after a few _____ lessons, because the teacher could focus only on his mistakes.",
    "options": [
      "one-to-one",
      "impromptu",
      "formative",
      "professional"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "My father says he was a _____ at school, but he later became an excellent engineer.",
    "options": [
      "teacher's pet",
      "role model",
      "mock exam",
      "slow learner"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Volunteers tutor _____ readers after school, and many of the children now enjoy reading picture books.",
    "options": [
      "naive",
      "heterogeneous",
      "struggling",
      "emphatic"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The charity gives free laptops to _____ students, so they can join online classes at home.",
    "options": [
      "postgraduate",
      "underprivileged",
      "prospective",
      "project-based"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Students from _____ families often lack quiet places to study, so the school keeps its library open late.",
    "options": [
      "impoverished",
      "standardised",
      "disadvantaged",
      "exacting"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "In the past many countries would _____ disabled children in separate schools, but today most try to include them.",
    "options": [
      "squander",
      "segregate",
      "belittle",
      "recap"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Most students with mild disabilities now attend _____ schools, and they get extra support in certain classes.",
    "options": [
      "mainstream",
      "eclectic",
      "laborious",
      "exempt"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "She took an _____ English course in the summer, and she studied six hours a day for four weeks.",
    "options": [
      "chronological",
      "laudable",
      "malleable",
      "intensive"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Her parents had high _____ for her, but they never stopped her from choosing art as her major.",
    "options": [
      "expectation",
      "plateau",
      "highlighter",
      "deference"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Teenagers often care more about the opinions of their _____ than about what adults think.",
    "options": [
      "semester",
      "peer",
      "professor",
      "self-study"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "He gave an _____ performance in the speech contest, and the judges gave him first prize.",
    "options": [
      "verbose",
      "eclectic",
      "outstanding",
      "idiosyncratic"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Only a few students get into the _____ science class, so competition for places is very strong.",
    "options": [
      "emphatic",
      "erudite",
      "project-based",
      "elite"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Supporters say exams create a _____, but critics argue that rich families can still buy extra lessons.",
    "options": [
      "meritocracy",
      "tutorial",
      "doctorate",
      "enigma"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Studying abroad is a _____ that many families cannot afford, so scholarships are very important.",
    "options": [
      "guidance",
      "commentary",
      "axiom",
      "privilege"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Some parents _____ their children because they want more freedom, but the children still need chances to make friends.",
    "options": [
      "redress",
      "ostracise",
      "homeschool",
      "collate"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Good _____ is needed in daily life, because we use numbers when we shop, cook and plan our time.",
    "options": [
      "campus",
      "numeracy",
      "preschool",
      "recess"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Researchers found that _____ background affects test scores, so the government gives extra money to poorer schools.",
    "options": [
      "socioeconomic",
      "erudite",
      "copious",
      "innocuous"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "gifted": {
    "pos": "adj.",
    "en_def": "having much greater natural ability than most people",
    "cn_def": "有天賦的；資優的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person with extraordinary ability",
    "cn_def": "神童"
  },
  "precocious": {
    "pos": "adj.",
    "en_def": "developing skills much earlier than usual",
    "cn_def": "早熟的"
  },
  "genius": {
    "pos": "n.",
    "en_def": "a person with extremely high intelligence or skill",
    "cn_def": "天才"
  },
  "iq": {
    "pos": "n.",
    "en_def": "a number that measures a person's thinking ability",
    "cn_def": "智商"
  },
  "mixed-ability": {
    "pos": "adj.",
    "en_def": "including students of different levels together",
    "cn_def": "混合能力的"
  },
  "streaming": {
    "pos": "n.",
    "en_def": "putting students into classes by their ability level",
    "cn_def": "能力分班"
  },
  "ability grouping": {
    "pos": "n.phr.",
    "en_def": "forming small groups of students at similar levels",
    "cn_def": "能力分組"
  },
  "inclusive": {
    "pos": "adj.",
    "en_def": "welcoming and including all kinds of people",
    "cn_def": "包容的；融合的"
  },
  "special needs": {
    "pos": "n.phr.",
    "en_def": "extra help that some students need to learn",
    "cn_def": "特殊需求"
  },
  "learning disability": {
    "pos": "n.phr.",
    "en_def": "a condition that makes some kinds of learning difficult",
    "cn_def": "學習障礙"
  },
  "sign language": {
    "pos": "n.phr.",
    "en_def": "a language that uses hand movements instead of sounds",
    "cn_def": "手語"
  },
  "braille": {
    "pos": "n.",
    "en_def": "a system of raised dots that blind people read by touch",
    "cn_def": "點字"
  },
  "deaf": {
    "pos": "adj.",
    "en_def": "unable to hear, or not able to hear well",
    "cn_def": "聾的；聽障的"
  },
  "individualised": {
    "pos": "adj.",
    "en_def": "planned for one particular person",
    "cn_def": "個別化的"
  },
  "one-to-one": {
    "pos": "adj.",
    "en_def": "between one teacher and one student",
    "cn_def": "一對一的"
  },
  "slow learner": {
    "pos": "n.phr.",
    "en_def": "a student who needs more time to learn",
    "cn_def": "學習較慢的學生"
  },
  "struggling": {
    "pos": "adj.",
    "en_def": "having difficulty doing something",
    "cn_def": "學習困難的；吃力的"
  },
  "underprivileged": {
    "pos": "adj.",
    "en_def": "having less money and fewer chances than most people",
    "cn_def": "弱勢的；貧困的"
  },
  "disadvantaged": {
    "pos": "adj.",
    "en_def": "facing problems such as poverty that make success harder",
    "cn_def": "處於不利地位的"
  },
  "segregate": {
    "pos": "v.",
    "en_def": "to separate one group of people from others",
    "cn_def": "隔離；分開"
  },
  "mainstream": {
    "pos": "adj.",
    "en_def": "ordinary and used by most people",
    "cn_def": "主流的；一般的"
  },
  "intensive": {
    "pos": "adj.",
    "en_def": "involving a lot of work in a short time",
    "cn_def": "密集的"
  },
  "expectation": {
    "pos": "n.",
    "en_def": "a belief about what someone should achieve",
    "cn_def": "期望"
  },
  "peer": {
    "pos": "n.",
    "en_def": "a person of the same age or level as you",
    "cn_def": "同儕"
  },
  "outstanding": {
    "pos": "adj.",
    "en_def": "extremely good",
    "cn_def": "傑出的"
  },
  "elite": {
    "pos": "adj.",
    "en_def": "belonging to the best or most powerful group",
    "cn_def": "菁英的；頂尖的"
  },
  "meritocracy": {
    "pos": "n.",
    "en_def": "a system where people succeed because of ability and hard work",
    "cn_def": "功績主義；菁英制度"
  },
  "privilege": {
    "pos": "n.",
    "en_def": "a special advantage that only some people have",
    "cn_def": "特權；優勢"
  },
  "homeschool": {
    "pos": "v.",
    "en_def": "to teach your children at home instead of sending them to school",
    "cn_def": "在家自學（教育）"
  },
  "numeracy": {
    "pos": "n.",
    "en_def": "the ability to understand and work with numbers",
    "cn_def": "數理能力；算術能力"
  },
  "socioeconomic": {
    "pos": "adj.",
    "en_def": "relating to social class and money",
    "cn_def": "社會經濟的"
  },
  "legible": {
    "pos": "adj.",
    "en_def": "clear enough to read",
    "cn_def": "字跡清楚的；易讀的"
  },
  "copious": {
    "pos": "adj.",
    "en_def": "in large amounts",
    "cn_def": "大量的；豐富的"
  },
  "learner-centred": {
    "pos": "adj.",
    "en_def": "focusing on what students need and do",
    "cn_def": "以學習者為中心的"
  },
  "obstinate": {
    "pos": "adj.",
    "en_def": "refusing to change your opinion",
    "cn_def": "固執的"
  },
  "postgraduate": {
    "pos": "adj.",
    "en_def": "relating to study after a first degree",
    "cn_def": "研究所的"
  },
  "project-based": {
    "pos": "adj.",
    "en_def": "learning through long practical projects",
    "cn_def": "專題式的"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record that you have passed exams or training",
    "cn_def": "資格；學歷證照"
  },
  "drill": {
    "pos": "n.",
    "en_def": "practice by repeating the same exercise many times",
    "cn_def": "反覆練習"
  },
  "rhetoric": {
    "pos": "n.",
    "en_def": "speech or writing meant to persuade, sometimes without real meaning",
    "cn_def": "修辭；空話"
  },
  "wholesome": {
    "pos": "adj.",
    "en_def": "good for your health or your moral character",
    "cn_def": "有益身心的"
  },
  "prospective": {
    "pos": "adj.",
    "en_def": "expected to become something in the future",
    "cn_def": "未來的；預期的"
  },
  "prestigious": {
    "pos": "adj.",
    "en_def": "respected and admired as very good",
    "cn_def": "有聲望的；名聲顯赫的"
  },
  "deference": {
    "pos": "n.",
    "en_def": "polite respect for someone's opinion or position",
    "cn_def": "尊重；敬意"
  },
  "predecessor": {
    "pos": "n.",
    "en_def": "the person who had a job before someone else",
    "cn_def": "前任"
  },
  "accolade": {
    "pos": "n.",
    "en_def": "praise or an award for an achievement",
    "cn_def": "讚譽；獎項"
  },
  "classmate": {
    "pos": "n.",
    "en_def": "a person in the same class as you at school",
    "cn_def": "同班同學"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room where lessons take place",
    "cn_def": "教室"
  },
  "dexterity": {
    "pos": "n.",
    "en_def": "skill in using your hands or mind",
    "cn_def": "靈巧；熟練"
  },
  "literal": {
    "pos": "adj.",
    "en_def": "using the basic meaning of a word",
    "cn_def": "字面上的"
  },
  "lofty": {
    "pos": "adj.",
    "en_def": "very high, noble or ambitious",
    "cn_def": "崇高的；遠大的"
  },
  "role-play": {
    "pos": "n.",
    "en_def": "an activity where students act as other people",
    "cn_def": "角色扮演"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for education",
    "cn_def": "獎學金"
  },
  "bookworm": {
    "pos": "n.",
    "en_def": "a person who loves reading books",
    "cn_def": "書蟲"
  },
  "band score": {
    "pos": "n.phr.",
    "en_def": "a level from 1 to 9 given in the IELTS test",
    "cn_def": "（雅思）級分"
  },
  "gap year": {
    "pos": "n.phr.",
    "en_def": "a year off between school and university",
    "cn_def": "空檔年"
  },
  "visual aid": {
    "pos": "n.phr.",
    "en_def": "a picture, chart or object that helps people understand",
    "cn_def": "視覺輔助教具"
  },
  "multiple-choice": {
    "pos": "adj.",
    "en_def": "giving several possible answers to choose from",
    "cn_def": "選擇題的"
  },
  "eminent": {
    "pos": "adj.",
    "en_def": "famous and respected in a particular field",
    "cn_def": "傑出的；著名的"
  },
  "exchange student": {
    "pos": "n.phr.",
    "en_def": "a student who studies in another country for a short time",
    "cn_def": "交換學生"
  },
  "study group": {
    "pos": "n.phr.",
    "en_def": "a small group of students who learn together",
    "cn_def": "讀書會"
  },
  "report card": {
    "pos": "n.phr.",
    "en_def": "a school report showing a student's results",
    "cn_def": "成績通知單"
  },
  "classroom management": {
    "pos": "n.phr.",
    "en_def": "the ways a teacher keeps a class organised and calm",
    "cn_def": "班級經營"
  },
  "blended learning": {
    "pos": "n.phr.",
    "en_def": "a mix of online learning and classroom teaching",
    "cn_def": "混成學習"
  },
  "trial and error": {
    "pos": "n.phr.",
    "en_def": "trying different ways until you find one that works",
    "cn_def": "反覆試驗；試誤"
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
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has completed part of a course",
    "cn_def": "學分"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "a set of comments explaining or judging something",
    "cn_def": "評論；解說"
  },
  "axiom": {
    "pos": "n.",
    "en_def": "a statement accepted as true without needing proof",
    "cn_def": "公理；格言"
  },
  "ardent": {
    "pos": "adj.",
    "en_def": "very enthusiastic and passionate",
    "cn_def": "熱心的；熱烈的"
  },
  "admirable": {
    "pos": "adj.",
    "en_def": "deserving respect and approval",
    "cn_def": "令人欽佩的"
  },
  "seminal": {
    "pos": "adj.",
    "en_def": "very important and influencing later work",
    "cn_def": "開創性的；影響深遠的"
  },
  "innocuous": {
    "pos": "adj.",
    "en_def": "not harmful or offensive",
    "cn_def": "無害的；無惡意的"
  },
  "impromptu": {
    "pos": "adj.",
    "en_def": "done without planning or preparation",
    "cn_def": "即興的；臨時的"
  },
  "formative": {
    "pos": "adj.",
    "en_def": "used during learning to help students improve",
    "cn_def": "形成性的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "relating to a job that needs special training",
    "cn_def": "專業的"
  },
  "teacher's pet": {
    "pos": "n.phr.",
    "en_def": "a student whom the teacher seems to like best",
    "cn_def": "老師的寵兒"
  },
  "mock exam": {
    "pos": "n.phr.",
    "en_def": "a practice exam taken before the real one",
    "cn_def": "模擬考"
  },
  "naive": {
    "pos": "adj.",
    "en_def": "lacking experience and too ready to believe things",
    "cn_def": "天真的"
  },
  "heterogeneous": {
    "pos": "adj.",
    "en_def": "made up of many different kinds",
    "cn_def": "異質的；多樣混雜的"
  },
  "emphatic": {
    "pos": "adj.",
    "en_def": "said with force to show something is important",
    "cn_def": "強調的；斷然的"
  },
  "impoverished": {
    "pos": "adj.",
    "en_def": "very poor",
    "cn_def": "貧困的"
  },
  "standardised": {
    "pos": "adj.",
    "en_def": "the same for everyone, so results can be compared",
    "cn_def": "標準化的"
  },
  "exacting": {
    "pos": "adj.",
    "en_def": "needing a lot of care, effort and skill",
    "cn_def": "要求嚴格的；費力的"
  },
  "squander": {
    "pos": "v.",
    "en_def": "to waste money, time or chances",
    "cn_def": "浪費；揮霍"
  },
  "belittle": {
    "pos": "v.",
    "en_def": "to make someone or something seem unimportant",
    "cn_def": "貶低；輕視"
  },
  "recap": {
    "pos": "v.",
    "en_def": "to repeat the main points briefly",
    "cn_def": "扼要重述"
  },
  "eclectic": {
    "pos": "adj.",
    "en_def": "including ideas or styles from many different sources",
    "cn_def": "兼容並蓄的；多元的"
  },
  "laborious": {
    "pos": "adj.",
    "en_def": "needing a lot of time and effort",
    "cn_def": "費力的；辛苦的"
  },
  "exempt": {
    "pos": "adj.",
    "en_def": "not required to do something that others must do",
    "cn_def": "被免除的"
  },
  "chronological": {
    "pos": "adj.",
    "en_def": "arranged in the order in which events happened",
    "cn_def": "按時間順序的"
  },
  "laudable": {
    "pos": "adj.",
    "en_def": "deserving praise",
    "cn_def": "值得稱讚的"
  },
  "malleable": {
    "pos": "adj.",
    "en_def": "easily changed or influenced",
    "cn_def": "可塑的；易受影響的"
  },
  "plateau": {
    "pos": "n.",
    "en_def": "a period when progress stops for a while",
    "cn_def": "停滯期；高原期"
  },
  "highlighter": {
    "pos": "n.",
    "en_def": "a bright pen used to mark important words",
    "cn_def": "螢光筆"
  },
  "semester": {
    "pos": "n.",
    "en_def": "one of the two main periods in a school year",
    "cn_def": "學期"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a senior teacher at a university",
    "cn_def": "教授"
  },
  "self-study": {
    "pos": "n.",
    "en_def": "learning by yourself without a teacher",
    "cn_def": "自學；自修"
  },
  "verbose": {
    "pos": "adj.",
    "en_def": "using more words than are needed",
    "cn_def": "冗長的；囉唆的"
  },
  "idiosyncratic": {
    "pos": "adj.",
    "en_def": "unusual and typical of one particular person",
    "cn_def": "獨特的；特立獨行的"
  },
  "erudite": {
    "pos": "adj.",
    "en_def": "having a great deal of knowledge from reading",
    "cn_def": "博學的"
  },
  "tutorial": {
    "pos": "n.",
    "en_def": "a short lesson for one student or a small group",
    "cn_def": "個別指導課；教學影片"
  },
  "doctorate": {
    "pos": "n.",
    "en_def": "the highest university degree, also called a PhD",
    "cn_def": "博士學位"
  },
  "enigma": {
    "pos": "n.",
    "en_def": "a person or thing that is mysterious and hard to understand",
    "cn_def": "謎；難以理解的人或事"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about what to do",
    "cn_def": "指導；輔導"
  },
  "redress": {
    "pos": "v.",
    "en_def": "to correct something unfair",
    "cn_def": "糾正；補救"
  },
  "ostracise": {
    "pos": "v.",
    "en_def": "to refuse to include someone in a group",
    "cn_def": "排擠；排斥"
  },
  "collate": {
    "pos": "v.",
    "en_def": "to collect and arrange information in order",
    "cn_def": "整理；彙整"
  },
  "campus": {
    "pos": "n.",
    "en_def": "the land and buildings of a university or school",
    "cn_def": "校園"
  },
  "preschool": {
    "pos": "n.",
    "en_def": "a school for young children before primary school",
    "cn_def": "學前教育機構；幼稚園"
  },
  "recess": {
    "pos": "n.",
    "en_def": "a short break between lessons at school",
    "cn_def": "下課時間"
  }
};

const EXTRA_GLOSSES = {};
