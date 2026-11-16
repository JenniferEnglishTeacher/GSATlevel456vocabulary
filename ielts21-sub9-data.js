// Topic 21 Subunit 9 Quiz Data: Academic Words 學術單字 2 (decentralised – extractive)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S09 - Academic Words 學術單字 2 (decentralised – extractive)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "decentralised",
    "pos": "adj.",
    "cn_def": "分散式的",
    "en_def": "spread out instead of controlled from one place",
    "sentence": "A {{BLANK}} energy system uses many small power sources, so one failure does not shut down the whole network.",
    "cn": "分散式能源系統使用許多小型電源，所以單一故障不會讓整個電網停擺。"
  },
  {
    "word": "declining",
    "pos": "adj.",
    "cn_def": "逐漸減少的",
    "en_def": "becoming less or smaller",
    "sentence": "The town's {{BLANK}} coal industry has left many shops empty, but a new battery factory may bring jobs back.",
    "cn": "鎮上日漸衰退的煤礦產業讓許多商店空置，但一座新電池工廠可能把工作帶回來。"
  },
  {
    "word": "dedicated",
    "pos": "adj.",
    "cn_def": "專用的",
    "en_def": "used only for one particular purpose",
    "sentence": "The car park has ten {{BLANK}} spaces for electric cars, and each one has its own charging point.",
    "cn": "停車場有十個電動車專用車位，每一個都有自己的充電樁。"
  },
  {
    "word": "degradation",
    "pos": "n.",
    "cn_def": "退化；劣化",
    "en_def": "the process of becoming worse in quality",
    "sentence": "Battery {{BLANK}} means that phones hold less charge after a few years, so many people replace them too early.",
    "cn": "電池劣化意味著手機幾年後蓄電量變少，所以許多人太早換掉手機。"
  },
  {
    "word": "deployment",
    "pos": "n.",
    "cn_def": "部署；推廣使用",
    "en_def": "the act of putting something into use",
    "sentence": "The rapid {{BLANK}} of solar panels has lowered their price, so more families can now afford them.",
    "cn": "太陽能板的快速推廣降低了價格，所以現在更多家庭負擔得起。"
  },
  {
    "word": "deregulate",
    "pos": "v.",
    "cn_def": "解除管制",
    "en_def": "to remove government rules from an industry",
    "sentence": "The government decided to {{BLANK}} the electricity market, so new companies can now compete with the old state supplier.",
    "cn": "政府決定對電力市場解除管制，所以新公司現在可以和老牌國營供應商競爭。"
  },
  {
    "word": "desirability",
    "pos": "n.",
    "cn_def": "可取性；吸引力",
    "en_def": "how much something is wanted or seen as good",
    "sentence": "The {{BLANK}} of nuclear power is still debated, because it is low-carbon but produces dangerous waste.",
    "cn": "核能的可取性仍有爭議，因為它低碳卻產生危險廢料。"
  },
  {
    "word": "deteriorating",
    "pos": "adj.",
    "cn_def": "惡化中的",
    "en_def": "becoming worse",
    "sentence": "The {{BLANK}} condition of the old pipes caused several gas leaks, so the city decided to replace them all.",
    "cn": "舊管線日益惡化的狀況造成好幾起瓦斯外洩，所以市政府決定全部更換。"
  },
  {
    "word": "devastation",
    "pos": "n.",
    "cn_def": "嚴重破壞",
    "en_def": "very great damage",
    "sentence": "The oil spill caused terrible {{BLANK}} along the coast, and it took years for the fishing industry to recover.",
    "cn": "漏油事件沿著海岸造成了可怕的嚴重破壞，漁業花了好幾年才復原。"
  },
  {
    "word": "diminution",
    "pos": "n.",
    "cn_def": "減少；縮小",
    "en_def": "a reduction in size or importance",
    "sentence": "There has been a steady {{BLANK}} in coal's share of power, while solar and wind have grown each year.",
    "cn": "煤炭在發電中的占比穩定減少，而太陽能和風力每年都在成長。"
  },
  {
    "word": "disadvantage",
    "pos": "n.",
    "cn_def": "缺點",
    "en_def": "something that makes a situation less good",
    "sentence": "One {{BLANK}} of wind power is the noise, so some people do not want turbines built near their homes.",
    "cn": "風力發電的一個缺點是噪音，所以有些人不希望風機蓋在家附近。"
  },
  {
    "word": "discontinuation",
    "pos": "n.",
    "cn_def": "停止；中止",
    "en_def": "the act of stopping something",
    "sentence": "The {{BLANK}} of the bus service forced many villagers to drive, so fuel use in the area actually went up.",
    "cn": "公車服務的停駛迫使許多村民開車，所以這個地區的燃料使用量反而增加了。"
  },
  {
    "word": "dissipation",
    "pos": "n.",
    "cn_def": "散失；消散",
    "en_def": "the gradual loss of energy, often as heat",
    "sentence": "Some power is always lost through heat {{BLANK}} in long cables, so engineers use high voltages to reduce waste.",
    "cn": "長距離電纜總會因熱能散失而損失一些電力，所以工程師使用高壓來減少浪費。"
  },
  {
    "word": "distributional",
    "pos": "adj.",
    "cn_def": "分配的",
    "en_def": "related to how something is shared among people",
    "sentence": "The carbon tax has {{BLANK}} effects, because poorer families spend a larger part of their income on energy.",
    "cn": "碳稅有分配效應，因為較貧窮的家庭在能源上花費的收入比例較高。"
  },
  {
    "word": "downward",
    "pos": "adj.",
    "cn_def": "向下的",
    "en_def": "moving towards a lower level",
    "sentence": "Solar prices have followed a {{BLANK}} trend for twenty years, so the technology is now cheaper than coal in many places.",
    "cn": "太陽能價格二十年來呈下降趨勢，所以這項技術如今在許多地方比煤還便宜。"
  },
  {
    "word": "dwindling",
    "pos": "adj.",
    "cn_def": "日漸減少的",
    "en_def": "becoming gradually smaller in amount",
    "sentence": "The country's {{BLANK}} gas supplies have pushed it to import more, so its energy bills have risen sharply.",
    "cn": "這個國家日漸減少的天然氣供應迫使它進口更多，所以能源費用急劇上升。"
  },
  {
    "word": "electrifying",
    "pos": "adj.",
    "cn_def": "令人振奮的；激動人心的",
    "en_def": "extremely exciting",
    "sentence": "The scientist gave an {{BLANK}} speech about clean energy, and many students decided to study engineering afterwards.",
    "cn": "那位科學家發表了一場關於乾淨能源激動人心的演講，之後許多學生決定念工程。"
  },
  {
    "word": "encompassing",
    "pos": "adj.",
    "cn_def": "涵蓋廣泛的",
    "en_def": "including many different things",
    "sentence": "The new energy plan is broad and {{BLANK}}, because it covers transport, housing and industry instead of just power stations.",
    "cn": "新的能源計畫範圍廣且涵蓋全面，因為它涵蓋交通、住宅和工業，而不只是發電廠。"
  },
  {
    "word": "endless",
    "pos": "adj.",
    "cn_def": "無止境的",
    "en_def": "seeming to have no end",
    "sentence": "We are not living with an {{BLANK}} supply of oil, so we must start using cleaner sources soon.",
    "cn": "我們並不是擁有無止境的石油供應，所以我們必須盡快開始使用更乾淨的能源。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "having a lot of energy and enthusiasm",
    "sentence": "Our {{BLANK}} science teacher started a recycling club, and now students collect hundreds of cans every week.",
    "cn": "我們精力充沛的自然老師創立了回收社團，現在學生每週收集數百個罐子。"
  },
  {
    "word": "estimation",
    "pos": "n.",
    "cn_def": "估計",
    "en_def": "a judgement of an amount without exact measuring",
    "sentence": "By my {{BLANK}}, our family could save about two thousand dollars a year if we used less air conditioning.",
    "cn": "根據我的估計，如果我們少開冷氣，我們家一年大約能省下兩千元。"
  },
  {
    "word": "exhaustible",
    "pos": "adj.",
    "cn_def": "可耗盡的",
    "en_def": "able to be completely used up",
    "sentence": "Oil is an {{BLANK}} resource, so countries that depend on it must plan for the day it runs out.",
    "cn": "石油是可耗盡的資源，所以依賴它的國家必須為它用完的那天做準備。"
  },
  {
    "word": "expandable",
    "pos": "adj.",
    "cn_def": "可擴充的",
    "en_def": "able to be made larger",
    "sentence": "The battery system is {{BLANK}}, so the school can add more units later when it installs more solar panels.",
    "cn": "這套電池系統是可擴充的，所以學校日後加裝更多太陽能板時可以增加更多單元。"
  },
  {
    "word": "exploitable",
    "pos": "adj.",
    "cn_def": "可開採的；可利用的",
    "en_def": "able to be used for profit",
    "sentence": "Only a small part of the gas under the sea is {{BLANK}}, because the rest is too deep or too costly to reach.",
    "cn": "海底的天然氣只有一小部分是可開採的，因為其餘的太深或成本太高而難以取得。"
  },
  {
    "word": "extractive",
    "pos": "adj.",
    "cn_def": "採掘的",
    "en_def": "related to taking resources out of the ground",
    "sentence": "{{BLANK}} industries like mining create jobs, but they often leave serious damage to the land and water.",
    "cn": "像採礦這樣的採掘產業創造了工作，但它們常對土地和水源留下嚴重破壞。"
  }
];

