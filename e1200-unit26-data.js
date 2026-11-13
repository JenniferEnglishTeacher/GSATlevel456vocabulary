// Unit 26 Quiz Data: Articles & Determiners 冠詞與限定詞（第27區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U26 - Articles & Determiners",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "this",
    "pos": "det.",
    "cn_def": "這個",
    "en_def": "the one that is here, near me",
    "sentence": "Q: What is {{BLANK}} in your hand? — A: It's a new watch. My grandpa gives it to me.",
    "cn": "你手上的這個是什麼？ — 它是一支新手錶，我爺爺送給我的。"
  },
  {
    "word": "that",
    "pos": "det.",
    "cn_def": "那個",
    "en_def": "the one that is there, not near me",
    "sentence": "Q: What is {{BLANK}} big building over there? — A: It's the new library. We read books there.",
    "cn": "那邊那棟大建築物是什麼？ — 它是新的圖書館，我們在那裡讀書。"
  },
  {
    "word": "these",
    "pos": "det.",
    "cn_def": "這些",
    "en_def": "the ones that are here, near me",
    "sentence": "Q: Do you like {{BLANK}} shoes? — A: Yes, I do. They are cute and comfortable.",
    "cn": "你喜歡這些（這雙）鞋子嗎？ — 是的，我喜歡。它們很可愛又舒適。"
  },
  {
    "word": "those",
    "pos": "det.",
    "cn_def": "那些",
    "en_def": "the ones that are there, not near me",
    "sentence": "Q: Does your sister want {{BLANK}} cookies over there? — A: Yes, she does. She loves cookies.",
    "cn": "你妹妹想要那邊那些餅乾嗎？ — 是的，她想要。她很愛餅乾。"
  },
  {
    "word": "my",
    "pos": "det.",
    "cn_def": "我的",
    "en_def": "belonging to me",
    "sentence": "Q: Whose eraser is this? — A: It's {{BLANK}} eraser. Thank you.",
    "cn": "這是誰的橡皮擦？ — 是我的橡皮擦，謝謝你。"
  },
  {
    "word": "your",
    "pos": "det.",
    "cn_def": "你（們）的",
    "en_def": "belonging to you",
    "sentence": "Q: Do you like {{BLANK}} new school, Amy? — A: Yes, I do. My classmates are very nice.",
    "cn": "艾美，你喜歡你的新學校嗎？ — 是的，我喜歡。我的同學們都很好。"
  },
  {
    "word": "his",
    "pos": "det.",
    "cn_def": "他的",
    "en_def": "belonging to him",
    "sentence": "Q: Whose bike is this? Is it Tom's? — A: Yes, it is. It's {{BLANK}} new bike. He rides it to school.",
    "cn": "這是誰的腳踏車？是湯姆的嗎？ — 是的，是他的新腳踏車，他騎它去上學。"
  },
  {
    "word": "her",
    "pos": "det.",
    "cn_def": "她的",
    "en_def": "belonging to her",
    "sentence": "Q: Does Amy do {{BLANK}} homework after dinner? — A: Yes, she does. She is a good student.",
    "cn": "艾美晚餐後寫她的功課嗎？ — 是的，她會。她是個好學生。"
  },
  {
    "word": "its",
    "pos": "det.",
    "cn_def": "牠的；它的",
    "en_def": "belonging to it",
    "sentence": "Q: Does your dog like {{BLANK}} new house? — A: Yes, it does. It sleeps in it every night.",
    "cn": "你的狗喜歡牠的新狗屋嗎？ — 是的，牠喜歡。牠每天晚上都睡在裡面。"
  },
  {
    "word": "our",
    "pos": "det.",
    "cn_def": "我們的",
    "en_def": "belonging to us",
    "sentence": "Q: Where do you and Ben have English class? — A: We have it in {{BLANK}} classroom.",
    "cn": "你和班在哪裡上英文課？ — 我們在我們的教室上課。"
  },
  {
    "word": "their",
    "pos": "det.",
    "cn_def": "他們的",
    "en_def": "belonging to them",
    "sentence": "Q: What do your parents do on Sundays? — A: They wash {{BLANK}} car together.",
    "cn": "你爸媽星期天做什麼？ — 他們一起洗他們的車。"
  },
  {
    "word": "a / an",
    "pos": "art.",
    "cn_def": "一（個）",
    "en_def": "one; used before a noun (an before a, e, i, o, u sounds)",
    "sentence": "Q: What does Ben want for lunch? — A: He wants {{BLANK}} apple and a hamburger.",
    "cn": "班午餐想吃什麼？— 他想要一顆蘋果和一個漢堡。"
  },
  {
    "word": "the",
    "pos": "art.",
    "cn_def": "定冠詞（這；那）",
    "en_def": "used before a noun when we know which one",
    "sentence": "Q: What do you see in the sky at night? — A: I see {{BLANK}} moon and many stars.",
    "cn": "你晚上在天空看到什麼？ — 我看到月亮和很多星星。"
  },
  {
    "word": "every",
    "pos": "det.",
    "cn_def": "每一（個）的",
    "en_def": "each one of a group; all",
    "sentence": "Q: How often does Lisa play tennis? — A: She plays tennis {{BLANK}} Sunday.",
    "cn": "麗莎多久打一次網球？ — 她每個星期天打網球。"
  }
];

