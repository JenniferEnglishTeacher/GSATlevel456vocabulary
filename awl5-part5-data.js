// Part 5 Quiz Data: license – monitoring
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 5 Part 5 - license – monitoring",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "license",
    "pos": "n.",
    "cn_def": "許可證",
    "en_def": "an official paper that gives permission",
    "sentence": "Before you can drive, you'll need to obtain a driving {{BLANK}}.",
    "cn": "在您開車之前，您需要獲得駕駛許可證。"
  },
  {
    "word": "logic",
    "pos": "n.",
    "cn_def": "邏輯",
    "en_def": "clear and sensible thinking",
    "sentence": "The {{BLANK}} behind his decision was difficult for others to understand.",
    "cn": "其他人很難理解他的決定背後的邏輯。"
  },
  {
    "word": "logical",
    "pos": "adj.",
    "cn_def": "合邏輯的",
    "en_def": "sensible and reasonable",
    "sentence": "It's only {{BLANK}} to assume that if the weather is cold, one should wear a coat.",
    "cn": "假設天氣寒冷，人們應該穿外套，這只是合邏輯的。"
  },
  {
    "word": "margin",
    "pos": "n.",
    "cn_def": "邊緣",
    "en_def": "the empty space at the side of a page",
    "sentence": "Keep your notes in the {{BLANK}} of the page.",
    "cn": "把你的筆記放在頁面的邊緣。"
  },
  {
    "word": "marginal",
    "pos": "adj.",
    "cn_def": "邊緣的",
    "en_def": "small and not very important",
    "sentence": "There's only a {{BLANK}} difference between the two products.",
    "cn": "這兩種產品之間只有邊緣的差異。"
  },
  {
    "word": "marginalized",
    "pos": "adj.",
    "cn_def": "被邊緣化的",
    "en_def": "treated as unimportant by society",
    "sentence": "{{BLANK}} groups often face more challenges in society.",
    "cn": "被邊緣化的群體在社會上經常面臨更多的挑戰。"
  },
  {
    "word": "medical",
    "pos": "adj.",
    "cn_def": "醫學的",
    "en_def": "about medicine and health",
    "sentence": "He decided to pursue a {{BLANK}} career after his father's illness.",
    "cn": "他的父親生病後，他決定追求醫學職業。"
  },
  {
    "word": "medicine",
    "pos": "n.",
    "cn_def": "藥物",
    "en_def": "a substance used to treat illness",
    "sentence": "The doctor prescribed a new {{BLANK}} to treat her condition.",
    "cn": "醫生開了一種新藥來治療她的病情。"
  },
  {
    "word": "medication",
    "pos": "n.",
    "cn_def": "藥物治療",
    "en_def": "medicine you take to treat an illness",
    "sentence": "He forgot to take his {{BLANK}} this morning, so he felt dizzy.",
    "cn": "他今天早上忘了吃藥，所以感到暈眩。"
  },
  {
    "word": "mental",
    "pos": "adj.",
    "cn_def": "心理的",
    "en_def": "about the mind",
    "sentence": "It's important to take care of both physical and {{BLANK}} health.",
    "cn": "重要的是要照顧身體和心理健康。"
  },
  {
    "word": "mentally",
    "pos": "adv.",
    "cn_def": "心理上地",
    "en_def": "in the mind",
    "sentence": "She felt {{BLANK}} exhausted after the intense debate.",
    "cn": "經過激烈的辯論後，她感到心理上很累。"
  },
  {
    "word": "physical",
    "pos": "adj.",
    "cn_def": "身體的",
    "en_def": "about the body",
    "sentence": "Regular exercise is important for {{BLANK}} well-being.",
    "cn": "定期運動對身體健康很重要。"
  },
  {
    "word": "modify",
    "pos": "v.",
    "cn_def": "修改",
    "en_def": "to change something a little",
    "sentence": "They decided to {{BLANK}} the plan to accommodate the new changes.",
    "cn": "他們決定修改計劃以適應新的變化。"
  },
  {
    "word": "modified",
    "pos": "adj.",
    "cn_def": "已修改的",
    "en_def": "changed a little",
    "sentence": "The {{BLANK}} version of the software has many new features.",
    "cn": "軟件的修改版本有許多新功能。"
  },
  {
    "word": "genetically modified",
    "pos": "adj.",
    "cn_def": "基因改造的",
    "en_def": "having changed genes",
    "sentence": "Many people debate the safety of {{BLANK}} foods.",
    "cn": "許多人質疑基因改造食品的安全性。"
  },
  {
    "word": "modification",
    "pos": "n.",
    "cn_def": "修改",
    "en_def": "a small change",
    "sentence": "Several {{BLANK}}s to the original design were made to improve performance.",
    "cn": "對原始設計進行了幾次修改以提高性能。"
  },
  {
    "word": "monitor",
    "pos": "n.",
    "cn_def": "監視器",
    "en_def": "a screen that shows pictures",
    "sentence": "She glanced at the {{BLANK}} to check the surveillance footage.",
    "cn": "她看了一眼監視器以檢查監控錄像。"
  },
  {
    "word": "monitor",
    "pos": "v.",
    "cn_def": "監控",
    "en_def": "to watch and check something over time",
    "sentence": "They hired a professional to {{BLANK}} their network for security breaches.",
    "cn": "他們聘請了一名專家來監控他們的網絡，以防止安全漏洞。"
  },
  {
    "word": "monitoring",
    "pos": "n.",
    "cn_def": "監控",
    "en_def": "watching and checking something",
    "sentence": "Regular {{BLANK}} of the servers ensures they operate at optimal performance.",
    "cn": "定期監控伺服器可確保其達到最佳性能。"
  }
];

