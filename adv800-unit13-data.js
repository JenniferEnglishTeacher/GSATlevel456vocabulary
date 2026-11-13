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
    "en_def": "very bad and wanting to hurt people",
    "sentence": "The villain in the story is truly {{BLANK}}.",
    "cn": "故事中的反派真是邪惡。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "an important test at school",
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
    "en_def": "to make someone feel very happy and interested",
    "sentence": "The news {{BLANK}} everyone.",
    "cn": "這個消息讓大家很興奮。"
  },
  {
    "word": "exist",
    "pos": "v.",
    "cn_def": "存在",
    "en_def": "to be real; to be in the world",
    "sentence": "Do you believe that ghosts {{BLANK}}?",
    "cn": "你相信鬼存在嗎？"
  },
  {
    "word": "exit",
    "pos": "n.",
    "cn_def": "出口",
    "en_def": "a door you use to leave a building",
    "sentence": "Please use the nearest {{BLANK}} in case of emergency.",
    "cn": "遇到緊急情況請使用最近的出口。"
  },
  {
    "word": "expect",
    "pos": "v.",
    "cn_def": "期望，預期",
    "en_def": "to think that something will happen",
    "sentence": "We {{BLANK}} good results from the project.",
    "cn": "我們期望這個專案有好的結果。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達，表現",
    "en_def": "to show a feeling or idea with words or actions",
    "sentence": "She found it difficult to {{BLANK}} her feelings.",
    "cn": "她發現很難表達她的感受。"
  },
  {
    "word": "extra",
    "pos": "adj.",
    "cn_def": "額外的，附加的",
    "en_def": "more than usual",
    "sentence": "He asked for {{BLANK}} help with his homework.",
    "cn": "他請求額外的作業幫助。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "公平的，合理的",
    "en_def": "treating everyone in the same, right way",
    "sentence": "She always tries to be {{BLANK}}.",
    "cn": "她總是努力做到公平。"
  },
  {
    "word": "false",
    "pos": "adj.",
    "cn_def": "錯誤的，假的",
    "en_def": "not true; not correct",
    "sentence": "The statement he made was {{BLANK}}.",
    "cn": "他所做的聲明是錯誤的。"
  },
  {
    "word": "fancy",
    "pos": "adj.",
    "cn_def": "花俏的，昂貴的",
    "en_def": "special and expensive; not simple",
    "sentence": "She wore a {{BLANK}} dress to the party.",
    "cn": "她穿著一件花俏的連衣裙去參加派對。"
  },
  {
    "word": "fantastic",
    "pos": "adj.",
    "cn_def": "極好的，奇異的",
    "en_def": "very, very good",
    "sentence": "They had a {{BLANK}} time at the amusement park.",
    "cn": "他們在遊樂園玩得很開心。"
  },
  {
    "word": "fashion",
    "pos": "n.",
    "cn_def": "時尚，流行",
    "en_def": "the kind of clothes that are popular at a certain time",
    "sentence": "She is very interested in {{BLANK}}.",
    "cn": "她對時尚很感興趣。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "錯誤，缺點",
    "en_def": "a mistake that you are to blame for",
    "sentence": "It was not her {{BLANK}} that the meeting was delayed.",
    "cn": "會議延誤不是她的錯。"
  },
  {
    "word": "fear",
    "pos": "n.",
    "cn_def": "恐懼，害怕",
    "en_def": "the feeling you have when you are afraid",
    "sentence": "He has a {{BLANK}} of heights.",
    "cn": "他恐高。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "費用，酬金",
    "en_def": "money you pay to enter a place or to get a service",
    "sentence": "The entrance {{BLANK}} is $10.",
    "cn": "入場費是10美元。"
  },
  {
    "word": "feeling",
    "pos": "n.",
    "cn_def": "感覺，感情",
    "en_def": "something that you feel inside, like love or anger",
    "sentence": "She has a warm {{BLANK}} towards her old friends.",
    "cn": "她對她的老朋友有一種溫暖的感覺。"
  },
  {
    "word": "female",
    "pos": "adj.",
    "cn_def": "女性的",
    "en_def": "being a woman or a girl",
    "sentence": "The {{BLANK}} employees were given equal opportunities.",
    "cn": "女性員工獲得了平等的機會。"
  },
  {
    "word": "fence",
    "pos": "n.",
    "cn_def": "圍欄",
    "en_def": "a wall made of wood or wire around a garden or field",
    "sentence": "They built a {{BLANK}} around their garden.",
    "cn": "他們在花園周圍建了一個圍欄。"
  },
  {
    "word": "film",
    "pos": "n.",
    "cn_def": "影片，電影",
    "en_def": "a movie",
    "sentence": "They watched a {{BLANK}} together.",
    "cn": "他們一起看了一部電影。"
  }
];

