// Unit 10 Quiz Data: diamond – donkey
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U10 - diamond – donkey",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "diamond",
    "pos": "n.",
    "cn_def": "鑽石",
    "en_def": "a very hard, clear, expensive stone used in rings",
    "sentence": "She received a {{BLANK}} ring for her birthday.",
    "cn": "她生日收到了鑽石戒指。"
  },
  {
    "word": "diary",
    "pos": "n.",
    "cn_def": "日記",
    "en_def": "a book in which you write what happens every day",
    "sentence": "She writes in her {{BLANK}} every night.",
    "cn": "她每晚都寫日記。"
  },
  {
    "word": "diet",
    "pos": "n.",
    "cn_def": "飲食，節食",
    "en_def": "a plan to eat less or only some foods, to lose weight",
    "sentence": "She is on a strict {{BLANK}}.",
    "cn": "她在嚴格節食。"
  },
  {
    "word": "difference",
    "pos": "n.",
    "cn_def": "差異，區別",
    "en_def": "the way in which two things are not the same",
    "sentence": "There is a big {{BLANK}} between the two plans.",
    "cn": "這兩個計劃之間有很大的差異。"
  },
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "困難，難題",
    "en_def": "a problem; something that is hard to do",
    "sentence": "He had {{BLANK}} solving the problem.",
    "cn": "他解決這個問題有困難。"
  },
  {
    "word": "diligent",
    "pos": "adj.",
    "cn_def": "勤勉的，勤奮的",
    "en_def": "working hard and carefully",
    "sentence": "She is a very {{BLANK}} student.",
    "cn": "她是個非常勤奮的學生。"
  },
  {
    "word": "dinosaur",
    "pos": "n.",
    "cn_def": "恐龍",
    "en_def": "a very big animal that lived millions of years ago",
    "sentence": "The museum has a new {{BLANK}} exhibit.",
    "cn": "博物館有一個新的恐龍展覽。"
  },
  {
    "word": "diplomat",
    "pos": "n.",
    "cn_def": "外交官",
    "en_def": "a person who works for his or her country in another country",
    "sentence": "He is a well-known {{BLANK}}.",
    "cn": "他是一位著名的外交官。"
  },
  {
    "word": "direct",
    "pos": "v.",
    "cn_def": "指導，指揮",
    "en_def": "to tell actors what to do in a play or movie",
    "sentence": "She {{BLANK}} the play with great skill.",
    "cn": "她很熟練地指導了這齣戲。"
  },
  {
    "word": "direction",
    "pos": "n.",
    "cn_def": "方向，指導",
    "en_def": "words that tell you how to get to a place or how to do something",
    "sentence": "We need to follow the {{BLANK}} to find the place.",
    "cn": "我們需要按照指示找到那個地方。",
    "alts": [
      "direction"
    ]
  },
  {
    "word": "disappear",
    "pos": "v.",
    "cn_def": "消失，不見",
    "en_def": "to go away so that no one can see it",
    "sentence": "The sun {{BLANK}} behind the clouds.",
    "cn": "太陽消失在雲層後面。"
  },
  {
    "word": "discover",
    "pos": "v.",
    "cn_def": "發現，找到",
    "en_def": "to find something for the first time",
    "sentence": "They {{BLANK}} a new species of bird.",
    "cn": "他們發現了一個新鳥種。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論，商議",
    "en_def": "to talk about something with other people",
    "sentence": "Let's {{BLANK}} the plan in detail.",
    "cn": "我們詳細討論一下這個計劃。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論，商談",
    "en_def": "a talk about something",
    "sentence": "The {{BLANK}} was very productive.",
    "cn": "這次討論非常有成效。"
  },
  {
    "word": "distance",
    "pos": "n.",
    "cn_def": "距離",
    "en_def": "how far it is between two places",
    "sentence": "The {{BLANK}} between the two cities is 100 miles.",
    "cn": "這兩個城市之間的距離是100英里。"
  },
  {
    "word": "divide",
    "pos": "v.",
    "cn_def": "分開，劃分",
    "en_def": "to cut or break something into parts",
    "sentence": "The cake was {{BLANK}} into eight pieces.",
    "cn": "蛋糕被分成八塊。"
  },
  {
    "word": "dizzy",
    "pos": "adj.",
    "cn_def": "頭暈的",
    "en_def": "feeling that everything is turning around you",
    "sentence": "She felt {{BLANK}} after riding the roller coaster.",
    "cn": "她坐過山車後感到頭暈。"
  },
  {
    "word": "dodge ball",
    "pos": "n.",
    "cn_def": "躲避球",
    "en_def": "a game in which players throw balls at each other and try not to get hit",
    "sentence": "They played {{BLANK}} during gym class.",
    "cn": "他們在體育課上玩躲避球。",
    "nblanks": 2
  },
  {
    "word": "dolphin",
    "pos": "n.",
    "cn_def": "海豚",
    "en_def": "a smart sea animal that looks like a big fish and jumps out of the water",
    "sentence": "The {{BLANK}} jumped out of the water.",
    "cn": "海豚跳出了水面。"
  },
  {
    "word": "donkey",
    "pos": "n.",
    "cn_def": "驢",
    "en_def": "an animal like a small horse with long ears",
    "sentence": "The {{BLANK}} carried the heavy load up the hill.",
    "cn": "驢把重物背上山。"
  }
];

