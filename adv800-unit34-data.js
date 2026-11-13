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
    "q": "Mr. Lin is rich but ______. He never spends any money on his friends.",
    "options": [
      "stormy",
      "straight",
      "stingy",
      "super"
    ],
    "answer": 2,
    "cn": "他太吝嗇了，不願捐錢。",
    "vocabIndex": 0
  },
  {
    "q": "I ate too much ice cream, and now I have a ______.",
    "options": [
      "stomachache",
      "storm",
      "stove",
      "straw"
    ],
    "answer": 0,
    "cn": "她吃太多後胃痛。",
    "vocabIndex": 1
  },
  {
    "q": "The boy threw a small ______ into the lake.",
    "options": [
      "storm",
      "style",
      "suit",
      "stone"
    ],
    "answer": 3,
    "cn": "他向池塘裡扔了一塊石頭。",
    "vocabIndex": 2
  },
  {
    "q": "The ______ last night was terrible. The wind and rain broke many trees.",
    "options": [
      "stove",
      "storm",
      "straw",
      "suit"
    ],
    "answer": 1,
    "cn": "暴風雨造成了很大損失。",
    "vocabIndex": 3
  },
  {
    "q": "It was a dark and ______ night. The wind was strong, and the rain was heavy.",
    "options": [
      "stingy",
      "straight",
      "stormy",
      "super"
    ],
    "answer": 2,
    "cn": "那是一個暴風雨之夜。",
    "vocabIndex": 4
  },
  {
    "q": "Mom put the pot on the ______ and turned on the gas to cook the soup.",
    "options": [
      "storm",
      "stream",
      "straw",
      "stove"
    ],
    "answer": 3,
    "cn": "她在爐灶上做飯。",
    "vocabIndex": 5
  },
  {
    "q": "Draw a ______ line with your ruler.",
    "options": [
      "straight",
      "stingy",
      "stormy",
      "super"
    ],
    "answer": 0,
    "cn": "這條路是直的。",
    "vocabIndex": 6
  },
  {
    "q": "I drank my juice through a ______.",
    "options": [
      "stream",
      "straw",
      "stove",
      "suit"
    ],
    "answer": 1,
    "cn": "她用吸管喝果汁。",
    "vocabIndex": 7
  },
  {
    "q": "A small ______ runs through the forest. We can cross the water in two steps.",
    "options": [
      "stove",
      "straw",
      "stream",
      "style"
    ],
    "answer": 2,
    "cn": "他們沿著小溪走。",
    "vocabIndex": 8
  },
  {
    "q": "The bus drivers want more pay, so they are going to ______ next week. There will be no buses.",
    "options": [
      "succeed",
      "strike",
      "suggest",
      "support"
    ],
    "answer": 1,
    "cn": "工人們決定罷工。",
    "vocabIndex": 9
  },
  {
    "q": "I like your hair ______. It looks great on you.",
    "options": [
      "stream",
      "stove",
      "storm",
      "style"
    ],
    "answer": 3,
    "cn": "她有獨特的時尚風格。",
    "vocabIndex": 10
  },
  {
    "q": "In New York, many people take the ______ to work. The trains run under the city.",
    "options": [
      "subway",
      "stove",
      "stream",
      "supper"
    ],
    "answer": 0,
    "cn": "他們乘地鐵去博物館。",
    "vocabIndex": 11
  },
  {
    "q": "If you work hard, you will ______. You will get what you want.",
    "options": [
      "strike",
      "suggest",
      "succeed",
      "swallow"
    ],
    "answer": 2,
    "cn": "她希望在職業生涯中取得成功。",
    "vocabIndex": 12
  },
  {
    "q": "The party was a great ______. Everyone had a good time.",
    "options": [
      "stove",
      "straw",
      "stream",
      "success"
    ],
    "answer": 3,
    "cn": "他的努力導致了他的成功。",
    "vocabIndex": 13
  },
  {
    "q": "She is ______ a nice girl that everyone likes her.",
    "options": [
      "stingy",
      "such",
      "super",
      "straight"
    ],
    "answer": 1,
    "cn": "她是一個這樣善良的人。",
    "vocabIndex": 14
  },
  {
    "q": "We were having a picnic. ______, it started to rain, and we all ran to the car.",
    "options": [
      "Suddenly",
      "Therefore",
      "Especially",
      "Hardly"
    ],
    "answer": 0,
    "cn": "燈突然熄滅了。",
    "vocabIndex": 15
  },
  {
    "q": "I ______ that we take a taxi. It is too far to walk.",
    "options": [
      "strike",
      "suggest",
      "succeed",
      "swallow"
    ],
    "answer": 1,
    "cn": "我建議我們去看電影。",
    "vocabIndex": 16
  },
  {
    "q": "He wore a black ______ and a tie to the job interview.",
    "options": [
      "stove",
      "straw",
      "suit",
      "stream"
    ],
    "answer": 2,
    "cn": "他穿著西裝去面試。",
    "vocabIndex": 17
  },
  {
    "q": "We had a ______ time at the beach. It was the best day of the summer.",
    "options": [
      "stingy",
      "stormy",
      "straight",
      "super"
    ],
    "answer": 3,
    "cn": "她是一個超級學生。",
    "vocabIndex": 18
  },
  {
    "q": "We had fish and rice for ______ last night. Then we watched TV and went to bed.",
    "options": [
      "supper",
      "style",
      "stream",
      "stone"
    ],
    "answer": 0,
    "cn": "他們在睡前吃了一頓輕晚餐。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "stormy": {
    "pos": "adj.",
    "en_def": "with strong wind and heavy rain",
    "cn_def": "暴風雨的，猛烈的"
  },
  "straight": {
    "pos": "adj.",
    "en_def": "not bending or turning",
    "cn_def": "直的，直接的"
  },
  "stingy": {
    "pos": "adj.",
    "en_def": "not willing to spend or give money",
    "cn_def": "吝嗇的，小氣的"
  },
  "super": {
    "pos": "adj.",
    "en_def": "very, very good",
    "cn_def": "超級的，極好的"
  },
  "stomachache": {
    "pos": "n.",
    "en_def": "a pain in your stomach",
    "cn_def": "胃痛"
  },
  "storm": {
    "pos": "n.",
    "en_def": "very bad weather with strong wind and heavy rain",
    "cn_def": "暴風雨，風暴"
  },
  "stove": {
    "pos": "n.",
    "en_def": "a machine in the kitchen for cooking food",
    "cn_def": "火爐，爐灶"
  },
  "straw": {
    "pos": "n.",
    "en_def": "a thin tube for drinking",
    "cn_def": "稻草，吸管"
  },
  "style": {
    "pos": "n.",
    "en_def": "a way of dressing or doing something",
    "cn_def": "風格，樣式"
  },
  "suit": {
    "pos": "n.",
    "en_def": "a jacket and pants or a skirt made of the same cloth",
    "cn_def": "套裝，西裝"
  },
  "stone": {
    "pos": "n.",
    "en_def": "a small piece of rock",
    "cn_def": "石頭，寶石"
  },
  "stream": {
    "pos": "n.",
    "en_def": "a small river",
    "cn_def": "小溪，溪流"
  },
  "succeed": {
    "pos": "v.",
    "en_def": "to do well and get what you wanted",
    "cn_def": "成功，繼承"
  },
  "strike": {
    "pos": "v.",
    "en_def": "to stop working because you want more pay or better conditions",
    "cn_def": "打擊，罷工"
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to tell someone an idea about what to do",
    "cn_def": "建議，提議"
  },
  "support": {
    "pos": "v.",
    "en_def": "to agree with and help someone",
    "cn_def": "支持，支援"
  },
  "subway": {
    "pos": "n.",
    "en_def": "a train system that runs under a city",
    "cn_def": "地鐵"
  },
  "supper": {
    "pos": "n.",
    "en_def": "a meal that you eat in the evening",
    "cn_def": "晚餐"
  },
  "swallow": {
    "pos": "v.",
    "en_def": "to make food or drink go down your throat",
    "cn_def": "吞下，嚥下"
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
  "therefore": {
    "pos": "adv.",
    "en_def": "so; for that reason",
    "cn_def": "因此，所以"
  },
  "especially": {
    "pos": "adv.",
    "en_def": "more than others; more than usual",
    "cn_def": "特別地，尤其"
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not",
    "cn_def": "幾乎不，勉強地"
  }
};

const EXTRA_GLOSSES = {};
