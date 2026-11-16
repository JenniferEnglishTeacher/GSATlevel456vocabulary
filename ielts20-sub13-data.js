// Topic 20 Subunit 13 Quiz Data: Academic Words 學術單字 6 (best-selling – marginally)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T20 S13 - Academic Words 學術單字 6 (best-selling – marginally)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "best-selling",
    "pos": "adj.",
    "cn_def": "最暢銷的",
    "en_def": "sold in very large numbers",
    "sentence": "The author's {{BLANK}} book about saving money has been translated into twenty languages, so she is now famous worldwide.",
    "cn": "這位作者關於存錢的最暢銷書籍已被翻譯成二十種語言，所以她現在全球知名。"
  },
  {
    "word": "eye-catching",
    "pos": "adj.",
    "cn_def": "吸睛的",
    "en_def": "attracting attention easily",
    "sentence": "The shop's {{BLANK}} window display made people stop and look, and many of them came inside.",
    "cn": "這家店吸睛的櫥窗擺設讓人停下來觀看，而許多人走了進來。"
  },
  {
    "word": "user-friendly",
    "pos": "adj.",
    "cn_def": "容易使用的",
    "en_def": "easy to use",
    "sentence": "The ticket machine is {{BLANK}}, so even young children and tourists can buy tickets without help.",
    "cn": "這台售票機很容易使用，所以即使小孩和觀光客也能自行買票。"
  },
  {
    "word": "cost-conscious",
    "pos": "adj.",
    "cn_def": "注重成本的",
    "en_def": "careful about spending money",
    "sentence": "{{BLANK}} shoppers compare prices online before they buy anything, so shops must offer really good deals.",
    "cn": "注重成本的消費者在購買前會先上網比價，所以商店必須提供好的優惠。"
  },
  {
    "word": "risk-averse",
    "pos": "adj.",
    "cn_def": "規避風險的",
    "en_def": "not wanting to take risks",
    "sentence": "My parents are {{BLANK}} investors, so they keep most of their money in the bank instead of buying shares.",
    "cn": "我爸媽是規避風險的投資人，所以他們把大部分的錢存在銀行而不是買股票。"
  },
  {
    "word": "forward-thinking",
    "pos": "adj.",
    "cn_def": "有遠見的",
    "en_def": "planning for the future with new ideas",
    "sentence": "The {{BLANK}} mayor invested in electric buses early, and now the city has some of the cleanest air in the country.",
    "cn": "那位有遠見的市長很早就投資電動公車，而現在這座城市擁有全國數一數二乾淨的空氣。"
  },
  {
    "word": "high-end",
    "pos": "adj.",
    "cn_def": "高檔的",
    "en_def": "expensive and of high quality",
    "sentence": "The {{BLANK}} restaurant charges a lot for each dish, but it uses only the best local ingredients.",
    "cn": "這家高檔的餐廳每道菜都收費很高，但它只使用最好的在地食材。"
  },
  {
    "word": "low-cost",
    "pos": "adj.",
    "cn_def": "低成本的；廉價的",
    "en_def": "cheap",
    "sentence": "{{BLANK}} airlines have made travel much cheaper, but passengers must pay extra for food and bags.",
    "cn": "廉價航空讓旅行變得更便宜，但乘客必須額外支付餐點和行李費用。"
  },
  {
    "word": "mass-market",
    "pos": "adj.",
    "cn_def": "大眾市場的",
    "en_def": "made for and sold to very many people",
    "sentence": "The company makes {{BLANK}} shoes in huge numbers, so it can keep prices low for ordinary families.",
    "cn": "這家公司大量生產大眾市場的鞋子，所以能為一般家庭維持低價。"
  },
  {
    "word": "in-house",
    "pos": "adj.",
    "cn_def": "公司內部的",
    "en_def": "done by a company's own staff",
    "sentence": "The firm has an {{BLANK}} design team, so it does not need to pay outside agencies for its adverts.",
    "cn": "這家公司有內部的設計團隊，所以不需要付錢請外部廣告公司做廣告。"
  },
  {
    "word": "off-the-shelf",
    "pos": "adj.",
    "cn_def": "現成的",
    "en_def": "ready-made and available to buy",
    "sentence": "The shop used {{BLANK}} software for its website, because building its own system would cost too much.",
    "cn": "這家店的網站用了現成的軟體，因為自己建置系統的成本太高。"
  },
  {
    "word": "world-class",
    "pos": "adj.",
    "cn_def": "世界級的",
    "en_def": "among the best in the world",
    "sentence": "The city wants to build a {{BLANK}} convention centre, so it can hold big international trade fairs.",
    "cn": "這座城市想建造一座世界級的會展中心，以便舉辦大型國際貿易展。"
  },
  {
    "word": "top-down",
    "pos": "adj.",
    "cn_def": "由上而下的",
    "en_def": "controlled by leaders at the top",
    "sentence": "The company used a {{BLANK}} style, so workers rarely shared ideas, and many talented people left.",
    "cn": "這家公司採用由上而下的管理風格，所以員工很少分享想法，而許多人才離開了。"
  },
  {
    "word": "bottom-up",
    "pos": "adj.",
    "cn_def": "由下而上的",
    "en_def": "starting from ordinary workers or people",
    "sentence": "The school took a {{BLANK}} approach, and students suggested most of the changes to the cafeteria menu.",
    "cn": "學校採取由下而上的方式，而學生提出了大部分餐廳菜單的改變。"
  },
  {
    "word": "hands-off",
    "pos": "adj.",
    "cn_def": "放手的；不干涉的",
    "en_def": "not getting involved in details",
    "sentence": "Our boss has a {{BLANK}} style, so we can decide how to do our work as long as we meet deadlines.",
    "cn": "我們老闆的風格是放手的，所以只要我們準時完成，就可以自己決定怎麼做事。"
  },
  {
    "word": "well-established",
    "pos": "adj.",
    "cn_def": "歷史悠久且穩固的",
    "en_def": "existing for a long time and respected",
    "sentence": "The {{BLANK}} bakery has served the town for sixty years, but it now also sells cakes online.",
    "cn": "這家歷史悠久的麵包店已為鎮上服務六十年，但它現在也在網路上賣蛋糕。"
  },
  {
    "word": "time-sensitive",
    "pos": "adj.",
    "cn_def": "有時效性的",
    "en_def": "needing to be done quickly",
    "sentence": "This offer is {{BLANK}}, so if you do not reply by Friday, the discount will no longer be available.",
    "cn": "這個優惠有時效性，所以如果你週五前沒有回覆，折扣就不再適用。"
  },
  {
    "word": "financially",
    "pos": "adv.",
    "cn_def": "在財務上",
    "en_def": "in a way related to money",
    "sentence": "Many young adults want to be {{BLANK}} independent, so they take part-time jobs while studying.",
    "cn": "許多年輕人想要在財務上獨立，所以他們在求學期間兼職打工。"
  },
  {
    "word": "economically",
    "pos": "adv.",
    "cn_def": "在經濟上",
    "en_def": "in a way related to the economy",
    "sentence": "The new port is {{BLANK}} important for the region, because it will bring jobs and trade to small towns.",
    "cn": "這座新港口在經濟上對地區很重要，因為它會為小鎮帶來工作和貿易。"
  },
  {
    "word": "profitably",
    "pos": "adv.",
    "cn_def": "有利潤地",
    "en_def": "in a way that makes a profit",
    "sentence": "The farm now runs {{BLANK}} because it sells directly to customers, so it no longer depends on middlemen.",
    "cn": "這座農場現在有利潤地經營，因為它直接賣給顧客，所以不再依賴中間商。"
  },
  {
    "word": "competitively",
    "pos": "adv.",
    "cn_def": "具競爭力地",
    "en_def": "at a price similar to or lower than rivals",
    "sentence": "The new phone is {{BLANK}} priced, so it may attract buyers who usually choose more famous brands.",
    "cn": "這款新手機的定價具競爭力，所以可能會吸引通常選擇更知名品牌的買家。"
  },
  {
    "word": "strategically",
    "pos": "adv.",
    "cn_def": "策略性地",
    "en_def": "in a carefully planned way",
    "sentence": "The shop is {{BLANK}} located near two schools, so it is busy every afternoon when classes finish.",
    "cn": "這家店策略性地設在兩所學校附近，所以每天下午放學時都很忙。"
  },
  {
    "word": "internationally",
    "pos": "adv.",
    "cn_def": "在國際上",
    "en_def": "in many countries",
    "sentence": "The Taiwanese bicycle brand is now sold {{BLANK}}, and it sponsors races in Europe and America.",
    "cn": "這個台灣自行車品牌現在在國際上銷售，而且它在歐美贊助賽事。"
  },
  {
    "word": "locally",
    "pos": "adv.",
    "cn_def": "在當地",
    "en_def": "in the nearby area",
    "sentence": "The restaurant buys its vegetables {{BLANK}}, so the food is fresher and farmers earn more money.",
    "cn": "這家餐廳在當地採購蔬菜，所以食物更新鮮，農民也賺得更多。"
  },
  {
    "word": "marginally",
    "pos": "adv.",
    "cn_def": "稍微地",
    "en_def": "only a little",
    "sentence": "Prices rose only {{BLANK}} this year, but many families still felt that life was getting harder.",
    "cn": "今年物價只稍微上漲，但許多家庭仍然覺得生活越來越辛苦。"
  }
];

