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
    "en_def": "a part of a place, a city, or a country",
    "sentence": "Q: Is this an old {{BLANK}}? — A: Yes, it is. There are many old houses near the station.",
    "cn": "這是一個老地區嗎？ — 是的，車站附近有很多老房子。"
  },
  {
    "word": "hill",
    "pos": "n.",
    "cn_def": "小山",
    "en_def": "a high piece of land, smaller than a mountain",
    "sentence": "Q: What is there near your school? — A: There is a small {{BLANK}} near my school. We often walk up it.",
    "cn": "你的學校附近有什麼？ — 我的學校附近有一座小山，我們常常走上去。"
  },
  {
    "word": "mountain (mountains)",
    "pos": "n.",
    "cn_def": "山",
    "en_def": "a very high piece of land",
    "sentence": "Q: Are there any mountains near Taipei? — A: Yes, there are. There are many high {{BLANK}} near Taipei.",
    "cn": "台北附近有山嗎？ — 有，台北附近有很多高山。"
  },
  {
    "word": "island (islands)",
    "pos": "n.",
    "cn_def": "島嶼",
    "en_def": "a piece of land with water all around it",
    "sentence": "Q: What is there near Taiwan? — A: There are many small {{BLANK}} near Taiwan, like Green Island.",
    "cn": "台灣附近有什麼？ — 台灣附近有很多小島，像是綠島。"
  },
  {
    "word": "pond",
    "pos": "n.",
    "cn_def": "池塘",
    "en_def": "a small area of water, smaller than a lake",
    "sentence": "Q: Is there a {{BLANK}} in the park? — A: Yes, there is. There are many fish and frogs in it.",
    "cn": "公園裡有池塘嗎？ — 有，裡面有很多魚和青蛙。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘",
    "en_def": "a place with sand next to the sea",
    "sentence": "Q: What can you do at the {{BLANK}}? — A: I can play in the sand and swim in the sea.",
    "cn": "你在海灘可以做什麼？ — 我可以玩沙，也可以在海裡游泳。"
  },
  {
    "word": "sea",
    "pos": "n.",
    "cn_def": "海",
    "en_def": "the salt water that covers much of the earth",
    "sentence": "Q: What can your brother do in the {{BLANK}}? — A: He can swim and look at the fish.",
    "cn": "你哥哥在海裡可以做什麼？ — 他可以游泳和看魚。"
  },
  {
    "word": "pool",
    "pos": "n.",
    "cn_def": "游泳池",
    "en_def": "a place full of water for swimming",
    "sentence": "Q: What can we do at the swimming {{BLANK}}? — A: We can swim and play in the water. But don't run there.",
    "cn": "我們在游泳池可以做什麼？ — 我們可以游泳、玩水，但不要在那裡跑。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河",
    "en_def": "a long line of water that runs to the sea",
    "sentence": "Q: What does your grandpa do on Sundays? — A: He goes fishing by the {{BLANK}}.",
    "cn": "你爺爺星期天做什麼？ — 他去河邊釣魚。"
  },
  {
    "word": "bank",
    "pos": "n.",
    "cn_def": "（河）岸；堤",
    "en_def": "the land along the side of a river",
    "sentence": "Q: Where do you and your friends ride bikes? — A: We ride bikes along the river {{BLANK}}.",
    "cn": "你和你的朋友在哪裡騎腳踏車？ — 我們沿著河岸騎腳踏車。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖",
    "en_def": "a big area of water with land all around it",
    "sentence": "Q: Where does Amy go on vacation? — A: She goes to Sun Moon {{BLANK}}. She takes a boat there.",
    "cn": "艾美放假去哪裡？ — 她去日月潭，她在那裡搭船。"
  },
  {
    "word": "spring",
    "pos": "n.",
    "cn_def": "泉",
    "en_def": "a place where water comes up from under the ground",
    "sentence": "Q: What do people do in Beitou in winter? — A: They take a bath in a hot {{BLANK}}.",
    "cn": "人們冬天在北投做什麼？ — 他們去泡溫泉。"
  }
];

