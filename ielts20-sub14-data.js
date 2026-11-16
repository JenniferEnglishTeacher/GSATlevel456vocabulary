// Topic 20 Subunit 14 Quiz Data: Academic Words 學術單字 7 (currently – stake)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S14 - Academic Words 學術單字 7 (currently – stake)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "currently",
    "pos": "adv.",
    "cn_def": "目前",
    "en_def": "at the present time",
    "sentence": "The company is {{BLANK}} looking for summer interns, so students should send their CVs before May.",
    "cn": "這家公司目前正在招募暑期實習生，所以學生應在五月前寄出履歷。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that achieves what you wanted",
    "sentence": "The team {{BLANK}} launched the app on time, and it had ten thousand users by the end of the week.",
    "cn": "團隊準時成功地推出了應用程式，而且到週末已經有一萬名使用者。"
  },
  {
    "word": "jointly",
    "pos": "adv.",
    "cn_def": "共同地",
    "en_def": "together with others",
    "sentence": "The two companies {{BLANK}} own the new factory, so they share both the costs and the profits.",
    "cn": "兩家公司共同擁有這座新工廠，所以他們共同分擔成本和利潤。"
  },
  {
    "word": "individually",
    "pos": "adv.",
    "cn_def": "個別地",
    "en_def": "separately, one by one",
    "sentence": "Each cake is wrapped {{BLANK}}, so customers can buy just one and keep the rest fresh.",
    "cn": "每塊蛋糕都個別包裝，所以顧客可以只買一塊，其餘的也能保持新鮮。"
  },
  {
    "word": "privately",
    "pos": "adv.",
    "cn_def": "私人地",
    "en_def": "owned by a person, not the government",
    "sentence": "The hospital is {{BLANK}} owned, so patients often pay more, but they usually wait less.",
    "cn": "這家醫院是私人擁有的，所以病人常常要付更多錢，但通常等候較短。"
  },
  {
    "word": "ethically",
    "pos": "adv.",
    "cn_def": "合乎道德地",
    "en_def": "in a morally right way",
    "sentence": "The brand says its coffee is {{BLANK}} sourced, so farmers receive a fair price for their beans.",
    "cn": "這個品牌說它的咖啡是合乎道德地採購的，所以農民能為他們的咖啡豆得到公平價格。"
  },
  {
    "word": "responsibly",
    "pos": "adv.",
    "cn_def": "負責任地",
    "en_def": "in a careful and sensible way",
    "sentence": "Banks should lend money {{BLANK}}, because people who borrow too much can lose their homes.",
    "cn": "銀行應該負責任地放款，因為借太多錢的人可能會失去他們的房子。"
  },
  {
    "word": "know-how",
    "pos": "n.",
    "cn_def": "專業技術；訣竅",
    "en_def": "practical knowledge and skill",
    "sentence": "The small company lacked the {{BLANK}} to sell abroad, so it hired an experienced export manager.",
    "cn": "這家小公司缺乏海外銷售的專業技術，所以它聘請了一位有經驗的出口經理。"
  },
  {
    "word": "networking",
    "pos": "n.",
    "cn_def": "建立人脈",
    "en_def": "meeting people who may help your career",
    "sentence": "{{BLANK}} events help young designers meet clients, so my sister goes to one every month.",
    "cn": "建立人脈的活動幫助年輕設計師認識客戶，所以我姊姊每個月都去參加一場。"
  },
  {
    "word": "professionalism",
    "pos": "n.",
    "cn_def": "專業素養",
    "en_def": "the skill and good behaviour expected at work",
    "sentence": "The staff dealt with the angry customer with great {{BLANK}}, and he calmed down and apologised.",
    "cn": "員工以極佳的專業素養處理那位憤怒的顧客，而他冷靜下來並道了歉。"
  },
  {
    "word": "punctuality",
    "pos": "n.",
    "cn_def": "準時",
    "en_def": "being on time",
    "sentence": "Japanese trains are famous for their {{BLANK}}, so passengers expect an apology if a train is one minute late.",
    "cn": "日本的火車以準時聞名，所以列車晚一分鐘乘客就會期待道歉。"
  },
  {
    "word": "resourcefulness",
    "pos": "n.",
    "cn_def": "足智多謀；應變能力",
    "en_def": "the ability to find clever ways to solve problems",
    "sentence": "With little money but great {{BLANK}}, the students turned old boxes into furniture and sold it at the market.",
    "cn": "這些學生雖然缺錢但極有應變能力，他們把舊箱子做成家具並在市集販售。"
  },
  {
    "word": "arrangement",
    "pos": "n.",
    "cn_def": "安排；協議",
    "en_def": "an agreement about how something will be done",
    "sentence": "The two shops have an {{BLANK}} to share delivery drivers, so both of them save money every month.",
    "cn": "兩家店有一項共用送貨司機的協議，所以雙方每個月都能省錢。"
  },
  {
    "word": "supplier",
    "pos": "n.",
    "cn_def": "供應商",
    "en_def": "a company that provides goods to another company",
    "sentence": "Our main {{BLANK}} raised the price of flour, so the bakery had to charge a little more for bread.",
    "cn": "我們的主要供應商調漲了麵粉價格，所以麵包店不得不把麵包賣貴一點。"
  },
  {
    "word": "vendor",
    "pos": "n.",
    "cn_def": "賣家；廠商",
    "en_def": "a person or company that sells something",
    "sentence": "The school chose a new {{BLANK}} for its lunch boxes, because parents complained the old food was too oily.",
    "cn": "學校為便當選擇了一家新廠商，因為家長抱怨以前的食物太油。"
  },
  {
    "word": "arrears",
    "pos": "n.",
    "cn_def": "欠款",
    "en_def": "money that should already have been paid",
    "sentence": "The family fell into {{BLANK}} on their rent after the father lost his job, so a charity helped them.",
    "cn": "父親失業後，這家人積欠了房租欠款，所以一個慈善團體幫助了他們。"
  },
  {
    "word": "creditor",
    "pos": "n.",
    "cn_def": "債權人",
    "en_def": "a person or company that is owed money",
    "sentence": "When the company closed, each {{BLANK}} received only part of the money they were owed, so many were angry.",
    "cn": "公司倒閉時，每位債權人只拿回部分欠款，所以很多人很生氣。"
  },
  {
    "word": "debtor",
    "pos": "n.",
    "cn_def": "債務人",
    "en_def": "a person who owes money",
    "sentence": "The bank gave the {{BLANK}} more time to pay, because he had lost his job but was looking for a new one.",
    "cn": "銀行給了那位債務人更多時間還款，因為他失業了但正在找新工作。"
  },
  {
    "word": "instalment",
    "pos": "n.",
    "cn_def": "分期付款",
    "en_def": "one of several payments for something",
    "sentence": "We are paying for the sofa in monthly {{BLANK}}, so it will be fully ours after one year.",
    "cn": "我們用每月分期付款的方式買沙發，所以一年後它就完全屬於我們了。"
  },
  {
    "word": "lump sum",
    "pos": "n.phr.",
    "cn_def": "一次付清的款項",
    "en_def": "a large amount of money paid at one time",
    "sentence": "When he retired, he received a {{BLANK}} from the company, and he used it to open a small tea shop.",
    "cn": "他退休時從公司領到一筆一次付清的款項，而他用這筆錢開了一家小茶店。"
  },
  {
    "word": "proceeds",
    "pos": "n.",
    "cn_def": "收益",
    "en_def": "money received from selling something or an event",
    "sentence": "All {{BLANK}} from the charity concert will go to the children's hospital, so the tickets sold out quickly.",
    "cn": "慈善音樂會的所有收益都將捐給兒童醫院，所以門票很快就賣光了。"
  },
  {
    "word": "profit margin",
    "pos": "n.phr.",
    "cn_def": "利潤率",
    "en_def": "the difference between cost and selling price",
    "sentence": "Bubble tea has a high {{BLANK}}, because the ingredients are cheap but each drink sells for sixty dollars.",
    "cn": "珍珠奶茶的利潤率很高，因為原料便宜，但每杯能賣六十元。"
  },
  {
    "word": "rebate",
    "pos": "n.",
    "cn_def": "退款；回饋金",
    "en_def": "money given back to a buyer",
    "sentence": "The government offers a {{BLANK}} to people who buy energy-saving fridges, so many families replaced their old ones.",
    "cn": "政府對購買節能冰箱的人提供回饋金，所以許多家庭換掉了舊冰箱。"
  },
  {
    "word": "savings",
    "pos": "n.",
    "cn_def": "存款；積蓄",
    "en_def": "money you have kept and not spent",
    "sentence": "She used her {{BLANK}} to start a small online shop, but she kept her day job until it made a profit.",
    "cn": "她用自己的積蓄開了一家小網店，但在它獲利之前她仍保留白天的工作。"
  },
  {
    "word": "stake",
    "pos": "n.",
    "cn_def": "股份",
    "en_def": "a share in a business",
    "sentence": "The tech giant bought a ten percent {{BLANK}} in the start-up, so it now has a seat on the board.",
    "cn": "這家科技巨頭買下新創公司百分之十的股份，所以它現在在董事會有一席。"
  }
];

