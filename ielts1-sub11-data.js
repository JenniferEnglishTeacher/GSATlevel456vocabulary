// Topic 1 Subunit 11 Quiz Data: Academic Words 學術單字 4 (imply – accurate)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S11 - Academic Words 學術單字 4 (imply – accurate)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "imply",
    "pos": "v.",
    "cn_def": "暗示;意味著",
    "en_def": "to suggest something without saying it directly",
    "sentence": "The teacher's smile {{BLANK}}d that she knew I had used AI, but she simply asked me to explain my answer.",
    "cn": "老師的微笑暗示她知道我用了人工智慧,但她只是請我解釋我的答案。"
  },
  {
    "word": "infer",
    "pos": "v.",
    "cn_def": "推斷;推論",
    "en_def": "to guess a fact from the information you have",
    "sentence": "From his perfect grammar, the teacher {{BLANK}}red that he had used an AI tool, so she asked him to rewrite it in class.",
    "cn": "老師從他完美的文法推斷他用了人工智慧工具,所以要他在課堂上重寫。"
  },
  {
    "word": "conclude",
    "pos": "v.",
    "cn_def": "下結論;推斷",
    "en_def": "to decide something after thinking about the facts",
    "sentence": "After a year of testing, the researchers {{BLANK}}d that AI tutors help weaker students most, but strong students gain less.",
    "cn": "經過一年的測試,研究人員得出結論:人工智慧家教對程度較弱的學生幫助最大,而程度好的學生獲益較少。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "解讀;詮釋",
    "en_def": "to explain or understand the meaning of something",
    "sentence": "Machines can recognise words quickly, but they cannot always {{BLANK}} jokes, so their translations sometimes sound strange.",
    "cn": "機器能很快辨認文字,但它們不一定能解讀笑話,所以翻譯有時聽起來很奇怪。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清;闡明",
    "en_def": "to make something easier to understand",
    "sentence": "The school sent parents a letter to {{BLANK}} the new phone rules, because many families had been confused.",
    "cn": "學校寄信給家長以澄清新的手機規定,因為許多家庭感到困惑。"
  },
  {
    "word": "justify",
    "pos": "v.",
    "cn_def": "證明…合理;為…辯護",
    "en_def": "to give good reasons for something",
    "sentence": "The company could not {{BLANK}} the high price of its AI course, so many customers asked for their money back.",
    "cn": "這家公司無法合理解釋其人工智慧課程的高價,所以許多顧客要求退款。"
  },
  {
    "word": "validate",
    "pos": "v.",
    "cn_def": "驗證;證實",
    "en_def": "to prove that something is true or correct",
    "sentence": "Scientists must {{BLANK}} the results of the AI study with real patients, because computer tests are not enough.",
    "cn": "科學家必須用真實的病人來驗證這項人工智慧研究的結果,因為電腦測試是不夠的。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認;證實",
    "en_def": "to show or say that something is definitely true",
    "sentence": "The museum {{BLANK}}ed that the famous photo was made by AI, and it removed the picture from its website.",
    "cn": "博物館證實那張知名照片是由人工智慧製作的,並將它從網站上撤下。"
  },
  {
    "word": "contradict",
    "pos": "v.",
    "cn_def": "與…矛盾;反駁",
    "en_def": "to say the opposite of what someone else has said",
    "sentence": "The chatbot's answer {{BLANK}}ed what our textbook said, so we asked the teacher which source was correct.",
    "cn": "聊天機器人的答案和課本的說法矛盾,所以我們問老師哪個來源才正確。"
  },
  {
    "word": "challenge",
    "pos": "v.",
    "cn_def": "質疑;挑戰",
    "en_def": "to question whether something is true or right",
    "sentence": "Good students {{BLANK}} information they read online, and they do not believe everything just because a computer says it.",
    "cn": "好學生會質疑他們在網路上讀到的資訊,而不會只因為電腦這麼說就相信一切。"
  },
  {
    "word": "dispute",
    "pos": "v.",
    "cn_def": "質疑;爭論",
    "en_def": "to say that something is not true or correct",
    "sentence": "The artist {{BLANK}}d the company's claim that its AI images were original, and she showed copies of her own paintings.",
    "cn": "這位藝術家質疑公司聲稱其人工智慧圖片是原創的說法,並出示了她自己畫作的副本。"
  },
  {
    "word": "criticise",
    "pos": "v.",
    "cn_def": "批評",
    "en_def": "to say what is wrong with someone or something",
    "sentence": "Parents {{BLANK}}d the game company because its app showed too many adverts to young children.",
    "cn": "家長們批評這家遊戲公司,因為它的應用程式對幼童播放太多廣告。"
  },
  {
    "word": "criticism",
    "pos": "n.",
    "cn_def": "批評",
    "en_def": "comments saying what is wrong with something",
    "sentence": "The new exam system received a lot of {{BLANK}}, so the education department agreed to review it next year.",
    "cn": "新的考試制度受到許多批評,所以教育部門同意明年重新檢討。"
  },
  {
    "word": "scrutiny",
    "pos": "n.",
    "cn_def": "仔細審查;監督",
    "en_def": "careful and detailed examination",
    "sentence": "AI companies are under close {{BLANK}} from governments, because people want to know how their data is being used.",
    "cn": "人工智慧公司正受到各國政府的嚴格審查,因為人們想知道自己的資料如何被使用。"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查",
    "en_def": "to try to find out the facts about something",
    "sentence": "The police are {{BLANK}}ing a fake video of the mayor, and they believe it was made with free AI software.",
    "cn": "警方正在調查一段市長的假影片,他們認為它是用免費的人工智慧軟體製作的。"
  },
  {
    "word": "survey",
    "pos": "n.",
    "cn_def": "調查;問卷",
    "en_def": "a set of questions asked to many people to learn their opinions",
    "sentence": "A recent {{BLANK}} of university students found that most use AI weekly, but many feel unsure about the rules.",
    "cn": "最近一項針對大學生的調查發現,大多數人每週使用人工智慧,但許多人對規定感到不確定。"
  },
  {
    "word": "data",
    "pos": "n.",
    "cn_def": "數據;資料",
    "en_def": "facts and numbers collected for study",
    "sentence": "Companies collect huge amounts of {{BLANK}} from our phones, and they use it to decide which adverts we see.",
    "cn": "公司從我們的手機蒐集大量資料,並用它來決定我們會看到哪些廣告。"
  },
  {
    "word": "statistics",
    "pos": "n.",
    "cn_def": "統計數字",
    "en_def": "numbers that give information about something",
    "sentence": "Government {{BLANK}} show that more older people are shopping online, so banks are offering classes to help them stay safe.",
    "cn": "政府統計數據顯示越來越多長者在網路上購物,所以銀行正在開課幫助他們維護安全。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts that show something is true",
    "sentence": "There is little {{BLANK}} that AI apps alone improve exam results, but they seem to help when teachers guide their use.",
    "cn": "幾乎沒有證據顯示單靠人工智慧應用程式就能提升考試成績,但在老師引導使用時似乎有幫助。"
  },
  {
    "word": "empirical",
    "pos": "adj.",
    "cn_def": "實證的;以經驗為依據的",
    "en_def": "based on real experiments or observation, not theory",
    "sentence": "We need more {{BLANK}} research on AI in classrooms, because most claims so far come from companies selling the tools.",
    "cn": "我們需要更多關於課堂人工智慧的實證研究,因為目前大多數說法都來自販售這些工具的公司。"
  },
  {
    "word": "objective",
    "pos": "adj.",
    "cn_def": "客觀的",
    "en_def": "based on facts, not personal feelings",
    "sentence": "Some people think computers are more {{BLANK}} than humans, but AI can also be unfair if it learns from biased data.",
    "cn": "有些人認為電腦比人類更客觀,但人工智慧若從有偏見的資料中學習,也可能不公平。"
  },
  {
    "word": "subjective",
    "pos": "adj.",
    "cn_def": "主觀的",
    "en_def": "based on personal feelings or opinions",
    "sentence": "Judging a poem is very {{BLANK}}, so many teachers do not trust AI to give fair scores for creative writing.",
    "cn": "評斷一首詩是非常主觀的,所以許多老師不相信人工智慧能為創意寫作公平打分。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted",
    "sentence": "Wikipedia can be a useful starting point, but it is not always {{BLANK}}, so check the sources at the bottom of the page.",
    "cn": "維基百科可以是有用的起點,但它不一定可靠,所以要查看頁面底部的資料來源。"
  },
  {
    "word": "valid",
    "pos": "adj.",
    "cn_def": "有效的;站得住腳的",
    "en_def": "based on good reasons or facts; acceptable",
    "sentence": "Your argument is {{BLANK}}, but you need more examples to support it, so try adding a real case from the news.",
    "cn": "你的論點站得住腳,但你需要更多例子來支持它,所以試著加入一個新聞中的真實案例。"
  },
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "準確的",
    "en_def": "correct and true in every detail",
    "sentence": "The weather app is usually {{BLANK}}, but yesterday it said sunny and we got caught in heavy rain on the way home.",
    "cn": "天氣應用程式通常很準確,但昨天它說是晴天,結果我們回家路上被大雨淋到。"
  }
];

