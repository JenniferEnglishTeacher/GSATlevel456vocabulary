// Part 2 Quiz Data: persuasive – incline
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 10 Part 2 - persuasive – incline",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "persuasive",
    "pos": "adj.",
    "cn_def": "有說服力的",
    "en_def": "able to make people agree",
    "sentence": "His {{BLANK}} speech motivated many to take action.",
    "cn": "他有說服力的演講激勵了許多人採取行動。"
  },
  {
    "word": "persuasion",
    "pos": "n.",
    "cn_def": "說服",
    "en_def": "the act of making people agree",
    "sentence": "Through gentle {{BLANK}}, he got everyone to agree.",
    "cn": "通過溫和的說服，他讓每個人都同意了。"
  },
  {
    "word": "depress",
    "pos": "v.",
    "cn_def": "使沮喪",
    "en_def": "to make someone feel sad",
    "sentence": "The bad news began to {{BLANK}} her.",
    "cn": "壞消息開始使她感到沮喪。"
  },
  {
    "word": "depressed",
    "pos": "adj.",
    "cn_def": "沮喪的",
    "en_def": "very sad and without hope",
    "sentence": "He felt {{BLANK}} after hearing about the accident.",
    "cn": "聽到事故的消息後，他感到很沮喪。"
  },
  {
    "word": "depressing",
    "pos": "adj.",
    "cn_def": "令人沮喪的",
    "en_def": "making you feel sad",
    "sentence": "The gloomy weather made the day feel {{BLANK}}.",
    "cn": "陰沉的天氣使得一天感覺很沮喪。"
  },
  {
    "word": "depression",
    "pos": "n.",
    "cn_def": "抑鬱症",
    "en_def": "a mental illness that makes people very sad",
    "sentence": "She sought professional help to deal with her {{BLANK}}.",
    "cn": "她尋求專業幫助以應對她的抑鬱症。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone hope and support",
    "sentence": "They {{BLANK}} each other to keep pursuing their dreams.",
    "cn": "他們互相鼓勵，繼續追求自己的夢想。"
  },
  {
    "word": "encountered",
    "pos": "v.",
    "cn_def": "遇到",
    "en_def": "met something difficult or unexpected",
    "sentence": "They {{BLANK}} some challenges along the way.",
    "cn": "他們在路上遇到了一些挑戰。"
  },
  {
    "word": "encouraging",
    "pos": "adj.",
    "cn_def": "鼓勵的",
    "en_def": "giving hope and support",
    "sentence": "The positive feedback was very {{BLANK}} to the team.",
    "cn": "積極的反饋對團隊來說非常鼓舞。"
  },
  {
    "word": "encouragement",
    "pos": "n.",
    "cn_def": "鼓勵",
    "en_def": "words or actions that give hope",
    "sentence": "With a little {{BLANK}}, he felt ready to try again.",
    "cn": "在一些鼓勵的支持下，他覺得準備好再次嘗試。"
  },
  {
    "word": "discourage from",
    "pos": "v. phrase",
    "cn_def": "使氣餒",
    "en_def": "to make someone not want to do something",
    "sentence": "His failure did not {{BLANK}} him from trying again.",
    "cn": "他的失敗並未使他氣餒，不再嘗試。"
  },
  {
    "word": "discouraged",
    "pos": "adj.",
    "cn_def": "氣餒的",
    "en_def": "having lost hope",
    "sentence": "She felt {{BLANK}} after the rejection but decided to keep applying.",
    "cn": "面對拒絕，她感到很氣餒，但決定繼續申請。"
  },
  {
    "word": "discouraging",
    "pos": "adj.",
    "cn_def": "令人氣餒的",
    "en_def": "making you lose hope",
    "sentence": "The news was {{BLANK}}, but they remained hopeful.",
    "cn": "這消息令人氣餒，但他們仍保持希望。"
  },
  {
    "word": "discouragement",
    "pos": "n.",
    "cn_def": "氣餒",
    "en_def": "a feeling of having lost hope",
    "sentence": "Despite the {{BLANK}}, they were determined to continue working hard.",
    "cn": "儘管感到氣餒，他們仍決定繼續努力工作。"
  },
  {
    "word": "enormous",
    "pos": "adj.",
    "cn_def": "巨大的",
    "en_def": "extremely large",
    "sentence": "The project required an {{BLANK}} amount of time and resources.",
    "cn": "該項目需要大量的時間和資源。"
  },
  {
    "word": "enormously",
    "pos": "adv.",
    "cn_def": "非常",
    "en_def": "extremely; very much",
    "sentence": "The new policy benefited the community {{BLANK}}.",
    "cn": "新政策對社區的好處非常大。"
  },
  {
    "word": "tremendous",
    "pos": "adj.",
    "cn_def": "巨大的",
    "en_def": "very great or large",
    "sentence": "The storm caused {{BLANK}} damage to the coastal areas.",
    "cn": "暴風雨對沿海地區造成了巨大的損害。"
  },
  {
    "word": "forthcoming",
    "pos": "adj.",
    "cn_def": "即將到來的",
    "en_def": "going to happen soon",
    "sentence": "They are preparing for the {{BLANK}} event with great enthusiasm.",
    "cn": "他們正急切地準備即將到來的事件。"
  },
  {
    "word": "incline",
    "pos": "v.",
    "cn_def": "傾向於",
    "en_def": "to tend to think or act in a certain way",
    "sentence": "I {{BLANK}} to agree with his assessment of the situation.",
    "cn": "我傾向於同意他對情況的評估。"
  }
];

