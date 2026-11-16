// Topic 3 Subunit 10 Quiz Data: Academic Words 學術單字 3 (oppose – urgency)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S10 - Academic Words 學術單字 3 (oppose – urgency)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "oppose",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to disagree with and try to stop something",
    "sentence": "Local residents {{BLANK}} the new airport, because it would destroy farmland and increase air pollution.",
    "cn": "當地居民反對興建新機場,因為它會破壞農地並增加空氣污染。"
  },
  {
    "word": "reconcile",
    "pos": "v.",
    "cn_def": "調和;使一致",
    "en_def": "to find a way for two different ideas to exist together",
    "sentence": "It is hard to {{BLANK}} economic growth with lower emissions, but some countries have managed to do both.",
    "cn": "要調和經濟成長與降低排放很困難,但有些國家已經成功做到兩者兼顧。"
  },
  {
    "word": "concession",
    "pos": "n.",
    "cn_def": "讓步",
    "en_def": "something you agree to give up in a discussion",
    "sentence": "Rich countries made a {{BLANK}} on climate funding, so the talks finally ended with an agreement.",
    "cn": "富國在氣候資金上做出讓步,所以談判最終以達成協議收場。"
  },
  {
    "word": "levy",
    "pos": "n.",
    "cn_def": "徵收的稅;稅款",
    "en_def": "an official charge or tax",
    "sentence": "The airport introduced a small {{BLANK}} on every flight, and the money is used to plant forests.",
    "cn": "機場對每個航班徵收一筆小額稅款,這筆錢被用來種植森林。"
  },
  {
    "word": "deploy",
    "pos": "v.",
    "cn_def": "部署;運用",
    "en_def": "to put something into use or action",
    "sentence": "The government will {{BLANK}} more soldiers and boats to the coast, because a strong typhoon is on its way.",
    "cn": "政府將在沿海部署更多士兵和船隻,因為一個強烈颱風正在逼近。"
  },
  {
    "word": "invest",
    "pos": "v.",
    "cn_def": "投資",
    "en_def": "to put money into something to get a benefit later",
    "sentence": "The city decided to {{BLANK}} in bike lanes, and now many students ride to school instead of taking the bus.",
    "cn": "市政府決定投資興建自行車道,現在許多學生改騎單車上學而不搭公車。"
  },
  {
    "word": "expenditure",
    "pos": "n.",
    "cn_def": "支出;花費",
    "en_def": "the amount of money spent",
    "sentence": "Government {{BLANK}} on disaster recovery has doubled, so less money is left for schools and hospitals.",
    "cn": "政府在災後復原上的支出已經翻倍,所以留給學校和醫院的錢變少了。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的",
    "en_def": "cheap enough for most people to buy",
    "sentence": "Electric scooters are now more {{BLANK}}, so many young workers have changed from petrol models.",
    "cn": "電動機車現在更負擔得起,所以許多年輕上班族已經從汽油車款換過去了。"
  },
  {
    "word": "cost-effective",
    "pos": "adj.",
    "cn_def": "符合成本效益的",
    "en_def": "giving good results for the money spent",
    "sentence": "Planting mangroves is a {{BLANK}} way to protect the coast, and it also creates homes for fish and birds.",
    "cn": "種植紅樹林是保護海岸符合成本效益的方法,同時也為魚類和鳥類創造棲息地。"
  },
  {
    "word": "interim",
    "pos": "adj.",
    "cn_def": "臨時的;過渡期的",
    "en_def": "temporary, until something permanent is ready",
    "sentence": "The families moved into {{BLANK}} housing after the flood, but they hope to return home before New Year.",
    "cn": "這些家庭在水災後搬進了臨時住所,但他們希望在新年前能回家。"
  },
  {
    "word": "transitional",
    "pos": "adj.",
    "cn_def": "過渡的;轉型的",
    "en_def": "happening while changing from one state to another",
    "sentence": "Natural gas is often called a {{BLANK}} fuel, because it is cleaner than coal but still not truly clean.",
    "cn": "天然氣常被稱為過渡燃料,因為它比煤乾淨,但仍不是真正的潔淨能源。"
  },
  {
    "word": "obligation",
    "pos": "n.",
    "cn_def": "義務;責任",
    "en_def": "something you must do because of a law or promise",
    "sentence": "Rich nations have an {{BLANK}} to help poorer ones, because they produced most of the carbon in the past.",
    "cn": "富國有義務幫助較貧窮的國家,因為它們過去製造了大部分的碳。"
  },
  {
    "word": "mandate",
    "pos": "n.",
    "cn_def": "命令;授權;規定",
    "en_def": "an official order to do something",
    "sentence": "The new {{BLANK}} requires all new buildings to have solar panels, so builders are changing their designs.",
    "cn": "新的規定要求所有新建築都必須裝設太陽能板,所以建商正在修改設計。"
  },
  {
    "word": "binding",
    "pos": "adj.",
    "cn_def": "具有約束力的",
    "en_def": "that must be obeyed by law",
    "sentence": "The agreement is not legally {{BLANK}}, so countries cannot be punished if they miss their targets.",
    "cn": "這份協議在法律上不具約束力,所以各國即使未達目標也不會受到處罰。"
  },
  {
    "word": "enact",
    "pos": "v.",
    "cn_def": "制定(法律);頒布",
    "en_def": "to make a law",
    "sentence": "The government plans to {{BLANK}} a new climate law this year, and it will set limits for every industry.",
    "cn": "政府計畫今年制定一部新的氣候法,而它將為每個產業設定上限。"
  },
  {
    "word": "dissent",
    "pos": "n.",
    "cn_def": "異議;不同意見",
    "en_def": "strong disagreement with an official opinion",
    "sentence": "There was some {{BLANK}} among the scientists, but most of them agreed that the data showed clear warming.",
    "cn": "科學家之間有一些異議,但他們大多數人都同意數據顯示出明顯的暖化。"
  },
  {
    "word": "denial",
    "pos": "n.",
    "cn_def": "否認;否定",
    "en_def": "refusing to accept that something is true",
    "sentence": "Climate {{BLANK}} is less common today, because people can see the effects of extreme weather with their own eyes.",
    "cn": "氣候否定論如今較不常見,因為人們能親眼看見極端天氣的影響。"
  },
  {
    "word": "credible",
    "pos": "adj.",
    "cn_def": "可信的",
    "en_def": "able to be believed or trusted",
    "sentence": "Students should use {{BLANK}} sources for their climate projects, so they should check who wrote each website.",
    "cn": "學生的氣候專題應該使用可信的資料來源,所以他們應該查看每個網站是誰寫的。"
  },
  {
    "word": "rigorous",
    "pos": "adj.",
    "cn_def": "嚴謹的;嚴格的",
    "en_def": "very careful and thorough",
    "sentence": "The study used {{BLANK}} methods, and other scientists were able to repeat it and get the same results.",
    "cn": "這項研究使用了嚴謹的方法,其他科學家也能重複實驗並得到相同結果。"
  },
  {
    "word": "robust",
    "pos": "adj.",
    "cn_def": "強健的;穩固的",
    "en_def": "strong and unlikely to fail",
    "sentence": "The city needs a {{BLANK}} water system, so it will not fail during the next long drought.",
    "cn": "這座城市需要一個穩固的供水系統,這樣在下一次長期乾旱時才不會失靈。"
  },
  {
    "word": "peer-reviewed",
    "pos": "adj.",
    "cn_def": "經同儕審查的",
    "en_def": "checked by other experts before being published",
    "sentence": "The report was based on {{BLANK}} research, so the government took its warnings very seriously.",
    "cn": "這份報告是以經同儕審查的研究為基礎,所以政府非常認真看待其中的警告。"
  },
  {
    "word": "unanimous",
    "pos": "adj.",
    "cn_def": "一致同意的",
    "en_def": "agreed by everyone",
    "sentence": "The vote was {{BLANK}}, and every member of the student council supported the plan to ban plastic bottles.",
    "cn": "這次投票是全體一致同意,學生會的每位成員都支持禁用塑膠瓶的計畫。"
  },
  {
    "word": "contentious",
    "pos": "adj.",
    "cn_def": "有爭議的",
    "en_def": "likely to cause disagreement",
    "sentence": "Building a dam in the valley is a {{BLANK}} issue, because it brings clean power but floods people's homes.",
    "cn": "在山谷中興建水壩是一個有爭議的議題,因為它帶來潔淨電力卻也淹沒了人們的家園。"
  },
  {
    "word": "pressing",
    "pos": "adj.",
    "cn_def": "緊迫的;迫切的",
    "en_def": "needing to be dealt with now",
    "sentence": "Clean water is the most {{BLANK}} problem after the flood, so the army is bringing in large water tanks.",
    "cn": "乾淨的水是水災過後最迫切的問題,所以軍隊正在運來大型水箱。"
  },
  {
    "word": "urgency",
    "pos": "n.",
    "cn_def": "緊迫性;急迫",
    "en_def": "the need to act quickly",
    "sentence": "Young people speak about climate change with real {{BLANK}}, because they will live with the results for the longest time.",
    "cn": "年輕人談論氣候變遷時帶著真切的急迫感,因為他們將承受後果最久。"
  }
];

