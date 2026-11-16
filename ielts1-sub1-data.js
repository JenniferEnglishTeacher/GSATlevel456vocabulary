// Topic 1 Subunit 1 Quiz Data: AI & Technology Basics 人工智慧與科技基礎
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S01 - AI & Technology Basics 人工智慧與科技基礎",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "automate",
    "pos": "v.",
    "cn_def": "使自動化",
    "en_def": "to make a machine or computer do a job without people",
    "sentence": "Many banks now {{BLANK}} simple customer questions with smart software, so staff can spend more time on difficult problems.",
    "cn": "許多銀行現在用智慧軟體將簡單的顧客問題自動化,因此員工能花更多時間處理困難的問題。"
  },
  {
    "word": "automation",
    "pos": "n.",
    "cn_def": "自動化",
    "en_def": "the use of machines and computers to do work",
    "sentence": "Thanks to {{BLANK}} in the factory, the cars are built much faster, but some workers worry about losing their jobs.",
    "cn": "多虧了工廠裡的自動化,汽車的製造速度快了許多,但有些工人擔心會失去工作。"
  },
  {
    "word": "robotics",
    "pos": "n.",
    "cn_def": "機器人學",
    "en_def": "the science of designing and building robots",
    "sentence": "My cousin joined the school {{BLANK}} club last year, and now he can build a small robot that follows a black line.",
    "cn": "我表弟去年加入了學校的機器人社團,現在他能做出一台會沿著黑線前進的小機器人。"
  },
  {
    "word": "bug",
    "pos": "n.",
    "cn_def": "程式錯誤",
    "en_def": "a mistake in a computer program",
    "sentence": "The new game kept crashing because of a small {{BLANK}} in the code, so the company quickly released an update.",
    "cn": "這款新遊戲因為程式碼中的一個小程式錯誤而一直當機,所以公司很快就發布了更新。"
  },
  {
    "word": "software",
    "pos": "n.",
    "cn_def": "軟體",
    "en_def": "programs that tell a computer what to do",
    "sentence": "Our school bought new learning {{BLANK}} for every classroom, but the teachers needed a week of training before using it.",
    "cn": "我們學校為每間教室購買了新的學習軟體,但老師們在使用前需要一週的培訓。"
  },
  {
    "word": "hardware",
    "pos": "n.",
    "cn_def": "硬體",
    "en_def": "the physical parts of a computer, like the screen and keyboard",
    "sentence": "The {{BLANK}} in the computer lab is very old, so the new AI programs run slowly and often freeze.",
    "cn": "電腦教室裡的硬體非常老舊,所以新的人工智慧程式跑得很慢,而且常常當機。"
  },
  {
    "word": "programmer",
    "pos": "n.",
    "cn_def": "程式設計師",
    "en_def": "a person who writes computer programs",
    "sentence": "My uncle works as a {{BLANK}} at a tech company, and he spends most of his day writing and testing code.",
    "cn": "我叔叔在一家科技公司擔任程式設計師,他一天大部分的時間都在寫程式和測試程式碼。"
  },
  {
    "word": "coding",
    "pos": "n.",
    "cn_def": "寫程式;編碼",
    "en_def": "writing instructions for a computer",
    "sentence": "Some primary schools now teach {{BLANK}} to young children because they believe it helps them think step by step.",
    "cn": "有些小學現在教小孩子寫程式,因為他們認為這能幫助孩子一步一步地思考。"
  },
  {
    "word": "dataset",
    "pos": "n.",
    "cn_def": "資料集",
    "en_def": "a large collection of information used by a computer",
    "sentence": "The company trained its AI on a huge {{BLANK}} of photos, but the system still made mistakes with darker images.",
    "cn": "這家公司用一個龐大的照片資料集訓練它的人工智慧,但系統在較暗的圖片上仍然會出錯。"
  },
  {
    "word": "database",
    "pos": "n.",
    "cn_def": "資料庫",
    "en_def": "an organised collection of information stored on a computer",
    "sentence": "The library keeps all its book records in an online {{BLANK}}, so students can check if a book is available from home.",
    "cn": "圖書館把所有的書籍紀錄存放在線上資料庫裡,所以學生在家就能查詢某本書是否可借。"
  },
  {
    "word": "computing",
    "pos": "n.",
    "cn_def": "電腦運算;計算",
    "en_def": "the use or study of computers",
    "sentence": "Modern AI needs a great deal of {{BLANK}} power, so tech companies are building huge data centres around the world.",
    "cn": "現代人工智慧需要大量的運算能力,所以科技公司正在世界各地興建巨大的資料中心。"
  },
  {
    "word": "processor",
    "pos": "n.",
    "cn_def": "處理器",
    "en_def": "the main part of a computer that does calculations",
    "sentence": "My old laptop has a slow {{BLANK}}, so it takes almost a minute to open a video editing program.",
    "cn": "我的舊筆電有一顆很慢的處理器,所以打開影片剪輯程式幾乎要花一分鐘。"
  },
  {
    "word": "chip",
    "pos": "n.",
    "cn_def": "晶片",
    "en_def": "a very small piece of material inside electronic devices",
    "sentence": "Taiwan makes many of the world's most advanced computer {{BLANK}}s, and these are used in phones and AI servers.",
    "cn": "台灣製造許多世界上最先進的電腦晶片,而這些晶片被用在手機和人工智慧伺服器中。"
  },
  {
    "word": "server",
    "pos": "n.",
    "cn_def": "伺服器",
    "en_def": "a powerful computer that stores data and runs services for others",
    "sentence": "The online exam stopped for twenty minutes because the {{BLANK}} crashed, so the teacher gave everyone extra time.",
    "cn": "線上考試停擺了二十分鐘,因為伺服器當機了,所以老師給大家延長了時間。"
  },
  {
    "word": "cloud",
    "pos": "n.",
    "cn_def": "雲端",
    "en_def": "online storage and services on distant computers",
    "sentence": "I save all my school projects in the {{BLANK}}, so I can open them on my phone even if my laptop breaks.",
    "cn": "我把所有學校作業都存在雲端,所以即使筆電壞了,我也能用手機打開它們。"
  },
  {
    "word": "upgrade",
    "pos": "v.",
    "cn_def": "升級",
    "en_def": "to make a machine or program newer and better",
    "sentence": "We decided to {{BLANK}} our home computer last month, because the old one could not run the new translation app.",
    "cn": "我們上個月決定把家裡的電腦升級,因為舊電腦跑不動新的翻譯應用程式。"
  },
  {
    "word": "install",
    "pos": "v.",
    "cn_def": "安裝",
    "en_def": "to put a program onto a computer or phone",
    "sentence": "Before the class started, the teacher asked us to {{BLANK}} the learning app, but my phone did not have enough space.",
    "cn": "上課開始前,老師要我們安裝學習應用程式,但我的手機空間不夠。"
  },
  {
    "word": "interface",
    "pos": "n.",
    "cn_def": "介面",
    "en_def": "the part of a program that a user sees and uses",
    "sentence": "The new app has a simple {{BLANK}} with large buttons, so even my grandparents can use it without help.",
    "cn": "這個新應用程式有一個簡單的介面,按鈕很大,所以連我的祖父母都能自己使用。"
  },
  {
    "word": "sensor",
    "pos": "n.",
    "cn_def": "感測器",
    "en_def": "a device that notices light, heat, movement or sound",
    "sentence": "The smart light in our hallway has a {{BLANK}} that notices movement, so it turns on when someone walks past at night.",
    "cn": "我們走廊的智慧燈有一個能偵測動作的感測器,所以晚上有人經過時燈就會亮起。"
  },
  {
    "word": "virtual",
    "pos": "adj.",
    "cn_def": "虛擬的",
    "en_def": "existing on a computer, not in the real world",
    "sentence": "Our class took a {{BLANK}} tour of a museum in Paris, and we could look around every room without leaving Taipei.",
    "cn": "我們班參加了巴黎一間博物館的虛擬導覽,我們不用離開台北就能逛遍每個展間。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computer technology",
    "sentence": "More and more students read {{BLANK}} textbooks on tablets, but some say paper books are easier on their eyes.",
    "cn": "越來越多學生在平板上閱讀數位課本,但有些人說紙本書對眼睛比較好。"
  },
  {
    "word": "digitise",
    "pos": "v.",
    "cn_def": "數位化",
    "en_def": "to change paper documents or pictures into computer files",
    "sentence": "The city library plans to {{BLANK}} its old newspapers, so researchers can search them online instead of visiting in person.",
    "cn": "市立圖書館計畫將舊報紙數位化,這樣研究人員就能上網搜尋,而不必親自到館。"
  },
  {
    "word": "artificial",
    "pos": "adj.",
    "cn_def": "人造的;人工的",
    "en_def": "made by people, not natural",
    "sentence": "The robot dog looks friendly, but its {{BLANK}} fur feels strange when you touch it, so my little sister was scared.",
    "cn": "這隻機器狗看起來很友善,但牠的人造毛摸起來很奇怪,所以我妹妹嚇到了。"
  },
  {
    "word": "robotic",
    "pos": "adj.",
    "cn_def": "機器人的;機械般的",
    "en_def": "related to or like a robot",
    "sentence": "The hospital uses a {{BLANK}} arm during some operations, because it can make very small and steady movements.",
    "cn": "這家醫院在某些手術中使用機器手臂,因為它能做出非常細微又穩定的動作。"
  },
  {
    "word": "simulate",
    "pos": "v.",
    "cn_def": "模擬",
    "en_def": "to copy how something happens in real life using a computer",
    "sentence": "Pilots practise in machines that {{BLANK}} bad weather, so they know what to do before they face a real storm.",
    "cn": "飛行員在能模擬惡劣天氣的機器裡練習,這樣他們在遇到真正的暴風雨之前就知道該怎麼做。"
  },
  {
    "word": "simulation",
    "pos": "n.",
    "cn_def": "模擬",
    "en_def": "a computer copy of a real situation used for practice or study",
    "sentence": "The science teacher showed us a {{BLANK}} of an earthquake, and we could see how different buildings shake and fall.",
    "cn": "自然老師給我們看了一段地震的模擬,我們可以看到不同的建築物如何搖晃和倒塌。"
  },
  {
    "word": "bandwidth",
    "pos": "n.",
    "cn_def": "頻寬",
    "en_def": "the amount of data an internet connection can carry",
    "sentence": "Our home internet does not have enough {{BLANK}}, so the video keeps stopping when my brother and I are online together.",
    "cn": "我們家的網路頻寬不夠,所以當我和哥哥同時上網時,影片一直卡住。"
  },
  {
    "word": "glitch",
    "pos": "n.",
    "cn_def": "小故障",
    "en_def": "a small problem that stops something working properly",
    "sentence": "A {{BLANK}} in the school's website showed the wrong exam dates, but the office fixed it before anyone got confused.",
    "cn": "學校網站上的一個小故障顯示了錯誤的考試日期,但辦公室在任何人搞混之前就修好了。"
  },
  {
    "word": "malfunction",
    "pos": "v.",
    "cn_def": "故障;運作失常",
    "en_def": "to fail to work in the correct way",
    "sentence": "The self-checkout machine began to {{BLANK}} during the busy lunch hour, so a staff member had to help every customer.",
    "cn": "自助結帳機在忙碌的午餐時間開始故障,所以一位店員必須幫每位顧客結帳。"
  },
  {
    "word": "prototype",
    "pos": "n.",
    "cn_def": "原型;樣品",
    "en_def": "the first model of a new product, made for testing",
    "sentence": "The students built a {{BLANK}} of a smart trash can, and although it was rough, the judges liked their idea.",
    "cn": "學生們做了一個智慧垃圾桶的原型,雖然還很粗糙,但評審很喜歡他們的點子。"
  }
];

