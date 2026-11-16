// Topic 1 Subunit 2 Quiz Data: Data, Privacy & Security 數據、隱私與安全
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S02 - Data, Privacy & Security 數據、隱私與安全",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the right to keep your personal life secret",
    "sentence": "Many parents worry about their children's {{BLANK}}, because some apps collect photos and locations without asking clearly.",
    "cn": "許多家長擔心孩子的隱私,因為有些應用程式在沒有清楚詢問的情況下收集照片和位置。"
  },
  {
    "word": "surveillance",
    "pos": "n.",
    "cn_def": "監視",
    "en_def": "the careful watching of people, often by cameras",
    "sentence": "The city added more {{BLANK}} cameras near the station, and although crime dropped, some people felt they were always being watched.",
    "cn": "市政府在車站附近增設了更多監視攝影機,雖然犯罪減少了,但有些人覺得自己一直被盯著。"
  },
  {
    "word": "hacker",
    "pos": "n.",
    "cn_def": "駭客",
    "en_def": "a person who breaks into computer systems",
    "sentence": "A {{BLANK}} broke into the shop's website last week, so the owner told all customers to change their passwords.",
    "cn": "上週一名駭客入侵了這家店的網站,所以店主告訴所有顧客要更改密碼。"
  },
  {
    "word": "hack",
    "pos": "v.",
    "cn_def": "入侵(電腦);駭入",
    "en_def": "to secretly get into someone's computer or account",
    "sentence": "Someone tried to {{BLANK}} my email account, but the system sent me a warning, so I changed my password at once.",
    "cn": "有人試圖駭入我的電子郵件帳號,但系統傳了警告給我,所以我立刻更改了密碼。"
  },
  {
    "word": "cyberattack",
    "pos": "n.",
    "cn_def": "網路攻擊",
    "en_def": "an attack on computer systems through the internet",
    "sentence": "The hospital's computers stopped working after a {{BLANK}}, so doctors had to write patient notes by hand for two days.",
    "cn": "醫院的電腦在一次網路攻擊後停止運作,所以醫生們有兩天必須手寫病人的紀錄。"
  },
  {
    "word": "encryption",
    "pos": "n.",
    "cn_def": "加密",
    "en_def": "changing data into a secret code so others cannot read it",
    "sentence": "This messaging app uses strong {{BLANK}}, so even the company itself cannot read the messages that users send.",
    "cn": "這個通訊應用程式使用強大的加密技術,所以連公司本身都無法讀取使用者傳送的訊息。"
  },
  {
    "word": "encrypt",
    "pos": "v.",
    "cn_def": "將…加密",
    "en_def": "to put information into a secret code",
    "sentence": "You should {{BLANK}} important files before you send them online, because anyone could read them if they are stolen.",
    "cn": "你在網路上傳送重要檔案之前應該先將它們加密,因為萬一被偷,任何人都能讀取。"
  },
  {
    "word": "password",
    "pos": "n.",
    "cn_def": "密碼",
    "en_def": "a secret word or set of letters used to enter an account",
    "sentence": "My brother uses the same {{BLANK}} for every website, but I told him that this makes it easy for hackers.",
    "cn": "我哥哥在每個網站都用同一組密碼,但我告訴他這樣會讓駭客很容易得手。"
  },
  {
    "word": "breach",
    "pos": "n.",
    "cn_def": "外洩;違反",
    "en_def": "an event where private information is stolen or shown",
    "sentence": "After a data {{BLANK}} at the online store, thousands of customers' phone numbers appeared on the internet, so many people were angry.",
    "cn": "那家網路商店發生資料外洩後,數千名顧客的電話號碼出現在網路上,因此許多人非常生氣。"
  },
  {
    "word": "leak",
    "pos": "v.",
    "cn_def": "洩漏",
    "en_def": "to let secret information become known",
    "sentence": "An employee {{BLANK}}ed the details of the new phone before its launch, and the company lost its big surprise.",
    "cn": "一名員工在新手機發表前洩漏了它的細節,公司因此失去了大驚喜。"
  },
  {
    "word": "consent",
    "pos": "n.",
    "cn_def": "同意;許可",
    "en_def": "permission to do something",
    "sentence": "The school must get parents' {{BLANK}} before it posts students' photos online, because some families want to protect their privacy.",
    "cn": "學校在網路上張貼學生照片之前必須取得家長的同意,因為有些家庭想保護他們的隱私。"
  },
  {
    "word": "track",
    "pos": "v.",
    "cn_def": "追蹤",
    "en_def": "to follow where someone goes or what they do",
    "sentence": "Many free apps {{BLANK}} what you click and buy, and then they sell this information to advertising companies.",
    "cn": "許多免費應用程式會追蹤你點擊和購買的東西,然後把這些資訊賣給廣告公司。"
  },
  {
    "word": "monitor",
    "pos": "v.",
    "cn_def": "監控;監測",
    "en_def": "to watch or check something over a period of time",
    "sentence": "Some companies use software to {{BLANK}} how long workers spend on each task, but many employees say it feels unfair.",
    "cn": "有些公司使用軟體來監控員工在每項任務上花了多少時間,但許多員工說這感覺不公平。"
  },
  {
    "word": "anonymous",
    "pos": "adj.",
    "cn_def": "匿名的",
    "en_def": "with a name that is not known or not shown",
    "sentence": "The class survey was {{BLANK}}, so students felt free to say what they really thought about using AI for homework.",
    "cn": "這份班級問卷是匿名的,所以學生們能自在地說出他們對用人工智慧寫作業的真實想法。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身分",
    "en_def": "who a person is; their name and personal details",
    "sentence": "Criminals stole her {{BLANK}} by using her ID number online, and she spent months fixing her bank records.",
    "cn": "罪犯在網路上盜用她的身分證號碼竊取了她的身分,她花了好幾個月才處理好銀行紀錄。"
  },
  {
    "word": "verify",
    "pos": "v.",
    "cn_def": "核實;驗證",
    "en_def": "to check that something is true or correct",
    "sentence": "The bank sends a code to your phone to {{BLANK}} that it is really you, so strangers cannot easily use your account.",
    "cn": "銀行會傳一組代碼到你的手機來驗證真的是你本人,所以陌生人無法輕易使用你的帳戶。"
  },
  {
    "word": "authentication",
    "pos": "n.",
    "cn_def": "身分驗證",
    "en_def": "the process of proving who you are to a system",
    "sentence": "Two-step {{BLANK}} takes a few more seconds, but it makes your social media account much safer from hackers.",
    "cn": "雙重身分驗證多花幾秒鐘,但它能讓你的社群帳號更不容易被駭客入侵。"
  },
  {
    "word": "firewall",
    "pos": "n.",
    "cn_def": "防火牆",
    "en_def": "a system that blocks dangerous traffic from the internet",
    "sentence": "The company set up a stronger {{BLANK}} after the attack, and since then no strangers have entered its network.",
    "cn": "公司在遭受攻擊後架設了更強的防火牆,從那之後就沒有外人再闖入它的網路。"
  },
  {
    "word": "malware",
    "pos": "n.",
    "cn_def": "惡意軟體",
    "en_def": "harmful software that damages computers or steals data",
    "sentence": "I clicked a strange link in a message, and {{BLANK}} quickly spread through my computer and deleted many files.",
    "cn": "我點了訊息裡一個奇怪的連結,結果惡意軟體迅速擴散到我的電腦並刪除了許多檔案。"
  },
  {
    "word": "virus",
    "pos": "n.",
    "cn_def": "(電腦)病毒",
    "en_def": "a program that copies itself and harms computers",
    "sentence": "My dad's laptop got a {{BLANK}} from a free game website, so now it opens strange pop-up windows all the time.",
    "cn": "我爸爸的筆電從一個免費遊戲網站中了病毒,所以現在它一直跳出奇怪的視窗。"
  },
  {
    "word": "spam",
    "pos": "n.",
    "cn_def": "垃圾郵件",
    "en_def": "unwanted messages sent to many people",
    "sentence": "I get dozens of {{BLANK}} emails every day, but luckily my email app moves most of them into a separate folder.",
    "cn": "我每天收到幾十封垃圾郵件,但幸好我的郵件程式會把大部分移到另一個資料夾。"
  },
  {
    "word": "scam",
    "pos": "n.",
    "cn_def": "詐騙",
    "en_def": "a dishonest plan to get money from people",
    "sentence": "My grandmother almost fell for a phone {{BLANK}} that used an AI copy of my voice, but she called me to check first.",
    "cn": "我奶奶差點落入一通用人工智慧模仿我聲音的電話詐騙,但她先打電話給我確認。"
  },
  {
    "word": "phishing",
    "pos": "n.",
    "cn_def": "網路釣魚",
    "en_def": "fake messages that try to steal passwords or bank details",
    "sentence": "The email looked like it came from our bank, but it was a {{BLANK}} attack, so I deleted it without clicking anything.",
    "cn": "那封電子郵件看起來像是銀行寄來的,但它其實是網路釣魚攻擊,所以我什麼都沒點就把它刪了。"
  },
  {
    "word": "cookie",
    "pos": "n.",
    "cn_def": "(網站)Cookie;瀏覽紀錄檔",
    "en_def": "a small file a website saves to remember your activity",
    "sentence": "Every time I open a news website, it asks me to accept {{BLANK}}s, but I usually say no because I do not want to be tracked.",
    "cn": "每次我打開新聞網站,它都會要求我接受Cookie,但我通常會拒絕,因為我不想被追蹤。"
  },
  {
    "word": "biometric",
    "pos": "adj.",
    "cn_def": "生物辨識的",
    "en_def": "using body features like fingerprints or faces to identify people",
    "sentence": "The airport now uses {{BLANK}} gates that scan your face, so passengers can pass through security much more quickly.",
    "cn": "機場現在使用會掃描臉部的生物辨識閘門,所以旅客能更快地通過安檢。"
  },
  {
    "word": "fingerprint",
    "pos": "n.",
    "cn_def": "指紋",
    "en_def": "the pattern of lines on the tip of your finger",
    "sentence": "I unlock my phone with my {{BLANK}}, but it does not work when my hands are wet after swimming.",
    "cn": "我用指紋解鎖手機,但游泳後手濕濕的時候就沒辦法用。"
  },
  {
    "word": "facial",
    "pos": "adj.",
    "cn_def": "臉部的",
    "en_def": "related to the face",
    "sentence": "Some schools use {{BLANK}} scanning to take attendance, but many parents think this collects too much personal data.",
    "cn": "有些學校用臉部掃描來點名,但許多家長認為這蒐集了太多個人資料。"
  },
  {
    "word": "confidential",
    "pos": "adj.",
    "cn_def": "機密的",
    "en_def": "meant to be kept secret",
    "sentence": "The doctor said patient records are {{BLANK}}, so they should never be typed into a public chatbot.",
    "cn": "醫生說病歷是機密的,所以絕不應該輸入到公開的聊天機器人裡。"
  },
  {
    "word": "safeguard",
    "pos": "v.",
    "cn_def": "保護;捍衛",
    "en_def": "to protect something from harm or loss",
    "sentence": "New laws aim to {{BLANK}} children's personal information, because young users often share too much online.",
    "cn": "新法律旨在保護兒童的個人資訊,因為年輕使用者經常在網路上分享太多。"
  },
  {
    "word": "backup",
    "pos": "n.",
    "cn_def": "備份",
    "en_def": "an extra copy of data kept in case the original is lost",
    "sentence": "Luckily I had a {{BLANK}} of my science report, because my laptop broke the night before it was due.",
    "cn": "幸好我有科學報告的備份,因為我的筆電在截止前一晚壞掉了。"
  }
];

