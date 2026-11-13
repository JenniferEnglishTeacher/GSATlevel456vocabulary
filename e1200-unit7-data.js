// Unit 7 Quiz Data: Numbers 數字（第07區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U07 - Numbers",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "one",
    "pos": "num.",
    "cn_def": "一",
    "en_def": "the number 1",
    "sentence": "Q: How many noses are there on your face? — A: There is only {{BLANK}} nose.",
    "cn": "你臉上有幾個鼻子？ — 只有一個鼻子。"
  },
  {
    "word": "two",
    "pos": "num.",
    "cn_def": "二",
    "en_def": "the number 2",
    "sentence": "Q: How many eyes are there on your face? — A: There are {{BLANK}} eyes.",
    "cn": "你臉上有幾隻眼睛？ — 有兩隻眼睛。"
  },
  {
    "word": "three",
    "pos": "num.",
    "cn_def": "三",
    "en_def": "the number 3",
    "sentence": "Q: How many people are there in your family? — A: There are {{BLANK}}: my dad, my mom and me.",
    "cn": "你家有幾個人？ — 有三個：我爸爸、我媽媽和我。"
  },
  {
    "word": "four",
    "pos": "num.",
    "cn_def": "四",
    "en_def": "the number 4",
    "sentence": "Q: How many seasons are there in a year? — A: There are {{BLANK}} seasons.",
    "cn": "一年有幾個季節？ — 有四個季節。"
  },
  {
    "word": "five",
    "pos": "num.",
    "cn_def": "五",
    "en_def": "the number 5",
    "sentence": "Q: How many fingers are there on one hand? — A: There are {{BLANK}} fingers.",
    "cn": "一隻手上有幾根手指？ — 有五根手指。"
  },
  {
    "word": "seven",
    "pos": "num.",
    "cn_def": "七",
    "en_def": "the number 7",
    "sentence": "Q: How many days are there in a week? — A: There are {{BLANK}} days.",
    "cn": "一個星期有幾天？ — 有七天。"
  },
  {
    "word": "eight",
    "pos": "num.",
    "cn_def": "八",
    "en_def": "the number 8",
    "sentence": "Q: How many legs are there on a spider? — A: There are {{BLANK}} legs.",
    "cn": "一隻蜘蛛有幾隻腳？ — 有八隻腳。"
  },
  {
    "word": "ten",
    "pos": "num.",
    "cn_def": "十",
    "en_def": "the number 10",
    "sentence": "Q: How many fingers are there on your two hands? — A: There are {{BLANK}} fingers.",
    "cn": "你的兩隻手上有幾根手指？ — 有十根手指。"
  },
  {
    "word": "twelve",
    "pos": "num.",
    "cn_def": "十二",
    "en_def": "the number 12",
    "sentence": "Q: How many months are there in a year? — A: There are {{BLANK}} months.",
    "cn": "一年有幾個月？ — 有十二個月。"
  },
  {
    "word": "twenty",
    "pos": "num.",
    "cn_def": "二十",
    "en_def": "the number 20",
    "sentence": "Q: How many students are there in your class? — A: There are {{BLANK}} students: ten boys and ten girls.",
    "cn": "你們班上有幾個學生？ — 有二十個學生：十個男生和十個女生。"
  },
  {
    "word": "thirty",
    "pos": "num.",
    "cn_def": "三十",
    "en_def": "the number 30",
    "sentence": "Q: How many days are there in June? — A: There are {{BLANK}} days.",
    "cn": "六月有幾天？ — 有三十天。"
  },
  {
    "word": "sixty",
    "pos": "num.",
    "cn_def": "六十",
    "en_def": "the number 60",
    "sentence": "Q: How many minutes are there in an hour? — A: There are {{BLANK}} minutes.",
    "cn": "一小時有幾分鐘？ — 有六十分鐘。"
  },
  {
    "word": "hundred",
    "pos": "num.",
    "cn_def": "百",
    "en_def": "the number 100",
    "sentence": "Q: How many pages are there in your English book? — A: There are one {{BLANK}} pages.",
    "cn": "你的英文書有幾頁？ — 有一百頁。"
  },
  {
    "word": "thousand",
    "pos": "num.",
    "cn_def": "千",
    "en_def": "the number 1,000",
    "sentence": "Q: How many students are there in your school? — A: There are two {{BLANK}} students. It's a big school.",
    "cn": "你們學校有多少學生？ — 有兩千個學生，這是一所大學校。"
  },
  {
    "word": "million",
    "pos": "num.",
    "cn_def": "百萬",
    "en_def": "the number 1,000,000",
    "sentence": "Q: How many people are there in Taipei? — A: There are more than two {{BLANK}} people.",
    "cn": "台北有多少人？ — 有超過兩百萬人。"
  },
  {
    "word": "six",
    "pos": "num.",
    "cn_def": "六",
    "en_def": "the number 6",
    "sentence": "Q: How old is your little brother? — A: He is {{BLANK}} years old. He goes to elementary school.",
    "cn": "你弟弟幾歲？ — 他六歲，他上小學。"
  },
  {
    "word": "nine",
    "pos": "num.",
    "cn_def": "九",
    "en_def": "the number 9",
    "sentence": "Q: How old is Amy's cat? — A: It is {{BLANK}} years old. It's an old cat.",
    "cn": "艾美的貓幾歲？ — 牠九歲了，牠是一隻老貓。"
  },
  {
    "word": "eleven",
    "pos": "num.",
    "cn_def": "十一",
    "en_def": "the number 11",
    "sentence": "Q: How old are Ben and Lily? — A: They are {{BLANK}} years old. They are in the same class.",
    "cn": "班和莉莉幾歲？ — 他們十一歲，他們同班。"
  },
  {
    "word": "thirteen",
    "pos": "num.",
    "cn_def": "十三",
    "en_def": "the number 13",
    "sentence": "Q: How old are you? — A: I am {{BLANK}} years old. I'm in junior high school.",
    "cn": "你幾歲？ — 我十三歲，我讀國中。"
  },
  {
    "word": "fourteen",
    "pos": "num.",
    "cn_def": "十四",
    "en_def": "the number 14",
    "sentence": "Q: How old is your cousin? — A: She is {{BLANK}}. She is one year older than me.",
    "cn": "你表姊幾歲？ — 她十四歲，她比我大一歲。"
  },
  {
    "word": "fifteen",
    "pos": "num.",
    "cn_def": "十五",
    "en_def": "the number 15",
    "sentence": "Q: How old is Tom? — A: He is {{BLANK}} years old. He is a teenager.",
    "cn": "湯姆幾歲？ — 他十五歲，他是青少年。"
  },
  {
    "word": "sixteen",
    "pos": "num.",
    "cn_def": "十六",
    "en_def": "the number 16",
    "sentence": "Q: How old is your sister? — A: She is {{BLANK}}. She goes to senior high school.",
    "cn": "你姊姊幾歲？ — 她十六歲，她讀高中。"
  },
  {
    "word": "eighteen",
    "pos": "num.",
    "cn_def": "十八",
    "en_def": "the number 18",
    "sentence": "Q: How old is your brother? — A: He is {{BLANK}} years old. He can drive a car now.",
    "cn": "你哥哥幾歲？ — 他十八歲，他現在可以開車了。"
  },
  {
    "word": "nineteen",
    "pos": "num.",
    "cn_def": "十九",
    "en_def": "the number 19",
    "sentence": "Q: How old is Mary? — A: She is {{BLANK}}. She will be twenty next year.",
    "cn": "瑪麗幾歲？ — 她十九歲，她明年就二十歲了。"
  },
  {
    "word": "forty",
    "pos": "num.",
    "cn_def": "四十",
    "en_def": "the number 40",
    "sentence": "Q: How old is your father? — A: He is {{BLANK}} years old. He looks young.",
    "cn": "你爸爸幾歲？ — 他四十歲，他看起來很年輕。"
  },
  {
    "word": "seventy",
    "pos": "num.",
    "cn_def": "七十",
    "en_def": "the number 70",
    "sentence": "Q: How old is your grandfather? — A: He is {{BLANK}} years old, but he is still strong.",
    "cn": "你爺爺幾歲？ — 他七十歲，但他還是很強壯。"
  },
  {
    "word": "eighty",
    "pos": "num.",
    "cn_def": "八十",
    "en_def": "the number 80",
    "sentence": "Q: How old is your grandmother? — A: She is {{BLANK}} years old. She walks slowly.",
    "cn": "你奶奶幾歲？ — 她八十歲，她走路很慢。"
  },
  {
    "word": "ninety",
    "pos": "num.",
    "cn_def": "九十",
    "en_def": "the number 90",
    "sentence": "Q: How old is that old man? — A: He is {{BLANK}} years old. He lives next to us.",
    "cn": "那位老先生幾歲？ — 他九十歲，他住在我們隔壁。"
  },
  {
    "word": "zero",
    "pos": "num.",
    "cn_def": "零",
    "en_def": "the number 0",
    "sentence": "Q: What's five minus five? — A: It's {{BLANK}}.",
    "cn": "五減五是多少？ — 是零。"
  },
  {
    "word": "seventeen",
    "pos": "num.",
    "cn_def": "十七",
    "en_def": "the number 17",
    "sentence": "Q: What's ten plus seven? — A: It's {{BLANK}}.",
    "cn": "十加七是多少？ — 是十七。"
  },
  {
    "word": "fifty",
    "pos": "num.",
    "cn_def": "五十",
    "en_def": "the number 50",
    "sentence": "Q: What's twenty plus thirty? — A: It's {{BLANK}}.",
    "cn": "二十加三十是多少？ — 是五十。"
  },
  {
    "word": "number",
    "pos": "n.",
    "cn_def": "數字；號碼",
    "en_def": "a word or sign like 1, 2, or 3 that shows how many",
    "sentence": "Q: What's nine plus four? — A: It's thirteen. It's my lucky {{BLANK}}!",
    "cn": "九加四是多少？ — 是十三，那是我的幸運數字！"
  },
  {
    "word": "total",
    "pos": "n.",
    "cn_def": "總數；總計",
    "en_def": "the whole number when you add everything together",
    "sentence": "Q: What's two hundred plus three hundred? — A: It's five hundred. The {{BLANK}} is five hundred dollars.",
    "cn": "兩百加三百是多少？ — 是五百，總共是五百元。"
  },
  {
    "word": "first",
    "pos": "num.",
    "cn_def": "第一（的）",
    "en_def": "coming before all the others; number 1 in order",
    "sentence": "Q: Which floor does your grandma live on? — A: She lives on the {{BLANK}} floor. She can't walk up the stairs.",
    "cn": "你奶奶住幾樓？ — 她住一樓，她不能爬樓梯。"
  },
  {
    "word": "second",
    "pos": "num.",
    "cn_def": "第二（的）",
    "en_def": "coming after the first; number 2 in order",
    "sentence": "Q: Which floor do you live on? — A: I live on the {{BLANK}} floor.",
    "cn": "你住幾樓？ — 我住二樓。"
  },
  {
    "word": "third",
    "pos": "num.",
    "cn_def": "第三（的）",
    "en_def": "coming after the second; number 3 in order",
    "sentence": "Q: Which floor do Ben and his parents live on? — A: They live on the {{BLANK}} floor.",
    "cn": "班和他的父母住幾樓？ — 他們住三樓。"
  },
  {
    "word": "fourth",
    "pos": "num.",
    "cn_def": "第四（的）",
    "en_def": "coming after the third; number 4 in order",
    "sentence": "Q: Which floor does Tom live on? — A: He lives on the {{BLANK}} floor, above us.",
    "cn": "湯姆住幾樓？ — 他住四樓，在我們樓上。"
  },
  {
    "word": "fifth",
    "pos": "num.",
    "cn_def": "第五（的）",
    "en_def": "coming after the fourth; number 5 in order",
    "sentence": "Q: Which floor do your cousins live on? — A: They live on the {{BLANK}} floor.",
    "cn": "你的表兄弟姊妹住幾樓？ — 他們住五樓。"
  },
  {
    "word": "eighth",
    "pos": "num.",
    "cn_def": "第八（的）",
    "en_def": "coming after the seventh; number 8 in order",
    "sentence": "Q: Which floor does your uncle work on? — A: He works on the {{BLANK}} floor of that building.",
    "cn": "你叔叔在幾樓上班？ — 他在那棟大樓的八樓上班。"
  },
  {
    "word": "ninth",
    "pos": "num.",
    "cn_def": "第九（的）",
    "en_def": "coming after the eighth; number 9 in order",
    "sentence": "Q: Which floor do you and your family live on? — A: We live on the {{BLANK}} floor. We can see the park.",
    "cn": "你和你的家人住幾樓？ — 我們住九樓，我們可以看到公園。"
  },
  {
    "word": "eleventh",
    "pos": "num.",
    "cn_def": "第十一（的）",
    "en_def": "coming after the tenth; number 11 in order",
    "sentence": "Q: When does Amy have her birthday party? — A: She has it on the {{BLANK}} of May.",
    "cn": "艾美什麼時候辦生日派對？ — 她在五月十一日辦。"
  },
  {
    "word": "fourteenth",
    "pos": "num.",
    "cn_def": "第十四（的）",
    "en_def": "coming after the thirteenth; number 14 in order",
    "sentence": "Q: What's the date today? — A: It's the {{BLANK}} of February.",
    "cn": "今天幾月幾日？ — 今天是二月十四日。"
  },
  {
    "word": "fifteenth",
    "pos": "num.",
    "cn_def": "第十五（的）",
    "en_def": "coming after the fourteenth; number 15 in order",
    "sentence": "Q: When do the students have the English test? — A: They have it on the {{BLANK}} of June.",
    "cn": "學生們什麼時候考英文？ — 他們六月十五日考。"
  },
  {
    "word": "nineteenth",
    "pos": "num.",
    "cn_def": "第十九（的）",
    "en_def": "coming after the eighteenth; number 19 in order",
    "sentence": "Q: When does your brother come home from America? — A: He comes home on the {{BLANK}} of July.",
    "cn": "你哥哥什麼時候從美國回家？ — 他七月十九日回家。"
  },
  {
    "word": "last",
    "pos": "adj.",
    "cn_def": "最後的",
    "en_def": "coming after all the others",
    "sentence": "Q: When do we have the school party? — A: We have it on the {{BLANK}} day of this month.",
    "cn": "我們什麼時候辦學校派對？ — 我們在這個月的最後一天辦。"
  },
  {
    "word": "many",
    "pos": "adj.",
    "cn_def": "許多的（可數）",
    "en_def": "a large number of (things you can count)",
    "sentence": "Q: How many friends does Amy have? — A: She has {{BLANK}} friends. She is very friendly.",
    "cn": "艾美有幾個朋友？ — 她有很多朋友，她很友善。"
  },
  {
    "word": "a lot (of)",
    "pos": "phr.",
    "cn_def": "許多的",
    "en_def": "a large number or amount of",
    "sentence": "Q: How many books do your parents have? — A: They have {{BLANK}} books. They love reading.",
    "cn": "你的父母有多少書？ — 他們有很多書，他們很愛閱讀。",
    "nblanks": 3
  },
  {
    "word": "much",
    "pos": "adj.",
    "cn_def": "許多的（不可數）",
    "en_def": "a large amount of (something you cannot count)",
    "sentence": "Q: How much time do you have today? — A: I don't have {{BLANK}} time. I have a test tomorrow.",
    "cn": "你今天有多少時間？ — 我沒有很多時間，我明天有考試。"
  },
  {
    "word": "several",
    "pos": "adj.",
    "cn_def": "幾個的",
    "en_def": "more than two but not many",
    "sentence": "Q: How many friends do you have in Tainan? — A: I have {{BLANK}} friends there.",
    "cn": "你在台南有幾個朋友？ — 我在那裡有幾個朋友。"
  },
  {
    "word": "some",
    "pos": "adj.",
    "cn_def": "一些",
    "en_def": "a number or amount of something, not all",
    "sentence": "Q: How much water do you want? — A: I want {{BLANK}} water. I'm thirsty.",
    "cn": "你想要多少水？ — 我想要一些水，我口渴了。"
  },
  {
    "word": "a few",
    "pos": "phr.",
    "cn_def": "一些；幾個（可數）",
    "en_def": "a small number of (things you can count)",
    "sentence": "Q: How many apples do we have? — A: We only have {{BLANK}} apples. Let's buy some more.",
    "cn": "我們有幾顆蘋果？ — 我們只有幾顆蘋果，我們再買一些吧。",
    "nblanks": 2
  },
  {
    "word": "a little",
    "pos": "phr.",
    "cn_def": "一點點（不可數）",
    "en_def": "a small amount of (something you cannot count)",
    "sentence": "Q: How much milk does Ben want? — A: He wants {{BLANK}} milk, not a lot.",
    "cn": "班想要多少牛奶？ — 他想要一點點牛奶，不要很多。",
    "nblanks": 2
  },
  {
    "word": "few",
    "pos": "adj.",
    "cn_def": "很少的（可數）",
    "en_def": "not many",
    "sentence": "Q: How many friends does the new student have? — A: He has very {{BLANK}} friends. He feels lonely.",
    "cn": "那個新同學有幾個朋友？ — 他的朋友很少，他覺得很寂寞。"
  },
  {
    "word": "little",
    "pos": "adj.",
    "cn_def": "很少的（不可數）",
    "en_def": "not much",
    "sentence": "Q: How much money does your brother have? — A: He has very {{BLANK}} money. He can't buy the toy.",
    "cn": "你弟弟有多少錢？ — 他的錢很少，他買不起那個玩具。"
  },
  {
    "word": "any",
    "pos": "adj.",
    "cn_def": "任何的",
    "en_def": "one or some, no matter which; used in questions and with \"not\"",
    "sentence": "Q: How many brothers does Tim have? — A: He doesn't have {{BLANK}} brothers. He has two sisters.",
    "cn": "提姆有幾個兄弟？ — 他沒有任何兄弟，他有兩個姊妹。"
  },
  {
    "word": "all",
    "pos": "pron.",
    "cn_def": "全部；都",
    "en_def": "every one; the whole of something",
    "sentence": "Q: Do your classmates like the new teacher? — A: Yes, they do. {{BLANK}} of them like her.",
    "cn": "你的同學喜歡新老師嗎？ — 是的，他們喜歡。他們全部都喜歡她。"
  },
  {
    "word": "both",
    "pos": "pron.",
    "cn_def": "兩者都",
    "en_def": "the two; one and also the other",
    "sentence": "Q: Does Ken have any brothers? — A: Yes, he does. He has two, and {{BLANK}} of them play basketball.",
    "cn": "肯有兄弟嗎？ — 是的，他有。他有兩個，他們兩個都打籃球。"
  },
  {
    "word": "more",
    "pos": "adj.",
    "cn_def": "更多的",
    "en_def": "a bigger number or amount",
    "sentence": "Q: How much rice does your dad want? — A: He wants {{BLANK}} rice. He is still hungry.",
    "cn": "你爸爸想要多少飯？ — 他想要更多飯，他還很餓。"
  },
  {
    "word": "less",
    "pos": "adj.",
    "cn_def": "較少的",
    "en_def": "a smaller amount",
    "sentence": "Q: How much sugar do your grandparents eat now? — A: They eat {{BLANK}} sugar now. It's good for their health.",
    "cn": "你的祖父母現在吃多少糖？ — 他們現在吃比較少的糖，這對他們的健康有好處。"
  }
];