const MCQS = [
  {
    "q": "Local residents _____ the new airport, because it would destroy farmland and increase air pollution.",
    "options": [
      "proliferate",
      "oppose",
      "invoke",
      "reiterate"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "It is hard to _____ economic growth with lower emissions, but some countries have managed to do both.",
    "options": [
      "manifest",
      "convey",
      "reconcile",
      "devastate"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Rich countries made a _____ on climate funding, so the talks finally ended with an agreement.",
    "options": [
      "scarcity",
      "typhoon",
      "rainwater",
      "concession"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The airport introduced a small _____ on every flight, and the money is used to plant forests.",
    "options": [
      "levy",
      "fertiliser",
      "reforestation",
      "summit"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The government will _____ more soldiers and boats to the coast, because a strong typhoon is on its way.",
    "options": [
      "outline",
      "submerge",
      "deploy",
      "mediate"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The city decided to _____ in bike lanes, and now many students ride to school instead of taking the bus.",
    "options": [
      "escalate",
      "invest",
      "refute",
      "retrofit"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Government _____ on disaster recovery has doubled, so less money is left for schools and hospitals.",
    "options": [
      "expenditure",
      "avalanche",
      "sphere",
      "precipitation"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Electric scooters are now more _____, so many young workers have changed from petrol models.",
    "options": [
      "prolonged",
      "conclusive",
      "impartial",
      "affordable"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Planting mangroves is a _____ way to protect the coast, and it also creates homes for fish and birds.",
    "options": [
      "tropical",
      "qualitative",
      "cost-effective",
      "holistic"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The families moved into _____ housing after the flood, but they hope to return home before New Year.",
    "options": [
      "flood-prone",
      "impartial",
      "renewable",
      "interim"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Natural gas is often called a _____ fuel, because it is cleaner than coal but still not truly clean.",
    "options": [
      "feasible",
      "transitional",
      "intermittent",
      "geothermal"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Rich nations have an _____ to help poorer ones, because they produced most of the carbon in the past.",
    "options": [
      "obligation",
      "liability",
      "paradigm",
      "hardship"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The new _____ requires all new buildings to have solar panels, so builders are changing their designs.",
    "options": [
      "displacement",
      "coal",
      "mandate",
      "carbon"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The agreement is not legally _____, so countries cannot be punished if they miss their targets.",
    "options": [
      "infectious",
      "coastal",
      "cumulative",
      "binding"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The government plans to _____ a new climate law this year, and it will set limits for every industry.",
    "options": [
      "enact",
      "retrofit",
      "encompass",
      "combat"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "There was some _____ among the scientists, but most of them agreed that the data showed clear warming.",
    "options": [
      "rationale",
      "dissent",
      "accord",
      "seawall"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Climate _____ is less common today, because people can see the effects of extreme weather with their own eyes.",
    "options": [
      "gust",
      "monsoon",
      "protest",
      "denial"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Students should use _____ sources for their climate projects, so they should check who wrote each website.",
    "options": [
      "credible",
      "provisional",
      "prolonged",
      "heat-trapping"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The study used _____ methods, and other scientists were able to repeat it and get the same results.",
    "options": [
      "cumulative",
      "rigorous",
      "disproportionate",
      "salient"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The city needs a _____ water system, so it will not fail during the next long drought.",
    "options": [
      "tentative",
      "provisional",
      "robust",
      "forthcoming"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The report was based on _____ research, so the government took its warnings very seriously.",
    "options": [
      "ultraviolet",
      "peer-reviewed",
      "uninhabitable",
      "fragile"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The vote was _____, and every member of the student council supported the plan to ban plastic bottles.",
    "options": [
      "constant",
      "infectious",
      "resilient",
      "unanimous"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Building a dam in the valley is a _____ issue, because it brings clean power but floods people's homes.",
    "options": [
      "indispensable",
      "forthcoming",
      "contentious",
      "conventional"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Clean water is the most _____ problem after the flood, so the army is bringing in large water tanks.",
    "options": [
      "pressing",
      "lenient",
      "unforeseen",
      "humid"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Young people speak about climate change with real _____, because they will live with the results for the longest time.",
    "options": [
      "avalanche",
      "air-conditioning",
      "urgency",
      "refugee"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "oppose": {
    "pos": "v.",
    "en_def": "to disagree with and try to stop something",
    "cn_def": "反對"
  },
  "reconcile": {
    "pos": "v.",
    "en_def": "to find a way for two different ideas to exist together",
    "cn_def": "調和;使一致"
  },
  "concession": {
    "pos": "n.",
    "en_def": "something you agree to give up in a discussion",
    "cn_def": "讓步"
  },
  "levy": {
    "pos": "n.",
    "en_def": "an official charge or tax",
    "cn_def": "徵收的稅;稅款"
  },
  "deploy": {
    "pos": "v.",
    "en_def": "to put something into use or action",
    "cn_def": "部署;運用"
  },
  "invest": {
    "pos": "v.",
    "en_def": "to put money into something to get a benefit later",
    "cn_def": "投資"
  },
  "expenditure": {
    "pos": "n.",
    "en_def": "the amount of money spent",
    "cn_def": "支出;花費"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "cheap enough for most people to buy",
    "cn_def": "負擔得起的"
  },
  "cost-effective": {
    "pos": "adj.",
    "en_def": "giving good results for the money spent",
    "cn_def": "符合成本效益的"
  },
  "interim": {
    "pos": "adj.",
    "en_def": "temporary, until something permanent is ready",
    "cn_def": "臨時的;過渡期的"
  },
  "transitional": {
    "pos": "adj.",
    "en_def": "happening while changing from one state to another",
    "cn_def": "過渡的;轉型的"
  },
  "obligation": {
    "pos": "n.",
    "en_def": "something you must do because of a law or promise",
    "cn_def": "義務;責任"
  },
  "mandate": {
    "pos": "n.",
    "en_def": "an official order to do something",
    "cn_def": "命令;授權;規定"
  },
  "binding": {
    "pos": "adj.",
    "en_def": "that must be obeyed by law",
    "cn_def": "具有約束力的"
  },
  "enact": {
    "pos": "v.",
    "en_def": "to make a law",
    "cn_def": "制定(法律);頒布"
  },
  "dissent": {
    "pos": "n.",
    "en_def": "strong disagreement with an official opinion",
    "cn_def": "異議;不同意見"
  },
  "denial": {
    "pos": "n.",
    "en_def": "refusing to accept that something is true",
    "cn_def": "否認;否定"
  },
  "credible": {
    "pos": "adj.",
    "en_def": "able to be believed or trusted",
    "cn_def": "可信的"
  },
  "rigorous": {
    "pos": "adj.",
    "en_def": "very careful and thorough",
    "cn_def": "嚴謹的;嚴格的"
  },
  "robust": {
    "pos": "adj.",
    "en_def": "strong and unlikely to fail",
    "cn_def": "強健的;穩固的"
  },
  "peer-reviewed": {
    "pos": "adj.",
    "en_def": "checked by other experts before being published",
    "cn_def": "經同儕審查的"
  },
  "unanimous": {
    "pos": "adj.",
    "en_def": "agreed by everyone",
    "cn_def": "一致同意的"
  },
  "contentious": {
    "pos": "adj.",
    "en_def": "likely to cause disagreement",
    "cn_def": "有爭議的"
  },
  "pressing": {
    "pos": "adj.",
    "en_def": "needing to be dealt with now",
    "cn_def": "緊迫的;迫切的"
  },
  "urgency": {
    "pos": "n.",
    "en_def": "the need to act quickly",
    "cn_def": "緊迫性;急迫"
  },
  "proliferate": {
    "pos": "v.",
    "en_def": "to increase quickly in number",
    "cn_def": "激增;迅速增加"
  },
  "invoke": {
    "pos": "v.",
    "en_def": "to use a law or rule to support an action",
    "cn_def": "援引;行使"
  },
  "reiterate": {
    "pos": "v.",
    "en_def": "to say something again for emphasis",
    "cn_def": "重申"
  },
  "manifest": {
    "pos": "v.",
    "en_def": "to show something clearly",
    "cn_def": "顯現;表現"
  },
  "convey": {
    "pos": "v.",
    "en_def": "to communicate an idea or feeling",
    "cn_def": "傳達"
  },
  "devastate": {
    "pos": "v.",
    "en_def": "to destroy or damage something very badly",
    "cn_def": "摧毀;使荒廢"
  },
  "scarcity": {
    "pos": "n.",
    "en_def": "a situation in which there is not enough of something",
    "cn_def": "缺乏;短缺"
  },
  "typhoon": {
    "pos": "n.",
    "en_def": "a violent tropical storm in the western Pacific",
    "cn_def": "颱風"
  },
  "rainwater": {
    "pos": "n.",
    "en_def": "water that has fallen as rain",
    "cn_def": "雨水"
  },
  "fertiliser": {
    "pos": "n.",
    "en_def": "a substance added to soil to help plants grow",
    "cn_def": "肥料"
  },
  "reforestation": {
    "pos": "n.",
    "en_def": "planting trees in an area where forests were cut down",
    "cn_def": "重新造林"
  },
  "summit": {
    "pos": "n.",
    "en_def": "an important meeting between leaders",
    "cn_def": "高峰會"
  },
  "outline": {
    "pos": "v.",
    "en_def": "to describe the main points of something",
    "cn_def": "概述;簡述"
  },
  "submerge": {
    "pos": "v.",
    "en_def": "to go or put completely under water",
    "cn_def": "淹沒;沉入水中"
  },
  "mediate": {
    "pos": "v.",
    "en_def": "to help two sides reach an agreement",
    "cn_def": "調解;斡旋"
  },
  "escalate": {
    "pos": "v.",
    "en_def": "to become more serious or bigger",
    "cn_def": "升級;加劇"
  },
  "refute": {
    "pos": "v.",
    "en_def": "to prove that something is wrong",
    "cn_def": "駁斥;反駁"
  },
  "retrofit": {
    "pos": "v.",
    "en_def": "to add new parts to an old building or machine",
    "cn_def": "翻修改裝;加裝"
  },
  "avalanche": {
    "pos": "n.",
    "en_def": "a large amount of snow falling down a mountain",
    "cn_def": "雪崩"
  },
  "sphere": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範圍"
  },
  "precipitation": {
    "pos": "n.",
    "en_def": "rain, snow or hail that falls from the sky",
    "cn_def": "降水(量)"
  },
  "prolonged": {
    "pos": "adj.",
    "en_def": "lasting for a long time",
    "cn_def": "長期的;持久的"
  },
  "conclusive": {
    "pos": "adj.",
    "en_def": "proving something without doubt",
    "cn_def": "確鑿的;決定性的"
  },
  "impartial": {
    "pos": "adj.",
    "en_def": "not supporting one side more than another",
    "cn_def": "公正的;不偏袒的"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from the hot area near the equator",
    "cn_def": "熱帶的"
  },
  "qualitative": {
    "pos": "adj.",
    "en_def": "about quality rather than numbers",
    "cn_def": "質性的;定性的"
  },
  "holistic": {
    "pos": "adj.",
    "en_def": "looking at the whole situation, not just parts",
    "cn_def": "全面的;整體的"
  },
  "flood-prone": {
    "pos": "adj.",
    "en_def": "likely to flood",
    "cn_def": "易淹水的"
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "able to be replaced naturally, like sun and wind",
    "cn_def": "可再生的"
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible and practical to do",
    "cn_def": "可行的"
  },
  "intermittent": {
    "pos": "adj.",
    "en_def": "stopping and starting again",
    "cn_def": "間歇性的"
  },
  "geothermal": {
    "pos": "adj.",
    "en_def": "using heat from inside the Earth",
    "cn_def": "地熱的"
  },
  "liability": {
    "pos": "n.",
    "en_def": "legal responsibility for something",
    "cn_def": "(法律)責任"
  },
  "paradigm": {
    "pos": "n.",
    "en_def": "a typical model or way of thinking",
    "cn_def": "範式;模式"
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a difficult situation, often without enough money or food",
    "cn_def": "苦難;困境"
  },
  "displacement": {
    "pos": "n.",
    "en_def": "the forced movement of people from their homes",
    "cn_def": "流離失所;被迫遷移"
  },
  "coal": {
    "pos": "n.",
    "en_def": "a hard black rock burned to make heat or electricity",
    "cn_def": "煤"
  },
  "carbon": {
    "pos": "n.",
    "en_def": "a chemical element found in coal, oil and living things",
    "cn_def": "碳"
  },
  "infectious": {
    "pos": "adj.",
    "en_def": "able to spread from one person to another",
    "cn_def": "傳染性的"
  },
  "coastal": {
    "pos": "adj.",
    "en_def": "on or near the sea coast",
    "cn_def": "沿海的"
  },
  "cumulative": {
    "pos": "adj.",
    "en_def": "increasing by adding one thing after another",
    "cn_def": "累積的"
  },
  "encompass": {
    "pos": "v.",
    "en_def": "to include many different things",
    "cn_def": "包含;涵蓋"
  },
  "combat": {
    "pos": "v.",
    "en_def": "to try to stop something harmful",
    "cn_def": "對抗;打擊"
  },
  "rationale": {
    "pos": "n.",
    "en_def": "the reasons for a decision",
    "cn_def": "基本原理;理由"
  },
  "accord": {
    "pos": "n.",
    "en_def": "an official agreement between countries",
    "cn_def": "協定;協議"
  },
  "seawall": {
    "pos": "n.",
    "en_def": "a strong wall built to stop the sea from flooding land",
    "cn_def": "海堤"
  },
  "gust": {
    "pos": "n.",
    "en_def": "a sudden strong rush of wind",
    "cn_def": "一陣強風"
  },
  "monsoon": {
    "pos": "n.",
    "en_def": "the season of heavy rain in South and Southeast Asia",
    "cn_def": "季風(雨季)"
  },
  "protest": {
    "pos": "n.",
    "en_def": "a public event where people show they disagree",
    "cn_def": "抗議(活動)"
  },
  "provisional": {
    "pos": "adj.",
    "en_def": "arranged for now but may change later",
    "cn_def": "臨時的;暫定的"
  },
  "heat-trapping": {
    "pos": "adj.",
    "en_def": "keeping heat in and not letting it escape",
    "cn_def": "吸熱的;困住熱能的"
  },
  "disproportionate": {
    "pos": "adj.",
    "en_def": "too large or too small compared with something else",
    "cn_def": "不成比例的"
  },
  "salient": {
    "pos": "adj.",
    "en_def": "most important or noticeable",
    "cn_def": "最顯著的;重要的"
  },
  "tentative": {
    "pos": "adj.",
    "en_def": "not certain or final",
    "cn_def": "暫定的;試探性的"
  },
  "forthcoming": {
    "pos": "adj.",
    "en_def": "going to happen soon",
    "cn_def": "即將到來的"
  },
  "ultraviolet": {
    "pos": "adj.",
    "en_def": "describing invisible light from the sun that can burn skin",
    "cn_def": "紫外線的"
  },
  "uninhabitable": {
    "pos": "adj.",
    "en_def": "not safe or suitable for people to live in",
    "cn_def": "不適合居住的"
  },
  "fragile": {
    "pos": "adj.",
    "en_def": "easily broken or damaged",
    "cn_def": "脆弱的"
  },
  "constant": {
    "pos": "adj.",
    "en_def": "happening all the time",
    "cn_def": "持續不斷的"
  },
  "resilient": {
    "pos": "adj.",
    "en_def": "able to recover quickly after something bad happens",
    "cn_def": "有韌性的;能迅速復原的"
  },
  "indispensable": {
    "pos": "adj.",
    "en_def": "too important to be without",
    "cn_def": "不可或缺的"
  },
  "conventional": {
    "pos": "adj.",
    "en_def": "normal and traditional",
    "cn_def": "傳統的;常規的"
  },
  "lenient": {
    "pos": "adj.",
    "en_def": "not strict enough",
    "cn_def": "寬鬆的;寬容的"
  },
  "unforeseen": {
    "pos": "adj.",
    "en_def": "not expected or predicted",
    "cn_def": "未預見的;意料之外的"
  },
  "humid": {
    "pos": "adj.",
    "en_def": "hot and wet in an uncomfortable way",
    "cn_def": "潮濕悶熱的"
  },
  "air-conditioning": {
    "pos": "n.",
    "en_def": "a system that keeps the air in a building cool",
    "cn_def": "空調;冷氣"
  },
  "refugee": {
    "pos": "n.",
    "en_def": "a person forced to leave their home or country",
    "cn_def": "難民"
  }
};

const EXTRA_GLOSSES = {};
