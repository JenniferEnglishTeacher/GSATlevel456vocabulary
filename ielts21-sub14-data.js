// Topic 21 Subunit 14 Quiz Data: Academic Words 學術單字 7 (interruption – prospecting)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S14 - Academic Words 學術單字 7 (interruption – prospecting)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "interruption",
    "pos": "n.",
    "cn_def": "中斷",
    "en_def": "a break in a service or activity",
    "sentence": "There will be a short {{BLANK}} to the water supply tomorrow morning, so please fill some bottles tonight.",
    "cn": "明天早上供水將短暫中斷，所以請今晚先裝好幾瓶水。"
  },
  {
    "word": "irreplaceable",
    "pos": "adj.",
    "cn_def": "無可取代的",
    "en_def": "too special or rare to be replaced",
    "sentence": "The wetland is {{BLANK}} for migrating birds, so scientists strongly opposed plans to build a gas terminal there.",
    "cn": "這片濕地對候鳥來說是無可取代的，所以科學家強烈反對在那裡興建天然氣接收站。"
  },
  {
    "word": "irreversibly",
    "pos": "adv.",
    "cn_def": "不可逆地",
    "en_def": "in a way that cannot be changed back",
    "sentence": "The mine has {{BLANK}} changed the shape of the mountain, so the old hiking trail can never be restored.",
    "cn": "這座礦場已經不可逆地改變了山的形狀，所以舊登山步道再也無法恢復。"
  },
  {
    "word": "jeopardy",
    "pos": "n.",
    "cn_def": "危險；危難",
    "en_def": "danger of loss or harm",
    "sentence": "Thousands of jobs are in {{BLANK}} because the coal plant is closing, so the town is looking for new industries.",
    "cn": "由於燃煤電廠即將關閉，數千個工作陷入危險，所以鎮上正在尋找新的產業。"
  },
  {
    "word": "landlocked",
    "pos": "adj.",
    "cn_def": "內陸的",
    "en_def": "surrounded by land, with no coast",
    "sentence": "The country is {{BLANK}} and has no ports, so it must send its oil through pipelines across other countries to reach the sea.",
    "cn": "這個國家是內陸國，沒有港口，所以它必須透過穿越其他國家的管線把石油送到海邊。"
  },
  {
    "word": "lead time",
    "pos": "n.phr.",
    "cn_def": "前置時間",
    "en_def": "the time between starting something and finishing it",
    "sentence": "Nuclear plants have a long {{BLANK}}, so a plant planned today may not produce power for over ten years.",
    "cn": "核電廠的前置時間很長，所以今天規劃的電廠可能要十多年後才能發電。"
  },
  {
    "word": "leakage",
    "pos": "n.",
    "cn_def": "洩漏",
    "en_def": "the escape of liquid or gas through a hole",
    "sentence": "Methane {{BLANK}} from old gas pipes is a serious problem, because this gas traps much more heat than carbon dioxide.",
    "cn": "老舊天然氣管線的甲烷洩漏是嚴重問題，因為這種氣體比二氧化碳吸收更多熱。"
  },
  {
    "word": "legislate",
    "pos": "v.",
    "cn_def": "立法",
    "en_def": "to make laws",
    "sentence": "Parliament plans to {{BLANK}} against selling new petrol cars after 2035, but car makers have asked for more time.",
    "cn": "國會計畫立法禁止在2035年後販售新的汽油車，但汽車製造商要求更多時間。"
  },
  {
    "word": "lifetime",
    "pos": "n.",
    "cn_def": "壽命",
    "en_def": "the period of time something lasts",
    "sentence": "Solar panels have a {{BLANK}} of about twenty-five years, so they continue producing power long after their cost is paid back.",
    "cn": "太陽能板的壽命大約二十五年，所以在回本之後仍會持續發電很久。"
  },
  {
    "word": "long-run",
    "pos": "adj.",
    "cn_def": "長期的",
    "en_def": "relating to a long period of time",
    "sentence": "The {{BLANK}} benefits of insulation are clear, but many landlords do not want to pay the cost today.",
    "cn": "隔熱的長期好處很明顯，但許多房東不想現在付出成本。"
  },
  {
    "word": "marginalise",
    "pos": "v.",
    "cn_def": "邊緣化",
    "en_def": "to treat a person or group as unimportant",
    "sentence": "Big energy projects sometimes {{BLANK}} local communities, because decisions are made in the capital without asking them.",
    "cn": "大型能源計畫有時會把地方社區邊緣化，因為決策在首都做出而沒有詢問他們。"
  },
  {
    "word": "moratorium",
    "pos": "n.",
    "cn_def": "暫停令",
    "en_def": "an official stop to an activity for a time",
    "sentence": "The government placed a {{BLANK}} on new coal mines, so no new projects can start for the next five years.",
    "cn": "政府對新煤礦下了暫停令，所以未來五年都不能啟動新計畫。"
  },
  {
    "word": "multilateral",
    "pos": "adj.",
    "cn_def": "多邊的",
    "en_def": "involving three or more countries",
    "sentence": "A {{BLANK}} agreement was signed to protect the river, because it flows through four different countries.",
    "cn": "為了保護這條河，各國簽署了一項多邊協議，因為它流經四個不同國家。"
  },
  {
    "word": "neutrality",
    "pos": "n.",
    "cn_def": "中和；中立",
    "en_def": "the state of not causing a particular effect",
    "sentence": "The city aims to reach carbon {{BLANK}} by 2050, so it is planting trees and switching buses to electric power.",
    "cn": "這座城市目標在2050年達成碳中和，所以它正在植樹並把公車改為電動。"
  },
  {
    "word": "onshore",
    "pos": "adj.",
    "cn_def": "陸上的",
    "en_def": "on land rather than at sea",
    "sentence": "{{BLANK}} wind farms are cheaper to build, but people living nearby sometimes complain about the noise and the view.",
    "cn": "陸上風場建造成本較低，但附近居民有時會抱怨噪音和景觀。"
  },
  {
    "word": "outflow",
    "pos": "n.",
    "cn_def": "流出",
    "en_def": "movement of something out of a place",
    "sentence": "There was a large {{BLANK}} of money from oil companies last year, because investors moved their money into clean energy.",
    "cn": "去年石油公司出現大量資金流出，因為投資人把錢轉移到乾淨能源。"
  },
  {
    "word": "outsourcing",
    "pos": "n.",
    "cn_def": "外包",
    "en_def": "paying another company to do work for you",
    "sentence": "The {{BLANK}} of battery production to other countries saved money, but it also made the car industry less secure.",
    "cn": "把電池生產外包到其他國家省下了錢，但也讓汽車產業變得較不安全。"
  },
  {
    "word": "payback period",
    "pos": "n.phr.",
    "cn_def": "回收期",
    "en_def": "the time it takes for savings to repay the cost",
    "sentence": "The {{BLANK}} for rooftop solar is about seven years, so after that the family gets almost free electricity.",
    "cn": "屋頂太陽能的回收期大約七年，所以之後這個家庭幾乎可以免費用電。"
  },
  {
    "word": "penetration",
    "pos": "n.",
    "cn_def": "普及率；滲透率",
    "en_def": "how far something has spread into a market",
    "sentence": "The {{BLANK}} of electric cars in Norway is very high, so most new cars sold there are now electric.",
    "cn": "挪威的電動車普及率非常高，所以那裡賣出的新車現在大多是電動車。"
  },
  {
    "word": "phase-out",
    "pos": "n.",
    "cn_def": "逐步淘汰",
    "en_def": "the gradual ending of something",
    "sentence": "The {{BLANK}} of coal will take many years, because the country still depends on it for much of its electricity.",
    "cn": "煤炭的逐步淘汰將需要很多年，因為這個國家仍有大量電力依賴它。"
  },
  {
    "word": "pilot",
    "pos": "adj.",
    "cn_def": "試驗性的；先導的",
    "en_def": "done on a small scale as a test",
    "sentence": "The city started a {{BLANK}} project with electric scooters, and if it succeeds, the programme will spread to every district.",
    "cn": "市政府啟動了一項電動機車的先導計畫，如果成功，這個方案將推廣到每個區域。"
  },
  {
    "word": "polarised",
    "pos": "adj.",
    "cn_def": "兩極化的",
    "en_def": "divided into two strongly opposing groups",
    "sentence": "Opinion on nuclear power is very {{BLANK}}, so it is hard for the government to make a decision everyone accepts.",
    "cn": "對核能的意見非常兩極化，所以政府很難做出人人都接受的決定。"
  },
  {
    "word": "predictability",
    "pos": "n.",
    "cn_def": "可預測性",
    "en_def": "the quality of being expected or known in advance",
    "sentence": "Investors value the {{BLANK}} of tidal power, because the tides follow a clear pattern every day.",
    "cn": "投資人重視潮汐發電的可預測性，因為潮汐每天都遵循清楚的規律。"
  },
  {
    "word": "price ceiling",
    "pos": "n.phr.",
    "cn_def": "價格上限",
    "en_def": "the highest price allowed by law",
    "sentence": "The government set a {{BLANK}} on cooking gas, so poor families could still afford to cook during the crisis.",
    "cn": "政府對烹飪用瓦斯設定了價格上限，所以貧窮家庭在危機期間仍能負擔得起煮飯。"
  },
  {
    "word": "prospecting",
    "pos": "n.",
    "cn_def": "探勘",
    "en_def": "searching an area for gold, oil or minerals",
    "sentence": "{{BLANK}} for lithium has started in the desert, and many people hope it will bring jobs to the poor region.",
    "cn": "沙漠中已經開始探勘鋰礦，許多人希望它能為這個貧窮地區帶來工作。"
  }
];

