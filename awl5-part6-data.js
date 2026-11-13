// Part 6 Quiz Data: network – precision
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 5 Part 6 - network – precision",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "network",
    "pos": "n.",
    "cn_def": "網絡",
    "en_def": "a large system of connected people or things",
    "sentence": "The company has a vast {{BLANK}} of suppliers and distributors.",
    "cn": "該公司有一個龐大的供應商和經銷商網絡。"
  },
  {
    "word": "networking",
    "pos": "n.",
    "cn_def": "建立人脈",
    "en_def": "meeting people who can help you at work",
    "sentence": "{{BLANK}} is essential for young professionals aiming to climb the corporate ladder.",
    "cn": "對於希望在公司晉升的年輕專業人士來說，建立人脈是必不可少的。"
  },
  {
    "word": "social networking",
    "pos": "n.",
    "cn_def": "社交網絡",
    "en_def": "using websites to connect with people",
    "sentence": "Many people spend hours on {{BLANK}} sites to keep up with friends and current events.",
    "cn": "許多人在社交網站上花費數小時，以與朋友保持聯繫並了解時事。"
  },
  {
    "word": "notion",
    "pos": "n.",
    "cn_def": "概念",
    "en_def": "an idea or belief",
    "sentence": "She had a vague {{BLANK}} of what the job entailed, but wasn't sure about the specifics.",
    "cn": "她對工作的內容有一個模糊的概念，但不確定具體情況。"
  },
  {
    "word": "note",
    "pos": "n.",
    "cn_def": "筆記",
    "en_def": "a short piece of writing to help you remember",
    "sentence": "He took a quick {{BLANK}} to remind himself of the meeting's main points.",
    "cn": "他快速記下筆記，以提醒自己會議的主要要點。"
  },
  {
    "word": "note",
    "pos": "v.",
    "cn_def": "注意",
    "en_def": "to notice; to pay attention to",
    "sentence": "Please {{BLANK}} that the deadline for submissions is next Friday.",
    "cn": "請注意，提交的截止日期是下周五。"
  },
  {
    "word": "notify",
    "pos": "v.",
    "cn_def": "通知",
    "en_def": "to tell someone officially",
    "sentence": "The school will {{BLANK}} parents of any changes to the schedule.",
    "cn": "如有任何課程變動，學校將通知家長。"
  },
  {
    "word": "notified",
    "pos": "phr.",
    "cn_def": "被通知",
    "en_def": "to be told officially",
    "sentence": "We were {{BLANK}} of the decision yesterday.",
    "cn": "我們昨天被通知了這一決定。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "an official message telling you something",
    "sentence": "The system automatically sends a {{BLANK}} when a new update is available.",
    "cn": "當有新更新可用時，系統會自動發送通知。"
  },
  {
    "word": "objective",
    "pos": "adj.",
    "cn_def": "客觀的",
    "en_def": "fair; not influenced by feelings",
    "sentence": "The research aims to provide an {{BLANK}} assessment of the situation.",
    "cn": "該研究旨在提供對情況的客觀評估。"
  },
  {
    "word": "objective",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "a goal; something you want to achieve",
    "sentence": "The primary {{BLANK}} of the program is to increase literacy rates.",
    "cn": "該計劃的主要目標是提高識字率。"
  },
  {
    "word": "orient",
    "pos": "v.",
    "cn_def": "定位",
    "en_def": "to point or direct toward something",
    "sentence": "The building is {{BLANK}}ed to maximize sunlight during the winter months.",
    "cn": "該建築物的定位是在冬季最大化陽光。"
  },
  {
    "word": "oriental",
    "pos": "adj.",
    "cn_def": "東方的",
    "en_def": "from East Asia",
    "sentence": "The museum features an impressive collection of {{BLANK}} art.",
    "cn": "博物館展出了令人印象深刻的東方藝術收藏。"
  },
  {
    "word": "-oriented",
    "pos": "adj.",
    "cn_def": "以...為導向",
    "en_def": "focused on something",
    "sentence": "The company is now more customer-{{BLANK}}.",
    "cn": "該公司現在更以顧客為導向。"
  },
  {
    "word": "orientation",
    "pos": "n.",
    "cn_def": "定位；方向",
    "en_def": "introduction to a new place; direction",
    "sentence": "The {{BLANK}} of the new employees will take place on Monday.",
    "cn": "新員工的定位將在星期一進行。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "透視；觀點",
    "en_def": "a way of looking at something",
    "sentence": "From an environmental {{BLANK}}, the new policy is a step forward.",
    "cn": "從環境的角度看，新政策是向前邁進的一步。"
  },
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精確的",
    "en_def": "exact and accurate",
    "sentence": "The scientist made {{BLANK}} measurements to ensure the accuracy of the experiment.",
    "cn": "為確保實驗的準確性，科學家進行了精確的測量。"
  },
  {
    "word": "precisely",
    "pos": "adv.",
    "cn_def": "精確地",
    "en_def": "exactly",
    "sentence": "The artifact was {{BLANK}} dated to the 5th century BC.",
    "cn": "這件文物被精確地定於公元前5世紀。"
  },
  {
    "word": "precision",
    "pos": "n.",
    "cn_def": "精確度",
    "en_def": "the quality of being exact",
    "sentence": "Engineers must work with utmost {{BLANK}} to ensure the safety of the structures.",
    "cn": "工程師必須極其精確地工作以確保結構的安全。"
  }
];

