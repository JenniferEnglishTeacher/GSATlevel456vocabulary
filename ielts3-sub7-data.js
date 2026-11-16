// Topic 3 Subunit 7 Quiz Data: Mitigation, Energy & Climate Policy 減緩、能源與氣候政策
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S07 - Mitigation, Energy & Climate Policy 減緩、能源與氣候政策",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "mitigation",
    "pos": "n.",
    "cn_def": "減緩;緩解",
    "en_def": "actions that reduce how bad something is",
    "sentence": "Climate {{BLANK}} means cutting emissions, while adaptation means preparing for the changes that are already coming.",
    "cn": "氣候減緩指的是減少排放,而調適則是為已經到來的變化做準備。"
  },
  {
    "word": "renewable",
    "pos": "adj.",
    "cn_def": "可再生的",
    "en_def": "able to be replaced naturally, like sun and wind",
    "sentence": "Taiwan wants more {{BLANK}} energy, so wind farms are being built off the west coast.",
    "cn": "台灣希望有更多可再生能源,所以正在西部外海興建風場。"
  },
  {
    "word": "wind turbine",
    "pos": "n.phr.",
    "cn_def": "風力發電機",
    "en_def": "a tall machine that uses wind to make electricity",
    "sentence": "Each {{BLANK}} off the coast can power thousands of homes, but fishermen worry about losing their fishing areas.",
    "cn": "外海的每一座風力發電機都能供應數千戶家庭用電,但漁民擔心失去他們的漁場。"
  },
  {
    "word": "solar panel",
    "pos": "n.phr.",
    "cn_def": "太陽能板",
    "en_def": "a flat device that turns sunlight into electricity",
    "sentence": "My uncle put {{BLANK}} on his roof, and now his electricity bill is almost zero in summer.",
    "cn": "我叔叔在他家屋頂裝了太陽能板,現在他夏天的電費幾乎是零。"
  },
  {
    "word": "hydropower",
    "pos": "n.",
    "cn_def": "水力發電",
    "en_def": "electricity made from moving water",
    "sentence": "{{BLANK}} provides clean electricity, but dams can also flood valleys and change the life of a river.",
    "cn": "水力發電提供潔淨的電力,但水壩也可能淹沒山谷並改變河流的生態。"
  },
  {
    "word": "geothermal",
    "pos": "adj.",
    "cn_def": "地熱的",
    "en_def": "using heat from inside the Earth",
    "sentence": "Iceland uses {{BLANK}} energy to heat most of its homes, because hot water lies just under the ground.",
    "cn": "冰島使用地熱能源為大部分的住家供暖,因為熱水就在地底下不遠處。"
  },
  {
    "word": "biofuel",
    "pos": "n.",
    "cn_def": "生質燃料",
    "en_def": "fuel made from plants or animal waste",
    "sentence": "Some airlines are testing {{BLANK}} made from used cooking oil, but there is not enough of it for every plane.",
    "cn": "一些航空公司正在測試用廢食用油製成的生質燃料,但數量還不夠供應每架飛機。"
  },
  {
    "word": "electric vehicle",
    "pos": "n.phr.",
    "cn_def": "電動車",
    "en_def": "a car or scooter that runs on a battery",
    "sentence": "My father bought an {{BLANK}} last year, and he charges it at home every night after work.",
    "cn": "我爸爸去年買了一輛電動車,他每天下班後晚上都在家充電。"
  },
  {
    "word": "battery",
    "pos": "n.",
    "cn_def": "電池",
    "en_def": "a device that stores electricity",
    "sentence": "Large {{BLANK}} can store solar power during the day, so homes can still use clean energy at night.",
    "cn": "大型電池可以在白天儲存太陽能,讓家庭在夜間仍然能使用潔淨能源。"
  },
  {
    "word": "grid",
    "pos": "n.",
    "cn_def": "電網",
    "en_def": "the network of power lines that delivers electricity",
    "sentence": "The power {{BLANK}} could not handle the demand during the heatwave, so some areas had blackouts in the evening.",
    "cn": "熱浪期間電網無法負荷用電需求,所以有些地區在傍晚停電。"
  },
  {
    "word": "insulation",
    "pos": "n.",
    "cn_def": "隔熱(材料)",
    "en_def": "material that stops heat from getting in or out",
    "sentence": "Good roof {{BLANK}} keeps the top floor cooler in summer, so the family uses the air-conditioner much less.",
    "cn": "良好的屋頂隔熱能讓頂樓在夏天保持涼爽,所以這家人使用冷氣的次數大幅減少。"
  },
  {
    "word": "energy-efficient",
    "pos": "adj.",
    "cn_def": "節能的",
    "en_def": "using less energy to do the same job",
    "sentence": "We replaced our old fridge with an {{BLANK}} model, and our monthly electricity bill dropped quite a lot.",
    "cn": "我們把舊冰箱換成節能型號,每月的電費也下降了不少。"
  },
  {
    "word": "recycle",
    "pos": "v.",
    "cn_def": "回收",
    "en_def": "to treat used things so they can be used again",
    "sentence": "Our class tries to {{BLANK}} every bottle and can, and we use the money from the recycling centre for a class trip.",
    "cn": "我們班盡量回收每一個瓶子和罐子,並用從回收中心換來的錢去校外旅行。"
  },
  {
    "word": "carbon tax",
    "pos": "n.phr.",
    "cn_def": "碳稅",
    "en_def": "a charge on fuels that produce carbon",
    "sentence": "The government introduced a {{BLANK}} on big factories, so many companies started to look for cleaner ways to work.",
    "cn": "政府對大型工廠開徵碳稅,所以許多公司開始尋找更乾淨的運作方式。"
  },
  {
    "word": "pledge",
    "pos": "n.",
    "cn_def": "承諾;保證",
    "en_def": "a serious promise",
    "sentence": "Many countries made a {{BLANK}} to reach net zero, but their actions so far are not enough to meet it.",
    "cn": "許多國家做出了達到淨零的承諾,但它們到目前為止的行動還不足以實現它。"
  },
  {
    "word": "summit",
    "pos": "n.",
    "cn_def": "高峰會",
    "en_def": "an important meeting between leaders",
    "sentence": "World leaders met at the climate {{BLANK}} in November, but they could not agree on how much money to give poorer nations.",
    "cn": "世界領袖們在十一月的氣候高峰會上會面,但他們無法就該給較貧窮國家多少資金達成共識。"
  },
  {
    "word": "delegate",
    "pos": "n.",
    "cn_def": "代表",
    "en_def": "a person sent to a meeting to represent others",
    "sentence": "The young {{BLANK}} from a Pacific island gave an emotional speech, and many people in the room started crying.",
    "cn": "來自一座太平洋島嶼的年輕代表發表了一場動人的演說,會場上許多人都哭了。"
  },
  {
    "word": "accord",
    "pos": "n.",
    "cn_def": "協定;協議",
    "en_def": "an official agreement between countries",
    "sentence": "The Paris {{BLANK}} was signed by almost every country, but each nation decides its own plan to cut emissions.",
    "cn": "《巴黎協定》幾乎每個國家都簽署了,但每個國家自行決定減排計畫。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾;投入",
    "en_def": "a promise to do something",
    "sentence": "The company made a {{BLANK}} to use only green electricity, so it signed a long contract with a wind farm.",
    "cn": "這家公司承諾只使用綠電,所以它與一座風場簽訂了長期合約。"
  },
  {
    "word": "ratify",
    "pos": "v.",
    "cn_def": "正式批准",
    "en_def": "to make an agreement official by signing or voting",
    "sentence": "Parliament voted to {{BLANK}} the climate agreement, and the new law will start next January.",
    "cn": "國會投票正式批准這項氣候協議,新法將於明年一月開始實施。"
  },
  {
    "word": "carbon-neutral",
    "pos": "adj.",
    "cn_def": "碳中和的",
    "en_def": "adding no extra carbon to the atmosphere overall",
    "sentence": "Our school wants to become {{BLANK}} by 2030, so we are planting trees and putting solar panels on the gym.",
    "cn": "我們學校希望在2030年前達到碳中和,所以我們正在種樹並在體育館上裝設太陽能板。"
  },
  {
    "word": "nuclear",
    "pos": "adj.",
    "cn_def": "核能的",
    "en_def": "using energy from splitting atoms",
    "sentence": "{{BLANK}} power produces very little carbon, but many people worry about accidents and how to store the waste.",
    "cn": "核能發電產生的碳非常少,但許多人擔心意外事故以及如何貯存廢料。"
  },
  {
    "word": "activist",
    "pos": "n.",
    "cn_def": "社運人士;行動者",
    "en_def": "a person who works to bring political or social change",
    "sentence": "The young climate {{BLANK}} spoke at the United Nations, and her speech inspired students in many countries.",
    "cn": "這位年輕的氣候行動者在聯合國發表演說,她的演講激勵了許多國家的學生。"
  },
  {
    "word": "protest",
    "pos": "n.",
    "cn_def": "抗議(活動)",
    "en_def": "a public event where people show they disagree",
    "sentence": "Thousands of students joined the climate {{BLANK}} on Friday, and they carried signs asking leaders to act now.",
    "cn": "數千名學生參加了星期五的氣候抗議活動,他們舉著標語要求領袖們立即行動。"
  },
  {
    "word": "greenwashing",
    "pos": "n.",
    "cn_def": "漂綠",
    "en_def": "making a product seem better for nature than it really is",
    "sentence": "The ad showed trees and rivers, but the company still burned coal, so critics called it {{BLANK}}.",
    "cn": "這則廣告展示了樹木和河流,但這家公司仍在燒煤,所以批評者稱之為漂綠。"
  },
  {
    "word": "carbon capture",
    "pos": "n.phr.",
    "cn_def": "碳捕捉",
    "en_def": "technology that catches carbon dioxide and stores it",
    "sentence": "The power plant is testing {{BLANK}} to trap its emissions, but the technology is still very expensive.",
    "cn": "這座發電廠正在測試碳捕捉以收集其排放,但這項技術仍然非常昂貴。"
  },
  {
    "word": "public transport",
    "pos": "n.phr.",
    "cn_def": "大眾運輸",
    "en_def": "buses and trains that everyone can use",
    "sentence": "If more people took {{BLANK}} instead of driving, the city would have less traffic and cleaner air.",
    "cn": "如果更多人搭乘大眾運輸而不開車,城市就會有更少的車流和更乾淨的空氣。"
  },
  {
    "word": "compost",
    "pos": "v.",
    "cn_def": "堆肥",
    "en_def": "to turn food and garden waste into natural fertiliser",
    "sentence": "Our family started to {{BLANK}} vegetable scraps in the garden, and now we throw away much less rubbish.",
    "cn": "我們家開始在花園裡把菜渣拿來堆肥,現在我們丟的垃圾少多了。"
  }
];

