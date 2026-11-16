// Topic 1 Subunit 10 Quiz Data: Academic Words 學術單字 3 (function – indicate)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S10 - Academic Words 學術單字 3 (function – indicate)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "function",
    "pos": "n.",
    "cn_def": "功能",
    "en_def": "the job that something is designed to do",
    "sentence": "The most useful {{BLANK}} of the app is the voice reader, because I can listen to articles while I walk to school.",
    "cn": "這個應用程式最有用的功能是語音朗讀,因為我走路上學時可以聽文章。"
  },
  {
    "word": "mechanism",
    "pos": "n.",
    "cn_def": "機制",
    "en_def": "a system or process that does a particular job",
    "sentence": "The website has a {{BLANK}} for reporting fake news, but few users know where to find the button.",
    "cn": "這個網站有一套檢舉假新聞的機制,但很少使用者知道去哪裡找那個按鈕。"
  },
  {
    "word": "procedure",
    "pos": "n.",
    "cn_def": "程序;步驟",
    "en_def": "the official way of doing something",
    "sentence": "The school has a clear {{BLANK}} for reporting online bullying, so students know exactly whom to talk to.",
    "cn": "學校有一套清楚的網路霸凌通報程序,所以學生確切知道該找誰談。"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法",
    "en_def": "a way of doing something",
    "sentence": "The flashcard {{BLANK}} works well for memorising words, but you also need to read a lot to use them naturally.",
    "cn": "字卡方法很適合背單字,但你也需要大量閱讀才能自然地運用它們。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a plan for reaching a goal",
    "sentence": "A good study {{BLANK}} is to test yourself often, because simply reading notes again does not help you remember much.",
    "cn": "一個好的讀書策略是常常自我測驗,因為只是重讀筆記並不太能幫助你記憶。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧",
    "en_def": "a special way of doing something that needs skill",
    "sentence": "Our teacher showed us a {{BLANK}} for checking facts online, and now I always compare three sources before I believe something.",
    "cn": "老師教我們一個網路查證的技巧,現在我在相信某件事之前總會比對三個資料來源。"
  },
  {
    "word": "principle",
    "pos": "n.",
    "cn_def": "原則",
    "en_def": "a basic rule or belief",
    "sentence": "The company follows one simple {{BLANK}}: a human must check every decision before the AI's answer is sent to a customer.",
    "cn": "這家公司遵守一個簡單的原則:在人工智慧的答案送給顧客之前,必須由人檢查每一個決定。"
  },
  {
    "word": "concept",
    "pos": "n.",
    "cn_def": "概念",
    "en_def": "an idea or general understanding of something",
    "sentence": "The {{BLANK}} of a robot teacher sounded strange ten years ago, but now some schools are already testing it.",
    "cn": "機器人老師的概念十年前聽起來很奇怪,但現在有些學校已經在測試了。"
  },
  {
    "word": "theory",
    "pos": "n.",
    "cn_def": "理論",
    "en_def": "an idea that tries to explain something",
    "sentence": "One {{BLANK}} says that people trust machines more than humans, but recent studies show the opposite is often true.",
    "cn": "有一種理論說人們比較相信機器而不是人類,但最近的研究顯示事實往往相反。"
  },
  {
    "word": "assumption",
    "pos": "n.",
    "cn_def": "假設;假定",
    "en_def": "something you believe is true without proof",
    "sentence": "Many people make the {{BLANK}} that computers are never wrong, so they do not check the answers they receive.",
    "cn": "許多人假定電腦永遠不會出錯,所以他們不檢查收到的答案。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假定;認為",
    "en_def": "to think something is true without checking",
    "sentence": "Don't {{BLANK}} that a website is reliable just because it looks professional, because many fake sites look very real.",
    "cn": "不要只因為網站看起來很專業就認定它可靠,因為許多假網站看起來非常逼真。"
  },
  {
    "word": "premise",
    "pos": "n.",
    "cn_def": "前提",
    "en_def": "an idea that an argument or plan is based on",
    "sentence": "The film's {{BLANK}} is that robots have taken all human jobs, and the story follows one family trying to survive.",
    "cn": "這部電影的前提是機器人已經取代了人類所有的工作,而故事描述一家人努力求生。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "觀點;角度",
    "en_def": "a way of thinking about something",
    "sentence": "Talking to older workers gave me a new {{BLANK}} on AI, because they remember how computers changed offices before.",
    "cn": "和年長的員工聊天讓我對人工智慧有了新的觀點,因為他們記得電腦以前如何改變辦公室。"
  },
  {
    "word": "stance",
    "pos": "n.",
    "cn_def": "立場",
    "en_def": "a public opinion on an issue",
    "sentence": "The school has taken a clear {{BLANK}} on AI: students may use it for practice, but not for graded work.",
    "cn": "學校對人工智慧採取了明確的立場:學生可以用它來練習,但不能用在要打分數的作業上。"
  },
  {
    "word": "argue",
    "pos": "v.",
    "cn_def": "主張;論證",
    "en_def": "to give reasons to support an opinion",
    "sentence": "Some experts {{BLANK}} that AI will create more jobs than it destroys, while others think many workers will be left behind.",
    "cn": "有些專家主張人工智慧創造的工作會比它消滅的還多,而其他人則認為許多工人會被淘汰。"
  },
  {
    "word": "claim",
    "pos": "v.",
    "cn_def": "聲稱",
    "en_def": "to say something is true without proof",
    "sentence": "The company {{BLANK}}s that its app can teach you English in one month, but most users say real progress takes much longer.",
    "cn": "這家公司聲稱它的應用程式能在一個月內教會你英文,但大多數使用者說真正的進步要花更久。"
  },
  {
    "word": "assert",
    "pos": "v.",
    "cn_def": "斷言;堅稱",
    "en_def": "to say something firmly and confidently",
    "sentence": "The inventor {{BLANK}}ed that his robot was completely safe, but reporters found several cases where it had hurt workers.",
    "cn": "發明者堅稱他的機器人完全安全,但記者發現了幾起它傷害工人的案例。"
  },
  {
    "word": "contend",
    "pos": "v.",
    "cn_def": "主張;認為",
    "en_def": "to say that something is true in an argument",
    "sentence": "Critics {{BLANK}} that AI art is not real art, because the machine does not feel anything when it makes a picture.",
    "cn": "批評者主張人工智慧藝術不是真正的藝術,因為機器在創作時沒有任何感受。"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to accept or admit that something is true",
    "sentence": "The company {{BLANK}}d that its chatbot gave wrong medical advice, and it promised to add more safety checks.",
    "cn": "這家公司承認它的聊天機器人給了錯誤的醫療建議,並承諾增加更多安全檢查。"
  },
  {
    "word": "concede",
    "pos": "v.",
    "cn_def": "(勉強)承認;讓步",
    "en_def": "to admit, often unwillingly, that something is true",
    "sentence": "The teacher {{BLANK}}d that the AI's essay was well written, but she said it lacked any personal voice.",
    "cn": "老師承認人工智慧寫的作文寫得很好,但她說它缺乏個人的聲音。"
  },
  {
    "word": "emphasise",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is very important",
    "sentence": "Our principal {{BLANK}}d that AI is a tool, not a replacement for thinking, and every student should use it carefully.",
    "cn": "我們校長強調人工智慧是一種工具,而不是思考的替代品,每位學生都應該謹慎使用。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "突顯;強調",
    "en_def": "to draw attention to something important",
    "sentence": "The report {{BLANK}}s the danger of fake videos, and it asks social media companies to label AI content clearly.",
    "cn": "這份報告突顯了假影片的危險,並要求社群媒體公司清楚標示人工智慧內容。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "說明;闡明",
    "en_def": "to explain something with examples or pictures",
    "sentence": "The teacher used a funny AI mistake to {{BLANK}} why we should check facts, and the whole class laughed.",
    "cn": "老師用一個好笑的人工智慧錯誤來說明為什麼我們應該查核事實,全班都笑了。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "證明;示範",
    "en_def": "to show clearly that something is true or how it works",
    "sentence": "The engineer {{BLANK}}d how the robot could sort rubbish, and the audience was impressed by its speed.",
    "cn": "工程師示範了機器人如何分類垃圾,觀眾對它的速度印象深刻。"
  },
  {
    "word": "indicate",
    "pos": "v.",
    "cn_def": "顯示;表明",
    "en_def": "to show or suggest that something is true",
    "sentence": "Recent surveys {{BLANK}} that most teenagers use AI for homework, but only a few tell their teachers about it.",
    "cn": "最近的調查顯示大多數青少年用人工智慧寫作業,但只有少數人會告訴老師。"
  }
];