const MCQS = [
  {
    "q": "The company is _____ looking for summer interns, so students should send their CVs before May.",
    "options": [
      "locally",
      "economically",
      "currently",
      "automatically"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The team _____ launched the app on time, and it had ten thousand users by the end of the week.",
    "options": [
      "internationally",
      "successfully",
      "locally",
      "upfront"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The two companies _____ own the new factory, so they share both the costs and the profits.",
    "options": [
      "jointly",
      "upfront",
      "aggressively",
      "financially"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Each cake is wrapped _____, so customers can buy just one and keep the rest fresh.",
    "options": [
      "marginally",
      "internationally",
      "aggressively",
      "individually"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hospital is _____ owned, so patients often pay more, but they usually wait less.",
    "options": [
      "aggressively",
      "economically",
      "privately",
      "upfront"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The brand says its coffee is _____ sourced, so farmers receive a fair price for their beans.",
    "options": [
      "economically",
      "internationally",
      "strategically",
      "ethically"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Banks should lend money _____, because people who borrow too much can lose their homes.",
    "options": [
      "responsibly",
      "commercially",
      "aggressively",
      "financially"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The small company lacked the _____ to sell abroad, so it hired an experienced export manager.",
    "options": [
      "confidence",
      "know-how",
      "accelerator",
      "complacency"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "_____ events help young designers meet clients, so my sister goes to one every month.",
    "options": [
      "crowdfunding",
      "spin-off",
      "employee",
      "networking"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The staff dealt with the angry customer with great _____, and he calmed down and apologised.",
    "options": [
      "tender",
      "opportunity",
      "professionalism",
      "advert"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Japanese trains are famous for their _____, so passengers expect an apology if a train is one minute late.",
    "options": [
      "punctuality",
      "analyst",
      "depreciation",
      "stockbroker"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "With little money but great _____, the students turned old boxes into furniture and sold it at the market.",
    "options": [
      "partner",
      "resourcefulness",
      "showroom",
      "salesperson"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The two shops have an _____ to share delivery drivers, so both of them save money every month.",
    "options": [
      "adaptability",
      "bankruptcy",
      "multinational",
      "arrangement"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Our main _____ raised the price of flour, so the bakery had to charge a little more for bread.",
    "options": [
      "occupation",
      "auditor",
      "supplier",
      "copycat"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The school chose a new _____ for its lunch boxes, because parents complained the old food was too oily.",
    "options": [
      "vendor",
      "customer",
      "devaluation",
      "bargaining"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The family fell into _____ on their rent after the father lost his job, so a charity helped them.",
    "options": [
      "cryptocurrency",
      "arrears",
      "positioning",
      "stockbroker"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "When the company closed, each _____ received only part of the money they were owed, so many were angry.",
    "options": [
      "creditor",
      "insolvency",
      "advert",
      "trainee"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The bank gave the _____ more time to pay, because he had lost his job but was looking for a new one.",
    "options": [
      "ally",
      "debtor",
      "complacency",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "We are paying for the sofa in monthly _____, so it will be fully ours after one year.",
    "options": [
      "promotion",
      "windfall",
      "instalment",
      "shortcut"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "When he retired, he received a _____ from the company, and he used it to open a small tea shop.",
    "options": [
      "sales pitch",
      "joint venture",
      "chief executive",
      "lump sum"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "All _____ from the charity concert will go to the children's hospital, so the tickets sold out quickly.",
    "options": [
      "affiliation",
      "iteration",
      "proceeds",
      "flexitime"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Bubble tea has a high _____, because the ingredients are cheap but each drink sells for sixty dollars.",
    "options": [
      "free sample",
      "balance sheet",
      "work-life balance",
      "profit margin"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The government offers a _____ to people who buy energy-saving fridges, so many families replaced their old ones.",
    "options": [
      "rebate",
      "dedication",
      "surcharge",
      "insolvency"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "She used her _____ to start a small online shop, but she kept her day job until it made a profit.",
    "options": [
      "authorisation",
      "savings",
      "premises",
      "leadership"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The tech giant bought a ten percent _____ in the start-up, so it now has a seat on the board.",
    "options": [
      "bailout",
      "ownership",
      "stake",
      "authorisation"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "currently": {
    "pos": "adv.",
    "en_def": "at the present time",
    "cn_def": "目前"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that achieves what you wanted",
    "cn_def": "成功地"
  },
  "jointly": {
    "pos": "adv.",
    "en_def": "together with others",
    "cn_def": "共同地"
  },
  "individually": {
    "pos": "adv.",
    "en_def": "separately, one by one",
    "cn_def": "個別地"
  },
  "privately": {
    "pos": "adv.",
    "en_def": "owned by a person, not the government",
    "cn_def": "私人地"
  },
  "ethically": {
    "pos": "adv.",
    "en_def": "in a morally right way",
    "cn_def": "合乎道德地"
  },
  "responsibly": {
    "pos": "adv.",
    "en_def": "in a careful and sensible way",
    "cn_def": "負責任地"
  },
  "know-how": {
    "pos": "n.",
    "en_def": "practical knowledge and skill",
    "cn_def": "專業技術；訣竅"
  },
  "networking": {
    "pos": "n.",
    "en_def": "meeting people who may help your career",
    "cn_def": "建立人脈"
  },
  "professionalism": {
    "pos": "n.",
    "en_def": "the skill and good behaviour expected at work",
    "cn_def": "專業素養"
  },
  "punctuality": {
    "pos": "n.",
    "en_def": "being on time",
    "cn_def": "準時"
  },
  "resourcefulness": {
    "pos": "n.",
    "en_def": "the ability to find clever ways to solve problems",
    "cn_def": "足智多謀；應變能力"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "an agreement about how something will be done",
    "cn_def": "安排；協議"
  },
  "supplier": {
    "pos": "n.",
    "en_def": "a company that provides goods to another company",
    "cn_def": "供應商"
  },
  "vendor": {
    "pos": "n.",
    "en_def": "a person or company that sells something",
    "cn_def": "賣家；廠商"
  },
  "arrears": {
    "pos": "n.",
    "en_def": "money that should already have been paid",
    "cn_def": "欠款"
  },
  "creditor": {
    "pos": "n.",
    "en_def": "a person or company that is owed money",
    "cn_def": "債權人"
  },
  "debtor": {
    "pos": "n.",
    "en_def": "a person who owes money",
    "cn_def": "債務人"
  },
  "instalment": {
    "pos": "n.",
    "en_def": "one of several payments for something",
    "cn_def": "分期付款"
  },
  "lump sum": {
    "pos": "n.phr.",
    "en_def": "a large amount of money paid at one time",
    "cn_def": "一次付清的款項"
  },
  "proceeds": {
    "pos": "n.",
    "en_def": "money received from selling something or an event",
    "cn_def": "收益"
  },
  "profit margin": {
    "pos": "n.phr.",
    "en_def": "the difference between cost and selling price",
    "cn_def": "利潤率"
  },
  "rebate": {
    "pos": "n.",
    "en_def": "money given back to a buyer",
    "cn_def": "退款；回饋金"
  },
  "savings": {
    "pos": "n.",
    "en_def": "money you have kept and not spent",
    "cn_def": "存款；積蓄"
  },
  "stake": {
    "pos": "n.",
    "en_def": "a share in a business",
    "cn_def": "股份"
  },
  "locally": {
    "pos": "adv.",
    "en_def": "in the nearby area",
    "cn_def": "在當地"
  },
  "economically": {
    "pos": "adv.",
    "en_def": "in a way related to the economy",
    "cn_def": "在經濟上"
  },
  "automatically": {
    "pos": "adv.",
    "en_def": "by itself, without a person doing it",
    "cn_def": "自動地"
  },
  "internationally": {
    "pos": "adv.",
    "en_def": "in many countries",
    "cn_def": "在國際上"
  },
  "upfront": {
    "pos": "adv.",
    "en_def": "paid or done before the work starts",
    "cn_def": "預先地"
  },
  "aggressively": {
    "pos": "adv.",
    "en_def": "in a strong and determined way",
    "cn_def": "積極地；強勢地"
  },
  "financially": {
    "pos": "adv.",
    "en_def": "in a way related to money",
    "cn_def": "在財務上"
  },
  "marginally": {
    "pos": "adv.",
    "en_def": "only a little",
    "cn_def": "稍微地"
  },
  "strategically": {
    "pos": "adv.",
    "en_def": "in a carefully planned way",
    "cn_def": "策略性地"
  },
  "commercially": {
    "pos": "adv.",
    "en_def": "in a way that makes money",
    "cn_def": "在商業上"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "a feeling that you can trust someone or something",
    "cn_def": "信心"
  },
  "accelerator": {
    "pos": "n.",
    "en_def": "a short programme that helps start-ups grow very fast",
    "cn_def": "加速器"
  },
  "complacency": {
    "pos": "n.",
    "en_def": "feeling too satisfied, so you stop trying hard",
    "cn_def": "自滿"
  },
  "crowdfunding": {
    "pos": "n.",
    "en_def": "raising money from many people, usually online",
    "cn_def": "群眾募資"
  },
  "spin-off": {
    "pos": "n.",
    "en_def": "a new company created from part of an older one",
    "cn_def": "分拆出來的公司"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company",
    "cn_def": "員工"
  },
  "tender": {
    "pos": "n.",
    "en_def": "a formal offer to do work at a stated price",
    "cn_def": "投標"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something good",
    "cn_def": "機會"
  },
  "advert": {
    "pos": "n.",
    "en_def": "a picture, film or text that tries to sell something",
    "cn_def": "廣告"
  },
  "analyst": {
    "pos": "n.",
    "en_def": "a person who studies data and gives advice",
    "cn_def": "分析師"
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
  "partner": {
    "pos": "n.",
    "en_def": "a person or company you work with in business",
    "cn_def": "合夥人；合作夥伴"
  },
  "showroom": {
    "pos": "n.",
    "en_def": "a room where goods like cars are shown to buyers",
    "cn_def": "展示間"
  },
  "salesperson": {
    "pos": "n.",
    "en_def": "a person whose job is selling things",
    "cn_def": "銷售員"
  },
  "adaptability": {
    "pos": "n.",
    "en_def": "the ability to change to suit new situations",
    "cn_def": "適應力"
  },
  "bankruptcy": {
    "pos": "n.",
    "en_def": "the state of being unable to pay debts",
    "cn_def": "破產"
  },
  "multinational": {
    "pos": "n.",
    "en_def": "a large company that works in many countries",
    "cn_def": "跨國公司"
  },
  "occupation": {
    "pos": "n.",
    "en_def": "a person's job",
    "cn_def": "職業"
  },
  "auditor": {
    "pos": "n.",
    "en_def": "a person who officially checks a company's accounts",
    "cn_def": "稽核員；審計師"
  },
  "copycat": {
    "pos": "n.",
    "en_def": "a person or company that copies another's idea",
    "cn_def": "模仿者"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "顧客"
  },
  "devaluation": {
    "pos": "n.",
    "en_def": "a fall in the value of a country's money",
    "cn_def": "貨幣貶值"
  },
  "bargaining": {
    "pos": "n.",
    "en_def": "discussing to reach an agreement about price or pay",
    "cn_def": "談判；議價"
  },
  "cryptocurrency": {
    "pos": "n.",
    "en_def": "digital money that is not controlled by a bank",
    "cn_def": "加密貨幣"
  },
  "positioning": {
    "pos": "n.",
    "en_def": "how a company wants customers to see its product compared to others",
    "cn_def": "市場定位"
  },
  "insolvency": {
    "pos": "n.",
    "en_def": "being unable to pay what you owe",
    "cn_def": "無力償債"
  },
  "trainee": {
    "pos": "n.",
    "en_def": "a person who is learning a job",
    "cn_def": "實習生；受訓者"
  },
  "ally": {
    "pos": "n.",
    "en_def": "a person or group that supports you",
    "cn_def": "盟友"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a paper showing that you have paid for something",
    "cn_def": "收據"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "activities to make people buy a product",
    "cn_def": "促銷"
  },
  "windfall": {
    "pos": "n.",
    "en_def": "an unexpected amount of money",
    "cn_def": "意外之財"
  },
  "shortcut": {
    "pos": "n.",
    "en_def": "a quicker way of doing something",
    "cn_def": "捷徑"
  },
  "sales pitch": {
    "pos": "n.phr.",
    "en_def": "a talk that tries to persuade someone to buy",
    "cn_def": "推銷話術"
  },
  "joint venture": {
    "pos": "n.phr.",
    "en_def": "a business project run by two companies together",
    "cn_def": "合資企業"
  },
  "chief executive": {
    "pos": "n.phr.",
    "en_def": "the person with the highest position in a company",
    "cn_def": "執行長"
  },
  "affiliation": {
    "pos": "n.",
    "en_def": "an official connection with a group or company",
    "cn_def": "隸屬關係"
  },
  "iteration": {
    "pos": "n.",
    "en_def": "one version in a series of improvements",
    "cn_def": "版本；迭代"
  },
  "flexitime": {
    "pos": "n.",
    "en_def": "a system where workers choose when to start and finish",
    "cn_def": "彈性工時"
  },
  "free sample": {
    "pos": "n.phr.",
    "en_def": "a small amount of a product given away to try",
    "cn_def": "免費試用品"
  },
  "balance sheet": {
    "pos": "n.phr.",
    "en_def": "a report showing what a company owns and owes",
    "cn_def": "資產負債表"
  },
  "work-life balance": {
    "pos": "n.phr.",
    "en_def": "a healthy mix of time for work and personal life",
    "cn_def": "工作與生活的平衡"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong commitment",
    "cn_def": "奉獻；專注投入"
  },
  "surcharge": {
    "pos": "n.",
    "en_def": "an extra amount added to the usual price",
    "cn_def": "附加費"
  },
  "authorisation": {
    "pos": "n.",
    "en_def": "official permission",
    "cn_def": "授權；許可"
  },
  "premises": {
    "pos": "n.",
    "en_def": "the building and land a business uses",
    "cn_def": "營業場所"
  },
  "leadership": {
    "pos": "n.",
    "en_def": "the ability to lead people",
    "cn_def": "領導力；領導"
  },
  "bailout": {
    "pos": "n.",
    "en_def": "money given to save a company or country from failing",
    "cn_def": "紓困"
  },
  "ownership": {
    "pos": "n.",
    "en_def": "the fact of owning something",
    "cn_def": "所有權"
  }
};

const EXTRA_GLOSSES = {};
