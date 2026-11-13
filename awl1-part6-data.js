// Part 6 Quiz Data: process – specific
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 1 Part 6 - process – specific",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "process",
    "pos": "n.",
    "cn_def": "過程",
    "en_def": "a series of steps to do something",
    "sentence": "The {{BLANK}} of making wine is intricate.",
    "cn": "製作葡萄酒的過程很複雜。"
  },
  {
    "word": "require",
    "pos": "v.",
    "cn_def": "需要",
    "en_def": "to need something",
    "sentence": "This task will {{BLANK}} your full attention.",
    "cn": "這項任務需要你的全部注意力。"
  },
  {
    "word": "required",
    "pos": "adj.",
    "cn_def": "所需的",
    "en_def": "needed; must be done",
    "sentence": "All the {{BLANK}} documents have been submitted.",
    "cn": "所有所需的檔都已提交。"
  },
  {
    "word": "requirement",
    "pos": "n.",
    "cn_def": "要求",
    "en_def": "something that you must have or do",
    "sentence": "One of the job {{BLANK}} is proficiency in English.",
    "cn": "工作要求之一是精通英語。"
  },
  {
    "word": "research",
    "pos": "v.",
    "cn_def": "研究",
    "en_def": "to study something to find new facts",
    "sentence": "She decided to {{BLANK}} the topic thoroughly.",
    "cn": "她決定徹底研究這個話題。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究",
    "en_def": "careful study to find new facts",
    "sentence": "His {{BLANK}} on the subject won an award.",
    "cn": "他對該主題的研究獲得了獎項。"
  },
  {
    "word": "researcher",
    "pos": "n.",
    "cn_def": "研究員",
    "en_def": "a person who studies something to find new facts",
    "sentence": "The {{BLANK}} spent years in the Amazon studying plant life.",
    "cn": "研究員在亞馬遜研究植物生活多年。"
  },
  {
    "word": "made a response to",
    "pos": "phr.",
    "cn_def": "對…做回應",
    "en_def": "to reply to something",
    "sentence": "The president {{BLANK}} the recent allegations.",
    "cn": "總統對最近的指控做出了回應。"
  },
  {
    "word": "in response to",
    "pos": "phr.",
    "cn_def": "作為對...的回應",
    "en_def": "as a reply to something",
    "sentence": "{{BLANK}} the crisis, the government took immediate action.",
    "cn": "作為對危機的回應，政府採取了立即行動。"
  },
  {
    "word": "respond to",
    "pos": "phr.",
    "cn_def": "回應",
    "en_def": "to reply or react to something",
    "sentence": "How did she {{BLANK}} your question?",
    "cn": "她如何回應你的問題？"
  },
  {
    "word": "plays a significant role",
    "pos": "phr.",
    "cn_def": "發揮重要作用",
    "en_def": "to be very important in something",
    "sentence": "Proper nutrition {{BLANK}} in an athlete's performance.",
    "cn": "適當的營養在運動員的表現中發揮重要作用。"
  },
  {
    "word": "section",
    "pos": "n.",
    "cn_def": "部分",
    "en_def": "one part of something",
    "sentence": "Please read this {{BLANK}} of the report for more details.",
    "cn": "請閱讀報告的這一部分以獲取更多詳細資訊。"
  },
  {
    "word": "sector",
    "pos": "n.",
    "cn_def": "部門",
    "en_def": "a part of the economy or society",
    "sentence": "The tech {{BLANK}} has seen rapid growth this year.",
    "cn": "今年，技術部門經歷了快速增長。"
  },
  {
    "word": "significant",
    "pos": "adj.",
    "cn_def": "顯著的",
    "en_def": "large or important",
    "sentence": "There has been a {{BLANK}} increase in sales.",
    "cn": "銷售額有了顯著增長。"
  },
  {
    "word": "significance",
    "pos": "n.",
    "cn_def": "重要性",
    "en_def": "the importance of something",
    "sentence": "The {{BLANK}} of this discovery cannot be understated.",
    "cn": "這一發現的重要性不可低估。"
  },
  {
    "word": "similar to",
    "pos": "phr.",
    "cn_def": "與...相似",
    "en_def": "almost the same as something",
    "sentence": "Her style is {{BLANK}} that of a famous painter.",
    "cn": "她的風格與著名畫家相似。"
  },
  {
    "word": "similarly",
    "pos": "adv.",
    "cn_def": "同樣地",
    "en_def": "in the same way",
    "sentence": "He's an expert in mathematics, and {{BLANK}}, she excels in physics.",
    "cn": "他是數學專家，同樣地，她擅長物理。"
  },
  {
    "word": "source",
    "pos": "n.",
    "cn_def": "來源",
    "en_def": "where something comes from",
    "sentence": "The river is the main {{BLANK}} of water for the town.",
    "cn": "河流是小鎮的主要水源。"
  },
  {
    "word": "resource",
    "pos": "n.",
    "cn_def": "資源",
    "en_def": "something useful, like water, oil or money",
    "sentence": "The country has abundant natural {{BLANK}}.",
    "cn": "該國擁有豐富的自然資源。"
  },
  {
    "word": "specific",
    "pos": "adj.",
    "cn_def": "特定的",
    "en_def": "exact and clear; certain",
    "sentence": "Can you give a more {{BLANK}} example?",
    "cn": "你能給一個更具體的例子嗎？"
  }
];

