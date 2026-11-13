// Unit 38 Quiz Data: uncle – visitor
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U38 - uncle – visitor",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "uncle",
    "pos": "n.",
    "cn_def": "叔叔，舅舅",
    "en_def": "the brother of your father or mother",
    "sentence": "He visited his {{BLANK}}.",
    "cn": "他拜訪了他的叔叔。"
  },
  {
    "word": "underline",
    "pos": "v.",
    "cn_def": "在...下面劃線，強調",
    "en_def": "to draw a line under a word",
    "sentence": "She {{BLANK}} the important words.",
    "cn": "她在重要詞語下劃了線。"
  },
  {
    "word": "underwear",
    "pos": "n.",
    "cn_def": "內衣，底褲",
    "en_def": "clothes that you wear next to your skin under other clothes",
    "sentence": "She bought new {{BLANK}}.",
    "cn": "她買了新內衣。"
  },
  {
    "word": "unhappy",
    "pos": "adj.",
    "cn_def": "不快樂的，不滿意的",
    "en_def": "not happy",
    "sentence": "He is {{BLANK}} with his job.",
    "cn": "他對他的工作不滿意。"
  },
  {
    "word": "uniform",
    "pos": "n.",
    "cn_def": "制服",
    "en_def": "special clothes that all students or workers in one place wear",
    "sentence": "She wears a {{BLANK}} to school.",
    "cn": "她穿著制服上學。"
  },
  {
    "word": "universe",
    "pos": "n.",
    "cn_def": "宇宙，天地",
    "en_def": "all of space, with all the stars and planets",
    "sentence": "The {{BLANK}} is vast and mysterious.",
    "cn": "宇宙是廣闊而神秘的。"
  },
  {
    "word": "used to",
    "pos": "aux.",
    "cn_def": "曾經，習慣於",
    "en_def": "did something often in the past, but not now",
    "sentence": "She {{BLANK}} live in New York.",
    "cn": "她曾經住在紐約。",
    "nblanks": 2
  },
  {
    "word": "useful",
    "pos": "adj.",
    "cn_def": "有用的，有幫助的",
    "en_def": "helping you to do something",
    "sentence": "This tool is very {{BLANK}}.",
    "cn": "這個工具很有用。"
  },
  {
    "word": "usual",
    "pos": "adj.",
    "cn_def": "通常的，平常的",
    "en_def": "normal; happening most of the time",
    "sentence": "She arrived at the {{BLANK}} time.",
    "cn": "她在平常的時間到達。"
  },
  {
    "word": "vacation",
    "pos": "n.",
    "cn_def": "假期，休假",
    "en_def": "a time when you do not go to school or work",
    "sentence": "They went on a family {{BLANK}}.",
    "cn": "他們去家庭度假。"
  },
  {
    "word": "vacuum",
    "pos": "n.",
    "cn_def": "真空，吸塵器",
    "en_def": "a machine that cleans floors by pulling in dust",
    "sentence": "She used a {{BLANK}} to clean the carpet.",
    "cn": "她用吸塵器清潔地毯。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷，溪谷",
    "en_def": "the low land between hills or mountains",
    "sentence": "They hiked through the {{BLANK}}.",
    "cn": "他們徒步穿越山谷。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值，重要性",
    "en_def": "how important or useful something is",
    "sentence": "She placed a high {{BLANK}} on honesty.",
    "cn": "她非常重視誠實。"
  },
  {
    "word": "various",
    "pos": "adj.",
    "cn_def": "各種各樣的",
    "en_def": "many different",
    "sentence": "The store sells {{BLANK}} types of bread.",
    "cn": "這家商店出售各種麵包。"
  },
  {
    "word": "vase",
    "pos": "n.",
    "cn_def": "花瓶",
    "en_def": "a tall container for flowers",
    "sentence": "She arranged flowers in the {{BLANK}}.",
    "cn": "她在花瓶裡插花。"
  },
  {
    "word": "vegetable",
    "pos": "n.",
    "cn_def": "蔬菜",
    "en_def": "a plant that people eat, like carrots and cabbage",
    "sentence": "She grows her own {{BLANK}}.",
    "cn": "她自己種蔬菜。"
  },
  {
    "word": "vehicle",
    "pos": "n.",
    "cn_def": "車輛，交通工具",
    "en_def": "a machine like a car, bus, or truck that carries people or things",
    "sentence": "They bought a new {{BLANK}}.",
    "cn": "他們買了一輛新車。"
  },
  {
    "word": "village",
    "pos": "n.",
    "cn_def": "村莊",
    "en_def": "a very small town in the country",
    "sentence": "They live in a small {{BLANK}}.",
    "cn": "他們住在一個小村莊裡。"
  },
  {
    "word": "violent",
    "pos": "adj.",
    "cn_def": "暴力的，猛烈的",
    "en_def": "very strong and dangerous",
    "sentence": "The storm was very {{BLANK}}.",
    "cn": "暴風雨非常猛烈。"
  },
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "訪客，參觀者",
    "en_def": "a person who comes to see a place or a person",
    "sentence": "The museum had many {{BLANK}} last week.",
    "cn": "上週博物館有很多參觀者。"
  }
];

