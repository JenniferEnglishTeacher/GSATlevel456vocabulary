// Unit 1 Quiz Data: absent – asleep
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U01 - absent – asleep",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "absent",
    "pos": "adj.",
    "cn_def": "缺席的，不在場的",
    "en_def": "",
    "sentence": "He was {{BLANK}} from the meeting yesterday.",
    "cn": "他昨天缺席了會議。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受，同意",
    "en_def": "",
    "sentence": "She decided to {{BLANK}} the job offer.",
    "cn": "她決定接受這份工作。"
  },
  {
    "word": "act",
    "pos": "v.",
    "cn_def": "行動，扮演",
    "en_def": "",
    "sentence": "He always tries to {{BLANK}} cool.",
    "cn": "他總是試圖裝酷。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "行動，動作",
    "en_def": "",
    "sentence": "The movie is full of exciting {{BLANK}}.",
    "cn": "這部電影充滿了令人興奮的動作場面。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "活躍的，積極的",
    "en_def": "",
    "sentence": "She is very {{BLANK}} in the community.",
    "cn": "她在社區裡非常活躍。"
  },
  {
    "word": "activity",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "",
    "sentence": "They planned a lot of fun {{BLANK}} for the camp.",
    "cn": "他們為營隊計劃了很多有趣的活動。"
  },
  {
    "word": "add",
    "pos": "v.",
    "cn_def": "添加，加上",
    "en_def": "",
    "sentence": "Don't forget to {{BLANK}} sugar to the recipe.",
    "cn": "別忘了在食譜裡加糖。"
  },
  {
    "word": "address",
    "pos": "n.",
    "cn_def": "地址，演說",
    "en_def": "",
    "sentence": "Please send the letter to my new {{BLANK}}.",
    "cn": "請把信寄到我的新地址。"
  },
  {
    "word": "adult",
    "pos": "n.",
    "cn_def": "成人",
    "en_def": "",
    "sentence": "Only {{BLANK}} are allowed to watch this movie.",
    "cn": "只有成人才允許觀看這部電影。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "",
    "sentence": "I saw an interesting {{BLANK}} on TV.",
    "cn": "我在電視上看到一則有趣的廣告。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "建議",
    "en_def": "",
    "sentence": "She gave me some good {{BLANK}}.",
    "cn": "她給了我一些好的建議。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "建議",
    "en_def": "",
    "sentence": "The doctor {{BLANK}} him to rest.",
    "cn": "醫生建議他休息。"
  },
  {
    "word": "affect",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "",
    "sentence": "The weather can {{BLANK}} your mood.",
    "cn": "天氣會影響你的心情。"
  },
  {
    "word": "against",
    "pos": "prep.",
    "cn_def": "反對，對抗",
    "en_def": "",
    "sentence": "He is {{BLANK}} the new policy.",
    "cn": "他反對這項新政策。"
  },
  {
    "word": "aim",
    "pos": "v.",
    "cn_def": "瞄準，目標",
    "en_def": "",
    "sentence": "She {{BLANK}} to become a doctor.",
    "cn": "她的目標是成為一名醫生。"
  },
  {
    "word": "air conditioner",
    "pos": "n.",
    "cn_def": "冷氣機",
    "en_def": "",
    "sentence": "The {{BLANK}} is not working properly.",
    "cn": "冷氣機運作不正常。",
    "nblanks": 2
  },
  {
    "word": "airlines",
    "pos": "n.",
    "cn_def": "航空公司",
    "en_def": "",
    "sentence": "She works for a major {{BLANK}}.",
    "cn": "她在一家大型航空公司工作。"
  },
  {
    "word": "alarm",
    "pos": "n.",
    "cn_def": "警報，鬧鐘",
    "en_def": "",
    "sentence": "The {{BLANK}} woke me up at 6 AM.",
    "cn": "鬧鐘在早上六點把我叫醒。"
  },
  {
    "word": "album",
    "pos": "n.",
    "cn_def": "相簿，專輯",
    "en_def": "",
    "sentence": "He showed me his photo {{BLANK}}.",
    "cn": "他給我看了他的相簿。"
  },
  {
    "word": "alike",
    "pos": "adj./adv.",
    "cn_def": "相似的，一樣地",
    "en_def": "",
    "sentence": "The twins look {{BLANK}}.",
    "cn": "這對雙胞胎看起來很像。"
  },
  {
    "word": "asleep",
    "pos": "adj.",
    "cn_def": "睡著的",
    "en_def": "",
    "sentence": "The baby is finally {{BLANK}} in his crib.",
    "cn": "嬰兒終於在他的搖籃裡睡著了。"
  }
];

