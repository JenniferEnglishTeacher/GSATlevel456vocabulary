// Unit 37 Quiz Data: trade – umbrella
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U37 - trade – umbrella",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "trade",
    "pos": "n.",
    "cn_def": "貿易，交易",
    "en_def": "buying and selling things between people or countries",
    "sentence": "They established a {{BLANK}} agreement.",
    "cn": "他們建立了貿易協議。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統，慣例",
    "en_def": "something that a family or group has done for a long time",
    "sentence": "It is a family {{BLANK}}.",
    "cn": "這是一個家族傳統。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通，車流",
    "en_def": "all the cars, buses, and motorcycles moving on the roads",
    "sentence": "The {{BLANK}} was very heavy this morning.",
    "cn": "今天早上的交通很擁擠。"
  },
  {
    "word": "train",
    "pos": "n.",
    "cn_def": "火車，訓練",
    "en_def": "a line of cars that moves along rails and carries people",
    "sentence": "He took the {{BLANK}} to work.",
    "cn": "他乘火車去上班。"
  },
  {
    "word": "trap",
    "pos": "n.",
    "cn_def": "陷阱，圈套",
    "en_def": "a thing for catching animals",
    "sentence": "They set a {{BLANK}} to catch the mouse.",
    "cn": "他們設置了一個陷阱來抓老鼠。"
  },
  {
    "word": "treasure",
    "pos": "n.",
    "cn_def": "財寶，珍寶",
    "en_def": "gold, silver, and other things that are worth a lot of money",
    "sentence": "They found buried {{BLANK}}.",
    "cn": "他們發現了埋藏的財寶。"
  },
  {
    "word": "treat",
    "pos": "v.",
    "cn_def": "對待，治療",
    "en_def": "to pay for someone's food or drink",
    "sentence": "She {{BLANK}} her friends to dinner.",
    "cn": "她請朋友吃晚餐。"
  },
  {
    "word": "triangle",
    "pos": "n.",
    "cn_def": "三角形",
    "en_def": "a shape with three straight sides",
    "sentence": "She drew a {{BLANK}} on the paper.",
    "cn": "她在紙上畫了一個三角形。"
  },
  {
    "word": "trick",
    "pos": "n.",
    "cn_def": "把戲，詭計",
    "en_def": "something you do to fool someone for fun",
    "sentence": "He played a {{BLANK}} on his brother.",
    "cn": "他對弟弟耍了個把戲。"
  },
  {
    "word": "troop",
    "pos": "n.",
    "cn_def": "部隊，軍隊",
    "en_def": "soldiers in a large group",
    "sentence": "The {{BLANK}} were deployed to the front line.",
    "cn": "部隊被派往前線。"
  },
  {
    "word": "tropical",
    "pos": "adj.",
    "cn_def": "熱帶的，炎熱的",
    "en_def": "from or in the hottest parts of the world",
    "sentence": "They went on a vacation to a {{BLANK}} island.",
    "cn": "他們去了一個熱帶島嶼度假。"
  },
  {
    "word": "trousers",
    "pos": "n.",
    "cn_def": "褲子，長褲",
    "en_def": "clothing that covers your legs; pants",
    "sentence": "He bought a new pair of {{BLANK}}.",
    "cn": "他買了一條新褲子。"
  },
  {
    "word": "trust",
    "pos": "v.",
    "cn_def": "信任，依賴",
    "en_def": "to believe that someone is good and honest",
    "sentence": "She {{BLANK}} him completely.",
    "cn": "她完全信任他。",
    "alts": [
      "trusted"
    ]
  },
  {
    "word": "truth",
    "pos": "n.",
    "cn_def": "真相，事實",
    "en_def": "what is true; the real facts",
    "sentence": "She always tells the {{BLANK}}.",
    "cn": "她總是說實話。"
  },
  {
    "word": "T-shirt",
    "pos": "n.",
    "cn_def": "T恤衫",
    "en_def": "a shirt with short sleeves and no buttons",
    "sentence": "He wore a white {{BLANK}}.",
    "cn": "他穿了一件白色T恤衫。"
  },
  {
    "word": "tub",
    "pos": "n.",
    "cn_def": "浴缸，桶",
    "en_def": "a big container that you fill with water to wash your body",
    "sentence": "She filled the {{BLANK}} with water.",
    "cn": "她把浴缸裝滿了水。"
  },
  {
    "word": "turkey",
    "pos": "n.",
    "cn_def": "火雞",
    "en_def": "a big farm bird that people eat at Thanksgiving",
    "sentence": "They cooked a {{BLANK}} for Thanksgiving.",
    "cn": "他們為感恩節做了一隻火雞。"
  },
  {
    "word": "turtle",
    "pos": "n.",
    "cn_def": "烏龜",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "sentence": "The {{BLANK}} swam slowly in the pond.",
    "cn": "烏龜在池塘裡慢慢游泳。"
  },
  {
    "word": "ugly",
    "pos": "adj.",
    "cn_def": "醜陋的，難看的",
    "en_def": "not nice to look at",
    "sentence": "The building is very {{BLANK}}.",
    "cn": "這棟建築很醜陋。"
  },
  {
    "word": "umbrella",
    "pos": "n.",
    "cn_def": "雨傘",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "sentence": "She took an {{BLANK}} because it was raining.",
    "cn": "她帶了一把雨傘，因為下雨了。"
  }
];

