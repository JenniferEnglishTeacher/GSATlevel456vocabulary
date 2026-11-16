// Topic 20 Subunit 6 Quiz Data: Innovation & Start-up Culture 創新與新創文化
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S06 - Innovation & Start-up Culture 創新與新創文化",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "research and development",
    "pos": "n.phr.",
    "cn_def": "研發",
    "en_def": "work to create new products and improve old ones",
    "sentence": "The company spends a fifth of its income on {{BLANK}}, so it releases new phones every year.",
    "cn": "這家公司把五分之一的收入花在研發上，所以它每年都推出新手機。"
  },
  {
    "word": "disruptive",
    "pos": "adj.",
    "cn_def": "顛覆性的",
    "en_def": "changing an industry by doing things in a new way",
    "sentence": "Streaming was a {{BLANK}} idea for the film industry, and many video rental shops closed within a few years.",
    "cn": "串流對電影產業是一個顛覆性的想法，而許多錄影帶出租店在幾年內就關門了。"
  },
  {
    "word": "incubator",
    "pos": "n.",
    "cn_def": "育成中心",
    "en_def": "an organisation that helps new companies grow",
    "sentence": "The university runs an {{BLANK}} for student businesses, so young founders get free offices and advice.",
    "cn": "大學經營一個學生創業的育成中心，所以年輕創辦人能得到免費辦公室和建議。"
  },
  {
    "word": "accelerator",
    "pos": "n.",
    "cn_def": "加速器",
    "en_def": "a short programme that helps start-ups grow very fast",
    "sentence": "After joining a three-month {{BLANK}} in Singapore, the team improved its app and met many investors.",
    "cn": "在加入新加坡一個為期三個月的加速器計畫後，團隊改進了他們的應用程式並結識許多投資人。"
  },
  {
    "word": "unicorn",
    "pos": "n.",
    "cn_def": "獨角獸企業",
    "en_def": "a young company worth over one billion dollars",
    "sentence": "The delivery app became a {{BLANK}} in only four years, but it has never made a profit.",
    "cn": "這個外送應用程式只花了四年就成為獨角獸企業，但它從來沒有獲利過。"
  },
  {
    "word": "sales pitch",
    "pos": "n.phr.",
    "cn_def": "推銷話術",
    "en_def": "a talk that tries to persuade someone to buy",
    "sentence": "His {{BLANK}} was short and funny, so the investors listened carefully and asked for a second meeting.",
    "cn": "他的推銷話術簡短又有趣，所以投資人仔細聆聽並要求第二次會面。"
  },
  {
    "word": "pitch deck",
    "pos": "n.phr.",
    "cn_def": "募資簡報",
    "en_def": "a set of slides used to present a business idea",
    "sentence": "The founders spent all night on their {{BLANK}}, because they had only ten minutes to impress the judges.",
    "cn": "創辦人整晚都在準備他們的募資簡報，因為他們只有十分鐘來打動評審。"
  },
  {
    "word": "seed funding",
    "pos": "n.phr.",
    "cn_def": "種子資金",
    "en_def": "the first money a new company gets to start",
    "sentence": "With the {{BLANK}}, they built a simple version of the app, and then they asked users for feedback.",
    "cn": "他們用種子資金開發了一個簡單版本的應用程式，然後向使用者徵求回饋。"
  },
  {
    "word": "scale-up",
    "pos": "n.",
    "cn_def": "規模化成長企業",
    "en_def": "a young company that is growing very quickly",
    "sentence": "The firm is no longer a tiny start-up but a {{BLANK}}, so it is opening offices in three new countries.",
    "cn": "這家公司已不再是小小的新創，而是一家規模化成長企業，所以它正在三個新國家開設辦公室。"
  },
  {
    "word": "minimum viable product",
    "pos": "n.phr.",
    "cn_def": "最小可行產品",
    "en_def": "the simplest version of a product that people can test",
    "sentence": "Instead of waiting a year, the team launched a {{BLANK}} in a month and improved it with users' ideas.",
    "cn": "團隊沒有等上一年，而是在一個月內推出最小可行產品，再根據使用者的想法改進。"
  },
  {
    "word": "iterate",
    "pos": "v.",
    "cn_def": "反覆改進",
    "en_def": "to repeat a process to improve something step by step",
    "sentence": "Designers {{BLANK}} quickly by testing small changes every week, and they keep only the ones users like.",
    "cn": "設計師每週測試小改動來快速反覆改進，而且只保留使用者喜歡的部分。"
  },
  {
    "word": "iteration",
    "pos": "n.",
    "cn_def": "版本；迭代",
    "en_def": "one version in a series of improvements",
    "sentence": "The first {{BLANK}} of the robot kept falling over, but the fifth version could walk up stairs.",
    "cn": "這個機器人的第一個版本一直跌倒，但第五個版本已經能走上樓梯。"
  },
  {
    "word": "pivot",
    "pos": "v.",
    "cn_def": "轉型",
    "en_def": "to change a business plan in a new direction",
    "sentence": "The start-up sold cameras at first, but it decided to {{BLANK}} to software when sales were poor.",
    "cn": "這家新創起初賣相機，但在銷售不佳時決定轉型做軟體。"
  },
  {
    "word": "beta",
    "pos": "n.",
    "cn_def": "測試版",
    "en_def": "an early version of software tested by users",
    "sentence": "I joined the {{BLANK}} of the new game, so I could play it early and report any bugs to the makers.",
    "cn": "我加入了新遊戲的測試版，所以我能提早玩並向開發者回報任何錯誤。"
  },
  {
    "word": "product development",
    "pos": "n.phr.",
    "cn_def": "產品開發",
    "en_def": "the process of creating a new product",
    "sentence": "{{BLANK}} took three years because the engineers wanted the battery to be completely safe.",
    "cn": "產品開發花了三年，因為工程師希望電池完全安全。"
  },
  {
    "word": "user experience",
    "pos": "n.phr.",
    "cn_def": "使用者體驗",
    "en_def": "how easy and pleasant something is to use",
    "sentence": "The bank improved the {{BLANK}} of its app, so older customers can now pay bills without asking for help.",
    "cn": "銀行改善了應用程式的使用者體驗，所以年長顧客現在不用求助就能繳費。"
  },
  {
    "word": "early-stage",
    "pos": "adj.",
    "cn_def": "早期階段的",
    "en_def": "at the beginning of development",
    "sentence": "Investing in {{BLANK}} companies is risky, because many of them close before they make any money.",
    "cn": "投資早期階段的公司風險很高，因為許多公司在賺到錢之前就關門了。"
  },
  {
    "word": "entrepreneurship",
    "pos": "n.",
    "cn_def": "創業精神；創業",
    "en_def": "the skills and activity of starting businesses",
    "sentence": "The school offers a course in {{BLANK}}, and students must design and sell a real product by the end of term.",
    "cn": "學校開設一門創業課程，而學生必須在學期末前設計並銷售一個真正的產品。"
  },
  {
    "word": "entrepreneurial",
    "pos": "adj.",
    "cn_def": "有創業精神的",
    "en_def": "willing to take risks to start new businesses",
    "sentence": "My cousin is very {{BLANK}}, so she started selling phone cases online when she was only fifteen.",
    "cn": "我表妹很有創業精神，所以她才十五歲就開始在網路上賣手機殼。"
  },
  {
    "word": "tech giant",
    "pos": "n.phr.",
    "cn_def": "科技巨頭",
    "en_def": "a very large and powerful technology company",
    "sentence": "The small app was bought by a {{BLANK}}, and its founders became rich overnight.",
    "cn": "這個小應用程式被一家科技巨頭收購，而它的創辦人一夜致富。"
  },
  {
    "word": "Silicon Valley",
    "pos": "n.phr.",
    "cn_def": "矽谷",
    "en_def": "an area in California famous for tech companies",
    "sentence": "Many engineers dream of working in {{BLANK}}, but the high rent there makes life expensive.",
    "cn": "許多工程師夢想在矽谷工作，但那裡的高房租讓生活很昂貴。"
  },
  {
    "word": "hackathon",
    "pos": "n.",
    "cn_def": "黑客松；程式馬拉松",
    "en_def": "an event where people build software together very fast",
    "sentence": "Our team stayed awake for two days at the {{BLANK}}, and we built an app that helps students share notes.",
    "cn": "我們團隊在黑客松熬了兩天，而且我們做出了一個幫助學生分享筆記的應用程式。"
  },
  {
    "word": "crowdsourcing",
    "pos": "n.",
    "cn_def": "群眾外包",
    "en_def": "getting ideas or work from a large group of people online",
    "sentence": "The museum used {{BLANK}} to name its new dinosaur, and thousands of children sent in suggestions.",
    "cn": "博物館利用群眾外包為新的恐龍命名，而數千名孩子寄來了建議。"
  },
  {
    "word": "copycat",
    "pos": "n.",
    "cn_def": "模仿者",
    "en_def": "a person or company that copies another's idea",
    "sentence": "Soon after the cafe became popular, a {{BLANK}} opened across the street with the same menu and lower prices.",
    "cn": "那家咖啡店爆紅不久，對街就開了一家菜單相同、價格更低的模仿者。"
  },
  {
    "word": "first-mover advantage",
    "pos": "n.phr.",
    "cn_def": "先行者優勢",
    "en_def": "the benefit of being the first company in a new market",
    "sentence": "The company had a {{BLANK}} in electric scooters, but rivals soon offered cheaper models.",
    "cn": "這家公司在電動機車市場擁有先行者優勢，但競爭對手很快就推出更便宜的車款。"
  },
  {
    "word": "design thinking",
    "pos": "n.phr.",
    "cn_def": "設計思考",
    "en_def": "solving problems by focusing on users' real needs",
    "sentence": "Using {{BLANK}}, the students interviewed elderly people first, and then they designed an easier remote control.",
    "cn": "學生們運用設計思考，先訪問了長者，然後設計出更好用的遙控器。"
  },
  {
    "word": "fintech",
    "pos": "n.",
    "cn_def": "金融科技",
    "en_def": "technology used to provide financial services",
    "sentence": "{{BLANK}} apps let people send money with their phones, so many young people rarely visit a bank.",
    "cn": "金融科技應用程式讓人們用手機轉帳，所以許多年輕人很少去銀行。"
  },
  {
    "word": "sharing economy",
    "pos": "n.phr.",
    "cn_def": "共享經濟",
    "en_def": "a system where people rent or share things through apps",
    "sentence": "Bike rental apps are part of the {{BLANK}}, and they let people ride without owning a bike.",
    "cn": "租借腳踏車的應用程式是共享經濟的一部分，讓人們不用擁有腳踏車也能騎車。"
  }
];

