// Topic 5 Subunit 6 Quiz Data: Decision-Making & Judgement 決策與判斷
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T05 S06 - Decision-Making & Judgement 決策與判斷",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "decision",
    "pos": "n.",
    "cn_def": "決定",
    "en_def": "a choice you make after thinking",
    "sentence": "Choosing a university is a big {{BLANK}}, so you should talk to teachers and visit the campus before you decide.",
    "cn": "選擇大學是個重大的決定,所以你在決定之前應該和老師談談並參觀校園。"
  },
  {
    "word": "choice",
    "pos": "n.",
    "cn_def": "選擇",
    "en_def": "the act of picking one thing from several",
    "sentence": "There were too many {{BLANK}} on the menu, and it took my friend twenty minutes to order a simple drink.",
    "cn": "菜單上有太多選擇,我的朋友花了二十分鐘才點了一杯簡單的飲料。"
  },
  {
    "word": "judgement",
    "pos": "n.",
    "cn_def": "判斷(力)",
    "en_def": "the ability to make good decisions",
    "sentence": "Lack of sleep can affect your {{BLANK}}, so you should never drive when you feel very tired.",
    "cn": "睡眠不足會影響你的判斷力,所以覺得很累時千萬不要開車。"
  },
  {
    "word": "heuristic",
    "pos": "n.",
    "cn_def": "捷思法;經驗法則",
    "en_def": "a simple rule that helps you decide quickly",
    "sentence": "People often use a simple {{BLANK}} when shopping, such as choosing the brand they know, but it does not always give the best result.",
    "cn": "人們購物時常用一種簡單的經驗法則,例如選擇熟悉的品牌,但這不一定能得到最好的結果。"
  },
  {
    "word": "intuition",
    "pos": "n.",
    "cn_def": "直覺",
    "en_def": "knowing something from feeling, not from thinking it through",
    "sentence": "My {{BLANK}} told me something was wrong with the online offer, so I did not give my credit card number.",
    "cn": "我的直覺告訴我那個網路優惠有問題,所以我沒有提供信用卡號碼。"
  },
  {
    "word": "intuitive",
    "pos": "adj.",
    "cn_def": "直覺的;直觀的",
    "en_def": "based on feelings rather than facts; easy to understand",
    "sentence": "The new app is very {{BLANK}}, so even my grandmother learned to use it in a few minutes without any help.",
    "cn": "這個新的應用程式非常直觀,所以連我奶奶都在幾分鐘內不靠任何幫忙就學會使用了。"
  },
  {
    "word": "irrational",
    "pos": "adj.",
    "cn_def": "不理性的",
    "en_def": "not based on clear thinking",
    "sentence": "Her fear of the dark is {{BLANK}}, but it still makes her feel nervous when she walks home at night.",
    "cn": "她對黑暗的恐懼是不理性的,但這仍然讓她晚上走路回家時感到緊張。"
  },
  {
    "word": "reasoning",
    "pos": "n.",
    "cn_def": "推理;論證",
    "en_def": "the process of thinking about something in a logical way",
    "sentence": "The teacher liked Jason's {{BLANK}} in his essay, because each point was supported by clear examples.",
    "cn": "老師喜歡傑森文章中的論證,因為每個論點都有清楚的例子支持。"
  },
  {
    "word": "logical",
    "pos": "adj.",
    "cn_def": "合乎邏輯的",
    "en_def": "following clear and sensible thinking",
    "sentence": "It is {{BLANK}} to compare prices before buying a new phone, but many people buy on impulse instead.",
    "cn": "買新手機前比較價格是合乎邏輯的,但許多人反而一時衝動就買了。"
  },
  {
    "word": "hasty",
    "pos": "adj.",
    "cn_def": "草率的;倉促的",
    "en_def": "done too quickly without enough thought",
    "sentence": "Don't make a {{BLANK}} decision about quitting the team, because you might feel differently after a good night's sleep.",
    "cn": "不要草率決定退出球隊,因為好好睡一晚之後你可能會有不同的感覺。"
  },
  {
    "word": "gamble",
    "pos": "n.",
    "cn_def": "冒險;賭注",
    "en_def": "a risky action that may succeed or fail",
    "sentence": "Leaving his stable job to start a café was a {{BLANK}}, but Mr Lin was willing to take the risk.",
    "cn": "辭掉穩定的工作去開咖啡店是一場賭注,但林先生願意冒這個險。"
  },
  {
    "word": "trade-off",
    "pos": "n.",
    "cn_def": "權衡;取捨",
    "en_def": "a balance between two things you cannot have together",
    "sentence": "There is always a {{BLANK}} between time and money, because a faster train usually costs more than a slow bus.",
    "cn": "時間和金錢之間總是有取捨,因為較快的火車通常比慢速巴士貴。"
  },
  {
    "word": "regret",
    "pos": "v.",
    "cn_def": "後悔",
    "en_def": "to feel sorry about something you did or did not do",
    "sentence": "I {{BLANK}} not studying harder in junior high, but I am working much harder now that I am in senior high.",
    "cn": "我後悔國中時沒有更努力讀書,但現在上了高中我努力多了。"
  },
  {
    "word": "hindsight",
    "pos": "n.",
    "cn_def": "事後的領悟;後見之明",
    "en_def": "understanding a situation only after it has happened",
    "sentence": "With {{BLANK}}, I should have started revising earlier, but at the time I thought I had plenty of time.",
    "cn": "事後看來,我應該早點開始複習,但當時我以為時間很充裕。"
  },
  {
    "word": "reckless",
    "pos": "adj.",
    "cn_def": "魯莽的",
    "en_def": "doing dangerous things without thinking about the results",
    "sentence": "Riding a scooter fast in the rain is {{BLANK}}, and many accidents happen because drivers ignore the danger.",
    "cn": "在雨中騎機車騎很快是很魯莽的,許多事故都是因為駕駛人忽視危險而發生。"
  },
  {
    "word": "overconfidence",
    "pos": "n.",
    "cn_def": "過度自信",
    "en_def": "too much belief in your own ability",
    "sentence": "His {{BLANK}} cost him the match, because he did not prepare and thought he would win easily.",
    "cn": "他的過度自信讓他輸掉了比賽,因為他沒有準備,還以為可以輕鬆獲勝。"
  },
  {
    "word": "confirmation bias",
    "pos": "n.phr.",
    "cn_def": "確認偏誤",
    "en_def": "the habit of only noticing facts that agree with what you already believe",
    "sentence": "Because of {{BLANK}}, people often read news that supports their own opinions, and they ignore other views.",
    "cn": "由於確認偏誤,人們常常閱讀支持自己意見的新聞,而忽略其他觀點。"
  },
  {
    "word": "anchoring",
    "pos": "n.",
    "cn_def": "錨定效應",
    "en_def": "relying too much on the first number or fact you hear",
    "sentence": "Shops use {{BLANK}} when they show a high \"original price\" first, so the sale price looks like a great deal.",
    "cn": "商店先標出高的「原價」來運用錨定效應,讓特價看起來非常划算。"
  },
  {
    "word": "framing",
    "pos": "n.",
    "cn_def": "框架效應;表述方式",
    "en_def": "the way information is presented, which can change choices",
    "sentence": "The {{BLANK}} of the message mattered, because more people bought the yogurt labelled \"90% fat-free\" than \"10% fat\".",
    "cn": "訊息的表述方式很重要,因為標示「90%無脂」的優格比標示「10%脂肪」的賣得更多。"
  },
  {
    "word": "loss aversion",
    "pos": "n.phr.",
    "cn_def": "損失規避",
    "en_def": "the tendency to fear losing more than you enjoy winning",
    "sentence": "{{BLANK}} explains why many people keep a bad investment, because selling it would mean accepting a loss.",
    "cn": "損失規避解釋了為什麼許多人會留著不好的投資,因為賣掉就代表要接受虧損。"
  },
  {
    "word": "sunk cost",
    "pos": "n.phr.",
    "cn_def": "沉沒成本",
    "en_def": "money or time already spent that cannot be recovered",
    "sentence": "I kept watching the boring movie because of the {{BLANK}} of the ticket, but I just wasted two more hours.",
    "cn": "因為電影票的沉沒成本,我繼續看那部無聊的電影,但我只是又浪費了兩個小時。"
  },
  {
    "word": "preference",
    "pos": "n.",
    "cn_def": "偏好",
    "en_def": "liking one thing more than another",
    "sentence": "Many students have a {{BLANK}} for studying at night, while others focus better early in the morning.",
    "cn": "許多學生偏好在晚上讀書,而其他人則在一大早比較專心。"
  },
  {
    "word": "opportunity cost",
    "pos": "n.phr.",
    "cn_def": "機會成本",
    "en_def": "what you give up when you choose something else",
    "sentence": "The {{BLANK}} of playing games all weekend is the study time you lose, so think carefully before you start.",
    "cn": "整個週末打電動的機會成本就是你失去的讀書時間,所以開始前要仔細想想。"
  },
  {
    "word": "peer pressure",
    "pos": "n.phr.",
    "cn_def": "同儕壓力",
    "en_def": "influence from friends to act like them",
    "sentence": "Because of {{BLANK}}, some teenagers try things they don't really want to do, so it is important to learn to say no.",
    "cn": "由於同儕壓力,有些青少年會嘗試他們其實不想做的事,所以學會說不是很重要的。"
  },
  {
    "word": "conformity",
    "pos": "n.",
    "cn_def": "從眾;順從",
    "en_def": "behaving the same way as most people in a group",
    "sentence": "Wearing a uniform shows {{BLANK}} to school rules, but some students wish they could express their own style.",
    "cn": "穿制服表示遵從校規,但有些學生希望能表現自己的風格。"
  },
  {
    "word": "groupthink",
    "pos": "n.",
    "cn_def": "團體迷思",
    "en_def": "when a group agrees too quickly and ignores other ideas",
    "sentence": "The team fell into {{BLANK}}, because nobody wanted to argue with the leader, so they missed an obvious problem.",
    "cn": "團隊陷入了團體迷思,因為沒有人想和隊長爭論,所以他們漏掉了一個明顯的問題。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "建議;忠告",
    "en_def": "an opinion about what someone should do",
    "sentence": "My older cousin gave me useful {{BLANK}} about choosing a major, and I felt much clearer about my future.",
    "cn": "我的表哥給了我關於選擇科系很有用的建議,我對未來感到清楚多了。"
  },
  {
    "word": "indecisive",
    "pos": "adj.",
    "cn_def": "優柔寡斷的",
    "en_def": "unable to make decisions quickly",
    "sentence": "My sister is so {{BLANK}} that she spent an hour choosing a T-shirt, and in the end she bought nothing.",
    "cn": "我姊姊非常優柔寡斷,她花了一個小時挑一件T恤,最後什麼都沒買。"
  },
  {
    "word": "dither",
    "pos": "v.",
    "cn_def": "猶豫不決",
    "en_def": "to be unable to decide what to do",
    "sentence": "If you {{BLANK}} too long about joining the trip, the tickets may sell out, so please decide by Friday.",
    "cn": "如果你對參加旅行猶豫不決太久,票可能會賣完,所以請在星期五前決定。"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫",
    "en_def": "to pause before doing something because you are unsure",
    "sentence": "Please don't {{BLANK}} to ask questions in class, because other students probably have the same questions too.",
    "cn": "上課時請不要猶豫提問,因為其他同學可能也有同樣的問題。"
  },
  {
    "word": "weigh",
    "pos": "v.",
    "cn_def": "權衡;考慮",
    "en_def": "to think carefully about something before deciding",
    "sentence": "You should {{BLANK}} the costs and benefits of a part-time job, because it may take time away from your studies.",
    "cn": "你應該權衡打工的成本與好處,因為它可能會佔用你的讀書時間。"
  },
  {
    "word": "foresight",
    "pos": "n.",
    "cn_def": "先見之明;遠見",
    "en_def": "the ability to plan for what will happen in the future",
    "sentence": "Thanks to her mother's {{BLANK}}, they had packed umbrellas, so they stayed dry when the storm suddenly arrived.",
    "cn": "多虧媽媽的先見之明,她們帶了雨傘,所以暴風雨突然來時她們沒有淋濕。"
  },
  {
    "word": "rash",
    "pos": "adj.",
    "cn_def": "輕率的",
    "en_def": "done too quickly without thinking",
    "sentence": "Selling his bike on the spot was a {{BLANK}} decision, and he regretted it the next morning when he had to walk to school.",
    "cn": "當場賣掉腳踏車是個輕率的決定,隔天早上他必須走路上學時就後悔了。"
  },
  {
    "word": "reconsider",
    "pos": "v.",
    "cn_def": "重新考慮",
    "en_def": "to think again about a decision",
    "sentence": "The manager asked Nina to {{BLANK}} her plan to quit, because the company did not want to lose such a good worker.",
    "cn": "經理請妮娜重新考慮她辭職的計畫,因為公司不想失去這麼好的員工。"
  },
  {
    "word": "second-guess",
    "pos": "v.",
    "cn_def": "事後懷疑;反覆猜疑",
    "en_def": "to doubt a decision after you have made it",
    "sentence": "Don't {{BLANK}} every answer on the test, because your first choice is often correct if you studied well.",
    "cn": "不要對考卷上的每個答案反覆懷疑,因為如果你有好好讀書,第一個選擇往往是對的。"
  }
];

