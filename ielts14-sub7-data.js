// Topic 14 Subunit 7 Quiz Data: Communication & Interpersonal Skills 溝通與人際技巧
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S07 - Communication & Interpersonal Skills 溝通與人際技巧",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "interpersonal",
    "pos": "adj.",
    "cn_def": "人際的",
    "en_def": "relating to relationships between people",
    "sentence": "Good {{BLANK}} skills are important for nurses, because they need to comfort worried patients and work closely with doctors.",
    "cn": "良好的人際技巧對護理師很重要，因為他們需要安撫擔心的病人並與醫生密切合作。"
  },
  {
    "word": "verbal",
    "pos": "adj.",
    "cn_def": "口頭的；言語的",
    "en_def": "using spoken words",
    "sentence": "The coach gave us {{BLANK}} instructions during the game, but the crowd was so loud that we could hardly hear him.",
    "cn": "教練在比賽中給了我們口頭指示，但觀眾太吵了，我們幾乎聽不到他說話。"
  },
  {
    "word": "non-verbal",
    "pos": "adj.",
    "cn_def": "非語言的",
    "en_def": "without words, such as through body movements",
    "sentence": "Smiling and nodding are {{BLANK}} signals, and they show the speaker that you are listening carefully.",
    "cn": "微笑和點頭是非語言訊號，它們向說話者表示你正在仔細聆聽。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "手勢；姿態",
    "en_def": "a movement of the hand or head to show meaning",
    "sentence": "A thumbs-up is a friendly {{BLANK}} in Taiwan, but in some countries it can be rude, so travellers should be careful.",
    "cn": "豎起大拇指在台灣是友善的手勢，但在某些國家可能是無禮的，所以旅客應該小心。"
  },
  {
    "word": "eye contact",
    "pos": "n.phr.",
    "cn_def": "眼神接觸",
    "en_def": "looking directly into someone's eyes",
    "sentence": "Try to make {{BLANK}} with the interviewer, because looking at the floor may make you seem nervous or dishonest.",
    "cn": "試著和面試官保持眼神接觸，因為看著地板可能會讓你顯得緊張或不誠實。"
  },
  {
    "word": "tone of voice",
    "pos": "n.phr.",
    "cn_def": "語氣；說話的口氣",
    "en_def": "the way your voice sounds, showing your feelings",
    "sentence": "She said \"fine\", but her {{BLANK}} was cold, so I knew she was still angry with me.",
    "cn": "她說「好啊」，但她的語氣很冷淡，所以我知道她還在生我的氣。"
  },
  {
    "word": "active listening",
    "pos": "n.phr.",
    "cn_def": "主動聆聽；積極傾聽",
    "en_def": "listening carefully and showing that you understand",
    "sentence": "{{BLANK}} means asking questions and repeating key points, so the other person feels that you really care.",
    "cn": "主動聆聽的意思是提出問題並複述重點，讓對方覺得你真的在乎。"
  },
  {
    "word": "small talk",
    "pos": "n.phr.",
    "cn_def": "閒聊；寒暄",
    "en_def": "polite conversation about unimportant things",
    "sentence": "At the party I made {{BLANK}} about the weather, because I did not know anyone and felt a little shy.",
    "cn": "在派對上我聊了些天氣之類的閒聊，因為我誰都不認識，覺得有點害羞。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "對話；談話",
    "en_def": "a talk between two or more people",
    "sentence": "We had a long {{BLANK}} about our future plans, and I realised that my best friend wants to study abroad.",
    "cn": "我們針對未來計畫進行了一段很長的談話，我才發現我最好的朋友想出國留學。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話；交流",
    "en_def": "a discussion between groups to solve a problem",
    "sentence": "The two countries began a {{BLANK}} about the fishing dispute, so many people hoped the conflict would end peacefully.",
    "cn": "兩國就漁業爭端展開對話，所以許多人希望衝突能和平結束。"
  },
  {
    "word": "miscommunication",
    "pos": "n.",
    "cn_def": "溝通不良；誤傳",
    "en_def": "a failure to share information clearly",
    "sentence": "Because of a {{BLANK}} between the teachers, two classes arrived at the gym at the same time, and nobody knew which one should leave.",
    "cn": "由於老師之間的溝通不良，兩個班同時到了體育館，沒有人知道哪一班該離開。"
  },
  {
    "word": "text message",
    "pos": "n.phr.",
    "cn_def": "簡訊；手機訊息",
    "en_def": "a short written message sent by phone",
    "sentence": "I sent my mother a {{BLANK}} to say the bus was late, so she would not worry when I got home after dark.",
    "cn": "我傳了一則簡訊給媽媽說公車誤點，這樣我天黑才到家時她就不會擔心。"
  },
  {
    "word": "voicemail",
    "pos": "n.",
    "cn_def": "語音留言",
    "en_def": "a spoken message left on a phone",
    "sentence": "The doctor did not answer, so I left a {{BLANK}} asking her to call me back when she was free.",
    "cn": "醫生沒有接電話，所以我留了一則語音留言，請她有空時回電給我。"
  },
  {
    "word": "email",
    "pos": "n.",
    "cn_def": "電子郵件",
    "en_def": "a message sent over the internet",
    "sentence": "I wrote a polite {{BLANK}} to my teacher to ask for more time, and she kindly agreed to give me two extra days.",
    "cn": "我寫了一封有禮貌的電子郵件給老師要求延期，她很親切地同意多給我兩天。"
  },
  {
    "word": "pen pal",
    "pos": "n.phr.",
    "cn_def": "筆友",
    "en_def": "a friend in another place you write letters to",
    "sentence": "I have a {{BLANK}} in Canada, and we have been writing to each other for three years, so my English has improved a lot.",
    "cn": "我在加拿大有一位筆友，我們已經互相寫信三年了，所以我的英文進步很多。"
  },
  {
    "word": "video call",
    "pos": "n.phr.",
    "cn_def": "視訊通話",
    "en_def": "a call where people can see each other on screen",
    "sentence": "My grandparents live in the countryside, but we make a {{BLANK}} every Sunday, so they can see how the children are growing.",
    "cn": "我的祖父母住在鄉下，但我們每個星期天都會視訊通話，讓他們看看孩子們長大了多少。"
  },
  {
    "word": "public speaking",
    "pos": "n.phr.",
    "cn_def": "公開演說",
    "en_def": "speaking in front of a large group of people",
    "sentence": "Many students are afraid of {{BLANK}}, but practising in front of a mirror can help them feel more confident.",
    "cn": "許多學生害怕公開演說，但在鏡子前練習能幫助他們更有自信。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講；致詞",
    "en_def": "a formal talk given to an audience",
    "sentence": "The principal gave a short {{BLANK}} at graduation, and several parents cried when she thanked the students' families.",
    "cn": "校長在畢業典禮上發表了簡短的致詞，她感謝學生家庭時，好幾位家長都哭了。"
  },
  {
    "word": "stage fright",
    "pos": "n.phr.",
    "cn_def": "怯場",
    "en_def": "nervousness before performing or speaking in public",
    "sentence": "He had terrible {{BLANK}} before the debate, but after the first minute he relaxed and spoke clearly.",
    "cn": "辯論前他嚴重怯場，但第一分鐘過後他就放鬆下來，說得很清楚。"
  },
  {
    "word": "etiquette",
    "pos": "n.",
    "cn_def": "禮節；禮儀",
    "en_def": "the rules of polite behaviour",
    "sentence": "Business {{BLANK}} is different in every country, so it is a good idea to learn the basics before you travel for work.",
    "cn": "商務禮儀在每個國家都不同，所以出差前先學一些基本知識是個好主意。"
  },
  {
    "word": "netiquette",
    "pos": "n.",
    "cn_def": "網路禮儀",
    "en_def": "rules for polite behaviour on the internet",
    "sentence": "Typing in capital letters is bad {{BLANK}}, because readers feel as if you are shouting at them.",
    "cn": "全用大寫字母打字是不好的網路禮儀，因為讀者會覺得你好像在對他們大吼。"
  },
  {
    "word": "courteous",
    "pos": "adj.",
    "cn_def": "有禮貌的；謙恭的",
    "en_def": "polite and respectful",
    "sentence": "The hotel staff were very {{BLANK}}, so we felt welcome even though our room was not ready yet.",
    "cn": "飯店員工非常有禮貌，所以即使我們的房間還沒準備好，我們仍覺得受到歡迎。"
  },
  {
    "word": "tactful",
    "pos": "adj.",
    "cn_def": "圓融的；得體的",
    "en_def": "careful not to upset people when saying difficult things",
    "sentence": "She was {{BLANK}} when she told me my essay needed work, so I did not feel hurt and was happy to improve it.",
    "cn": "她告訴我作文需要修改時說得很委婉得體，所以我沒有受傷，也很樂意改進。"
  },
  {
    "word": "blunt",
    "pos": "adj.",
    "cn_def": "直率的；說話不客氣的",
    "en_def": "saying exactly what you think, even if it is rude",
    "sentence": "My uncle is very {{BLANK}} and says whatever he thinks, so he sometimes upsets people without meaning to.",
    "cn": "我叔叔說話非常直白，想到什麼就說什麼，所以他有時候會無意間讓人不高興。"
  },
  {
    "word": "talkative",
    "pos": "adj.",
    "cn_def": "健談的；愛說話的",
    "en_def": "liking to talk a lot",
    "sentence": "My little sister is very {{BLANK}} at home, but she becomes quiet and shy when she meets new people.",
    "cn": "我妹妹在家裡很愛說話，但遇到陌生人時就變得安靜又害羞。"
  },
  {
    "word": "slang",
    "pos": "n.",
    "cn_def": "俚語",
    "en_def": "very informal words used by a particular group",
    "sentence": "Teenagers often use {{BLANK}} that their parents do not understand, so family conversations can be confusing.",
    "cn": "青少年常用父母聽不懂的俚語，所以家庭對話可能會讓人摸不著頭緒。"
  },
  {
    "word": "acronym",
    "pos": "n.",
    "cn_def": "首字母縮略字",
    "en_def": "a word made from the first letters of other words",
    "sentence": "\"NASA\" is an {{BLANK}} that people say as one word, and many students do not know what the letters stand for.",
    "cn": "「NASA」是一個人們當作一個字來唸的首字母縮略字，許多學生不知道那些字母代表什麼。"
  }
];

