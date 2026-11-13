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
    "en_def": "",
    "sentence": "He visited his {{BLANK}}.",
    "cn": "他拜訪了他的叔叔。"
  },
  {
    "word": "underline",
    "pos": "v.",
    "cn_def": "在...下面劃線，強調",
    "en_def": "",
    "sentence": "She {{BLANK}} the important words.",
    "cn": "她在重要詞語下劃了線。"
  },
  {
    "word": "underwear",
    "pos": "n.",
    "cn_def": "內衣，底褲",
    "en_def": "",
    "sentence": "She bought new {{BLANK}}.",
    "cn": "她買了新內衣。"
  },
  {
    "word": "unhappy",
    "pos": "adj.",
    "cn_def": "不快樂的，不滿意的",
    "en_def": "",
    "sentence": "He is {{BLANK}} with his job.",
    "cn": "他對他的工作不滿意。"
  },
  {
    "word": "uniform",
    "pos": "n.",
    "cn_def": "制服",
    "en_def": "",
    "sentence": "She wears a {{BLANK}} to school.",
    "cn": "她穿著制服上學。"
  },
  {
    "word": "universe",
    "pos": "n.",
    "cn_def": "宇宙，天地",
    "en_def": "",
    "sentence": "The {{BLANK}} is vast and mysterious.",
    "cn": "宇宙是廣闊而神秘的。"
  },
  {
    "word": "used to",
    "pos": "aux.",
    "cn_def": "曾經，習慣於",
    "en_def": "",
    "sentence": "She {{BLANK}} live in New York.",
    "cn": "她曾經住在紐約。",
    "nblanks": 2
  },
  {
    "word": "useful",
    "pos": "adj.",
    "cn_def": "有用的，有幫助的",
    "en_def": "",
    "sentence": "This tool is very {{BLANK}}.",
    "cn": "這個工具很有用。"
  },
  {
    "word": "usual",
    "pos": "adj.",
    "cn_def": "通常的，平常的",
    "en_def": "",
    "sentence": "She arrived at the {{BLANK}} time.",
    "cn": "她在平常的時間到達。"
  },
  {
    "word": "vacation",
    "pos": "n.",
    "cn_def": "假期，休假",
    "en_def": "",
    "sentence": "They went on a family {{BLANK}}.",
    "cn": "他們去家庭度假。"
  },
  {
    "word": "vacuum",
    "pos": "n.",
    "cn_def": "真空，吸塵器",
    "en_def": "",
    "sentence": "She used a {{BLANK}} to clean the carpet.",
    "cn": "她用吸塵器清潔地毯。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷，溪谷",
    "en_def": "",
    "sentence": "They hiked through the {{BLANK}}.",
    "cn": "他們徒步穿越山谷。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值，重要性",
    "en_def": "",
    "sentence": "She placed a high {{BLANK}} on honesty.",
    "cn": "她非常重視誠實。"
  },
  {
    "word": "various",
    "pos": "adj.",
    "cn_def": "各種各樣的",
    "en_def": "",
    "sentence": "The store sells {{BLANK}} types of bread.",
    "cn": "這家商店出售各種麵包。"
  },
  {
    "word": "vase",
    "pos": "n.",
    "cn_def": "花瓶",
    "en_def": "",
    "sentence": "She arranged flowers in the {{BLANK}}.",
    "cn": "她在花瓶裡插花。"
  },
  {
    "word": "vegetable",
    "pos": "n.",
    "cn_def": "蔬菜",
    "en_def": "",
    "sentence": "She grows her own {{BLANK}}.",
    "cn": "她自己種蔬菜。"
  },
  {
    "word": "vehicle",
    "pos": "n.",
    "cn_def": "車輛，交通工具",
    "en_def": "",
    "sentence": "They bought a new {{BLANK}}.",
    "cn": "他們買了一輛新車。"
  },
  {
    "word": "village",
    "pos": "n.",
    "cn_def": "村莊",
    "en_def": "",
    "sentence": "They live in a small {{BLANK}}.",
    "cn": "他們住在一個小村莊裡。"
  },
  {
    "word": "violent",
    "pos": "adj.",
    "cn_def": "暴力的，猛烈的",
    "en_def": "",
    "sentence": "The storm was very {{BLANK}}.",
    "cn": "暴風雨非常猛烈。"
  },
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "訪客，參觀者",
    "en_def": "",
    "sentence": "The museum had many {{BLANK}} last week.",
    "cn": "上週博物館有很多參觀者。"
  }
];