const MCQS = [
  {
    "q": "My mother's brother is my ______.",
    "options": [
      "uniform",
      "universe",
      "visitor",
      "uncle"
    ],
    "answer": 3,
    "cn": "他拜訪了他的叔叔。",
    "vocabIndex": 0
  },
  {
    "q": "Please ______ the important words in the sentence with your pen.",
    "options": [
      "vote",
      "wake",
      "underline",
      "wave"
    ],
    "answer": 2,
    "cn": "她在重要詞語下劃了線。",
    "vocabIndex": 1
  },
  {
    "q": "You wear ______ under your pants and shirt.",
    "options": [
      "uniform",
      "underwear",
      "vacuum",
      "vase"
    ],
    "answer": 1,
    "cn": "她買了新內衣。",
    "vocabIndex": 2
  },
  {
    "q": "The boy looks ______. I think he lost his toy.",
    "options": [
      "unhappy",
      "useful",
      "usual",
      "various"
    ],
    "answer": 0,
    "cn": "他對他的工作不滿意。",
    "vocabIndex": 3
  },
  {
    "q": "All the students at this school wear a white and blue ______.",
    "options": [
      "universe",
      "vacuum",
      "valley",
      "uniform"
    ],
    "answer": 3,
    "cn": "她穿著制服上學。",
    "vocabIndex": 4
  },
  {
    "q": "There are billions of stars in the ______. The earth is only a very small part of it.",
    "options": [
      "uniform",
      "valley",
      "universe",
      "village"
    ],
    "answer": 2,
    "cn": "宇宙是廣闊而神秘的。",
    "vocabIndex": 5
  },
  {
    "q": "I ______ live in Tainan, but now I live in Taipei.",
    "options": [
      "shall",
      "used to",
      "have to",
      "want to"
    ],
    "answer": 1,
    "cn": "她曾經住在紐約。",
    "vocabIndex": 6
  },
  {
    "q": "A cellphone is very ______. You can use it to call people, take photos, and find information.",
    "options": [
      "useful",
      "unhappy",
      "usual",
      "violent"
    ],
    "answer": 0,
    "cn": "這個工具很有用。",
    "vocabIndex": 7
  },
  {
    "q": "I got up at six, as ______. I do that every day.",
    "options": [
      "useful",
      "various",
      "violent",
      "usual"
    ],
    "answer": 3,
    "cn": "她在平常的時間到達。",
    "vocabIndex": 8
  },
  {
    "q": "We are going to Japan for our summer ______. We will stay there for a week.",
    "options": [
      "vacation",
      "vacuum",
      "valley",
      "value"
    ],
    "answer": 0,
    "cn": "他們去家庭度假。",
    "vocabIndex": 9
  },
  {
    "q": "The floor is dirty. Use the ______ to clean it.",
    "options": [
      "vase",
      "vacuum",
      "valley",
      "vehicle"
    ],
    "answer": 1,
    "cn": "她用吸塵器清潔地毯。",
    "vocabIndex": 10
  },
  {
    "q": "The village is in a ______ between two high mountains.",
    "options": [
      "vase",
      "value",
      "valley",
      "vacuum"
    ],
    "answer": 2,
    "cn": "他們徒步穿越山谷。",
    "vocabIndex": 11
  },
  {
    "q": "Parents should teach their children the ______ of money. It is not easy to make it.",
    "options": [
      "valley",
      "value",
      "vase",
      "village"
    ],
    "answer": 1,
    "cn": "她非常重視誠實。",
    "vocabIndex": 12
  },
  {
    "q": "The store sells ______ kinds of fruit: apples, bananas, grapes, and many more.",
    "options": [
      "unhappy",
      "usual",
      "various",
      "violent"
    ],
    "answer": 2,
    "cn": "這家商店出售各種麵包。",
    "vocabIndex": 13
  },
  {
    "q": "She put the flowers in a ______ with some water.",
    "options": [
      "valley",
      "value",
      "vehicle",
      "vase"
    ],
    "answer": 3,
    "cn": "她在花瓶裡插花。",
    "vocabIndex": 14
  },
  {
    "q": "You should eat more ______, like carrots and cabbage.",
    "options": [
      "vegetables",
      "vehicles",
      "villages",
      "visitors"
    ],
    "answer": 0,
    "cn": "她自己種蔬菜。",
    "vocabIndex": 15
  },
  {
    "q": "Cars, buses, and trucks are all ______.",
    "options": [
      "vegetables",
      "vehicles",
      "villages",
      "valleys"
    ],
    "answer": 1,
    "cn": "他們買了一輛新車。",
    "vocabIndex": 16
  },
  {
    "q": "My grandparents live in a small ______ in the mountains. Only fifty people live there.",
    "options": [
      "village",
      "vase",
      "vacuum",
      "value"
    ],
    "answer": 0,
    "cn": "他們住在一個小村莊裡。",
    "vocabIndex": 17
  },
  {
    "q": "The movie is too ______ for children. There is a lot of fighting and killing in it.",
    "options": [
      "useful",
      "usual",
      "violent",
      "various"
    ],
    "answer": 2,
    "cn": "暴風雨非常猛烈。",
    "vocabIndex": 18
  },
  {
    "q": "The museum has more than one thousand ______ every day.",
    "options": [
      "vehicles",
      "villages",
      "vases",
      "visitors"
    ],
    "answer": 3,
    "cn": "上週博物館有很多參觀者。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "uniform": {
    "pos": "n.",
    "en_def": "special clothes that all students or workers in one place wear",
    "cn_def": "制服"
  },
  "universe": {
    "pos": "n.",
    "en_def": "all of space, with all the stars and planets",
    "cn_def": "宇宙，天地"
  },
  "visitor": {
    "pos": "n.",
    "en_def": "a person who comes to see a place or a person",
    "cn_def": "訪客，參觀者"
  },
  "uncle": {
    "pos": "n.",
    "en_def": "the brother of your father or mother",
    "cn_def": "叔叔，舅舅"
  },
  "vote": {
    "pos": "v.",
    "en_def": "to choose someone in an election by marking a paper",
    "cn_def": "投票，選舉"
  },
  "wake": {
    "pos": "v.",
    "en_def": "to stop sleeping",
    "cn_def": "醒來，喚醒"
  },
  "underline": {
    "pos": "v.",
    "en_def": "to draw a line under a word",
    "cn_def": "在...下面劃線，強調"
  },
  "wave": {
    "pos": "v.",
    "en_def": "to move your hand in the air to say hello or good-bye",
    "cn_def": "揮手，波動"
  },
  "underwear": {
    "pos": "n.",
    "en_def": "clothes that you wear next to your skin under other clothes",
    "cn_def": "內衣，底褲"
  },
  "vacuum": {
    "pos": "n.",
    "en_def": "a machine that cleans floors by pulling in dust",
    "cn_def": "真空，吸塵器"
  },
  "vase": {
    "pos": "n.",
    "en_def": "a tall container for flowers",
    "cn_def": "花瓶"
  },
  "unhappy": {
    "pos": "adj.",
    "en_def": "not happy",
    "cn_def": "不快樂的，不滿意的"
  },
  "useful": {
    "pos": "adj.",
    "en_def": "helping you to do something",
    "cn_def": "有用的，有幫助的"
  },
  "usual": {
    "pos": "adj.",
    "en_def": "normal; happening most of the time",
    "cn_def": "通常的，平常的"
  },
  "various": {
    "pos": "adj.",
    "en_def": "many different",
    "cn_def": "各種各樣的"
  },
  "valley": {
    "pos": "n.",
    "en_def": "the low land between hills or mountains",
    "cn_def": "山谷，溪谷"
  },
  "village": {
    "pos": "n.",
    "en_def": "a very small town in the country",
    "cn_def": "村莊"
  },
  "shall": {
    "pos": "aux.",
    "en_def": "used with \"I\" or \"we\" to talk about the future",
    "cn_def": "將要，應該"
  },
  "used to": {
    "pos": "aux.",
    "en_def": "did something often in the past, but not now",
    "cn_def": "曾經，習慣於"
  },
  "have to": {
    "pos": "aux.",
    "en_def": "",
    "cn_def": "必須"
  },
  "want to": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "想要"
  },
  "violent": {
    "pos": "adj.",
    "en_def": "very strong and dangerous",
    "cn_def": "暴力的，猛烈的"
  },
  "vacation": {
    "pos": "n.",
    "en_def": "a time when you do not go to school or work",
    "cn_def": "假期，休假"
  },
  "value": {
    "pos": "n.",
    "en_def": "how important or useful something is",
    "cn_def": "價值，重要性"
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "a machine like a car, bus, or truck that carries people or things",
    "cn_def": "車輛，交通工具"
  },
  "vegetables": {
    "pos": "n.",
    "en_def": "a plant that people eat, like carrots and cabbage",
    "cn_def": "蔬菜"
  },
  "vehicles": {
    "pos": "n.",
    "en_def": "a machine like a car, bus, or truck that carries people or things",
    "cn_def": "車輛，交通工具"
  },
  "villages": {
    "pos": "n.",
    "en_def": "a very small town in the country",
    "cn_def": "村莊"
  },
  "visitors": {
    "pos": "n.",
    "en_def": "a person who comes to see a place or a person",
    "cn_def": "訪客，參觀者"
  },
  "valleys": {
    "pos": "n.",
    "en_def": "the low land between hills or mountains",
    "cn_def": "山谷，溪谷"
  },
  "vases": {
    "pos": "n.",
    "en_def": "a tall container for flowers",
    "cn_def": "花瓶"
  }
};

const EXTRA_GLOSSES = {};