const MCQS = [
  {
    "q": "Look at ______ picture in my hand. I drew it yesterday.",
    "options": [
      "those",
      "these",
      "every",
      "this"
    ],
    "answer": 3,
    "cn": "你手上的這個是什麼？ — 它是一支新手錶，我爺爺送給我的。",
    "vocabIndex": 0
  },
  {
    "q": "Do you see ______ tall building over there? My father works in it.",
    "options": [
      "that",
      "these",
      "those",
      "every"
    ],
    "answer": 0,
    "cn": "那邊那棟大建築物是什麼？ — 它是新的圖書館，我們在那裡讀書。",
    "vocabIndex": 1
  },
  {
    "q": "Are ______ shoes yours? I found them here under my desk.",
    "options": [
      "this",
      "that",
      "these",
      "every"
    ],
    "answer": 2,
    "cn": "你喜歡這些（這雙）鞋子嗎？ — 是的，我喜歡。它們很可愛又舒適。",
    "vocabIndex": 2
  },
  {
    "q": "Look at ______ birds over there in the sky. There are more than twenty of them.",
    "options": [
      "this",
      "those",
      "that",
      "every"
    ],
    "answer": 1,
    "cn": "你妹妹想要那邊那些餅乾嗎？ — 是的，她想要。她很愛餅乾。",
    "vocabIndex": 3
  },
  {
    "q": "I am Tom, and this is ______ sister, Amy. She is two years younger than I am.",
    "options": [
      "her",
      "its",
      "my",
      "their"
    ],
    "answer": 2,
    "cn": "這是誰的橡皮擦？ — 是我的橡皮擦，謝謝你。",
    "vocabIndex": 4
  },
  {
    "q": "You dropped ______ pen, Lisa. Here you are.",
    "options": [
      "its",
      "your",
      "their",
      "our"
    ],
    "answer": 1,
    "cn": "艾美，你喜歡你的新學校嗎？ — 是的，我喜歡。我的同學們都很好。",
    "vocabIndex": 5
  },
  {
    "q": "Tom forgot ______ lunch box today, so he has nothing to eat.",
    "options": [
      "his",
      "her",
      "its",
      "their"
    ],
    "answer": 0,
    "cn": "這是誰的腳踏車？是湯姆的嗎？ — 是的，是他的新腳踏車，他騎它去上學。",
    "vocabIndex": 6
  },
  {
    "q": "Amy loves ______ little brother. She reads him a story every night.",
    "options": [
      "his",
      "its",
      "a",
      "her"
    ],
    "answer": 3,
    "cn": "艾美晚餐後寫她的功課嗎？ — 是的，她會。她是個好學生。",
    "vocabIndex": 7
  },
  {
    "q": "The dog is moving ______ tail. It is happy to see us.",
    "options": [
      "its",
      "their",
      "our",
      "your"
    ],
    "answer": 0,
    "cn": "你的狗喜歡牠的新狗屋嗎？ — 是的，牠喜歡。牠每天晚上都睡在裡面。",
    "vocabIndex": 8
  },
  {
    "q": "We love ______ school. The teachers are nice to us, and we have many friends here.",
    "options": [
      "its",
      "his",
      "our",
      "her"
    ],
    "answer": 2,
    "cn": "你和班在哪裡上英文課？ — 我們在我們的教室上課。",
    "vocabIndex": 9
  },
  {
    "q": "Mr. and Mrs. Lin love ______ children very much. They take them to the park every weekend.",
    "options": [
      "its",
      "his",
      "her",
      "their"
    ],
    "answer": 3,
    "cn": "你爸媽星期天做什麼？ — 他們一起洗他們的車。",
    "vocabIndex": 10
  },
  {
    "q": "I eat ______ apple every morning. Mom says it keeps me healthy.",
    "options": [
      "a",
      "an",
      "those",
      "every"
    ],
    "answer": 1,
    "cn": "班午餐想吃什麼？— 他想要一顆蘋果和一個漢堡。",
    "vocabIndex": 11
  },
  {
    "q": "______ sun comes up in the east. There is only one in our sky.",
    "options": [
      "A",
      "An",
      "The",
      "Every"
    ],
    "answer": 2,
    "cn": "你晚上在天空看到什麼？ — 我看到月亮和很多星星。",
    "vocabIndex": 12
  },
  {
    "q": "I brush my teeth ______ morning and night. I never forget to do it.",
    "options": [
      "these",
      "every",
      "those",
      "its"
    ],
    "answer": 1,
    "cn": "麗莎多久打一次網球？ — 她每個星期天打網球。",
    "vocabIndex": 13
  }
];

