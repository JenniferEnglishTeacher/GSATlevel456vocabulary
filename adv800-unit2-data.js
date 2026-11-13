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
    "en_def": "a person who helps someone do their work",
    "sentence": "He hired an {{BLANK}} to help with the project.",
    "cn": "他雇了一個助手來幫助這個專案。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意，關注",
    "en_def": "looking at or listening to something carefully",
    "sentence": "The speaker caught everyone's {{BLANK}} with her opening statement.",
    "cn": "演講者用她的開場白吸引了大家的注意力。"
  },
  {
    "word": "avoid",
    "pos": "v.",
    "cn_def": "避免",
    "en_def": "to stay away from something; to try not to do something",
    "sentence": "You should {{BLANK}} driving during rush hours.",
    "cn": "你應該避免在高峰時間開車。"
  },
  {
    "word": "baby sitter",
    "pos": "n.",
    "cn_def": "保姆",
    "en_def": "a person who takes care of children when their parents are out",
    "sentence": "We need to find a reliable {{BLANK}} for our kids.",
    "cn": "我們需要為孩子們找一個可靠的保姆。",
    "nblanks": 2
  },
  {
    "word": "backpack",
    "pos": "n.",
    "cn_def": "背包",
    "en_def": "a bag that you carry on your back",
    "sentence": "He carried all his books in his {{BLANK}}.",
    "cn": "他把所有的書都放在背包裡。"
  },
  {
    "word": "backward",
    "pos": "adv.",
    "cn_def": "向後地",
    "en_def": "toward the back",
    "sentence": "She took a step {{BLANK}}.",
    "cn": "她向後退了一步。"
  },
  {
    "word": "ball",
    "pos": "n.",
    "cn_def": "球",
    "en_def": "a round thing that you throw, kick, or hit in games",
    "sentence": "They played with a {{BLANK}} in the park.",
    "cn": "他們在公園裡玩球。"
  },
  {
    "word": "balloon",
    "pos": "n.",
    "cn_def": "氣球",
    "en_def": "a thin rubber bag that gets bigger when you blow air into it",
    "sentence": "The child was delighted with the colorful {{BLANK}}.",
    "cn": "孩子對五顏六色的氣球感到很高興。"
  },
  {
    "word": "barbecue",
    "pos": "n.",
    "cn_def": "烤肉",
    "en_def": "a meal or party where food is cooked outside over a fire",
    "sentence": "We had a {{BLANK}} in the backyard.",
    "cn": "我們在後院烤肉。"
  },
  {
    "word": "barber",
    "pos": "n.",
    "cn_def": "理髮師",
    "en_def": "a person whose job is to cut men's hair",
    "sentence": "He goes to the same {{BLANK}} every month.",
    "cn": "他每個月都去同一個理髮師那裡。"
  },
  {
    "word": "bark",
    "pos": "v.",
    "cn_def": "吠叫",
    "en_def": "(of a dog) to make a short loud sound",
    "sentence": "The dog {{BLANK}} loudly at the strangers.",
    "cn": "狗對著陌生人大聲吠叫。"
  },
  {
    "word": "base",
    "pos": "n.",
    "cn_def": "基地，基礎",
    "en_def": "a place where soldiers live and work",
    "sentence": "The military {{BLANK}} is heavily guarded.",
    "cn": "軍事基地戒備森嚴。"
  },
  {
    "word": "basement",
    "pos": "n.",
    "cn_def": "地下室",
    "en_def": "a room or floor under the ground in a building",
    "sentence": "They store old furniture in the {{BLANK}}.",
    "cn": "他們把舊家具存放在地下室。"
  },
  {
    "word": "basic",
    "pos": "adj.",
    "cn_def": "基本的，基礎的",
    "en_def": "simple and needed before you can learn more",
    "sentence": "You need a {{BLANK}} understanding of math for this course.",
    "cn": "你需要對數學有基本的理解才能學這門課。"
  },
  {
    "word": "bathe",
    "pos": "v.",
    "cn_def": "洗澡",
    "en_def": "to wash your body in a bath",
    "sentence": "She loves to {{BLANK}} in the evening.",
    "cn": "她喜歡晚上洗澡。"
  },
  {
    "word": "beard",
    "pos": "n.",
    "cn_def": "鬍子",
    "en_def": "the hair that grows on a man's chin and cheeks",
    "sentence": "He grew a {{BLANK}} during his vacation.",
    "cn": "他在假期裡留了鬍子。"
  },
  {
    "word": "beat",
    "pos": "v.",
    "cn_def": "擊打，跳動",
    "en_def": "to hit again and again; to make a regular sound",
    "sentence": "The drums {{BLANK}} loudly in the parade.",
    "cn": "鼓在遊行中大聲地敲打。"
  },
  {
    "word": "beauty",
    "pos": "n.",
    "cn_def": "美麗，美人",
    "en_def": "being very nice to look at",
    "sentence": "She was known for her great {{BLANK}}.",
    "cn": "她以美麗著稱。"
  },
  {
    "word": "beer",
    "pos": "n.",
    "cn_def": "啤酒",
    "en_def": "a yellow or brown drink with alcohol",
    "sentence": "He ordered a pint of {{BLANK}} at the bar.",
    "cn": "他在酒吧點了一杯啤酒。"
  },
  {
    "word": "beginner",
    "pos": "n.",
    "cn_def": "初學者",
    "en_def": "a person who is just starting to learn something",
    "sentence": "She is a {{BLANK}} in playing the guitar.",
    "cn": "她是彈吉他的新手。"
  },
  {
    "word": "behave",
    "pos": "v.",
    "cn_def": "表現",
    "en_def": "to act in a good and polite way",
    "sentence": "Children are expected to {{BLANK}} in class.",
    "cn": "孩子們在課堂上應該表現良好。"
  }
];