const MCQS = [
  {
    "q": "There will be a short _____ to the water supply tomorrow morning, so please fill some bottles tonight.",
    "options": [
      "interruption",
      "zinc",
      "renewables",
      "self-reliance"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The wetland is _____ for migrating birds, so scientists strongly opposed plans to build a gas terminal there.",
    "options": [
      "protectionist",
      "distributional",
      "irreplaceable",
      "infeasible"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The mine has _____ changed the shape of the mountain, so the old hiking trail can never be restored.",
    "options": [
      "conventionally",
      "irreversibly",
      "underground",
      "downstream"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Thousands of jobs are in _____ because the coal plant is closing, so the town is looking for new industries.",
    "options": [
      "disadvantage",
      "barrel",
      "radioactivity",
      "jeopardy"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The country is _____ and has no ports, so it must send its oil through pipelines across other countries to reach the sea.",
    "options": [
      "extractive",
      "landlocked",
      "petrochemical",
      "replaceable"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Nuclear plants have a long _____, so a plant planned today may not produce power for over ten years.",
    "options": [
      "wind speed",
      "ore deposit",
      "energy transition",
      "lead time"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Methane _____ from old gas pipes is a serious problem, because this gas traps much more heat than carbon dioxide.",
    "options": [
      "fundamentals",
      "spillover",
      "leakage",
      "interconnection"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Parliament plans to _____ against selling new petrol cars after 2035, but car makers have asked for more time.",
    "options": [
      "legislate",
      "draught-proof",
      "unplug",
      "depreciate"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Solar panels have a _____ of about twenty-five years, so they continue producing power long after their cost is paid back.",
    "options": [
      "enlargement",
      "lifetime",
      "tin",
      "remediation"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The _____ benefits of insulation are clear, but many landlords do not want to pay the cost today.",
    "options": [
      "globalised",
      "import-dependent",
      "long-run",
      "inflexible"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Big energy projects sometimes _____ local communities, because decisions are made in the capital without asking them.",
    "options": [
      "unplug",
      "downgrade",
      "nationalise",
      "marginalise"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The government placed a _____ on new coal mines, so no new projects can start for the next five years.",
    "options": [
      "moratorium",
      "uranium",
      "desirability",
      "pylon"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "A _____ agreement was signed to protect the river, because it flows through four different countries.",
    "options": [
      "diminished",
      "multilateral",
      "destabilising",
      "exportable"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The city aims to reach carbon _____ by 2050, so it is planting trees and switching buses to electric power.",
    "options": [
      "neutrality",
      "pylon",
      "devastation",
      "fracking"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "_____ wind farms are cheaper to build, but people living nearby sometimes complain about the noise and the view.",
    "options": [
      "corrosive",
      "reversible",
      "unabated",
      "onshore"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "There was a large _____ of money from oil companies last year, because investors moved their money into clean energy.",
    "options": [
      "dam",
      "inaction",
      "outflow",
      "overdependence"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ of battery production to other countries saved money, but it also made the car industry less secure.",
    "options": [
      "lithium",
      "outsourcing",
      "brink",
      "multiplier"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The _____ for rooftop solar is about seven years, so after that the family gets almost free electricity.",
    "options": [
      "payback period",
      "resource curse",
      "mineral rights",
      "alternative energy"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The _____ of electric cars in Norway is very high, so most new cars sold there are now electric.",
    "options": [
      "devolution",
      "fundamentals",
      "baseload",
      "penetration"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The _____ of coal will take many years, because the country still depends on it for much of its electricity.",
    "options": [
      "baseload",
      "disadvantage",
      "phase-out",
      "taxpayer"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The city started a _____ project with electric scooters, and if it succeeds, the programme will spread to every district.",
    "options": [
      "fragmentary",
      "projected",
      "resource-rich",
      "pilot"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Opinion on nuclear power is very _____, so it is hard for the government to make a decision everyone accepts.",
    "options": [
      "polarised",
      "unrestricted",
      "conductive",
      "dwindling"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Investors value the _____ of tidal power, because the tides follow a clear pattern every day.",
    "options": [
      "minimisation",
      "discontinuation",
      "predictability",
      "pipeline"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The government set a _____ on cooking gas, so poor families could still afford to cook during the crisis.",
    "options": [
      "open-pit mine",
      "price ceiling",
      "seismic survey",
      "strip mining"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "_____ for lithium has started in the desert, and many people hope it will bring jobs to the poor region.",
    "options": [
      "prospecting",
      "draught",
      "platinum",
      "amplification"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "interruption": {
    "pos": "n.",
    "en_def": "a break in a service or activity",
    "cn_def": "中斷"
  },
  "irreplaceable": {
    "pos": "adj.",
    "en_def": "too special or rare to be replaced",
    "cn_def": "無可取代的"
  },
  "irreversibly": {
    "pos": "adv.",
    "en_def": "in a way that cannot be changed back",
    "cn_def": "不可逆地"
  },
  "jeopardy": {
    "pos": "n.",
    "en_def": "danger of loss or harm",
    "cn_def": "危險；危難"
  },
  "landlocked": {
    "pos": "adj.",
    "en_def": "surrounded by land, with no coast",
    "cn_def": "內陸的"
  },
  "lead time": {
    "pos": "n.phr.",
    "en_def": "the time between starting something and finishing it",
    "cn_def": "前置時間"
  },
  "leakage": {
    "pos": "n.",
    "en_def": "the escape of liquid or gas through a hole",
    "cn_def": "洩漏"
  },
  "legislate": {
    "pos": "v.",
    "en_def": "to make laws",
    "cn_def": "立法"
  },
  "lifetime": {
    "pos": "n.",
    "en_def": "the period of time something lasts",
    "cn_def": "壽命"
  },
  "long-run": {
    "pos": "adj.",
    "en_def": "relating to a long period of time",
    "cn_def": "長期的"
  },
  "marginalise": {
    "pos": "v.",
    "en_def": "to treat a person or group as unimportant",
    "cn_def": "邊緣化"
  },
  "moratorium": {
    "pos": "n.",
    "en_def": "an official stop to an activity for a time",
    "cn_def": "暫停令"
  },
  "multilateral": {
    "pos": "adj.",
    "en_def": "involving three or more countries",
    "cn_def": "多邊的"
  },
  "neutrality": {
    "pos": "n.",
    "en_def": "the state of not causing a particular effect",
    "cn_def": "中和；中立"
  },
  "onshore": {
    "pos": "adj.",
    "en_def": "on land rather than at sea",
    "cn_def": "陸上的"
  },
  "outflow": {
    "pos": "n.",
    "en_def": "movement of something out of a place",
    "cn_def": "流出"
  },
  "outsourcing": {
    "pos": "n.",
    "en_def": "paying another company to do work for you",
    "cn_def": "外包"
  },
  "payback period": {
    "pos": "n.phr.",
    "en_def": "the time it takes for savings to repay the cost",
    "cn_def": "回收期"
  },
  "penetration": {
    "pos": "n.",
    "en_def": "how far something has spread into a market",
    "cn_def": "普及率；滲透率"
  },
  "phase-out": {
    "pos": "n.",
    "en_def": "the gradual ending of something",
    "cn_def": "逐步淘汰"
  },
  "pilot": {
    "pos": "adj.",
    "en_def": "done on a small scale as a test",
    "cn_def": "試驗性的；先導的"
  },
  "polarised": {
    "pos": "adj.",
    "en_def": "divided into two strongly opposing groups",
    "cn_def": "兩極化的"
  },
  "predictability": {
    "pos": "n.",
    "en_def": "the quality of being expected or known in advance",
    "cn_def": "可預測性"
  },
  "price ceiling": {
    "pos": "n.phr.",
    "en_def": "the highest price allowed by law",
    "cn_def": "價格上限"
  },
  "prospecting": {
    "pos": "n.",
    "en_def": "searching an area for gold, oil or minerals",
    "cn_def": "探勘"
  },
  "zinc": {
    "pos": "n.",
    "en_def": "a blue-white metal used to protect steel from rust",
    "cn_def": "鋅"
  },
  "renewables": {
    "pos": "n.",
    "en_def": "energy sources such as sun and wind that never run out",
    "cn_def": "再生能源"
  },
  "self-reliance": {
    "pos": "n.",
    "en_def": "depending on your own abilities and resources",
    "cn_def": "自力更生"
  },
  "protectionist": {
    "pos": "adj.",
    "en_def": "protecting local industry by limiting foreign goods",
    "cn_def": "保護主義的"
  },
  "distributional": {
    "pos": "adj.",
    "en_def": "related to how something is shared among people",
    "cn_def": "分配的"
  },
  "infeasible": {
    "pos": "adj.",
    "en_def": "not possible to do in practice",
    "cn_def": "不可行的"
  },
  "conventionally": {
    "pos": "adv.",
    "en_def": "in the usual, traditional way",
    "cn_def": "傳統上；按慣例"
  },
  "underground": {
    "pos": "adv.",
    "en_def": "below the surface of the ground",
    "cn_def": "在地下"
  },
  "downstream": {
    "pos": "adv.",
    "en_def": "further along a river, towards its end",
    "cn_def": "在下游"
  },
  "disadvantage": {
    "pos": "n.",
    "en_def": "something that makes a situation less good",
    "cn_def": "缺點"
  },
  "barrel": {
    "pos": "n.",
    "en_def": "a unit used to measure oil, about 159 litres",
    "cn_def": "桶（石油計量單位）"
  },
  "radioactivity": {
    "pos": "n.",
    "en_def": "the harmful energy given off by some materials",
    "cn_def": "放射性；輻射能"
  },
  "extractive": {
    "pos": "adj.",
    "en_def": "related to taking resources out of the ground",
    "cn_def": "採掘的"
  },
  "petrochemical": {
    "pos": "adj.",
    "en_def": "made from oil or natural gas",
    "cn_def": "石化的"
  },
  "replaceable": {
    "pos": "adj.",
    "en_def": "able to be replaced",
    "cn_def": "可替換的"
  },
  "wind speed": {
    "pos": "n.phr.",
    "en_def": "how fast the wind is blowing",
    "cn_def": "風速"
  },
  "ore deposit": {
    "pos": "n.phr.",
    "en_def": "a natural collection of rock containing useful metal",
    "cn_def": "礦床"
  },
  "energy transition": {
    "pos": "n.phr.",
    "en_def": "the change from fossil fuels to clean energy",
    "cn_def": "能源轉型"
  },
  "fundamentals": {
    "pos": "n.",
    "en_def": "the basic and most important parts of something",
    "cn_def": "基本原理；基礎"
  },
  "spillover": {
    "pos": "n.",
    "en_def": "an effect that spreads beyond its original area",
    "cn_def": "外溢效應"
  },
  "interconnection": {
    "pos": "n.",
    "en_def": "a link between two or more things",
    "cn_def": "互聯；相互連接"
  },
  "draught-proof": {
    "pos": "v.",
    "en_def": "to block gaps so cold air cannot come in",
    "cn_def": "防風密封"
  },
  "unplug": {
    "pos": "v.",
    "en_def": "to take a plug out of a socket",
    "cn_def": "拔掉插頭"
  },
  "depreciate": {
    "pos": "v.",
    "en_def": "to lose value over time",
    "cn_def": "貶值；折舊"
  },
  "enlargement": {
    "pos": "n.",
    "en_def": "the act of making something bigger",
    "cn_def": "擴大；擴建"
  },
  "tin": {
    "pos": "n.",
    "en_def": "a soft silver metal often used to coat other metals",
    "cn_def": "錫"
  },
  "remediation": {
    "pos": "n.",
    "en_def": "the process of cleaning up polluted land or water",
    "cn_def": "整治；修復"
  },
  "globalised": {
    "pos": "adj.",
    "en_def": "connected across the whole world",
    "cn_def": "全球化的"
  },
  "import-dependent": {
    "pos": "adj.",
    "en_def": "relying on goods from other countries",
    "cn_def": "依賴進口的"
  },
  "inflexible": {
    "pos": "adj.",
    "en_def": "unable to change easily",
    "cn_def": "缺乏彈性的；僵化的"
  },
  "downgrade": {
    "pos": "v.",
    "en_def": "to lower the level or importance of something",
    "cn_def": "降低；下修"
  },
  "nationalise": {
    "pos": "v.",
    "en_def": "to bring a private company under government control",
    "cn_def": "收歸國有"
  },
  "uranium": {
    "pos": "n.",
    "en_def": "a heavy metal used as fuel in nuclear power",
    "cn_def": "鈾"
  },
  "desirability": {
    "pos": "n.",
    "en_def": "how much something is wanted or seen as good",
    "cn_def": "可取性；吸引力"
  },
  "pylon": {
    "pos": "n.",
    "en_def": "a tall metal tower that holds up power lines",
    "cn_def": "電塔"
  },
  "diminished": {
    "pos": "adj.",
    "en_def": "made smaller or weaker",
    "cn_def": "減弱的"
  },
  "destabilising": {
    "pos": "adj.",
    "en_def": "making a situation less steady or safe",
    "cn_def": "造成不穩定的"
  },
  "exportable": {
    "pos": "adj.",
    "en_def": "suitable for selling to other countries",
    "cn_def": "可出口的"
  },
  "devastation": {
    "pos": "n.",
    "en_def": "very great damage",
    "cn_def": "嚴重破壞"
  },
  "fracking": {
    "pos": "n.",
    "en_def": "pumping water into rocks to break them and release gas",
    "cn_def": "水力壓裂法"
  },
  "corrosive": {
    "pos": "adj.",
    "en_def": "able to slowly damage metal or other materials",
    "cn_def": "腐蝕性的"
  },
  "reversible": {
    "pos": "adj.",
    "en_def": "able to be changed back",
    "cn_def": "可逆的"
  },
  "unabated": {
    "pos": "adj.",
    "en_def": "continuing without becoming weaker",
    "cn_def": "有增無減的"
  },
  "dam": {
    "pos": "n.",
    "en_def": "a wall built across a river to hold back water",
    "cn_def": "水壩"
  },
  "inaction": {
    "pos": "n.",
    "en_def": "failure to do anything",
    "cn_def": "不作為"
  },
  "overdependence": {
    "pos": "n.",
    "en_def": "relying too much on one thing",
    "cn_def": "過度依賴"
  },
  "lithium": {
    "pos": "n.",
    "en_def": "a light metal used in rechargeable batteries",
    "cn_def": "鋰"
  },
  "brink": {
    "pos": "n.",
    "en_def": "the point just before something bad happens",
    "cn_def": "邊緣"
  },
  "multiplier": {
    "pos": "n.",
    "en_def": "something that increases the effect of something else",
    "cn_def": "乘數；倍增因素"
  },
  "resource curse": {
    "pos": "n.phr.",
    "en_def": "when rich natural resources lead to poor development",
    "cn_def": "資源詛咒"
  },
  "mineral rights": {
    "pos": "n.phr.",
    "en_def": "the legal right to take minerals from a piece of land",
    "cn_def": "礦業權"
  },
  "alternative energy": {
    "pos": "n.phr.",
    "en_def": "energy that does not come from fossil fuels",
    "cn_def": "替代能源"
  },
  "devolution": {
    "pos": "n.",
    "en_def": "passing power from central government to local areas",
    "cn_def": "權力下放"
  },
  "baseload": {
    "pos": "n.",
    "en_def": "the minimum amount of power needed all the time",
    "cn_def": "基載電力"
  },
  "taxpayer": {
    "pos": "n.",
    "en_def": "a person who pays tax",
    "cn_def": "納稅人"
  },
  "fragmentary": {
    "pos": "adj.",
    "en_def": "incomplete and in small parts",
    "cn_def": "零碎的"
  },
  "projected": {
    "pos": "adj.",
    "en_def": "expected based on current information",
    "cn_def": "預計的"
  },
  "resource-rich": {
    "pos": "adj.",
    "en_def": "having a lot of natural resources",
    "cn_def": "資源豐富的"
  },
  "unrestricted": {
    "pos": "adj.",
    "en_def": "not limited by rules",
    "cn_def": "不受限制的"
  },
  "conductive": {
    "pos": "adj.",
    "en_def": "allowing electricity or heat to pass through",
    "cn_def": "導電的；傳導的"
  },
  "dwindling": {
    "pos": "adj.",
    "en_def": "becoming gradually smaller in amount",
    "cn_def": "日漸減少的"
  },
  "minimisation": {
    "pos": "n.",
    "en_def": "the act of making something as small as possible",
    "cn_def": "最小化"
  },
  "discontinuation": {
    "pos": "n.",
    "en_def": "the act of stopping something",
    "cn_def": "停止；中止"
  },
  "pipeline": {
    "pos": "n.",
    "en_def": "a long pipe that carries oil, gas or water far away",
    "cn_def": "輸送管線"
  },
  "open-pit mine": {
    "pos": "n.phr.",
    "en_def": "a mine dug as a huge hole from the surface",
    "cn_def": "露天礦"
  },
  "seismic survey": {
    "pos": "n.phr.",
    "en_def": "a study that uses sound waves to look under the ground",
    "cn_def": "震測調查"
  },
  "strip mining": {
    "pos": "n.phr.",
    "en_def": "removing the top layer of land to reach coal",
    "cn_def": "露天剝採"
  },
  "draught": {
    "pos": "n.",
    "en_def": "cold air coming into a room through a gap",
    "cn_def": "穿堂風；冷風"
  },
  "platinum": {
    "pos": "n.",
    "en_def": "a rare and valuable silver-white metal",
    "cn_def": "鉑；白金"
  },
  "amplification": {
    "pos": "n.",
    "en_def": "the act of making something larger or stronger",
    "cn_def": "擴大；放大"
  }
};

const EXTRA_GLOSSES = {};
