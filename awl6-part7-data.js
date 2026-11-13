// Part 7 Quiz Data: revealed – utility bill
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 6 Part 7 - revealed – utility bill",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "revealed",
    "pos": "adj.",
    "cn_def": "揭示的",
    "en_def": "shown after being hidden",
    "sentence": "The {{BLANK}} information shed light on the motives of the individuals involved.",
    "cn": "揭示的信息揭示了涉及個人的動機。"
  },
  {
    "word": "revelation",
    "pos": "n.",
    "cn_def": "揭示",
    "en_def": "a surprising fact made known",
    "sentence": "The {{BLANK}} that the CEO had been misappropriating funds was shocking to everyone in the company.",
    "cn": "CEO一直在挪用資金的揭示讓公司裡的每個人都感到震驚。"
  },
  {
    "word": "scope",
    "pos": "n.",
    "cn_def": "範圍",
    "en_def": "the range of a subject or activity",
    "sentence": "The {{BLANK}} of the project has expanded to include more communities.",
    "cn": "該項目的範圍已擴大到包括更多社區。"
  },
  {
    "word": "subsidiary",
    "pos": "n.",
    "cn_def": "子公司",
    "en_def": "a company owned by a larger company",
    "sentence": "The parent company has several {{BLANK}} in different regions.",
    "cn": "父公司在不同地區有幾家子公司。"
  },
  {
    "word": "tape",
    "pos": "n.",
    "cn_def": "膠帶",
    "en_def": "a sticky strip used to fasten things",
    "sentence": "She used a strong adhesive {{BLANK}} to fix the broken handle.",
    "cn": "她用強力黏合膠帶修理了斷掉的把手。"
  },
  {
    "word": "trace",
    "pos": "n.",
    "cn_def": "痕迹",
    "en_def": "a small sign that something was there",
    "sentence": "Archaeologists found {{BLANK}} of ancient civilizations at the site.",
    "cn": "考古學家在該地點找到了古文明的痕迹。"
  },
  {
    "word": "trace",
    "pos": "v.",
    "cn_def": "追溯",
    "en_def": "to find the origin of something",
    "sentence": "It's difficult to {{BLANK}} the origins of the legend.",
    "cn": "追溯傳說的起源很困難。"
  },
  {
    "word": "transform",
    "pos": "v.",
    "cn_def": "轉變",
    "en_def": "to change completely",
    "sentence": "The renovation will {{BLANK}} the old building into a modern workspace.",
    "cn": "裝修將把老建築變成現代化的工作空間。"
  },
  {
    "word": "transformation",
    "pos": "n.",
    "cn_def": "轉變",
    "en_def": "a complete change",
    "sentence": "The {{BLANK}} of the city's skyline over the decades is remarkable.",
    "cn": "數十年來，城市天際線的轉變非常顯著。"
  },
  {
    "word": "transport",
    "pos": "n.",
    "cn_def": "運輸",
    "en_def": "a system for moving people or goods",
    "sentence": "The city's {{BLANK}} system is well-developed, with numerous buses, trains, and subway lines.",
    "cn": "該市的運輸系統非常發達，有許多公共汽車、火車和地鐵線路。"
  },
  {
    "word": "transport",
    "pos": "v.",
    "cn_def": "運輸",
    "en_def": "to move people or goods",
    "sentence": "They plan to {{BLANK}} the goods by ship to reduce costs.",
    "cn": "他們計劃通過船運來減少成本。"
  },
  {
    "word": "transportation",
    "pos": "n.",
    "cn_def": "運輸",
    "en_def": "a system for moving people or goods",
    "sentence": "Investments in public {{BLANK}} have significantly improved the connectivity within the city.",
    "cn": "在公共運輸方面的投資顯著提高了城市內的連接性。"
  },
  {
    "word": "underlying",
    "pos": "adj.",
    "cn_def": "基本的",
    "en_def": "basic but not easy to see",
    "sentence": "Understanding the {{BLANK}} principles is crucial for solving complex problems.",
    "cn": "瞭解基本原則對於解決複雜問題至關重要。"
  },
  {
    "word": "utility",
    "pos": "n.",
    "cn_def": "公用事業",
    "en_def": "a service like water or electricity",
    "sentence": "The {{BLANK}} company is responsible for ensuring a steady supply of electricity and water to the residents.",
    "cn": "公用事業公司負責確保向居民提供穩定的電力和水供應。"
  },
  {
    "word": "utility bill",
    "pos": "n.",
    "cn_def": "公用事業賬單",
    "en_def": "a bill for water, gas or electricity",
    "sentence": "She was shocked by the high {{BLANK}} and decided to reduce her energy consumption.",
    "cn": "她對高額的公用事業賬單感到震驚，並決定減少她的能源消耗。"
  }
];

