// Topic 1 Subunit 7 Quiz Data: Society, Daily Life & the Future 社會、日常生活與未來
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S07 - Society, Daily Life & the Future 社會、日常生活與未來",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "smartphone",
    "pos": "n.",
    "cn_def": "智慧型手機",
    "en_def": "a mobile phone that can use the internet and apps",
    "sentence": "Almost every teenager in Taiwan owns a {{BLANK}}, so schools must teach them how to use AI apps wisely.",
    "cn": "台灣幾乎每個青少年都有一支智慧型手機,所以學校必須教他們如何明智地使用人工智慧應用程式。"
  },
  {
    "word": "gadget",
    "pos": "n.",
    "cn_def": "小裝置;小玩意兒",
    "en_def": "a small useful machine or tool",
    "sentence": "My dad loves new {{BLANK}}s, so he bought a smart speaker, but he mostly uses it to play old songs.",
    "cn": "我爸爸很喜歡新奇的小裝置,所以他買了一台智慧音箱,但他大多只用它來播老歌。"
  },
  {
    "word": "wearable",
    "pos": "adj.",
    "cn_def": "可穿戴的",
    "en_def": "designed to be worn on the body",
    "sentence": "My grandmother wears a {{BLANK}} device on her wrist, and it calls my mum automatically if she falls down.",
    "cn": "我奶奶手腕上戴著一個穿戴式裝置,如果她跌倒,它會自動打電話給我媽媽。"
  },
  {
    "word": "convenience",
    "pos": "n.",
    "cn_def": "便利",
    "en_def": "being easy and useful, saving time",
    "sentence": "Online shopping offers great {{BLANK}}, but some people miss the fun of visiting real shops with friends.",
    "cn": "網路購物提供了極大的便利,但有些人懷念和朋友一起逛實體店的樂趣。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy and saving you time or trouble",
    "sentence": "It is {{BLANK}} to ask a smart speaker for the weather, but it is a little worrying that it is always listening.",
    "cn": "問智慧音箱天氣很方便,但它總是在聆聽這件事有點令人擔憂。"
  },
  {
    "word": "inequality",
    "pos": "n.",
    "cn_def": "不平等",
    "en_def": "an unfair difference between groups of people",
    "sentence": "AI could increase {{BLANK}} if only rich schools can afford the best tools, so the government wants to help poorer areas.",
    "cn": "如果只有富裕的學校負擔得起最好的工具,人工智慧可能會加劇不平等,所以政府想幫助較貧困的地區。"
  },
  {
    "word": "divide",
    "pos": "n.",
    "cn_def": "差距;鴻溝",
    "en_def": "a large difference between two groups",
    "sentence": "There is a growing {{BLANK}} between students who have fast internet at home and those who do not.",
    "cn": "家裡有高速網路的學生和沒有的學生之間差距越來越大。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "易取得的;無障礙的",
    "en_def": "easy to reach, use or understand",
    "sentence": "AI reading tools make books more {{BLANK}} to blind students, because the computer can read every page aloud.",
    "cn": "人工智慧閱讀工具讓盲人學生更容易取得書籍,因為電腦能把每一頁都朗讀出來。"
  },
  {
    "word": "companionship",
    "pos": "n.",
    "cn_def": "陪伴;友誼",
    "en_def": "the pleasure of having friendly company",
    "sentence": "Some lonely older people find {{BLANK}} in talking robots, but experts say real friends are still much more important.",
    "cn": "一些孤單的長者從會說話的機器人身上得到陪伴,但專家說真正的朋友仍然重要得多。"
  },
  {
    "word": "dependence on",
    "pos": "n.",
    "cn_def": "依賴",
    "en_def": "needing something so much that you cannot do without it",
    "sentence": "Too much {{BLANK}} on GPS has made some drivers forget how to read a map, and AI may have the same effect on writing.",
    "cn": "過度依賴衛星導航已讓一些駕駛忘了怎麼看地圖,而人工智慧對寫作可能也有同樣的影響。",
    "answer": "dependence"
  },
  {
    "word": "be dependent on",
    "pos": "adj.",
    "cn_def": "依賴的",
    "en_def": "needing someone or something to survive or work",
    "sentence": "Many students have become {{BLANK}} on AI for their homework, so they struggle when they must write without it in exams.",
    "cn": "許多學生寫作業已變得依賴人工智慧,所以在考試中必須自己寫時就很吃力。",
    "answer": "dependent"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新",
    "en_def": "a new idea, method or invention",
    "sentence": "AI is a major {{BLANK}} in medicine, and it can now spot some diseases in X-rays earlier than many doctors.",
    "cn": "人工智慧是醫學上的一大創新,它現在能比許多醫生更早在X光片中發現某些疾病。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new ideas or methods",
    "sentence": "The teacher had an {{BLANK}} idea: students had to find and correct the mistakes in an AI-written essay.",
    "cn": "這位老師有個創新的點子:學生必須找出並改正一篇人工智慧寫的作文中的錯誤。"
  },
  {
    "word": "futuristic",
    "pos": "adj.",
    "cn_def": "未來感的",
    "en_def": "very modern and seeming to come from the future",
    "sentence": "The new train station looks very {{BLANK}}, with robots giving directions and screens that speak many languages.",
    "cn": "新的火車站看起來非常有未來感,有機器人指路,還有會說多種語言的螢幕。"
  },
  {
    "word": "revolutionise",
    "pos": "v.",
    "cn_def": "徹底改變",
    "en_def": "to change something completely and in a big way",
    "sentence": "Experts believe AI will {{BLANK}} medicine, because it can study millions of patient records in just a few hours.",
    "cn": "專家相信人工智慧將徹底改變醫學,因為它能在短短幾小時內研究數百萬份病歷。"
  },
  {
    "word": "transform",
    "pos": "v.",
    "cn_def": "改變;轉變",
    "en_def": "to change something completely, usually to improve it",
    "sentence": "Smartphones {{BLANK}}ed the way we communicate, and now AI is changing the way we search, learn and work.",
    "cn": "智慧型手機改變了我們溝通的方式,而現在人工智慧正在改變我們搜尋、學習和工作的方式。"
  },
  {
    "word": "transformation",
    "pos": "n.",
    "cn_def": "轉型;轉變",
    "en_def": "a complete change in something",
    "sentence": "The bank went through a digital {{BLANK}}, so customers now do almost everything online instead of visiting a branch.",
    "cn": "這家銀行經歷了數位轉型,所以顧客現在幾乎所有事都在網路上辦理,而不必去分行。"
  },
  {
    "word": "driverless",
    "pos": "adj.",
    "cn_def": "無人駕駛的",
    "en_def": "working without a human driver",
    "sentence": "{{BLANK}} buses are being tested in some Taiwanese cities, but a safety officer still sits on board in case of problems.",
    "cn": "台灣一些城市正在測試無人駕駛公車,但仍有一位安全人員坐在車上以防出問題。"
  },
  {
    "word": "autonomous",
    "pos": "adj.",
    "cn_def": "自主的;自動的",
    "en_def": "able to work or decide without human control",
    "sentence": "The {{BLANK}} vacuum cleaner maps our apartment by itself, so it cleans every room while we are at school.",
    "cn": "這台自動掃地機會自己繪製我們家的地圖,所以它在我們上學時就把每個房間打掃乾淨。"
  },
  {
    "word": "drone",
    "pos": "n.",
    "cn_def": "無人機",
    "en_def": "a small aircraft without a pilot, controlled from the ground",
    "sentence": "Farmers use {{BLANK}}s to spray crops, and this saves time, although some neighbours complain about the noise.",
    "cn": "農夫用無人機噴灑農作物,這節省了時間,雖然有些鄰居抱怨噪音。"
  },
  {
    "word": "healthcare",
    "pos": "n.",
    "cn_def": "醫療照護",
    "en_def": "services for looking after people's health",
    "sentence": "AI could make {{BLANK}} cheaper and faster, but patients still want to speak to a real doctor about serious problems.",
    "cn": "人工智慧可能讓醫療照護更便宜、更快速,但病人遇到嚴重問題時仍想和真正的醫生談。"
  },
  {
    "word": "telemedicine",
    "pos": "n.",
    "cn_def": "遠距醫療",
    "en_def": "seeing a doctor through video or phone instead of in person",
    "sentence": "{{BLANK}} helps people on small islands, because they can talk to city doctors without taking a long boat trip.",
    "cn": "遠距醫療幫助住在小島上的人,因為他們不用搭很久的船就能和城市裡的醫生交談。"
  },
  {
    "word": "e-commerce",
    "pos": "n.",
    "cn_def": "電子商務",
    "en_def": "buying and selling goods on the internet",
    "sentence": "{{BLANK}} has grown quickly in Taiwan, and AI now helps online shops guess what customers will want to buy next.",
    "cn": "電子商務在台灣快速成長,而人工智慧現在幫助網路商店猜測顧客接下來會想買什麼。"
  },
  {
    "word": "dystopian",
    "pos": "adj.",
    "cn_def": "反烏托邦的",
    "en_def": "describing a frightening imagined future where life is bad",
    "sentence": "The film shows a {{BLANK}} world where machines control people, but the director says it is a warning, not a prediction.",
    "cn": "這部電影描繪了一個由機器控制人類的反烏托邦世界,但導演說這是警告,而不是預言。"
  },
  {
    "word": "sceptical",
    "pos": "adj.",
    "cn_def": "懷疑的",
    "en_def": "doubting whether something is true or useful",
    "sentence": "My grandfather is {{BLANK}} about AI doctors, because he believes a machine cannot understand how a patient really feels.",
    "cn": "我爺爺對人工智慧醫生抱持懷疑態度,因為他認為機器無法理解病人真正的感受。"
  },
  {
    "word": "household",
    "pos": "n.",
    "cn_def": "家庭;家戶",
    "en_def": "all the people who live together in one home",
    "sentence": "Nearly every {{BLANK}} in our building now has a smart lock, so residents open their doors with their phones.",
    "cn": "我們大樓裡幾乎每一戶現在都有智慧門鎖,所以住戶用手機開門。"
  }
];

