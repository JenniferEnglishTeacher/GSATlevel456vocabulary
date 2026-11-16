// Topic 6 Subunit 5 Quiz Data: Higher Education & University Life 高等教育與大學生活
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S05 - Higher Education & University Life 高等教育與大學生活",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "undergraduate",
    "pos": "n.",
    "cn_def": "大學部學生",
    "en_def": "a university student studying for a first degree",
    "sentence": "As an {{BLANK}} she lived in a shared flat, and she worked part-time in a café to pay her rent.",
    "cn": "身為大學部學生，她住在合租公寓，並在咖啡店打工支付房租。"
  },
  {
    "word": "postgraduate",
    "pos": "adj.",
    "cn_def": "研究所的",
    "en_def": "relating to study after a first degree",
    "sentence": "He started a {{BLANK}} course in engineering, because he wanted to design safer bridges in the future.",
    "cn": "他開始攻讀工程研究所課程，因為他未來想設計更安全的橋梁。"
  },
  {
    "word": "freshman",
    "pos": "n.",
    "cn_def": "新鮮人；一年級新生",
    "en_def": "a student in the first year of high school or university",
    "sentence": "As a {{BLANK}} I got lost on campus several times, but older students always helped me find my classroom.",
    "cn": "身為新生，我在校園裡迷路了好幾次，但學長姊總會幫我找到教室。"
  },
  {
    "word": "bachelor's degree",
    "pos": "n.phr.",
    "cn_def": "學士學位",
    "en_def": "a first university degree, usually after four years",
    "sentence": "My sister earned her {{BLANK}} in nursing, and now she works at a hospital in Kaohsiung.",
    "cn": "我姊姊取得了護理學士學位，現在在高雄的一家醫院工作。"
  },
  {
    "word": "master's degree",
    "pos": "n.phr.",
    "cn_def": "碩士學位",
    "en_def": "a university degree after a bachelor's degree",
    "sentence": "Many engineers in Taiwan study for a {{BLANK}}, because it often leads to a higher salary.",
    "cn": "台灣許多工程師攻讀碩士學位，因為這往往能帶來較高的薪水。"
  },
  {
    "word": "doctorate",
    "pos": "n.",
    "cn_def": "博士學位",
    "en_def": "the highest university degree, also called a PhD",
    "sentence": "Dr Chen completed her {{BLANK}} in marine biology, and she now teaches at a university in Keelung.",
    "cn": "陳博士完成了海洋生物學的博士學位，現在在基隆的一所大學任教。"
  },
  {
    "word": "dissertation",
    "pos": "n.",
    "cn_def": "學位論文",
    "en_def": "a long piece of writing done for a university degree",
    "sentence": "He spent his final year writing a {{BLANK}} on online learning, and his professor praised his careful research.",
    "cn": "他大四整年都在寫一篇關於線上學習的學位論文，教授稱讚他研究嚴謹。"
  },
  {
    "word": "major",
    "pos": "n.",
    "cn_def": "主修",
    "en_def": "the main subject a university student studies",
    "sentence": "My {{BLANK}} is economics, but I am also taking classes in Japanese because I want to work in Tokyo.",
    "cn": "我的主修是經濟學，但我也在修日文課，因為我想在東京工作。"
  },
  {
    "word": "minor",
    "pos": "n.",
    "cn_def": "輔修",
    "en_def": "a second subject studied at university, with fewer courses",
    "sentence": "She chose psychology as her {{BLANK}}, and the extra classes helped her understand her future customers.",
    "cn": "她選擇心理學作為輔修，這些額外課程幫助她了解未來的顧客。"
  },
  {
    "word": "faculty",
    "pos": "n.",
    "cn_def": "學院；全體教職員",
    "en_def": "a group of university departments, or all the teaching staff",
    "sentence": "The {{BLANK}} of medicine has a new building, and students can now practise in modern training rooms.",
    "cn": "醫學院有一棟新大樓，學生現在可以在現代化的訓練教室練習。"
  },
  {
    "word": "campus",
    "pos": "n.",
    "cn_def": "校園",
    "en_def": "the land and buildings of a university or school",
    "sentence": "The {{BLANK}} is so large that many students ride bicycles between classes, and some even use electric scooters.",
    "cn": "校園大到許多學生在上課之間騎腳踏車往返，有些人甚至騎電動滑板車。"
  },
  {
    "word": "professor",
    "pos": "n.",
    "cn_def": "教授",
    "en_def": "a senior teacher at a university",
    "sentence": "Our {{BLANK}} explained the theory with real examples, so even students without a science background understood.",
    "cn": "我們的教授用真實例子解釋理論，所以即使沒有理科背景的學生也聽得懂。"
  },
  {
    "word": "dean",
    "pos": "n.",
    "cn_def": "院長；系主任",
    "en_def": "a person in charge of a faculty or of students at a university",
    "sentence": "The {{BLANK}} of students met the club leaders, and she agreed to give them more money for events.",
    "cn": "學務長和社團幹部會面，並同意撥給他們更多活動經費。"
  },
  {
    "word": "admission",
    "pos": "n.",
    "cn_def": "入學許可；錄取",
    "en_def": "permission to join a school or university",
    "sentence": "Her {{BLANK}} to National Taiwan University surprised no one, because she had worked hard for years.",
    "cn": "她被台大錄取一點也不令人意外，因為她多年來一直很努力。"
  },
  {
    "word": "student loan",
    "pos": "n.phr.",
    "cn_def": "學生貸款",
    "en_def": "money borrowed to pay for university, paid back later",
    "sentence": "He took out a {{BLANK}} to pay his fees, so he plans to work for a few years before travelling.",
    "cn": "他申請了學生貸款來支付學費，所以他打算先工作幾年再去旅行。"
  },
  {
    "word": "gap year",
    "pos": "n.phr.",
    "cn_def": "空檔年",
    "en_def": "a year off between school and university",
    "sentence": "After high school she took a {{BLANK}} to volunteer in Thailand, and it helped her decide what to study.",
    "cn": "高中畢業後她休了一個空檔年去泰國當志工，這幫助她決定要念什麼。"
  },
  {
    "word": "exchange student",
    "pos": "n.phr.",
    "cn_def": "交換學生",
    "en_def": "a student who studies in another country for a short time",
    "sentence": "An {{BLANK}} from Germany joined our class, and we taught her how to use chopsticks.",
    "cn": "一位來自德國的交換學生加入我們班，而我們教她怎麼用筷子。"
  },
  {
    "word": "study abroad",
    "pos": "v.phr.",
    "cn_def": "出國留學",
    "en_def": "to go to another country to study",
    "sentence": "Many young Taiwanese hope to {{BLANK}}, but the costs of living overseas can be very high.",
    "cn": "許多台灣年輕人希望出國留學，但在國外生活的費用可能非常高。"
  },
  {
    "word": "internship",
    "pos": "n.",
    "cn_def": "實習",
    "en_def": "a short period of work to gain experience",
    "sentence": "She did a summer {{BLANK}} at a design company, and they offered her a job after she graduated.",
    "cn": "她暑假在一家設計公司實習，而公司在她畢業後提供了她一份工作。"
  },
  {
    "word": "vocational",
    "pos": "adj.",
    "cn_def": "職業的；技職的",
    "en_def": "teaching skills for a particular job",
    "sentence": "He chose a {{BLANK}} high school to learn car repair, and he opened his own garage at twenty-five.",
    "cn": "他選擇讀技職高中學汽車維修，並在二十五歲時開了自己的修車廠。"
  },
  {
    "word": "apprenticeship",
    "pos": "n.",
    "cn_def": "學徒期；學徒制",
    "en_def": "a period of training for a skilled job with an expert",
    "sentence": "He spent three years in an {{BLANK}} with a famous baker, and now he runs a popular bakery in Taichung.",
    "cn": "他跟著一位知名麵包師傅當了三年學徒，現在在台中經營一家受歡迎的麵包店。"
  },
  {
    "word": "accredited",
    "pos": "adj.",
    "cn_def": "經認證的",
    "en_def": "officially approved as meeting standards",
    "sentence": "Make sure the online college is {{BLANK}}, or employers may not accept the degree you earn there.",
    "cn": "務必確認那所線上學院是經過認證的，否則雇主可能不承認你在那裡取得的學位。"
  },
  {
    "word": "elective",
    "pos": "n.",
    "cn_def": "選修課",
    "en_def": "a course that students can choose to take",
    "sentence": "I took photography as an {{BLANK}} this year, and now I take pictures of the school garden every week.",
    "cn": "我今年選了攝影作為選修課，現在我每週都拍校園花園。"
  },
  {
    "word": "roommate",
    "pos": "n.",
    "cn_def": "室友",
    "en_def": "a person who shares a room with you",
    "sentence": "My {{BLANK}} stays up late playing games, so I wear earplugs when I need to sleep before an exam.",
    "cn": "我的室友熬夜打電動，所以考試前需要睡覺時我會戴耳塞。"
  },
  {
    "word": "student union",
    "pos": "n.phr.",
    "cn_def": "學生會",
    "en_def": "an organisation run by students to support them",
    "sentence": "The {{BLANK}} organised a free concert, and hundreds of students came to relax after their exams.",
    "cn": "學生會舉辦了一場免費音樂會，好幾百位學生考完試後來放鬆。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究",
    "en_def": "careful study to discover new facts",
    "sentence": "Her {{BLANK}} on sleep and memory was published last year, and many teachers have shared it online.",
    "cn": "她關於睡眠與記憶的研究去年發表了，許多老師都在網路上分享。"
  },
  {
    "word": "laboratory",
    "pos": "n.",
    "cn_def": "實驗室",
    "en_def": "a room where scientific experiments are done",
    "sentence": "We wear safety glasses in the chemistry {{BLANK}}, because some liquids can hurt our eyes.",
    "cn": "我們在化學實驗室裡戴護目鏡，因為有些液體可能傷害眼睛。"
  },
  {
    "word": "fieldwork",
    "pos": "n.",
    "cn_def": "田野調查；實地考察",
    "en_def": "research done outside, in the real world",
    "sentence": "The geography students did {{BLANK}} by the river, and they measured how fast the water was flowing.",
    "cn": "地理系學生在河邊做實地考察，並測量了水流的速度。"
  },
  {
    "word": "supervisor",
    "pos": "n.",
    "cn_def": "指導教授；主管",
    "en_def": "a teacher who guides a student's research",
    "sentence": "My {{BLANK}} reads every chapter of my thesis, and she gives detailed comments within a week.",
    "cn": "我的指導教授會讀我論文的每一章，並在一週內給我詳細的意見。"
  },
  {
    "word": "dropout",
    "pos": "n.",
    "cn_def": "輟學生",
    "en_def": "a person who leaves school before finishing",
    "sentence": "He was a high school {{BLANK}}, but he went back to study at night and later became a nurse.",
    "cn": "他曾是高中輟學生，但後來回去念夜校，之後成為了護理師。"
  },
  {
    "word": "tertiary",
    "pos": "adj.",
    "cn_def": "高等（教育）的；大專的",
    "en_def": "relating to education at college or university",
    "sentence": "Taiwan has many {{BLANK}} institutions, so almost every high school graduate can find a place at college.",
    "cn": "台灣有許多大專院校，所以幾乎每位高中畢業生都能找到大學可念。"
  },
  {
    "word": "higher education",
    "pos": "n.phr.",
    "cn_def": "高等教育",
    "en_def": "education at university or college",
    "sentence": "The government spends a lot on {{BLANK}}, but some people think vocational training needs more money.",
    "cn": "政府在高等教育上花了很多錢，但有些人認為職業訓練需要更多經費。"
  },
  {
    "word": "humanities",
    "pos": "n.",
    "cn_def": "人文學科",
    "en_def": "subjects such as history, literature and philosophy",
    "sentence": "Fewer students now choose the {{BLANK}}, because many parents believe science leads to better jobs.",
    "cn": "現在選讀人文學科的學生變少了，因為許多家長認為理工科能找到較好的工作。"
  }
];

