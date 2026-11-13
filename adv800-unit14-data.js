// Unit 14 Quiz Data: final – forward
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U14 - final – forward",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "final",
    "pos": "adj.",
    "cn_def": "最後的，決定性的",
    "en_def": "last",
    "sentence": "The {{BLANK}} decision will be made tomorrow.",
    "cn": "最終決定將在明天作出。"
  },
  {
    "word": "fit",
    "pos": "adj.",
    "cn_def": "合適的，健康的",
    "en_def": "to be the right size for someone",
    "sentence": "These shoes {{BLANK}} perfectly.",
    "cn": "這雙鞋非常合適。"
  },
  {
    "word": "flag",
    "pos": "n.",
    "cn_def": "旗幟",
    "en_def": "a piece of cloth with colors and shapes that stands for a country",
    "sentence": "They raised the national {{BLANK}}.",
    "cn": "他們升起了國旗。"
  },
  {
    "word": "flashlight",
    "pos": "n.",
    "cn_def": "手電筒",
    "en_def": "a small light that you carry in your hand",
    "sentence": "She used a {{BLANK}} to find her way in the dark.",
    "cn": "她用手電筒在黑暗中找路。"
  },
  {
    "word": "flat tire",
    "pos": "n.",
    "cn_def": "爆胎",
    "en_def": "a wheel on a car or bike that has lost its air",
    "sentence": "He had a {{BLANK}} on his way to work.",
    "cn": "他上班途中遇到了爆胎。",
    "nblanks": 2
  },
  {
    "word": "flight",
    "pos": "n.",
    "cn_def": "飛行，航班",
    "en_def": "a trip in a plane",
    "sentence": "Their {{BLANK}} was delayed due to bad weather.",
    "cn": "他們的航班因天氣惡劣而延誤。"
  },
  {
    "word": "flour",
    "pos": "n.",
    "cn_def": "麵粉",
    "en_def": "white powder made from wheat, used to make bread and cakes",
    "sentence": "She used {{BLANK}} to bake the cake.",
    "cn": "她用麵粉烤蛋糕。"
  },
  {
    "word": "flu",
    "pos": "n.",
    "cn_def": "流感",
    "en_def": "a sickness like a very bad cold, with a fever",
    "sentence": "He caught the {{BLANK}} last week.",
    "cn": "他上週得了流感。"
  },
  {
    "word": "flute",
    "pos": "n.",
    "cn_def": "長笛",
    "en_def": "a long, thin musical instrument that you blow into",
    "sentence": "She plays the {{BLANK}} in the school band.",
    "cn": "她在校樂隊裡吹長笛。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "集中，專注",
    "en_def": "to give all your attention to one thing",
    "sentence": "You need to {{BLANK}} on your studies.",
    "cn": "你需要專注於學習。"
  },
  {
    "word": "fog",
    "pos": "n.",
    "cn_def": "霧",
    "en_def": "thick cloud near the ground that is hard to see through",
    "sentence": "The {{BLANK}} was so thick that we couldn't see the road.",
    "cn": "霧太濃了，我們看不見路。"
  },
  {
    "word": "foggy",
    "pos": "adj.",
    "cn_def": "有霧的，模糊的",
    "en_def": "with a lot of fog",
    "sentence": "It was a cold and {{BLANK}} morning.",
    "cn": "那是一個寒冷而有霧的早晨。"
  },
  {
    "word": "foolish",
    "pos": "adj.",
    "cn_def": "愚蠢的",
    "en_def": "not wise; silly",
    "sentence": "It was {{BLANK}} to make such a mistake.",
    "cn": "犯這樣的錯誤真是愚蠢。"
  },
  {
    "word": "football",
    "pos": "n.",
    "cn_def": "足球",
    "en_def": "a game in which two teams kick a ball; soccer",
    "sentence": "He enjoys playing {{BLANK}} with his friends.",
    "cn": "他喜歡和朋友一起踢足球。"
  },
  {
    "word": "forest",
    "pos": "n.",
    "cn_def": "森林",
    "en_def": "a large area of land covered with trees",
    "sentence": "They went for a hike in the {{BLANK}}.",
    "cn": "他們在森林裡遠足。"
  },
  {
    "word": "forgive",
    "pos": "v.",
    "cn_def": "原諒，寬恕",
    "en_def": "to stop being angry with someone for something they did",
    "sentence": "She decided to {{BLANK}} him for his mistake.",
    "cn": "她決定原諒他的錯誤。"
  },
  {
    "word": "form",
    "pos": "n.",
    "cn_def": "形式，表格",
    "en_def": "a paper with spaces where you write information",
    "sentence": "Please fill out this {{BLANK}}.",
    "cn": "請填寫這張表格。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "serious and following rules; not relaxed",
    "sentence": "The event was very {{BLANK}}.",
    "cn": "這個活動非常正式。"
  },
  {
    "word": "former",
    "pos": "adj.",
    "cn_def": "以前的，前者的",
    "en_def": "having been something in the past, but not now",
    "sentence": "He is a {{BLANK}} president of the club.",
    "cn": "他是該俱樂部的前任主席。"
  },
  {
    "word": "forward",
    "pos": "adv.",
    "cn_def": "向前",
    "en_def": "toward the front",
    "sentence": "She took a step {{BLANK}}.",
    "cn": "她向前走了一步。"
  }
];

