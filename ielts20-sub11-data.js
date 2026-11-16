// Topic 20 Subunit 11 Quiz Data: Academic Words 學術單字 4 (contact – owe)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S11 - Academic Words 學術單字 4 (contact – owe)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "contact",
    "pos": "v.",
    "cn_def": "聯絡",
    "en_def": "to call, email or write to someone",
    "sentence": "If you have any questions about your order, please {{BLANK}} our team, and we will reply within one day.",
    "cn": "如果你對訂單有任何問題，請聯絡我們的團隊，我們會在一天內回覆。"
  },
  {
    "word": "advance",
    "pos": "v.",
    "cn_def": "晉升；進步",
    "en_def": "to move forward or make progress",
    "sentence": "She took evening classes in management because she wanted to {{BLANK}} in her career, and she was promoted a year later.",
    "cn": "她上了管理學夜間課程，因為她想在職涯中晉升，而一年後她就升職了。"
  },
  {
    "word": "leadership",
    "pos": "n.",
    "cn_def": "領導力；領導",
    "en_def": "the ability to lead people",
    "sentence": "Under her {{BLANK}}, the small team won three national awards, so other companies tried to hire her.",
    "cn": "在她的領導下，這個小團隊贏得了三項全國獎項，所以其他公司都想聘請她。"
  },
  {
    "word": "liaison",
    "pos": "n.",
    "cn_def": "聯繫；聯絡",
    "en_def": "communication between groups so they work well together",
    "sentence": "Ben works as a {{BLANK}} between the designers and the factory, so problems are solved before production starts.",
    "cn": "阿班擔任設計師與工廠之間的聯絡窗口，所以問題在生產開始前就能解決。"
  },
  {
    "word": "paperwork",
    "pos": "n.",
    "cn_def": "文書工作",
    "en_def": "documents and forms you must complete",
    "sentence": "Opening a company involves a lot of {{BLANK}}, so many people pay an accountant to help them.",
    "cn": "開公司涉及大量的文書工作，所以很多人付錢請會計師幫忙。"
  },
  {
    "word": "personnel",
    "pos": "n.",
    "cn_def": "人員",
    "en_def": "the people employed by an organisation",
    "sentence": "Only authorised {{BLANK}} can enter the laboratory, so visitors must wait in the meeting room.",
    "cn": "只有經授權的人員才能進入實驗室，所以訪客必須在會議室等候。"
  },
  {
    "word": "quotation",
    "pos": "n.",
    "cn_def": "報價單",
    "en_def": "a statement of how much a job will cost",
    "sentence": "We asked three builders for a {{BLANK}}, and then we chose the one who explained the costs most clearly.",
    "cn": "我們向三家營造商要了報價單，然後選擇了把費用說明得最清楚的那一家。"
  },
  {
    "word": "appoint",
    "pos": "v.",
    "cn_def": "任命",
    "en_def": "to choose someone officially for a job",
    "sentence": "The board will {{BLANK}} a new chief executive next month, and many people expect it to be a woman.",
    "cn": "董事會將在下個月任命一位新執行長，而許多人預期會是一位女性。"
  },
  {
    "word": "award",
    "pos": "v.",
    "cn_def": "授予；給予",
    "en_def": "to give something officially as a prize or contract",
    "sentence": "The city decided to {{BLANK}} the contract to a local company, so the new park will create jobs for residents.",
    "cn": "市政府決定把合約授予一家本地公司，所以新公園將為居民創造工作機會。"
  },
  {
    "word": "clinch",
    "pos": "v.",
    "cn_def": "敲定；贏得",
    "en_def": "to finally win or agree on something",
    "sentence": "Our sales team flew to Tokyo to {{BLANK}} the deal, and they came back with a contract worth millions.",
    "cn": "我們的業務團隊飛到東京去敲定這筆交易，而且他們帶回了一份價值數百萬的合約。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "吸引；使參與",
    "en_def": "to attract and keep someone's interest",
    "sentence": "Short videos {{BLANK}} young viewers better than long adverts, so many brands now post daily clips.",
    "cn": "短影片比長廣告更能吸引年輕觀眾，所以許多品牌現在每天發布短片。"
  },
  {
    "word": "outbid",
    "pos": "v.",
    "cn_def": "出價高過",
    "en_def": "to offer more money than someone else",
    "sentence": "A wealthy collector managed to {{BLANK}} the museum at the auction, so the painting went to a private home.",
    "cn": "一位富有的收藏家在拍賣會上成功出價高過博物館，所以這幅畫流入私人宅邸。"
  },
  {
    "word": "outsell",
    "pos": "v.",
    "cn_def": "銷量超過",
    "en_def": "to sell more than another product or company",
    "sentence": "Electric cars may soon {{BLANK}} petrol cars in some countries, because they are cheaper to run.",
    "cn": "在某些國家，電動車很快就可能銷量超過汽油車，因為它們的使用成本更低。"
  },
  {
    "word": "overcharge",
    "pos": "v.",
    "cn_def": "多收費；索價過高",
    "en_def": "to ask for too much money",
    "sentence": "The taxi driver tried to {{BLANK}} the tourists, but they checked the price on a map app and refused to pay.",
    "cn": "計程車司機試圖對遊客多收費，但他們用地圖應用程式查了價格並拒絕付款。"
  },
  {
    "word": "overspend",
    "pos": "v.",
    "cn_def": "超支",
    "en_def": "to spend more money than planned",
    "sentence": "Many families {{BLANK}} during the holidays, and then they have to save hard in January.",
    "cn": "許多家庭在假期期間超支，然後在一月就得努力省錢。"
  },
  {
    "word": "hike",
    "pos": "v.",
    "cn_def": "調漲；大幅提高",
    "en_def": "to increase prices or taxes suddenly",
    "sentence": "The airline decided to {{BLANK}} its fares before the holiday, so many students chose to take the train instead.",
    "cn": "航空公司決定在假期前調漲票價，所以許多學生改搭火車。"
  },
  {
    "word": "slash",
    "pos": "v.",
    "cn_def": "大砍；大幅削減",
    "en_def": "to reduce something a lot",
    "sentence": "The shop will {{BLANK}} prices on winter coats next week, so I am waiting before I buy one.",
    "cn": "這家店下週將大砍冬季外套的價格，所以我要等一等再買。"
  },
  {
    "word": "dip",
    "pos": "v.",
    "cn_def": "小幅下滑",
    "en_def": "to go down slightly for a short time",
    "sentence": "Sales usually {{BLANK}} in February after the holidays, but they rise again when the weather gets warmer.",
    "cn": "銷售通常在假期後的二月小幅下滑，但天氣轉暖時又會回升。"
  },
  {
    "word": "tumble",
    "pos": "v.",
    "cn_def": "暴跌",
    "en_def": "to fall quickly in value",
    "sentence": "Share prices began to {{BLANK}} after the bad news, and some investors lost half their money in a week.",
    "cn": "壞消息傳出後股價開始暴跌，而有些投資人一週內損失了一半的錢。"
  },
  {
    "word": "triple",
    "pos": "v.",
    "cn_def": "增為三倍",
    "en_def": "to become three times bigger",
    "sentence": "Online orders {{BLANK}} during the lockdown, so the company had to hire more drivers and pack faster.",
    "cn": "封城期間線上訂單增為三倍，所以公司必須雇用更多司機並加快打包速度。"
  },
  {
    "word": "divest",
    "pos": "v.",
    "cn_def": "撤資；出售",
    "en_def": "to sell part of a business or investment",
    "sentence": "The company decided to {{BLANK}} its oil business, because it wanted to focus on clean energy.",
    "cn": "公司決定出售它的石油事業，因為它想專注於潔淨能源。"
  },
  {
    "word": "bill",
    "pos": "v.",
    "cn_def": "開帳單給",
    "en_def": "to send someone a request for payment",
    "sentence": "The plumber will {{BLANK}} us at the end of the month, so we do not have to pay him today.",
    "cn": "水電工會在月底開帳單給我們，所以我們今天不用付錢給他。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "收費",
    "en_def": "to ask an amount of money for something",
    "sentence": "Some airlines {{BLANK}} extra for bags, so passengers try to fit everything into one small suitcase.",
    "cn": "有些航空公司對行李額外收費，所以乘客試著把所有東西塞進一個小行李箱。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起",
    "en_def": "to have enough money to pay for something",
    "sentence": "Young couples in big cities often cannot {{BLANK}} a flat, so many of them live with their parents for years.",
    "cn": "大城市的年輕夫妻常常負擔不起一間公寓，所以他們很多人和父母同住好幾年。"
  },
  {
    "word": "owe",
    "pos": "v.",
    "cn_def": "欠",
    "en_def": "to have to pay money back to someone",
    "sentence": "The shop still {{BLANK}} its supplier a lot of money, but it promised to pay everything after the holiday sales.",
    "cn": "這家店仍欠供應商很多錢，但它承諾在假期促銷後全部付清。"
  }
];

