// Topic 20 Subunit 5 Quiz Data: The Workplace & Management 職場與管理
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S05 - The Workplace & Management 職場與管理",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工",
    "en_def": "a person who is paid to work for a company",
    "sentence": "Every new {{BLANK}} gets a laptop on the first day, and a senior worker shows them around the office.",
    "cn": "每位新員工第一天都會拿到一台筆電，而且一位資深員工會帶他們參觀辦公室。"
  },
  {
    "word": "staff",
    "pos": "n.",
    "cn_def": "員工；全體職員",
    "en_def": "all the people who work for an organisation",
    "sentence": "The restaurant is short of {{BLANK}} during the holidays, so the owner's children help in the kitchen.",
    "cn": "這家餐廳在假期期間人手不足，所以老闆的孩子會到廚房幫忙。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理",
    "en_def": "a person who controls a team or part of a business",
    "sentence": "The {{BLANK}} listened to our ideas carefully, but she said we had to finish the project before Friday.",
    "cn": "經理仔細聽取我們的想法，但她說我們必須在週五前完成專案。"
  },
  {
    "word": "management",
    "pos": "n.",
    "cn_def": "管理階層",
    "en_def": "the people who control a company",
    "sentence": "The {{BLANK}} decided to close the factory, so hundreds of workers protested outside the head office.",
    "cn": "管理階層決定關閉工廠，所以數百名工人在總公司外抗議。"
  },
  {
    "word": "team leader",
    "pos": "n.phr.",
    "cn_def": "組長",
    "en_def": "a person who guides a small group of workers",
    "sentence": "As {{BLANK}}, Ken gives each person a clear task, and he checks their progress every afternoon.",
    "cn": "身為組長，阿肯給每個人明確的任務，而且他每天下午檢查他們的進度。"
  },
  {
    "word": "boss",
    "pos": "n.",
    "cn_def": "老闆；上司",
    "en_def": "the person who is in charge of you at work",
    "sentence": "My {{BLANK}} lets me work from home on Fridays because I always finish my reports on time.",
    "cn": "我的上司讓我週五在家工作，因為我總是準時完成報告。"
  },
  {
    "word": "department",
    "pos": "n.",
    "cn_def": "部門",
    "en_def": "a section of a large organisation",
    "sentence": "She moved from the sales {{BLANK}} to marketing last year, and she enjoys planning adverts much more.",
    "cn": "她去年從銷售部門調到行銷部，而且她更喜歡規劃廣告。"
  },
  {
    "word": "human resources",
    "pos": "n.phr.",
    "cn_def": "人力資源部",
    "en_def": "the department that deals with hiring and staff",
    "sentence": "If you have a problem with your contract, you should talk to {{BLANK}}, because they handle staff issues.",
    "cn": "如果你的合約有問題，你應該找人力資源部談，因為他們負責處理員工事務。"
  },
  {
    "word": "job interview",
    "pos": "n.phr.",
    "cn_def": "工作面試",
    "en_def": "a meeting where an employer asks questions to choose a worker",
    "sentence": "I felt nervous before my first {{BLANK}}, but I had practised my answers, so it went well.",
    "cn": "我在第一次工作面試前很緊張，但我練習過答案，所以進行得很順利。"
  },
  {
    "word": "job description",
    "pos": "n.phr.",
    "cn_def": "職務說明",
    "en_def": "a written list of the duties of a job",
    "sentence": "According to the {{BLANK}}, the assistant must speak English, so my sister decided to apply.",
    "cn": "根據職務說明，這位助理必須會說英文，所以我姊姊決定去應徵。"
  },
  {
    "word": "pay rise",
    "pos": "n.phr.",
    "cn_def": "加薪",
    "en_def": "an increase in the money you earn",
    "sentence": "After three years without a {{BLANK}}, the nurses asked the hospital for more money, and it finally agreed.",
    "cn": "在三年沒有加薪之後，護理師們向醫院要求加薪，而醫院最終同意了。"
  },
  {
    "word": "bonus",
    "pos": "n.",
    "cn_def": "獎金",
    "en_def": "extra money added to normal pay",
    "sentence": "Workers in Taiwan usually get a year-end {{BLANK}} before Lunar New Year, so they can buy gifts for their families.",
    "cn": "台灣的員工通常在農曆新年前拿到年終獎金，所以他們可以為家人買禮物。"
  },
  {
    "word": "benefits package",
    "pos": "n.phr.",
    "cn_def": "福利方案",
    "en_def": "all the extra things a job offers, like insurance and holidays",
    "sentence": "The salary was lower than I hoped, but the {{BLANK}} included free meals and extra holidays.",
    "cn": "薪水比我期望的低，但福利方案包括免費餐點和額外假期。"
  },
  {
    "word": "performance review",
    "pos": "n.phr.",
    "cn_def": "績效評估",
    "en_def": "a meeting to discuss how well someone works",
    "sentence": "In her {{BLANK}}, the manager praised her teamwork, but she said Amy should speak up more in meetings.",
    "cn": "在她的績效評估中，經理稱讚她的團隊合作，但說艾美應該在會議中多發言。"
  },
  {
    "word": "resign",
    "pos": "v.",
    "cn_def": "辭職",
    "en_def": "to leave your job officially",
    "sentence": "He decided to {{BLANK}} from the bank because he wanted to open his own café, and his boss wished him luck.",
    "cn": "他決定從銀行辭職，因為他想開自己的咖啡店，而他的老闆祝他好運。"
  },
  {
    "word": "resignation",
    "pos": "n.",
    "cn_def": "辭職；辭呈",
    "en_def": "the act of leaving a job",
    "sentence": "The coach handed in his {{BLANK}} after the team lost ten games in a row, so the club began looking for a new one.",
    "cn": "在球隊連輸十場後，教練遞出了辭呈，所以球隊開始尋找新教練。"
  },
  {
    "word": "fire",
    "pos": "v.",
    "cn_def": "開除；解雇",
    "en_def": "to make someone leave their job",
    "sentence": "The company had to {{BLANK}} the worker who stole money, and it also changed the way cash is counted.",
    "cn": "公司必須開除那名偷錢的員工，而且也改變了點算現金的方式。"
  },
  {
    "word": "recruitment",
    "pos": "n.",
    "cn_def": "招募",
    "en_def": "the process of finding new workers",
    "sentence": "{{BLANK}} is hard for factories in the countryside, because many young people prefer to work in big cities.",
    "cn": "鄉間工廠的招募很困難，因為許多年輕人比較喜歡在大城市工作。"
  },
  {
    "word": "onboarding",
    "pos": "n.",
    "cn_def": "新人到職訓練",
    "en_def": "helping new workers learn about their job and company",
    "sentence": "The company's {{BLANK}} lasts two weeks, so new staff learn the systems before they meet any customers.",
    "cn": "公司的新人到職訓練為期兩週，所以新員工在接觸任何客戶前會先學習系統。"
  },
  {
    "word": "teamwork",
    "pos": "n.",
    "cn_def": "團隊合作",
    "en_def": "working well together as a group",
    "sentence": "The project succeeded because of good {{BLANK}}, and each member helped the others when they fell behind.",
    "cn": "這個專案因為良好的團隊合作而成功，而且每位成員在別人進度落後時都會幫忙。"
  },
  {
    "word": "minutes",
    "pos": "n.",
    "cn_def": "會議紀錄",
    "en_def": "a written record of what was said at a meeting",
    "sentence": "Linda wrote the {{BLANK}} of the meeting, so anyone who was absent could read what had been decided.",
    "cn": "琳達撰寫了會議的會議紀錄，所以任何缺席的人都能讀到決議內容。"
  },
  {
    "word": "delegation",
    "pos": "n.",
    "cn_def": "授權；分派工作",
    "en_def": "giving part of your work to someone else",
    "sentence": "Good {{BLANK}} helps busy managers, because they can focus on big decisions while their team handles daily tasks.",
    "cn": "良好的授權能幫助忙碌的經理，因為他們可以專注於重大決策，而團隊處理日常事務。"
  },
  {
    "word": "work-life balance",
    "pos": "n.phr.",
    "cn_def": "工作與生活的平衡",
    "en_def": "a healthy mix of time for work and personal life",
    "sentence": "Many young workers care about {{BLANK}}, so they choose jobs that let them leave at six o'clock.",
    "cn": "許多年輕員工重視工作與生活的平衡，所以他們選擇可以六點下班的工作。"
  },
  {
    "word": "flexitime",
    "pos": "n.",
    "cn_def": "彈性工時",
    "en_def": "a system where workers choose when to start and finish",
    "sentence": "With {{BLANK}}, my mother starts work at seven, so she can pick up my brother from school at four.",
    "cn": "有了彈性工時，我媽媽七點開始上班，所以她可以四點去學校接我弟弟。"
  },
  {
    "word": "chain of command",
    "pos": "n.phr.",
    "cn_def": "指揮體系",
    "en_def": "the order of power from the top to the bottom of a group",
    "sentence": "In a large company, a {{BLANK}} is clear, but it can make decisions very slow.",
    "cn": "在大公司裡，指揮體系很清楚，但它可能讓決策變得非常緩慢。"
  },
  {
    "word": "middle manager",
    "pos": "n.phr.",
    "cn_def": "中階主管",
    "en_def": "a manager between top leaders and ordinary workers",
    "sentence": "As a {{BLANK}}, Mr Wu must follow orders from above, yet he also has to keep his own team happy.",
    "cn": "身為中階主管，吳先生必須服從上級命令，但他也得讓自己的團隊開心。"
  },
  {
    "word": "trainee",
    "pos": "n.",
    "cn_def": "實習生；受訓者",
    "en_def": "a person who is learning a job",
    "sentence": "The {{BLANK}} chef watched the head cook closely, and after six months she could make the soup on her own.",
    "cn": "那位實習廚師仔細觀察主廚，而且六個月後她就能獨自做湯了。"
  },
  {
    "word": "office politics",
    "pos": "n.phr.",
    "cn_def": "辦公室政治",
    "en_def": "the ways people try to gain power at work",
    "sentence": "He was good at his job, but he hated {{BLANK}}, so he left to work for himself.",
    "cn": "他很擅長自己的工作，但他討厭辦公室政治，所以他離職自己創業。"
  }
];

