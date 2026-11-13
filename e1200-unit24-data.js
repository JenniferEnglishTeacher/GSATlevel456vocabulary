// Unit 24 Quiz Data: Geographical Terms 地理名詞（第25區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U24 - Geographical Terms",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "area",
    "pos": "n.",
    "cn_def": "地區",
    "en_def": "",
    "sentence": "Q: Is this an old {{BLANK}}? — A: Yes, it is. There are many old houses near the station.",
    "cn": "這是一個老地區嗎？ — 是的，車站附近有很多老房子。"
  },
  {
    "word": "hill",
    "pos": "n.",
    "cn_def": "小山",
    "en_def": "",
    "sentence": "Q: What is there near your school? — A: There is a small {{BLANK}} near my school. We often walk up it.",
    "cn": "你的學校附近有什麼？ — 我的學校附近有一座小山，我們常常走上去。"
  },
  {
    "word": "mountain (mountains)",
    "pos": "n.",
    "cn_def": "山",
    "en_def": "",
    "sentence": "Q: Are there any mountains near Taipei? — A: Yes, there are. There are many high {{BLANK}} near Taipei.",
    "cn": "台北附近有山嗎？ — 有，台北附近有很多高山。"
  },
  {
    "word": "island (islands)",
    "pos": "n.",
    "cn_def": "島嶼",
    "en_def": "",
    "sentence": "Q: What is there near Taiwan? — A: There are many small {{BLANK}} near Taiwan, like Green Island.",
    "cn": "台灣附近有什麼？ — 台灣附近有很多小島，像是綠島。"
  },
  {
    "word": "pond",
    "pos": "n.",
    "cn_def": "池塘",
    "en_def": "",
    "sentence": "Q: Is there a {{BLANK}} in the park? — A: Yes, there is. There are many fish and frogs in it.",
    "cn": "公園裡有池塘嗎？ — 有，裡面有很多魚和青蛙。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘",
    "en_def": "",
    "sentence": "Q: What can you do at the {{BLANK}}? — A: I can play in the sand and swim in the sea.",
    "cn": "你在海灘可以做什麼？ — 我可以玩沙，也可以在海裡游泳。"
  },
  {
    "word": "sea",
    "pos": "n.",
    "cn_def": "海",
    "en_def": "",
    "sentence": "Q: What can your brother do in the {{BLANK}}? — A: He can swim and look at the fish.",
    "cn": "你哥哥在海裡可以做什麼？ — 他可以游泳和看魚。"
  },
  {
    "word": "pool",
    "pos": "n.",
    "cn_def": "游泳池",
    "en_def": "",
    "sentence": "Q: What can we do at the swimming {{BLANK}}? — A: We can swim and play in the water. But don't run there.",
    "cn": "我們在游泳池可以做什麼？ — 我們可以游泳、玩水，但不要在那裡跑。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河",
    "en_def": "",
    "sentence": "Q: What does your grandpa do on Sundays? — A: He goes fishing by the {{BLANK}}.",
    "cn": "你爺爺星期天做什麼？ — 他去河邊釣魚。"
  },
  {
    "word": "bank",
    "pos": "n.",
    "cn_def": "（河）岸；堤",
    "en_def": "",
    "sentence": "Q: Where do you and your friends ride bikes? — A: We ride bikes along the river {{BLANK}}.",
    "cn": "你和你的朋友在哪裡騎腳踏車？ — 我們沿著河岸騎腳踏車。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖",
    "en_def": "",
    "sentence": "Q: Where does Amy go on vacation? — A: She goes to Sun Moon {{BLANK}}. She takes a boat there.",
    "cn": "艾美放假去哪裡？ — 她去日月潭，她在那裡搭船。"
  },
  {
    "word": "spring",
    "pos": "n.",
    "cn_def": "泉",
    "en_def": "",
    "sentence": "Q: What do people do in Beitou in winter? — A: They take a bath in a hot {{BLANK}}.",
    "cn": "人們冬天在北投做什麼？ — 他們去泡溫泉。"
  }
];

