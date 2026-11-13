// Unit 13 Quiz Data: evil – film
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U13 - evil – film",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "evil",
    "pos": "adj.",
    "cn_def": "邪惡的，壞的",
    "en_def": "",
    "sentence": "The villain in the story is truly {{BLANK}}.",
    "cn": "故事中的反派真是邪惡。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "",
    "sentence": "She is studying for her final {{BLANK}}.",
    "cn": "她在為期末考試學習。",
    "alts": [
      "exams"
    ]
  },
  {
    "word": "excite",
    "pos": "v.",
    "cn_def": "使興奮，使激動",
    "en_def": "",
    "sentence": "The news {{BLANK}} everyone.",
    "cn": "這個消息讓大家很興奮。"
  },
  {
    "word": "exist",
    "pos": "v.",
    "cn_def": "存在",
    "en_def": "",
    "sentence": "Do you believe that ghosts {{BLANK}}?",
    "cn": "你相信鬼存在嗎？"
  },
  {
    "word": "exit",
    "pos": "n.",
    "cn_def": "出口",
    "en_def": "",
    "sentence": "Please use the nearest {{BLANK}} in case of emergency.",
    "cn": "遇到緊急情況請使用最近的出口。"
  },
  {
    "word": "expect",
    "pos": "v.",
    "cn_def": "期望，預期",
    "en_def": "",
    "sentence": "We {{BLANK}} good results from the project.",
    "cn": "我們期望這個專案有好的結果。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達，表現",
    "en_def": "",
    "sentence": "She found it difficult to {{BLANK}} her feelings.",
    "cn": "她發現很難表達她的感受。"
  },
  {
    "word": "extra",
    "pos": "adj.",
    "cn_def": "額外的，附加的",
    "en_def": "",
    "sentence": "He asked for {{BLANK}} help with his homework.",
    "cn": "他請求額外的作業幫助。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "公平的，合理的",
    "en_def": "",
    "sentence": "She always tries to be {{BLANK}}.",
    "cn": "她總是努力做到公平。"
  },
  {
    "word": "false",
    "pos": "adj.",
    "cn_def": "錯誤的，假的",
    "en_def": "",
    "sentence": "The statement he made was {{BLANK}}.",
    "cn": "他所做的聲明是錯誤的。"
  },
  {
    "word": "fancy",
    "pos": "adj.",
    "cn_def": "花俏的，昂貴的",
    "en_def": "",
    "sentence": "She wore a {{BLANK}} dress to the party.",
    "cn": "她穿著一件花俏的連衣裙去參加派對。"
  },
  {
    "word": "fantastic",
    "pos": "adj.",
    "cn_def": "極好的，奇異的",
    "en_def": "",
    "sentence": "They had a {{BLANK}} time at the amusement park.",
    "cn": "他們在遊樂園玩得很開心。"
  },
  {
    "word": "fashion",
    "pos": "n.",
    "cn_def": "時尚，流行",
    "en_def": "",
    "sentence": "She is very interested in {{BLANK}}.",
    "cn": "她對時尚很感興趣。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "錯誤，缺點",
    "en_def": "",
    "sentence": "It was not her {{BLANK}} that the meeting was delayed.",
    "cn": "會議延誤不是她的錯。"
  },
  {
    "word": "fear",
    "pos": "n.",
    "cn_def": "恐懼，害怕",
    "en_def": "",
    "sentence": "He has a {{BLANK}} of heights.",
    "cn": "他恐高。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用，酬金",
    "en_def": "",
    "sentence": "The entrance {{BLANK}} is $10.",
    "cn": "入場費是10美元。"
  },
  {
    "word": "feeling",
    "pos": "n.",
    "cn_def": "感覺，感情",
    "en_def": "",
    "sentence": "She has a warm {{BLANK}} towards her old friends.",
    "cn": "她對她的老朋友有一種溫暖的感覺。"
  },
  {
    "word": "female",
    "pos": "adj.",
    "cn_def": "女性的",
    "en_def": "",
    "sentence": "The {{BLANK}} employees were given equal opportunities.",
    "cn": "女性員工獲得了平等的機會。"
  },
  {
    "word": "fence",
    "pos": "n.",
    "cn_def": "圍欄",
    "en_def": "",
    "sentence": "They built a {{BLANK}} around their garden.",
    "cn": "他們在花園周圍建了一個圍欄。"
  },
  {
    "word": "film",
    "pos": "n.",
    "cn_def": "影片，電影",
    "en_def": "",
    "sentence": "They watched a {{BLANK}} together.",
    "cn": "他們一起看了一部電影。"
  }
];

