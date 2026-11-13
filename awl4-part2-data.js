// Part 2 Quiz Data: be committed to – dimension
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 4 Part 2 - be committed to – dimension",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "committed to",
    "pos": "phr.",
    "cn_def": "致力於",
    "en_def": "to work very hard for something you believe in",
    "sentence": "She is {{BLANK}} achieving excellence in her field.",
    "cn": "她致力於在她的領域中達到卓越。"
  },
  {
    "word": "communicate with",
    "pos": "v.",
    "cn_def": "與...溝通",
    "en_def": "to share information with someone",
    "sentence": "It's essential to {{BLANK}} your team members regularly.",
    "cn": "定期與團隊成員溝通非常重要。"
  },
  {
    "word": "communication with",
    "pos": "n.",
    "cn_def": "與...的溝通",
    "en_def": "sharing information with someone",
    "sentence": "Effective {{BLANK}} others is a key skill in the workplace.",
    "cn": "與他人有效的溝通是工作場所的一項關鍵技能。"
  },
  {
    "word": "concentrate on",
    "pos": "v.",
    "cn_def": "專注於",
    "en_def": "to give all your attention to something",
    "sentence": "She decided to {{BLANK}} her studies and avoid distractions.",
    "cn": "她決定專注於她的學習並避免分心。"
  },
  {
    "word": "concentration",
    "pos": "n.",
    "cn_def": "專注",
    "en_def": "the ability to give all your attention",
    "sentence": "His {{BLANK}} on the task was so intense that he didn't notice the time passing.",
    "cn": "他對任務的專注程度非常高，以至於他沒有注意到時間過去了。"
  },
  {
    "word": "remain concentrated",
    "pos": "phr.",
    "cn_def": "保持專注",
    "en_def": "to keep giving all your attention",
    "sentence": "It's crucial to {{BLANK}} throughout the exam period.",
    "cn": "考試期間保持專注是很重要的。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "a large formal meeting",
    "sentence": "They will be attending an international {{BLANK}} in Paris next month.",
    "cn": "他們將於下個月參加在巴黎的國際會議。"
  },
  {
    "word": "contrast",
    "pos": "n.",
    "cn_def": "對比",
    "en_def": "a clear difference between two things",
    "sentence": "The {{BLANK}} between the two paintings is quite evident.",
    "cn": "這兩幅畫之間的對比是非常明顯的。"
  },
  {
    "word": "contrast",
    "pos": "v.",
    "cn_def": "對比",
    "en_def": "to compare two things to show differences",
    "sentence": "When you {{BLANK}} the two models, the differences become clear.",
    "cn": "當你對比這兩種模型時，差異變得清晰。"
  },
  {
    "word": "in contrast",
    "pos": "phr.",
    "cn_def": "相對於",
    "en_def": "showing a difference with something just said",
    "sentence": "{{BLANK}}, the southern region has a much warmer climate.",
    "cn": "相對於，南方地區的氣候要暖和得多。"
  },
  {
    "word": "cycle",
    "pos": "v.",
    "cn_def": "循環",
    "en_def": "to move around in a repeated pattern",
    "sentence": "Water will naturally {{BLANK}} between the earth and the atmosphere.",
    "cn": "水會在地球和大氣之間自然循環。"
  },
  {
    "word": "cycle",
    "pos": "n.",
    "cn_def": "週期",
    "en_def": "a set of events that repeat in the same order",
    "sentence": "The life {{BLANK}} of a butterfly is truly fascinating.",
    "cn": "蝴蝶的生命週期真的很吸引人。"
  },
  {
    "word": "cycling",
    "pos": "n.",
    "cn_def": "騎腳踏車",
    "en_def": "riding a bicycle",
    "sentence": "{{BLANK}} is both an excellent form of exercise and an environmentally friendly mode of transport.",
    "cn": "騎腳踏車既是一種出色的運動形式，又是一種環保的交通方式。"
  },
  {
    "word": "debate",
    "pos": "n.",
    "cn_def": "辯論",
    "en_def": "a formal discussion with different opinions",
    "sentence": "The political {{BLANK}} was televised nationally.",
    "cn": "這場政治辯論在全國範圍內播出。"
  },
  {
    "word": "debate over",
    "pos": "v.",
    "cn_def": "對...進行辯論",
    "en_def": "to discuss something with different opinions",
    "sentence": "Scientists continue to {{BLANK}} the effects of climate change on marine life.",
    "cn": "科學家們繼續就氣候變化對海洋生物的影響進行辯論。"
  },
  {
    "word": "despite",
    "pos": "conj.",
    "cn_def": "儘管",
    "en_def": "even though something happens",
    "sentence": "{{BLANK}} the rain, the event went ahead as planned.",
    "cn": "儘管下雨，活動仍按計劃進行。"
  },
  {
    "word": "in spite of",
    "pos": "phr.",
    "cn_def": "儘管",
    "en_def": "even though something happens",
    "sentence": "She managed to smile, {{BLANK}} her pain.",
    "cn": "她儘管疼痛，還是努力微笑。"
  },
  {
    "word": "regardless of",
    "pos": "phr.",
    "cn_def": "無論",
    "en_def": "without being affected by something",
    "sentence": "You should treat everyone equally, {{BLANK}} their background.",
    "cn": "你應該平等地對待每個人，無論他們的背景如何。"
  },
  {
    "word": "dimension",
    "pos": "n.",
    "cn_def": "維度",
    "en_def": "a measurement such as length, width or height",
    "sentence": "The artwork has a unique three-dimensional {{BLANK}}.",
    "cn": "這件藝術品有獨特的三維維度。"
  }
];