const MCQS = [
  {
    "q": "In the story, the ______ queen wants to kill the princess. She is a very bad woman.",
    "options": [
      "fair",
      "fancy",
      "extra",
      "evil"
    ],
    "answer": 3,
    "cn": "故事中的反派真是邪惡。",
    "vocabIndex": 0
  },
  {
    "q": "We have a big ______ next week. I have to study math and English every night.",
    "options": [
      "exam",
      "exit",
      "fee",
      "fence"
    ],
    "answer": 0,
    "cn": "她在為期末考試學習。",
    "vocabIndex": 1
  },
  {
    "q": "The news about the trip ______ the children. They couldn't stop talking about it.",
    "options": [
      "existed",
      "expected",
      "excited",
      "expressed"
    ],
    "answer": 2,
    "cn": "這個消息讓大家很興奮。",
    "vocabIndex": 2
  },
  {
    "q": "Do you think ghosts ______? I don't believe they are real.",
    "options": [
      "excite",
      "exist",
      "expect",
      "express"
    ],
    "answer": 1,
    "cn": "你相信鬼存在嗎？",
    "vocabIndex": 3
  },
  {
    "q": "When the fire started, everyone ran to the ______ and got out of the building safely.",
    "options": [
      "exit",
      "exam",
      "fee",
      "fashion"
    ],
    "answer": 0,
    "cn": "遇到緊急情況請使用最近的出口。",
    "vocabIndex": 4
  },
  {
    "q": "We ______ about thirty guests at the party tonight. We made enough food for them.",
    "options": [
      "exist",
      "expect",
      "excite",
      "express"
    ],
    "answer": 1,
    "cn": "我們期望這個專案有好的結果。",
    "vocabIndex": 5
  },
  {
    "q": "It is hard for him to ______ his feelings. He never says \"I love you.\"",
    "options": [
      "exist",
      "expect",
      "excite",
      "express"
    ],
    "answer": 3,
    "cn": "她發現很難表達她的感受。",
    "vocabIndex": 6
  },
  {
    "q": "I have an ______ pen. You can use it if you forgot yours.",
    "options": [
      "evil",
      "fair",
      "extra",
      "false"
    ],
    "answer": 2,
    "cn": "他請求額外的作業幫助。",
    "vocabIndex": 7
  },
  {
    "q": "It is not ______! My brother got two cookies, but I got only one.",
    "options": [
      "false",
      "fair",
      "fancy",
      "female"
    ],
    "answer": 1,
    "cn": "她總是努力做到公平。",
    "vocabIndex": 8
  },
  {
    "q": "\"The sun goes around the earth.\" Is this true or ______?",
    "options": [
      "fair",
      "fancy",
      "extra",
      "false"
    ],
    "answer": 3,
    "cn": "他所做的聲明是錯誤的。",
    "vocabIndex": 9
  },
  {
    "q": "We ate at a ______ restaurant last night. It was beautiful, but the food was very expensive.",
    "options": [
      "fancy",
      "fair",
      "false",
      "female"
    ],
    "answer": 0,
    "cn": "她穿著一件花俏的連衣裙去參加派對。",
    "vocabIndex": 10
  },
  {
    "q": "The show was ______! It was the best one I have ever seen.",
    "options": [
      "false",
      "female",
      "fantastic",
      "evil"
    ],
    "answer": 2,
    "cn": "他們在遊樂園玩得很開心。",
    "vocabIndex": 11
  },
  {
    "q": "Lisa is interested in ______. She always wears the newest kinds of clothes.",
    "options": [
      "fault",
      "fear",
      "fence",
      "fashion"
    ],
    "answer": 3,
    "cn": "她對時尚很感興趣。",
    "vocabIndex": 12
  },
  {
    "q": "It is my ______ that we are late. I got up too late this morning.",
    "options": [
      "fashion",
      "fault",
      "fee",
      "fence"
    ],
    "answer": 1,
    "cn": "會議延誤不是她的錯。",
    "vocabIndex": 13
  },
  {
    "q": "She has a ______ of dogs. She runs away when she sees one.",
    "options": [
      "fee",
      "fence",
      "fear",
      "fashion"
    ],
    "answer": 2,
    "cn": "他恐高。",
    "vocabIndex": 14
  },
  {
    "q": "The entrance ______ for the museum is 100 dollars. Children can get in for free.",
    "options": [
      "fee",
      "fear",
      "fault",
      "fence"
    ],
    "answer": 0,
    "cn": "入場費是10美元。",
    "vocabIndex": 15
  },
  {
    "q": "I have a strange ______ that someone is following us.",
    "options": [
      "fee",
      "fence",
      "film",
      "feeling"
    ],
    "answer": 3,
    "cn": "她對她的老朋友有一種溫暖的感覺。",
    "vocabIndex": 16
  },
  {
    "q": "A ______ lion doesn't have long hair around her head. Only the males do.",
    "options": [
      "fair",
      "female",
      "false",
      "fancy"
    ],
    "answer": 1,
    "cn": "女性員工獲得了平等的機會。",
    "vocabIndex": 17
  },
  {
    "q": "The farmer built a ______ around his field to keep the cows in.",
    "options": [
      "fee",
      "fear",
      "fence",
      "film"
    ],
    "answer": 2,
    "cn": "他們在花園周圍建了一個圍欄。",
    "vocabIndex": 18
  },
  {
    "q": "We watched a ______ about dinosaurs at the theater last night. It was two hours long.",
    "options": [
      "film",
      "fence",
      "fee",
      "fault"
    ],
    "answer": 0,
    "cn": "他們一起看了一部電影。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "fair": {
    "pos": "adj.",
    "en_def": "treating everyone in the same, right way",
    "cn_def": "公平的，合理的"
  },
  "fancy": {
    "pos": "adj.",
    "en_def": "special and expensive; not simple",
    "cn_def": "花俏的，昂貴的"
  },
  "extra": {
    "pos": "adj.",
    "en_def": "more than usual",
    "cn_def": "額外的，附加的"
  },
  "evil": {
    "pos": "adj.",
    "en_def": "very bad and wanting to hurt people",
    "cn_def": "邪惡的，壞的"
  },
  "exam": {
    "pos": "n.",
    "en_def": "an important test at school",
    "cn_def": "考試"
  },
  "exit": {
    "pos": "n.",
    "en_def": "a door you use to leave a building",
    "cn_def": "出口"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money you pay to enter a place or to get a service",
    "cn_def": "費用，酬金"
  },
  "fence": {
    "pos": "n.",
    "en_def": "a wall made of wood or wire around a garden or field",
    "cn_def": "圍欄"
  },
  "existed": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "存在"
  },
  "expected": {
    "pos": "v.",
    "en_def": "to think that something will happen",
    "cn_def": "期望，預期"
  },
  "excited": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "使興奮"
  },
  "expressed": {
    "pos": "v.",
    "en_def": "to show a feeling or idea with words or actions",
    "cn_def": "表達，表現"
  },
  "excite": {
    "pos": "v.",
    "en_def": "to make someone feel very happy and interested",
    "cn_def": "使興奮，使激動"
  },
  "exist": {
    "pos": "v.",
    "en_def": "to be real; to be in the world",
    "cn_def": "存在"
  },
  "expect": {
    "pos": "v.",
    "en_def": "to think that something will happen",
    "cn_def": "期望，預期"
  },
  "express": {
    "pos": "v.",
    "en_def": "to show a feeling or idea with words or actions",
    "cn_def": "表達，表現"
  },
  "fashion": {
    "pos": "n.",
    "en_def": "the kind of clothes that are popular at a certain time",
    "cn_def": "時尚，流行"
  },
  "false": {
    "pos": "adj.",
    "en_def": "not true; not correct",
    "cn_def": "錯誤的，假的"
  },
  "female": {
    "pos": "adj.",
    "en_def": "being a woman or a girl",
    "cn_def": "女性的"
  },
  "fantastic": {
    "pos": "adj.",
    "en_def": "very, very good",
    "cn_def": "極好的，奇異的"
  },
  "fault": {
    "pos": "n.",
    "en_def": "a mistake that you are to blame for",
    "cn_def": "錯誤，缺點"
  },
  "fear": {
    "pos": "n.",
    "en_def": "the feeling you have when you are afraid",
    "cn_def": "恐懼，害怕"
  },
  "film": {
    "pos": "n.",
    "en_def": "a movie",
    "cn_def": "影片，電影"
  },
  "feeling": {
    "pos": "n.",
    "en_def": "something that you feel inside, like love or anger",
    "cn_def": "感覺，感情"
  }
};

const EXTRA_GLOSSES = {};
