// Unit 19 Quiz Data: astrology – technique
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "4000 Essential Words Book 4 U19 - astrology – technique",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "astrology",
    "pos": "n.",
    "cn_def": "占星術",
    "en_def": "the study of how the stars and planets are believed to affect people's lives",
    "sentence": "She believes in {{BLANK}} and reads about her star sign every morning.",
    "cn": "她相信占星術，每天早上都看自己的星座運勢。"
  },
  {
    "word": "couple",
    "pos": "n.",
    "cn_def": "一對；夫妻",
    "en_def": "two people who are married or in a relationship",
    "sentence": "The young {{BLANK}} got married last spring and moved to Taipei.",
    "cn": "那對年輕夫妻去年春天結婚後搬到台北。"
  },
  {
    "word": "deviate",
    "pos": "v.",
    "cn_def": "偏離",
    "en_def": "to do something different from what is usual or planned",
    "sentence": "The pilot had to {{BLANK}} from the usual route because of the storm.",
    "cn": "飛行員因暴風雨不得不偏離平常的航線。"
  },
  {
    "word": "differentiate",
    "pos": "v.",
    "cn_def": "區分；辨別",
    "en_def": "to see or show the difference between things",
    "sentence": "Young babies cannot {{BLANK}} between day and night.",
    "cn": "小嬰兒無法分辨白天和黑夜。"
  },
  {
    "word": "disrupt",
    "pos": "v.",
    "cn_def": "擾亂；中斷",
    "en_def": "to stop something from continuing in the normal way",
    "sentence": "Heavy snow may {{BLANK}} train service across the country.",
    "cn": "大雪可能擾亂全國的火車營運。"
  },
  {
    "word": "equation",
    "pos": "n.",
    "cn_def": "方程式；等式",
    "en_def": "a statement in math that two amounts are equal",
    "sentence": "The teacher wrote the {{BLANK}} \"2x + 3 = 7\" on the board.",
    "cn": "老師在黑板上寫下「2x + 3 = 7」這個方程式。"
  },
  {
    "word": "err",
    "pos": "v.",
    "cn_def": "犯錯",
    "en_def": "to make a mistake",
    "sentence": "It is human to {{BLANK}}, so don't be too hard on yourself.",
    "cn": "人都會犯錯，所以別對自己太苛刻。"
  },
  {
    "word": "erroneous",
    "pos": "adj.",
    "cn_def": "錯誤的",
    "en_def": "not correct",
    "sentence": "The newspaper apologized for printing {{BLANK}} information about the accident.",
    "cn": "報社為刊登有關事故的錯誤資訊而道歉。"
  },
  {
    "word": "frantic",
    "pos": "adj.",
    "cn_def": "慌亂的；發狂似的",
    "en_def": "very worried and unable to stay calm",
    "sentence": "The {{BLANK}} mother ran through the store calling her lost child's name.",
    "cn": "那位慌亂的母親在店裡奔跑，呼喊走失孩子的名字。"
  },
  {
    "word": "inadvertent",
    "pos": "adj.",
    "cn_def": "無心的；非故意的",
    "en_def": "not done on purpose",
    "sentence": "It was an {{BLANK}} mistake; I did not mean to delete your file.",
    "cn": "那是無心之過，我不是故意刪除你的檔案。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興創作；臨時湊合",
    "en_def": "to make or do something without preparing first",
    "sentence": "The actor forgot his lines and had to {{BLANK}} on stage.",
    "cn": "那位演員忘了台詞，只好在台上即興發揮。"
  },
  {
    "word": "latitude",
    "pos": "n.",
    "cn_def": "緯度",
    "en_def": "the distance of a place north or south of the equator",
    "sentence": "Taipei lies at a {{BLANK}} of about twenty-five degrees north.",
    "cn": "台北位於大約北緯二十五度。"
  },
  {
    "word": "mariner",
    "pos": "n.",
    "cn_def": "水手；航海者",
    "en_def": "a sailor",
    "sentence": "The old {{BLANK}} had sailed every ocean in the world.",
    "cn": "那位老水手航行過世界上每一片海洋。"
  },
  {
    "word": "multitude",
    "pos": "n.",
    "cn_def": "大量；許多",
    "en_def": "a very large number of people or things",
    "sentence": "A {{BLANK}} of stars filled the clear night sky.",
    "cn": "無數的星星佈滿晴朗的夜空。"
  },
  {
    "word": "nuisance",
    "pos": "n.",
    "cn_def": "討厭的人或事物",
    "en_def": "a person or thing that annoys you",
    "sentence": "The flies are a real {{BLANK}} when we eat outside in summer.",
    "cn": "夏天在戶外吃飯時，蒼蠅真是討厭。"
  },
  {
    "word": "permanence",
    "pos": "n.",
    "cn_def": "永久；持久",
    "en_def": "the state of lasting for a long time or forever",
    "sentence": "After moving ten times, the family wanted some {{BLANK}} in their lives.",
    "cn": "搬了十次家後，這家人希望生活能安定長久一些。"
  },
  {
    "word": "revolve",
    "pos": "v.",
    "cn_def": "旋轉；環繞",
    "en_def": "to move around something in a circle",
    "sentence": "The earth and the other planets {{BLANK}} around the sun.",
    "cn": "地球和其他行星繞著太陽運轉。"
  },
  {
    "word": "soothe",
    "pos": "v.",
    "cn_def": "安撫；緩和",
    "en_def": "to make someone feel calmer or less in pain",
    "sentence": "The mother sang softly to {{BLANK}} her crying baby.",
    "cn": "母親輕聲歌唱安撫哭鬧的寶寶。"
  },
  {
    "word": "stranded",
    "pos": "adj.",
    "cn_def": "受困的；滯留的",
    "en_def": "unable to leave a place",
    "sentence": "Hundreds of travelers were {{BLANK}} at the airport because of the snow.",
    "cn": "數百名旅客因大雪滯留在機場。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧；技術",
    "en_def": "a special way of doing something",
    "sentence": "The swimming coach taught us a new {{BLANK}} for breathing in the water.",
    "cn": "游泳教練教我們一種在水中換氣的新技巧。"
  }
];

