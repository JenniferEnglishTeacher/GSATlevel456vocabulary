// Unit 4 Quiz Data: Health 健康（第04區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U04 - Health",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cold",
    "pos": "n.",
    "cn_def": "感冒",
    "en_def": "",
    "sentence": "Q: What's wrong with you? — A: I have a {{BLANK}}. I played in the rain yesterday.",
    "cn": "你怎麼了？ — 我感冒了，我昨天在雨中玩。"
  },
  {
    "word": "fever",
    "pos": "n.",
    "cn_def": "發燒",
    "en_def": "",
    "sentence": "Q: What's wrong with Tom? — A: He has a {{BLANK}}. His head is very hot.",
    "cn": "湯姆怎麼了？ — 他發燒了，他的頭很燙。"
  },
  {
    "word": "headache",
    "pos": "n.",
    "cn_def": "頭痛",
    "en_def": "",
    "sentence": "Q: What's wrong with your mom? — A: She has a {{BLANK}}. The kids are too noisy.",
    "cn": "你媽媽怎麼了？ — 她頭痛，小孩們太吵了。"
  },
  {
    "word": "sore",
    "pos": "adj.",
    "cn_def": "疼痛的",
    "en_def": "",
    "sentence": "Q: What's wrong, Lisa? — A: I have a {{BLANK}} throat. I can't sing today.",
    "cn": "麗莎，怎麼了？ — 我喉嚨痛，我今天不能唱歌。"
  },
  {
    "word": "have (has) a runny nose",
    "pos": "v.phr.",
    "cn_def": "流鼻涕",
    "en_def": "",
    "sentence": "Q: What's wrong with Amy? — A: She {{BLANK}}. She has a cold, too.",
    "cn": "艾美怎麼了？ — 她流鼻涕，她也感冒了。",
    "nblanks": 4
  },
  {
    "word": "sick",
    "pos": "adj.",
    "cn_def": "生病的",
    "en_def": "",
    "sentence": "Q: How does Ben feel today? — A: He feels {{BLANK}}. He can't go to school.",
    "cn": "班今天覺得怎麼樣？ — 他覺得不舒服（生病了），他不能去上學。"
  },
  {
    "word": "well",
    "pos": "adj.",
    "cn_def": "（身體）安好的",
    "en_def": "",
    "sentence": "Q: Does your grandma feel OK today? — A: No, she doesn't. She doesn't feel {{BLANK}}. She has a fever.",
    "cn": "你奶奶今天覺得還好嗎？ — 不，她不好。她覺得不舒服，她發燒了。"
  },
  {
    "word": "tired",
    "pos": "adj.",
    "cn_def": "疲倦的",
    "en_def": "",
    "sentence": "Q: How do you feel this morning? — A: I feel {{BLANK}}. I studied until midnight.",
    "cn": "你今天早上覺得怎麼樣？ — 我覺得很累，我讀書讀到半夜。"
  },
  {
    "word": "weak",
    "pos": "adj.",
    "cn_def": "虛弱的",
    "en_def": "",
    "sentence": "Q: How does Grandpa feel? — A: He feels {{BLANK}}. He can't walk far.",
    "cn": "爺爺覺得怎麼樣？ — 他覺得很虛弱，他不能走遠。"
  },
  {
    "word": "strong",
    "pos": "adj.",
    "cn_def": "強壯的",
    "en_def": "",
    "sentence": "Q: Do you feel good after swimming? — A: Yes, I do. I swim every day, so I feel {{BLANK}}.",
    "cn": "你游泳後覺得很好嗎？ — 是的，我覺得很好。我每天游泳，所以我覺得很強壯。"
  },
  {
    "word": "healthy",
    "pos": "adj.",
    "cn_def": "健康的",
    "en_def": "",
    "sentence": "Q: Does your dad feel good? — A: Yes, he does. He runs every morning, so he feels {{BLANK}}.",
    "cn": "你爸爸覺得身體好嗎？ — 是的，他很好。他每天早上跑步，所以他覺得很健康。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "",
    "sentence": "Q: How do your new shoes feel? — A: They feel {{BLANK}}. I can walk all day.",
    "cn": "你的新鞋穿起來怎麼樣？ — 它們很舒適，我可以走一整天。"
  },
  {
    "word": "medicine",
    "pos": "n.",
    "cn_def": "藥",
    "en_def": "",
    "sentence": "Q: Ben has a fever. What does he have to do? — A: He has to take some {{BLANK}} and stay in bed.",
    "cn": "班發燒了，他必須做什麼？ — 他必須吃一些藥並躺在床上休息。"
  },
  {
    "word": "health",
    "pos": "n.",
    "cn_def": "健康",
    "en_def": "",
    "sentence": "Q: Does your dad smoke? — A: Yes, he does. He should stop. It's bad for his {{BLANK}}.",
    "cn": "你爸爸抽菸嗎？ — 是的，他抽菸。他應該戒掉，抽菸對他的健康不好。"
  },
  {
    "word": "life",
    "pos": "n.",
    "cn_def": "生活；生命",
    "en_def": "",
    "sentence": "Q: Do I have to be rich to be happy? — A: No, you don't have to. You should enjoy your {{BLANK}} every day.",
    "cn": "我必須很有錢才會快樂嗎？ — 不，你不必。你應該每天享受你的生活。"
  },
  {
    "word": "death",
    "pos": "n.",
    "cn_def": "死亡",
    "en_def": "",
    "sentence": "Q: Does Tim have to come to school today? — A: No, he doesn't have to. He is sad about the {{BLANK}} of his dog.",
    "cn": "提姆今天必須來上學嗎？ — 不，他不必。他為他的狗死掉而難過。"
  }
];