const MCQS = [
  {
    "q": "Every new _____ gets a laptop on the first day, and a senior worker shows them around the office.",
    "options": [
      "supplier",
      "devaluation",
      "copycat",
      "employee"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The restaurant is short of _____ during the holidays, so the owner's children help in the kitchen.",
    "options": [
      "consultancy",
      "staff",
      "overdraft",
      "crowdsourcing"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ listened to our ideas carefully, but she said we had to finish the project before Friday.",
    "options": [
      "manager",
      "promotion",
      "instalment",
      "founder"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The _____ decided to close the factory, so hundreds of workers protested outside the head office.",
    "options": [
      "warranty",
      "bargaining",
      "management",
      "dedication"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "As _____, Ken gives each person a clear task, and he checks their progress every afternoon.",
    "options": [
      "trade war",
      "team leader",
      "trade route",
      "share price"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "My _____ lets me work from home on Fridays because I always finish my reports on time.",
    "options": [
      "acknowledgement",
      "depreciation",
      "vendor",
      "boss"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "She moved from the sales _____ to marketing last year, and she enjoys planning adverts much more.",
    "options": [
      "department",
      "liaison",
      "refund",
      "bankruptcy"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "If you have a problem with your contract, you should talk to _____, because they handle staff issues.",
    "options": [
      "market segment",
      "financial year",
      "human resources",
      "focus group"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "I felt nervous before my first _____, but I had practised my answers, so it went well.",
    "options": [
      "job interview",
      "exchange rate",
      "business owner",
      "developing country"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "According to the _____, the assistant must speak English, so my sister decided to apply.",
    "options": [
      "design thinking",
      "job description",
      "product development",
      "trade war"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "After three years without a _____, the nurses asked the hospital for more money, and it finally agreed.",
    "options": [
      "market research",
      "market crash",
      "pay rise",
      "loyalty card"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Workers in Taiwan usually get a year-end _____ before Lunar New Year, so they can buy gifts for their families.",
    "options": [
      "savings",
      "mismatch",
      "leadership",
      "bonus"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The salary was lower than I hoped, but the _____ included free meals and extra holidays.",
    "options": [
      "developing country",
      "credit card",
      "benefits package",
      "after-sales service"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "In her _____, the manager praised her teamwork, but she said Amy should speak up more in meetings.",
    "options": [
      "marketing mix",
      "the bottom line",
      "exchange rate",
      "performance review"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "He decided to _____ from the bank because he wanted to open his own café, and his boss wished him luck.",
    "options": [
      "resign",
      "iterate",
      "advance",
      "award"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The coach handed in his _____ after the team lost ten games in a row, so the club began looking for a new one.",
    "options": [
      "consultancy",
      "resignation",
      "creditor",
      "liquidation"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The company had to _____ the worker who stole money, and it also changed the way cash is counted.",
    "options": [
      "fire",
      "hike",
      "engage",
      "settle"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "_____ is hard for factories in the countryside, because many young people prefer to work in big cities.",
    "options": [
      "overdraft",
      "unicorn",
      "mismatch",
      "recruitment"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The company's _____ lasts two weeks, so new staff learn the systems before they meet any customers.",
    "options": [
      "supplier",
      "onboarding",
      "overdraft",
      "cutback"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The project succeeded because of good _____, and each member helped the others when they fell behind.",
    "options": [
      "consultancy",
      "pricing",
      "teamwork",
      "creditor"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Linda wrote the _____ of the meeting, so anyone who was absent could read what had been decided.",
    "options": [
      "complacency",
      "leadership",
      "competence",
      "minutes"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Good _____ helps busy managers, because they can focus on big decisions while their team handles daily tasks.",
    "options": [
      "rebate",
      "delegation",
      "accelerator",
      "confidence"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Many young workers care about _____, so they choose jobs that let them leave at six o'clock.",
    "options": [
      "work-life balance",
      "sales target",
      "click-through rate",
      "purchasing power"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "With _____, my mother starts work at seven, so she can pick up my brother from school at four.",
    "options": [
      "decision-making",
      "deliverable",
      "flexitime",
      "vendor"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "In a large company, a _____ is clear, but it can make decisions very slow.",
    "options": [
      "chain of command",
      "stock market",
      "impulse buying",
      "user experience"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "As a _____, Mr Wu must follow orders from above, yet he also has to keep his own team happy.",
    "options": [
      "first-mover advantage",
      "a ballpark figure",
      "clearance sale",
      "middle manager"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The _____ chef watched the head cook closely, and after six months she could make the soup on her own.",
    "options": [
      "founder",
      "trainee",
      "punctuality",
      "arrangement"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "He was good at his job, but he hated _____, so he left to work for himself.",
    "options": [
      "down payment",
      "market segment",
      "office politics",
      "developing country"
    ],
    "answer": 2,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company",
    "cn_def": "員工"
  },
  "staff": {
    "pos": "n.",
    "en_def": "all the people who work for an organisation",
    "cn_def": "員工；全體職員"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who controls a team or part of a business",
    "cn_def": "經理"
  },
  "management": {
    "pos": "n.",
    "en_def": "the people who control a company",
    "cn_def": "管理階層"
  },
  "team leader": {
    "pos": "n.phr.",
    "en_def": "a person who guides a small group of workers",
    "cn_def": "組長"
  },
  "boss": {
    "pos": "n.",
    "en_def": "the person who is in charge of you at work",
    "cn_def": "老闆；上司"
  },
  "department": {
    "pos": "n.",
    "en_def": "a section of a large organisation",
    "cn_def": "部門"
  },
  "human resources": {
    "pos": "n.phr.",
    "en_def": "the department that deals with hiring and staff",
    "cn_def": "人力資源部"
  },
  "job interview": {
    "pos": "n.phr.",
    "en_def": "a meeting where an employer asks questions to choose a worker",
    "cn_def": "工作面試"
  },
  "job description": {
    "pos": "n.phr.",
    "en_def": "a written list of the duties of a job",
    "cn_def": "職務說明"
  },
  "pay rise": {
    "pos": "n.phr.",
    "en_def": "an increase in the money you earn",
    "cn_def": "加薪"
  },
  "bonus": {
    "pos": "n.",
    "en_def": "extra money added to normal pay",
    "cn_def": "獎金"
  },
  "benefits package": {
    "pos": "n.phr.",
    "en_def": "all the extra things a job offers, like insurance and holidays",
    "cn_def": "福利方案"
  },
  "performance review": {
    "pos": "n.phr.",
    "en_def": "a meeting to discuss how well someone works",
    "cn_def": "績效評估"
  },
  "resign": {
    "pos": "v.",
    "en_def": "to leave your job officially",
    "cn_def": "辭職"
  },
  "resignation": {
    "pos": "n.",
    "en_def": "the act of leaving a job",
    "cn_def": "辭職；辭呈"
  },
  "fire": {
    "pos": "v.",
    "en_def": "to make someone leave their job",
    "cn_def": "開除；解雇"
  },
  "recruitment": {
    "pos": "n.",
    "en_def": "the process of finding new workers",
    "cn_def": "招募"
  },
  "onboarding": {
    "pos": "n.",
    "en_def": "helping new workers learn about their job and company",
    "cn_def": "新人到職訓練"
  },
  "teamwork": {
    "pos": "n.",
    "en_def": "working well together as a group",
    "cn_def": "團隊合作"
  },
  "minutes": {
    "pos": "n.",
    "en_def": "a written record of what was said at a meeting",
    "cn_def": "會議紀錄"
  },
  "delegation": {
    "pos": "n.",
    "en_def": "giving part of your work to someone else",
    "cn_def": "授權；分派工作"
  },
  "work-life balance": {
    "pos": "n.phr.",
    "en_def": "a healthy mix of time for work and personal life",
    "cn_def": "工作與生活的平衡"
  },
  "flexitime": {
    "pos": "n.",
    "en_def": "a system where workers choose when to start and finish",
    "cn_def": "彈性工時"
  },
  "chain of command": {
    "pos": "n.phr.",
    "en_def": "the order of power from the top to the bottom of a group",
    "cn_def": "指揮體系"
  },
  "middle manager": {
    "pos": "n.phr.",
    "en_def": "a manager between top leaders and ordinary workers",
    "cn_def": "中階主管"
  },
  "trainee": {
    "pos": "n.",
    "en_def": "a person who is learning a job",
    "cn_def": "實習生；受訓者"
  },
  "office politics": {
    "pos": "n.phr.",
    "en_def": "the ways people try to gain power at work",
    "cn_def": "辦公室政治"
  },
  "supplier": {
    "pos": "n.",
    "en_def": "a company that provides goods to another company",
    "cn_def": "供應商"
  },
  "devaluation": {
    "pos": "n.",
    "en_def": "a fall in the value of a country's money",
    "cn_def": "貨幣貶值"
  },
  "copycat": {
    "pos": "n.",
    "en_def": "a person or company that copies another's idea",
    "cn_def": "模仿者"
  },
  "consultancy": {
    "pos": "n.",
    "en_def": "a company that gives expert advice",
    "cn_def": "顧問公司"
  },
  "overdraft": {
    "pos": "n.",
    "en_def": "money you take out of a bank beyond what is in your account",
    "cn_def": "透支"
  },
  "crowdsourcing": {
    "pos": "n.",
    "en_def": "getting ideas or work from a large group of people online",
    "cn_def": "群眾外包"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "activities to make people buy a product",
    "cn_def": "促銷"
  },
  "instalment": {
    "pos": "n.",
    "en_def": "one of several payments for something",
    "cn_def": "分期付款"
  },
  "founder": {
    "pos": "n.",
    "en_def": "the person who starts a company",
    "cn_def": "創辦人"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair a product if it breaks",
    "cn_def": "保固"
  },
  "bargaining": {
    "pos": "n.",
    "en_def": "discussing to reach an agreement about price or pay",
    "cn_def": "談判；議價"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong commitment",
    "cn_def": "奉獻；專注投入"
  },
  "trade war": {
    "pos": "n.phr.",
    "en_def": "when countries keep raising taxes on each other's goods",
    "cn_def": "貿易戰"
  },
  "trade route": {
    "pos": "n.phr.",
    "en_def": "a path used to move goods between places",
    "cn_def": "貿易路線"
  },
  "share price": {
    "pos": "n.phr.",
    "en_def": "the cost of one share in a company",
    "cn_def": "股價"
  },
  "acknowledgement": {
    "pos": "n.",
    "en_def": "a message saying you have received something",
    "cn_def": "回執；確認通知"
  },
  "depreciation": {
    "pos": "n.",
    "en_def": "a fall in the value of something over time",
    "cn_def": "折舊"
  },
  "vendor": {
    "pos": "n.",
    "en_def": "a person or company that sells something",
    "cn_def": "賣家；廠商"
  },
  "liaison": {
    "pos": "n.",
    "en_def": "communication between groups so they work well together",
    "cn_def": "聯繫；聯絡"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money returned to a customer",
    "cn_def": "退款"
  },
  "bankruptcy": {
    "pos": "n.",
    "en_def": "the state of being unable to pay debts",
    "cn_def": "破產"
  },
  "market segment": {
    "pos": "n.phr.",
    "en_def": "one group of customers with similar needs",
    "cn_def": "市場區隔"
  },
  "financial year": {
    "pos": "n.phr.",
    "en_def": "the twelve months a company uses for its accounts",
    "cn_def": "會計年度"
  },
  "focus group": {
    "pos": "n.phr.",
    "en_def": "a small group asked to give opinions on a product",
    "cn_def": "焦點團體"
  },
  "exchange rate": {
    "pos": "n.phr.",
    "en_def": "the value of one currency compared with another",
    "cn_def": "匯率"
  },
  "business owner": {
    "pos": "n.phr.",
    "en_def": "a person who owns a company or shop",
    "cn_def": "企業主；老闆"
  },
  "developing country": {
    "pos": "n.phr.",
    "en_def": "a poorer country that is building up its industry",
    "cn_def": "開發中國家"
  },
  "design thinking": {
    "pos": "n.phr.",
    "en_def": "solving problems by focusing on users' real needs",
    "cn_def": "設計思考"
  },
  "product development": {
    "pos": "n.phr.",
    "en_def": "the process of creating a new product",
    "cn_def": "產品開發"
  },
  "market research": {
    "pos": "n.phr.",
    "en_def": "collecting information about what customers want",
    "cn_def": "市場調查"
  },
  "market crash": {
    "pos": "n.phr.",
    "en_def": "a sudden, large fall in share prices",
    "cn_def": "股市崩盤"
  },
  "loyalty card": {
    "pos": "n.phr.",
    "en_def": "a card that gives regular customers rewards",
    "cn_def": "集點卡；會員卡"
  },
  "savings": {
    "pos": "n.",
    "en_def": "money you have kept and not spent",
    "cn_def": "存款；積蓄"
  },
  "mismatch": {
    "pos": "n.",
    "en_def": "a situation where two things do not fit well together",
    "cn_def": "不匹配"
  },
  "leadership": {
    "pos": "n.",
    "en_def": "the ability to lead people",
    "cn_def": "領導力；領導"
  },
  "credit card": {
    "pos": "n.phr.",
    "en_def": "a plastic card used to buy things and pay later",
    "cn_def": "信用卡"
  },
  "after-sales service": {
    "pos": "n.phr.",
    "en_def": "help a company gives after you buy something",
    "cn_def": "售後服務"
  },
  "marketing mix": {
    "pos": "n.phr.",
    "en_def": "the combination of product, price, place and promotion",
    "cn_def": "行銷組合"
  },
  "the bottom line": {
    "pos": "n.phr.",
    "en_def": "the most important fact; or the final profit",
    "cn_def": "底線；最重要的事"
  },
  "iterate": {
    "pos": "v.",
    "en_def": "to repeat a process to improve something step by step",
    "cn_def": "反覆改進"
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward or make progress",
    "cn_def": "晉升；進步"
  },
  "award": {
    "pos": "v.",
    "en_def": "to give something officially as a prize or contract",
    "cn_def": "授予；給予"
  },
  "creditor": {
    "pos": "n.",
    "en_def": "a person or company that is owed money",
    "cn_def": "債權人"
  },
  "liquidation": {
    "pos": "n.",
    "en_def": "closing a company and selling everything to pay debts",
    "cn_def": "清算"
  },
  "hike": {
    "pos": "v.",
    "en_def": "to increase prices or taxes suddenly",
    "cn_def": "調漲；大幅提高"
  },
  "engage": {
    "pos": "v.",
    "en_def": "to attract and keep someone's interest",
    "cn_def": "吸引；使參與"
  },
  "settle": {
    "pos": "v.",
    "en_def": "to pay money that you owe",
    "cn_def": "結清；支付"
  },
  "unicorn": {
    "pos": "n.",
    "en_def": "a young company worth over one billion dollars",
    "cn_def": "獨角獸企業"
  },
  "cutback": {
    "pos": "n.",
    "en_def": "a reduction in spending or staff",
    "cn_def": "削減"
  },
  "pricing": {
    "pos": "n.",
    "en_def": "deciding how much to charge for something",
    "cn_def": "定價"
  },
  "complacency": {
    "pos": "n.",
    "en_def": "feeling too satisfied, so you stop trying hard",
    "cn_def": "自滿"
  },
  "competence": {
    "pos": "n.",
    "en_def": "the ability to do something well",
    "cn_def": "能力；勝任"
  },
  "rebate": {
    "pos": "n.",
    "en_def": "money given back to a buyer",
    "cn_def": "退款；回饋金"
  },
  "accelerator": {
    "pos": "n.",
    "en_def": "a short programme that helps start-ups grow very fast",
    "cn_def": "加速器"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "a feeling that you can trust someone or something",
    "cn_def": "信心"
  },
  "sales target": {
    "pos": "n.phr.",
    "en_def": "the amount a seller is expected to sell",
    "cn_def": "銷售目標"
  },
  "click-through rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who click on an online advert",
    "cn_def": "點擊率"
  },
  "purchasing power": {
    "pos": "n.phr.",
    "en_def": "how much you can buy with your money",
    "cn_def": "購買力"
  },
  "decision-making": {
    "pos": "n.",
    "en_def": "the process of making choices",
    "cn_def": "決策"
  },
  "deliverable": {
    "pos": "n.",
    "en_def": "a piece of work you must complete and hand over",
    "cn_def": "交付成果"
  },
  "stock market": {
    "pos": "n.phr.",
    "en_def": "the place where shares in companies are bought and sold",
    "cn_def": "股票市場"
  },
  "impulse buying": {
    "pos": "n.phr.",
    "en_def": "buying things suddenly without planning",
    "cn_def": "衝動購物"
  },
  "user experience": {
    "pos": "n.phr.",
    "en_def": "how easy and pleasant something is to use",
    "cn_def": "使用者體驗"
  },
  "first-mover advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of being the first company in a new market",
    "cn_def": "先行者優勢"
  },
  "a ballpark figure": {
    "pos": "n.phr.",
    "en_def": "a rough estimate of a number",
    "cn_def": "大概的數字"
  },
  "clearance sale": {
    "pos": "n.phr.",
    "en_def": "a sale to get rid of old stock cheaply",
    "cn_def": "清倉拍賣"
  },
  "punctuality": {
    "pos": "n.",
    "en_def": "being on time",
    "cn_def": "準時"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "an agreement about how something will be done",
    "cn_def": "安排；協議"
  },
  "down payment": {
    "pos": "n.phr.",
    "en_def": "the first part of the price paid when buying something big",
    "cn_def": "頭期款"
  }
};

const EXTRA_GLOSSES = {};
