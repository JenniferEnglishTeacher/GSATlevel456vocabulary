// Topic 21 Subunit 10 Quiz Data: Academic Words 學術單字 3 (fallback – multiplier)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S10 - Academic Words 學術單字 3 (fallback – multiplier)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fallback",
    "pos": "n.",
    "cn_def": "備案",
    "en_def": "a plan or option kept for when others fail",
    "sentence": "The hospital uses diesel generators as a {{BLANK}}, so it can keep operating even during a long power cut.",
    "cn": "醫院以柴油發電機作為備案，所以即使長時間停電也能持續運作。"
  },
  {
    "word": "fluctuating",
    "pos": "adj.",
    "cn_def": "波動的",
    "en_def": "rising and falling often",
    "sentence": "{{BLANK}} oil prices make it hard for airlines to plan, so they often buy fuel months in advance.",
    "cn": "波動的油價讓航空公司難以規劃，所以他們常提前數月購買燃料。"
  },
  {
    "word": "forecasting",
    "pos": "n.",
    "cn_def": "預測",
    "en_def": "predicting what will happen in the future",
    "sentence": "Better weather {{BLANK}} helps grid operators prepare, because they know when solar and wind power will be low.",
    "cn": "更好的天氣預測幫助電網營運者做準備，因為他們知道太陽能和風力何時會偏低。"
  },
  {
    "word": "foreseeable",
    "pos": "adj.",
    "cn_def": "可預見的",
    "en_def": "able to be predicted",
    "sentence": "Coal will still be used in the {{BLANK}} future, but its share of electricity is expected to fall steadily.",
    "cn": "在可預見的未來煤炭仍會被使用，但它在電力中的占比預計將穩定下降。"
  },
  {
    "word": "fragmentary",
    "pos": "adj.",
    "cn_def": "零碎的",
    "en_def": "incomplete and in small parts",
    "sentence": "The data on energy use in villages is {{BLANK}}, so researchers had to visit homes to collect better information.",
    "cn": "村莊能源使用的資料很零碎，所以研究人員必須親自家訪以收集更好的資訊。"
  },
  {
    "word": "fundamentals",
    "pos": "n.",
    "cn_def": "基本原理；基礎",
    "en_def": "the basic and most important parts of something",
    "sentence": "Our teacher explained the {{BLANK}} of electricity first, and then we built simple circuits with batteries and bulbs.",
    "cn": "老師先解釋了電的基本原理，然後我們用電池和燈泡做了簡單的電路。"
  },
  {
    "word": "geopolitics",
    "pos": "n.",
    "cn_def": "地緣政治",
    "en_def": "how geography affects international politics",
    "sentence": "Energy and {{BLANK}} are closely linked, because countries that control oil and gas can put pressure on their neighbours.",
    "cn": "能源和地緣政治緊密相關，因為控制石油和天然氣的國家可以對鄰國施壓。"
  },
  {
    "word": "globalised",
    "pos": "adj.",
    "cn_def": "全球化的",
    "en_def": "connected across the whole world",
    "sentence": "In a {{BLANK}} economy, a war far away can raise petrol prices at home, so no country is completely safe.",
    "cn": "在全球化的經濟中，遠方的戰爭也能讓國內油價上漲，所以沒有國家是完全安全的。"
  },
  {
    "word": "immediacy",
    "pos": "n.",
    "cn_def": "迫切性；即時性",
    "en_def": "the quality of being urgent and happening now",
    "sentence": "The {{BLANK}} of the energy crisis forced leaders to act quickly, but some of their decisions were not well planned.",
    "cn": "能源危機的迫切性迫使領導人迅速行動，但他們有些決定並未經過周詳規劃。"
  },
  {
    "word": "inaction",
    "pos": "n.",
    "cn_def": "不作為",
    "en_def": "failure to do anything",
    "sentence": "Many young people are angry about government {{BLANK}} on energy, because they will live with the results the longest.",
    "cn": "許多年輕人對政府在能源議題上的不作為感到憤怒，因為他們將承受後果最久。"
  },
  {
    "word": "incapable",
    "pos": "adj.",
    "cn_def": "無法的；沒有能力的",
    "en_def": "not able to do something",
    "sentence": "The old grid is {{BLANK}} of handling so much solar power, so engineers must upgrade it soon.",
    "cn": "舊電網無法處理這麼多太陽能電力，所以工程師必須盡快升級它。"
  },
  {
    "word": "independence",
    "pos": "n.",
    "cn_def": "獨立；自主",
    "en_def": "freedom from control or help by others",
    "sentence": "Our village wants greater {{BLANK}} from the national grid, so we are building a small solar and battery system.",
    "cn": "我們村莊希望更獨立於國家電網，所以我們正在建造小型太陽能與電池系統。"
  },
  {
    "word": "industrialise",
    "pos": "v.",
    "cn_def": "工業化",
    "en_def": "to develop industries in a country or area",
    "sentence": "As poorer countries {{BLANK}}, their energy use rises quickly, so they need affordable and clean power sources.",
    "cn": "隨著較貧窮的國家工業化，它們的能源使用量迅速上升，所以需要便宜又乾淨的電力來源。"
  },
  {
    "word": "inelastic",
    "pos": "adj.",
    "cn_def": "缺乏彈性的",
    "en_def": "not changing much when price changes",
    "sentence": "Demand for electricity is quite {{BLANK}}, because people still need lights and fridges even when prices go up.",
    "cn": "電力需求相當缺乏彈性，因為即使價格上漲，人們仍需要電燈和冰箱。"
  },
  {
    "word": "infeasible",
    "pos": "adj.",
    "cn_def": "不可行的",
    "en_def": "not possible to do in practice",
    "sentence": "Building a dam in the earthquake zone was judged {{BLANK}}, so the engineers chose a different valley instead.",
    "cn": "在地震帶興建水壩被判定為不可行，所以工程師改選了另一個山谷。"
  },
  {
    "word": "inflexible",
    "pos": "adj.",
    "cn_def": "缺乏彈性的；僵化的",
    "en_def": "unable to change easily",
    "sentence": "Nuclear plants are fairly {{BLANK}}, because they cannot quickly increase or decrease their power to match demand.",
    "cn": "核電廠相當缺乏彈性，因為它們無法迅速增減發電量來配合需求。"
  },
  {
    "word": "insecurity",
    "pos": "n.",
    "cn_def": "不安全；不穩定",
    "en_def": "a lack of safety or certainty",
    "sentence": "Energy {{BLANK}} grew when the shipping route was blocked, so the government asked people to save electricity.",
    "cn": "航道被封鎖時能源不安全感升高，所以政府呼籲民眾節約用電。"
  },
  {
    "word": "insufficiency",
    "pos": "n.",
    "cn_def": "不足",
    "en_def": "a lack of enough of something",
    "sentence": "An {{BLANK}} of rain this spring meant the reservoirs were low, so water had to be rationed in some cities.",
    "cn": "今年春天雨量不足導致水庫水位偏低，所以一些城市必須限水。"
  },
  {
    "word": "interconnection",
    "pos": "n.",
    "cn_def": "互聯；相互連接",
    "en_def": "a link between two or more things",
    "sentence": "The {{BLANK}} between the two countries' grids allows them to share power, so a shortage in one can be covered by the other.",
    "cn": "兩國電網之間的互聯讓它們能共享電力，所以一方短缺時可由另一方補足。"
  },
  {
    "word": "long-range",
    "pos": "adj.",
    "cn_def": "長程的；長期的",
    "en_def": "covering a long distance or period",
    "sentence": "{{BLANK}} electric buses can now travel 400 kilometres on one charge, so they are suitable for trips between cities.",
    "cn": "長程電動巴士現在充一次電可以行駛四百公里，所以適合城市間的行程。"
  },
  {
    "word": "maximisation",
    "pos": "n.",
    "cn_def": "最大化",
    "en_def": "the act of making something as large as possible",
    "sentence": "Profit {{BLANK}} was the company's main goal, so it ignored complaints about pollution from its factory.",
    "cn": "利潤最大化是這家公司的主要目標，所以它忽視了關於工廠污染的投訴。"
  },
  {
    "word": "minimisation",
    "pos": "n.",
    "cn_def": "最小化",
    "en_def": "the act of making something as small as possible",
    "sentence": "Waste {{BLANK}} is part of our school policy, so we use refillable bottles and print on both sides of paper.",
    "cn": "廢棄物最小化是我們學校政策的一部分，所以我們使用可重複裝填的水壺，並且雙面列印。"
  },
  {
    "word": "modernisation",
    "pos": "n.",
    "cn_def": "現代化",
    "en_def": "the process of making something more up to date",
    "sentence": "The {{BLANK}} of the old power station cost billions, but it now produces more electricity with less pollution.",
    "cn": "舊電廠的現代化耗資數十億，但它現在以更少污染產生更多電力。"
  },
  {
    "word": "monopolise",
    "pos": "v.",
    "cn_def": "壟斷",
    "en_def": "to have complete control of something",
    "sentence": "One company used to {{BLANK}} the electricity market, so customers had no choice and prices stayed high.",
    "cn": "過去一家公司壟斷了電力市場，所以顧客別無選擇，價格一直居高不下。"
  },
  {
    "word": "multiplier",
    "pos": "n.",
    "cn_def": "乘數；倍增因素",
    "en_def": "something that increases the effect of something else",
    "sentence": "Cheap energy acts as a {{BLANK}} for economic growth, because factories can produce more goods at lower cost.",
    "cn": "廉價能源是經濟成長的倍增因素，因為工廠能以較低成本生產更多商品。"
  }
];