const MCQS = [
  {
    "q": "Q: Is this an old ______? — A: Yes, it is. There are many old houses near the station.【地區】",
    "options": [
      "bank",
      "pond",
      "area",
      "river"
    ],
    "answer": 2,
    "cn": "這是一個老地區嗎？ — 是的，車站附近有很多老房子。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What is there near your school? — A: There is a small ______ near my school. We often walk up it.【小山】",
    "options": [
      "sea",
      "hill",
      "bank",
      "pool"
    ],
    "answer": 1,
    "cn": "你的學校附近有什麼？ — 我的學校附近有一座小山，我們常常走上去。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Are there any mountains near Taipei? — A: Yes, there are. There are many high ______ near Taipei.【山】",
    "options": [
      "islands",
      "pond",
      "bank",
      "mountains"
    ],
    "answer": 3,
    "cn": "台北附近有山嗎？ — 有，台北附近有很多高山。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What is there near Taiwan? — A: There are many small ______ near Taiwan, like Green Island.【島嶼】",
    "options": [
      "islands",
      "mountains",
      "pool",
      "lake"
    ],
    "answer": 0,
    "cn": "台灣附近有什麼？ — 台灣附近有很多小島，像是綠島。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Is there a ______ in the park? — A: Yes, there is. There are many fish and frogs in it.【池塘】",
    "options": [
      "sea",
      "beach",
      "area",
      "pond"
    ],
    "answer": 3,
    "cn": "公園裡有池塘嗎？ — 有，裡面有很多魚和青蛙。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What can you do at the ______? — A: I can play in the sand and swim in the sea.【海灘】",
    "options": [
      "pool",
      "pond",
      "beach",
      "hill"
    ],
    "answer": 2,
    "cn": "你在海灘可以做什麼？ — 我可以玩沙，也可以在海裡游泳。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What can your brother do in the ______? — A: He can swim and look at the fish.【海】",
    "options": [
      "lake",
      "sea",
      "pool",
      "bank"
    ],
    "answer": 1,
    "cn": "你哥哥在海裡可以做什麼？ — 他可以游泳和看魚。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What can we do at the swimming ______? — A: We can swim and play in the water. But don't run there.【游泳池】",
    "options": [
      "pool",
      "river",
      "area",
      "beach"
    ],
    "answer": 0,
    "cn": "我們在游泳池可以做什麼？ — 我們可以游泳、玩水，但不要在那裡跑。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What does your grandpa do on Sundays? — A: He goes fishing by the ______.【河】",
    "options": [
      "area",
      "hill",
      "bank",
      "river"
    ],
    "answer": 3,
    "cn": "你爺爺星期天做什麼？ — 他去河邊釣魚。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Where do you and your friends ride bikes? — A: We ride bikes along the river ______.【（河）岸；堤】",
    "options": [
      "pond",
      "bank",
      "hill",
      "sea"
    ],
    "answer": 1,
    "cn": "你和你的朋友在哪裡騎腳踏車？ — 我們沿著河岸騎腳踏車。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Where does Amy go on vacation? — A: She goes to Sun Moon ______. She takes a boat there.【湖】",
    "options": [
      "lake",
      "pond",
      "pool",
      "sea"
    ],
    "answer": 0,
    "cn": "艾美放假去哪裡？ — 她去日月潭，她在那裡搭船。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What do people do in Beitou in winter? — A: They take a bath in a hot ______.【泉】",
    "options": [
      "area",
      "lake",
      "spring",
      "bank"
    ],
    "answer": 2,
    "cn": "人們冬天在北投做什麼？ — 他們去泡溫泉。",
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "spring": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "春天"
  },
  "beach": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "海灘"
  },
  "pool": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "游泳池"
  },
  "bank": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "銀行"
  },
  "area": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地區"
  },
  "hill": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小山"
  },
  "mountains": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "山"
  },
  "islands": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "島嶼"
  },
  "pond": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "池塘"
  },
  "sea": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "海"
  },
  "river": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "河"
  },
  "lake": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "湖"
  }
};

const EXTRA_GLOSSES = {};
