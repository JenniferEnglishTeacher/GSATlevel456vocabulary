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
    "en_def": "",
    "sentence": "Q: What is {{BLANK}} in your hand? — A: It's a new watch. My grandpa gives it to me.",
    "cn": "你手上的這個是什麼？ — 它是一支新手錶，我爺爺送給我的。"
  },
  {
    "word": "that",
    "pos": "det.",
    "cn_def": "那個",
    "en_def": "",
    "sentence": "Q: What is {{BLANK}} big building over there? — A: It's the new library. We read books there.",
    "cn": "那邊那棟大建築物是什麼？ — 它是新的圖書館，我們在那裡讀書。"
  },
  {
    "word": "these",
    "pos": "det.",
    "cn_def": "這些",
    "en_def": "",
    "sentence": "Q: Do you like {{BLANK}} shoes? — A: Yes, I do. They are cute and comfortable.",
    "cn": "你喜歡這些（這雙）鞋子嗎？ — 是的，我喜歡。它們很可愛又舒適。"
  },
  {
    "word": "those",
    "pos": "det.",
    "cn_def": "那些",
    "en_def": "",
    "sentence": "Q: Does your sister want {{BLANK}} cookies over there? — A: Yes, she does. She loves cookies.",
    "cn": "你妹妹想要那邊那些餅乾嗎？ — 是的，她想要。她很愛餅乾。"
  },
  {
    "word": "my",
    "pos": "det.",
    "cn_def": "我的",
    "en_def": "",
    "sentence": "Q: Whose eraser is this? — A: It's {{BLANK}} eraser. Thank you.",
    "cn": "這是誰的橡皮擦？ — 是我的橡皮擦，謝謝你。"
  },
  {
    "word": "your",
    "pos": "det.",
    "cn_def": "你（們）的",
    "en_def": "",
    "sentence": "Q: Do you like {{BLANK}} new school, Amy? — A: Yes, I do. My classmates are very nice.",
    "cn": "艾美，你喜歡你的新學校嗎？ — 是的，我喜歡。我的同學們都很好。"
  },
  {
    "word": "his",
    "pos": "det.",
    "cn_def": "他的",
    "en_def": "",
    "sentence": "Q: Whose bike is this? Is it Tom's? — A: Yes, it is. It's {{BLANK}} new bike. He rides it to school.",
    "cn": "這是誰的腳踏車？是湯姆的嗎？ — 是的，是他的新腳踏車，他騎它去上學。"
  },
  {
    "word": "her",
    "pos": "det.",
    "cn_def": "她的",
    "en_def": "",
    "sentence": "Q: Does Amy do {{BLANK}} homework after dinner? — A: Yes, she does. She is a good student.",
    "cn": "艾美晚餐後寫她的功課嗎？ — 是的，她會。她是個好學生。"
  },
  {
    "word": "its",
    "pos": "det.",
    "cn_def": "牠的；它的",
    "en_def": "",
    "sentence": "Q: Does your dog like {{BLANK}} new house? — A: Yes, it does. It sleeps in it every night.",
    "cn": "你的狗喜歡牠的新狗屋嗎？ — 是的，牠喜歡。牠每天晚上都睡在裡面。"
  },
  {
    "word": "our",
    "pos": "det.",
    "cn_def": "我們的",
    "en_def": "",
    "sentence": "Q: Where do you and Ben have English class? — A: We have it in {{BLANK}} classroom.",
    "cn": "你和班在哪裡上英文課？ — 我們在我們的教室上課。"
  },
  {
    "word": "their",
    "pos": "det.",
    "cn_def": "他們的",
    "en_def": "",
    "sentence": "Q: What do your parents do on Sundays? — A: They wash {{BLANK}} car together.",
    "cn": "你爸媽星期天做什麼？ — 他們一起洗他們的車。"
  },
  {
    "word": "a / an",
    "pos": "art.",
    "cn_def": "一（個）",
    "en_def": "",
    "sentence": "Q: What does Ben want for lunch? — A: He wants {{BLANK}} apple and a hamburger.",
    "cn": "班午餐想吃什麼？— 他想要一顆蘋果和一個漢堡。"
  },
  {
    "word": "the",
    "pos": "art.",
    "cn_def": "定冠詞（這；那）",
    "en_def": "",
    "sentence": "Q: What do you see in the sky at night? — A: I see {{BLANK}} moon and many stars.",
    "cn": "你晚上在天空看到什麼？ — 我看到月亮和很多星星。"
  },
  {
    "word": "every",
    "pos": "det.",
    "cn_def": "每一（個）的",
    "en_def": "",
    "sentence": "Q: How often does Lisa play tennis? — A: She plays tennis {{BLANK}} Sunday.",
    "cn": "麗莎多久打一次網球？ — 她每個星期天打網球。"
  }
];