const MCQS = [
  {
    "q": "He was ______ from the meeting yesterday.【缺席的，不在場的】",
    "options": [
      "active",
      "asleep",
      "absent",
      "naughty"
    ],
    "answer": 2,
    "cn": "他昨天缺席了會議。",
    "vocabIndex": 0
  },
  {
    "q": "She decided to ______ the job offer.【接受，同意】",
    "options": [
      "add",
      "accept",
      "affect",
      "act"
    ],
    "answer": 1,
    "cn": "她決定接受這份工作。",
    "vocabIndex": 1
  },
  {
    "q": "He always tries to ______ cool.【行動，扮演】",
    "options": [
      "add",
      "affect",
      "accept",
      "act"
    ],
    "answer": 3,
    "cn": "他總是試圖裝酷。",
    "vocabIndex": 2
  },
  {
    "q": "The movie is full of exciting ______.【行動，動作】",
    "options": [
      "action",
      "advice",
      "air conditioner",
      "advertisement"
    ],
    "answer": 0,
    "cn": "這部電影充滿了令人興奮的動作場面。",
    "vocabIndex": 3
  },
  {
    "q": "She is very ______ in the community.【活躍的，積極的】",
    "options": [
      "asleep",
      "absent",
      "active",
      "impossible"
    ],
    "answer": 2,
    "cn": "她在社區裡非常活躍。",
    "vocabIndex": 4
  },
  {
    "q": "They planned a lot of fun ______ for the camp.【活動】",
    "options": [
      "adults",
      "address",
      "album",
      "activities"
    ],
    "answer": 3,
    "cn": "他們為營隊計劃了很多有趣的活動。",
    "vocabIndex": 5
  },
  {
    "q": "Don't forget to ______ sugar to the recipe.【添加，加上】",
    "options": [
      "accept",
      "add",
      "act",
      "affect"
    ],
    "answer": 1,
    "cn": "別忘了在食譜裡加糖。",
    "vocabIndex": 6
  },
  {
    "q": "Please send the letter to my new ______.【地址，演說】",
    "options": [
      "address",
      "adults",
      "activities",
      "album"
    ],
    "answer": 0,
    "cn": "請把信寄到我的新地址。",
    "vocabIndex": 7
  },
  {
    "q": "Only ______ are allowed to watch this movie.【成人】",
    "options": [
      "address",
      "adults",
      "activities",
      "advice"
    ],
    "answer": 1,
    "cn": "只有成人才允許觀看這部電影。",
    "vocabIndex": 8
  },
  {
    "q": "I saw an interesting ______ on TV.【廣告】",
    "options": [
      "advertisement",
      "air conditioner",
      "advice",
      "alarm"
    ],
    "answer": 0,
    "cn": "我在電視上看到一則有趣的廣告。",
    "vocabIndex": 9
  },
  {
    "q": "She gave me some good ______.【建議】",
    "options": [
      "airline",
      "air conditioner",
      "advice",
      "advertisement"
    ],
    "answer": 2,
    "cn": "她給了我一些好的建議。",
    "vocabIndex": 10
  },
  {
    "q": "The doctor ______ him to rest.【建議】",
    "options": [
      "add",
      "aims",
      "act",
      "advised"
    ],
    "answer": 3,
    "cn": "醫生建議他休息。",
    "vocabIndex": 11
  },
  {
    "q": "The weather can ______ your mood.【影響】",
    "options": [
      "add",
      "accept",
      "affect",
      "act"
    ],
    "answer": 2,
    "cn": "天氣會影響你的心情。",
    "vocabIndex": 12
  },
  {
    "q": "He is ______ the new policy.【反對，對抗】",
    "options": [
      "against",
      "beyond",
      "minus",
      "plus"
    ],
    "answer": 0,
    "cn": "他反對這項新政策。",
    "vocabIndex": 13
  },
  {
    "q": "She ______ to become a doctor.【瞄準，目標】",
    "options": [
      "add",
      "affect",
      "accept",
      "aims"
    ],
    "answer": 3,
    "cn": "她的目標是成為一名醫生。",
    "vocabIndex": 14
  },
  {
    "q": "The ______ is not working properly.【冷氣機】",
    "options": [
      "advice",
      "air conditioner",
      "alarm",
      "advertisement"
    ],
    "answer": 1,
    "cn": "冷氣機運作不正常。",
    "vocabIndex": 15
  },
  {
    "q": "She works for a major ______.【航空公司】",
    "options": [
      "album",
      "action",
      "airline",
      "advertisement"
    ],
    "answer": 2,
    "cn": "她在一家大型航空公司工作。",
    "vocabIndex": 16
  },
  {
    "q": "The ______ woke me up at 6 AM.【警報，鬧鐘】",
    "options": [
      "airline",
      "alarm",
      "action",
      "album"
    ],
    "answer": 1,
    "cn": "鬧鐘在早上六點把我叫醒。",
    "vocabIndex": 17
  },
  {
    "q": "He showed me his photo ______.【相簿，專輯】",
    "options": [
      "album",
      "airline",
      "action",
      "advice"
    ],
    "answer": 0,
    "cn": "他給我看了他的相簿。",
    "vocabIndex": 18
  },
  {
    "q": "The twins look ______.【相似的，一樣地】",
    "options": [
      "horrible",
      "gentle",
      "ugly",
      "alike"
    ],
    "answer": 3,
    "cn": "這對雙胞胎看起來很像。",
    "vocabIndex": 19
  },
  {
    "q": "The baby is finally ______ in his crib.【睡著的】",
    "options": [
      "active",
      "asleep",
      "absent",
      "considerate"
    ],
    "answer": 1,
    "cn": "嬰兒終於在他的搖籃裡睡著了。",
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "absent": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "缺席的，不在場的"
  },
  "accept": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "接受，同意"
  },
  "act": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "行動，扮演"
  },
  "action": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "行動，動作"
  },
  "active": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "活躍的，積極的"
  },
  "activities": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "活動"
  },
  "add": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "添加，加上"
  },
  "address": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地址，演說"
  },
  "adults": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "成人"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "廣告"
  },
  "advice": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "建議"
  },
  "advised": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "建議"
  },
  "affect": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "影響"
  },
  "against": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "反對，對抗"
  },
  "aims": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "瞄準，目標"
  },
  "air conditioner": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "冷氣機"
  },
  "airline": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "航空公司"
  },
  "alarm": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "警報，鬧鐘"
  },
  "album": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "相簿，專輯"
  },
  "alike": {
    "pos": "adj./adv.",
    "en_def": "",
    "cn_def": "相似的，一樣地"
  },
  "asleep": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "睡著的"
  },
  "beyond": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "超過，在...之外"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "體貼的"
  },
  "gentle": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "溫和的，文雅的"
  },
  "horrible": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "可怕的，糟糕的"
  },
  "impossible": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "不可能的"
  },
  "minus": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "減，負的"
  },
  "naughty": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "淘氣的，不聽話的"
  },
  "plus": {
    "pos": "prep.",
    "en_def": "",
    "cn_def": "加上，此外"
  },
  "ugly": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "醜陋的，難看的"
  }
};

const EXTRA_GLOSSES = {};