const MCQS = [
  {
    "q": "Climate _____ means cutting emissions, while adaptation means preparing for the changes that are already coming.",
    "options": [
      "obligation",
      "mitigation",
      "precipitation",
      "dissent"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Taiwan wants more _____ energy, so wind farms are being built off the west coast.",
    "options": [
      "conclusive",
      "industrialised",
      "outdated",
      "renewable"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Each _____ off the coast can power thousands of homes, but fishermen worry about losing their fishing areas.",
    "options": [
      "wind turbine",
      "extreme weather",
      "thermal expansion",
      "water stress"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "My uncle put _____ on his roof, and now his electricity bill is almost zero in summer.",
    "options": [
      "ice cap",
      "tipping point",
      "solar panel",
      "storm surge"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "_____ provides clean electricity, but dams can also flood valleys and change the life of a river.",
    "options": [
      "iceberg",
      "desalination",
      "tailpipe",
      "hydropower"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Iceland uses _____ energy to heat most of its homes, because hot water lies just under the ground.",
    "options": [
      "intermittent",
      "lenient",
      "geothermal",
      "seasonal"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Some airlines are testing _____ made from used cooking oil, but there is not enough of it for every plane.",
    "options": [
      "disaster",
      "biofuel",
      "surge",
      "latitude"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "My father bought an _____ last year, and he charges it at home every night after work.",
    "options": [
      "electric vehicle",
      "cooling centre",
      "early warning system",
      "greenhouse gas"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Large _____ can store solar power during the day, so homes can still use clean energy at night.",
    "options": [
      "evaporation",
      "irrigation",
      "battery",
      "denial"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The power _____ could not handle the demand during the heatwave, so some areas had blackouts in the evening.",
    "options": [
      "monsoon",
      "property",
      "attitude",
      "grid"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Good roof _____ keeps the top floor cooler in summer, so the family uses the air-conditioner much less.",
    "options": [
      "petroleum",
      "insulation",
      "humidity",
      "current"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "We replaced our old fridge with an _____ model, and our monthly electricity bill dropped quite a lot.",
    "options": [
      "energy-efficient",
      "so-called",
      "malnourished",
      "plausible"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our class tries to _____ every bottle and can, and we use the money from the recycling centre for a class trip.",
    "options": [
      "deploy",
      "amplify",
      "encompass",
      "recycle"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The government introduced a _____ on big factories, so many companies started to look for cleaner ways to work.",
    "options": [
      "food security",
      "carbon tax",
      "carbon dioxide",
      "water stress"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Many countries made a _____ to reach net zero, but their actions so far are not enough to meet it.",
    "options": [
      "property",
      "sphere",
      "pledge",
      "combustion"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "World leaders met at the climate _____ in November, but they could not agree on how much money to give poorer nations.",
    "options": [
      "summit",
      "benchmark",
      "hailstorm",
      "coal"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The young _____ from a Pacific island gave an emotional speech, and many people in the room started crying.",
    "options": [
      "dissent",
      "radiation",
      "convention",
      "delegate"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The Paris _____ was signed by almost every country, but each nation decides its own plan to cut emissions.",
    "options": [
      "accord",
      "salinity",
      "monsoon",
      "stilts"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The company made a _____ to use only green electricity, so it signed a long contract with a wind farm.",
    "options": [
      "exhaust",
      "salinity",
      "commitment",
      "emission"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Parliament voted to _____ the climate agreement, and the new law will start next January.",
    "options": [
      "reconcile",
      "ratify",
      "replant",
      "embody"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Our school wants to become _____ by 2030, so we are planting trees and putting solar panels on the gym.",
    "options": [
      "plausible",
      "feasible",
      "conspicuous",
      "carbon-neutral"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "_____ power produces very little carbon, but many people worry about accidents and how to store the waste.",
    "options": [
      "prominent",
      "drought-resistant",
      "nuclear",
      "binding"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The young climate _____ spoke at the United Nations, and her speech inspired students in many countries.",
    "options": [
      "activist",
      "exhaust",
      "paradigm",
      "stilts"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Thousands of students joined the climate _____ on Friday, and they carried signs asking leaders to act now.",
    "options": [
      "gust",
      "protest",
      "blizzard",
      "aerosol"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The ad showed trees and rivers, but the company still burned coal, so critics called it _____.",
    "options": [
      "greenwashing",
      "dissent",
      "poverty",
      "threshold"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The power plant is testing _____ to trap its emissions, but the technology is still very expensive.",
    "options": [
      "ice cap",
      "heat island",
      "carbon capture",
      "sea level"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "If more people took _____ instead of driving, the city would have less traffic and cleaner air.",
    "options": [
      "jet stream",
      "public transport",
      "contingency plan",
      "managed retreat"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Our family started to _____ vegetable scraps in the garden, and now we throw away much less rubbish.",
    "options": [
      "impede",
      "arise",
      "depict",
      "compost"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "mitigation": {
    "pos": "n.",
    "en_def": "actions that reduce how bad something is",
    "cn_def": "減緩;緩解"
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "able to be replaced naturally, like sun and wind",
    "cn_def": "可再生的"
  },
  "wind turbine": {
    "pos": "n.phr.",
    "en_def": "a tall machine that uses wind to make electricity",
    "cn_def": "風力發電機"
  },
  "solar panel": {
    "pos": "n.phr.",
    "en_def": "a flat device that turns sunlight into electricity",
    "cn_def": "太陽能板"
  },
  "hydropower": {
    "pos": "n.",
    "en_def": "electricity made from moving water",
    "cn_def": "水力發電"
  },
  "geothermal": {
    "pos": "adj.",
    "en_def": "using heat from inside the Earth",
    "cn_def": "地熱的"
  },
  "biofuel": {
    "pos": "n.",
    "en_def": "fuel made from plants or animal waste",
    "cn_def": "生質燃料"
  },
  "electric vehicle": {
    "pos": "n.phr.",
    "en_def": "a car or scooter that runs on a battery",
    "cn_def": "電動車"
  },
  "battery": {
    "pos": "n.",
    "en_def": "a device that stores electricity",
    "cn_def": "電池"
  },
  "grid": {
    "pos": "n.",
    "en_def": "the network of power lines that delivers electricity",
    "cn_def": "電網"
  },
  "insulation": {
    "pos": "n.",
    "en_def": "material that stops heat from getting in or out",
    "cn_def": "隔熱(材料)"
  },
  "energy-efficient": {
    "pos": "adj.",
    "en_def": "using less energy to do the same job",
    "cn_def": "節能的"
  },
  "recycle": {
    "pos": "v.",
    "en_def": "to treat used things so they can be used again",
    "cn_def": "回收"
  },
  "carbon tax": {
    "pos": "n.phr.",
    "en_def": "a charge on fuels that produce carbon",
    "cn_def": "碳稅"
  },
  "pledge": {
    "pos": "n.",
    "en_def": "a serious promise",
    "cn_def": "承諾;保證"
  },
  "summit": {
    "pos": "n.",
    "en_def": "an important meeting between leaders",
    "cn_def": "高峰會"
  },
  "delegate": {
    "pos": "n.",
    "en_def": "a person sent to a meeting to represent others",
    "cn_def": "代表"
  },
  "accord": {
    "pos": "n.",
    "en_def": "an official agreement between countries",
    "cn_def": "協定;協議"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise to do something",
    "cn_def": "承諾;投入"
  },
  "ratify": {
    "pos": "v.",
    "en_def": "to make an agreement official by signing or voting",
    "cn_def": "正式批准"
  },
  "carbon-neutral": {
    "pos": "adj.",
    "en_def": "adding no extra carbon to the atmosphere overall",
    "cn_def": "碳中和的"
  },
  "nuclear": {
    "pos": "adj.",
    "en_def": "using energy from splitting atoms",
    "cn_def": "核能的"
  },
  "activist": {
    "pos": "n.",
    "en_def": "a person who works to bring political or social change",
    "cn_def": "社運人士;行動者"
  },
  "protest": {
    "pos": "n.",
    "en_def": "a public event where people show they disagree",
    "cn_def": "抗議(活動)"
  },
  "greenwashing": {
    "pos": "n.",
    "en_def": "making a product seem better for nature than it really is",
    "cn_def": "漂綠"
  },
  "carbon capture": {
    "pos": "n.phr.",
    "en_def": "technology that catches carbon dioxide and stores it",
    "cn_def": "碳捕捉"
  },
  "public transport": {
    "pos": "n.phr.",
    "en_def": "buses and trains that everyone can use",
    "cn_def": "大眾運輸"
  },
  "compost": {
    "pos": "v.",
    "en_def": "to turn food and garden waste into natural fertiliser",
    "cn_def": "堆肥"
  },
  "obligation": {
    "pos": "n.",
    "en_def": "something you must do because of a law or promise",
    "cn_def": "義務;責任"
  },
  "precipitation": {
    "pos": "n.",
    "en_def": "rain, snow or hail that falls from the sky",
    "cn_def": "降水(量)"
  },
  "dissent": {
    "pos": "n.",
    "en_def": "strong disagreement with an official opinion",
    "cn_def": "異議;不同意見"
  },
  "conclusive": {
    "pos": "adj.",
    "en_def": "proving something without doubt",
    "cn_def": "確鑿的;決定性的"
  },
  "industrialised": {
    "pos": "adj.",
    "en_def": "having many factories and industries",
    "cn_def": "工業化的"
  },
  "outdated": {
    "pos": "adj.",
    "en_def": "old and no longer useful",
    "cn_def": "過時的"
  },
  "extreme weather": {
    "pos": "n.phr.",
    "en_def": "very unusual and dangerous weather",
    "cn_def": "極端天氣"
  },
  "thermal expansion": {
    "pos": "n.phr.",
    "en_def": "the way water takes up more space when it gets warmer",
    "cn_def": "熱膨脹"
  },
  "water stress": {
    "pos": "n.phr.",
    "en_def": "when people need more water than is available",
    "cn_def": "缺水壓力;水資源壓力"
  },
  "ice cap": {
    "pos": "n.phr.",
    "en_def": "a thick layer of ice covering a large area",
    "cn_def": "冰帽;冰冠"
  },
  "tipping point": {
    "pos": "n.phr.",
    "en_def": "the moment when a small change causes a big, sudden effect",
    "cn_def": "臨界點;轉捩點"
  },
  "storm surge": {
    "pos": "n.phr.",
    "en_def": "a sudden rise of sea water pushed by a storm",
    "cn_def": "風暴潮"
  },
  "iceberg": {
    "pos": "n.",
    "en_def": "a huge piece of ice floating in the sea",
    "cn_def": "冰山"
  },
  "desalination": {
    "pos": "n.",
    "en_def": "the process of removing salt from sea water",
    "cn_def": "海水淡化"
  },
  "tailpipe": {
    "pos": "n.",
    "en_def": "the pipe at the back of a car where exhaust comes out",
    "cn_def": "(汽車)排氣管"
  },
  "intermittent": {
    "pos": "adj.",
    "en_def": "stopping and starting again",
    "cn_def": "間歇性的"
  },
  "lenient": {
    "pos": "adj.",
    "en_def": "not strict enough",
    "cn_def": "寬鬆的;寬容的"
  },
  "seasonal": {
    "pos": "adj.",
    "en_def": "happening at a particular time of the year",
    "cn_def": "季節性的"
  },
  "disaster": {
    "pos": "n.",
    "en_def": "a sudden event that causes great damage",
    "cn_def": "災難"
  },
  "surge": {
    "pos": "n.",
    "en_def": "a sudden large increase",
    "cn_def": "激增;暴增"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "cooling centre": {
    "pos": "n.phr.",
    "en_def": "a public place where people can escape extreme heat",
    "cn_def": "避暑中心;降溫中心"
  },
  "early warning system": {
    "pos": "n.phr.",
    "en_def": "a system that tells people about danger before it arrives",
    "cn_def": "預警系統"
  },
  "greenhouse gas": {
    "pos": "n.phr.",
    "en_def": "a gas that traps heat in the atmosphere",
    "cn_def": "溫室氣體"
  },
  "evaporation": {
    "pos": "n.",
    "en_def": "the process of water turning into gas",
    "cn_def": "蒸發(作用)"
  },
  "irrigation": {
    "pos": "n.",
    "en_def": "supplying water to land so crops can grow",
    "cn_def": "灌溉"
  },
  "denial": {
    "pos": "n.",
    "en_def": "refusing to accept that something is true",
    "cn_def": "否認;否定"
  },
  "monsoon": {
    "pos": "n.",
    "en_def": "the season of heavy rain in South and Southeast Asia",
    "cn_def": "季風(雨季)"
  },
  "property": {
    "pos": "n.",
    "en_def": "buildings and land that someone owns",
    "cn_def": "房地產;財產"
  },
  "attitude": {
    "pos": "n.",
    "en_def": "the way you think or feel about something",
    "cn_def": "態度"
  },
  "petroleum": {
    "pos": "n.",
    "en_def": "oil from under the ground used to make fuel and plastic",
    "cn_def": "石油"
  },
  "humidity": {
    "pos": "n.",
    "en_def": "the amount of water in the air",
    "cn_def": "濕度"
  },
  "current": {
    "pos": "n.",
    "en_def": "a steady flow of water in one direction",
    "cn_def": "洋流;水流"
  },
  "so-called": {
    "pos": "adj.",
    "en_def": "used to show that a name may not be accurate",
    "cn_def": "所謂的"
  },
  "malnourished": {
    "pos": "adj.",
    "en_def": "weak or ill because of not eating enough healthy food",
    "cn_def": "營養不良的"
  },
  "plausible": {
    "pos": "adj.",
    "en_def": "seeming reasonable or likely to be true",
    "cn_def": "合理的;似乎可信的"
  },
  "deploy": {
    "pos": "v.",
    "en_def": "to put something into use or action",
    "cn_def": "部署;運用"
  },
  "amplify": {
    "pos": "v.",
    "en_def": "to make something stronger or more serious",
    "cn_def": "放大;增強"
  },
  "encompass": {
    "pos": "v.",
    "en_def": "to include many different things",
    "cn_def": "包含;涵蓋"
  },
  "food security": {
    "pos": "n.phr.",
    "en_def": "having enough safe, healthy food to eat",
    "cn_def": "糧食安全"
  },
  "carbon dioxide": {
    "pos": "n.phr.",
    "en_def": "the gas CO2, produced when fuel is burned",
    "cn_def": "二氧化碳"
  },
  "sphere": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範圍"
  },
  "combustion": {
    "pos": "n.",
    "en_def": "the process of burning",
    "cn_def": "燃燒"
  },
  "benchmark": {
    "pos": "n.",
    "en_def": "a standard used for comparison",
    "cn_def": "基準;標竿"
  },
  "hailstorm": {
    "pos": "n.",
    "en_def": "a storm in which balls of ice fall from the sky",
    "cn_def": "冰雹暴"
  },
  "coal": {
    "pos": "n.",
    "en_def": "a hard black rock burned to make heat or electricity",
    "cn_def": "煤"
  },
  "radiation": {
    "pos": "n.",
    "en_def": "energy that travels as heat or light",
    "cn_def": "輻射"
  },
  "convention": {
    "pos": "n.",
    "en_def": "a formal agreement between countries",
    "cn_def": "公約"
  },
  "salinity": {
    "pos": "n.",
    "en_def": "the amount of salt in water",
    "cn_def": "鹽度"
  },
  "stilts": {
    "pos": "n.",
    "en_def": "tall posts that hold a building above the ground or water",
    "cn_def": "高腳柱;支柱"
  },
  "exhaust": {
    "pos": "n.",
    "en_def": "waste gas that comes out of an engine",
    "cn_def": "(引擎)廢氣"
  },
  "emission": {
    "pos": "n.",
    "en_def": "gas or smoke that is sent into the air",
    "cn_def": "排放(物)"
  },
  "reconcile": {
    "pos": "v.",
    "en_def": "to find a way for two different ideas to exist together",
    "cn_def": "調和;使一致"
  },
  "replant": {
    "pos": "v.",
    "en_def": "to plant again",
    "cn_def": "重新種植;補種"
  },
  "embody": {
    "pos": "v.",
    "en_def": "to be a clear example of an idea",
    "cn_def": "體現;代表"
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible and practical to do",
    "cn_def": "可行的"
  },
  "conspicuous": {
    "pos": "adj.",
    "en_def": "very easy to see or notice",
    "cn_def": "顯眼的;明顯的"
  },
  "prominent": {
    "pos": "adj.",
    "en_def": "important and well known",
    "cn_def": "著名的;重要的"
  },
  "drought-resistant": {
    "pos": "adj.",
    "en_def": "able to grow well with little water",
    "cn_def": "耐旱的"
  },
  "binding": {
    "pos": "adj.",
    "en_def": "that must be obeyed by law",
    "cn_def": "具有約束力的"
  },
  "paradigm": {
    "pos": "n.",
    "en_def": "a typical model or way of thinking",
    "cn_def": "範式;模式"
  },
  "gust": {
    "pos": "n.",
    "en_def": "a sudden strong rush of wind",
    "cn_def": "一陣強風"
  },
  "blizzard": {
    "pos": "n.",
    "en_def": "a severe snowstorm with strong wind",
    "cn_def": "暴風雪"
  },
  "aerosol": {
    "pos": "n.",
    "en_def": "tiny drops or bits floating in the air",
    "cn_def": "氣溶膠;懸浮微粒"
  },
  "poverty": {
    "pos": "n.",
    "en_def": "the state of being very poor",
    "cn_def": "貧窮"
  },
  "threshold": {
    "pos": "n.",
    "en_def": "the level at which something starts to happen",
    "cn_def": "門檻;臨界點"
  },
  "heat island": {
    "pos": "n.phr.",
    "en_def": "a city area much warmer than the countryside around it",
    "cn_def": "熱島"
  },
  "sea level": {
    "pos": "n.phr.",
    "en_def": "the average height of the sea's surface",
    "cn_def": "海平面"
  },
  "jet stream": {
    "pos": "n.phr.",
    "en_def": "a strong, fast wind high in the sky",
    "cn_def": "噴射氣流"
  },
  "contingency plan": {
    "pos": "n.phr.",
    "en_def": "a plan for what to do if something goes wrong",
    "cn_def": "應變計畫"
  },
  "managed retreat": {
    "pos": "n.phr.",
    "en_def": "a planned move of people away from dangerous coastal areas",
    "cn_def": "有計畫的撤退(遷移)"
  },
  "impede": {
    "pos": "v.",
    "en_def": "to slow down or block progress",
    "cn_def": "妨礙;阻止"
  },
  "arise": {
    "pos": "v.",
    "en_def": "to begin to happen or exist",
    "cn_def": "出現;產生"
  },
  "depict": {
    "pos": "v.",
    "en_def": "to show something in a picture or story",
    "cn_def": "描繪"
  }
};

const EXTRA_GLOSSES = {};