const MCQS = [
  {
    "q": "The company has a vast ______ of suppliers and distributors.",
    "options": [
      "network",
      "academy",
      "target",
      "style"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "______ is essential for young professionals aiming to climb the corporate ladder.",
    "options": [
      "welfare",
      "networking",
      "pursuit",
      "energy"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Many people spend hours on ______ sites to keep up with friends and current events.",
    "options": [
      "ability to V",
      "be notified",
      "be symbolic of",
      "social networking"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "She had a vague ______ of what the job entailed, but wasn't sure about the specifics.",
    "options": [
      "precision",
      "energy",
      "notion",
      "rejection"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "He took a quick ______ to remind himself of the meeting's main points.",
    "options": [
      "note",
      "academy",
      "medication",
      "transit"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Please ______ that the deadline for submissions is next Friday.",
    "options": [
      "challenge",
      "internalize",
      "generated",
      "note"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The school will ______ parents of any changes to the schedule.",
    "options": [
      "symbolize",
      "notify",
      "rate",
      "consult"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "We were ______ of the decision yesterday.",
    "options": [
      "ability to V",
      "decline in",
      "be notified",
      "make adjustment"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The system automatically sends a ______ when a new update is available.",
    "options": [
      "transition",
      "modification",
      "generation",
      "notification"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The research aims to provide an ______ assessment of the situation.",
    "options": [
      "objective",
      "primary",
      "trendy",
      "liberal"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The primary ______ of the program is to increase literacy rates.",
    "options": [
      "be symbolic of",
      "be equivalent to",
      "objective",
      "be aware of"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The building is ______ed to maximize sunlight during the winter months.",
    "options": [
      "pursue",
      "orient",
      "contact",
      "amend"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The museum features an impressive collection of ______ art.",
    "options": [
      "modified",
      "mental",
      "oriental",
      "fundamental"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The company is now more customer-______.",
    "options": [
      "imaginary",
      "mental",
      "modified",
      "-oriented"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The ______ of the new employees will take place on Monday.",
    "options": [
      "orientation",
      "notion",
      "welfare",
      "entity"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "From an environmental ______, the new policy is a step forward.",
    "options": [
      "logic",
      "perspective",
      "alternation",
      "stability"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The scientist made ______ measurements to ensure the accuracy of the experiment.",
    "options": [
      "liberal",
      "mental",
      "marginalized",
      "precise"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The artifact was ______ dated to the 5th century BC.",
    "options": [
      "reject",
      "precisely",
      "academically",
      "mentally"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Engineers must work with utmost ______ to ensure the safety of the structures.",
    "options": [
      "trend",
      "notification",
      "precision",
      "perspective"
    ],
    "answer": 2,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "network": {
    "pos": "n.",
    "en_def": "a large system of connected people or things",
    "cn_def": "網絡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large system of connected people or things",
        "cn_def": "網絡"
      }
    ]
  },
  "networking": {
    "pos": "n.",
    "en_def": "meeting people who can help you at work",
    "cn_def": "建立人脈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "meeting people who can help you at work",
        "cn_def": "建立人脈"
      }
    ]
  },
  "social networking": {
    "pos": "n.",
    "en_def": "using websites to connect with people",
    "cn_def": "社交網絡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "using websites to connect with people",
        "cn_def": "社交網絡"
      }
    ]
  },
  "notion": {
    "pos": "n.",
    "en_def": "an idea or belief",
    "cn_def": "概念",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea or belief",
        "cn_def": "概念"
      }
    ]
  },
  "note": {
    "pos": "n.",
    "en_def": "a short piece of writing to help you remember",
    "cn_def": "筆記",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a short piece of writing to help you remember",
        "cn_def": "筆記"
      },
      {
        "pos": "v.",
        "en_def": "to notice; to pay attention to",
        "cn_def": "注意"
      }
    ]
  },
  "notify": {
    "pos": "v.",
    "en_def": "to tell someone officially",
    "cn_def": "通知",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tell someone officially",
        "cn_def": "通知"
      }
    ]
  },
  "notified": {
    "pos": "phr.",
    "en_def": "to be told officially",
    "cn_def": "被通知",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be told officially",
        "cn_def": "被通知"
      }
    ]
  },
  "be notified": {
    "pos": "phr.",
    "en_def": "to be told officially",
    "cn_def": "被通知",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be told officially",
        "cn_def": "被通知"
      }
    ]
  },
  "notification": {
    "pos": "n.",
    "en_def": "an official message telling you something",
    "cn_def": "通知",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official message telling you something",
        "cn_def": "通知"
      }
    ]
  },
  "objective": {
    "pos": "adj.",
    "en_def": "fair; not influenced by feelings",
    "cn_def": "客觀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fair; not influenced by feelings",
        "cn_def": "客觀的"
      },
      {
        "pos": "n.",
        "en_def": "a goal; something you want to achieve",
        "cn_def": "目標"
      }
    ]
  },
  "objective = goal": {
    "pos": "n.",
    "en_def": "a goal; something you want to achieve",
    "cn_def": "目標",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a goal; something you want to achieve",
        "cn_def": "目標"
      }
    ]
  },
  "orient": {
    "pos": "v.",
    "en_def": "to point or direct toward something",
    "cn_def": "定位",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to point or direct toward something",
        "cn_def": "定位"
      }
    ]
  },
  "oriental": {
    "pos": "adj.",
    "en_def": "from East Asia",
    "cn_def": "東方的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "from East Asia",
        "cn_def": "東方的"
      }
    ]
  },
  "-oriented": {
    "pos": "adj.",
    "en_def": "focused on something",
    "cn_def": "以...為導向",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "focused on something",
        "cn_def": "以...為導向"
      }
    ]
  },
  "orientation": {
    "pos": "n.",
    "en_def": "introduction to a new place; direction",
    "cn_def": "定位；方向",
    "combined": [
      {
        "pos": "n.",
        "en_def": "introduction to a new place; direction",
        "cn_def": "定位；方向"
      }
    ]
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a way of looking at something",
    "cn_def": "透視；觀點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way of looking at something",
        "cn_def": "透視；觀點"
      }
    ]
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact and accurate",
    "cn_def": "精確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "exact and accurate",
        "cn_def": "精確的"
      }
    ]
  },
  "precisely": {
    "pos": "adv.",
    "en_def": "exactly",
    "cn_def": "精確地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "exactly",
        "cn_def": "精確地"
      }
    ]
  },
  "precision": {
    "pos": "n.",
    "en_def": "the quality of being exact",
    "cn_def": "精確度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being exact",
        "cn_def": "精確度"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
