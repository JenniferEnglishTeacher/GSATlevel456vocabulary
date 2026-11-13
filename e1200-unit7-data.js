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
    "en_def": "",
    "sentence": "Q: How many noses are there on your face? — A: There is only {{BLANK}} nose.",
    "cn": "你臉上有幾個鼻子？ — 只有一個鼻子。"
  },
  {
    "word": "two",
    "pos": "num.",
    "cn_def": "二",
    "en_def": "",
    "sentence": "Q: How many eyes are there on your face? — A: There are {{BLANK}} eyes.",
    "cn": "你臉上有幾隻眼睛？ — 有兩隻眼睛。"
  },
  {
    "word": "three",
    "pos": "num.",
    "cn_def": "三",
    "en_def": "",
    "sentence": "Q: How many people are there in your family? — A: There are {{BLANK}}: my dad, my mom and me.",
    "cn": "你家有幾個人？ — 有三個：我爸爸、我媽媽和我。"
  },
  {
    "word": "four",
    "pos": "num.",
    "cn_def": "四",
    "en_def": "",
    "sentence": "Q: How many seasons are there in a year? — A: There are {{BLANK}} seasons.",
    "cn": "一年有幾個季節？ — 有四個季節。"
  },
  {
    "word": "five",
    "pos": "num.",
    "cn_def": "五",
    "en_def": "",
    "sentence": "Q: How many fingers are there on one hand? — A: There are {{BLANK}} fingers.",
    "cn": "一隻手上有幾根手指？ — 有五根手指。"
  },
  {
    "word": "seven",
    "pos": "num.",
    "cn_def": "七",
    "en_def": "",
    "sentence": "Q: How many days are there in a week? — A: There are {{BLANK}} days.",
    "cn": "一個星期有幾天？ — 有七天。"
  },
  {
    "word": "eight",
    "pos": "num.",
    "cn_def": "八",
    "en_def": "",
    "sentence": "Q: How many legs are there on a spider? — A: There are {{BLANK}} legs.",
    "cn": "一隻蜘蛛有幾隻腳？ — 有八隻腳。"
  },
  {
    "word": "ten",
    "pos": "num.",
    "cn_def": "十",
    "en_def": "",
    "sentence": "Q: How many fingers are there on your two hands? — A: There are {{BLANK}} fingers.",
    "cn": "你的兩隻手上有幾根手指？ — 有十根手指。"
  },
  {
    "word": "twelve",
    "pos": "num.",
    "cn_def": "十二",
    "en_def": "",
    "sentence": "Q: How many months are there in a year? — A: There are {{BLANK}} months.",
    "cn": "一年有幾個月？ — 有十二個月。"
  },
  {
    "word": "twenty",
    "pos": "num.",
    "cn_def": "二十",
    "en_def": "",
    "sentence": "Q: How many students are there in your class? — A: There are {{BLANK}} students: ten boys and ten girls.",
    "cn": "你們班上有幾個學生？ — 有二十個學生：十個男生和十個女生。"
  },
  {
    "word": "thirty",
    "pos": "num.",
    "cn_def": "三十",
    "en_def": "",
    "sentence": "Q: How many days are there in June? — A: There are {{BLANK}} days.",
    "cn": "六月有幾天？ — 有三十天。"
  },
  {
    "word": "sixty",
    "pos": "num.",
    "cn_def": "六十",
    "en_def": "",
    "sentence": "Q: How many minutes are there in an hour? — A: There are {{BLANK}} minutes.",
    "cn": "一小時有幾分鐘？ — 有六十分鐘。"
  },
  {
    "word": "hundred",
    "pos": "num.",
    "cn_def": "百",
    "en_def": "",
    "sentence": "Q: How many pages are there in your English book? — A: There are one {{BLANK}} pages.",
    "cn": "你的英文書有幾頁？ — 有一百頁。"
  },
  {
    "word": "thousand",
    "pos": "num.",
    "cn_def": "千",
    "en_def": "",
    "sentence": "Q: How many students are there in your school? — A: There are two {{BLANK}} students. It's a big school.",
    "cn": "你們學校有多少學生？ — 有兩千個學生，這是一所大學校。"
  },
  {
    "word": "million",
    "pos": "num.",
    "cn_def": "百萬",
    "en_def": "",
    "sentence": "Q: How many people are there in Taipei? — A: There are more than two {{BLANK}} people.",
    "cn": "台北有多少人？ — 有超過兩百萬人。"
  },
  {
    "word": "six",
    "pos": "num.",
    "cn_def": "六",
    "en_def": "",
    "sentence": "Q: How old is your little brother? — A: He is {{BLANK}} years old. He goes to elementary school.",
    "cn": "你弟弟幾歲？ — 他六歲，他上小學。"
  },
  {
    "word": "nine",
    "pos": "num.",
    "cn_def": "九",
    "en_def": "",
    "sentence": "Q: How old is Amy's cat? — A: It is {{BLANK}} years old. It's an old cat.",
    "cn": "艾美的貓幾歲？ — 牠九歲了，牠是一隻老貓。"
  },
  {
    "word": "eleven",
    "pos": "num.",
    "cn_def": "十一",
    "en_def": "",
    "sentence": "Q: How old are Ben and Lily? — A: They are {{BLANK}} years old. They are in the same class.",
    "cn": "班和莉莉幾歲？ — 他們十一歲，他們同班。"
  },
  {
    "word": "thirteen",
    "pos": "num.",
    "cn_def": "十三",
    "en_def": "",
    "sentence": "Q: How old are you? — A: I am {{BLANK}} years old. I'm in junior high school.",
    "cn": "你幾歲？ — 我十三歲，我讀國中。"
  },
  {
    "word": "fourteen",
    "pos": "num.",
    "cn_def": "十四",
    "en_def": "",
    "sentence": "Q: How old is your cousin? — A: She is {{BLANK}}. She is one year older than me.",
    "cn": "你表姊幾歲？ — 她十四歲，她比我大一歲。"
  },
  {
    "word": "fifteen",
    "pos": "num.",
    "cn_def": "十五",
    "en_def": "",
    "sentence": "Q: How old is Tom? — A: He is {{BLANK}} years old. He is a teenager.",
    "cn": "湯姆幾歲？ — 他十五歲，他是青少年。"
  },
  {
    "word": "sixteen",
    "pos": "num.",
    "cn_def": "十六",
    "en_def": "",
    "sentence": "Q: How old is your sister? — A: She is {{BLANK}}. She goes to senior high school.",
    "cn": "你姊姊幾歲？ — 她十六歲，她讀高中。"
  },
  {
    "word": "eighteen",
    "pos": "num.",
    "cn_def": "十八",
    "en_def": "",
    "sentence": "Q: How old is your brother? — A: He is {{BLANK}} years old. He can drive a car now.",
    "cn": "你哥哥幾歲？ — 他十八歲，他現在可以開車了。"
  },
  {
    "word": "nineteen",
    "pos": "num.",
    "cn_def": "十九",
    "en_def": "",
    "sentence": "Q: How old is Mary? — A: She is {{BLANK}}. She will be twenty next year.",
    "cn": "瑪麗幾歲？ — 她十九歲，她明年就二十歲了。"
  },
  {
    "word": "forty",
    "pos": "num.",
    "cn_def": "四十",
    "en_def": "",
    "sentence": "Q: How old is your father? — A: He is {{BLANK}} years old. He looks young.",
    "cn": "你爸爸幾歲？ — 他四十歲，他看起來很年輕。"
  },
  {
    "word": "seventy",
    "pos": "num.",
    "cn_def": "七十",
    "en_def": "",
    "sentence": "Q: How old is your grandfather? — A: He is {{BLANK}} years old, but he is still strong.",
    "cn": "你爺爺幾歲？ — 他七十歲，但他還是很強壯。"
  },
  {
    "word": "eighty",
    "pos": "num.",
    "cn_def": "八十",
    "en_def": "",
    "sentence": "Q: How old is your grandmother? — A: She is {{BLANK}} years old. She walks slowly.",
    "cn": "你奶奶幾歲？ — 她八十歲，她走路很慢。"
  },
  {
    "word": "ninety",
    "pos": "num.",
    "cn_def": "九十",
    "en_def": "",
    "sentence": "Q: How old is that old man? — A: He is {{BLANK}} years old. He lives next to us.",
    "cn": "那位老先生幾歲？ — 他九十歲，他住在我們隔壁。"
  },
  {
    "word": "zero",
    "pos": "num.",
    "cn_def": "零",
    "en_def": "",
    "sentence": "Q: What's five minus five? — A: It's {{BLANK}}.",
    "cn": "五減五是多少？ — 是零。"
  },
  {
    "word": "seventeen",
    "pos": "num.",
    "cn_def": "十七",
    "en_def": "",
    "sentence": "Q: What's ten plus seven? — A: It's {{BLANK}}.",
    "cn": "十加七是多少？ — 是十七。"
  },
  {
    "word": "fifty",
    "pos": "num.",
    "cn_def": "五十",
    "en_def": "",
    "sentence": "Q: What's twenty plus thirty? — A: It's {{BLANK}}.",
    "cn": "二十加三十是多少？ — 是五十。"
  },
  {
    "word": "number",
    "pos": "n.",
    "cn_def": "數字；號碼",
    "en_def": "",
    "sentence": "Q: What's nine plus four? — A: It's thirteen. It's my lucky {{BLANK}}!",
    "cn": "九加四是多少？ — 是十三，那是我的幸運數字！"
  },
  {
    "word": "total",
    "pos": "n.",
    "cn_def": "總數；總計",
    "en_def": "",
    "sentence": "Q: What's two hundred plus three hundred? — A: It's five hundred. The {{BLANK}} is five hundred dollars.",
    "cn": "兩百加三百是多少？ — 是五百，總共是五百元。"
  },
  {
    "word": "first",
    "pos": "num.",
    "cn_def": "第一（的）",
    "en_def": "",
    "sentence": "Q: Which floor does your grandma live on? — A: She lives on the {{BLANK}} floor. She can't walk up the stairs.",
    "cn": "你奶奶住幾樓？ — 她住一樓，她不能爬樓梯。"
  },
  {
    "word": "second",
    "pos": "num.",
    "cn_def": "第二（的）",
    "en_def": "",
    "sentence": "Q: Which floor do you live on? — A: I live on the {{BLANK}} floor.",
    "cn": "你住幾樓？ — 我住二樓。"
  },
  {
    "word": "third",
    "pos": "num.",
    "cn_def": "第三（的）",
    "en_def": "",
    "sentence": "Q: Which floor do Ben and his parents live on? — A: They live on the {{BLANK}} floor.",
    "cn": "班和他的父母住幾樓？ — 他們住三樓。"
  },
  {
    "word": "fourth",
    "pos": "num.",
    "cn_def": "第四（的）",
    "en_def": "",
    "sentence": "Q: Which floor does Tom live on? — A: He lives on the {{BLANK}} floor, above us.",
    "cn": "湯姆住幾樓？ — 他住四樓，在我們樓上。"
  },
  {
    "word": "fifth",
    "pos": "num.",
    "cn_def": "第五（的）",
    "en_def": "",
    "sentence": "Q: Which floor do your cousins live on? — A: They live on the {{BLANK}} floor.",
    "cn": "你的表兄弟姊妹住幾樓？ — 他們住五樓。"
  },
  {
    "word": "eighth",
    "pos": "num.",
    "cn_def": "第八（的）",
    "en_def": "",
    "sentence": "Q: Which floor does your uncle work on? — A: He works on the {{BLANK}} floor of that building.",
    "cn": "你叔叔在幾樓上班？ — 他在那棟大樓的八樓上班。"
  },
  {
    "word": "ninth",
    "pos": "num.",
    "cn_def": "第九（的）",
    "en_def": "",
    "sentence": "Q: Which floor do you and your family live on? — A: We live on the {{BLANK}} floor. We can see the park.",
    "cn": "你和你的家人住幾樓？ — 我們住九樓，我們可以看到公園。"
  },
  {
    "word": "eleventh",
    "pos": "num.",
    "cn_def": "第十一（的）",
    "en_def": "",
    "sentence": "Q: When does Amy have her birthday party? — A: She has it on the {{BLANK}} of May.",
    "cn": "艾美什麼時候辦生日派對？ — 她在五月十一日辦。"
  },
  {
    "word": "fourteenth",
    "pos": "num.",
    "cn_def": "第十四（的）",
    "en_def": "",
    "sentence": "Q: What's the date today? — A: It's the {{BLANK}} of February.",
    "cn": "今天幾月幾日？ — 今天是二月十四日。"
  },
  {
    "word": "fifteenth",
    "pos": "num.",
    "cn_def": "第十五（的）",
    "en_def": "",
    "sentence": "Q: When do the students have the English test? — A: They have it on the {{BLANK}} of June.",
    "cn": "學生們什麼時候考英文？ — 他們六月十五日考。"
  },
  {
    "word": "nineteenth",
    "pos": "num.",
    "cn_def": "第十九（的）",
    "en_def": "",
    "sentence": "Q: When does your brother come home from America? — A: He comes home on the {{BLANK}} of July.",
    "cn": "你哥哥什麼時候從美國回家？ — 他七月十九日回家。"
  },
  {
    "word": "last",
    "pos": "adj.",
    "cn_def": "最後的",
    "en_def": "",
    "sentence": "Q: When do we have the school party? — A: We have it on the {{BLANK}} day of this month.",
    "cn": "我們什麼時候辦學校派對？ — 我們在這個月的最後一天辦。"
  },
  {
    "word": "many",
    "pos": "adj.",
    "cn_def": "許多的（可數）",
    "en_def": "",
    "sentence": "Q: How many friends does Amy have? — A: She has {{BLANK}} friends. She is very friendly.",
    "cn": "艾美有幾個朋友？ — 她有很多朋友，她很友善。"
  },
  {
    "word": "a lot (of)",
    "pos": "phr.",
    "cn_def": "許多的",
    "en_def": "",
    "sentence": "Q: How many books do your parents have? — A: They have {{BLANK}} books. They love reading.",
    "cn": "你的父母有多少書？ — 他們有很多書，他們很愛閱讀。",
    "nblanks": 3
  },
  {
    "word": "much",
    "pos": "adj.",
    "cn_def": "許多的（不可數）",
    "en_def": "",
    "sentence": "Q: How much time do you have today? — A: I don't have {{BLANK}} time. I have a test tomorrow.",
    "cn": "你今天有多少時間？ — 我沒有很多時間，我明天有考試。"
  },
  {
    "word": "several",
    "pos": "adj.",
    "cn_def": "幾個的",
    "en_def": "",
    "sentence": "Q: How many friends do you have in Tainan? — A: I have {{BLANK}} friends there.",
    "cn": "你在台南有幾個朋友？ — 我在那裡有幾個朋友。"
  },
  {
    "word": "some",
    "pos": "adj.",
    "cn_def": "一些",
    "en_def": "",
    "sentence": "Q: How much water do you want? — A: I want {{BLANK}} water. I'm thirsty.",
    "cn": "你想要多少水？ — 我想要一些水，我口渴了。"
  },
  {
    "word": "a few",
    "pos": "phr.",
    "cn_def": "一些；幾個（可數）",
    "en_def": "",
    "sentence": "Q: How many apples do we have? — A: We only have {{BLANK}} apples. Let's buy some more.",
    "cn": "我們有幾顆蘋果？ — 我們只有幾顆蘋果，我們再買一些吧。",
    "nblanks": 2
  },
  {
    "word": "a little",
    "pos": "phr.",
    "cn_def": "一點點（不可數）",
    "en_def": "",
    "sentence": "Q: How much milk does Ben want? — A: He wants {{BLANK}} milk, not a lot.",
    "cn": "班想要多少牛奶？ — 他想要一點點牛奶，不要很多。",
    "nblanks": 2
  },
  {
    "word": "few",
    "pos": "adj.",
    "cn_def": "很少的（可數）",
    "en_def": "",
    "sentence": "Q: How many friends does the new student have? — A: He has very {{BLANK}} friends. He feels lonely.",
    "cn": "那個新同學有幾個朋友？ — 他的朋友很少，他覺得很寂寞。"
  },
  {
    "word": "little",
    "pos": "adj.",
    "cn_def": "很少的（不可數）",
    "en_def": "",
    "sentence": "Q: How much money does your brother have? — A: He has very {{BLANK}} money. He can't buy the toy.",
    "cn": "你弟弟有多少錢？ — 他的錢很少，他買不起那個玩具。"
  },
  {
    "word": "any",
    "pos": "adj.",
    "cn_def": "任何的",
    "en_def": "",
    "sentence": "Q: How many brothers does Tim have? — A: He doesn't have {{BLANK}} brothers. He has two sisters.",
    "cn": "提姆有幾個兄弟？ — 他沒有任何兄弟，他有兩個姊妹。"
  },
  {
    "word": "all",
    "pos": "pron.",
    "cn_def": "全部；都",
    "en_def": "",
    "sentence": "Q: Do your classmates like the new teacher? — A: Yes, they do. {{BLANK}} of them like her.",
    "cn": "你的同學喜歡新老師嗎？ — 是的，他們喜歡。他們全部都喜歡她。"
  },
  {
    "word": "both",
    "pos": "pron.",
    "cn_def": "兩者都",
    "en_def": "",
    "sentence": "Q: Does Ken have any brothers? — A: Yes, he does. He has two, and {{BLANK}} of them play basketball.",
    "cn": "肯有兄弟嗎？ — 是的，他有。他有兩個，他們兩個都打籃球。"
  },
  {
    "word": "more",
    "pos": "adj.",
    "cn_def": "更多的",
    "en_def": "",
    "sentence": "Q: How much rice does your dad want? — A: He wants {{BLANK}} rice. He is still hungry.",
    "cn": "你爸爸想要多少飯？ — 他想要更多飯，他還很餓。"
  },
  {
    "word": "less",
    "pos": "adj.",
    "cn_def": "較少的",
    "en_def": "",
    "sentence": "Q: How much sugar do your grandparents eat now? — A: They eat {{BLANK}} sugar now. It's good for their health.",
    "cn": "你的祖父母現在吃多少糖？ — 他們現在吃比較少的糖，這對他們的健康有好處。"
  }
];