const MCQS = [
  {
    "q": "Good _____ skills are important for nurses, because they need to comfort worried patients and work closely with doctors.",
    "options": [
      "topical",
      "long-winded",
      "interpersonal",
      "suspicious"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The coach gave us _____ instructions during the game, but the crowd was so loud that we could hardly hear him.",
    "options": [
      "verbal",
      "populist",
      "one-sided",
      "pejorative"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Smiling and nodding are _____ signals, and they show the speaker that you are listening carefully.",
    "options": [
      "suspicious",
      "non-verbal",
      "viral",
      "wilful"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "A thumbs-up is a friendly _____ in Taiwan, but in some countries it can be rude, so travellers should be careful.",
    "options": [
      "consumer",
      "polemic",
      "scoop",
      "gesture"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Try to make _____ with the interviewer, because looking at the floor may make you seem nervous or dishonest.",
    "options": [
      "search engine",
      "eye contact",
      "troll farm",
      "breaking news"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "She said \"fine\", but her _____ was cold, so I knew she was still angry with me.",
    "options": [
      "media literacy",
      "sponsored content",
      "mass media",
      "tone of voice"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "_____ means asking questions and repeating key points, so the other person feels that you really care.",
    "options": [
      "active listening",
      "press release",
      "filter bubble",
      "spin doctor"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "At the party I made _____ about the weather, because I did not know anyone and felt a little shy.",
    "options": [
      "news outlet",
      "prime time",
      "small talk",
      "direct message"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "We had a long _____ about our future plans, and I realised that my best friend wants to study abroad.",
    "options": [
      "slur",
      "conversation",
      "advertiser",
      "sarcasm"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The two countries began a _____ about the fishing dispute, so many people hoped the conflict would end peacefully.",
    "options": [
      "dialogue",
      "television",
      "disclaimer",
      "half-truth"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Because of a _____ between the teachers, two classes arrived at the gym at the same time, and nobody knew which one should leave.",
    "options": [
      "audience",
      "influencer",
      "barrage",
      "miscommunication"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "I sent my mother a _____ to say the bus was late, so she would not worry when I got home after dark.",
    "options": [
      "media literacy",
      "commercial break",
      "text message",
      "reverse image search"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The doctor did not answer, so I left a _____ asking her to call me back when she was free.",
    "options": [
      "voicemail",
      "citation",
      "trepidation",
      "hype"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "I wrote a polite _____ to my teacher to ask for more time, and she kindly agreed to give me two extra days.",
    "options": [
      "frenzy",
      "tabloid",
      "furore",
      "email"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "I have a _____ in Canada, and we have been writing to each other for three years, so my English has improved a lot.",
    "options": [
      "press release",
      "pen pal",
      "press freedom",
      "media literacy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "My grandparents live in the countryside, but we make a _____ every Sunday, so they can see how the children are growing.",
    "options": [
      "direct message",
      "echo chamber",
      "video call",
      "breaking news"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Many students are afraid of _____, but practising in front of a mirror can help them feel more confident.",
    "options": [
      "commercial break",
      "soap opera",
      "reverse image search",
      "public speaking"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The principal gave a short _____ at graduation, and several parents cried when she thanked the students' families.",
    "options": [
      "speech",
      "hype",
      "ratings",
      "advertising"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "He had terrible _____ before the debate, but after the first minute he relaxed and spoke clearly.",
    "options": [
      "smear campaign",
      "press release",
      "stage fright",
      "reverse image search"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Business _____ is different in every country, so it is a good idea to learn the basics before you travel for work.",
    "options": [
      "newsroom",
      "etiquette",
      "paywall",
      "audience"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Typing in capital letters is bad _____, because readers feel as if you are shouting at them.",
    "options": [
      "testimony",
      "slogan",
      "netiquette",
      "propaganda"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The hotel staff were very _____, so we felt welcome even though our room was not ready yet.",
    "options": [
      "courteous",
      "ill-informed",
      "topical",
      "inflammatory"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "She was _____ when she told me my essay needed work, so I did not feel hurt and was happy to improve it.",
    "options": [
      "pejorative",
      "tactful",
      "informative",
      "offensive"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "My uncle is very _____ and says whatever he thinks, so he sometimes upsets people without meaning to.",
    "options": [
      "jaded",
      "topical",
      "pretentious",
      "blunt"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "My little sister is very _____ at home, but she becomes quiet and shy when she meets new people.",
    "options": [
      "populist",
      "long-winded",
      "talkative",
      "ludicrous"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Teenagers often use _____ that their parents do not understand, so family conversations can be confusing.",
    "options": [
      "editorial",
      "eyewitness",
      "anonymity",
      "slang"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "\"NASA\" is an _____ that people say as one word, and many students do not know what the letters stand for.",
    "options": [
      "acronym",
      "advertiser",
      "treatise",
      "mistrust"
    ],
    "answer": 0,
    "vocabIndex": 26
  }
];

const LOOKUP = {
  "interpersonal": {
    "pos": "adj.",
    "en_def": "relating to relationships between people",
    "cn_def": "人際的"
  },
  "verbal": {
    "pos": "adj.",
    "en_def": "using spoken words",
    "cn_def": "口頭的；言語的"
  },
  "non-verbal": {
    "pos": "adj.",
    "en_def": "without words, such as through body movements",
    "cn_def": "非語言的"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hand or head to show meaning",
    "cn_def": "手勢；姿態"
  },
  "eye contact": {
    "pos": "n.phr.",
    "en_def": "looking directly into someone's eyes",
    "cn_def": "眼神接觸"
  },
  "tone of voice": {
    "pos": "n.phr.",
    "en_def": "the way your voice sounds, showing your feelings",
    "cn_def": "語氣；說話的口氣"
  },
  "active listening": {
    "pos": "n.phr.",
    "en_def": "listening carefully and showing that you understand",
    "cn_def": "主動聆聽；積極傾聽"
  },
  "small talk": {
    "pos": "n.phr.",
    "en_def": "polite conversation about unimportant things",
    "cn_def": "閒聊；寒暄"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話；談話"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a discussion between groups to solve a problem",
    "cn_def": "對話；交流"
  },
  "miscommunication": {
    "pos": "n.",
    "en_def": "a failure to share information clearly",
    "cn_def": "溝通不良；誤傳"
  },
  "text message": {
    "pos": "n.phr.",
    "en_def": "a short written message sent by phone",
    "cn_def": "簡訊；手機訊息"
  },
  "voicemail": {
    "pos": "n.",
    "en_def": "a spoken message left on a phone",
    "cn_def": "語音留言"
  },
  "email": {
    "pos": "n.",
    "en_def": "a message sent over the internet",
    "cn_def": "電子郵件"
  },
  "pen pal": {
    "pos": "n.phr.",
    "en_def": "a friend in another place you write letters to",
    "cn_def": "筆友"
  },
  "video call": {
    "pos": "n.phr.",
    "en_def": "a call where people can see each other on screen",
    "cn_def": "視訊通話"
  },
  "public speaking": {
    "pos": "n.phr.",
    "en_def": "speaking in front of a large group of people",
    "cn_def": "公開演說"
  },
  "speech": {
    "pos": "n.",
    "en_def": "a formal talk given to an audience",
    "cn_def": "演講；致詞"
  },
  "stage fright": {
    "pos": "n.phr.",
    "en_def": "nervousness before performing or speaking in public",
    "cn_def": "怯場"
  },
  "etiquette": {
    "pos": "n.",
    "en_def": "the rules of polite behaviour",
    "cn_def": "禮節；禮儀"
  },
  "netiquette": {
    "pos": "n.",
    "en_def": "rules for polite behaviour on the internet",
    "cn_def": "網路禮儀"
  },
  "courteous": {
    "pos": "adj.",
    "en_def": "polite and respectful",
    "cn_def": "有禮貌的；謙恭的"
  },
  "tactful": {
    "pos": "adj.",
    "en_def": "careful not to upset people when saying difficult things",
    "cn_def": "圓融的；得體的"
  },
  "blunt": {
    "pos": "adj.",
    "en_def": "saying exactly what you think, even if it is rude",
    "cn_def": "直率的；說話不客氣的"
  },
  "talkative": {
    "pos": "adj.",
    "en_def": "liking to talk a lot",
    "cn_def": "健談的；愛說話的"
  },
  "slang": {
    "pos": "n.",
    "en_def": "very informal words used by a particular group",
    "cn_def": "俚語"
  },
  "acronym": {
    "pos": "n.",
    "en_def": "a word made from the first letters of other words",
    "cn_def": "首字母縮略字"
  },
  "topical": {
    "pos": "adj.",
    "en_def": "relating to things happening now",
    "cn_def": "時事性的；熱門話題的"
  },
  "long-winded": {
    "pos": "adj.",
    "en_def": "too long and boring",
    "cn_def": "冗長的；囉嗦的"
  },
  "suspicious": {
    "pos": "adj.",
    "en_def": "making you think something is wrong",
    "cn_def": "可疑的；令人懷疑的"
  },
  "populist": {
    "pos": "adj.",
    "en_def": "claiming to support ordinary people against the elite",
    "cn_def": "民粹主義的"
  },
  "one-sided": {
    "pos": "adj.",
    "en_def": "showing only one point of view",
    "cn_def": "片面的；一面倒的"
  },
  "pejorative": {
    "pos": "adj.",
    "en_def": "expressing disapproval or a low opinion",
    "cn_def": "貶義的"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spread very quickly to many people online",
    "cn_def": "爆紅的；病毒式傳播的"
  },
  "wilful": {
    "pos": "adj.",
    "en_def": "done on purpose, knowing it is wrong",
    "cn_def": "蓄意的；故意的"
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "消費者"
  },
  "polemic": {
    "pos": "n.",
    "en_def": "a strong written or spoken attack on an idea",
    "cn_def": "論戰文章；猛烈抨擊"
  },
  "scoop": {
    "pos": "n.",
    "en_def": "an important story one newspaper reports first",
    "cn_def": "獨家新聞"
  },
  "search engine": {
    "pos": "n.phr.",
    "en_def": "a website that helps you find information online",
    "cn_def": "搜尋引擎"
  },
  "troll farm": {
    "pos": "n.phr.",
    "en_def": "a group paid to post false or angry comments online",
    "cn_def": "網軍工廠"
  },
  "breaking news": {
    "pos": "n.phr.",
    "en_def": "news about something that is happening right now",
    "cn_def": "即時新聞；快訊"
  },
  "media literacy": {
    "pos": "n.phr.",
    "en_def": "the ability to judge and understand news and media",
    "cn_def": "媒體素養"
  },
  "sponsored content": {
    "pos": "n.phr.",
    "en_def": "material paid for by a company but made to look like normal posts",
    "cn_def": "業配內容；贊助內容"
  },
  "mass media": {
    "pos": "n.phr.",
    "en_def": "TV, radio and newspapers that reach large numbers of people",
    "cn_def": "大眾傳播媒體"
  },
  "press release": {
    "pos": "n.phr.",
    "en_def": "an official statement given to journalists",
    "cn_def": "新聞稿"
  },
  "filter bubble": {
    "pos": "n.phr.",
    "en_def": "when apps only show you content they think you like",
    "cn_def": "過濾氣泡"
  },
  "spin doctor": {
    "pos": "n.phr.",
    "en_def": "a person paid to make news look good for a politician",
    "cn_def": "公關操盤手；政治化妝師"
  },
  "news outlet": {
    "pos": "n.phr.",
    "en_def": "a company or website that publishes news",
    "cn_def": "新聞媒體；新聞管道"
  },
  "prime time": {
    "pos": "n.phr.",
    "en_def": "the evening hours when most people watch TV",
    "cn_def": "黃金時段"
  },
  "direct message": {
    "pos": "n.phr.",
    "en_def": "a private message sent on social media",
    "cn_def": "私訊"
  },
  "slur": {
    "pos": "n.",
    "en_def": "an insulting remark about someone",
    "cn_def": "誹謗；侮辱性言語"
  },
  "advertiser": {
    "pos": "n.",
    "en_def": "a company that pays for adverts",
    "cn_def": "廣告主；廣告商"
  },
  "sarcasm": {
    "pos": "n.",
    "en_def": "saying the opposite of what you mean to mock someone",
    "cn_def": "諷刺；挖苦"
  },
  "television": {
    "pos": "n.",
    "en_def": "a system or machine for watching programmes",
    "cn_def": "電視"
  },
  "disclaimer": {
    "pos": "n.",
    "en_def": "a statement saying you are not responsible for something",
    "cn_def": "免責聲明"
  },
  "half-truth": {
    "pos": "n.",
    "en_def": "a statement that is partly true but hides important facts",
    "cn_def": "半真半假的話"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch, read or listen to something",
    "cn_def": "觀眾；聽眾；受眾"
  },
  "influencer": {
    "pos": "n.",
    "en_def": "a person with many online followers who affects what they buy",
    "cn_def": "網紅；意見領袖"
  },
  "barrage": {
    "pos": "n.",
    "en_def": "a large number of things coming at once",
    "cn_def": "接二連三的一大堆；連珠砲"
  },
  "commercial break": {
    "pos": "n.phr.",
    "en_def": "a pause in a programme for adverts",
    "cn_def": "廣告時間；進廣告"
  },
  "reverse image search": {
    "pos": "n.phr.",
    "en_def": "a search that finds where a picture first appeared",
    "cn_def": "以圖搜圖；反向圖片搜尋"
  },
  "citation": {
    "pos": "n.",
    "en_def": "a note showing where information came from",
    "cn_def": "引用；出處"
  },
  "trepidation": {
    "pos": "n.",
    "en_def": "a feeling of fear about something that may happen",
    "cn_def": "惶恐；憂慮"
  },
  "hype": {
    "pos": "n.",
    "en_def": "exaggerated excitement and advertising about something",
    "cn_def": "炒作；大肆宣傳"
  },
  "frenzy": {
    "pos": "n.",
    "en_def": "a state of wild excitement",
    "cn_def": "狂熱；瘋狂"
  },
  "tabloid": {
    "pos": "n.",
    "en_def": "a popular newspaper with short, exciting stories about famous people",
    "cn_def": "小報；八卦報"
  },
  "furore": {
    "pos": "n.",
    "en_def": "a sudden expression of public anger",
    "cn_def": "騷動；公憤"
  },
  "press freedom": {
    "pos": "n.phr.",
    "en_def": "the right of the media to report without government control",
    "cn_def": "新聞自由"
  },
  "echo chamber": {
    "pos": "n.phr.",
    "en_def": "an online space where you only hear opinions like your own",
    "cn_def": "同溫層；回音室"
  },
  "soap opera": {
    "pos": "n.phr.",
    "en_def": "a long-running drama series about people's lives",
    "cn_def": "肥皂劇；連續劇"
  },
  "ratings": {
    "pos": "n.",
    "en_def": "numbers showing how many people watch a programme",
    "cn_def": "收視率"
  },
  "advertising": {
    "pos": "n.",
    "en_def": "the business of telling people about products to sell them",
    "cn_def": "廣告業；廣告宣傳"
  },
  "smear campaign": {
    "pos": "n.phr.",
    "en_def": "an organised effort to damage someone's reputation with lies",
    "cn_def": "抹黑行動"
  },
  "newsroom": {
    "pos": "n.",
    "en_def": "the office where journalists prepare the news",
    "cn_def": "新聞編輯室"
  },
  "paywall": {
    "pos": "n.",
    "en_def": "a system that makes you pay to read online articles",
    "cn_def": "付費牆"
  },
  "testimony": {
    "pos": "n.",
    "en_def": "a formal statement about what someone saw or knows",
    "cn_def": "證詞"
  },
  "slogan": {
    "pos": "n.",
    "en_def": "a short, catchy phrase used in advertising",
    "cn_def": "標語；口號"
  },
  "propaganda": {
    "pos": "n.",
    "en_def": "information used by a government or group to control opinions",
    "cn_def": "政治宣傳"
  },
  "ill-informed": {
    "pos": "adj.",
    "en_def": "having wrong or too little information",
    "cn_def": "消息不靈通的；無知的"
  },
  "inflammatory": {
    "pos": "adj.",
    "en_def": "likely to make people angry or violent",
    "cn_def": "煽動性的；激起憤怒的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving useful information",
    "cn_def": "有益的；資訊豐富的"
  },
  "offensive": {
    "pos": "adj.",
    "en_def": "rude in a way that upsets people",
    "cn_def": "冒犯的；無禮的"
  },
  "jaded": {
    "pos": "adj.",
    "en_def": "bored or tired because you have seen too much of something",
    "cn_def": "厭倦的；麻木的"
  },
  "pretentious": {
    "pos": "adj.",
    "en_def": "trying to seem more important or clever than you are",
    "cn_def": "自命不凡的；做作的"
  },
  "ludicrous": {
    "pos": "adj.",
    "en_def": "so silly that it makes people laugh",
    "cn_def": "荒唐可笑的"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "a newspaper article giving the paper's opinion",
    "cn_def": "社論"
  },
  "eyewitness": {
    "pos": "n.",
    "en_def": "a person who saw an event happen",
    "cn_def": "目擊者"
  },
  "anonymity": {
    "pos": "n.",
    "en_def": "the state of hiding your real name",
    "cn_def": "匿名（性）"
  },
  "treatise": {
    "pos": "n.",
    "en_def": "a long, serious piece of writing on a subject",
    "cn_def": "專著；論文"
  },
  "mistrust": {
    "pos": "n.",
    "en_def": "a feeling that you cannot believe someone",
    "cn_def": "不信任；猜疑"
  }
};

const EXTRA_GLOSSES = {};
