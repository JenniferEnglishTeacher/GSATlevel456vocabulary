// Unit 18 Quiz Data: hunger – inspire
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U18 - hunger – inspire",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hunger",
    "pos": "n.",
    "cn_def": "飢餓",
    "en_def": "the feeling of needing food; not having enough food",
    "sentence": "They are working to end {{BLANK}}.",
    "cn": "他們正在努力消除飢餓。"
  },
  {
    "word": "hunter",
    "pos": "n.",
    "cn_def": "獵人",
    "en_def": "a person who catches or kills wild animals",
    "sentence": "The {{BLANK}} tracked the deer through the forest.",
    "cn": "獵人追蹤鹿穿過森林。"
  },
  {
    "word": "ignore",
    "pos": "v.",
    "cn_def": "忽視",
    "en_def": "to act as if you do not see or hear someone or something",
    "sentence": "She decided to {{BLANK}} his rude comments.",
    "cn": "她決定忽視他的粗魯評論。"
  },
  {
    "word": "ill",
    "pos": "adj.",
    "cn_def": "生病的",
    "en_def": "sick",
    "sentence": "He has been {{BLANK}} for a week.",
    "cn": "他生病已經一週了。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to make a picture of something in your mind",
    "sentence": "Can you {{BLANK}} a world without music?",
    "cn": "你能想像一個沒有音樂的世界嗎？"
  },
  {
    "word": "impolite",
    "pos": "adj.",
    "cn_def": "不禮貌的",
    "en_def": "not polite; rude",
    "sentence": "It is {{BLANK}} to interrupt someone while they are speaking.",
    "cn": "打斷別人說話是不禮貌的。"
  },
  {
    "word": "importance",
    "pos": "n.",
    "cn_def": "重要性",
    "en_def": "how important something is",
    "sentence": "He understands the {{BLANK}} of education.",
    "cn": "他理解教育的重要性。"
  },
  {
    "word": "impossible",
    "pos": "adj.",
    "cn_def": "不可能的",
    "en_def": "not able to happen or be done",
    "sentence": "It is {{BLANK}} to finish this work in one day.",
    "cn": "一天內完成這項工作是不可能的。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善，改進",
    "en_def": "to make something better; to get better",
    "sentence": "She wants to {{BLANK}} her English skills.",
    "cn": "她想提高她的英語技能。"
  },
  {
    "word": "include",
    "pos": "v.",
    "cn_def": "包含",
    "en_def": "to have something as one of its parts",
    "sentence": "The price {{BLANK}} breakfast.",
    "cn": "價格包含早餐。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入",
    "en_def": "the money that a person gets from work",
    "sentence": "His {{BLANK}} has increased this year.",
    "cn": "他的收入今年增加了。"
  },
  {
    "word": "inch",
    "pos": "n.",
    "cn_def": "英寸",
    "en_def": "a small unit of length; about 2.5 centimeters",
    "sentence": "The screen measures 24 {{BLANK}}.",
    "cn": "螢幕尺寸為24英寸。"
  },
  {
    "word": "increase",
    "pos": "v.",
    "cn_def": "增加，增長",
    "en_def": "to make something bigger in number or amount",
    "sentence": "The company plans to {{BLANK}} its production.",
    "cn": "公司計劃增加產量。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的，自主的",
    "en_def": "able to do things by yourself, without help",
    "sentence": "She is a very {{BLANK}} person.",
    "cn": "她是個非常獨立的人。"
  },
  {
    "word": "indicate",
    "pos": "v.",
    "cn_def": "表明，指出",
    "en_def": "to show that something is true",
    "sentence": "The results {{BLANK}} that the treatment is effective.",
    "cn": "結果表明這種治療是有效的。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響",
    "en_def": "the power to change how someone thinks or acts",
    "sentence": "Her parents had a big {{BLANK}} on her career choice.",
    "cn": "她的父母對她的職業選擇有很大影響。"
  },
  {
    "word": "information",
    "pos": "n.",
    "cn_def": "資訊，消息",
    "en_def": "facts about someone or something",
    "sentence": "We need more {{BLANK}} before making a decision.",
    "cn": "在作出決定之前我們需要更多資訊。"
  },
  {
    "word": "ink",
    "pos": "n.",
    "cn_def": "墨水",
    "en_def": "the colored liquid inside a pen",
    "sentence": "The pen ran out of {{BLANK}}.",
    "cn": "鋼筆沒有墨水了。"
  },
  {
    "word": "insist",
    "pos": "v.",
    "cn_def": "堅持，強調",
    "en_def": "to say strongly that you want to do something",
    "sentence": "She {{BLANK}} on paying for her own meal.",
    "cn": "她堅持自己付餐費。",
    "alts": [
      "insists"
    ]
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵，啟發",
    "en_def": "to make someone feel that they want to do something good",
    "sentence": "His speech {{BLANK}} everyone in the audience.",
    "cn": "他的演講激勵了在場的每一個人。"
  }
];

