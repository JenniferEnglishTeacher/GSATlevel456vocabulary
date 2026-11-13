// Unit 21 Quiz Data: liter – mat
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U21 - liter – mat",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "liter",
    "pos": "n.",
    "cn_def": "公升",
    "en_def": "a unit for measuring liquid; a little more than four cups",
    "sentence": "She drank a {{BLANK}} of water.",
    "cn": "她喝了一公升水。"
  },
  {
    "word": "loaf",
    "pos": "n.",
    "cn_def": "一條麵包",
    "en_def": "bread baked in one big piece",
    "sentence": "He bought a {{BLANK}} of bread.",
    "cn": "他買了一條麵包。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "當地的，本地的",
    "en_def": "of or in the place where you live or are",
    "sentence": "They visited the {{BLANK}} market.",
    "cn": "他們參觀了當地市場。"
  },
  {
    "word": "lock",
    "pos": "v.",
    "cn_def": "鎖住",
    "en_def": "to close something with a key",
    "sentence": "She {{BLANK}} the door before leaving.",
    "cn": "她離開前鎖上了門。"
  },
  {
    "word": "locker",
    "pos": "n.",
    "cn_def": "置物櫃",
    "en_def": "a small metal closet with a lock, used at school or a gym",
    "sentence": "He put his books in the {{BLANK}}.",
    "cn": "他把書放在置物櫃裡。"
  },
  {
    "word": "loser",
    "pos": "n.",
    "cn_def": "失敗者",
    "en_def": "a person who does not win",
    "sentence": "He felt like a {{BLANK}} after losing the game.",
    "cn": "他輸了比賽後感到像個失敗者。"
  },
  {
    "word": "lot",
    "pos": "n.",
    "cn_def": "許多，大量",
    "en_def": "a large number or amount",
    "sentence": "There are a {{BLANK}} of books on the shelf.",
    "cn": "書架上有很多書。"
  },
  {
    "word": "magazine",
    "pos": "n.",
    "cn_def": "雜誌",
    "en_def": "a thin book with pictures and stories that comes out every week or month",
    "sentence": "She subscribes to a fashion {{BLANK}}.",
    "cn": "她訂閱了一本時尚雜誌。"
  },
  {
    "word": "magician",
    "pos": "n.",
    "cn_def": "魔術師",
    "en_def": "a person who does magic tricks",
    "sentence": "The {{BLANK}} performed amazing tricks.",
    "cn": "魔術師表演了驚人的把戲。"
  },
  {
    "word": "major",
    "pos": "adj.",
    "cn_def": "主要的，重要的",
    "en_def": "very big or important",
    "sentence": "She played a {{BLANK}} role in the project.",
    "cn": "她在這個專案中扮演了重要角色。"
  },
  {
    "word": "male",
    "pos": "adj.",
    "cn_def": "男性的",
    "en_def": "being a man or a boy",
    "sentence": "The {{BLANK}} employees are outnumbered by the female employees.",
    "cn": "男性員工數量少於女性員工。"
  },
  {
    "word": "mall",
    "pos": "n.",
    "cn_def": "購物中心",
    "en_def": "a very big building with many stores inside",
    "sentence": "They spent the afternoon shopping at the {{BLANK}}.",
    "cn": "他們在購物中心購物了整個下午。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理",
    "en_def": "a person who is in charge of a store, team, or office",
    "sentence": "The {{BLANK}} called for a meeting with the staff.",
    "cn": "經理召集員工開會。"
  },
  {
    "word": "mango",
    "pos": "n.",
    "cn_def": "芒果",
    "en_def": "a sweet tropical fruit that is yellow inside",
    "sentence": "She bought a ripe {{BLANK}} at the market.",
    "cn": "她在市場買了一個熟芒果。"
  },
  {
    "word": "manner",
    "pos": "n.",
    "cn_def": "方式，態度",
    "en_def": "the way in which you do something",
    "sentence": "His {{BLANK}} of speaking is very polite.",
    "cn": "他的說話方式非常禮貌。"
  },
  {
    "word": "marry",
    "pos": "v.",
    "cn_def": "結婚",
    "en_def": "to become someone's husband or wife",
    "sentence": "They plan to {{BLANK}} next year.",
    "cn": "他們計劃明年結婚。"
  },
  {
    "word": "marvelous",
    "pos": "adj.",
    "cn_def": "奇妙的，極好的",
    "en_def": "very, very good; wonderful",
    "sentence": "They had a {{BLANK}} time on their vacation.",
    "cn": "他們度過了一個奇妙的假期。"
  },
  {
    "word": "mass",
    "pos": "n.",
    "cn_def": "大量，團，塊",
    "en_def": "a large number or amount of something together",
    "sentence": "There was a {{BLANK}} of people at the concert.",
    "cn": "音樂會上有大量人群。"
  },
  {
    "word": "master",
    "pos": "n.",
    "cn_def": "主人，大師",
    "en_def": "a person who is very good at doing something",
    "sentence": "He is a {{BLANK}} of martial arts.",
    "cn": "他是武術大師。"
  },
  {
    "word": "mat",
    "pos": "n.",
    "cn_def": "墊子",
    "en_def": "a small piece of thick cloth on the floor",
    "sentence": "She placed a {{BLANK}} at the entrance.",
    "cn": "她在入口處放了一塊墊子。"
  }
];