const MCQS = [
  {
    "q": "A week has seven days, but a person has only ______ nose. It is in the middle of the face.",
    "options": [
      "two",
      "one",
      "five",
      "ten"
    ],
    "answer": 1,
    "cn": "你臉上有幾個鼻子？ — 只有一個鼻子。",
    "vocabIndex": 0
  },
  {
    "q": "People have ______ hands and ten fingers. We use them to hold, carry, and make things.",
    "options": [
      "three",
      "six",
      "nine",
      "two"
    ],
    "answer": 3,
    "cn": "你臉上有幾隻眼睛？ — 有兩隻眼睛。",
    "vocabIndex": 1
  },
  {
    "q": "There are ______ people in my family: my father, my mother, and me. We live in a small apartment.",
    "options": [
      "two",
      "five",
      "three",
      "eight"
    ],
    "answer": 2,
    "cn": "你家有幾個人？ — 有三個：我爸爸、我媽媽和我。",
    "vocabIndex": 2
  },
  {
    "q": "A dog has ______ legs, but a bird has only two. That is why a dog can run so fast.",
    "options": [
      "four",
      "three",
      "six",
      "eight"
    ],
    "answer": 0,
    "cn": "一年有幾個季節？ — 有四個季節。",
    "vocabIndex": 3
  },
  {
    "q": "You have ______ fingers on each hand. Together, your two hands have ten fingers.",
    "options": [
      "four",
      "six",
      "seven",
      "five"
    ],
    "answer": 3,
    "cn": "一隻手上有幾根手指？ — 有五根手指。",
    "vocabIndex": 4
  },
  {
    "q": "There are ______ days in a week. They are Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.",
    "options": [
      "seven",
      "five",
      "six",
      "eight"
    ],
    "answer": 0,
    "cn": "一個星期有幾天？ — 有七天。",
    "vocabIndex": 5
  },
  {
    "q": "A spider has ______ legs, so it is not an insect. Insects like ants and bees have only six.",
    "options": [
      "four",
      "eight",
      "ten",
      "twelve"
    ],
    "answer": 1,
    "cn": "一隻蜘蛛有幾隻腳？ — 有八隻腳。",
    "vocabIndex": 6
  },
  {
    "q": "Five plus five is ______. You can check the answer by counting all the fingers on your two hands.",
    "options": [
      "eight",
      "nine",
      "ten",
      "twelve"
    ],
    "answer": 2,
    "cn": "你的兩隻手上有幾根手指？ — 有十根手指。",
    "vocabIndex": 7
  },
  {
    "q": "There are ______ months in a year. The first one is January, and the last one is December.",
    "options": [
      "twelve",
      "ten",
      "eleven",
      "twenty"
    ],
    "answer": 0,
    "cn": "一年有幾個月？ — 有十二個月。",
    "vocabIndex": 8
  },
  {
    "q": "Ten plus ten is ______. That is also the number of all your fingers and toes together.",
    "options": [
      "twelve",
      "thirty",
      "twenty",
      "sixty"
    ],
    "answer": 2,
    "cn": "你們班上有幾個學生？ — 有二十個學生：十個男生和十個女生。",
    "vocabIndex": 9
  },
  {
    "q": "There are ______ days in April, June, September, and November. The other months have more or fewer days.",
    "options": [
      "twenty",
      "thirty",
      "sixty",
      "twelve"
    ],
    "answer": 1,
    "cn": "六月有幾天？ — 有三十天。",
    "vocabIndex": 10
  },
  {
    "q": "There are ______ minutes in an hour, and there is the same number of seconds in a minute.",
    "options": [
      "thirty",
      "forty",
      "fifty",
      "sixty"
    ],
    "answer": 3,
    "cn": "一小時有幾分鐘？ — 有六十分鐘。",
    "vocabIndex": 11
  },
  {
    "q": "There are one ______ cents in a dollar, so fifty cents is half of a dollar.",
    "options": [
      "thousand",
      "million",
      "hundred",
      "zero"
    ],
    "answer": 2,
    "cn": "你的英文書有幾頁？ — 有一百頁。",
    "vocabIndex": 12
  },
  {
    "q": "Ten hundred is one ______. We write this number as a one with three zeros after it.",
    "options": [
      "thousand",
      "hundred",
      "million",
      "twenty"
    ],
    "answer": 0,
    "cn": "你們學校有多少學生？ — 有兩千個學生，這是一所大學校。",
    "vocabIndex": 13
  },
  {
    "q": "A ______ is a very big number. We write it as a one with six zeros: 1,000,000.",
    "options": [
      "hundred",
      "million",
      "thousand",
      "ninety"
    ],
    "answer": 1,
    "cn": "台北有多少人？ — 有超過兩百萬人。",
    "vocabIndex": 14
  },
  {
    "q": "An ant has ______ legs, like all insects. A spider has two more legs than an ant.",
    "options": [
      "four",
      "five",
      "ten",
      "six"
    ],
    "answer": 3,
    "cn": "你弟弟幾歲？ — 他六歲，他上小學。",
    "vocabIndex": 15
  },
  {
    "q": "Ten minus one is ______. This number comes right after eight when you count.",
    "options": [
      "seven",
      "nine",
      "eleven",
      "six"
    ],
    "answer": 1,
    "cn": "艾美的貓幾歲？ — 牠九歲了，牠是一隻老貓。",
    "vocabIndex": 16
  },
  {
    "q": "A soccer team has ______ players on the field. That is one more than ten.",
    "options": [
      "eleven",
      "nine",
      "twelve",
      "thirteen"
    ],
    "answer": 0,
    "cn": "班和莉莉幾歲？ — 他們十一歲，他們同班。",
    "vocabIndex": 17
  },
  {
    "q": "Ten plus three is ______. Some people think this number is not lucky.",
    "options": [
      "eleven",
      "thirty",
      "thirteen",
      "fourteen"
    ],
    "answer": 2,
    "cn": "你幾歲？ — 我十三歲，我讀國中。",
    "vocabIndex": 18
  },
  {
    "q": "Two weeks have ______ days. Seven plus seven makes this number.",
    "options": [
      "twelve",
      "forty",
      "sixteen",
      "fourteen"
    ],
    "answer": 3,
    "cn": "你表姊幾歲？ — 她十四歲，她比我大一歲。",
    "vocabIndex": 19
  },
  {
    "q": "A quarter of an hour is ______ minutes. Four quarters make one hour.",
    "options": [
      "fifteen",
      "five",
      "fifty",
      "thirty"
    ],
    "answer": 0,
    "cn": "湯姆幾歲？ — 他十五歲，他是青少年。",
    "vocabIndex": 20
  },
  {
    "q": "Eight plus eight is ______. My sister is this age, so she is in senior high school now.",
    "options": [
      "fourteen",
      "sixteen",
      "sixty",
      "eighteen"
    ],
    "answer": 1,
    "cn": "你姊姊幾歲？ — 她十六歲，她讀高中。",
    "vocabIndex": 21
  },
  {
    "q": "Nine plus nine is ______. In Taiwan, you can drive a car when you reach this age.",
    "options": [
      "sixteen",
      "eighty",
      "nineteen",
      "eighteen"
    ],
    "answer": 3,
    "cn": "你哥哥幾歲？ — 他十八歲，他現在可以開車了。",
    "vocabIndex": 22
  },
  {
    "q": "Twenty minus one is ______. My brother is this age, and he will be twenty next year.",
    "options": [
      "eighteen",
      "ninety",
      "nineteen",
      "seventeen"
    ],
    "answer": 2,
    "cn": "瑪麗幾歲？ — 她十九歲，她明年就二十歲了。",
    "vocabIndex": 23
  },
  {
    "q": "Twenty plus twenty is ______. My father is this age, and my grandfather is seventy.",
    "options": [
      "fourteen",
      "forty",
      "fifty",
      "thirty"
    ],
    "answer": 1,
    "cn": "你爸爸幾歲？ — 他四十歲，他看起來很年輕。",
    "vocabIndex": 24
  },
  {
    "q": "Ten times seven is ______. My grandmother is this age, and she still cooks every day.",
    "options": [
      "seventeen",
      "sixty",
      "eighty",
      "seventy"
    ],
    "answer": 3,
    "cn": "你爺爺幾歲？ — 他七十歲，但他還是很強壯。",
    "vocabIndex": 25
  },
  {
    "q": "Forty plus forty is ______. My grandfather is this age, but he still walks to the park every day.",
    "options": [
      "eighty",
      "eighteen",
      "seventy",
      "ninety"
    ],
    "answer": 0,
    "cn": "你奶奶幾歲？ — 她八十歲，她走路很慢。",
    "vocabIndex": 26
  },
  {
    "q": "One hundred minus ten is ______. Lisa got this score on the math test, and she was very happy.",
    "options": [
      "nineteen",
      "eighty",
      "ninety",
      "seventy"
    ],
    "answer": 2,
    "cn": "那位老先生幾歲？ — 他九十歲，他住在我們隔壁。",
    "vocabIndex": 27
  },
  {
    "q": "Five minus five is ______. When the temperature goes down to this number, water turns into ice.",
    "options": [
      "zero",
      "one",
      "ten",
      "hundred"
    ],
    "answer": 0,
    "cn": "五減五是多少？ — 是零。",
    "vocabIndex": 28
  },
  {
    "q": "Ten plus seven is ______. My cousin is this age, and he is a senior high school student.",
    "options": [
      "seventy",
      "seventeen",
      "sixteen",
      "fifteen"
    ],
    "answer": 1,
    "cn": "十加七是多少？ — 是十七。",
    "vocabIndex": 29
  },
  {
    "q": "Half of one hundred is ______. My mother is this age, but she looks much younger.",
    "options": [
      "fifteen",
      "forty",
      "sixty",
      "fifty"
    ],
    "answer": 3,
    "cn": "二十加三十是多少？ — 是五十。",
    "vocabIndex": 30
  },
  {
    "q": "What is your phone ______? I want to call you tonight to talk about our homework.",
    "options": [
      "total",
      "minute",
      "number",
      "week"
    ],
    "answer": 2,
    "cn": "九加四是多少？ — 是十三，那是我的幸運數字！",
    "vocabIndex": 31
  },
  {
    "q": "Three books at one hundred dollars each cost a ______ of three hundred dollars. Please pay at the front desk.",
    "options": [
      "moment",
      "total",
      "season",
      "quarter"
    ],
    "answer": 1,
    "cn": "兩百加三百是多少？ — 是五百，總共是五百元。",
    "vocabIndex": 32
  },
  {
    "q": "January is the ______ month of the year. February comes right after it.",
    "options": [
      "second",
      "third",
      "last",
      "first"
    ],
    "answer": 3,
    "cn": "你奶奶住幾樓？ — 她住一樓，她不能爬樓梯。",
    "vocabIndex": 33
  },
  {
    "q": "February is the ______ month of the year. It comes after January and before March.",
    "options": [
      "second",
      "first",
      "third",
      "fifth"
    ],
    "answer": 0,
    "cn": "你住幾樓？ — 我住二樓。",
    "vocabIndex": 34
  },
  {
    "q": "March is the ______ month of the year. It comes after February and before April.",
    "options": [
      "second",
      "fourth",
      "third",
      "eighth"
    ],
    "answer": 2,
    "cn": "班和他的父母住幾樓？ — 他們住三樓。",
    "vocabIndex": 35
  },
  {
    "q": "April is the ______ month of the year. It comes after March and before May.",
    "options": [
      "third",
      "fifth",
      "ninth",
      "fourth"
    ],
    "answer": 3,
    "cn": "湯姆住幾樓？ — 他住四樓，在我們樓上。",
    "vocabIndex": 36
  },
  {
    "q": "May is the ______ month of the year. It comes after April and before June.",
    "options": [
      "fourth",
      "fifth",
      "eighth",
      "first"
    ],
    "answer": 1,
    "cn": "你的表兄弟姊妹住幾樓？ — 他們住五樓。",
    "vocabIndex": 37
  },
  {
    "q": "August is the ______ month of the year. It comes after July and before September.",
    "options": [
      "eighth",
      "fifth",
      "ninth",
      "eleventh"
    ],
    "answer": 0,
    "cn": "你叔叔在幾樓上班？ — 他在那棟大樓的八樓上班。",
    "vocabIndex": 38
  },
  {
    "q": "September is the ______ month of the year. It comes after August, and school starts in this month in Taiwan.",
    "options": [
      "eighth",
      "eleventh",
      "ninth",
      "fourth"
    ],
    "answer": 2,
    "cn": "你和你的家人住幾樓？ — 我們住九樓，我們可以看到公園。",
    "vocabIndex": 39
  },
  {
    "q": "November is the ______ month of the year. It comes after October and before December.",
    "options": [
      "ninth",
      "fifteenth",
      "fourteenth",
      "eleventh"
    ],
    "answer": 3,
    "cn": "艾美什麼時候辦生日派對？ — 她在五月十一日辦。",
    "vocabIndex": 40
  },
  {
    "q": "Valentine's Day is on the ______ of February. People give flowers and chocolate to someone they love on that day.",
    "options": [
      "fourteenth",
      "fifteenth",
      "nineteenth",
      "eleventh"
    ],
    "answer": 0,
    "cn": "今天幾月幾日？ — 今天是二月十四日。",
    "vocabIndex": 41
  },
  {
    "q": "The Moon Festival is on the ______ day of the eighth month on the Chinese calendar. Families eat moon cakes that night.",
    "options": [
      "fourteenth",
      "nineteenth",
      "fifteenth",
      "fifth"
    ],
    "answer": 2,
    "cn": "學生們什麼時候考英文？ — 他們六月十五日考。",
    "vocabIndex": 42
  },
  {
    "q": "There were twenty students in the race. Ben was the ______, so only one student was slower than he was.",
    "options": [
      "fifteenth",
      "nineteenth",
      "first",
      "ninth"
    ],
    "answer": 1,
    "cn": "你哥哥什麼時候從美國回家？ — 他七月十九日回家。",
    "vocabIndex": 43
  },
  {
    "q": "December is the ______ month of the year. After it, a new year begins.",
    "options": [
      "last",
      "first",
      "second",
      "third"
    ],
    "answer": 0,
    "cn": "我們什麼時候辦學校派對？ — 我們在這個月的最後一天辦。",
    "vocabIndex": 44
  },
  {
    "q": "How ______ students are there in your class? I heard there are more than thirty.",
    "options": [
      "much",
      "little",
      "many",
      "less"
    ],
    "answer": 2,
    "cn": "艾美有幾個朋友？ — 她有很多朋友，她很友善。",
    "vocabIndex": 45
  },
  {
    "q": "We have ______ homework today: math, English, and science. I can't play basketball after school.",
    "options": [
      "a few",
      "a lot of",
      "few",
      "several"
    ],
    "answer": 1,
    "cn": "你的父母有多少書？ — 他們有很多書，他們很愛閱讀。",
    "vocabIndex": 46
  },
  {
    "q": "How ______ money do you have in your wallet? I need to borrow fifty dollars for lunch.",
    "options": [
      "many",
      "few",
      "several",
      "much"
    ],
    "answer": 3,
    "cn": "你今天有多少時間？ — 我沒有很多時間，我明天有考試。",
    "vocabIndex": 47
  },
  {
    "q": "I have read this book ______ times, maybe four or five. It is my favorite story.",
    "options": [
      "several",
      "much",
      "little",
      "less"
    ],
    "answer": 0,
    "cn": "你在台南有幾個朋友？ — 我在那裡有幾個朋友。",
    "vocabIndex": 48
  },
  {
    "q": "There are ______ apples on the table. You can take one if you are hungry.",
    "options": [
      "much",
      "some",
      "any",
      "little"
    ],
    "answer": 1,
    "cn": "你想要多少水？ — 我想要一些水，我口渴了。",
    "vocabIndex": 49
  },
  {
    "q": "I only have ______ friends at my new school, just two or three. I hope to make more soon.",
    "options": [
      "a little",
      "much",
      "less",
      "a few"
    ],
    "answer": 3,
    "cn": "我們有幾顆蘋果？ — 我們只有幾顆蘋果，我們再買一些吧。",
    "vocabIndex": 50
  },
  {
    "q": "Please put ______ sugar in my tea, not too much. I don't like very sweet drinks.",
    "options": [
      "a few",
      "many",
      "a little",
      "several"
    ],
    "answer": 2,
    "cn": "班想要多少牛奶？ — 他想要一點點牛奶，不要很多。",
    "vocabIndex": 51
  },
  {
    "q": "Very ______ people came to the park because of the rain. There were only two old men there.",
    "options": [
      "little",
      "much",
      "less",
      "few"
    ],
    "answer": 3,
    "cn": "那個新同學有幾個朋友？ — 他的朋友很少，他覺得很寂寞。",
    "vocabIndex": 52
  },
  {
    "q": "There is very ______ water in the bottle. It is almost empty, so we need to buy another one.",
    "options": [
      "few",
      "little",
      "many",
      "several"
    ],
    "answer": 1,
    "cn": "你弟弟有多少錢？ — 他的錢很少，他買不起那個玩具。",
    "vocabIndex": 53
  },
  {
    "q": "I don't have ______ money with me today. Can you buy lunch for me? I will pay you back tomorrow.",
    "options": [
      "some",
      "many",
      "any",
      "few"
    ],
    "answer": 2,
    "cn": "提姆有幾個兄弟？ — 他沒有任何兄弟，他有兩個姊妹。",
    "vocabIndex": 54
  },
  {
    "q": "______ of the students passed the test, so the teacher was very happy. Nobody failed this time.",
    "options": [
      "All",
      "Few",
      "Less",
      "Little"
    ],
    "answer": 0,
    "cn": "你的同學喜歡新老師嗎？ — 是的，他們喜歡。他們全部都喜歡她。",
    "vocabIndex": 55
  },
  {
    "q": "I have two sisters, and ______ of them are teachers. One teaches math, and the other teaches music.",
    "options": [
      "several",
      "both",
      "much",
      "less"
    ],
    "answer": 1,
    "cn": "肯有兄弟嗎？ — 是的，他有。他有兩個，他們兩個都打籃球。",
    "vocabIndex": 56
  },
  {
    "q": "I am still hungry. Can I have some ______ rice, please? One bowl is not enough for me.",
    "options": [
      "less",
      "few",
      "more",
      "little"
    ],
    "answer": 2,
    "cn": "你爸爸想要多少飯？ — 他想要更多飯，他還很餓。",
    "vocabIndex": 57
  },
  {
    "q": "You should eat ______ candy. Too much sugar is bad for your teeth and your health.",
    "options": [
      "more",
      "many",
      "several",
      "less"
    ],
    "answer": 3,
    "cn": "你的祖父母現在吃多少糖？ — 他們現在吃比較少的糖，這對他們的健康有好處。",
    "vocabIndex": 58
  }
];

