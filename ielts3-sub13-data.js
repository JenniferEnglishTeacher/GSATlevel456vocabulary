// Topic 3 Subunit 13 Quiz Data: Academic Words 學術單字 6 (clarity – intermediate)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S13 - Academic Words 學術單字 6 (clarity – intermediate)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清楚;明確",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "Businesses want {{BLANK}} about future energy rules, because they need to plan their investments for many years.",
    "cn": "企業希望未來的能源規定能更明確,因為他們需要為多年的投資做規劃。"
  },
  {
    "word": "nuance",
    "pos": "n.",
    "cn_def": "細微差別",
    "en_def": "a small but important difference in meaning",
    "sentence": "The debate on nuclear power needs more {{BLANK}}, because it is not simply good or bad.",
    "cn": "關於核能的辯論需要更多細微的區辨,因為它並不是單純的好或壞。"
  },
  {
    "word": "simplistic",
    "pos": "adj.",
    "cn_def": "過度簡化的",
    "en_def": "treating a problem as simpler than it really is",
    "sentence": "Saying that planting trees will solve everything is {{BLANK}}, because we also need to cut emissions.",
    "cn": "說種樹就能解決一切是過度簡化的想法,因為我們也需要減少排放。"
  },
  {
    "word": "oversimplify",
    "pos": "v.",
    "cn_def": "過度簡化",
    "en_def": "to describe something in a way that is too simple",
    "sentence": "Headlines often {{BLANK}} scientific reports, so readers may not understand how uncertain some results are.",
    "cn": "新聞標題常常過度簡化科學報告,所以讀者可能不了解某些結果有多不確定。"
  },
  {
    "word": "generalise",
    "pos": "v.",
    "cn_def": "概括;一概而論",
    "en_def": "to say something is true for all cases",
    "sentence": "We should not {{BLANK}} from one cold winter, because climate is about long-term patterns, not a single season.",
    "cn": "我們不應該從一個寒冷的冬天就一概而論,因為氣候講的是長期模式,而不是單一季節。"
  },
  {
    "word": "rationale",
    "pos": "n.",
    "cn_def": "基本原理;理由",
    "en_def": "the reasons for a decision",
    "sentence": "The mayor explained the {{BLANK}} for the new parking fees, and she said the money would pay for more buses.",
    "cn": "市長解釋了新停車費的理由,她說這筆錢將用來增加公車。"
  },
  {
    "word": "metric",
    "pos": "n.",
    "cn_def": "指標;衡量標準",
    "en_def": "a way of measuring something",
    "sentence": "Carbon per person is a useful {{BLANK}}, but it does not show which countries polluted the most in the past.",
    "cn": "人均碳排放是一個有用的指標,但它無法顯示哪些國家過去污染最多。"
  },
  {
    "word": "benchmark",
    "pos": "n.",
    "cn_def": "基準;標竿",
    "en_def": "a standard used for comparison",
    "sentence": "The new office became a {{BLANK}} for green buildings, and other companies copied many of its ideas.",
    "cn": "這棟新辦公室成為綠建築的標竿,其他公司仿效了它的許多設計。"
  },
  {
    "word": "parameter",
    "pos": "n.",
    "cn_def": "參數;界限",
    "en_def": "a limit or rule that controls how something is done",
    "sentence": "The model uses several {{BLANK}} such as wind speed and temperature, so its forecasts are quite accurate.",
    "cn": "這個模型使用了幾個參數,例如風速和溫度,所以它的預報相當準確。"
  },
  {
    "word": "paradigm",
    "pos": "n.",
    "cn_def": "範式;模式",
    "en_def": "a typical model or way of thinking",
    "sentence": "Renewable energy has changed the old {{BLANK}} of power, so homes can now produce electricity as well as use it.",
    "cn": "可再生能源改變了舊有的電力模式,所以家庭現在既能用電也能發電。"
  },
  {
    "word": "discrete",
    "pos": "adj.",
    "cn_def": "分離的;個別的",
    "en_def": "clearly separate",
    "sentence": "The study divided the coast into {{BLANK}} sections, and each part was tested for erosion separately.",
    "cn": "這項研究把海岸劃分為個別的區段,每個部分都分別進行侵蝕檢測。"
  },
  {
    "word": "overwhelmingly",
    "pos": "adv.",
    "cn_def": "壓倒性地",
    "en_def": "very strongly; by a very large amount",
    "sentence": "The public {{BLANK}} supported the new park, so the city cancelled its plan to build a shopping mall there.",
    "cn": "民眾壓倒性地支持新公園,所以市政府取消了在那裡蓋購物中心的計畫。"
  },
  {
    "word": "whereby",
    "pos": "adv.",
    "cn_def": "藉此;憑此",
    "en_def": "by which; through which",
    "sentence": "The town created a system {{BLANK}} people can borrow electric bikes for free, and it has reduced traffic a lot.",
    "cn": "鎮上建立了一個制度,藉此民眾可以免費借用電動自行車,而它大幅減少了車流。"
  },
  {
    "word": "likewise",
    "pos": "adv.",
    "cn_def": "同樣地",
    "en_def": "in the same way",
    "sentence": "Our school turned off the lights at lunchtime, and the school next door did {{BLANK}}, so both saved energy.",
    "cn": "我們學校在午餐時間關燈,隔壁學校也同樣這麼做,所以兩校都節省了能源。"
  },
  {
    "word": "so-called",
    "pos": "adj.",
    "cn_def": "所謂的",
    "en_def": "used to show that a name may not be accurate",
    "sentence": "The {{BLANK}} green bags were made of thick plastic, so they were actually worse for the environment.",
    "cn": "那些所謂的環保袋是用厚塑膠做的,所以它們其實對環境更糟。"
  },
  {
    "word": "unforeseen",
    "pos": "adj.",
    "cn_def": "未預見的;意料之外的",
    "en_def": "not expected or predicted",
    "sentence": "The project faced {{BLANK}} problems, but the engineers solved them and finished the seawall on time.",
    "cn": "這項工程遇到意料之外的問題,但工程師們解決了它們並準時完成海堤。"
  },
  {
    "word": "undertake",
    "pos": "v.",
    "cn_def": "承擔;進行",
    "en_def": "to start doing a job or task",
    "sentence": "The university {{BLANK}} a five-year study of the river, and the results helped the city plan new flood walls.",
    "cn": "這所大學進行了一項為期五年的河川研究,其結果幫助市政府規劃新的防洪牆。",
    "answer": "undertook",
    "alts": [
      "undertake",
      "undertaken"
    ]
  },
  {
    "word": "forthcoming",
    "pos": "adj.",
    "cn_def": "即將到來的",
    "en_def": "going to happen soon",
    "sentence": "The {{BLANK}} climate summit will be held in Asia, so many local groups are preparing to attend.",
    "cn": "即將到來的氣候高峰會將在亞洲舉行,所以許多在地團體正準備參加。"
  },
  {
    "word": "finite",
    "pos": "adj.",
    "cn_def": "有限的",
    "en_def": "having a limit",
    "sentence": "Oil and coal are {{BLANK}} resources, so the world will have to replace them sooner or later.",
    "cn": "石油和煤是有限的資源,所以世界遲早必須取代它們。"
  },
  {
    "word": "constant",
    "pos": "adj.",
    "cn_def": "持續不斷的",
    "en_def": "happening all the time",
    "sentence": "The village faces {{BLANK}} danger from rising water, but many families do not want to leave their land.",
    "cn": "這個村莊面臨上升海水持續不斷的威脅,但許多家庭不想離開他們的土地。"
  },
  {
    "word": "circumstance",
    "pos": "n.",
    "cn_def": "情況;情勢",
    "en_def": "a fact or condition that affects a situation",
    "sentence": "Under normal {{BLANK}} the river is calm, but after heavy rain it can rise by three metres in a few hours.",
    "cn": "在正常情況下河水很平靜,但大雨過後它可能在幾小時內上漲三公尺。"
  },
  {
    "word": "contrast",
    "pos": "n.",
    "cn_def": "對比;差異",
    "en_def": "a clear difference between two things",
    "sentence": "There is a sharp {{BLANK}} between the cool forest and the hot city, so many families go to the mountains on weekends.",
    "cn": "涼爽的森林和炎熱的城市之間有明顯的對比,所以許多家庭週末都會上山。"
  },
  {
    "word": "convention",
    "pos": "n.",
    "cn_def": "公約",
    "en_def": "a formal agreement between countries",
    "sentence": "The United Nations climate {{BLANK}} was signed in 1992, and countries have met every year since then.",
    "cn": "聯合國氣候公約於1992年簽署,此後各國每年都會開會。"
  },
  {
    "word": "ideology",
    "pos": "n.",
    "cn_def": "意識形態",
    "en_def": "a set of political ideas or beliefs",
    "sentence": "Climate policy should be based on science rather than {{BLANK}}, but in some countries it has become very political.",
    "cn": "氣候政策應該以科學為基礎而非意識形態,但在某些國家它已變得非常政治化。"
  },
  {
    "word": "intermediate",
    "pos": "adj.",
    "cn_def": "中間的;中級的",
    "en_def": "between two levels or stages",
    "sentence": "The plan has an {{BLANK}} target for 2030, so the country can check its progress before the final goal.",
    "cn": "這項計畫訂有2030年的中期目標,讓國家能在最終目標之前檢視進度。"
  }
];

