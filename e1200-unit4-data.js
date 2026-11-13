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
    "en_def": "a common sickness that makes you cough and sneeze",
    "sentence": "Q: What's wrong with you? — A: I have a {{BLANK}}. I played in the rain yesterday.",
    "cn": "你怎麼了？ — 我感冒了，我昨天在雨中玩。"
  },
  {
    "word": "fever",
    "pos": "n.",
    "cn_def": "發燒",
    "en_def": "a body temperature that is too high because you are sick",
    "sentence": "Q: What's wrong with Tom? — A: He has a {{BLANK}}. His head is very hot.",
    "cn": "湯姆怎麼了？ — 他發燒了，他的頭很燙。"
  },
  {
    "word": "headache",
    "pos": "n.",
    "cn_def": "頭痛",
    "en_def": "a pain in your head",
    "sentence": "Q: What's wrong with your mom? — A: She has a {{BLANK}}. The kids are too noisy.",
    "cn": "你媽媽怎麼了？ — 她頭痛，小孩們太吵了。"
  },
  {
    "word": "sore",
    "pos": "adj.",
    "cn_def": "疼痛的",
    "en_def": "hurting or painful",
    "sentence": "Q: What's wrong, Lisa? — A: I have a {{BLANK}} throat. I can't sing today.",
    "cn": "麗莎，怎麼了？ — 我喉嚨痛，我今天不能唱歌。"
  },
  {
    "word": "have (has) a runny nose",
    "pos": "v.phr.",
    "cn_def": "流鼻涕",
    "en_def": "to have water coming out of your nose because you are sick",
    "sentence": "Q: What's wrong with Amy? — A: She {{BLANK}}. She has a cold, too.",
    "cn": "艾美怎麼了？ — 她流鼻涕，她也感冒了。",
    "nblanks": 4
  },
  {
    "word": "sick",
    "pos": "adj.",
    "cn_def": "生病的",
    "en_def": "not feeling well; ill",
    "sentence": "Q: How does Ben feel today? — A: He feels {{BLANK}}. He can't go to school.",
    "cn": "班今天覺得怎麼樣？ — 他覺得不舒服（生病了），他不能去上學。"
  },
  {
    "word": "well",
    "pos": "adj.",
    "cn_def": "（身體）安好的",
    "en_def": "healthy; not sick",
    "sentence": "Q: Does your grandma feel OK today? — A: No, she doesn't. She doesn't feel {{BLANK}}. She has a fever.",
    "cn": "你奶奶今天覺得還好嗎？ — 不，她不好。她覺得不舒服，她發燒了。"
  },
  {
    "word": "tired",
    "pos": "adj.",
    "cn_def": "疲倦的",
    "en_def": "needing to rest or sleep",
    "sentence": "Q: How do you feel this morning? — A: I feel {{BLANK}}. I studied until midnight.",
    "cn": "你今天早上覺得怎麼樣？ — 我覺得很累，我讀書讀到半夜。"
  },
  {
    "word": "weak",
    "pos": "adj.",
    "cn_def": "虛弱的",
    "en_def": "not strong",
    "sentence": "Q: How does Grandpa feel? — A: He feels {{BLANK}}. He can't walk far.",
    "cn": "爺爺覺得怎麼樣？ — 他覺得很虛弱，他不能走遠。"
  },
  {
    "word": "strong",
    "pos": "adj.",
    "cn_def": "強壯的",
    "en_def": "having a lot of power in your body",
    "sentence": "Q: Do you feel good after swimming? — A: Yes, I do. I swim every day, so I feel {{BLANK}}.",
    "cn": "你游泳後覺得很好嗎？ — 是的，我覺得很好。我每天游泳，所以我覺得很強壯。"
  },
  {
    "word": "healthy",
    "pos": "adj.",
    "cn_def": "健康的",
    "en_def": "well and strong; not sick",
    "sentence": "Q: Does your dad feel good? — A: Yes, he does. He runs every morning, so he feels {{BLANK}}.",
    "cn": "你爸爸覺得身體好嗎？ — 是的，他很好。他每天早上跑步，所以他覺得很健康。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "feeling nice and relaxed; nice to sit on, wear, or be in",
    "sentence": "Q: How do your new shoes feel? — A: They feel {{BLANK}}. I can walk all day.",
    "cn": "你的新鞋穿起來怎麼樣？ — 它們很舒適，我可以走一整天。"
  },
  {
    "word": "medicine",
    "pos": "n.",
    "cn_def": "藥",
    "en_def": "something you take to get better when you are sick",
    "sentence": "Q: Ben has a fever. What does he have to do? — A: He has to take some {{BLANK}} and stay in bed.",
    "cn": "班發燒了，他必須做什麼？ — 他必須吃一些藥並躺在床上休息。"
  },
  {
    "word": "health",
    "pos": "n.",
    "cn_def": "健康",
    "en_def": "how well your body is",
    "sentence": "Q: Does your dad smoke? — A: Yes, he does. He should stop. It's bad for his {{BLANK}}.",
    "cn": "你爸爸抽菸嗎？ — 是的，他抽菸。他應該戒掉，抽菸對他的健康不好。"
  },
  {
    "word": "life",
    "pos": "n.",
    "cn_def": "生活；生命",
    "en_def": "the time when someone is alive; the way you live",
    "sentence": "Q: Do I have to be rich to be happy? — A: No, you don't have to. You should enjoy your {{BLANK}} every day.",
    "cn": "我必須很有錢才會快樂嗎？ — 不，你不必。你應該每天享受你的生活。"
  },
  {
    "word": "death",
    "pos": "n.",
    "cn_def": "死亡",
    "en_def": "the end of life",
    "sentence": "Q: Does Tim have to come to school today? — A: No, he doesn't have to. He is sad about the {{BLANK}} of his dog.",
    "cn": "提姆今天必須來上學嗎？ — 不，他不必。他為他的狗死掉而難過。"
  }
];

