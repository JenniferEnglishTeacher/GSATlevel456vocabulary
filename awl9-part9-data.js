// Part 9 Quiz Data: unify – volunteer
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 9 Part 9 - unify – volunteer",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "unify",
    "pos": "v.",
    "cn_def": "統一",
    "en_def": "to join things together into one",
    "sentence": "The leader aimed to {{BLANK}} the various factions under a common goal.",
    "cn": "領導者旨在統一各派系以實現共同的目標。"
  },
  {
    "word": "unified",
    "pos": "adj.",
    "cn_def": "統一的",
    "en_def": "joined into one",
    "sentence": "A {{BLANK}} approach was adopted to tackle the complex issue.",
    "cn": "採用了統一的方法來解決複雜的問題。"
  },
  {
    "word": "unite",
    "pos": "v.",
    "cn_def": "團結",
    "en_def": "to join together",
    "sentence": "They decided to {{BLANK}} their efforts to achieve the objective.",
    "cn": "他們決定團結起來努力實現目標。"
  },
  {
    "word": "united",
    "pos": "adj.",
    "cn_def": "團結的",
    "en_def": "joined together as one",
    "sentence": "The {{BLANK}} team worked harmoniously towards success.",
    "cn": "團結的團隊和諧地朝成功努力。"
  },
  {
    "word": "uniform",
    "pos": "adj./n.",
    "cn_def": "統一的/制服",
    "en_def": "the same; a special set of clothes",
    "sentence": "All members of the organization wore a {{BLANK}} to represent unity.",
    "cn": "組織的所有成員都穿著制服以表示團結。"
  },
  {
    "word": "violate",
    "pos": "v.",
    "cn_def": "違反",
    "en_def": "to break a law or rule",
    "sentence": "To {{BLANK}} the law will result in penalties.",
    "cn": "違反法律將導致處罰。"
  },
  {
    "word": "violation",
    "pos": "n.",
    "cn_def": "違反",
    "en_def": "the act of breaking a law or rule",
    "sentence": "The {{BLANK}} of privacy is a serious offense.",
    "cn": "侵犯隱私是嚴重的犯罪。"
  },
  {
    "word": "vision",
    "pos": "n.",
    "cn_def": "視覺",
    "en_def": "a picture of the future you hope for",
    "sentence": "His {{BLANK}} for the company's future included expanding into new markets.",
    "cn": "他對公司未來的視覺包括擴展到新市場。"
  },
  {
    "word": "vision",
    "pos": "v.",
    "cn_def": "設想",
    "en_def": "to imagine a picture of the future",
    "sentence": "He {{BLANK}} a world where clean energy would be accessible to all.",
    "cn": "他設想一個清潔能源對所有人都可訪問的世界。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "about seeing",
    "sentence": "{{BLANK}} aids can significantly enhance the learning experience.",
    "cn": "視覺輔助工具可以顯著增強學習體驗。"
  },
  {
    "word": "visualize",
    "pos": "v.",
    "cn_def": "可視化",
    "en_def": "to form a picture in your mind",
    "sentence": "It's easier to understand complex data when you {{BLANK}} it with graphs and charts.",
    "cn": "當您用圖表和圖表可視化它時，更容易理解複雜的數據。"
  },
  {
    "word": "widespread",
    "pos": "adj.",
    "cn_def": "廣泛的",
    "en_def": "found in many places",
    "sentence": "The {{BLANK}} adoption of smartphones has changed the way we communicate.",
    "cn": "智能手機的廣泛采用改變了我們的交流方式。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "about seeing",
    "sentence": "There was a {{BLANK}} appeal in the design that attracted many customers.",
    "cn": "設計中有一種視覺吸引力，吸引了許多客戶。"
  },
  {
    "word": "voluntary",
    "pos": "adj.",
    "cn_def": "自願的",
    "en_def": "done because you want to",
    "sentence": "They offered {{BLANK}} services to help the community after the natural disaster.",
    "cn": "自然災害後，他們提供自願服務來幫助社區。"
  },
  {
    "word": "volunteer",
    "pos": "v.",
    "cn_def": "自願",
    "en_def": "to offer to do something without being paid",
    "sentence": "Many people chose to {{BLANK}} at local shelters.",
    "cn": "許多人選擇在當地的庇護所自願。"
  },
  {
    "word": "volunteer",
    "pos": "n.",
    "cn_def": "志願者",
    "en_def": "a person who works without being paid",
    "sentence": "The {{BLANK}} dedicated their time and effort to help others.",
    "cn": "志願者奉獻了他們的時間和精力來幫助他人。"
  }
];