const MCQS = [
  {
    "q": "The author's _____ book about saving money has been translated into twenty languages, so she is now famous worldwide.",
    "options": [
      "excess",
      "best-selling",
      "wealthy",
      "swift"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The shop's _____ window display made people stop and look, and many of them came inside.",
    "options": [
      "eye-catching",
      "budgetary",
      "indebted",
      "high-profile"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The ticket machine is _____, so even young children and tourists can buy tickets without help.",
    "options": [
      "prosperous",
      "swift",
      "payable",
      "user-friendly"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "_____ shoppers compare prices online before they buy anything, so shops must offer really good deals.",
    "options": [
      "family-run",
      "diminishing",
      "cost-conscious",
      "flagship"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "My parents are _____ investors, so they keep most of their money in the bank instead of buying shares.",
    "options": [
      "self-made",
      "economical",
      "disruptive",
      "risk-averse"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The _____ mayor invested in electric buses early, and now the city has some of the cleanest air in the country.",
    "options": [
      "economical",
      "entrepreneurial",
      "forward-thinking",
      "wealthy"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The _____ restaurant charges a lot for each dish, but it uses only the best local ingredients.",
    "options": [
      "capital-intensive",
      "high-end",
      "flagship",
      "customer-focused"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "_____ airlines have made travel much cheaper, but passengers must pay extra for food and bags.",
    "options": [
      "low-cost",
      "excess",
      "high-profile",
      "economical"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The company makes _____ shoes in huge numbers, so it can keep prices low for ordinary families.",
    "options": [
      "solvent",
      "marketable",
      "overambitious",
      "mass-market"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The firm has an _____ design team, so it does not need to pay outside agencies for its adverts.",
    "options": [
      "in-house",
      "saturated",
      "nonprofit",
      "unprofitable"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The shop used _____ software for its website, because building its own system would cost too much.",
    "options": [
      "entrepreneurial",
      "seasoned",
      "off-the-shelf",
      "nonprofit"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The city wants to build a _____ convention centre, so it can hold big international trade fairs.",
    "options": [
      "incompetent",
      "world-class",
      "cutthroat",
      "early-stage"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The company used a _____ style, so workers rarely shared ideas, and many talented people left.",
    "options": [
      "brand-new",
      "negotiable",
      "top-down",
      "sought-after"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The school took a _____ approach, and students suggested most of the changes to the cafeteria menu.",
    "options": [
      "diminishing",
      "payable",
      "promotional",
      "bottom-up"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Our boss has a _____ style, so we can decide how to do our work as long as we meet deadlines.",
    "options": [
      "incumbent",
      "hands-off",
      "creditworthy",
      "well-paid"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The _____ bakery has served the town for sixty years, but it now also sells cakes online.",
    "options": [
      "well-established",
      "capital-intensive",
      "flagship",
      "budgetary"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "This offer is _____, so if you do not reply by Friday, the discount will no longer be available.",
    "options": [
      "nonprofit",
      "time-sensitive",
      "contractual",
      "thriving"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Many young adults want to be _____ independent, so they take part-time jobs while studying.",
    "options": [
      "financially",
      "upfront",
      "automatically",
      "ethically"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new port is _____ important for the region, because it will bring jobs and trade to small towns.",
    "options": [
      "individually",
      "automatically",
      "ethically",
      "economically"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The farm now runs _____ because it sells directly to customers, so it no longer depends on middlemen.",
    "options": [
      "successfully",
      "jointly",
      "profitably",
      "individually"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new phone is _____ priced, so it may attract buyers who usually choose more famous brands.",
    "options": [
      "competitively",
      "aggressively",
      "commercially",
      "successfully"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The shop is _____ located near two schools, so it is busy every afternoon when classes finish.",
    "options": [
      "individually",
      "upfront",
      "ethically",
      "strategically"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The Taiwanese bicycle brand is now sold _____, and it sponsors races in Europe and America.",
    "options": [
      "responsibly",
      "currently",
      "internationally",
      "aggressively"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The restaurant buys its vegetables _____, so the food is fresher and farmers earn more money.",
    "options": [
      "individually",
      "locally",
      "successfully",
      "privately"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Prices rose only _____ this year, but many families still felt that life was getting harder.",
    "options": [
      "privately",
      "upfront",
      "commercially",
      "marginally"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "best-selling": {
    "pos": "adj.",
    "en_def": "sold in very large numbers",
    "cn_def": "最暢銷的"
  },
  "eye-catching": {
    "pos": "adj.",
    "en_def": "attracting attention easily",
    "cn_def": "吸睛的"
  },
  "user-friendly": {
    "pos": "adj.",
    "en_def": "easy to use",
    "cn_def": "容易使用的"
  },
  "cost-conscious": {
    "pos": "adj.",
    "en_def": "careful about spending money",
    "cn_def": "注重成本的"
  },
  "risk-averse": {
    "pos": "adj.",
    "en_def": "not wanting to take risks",
    "cn_def": "規避風險的"
  },
  "forward-thinking": {
    "pos": "adj.",
    "en_def": "planning for the future with new ideas",
    "cn_def": "有遠見的"
  },
  "high-end": {
    "pos": "adj.",
    "en_def": "expensive and of high quality",
    "cn_def": "高檔的"
  },
  "low-cost": {
    "pos": "adj.",
    "en_def": "cheap",
    "cn_def": "低成本的；廉價的"
  },
  "mass-market": {
    "pos": "adj.",
    "en_def": "made for and sold to very many people",
    "cn_def": "大眾市場的"
  },
  "in-house": {
    "pos": "adj.",
    "en_def": "done by a company's own staff",
    "cn_def": "公司內部的"
  },
  "off-the-shelf": {
    "pos": "adj.",
    "en_def": "ready-made and available to buy",
    "cn_def": "現成的"
  },
  "world-class": {
    "pos": "adj.",
    "en_def": "among the best in the world",
    "cn_def": "世界級的"
  },
  "top-down": {
    "pos": "adj.",
    "en_def": "controlled by leaders at the top",
    "cn_def": "由上而下的"
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
  "well-established": {
    "pos": "adj.",
    "en_def": "existing for a long time and respected",
    "cn_def": "歷史悠久且穩固的"
  },
  "time-sensitive": {
    "pos": "adj.",
    "en_def": "needing to be done quickly",
    "cn_def": "有時效性的"
  },
  "financially": {
    "pos": "adv.",
    "en_def": "in a way related to money",
    "cn_def": "在財務上"
  },
  "economically": {
    "pos": "adv.",
    "en_def": "in a way related to the economy",
    "cn_def": "在經濟上"
  },
  "profitably": {
    "pos": "adv.",
    "en_def": "in a way that makes a profit",
    "cn_def": "有利潤地"
  },
  "competitively": {
    "pos": "adv.",
    "en_def": "at a price similar to or lower than rivals",
    "cn_def": "具競爭力地"
  },
  "strategically": {
    "pos": "adv.",
    "en_def": "in a carefully planned way",
    "cn_def": "策略性地"
  },
  "internationally": {
    "pos": "adv.",
    "en_def": "in many countries",
    "cn_def": "在國際上"
  },
  "locally": {
    "pos": "adv.",
    "en_def": "in the nearby area",
    "cn_def": "在當地"
  },
  "marginally": {
    "pos": "adv.",
    "en_def": "only a little",
    "cn_def": "稍微地"
  },
  "excess": {
    "pos": "adj.",
    "en_def": "more than is needed",
    "cn_def": "過剩的；多餘的"
  },
  "wealthy": {
    "pos": "adj.",
    "en_def": "having a lot of money",
    "cn_def": "富有的"
  },
  "swift": {
    "pos": "adj.",
    "en_def": "happening quickly",
    "cn_def": "迅速的"
  },
  "budgetary": {
    "pos": "adj.",
    "en_def": "relating to a budget",
    "cn_def": "預算的"
  },
  "indebted": {
    "pos": "adj.",
    "en_def": "owing money",
    "cn_def": "負債的"
  },
  "high-profile": {
    "pos": "adj.",
    "en_def": "well known and getting a lot of attention",
    "cn_def": "高知名度的"
  },
  "prosperous": {
    "pos": "adj.",
    "en_def": "rich and successful",
    "cn_def": "繁榮的；富裕的"
  },
  "payable": {
    "pos": "adj.",
    "en_def": "that must be paid",
    "cn_def": "應付的"
  },
  "family-run": {
    "pos": "adj.",
    "en_def": "owned and managed by one family",
    "cn_def": "家族經營的"
  },
  "diminishing": {
    "pos": "adj.",
    "en_def": "becoming smaller or less",
    "cn_def": "遞減的"
  },
  "flagship": {
    "pos": "adj.",
    "en_def": "the most important of a group of products or shops",
    "cn_def": "旗艦的"
  },
  "self-made": {
    "pos": "adj.",
    "en_def": "rich or successful through your own work",
    "cn_def": "白手起家的"
  },
  "economical": {
    "pos": "adj.",
    "en_def": "not using much money or fuel",
    "cn_def": "節省的；經濟實惠的"
  },
  "disruptive": {
    "pos": "adj.",
    "en_def": "changing an industry by doing things in a new way",
    "cn_def": "顛覆性的"
  },
  "entrepreneurial": {
    "pos": "adj.",
    "en_def": "willing to take risks to start new businesses",
    "cn_def": "有創業精神的"
  },
  "capital-intensive": {
    "pos": "adj.",
    "en_def": "needing a lot of money for machines and buildings",
    "cn_def": "資本密集的"
  },
  "customer-focused": {
    "pos": "adj.",
    "en_def": "paying close attention to what customers need",
    "cn_def": "以顧客為中心的"
  },
  "solvent": {
    "pos": "adj.",
    "en_def": "having enough money to pay all debts",
    "cn_def": "有償債能力的"
  },
  "marketable": {
    "pos": "adj.",
    "en_def": "easy to sell, or attractive to employers",
    "cn_def": "有市場的；好賣的"
  },
  "overambitious": {
    "pos": "adj.",
    "en_def": "trying to do more than is possible",
    "cn_def": "野心過大的"
  },
  "saturated": {
    "pos": "adj.",
    "en_def": "having so many products that no more can be sold",
    "cn_def": "飽和的"
  },
  "nonprofit": {
    "pos": "adj.",
    "en_def": "not working to make money for owners",
    "cn_def": "非營利的"
  },
  "unprofitable": {
    "pos": "adj.",
    "en_def": "not making a profit",
    "cn_def": "無利可圖的"
  },
  "seasoned": {
    "pos": "adj.",
    "en_def": "having a lot of experience",
    "cn_def": "經驗豐富的"
  },
  "incompetent": {
    "pos": "adj.",
    "en_def": "not able to do a job well",
    "cn_def": "無能的；不稱職的"
  },
  "cutthroat": {
    "pos": "adj.",
    "en_def": "very fierce and without kindness",
    "cn_def": "割喉的；激烈的"
  },
  "early-stage": {
    "pos": "adj.",
    "en_def": "at the beginning of development",
    "cn_def": "早期階段的"
  },
  "brand-new": {
    "pos": "adj.",
    "en_def": "completely new and not used",
    "cn_def": "全新的"
  },
  "negotiable": {
    "pos": "adj.",
    "en_def": "able to be changed through discussion",
    "cn_def": "可議的"
  },
  "sought-after": {
    "pos": "adj.",
    "en_def": "wanted by many people",
    "cn_def": "搶手的"
  },
  "promotional": {
    "pos": "adj.",
    "en_def": "made to advertise a product",
    "cn_def": "宣傳的"
  },
  "incumbent": {
    "pos": "adj.",
    "en_def": "currently holding a position or leading a market",
    "cn_def": "現任的；在位的"
  },
  "creditworthy": {
    "pos": "adj.",
    "en_def": "trusted to pay back money",
    "cn_def": "信用良好的"
  },
  "well-paid": {
    "pos": "adj.",
    "en_def": "earning a lot of money",
    "cn_def": "高薪的"
  },
  "contractual": {
    "pos": "adj.",
    "en_def": "relating to a contract",
    "cn_def": "合約上的"
  },
  "thriving": {
    "pos": "adj.",
    "en_def": "growing and doing very well",
    "cn_def": "蓬勃發展的"
  },
  "upfront": {
    "pos": "adv.",
    "en_def": "paid or done before the work starts",
    "cn_def": "預先地"
  },
  "automatically": {
    "pos": "adv.",
    "en_def": "by itself, without a person doing it",
    "cn_def": "自動地"
  },
  "ethically": {
    "pos": "adv.",
    "en_def": "in a morally right way",
    "cn_def": "合乎道德地"
  },
  "individually": {
    "pos": "adv.",
    "en_def": "separately, one by one",
    "cn_def": "個別地"
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
  "aggressively": {
    "pos": "adv.",
    "en_def": "in a strong and determined way",
    "cn_def": "積極地；強勢地"
  },
  "commercially": {
    "pos": "adv.",
    "en_def": "in a way that makes money",
    "cn_def": "在商業上"
  },
  "responsibly": {
    "pos": "adv.",
    "en_def": "in a careful and sensible way",
    "cn_def": "負責任地"
  },
  "currently": {
    "pos": "adv.",
    "en_def": "at the present time",
    "cn_def": "目前"
  },
  "privately": {
    "pos": "adv.",
    "en_def": "owned by a person, not the government",
    "cn_def": "私人地"
  }
};

const EXTRA_GLOSSES = {};