const MCQS = [
  {
    "q": "He gave her a ______ ring when he asked her to marry him. The stone was very bright.",
    "options": [
      "diary",
      "diet",
      "donkey",
      "diamond"
    ],
    "answer": 3,
    "cn": "她生日收到了鑽石戒指。",
    "vocabIndex": 0
  },
  {
    "q": "Amy writes in her ______ every night. She puts down everything that happened that day.",
    "options": [
      "diary",
      "diamond",
      "diet",
      "distance"
    ],
    "answer": 0,
    "cn": "她每晚都寫日記。",
    "vocabIndex": 1
  },
  {
    "q": "I am on a ______. I am trying to lose five kilograms, so I can't eat cake.",
    "options": [
      "diary",
      "diet",
      "diamond",
      "dolphin"
    ],
    "answer": 1,
    "cn": "她在嚴格節食。",
    "vocabIndex": 2
  },
  {
    "q": "What is the ______ between these two phones? They look the same to me.",
    "options": [
      "difficulty",
      "direction",
      "difference",
      "discussion"
    ],
    "answer": 2,
    "cn": "這兩個計劃之間有很大的差異。",
    "vocabIndex": 3
  },
  {
    "q": "The old man has ______ walking. He needs a stick to help him.",
    "options": [
      "difference",
      "distance",
      "direction",
      "difficulty"
    ],
    "answer": 3,
    "cn": "他解決這個問題有困難。",
    "vocabIndex": 4
  },
  {
    "q": "Ben is a ______ student. He studies hard every day and never forgets his homework.",
    "options": [
      "dizzy",
      "diligent",
      "deaf",
      "daily"
    ],
    "answer": 1,
    "cn": "她是個非常勤奮的學生。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ was a very big animal. It lived on the earth millions of years ago.",
    "options": [
      "dolphin",
      "donkey",
      "dinosaur",
      "diamond"
    ],
    "answer": 2,
    "cn": "博物館有一個新的恐龍展覽。",
    "vocabIndex": 6
  },
  {
    "q": "Mr. Wang is a ______. He works for Taiwan in an office in Japan.",
    "options": [
      "diplomat",
      "dinosaur",
      "dolphin",
      "donkey"
    ],
    "answer": 0,
    "cn": "他是一位著名的外交官。",
    "vocabIndex": 7
  },
  {
    "q": "He ______ three movies last year. He told all the actors what to do.",
    "options": [
      "disappeared",
      "divided",
      "discussed",
      "directed"
    ],
    "answer": 3,
    "cn": "她很熟練地指導了這齣戲。",
    "vocabIndex": 8
  },
  {
    "q": "I am lost. Can you give me ______ to the train station?",
    "options": [
      "directions",
      "differences",
      "distances",
      "dinosaurs"
    ],
    "answer": 0,
    "cn": "我們需要按照指示找到那個地方。",
    "vocabIndex": 9
  },
  {
    "q": "The magician waved his hand, and the rabbit ______. Nobody could see it anymore.",
    "options": [
      "discovered",
      "discussed",
      "disappeared",
      "divided"
    ],
    "answer": 2,
    "cn": "太陽消失在雲層後面。",
    "vocabIndex": 10
  },
  {
    "q": "Scientists ______ a new star last month. Nobody knew about it before.",
    "options": [
      "disappeared",
      "discovered",
      "divided",
      "discussed"
    ],
    "answer": 1,
    "cn": "他們發現了一個新鳥種。",
    "vocabIndex": 11
  },
  {
    "q": "Let's ______ the plan at the meeting. Everyone can say what they think.",
    "options": [
      "disappear",
      "divide",
      "discuss",
      "direct"
    ],
    "answer": 2,
    "cn": "我們詳細討論一下這個計劃。",
    "vocabIndex": 12
  },
  {
    "q": "We had a long ______ about where to go for the class trip. Everyone gave an idea.",
    "options": [
      "discussion",
      "distance",
      "diamond",
      "dinosaur"
    ],
    "answer": 0,
    "cn": "這次討論非常有成效。",
    "vocabIndex": 13
  },
  {
    "q": "The ______ from my home to school is two kilometers. I walk it in thirty minutes.",
    "options": [
      "difference",
      "distance",
      "difficulty",
      "discussion"
    ],
    "answer": 1,
    "cn": "這兩個城市之間的距離是100英里。",
    "vocabIndex": 14
  },
  {
    "q": "Mom will ______ the cake into eight pieces. Each of us can have one.",
    "options": [
      "discuss",
      "discover",
      "disappear",
      "divide"
    ],
    "answer": 3,
    "cn": "蛋糕被分成八塊。",
    "vocabIndex": 15
  },
  {
    "q": "I feel ______ after going around and around. Everything seems to be moving.",
    "options": [
      "dizzy",
      "diligent",
      "deaf",
      "daily"
    ],
    "answer": 0,
    "cn": "她坐過山車後感到頭暈。",
    "vocabIndex": 16
  },
  {
    "q": "We played ______ in PE class. I got hit by the ball, so I was out.",
    "options": [
      "diamond",
      "diary",
      "dodge ball",
      "diet"
    ],
    "answer": 2,
    "cn": "他們在體育課上玩躲避球。",
    "vocabIndex": 17
  },
  {
    "q": "A ______ is a smart sea animal. It can jump out of the water and play with a ball.",
    "options": [
      "donkey",
      "dolphin",
      "dinosaur",
      "diplomat"
    ],
    "answer": 1,
    "cn": "海豚跳出了水面。",
    "vocabIndex": 18
  },
  {
    "q": "A ______ looks like a small horse with long ears. Farmers use it to carry heavy things.",
    "options": [
      "dolphin",
      "dinosaur",
      "diamond",
      "donkey"
    ],
    "answer": 3,
    "cn": "驢把重物背上山。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "diary": {
    "pos": "n.",
    "en_def": "a book in which you write what happens every day",
    "cn_def": "日記"
  },
  "diet": {
    "pos": "n.",
    "en_def": "a plan to eat less or only some foods, to lose weight",
    "cn_def": "飲食，節食"
  },
  "donkey": {
    "pos": "n.",
    "en_def": "an animal like a small horse with long ears",
    "cn_def": "驢"
  },
  "diamond": {
    "pos": "n.",
    "en_def": "a very hard, clear, expensive stone used in rings",
    "cn_def": "鑽石"
  },
  "distance": {
    "pos": "n.",
    "en_def": "how far it is between two places",
    "cn_def": "距離"
  },
  "dolphin": {
    "pos": "n.",
    "en_def": "a smart sea animal that looks like a big fish and jumps out of the water",
    "cn_def": "海豚"
  },
  "difficulty": {
    "pos": "n.",
    "en_def": "a problem; something that is hard to do",
    "cn_def": "困難，難題"
  },
  "direction": {
    "pos": "n.",
    "en_def": "words that tell you how to get to a place or how to do something",
    "cn_def": "方向，指導"
  },
  "difference": {
    "pos": "n.",
    "en_def": "the way in which two things are not the same",
    "cn_def": "差異，區別"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk about something",
    "cn_def": "討論，商談"
  },
  "dizzy": {
    "pos": "adj.",
    "en_def": "feeling that everything is turning around you",
    "cn_def": "頭暈的"
  },
  "diligent": {
    "pos": "adj.",
    "en_def": "working hard and carefully",
    "cn_def": "勤勉的，勤奮的"
  },
  "deaf": {
    "pos": "adj.",
    "en_def": "not able to hear",
    "cn_def": "聾的，失聰的"
  },
  "daily": {
    "pos": "adj.",
    "en_def": "happening or coming out every day",
    "cn_def": "每日的，日常的"
  },
  "dinosaur": {
    "pos": "n.",
    "en_def": "a very big animal that lived millions of years ago",
    "cn_def": "恐龍"
  },
  "diplomat": {
    "pos": "n.",
    "en_def": "a person who works for his or her country in another country",
    "cn_def": "外交官"
  },
  "disappeared": {
    "pos": "v.",
    "en_def": "to go away so that no one can see it",
    "cn_def": "消失，不見"
  },
  "divided": {
    "pos": "v.",
    "en_def": "to cut or break something into parts",
    "cn_def": "分開，劃分"
  },
  "discussed": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論，商議"
  },
  "directed": {
    "pos": "v.",
    "en_def": "to tell actors what to do in a play or movie",
    "cn_def": "指導，指揮"
  },
  "directions": {
    "pos": "n.",
    "en_def": "words that tell you how to get to a place or how to do something",
    "cn_def": "方向，指導"
  },
  "differences": {
    "pos": "n.",
    "en_def": "the way in which two things are not the same",
    "cn_def": "差異，區別"
  },
  "distances": {
    "pos": "n.",
    "en_def": "how far it is between two places",
    "cn_def": "距離"
  },
  "dinosaurs": {
    "pos": "n.",
    "en_def": "a very big animal that lived millions of years ago",
    "cn_def": "恐龍"
  },
  "discovered": {
    "pos": "v.",
    "en_def": "to find something for the first time",
    "cn_def": "發現，找到"
  },
  "disappear": {
    "pos": "v.",
    "en_def": "to go away so that no one can see it",
    "cn_def": "消失，不見"
  },
  "divide": {
    "pos": "v.",
    "en_def": "to cut or break something into parts",
    "cn_def": "分開，劃分"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論，商議"
  },
  "direct": {
    "pos": "v.",
    "en_def": "to tell actors what to do in a play or movie",
    "cn_def": "指導，指揮"
  },
  "discover": {
    "pos": "v.",
    "en_def": "to find something for the first time",
    "cn_def": "發現，找到"
  },
  "dodge ball": {
    "pos": "n.",
    "en_def": "a game in which players throw balls at each other and try not to get hit",
    "cn_def": "躲避球"
  }
};

const EXTRA_GLOSSES = {};
