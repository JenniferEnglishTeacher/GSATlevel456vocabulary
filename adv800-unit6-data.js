// Unit 6 Quiz Data: clever – confident
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U06 - clever – confident",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "clever",
    "pos": "adj.",
    "cn_def": "聰明的，靈巧的",
    "en_def": "smart; quick to learn and understand",
    "sentence": "She is very {{BLANK}} at solving puzzles.",
    "cn": "她在解謎方面很聰明。"
  },
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候，風氣",
    "en_def": "the usual weather of a place",
    "sentence": "The {{BLANK}} here is warm and humid.",
    "cn": "這裡的氣候溫暖潮濕。"
  },
  {
    "word": "closet",
    "pos": "n.",
    "cn_def": "壁櫥",
    "en_def": "a small room or tall box for keeping clothes",
    "sentence": "She hung her clothes neatly in the {{BLANK}}.",
    "cn": "她把衣服整齊地掛在壁櫥裡。"
  },
  {
    "word": "coach",
    "pos": "n.",
    "cn_def": "教練，客車",
    "en_def": "a person who teaches and trains a sports team",
    "sentence": "The basketball team has a new {{BLANK}}.",
    "cn": "籃球隊有了一個新教練。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸",
    "en_def": "the land next to the sea",
    "sentence": "They walked along the {{BLANK}}.",
    "cn": "他們沿著海岸散步。"
  },
  {
    "word": "cockroach",
    "pos": "n.",
    "cn_def": "蟑螂",
    "en_def": "a brown insect that lives in dirty or warm places in houses",
    "sentence": "There is a {{BLANK}} in the kitchen.",
    "cn": "廚房裡有一隻蟑螂。"
  },
  {
    "word": "cocoa",
    "pos": "n.",
    "cn_def": "可可，巧克力飲料",
    "en_def": "a hot drink made from chocolate powder",
    "sentence": "She made a cup of hot {{BLANK}} for breakfast.",
    "cn": "她為早餐做了一杯熱可可。"
  },
  {
    "word": "coin",
    "pos": "n.",
    "cn_def": "硬幣",
    "en_def": "a piece of money made of metal",
    "sentence": "He dropped a {{BLANK}} into the vending machine.",
    "cn": "他在自動販賣機裡投了一枚硬幣。"
  },
  {
    "word": "cola",
    "pos": "n.",
    "cn_def": "可樂",
    "en_def": "a sweet brown drink with bubbles",
    "sentence": "She ordered a {{BLANK}} with her meal.",
    "cn": "她點了一瓶可樂和她的餐。"
  },
  {
    "word": "college",
    "pos": "n.",
    "cn_def": "大學，學院",
    "en_def": "a school where people study after high school",
    "sentence": "He is a freshman at {{BLANK}}.",
    "cn": "他是大學一年級新生。"
  },
  {
    "word": "colorful",
    "pos": "adj.",
    "cn_def": "色彩鮮艷的",
    "en_def": "having many bright colors",
    "sentence": "The garden is full of {{BLANK}} flowers.",
    "cn": "花園裡滿是色彩鮮艷的花朵。"
  },
  {
    "word": "command",
    "pos": "v.",
    "cn_def": "命令，指揮",
    "en_def": "to tell someone that they must do something",
    "sentence": "The officer {{BLANK}} the troops to advance.",
    "cn": "軍官命令部隊前進。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "評論，意見",
    "en_def": "something you say that gives your opinion",
    "sentence": "She made a {{BLANK}} about the movie.",
    "cn": "她對這部電影發表了評論。"
  },
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "公司",
    "en_def": "a group of people who work together to make or sell things",
    "sentence": "He works for a multinational {{BLANK}}.",
    "cn": "他在一家跨國公司工作。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較",
    "en_def": "to look at two things to see how they are the same or different",
    "sentence": "It is interesting to {{BLANK}} the two theories.",
    "cn": "比較這兩個理論是很有趣的。"
  },
  {
    "word": "complain",
    "pos": "v.",
    "cn_def": "抱怨",
    "en_def": "to say that you are not happy about something",
    "sentence": "Customers often {{BLANK}} about the service.",
    "cn": "顧客經常抱怨服務。"
  },
  {
    "word": "complete",
    "pos": "v.",
    "cn_def": "完成，完整的",
    "en_def": "to finish something",
    "sentence": "She {{BLANK}} the assignment on time.",
    "cn": "她按時完成了作業。"
  },
  {
    "word": "completion",
    "pos": "n.",
    "cn_def": "完成，結束",
    "en_def": "the act of finishing something",
    "sentence": "The {{BLANK}} of the project took two years.",
    "cn": "專案的完成花了兩年時間。"
  },
  {
    "word": "concern",
    "pos": "n.",
    "cn_def": "擔心，關心",
    "en_def": "something that you worry or care about",
    "sentence": "Her main {{BLANK}} is her child's safety.",
    "cn": "她主要擔心的是孩子的安全。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "自信的",
    "en_def": "sure that you can do something well",
    "sentence": "He feels {{BLANK}} about his abilities.",
    "cn": "他對自己的能力感到自信。"
  }
];