const MCQS = [
  {
    "q": "She believes in ______ and reads about her star sign every morning.",
    "options": [
      "nuisance",
      "equation",
      "mariner",
      "astrology"
    ],
    "answer": 3,
    "cn": "她相信占星術，每天早上都看自己的星座運勢。",
    "vocabIndex": 0
  },
  {
    "q": "The young ______ got married last spring and moved to Taipei.",
    "options": [
      "couple",
      "latitude",
      "mariner",
      "equation"
    ],
    "answer": 0,
    "cn": "那對年輕夫妻去年春天結婚後搬到台北。",
    "vocabIndex": 1
  },
  {
    "q": "The pilot had to ______ from the usual route because of the storm.",
    "options": [
      "differentiate",
      "revolve",
      "deviate",
      "soothe"
    ],
    "answer": 2,
    "cn": "飛行員因暴風雨不得不偏離平常的航線。",
    "vocabIndex": 2
  },
  {
    "q": "Young babies cannot ______ between day and night.",
    "options": [
      "improvise",
      "differentiate",
      "err",
      "soothe"
    ],
    "answer": 1,
    "cn": "小嬰兒無法分辨白天和黑夜。",
    "vocabIndex": 3
  },
  {
    "q": "Heavy snow may ______ train service across the country.",
    "options": [
      "disrupt",
      "revolve",
      "deviate",
      "err"
    ],
    "answer": 0,
    "cn": "大雪可能擾亂全國的火車營運。",
    "vocabIndex": 4
  },
  {
    "q": "The teacher wrote the ______ \"2x + 3 = 7\" on the board.",
    "options": [
      "mariner",
      "latitude",
      "equation",
      "technique"
    ],
    "answer": 2,
    "cn": "老師在黑板上寫下「2x + 3 = 7」這個方程式。",
    "vocabIndex": 5
  },
  {
    "q": "It is human to ______, so don't be too hard on yourself.",
    "options": [
      "improvise",
      "differentiate",
      "revolve",
      "err"
    ],
    "answer": 3,
    "cn": "人都會犯錯，所以別對自己太苛刻。",
    "vocabIndex": 6
  },
  {
    "q": "The newspaper apologized for printing ______ information about the accident.",
    "options": [
      "stranded",
      "erroneous",
      "frantic",
      "absurd"
    ],
    "answer": 1,
    "cn": "報社為刊登有關事故的錯誤資訊而道歉。",
    "vocabIndex": 7
  },
  {
    "q": "The ______ mother ran through the store calling her lost child's name.",
    "options": [
      "frantic",
      "erroneous",
      "stranded",
      "inadvertent"
    ],
    "answer": 0,
    "cn": "那位慌亂的母親在店裡奔跑，呼喊走失孩子的名字。",
    "vocabIndex": 8
  },
  {
    "q": "It was an ______ mistake; I did not mean to delete your file.",
    "options": [
      "frantic",
      "inadvertent",
      "stranded",
      "reputable"
    ],
    "answer": 1,
    "cn": "那是無心之過，我不是故意刪除你的檔案。",
    "vocabIndex": 9
  },
  {
    "q": "The actor forgot his lines and had to ______ on stage.",
    "options": [
      "disrupt",
      "soothe",
      "deviate",
      "improvise"
    ],
    "answer": 3,
    "cn": "那位演員忘了台詞，只好在台上即興發揮。",
    "vocabIndex": 10
  },
  {
    "q": "Taipei lies at a ______ of about twenty-five degrees north.",
    "options": [
      "technique",
      "permanence",
      "latitude",
      "couple"
    ],
    "answer": 2,
    "cn": "台北位於大約北緯二十五度。",
    "vocabIndex": 11
  },
  {
    "q": "The old ______ had sailed every ocean in the world.",
    "options": [
      "astrology",
      "couple",
      "nuisance",
      "mariner"
    ],
    "answer": 3,
    "cn": "那位老水手航行過世界上每一片海洋。",
    "vocabIndex": 12
  },
  {
    "q": "A ______ of stars filled the clear night sky.",
    "options": [
      "multitude",
      "mariner",
      "latitude",
      "couple"
    ],
    "answer": 0,
    "cn": "無數的星星佈滿晴朗的夜空。",
    "vocabIndex": 13
  },
  {
    "q": "The flies are a real ______ when we eat outside in summer.",
    "options": [
      "mariner",
      "nuisance",
      "equation",
      "astrology"
    ],
    "answer": 1,
    "cn": "夏天在戶外吃飯時，蒼蠅真是討厭。",
    "vocabIndex": 14
  },
  {
    "q": "After moving ten times, the family wanted some ______ in their lives.",
    "options": [
      "equation",
      "multitude",
      "permanence",
      "couple"
    ],
    "answer": 2,
    "cn": "搬了十次家後，這家人希望生活能安定長久一些。",
    "vocabIndex": 15
  },
  {
    "q": "The earth and the other planets ______ around the sun.",
    "options": [
      "err",
      "deviate",
      "disrupt",
      "revolve"
    ],
    "answer": 3,
    "cn": "地球和其他行星繞著太陽運轉。",
    "vocabIndex": 16
  },
  {
    "q": "The mother sang softly to ______ her crying baby.",
    "options": [
      "soothe",
      "err",
      "improvise",
      "differentiate"
    ],
    "answer": 0,
    "cn": "母親輕聲歌唱安撫哭鬧的寶寶。",
    "vocabIndex": 17
  },
  {
    "q": "Hundreds of travelers were ______ at the airport because of the snow.",
    "options": [
      "frantic",
      "erroneous",
      "stranded",
      "inadvertent"
    ],
    "answer": 2,
    "cn": "數百名旅客因大雪滯留在機場。",
    "vocabIndex": 18
  },
  {
    "q": "The swimming coach taught us a new ______ for breathing in the water.",
    "options": [
      "equation",
      "technique",
      "nuisance",
      "multitude"
    ],
    "answer": 1,
    "cn": "游泳教練教我們一種在水中換氣的新技巧。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "astrology": {
    "pos": "n.",
    "en_def": "the study of how the stars and planets are believed to affect people's lives",
    "cn_def": "占星術"
  },
  "couple": {
    "pos": "n.",
    "en_def": "two people who are married or in a relationship",
    "cn_def": "一對；夫妻"
  },
  "deviate": {
    "pos": "v.",
    "en_def": "to do something different from what is usual or planned",
    "cn_def": "偏離"
  },
  "differentiate": {
    "pos": "v.",
    "en_def": "to see or show the difference between things",
    "cn_def": "區分；辨別"
  },
  "disrupt": {
    "pos": "v.",
    "en_def": "to stop something from continuing in the normal way",
    "cn_def": "擾亂；中斷"
  },
  "equation": {
    "pos": "n.",
    "en_def": "a statement in math that two amounts are equal",
    "cn_def": "方程式；等式"
  },
  "err": {
    "pos": "v.",
    "en_def": "to make a mistake",
    "cn_def": "犯錯"
  },
  "erroneous": {
    "pos": "adj.",
    "en_def": "not correct",
    "cn_def": "錯誤的"
  },
  "frantic": {
    "pos": "adj.",
    "en_def": "very worried and unable to stay calm",
    "cn_def": "慌亂的；發狂似的"
  },
  "inadvertent": {
    "pos": "adj.",
    "en_def": "not done on purpose",
    "cn_def": "無心的；非故意的"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to make or do something without preparing first",
    "cn_def": "即興創作；臨時湊合"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "mariner": {
    "pos": "n.",
    "en_def": "a sailor",
    "cn_def": "水手；航海者"
  },
  "multitude": {
    "pos": "n.",
    "en_def": "a very large number of people or things",
    "cn_def": "大量；許多"
  },
  "nuisance": {
    "pos": "n.",
    "en_def": "a person or thing that annoys you",
    "cn_def": "討厭的人或事物"
  },
  "permanence": {
    "pos": "n.",
    "en_def": "the state of lasting for a long time or forever",
    "cn_def": "永久；持久"
  },
  "revolve": {
    "pos": "v.",
    "en_def": "to move around something in a circle",
    "cn_def": "旋轉；環繞"
  },
  "soothe": {
    "pos": "v.",
    "en_def": "to make someone feel calmer or less in pain",
    "cn_def": "安撫；緩和"
  },
  "stranded": {
    "pos": "adj.",
    "en_def": "unable to leave a place",
    "cn_def": "受困的；滯留的"
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special way of doing something",
    "cn_def": "技巧；技術"
  },
  "absurd": {
    "pos": "adj.",
    "en_def": "completely silly or unreasonable",
    "cn_def": "荒謬的"
  },
  "reputable": {
    "pos": "adj.",
    "en_def": "known to be good and honest",
    "cn_def": "聲譽良好的"
  }
};

const EXTRA_GLOSSES = {};