const MCQS = [
  {
    "q": "Q: What's wrong with you? — A: I have a ______. I played in the rain yesterday.【感冒】",
    "options": [
      "cold",
      "health",
      "death",
      "fever"
    ],
    "answer": 0,
    "cn": "你怎麼了？ — 我感冒了，我昨天在雨中玩。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What's wrong with Tom? — A: He has a ______. His head is very hot.【發燒】",
    "options": [
      "death",
      "fever",
      "health",
      "cold"
    ],
    "answer": 1,
    "cn": "湯姆怎麼了？ — 他發燒了，他的頭很燙。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What's wrong with your mom? — A: She has a ______. The kids are too noisy.【頭痛】",
    "options": [
      "health",
      "fever",
      "headache",
      "medicine"
    ],
    "answer": 2,
    "cn": "你媽媽怎麼了？ — 她頭痛，小孩們太吵了。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What's wrong, Lisa? — A: I have a ______ throat. I can't sing today.【疼痛的】",
    "options": [
      "healthy",
      "strong",
      "comfortable",
      "sore"
    ],
    "answer": 3,
    "cn": "麗莎，怎麼了？ — 我喉嚨痛，我今天不能唱歌。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What's wrong with Amy? — A: She ______. She has a cold, too.【流鼻涕】",
    "options": [
      "here",
      "has a runny nose",
      "often",
      "where"
    ],
    "answer": 1,
    "cn": "艾美怎麼了？ — 她流鼻涕，她也感冒了。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How does Ben feel today? — A: He feels ______. He can't go to school.【生病的】",
    "options": [
      "sick",
      "well",
      "weak",
      "strong"
    ],
    "answer": 0,
    "cn": "班今天覺得怎麼樣？ — 他覺得不舒服（生病了），他不能去上學。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Does your grandma feel OK today? — A: No, she doesn't. She doesn't feel ______. She has a fever.【（身體）安好的】",
    "options": [
      "healthy",
      "comfortable",
      "well",
      "weak"
    ],
    "answer": 2,
    "cn": "你奶奶今天覺得還好嗎？ — 不，她不好。她覺得不舒服，她發燒了。",
    "vocabIndex": 6
  },
  {
    "q": "Q: How do you feel this morning? — A: I feel ______. I studied until midnight.【疲倦的】",
    "options": [
      "weak",
      "well",
      "strong",
      "tired"
    ],
    "answer": 3,
    "cn": "你今天早上覺得怎麼樣？ — 我覺得很累，我讀書讀到半夜。",
    "vocabIndex": 7
  },
  {
    "q": "Q: How does Grandpa feel? — A: He feels ______. He can't walk far.【虛弱的】",
    "options": [
      "healthy",
      "weak",
      "sore",
      "sick"
    ],
    "answer": 1,
    "cn": "爺爺覺得怎麼樣？ — 他覺得很虛弱，他不能走遠。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Do you feel good after swimming? — A: Yes, I do. I swim every day, so I feel ______.【強壯的】",
    "options": [
      "weak",
      "comfortable",
      "strong",
      "sore"
    ],
    "answer": 2,
    "cn": "你游泳後覺得很好嗎？ — 是的，我覺得很好。我每天游泳，所以我覺得很強壯。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Does your dad feel good? — A: Yes, he does. He runs every morning, so he feels ______.【健康的】",
    "options": [
      "healthy",
      "well",
      "weak",
      "sore"
    ],
    "answer": 0,
    "cn": "你爸爸覺得身體好嗎？ — 是的，他很好。他每天早上跑步，所以他覺得很健康。",
    "vocabIndex": 10
  },
  {
    "q": "Q: How do your new shoes feel? — A: They feel ______. I can walk all day.【舒適的】",
    "options": [
      "well",
      "sore",
      "strong",
      "comfortable"
    ],
    "answer": 3,
    "cn": "你的新鞋穿起來怎麼樣？ — 它們很舒適，我可以走一整天。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Ben has a fever. What does he have to do? — A: He has to take some ______ and stay in bed.【藥】",
    "options": [
      "life",
      "medicine",
      "cold",
      "health"
    ],
    "answer": 1,
    "cn": "班發燒了，他必須做什麼？ — 他必須吃一些藥並躺在床上休息。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Does your dad smoke? — A: Yes, he does. He should stop. It's bad for his ______.【健康】",
    "options": [
      "health",
      "medicine",
      "cold",
      "fever"
    ],
    "answer": 0,
    "cn": "你爸爸抽菸嗎？ — 是的，他抽菸。他應該戒掉，抽菸對他的健康不好。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Do I have to be rich to be happy? — A: No, you don't have to. You should enjoy your ______ every day.【生活；生命】",
    "options": [
      "headache",
      "fever",
      "life",
      "health"
    ],
    "answer": 2,
    "cn": "我必須很有錢才會快樂嗎？ — 不，你不必。你應該每天享受你的生活。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Does Tim have to come to school today? — A: No, he doesn't have to. He is sad about the ______ of his dog.【死亡】",
    "options": [
      "headache",
      "health",
      "cold",
      "death"
    ],
    "answer": 3,
    "cn": "提姆今天必須來上學嗎？ — 不，他不必。他為他的狗死掉而難過。",
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "cold": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "感冒"
  },
  "fever": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "發燒"
  },
  "headache": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "頭痛"
  },
  "sore": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "疼痛的"
  },
  "has a runny nose": {
    "pos": "v.phr.",
    "en_def": "",
    "cn_def": "流鼻涕"
  },
  "sick": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "生病的"
  },
  "well": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "（身體）安好的"
  },
  "tired": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "疲倦的"
  },
  "weak": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "虛弱的"
  },
  "strong": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "強壯的"
  },
  "healthy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "健康的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "舒適的"
  },
  "medicine": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "藥"
  },
  "health": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "健康"
  },
  "life": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "生活；生命"
  },
  "death": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "死亡"
  },
  "here": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "這裡"
  },
  "where": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "哪裡；何處"
  },
  "often": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "時常"
  }
};

const EXTRA_GLOSSES = {};