const MCQS = [
  {
    "q": "Businesses want _____ about future energy rules, because they need to plan their investments for many years.",
    "options": [
      "fumes",
      "mitigation",
      "absorption",
      "clarity"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The debate on nuclear power needs more _____, because it is not simply good or bad.",
    "options": [
      "cyclone",
      "severity",
      "nuance",
      "shelter"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Saying that planting trees will solve everything is _____, because we also need to cut emissions.",
    "options": [
      "simplistic",
      "drought-resistant",
      "uninhabitable",
      "homeless"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Headlines often _____ scientific reports, so readers may not understand how uncertain some results are.",
    "options": [
      "tackle",
      "oversimplify",
      "reiterate",
      "elaborate"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "We should not _____ from one cold winter, because climate is about long-term patterns, not a single season.",
    "options": [
      "originate",
      "gauge",
      "generalise",
      "irrigate"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The mayor explained the _____ for the new parking fees, and she said the money would pay for more buses.",
    "options": [
      "rationale",
      "damage",
      "climatologist",
      "cyclone"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Carbon per person is a useful _____, but it does not show which countries polluted the most in the past.",
    "options": [
      "equity",
      "accord",
      "algae",
      "metric"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new office became a _____ for green buildings, and other companies copied many of its ideas.",
    "options": [
      "aerosol",
      "benchmark",
      "compromise",
      "coal"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The model uses several _____ such as wind speed and temperature, so its forecasts are quite accurate.",
    "options": [
      "parameter",
      "concession",
      "Celsius",
      "hailstorm"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Renewable energy has changed the old _____ of power, so homes can now produce electricity as well as use it.",
    "options": [
      "levee",
      "hydropower",
      "mitigation",
      "paradigm"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The study divided the coast into _____ sections, and each part was tested for erosion separately.",
    "options": [
      "solar",
      "discrete",
      "incremental",
      "tangible"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The public _____ supported the new park, so the city cancelled its plan to build a shopping mall there.",
    "options": [
      "seemingly",
      "substantially",
      "overwhelmingly",
      "steadily"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The town created a system _____ people can borrow electric bikes for free, and it has reduced traffic a lot.",
    "options": [
      "whereby",
      "respectively",
      "consistently",
      "conversely"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Our school turned off the lights at lunchtime, and the school next door did _____, so both saved energy.",
    "options": [
      "steadily",
      "substantially",
      "seemingly",
      "likewise"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The _____ green bags were made of thick plastic, so they were actually worse for the environment.",
    "options": [
      "feasible",
      "indispensable",
      "so-called",
      "qualitative"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The project faced _____ problems, but the engineers solved them and finished the seawall on time.",
    "options": [
      "comprehensive",
      "unforeseen",
      "cost-effective",
      "equitable"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The university _____ a five-year study of the river, and the results helped the city plan new flood walls.",
    "options": [
      "undertook",
      "deploy",
      "arise",
      "necessitate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The _____ climate summit will be held in Asia, so many local groups are preparing to attend.",
    "options": [
      "temperate",
      "paramount",
      "binding",
      "forthcoming"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Oil and coal are _____ resources, so the world will have to replace them sooner or later.",
    "options": [
      "malnourished",
      "finite",
      "holistic",
      "low-lying"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The village faces _____ danger from rising water, but many families do not want to leave their land.",
    "options": [
      "heat-related",
      "torrential",
      "constant",
      "volatile"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Under normal _____ the river is calm, but after heavy rain it can rise by three metres in a few hours.",
    "options": [
      "circumstance",
      "urgency",
      "hydropower",
      "reforestation"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "There is a sharp _____ between the cool forest and the hot city, so many families go to the mountains on weekends.",
    "options": [
      "biofuel",
      "emission",
      "contrast",
      "condensation"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The United Nations climate _____ was signed in 1992, and countries have met every year since then.",
    "options": [
      "availability",
      "convention",
      "compromise",
      "exhaust"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Climate policy should be based on science rather than _____, but in some countries it has become very political.",
    "options": [
      "smokestack",
      "discrepancy",
      "evacuation",
      "ideology"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The plan has an _____ target for 2030, so the country can check its progress before the final goal.",
    "options": [
      "drastic",
      "intermediate",
      "conspicuous",
      "rigorous"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清楚;明確"
  },
  "nuance": {
    "pos": "n.",
    "en_def": "a small but important difference in meaning",
    "cn_def": "細微差別"
  },
  "simplistic": {
    "pos": "adj.",
    "en_def": "treating a problem as simpler than it really is",
    "cn_def": "過度簡化的"
  },
  "oversimplify": {
    "pos": "v.",
    "en_def": "to describe something in a way that is too simple",
    "cn_def": "過度簡化"
  },
  "generalise": {
    "pos": "v.",
    "en_def": "to say something is true for all cases",
    "cn_def": "概括;一概而論"
  },
  "rationale": {
    "pos": "n.",
    "en_def": "the reasons for a decision",
    "cn_def": "基本原理;理由"
  },
  "metric": {
    "pos": "n.",
    "en_def": "a way of measuring something",
    "cn_def": "指標;衡量標準"
  },
  "benchmark": {
    "pos": "n.",
    "en_def": "a standard used for comparison",
    "cn_def": "基準;標竿"
  },
  "parameter": {
    "pos": "n.",
    "en_def": "a limit or rule that controls how something is done",
    "cn_def": "參數;界限"
  },
  "paradigm": {
    "pos": "n.",
    "en_def": "a typical model or way of thinking",
    "cn_def": "範式;模式"
  },
  "discrete": {
    "pos": "adj.",
    "en_def": "clearly separate",
    "cn_def": "分離的;個別的"
  },
  "overwhelmingly": {
    "pos": "adv.",
    "en_def": "very strongly; by a very large amount",
    "cn_def": "壓倒性地"
  },
  "whereby": {
    "pos": "adv.",
    "en_def": "by which; through which",
    "cn_def": "藉此;憑此"
  },
  "likewise": {
    "pos": "adv.",
    "en_def": "in the same way",
    "cn_def": "同樣地"
  },
  "so-called": {
    "pos": "adj.",
    "en_def": "used to show that a name may not be accurate",
    "cn_def": "所謂的"
  },
  "unforeseen": {
    "pos": "adj.",
    "en_def": "not expected or predicted",
    "cn_def": "未預見的;意料之外的"
  },
  "undertake": {
    "pos": "v.",
    "en_def": "to start doing a job or task",
    "cn_def": "承擔;進行"
  },
  "undertook": {
    "pos": "v.",
    "en_def": "to start doing a job or task",
    "cn_def": "承擔;進行"
  },
  "forthcoming": {
    "pos": "adj.",
    "en_def": "going to happen soon",
    "cn_def": "即將到來的"
  },
  "finite": {
    "pos": "adj.",
    "en_def": "having a limit",
    "cn_def": "有限的"
  },
  "constant": {
    "pos": "adj.",
    "en_def": "happening all the time",
    "cn_def": "持續不斷的"
  },
  "circumstance": {
    "pos": "n.",
    "en_def": "a fact or condition that affects a situation",
    "cn_def": "情況;情勢"
  },
  "contrast": {
    "pos": "n.",
    "en_def": "a clear difference between two things",
    "cn_def": "對比;差異"
  },
  "convention": {
    "pos": "n.",
    "en_def": "a formal agreement between countries",
    "cn_def": "公約"
  },
  "ideology": {
    "pos": "n.",
    "en_def": "a set of political ideas or beliefs",
    "cn_def": "意識形態"
  },
  "intermediate": {
    "pos": "adj.",
    "en_def": "between two levels or stages",
    "cn_def": "中間的;中級的"
  },
  "fumes": {
    "pos": "n.",
    "en_def": "strong, unpleasant smoke or gas",
    "cn_def": "(有害的)煙霧;廢氣"
  },
  "mitigation": {
    "pos": "n.",
    "en_def": "actions that reduce how bad something is",
    "cn_def": "減緩;緩解"
  },
  "absorption": {
    "pos": "n.",
    "en_def": "the process of taking something in",
    "cn_def": "吸收(作用)"
  },
  "cyclone": {
    "pos": "n.",
    "en_def": "a violent storm with strong circular winds",
    "cn_def": "氣旋;熱帶風暴"
  },
  "severity": {
    "pos": "n.",
    "en_def": "how serious or bad something is",
    "cn_def": "嚴重程度"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place that protects people from danger or bad weather",
    "cn_def": "避難所"
  },
  "drought-resistant": {
    "pos": "adj.",
    "en_def": "able to grow well with little water",
    "cn_def": "耐旱的"
  },
  "uninhabitable": {
    "pos": "adj.",
    "en_def": "not safe or suitable for people to live in",
    "cn_def": "不適合居住的"
  },
  "homeless": {
    "pos": "adj.",
    "en_def": "having no place to live",
    "cn_def": "無家可歸的"
  },
  "tackle": {
    "pos": "v.",
    "en_def": "to deal with a difficult problem",
    "cn_def": "處理;應對"
  },
  "reiterate": {
    "pos": "v.",
    "en_def": "to say something again for emphasis",
    "cn_def": "重申"
  },
  "elaborate": {
    "pos": "v.",
    "en_def": "to give more details",
    "cn_def": "詳細說明"
  },
  "originate": {
    "pos": "v.",
    "en_def": "to begin or come from somewhere",
    "cn_def": "起源;源自"
  },
  "gauge": {
    "pos": "v.",
    "en_def": "to judge or measure something",
    "cn_def": "評估;估量"
  },
  "irrigate": {
    "pos": "v.",
    "en_def": "to supply water to land through pipes or channels",
    "cn_def": "灌溉"
  },
  "damage": {
    "pos": "n.",
    "en_def": "physical harm that makes something less useful or valuable",
    "cn_def": "損害;損壞"
  },
  "climatologist": {
    "pos": "n.",
    "en_def": "a scientist who studies climate over long periods",
    "cn_def": "氣候學家"
  },
  "equity": {
    "pos": "n.",
    "en_def": "fairness and equal treatment",
    "cn_def": "公平;公正"
  },
  "accord": {
    "pos": "n.",
    "en_def": "an official agreement between countries",
    "cn_def": "協定;協議"
  },
  "algae": {
    "pos": "n.",
    "en_def": "very simple plants that grow in water",
    "cn_def": "藻類"
  },
  "aerosol": {
    "pos": "n.",
    "en_def": "tiny drops or bits floating in the air",
    "cn_def": "氣溶膠;懸浮微粒"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement where each side gives up something",
    "cn_def": "妥協;折衷"
  },
  "coal": {
    "pos": "n.",
    "en_def": "a hard black rock burned to make heat or electricity",
    "cn_def": "煤"
  },
  "concession": {
    "pos": "n.",
    "en_def": "something you agree to give up in a discussion",
    "cn_def": "讓步"
  },
  "celsius": {
    "pos": "n.",
    "en_def": "a scale for measuring temperature where water freezes at 0",
    "cn_def": "攝氏"
  },
  "hailstorm": {
    "pos": "n.",
    "en_def": "a storm in which balls of ice fall from the sky",
    "cn_def": "冰雹暴"
  },
  "levee": {
    "pos": "n.",
    "en_def": "a raised bank built beside a river to stop flooding",
    "cn_def": "河堤;防洪堤"
  },
  "hydropower": {
    "pos": "n.",
    "en_def": "electricity made from moving water",
    "cn_def": "水力發電"
  },
  "solar": {
    "pos": "adj.",
    "en_def": "connected with the sun",
    "cn_def": "太陽的"
  },
  "incremental": {
    "pos": "adj.",
    "en_def": "happening in small steps",
    "cn_def": "逐步的;漸進的"
  },
  "tangible": {
    "pos": "adj.",
    "en_def": "real and able to be seen or measured",
    "cn_def": "具體的;實質的"
  },
  "seemingly": {
    "pos": "adv.",
    "en_def": "appearing to be true, but perhaps not",
    "cn_def": "表面上;看似"
  },
  "substantially": {
    "pos": "adv.",
    "en_def": "by a large amount",
    "cn_def": "大幅地;相當多地"
  },
  "steadily": {
    "pos": "adv.",
    "en_def": "gradually and in a regular way",
    "cn_def": "穩定地;逐步地"
  },
  "respectively": {
    "pos": "adv.",
    "en_def": "in the same order as the things just mentioned",
    "cn_def": "分別地"
  },
  "consistently": {
    "pos": "adv.",
    "en_def": "always in the same way",
    "cn_def": "一貫地;始終"
  },
  "conversely": {
    "pos": "adv.",
    "en_def": "in the opposite way",
    "cn_def": "相反地"
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible and practical to do",
    "cn_def": "可行的"
  },
  "indispensable": {
    "pos": "adj.",
    "en_def": "too important to be without",
    "cn_def": "不可或缺的"
  },
  "qualitative": {
    "pos": "adj.",
    "en_def": "about quality rather than numbers",
    "cn_def": "質性的;定性的"
  },
  "comprehensive": {
    "pos": "adj.",
    "en_def": "including everything that is needed",
    "cn_def": "全面的;綜合的"
  },
  "cost-effective": {
    "pos": "adj.",
    "en_def": "giving good results for the money spent",
    "cn_def": "符合成本效益的"
  },
  "equitable": {
    "pos": "adj.",
    "en_def": "fair to everyone",
    "cn_def": "公平的;公正的"
  },
  "deploy": {
    "pos": "v.",
    "en_def": "to put something into use or action",
    "cn_def": "部署;運用"
  },
  "arise": {
    "pos": "v.",
    "en_def": "to begin to happen or exist",
    "cn_def": "出現;產生"
  },
  "necessitate": {
    "pos": "v.",
    "en_def": "to make something necessary",
    "cn_def": "使成為必要"
  },
  "temperate": {
    "pos": "adj.",
    "en_def": "not very hot and not very cold",
    "cn_def": "溫和的;溫帶的"
  },
  "paramount": {
    "pos": "adj.",
    "en_def": "more important than anything else",
    "cn_def": "最重要的;至高無上的"
  },
  "binding": {
    "pos": "adj.",
    "en_def": "that must be obeyed by law",
    "cn_def": "具有約束力的"
  },
  "malnourished": {
    "pos": "adj.",
    "en_def": "weak or ill because of not eating enough healthy food",
    "cn_def": "營養不良的"
  },
  "holistic": {
    "pos": "adj.",
    "en_def": "looking at the whole situation, not just parts",
    "cn_def": "全面的;整體的"
  },
  "low-lying": {
    "pos": "adj.",
    "en_def": "close to sea level",
    "cn_def": "地勢低窪的"
  },
  "heat-related": {
    "pos": "adj.",
    "en_def": "caused by very hot weather",
    "cn_def": "與高溫相關的"
  },
  "torrential": {
    "pos": "adj.",
    "en_def": "used to describe very heavy rain",
    "cn_def": "(雨)傾盆的;猛烈的"
  },
  "volatile": {
    "pos": "adj.",
    "en_def": "likely to change suddenly",
    "cn_def": "多變的;不穩定的"
  },
  "urgency": {
    "pos": "n.",
    "en_def": "the need to act quickly",
    "cn_def": "緊迫性;急迫"
  },
  "reforestation": {
    "pos": "n.",
    "en_def": "planting trees in an area where forests were cut down",
    "cn_def": "重新造林"
  },
  "biofuel": {
    "pos": "n.",
    "en_def": "fuel made from plants or animal waste",
    "cn_def": "生質燃料"
  },
  "emission": {
    "pos": "n.",
    "en_def": "gas or smoke that is sent into the air",
    "cn_def": "排放(物)"
  },
  "condensation": {
    "pos": "n.",
    "en_def": "water drops that form when warm air touches something cold",
    "cn_def": "凝結(水珠)"
  },
  "availability": {
    "pos": "n.",
    "en_def": "how easy something is to get or use",
    "cn_def": "可取得性;供應"
  },
  "exhaust": {
    "pos": "n.",
    "en_def": "waste gas that comes out of an engine",
    "cn_def": "(引擎)廢氣"
  },
  "smokestack": {
    "pos": "n.",
    "en_def": "a tall chimney on a factory",
    "cn_def": "(工廠)煙囪"
  },
  "discrepancy": {
    "pos": "n.",
    "en_def": "a difference between things that should match",
    "cn_def": "差異;出入"
  },
  "evacuation": {
    "pos": "n.",
    "en_def": "the act of moving people to a safe place",
    "cn_def": "撤離;疏散"
  },
  "drastic": {
    "pos": "adj.",
    "en_def": "extreme and having a strong effect",
    "cn_def": "激烈的;大幅的"
  },
  "conspicuous": {
    "pos": "adj.",
    "en_def": "very easy to see or notice",
    "cn_def": "顯眼的;明顯的"
  },
  "rigorous": {
    "pos": "adj.",
    "en_def": "very careful and thorough",
    "cn_def": "嚴謹的;嚴格的"
  }
};

const EXTRA_GLOSSES = {};
