// Topic 20 Subunit 1 Quiz Data: Starting & Running a Business 創業與公司經營
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S01 - Starting & Running a Business 創業與公司經營",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "business plan",
    "pos": "n.phr.",
    "cn_def": "營運計畫書",
    "en_def": "a written plan of how a new business will work and make money",
    "sentence": "Before the bank agreed to lend her any money, it asked to see a detailed {{BLANK}}, so she spent two weeks writing it.",
    "cn": "在銀行同意借她任何錢之前，它要求看一份詳細的營運計畫書，所以她花了兩週撰寫。"
  },
  {
    "word": "sole trader",
    "pos": "n.phr.",
    "cn_def": "獨資經營者",
    "en_def": "a person who owns and runs a business alone",
    "sentence": "My uncle works as a {{BLANK}} selling handmade furniture, so he keeps all the profit but also carries all the risk.",
    "cn": "我叔叔以獨資經營者的身分販售手工家具，所以他保有全部利潤，但也承擔所有風險。"
  },
  {
    "word": "franchise",
    "pos": "n.",
    "cn_def": "加盟經營權",
    "en_def": "the right to sell a company's products under its name",
    "sentence": "She bought a coffee shop {{BLANK}} from a famous chain, and the company trained her staff before the shop opened.",
    "cn": "她向一家知名連鎖店買下咖啡店的加盟經營權，而且該公司在開店前培訓了她的員工。"
  },
  {
    "word": "franchisee",
    "pos": "n.",
    "cn_def": "加盟主",
    "en_def": "a person who runs a shop under a franchise",
    "sentence": "Every {{BLANK}} must follow the same recipes and rules, but each one can choose how to decorate the shop.",
    "cn": "每一位加盟主都必須遵守相同的食譜與規定，但每個人可以自行決定如何裝潢店面。"
  },
  {
    "word": "headquarters",
    "pos": "n.",
    "cn_def": "總部",
    "en_def": "the main office of a large company",
    "sentence": "The company's {{BLANK}} is in Taipei, but most of its factories are in other countries where land is cheaper.",
    "cn": "這家公司的總部位於台北，但它大部分的工廠都在土地較便宜的其他國家。"
  },
  {
    "word": "branch office",
    "pos": "n.phr.",
    "cn_def": "分公司",
    "en_def": "a smaller office of a company in another place",
    "sentence": "The bank opened a new {{BLANK}} near our school, so my parents no longer have to drive downtown.",
    "cn": "這家銀行在我們學校附近開了一間新的分公司，所以我爸媽不必再開車到市中心了。"
  },
  {
    "word": "founder",
    "pos": "n.",
    "cn_def": "創辦人",
    "en_def": "the person who starts a company",
    "sentence": "The {{BLANK}} of the company started the business in her garage, and now it employs more than five hundred people.",
    "cn": "這家公司的創辦人在她的車庫裡開始這門生意，而現在公司雇用了超過五百人。"
  },
  {
    "word": "co-founder",
    "pos": "n.",
    "cn_def": "共同創辦人",
    "en_def": "one of two or more people who start a company together",
    "sentence": "He became a {{BLANK}} of the app with his best friend from university, and they still share the same office.",
    "cn": "他和大學時最好的朋友一起成為這個應用程式的共同創辦人，而且他們至今仍共用同一間辦公室。"
  },
  {
    "word": "chief executive",
    "pos": "n.phr.",
    "cn_def": "執行長",
    "en_def": "the person with the highest position in a company",
    "sentence": "The {{BLANK}} announced the new plan at the meeting, and the share price rose the next morning.",
    "cn": "執行長在會議上宣布了新計畫，而隔天早上股價就上漲了。"
  },
  {
    "word": "board of directors",
    "pos": "n.phr.",
    "cn_def": "董事會",
    "en_def": "the group of people who control a company",
    "sentence": "The {{BLANK}} voted against the risky project, so the manager had to find a cheaper idea.",
    "cn": "董事會投票反對這個高風險的計畫，所以經理必須另找一個比較便宜的點子。"
  },
  {
    "word": "chairperson",
    "pos": "n.",
    "cn_def": "主席",
    "en_def": "the person who leads a meeting or a board",
    "sentence": "As {{BLANK}} of the meeting, Ms Lin made sure everyone had a chance to speak, but she kept each person to two minutes.",
    "cn": "身為會議的主席，林女士確保每個人都有發言的機會，但她將每個人限制在兩分鐘內。"
  },
  {
    "word": "managing director",
    "pos": "n.phr.",
    "cn_def": "總經理",
    "en_def": "the person in charge of running a company each day",
    "sentence": "The {{BLANK}} visits every department once a month because she wants to hear workers' ideas directly.",
    "cn": "總經理每個月走訪每個部門一次，因為她想直接聽取員工的想法。"
  },
  {
    "word": "firm",
    "pos": "n.",
    "cn_def": "公司；事務所",
    "en_def": "a company, especially a small or professional one",
    "sentence": "My cousin works for a small law {{BLANK}} in Kaohsiung, and she often stays late when there is an important case.",
    "cn": "我表姐在高雄一家小型法律事務所工作，而且遇到重要案件時她常常加班到很晚。"
  },
  {
    "word": "corporation",
    "pos": "n.",
    "cn_def": "大型企業",
    "en_def": "a large company or group of companies",
    "sentence": "The huge {{BLANK}} owns hotels, airlines and supermarkets, so it can offer customers discounts across all of them.",
    "cn": "這家龐大的大型企業擁有飯店、航空公司和超市，所以能在所有這些事業中提供顧客折扣。"
  },
  {
    "word": "limited company",
    "pos": "n.phr.",
    "cn_def": "有限公司",
    "en_def": "a company whose owners only lose what they invested if it fails",
    "sentence": "They turned their family shop into a {{BLANK}}, so their own house would be safe if the business failed.",
    "cn": "他們把家族商店改成有限公司，這樣即使生意失敗，他們自己的房子也會安全。"
  },
  {
    "word": "business model",
    "pos": "n.phr.",
    "cn_def": "商業模式",
    "en_def": "the way a company plans to make money",
    "sentence": "The free app shows adverts to users, and this {{BLANK}} has made the company very rich.",
    "cn": "這個免費應用程式會向使用者顯示廣告，而這種商業模式讓公司賺了大錢。"
  },
  {
    "word": "mission statement",
    "pos": "n.phr.",
    "cn_def": "使命宣言",
    "en_def": "a short sentence about a company's main aims",
    "sentence": "The {{BLANK}} on the wall says the company wants to make healthy food cheap, but some workers doubt it.",
    "cn": "牆上的使命宣言寫著公司希望讓健康食品變便宜，但有些員工對此存疑。"
  },
  {
    "word": "premises",
    "pos": "n.",
    "cn_def": "營業場所",
    "en_def": "the building and land a business uses",
    "sentence": "Smoking is not allowed anywhere on the {{BLANK}}, so the staff have to walk to the park during their break.",
    "cn": "營業場所內任何地方都禁止吸菸，所以員工休息時必須走到公園去。"
  },
  {
    "word": "operating costs",
    "pos": "n.phr.",
    "cn_def": "營運成本",
    "en_def": "the money needed to run a business every day",
    "sentence": "Electricity and rent make up most of the restaurant's {{BLANK}}, so the owner switched to energy-saving lights.",
    "cn": "電費和租金占了這家餐廳大部分的營運成本，所以老闆改用節能燈具。"
  },
  {
    "word": "bankrupt",
    "pos": "adj.",
    "cn_def": "破產的",
    "en_def": "unable to pay one's debts",
    "sentence": "The bookshop went {{BLANK}} last year because fewer people bought paper books, and the building is now a café.",
    "cn": "這家書店去年破產了，因為買紙本書的人變少，而那棟建築現在成了咖啡店。"
  },
  {
    "word": "bankruptcy",
    "pos": "n.",
    "cn_def": "破產",
    "en_def": "the state of being unable to pay debts",
    "sentence": "The airline was close to {{BLANK}} during the pandemic, but the government lent it money to keep flying.",
    "cn": "這家航空公司在疫情期間幾乎破產，但政府借錢給它讓它能繼續飛行。"
  },
  {
    "word": "liquidation",
    "pos": "n.",
    "cn_def": "清算",
    "en_def": "closing a company and selling everything to pay debts",
    "sentence": "After the company went into {{BLANK}}, all its computers and desks were sold, and the workers lost their jobs.",
    "cn": "這家公司進入清算後，所有電腦和桌子都被賣掉，員工們也失去了工作。"
  },
  {
    "word": "takeover",
    "pos": "n.",
    "cn_def": "收購",
    "en_def": "when one company gets control of another",
    "sentence": "The small game studio agreed to the {{BLANK}} because the bigger company promised to keep all its designers.",
    "cn": "這家小型遊戲工作室同意了這項收購，因為那家較大的公司承諾留下所有設計師。"
  },
  {
    "word": "merger",
    "pos": "n.",
    "cn_def": "合併",
    "en_def": "when two companies join to become one",
    "sentence": "The {{BLANK}} of the two banks created the largest bank in the country, but some branches had to close.",
    "cn": "兩家銀行的合併創造了國內最大的銀行，但有些分行不得不關閉。"
  },
  {
    "word": "joint venture",
    "pos": "n.phr.",
    "cn_def": "合資企業",
    "en_def": "a business project run by two companies together",
    "sentence": "The Taiwanese firm and a Japanese carmaker started a {{BLANK}} to build electric scooters, and both share the profits.",
    "cn": "這家台灣公司與一家日本汽車製造商成立了一家合資企業來生產電動機車，而且雙方共享利潤。"
  },
  {
    "word": "SME",
    "pos": "n.",
    "cn_def": "中小企業",
    "en_def": "a small or medium-sized business",
    "sentence": "Most companies in Taiwan are small, and a typical {{BLANK}} has fewer than two hundred workers, so such firms matter to the economy.",
    "cn": "台灣大多數公司規模都很小，一家典型的中小企業員工少於兩百人，因此這類公司對經濟很重要。"
  },
  {
    "word": "family-run",
    "pos": "adj.",
    "cn_def": "家族經營的",
    "en_def": "owned and managed by one family",
    "sentence": "We always eat at a small {{BLANK}} noodle shop near the station because the grandmother still cooks the soup herself.",
    "cn": "我們總是在車站附近一家小小的家族經營的麵店吃飯，因為奶奶仍然親自熬湯。"
  },
  {
    "word": "self-employed",
    "pos": "adj.",
    "cn_def": "自雇的",
    "en_def": "working for yourself, not for a company",
    "sentence": "Since becoming {{BLANK}}, my aunt can choose her own hours, but she has to find all her customers by herself.",
    "cn": "自從成為自雇者後，我阿姨可以自己選擇工作時間，但她必須自己找所有的客戶。"
  },
  {
    "word": "business owner",
    "pos": "n.phr.",
    "cn_def": "企業主；老闆",
    "en_def": "a person who owns a company or shop",
    "sentence": "As a {{BLANK}}, Mr Chen worries about rent every month, yet he loves being his own boss.",
    "cn": "身為企業主，陳先生每個月都擔心房租，但他很喜歡自己當老闆。"
  },
  {
    "word": "spin-off",
    "pos": "n.",
    "cn_def": "分拆出來的公司",
    "en_def": "a new company created from part of an older one",
    "sentence": "The video team became a {{BLANK}} of the TV channel, and it now makes its own shows for streaming sites.",
    "cn": "影片團隊成為電視頻道分拆出來的公司，而現在它為串流網站製作自己的節目。"
  }
];

