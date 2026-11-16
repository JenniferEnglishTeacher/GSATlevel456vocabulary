// Topic 20 Subunit 9 Quiz Data: Academic Words 學術單字 2 (headhunt – windfall)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S09 - Academic Words 學術單字 2 (headhunt – windfall)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "headhunt",
    "pos": "v.",
    "cn_def": "挖角",
    "en_def": "to find and offer a job to a skilled person from another company",
    "sentence": "A rival firm tried to {{BLANK}} our best engineer, so our boss offered her a higher salary to stay.",
    "cn": "一家競爭公司試圖挖角我們最優秀的工程師，所以老闆提供她更高的薪水讓她留下。"
  },
  {
    "word": "incumbent",
    "pos": "adj.",
    "cn_def": "現任的；在位的",
    "en_def": "currently holding a position or leading a market",
    "sentence": "The {{BLANK}} phone company had controlled the market for years, but a new rival quickly won young customers.",
    "cn": "那家在位的電信公司多年來掌控市場，但一家新對手很快就贏得了年輕顧客。"
  },
  {
    "word": "indebted",
    "pos": "adj.",
    "cn_def": "負債的",
    "en_def": "owing money",
    "sentence": "Many students are heavily {{BLANK}} after university, so they take any job to pay back their loans.",
    "cn": "許多學生大學畢業後背負沉重債務，所以他們接受任何工作來償還貸款。"
  },
  {
    "word": "inflate",
    "pos": "v.",
    "cn_def": "抬高；灌水",
    "en_def": "to make prices or numbers higher than they should be",
    "sentence": "Some hotels {{BLANK}} their prices during festivals, so smart travellers book their rooms months earlier.",
    "cn": "有些飯店在節慶期間抬高價格，所以精明的旅客會提前幾個月訂房。"
  },
  {
    "word": "insolvency",
    "pos": "n.",
    "cn_def": "無力償債",
    "en_def": "being unable to pay what you owe",
    "sentence": "The shoe shop faced {{BLANK}} after sales dropped, but a larger company bought it and saved most jobs.",
    "cn": "銷售下滑後這家鞋店面臨無力償債，但一家較大的公司收購了它並保住大部分工作。"
  },
  {
    "word": "marketable",
    "pos": "adj.",
    "cn_def": "有市場的；好賣的",
    "en_def": "easy to sell, or attractive to employers",
    "sentence": "Learning to code makes students more {{BLANK}}, because many companies need people who understand software.",
    "cn": "學習寫程式讓學生更有市場，因為許多公司需要懂軟體的人。"
  },
  {
    "word": "negotiable",
    "pos": "adj.",
    "cn_def": "可議的",
    "en_def": "able to be changed through discussion",
    "sentence": "The salary in the advert is {{BLANK}}, so experienced applicants can ask for more money at the interview.",
    "cn": "廣告中的薪資可議，所以有經驗的應徵者可以在面試時要求更高的薪水。"
  },
  {
    "word": "negotiation",
    "pos": "n.",
    "cn_def": "協商",
    "en_def": "discussion to reach an agreement",
    "sentence": "The {{BLANK}} between the two companies lasted three months, but in the end they agreed to work together.",
    "cn": "兩家公司之間的協商持續了三個月，但最終他們同意合作。"
  },
  {
    "word": "ownership",
    "pos": "n.",
    "cn_def": "所有權",
    "en_def": "the fact of owning something",
    "sentence": "The {{BLANK}} of the football club changed last year, and the new owners promised to build a bigger stadium.",
    "cn": "這家足球俱樂部的所有權去年易主，而新老闆承諾要蓋更大的體育館。"
  },
  {
    "word": "payable",
    "pos": "adj.",
    "cn_def": "應付的",
    "en_def": "that must be paid",
    "sentence": "The rent is {{BLANK}} on the first day of each month, so the shop owner sets a reminder on his phone.",
    "cn": "房租是每月第一天應付的，所以店主在手機上設定了提醒。"
  },
  {
    "word": "persuasion",
    "pos": "n.",
    "cn_def": "說服",
    "en_def": "the act of making someone agree or believe",
    "sentence": "It took a lot of {{BLANK}} to convince my grandmother to shop online, but now she orders vegetables every week.",
    "cn": "花了好一番說服才讓奶奶願意網購，但現在她每週都訂蔬菜。"
  },
  {
    "word": "profitability",
    "pos": "n.",
    "cn_def": "獲利能力",
    "en_def": "the ability to make a profit",
    "sentence": "The airline cut unpopular routes to improve its {{BLANK}}, and it made money for the first time in five years.",
    "cn": "航空公司刪減冷門航線來改善獲利能力，而且五年來首次賺錢。"
  },
  {
    "word": "recoup",
    "pos": "v.",
    "cn_def": "收回；彌補",
    "en_def": "to get back money you have spent or lost",
    "sentence": "The film cost a fortune to make, but it {{BLANK}} its costs in the first week because millions of people saw it.",
    "cn": "這部電影耗資巨大，但它在第一週就收回了成本，因為數百萬人看了它。"
  },
  {
    "word": "redundancy",
    "pos": "n.",
    "cn_def": "裁員；資遣",
    "en_def": "losing your job because it is no longer needed",
    "sentence": "The bank offered {{BLANK}} to two hundred staff after it closed many branches, and each person received extra pay.",
    "cn": "銀行關閉許多分行後對兩百名員工提出資遣，而且每個人都得到額外補償。"
  },
  {
    "word": "reinvest",
    "pos": "v.",
    "cn_def": "再投資",
    "en_def": "to put profits back into a business",
    "sentence": "Instead of buying a new car, the owner decided to {{BLANK}} the profit in better coffee machines.",
    "cn": "老闆沒有買新車，而是決定把利潤再投資在更好的咖啡機上。"
  },
  {
    "word": "remuneration",
    "pos": "n.",
    "cn_def": "報酬",
    "en_def": "payment for work",
    "sentence": "The {{BLANK}} for the job includes a good salary and a car, so many experienced managers applied for it.",
    "cn": "這份工作的報酬包括優渥的薪水和一輛車，所以許多資深經理應徵了這個職位。"
  },
  {
    "word": "renegotiate",
    "pos": "v.",
    "cn_def": "重新協商",
    "en_def": "to discuss and change an agreement again",
    "sentence": "When rents rose, the café owner tried to {{BLANK}} her contract, and the landlord agreed to a smaller increase.",
    "cn": "房租上漲時，咖啡店老闆試著重新協商合約，而房東同意了較小的漲幅。"
  },
  {
    "word": "saturated",
    "pos": "adj.",
    "cn_def": "飽和的",
    "en_def": "having so many products that no more can be sold",
    "sentence": "The bubble tea market is {{BLANK}} in this area, so a new shop must offer something special to survive.",
    "cn": "這一區的珍奶市場已經飽和，所以新店必須提供特別的東西才能生存。"
  },
  {
    "word": "solvent",
    "pos": "adj.",
    "cn_def": "有償債能力的",
    "en_def": "having enough money to pay all debts",
    "sentence": "The company stayed {{BLANK}} during the crisis because it had saved money in good years.",
    "cn": "這家公司在危機期間保持有償債能力，因為它在好年頭有存錢。"
  },
  {
    "word": "tender",
    "pos": "n.",
    "cn_def": "投標",
    "en_def": "a formal offer to do work at a stated price",
    "sentence": "Five companies sent in a {{BLANK}} to build the new bridge, and the city chose the one with the best safety plan.",
    "cn": "五家公司提出了建造新橋的投標，而市政府選擇了安全計畫最好的那一家。"
  },
  {
    "word": "thriving",
    "pos": "adj.",
    "cn_def": "蓬勃發展的",
    "en_def": "growing and doing very well",
    "sentence": "The once-quiet street now has a {{BLANK}} night market, and visitors come from all over the island.",
    "cn": "這條曾經冷清的街道現在有個蓬勃發展的夜市，而遊客從全島各地前來。"
  },
  {
    "word": "turnaround",
    "pos": "n.",
    "cn_def": "好轉；轉虧為盈",
    "en_def": "a big improvement after a bad period",
    "sentence": "The new boss led an amazing {{BLANK}}, and the shop that was losing money is now one of the best in town.",
    "cn": "新老闆帶來了驚人的轉虧為盈，而那家原本虧錢的店現在是鎮上最好的店之一。"
  },
  {
    "word": "unprofitable",
    "pos": "adj.",
    "cn_def": "無利可圖的",
    "en_def": "not making a profit",
    "sentence": "The company closed its {{BLANK}} stores in small towns, but it opened bigger ones in the cities.",
    "cn": "公司關閉了小鎮裡無利可圖的門市，但在城市開了更大的店。"
  },
  {
    "word": "upturn",
    "pos": "n.",
    "cn_def": "好轉；上揚",
    "en_def": "an improvement in business or the economy",
    "sentence": "There was an {{BLANK}} in hotel bookings after the borders reopened, so the staff who had left were rehired.",
    "cn": "邊境重新開放後飯店訂房出現好轉，所以先前離職的員工被重新雇用。"
  },
  {
    "word": "windfall",
    "pos": "n.",
    "cn_def": "意外之財",
    "en_def": "an unexpected amount of money",
    "sentence": "The family received a {{BLANK}} when their old land was bought for a new railway, so they paid off their debts.",
    "cn": "這家人的舊土地被收購來建新鐵路，他們得到一筆意外之財，所以還清了債務。"
  }
];

