// Topic 1 Subunit 15 Quiz Data: Academic Words 學術單字 8 (resolve – expand)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S15 - Academic Words 學術單字 8 (resolve – expand)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find a solution to a problem",
    "sentence": "The customer service bot could not {{BLANK}} my problem, so I finally asked to speak to a real person.",
    "cn": "客服機器人無法解決我的問題,所以我最後要求和真人通話。"
  },
  {
    "word": "address",
    "pos": "v.",
    "cn_def": "處理;應對",
    "en_def": "to start dealing with a problem",
    "sentence": "Schools must {{BLANK}} the problem of AI cheating, but simply banning the tools is not likely to work.",
    "cn": "學校必須處理人工智慧作弊的問題,但單純禁止這些工具不太可能有效。"
  },
  {
    "word": "confront",
    "pos": "v.",
    "cn_def": "面對;正視",
    "en_def": "to face and deal with a difficult problem",
    "sentence": "Society must {{BLANK}} the fact that some jobs will disappear, so it should prepare workers for new kinds of work.",
    "cn": "社會必須正視某些工作將會消失的事實,所以應該讓勞工為新型態的工作做好準備。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服",
    "en_def": "to succeed in dealing with a problem",
    "sentence": "My grandmother {{BLANK}} her fear of computers, and now she video-calls her friends and shops online every week.",
    "cn": "我奶奶克服了對電腦的恐懼,現在她每週都和朋友視訊並上網購物。",
    "answer": "overcame",
    "alts": [
      "overcome"
    ]
  },
  {
    "word": "obstacle",
    "pos": "n.",
    "cn_def": "障礙",
    "en_def": "something that blocks you from doing something",
    "sentence": "Cost is the biggest {{BLANK}} for poor families, because they cannot afford laptops or fast internet for their children.",
    "cn": "費用是貧困家庭最大的障礙,因為他們負擔不起孩子的筆電或高速網路。"
  },
  {
    "word": "barrier",
    "pos": "n.",
    "cn_def": "障礙;隔閡",
    "en_def": "something that stops people from doing or getting something",
    "sentence": "Translation apps help break down language {{BLANK}}s, so tourists can talk to taxi drivers and shop owners easily.",
    "cn": "翻譯應用程式幫助打破語言隔閡,所以遊客能輕鬆地和計程車司機及店主交談。"
  },
  {
    "word": "dilemma",
    "pos": "n.",
    "cn_def": "兩難;困境",
    "en_def": "a hard situation where you must choose between two options",
    "sentence": "Teachers face a {{BLANK}}: if they ban AI, students may fall behind, but if they allow it, students may stop thinking.",
    "cn": "老師們面臨一個兩難:如果禁止人工智慧,學生可能會落後,但如果允許,學生可能會停止思考。"
  },
  {
    "word": "paradox",
    "pos": "n.",
    "cn_def": "矛盾;悖論",
    "en_def": "a situation that seems strange because it has two opposite facts",
    "sentence": "It is a {{BLANK}} that we have more ways to connect online than ever, but many young people say they feel lonelier.",
    "cn": "這是一個矛盾:我們在網路上聯繫的方式比以往任何時候都多,但許多年輕人說他們感覺更孤單。"
  },
  {
    "word": "consensus",
    "pos": "n.",
    "cn_def": "共識",
    "en_def": "agreement among most people in a group",
    "sentence": "There is no {{BLANK}} yet on how to use AI in schools, so each country is trying a different approach.",
    "cn": "對於如何在學校使用人工智慧尚未有共識,所以每個國家都在嘗試不同的方法。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a serious disagreement",
    "sentence": "There is a {{BLANK}} between parents who want more technology in class and parents who want children to read real books.",
    "cn": "希望課堂上有更多科技的家長和希望孩子讀實體書的家長之間存在衝突。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張關係",
    "en_def": "a feeling of worry or bad feeling between people",
    "sentence": "There is growing {{BLANK}} between artists and AI companies, because many artists feel their work was used without permission.",
    "cn": "藝術家與人工智慧公司之間的緊張關係日益加劇,因為許多藝術家覺得他們的作品未經允許就被使用。"
  },
  {
    "word": "ramification",
    "pos": "n.",
    "cn_def": "(意外的)後果;影響",
    "en_def": "a possible result of an action, often unexpected",
    "sentence": "Few people thought about the {{BLANK}}s of sharing family photos online, but now these photos can be used to make deepfakes.",
    "cn": "很少有人想過在網路上分享家庭照片的後果,但現在這些照片可能被用來製作深偽影片。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響;衝擊",
    "en_def": "a strong effect on something",
    "sentence": "AI will have a huge {{BLANK}} on jobs, but its effect on our daily lives may be even bigger.",
    "cn": "人工智慧將對工作造成巨大的衝擊,但它對我們日常生活的影響可能更大。"
  },
  {
    "word": "influence",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to have an effect on how someone thinks or acts",
    "sentence": "Social media apps {{BLANK}} what young people buy, because they show the same products again and again.",
    "cn": "社群媒體應用程式影響年輕人購買的東西,因為它們一再展示相同的商品。"
  },
  {
    "word": "affect",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to cause a change in someone or something",
    "sentence": "Using phones late at night can {{BLANK}} your sleep, so many students feel tired during morning classes.",
    "cn": "深夜使用手機會影響你的睡眠,所以許多學生在早上的課堂上感到疲倦。"
  },
  {
    "word": "alter",
    "pos": "v.",
    "cn_def": "改變;修改",
    "en_def": "to change something, usually slightly",
    "sentence": "It is very easy to {{BLANK}} a photo with AI, so you should not believe every picture you see online.",
    "cn": "用人工智慧修改照片非常容易,所以你不應該相信網路上看到的每張圖片。"
  },
  {
    "word": "modify",
    "pos": "v.",
    "cn_def": "修改;調整",
    "en_def": "to change something a little to improve it",
    "sentence": "The teacher {{BLANK}}d the test after she found that the AI could answer every question, and now it asks for personal opinions.",
    "cn": "老師發現人工智慧能回答每個問題後修改了考卷,現在它要求寫出個人意見。"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "適應;調整",
    "en_def": "to change to suit a new situation",
    "sentence": "Older workers can {{BLANK}} to new technology, but they need patient training and enough time to practise.",
    "cn": "年長員工能夠適應新科技,但他們需要有耐心的培訓和足夠的練習時間。"
  },
  {
    "word": "adjust",
    "pos": "v.",
    "cn_def": "調整",
    "en_def": "to change something slightly to make it work better",
    "sentence": "You can {{BLANK}} the speed of the reading app, so beginners can listen slowly while advanced learners go faster.",
    "cn": "你可以調整閱讀應用程式的速度,所以初學者可以慢慢聽,而進階學習者可以加快。"
  },
  {
    "word": "optimise",
    "pos": "v.",
    "cn_def": "使最佳化;優化",
    "en_def": "to make something work as well as possible",
    "sentence": "The delivery company uses AI to {{BLANK}} its routes, so drivers save time and the company spends less on fuel.",
    "cn": "這家物流公司用人工智慧優化路線,所以司機節省時間,公司也花更少的燃料費。"
  },
  {
    "word": "maximise",
    "pos": "v.",
    "cn_def": "使最大化",
    "en_def": "to make something as large as possible",
    "sentence": "Online shops use AI to {{BLANK}} sales, but sometimes they push customers to buy things they do not need.",
    "cn": "網路商店用人工智慧將銷售額最大化,但有時它們會促使顧客購買不需要的東西。"
  },
  {
    "word": "minimise",
    "pos": "v.",
    "cn_def": "使減到最少",
    "en_def": "to make something as small as possible",
    "sentence": "To {{BLANK}} the risk of scams, never share your password, and always call your bank if a message seems strange.",
    "cn": "為了把詐騙風險降到最低,絕不要分享你的密碼,如果訊息看起來奇怪,一定要打電話給銀行。"
  },
  {
    "word": "eliminate",
    "pos": "v.",
    "cn_def": "消除;淘汰",
    "en_def": "to remove something completely",
    "sentence": "AI may {{BLANK}} some boring office tasks, so workers can spend more time on creative and social work.",
    "cn": "人工智慧可能會消除一些無聊的辦公室工作,讓員工能花更多時間在創意和社交工作上。"
  },
  {
    "word": "diminish",
    "pos": "v.",
    "cn_def": "減少;減弱",
    "en_def": "to become or make smaller or less important",
    "sentence": "If students let AI think for them, their writing skills may {{BLANK}}, so teachers encourage them to write first drafts alone.",
    "cn": "如果學生讓人工智慧替他們思考,他們的寫作能力可能會減弱,所以老師鼓勵他們獨自寫初稿。"
  },
  {
    "word": "expand",
    "pos": "v.",
    "cn_def": "擴大;擴展",
    "en_def": "to become or make bigger",
    "sentence": "The online learning company plans to {{BLANK}} into Southeast Asia, because many families there want cheap English lessons.",
    "cn": "這家線上學習公司計畫擴展到東南亞,因為那裡許多家庭想要便宜的英文課。"
  }
];