const MCQS = [
  {
    "q": "His ______ speech motivated many to take action.",
    "options": [
      "extrinsic",
      "persuasive",
      "conceived",
      "ongoing"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Through gentle ______, he got everyone to agree.",
    "options": [
      "persuasion",
      "depression",
      "league",
      "panel"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The bad news began to ______ her.",
    "options": [
      "compile",
      "undertake",
      "depress",
      "conceive"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "He felt ______ after hearing about the accident.",
    "options": [
      "enormous",
      "tremendous",
      "discouraging",
      "depressed"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The gloomy weather made the day feel ______.",
    "options": [
      "depressing",
      "extrinsic",
      "tremendous",
      "unconvincing"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "She sought professional help to deal with her ______.",
    "options": [
      "undertaking",
      "colleague",
      "encouragement",
      "depression"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "They ______ each other to keep pursuing their dreams.",
    "options": [
      "undertake",
      "encourage",
      "depress",
      "assemble"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "They ______ some challenges along the way.",
    "options": [
      "compile",
      "integrate",
      "encountered",
      "persuade"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The positive feedback was very ______ to the team.",
    "options": [
      "convinced",
      "enormous",
      "integrated",
      "encouraging"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "With a little ______, he felt ready to try again.",
    "options": [
      "encouragement",
      "discouragement",
      "collapse",
      "odds"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "His failure did not ______ him from trying again.",
    "options": [
      "so called",
      "insist on",
      "discourage from",
      "panel discussion"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "She felt ______ after the rejection but decided to keep applying.",
    "options": [
      "tremendous",
      "discouraged",
      "integrated",
      "extrinsic"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The news was ______, but they remained hopeful.",
    "options": [
      "discouraging",
      "tremendous",
      "compiled",
      "convinced"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Despite the ______, they were determined to continue working hard.",
    "options": [
      "integrity",
      "discouragement",
      "persuasion",
      "assembly"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The project required an ______ amount of time and resources.",
    "options": [
      "underlying",
      "integrated",
      "persistent",
      "enormous"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The new policy benefited the community ______.",
    "options": [
      "whereby",
      "notwithstanding",
      "enormously",
      "reluctantly"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The storm caused ______ damage to the coastal areas.",
    "options": [
      "tremendous",
      "provocative",
      "insistent",
      "depressed"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "They are preparing for the ______ event with great enthusiasm.",
    "options": [
      "convinced",
      "depressed",
      "forthcoming",
      "conceived"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "I ______ to agree with his assessment of the situation.",
    "options": [
      "compile",
      "incline",
      "provoke",
      "encourage"
    ],
    "answer": 1,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "persuasive": {
    "pos": "adj.",
    "en_def": "able to make people agree",
    "cn_def": "有說服力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to make people agree",
        "cn_def": "有說服力的"
      }
    ]
  },
  "persuasion": {
    "pos": "n.",
    "en_def": "the act of making people agree",
    "cn_def": "說服",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of making people agree",
        "cn_def": "說服"
      }
    ]
  },
  "depress": {
    "pos": "v.",
    "en_def": "to make someone feel sad",
    "cn_def": "使沮喪",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone feel sad",
        "cn_def": "使沮喪"
      }
    ]
  },
  "depressed": {
    "pos": "adj.",
    "en_def": "very sad and without hope",
    "cn_def": "沮喪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very sad and without hope",
        "cn_def": "沮喪的"
      }
    ]
  },
  "depressing": {
    "pos": "adj.",
    "en_def": "making you feel sad",
    "cn_def": "令人沮喪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you feel sad",
        "cn_def": "令人沮喪的"
      }
    ]
  },
  "depression": {
    "pos": "n.",
    "en_def": "a mental illness that makes people very sad",
    "cn_def": "抑鬱症",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mental illness that makes people very sad",
        "cn_def": "抑鬱症"
      }
    ]
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone hope and support",
    "cn_def": "鼓勵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone hope and support",
        "cn_def": "鼓勵"
      }
    ]
  },
  "encountered": {
    "pos": "v.",
    "en_def": "met something difficult or unexpected",
    "cn_def": "遇到",
    "combined": [
      {
        "pos": "v.",
        "en_def": "met something difficult or unexpected",
        "cn_def": "遇到"
      }
    ]
  },
  "encouraging": {
    "pos": "adj.",
    "en_def": "giving hope and support",
    "cn_def": "鼓勵的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "giving hope and support",
        "cn_def": "鼓勵的"
      }
    ]
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give hope",
    "cn_def": "鼓勵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "words or actions that give hope",
        "cn_def": "鼓勵"
      }
    ]
  },
  "discourage from": {
    "pos": "v. phrase",
    "en_def": "to make someone not want to do something",
    "cn_def": "使氣餒",
    "combined": [
      {
        "pos": "v. phrase",
        "en_def": "to make someone not want to do something",
        "cn_def": "使氣餒"
      }
    ]
  },
  "discouraged": {
    "pos": "adj.",
    "en_def": "having lost hope",
    "cn_def": "氣餒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having lost hope",
        "cn_def": "氣餒的"
      }
    ]
  },
  "discouraging": {
    "pos": "adj.",
    "en_def": "making you lose hope",
    "cn_def": "令人氣餒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "making you lose hope",
        "cn_def": "令人氣餒的"
      }
    ]
  },
  "discouragement": {
    "pos": "n.",
    "en_def": "a feeling of having lost hope",
    "cn_def": "氣餒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of having lost hope",
        "cn_def": "氣餒"
      }
    ]
  },
  "enormous": {
    "pos": "adj.",
    "en_def": "extremely large",
    "cn_def": "巨大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely large",
        "cn_def": "巨大的"
      }
    ]
  },
  "enormously": {
    "pos": "adv.",
    "en_def": "extremely; very much",
    "cn_def": "非常",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "extremely; very much",
        "cn_def": "非常"
      }
    ]
  },
  "tremendous": {
    "pos": "adj.",
    "en_def": "very great or large",
    "cn_def": "巨大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very great or large",
        "cn_def": "巨大的"
      }
    ]
  },
  "forthcoming": {
    "pos": "adj.",
    "en_def": "going to happen soon",
    "cn_def": "即將到來的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "going to happen soon",
        "cn_def": "即將到來的"
      }
    ]
  },
  "incline": {
    "pos": "v.",
    "en_def": "to tend to think or act in a certain way",
    "cn_def": "傾向於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tend to think or act in a certain way",
        "cn_def": "傾向於"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
