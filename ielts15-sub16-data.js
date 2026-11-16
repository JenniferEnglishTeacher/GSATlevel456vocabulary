// Topic 15 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T15 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lost for words",
    "pos": "adj.phr.",
    "cn_def": "驚訝得說不出話",
    "en_def": "so surprised or moved that you cannot speak",
    "sentence": "I was {{BLANK}} when my students surprised me with a cake, so I just smiled and hugged them all.",
    "cn": "當學生們用蛋糕給我驚喜時，我感動得說不出話，所以我只是微笑並擁抱了他們每一個人。"
  },
  {
    "word": "in other words",
    "pos": "phr.",
    "cn_def": "換句話說",
    "en_def": "used to say something again more simply",
    "sentence": "The test is \"not compulsory\"; {{BLANK}}, you can choose not to take it, but most students take it anyway.",
    "cn": "這個考試「並非強制」；換句話說，你可以選擇不考，但大多數學生還是會去考。"
  },
  {
    "word": "have a way with words",
    "pos": "v.phr.",
    "cn_def": "很會說話；文筆好",
    "en_def": "to be good at speaking or writing",
    "sentence": "My sister {{BLANK}}, so she always writes the birthday cards for our family.",
    "cn": "我姊姊很會遣詞用字，所以我們家的生日卡片總是由她來寫。"
  },
  {
    "word": "not mince one's words",
    "pos": "v.phr.",
    "cn_def": "說話直截了當",
    "en_def": "to speak very directly, even if it is unkind",
    "sentence": "My coach does {{BLANK}}, so when I play badly he tells me exactly what I did wrong.",
    "cn": "我的教練說話直截了當，所以當我表現不好時，他會確切告訴我哪裡做錯了。"
  },
  {
    "word": "have the last word",
    "pos": "v.phr.",
    "cn_def": "說最後一句話",
    "en_def": "to make the final comment in an argument",
    "sentence": "My little brother always wants to {{BLANK}}, so our arguments go on until Mum tells us to stop.",
    "cn": "我弟弟總是想說最後一句話，所以我們的爭吵會一直持續到媽媽叫我們停止為止。"
  },
  {
    "word": "word for word",
    "pos": "adv.",
    "cn_def": "一字不差地；逐字地",
    "en_def": "in exactly the same words",
    "sentence": "Don't copy the article {{BLANK}}, because your teacher wants you to explain the ideas in your own words.",
    "cn": "不要逐字照抄那篇文章，因為老師希望你用自己的話來解釋這些想法。"
  },
  {
    "word": "it's all Greek to me",
    "pos": "phr.",
    "cn_def": "我完全看不懂",
    "en_def": "I cannot understand this at all",
    "sentence": "My dad showed me his tax forms, but {{BLANK}}, so I told him to ask an accountant.",
    "cn": "我爸爸給我看他的報稅表，但我完全看不懂，所以我叫他去問會計師。"
  },
  {
    "word": "speak the same language",
    "pos": "v.phr.",
    "cn_def": "想法一致；有共同語言",
    "en_def": "to share similar ideas and understand each other",
    "sentence": "The designer and the engineer finally {{BLANK}}, so the project moved much faster after that meeting.",
    "cn": "設計師和工程師終於有了共同語言，所以那次會議之後計畫進展得快多了。"
  },
  {
    "word": "the gift of the gab",
    "pos": "n.phr.",
    "cn_def": "好口才",
    "en_def": "the ability to speak easily and persuasively",
    "sentence": "Our class president has {{BLANK}}, so she can talk the teachers into almost anything.",
    "cn": "我們班長有好口才，所以她幾乎可以說服老師答應任何事。"
  },
  {
    "word": "tongue-tied",
    "pos": "adj.",
    "cn_def": "緊張得說不出話",
    "en_def": "unable to speak because you are nervous",
    "sentence": "I was {{BLANK}} when I met my favourite singer, so I just stood there and forgot every English word I knew.",
    "cn": "當我見到最喜歡的歌手時，我緊張得說不出話，所以我只是站在那裡，忘光了我會的每一個英文字。"
  },
  {
    "word": "a slip of the tongue",
    "pos": "n.phr.",
    "cn_def": "口誤",
    "en_def": "a small mistake when you are speaking",
    "sentence": "Calling my teacher \"Mum\" was {{BLANK}}, but the whole class laughed for five minutes.",
    "cn": "叫老師「媽媽」只是一個口誤，但全班笑了五分鐘。"
  },
  {
    "word": "bite one's tongue",
    "pos": "v.phr.",
    "cn_def": "忍住不說",
    "en_def": "to stop yourself from saying something",
    "sentence": "I wanted to correct my boss's English, but I {{BLANK}}, because the meeting was not the right time.",
    "cn": "我想糾正老闆的英文，但我忍住沒說，因為會議中不是適當的時機。"
  },
  {
    "word": "mind one's language",
    "pos": "v.phr.",
    "cn_def": "說話注意用詞",
    "en_def": "to be careful not to use rude words",
    "sentence": "Please {{BLANK}} in front of the children, because they copy every word they hear.",
    "cn": "請在孩子面前注意你的用詞，因為他們會模仿聽到的每一個字。"
  },
  {
    "word": "pick up a language",
    "pos": "v.phr.",
    "cn_def": "自然學會一種語言",
    "en_def": "to learn a language naturally without formal study",
    "sentence": "Young kids can {{BLANK}} quickly when they play with local children, while adults often need classes.",
    "cn": "小孩和當地孩子一起玩時能很快地自然學會一種語言，而大人常常需要上課。"
  },
  {
    "word": "get by in",
    "pos": "v.phr.",
    "cn_def": "勉強應付（某語言）",
    "en_def": "to know just enough of a language to manage",
    "sentence": "I can {{BLANK}} Japanese when I travel, but I cannot understand the news or have deep conversations.",
    "cn": "我旅行時能用日文勉強應付，但我聽不懂新聞，也無法深入交談。"
  },
  {
    "word": "break the ice",
    "pos": "v.phr.",
    "cn_def": "打破僵局；破冰",
    "en_def": "to make people feel relaxed when they first meet",
    "sentence": "Our teacher played a name game to {{BLANK}} on the first day, and soon everyone was chatting and laughing.",
    "cn": "老師在第一天玩了一個名字遊戲來破冰，很快大家就聊天說笑起來了。"
  },
  {
    "word": "talk at cross purposes",
    "pos": "v.phr.",
    "cn_def": "雞同鴨講",
    "en_def": "to misunderstand each other because you mean different things",
    "sentence": "We {{BLANK}} for ten minutes, because I meant the train station while she meant the bus station.",
    "cn": "我們雞同鴨講了十分鐘，因為我指的是火車站，而她指的是公車站。"
  },
  {
    "word": "actions speak louder than words",
    "pos": "phr.",
    "cn_def": "行動勝於言語",
    "en_def": "what you do matters more than what you say",
    "sentence": "He promised to practise English every day, but {{BLANK}}, so I'll believe it when I see it.",
    "cn": "他答應每天練習英文，但行動勝於言語，所以等我親眼看到才會相信。"
  },
  {
    "word": "put words into someone's mouth",
    "pos": "v.phr.",
    "cn_def": "曲解別人的話；硬說別人說過",
    "en_def": "to say that someone said something they did not",
    "sentence": "Please don't {{BLANK}}, because I never said that your translation was bad.",
    "cn": "請不要硬說我說過那些話，因為我從來沒說你的翻譯很糟。"
  },
  {
    "word": "speak volumes",
    "pos": "v.phr.",
    "cn_def": "說明一切；意味深長",
    "en_def": "to show something clearly without words",
    "sentence": "Her silence {{BLANK}} after the argument, so I knew I had to apologise before dinner.",
    "cn": "爭吵後她的沉默說明了一切，所以我知道我必須在晚餐前道歉。"
  }
];