const MCQS = [
  {
    "q": "I drink one ______ of water every day. That is about four glasses.",
    "options": [
      "loaf",
      "locker",
      "lot",
      "liter"
    ],
    "answer": 3,
    "cn": "她喝了一公升水。",
    "vocabIndex": 0
  },
  {
    "q": "Mom bought a ______ of bread at the bakery. We will cut it and make sandwiches.",
    "options": [
      "liter",
      "loaf",
      "locker",
      "mall"
    ],
    "answer": 1,
    "cn": "他買了一條麵包。",
    "vocabIndex": 1
  },
  {
    "q": "We ate at a small ______ restaurant. The people who live in the town love it.",
    "options": [
      "major",
      "male",
      "local",
      "marvelous"
    ],
    "answer": 2,
    "cn": "他們參觀了當地市場。",
    "vocabIndex": 2
  },
  {
    "q": "Don't forget to ______ the door when you leave. Take your key with you.",
    "options": [
      "lock",
      "marry",
      "lift",
      "lick"
    ],
    "answer": 0,
    "cn": "她離開前鎖上了門。",
    "vocabIndex": 3
  },
  {
    "q": "I keep my books and sports shoes in my ______ at school. Only I have the key.",
    "options": [
      "loser",
      "liter",
      "loaf",
      "locker"
    ],
    "answer": 3,
    "cn": "他把書放在置物櫃裡。",
    "vocabIndex": 4
  },
  {
    "q": "Nobody wants to be a ______. Everyone wants to win the game.",
    "options": [
      "locker",
      "manager",
      "loser",
      "master"
    ],
    "answer": 2,
    "cn": "他輸了比賽後感到像個失敗者。",
    "vocabIndex": 5
  },
  {
    "q": "There are a ______ of people in the park today. It is hard to find a seat.",
    "options": [
      "loaf",
      "lot",
      "liter",
      "mat"
    ],
    "answer": 1,
    "cn": "書架上有很多書。",
    "vocabIndex": 6
  },
  {
    "q": "I read a fashion ______ every month. It has many pictures of new clothes.",
    "options": [
      "magazine",
      "magician",
      "manager",
      "mango"
    ],
    "answer": 0,
    "cn": "她訂閱了一本時尚雜誌。",
    "vocabIndex": 7
  },
  {
    "q": "The ______ pulled a rabbit out of his hat. The children loved his tricks.",
    "options": [
      "manager",
      "master",
      "magazine",
      "magician"
    ],
    "answer": 3,
    "cn": "魔術師表演了驚人的把戲。",
    "vocabIndex": 8
  },
  {
    "q": "Rice is a ______ food in Asia. Most people eat it every day.",
    "options": [
      "major",
      "male",
      "local",
      "marvelous"
    ],
    "answer": 0,
    "cn": "她在這個專案中扮演了重要角色。",
    "vocabIndex": 9
  },
  {
    "q": "A ______ lion has long hair around its head, but a female lion doesn't.",
    "options": [
      "major",
      "male",
      "local",
      "marvelous"
    ],
    "answer": 1,
    "cn": "男性員工數量少於女性員工。",
    "vocabIndex": 10
  },
  {
    "q": "We went shopping at the ______. There are more than two hundred stores in the building.",
    "options": [
      "mat",
      "mass",
      "mall",
      "loaf"
    ],
    "answer": 2,
    "cn": "他們在購物中心購物了整個下午。",
    "vocabIndex": 11
  },
  {
    "q": "The ______ of the store told the clerks to work faster. He is their boss.",
    "options": [
      "manager",
      "magician",
      "loser",
      "mango"
    ],
    "answer": 0,
    "cn": "經理召集員工開會。",
    "vocabIndex": 12
  },
  {
    "q": "A ______ is a sweet yellow fruit. Mango ice is very popular in Taiwan in summer.",
    "options": [
      "magazine",
      "mall",
      "mat",
      "mango"
    ],
    "answer": 3,
    "cn": "她在市場買了一個熟芒果。",
    "vocabIndex": 13
  },
  {
    "q": "She spoke in a friendly ______, so everyone felt relaxed.",
    "options": [
      "mall",
      "manner",
      "mango",
      "mat"
    ],
    "answer": 1,
    "cn": "他的說話方式非常禮貌。",
    "vocabIndex": 14
  },
  {
    "q": "Tom loves Lisa very much. He wants to ______ her next year.",
    "options": [
      "lock",
      "lift",
      "marry",
      "lack"
    ],
    "answer": 2,
    "cn": "他們計劃明年結婚。",
    "vocabIndex": 15
  },
  {
    "q": "We had a ______ time in Japan. Everything was great.",
    "options": [
      "marvelous",
      "male",
      "local",
      "major"
    ],
    "answer": 0,
    "cn": "他們度過了一個奇妙的假期。",
    "vocabIndex": 16
  },
  {
    "q": "A ______ of dark clouds covered the sky before the storm.",
    "options": [
      "mall",
      "mat",
      "mass",
      "mango"
    ],
    "answer": 2,
    "cn": "音樂會上有大量人群。",
    "vocabIndex": 17
  },
  {
    "q": "Mr. Chen is a kung fu ______. He has taught it for forty years.",
    "options": [
      "loser",
      "mall",
      "mango",
      "master"
    ],
    "answer": 3,
    "cn": "他是武術大師。",
    "vocabIndex": 18
  },
  {
    "q": "Please clean your shoes on the ______ before you come into the house.",
    "options": [
      "mall",
      "mat",
      "mass",
      "lot"
    ],
    "answer": 1,
    "cn": "她在入口處放了一塊墊子。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "loaf": {
    "pos": "n.",
    "en_def": "bread baked in one big piece",
    "cn_def": "一條麵包"
  },
  "locker": {
    "pos": "n.",
    "en_def": "a small metal closet with a lock, used at school or a gym",
    "cn_def": "置物櫃"
  },
  "lot": {
    "pos": "n.",
    "en_def": "a large number or amount",
    "cn_def": "許多，大量"
  },
  "liter": {
    "pos": "n.",
    "en_def": "a unit for measuring liquid; a little more than four cups",
    "cn_def": "公升"
  },
  "mall": {
    "pos": "n.",
    "en_def": "a very big building with many stores inside",
    "cn_def": "購物中心"
  },
  "major": {
    "pos": "adj.",
    "en_def": "very big or important",
    "cn_def": "主要的，重要的"
  },
  "male": {
    "pos": "adj.",
    "en_def": "being a man or a boy",
    "cn_def": "男性的"
  },
  "local": {
    "pos": "adj.",
    "en_def": "of or in the place where you live or are",
    "cn_def": "當地的，本地的"
  },
  "marvelous": {
    "pos": "adj.",
    "en_def": "very, very good; wonderful",
    "cn_def": "奇妙的，極好的"
  },
  "lock": {
    "pos": "v.",
    "en_def": "to close something with a key",
    "cn_def": "鎖住"
  },
  "marry": {
    "pos": "v.",
    "en_def": "to become someone's husband or wife",
    "cn_def": "結婚"
  },
  "lift": {
    "pos": "v.",
    "en_def": "to move something up",
    "cn_def": "舉起，抬起"
  },
  "lick": {
    "pos": "v.",
    "en_def": "to move your tongue over something",
    "cn_def": "舔"
  },
  "loser": {
    "pos": "n.",
    "en_def": "a person who does not win",
    "cn_def": "失敗者"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who is in charge of a store, team, or office",
    "cn_def": "經理"
  },
  "master": {
    "pos": "n.",
    "en_def": "a person who is very good at doing something",
    "cn_def": "主人，大師"
  },
  "mat": {
    "pos": "n.",
    "en_def": "a small piece of thick cloth on the floor",
    "cn_def": "墊子"
  },
  "magazine": {
    "pos": "n.",
    "en_def": "a thin book with pictures and stories that comes out every week or month",
    "cn_def": "雜誌"
  },
  "magician": {
    "pos": "n.",
    "en_def": "a person who does magic tricks",
    "cn_def": "魔術師"
  },
  "mango": {
    "pos": "n.",
    "en_def": "a sweet tropical fruit that is yellow inside",
    "cn_def": "芒果"
  },
  "mass": {
    "pos": "n.",
    "en_def": "a large number or amount of something together",
    "cn_def": "大量，團，塊"
  },
  "manner": {
    "pos": "n.",
    "en_def": "the way in which you do something",
    "cn_def": "方式，態度"
  },
  "lack": {
    "pos": "v.",
    "en_def": "to not have something, or not have enough of it",
    "cn_def": "缺乏，缺少"
  }
};

const EXTRA_GLOSSES = {};
