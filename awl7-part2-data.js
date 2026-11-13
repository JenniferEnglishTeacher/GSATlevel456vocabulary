// Part 2 Quiz Data: on the contrary – elimination
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 7 Part 2 - on the contrary – elimination",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "on the contrary",
    "pos": "phr.",
    "cn_def": "相反",
    "en_def": "the opposite is true",
    "sentence": "I thought he would be upset, but {{BLANK}}, he was quite pleased.",
    "cn": "我以為他會生氣，但相反，他非常高興。"
  },
  {
    "word": "contrary to",
    "pos": "phr.",
    "cn_def": "與...相反",
    "en_def": "opposite to; not agreeing with",
    "sentence": "{{BLANK}} popular belief, not all spiders are dangerous.",
    "cn": "與普遍看法相反，並非所有蜘蛛都是危險的。"
  },
  {
    "word": "convert",
    "pos": "v.",
    "cn_def": "轉變",
    "en_def": "to change from one form into another",
    "sentence": "They plan to {{BLANK}} the old factory into a modern art gallery.",
    "cn": "他們計劃將舊工廠轉變為現代藝術畫廊。"
  },
  {
    "word": "converted",
    "pos": "adj.",
    "cn_def": "被轉變的",
    "en_def": "changed into another form",
    "sentence": "The {{BLANK}} warehouse now serves as a community center.",
    "cn": "被轉變的倉庫現在作為社區中心使用。"
  },
  {
    "word": "conversion",
    "pos": "n.",
    "cn_def": "轉變",
    "en_def": "changing something into another form",
    "sentence": "The {{BLANK}} of the building into a school took about a year.",
    "cn": "將建築物轉變為學校大約花了一年的時間。"
  },
  {
    "word": "couple",
    "pos": "n.",
    "cn_def": "夫婦",
    "en_def": "two people who are married or together",
    "sentence": "The {{BLANK}} decided to go for a long drive over the weekend.",
    "cn": "這對夫婦決定在周末時出去長途驅車。"
  },
  {
    "word": "a couple of",
    "pos": "phr.",
    "cn_def": "一些",
    "en_def": "two or a few",
    "sentence": "He brought {{BLANK}} friends along to the party.",
    "cn": "他帶了一對朋友參加聚會。"
  },
  {
    "word": "decade",
    "pos": "n.",
    "cn_def": "十年",
    "en_def": "a period of ten years",
    "sentence": "Over the past {{BLANK}}, the city has seen a dramatic increase in population.",
    "cn": "在過去的十年中，城市的人口急劇增加。"
  },
  {
    "word": "definite",
    "pos": "adj.",
    "cn_def": "明確的",
    "en_def": "certain; sure",
    "sentence": "We need a {{BLANK}} answer by the end of the day to proceed with the plans.",
    "cn": "我們需要在一天結束時得到明確的答案才能繼續計劃。"
  },
  {
    "word": "indefinite",
    "pos": "adj.",
    "cn_def": "無限的",
    "en_def": "with no fixed end",
    "sentence": "The project has been put on an {{BLANK}} hold due to lack of funding.",
    "cn": "由於缺乏資金，該項目已被無限期擱置。"
  },
  {
    "word": "deny",
    "pos": "v.",
    "cn_def": "否認",
    "en_def": "to say that something is not true",
    "sentence": "The politician had to {{BLANK}} the allegations made against him.",
    "cn": "政治人士不得不否認對他提出的指控。"
  },
  {
    "word": "denial",
    "pos": "n.",
    "cn_def": "否認",
    "en_def": "a statement that something is not true",
    "sentence": "His {{BLANK}} of the accusations didn't convince everyone.",
    "cn": "他對指控的否認並未使每個人信服。"
  },
  {
    "word": "differ from",
    "pos": "phr.",
    "cn_def": "與...不同",
    "en_def": "to be different from something",
    "sentence": "The policies of this administration {{BLANK}} those of the previous one.",
    "cn": "這屆政府的政策與上一屆的政策不同。"
  },
  {
    "word": "differentiate",
    "pos": "v.",
    "cn_def": "區分",
    "en_def": "to see or show the difference between things",
    "sentence": "It's important to {{BLANK}} between facts and opinions.",
    "cn": "區分事實和意見非常重要。"
  },
  {
    "word": "differentiation",
    "pos": "n.",
    "cn_def": "區別",
    "en_def": "the act of showing differences",
    "sentence": "The {{BLANK}} of tasks within the team led to a more efficient workflow.",
    "cn": "團隊內部的任務區別使工作流程更為高效。"
  },
  {
    "word": "dispose of",
    "pos": "phr.",
    "cn_def": "處理",
    "en_def": "to get rid of something",
    "sentence": "Please {{BLANK}} your trash properly to maintain cleanliness.",
    "cn": "請妥善處理您的垃圾以保持清潔。"
  },
  {
    "word": "disposed",
    "pos": "adj.",
    "cn_def": "傾向於",
    "en_def": "to be likely to do something",
    "sentence": "She is {{BLANK}} to agree with the proposal given its benefits.",
    "cn": "鑑於其好處，她傾向於同意該提議。"
  },
  {
    "word": "disposal",
    "pos": "n.",
    "cn_def": "處理掉丟棄",
    "en_def": "throwing something away",
    "sentence": "The {{BLANK}} of hazardous waste requires special procedures to ensure safety.",
    "cn": "危險廢物的處理需要特殊程序以確保安全。"
  },
  {
    "word": "dynamic",
    "pos": "n.",
    "cn_def": "動態",
    "en_def": "the forces that cause change in a situation",
    "sentence": "The {{BLANK}} of the market changes rapidly, requiring businesses to adapt quickly.",
    "cn": "市場的動態變化很快，要求企業迅速適應。"
  },
  {
    "word": "eliminate",
    "pos": "v.",
    "cn_def": "消除，淘汰",
    "en_def": "to remove something completely",
    "sentence": "They aim to {{BLANK}} the barriers preventing access to education.",
    "cn": "他們的目標是消除阻止獲取教育的障礙。"
  },
  {
    "word": "eliminated",
    "pos": "adj.",
    "cn_def": "被消除的被淘汰的",
    "en_def": "removed or taken out of a competition",
    "sentence": "The {{BLANK}} risks allowed the project to proceed smoothly.",
    "cn": "被消除的風險使項目得以順利進行。"
  },
  {
    "word": "elimination",
    "pos": "n.",
    "cn_def": "消除",
    "en_def": "the act of removing something",
    "sentence": "The {{BLANK}} of errors in the data set was crucial for accurate analysis.",
    "cn": "數據集中的錯誤消除對於準確分析至關重要。"
  }
];

