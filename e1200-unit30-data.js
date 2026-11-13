// Unit 30 Quiz Data: Prepositions 介系詞（第31區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U30 - Prepositions",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "in",
    "pos": "prep.",
    "cn_def": "在…裡面",
    "en_def": "inside a place or a thing",
    "sentence": "Q: Where is your cat? — A: It's {{BLANK}} the box.",
    "cn": "你的貓在哪裡？ — 牠在箱子裡。"
  },
  {
    "word": "inside",
    "pos": "prep.",
    "cn_def": "在…內部",
    "en_def": "in the inner part of something",
    "sentence": "Q: Where do the children play on rainy days? — A: They play {{BLANK}} the house.",
    "cn": "下雨天孩子們在哪裡玩？ — 他們在屋子裡面玩。"
  },
  {
    "word": "outside",
    "pos": "prep.",
    "cn_def": "在…外面",
    "en_def": "not in a building or a room; on the outer side",
    "sentence": "Q: Where does your dog sleep? — A: It sleeps {{BLANK}} the house, in the yard.",
    "cn": "你的狗睡在哪裡？ — 牠睡在屋外的院子裡。"
  },
  {
    "word": "on",
    "pos": "prep.",
    "cn_def": "在…上面",
    "en_def": "touching the top of something",
    "sentence": "Q: Where are my books? — A: They are {{BLANK}} the desk.",
    "cn": "我的書在哪裡？ — 它們在書桌上。"
  },
  {
    "word": "above",
    "pos": "prep.",
    "cn_def": "在…上方",
    "en_def": "higher than something, not touching it",
    "sentence": "Q: Where is the clock? — A: It's on the wall, {{BLANK}} the door.",
    "cn": "時鐘在哪裡？ — 在牆上，門的上方。"
  },
  {
    "word": "over",
    "pos": "prep.",
    "cn_def": "在…正上方；越過",
    "en_def": "right above something; across the top of something",
    "sentence": "Q: Where does Mom hang the lamp? — A: She hangs it {{BLANK}} the table.",
    "cn": "媽媽把燈掛在哪裡？ — 她把燈掛在桌子正上方。"
  },
  {
    "word": "under",
    "pos": "prep.",
    "cn_def": "在…下面",
    "en_def": "lower than something; with something on top",
    "sentence": "Q: Where are my shoes? — A: They are {{BLANK}} the bed.",
    "cn": "我的鞋子在哪裡？ — 它們在床底下。"
  },
  {
    "word": "below",
    "pos": "prep.",
    "cn_def": "在…下方",
    "en_def": "in a lower place than something",
    "sentence": "Q: Where do you write your name? — A: I write it {{BLANK}} the picture.",
    "cn": "你把名字寫在哪裡？ — 我寫在圖片下方。"
  },
  {
    "word": "behind",
    "pos": "prep.",
    "cn_def": "在…後面",
    "en_def": "at the back of something",
    "sentence": "Q: Where is the dog? — A: It's {{BLANK}} the door.",
    "cn": "狗在哪裡？ — 牠在門後面。"
  },
  {
    "word": "beside",
    "pos": "prep.",
    "cn_def": "在…旁邊",
    "en_def": "next to; at the side of",
    "sentence": "Q: Where does Amy sit in class? — A: She sits {{BLANK}} me.",
    "cn": "艾美上課坐在哪裡？ — 她坐在我旁邊。"
  },
  {
    "word": "near",
    "pos": "prep.",
    "cn_def": "在…附近",
    "en_def": "not far from",
    "sentence": "Q: Where do your grandparents live? — A: They live {{BLANK}} the park.",
    "cn": "你的爺爺奶奶住在哪裡？ — 他們住在公園附近。"
  },
  {
    "word": "between",
    "pos": "prep.",
    "cn_def": "在…之間",
    "en_def": "in the middle of two people or things",
    "sentence": "Q: Where is the bank? — A: It's {{BLANK}} the post office and the hospital.",
    "cn": "銀行在哪裡？ — 在郵局和醫院之間。"
  },
  {
    "word": "around",
    "pos": "prep.",
    "cn_def": "在…四周",
    "en_def": "on all sides of something",
    "sentence": "Q: Where do the students sit? — A: They sit {{BLANK}} the table.",
    "cn": "學生們坐在哪裡？ — 他們圍坐在桌子四周。"
  },
  {
    "word": "at",
    "pos": "prep.",
    "cn_def": "在（時間點）",
    "en_def": "used to show an exact time or place",
    "sentence": "Q: What time does Ben get up? — A: He gets up {{BLANK}} seven o'clock.",
    "cn": "班幾點起床？ — 他七點起床。"
  },
  {
    "word": "before",
    "pos": "prep.",
    "cn_def": "在…之前",
    "en_def": "earlier than",
    "sentence": "Q: When do you do your homework? — A: I do it {{BLANK}} dinner.",
    "cn": "你什麼時候寫功課？ — 我在晚餐前寫。"
  },
  {
    "word": "after",
    "pos": "prep.",
    "cn_def": "在…之後",
    "en_def": "later than",
    "sentence": "Q: When does your sister play the piano? — A: She plays it {{BLANK}} school.",
    "cn": "你妹妹什麼時候彈鋼琴？ — 她放學後彈。"
  },
  {
    "word": "during",
    "pos": "prep.",
    "cn_def": "在…期間",
    "en_def": "all through a time",
    "sentence": "Q: When do you visit your grandma? — A: I visit her {{BLANK}} the summer vacation.",
    "cn": "你什麼時候去看奶奶？ — 我暑假期間去看她。"
  },
  {
    "word": "from",
    "pos": "prep.",
    "cn_def": "從",
    "en_def": "starting at a place or a time",
    "sentence": "Q: When does Mr. Lin work? — A: He works {{BLANK}} Monday to Friday.",
    "cn": "林先生什麼時候上班？ — 他從星期一工作到星期五。"
  },
  {
    "word": "until",
    "pos": "prep.",
    "cn_def": "直到",
    "en_def": "up to a time",
    "sentence": "Q: How long do you stay at school? — A: I stay at school {{BLANK}} five o'clock.",
    "cn": "你在學校待多久？ — 我在學校待到五點。"
  },
  {
    "word": "since",
    "pos": "prep.",
    "cn_def": "自從",
    "en_def": "from a time in the past up to now",
    "sentence": "Q: How long has your family lived in Taipei? — A: We have lived here {{BLANK}} 2020.",
    "cn": "你們家住在台北多久了？ — 我們從2020年就住在這裡。"
  },
  {
    "word": "to",
    "pos": "prep.",
    "cn_def": "到；往",
    "en_def": "in the direction of a place",
    "sentence": "Q: Where does your brother go every morning? — A: He goes {{BLANK}} school by bus.",
    "cn": "你哥哥每天早上去哪裡？ — 他搭公車去學校。"
  },
  {
    "word": "into",
    "pos": "prep.",
    "cn_def": "進入…之內",
    "en_def": "to the inside of something",
    "sentence": "Q: What does the cat do? — A: It jumps {{BLANK}} the box.",
    "cn": "那隻貓在做什麼？ — 牠跳進箱子裡。"
  },
  {
    "word": "out (out of)",
    "pos": "adv.",
    "cn_def": "向外；在外",
    "en_def": "away from the inside of a place",
    "sentence": "Q: Where do the kids run when the bell rings? — A: They run {{BLANK}} of the classroom.",
    "cn": "鐘響時孩子們跑去哪裡？ — 他們跑出教室。"
  },
  {
    "word": "off",
    "pos": "prep.",
    "cn_def": "離開；脫掉",
    "en_def": "away from; no longer on your body",
    "sentence": "Q: What do you do at the door? — A: I take {{BLANK}} my shoes.",
    "cn": "你在門口做什麼？ — 我脫掉鞋子。"
  },
  {
    "word": "up",
    "pos": "prep.",
    "cn_def": "向上",
    "en_def": "to a higher place",
    "sentence": "Q: Where does the monkey go? — A: It climbs {{BLANK}} the tree.",
    "cn": "猴子去哪裡？ — 牠爬上樹。"
  },
  {
    "word": "down",
    "pos": "prep.",
    "cn_def": "向下",
    "en_def": "to a lower place",
    "sentence": "Q: What do the kids do on the slide? — A: They go {{BLANK}} the slide.",
    "cn": "孩子們在溜滑梯上做什麼？ — 他們溜下溜滑梯。"
  },
  {
    "word": "along",
    "pos": "prep.",
    "cn_def": "沿著",
    "en_def": "from one end of a road or river toward the other",
    "sentence": "Q: Where does Grandpa walk every evening? — A: He walks {{BLANK}} the river.",
    "cn": "爺爺每天傍晚在哪裡散步？ — 他沿著河邊散步。"
  },
  {
    "word": "across",
    "pos": "prep.",
    "cn_def": "橫越；在…對面",
    "en_def": "from one side to the other side of something",
    "sentence": "Q: How do I get to the bank? — A: Walk {{BLANK}} the street. It's next to the park.",
    "cn": "我要怎麼去銀行？ — 過馬路，它在公園旁邊。"
  },
  {
    "word": "through",
    "pos": "prep.",
    "cn_def": "穿過",
    "en_def": "in one side of something and out the other side",
    "sentence": "Q: Does Amy walk {{BLANK}} the park to school? — A: Yes, she does. It's a short way.",
    "cn": "艾美穿過公園走路上學嗎？ — 是的，那是一條近路。"
  },
  {
    "word": "about",
    "pos": "prep.",
    "cn_def": "關於",
    "en_def": "on the subject of",
    "sentence": "Q: What do your friends often talk {{BLANK}}? — A: They often talk about soccer.",
    "cn": "你的朋友們常聊什麼？ — 他們常聊足球。"
  },
  {
    "word": "for",
    "pos": "prep.",
    "cn_def": "為了；給",
    "en_def": "meant to be given to or used by someone",
    "sentence": "Q: Who is this gift {{BLANK}}? — A: It's for my dad. His birthday is tomorrow.",
    "cn": "這份禮物是給誰的？ — 是給我爸爸的，明天是他生日。"
  },
  {
    "word": "of",
    "pos": "prep.",
    "cn_def": "…的",
    "en_def": "belonging to; showing what something is about",
    "sentence": "Q: What is this a picture {{BLANK}}? — A: It's a picture of my family.",
    "cn": "這是一張什麼的照片？ — 這是一張我家人的照片。"
  },
  {
    "word": "with",
    "pos": "prep.",
    "cn_def": "和；用",
    "en_def": "together; using something",
    "sentence": "Q: Who does Amy go to the park {{BLANK}}? — A: She goes there with her dog.",
    "cn": "艾美和誰去公園？ — 她和她的狗去那裡。"
  },
  {
    "word": "without",
    "pos": "prep.",
    "cn_def": "沒有",
    "en_def": "not having something",
    "sentence": "Q: Does Grandpa read {{BLANK}} his glasses? — A: No, he doesn't. He can't see without them.",
    "cn": "爺爺不戴眼鏡看書嗎？ — 不，他不會。沒有眼鏡他看不見。"
  },
  {
    "word": "like",
    "pos": "prep.",
    "cn_def": "像；如",
    "en_def": "almost the same as",
    "sentence": "Q: What does this candy taste {{BLANK}}? — A: It tastes like strawberries.",
    "cn": "這顆糖吃起來像什麼？ — 它吃起來像草莓。"
  },
  {
    "word": "by",
    "pos": "prep.",
    "cn_def": "藉著；搭乘",
    "en_def": "using a kind of transportation",
    "sentence": "Q: How do you go to Tainan? — A: We go there {{BLANK}} train.",
    "cn": "你們怎麼去台南？ — 我們搭火車去。"
  },
  {
    "word": "than",
    "pos": "prep.",
    "cn_def": "比",
    "en_def": "used when you compare two people or things",
    "sentence": "Q: Who is taller, you or your brother? — A: My brother is taller {{BLANK}} me.",
    "cn": "你和你哥哥誰比較高？ — 我哥哥比我高。"
  },
  {
    "word": "except",
    "pos": "prep.",
    "cn_def": "除了…之外",
    "en_def": "but not; not including",
    "sentence": "Q: Do all your classmates like PE? — A: Yes, they do. Everyone likes PE {{BLANK}} Tom.",
    "cn": "你所有同學都喜歡體育課嗎？ — 是的。除了湯姆，大家都喜歡體育課。"
  }
];

