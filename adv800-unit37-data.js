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
    "q": "They established a ______ agreement.【貿易，交易】",
    "options": [
      "turkey",
      "tub",
      "triangle",
      "trade"
    ],
    "answer": 3,
    "cn": "他們建立了貿易協議。",
    "vocabIndex": 0
  },
  {
    "q": "It is a family ______.【傳統，慣例】",
    "options": [
      "tradition",
      "trick",
      "T-shirt",
      "umbrella"
    ],
    "answer": 0,
    "cn": "這是一個家族傳統。",
    "vocabIndex": 1
  },
  {
    "q": "The ______ was very heavy this morning.【交通，車流】",
    "options": [
      "treasure",
      "traffic",
      "trade",
      "trick"
    ],
    "answer": 1,
    "cn": "今天早上的交通很擁擠。",
    "vocabIndex": 2
  },
  {
    "q": "He took the ______ to work.【火車，訓練】",
    "options": [
      "turkey",
      "trade",
      "train",
      "traffic"
    ],
    "answer": 2,
    "cn": "他乘火車去上班。",
    "vocabIndex": 3
  },
  {
    "q": "They set a ______ to catch the mouse.【陷阱，圈套】",
    "options": [
      "train",
      "trap",
      "trick",
      "truth"
    ],
    "answer": 1,
    "cn": "他們設置了一個陷阱來抓老鼠。",
    "vocabIndex": 4
  },
  {
    "q": "They found buried ______.【財寶，珍寶】",
    "options": [
      "treasure",
      "turkey",
      "truth",
      "tradition"
    ],
    "answer": 0,
    "cn": "他們發現了埋藏的財寶。",
    "vocabIndex": 5
  },
  {
    "q": "She ______ her friends to dinner.【對待，治療】",
    "options": [
      "trusts",
      "licked",
      "barked",
      "treated"
    ],
    "answer": 3,
    "cn": "她請朋友吃晚餐。",
    "vocabIndex": 6
  },
  {
    "q": "She drew a ______ on the paper.【三角形】",
    "options": [
      "trap",
      "umbrella",
      "triangle",
      "train"
    ],
    "answer": 2,
    "cn": "她在紙上畫了一個三角形。",
    "vocabIndex": 7
  },
  {
    "q": "He played a ______ on his brother.【把戲，詭計】",
    "options": [
      "trick",
      "trade",
      "turtle",
      "umbrella"
    ],
    "answer": 0,
    "cn": "他對弟弟耍了個把戲。",
    "vocabIndex": 8
  },
  {
    "q": "The ______ were deployed to the front line.【部隊，軍隊】",
    "options": [
      "trousers",
      "treasure",
      "train",
      "troops"
    ],
    "answer": 3,
    "cn": "部隊被派往前線。",
    "vocabIndex": 9
  },
  {
    "q": "They went on a vacation to a ______ island.【熱帶的，炎熱的】",
    "options": [
      "ugly",
      "tropical",
      "soft",
      "overweight"
    ],
    "answer": 1,
    "cn": "他們去了一個熱帶島嶼度假。",
    "vocabIndex": 10
  },
  {
    "q": "He bought a new pair of ______.【褲子，長褲】",
    "options": [
      "troops",
      "trick",
      "trousers",
      "turkey"
    ],
    "answer": 2,
    "cn": "他買了一條新褲子。",
    "vocabIndex": 11
  },
  {
    "q": "She ______ him completely.【信任，依賴】",
    "options": [
      "treated",
      "aims",
      "produces",
      "trusts"
    ],
    "answer": 3,
    "cn": "她完全信任他。",
    "vocabIndex": 12
  },
  {
    "q": "She always tells the ______.【真相，事實】",
    "options": [
      "trade",
      "truth",
      "turkey",
      "trick"
    ],
    "answer": 1,
    "cn": "她總是說實話。",
    "vocabIndex": 13
  },
  {
    "q": "He wore a white ______.【T恤衫】",
    "options": [
      "T-shirt",
      "Triangle",
      "Turkey",
      "Treasure"
    ],
    "answer": 0,
    "cn": "他穿了一件白色T恤衫。",
    "vocabIndex": 14
  },
  {
    "q": "She filled the ______ with water.【浴缸，桶】",
    "options": [
      "truth",
      "triangle",
      "tub",
      "tradition"
    ],
    "answer": 2,
    "cn": "她把浴缸裝滿了水。",
    "vocabIndex": 15
  },
  {
    "q": "They cooked a ______ for Thanksgiving.【火雞】",
    "options": [
      "turkey",
      "turtle",
      "tradition",
      "trade"
    ],
    "answer": 0,
    "cn": "他們為感恩節做了一隻火雞。",
    "vocabIndex": 16
  },
  {
    "q": "The ______ swam slowly in the pond.【烏龜】",
    "options": [
      "trade",
      "treasure",
      "trick",
      "turtle"
    ],
    "answer": 3,
    "cn": "烏龜在池塘裡慢慢游泳。",
    "vocabIndex": 17
  },
  {
    "q": "The building is very ______.【醜陋的，難看的】",
    "options": [
      "tropical",
      "male",
      "ugly",
      "bitter"
    ],
    "answer": 2,
    "cn": "這棟建築很醜陋。",
    "vocabIndex": 18
  },
  {
    "q": "She took an ______ because it was raining.【雨傘】",
    "options": [
      "train",
      "umbrella",
      "turkey",
      "T-shirt"
    ],
    "answer": 1,
    "cn": "她帶了一把雨傘，因為下雨了。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "aims": {
    "pos": "v.",
    "en_def": "to try or plan to do something",
    "cn_def": "瞄準，目標"
  },
  "barked": {
    "pos": "v.",
    "en_def": "(of a dog) to make a short loud sound",
    "cn_def": "吠叫"
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong taste that is not sweet, like black coffee",
    "cn_def": "苦的，痛苦的"
  },
  "licked": {
    "pos": "v.",
    "en_def": "to move your tongue over something",
    "cn_def": "舔"
  },
  "male": {
    "pos": "adj.",
    "en_def": "being a man or a boy",
    "cn_def": "男性的"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "too heavy or fat",
    "cn_def": "超重的，過重的"
  },
  "produces": {
    "pos": "v.",
    "en_def": "to make or grow something",
    "cn_def": "生產，製造"
  },
  "soft": {
    "pos": "adj.",
    "en_def": "not hard; nice to touch",
    "cn_def": "柔軟的，溫和的"
  },
  "trade": {
    "pos": "n.",
    "en_def": "buying and selling things between people or countries",
    "cn_def": "貿易，交易"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "something that a family or group has done for a long time",
    "cn_def": "傳統，慣例"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "all the cars, buses, and motorcycles moving on the roads",
    "cn_def": "交通，車流"
  },
  "train": {
    "pos": "n.",
    "en_def": "a line of cars that moves along rails and carries people",
    "cn_def": "火車，訓練"
  },
  "trap": {
    "pos": "n.",
    "en_def": "a thing for catching animals",
    "cn_def": "陷阱，圈套"
  },
  "treasure": {
    "pos": "n.",
    "en_def": "gold, silver, and other things that are worth a lot of money",
    "cn_def": "財寶，珍寶"
  },
  "treated": {
    "pos": "v.",
    "en_def": "to pay for someone's food or drink",
    "cn_def": "對待，治療"
  },
  "triangle": {
    "pos": "n.",
    "en_def": "a shape with three straight sides",
    "cn_def": "三角形"
  },
  "trick": {
    "pos": "n.",
    "en_def": "something you do to fool someone for fun",
    "cn_def": "把戲，詭計"
  },
  "troops": {
    "pos": "n.",
    "en_def": "soldiers in a large group",
    "cn_def": "部隊，軍隊"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from or in the hottest parts of the world",
    "cn_def": "熱帶的，炎熱的"
  },
  "trousers": {
    "pos": "n.",
    "en_def": "clothing that covers your legs; pants",
    "cn_def": "褲子，長褲"
  },
  "trusts": {
    "pos": "v.",
    "en_def": "to believe that someone is good and honest",
    "cn_def": "信任，依賴"
  },
  "truth": {
    "pos": "n.",
    "en_def": "what is true; the real facts",
    "cn_def": "真相，事實"
  },
  "t-shirt": {
    "pos": "n.",
    "en_def": "a shirt with short sleeves and no buttons",
    "cn_def": "T恤衫"
  },
  "tub": {
    "pos": "n.",
    "en_def": "a big container that you fill with water to wash your body",
    "cn_def": "浴缸，桶"
  },
  "turkey": {
    "pos": "n.",
    "en_def": "a big farm bird that people eat at Thanksgiving",
    "cn_def": "火雞"
  },
  "turtle": {
    "pos": "n.",
    "en_def": "an animal with a hard shell on its back that moves slowly",
    "cn_def": "烏龜"
  },
  "ugly": {
    "pos": "adj.",
    "en_def": "not nice to look at",
    "cn_def": "醜陋的，難看的"
  },
  "umbrella": {
    "pos": "n.",
    "en_def": "a thing you hold over your head to stay dry in the rain",
    "cn_def": "雨傘"
  }
};

const EXTRA_GLOSSES = {};