const MCQS = [
  {
    "q": "Many banks now _____ simple customer questions with smart software, so staff can spend more time on difficult problems.",
    "options": [
      "adopt",
      "emphasise",
      "automate",
      "edit"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Thanks to _____ in the factory, the cars are built much faster, but some workers worry about losing their jobs.",
    "options": [
      "e-commerce",
      "framework",
      "syllabus",
      "automation"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "My cousin joined the school _____ club last year, and now he can build a small robot that follows a black line.",
    "options": [
      "paradox",
      "robotics",
      "diversity",
      "essay"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new game kept crashing because of a small _____ in the code, so the company quickly released an update.",
    "options": [
      "bug",
      "graduate",
      "principle",
      "household"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Our school bought new learning _____ for every classroom, but the teachers needed a week of training before using it.",
    "options": [
      "diversity",
      "minority",
      "software",
      "assistant"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The _____ in the computer lab is very old, so the new AI programs run slowly and often freeze.",
    "options": [
      "hardware",
      "percentage",
      "gig",
      "e-commerce"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "My uncle works as a _____ at a tech company, and he spends most of his day writing and testing code.",
    "options": [
      "approach",
      "investor",
      "alternative",
      "programmer"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Some primary schools now teach _____ to young children because they believe it helps them think step by step.",
    "options": [
      "conflict",
      "coding",
      "tutoring",
      "drawback"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The company trained its AI on a huge _____ of photos, but the system still made mistakes with darker images.",
    "options": [
      "layoff",
      "entrepreneur",
      "dataset",
      "household"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The library keeps all its book records in an online _____, so students can check if a book is available from home.",
    "options": [
      "database",
      "likelihood",
      "uncertainty",
      "manufacturing"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Modern AI needs a great deal of _____ power, so tech companies are building huge data centres around the world.",
    "options": [
      "coursework",
      "computing",
      "dependence",
      "budget"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "My old laptop has a slow _____, so it takes almost a minute to open a video editing program.",
    "options": [
      "deepfake",
      "bias",
      "majority",
      "processor"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Taiwan makes many of the world's most advanced computer _____s, and these are used in phones and AI servers.",
    "options": [
      "chip",
      "lecture",
      "dimension",
      "cooperation"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The online exam stopped for twenty minutes because the _____ crashed, so the teacher gave everyone extra time.",
    "options": [
      "concept",
      "server",
      "fairness",
      "dependence"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "I save all my school projects in the _____, so I can open them on my phone even if my laptop breaks.",
    "options": [
      "inequality",
      "graduate",
      "cloud",
      "spam"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "We decided to _____ our home computer last month, because the old one could not run the new translation app.",
    "options": [
      "establish",
      "mimic",
      "retrain",
      "upgrade"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Before the class started, the teacher asked us to _____ the learning app, but my phone did not have enough space.",
    "options": [
      "fund",
      "install",
      "minimise",
      "evolve"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The new app has a simple _____ with large buttons, so even my grandparents can use it without help.",
    "options": [
      "interface",
      "framework",
      "misinformation",
      "equivalent"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The smart light in our hallway has a _____ that notices movement, so it turns on when someone walks past at night.",
    "options": [
      "alternative",
      "assessment",
      "sensor",
      "unemployment"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Our class took a _____ tour of a museum in Paris, and we could look around every room without leaving Taipei.",
    "options": [
      "remote",
      "scarce",
      "significant",
      "virtual"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "More and more students read _____ textbooks on tablets, but some say paper books are easier on their eyes.",
    "options": [
      "digital",
      "prior",
      "interactive",
      "inconsistent"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The city library plans to _____ its old newspapers, so researchers can search them online instead of visiting in person.",
    "options": [
      "argue",
      "summarise",
      "download",
      "digitise"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The robot dog looks friendly, but its _____ fur feels strange when you touch it, so my little sister was scared.",
    "options": [
      "accountable",
      "artificial",
      "interactive",
      "dishonest"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The hospital uses a _____ arm during some operations, because it can make very small and steady movements.",
    "options": [
      "vital",
      "accurate",
      "robotic",
      "ambiguous"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Pilots practise in machines that _____ bad weather, so they know what to do before they face a real storm.",
    "options": [
      "forecast",
      "simulate",
      "define",
      "benefit"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The science teacher showed us a _____ of an earthquake, and we could see how different buildings shake and fall.",
    "options": [
      "minority",
      "procedure",
      "diversity",
      "simulation"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Our home internet does not have enough _____, so the video keeps stopping when my brother and I are online together.",
    "options": [
      "bandwidth",
      "obstacle",
      "sector",
      "framework"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "A _____ in the school's website showed the wrong exam dates, but the office fixed it before anyone got confused.",
    "options": [
      "likelihood",
      "gadget",
      "glitch",
      "encryption"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The self-checkout machine began to _____ during the busy lunch hour, so a staff member had to help every customer.",
    "options": [
      "malfunction",
      "enforce",
      "alter",
      "define"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The students built a _____ of a smart trash can, and although it was rough, the judges liked their idea.",
    "options": [
      "strategy",
      "prototype",
      "data",
      "mentor"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "automate": {
    "pos": "v.",
    "en_def": "to make a machine or computer do a job without people",
    "cn_def": "使自動化"
  },
  "automation": {
    "pos": "n.",
    "en_def": "the use of machines and computers to do work",
    "cn_def": "自動化"
  },
  "robotics": {
    "pos": "n.",
    "en_def": "the science of designing and building robots",
    "cn_def": "機器人學"
  },
  "bug": {
    "pos": "n.",
    "en_def": "a mistake in a computer program",
    "cn_def": "程式錯誤"
  },
  "software": {
    "pos": "n.",
    "en_def": "programs that tell a computer what to do",
    "cn_def": "軟體"
  },
  "hardware": {
    "pos": "n.",
    "en_def": "the physical parts of a computer, like the screen and keyboard",
    "cn_def": "硬體"
  },
  "programmer": {
    "pos": "n.",
    "en_def": "a person who writes computer programs",
    "cn_def": "程式設計師"
  },
  "coding": {
    "pos": "n.",
    "en_def": "writing instructions for a computer",
    "cn_def": "寫程式;編碼"
  },
  "dataset": {
    "pos": "n.",
    "en_def": "a large collection of information used by a computer",
    "cn_def": "資料集"
  },
  "database": {
    "pos": "n.",
    "en_def": "an organised collection of information stored on a computer",
    "cn_def": "資料庫"
  },
  "computing": {
    "pos": "n.",
    "en_def": "the use or study of computers",
    "cn_def": "電腦運算;計算"
  },
  "processor": {
    "pos": "n.",
    "en_def": "the main part of a computer that does calculations",
    "cn_def": "處理器"
  },
  "chip": {
    "pos": "n.",
    "en_def": "a very small piece of material inside electronic devices",
    "cn_def": "晶片"
  },
  "server": {
    "pos": "n.",
    "en_def": "a powerful computer that stores data and runs services for others",
    "cn_def": "伺服器"
  },
  "cloud": {
    "pos": "n.",
    "en_def": "online storage and services on distant computers",
    "cn_def": "雲端"
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
  "interface": {
    "pos": "n.",
    "en_def": "the part of a program that a user sees and uses",
    "cn_def": "介面"
  },
  "sensor": {
    "pos": "n.",
    "en_def": "a device that notices light, heat, movement or sound",
    "cn_def": "感測器"
  },
  "virtual": {
    "pos": "adj.",
    "en_def": "existing on a computer, not in the real world",
    "cn_def": "虛擬的"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology",
    "cn_def": "數位的"
  },
  "digitise": {
    "pos": "v.",
    "en_def": "to change paper documents or pictures into computer files",
    "cn_def": "數位化"
  },
  "artificial": {
    "pos": "adj.",
    "en_def": "made by people, not natural",
    "cn_def": "人造的;人工的"
  },
  "robotic": {
    "pos": "adj.",
    "en_def": "related to or like a robot",
    "cn_def": "機器人的;機械般的"
  },
  "simulate": {
    "pos": "v.",
    "en_def": "to copy how something happens in real life using a computer",
    "cn_def": "模擬"
  },
  "simulation": {
    "pos": "n.",
    "en_def": "a computer copy of a real situation used for practice or study",
    "cn_def": "模擬"
  },
  "bandwidth": {
    "pos": "n.",
    "en_def": "the amount of data an internet connection can carry",
    "cn_def": "頻寬"
  },
  "glitch": {
    "pos": "n.",
    "en_def": "a small problem that stops something working properly",
    "cn_def": "小故障"
  },
  "malfunction": {
    "pos": "v.",
    "en_def": "to fail to work in the correct way",
    "cn_def": "故障;運作失常"
  },
  "prototype": {
    "pos": "n.",
    "en_def": "the first model of a new product, made for testing",
    "cn_def": "原型;樣品"
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to start using a new idea or method",
    "cn_def": "採用"
  },
  "emphasise": {
    "pos": "v.",
    "en_def": "to show that something is very important",
    "cn_def": "強調"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve a piece of writing or a video",
    "cn_def": "編輯;修改"
  },
  "e-commerce": {
    "pos": "n.",
    "en_def": "buying and selling goods on the internet",
    "cn_def": "電子商務"
  },
  "framework": {
    "pos": "n.",
    "en_def": "a set of ideas or rules used to make decisions",
    "cn_def": "架構;框架"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of topics and plans for a course",
    "cn_def": "課程大綱"
  },
  "paradox": {
    "pos": "n.",
    "en_def": "a situation that seems strange because it has two opposite facts",
    "cn_def": "矛盾;悖論"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of many different people or things",
    "cn_def": "多樣性"
  },
  "essay": {
    "pos": "n.",
    "en_def": "a short piece of writing on a subject",
    "cn_def": "文章;作文"
  },
  "graduate": {
    "pos": "n.",
    "en_def": "a person who has finished a degree",
    "cn_def": "畢業生"
  },
  "principle": {
    "pos": "n.",
    "en_def": "a basic rule or belief",
    "cn_def": "原則"
  },
  "household": {
    "pos": "n.",
    "en_def": "all the people who live together in one home",
    "cn_def": "家庭;家戶"
  },
  "minority": {
    "pos": "n.",
    "en_def": "less than half of a group",
    "cn_def": "少數"
  },
  "assistant": {
    "pos": "n.",
    "en_def": "a person or program that helps someone do tasks",
    "cn_def": "助理;助手"
  },
  "percentage": {
    "pos": "n.",
    "en_def": "an amount shown as part of 100",
    "cn_def": "百分比"
  },
  "gig": {
    "pos": "n.",
    "en_def": "a short job or piece of paid work",
    "cn_def": "零工;臨時工作"
  },
  "approach": {
    "pos": "n.",
    "en_def": "a way of dealing with something",
    "cn_def": "方法;途徑"
  },
  "investor": {
    "pos": "n.",
    "en_def": "a person who puts money into a business to make more money",
    "cn_def": "投資人"
  },
  "alternative": {
    "pos": "n.",
    "en_def": "another choice or possibility",
    "cn_def": "替代方案;選擇"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement",
    "cn_def": "衝突"
  },
  "tutoring": {
    "pos": "n.",
    "en_def": "extra private teaching for one student or a small group",
    "cn_def": "課業輔導;家教"
  },
  "drawback": {
    "pos": "n.",
    "en_def": "a disadvantage or problem",
    "cn_def": "缺點"
  },
  "layoff": {
    "pos": "n.",
    "en_def": "the act of ending workers' jobs because there is not enough work",
    "cn_def": "裁員"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts their own business",
    "cn_def": "創業家;企業家"
  },
  "likelihood": {
    "pos": "n.",
    "en_def": "how probable something is",
    "cn_def": "可能性"
  },
  "uncertainty": {
    "pos": "n.",
    "en_def": "a feeling of not being sure about something",
    "cn_def": "不確定性"
  },
  "manufacturing": {
    "pos": "n.",
    "en_def": "making goods in large numbers in factories",
    "cn_def": "製造業"
  },
  "coursework": {
    "pos": "n.",
    "en_def": "work students do during a course that counts towards a grade",
    "cn_def": "課堂作業;平時作業"
  },
  "dependence": {
    "pos": "n.",
    "en_def": "needing something so much that you cannot do without it",
    "cn_def": "依賴"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money available to spend",
    "cn_def": "預算"
  },
  "deepfake": {
    "pos": "n.",
    "en_def": "a fake video or voice made by AI that looks real",
    "cn_def": "深偽(影片)"
  },
  "bias": {
    "pos": "n.",
    "en_def": "unfair support for or against a group",
    "cn_def": "偏見;偏差"
  },
  "majority": {
    "pos": "n.",
    "en_def": "more than half of a group",
    "cn_def": "大多數"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to students on a subject",
    "cn_def": "講課;演講"
  },
  "dimension": {
    "pos": "n.",
    "en_def": "a part or feature of a situation",
    "cn_def": "面向;層面"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "working together to reach a shared goal",
    "cn_def": "合作;協力"
  },
  "concept": {
    "pos": "n.",
    "en_def": "an idea or general understanding of something",
    "cn_def": "概念"
  },
  "fairness": {
    "pos": "n.",
    "en_def": "treating people equally and in the right way",
    "cn_def": "公平"
  },
  "inequality": {
    "pos": "n.",
    "en_def": "an unfair difference between groups of people",
    "cn_def": "不平等"
  },
  "spam": {
    "pos": "n.",
    "en_def": "unwanted messages sent to many people",
    "cn_def": "垃圾郵件"
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something that will last",
    "cn_def": "建立;設立"
  },
  "mimic": {
    "pos": "v.",
    "en_def": "to copy the way someone talks or behaves",
    "cn_def": "模仿"
  },
  "retrain": {
    "pos": "v.",
    "en_def": "to learn or teach new skills for a different job",
    "cn_def": "再培訓;重新訓練"
  },
  "fund": {
    "pos": "v.",
    "en_def": "to provide money for something",
    "cn_def": "資助;提供資金"
  },
  "minimise": {
    "pos": "v.",
    "en_def": "to make something as small as possible",
    "cn_def": "使減到最少"
  },
  "evolve": {
    "pos": "v.",
    "en_def": "to develop and change slowly over time",
    "cn_def": "演變;逐步發展"
  },
  "misinformation": {
    "pos": "n.",
    "en_def": "wrong information that is spread, often by mistake",
    "cn_def": "錯誤訊息"
  },
  "equivalent": {
    "pos": "n.",
    "en_def": "something that has the same value or meaning",
    "cn_def": "相等物;同等的東西"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "a test or judgement of how well someone has learned",
    "cn_def": "評量;評估"
  },
  "unemployment": {
    "pos": "n.",
    "en_def": "the state of not having a job",
    "cn_def": "失業"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "done from a distance, not in the same place",
    "cn_def": "遠距的;遠端的"
  },
  "scarce": {
    "pos": "adj.",
    "en_def": "not easy to find; not enough",
    "cn_def": "稀少的;缺乏的"
  },
  "significant": {
    "pos": "adj.",
    "en_def": "large or important enough to notice",
    "cn_def": "顯著的;重大的"
  },
  "prior": {
    "pos": "adj.",
    "en_def": "happening before something",
    "cn_def": "先前的;事先的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people and computers to respond to each other",
    "cn_def": "互動式的"
  },
  "inconsistent": {
    "pos": "adj.",
    "en_def": "not staying the same; changing in a confusing way",
    "cn_def": "不一致的;前後矛盾的"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "summarise": {
    "pos": "v.",
    "en_def": "to give the main points in a short form",
    "cn_def": "總結;摘要"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy files from the internet onto your device",
    "cn_def": "下載"
  },
  "accountable": {
    "pos": "adj.",
    "en_def": "responsible for your actions and able to explain them",
    "cn_def": "應負責任的"
  },
  "dishonest": {
    "pos": "adj.",
    "en_def": "not telling the truth; likely to cheat",
    "cn_def": "不誠實的"
  },
  "vital": {
    "pos": "adj.",
    "en_def": "extremely important and necessary",
    "cn_def": "極為重要的"
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and true in every detail",
    "cn_def": "準確的"
  },
  "ambiguous": {
    "pos": "adj.",
    "en_def": "having more than one possible meaning",
    "cn_def": "模稜兩可的;含糊的"
  },
  "forecast": {
    "pos": "v.",
    "en_def": "to say what will probably happen, often with weather or money",
    "cn_def": "預測;預報"
  },
  "define": {
    "pos": "v.",
    "en_def": "to explain the exact meaning of a word or idea",
    "cn_def": "定義"
  },
  "benefit": {
    "pos": "v.",
    "en_def": "to get help or an advantage from something",
    "cn_def": "受益"
  },
  "procedure": {
    "pos": "n.",
    "en_def": "the official way of doing something",
    "cn_def": "程序;步驟"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that blocks you from doing something",
    "cn_def": "障礙"
  },
  "sector": {
    "pos": "n.",
    "en_def": "one part of a country's economy or society",
    "cn_def": "部門;產業"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small useful machine or tool",
    "cn_def": "小裝置;小玩意兒"
  },
  "encryption": {
    "pos": "n.",
    "en_def": "changing data into a secret code so others cannot read it",
    "cn_def": "加密"
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make sure that people obey a rule or law",
    "cn_def": "執行;強制實施"
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something, usually slightly",
    "cn_def": "改變;修改"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan for reaching a goal",
    "cn_def": "策略"
  },
  "data": {
    "pos": "n.",
    "en_def": "facts and numbers collected for study",
    "cn_def": "數據;資料"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises someone younger",
    "cn_def": "導師;良師"
  }
};

const EXTRA_GLOSSES = {};