const MCQS = [
  {
    "q": "There is some milk ______ the glass. Please drink it all.",
    "options": [
      "at",
      "in",
      "to",
      "of"
    ],
    "answer": 1,
    "cn": "你的貓在哪裡？ — 牠在箱子裡。",
    "vocabIndex": 0
  },
  {
    "q": "It is raining. Let's stay ______ the house and play games.",
    "options": [
      "outside",
      "above",
      "inside",
      "below"
    ],
    "answer": 2,
    "cn": "下雨天孩子們在哪裡玩？ — 他們在屋子裡面玩。",
    "vocabIndex": 1
  },
  {
    "q": "It is a sunny day. Let's play ______ the house, in the yard.",
    "options": [
      "inside",
      "under",
      "above",
      "outside"
    ],
    "answer": 3,
    "cn": "你的狗睡在哪裡？ — 牠睡在屋外的院子裡。",
    "vocabIndex": 2
  },
  {
    "q": "Your book is ______ the desk. I put it there, next to your pencil case.",
    "options": [
      "on",
      "at",
      "to",
      "of"
    ],
    "answer": 0,
    "cn": "我的書在哪裡？ — 它們在書桌上。",
    "vocabIndex": 3
  },
  {
    "q": "The plane is flying ______ the clouds. We can see them far below us.",
    "options": [
      "under",
      "above",
      "below",
      "behind"
    ],
    "answer": 1,
    "cn": "時鐘在哪裡？ — 在牆上，門的上方。",
    "vocabIndex": 4
  },
  {
    "q": "The dog jumped ______ the wall and ran away.",
    "options": [
      "over",
      "under",
      "between",
      "during"
    ],
    "answer": 0,
    "cn": "媽媽把燈掛在哪裡？ — 她把燈掛在桌子正上方。",
    "vocabIndex": 5
  },
  {
    "q": "The cat is hiding ______ the bed. I can only see its tail on the floor.",
    "options": [
      "above",
      "over",
      "on",
      "under"
    ],
    "answer": 3,
    "cn": "我的鞋子在哪裡？ — 它們在床底下。",
    "vocabIndex": 6
  },
  {
    "q": "The temperature is five degrees ______ zero. It is freezing outside!",
    "options": [
      "above",
      "behind",
      "below",
      "beside"
    ],
    "answer": 2,
    "cn": "你把名字寫在哪裡？ — 我寫在圖片下方。",
    "vocabIndex": 7
  },
  {
    "q": "Tom sits ______ me in class. When I turn around, I can see him.",
    "options": [
      "behind",
      "above",
      "below",
      "between"
    ],
    "answer": 0,
    "cn": "狗在哪裡？ — 牠在門後面。",
    "vocabIndex": 8
  },
  {
    "q": "Come and sit ______ me on the sofa. There is room for one more.",
    "options": [
      "above",
      "beside",
      "below",
      "through"
    ],
    "answer": 1,
    "cn": "艾美上課坐在哪裡？ — 她坐在我旁邊。",
    "vocabIndex": 9
  },
  {
    "q": "My house is ______ the school. I can walk there in five minutes.",
    "options": [
      "above",
      "below",
      "near",
      "through"
    ],
    "answer": 2,
    "cn": "你的爺爺奶奶住在哪裡？ — 他們住在公園附近。",
    "vocabIndex": 10
  },
  {
    "q": "The bank is ______ the post office and the bookstore. It is in the middle.",
    "options": [
      "above",
      "below",
      "through",
      "between"
    ],
    "answer": 3,
    "cn": "銀行在哪裡？ — 在郵局和醫院之間。",
    "vocabIndex": 11
  },
  {
    "q": "The earth moves ______ the sun. It takes one year to go once.",
    "options": [
      "between",
      "around",
      "below",
      "through"
    ],
    "answer": 1,
    "cn": "學生們坐在哪裡？ — 他們圍坐在桌子四周。",
    "vocabIndex": 12
  },
  {
    "q": "The movie starts ______ seven thirty. Don't be late.",
    "options": [
      "at",
      "in",
      "on",
      "during"
    ],
    "answer": 0,
    "cn": "班幾點起床？ — 他七點起床。",
    "vocabIndex": 13
  },
  {
    "q": "Wash your hands ______ dinner. They must be clean when you eat.",
    "options": [
      "after",
      "since",
      "before",
      "from"
    ],
    "answer": 2,
    "cn": "你什麼時候寫功課？ — 我在晚餐前寫。",
    "vocabIndex": 14
  },
  {
    "q": "I am very full ______ a big dinner. I can't eat any dessert now.",
    "options": [
      "before",
      "since",
      "until",
      "after"
    ],
    "answer": 3,
    "cn": "你妹妹什麼時候彈鋼琴？ — 她放學後彈。",
    "vocabIndex": 15
  },
  {
    "q": "Please don't talk ______ the test. You can talk when it is over.",
    "options": [
      "since",
      "from",
      "during",
      "between"
    ],
    "answer": 2,
    "cn": "你什麼時候去看奶奶？ — 我暑假期間去看她。",
    "vocabIndex": 16
  },
  {
    "q": "The store is open ______ nine in the morning to ten at night.",
    "options": [
      "since",
      "until",
      "during",
      "from"
    ],
    "answer": 3,
    "cn": "林先生什麼時候上班？ — 他從星期一工作到星期五。",
    "vocabIndex": 17
  },
  {
    "q": "I waited for you ______ ten o'clock last night. Then I went to bed.",
    "options": [
      "since",
      "until",
      "from",
      "between"
    ],
    "answer": 1,
    "cn": "你在學校待多久？ — 我在學校待到五點。",
    "vocabIndex": 18
  },
  {
    "q": "I have lived in Taipei ______ 2015. That is more than ten years.",
    "options": [
      "since",
      "until",
      "during",
      "between"
    ],
    "answer": 0,
    "cn": "你們家住在台北多久了？ — 我們從2020年就住在這裡。",
    "vocabIndex": 19
  },
  {
    "q": "I walk ______ school every morning. It takes ten minutes.",
    "options": [
      "of",
      "off",
      "to",
      "with"
    ],
    "answer": 2,
    "cn": "你哥哥每天早上去哪裡？ — 他搭公車去學校。",
    "vocabIndex": 20
  },
  {
    "q": "The boy jumped ______ the pool and started to swim.",
    "options": [
      "of",
      "for",
      "with",
      "into"
    ],
    "answer": 3,
    "cn": "那隻貓在做什麼？ — 牠跳進箱子裡。",
    "vocabIndex": 21
  },
  {
    "q": "Take your books ______ of your bag and put them on the desk.",
    "options": [
      "down",
      "out",
      "along",
      "across"
    ],
    "answer": 1,
    "cn": "鐘響時孩子們跑去哪裡？ — 他們跑出教室。",
    "vocabIndex": 22
  },
  {
    "q": "Please take ______ your shoes before you come in.",
    "options": [
      "off",
      "of",
      "from",
      "to"
    ],
    "answer": 0,
    "cn": "你在門口做什麼？ — 我脫掉鞋子。",
    "vocabIndex": 23
  },
  {
    "q": "The cat climbed ______ the tree and couldn't come down.",
    "options": [
      "under",
      "of",
      "at",
      "up"
    ],
    "answer": 3,
    "cn": "猴子去哪裡？ — 牠爬上樹。",
    "vocabIndex": 24
  },
  {
    "q": "The ball rolled ______ the hill and into the river.",
    "options": [
      "up",
      "of",
      "down",
      "at"
    ],
    "answer": 2,
    "cn": "孩子們在溜滑梯上做什麼？ — 他們溜下溜滑梯。",
    "vocabIndex": 25
  },
  {
    "q": "We walked ______ the river for an hour and enjoyed the trees on both sides.",
    "options": [
      "of",
      "along",
      "at",
      "than"
    ],
    "answer": 1,
    "cn": "爺爺每天傍晚在哪裡散步？ — 他沿著河邊散步。",
    "vocabIndex": 26
  },
  {
    "q": "There is a bridge ______ the river. We can walk to the other side.",
    "options": [
      "across",
      "of",
      "at",
      "during"
    ],
    "answer": 0,
    "cn": "我要怎麼去銀行？ — 過馬路，它在公園旁邊。",
    "vocabIndex": 27
  },
  {
    "q": "The train goes ______ a long tunnel in the mountain. It is dark inside for five minutes.",
    "options": [
      "above",
      "through",
      "of",
      "at"
    ],
    "answer": 1,
    "cn": "艾美穿過公園走路上學嗎？ — 是的，那是一條近路。",
    "vocabIndex": 28
  },
  {
    "q": "This book is ______ animals in Africa. It tells us how lions and elephants live.",
    "options": [
      "of",
      "than",
      "except",
      "about"
    ],
    "answer": 3,
    "cn": "你的朋友們常聊什麼？ — 他們常聊足球。",
    "vocabIndex": 29
  },
  {
    "q": "I bought a present ______ my mother. Tomorrow is her birthday.",
    "options": [
      "of",
      "about",
      "for",
      "than"
    ],
    "answer": 2,
    "cn": "這份禮物是給誰的？ — 是給我爸爸的，明天是他生日。",
    "vocabIndex": 30
  },
  {
    "q": "The color ______ the sky is blue on sunny days.",
    "options": [
      "of",
      "at",
      "to",
      "than"
    ],
    "answer": 0,
    "cn": "這是一張什麼的照片？ — 這是一張我家人的照片。",
    "vocabIndex": 31
  },
  {
    "q": "I write ______ my left hand. I eat with it, too.",
    "options": [
      "of",
      "at",
      "about",
      "with"
    ],
    "answer": 3,
    "cn": "艾美和誰去公園？ — 她和她的狗去那裡。",
    "vocabIndex": 32
  },
  {
    "q": "Fish can't live ______ water. They die very fast on land.",
    "options": [
      "with",
      "along",
      "without",
      "across"
    ],
    "answer": 2,
    "cn": "爺爺不戴眼鏡看書嗎？ — 不，他不會。沒有眼鏡他看不見。",
    "vocabIndex": 33
  },
  {
    "q": "The baby looks ______ her mother. They have the same eyes and nose.",
    "options": [
      "like",
      "of",
      "than",
      "except"
    ],
    "answer": 0,
    "cn": "這顆糖吃起來像什麼？ — 它吃起來像草莓。",
    "vocabIndex": 34
  },
  {
    "q": "I go to school ______ bus every day. It takes twenty minutes.",
    "options": [
      "with",
      "by",
      "of",
      "at"
    ],
    "answer": 1,
    "cn": "你們怎麼去台南？ — 我們搭火車去。",
    "vocabIndex": 35
  },
  {
    "q": "My brother is taller ______ me. He is 180 centimeters, and I am 165.",
    "options": [
      "of",
      "for",
      "except",
      "than"
    ],
    "answer": 3,
    "cn": "你和你哥哥誰比較高？ — 我哥哥比我高。",
    "vocabIndex": 36
  },
  {
    "q": "The store is open every day ______ Monday. It is closed on that day.",
    "options": [
      "than",
      "except",
      "of",
      "about"
    ],
    "answer": 1,
    "cn": "你所有同學都喜歡體育課嗎？ — 是的。除了湯姆，大家都喜歡體育課。",
    "vocabIndex": 37
  }
];