const MCQS = [
  {
    "q": "Q: How many noses are there on your face? — A: There is only ______ nose.【一】",
    "options": [
      "thousand",
      "fourth",
      "one",
      "thirty"
    ],
    "answer": 2,
    "cn": "你臉上有幾個鼻子？ — 只有一個鼻子。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How many eyes are there on your face? — A: There are ______ eyes.【二】",
    "options": [
      "eighty",
      "two",
      "eight",
      "seven"
    ],
    "answer": 1,
    "cn": "你臉上有幾隻眼睛？ — 有兩隻眼睛。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How many people are there in your family? — A: There are ______: my dad, my mom and me.【三】",
    "options": [
      "five",
      "eighteen",
      "seven",
      "three"
    ],
    "answer": 3,
    "cn": "你家有幾個人？ — 有三個：我爸爸、我媽媽和我。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How many seasons are there in a year? — A: There are ______ seasons.【四】",
    "options": [
      "four",
      "six",
      "zero",
      "first"
    ],
    "answer": 0,
    "cn": "一年有幾個季節？ — 有四個季節。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How many fingers are there on one hand? — A: There are ______ fingers.【五】",
    "options": [
      "eight",
      "ten",
      "five",
      "thousand"
    ],
    "answer": 2,
    "cn": "一隻手上有幾根手指？ — 有五根手指。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How many days are there in a week? — A: There are ______ days.【七】",
    "options": [
      "sixty",
      "fifteen",
      "eight",
      "seven"
    ],
    "answer": 3,
    "cn": "一個星期有幾天？ — 有七天。",
    "vocabIndex": 5
  },
  {
    "q": "Q: How many legs are there on a spider? — A: There are ______ legs.【八】",
    "options": [
      "eight",
      "three",
      "ten",
      "forty"
    ],
    "answer": 0,
    "cn": "一隻蜘蛛有幾隻腳？ — 有八隻腳。",
    "vocabIndex": 6
  },
  {
    "q": "Q: How many fingers are there on your two hands? — A: There are ______ fingers.【十】",
    "options": [
      "third",
      "ten",
      "fourteenth",
      "sixteen"
    ],
    "answer": 1,
    "cn": "你的兩隻手上有幾根手指？ — 有十根手指。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How many months are there in a year? — A: There are ______ months.【十二】",
    "options": [
      "fifteenth",
      "ninth",
      "ten",
      "twelve"
    ],
    "answer": 3,
    "cn": "一年有幾個月？ — 有十二個月。",
    "vocabIndex": 8
  },
  {
    "q": "Q: How many students are there in your class? — A: There are ______ students: ten boys and ten girls.【二十】",
    "options": [
      "twenty",
      "fifteenth",
      "eighty",
      "thirteen"
    ],
    "answer": 0,
    "cn": "你們班上有幾個學生？ — 有二十個學生：十個男生和十個女生。",
    "vocabIndex": 9
  },
  {
    "q": "Q: How many days are there in June? — A: There are ______ days.【三十】",
    "options": [
      "first",
      "thirteen",
      "thirty",
      "fourteen"
    ],
    "answer": 2,
    "cn": "六月有幾天？ — 有三十天。",
    "vocabIndex": 10
  },
  {
    "q": "Q: How many minutes are there in an hour? — A: There are ______ minutes.【六十】",
    "options": [
      "fourth",
      "sixty",
      "sixteen",
      "twelve"
    ],
    "answer": 1,
    "cn": "一小時有幾分鐘？ — 有六十分鐘。",
    "vocabIndex": 11
  },
  {
    "q": "Q: How many pages are there in your English book? — A: There are one ______ pages.【百】",
    "options": [
      "four",
      "ten",
      "twenty",
      "hundred"
    ],
    "answer": 3,
    "cn": "你的英文書有幾頁？ — 有一百頁。",
    "vocabIndex": 12
  },
  {
    "q": "Q: How many students are there in your school? — A: There are two ______ students. It's a big school.【千】",
    "options": [
      "seven",
      "fifteen",
      "thousand",
      "sixteen"
    ],
    "answer": 2,
    "cn": "你們學校有多少學生？ — 有兩千個學生，這是一所大學校。",
    "vocabIndex": 13
  },
  {
    "q": "Q: How many people are there in Taipei? — A: There are more than two ______ people.【百萬】",
    "options": [
      "million",
      "ten",
      "eighth",
      "sixty"
    ],
    "answer": 0,
    "cn": "台北有多少人？ — 有超過兩百萬人。",
    "vocabIndex": 14
  },
  {
    "q": "Q: How old is your little brother? — A: He is ______ years old. He goes to elementary school.【六】",
    "options": [
      "first",
      "six",
      "nineteen",
      "fifteen"
    ],
    "answer": 1,
    "cn": "你弟弟幾歲？ — 他六歲，他上小學。",
    "vocabIndex": 15
  },
  {
    "q": "Q: How old is Amy's cat? — A: It is ______ years old. It's an old cat.【九】",
    "options": [
      "eighty",
      "six",
      "nine",
      "seventy"
    ],
    "answer": 2,
    "cn": "艾美的貓幾歲？ — 牠九歲了，牠是一隻老貓。",
    "vocabIndex": 16
  },
  {
    "q": "Q: How old are Ben and Lily? — A: They are ______ years old. They are in the same class.【十一】",
    "options": [
      "seventy",
      "zero",
      "million",
      "eleven"
    ],
    "answer": 3,
    "cn": "班和莉莉幾歲？ — 他們十一歲，他們同班。",
    "vocabIndex": 17
  },
  {
    "q": "Q: How old are you? — A: I am ______ years old. I'm in junior high school.【十三】",
    "options": [
      "second",
      "thirteen",
      "ten",
      "eight"
    ],
    "answer": 1,
    "cn": "你幾歲？ — 我十三歲，我讀國中。",
    "vocabIndex": 18
  },
  {
    "q": "Q: How old is your cousin? — A: She is ______. She is one year older than me.【十四】",
    "options": [
      "fourteen",
      "sixteen",
      "zero",
      "nineteen"
    ],
    "answer": 0,
    "cn": "你表姊幾歲？ — 她十四歲，她比我大一歲。",
    "vocabIndex": 19
  },
  {
    "q": "Q: How old is Tom? — A: He is ______ years old. He is a teenager.【十五】",
    "options": [
      "one",
      "fifteen",
      "zero",
      "nineteen"
    ],
    "answer": 1,
    "cn": "湯姆幾歲？ — 他十五歲，他是青少年。",
    "vocabIndex": 20
  },
  {
    "q": "Q: How old is your sister? — A: She is ______. She goes to senior high school.【十六】",
    "options": [
      "five",
      "sixty",
      "seventeen",
      "sixteen"
    ],
    "answer": 3,
    "cn": "你姊姊幾歲？ — 她十六歲，她讀高中。",
    "vocabIndex": 21
  },
  {
    "q": "Q: How old is your brother? — A: He is ______ years old. He can drive a car now.【十八】",
    "options": [
      "eight",
      "five",
      "eighteen",
      "third"
    ],
    "answer": 2,
    "cn": "你哥哥幾歲？ — 他十八歲，他現在可以開車了。",
    "vocabIndex": 22
  },
  {
    "q": "Q: How old is Mary? — A: She is ______. She will be twenty next year.【十九】",
    "options": [
      "nineteen",
      "six",
      "fifth",
      "fifty"
    ],
    "answer": 0,
    "cn": "瑪麗幾歲？ — 她十九歲，她明年就二十歲了。",
    "vocabIndex": 23
  },
  {
    "q": "Q: How old is your father? — A: He is ______ years old. He looks young.【四十】",
    "options": [
      "fifteenth",
      "forty",
      "eleventh",
      "sixteen"
    ],
    "answer": 1,
    "cn": "你爸爸幾歲？ — 他四十歲，他看起來很年輕。",
    "vocabIndex": 24
  },
  {
    "q": "Q: How old is your grandfather? — A: He is ______ years old, but he is still strong.【七十】",
    "options": [
      "ninth",
      "fourteenth",
      "twenty",
      "seventy"
    ],
    "answer": 3,
    "cn": "你爺爺幾歲？ — 他七十歲，但他還是很強壯。",
    "vocabIndex": 25
  },
  {
    "q": "Q: How old is your grandmother? — A: She is ______ years old. She walks slowly.【八十】",
    "options": [
      "eighty",
      "zero",
      "two",
      "eighteen"
    ],
    "answer": 0,
    "cn": "你奶奶幾歲？ — 她八十歲，她走路很慢。",
    "vocabIndex": 26
  },
  {
    "q": "Q: How old is that old man? — A: He is ______ years old. He lives next to us.【九十】",
    "options": [
      "fourteen",
      "fifth",
      "ninety",
      "forty"
    ],
    "answer": 2,
    "cn": "那位老先生幾歲？ — 他九十歲，他住在我們隔壁。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What's five minus five? — A: It's ______.【零】",
    "options": [
      "zero",
      "fourteen",
      "thousand",
      "fifty"
    ],
    "answer": 0,
    "cn": "五減五是多少？ — 是零。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What's ten plus seven? — A: It's ______.【十七】",
    "options": [
      "one",
      "eight",
      "seventeen",
      "seventy"
    ],
    "answer": 2,
    "cn": "十加七是多少？ — 是十七。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What's twenty plus thirty? — A: It's ______.【五十】",
    "options": [
      "zero",
      "nineteen",
      "eighteen",
      "fifty"
    ],
    "answer": 3,
    "cn": "二十加三十是多少？ — 是五十。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What's nine plus four? — A: It's thirteen. It's my lucky ______!【數字；號碼】",
    "options": [
      "total",
      "number",
      "secretary",
      "station"
    ],
    "answer": 1,
    "cn": "九加四是多少？ — 是十三，那是我的幸運數字！",
    "vocabIndex": 31
  },
  {
    "q": "Q: What's two hundred plus three hundred? — A: It's five hundred. The ______ is five hundred dollars.【總數；總計】",
    "options": [
      "total",
      "number",
      "fan",
      "family"
    ],
    "answer": 0,
    "cn": "兩百加三百是多少？ — 是五百，總共是五百元。",
    "vocabIndex": 32
  },
  {
    "q": "Q: Which floor does your grandma live on? — A: She lives on the ______ floor. She can't walk up the stairs.【第一（的）】",
    "options": [
      "thousand",
      "fifty",
      "sixteen",
      "first"
    ],
    "answer": 3,
    "cn": "你奶奶住幾樓？ — 她住一樓，她不能爬樓梯。",
    "vocabIndex": 33
  },
  {
    "q": "Q: Which floor do you live on? — A: I live on the ______ floor.【第二（的）】",
    "options": [
      "thirteen",
      "fifteen",
      "second",
      "forty"
    ],
    "answer": 2,
    "cn": "你住幾樓？ — 我住二樓。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Which floor do Ben and his parents live on? — A: They live on the ______ floor.【第三（的）】",
    "options": [
      "zero",
      "third",
      "eighth",
      "fourteen"
    ],
    "answer": 1,
    "cn": "班和他的父母住幾樓？ — 他們住三樓。",
    "vocabIndex": 35
  },
  {
    "q": "Q: Which floor does Tom live on? — A: He lives on the ______ floor, above us.【第四（的）】",
    "options": [
      "twelve",
      "ninety",
      "twenty",
      "fourth"
    ],
    "answer": 3,
    "cn": "湯姆住幾樓？ — 他住四樓，在我們樓上。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Which floor do your cousins live on? — A: They live on the ______ floor.【第五（的）】",
    "options": [
      "sixty",
      "fourteen",
      "fifth",
      "eighteen"
    ],
    "answer": 2,
    "cn": "你的表兄弟姊妹住幾樓？ — 他們住五樓。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Which floor does your uncle work on? — A: He works on the ______ floor of that building.【第八（的）】",
    "options": [
      "eighth",
      "nineteen",
      "thousand",
      "sixty"
    ],
    "answer": 0,
    "cn": "你叔叔在幾樓上班？ — 他在那棟大樓的八樓上班。",
    "vocabIndex": 38
  },
  {
    "q": "Q: Which floor do you and your family live on? — A: We live on the ______ floor. We can see the park.【第九（的）】",
    "options": [
      "eleven",
      "ninth",
      "thirty",
      "fifth"
    ],
    "answer": 1,
    "cn": "你和你的家人住幾樓？ — 我們住九樓，我們可以看到公園。",
    "vocabIndex": 39
  },
  {
    "q": "Q: When does Amy have her birthday party? — A: She has it on the ______ of May.【第十一（的）】",
    "options": [
      "million",
      "fifth",
      "eleventh",
      "seven"
    ],
    "answer": 2,
    "cn": "艾美什麼時候辦生日派對？ — 她在五月十一日辦。",
    "vocabIndex": 40
  },
  {
    "q": "Q: What's the date today? — A: It's the ______ of February.【第十四（的）】",
    "options": [
      "first",
      "fourteenth",
      "million",
      "eleventh"
    ],
    "answer": 1,
    "cn": "今天幾月幾日？ — 今天是二月十四日。",
    "vocabIndex": 41
  },
  {
    "q": "Q: When do the students have the English test? — A: They have it on the ______ of June.【第十五（的）】",
    "options": [
      "fifty",
      "three",
      "sixteen",
      "fifteenth"
    ],
    "answer": 3,
    "cn": "學生們什麼時候考英文？ — 他們六月十五日考。",
    "vocabIndex": 42
  },
  {
    "q": "Q: When does your brother come home from America? — A: He comes home on the ______ of July.【第十九（的）】",
    "options": [
      "nineteenth",
      "first",
      "eight",
      "six"
    ],
    "answer": 0,
    "cn": "你哥哥什麼時候從美國回家？ — 他七月十九日回家。",
    "vocabIndex": 43
  },
  {
    "q": "Q: When do we have the school party? — A: We have it on the ______ day of this month.【最後的】",
    "options": [
      "much",
      "several",
      "last",
      "any"
    ],
    "answer": 2,
    "cn": "我們什麼時候辦學校派對？ — 我們在這個月的最後一天辦。",
    "vocabIndex": 44
  },
  {
    "q": "Q: How many friends does Amy have? — A: She has ______ friends. She is very friendly.【許多的（可數）】",
    "options": [
      "many",
      "some",
      "several",
      "last"
    ],
    "answer": 0,
    "cn": "艾美有幾個朋友？ — 她有很多朋友，她很友善。",
    "vocabIndex": 45
  },
  {
    "q": "Q: How many books do your parents have? — A: They have ______ books. They love reading.【許多的】",
    "options": [
      "a few",
      "a lot of",
      "a little",
      "cheer up"
    ],
    "answer": 1,
    "cn": "你的父母有多少書？ — 他們有很多書，他們很愛閱讀。",
    "vocabIndex": 46
  },
  {
    "q": "Q: How much time do you have today? — A: I don't have ______ time. I have a test tomorrow.【許多的（不可數）】",
    "options": [
      "last",
      "any",
      "many",
      "much"
    ],
    "answer": 3,
    "cn": "你今天有多少時間？ — 我沒有很多時間，我明天有考試。",
    "vocabIndex": 47
  },
  {
    "q": "Q: How many friends do you have in Tainan? — A: I have ______ friends there.【幾個的】",
    "options": [
      "much",
      "little",
      "several",
      "last"
    ],
    "answer": 2,
    "cn": "你在台南有幾個朋友？ — 我在那裡有幾個朋友。",
    "vocabIndex": 48
  },
  {
    "q": "Q: How much water do you want? — A: I want ______ water. I'm thirsty.【一些】",
    "options": [
      "some",
      "much",
      "any",
      "many"
    ],
    "answer": 0,
    "cn": "你想要多少水？ — 我想要一些水，我口渴了。",
    "vocabIndex": 49
  },
  {
    "q": "Q: How many apples do we have? — A: We only have ______ apples. Let's buy some more.【一些；幾個（可數）】",
    "options": [
      "a little",
      "a few",
      "a lot of",
      "take the MRT"
    ],
    "answer": 1,
    "cn": "我們有幾顆蘋果？ — 我們只有幾顆蘋果，我們再買一些吧。",
    "vocabIndex": 50
  },
  {
    "q": "Q: How much milk does Ben want? — A: He wants ______ milk, not a lot.【一點點（不可數）】",
    "options": [
      "a few",
      "a lot of",
      "take the MRT",
      "a little"
    ],
    "answer": 3,
    "cn": "班想要多少牛奶？ — 他想要一點點牛奶，不要很多。",
    "vocabIndex": 51
  },
  {
    "q": "Q: How many friends does the new student have? — A: He has very ______ friends. He feels lonely.【很少的（可數）】",
    "options": [
      "last",
      "few",
      "several",
      "some"
    ],
    "answer": 1,
    "cn": "那個新同學有幾個朋友？ — 他的朋友很少，他覺得很寂寞。",
    "vocabIndex": 52
  },
  {
    "q": "Q: How much money does your brother have? — A: He has very ______ money. He can't buy the toy.【很少的（不可數）】",
    "options": [
      "few",
      "any",
      "little",
      "more"
    ],
    "answer": 2,
    "cn": "你弟弟有多少錢？ — 他的錢很少，他買不起那個玩具。",
    "vocabIndex": 53
  },
  {
    "q": "Q: How many brothers does Tim have? — A: He doesn't have ______ brothers. He has two sisters.【任何的】",
    "options": [
      "many",
      "last",
      "few",
      "any"
    ],
    "answer": 3,
    "cn": "提姆有幾個兄弟？ — 他沒有任何兄弟，他有兩個姊妹。",
    "vocabIndex": 54
  },
  {
    "q": "Q: Do your classmates like the new teacher? — A: Yes, they do. ______ of them like her.【全部；都】",
    "options": [
      "All",
      "Both",
      "Nobody",
      "Anyone"
    ],
    "answer": 0,
    "cn": "你的同學喜歡新老師嗎？ — 是的，他們喜歡。他們全部都喜歡她。",
    "vocabIndex": 55
  },
  {
    "q": "Q: Does Ken have any brothers? — A: Yes, he does. He has two, and ______ of them play basketball.【兩者都】",
    "options": [
      "all",
      "other",
      "both",
      "anyone"
    ],
    "answer": 2,
    "cn": "肯有兄弟嗎？ — 是的，他有。他有兩個，他們兩個都打籃球。",
    "vocabIndex": 56
  },
  {
    "q": "Q: How much rice does your dad want? — A: He wants ______ rice. He is still hungry.【更多的】",
    "options": [
      "any",
      "more",
      "last",
      "much"
    ],
    "answer": 1,
    "cn": "你爸爸想要多少飯？ — 他想要更多飯，他還很餓。",
    "vocabIndex": 57
  },
  {
    "q": "Q: How much sugar do your grandparents eat now? — A: They eat ______ sugar now. It's good for their health.【較少的】",
    "options": [
      "any",
      "more",
      "much",
      "less"
    ],
    "answer": 3,
    "cn": "你的祖父母現在吃多少糖？ — 他們現在吃比較少的糖，這對他們的健康有好處。",
    "vocabIndex": 58
  }
];

