// Part 5 Quiz Data: occupy – predicted
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 4 Part 5 - occupy – predicted",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "occupy",
    "pos": "v.",
    "cn_def": "佔領",
    "en_def": "to take control of a place",
    "sentence": "Protesters {{BLANK}} the city square for three days.",
    "cn": "抗議者佔領了市中心廣場三天。"
  },
  {
    "word": "occupy",
    "pos": "v.",
    "cn_def": "占用",
    "en_def": "to fill or use a space or time",
    "sentence": "His collection {{BLANK}} two rooms in his house.",
    "cn": "他的收藏占用了他家的兩間房間。"
  },
  {
    "word": "occupied with",
    "pos": "phr.",
    "cn_def": "忙於",
    "en_def": "to be busy doing something",
    "sentence": "She's currently {{BLANK}} preparations for the upcoming event.",
    "cn": "她目前忙於為即將到來的活動做準備。"
  },
  {
    "word": "occupied",
    "pos": "adj.",
    "cn_def": "被佔領的",
    "en_def": "being used; taken over by someone",
    "sentence": "The meeting room is already {{BLANK}} by another team.",
    "cn": "會議室已被另一支團隊佔用。"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "cn_def": "佔領",
    "en_def": "taking control of a place by force",
    "sentence": "The {{BLANK}} of the building ended after a week.",
    "cn": "該建築物的佔領在一週後結束。"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "cn_def": "職業",
    "en_def": "a job",
    "sentence": "His {{BLANK}} is a software engineer, and he's been in the field for over 10 years.",
    "cn": "他的職業是軟件工程師，並且已經從事這個行業超過10年了。"
  },
  {
    "word": "occupational",
    "pos": "adj.",
    "cn_def": "職業的",
    "en_def": "about a person's job",
    "sentence": "{{BLANK}} hazards are risks that people face in their line of work.",
    "cn": "職業風險是人們在工作中面臨的風險。"
  },
  {
    "word": "opt to",
    "pos": "phr.",
    "cn_def": "選擇",
    "en_def": "to choose to do something",
    "sentence": "She decided to {{BLANK}} take the longer but more scenic route.",
    "cn": "她決定選擇更長但更風景優美的路線。"
  },
  {
    "word": "opt for",
    "pos": "phr.",
    "cn_def": "選擇",
    "en_def": "to choose something",
    "sentence": "Given the options, many customers {{BLANK}} organic products.",
    "cn": "鑑於選擇，許多顧客選擇有機產品。"
  },
  {
    "word": "option",
    "pos": "n.",
    "cn_def": "選項",
    "en_def": "a choice",
    "sentence": "There are multiple {{BLANK}} available, but we need to choose the most viable one.",
    "cn": "有多個選項可供選擇，但我們需要選擇最可行的一個。"
  },
  {
    "word": "optional",
    "pos": "adj.",
    "cn_def": "可選的",
    "en_def": "not required; you can choose",
    "sentence": "Attendance at the workshop is {{BLANK}} , but I recommend going as it's very informative.",
    "cn": "參加研討會是可選的，但我建議去，因為它資訊豐富。"
  },
  {
    "word": "output",
    "pos": "n.",
    "cn_def": "產量",
    "en_def": "the amount that is produced",
    "sentence": "The factory's monthly {{BLANK}} has doubled since they introduced the new machinery.",
    "cn": "自從他們引入新的機器以來，工廠的月產量已經翻倍。"
  },
  {
    "word": "overall",
    "pos": "adv.",
    "cn_def": "總體上",
    "en_def": "in general; as a whole",
    "sentence": "{{BLANK}} , the event was a success even though there were minor issues.",
    "cn": "總體上，即使有些小問題，該活動還是成功的。"
  },
  {
    "word": "parallel",
    "pos": "n.",
    "cn_def": "平行線",
    "en_def": "a line that never meets another line",
    "sentence": "Geometry studies shapes, lines, and {{BLANK}} , among other things.",
    "cn": "幾何學研究形狀、線條和平行線等等。"
  },
  {
    "word": "parallel",
    "pos": "adj.",
    "cn_def": "平行的",
    "en_def": "always the same distance apart",
    "sentence": "The two streets are {{BLANK}} and never intersect.",
    "cn": "這兩條街道是平行的，永遠不會相交。"
  },
  {
    "word": "parameter",
    "pos": "n.",
    "cn_def": "參數",
    "en_def": "a limit that controls how something is done",
    "sentence": "Adjusting the {{BLANK}} of the experiment might yield different results.",
    "cn": "調整實驗的參數可能會產生不同的結果。"
  },
  {
    "word": "phase",
    "pos": "n.",
    "cn_def": "階段",
    "en_def": "one stage of a process",
    "sentence": "The project is now entering its final {{BLANK}} .",
    "cn": "該項目現在正在進入其最後階段。"
  },
  {
    "word": "predict",
    "pos": "v.",
    "cn_def": "預測",
    "en_def": "to say what will happen in the future",
    "sentence": "Based on the data, we can {{BLANK}} a positive trend in the upcoming months.",
    "cn": "根據這些數據，我們可以預測接下來幾個月會有一個正向的趨勢。"
  },
  {
    "word": "predicted",
    "pos": "adj.",
    "cn_def": "被預測的",
    "en_def": "expected to happen",
    "sentence": "The {{BLANK}} storm caused the event to be postponed.",
    "cn": "被預測的暴風雨導致活動被延後。"
  }
];

