// Unit 34 Quiz Data: stingy – supper
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U34 - stingy – supper",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "stingy",
    "pos": "adj.",
    "cn_def": "吝嗇的，小氣的",
    "en_def": "not willing to spend or give money",
    "sentence": "He is too {{BLANK}} to donate money.",
    "cn": "他太吝嗇了，不願捐錢。"
  },
  {
    "word": "stomachache",
    "pos": "n.",
    "cn_def": "胃痛",
    "en_def": "a pain in your stomach",
    "sentence": "She had a {{BLANK}} after eating too much.",
    "cn": "她吃太多後胃痛。"
  },
  {
    "word": "stone",
    "pos": "n.",
    "cn_def": "石頭，寶石",
    "en_def": "a small piece of rock",
    "sentence": "He threw a {{BLANK}} into the pond.",
    "cn": "他向池塘裡扔了一塊石頭。"
  },
  {
    "word": "storm",
    "pos": "n.",
    "cn_def": "暴風雨，風暴",
    "en_def": "very bad weather with strong wind and heavy rain",
    "sentence": "The {{BLANK}} caused a lot of damage.",
    "cn": "暴風雨造成了很大損失。"
  },
  {
    "word": "stormy",
    "pos": "adj.",
    "cn_def": "暴風雨的，猛烈的",
    "en_def": "with strong wind and heavy rain",
    "sentence": "It was a {{BLANK}} night.",
    "cn": "那是一個暴風雨之夜。"
  },
  {
    "word": "stove",
    "pos": "n.",
    "cn_def": "火爐，爐灶",
    "en_def": "a machine in the kitchen for cooking food",
    "sentence": "She cooked the meal on the {{BLANK}}.",
    "cn": "她在爐灶上做飯。"
  },
  {
    "word": "straight",
    "pos": "adj.",
    "cn_def": "直的，直接的",
    "en_def": "not bending or turning",
    "sentence": "The road is {{BLANK}}.",
    "cn": "這條路是直的。"
  },
  {
    "word": "straw",
    "pos": "n.",
    "cn_def": "稻草，吸管",
    "en_def": "a thin tube for drinking",
    "sentence": "She drank her juice with a {{BLANK}}.",
    "cn": "她用吸管喝果汁。"
  },
  {
    "word": "stream",
    "pos": "n.",
    "cn_def": "小溪，溪流",
    "en_def": "a small river",
    "sentence": "They followed the path along the {{BLANK}}.",
    "cn": "他們沿著小溪走。"
  },
  {
    "word": "strike",
    "pos": "v.",
    "cn_def": "打擊，罷工",
    "en_def": "to stop working because you want more pay or better conditions",
    "sentence": "The workers decided to {{BLANK}}.",
    "cn": "工人們決定罷工。"
  },
  {
    "word": "style",
    "pos": "n.",
    "cn_def": "風格，樣式",
    "en_def": "a way of dressing or doing something",
    "sentence": "She has a unique fashion {{BLANK}}.",
    "cn": "她有獨特的時尚風格。"
  },
  {
    "word": "subway",
    "pos": "n.",
    "cn_def": "地鐵",
    "en_def": "a train system that runs under a city",
    "sentence": "They took the {{BLANK}} to the museum.",
    "cn": "他們乘地鐵去博物館。"
  },
  {
    "word": "succeed",
    "pos": "v.",
    "cn_def": "成功，繼承",
    "en_def": "to do well and get what you wanted",
    "sentence": "She hopes to {{BLANK}} in her career.",
    "cn": "她希望在職業生涯中取得成功。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功",
    "en_def": "doing well and getting what you wanted",
    "sentence": "His hard work led to his {{BLANK}}.",
    "cn": "他的努力導致了他的成功。"
  },
  {
    "word": "such",
    "pos": "adj.",
    "cn_def": "這樣的，如此的",
    "en_def": "so; to such a degree (used before a noun)",
    "sentence": "She is {{BLANK}} a kind person.",
    "cn": "她是一個這樣善良的人。"
  },
  {
    "word": "suddenly",
    "pos": "adv.",
    "cn_def": "突然地，忽然",
    "en_def": "quickly and when you do not expect it",
    "sentence": "The lights went out {{BLANK}}.",
    "cn": "燈突然熄滅了。"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "cn_def": "建議，提議",
    "en_def": "to tell someone an idea about what to do",
    "sentence": "I {{BLANK}} we go to the movies.",
    "cn": "我建議我們去看電影。"
  },
  {
    "word": "suit",
    "pos": "n.",
    "cn_def": "套裝，西裝",
    "en_def": "a jacket and pants or a skirt made of the same cloth",
    "sentence": "He wore a {{BLANK}} to the interview.",
    "cn": "他穿著西裝去面試。"
  },
  {
    "word": "super",
    "pos": "adj.",
    "cn_def": "超級的，極好的",
    "en_def": "very, very good",
    "sentence": "She is a {{BLANK}} student.",
    "cn": "她是一個超級學生。"
  },
  {
    "word": "supper",
    "pos": "n.",
    "cn_def": "晚餐",
    "en_def": "a meal that you eat in the evening",
    "sentence": "They had a light {{BLANK}} before bed.",
    "cn": "他們在睡前吃了一頓輕晚餐。"
  }
];

