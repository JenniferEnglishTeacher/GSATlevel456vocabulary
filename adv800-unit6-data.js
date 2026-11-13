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
    "q": "She is very ______ at solving puzzles.【聰明的，靈巧的】",
    "options": [
      "confident",
      "colorful",
      "clever",
      "diligent"
    ],
    "answer": 2,
    "cn": "她在解謎方面很聰明。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ here is warm and humid.【氣候，風氣】",
    "options": [
      "coast",
      "climate",
      "cocoa",
      "company"
    ],
    "answer": 1,
    "cn": "這裡的氣候溫暖潮濕。",
    "vocabIndex": 1
  },
  {
    "q": "She hung her clothes neatly in the ______.【壁櫥】",
    "options": [
      "closet",
      "company",
      "concern",
      "comment"
    ],
    "answer": 0,
    "cn": "她把衣服整齊地掛在壁櫥裡。",
    "vocabIndex": 2
  },
  {
    "q": "The basketball team has a new ______.【教練，客車】",
    "options": [
      "coin",
      "coast",
      "cola",
      "coach"
    ],
    "answer": 3,
    "cn": "籃球隊有了一個新教練。",
    "vocabIndex": 3
  },
  {
    "q": "They walked along the ______.【海岸】",
    "options": [
      "coast",
      "comment",
      "concern",
      "cockroach"
    ],
    "answer": 0,
    "cn": "他們沿著海岸散步。",
    "vocabIndex": 4
  },
  {
    "q": "There is a ______ in the kitchen.【蟑螂】",
    "options": [
      "cocoa",
      "cockroach",
      "completion",
      "coast"
    ],
    "answer": 1,
    "cn": "廚房裡有一隻蟑螂。",
    "vocabIndex": 5
  },
  {
    "q": "She made a cup of hot ______ for breakfast.【可可，巧克力飲料】",
    "options": [
      "cockroach",
      "cola",
      "completion",
      "cocoa"
    ],
    "answer": 3,
    "cn": "她為早餐做了一杯熱可可。",
    "vocabIndex": 6
  },
  {
    "q": "He dropped a ______ into the vending machine.【硬幣】",
    "options": [
      "coach",
      "cola",
      "coin",
      "closet"
    ],
    "answer": 2,
    "cn": "他在自動販賣機裡投了一枚硬幣。",
    "vocabIndex": 7
  },
  {
    "q": "She ordered a ______ with her meal.【可樂】",
    "options": [
      "cola",
      "coin",
      "concern",
      "cocoa"
    ],
    "answer": 0,
    "cn": "她點了一瓶可樂和她的餐。",
    "vocabIndex": 8
  },
  {
    "q": "He is a freshman at ______.【大學，學院】",
    "options": [
      "completion",
      "coast",
      "closet",
      "college"
    ],
    "answer": 3,
    "cn": "他是大學一年級新生。",
    "vocabIndex": 9
  },
  {
    "q": "The garden is full of ______ flowers.【色彩鮮艷的】",
    "options": [
      "confident",
      "colorful",
      "clever",
      "sincere"
    ],
    "answer": 1,
    "cn": "花園裡滿是色彩鮮艷的花朵。",
    "vocabIndex": 10
  },
  {
    "q": "The officer ______ the troops to advance.【命令，指揮】",
    "options": [
      "completed",
      "complain",
      "commanded",
      "compare"
    ],
    "answer": 2,
    "cn": "軍官命令部隊前進。",
    "vocabIndex": 11
  },
  {
    "q": "She made a ______ about the movie.【評論，意見】",
    "options": [
      "comment",
      "concern",
      "college",
      "coast"
    ],
    "answer": 0,
    "cn": "她對這部電影發表了評論。",
    "vocabIndex": 12
  },
  {
    "q": "He works for a multinational ______.【公司】",
    "options": [
      "completion",
      "cocoa",
      "company",
      "comment"
    ],
    "answer": 2,
    "cn": "他在一家跨國公司工作。",
    "vocabIndex": 13
  },
  {
    "q": "It is interesting to ______ the two theories.【比較】",
    "options": [
      "complain",
      "compare",
      "commanded",
      "completed"
    ],
    "answer": 1,
    "cn": "比較這兩個理論是很有趣的。",
    "vocabIndex": 14
  },
  {
    "q": "Customers often ______ about the service.【抱怨】",
    "options": [
      "compare",
      "commanded",
      "completed",
      "complain"
    ],
    "answer": 3,
    "cn": "顧客經常抱怨服務。",
    "vocabIndex": 15
  },
  {
    "q": "She ______ the assignment on time.【完成，完整的】",
    "options": [
      "commanded",
      "compare",
      "completed",
      "complain"
    ],
    "answer": 2,
    "cn": "她按時完成了作業。",
    "vocabIndex": 16
  },
  {
    "q": "The ______ of the project took two years.【完成，結束】",
    "options": [
      "completion",
      "company",
      "concern",
      "cocoa"
    ],
    "answer": 0,
    "cn": "專案的完成花了兩年時間。",
    "vocabIndex": 17
  },
  {
    "q": "Her main ______ is her child's safety.【擔心，關心】",
    "options": [
      "cola",
      "concern",
      "comment",
      "coast"
    ],
    "answer": 1,
    "cn": "她主要擔心的是孩子的安全。",
    "vocabIndex": 18
  },
  {
    "q": "He feels ______ about his abilities.【自信的】",
    "options": [
      "colorful",
      "clever",
      "maximum",
      "confident"
    ],
    "answer": 3,
    "cn": "他對自己的能力感到自信。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "clever": {
    "pos": "adj.",
    "en_def": "smart; quick to learn and understand",
    "cn_def": "聰明的，靈巧的"
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
  "coach": {
    "pos": "n.",
    "en_def": "a person who teaches and trains a sports team",
    "cn_def": "教練，客車"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸"
  },
  "cockroach": {
    "pos": "n.",
    "en_def": "a brown insect that lives in dirty or warm places in houses",
    "cn_def": "蟑螂"
  },
  "cocoa": {
    "pos": "n.",
    "en_def": "a hot drink made from chocolate powder",
    "cn_def": "可可，巧克力飲料"
  },
  "coin": {
    "pos": "n.",
    "en_def": "a piece of money made of metal",
    "cn_def": "硬幣"
  },
  "cola": {
    "pos": "n.",
    "en_def": "a sweet brown drink with bubbles",
    "cn_def": "可樂"
  },
  "college": {
    "pos": "n.",
    "en_def": "a school where people study after high school",
    "cn_def": "大學，學院"
  },
  "colorful": {
    "pos": "adj.",
    "en_def": "having many bright colors",
    "cn_def": "色彩鮮艷的"
  },
  "commanded": {
    "pos": "v.",
    "en_def": "to tell someone that they must do something",
    "cn_def": "命令，指揮"
  },
  "comment": {
    "pos": "n.",
    "en_def": "something you say that gives your opinion",
    "cn_def": "評論，意見"
  },
  "company": {
    "pos": "n.",
    "en_def": "a group of people who work together to make or sell things",
    "cn_def": "公司"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at two things to see how they are the same or different",
    "cn_def": "比較"
  },
  "complain": {
    "pos": "v.",
    "en_def": "to say that you are not happy about something",
    "cn_def": "抱怨"
  },
  "completed": {
    "pos": "v.",
    "en_def": "to finish something",
    "cn_def": "完成，完整的"
  },
  "completion": {
    "pos": "n.",
    "en_def": "the act of finishing something",
    "cn_def": "完成，結束"
  },
  "concern": {
    "pos": "n.",
    "en_def": "something that you worry or care about",
    "cn_def": "擔心，關心"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure that you can do something well",
    "cn_def": "自信的"
  },
  "diligent": {
    "pos": "adj.",
    "en_def": "working hard and carefully",
    "cn_def": "勤勉的，勤奮的"
  },
  "maximum": {
    "pos": "adj.",
    "en_def": "the largest that is possible or allowed",
    "cn_def": "最大的，最高的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "really meaning what you say; honest",
    "cn_def": "真誠的，誠懇的"
  }
};

const EXTRA_GLOSSES = {};
