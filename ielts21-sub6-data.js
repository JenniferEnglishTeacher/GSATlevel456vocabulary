// Topic 21 Subunit 6 Quiz Data: Natural Resources & Scarcity 天然資源與短缺
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S06 - Natural Resources & Scarcity 天然資源與短缺",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "natural resources",
    "pos": "n.phr.",
    "cn_def": "天然資源",
    "en_def": "things from nature that people use, like water and oil",
    "sentence": "Taiwan has few {{BLANK}} of its own, so it must import most of its oil, gas and coal.",
    "cn": "台灣本身的天然資源很少，所以必須進口大部分的石油、天然氣和煤。"
  },
  {
    "word": "resource depletion",
    "pos": "n.phr.",
    "cn_def": "資源耗竭",
    "en_def": "using up natural resources faster than they return",
    "sentence": "{{BLANK}} is a serious problem for future generations, because many materials cannot be replaced once they are gone.",
    "cn": "資源耗竭對未來世代是個嚴重問題，因為許多材料一旦用完就無法替代。"
  },
  {
    "word": "water supply",
    "pos": "n.phr.",
    "cn_def": "供水",
    "en_def": "the water provided to an area for people to use",
    "sentence": "The {{BLANK}} was cut for two days during the drought, so families had to collect water from trucks.",
    "cn": "乾旱期間供水中斷了兩天，所以家家戶戶只好向水車取水。"
  },
  {
    "word": "water shortage",
    "pos": "n.phr.",
    "cn_def": "缺水",
    "en_def": "a situation when there is not enough water",
    "sentence": "Chip factories use a lot of water, so a {{BLANK}} in spring can be a serious problem for the whole economy.",
    "cn": "晶片工廠用水量很大，所以春季缺水可能成為整個經濟的嚴重問題。"
  },
  {
    "word": "borehole",
    "pos": "n.",
    "cn_def": "鑽孔；水井",
    "en_def": "a deep narrow hole dug to find water or oil",
    "sentence": "The charity dug a new {{BLANK}} in the village, so children no longer have to walk hours every day to fetch water.",
    "cn": "慈善機構在村子裡鑿了一口新的水井，所以孩子們不再需要每天走好幾個小時去取水。"
  },
  {
    "word": "well",
    "pos": "n.",
    "cn_def": "井",
    "en_def": "a hole dug in the ground to get water",
    "sentence": "The old {{BLANK}} in the temple yard dried up during the drought, but the villagers hope it will fill again after the rains.",
    "cn": "寺廟院子裡的老井在乾旱期間乾涸了，但村民希望下雨後它會再度有水。"
  },
  {
    "word": "non-renewable",
    "pos": "adj.",
    "cn_def": "不可再生的",
    "en_def": "not able to be replaced once it has been used",
    "sentence": "Coal and oil are {{BLANK}} resources, so we will eventually run out of them if we keep burning them.",
    "cn": "煤和石油是不可再生資源，所以如果我們持續燃燒它們，終有一天會用光。"
  },
  {
    "word": "finite resource",
    "pos": "n.phr.",
    "cn_def": "有限資源",
    "en_def": "something that exists only in a limited amount",
    "sentence": "Clean water is a {{BLANK}} in many places, so people should not waste it while washing cars or watering lawns.",
    "cn": "在許多地方乾淨的水是有限資源，所以人們在洗車或澆草坪時不應浪費。"
  },
  {
    "word": "resource-rich",
    "pos": "adj.",
    "cn_def": "資源豐富的",
    "en_def": "having a lot of natural resources",
    "sentence": "Some {{BLANK}} countries are still poor, because the money from oil and minerals does not reach ordinary people.",
    "cn": "有些資源豐富的國家仍然貧窮，因為來自石油和礦產的錢沒有流到一般百姓手中。"
  },
  {
    "word": "resource curse",
    "pos": "n.phr.",
    "cn_def": "資源詛咒",
    "en_def": "when rich natural resources lead to poor development",
    "sentence": "Economists use the term {{BLANK}} to describe countries where oil money causes corruption and slows growth.",
    "cn": "經濟學家用資源詛咒這個詞來描述石油收入導致貪腐、拖慢成長的國家。"
  },
  {
    "word": "overextraction",
    "pos": "n.",
    "cn_def": "過度抽取",
    "en_def": "taking too much of a resource from the ground",
    "sentence": "{{BLANK}} of groundwater has made the land sink along the coast, so some homes now flood at every high tide.",
    "cn": "地下水的過度抽取使沿海地層下陷，所以有些房屋現在每逢漲潮就淹水。"
  },
  {
    "word": "water rights",
    "pos": "n.phr.",
    "cn_def": "水權",
    "en_def": "the legal right to use water from a river or lake",
    "sentence": "Farmers and factories are arguing over {{BLANK}}, because there is not enough river water for both groups this year.",
    "cn": "農民和工廠正為水權爭執，因為今年的河水不夠兩方使用。"
  },
  {
    "word": "rainwater harvesting",
    "pos": "n.phr.",
    "cn_def": "雨水回收",
    "en_def": "collecting rain so it can be used later",
    "sentence": "Our school uses {{BLANK}} to water the gardens, so we save tap water and reduce our water bill.",
    "cn": "我們學校利用雨水回收來澆灌花園，所以既節省自來水，也降低了水費。"
  },
  {
    "word": "recycling",
    "pos": "n.",
    "cn_def": "回收",
    "en_def": "treating used things so they can be used again",
    "sentence": "{{BLANK}} old phones keeps valuable metals in use, and it also stops toxic materials from ending up in landfill.",
    "cn": "回收舊手機能讓珍貴金屬持續被利用，也能防止有毒物質最後進入掩埋場。"
  },
  {
    "word": "e-waste",
    "pos": "n.",
    "cn_def": "電子廢棄物",
    "en_def": "thrown-away electronic devices like phones and computers",
    "sentence": "Piles of {{BLANK}} are shipped to poor countries, where workers burn cables to get the copper and breathe in toxic smoke.",
    "cn": "成堆的電子廢棄物被運到貧窮國家，那裡的工人燒電線取銅，吸入有毒煙霧。"
  },
  {
    "word": "circular economy",
    "pos": "n.phr.",
    "cn_def": "循環經濟",
    "en_def": "a system where products are reused and recycled, not thrown away",
    "sentence": "In a {{BLANK}}, old products are repaired or recycled, so fewer new raw materials need to be dug from the ground.",
    "cn": "在循環經濟中，舊產品會被修理或回收，所以需要從地下挖掘的新原料就比較少。"
  },
  {
    "word": "resource efficiency",
    "pos": "n.phr.",
    "cn_def": "資源效率",
    "en_def": "using fewer materials to make the same product",
    "sentence": "The factory improved its {{BLANK}} by reusing water and metal scraps, and it saved a lot of money as well.",
    "cn": "這家工廠透過再利用水和金屬碎料提高了資源效率，也省下了很多錢。"
  },
  {
    "word": "energy security",
    "pos": "n.phr.",
    "cn_def": "能源安全",
    "en_def": "having a reliable supply of energy at a fair price",
    "sentence": "Taiwan imports almost all its fuel, so {{BLANK}} is a major concern if shipping routes are ever blocked.",
    "cn": "台灣幾乎所有燃料都靠進口，所以若航道遭封鎖，能源安全就是一大隱憂。"
  },
  {
    "word": "energy crisis",
    "pos": "n.phr.",
    "cn_def": "能源危機",
    "en_def": "a serious shortage of energy and very high prices",
    "sentence": "During the {{BLANK}} in 2022, gas prices in Europe rose so much that some factories had to close.",
    "cn": "在2022年的能源危機期間，歐洲天然氣價格漲得太多，以致有些工廠不得不關閉。"
  },
  {
    "word": "energy poverty",
    "pos": "n.phr.",
    "cn_def": "能源貧窮",
    "en_def": "not being able to afford enough energy at home",
    "sentence": "Many elderly people live in {{BLANK}}, so they cannot afford to heat their homes properly in winter.",
    "cn": "許多長者處於能源貧窮，所以冬天他們無法負擔讓家裡足夠溫暖的暖氣費用。"
  },
  {
    "word": "energy demand",
    "pos": "n.phr.",
    "cn_def": "能源需求",
    "en_def": "the amount of energy that people need",
    "sentence": "{{BLANK}} keeps rising because of new data centres, so power companies must build more plants quickly.",
    "cn": "能源需求因為新的資料中心而持續上升，所以電力公司必須迅速興建更多電廠。"
  },
  {
    "word": "oil crisis",
    "pos": "n.phr.",
    "cn_def": "石油危機",
    "en_def": "a time when oil becomes very scarce and expensive",
    "sentence": "During the 1973 {{BLANK}}, petrol was so short that people waited in long queues at every station.",
    "cn": "在1973年的石油危機期間，汽油短缺到人們在每個加油站都大排長龍。"
  },
  {
    "word": "fuel shortage",
    "pos": "n.phr.",
    "cn_def": "燃料短缺",
    "en_def": "a situation when there is not enough fuel",
    "sentence": "A {{BLANK}} hit the country after the port was closed, so buses ran less often and many flights were cancelled.",
    "cn": "港口關閉後，這個國家發生燃料短缺，所以公車班次減少，許多航班被取消。"
  },
  {
    "word": "oil-rich",
    "pos": "adj.",
    "cn_def": "石油蘊藏豐富的",
    "en_def": "having large amounts of oil",
    "sentence": "Many {{BLANK}} countries are now investing in solar power, because they know oil will not last forever.",
    "cn": "許多石油蘊藏豐富的國家現在投資太陽能，因為他們知道石油不會永遠存在。"
  },
  {
    "word": "energy independence",
    "pos": "n.phr.",
    "cn_def": "能源自主",
    "en_def": "producing enough energy without relying on other countries",
    "sentence": "The president promised {{BLANK}} within ten years, but experts doubted that the goal was realistic.",
    "cn": "總統承諾十年內達成能源自主，但專家懷疑這個目標是否切合實際。"
  },
  {
    "word": "stranded asset",
    "pos": "n.phr.",
    "cn_def": "擱淺資產",
    "en_def": "something valuable that loses its value early, like an unused coal plant",
    "sentence": "Investors fear the new coal plant will become a {{BLANK}}, because clean energy is getting cheaper every year.",
    "cn": "投資人擔心這座新燃煤電廠會變成擱淺資產，因為乾淨能源每年都變得更便宜。"
  }
];

