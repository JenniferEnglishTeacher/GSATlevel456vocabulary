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
    "q": "I am very hungry. I'd like a ______ hamburger with two pieces of beef, please.",
    "options": [
      "dumb",
      "daily",
      "double",
      "dizzy"
    ],
    "answer": 2,
    "cn": "她收到了一份雙倍的甜點。",
    "vocabIndex": 0
  },
  {
    "q": "There is no ______ that she will win. She is the best player on the team.",
    "options": [
      "duty",
      "drama",
      "edge",
      "doubt"
    ],
    "answer": 3,
    "cn": "毫無疑問他的能力。",
    "vocabIndex": 1
  },
  {
    "q": "I had a chocolate ______ and a cup of coffee. I love this sweet round cake with a hole in it.",
    "options": [
      "dumpling",
      "doughnut",
      "dragon",
      "dryer"
    ],
    "answer": 1,
    "cn": "他買了一個巧克力甜甜圈。",
    "vocabIndex": 2
  },
  {
    "q": "A white ______ flew over the church. This bird is a sign of peace.",
    "options": [
      "dove",
      "dragon",
      "dryer",
      "drama"
    ],
    "answer": 0,
    "cn": "白鴿是和平的象徵。",
    "vocabIndex": 3
  },
  {
    "q": "My bedroom is on the second floor. The kitchen is ______, on the first floor.",
    "options": [
      "downtown",
      "especially",
      "downstairs",
      "everywhere"
    ],
    "answer": 2,
    "cn": "她聽到樓下傳來的噪音。",
    "vocabIndex": 4
  },
  {
    "q": "We live in the country, but my father works ______, in the busiest part of the city.",
    "options": [
      "downstairs",
      "especially",
      "backward",
      "downtown"
    ],
    "answer": 3,
    "cn": "他們住在市中心的一間公寓。",
    "vocabIndex": 5
  },
  {
    "q": "In Chinese stories, the ______ is a strong and lucky animal that can fly.",
    "options": [
      "dove",
      "dragon",
      "eagle",
      "dumpling"
    ],
    "answer": 1,
    "cn": "傳說中有一條可怕的龍。",
    "vocabIndex": 6
  },
  {
    "q": "My mother loves Korean ______. She watches the love story on TV every night.",
    "options": [
      "drama",
      "duty",
      "edge",
      "effort"
    ],
    "answer": 0,
    "cn": "她喜歡在電視上看戲劇。",
    "vocabIndex": 7
  },
  {
    "q": "I have a headache. I am going to the ______ to buy some medicine.",
    "options": [
      "dryer",
      "drama",
      "edge",
      "drugstore"
    ],
    "answer": 3,
    "cn": "她去藥房買了一些藥。",
    "vocabIndex": 8
  },
  {
    "q": "After washing the clothes, put them in the ______. They will be warm and dry in an hour.",
    "options": [
      "drugstore",
      "dryer",
      "drama",
      "dove"
    ],
    "answer": 1,
    "cn": "她把衣服放進烘乾機裡。",
    "vocabIndex": 9
  },
  {
    "q": "It was ______ of me to forget my keys again. I am so silly sometimes!",
    "options": [
      "double",
      "daily",
      "dumb",
      "dizzy"
    ],
    "answer": 2,
    "cn": "這是一個愚蠢的錯誤。",
    "vocabIndex": 10
  },
  {
    "q": "We made pork ______ for dinner. We put meat inside each one and boiled them.",
    "options": [
      "dumplings",
      "doughnuts",
      "earrings",
      "dragons"
    ],
    "answer": 0,
    "cn": "他們做了豬肉餃子當晚餐。",
    "vocabIndex": 11
  },
  {
    "q": "It is a student's ______ to study hard. It is something every student must do.",
    "options": [
      "doubt",
      "edge",
      "duty",
      "ease"
    ],
    "answer": 2,
    "cn": "完成這項任務是你的責任。",
    "vocabIndex": 12
  },
  {
    "q": "An ______ is a big bird with strong wings. It can see a rabbit from high up in the sky.",
    "options": [
      "edge",
      "eagle",
      "effort",
      "earring"
    ],
    "answer": 1,
    "cn": "鷹在天空中高高飛翔。",
    "vocabIndex": 13
  },
  {
    "q": "My brother works at a restaurant to ______ money. He gets 180 dollars an hour.",
    "options": [
      "elect",
      "employ",
      "envy",
      "earn"
    ],
    "answer": 3,
    "cn": "他努力工作賺取生計。",
    "vocabIndex": 14
  },
  {
    "q": "She wore a pair of gold ______. They looked beautiful on her ears.",
    "options": [
      "earrings",
      "dumplings",
      "eagles",
      "doughnuts"
    ],
    "answer": 0,
    "cn": "她戴著鑽石耳環。",
    "vocabIndex": 15
  },
  {
    "q": "She is a great swimmer. She won the race with ______.",
    "options": [
      "edge",
      "ease",
      "effort",
      "duty"
    ],
    "answer": 1,
    "cn": "他輕鬆地完成了任務。",
    "vocabIndex": 16
  },
  {
    "q": "Don't stand at the ______ of the platform. You may fall onto the rails.",
    "options": [
      "ease",
      "effort",
      "duty",
      "edge"
    ],
    "answer": 3,
    "cn": "她坐在床邊。",
    "vocabIndex": 17
  },
  {
    "q": "Every child should get a good ______. That is why we need good schools and teachers.",
    "options": [
      "education",
      "edge",
      "eagle",
      "ease"
    ],
    "answer": 0,
    "cn": "她重視教育的重要性。",
    "vocabIndex": 18
  },
  {
    "q": "It takes a lot of time and ______ to learn a language. You have to work hard every day.",
    "options": [
      "edge",
      "ease",
      "effort",
      "eagle"
    ],
    "answer": 2,
    "cn": "他的努力最終得到了回報。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "dumb": {
    "pos": "adj.",
    "en_def": "stupid; silly",
    "cn_def": "啞的，愚蠢的"
  },
  "daily": {
    "pos": "adj.",
    "en_def": "happening or coming out every day",
    "cn_def": "每日的，日常的"
  },
  "double": {
    "pos": "adj.",
    "en_def": "two times as much or as many",
    "cn_def": "雙倍的，雙重的"
  },
  "dizzy": {
    "pos": "adj.",
    "en_def": "feeling that everything is turning around you",
    "cn_def": "頭暈的"
  },
  "duty": {
    "pos": "n.",
    "en_def": "something that you must do because it is your job or it is right",
    "cn_def": "責任，義務"
  },
  "drama": {
    "pos": "n.",
    "en_def": "a serious story acted on TV or in a theater",
    "cn_def": "戲劇，劇本"
  },
  "edge": {
    "pos": "n.",
    "en_def": "the outside end or side of something",
    "cn_def": "邊緣"
  },
  "doubt": {
    "pos": "n.",
    "en_def": "a feeling of not being sure",
    "cn_def": "疑問，懷疑"
  },
  "dumpling": {
    "pos": "n.",
    "en_def": "a small piece of dough with meat or vegetables inside",
    "cn_def": "餃子"
  },
  "doughnut": {
    "pos": "n.",
    "en_def": "a small, sweet, round cake with a hole in the middle",
    "cn_def": "甜甜圈"
  },
  "dragon": {
    "pos": "n.",
    "en_def": "a big animal in stories that has wings and can breathe fire",
    "cn_def": "龍"
  },
  "dryer": {
    "pos": "n.",
    "en_def": "a machine that makes wet clothes dry",
    "cn_def": "烘乾機"
  },
  "dove": {
    "pos": "n.",
    "en_def": "a white bird that is a sign of peace",
    "cn_def": "鴿子"
  },
  "downtown": {
    "pos": "adv.",
    "en_def": "in the center of a city",
    "cn_def": "市中心"
  },
  "especially": {
    "pos": "adv.",
    "en_def": "more than others; more than usual",
    "cn_def": "特別地，尤其"
  },
  "downstairs": {
    "pos": "adv.",
    "en_def": "on or to a lower floor of a building",
    "cn_def": "在樓下"
  },
  "everywhere": {
    "pos": "adv.",
    "en_def": "in all places",
    "cn_def": "到處"
  },
  "backward": {
    "pos": "adv.",
    "en_def": "toward the back",
    "cn_def": "向後地"
  },
  "eagle": {
    "pos": "n.",
    "en_def": "a very big, strong bird that catches small animals",
    "cn_def": "鷹"
  },
  "effort": {
    "pos": "n.",
    "en_def": "hard work that you do to get something done",
    "cn_def": "努力，成就"
  },
  "drugstore": {
    "pos": "n.",
    "en_def": "a store that sells medicine",
    "cn_def": "藥房"
  },
  "dumplings": {
    "pos": "n.",
    "en_def": "a small piece of dough with meat or vegetables inside",
    "cn_def": "餃子"
  },
  "doughnuts": {
    "pos": "n.",
    "en_def": "a small, sweet, round cake with a hole in the middle",
    "cn_def": "甜甜圈"
  },
  "earrings": {
    "pos": "n.",
    "en_def": "pretty things that people wear on their ears",
    "cn_def": "耳環"
  },
  "dragons": {
    "pos": "n.",
    "en_def": "a big animal in stories that has wings and can breathe fire",
    "cn_def": "龍"
  },
  "ease": {
    "pos": "n.",
    "en_def": "being able to do something with no difficulty",
    "cn_def": "容易，舒適"
  },
  "earring": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "耳環"
  },
  "elect": {
    "pos": "v.",
    "en_def": "to choose someone for a job by voting",
    "cn_def": "選舉，選擇"
  },
  "employ": {
    "pos": "v.",
    "en_def": "to give someone a job and pay them",
    "cn_def": "雇用"
  },
  "envy": {
    "pos": "v.",
    "en_def": "to wish you had what someone else has",
    "cn_def": "嫉妒，羨慕"
  },
  "earn": {
    "pos": "v.",
    "en_def": "to get money by working",
    "cn_def": "賺取，獲得"
  },
  "eagles": {
    "pos": "n.",
    "en_def": "a very big, strong bird that catches small animals",
    "cn_def": "鷹"
  },
  "education": {
    "pos": "n.",
    "en_def": "teaching and learning, usually at school",
    "cn_def": "教育"
  }
};

const EXTRA_GLOSSES = {};
