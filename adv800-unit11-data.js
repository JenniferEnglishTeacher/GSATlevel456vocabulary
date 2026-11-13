// Unit 11 Quiz Data: double – effort
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U11 - double – effort",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "double",
    "pos": "adj.",
    "cn_def": "雙倍的，雙重的",
    "en_def": "two times as much or as many",
    "sentence": "She received a {{BLANK}} portion of dessert.",
    "cn": "她收到了一份雙倍的甜點。"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "cn_def": "疑問，懷疑",
    "en_def": "a feeling of not being sure",
    "sentence": "There is no {{BLANK}} about his abilities.",
    "cn": "毫無疑問他的能力。"
  },
  {
    "word": "doughnut",
    "pos": "n.",
    "cn_def": "甜甜圈",
    "en_def": "a small, sweet, round cake with a hole in the middle",
    "sentence": "He bought a chocolate {{BLANK}}.",
    "cn": "他買了一個巧克力甜甜圈。"
  },
  {
    "word": "dove",
    "pos": "n.",
    "cn_def": "鴿子",
    "en_def": "a white bird that is a sign of peace",
    "sentence": "A white {{BLANK}} is a symbol of peace.",
    "cn": "白鴿是和平的象徵。"
  },
  {
    "word": "downstairs",
    "pos": "adv.",
    "cn_def": "在樓下",
    "en_def": "on or to a lower floor of a building",
    "sentence": "She heard noises coming from {{BLANK}}.",
    "cn": "她聽到樓下傳來的噪音。"
  },
  {
    "word": "downtown",
    "pos": "adv.",
    "cn_def": "市中心",
    "en_def": "in the center of a city",
    "sentence": "They live in a {{BLANK}} apartment.",
    "cn": "他們住在市中心的一間公寓。"
  },
  {
    "word": "dragon",
    "pos": "n.",
    "cn_def": "龍",
    "en_def": "a big animal in stories that has wings and can breathe fire",
    "sentence": "The legend tells of a fearsome {{BLANK}}.",
    "cn": "傳說中有一條可怕的龍。"
  },
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "戲劇，劇本",
    "en_def": "a serious story acted on TV or in a theater",
    "sentence": "She loves watching {{BLANK}} on TV.",
    "cn": "她喜歡在電視上看戲劇。",
    "alts": [
      "drama"
    ]
  },
  {
    "word": "drugstore",
    "pos": "n.",
    "cn_def": "藥房",
    "en_def": "a store that sells medicine",
    "sentence": "She went to the {{BLANK}} to buy some medicine.",
    "cn": "她去藥房買了一些藥。"
  },
  {
    "word": "dryer",
    "pos": "n.",
    "cn_def": "烘乾機",
    "en_def": "a machine that makes wet clothes dry",
    "sentence": "She put the clothes in the {{BLANK}}.",
    "cn": "她把衣服放進烘乾機裡。"
  },
  {
    "word": "dumb",
    "pos": "adj.",
    "cn_def": "啞的，愚蠢的",
    "en_def": "stupid; silly",
    "sentence": "It was a {{BLANK}} mistake to make.",
    "cn": "這是一個愚蠢的錯誤。"
  },
  {
    "word": "dumpling",
    "pos": "n.",
    "cn_def": "餃子",
    "en_def": "a small piece of dough with meat or vegetables inside",
    "sentence": "They made pork {{BLANK}} for dinner.",
    "cn": "他們做了豬肉餃子當晚餐。"
  },
  {
    "word": "duty",
    "pos": "n.",
    "cn_def": "責任，義務",
    "en_def": "something that you must do because it is your job or it is right",
    "sentence": "It is your {{BLANK}} to finish the task.",
    "cn": "完成這項任務是你的責任。"
  },
  {
    "word": "eagle",
    "pos": "n.",
    "cn_def": "鷹",
    "en_def": "a very big, strong bird that catches small animals",
    "sentence": "The {{BLANK}} soared high in the sky.",
    "cn": "鷹在天空中高高飛翔。"
  },
  {
    "word": "earn",
    "pos": "v.",
    "cn_def": "賺取，獲得",
    "en_def": "to get money by working",
    "sentence": "He works hard to {{BLANK}} a living.",
    "cn": "他努力工作賺取生計。"
  },
  {
    "word": "earrings",
    "pos": "n.",
    "cn_def": "耳環",
    "en_def": "pretty things that people wear on their ears",
    "sentence": "She wore diamond {{BLANK}}.",
    "cn": "她戴著鑽石耳環。"
  },
  {
    "word": "ease",
    "pos": "n.",
    "cn_def": "容易，舒適",
    "en_def": "being able to do something with no difficulty",
    "sentence": "He completed the task with {{BLANK}}.",
    "cn": "他輕鬆地完成了任務。"
  },
  {
    "word": "edge",
    "pos": "n.",
    "cn_def": "邊緣",
    "en_def": "the outside end or side of something",
    "sentence": "She sat on the {{BLANK}} of the bed.",
    "cn": "她坐在床邊。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "teaching and learning, usually at school",
    "sentence": "She values the importance of {{BLANK}}.",
    "cn": "她重視教育的重要性。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力，成就",
    "en_def": "hard work that you do to get something done",
    "sentence": "His {{BLANK}} paid off in the end.",
    "cn": "他的努力最終得到了回報。",
    "alts": [
      "effort"
    ]
  }
];