const MCQS = [
  {
    "q": "The most useful _____ of the app is the voice reader, because I can listen to articles while I walk to school.",
    "options": [
      "element",
      "transition",
      "function",
      "salary"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The website has a _____ for reporting fake news, but few users know where to find the button.",
    "options": [
      "mechanism",
      "hardware",
      "password",
      "drawback"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The school has a clear _____ for reporting online bullying, so students know exactly whom to talk to.",
    "options": [
      "chatbot",
      "shift",
      "firewall",
      "procedure"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The flashcard _____ works well for memorising words, but you also need to read a lot to use them naturally.",
    "options": [
      "budget",
      "method",
      "draft",
      "automation"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "A good study _____ is to test yourself often, because simply reading notes again does not help you remember much.",
    "options": [
      "layoff",
      "browser",
      "detector",
      "strategy"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Our teacher showed us a _____ for checking facts online, and now I always compare three sources before I believe something.",
    "options": [
      "technique",
      "equivalent",
      "domain",
      "evidence"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company follows one simple _____: a human must check every decision before the AI's answer is sent to a customer.",
    "options": [
      "oversight",
      "cooperation",
      "principle",
      "tutor"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The _____ of a robot teacher sounded strange ten years ago, but now some schools are already testing it.",
    "options": [
      "oversight",
      "concept",
      "literacy",
      "prejudice"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "One _____ says that people trust machines more than humans, but recent studies show the opposite is often true.",
    "options": [
      "theory",
      "avatar",
      "telemedicine",
      "assessment"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many people make the _____ that computers are never wrong, so they do not check the answers they receive.",
    "options": [
      "plagiarism",
      "mentor",
      "assumption",
      "proportion"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Don't _____ that a website is reliable just because it looks professional, because many fake sites look very real.",
    "options": [
      "affect",
      "assume",
      "misuse",
      "forecast"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The film's _____ is that robots have taken all human jobs, and the story follows one family trying to survive.",
    "options": [
      "context",
      "breach",
      "chip",
      "premise"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Talking to older workers gave me a new _____ on AI, because they remember how computers changed offices before.",
    "options": [
      "lawsuit",
      "perspective",
      "healthcare",
      "platform"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The school has taken a clear _____ on AI: students may use it for practice, but not for graded work.",
    "options": [
      "stance",
      "limitation",
      "element",
      "proportion"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Some experts _____ that AI will create more jobs than it destroys, while others think many workers will be left behind.",
    "options": [
      "adjust",
      "dispute",
      "argue",
      "modify"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The company _____s that its app can teach you English in one month, but most users say real progress takes much longer.",
    "options": [
      "transcribe",
      "discriminate",
      "undermine",
      "claim"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The inventor _____ed that his robot was completely safe, but reporters found several cases where it had hurt workers.",
    "options": [
      "assert",
      "infer",
      "simulate",
      "ensure"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Critics _____ that AI art is not real art, because the machine does not feel anything when it makes a picture.",
    "options": [
      "modify",
      "enable",
      "contend",
      "establish"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company _____d that its chatbot gave wrong medical advice, and it promised to add more safety checks.",
    "options": [
      "resolve",
      "comply",
      "exploit",
      "acknowledge"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The teacher _____d that the AI's essay was well written, but she said it lacked any personal voice.",
    "options": [
      "enable",
      "concede",
      "allocate",
      "revolutionise"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Our principal _____d that AI is a tool, not a replacement for thinking, and every student should use it carefully.",
    "options": [
      "confront",
      "transcribe",
      "emphasise",
      "overcome"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The report _____s the danger of fake videos, and it asks social media companies to label AI content clearly.",
    "options": [
      "adapt",
      "challenge",
      "manipulate",
      "highlight"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The teacher used a funny AI mistake to _____ why we should check facts, and the whole class laughed.",
    "options": [
      "predict",
      "illustrate",
      "estimate",
      "establish"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The engineer _____d how the robot could sort rubbish, and the audience was impressed by its speed.",
    "options": [
      "demonstrate",
      "clone",
      "emerge",
      "anticipate"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Recent surveys _____ that most teenagers use AI for homework, but only a few tell their teachers about it.",
    "options": [
      "confront",
      "indicate",
      "optimise",
      "enhance"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "function": {
    "pos": "n.",
    "en_def": "the job that something is designed to do",
    "cn_def": "功能"
  },
  "mechanism": {
    "pos": "n.",
    "en_def": "a system or process that does a particular job",
    "cn_def": "機制"
  },
  "procedure": {
    "pos": "n.",
    "en_def": "the official way of doing something",
    "cn_def": "程序;步驟"
  },
  "method": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "方法"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan for reaching a goal",
    "cn_def": "策略"
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special way of doing something that needs skill",
    "cn_def": "技巧"
  },
  "principle": {
    "pos": "n.",
    "en_def": "a basic rule or belief",
    "cn_def": "原則"
  },
  "concept": {
    "pos": "n.",
    "en_def": "an idea or general understanding of something",
    "cn_def": "概念"
  },
  "theory": {
    "pos": "n.",
    "en_def": "an idea that tries to explain something",
    "cn_def": "理論"
  },
  "assumption": {
    "pos": "n.",
    "en_def": "something you believe is true without proof",
    "cn_def": "假設;假定"
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without checking",
    "cn_def": "假定;認為"
  },
  "premise": {
    "pos": "n.",
    "en_def": "an idea that an argument or plan is based on",
    "cn_def": "前提"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a way of thinking about something",
    "cn_def": "觀點;角度"
  },
  "stance": {
    "pos": "n.",
    "en_def": "a public opinion on an issue",
    "cn_def": "立場"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "claim": {
    "pos": "v.",
    "en_def": "to say something is true without proof",
    "cn_def": "聲稱"
  },
  "assert": {
    "pos": "v.",
    "en_def": "to say something firmly and confidently",
    "cn_def": "斷言;堅稱"
  },
  "contend": {
    "pos": "v.",
    "en_def": "to say that something is true in an argument",
    "cn_def": "主張;認為"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to accept or admit that something is true",
    "cn_def": "承認"
  },
  "concede": {
    "pos": "v.",
    "en_def": "to admit, often unwillingly, that something is true",
    "cn_def": "(勉強)承認;讓步"
  },
  "emphasise": {
    "pos": "v.",
    "en_def": "to show that something is very important",
    "cn_def": "強調"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to draw attention to something important",
    "cn_def": "突顯;強調"
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to explain something with examples or pictures",
    "cn_def": "說明;闡明"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show clearly that something is true or how it works",
    "cn_def": "證明;示範"
  },
  "indicate": {
    "pos": "v.",
    "en_def": "to show or suggest that something is true",
    "cn_def": "顯示;表明"
  },
  "element": {
    "pos": "n.",
    "en_def": "a basic part of something",
    "cn_def": "要素;元素"
  },
  "transition": {
    "pos": "n.",
    "en_def": "the process of changing from one state to another",
    "cn_def": "過渡;轉換"
  },
  "salary": {
    "pos": "n.",
    "en_def": "fixed money paid to a worker every month",
    "cn_def": "薪水"
  },
  "hardware": {
    "pos": "n.",
    "en_def": "the physical parts of a computer, like the screen and keyboard",
    "cn_def": "硬體"
  },
  "password": {
    "pos": "n.",
    "en_def": "a secret word or set of letters used to enter an account",
    "cn_def": "密碼"
  },
  "drawback": {
    "pos": "n.",
    "en_def": "a disadvantage or problem",
    "cn_def": "缺點"
  },
  "chatbot": {
    "pos": "n.",
    "en_def": "a computer program that talks with people using text or voice",
    "cn_def": "聊天機器人"
  },
  "shift": {
    "pos": "n.",
    "en_def": "a change in position or direction",
    "cn_def": "轉變;轉移"
  },
  "firewall": {
    "pos": "n.",
    "en_def": "a system that blocks dangerous traffic from the internet",
    "cn_def": "防火牆"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money available to spend",
    "cn_def": "預算"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing",
    "cn_def": "草稿"
  },
  "automation": {
    "pos": "n.",
    "en_def": "the use of machines and computers to do work",
    "cn_def": "自動化"
  },
  "layoff": {
    "pos": "n.",
    "en_def": "the act of ending workers' jobs because there is not enough work",
    "cn_def": "裁員"
  },
  "browser": {
    "pos": "n.",
    "en_def": "a program used to look at websites",
    "cn_def": "瀏覽器"
  },
  "detector": {
    "pos": "n.",
    "en_def": "a tool that finds or notices something",
    "cn_def": "偵測器;檢測工具"
  },
  "equivalent": {
    "pos": "n.",
    "en_def": "something that has the same value or meaning",
    "cn_def": "相等物;同等的東西"
  },
  "domain": {
    "pos": "n.",
    "en_def": "an area of knowledge or activity",
    "cn_def": "領域"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts that show something is true",
    "cn_def": "證據"
  },
  "oversight": {
    "pos": "n.",
    "en_def": "the job of watching and checking that something is done properly",
    "cn_def": "監督"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "working together to reach a shared goal",
    "cn_def": "合作;協力"
  },
  "tutor": {
    "pos": "n.",
    "en_def": "a teacher who helps one student or a small group",
    "cn_def": "家教;導師"
  },
  "literacy": {
    "pos": "n.",
    "en_def": "the ability to read and write, or skill in an area",
    "cn_def": "讀寫能力;素養"
  },
  "prejudice": {
    "pos": "n.",
    "en_def": "an unfair opinion formed without enough knowledge",
    "cn_def": "偏見;成見"
  },
  "avatar": {
    "pos": "n.",
    "en_def": "a picture or character that represents you online",
    "cn_def": "虛擬化身;大頭貼"
  },
  "telemedicine": {
    "pos": "n.",
    "en_def": "seeing a doctor through video or phone instead of in person",
    "cn_def": "遠距醫療"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "a test or judgement of how well someone has learned",
    "cn_def": "評量;評估"
  },
  "plagiarism": {
    "pos": "n.",
    "en_def": "copying someone else's work and saying it is yours",
    "cn_def": "抄襲"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises someone younger",
    "cn_def": "導師;良師"
  },
  "proportion": {
    "pos": "n.",
    "en_def": "a part of a whole, compared with the total",
    "cn_def": "比例"
  },
  "affect": {
    "pos": "v.",
    "en_def": "to cause a change in someone or something",
    "cn_def": "影響"
  },
  "misuse": {
    "pos": "v.",
    "en_def": "to use something in a wrong or harmful way",
    "cn_def": "濫用;誤用"
  },
  "forecast": {
    "pos": "v.",
    "en_def": "to say what will probably happen, often with weather or money",
    "cn_def": "預測;預報"
  },
  "context": {
    "pos": "n.",
    "en_def": "the situation or information around something that helps explain it",
    "cn_def": "上下文;背景脈絡"
  },
  "breach": {
    "pos": "n.",
    "en_def": "an event where private information is stolen or shown",
    "cn_def": "外洩;違反"
  },
  "chip": {
    "pos": "n.",
    "en_def": "a very small piece of material inside electronic devices",
    "cn_def": "晶片"
  },
  "lawsuit": {
    "pos": "n.",
    "en_def": "a case brought to a court of law",
    "cn_def": "訴訟"
  },
  "healthcare": {
    "pos": "n.",
    "en_def": "services for looking after people's health",
    "cn_def": "醫療照護"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service where people share and use content",
    "cn_def": "平台"
  },
  "limitation": {
    "pos": "n.",
    "en_def": "a weakness or a point beyond which something cannot go",
    "cn_def": "局限;限制"
  },
  "adjust": {
    "pos": "v.",
    "en_def": "to change something slightly to make it work better",
    "cn_def": "調整"
  },
  "dispute": {
    "pos": "v.",
    "en_def": "to say that something is not true or correct",
    "cn_def": "質疑;爭論"
  },
  "modify": {
    "pos": "v.",
    "en_def": "to change something a little to improve it",
    "cn_def": "修改;調整"
  },
  "transcribe": {
    "pos": "v.",
    "en_def": "to write down exactly what someone says",
    "cn_def": "轉錄;謄寫"
  },
  "discriminate": {
    "pos": "v.",
    "en_def": "to treat a person or group unfairly",
    "cn_def": "歧視"
  },
  "undermine": {
    "pos": "v.",
    "en_def": "to slowly make something weaker",
    "cn_def": "逐漸削弱;破壞"
  },
  "infer": {
    "pos": "v.",
    "en_def": "to guess a fact from the information you have",
    "cn_def": "推斷;推論"
  },
  "simulate": {
    "pos": "v.",
    "en_def": "to copy how something happens in real life using a computer",
    "cn_def": "模擬"
  },
  "ensure": {
    "pos": "v.",
    "en_def": "to make certain that something happens",
    "cn_def": "確保"
  },
  "enable": {
    "pos": "v.",
    "en_def": "to make it possible for someone to do something",
    "cn_def": "使能夠"
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something that will last",
    "cn_def": "建立;設立"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find a solution to a problem",
    "cn_def": "解決"
  },
  "comply": {
    "pos": "v.",
    "en_def": "to obey a rule or request",
    "cn_def": "遵守;服從"
  },
  "exploit": {
    "pos": "v.",
    "en_def": "to use someone or something unfairly for your own gain",
    "cn_def": "剝削;利用"
  },
  "allocate": {
    "pos": "v.",
    "en_def": "to give money, time or resources for a purpose",
    "cn_def": "分配;撥款"
  },
  "revolutionise": {
    "pos": "v.",
    "en_def": "to change something completely and in a big way",
    "cn_def": "徹底改變"
  },
  "confront": {
    "pos": "v.",
    "en_def": "to face and deal with a difficult problem",
    "cn_def": "面對;正視"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem",
    "cn_def": "克服"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change to suit a new situation",
    "cn_def": "適應;調整"
  },
  "challenge": {
    "pos": "v.",
    "en_def": "to question whether something is true or right",
    "cn_def": "質疑;挑戰"
  },
  "manipulate": {
    "pos": "v.",
    "en_def": "to control people or facts in a dishonest way",
    "cn_def": "操弄;操縱"
  },
  "predict": {
    "pos": "v.",
    "en_def": "to say what will happen in the future",
    "cn_def": "預測"
  },
  "estimate": {
    "pos": "v.",
    "en_def": "to guess a number or amount by thinking carefully",
    "cn_def": "估計"
  },
  "clone": {
    "pos": "v.",
    "en_def": "to make an exact copy of something",
    "cn_def": "複製;仿製"
  },
  "emerge": {
    "pos": "v.",
    "en_def": "to appear or become known",
    "cn_def": "出現;浮現"
  },
  "anticipate": {
    "pos": "v.",
    "en_def": "to expect something and prepare for it",
    "cn_def": "預期;預料"
  },
  "optimise": {
    "pos": "v.",
    "en_def": "to make something work as well as possible",
    "cn_def": "使最佳化;優化"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to improve the quality of something",
    "cn_def": "提升;增強"
  }
};

const EXTRA_GLOSSES = {};
