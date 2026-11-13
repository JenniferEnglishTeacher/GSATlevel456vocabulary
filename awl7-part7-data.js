// Part 7 Quiz Data: survival – volunteer
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 7 Part 7 - survival – volunteer",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "survival",
    "pos": "n.",
    "cn_def": "生存",
    "en_def": "staying alive",
    "sentence": "The {{BLANK}} of the fittest is a concept derived from evolutionary theory.",
    "cn": "適者生存是從進化理論中得出的概念。"
  },
  {
    "word": "survivor",
    "pos": "n.",
    "cn_def": "生還者",
    "en_def": "a person who stays alive after danger",
    "sentence": "The {{BLANK}} of the accident were rescued and provided medical attention.",
    "cn": "事故的生還者得到了救援並得到了醫療照顧。"
  },
  {
    "word": "thesis",
    "pos": "n.",
    "cn_def": "論文",
    "en_def": "a long piece of writing for a university degree",
    "sentence": "She is currently working on her {{BLANK}} which explores the impacts of social media.",
    "cn": "她目前正在研究她的論文，探討社交媒體的影響。"
  },
  {
    "word": "topic",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "a subject people talk or write about",
    "sentence": "The {{BLANK}} of discussion for today's meeting is improving team collaboration.",
    "cn": "今天會議的討論主題是提高團隊協作。"
  },
  {
    "word": "transmit",
    "pos": "v.",
    "cn_def": "傳送",
    "en_def": "to send signals or messages",
    "sentence": "The radio tower is used to {{BLANK}} signals across long distances.",
    "cn": "廣播塔用於跨長距離傳送信號。"
  },
  {
    "word": "transmitted",
    "pos": "adj.",
    "cn_def": "傳送的",
    "en_def": "sent or passed on",
    "sentence": "The {{BLANK}} data enabled researchers to analyze the situation remotely.",
    "cn": "傳送的數據使研究人員能夠遠程分析情況。"
  },
  {
    "word": "transmission",
    "pos": "n.",
    "cn_def": "傳送",
    "en_def": "the act of sending signals or messages",
    "sentence": "The {{BLANK}} of cultural values occurs through various societal institutions.",
    "cn": "文化價值的傳送通過各種社會機構進行。"
  },
  {
    "word": "ultimate",
    "pos": "adj.",
    "cn_def": "最終的",
    "en_def": "final; most important",
    "sentence": "The {{BLANK}} goal is to achieve a sustainable and inclusive economy.",
    "cn": "最終目標是實現可持續和包容的經濟。"
  },
  {
    "word": "ultimately",
    "pos": "adv.",
    "cn_def": "最終",
    "en_def": "in the end",
    "sentence": "{{BLANK}}, the decision rests with the board of directors.",
    "cn": "最終，決定由董事會做出。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的",
    "en_def": "very special; the only one of its kind",
    "sentence": "Each person has a {{BLANK}} set of experiences that shape their perspective.",
    "cn": "每個人都有一套獨特的經歷，塑造了他們的觀點。"
  },
  {
    "word": "visible",
    "pos": "adj.",
    "cn_def": "可見的",
    "en_def": "able to be seen",
    "sentence": "The stars are not {{BLANK}} during the day due to the brightness of the sun.",
    "cn": "由於太陽的光亮，白天看不見星星。"
  },
  {
    "word": "invisible",
    "pos": "adj.",
    "cn_def": "看不見的",
    "en_def": "not able to be seen",
    "sentence": "There are many {{BLANK}} factors that can influence a situation.",
    "cn": "有許多看不見的因素可能會影響一個情況。"
  },
  {
    "word": "visibility",
    "pos": "n.",
    "cn_def": "可見度",
    "en_def": "how well you can see",
    "sentence": "The fog reduced {{BLANK}} on the road, making driving hazardous.",
    "cn": "霧減少了道路上的能見度，使駕駛變得危險。"
  },
  {
    "word": "voluntary",
    "pos": "adj.",
    "cn_def": "自願的",
    "en_def": "done because you want to, not for money",
    "sentence": "She took a {{BLANK}} leave of absence to care for her family.",
    "cn": "她自願請假照顧家人。"
  },
  {
    "word": "volunteer",
    "pos": "v.",
    "cn_def": "自願",
    "en_def": "to offer to do something without being paid",
    "sentence": "Many people {{BLANK}} their time and skills to help community projects.",
    "cn": "許多人自願花時間和技能幫助社區項目。"
  },
  {
    "word": "volunteer",
    "pos": "n.",
    "cn_def": "志願者",
    "en_def": "a person who works without being paid",
    "sentence": "The event was successful thanks to the hard work of {{BLANK}}.",
    "cn": "由於志願者的努力，活動取得了成功。"
  }
];