const MCQS = [
  {
    "q": "Almost every teenager in Taiwan owns a _____, so schools must teach them how to use AI apps wisely.",
    "options": [
      "smartphone",
      "caption",
      "plagiarism",
      "wage"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "My dad loves new _____s, so he bought a smart speaker, but he mostly uses it to play old songs.",
    "options": [
      "textbook",
      "gadget",
      "concept",
      "virus"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "My grandmother wears a _____ device on her wrist, and it calls my mum automatically if she falls down.",
    "options": [
      "subjective",
      "considerable",
      "biometric",
      "wearable"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Online shopping offers great _____, but some people miss the fun of visiting real shops with friends.",
    "options": [
      "draft",
      "cookie",
      "convenience",
      "concept"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "It is _____ to ask a smart speaker for the weather, but it is a little worrying that it is always listening.",
    "options": [
      "synthetic",
      "convenient",
      "subjective",
      "appropriate"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "AI could increase _____ if only rich schools can afford the best tools, so the government wants to help poorer areas.",
    "options": [
      "procedure",
      "robotics",
      "bias",
      "inequality"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "There is a growing _____ between students who have fast internet at home and those who do not.",
    "options": [
      "divide",
      "paradox",
      "shift",
      "data"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "AI reading tools make books more _____ to blind students, because the computer can read every page aloud.",
    "options": [
      "digital",
      "ambiguous",
      "accessible",
      "virtual"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Some lonely older people find _____ in talking robots, but experts say real friends are still much more important.",
    "options": [
      "profit",
      "companionship",
      "quiz",
      "workforce"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Too much _____ on GPS has made some drivers forget how to read a map, and AI may have the same effect on writing.",
    "options": [
      "stereotype",
      "percentage",
      "dependence",
      "legislation"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Many students have become _____ on AI for their homework, so they struggle when they must write without it in exams.",
    "options": [
      "virtual",
      "sophisticated",
      "fundamental",
      "dependent"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "AI is a major _____ in medicine, and it can now spot some diseases in X-rays earlier than many doctors.",
    "options": [
      "innovation",
      "user",
      "accountability",
      "probability"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The teacher had an _____ idea: students had to find and correct the mistakes in an AI-written essay.",
    "options": [
      "redundant",
      "sophisticated",
      "innovative",
      "adequate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The new train station looks very _____, with robots giving directions and screens that speak many languages.",
    "options": [
      "consistent",
      "synthetic",
      "comparable",
      "futuristic"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Experts believe AI will _____ medicine, because it can study millions of patient records in just a few hours.",
    "options": [
      "argue",
      "revolutionise",
      "grade",
      "ban"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Smartphones _____ed the way we communicate, and now AI is changing the way we search, learn and work.",
    "options": [
      "transform",
      "collaborate",
      "ensure",
      "challenge"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The bank went through a digital _____, so customers now do almost everything online instead of visiting a branch.",
    "options": [
      "drawback",
      "transformation",
      "breach",
      "ramification"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "_____ buses are being tested in some Taiwanese cities, but a safety officer still sits on board in case of problems.",
    "options": [
      "driverless",
      "apparent",
      "ambiguous",
      "random"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The _____ vacuum cleaner maps our apartment by itself, so it cleans every room while we are at school.",
    "options": [
      "ambiguous",
      "biometric",
      "autonomous",
      "secondary"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Farmers use _____s to spray crops, and this saves time, although some neighbours complain about the noise.",
    "options": [
      "diversity",
      "employer",
      "evidence",
      "drone"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "AI could make _____ cheaper and faster, but patients still want to speak to a real doctor about serious problems.",
    "options": [
      "healthcare",
      "employer",
      "legislation",
      "entrepreneur"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "_____ helps people on small islands, because they can talk to city doctors without taking a long boat trip.",
    "options": [
      "quiz",
      "prototype",
      "telemedicine",
      "shortage"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "_____ has grown quickly in Taiwan, and AI now helps online shops guess what customers will want to buy next.",
    "options": [
      "mentor",
      "e-commerce",
      "guideline",
      "startup"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The film shows a _____ world where machines control people, but the director says it is a warning, not a prediction.",
    "options": [
      "distinct",
      "redundant",
      "enormous",
      "dystopian"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "My grandfather is _____ about AI doctors, because he believes a machine cannot understand how a patient really feels.",
    "options": [
      "complex",
      "interactive",
      "sceptical",
      "fundamental"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Nearly every _____ in our building now has a smart lock, so residents open their doors with their phones.",
    "options": [
      "household",
      "framework",
      "layoff",
      "trend"
    ],
    "answer": 0,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "smartphone": {
    "pos": "n.",
    "en_def": "a mobile phone that can use the internet and apps",
    "cn_def": "智慧型手機"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small useful machine or tool",
    "cn_def": "小裝置;小玩意兒"
  },
  "wearable": {
    "pos": "adj.",
    "en_def": "designed to be worn on the body",
    "cn_def": "可穿戴的"
  },
  "convenience": {
    "pos": "n.",
    "en_def": "being easy and useful, saving time",
    "cn_def": "便利"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy and saving you time or trouble",
    "cn_def": "方便的"
  },
  "inequality": {
    "pos": "n.",
    "en_def": "an unfair difference between groups of people",
    "cn_def": "不平等"
  },
  "divide": {
    "pos": "n.",
    "en_def": "a large difference between two groups",
    "cn_def": "差距;鴻溝"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, use or understand",
    "cn_def": "易取得的;無障礙的"
  },
  "companionship": {
    "pos": "n.",
    "en_def": "the pleasure of having friendly company",
    "cn_def": "陪伴;友誼"
  },
  "dependence": {
    "pos": "n.",
    "en_def": "needing something so much that you cannot do without it",
    "cn_def": "依賴"
  },
  "dependence on": {
    "pos": "n.",
    "en_def": "needing something so much that you cannot do without it",
    "cn_def": "依賴"
  },
  "dependent": {
    "pos": "adj.",
    "en_def": "needing someone or something to survive or work",
    "cn_def": "依賴的"
  },
  "be dependent on": {
    "pos": "adj.",
    "en_def": "needing someone or something to survive or work",
    "cn_def": "依賴的"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method or invention",
    "cn_def": "創新"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new ideas or methods",
    "cn_def": "創新的"
  },
  "futuristic": {
    "pos": "adj.",
    "en_def": "very modern and seeming to come from the future",
    "cn_def": "未來感的"
  },
  "revolutionise": {
    "pos": "v.",
    "en_def": "to change something completely and in a big way",
    "cn_def": "徹底改變"
  },
  "transform": {
    "pos": "v.",
    "en_def": "to change something completely, usually to improve it",
    "cn_def": "改變;轉變"
  },
  "transformation": {
    "pos": "n.",
    "en_def": "a complete change in something",
    "cn_def": "轉型;轉變"
  },
  "driverless": {
    "pos": "adj.",
    "en_def": "working without a human driver",
    "cn_def": "無人駕駛的"
  },
  "autonomous": {
    "pos": "adj.",
    "en_def": "able to work or decide without human control",
    "cn_def": "自主的;自動的"
  },
  "drone": {
    "pos": "n.",
    "en_def": "a small aircraft without a pilot, controlled from the ground",
    "cn_def": "無人機"
  },
  "healthcare": {
    "pos": "n.",
    "en_def": "services for looking after people's health",
    "cn_def": "醫療照護"
  },
  "telemedicine": {
    "pos": "n.",
    "en_def": "seeing a doctor through video or phone instead of in person",
    "cn_def": "遠距醫療"
  },
  "e-commerce": {
    "pos": "n.",
    "en_def": "buying and selling goods on the internet",
    "cn_def": "電子商務"
  },
  "dystopian": {
    "pos": "adj.",
    "en_def": "describing a frightening imagined future where life is bad",
    "cn_def": "反烏托邦的"
  },
  "sceptical": {
    "pos": "adj.",
    "en_def": "doubting whether something is true or useful",
    "cn_def": "懷疑的"
  },
  "household": {
    "pos": "n.",
    "en_def": "all the people who live together in one home",
    "cn_def": "家庭;家戶"
  },
  "caption": {
    "pos": "n.",
    "en_def": "words on a screen that show what people are saying",
    "cn_def": "字幕;圖說"
  },
  "plagiarism": {
    "pos": "n.",
    "en_def": "copying someone else's work and saying it is yours",
    "cn_def": "抄襲"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid to a worker, usually by the hour or week",
    "cn_def": "工資"
  },
  "textbook": {
    "pos": "n.",
    "en_def": "a book used for studying a subject",
    "cn_def": "教科書;課本"
  },
  "concept": {
    "pos": "n.",
    "en_def": "an idea or general understanding of something",
    "cn_def": "概念"
  },
  "virus": {
    "pos": "n.",
    "en_def": "a program that copies itself and harms computers",
    "cn_def": "(電腦)病毒"
  },
  "subjective": {
    "pos": "adj.",
    "en_def": "based on personal feelings or opinions",
    "cn_def": "主觀的"
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "fairly large in size or amount",
    "cn_def": "相當大的"
  },
  "biometric": {
    "pos": "adj.",
    "en_def": "using body features like fingerprints or faces to identify people",
    "cn_def": "生物辨識的"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing",
    "cn_def": "草稿"
  },
  "cookie": {
    "pos": "n.",
    "en_def": "a small file a website saves to remember your activity",
    "cn_def": "(網站)Cookie;瀏覽紀錄檔"
  },
  "synthetic": {
    "pos": "adj.",
    "en_def": "made artificially, not natural or real",
    "cn_def": "合成的;人造的"
  },
  "appropriate": {
    "pos": "adj.",
    "en_def": "suitable for a situation",
    "cn_def": "適當的;合適的"
  },
  "procedure": {
    "pos": "n.",
    "en_def": "the official way of doing something",
    "cn_def": "程序;步驟"
  },
  "robotics": {
    "pos": "n.",
    "en_def": "the science of designing and building robots",
    "cn_def": "機器人學"
  },
  "bias": {
    "pos": "n.",
    "en_def": "unfair support for or against a group",
    "cn_def": "偏見;偏差"
  },
  "paradox": {
    "pos": "n.",
    "en_def": "a situation that seems strange because it has two opposite facts",
    "cn_def": "矛盾;悖論"
  },
  "shift": {
    "pos": "n.",
    "en_def": "a change in position or direction",
    "cn_def": "轉變;轉移"
  },
  "data": {
    "pos": "n.",
    "en_def": "facts and numbers collected for study",
    "cn_def": "數據;資料"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology",
    "cn_def": "數位的"
  },
  "ambiguous": {
    "pos": "adj.",
    "en_def": "having more than one possible meaning",
    "cn_def": "模稜兩可的;含糊的"
  },
  "virtual": {
    "pos": "adj.",
    "en_def": "existing on a computer, not in the real world",
    "cn_def": "虛擬的"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money a business makes after paying its costs",
    "cn_def": "利潤;獲利"
  },
  "quiz": {
    "pos": "n.",
    "en_def": "a short test",
    "cn_def": "小考;測驗"
  },
  "workforce": {
    "pos": "n.",
    "en_def": "all the people who work in a company or country",
    "cn_def": "勞動力;全體員工"
  },
  "stereotype": {
    "pos": "n.",
    "en_def": "a fixed, too-simple idea about a group of people",
    "cn_def": "刻板印象"
  },
  "percentage": {
    "pos": "n.",
    "en_def": "an amount shown as part of 100",
    "cn_def": "百分比"
  },
  "legislation": {
    "pos": "n.",
    "en_def": "a law or group of laws",
    "cn_def": "法規;立法"
  },
  "sophisticated": {
    "pos": "adj.",
    "en_def": "advanced and complicated",
    "cn_def": "精密的;複雜的"
  },
  "fundamental": {
    "pos": "adj.",
    "en_def": "basic and very important",
    "cn_def": "基本的;根本的"
  },
  "user": {
    "pos": "n.",
    "en_def": "a person who uses a product or service",
    "cn_def": "使用者;用戶"
  },
  "accountability": {
    "pos": "n.",
    "en_def": "being responsible for decisions and their results",
    "cn_def": "問責;責任歸屬"
  },
  "probability": {
    "pos": "n.",
    "en_def": "how likely something is to happen, often as a number",
    "cn_def": "機率"
  },
  "redundant": {
    "pos": "adj.",
    "en_def": "no longer needed for a job, so dismissed",
    "cn_def": "被裁員的;多餘的"
  },
  "adequate": {
    "pos": "adj.",
    "en_def": "enough or good enough for a purpose",
    "cn_def": "足夠的;適當的"
  },
  "consistent": {
    "pos": "adj.",
    "en_def": "always behaving or happening in the same way",
    "cn_def": "一致的;始終如一的"
  },
  "comparable": {
    "pos": "adj.",
    "en_def": "similar enough to be compared",
    "cn_def": "可比較的;相當的"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "grade": {
    "pos": "v.",
    "en_def": "to give a mark or score to students' work",
    "cn_def": "打分數;評分"
  },
  "ban": {
    "pos": "v.",
    "en_def": "to officially say something is not allowed",
    "cn_def": "禁止"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with others",
    "cn_def": "合作"
  },
  "ensure": {
    "pos": "v.",
    "en_def": "to make certain that something happens",
    "cn_def": "確保"
  },
  "challenge": {
    "pos": "v.",
    "en_def": "to question whether something is true or right",
    "cn_def": "質疑;挑戰"
  },
  "drawback": {
    "pos": "n.",
    "en_def": "a disadvantage or problem",
    "cn_def": "缺點"
  },
  "breach": {
    "pos": "n.",
    "en_def": "an event where private information is stolen or shown",
    "cn_def": "外洩;違反"
  },
  "ramification": {
    "pos": "n.",
    "en_def": "a possible result of an action, often unexpected",
    "cn_def": "(意外的)後果;影響"
  },
  "apparent": {
    "pos": "adj.",
    "en_def": "easy to see or understand",
    "cn_def": "明顯的"
  },
  "random": {
    "pos": "adj.",
    "en_def": "happening without any plan or pattern",
    "cn_def": "隨機的"
  },
  "secondary": {
    "pos": "adj.",
    "en_def": "less important than something else",
    "cn_def": "次要的"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of many different people or things",
    "cn_def": "多樣性"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work",
    "cn_def": "雇主"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts that show something is true",
    "cn_def": "證據"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts their own business",
    "cn_def": "創業家;企業家"
  },
  "prototype": {
    "pos": "n.",
    "en_def": "the first model of a new product, made for testing",
    "cn_def": "原型;樣品"
  },
  "shortage": {
    "pos": "n.",
    "en_def": "a situation where there is not enough of something",
    "cn_def": "短缺;不足"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises someone younger",
    "cn_def": "導師;良師"
  },
  "guideline": {
    "pos": "n.",
    "en_def": "advice or a rule about how to do something",
    "cn_def": "指引;準則"
  },
  "startup": {
    "pos": "n.",
    "en_def": "a new small company, often in technology",
    "cn_def": "新創公司"
  },
  "distinct": {
    "pos": "adj.",
    "en_def": "clearly different or separate",
    "cn_def": "不同的;明顯的"
  },
  "enormous": {
    "pos": "adj.",
    "en_def": "very large",
    "cn_def": "巨大的;龐大的"
  },
  "complex": {
    "pos": "adj.",
    "en_def": "made of many parts and difficult to understand",
    "cn_def": "複雜的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people and computers to respond to each other",
    "cn_def": "互動式的"
  },
  "framework": {
    "pos": "n.",
    "en_def": "a set of ideas or rules used to make decisions",
    "cn_def": "架構;框架"
  },
  "layoff": {
    "pos": "n.",
    "en_def": "the act of ending workers' jobs because there is not enough work",
    "cn_def": "裁員"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which things are changing",
    "cn_def": "趨勢"
  }
};

const EXTRA_GLOSSES = {};