const MCQS = [
  {
    "q": "Many families live in this ______ of the city because there are good schools and parks here.",
    "options": [
      "area",
      "island",
      "river",
      "pond"
    ],
    "answer": 0,
    "cn": "這是一個老地區嗎？ — 是的，車站附近有很多老房子。",
    "vocabIndex": 0
  },
  {
    "q": "There is a small ______ behind our school. We can walk to the top in ten minutes.",
    "options": [
      "pond",
      "hill",
      "lake",
      "sea"
    ],
    "answer": 1,
    "cn": "你的學校附近有什麼？ — 我的學校附近有一座小山，我們常常走上去。",
    "vocabIndex": 1
  },
  {
    "q": "Taiwan has many high ______. More than two hundred of them are over 3,000 meters.",
    "options": [
      "ponds",
      "beaches",
      "mountains",
      "pools"
    ],
    "answer": 2,
    "cn": "台北附近有山嗎？ — 有，台北附近有很多高山。",
    "vocabIndex": 2
  },
  {
    "q": "Japan has four big ______ and many small ones. There is sea all around each of them.",
    "options": [
      "hills",
      "rivers",
      "lakes",
      "islands"
    ],
    "answer": 3,
    "cn": "台灣附近有什麼？ — 台灣附近有很多小島，像是綠島。",
    "vocabIndex": 3
  },
  {
    "q": "There is a small ______ in the park. Ducks swim in it, and children feed the fish there.",
    "options": [
      "pond",
      "hill",
      "beach",
      "island"
    ],
    "answer": 0,
    "cn": "公園裡有池塘嗎？ — 有，裡面有很多魚和青蛙。",
    "vocabIndex": 4
  },
  {
    "q": "We played in the sand at the ______ and watched the waves all day.",
    "options": [
      "hill",
      "pond",
      "lake",
      "beach"
    ],
    "answer": 3,
    "cn": "你在海灘可以做什麼？ — 我可以玩沙，也可以在海裡游泳。",
    "vocabIndex": 5
  },
  {
    "q": "Whales and sharks live in the ______. Its water is salty, so we can't drink it.",
    "options": [
      "pond",
      "pool",
      "sea",
      "spring"
    ],
    "answer": 2,
    "cn": "你哥哥在海裡可以做什麼？ — 他可以游泳和看魚。",
    "vocabIndex": 6
  },
  {
    "q": "We can't go to the beach, so let's swim in the ______ at the sports center.",
    "options": [
      "hill",
      "pool",
      "bank",
      "area"
    ],
    "answer": 1,
    "cn": "我們在游泳池可以做什麼？ — 我們可以游泳、玩水，但不要在那裡跑。",
    "vocabIndex": 7
  },
  {
    "q": "The Tamsui ______ runs through Taipei and goes into the sea.",
    "options": [
      "River",
      "Hill",
      "Island",
      "Beach"
    ],
    "answer": 0,
    "cn": "你爺爺星期天做什麼？ — 他去河邊釣魚。",
    "vocabIndex": 8
  },
  {
    "q": "We sat on the ______ of the river and fished all afternoon.",
    "options": [
      "sea",
      "bank",
      "pool",
      "island"
    ],
    "answer": 1,
    "cn": "你和你的朋友在哪裡騎腳踏車？ — 我們沿著河岸騎腳踏車。",
    "vocabIndex": 9
  },
  {
    "q": "Sun Moon ______ is in the middle of Taiwan. Many visitors take a boat on its beautiful water.",
    "options": [
      "Hill",
      "Beach",
      "Sea",
      "Lake"
    ],
    "answer": 3,
    "cn": "艾美放假去哪裡？ — 她去日月潭，她在那裡搭船。",
    "vocabIndex": 10
  },
  {
    "q": "People love to sit in the hot ______ in Beitou in winter. The warm water comes up from under the ground.",
    "options": [
      "beach",
      "hill",
      "spring",
      "island"
    ],
    "answer": 2,
    "cn": "人們冬天在北投做什麼？ — 他們去泡溫泉。",
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "area": {
    "pos": "n.",
    "en_def": "a part of a place, a city, or a country",
    "cn_def": "地區"
  },
  "island": {
    "pos": "n.",
    "en_def": "a piece of land with water all around it",
    "cn_def": "島嶼"
  },
  "river": {
    "pos": "n.",
    "en_def": "a long line of water that runs to the sea",
    "cn_def": "河"
  },
  "pond": {
    "pos": "n.",
    "en_def": "a small area of water, smaller than a lake",
    "cn_def": "池塘"
  },
  "hill": {
    "pos": "n.",
    "en_def": "a high piece of land, smaller than a mountain",
    "cn_def": "小山"
  },
  "lake": {
    "pos": "n.",
    "en_def": "a big area of water with land all around it",
    "cn_def": "湖"
  },
  "sea": {
    "pos": "n.",
    "en_def": "the salt water that covers much of the earth",
    "cn_def": "海"
  },
  "ponds": {
    "pos": "n.",
    "en_def": "a small area of water, smaller than a lake",
    "cn_def": "池塘"
  },
  "beaches": {
    "pos": "n.",
    "en_def": "a place with sand next to the sea",
    "cn_def": "海灘"
  },
  "mountains": {
    "pos": "n.",
    "en_def": "a very high piece of land",
    "cn_def": "山"
  },
  "pools": {
    "pos": "n.",
    "en_def": "a place full of water for swimming",
    "cn_def": "游泳池"
  },
  "hills": {
    "pos": "n.",
    "en_def": "a high piece of land, smaller than a mountain",
    "cn_def": "小山"
  },
  "rivers": {
    "pos": "n.",
    "en_def": "a long line of water that runs to the sea",
    "cn_def": "河"
  },
  "lakes": {
    "pos": "n.",
    "en_def": "a big area of water with land all around it",
    "cn_def": "湖"
  },
  "islands": {
    "pos": "n.",
    "en_def": "a piece of land with water all around it",
    "cn_def": "島嶼"
  },
  "beach": {
    "pos": "n.",
    "en_def": "a place with sand next to the sea",
    "cn_def": "海灘"
  },
  "pool": {
    "pos": "n.",
    "en_def": "a place full of water for swimming",
    "cn_def": "游泳池"
  },
  "spring": {
    "pos": "n.",
    "en_def": "the season after winter, when flowers start to grow",
    "cn_def": "春天"
  },
  "bank": {
    "pos": "n.",
    "en_def": "a place where people keep their money",
    "cn_def": "銀行"
  }
};

const EXTRA_GLOSSES = {};