const LOOKUP = {
  "family": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "家庭；家人"
  },
  "one": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "一"
  },
  "two": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "二"
  },
  "three": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "三"
  },
  "four": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "四"
  },
  "five": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "五"
  },
  "seven": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "七"
  },
  "eight": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "八"
  },
  "ten": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十"
  },
  "twelve": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十二"
  },
  "twenty": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "二十"
  },
  "thirty": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "三十"
  },
  "sixty": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "六十"
  },
  "hundred": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "百"
  },
  "thousand": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "千"
  },
  "million": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "百萬"
  },
  "six": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "六"
  },
  "nine": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "九"
  },
  "eleven": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十一"
  },
  "thirteen": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十三"
  },
  "fourteen": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十四"
  },
  "fifteen": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十五"
  },
  "sixteen": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十六"
  },
  "eighteen": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十八"
  },
  "nineteen": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十九"
  },
  "forty": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "四十"
  },
  "seventy": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "七十"
  },
  "eighty": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "八十"
  },
  "ninety": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "九十"
  },
  "zero": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "零"
  },
  "seventeen": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "十七"
  },
  "fifty": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "五十"
  },
  "number": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "數字；號碼"
  },
  "total": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "總數；總計"
  },
  "first": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第一（的）"
  },
  "second": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第二（的）"
  },
  "third": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第三（的）"
  },
  "fourth": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第四（的）"
  },
  "fifth": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第五（的）"
  },
  "eighth": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第八（的）"
  },
  "ninth": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第九（的）"
  },
  "eleventh": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第十一（的）"
  },
  "fourteenth": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第十四（的）"
  },
  "fifteenth": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第十五（的）"
  },
  "nineteenth": {
    "pos": "num.",
    "en_def": "",
    "cn_def": "第十九（的）"
  },
  "last": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "最後的"
  },
  "many": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "許多的（可數）"
  },
  "a lot of": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "許多的"
  },
  "much": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "許多的（不可數）"
  },
  "several": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "幾個的"
  },
  "some": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "一些"
  },
  "a few": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "一些；幾個（可數）"
  },
  "a little": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "一點點（不可數）"
  },
  "few": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "很少的（可數）"
  },
  "little": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "很少的（不可數）"
  },
  "any": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "任何的"
  },
  "all": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "全部；都"
  },
  "both": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "兩者都"
  },
  "more": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "更多的"
  },
  "less": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "較少的"
  },
  "fan": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "粉絲；狂熱愛好者"
  },
  "take the mrt": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "搭捷運"
  },
  "station": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "車站"
  },
  "secretary": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "秘書"
  },
  "anyone": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "任何人"
  },
  "nobody": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "沒有人"
  },
  "other": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "其他的（人／物）"
  },
  "cheer up": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "打起精神；振作"
  }
};

const EXTRA_GLOSSES = {};
