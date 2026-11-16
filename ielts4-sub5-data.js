// Topic 4 Subunit 5 Quiz Data: Threats to the Ocean 海洋威脅
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T04 S05 - Threats to the Ocean 海洋威脅",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "microplastic",
    "pos": "n.",
    "cn_def": "塑膠微粒",
    "en_def": "a very small piece of plastic less than 5 mm long",
    "sentence": "Scientists found {{BLANK}} in the stomachs of many fish, and some of these tiny pieces may end up in our food.",
    "cn": "科學家在許多魚的胃裡發現塑膠微粒,而這些微小碎片有些可能最後進入我們的食物。"
  },
  {
    "word": "oil spill",
    "pos": "n.phr.",
    "cn_def": "漏油;油污外洩",
    "en_def": "an accident in which oil escapes into the sea",
    "sentence": "The {{BLANK}} covered the beach in black oil, and volunteers spent weeks cleaning birds and rocks.",
    "cn": "漏油讓海灘覆蓋上黑色的油,志工們花了好幾週清洗鳥類和岩石。"
  },
  {
    "word": "runoff",
    "pos": "n.",
    "cn_def": "地表逕流",
    "en_def": "rain water that flows from land into rivers and the sea, carrying dirt and chemicals",
    "sentence": "Farm {{BLANK}} carries fertiliser into the sea after heavy rain, so harmful algae can grow very quickly.",
    "cn": "大雨過後,農田逕流把肥料帶入海中,所以有害的藻類會迅速生長。"
  },
  {
    "word": "sewage",
    "pos": "n.",
    "cn_def": "污水",
    "en_def": "dirty water and waste from toilets and drains",
    "sentence": "Some coastal towns still release {{BLANK}} straight into the sea, so swimmers may get sick after a day at the beach.",
    "cn": "一些沿海城鎮仍然把污水直接排入海中,所以泳客在海灘待一天後可能會生病。"
  },
  {
    "word": "dump",
    "pos": "v.",
    "cn_def": "傾倒;丟棄",
    "en_def": "to throw away waste in a careless or illegal way",
    "sentence": "Some factories secretly {{BLANK}} chemicals into rivers at night, but the waste still flows into the ocean.",
    "cn": "有些工廠在夜間偷偷把化學物質傾倒到河裡,但這些廢物仍會流入海洋。"
  },
  {
    "word": "beach clean-up",
    "pos": "n.phr.",
    "cn_def": "淨灘活動",
    "en_def": "an event where people collect rubbish from a beach",
    "sentence": "Our class joined a {{BLANK}} last Saturday, and we were shocked by how many bottle caps we found in the sand.",
    "cn": "我們班上週六參加了淨灘活動,而我們對在沙子裡找到那麼多瓶蓋感到震驚。"
  },
  {
    "word": "garbage patch",
    "pos": "n.phr.",
    "cn_def": "垃圾帶",
    "en_def": "a large area of the ocean where floating rubbish collects",
    "sentence": "The Great Pacific {{BLANK}} is not a solid island, but it contains millions of small pieces of floating plastic.",
    "cn": "太平洋垃圾帶不是一座實心的島,但它含有數百萬片漂浮的小塑膠碎片。"
  },
  {
    "word": "ghost net",
    "pos": "n.phr.",
    "cn_def": "幽靈漁網",
    "en_def": "a fishing net that has been lost or left in the sea",
    "sentence": "A {{BLANK}} can keep catching fish for years after it is lost, so divers work hard to remove them from reefs.",
    "cn": "幽靈漁網遺失後仍能持續捕到魚好幾年,所以潛水員努力把它們從珊瑚礁上移除。"
  },
  {
    "word": "entangle",
    "pos": "v.",
    "cn_def": "纏住",
    "en_def": "to catch something so that it cannot get free",
    "sentence": "Old fishing lines can {{BLANK}} turtles and seals, and many of these animals die because they cannot swim or eat.",
    "cn": "舊的釣魚線可能纏住海龜和海豹,而許多這些動物因為無法游泳或進食而死亡。"
  },
  {
    "word": "dead zone",
    "pos": "n.phr.",
    "cn_def": "死區;缺氧區",
    "en_def": "an area of sea with too little oxygen for most life",
    "sentence": "Fertiliser has created a {{BLANK}} near the river mouth, and almost no fish can survive there in summer.",
    "cn": "肥料在河口附近造成了一個死區,而夏天幾乎沒有魚能在那裡存活。"
  },
  {
    "word": "hypoxia",
    "pos": "n.",
    "cn_def": "缺氧",
    "en_def": "a condition of having too little oxygen",
    "sentence": "{{BLANK}} in coastal waters is becoming more common, because warm water holds less oxygen than cold water.",
    "cn": "沿岸水域的缺氧現象越來越常見,因為溫水所含的氧氣比冷水少。"
  },
  {
    "word": "eutrophication",
    "pos": "n.",
    "cn_def": "優養化",
    "en_def": "too many nutrients in water, which causes plants to grow too much",
    "sentence": "{{BLANK}} happens when too many nutrients enter the water, so the lake turns green and fish begin to die.",
    "cn": "當太多養分進入水中時就會發生優養化,所以湖水變綠,魚也開始死亡。"
  },
  {
    "word": "algal bloom",
    "pos": "n.phr.",
    "cn_def": "藻華",
    "en_def": "a fast increase of algae in water",
    "sentence": "An {{BLANK}} turned the water bright green, and the government closed the beach because the water was unsafe.",
    "cn": "藻華讓海水變成鮮綠色,而政府關閉了海灘,因為海水不安全。"
  },
  {
    "word": "red tide",
    "pos": "n.phr.",
    "cn_def": "赤潮;紅潮",
    "en_def": "a harmful algae bloom that makes the sea look red",
    "sentence": "Shellfish from the area were banned during the {{BLANK}}, because eating them could make people seriously ill.",
    "cn": "紅潮期間禁止販售該地區的有殼海鮮,因為吃了可能讓人嚴重生病。"
  },
  {
    "word": "toxin",
    "pos": "n.",
    "cn_def": "毒素",
    "en_def": "a poisonous substance made by a living thing",
    "sentence": "Some algae produce a {{BLANK}} that builds up in shellfish, so people can get sick even when the seafood looks fresh.",
    "cn": "有些藻類會產生在貝類體內累積的毒素,所以即使海鮮看起來很新鮮,人們還是可能生病。"
  },
  {
    "word": "mercury",
    "pos": "n.",
    "cn_def": "汞;水銀",
    "en_def": "a poisonous silver metal that can build up in fish",
    "sentence": "Large fish like tuna may contain {{BLANK}}, so doctors advise pregnant women to eat them only once in a while.",
    "cn": "像鮪魚這樣的大型魚可能含有汞,所以醫生建議孕婦只偶爾吃。"
  },
  {
    "word": "heavy metal",
    "pos": "n.phr.",
    "cn_def": "重金屬",
    "en_def": "a dangerous metal such as lead or mercury",
    "sentence": "A {{BLANK}} like lead can stay in the sea for a long time, and it slowly builds up in the bodies of marine animals.",
    "cn": "像鉛這樣的重金屬能在海中停留很久,而且它會慢慢在海洋動物體內累積。"
  },
  {
    "word": "noise pollution",
    "pos": "n.phr.",
    "cn_def": "噪音污染",
    "en_def": "harmful or annoying levels of noise",
    "sentence": "Ships create a lot of {{BLANK}} underwater, so whales find it harder to hear each other over long distances.",
    "cn": "船隻在水下製造大量噪音污染,所以鯨魚更難在遠距離聽到彼此。"
  },
  {
    "word": "discharge",
    "pos": "v.",
    "cn_def": "排放",
    "en_def": "to let a liquid or gas flow out",
    "sentence": "Factories are not allowed to {{BLANK}} hot water into the bay, because sudden warming can kill coral and fish.",
    "cn": "工廠不准把熱水排放到海灣中,因為突然升溫會殺死珊瑚和魚類。"
  },
  {
    "word": "dredge",
    "pos": "v.",
    "cn_def": "疏浚;挖泥",
    "en_def": "to dig mud and sand from the bottom of a river, harbour or sea",
    "sentence": "The port plans to {{BLANK}} the harbour to let bigger ships in, but environmental groups say it will destroy seagrass.",
    "cn": "港務單位計畫疏浚港口讓更大的船隻進入,但環保團體說這會破壞海草。"
  },
  {
    "word": "ballast water",
    "pos": "n.phr.",
    "cn_def": "壓艙水",
    "en_def": "sea water carried in a ship to keep it steady",
    "sentence": "Ships carry {{BLANK}} from one country to another, so tiny foreign animals can be released into new seas.",
    "cn": "船隻把壓艙水從一個國家帶到另一個國家,所以微小的外來生物可能被釋放到新的海域。"
  },
  {
    "word": "pathogen",
    "pos": "n.",
    "cn_def": "病原體",
    "en_def": "a very small living thing that causes disease",
    "sentence": "A new {{BLANK}} has killed many starfish along the coast, and scientists think warmer water helped it spread.",
    "cn": "一種新的病原體已經殺死沿岸許多海星,而科學家認為較溫暖的海水幫助它擴散。"
  },
  {
    "word": "single-use",
    "pos": "adj.",
    "cn_def": "一次性的",
    "en_def": "made to be used once and then thrown away",
    "sentence": "Our school stopped selling drinks in {{BLANK}} bottles, and students now bring their own water bottles every day.",
    "cn": "我們學校停止販售一次性瓶裝飲料,而學生們現在每天自己帶水瓶。"
  },
  {
    "word": "straw",
    "pos": "n.",
    "cn_def": "吸管",
    "en_def": "a thin tube used for drinking",
    "sentence": "Many cafés in Taipei have stopped giving out a plastic {{BLANK}} with each drink, so customers use paper or metal ones instead.",
    "cn": "台北許多咖啡店已經不再每杯飲料附上塑膠吸管,所以顧客改用紙製或金屬吸管。"
  },
  {
    "word": "packaging",
    "pos": "n.",
    "cn_def": "包裝",
    "en_def": "the materials used to wrap or protect goods",
    "sentence": "Online shopping creates a lot of {{BLANK}}, and much of this plastic ends up in rivers and then the sea.",
    "cn": "網路購物產生大量包裝,而這些塑膠很多最後流入河川,然後進入海洋。"
  },
  {
    "word": "biodegradable",
    "pos": "adj.",
    "cn_def": "可生物分解的",
    "en_def": "able to break down naturally without harming nature",
    "sentence": "The shop uses {{BLANK}} bags made from corn, so they break down naturally instead of polluting the ocean.",
    "cn": "這家店使用玉米製成的可生物分解袋子,所以它們會自然分解,而不會污染海洋。"
  },
  {
    "word": "degrade",
    "pos": "v.",
    "cn_def": "分解;降解",
    "en_def": "to break down slowly into smaller parts",
    "sentence": "Plastic bottles take hundreds of years to {{BLANK}}, so the ones we throw away today will still be in the sea in 2400.",
    "cn": "塑膠瓶需要數百年才能分解,所以我們今天丟掉的瓶子到了2400年仍會在海中。"
  },
  {
    "word": "ingest",
    "pos": "v.",
    "cn_def": "攝入;吞食",
    "en_def": "to take food or other things into the body",
    "sentence": "Turtles often {{BLANK}} plastic bags by mistake, because the bags look like jellyfish floating in the water.",
    "cn": "海龜常常誤吞塑膠袋,因為袋子看起來就像漂浮在水中的水母。"
  },
  {
    "word": "suffocate",
    "pos": "v.",
    "cn_def": "窒息",
    "en_def": "to die because there is no air or oxygen",
    "sentence": "Fish {{BLANK}} when there is too little oxygen in the water, and thousands may wash up on the beach at once.",
    "cn": "當水中氧氣太少時,魚會窒息,而且可能一次有數千條被沖上海灘。"
  },
  {
    "word": "choke",
    "pos": "v.",
    "cn_def": "噎住;嗆住",
    "en_def": "to be unable to breathe because something blocks the throat",
    "sentence": "Seabirds can {{BLANK}} on bottle caps, because they mistake the bright plastic for small fish.",
    "cn": "海鳥可能被瓶蓋噎住,因為牠們把鮮豔的塑膠誤認為小魚。"
  },
  {
    "word": "carcass",
    "pos": "n.",
    "cn_def": "屍體(動物)",
    "en_def": "the dead body of an animal",
    "sentence": "A whale {{BLANK}} washed up on the beach last week, and scientists found more than twenty kilograms of plastic in its stomach.",
    "cn": "上週一具鯨魚屍體被沖上海灘,而科學家在牠的胃裡發現超過二十公斤的塑膠。"
  },
  {
    "word": "strand",
    "pos": "v.",
    "cn_def": "使擱淺",
    "en_def": "to leave a sea animal stuck on land and unable to return",
    "sentence": "Low tides sometimes {{BLANK}} dolphins on the beach, so local volunteers keep them wet until the water returns.",
    "cn": "退潮有時會使海豚擱淺在海灘上,所以當地志工會讓牠們保持濕潤,直到海水回來。"
  },
  {
    "word": "disposable",
    "pos": "adj.",
    "cn_def": "拋棄式的;用完即丟的",
    "en_def": "made to be thrown away after use",
    "sentence": "{{BLANK}} chopsticks and cups are convenient, but they create mountains of waste that often end up in the sea.",
    "cn": "免洗筷子和杯子很方便,但它們製造了堆積如山的垃圾,而這些垃圾常常最後流入大海。"
  }
];

