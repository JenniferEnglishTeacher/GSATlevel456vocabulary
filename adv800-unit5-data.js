// Unit 5 Quiz Data: cause – classical
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U05 - cause – classical",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cause",
    "pos": "n.",
    "cn_def": "原因，理由",
    "en_def": "the thing that makes something happen",
    "sentence": "The {{BLANK}} of the fire is still unknown.",
    "cn": "火災的原因仍然未知。"
  },
  {
    "word": "ceiling",
    "pos": "n.",
    "cn_def": "天花板",
    "en_def": "the top inside part of a room",
    "sentence": "The {{BLANK}} is decorated with beautiful paintings.",
    "cn": "天花板上裝飾著美麗的畫作。"
  },
  {
    "word": "central",
    "pos": "adj.",
    "cn_def": "中央的，核心的",
    "en_def": "in the middle; for the whole building",
    "sentence": "The {{BLANK}} heating system is very efficient.",
    "cn": "中央供暖系統非常高效。"
  },
  {
    "word": "century",
    "pos": "n.",
    "cn_def": "世紀",
    "en_def": "one hundred years",
    "sentence": "The castle was built in the 12th {{BLANK}}.",
    "cn": "這座城堡建於12世紀。"
  },
  {
    "word": "cereal",
    "pos": "n.",
    "cn_def": "穀物，麥片",
    "en_def": "a breakfast food made from grains, often eaten with milk",
    "sentence": "She eats {{BLANK}} for breakfast every morning.",
    "cn": "她每天早上吃麥片當早餐。"
  },
  {
    "word": "certain",
    "pos": "adj.",
    "cn_def": "確定的，某些",
    "en_def": "sure; having no doubt",
    "sentence": "Are you {{BLANK}} about the time of the meeting?",
    "cn": "你確定會議的時間嗎？"
  },
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道，通道",
    "en_def": "a TV station",
    "sentence": "Change the {{BLANK}} to watch the news.",
    "cn": "換頻道看新聞。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "性格，角色，文字",
    "en_def": "a person in a story or movie",
    "sentence": "The main {{BLANK}} in the story is very brave.",
    "cn": "故事的主角非常勇敢。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "收費，主要負責，指控",
    "en_def": "to ask someone to pay an amount of money",
    "sentence": "The hotel {{BLANK}} $100 per night.",
    "cn": "這家飯店每晚收費100美元。"
  },
  {
    "word": "chart",
    "pos": "n.",
    "cn_def": "圖表",
    "en_def": "a drawing that shows numbers or information clearly",
    "sentence": "The {{BLANK}} shows the company's sales growth.",
    "cn": "圖表顯示了公司的銷售增長。"
  },
  {
    "word": "chase",
    "pos": "v.",
    "cn_def": "追趕",
    "en_def": "to run after someone or something to catch them",
    "sentence": "The dog {{BLANK}} the cat around the garden.",
    "cn": "狗在花園裡追趕貓。"
  },
  {
    "word": "chemistry",
    "pos": "n.",
    "cn_def": "化學",
    "en_def": "the study of what things are made of and how they change",
    "sentence": "She is studying {{BLANK}} in college.",
    "cn": "她在大學學習化學。"
  },
  {
    "word": "chess",
    "pos": "n.",
    "cn_def": "西洋棋",
    "en_def": "a game for two players with kings and queens on a board",
    "sentence": "He enjoys playing {{BLANK}} in his free time.",
    "cn": "他在空閒時間喜歡下西洋棋。"
  },
  {
    "word": "chick",
    "pos": "n.",
    "cn_def": "小雞，少女",
    "en_def": "a baby bird, especially a baby chicken",
    "sentence": "The mother hen protected her {{BLANK}}.",
    "cn": "母雞保護她的小雞。",
    "alts": [
      "chick"
    ]
  },
  {
    "word": "chief",
    "pos": "n.",
    "cn_def": "首領，長官",
    "en_def": "the leader of a group of people",
    "sentence": "The {{BLANK}} of the village welcomed the guests.",
    "cn": "村長歡迎了客人。"
  },
  {
    "word": "childhood",
    "pos": "n.",
    "cn_def": "童年",
    "en_def": "the time when a person is a child",
    "sentence": "She had a happy {{BLANK}}.",
    "cn": "她有一個快樂的童年。"
  },
  {
    "word": "childish",
    "pos": "adj.",
    "cn_def": "幼稚的，孩子氣的",
    "en_def": "(of an older person) acting like a small child in a silly way",
    "sentence": "His behavior is very {{BLANK}}.",
    "cn": "他的行為非常幼稚。"
  },
  {
    "word": "childlike",
    "pos": "adj.",
    "cn_def": "孩子般的，天真的",
    "en_def": "simple and sweet like a child, in a good way",
    "sentence": "She has a {{BLANK}} innocence.",
    "cn": "她有孩子般的天真。"
  },
  {
    "word": "chin",
    "pos": "n.",
    "cn_def": "下巴",
    "en_def": "the part of your face below your mouth",
    "sentence": "He rested his {{BLANK}} on his hand.",
    "cn": "他把下巴放在手上。"
  },
  {
    "word": "classical",
    "pos": "adj.",
    "cn_def": "古典的，經典的",
    "en_def": "(of music) serious and written long ago, like Mozart's",
    "sentence": "She prefers {{BLANK}} music to pop music.",
    "cn": "她更喜歡古典音樂而不是流行音樂。"
  }
];