const MCQS = [
  {
    "q": "The doctor is too busy to answer the phone, so he hired a young ______. She helps him with letters and meetings every day.",
    "options": [
      "barber",
      "beginner",
      "assistant",
      "baby sitter"
    ],
    "answer": 2,
    "cn": "他雇了一個助手來幫助這個專案。",
    "vocabIndex": 0
  },
  {
    "q": "Please pay ______ to the teacher in class. If you keep looking out the window, you won't understand the lesson.",
    "options": [
      "beauty",
      "attention",
      "beer",
      "base"
    ],
    "answer": 1,
    "cn": "演講者用她的開場白吸引了大家的注意力。",
    "vocabIndex": 1
  },
  {
    "q": "You should ______ eating too much candy. It is bad for your teeth, and it can make you fat.",
    "options": [
      "behave",
      "bathe",
      "bark",
      "avoid"
    ],
    "answer": 3,
    "cn": "你應該避免在高峰時間開車。",
    "vocabIndex": 2
  },
  {
    "q": "Mr. and Mrs. Lin are going out for dinner tonight, so they need a ______ to take care of their two young children.",
    "options": [
      "baby sitter",
      "barber",
      "beginner",
      "basement"
    ],
    "answer": 0,
    "cn": "我們需要為孩子們找一個可靠的保姆。",
    "vocabIndex": 3
  },
  {
    "q": "Ben carries a heavy ______ to school every day. It has all his books, his lunch box, and a bottle of water in it.",
    "options": [
      "balloon",
      "backpack",
      "basement",
      "beard"
    ],
    "answer": 1,
    "cn": "他把所有的書都放在背包裡。",
    "vocabIndex": 4
  },
  {
    "q": "Without looking behind him, the little boy took three steps ______ and fell into the pool.",
    "options": [
      "backward",
      "besides",
      "especially",
      "hardly"
    ],
    "answer": 0,
    "cn": "她向後退了一步。",
    "vocabIndex": 5
  },
  {
    "q": "The children are playing with a ______ in the park. They kick it and throw it to each other.",
    "options": [
      "beard",
      "barber",
      "ball",
      "basement"
    ],
    "answer": 2,
    "cn": "他們在公園裡玩球。",
    "vocabIndex": 6
  },
  {
    "q": "Dad blew air into the red ______ until it was very big. Then it flew up into the sky when my sister let it go.",
    "options": [
      "backpack",
      "beard",
      "basement",
      "balloon"
    ],
    "answer": 3,
    "cn": "孩子對五顏六色的氣球感到很高興。",
    "vocabIndex": 7
  },
  {
    "q": "We had a ______ by the river on Moon Festival night. We cooked meat and corn over a fire and ate under the moon.",
    "options": [
      "barbecue",
      "backpack",
      "basement",
      "beginner"
    ],
    "answer": 0,
    "cn": "我們在後院烤肉。",
    "vocabIndex": 8
  },
  {
    "q": "My hair is too long, so I am going to the ______ this afternoon. He always cuts my hair very well.",
    "options": [
      "beginner",
      "barber",
      "basement",
      "baby sitter"
    ],
    "answer": 1,
    "cn": "他每個月都去同一個理髮師那裡。",
    "vocabIndex": 9
  },
  {
    "q": "The dog ______ loudly when a stranger came to the door. The noise woke up everyone in the house.",
    "options": [
      "bathed",
      "behaved",
      "avoided",
      "barked"
    ],
    "answer": 3,
    "cn": "狗對著陌生人大聲吠叫。",
    "vocabIndex": 10
  },
  {
    "q": "The soldiers live and work on a ______ near the sea. People can't go inside it without a special card.",
    "options": [
      "beard",
      "ball",
      "base",
      "beer"
    ],
    "answer": 2,
    "cn": "軍事基地戒備森嚴。",
    "vocabIndex": 11
  },
  {
    "q": "We keep our old toys and bikes in the ______. It is under the house, so it is dark and cool down there.",
    "options": [
      "basement",
      "backpack",
      "balloon",
      "barbecue"
    ],
    "answer": 0,
    "cn": "他們把舊家具存放在地下室。",
    "vocabIndex": 12
  },
  {
    "q": "Before you cook a big dinner, you need to learn some ______ skills, like how to cut vegetables and boil water.",
    "options": [
      "absent",
      "basic",
      "asleep",
      "bitter"
    ],
    "answer": 1,
    "cn": "你需要對數學有基本的理解才能學這門課。",
    "vocabIndex": 13
  },
  {
    "q": "It is very hot in summer, so I ______ twice a day. I feel clean and cool after I wash my body.",
    "options": [
      "bark",
      "behave",
      "avoid",
      "bathe"
    ],
    "answer": 3,
    "cn": "她喜歡晚上洗澡。",
    "vocabIndex": 14
  },
  {
    "q": "My grandfather has a long white ______ on his chin. He looks like Santa Claus when he wears a red hat.",
    "options": [
      "backpack",
      "ball",
      "beard",
      "base"
    ],
    "answer": 2,
    "cn": "他在假期裡留了鬍子。",
    "vocabIndex": 15
  },
  {
    "q": "When I am nervous before a test, I can feel my heart ______ very fast. I take a deep breath to calm down.",
    "options": [
      "bark",
      "beat",
      "bathe",
      "behave"
    ],
    "answer": 1,
    "cn": "鼓在遊行中大聲地敲打。",
    "vocabIndex": 16
  },
  {
    "q": "Many visitors come to the mountain to enjoy the ______ of nature. They take pictures of the trees, flowers, and lakes.",
    "options": [
      "beauty",
      "beer",
      "beard",
      "barber"
    ],
    "answer": 0,
    "cn": "她以美麗著稱。",
    "vocabIndex": 17
  },
  {
    "q": "My father likes to drink a cold ______ after work, but he never drives a car after drinking.",
    "options": [
      "beard",
      "ball",
      "beer",
      "base"
    ],
    "answer": 2,
    "cn": "他在酒吧點了一杯啤酒。",
    "vocabIndex": 18
  },
  {
    "q": "I started to learn the piano last week, so I am still a ______. I can only play one very easy song.",
    "options": [
      "barber",
      "baby sitter",
      "balloon",
      "beginner"
    ],
    "answer": 3,
    "cn": "她是彈吉他的新手。",
    "vocabIndex": 19
  },
  {
    "q": "Please ______ yourself at Grandma's house. Don't jump on the sofa or play with your food at the table.",
    "options": [
      "behave",
      "avoid",
      "bark",
      "beat"
    ],
    "answer": 0,
    "cn": "孩子們在課堂上應該表現良好。",
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "barber": {
    "pos": "n.",
    "en_def": "a person whose job is to cut men's hair",
    "cn_def": "理髮師"
  },
  "beginner": {
    "pos": "n.",
    "en_def": "a person who is just starting to learn something",
    "cn_def": "初學者"
  },
  "assistant": {
    "pos": "n.",
    "en_def": "a person who helps someone do their work",
    "cn_def": "助手"
  },
  "baby sitter": {
    "pos": "n.",
    "en_def": "a person who takes care of children when their parents are out",
    "cn_def": "保姆"
  },
  "beauty": {
    "pos": "n.",
    "en_def": "being very nice to look at",
    "cn_def": "美麗，美人"
  },
  "attention": {
    "pos": "n.",
    "en_def": "looking at or listening to something carefully",
    "cn_def": "注意，關注"
  },
  "beer": {
    "pos": "n.",
    "en_def": "a yellow or brown drink with alcohol",
    "cn_def": "啤酒"
  },
  "base": {
    "pos": "n.",
    "en_def": "a place where soldiers live and work",
    "cn_def": "基地，基礎"
  },
  "behave": {
    "pos": "v.",
    "en_def": "to act in a good and polite way",
    "cn_def": "表現"
  },
  "bathe": {
    "pos": "v.",
    "en_def": "to wash your body in a bath",
    "cn_def": "洗澡"
  },
  "bark": {
    "pos": "v.",
    "en_def": "(of a dog) to make a short loud sound",
    "cn_def": "吠叫"
  },
  "avoid": {
    "pos": "v.",
    "en_def": "to stay away from something; to try not to do something",
    "cn_def": "避免"
  },
  "basement": {
    "pos": "n.",
    "en_def": "a room or floor under the ground in a building",
    "cn_def": "地下室"
  },
  "balloon": {
    "pos": "n.",
    "en_def": "a thin rubber bag that gets bigger when you blow air into it",
    "cn_def": "氣球"
  },
  "backpack": {
    "pos": "n.",
    "en_def": "a bag that you carry on your back",
    "cn_def": "背包"
  },
  "beard": {
    "pos": "n.",
    "en_def": "the hair that grows on a man's chin and cheeks",
    "cn_def": "鬍子"
  },
  "backward": {
    "pos": "adv.",
    "en_def": "toward the back",
    "cn_def": "向後地"
  },
  "besides": {
    "pos": "adv.",
    "en_def": "in addition to",
    "cn_def": "除了...之外"
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
  },
  "ball": {
    "pos": "n.",
    "en_def": "a round thing that you throw, kick, or hit in games",
    "cn_def": "球"
  },
  "barbecue": {
    "pos": "n.",
    "en_def": "a meal or party where food is cooked outside over a fire",
    "cn_def": "烤肉"
  },
  "bathed": {
    "pos": "v.",
    "en_def": "to wash your body in a bath",
    "cn_def": "洗澡"
  },
  "behaved": {
    "pos": "v.",
    "en_def": "to act in a good and polite way",
    "cn_def": "表現"
  },
  "avoided": {
    "pos": "v.",
    "en_def": "to stay away from something; to try not to do something",
    "cn_def": "避免"
  },
  "barked": {
    "pos": "v.",
    "en_def": "(of a dog) to make a short loud sound",
    "cn_def": "吠叫"
  },
  "absent": {
    "pos": "adj.",
    "en_def": "not in a place where you should be",
    "cn_def": "缺席的，不在場的"
  },
  "basic": {
    "pos": "adj.",
    "en_def": "simple and needed before you can learn more",
    "cn_def": "基本的，基礎的"
  },
  "asleep": {
    "pos": "adj.",
    "en_def": "sleeping",
    "cn_def": "睡著的"
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong taste that is not sweet, like black coffee",
    "cn_def": "苦的，痛苦的"
  },
  "beat": {
    "pos": "v.",
    "en_def": "to hit again and again; to make a regular sound",
    "cn_def": "擊打，跳動"
  }
};

const EXTRA_GLOSSES = {};
