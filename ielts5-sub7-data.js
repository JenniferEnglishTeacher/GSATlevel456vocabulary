// Topic 5 Subunit 7 Quiz Data: Personality & Social Behaviour 人格與社會行為
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S07 - Personality & Social Behaviour 人格與社會行為",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "personality",
    "pos": "n.",
    "cn_def": "個性;人格",
    "en_def": "the type of person you are, shown by how you behave",
    "sentence": "Jenny has a warm {{BLANK}}, so new students always feel welcome when they sit next to her.",
    "cn": "珍妮有溫暖的個性,所以新同學坐在她旁邊總是覺得很受歡迎。"
  },
  {
    "word": "trait",
    "pos": "n.",
    "cn_def": "特質;特徵",
    "en_def": "a quality that is part of someone's character",
    "sentence": "Patience is an important {{BLANK}} for teachers, because students in the same class often learn at very different speeds.",
    "cn": "耐心是老師重要的特質,因為同一班的學生學習速度常常差很多。"
  },
  {
    "word": "introvert",
    "pos": "n.",
    "cn_def": "內向的人",
    "en_def": "a quiet person who gets energy from being alone",
    "sentence": "As an {{BLANK}}, Ryan enjoys reading alone after school, but he still likes spending time with a few close friends.",
    "cn": "身為內向的人,萊恩喜歡放學後獨自閱讀,但他還是喜歡和幾個好朋友相處。"
  },
  {
    "word": "extrovert",
    "pos": "n.",
    "cn_def": "外向的人",
    "en_def": "a lively person who gets energy from being with others",
    "sentence": "My best friend is a true {{BLANK}}, and she feels tired if she has to stay home alone all weekend.",
    "cn": "我最好的朋友是個真正的外向的人,如果整個週末都得獨自待在家,她會覺得很累。"
  },
  {
    "word": "outgoing",
    "pos": "adj.",
    "cn_def": "外向的;友善的",
    "en_def": "friendly and liking to meet people",
    "sentence": "Linda is {{BLANK}} and talks to everyone at parties, while her twin brother prefers to listen quietly.",
    "cn": "琳達很外向,在派對上和每個人聊天,而她的雙胞胎哥哥則比較喜歡安靜地聽。"
  },
  {
    "word": "shy",
    "pos": "adj.",
    "cn_def": "害羞的",
    "en_def": "nervous about talking to people you don't know",
    "sentence": "Tom was too {{BLANK}} to ask the teacher for help, so he stayed confused about the maths problem for days.",
    "cn": "湯姆太害羞了,不敢向老師求助,所以好幾天都對那道數學題感到困惑。"
  },
  {
    "word": "sociable",
    "pos": "adj.",
    "cn_def": "好交際的",
    "en_def": "enjoying spending time with other people",
    "sentence": "Dogs are very {{BLANK}} animals, and they often feel lonely if their owners leave them alone all day.",
    "cn": "狗是非常喜歡與人相處的動物,如果主人整天把牠們單獨留下,牠們常會感到寂寞。"
  },
  {
    "word": "empathy",
    "pos": "n.",
    "cn_def": "同理心",
    "en_def": "the ability to understand how others feel",
    "sentence": "Good doctors show {{BLANK}} to their patients, because sick people need kindness as well as medicine.",
    "cn": "好醫生會對病人展現同理心,因為生病的人除了藥物也需要關懷。"
  },
  {
    "word": "sympathy",
    "pos": "n.",
    "cn_def": "同情",
    "en_def": "feeling sorry for someone who is in trouble",
    "sentence": "We sent a card to show our {{BLANK}} when our teacher's father passed away, and she thanked the whole class.",
    "cn": "老師的父親過世時,我們寄了一張卡片表達同情與慰問,她向全班道謝。"
  },
  {
    "word": "compassion",
    "pos": "n.",
    "cn_def": "憐憫;同情心",
    "en_def": "a strong wish to help people who are suffering",
    "sentence": "The volunteers treated the homeless with {{BLANK}}, and they listened to their stories as well as giving them food.",
    "cn": "志工們以慈悲心對待無家可歸的人,除了提供食物也聆聽他們的故事。"
  },
  {
    "word": "altruism",
    "pos": "n.",
    "cn_def": "利他主義;無私",
    "en_def": "caring about others more than yourself",
    "sentence": "Donating blood is a simple act of {{BLANK}}, because you help a stranger and expect nothing in return.",
    "cn": "捐血是一種簡單的無私行為,因為你幫助陌生人而不期待任何回報。"
  },
  {
    "word": "selfish",
    "pos": "adj.",
    "cn_def": "自私的",
    "en_def": "caring only about yourself",
    "sentence": "It was {{BLANK}} of him to eat all the snacks, and his roommates were angry because they had paid for them too.",
    "cn": "他把所有零食都吃光很自私,他的室友們很生氣,因為他們也有出錢。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的",
    "en_def": "happy to give time, money or help to others",
    "sentence": "Our neighbour is very {{BLANK}}, and she often shares the vegetables from her garden with the whole street.",
    "cn": "我們的鄰居非常慷慨,她常把自家菜園的蔬菜分享給整條街的人。"
  },
  {
    "word": "stubborn",
    "pos": "adj.",
    "cn_def": "固執的",
    "en_def": "not willing to change your mind",
    "sentence": "My grandfather is {{BLANK}} about using his old phone, although we have bought him a new one twice.",
    "cn": "我爺爺很固執地要用他的舊手機,雖然我們已經買了兩次新手機給他。"
  },
  {
    "word": "impatient",
    "pos": "adj.",
    "cn_def": "不耐煩的;沒耐心的",
    "en_def": "unable to wait calmly",
    "sentence": "People become {{BLANK}} when the internet is slow, and some of them close the website after only a few seconds.",
    "cn": "網路很慢時人們會變得不耐煩,有些人只等幾秒鐘就關掉網站。"
  },
  {
    "word": "ego",
    "pos": "n.",
    "cn_def": "自我;自尊心",
    "en_def": "your sense of your own importance",
    "sentence": "Losing the final hurt his {{BLANK}}, but he learned to accept defeat and train harder for next year.",
    "cn": "輸掉決賽傷了他的自尊心,但他學會接受失敗並為明年更努力訓練。"
  },
  {
    "word": "self-worth",
    "pos": "n.",
    "cn_def": "自我價值",
    "en_def": "the feeling that you are a valuable person",
    "sentence": "Your {{BLANK}} should not depend on your test scores, because you have many other strengths as a person.",
    "cn": "你的自我價值不應該取決於考試分數,因為身為一個人你還有許多其他優點。"
  },
  {
    "word": "insecure",
    "pos": "adj.",
    "cn_def": "沒有安全感的;不自信的",
    "en_def": "not confident about yourself",
    "sentence": "Social media can make teenagers feel {{BLANK}} about their looks, so it is wise to limit screen time.",
    "cn": "社群媒體會讓青少年對自己的外表感到不自信,所以限制使用螢幕的時間是明智的。"
  },
  {
    "word": "bystander",
    "pos": "n.",
    "cn_def": "旁觀者",
    "en_def": "a person who sees something happen but is not involved",
    "sentence": "One {{BLANK}} called an ambulance after the accident, while others just stood and took photos with their phones.",
    "cn": "事故發生後有一位旁觀者叫了救護車,而其他人只是站著用手機拍照。"
  },
  {
    "word": "obedience",
    "pos": "n.",
    "cn_def": "服從",
    "en_def": "doing what you are told to do",
    "sentence": "The dog trainer taught basic {{BLANK}} to the puppies, and soon they could sit and wait on command.",
    "cn": "訓犬師教小狗們基本的服從訓練,很快牠們就能聽口令坐下和等待。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服",
    "en_def": "to make someone agree to do something by giving reasons",
    "sentence": "I tried to {{BLANK}} my parents to let me join the school trip, and I promised to finish my homework first.",
    "cn": "我試著說服爸媽讓我參加校外旅行,並答應會先完成作業。"
  },
  {
    "word": "assertive",
    "pos": "adj.",
    "cn_def": "有主見的;果斷自信的",
    "en_def": "expressing your opinions clearly and confidently",
    "sentence": "Being {{BLANK}} in group work is useful, but you should also listen carefully to your classmates' ideas.",
    "cn": "在小組作業中有主見很有用,但你也應該仔細聆聽同學的想法。"
  },
  {
    "word": "aggressive",
    "pos": "adj.",
    "cn_def": "有攻擊性的;具侵略性的",
    "en_def": "behaving in an angry or violent way",
    "sentence": "Some players become {{BLANK}} when they are losing, so the referee has to stop the game and calm them down.",
    "cn": "有些球員輸球時會變得具攻擊性,所以裁判必須暫停比賽讓他們冷靜下來。"
  },
  {
    "word": "reserved",
    "pos": "adj.",
    "cn_def": "拘謹的;含蓄的",
    "en_def": "not showing your feelings or opinions easily",
    "sentence": "My new classmate seemed {{BLANK}} at first, but after a few weeks she became one of the funniest people in our class.",
    "cn": "我的新同學一開始看起來很拘謹,但幾週後她成了我們班最有趣的人之一。"
  },
  {
    "word": "easy-going",
    "pos": "adj.",
    "cn_def": "隨和的",
    "en_def": "relaxed and not easily worried or annoyed",
    "sentence": "Our homeroom teacher is very {{BLANK}}, so students feel comfortable telling her about their problems.",
    "cn": "我們的導師非常隨和,所以學生們很自在地跟她說自己的問題。"
  }
];