const MCQS = [
  {
    "q": "The ______ decision will be made tomorrow.【最後的，決定性的】",
    "options": [
      "former",
      "fit",
      "foolish",
      "final"
    ],
    "answer": 3,
    "cn": "最終決定將在明天作出。",
    "vocabIndex": 0
  },
  {
    "q": "These shoes ______ perfectly.【合適的，健康的】",
    "options": [
      "final",
      "former",
      "fit",
      "foggy"
    ],
    "answer": 2,
    "cn": "這雙鞋非常合適。",
    "vocabIndex": 1
  },
  {
    "q": "They raised the national ______.【旗幟】",
    "options": [
      "flag",
      "flight",
      "flu",
      "flute"
    ],
    "answer": 0,
    "cn": "他們升起了國旗。",
    "vocabIndex": 2
  },
  {
    "q": "She used a ______ to find her way in the dark.【手電筒】",
    "options": [
      "flight",
      "flashlight",
      "flour",
      "flat tire"
    ],
    "answer": 1,
    "cn": "她用手電筒在黑暗中找路。",
    "vocabIndex": 3
  },
  {
    "q": "He had a ______ on his way to work.【爆胎】",
    "options": [
      "flag",
      "flight",
      "flat tire",
      "form"
    ],
    "answer": 2,
    "cn": "他上班途中遇到了爆胎。",
    "vocabIndex": 4
  },
  {
    "q": "Their ______ was delayed due to bad weather.【飛行，航班】",
    "options": [
      "flour",
      "form",
      "flute",
      "flight"
    ],
    "answer": 3,
    "cn": "他們的航班因天氣惡劣而延誤。",
    "vocabIndex": 5
  },
  {
    "q": "She used ______ to bake the cake.【麵粉】",
    "options": [
      "flute",
      "flour",
      "flag",
      "forest"
    ],
    "answer": 1,
    "cn": "她用麵粉烤蛋糕。",
    "vocabIndex": 6
  },
  {
    "q": "He caught the ______ last week.【流感】",
    "options": [
      "flu",
      "flashlight",
      "football",
      "fog"
    ],
    "answer": 0,
    "cn": "他上週得了流感。",
    "vocabIndex": 7
  },
  {
    "q": "She plays the ______ in the school band.【長笛】",
    "options": [
      "fog",
      "flat tire",
      "flute",
      "flight"
    ],
    "answer": 2,
    "cn": "她在校樂隊裡吹長笛。",
    "vocabIndex": 8
  },
  {
    "q": "You need to ______ on your studies.【集中，專注】",
    "options": [
      "forgive",
      "focus",
      "express",
      "discuss"
    ],
    "answer": 1,
    "cn": "你需要專注於學習。",
    "vocabIndex": 9
  },
  {
    "q": "The ______ was so thick that we couldn't see the road.【霧】",
    "options": [
      "fog",
      "form",
      "flour",
      "flu"
    ],
    "answer": 0,
    "cn": "霧太濃了，我們看不見路。",
    "vocabIndex": 10
  },
  {
    "q": "It was a cold and ______ morning.【有霧的，模糊的】",
    "options": [
      "former",
      "formal",
      "final",
      "foggy"
    ],
    "answer": 3,
    "cn": "那是一個寒冷而有霧的早晨。",
    "vocabIndex": 11
  },
  {
    "q": "It was ______ to make such a mistake.【愚蠢的】",
    "options": [
      "final",
      "foolish",
      "fit",
      "foggy"
    ],
    "answer": 1,
    "cn": "犯這樣的錯誤真是愚蠢。",
    "vocabIndex": 12
  },
  {
    "q": "He enjoys playing ______ with his friends.【足球】",
    "options": [
      "fog",
      "flute",
      "football",
      "flight"
    ],
    "answer": 2,
    "cn": "他喜歡和朋友一起踢足球。",
    "vocabIndex": 13
  },
  {
    "q": "They went for a hike in the ______.【森林】",
    "options": [
      "forest",
      "flute",
      "flu",
      "flour"
    ],
    "answer": 0,
    "cn": "他們在森林裡遠足。",
    "vocabIndex": 14
  },
  {
    "q": "She decided to ______ him for his mistake.【原諒，寬恕】",
    "options": [
      "focus",
      "sink",
      "serve",
      "forgive"
    ],
    "answer": 3,
    "cn": "她決定原諒他的錯誤。",
    "vocabIndex": 15
  },
  {
    "q": "Please fill out this ______.【形式，表格】",
    "options": [
      "form",
      "flute",
      "flour",
      "flight"
    ],
    "answer": 0,
    "cn": "請填寫這張表格。",
    "vocabIndex": 16
  },
  {
    "q": "The event was very ______.【正式的】",
    "options": [
      "fit",
      "formal",
      "final",
      "foolish"
    ],
    "answer": 1,
    "cn": "這個活動非常正式。",
    "vocabIndex": 17
  },
  {
    "q": "He is a ______ president of the club.【以前的，前者的】",
    "options": [
      "final",
      "foolish",
      "former",
      "fit"
    ],
    "answer": 2,
    "cn": "他是該俱樂部的前任主席。",
    "vocabIndex": 18
  },
  {
    "q": "She took a step ______.【向前】",
    "options": [
      "nearly",
      "neither",
      "hardly",
      "forward"
    ],
    "answer": 3,
    "cn": "她向前走了一步。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論，商議"
  },
  "express": {
    "pos": "v.",
    "en_def": "to show a feeling or idea with words or actions",
    "cn_def": "表達，表現"
  },
  "final": {
    "pos": "adj.",
    "en_def": "last",
    "cn_def": "最後的，決定性的"
  },
  "fit": {
    "pos": "adj.",
    "en_def": "to be the right size for someone",
    "cn_def": "合適的，健康的"
  },
  "flag": {
    "pos": "n.",
    "en_def": "a piece of cloth with colors and shapes that stands for a country",
    "cn_def": "旗幟"
  },
  "flashlight": {
    "pos": "n.",
    "en_def": "a small light that you carry in your hand",
    "cn_def": "手電筒"
  },
  "flat tire": {
    "pos": "n.",
    "en_def": "a wheel on a car or bike that has lost its air",
    "cn_def": "爆胎"
  },
  "flight": {
    "pos": "n.",
    "en_def": "a trip in a plane",
    "cn_def": "飛行，航班"
  },
  "flour": {
    "pos": "n.",
    "en_def": "white powder made from wheat, used to make bread and cakes",
    "cn_def": "麵粉"
  },
  "flu": {
    "pos": "n.",
    "en_def": "a sickness like a very bad cold, with a fever",
    "cn_def": "流感"
  },
  "flute": {
    "pos": "n.",
    "en_def": "a long, thin musical instrument that you blow into",
    "cn_def": "長笛"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "集中，專注"
  },
  "fog": {
    "pos": "n.",
    "en_def": "thick cloud near the ground that is hard to see through",
    "cn_def": "霧"
  },
  "foggy": {
    "pos": "adj.",
    "en_def": "with a lot of fog",
    "cn_def": "有霧的，模糊的"
  },
  "foolish": {
    "pos": "adj.",
    "en_def": "not wise; silly",
    "cn_def": "愚蠢的"
  },
  "football": {
    "pos": "n.",
    "en_def": "a game in which two teams kick a ball; soccer",
    "cn_def": "足球"
  },
  "forest": {
    "pos": "n.",
    "en_def": "a large area of land covered with trees",
    "cn_def": "森林"
  },
  "forgive": {
    "pos": "v.",
    "en_def": "to stop being angry with someone for something they did",
    "cn_def": "原諒，寬恕"
  },
  "form": {
    "pos": "n.",
    "en_def": "a paper with spaces where you write information",
    "cn_def": "形式，表格"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and following rules; not relaxed",
    "cn_def": "正式的"
  },
  "former": {
    "pos": "adj.",
    "en_def": "having been something in the past, but not now",
    "cn_def": "以前的，前者的"
  },
  "forward": {
    "pos": "adv.",
    "en_def": "toward the front",
    "cn_def": "向前"
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not",
    "cn_def": "幾乎不，勉強地"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost",
    "cn_def": "幾乎，差不多"
  },
  "neither": {
    "pos": "adv.",
    "en_def": "not one and not the other of two",
    "cn_def": "也不，既不"
  },
  "serve": {
    "pos": "v.",
    "en_def": "to give food or drinks to people",
    "cn_def": "服務，提供"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down under water",
    "cn_def": "下沉，沉沒"
  }
};

const EXTRA_GLOSSES = {};