const MCQS = [
  {
    "q": "A rival firm tried to _____ our best engineer, so our boss offered her a higher salary to stay.",
    "options": [
      "hike",
      "headhunt",
      "award",
      "entice"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The _____ phone company had controlled the market for years, but a new rival quickly won young customers.",
    "options": [
      "incumbent",
      "flagship",
      "contractual",
      "seasoned"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Many students are heavily _____ after university, so they take any job to pay back their loans.",
    "options": [
      "self-made",
      "opportunistic",
      "cash-strapped",
      "indebted"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Some hotels _____ their prices during festivals, so smart travellers book their rooms months earlier.",
    "options": [
      "overvalue",
      "underwrite",
      "inflate",
      "entice"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The shoe shop faced _____ after sales dropped, but a larger company bought it and saved most jobs.",
    "options": [
      "insolvency",
      "upstart",
      "bargain",
      "earnings"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Learning to code makes students more _____, because many companies need people who understand software.",
    "options": [
      "budgetary",
      "user-friendly",
      "marketable",
      "bottom-up"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The salary in the advert is _____, so experienced applicants can ask for more money at the interview.",
    "options": [
      "hard-earned",
      "negotiable",
      "exploitative",
      "high-profile"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The _____ between the two companies lasted three months, but in the end they agreed to work together.",
    "options": [
      "salesperson",
      "arrangement",
      "accomplishment",
      "negotiation"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The _____ of the football club changed last year, and the new owners promised to build a bigger stadium.",
    "options": [
      "takeover",
      "ownership",
      "franchise",
      "unicorn"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The rent is _____ on the first day of each month, so the shop owner sets a reminder on his phone.",
    "options": [
      "nonprofit",
      "loss-making",
      "payable",
      "hands-off"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "It took a lot of _____ to convince my grandmother to shop online, but now she orders vegetables every week.",
    "options": [
      "persuasion",
      "receipt",
      "exporter",
      "flexitime"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The airline cut unpopular routes to improve its _____, and it made money for the first time in five years.",
    "options": [
      "auditor",
      "spin-off",
      "acknowledgement",
      "profitability"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The film cost a fortune to make, but it _____ its costs in the first week because millions of people saw it.",
    "options": [
      "recoup",
      "entice",
      "pivot",
      "overcharge"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The bank offered _____ to two hundred staff after it closed many branches, and each person received extra pay.",
    "options": [
      "complacency",
      "co-founder",
      "SME",
      "redundancy"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Instead of buying a new car, the owner decided to _____ the profit in better coffee machines.",
    "options": [
      "outsell",
      "reinvest",
      "dip",
      "slash"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The _____ for the job includes a good salary and a car, so many experienced managers applied for it.",
    "options": [
      "vendor",
      "upstart",
      "remuneration",
      "resourcefulness"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "When rents rose, the café owner tried to _____ her contract, and the landlord agreed to a smaller increase.",
    "options": [
      "entice",
      "resign",
      "afford",
      "renegotiate"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The bubble tea market is _____ in this area, so a new shop must offer something special to survive.",
    "options": [
      "contractual",
      "well-established",
      "saturated",
      "nonprofit"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company stayed _____ during the crisis because it had saved money in good years.",
    "options": [
      "family-run",
      "solvent",
      "well-established",
      "profit-driven"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Five companies sent in a _____ to build the new bridge, and the city chose the one with the best safety plan.",
    "options": [
      "tender",
      "advert",
      "manager",
      "unicorn"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The once-quiet street now has a _____ night market, and visitors come from all over the island.",
    "options": [
      "second-hand",
      "thriving",
      "entrepreneurial",
      "promotional"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new boss led an amazing _____, and the shop that was losing money is now one of the best in town.",
    "options": [
      "turnaround",
      "warranty",
      "know-how",
      "competence"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The company closed its _____ stores in small towns, but it opened bigger ones in the cities.",
    "options": [
      "flagship",
      "cash-strapped",
      "unprofitable",
      "entrepreneurial"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "There was an _____ in hotel bookings after the borders reopened, so the staff who had left were rehired.",
    "options": [
      "fintech",
      "employee",
      "payback",
      "upturn"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The family received a _____ when their old land was bought for a new railway, so they paid off their debts.",
    "options": [
      "windfall",
      "accomplishment",
      "marketer",
      "merger"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "headhunt": {
    "pos": "v.",
    "en_def": "to find and offer a job to a skilled person from another company",
    "cn_def": "挖角"
  },
  "incumbent": {
    "pos": "adj.",
    "en_def": "currently holding a position or leading a market",
    "cn_def": "現任的；在位的"
  },
  "indebted": {
    "pos": "adj.",
    "en_def": "owing money",
    "cn_def": "負債的"
  },
  "inflate": {
    "pos": "v.",
    "en_def": "to make prices or numbers higher than they should be",
    "cn_def": "抬高；灌水"
  },
  "insolvency": {
    "pos": "n.",
    "en_def": "being unable to pay what you owe",
    "cn_def": "無力償債"
  },
  "marketable": {
    "pos": "adj.",
    "en_def": "easy to sell, or attractive to employers",
    "cn_def": "有市場的；好賣的"
  },
  "negotiable": {
    "pos": "adj.",
    "en_def": "able to be changed through discussion",
    "cn_def": "可議的"
  },
  "negotiation": {
    "pos": "n.",
    "en_def": "discussion to reach an agreement",
    "cn_def": "協商"
  },
  "ownership": {
    "pos": "n.",
    "en_def": "the fact of owning something",
    "cn_def": "所有權"
  },
  "payable": {
    "pos": "adj.",
    "en_def": "that must be paid",
    "cn_def": "應付的"
  },
  "persuasion": {
    "pos": "n.",
    "en_def": "the act of making someone agree or believe",
    "cn_def": "說服"
  },
  "profitability": {
    "pos": "n.",
    "en_def": "the ability to make a profit",
    "cn_def": "獲利能力"
  },
  "recoup": {
    "pos": "v.",
    "en_def": "to get back money you have spent or lost",
    "cn_def": "收回；彌補"
  },
  "redundancy": {
    "pos": "n.",
    "en_def": "losing your job because it is no longer needed",
    "cn_def": "裁員；資遣"
  },
  "reinvest": {
    "pos": "v.",
    "en_def": "to put profits back into a business",
    "cn_def": "再投資"
  },
  "remuneration": {
    "pos": "n.",
    "en_def": "payment for work",
    "cn_def": "報酬"
  },
  "renegotiate": {
    "pos": "v.",
    "en_def": "to discuss and change an agreement again",
    "cn_def": "重新協商"
  },
  "saturated": {
    "pos": "adj.",
    "en_def": "having so many products that no more can be sold",
    "cn_def": "飽和的"
  },
  "solvent": {
    "pos": "adj.",
    "en_def": "having enough money to pay all debts",
    "cn_def": "有償債能力的"
  },
  "tender": {
    "pos": "n.",
    "en_def": "a formal offer to do work at a stated price",
    "cn_def": "投標"
  },
  "thriving": {
    "pos": "adj.",
    "en_def": "growing and doing very well",
    "cn_def": "蓬勃發展的"
  },
  "turnaround": {
    "pos": "n.",
    "en_def": "a big improvement after a bad period",
    "cn_def": "好轉；轉虧為盈"
  },
  "unprofitable": {
    "pos": "adj.",
    "en_def": "not making a profit",
    "cn_def": "無利可圖的"
  },
  "upturn": {
    "pos": "n.",
    "en_def": "an improvement in business or the economy",
    "cn_def": "好轉；上揚"
  },
  "windfall": {
    "pos": "n.",
    "en_def": "an unexpected amount of money",
    "cn_def": "意外之財"
  },
  "hike": {
    "pos": "v.",
    "en_def": "to increase prices or taxes suddenly",
    "cn_def": "調漲；大幅提高"
  },
  "award": {
    "pos": "v.",
    "en_def": "to give something officially as a prize or contract",
    "cn_def": "授予；給予"
  },
  "entice": {
    "pos": "v.",
    "en_def": "to attract someone by offering something good",
    "cn_def": "引誘；吸引"
  },
  "flagship": {
    "pos": "adj.",
    "en_def": "the most important of a group of products or shops",
    "cn_def": "旗艦的"
  },
  "contractual": {
    "pos": "adj.",
    "en_def": "relating to a contract",
    "cn_def": "合約上的"
  },
  "seasoned": {
    "pos": "adj.",
    "en_def": "having a lot of experience",
    "cn_def": "經驗豐富的"
  },
  "self-made": {
    "pos": "adj.",
    "en_def": "rich or successful through your own work",
    "cn_def": "白手起家的"
  },
  "opportunistic": {
    "pos": "adj.",
    "en_def": "using chances for your own advantage",
    "cn_def": "投機的"
  },
  "cash-strapped": {
    "pos": "adj.",
    "en_def": "not having enough money",
    "cn_def": "缺錢的；手頭拮据的"
  },
  "overvalue": {
    "pos": "v.",
    "en_def": "to think something is worth more than it is",
    "cn_def": "高估"
  },
  "underwrite": {
    "pos": "v.",
    "en_def": "to agree to pay for losses or costs if needed",
    "cn_def": "承保；擔保"
  },
  "upstart": {
    "pos": "n.",
    "en_def": "a new and confident company that challenges older ones",
    "cn_def": "新貴；後起之秀"
  },
  "bargain": {
    "pos": "n.",
    "en_def": "something bought for less than its usual price",
    "cn_def": "便宜貨；划算的東西"
  },
  "earnings": {
    "pos": "n.",
    "en_def": "money that a person or company earns",
    "cn_def": "收入；盈餘"
  },
  "budgetary": {
    "pos": "adj.",
    "en_def": "relating to a budget",
    "cn_def": "預算的"
  },
  "user-friendly": {
    "pos": "adj.",
    "en_def": "easy to use",
    "cn_def": "容易使用的"
  },
  "bottom-up": {
    "pos": "adj.",
    "en_def": "starting from ordinary workers or people",
    "cn_def": "由下而上的"
  },
  "hard-earned": {
    "pos": "adj.",
    "en_def": "gained through a lot of hard work",
    "cn_def": "辛苦賺來的"
  },
  "exploitative": {
    "pos": "adj.",
    "en_def": "treating people unfairly to gain profit",
    "cn_def": "剝削的"
  },
  "high-profile": {
    "pos": "adj.",
    "en_def": "well known and getting a lot of attention",
    "cn_def": "高知名度的"
  },
  "salesperson": {
    "pos": "n.",
    "en_def": "a person whose job is selling things",
    "cn_def": "銷售員"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "an agreement about how something will be done",
    "cn_def": "安排；協議"
  },
  "accomplishment": {
    "pos": "n.",
    "en_def": "something achieved with effort",
    "cn_def": "成就"
  },
  "takeover": {
    "pos": "n.",
    "en_def": "when one company gets control of another",
    "cn_def": "收購"
  },
  "franchise": {
    "pos": "n.",
    "en_def": "the right to sell a company's products under its name",
    "cn_def": "加盟經營權"
  },
  "unicorn": {
    "pos": "n.",
    "en_def": "a young company worth over one billion dollars",
    "cn_def": "獨角獸企業"
  },
  "nonprofit": {
    "pos": "adj.",
    "en_def": "not working to make money for owners",
    "cn_def": "非營利的"
  },
  "loss-making": {
    "pos": "adj.",
    "en_def": "losing money instead of making profit",
    "cn_def": "虧損的"
  },
  "hands-off": {
    "pos": "adj.",
    "en_def": "not getting involved in details",
    "cn_def": "放手的；不干涉的"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a paper showing that you have paid for something",
    "cn_def": "收據"
  },
  "exporter": {
    "pos": "n.",
    "en_def": "a country or company that sells goods abroad",
    "cn_def": "出口國；出口商"
  },
  "flexitime": {
    "pos": "n.",
    "en_def": "a system where workers choose when to start and finish",
    "cn_def": "彈性工時"
  },
  "auditor": {
    "pos": "n.",
    "en_def": "a person who officially checks a company's accounts",
    "cn_def": "稽核員；審計師"
  },
  "spin-off": {
    "pos": "n.",
    "en_def": "a new company created from part of an older one",
    "cn_def": "分拆出來的公司"
  },
  "acknowledgement": {
    "pos": "n.",
    "en_def": "a message saying you have received something",
    "cn_def": "回執；確認通知"
  },
  "pivot": {
    "pos": "v.",
    "en_def": "to change a business plan in a new direction",
    "cn_def": "轉型"
  },
  "overcharge": {
    "pos": "v.",
    "en_def": "to ask for too much money",
    "cn_def": "多收費；索價過高"
  },
  "complacency": {
    "pos": "n.",
    "en_def": "feeling too satisfied, so you stop trying hard",
    "cn_def": "自滿"
  },
  "co-founder": {
    "pos": "n.",
    "en_def": "one of two or more people who start a company together",
    "cn_def": "共同創辦人"
  },
  "sme": {
    "pos": "n.",
    "en_def": "a small or medium-sized business",
    "cn_def": "中小企業"
  },
  "outsell": {
    "pos": "v.",
    "en_def": "to sell more than another product or company",
    "cn_def": "銷量超過"
  },
  "dip": {
    "pos": "v.",
    "en_def": "to go down slightly for a short time",
    "cn_def": "小幅下滑"
  },
  "slash": {
    "pos": "v.",
    "en_def": "to reduce something a lot",
    "cn_def": "大砍；大幅削減"
  },
  "vendor": {
    "pos": "n.",
    "en_def": "a person or company that sells something",
    "cn_def": "賣家；廠商"
  },
  "resourcefulness": {
    "pos": "n.",
    "en_def": "the ability to find clever ways to solve problems",
    "cn_def": "足智多謀；應變能力"
  },
  "resign": {
    "pos": "v.",
    "en_def": "to leave your job officially",
    "cn_def": "辭職"
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for something",
    "cn_def": "負擔得起"
  },
  "well-established": {
    "pos": "adj.",
    "en_def": "existing for a long time and respected",
    "cn_def": "歷史悠久且穩固的"
  },
  "family-run": {
    "pos": "adj.",
    "en_def": "owned and managed by one family",
    "cn_def": "家族經營的"
  },
  "profit-driven": {
    "pos": "adj.",
    "en_def": "mainly interested in making money",
    "cn_def": "以獲利為導向的"
  },
  "advert": {
    "pos": "n.",
    "en_def": "a picture, film or text that tries to sell something",
    "cn_def": "廣告"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who controls a team or part of a business",
    "cn_def": "經理"
  },
  "second-hand": {
    "pos": "adj.",
    "en_def": "owned by someone else before",
    "cn_def": "二手的"
  },
  "entrepreneurial": {
    "pos": "adj.",
    "en_def": "willing to take risks to start new businesses",
    "cn_def": "有創業精神的"
  },
  "promotional": {
    "pos": "adj.",
    "en_def": "made to advertise a product",
    "cn_def": "宣傳的"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair a product if it breaks",
    "cn_def": "保固"
  },
  "know-how": {
    "pos": "n.",
    "en_def": "practical knowledge and skill",
    "cn_def": "專業技術；訣竅"
  },
  "competence": {
    "pos": "n.",
    "en_def": "the ability to do something well",
    "cn_def": "能力；勝任"
  },
  "fintech": {
    "pos": "n.",
    "en_def": "technology used to provide financial services",
    "cn_def": "金融科技"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company",
    "cn_def": "員工"
  },
  "payback": {
    "pos": "n.",
    "en_def": "the return of money you invested",
    "cn_def": "回本"
  },
  "marketer": {
    "pos": "n.",
    "en_def": "a person whose job is to make people want a product",
    "cn_def": "行銷人員"
  },
  "merger": {
    "pos": "n.",
    "en_def": "when two companies join to become one",
    "cn_def": "合併"
  }
};

const EXTRA_GLOSSES = {};