const MCQS = [
  {
    "q": "Many children in poor countries die of ______. They don't have enough food to eat.",
    "options": [
      "income",
      "ink",
      "hunger",
      "influence"
    ],
    "answer": 2,
    "cn": "他們正在努力消除飢餓。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ went into the forest with his gun to look for wild pigs.",
    "options": [
      "hunger",
      "income",
      "inch",
      "hunter"
    ],
    "answer": 3,
    "cn": "獵人追蹤鹿穿過森林。",
    "vocabIndex": 1
  },
  {
    "q": "If someone says bad things about you, just ______ them. Don't listen or answer.",
    "options": [
      "ignore",
      "improve",
      "include",
      "increase"
    ],
    "answer": 0,
    "cn": "她決定忽視他的粗魯評論。",
    "vocabIndex": 2
  },
  {
    "q": "Ben is ______ today, so he can't come to school. He has a fever.",
    "options": [
      "impolite",
      "ill",
      "impossible",
      "independent"
    ],
    "answer": 1,
    "cn": "他生病已經一週了。",
    "vocabIndex": 3
  },
  {
    "q": "Close your eyes and ______ you are on a beach. Can you see the blue sea in your mind?",
    "options": [
      "improve",
      "include",
      "insist",
      "imagine"
    ],
    "answer": 3,
    "cn": "你能想像一個沒有音樂的世界嗎？",
    "vocabIndex": 4
  },
  {
    "q": "It is ______ to talk with your mouth full. Please finish your food first.",
    "options": [
      "ill",
      "impolite",
      "impossible",
      "independent"
    ],
    "answer": 1,
    "cn": "打斷別人說話是不禮貌的。",
    "vocabIndex": 5
  },
  {
    "q": "The teacher talked about the ______ of sleep. Students need eight hours every night.",
    "options": [
      "income",
      "influence",
      "importance",
      "information"
    ],
    "answer": 2,
    "cn": "他理解教育的重要性。",
    "vocabIndex": 6
  },
  {
    "q": "It is ______ for people to live without water. Nobody can do it.",
    "options": [
      "impossible",
      "impolite",
      "ill",
      "independent"
    ],
    "answer": 0,
    "cn": "一天內完成這項工作是不可能的。",
    "vocabIndex": 7
  },
  {
    "q": "I want to ______ my English, so I read and listen to it every day.",
    "options": [
      "ignore",
      "improve",
      "include",
      "indicate"
    ],
    "answer": 1,
    "cn": "她想提高她的英語技能。",
    "vocabIndex": 8
  },
  {
    "q": "The price of the room ______ breakfast. You don't have to pay more for it.",
    "options": [
      "improves",
      "ignores",
      "insists",
      "includes"
    ],
    "answer": 3,
    "cn": "價格包含早餐。",
    "vocabIndex": 9
  },
  {
    "q": "Mr. Lin has a high ______. He makes two hundred thousand dollars a month.",
    "options": [
      "income",
      "hunger",
      "ink",
      "inch"
    ],
    "answer": 0,
    "cn": "他的收入今年增加了。",
    "vocabIndex": 10
  },
  {
    "q": "This TV screen is fifty ______ wide. One of them is about 2.5 centimeters.",
    "options": [
      "incomes",
      "hunters",
      "inches",
      "influences"
    ],
    "answer": 2,
    "cn": "螢幕尺寸為24英寸。",
    "vocabIndex": 11
  },
  {
    "q": "The store wants to ______ its prices. A cup of coffee will go from fifty to sixty dollars.",
    "options": [
      "ignore",
      "increase",
      "imagine",
      "inspire"
    ],
    "answer": 1,
    "cn": "公司計劃增加產量。",
    "vocabIndex": 12
  },
  {
    "q": "Amy is very ______. She lives alone and does everything by herself.",
    "options": [
      "independent",
      "impolite",
      "impossible",
      "ill"
    ],
    "answer": 0,
    "cn": "她是個非常獨立的人。",
    "vocabIndex": 13
  },
  {
    "q": "The dark clouds ______ that it will rain soon.",
    "options": [
      "include",
      "improve",
      "indicate",
      "inspire"
    ],
    "answer": 2,
    "cn": "結果表明這種治療是有效的。",
    "vocabIndex": 14
  },
  {
    "q": "Parents have a strong ______ on their children. Kids often think and act like them.",
    "options": [
      "income",
      "ink",
      "inch",
      "influence"
    ],
    "answer": 3,
    "cn": "她的父母對她的職業選擇有很大影響。",
    "vocabIndex": 15
  },
  {
    "q": "I need more ______ about the trip. What time do we leave, and how much does it cost?",
    "options": [
      "ink",
      "information",
      "hunger",
      "income"
    ],
    "answer": 1,
    "cn": "在作出決定之前我們需要更多資訊。",
    "vocabIndex": 16
  },
  {
    "q": "My pen is out of ______. Can I borrow yours to finish this letter?",
    "options": [
      "income",
      "inch",
      "hunger",
      "ink"
    ],
    "answer": 3,
    "cn": "鋼筆沒有墨水了。",
    "vocabIndex": 17
  },
  {
    "q": "I said I could walk home, but Dad ______ on driving me. He wouldn't take no for an answer.",
    "options": [
      "included",
      "improved",
      "insisted",
      "increased"
    ],
    "answer": 2,
    "cn": "她堅持自己付餐費。",
    "vocabIndex": 18
  },
  {
    "q": "The teacher's story ______ us to work harder. We all wanted to be like the man in it.",
    "options": [
      "inspired",
      "ignored",
      "included",
      "insisted"
    ],
    "answer": 0,
    "cn": "他的演講激勵了在場的每一個人。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "income": {
    "pos": "n.",
    "en_def": "the money that a person gets from work",
    "cn_def": "收入"
  },
  "ink": {
    "pos": "n.",
    "en_def": "the colored liquid inside a pen",
    "cn_def": "墨水"
  },
  "hunger": {
    "pos": "n.",
    "en_def": "the feeling of needing food; not having enough food",
    "cn_def": "飢餓"
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to change how someone thinks or acts",
    "cn_def": "影響"
  },
  "inch": {
    "pos": "n.",
    "en_def": "a small unit of length; about 2.5 centimeters",
    "cn_def": "英寸"
  },
  "hunter": {
    "pos": "n.",
    "en_def": "a person who catches or kills wild animals",
    "cn_def": "獵人"
  },
  "ignore": {
    "pos": "v.",
    "en_def": "to act as if you do not see or hear someone or something",
    "cn_def": "忽視"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better; to get better",
    "cn_def": "改善，改進"
  },
  "include": {
    "pos": "v.",
    "en_def": "to have something as one of its parts",
    "cn_def": "包含"
  },
  "increase": {
    "pos": "v.",
    "en_def": "to make something bigger in number or amount",
    "cn_def": "增加，增長"
  },
  "impolite": {
    "pos": "adj.",
    "en_def": "not polite; rude",
    "cn_def": "不禮貌的"
  },
  "ill": {
    "pos": "adj.",
    "en_def": "sick",
    "cn_def": "生病的"
  },
  "impossible": {
    "pos": "adj.",
    "en_def": "not able to happen or be done",
    "cn_def": "不可能的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "able to do things by yourself, without help",
    "cn_def": "獨立的，自主的"
  },
  "insist": {
    "pos": "v.",
    "en_def": "to say strongly that you want to do something",
    "cn_def": "堅持，強調"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to make a picture of something in your mind",
    "cn_def": "想像"
  },
  "importance": {
    "pos": "n.",
    "en_def": "how important something is",
    "cn_def": "重要性"
  },
  "information": {
    "pos": "n.",
    "en_def": "facts about someone or something",
    "cn_def": "資訊，消息"
  },
  "indicate": {
    "pos": "v.",
    "en_def": "to show that something is true",
    "cn_def": "表明，指出"
  },
  "improves": {
    "pos": "v.",
    "en_def": "to make something better; to get better",
    "cn_def": "改善，改進"
  },
  "ignores": {
    "pos": "v.",
    "en_def": "to act as if you do not see or hear someone or something",
    "cn_def": "忽視"
  },
  "insists": {
    "pos": "v.",
    "en_def": "to say strongly that you want to do something",
    "cn_def": "堅持，強調"
  },
  "includes": {
    "pos": "v.",
    "en_def": "to have something as one of its parts",
    "cn_def": "包含"
  },
  "incomes": {
    "pos": "n.",
    "en_def": "the money that a person gets from work",
    "cn_def": "收入"
  },
  "hunters": {
    "pos": "n.",
    "en_def": "a person who catches or kills wild animals",
    "cn_def": "獵人"
  },
  "inches": {
    "pos": "n.",
    "en_def": "a small unit of length; about 2.5 centimeters",
    "cn_def": "英寸"
  },
  "influences": {
    "pos": "n.",
    "en_def": "the power to change how someone thinks or acts",
    "cn_def": "影響"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to make someone feel that they want to do something good",
    "cn_def": "激勵，啟發"
  },
  "included": {
    "pos": "v.",
    "en_def": "to have something as one of its parts",
    "cn_def": "包含"
  },
  "improved": {
    "pos": "v.",
    "en_def": "to make something better; to get better",
    "cn_def": "改善，改進"
  },
  "insisted": {
    "pos": "v.",
    "en_def": "to say strongly that you want to do something",
    "cn_def": "堅持，強調"
  },
  "increased": {
    "pos": "v.",
    "en_def": "to make something bigger in number or amount",
    "cn_def": "增加，增長"
  },
  "inspired": {
    "pos": "v.",
    "en_def": "to make someone feel that they want to do something good",
    "cn_def": "激勵，啟發"
  },
  "ignored": {
    "pos": "v.",
    "en_def": "to act as if you do not see or hear someone or something",
    "cn_def": "忽視"
  }
};

const EXTRA_GLOSSES = {};