const MCQS = [
  {
    "q": "Q: What is ______ in your hand? — A: It's a new watch. My grandpa gives it to me.【這個】",
    "options": [
      "its",
      "his",
      "this",
      "my"
    ],
    "answer": 2,
    "cn": "你手上的這個是什麼？ — 它是一支新手錶，我爺爺送給我的。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What is ______ big building over there? — A: It's the new library. We read books there.【那個】",
    "options": [
      "every",
      "that",
      "your",
      "these"
    ],
    "answer": 1,
    "cn": "那邊那棟大建築物是什麼？ — 它是新的圖書館，我們在那裡讀書。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Do you like ______ shoes? — A: Yes, I do. They are cute and comfortable.【這些】",
    "options": [
      "these",
      "that",
      "those",
      "our"
    ],
    "answer": 0,
    "cn": "你喜歡這些（這雙）鞋子嗎？ — 是的，我喜歡。它們很可愛又舒適。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Does your sister want ______ cookies over there? — A: Yes, she does. She loves cookies.【那些】",
    "options": [
      "these",
      "their",
      "our",
      "those"
    ],
    "answer": 3,
    "cn": "你妹妹想要那邊那些餅乾嗎？ — 是的，她想要。她很愛餅乾。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Whose eraser is this? — A: It's ______ eraser. Thank you.【我的】",
    "options": [
      "my",
      "her",
      "these",
      "that"
    ],
    "answer": 0,
    "cn": "這是誰的橡皮擦？ — 是我的橡皮擦，謝謝你。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Do you like ______ new school, Amy? — A: Yes, I do. My classmates are very nice.【你（們）的】",
    "options": [
      "her",
      "that",
      "those",
      "your"
    ],
    "answer": 3,
    "cn": "艾美，你喜歡你的新學校嗎？ — 是的，我喜歡。我的同學們都很好。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Whose bike is this? Is it Tom's? — A: Yes, it is. It's ______ new bike. He rides it to school.【他的】",
    "options": [
      "its",
      "his",
      "this",
      "your"
    ],
    "answer": 1,
    "cn": "這是誰的腳踏車？是湯姆的嗎？ — 是的，是他的新腳踏車，他騎它去上學。",
    "vocabIndex": 6
  },
  {
    "q": "Q: Does Amy do ______ homework after dinner? — A: Yes, she does. She is a good student.【她的】",
    "options": [
      "their",
      "those",
      "her",
      "our"
    ],
    "answer": 2,
    "cn": "艾美晚餐後寫她的功課嗎？ — 是的，她會。她是個好學生。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Does your dog like ______ new house? — A: Yes, it does. It sleeps in it every night.【牠的；它的】",
    "options": [
      "its",
      "his",
      "this",
      "your"
    ],
    "answer": 0,
    "cn": "你的狗喜歡牠的新狗屋嗎？ — 是的，牠喜歡。牠每天晚上都睡在裡面。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Where do you and Ben have English class? — A: We have it in ______ classroom.【我們的】",
    "options": [
      "these",
      "our",
      "their",
      "her"
    ],
    "answer": 1,
    "cn": "你和班在哪裡上英文課？ — 我們在我們的教室上課。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What do your parents do on Sundays? — A: They wash ______ car together.【他們的】",
    "options": [
      "your",
      "her",
      "their",
      "every"
    ],
    "answer": 2,
    "cn": "你爸媽星期天做什麼？ — 他們一起洗他們的車。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What does Ben want for lunch? — A: He wants ______ apple and a hamburger.【一（個）】",
    "options": [
      "the",
      "of",
      "abroad",
      "an"
    ],
    "answer": 3,
    "cn": "班午餐想吃什麼？— 他想要一顆蘋果和一個漢堡。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What do you see in the sky at night? — A: I see ______ moon and many stars.【定冠詞（這；那）】",
    "options": [
      "the",
      "an",
      "who",
      "really"
    ],
    "answer": 0,
    "cn": "你晚上在天空看到什麼？ — 我看到月亮和很多星星。",
    "vocabIndex": 12
  },
  {
    "q": "Q: How often does Lisa play tennis? — A: She plays tennis ______ Sunday.【每一（個）的】",
    "options": [
      "my",
      "those",
      "every",
      "your"
    ],
    "answer": 2,
    "cn": "麗莎多久打一次網球？ — 她每個星期天打網球。",
    "vocabIndex": 13
  }
];

const LOOKUP = {
  "this": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "這個"
  },
  "that": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "那個"
  },
  "these": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "這些"
  },
  "those": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "那些"
  },
  "my": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "我的"
  },
  "your": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "你（們）的"
  },
  "his": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "他的"
  },
  "her": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "她的"
  },
  "its": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "牠的；它的"
  },
  "our": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "我們的"
  },
  "their": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "他們的"
  },
  "an": {
    "pos": "art.",
    "en_def": "",
    "cn_def": "一（個）"
  },
  "the": {
    "pos": "art.",
    "en_def": "",
    "cn_def": "定冠詞（這；那）"
  },
  "every": {
    "pos": "det.",
    "en_def": "",
    "cn_def": "每一（個）的"
  },
  "who": {
    "pos": "pron.",
    "en_def": "",
    "cn_def": "誰"
  },
  "of": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "…的"
  },
  "abroad": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "在國外"
  },
  "really": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "真地"
  }
};

const EXTRA_GLOSSES = {};