const MCQS = [
  {
    "q": "The company spends a fifth of its income on _____, so it releases new phones every year.",
    "options": [
      "research and development",
      "customer base",
      "financial year",
      "target market"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Streaming was a _____ idea for the film industry, and many video rental shops closed within a few years.",
    "options": [
      "thriving",
      "disruptive",
      "budgetary",
      "high-end"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The university runs an _____ for student businesses, so young founders get free offices and advice.",
    "options": [
      "spin-off",
      "liquidity",
      "incubator",
      "coupon"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After joining a three-month _____ in Singapore, the team improved its app and met many investors.",
    "options": [
      "coupon",
      "accounting",
      "bargaining",
      "accelerator"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The delivery app became a _____ in only four years, but it has never made a profit.",
    "options": [
      "know-how",
      "devaluation",
      "unicorn",
      "fundraising"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "His _____ was short and funny, so the investors listened carefully and asked for a second meeting.",
    "options": [
      "stock market",
      "sales pitch",
      "shopping cart",
      "free market"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The founders spent all night on their _____, because they had only ten minutes to impress the judges.",
    "options": [
      "pitch deck",
      "bear market",
      "free shipping",
      "limited company"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "With the _____, they built a simple version of the app, and then they asked users for feedback.",
    "options": [
      "ad campaign",
      "online shopping",
      "business owner",
      "seed funding"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The firm is no longer a tiny start-up but a _____, so it is opening offices in three new countries.",
    "options": [
      "scale-up",
      "ally",
      "rip-off",
      "headquarters"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Instead of waiting a year, the team launched a _____ in a month and improved it with users' ideas.",
    "options": [
      "exchange rate",
      "email marketing",
      "lump sum",
      "minimum viable product"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Designers _____ quickly by testing small changes every week, and they keep only the ones users like.",
    "options": [
      "motivate",
      "iterate",
      "headhunt",
      "inflate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The first _____ of the robot kept falling over, but the fifth version could walk up stairs.",
    "options": [
      "goodwill",
      "surcharge",
      "iteration",
      "liquidity"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The start-up sold cameras at first, but it decided to _____ to software when sales were poor.",
    "options": [
      "award",
      "clinch",
      "fire",
      "pivot"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "I joined the _____ of the new game, so I could play it early and report any bugs to the makers.",
    "options": [
      "beta",
      "instalment",
      "boss",
      "backing"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "_____ took three years because the engineers wanted the battery to be completely safe.",
    "options": [
      "business plan",
      "free shipping",
      "product development",
      "loyalty card"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The bank improved the _____ of its app, so older customers can now pay bills without asking for help.",
    "options": [
      "after-sales service",
      "user experience",
      "return policy",
      "click-through rate"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Investing in _____ companies is risky, because many of them close before they make any money.",
    "options": [
      "forward-thinking",
      "brand-new",
      "capital-intensive",
      "early-stage"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The school offers a course in _____, and students must design and sell a real product by the end of term.",
    "options": [
      "devaluation",
      "entrepreneurship",
      "affiliation",
      "tender"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "My cousin is very _____, so she started selling phone cases online when she was only fifteen.",
    "options": [
      "prosperous",
      "seasoned",
      "entrepreneurial",
      "cutthroat"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The small app was bought by a _____, and its founders became rich overnight.",
    "options": [
      "tech giant",
      "tax return",
      "developing country",
      "job interview"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Many engineers dream of working in _____, but the high rent there makes life expensive.",
    "options": [
      "economic crisis",
      "click-through rate",
      "window shopping",
      "Silicon Valley"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Our team stayed awake for two days at the _____, and we built an app that helps students share notes.",
    "options": [
      "invoice",
      "hackathon",
      "cartel",
      "showroom"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The museum used _____ to name its new dinosaur, and thousands of children sent in suggestions.",
    "options": [
      "windfall",
      "partner",
      "crowdsourcing",
      "multinational"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Soon after the cafe became popular, a _____ opened across the street with the same menu and lower prices.",
    "options": [
      "copycat",
      "bankruptcy",
      "savings",
      "mismatch"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The company had a _____ in electric scooters, but rivals soon offered cheaper models.",
    "options": [
      "target market",
      "window shopping",
      "credit card",
      "first-mover advantage"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Using _____, the students interviewed elderly people first, and then they designed an easier remote control.",
    "options": [
      "window shopping",
      "design thinking",
      "angel investor",
      "consumer behaviour"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "_____ apps let people send money with their phones, so many young people rarely visit a bank.",
    "options": [
      "fintech",
      "multinational",
      "receipt",
      "analyst"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Bike rental apps are part of the _____, and they let people ride without owning a bike.",
    "options": [
      "sales target",
      "business model",
      "sharing economy",
      "emerging market"
    ],
    "answer": 2,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "research and development": {
    "pos": "n.phr.",
    "en_def": "work to create new products and improve old ones",
    "cn_def": "研發"
  },
  "disruptive": {
    "pos": "adj.",
    "en_def": "changing an industry by doing things in a new way",
    "cn_def": "顛覆性的"
  },
  "incubator": {
    "pos": "n.",
    "en_def": "an organisation that helps new companies grow",
    "cn_def": "育成中心"
  },
  "accelerator": {
    "pos": "n.",
    "en_def": "a short programme that helps start-ups grow very fast",
    "cn_def": "加速器"
  },
  "unicorn": {
    "pos": "n.",
    "en_def": "a young company worth over one billion dollars",
    "cn_def": "獨角獸企業"
  },
  "sales pitch": {
    "pos": "n.phr.",
    "en_def": "a talk that tries to persuade someone to buy",
    "cn_def": "推銷話術"
  },
  "pitch deck": {
    "pos": "n.phr.",
    "en_def": "a set of slides used to present a business idea",
    "cn_def": "募資簡報"
  },
  "seed funding": {
    "pos": "n.phr.",
    "en_def": "the first money a new company gets to start",
    "cn_def": "種子資金"
  },
  "scale-up": {
    "pos": "n.",
    "en_def": "a young company that is growing very quickly",
    "cn_def": "規模化成長企業"
  },
  "minimum viable product": {
    "pos": "n.phr.",
    "en_def": "the simplest version of a product that people can test",
    "cn_def": "最小可行產品"
  },
  "iterate": {
    "pos": "v.",
    "en_def": "to repeat a process to improve something step by step",
    "cn_def": "反覆改進"
  },
  "iteration": {
    "pos": "n.",
    "en_def": "one version in a series of improvements",
    "cn_def": "版本；迭代"
  },
  "pivot": {
    "pos": "v.",
    "en_def": "to change a business plan in a new direction",
    "cn_def": "轉型"
  },
  "beta": {
    "pos": "n.",
    "en_def": "an early version of software tested by users",
    "cn_def": "測試版"
  },
  "product development": {
    "pos": "n.phr.",
    "en_def": "the process of creating a new product",
    "cn_def": "產品開發"
  },
  "user experience": {
    "pos": "n.phr.",
    "en_def": "how easy and pleasant something is to use",
    "cn_def": "使用者體驗"
  },
  "early-stage": {
    "pos": "adj.",
    "en_def": "at the beginning of development",
    "cn_def": "早期階段的"
  },
  "entrepreneurship": {
    "pos": "n.",
    "en_def": "the skills and activity of starting businesses",
    "cn_def": "創業精神；創業"
  },
  "entrepreneurial": {
    "pos": "adj.",
    "en_def": "willing to take risks to start new businesses",
    "cn_def": "有創業精神的"
  },
  "tech giant": {
    "pos": "n.phr.",
    "en_def": "a very large and powerful technology company",
    "cn_def": "科技巨頭"
  },
  "silicon valley": {
    "pos": "n.phr.",
    "en_def": "an area in California famous for tech companies",
    "cn_def": "矽谷"
  },
  "hackathon": {
    "pos": "n.",
    "en_def": "an event where people build software together very fast",
    "cn_def": "黑客松；程式馬拉松"
  },
  "crowdsourcing": {
    "pos": "n.",
    "en_def": "getting ideas or work from a large group of people online",
    "cn_def": "群眾外包"
  },
  "copycat": {
    "pos": "n.",
    "en_def": "a person or company that copies another's idea",
    "cn_def": "模仿者"
  },
  "first-mover advantage": {
    "pos": "n.phr.",
    "en_def": "the benefit of being the first company in a new market",
    "cn_def": "先行者優勢"
  },
  "design thinking": {
    "pos": "n.phr.",
    "en_def": "solving problems by focusing on users' real needs",
    "cn_def": "設計思考"
  },
  "fintech": {
    "pos": "n.",
    "en_def": "technology used to provide financial services",
    "cn_def": "金融科技"
  },
  "sharing economy": {
    "pos": "n.phr.",
    "en_def": "a system where people rent or share things through apps",
    "cn_def": "共享經濟"
  },
  "customer base": {
    "pos": "n.phr.",
    "en_def": "all the regular customers of a business",
    "cn_def": "顧客群"
  },
  "financial year": {
    "pos": "n.phr.",
    "en_def": "the twelve months a company uses for its accounts",
    "cn_def": "會計年度"
  },
  "target market": {
    "pos": "n.phr.",
    "en_def": "the group of people a product is made for",
    "cn_def": "目標市場"
  },
  "thriving": {
    "pos": "adj.",
    "en_def": "growing and doing very well",
    "cn_def": "蓬勃發展的"
  },
  "budgetary": {
    "pos": "adj.",
    "en_def": "relating to a budget",
    "cn_def": "預算的"
  },
  "high-end": {
    "pos": "adj.",
    "en_def": "expensive and of high quality",
    "cn_def": "高檔的"
  },
  "spin-off": {
    "pos": "n.",
    "en_def": "a new company created from part of an older one",
    "cn_def": "分拆出來的公司"
  },
  "liquidity": {
    "pos": "n.",
    "en_def": "having money available to spend quickly",
    "cn_def": "流動性；資金周轉"
  },
  "coupon": {
    "pos": "n.",
    "en_def": "a piece of paper or code that lets you pay less",
    "cn_def": "優惠券"
  },
  "accounting": {
    "pos": "n.",
    "en_def": "the job of keeping and checking money records",
    "cn_def": "會計"
  },
  "bargaining": {
    "pos": "n.",
    "en_def": "discussing to reach an agreement about price or pay",
    "cn_def": "談判；議價"
  },
  "know-how": {
    "pos": "n.",
    "en_def": "practical knowledge and skill",
    "cn_def": "專業技術；訣竅"
  },
  "devaluation": {
    "pos": "n.",
    "en_def": "a fall in the value of a country's money",
    "cn_def": "貨幣貶值"
  },
  "fundraising": {
    "pos": "n.",
    "en_def": "collecting money for a cause or project",
    "cn_def": "募款"
  },
  "stock market": {
    "pos": "n.phr.",
    "en_def": "the place where shares in companies are bought and sold",
    "cn_def": "股票市場"
  },
  "shopping cart": {
    "pos": "n.phr.",
    "en_def": "a list of items you plan to buy on a website",
    "cn_def": "購物車"
  },
  "free market": {
    "pos": "n.phr.",
    "en_def": "an economy where prices are set by buyers and sellers, not the government",
    "cn_def": "自由市場"
  },
  "bear market": {
    "pos": "n.phr.",
    "en_def": "a time when share prices are falling",
    "cn_def": "空頭市場"
  },
  "free shipping": {
    "pos": "n.phr.",
    "en_def": "delivery without any charge",
    "cn_def": "免運費"
  },
  "limited company": {
    "pos": "n.phr.",
    "en_def": "a company whose owners only lose what they invested if it fails",
    "cn_def": "有限公司"
  },
  "ad campaign": {
    "pos": "n.phr.",
    "en_def": "a planned series of adverts for one product",
    "cn_def": "廣告活動"
  },
  "online shopping": {
    "pos": "n.phr.",
    "en_def": "buying things on the internet",
    "cn_def": "網路購物"
  },
  "business owner": {
    "pos": "n.phr.",
    "en_def": "a person who owns a company or shop",
    "cn_def": "企業主；老闆"
  },
  "ally": {
    "pos": "n.",
    "en_def": "a person or group that supports you",
    "cn_def": "盟友"
  },
  "rip-off": {
    "pos": "n.",
    "en_def": "something that costs far too much",
    "cn_def": "敲竹槓；坑人的東西"
  },
  "headquarters": {
    "pos": "n.",
    "en_def": "the main office of a large company",
    "cn_def": "總部"
  },
  "exchange rate": {
    "pos": "n.phr.",
    "en_def": "the value of one currency compared with another",
    "cn_def": "匯率"
  },
  "email marketing": {
    "pos": "n.phr.",
    "en_def": "sending adverts and offers to customers by email",
    "cn_def": "電子郵件行銷"
  },
  "lump sum": {
    "pos": "n.phr.",
    "en_def": "a large amount of money paid at one time",
    "cn_def": "一次付清的款項"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard",
    "cn_def": "激勵"
  },
  "headhunt": {
    "pos": "v.",
    "en_def": "to find and offer a job to a skilled person from another company",
    "cn_def": "挖角"
  },
  "inflate": {
    "pos": "v.",
    "en_def": "to make prices or numbers higher than they should be",
    "cn_def": "抬高；灌水"
  },
  "goodwill": {
    "pos": "n.",
    "en_def": "friendly feelings toward a business",
    "cn_def": "商譽；善意"
  },
  "surcharge": {
    "pos": "n.",
    "en_def": "an extra amount added to the usual price",
    "cn_def": "附加費"
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
  "fire": {
    "pos": "v.",
    "en_def": "to make someone leave their job",
    "cn_def": "開除；解雇"
  },
  "instalment": {
    "pos": "n.",
    "en_def": "one of several payments for something",
    "cn_def": "分期付款"
  },
  "boss": {
    "pos": "n.",
    "en_def": "the person who is in charge of you at work",
    "cn_def": "老闆；上司"
  },
  "backing": {
    "pos": "n.",
    "en_def": "help or support, often money",
    "cn_def": "支持；資金援助"
  },
  "business plan": {
    "pos": "n.phr.",
    "en_def": "a written plan of how a new business will work and make money",
    "cn_def": "營運計畫書"
  },
  "loyalty card": {
    "pos": "n.phr.",
    "en_def": "a card that gives regular customers rewards",
    "cn_def": "集點卡；會員卡"
  },
  "after-sales service": {
    "pos": "n.phr.",
    "en_def": "help a company gives after you buy something",
    "cn_def": "售後服務"
  },
  "return policy": {
    "pos": "n.phr.",
    "en_def": "a shop's rules about taking back goods",
    "cn_def": "退貨政策"
  },
  "click-through rate": {
    "pos": "n.phr.",
    "en_def": "the percentage of people who click on an online advert",
    "cn_def": "點擊率"
  },
  "forward-thinking": {
    "pos": "adj.",
    "en_def": "planning for the future with new ideas",
    "cn_def": "有遠見的"
  },
  "brand-new": {
    "pos": "adj.",
    "en_def": "completely new and not used",
    "cn_def": "全新的"
  },
  "capital-intensive": {
    "pos": "adj.",
    "en_def": "needing a lot of money for machines and buildings",
    "cn_def": "資本密集的"
  },
  "affiliation": {
    "pos": "n.",
    "en_def": "an official connection with a group or company",
    "cn_def": "隸屬關係"
  },
  "tender": {
    "pos": "n.",
    "en_def": "a formal offer to do work at a stated price",
    "cn_def": "投標"
  },
  "prosperous": {
    "pos": "adj.",
    "en_def": "rich and successful",
    "cn_def": "繁榮的；富裕的"
  },
  "seasoned": {
    "pos": "adj.",
    "en_def": "having a lot of experience",
    "cn_def": "經驗豐富的"
  },
  "cutthroat": {
    "pos": "adj.",
    "en_def": "very fierce and without kindness",
    "cn_def": "割喉的；激烈的"
  },
  "tax return": {
    "pos": "n.phr.",
    "en_def": "a form you send to the government about your income",
    "cn_def": "報稅單"
  },
  "developing country": {
    "pos": "n.phr.",
    "en_def": "a poorer country that is building up its industry",
    "cn_def": "開發中國家"
  },
  "job interview": {
    "pos": "n.phr.",
    "en_def": "a meeting where an employer asks questions to choose a worker",
    "cn_def": "工作面試"
  },
  "economic crisis": {
    "pos": "n.phr.",
    "en_def": "a time when an economy suddenly becomes very weak",
    "cn_def": "經濟危機"
  },
  "window shopping": {
    "pos": "n.phr.",
    "en_def": "looking at goods in shops without buying",
    "cn_def": "逛街看櫥窗"
  },
  "invoice": {
    "pos": "n.",
    "en_def": "a document asking a customer to pay for goods or work",
    "cn_def": "請款單；發票"
  },
  "cartel": {
    "pos": "n.",
    "en_def": "a group of companies that agree to keep prices high",
    "cn_def": "卡特爾；聯合壟斷組織"
  },
  "showroom": {
    "pos": "n.",
    "en_def": "a room where goods like cars are shown to buyers",
    "cn_def": "展示間"
  },
  "windfall": {
    "pos": "n.",
    "en_def": "an unexpected amount of money",
    "cn_def": "意外之財"
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person or company you work with in business",
    "cn_def": "合夥人；合作夥伴"
  },
  "multinational": {
    "pos": "n.",
    "en_def": "a large company that works in many countries",
    "cn_def": "跨國公司"
  },
  "bankruptcy": {
    "pos": "n.",
    "en_def": "the state of being unable to pay debts",
    "cn_def": "破產"
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
  "credit card": {
    "pos": "n.phr.",
    "en_def": "a plastic card used to buy things and pay later",
    "cn_def": "信用卡"
  },
  "angel investor": {
    "pos": "n.phr.",
    "en_def": "a rich person who gives money to a new business early",
    "cn_def": "天使投資人"
  },
  "consumer behaviour": {
    "pos": "n.phr.",
    "en_def": "the way people choose and buy things",
    "cn_def": "消費者行為"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a paper showing that you have paid for something",
    "cn_def": "收據"
  },
  "analyst": {
    "pos": "n.",
    "en_def": "a person who studies data and gives advice",
    "cn_def": "分析師"
  },
  "sales target": {
    "pos": "n.phr.",
    "en_def": "the amount a seller is expected to sell",
    "cn_def": "銷售目標"
  },
  "business model": {
    "pos": "n.phr.",
    "en_def": "the way a company plans to make money",
    "cn_def": "商業模式"
  },
  "emerging market": {
    "pos": "n.phr.",
    "en_def": "a country whose economy is growing and developing fast",
    "cn_def": "新興市場"
  }
};

const EXTRA_GLOSSES = {};