const MCQS = [
  {
    "q": "Before the bank agreed to lend her any money, it asked to see a detailed _____, so she spent two weeks writing it.",
    "options": [
      "shopping mall",
      "business plan",
      "retail price",
      "tax return"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "My uncle works as a _____ selling handmade furniture, so he keeps all the profit but also carries all the risk.",
    "options": [
      "sole trader",
      "after-sales service",
      "lump sum",
      "profit margin"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "She bought a coffee shop _____ from a famous chain, and the company trained her staff before the shop opened.",
    "options": [
      "importer",
      "opportunity",
      "franchise",
      "hackathon"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Every _____ must follow the same recipes and rules, but each one can choose how to decorate the shop.",
    "options": [
      "expense",
      "dynamism",
      "refund",
      "franchisee"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The company's _____ is in Taipei, but most of its factories are in other countries where land is cheaper.",
    "options": [
      "headquarters",
      "resourcefulness",
      "teamwork",
      "bookkeeping"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The bank opened a new _____ near our school, so my parents no longer have to drive downtown.",
    "options": [
      "purchasing power",
      "work-life balance",
      "trade war",
      "branch office"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The _____ of the company started the business in her garage, and now it employs more than five hundred people.",
    "options": [
      "trainee",
      "founder",
      "paperwork",
      "complaint"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "He became a _____ of the app with his best friend from university, and they still share the same office.",
    "options": [
      "iteration",
      "resignation",
      "co-founder",
      "dedication"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The _____ announced the new plan at the meeting, and the share price rose the next morning.",
    "options": [
      "chief executive",
      "influencer marketing",
      "unique selling point",
      "net profit"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The _____ voted against the risky project, so the manager had to find a cheaper idea.",
    "options": [
      "bear market",
      "board of directors",
      "the bottom line",
      "loyalty card"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "As _____ of the meeting, Ms Lin made sure everyone had a chance to speak, but she kept each person to two minutes.",
    "options": [
      "dynamism",
      "insolvency",
      "receipt",
      "chairperson"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The _____ visits every department once a month because she wants to hear workers' ideas directly.",
    "options": [
      "cash flow",
      "ad campaign",
      "managing director",
      "developing country"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "My cousin works for a small law _____ in Kaohsiung, and she often stays late when there is an important case.",
    "options": [
      "savings",
      "firm",
      "decision-making",
      "bargaining"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The huge _____ owns hotels, airlines and supermarkets, so it can offer customers discounts across all of them.",
    "options": [
      "corporation",
      "bargaining",
      "coupon",
      "ally"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "They turned their family shop into a _____, so their own house would be safe if the business failed.",
    "options": [
      "brand loyalty",
      "bull market",
      "price war",
      "limited company"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The free app shows adverts to users, and this _____ has made the company very rich.",
    "options": [
      "purchasing power",
      "sales pitch",
      "business model",
      "price cut"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ on the wall says the company wants to make healthy food cheap, but some workers doubt it.",
    "options": [
      "mission statement",
      "benefits package",
      "price list",
      "research and development"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Smoking is not allowed anywhere on the _____, so the staff have to walk to the park during their break.",
    "options": [
      "devaluation",
      "bargain",
      "premises",
      "payback"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Electricity and rent make up most of the restaurant's _____, so the owner switched to energy-saving lights.",
    "options": [
      "market crash",
      "operating costs",
      "share price",
      "lump sum"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The bookshop went _____ last year because fewer people bought paper books, and the building is now a café.",
    "options": [
      "risk-averse",
      "best-selling",
      "cutthroat",
      "bankrupt"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The airline was close to _____ during the pandemic, but the government lent it money to keep flying.",
    "options": [
      "bankruptcy",
      "protectionism",
      "incubator",
      "positioning"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "After the company went into _____, all its computers and desks were sold, and the workers lost their jobs.",
    "options": [
      "depreciation",
      "stockbroker",
      "liquidation",
      "exporter"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The small game studio agreed to the _____ because the bigger company promised to keep all its designers.",
    "options": [
      "goodwill",
      "takeover",
      "bookkeeping",
      "redundancy"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The _____ of the two banks created the largest bank in the country, but some branches had to close.",
    "options": [
      "mismatch",
      "know-how",
      "SEO",
      "merger"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The Taiwanese firm and a Japanese carmaker started a _____ to build electric scooters, and both share the profits.",
    "options": [
      "free market",
      "joint venture",
      "cash flow",
      "profit margin"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Most companies in Taiwan are small, and a typical _____ has fewer than two hundred workers, so such firms matter to the economy.",
    "options": [
      "bonus",
      "advert",
      "warranty",
      "SME"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "We always eat at a small _____ noodle shop near the station because the grandmother still cooks the soup herself.",
    "options": [
      "bottom-up",
      "hands-off",
      "family-run",
      "booming"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Since becoming _____, my aunt can choose her own hours, but she has to find all her customers by herself.",
    "options": [
      "self-employed",
      "low-cost",
      "marketable",
      "hard-earned"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "As a _____, Mr Chen worries about rent every month, yet he loves being his own boss.",
    "options": [
      "financial year",
      "office politics",
      "business owner",
      "sales pitch"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The video team became a _____ of the TV channel, and it now makes its own shows for streaming sites.",
    "options": [
      "tender",
      "spin-off",
      "scale-up",
      "bookkeeping"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "business plan": {
    "pos": "n.phr.",
    "en_def": "a written plan of how a new business will work and make money",
    "cn_def": "營運計畫書"
  },
  "sole trader": {
    "pos": "n.phr.",
    "en_def": "a person who owns and runs a business alone",
    "cn_def": "獨資經營者"
  },
  "franchise": {
    "pos": "n.",
    "en_def": "the right to sell a company's products under its name",
    "cn_def": "加盟經營權"
  },
  "franchisee": {
    "pos": "n.",
    "en_def": "a person who runs a shop under a franchise",
    "cn_def": "加盟主"
  },
  "headquarters": {
    "pos": "n.",
    "en_def": "the main office of a large company",
    "cn_def": "總部"
  },
  "branch office": {
    "pos": "n.phr.",
    "en_def": "a smaller office of a company in another place",
    "cn_def": "分公司"
  },
  "founder": {
    "pos": "n.",
    "en_def": "the person who starts a company",
    "cn_def": "創辦人"
  },
  "co-founder": {
    "pos": "n.",
    "en_def": "one of two or more people who start a company together",
    "cn_def": "共同創辦人"
  },
  "chief executive": {
    "pos": "n.phr.",
    "en_def": "the person with the highest position in a company",
    "cn_def": "執行長"
  },
  "board of directors": {
    "pos": "n.phr.",
    "en_def": "the group of people who control a company",
    "cn_def": "董事會"
  },
  "chairperson": {
    "pos": "n.",
    "en_def": "the person who leads a meeting or a board",
    "cn_def": "主席"
  },
  "managing director": {
    "pos": "n.phr.",
    "en_def": "the person in charge of running a company each day",
    "cn_def": "總經理"
  },
  "firm": {
    "pos": "n.",
    "en_def": "a company, especially a small or professional one",
    "cn_def": "公司；事務所"
  },
  "corporation": {
    "pos": "n.",
    "en_def": "a large company or group of companies",
    "cn_def": "大型企業"
  },
  "limited company": {
    "pos": "n.phr.",
    "en_def": "a company whose owners only lose what they invested if it fails",
    "cn_def": "有限公司"
  },
  "business model": {
    "pos": "n.phr.",
    "en_def": "the way a company plans to make money",
    "cn_def": "商業模式"
  },
  "mission statement": {
    "pos": "n.phr.",
    "en_def": "a short sentence about a company's main aims",
    "cn_def": "使命宣言"
  },
  "premises": {
    "pos": "n.",
    "en_def": "the building and land a business uses",
    "cn_def": "營業場所"
  },
  "operating costs": {
    "pos": "n.phr.",
    "en_def": "the money needed to run a business every day",
    "cn_def": "營運成本"
  },
  "bankrupt": {
    "pos": "adj.",
    "en_def": "unable to pay one's debts",
    "cn_def": "破產的"
  },
  "bankruptcy": {
    "pos": "n.",
    "en_def": "the state of being unable to pay debts",
    "cn_def": "破產"
  },
  "liquidation": {
    "pos": "n.",
    "en_def": "closing a company and selling everything to pay debts",
    "cn_def": "清算"
  },
  "takeover": {
    "pos": "n.",
    "en_def": "when one company gets control of another",
    "cn_def": "收購"
  },
  "merger": {
    "pos": "n.",
    "en_def": "when two companies join to become one",
    "cn_def": "合併"
  },
  "joint venture": {
    "pos": "n.phr.",
    "en_def": "a business project run by two companies together",
    "cn_def": "合資企業"
  },
  "sme": {
    "pos": "n.",
    "en_def": "a small or medium-sized business",
    "cn_def": "中小企業"
  },
  "family-run": {
    "pos": "adj.",
    "en_def": "owned and managed by one family",
    "cn_def": "家族經營的"
  },
  "self-employed": {
    "pos": "adj.",
    "en_def": "working for yourself, not for a company",
    "cn_def": "自雇的"
  },
  "business owner": {
    "pos": "n.phr.",
    "en_def": "a person who owns a company or shop",
    "cn_def": "企業主；老闆"
  },
  "spin-off": {
    "pos": "n.",
    "en_def": "a new company created from part of an older one",
    "cn_def": "分拆出來的公司"
  },
  "shopping mall": {
    "pos": "n.phr.",
    "en_def": "a large building with many shops",
    "cn_def": "購物中心"
  },
  "retail price": {
    "pos": "n.phr.",
    "en_def": "the price a shop charges customers",
    "cn_def": "零售價"
  },
  "tax return": {
    "pos": "n.phr.",
    "en_def": "a form you send to the government about your income",
    "cn_def": "報稅單"
  },
  "after-sales service": {
    "pos": "n.phr.",
    "en_def": "help a company gives after you buy something",
    "cn_def": "售後服務"
  },
  "lump sum": {
    "pos": "n.phr.",
    "en_def": "a large amount of money paid at one time",
    "cn_def": "一次付清的款項"
  },
  "profit margin": {
    "pos": "n.phr.",
    "en_def": "the difference between cost and selling price",
    "cn_def": "利潤率"
  },
  "importer": {
    "pos": "n.",
    "en_def": "a country or company that buys goods from abroad",
    "cn_def": "進口國；進口商"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something good",
    "cn_def": "機會"
  },
  "hackathon": {
    "pos": "n.",
    "en_def": "an event where people build software together very fast",
    "cn_def": "黑客松；程式馬拉松"
  },
  "expense": {
    "pos": "n.",
    "en_def": "money spent on something",
    "cn_def": "費用；開支"
  },
  "dynamism": {
    "pos": "n.",
    "en_def": "energy and new ideas",
    "cn_def": "活力；動力"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money returned to a customer",
    "cn_def": "退款"
  },
  "resourcefulness": {
    "pos": "n.",
    "en_def": "the ability to find clever ways to solve problems",
    "cn_def": "足智多謀；應變能力"
  },
  "teamwork": {
    "pos": "n.",
    "en_def": "working well together as a group",
    "cn_def": "團隊合作"
  },
  "bookkeeping": {
    "pos": "n.",
    "en_def": "recording the money a business receives and spends",
    "cn_def": "記帳"
  },
  "purchasing power": {
    "pos": "n.phr.",
    "en_def": "how much you can buy with your money",
    "cn_def": "購買力"
  },
  "work-life balance": {
    "pos": "n.phr.",
    "en_def": "a healthy mix of time for work and personal life",
    "cn_def": "工作與生活的平衡"
  },
  "trade war": {
    "pos": "n.phr.",
    "en_def": "when countries keep raising taxes on each other's goods",
    "cn_def": "貿易戰"
  },
  "trainee": {
    "pos": "n.",
    "en_def": "a person who is learning a job",
    "cn_def": "實習生；受訓者"
  },
  "paperwork": {
    "pos": "n.",
    "en_def": "documents and forms you must complete",
    "cn_def": "文書工作"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that something is wrong or unfair",
    "cn_def": "投訴；抱怨"
  },
  "iteration": {
    "pos": "n.",
    "en_def": "one version in a series of improvements",
    "cn_def": "版本；迭代"
  },
  "resignation": {
    "pos": "n.",
    "en_def": "the act of leaving a job",
    "cn_def": "辭職；辭呈"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong commitment",
    "cn_def": "奉獻；專注投入"
  },
  "influencer marketing": {
    "pos": "n.phr.",
    "en_def": "paying popular online people to show a product",
    "cn_def": "網紅行銷"
  },
  "unique selling point": {
    "pos": "n.phr.",
    "en_def": "the special feature that makes a product different",
    "cn_def": "獨特賣點"
  },
  "net profit": {
    "pos": "n.phr.",
    "en_def": "the money left after all costs are paid",
    "cn_def": "淨利"
  },
  "bear market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are falling",
    "cn_def": "空頭市場"
  },
  "the bottom line": {
    "pos": "n.phr.",
    "en_def": "the most important fact; or the final profit",
    "cn_def": "底線；最重要的事"
  },
  "loyalty card": {
    "pos": "n.phr.",
    "en_def": "a card that gives regular customers rewards",
    "cn_def": "集點卡；會員卡"
  },
  "insolvency": {
    "pos": "n.",
    "en_def": "being unable to pay what you owe",
    "cn_def": "無力償債"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a paper showing that you have paid for something",
    "cn_def": "收據"
  },
  "cash flow": {
    "pos": "n.phr.",
    "en_def": "money moving into and out of a business",
    "cn_def": "現金流"
  },
  "ad campaign": {
    "pos": "n.phr.",
    "en_def": "a planned series of adverts for one product",
    "cn_def": "廣告活動"
  },
  "developing country": {
    "pos": "n.phr.",
    "en_def": "a poorer country that is building up its industry",
    "cn_def": "開發中國家"
  },
  "savings": {
    "pos": "n.",
    "en_def": "money you have kept and not spent",
    "cn_def": "存款；積蓄"
  },
  "decision-making": {
    "pos": "n.",
    "en_def": "the process of making choices",
    "cn_def": "決策"
  },
  "bargaining": {
    "pos": "n.",
    "en_def": "discussing to reach an agreement about price or pay",
    "cn_def": "談判；議價"
  },
  "coupon": {
    "pos": "n.",
    "en_def": "a piece of paper or code that lets you pay less",
    "cn_def": "優惠券"
  },
  "ally": {
    "pos": "n.",
    "en_def": "a person or group that supports you",
    "cn_def": "盟友"
  },
  "brand loyalty": {
    "pos": "n.phr.",
    "en_def": "when customers keep buying the same brand",
    "cn_def": "品牌忠誠度"
  },
  "bull market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are rising",
    "cn_def": "多頭市場"
  },
  "price war": {
    "pos": "n.phr.",
    "en_def": "when companies keep cutting prices to beat each other",
    "cn_def": "價格戰"
  },
  "sales pitch": {
    "pos": "n.phr.",
    "en_def": "a talk that tries to persuade someone to buy",
    "cn_def": "推銷話術"
  },
  "price cut": {
    "pos": "n.phr.",
    "en_def": "a reduction in the price of something",
    "cn_def": "降價"
  },
  "benefits package": {
    "pos": "n.phr.",
    "en_def": "all the extra things a job offers, like insurance and holidays",
    "cn_def": "福利方案"
  },
  "price list": {
    "pos": "n.phr.",
    "en_def": "a list showing the prices of goods or services",
    "cn_def": "價目表"
  },
  "research and development": {
    "pos": "n.phr.",
    "en_def": "work to create new products and improve old ones",
    "cn_def": "研發"
  },
  "devaluation": {
    "pos": "n.",
    "en_def": "a fall in the value of a country's money",
    "cn_def": "貨幣貶值"
  },
  "bargain": {
    "pos": "n.",
    "en_def": "something bought for less than its usual price",
    "cn_def": "便宜貨；划算的東西"
  },
  "payback": {
    "pos": "n.",
    "en_def": "the return of money you invested",
    "cn_def": "回本"
  },
  "market crash": {
    "pos": "n.phr.",
    "en_def": "a sudden, large fall in share prices",
    "cn_def": "股市崩盤"
  },
  "share price": {
    "pos": "n.phr.",
    "en_def": "the cost of one share in a company",
    "cn_def": "股價"
  },
  "risk-averse": {
    "pos": "adj.",
    "en_def": "not wanting to take risks",
    "cn_def": "規避風險的"
  },
  "best-selling": {
    "pos": "adj.",
    "en_def": "sold in very large numbers",
    "cn_def": "最暢銷的"
  },
  "cutthroat": {
    "pos": "adj.",
    "en_def": "very fierce and without kindness",
    "cn_def": "割喉的；激烈的"
  },
  "protectionism": {
    "pos": "n.",
    "en_def": "protecting home industries by taxing foreign goods",
    "cn_def": "貿易保護主義"
  },
  "incubator": {
    "pos": "n.",
    "en_def": "an organisation that helps new companies grow",
    "cn_def": "育成中心"
  },
  "positioning": {
    "pos": "n.",
    "en_def": "how a company wants customers to see its product compared to others",
    "cn_def": "市場定位"
  },
  "depreciation": {
    "pos": "n.",
    "en_def": "a fall in the value of something over time",
    "cn_def": "折舊"
  },
  "stockbroker": {
    "pos": "n.",
    "en_def": "a person who buys and sells shares for other people",
    "cn_def": "股票經紀人"
  },
  "exporter": {
    "pos": "n.",
    "en_def": "a country or company that sells goods abroad",
    "cn_def": "出口國；出口商"
  },
  "goodwill": {
    "pos": "n.",
    "en_def": "friendly feelings toward a business",
    "cn_def": "商譽；善意"
  },
  "redundancy": {
    "pos": "n.",
    "en_def": "losing your job because it is no longer needed",
    "cn_def": "裁員；資遣"
  },
  "mismatch": {
    "pos": "n.",
    "en_def": "a situation where two things do not fit well together",
    "cn_def": "不匹配"
  },
  "know-how": {
    "pos": "n.",
    "en_def": "practical knowledge and skill",
    "cn_def": "專業技術；訣竅"
  },
  "seo": {
    "pos": "n.",
    "en_def": "making a website appear higher in search results",
    "cn_def": "搜尋引擎最佳化"
  },
  "free market": {
    "pos": "n.phr.",
    "en_def": "an economy where prices are set by buyers and sellers, not the government",
    "cn_def": "自由市場"
  },
  "bonus": {
    "pos": "n.",
    "en_def": "extra money added to normal pay",
    "cn_def": "獎金"
  },
  "advert": {
    "pos": "n.",
    "en_def": "a picture, film or text that tries to sell something",
    "cn_def": "廣告"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair a product if it breaks",
    "cn_def": "保固"
  },
  "bottom-up": {
    "pos": "adj.",
    "en_def": "starting from ordinary workers or people",
    "cn_def": "由下而上的"
  },
  "hands-off": {
    "pos": "adj.",
    "en_def": "not getting involved in details",
    "cn_def": "放手的；不干涉的"
  },
  "booming": {
    "pos": "adj.",
    "en_def": "growing very fast and successfully",
    "cn_def": "蓬勃的；興旺的"
  },
  "low-cost": {
    "pos": "adj.",
    "en_def": "cheap",
    "cn_def": "低成本的；廉價的"
  },
  "marketable": {
    "pos": "adj.",
    "en_def": "easy to sell, or attractive to employers",
    "cn_def": "有市場的；好賣的"
  },
  "hard-earned": {
    "pos": "adj.",
    "en_def": "gained through a lot of hard work",
    "cn_def": "辛苦賺來的"
  },
  "financial year": {
    "pos": "n.phr.",
    "en_def": "the twelve months a company uses for its accounts",
    "cn_def": "會計年度"
  },
  "office politics": {
    "pos": "n.phr.",
    "en_def": "the ways people try to gain power at work",
    "cn_def": "辦公室政治"
  },
  "tender": {
    "pos": "n.",
    "en_def": "a formal offer to do work at a stated price",
    "cn_def": "投標"
  },
  "scale-up": {
    "pos": "n.",
    "en_def": "a young company that is growing very quickly",
    "cn_def": "規模化成長企業"
  }
};

const EXTRA_GLOSSES = {};