const MCQS = [
  {
    "q": "The leader aimed to ______ the various factions under a common goal.",
    "options": [
      "anticipate",
      "overlap",
      "commence",
      "unify"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "A ______ approach was adopted to tackle the complex issue.",
    "options": [
      "active",
      "unified",
      "distorted",
      "incompatible"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "They decided to ______ their efforts to achieve the objective.",
    "options": [
      "converse",
      "attain",
      "unite",
      "reassure"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The ______ team worked harmoniously towards success.",
    "options": [
      "united",
      "relaxed",
      "suspended",
      "temperate"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "All members of the organization wore a ______ to represent unity.",
    "options": [
      "attained",
      "refined",
      "uniform",
      "ethical"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "To ______ the law will result in penalties.",
    "options": [
      "compare",
      "violate",
      "team",
      "diminish"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The ______ of privacy is a serious offense.",
    "options": [
      "format",
      "route",
      "team",
      "violation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "His ______ for the company's future included expanding into new markets.",
    "options": [
      "vision",
      "behalf",
      "distortion",
      "norms"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "He ______ a world where clean energy would be accessible to all.",
    "options": [
      "refine",
      "anticipate",
      "vision",
      "violate"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "______ aids can significantly enhance the learning experience.",
    "options": [
      "inherent",
      "rigid",
      "erosive",
      "visual"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "It's easier to understand complex data when you ______ it with graphs and charts.",
    "options": [
      "erode",
      "visualize",
      "vision",
      "distort"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The ______ adoption of smartphones has changed the way we communicate.",
    "options": [
      "widespread",
      "refined",
      "former",
      "compatible"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "There was a ______ appeal in the design that attracted many customers.",
    "options": [
      "relaxing",
      "visual",
      "former",
      "preliminary"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "They offered ______ services to help the community after the natural disaster.",
    "options": [
      "voluntary",
      "reassured",
      "integral",
      "immature"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Many people chose to ______ at local shelters.",
    "options": [
      "attain",
      "reassure",
      "revolve",
      "volunteer"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The ______ dedicated their time and effort to help others.",
    "options": [
      "refinement",
      "prototype",
      "volunteer",
      "coincidence"
    ],
    "answer": 2,
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "unify": {
    "pos": "v.",
    "en_def": "to join things together into one",
    "cn_def": "統一",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to join things together into one",
        "cn_def": "統一"
      }
    ]
  },
  "unified": {
    "pos": "adj.",
    "en_def": "joined into one",
    "cn_def": "統一的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "joined into one",
        "cn_def": "統一的"
      }
    ]
  },
  "unite": {
    "pos": "v.",
    "en_def": "to join together",
    "cn_def": "團結",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to join together",
        "cn_def": "團結"
      }
    ]
  },
  "united": {
    "pos": "adj.",
    "en_def": "joined together as one",
    "cn_def": "團結的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "joined together as one",
        "cn_def": "團結的"
      }
    ]
  },
  "uniform": {
    "pos": "adj./n.",
    "en_def": "the same; a special set of clothes",
    "cn_def": "統一的/制服",
    "combined": [
      {
        "pos": "adj./n.",
        "en_def": "the same; a special set of clothes",
        "cn_def": "統一的/制服"
      }
    ]
  },
  "violate": {
    "pos": "v.",
    "en_def": "to break a law or rule",
    "cn_def": "違反",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to break a law or rule",
        "cn_def": "違反"
      }
    ]
  },
  "violation": {
    "pos": "n.",
    "en_def": "the act of breaking a law or rule",
    "cn_def": "違反",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of breaking a law or rule",
        "cn_def": "違反"
      }
    ]
  },
  "vision": {
    "pos": "n.",
    "en_def": "a picture of the future you hope for",
    "cn_def": "視覺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a picture of the future you hope for",
        "cn_def": "視覺"
      },
      {
        "pos": "v.",
        "en_def": "to imagine a picture of the future",
        "cn_def": "設想"
      }
    ]
  },
  "visual": {
    "pos": "adj.",
    "en_def": "about seeing",
    "cn_def": "視覺的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about seeing",
        "cn_def": "視覺的"
      },
      {
        "pos": "adj.",
        "en_def": "about seeing",
        "cn_def": "視覺的"
      }
    ]
  },
  "visualize": {
    "pos": "v.",
    "en_def": "to form a picture in your mind",
    "cn_def": "可視化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to form a picture in your mind",
        "cn_def": "可視化"
      }
    ]
  },
  "widespread": {
    "pos": "adj.",
    "en_def": "found in many places",
    "cn_def": "廣泛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "found in many places",
        "cn_def": "廣泛的"
      }
    ]
  },
  "voluntary": {
    "pos": "adj.",
    "en_def": "done because you want to",
    "cn_def": "自願的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done because you want to",
        "cn_def": "自願的"
      }
    ]
  },
  "volunteer": {
    "pos": "v.",
    "en_def": "to offer to do something without being paid",
    "cn_def": "自願",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to offer to do something without being paid",
        "cn_def": "自願"
      },
      {
        "pos": "n.",
        "en_def": "a person who works without being paid",
        "cn_def": "志願者"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