const MCQS = [
  {
    "q": "The ______ of the fittest is a concept derived from evolutionary theory.",
    "options": [
      "insertion",
      "conversion",
      "survival",
      "mode"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The ______ of the accident were rescued and provided medical attention.",
    "options": [
      "transmission",
      "intervention",
      "thesis",
      "survivor"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "She is currently working on her ______ which explores the impacts of social media.",
    "options": [
      "ideology",
      "thesis",
      "reverse",
      "channel"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The ______ of discussion for today's meeting is improving team collaboration.",
    "options": [
      "topic",
      "foundation",
      "survival",
      "comprehension"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The radio tower is used to ______ signals across long distances.",
    "options": [
      "survive",
      "deny",
      "transmit",
      "differentiate"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The ______ data enabled researchers to analyze the situation remotely.",
    "options": [
      "intervened",
      "definite",
      "prohibited",
      "transmitted"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The ______ of cultural values occurs through various societal institutions.",
    "options": [
      "transmission",
      "release",
      "decade",
      "differentiation"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The ______ goal is to achieve a sustainable and inclusive economy.",
    "options": [
      "infinite",
      "ultimate",
      "adult",
      "successive"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "______, the decision rests with the board of directors.",
    "options": [
      "solely",
      "globally",
      "somewhat",
      "ultimately"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Each person has a ______ set of experiences that shape their perspective.",
    "options": [
      "extracted",
      "unique",
      "invisible",
      "sole"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The stars are not ______ during the day due to the brightness of the sun.",
    "options": [
      "visible",
      "released",
      "finite",
      "published"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "There are many ______ factors that can influence a situation.",
    "options": [
      "indefinite",
      "guaranteed",
      "invisible",
      "finite"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The fog reduced ______ on the road, making driving hazardous.",
    "options": [
      "visibility",
      "globe",
      "ideology",
      "publisher"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "She took a ______ leave of absence to care for her family.",
    "options": [
      "inferred",
      "infinite",
      "extracted",
      "voluntary"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Many people ______ their time and skills to help community projects.",
    "options": [
      "comprise",
      "innovate",
      "volunteer",
      "adapt"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The event was successful thanks to the hard work of ______.",
    "options": [
      "publication",
      "volunteer",
      "topic",
      "media"
    ],
    "answer": 1,
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "survival": {
    "pos": "n.",
    "en_def": "staying alive",
    "cn_def": "生存",
    "combined": [
      {
        "pos": "n.",
        "en_def": "staying alive",
        "cn_def": "生存"
      }
    ]
  },
  "survivor": {
    "pos": "n.",
    "en_def": "a person who stays alive after danger",
    "cn_def": "生還者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who stays alive after danger",
        "cn_def": "生還者"
      }
    ]
  },
  "thesis": {
    "pos": "n.",
    "en_def": "a long piece of writing for a university degree",
    "cn_def": "論文",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long piece of writing for a university degree",
        "cn_def": "論文"
      }
    ]
  },
  "topic": {
    "pos": "n.",
    "en_def": "a subject people talk or write about",
    "cn_def": "主題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a subject people talk or write about",
        "cn_def": "主題"
      }
    ]
  },
  "transmit": {
    "pos": "v.",
    "en_def": "to send signals or messages",
    "cn_def": "傳送",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to send signals or messages",
        "cn_def": "傳送"
      }
    ]
  },
  "transmitted": {
    "pos": "adj.",
    "en_def": "sent or passed on",
    "cn_def": "傳送的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sent or passed on",
        "cn_def": "傳送的"
      }
    ]
  },
  "transmission": {
    "pos": "n.",
    "en_def": "the act of sending signals or messages",
    "cn_def": "傳送",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of sending signals or messages",
        "cn_def": "傳送"
      }
    ]
  },
  "ultimate": {
    "pos": "adj.",
    "en_def": "final; most important",
    "cn_def": "最終的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "final; most important",
        "cn_def": "最終的"
      }
    ]
  },
  "ultimately": {
    "pos": "adv.",
    "en_def": "in the end",
    "cn_def": "最終",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in the end",
        "cn_def": "最終"
      }
    ]
  },
  "unique": {
    "pos": "adj.",
    "en_def": "very special; the only one of its kind",
    "cn_def": "獨特的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very special; the only one of its kind",
        "cn_def": "獨特的"
      }
    ]
  },
  "visible": {
    "pos": "adj.",
    "en_def": "able to be seen",
    "cn_def": "可見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be seen",
        "cn_def": "可見的"
      }
    ]
  },
  "invisible": {
    "pos": "adj.",
    "en_def": "not able to be seen",
    "cn_def": "看不見的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to be seen",
        "cn_def": "看不見的"
      }
    ]
  },
  "visibility": {
    "pos": "n.",
    "en_def": "how well you can see",
    "cn_def": "可見度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how well you can see",
        "cn_def": "可見度"
      }
    ]
  },
  "voluntary": {
    "pos": "adj.",
    "en_def": "done because you want to, not for money",
    "cn_def": "自願的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "done because you want to, not for money",
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
