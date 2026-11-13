// Unit 12 Quiz Data: elder – everywhere
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U12 - elder – everywhere",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "elder",
    "pos": "adj.",
    "cn_def": "年長的",
    "en_def": "older (of two people in a family)",
    "sentence": "She took care of her {{BLANK}} brother.",
    "cn": "她照顧她的哥哥。"
  },
  {
    "word": "elect",
    "pos": "v.",
    "cn_def": "選舉，選擇",
    "en_def": "to choose someone for a job by voting",
    "sentence": "They {{BLANK}} her as the new president.",
    "cn": "他們選舉她為新總統。"
  },
  {
    "word": "electric",
    "pos": "adj.",
    "cn_def": "電的，電動的",
    "en_def": "using electricity to work",
    "sentence": "They bought an {{BLANK}} car.",
    "cn": "他們買了一輛電動車。"
  },
  {
    "word": "embarrass",
    "pos": "v.",
    "cn_def": "使尷尬",
    "en_def": "to make someone feel shy or silly in front of other people",
    "sentence": "His comments {{BLANK}} her.",
    "cn": "他的評論讓她很尷尬。",
    "alts": [
      "embarrass"
    ]
  },
  {
    "word": "emotion",
    "pos": "n.",
    "cn_def": "情感，情緒",
    "en_def": "a strong feeling, like love, fear, or anger",
    "sentence": "She couldn't hide her {{BLANK}}.",
    "cn": "她無法掩飾她的情感。",
    "alts": [
      "emotion"
    ]
  },
  {
    "word": "emphasize",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to say that something is very important",
    "sentence": "The teacher {{BLANK}} the importance of studying hard.",
    "cn": "老師強調努力學習的重要性。",
    "alts": [
      "emphasizes"
    ]
  },
  {
    "word": "employ",
    "pos": "v.",
    "cn_def": "雇用",
    "en_def": "to give someone a job and pay them",
    "sentence": "The company plans to {{BLANK}} 100 new workers.",
    "cn": "公司計劃雇用100名新員工。"
  },
  {
    "word": "empty",
    "pos": "adj.",
    "cn_def": "空的，無人的",
    "en_def": "with nothing or nobody inside",
    "sentence": "The room was completely {{BLANK}}.",
    "cn": "房間完全空了。"
  },
  {
    "word": "enemy",
    "pos": "n.",
    "cn_def": "敵人",
    "en_def": "a person who hates you or fights against you",
    "sentence": "He made many {{BLANK}} during the war.",
    "cn": "他在戰爭中結下了許多仇敵。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "very active; full of energy",
    "sentence": "She is always so {{BLANK}}.",
    "cn": "她總是這麼精力充沛。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "能量，精力",
    "en_def": "the power to be active and do a lot without getting tired",
    "sentence": "He has a lot of {{BLANK}} for his age.",
    "cn": "他這個年紀精力很充沛。"
  },
  {
    "word": "engine",
    "pos": "n.",
    "cn_def": "引擎，發動機",
    "en_def": "the part of a car or machine that makes it move",
    "sentence": "The car's {{BLANK}} is very powerful.",
    "cn": "這輛車的引擎非常強大。"
  },
  {
    "word": "entrance",
    "pos": "n.",
    "cn_def": "入口",
    "en_def": "the door or gate where you go into a place",
    "sentence": "The {{BLANK}} to the building is around the corner.",
    "cn": "建築物的入口在拐角處。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the air, water, and land around us",
    "sentence": "We need to protect the {{BLANK}}.",
    "cn": "我們需要保護環境。"
  },
  {
    "word": "envy",
    "pos": "v.",
    "cn_def": "嫉妒，羨慕",
    "en_def": "to wish you had what someone else has",
    "sentence": "She couldn't help but {{BLANK}} her friend's success.",
    "cn": "她忍不住嫉妒她朋友的成功。"
  },
  {
    "word": "equal",
    "pos": "adj.",
    "cn_def": "平等的，相等的",
    "en_def": "the same in size, number, or value",
    "sentence": "All people are created {{BLANK}}.",
    "cn": "所有人都是平等的。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "a mistake",
    "sentence": "The document contained several {{BLANK}}.",
    "cn": "文件中包含幾個錯誤。"
  },
  {
    "word": "especially",
    "pos": "adv.",
    "cn_def": "特別地，尤其",
    "en_def": "more than others; more than usual",
    "sentence": "She loves all fruit, {{BLANK}} strawberries.",
    "cn": "她喜歡所有的水果，特別是草莓。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "事件，活動",
    "en_def": "something important that happens",
    "sentence": "The concert was a major {{BLANK}}.",
    "cn": "音樂會是一個重要事件。"
  },
  {
    "word": "everywhere",
    "pos": "adv.",
    "cn_def": "到處",
    "en_def": "in all places",
    "sentence": "There were flowers {{BLANK}}.",
    "cn": "到處都是花。"
  }
];