const MCQS = [
  {
    "q": "Jenny has a warm _____, so new students always feel welcome when they sit next to her.",
    "options": [
      "enthusiasm",
      "dichotomy",
      "personality",
      "achievement"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Patience is an important _____ for teachers, because students in the same class often learn at very different speeds.",
    "options": [
      "foresight",
      "phobia",
      "stamina",
      "trait"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "As an _____, Ryan enjoys reading alone after school, but he still likes spending time with a few close friends.",
    "options": [
      "introvert",
      "inspiration",
      "propensity",
      "stomachache"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "My best friend is a true _____, and she feels tired if she has to stay home alone all weekend.",
    "options": [
      "therapy",
      "extrovert",
      "perfectionist",
      "stamina"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Linda is _____ and talks to everyone at parties, while her twin brother prefers to listen quietly.",
    "options": [
      "pessimistic",
      "gloomy",
      "sensible",
      "outgoing"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Tom was too _____ to ask the teacher for help, so he stayed confused about the maths problem for days.",
    "options": [
      "mediocre",
      "self-motivated",
      "shy",
      "receptive"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Dogs are very _____ animals, and they often feel lonely if their owners leave them alone all day.",
    "options": [
      "inquisitive",
      "sociable",
      "fervent",
      "reminiscent"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Good doctors show _____ to their patients, because sick people need kindness as well as medicine.",
    "options": [
      "empathy",
      "conviction",
      "self-care",
      "dichotomy"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "We sent a card to show our _____ when our teacher's father passed away, and she thanked the whole class.",
    "options": [
      "relaxation",
      "sympathy",
      "satisfaction",
      "counsellor"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The volunteers treated the homeless with _____, and they listened to their stories as well as giving them food.",
    "options": [
      "grit",
      "conviction",
      "exhaustion",
      "compassion"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Donating blood is a simple act of _____, because you help a stranger and expect nothing in return.",
    "options": [
      "altruism",
      "ambition",
      "conformity",
      "outlook"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "It was _____ of him to eat all the snacks, and his roommates were angry because they had paid for them too.",
    "options": [
      "eager",
      "incessant",
      "selfish",
      "mediocre"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Our neighbour is very _____, and she often shares the vegetables from her garden with the whole street.",
    "options": [
      "pessimistic",
      "weary",
      "unequivocal",
      "generous"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "My grandfather is _____ about using his old phone, although we have bought him a new one twice.",
    "options": [
      "inadvertent",
      "conscious",
      "stubborn",
      "ingrained"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "People become _____ when the internet is slow, and some of them close the website after only a few seconds.",
    "options": [
      "impatient",
      "unpredictable",
      "unequivocal",
      "palpable"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Losing the final hurt his _____, but he learned to accept defeat and train harder for next year.",
    "options": [
      "ambition",
      "ego",
      "vitality",
      "hobby"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Your _____ should not depend on your test scores, because you have many other strengths as a person.",
    "options": [
      "self-worth",
      "propensity",
      "cohesion",
      "therapy"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Social media can make teenagers feel _____ about their looks, so it is wise to limit screen time.",
    "options": [
      "logical",
      "gloomy",
      "insatiable",
      "insecure"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "One _____ called an ambulance after the accident, while others just stood and took photos with their phones.",
    "options": [
      "cohesion",
      "self-discipline",
      "bystander",
      "restraint"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The dog trainer taught basic _____ to the puppies, and soon they could sit and wait on command.",
    "options": [
      "perfectionism",
      "obedience",
      "positivity",
      "groupthink"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "I tried to _____ my parents to let me join the school trip, and I promised to finish my homework first.",
    "options": [
      "overwork",
      "ascertain",
      "repress",
      "persuade"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Being _____ in group work is useful, but you should also listen carefully to your classmates' ideas.",
    "options": [
      "devoid",
      "assertive",
      "self-motivated",
      "irrevocable"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Some players become _____ when they are losing, so the referee has to stop the game and calm them down.",
    "options": [
      "aggressive",
      "dependable",
      "inclined",
      "sleepless"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "My new classmate seemed _____ at first, but after a few weeks she became one of the funniest people in our class.",
    "options": [
      "devoid",
      "conscious",
      "reserved",
      "mundane"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Our homeroom teacher is very _____, so students feel comfortable telling her about their problems.",
    "options": [
      "competitive",
      "accustomed",
      "remedial",
      "easy-going"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "personality": {
    "pos": "n.",
    "en_def": "the type of person you are, shown by how you behave",
    "cn_def": "個性;人格"
  },
  "trait": {
    "pos": "n.",
    "en_def": "a quality that is part of someone's character",
    "cn_def": "特質;特徵"
  },
  "introvert": {
    "pos": "n.",
    "en_def": "a quiet person who gets energy from being alone",
    "cn_def": "內向的人"
  },
  "extrovert": {
    "pos": "n.",
    "en_def": "a lively person who gets energy from being with others",
    "cn_def": "外向的人"
  },
  "outgoing": {
    "pos": "adj.",
    "en_def": "friendly and liking to meet people",
    "cn_def": "外向的;友善的"
  },
  "shy": {
    "pos": "adj.",
    "en_def": "nervous about talking to people you don't know",
    "cn_def": "害羞的"
  },
  "sociable": {
    "pos": "adj.",
    "en_def": "enjoying spending time with other people",
    "cn_def": "好交際的"
  },
  "empathy": {
    "pos": "n.",
    "en_def": "the ability to understand how others feel",
    "cn_def": "同理心"
  },
  "sympathy": {
    "pos": "n.",
    "en_def": "feeling sorry for someone who is in trouble",
    "cn_def": "同情"
  },
  "compassion": {
    "pos": "n.",
    "en_def": "a strong wish to help people who are suffering",
    "cn_def": "憐憫;同情心"
  },
  "altruism": {
    "pos": "n.",
    "en_def": "caring about others more than yourself",
    "cn_def": "利他主義;無私"
  },
  "selfish": {
    "pos": "adj.",
    "en_def": "caring only about yourself",
    "cn_def": "自私的"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "happy to give time, money or help to others",
    "cn_def": "慷慨的"
  },
  "stubborn": {
    "pos": "adj.",
    "en_def": "not willing to change your mind",
    "cn_def": "固執的"
  },
  "impatient": {
    "pos": "adj.",
    "en_def": "unable to wait calmly",
    "cn_def": "不耐煩的;沒耐心的"
  },
  "ego": {
    "pos": "n.",
    "en_def": "your sense of your own importance",
    "cn_def": "自我;自尊心"
  },
  "self-worth": {
    "pos": "n.",
    "en_def": "the feeling that you are a valuable person",
    "cn_def": "自我價值"
  },
  "insecure": {
    "pos": "adj.",
    "en_def": "not confident about yourself",
    "cn_def": "沒有安全感的;不自信的"
  },
  "bystander": {
    "pos": "n.",
    "en_def": "a person who sees something happen but is not involved",
    "cn_def": "旁觀者"
  },
  "obedience": {
    "pos": "n.",
    "en_def": "doing what you are told to do",
    "cn_def": "服從"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服"
  },
  "assertive": {
    "pos": "adj.",
    "en_def": "expressing your opinions clearly and confidently",
    "cn_def": "有主見的;果斷自信的"
  },
  "aggressive": {
    "pos": "adj.",
    "en_def": "behaving in an angry or violent way",
    "cn_def": "有攻擊性的;具侵略性的"
  },
  "reserved": {
    "pos": "adj.",
    "en_def": "not showing your feelings or opinions easily",
    "cn_def": "拘謹的;含蓄的"
  },
  "easy-going": {
    "pos": "adj.",
    "en_def": "relaxed and not easily worried or annoyed",
    "cn_def": "隨和的"
  },
  "enthusiasm": {
    "pos": "n.",
    "en_def": "a feeling of being very excited and interested",
    "cn_def": "熱忱;熱衷"
  },
  "dichotomy": {
    "pos": "n.",
    "en_def": "a division between two opposite things",
    "cn_def": "二分法;對立"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good you have done through hard work",
    "cn_def": "成就"
  },
  "foresight": {
    "pos": "n.",
    "en_def": "the ability to plan for what will happen in the future",
    "cn_def": "先見之明;遠見"
  },
  "phobia": {
    "pos": "n.",
    "en_def": "a very strong fear of something",
    "cn_def": "恐懼症"
  },
  "stamina": {
    "pos": "n.",
    "en_def": "the energy to keep doing something for a long time",
    "cn_def": "耐力;精力"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or makes you want to do something",
    "cn_def": "靈感;鼓舞"
  },
  "propensity": {
    "pos": "n.",
    "en_def": "a natural tendency to behave in a certain way",
    "cn_def": "傾向;習性"
  },
  "stomachache": {
    "pos": "n.",
    "en_def": "a pain in your stomach",
    "cn_def": "胃痛;肚子痛"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment that helps someone feel better",
    "cn_def": "治療"
  },
  "perfectionist": {
    "pos": "n.",
    "en_def": "a person who wants everything to be perfect",
    "cn_def": "完美主義者"
  },
  "pessimistic": {
    "pos": "adj.",
    "en_def": "expecting things to go badly",
    "cn_def": "悲觀的"
  },
  "gloomy": {
    "pos": "adj.",
    "en_def": "sad and without hope",
    "cn_def": "憂鬱的;陰沉的"
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "reasonable and practical",
    "cn_def": "明智的;合理的"
  },
  "mediocre": {
    "pos": "adj.",
    "en_def": "not very good; only average",
    "cn_def": "平庸的;普通的"
  },
  "self-motivated": {
    "pos": "adj.",
    "en_def": "able to work hard without others pushing you",
    "cn_def": "自動自發的"
  },
  "receptive": {
    "pos": "adj.",
    "en_def": "willing to listen to new ideas",
    "cn_def": "樂於接受的"
  },
  "inquisitive": {
    "pos": "adj.",
    "en_def": "wanting to learn and ask questions",
    "cn_def": "好奇的;好問的"
  },
  "fervent": {
    "pos": "adj.",
    "en_def": "having very strong feelings about something",
    "cn_def": "熱烈的;熱切的"
  },
  "reminiscent": {
    "pos": "adj.",
    "en_def": "making you think of something in the past",
    "cn_def": "使人聯想起……的"
  },
  "conviction": {
    "pos": "n.",
    "en_def": "a strong belief",
    "cn_def": "堅定的信念;確信"
  },
  "self-care": {
    "pos": "n.",
    "en_def": "things you do to protect your own health and happiness",
    "cn_def": "自我照顧"
  },
  "relaxation": {
    "pos": "n.",
    "en_def": "the act of resting and becoming calm",
    "cn_def": "放鬆"
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "a pleased feeling after you do or get what you wanted",
    "cn_def": "滿意;滿足感"
  },
  "counsellor": {
    "pos": "n.",
    "en_def": "a person trained to listen and give advice about problems",
    "cn_def": "輔導員;諮商師"
  },
  "grit": {
    "pos": "n.",
    "en_def": "courage and the will to keep going",
    "cn_def": "毅力;堅韌"
  },
  "exhaustion": {
    "pos": "n.",
    "en_def": "the state of being extremely tired",
    "cn_def": "筋疲力盡"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to be successful",
    "cn_def": "抱負;雄心"
  },
  "conformity": {
    "pos": "n.",
    "en_def": "behaving the same way as most people in a group",
    "cn_def": "從眾;順從"
  },
  "outlook": {
    "pos": "n.",
    "en_def": "a person's general attitude to life",
    "cn_def": "觀點;人生觀"
  },
  "eager": {
    "pos": "adj.",
    "en_def": "wanting to do something very much",
    "cn_def": "渴望的;熱切的"
  },
  "incessant": {
    "pos": "adj.",
    "en_def": "never stopping",
    "cn_def": "不停的;持續不斷的"
  },
  "weary": {
    "pos": "adj.",
    "en_def": "very tired",
    "cn_def": "疲倦的;厭倦的"
  },
  "unequivocal": {
    "pos": "adj.",
    "en_def": "completely clear, with no doubt",
    "cn_def": "明確的;毫不含糊的"
  },
  "inadvertent": {
    "pos": "adj.",
    "en_def": "done without meaning to",
    "cn_def": "無心的;不經意的"
  },
  "conscious": {
    "pos": "adj.",
    "en_def": "aware of something",
    "cn_def": "意識到的;察覺的"
  },
  "ingrained": {
    "pos": "adj.",
    "en_def": "so fixed that it is hard to change",
    "cn_def": "根深蒂固的"
  },
  "unpredictable": {
    "pos": "adj.",
    "en_def": "changing in a way that is hard to guess",
    "cn_def": "難以預測的"
  },
  "palpable": {
    "pos": "adj.",
    "en_def": "so strong that it can almost be felt",
    "cn_def": "明顯的;可感覺到的"
  },
  "vitality": {
    "pos": "n.",
    "en_def": "energy and liveliness",
    "cn_def": "活力"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you enjoy in your free time",
    "cn_def": "嗜好"
  },
  "cohesion": {
    "pos": "n.",
    "en_def": "the state of a group being united",
    "cn_def": "凝聚力"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "following clear and sensible thinking",
    "cn_def": "合乎邏輯的"
  },
  "insatiable": {
    "pos": "adj.",
    "en_def": "always wanting more",
    "cn_def": "無法滿足的"
  },
  "self-discipline": {
    "pos": "n.",
    "en_def": "the ability to make yourself do things you should do",
    "cn_def": "自律"
  },
  "restraint": {
    "pos": "n.",
    "en_def": "calm control over your feelings or actions",
    "cn_def": "克制;自制"
  },
  "perfectionism": {
    "pos": "n.",
    "en_def": "the need to make everything perfect",
    "cn_def": "完美主義"
  },
  "positivity": {
    "pos": "n.",
    "en_def": "a hopeful and cheerful attitude",
    "cn_def": "正面態度;正能量"
  },
  "groupthink": {
    "pos": "n.",
    "en_def": "when a group agrees too quickly and ignores other ideas",
    "cn_def": "團體迷思"
  },
  "overwork": {
    "pos": "v.",
    "en_def": "to work too hard or too long",
    "cn_def": "過度工作"
  },
  "ascertain": {
    "pos": "v.",
    "en_def": "to find out the truth about something",
    "cn_def": "查明;確定"
  },
  "repress": {
    "pos": "v.",
    "en_def": "to stop yourself from showing a feeling",
    "cn_def": "壓抑"
  },
  "devoid": {
    "pos": "adj.",
    "en_def": "completely without something",
    "cn_def": "完全沒有的"
  },
  "irrevocable": {
    "pos": "adj.",
    "en_def": "impossible to change or undo",
    "cn_def": "不可撤銷的;無法挽回的"
  },
  "dependable": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "可靠的"
  },
  "inclined": {
    "pos": "adj.",
    "en_def": "likely to do something or behave in a certain way",
    "cn_def": "傾向於……的"
  },
  "sleepless": {
    "pos": "adj.",
    "en_def": "without sleep",
    "cn_def": "失眠的;無眠的"
  },
  "mundane": {
    "pos": "adj.",
    "en_def": "ordinary and not interesting",
    "cn_def": "平凡的;單調的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "wanting very much to win or be better than others",
    "cn_def": "好勝的;競爭的"
  },
  "accustomed": {
    "pos": "adj.",
    "en_def": "used to something",
    "cn_def": "習慣於……的"
  },
  "remedial": {
    "pos": "adj.",
    "en_def": "aimed at improving skills that are weak",
    "cn_def": "補救的"
  }
};

const EXTRA_GLOSSES = {};
