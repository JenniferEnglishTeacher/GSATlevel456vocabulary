// Topic 12 Subunit 8 Quiz Data: Academic Words 學術單字 1 (approximate – presumably)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S08 - Academic Words 學術單字 1 (approximate – presumably)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "approximate",
    "pos": "adj.",
    "cn_def": "大約的",
    "en_def": "close to the exact number but not exact",
    "sentence": "The guide gave us the {{BLANK}} height of the volcano, but she said the exact number changes slightly after each eruption.",
    "cn": "導遊告訴我們那座火山的大約高度，但她說確切數字在每次噴發後都會略有改變。"
  },
  {
    "word": "coincidental",
    "pos": "adj.",
    "cn_def": "巧合的",
    "en_def": "happening by chance, not planned",
    "sentence": "The two earthquakes happened on the same day, but scientists said it was {{BLANK}} because they were on different faults.",
    "cn": "兩場地震在同一天發生，但科學家說那是巧合，因為它們位於不同的斷層上。"
  },
  {
    "word": "constrain",
    "pos": "v.",
    "cn_def": "限制；約束",
    "en_def": "to limit what someone or something can do",
    "sentence": "A small budget {{BLANK}} the team's research, so they could only study one volcano instead of three.",
    "cn": "微薄的預算限制了團隊的研究，所以他們只能研究一座火山，而不是三座。"
  },
  {
    "word": "conversion",
    "pos": "n.",
    "cn_def": "轉換",
    "en_def": "the act of changing something into another form",
    "sentence": "The {{BLANK}} of sunlight into electricity powers the space station, and the large solar panels are always turned toward the sun.",
    "cn": "將陽光轉換成電力為太空站提供能源，而那些大型太陽能板總是朝向太陽。"
  },
  {
    "word": "criterion",
    "pos": "n.",
    "cn_def": "標準；準則",
    "en_def": "a standard used to judge something",
    "sentence": "The most important {{BLANK}} for a new observatory is dark skies, so most are built far from big cities.",
    "cn": "新天文臺最重要的標準是天空要暗，所以大多數天文臺都建在遠離大城市的地方。"
  },
  {
    "word": "deduction",
    "pos": "n.",
    "cn_def": "推論",
    "en_def": "reaching a conclusion by careful reasoning",
    "sentence": "Through careful {{BLANK}}, the detective in the novel found the thief, but readers were still surprised by the ending.",
    "cn": "透過仔細的推論，小說中的偵探找到了小偷，但讀者仍對結局感到驚訝。"
  },
  {
    "word": "demonstrable",
    "pos": "adj.",
    "cn_def": "可證明的",
    "en_def": "able to be shown or proved clearly",
    "sentence": "The new warning system has had a {{BLANK}} effect on safety, because fewer people were hurt in this year's earthquakes.",
    "cn": "新的預警系統對安全產生了可證明的效果，因為今年的地震中受傷的人變少了。"
  },
  {
    "word": "deviation",
    "pos": "n.",
    "cn_def": "偏離；偏差",
    "en_def": "a change from the usual or expected path",
    "sentence": "Even a small {{BLANK}} from the planned route could send the spacecraft into the wrong orbit, so engineers check it constantly.",
    "cn": "即使是與預定路線的微小偏差也可能讓太空船進入錯誤的軌道，所以工程師不斷檢查。"
  },
  {
    "word": "distinctive",
    "pos": "adj.",
    "cn_def": "獨特的",
    "en_def": "easy to recognise because it is special",
    "sentence": "Saturn has {{BLANK}} rings that are easy to spot, so it is often the first planet that children learn to recognise.",
    "cn": "土星有容易辨認的獨特光環，所以它常常是孩子們第一個學會認出的行星。"
  },
  {
    "word": "empirically",
    "pos": "adv.",
    "cn_def": "以實證方式",
    "en_def": "by observation or experiment rather than theory",
    "sentence": "The idea sounded strange at first, but scientists tested it {{BLANK}}, and the results showed that it was correct.",
    "cn": "這個想法起初聽起來很奇怪，但科學家以實證方式測試了它，而結果顯示它是正確的。"
  },
  {
    "word": "expansion",
    "pos": "n.",
    "cn_def": "擴張；膨脹",
    "en_def": "the process of becoming larger",
    "sentence": "The {{BLANK}} of the universe means that distant galaxies are moving away from us, and they are moving faster every year.",
    "cn": "宇宙的膨脹意味著遙遠的星系正在遠離我們，而且它們每年都移動得更快。"
  },
  {
    "word": "formation",
    "pos": "n.",
    "cn_def": "形成",
    "en_def": "the process by which something is made",
    "sentence": "The {{BLANK}} of a new island near Japan surprised scientists, and they quickly sailed there to study the fresh lava.",
    "cn": "日本附近一座新島嶼的形成讓科學家很驚訝，而他們很快就航行到那裡研究新鮮的熔岩。"
  },
  {
    "word": "hypothesise",
    "pos": "v.",
    "cn_def": "提出假設",
    "en_def": "to suggest an idea that can be tested",
    "sentence": "Some researchers {{BLANK}} that animals can sense earthquakes early, but nobody has proved this idea yet.",
    "cn": "有些研究者假設動物能提早感知地震，但還沒有人證實這個想法。"
  },
  {
    "word": "indication",
    "pos": "n.",
    "cn_def": "跡象",
    "en_def": "a sign that shows something is happening",
    "sentence": "There was no {{BLANK}} that the volcano would erupt, so the sudden explosion shocked everyone living nearby.",
    "cn": "沒有任何跡象顯示那座火山會噴發，所以突如其來的爆炸讓住在附近的每個人都很震驚。"
  },
  {
    "word": "infinite",
    "pos": "adj.",
    "cn_def": "無限的",
    "en_def": "without any limit or end",
    "sentence": "Some people believe that space is {{BLANK}}, but others think it must have an edge somewhere.",
    "cn": "有些人相信太空是無限的，但其他人認為它一定在某處有邊界。"
  },
  {
    "word": "integrate",
    "pos": "v.",
    "cn_def": "整合",
    "en_def": "to combine things so they work together",
    "sentence": "The app {{BLANK}} earthquake alerts with maps, so users can quickly see the nearest safe place to go.",
    "cn": "這個應用程式把地震警報和地圖整合在一起，所以使用者可以很快看到最近的安全地點。"
  },
  {
    "word": "interact",
    "pos": "v.",
    "cn_def": "相互作用；互動",
    "en_def": "to act on or affect each other",
    "sentence": "The moon and the oceans {{BLANK}} through gravity, and this is why the sea rises and falls twice a day.",
    "cn": "月球和海洋透過重力相互作用，而這就是海水一天漲落兩次的原因。"
  },
  {
    "word": "investigation",
    "pos": "n.",
    "cn_def": "調查",
    "en_def": "a careful study to find the facts",
    "sentence": "After the bridge collapsed, an {{BLANK}} found that the builders had ignored the earthquake rules, so they were fined.",
    "cn": "橋梁倒塌後，一項調查發現建商忽視了防震規定，所以他們被罰款。"
  },
  {
    "word": "invisible",
    "pos": "adj.",
    "cn_def": "看不見的",
    "en_def": "impossible to see",
    "sentence": "Radio waves are {{BLANK}} to our eyes, but special telescopes can turn them into pictures that we can understand.",
    "cn": "無線電波是我們的眼睛看不見的，但特殊的望遠鏡能把它們轉換成我們能理解的圖像。"
  },
  {
    "word": "irregular",
    "pos": "adj.",
    "cn_def": "不規則的",
    "en_def": "not having a regular shape or pattern",
    "sentence": "Most asteroids have an {{BLANK}} shape, so they look more like potatoes than round planets.",
    "cn": "大多數小行星的形狀不規則，所以它們看起來比較像馬鈴薯而不是圓形的行星。"
  },
  {
    "word": "notable",
    "pos": "adj.",
    "cn_def": "值得注意的",
    "en_def": "important or interesting enough to be noticed",
    "sentence": "The most {{BLANK}} discovery of the trip was a new crystal cave, and the news soon spread around the world.",
    "cn": "那次旅程最值得注意的發現是一個新的晶洞，而這則新聞很快就傳遍了全世界。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "觀察",
    "en_def": "to watch something carefully",
    "sentence": "Students {{BLANK}} the moon every night for a month, and they recorded how its shape slowly changed.",
    "cn": "學生們連續一個月每晚觀察月亮，而且他們記錄了月亮的形狀如何慢慢改變。"
  },
  {
    "word": "occurrence",
    "pos": "n.",
    "cn_def": "發生的事；事件",
    "en_def": "something that happens",
    "sentence": "Earthquakes are a common {{BLANK}} in Taiwan, so most buildings are designed to sway without falling down.",
    "cn": "地震在臺灣是常見的事，所以大多數建築都設計成會搖晃但不會倒塌。"
  },
  {
    "word": "presence",
    "pos": "n.",
    "cn_def": "存在",
    "en_def": "the fact of being in a place",
    "sentence": "The {{BLANK}} of water on Mars long ago excites scientists, because life usually needs water to survive.",
    "cn": "火星很久以前有水存在這件事讓科學家很興奮，因為生命通常需要水才能存活。"
  },
  {
    "word": "presumably",
    "pos": "adv.",
    "cn_def": "據推測；大概",
    "en_def": "used to say what you think is probably true",
    "sentence": "The ancient lake is now completely dry, so the climate here was {{BLANK}} much wetter thousands of years ago.",
    "cn": "那座古湖現在完全乾涸了，所以這裡的氣候在數千年前大概潮濕得多。"
  }
];

