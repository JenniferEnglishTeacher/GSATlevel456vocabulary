// Topic 3 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "global warming",
    "pos": "n.phr.",
    "cn_def": "全球暖化",
    "en_def": "the rise in the Earth's average temperature",
    "sentence": "{{BLANK}} is making summers longer in Taiwan, so schools are thinking about starting classes earlier in the morning.",
    "cn": "全球暖化正讓台灣的夏天變得更長,所以學校正在考慮早上提早開始上課。"
  },
  {
    "word": "carbon footprint",
    "pos": "n.phr.",
    "cn_def": "碳足跡",
    "en_def": "the amount of carbon a person or activity produces",
    "sentence": "Flying to Europe adds a lot to your {{BLANK}}, so my family took a train trip around Taiwan this year.",
    "cn": "飛往歐洲會大幅增加你的碳足跡,所以我們家今年改搭火車環島旅行。"
  },
  {
    "word": "extreme weather",
    "pos": "n.phr.",
    "cn_def": "極端天氣",
    "en_def": "very unusual and dangerous weather",
    "sentence": "{{BLANK}} such as floods and heatwaves is becoming more common, and cities must prepare for it.",
    "cn": "像水災和熱浪這樣的極端天氣變得越來越常見,城市必須為此做好準備。"
  },
  {
    "word": "tipping point",
    "pos": "n.phr.",
    "cn_def": "臨界點;轉捩點",
    "en_def": "the moment when a small change causes a big, sudden effect",
    "sentence": "Scientists fear the rainforest may reach a {{BLANK}}, and then it could slowly turn into dry grassland.",
    "cn": "科學家擔心雨林可能達到臨界點,接著它可能慢慢變成乾燥的草原。"
  },
  {
    "word": "a ticking time bomb",
    "pos": "n.phr.",
    "cn_def": "定時炸彈;隨時會爆發的問題",
    "en_def": "a problem that will become very serious soon",
    "sentence": "Experts call the melting permafrost {{BLANK}}, because it holds huge amounts of gas that could escape.",
    "cn": "專家把融化中的永凍土稱為一顆定時炸彈,因為它蘊含大量可能逸散的氣體。"
  },
  {
    "word": "for future generations",
    "pos": "phr.",
    "cn_def": "為了後代子孫",
    "en_def": "for people who will live after us",
    "sentence": "We must protect the forests {{BLANK}}, because our children and grandchildren will need clean air and water too.",
    "cn": "我們必須為了後代子孫保護森林,因為我們的孩子和孫子也會需要乾淨的空氣和水。"
  },
  {
    "word": "cut down on",
    "pos": "v.phr.",
    "cn_def": "減少",
    "en_def": "to use or do less of something",
    "sentence": "Our family decided to {{BLANK}} meat, because farming animals produces a lot of greenhouse gases.",
    "cn": "我們家決定減少吃肉,因為飼養動物會產生大量溫室氣體。"
  },
  {
    "word": "phase out",
    "pos": "v.phr.",
    "cn_def": "逐步淘汰",
    "en_def": "to stop using something gradually",
    "sentence": "The government plans to {{BLANK}} petrol scooters by 2035, so new buyers are already choosing electric ones.",
    "cn": "政府計畫在2035年前逐步淘汰汽油機車,所以新買家已經在選擇電動機車了。"
  },
  {
    "word": "go green",
    "pos": "v.phr.",
    "cn_def": "走向環保;綠化",
    "en_def": "to start living or working in a way that is better for the environment",
    "sentence": "The café decided to {{BLANK}} last year, so it stopped using plastic straws and started selling local food.",
    "cn": "這家咖啡廳去年決定走向環保,所以它停止使用塑膠吸管並開始販售在地食材。"
  },
  {
    "word": "run out of",
    "pos": "v.phr.",
    "cn_def": "用完;耗盡",
    "en_def": "to have no more of something left",
    "sentence": "If the rain does not come soon, the town will {{BLANK}} drinking water, so people are saving every drop.",
    "cn": "如果雨再不來,鎮上就會用完飲用水,所以人們正在節約每一滴水。"
  },
  {
    "word": "the tip of the iceberg",
    "pos": "n.phr.",
    "cn_def": "冰山一角",
    "en_def": "a small, visible part of a much bigger problem",
    "sentence": "The flooded streets were only {{BLANK}}, because the storm had also damaged farms and power lines.",
    "cn": "淹水的街道只是冰山一角,因為暴風雨也損壞了農場和電線。"
  },
  {
    "word": "weather the storm",
    "pos": "v.phr.",
    "cn_def": "度過難關",
    "en_def": "to get through a difficult time successfully",
    "sentence": "The small farm lost half its crops, but the family managed to {{BLANK}} with help from the community.",
    "cn": "這座小農場損失了一半的作物,但這家人在社區的幫助下設法度過難關。"
  },
  {
    "word": "bear the brunt of",
    "pos": "v.phr.",
    "cn_def": "首當其衝;承受最大衝擊",
    "en_def": "to suffer the worst part of something",
    "sentence": "Poor coastal villages {{BLANK}} rising seas, but they produced almost none of the pollution.",
    "cn": "貧窮的沿海村莊首當其衝承受海平面上升的衝擊,但它們幾乎沒有製造任何污染。"
  },
  {
    "word": "a race against time",
    "pos": "n.phr.",
    "cn_def": "與時間賽跑",
    "en_def": "a situation where you must work very fast to finish before it is too late",
    "sentence": "Saving the coral reef is {{BLANK}}, because the water is getting warmer every summer.",
    "cn": "拯救珊瑚礁是一場與時間賽跑,因為海水每年夏天都在變暖。"
  },
  {
    "word": "sound the alarm",
    "pos": "v.phr.",
    "cn_def": "敲響警鐘;發出警告",
    "en_def": "to warn people about a danger",
    "sentence": "Scientists {{BLANK}} about melting ice many years ago, but governments were slow to listen.",
    "cn": "科學家多年前就對融冰敲響了警鐘,但政府遲遲不願傾聽。"
  },
  {
    "word": "take steps to",
    "pos": "v.phr.",
    "cn_def": "採取措施",
    "en_def": "to do things in order to achieve something",
    "sentence": "Our school has {{BLANK}} save energy, and we now turn off all fans when we leave the classroom.",
    "cn": "我們學校已經採取措施節約能源,現在我們離開教室時都會關掉所有電扇。"
  },
  {
    "word": "on the rise",
    "pos": "adj.phr.",
    "cn_def": "正在上升;日益增加",
    "en_def": "increasing",
    "sentence": "Heat-related illnesses are {{BLANK}}, so doctors advise people to drink water and stay out of the midday sun.",
    "cn": "與高溫相關的疾病正在增加,所以醫生建議民眾多喝水並避開正午的陽光。"
  },
  {
    "word": "in the face of",
    "pos": "phr.",
    "cn_def": "面對",
    "en_def": "when dealing with a difficult situation",
    "sentence": "{{BLANK}} rising seas, the islanders have kept their culture alive, but many young people have moved away.",
    "cn": "面對上升的海平面,島民們讓自己的文化延續下去,但許多年輕人已經搬走了。"
  },
  {
    "word": "lead by example",
    "pos": "v.phr.",
    "cn_def": "以身作則",
    "en_def": "to show others how to behave by doing it yourself",
    "sentence": "Our principal wanted to {{BLANK}}, so she started riding a bicycle to school every day.",
    "cn": "我們校長想要以身作則,所以她開始每天騎腳踏車上學。"
  },
  {
    "word": "at the expense of",
    "pos": "phr.",
    "cn_def": "以…為代價",
    "en_def": "causing harm or loss to something else",
    "sentence": "The factory grew quickly {{BLANK}} the river, and now the water is too dirty for fish.",
    "cn": "這家工廠的快速成長是以河川為代價,現在河水髒到魚都無法生存。"
  }
];