const MCQS = [
  {
    "q": "She took care of her ______ brother.【年長的】",
    "options": [
      "empty",
      "electric",
      "equal",
      "elder"
    ],
    "answer": 3,
    "cn": "她照顧她的哥哥。",
    "vocabIndex": 0
  },
  {
    "q": "They ______ her as the new president.【選舉，選擇】",
    "options": [
      "embarrassed",
      "emphasized",
      "elected",
      "envy"
    ],
    "answer": 2,
    "cn": "他們選舉她為新總統。",
    "vocabIndex": 1
  },
  {
    "q": "They bought an ______ car.【電的，電動的】",
    "options": [
      "empty",
      "electric",
      "energetic",
      "equal"
    ],
    "answer": 1,
    "cn": "他們買了一輛電動車。",
    "vocabIndex": 2
  },
  {
    "q": "His comments ______ her.【使尷尬】",
    "options": [
      "embarrassed",
      "emphasized",
      "elected",
      "envy"
    ],
    "answer": 0,
    "cn": "他的評論讓她很尷尬。",
    "vocabIndex": 3
  },
  {
    "q": "She couldn't hide her ______.【情感，情緒】",
    "options": [
      "enemies",
      "emotions",
      "errors",
      "engine"
    ],
    "answer": 1,
    "cn": "她無法掩飾她的情感。",
    "vocabIndex": 4
  },
  {
    "q": "The teacher ______ the importance of studying hard.【強調】",
    "options": [
      "elected",
      "embarrassed",
      "employ",
      "emphasized"
    ],
    "answer": 3,
    "cn": "老師強調努力學習的重要性。",
    "vocabIndex": 5
  },
  {
    "q": "The company plans to ______ 100 new workers.【雇用】",
    "options": [
      "envy",
      "embarrassed",
      "employ",
      "elected"
    ],
    "answer": 2,
    "cn": "公司計劃雇用100名新員工。",
    "vocabIndex": 6
  },
  {
    "q": "The room was completely ______.【空的，無人的】",
    "options": [
      "empty",
      "electric",
      "energetic",
      "equal"
    ],
    "answer": 0,
    "cn": "房間完全空了。",
    "vocabIndex": 7
  },
  {
    "q": "He made many ______ during the war.【敵人】",
    "options": [
      "emotions",
      "errors",
      "environment",
      "enemies"
    ],
    "answer": 3,
    "cn": "他在戰爭中結下了許多仇敵。",
    "vocabIndex": 8
  },
  {
    "q": "She is always so ______.【精力充沛的】",
    "options": [
      "equal",
      "elder",
      "energetic",
      "empty"
    ],
    "answer": 2,
    "cn": "她總是這麼精力充沛。",
    "vocabIndex": 9
  },
  {
    "q": "He has a lot of ______ for his age.【能量，精力】",
    "options": [
      "energy",
      "environment",
      "entrance",
      "event"
    ],
    "answer": 0,
    "cn": "他這個年紀精力很充沛。",
    "vocabIndex": 10
  },
  {
    "q": "The car's ______ is very powerful.【引擎，發動機】",
    "options": [
      "event",
      "engine",
      "environment",
      "entrance"
    ],
    "answer": 1,
    "cn": "這輛車的引擎非常強大。",
    "vocabIndex": 11
  },
  {
    "q": "The ______ to the building is around the corner.【入口】",
    "options": [
      "engine",
      "energy",
      "entrance",
      "event"
    ],
    "answer": 2,
    "cn": "建築物的入口在拐角處。",
    "vocabIndex": 12
  },
  {
    "q": "We need to protect the ______.【環境】",
    "options": [
      "environment",
      "energy",
      "engine",
      "event"
    ],
    "answer": 0,
    "cn": "我們需要保護環境。",
    "vocabIndex": 13
  },
  {
    "q": "She couldn't help but ______ her friend's success.【嫉妒，羨慕】",
    "options": [
      "employ",
      "embarrassed",
      "elected",
      "envy"
    ],
    "answer": 3,
    "cn": "她忍不住嫉妒她朋友的成功。",
    "vocabIndex": 14
  },
  {
    "q": "All people are created ______.【平等的，相等的】",
    "options": [
      "elder",
      "equal",
      "electric",
      "energetic"
    ],
    "answer": 1,
    "cn": "所有人都是平等的。",
    "vocabIndex": 15
  },
  {
    "q": "The document contained several ______.【錯誤】",
    "options": [
      "errors",
      "enemies",
      "emotions",
      "engine"
    ],
    "answer": 0,
    "cn": "文件中包含幾個錯誤。",
    "vocabIndex": 16
  },
  {
    "q": "She loves all fruit, ______ strawberries.【特別地，尤其】",
    "options": [
      "everywhere",
      "forward",
      "especially",
      "suddenly"
    ],
    "answer": 2,
    "cn": "她喜歡所有的水果，特別是草莓。",
    "vocabIndex": 17
  },
  {
    "q": "The concert was a major ______.【事件，活動】",
    "options": [
      "entrance",
      "event",
      "engine",
      "energy"
    ],
    "answer": 1,
    "cn": "音樂會是一個重要事件。",
    "vocabIndex": 18
  },
  {
    "q": "There were flowers ______.【到處】",
    "options": [
      "especially",
      "therefore",
      "rather",
      "everywhere"
    ],
    "answer": 3,
    "cn": "到處都是花。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "elder": {
    "pos": "adj.",
    "en_def": "older (of two people in a family)",
    "cn_def": "年長的"
  },
  "elected": {
    "pos": "v.",
    "en_def": "to choose someone for a job by voting",
    "cn_def": "選舉，選擇"
  },
  "electric": {
    "pos": "adj.",
    "en_def": "using electricity to work",
    "cn_def": "電的，電動的"
  },
  "embarrassed": {
    "pos": "v.",
    "en_def": "to make someone feel shy or silly in front of other people",
    "cn_def": "使尷尬"
  },
  "emotions": {
    "pos": "n.",
    "en_def": "a strong feeling, like love, fear, or anger",
    "cn_def": "情感，情緒"
  },
  "emphasized": {
    "pos": "v.",
    "en_def": "to say that something is very important",
    "cn_def": "強調"
  },
  "employ": {
    "pos": "v.",
    "en_def": "to give someone a job and pay them",
    "cn_def": "雇用"
  },
  "empty": {
    "pos": "adj.",
    "en_def": "with nothing or nobody inside",
    "cn_def": "空的，無人的"
  },
  "enemies": {
    "pos": "n.",
    "en_def": "a person who hates you or fights against you",
    "cn_def": "敵人"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "very active; full of energy",
    "cn_def": "精力充沛的"
  },
  "energy": {
    "pos": "n.",
    "en_def": "the power to be active and do a lot without getting tired",
    "cn_def": "能量，精力"
  },
  "engine": {
    "pos": "n.",
    "en_def": "the part of a car or machine that makes it move",
    "cn_def": "引擎，發動機"
  },
  "entrance": {
    "pos": "n.",
    "en_def": "the door or gate where you go into a place",
    "cn_def": "入口"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the air, water, and land around us",
    "cn_def": "環境"
  },
  "envy": {
    "pos": "v.",
    "en_def": "to wish you had what someone else has",
    "cn_def": "嫉妒，羨慕"
  },
  "equal": {
    "pos": "adj.",
    "en_def": "the same in size, number, or value",
    "cn_def": "平等的，相等的"
  },
  "errors": {
    "pos": "n.",
    "en_def": "a mistake",
    "cn_def": "錯誤"
  },
  "especially": {
    "pos": "adv.",
    "en_def": "more than others; more than usual",
    "cn_def": "特別地，尤其"
  },
  "event": {
    "pos": "n.",
    "en_def": "something important that happens",
    "cn_def": "事件，活動"
  },
  "everywhere": {
    "pos": "adv.",
    "en_def": "in all places",
    "cn_def": "到處"
  },
  "forward": {
    "pos": "adv.",
    "en_def": "toward the front",
    "cn_def": "向前"
  },
  "rather": {
    "pos": "adv.",
    "en_def": "more willingly (used with \"would\")",
    "cn_def": "寧願，倒不如說"
  },
  "suddenly": {
    "pos": "adv.",
    "en_def": "quickly and when you do not expect it",
    "cn_def": "突然地，忽然"
  },
  "therefore": {
    "pos": "adv.",
    "en_def": "so; for that reason",
    "cn_def": "因此，所以"
  }
};

const EXTRA_GLOSSES = {};
