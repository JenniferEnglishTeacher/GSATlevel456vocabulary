// Unit 18 Quiz Data: adapt – transplant
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "4000 Essential Words Book 4 U18 - adapt – transplant",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "適應",
    "en_def": "to change in order to fit a new situation",
    "sentence": "It took the children a few months to {{BLANK}} to their new school.",
    "cn": "孩子們花了幾個月才適應新學校。"
  },
  {
    "word": "biological",
    "pos": "adj.",
    "cn_def": "生物的；親生的",
    "en_def": "relating to living things; related by birth",
    "sentence": "She met her {{BLANK}} mother for the first time at the age of twenty.",
    "cn": "她二十歲時第一次見到親生母親。"
  },
  {
    "word": "cellular",
    "pos": "adj.",
    "cn_def": "細胞的",
    "en_def": "relating to the cells of living things",
    "sentence": "The disease causes damage at the {{BLANK}} level, deep inside the body.",
    "cn": "這種疾病在細胞層次上造成損害，深入體內。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "有活力的",
    "en_def": "full of energy and new ideas",
    "sentence": "The {{BLANK}} young teacher made every class exciting.",
    "cn": "那位充滿活力的年輕老師讓每堂課都很精彩。"
  },
  {
    "word": "fantasy",
    "pos": "n.",
    "cn_def": "幻想",
    "en_def": "something pleasant that you imagine but that is not real",
    "sentence": "His {{BLANK}} is to fly to the moon in his own rocket.",
    "cn": "他的幻想是搭自己的火箭飛到月球。"
  },
  {
    "word": "heredity",
    "pos": "n.",
    "cn_def": "遺傳",
    "en_def": "the passing of qualities from parents to children",
    "sentence": "Eye color is decided by {{BLANK}}, not by what you eat.",
    "cn": "眼睛的顏色由遺傳決定，而不是你吃的東西。"
  },
  {
    "word": "internal",
    "pos": "adj.",
    "cn_def": "內部的；體內的",
    "en_def": "inside the body or inside a place",
    "sentence": "He had no cuts, but the doctor found {{BLANK}} injuries.",
    "cn": "他身上沒有傷口，但醫生發現有內傷。"
  },
  {
    "word": "minimal",
    "pos": "adj.",
    "cn_def": "極小的；最低限度的",
    "en_def": "very small in amount",
    "sentence": "The storm caused only {{BLANK}} damage; just a few leaves fell.",
    "cn": "這場暴風雨只造成極小的損害，僅有幾片葉子掉落。"
  },
  {
    "word": "pioneer",
    "pos": "n.",
    "cn_def": "先驅；拓荒者",
    "en_def": "one of the first people to do something new",
    "sentence": "She was a {{BLANK}} in heart surgery and trained hundreds of doctors.",
    "cn": "她是心臟外科的先驅，培訓了數百名醫生。"
  },
  {
    "word": "prescribe",
    "pos": "v.",
    "cn_def": "開（藥方）",
    "en_def": "(of a doctor) to say what medicine a patient should take",
    "sentence": "The doctor will {{BLANK}} some medicine for your cough.",
    "cn": "醫生會為你的咳嗽開一些藥。"
  },
  {
    "word": "respective",
    "pos": "adj.",
    "cn_def": "各自的",
    "en_def": "belonging to each one separately",
    "sentence": "After the meeting, the teachers returned to their {{BLANK}} classrooms.",
    "cn": "會議後，老師們回到各自的教室。"
  },
  {
    "word": "rigid",
    "pos": "adj.",
    "cn_def": "堅硬的；嚴格的",
    "en_def": "stiff and hard to bend; not able to be changed",
    "sentence": "The tent is held up by a {{BLANK}} metal frame.",
    "cn": "這頂帳篷由堅硬的金屬骨架支撐。"
  },
  {
    "word": "sequence",
    "pos": "n.",
    "cn_def": "順序；一連串",
    "en_def": "the order in which things happen or are arranged",
    "sentence": "Put the pictures in the correct {{BLANK}} to tell the story.",
    "cn": "把圖片按正確順序排列來說故事。"
  },
  {
    "word": "similar",
    "pos": "adj.",
    "cn_def": "相似的",
    "en_def": "almost the same",
    "sentence": "The two sisters have {{BLANK}} voices, so I often mix them up on the phone.",
    "cn": "這對姊妹的聲音很像，所以我在電話裡常常搞混。"
  },
  {
    "word": "substitute",
    "pos": "v.",
    "cn_def": "用…代替",
    "en_def": "to use one thing in place of another",
    "sentence": "You can {{BLANK}} honey for sugar in this cake recipe.",
    "cn": "在這份蛋糕食譜中，你可以用蜂蜜代替糖。"
  },
  {
    "word": "surgeon",
    "pos": "n.",
    "cn_def": "外科醫生",
    "en_def": "a doctor who performs operations",
    "sentence": "The {{BLANK}} operated on the boy's heart for six hours.",
    "cn": "外科醫生為那個男孩的心臟動了六小時的手術。"
  },
  {
    "word": "therapy",
    "pos": "n.",
    "cn_def": "治療；療法",
    "en_def": "treatment for an illness or injury",
    "sentence": "After the accident, he needed months of physical {{BLANK}} to walk again.",
    "cn": "事故後，他需要數月的物理治療才能再次行走。"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "cn_def": "轉移；調動",
    "en_def": "to move from one place to another",
    "sentence": "The company will {{BLANK}} him to its office in Tokyo next year.",
    "cn": "公司明年將把他調到東京辦事處。"
  },
  {
    "word": "transition",
    "pos": "n.",
    "cn_def": "過渡；轉變",
    "en_def": "the process of changing from one state to another",
    "sentence": "The {{BLANK}} from elementary school to junior high can be difficult.",
    "cn": "從小學升上國中的過渡期可能很辛苦。"
  },
  {
    "word": "transplant",
    "pos": "n.",
    "cn_def": "移植",
    "en_def": "an operation in which an organ is moved into another person's body",
    "sentence": "He needs a heart {{BLANK}} to stay alive.",
    "cn": "他需要心臟移植才能活下去。"
  }
];