const MCQS = [
  {
    "q": "The guide gave us the _____ height of the volcano, but she said the exact number changes slightly after each eruption.",
    "options": [
      "resistant",
      "orbital",
      "tremendous",
      "approximate"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The two earthquakes happened on the same day, but scientists said it was _____ because they were on different faults.",
    "options": [
      "faint",
      "coincidental",
      "representative",
      "dense"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "A small budget _____ the team's research, so they could only study one volcano instead of three.",
    "options": [
      "oscillate",
      "fuse",
      "constrain",
      "characterise"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The _____ of sunlight into electricity powers the space station, and the large solar panels are always turned toward the sun.",
    "options": [
      "conversion",
      "countdown",
      "requirement",
      "exoplanet"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The most important _____ for a new observatory is dark skies, so most are built far from big cities.",
    "options": [
      "rover",
      "Pangaea",
      "countdown",
      "criterion"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Through careful _____, the detective in the novel found the thief, but readers were still surprised by the ending.",
    "options": [
      "marble",
      "deduction",
      "gemstone",
      "modification"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The new warning system has had a _____ effect on safety, because fewer people were hurt in this year's earthquakes.",
    "options": [
      "convincing",
      "indefinite",
      "demonstrable",
      "uneven"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Even a small _____ from the planned route could send the spacecraft into the wrong orbit, so engineers check it constantly.",
    "options": [
      "deviation",
      "astronaut",
      "divergence",
      "variation"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Saturn has _____ rings that are easy to spot, so it is often the first planet that children learn to recognise.",
    "options": [
      "tremendous",
      "distinctive",
      "comparative",
      "statistical"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The idea sounded strange at first, but scientists tested it _____, and the results showed that it was correct.",
    "options": [
      "inevitably",
      "deliberately",
      "reportedly",
      "empirically"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The _____ of the universe means that distant galaxies are moving away from us, and they are moving faster every year.",
    "options": [
      "adherence",
      "verification",
      "expansion",
      "stalagmite"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of a new island near Japan surprised scientists, and they quickly sailed there to study the fresh lava.",
    "options": [
      "formation",
      "assertion",
      "justification",
      "rocket"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Some researchers _____ that animals can sense earthquakes early, but nobody has proved this idea yet.",
    "options": [
      "visualise",
      "plunge",
      "hypothesise",
      "rupture"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "There was no _____ that the volcano would erupt, so the sudden explosion shocked everyone living nearby.",
    "options": [
      "crust",
      "indication",
      "axis",
      "spacesuit"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Some people believe that space is _____, but others think it must have an edge somewhere.",
    "options": [
      "infinite",
      "microscopic",
      "analytical",
      "infinitesimal"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The app _____ earthquake alerts with maps, so users can quickly see the nearest safe place to go.",
    "options": [
      "meander",
      "marvel",
      "classify",
      "integrate"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The moon and the oceans _____ through gravity, and this is why the sea rises and falls twice a day.",
    "options": [
      "classify",
      "invert",
      "interact",
      "dissolve"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "After the bridge collapsed, an _____ found that the builders had ignored the earthquake rules, so they were fined.",
    "options": [
      "countdown",
      "meteorite",
      "calculation",
      "investigation"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Radio waves are _____ to our eyes, but special telescopes can turn them into pictures that we can understand.",
    "options": [
      "limitless",
      "invisible",
      "planetary",
      "proportional"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Most asteroids have an _____ shape, so they look more like potatoes than round planets.",
    "options": [
      "irregular",
      "periodic",
      "comparative",
      "celestial"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The most _____ discovery of the trip was a new crystal cave, and the news soon spread around the world.",
    "options": [
      "occasional",
      "notable",
      "interstellar",
      "stationary"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Students _____ the moon every night for a month, and they recorded how its shape slowly changed.",
    "options": [
      "plunge",
      "visualise",
      "dissolve",
      "observe"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Earthquakes are a common _____ in Taiwan, so most buildings are designed to sway without falling down.",
    "options": [
      "occurrence",
      "curvature",
      "verification",
      "seismologist"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The _____ of water on Mars long ago excites scientists, because life usually needs water to survive.",
    "options": [
      "floodplain",
      "reluctance",
      "presence",
      "distribution"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The ancient lake is now completely dry, so the climate here was _____ much wetter thousands of years ago.",
    "options": [
      "exponentially",
      "presumably",
      "comparatively",
      "deliberately"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "approximate": {
    "pos": "adj.",
    "en_def": "close to the exact number but not exact",
    "cn_def": "大約的"
  },
  "coincidental": {
    "pos": "adj.",
    "en_def": "happening by chance, not planned",
    "cn_def": "巧合的"
  },
  "constrain": {
    "pos": "v.",
    "en_def": "to limit what someone or something can do",
    "cn_def": "限制；約束"
  },
  "conversion": {
    "pos": "n.",
    "en_def": "the act of changing something into another form",
    "cn_def": "轉換"
  },
  "criterion": {
    "pos": "n.",
    "en_def": "a standard used to judge something",
    "cn_def": "標準；準則"
  },
  "deduction": {
    "pos": "n.",
    "en_def": "reaching a conclusion by careful reasoning",
    "cn_def": "推論"
  },
  "demonstrable": {
    "pos": "adj.",
    "en_def": "able to be shown or proved clearly",
    "cn_def": "可證明的"
  },
  "deviation": {
    "pos": "n.",
    "en_def": "a change from the usual or expected path",
    "cn_def": "偏離；偏差"
  },
  "distinctive": {
    "pos": "adj.",
    "en_def": "easy to recognise because it is special",
    "cn_def": "獨特的"
  },
  "empirically": {
    "pos": "adv.",
    "en_def": "by observation or experiment rather than theory",
    "cn_def": "以實證方式"
  },
  "expansion": {
    "pos": "n.",
    "en_def": "the process of becoming larger",
    "cn_def": "擴張；膨脹"
  },
  "formation": {
    "pos": "n.",
    "en_def": "the process by which something is made",
    "cn_def": "形成"
  },
  "hypothesise": {
    "pos": "v.",
    "en_def": "to suggest an idea that can be tested",
    "cn_def": "提出假設"
  },
  "indication": {
    "pos": "n.",
    "en_def": "a sign that shows something is happening",
    "cn_def": "跡象"
  },
  "infinite": {
    "pos": "adj.",
    "en_def": "without any limit or end",
    "cn_def": "無限的"
  },
  "integrate": {
    "pos": "v.",
    "en_def": "to combine things so they work together",
    "cn_def": "整合"
  },
  "interact": {
    "pos": "v.",
    "en_def": "to act on or affect each other",
    "cn_def": "相互作用；互動"
  },
  "investigation": {
    "pos": "n.",
    "en_def": "a careful study to find the facts",
    "cn_def": "調查"
  },
  "invisible": {
    "pos": "adj.",
    "en_def": "impossible to see",
    "cn_def": "看不見的"
  },
  "irregular": {
    "pos": "adj.",
    "en_def": "not having a regular shape or pattern",
    "cn_def": "不規則的"
  },
  "notable": {
    "pos": "adj.",
    "en_def": "important or interesting enough to be noticed",
    "cn_def": "值得注意的"
  },
  "observe": {
    "pos": "v.",
    "en_def": "to watch something carefully",
    "cn_def": "觀察"
  },
  "occurrence": {
    "pos": "n.",
    "en_def": "something that happens",
    "cn_def": "發生的事；事件"
  },
  "presence": {
    "pos": "n.",
    "en_def": "the fact of being in a place",
    "cn_def": "存在"
  },
  "presumably": {
    "pos": "adv.",
    "en_def": "used to say what you think is probably true",
    "cn_def": "據推測；大概"
  },
  "resistant": {
    "pos": "adj.",
    "en_def": "not easily damaged or affected by something",
    "cn_def": "抗……的；耐……的"
  },
  "orbital": {
    "pos": "adj.",
    "en_def": "related to the path of an object around a planet or star",
    "cn_def": "軌道的"
  },
  "tremendous": {
    "pos": "adj.",
    "en_def": "very great in size or amount",
    "cn_def": "巨大的；極大的"
  },
  "faint": {
    "pos": "adj.",
    "en_def": "not strong or clear; hard to see or hear",
    "cn_def": "微弱的；模糊的"
  },
  "representative": {
    "pos": "adj.",
    "en_def": "typical of a larger group",
    "cn_def": "有代表性的"
  },
  "dense": {
    "pos": "adj.",
    "en_def": "heavy for its size; tightly packed",
    "cn_def": "稠密的；密度高的"
  },
  "oscillate": {
    "pos": "v.",
    "en_def": "to move backwards and forwards regularly",
    "cn_def": "擺動；振盪"
  },
  "fuse": {
    "pos": "v.",
    "en_def": "to join together, often by heat",
    "cn_def": "融合"
  },
  "characterise": {
    "pos": "v.",
    "en_def": "to be a typical quality of something",
    "cn_def": "以……為特徵"
  },
  "countdown": {
    "pos": "n.",
    "en_def": "counting backwards to zero before something starts",
    "cn_def": "倒數計時"
  },
  "requirement": {
    "pos": "n.",
    "en_def": "something that is needed or necessary",
    "cn_def": "必要條件；要求"
  },
  "exoplanet": {
    "pos": "n.",
    "en_def": "a planet that moves around a star other than the sun",
    "cn_def": "系外行星"
  },
  "rover": {
    "pos": "n.",
    "en_def": "a vehicle that drives on the surface of another planet",
    "cn_def": "探測車"
  },
  "pangaea": {
    "pos": "n.",
    "en_def": "the supercontinent that existed about 300 million years ago",
    "cn_def": "盤古大陸"
  },
  "marble": {
    "pos": "n.",
    "en_def": "a smooth hard stone often used in buildings and statues",
    "cn_def": "大理石"
  },
  "gemstone": {
    "pos": "n.",
    "en_def": "a valuable stone used in jewellery",
    "cn_def": "寶石"
  },
  "modification": {
    "pos": "n.",
    "en_def": "a small change to improve something",
    "cn_def": "修改；改良"
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "making you believe that something is true",
    "cn_def": "令人信服的"
  },
  "indefinite": {
    "pos": "adj.",
    "en_def": "without a fixed end or limit",
    "cn_def": "無限期的"
  },
  "uneven": {
    "pos": "adj.",
    "en_def": "not flat or smooth",
    "cn_def": "不平坦的"
  },
  "astronaut": {
    "pos": "n.",
    "en_def": "a person trained to travel in space",
    "cn_def": "太空人"
  },
  "divergence": {
    "pos": "n.",
    "en_def": "the act of moving apart in different directions",
    "cn_def": "分離；分歧"
  },
  "variation": {
    "pos": "n.",
    "en_def": "a change or difference in amount or level",
    "cn_def": "變化；差異"
  },
  "comparative": {
    "pos": "adj.",
    "en_def": "involving comparing two or more things",
    "cn_def": "比較的"
  },
  "statistical": {
    "pos": "adj.",
    "en_def": "related to numbers collected to show facts",
    "cn_def": "統計的"
  },
  "inevitably": {
    "pos": "adv.",
    "en_def": "in a way that cannot be avoided",
    "cn_def": "不可避免地"
  },
  "deliberately": {
    "pos": "adv.",
    "en_def": "on purpose",
    "cn_def": "故意地；刻意地"
  },
  "reportedly": {
    "pos": "adv.",
    "en_def": "according to what people say",
    "cn_def": "據報導"
  },
  "adherence": {
    "pos": "n.",
    "en_def": "the act of following rules closely",
    "cn_def": "遵守"
  },
  "verification": {
    "pos": "n.",
    "en_def": "the process of checking that something is true",
    "cn_def": "核實；查證"
  },
  "stalagmite": {
    "pos": "n.",
    "en_def": "a rock shape that grows up from the floor of a cave",
    "cn_def": "石筍"
  },
  "assertion": {
    "pos": "n.",
    "en_def": "a strong statement that something is true",
    "cn_def": "主張；斷言"
  },
  "justification": {
    "pos": "n.",
    "en_def": "a good reason for doing something",
    "cn_def": "正當理由"
  },
  "rocket": {
    "pos": "n.",
    "en_def": "a vehicle pushed upward by burning fuel",
    "cn_def": "火箭"
  },
  "visualise": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像；視覺化"
  },
  "plunge": {
    "pos": "v.",
    "en_def": "to fall or drop suddenly",
    "cn_def": "驟降；跳入"
  },
  "rupture": {
    "pos": "v.",
    "en_def": "to break or burst suddenly",
    "cn_def": "破裂"
  },
  "crust": {
    "pos": "n.",
    "en_def": "the hard outer layer of the Earth",
    "cn_def": "地殼"
  },
  "axis": {
    "pos": "n.",
    "en_def": "an imaginary line that a planet spins around",
    "cn_def": "地軸；軸"
  },
  "spacesuit": {
    "pos": "n.",
    "en_def": "special clothing that protects astronauts in space",
    "cn_def": "太空衣"
  },
  "microscopic": {
    "pos": "adj.",
    "en_def": "so small that it can only be seen with a microscope",
    "cn_def": "微小的；顯微鏡才能看見的"
  },
  "analytical": {
    "pos": "adj.",
    "en_def": "using careful, logical thinking to examine things",
    "cn_def": "分析的"
  },
  "infinitesimal": {
    "pos": "adj.",
    "en_def": "extremely small",
    "cn_def": "極微小的"
  },
  "meander": {
    "pos": "v.",
    "en_def": "to follow a slow, winding course",
    "cn_def": "蜿蜒流動"
  },
  "marvel": {
    "pos": "v.",
    "en_def": "to feel great surprise and admiration",
    "cn_def": "驚嘆"
  },
  "classify": {
    "pos": "v.",
    "en_def": "to put things into groups by type",
    "cn_def": "分類"
  },
  "invert": {
    "pos": "v.",
    "en_def": "to turn something upside down",
    "cn_def": "倒轉；顛倒"
  },
  "dissolve": {
    "pos": "v.",
    "en_def": "to mix completely into a liquid",
    "cn_def": "溶解"
  },
  "meteorite": {
    "pos": "n.",
    "en_def": "a piece of rock from space that lands on Earth",
    "cn_def": "隕石"
  },
  "calculation": {
    "pos": "n.",
    "en_def": "the process of using numbers to find an answer",
    "cn_def": "計算"
  },
  "limitless": {
    "pos": "adj.",
    "en_def": "without any limit",
    "cn_def": "無限的"
  },
  "planetary": {
    "pos": "adj.",
    "en_def": "related to planets",
    "cn_def": "行星的"
  },
  "proportional": {
    "pos": "adj.",
    "en_def": "changing in size in the same way as something else",
    "cn_def": "成比例的"
  },
  "periodic": {
    "pos": "adj.",
    "en_def": "happening again and again at regular times",
    "cn_def": "週期性的"
  },
  "celestial": {
    "pos": "adj.",
    "en_def": "in or related to the sky or outer space",
    "cn_def": "天體的；天空的"
  },
  "occasional": {
    "pos": "adj.",
    "en_def": "happening sometimes but not often",
    "cn_def": "偶爾的"
  },
  "interstellar": {
    "pos": "adj.",
    "en_def": "between the stars",
    "cn_def": "星際的"
  },
  "stationary": {
    "pos": "adj.",
    "en_def": "not moving",
    "cn_def": "靜止的"
  },
  "curvature": {
    "pos": "n.",
    "en_def": "the amount that something is curved",
    "cn_def": "曲率；彎曲度"
  },
  "seismologist": {
    "pos": "n.",
    "en_def": "a scientist who studies earthquakes",
    "cn_def": "地震學家"
  },
  "floodplain": {
    "pos": "n.",
    "en_def": "flat land next to a river that floods sometimes",
    "cn_def": "氾濫平原"
  },
  "reluctance": {
    "pos": "n.",
    "en_def": "not wanting to do something",
    "cn_def": "不情願"
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way something is spread over an area",
    "cn_def": "分布"
  },
  "exponentially": {
    "pos": "adv.",
    "en_def": "increasing faster and faster",
    "cn_def": "呈指數地；急遽地"
  },
  "comparatively": {
    "pos": "adv.",
    "en_def": "when compared with something else",
    "cn_def": "相對地；比較而言"
  }
};

const EXTRA_GLOSSES = {};