const MCQS = [
  {
    "q": "_____ is making summers longer in Taiwan, so schools are thinking about starting classes earlier in the morning.",
    "options": [
      "carbon sink",
      "storm surge",
      "global warming",
      "dry spell"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Flying to Europe adds a lot to your _____, so my family took a train trip around Taiwan this year.",
    "options": [
      "cooling centre",
      "carbon footprint",
      "wind turbine",
      "carbon capture"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "_____ such as floods and heatwaves is becoming more common, and cities must prepare for it.",
    "options": [
      "extreme weather",
      "carbon capture",
      "ice cap",
      "early warning system"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Scientists fear the rainforest may reach a _____, and then it could slowly turn into dry grassland.",
    "options": [
      "solar panel",
      "fossil fuel",
      "cooling centre",
      "tipping point"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Experts call the melting permafrost _____, because it holds huge amounts of gas that could escape.",
    "options": [
      "carbon dioxide",
      "a ticking time bomb",
      "electric vehicle",
      "carbon capture"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "We must protect the forests _____, because our children and grandchildren will need clean air and water too.",
    "options": [
      "lead by example",
      "tipping point",
      "carbon sink",
      "for future generations"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Our family decided to _____ meat, because farming animals produces a lot of greenhouse gases.",
    "options": [
      "cut down on",
      "weather the storm",
      "run out of",
      "phase out"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The government plans to _____ petrol scooters by 2035, so new buyers are already choosing electric ones.",
    "options": [
      "go green",
      "run out of",
      "phase out",
      "sound the alarm"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The café decided to _____ last year, so it stopped using plastic straws and started selling local food.",
    "options": [
      "bear the brunt of",
      "go green",
      "cut down on",
      "lead by example"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "If the rain does not come soon, the town will _____ drinking water, so people are saving every drop.",
    "options": [
      "go green",
      "sound the alarm",
      "run out of",
      "lead by example"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The flooded streets were only _____, because the storm had also damaged farms and power lines.",
    "options": [
      "the tip of the iceberg",
      "fossil fuel",
      "public transport",
      "solar panel"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The small farm lost half its crops, but the family managed to _____ with help from the community.",
    "options": [
      "phase out",
      "lead by example",
      "bear the brunt of",
      "weather the storm"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Poor coastal villages _____ rising seas, but they produced almost none of the pollution.",
    "options": [
      "go green",
      "bear the brunt of",
      "phase out",
      "weather the storm"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Saving the coral reef is _____, because the water is getting warmer every summer.",
    "options": [
      "greenhouse gas",
      "water stress",
      "a race against time",
      "carbon capture"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Scientists _____ about melting ice many years ago, but governments were slow to listen.",
    "options": [
      "sound the alarm",
      "phase out",
      "lead by example",
      "bear the brunt of"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Our school has _____ save energy, and we now turn off all fans when we leave the classroom.",
    "options": [
      "phase out",
      "cut down on",
      "go green",
      "take steps to"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Heat-related illnesses are _____, so doctors advise people to drink water and stay out of the midday sun.",
    "options": [
      "storm surge",
      "on the rise",
      "dry spell",
      "early warning system"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "_____ rising seas, the islanders have kept their culture alive, but many young people have moved away.",
    "options": [
      "in the face of",
      "fossil fuel",
      "wind turbine",
      "heat island"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Our principal wanted to _____, so she started riding a bicycle to school every day.",
    "options": [
      "sound the alarm",
      "weather the storm",
      "go green",
      "lead by example"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The factory grew quickly _____ the river, and now the water is too dirty for fish.",
    "options": [
      "take steps to",
      "wind turbine",
      "at the expense of",
      "cooling centre"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "global warming": {
    "pos": "n.phr.",
    "en_def": "the rise in the Earth's average temperature",
    "cn_def": "全球暖化"
  },
  "carbon footprint": {
    "pos": "n.phr.",
    "en_def": "the amount of carbon a person or activity produces",
    "cn_def": "碳足跡"
  },
  "extreme weather": {
    "pos": "n.phr.",
    "en_def": "very unusual and dangerous weather",
    "cn_def": "極端天氣"
  },
  "tipping point": {
    "pos": "n.phr.",
    "en_def": "the moment when a small change causes a big, sudden effect",
    "cn_def": "臨界點;轉捩點"
  },
  "a ticking time bomb": {
    "pos": "n.phr.",
    "en_def": "a problem that will become very serious soon",
    "cn_def": "定時炸彈;隨時會爆發的問題"
  },
  "for future generations": {
    "pos": "phr.",
    "en_def": "for people who will live after us",
    "cn_def": "為了後代子孫"
  },
  "cut down on": {
    "pos": "v.phr.",
    "en_def": "to use or do less of something",
    "cn_def": "減少"
  },
  "phase out": {
    "pos": "v.phr.",
    "en_def": "to stop using something gradually",
    "cn_def": "逐步淘汰"
  },
  "go green": {
    "pos": "v.phr.",
    "en_def": "to start living or working in a way that is better for the environment",
    "cn_def": "走向環保;綠化"
  },
  "run out of": {
    "pos": "v.phr.",
    "en_def": "to have no more of something left",
    "cn_def": "用完;耗盡"
  },
  "the tip of the iceberg": {
    "pos": "n.phr.",
    "en_def": "a small, visible part of a much bigger problem",
    "cn_def": "冰山一角"
  },
  "weather the storm": {
    "pos": "v.phr.",
    "en_def": "to get through a difficult time successfully",
    "cn_def": "度過難關"
  },
  "bear the brunt of": {
    "pos": "v.phr.",
    "en_def": "to suffer the worst part of something",
    "cn_def": "首當其衝;承受最大衝擊"
  },
  "a race against time": {
    "pos": "n.phr.",
    "en_def": "a situation where you must work very fast to finish before it is too late",
    "cn_def": "與時間賽跑"
  },
  "sound the alarm": {
    "pos": "v.phr.",
    "en_def": "to warn people about a danger",
    "cn_def": "敲響警鐘;發出警告"
  },
  "take steps to": {
    "pos": "v.phr.",
    "en_def": "to do things in order to achieve something",
    "cn_def": "採取措施"
  },
  "on the rise": {
    "pos": "adj.phr.",
    "en_def": "increasing",
    "cn_def": "正在上升;日益增加"
  },
  "in the face of": {
    "pos": "phr.",
    "en_def": "when dealing with a difficult situation",
    "cn_def": "面對"
  },
  "lead by example": {
    "pos": "v.phr.",
    "en_def": "to show others how to behave by doing it yourself",
    "cn_def": "以身作則"
  },
  "at the expense of": {
    "pos": "phr.",
    "en_def": "causing harm or loss to something else",
    "cn_def": "以…為代價"
  },
  "carbon sink": {
    "pos": "n.phr.",
    "en_def": "a forest, ocean or soil that takes in more carbon than it gives out",
    "cn_def": "碳匯"
  },
  "storm surge": {
    "pos": "n.phr.",
    "en_def": "a sudden rise of sea water pushed by a storm",
    "cn_def": "風暴潮"
  },
  "dry spell": {
    "pos": "n.phr.",
    "en_def": "a period with no rain",
    "cn_def": "乾旱期;久旱"
  },
  "cooling centre": {
    "pos": "n.phr.",
    "en_def": "a public place where people can escape extreme heat",
    "cn_def": "避暑中心;降溫中心"
  },
  "wind turbine": {
    "pos": "n.phr.",
    "en_def": "a tall machine that uses wind to make electricity",
    "cn_def": "風力發電機"
  },
  "carbon capture": {
    "pos": "n.phr.",
    "en_def": "technology that catches carbon dioxide and stores it",
    "cn_def": "碳捕捉"
  },
  "ice cap": {
    "pos": "n.phr.",
    "en_def": "a thick layer of ice covering a large area",
    "cn_def": "冰帽;冰冠"
  },
  "early warning system": {
    "pos": "n.phr.",
    "en_def": "a system that tells people about danger before it arrives",
    "cn_def": "預警系統"
  },
  "solar panel": {
    "pos": "n.phr.",
    "en_def": "a flat device that turns sunlight into electricity",
    "cn_def": "太陽能板"
  },
  "fossil fuel": {
    "pos": "n.phr.",
    "en_def": "coal, oil or gas formed from ancient plants and animals",
    "cn_def": "化石燃料"
  },
  "carbon dioxide": {
    "pos": "n.phr.",
    "en_def": "the gas CO2, produced when fuel is burned",
    "cn_def": "二氧化碳"
  },
  "electric vehicle": {
    "pos": "n.phr.",
    "en_def": "a car or scooter that runs on a battery",
    "cn_def": "電動車"
  },
  "public transport": {
    "pos": "n.phr.",
    "en_def": "buses and trains that everyone can use",
    "cn_def": "大眾運輸"
  },
  "greenhouse gas": {
    "pos": "n.phr.",
    "en_def": "a gas that traps heat in the atmosphere",
    "cn_def": "溫室氣體"
  },
  "water stress": {
    "pos": "n.phr.",
    "en_def": "when people need more water than is available",
    "cn_def": "缺水壓力;水資源壓力"
  },
  "heat island": {
    "pos": "n.phr.",
    "en_def": "a city area much warmer than the countryside around it",
    "cn_def": "熱島"
  }
};

const EXTRA_GLOSSES = {};