const MCQS = [
  {
    "q": "I was _____ when my students surprised me with a cake, so I just smiled and hugged them all.",
    "options": [
      "mother tongue",
      "translation app",
      "lost for words",
      "mind one's language"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The test is \"not compulsory\"; _____, you can choose not to take it, but most students take it anyway.",
    "options": [
      "in other words",
      "global English",
      "language family",
      "sight translation"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "My sister _____, so she always writes the birthday cards for our family.",
    "options": [
      "speak volumes",
      "have a way with words",
      "bite one's tongue",
      "break the ice"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "My coach does _____, so when I play badly he tells me exactly what I did wrong.",
    "options": [
      "talk at cross purposes",
      "bite one's tongue",
      "have the last word",
      "not mince one's words"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "My little brother always wants to _____, so our arguments go on until Mum tells us to stop.",
    "options": [
      "break the ice",
      "have the last word",
      "talk at cross purposes",
      "have a way with words"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Don't copy the article _____, because your teacher wants you to explain the ideas in your own words.",
    "options": [
      "language shift",
      "compound word",
      "mother-tongue education",
      "word for word"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "My dad showed me his tax forms, but _____, so I told him to ask an accountant.",
    "options": [
      "language partner",
      "the gift of the gab",
      "it's all Greek to me",
      "language policy"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The designer and the engineer finally _____, so the project moved much faster after that meeting.",
    "options": [
      "speak the same language",
      "put words into someone's mouth",
      "have a way with words",
      "have the last word"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Our class president has _____, so she can talk the teachers into almost anything.",
    "options": [
      "word order",
      "the gift of the gab",
      "translation app",
      "last speaker"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "I was _____ when I met my favourite singer, so I just stood there and forgot every English word I knew.",
    "options": [
      "ungrammatical",
      "morose",
      "wry",
      "tongue-tied"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Calling my teacher \"Mum\" was _____, but the whole class laughed for five minutes.",
    "options": [
      "court interpreter",
      "speech translation",
      "a slip of the tongue",
      "language death"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "I wanted to correct my boss's English, but I _____, because the meeting was not the right time.",
    "options": [
      "bite one's tongue",
      "get by in",
      "mind one's language",
      "break the ice"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Please _____ in front of the children, because they copy every word they hear.",
    "options": [
      "talk at cross purposes",
      "mind one's language",
      "get by in",
      "not mince one's words"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Young kids can _____ quickly when they play with local children, while adults often need classes.",
    "options": [
      "bite one's tongue",
      "have the last word",
      "pick up a language",
      "talk at cross purposes"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "I can _____ Japanese when I travel, but I cannot understand the news or have deep conversations.",
    "options": [
      "pick up a language",
      "speak the same language",
      "bite one's tongue",
      "get by in"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our teacher played a name game to _____ on the first day, and soon everyone was chatting and laughing.",
    "options": [
      "break the ice",
      "put words into someone's mouth",
      "speak volumes",
      "have a way with words"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "We _____ for ten minutes, because I meant the train station while she meant the bus station.",
    "options": [
      "mind one's language",
      "speak volumes",
      "talk at cross purposes",
      "have a way with words"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "He promised to practise English every day, but _____, so I'll believe it when I see it.",
    "options": [
      "mother-tongue education",
      "actions speak louder than words",
      "full stop",
      "language learner"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Please don't _____, because I never said that your translation was bad.",
    "options": [
      "put words into someone's mouth",
      "break the ice",
      "have a way with words",
      "mind one's language"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Her silence _____ after the argument, so I knew I had to apologise before dinner.",
    "options": [
      "pick up a language",
      "speak the same language",
      "not mince one's words",
      "speak volumes"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "lost for words": {
    "pos": "adj.phr.",
    "en_def": "so surprised or moved that you cannot speak",
    "cn_def": "驚訝得說不出話"
  },
  "in other words": {
    "pos": "phr.",
    "en_def": "used to say something again more simply",
    "cn_def": "換句話說"
  },
  "have a way with words": {
    "pos": "v.phr.",
    "en_def": "to be good at speaking or writing",
    "cn_def": "很會說話；文筆好"
  },
  "not mince one's words": {
    "pos": "v.phr.",
    "en_def": "to speak very directly, even if it is unkind",
    "cn_def": "說話直截了當"
  },
  "have the last word": {
    "pos": "v.phr.",
    "en_def": "to make the final comment in an argument",
    "cn_def": "說最後一句話"
  },
  "word for word": {
    "pos": "adv.",
    "en_def": "in exactly the same words",
    "cn_def": "一字不差地；逐字地"
  },
  "it's all greek to me": {
    "pos": "phr.",
    "en_def": "I cannot understand this at all",
    "cn_def": "我完全看不懂"
  },
  "speak the same language": {
    "pos": "v.phr.",
    "en_def": "to share similar ideas and understand each other",
    "cn_def": "想法一致；有共同語言"
  },
  "the gift of the gab": {
    "pos": "n.phr.",
    "en_def": "the ability to speak easily and persuasively",
    "cn_def": "好口才"
  },
  "tongue-tied": {
    "pos": "adj.",
    "en_def": "unable to speak because you are nervous",
    "cn_def": "緊張得說不出話"
  },
  "a slip of the tongue": {
    "pos": "n.phr.",
    "en_def": "a small mistake when you are speaking",
    "cn_def": "口誤"
  },
  "bite one's tongue": {
    "pos": "v.phr.",
    "en_def": "to stop yourself from saying something",
    "cn_def": "忍住不說"
  },
  "mind one's language": {
    "pos": "v.phr.",
    "en_def": "to be careful not to use rude words",
    "cn_def": "說話注意用詞"
  },
  "pick up a language": {
    "pos": "v.phr.",
    "en_def": "to learn a language naturally without formal study",
    "cn_def": "自然學會一種語言"
  },
  "get by in": {
    "pos": "v.phr.",
    "en_def": "to know just enough of a language to manage",
    "cn_def": "勉強應付（某語言）"
  },
  "break the ice": {
    "pos": "v.phr.",
    "en_def": "to make people feel relaxed when they first meet",
    "cn_def": "打破僵局；破冰"
  },
  "talk at cross purposes": {
    "pos": "v.phr.",
    "en_def": "to misunderstand each other because you mean different things",
    "cn_def": "雞同鴨講"
  },
  "actions speak louder than words": {
    "pos": "phr.",
    "en_def": "what you do matters more than what you say",
    "cn_def": "行動勝於言語"
  },
  "put words into someone's mouth": {
    "pos": "v.phr.",
    "en_def": "to say that someone said something they did not",
    "cn_def": "曲解別人的話；硬說別人說過"
  },
  "speak volumes": {
    "pos": "v.phr.",
    "en_def": "to show something clearly without words",
    "cn_def": "說明一切；意味深長"
  },
  "mother tongue": {
    "pos": "n.phr.",
    "en_def": "the first language you learned as a child",
    "cn_def": "母語"
  },
  "translation app": {
    "pos": "n.phr.",
    "en_def": "a phone program that translates words or speech",
    "cn_def": "翻譯應用程式"
  },
  "global english": {
    "pos": "n.phr.",
    "en_def": "English used around the world as an international language",
    "cn_def": "全球英語"
  },
  "language family": {
    "pos": "n.phr.",
    "en_def": "a group of languages that come from one older language",
    "cn_def": "語系"
  },
  "sight translation": {
    "pos": "n.phr.",
    "en_def": "reading a document in one language aloud in another",
    "cn_def": "視譯"
  },
  "language shift": {
    "pos": "n.phr.",
    "en_def": "when a community stops using one language and uses another",
    "cn_def": "語言轉移"
  },
  "compound word": {
    "pos": "n.phr.",
    "en_def": "a word made from two or more words",
    "cn_def": "複合字"
  },
  "mother-tongue education": {
    "pos": "n.phr.",
    "en_def": "teaching children in their first language",
    "cn_def": "母語教育"
  },
  "language partner": {
    "pos": "n.phr.",
    "en_def": "a person you practise a language with",
    "cn_def": "語伴"
  },
  "language policy": {
    "pos": "n.phr.",
    "en_def": "a government's rules about which languages are used",
    "cn_def": "語言政策"
  },
  "word order": {
    "pos": "n.phr.",
    "en_def": "the order in which words are arranged in a sentence",
    "cn_def": "詞序；字序"
  },
  "last speaker": {
    "pos": "n.phr.",
    "en_def": "the final living person who speaks a language",
    "cn_def": "最後的使用者"
  },
  "ungrammatical": {
    "pos": "adj.",
    "en_def": "not following the rules of grammar",
    "cn_def": "不合文法的"
  },
  "morose": {
    "pos": "adj.",
    "en_def": "unhappy and quiet",
    "cn_def": "悶悶不樂的"
  },
  "wry": {
    "pos": "adj.",
    "en_def": "showing amused but slightly annoyed humour",
    "cn_def": "苦笑的；挖苦的"
  },
  "court interpreter": {
    "pos": "n.phr.",
    "en_def": "an interpreter who works in courtrooms",
    "cn_def": "法庭口譯員"
  },
  "speech translation": {
    "pos": "n.phr.",
    "en_def": "technology that translates spoken language aloud",
    "cn_def": "語音翻譯"
  },
  "language death": {
    "pos": "n.phr.",
    "en_def": "when the last speakers of a language die out",
    "cn_def": "語言消亡"
  },
  "full stop": {
    "pos": "n.phr.",
    "en_def": "the mark ( . ) at the end of a sentence",
    "cn_def": "句號"
  },
  "language learner": {
    "pos": "n.phr.",
    "en_def": "a person who is studying a language",
    "cn_def": "語言學習者"
  }
};

const EXTRA_GLOSSES = {};