const MCQS = [
  {
    "q": "The villain in the story is truly ______.【邪惡的，壞的】",
    "options": [
      "fancy",
      "fantastic",
      "evil",
      "female"
    ],
    "answer": 2,
    "cn": "故事中的反派真是邪惡。",
    "vocabIndex": 0
  },
  {
    "q": "She is studying for her final ______.【考試】",
    "options": [
      "fashion",
      "fee",
      "fear",
      "exam"
    ],
    "answer": 3,
    "cn": "她在為期末考試學習。",
    "vocabIndex": 1
  },
  {
    "q": "The news ______ everyone.【使興奮，使激動】",
    "options": [
      "excited",
      "exist",
      "expect",
      "express"
    ],
    "answer": 0,
    "cn": "這個消息讓大家很興奮。",
    "vocabIndex": 2
  },
  {
    "q": "Do you believe that ghosts ______?【存在】",
    "options": [
      "expect",
      "exist",
      "express",
      "excited"
    ],
    "answer": 1,
    "cn": "你相信鬼存在嗎？",
    "vocabIndex": 3
  },
  {
    "q": "Please use the nearest ______ in case of emergency.【出口】",
    "options": [
      "fence",
      "fashion",
      "exit",
      "fear"
    ],
    "answer": 2,
    "cn": "遇到緊急情況請使用最近的出口。",
    "vocabIndex": 4
  },
  {
    "q": "We ______ good results from the project.【期望，預期】",
    "options": [
      "expect",
      "exist",
      "express",
      "excited"
    ],
    "answer": 0,
    "cn": "我們期望這個專案有好的結果。",
    "vocabIndex": 5
  },
  {
    "q": "She found it difficult to ______ her feelings.【表達，表現】",
    "options": [
      "expect",
      "express",
      "exist",
      "excited"
    ],
    "answer": 1,
    "cn": "她發現很難表達她的感受。",
    "vocabIndex": 6
  },
  {
    "q": "He asked for ______ help with his homework.【額外的，附加的】",
    "options": [
      "fancy",
      "fair",
      "fantastic",
      "extra"
    ],
    "answer": 3,
    "cn": "他請求額外的作業幫助。",
    "vocabIndex": 7
  },
  {
    "q": "She always tries to be ______.【公平的，合理的】",
    "options": [
      "fantastic",
      "fair",
      "extra",
      "fancy"
    ],
    "answer": 1,
    "cn": "她總是努力做到公平。",
    "vocabIndex": 8
  },
  {
    "q": "The statement he made was ______.【錯誤的，假的】",
    "options": [
      "fantastic",
      "fair",
      "false",
      "extra"
    ],
    "answer": 2,
    "cn": "他所做的聲明是錯誤的。",
    "vocabIndex": 9
  },
  {
    "q": "She wore a ______ dress to the party.【花俏的，昂貴的】",
    "options": [
      "fancy",
      "evil",
      "fair",
      "female"
    ],
    "answer": 0,
    "cn": "她穿著一件花俏的連衣裙去參加派對。",
    "vocabIndex": 10
  },
  {
    "q": "They had a ______ time at the amusement park.【極好的，奇異的】",
    "options": [
      "fair",
      "extra",
      "fancy",
      "fantastic"
    ],
    "answer": 3,
    "cn": "他們在遊樂園玩得很開心。",
    "vocabIndex": 11
  },
  {
    "q": "She is very interested in ______.【時尚，流行】",
    "options": [
      "fee",
      "exam",
      "fashion",
      "fear"
    ],
    "answer": 2,
    "cn": "她對時尚很感興趣。",
    "vocabIndex": 12
  },
  {
    "q": "It was not her ______ that the meeting was delayed.【錯誤，缺點】",
    "options": [
      "exam",
      "fence",
      "fee",
      "fault"
    ],
    "answer": 3,
    "cn": "會議延誤不是她的錯。",
    "vocabIndex": 13
  },
  {
    "q": "He has a ______ of heights.【恐懼，害怕】",
    "options": [
      "exit",
      "fear",
      "fence",
      "exam"
    ],
    "answer": 1,
    "cn": "他恐高。",
    "vocabIndex": 14
  },
  {
    "q": "The entrance ______ is $10.【費用，酬金】",
    "options": [
      "fee",
      "fence",
      "fear",
      "exit"
    ],
    "answer": 0,
    "cn": "入場費是10美元。",
    "vocabIndex": 15
  },
  {
    "q": "She has a warm ______ towards her old friends.【感覺，感情】",
    "options": [
      "fence",
      "fear",
      "exit",
      "feeling"
    ],
    "answer": 3,
    "cn": "她對她的老朋友有一種溫暖的感覺。",
    "vocabIndex": 16
  },
  {
    "q": "The ______ employees were given equal opportunities.【女性的】",
    "options": [
      "extra",
      "female",
      "false",
      "fantastic"
    ],
    "answer": 1,
    "cn": "女性員工獲得了平等的機會。",
    "vocabIndex": 17
  },
  {
    "q": "They built a ______ around their garden.【圍欄】",
    "options": [
      "fence",
      "exam",
      "exit",
      "fashion"
    ],
    "answer": 0,
    "cn": "他們在花園周圍建了一個圍欄。",
    "vocabIndex": 18
  },
  {
    "q": "They watched a ______ together.【影片，電影】",
    "options": [
      "fence",
      "fee",
      "film",
      "fashion"
    ],
    "answer": 2,
    "cn": "他們一起看了一部電影。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "evil": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "邪惡的，壞的"
  },
  "exam": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "考試"
  },
  "excited": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "使興奮，使激動"
  },
  "exist": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "存在"
  },
  "exit": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "出口"
  },
  "expect": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "期望，預期"
  },
  "express": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "表達，表現"
  },
  "extra": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "額外的，附加的"
  },
  "fair": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "公平的，合理的"
  },
  "false": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "錯誤的，假的"
  },
  "fancy": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "花俏的，昂貴的"
  },
  "fantastic": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "極好的，奇異的"
  },
  "fashion": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "時尚，流行"
  },
  "fault": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "錯誤，缺點"
  },
  "fear": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "恐懼，害怕"
  },
  "fee": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "費用，酬金"
  },
  "feeling": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "感覺，感情"
  },
  "female": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "女性的"
  },
  "fence": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "圍欄"
  },
  "film": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "影片，電影"
  }
};

const EXTRA_GLOSSES = {};