const MCQS = [
  {
    "q": "______ between the two countries is growing. They buy and sell more to each other every year.",
    "options": [
      "Trap",
      "trade",
      "Truth",
      "Tub"
    ],
    "answer": 1,
    "cn": "他們建立了貿易協議。",
    "vocabIndex": 0
  },
  {
    "q": "Eating moon cakes on the Moon Festival is a Chinese ______. People have done it for a long time.",
    "options": [
      "traffic",
      "trap",
      "triangle",
      "tradition"
    ],
    "answer": 3,
    "cn": "這是一個家族傳統。",
    "vocabIndex": 1
  },
  {
    "q": "There was a lot of ______ this morning. The cars on the road could hardly move.",
    "options": [
      "tradition",
      "treasure",
      "traffic",
      "truth"
    ],
    "answer": 2,
    "cn": "今天早上的交通很擁擠。",
    "vocabIndex": 2
  },
  {
    "q": "We took the ______ to Hualien. The ride on the rails took three hours.",
    "options": [
      "train",
      "trap",
      "tub",
      "turkey"
    ],
    "answer": 0,
    "cn": "他乘火車去上班。",
    "vocabIndex": 3
  },
  {
    "q": "The farmer set a ______ to catch the mice in his kitchen.",
    "options": [
      "train",
      "tub",
      "trade",
      "trap"
    ],
    "answer": 3,
    "cn": "他們設置了一個陷阱來抓老鼠。",
    "vocabIndex": 4
  },
  {
    "q": "The pirates hid their ______ on an island. It was a box of gold and silver.",
    "options": [
      "traffic",
      "truth",
      "treasure",
      "trade"
    ],
    "answer": 2,
    "cn": "他們發現了埋藏的財寶。",
    "vocabIndex": 5
  },
  {
    "q": "It was my birthday, so my uncle ______ me to a big dinner. He paid for everything.",
    "options": [
      "treated",
      "trusted",
      "supported",
      "swallowed"
    ],
    "answer": 0,
    "cn": "她請朋友吃晚餐。",
    "vocabIndex": 6
  },
  {
    "q": "A ______ has three sides and three corners.",
    "options": [
      "turtle",
      "triangle",
      "turkey",
      "trap"
    ],
    "answer": 1,
    "cn": "她在紙上畫了一個三角形。",
    "vocabIndex": 7
  },
  {
    "q": "The boys played a ______ on their sister. They put a toy snake in her bed.",
    "options": [
      "trick",
      "train",
      "tub",
      "trade"
    ],
    "answer": 0,
    "cn": "他對弟弟耍了個把戲。",
    "vocabIndex": 8
  },
  {
    "q": "The president sent ______ to help people after the earthquake. The soldiers worked day and night.",
    "options": [
      "traps",
      "tubs",
      "turtles",
      "troops"
    ],
    "answer": 3,
    "cn": "部隊被派往前線。",
    "vocabIndex": 9
  },
  {
    "q": "Bananas and mangoes are ______ fruits. They grow in hot places.",
    "options": [
      "ugly",
      "tropical",
      "tidy",
      "total"
    ],
    "answer": 1,
    "cn": "他們去了一個熱帶島嶼度假。",
    "vocabIndex": 10
  },
  {
    "q": "He wore a white shirt and black ______.",
    "options": [
      "T-shirts",
      "turtles",
      "trousers",
      "triangles"
    ],
    "answer": 2,
    "cn": "他買了一條新褲子。",
    "vocabIndex": 11
  },
  {
    "q": "I ______ Amy. She has never lied to me.",
    "options": [
      "treat",
      "trust",
      "support",
      "sweep"
    ],
    "answer": 1,
    "cn": "她完全信任他。",
    "vocabIndex": 12
  },
  {
    "q": "Please tell me the ______. Did you break the window?",
    "options": [
      "truth",
      "trap",
      "trade",
      "tub"
    ],
    "answer": 0,
    "cn": "她總是說實話。",
    "vocabIndex": 13
  },
  {
    "q": "It is hot today, so I am wearing a ______ and shorts.",
    "options": [
      "turkey",
      "turtle",
      "tub",
      "T-shirt"
    ],
    "answer": 3,
    "cn": "他穿了一件白色T恤衫。",
    "vocabIndex": 14
  },
  {
    "q": "I filled the ______ with hot water and took a long bath.",
    "options": [
      "trap",
      "train",
      "tub",
      "truth"
    ],
    "answer": 2,
    "cn": "她把浴缸裝滿了水。",
    "vocabIndex": 15
  },
  {
    "q": "Americans eat ______ on Thanksgiving. It is a big bird like a chicken.",
    "options": [
      "turkey",
      "turtle",
      "trap",
      "tub"
    ],
    "answer": 0,
    "cn": "他們為感恩節做了一隻火雞。",
    "vocabIndex": 16
  },
  {
    "q": "A ______ has a hard shell and walks slowly. It can live for more than one hundred years.",
    "options": [
      "turkey",
      "trap",
      "train",
      "turtle"
    ],
    "answer": 3,
    "cn": "烏龜在池塘裡慢慢游泳。",
    "vocabIndex": 17
  },
  {
    "q": "Nobody liked the ______ duck in the story. But it became a beautiful swan.",
    "options": [
      "tropical",
      "ugly",
      "tidy",
      "total"
    ],
    "answer": 1,
    "cn": "這棟建築很醜陋。",
    "vocabIndex": 18
  },
  {
    "q": "It is raining. Take an ______ with you.",
    "options": [
      "uncle",
      "uniform",
      "umbrella",
      "universe"
    ],
    "answer": 2,
    "cn": "她帶了一把雨傘，因為下雨了。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "trap": {
    "pos": "n.",
    "en_def": "a thing for catching animals",
    "cn_def": "陷阱，圈套"
  },
  "trade": {
    "pos": "n.",
    "en_def": "buying and selling things between people or countries",
    "cn_def": "貿易，交易"
  },
  "truth": {
    "pos": "n.",
    "en_def": "what is true; the real facts",
    "cn_def": "真相，事實"
  },
  "tub": {
    "pos": "n.",
    "en_def": "a big container that you fill with water to wash your body",
    "cn_def": "浴缸，桶"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "all the cars, buses, and motorcycles moving on the roads",
    "cn_def": "交通，車流"
  },
  "triangle": {
    "pos": "n.",
    "en_def": "a shape with three straight sides",
    "cn_def": "三角形"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "something that a family or group has done for a long time",
    "cn_def": "傳統，慣例"
  },
  "treasure": {
    "pos": "n.",
    "en_def": "gold, silver, and other things that are worth a lot of money",
    "cn_def": "財寶，珍寶"
  },
  "train": {
    "pos": "n.",
    "en_def": "a line of cars that moves along rails and carries people",
    "cn_def": "火車，訓練"
  },
  "turkey": {
    "pos": "n.",
    "en_def": "a big farm bird that people eat at Thanksgiving",
    "cn_def": "火雞"
  },
  "treated": {
    "pos": "v.",
    "en_def": "to pay for someone's food or drink",
    "cn_def": "對待，治療"
  },
  "trusted": {
    "pos": "v.",
    "en_def": "to believe that someone is good and honest",
    "cn_def": "信任，依賴"
  },
  "supported": {
    "pos": "v.",
    "en_def": "to agree with and help someone",
    "cn_def": "支持，支援"
  },
  "swallowed": {
    "pos": "v.",
    "en_def": "to make food or drink go down your throat",
    "cn_def": "吞下，嚥下"
  },
  "turtle": {
    "pos": "n.",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "cn_def": "烏龜"
  },
  "trick": {
    "pos": "n.",
    "en_def": "something you do to fool someone for fun",
    "cn_def": "把戲，詭計"
  },
  "traps": {
    "pos": "n.",
    "en_def": "a thing for catching animals",
    "cn_def": "陷阱，圈套"
  },
  "tubs": {
    "pos": "n.",
    "en_def": "a big container that you fill with water to wash your body",
    "cn_def": "浴缸，桶"
  },
  "turtles": {
    "pos": "n.",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "cn_def": "烏龜"
  },
  "troops": {
    "pos": "n.",
    "en_def": "soldiers in a large group",
    "cn_def": "部隊，軍隊"
  },
  "ugly": {
    "pos": "adj.",
    "en_def": "not nice to look at",
    "cn_def": "醜陋的，難看的"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from or in the hottest parts of the world",
    "cn_def": "熱帶的，炎熱的"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "clean, with everything in the right place",
    "cn_def": "整潔的，井井有條的"
  },
  "total": {
    "pos": "adj.",
    "en_def": "with everything added together",
    "cn_def": "總的，全部的"
  },
  "t-shirts": {
    "pos": "n.",
    "en_def": "a shirt with short sleeves and no buttons",
    "cn_def": "T恤衫"
  },
  "trousers": {
    "pos": "n.",
    "en_def": "clothing that covers your legs; pants",
    "cn_def": "褲子，長褲"
  },
  "triangles": {
    "pos": "n.",
    "en_def": "a shape with three straight sides",
    "cn_def": "三角形"
  },
  "treat": {
    "pos": "v.",
    "en_def": "to pay for someone's food or drink",
    "cn_def": "對待，治療"
  },
  "trust": {
    "pos": "v.",
    "en_def": "to believe that someone is good and honest",
    "cn_def": "信任，依賴"
  },
  "support": {
    "pos": "v.",
    "en_def": "to agree with and help someone",
    "cn_def": "支持，支援"
  },
  "sweep": {
    "pos": "v.",
    "en_def": "to clean a floor with a broom",
    "cn_def": "打掃，清掃"
  },
  "t-shirt": {
    "pos": "n.",
    "en_def": "a shirt with short sleeves and no buttons",
    "cn_def": "T恤衫"
  },
  "uncle": {
    "pos": "n.",
    "en_def": "the brother of your father or mother",
    "cn_def": "叔叔，舅舅"
  },
  "uniform": {
    "pos": "n.",
    "en_def": "special clothes that all students or workers in one place wear",
    "cn_def": "制服"
  },
  "umbrella": {
    "pos": "n.",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "cn_def": "雨傘"
  },
  "universe": {
    "pos": "n.",
    "en_def": "all of space, with all the stars and planets",
    "cn_def": "宇宙，天地"
  }
};

const EXTRA_GLOSSES = {};