const MCQS = [
  {
    "q": "The customer service bot could not _____ my problem, so I finally asked to speak to a real person.",
    "options": [
      "demonstrate",
      "confirm",
      "resolve",
      "adopt"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Schools must _____ the problem of AI cheating, but simply banning the tools is not likely to work.",
    "options": [
      "enable",
      "address",
      "differentiate",
      "mimic"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Society must _____ the fact that some jobs will disappear, so it should prepare workers for new kinds of work.",
    "options": [
      "exploit",
      "hack",
      "digitise",
      "confront"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "My grandmother _____ her fear of computers, and now she video-calls her friends and shops online every week.",
    "options": [
      "overcame",
      "regulate",
      "highlight",
      "replace"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Cost is the biggest _____ for poor families, because they cannot afford laptops or fast internet for their children.",
    "options": [
      "context",
      "cooperation",
      "obstacle",
      "gig"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Translation apps help break down language _____s, so tourists can talk to taxi drivers and shop owners easily.",
    "options": [
      "barrier",
      "browser",
      "majority",
      "spam"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Teachers face a _____: if they ban AI, students may fall behind, but if they allow it, students may stop thinking.",
    "options": [
      "criticism",
      "dilemma",
      "oversight",
      "procedure"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "It is a _____ that we have more ways to connect online than ever, but many young people say they feel lonelier.",
    "options": [
      "prejudice",
      "bandwidth",
      "minority",
      "paradox"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "There is no _____ yet on how to use AI in schools, so each country is trying a different approach.",
    "options": [
      "divide",
      "consensus",
      "mentor",
      "potential"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "There is a _____ between parents who want more technology in class and parents who want children to read real books.",
    "options": [
      "conflict",
      "prompt",
      "chatbot",
      "manufacturing"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "There is growing _____ between artists and AI companies, because many artists feel their work was used without permission.",
    "options": [
      "database",
      "domain",
      "oversight",
      "tension"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Few people thought about the _____s of sharing family photos online, but now these photos can be used to make deepfakes.",
    "options": [
      "privacy",
      "misinformation",
      "ramification",
      "tutor"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "AI will have a huge _____ on jobs, but its effect on our daily lives may be even bigger.",
    "options": [
      "impact",
      "platform",
      "originality",
      "warehouse"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Social media apps _____ what young people buy, because they show the same products again and again.",
    "options": [
      "summarise",
      "influence",
      "leak",
      "investigate"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Using phones late at night can _____ your sleep, so many students feel tired during morning classes.",
    "options": [
      "challenge",
      "illustrate",
      "affect",
      "regulate"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "It is very easy to _____ a photo with AI, so you should not believe every picture you see online.",
    "options": [
      "concede",
      "analyse",
      "discriminate",
      "alter"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The teacher _____d the test after she found that the AI could answer every question, and now it asks for personal opinions.",
    "options": [
      "modify",
      "claim",
      "translate",
      "challenge"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Older workers can _____ to new technology, but they need patient training and enough time to practise.",
    "options": [
      "hack",
      "adapt",
      "replace",
      "contradict"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "You can _____ the speed of the reading app, so beginners can listen slowly while advanced learners go faster.",
    "options": [
      "evaluate",
      "interpret",
      "adjust",
      "comply"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The delivery company uses AI to _____ its routes, so drivers save time and the company spends less on fuel.",
    "options": [
      "adopt",
      "clone",
      "hack",
      "optimise"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Online shops use AI to _____ sales, but sometimes they push customers to buy things they do not need.",
    "options": [
      "retrain",
      "maximise",
      "discriminate",
      "enable"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "To _____ the risk of scams, never share your password, and always call your bank if a message seems strange.",
    "options": [
      "edit",
      "restrict",
      "minimise",
      "discriminate"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "AI may _____ some boring office tasks, so workers can spend more time on creative and social work.",
    "options": [
      "restrict",
      "clarify",
      "evaluate",
      "eliminate"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "If students let AI think for them, their writing skills may _____, so teachers encourage them to write first drafts alone.",
    "options": [
      "diminish",
      "enable",
      "justify",
      "upgrade"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The online learning company plans to _____ into Southeast Asia, because many families there want cheap English lessons.",
    "options": [
      "install",
      "expand",
      "enforce",
      "argue"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "resolve": {
    "pos": "v.",
    "en_def": "to find a solution to a problem",
    "cn_def": "解決"
  },
  "address": {
    "pos": "v.",
    "en_def": "to start dealing with a problem",
    "cn_def": "處理;應對"
  },
  "confront": {
    "pos": "v.",
    "en_def": "to face and deal with a difficult problem",
    "cn_def": "面對;正視"
  },
  "overcame": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem",
    "cn_def": "克服"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem",
    "cn_def": "克服"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that blocks you from doing something",
    "cn_def": "障礙"
  },
  "barrier": {
    "pos": "n.",
    "en_def": "something that stops people from doing or getting something",
    "cn_def": "障礙;隔閡"
  },
  "dilemma": {
    "pos": "n.",
    "en_def": "a hard situation where you must choose between two options",
    "cn_def": "兩難;困境"
  },
  "paradox": {
    "pos": "n.",
    "en_def": "a situation that seems strange because it has two opposite facts",
    "cn_def": "矛盾;悖論"
  },
  "consensus": {
    "pos": "n.",
    "en_def": "agreement among most people in a group",
    "cn_def": "共識"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement",
    "cn_def": "衝突"
  },
  "tension": {
    "pos": "n.",
    "en_def": "a feeling of worry or bad feeling between people",
    "cn_def": "緊張關係"
  },
  "ramification": {
    "pos": "n.",
    "en_def": "a possible result of an action, often unexpected",
    "cn_def": "(意外的)後果;影響"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on something",
    "cn_def": "影響;衝擊"
  },
  "influence": {
    "pos": "v.",
    "en_def": "to have an effect on how someone thinks or acts",
    "cn_def": "影響"
  },
  "affect": {
    "pos": "v.",
    "en_def": "to cause a change in someone or something",
    "cn_def": "影響"
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something, usually slightly",
    "cn_def": "改變;修改"
  },
  "modify": {
    "pos": "v.",
    "en_def": "to change something a little to improve it",
    "cn_def": "修改;調整"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change to suit a new situation",
    "cn_def": "適應;調整"
  },
  "adjust": {
    "pos": "v.",
    "en_def": "to change something slightly to make it work better",
    "cn_def": "調整"
  },
  "optimise": {
    "pos": "v.",
    "en_def": "to make something work as well as possible",
    "cn_def": "使最佳化;優化"
  },
  "maximise": {
    "pos": "v.",
    "en_def": "to make something as large as possible",
    "cn_def": "使最大化"
  },
  "minimise": {
    "pos": "v.",
    "en_def": "to make something as small as possible",
    "cn_def": "使減到最少"
  },
  "eliminate": {
    "pos": "v.",
    "en_def": "to remove something completely",
    "cn_def": "消除;淘汰"
  },
  "diminish": {
    "pos": "v.",
    "en_def": "to become or make smaller or less important",
    "cn_def": "減少;減弱"
  },
  "expand": {
    "pos": "v.",
    "en_def": "to become or make bigger",
    "cn_def": "擴大;擴展"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show clearly that something is true or how it works",
    "cn_def": "證明;示範"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to show or say that something is definitely true",
    "cn_def": "確認;證實"
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to start using a new idea or method",
    "cn_def": "採用"
  },
  "enable": {
    "pos": "v.",
    "en_def": "to make it possible for someone to do something",
    "cn_def": "使能夠"
  },
  "differentiate": {
    "pos": "v.",
    "en_def": "to show or find the difference between things",
    "cn_def": "區別;區分"
  },
  "mimic": {
    "pos": "v.",
    "en_def": "to copy the way someone talks or behaves",
    "cn_def": "模仿"
  },
  "exploit": {
    "pos": "v.",
    "en_def": "to use someone or something unfairly for your own gain",
    "cn_def": "剝削;利用"
  },
  "hack": {
    "pos": "v.",
    "en_def": "to secretly get into someone's computer or account",
    "cn_def": "入侵(電腦);駭入"
  },
  "digitise": {
    "pos": "v.",
    "en_def": "to change paper documents or pictures into computer files",
    "cn_def": "數位化"
  },
  "regulate": {
    "pos": "v.",
    "en_def": "to control something with official rules",
    "cn_def": "規範;管制"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to draw attention to something important",
    "cn_def": "突顯;強調"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to take the place of someone or something",
    "cn_def": "取代"
  },
  "context": {
    "pos": "n.",
    "en_def": "the situation or information around something that helps explain it",
    "cn_def": "上下文;背景脈絡"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "working together to reach a shared goal",
    "cn_def": "合作;協力"
  },
  "gig": {
    "pos": "n.",
    "en_def": "a short job or piece of paid work",
    "cn_def": "零工;臨時工作"
  },
  "browser": {
    "pos": "n.",
    "en_def": "a program used to look at websites",
    "cn_def": "瀏覽器"
  },
  "majority": {
    "pos": "n.",
    "en_def": "more than half of a group",
    "cn_def": "大多數"
  },
  "spam": {
    "pos": "n.",
    "en_def": "unwanted messages sent to many people",
    "cn_def": "垃圾郵件"
  },
  "criticism": {
    "pos": "n.",
    "en_def": "comments saying what is wrong with something",
    "cn_def": "批評"
  },
  "oversight": {
    "pos": "n.",
    "en_def": "the job of watching and checking that something is done properly",
    "cn_def": "監督"
  },
  "procedure": {
    "pos": "n.",
    "en_def": "the official way of doing something",
    "cn_def": "程序;步驟"
  },
  "prejudice": {
    "pos": "n.",
    "en_def": "an unfair opinion formed without enough knowledge",
    "cn_def": "偏見;成見"
  },
  "bandwidth": {
    "pos": "n.",
    "en_def": "the amount of data an internet connection can carry",
    "cn_def": "頻寬"
  },
  "minority": {
    "pos": "n.",
    "en_def": "less than half of a group",
    "cn_def": "少數"
  },
  "divide": {
    "pos": "n.",
    "en_def": "a large difference between two groups",
    "cn_def": "差距;鴻溝"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises someone younger",
    "cn_def": "導師;良師"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility of developing or being useful in the future",
    "cn_def": "潛力;可能性"
  },
  "prompt": {
    "pos": "n.",
    "en_def": "the instruction or question you type into an AI tool",
    "cn_def": "提示詞;指令"
  },
  "chatbot": {
    "pos": "n.",
    "en_def": "a computer program that talks with people using text or voice",
    "cn_def": "聊天機器人"
  },
  "manufacturing": {
    "pos": "n.",
    "en_def": "making goods in large numbers in factories",
    "cn_def": "製造業"
  },
  "database": {
    "pos": "n.",
    "en_def": "an organised collection of information stored on a computer",
    "cn_def": "資料庫"
  },
  "domain": {
    "pos": "n.",
    "en_def": "an area of knowledge or activity",
    "cn_def": "領域"
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the right to keep your personal life secret",
    "cn_def": "隱私"
  },
  "misinformation": {
    "pos": "n.",
    "en_def": "wrong information that is spread, often by mistake",
    "cn_def": "錯誤訊息"
  },
  "tutor": {
    "pos": "n.",
    "en_def": "a teacher who helps one student or a small group",
    "cn_def": "家教;導師"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service where people share and use content",
    "cn_def": "平台"
  },
  "originality": {
    "pos": "n.",
    "en_def": "the quality of being new and not copied",
    "cn_def": "原創性"
  },
  "warehouse": {
    "pos": "n.",
    "en_def": "a large building where goods are stored",
    "cn_def": "倉庫"
  },
  "summarise": {
    "pos": "v.",
    "en_def": "to give the main points in a short form",
    "cn_def": "總結;摘要"
  },
  "leak": {
    "pos": "v.",
    "en_def": "to let secret information become known",
    "cn_def": "洩漏"
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to try to find out the facts about something",
    "cn_def": "調查"
  },
  "challenge": {
    "pos": "v.",
    "en_def": "to question whether something is true or right",
    "cn_def": "質疑;挑戰"
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to explain something with examples or pictures",
    "cn_def": "說明;闡明"
  },
  "concede": {
    "pos": "v.",
    "en_def": "to admit, often unwillingly, that something is true",
    "cn_def": "(勉強)承認;讓步"
  },
  "analyse": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "discriminate": {
    "pos": "v.",
    "en_def": "to treat a person or group unfairly",
    "cn_def": "歧視"
  },
  "claim": {
    "pos": "v.",
    "en_def": "to say something is true without proof",
    "cn_def": "聲稱"
  },
  "translate": {
    "pos": "v.",
    "en_def": "to change words into another language",
    "cn_def": "翻譯"
  },
  "contradict": {
    "pos": "v.",
    "en_def": "to say the opposite of what someone else has said",
    "cn_def": "與…矛盾;反駁"
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to judge how good or useful something is",
    "cn_def": "評估"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or understand the meaning of something",
    "cn_def": "解讀;詮釋"
  },
  "comply": {
    "pos": "v.",
    "en_def": "to obey a rule or request",
    "cn_def": "遵守;服從"
  },
  "clone": {
    "pos": "v.",
    "en_def": "to make an exact copy of something",
    "cn_def": "複製;仿製"
  },
  "retrain": {
    "pos": "v.",
    "en_def": "to learn or teach new skills for a different job",
    "cn_def": "再培訓;重新訓練"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve a piece of writing or a video",
    "cn_def": "編輯;修改"
  },
  "restrict": {
    "pos": "v.",
    "en_def": "to limit what someone can do",
    "cn_def": "限制"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "澄清;闡明"
  },
  "justify": {
    "pos": "v.",
    "en_def": "to give good reasons for something",
    "cn_def": "證明…合理;為…辯護"
  },
  "upgrade": {
    "pos": "v.",
    "en_def": "to make a machine or program newer and better",
    "cn_def": "升級"
  },
  "install": {
    "pos": "v.",
    "en_def": "to put a program onto a computer or phone",
    "cn_def": "安裝"
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make sure that people obey a rule or law",
    "cn_def": "執行;強制實施"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  }
};

const EXTRA_GLOSSES = {};