const MCQS = [
  {
    "q": "The ______ of making wine is intricate.",
    "options": [
      "individual",
      "process",
      "creature",
      "legislator"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "This task will ______ your full attention.",
    "options": [
      "require",
      "issue",
      "distribute",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "All the ______ documents have been submitted.",
    "options": [
      "estimated",
      "beneficial",
      "required",
      "analytical"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "One of the job ______ is proficiency in English.",
    "options": [
      "analysis",
      "resource",
      "significance",
      "requirement"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "She decided to ______ the topic thoroughly.",
    "options": [
      "research",
      "vary",
      "establish",
      "occur"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "His ______ on the subject won an award.",
    "options": [
      "labor",
      "research",
      "individual",
      "method"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The ______ spent years in the Amazon studying plant life.",
    "options": [
      "occurrence",
      "economics",
      "issue",
      "researcher"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The president ______ a ______ the recent allegations.",
    "options": [
      "play a significant role",
      "respond to",
      "make a response to N",
      "be involved in"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "______ the crisis, the government took immediate action.",
    "options": [
      "in response to",
      "benefit",
      "It is estimated that",
      "benefit from"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "How did she ______ your question?",
    "options": [
      "in response to",
      "approach a task/mission",
      "respond to",
      "be similar to"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Proper nutrition ______ a ______ in an athlete's performance.",
    "options": [
      "be derived from",
      "play a significant role",
      "benefit",
      "in response to"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Please read this ______ of the report for more details.",
    "options": [
      "legislation",
      "approach",
      "contract",
      "section"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The tech ______ has seen rapid growth this year.",
    "options": [
      "occurrence",
      "sector",
      "constitution",
      "approach"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "There has been a ______ increase in sales.",
    "options": [
      "unauthorized",
      "authorized",
      "proficient",
      "significant"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The ______ of this discovery cannot be understated.",
    "options": [
      "significance",
      "function",
      "requirement",
      "contract"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Her style is ______ that of a famous painter.",
    "options": [
      "the authorities",
      "approach a task/mission",
      "be similar to",
      "benefit"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "He's an expert in mathematics, and ______, she excels in physics.",
    "options": [
      "specify",
      "contract",
      "in response to",
      "similarly"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The river is the main ______ of water for the town.",
    "options": [
      "environment",
      "source",
      "assumption",
      "significance"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The country has abundant natural ______.",
    "options": [
      "resource",
      "establishment",
      "concept",
      "evidence"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Can you give a more ______ example?",
    "options": [
      "functional",
      "exported",
      "specific",
      "counterfeit"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "process": {
    "pos": "n.",
    "en_def": "a series of steps to do something",
    "cn_def": "過程",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a series of steps to do something",
        "cn_def": "過程"
      }
    ]
  },
  "require": {
    "pos": "v.",
    "en_def": "to need something",
    "cn_def": "需要",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to need something",
        "cn_def": "需要"
      }
    ]
  },
  "required": {
    "pos": "adj.",
    "en_def": "needed; must be done",
    "cn_def": "所需的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "needed; must be done",
        "cn_def": "所需的"
      }
    ]
  },
  "requirement": {
    "pos": "n.",
    "en_def": "something that you must have or do",
    "cn_def": "要求",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that you must have or do",
        "cn_def": "要求"
      }
    ]
  },
  "research": {
    "pos": "v.",
    "en_def": "to study something to find new facts",
    "cn_def": "研究",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to study something to find new facts",
        "cn_def": "研究"
      },
      {
        "pos": "n.",
        "en_def": "careful study to find new facts",
        "cn_def": "研究"
      }
    ]
  },
  "researcher": {
    "pos": "n.",
    "en_def": "a person who studies something to find new facts",
    "cn_def": "研究員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who studies something to find new facts",
        "cn_def": "研究員"
      }
    ]
  },
  "make a response to n": {
    "pos": "phr.",
    "en_def": "to reply to something",
    "cn_def": "對…做回應",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reply to something",
        "cn_def": "對…做回應"
      }
    ]
  },
  "made a response to": {
    "pos": "phr.",
    "en_def": "to reply to something",
    "cn_def": "對…做回應",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reply to something",
        "cn_def": "對…做回應"
      }
    ]
  },
  "in response to": {
    "pos": "phr.",
    "en_def": "as a reply to something",
    "cn_def": "作為對...的回應",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "as a reply to something",
        "cn_def": "作為對...的回應"
      }
    ]
  },
  "respond to": {
    "pos": "phr.",
    "en_def": "to reply or react to something",
    "cn_def": "回應",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reply or react to something",
        "cn_def": "回應"
      }
    ]
  },
  "play a significant role": {
    "pos": "phr.",
    "en_def": "to be very important in something",
    "cn_def": "發揮重要作用",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be very important in something",
        "cn_def": "發揮重要作用"
      }
    ]
  },
  "plays a significant role": {
    "pos": "phr.",
    "en_def": "to be very important in something",
    "cn_def": "發揮重要作用",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be very important in something",
        "cn_def": "發揮重要作用"
      }
    ]
  },
  "section": {
    "pos": "n.",
    "en_def": "one part of something",
    "cn_def": "部分",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one part of something",
        "cn_def": "部分"
      }
    ]
  },
  "sector": {
    "pos": "n.",
    "en_def": "a part of the economy or society",
    "cn_def": "部門",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a part of the economy or society",
        "cn_def": "部門"
      }
    ]
  },
  "significant": {
    "pos": "adj.",
    "en_def": "large or important",
    "cn_def": "顯著的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "large or important",
        "cn_def": "顯著的"
      }
    ]
  },
  "significance": {
    "pos": "n.",
    "en_def": "the importance of something",
    "cn_def": "重要性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the importance of something",
        "cn_def": "重要性"
      }
    ]
  },
  "similar to": {
    "pos": "phr.",
    "en_def": "almost the same as something",
    "cn_def": "與...相似",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "almost the same as something",
        "cn_def": "與...相似"
      }
    ]
  },
  "be similar to": {
    "pos": "phr.",
    "en_def": "almost the same as something",
    "cn_def": "與...相似",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "almost the same as something",
        "cn_def": "與...相似"
      }
    ]
  },
  "similarly": {
    "pos": "adv.",
    "en_def": "in the same way",
    "cn_def": "同樣地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in the same way",
        "cn_def": "同樣地"
      }
    ]
  },
  "source": {
    "pos": "n.",
    "en_def": "where something comes from",
    "cn_def": "來源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "where something comes from",
        "cn_def": "來源"
      }
    ]
  },
  "resource": {
    "pos": "n.",
    "en_def": "something useful, like water, oil or money",
    "cn_def": "資源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something useful, like water, oil or money",
        "cn_def": "資源"
      }
    ]
  },
  "specific": {
    "pos": "adj.",
    "en_def": "exact and clear; certain",
    "cn_def": "特定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "exact and clear; certain",
        "cn_def": "特定的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