const MCQS = [
  {
    "q": "The hospital uses diesel generators as a _____, so it can keep operating even during a long power cut.",
    "options": [
      "smelter",
      "inverter",
      "fallback",
      "prospecting"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "_____ oil prices make it hard for airlines to plan, so they often buy fuel months in advance.",
    "options": [
      "price-sensitive",
      "contributory",
      "conductive",
      "fluctuating"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Better weather _____ helps grid operators prepare, because they know when solar and wind power will be low.",
    "options": [
      "forecasting",
      "tailings",
      "overextraction",
      "mine"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Coal will still be used in the _____ future, but its share of electricity is expected to fall steadily.",
    "options": [
      "petrochemical",
      "foreseeable",
      "pilot",
      "irreplaceable"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The data on energy use in villages is _____, so researchers had to visit homes to collect better information.",
    "options": [
      "fragmentary",
      "resource-rich",
      "unexploited",
      "downward"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Our teacher explained the _____ of electricity first, and then we built simple circuits with batteries and bulbs.",
    "options": [
      "desirability",
      "silver",
      "fundamentals",
      "overcapacity"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Energy and _____ are closely linked, because countries that control oil and gas can put pressure on their neighbours.",
    "options": [
      "abolition",
      "rig",
      "mine",
      "geopolitics"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "In a _____ economy, a war far away can raise petrol prices at home, so no country is completely safe.",
    "options": [
      "backward",
      "globalised",
      "destabilising",
      "landlocked"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The _____ of the energy crisis forced leaders to act quickly, but some of their decisions were not well planned.",
    "options": [
      "immediacy",
      "reclamation",
      "abolition",
      "transformer"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many young people are angry about government _____ on energy, because they will live with the results the longest.",
    "options": [
      "overcapacity",
      "inaction",
      "aridity",
      "predictability"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The old grid is _____ of handling so much solar power, so engineers must upgrade it soon.",
    "options": [
      "nuclear-free",
      "long-run",
      "incapable",
      "expandable"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Our village wants greater _____ from the national grid, so we are building a small solar and battery system.",
    "options": [
      "replenishment",
      "relocation",
      "jeopardy",
      "independence"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "As poorer countries _____, their energy use rises quickly, so they need affordable and clean power sources.",
    "options": [
      "entrench",
      "nationalise",
      "industrialise",
      "downgrade"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Demand for electricity is quite _____, because people still need lights and fridges even when prices go up.",
    "options": [
      "replaceable",
      "inelastic",
      "generational",
      "landlocked"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Building a dam in the earthquake zone was judged _____, so the engineers chose a different valley instead.",
    "options": [
      "infeasible",
      "advisory",
      "tradable",
      "correlated"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Nuclear plants are fairly _____, because they cannot quickly increase or decrease their power to match demand.",
    "options": [
      "additional",
      "deteriorating",
      "electrical",
      "inflexible"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Energy _____ grew when the shipping route was blocked, so the government asked people to save electricity.",
    "options": [
      "insecurity",
      "fracking",
      "reclamation",
      "remediation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "An _____ of rain this spring meant the reservoirs were low, so water had to be rationed in some cities.",
    "options": [
      "overcapacity",
      "decarbonisation",
      "abolition",
      "insufficiency"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The _____ between the two countries' grids allows them to share power, so a shortage in one can be covered by the other.",
    "options": [
      "meltdown",
      "outsourcing",
      "interconnection",
      "refining"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "_____ electric buses can now travel 400 kilometres on one charge, so they are suitable for trips between cities.",
    "options": [
      "hydroelectric",
      "long-range",
      "distributional",
      "dwindling"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Profit _____ was the company's main goal, so it ignored complaints about pollution from its factory.",
    "options": [
      "microgrid",
      "discontinuation",
      "spillover",
      "maximisation"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Waste _____ is part of our school policy, so we use refillable bottles and print on both sides of paper.",
    "options": [
      "diamond",
      "lignite",
      "minimisation",
      "iron"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The _____ of the old power station cost billions, but it now produces more electricity with less pollution.",
    "options": [
      "watt",
      "modernisation",
      "biodiesel",
      "tailings"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "One company used to _____ the electricity market, so customers had no choice and prices stayed high.",
    "options": [
      "monopolise",
      "tighten",
      "widen",
      "downgrade"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Cheap energy acts as a _____ for economic growth, because factories can produce more goods at lower cost.",
    "options": [
      "meltdown",
      "baseload",
      "socket",
      "multiplier"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "fallback": {
    "pos": "n.",
    "en_def": "a plan or option kept for when others fail",
    "cn_def": "備案"
  },
  "fluctuating": {
    "pos": "adj.",
    "en_def": "rising and falling often",
    "cn_def": "波動的"
  },
  "forecasting": {
    "pos": "n.",
    "en_def": "predicting what will happen in the future",
    "cn_def": "預測"
  },
  "foreseeable": {
    "pos": "adj.",
    "en_def": "able to be predicted",
    "cn_def": "可預見的"
  },
  "fragmentary": {
    "pos": "adj.",
    "en_def": "incomplete and in small parts",
    "cn_def": "零碎的"
  },
  "fundamentals": {
    "pos": "n.",
    "en_def": "the basic and most important parts of something",
    "cn_def": "基本原理；基礎"
  },
  "geopolitics": {
    "pos": "n.",
    "en_def": "how geography affects international politics",
    "cn_def": "地緣政治"
  },
  "globalised": {
    "pos": "adj.",
    "en_def": "connected across the whole world",
    "cn_def": "全球化的"
  },
  "immediacy": {
    "pos": "n.",
    "en_def": "the quality of being urgent and happening now",
    "cn_def": "迫切性；即時性"
  },
  "inaction": {
    "pos": "n.",
    "en_def": "failure to do anything",
    "cn_def": "不作為"
  },
  "incapable": {
    "pos": "adj.",
    "en_def": "not able to do something",
    "cn_def": "無法的；沒有能力的"
  },
  "independence": {
    "pos": "n.",
    "en_def": "freedom from control or help by others",
    "cn_def": "獨立；自主"
  },
  "industrialise": {
    "pos": "v.",
    "en_def": "to develop industries in a country or area",
    "cn_def": "工業化"
  },
  "inelastic": {
    "pos": "adj.",
    "en_def": "not changing much when price changes",
    "cn_def": "缺乏彈性的"
  },
  "infeasible": {
    "pos": "adj.",
    "en_def": "not possible to do in practice",
    "cn_def": "不可行的"
  },
  "inflexible": {
    "pos": "adj.",
    "en_def": "unable to change easily",
    "cn_def": "缺乏彈性的；僵化的"
  },
  "insecurity": {
    "pos": "n.",
    "en_def": "a lack of safety or certainty",
    "cn_def": "不安全；不穩定"
  },
  "insufficiency": {
    "pos": "n.",
    "en_def": "a lack of enough of something",
    "cn_def": "不足"
  },
  "interconnection": {
    "pos": "n.",
    "en_def": "a link between two or more things",
    "cn_def": "互聯；相互連接"
  },
  "long-range": {
    "pos": "adj.",
    "en_def": "covering a long distance or period",
    "cn_def": "長程的；長期的"
  },
  "maximisation": {
    "pos": "n.",
    "en_def": "the act of making something as large as possible",
    "cn_def": "最大化"
  },
  "minimisation": {
    "pos": "n.",
    "en_def": "the act of making something as small as possible",
    "cn_def": "最小化"
  },
  "modernisation": {
    "pos": "n.",
    "en_def": "the process of making something more up to date",
    "cn_def": "現代化"
  },
  "monopolise": {
    "pos": "v.",
    "en_def": "to have complete control of something",
    "cn_def": "壟斷"
  },
  "multiplier": {
    "pos": "n.",
    "en_def": "something that increases the effect of something else",
    "cn_def": "乘數；倍增因素"
  },
  "smelter": {
    "pos": "n.",
    "en_def": "a factory where metal is taken out of rock by heating",
    "cn_def": "冶煉廠"
  },
  "inverter": {
    "pos": "n.",
    "en_def": "a device that changes direct current into alternating current",
    "cn_def": "逆變器"
  },
  "prospecting": {
    "pos": "n.",
    "en_def": "searching an area for gold, oil or minerals",
    "cn_def": "探勘"
  },
  "price-sensitive": {
    "pos": "adj.",
    "en_def": "likely to change behaviour when prices change",
    "cn_def": "對價格敏感的"
  },
  "contributory": {
    "pos": "adj.",
    "en_def": "helping to cause something",
    "cn_def": "促成的"
  },
  "conductive": {
    "pos": "adj.",
    "en_def": "allowing electricity or heat to pass through",
    "cn_def": "導電的；傳導的"
  },
  "tailings": {
    "pos": "n.",
    "en_def": "waste rock and mud left after mining",
    "cn_def": "尾礦"
  },
  "overextraction": {
    "pos": "n.",
    "en_def": "taking too much of a resource from the ground",
    "cn_def": "過度抽取"
  },
  "mine": {
    "pos": "n.",
    "en_def": "a deep hole or tunnels where minerals are dug out",
    "cn_def": "礦坑"
  },
  "petrochemical": {
    "pos": "adj.",
    "en_def": "made from oil or natural gas",
    "cn_def": "石化的"
  },
  "pilot": {
    "pos": "adj.",
    "en_def": "done on a small scale as a test",
    "cn_def": "試驗性的；先導的"
  },
  "irreplaceable": {
    "pos": "adj.",
    "en_def": "too special or rare to be replaced",
    "cn_def": "無可取代的"
  },
  "resource-rich": {
    "pos": "adj.",
    "en_def": "having a lot of natural resources",
    "cn_def": "資源豐富的"
  },
  "unexploited": {
    "pos": "adj.",
    "en_def": "not yet used or developed",
    "cn_def": "未開發的"
  },
  "downward": {
    "pos": "adj.",
    "en_def": "moving towards a lower level",
    "cn_def": "向下的"
  },
  "desirability": {
    "pos": "n.",
    "en_def": "how much something is wanted or seen as good",
    "cn_def": "可取性；吸引力"
  },
  "silver": {
    "pos": "n.",
    "en_def": "a valuable shiny grey metal",
    "cn_def": "銀"
  },
  "overcapacity": {
    "pos": "n.",
    "en_def": "having more ability to produce than is needed",
    "cn_def": "產能過剩"
  },
  "abolition": {
    "pos": "n.",
    "en_def": "the official ending of a law or system",
    "cn_def": "廢除"
  },
  "rig": {
    "pos": "n.",
    "en_def": "a large structure used to drill for oil or gas",
    "cn_def": "鑽油平台；鑽井設備"
  },
  "backward": {
    "pos": "adj.",
    "en_def": "not developed or modern",
    "cn_def": "落後的"
  },
  "destabilising": {
    "pos": "adj.",
    "en_def": "making a situation less steady or safe",
    "cn_def": "造成不穩定的"
  },
  "landlocked": {
    "pos": "adj.",
    "en_def": "surrounded by land, with no coast",
    "cn_def": "內陸的"
  },
  "reclamation": {
    "pos": "n.",
    "en_def": "making damaged land useful again",
    "cn_def": "復育；再利用"
  },
  "transformer": {
    "pos": "n.",
    "en_def": "a device that changes the voltage of electricity",
    "cn_def": "變壓器"
  },
  "aridity": {
    "pos": "n.",
    "en_def": "the state of being very dry",
    "cn_def": "乾燥；乾旱"
  },
  "predictability": {
    "pos": "n.",
    "en_def": "the quality of being expected or known in advance",
    "cn_def": "可預測性"
  },
  "nuclear-free": {
    "pos": "adj.",
    "en_def": "having no nuclear power or weapons",
    "cn_def": "非核的"
  },
  "long-run": {
    "pos": "adj.",
    "en_def": "relating to a long period of time",
    "cn_def": "長期的"
  },
  "expandable": {
    "pos": "adj.",
    "en_def": "able to be made larger",
    "cn_def": "可擴充的"
  },
  "replenishment": {
    "pos": "n.",
    "en_def": "filling something up again",
    "cn_def": "補充"
  },
  "relocation": {
    "pos": "n.",
    "en_def": "moving to a new place",
    "cn_def": "遷移；搬遷"
  },
  "jeopardy": {
    "pos": "n.",
    "en_def": "danger of loss or harm",
    "cn_def": "危險；危難"
  },
  "entrench": {
    "pos": "v.",
    "en_def": "to fix an idea or system firmly so it is hard to change",
    "cn_def": "使根深蒂固"
  },
  "nationalise": {
    "pos": "v.",
    "en_def": "to bring a private company under government control",
    "cn_def": "收歸國有"
  },
  "downgrade": {
    "pos": "v.",
    "en_def": "to lower the level or importance of something",
    "cn_def": "降低；下修"
  },
  "replaceable": {
    "pos": "adj.",
    "en_def": "able to be replaced",
    "cn_def": "可替換的"
  },
  "generational": {
    "pos": "adj.",
    "en_def": "related to different age groups",
    "cn_def": "世代的"
  },
  "advisory": {
    "pos": "adj.",
    "en_def": "giving advice",
    "cn_def": "顧問的；諮詢的"
  },
  "tradable": {
    "pos": "adj.",
    "en_def": "able to be bought and sold",
    "cn_def": "可交易的"
  },
  "correlated": {
    "pos": "adj.",
    "en_def": "closely connected, so one changes with the other",
    "cn_def": "相關的"
  },
  "additional": {
    "pos": "adj.",
    "en_def": "extra or more",
    "cn_def": "額外的"
  },
  "deteriorating": {
    "pos": "adj.",
    "en_def": "becoming worse",
    "cn_def": "惡化中的"
  },
  "electrical": {
    "pos": "adj.",
    "en_def": "related to or using electricity",
    "cn_def": "電的；電氣的"
  },
  "fracking": {
    "pos": "n.",
    "en_def": "pumping water into rocks to break them and release gas",
    "cn_def": "水力壓裂法"
  },
  "remediation": {
    "pos": "n.",
    "en_def": "the process of cleaning up polluted land or water",
    "cn_def": "整治；修復"
  },
  "decarbonisation": {
    "pos": "n.",
    "en_def": "reducing the carbon dioxide produced by an activity",
    "cn_def": "去碳化；減碳"
  },
  "meltdown": {
    "pos": "n.",
    "en_def": "a serious accident when a nuclear reactor overheats",
    "cn_def": "爐心熔毀"
  },
  "outsourcing": {
    "pos": "n.",
    "en_def": "paying another company to do work for you",
    "cn_def": "外包"
  },
  "refining": {
    "pos": "n.",
    "en_def": "the process of making oil clean and useful",
    "cn_def": "精煉"
  },
  "hydroelectric": {
    "pos": "adj.",
    "en_def": "producing electricity from moving water",
    "cn_def": "水力發電的"
  },
  "distributional": {
    "pos": "adj.",
    "en_def": "related to how something is shared among people",
    "cn_def": "分配的"
  },
  "dwindling": {
    "pos": "adj.",
    "en_def": "becoming gradually smaller in amount",
    "cn_def": "日漸減少的"
  },
  "microgrid": {
    "pos": "n.",
    "en_def": "a small local power network that can work alone",
    "cn_def": "微電網"
  },
  "discontinuation": {
    "pos": "n.",
    "en_def": "the act of stopping something",
    "cn_def": "停止；中止"
  },
  "spillover": {
    "pos": "n.",
    "en_def": "an effect that spreads beyond its original area",
    "cn_def": "外溢效應"
  },
  "diamond": {
    "pos": "n.",
    "en_def": "a very hard, clear and valuable stone",
    "cn_def": "鑽石"
  },
  "lignite": {
    "pos": "n.",
    "en_def": "soft brown coal that produces a lot of smoke",
    "cn_def": "褐煤"
  },
  "iron": {
    "pos": "n.",
    "en_def": "a strong grey metal used to make steel",
    "cn_def": "鐵"
  },
  "watt": {
    "pos": "n.",
    "en_def": "a basic unit for measuring electric power",
    "cn_def": "瓦特"
  },
  "biodiesel": {
    "pos": "n.",
    "en_def": "a fuel made from vegetable oil or animal fat",
    "cn_def": "生質柴油"
  },
  "tighten": {
    "pos": "v.",
    "en_def": "to make rules stricter",
    "cn_def": "收緊；加強"
  },
  "widen": {
    "pos": "v.",
    "en_def": "to become or make wider",
    "cn_def": "擴大"
  },
  "baseload": {
    "pos": "n.",
    "en_def": "the minimum amount of power needed all the time",
    "cn_def": "基載電力"
  },
  "socket": {
    "pos": "n.",
    "en_def": "the place in a wall where you plug things in",
    "cn_def": "插座"
  }
};

const EXTRA_GLOSSES = {};