const MCQS = [
  {
    "q": "As an _____ she lived in a shared flat, and she worked part-time in a café to pay her rent.",
    "options": [
      "undergraduate",
      "credence",
      "self-study",
      "truancy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "He started a _____ course in engineering, because he wanted to design safer bridges in the future.",
    "options": [
      "didactic",
      "postgraduate",
      "elementary",
      "standardised"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "As a _____ I got lost on campus several times, but older students always helped me find my classroom.",
    "options": [
      "genius",
      "playground",
      "privilege",
      "freshman"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "My sister earned her _____ in nursing, and now she works at a hospital in Kaohsiung.",
    "options": [
      "growth mindset",
      "boarding school",
      "bachelor's degree",
      "trial and error"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Many engineers in Taiwan study for a _____, because it often leads to a higher salary.",
    "options": [
      "past paper",
      "master's degree",
      "ability grouping",
      "student teacher"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Dr Chen completed her _____ in marine biology, and she now teaches at a university in Keelung.",
    "options": [
      "doctorate",
      "flashcard",
      "metacognition",
      "whiteboard"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "He spent his final year writing a _____ on online learning, and his professor praised his careful research.",
    "options": [
      "plethora",
      "flashcard",
      "prowess",
      "dissertation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "My _____ is economics, but I am also taking classes in Japanese because I want to work in Tokyo.",
    "options": [
      "commentary",
      "acumen",
      "major",
      "reunion"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "She chose psychology as her _____, and the extra classes helped her understand her future customers.",
    "options": [
      "prodigy",
      "minor",
      "bookworm",
      "qualification"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The _____ of medicine has a new building, and students can now practise in modern training rooms.",
    "options": [
      "faculty",
      "paucity",
      "enigma",
      "dexterity"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The _____ is so large that many students ride bicycles between classes, and some even use electric scooters.",
    "options": [
      "percentile",
      "worksheet",
      "campus",
      "demeanour"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Our _____ explained the theory with real examples, so even students without a science background understood.",
    "options": [
      "ingenuity",
      "flashcard",
      "examiner",
      "professor"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The _____ of students met the club leaders, and she agreed to give them more money for events.",
    "options": [
      "dean",
      "self-study",
      "calibre",
      "credit"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Her _____ to National Taiwan University surprised no one, because she had worked hard for years.",
    "options": [
      "recess",
      "metacognition",
      "admission",
      "librarian"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "He took out a _____ to pay his fees, so he plans to work for a few years before travelling.",
    "options": [
      "teacher's pet",
      "student loan",
      "learning curve",
      "student teacher"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "After high school she took a _____ to volunteer in Thailand, and it helped her decide what to study.",
    "options": [
      "trial and error",
      "learning disability",
      "study group",
      "gap year"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "An _____ from Germany joined our class, and we taught her how to use chopsticks.",
    "options": [
      "exchange student",
      "band score",
      "lesson plan",
      "growth mindset"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Many young Taiwanese hope to _____, but the costs of living overseas can be very high.",
    "options": [
      "jot down",
      "learn from one's mistakes",
      "hit the books",
      "study abroad"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "She did a summer _____ at a design company, and they offered her a job after she graduated.",
    "options": [
      "privilege",
      "internship",
      "pedagogy",
      "IQ"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "He chose a _____ high school to learn car repair, and he opened his own garage at twenty-five.",
    "options": [
      "inclusive",
      "amateur",
      "vocational",
      "instrumental"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "He spent three years in an _____ with a famous baker, and now he runs a popular bakery in Taichung.",
    "options": [
      "apprenticeship",
      "maxim",
      "dexterity",
      "kindergarten"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Make sure the online college is _____, or employers may not accept the degree you earn there.",
    "options": [
      "naive",
      "amateur",
      "admirable",
      "accredited"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "I took photography as an _____ this year, and now I take pictures of the school garden every week.",
    "options": [
      "bureaucracy",
      "elective",
      "ingenuity",
      "playground"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "My _____ stays up late playing games, so I wear earplugs when I need to sleep before an exam.",
    "options": [
      "genius",
      "brevity",
      "roommate",
      "rhetoric"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The _____ organised a free concert, and hundreds of students came to relax after their exams.",
    "options": [
      "student union",
      "lesson plan",
      "marking scheme",
      "boarding school"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Her _____ on sleep and memory was published last year, and many teachers have shared it online.",
    "options": [
      "jargon",
      "research",
      "glossary",
      "metacognition"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "We wear safety glasses in the chemistry _____, because some liquids can hurt our eyes.",
    "options": [
      "glossary",
      "whiteboard",
      "laboratory",
      "transcript"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The geography students did _____ by the river, and they measured how fast the water was flowing.",
    "options": [
      "whiteboard",
      "commentary",
      "handout",
      "fieldwork"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "My _____ reads every chapter of my thesis, and she gives detailed comments within a week.",
    "options": [
      "tenet",
      "supervisor",
      "exam",
      "homeroom"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "He was a high school _____, but he went back to study at night and later became a nurse.",
    "options": [
      "dropout",
      "dictation",
      "rapport",
      "extension"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Taiwan has many _____ institutions, so almost every high school graduate can find a place at college.",
    "options": [
      "agile",
      "negligent",
      "talented",
      "tertiary"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The government spends a lot on _____, but some people think vocational training needs more money.",
    "options": [
      "high achiever",
      "learning disability",
      "higher education",
      "sign language"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Fewer students now choose the _____, because many parents believe science leads to better jobs.",
    "options": [
      "prodigy",
      "instructor",
      "examiner",
      "humanities"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "undergraduate": {
    "pos": "n.",
    "en_def": "a university student studying for a first degree",
    "cn_def": "大學部學生"
  },
  "postgraduate": {
    "pos": "adj.",
    "en_def": "relating to study after a first degree",
    "cn_def": "研究所的"
  },
  "freshman": {
    "pos": "n.",
    "en_def": "a student in the first year of high school or university",
    "cn_def": "新鮮人；一年級新生"
  },
  "bachelor's degree": {
    "pos": "n.phr.",
    "en_def": "a first university degree, usually after four years",
    "cn_def": "學士學位"
  },
  "master's degree": {
    "pos": "n.phr.",
    "en_def": "a university degree after a bachelor's degree",
    "cn_def": "碩士學位"
  },
  "doctorate": {
    "pos": "n.",
    "en_def": "the highest university degree, also called a PhD",
    "cn_def": "博士學位"
  },
  "dissertation": {
    "pos": "n.",
    "en_def": "a long piece of writing done for a university degree",
    "cn_def": "學位論文"
  },
  "major": {
    "pos": "n.",
    "en_def": "the main subject a university student studies",
    "cn_def": "主修"
  },
  "minor": {
    "pos": "n.",
    "en_def": "a second subject studied at university, with fewer courses",
    "cn_def": "輔修"
  },
  "faculty": {
    "pos": "n.",
    "en_def": "a group of university departments, or all the teaching staff",
    "cn_def": "學院；全體教職員"
  },
  "campus": {
    "pos": "n.",
    "en_def": "the land and buildings of a university or school",
    "cn_def": "校園"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a senior teacher at a university",
    "cn_def": "教授"
  },
  "dean": {
    "pos": "n.",
    "en_def": "a person in charge of a faculty or of students at a university",
    "cn_def": "院長；系主任"
  },
  "admission": {
    "pos": "n.",
    "en_def": "permission to join a school or university",
    "cn_def": "入學許可；錄取"
  },
  "student loan": {
    "pos": "n.phr.",
    "en_def": "money borrowed to pay for university, paid back later",
    "cn_def": "學生貸款"
  },
  "gap year": {
    "pos": "n.phr.",
    "en_def": "a year off between school and university",
    "cn_def": "空檔年"
  },
  "exchange student": {
    "pos": "n.phr.",
    "en_def": "a student who studies in another country for a short time",
    "cn_def": "交換學生"
  },
  "study abroad": {
    "pos": "v.phr.",
    "en_def": "to go to another country to study",
    "cn_def": "出國留學"
  },
  "internship": {
    "pos": "n.",
    "en_def": "a short period of work to gain experience",
    "cn_def": "實習"
  },
  "vocational": {
    "pos": "adj.",
    "en_def": "teaching skills for a particular job",
    "cn_def": "職業的；技職的"
  },
  "apprenticeship": {
    "pos": "n.",
    "en_def": "a period of training for a skilled job with an expert",
    "cn_def": "學徒期；學徒制"
  },
  "accredited": {
    "pos": "adj.",
    "en_def": "officially approved as meeting standards",
    "cn_def": "經認證的"
  },
  "elective": {
    "pos": "n.",
    "en_def": "a course that students can choose to take",
    "cn_def": "選修課"
  },
  "roommate": {
    "pos": "n.",
    "en_def": "a person who shares a room with you",
    "cn_def": "室友"
  },
  "student union": {
    "pos": "n.phr.",
    "en_def": "an organisation run by students to support them",
    "cn_def": "學生會"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to discover new facts",
    "cn_def": "研究"
  },
  "laboratory": {
    "pos": "n.",
    "en_def": "a room where scientific experiments are done",
    "cn_def": "實驗室"
  },
  "fieldwork": {
    "pos": "n.",
    "en_def": "research done outside, in the real world",
    "cn_def": "田野調查；實地考察"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a teacher who guides a student's research",
    "cn_def": "指導教授；主管"
  },
  "dropout": {
    "pos": "n.",
    "en_def": "a person who leaves school before finishing",
    "cn_def": "輟學生"
  },
  "tertiary": {
    "pos": "adj.",
    "en_def": "relating to education at college or university",
    "cn_def": "高等（教育）的；大專的"
  },
  "higher education": {
    "pos": "n.phr.",
    "en_def": "education at university or college",
    "cn_def": "高等教育"
  },
  "humanities": {
    "pos": "n.",
    "en_def": "subjects such as history, literature and philosophy",
    "cn_def": "人文學科"
  },
  "credence": {
    "pos": "n.",
    "en_def": "belief that something is true",
    "cn_def": "相信；可信度"
  },
  "self-study": {
    "pos": "n.",
    "en_def": "learning by yourself without a teacher",
    "cn_def": "自學；自修"
  },
  "truancy": {
    "pos": "n.",
    "en_def": "staying away from school without permission",
    "cn_def": "逃學；曠課"
  },
  "didactic": {
    "pos": "adj.",
    "en_def": "intended to teach, often in a way that feels like a lecture",
    "cn_def": "說教的；教誨的"
  },
  "elementary": {
    "pos": "adj.",
    "en_def": "about the first, simplest stage of school or learning",
    "cn_def": "初級的；小學的"
  },
  "standardised": {
    "pos": "adj.",
    "en_def": "the same for everyone, so results can be compared",
    "cn_def": "標準化的"
  },
  "genius": {
    "pos": "n.",
    "en_def": "a person with extremely high intelligence or skill",
    "cn_def": "天才"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outdoor area at school where children play",
    "cn_def": "遊樂場；操場"
  },
  "privilege": {
    "pos": "n.",
    "en_def": "a special advantage that only some people have",
    "cn_def": "特權；優勢"
  },
  "growth mindset": {
    "pos": "n.phr.",
    "en_def": "the belief that ability can grow with effort",
    "cn_def": "成長型思維"
  },
  "boarding school": {
    "pos": "n.phr.",
    "en_def": "a school where students live and sleep during the term",
    "cn_def": "寄宿學校"
  },
  "trial and error": {
    "pos": "n.phr.",
    "en_def": "trying different ways until you find one that works",
    "cn_def": "反覆試驗；試誤"
  },
  "past paper": {
    "pos": "n.phr.",
    "en_def": "an exam from a previous year used for practice",
    "cn_def": "考古題"
  },
  "ability grouping": {
    "pos": "n.phr.",
    "en_def": "forming small groups of students at similar levels",
    "cn_def": "能力分組"
  },
  "student teacher": {
    "pos": "n.phr.",
    "en_def": "a person who is training to become a teacher",
    "cn_def": "實習教師"
  },
  "flashcard": {
    "pos": "n.",
    "en_def": "a small card with a word on one side and its meaning on the other",
    "cn_def": "單字卡；閃卡"
  },
  "metacognition": {
    "pos": "n.",
    "en_def": "thinking about how you think and learn",
    "cn_def": "後設認知"
  },
  "whiteboard": {
    "pos": "n.",
    "en_def": "a white board that teachers write on with markers",
    "cn_def": "白板"
  },
  "plethora": {
    "pos": "n.",
    "en_def": "a very large amount, often too much",
    "cn_def": "過多；大量"
  },
  "prowess": {
    "pos": "n.",
    "en_def": "great skill at doing something",
    "cn_def": "高超技能；本領"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "a set of comments explaining or judging something",
    "cn_def": "評論；解說"
  },
  "acumen": {
    "pos": "n.",
    "en_def": "the ability to make good, quick judgements",
    "cn_def": "敏銳；精明"
  },
  "reunion": {
    "pos": "n.",
    "en_def": "a meeting of people who have not seen each other for a long time",
    "cn_def": "重聚；同學會"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person with extraordinary ability",
    "cn_def": "神童"
  },
  "bookworm": {
    "pos": "n.",
    "en_def": "a person who loves reading books",
    "cn_def": "書蟲"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record that you have passed exams or training",
    "cn_def": "資格；學歷證照"
  },
  "paucity": {
    "pos": "n.",
    "en_def": "a lack of something",
    "cn_def": "缺乏；不足"
  },
  "enigma": {
    "pos": "n.",
    "en_def": "a person or thing that is mysterious and hard to understand",
    "cn_def": "謎；難以理解的人或事"
  },
  "dexterity": {
    "pos": "n.",
    "en_def": "skill in using your hands or mind",
    "cn_def": "靈巧；熟練"
  },
  "percentile": {
    "pos": "n.",
    "en_def": "a position showing what percentage of people scored lower",
    "cn_def": "百分位數"
  },
  "worksheet": {
    "pos": "n.",
    "en_def": "a paper with exercises for students to complete",
    "cn_def": "學習單"
  },
  "demeanour": {
    "pos": "n.",
    "en_def": "the way a person behaves or looks",
    "cn_def": "舉止；態度"
  },
  "ingenuity": {
    "pos": "n.",
    "en_def": "skill in thinking of clever new ideas",
    "cn_def": "巧思；創造力"
  },
  "examiner": {
    "pos": "n.",
    "en_def": "a person who sets or marks an exam, or tests speaking",
    "cn_def": "主考官；閱卷人"
  },
  "calibre": {
    "pos": "n.",
    "en_def": "the level of quality or ability",
    "cn_def": "才幹；水準"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has completed part of a course",
    "cn_def": "學分"
  },
  "recess": {
    "pos": "n.",
    "en_def": "a short break between lessons at school",
    "cn_def": "下課時間"
  },
  "librarian": {
    "pos": "n.",
    "en_def": "a person who works in a library",
    "cn_def": "圖書館員"
  },
  "teacher's pet": {
    "pos": "n.phr.",
    "en_def": "a student whom the teacher seems to like best",
    "cn_def": "老師的寵兒"
  },
  "learning curve": {
    "pos": "n.phr.",
    "en_def": "how quickly someone learns something new",
    "cn_def": "學習曲線"
  },
  "learning disability": {
    "pos": "n.phr.",
    "en_def": "a condition that makes some kinds of learning difficult",
    "cn_def": "學習障礙"
  },
  "study group": {
    "pos": "n.phr.",
    "en_def": "a small group of students who learn together",
    "cn_def": "讀書會"
  },
  "band score": {
    "pos": "n.phr.",
    "en_def": "a level from 1 to 9 given in the IELTS test",
    "cn_def": "（雅思）級分"
  },
  "lesson plan": {
    "pos": "n.phr.",
    "en_def": "a teacher's written plan for one class",
    "cn_def": "教案"
  },
  "jot down": {
    "pos": "v.phr.",
    "en_def": "to write something quickly",
    "cn_def": "匆匆記下"
  },
  "learn from one's mistakes": {
    "pos": "v.phr.",
    "en_def": "to improve by understanding what you did wrong",
    "cn_def": "從錯誤中學習"
  },
  "hit the books": {
    "pos": "v.phr.",
    "en_def": "to start studying hard",
    "cn_def": "開始用功讀書"
  },
  "pedagogy": {
    "pos": "n.",
    "en_def": "the methods and practice of teaching",
    "cn_def": "教學法"
  },
  "iq": {
    "pos": "n.",
    "en_def": "a number that measures a person's thinking ability",
    "cn_def": "智商"
  },
  "inclusive": {
    "pos": "adj.",
    "en_def": "welcoming and including all kinds of people",
    "cn_def": "包容的；融合的"
  },
  "amateur": {
    "pos": "adj.",
    "en_def": "doing something for enjoyment, not as a job",
    "cn_def": "業餘的"
  },
  "instrumental": {
    "pos": "adj.",
    "en_def": "very important in making something happen",
    "cn_def": "起重要作用的"
  },
  "maxim": {
    "pos": "n.",
    "en_def": "a short saying that gives a rule for behaviour",
    "cn_def": "格言；座右銘"
  },
  "kindergarten": {
    "pos": "n.",
    "en_def": "a school for children aged about three to six",
    "cn_def": "幼兒園"
  },
  "naive": {
    "pos": "adj.",
    "en_def": "lacking experience and too ready to believe things",
    "cn_def": "天真的"
  },
  "admirable": {
    "pos": "adj.",
    "en_def": "deserving respect and approval",
    "cn_def": "令人欽佩的"
  },
  "bureaucracy": {
    "pos": "n.",
    "en_def": "a system with many complicated official rules",
    "cn_def": "官僚制度；繁文縟節"
  },
  "brevity": {
    "pos": "n.",
    "en_def": "the quality of using few words",
    "cn_def": "簡潔；簡短"
  },
  "rhetoric": {
    "pos": "n.",
    "en_def": "speech or writing meant to persuade, sometimes without real meaning",
    "cn_def": "修辭；空話"
  },
  "marking scheme": {
    "pos": "n.phr.",
    "en_def": "the official guide for scoring an exam",
    "cn_def": "評分標準"
  },
  "jargon": {
    "pos": "n.",
    "en_def": "special words used by a group that others find hard to understand",
    "cn_def": "術語；行話"
  },
  "glossary": {
    "pos": "n.",
    "en_def": "a list of difficult words with their meanings, often at the end of a book",
    "cn_def": "詞彙表"
  },
  "transcript": {
    "pos": "n.",
    "en_def": "an official record of a student's courses and results",
    "cn_def": "成績單"
  },
  "handout": {
    "pos": "n.",
    "en_def": "a sheet of information given to students in class",
    "cn_def": "講義"
  },
  "tenet": {
    "pos": "n.",
    "en_def": "a main principle or belief",
    "cn_def": "原則；信條"
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "homeroom": {
    "pos": "n.",
    "en_def": "the class where students meet their main teacher each day",
    "cn_def": "導師班；班級教室"
  },
  "dictation": {
    "pos": "n.",
    "en_def": "writing down words that someone reads aloud",
    "cn_def": "聽寫"
  },
  "rapport": {
    "pos": "n.",
    "en_def": "a friendly relationship of trust and understanding",
    "cn_def": "融洽關係"
  },
  "extension": {
    "pos": "n.",
    "en_def": "extra time given to finish a piece of work",
    "cn_def": "延期；延長期限"
  },
  "agile": {
    "pos": "adj.",
    "en_def": "able to move or think quickly and easily",
    "cn_def": "敏捷的；靈活的"
  },
  "negligent": {
    "pos": "adj.",
    "en_def": "not taking enough care",
    "cn_def": "疏忽的；失職的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "high achiever": {
    "pos": "n.phr.",
    "en_def": "a person who is very successful, especially at school",
    "cn_def": "成就卓越者；資優生"
  },
  "sign language": {
    "pos": "n.phr.",
    "en_def": "a language that uses hand movements instead of sounds",
    "cn_def": "手語"
  },
  "instructor": {
    "pos": "n.",
    "en_def": "a person who teaches a practical skill",
    "cn_def": "教練；講師"
  }
};

const EXTRA_GLOSSES = {};
