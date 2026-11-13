// Part 4 Quiz Data: implementation – obviously
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 4 Part 4 - implementation – obviously",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "implementation",
    "pos": "n.",
    "cn_def": "實施",
    "en_def": "putting a plan into action",
    "sentence": "Proper {{BLANK}} of the strategy is crucial to its success.",
    "cn": "正確實施該策略對其成功至關重要。"
  },
  {
    "word": "imply",
    "pos": "v.",
    "cn_def": "暗示",
    "en_def": "to suggest something without saying it directly",
    "sentence": "His silence seemed to {{BLANK}} agreement.",
    "cn": "他的沉默似乎暗示了同意。"
  },
  {
    "word": "implied",
    "pos": "adj.",
    "cn_def": "含蓄的",
    "en_def": "suggested but not said directly",
    "sentence": "The {{BLANK}} meaning of his statement was clear to everyone in the room.",
    "cn": "他的陳述中的含蓄意義對房間裡的每個人都很清楚。"
  },
  {
    "word": "implication",
    "pos": "n.",
    "cn_def": "含意",
    "en_def": "a possible effect or result",
    "sentence": "The {{BLANK}} of his words is that he's not satisfied with the results.",
    "cn": "他的話意味著他對結果不滿意。"
  },
  {
    "word": "impose",
    "pos": "v.",
    "cn_def": "強加於",
    "en_def": "to force a rule or burden on someone",
    "sentence": "The government decided to {{BLANK}} new taxes to the citizens.",
    "cn": "政府決定向市民徵收新稅。"
  },
  {
    "word": "imposed",
    "pos": "adj.",
    "cn_def": "被強加的",
    "en_def": "forced on someone",
    "sentence": "The {{BLANK}} regulations were not popular among the business community.",
    "cn": "被強加的規定在商業界並不受歡迎。"
  },
  {
    "word": "integrate",
    "pos": "v.",
    "cn_def": "整合",
    "en_def": "to combine things to work together",
    "sentence": "Companies often strive to {{BLANK}} technology into their daily operations.",
    "cn": "公司通常努力將技術整合到其日常運營中。"
  },
  {
    "word": "integrated",
    "pos": "adj.",
    "cn_def": "整合的",
    "en_def": "combined into one system",
    "sentence": "The system is {{BLANK}} with other software for better efficiency.",
    "cn": "該系統與其他軟件整合，以提高效率。"
  },
  {
    "word": "integration",
    "pos": "n.",
    "cn_def": "整合",
    "en_def": "the act of combining things together",
    "sentence": "The {{BLANK}} of different departments led to smoother operations.",
    "cn": "不同部門的整合導致了更順暢的運營。"
  },
  {
    "word": "internal",
    "pos": "adj.",
    "cn_def": "內部的",
    "en_def": "inside a place, body or group",
    "sentence": "The company had to deal with an {{BLANK}} issue that affected staff morale.",
    "cn": "該公司不得不處理影響員工士氣的內部問題。"
  },
  {
    "word": "internalize",
    "pos": "v.",
    "cn_def": "內化",
    "en_def": "to make an idea part of your beliefs",
    "sentence": "It's important to {{BLANK}} the values taught to us from a young age.",
    "cn": "內化從小就教給我們的價值觀是很重要的。"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查",
    "en_def": "to try to find out the facts about something",
    "sentence": "The detective decided to {{BLANK}} the mysterious circumstances surrounding the incident.",
    "cn": "侦探决定調查事件周圍的神秘情況。"
  },
  {
    "word": "investigation",
    "pos": "n.",
    "cn_def": "調查",
    "en_def": "an official search for the facts",
    "sentence": "The results of the {{BLANK}} will be published next month.",
    "cn": "調查結果將於下個月公布。"
  },
  {
    "word": "job",
    "pos": "n.",
    "cn_def": "工作",
    "en_def": "work that you do to earn money",
    "sentence": "Finding a {{BLANK}} in this economy can be quite challenging.",
    "cn": "在這種經濟環境下找工作可能相當具挑戰性。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤",
    "en_def": "a piece of paper on something that gives information",
    "sentence": "Always read the {{BLANK}} before using a new product.",
    "cn": "使用新產品前，請務必閱讀標籤。"
  },
  {
    "word": "label",
    "pos": "v.",
    "cn_def": "貼標籤",
    "en_def": "to put a label on something",
    "sentence": "They decided to {{BLANK}} the items based on their importance.",
    "cn": "他們決定根據物品的重要性給它們貼標籤。"
  },
  {
    "word": "mechanism",
    "pos": "n.",
    "cn_def": "機制",
    "en_def": "a part of a machine or system that does a job",
    "sentence": "The {{BLANK}} behind the process is intricate and precise.",
    "cn": "這個過程背後的機制既複雜又精確。"
  },
  {
    "word": "obvious",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "easy to see or understand",
    "sentence": "It's {{BLANK}} that he's not telling the truth based on his body language.",
    "cn": "從他的肢體語言來看，他明顯沒有說實話。"
  },
  {
    "word": "obviously",
    "pos": "adv.",
    "cn_def": "明顯地",
    "en_def": "clearly; as anyone can see",
    "sentence": "{{BLANK}} , the team has put in a lot of effort to achieve this result.",
    "cn": "顯然，團隊付出了很多努力才達到這個結果。"
  }
];