const LOOKUP = {
  "those": {
    "pos": "det.",
    "en_def": "the ones that are there, not near me",
    "cn_def": "那些"
  },
  "these": {
    "pos": "det.",
    "en_def": "the ones that are here, near me",
    "cn_def": "這些"
  },
  "every": {
    "pos": "det.",
    "en_def": "each one of a group; all",
    "cn_def": "每一（個）的"
  },
  "this": {
    "pos": "det.",
    "en_def": "the one that is here, near me",
    "cn_def": "這個"
  },
  "that": {
    "pos": "det.",
    "en_def": "the one that is there, not near me",
    "cn_def": "那個"
  },
  "her": {
    "pos": "det.",
    "en_def": "belonging to her",
    "cn_def": "她的"
  },
  "its": {
    "pos": "det.",
    "en_def": "belonging to it",
    "cn_def": "牠的；它的"
  },
  "my": {
    "pos": "det.",
    "en_def": "belonging to me",
    "cn_def": "我的"
  },
  "their": {
    "pos": "det.",
    "en_def": "belonging to them",
    "cn_def": "他們的"
  },
  "your": {
    "pos": "det.",
    "en_def": "belonging to you",
    "cn_def": "你（們）的"
  },
  "our": {
    "pos": "det.",
    "en_def": "belonging to us",
    "cn_def": "我們的"
  },
  "his": {
    "pos": "det.",
    "en_def": "belonging to him",
    "cn_def": "他的"
  },
  "a": {
    "pos": "art.",
    "en_def": "",
    "cn_def": "一（個）"
  },
  "an": {
    "pos": "art.",
    "en_def": "",
    "cn_def": "一（個）"
  },
  "the": {
    "pos": "art.",
    "en_def": "used before a noun when we know which one",
    "cn_def": "定冠詞（這；那）"
  }
};

const EXTRA_GLOSSES = {};