const MCQS = [
  {
    "q": "He visited his ______.【叔叔，舅舅】",
    "options": [
      "uncle",
      "vacuum",
      "universe",
      "village"
    ],
    "answer": 0,
    "cn": "他拜訪了他的叔叔。",
    "vocabIndex": 0
  },
  {
    "q": "She ______ the important words.【在...下面劃線，強調】",
    "options": [
      "divided",
      "underlined",
      "succeed",
      "wrapped"
    ],
    "answer": 1,
    "cn": "她在重要詞語下劃了線。",
    "vocabIndex": 1
  },
  {
    "q": "She bought new ______.【內衣，底褲】",
    "options": [
      "universe",
      "vase",
      "vacation",
      "underwear"
    ],
    "answer": 3,
    "cn": "她買了新內衣。",
    "vocabIndex": 2
  },
  {
    "q": "He is ______ with his job.【不快樂的，不滿意的】",
    "options": [
      "useful",
      "violent",
      "unhappy",
      "usual"
    ],
    "answer": 2,
    "cn": "他對他的工作不滿意。",
    "vocabIndex": 3
  },
  {
    "q": "She wears a ______ to school.【制服】",
    "options": [
      "uncle",
      "value",
      "underwear",
      "uniform"
    ],
    "answer": 3,
    "cn": "她穿著制服上學。",
    "vocabIndex": 4
  },
  {
    "q": "The ______ is vast and mysterious.【宇宙，天地】",
    "options": [
      "vacuum",
      "universe",
      "valley",
      "value"
    ],
    "answer": 1,
    "cn": "宇宙是廣闊而神秘的。",
    "vocabIndex": 5
  },
  {
    "q": "She ______ live in New York.【曾經，習慣於】",
    "options": [
      "shall",
      "toffee",
      "used to",
      "male"
    ],
    "answer": 2,
    "cn": "她曾經住在紐約。",
    "vocabIndex": 6
  },
  {
    "q": "This tool is very ______.【有用的，有幫助的】",
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
    "q": "She arrived at the ______ time.【通常的，平常的】",
    "options": [
      "unhappy",
      "usual",
      "violent",
      "useful"
    ],
    "answer": 1,
    "cn": "她在平常的時間到達。",
    "vocabIndex": 8
  },
  {
    "q": "They went on a family ______.【假期，休假】",
    "options": [
      "underwear",
      "village",
      "vacation",
      "vase"
    ],
    "answer": 2,
    "cn": "他們去家庭度假。",
    "vocabIndex": 9
  },
  {
    "q": "She used a ______ to clean the carpet.【真空，吸塵器】",
    "options": [
      "village",
      "vase",
      "value",
      "vacuum"
    ],
    "answer": 3,
    "cn": "她用吸塵器清潔地毯。",
    "vocabIndex": 10
  },
  {
    "q": "They hiked through the ______.【山谷，溪谷】",
    "options": [
      "valley",
      "underwear",
      "uniform",
      "village"
    ],
    "answer": 0,
    "cn": "他們徒步穿越山谷。",
    "vocabIndex": 11
  },
  {
    "q": "She placed a high ______ on honesty.【價值，重要性】",
    "options": [
      "universe",
      "vacuum",
      "underwear",
      "value"
    ],
    "answer": 3,
    "cn": "她非常重視誠實。",
    "vocabIndex": 12
  },
  {
    "q": "The store sells ______ types of bread.【各種各樣的】",
    "options": [
      "unhappy",
      "various",
      "violent",
      "usual"
    ],
    "answer": 1,
    "cn": "這家商店出售各種麵包。",
    "vocabIndex": 13
  },
  {
    "q": "She arranged flowers in the ______.【花瓶】",
    "options": [
      "vacation",
      "vehicle",
      "vase",
      "universe"
    ],
    "answer": 2,
    "cn": "她在花瓶裡插花。",
    "vocabIndex": 14
  },
  {
    "q": "She grows her own ______.【蔬菜】",
    "options": [
      "vegetables",
      "visitors",
      "vacuum",
      "uniform"
    ],
    "answer": 0,
    "cn": "她自己種蔬菜。",
    "vocabIndex": 15
  },
  {
    "q": "They bought a new ______.【車輛，交通工具】",
    "options": [
      "universe",
      "valley",
      "vehicle",
      "vacuum"
    ],
    "answer": 2,
    "cn": "他們買了一輛新車。",
    "vocabIndex": 16
  },
  {
    "q": "They live in a small ______.【村莊】",
    "options": [
      "vehicle",
      "vacuum",
      "vase",
      "village"
    ],
    "answer": 3,
    "cn": "他們住在一個小村莊裡。",
    "vocabIndex": 17
  },
  {
    "q": "The storm was very ______.【暴力的，猛烈的】",
    "options": [
      "violent",
      "unhappy",
      "usual",
      "useful"
    ],
    "answer": 0,
    "cn": "暴風雨非常猛烈。",
    "vocabIndex": 18
  },
  {
    "q": "The museum had many ______ last week.【訪客，參觀者】",
    "options": [
      "vegetables",
      "visitors",
      "vacuum",
      "uncle"
    ],
    "answer": 1,
    "cn": "上週博物館有很多參觀者。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "divided": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "分開，劃分"
  },
  "male": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "男性的"
  },
  "shall": {
    "pos": "aux.",
    "en_def": "",
    "cn_def": "將要，應該"
  },
  "succeed": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "成功，繼承"
  },
  "toffee": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "太妃糖"
  },
  "uncle": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "叔叔，舅舅"
  },
  "underlined": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "在...下面劃線，強調"
  },
  "underwear": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "內衣，底褲"
  },
  "unhappy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "不快樂的，不滿意的"
  },
  "uniform": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "制服"
  },
  "universe": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "宇宙，天地"
  },
  "used to": {
    "pos": "aux.",
    "en_def": "",
    "cn_def": "曾經，習慣於"
  },
  "useful": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "有用的，有幫助的"
  },
  "usual": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "通常的，平常的"
  },
  "vacation": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "假期，休假"
  },
  "vacuum": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "真空，吸塵器"
  },
  "valley": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "山谷，溪谷"
  },
  "value": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "價值，重要性"
  },
  "various": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "各種各樣的"
  },
  "vase": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "花瓶"
  },
  "vegetables": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "蔬菜"
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "車輛，交通工具"
  },
  "village": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "村莊"
  },
  "violent": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "暴力的，猛烈的"
  },
  "visitors": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "訪客，參觀者"
  },
  "wrapped": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "包裝，裹"
  }
};

const EXTRA_GLOSSES = {};