const MCQS = [
  {
    "q": "It took the children a few months to ______ to their new school.",
    "options": [
      "prescribe",
      "signify",
      "enlarge",
      "adapt"
    ],
    "answer": 3,
    "cn": "孩子們花了幾個月才適應新學校。",
    "vocabIndex": 0
  },
  {
    "q": "She met her ______ mother for the first time at the age of twenty.",
    "options": [
      "biological",
      "similar",
      "minimal",
      "internal"
    ],
    "answer": 0,
    "cn": "她二十歲時第一次見到親生母親。",
    "vocabIndex": 1
  },
  {
    "q": "The disease causes damage at the ______ level, deep inside the body.",
    "options": [
      "rigid",
      "cellular",
      "internal",
      "minimal"
    ],
    "answer": 1,
    "cn": "這種疾病在細胞層次上造成損害，深入體內。",
    "vocabIndex": 2
  },
  {
    "q": "The ______ young teacher made every class exciting.",
    "options": [
      "cellular",
      "internal",
      "dynamic",
      "similar"
    ],
    "answer": 2,
    "cn": "那位充滿活力的年輕老師讓每堂課都很精彩。",
    "vocabIndex": 3
  },
  {
    "q": "His ______ is to fly to the moon in his own rocket.",
    "options": [
      "fantasy",
      "transition",
      "surgeon",
      "sequence"
    ],
    "answer": 0,
    "cn": "他的幻想是搭自己的火箭飛到月球。",
    "vocabIndex": 4
  },
  {
    "q": "Eye color is decided by ______, not by what you eat.",
    "options": [
      "therapy",
      "surgeon",
      "heredity",
      "transplant"
    ],
    "answer": 2,
    "cn": "眼睛的顏色由遺傳決定，而不是你吃的東西。",
    "vocabIndex": 5
  },
  {
    "q": "He had no cuts, but the doctor found ______ injuries.",
    "options": [
      "minimal",
      "cellular",
      "rigid",
      "internal"
    ],
    "answer": 3,
    "cn": "他身上沒有傷口，但醫生發現有內傷。",
    "vocabIndex": 6
  },
  {
    "q": "The storm caused only ______ damage; just a few leaves fell.",
    "options": [
      "similar",
      "minimal",
      "internal",
      "biological"
    ],
    "answer": 1,
    "cn": "這場暴風雨只造成極小的損害，僅有幾片葉子掉落。",
    "vocabIndex": 7
  },
  {
    "q": "She was a ______ in heart surgery and trained hundreds of doctors.",
    "options": [
      "fantasy",
      "surgeon",
      "pioneer",
      "transplant"
    ],
    "answer": 2,
    "cn": "她是心臟外科的先驅，培訓了數百名醫生。",
    "vocabIndex": 8
  },
  {
    "q": "The doctor will ______ some medicine for your cough.",
    "options": [
      "adapt",
      "prescribe",
      "transfer",
      "substitute"
    ],
    "answer": 1,
    "cn": "醫生會為你的咳嗽開一些藥。",
    "vocabIndex": 9
  },
  {
    "q": "After the meeting, the teachers returned to their ______ classrooms.",
    "options": [
      "minimal",
      "cellular",
      "biological",
      "respective"
    ],
    "answer": 3,
    "cn": "會議後，老師們回到各自的教室。",
    "vocabIndex": 10
  },
  {
    "q": "The tent is held up by a ______ metal frame.",
    "options": [
      "rigid",
      "minimal",
      "cellular",
      "respective"
    ],
    "answer": 0,
    "cn": "這頂帳篷由堅硬的金屬骨架支撐。",
    "vocabIndex": 11
  },
  {
    "q": "Put the pictures in the correct ______ to tell the story.",
    "options": [
      "surgeon",
      "heredity",
      "sequence",
      "transplant"
    ],
    "answer": 2,
    "cn": "把圖片按正確順序排列來說故事。",
    "vocabIndex": 12
  },
  {
    "q": "The two sisters have ______ voices, so I often mix them up on the phone.",
    "options": [
      "minimal",
      "similar",
      "dynamic",
      "respective"
    ],
    "answer": 1,
    "cn": "這對姊妹的聲音很像，所以我在電話裡常常搞混。",
    "vocabIndex": 13
  },
  {
    "q": "You can ______ honey for sugar in this cake recipe.",
    "options": [
      "substitute",
      "prescribe",
      "eliminate",
      "furnish"
    ],
    "answer": 0,
    "cn": "在這份蛋糕食譜中，你可以用蜂蜜代替糖。",
    "vocabIndex": 14
  },
  {
    "q": "The ______ operated on the boy's heart for six hours.",
    "options": [
      "heredity",
      "sequence",
      "transition",
      "surgeon"
    ],
    "answer": 3,
    "cn": "外科醫生為那個男孩的心臟動了六小時的手術。",
    "vocabIndex": 15
  },
  {
    "q": "After the accident, he needed months of physical ______ to walk again.",
    "options": [
      "heredity",
      "therapy",
      "fantasy",
      "transition"
    ],
    "answer": 1,
    "cn": "事故後，他需要數月的物理治療才能再次行走。",
    "vocabIndex": 16
  },
  {
    "q": "The company will ______ him to its office in Tokyo next year.",
    "options": [
      "prescribe",
      "employ",
      "transfer",
      "disrupt"
    ],
    "answer": 2,
    "cn": "公司明年將把他調到東京辦事處。",
    "vocabIndex": 17
  },
  {
    "q": "The ______ from elementary school to junior high can be difficult.",
    "options": [
      "therapy",
      "pioneer",
      "heredity",
      "transition"
    ],
    "answer": 3,
    "cn": "從小學升上國中的過渡期可能很辛苦。",
    "vocabIndex": 18
  },
  {
    "q": "He needs a heart ______ to stay alive.",
    "options": [
      "transplant",
      "pioneer",
      "transition",
      "heredity"
    ],
    "answer": 0,
    "cn": "他需要心臟移植才能活下去。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "eliminate": {
    "pos": "v.",
    "en_def": "to remove something completely",
    "cn_def": "消除；淘汰"
  },
  "employ": {
    "pos": "v.",
    "en_def": "to pay someone to work for you",
    "cn_def": "雇用"
  },
  "furnish": {
    "pos": "v.",
    "en_def": "to put furniture in a room or house",
    "cn_def": "為…配置家具"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change in order to fit a new situation",
    "cn_def": "適應"
  },
  "biological": {
    "pos": "adj.",
    "en_def": "relating to living things; related by birth",
    "cn_def": "生物的；親生的"
  },
  "cellular": {
    "pos": "adj.",
    "en_def": "relating to the cells of living things",
    "cn_def": "細胞的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy and new ideas",
    "cn_def": "有活力的"
  },
  "fantasy": {
    "pos": "n.",
    "en_def": "something pleasant that you imagine but that is not real",
    "cn_def": "幻想"
  },
  "heredity": {
    "pos": "n.",
    "en_def": "the passing of qualities from parents to children",
    "cn_def": "遺傳"
  },
  "internal": {
    "pos": "adj.",
    "en_def": "inside the body or inside a place",
    "cn_def": "內部的；體內的"
  },
  "minimal": {
    "pos": "adj.",
    "en_def": "very small in amount",
    "cn_def": "極小的；最低限度的"
  },
  "pioneer": {
    "pos": "n.",
    "en_def": "one of the first people to do something new",
    "cn_def": "先驅；拓荒者"
  },
  "prescribe": {
    "pos": "v.",
    "en_def": "(of a doctor) to say what medicine a patient should take",
    "cn_def": "開（藥方）"
  },
  "respective": {
    "pos": "adj.",
    "en_def": "belonging to each one separately",
    "cn_def": "各自的"
  },
  "rigid": {
    "pos": "adj.",
    "en_def": "stiff and hard to bend; not able to be changed",
    "cn_def": "堅硬的；嚴格的"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "the order in which things happen or are arranged",
    "cn_def": "順序；一連串"
  },
  "similar": {
    "pos": "adj.",
    "en_def": "almost the same",
    "cn_def": "相似的"
  },
  "substitute": {
    "pos": "v.",
    "en_def": "to use one thing in place of another",
    "cn_def": "用…代替"
  },
  "surgeon": {
    "pos": "n.",
    "en_def": "a doctor who performs operations",
    "cn_def": "外科醫生"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment for an illness or injury",
    "cn_def": "治療；療法"
  },
  "transfer": {
    "pos": "v.",
    "en_def": "to move from one place to another",
    "cn_def": "轉移；調動"
  },
  "transition": {
    "pos": "n.",
    "en_def": "the process of changing from one state to another",
    "cn_def": "過渡；轉變"
  },
  "transplant": {
    "pos": "n.",
    "en_def": "an operation in which an organ is moved into another person's body",
    "cn_def": "移植"
  },
  "disrupt": {
    "pos": "v.",
    "en_def": "to stop something from continuing in the normal way",
    "cn_def": "擾亂；中斷"
  },
  "enlarge": {
    "pos": "v.",
    "en_def": "to make something bigger",
    "cn_def": "放大；擴大"
  },
  "signify": {
    "pos": "v.",
    "en_def": "to be a sign of something",
    "cn_def": "表示；意味著"
  }
};

const EXTRA_GLOSSES = {};
