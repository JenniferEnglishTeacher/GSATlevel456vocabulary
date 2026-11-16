// Topic 6 Subunit 1 Quiz Data: Schools & School Life 學校與校園生活
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T06 S01 - Schools & School Life 學校與校園生活",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "kindergarten",
    "pos": "n.",
    "cn_def": "幼兒園",
    "en_def": "a school for children aged about three to six",
    "sentence": "My little brother started {{BLANK}} last September, and now he sings English songs at home every evening.",
    "cn": "我弟弟去年九月開始上幼兒園，現在他每天晚上都在家唱英文歌。"
  },
  {
    "word": "preschool",
    "pos": "n.",
    "cn_def": "學前教育機構；幼稚園",
    "en_def": "a school for young children before primary school",
    "sentence": "Many parents in Taipei send their children to a bilingual {{BLANK}} because they want them to learn English early.",
    "cn": "台北許多家長把孩子送到雙語幼稚園，因為他們希望孩子及早學英文。"
  },
  {
    "word": "elementary",
    "pos": "adj.",
    "cn_def": "初級的；小學的",
    "en_def": "about the first, simplest stage of school or learning",
    "sentence": "My cousin teaches at an {{BLANK}} school in Tainan, and she says the children are full of energy every morning.",
    "cn": "我表姊在台南一所小學教書，她說孩子們每天早上都精力充沛。"
  },
  {
    "word": "boarding school",
    "pos": "n.phr.",
    "cn_def": "寄宿學校",
    "en_def": "a school where students live and sleep during the term",
    "sentence": "Jason was nervous about moving to a {{BLANK}} in the mountains, but he soon made friends in his dormitory.",
    "cn": "傑森對於搬到山上的寄宿學校感到緊張，但他很快就在宿舍交到了朋友。"
  },
  {
    "word": "headteacher",
    "pos": "n.",
    "cn_def": "校長",
    "en_def": "the teacher who is in charge of a school",
    "sentence": "The {{BLANK}} gave a short speech at the start of the year, and she asked every student to try something new.",
    "cn": "校長在學年開始時做了簡短的演講，她要求每位學生嘗試一件新事物。"
  },
  {
    "word": "classmate",
    "pos": "n.",
    "cn_def": "同班同學",
    "en_def": "a person in the same class as you at school",
    "sentence": "I forgot my calculator before the maths test, so my {{BLANK}} kindly lent me hers for the whole lesson.",
    "cn": "我在數學考試前忘了帶計算機，所以我的同學好心地把她的借我用了一整節課。"
  },
  {
    "word": "playground",
    "pos": "n.",
    "cn_def": "遊樂場；操場",
    "en_def": "an outdoor area at school where children play",
    "sentence": "The younger pupils rushed to the {{BLANK}} as soon as the bell rang, and they played until lunch was ready.",
    "cn": "鐘聲一響，低年級學生就衝到操場，一直玩到午餐準備好。"
  },
  {
    "word": "cafeteria",
    "pos": "n.",
    "cn_def": "自助餐廳；學生餐廳",
    "en_def": "a place in a school where students buy and eat food",
    "sentence": "The school {{BLANK}} now offers more vegetables and fruit, but some students still prefer fried chicken and bubble tea.",
    "cn": "學校餐廳現在提供更多蔬菜和水果，但有些學生還是比較喜歡炸雞和珍珠奶茶。"
  },
  {
    "word": "locker",
    "pos": "n.",
    "cn_def": "置物櫃",
    "en_def": "a small metal cupboard where students keep their things",
    "sentence": "I left my heavy dictionary in my {{BLANK}} after class, so my backpack felt much lighter on the way home.",
    "cn": "我下課後把厚重的字典留在置物櫃裡，所以回家路上背包輕多了。"
  },
  {
    "word": "dormitory",
    "pos": "n.",
    "cn_def": "宿舍",
    "en_def": "a large building where students live and sleep",
    "sentence": "The {{BLANK}} lights go off at eleven o'clock, so students who want to keep studying have to use small desk lamps.",
    "cn": "宿舍的燈十一點就熄了，所以想繼續讀書的學生只能用小檯燈。"
  },
  {
    "word": "semester",
    "pos": "n.",
    "cn_def": "學期",
    "en_def": "one of the two main periods in a school year",
    "sentence": "This {{BLANK}} I am taking an extra Japanese class, but I still have time to play basketball on Fridays.",
    "cn": "這學期我多修了一堂日文課，但我星期五仍然有時間打籃球。"
  },
  {
    "word": "recess",
    "pos": "n.",
    "cn_def": "下課時間",
    "en_def": "a short break between lessons at school",
    "sentence": "During morning {{BLANK}} the students bought snacks at the school shop, and some of them finished their reading homework.",
    "cn": "在早上的下課時間，學生們到福利社買零食，其中有些人寫完了閱讀作業。"
  },
  {
    "word": "attendance",
    "pos": "n.",
    "cn_def": "出席；出席率",
    "en_def": "how often someone is present at school or class",
    "sentence": "Her {{BLANK}} was almost perfect this year, because she only missed one day when she had a bad cold.",
    "cn": "她今年的出席率幾乎是完美的，因為她只有在重感冒時缺席了一天。"
  },
  {
    "word": "absent",
    "pos": "adj.",
    "cn_def": "缺席的",
    "en_def": "not at school or work when you should be",
    "sentence": "Three students were {{BLANK}} on Monday because of the flu, so the teacher decided to postpone the speaking test.",
    "cn": "星期一有三位學生因為流感而缺席，所以老師決定延後口說測驗。"
  },
  {
    "word": "truancy",
    "pos": "n.",
    "cn_def": "逃學；曠課",
    "en_def": "staying away from school without permission",
    "sentence": "The school called his parents about his {{BLANK}}, and they were shocked because he had left home every morning in uniform.",
    "cn": "學校打電話給他的父母談他逃學的事，他們很震驚，因為他每天早上都穿著制服出門。"
  },
  {
    "word": "expel",
    "pos": "v.",
    "cn_def": "開除；退學",
    "en_def": "to officially make a student leave a school",
    "sentence": "The school may {{BLANK}} any student who brings a weapon to class, so the rules are explained clearly on the first day.",
    "cn": "學校可能會開除任何帶武器到班上的學生，所以第一天就會清楚說明規定。"
  },
  {
    "word": "detention",
    "pos": "n.",
    "cn_def": "課後留校（處罰）",
    "en_def": "a punishment where a student must stay after school",
    "sentence": "Ken talked loudly during the test, so he got an hour of {{BLANK}} and missed his football practice.",
    "cn": "肯在考試時大聲講話，所以被罰課後留校一小時，錯過了足球練習。"
  },
  {
    "word": "punctual",
    "pos": "adj.",
    "cn_def": "準時的",
    "en_def": "arriving or doing something at the right time",
    "sentence": "Our English teacher is always {{BLANK}}, and she expects us to be in our seats before the bell rings.",
    "cn": "我們的英文老師總是很準時，她也要求我們在鐘響前坐到座位上。"
  },
  {
    "word": "extracurricular",
    "pos": "adj.",
    "cn_def": "課外的",
    "en_def": "done at school but not part of normal lessons",
    "sentence": "Universities like applicants who join {{BLANK}} activities, because these activities show teamwork and leadership skills.",
    "cn": "大學喜歡參加課外活動的申請者，因為這些活動能展現團隊合作和領導能力。"
  },
  {
    "word": "field trip",
    "pos": "n.phr.",
    "cn_def": "校外教學",
    "en_def": "a visit made by students to learn outside school",
    "sentence": "Our class went on a {{BLANK}} to the science museum, and we watched a show about volcanoes and earthquakes.",
    "cn": "我們班去科學博物館校外教學，還觀看了一場關於火山和地震的表演。"
  },
  {
    "word": "assembly",
    "pos": "n.",
    "cn_def": "朝會；集會",
    "en_def": "a meeting of all the students and teachers in a school",
    "sentence": "Every Monday morning the whole school gathers for {{BLANK}}, and the student council shares important news.",
    "cn": "每個星期一早上全校都會集合參加朝會，學生會在會中分享重要消息。"
  },
  {
    "word": "orientation",
    "pos": "n.",
    "cn_def": "新生訓練；入門介紹",
    "en_def": "a time of introduction for new students",
    "sentence": "New students attended a two-day {{BLANK}} before classes began, so they knew where the library and labs were.",
    "cn": "新生在開學前參加了兩天的新生訓練，所以他們知道圖書館和實驗室在哪裡。"
  },
  {
    "word": "alumni",
    "pos": "n.",
    "cn_def": "校友（複數）",
    "en_def": "former students of a school or university",
    "sentence": "Several famous {{BLANK}} came back to give talks on career day, and the students asked them many questions.",
    "cn": "幾位知名校友在職涯日回校演講，學生們問了他們很多問題。"
  },
  {
    "word": "homeroom",
    "pos": "n.",
    "cn_def": "導師班；班級教室",
    "en_def": "the class where students meet their main teacher each day",
    "sentence": "Our {{BLANK}} teacher checks attendance every morning, and she also helps us when we have problems with friends.",
    "cn": "我們的導師每天早上點名，而且在我們和朋友有問題時也會幫助我們。"
  },
  {
    "word": "bully",
    "pos": "v.",
    "cn_def": "霸凌；欺負",
    "en_def": "to hurt or frighten someone weaker again and again",
    "sentence": "Some older boys used to {{BLANK}} him online, but he told a teacher and the school stopped it quickly.",
    "cn": "有些年紀較大的男孩過去常在網路上霸凌他，但他告訴了老師，學校很快就制止了。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room where lessons take place",
    "sentence": "Our {{BLANK}} has new air conditioners this year, so it is much easier to concentrate on hot afternoons.",
    "cn": "我們的教室今年裝了新冷氣，所以在炎熱的下午專心上課容易多了。"
  },
  {
    "word": "stationery",
    "pos": "n.",
    "cn_def": "文具",
    "en_def": "pens, paper, rulers and other things for writing",
    "sentence": "Before the new semester, students crowd into {{BLANK}} shops, and they buy colourful pens, notebooks and sticky notes.",
    "cn": "新學期開始前，學生們擠進文具店，買彩色筆、筆記本和便利貼。"
  },
  {
    "word": "staffroom",
    "pos": "n.",
    "cn_def": "教師辦公室",
    "en_def": "a room in a school where teachers work and rest",
    "sentence": "I took my test paper to the {{BLANK}} after lunch, because I wanted to ask my teacher about one question.",
    "cn": "午餐後我把考卷拿到教師辦公室，因為我想問老師其中一題。"
  },
  {
    "word": "co-educational",
    "pos": "adj.",
    "cn_def": "男女合校的",
    "en_def": "for both boys and girls together",
    "sentence": "Most high schools in Taiwan are now {{BLANK}}, but some traditional schools still accept only boys or only girls.",
    "cn": "台灣大多數高中現在都是男女合校，但有些傳統學校仍然只收男生或只收女生。"
  },
  {
    "word": "single-sex",
    "pos": "adj.",
    "cn_def": "單一性別的",
    "en_def": "only for boys or only for girls",
    "sentence": "My mother studied at a {{BLANK}} school for girls, and she says it helped her feel confident in science classes.",
    "cn": "我媽媽以前就讀一所單一性別的女校，她說那幫助她在科學課上更有自信。"
  },
  {
    "word": "state school",
    "pos": "n.phr.",
    "cn_def": "公立學校",
    "en_def": "a school paid for by the government",
    "sentence": "In Britain most children go to a {{BLANK}}, while a small number of families pay for private education.",
    "cn": "在英國大部分孩子就讀公立學校，而少數家庭則花錢讓孩子接受私立教育。"
  },
  {
    "word": "janitor",
    "pos": "n.",
    "cn_def": "校工；工友",
    "en_def": "a person who cleans and looks after a school building",
    "sentence": "The {{BLANK}} fixed the broken window before school started, so our lesson was not interrupted by the cold wind.",
    "cn": "工友在上課前修好了破掉的窗戶，所以我們上課沒有被冷風打擾。"
  },
  {
    "word": "dress code",
    "pos": "n.phr.",
    "cn_def": "服裝規定",
    "en_def": "rules about what clothes people may wear",
    "sentence": "The school relaxed its {{BLANK}} last year, so students can now wear sports clothes on hot days.",
    "cn": "學校去年放寬了服裝規定，所以學生現在天氣熱時可以穿運動服。"
  },
  {
    "word": "reunion",
    "pos": "n.",
    "cn_def": "重聚；同學會",
    "en_def": "a meeting of people who have not seen each other for a long time",
    "sentence": "My father went to his high school {{BLANK}} last weekend, and he was surprised that many classmates had become teachers.",
    "cn": "我爸爸上週末去參加高中同學會，他很驚訝許多同學都成了老師。"
  }
];