const LOOKUP = {
  "at": {
    "pos": "prep.",
    "en_def": "used to show an exact time or place",
    "cn_def": "在（時間點）"
  },
  "in": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "在…裡面"
  },
  "to": {
    "pos": "prep.",
    "en_def": "in the direction of a place",
    "cn_def": "到；往"
  },
  "of": {
    "pos": "prep.",
    "en_def": "belonging to; showing what something is about",
    "cn_def": "…的"
  },
  "outside": {
    "pos": "prep.",
    "en_def": "not in a building or a room; on the outer side",
    "cn_def": "在…外面"
  },
  "above": {
    "pos": "prep.",
    "en_def": "higher than something, not touching it",
    "cn_def": "在…上方"
  },
  "inside": {
    "pos": "prep.",
    "en_def": "in the inner part of something",
    "cn_def": "在…內部"
  },
  "below": {
    "pos": "prep.",
    "en_def": "in a lower place than something",
    "cn_def": "在…下方"
  },
  "under": {
    "pos": "prep.",
    "en_def": "lower than something; with something on top",
    "cn_def": "在…下面"
  },
  "on": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "在…上面"
  },
  "behind": {
    "pos": "prep.",
    "en_def": "at the back of something",
    "cn_def": "在…後面"
  },
  "over": {
    "pos": "prep.",
    "en_def": "right above something; across the top of something",
    "cn_def": "在…正上方；越過"
  },
  "between": {
    "pos": "prep.",
    "en_def": "in the middle of two people or things",
    "cn_def": "在…之間"
  },
  "during": {
    "pos": "prep.",
    "en_def": "all through a time",
    "cn_def": "在…期間"
  },
  "beside": {
    "pos": "prep.",
    "en_def": "next to; at the side of",
    "cn_def": "在…旁邊"
  },
  "through": {
    "pos": "prep.",
    "en_def": "in one side of something and out the other side",
    "cn_def": "穿過"
  },
  "near": {
    "pos": "prep.",
    "en_def": "not far from",
    "cn_def": "在…附近"
  },
  "around": {
    "pos": "prep.",
    "en_def": "on all sides of something",
    "cn_def": "在…四周"
  },
  "after": {
    "pos": "prep.",
    "en_def": "later than",
    "cn_def": "在…之後"
  },
  "since": {
    "pos": "prep.",
    "en_def": "from a time in the past up to now",
    "cn_def": "自從"
  },
  "before": {
    "pos": "prep.",
    "en_def": "earlier than",
    "cn_def": "在…之前"
  },
  "from": {
    "pos": "prep.",
    "en_def": "starting at a place or a time",
    "cn_def": "從"
  },
  "until": {
    "pos": "prep.",
    "en_def": "up to a time",
    "cn_def": "直到"
  },
  "off": {
    "pos": "prep.",
    "en_def": "away from; no longer on your body",
    "cn_def": "離開；脫掉"
  },
  "with": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "和；用"
  },
  "for": {
    "pos": "prep.",
    "en_def": "meant to be given to or used by someone",
    "cn_def": "為了；給"
  },
  "into": {
    "pos": "prep.",
    "en_def": "to the inside of something",
    "cn_def": "進入…之內"
  },
  "down": {
    "pos": "prep.",
    "en_def": "to a lower place",
    "cn_def": "向下"
  },
  "out": {
    "pos": "adv.",
    "en_def": "away from the inside of a place",
    "cn_def": "向外；在外"
  },
  "along": {
    "pos": "prep.",
    "en_def": "from one end of a road or river toward the other",
    "cn_def": "沿著"
  },
  "across": {
    "pos": "prep.",
    "en_def": "from one side to the other side of something",
    "cn_def": "橫越；在…對面"
  },
  "up": {
    "pos": "prep.",
    "en_def": "to a higher place",
    "cn_def": "向上"
  },
  "than": {
    "pos": "prep.",
    "en_def": "used when you compare two people or things",
    "cn_def": "比"
  },
  "except": {
    "pos": "prep.",
    "en_def": "but not; not including",
    "cn_def": "除了…之外"
  },
  "about": {
    "pos": "prep.",
    "en_def": "on the subject of",
    "cn_def": "關於"
  },
  "without": {
    "pos": "prep.",
    "en_def": "not having something",
    "cn_def": "沒有"
  },
  "like": {
    "pos": "prep.",
    "en_def": "almost the same as",
    "cn_def": "像；如"
  },
  "by": {
    "pos": "prep.",
    "en_def": "using a kind of transportation",
    "cn_def": "藉著；搭乘"
  }
};

const EXTRA_GLOSSES = {};
