// Unit 2 Quiz Data: assistant – behave
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U02 - assistant – behave",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "assistant",
    "pos": "n.",
    "cn_def": "助手",
    "en_def": "",
    "sentence": "He hired an {{BLANK}} to help with the project.",
    "cn": "他雇了一個助手來幫助這個專案。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意，關注",
    "en_def": "",
    "sentence": "The speaker caught everyone's {{BLANK}} with her opening statement.",
    "cn": "演講者用她的開場白吸引了大家的注意力。"
  },
  {
    "word": "avoid",
    "pos": "v.",
    "cn_def": "避免",
    "en_def": "",
    "sentence": "You should {{BLANK}} driving during rush hours.",
    "cn": "你應該避免在高峰時間開車。"
  },
  {
    "word": "baby sitter",
    "pos": "n.",
    "cn_def": "保姆",
    "en_def": "",
    "sentence": "We need to find a reliable {{BLANK}} for our kids.",
    "cn": "我們需要為孩子們找一個可靠的保姆。",
    "nblanks": 2
  },
  {
    "word": "backpack",
    "pos": "n.",
    "cn_def": "背包",
    "en_def": "",
    "sentence": "He carried all his books in his {{BLANK}}.",
    "cn": "他把所有的書都放在背包裡。"
  },
  {
    "word": "backward",
    "pos": "adv.",
    "cn_def": "向後地",
    "en_def": "",
    "sentence": "She took a step {{BLANK}}.",
    "cn": "她向後退了一步。"
  },
  {
    "word": "ball",
    "pos": "n.",
    "cn_def": "球",
    "en_def": "",
    "sentence": "They played with a {{BLANK}} in the park.",
    "cn": "他們在公園裡玩球。"
  },
  {
    "word": "balloon",
    "pos": "n.",
    "cn_def": "氣球",
    "en_def": "",
    "sentence": "The child was delighted with the colorful {{BLANK}}.",
    "cn": "孩子對五顏六色的氣球感到很高興。"
  },
  {
    "word": "barbecue",
    "pos": "n.",
    "cn_def": "烤肉",
    "en_def": "",
    "sentence": "We had a {{BLANK}} in the backyard.",
    "cn": "我們在後院烤肉。"
  },
  {
    "word": "barber",
    "pos": "n.",
    "cn_def": "理髮師",
    "en_def": "",
    "sentence": "He goes to the same {{BLANK}} every month.",
    "cn": "他每個月都去同一個理髮師那裡。"
  },
  {
    "word": "bark",
    "pos": "v.",
    "cn_def": "吠叫",
    "en_def": "",
    "sentence": "The dog {{BLANK}} loudly at the strangers.",
    "cn": "狗對著陌生人大聲吠叫。"
  },
  {
    "word": "base",
    "pos": "n.",
    "cn_def": "基地，基礎",
    "en_def": "",
    "sentence": "The military {{BLANK}} is heavily guarded.",
    "cn": "軍事基地戒備森嚴。"
  },
  {
    "word": "basement",
    "pos": "n.",
    "cn_def": "地下室",
    "en_def": "",
    "sentence": "They store old furniture in the {{BLANK}}.",
    "cn": "他們把舊家具存放在地下室。"
  },
  {
    "word": "basic",
    "pos": "adj.",
    "cn_def": "基本的，基礎的",
    "en_def": "",
    "sentence": "You need a {{BLANK}} understanding of math for this course.",
    "cn": "你需要對數學有基本的理解才能學這門課。"
  },
  {
    "word": "bathe",
    "pos": "v.",
    "cn_def": "洗澡",
    "en_def": "",
    "sentence": "She loves to {{BLANK}} in the evening.",
    "cn": "她喜歡晚上洗澡。"
  },
  {
    "word": "beard",
    "pos": "n.",
    "cn_def": "鬍子",
    "en_def": "",
    "sentence": "He grew a {{BLANK}} during his vacation.",
    "cn": "他在假期裡留了鬍子。"
  },
  {
    "word": "beat",
    "pos": "v.",
    "cn_def": "擊打，跳動",
    "en_def": "",
    "sentence": "The drums {{BLANK}} loudly in the parade.",
    "cn": "鼓在遊行中大聲地敲打。"
  },
  {
    "word": "beauty",
    "pos": "n.",
    "cn_def": "美麗，美人",
    "en_def": "",
    "sentence": "She was known for her great {{BLANK}}.",
    "cn": "她以美麗著稱。"
  },
  {
    "word": "beer",
    "pos": "n.",
    "cn_def": "啤酒",
    "en_def": "",
    "sentence": "He ordered a pint of {{BLANK}} at the bar.",
    "cn": "他在酒吧點了一杯啤酒。"
  },
  {
    "word": "beginner",
    "pos": "n.",
    "cn_def": "初學者",
    "en_def": "",
    "sentence": "She is a {{BLANK}} in playing the guitar.",
    "cn": "她是彈吉他的新手。"
  },
  {
    "word": "behave",
    "pos": "v.",
    "cn_def": "表現",
    "en_def": "",
    "sentence": "Children are expected to {{BLANK}} in class.",
    "cn": "孩子們在課堂上應該表現良好。"
  }
];