const MCQS = [
  {
    "q": "She received a ______ portion of dessert.【雙倍的，雙重的】",
    "options": [
      "dumb",
      "considerate",
      "double",
      "unhappy"
    ],
    "answer": 2,
    "cn": "她收到了一份雙倍的甜點。",
    "vocabIndex": 0
  },
  {
    "q": "There is no ______ about his abilities.【疑問，懷疑】",
    "options": [
      "dove",
      "doubt",
      "edge",
      "drugstore"
    ],
    "answer": 1,
    "cn": "毫無疑問他的能力。",
    "vocabIndex": 1
  },
  {
    "q": "He bought a chocolate ______.【甜甜圈】",
    "options": [
      "edge",
      "dryer",
      "ease",
      "doughnut"
    ],
    "answer": 3,
    "cn": "他買了一個巧克力甜甜圈。",
    "vocabIndex": 2
  },
  {
    "q": "A white ______ is a symbol of peace.【鴿子】",
    "options": [
      "dove",
      "eagle",
      "dryer",
      "edge"
    ],
    "answer": 0,
    "cn": "白鴿是和平的象徵。",
    "vocabIndex": 3
  },
  {
    "q": "She heard noises coming from ______.【在樓下】",
    "options": [
      "downtown",
      "downstairs",
      "overseas",
      "besides"
    ],
    "answer": 1,
    "cn": "她聽到樓下傳來的噪音。",
    "vocabIndex": 4
  },
  {
    "q": "They live in a ______ apartment.【市中心】",
    "options": [
      "downstairs",
      "everywhere",
      "downtown",
      "nearly"
    ],
    "answer": 2,
    "cn": "他們住在市中心的一間公寓。",
    "vocabIndex": 5
  },
  {
    "q": "The legend tells of a fearsome ______.【龍】",
    "options": [
      "education",
      "dove",
      "eagle",
      "dragon"
    ],
    "answer": 3,
    "cn": "傳說中有一條可怕的龍。",
    "vocabIndex": 6
  },
  {
    "q": "She loves watching ______ on TV.【戲劇，劇本】",
    "options": [
      "dramas",
      "earrings",
      "efforts",
      "dumplings"
    ],
    "answer": 0,
    "cn": "她喜歡在電視上看戲劇。",
    "vocabIndex": 7
  },
  {
    "q": "She went to the ______ to buy some medicine.【藥房】",
    "options": [
      "doubt",
      "dove",
      "doughnut",
      "drugstore"
    ],
    "answer": 3,
    "cn": "她去藥房買了一些藥。",
    "vocabIndex": 8
  },
  {
    "q": "She put the clothes in the ______.【烘乾機】",
    "options": [
      "doughnut",
      "dryer",
      "dove",
      "dragon"
    ],
    "answer": 1,
    "cn": "她把衣服放進烘乾機裡。",
    "vocabIndex": 9
  },
  {
    "q": "It was a ______ mistake to make.【啞的，愚蠢的】",
    "options": [
      "double",
      "electric",
      "dumb",
      "positive"
    ],
    "answer": 2,
    "cn": "這是一個愚蠢的錯誤。",
    "vocabIndex": 10
  },
  {
    "q": "They made pork ______ for dinner.【餃子】",
    "options": [
      "dumplings",
      "efforts",
      "dramas",
      "earrings"
    ],
    "answer": 0,
    "cn": "他們做了豬肉餃子當晚餐。",
    "vocabIndex": 11
  },
  {
    "q": "It is your ______ to finish the task.【責任，義務】",
    "options": [
      "ease",
      "education",
      "dove",
      "duty"
    ],
    "answer": 3,
    "cn": "完成這項任務是你的責任。",
    "vocabIndex": 12
  },
  {
    "q": "The ______ soared high in the sky.【鷹】",
    "options": [
      "dove",
      "eagle",
      "ease",
      "education"
    ],
    "answer": 1,
    "cn": "鷹在天空中高高飛翔。",
    "vocabIndex": 13
  },
  {
    "q": "He works hard to ______ a living.【賺取，獲得】",
    "options": [
      "solve",
      "increase",
      "earn",
      "design"
    ],
    "answer": 2,
    "cn": "他努力工作賺取生計。",
    "vocabIndex": 14
  },
  {
    "q": "She wore diamond ______.【耳環】",
    "options": [
      "earrings",
      "dramas",
      "efforts",
      "dumplings"
    ],
    "answer": 0,
    "cn": "她戴著鑽石耳環。",
    "vocabIndex": 15
  },
  {
    "q": "He completed the task with ______.【容易，舒適】",
    "options": [
      "doughnut",
      "ease",
      "dragon",
      "drugstore"
    ],
    "answer": 1,
    "cn": "他輕鬆地完成了任務。",
    "vocabIndex": 16
  },
  {
    "q": "She sat on the ______ of the bed.【邊緣】",
    "options": [
      "eagle",
      "doughnut",
      "doubt",
      "edge"
    ],
    "answer": 3,
    "cn": "她坐在床邊。",
    "vocabIndex": 17
  },
  {
    "q": "She values the importance of ______.【教育】",
    "options": [
      "education",
      "ease",
      "duty",
      "eagle"
    ],
    "answer": 0,
    "cn": "她重視教育的重要性。",
    "vocabIndex": 18
  },
  {
    "q": "His ______ paid off in the end.【努力，成就】",
    "options": [
      "earrings",
      "dramas",
      "efforts",
      "dumplings"
    ],
    "answer": 2,
    "cn": "他的努力最終得到了回報。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "besides": {
    "pos": "adv.",
    "en_def": "in addition to",
    "cn_def": "除了...之外"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "always thinking about what other people need or feel",
    "cn_def": "體貼的"
  },
  "design": {
    "pos": "v.",
    "en_def": "to plan and draw how something will look",
    "cn_def": "設計，構思"
  },
  "double": {
    "pos": "adj.",
    "en_def": "two times as much or as many",
    "cn_def": "雙倍的，雙重的"
  },
  "doubt": {
    "pos": "n.",
    "en_def": "a feeling of not being sure",
    "cn_def": "疑問，懷疑"
  },
  "doughnut": {
    "pos": "n.",
    "en_def": "a small, sweet, round cake with a hole in the middle",
    "cn_def": "甜甜圈"
  },
  "dove": {
    "pos": "n.",
    "en_def": "a white bird that is a sign of peace",
    "cn_def": "鴿子"
  },
  "downstairs": {
    "pos": "adv.",
    "en_def": "on or to a lower floor of a building",
    "cn_def": "在樓下"
  },
  "downtown": {
    "pos": "adv.",
    "en_def": "in the center of a city",
    "cn_def": "市中心"
  },
  "dragon": {
    "pos": "n.",
    "en_def": "a big animal in stories that has wings and can breathe fire",
    "cn_def": "龍"
  },
  "dramas": {
    "pos": "n.",
    "en_def": "a serious story acted on TV or in a theater",
    "cn_def": "戲劇，劇本"
  },
  "drugstore": {
    "pos": "n.",
    "en_def": "a store that sells medicine",
    "cn_def": "藥房"
  },
  "dryer": {
    "pos": "n.",
    "en_def": "a machine that makes wet clothes dry",
    "cn_def": "烘乾機"
  },
  "dumb": {
    "pos": "adj.",
    "en_def": "stupid; silly",
    "cn_def": "啞的，愚蠢的"
  },
  "dumplings": {
    "pos": "n.",
    "en_def": "a small piece of dough with meat or vegetables inside",
    "cn_def": "餃子"
  },
  "duty": {
    "pos": "n.",
    "en_def": "something that you must do because it is your job or it is right",
    "cn_def": "責任，義務"
  },
  "eagle": {
    "pos": "n.",
    "en_def": "a very big, strong bird that catches small animals",
    "cn_def": "鷹"
  },
  "earn": {
    "pos": "v.",
    "en_def": "to get money by working",
    "cn_def": "賺取，獲得"
  },
  "earrings": {
    "pos": "n.",
    "en_def": "pretty things that people wear on their ears",
    "cn_def": "耳環"
  },
  "ease": {
    "pos": "n.",
    "en_def": "being able to do something with no difficulty",
    "cn_def": "容易，舒適"
  },
  "edge": {
    "pos": "n.",
    "en_def": "the outside end or side of something",
    "cn_def": "邊緣"
  },
  "education": {
    "pos": "n.",
    "en_def": "teaching and learning, usually at school",
    "cn_def": "教育"
  },
  "efforts": {
    "pos": "n.",
    "en_def": "hard work that you do to get something done",
    "cn_def": "努力，成就"
  },
  "electric": {
    "pos": "adj.",
    "en_def": "using electricity to work",
    "cn_def": "電的，電動的"
  },
  "everywhere": {
    "pos": "adv.",
    "en_def": "in all places",
    "cn_def": "到處"
  },
  "increase": {
    "pos": "v.",
    "en_def": "to make something bigger in number or amount",
    "cn_def": "增加，增長"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost",
    "cn_def": "幾乎，差不多"
  },
  "overseas": {
    "pos": "adv.",
    "en_def": "in or to a country across the sea",
    "cn_def": "海外，國外"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "thinking about the good side of things",
    "cn_def": "積極的，正面的"
  },
  "solve": {
    "pos": "v.",
    "en_def": "to find the answer to a problem",
    "cn_def": "解決，解答"
  },
  "unhappy": {
    "pos": "adj.",
    "en_def": "not happy",
    "cn_def": "不快樂的，不滿意的"
  }
};

const EXTRA_GLOSSES = {};