const MCQS = [
  {
    "q": "Put on your jacket, or you will catch a ______. It is windy and wet outside today, and you are not wearing enough.",
    "options": [
      "medicine",
      "life",
      "cold",
      "health"
    ],
    "answer": 2,
    "cn": "你怎麼了？ — 我感冒了，我昨天在雨中玩。",
    "vocabIndex": 0
  },
  {
    "q": "The baby has a ______. Her face is red, and her head feels very hot, so we are taking her to the doctor.",
    "options": [
      "fever",
      "medicine",
      "death",
      "life"
    ],
    "answer": 0,
    "cn": "湯姆怎麼了？ — 他發燒了，他的頭很燙。",
    "vocabIndex": 1
  },
  {
    "q": "I studied for five hours without a break, and now I have a ______. My head hurts so much that I can't read.",
    "options": [
      "medicine",
      "life",
      "health",
      "headache"
    ],
    "answer": 3,
    "cn": "你媽媽怎麼了？ — 她頭痛，小孩們太吵了。",
    "vocabIndex": 2
  },
  {
    "q": "I shouted too much at the baseball game yesterday. Now my throat is ______, and it hurts when I talk.",
    "options": [
      "strong",
      "sore",
      "healthy",
      "comfortable"
    ],
    "answer": 1,
    "cn": "麗莎，怎麼了？ — 我喉嚨痛，我今天不能唱歌。",
    "vocabIndex": 3
  },
  {
    "q": "Amy ______, so she needs a lot of tissues. She caught a cold in the rain yesterday.",
    "options": [
      "has a runny nose",
      "is very strong",
      "feels very well",
      "is healthy"
    ],
    "answer": 0,
    "cn": "艾美怎麼了？ — 她流鼻涕，她也感冒了。",
    "vocabIndex": 4
  },
  {
    "q": "Ken is ______ today, so he can't come to school. He is staying in bed, and his mom is taking care of him.",
    "options": [
      "strong",
      "healthy",
      "sick",
      "well"
    ],
    "answer": 2,
    "cn": "班今天覺得怎麼樣？ — 他覺得不舒服（生病了），他不能去上學。",
    "vocabIndex": 5
  },
  {
    "q": "I was sick last week, but I feel ______ now. I can go back to school and play basketball again.",
    "options": [
      "weak",
      "well",
      "sore",
      "tired"
    ],
    "answer": 1,
    "cn": "你奶奶今天覺得還好嗎？ — 不，她不好。她覺得不舒服，她發燒了。",
    "vocabIndex": 6
  },
  {
    "q": "We walked in the mountains for six hours, so we are very ______. We just want to sit down and sleep.",
    "options": [
      "healthy",
      "strong",
      "comfortable",
      "tired"
    ],
    "answer": 3,
    "cn": "你今天早上覺得怎麼樣？ — 我覺得很累，我讀書讀到半夜。",
    "vocabIndex": 7
  },
  {
    "q": "After being sick for two weeks, Grandma is still ______. She can't walk far or carry anything heavy.",
    "options": [
      "weak",
      "strong",
      "healthy",
      "comfortable"
    ],
    "answer": 0,
    "cn": "爺爺覺得怎麼樣？ — 他覺得很虛弱，他不能走遠。",
    "vocabIndex": 8
  },
  {
    "q": "My brother is very ______. He can carry two heavy boxes of books up the stairs at the same time.",
    "options": [
      "weak",
      "strong",
      "sick",
      "sore"
    ],
    "answer": 1,
    "cn": "你游泳後覺得很好嗎？ — 是的，我覺得很好。我每天游泳，所以我覺得很強壯。",
    "vocabIndex": 9
  },
  {
    "q": "Eat more fruit and vegetables, and exercise every day. Then you will stay ______, and you will not need to see a doctor.",
    "options": [
      "sick",
      "weak",
      "healthy",
      "sore"
    ],
    "answer": 2,
    "cn": "你爸爸覺得身體好嗎？ — 是的，他很好。他每天早上跑步，所以他覺得很健康。",
    "vocabIndex": 10
  },
  {
    "q": "This sofa is big and soft, so it is very ______. I can sit here and read all afternoon.",
    "options": [
      "sick",
      "weak",
      "sore",
      "comfortable"
    ],
    "answer": 3,
    "cn": "你的新鞋穿起來怎麼樣？ — 它們很舒適，我可以走一整天。",
    "vocabIndex": 11
  },
  {
    "q": "The doctor gave me some ______ for my cold. I have to take it three times a day after meals.",
    "options": [
      "medicine",
      "health",
      "life",
      "fever"
    ],
    "answer": 0,
    "cn": "班發燒了，他必須做什麼？ — 他必須吃一些藥並躺在床上休息。",
    "vocabIndex": 12
  },
  {
    "q": "Smoking is bad for your ______. It hurts your body, so you should stop it right now.",
    "options": [
      "medicine",
      "death",
      "headache",
      "health"
    ],
    "answer": 3,
    "cn": "你爸爸抽菸嗎？ — 是的，他抽菸。他應該戒掉，抽菸對他的健康不好。",
    "vocabIndex": 13
  },
  {
    "q": "My grandma lived on a farm all her ______. She was born there, and she never moved to the city.",
    "options": [
      "health",
      "life",
      "medicine",
      "fever"
    ],
    "answer": 1,
    "cn": "我必須很有錢才會快樂嗎？ — 不，你不必。你應該每天享受你的生活。",
    "vocabIndex": 14
  },
  {
    "q": "After the ______ of his old dog, Tom was sad for many weeks. He still keeps its picture on his desk.",
    "options": [
      "health",
      "medicine",
      "death",
      "cold"
    ],
    "answer": 2,
    "cn": "提姆今天必須來上學嗎？ — 不，他不必。他為他的狗死掉而難過。",
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "medicine": {
    "pos": "n.",
    "en_def": "something you take to get better when you are sick",
    "cn_def": "藥"
  },
  "life": {
    "pos": "n.",
    "en_def": "the time when someone is alive; the way you live",
    "cn_def": "生活；生命"
  },
  "cold": {
    "pos": "n.",
    "en_def": "a common sickness that makes you cough and sneeze",
    "cn_def": "感冒"
  },
  "health": {
    "pos": "n.",
    "en_def": "how well your body is",
    "cn_def": "健康"
  },
  "fever": {
    "pos": "n.",
    "en_def": "a body temperature that is too high because you are sick",
    "cn_def": "發燒"
  },
  "death": {
    "pos": "n.",
    "en_def": "the end of life",
    "cn_def": "死亡"
  },
  "headache": {
    "pos": "n.",
    "en_def": "a pain in your head",
    "cn_def": "頭痛"
  },
  "strong": {
    "pos": "adj.",
    "en_def": "having a lot of power in your body",
    "cn_def": "強壯的"
  },
  "sore": {
    "pos": "adj.",
    "en_def": "hurting or painful",
    "cn_def": "疼痛的"
  },
  "healthy": {
    "pos": "adj.",
    "en_def": "well and strong; not sick",
    "cn_def": "健康的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "feeling nice and relaxed; nice to sit on, wear, or be in",
    "cn_def": "舒適的"
  },
  "has a runny nose": {
    "pos": "v.phr.",
    "en_def": "",
    "cn_def": "流鼻涕"
  },
  "is very strong": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "很強壯"
  },
  "feels very well": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "覺得很健康"
  },
  "is healthy": {
    "pos": "phr.",
    "en_def": "",
    "cn_def": "很健康"
  },
  "sick": {
    "pos": "adj.",
    "en_def": "not feeling well; ill",
    "cn_def": "生病的"
  },
  "well": {
    "pos": "adj.",
    "en_def": "healthy; not sick",
    "cn_def": "（身體）安好的"
  },
  "weak": {
    "pos": "adj.",
    "en_def": "not strong",
    "cn_def": "虛弱的"
  },
  "tired": {
    "pos": "adj.",
    "en_def": "needing to rest or sleep",
    "cn_def": "疲倦的"
  }
};

const EXTRA_GLOSSES = {};