const MCQS = [
  {
    "q": "The teacher's smile _____d that she knew I had used AI, but she simply asked me to explain my answer.",
    "options": [
      "minimise",
      "imply",
      "differentiate",
      "allocate"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "From his perfect grammar, the teacher _____red that he had used an AI tool, so she asked him to rewrite it in class.",
    "options": [
      "infer",
      "restrict",
      "specify",
      "enhance"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "After a year of testing, the researchers _____d that AI tutors help weaker students most, but strong students gain less.",
    "options": [
      "highlight",
      "simulate",
      "malfunction",
      "conclude"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Machines can recognise words quickly, but they cannot always _____ jokes, so their translations sometimes sound strange.",
    "options": [
      "replace",
      "benefit",
      "interpret",
      "predict"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The school sent parents a letter to _____ the new phone rules, because many families had been confused.",
    "options": [
      "benefit",
      "clarify",
      "collaborate",
      "transcribe"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The company could not _____ the high price of its AI course, so many customers asked for their money back.",
    "options": [
      "identify",
      "illustrate",
      "implement",
      "justify"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Scientists must _____ the results of the AI study with real patients, because computer tests are not enough.",
    "options": [
      "validate",
      "affect",
      "download",
      "clone"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The museum _____ed that the famous photo was made by AI, and it removed the picture from its website.",
    "options": [
      "upgrade",
      "replace",
      "confirm",
      "fund"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The chatbot's answer _____ed what our textbook said, so we asked the teacher which source was correct.",
    "options": [
      "hack",
      "contradict",
      "overcome",
      "summarise"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Good students _____ information they read online, and they do not believe everything just because a computer says it.",
    "options": [
      "challenge",
      "affect",
      "minimise",
      "maximise"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The artist _____d the company's claim that its AI images were original, and she showed copies of her own paintings.",
    "options": [
      "incorporate",
      "benefit",
      "misuse",
      "dispute"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Parents _____d the game company because its app showed too many adverts to young children.",
    "options": [
      "comply",
      "emerge",
      "criticise",
      "customise"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The new exam system received a lot of _____, so the education department agreed to review it next year.",
    "options": [
      "telemedicine",
      "server",
      "trend",
      "criticism"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "AI companies are under close _____ from governments, because people want to know how their data is being used.",
    "options": [
      "syllabus",
      "gadget",
      "scrutiny",
      "interface"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The police are _____ing a fake video of the mayor, and they believe it was made with free AI software.",
    "options": [
      "highlight",
      "investigate",
      "transform",
      "monitor"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "A recent _____ of university students found that most use AI weekly, but many feel unsure about the rules.",
    "options": [
      "survey",
      "user",
      "graduate",
      "draft"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Companies collect huge amounts of _____ from our phones, and they use it to decide which adverts we see.",
    "options": [
      "likelihood",
      "copyright",
      "mentor",
      "data"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Government _____ show that more older people are shopping online, so banks are offering classes to help them stay safe.",
    "options": [
      "statistics",
      "divide",
      "dependence",
      "guideline"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "There is little _____ that AI apps alone improve exam results, but they seem to help when teachers guide their use.",
    "options": [
      "institution",
      "diversity",
      "evidence",
      "potential"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "We need more _____ research on AI in classrooms, because most claims so far come from companies selling the tools.",
    "options": [
      "driverless",
      "empirical",
      "diverse",
      "dystopian"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Some people think computers are more _____ than humans, but AI can also be unfair if it learns from biased data.",
    "options": [
      "adequate",
      "generative",
      "artificial",
      "objective"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Judging a poem is very _____, so many teachers do not trust AI to give fair scores for creative writing.",
    "options": [
      "subjective",
      "relevant",
      "biometric",
      "wearable"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Wikipedia can be a useful starting point, but it is not always _____, so check the sources at the bottom of the page.",
    "options": [
      "inevitable",
      "reliable",
      "accessible",
      "considerable"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Your argument is _____, but you need more examples to support it, so try adding a real case from the news.",
    "options": [
      "inevitable",
      "secondary",
      "valid",
      "precise"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The weather app is usually _____, but yesterday it said sunny and we got caught in heavy rain on the way home.",
    "options": [
      "futuristic",
      "accurate",
      "confidential",
      "anonymous"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "imply": {
    "pos": "v.",
    "en_def": "to suggest something without saying it directly",
    "cn_def": "暗示;意味著"
  },
  "infer": {
    "pos": "v.",
    "en_def": "to guess a fact from the information you have",
    "cn_def": "推斷;推論"
  },
  "conclude": {
    "pos": "v.",
    "en_def": "to decide something after thinking about the facts",
    "cn_def": "下結論;推斷"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or understand the meaning of something",
    "cn_def": "解讀;詮釋"
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
  "validate": {
    "pos": "v.",
    "en_def": "to prove that something is true or correct",
    "cn_def": "驗證;證實"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to show or say that something is definitely true",
    "cn_def": "確認;證實"
  },
  "contradict": {
    "pos": "v.",
    "en_def": "to say the opposite of what someone else has said",
    "cn_def": "與…矛盾;反駁"
  },
  "challenge": {
    "pos": "v.",
    "en_def": "to question whether something is true or right",
    "cn_def": "質疑;挑戰"
  },
  "dispute": {
    "pos": "v.",
    "en_def": "to say that something is not true or correct",
    "cn_def": "質疑;爭論"
  },
  "criticise": {
    "pos": "v.",
    "en_def": "to say what is wrong with someone or something",
    "cn_def": "批評"
  },
  "criticism": {
    "pos": "n.",
    "en_def": "comments saying what is wrong with something",
    "cn_def": "批評"
  },
  "scrutiny": {
    "pos": "n.",
    "en_def": "careful and detailed examination",
    "cn_def": "仔細審查;監督"
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to try to find out the facts about something",
    "cn_def": "調查"
  },
  "survey": {
    "pos": "n.",
    "en_def": "a set of questions asked to many people to learn their opinions",
    "cn_def": "調查;問卷"
  },
  "data": {
    "pos": "n.",
    "en_def": "facts and numbers collected for study",
    "cn_def": "數據;資料"
  },
  "statistics": {
    "pos": "n.",
    "en_def": "numbers that give information about something",
    "cn_def": "統計數字"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts that show something is true",
    "cn_def": "證據"
  },
  "empirical": {
    "pos": "adj.",
    "en_def": "based on real experiments or observation, not theory",
    "cn_def": "實證的;以經驗為依據的"
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on facts, not personal feelings",
    "cn_def": "客觀的"
  },
  "subjective": {
    "pos": "adj.",
    "en_def": "based on personal feelings or opinions",
    "cn_def": "主觀的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "可靠的"
  },
  "valid": {
    "pos": "adj.",
    "en_def": "based on good reasons or facts; acceptable",
    "cn_def": "有效的;站得住腳的"
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and true in every detail",
    "cn_def": "準確的"
  },
  "minimise": {
    "pos": "v.",
    "en_def": "to make something as small as possible",
    "cn_def": "使減到最少"
  },
  "differentiate": {
    "pos": "v.",
    "en_def": "to show or find the difference between things",
    "cn_def": "區別;區分"
  },
  "allocate": {
    "pos": "v.",
    "en_def": "to give money, time or resources for a purpose",
    "cn_def": "分配;撥款"
  },
  "restrict": {
    "pos": "v.",
    "en_def": "to limit what someone can do",
    "cn_def": "限制"
  },
  "specify": {
    "pos": "v.",
    "en_def": "to state something clearly and in detail",
    "cn_def": "明確指出;具體說明"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to improve the quality of something",
    "cn_def": "提升;增強"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to draw attention to something important",
    "cn_def": "突顯;強調"
  },
  "simulate": {
    "pos": "v.",
    "en_def": "to copy how something happens in real life using a computer",
    "cn_def": "模擬"
  },
  "malfunction": {
    "pos": "v.",
    "en_def": "to fail to work in the correct way",
    "cn_def": "故障;運作失常"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to take the place of someone or something",
    "cn_def": "取代"
  },
  "benefit": {
    "pos": "v.",
    "en_def": "to get help or an advantage from something",
    "cn_def": "受益"
  },
  "predict": {
    "pos": "v.",
    "en_def": "to say what will happen in the future",
    "cn_def": "預測"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with others",
    "cn_def": "合作"
  },
  "transcribe": {
    "pos": "v.",
    "en_def": "to write down exactly what someone says",
    "cn_def": "轉錄;謄寫"
  },
  "identify": {
    "pos": "v.",
    "en_def": "to recognise and name someone or something",
    "cn_def": "辨識;找出"
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to explain something with examples or pictures",
    "cn_def": "說明;闡明"
  },
  "implement": {
    "pos": "v.",
    "en_def": "to start using a plan or system",
    "cn_def": "實施;執行"
  },
  "affect": {
    "pos": "v.",
    "en_def": "to cause a change in someone or something",
    "cn_def": "影響"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy files from the internet onto your device",
    "cn_def": "下載"
  },
  "clone": {
    "pos": "v.",
    "en_def": "to make an exact copy of something",
    "cn_def": "複製;仿製"
  },
  "upgrade": {
    "pos": "v.",
    "en_def": "to make a machine or program newer and better",
    "cn_def": "升級"
  },
  "fund": {
    "pos": "v.",
    "en_def": "to provide money for something",
    "cn_def": "資助;提供資金"
  },
  "hack": {
    "pos": "v.",
    "en_def": "to secretly get into someone's computer or account",
    "cn_def": "入侵(電腦);駭入"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem",
    "cn_def": "克服"
  },
  "summarise": {
    "pos": "v.",
    "en_def": "to give the main points in a short form",
    "cn_def": "總結;摘要"
  },
  "maximise": {
    "pos": "v.",
    "en_def": "to make something as large as possible",
    "cn_def": "使最大化"
  },
  "incorporate": {
    "pos": "v.",
    "en_def": "to include something as part of a larger thing",
    "cn_def": "納入;結合"
  },
  "misuse": {
    "pos": "v.",
    "en_def": "to use something in a wrong or harmful way",
    "cn_def": "濫用;誤用"
  },
  "comply": {
    "pos": "v.",
    "en_def": "to obey a rule or request",
    "cn_def": "遵守;服從"
  },
  "emerge": {
    "pos": "v.",
    "en_def": "to appear or become known",
    "cn_def": "出現;浮現"
  },
  "customise": {
    "pos": "v.",
    "en_def": "to change something to suit your own needs",
    "cn_def": "客製化;自訂"
  },
  "telemedicine": {
    "pos": "n.",
    "en_def": "seeing a doctor through video or phone instead of in person",
    "cn_def": "遠距醫療"
  },
  "server": {
    "pos": "n.",
    "en_def": "a powerful computer that stores data and runs services for others",
    "cn_def": "伺服器"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which things are changing",
    "cn_def": "趨勢"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of topics and plans for a course",
    "cn_def": "課程大綱"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small useful machine or tool",
    "cn_def": "小裝置;小玩意兒"
  },
  "interface": {
    "pos": "n.",
    "en_def": "the part of a program that a user sees and uses",
    "cn_def": "介面"
  },
  "transform": {
    "pos": "v.",
    "en_def": "to change something completely, usually to improve it",
    "cn_def": "改變;轉變"
  },
  "monitor": {
    "pos": "v.",
    "en_def": "to watch or check something over a period of time",
    "cn_def": "監控;監測"
  },
  "user": {
    "pos": "n.",
    "en_def": "a person who uses a product or service",
    "cn_def": "使用者;用戶"
  },
  "graduate": {
    "pos": "n.",
    "en_def": "a person who has finished a degree",
    "cn_def": "畢業生"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing",
    "cn_def": "草稿"
  },
  "likelihood": {
    "pos": "n.",
    "en_def": "how probable something is",
    "cn_def": "可能性"
  },
  "copyright": {
    "pos": "n.",
    "en_def": "the legal right to own and control creative work",
    "cn_def": "著作權;版權"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises someone younger",
    "cn_def": "導師;良師"
  },
  "divide": {
    "pos": "n.",
    "en_def": "a large difference between two groups",
    "cn_def": "差距;鴻溝"
  },
  "dependence": {
    "pos": "n.",
    "en_def": "needing something so much that you cannot do without it",
    "cn_def": "依賴"
  },
  "guideline": {
    "pos": "n.",
    "en_def": "advice or a rule about how to do something",
    "cn_def": "指引;準則"
  },
  "institution": {
    "pos": "n.",
    "en_def": "a large important organisation, like a university or bank",
    "cn_def": "機構"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of many different people or things",
    "cn_def": "多樣性"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility of developing or being useful in the future",
    "cn_def": "潛力;可能性"
  },
  "driverless": {
    "pos": "adj.",
    "en_def": "working without a human driver",
    "cn_def": "無人駕駛的"
  },
  "diverse": {
    "pos": "adj.",
    "en_def": "including many different types of people or things",
    "cn_def": "多樣的;多元的"
  },
  "dystopian": {
    "pos": "adj.",
    "en_def": "describing a frightening imagined future where life is bad",
    "cn_def": "反烏托邦的"
  },
  "adequate": {
    "pos": "adj.",
    "en_def": "enough or good enough for a purpose",
    "cn_def": "足夠的;適當的"
  },
  "generative": {
    "pos": "adj.",
    "en_def": "able to create new text, pictures or sound",
    "cn_def": "生成式的"
  },
  "artificial": {
    "pos": "adj.",
    "en_def": "made by people, not natural",
    "cn_def": "人造的;人工的"
  },
  "relevant": {
    "pos": "adj.",
    "en_def": "connected to what is being discussed",
    "cn_def": "相關的"
  },
  "biometric": {
    "pos": "adj.",
    "en_def": "using body features like fingerprints or faces to identify people",
    "cn_def": "生物辨識的"
  },
  "wearable": {
    "pos": "adj.",
    "en_def": "designed to be worn on the body",
    "cn_def": "可穿戴的"
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen and impossible to avoid",
    "cn_def": "不可避免的"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, use or understand",
    "cn_def": "易取得的;無障礙的"
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "fairly large in size or amount",
    "cn_def": "相當大的"
  },
  "secondary": {
    "pos": "adj.",
    "en_def": "less important than something else",
    "cn_def": "次要的"
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact and clear in every detail",
    "cn_def": "精確的"
  },
  "futuristic": {
    "pos": "adj.",
    "en_def": "very modern and seeming to come from the future",
    "cn_def": "未來感的"
  },
  "confidential": {
    "pos": "adj.",
    "en_def": "meant to be kept secret",
    "cn_def": "機密的"
  },
  "anonymous": {
    "pos": "adj.",
    "en_def": "with a name that is not known or not shown",
    "cn_def": "匿名的"
  }
};

const EXTRA_GLOSSES = {};