const MCQS = [
  {
    "q": "Many parents worry about their children's _____, because some apps collect photos and locations without asking clearly.",
    "options": [
      "lawsuit",
      "privacy",
      "cloud",
      "plagiarism"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The city added more _____ cameras near the station, and although crime dropped, some people felt they were always being watched.",
    "options": [
      "institution",
      "interface",
      "surveillance",
      "transformation"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "A _____ broke into the shop's website last week, so the owner told all customers to change their passwords.",
    "options": [
      "hacker",
      "stereotype",
      "healthcare",
      "sector"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Someone tried to _____ my email account, but the system sent me a warning, so I changed my password at once.",
    "options": [
      "adjust",
      "eliminate",
      "undermine",
      "hack"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hospital's computers stopped working after a _____, so doctors had to write patient notes by hand for two days.",
    "options": [
      "convenience",
      "cyberattack",
      "scrutiny",
      "cloud"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "This messaging app uses strong _____, so even the company itself cannot read the messages that users send.",
    "options": [
      "transparency",
      "regulator",
      "stereotype",
      "encryption"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "You should _____ important files before you send them online, because anyone could read them if they are stolen.",
    "options": [
      "encrypt",
      "revolutionise",
      "benefit",
      "predict"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "My brother uses the same _____ for every website, but I told him that this makes it easy for hackers.",
    "options": [
      "bug",
      "theory",
      "password",
      "investor"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "After a data _____ at the online store, thousands of customers' phone numbers appeared on the internet, so many people were angry.",
    "options": [
      "breach",
      "innovation",
      "paradox",
      "lecture"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "An employee _____ed the details of the new phone before its launch, and the company lost its big surprise.",
    "options": [
      "conclude",
      "maximise",
      "minimise",
      "leak"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The school must get parents' _____ before it posts students' photos online, because some families want to protect their privacy.",
    "options": [
      "transition",
      "consent",
      "perspective",
      "healthcare"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Many free apps _____ what you click and buy, and then they sell this information to advertising companies.",
    "options": [
      "distinguish",
      "negotiate",
      "track",
      "minimise"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Some companies use software to _____ how long workers spend on each task, but many employees say it feels unfair.",
    "options": [
      "monitor",
      "indicate",
      "eliminate",
      "validate"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The class survey was _____, so students felt free to say what they really thought about using AI for homework.",
    "options": [
      "essential",
      "adequate",
      "wearable",
      "anonymous"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Criminals stole her _____ by using her ID number online, and she spent months fixing her bank records.",
    "options": [
      "template",
      "identity",
      "budget",
      "strategy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The bank sends a code to your phone to _____ that it is really you, so strangers cannot easily use your account.",
    "options": [
      "alter",
      "dispute",
      "verify",
      "misuse"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Two-step _____ takes a few more seconds, but it makes your social media account much safer from hackers.",
    "options": [
      "sector",
      "authentication",
      "syllabus",
      "oversight"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The company set up a stronger _____ after the attack, and since then no strangers have entered its network.",
    "options": [
      "firewall",
      "approach",
      "prejudice",
      "interface"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "I clicked a strange link in a message, and _____ quickly spread through my computer and deleted many files.",
    "options": [
      "ramification",
      "divide",
      "malware",
      "smartphone"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "My dad's laptop got a _____ from a free game website, so now it opens strange pop-up windows all the time.",
    "options": [
      "strategy",
      "profit",
      "subscription",
      "virus"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "I get dozens of _____ emails every day, but luckily my email app moves most of them into a separate folder.",
    "options": [
      "spam",
      "misinformation",
      "loophole",
      "drawback"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "My grandmother almost fell for a phone _____ that used an AI copy of my voice, but she called me to check first.",
    "options": [
      "copyright",
      "scam",
      "profit",
      "drawback"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The email looked like it came from our bank, but it was a _____ attack, so I deleted it without clicking anything.",
    "options": [
      "prototype",
      "programmer",
      "phishing",
      "function"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Every time I open a news website, it asks me to accept _____s, but I usually say no because I do not want to be tracked.",
    "options": [
      "loophole",
      "regulator",
      "aspect",
      "cookie"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The airport now uses _____ gates that scan your face, so passengers can pass through security much more quickly.",
    "options": [
      "redundant",
      "driverless",
      "biometric",
      "enormous"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "I unlock my phone with my _____, but it does not work when my hands are wet after swimming.",
    "options": [
      "divide",
      "fingerprint",
      "avatar",
      "percentage"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Some schools use _____ scanning to take attendance, but many parents think this collects too much personal data.",
    "options": [
      "facial",
      "synthetic",
      "prior",
      "dishonest"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The doctor said patient records are _____, so they should never be typed into a public chatbot.",
    "options": [
      "digital",
      "biased",
      "freelance",
      "confidential"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "New laws aim to _____ children's personal information, because young users often share too much online.",
    "options": [
      "safeguard",
      "ensure",
      "clone",
      "emphasise"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Luckily I had a _____ of my science report, because my laptop broke the night before it was due.",
    "options": [
      "scrutiny",
      "backup",
      "potential",
      "sector"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "privacy": {
    "pos": "n.",
    "en_def": "the right to keep your personal life secret",
    "cn_def": "隱私"
  },
  "surveillance": {
    "pos": "n.",
    "en_def": "the careful watching of people, often by cameras",
    "cn_def": "監視"
  },
  "hacker": {
    "pos": "n.",
    "en_def": "a person who breaks into computer systems",
    "cn_def": "駭客"
  },
  "hack": {
    "pos": "v.",
    "en_def": "to secretly get into someone's computer or account",
    "cn_def": "入侵(電腦);駭入"
  },
  "cyberattack": {
    "pos": "n.",
    "en_def": "an attack on computer systems through the internet",
    "cn_def": "網路攻擊"
  },
  "encryption": {
    "pos": "n.",
    "en_def": "changing data into a secret code so others cannot read it",
    "cn_def": "加密"
  },
  "encrypt": {
    "pos": "v.",
    "en_def": "to put information into a secret code",
    "cn_def": "將…加密"
  },
  "password": {
    "pos": "n.",
    "en_def": "a secret word or set of letters used to enter an account",
    "cn_def": "密碼"
  },
  "breach": {
    "pos": "n.",
    "en_def": "an event where private information is stolen or shown",
    "cn_def": "外洩;違反"
  },
  "leak": {
    "pos": "v.",
    "en_def": "to let secret information become known",
    "cn_def": "洩漏"
  },
  "consent": {
    "pos": "n.",
    "en_def": "permission to do something",
    "cn_def": "同意;許可"
  },
  "track": {
    "pos": "v.",
    "en_def": "to follow where someone goes or what they do",
    "cn_def": "追蹤"
  },
  "monitor": {
    "pos": "v.",
    "en_def": "to watch or check something over a period of time",
    "cn_def": "監控;監測"
  },
  "anonymous": {
    "pos": "adj.",
    "en_def": "with a name that is not known or not shown",
    "cn_def": "匿名的"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person is; their name and personal details",
    "cn_def": "身分"
  },
  "verify": {
    "pos": "v.",
    "en_def": "to check that something is true or correct",
    "cn_def": "核實;驗證"
  },
  "authentication": {
    "pos": "n.",
    "en_def": "the process of proving who you are to a system",
    "cn_def": "身分驗證"
  },
  "firewall": {
    "pos": "n.",
    "en_def": "a system that blocks dangerous traffic from the internet",
    "cn_def": "防火牆"
  },
  "malware": {
    "pos": "n.",
    "en_def": "harmful software that damages computers or steals data",
    "cn_def": "惡意軟體"
  },
  "virus": {
    "pos": "n.",
    "en_def": "a program that copies itself and harms computers",
    "cn_def": "(電腦)病毒"
  },
  "spam": {
    "pos": "n.",
    "en_def": "unwanted messages sent to many people",
    "cn_def": "垃圾郵件"
  },
  "scam": {
    "pos": "n.",
    "en_def": "a dishonest plan to get money from people",
    "cn_def": "詐騙"
  },
  "phishing": {
    "pos": "n.",
    "en_def": "fake messages that try to steal passwords or bank details",
    "cn_def": "網路釣魚"
  },
  "cookie": {
    "pos": "n.",
    "en_def": "a small file a website saves to remember your activity",
    "cn_def": "(網站)Cookie;瀏覽紀錄檔"
  },
  "biometric": {
    "pos": "adj.",
    "en_def": "using body features like fingerprints or faces to identify people",
    "cn_def": "生物辨識的"
  },
  "fingerprint": {
    "pos": "n.",
    "en_def": "the pattern of lines on the tip of your finger",
    "cn_def": "指紋"
  },
  "facial": {
    "pos": "adj.",
    "en_def": "related to the face",
    "cn_def": "臉部的"
  },
  "confidential": {
    "pos": "adj.",
    "en_def": "meant to be kept secret",
    "cn_def": "機密的"
  },
  "safeguard": {
    "pos": "v.",
    "en_def": "to protect something from harm or loss",
    "cn_def": "保護;捍衛"
  },
  "backup": {
    "pos": "n.",
    "en_def": "an extra copy of data kept in case the original is lost",
    "cn_def": "備份"
  },
  "lawsuit": {
    "pos": "n.",
    "en_def": "a case brought to a court of law",
    "cn_def": "訴訟"
  },
  "cloud": {
    "pos": "n.",
    "en_def": "online storage and services on distant computers",
    "cn_def": "雲端"
  },
  "plagiarism": {
    "pos": "n.",
    "en_def": "copying someone else's work and saying it is yours",
    "cn_def": "抄襲"
  },
  "institution": {
    "pos": "n.",
    "en_def": "a large important organisation, like a university or bank",
    "cn_def": "機構"
  },
  "interface": {
    "pos": "n.",
    "en_def": "the part of a program that a user sees and uses",
    "cn_def": "介面"
  },
  "transformation": {
    "pos": "n.",
    "en_def": "a complete change in something",
    "cn_def": "轉型;轉變"
  },
  "stereotype": {
    "pos": "n.",
    "en_def": "a fixed, too-simple idea about a group of people",
    "cn_def": "刻板印象"
  },
  "healthcare": {
    "pos": "n.",
    "en_def": "services for looking after people's health",
    "cn_def": "醫療照護"
  },
  "sector": {
    "pos": "n.",
    "en_def": "one part of a country's economy or society",
    "cn_def": "部門;產業"
  },
  "adjust": {
    "pos": "v.",
    "en_def": "to change something slightly to make it work better",
    "cn_def": "調整"
  },
  "eliminate": {
    "pos": "v.",
    "en_def": "to remove something completely",
    "cn_def": "消除;淘汰"
  },
  "undermine": {
    "pos": "v.",
    "en_def": "to slowly make something weaker",
    "cn_def": "逐漸削弱;破壞"
  },
  "convenience": {
    "pos": "n.",
    "en_def": "being easy and useful, saving time",
    "cn_def": "便利"
  },
  "scrutiny": {
    "pos": "n.",
    "en_def": "careful and detailed examination",
    "cn_def": "仔細審查;監督"
  },
  "transparency": {
    "pos": "n.",
    "en_def": "openness about how decisions are made",
    "cn_def": "透明度"
  },
  "regulator": {
    "pos": "n.",
    "en_def": "an official group that makes sure rules are followed",
    "cn_def": "監管機構"
  },
  "revolutionise": {
    "pos": "v.",
    "en_def": "to change something completely and in a big way",
    "cn_def": "徹底改變"
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
  "bug": {
    "pos": "n.",
    "en_def": "a mistake in a computer program",
    "cn_def": "程式錯誤"
  },
  "theory": {
    "pos": "n.",
    "en_def": "an idea that tries to explain something",
    "cn_def": "理論"
  },
  "investor": {
    "pos": "n.",
    "en_def": "a person who puts money into a business to make more money",
    "cn_def": "投資人"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method or invention",
    "cn_def": "創新"
  },
  "paradox": {
    "pos": "n.",
    "en_def": "a situation that seems strange because it has two opposite facts",
    "cn_def": "矛盾;悖論"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to students on a subject",
    "cn_def": "講課;演講"
  },
  "conclude": {
    "pos": "v.",
    "en_def": "to decide something after thinking about the facts",
    "cn_def": "下結論;推斷"
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
  "transition": {
    "pos": "n.",
    "en_def": "the process of changing from one state to another",
    "cn_def": "過渡;轉換"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a way of thinking about something",
    "cn_def": "觀點;角度"
  },
  "distinguish": {
    "pos": "v.",
    "en_def": "to see the difference between things",
    "cn_def": "區分;辨別"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something to reach an agreement",
    "cn_def": "協商;談判"
  },
  "indicate": {
    "pos": "v.",
    "en_def": "to show or suggest that something is true",
    "cn_def": "顯示;表明"
  },
  "validate": {
    "pos": "v.",
    "en_def": "to prove that something is true or correct",
    "cn_def": "驗證;證實"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary",
    "cn_def": "必要的;不可或缺的"
  },
  "adequate": {
    "pos": "adj.",
    "en_def": "enough or good enough for a purpose",
    "cn_def": "足夠的;適當的"
  },
  "wearable": {
    "pos": "adj.",
    "en_def": "designed to be worn on the body",
    "cn_def": "可穿戴的"
  },
  "template": {
    "pos": "n.",
    "en_def": "a ready-made pattern you can use and fill in",
    "cn_def": "範本;模板"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money available to spend",
    "cn_def": "預算"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan for reaching a goal",
    "cn_def": "策略"
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something, usually slightly",
    "cn_def": "改變;修改"
  },
  "dispute": {
    "pos": "v.",
    "en_def": "to say that something is not true or correct",
    "cn_def": "質疑;爭論"
  },
  "misuse": {
    "pos": "v.",
    "en_def": "to use something in a wrong or harmful way",
    "cn_def": "濫用;誤用"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of topics and plans for a course",
    "cn_def": "課程大綱"
  },
  "oversight": {
    "pos": "n.",
    "en_def": "the job of watching and checking that something is done properly",
    "cn_def": "監督"
  },
  "approach": {
    "pos": "n.",
    "en_def": "a way of dealing with something",
    "cn_def": "方法;途徑"
  },
  "prejudice": {
    "pos": "n.",
    "en_def": "an unfair opinion formed without enough knowledge",
    "cn_def": "偏見;成見"
  },
  "ramification": {
    "pos": "n.",
    "en_def": "a possible result of an action, often unexpected",
    "cn_def": "(意外的)後果;影響"
  },
  "divide": {
    "pos": "n.",
    "en_def": "a large difference between two groups",
    "cn_def": "差距;鴻溝"
  },
  "smartphone": {
    "pos": "n.",
    "en_def": "a mobile phone that can use the internet and apps",
    "cn_def": "智慧型手機"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money a business makes after paying its costs",
    "cn_def": "利潤;獲利"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "money you pay regularly to use a service",
    "cn_def": "訂閱"
  },
  "misinformation": {
    "pos": "n.",
    "en_def": "wrong information that is spread, often by mistake",
    "cn_def": "錯誤訊息"
  },
  "loophole": {
    "pos": "n.",
    "en_def": "a gap in a rule that lets people avoid it",
    "cn_def": "漏洞"
  },
  "drawback": {
    "pos": "n.",
    "en_def": "a disadvantage or problem",
    "cn_def": "缺點"
  },
  "copyright": {
    "pos": "n.",
    "en_def": "the legal right to own and control creative work",
    "cn_def": "著作權;版權"
  },
  "prototype": {
    "pos": "n.",
    "en_def": "the first model of a new product, made for testing",
    "cn_def": "原型;樣品"
  },
  "programmer": {
    "pos": "n.",
    "en_def": "a person who writes computer programs",
    "cn_def": "程式設計師"
  },
  "function": {
    "pos": "n.",
    "en_def": "the job that something is designed to do",
    "cn_def": "功能"
  },
  "aspect": {
    "pos": "n.",
    "en_def": "one part or feature of something",
    "cn_def": "方面;層面"
  },
  "redundant": {
    "pos": "adj.",
    "en_def": "no longer needed for a job, so dismissed",
    "cn_def": "被裁員的;多餘的"
  },
  "driverless": {
    "pos": "adj.",
    "en_def": "working without a human driver",
    "cn_def": "無人駕駛的"
  },
  "enormous": {
    "pos": "adj.",
    "en_def": "very large",
    "cn_def": "巨大的;龐大的"
  },
  "avatar": {
    "pos": "n.",
    "en_def": "a picture or character that represents you online",
    "cn_def": "虛擬化身;大頭貼"
  },
  "percentage": {
    "pos": "n.",
    "en_def": "an amount shown as part of 100",
    "cn_def": "百分比"
  },
  "synthetic": {
    "pos": "adj.",
    "en_def": "made artificially, not natural or real",
    "cn_def": "合成的;人造的"
  },
  "prior": {
    "pos": "adj.",
    "en_def": "happening before something",
    "cn_def": "先前的;事先的"
  },
  "dishonest": {
    "pos": "adj.",
    "en_def": "not telling the truth; likely to cheat",
    "cn_def": "不誠實的"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology",
    "cn_def": "數位的"
  },
  "biased": {
    "pos": "adj.",
    "en_def": "unfairly favouring one side or group",
    "cn_def": "有偏見的;偏頗的"
  },
  "freelance": {
    "pos": "adj.",
    "en_def": "working for different companies, not employed by one",
    "cn_def": "自由接案的"
  },
  "ensure": {
    "pos": "v.",
    "en_def": "to make certain that something happens",
    "cn_def": "確保"
  },
  "clone": {
    "pos": "v.",
    "en_def": "to make an exact copy of something",
    "cn_def": "複製;仿製"
  },
  "emphasise": {
    "pos": "v.",
    "en_def": "to show that something is very important",
    "cn_def": "強調"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility of developing or being useful in the future",
    "cn_def": "潛力;可能性"
  }
};

const EXTRA_GLOSSES = {};
