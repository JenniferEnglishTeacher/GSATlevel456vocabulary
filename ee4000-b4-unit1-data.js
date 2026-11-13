// Unit 1 Quiz Data: accountable – validate
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "4000 Essential Words Book 4 U01 - accountable – validate",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accountable",
    "pos": "adj.",
    "cn_def": "負有責任的",
    "en_def": "responsible for what you do and able to explain it",
    "sentence": "Parents are {{BLANK}} for the safety of their young children at all times.",
    "cn": "父母隨時都要為年幼孩子的安全負責。"
  },
  {
    "word": "addictive",
    "pos": "adj.",
    "cn_def": "使人上癮的",
    "en_def": "making you want more and unable to stop",
    "sentence": "Video games can be so {{BLANK}} that some teenagers play them all night.",
    "cn": "電玩可能令人上癮到有些青少年整晚都在玩。"
  },
  {
    "word": "agenda",
    "pos": "n.",
    "cn_def": "議程；待辦事項",
    "en_def": "a list of things to be discussed or done",
    "sentence": "The first item on the {{BLANK}} for today's meeting is the school trip.",
    "cn": "今天會議議程的第一項是校外教學。"
  },
  {
    "word": "coin",
    "pos": "v.",
    "cn_def": "創造（新詞）",
    "en_def": "to invent a new word or phrase",
    "sentence": "Writers sometimes {{BLANK}} new words when no existing word fits their idea.",
    "cn": "當現有的字無法表達想法時，作家有時會創造新詞。"
  },
  {
    "word": "correlate",
    "pos": "v.",
    "cn_def": "相關；有關聯",
    "en_def": "to be connected in a way that one thing changes with another",
    "sentence": "Studies show that hours of sleep {{BLANK}} closely with students' test scores.",
    "cn": "研究顯示睡眠時數與學生的考試成績密切相關。"
  },
  {
    "word": "depression",
    "pos": "n.",
    "cn_def": "憂鬱；憂鬱症",
    "en_def": "a condition of feeling very sad and without hope for a long time",
    "sentence": "After losing his job, he fell into a deep {{BLANK}} and stopped seeing his friends.",
    "cn": "失業後，他陷入嚴重的憂鬱，不再和朋友見面。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computer technology",
    "sentence": "Most people now take photos with {{BLANK}} cameras or phones instead of film.",
    "cn": "現在大多數人用數位相機或手機拍照，而不用底片。"
  },
  {
    "word": "importance",
    "pos": "n.",
    "cn_def": "重要性",
    "en_def": "the quality of being important",
    "sentence": "The doctor explained the {{BLANK}} of washing hands before every meal.",
    "cn": "醫生說明了每餐飯前洗手的重要性。"
  },
  {
    "word": "keyboard",
    "pos": "n.",
    "cn_def": "鍵盤",
    "en_def": "the set of keys you press to type on a computer",
    "sentence": "She typed the letter quickly on the {{BLANK}} of her laptop.",
    "cn": "她在筆電的鍵盤上很快地打完那封信。"
  },
  {
    "word": "loneliness",
    "pos": "n.",
    "cn_def": "孤獨；寂寞",
    "en_def": "the sad feeling of being alone",
    "sentence": "Many old people who live by themselves suffer from {{BLANK}}.",
    "cn": "許多獨居的老人飽受孤獨之苦。"
  },
  {
    "word": "media",
    "pos": "n.",
    "cn_def": "媒體",
    "en_def": "television, newspapers, radio, and the Internet as a group",
    "sentence": "The story was reported by the {{BLANK}} all over the world.",
    "cn": "這則消息被全世界的媒體報導。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or system that people use to share or do things",
    "sentence": "The company built an online {{BLANK}} where teachers can share their lessons.",
    "cn": "這家公司建立了一個讓老師分享課程的線上平台。"
  },
  {
    "word": "poor",
    "pos": "adj.",
    "cn_def": "差的；不好的",
    "en_def": "not good in quality",
    "sentence": "The players lost the game because of their {{BLANK}} teamwork.",
    "cn": "球員們因為團隊合作不佳而輸了比賽。"
  },
  {
    "word": "presence",
    "pos": "n.",
    "cn_def": "出席；在場",
    "en_def": "the fact of being in a place",
    "sentence": "The children behaved well in the {{BLANK}} of their grandparents.",
    "cn": "孩子們在祖父母面前表現得很乖。"
  },
  {
    "word": "subject",
    "pos": "v.",
    "cn_def": "使遭受",
    "en_def": "to make someone experience something unpleasant",
    "sentence": "The guards would {{BLANK}} the prisoners to long hours of hard work.",
    "cn": "守衛會讓囚犯遭受長時間的苦役。"
  },
  {
    "word": "surge",
    "pos": "n.",
    "cn_def": "激增；湧現",
    "en_def": "a sudden large increase",
    "sentence": "There was a {{BLANK}} in online shopping during the holiday season.",
    "cn": "假期期間網路購物量激增。"
  },
  {
    "word": "survey",
    "pos": "n.",
    "cn_def": "調查",
    "en_def": "a set of questions that you ask many people to learn their opinions",
    "sentence": "The school did a {{BLANK}} to find out what students think about homework.",
    "cn": "學校做了一項調查，了解學生對作業的看法。"
  },
  {
    "word": "target",
    "pos": "v.",
    "cn_def": "以…為目標",
    "en_def": "to aim something at a certain group of people",
    "sentence": "The new toy ads {{BLANK}} children between five and ten years old.",
    "cn": "新的玩具廣告以五到十歲的兒童為目標。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢；潮流",
    "en_def": "a general change in the way people behave or things develop",
    "sentence": "Working from home is a growing {{BLANK}} in many countries.",
    "cn": "在家工作在許多國家是日益成長的趨勢。"
  },
  {
    "word": "validate",
    "pos": "v.",
    "cn_def": "證實；確認",
    "en_def": "to prove that something is true or correct",
    "sentence": "More tests are needed to {{BLANK}} the results of the experiment.",
    "cn": "需要更多測試來證實實驗的結果。"
  }
];