const MCQS = [
  {
    "q": "She is ______ achieving excellence in her field.",
    "options": [
      "make a commitment to",
      "be committed to",
      "regardless of",
      "concentrate on"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "It's essential to ______ your team members regularly.",
    "options": [
      "make prediction",
      "a series of",
      "communicate with",
      "attribute to"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Effective ______ others is a key skill in the workplace.",
    "options": [
      "communication with",
      "take...for granted",
      "be resolved to",
      "be committed to"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "She decided to ______ her studies and avoid distractions.",
    "options": [
      "communication with",
      "regardless of",
      "attitude toward",
      "concentrate on"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "His ______ on the task was so intense that he didn't notice the time passing.",
    "options": [
      "concentration",
      "attribute",
      "project",
      "access"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "It's crucial to ______ throughout the exam period.",
    "options": [
      "regardless of",
      "be under stress",
      "remain concentrated",
      "impose ...to"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "They will be attending an international ______ in Paris next month.",
    "options": [
      "parallel",
      "undertaking",
      "concentration",
      "conference"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ______ between the two paintings is quite evident.",
    "options": [
      "projector",
      "contrast",
      "resolve",
      "debate"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "When you ______ the two models, the differences become clear.",
    "options": [
      "occupy",
      "hypothesize",
      "implement",
      "contrast"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "______, the southern region has a much warmer climate.",
    "options": [
      "impose ...to",
      "attribute to",
      "in contrast",
      "take...for granted"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Water will naturally ______ between the earth and the atmosphere.",
    "options": [
      "cycle",
      "investigate",
      "project",
      "retain"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The life ______ of a butterfly is truly fascinating.",
    "options": [
      "emergency",
      "cycle",
      "concentration",
      "hypothesis"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "______ is both an excellent form of exercise and an environmentally friendly mode of transport.",
    "options": [
      "cycling",
      "emergency",
      "integration",
      "parallel"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The political ______ was televised nationally.",
    "options": [
      "contrast",
      "debate",
      "parallel",
      "grant"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Scientists continue to ______ the effects of climate change on marine life.",
    "options": [
      "emerge from",
      "communication with",
      "debate over",
      "impose ...to"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "______ the rain, the event went ahead as planned.",
    "options": [
      "goal",
      "resolution",
      "be under stress",
      "despite"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "She managed to smile, ______ her pain.",
    "options": [
      "opt to",
      "in spite of",
      "commit to",
      "attribute to"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "You should treat everyone equally, ______ their background.",
    "options": [
      "attribute to",
      "a series of",
      "regardless of",
      "debate over"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The artwork has a unique three-dimensional ______.",
    "options": [
      "status",
      "project",
      "cycling",
      "dimension"
    ],
    "answer": 3,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "committed to": {
    "pos": "phr.",
    "en_def": "to work very hard for something you believe in",
    "cn_def": "致力於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to work very hard for something you believe in",
        "cn_def": "致力於"
      }
    ]
  },
  "be committed to": {
    "pos": "phr.",
    "en_def": "to work very hard for something you believe in",
    "cn_def": "致力於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to work very hard for something you believe in",
        "cn_def": "致力於"
      }
    ]
  },
  "communicate with": {
    "pos": "v.",
    "en_def": "to share information with someone",
    "cn_def": "與...溝通",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to share information with someone",
        "cn_def": "與...溝通"
      }
    ]
  },
  "communication with": {
    "pos": "n.",
    "en_def": "sharing information with someone",
    "cn_def": "與...的溝通",
    "combined": [
      {
        "pos": "n.",
        "en_def": "sharing information with someone",
        "cn_def": "與...的溝通"
      }
    ]
  },
  "concentrate on": {
    "pos": "v.",
    "en_def": "to give all your attention to something",
    "cn_def": "專注於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give all your attention to something",
        "cn_def": "專注於"
      }
    ]
  },
  "concentration": {
    "pos": "n.",
    "en_def": "the ability to give all your attention",
    "cn_def": "專注",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to give all your attention",
        "cn_def": "專注"
      }
    ]
  },
  "remain concentrated": {
    "pos": "phr.",
    "en_def": "to keep giving all your attention",
    "cn_def": "保持專注",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to keep giving all your attention",
        "cn_def": "保持專注"
      }
    ]
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting",
    "cn_def": "會議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large formal meeting",
        "cn_def": "會議"
      }
    ]
  },
  "contrast": {
    "pos": "n.",
    "en_def": "a clear difference between two things",
    "cn_def": "對比",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a clear difference between two things",
        "cn_def": "對比"
      },
      {
        "pos": "v.",
        "en_def": "to compare two things to show differences",
        "cn_def": "對比"
      }
    ]
  },
  "in contrast": {
    "pos": "phr.",
    "en_def": "showing a difference with something just said",
    "cn_def": "相對於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "showing a difference with something just said",
        "cn_def": "相對於"
      }
    ]
  },
  "cycle": {
    "pos": "v.",
    "en_def": "to move around in a repeated pattern",
    "cn_def": "循環",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move around in a repeated pattern",
        "cn_def": "循環"
      },
      {
        "pos": "n.",
        "en_def": "a set of events that repeat in the same order",
        "cn_def": "週期"
      }
    ]
  },
  "cycling": {
    "pos": "n.",
    "en_def": "riding a bicycle",
    "cn_def": "騎腳踏車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "riding a bicycle",
        "cn_def": "騎腳踏車"
      }
    ]
  },
  "debate": {
    "pos": "n.",
    "en_def": "a formal discussion with different opinions",
    "cn_def": "辯論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal discussion with different opinions",
        "cn_def": "辯論"
      }
    ]
  },
  "debate over": {
    "pos": "v.",
    "en_def": "to discuss something with different opinions",
    "cn_def": "對...進行辯論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to discuss something with different opinions",
        "cn_def": "對...進行辯論"
      }
    ]
  },
  "despite": {
    "pos": "conj.",
    "en_def": "even though something happens",
    "cn_def": "儘管",
    "combined": [
      {
        "pos": "conj.",
        "en_def": "even though something happens",
        "cn_def": "儘管"
      }
    ]
  },
  "in spite of": {
    "pos": "phr.",
    "en_def": "even though something happens",
    "cn_def": "儘管",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "even though something happens",
        "cn_def": "儘管"
      }
    ]
  },
  "regardless of": {
    "pos": "phr.",
    "en_def": "without being affected by something",
    "cn_def": "無論",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "without being affected by something",
        "cn_def": "無論"
      }
    ]
  },
  "dimension": {
    "pos": "n.",
    "en_def": "a measurement such as length, width or height",
    "cn_def": "維度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a measurement such as length, width or height",
        "cn_def": "維度"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