const MCQS = [
  {
    "q": "Choosing a university is a big _____, so you should talk to teachers and visit the campus before you decide.",
    "options": [
      "self-confidence",
      "decision",
      "positivity",
      "progress"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "There were too many _____ on the menu, and it took my friend twenty minutes to order a simple drink.",
    "options": [
      "dismay",
      "obsession",
      "choice",
      "helpline"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Lack of sleep can affect your _____, so you should never drive when you feel very tired.",
    "options": [
      "judgement",
      "massage",
      "stamina",
      "respite"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "People often use a simple _____ when shopping, such as choosing the brand they know, but it does not always give the best result.",
    "options": [
      "outlet",
      "empathy",
      "frustration",
      "heuristic"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "My _____ told me something was wrong with the online offer, so I did not give my credit card number.",
    "options": [
      "enthusiasm",
      "aversion",
      "intuition",
      "retrospect"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new app is very _____, so even my grandmother learned to use it in a few minutes without any help.",
    "options": [
      "calm",
      "intuitive",
      "competitive",
      "aggressive"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Her fear of the dark is _____, but it still makes her feel nervous when she walks home at night.",
    "options": [
      "irrational",
      "hardworking",
      "incessant",
      "spontaneous"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The teacher liked Jason's _____ in his essay, because each point was supported by clear examples.",
    "options": [
      "self-belief",
      "boredom",
      "conjecture",
      "reasoning"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "It is _____ to compare prices before buying a new phone, but many people buy on impulse instead.",
    "options": [
      "counterproductive",
      "undue",
      "logical",
      "self-motivated"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Don't make a _____ decision about quitting the team, because you might feel differently after a good night's sleep.",
    "options": [
      "hasty",
      "generous",
      "disparate",
      "exemplary"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Leaving his stable job to start a café was a _____, but Mr Lin was willing to take the risk.",
    "options": [
      "misconception",
      "discord",
      "introspection",
      "gamble"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "There is always a _____ between time and money, because a faster train usually costs more than a slow bus.",
    "options": [
      "remorse",
      "trade-off",
      "tendency",
      "workout"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "I _____ not studying harder in junior high, but I am working much harder now that I am in senior high.",
    "options": [
      "socialise",
      "envy",
      "subdue",
      "regret"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "With _____, I should have started revising earlier, but at the time I thought I had plenty of time.",
    "options": [
      "mindset",
      "hindsight",
      "respite",
      "caution"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Riding a scooter fast in the rain is _____, and many accidents happen because drivers ignore the danger.",
    "options": [
      "unpredictable",
      "competitive",
      "reckless",
      "indifferent"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "His _____ cost him the match, because he did not prepare and thought he would win easily.",
    "options": [
      "overconfidence",
      "hobby",
      "compulsion",
      "introvert"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Because of _____, people often read news that supports their own opinions, and they ignore other views.",
    "options": [
      "blood pressure",
      "light at the end of the tunnel",
      "confirmation bias",
      "deep breathing"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Shops use _____ when they show a high \"original price\" first, so the sale price looks like a great deal.",
    "options": [
      "introspection",
      "anchoring",
      "strain",
      "getaway"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The _____ of the message mattered, because more people bought the yogurt labelled \"90% fat-free\" than \"10% fat\".",
    "options": [
      "intricacy",
      "optimism",
      "counsellor",
      "framing"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "_____ explains why many people keep a bad investment, because selling it would mean accepting a loss.",
    "options": [
      "loss aversion",
      "to-do list",
      "light at the end of the tunnel",
      "blood pressure"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "I kept watching the boring movie because of the _____ of the ticket, but I just wasted two more hours.",
    "options": [
      "to-do list",
      "sunk cost",
      "light at the end of the tunnel",
      "immune system"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Many students have a _____ for studying at night, while others focus better early in the morning.",
    "options": [
      "outlook",
      "caution",
      "encouragement",
      "preference"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The _____ of playing games all weekend is the study time you lose, so think carefully before you start.",
    "options": [
      "immune system",
      "light at the end of the tunnel",
      "opportunity cost",
      "to-do list"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Because of _____, some teenagers try things they don't really want to do, so it is important to learn to say no.",
    "options": [
      "peer pressure",
      "light at the end of the tunnel",
      "deep breathing",
      "to-do list"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Wearing a uniform shows _____ to school rules, but some students wish they could express their own style.",
    "options": [
      "self-confidence",
      "laughter",
      "conformity",
      "journaling"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The team fell into _____, because nobody wanted to argue with the leader, so they missed an obvious problem.",
    "options": [
      "grief",
      "strain",
      "shortcoming",
      "groupthink"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "My older cousin gave me useful _____ about choosing a major, and I felt much clearer about my future.",
    "options": [
      "outset",
      "advice",
      "discord",
      "bystander"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "My sister is so _____ that she spent an hour choosing a T-shirt, and in the end she bought nothing.",
    "options": [
      "indecisive",
      "keen",
      "pessimistic",
      "irrevocable"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "If you _____ too long about joining the trip, the tickets may sell out, so please decide by Friday.",
    "options": [
      "soothe",
      "worry",
      "dither",
      "cultivate"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Please don't _____ to ask questions in class, because other students probably have the same questions too.",
    "options": [
      "hesitate",
      "sweat",
      "envision",
      "relinquish"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "You should _____ the costs and benefits of a part-time job, because it may take time away from your studies.",
    "options": [
      "relish",
      "weigh",
      "evoke",
      "deprive"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Thanks to her mother's _____, they had packed umbrellas, so they stayed dry when the storm suddenly arrived.",
    "options": [
      "headache",
      "discretion",
      "rigidity",
      "foresight"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Selling his bike on the spot was a _____ decision, and he regretted it the next morning when he had to walk to school.",
    "options": [
      "cognisant",
      "rash",
      "peripheral",
      "undue"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The manager asked Nina to _____ her plan to quit, because the company did not want to lose such a good worker.",
    "options": [
      "reconsider",
      "tempt",
      "breathe",
      "envy"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Don't _____ every answer on the test, because your first choice is often correct if you studied well.",
    "options": [
      "commend",
      "reassess",
      "second-guess",
      "stifle"
    ],
    "answer": 2,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "decision": {
    "pos": "n.",
    "en_def": "a choice you make after thinking",
    "cn_def": "決定"
  },
  "choice": {
    "pos": "n.",
    "en_def": "the act of picking one thing from several",
    "cn_def": "選擇"
  },
  "judgement": {
    "pos": "n.",
    "en_def": "the ability to make good decisions",
    "cn_def": "判斷(力)"
  },
  "heuristic": {
    "pos": "n.",
    "en_def": "a simple rule that helps you decide quickly",
    "cn_def": "捷思法;經驗法則"
  },
  "intuition": {
    "pos": "n.",
    "en_def": "knowing something from feeling, not from thinking it through",
    "cn_def": "直覺"
  },
  "intuitive": {
    "pos": "adj.",
    "en_def": "based on feelings rather than facts; easy to understand",
    "cn_def": "直覺的;直觀的"
  },
  "irrational": {
    "pos": "adj.",
    "en_def": "not based on clear thinking",
    "cn_def": "不理性的"
  },
  "reasoning": {
    "pos": "n.",
    "en_def": "the process of thinking about something in a logical way",
    "cn_def": "推理;論證"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "following clear and sensible thinking",
    "cn_def": "合乎邏輯的"
  },
  "hasty": {
    "pos": "adj.",
    "en_def": "done too quickly without enough thought",
    "cn_def": "草率的;倉促的"
  },
  "gamble": {
    "pos": "n.",
    "en_def": "a risky action that may succeed or fail",
    "cn_def": "冒險;賭注"
  },
  "trade-off": {
    "pos": "n.",
    "en_def": "a balance between two things you cannot have together",
    "cn_def": "權衡;取捨"
  },
  "regret": {
    "pos": "v.",
    "en_def": "to feel sorry about something you did or did not do",
    "cn_def": "後悔"
  },
  "hindsight": {
    "pos": "n.",
    "en_def": "understanding a situation only after it has happened",
    "cn_def": "事後的領悟;後見之明"
  },
  "reckless": {
    "pos": "adj.",
    "en_def": "doing dangerous things without thinking about the results",
    "cn_def": "魯莽的"
  },
  "overconfidence": {
    "pos": "n.",
    "en_def": "too much belief in your own ability",
    "cn_def": "過度自信"
  },
  "confirmation bias": {
    "pos": "n.phr.",
    "en_def": "the habit of only noticing facts that agree with what you already believe",
    "cn_def": "確認偏誤"
  },
  "anchoring": {
    "pos": "n.",
    "en_def": "relying too much on the first number or fact you hear",
    "cn_def": "錨定效應"
  },
  "framing": {
    "pos": "n.",
    "en_def": "the way information is presented, which can change choices",
    "cn_def": "框架效應;表述方式"
  },
  "loss aversion": {
    "pos": "n.phr.",
    "en_def": "the tendency to fear losing more than you enjoy winning",
    "cn_def": "損失規避"
  },
  "sunk cost": {
    "pos": "n.phr.",
    "en_def": "money or time already spent that cannot be recovered",
    "cn_def": "沉沒成本"
  },
  "preference": {
    "pos": "n.",
    "en_def": "liking one thing more than another",
    "cn_def": "偏好"
  },
  "opportunity cost": {
    "pos": "n.phr.",
    "en_def": "what you give up when you choose something else",
    "cn_def": "機會成本"
  },
  "peer pressure": {
    "pos": "n.phr.",
    "en_def": "influence from friends to act like them",
    "cn_def": "同儕壓力"
  },
  "conformity": {
    "pos": "n.",
    "en_def": "behaving the same way as most people in a group",
    "cn_def": "從眾;順從"
  },
  "groupthink": {
    "pos": "n.",
    "en_def": "when a group agrees too quickly and ignores other ideas",
    "cn_def": "團體迷思"
  },
  "advice": {
    "pos": "n.",
    "en_def": "an opinion about what someone should do",
    "cn_def": "建議;忠告"
  },
  "indecisive": {
    "pos": "adj.",
    "en_def": "unable to make decisions quickly",
    "cn_def": "優柔寡斷的"
  },
  "dither": {
    "pos": "v.",
    "en_def": "to be unable to decide what to do",
    "cn_def": "猶豫不決"
  },
  "hesitate": {
    "pos": "v.",
    "en_def": "to pause before doing something because you are unsure",
    "cn_def": "猶豫"
  },
  "weigh": {
    "pos": "v.",
    "en_def": "to think carefully about something before deciding",
    "cn_def": "權衡;考慮"
  },
  "foresight": {
    "pos": "n.",
    "en_def": "the ability to plan for what will happen in the future",
    "cn_def": "先見之明;遠見"
  },
  "rash": {
    "pos": "adj.",
    "en_def": "done too quickly without thinking",
    "cn_def": "輕率的"
  },
  "reconsider": {
    "pos": "v.",
    "en_def": "to think again about a decision",
    "cn_def": "重新考慮"
  },
  "second-guess": {
    "pos": "v.",
    "en_def": "to doubt a decision after you have made it",
    "cn_def": "事後懷疑;反覆猜疑"
  },
  "self-confidence": {
    "pos": "n.",
    "en_def": "belief in your own abilities",
    "cn_def": "自信心"
  },
  "positivity": {
    "pos": "n.",
    "en_def": "a hopeful and cheerful attitude",
    "cn_def": "正面態度;正能量"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement towards a goal or improvement",
    "cn_def": "進步;進展"
  },
  "dismay": {
    "pos": "n.",
    "en_def": "a feeling of shock and disappointment",
    "cn_def": "驚愕;沮喪"
  },
  "obsession": {
    "pos": "n.",
    "en_def": "thinking about something all the time",
    "cn_def": "著迷;執念"
  },
  "helpline": {
    "pos": "n.",
    "en_def": "a phone service that gives advice or support",
    "cn_def": "求助專線"
  },
  "massage": {
    "pos": "n.",
    "en_def": "rubbing the body to relieve pain or stress",
    "cn_def": "按摩"
  },
  "stamina": {
    "pos": "n.",
    "en_def": "the energy to keep doing something for a long time",
    "cn_def": "耐力;精力"
  },
  "respite": {
    "pos": "n.",
    "en_def": "a short rest from something difficult",
    "cn_def": "暫緩;喘息"
  },
  "outlet": {
    "pos": "n.",
    "en_def": "a way to express feelings or use energy",
    "cn_def": "發洩管道;出口"
  },
  "empathy": {
    "pos": "n.",
    "en_def": "the ability to understand how others feel",
    "cn_def": "同理心"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do something",
    "cn_def": "挫折感"
  },
  "enthusiasm": {
    "pos": "n.",
    "en_def": "a feeling of being very excited and interested",
    "cn_def": "熱忱;熱衷"
  },
  "aversion": {
    "pos": "n.",
    "en_def": "a strong dislike of something",
    "cn_def": "厭惡;反感"
  },
  "retrospect": {
    "pos": "n.",
    "en_def": "thinking about a past event",
    "cn_def": "回顧;回想"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "relaxed and not worried or excited",
    "cn_def": "冷靜的;平靜的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "wanting very much to win or be better than others",
    "cn_def": "好勝的;競爭的"
  },
  "aggressive": {
    "pos": "adj.",
    "en_def": "behaving in an angry or violent way",
    "cn_def": "有攻擊性的;具侵略性的"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "putting a lot of effort into work",
    "cn_def": "勤奮的"
  },
  "incessant": {
    "pos": "adj.",
    "en_def": "never stopping",
    "cn_def": "不停的;持續不斷的"
  },
  "spontaneous": {
    "pos": "adj.",
    "en_def": "done suddenly without planning",
    "cn_def": "自發的;即興的"
  },
  "self-belief": {
    "pos": "n.",
    "en_def": "confidence in your own abilities",
    "cn_def": "自信;相信自己"
  },
  "boredom": {
    "pos": "n.",
    "en_def": "the feeling of being tired because nothing is interesting",
    "cn_def": "無聊;厭倦"
  },
  "conjecture": {
    "pos": "n.",
    "en_def": "an opinion based on incomplete information",
    "cn_def": "推測;猜想"
  },
  "counterproductive": {
    "pos": "adj.",
    "en_def": "having the opposite effect of what you want",
    "cn_def": "適得其反的"
  },
  "undue": {
    "pos": "adj.",
    "en_def": "more than is reasonable or necessary",
    "cn_def": "過度的;不適當的"
  },
  "self-motivated": {
    "pos": "adj.",
    "en_def": "able to work hard without others pushing you",
    "cn_def": "自動自發的"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "happy to give time, money or help to others",
    "cn_def": "慷慨的"
  },
  "disparate": {
    "pos": "adj.",
    "en_def": "very different from each other",
    "cn_def": "迥然不同的"
  },
  "exemplary": {
    "pos": "adj.",
    "en_def": "so good that others should copy it",
    "cn_def": "模範的;可作為榜樣的"
  },
  "misconception": {
    "pos": "n.",
    "en_def": "a wrong idea or belief",
    "cn_def": "誤解;錯誤觀念"
  },
  "discord": {
    "pos": "n.",
    "en_def": "disagreement between people",
    "cn_def": "不和;紛爭"
  },
  "introspection": {
    "pos": "n.",
    "en_def": "careful thinking about your own thoughts and feelings",
    "cn_def": "內省;自我反省"
  },
  "remorse": {
    "pos": "n.",
    "en_def": "a strong feeling of being sorry for doing something wrong",
    "cn_def": "悔恨;懊悔"
  },
  "tendency": {
    "pos": "n.",
    "en_def": "a habit of behaving in a certain way",
    "cn_def": "傾向"
  },
  "workout": {
    "pos": "n.",
    "en_def": "a session of physical exercise",
    "cn_def": "運動;健身"
  },
  "socialise": {
    "pos": "v.",
    "en_def": "to spend time with other people for fun",
    "cn_def": "社交;與人交往"
  },
  "envy": {
    "pos": "v.",
    "en_def": "to want something that another person has",
    "cn_def": "羨慕"
  },
  "subdue": {
    "pos": "v.",
    "en_def": "to bring a strong feeling under control",
    "cn_def": "抑制;克制"
  },
  "mindset": {
    "pos": "n.",
    "en_def": "a person's usual way of thinking",
    "cn_def": "心態;思維方式"
  },
  "caution": {
    "pos": "n.",
    "en_def": "care to avoid danger or mistakes",
    "cn_def": "謹慎;小心"
  },
  "unpredictable": {
    "pos": "adj.",
    "en_def": "changing in a way that is hard to guess",
    "cn_def": "難以預測的"
  },
  "indifferent": {
    "pos": "adj.",
    "en_def": "not interested or caring",
    "cn_def": "漠不關心的"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you enjoy in your free time",
    "cn_def": "嗜好"
  },
  "compulsion": {
    "pos": "n.",
    "en_def": "a strong feeling that you must do something",
    "cn_def": "強迫;衝動"
  },
  "introvert": {
    "pos": "n.",
    "en_def": "a quiet person who gets energy from being alone",
    "cn_def": "內向的人"
  },
  "blood pressure": {
    "pos": "n.phr.",
    "en_def": "the force of blood moving through your body",
    "cn_def": "血壓"
  },
  "light at the end of the tunnel": {
    "pos": "n.phr.",
    "en_def": "a sign that a difficult time will end soon",
    "cn_def": "黑暗盡頭的曙光;苦盡甘來的希望"
  },
  "deep breathing": {
    "pos": "n.phr.",
    "en_def": "taking slow, full breaths to calm down",
    "cn_def": "深呼吸"
  },
  "strain": {
    "pos": "n.",
    "en_def": "a difficult situation that makes you tired or worried",
    "cn_def": "負擔;壓力"
  },
  "getaway": {
    "pos": "n.",
    "en_def": "a short holiday away from home",
    "cn_def": "短暫度假"
  },
  "intricacy": {
    "pos": "n.",
    "en_def": "a small detail that makes something complicated",
    "cn_def": "錯綜複雜;細節"
  },
  "optimism": {
    "pos": "n.",
    "en_def": "the feeling that good things will happen",
    "cn_def": "樂觀"
  },
  "counsellor": {
    "pos": "n.",
    "en_def": "a person trained to listen and give advice about problems",
    "cn_def": "輔導員;諮商師"
  },
  "to-do list": {
    "pos": "n.phr.",
    "en_def": "a list of tasks you need to do",
    "cn_def": "待辦清單"
  },
  "immune system": {
    "pos": "n.phr.",
    "en_def": "the parts of the body that fight illness",
    "cn_def": "免疫系統"
  },
  "outlook": {
    "pos": "n.",
    "en_def": "a person's general attitude to life",
    "cn_def": "觀點;人生觀"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence",
    "cn_def": "鼓勵"
  },
  "laughter": {
    "pos": "n.",
    "en_def": "the sound or act of laughing",
    "cn_def": "笑聲;歡笑"
  },
  "journaling": {
    "pos": "n.",
    "en_def": "writing about your thoughts and feelings regularly",
    "cn_def": "寫日記;寫心情筆記"
  },
  "grief": {
    "pos": "n.",
    "en_def": "great sadness, especially when someone dies",
    "cn_def": "悲痛"
  },
  "shortcoming": {
    "pos": "n.",
    "en_def": "a weakness or fault",
    "cn_def": "缺點;短處"
  },
  "outset": {
    "pos": "n.",
    "en_def": "the start of something",
    "cn_def": "開始;開端"
  },
  "bystander": {
    "pos": "n.",
    "en_def": "a person who sees something happen but is not involved",
    "cn_def": "旁觀者"
  },
  "keen": {
    "pos": "adj.",
    "en_def": "very interested and enthusiastic",
    "cn_def": "熱衷的;渴望的"
  },
  "pessimistic": {
    "pos": "adj.",
    "en_def": "expecting things to go badly",
    "cn_def": "悲觀的"
  },
  "irrevocable": {
    "pos": "adj.",
    "en_def": "impossible to change or undo",
    "cn_def": "不可撤銷的;無法挽回的"
  },
  "soothe": {
    "pos": "v.",
    "en_def": "to make someone calm or less upset",
    "cn_def": "撫慰;使平靜"
  },
  "worry": {
    "pos": "v.",
    "en_def": "to keep thinking about problems or bad things",
    "cn_def": "擔心"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to develop a skill, quality or habit",
    "cn_def": "培養"
  },
  "sweat": {
    "pos": "v.",
    "en_def": "to have water come out of your skin",
    "cn_def": "流汗"
  },
  "envision": {
    "pos": "v.",
    "en_def": "to imagine something that may happen in the future",
    "cn_def": "設想;展望"
  },
  "relinquish": {
    "pos": "v.",
    "en_def": "to give up control or a position",
    "cn_def": "放棄;讓出"
  },
  "relish": {
    "pos": "v.",
    "en_def": "to enjoy something very much",
    "cn_def": "享受;喜愛"
  },
  "evoke": {
    "pos": "v.",
    "en_def": "to bring a feeling or memory into your mind",
    "cn_def": "喚起;引起"
  },
  "deprive": {
    "pos": "v.",
    "en_def": "to take something important away from someone",
    "cn_def": "剝奪"
  },
  "headache": {
    "pos": "n.",
    "en_def": "a pain in your head",
    "cn_def": "頭痛"
  },
  "discretion": {
    "pos": "n.",
    "en_def": "the right to decide something; care in what you say",
    "cn_def": "斟酌決定權;謹慎"
  },
  "rigidity": {
    "pos": "n.",
    "en_def": "being unwilling to change or adapt",
    "cn_def": "僵化;死板"
  },
  "cognisant": {
    "pos": "adj.",
    "en_def": "aware of something",
    "cn_def": "意識到的;認知到的"
  },
  "peripheral": {
    "pos": "adj.",
    "en_def": "not as important as the main part",
    "cn_def": "次要的;周邊的"
  },
  "tempt": {
    "pos": "v.",
    "en_def": "to make someone want to do something, often something wrong",
    "cn_def": "引誘;吸引"
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into your body and let it out",
    "cn_def": "呼吸"
  },
  "commend": {
    "pos": "v.",
    "en_def": "to praise someone formally",
    "cn_def": "表揚;稱讚"
  },
  "reassess": {
    "pos": "v.",
    "en_def": "to think about something again and maybe change your opinion",
    "cn_def": "重新評估"
  },
  "stifle": {
    "pos": "v.",
    "en_def": "to stop something from developing",
    "cn_def": "扼殺;抑制"
  }
};

const EXTRA_GLOSSES = {};