const MCQS = [
  {
    "q": "Before you can drive, you'll need to obtain a driving ______.",
    "options": [
      "license",
      "welfare",
      "psychology",
      "liberty"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ______ behind his decision was difficult for others to understand.",
    "options": [
      "notification",
      "precision",
      "logic",
      "medicine"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "It's only ______ to assume that if the weather is cold, one should wear a coat.",
    "options": [
      "unaware",
      "logical",
      "academic",
      "imaginative"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Keep your notes in the ______ of the page.",
    "options": [
      "alternation",
      "rejection",
      "notion",
      "margin"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "There's only a ______ difference between the two products.",
    "options": [
      "marginal",
      "-oriented",
      "internal",
      "academic"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "______ groups often face more challenges in society.",
    "options": [
      "logical",
      "objective",
      "marginalized",
      "academic"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "He decided to pursue a ______ career after his father's illness.",
    "options": [
      "expansive",
      "medical",
      "logical",
      "mental"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The doctor prescribed a new ______ to treat her condition.",
    "options": [
      "extension",
      "image",
      "notion",
      "medicine"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "He forgot to take his ______ this morning, so he felt dizzy.",
    "options": [
      "medication",
      "conflict",
      "consultation",
      "network"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "It's important to take care of both physical and ______ health.",
    "options": [
      "imaginary",
      "expansive",
      "mental",
      "extensive"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "She felt ______ exhausted after the intense debate.",
    "options": [
      "academically",
      "mentally",
      "symbolize",
      "precisely"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Regular exercise is important for ______ well-being.",
    "options": [
      "prime",
      "transitional",
      "precise",
      "physical"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "They decided to ______ the plan to accommodate the new changes.",
    "options": [
      "evolve",
      "conflict",
      "modify",
      "notify"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The ______ version of the software has many new features.",
    "options": [
      "mental",
      "energetic",
      "sustainable",
      "modified"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Many people debate the safety of ______ foods.",
    "options": [
      "enable to V",
      "genetically modified",
      "raise awareness",
      "decline in"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Several ______s to the original design were made to improve performance.",
    "options": [
      "modification",
      "monitoring",
      "trend",
      "medicine"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "She glanced at the ______ to check the surveillance footage.",
    "options": [
      "orientation",
      "liberty",
      "monitor",
      "notion"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "They hired a professional to ______ their network for security breaches.",
    "options": [
      "monitor",
      "extend",
      "license",
      "energize"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Regular ______ of the servers ensures they operate at optimal performance.",
    "options": [
      "notification",
      "monitoring",
      "energy",
      "extension"
    ],
    "answer": 1,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "license": {
    "pos": "n.",
    "en_def": "an official paper that gives permission",
    "cn_def": "許可證",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official paper that gives permission",
        "cn_def": "許可證"
      }
    ]
  },
  "logic": {
    "pos": "n.",
    "en_def": "clear and sensible thinking",
    "cn_def": "邏輯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "clear and sensible thinking",
        "cn_def": "邏輯"
      }
    ]
  },
  "logical": {
    "pos": "adj.",
    "en_def": "sensible and reasonable",
    "cn_def": "合邏輯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sensible and reasonable",
        "cn_def": "合邏輯的"
      }
    ]
  },
  "margin": {
    "pos": "n.",
    "en_def": "the empty space at the side of a page",
    "cn_def": "邊緣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the empty space at the side of a page",
        "cn_def": "邊緣"
      }
    ]
  },
  "marginal": {
    "pos": "adj.",
    "en_def": "small and not very important",
    "cn_def": "邊緣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "small and not very important",
        "cn_def": "邊緣的"
      }
    ]
  },
  "marginalized": {
    "pos": "adj.",
    "en_def": "treated as unimportant by society",
    "cn_def": "被邊緣化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "treated as unimportant by society",
        "cn_def": "被邊緣化的"
      }
    ]
  },
  "medical": {
    "pos": "adj.",
    "en_def": "about medicine and health",
    "cn_def": "醫學的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about medicine and health",
        "cn_def": "醫學的"
      }
    ]
  },
  "medicine": {
    "pos": "n.",
    "en_def": "a substance used to treat illness",
    "cn_def": "藥物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance used to treat illness",
        "cn_def": "藥物"
      }
    ]
  },
  "medication": {
    "pos": "n.",
    "en_def": "medicine you take to treat an illness",
    "cn_def": "藥物治療",
    "combined": [
      {
        "pos": "n.",
        "en_def": "medicine you take to treat an illness",
        "cn_def": "藥物治療"
      }
    ]
  },
  "mental": {
    "pos": "adj.",
    "en_def": "about the mind",
    "cn_def": "心理的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about the mind",
        "cn_def": "心理的"
      }
    ]
  },
  "mentally": {
    "pos": "adv.",
    "en_def": "in the mind",
    "cn_def": "心理上地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in the mind",
        "cn_def": "心理上地"
      }
    ]
  },
  "physical": {
    "pos": "adj.",
    "en_def": "about the body",
    "cn_def": "身體的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about the body",
        "cn_def": "身體的"
      }
    ]
  },
  "modify": {
    "pos": "v.",
    "en_def": "to change something a little",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something a little",
        "cn_def": "修改"
      }
    ]
  },
  "modified": {
    "pos": "adj.",
    "en_def": "changed a little",
    "cn_def": "已修改的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "changed a little",
        "cn_def": "已修改的"
      }
    ]
  },
  "genetically modified": {
    "pos": "adj.",
    "en_def": "having changed genes",
    "cn_def": "基因改造的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having changed genes",
        "cn_def": "基因改造的"
      }
    ]
  },
  "modification": {
    "pos": "n.",
    "en_def": "a small change",
    "cn_def": "修改",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small change",
        "cn_def": "修改"
      }
    ]
  },
  "monitor": {
    "pos": "n.",
    "en_def": "a screen that shows pictures",
    "cn_def": "監視器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a screen that shows pictures",
        "cn_def": "監視器"
      },
      {
        "pos": "v.",
        "en_def": "to watch and check something over time",
        "cn_def": "監控"
      }
    ]
  },
  "monitoring": {
    "pos": "n.",
    "en_def": "watching and checking something",
    "cn_def": "監控",
    "combined": [
      {
        "pos": "n.",
        "en_def": "watching and checking something",
        "cn_def": "監控"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