const MCQS = [
  {
    "q": "Proper ______ of the strategy is crucial to its success.",
    "options": [
      "implementation",
      "summary",
      "contrast",
      "dimension"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "His silence seemed to ______ agreement.",
    "options": [
      "cycle",
      "hypothesize",
      "label",
      "imply"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The ______ meaning of his statement was clear to everyone in the room.",
    "options": [
      "unpredicted",
      "undertaken",
      "implied",
      "domestic"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The ______ of his words is that he's not satisfied with the results.",
    "options": [
      "hypothesis",
      "implication",
      "resolution",
      "series"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The government decided to ______ new taxes to the citizens.",
    "options": [
      "take...for granted",
      "communicate with",
      "be under stress",
      "impose ...to"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The ______ regulations were not popular among the business community.",
    "options": [
      "adequate",
      "parallel",
      "imposed",
      "dimensional"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Companies often strive to ______ technology into their daily operations.",
    "options": [
      "integrate",
      "label",
      "investigate",
      "occupy"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The system is ______ with other software for better efficiency.",
    "options": [
      "attributed",
      "integrated",
      "domestic",
      "unpredicted"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The ______ of different departments led to smoother operations.",
    "options": [
      "integration",
      "statistics",
      "principle",
      "goal"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company had to deal with an ______ issue that affected staff morale.",
    "options": [
      "domestic",
      "attributed",
      "imposed",
      "internal"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "It's important to ______ the values taught to us from a young age.",
    "options": [
      "contrast",
      "predict",
      "internalize",
      "access"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The detective decided to ______ the mysterious circumstances surrounding the incident.",
    "options": [
      "project",
      "investigate",
      "contrast",
      "access"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The results of the ______ will be published next month.",
    "options": [
      "status",
      "promotion",
      "investigation",
      "label"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Finding a ______ in this economy can be quite challenging.",
    "options": [
      "job",
      "conference",
      "sum",
      "option"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Always read the ______ before using a new product.",
    "options": [
      "option",
      "label",
      "grant",
      "phase"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "They decided to ______ the items based on their importance.",
    "options": [
      "implement",
      "hypothesize",
      "internalize",
      "label"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The ______ behind the process is intricate and precise.",
    "options": [
      "series",
      "mechanism",
      "debate",
      "cycling"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "It's ______ that he's not telling the truth based on his body language.",
    "options": [
      "emergent",
      "occupied",
      "undertaken",
      "obvious"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "______ , the team has put in a lot of effort to achieve this result.",
    "options": [
      "obviously",
      "approximately",
      "undertaking",
      "adequately"
    ],
    "answer": 0,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "implementation": {
    "pos": "n.",
    "en_def": "putting a plan into action",
    "cn_def": "實施",
    "combined": [
      {
        "pos": "n.",
        "en_def": "putting a plan into action",
        "cn_def": "實施"
      }
    ]
  },
  "imply": {
    "pos": "v.",
    "en_def": "to suggest something without saying it directly",
    "cn_def": "暗示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest something without saying it directly",
        "cn_def": "暗示"
      }
    ]
  },
  "implied": {
    "pos": "adj.",
    "en_def": "suggested but not said directly",
    "cn_def": "含蓄的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "suggested but not said directly",
        "cn_def": "含蓄的"
      }
    ]
  },
  "implication": {
    "pos": "n.",
    "en_def": "a possible effect or result",
    "cn_def": "含意",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a possible effect or result",
        "cn_def": "含意"
      }
    ]
  },
  "impose ...to": {
    "pos": "v.",
    "en_def": "to force a rule or burden on someone",
    "cn_def": "強加於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to force a rule or burden on someone",
        "cn_def": "強加於"
      }
    ]
  },
  "impose": {
    "pos": "v.",
    "en_def": "to force a rule or burden on someone",
    "cn_def": "強加於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to force a rule or burden on someone",
        "cn_def": "強加於"
      }
    ]
  },
  "imposed": {
    "pos": "adj.",
    "en_def": "forced on someone",
    "cn_def": "被強加的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "forced on someone",
        "cn_def": "被強加的"
      }
    ]
  },
  "integrate": {
    "pos": "v.",
    "en_def": "to combine things to work together",
    "cn_def": "整合",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to combine things to work together",
        "cn_def": "整合"
      }
    ]
  },
  "integrated": {
    "pos": "adj.",
    "en_def": "combined into one system",
    "cn_def": "整合的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "combined into one system",
        "cn_def": "整合的"
      }
    ]
  },
  "integration": {
    "pos": "n.",
    "en_def": "the act of combining things together",
    "cn_def": "整合",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of combining things together",
        "cn_def": "整合"
      }
    ]
  },
  "internal": {
    "pos": "adj.",
    "en_def": "inside a place, body or group",
    "cn_def": "內部的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "inside a place, body or group",
        "cn_def": "內部的"
      }
    ]
  },
  "internalize": {
    "pos": "v.",
    "en_def": "to make an idea part of your beliefs",
    "cn_def": "內化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an idea part of your beliefs",
        "cn_def": "內化"
      }
    ]
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to try to find out the facts about something",
    "cn_def": "調查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to try to find out the facts about something",
        "cn_def": "調查"
      }
    ]
  },
  "investigation": {
    "pos": "n.",
    "en_def": "an official search for the facts",
    "cn_def": "調查",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official search for the facts",
        "cn_def": "調查"
      }
    ]
  },
  "job": {
    "pos": "n.",
    "en_def": "work that you do to earn money",
    "cn_def": "工作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "work that you do to earn money",
        "cn_def": "工作"
      }
    ]
  },
  "label": {
    "pos": "n.",
    "en_def": "a piece of paper on something that gives information",
    "cn_def": "標籤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of paper on something that gives information",
        "cn_def": "標籤"
      },
      {
        "pos": "v.",
        "en_def": "to put a label on something",
        "cn_def": "貼標籤"
      }
    ]
  },
  "mechanism": {
    "pos": "n.",
    "en_def": "a part of a machine or system that does a job",
    "cn_def": "機制",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of a machine or system that does a job",
        "cn_def": "機制"
      }
    ]
  },
  "obvious": {
    "pos": "adj.",
    "en_def": "easy to see or understand",
    "cn_def": "明顯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easy to see or understand",
        "cn_def": "明顯的"
      }
    ]
  },
  "obviously": {
    "pos": "adv.",
    "en_def": "clearly; as anyone can see",
    "cn_def": "明顯地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "clearly; as anyone can see",
        "cn_def": "明顯地"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