const MCQS = [
  {
    "q": "The police are trying to find the ______ of the fire. They want to know how and why it started.",
    "options": [
      "chart",
      "chin",
      "chess",
      "cause"
    ],
    "answer": 3,
    "cn": "火災的原因仍然未知。",
    "vocabIndex": 0
  },
  {
    "q": "There is a fan on the ______ of my bedroom. I look up at it when I lie in bed.",
    "options": [
      "chin",
      "ceiling",
      "chart",
      "century"
    ],
    "answer": 1,
    "cn": "天花板上裝飾著美麗的畫作。",
    "vocabIndex": 1
  },
  {
    "q": "The train station is in the ______ part of the city, so it is easy to get there from anywhere.",
    "options": [
      "childish",
      "classical",
      "central",
      "certain"
    ],
    "answer": 2,
    "cn": "中央供暖系統非常高效。",
    "vocabIndex": 2
  },
  {
    "q": "This temple was built in the 18th ______. It is about three hundred years old, and many visitors come to see it.",
    "options": [
      "century",
      "channel",
      "chart",
      "character"
    ],
    "answer": 0,
    "cn": "這座城堡建於12世紀。",
    "vocabIndex": 3
  },
  {
    "q": "I usually have a bowl of ______ with milk for breakfast. It is quick and easy to make.",
    "options": [
      "chess",
      "chemistry",
      "chin",
      "cereal"
    ],
    "answer": 3,
    "cn": "她每天早上吃麥片當早餐。",
    "vocabIndex": 4
  },
  {
    "q": "Are you ______ that you locked the door? I think we should go back and check it again.",
    "options": [
      "certain",
      "central",
      "childish",
      "classical"
    ],
    "answer": 0,
    "cn": "你確定會議的時間嗎？",
    "vocabIndex": 5
  },
  {
    "q": "This program is boring. Let's change the ______ and watch the news or a movie.",
    "options": [
      "century",
      "chin",
      "channel",
      "ceiling"
    ],
    "answer": 2,
    "cn": "換頻道看新聞。",
    "vocabIndex": 6
  },
  {
    "q": "Harry is the main ______ in the story. The book tells us how he grows up and fights the bad people.",
    "options": [
      "chart",
      "character",
      "chin",
      "ceiling"
    ],
    "answer": 1,
    "cn": "故事的主角非常勇敢。",
    "vocabIndex": 7
  },
  {
    "q": "The hotel ______ three thousand dollars a night. It is too expensive for us, so let's find a cheaper one.",
    "options": [
      "charges",
      "chases",
      "cancels",
      "bursts"
    ],
    "answer": 0,
    "cn": "這家飯店每晚收費100美元。",
    "vocabIndex": 8
  },
  {
    "q": "The teacher drew a ______ on the board to show our test scores. We could see the numbers going up month by month.",
    "options": [
      "chin",
      "chess",
      "chick",
      "chart"
    ],
    "answer": 3,
    "cn": "圖表顯示了公司的銷售增長。",
    "vocabIndex": 9
  },
  {
    "q": "The cat ______ the mouse around the kitchen, but the mouse ran into a small hole and got away.",
    "options": [
      "charged",
      "canceled",
      "chased",
      "blessed"
    ],
    "answer": 2,
    "cn": "狗在花園裡追趕貓。",
    "vocabIndex": 10
  },
  {
    "q": "In ______ class, we mixed two liquids together, and the color changed from blue to red. It was like magic.",
    "options": [
      "childhood",
      "chemistry",
      "chess",
      "century"
    ],
    "answer": 1,
    "cn": "她在大學學習化學。",
    "vocabIndex": 11
  },
  {
    "q": "My grandpa taught me how to play ______. We sit at the board and move the kings and queens every Sunday.",
    "options": [
      "chemistry",
      "cereal",
      "chart",
      "chess"
    ],
    "answer": 3,
    "cn": "他在空閒時間喜歡下西洋棋。",
    "vocabIndex": 12
  },
  {
    "q": "The mother hen is walking in the yard with her five yellow ______. The babies follow her everywhere.",
    "options": [
      "chiefs",
      "chins",
      "chicks",
      "charts"
    ],
    "answer": 2,
    "cn": "母雞保護她的小雞。",
    "vocabIndex": 13
  },
  {
    "q": "The ______ of the village is an old man. Everyone listens to him when there is a problem.",
    "options": [
      "chief",
      "chick",
      "chin",
      "chart"
    ],
    "answer": 0,
    "cn": "村長歡迎了客人。",
    "vocabIndex": 14
  },
  {
    "q": "My father spent his ______ on a farm. When he was a little boy, he played with pigs and chickens every day.",
    "options": [
      "century",
      "childhood",
      "chemistry",
      "ceiling"
    ],
    "answer": 1,
    "cn": "她有一個快樂的童年。",
    "vocabIndex": 15
  },
  {
    "q": "Stop crying over a toy! You are fifteen years old, so don't be so ______. Please act your age.",
    "options": [
      "childish",
      "central",
      "classical",
      "certain"
    ],
    "answer": 0,
    "cn": "他的行為非常幼稚。",
    "vocabIndex": 16
  },
  {
    "q": "Grandma is seventy, but she still has a ______ love for cartoons and candy. That is why all the kids like her.",
    "options": [
      "central",
      "classical",
      "certain",
      "childlike"
    ],
    "answer": 3,
    "cn": "她有孩子般的天真。",
    "vocabIndex": 17
  },
  {
    "q": "The man has a long beard on his ______. He touches it with his hand when he is thinking.",
    "options": [
      "chart",
      "ceiling",
      "chin",
      "chess"
    ],
    "answer": 2,
    "cn": "他把下巴放在手上。",
    "vocabIndex": 18
  },
  {
    "q": "My mother loves ______ music. She listens to Mozart and Beethoven while she is cooking.",
    "options": [
      "childish",
      "classical",
      "central",
      "certain"
    ],
    "answer": 1,
    "cn": "她更喜歡古典音樂而不是流行音樂。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "chart": {
    "pos": "n.",
    "en_def": "a drawing that shows numbers or information clearly",
    "cn_def": "圖表"
  },
  "chin": {
    "pos": "n.",
    "en_def": "the part of your face below your mouth",
    "cn_def": "下巴"
  },
  "chess": {
    "pos": "n.",
    "en_def": "a game for two players with kings and queens on a board",
    "cn_def": "西洋棋"
  },
  "cause": {
    "pos": "n.",
    "en_def": "the thing that makes something happen",
    "cn_def": "原因，理由"
  },
  "ceiling": {
    "pos": "n.",
    "en_def": "the top inside part of a room",
    "cn_def": "天花板"
  },
  "century": {
    "pos": "n.",
    "en_def": "one hundred years",
    "cn_def": "世紀"
  },
  "childish": {
    "pos": "adj.",
    "en_def": "(of an older person) acting like a small child in a silly way",
    "cn_def": "幼稚的，孩子氣的"
  },
  "classical": {
    "pos": "adj.",
    "en_def": "(of music) serious and written long ago, like Mozart's",
    "cn_def": "古典的，經典的"
  },
  "central": {
    "pos": "adj.",
    "en_def": "in the middle; for the whole building",
    "cn_def": "中央的，核心的"
  },
  "certain": {
    "pos": "adj.",
    "en_def": "sure; having no doubt",
    "cn_def": "確定的，某些"
  },
  "channel": {
    "pos": "n.",
    "en_def": "a TV station",
    "cn_def": "頻道，通道"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person in a story or movie",
    "cn_def": "性格，角色，文字"
  },
  "chemistry": {
    "pos": "n.",
    "en_def": "the study of what things are made of and how they change",
    "cn_def": "化學"
  },
  "cereal": {
    "pos": "n.",
    "en_def": "a breakfast food made from grains, often eaten with milk",
    "cn_def": "穀物，麥片"
  },
  "charges": {
    "pos": "v.",
    "en_def": "to ask someone to pay an amount of money",
    "cn_def": "收費，主要負責，指控"
  },
  "chases": {
    "pos": "v.",
    "en_def": "to run after someone or something to catch them",
    "cn_def": "追趕"
  },
  "cancels": {
    "pos": "v.",
    "en_def": "to say that something planned will not happen",
    "cn_def": "取消"
  },
  "bursts": {
    "pos": "v.",
    "en_def": "to break open suddenly",
    "cn_def": "爆炸，破裂"
  },
  "chick": {
    "pos": "n.",
    "en_def": "a baby bird, especially a baby chicken",
    "cn_def": "小雞，少女"
  },
  "charged": {
    "pos": "v.",
    "en_def": "to ask someone to pay an amount of money",
    "cn_def": "收費，主要負責，指控"
  },
  "canceled": {
    "pos": "v.",
    "en_def": "to say that something planned will not happen",
    "cn_def": "取消"
  },
  "chased": {
    "pos": "v.",
    "en_def": "to run after someone or something to catch them",
    "cn_def": "追趕"
  },
  "blessed": {
    "pos": "v.",
    "en_def": "(of God) to give good things to someone",
    "cn_def": "祝福，保佑"
  },
  "childhood": {
    "pos": "n.",
    "en_def": "the time when a person is a child",
    "cn_def": "童年"
  },
  "chiefs": {
    "pos": "n.",
    "en_def": "the leader of a group of people",
    "cn_def": "首領，長官"
  },
  "chins": {
    "pos": "n.",
    "en_def": "the part of your face below your mouth",
    "cn_def": "下巴"
  },
  "chicks": {
    "pos": "n.",
    "en_def": "a baby bird, especially a baby chicken",
    "cn_def": "小雞，少女"
  },
  "charts": {
    "pos": "n.",
    "en_def": "a drawing that shows numbers or information clearly",
    "cn_def": "圖表"
  },
  "chief": {
    "pos": "n.",
    "en_def": "the leader of a group of people",
    "cn_def": "首領，長官"
  },
  "childlike": {
    "pos": "adj.",
    "en_def": "simple and sweet like a child, in a good way",
    "cn_def": "孩子般的，天真的"
  }
};

const EXTRA_GLOSSES = {};