const MCQS = [
  {
    "q": "Scientists found _____ in the stomachs of many fish, and some of these tiny pieces may end up in our food.",
    "options": [
      "microplastic",
      "peninsula",
      "freight",
      "probe"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The _____ covered the beach in black oil, and volunteers spent weeks cleaning birds and rocks.",
    "options": [
      "container ship",
      "oil spill",
      "a sea change",
      "sea cucumber"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Farm _____ carries fertiliser into the sea after heavy rain, so harmful algae can grow very quickly.",
    "options": [
      "longline",
      "efficacy",
      "aquaculture",
      "runoff"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Some coastal towns still release _____ straight into the sea, so swimmers may get sick after a day at the beach.",
    "options": [
      "dune",
      "inventory",
      "sewage",
      "submersible"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Some factories secretly _____ chemicals into rivers at night, but the waste still flows into the ocean.",
    "options": [
      "snorkel",
      "convene",
      "opt",
      "dump"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Our class joined a _____ last Saturday, and we were shocked by how many bottle caps we found in the sand.",
    "options": [
      "fish farm",
      "fishing net",
      "beach clean-up",
      "plastic pollution"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The Great Pacific _____ is not a solid island, but it contains millions of small pieces of floating plastic.",
    "options": [
      "garbage patch",
      "salt marsh",
      "a fish out of water",
      "container ship"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A _____ can keep catching fish for years after it is lost, so divers work hard to remove them from reefs.",
    "options": [
      "high seas",
      "ghost net",
      "fishing net",
      "sea cucumber"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Old fishing lines can _____ turtles and seals, and many of these animals die because they cannot swim or eat.",
    "options": [
      "instruct",
      "heighten",
      "recede",
      "entangle"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Fertiliser has created a _____ near the river mouth, and almost no fish can survive there in summer.",
    "options": [
      "dead zone",
      "sustainable fishing",
      "fish stock",
      "no-take zone"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "_____ in coastal waters is becoming more common, because warm water holds less oxygen than cold water.",
    "options": [
      "remedy",
      "hypoxia",
      "whaling",
      "vision"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "_____ happens when too many nutrients enter the water, so the lake turns green and fish begin to die.",
    "options": [
      "segment",
      "gill",
      "eutrophication",
      "tanker"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "An _____ turned the water bright green, and the government closed the beach because the water was unsafe.",
    "options": [
      "algal bloom",
      "rip current",
      "a fish out of water",
      "water pressure"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Shellfish from the area were banned during the _____, because eating them could make people seriously ill.",
    "options": [
      "container ship",
      "red tide",
      "oil rig",
      "marine biologist"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Some algae produce a _____ that builds up in shellfish, so people can get sick even when the seafood looks fresh.",
    "options": [
      "sediment",
      "index",
      "shrimp",
      "toxin"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Large fish like tuna may contain _____, so doctors advise pregnant women to eat them only once in a while.",
    "options": [
      "medium",
      "transit",
      "mercury",
      "apparatus"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "A _____ like lead can stay in the sea for a long time, and it slowly builds up in the bodies of marine animals.",
    "options": [
      "continental shelf",
      "heavy metal",
      "fishing net",
      "sea turtle"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Ships create a lot of _____ underwater, so whales find it harder to hear each other over long distances.",
    "options": [
      "noise pollution",
      "high seas",
      "twilight zone",
      "fishing ground"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Factories are not allowed to _____ hot water into the bay, because sudden warming can kill coral and fish.",
    "options": [
      "omit",
      "dispel",
      "denote",
      "discharge"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The port plans to _____ the harbour to let bigger ships in, but environmental groups say it will destroy seagrass.",
    "options": [
      "fabricate",
      "exert",
      "dredge",
      "embark"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Ships carry _____ from one country to another, so tiny foreign animals can be released into new seas.",
    "options": [
      "plastic pollution",
      "no-take zone",
      "fishing net",
      "ballast water"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A new _____ has killed many starfish along the coast, and scientists think warmer water helped it spread.",
    "options": [
      "pathogen",
      "upwelling",
      "drilling",
      "swell"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Our school stopped selling drinks in _____ bottles, and students now bring their own water bottles every day.",
    "options": [
      "complacent",
      "indiscriminate",
      "single-use",
      "abrupt"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Many cafés in Taipei have stopped giving out a plastic _____ with each drink, so customers use paper or metal ones instead.",
    "options": [
      "longline",
      "straw",
      "dune",
      "lobster"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Online shopping creates a lot of _____, and much of this plastic ends up in rivers and then the sea.",
    "options": [
      "shipwreck",
      "momentum",
      "apathy",
      "packaging"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The shop uses _____ bags made from corn, so they break down naturally instead of polluting the ocean.",
    "options": [
      "biodegradable",
      "conducive",
      "uncharted",
      "turbulent"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Plastic bottles take hundreds of years to _____, so the ones we throw away today will still be in the sea in 2400.",
    "options": [
      "diverge",
      "emulate",
      "degrade",
      "recede"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Turtles often _____ plastic bags by mistake, because the bags look like jellyfish floating in the water.",
    "options": [
      "surpass",
      "ingest",
      "delineate",
      "aspire"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Fish _____ when there is too little oxygen in the water, and thousands may wash up on the beach at once.",
    "options": [
      "suffocate",
      "fabricate",
      "cater",
      "opt"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Seabirds can _____ on bottle caps, because they mistake the bright plastic for small fish.",
    "options": [
      "harness",
      "choke",
      "illuminate",
      "unravel"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "A whale _____ washed up on the beach last week, and scientists found more than twenty kilograms of plastic in its stomach.",
    "options": [
      "harpoon",
      "breakthrough",
      "seafood",
      "carcass"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Low tides sometimes _____ dolphins on the beach, so local volunteers keep them wet until the water returns.",
    "options": [
      "compel",
      "capitalise",
      "strand",
      "dedicate"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "_____ chopsticks and cups are convenient, but they create mountains of waste that often end up in the sea.",
    "options": [
      "disposable",
      "daunting",
      "fruitful",
      "intrusive"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "microplastic": {
    "pos": "n.",
    "en_def": "a very small piece of plastic less than 5 mm long",
    "cn_def": "塑膠微粒"
  },
  "oil spill": {
    "pos": "n.phr.",
    "en_def": "an accident in which oil escapes into the sea",
    "cn_def": "漏油;油污外洩"
  },
  "runoff": {
    "pos": "n.",
    "en_def": "rain water that flows from land into rivers and the sea, carrying dirt and chemicals",
    "cn_def": "地表逕流"
  },
  "sewage": {
    "pos": "n.",
    "en_def": "dirty water and waste from toilets and drains",
    "cn_def": "污水"
  },
  "dump": {
    "pos": "v.",
    "en_def": "to throw away waste in a careless or illegal way",
    "cn_def": "傾倒;丟棄"
  },
  "beach clean-up": {
    "pos": "n.phr.",
    "en_def": "an event where people collect rubbish from a beach",
    "cn_def": "淨灘活動"
  },
  "garbage patch": {
    "pos": "n.phr.",
    "en_def": "a large area of the ocean where floating rubbish collects",
    "cn_def": "垃圾帶"
  },
  "ghost net": {
    "pos": "n.phr.",
    "en_def": "a fishing net that has been lost or left in the sea",
    "cn_def": "幽靈漁網"
  },
  "entangle": {
    "pos": "v.",
    "en_def": "to catch something so that it cannot get free",
    "cn_def": "纏住"
  },
  "dead zone": {
    "pos": "n.phr.",
    "en_def": "an area of sea with too little oxygen for most life",
    "cn_def": "死區;缺氧區"
  },
  "hypoxia": {
    "pos": "n.",
    "en_def": "a condition of having too little oxygen",
    "cn_def": "缺氧"
  },
  "eutrophication": {
    "pos": "n.",
    "en_def": "too many nutrients in water, which causes plants to grow too much",
    "cn_def": "優養化"
  },
  "algal bloom": {
    "pos": "n.phr.",
    "en_def": "a fast increase of algae in water",
    "cn_def": "藻華"
  },
  "red tide": {
    "pos": "n.phr.",
    "en_def": "a harmful algae bloom that makes the sea look red",
    "cn_def": "赤潮;紅潮"
  },
  "toxin": {
    "pos": "n.",
    "en_def": "a poisonous substance made by a living thing",
    "cn_def": "毒素"
  },
  "mercury": {
    "pos": "n.",
    "en_def": "a poisonous silver metal that can build up in fish",
    "cn_def": "汞;水銀"
  },
  "heavy metal": {
    "pos": "n.phr.",
    "en_def": "a dangerous metal such as lead or mercury",
    "cn_def": "重金屬"
  },
  "noise pollution": {
    "pos": "n.phr.",
    "en_def": "harmful or annoying levels of noise",
    "cn_def": "噪音污染"
  },
  "discharge": {
    "pos": "v.",
    "en_def": "to let a liquid or gas flow out",
    "cn_def": "排放"
  },
  "dredge": {
    "pos": "v.",
    "en_def": "to dig mud and sand from the bottom of a river, harbour or sea",
    "cn_def": "疏浚;挖泥"
  },
  "ballast water": {
    "pos": "n.phr.",
    "en_def": "sea water carried in a ship to keep it steady",
    "cn_def": "壓艙水"
  },
  "pathogen": {
    "pos": "n.",
    "en_def": "a very small living thing that causes disease",
    "cn_def": "病原體"
  },
  "single-use": {
    "pos": "adj.",
    "en_def": "made to be used once and then thrown away",
    "cn_def": "一次性的"
  },
  "straw": {
    "pos": "n.",
    "en_def": "a thin tube used for drinking",
    "cn_def": "吸管"
  },
  "packaging": {
    "pos": "n.",
    "en_def": "the materials used to wrap or protect goods",
    "cn_def": "包裝"
  },
  "biodegradable": {
    "pos": "adj.",
    "en_def": "able to break down naturally without harming nature",
    "cn_def": "可生物分解的"
  },
  "degrade": {
    "pos": "v.",
    "en_def": "to break down slowly into smaller parts",
    "cn_def": "分解;降解"
  },
  "ingest": {
    "pos": "v.",
    "en_def": "to take food or other things into the body",
    "cn_def": "攝入;吞食"
  },
  "suffocate": {
    "pos": "v.",
    "en_def": "to die because there is no air or oxygen",
    "cn_def": "窒息"
  },
  "choke": {
    "pos": "v.",
    "en_def": "to be unable to breathe because something blocks the throat",
    "cn_def": "噎住;嗆住"
  },
  "carcass": {
    "pos": "n.",
    "en_def": "the dead body of an animal",
    "cn_def": "屍體(動物)"
  },
  "strand": {
    "pos": "v.",
    "en_def": "to leave a sea animal stuck on land and unable to return",
    "cn_def": "使擱淺"
  },
  "disposable": {
    "pos": "adj.",
    "en_def": "made to be thrown away after use",
    "cn_def": "拋棄式的;用完即丟的"
  },
  "peninsula": {
    "pos": "n.",
    "en_def": "land almost surrounded by water but joined to a larger area",
    "cn_def": "半島"
  },
  "freight": {
    "pos": "n.",
    "en_def": "goods carried by ship, train or plane",
    "cn_def": "貨運;貨物"
  },
  "probe": {
    "pos": "n.",
    "en_def": "a tool sent to collect information from a place that is hard to reach",
    "cn_def": "探測器"
  },
  "container ship": {
    "pos": "n.phr.",
    "en_def": "a large ship that carries goods in big metal boxes",
    "cn_def": "貨櫃船"
  },
  "a sea change": {
    "pos": "n.phr.",
    "en_def": "a complete and important change",
    "cn_def": "徹底的轉變"
  },
  "sea cucumber": {
    "pos": "n.phr.",
    "en_def": "a soft sea animal shaped like a cucumber that lives on the sea floor",
    "cn_def": "海參"
  },
  "longline": {
    "pos": "n.",
    "en_def": "a very long fishing line with thousands of hooks",
    "cn_def": "延繩釣"
  },
  "efficacy": {
    "pos": "n.",
    "en_def": "the ability to produce the result you want",
    "cn_def": "效力;功效"
  },
  "aquaculture": {
    "pos": "n.",
    "en_def": "the farming of fish and other sea creatures",
    "cn_def": "水產養殖"
  },
  "dune": {
    "pos": "n.",
    "en_def": "a hill of sand formed by the wind",
    "cn_def": "沙丘"
  },
  "inventory": {
    "pos": "n.",
    "en_def": "a complete list of things in a place",
    "cn_def": "清單;盤點"
  },
  "submersible": {
    "pos": "n.",
    "en_def": "a small underwater vehicle used for research",
    "cn_def": "深潛器"
  },
  "snorkel": {
    "pos": "v.",
    "en_def": "to swim near the surface with a tube to breathe through",
    "cn_def": "浮潛"
  },
  "convene": {
    "pos": "v.",
    "en_def": "to come together for a formal meeting",
    "cn_def": "召開;召集"
  },
  "opt": {
    "pos": "v.",
    "en_def": "to choose one thing instead of another",
    "cn_def": "選擇"
  },
  "fish farm": {
    "pos": "n.phr.",
    "en_def": "a place where fish are raised for food",
    "cn_def": "養魚場"
  },
  "fishing net": {
    "pos": "n.phr.",
    "en_def": "a net used for catching fish",
    "cn_def": "漁網"
  },
  "plastic pollution": {
    "pos": "n.phr.",
    "en_def": "harm to nature caused by plastic waste",
    "cn_def": "塑膠污染"
  },
  "salt marsh": {
    "pos": "n.phr.",
    "en_def": "wet coastal land covered with grass and flooded by the tide",
    "cn_def": "鹽沼"
  },
  "a fish out of water": {
    "pos": "n.phr.",
    "en_def": "a person who feels uncomfortable in an unfamiliar situation",
    "cn_def": "如魚離水;不自在的人"
  },
  "high seas": {
    "pos": "n.phr.",
    "en_def": "the open ocean that no country controls",
    "cn_def": "公海"
  },
  "instruct": {
    "pos": "v.",
    "en_def": "to tell someone officially what to do",
    "cn_def": "指示;教導"
  },
  "heighten": {
    "pos": "v.",
    "en_def": "to make a feeling or effect stronger",
    "cn_def": "提高;加強"
  },
  "recede": {
    "pos": "v.",
    "en_def": "to move back from a higher point",
    "cn_def": "退去;後退"
  },
  "sustainable fishing": {
    "pos": "n.phr.",
    "en_def": "catching fish in a way that leaves enough to breed",
    "cn_def": "永續漁業"
  },
  "fish stock": {
    "pos": "n.phr.",
    "en_def": "the amount of fish of one kind in an area",
    "cn_def": "魚類資源;魚群存量"
  },
  "no-take zone": {
    "pos": "n.phr.",
    "en_def": "a sea area where all fishing and collecting are banned",
    "cn_def": "禁漁區"
  },
  "remedy": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "補救辦法;解決方法"
  },
  "whaling": {
    "pos": "n.",
    "en_def": "the hunting of whales",
    "cn_def": "捕鯨"
  },
  "vision": {
    "pos": "n.",
    "en_def": "an idea or hope about the future",
    "cn_def": "願景;遠見"
  },
  "segment": {
    "pos": "n.",
    "en_def": "one part of something",
    "cn_def": "部分;區段"
  },
  "gill": {
    "pos": "n.",
    "en_def": "the part of a fish used for breathing in water",
    "cn_def": "鰓"
  },
  "tanker": {
    "pos": "n.",
    "en_def": "a ship that carries oil or other liquids",
    "cn_def": "油輪"
  },
  "rip current": {
    "pos": "n.phr.",
    "en_def": "a strong current that flows quickly away from the beach",
    "cn_def": "離岸流"
  },
  "water pressure": {
    "pos": "n.phr.",
    "en_def": "the force of water pushing on something",
    "cn_def": "水壓"
  },
  "oil rig": {
    "pos": "n.phr.",
    "en_def": "a large structure used to get oil from under the sea",
    "cn_def": "鑽油平台"
  },
  "marine biologist": {
    "pos": "n.phr.",
    "en_def": "a scientist who studies living things in the sea",
    "cn_def": "海洋生物學家"
  },
  "sediment": {
    "pos": "n.",
    "en_def": "sand, mud and stones that settle at the bottom of water",
    "cn_def": "沉積物"
  },
  "index": {
    "pos": "n.",
    "en_def": "a number used to measure changes",
    "cn_def": "指數;指標"
  },
  "shrimp": {
    "pos": "n.",
    "en_def": "a small sea animal with a shell that people eat",
    "cn_def": "蝦子"
  },
  "medium": {
    "pos": "n.",
    "en_def": "a way of communicating or expressing something",
    "cn_def": "媒介;媒體"
  },
  "transit": {
    "pos": "n.",
    "en_def": "the act of moving people or goods from one place to another",
    "cn_def": "運輸;運送"
  },
  "apparatus": {
    "pos": "n.",
    "en_def": "equipment used for a particular purpose",
    "cn_def": "儀器;設備"
  },
  "continental shelf": {
    "pos": "n.phr.",
    "en_def": "the shallow sea floor near the edge of a continent",
    "cn_def": "大陸棚"
  },
  "sea turtle": {
    "pos": "n.phr.",
    "en_def": "a large turtle that lives in the ocean",
    "cn_def": "海龜"
  },
  "twilight zone": {
    "pos": "n.phr.",
    "en_def": "the dim ocean layer between about 200 and 1,000 metres deep",
    "cn_def": "中層帶;暮光帶"
  },
  "fishing ground": {
    "pos": "n.phr.",
    "en_def": "an area of sea where many fish are caught",
    "cn_def": "漁場"
  },
  "omit": {
    "pos": "v.",
    "en_def": "to leave out something",
    "cn_def": "省略;遺漏"
  },
  "dispel": {
    "pos": "v.",
    "en_def": "to make a belief or feeling disappear",
    "cn_def": "消除;驅散"
  },
  "denote": {
    "pos": "v.",
    "en_def": "to be a sign of something",
    "cn_def": "表示;代表"
  },
  "fabricate": {
    "pos": "v.",
    "en_def": "to invent false information to deceive people",
    "cn_def": "捏造;偽造"
  },
  "exert": {
    "pos": "v.",
    "en_def": "to use power or influence",
    "cn_def": "施加;運用"
  },
  "embark": {
    "pos": "v.",
    "en_def": "to start something new and important",
    "cn_def": "開始;著手"
  },
  "upwelling": {
    "pos": "n.",
    "en_def": "the rising of cold, deep water to the surface",
    "cn_def": "湧升流"
  },
  "drilling": {
    "pos": "n.",
    "en_def": "making deep holes in the ground to find oil or gas",
    "cn_def": "鑽探"
  },
  "swell": {
    "pos": "n.",
    "en_def": "long, smooth waves caused by distant winds",
    "cn_def": "湧浪"
  },
  "complacent": {
    "pos": "adj.",
    "en_def": "too satisfied and not worried about possible danger",
    "cn_def": "自滿的;掉以輕心的"
  },
  "indiscriminate": {
    "pos": "adj.",
    "en_def": "done without careful choice",
    "cn_def": "不加選擇的;濫用的"
  },
  "abrupt": {
    "pos": "adj.",
    "en_def": "sudden and unexpected",
    "cn_def": "突然的"
  },
  "lobster": {
    "pos": "n.",
    "en_def": "a large shellfish with big claws that people eat",
    "cn_def": "龍蝦"
  },
  "shipwreck": {
    "pos": "n.",
    "en_def": "the remains of a ship that has sunk",
    "cn_def": "沉船;船骸"
  },
  "momentum": {
    "pos": "n.",
    "en_def": "the force that keeps something moving or developing",
    "cn_def": "動力;氣勢"
  },
  "apathy": {
    "pos": "n.",
    "en_def": "a lack of interest or concern",
    "cn_def": "冷漠;漠不關心"
  },
  "conducive": {
    "pos": "adj.",
    "en_def": "helping something to happen",
    "cn_def": "有助於……的"
  },
  "uncharted": {
    "pos": "adj.",
    "en_def": "not yet mapped or explored",
    "cn_def": "未知的;海圖上未標明的"
  },
  "turbulent": {
    "pos": "adj.",
    "en_def": "moving in a strong and uneven way",
    "cn_def": "洶湧的;動盪的"
  },
  "diverge": {
    "pos": "v.",
    "en_def": "to go in different directions",
    "cn_def": "分歧;分開"
  },
  "emulate": {
    "pos": "v.",
    "en_def": "to try to copy someone because you admire them",
    "cn_def": "效法;仿效"
  },
  "surpass": {
    "pos": "v.",
    "en_def": "to be better or greater than something",
    "cn_def": "超越;勝過"
  },
  "delineate": {
    "pos": "v.",
    "en_def": "to describe or mark the exact edges of something",
    "cn_def": "劃定;描繪"
  },
  "aspire": {
    "pos": "v.",
    "en_def": "to have a strong wish to achieve something",
    "cn_def": "渴望;立志"
  },
  "cater": {
    "pos": "v.",
    "en_def": "to provide what people need or want",
    "cn_def": "迎合;滿足需求"
  },
  "harness": {
    "pos": "v.",
    "en_def": "to control and use natural energy",
    "cn_def": "利用(自然力)"
  },
  "illuminate": {
    "pos": "v.",
    "en_def": "to make something clearer or easier to understand",
    "cn_def": "闡明;照亮"
  },
  "unravel": {
    "pos": "v.",
    "en_def": "to understand or solve something complicated",
    "cn_def": "解開;闡明"
  },
  "harpoon": {
    "pos": "n.",
    "en_def": "a long spear used to hunt whales and large fish",
    "cn_def": "魚叉"
  },
  "breakthrough": {
    "pos": "n.",
    "en_def": "an important new discovery",
    "cn_def": "突破"
  },
  "seafood": {
    "pos": "n.",
    "en_def": "fish and shellfish eaten as food",
    "cn_def": "海鮮"
  },
  "compel": {
    "pos": "v.",
    "en_def": "to force someone to do something",
    "cn_def": "迫使;強迫"
  },
  "capitalise": {
    "pos": "v.",
    "en_def": "to use a situation to gain an advantage",
    "cn_def": "利用;從中獲利"
  },
  "dedicate": {
    "pos": "v.",
    "en_def": "to give your time and energy to something",
    "cn_def": "奉獻;致力於"
  },
  "daunting": {
    "pos": "adj.",
    "en_def": "making you feel worried about whether you can succeed",
    "cn_def": "令人卻步的"
  },
  "fruitful": {
    "pos": "adj.",
    "en_def": "producing good results",
    "cn_def": "富有成果的"
  },
  "intrusive": {
    "pos": "adj.",
    "en_def": "disturbing in an unwelcome way",
    "cn_def": "侵擾的;打擾人的"
  }
};

const EXTRA_GLOSSES = {};