const MCQS = [
  {
    "q": "Taiwan has few _____ of its own, so it must import most of its oil, gas and coal.",
    "options": [
      "standby mode",
      "capacity factor",
      "natural gas",
      "natural resources"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "_____ is a serious problem for future generations, because many materials cannot be replaced once they are gone.",
    "options": [
      "smart plug",
      "resource depletion",
      "smart grid",
      "power strip"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ was cut for two days during the drought, so families had to collect water from trucks.",
    "options": [
      "water supply",
      "nuclear accident",
      "oil well",
      "oil slick"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Chip factories use a lot of water, so a _____ in spring can be a serious problem for the whole economy.",
    "options": [
      "feed-in tariff",
      "surge protector",
      "water shortage",
      "gas guzzler"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The charity dug a new _____ in the village, so children no longer have to walk hours every day to fetch water.",
    "options": [
      "borehole",
      "renegotiation",
      "rig",
      "conductivity"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The old _____ in the temple yard dried up during the drought, but the villagers hope it will fill again after the rains.",
    "options": [
      "devolution",
      "absence",
      "well",
      "hydrogen"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Coal and oil are _____ resources, so we will eventually run out of them if we keep burning them.",
    "options": [
      "petrochemical",
      "non-renewable",
      "convertible",
      "pilot"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Clean water is a _____ in many places, so people should not waste it while washing cars or watering lawns.",
    "options": [
      "oil well",
      "circuit breaker",
      "oil tanker",
      "finite resource"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Some _____ countries are still poor, because the money from oil and minerals does not reach ordinary people.",
    "options": [
      "multilateral",
      "resource-rich",
      "diffuse",
      "exploitable"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Economists use the term _____ to describe countries where oil money causes corruption and slows growth.",
    "options": [
      "fuel cell",
      "wind power",
      "scrap metal",
      "resource curse"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "_____ of groundwater has made the land sink along the coast, so some homes now flood at every high tide.",
    "options": [
      "kerosene",
      "silver",
      "overextraction",
      "modernisation"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Farmers and factories are arguing over _____, because there is not enough river water for both groups this year.",
    "options": [
      "water rights",
      "low-hanging fruit",
      "smart plug",
      "utility company"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our school uses _____ to water the gardens, so we save tap water and reduce our water bill.",
    "options": [
      "wind speed",
      "nuclear reactor",
      "rainwater harvesting",
      "power plant"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "_____ old phones keeps valuable metals in use, and it also stops toxic materials from ending up in landfill.",
    "options": [
      "insufficiency",
      "insecurity",
      "penetration",
      "recycling"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Piles of _____ are shipped to poor countries, where workers burn cables to get the copper and breathe in toxic smoke.",
    "options": [
      "e-waste",
      "draught",
      "overcapacity",
      "reclamation"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "In a _____, old products are repaired or recycled, so fewer new raw materials need to be dug from the ground.",
    "options": [
      "scrap metal",
      "circular economy",
      "rare earth elements",
      "energy transition"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The factory improved its _____ by reusing water and metal scraps, and it saved a lot of money as well.",
    "options": [
      "short circuit",
      "rolling blackout",
      "nuclear waste",
      "resource efficiency"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Taiwan imports almost all its fuel, so _____ is a major concern if shipping routes are ever blocked.",
    "options": [
      "green hydrogen",
      "oil reserves",
      "energy security",
      "solar water heater"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "During the _____ in 2022, gas prices in Europe rose so much that some factories had to close.",
    "options": [
      "power plant",
      "energy crisis",
      "conflict minerals",
      "liquefied natural gas"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Many elderly people live in _____, so they cannot afford to heat their homes properly in winter.",
    "options": [
      "energy poverty",
      "cooling tower",
      "nuclear power plant",
      "solar cell"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "_____ keeps rising because of new data centres, so power companies must build more plants quickly.",
    "options": [
      "eco mode",
      "peak oil",
      "energy demand",
      "heating oil"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "During the 1973 _____, petrol was so short that people waited in long queues at every station.",
    "options": [
      "oil crisis",
      "fuel cell",
      "energy bill",
      "wind power"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A _____ hit the country after the port was closed, so buses ran less often and many flights were cancelled.",
    "options": [
      "sand mining",
      "electric car",
      "transmission line",
      "fuel shortage"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many _____ countries are now investing in solar power, because they know oil will not last forever.",
    "options": [
      "expandable",
      "oil-rich",
      "underused",
      "reversible"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The president promised _____ within ten years, but experts doubted that the goal was realistic.",
    "options": [
      "energy independence",
      "strip mining",
      "oil well",
      "shale gas"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Investors fear the new coal plant will become a _____, because clean energy is getting cheaper every year.",
    "options": [
      "standby mode",
      "tidal power",
      "stranded asset",
      "nuclear power plant"
    ],
    "answer": 2,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "natural resources": {
    "pos": "n.phr.",
    "en_def": "things from nature that people use, like water and oil",
    "cn_def": "天然資源"
  },
  "resource depletion": {
    "pos": "n.phr.",
    "en_def": "using up natural resources faster than they return",
    "cn_def": "資源耗竭"
  },
  "water supply": {
    "pos": "n.phr.",
    "en_def": "the water provided to an area for people to use",
    "cn_def": "供水"
  },
  "water shortage": {
    "pos": "n.phr.",
    "en_def": "a situation when there is not enough water",
    "cn_def": "缺水"
  },
  "borehole": {
    "pos": "n.",
    "en_def": "a deep narrow hole dug to find water or oil",
    "cn_def": "鑽孔；水井"
  },
  "well": {
    "pos": "n.",
    "en_def": "a hole dug in the ground to get water",
    "cn_def": "井"
  },
  "non-renewable": {
    "pos": "adj.",
    "en_def": "not able to be replaced once it has been used",
    "cn_def": "不可再生的"
  },
  "finite resource": {
    "pos": "n.phr.",
    "en_def": "something that exists only in a limited amount",
    "cn_def": "有限資源"
  },
  "resource-rich": {
    "pos": "adj.",
    "en_def": "having a lot of natural resources",
    "cn_def": "資源豐富的"
  },
  "resource curse": {
    "pos": "n.phr.",
    "en_def": "when rich natural resources lead to poor development",
    "cn_def": "資源詛咒"
  },
  "overextraction": {
    "pos": "n.",
    "en_def": "taking too much of a resource from the ground",
    "cn_def": "過度抽取"
  },
  "water rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to use water from a river or lake",
    "cn_def": "水權"
  },
  "rainwater harvesting": {
    "pos": "n.phr.",
    "en_def": "collecting rain so it can be used later",
    "cn_def": "雨水回收"
  },
  "recycling": {
    "pos": "n.",
    "en_def": "treating used things so they can be used again",
    "cn_def": "回收"
  },
  "e-waste": {
    "pos": "n.",
    "en_def": "thrown-away electronic devices like phones and computers",
    "cn_def": "電子廢棄物"
  },
  "circular economy": {
    "pos": "n.phr.",
    "en_def": "a system where products are reused and recycled, not thrown away",
    "cn_def": "循環經濟"
  },
  "resource efficiency": {
    "pos": "n.phr.",
    "en_def": "using fewer materials to make the same product",
    "cn_def": "資源效率"
  },
  "energy security": {
    "pos": "n.phr.",
    "en_def": "having a reliable supply of energy at a fair price",
    "cn_def": "能源安全"
  },
  "energy crisis": {
    "pos": "n.phr.",
    "en_def": "a serious shortage of energy and very high prices",
    "cn_def": "能源危機"
  },
  "energy poverty": {
    "pos": "n.phr.",
    "en_def": "not being able to afford enough energy at home",
    "cn_def": "能源貧窮"
  },
  "energy demand": {
    "pos": "n.phr.",
    "en_def": "the amount of energy that people need",
    "cn_def": "能源需求"
  },
  "oil crisis": {
    "pos": "n.phr.",
    "en_def": "a time when oil becomes very scarce and expensive",
    "cn_def": "石油危機"
  },
  "fuel shortage": {
    "pos": "n.phr.",
    "en_def": "a situation when there is not enough fuel",
    "cn_def": "燃料短缺"
  },
  "oil-rich": {
    "pos": "adj.",
    "en_def": "having large amounts of oil",
    "cn_def": "石油蘊藏豐富的"
  },
  "energy independence": {
    "pos": "n.phr.",
    "en_def": "producing enough energy without relying on other countries",
    "cn_def": "能源自主"
  },
  "stranded asset": {
    "pos": "n.phr.",
    "en_def": "something valuable that loses its value early, like an unused coal plant",
    "cn_def": "擱淺資產"
  },
  "standby mode": {
    "pos": "n.phr.",
    "en_def": "when a machine is off but still uses a little power",
    "cn_def": "待機模式"
  },
  "capacity factor": {
    "pos": "n.phr.",
    "en_def": "how much power a plant really makes compared with its maximum",
    "cn_def": "容量因數"
  },
  "natural gas": {
    "pos": "n.phr.",
    "en_def": "a gas from under the ground used for heating and cooking",
    "cn_def": "天然氣"
  },
  "smart plug": {
    "pos": "n.phr.",
    "en_def": "a plug you can control with your phone",
    "cn_def": "智慧插座"
  },
  "smart grid": {
    "pos": "n.phr.",
    "en_def": "an electricity network that uses computers to manage power",
    "cn_def": "智慧電網"
  },
  "power strip": {
    "pos": "n.phr.",
    "en_def": "a row of sockets on a short cable",
    "cn_def": "排插"
  },
  "nuclear accident": {
    "pos": "n.phr.",
    "en_def": "an event that releases harmful radiation by mistake",
    "cn_def": "核子事故"
  },
  "oil well": {
    "pos": "n.phr.",
    "en_def": "a deep hole made in the ground to get oil out",
    "cn_def": "油井"
  },
  "oil slick": {
    "pos": "n.phr.",
    "en_def": "a layer of oil floating on the sea",
    "cn_def": "浮油"
  },
  "feed-in tariff": {
    "pos": "n.phr.",
    "en_def": "a fixed price paid for clean power sold to the grid",
    "cn_def": "躉購費率"
  },
  "surge protector": {
    "pos": "n.phr.",
    "en_def": "a device that protects machines from sudden strong electricity",
    "cn_def": "突波保護器"
  },
  "gas guzzler": {
    "pos": "n.phr.",
    "en_def": "a big car that uses a lot of fuel",
    "cn_def": "耗油車"
  },
  "renegotiation": {
    "pos": "n.",
    "en_def": "discussing an agreement again to change it",
    "cn_def": "重新談判"
  },
  "rig": {
    "pos": "n.",
    "en_def": "a large structure used to drill for oil or gas",
    "cn_def": "鑽油平台；鑽井設備"
  },
  "conductivity": {
    "pos": "n.",
    "en_def": "how easily electricity or heat moves through a material",
    "cn_def": "導電性；傳導率"
  },
  "devolution": {
    "pos": "n.",
    "en_def": "passing power from central government to local areas",
    "cn_def": "權力下放"
  },
  "absence": {
    "pos": "n.",
    "en_def": "the state of not being there",
    "cn_def": "缺乏；不在"
  },
  "hydrogen": {
    "pos": "n.",
    "en_def": "a very light gas that can be used as clean fuel",
    "cn_def": "氫"
  },
  "petrochemical": {
    "pos": "adj.",
    "en_def": "made from oil or natural gas",
    "cn_def": "石化的"
  },
  "convertible": {
    "pos": "adj.",
    "en_def": "able to be changed into another form",
    "cn_def": "可轉換的"
  },
  "pilot": {
    "pos": "adj.",
    "en_def": "done on a small scale as a test",
    "cn_def": "試驗性的；先導的"
  },
  "circuit breaker": {
    "pos": "n.phr.",
    "en_def": "a switch that stops electricity when there is a problem",
    "cn_def": "斷路器"
  },
  "oil tanker": {
    "pos": "n.phr.",
    "en_def": "a large ship that carries oil",
    "cn_def": "油輪"
  },
  "multilateral": {
    "pos": "adj.",
    "en_def": "involving three or more countries",
    "cn_def": "多邊的"
  },
  "diffuse": {
    "pos": "adj.",
    "en_def": "spread over a large area, not concentrated",
    "cn_def": "分散的；擴散的"
  },
  "exploitable": {
    "pos": "adj.",
    "en_def": "able to be used for profit",
    "cn_def": "可開採的；可利用的"
  },
  "fuel cell": {
    "pos": "n.phr.",
    "en_def": "a device that makes electricity from hydrogen and oxygen",
    "cn_def": "燃料電池"
  },
  "wind power": {
    "pos": "n.phr.",
    "en_def": "electricity made by the movement of wind",
    "cn_def": "風力發電"
  },
  "scrap metal": {
    "pos": "n.phr.",
    "en_def": "old metal that can be melted and used again",
    "cn_def": "廢金屬"
  },
  "kerosene": {
    "pos": "n.",
    "en_def": "an oil burned in lamps and some heaters",
    "cn_def": "煤油"
  },
  "silver": {
    "pos": "n.",
    "en_def": "a valuable shiny grey metal",
    "cn_def": "銀"
  },
  "modernisation": {
    "pos": "n.",
    "en_def": "the process of making something more up to date",
    "cn_def": "現代化"
  },
  "low-hanging fruit": {
    "pos": "n.phr.",
    "en_def": "the easiest things to do or achieve first",
    "cn_def": "容易達成的目標"
  },
  "utility company": {
    "pos": "n.phr.",
    "en_def": "a company that supplies electricity, gas or water",
    "cn_def": "公用事業公司"
  },
  "wind speed": {
    "pos": "n.phr.",
    "en_def": "how fast the wind is blowing",
    "cn_def": "風速"
  },
  "nuclear reactor": {
    "pos": "n.phr.",
    "en_def": "the machine in which nuclear energy is produced",
    "cn_def": "核子反應爐"
  },
  "power plant": {
    "pos": "n.phr.",
    "en_def": "a factory that produces electricity",
    "cn_def": "發電廠"
  },
  "insufficiency": {
    "pos": "n.",
    "en_def": "a lack of enough of something",
    "cn_def": "不足"
  },
  "insecurity": {
    "pos": "n.",
    "en_def": "a lack of safety or certainty",
    "cn_def": "不安全；不穩定"
  },
  "penetration": {
    "pos": "n.",
    "en_def": "how far something has spread into a market",
    "cn_def": "普及率；滲透率"
  },
  "draught": {
    "pos": "n.",
    "en_def": "cold air coming into a room through a gap",
    "cn_def": "穿堂風；冷風"
  },
  "overcapacity": {
    "pos": "n.",
    "en_def": "having more ability to produce than is needed",
    "cn_def": "產能過剩"
  },
  "reclamation": {
    "pos": "n.",
    "en_def": "making damaged land useful again",
    "cn_def": "復育；再利用"
  },
  "rare earth elements": {
    "pos": "n.phr.",
    "en_def": "special metals used in phones, magnets and electric cars",
    "cn_def": "稀土元素"
  },
  "energy transition": {
    "pos": "n.phr.",
    "en_def": "the change from fossil fuels to clean energy",
    "cn_def": "能源轉型"
  },
  "short circuit": {
    "pos": "n.phr.",
    "en_def": "a fault where electricity takes the wrong path",
    "cn_def": "短路"
  },
  "rolling blackout": {
    "pos": "n.phr.",
    "en_def": "planned power cuts that move from area to area",
    "cn_def": "輪流停電"
  },
  "nuclear waste": {
    "pos": "n.phr.",
    "en_def": "dangerous material left after making nuclear power",
    "cn_def": "核廢料"
  },
  "green hydrogen": {
    "pos": "n.phr.",
    "en_def": "hydrogen made using renewable electricity",
    "cn_def": "綠氫"
  },
  "oil reserves": {
    "pos": "n.phr.",
    "en_def": "the amount of oil a country still has underground",
    "cn_def": "石油蘊藏量"
  },
  "solar water heater": {
    "pos": "n.phr.",
    "en_def": "a system on a roof that uses the sun to heat water",
    "cn_def": "太陽能熱水器"
  },
  "conflict minerals": {
    "pos": "n.phr.",
    "en_def": "minerals mined in war areas that help pay for fighting",
    "cn_def": "衝突礦產"
  },
  "liquefied natural gas": {
    "pos": "n.phr.",
    "en_def": "natural gas cooled until it becomes liquid for shipping",
    "cn_def": "液化天然氣"
  },
  "cooling tower": {
    "pos": "n.phr.",
    "en_def": "a tall round tower that releases heat from a power plant",
    "cn_def": "冷卻塔"
  },
  "nuclear power plant": {
    "pos": "n.phr.",
    "en_def": "a power station that uses nuclear reactions",
    "cn_def": "核能發電廠"
  },
  "solar cell": {
    "pos": "n.phr.",
    "en_def": "a small device that changes sunlight into electricity",
    "cn_def": "太陽能電池"
  },
  "eco mode": {
    "pos": "n.phr.",
    "en_def": "a setting that makes a machine use less energy",
    "cn_def": "節能模式"
  },
  "peak oil": {
    "pos": "n.phr.",
    "en_def": "the time when world oil production reaches its highest point",
    "cn_def": "石油產量頂峰"
  },
  "heating oil": {
    "pos": "n.phr.",
    "en_def": "oil burned to keep buildings warm",
    "cn_def": "暖氣用油"
  },
  "energy bill": {
    "pos": "n.phr.",
    "en_def": "the amount you pay for gas and electricity",
    "cn_def": "能源帳單；電費"
  },
  "sand mining": {
    "pos": "n.phr.",
    "en_def": "taking sand from rivers and beaches for building",
    "cn_def": "採砂"
  },
  "electric car": {
    "pos": "n.phr.",
    "en_def": "a car that runs only on electricity from batteries",
    "cn_def": "電動車"
  },
  "transmission line": {
    "pos": "n.phr.",
    "en_def": "a high-voltage cable that carries power across a country",
    "cn_def": "輸電線路"
  },
  "expandable": {
    "pos": "adj.",
    "en_def": "able to be made larger",
    "cn_def": "可擴充的"
  },
  "underused": {
    "pos": "adj.",
    "en_def": "not used as much as it could be",
    "cn_def": "未充分利用的"
  },
  "reversible": {
    "pos": "adj.",
    "en_def": "able to be changed back",
    "cn_def": "可逆的"
  },
  "strip mining": {
    "pos": "n.phr.",
    "en_def": "removing the top layer of land to reach coal",
    "cn_def": "露天剝採"
  },
  "shale gas": {
    "pos": "n.phr.",
    "en_def": "natural gas trapped inside layers of soft rock",
    "cn_def": "頁岩氣"
  },
  "tidal power": {
    "pos": "n.phr.",
    "en_def": "electricity made from the rise and fall of the sea",
    "cn_def": "潮汐發電"
  }
};

const EXTRA_GLOSSES = {};