const MCQS = [
  {
    "q": "Protesters ______ the city square for three days.",
    "options": [
      "hypothesize",
      "sum",
      "occupy",
      "imply"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "His collection ______ two rooms in his house.",
    "options": [
      "resolve",
      "occupy",
      "internalize",
      "predict"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "She's currently ______ preparations for the upcoming event.",
    "options": [
      "be occupied with",
      "opt to",
      "debate over",
      "communicate with"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The meeting room is already ______ by another team.",
    "options": [
      "subsequent",
      "adequate",
      "dimensional",
      "occupied"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The ______ of the building ended after a week.",
    "options": [
      "parameter",
      "label",
      "occupation",
      "integration"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "His ______ is a software engineer, and he's been in the field for over 10 years.",
    "options": [
      "resolve",
      "resolution",
      "undertaking",
      "occupation"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "______ hazards are risks that people face in their line of work.",
    "options": [
      "undertaken",
      "occupational",
      "unpredicted",
      "retained"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "She decided to ______ take the longer but more scenic route.",
    "options": [
      "opt to",
      "regardless of",
      "make a commitment to",
      "be occupied with"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Given the options, many customers ______ organic products.",
    "options": [
      "prior to",
      "regardless of",
      "opt for",
      "be under stress"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "There are multiple ______ available, but we need to choose the most viable one.",
    "options": [
      "sum",
      "mechanism",
      "cycling",
      "option"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Attendance at the workshop is ______ , but I recommend going as it's very informative.",
    "options": [
      "optional",
      "implied",
      "integrated",
      "attributed"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The factory's monthly ______ has doubled since they introduced the new machinery.",
    "options": [
      "implication",
      "output",
      "access",
      "emergence"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "______ , the event was a success even though there were minor issues.",
    "options": [
      "annually",
      "approximately",
      "overall",
      "adequately"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Geometry studies shapes, lines, and ______ , among other things.",
    "options": [
      "job",
      "parallel",
      "resolve",
      "principle"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The two streets are ______ and never intersect.",
    "options": [
      "parallel",
      "prior",
      "undertaken",
      "occupational"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Adjusting the ______ of the experiment might yield different results.",
    "options": [
      "cycling",
      "integration",
      "emergence",
      "parameter"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The project is now entering its final ______ .",
    "options": [
      "integration",
      "statistics",
      "phase",
      "principle"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Based on the data, we can ______ a positive trend in the upcoming months.",
    "options": [
      "cycle",
      "predict",
      "internalize",
      "granted"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The ______ storm caused the event to be postponed.",
    "options": [
      "adequate",
      "parallel",
      "emergent",
      "predicted"
    ],
    "answer": 3,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "occupy": {
    "pos": "v.",
    "en_def": "to take control of a place",
    "cn_def": "佔領",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take control of a place",
        "cn_def": "佔領"
      },
      {
        "pos": "v.",
        "en_def": "to fill or use a space or time",
        "cn_def": "占用"
      }
    ]
  },
  "be occupied with": {
    "pos": "phr.",
    "en_def": "to be busy doing something",
    "cn_def": "忙於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be busy doing something",
        "cn_def": "忙於"
      }
    ]
  },
  "occupied with": {
    "pos": "phr.",
    "en_def": "to be busy doing something",
    "cn_def": "忙於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be busy doing something",
        "cn_def": "忙於"
      }
    ]
  },
  "occupied": {
    "pos": "adj.",
    "en_def": "being used; taken over by someone",
    "cn_def": "被佔領的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "being used; taken over by someone",
        "cn_def": "被佔領的"
      }
    ]
  },
  "occupation": {
    "pos": "n.",
    "en_def": "taking control of a place by force",
    "cn_def": "佔領",
    "combined": [
      {
        "pos": "n.",
        "en_def": "taking control of a place by force",
        "cn_def": "佔領"
      },
      {
        "pos": "n.",
        "en_def": "a job",
        "cn_def": "職業"
      }
    ]
  },
  "occupational": {
    "pos": "adj.",
    "en_def": "about a person's job",
    "cn_def": "職業的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "about a person's job",
        "cn_def": "職業的"
      }
    ]
  },
  "opt to": {
    "pos": "phr.",
    "en_def": "to choose to do something",
    "cn_def": "選擇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to choose to do something",
        "cn_def": "選擇"
      }
    ]
  },
  "opt for": {
    "pos": "phr.",
    "en_def": "to choose something",
    "cn_def": "選擇",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to choose something",
        "cn_def": "選擇"
      }
    ]
  },
  "option": {
    "pos": "n.",
    "en_def": "a choice",
    "cn_def": "選項",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a choice",
        "cn_def": "選項"
      }
    ]
  },
  "optional": {
    "pos": "adj.",
    "en_def": "not required; you can choose",
    "cn_def": "可選的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not required; you can choose",
        "cn_def": "可選的"
      }
    ]
  },
  "output": {
    "pos": "n.",
    "en_def": "the amount that is produced",
    "cn_def": "產量",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the amount that is produced",
        "cn_def": "產量"
      }
    ]
  },
  "overall": {
    "pos": "adv.",
    "en_def": "in general; as a whole",
    "cn_def": "總體上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in general; as a whole",
        "cn_def": "總體上"
      }
    ]
  },
  "parallel": {
    "pos": "n.",
    "en_def": "a line that never meets another line",
    "cn_def": "平行線",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a line that never meets another line",
        "cn_def": "平行線"
      },
      {
        "pos": "adj.",
        "en_def": "always the same distance apart",
        "cn_def": "平行的"
      }
    ]
  },
  "parameter": {
    "pos": "n.",
    "en_def": "a limit that controls how something is done",
    "cn_def": "參數",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a limit that controls how something is done",
        "cn_def": "參數"
      }
    ]
  },
  "phase": {
    "pos": "n.",
    "en_def": "one stage of a process",
    "cn_def": "階段",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one stage of a process",
        "cn_def": "階段"
      }
    ]
  },
  "predict": {
    "pos": "v.",
    "en_def": "to say what will happen in the future",
    "cn_def": "預測",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say what will happen in the future",
        "cn_def": "預測"
      }
    ]
  },
  "predicted": {
    "pos": "adj.",
    "en_def": "expected to happen",
    "cn_def": "被預測的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expected to happen",
        "cn_def": "被預測的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
