// Topic 1 Subunit 6 Quiz Data: Ethics, Bias & Regulation 倫理、偏見與規範
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S06 - Ethics, Bias & Regulation 倫理、偏見與規範",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ethics",
    "pos": "n.",
    "cn_def": "倫理;道德規範",
    "en_def": "moral rules about what is right and wrong",
    "sentence": "Our class discussed the {{BLANK}} of using AI in hospitals, because a wrong decision by a machine could hurt a patient.",
    "cn": "我們班討論了在醫院使用人工智慧的倫理問題,因為機器做出錯誤決定可能會傷害病人。"
  },
  {
    "word": "ethical",
    "pos": "adj.",
    "cn_def": "合乎道德的;倫理的",
    "en_def": "morally right or acceptable",
    "sentence": "Is it {{BLANK}} to use AI to write a love letter, or should those words always come from your own heart?",
    "cn": "用人工智慧寫情書是合乎道德的嗎?還是那些話應該永遠出自你自己的內心?"
  },
  {
    "word": "bias",
    "pos": "n.",
    "cn_def": "偏見;偏差",
    "en_def": "unfair support for or against a group",
    "sentence": "The hiring program showed {{BLANK}} against women, because it had learned from old records in which most staff were men.",
    "cn": "這個招聘程式顯示出對女性的偏見,因為它是從大多數員工都是男性的舊紀錄中學習的。"
  },
  {
    "word": "biased",
    "pos": "adj.",
    "cn_def": "有偏見的;偏頗的",
    "en_def": "unfairly favouring one side or group",
    "sentence": "The AI gave {{BLANK}} answers about some countries, so the teacher reminded us to compare several sources.",
    "cn": "人工智慧對某些國家給出了偏頗的答案,所以老師提醒我們要比較多個資料來源。"
  },
  {
    "word": "discriminate",
    "pos": "v.",
    "cn_def": "歧視",
    "en_def": "to treat a person or group unfairly",
    "sentence": "Banks must make sure their AI does not {{BLANK}} against older people, because everyone deserves a fair chance at a loan.",
    "cn": "銀行必須確保它們的人工智慧不會歧視年長者,因為每個人都應該有公平申請貸款的機會。"
  },
  {
    "word": "discrimination",
    "pos": "n.",
    "cn_def": "歧視",
    "en_def": "unfair treatment of people because of who they are",
    "sentence": "Some job seekers faced {{BLANK}} because of their accent, so the company stopped using the voice-checking software.",
    "cn": "有些求職者因為口音而受到歧視,所以公司停止使用那個語音檢測軟體。"
  },
  {
    "word": "fairness",
    "pos": "n.",
    "cn_def": "公平",
    "en_def": "treating people equally and in the right way",
    "sentence": "Parents questioned the {{BLANK}} of AI grading, because their children received low scores for creative but unusual answers.",
    "cn": "家長質疑人工智慧評分的公平性,因為他們的孩子因富有創意但不尋常的答案而拿到低分。"
  },
  {
    "word": "transparent",
    "pos": "adj.",
    "cn_def": "透明的;公開的",
    "en_def": "open and easy to understand, with nothing hidden",
    "sentence": "Companies should be {{BLANK}} about how their AI makes decisions, so users can understand why they were refused.",
    "cn": "公司應該對人工智慧如何做決定保持透明,這樣使用者才能理解自己為何被拒絕。"
  },
  {
    "word": "transparency",
    "pos": "n.",
    "cn_def": "透明度",
    "en_def": "openness about how decisions are made",
    "sentence": "The public is asking for more {{BLANK}} from tech companies, because nobody knows exactly what data their AI was trained on.",
    "cn": "大眾要求科技公司提高透明度,因為沒有人確切知道它們的人工智慧是用什麼資料訓練的。"
  },
  {
    "word": "accountable",
    "pos": "adj.",
    "cn_def": "應負責任的",
    "en_def": "responsible for your actions and able to explain them",
    "sentence": "If a self-driving car causes an accident, who should be held {{BLANK}}, the driver or the company that made it?",
    "cn": "如果自駕車造成事故,誰該負責,是駕駛還是製造它的公司?"
  },
  {
    "word": "accountability",
    "pos": "n.",
    "cn_def": "問責;責任歸屬",
    "en_def": "being responsible for decisions and their results",
    "sentence": "There is little {{BLANK}} when an algorithm makes a mistake, so lawmakers want clear rules about who must pay.",
    "cn": "當演算法出錯時幾乎沒有責任歸屬,所以立法者希望明確規定誰必須賠償。"
  },
  {
    "word": "regulate",
    "pos": "v.",
    "cn_def": "規範;管制",
    "en_def": "to control something with official rules",
    "sentence": "Many countries are trying to {{BLANK}} AI, but technology changes so quickly that new laws are soon out of date.",
    "cn": "許多國家正試圖規範人工智慧,但科技變化太快,新法律很快就過時了。"
  },
  {
    "word": "regulator",
    "pos": "n.",
    "cn_def": "監管機構",
    "en_def": "an official group that makes sure rules are followed",
    "sentence": "The {{BLANK}} fined the app company because it had collected children's voices without asking their parents.",
    "cn": "監管機構對這家應用程式公司開罰,因為它沒有詢問家長就蒐集了兒童的聲音。"
  },
  {
    "word": "legislation",
    "pos": "n.",
    "cn_def": "法規;立法",
    "en_def": "a law or group of laws",
    "sentence": "New {{BLANK}} requires AI-made videos to carry a label, so viewers know that what they are watching is not real.",
    "cn": "新的法規要求人工智慧製作的影片必須加上標示,讓觀眾知道他們看的不是真的。"
  },
  {
    "word": "ban",
    "pos": "v.",
    "cn_def": "禁止",
    "en_def": "to officially say something is not allowed",
    "sentence": "Some schools {{BLANK}} phones during lessons, while others allow them because students use them for learning apps.",
    "cn": "有些學校在上課時禁止使用手機,而其他學校則允許,因為學生會用它們來使用學習應用程式。"
  },
  {
    "word": "copyright",
    "pos": "n.",
    "cn_def": "著作權;版權",
    "en_def": "the legal right to own and control creative work",
    "sentence": "Artists say AI companies broke {{BLANK}} laws by using their paintings to train machines, and some have gone to court.",
    "cn": "藝術家們說人工智慧公司用他們的畫作訓練機器違反了著作權法,有些人已經告上法院。"
  },
  {
    "word": "misuse",
    "pos": "v.",
    "cn_def": "濫用;誤用",
    "en_def": "to use something in a wrong or harmful way",
    "sentence": "If people {{BLANK}} AI to make fake news, it becomes harder for everyone to trust what they read online.",
    "cn": "如果人們濫用人工智慧製造假新聞,每個人就更難相信他們在網路上讀到的內容。"
  },
  {
    "word": "manipulate",
    "pos": "v.",
    "cn_def": "操弄;操縱",
    "en_def": "to control people or facts in a dishonest way",
    "sentence": "Some apps {{BLANK}} users into spending more time online, because the companies earn more money from longer visits.",
    "cn": "有些應用程式操弄使用者花更多時間上網,因為公司能從更長的瀏覽時間中賺更多錢。"
  },
  {
    "word": "manipulation",
    "pos": "n.",
    "cn_def": "操縱;竄改",
    "en_def": "dishonest control of people, facts or images",
    "sentence": "Photo {{BLANK}} is now so easy with AI that a single image can no longer prove that something really happened.",
    "cn": "有了人工智慧,照片竄改變得非常容易,以至於單一張圖片已無法證明某件事真的發生過。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責任的",
    "en_def": "careful and sensible in how you behave",
    "sentence": "A {{BLANK}} AI user checks facts before sharing them, because chatbots sometimes give answers that sound right but are wrong.",
    "cn": "一位負責任的人工智慧使用者在分享前會先查核事實,因為聊天機器人有時會給出聽起來正確但其實錯誤的答案。"
  },
  {
    "word": "oversight",
    "pos": "n.",
    "cn_def": "監督",
    "en_def": "the job of watching and checking that something is done properly",
    "sentence": "Doctors say AI must work under human {{BLANK}}, because a computer cannot take responsibility for a patient's life.",
    "cn": "醫生們說人工智慧必須在人類的監督下運作,因為電腦無法為病人的生命負責。"
  },
  {
    "word": "guideline",
    "pos": "n.",
    "cn_def": "指引;準則",
    "en_def": "advice or a rule about how to do something",
    "sentence": "The school published clear {{BLANK}}s on AI use, so students know when it is allowed and when it counts as cheating.",
    "cn": "學校公布了清楚的人工智慧使用準則,讓學生知道什麼時候可以用、什麼時候算作弊。"
  },
  {
    "word": "loophole",
    "pos": "n.",
    "cn_def": "漏洞",
    "en_def": "a gap in a rule that lets people avoid it",
    "sentence": "The company found a {{BLANK}} in the law, so it could keep users' data for years without breaking any rules.",
    "cn": "這家公司找到法律的漏洞,所以它能保存使用者的資料好幾年而不違反任何規定。"
  },
  {
    "word": "lawsuit",
    "pos": "n.",
    "cn_def": "訴訟",
    "en_def": "a case brought to a court of law",
    "sentence": "A group of writers started a {{BLANK}} against the AI firm, because it had used their books without paying them.",
    "cn": "一群作家對這家人工智慧公司提起訴訟,因為它未付費就使用了他們的書。"
  },
  {
    "word": "prejudice",
    "pos": "n.",
    "cn_def": "偏見;成見",
    "en_def": "an unfair opinion formed without enough knowledge",
    "sentence": "AI systems can repeat human {{BLANK}} if they learn from unfair data, so developers must test them very carefully.",
    "cn": "如果人工智慧系統從不公平的資料中學習,就可能複製人類的偏見,所以開發者必須非常仔細地測試它們。"
  },
  {
    "word": "stereotype",
    "pos": "n.",
    "cn_def": "刻板印象",
    "en_def": "a fixed, too-simple idea about a group of people",
    "sentence": "When we asked the AI to draw a nurse, it always drew a woman, which shows a common gender {{BLANK}}.",
    "cn": "當我們請人工智慧畫一位護理師時,它總是畫出女性,這顯示了一種常見的性別刻板印象。"
  },
  {
    "word": "exploit",
    "pos": "v.",
    "cn_def": "剝削;利用",
    "en_def": "to use someone or something unfairly for your own gain",
    "sentence": "Some companies {{BLANK}} low-paid workers to label training data, and these workers often see upsetting images all day.",
    "cn": "有些公司剝削低薪工人來標記訓練資料,而這些工人經常整天看到令人不安的圖片。"
  },
  {
    "word": "misinformation",
    "pos": "n.",
    "cn_def": "錯誤訊息",
    "en_def": "wrong information that is spread, often by mistake",
    "sentence": "During the election, {{BLANK}} spread quickly on social media, so many voters were confused about the real facts.",
    "cn": "選舉期間,錯誤訊息在社群媒體上迅速散播,所以許多選民對真實情況感到困惑。"
  }
];