const LOOKUP = {
  "two": {
    "pos": "num.",
    "en_def": "the number 2",
    "cn_def": "二"
  },
  "one": {
    "pos": "num.",
    "en_def": "the number 1",
    "cn_def": "一"
  },
  "five": {
    "pos": "num.",
    "en_def": "the number 5",
    "cn_def": "五"
  },
  "ten": {
    "pos": "num.",
    "en_def": "the number 10",
    "cn_def": "十"
  },
  "three": {
    "pos": "num.",
    "en_def": "the number 3",
    "cn_def": "三"
  },
  "six": {
    "pos": "num.",
    "en_def": "the number 6",
    "cn_def": "六"
  },
  "nine": {
    "pos": "num.",
    "en_def": "the number 9",
    "cn_def": "九"
  },
  "eight": {
    "pos": "num.",
    "en_def": "the number 8",
    "cn_def": "八"
  },
  "four": {
    "pos": "num.",
    "en_def": "the number 4",
    "cn_def": "四"
  },
  "seven": {
    "pos": "num.",
    "en_def": "the number 7",
    "cn_def": "七"
  },
  "twelve": {
    "pos": "num.",
    "en_def": "the number 12",
    "cn_def": "十二"
  },
  "eleven": {
    "pos": "num.",
    "en_def": "the number 11",
    "cn_def": "十一"
  },
  "twenty": {
    "pos": "num.",
    "en_def": "the number 20",
    "cn_def": "二十"
  },
  "thirty": {
    "pos": "num.",
    "en_def": "the number 30",
    "cn_def": "三十"
  },
  "sixty": {
    "pos": "num.",
    "en_def": "the number 60",
    "cn_def": "六十"
  },
  "forty": {
    "pos": "num.",
    "en_def": "the number 40",
    "cn_def": "四十"
  },
  "fifty": {
    "pos": "num.",
    "en_def": "the number 50",
    "cn_def": "五十"
  },
  "thousand": {
    "pos": "num.",
    "en_def": "the number 1,000",
    "cn_def": "千"
  },
  "million": {
    "pos": "num.",
    "en_def": "the number 1,000,000",
    "cn_def": "百萬"
  },
  "hundred": {
    "pos": "num.",
    "en_def": "the number 100",
    "cn_def": "百"
  },
  "zero": {
    "pos": "num.",
    "en_def": "the number 0",
    "cn_def": "零"
  },
  "ninety": {
    "pos": "num.",
    "en_def": "the number 90",
    "cn_def": "九十"
  },
  "thirteen": {
    "pos": "num.",
    "en_def": "the number 13",
    "cn_def": "十三"
  },
  "fourteen": {
    "pos": "num.",
    "en_def": "the number 14",
    "cn_def": "十四"
  },
  "sixteen": {
    "pos": "num.",
    "en_def": "the number 16",
    "cn_def": "十六"
  },
  "fifteen": {
    "pos": "num.",
    "en_def": "the number 15",
    "cn_def": "十五"
  },
  "eighteen": {
    "pos": "num.",
    "en_def": "the number 18",
    "cn_def": "十八"
  },
  "eighty": {
    "pos": "num.",
    "en_def": "the number 80",
    "cn_def": "八十"
  },
  "nineteen": {
    "pos": "num.",
    "en_def": "the number 19",
    "cn_def": "十九"
  },
  "seventeen": {
    "pos": "num.",
    "en_def": "the number 17",
    "cn_def": "十七"
  },
  "seventy": {
    "pos": "num.",
    "en_def": "the number 70",
    "cn_def": "七十"
  },
  "total": {
    "pos": "n.",
    "en_def": "the whole number when you add everything together",
    "cn_def": "總數；總計"
  },
  "minute": {
    "pos": "n.",
    "en_def": "sixty seconds",
    "cn_def": "分鐘"
  },
  "number": {
    "pos": "n.",
    "en_def": "a word or sign like 1, 2, or 3 that shows how many",
    "cn_def": "數字；號碼"
  },
  "week": {
    "pos": "n.",
    "en_def": "seven days",
    "cn_def": "星期；週"
  },
  "moment": {
    "pos": "n.",
    "en_def": "a very short time",
    "cn_def": "片刻；一會兒"
  },
  "season": {
    "pos": "n.",
    "en_def": "one of the four parts of the year, such as spring or winter",
    "cn_def": "季節"
  },
  "quarter": {
    "pos": "n.",
    "en_def": "one of four same-sized parts; fifteen minutes",
    "cn_def": "十五分鐘；四分之一"
  },
  "second": {
    "pos": "num.",
    "en_def": "coming after the first; number 2 in order",
    "cn_def": "第二（的）"
  },
  "third": {
    "pos": "num.",
    "en_def": "coming after the second; number 3 in order",
    "cn_def": "第三（的）"
  },
  "last": {
    "pos": "adj.",
    "en_def": "coming after all the others",
    "cn_def": "最後的"
  },
  "first": {
    "pos": "num.",
    "en_def": "coming before all the others; number 1 in order",
    "cn_def": "第一（的）"
  },
  "fifth": {
    "pos": "num.",
    "en_def": "coming after the fourth; number 5 in order",
    "cn_def": "第五（的）"
  },
  "fourth": {
    "pos": "num.",
    "en_def": "coming after the third; number 4 in order",
    "cn_def": "第四（的）"
  },
  "eighth": {
    "pos": "num.",
    "en_def": "coming after the seventh; number 8 in order",
    "cn_def": "第八（的）"
  },
  "ninth": {
    "pos": "num.",
    "en_def": "coming after the eighth; number 9 in order",
    "cn_def": "第九（的）"
  },
  "eleventh": {
    "pos": "num.",
    "en_def": "coming after the tenth; number 11 in order",
    "cn_def": "第十一（的）"
  },
  "fifteenth": {
    "pos": "num.",
    "en_def": "coming after the fourteenth; number 15 in order",
    "cn_def": "第十五（的）"
  },
  "fourteenth": {
    "pos": "num.",
    "en_def": "coming after the thirteenth; number 14 in order",
    "cn_def": "第十四（的）"
  },
  "nineteenth": {
    "pos": "num.",
    "en_def": "coming after the eighteenth; number 19 in order",
    "cn_def": "第十九（的）"
  },
  "much": {
    "pos": "adj.",
    "en_def": "a large amount of (something you cannot count)",
    "cn_def": "許多的（不可數）"
  },
  "little": {
    "pos": "adj.",
    "en_def": "not much",
    "cn_def": "很少的（不可數）"
  },
  "many": {
    "pos": "adj.",
    "en_def": "a large number of (things you can count)",
    "cn_def": "許多的（可數）"
  },
  "less": {
    "pos": "adj.",
    "en_def": "a smaller amount",
    "cn_def": "較少的"
  },
  "a few": {
    "pos": "phr.",
    "en_def": "a small number of (things you can count)",
    "cn_def": "一些；幾個（可數）"
  },
  "a lot of": {
    "pos": "phr.",
    "en_def": "a large number or amount of",
    "cn_def": "許多的"
  },
  "few": {
    "pos": "adj.",
    "en_def": "not many",
    "cn_def": "很少的（可數）"
  },
  "several": {
    "pos": "adj.",
    "en_def": "more than two but not many",
    "cn_def": "幾個的"
  },
  "some": {
    "pos": "adj.",
    "en_def": "a number or amount of something, not all",
    "cn_def": "一些"
  },
  "any": {
    "pos": "adj.",
    "en_def": "one or some, no matter which; used in questions and with \"not\"",
    "cn_def": "任何的"
  },
  "a little": {
    "pos": "phr.",
    "en_def": "a small amount of (something you cannot count)",
    "cn_def": "一點點（不可數）"
  },
  "all": {
    "pos": "pron.",
    "en_def": "every one; the whole of something",
    "cn_def": "全部；都"
  },
  "both": {
    "pos": "pron.",
    "en_def": "the two; one and also the other",
    "cn_def": "兩者都"
  },
  "more": {
    "pos": "adj.",
    "en_def": "a bigger number or amount",
    "cn_def": "更多的"
  }
};

const EXTRA_GLOSSES = {};