const MCQS = [
  {
    "q": "The ______ boy fixed the broken radio by himself. He learns everything very quickly.",
    "options": [
      "colorful",
      "confident",
      "clever",
      "careless"
    ],
    "answer": 2,
    "cn": "她在解謎方面很聰明。",
    "vocabIndex": 0
  },
  {
    "q": "Taiwan has a warm, wet ______. It is hot in summer and seldom snows in winter.",
    "options": [
      "climate",
      "closet",
      "coin",
      "comment"
    ],
    "answer": 0,
    "cn": "這裡的氣候溫暖潮濕。",
    "vocabIndex": 1
  },
  {
    "q": "Lisa hangs her dresses and coats in the ______ in her bedroom.",
    "options": [
      "coast",
      "closet",
      "coin",
      "climate"
    ],
    "answer": 1,
    "cn": "她把衣服整齊地掛在壁櫥裡。",
    "vocabIndex": 2
  },
  {
    "q": "Our basketball ______ makes us practice for two hours every day. He teaches us how to win.",
    "options": [
      "coast",
      "coin",
      "closet",
      "coach"
    ],
    "answer": 3,
    "cn": "籃球隊有了一個新教練。",
    "vocabIndex": 3
  },
  {
    "q": "We drove along the east ______ and looked at the blue sea all the way.",
    "options": [
      "coast",
      "closet",
      "coin",
      "college"
    ],
    "answer": 0,
    "cn": "他們沿著海岸散步。",
    "vocabIndex": 4
  },
  {
    "q": "I saw a brown ______ run across the kitchen floor last night. I hate that insect!",
    "options": [
      "coach",
      "coin",
      "comment",
      "cockroach"
    ],
    "answer": 3,
    "cn": "廚房裡有一隻蟑螂。",
    "vocabIndex": 5
  },
  {
    "q": "On cold winter nights, I like to drink a cup of hot ______. It tastes like chocolate.",
    "options": [
      "cola",
      "coin",
      "cocoa",
      "cotton"
    ],
    "answer": 2,
    "cn": "她為早餐做了一杯熱可可。",
    "vocabIndex": 6
  },
  {
    "q": "I put a ten-dollar ______ into the machine and got a bottle of water.",
    "options": [
      "coach",
      "coin",
      "coast",
      "comment"
    ],
    "answer": 1,
    "cn": "他在自動販賣機裡投了一枚硬幣。",
    "vocabIndex": 7
  },
  {
    "q": "I'd like a hamburger and a large ______ with ice, please. I love sweet drinks with bubbles.",
    "options": [
      "cola",
      "cocoa",
      "coin",
      "coast"
    ],
    "answer": 0,
    "cn": "她點了一瓶可樂和她的餐。",
    "vocabIndex": 8
  },
  {
    "q": "My sister finished senior high school last year. She is studying English at ______ now.",
    "options": [
      "company",
      "climate",
      "closet",
      "college"
    ],
    "answer": 3,
    "cn": "他是大學一年級新生。",
    "vocabIndex": 9
  },
  {
    "q": "The garden is full of ______ flowers: red, yellow, pink, and purple.",
    "options": [
      "clever",
      "confident",
      "colorful",
      "careless"
    ],
    "answer": 2,
    "cn": "花園裡滿是色彩鮮艷的花朵。",
    "vocabIndex": 10
  },
  {
    "q": "The captain ______ his men to stop. They all stood still at once.",
    "options": [
      "compared",
      "commanded",
      "complained",
      "completed"
    ],
    "answer": 1,
    "cn": "軍官命令部隊前進。",
    "vocabIndex": 11
  },
  {
    "q": "The teacher wrote a nice ______ on my report: \"Great job! Your writing is getting better.\"",
    "options": [
      "comment",
      "company",
      "coast",
      "coin"
    ],
    "answer": 0,
    "cn": "她對這部電影發表了評論。",
    "vocabIndex": 12
  },
  {
    "q": "My father works for a computer ______. It has five hundred workers and sells phones, too.",
    "options": [
      "comment",
      "coast",
      "company",
      "climate"
    ],
    "answer": 2,
    "cn": "他在一家跨國公司工作。",
    "vocabIndex": 13
  },
  {
    "q": "Before you buy a phone, ______ the prices at different stores. One may be much cheaper.",
    "options": [
      "complain",
      "command",
      "complete",
      "compare"
    ],
    "answer": 3,
    "cn": "比較這兩個理論是很有趣的。",
    "vocabIndex": 14
  },
  {
    "q": "The neighbors often ______ about the noise from our dog. They say they can't sleep.",
    "options": [
      "compare",
      "complain",
      "command",
      "complete"
    ],
    "answer": 1,
    "cn": "顧客經常抱怨服務。",
    "vocabIndex": 15
  },
  {
    "q": "You must ______ the test in fifty minutes. Don't leave any questions without answers.",
    "options": [
      "complain",
      "command",
      "complete",
      "compare"
    ],
    "answer": 2,
    "cn": "她按時完成了作業。",
    "vocabIndex": 16
  },
  {
    "q": "The ______ of the new bridge will take two more years. People can't wait to use it.",
    "options": [
      "concern",
      "completion",
      "comment",
      "climate"
    ],
    "answer": 1,
    "cn": "專案的完成花了兩年時間。",
    "vocabIndex": 17
  },
  {
    "q": "The mother's biggest ______ is her son's health. He has been sick for a month.",
    "options": [
      "concern",
      "completion",
      "coast",
      "coin"
    ],
    "answer": 0,
    "cn": "她主要擔心的是孩子的安全。",
    "vocabIndex": 18
  },
  {
    "q": "Amy practiced her speech fifty times, so she feels ______. She knows she will do well.",
    "options": [
      "colorful",
      "careless",
      "bitter",
      "confident"
    ],
    "answer": 3,
    "cn": "他對自己的能力感到自信。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "colorful": {
    "pos": "adj.",
    "en_def": "having many bright colors",
    "cn_def": "色彩鮮艷的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure that you can do something well",
    "cn_def": "自信的"
  },
  "clever": {
    "pos": "adj.",
    "en_def": "smart; quick to learn and understand",
    "cn_def": "聰明的，靈巧的"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "not thinking about what you are doing, so you make mistakes",
    "cn_def": "粗心的"
  },
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather of a place",
    "cn_def": "氣候，風氣"
  },
  "closet": {
    "pos": "n.",
    "en_def": "a small room or tall box for keeping clothes",
    "cn_def": "壁櫥"
  },
  "coin": {
    "pos": "n.",
    "en_def": "a piece of money made of metal",
    "cn_def": "硬幣"
  },
  "comment": {
    "pos": "n.",
    "en_def": "something you say that gives your opinion",
    "cn_def": "評論，意見"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who teaches and trains a sports team",
    "cn_def": "教練，客車"
  },
  "college": {
    "pos": "n.",
    "en_def": "a school where people study after high school",
    "cn_def": "大學，學院"
  },
  "cockroach": {
    "pos": "n.",
    "en_def": "a brown insect that lives in dirty or warm places in houses",
    "cn_def": "蟑螂"
  },
  "cola": {
    "pos": "n.",
    "en_def": "a sweet brown drink with bubbles",
    "cn_def": "可樂"
  },
  "cocoa": {
    "pos": "n.",
    "en_def": "a hot drink made from chocolate powder",
    "cn_def": "可可，巧克力飲料"
  },
  "cotton": {
    "pos": "n.",
    "en_def": "soft white material from a plant, used to make clothes",
    "cn_def": "棉花"
  },
  "company": {
    "pos": "n.",
    "en_def": "a group of people who work together to make or sell things",
    "cn_def": "公司"
  },
  "compared": {
    "pos": "v.",
    "en_def": "to look at two things to see how they are the same or different",
    "cn_def": "比較"
  },
  "commanded": {
    "pos": "v.",
    "en_def": "to tell someone that they must do something",
    "cn_def": "命令，指揮"
  },
  "complained": {
    "pos": "v.",
    "en_def": "to say that you are not happy about something",
    "cn_def": "抱怨"
  },
  "completed": {
    "pos": "v.",
    "en_def": "to finish something",
    "cn_def": "完成，完整的"
  },
  "complain": {
    "pos": "v.",
    "en_def": "to say that you are not happy about something",
    "cn_def": "抱怨"
  },
  "command": {
    "pos": "v.",
    "en_def": "to tell someone that they must do something",
    "cn_def": "命令，指揮"
  },
  "complete": {
    "pos": "v.",
    "en_def": "to finish something",
    "cn_def": "完成，完整的"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at two things to see how they are the same or different",
    "cn_def": "比較"
  },
  "concern": {
    "pos": "n.",
    "en_def": "something that you worry or care about",
    "cn_def": "擔心，關心"
  },
  "completion": {
    "pos": "n.",
    "en_def": "the act of finishing something",
    "cn_def": "完成，結束"
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong taste that is not sweet, like black coffee",
    "cn_def": "苦的，痛苦的"
  }
};

const EXTRA_GLOSSES = {};