const MCQS = [
  {
    "q": "My little brother started _____ last September, and now he sings English songs at home every evening.",
    "options": [
      "transcript",
      "expectation",
      "ingenuity",
      "kindergarten"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Many parents in Taipei send their children to a bilingual _____ because they want them to learn English early.",
    "options": [
      "freshman",
      "preschool",
      "privilege",
      "projector"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "My cousin teaches at an _____ school in Tainan, and she says the children are full of energy every morning.",
    "options": [
      "apt",
      "illustrious",
      "elementary",
      "verbose"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Jason was nervous about moving to a _____ in the mountains, but he soon made friends in his dormitory.",
    "options": [
      "boarding school",
      "gap year",
      "student teacher",
      "marking scheme"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The _____ gave a short speech at the start of the year, and she asked every student to try something new.",
    "options": [
      "acumen",
      "headteacher",
      "tenet",
      "prodigy"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "I forgot my calculator before the maths test, so my _____ kindly lent me hers for the whole lesson.",
    "options": [
      "expectation",
      "reform",
      "IQ",
      "classmate"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The younger pupils rushed to the _____ as soon as the bell rang, and they played until lunch was ready.",
    "options": [
      "playground",
      "reform",
      "humanities",
      "doctrine"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The school _____ now offers more vegetables and fruit, but some students still prefer fried chicken and bubble tea.",
    "options": [
      "privilege",
      "internship",
      "cafeteria",
      "calibre"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "I left my heavy dictionary in my _____ after class, so my backpack felt much lighter on the way home.",
    "options": [
      "accolade",
      "dictionary",
      "professor",
      "locker"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ lights go off at eleven o'clock, so students who want to keep studying have to use small desk lamps.",
    "options": [
      "dormitory",
      "metacognition",
      "dropout",
      "credit"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "This _____ I am taking an extra Japanese class, but I still have time to play basketball on Fridays.",
    "options": [
      "dictionary",
      "semester",
      "deference",
      "dissertation"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "During morning _____ the students bought snacks at the school shop, and some of them finished their reading homework.",
    "options": [
      "commentary",
      "metacognition",
      "recess",
      "credit"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Her _____ was almost perfect this year, because she only missed one day when she had a bad cold.",
    "options": [
      "expectation",
      "glossary",
      "examiner",
      "attendance"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Three students were _____ on Monday because of the flu, so the teacher decided to postpone the speaking test.",
    "options": [
      "absent",
      "archaic",
      "postgraduate",
      "punitive"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The school called his parents about his _____, and they were shocked because he had left home every morning in uniform.",
    "options": [
      "doctorate",
      "truancy",
      "tenet",
      "discipline"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The school may _____ any student who brings a weapon to class, so the rules are explained clearly on the first day.",
    "options": [
      "spoon-feed",
      "exasperate",
      "expel",
      "deride"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Ken talked loudly during the test, so he got an hour of _____ and missed his football practice.",
    "options": [
      "scholarship",
      "bureaucracy",
      "major",
      "detention"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Our English teacher is always _____, and she expects us to be in our seats before the bell rings.",
    "options": [
      "precocious",
      "nominal",
      "punctual",
      "conversant"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Universities like applicants who join _____ activities, because these activities show teamwork and leadership skills.",
    "options": [
      "verbose",
      "extracurricular",
      "amenable",
      "one-to-one"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Our class went on a _____ to the science museum, and we watched a show about volcanoes and earthquakes.",
    "options": [
      "field trip",
      "lesson plan",
      "student loan",
      "study group"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Every Monday morning the whole school gathers for _____, and the student council shares important news.",
    "options": [
      "rapport",
      "assembly",
      "pace",
      "professor"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "New students attended a two-day _____ before classes began, so they knew where the library and labs were.",
    "options": [
      "orientation",
      "metacognition",
      "ranking",
      "tenet"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Several famous _____ came back to give talks on career day, and the students asked them many questions.",
    "options": [
      "dissertation",
      "humanities",
      "alumni",
      "extension"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Our _____ teacher checks attendance every morning, and she also helps us when we have problems with friends.",
    "options": [
      "diploma",
      "meritocracy",
      "ranking",
      "homeroom"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Some older boys used to _____ him online, but he told a teacher and the school stopped it quickly.",
    "options": [
      "exasperate",
      "bully",
      "engender",
      "reprimand"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Our _____ has new air conditioners this year, so it is much easier to concentrate on hot afternoons.",
    "options": [
      "classroom",
      "research",
      "expectation",
      "peer"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Before the new semester, students crowd into _____ shops, and they buy colourful pens, notebooks and sticky notes.",
    "options": [
      "candidate",
      "admission",
      "stationery",
      "pedagogy"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "I took my test paper to the _____ after lunch, because I wanted to ask my teacher about one question.",
    "options": [
      "examiner",
      "research",
      "note-taking",
      "staffroom"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Most high schools in Taiwan are now _____, but some traditional schools still accept only boys or only girls.",
    "options": [
      "co-educational",
      "esoteric",
      "talented",
      "erudite"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "My mother studied at a _____ school for girls, and she says it helped her feel confident in science classes.",
    "options": [
      "fastidious",
      "single-sex",
      "one-to-one",
      "adaptable"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "In Britain most children go to a _____, while a small number of families pay for private education.",
    "options": [
      "slow learner",
      "past paper",
      "state school",
      "blended learning"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The _____ fixed the broken window before school started, so our lesson was not interrupted by the cold wind.",
    "options": [
      "seminar",
      "internship",
      "candidate",
      "janitor"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The school relaxed its _____ last year, so students can now wear sports clothes on hot days.",
    "options": [
      "dress code",
      "crib sheet",
      "higher education",
      "gap year"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "My father went to his high school _____ last weekend, and he was surprised that many classmates had become teachers.",
    "options": [
      "plethora",
      "reunion",
      "examiner",
      "precedent"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "kindergarten": {
    "pos": "n.",
    "en_def": "a school for children aged about three to six",
    "cn_def": "幼兒園"
  },
  "preschool": {
    "pos": "n.",
    "en_def": "a school for young children before primary school",
    "cn_def": "學前教育機構；幼稚園"
  },
  "elementary": {
    "pos": "adj.",
    "en_def": "about the first, simplest stage of school or learning",
    "cn_def": "初級的；小學的"
  },
  "boarding school": {
    "pos": "n.phr.",
    "en_def": "a school where students live and sleep during the term",
    "cn_def": "寄宿學校"
  },
  "headteacher": {
    "pos": "n.",
    "en_def": "the teacher who is in charge of a school",
    "cn_def": "校長"
  },
  "classmate": {
    "pos": "n.",
    "en_def": "a person in the same class as you at school",
    "cn_def": "同班同學"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outdoor area at school where children play",
    "cn_def": "遊樂場；操場"
  },
  "cafeteria": {
    "pos": "n.",
    "en_def": "a place in a school where students buy and eat food",
    "cn_def": "自助餐廳；學生餐廳"
  },
  "locker": {
    "pos": "n.",
    "en_def": "a small metal cupboard where students keep their things",
    "cn_def": "置物櫃"
  },
  "dormitory": {
    "pos": "n.",
    "en_def": "a large building where students live and sleep",
    "cn_def": "宿舍"
  },
  "semester": {
    "pos": "n.",
    "en_def": "one of the two main periods in a school year",
    "cn_def": "學期"
  },
  "recess": {
    "pos": "n.",
    "en_def": "a short break between lessons at school",
    "cn_def": "下課時間"
  },
  "attendance": {
    "pos": "n.",
    "en_def": "how often someone is present at school or class",
    "cn_def": "出席；出席率"
  },
  "absent": {
    "pos": "adj.",
    "en_def": "not at school or work when you should be",
    "cn_def": "缺席的"
  },
  "truancy": {
    "pos": "n.",
    "en_def": "staying away from school without permission",
    "cn_def": "逃學；曠課"
  },
  "expel": {
    "pos": "v.",
    "en_def": "to officially make a student leave a school",
    "cn_def": "開除；退學"
  },
  "detention": {
    "pos": "n.",
    "en_def": "a punishment where a student must stay after school",
    "cn_def": "課後留校（處罰）"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or doing something at the right time",
    "cn_def": "準時的"
  },
  "extracurricular": {
    "pos": "adj.",
    "en_def": "done at school but not part of normal lessons",
    "cn_def": "課外的"
  },
  "field trip": {
    "pos": "n.phr.",
    "en_def": "a visit made by students to learn outside school",
    "cn_def": "校外教學"
  },
  "assembly": {
    "pos": "n.",
    "en_def": "a meeting of all the students and teachers in a school",
    "cn_def": "朝會；集會"
  },
  "orientation": {
    "pos": "n.",
    "en_def": "a time of introduction for new students",
    "cn_def": "新生訓練；入門介紹"
  },
  "alumni": {
    "pos": "n.",
    "en_def": "former students of a school or university",
    "cn_def": "校友（複數）"
  },
  "homeroom": {
    "pos": "n.",
    "en_def": "the class where students meet their main teacher each day",
    "cn_def": "導師班；班級教室"
  },
  "bully": {
    "pos": "v.",
    "en_def": "to hurt or frighten someone weaker again and again",
    "cn_def": "霸凌；欺負"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room where lessons take place",
    "cn_def": "教室"
  },
  "stationery": {
    "pos": "n.",
    "en_def": "pens, paper, rulers and other things for writing",
    "cn_def": "文具"
  },
  "staffroom": {
    "pos": "n.",
    "en_def": "a room in a school where teachers work and rest",
    "cn_def": "教師辦公室"
  },
  "co-educational": {
    "pos": "adj.",
    "en_def": "for both boys and girls together",
    "cn_def": "男女合校的"
  },
  "single-sex": {
    "pos": "adj.",
    "en_def": "only for boys or only for girls",
    "cn_def": "單一性別的"
  },
  "state school": {
    "pos": "n.phr.",
    "en_def": "a school paid for by the government",
    "cn_def": "公立學校"
  },
  "janitor": {
    "pos": "n.",
    "en_def": "a person who cleans and looks after a school building",
    "cn_def": "校工；工友"
  },
  "dress code": {
    "pos": "n.phr.",
    "en_def": "rules about what clothes people may wear",
    "cn_def": "服裝規定"
  },
  "reunion": {
    "pos": "n.",
    "en_def": "a meeting of people who have not seen each other for a long time",
    "cn_def": "重聚；同學會"
  },
  "transcript": {
    "pos": "n.",
    "en_def": "an official record of a student's courses and results",
    "cn_def": "成績單"
  },
  "expectation": {
    "pos": "n.",
    "en_def": "a belief about what someone should achieve",
    "cn_def": "期望"
  },
  "ingenuity": {
    "pos": "n.",
    "en_def": "skill in thinking of clever new ideas",
    "cn_def": "巧思；創造力"
  },
  "freshman": {
    "pos": "n.",
    "en_def": "a student in the first year of high school or university",
    "cn_def": "新鮮人；一年級新生"
  },
  "privilege": {
    "pos": "n.",
    "en_def": "a special advantage that only some people have",
    "cn_def": "特權；優勢"
  },
  "projector": {
    "pos": "n.",
    "en_def": "a machine that shows pictures or slides on a screen",
    "cn_def": "投影機"
  },
  "apt": {
    "pos": "adj.",
    "en_def": "suitable or right for a situation",
    "cn_def": "恰當的"
  },
  "illustrious": {
    "pos": "adj.",
    "en_def": "famous and admired because of great achievements",
    "cn_def": "傑出的；顯赫的"
  },
  "verbose": {
    "pos": "adj.",
    "en_def": "using more words than are needed",
    "cn_def": "冗長的；囉唆的"
  },
  "gap year": {
    "pos": "n.phr.",
    "en_def": "a year off between school and university",
    "cn_def": "空檔年"
  },
  "student teacher": {
    "pos": "n.phr.",
    "en_def": "a person who is training to become a teacher",
    "cn_def": "實習教師"
  },
  "marking scheme": {
    "pos": "n.phr.",
    "en_def": "the official guide for scoring an exam",
    "cn_def": "評分標準"
  },
  "acumen": {
    "pos": "n.",
    "en_def": "the ability to make good, quick judgements",
    "cn_def": "敏銳；精明"
  },
  "tenet": {
    "pos": "n.",
    "en_def": "a main principle or belief",
    "cn_def": "原則；信條"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person with extraordinary ability",
    "cn_def": "神童"
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
  "humanities": {
    "pos": "n.",
    "en_def": "subjects such as history, literature and philosophy",
    "cn_def": "人文學科"
  },
  "doctrine": {
    "pos": "n.",
    "en_def": "a set of beliefs taught by a group",
    "cn_def": "學說；教義"
  },
  "internship": {
    "pos": "n.",
    "en_def": "a short period of work to gain experience",
    "cn_def": "實習"
  },
  "calibre": {
    "pos": "n.",
    "en_def": "the level of quality or ability",
    "cn_def": "才幹；水準"
  },
  "accolade": {
    "pos": "n.",
    "en_def": "praise or an award for an achievement",
    "cn_def": "讚譽；獎項"
  },
  "dictionary": {
    "pos": "n.",
    "en_def": "a book or app that explains the meanings of words",
    "cn_def": "字典"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a senior teacher at a university",
    "cn_def": "教授"
  },
  "metacognition": {
    "pos": "n.",
    "en_def": "thinking about how you think and learn",
    "cn_def": "後設認知"
  },
  "dropout": {
    "pos": "n.",
    "en_def": "a person who leaves school before finishing",
    "cn_def": "輟學生"
  },
  "credit": {
    "pos": "n.",
    "en_def": "a unit that shows a student has completed part of a course",
    "cn_def": "學分"
  },
  "deference": {
    "pos": "n.",
    "en_def": "polite respect for someone's opinion or position",
    "cn_def": "尊重；敬意"
  },
  "dissertation": {
    "pos": "n.",
    "en_def": "a long piece of writing done for a university degree",
    "cn_def": "學位論文"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "a set of comments explaining or judging something",
    "cn_def": "評論；解說"
  },
  "glossary": {
    "pos": "n.",
    "en_def": "a list of difficult words with their meanings, often at the end of a book",
    "cn_def": "詞彙表"
  },
  "examiner": {
    "pos": "n.",
    "en_def": "a person who sets or marks an exam, or tests speaking",
    "cn_def": "主考官；閱卷人"
  },
  "archaic": {
    "pos": "adj.",
    "en_def": "very old and no longer used",
    "cn_def": "古老的；已不使用的"
  },
  "postgraduate": {
    "pos": "adj.",
    "en_def": "relating to study after a first degree",
    "cn_def": "研究所的"
  },
  "punitive": {
    "pos": "adj.",
    "en_def": "intended as punishment",
    "cn_def": "懲罰性的"
  },
  "doctorate": {
    "pos": "n.",
    "en_def": "the highest university degree, also called a PhD",
    "cn_def": "博士學位"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "training people to obey rules and control behaviour",
    "cn_def": "紀律；管教"
  },
  "spoon-feed": {
    "pos": "v.",
    "en_def": "to give students answers so they do not think for themselves",
    "cn_def": "填鴨式餵答案；過度灌輸"
  },
  "exasperate": {
    "pos": "v.",
    "en_def": "to make someone very annoyed",
    "cn_def": "激怒；使惱火"
  },
  "deride": {
    "pos": "v.",
    "en_def": "to laugh at someone in an unkind way",
    "cn_def": "嘲笑"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for education",
    "cn_def": "獎學金"
  },
  "bureaucracy": {
    "pos": "n.",
    "en_def": "a system with many complicated official rules",
    "cn_def": "官僚制度；繁文縟節"
  },
  "major": {
    "pos": "n.",
    "en_def": "the main subject a university student studies",
    "cn_def": "主修"
  },
  "precocious": {
    "pos": "adj.",
    "en_def": "developing skills much earlier than usual",
    "cn_def": "早熟的"
  },
  "nominal": {
    "pos": "adj.",
    "en_def": "very small, much less than the real value",
    "cn_def": "象徵性的；極少的"
  },
  "conversant": {
    "pos": "adj.",
    "en_def": "having knowledge of something",
    "cn_def": "熟悉的；精通的"
  },
  "amenable": {
    "pos": "adj.",
    "en_def": "willing to accept or be influenced by ideas",
    "cn_def": "願意接受的"
  },
  "one-to-one": {
    "pos": "adj.",
    "en_def": "between one teacher and one student",
    "cn_def": "一對一的"
  },
  "lesson plan": {
    "pos": "n.phr.",
    "en_def": "a teacher's written plan for one class",
    "cn_def": "教案"
  },
  "student loan": {
    "pos": "n.phr.",
    "en_def": "money borrowed to pay for university, paid back later",
    "cn_def": "學生貸款"
  },
  "study group": {
    "pos": "n.phr.",
    "en_def": "a small group of students who learn together",
    "cn_def": "讀書會"
  },
  "rapport": {
    "pos": "n.",
    "en_def": "a friendly relationship of trust and understanding",
    "cn_def": "融洽關係"
  },
  "pace": {
    "pos": "n.",
    "en_def": "the speed at which something happens",
    "cn_def": "速度；步調"
  },
  "ranking": {
    "pos": "n.",
    "en_def": "a position in a list showing who is better or worse",
    "cn_def": "排名"
  },
  "extension": {
    "pos": "n.",
    "en_def": "extra time given to finish a piece of work",
    "cn_def": "延期；延長期限"
  },
  "diploma": {
    "pos": "n.",
    "en_def": "a document showing you have completed a course",
    "cn_def": "文憑；畢業證書"
  },
  "meritocracy": {
    "pos": "n.",
    "en_def": "a system where people succeed because of ability and hard work",
    "cn_def": "功績主義；菁英制度"
  },
  "engender": {
    "pos": "v.",
    "en_def": "to cause a feeling or situation to exist",
    "cn_def": "引起；產生"
  },
  "reprimand": {
    "pos": "v.",
    "en_def": "to tell someone officially that they did wrong",
    "cn_def": "斥責；訓誡"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to discover new facts",
    "cn_def": "研究"
  },
  "peer": {
    "pos": "n.",
    "en_def": "a person of the same age or level as you",
    "cn_def": "同儕"
  },
  "candidate": {
    "pos": "n.",
    "en_def": "a person who is taking an exam",
    "cn_def": "考生；應試者"
  },
  "admission": {
    "pos": "n.",
    "en_def": "permission to join a school or university",
    "cn_def": "入學許可；錄取"
  },
  "pedagogy": {
    "pos": "n.",
    "en_def": "the methods and practice of teaching",
    "cn_def": "教學法"
  },
  "note-taking": {
    "pos": "n.",
    "en_def": "writing down the key points while listening or reading",
    "cn_def": "做筆記"
  },
  "esoteric": {
    "pos": "adj.",
    "en_def": "understood only by a small group of experts",
    "cn_def": "深奧的；冷門難懂的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "erudite": {
    "pos": "adj.",
    "en_def": "having a great deal of knowledge from reading",
    "cn_def": "博學的"
  },
  "fastidious": {
    "pos": "adj.",
    "en_def": "very careful about details and wanting things perfect",
    "cn_def": "一絲不苟的；挑剔的"
  },
  "adaptable": {
    "pos": "adj.",
    "en_def": "able to change to suit new situations",
    "cn_def": "適應力強的"
  },
  "slow learner": {
    "pos": "n.phr.",
    "en_def": "a student who needs more time to learn",
    "cn_def": "學習較慢的學生"
  },
  "past paper": {
    "pos": "n.phr.",
    "en_def": "an exam from a previous year used for practice",
    "cn_def": "考古題"
  },
  "blended learning": {
    "pos": "n.phr.",
    "en_def": "a mix of online learning and classroom teaching",
    "cn_def": "混成學習"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a small class where students discuss a subject with a teacher",
    "cn_def": "研討課；專題討論"
  },
  "crib sheet": {
    "pos": "n.phr.",
    "en_def": "a small hidden paper with answers used to cheat",
    "cn_def": "小抄"
  },
  "higher education": {
    "pos": "n.phr.",
    "en_def": "education at university or college",
    "cn_def": "高等教育"
  },
  "plethora": {
    "pos": "n.",
    "en_def": "a very large amount, often too much",
    "cn_def": "過多；大量"
  },
  "precedent": {
    "pos": "n.",
    "en_def": "an earlier event used as an example for later decisions",
    "cn_def": "先例"
  }
};

const EXTRA_GLOSSES = {};