const MCQS = [
  {
    "q": "A _____ energy system uses many small power sources, so one failure does not shut down the whole network.",
    "options": [
      "electrical",
      "decentralised",
      "calculable",
      "contributory"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The town's _____ coal industry has left many shops empty, but a new battery factory may bring jobs back.",
    "options": [
      "continual",
      "inelastic",
      "unexploited",
      "declining"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The car park has ten _____ spaces for electric cars, and each one has its own charging point.",
    "options": [
      "dedicated",
      "underused",
      "anticipatory",
      "price-sensitive"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Battery _____ means that phones hold less charge after a few years, so many people replace them too early.",
    "options": [
      "excavator",
      "electorate",
      "degradation",
      "hydrogen"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The rapid _____ of solar panels has lowered their price, so more families can now afford them.",
    "options": [
      "iron",
      "deployment",
      "reassessment",
      "inflow"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The government decided to _____ the electricity market, so new companies can now compete with the old state supplier.",
    "options": [
      "deregulate",
      "draught-proof",
      "tighten",
      "monopolise"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The _____ of nuclear power is still debated, because it is low-carbon but produces dangerous waste.",
    "options": [
      "rollout",
      "policymaker",
      "rig",
      "desirability"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The _____ condition of the old pipes caused several gas leaks, so the city decided to replace them all.",
    "options": [
      "long-run",
      "globalised",
      "deteriorating",
      "upward"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The oil spill caused terrible _____ along the coast, and it took years for the fishing industry to recover.",
    "options": [
      "slowdown",
      "devastation",
      "rig",
      "plutonium"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "There has been a steady _____ in coal's share of power, while solar and wind have grown each year.",
    "options": [
      "outage",
      "radioactivity",
      "diminution",
      "scalability"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "One _____ of wind power is the noise, so some people do not want turbines built near their homes.",
    "options": [
      "disadvantage",
      "lithium",
      "radiator",
      "substation"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of the bus service forced many villagers to drive, so fuel use in the area actually went up.",
    "options": [
      "phase-out",
      "fission",
      "radioactivity",
      "discontinuation"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Some power is always lost through heat _____ in long cables, so engineers use high voltages to reduce waste.",
    "options": [
      "dissipation",
      "bauxite",
      "conductivity",
      "plutonium"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The carbon tax has _____ effects, because poorer families spend a larger part of their income on energy.",
    "options": [
      "worsening",
      "non-renewable",
      "distributional",
      "boundless"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Solar prices have followed a _____ trend for twenty years, so the technology is now cheaper than coal in many places.",
    "options": [
      "continual",
      "centralised",
      "fragmentary",
      "downward"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The country's _____ gas supplies have pushed it to import more, so its energy bills have risen sharply.",
    "options": [
      "diffuse",
      "dwindling",
      "run-of-river",
      "globalised"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The scientist gave an _____ speech about clean energy, and many students decided to study engineering afterwards.",
    "options": [
      "electrifying",
      "run-of-river",
      "phased",
      "infeasible"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new energy plan is broad and _____, because it covers transport, housing and industry instead of just power stations.",
    "options": [
      "generational",
      "corrosive",
      "transnational",
      "encompassing"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "We are not living with an _____ supply of oil, so we must start using cleaner sources soon.",
    "options": [
      "fragmentary",
      "pilot",
      "endless",
      "fuel-efficient"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Our _____ science teacher started a recycling club, and now students collect hundreds of cans every week.",
    "options": [
      "convertible",
      "energetic",
      "inelastic",
      "phased"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "By my _____, our family could save about two thousand dollars a year if we used less air conditioning.",
    "options": [
      "estimation",
      "lignite",
      "excavator",
      "jeopardy"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Oil is an _____ resource, so countries that depend on it must plan for the day it runs out.",
    "options": [
      "diffuse",
      "incapable",
      "exhaustible",
      "pilot"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The battery system is _____, so the school can add more units later when it installs more solar panels.",
    "options": [
      "uncontrollable",
      "diffuse",
      "convertible",
      "expandable"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Only a small part of the gas under the sea is _____, because the rest is too deep or too costly to reach.",
    "options": [
      "upward",
      "exploitable",
      "inelastic",
      "concentrated"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "_____ industries like mining create jobs, but they often leave serious damage to the land and water.",
    "options": [
      "extractive",
      "boundless",
      "foreseeable",
      "reusable"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "decentralised": {
    "pos": "adj.",
    "en_def": "spread out instead of controlled from one place",
    "cn_def": "分散式的"
  },
  "declining": {
    "pos": "adj.",
    "en_def": "becoming less or smaller",
    "cn_def": "逐漸減少的"
  },
  "dedicated": {
    "pos": "adj.",
    "en_def": "used only for one particular purpose",
    "cn_def": "專用的"
  },
  "degradation": {
    "pos": "n.",
    "en_def": "the process of becoming worse in quality",
    "cn_def": "退化；劣化"
  },
  "deployment": {
    "pos": "n.",
    "en_def": "the act of putting something into use",
    "cn_def": "部署；推廣使用"
  },
  "deregulate": {
    "pos": "v.",
    "en_def": "to remove government rules from an industry",
    "cn_def": "解除管制"
  },
  "desirability": {
    "pos": "n.",
    "en_def": "how much something is wanted or seen as good",
    "cn_def": "可取性；吸引力"
  },
  "deteriorating": {
    "pos": "adj.",
    "en_def": "becoming worse",
    "cn_def": "惡化中的"
  },
  "devastation": {
    "pos": "n.",
    "en_def": "very great damage",
    "cn_def": "嚴重破壞"
  },
  "diminution": {
    "pos": "n.",
    "en_def": "a reduction in size or importance",
    "cn_def": "減少；縮小"
  },
  "disadvantage": {
    "pos": "n.",
    "en_def": "something that makes a situation less good",
    "cn_def": "缺點"
  },
  "discontinuation": {
    "pos": "n.",
    "en_def": "the act of stopping something",
    "cn_def": "停止；中止"
  },
  "dissipation": {
    "pos": "n.",
    "en_def": "the gradual loss of energy, often as heat",
    "cn_def": "散失；消散"
  },
  "distributional": {
    "pos": "adj.",
    "en_def": "related to how something is shared among people",
    "cn_def": "分配的"
  },
  "downward": {
    "pos": "adj.",
    "en_def": "moving towards a lower level",
    "cn_def": "向下的"
  },
  "dwindling": {
    "pos": "adj.",
    "en_def": "becoming gradually smaller in amount",
    "cn_def": "日漸減少的"
  },
  "electrifying": {
    "pos": "adj.",
    "en_def": "extremely exciting",
    "cn_def": "令人振奮的；激動人心的"
  },
  "encompassing": {
    "pos": "adj.",
    "en_def": "including many different things",
    "cn_def": "涵蓋廣泛的"
  },
  "endless": {
    "pos": "adj.",
    "en_def": "seeming to have no end",
    "cn_def": "無止境的"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "having a lot of energy and enthusiasm",
    "cn_def": "精力充沛的"
  },
  "estimation": {
    "pos": "n.",
    "en_def": "a judgement of an amount without exact measuring",
    "cn_def": "估計"
  },
  "exhaustible": {
    "pos": "adj.",
    "en_def": "able to be completely used up",
    "cn_def": "可耗盡的"
  },
  "expandable": {
    "pos": "adj.",
    "en_def": "able to be made larger",
    "cn_def": "可擴充的"
  },
  "exploitable": {
    "pos": "adj.",
    "en_def": "able to be used for profit",
    "cn_def": "可開採的；可利用的"
  },
  "extractive": {
    "pos": "adj.",
    "en_def": "related to taking resources out of the ground",
    "cn_def": "採掘的"
  },
  "electrical": {
    "pos": "adj.",
    "en_def": "related to or using electricity",
    "cn_def": "電的；電氣的"
  },
  "calculable": {
    "pos": "adj.",
    "en_def": "able to be worked out with numbers",
    "cn_def": "可計算的"
  },
  "contributory": {
    "pos": "adj.",
    "en_def": "helping to cause something",
    "cn_def": "促成的"
  },
  "continual": {
    "pos": "adj.",
    "en_def": "happening again and again",
    "cn_def": "不斷的；頻繁的"
  },
  "inelastic": {
    "pos": "adj.",
    "en_def": "not changing much when price changes",
    "cn_def": "缺乏彈性的"
  },
  "unexploited": {
    "pos": "adj.",
    "en_def": "not yet used or developed",
    "cn_def": "未開發的"
  },
  "underused": {
    "pos": "adj.",
    "en_def": "not used as much as it could be",
    "cn_def": "未充分利用的"
  },
  "anticipatory": {
    "pos": "adj.",
    "en_def": "done before something is expected to happen",
    "cn_def": "預先的；預期性的"
  },
  "price-sensitive": {
    "pos": "adj.",
    "en_def": "likely to change behaviour when prices change",
    "cn_def": "對價格敏感的"
  },
  "excavator": {
    "pos": "n.",
    "en_def": "a large machine used for digging",
    "cn_def": "挖土機"
  },
  "electorate": {
    "pos": "n.",
    "en_def": "all the people allowed to vote",
    "cn_def": "選民"
  },
  "hydrogen": {
    "pos": "n.",
    "en_def": "a very light gas that can be used as clean fuel",
    "cn_def": "氫"
  },
  "iron": {
    "pos": "n.",
    "en_def": "a strong grey metal used to make steel",
    "cn_def": "鐵"
  },
  "reassessment": {
    "pos": "n.",
    "en_def": "the act of judging something again",
    "cn_def": "重新評估"
  },
  "inflow": {
    "pos": "n.",
    "en_def": "movement of something into a place",
    "cn_def": "流入"
  },
  "draught-proof": {
    "pos": "v.",
    "en_def": "to block gaps so cold air cannot come in",
    "cn_def": "防風密封"
  },
  "tighten": {
    "pos": "v.",
    "en_def": "to make rules stricter",
    "cn_def": "收緊；加強"
  },
  "monopolise": {
    "pos": "v.",
    "en_def": "to have complete control of something",
    "cn_def": "壟斷"
  },
  "rollout": {
    "pos": "n.",
    "en_def": "the introduction of a new product or service to many people",
    "cn_def": "推出；普及"
  },
  "policymaker": {
    "pos": "n.",
    "en_def": "a person who makes government plans and rules",
    "cn_def": "政策制定者"
  },
  "rig": {
    "pos": "n.",
    "en_def": "a large structure used to drill for oil or gas",
    "cn_def": "鑽油平台；鑽井設備"
  },
  "long-run": {
    "pos": "adj.",
    "en_def": "relating to a long period of time",
    "cn_def": "長期的"
  },
  "globalised": {
    "pos": "adj.",
    "en_def": "connected across the whole world",
    "cn_def": "全球化的"
  },
  "upward": {
    "pos": "adj.",
    "en_def": "moving towards a higher level",
    "cn_def": "向上的"
  },
  "slowdown": {
    "pos": "n.",
    "en_def": "a reduction in speed or activity",
    "cn_def": "減緩；放緩"
  },
  "plutonium": {
    "pos": "n.",
    "en_def": "a dangerous metal made in nuclear reactors",
    "cn_def": "鈽"
  },
  "outage": {
    "pos": "n.",
    "en_def": "a period when a service like electricity stops working",
    "cn_def": "停電；中斷"
  },
  "radioactivity": {
    "pos": "n.",
    "en_def": "the harmful energy given off by some materials",
    "cn_def": "放射性；輻射能"
  },
  "scalability": {
    "pos": "n.",
    "en_def": "the ability to grow larger easily",
    "cn_def": "可擴展性"
  },
  "lithium": {
    "pos": "n.",
    "en_def": "a light metal used in rechargeable batteries",
    "cn_def": "鋰"
  },
  "radiator": {
    "pos": "n.",
    "en_def": "a metal heater on a wall, filled with hot water",
    "cn_def": "暖氣片"
  },
  "substation": {
    "pos": "n.",
    "en_def": "a place where electricity is changed before reaching homes",
    "cn_def": "變電所"
  },
  "phase-out": {
    "pos": "n.",
    "en_def": "the gradual ending of something",
    "cn_def": "逐步淘汰"
  },
  "fission": {
    "pos": "n.",
    "en_def": "the splitting of an atom, which releases energy",
    "cn_def": "核分裂"
  },
  "bauxite": {
    "pos": "n.",
    "en_def": "the rock from which aluminium is made",
    "cn_def": "鋁土礦"
  },
  "conductivity": {
    "pos": "n.",
    "en_def": "how easily electricity or heat moves through a material",
    "cn_def": "導電性；傳導率"
  },
  "worsening": {
    "pos": "adj.",
    "en_def": "becoming worse",
    "cn_def": "日益惡化的"
  },
  "non-renewable": {
    "pos": "adj.",
    "en_def": "not able to be replaced once it has been used",
    "cn_def": "不可再生的"
  },
  "boundless": {
    "pos": "adj.",
    "en_def": "without limits",
    "cn_def": "無限的"
  },
  "centralised": {
    "pos": "adj.",
    "en_def": "controlled from one main place",
    "cn_def": "集中的"
  },
  "fragmentary": {
    "pos": "adj.",
    "en_def": "incomplete and in small parts",
    "cn_def": "零碎的"
  },
  "diffuse": {
    "pos": "adj.",
    "en_def": "spread over a large area, not concentrated",
    "cn_def": "分散的；擴散的"
  },
  "run-of-river": {
    "pos": "adj.",
    "en_def": "using a river's natural flow without a big dam",
    "cn_def": "川流式的"
  },
  "phased": {
    "pos": "adj.",
    "en_def": "done gradually in stages",
    "cn_def": "分階段的"
  },
  "infeasible": {
    "pos": "adj.",
    "en_def": "not possible to do in practice",
    "cn_def": "不可行的"
  },
  "generational": {
    "pos": "adj.",
    "en_def": "related to different age groups",
    "cn_def": "世代的"
  },
  "corrosive": {
    "pos": "adj.",
    "en_def": "able to slowly damage metal or other materials",
    "cn_def": "腐蝕性的"
  },
  "transnational": {
    "pos": "adj.",
    "en_def": "operating across several countries",
    "cn_def": "跨國的"
  },
  "pilot": {
    "pos": "adj.",
    "en_def": "done on a small scale as a test",
    "cn_def": "試驗性的；先導的"
  },
  "fuel-efficient": {
    "pos": "adj.",
    "en_def": "using only a small amount of fuel",
    "cn_def": "省油的"
  },
  "convertible": {
    "pos": "adj.",
    "en_def": "able to be changed into another form",
    "cn_def": "可轉換的"
  },
  "lignite": {
    "pos": "n.",
    "en_def": "soft brown coal that produces a lot of smoke",
    "cn_def": "褐煤"
  },
  "jeopardy": {
    "pos": "n.",
    "en_def": "danger of loss or harm",
    "cn_def": "危險；危難"
  },
  "incapable": {
    "pos": "adj.",
    "en_def": "not able to do something",
    "cn_def": "無法的；沒有能力的"
  },
  "uncontrollable": {
    "pos": "adj.",
    "en_def": "impossible to control",
    "cn_def": "無法控制的"
  },
  "concentrated": {
    "pos": "adj.",
    "en_def": "gathered closely in one place",
    "cn_def": "集中的"
  },
  "foreseeable": {
    "pos": "adj.",
    "en_def": "able to be predicted",
    "cn_def": "可預見的"
  },
  "reusable": {
    "pos": "adj.",
    "en_def": "able to be used again",
    "cn_def": "可重複使用的"
  }
};

const EXTRA_GLOSSES = {};