const MCQS = [
  {
    "q": "If you have any questions about your order, please _____ our team, and we will reply within one day.",
    "options": [
      "resign",
      "iterate",
      "contact",
      "underwrite"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "She took evening classes in management because she wanted to _____ in her career, and she was promoted a year later.",
    "options": [
      "underwrite",
      "underperform",
      "resell",
      "advance"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Under her _____, the small team won three national awards, so other companies tried to hire her.",
    "options": [
      "franchisee",
      "leadership",
      "unicorn",
      "resourcefulness"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Ben works as a _____ between the designers and the factory, so problems are solved before production starts.",
    "options": [
      "liaison",
      "savings",
      "instalment",
      "negotiation"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Opening a company involves a lot of _____, so many people pay an accountant to help them.",
    "options": [
      "economist",
      "management",
      "paperwork",
      "consultancy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Only authorised _____ can enter the laboratory, so visitors must wait in the meeting room.",
    "options": [
      "entrepreneurship",
      "personnel",
      "GDP",
      "cartel"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "We asked three builders for a _____, and then we chose the one who explained the costs most clearly.",
    "options": [
      "hackathon",
      "employee",
      "remuneration",
      "quotation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The board will _____ a new chief executive next month, and many people expect it to be a woman.",
    "options": [
      "appoint",
      "deduct",
      "reinvest",
      "deliver"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The city decided to _____ the contract to a local company, so the new park will create jobs for residents.",
    "options": [
      "underwrite",
      "pivot",
      "settle",
      "award"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our sales team flew to Tokyo to _____ the deal, and they came back with a contract worth millions.",
    "options": [
      "clinch",
      "inflate",
      "motivate",
      "settle"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Short videos _____ young viewers better than long adverts, so many brands now post daily clips.",
    "options": [
      "iterate",
      "engage",
      "upsell",
      "inflate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "A wealthy collector managed to _____ the museum at the auction, so the painting went to a private home.",
    "options": [
      "deliver",
      "overvalue",
      "outbid",
      "underperform"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Electric cars may soon _____ petrol cars in some countries, because they are cheaper to run.",
    "options": [
      "deliver",
      "reinvest",
      "repay",
      "outsell"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The taxi driver tried to _____ the tourists, but they checked the price on a map app and refused to pay.",
    "options": [
      "overcharge",
      "upsell",
      "resign",
      "fire"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Many families _____ during the holidays, and then they have to save hard in January.",
    "options": [
      "iterate",
      "overspend",
      "overvalue",
      "haggle"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The airline decided to _____ its fares before the holiday, so many students chose to take the train instead.",
    "options": [
      "headhunt",
      "resell",
      "hike",
      "entice"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The shop will _____ prices on winter coats next week, so I am waiting before I buy one.",
    "options": [
      "slash",
      "recoup",
      "resign",
      "deduct"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Sales usually _____ in February after the holidays, but they rise again when the weather gets warmer.",
    "options": [
      "iterate",
      "dip",
      "repay",
      "inflate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Share prices began to _____ after the bad news, and some investors lost half their money in a week.",
    "options": [
      "resell",
      "inflate",
      "tumble",
      "resign"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Online orders _____ during the lockdown, so the company had to hire more drivers and pack faster.",
    "options": [
      "renegotiate",
      "veto",
      "underwrite",
      "triple"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The company decided to _____ its oil business, because it wanted to focus on clean energy.",
    "options": [
      "divest",
      "deduct",
      "renegotiate",
      "underwrite"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The plumber will _____ us at the end of the month, so we do not have to pay him today.",
    "options": [
      "veto",
      "cooperate",
      "bill",
      "settle"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Some airlines _____ extra for bags, so passengers try to fit everything into one small suitcase.",
    "options": [
      "headhunt",
      "charge",
      "deliver",
      "recoup"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Young couples in big cities often cannot _____ a flat, so many of them live with their parents for years.",
    "options": [
      "overvalue",
      "deliver",
      "renegotiate",
      "afford"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The shop still _____ its supplier a lot of money, but it promised to pay everything after the holiday sales.",
    "options": [
      "headhunt",
      "inflate",
      "owe",
      "haggle"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "contact": {
    "pos": "v.",
    "en_def": "to call, email or write to someone",
    "cn_def": "聯絡"
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward or make progress",
    "cn_def": "晉升；進步"
  },
  "leadership": {
    "pos": "n.",
    "en_def": "the ability to lead people",
    "cn_def": "領導力；領導"
  },
  "liaison": {
    "pos": "n.",
    "en_def": "communication between groups so they work well together",
    "cn_def": "聯繫；聯絡"
  },
  "paperwork": {
    "pos": "n.",
    "en_def": "documents and forms you must complete",
    "cn_def": "文書工作"
  },
  "personnel": {
    "pos": "n.",
    "en_def": "the people employed by an organisation",
    "cn_def": "人員"
  },
  "quotation": {
    "pos": "n.",
    "en_def": "a statement of how much a job will cost",
    "cn_def": "報價單"
  },
  "appoint": {
    "pos": "v.",
    "en_def": "to choose someone officially for a job",
    "cn_def": "任命"
  },
  "award": {
    "pos": "v.",
    "en_def": "to give something officially as a prize or contract",
    "cn_def": "授予；給予"
  },
  "clinch": {
    "pos": "v.",
    "en_def": "to finally win or agree on something",
    "cn_def": "敲定；贏得"
  },
  "engage": {
    "pos": "v.",
    "en_def": "to attract and keep someone's interest",
    "cn_def": "吸引；使參與"
  },
  "outbid": {
    "pos": "v.",
    "en_def": "to offer more money than someone else",
    "cn_def": "出價高過"
  },
  "outsell": {
    "pos": "v.",
    "en_def": "to sell more than another product or company",
    "cn_def": "銷量超過"
  },
  "overcharge": {
    "pos": "v.",
    "en_def": "to ask for too much money",
    "cn_def": "多收費；索價過高"
  },
  "overspend": {
    "pos": "v.",
    "en_def": "to spend more money than planned",
    "cn_def": "超支"
  },
  "hike": {
    "pos": "v.",
    "en_def": "to increase prices or taxes suddenly",
    "cn_def": "調漲；大幅提高"
  },
  "slash": {
    "pos": "v.",
    "en_def": "to reduce something a lot",
    "cn_def": "大砍；大幅削減"
  },
  "dip": {
    "pos": "v.",
    "en_def": "to go down slightly for a short time",
    "cn_def": "小幅下滑"
  },
  "tumble": {
    "pos": "v.",
    "en_def": "to fall quickly in value",
    "cn_def": "暴跌"
  },
  "triple": {
    "pos": "v.",
    "en_def": "to become three times bigger",
    "cn_def": "增為三倍"
  },
  "divest": {
    "pos": "v.",
    "en_def": "to sell part of a business or investment",
    "cn_def": "撤資；出售"
  },
  "bill": {
    "pos": "v.",
    "en_def": "to send someone a request for payment",
    "cn_def": "開帳單給"
  },
  "charge": {
    "pos": "v.",
    "en_def": "to ask an amount of money for something",
    "cn_def": "收費"
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for something",
    "cn_def": "負擔得起"
  },
  "owe": {
    "pos": "v.",
    "en_def": "to have to pay money back to someone",
    "cn_def": "欠"
  },
  "resign": {
    "pos": "v.",
    "en_def": "to leave your job officially",
    "cn_def": "辭職"
  },
  "iterate": {
    "pos": "v.",
    "en_def": "to repeat a process to improve something step by step",
    "cn_def": "反覆改進"
  },
  "underwrite": {
    "pos": "v.",
    "en_def": "to agree to pay for losses or costs if needed",
    "cn_def": "承保；擔保"
  },
  "underperform": {
    "pos": "v.",
    "en_def": "to do less well than expected",
    "cn_def": "表現不佳"
  },
  "resell": {
    "pos": "v.",
    "en_def": "to sell something you have bought",
    "cn_def": "轉售"
  },
  "franchisee": {
    "pos": "n.",
    "en_def": "a person who runs a shop under a franchise",
    "cn_def": "加盟主"
  },
  "unicorn": {
    "pos": "n.",
    "en_def": "a young company worth over one billion dollars",
    "cn_def": "獨角獸企業"
  },
  "resourcefulness": {
    "pos": "n.",
    "en_def": "the ability to find clever ways to solve problems",
    "cn_def": "足智多謀；應變能力"
  },
  "savings": {
    "pos": "n.",
    "en_def": "money you have kept and not spent",
    "cn_def": "存款；積蓄"
  },
  "instalment": {
    "pos": "n.",
    "en_def": "one of several payments for something",
    "cn_def": "分期付款"
  },
  "negotiation": {
    "pos": "n.",
    "en_def": "discussion to reach an agreement",
    "cn_def": "協商"
  },
  "economist": {
    "pos": "n.",
    "en_def": "an expert who studies how money and trade work",
    "cn_def": "經濟學家"
  },
  "management": {
    "pos": "n.",
    "en_def": "the people who control a company",
    "cn_def": "管理階層"
  },
  "consultancy": {
    "pos": "n.",
    "en_def": "a company that gives expert advice",
    "cn_def": "顧問公司"
  },
  "entrepreneurship": {
    "pos": "n.",
    "en_def": "the skills and activity of starting businesses",
    "cn_def": "創業精神；創業"
  },
  "gdp": {
    "pos": "n.",
    "en_def": "the total value of goods and services a country produces in a year",
    "cn_def": "國內生產毛額"
  },
  "cartel": {
    "pos": "n.",
    "en_def": "a group of companies that agree to keep prices high",
    "cn_def": "卡特爾；聯合壟斷組織"
  },
  "hackathon": {
    "pos": "n.",
    "en_def": "an event where people build software together very fast",
    "cn_def": "黑客松；程式馬拉松"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company",
    "cn_def": "員工"
  },
  "remuneration": {
    "pos": "n.",
    "en_def": "payment for work",
    "cn_def": "報酬"
  },
  "deduct": {
    "pos": "v.",
    "en_def": "to take an amount away from a total",
    "cn_def": "扣除"
  },
  "reinvest": {
    "pos": "v.",
    "en_def": "to put profits back into a business",
    "cn_def": "再投資"
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to do what you promised",
    "cn_def": "兌現；履行承諾"
  },
  "pivot": {
    "pos": "v.",
    "en_def": "to change a business plan in a new direction",
    "cn_def": "轉型"
  },
  "settle": {
    "pos": "v.",
    "en_def": "to pay money that you owe",
    "cn_def": "結清；支付"
  },
  "inflate": {
    "pos": "v.",
    "en_def": "to make prices or numbers higher than they should be",
    "cn_def": "抬高；灌水"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard",
    "cn_def": "激勵"
  },
  "upsell": {
    "pos": "v.",
    "en_def": "to persuade a customer to buy a more expensive item",
    "cn_def": "追加銷售"
  },
  "overvalue": {
    "pos": "v.",
    "en_def": "to think something is worth more than it is",
    "cn_def": "高估"
  },
  "repay": {
    "pos": "v.",
    "en_def": "to pay back money you borrowed",
    "cn_def": "償還"
  },
  "fire": {
    "pos": "v.",
    "en_def": "to make someone leave their job",
    "cn_def": "開除；解雇"
  },
  "haggle": {
    "pos": "v.",
    "en_def": "to argue about the price of something",
    "cn_def": "討價還價"
  },
  "headhunt": {
    "pos": "v.",
    "en_def": "to find and offer a job to a skilled person from another company",
    "cn_def": "挖角"
  },
  "entice": {
    "pos": "v.",
    "en_def": "to attract someone by offering something good",
    "cn_def": "引誘；吸引"
  },
  "recoup": {
    "pos": "v.",
    "en_def": "to get back money you have spent or lost",
    "cn_def": "收回；彌補"
  },
  "renegotiate": {
    "pos": "v.",
    "en_def": "to discuss and change an agreement again",
    "cn_def": "重新協商"
  },
  "veto": {
    "pos": "v.",
    "en_def": "to officially refuse to allow something",
    "cn_def": "否決"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together for the same goal",
    "cn_def": "合作"
  }
};

const EXTRA_GLOSSES = {};