const MCQS = [
  {
    "q": "He hired an ______ to help with the project.【助手】",
    "options": [
      "assistant",
      "barbecue",
      "beard",
      "beauty"
    ],
    "answer": 0,
    "cn": "他雇了一個助手來幫助這個專案。",
    "vocabIndex": 0
  },
  {
    "q": "The speaker caught everyone's ______ with her opening statement.【注意，關注】",
    "options": [
      "basement",
      "balloon",
      "barbecue",
      "attention"
    ],
    "answer": 3,
    "cn": "演講者用她的開場白吸引了大家的注意力。",
    "vocabIndex": 1
  },
  {
    "q": "You should ______ driving during rush hours.【避免】",
    "options": [
      "beat",
      "bathe",
      "avoid",
      "behave"
    ],
    "answer": 2,
    "cn": "你應該避免在高峰時間開車。",
    "vocabIndex": 2
  },
  {
    "q": "We need to find a reliable ______ for our kids.【保姆】",
    "options": [
      "beauty",
      "baby sitter",
      "assistant",
      "basement"
    ],
    "answer": 1,
    "cn": "我們需要為孩子們找一個可靠的保姆。",
    "vocabIndex": 3
  },
  {
    "q": "He carried all his books in his ______.【背包】",
    "options": [
      "basement",
      "assistant",
      "baby sitter",
      "backpack"
    ],
    "answer": 3,
    "cn": "他把所有的書都放在背包裡。",
    "vocabIndex": 4
  },
  {
    "q": "She took a step ______.【向後地】",
    "options": [
      "backward",
      "nearly",
      "everywhere",
      "neither"
    ],
    "answer": 0,
    "cn": "她向後退了一步。",
    "vocabIndex": 5
  },
  {
    "q": "They played with a ______ in the park.【球】",
    "options": [
      "baby sitter",
      "ball",
      "base",
      "backpack"
    ],
    "answer": 1,
    "cn": "他們在公園裡玩球。",
    "vocabIndex": 6
  },
  {
    "q": "The child was delighted with the colorful ______.【氣球】",
    "options": [
      "beard",
      "basement",
      "balloon",
      "base"
    ],
    "answer": 2,
    "cn": "孩子對五顏六色的氣球感到很高興。",
    "vocabIndex": 7
  },
  {
    "q": "We had a ______ in the backyard.【烤肉】",
    "options": [
      "barbecue",
      "baby sitter",
      "backpack",
      "basement"
    ],
    "answer": 0,
    "cn": "我們在後院烤肉。",
    "vocabIndex": 8
  },
  {
    "q": "He goes to the same ______ every month.【理髮師】",
    "options": [
      "barbecue",
      "barber",
      "beer",
      "baby sitter"
    ],
    "answer": 1,
    "cn": "他每個月都去同一個理髮師那裡。",
    "vocabIndex": 9
  },
  {
    "q": "The dog ______ loudly at the strangers.【吠叫】",
    "options": [
      "behave",
      "beat",
      "avoid",
      "barked"
    ],
    "answer": 3,
    "cn": "狗對著陌生人大聲吠叫。",
    "vocabIndex": 10
  },
  {
    "q": "The military ______ is heavily guarded.【基地，基礎】",
    "options": [
      "backpack",
      "balloon",
      "base",
      "assistant"
    ],
    "answer": 2,
    "cn": "軍事基地戒備森嚴。",
    "vocabIndex": 11
  },
  {
    "q": "They store old furniture in the ______.【地下室】",
    "options": [
      "assistant",
      "basement",
      "base",
      "balloon"
    ],
    "answer": 1,
    "cn": "他們把舊家具存放在地下室。",
    "vocabIndex": 12
  },
  {
    "q": "You need a ______ understanding of math for this course.【基本的，基礎的】",
    "options": [
      "basic",
      "impolite",
      "rude",
      "ill"
    ],
    "answer": 0,
    "cn": "你需要對數學有基本的理解才能學這門課。",
    "vocabIndex": 13
  },
  {
    "q": "She loves to ______ in the evening.【洗澡】",
    "options": [
      "avoid",
      "behave",
      "beat",
      "bathe"
    ],
    "answer": 3,
    "cn": "她喜歡晚上洗澡。",
    "vocabIndex": 14
  },
  {
    "q": "He grew a ______ during his vacation.【鬍子】",
    "options": [
      "assistant",
      "ball",
      "beard",
      "attention"
    ],
    "answer": 2,
    "cn": "他在假期裡留了鬍子。",
    "vocabIndex": 15
  },
  {
    "q": "The drums ______ loudly in the parade.【擊打，跳動】",
    "options": [
      "bathe",
      "behave",
      "avoid",
      "beat"
    ],
    "answer": 3,
    "cn": "鼓在遊行中大聲地敲打。",
    "vocabIndex": 16
  },
  {
    "q": "She was known for her great ______.【美麗，美人】",
    "options": [
      "beauty",
      "barbecue",
      "backpack",
      "barber"
    ],
    "answer": 0,
    "cn": "她以美麗著稱。",
    "vocabIndex": 17
  },
  {
    "q": "He ordered a pint of ______ at the bar.【啤酒】",
    "options": [
      "beginner",
      "barbecue",
      "beer",
      "beard"
    ],
    "answer": 2,
    "cn": "他在酒吧點了一杯啤酒。",
    "vocabIndex": 18
  },
  {
    "q": "She is a ______ in playing the guitar.【初學者】",
    "options": [
      "backpack",
      "beginner",
      "basement",
      "baby sitter"
    ],
    "answer": 1,
    "cn": "她是彈吉他的新手。",
    "vocabIndex": 19
  },
  {
    "q": "Children are expected to ______ in class.【表現】",
    "options": [
      "beat",
      "avoid",
      "bathe",
      "behave"
    ],
    "answer": 3,
    "cn": "孩子們在課堂上應該表現良好。",
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "assistant": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "助手"
  },
  "attention": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "注意，關注"
  },
  "avoid": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "避免"
  },
  "baby sitter": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "保姆"
  },
  "backpack": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "背包"
  },
  "backward": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "向後地"
  },
  "ball": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "球"
  },
  "balloon": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "氣球"
  },
  "barbecue": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "烤肉"
  },
  "barber": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "理髮師"
  },
  "barked": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "吠叫"
  },
  "base": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "基地，基礎"
  },
  "basement": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "地下室"
  },
  "basic": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "基本的，基礎的"
  },
  "bathe": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "洗澡"
  },
  "beard": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "鬍子"
  },
  "beat": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "擊打，跳動"
  },
  "beauty": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "美麗，美人"
  },
  "beer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "啤酒"
  },
  "beginner": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "初學者"
  },
  "behave": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "表現"
  },
  "everywhere": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "到處"
  },
  "ill": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "生病的"
  },
  "impolite": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "不禮貌的"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "幾乎，差不多"
  },
  "neither": {
    "pos": "adv.",
    "en_def": "",
    "cn_def": "也不，既不"
  },
  "rude": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "無禮的，粗魯的"
  }
};

const EXTRA_GLOSSES = {};