const MCQS = [
  {
    "q": "I thought he would be upset, but ______, he was quite pleased.",
    "options": [
      "release a hostage",
      "a couple of",
      "on the contrary",
      "be disposed to V"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "______ popular belief, not all spiders are dangerous.",
    "options": [
      "contrary to",
      "be disposed to V",
      "be comprised of",
      "dispose of"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "They plan to ______ the old factory into a modern art gallery.",
    "options": [
      "comprehend",
      "aid",
      "insert",
      "convert"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The ______ warehouse now serves as a community center.",
    "options": [
      "irreversible",
      "converted",
      "transmitted",
      "finite"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The ______ of the building into a school took about a year.",
    "options": [
      "conversion",
      "disposal",
      "intervention",
      "file"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The ______ decided to go for a long drive over the weekend.",
    "options": [
      "chemical",
      "decade",
      "publication",
      "couple"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "He brought ______ friends along to the party.",
    "options": [
      "release pressure",
      "a couple of",
      "prior to",
      "be equipped with"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Over the past ______, the city has seen a dramatic increase in population.",
    "options": [
      "transmission",
      "foundation",
      "decade",
      "channel"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "We need a ______ answer by the end of the day to proceed with the plans.",
    "options": [
      "submitted",
      "classical",
      "contrary",
      "definite"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The project has been put on an ______ hold due to lack of funding.",
    "options": [
      "extracted",
      "empirical",
      "indefinite",
      "contrary"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The politician had to ______ the allegations made against him.",
    "options": [
      "deny",
      "isolate",
      "submit",
      "adapt"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "His ______ of the accusations didn't convince everyone.",
    "options": [
      "visibility",
      "denial",
      "decade",
      "publication"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The policies of this administration ______ those of the previous one.",
    "options": [
      "dispose of",
      "be comprised of",
      "differ from",
      "be disposed to V"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "It's important to ______ between facts and opinions.",
    "options": [
      "comprehend",
      "differentiate",
      "simulate",
      "adapt"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The ______ of tasks within the team led to a more efficient workflow.",
    "options": [
      "comprehension",
      "channel",
      "survivor",
      "differentiation"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Please ______ your trash properly to maintain cleanliness.",
    "options": [
      "dispose of",
      "be disposed to V",
      "grade",
      "identical to"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "She is ______ to agree with the proposal given its benefits.",
    "options": [
      "release pressure",
      "grade",
      "be disposed to V",
      "dispose of"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The ______ of hazardous waste requires special procedures to ensure safety.",
    "options": [
      "reverse",
      "disposal",
      "priority",
      "publisher"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The ______ of the market changes rapidly, requiring businesses to adapt quickly.",
    "options": [
      "dynamic",
      "file",
      "simulation",
      "foundation"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "They aim to ______ the barriers preventing access to education.",
    "options": [
      "equip",
      "guarantee",
      "found",
      "eliminate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The ______ risks allowed the project to proceed smoothly.",
    "options": [
      "empirical",
      "extracted",
      "eliminated",
      "published"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The ______ of errors in the data set was crucial for accurate analysis.",
    "options": [
      "priority",
      "elimination",
      "denial",
      "ideology"
    ],
    "answer": 1,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "on the contrary": {
    "pos": "phr.",
    "en_def": "the opposite is true",
    "cn_def": "相反",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the opposite is true",
        "cn_def": "相反"
      }
    ]
  },
  "contrary to": {
    "pos": "phr.",
    "en_def": "opposite to; not agreeing with",
    "cn_def": "與...相反",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "opposite to; not agreeing with",
        "cn_def": "與...相反"
      }
    ]
  },
  "convert": {
    "pos": "v.",
    "en_def": "to change from one form into another",
    "cn_def": "轉變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change from one form into another",
        "cn_def": "轉變"
      }
    ]
  },
  "converted": {
    "pos": "adj.",
    "en_def": "changed into another form",
    "cn_def": "被轉變的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "changed into another form",
        "cn_def": "被轉變的"
      }
    ]
  },
  "conversion": {
    "pos": "n.",
    "en_def": "changing something into another form",
    "cn_def": "轉變",
    "combined": [
      {
        "pos": "n.",
        "en_def": "changing something into another form",
        "cn_def": "轉變"
      }
    ]
  },
  "couple": {
    "pos": "n.",
    "en_def": "two people who are married or together",
    "cn_def": "夫婦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "two people who are married or together",
        "cn_def": "夫婦"
      }
    ]
  },
  "a couple of": {
    "pos": "phr.",
    "en_def": "two or a few",
    "cn_def": "一些",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "two or a few",
        "cn_def": "一些"
      }
    ]
  },
  "decade": {
    "pos": "n.",
    "en_def": "a period of ten years",
    "cn_def": "十年",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of ten years",
        "cn_def": "十年"
      }
    ]
  },
  "definite": {
    "pos": "adj.",
    "en_def": "certain; sure",
    "cn_def": "明確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "certain; sure",
        "cn_def": "明確的"
      }
    ]
  },
  "indefinite": {
    "pos": "adj.",
    "en_def": "with no fixed end",
    "cn_def": "無限的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "with no fixed end",
        "cn_def": "無限的"
      }
    ]
  },
  "deny": {
    "pos": "v.",
    "en_def": "to say that something is not true",
    "cn_def": "否認",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say that something is not true",
        "cn_def": "否認"
      }
    ]
  },
  "denial": {
    "pos": "n.",
    "en_def": "a statement that something is not true",
    "cn_def": "否認",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement that something is not true",
        "cn_def": "否認"
      }
    ]
  },
  "differ from": {
    "pos": "phr.",
    "en_def": "to be different from something",
    "cn_def": "與...不同",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be different from something",
        "cn_def": "與...不同"
      }
    ]
  },
  "differentiate": {
    "pos": "v.",
    "en_def": "to see or show the difference between things",
    "cn_def": "區分",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to see or show the difference between things",
        "cn_def": "區分"
      }
    ]
  },
  "differentiation": {
    "pos": "n.",
    "en_def": "the act of showing differences",
    "cn_def": "區別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of showing differences",
        "cn_def": "區別"
      }
    ]
  },
  "dispose of": {
    "pos": "phr.",
    "en_def": "to get rid of something",
    "cn_def": "處理",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to get rid of something",
        "cn_def": "處理"
      }
    ]
  },
  "be disposed to v = tend to v": {
    "pos": "adj.",
    "en_def": "to be likely to do something",
    "cn_def": "傾向於",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "to be likely to do something",
        "cn_def": "傾向於"
      }
    ]
  },
  "disposed": {
    "pos": "adj.",
    "en_def": "to be likely to do something",
    "cn_def": "傾向於",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "to be likely to do something",
        "cn_def": "傾向於"
      }
    ]
  },
  "disposal": {
    "pos": "n.",
    "en_def": "throwing something away",
    "cn_def": "處理掉丟棄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "throwing something away",
        "cn_def": "處理掉丟棄"
      }
    ]
  },
  "dynamic": {
    "pos": "n.",
    "en_def": "the forces that cause change in a situation",
    "cn_def": "動態",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the forces that cause change in a situation",
        "cn_def": "動態"
      }
    ]
  },
  "eliminate": {
    "pos": "v.",
    "en_def": "to remove something completely",
    "cn_def": "消除，淘汰",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to remove something completely",
        "cn_def": "消除，淘汰"
      }
    ]
  },
  "eliminated": {
    "pos": "adj.",
    "en_def": "removed or taken out of a competition",
    "cn_def": "被消除的被淘汰的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "removed or taken out of a competition",
        "cn_def": "被消除的被淘汰的"
      }
    ]
  },
  "elimination": {
    "pos": "n.",
    "en_def": "the act of removing something",
    "cn_def": "消除",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of removing something",
        "cn_def": "消除"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