const MCQS = [
  {
    "q": "The ______ information shed light on the motives of the individuals involved.",
    "options": [
      "ignorant",
      "revealed",
      "diverse",
      "exceeding"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The ______ that the CEO had been misappropriating funds was shocking to everyone in the company.",
    "options": [
      "revelation",
      "subsidiary",
      "citation",
      "bonding"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The ______ of the project has expanded to include more communities.",
    "options": [
      "authority",
      "author",
      "accuracy",
      "scope"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The parent company has several ______ in different regions.",
    "options": [
      "edition",
      "instruction",
      "subsidiary",
      "motivation"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "She used a strong adhesive ______ to fix the broken handle.",
    "options": [
      "tape",
      "enhancement",
      "fee",
      "inhibition"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Archaeologists found ______ of ancient civilizations at the site.",
    "options": [
      "flexibility",
      "trace",
      "interval",
      "citation"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "It's difficult to ______ the origins of the legend.",
    "options": [
      "transform",
      "precede",
      "trace",
      "exceed"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The renovation will ______ the old building into a modern workspace.",
    "options": [
      "brief",
      "display",
      "exceed",
      "transform"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The ______ of the city's skyline over the decades is remarkable.",
    "options": [
      "transformation",
      "authority",
      "tape",
      "incorporation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The city's ______ system is well-developed, with numerous buses, trains, and subway lines.",
    "options": [
      "utility",
      "transport",
      "input",
      "instruction"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "They plan to ______ the goods by ship to reduce costs.",
    "options": [
      "reveal",
      "brief",
      "transport",
      "incorporate"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Investments in public ______ have significantly improved the connectivity within the city.",
    "options": [
      "instructor",
      "bonding",
      "transformation",
      "transportation"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Understanding the ______ principles is crucial for solving complex problems.",
    "options": [
      "cooperative",
      "underlying",
      "oversea",
      "revealed"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The ______ company is responsible for ensuring a steady supply of electricity and water to the residents.",
    "options": [
      "acknowledgement",
      "authority",
      "utility",
      "incident"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "She was shocked by the high ______ and decided to reduce her energy consumption.",
    "options": [
      "racial discrimination",
      "cooperate with",
      "be capable of",
      "utility bill"
    ],
    "answer": 3,
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "revealed": {
    "pos": "adj.",
    "en_def": "shown after being hidden",
    "cn_def": "揭示的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "shown after being hidden",
        "cn_def": "揭示的"
      }
    ]
  },
  "revelation": {
    "pos": "n.",
    "en_def": "a surprising fact made known",
    "cn_def": "揭示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a surprising fact made known",
        "cn_def": "揭示"
      }
    ]
  },
  "scope": {
    "pos": "n.",
    "en_def": "the range of a subject or activity",
    "cn_def": "範圍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the range of a subject or activity",
        "cn_def": "範圍"
      }
    ]
  },
  "subsidiary": {
    "pos": "n.",
    "en_def": "a company owned by a larger company",
    "cn_def": "子公司",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a company owned by a larger company",
        "cn_def": "子公司"
      }
    ]
  },
  "tape": {
    "pos": "n.",
    "en_def": "a sticky strip used to fasten things",
    "cn_def": "膠帶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sticky strip used to fasten things",
        "cn_def": "膠帶"
      }
    ]
  },
  "trace": {
    "pos": "n.",
    "en_def": "a small sign that something was there",
    "cn_def": "痕迹",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small sign that something was there",
        "cn_def": "痕迹"
      },
      {
        "pos": "v.",
        "en_def": "to find the origin of something",
        "cn_def": "追溯"
      }
    ]
  },
  "transform": {
    "pos": "v.",
    "en_def": "to change completely",
    "cn_def": "轉變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change completely",
        "cn_def": "轉變"
      }
    ]
  },
  "transformation": {
    "pos": "n.",
    "en_def": "a complete change",
    "cn_def": "轉變",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a complete change",
        "cn_def": "轉變"
      }
    ]
  },
  "transport": {
    "pos": "n.",
    "en_def": "a system for moving people or goods",
    "cn_def": "運輸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a system for moving people or goods",
        "cn_def": "運輸"
      },
      {
        "pos": "v.",
        "en_def": "to move people or goods",
        "cn_def": "運輸"
      }
    ]
  },
  "transportation": {
    "pos": "n.",
    "en_def": "a system for moving people or goods",
    "cn_def": "運輸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a system for moving people or goods",
        "cn_def": "運輸"
      }
    ]
  },
  "underlying": {
    "pos": "adj.",
    "en_def": "basic but not easy to see",
    "cn_def": "基本的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "basic but not easy to see",
        "cn_def": "基本的"
      }
    ]
  },
  "utility": {
    "pos": "n.",
    "en_def": "a service like water or electricity",
    "cn_def": "公用事業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a service like water or electricity",
        "cn_def": "公用事業"
      }
    ]
  },
  "utility bill": {
    "pos": "n.",
    "en_def": "a bill for water, gas or electricity",
    "cn_def": "公用事業賬單",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bill for water, gas or electricity",
        "cn_def": "公用事業賬單"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