const MCQS = [
  {
    "q": "Our class discussed the _____ of using AI in hospitals, because a wrong decision by a machine could hurt a patient.",
    "options": [
      "ethics",
      "wage",
      "gig",
      "draft"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Is it _____ to use AI to write a love letter, or should those words always come from your own heart?",
    "options": [
      "adequate",
      "substantial",
      "ethical",
      "inconsistent"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The hiring program showed _____ against women, because it had learned from old records in which most staff were men.",
    "options": [
      "syllabus",
      "bias",
      "investor",
      "certificate"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The AI gave _____ answers about some countries, so the teacher reminded us to compare several sources.",
    "options": [
      "vital",
      "consistent",
      "biometric",
      "biased"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Banks must make sure their AI does not _____ against older people, because everyone deserves a fair chance at a loan.",
    "options": [
      "discriminate",
      "argue",
      "revolutionise",
      "establish"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Some job seekers faced _____ because of their accent, so the company stopped using the voice-checking software.",
    "options": [
      "function",
      "discrimination",
      "statistics",
      "startup"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Parents questioned the _____ of AI grading, because their children received low scores for creative but unusual answers.",
    "options": [
      "hardware",
      "premise",
      "gadget",
      "fairness"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Companies should be _____ about how their AI makes decisions, so users can understand why they were refused.",
    "options": [
      "sufficient",
      "driverless",
      "transparent",
      "valid"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The public is asking for more _____ from tech companies, because nobody knows exactly what data their AI was trained on.",
    "options": [
      "transparency",
      "cyberattack",
      "chatbot",
      "workforce"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "If a self-driving car causes an accident, who should be held _____, the driver or the company that made it?",
    "options": [
      "reliable",
      "empirical",
      "considerable",
      "accountable"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "There is little _____ when an algorithm makes a mistake, so lawmakers want clear rules about who must pay.",
    "options": [
      "capability",
      "paradox",
      "accountability",
      "alternative"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Many countries are trying to _____ AI, but technology changes so quickly that new laws are soon out of date.",
    "options": [
      "enhance",
      "regulate",
      "analyse",
      "illustrate"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The _____ fined the app company because it had collected children's voices without asking their parents.",
    "options": [
      "cloud",
      "certificate",
      "regulator",
      "prompt"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "New _____ requires AI-made videos to carry a label, so viewers know that what they are watching is not real.",
    "options": [
      "legislation",
      "identity",
      "prompt",
      "shortage"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Some schools _____ phones during lessons, while others allow them because students use them for learning apps.",
    "options": [
      "evolve",
      "demonstrate",
      "digitise",
      "ban"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Artists say AI companies broke _____ laws by using their paintings to train machines, and some have gone to court.",
    "options": [
      "consent",
      "copyright",
      "household",
      "limitation"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "If people _____ AI to make fake news, it becomes harder for everyone to trust what they read online.",
    "options": [
      "justify",
      "encrypt",
      "influence",
      "misuse"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Some apps _____ users into spending more time online, because the companies earn more money from longer visits.",
    "options": [
      "edit",
      "manipulate",
      "differentiate",
      "track"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Photo _____ is now so easy with AI that a single image can no longer prove that something really happened.",
    "options": [
      "component",
      "software",
      "manipulation",
      "method"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "A _____ AI user checks facts before sharing them, because chatbots sometimes give answers that sound right but are wrong.",
    "options": [
      "responsible",
      "scarce",
      "synthetic",
      "innovative"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Doctors say AI must work under human _____, because a computer cannot take responsibility for a patient's life.",
    "options": [
      "barrier",
      "strategy",
      "oversight",
      "server"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The school published clear _____s on AI use, so students know when it is allowed and when it counts as cheating.",
    "options": [
      "warehouse",
      "guideline",
      "barrier",
      "principle"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The company found a _____ in the law, so it could keep users' data for years without breaking any rules.",
    "options": [
      "loophole",
      "lecturer",
      "literacy",
      "certificate"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "A group of writers started a _____ against the AI firm, because it had used their books without paying them.",
    "options": [
      "diversity",
      "lecture",
      "gig",
      "lawsuit"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "AI systems can repeat human _____ if they learn from unfair data, so developers must test them very carefully.",
    "options": [
      "prejudice",
      "inequality",
      "limitation",
      "drone"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "When we asked the AI to draw a nurse, it always drew a woman, which shows a common gender _____.",
    "options": [
      "workforce",
      "stereotype",
      "phishing",
      "tutoring"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Some companies _____ low-paid workers to label training data, and these workers often see upsetting images all day.",
    "options": [
      "implement",
      "transform",
      "contradict",
      "exploit"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "During the election, _____ spread quickly on social media, so many voters were confused about the real facts.",
    "options": [
      "assessment",
      "entrepreneur",
      "misinformation",
      "draft"
    ],
    "answer": 2,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "ethics": {
    "pos": "n.",
    "en_def": "moral rules about what is right and wrong",
    "cn_def": "倫理;道德規範"
  },
  "ethical": {
    "pos": "adj.",
    "en_def": "morally right or acceptable",
    "cn_def": "合乎道德的;倫理的"
  },
  "bias": {
    "pos": "n.",
    "en_def": "unfair support for or against a group",
    "cn_def": "偏見;偏差"
  },
  "biased": {
    "pos": "adj.",
    "en_def": "unfairly favouring one side or group",
    "cn_def": "有偏見的;偏頗的"
  },
  "discriminate": {
    "pos": "v.",
    "en_def": "to treat a person or group unfairly",
    "cn_def": "歧視"
  },
  "discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment of people because of who they are",
    "cn_def": "歧視"
  },
  "fairness": {
    "pos": "n.",
    "en_def": "treating people equally and in the right way",
    "cn_def": "公平"
  },
  "transparent": {
    "pos": "adj.",
    "en_def": "open and easy to understand, with nothing hidden",
    "cn_def": "透明的;公開的"
  },
  "transparency": {
    "pos": "n.",
    "en_def": "openness about how decisions are made",
    "cn_def": "透明度"
  },
  "accountable": {
    "pos": "adj.",
    "en_def": "responsible for your actions and able to explain them",
    "cn_def": "應負責任的"
  },
  "accountability": {
    "pos": "n.",
    "en_def": "being responsible for decisions and their results",
    "cn_def": "問責;責任歸屬"
  },
  "regulate": {
    "pos": "v.",
    "en_def": "to control something with official rules",
    "cn_def": "規範;管制"
  },
  "regulator": {
    "pos": "n.",
    "en_def": "an official group that makes sure rules are followed",
    "cn_def": "監管機構"
  },
  "legislation": {
    "pos": "n.",
    "en_def": "a law or group of laws",
    "cn_def": "法規;立法"
  },
  "ban": {
    "pos": "v.",
    "en_def": "to officially say something is not allowed",
    "cn_def": "禁止"
  },
  "copyright": {
    "pos": "n.",
    "en_def": "the legal right to own and control creative work",
    "cn_def": "著作權;版權"
  },
  "misuse": {
    "pos": "v.",
    "en_def": "to use something in a wrong or harmful way",
    "cn_def": "濫用;誤用"
  },
  "manipulate": {
    "pos": "v.",
    "en_def": "to control people or facts in a dishonest way",
    "cn_def": "操弄;操縱"
  },
  "manipulation": {
    "pos": "n.",
    "en_def": "dishonest control of people, facts or images",
    "cn_def": "操縱;竄改"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "careful and sensible in how you behave",
    "cn_def": "負責任的"
  },
  "oversight": {
    "pos": "n.",
    "en_def": "the job of watching and checking that something is done properly",
    "cn_def": "監督"
  },
  "guideline": {
    "pos": "n.",
    "en_def": "advice or a rule about how to do something",
    "cn_def": "指引;準則"
  },
  "loophole": {
    "pos": "n.",
    "en_def": "a gap in a rule that lets people avoid it",
    "cn_def": "漏洞"
  },
  "lawsuit": {
    "pos": "n.",
    "en_def": "a case brought to a court of law",
    "cn_def": "訴訟"
  },
  "prejudice": {
    "pos": "n.",
    "en_def": "an unfair opinion formed without enough knowledge",
    "cn_def": "偏見;成見"
  },
  "stereotype": {
    "pos": "n.",
    "en_def": "a fixed, too-simple idea about a group of people",
    "cn_def": "刻板印象"
  },
  "exploit": {
    "pos": "v.",
    "en_def": "to use someone or something unfairly for your own gain",
    "cn_def": "剝削;利用"
  },
  "misinformation": {
    "pos": "n.",
    "en_def": "wrong information that is spread, often by mistake",
    "cn_def": "錯誤訊息"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid to a worker, usually by the hour or week",
    "cn_def": "工資"
  },
  "gig": {
    "pos": "n.",
    "en_def": "a short job or piece of paid work",
    "cn_def": "零工;臨時工作"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing",
    "cn_def": "草稿"
  },
  "adequate": {
    "pos": "adj.",
    "en_def": "enough or good enough for a purpose",
    "cn_def": "足夠的;適當的"
  },
  "substantial": {
    "pos": "adj.",
    "en_def": "large in amount or importance",
    "cn_def": "大量的;可觀的"
  },
  "inconsistent": {
    "pos": "adj.",
    "en_def": "not staying the same; changing in a confusing way",
    "cn_def": "不一致的;前後矛盾的"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of topics and plans for a course",
    "cn_def": "課程大綱"
  },
  "investor": {
    "pos": "n.",
    "en_def": "a person who puts money into a business to make more money",
    "cn_def": "投資人"
  },
  "certificate": {
    "pos": "n.",
    "en_def": "an official paper that shows you completed a course",
    "cn_def": "證書"
  },
  "vital": {
    "pos": "adj.",
    "en_def": "extremely important and necessary",
    "cn_def": "極為重要的"
  },
  "consistent": {
    "pos": "adj.",
    "en_def": "always behaving or happening in the same way",
    "cn_def": "一致的;始終如一的"
  },
  "biometric": {
    "pos": "adj.",
    "en_def": "using body features like fingerprints or faces to identify people",
    "cn_def": "生物辨識的"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "revolutionise": {
    "pos": "v.",
    "en_def": "to change something completely and in a big way",
    "cn_def": "徹底改變"
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something that will last",
    "cn_def": "建立;設立"
  },
  "function": {
    "pos": "n.",
    "en_def": "the job that something is designed to do",
    "cn_def": "功能"
  },
  "statistics": {
    "pos": "n.",
    "en_def": "numbers that give information about something",
    "cn_def": "統計數字"
  },
  "startup": {
    "pos": "n.",
    "en_def": "a new small company, often in technology",
    "cn_def": "新創公司"
  },
  "hardware": {
    "pos": "n.",
    "en_def": "the physical parts of a computer, like the screen and keyboard",
    "cn_def": "硬體"
  },
  "premise": {
    "pos": "n.",
    "en_def": "an idea that an argument or plan is based on",
    "cn_def": "前提"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small useful machine or tool",
    "cn_def": "小裝置;小玩意兒"
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough for a particular purpose",
    "cn_def": "充足的;足夠的"
  },
  "driverless": {
    "pos": "adj.",
    "en_def": "working without a human driver",
    "cn_def": "無人駕駛的"
  },
  "valid": {
    "pos": "adj.",
    "en_def": "based on good reasons or facts; acceptable",
    "cn_def": "有效的;站得住腳的"
  },
  "cyberattack": {
    "pos": "n.",
    "en_def": "an attack on computer systems through the internet",
    "cn_def": "網路攻擊"
  },
  "chatbot": {
    "pos": "n.",
    "en_def": "a computer program that talks with people using text or voice",
    "cn_def": "聊天機器人"
  },
  "workforce": {
    "pos": "n.",
    "en_def": "all the people who work in a company or country",
    "cn_def": "勞動力;全體員工"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "可靠的"
  },
  "empirical": {
    "pos": "adj.",
    "en_def": "based on real experiments or observation, not theory",
    "cn_def": "實證的;以經驗為依據的"
  },
  "considerable": {
    "pos": "adj.",
    "en_def": "fairly large in size or amount",
    "cn_def": "相當大的"
  },
  "capability": {
    "pos": "n.",
    "en_def": "the ability to do something",
    "cn_def": "能力;性能"
  },
  "paradox": {
    "pos": "n.",
    "en_def": "a situation that seems strange because it has two opposite facts",
    "cn_def": "矛盾;悖論"
  },
  "alternative": {
    "pos": "n.",
    "en_def": "another choice or possibility",
    "cn_def": "替代方案;選擇"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to improve the quality of something",
    "cn_def": "提升;增強"
  },
  "analyse": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to explain something with examples or pictures",
    "cn_def": "說明;闡明"
  },
  "cloud": {
    "pos": "n.",
    "en_def": "online storage and services on distant computers",
    "cn_def": "雲端"
  },
  "prompt": {
    "pos": "n.",
    "en_def": "the instruction or question you type into an AI tool",
    "cn_def": "提示詞;指令"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person is; their name and personal details",
    "cn_def": "身分"
  },
  "shortage": {
    "pos": "n.",
    "en_def": "a situation where there is not enough of something",
    "cn_def": "短缺;不足"
  },
  "evolve": {
    "pos": "v.",
    "en_def": "to develop and change slowly over time",
    "cn_def": "演變;逐步發展"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show clearly that something is true or how it works",
    "cn_def": "證明;示範"
  },
  "digitise": {
    "pos": "v.",
    "en_def": "to change paper documents or pictures into computer files",
    "cn_def": "數位化"
  },
  "consent": {
    "pos": "n.",
    "en_def": "permission to do something",
    "cn_def": "同意;許可"
  },
  "household": {
    "pos": "n.",
    "en_def": "all the people who live together in one home",
    "cn_def": "家庭;家戶"
  },
  "limitation": {
    "pos": "n.",
    "en_def": "a weakness or a point beyond which something cannot go",
    "cn_def": "局限;限制"
  },
  "justify": {
    "pos": "v.",
    "en_def": "to give good reasons for something",
    "cn_def": "證明…合理;為…辯護"
  },
  "encrypt": {
    "pos": "v.",
    "en_def": "to put information into a secret code",
    "cn_def": "將…加密"
  },
  "influence": {
    "pos": "v.",
    "en_def": "to have an effect on how someone thinks or acts",
    "cn_def": "影響"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve a piece of writing or a video",
    "cn_def": "編輯;修改"
  },
  "differentiate": {
    "pos": "v.",
    "en_def": "to show or find the difference between things",
    "cn_def": "區別;區分"
  },
  "track": {
    "pos": "v.",
    "en_def": "to follow where someone goes or what they do",
    "cn_def": "追蹤"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts that make up a machine or system",
    "cn_def": "零件;組成部分"
  },
  "software": {
    "pos": "n.",
    "en_def": "programs that tell a computer what to do",
    "cn_def": "軟體"
  },
  "method": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "方法"
  },
  "scarce": {
    "pos": "adj.",
    "en_def": "not easy to find; not enough",
    "cn_def": "稀少的;缺乏的"
  },
  "synthetic": {
    "pos": "adj.",
    "en_def": "made artificially, not natural or real",
    "cn_def": "合成的;人造的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new ideas or methods",
    "cn_def": "創新的"
  },
  "barrier": {
    "pos": "n.",
    "en_def": "something that stops people from doing or getting something",
    "cn_def": "障礙;隔閡"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan for reaching a goal",
    "cn_def": "策略"
  },
  "server": {
    "pos": "n.",
    "en_def": "a powerful computer that stores data and runs services for others",
    "cn_def": "伺服器"
  },
  "warehouse": {
    "pos": "n.",
    "en_def": "a large building where goods are stored",
    "cn_def": "倉庫"
  },
  "principle": {
    "pos": "n.",
    "en_def": "a basic rule or belief",
    "cn_def": "原則"
  },
  "lecturer": {
    "pos": "n.",
    "en_def": "a teacher at a university",
    "cn_def": "(大學)講師"
  },
  "literacy": {
    "pos": "n.",
    "en_def": "the ability to read and write, or skill in an area",
    "cn_def": "讀寫能力;素養"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of many different people or things",
    "cn_def": "多樣性"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to students on a subject",
    "cn_def": "講課;演講"
  },
  "inequality": {
    "pos": "n.",
    "en_def": "an unfair difference between groups of people",
    "cn_def": "不平等"
  },
  "drone": {
    "pos": "n.",
    "en_def": "a small aircraft without a pilot, controlled from the ground",
    "cn_def": "無人機"
  },
  "phishing": {
    "pos": "n.",
    "en_def": "fake messages that try to steal passwords or bank details",
    "cn_def": "網路釣魚"
  },
  "tutoring": {
    "pos": "n.",
    "en_def": "extra private teaching for one student or a small group",
    "cn_def": "課業輔導;家教"
  },
  "implement": {
    "pos": "v.",
    "en_def": "to start using a plan or system",
    "cn_def": "實施;執行"
  },
  "transform": {
    "pos": "v.",
    "en_def": "to change something completely, usually to improve it",
    "cn_def": "改變;轉變"
  },
  "contradict": {
    "pos": "v.",
    "en_def": "to say the opposite of what someone else has said",
    "cn_def": "與…矛盾;反駁"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "a test or judgement of how well someone has learned",
    "cn_def": "評量;評估"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts their own business",
    "cn_def": "創業家;企業家"
  }
};

const EXTRA_GLOSSES = {};
