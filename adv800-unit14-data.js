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
    "q": "This is the ______ game of the year. The winner will be the champion.",
    "options": [
      "former",
      "foggy",
      "final",
      "foolish"
    ],
    "answer": 2,
    "cn": "最終決定將在明天作出。",
    "vocabIndex": 0
  },
  {
    "q": "These shoes don't ______ me. They are too small for my feet.",
    "options": [
      "focus",
      "forgive",
      "frighten",
      "fit"
    ],
    "answer": 3,
    "cn": "這雙鞋非常合適。",
    "vocabIndex": 1
  },
  {
    "q": "The ______ of the U.S.A. has stars and stripes on it. It is red, white, and blue.",
    "options": [
      "flag",
      "flute",
      "fog",
      "form"
    ],
    "answer": 0,
    "cn": "他們升起了國旗。",
    "vocabIndex": 2
  },
  {
    "q": "It is dark in the cave. Turn on your ______ so we can see.",
    "options": [
      "flight",
      "flashlight",
      "flour",
      "flute"
    ],
    "answer": 1,
    "cn": "她用手電筒在黑暗中找路。",
    "vocabIndex": 3
  },
  {
    "q": "My bike has a ______. There is no air in the front wheel, so I can't ride it.",
    "options": [
      "flag",
      "flute",
      "flat tire",
      "form"
    ],
    "answer": 2,
    "cn": "他上班途中遇到了爆胎。",
    "vocabIndex": 4
  },
  {
    "q": "Our ______ to Tokyo leaves at ten. We have to be at the airport by eight.",
    "options": [
      "flour",
      "flight",
      "flu",
      "fog"
    ],
    "answer": 1,
    "cn": "他們的航班因天氣惡劣而延誤。",
    "vocabIndex": 5
  },
  {
    "q": "We need ______, eggs, and sugar to make a cake.",
    "options": [
      "flu",
      "fog",
      "flag",
      "flour"
    ],
    "answer": 3,
    "cn": "她用麵粉烤蛋糕。",
    "vocabIndex": 6
  },
  {
    "q": "Ben has the ______. He has a fever and a bad cough, so he is staying in bed.",
    "options": [
      "flu",
      "flag",
      "flute",
      "form"
    ],
    "answer": 0,
    "cn": "他上週得了流感。",
    "vocabIndex": 7
  },
  {
    "q": "Lisa plays the ______ in the school band. She blows into it to make music.",
    "options": [
      "flag",
      "flute",
      "flour",
      "form"
    ],
    "answer": 1,
    "cn": "她在校樂隊裡吹長笛。",
    "vocabIndex": 8
  },
  {
    "q": "Turn off the TV and ______ on your homework. You can't do two things at once.",
    "options": [
      "focus",
      "forgive",
      "fit",
      "frighten"
    ],
    "answer": 0,
    "cn": "你需要專注於學習。",
    "vocabIndex": 9
  },
  {
    "q": "The ______ was so thick this morning that the drivers couldn't see the road.",
    "options": [
      "flag",
      "flu",
      "fog",
      "form"
    ],
    "answer": 2,
    "cn": "霧太濃了，我們看不見路。",
    "vocabIndex": 10
  },
  {
    "q": "It was a ______ morning. We couldn't see the mountains at all.",
    "options": [
      "final",
      "former",
      "formal",
      "foggy"
    ],
    "answer": 3,
    "cn": "那是一個寒冷而有霧的早晨。",
    "vocabIndex": 11
  },
  {
    "q": "It was ______ of you to swim alone in the sea. You could have died.",
    "options": [
      "final",
      "formal",
      "foolish",
      "former"
    ],
    "answer": 2,
    "cn": "犯這樣的錯誤真是愚蠢。",
    "vocabIndex": 12
  },
  {
    "q": "American ______ is a popular sport in the U.S.A. Players run with the ball in their hands.",
    "options": [
      "flute",
      "football",
      "forest",
      "flour"
    ],
    "answer": 1,
    "cn": "他喜歡和朋友一起踢足球。",
    "vocabIndex": 13
  },
  {
    "q": "Many wild animals live in the ______. It is full of tall trees.",
    "options": [
      "forest",
      "flag",
      "form",
      "flight"
    ],
    "answer": 0,
    "cn": "他們在森林裡遠足。",
    "vocabIndex": 14
  },
  {
    "q": "I am sorry I broke your cup. Please ______ me.",
    "options": [
      "focus",
      "fit",
      "frighten",
      "forgive"
    ],
    "answer": 3,
    "cn": "她決定原諒他的錯誤。",
    "vocabIndex": 15
  },
  {
    "q": "Please fill out this ______. Write your name, address, and phone number on it.",
    "options": [
      "flag",
      "fog",
      "form",
      "flu"
    ],
    "answer": 2,
    "cn": "請填寫這張表格。",
    "vocabIndex": 16
  },
  {
    "q": "You should wear ______ clothes, like a suit and a tie, to the job interview.",
    "options": [
      "foggy",
      "formal",
      "final",
      "foolish"
    ],
    "answer": 1,
    "cn": "這個活動非常正式。",
    "vocabIndex": 17
  },
  {
    "q": "Mr. Lin is a ______ teacher at our school. He left two years ago.",
    "options": [
      "former",
      "foggy",
      "final",
      "formal"
    ],
    "answer": 0,
    "cn": "他是該俱樂部的前任主席。",
    "vocabIndex": 18
  },
  {
    "q": "Please take one step ______. I can't see you from here.",
    "options": [
      "everywhere",
      "especially",
      "downtown",
      "forward"
    ],
    "answer": 3,
    "cn": "她向前走了一步。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "former": {
    "pos": "adj.",
    "en_def": "having been something in the past, but not now",
    "cn_def": "以前的，前者的"
  },
  "foggy": {
    "pos": "adj.",
    "en_def": "with a lot of fog",
    "cn_def": "有霧的，模糊的"
  },
  "final": {
    "pos": "adj.",
    "en_def": "last",
    "cn_def": "最後的，決定性的"
  },
  "foolish": {
    "pos": "adj.",
    "en_def": "not wise; silly",
    "cn_def": "愚蠢的"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "集中，專注"
  },
  "forgive": {
    "pos": "v.",
    "en_def": "to stop being angry with someone for something they did",
    "cn_def": "原諒，寬恕"
  },
  "frighten": {
    "pos": "v.",
    "en_def": "to make someone afraid",
    "cn_def": "使害怕"
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
  "flute": {
    "pos": "n.",
    "en_def": "a long, thin musical instrument that you blow into",
    "cn_def": "長笛"
  },
  "fog": {
    "pos": "n.",
    "en_def": "thick cloud near the ground that is hard to see through",
    "cn_def": "霧"
  },
  "form": {
    "pos": "n.",
    "en_def": "a paper with spaces where you write information",
    "cn_def": "形式，表格"
  },
  "flight": {
    "pos": "n.",
    "en_def": "a trip in a plane",
    "cn_def": "飛行，航班"
  },
  "flashlight": {
    "pos": "n.",
    "en_def": "a small light that you carry in your hand",
    "cn_def": "手電筒"
  },
  "flour": {
    "pos": "n.",
    "en_def": "white powder made from wheat, used to make bread and cakes",
    "cn_def": "麵粉"
  },
  "flat tire": {
    "pos": "n.",
    "en_def": "a wheel on a car or bike that has lost its air",
    "cn_def": "爆胎"
  },
  "flu": {
    "pos": "n.",
    "en_def": "a sickness like a very bad cold, with a fever",
    "cn_def": "流感"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and following rules; not relaxed",
    "cn_def": "正式的"
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
  "everywhere": {
    "pos": "adv.",
    "en_def": "in all places",
    "cn_def": "到處"
  },
  "especially": {
    "pos": "adv.",
    "en_def": "more than others; more than usual",
    "cn_def": "特別地，尤其"
  },
  "downtown": {
    "pos": "adv.",
    "en_def": "in the center of a city",
    "cn_def": "市中心"
  },
  "forward": {
    "pos": "adv.",
    "en_def": "toward the front",
    "cn_def": "向前"
  }
};

const EXTRA_GLOSSES = {};