const MCQS = [
  {
    "q": "He is too ______ to donate money.【吝嗇的，小氣的】",
    "options": [
      "stormy",
      "stingy",
      "super",
      "straight"
    ],
    "answer": 1,
    "cn": "他太吝嗇了，不願捐錢。",
    "vocabIndex": 0
  },
  {
    "q": "She had a ______ after eating too much.【胃痛】",
    "options": [
      "straw",
      "stream",
      "style",
      "stomachache"
    ],
    "answer": 3,
    "cn": "她吃太多後胃痛。",
    "vocabIndex": 1
  },
  {
    "q": "He threw a ______ into the pond.【石頭，寶石】",
    "options": [
      "stone",
      "straw",
      "storm",
      "stove"
    ],
    "answer": 0,
    "cn": "他向池塘裡扔了一塊石頭。",
    "vocabIndex": 2
  },
  {
    "q": "The ______ caused a lot of damage.【暴風雨，風暴】",
    "options": [
      "stream",
      "subway",
      "storm",
      "stove"
    ],
    "answer": 2,
    "cn": "暴風雨造成了很大損失。",
    "vocabIndex": 3
  },
  {
    "q": "It was a ______ night.【暴風雨的，猛烈的】",
    "options": [
      "super",
      "straight",
      "stingy",
      "stormy"
    ],
    "answer": 3,
    "cn": "那是一個暴風雨之夜。",
    "vocabIndex": 4
  },
  {
    "q": "She cooked the meal on the ______.【火爐，爐灶】",
    "options": [
      "stove",
      "supper",
      "storm",
      "stone"
    ],
    "answer": 0,
    "cn": "她在爐灶上做飯。",
    "vocabIndex": 5
  },
  {
    "q": "The road is ______.【直的，直接的】",
    "options": [
      "such",
      "super",
      "straight",
      "stormy"
    ],
    "answer": 2,
    "cn": "這條路是直的。",
    "vocabIndex": 6
  },
  {
    "q": "She drank her juice with a ______.【稻草，吸管】",
    "options": [
      "stove",
      "straw",
      "suit",
      "stone"
    ],
    "answer": 1,
    "cn": "她用吸管喝果汁。",
    "vocabIndex": 7
  },
  {
    "q": "They followed the path along the ______.【小溪，溪流】",
    "options": [
      "stomachache",
      "stone",
      "straw",
      "stream"
    ],
    "answer": 3,
    "cn": "他們沿著小溪走。",
    "vocabIndex": 8
  },
  {
    "q": "The workers decided to ______.【打擊，罷工】",
    "options": [
      "strike",
      "suggest",
      "succeed",
      "consider"
    ],
    "answer": 0,
    "cn": "工人們決定罷工。",
    "vocabIndex": 9
  },
  {
    "q": "She has a unique fashion ______.【風格，樣式】",
    "options": [
      "suit",
      "stove",
      "style",
      "subway"
    ],
    "answer": 2,
    "cn": "她有獨特的時尚風格。",
    "vocabIndex": 10
  },
  {
    "q": "They took the ______ to the museum.【地鐵】",
    "options": [
      "stomachache",
      "subway",
      "stove",
      "supper"
    ],
    "answer": 1,
    "cn": "他們乘地鐵去博物館。",
    "vocabIndex": 11
  },
  {
    "q": "She hopes to ______ in her career.【成功，繼承】",
    "options": [
      "suggest",
      "strike",
      "succeed",
      "measured"
    ],
    "answer": 2,
    "cn": "她希望在職業生涯中取得成功。",
    "vocabIndex": 12
  },
  {
    "q": "His hard work led to his ______.【成功】",
    "options": [
      "success",
      "stream",
      "stove",
      "suit"
    ],
    "answer": 0,
    "cn": "他的努力導致了他的成功。",
    "vocabIndex": 13
  },
  {
    "q": "She is ______ a kind person.【這樣的，如此的】",
    "options": [
      "stingy",
      "such",
      "straight",
      "super"
    ],
    "answer": 1,
    "cn": "她是一個這樣善良的人。",
    "vocabIndex": 14
  },
  {
    "q": "The lights went out ______.【突然地，忽然】",
    "options": [
      "rather",
      "hardly",
      "neither",
      "suddenly"
    ],
    "answer": 3,
    "cn": "燈突然熄滅了。",
    "vocabIndex": 15
  },
  {
    "q": "I ______ we go to the movies.【建議，提議】",
    "options": [
      "suggest",
      "strike",
      "succeed",
      "interrupt"
    ],
    "answer": 0,
    "cn": "我建議我們去看電影。",
    "vocabIndex": 16
  },
  {
    "q": "He wore a ______ to the interview.【套裝，西裝】",
    "options": [
      "storm",
      "style",
      "suit",
      "straw"
    ],
    "answer": 2,
    "cn": "他穿著西裝去面試。",
    "vocabIndex": 17
  },
  {
    "q": "She is a ______ student.【超級的，極好的】",
    "options": [
      "such",
      "super",
      "stormy",
      "straight"
    ],
    "answer": 1,
    "cn": "她是一個超級學生。",
    "vocabIndex": 18
  },
  {
    "q": "They had a light ______ before bed.【晚餐】",
    "options": [
      "stomachache",
      "subway",
      "style",
      "supper"
    ],
    "answer": 3,
    "cn": "他們在睡前吃了一頓輕晚餐。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "consider": {
    "pos": "v.",
    "en_def": "to think about something carefully",
    "cn_def": "考慮"
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not",
    "cn_def": "幾乎不，勉強地"
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop someone while they are speaking",
    "cn_def": "打斷，中斷"
  },
  "measured": {
    "pos": "v.",
    "en_def": "to find out how long, big, or heavy something is",
    "cn_def": "測量，衡量"
  },
  "neither": {
    "pos": "adv.",
    "en_def": "not one and not the other of two",
    "cn_def": "也不，既不"
  },
  "rather": {
    "pos": "adv.",
    "en_def": "more willingly (used with \"would\")",
    "cn_def": "寧願，倒不如說"
  },
  "stingy": {
    "pos": "adj.",
    "en_def": "not willing to spend or give money",
    "cn_def": "吝嗇的，小氣的"
  },
  "stomachache": {
    "pos": "n.",
    "en_def": "a pain in your stomach",
    "cn_def": "胃痛"
  },
  "stone": {
    "pos": "n.",
    "en_def": "a small piece of rock",
    "cn_def": "石頭，寶石"
  },
  "storm": {
    "pos": "n.",
    "en_def": "very bad weather with strong wind and heavy rain",
    "cn_def": "暴風雨，風暴"
  },
  "stormy": {
    "pos": "adj.",
    "en_def": "with strong wind and heavy rain",
    "cn_def": "暴風雨的，猛烈的"
  },
  "stove": {
    "pos": "n.",
    "en_def": "a machine in the kitchen for cooking food",
    "cn_def": "火爐，爐灶"
  },
  "straight": {
    "pos": "adj.",
    "en_def": "not bending or turning",
    "cn_def": "直的，直接的"
  },
  "straw": {
    "pos": "n.",
    "en_def": "a thin tube for drinking",
    "cn_def": "稻草，吸管"
  },
  "stream": {
    "pos": "n.",
    "en_def": "a small river",
    "cn_def": "小溪，溪流"
  },
  "strike": {
    "pos": "v.",
    "en_def": "to stop working because you want more pay or better conditions",
    "cn_def": "打擊，罷工"
  },
  "style": {
    "pos": "n.",
    "en_def": "a way of dressing or doing something",
    "cn_def": "風格，樣式"
  },
  "subway": {
    "pos": "n.",
    "en_def": "a train system that runs under a city",
    "cn_def": "地鐵"
  },
  "succeed": {
    "pos": "v.",
    "en_def": "to do well and get what you wanted",
    "cn_def": "成功，繼承"
  },
  "success": {
    "pos": "n.",
    "en_def": "doing well and getting what you wanted",
    "cn_def": "成功"
  },
  "such": {
    "pos": "adj.",
    "en_def": "so; to such a degree (used before a noun)",
    "cn_def": "這樣的，如此的"
  },
  "suddenly": {
    "pos": "adv.",
    "en_def": "quickly and when you do not expect it",
    "cn_def": "突然地，忽然"
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to tell someone an idea about what to do",
    "cn_def": "建議，提議"
  },
  "suit": {
    "pos": "n.",
    "en_def": "a jacket and pants or a skirt made of the same cloth",
    "cn_def": "套裝，西裝"
  },
  "super": {
    "pos": "adj.",
    "en_def": "very, very good",
    "cn_def": "超級的，極好的"
  },
  "supper": {
    "pos": "n.",
    "en_def": "a meal that you eat in the evening",
    "cn_def": "晚餐"
  }
};

const EXTRA_GLOSSES = {};