const MCQS = [
  {
    "q": "Parents are ______ for the safety of their young children at all times.",
    "options": [
      "digital",
      "accountable",
      "addictive",
      "poor"
    ],
    "answer": 1,
    "cn": "父母隨時都要為年幼孩子的安全負責。",
    "vocabIndex": 0
  },
  {
    "q": "Video games can be so ______ that some teenagers play them all night.",
    "options": [
      "accountable",
      "digital",
      "addictive",
      "poor"
    ],
    "answer": 2,
    "cn": "電玩可能令人上癮到有些青少年整晚都在玩。",
    "vocabIndex": 1
  },
  {
    "q": "The first item on the ______ for today's meeting is the school trip.",
    "options": [
      "agenda",
      "presence",
      "importance",
      "trend"
    ],
    "answer": 0,
    "cn": "今天會議議程的第一項是校外教學。",
    "vocabIndex": 2
  },
  {
    "q": "Writers sometimes ______ new words when no existing word fits their idea.",
    "options": [
      "target",
      "validate",
      "correlate",
      "coin"
    ],
    "answer": 3,
    "cn": "當現有的字無法表達想法時，作家有時會創造新詞。",
    "vocabIndex": 3
  },
  {
    "q": "Studies show that hours of sleep ______ closely with students' test scores.",
    "options": [
      "correlate",
      "validate",
      "coin",
      "target"
    ],
    "answer": 0,
    "cn": "研究顯示睡眠時數與學生的考試成績密切相關。",
    "vocabIndex": 4
  },
  {
    "q": "After losing his job, he fell into a deep ______ and stopped seeing his friends.",
    "options": [
      "presence",
      "importance",
      "survey",
      "depression"
    ],
    "answer": 3,
    "cn": "失業後，他陷入嚴重的憂鬱，不再和朋友見面。",
    "vocabIndex": 5
  },
  {
    "q": "Most people now take photos with ______ cameras or phones instead of film.",
    "options": [
      "poor",
      "accountable",
      "digital",
      "addictive"
    ],
    "answer": 2,
    "cn": "現在大多數人用數位相機或手機拍照，而不用底片。",
    "vocabIndex": 6
  },
  {
    "q": "The doctor explained the ______ of washing hands before every meal.",
    "options": [
      "keyboard",
      "importance",
      "depression",
      "loneliness"
    ],
    "answer": 1,
    "cn": "醫生說明了每餐飯前洗手的重要性。",
    "vocabIndex": 7
  },
  {
    "q": "She typed the letter quickly on the ______ of her laptop.",
    "options": [
      "keyboard",
      "agenda",
      "depression",
      "presence"
    ],
    "answer": 0,
    "cn": "她在筆電的鍵盤上很快地打完那封信。",
    "vocabIndex": 8
  },
  {
    "q": "Many old people who live by themselves suffer from ______.",
    "options": [
      "survey",
      "surge",
      "loneliness",
      "platform"
    ],
    "answer": 2,
    "cn": "許多獨居的老人飽受孤獨之苦。",
    "vocabIndex": 9
  },
  {
    "q": "The story was reported by the ______ all over the world.",
    "options": [
      "platform",
      "agenda",
      "surge",
      "media"
    ],
    "answer": 3,
    "cn": "這則消息被全世界的媒體報導。",
    "vocabIndex": 10
  },
  {
    "q": "The company built an online ______ where teachers can share their lessons.",
    "options": [
      "depression",
      "platform",
      "survey",
      "surge"
    ],
    "answer": 1,
    "cn": "這家公司建立了一個讓老師分享課程的線上平台。",
    "vocabIndex": 11
  },
  {
    "q": "The players lost the game because of their ______ teamwork.",
    "options": [
      "digital",
      "accountable",
      "addictive",
      "poor"
    ],
    "answer": 3,
    "cn": "球員們因為團隊合作不佳而輸了比賽。",
    "vocabIndex": 12
  },
  {
    "q": "The children behaved well in the ______ of their grandparents.",
    "options": [
      "agenda",
      "presence",
      "platform",
      "importance"
    ],
    "answer": 1,
    "cn": "孩子們在祖父母面前表現得很乖。",
    "vocabIndex": 13
  },
  {
    "q": "The guards would ______ the prisoners to long hours of hard work.",
    "options": [
      "subject",
      "validate",
      "correlate",
      "target"
    ],
    "answer": 0,
    "cn": "守衛會讓囚犯遭受長時間的苦役。",
    "vocabIndex": 14
  },
  {
    "q": "There was a ______ in online shopping during the holiday season.",
    "options": [
      "depression",
      "trend",
      "surge",
      "presence"
    ],
    "answer": 2,
    "cn": "假期期間網路購物量激增。",
    "vocabIndex": 15
  },
  {
    "q": "The school did a ______ to find out what students think about homework.",
    "options": [
      "survey",
      "trend",
      "presence",
      "loneliness"
    ],
    "answer": 0,
    "cn": "學校做了一項調查，了解學生對作業的看法。",
    "vocabIndex": 16
  },
  {
    "q": "The new toy ads ______ children between five and ten years old.",
    "options": [
      "validate",
      "subject",
      "target",
      "coin"
    ],
    "answer": 2,
    "cn": "新的玩具廣告以五到十歲的兒童為目標。",
    "vocabIndex": 17
  },
  {
    "q": "Working from home is a growing ______ in many countries.",
    "options": [
      "importance",
      "loneliness",
      "keyboard",
      "trend"
    ],
    "answer": 3,
    "cn": "在家工作在許多國家是日益成長的趨勢。",
    "vocabIndex": 18
  },
  {
    "q": "More tests are needed to ______ the results of the experiment.",
    "options": [
      "target",
      "validate",
      "correlate",
      "coin"
    ],
    "answer": 1,
    "cn": "需要更多測試來證實實驗的結果。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "accountable": {
    "pos": "adj.",
    "en_def": "responsible for what you do and able to explain it",
    "cn_def": "負有責任的"
  },
  "addictive": {
    "pos": "adj.",
    "en_def": "making you want more and unable to stop",
    "cn_def": "使人上癮的"
  },
  "agenda": {
    "pos": "n.",
    "en_def": "a list of things to be discussed or done",
    "cn_def": "議程；待辦事項"
  },
  "coin": {
    "pos": "v.",
    "en_def": "to invent a new word or phrase",
    "cn_def": "創造（新詞）"
  },
  "correlate": {
    "pos": "v.",
    "en_def": "to be connected in a way that one thing changes with another",
    "cn_def": "相關；有關聯"
  },
  "depression": {
    "pos": "n.",
    "en_def": "a condition of feeling very sad and without hope for a long time",
    "cn_def": "憂鬱；憂鬱症"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology",
    "cn_def": "數位的"
  },
  "importance": {
    "pos": "n.",
    "en_def": "the quality of being important",
    "cn_def": "重要性"
  },
  "keyboard": {
    "pos": "n.",
    "en_def": "the set of keys you press to type on a computer",
    "cn_def": "鍵盤"
  },
  "loneliness": {
    "pos": "n.",
    "en_def": "the sad feeling of being alone",
    "cn_def": "孤獨；寂寞"
  },
  "media": {
    "pos": "n.",
    "en_def": "television, newspapers, radio, and the Internet as a group",
    "cn_def": "媒體"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or system that people use to share or do things",
    "cn_def": "平台"
  },
  "poor": {
    "pos": "adj.",
    "en_def": "not good in quality",
    "cn_def": "差的；不好的"
  },
  "presence": {
    "pos": "n.",
    "en_def": "the fact of being in a place",
    "cn_def": "出席；在場"
  },
  "subject": {
    "pos": "v.",
    "en_def": "to make someone experience something unpleasant",
    "cn_def": "使遭受"
  },
  "surge": {
    "pos": "n.",
    "en_def": "a sudden large increase",
    "cn_def": "激增；湧現"
  },
  "survey": {
    "pos": "n.",
    "en_def": "a set of questions that you ask many people to learn their opinions",
    "cn_def": "調查"
  },
  "target": {
    "pos": "v.",
    "en_def": "to aim something at a certain group of people",
    "cn_def": "以…為目標"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general change in the way people behave or things develop",
    "cn_def": "趨勢；潮流"
  },
  "validate": {
    "pos": "v.",
    "en_def": "to prove that something is true or correct",
    "cn_def": "證實；確認"
  }
};

const EXTRA_GLOSSES = {};
