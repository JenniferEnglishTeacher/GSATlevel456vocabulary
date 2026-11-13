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
    "q": "She received a ______ ring for her birthday.【鑽石】",
    "options": [
      "diet",
      "diamond",
      "dolphin",
      "dodge ball"
    ],
    "answer": 1,
    "cn": "她生日收到了鑽石戒指。",
    "vocabIndex": 0
  },
  {
    "q": "She writes in her ______ every night.【日記】",
    "options": [
      "dinosaur",
      "donkey",
      "diary",
      "distance"
    ],
    "answer": 2,
    "cn": "她每晚都寫日記。",
    "vocabIndex": 1
  },
  {
    "q": "She is on a strict ______.【飲食，節食】",
    "options": [
      "diet",
      "dinosaur",
      "distance",
      "discussion"
    ],
    "answer": 0,
    "cn": "她在嚴格節食。",
    "vocabIndex": 2
  },
  {
    "q": "There is a big ______ between the two plans.【差異，區別】",
    "options": [
      "discussion",
      "diamond",
      "distance",
      "difference"
    ],
    "answer": 3,
    "cn": "這兩個計劃之間有很大的差異。",
    "vocabIndex": 3
  },
  {
    "q": "He had ______ solving the problem.【困難，難題】",
    "options": [
      "distance",
      "difficulty",
      "diet",
      "dinosaur"
    ],
    "answer": 1,
    "cn": "他解決這個問題有困難。",
    "vocabIndex": 4
  },
  {
    "q": "She is a very ______ student.【勤勉的，勤奮的】",
    "options": [
      "diligent",
      "dizzy",
      "calm",
      "evil"
    ],
    "answer": 0,
    "cn": "她是個非常勤奮的學生。",
    "vocabIndex": 5
  },
  {
    "q": "The museum has a new ______ exhibit.【恐龍】",
    "options": [
      "donkey",
      "distance",
      "dinosaur",
      "diplomat"
    ],
    "answer": 2,
    "cn": "博物館有一個新的恐龍展覽。",
    "vocabIndex": 6
  },
  {
    "q": "He is a well-known ______.【外交官】",
    "options": [
      "diamond",
      "discussion",
      "dinosaur",
      "diplomat"
    ],
    "answer": 3,
    "cn": "他是一位著名的外交官。",
    "vocabIndex": 7
  },
  {
    "q": "She ______ the play with great skill.【指導，指揮】",
    "options": [
      "disappeared",
      "divided",
      "directed",
      "discovered"
    ],
    "answer": 2,
    "cn": "她很熟練地指導了這齣戲。",
    "vocabIndex": 8
  },
  {
    "q": "We need to follow the ______ to find the place.【方向，指導】",
    "options": [
      "diet",
      "directions",
      "diamond",
      "difference"
    ],
    "answer": 1,
    "cn": "我們需要按照指示找到那個地方。",
    "vocabIndex": 9
  },
  {
    "q": "The sun ______ behind the clouds.【消失，不見】",
    "options": [
      "divided",
      "directed",
      "discovered",
      "disappeared"
    ],
    "answer": 3,
    "cn": "太陽消失在雲層後面。",
    "vocabIndex": 10
  },
  {
    "q": "They ______ a new species of bird.【發現，找到】",
    "options": [
      "discovered",
      "directed",
      "divided",
      "disappeared"
    ],
    "answer": 0,
    "cn": "他們發現了一個新鳥種。",
    "vocabIndex": 11
  },
  {
    "q": "Let's ______ the plan in detail.【討論，商議】",
    "options": [
      "directed",
      "discuss",
      "divided",
      "discovered"
    ],
    "answer": 1,
    "cn": "我們詳細討論一下這個計劃。",
    "vocabIndex": 12
  },
  {
    "q": "The ______ was very productive.【討論，商談】",
    "options": [
      "diary",
      "difficulty",
      "distance",
      "discussion"
    ],
    "answer": 3,
    "cn": "這次討論非常有成效。",
    "vocabIndex": 13
  },
  {
    "q": "The ______ between the two cities is 100 miles.【距離】",
    "options": [
      "dodge ball",
      "diet",
      "distance",
      "diplomat"
    ],
    "answer": 2,
    "cn": "這兩個城市之間的距離是100英里。",
    "vocabIndex": 14
  },
  {
    "q": "The cake was ______ into eight pieces.【分開，劃分】",
    "options": [
      "divided",
      "disappeared",
      "directed",
      "discovered"
    ],
    "answer": 0,
    "cn": "蛋糕被分成八塊。",
    "vocabIndex": 15
  },
  {
    "q": "She felt ______ after riding the roller coaster.【頭暈的】",
    "options": [
      "diligent",
      "dizzy",
      "humid",
      "usual"
    ],
    "answer": 1,
    "cn": "她坐過山車後感到頭暈。",
    "vocabIndex": 16
  },
  {
    "q": "They played ______ during gym class.【躲避球】",
    "options": [
      "difference",
      "diamond",
      "dodge ball",
      "difficulty"
    ],
    "answer": 2,
    "cn": "他們在體育課上玩躲避球。",
    "vocabIndex": 17
  },
  {
    "q": "The ______ jumped out of the water.【海豚】",
    "options": [
      "diplomat",
      "dinosaur",
      "donkey",
      "dolphin"
    ],
    "answer": 3,
    "cn": "海豚跳出了水面。",
    "vocabIndex": 18
  },
  {
    "q": "The ______ carried the heavy load up the hill.【驢】",
    "options": [
      "donkey",
      "diplomat",
      "dinosaur",
      "difficulty"
    ],
    "answer": 0,
    "cn": "驢把重物背上山。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "calm": {
    "pos": "adj.",
    "en_def": "quiet and not worried or excited",
    "cn_def": "冷靜的，平靜的"
  },
  "diamond": {
    "pos": "n.",
    "en_def": "a very hard, clear, expensive stone used in rings",
    "cn_def": "鑽石"
  },
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
  "difference": {
    "pos": "n.",
    "en_def": "the way in which two things are not the same",
    "cn_def": "差異，區別"
  },
  "difficulty": {
    "pos": "n.",
    "en_def": "a problem; something that is hard to do",
    "cn_def": "困難，難題"
  },
  "diligent": {
    "pos": "adj.",
    "en_def": "working hard and carefully",
    "cn_def": "勤勉的，勤奮的"
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
  "disappeared": {
    "pos": "v.",
    "en_def": "to go away so that no one can see it",
    "cn_def": "消失，不見"
  },
  "discovered": {
    "pos": "v.",
    "en_def": "to find something for the first time",
    "cn_def": "發現，找到"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論，商議"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk about something",
    "cn_def": "討論，商談"
  },
  "distance": {
    "pos": "n.",
    "en_def": "how far it is between two places",
    "cn_def": "距離"
  },
  "divided": {
    "pos": "v.",
    "en_def": "to cut or break something into parts",
    "cn_def": "分開，劃分"
  },
  "dizzy": {
    "pos": "adj.",
    "en_def": "feeling that everything is turning around you",
    "cn_def": "頭暈的"
  },
  "dodge ball": {
    "pos": "n.",
    "en_def": "a game in which players throw balls at each other and try not to get hit",
    "cn_def": "躲避球"
  },
  "dolphin": {
    "pos": "n.",
    "en_def": "a smart sea animal that looks like a big fish and jumps out of the water",
    "cn_def": "海豚"
  },
  "donkey": {
    "pos": "n.",
    "en_def": "an animal like a small horse with long ears",
    "cn_def": "驢"
  },
  "evil": {
    "pos": "adj.",
    "en_def": "very bad and wanting to hurt people",
    "cn_def": "邪惡的，壞的"
  },
  "humid": {
    "pos": "adj.",
    "en_def": "(of weather) warm and wet",
    "cn_def": "潮濕的，濕熱的"
  },
  "usual": {
    "pos": "adj.",
    "en_def": "normal; happening most of the time",
    "cn_def": "通常的，平常的"
  }
};

const EXTRA_GLOSSES = {};
