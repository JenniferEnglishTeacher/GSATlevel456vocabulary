// Topic 4 Subunit 4 Quiz Data: Ocean Science & Exploration 海洋科學與探索
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T04 S04 - Ocean Science & Exploration 海洋科學與探索",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "oceanography",
    "pos": "n.",
    "cn_def": "海洋學",
    "en_def": "the scientific study of the ocean",
    "sentence": "My cousin is studying {{BLANK}} at university, and she spends a month at sea every year collecting water samples.",
    "cn": "我表姊在大學讀海洋學,而且她每年都會在海上待一個月採集海水樣本。"
  },
  {
    "word": "oceanographer",
    "pos": "n.",
    "cn_def": "海洋學家",
    "en_def": "a scientist who studies the ocean",
    "sentence": "An {{BLANK}} explained on TV that the ocean is getting warmer, and she warned that fish are moving to cooler waters.",
    "cn": "一位海洋學家在電視上解釋海洋正在變暖,而且她警告魚類正遷往較涼的水域。"
  },
  {
    "word": "marine biologist",
    "pos": "n.phr.",
    "cn_def": "海洋生物學家",
    "en_def": "a scientist who studies living things in the sea",
    "sentence": "I want to become a {{BLANK}} because I love sea animals, and I hope to help protect coral reefs one day.",
    "cn": "我想成為海洋生物學家,因為我熱愛海洋動物,而且我希望有一天能幫忙保護珊瑚礁。"
  },
  {
    "word": "submarine",
    "pos": "n.",
    "cn_def": "潛水艇",
    "en_def": "a ship that can travel underwater",
    "sentence": "The tourist {{BLANK}} took us forty metres under the sea, and we watched sharks through the large windows.",
    "cn": "觀光潛水艇帶我們到海面下四十公尺,我們透過大窗戶觀看鯊魚。"
  },
  {
    "word": "submersible",
    "pos": "n.",
    "cn_def": "深潛器",
    "en_def": "a small underwater vehicle used for research",
    "sentence": "The scientists used a {{BLANK}} to reach the deep sea floor, because divers cannot survive the pressure there.",
    "cn": "科學家使用深潛器抵達深海海床,因為潛水員無法承受那裡的壓力。"
  },
  {
    "word": "sonar",
    "pos": "n.",
    "cn_def": "聲納",
    "en_def": "a system that uses sound to find objects underwater",
    "sentence": "The ship used {{BLANK}} to map the sea floor, but scientists worry that the loud sounds may confuse whales.",
    "cn": "這艘船使用聲納繪製海床地圖,但科學家擔心巨大的聲響可能讓鯨魚感到混亂。"
  },
  {
    "word": "buoy",
    "pos": "n.",
    "cn_def": "浮標",
    "en_def": "a floating object in the sea used as a marker or to measure things",
    "sentence": "A yellow {{BLANK}} floats above the reef to show boats where they can tie up, so they do not drop anchors on the coral.",
    "cn": "一個黃色浮標漂浮在珊瑚礁上方,告訴船隻可以在哪裡繫泊,這樣它們就不會把錨丟在珊瑚上。"
  },
  {
    "word": "probe",
    "pos": "n.",
    "cn_def": "探測器",
    "en_def": "a tool sent to collect information from a place that is hard to reach",
    "sentence": "Researchers lowered a {{BLANK}} into the deep water, and it sent back data about temperature and oxygen levels.",
    "cn": "研究人員把探測器放入深水中,它傳回有關溫度和氧氣含量的數據。"
  },
  {
    "word": "expedition",
    "pos": "n.",
    "cn_def": "探險;考察",
    "en_def": "an organised journey to explore or study something",
    "sentence": "The team went on a three-month {{BLANK}} to Antarctica, and they discovered several new kinds of sea creatures.",
    "cn": "團隊前往南極進行為期三個月的考察,而且他們發現了好幾種新的海洋生物。"
  },
  {
    "word": "explorer",
    "pos": "n.",
    "cn_def": "探險家",
    "en_def": "a person who travels to unknown places to learn about them",
    "sentence": "The famous ocean {{BLANK}} spent his life studying the sea, and his films made millions of people love marine life.",
    "cn": "這位著名的海洋探險家一生都在研究海洋,而他的影片讓數百萬人愛上海洋生物。"
  },
  {
    "word": "navigate",
    "pos": "v.",
    "cn_def": "導航;航行",
    "en_def": "to find the way when travelling, especially by sea",
    "sentence": "Ancient sailors used the stars to {{BLANK}} across the Pacific, although they had no maps or modern instruments.",
    "cn": "古代水手利用星星航行橫越太平洋,儘管他們沒有地圖或現代儀器。"
  },
  {
    "word": "navigation",
    "pos": "n.",
    "cn_def": "導航;航海術",
    "en_def": "the skill of planning and following a route",
    "sentence": "Modern {{BLANK}} depends on satellites, but sailors still learn to use maps in case the electronic system fails.",
    "cn": "現代導航仰賴衛星,但水手仍然學習使用地圖,以防電子系統故障。"
  },
  {
    "word": "voyage",
    "pos": "n.",
    "cn_def": "航程;航行",
    "en_def": "a long journey by sea",
    "sentence": "The {{BLANK}} from Taiwan to Japan took three days, and many passengers felt seasick during the stormy weather.",
    "cn": "從台灣到日本的航程花了三天,而且許多乘客在暴風雨天氣中感到暈船。"
  },
  {
    "word": "vessel",
    "pos": "n.",
    "cn_def": "船隻;船艦",
    "en_def": "a ship or large boat",
    "sentence": "The research {{BLANK}} carries a small lab, so scientists can study samples while they are still at sea.",
    "cn": "這艘研究船上載有一間小實驗室,所以科學家仍在海上時就能研究樣本。"
  },
  {
    "word": "crew",
    "pos": "n.",
    "cn_def": "船員;全體工作人員",
    "en_def": "the people who work on a ship",
    "sentence": "The {{BLANK}} worked through the night to repair the engine, because the ship was drifting toward dangerous rocks.",
    "cn": "船員們徹夜工作修理引擎,因為船正漂向危險的岩石。"
  },
  {
    "word": "deep-sea",
    "pos": "adj.",
    "cn_def": "深海的",
    "en_def": "found or happening in the deepest parts of the ocean",
    "sentence": "{{BLANK}} fish often look strange, and some have glowing lights that help them catch food in the dark.",
    "cn": "深海魚常常長得很奇特,而且有些有發光器幫助牠們在黑暗中捕捉食物。"
  },
  {
    "word": "water pressure",
    "pos": "n.phr.",
    "cn_def": "水壓",
    "en_def": "the force of water pushing on something",
    "sentence": "{{BLANK}} increases as you go deeper, so divers must come up slowly to stay safe.",
    "cn": "水壓會隨著你潛得越深而增加,所以潛水員必須慢慢上升才能保持安全。"
  },
  {
    "word": "sediment",
    "pos": "n.",
    "cn_def": "沉積物",
    "en_def": "sand, mud and stones that settle at the bottom of water",
    "sentence": "Scientists study {{BLANK}} from the sea floor, because it holds clues about the climate thousands of years ago.",
    "cn": "科學家研究海床的沉積物,因為它保存了數千年前氣候的線索。"
  },
  {
    "word": "chart",
    "pos": "v.",
    "cn_def": "繪製(海)圖",
    "en_def": "to make a map of an area, especially of the sea",
    "sentence": "Early sailors had to {{BLANK}} the coastline carefully, because hidden rocks could easily sink their ships.",
    "cn": "早期水手必須仔細繪製海岸線的地圖,因為隱藏的礁石很容易讓船沉沒。"
  },
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "潛水",
    "en_def": "to go under water, often with special equipment",
    "sentence": "We plan to {{BLANK}} near the shipwreck tomorrow, but the trip will be cancelled if the sea is too rough.",
    "cn": "我們計畫明天在沉船附近潛水,但如果海象太差,行程就會取消。"
  },
  {
    "word": "diver",
    "pos": "n.",
    "cn_def": "潛水員",
    "en_def": "a person who swims underwater, often for work or sport",
    "sentence": "The {{BLANK}} checked his air tank twice before jumping in, because a small mistake can be very dangerous underwater.",
    "cn": "那位潛水員跳下水前檢查了他的氣瓶兩次,因為在水下一個小錯誤就可能非常危險。"
  },
  {
    "word": "wetsuit",
    "pos": "n.",
    "cn_def": "潛水衣;防寒衣",
    "en_def": "a tight rubber suit that keeps you warm in water",
    "sentence": "The water was only eighteen degrees, so I wore a thick {{BLANK}} and stayed warm for the whole dive.",
    "cn": "海水只有十八度,所以我穿了一件厚防寒衣,整趟潛水都保持溫暖。"
  },
  {
    "word": "underwater",
    "pos": "adj.",
    "cn_def": "水下的;水中的",
    "en_def": "below the surface of water",
    "sentence": "She bought an {{BLANK}} camera before her holiday, and she took amazing photos of turtles and coral.",
    "cn": "她在假期前買了一台水下相機,而且拍了很棒的海龜和珊瑚照片。"
  },
  {
    "word": "satellite",
    "pos": "n.",
    "cn_def": "衛星",
    "en_def": "a machine in space that sends information back to Earth",
    "sentence": "Data from a {{BLANK}} shows that sea temperatures are rising, so scientists can warn reef managers in advance.",
    "cn": "來自衛星的數據顯示海水溫度正在上升,所以科學家能事先警告珊瑚礁管理人員。"
  },
  {
    "word": "uncharted",
    "pos": "adj.",
    "cn_def": "未知的;海圖上未標明的",
    "en_def": "not yet mapped or explored",
    "sentence": "Large parts of the sea floor are still {{BLANK}}, so explorers may discover new mountains and canyons in the future.",
    "cn": "海床的大部分地區仍然未被繪製,所以探險家未來可能會發現新的山脈和峽谷。"
  },
  {
    "word": "unexplored",
    "pos": "adj.",
    "cn_def": "未探索的",
    "en_def": "not yet visited or studied",
    "sentence": "More than eighty percent of the ocean is {{BLANK}}, and scientists believe millions of species are still unknown.",
    "cn": "超過百分之八十的海洋尚未被探索,而且科學家相信仍有數百萬個物種不為人知。"
  },
  {
    "word": "compass",
    "pos": "n.",
    "cn_def": "指南針;羅盤",
    "en_def": "a tool with a needle that always points north",
    "sentence": "The sailor checked his {{BLANK}} because the clouds were hiding the stars, and he did not want to lose his way.",
    "cn": "那名水手查看他的指南針,因為雲層遮住了星星,而他不想迷失方向。"
  },
  {
    "word": "anchor",
    "pos": "n.",
    "cn_def": "錨",
    "en_def": "a heavy metal object dropped to stop a boat from moving",
    "sentence": "Boats should never drop an {{BLANK}} on coral, because it can break plants and animals that took years to grow.",
    "cn": "船隻絕不應該把錨丟在珊瑚上,因為它會破壞花了好幾年才長成的動植物。"
  },
  {
    "word": "hull",
    "pos": "n.",
    "cn_def": "船身;船體",
    "en_def": "the main body of a ship",
    "sentence": "The {{BLANK}} of the ship was damaged by rocks, so water began to come in and the crew called for help.",
    "cn": "船的船體被岩石撞壞,所以海水開始流入,船員發出求救訊號。"
  },
  {
    "word": "harbour",
    "pos": "n.",
    "cn_def": "港口;港灣",
    "en_def": "a sheltered area of water where ships can stay safely",
    "sentence": "All the fishing boats returned to the {{BLANK}} before the typhoon arrived, and the fishermen tied them together tightly.",
    "cn": "所有漁船在颱風來臨前回到港口,漁民們把船緊緊地綁在一起。"
  },
  {
    "word": "sink",
    "pos": "v.",
    "cn_def": "下沉;沉沒",
    "en_def": "to go down below the surface of water",
    "sentence": "The old ship hit an iceberg and {{BLANK}} in less than three hours, so many passengers did not have time to escape.",
    "cn": "那艘老船撞上冰山,不到三小時就沉沒了,所以許多乘客來不及逃生。",
    "answer": "sank",
    "alts": [
      "sink",
      "sunk"
    ]
  },
  {
    "word": "shipwreck",
    "pos": "n.",
    "cn_def": "沉船;船骸",
    "en_def": "the remains of a ship that has sunk",
    "sentence": "The {{BLANK}} has become an artificial reef, and divers love to see the fish living inside it.",
    "cn": "這艘沉船已經成為人工魚礁,而潛水員喜歡觀看住在裡面的魚。"
  },
  {
    "word": "salvage",
    "pos": "v.",
    "cn_def": "打撈;搶救",
    "en_def": "to save goods or a ship from damage or the sea",
    "sentence": "The company tried to {{BLANK}} the cargo from the sunken ship, but strong currents made the work very slow.",
    "cn": "公司試著從沉船中打撈貨物,但強勁的海流讓工作進行得非常緩慢。"
  }
];

const MCQS = [
  {
    "q": "My cousin is studying _____ at university, and she spends a month at sea every year collecting water samples.",
    "options": [
      "oceanography",
      "lobster",
      "disparity",
      "efficacy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "An _____ explained on TV that the ocean is getting warmer, and she warned that fish are moving to cooler waters.",
    "options": [
      "clam",
      "shore",
      "packaging",
      "oceanographer"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "I want to become a _____ because I love sea animals, and I hope to help protect coral reefs one day.",
    "options": [
      "a sea change",
      "sea cucumber",
      "marine biologist",
      "heavy metal"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The tourist _____ took us forty metres under the sea, and we watched sharks through the large windows.",
    "options": [
      "mollusc",
      "submarine",
      "momentum",
      "eutrophication"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The scientists used a _____ to reach the deep sea floor, because divers cannot survive the pressure there.",
    "options": [
      "pearl",
      "fin",
      "submersible",
      "phytoplankton"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The ship used _____ to map the sea floor, but scientists worry that the loud sounds may confuse whales.",
    "options": [
      "sonar",
      "practitioner",
      "inventory",
      "shoreline"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "A yellow _____ floats above the reef to show boats where they can tie up, so they do not drop anchors on the coral.",
    "options": [
      "influx",
      "mode",
      "whaling",
      "buoy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Researchers lowered a _____ into the deep water, and it sent back data about temperature and oxygen levels.",
    "options": [
      "cargo",
      "probe",
      "bay",
      "gill"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The team went on a three-month _____ to Antarctica, and they discovered several new kinds of sea creatures.",
    "options": [
      "expedition",
      "bay",
      "autonomy",
      "licence"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The famous ocean _____ spent his life studying the sea, and his films made millions of people love marine life.",
    "options": [
      "upwelling",
      "sponge",
      "explorer",
      "tanker"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Ancient sailors used the stars to _____ across the Pacific, although they had no maps or modern instruments.",
    "options": [
      "perpetuate",
      "compel",
      "insert",
      "navigate"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Modern _____ depends on satellites, but sailors still learn to use maps in case the electronic system fails.",
    "options": [
      "plankton",
      "navigation",
      "disparity",
      "efficacy"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The _____ from Taiwan to Japan took three days, and many passengers felt seasick during the stormy weather.",
    "options": [
      "apathy",
      "breakthrough",
      "voyage",
      "upwelling"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The research _____ carries a small lab, so scientists can study samples while they are still at sea.",
    "options": [
      "vessel",
      "gulf",
      "squid",
      "inlet"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The _____ worked through the night to repair the engine, because the ship was drifting toward dangerous rocks.",
    "options": [
      "seamount",
      "dolphin",
      "seafood",
      "crew"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "_____ fish often look strange, and some have glowing lights that help them catch food in the dark.",
    "options": [
      "affluent",
      "deep-sea",
      "durable",
      "interdependent"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "_____ increases as you go deeper, so divers must come up slowly to stay safe.",
    "options": [
      "water pressure",
      "red tide",
      "wave power",
      "marine protected area"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Scientists study _____ from the sea floor, because it holds clues about the climate thousands of years ago.",
    "options": [
      "transit",
      "packaging",
      "sediment",
      "panel"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Early sailors had to _____ the coastline carefully, because hidden rocks could easily sink their ships.",
    "options": [
      "disclose",
      "chart",
      "diverge",
      "authorise"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "We plan to _____ near the shipwreck tomorrow, but the trip will be cancelled if the sea is too rough.",
    "options": [
      "inhabit",
      "culminate",
      "confer",
      "dive"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The _____ checked his air tank twice before jumping in, because a small mistake can be very dangerous underwater.",
    "options": [
      "longline",
      "diver",
      "octopus",
      "sewage"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The water was only eighteen degrees, so I wore a thick _____ and stayed warm for the whole dive.",
    "options": [
      "wetsuit",
      "mineral",
      "undertow",
      "expertise"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "She bought an _____ camera before her holiday, and she took amazing photos of turtles and coral.",
    "options": [
      "concise",
      "sunlit",
      "underwater",
      "entrenched"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Data from a _____ shows that sea temperatures are rising, so scientists can warn reef managers in advance.",
    "options": [
      "seabed",
      "tuna",
      "anemone",
      "satellite"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Large parts of the sea floor are still _____, so explorers may discover new mountains and canyons in the future.",
    "options": [
      "enduring",
      "indiscriminate",
      "uncharted",
      "formidable"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "More than eighty percent of the ocean is _____, and scientists believe millions of species are still unknown.",
    "options": [
      "relentless",
      "unexplored",
      "abyssal",
      "prone"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The sailor checked his _____ because the clouds were hiding the stars, and he did not want to lose his way.",
    "options": [
      "compass",
      "index",
      "catalyst",
      "jellyfish"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Boats should never drop an _____ on coral, because it can break plants and animals that took years to grow.",
    "options": [
      "prerequisite",
      "seabird",
      "seabed",
      "anchor"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The _____ of the ship was damaged by rocks, so water began to come in and the crew called for help.",
    "options": [
      "kelp",
      "cove",
      "hull",
      "swell"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "All the fishing boats returned to the _____ before the typhoon arrived, and the fishermen tied them together tightly.",
    "options": [
      "amenity",
      "harbour",
      "calcium",
      "limestone"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The old ship hit an iceberg and _____ in less than three hours, so many passengers did not have time to escape.",
    "options": [
      "sank",
      "instruct",
      "illuminate",
      "compel"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The _____ has become an artificial reef, and divers love to see the fish living inside it.",
    "options": [
      "apparatus",
      "mode",
      "bait",
      "shipwreck"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The company tried to _____ the cargo from the sunken ship, but strong currents made the work very slow.",
    "options": [
      "instruct",
      "salvage",
      "capitalise",
      "harness"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "oceanography": {
    "pos": "n.",
    "en_def": "the scientific study of the ocean",
    "cn_def": "海洋學"
  },
  "oceanographer": {
    "pos": "n.",
    "en_def": "a scientist who studies the ocean",
    "cn_def": "海洋學家"
  },
  "marine biologist": {
    "pos": "n.phr.",
    "en_def": "a scientist who studies living things in the sea",
    "cn_def": "海洋生物學家"
  },
  "submarine": {
    "pos": "n.",
    "en_def": "a ship that can travel underwater",
    "cn_def": "潛水艇"
  },
  "submersible": {
    "pos": "n.",
    "en_def": "a small underwater vehicle used for research",
    "cn_def": "深潛器"
  },
  "sonar": {
    "pos": "n.",
    "en_def": "a system that uses sound to find objects underwater",
    "cn_def": "聲納"
  },
  "buoy": {
    "pos": "n.",
    "en_def": "a floating object in the sea used as a marker or to measure things",
    "cn_def": "浮標"
  },
  "probe": {
    "pos": "n.",
    "en_def": "a tool sent to collect information from a place that is hard to reach",
    "cn_def": "探測器"
  },
  "expedition": {
    "pos": "n.",
    "en_def": "an organised journey to explore or study something",
    "cn_def": "探險;考察"
  },
  "explorer": {
    "pos": "n.",
    "en_def": "a person who travels to unknown places to learn about them",
    "cn_def": "探險家"
  },
  "navigate": {
    "pos": "v.",
    "en_def": "to find the way when travelling, especially by sea",
    "cn_def": "導航;航行"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the skill of planning and following a route",
    "cn_def": "導航;航海術"
  },
  "voyage": {
    "pos": "n.",
    "en_def": "a long journey by sea",
    "cn_def": "航程;航行"
  },
  "vessel": {
    "pos": "n.",
    "en_def": "a ship or large boat",
    "cn_def": "船隻;船艦"
  },
  "crew": {
    "pos": "n.",
    "en_def": "the people who work on a ship",
    "cn_def": "船員;全體工作人員"
  },
  "deep-sea": {
    "pos": "adj.",
    "en_def": "found or happening in the deepest parts of the ocean",
    "cn_def": "深海的"
  },
  "water pressure": {
    "pos": "n.phr.",
    "en_def": "the force of water pushing on something",
    "cn_def": "水壓"
  },
  "sediment": {
    "pos": "n.",
    "en_def": "sand, mud and stones that settle at the bottom of water",
    "cn_def": "沉積物"
  },
  "chart": {
    "pos": "v.",
    "en_def": "to make a map of an area, especially of the sea",
    "cn_def": "繪製(海)圖"
  },
  "dive": {
    "pos": "v.",
    "en_def": "to go under water, often with special equipment",
    "cn_def": "潛水"
  },
  "diver": {
    "pos": "n.",
    "en_def": "a person who swims underwater, often for work or sport",
    "cn_def": "潛水員"
  },
  "wetsuit": {
    "pos": "n.",
    "en_def": "a tight rubber suit that keeps you warm in water",
    "cn_def": "潛水衣;防寒衣"
  },
  "underwater": {
    "pos": "adj.",
    "en_def": "below the surface of water",
    "cn_def": "水下的;水中的"
  },
  "satellite": {
    "pos": "n.",
    "en_def": "a machine in space that sends information back to Earth",
    "cn_def": "衛星"
  },
  "uncharted": {
    "pos": "adj.",
    "en_def": "not yet mapped or explored",
    "cn_def": "未知的;海圖上未標明的"
  },
  "unexplored": {
    "pos": "adj.",
    "en_def": "not yet visited or studied",
    "cn_def": "未探索的"
  },
  "compass": {
    "pos": "n.",
    "en_def": "a tool with a needle that always points north",
    "cn_def": "指南針;羅盤"
  },
  "anchor": {
    "pos": "n.",
    "en_def": "a heavy metal object dropped to stop a boat from moving",
    "cn_def": "錨"
  },
  "hull": {
    "pos": "n.",
    "en_def": "the main body of a ship",
    "cn_def": "船身;船體"
  },
  "harbour": {
    "pos": "n.",
    "en_def": "a sheltered area of water where ships can stay safely",
    "cn_def": "港口;港灣"
  },
  "sank": {
    "pos": "v.",
    "en_def": "to go down below the surface of water",
    "cn_def": "下沉;沉沒"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down below the surface of water",
    "cn_def": "下沉;沉沒"
  },
  "shipwreck": {
    "pos": "n.",
    "en_def": "the remains of a ship that has sunk",
    "cn_def": "沉船;船骸"
  },
  "salvage": {
    "pos": "v.",
    "en_def": "to save goods or a ship from damage or the sea",
    "cn_def": "打撈;搶救"
  },
  "lobster": {
    "pos": "n.",
    "en_def": "a large shellfish with big claws that people eat",
    "cn_def": "龍蝦"
  },
  "disparity": {
    "pos": "n.",
    "en_def": "a large difference between things",
    "cn_def": "差異;懸殊"
  },
  "efficacy": {
    "pos": "n.",
    "en_def": "the ability to produce the result you want",
    "cn_def": "效力;功效"
  },
  "clam": {
    "pos": "n.",
    "en_def": "a shellfish with two shells that close tightly",
    "cn_def": "蛤蜊"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of the sea",
    "cn_def": "岸邊;海岸"
  },
  "packaging": {
    "pos": "n.",
    "en_def": "the materials used to wrap or protect goods",
    "cn_def": "包裝"
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
  "heavy metal": {
    "pos": "n.phr.",
    "en_def": "a dangerous metal such as lead or mercury",
    "cn_def": "重金屬"
  },
  "mollusc": {
    "pos": "n.",
    "en_def": "a soft animal often with a shell, like a snail or octopus",
    "cn_def": "軟體動物"
  },
  "momentum": {
    "pos": "n.",
    "en_def": "the force that keeps something moving or developing",
    "cn_def": "動力;氣勢"
  },
  "eutrophication": {
    "pos": "n.",
    "en_def": "too many nutrients in water, which causes plants to grow too much",
    "cn_def": "優養化"
  },
  "pearl": {
    "pos": "n.",
    "en_def": "a small, shiny white ball that grows inside an oyster",
    "cn_def": "珍珠"
  },
  "fin": {
    "pos": "n.",
    "en_def": "a thin flat part of a fish that helps it swim",
    "cn_def": "鰭"
  },
  "phytoplankton": {
    "pos": "n.",
    "en_def": "tiny plants that float in the sea and use sunlight",
    "cn_def": "浮游植物"
  },
  "practitioner": {
    "pos": "n.",
    "en_def": "a person who works in a skilled job",
    "cn_def": "從業人員;實踐者"
  },
  "inventory": {
    "pos": "n.",
    "en_def": "a complete list of things in a place",
    "cn_def": "清單;盤點"
  },
  "shoreline": {
    "pos": "n.",
    "en_def": "the edge of the sea where it meets the land",
    "cn_def": "海岸線"
  },
  "influx": {
    "pos": "n.",
    "en_def": "the arrival of many people or things",
    "cn_def": "湧入"
  },
  "mode": {
    "pos": "n.",
    "en_def": "a particular way of doing something",
    "cn_def": "方式;模式"
  },
  "whaling": {
    "pos": "n.",
    "en_def": "the hunting of whales",
    "cn_def": "捕鯨"
  },
  "cargo": {
    "pos": "n.",
    "en_def": "goods carried by a ship, plane or truck",
    "cn_def": "貨物"
  },
  "bay": {
    "pos": "n.",
    "en_def": "a part of the sea that curves into the land",
    "cn_def": "海灣"
  },
  "gill": {
    "pos": "n.",
    "en_def": "the part of a fish used for breathing in water",
    "cn_def": "鰓"
  },
  "autonomy": {
    "pos": "n.",
    "en_def": "the freedom to make your own decisions",
    "cn_def": "自主權"
  },
  "licence": {
    "pos": "n.",
    "en_def": "an official document that allows you to do something",
    "cn_def": "執照;許可證"
  },
  "upwelling": {
    "pos": "n.",
    "en_def": "the rising of cold, deep water to the surface",
    "cn_def": "湧升流"
  },
  "sponge": {
    "pos": "n.",
    "en_def": "a simple sea animal with a body full of holes",
    "cn_def": "海綿"
  },
  "tanker": {
    "pos": "n.",
    "en_def": "a ship that carries oil or other liquids",
    "cn_def": "油輪"
  },
  "perpetuate": {
    "pos": "v.",
    "en_def": "to make something continue, especially something bad",
    "cn_def": "使持續;使延續"
  },
  "compel": {
    "pos": "v.",
    "en_def": "to force someone to do something",
    "cn_def": "迫使;強迫"
  },
  "insert": {
    "pos": "v.",
    "en_def": "to put something inside something else",
    "cn_def": "插入;放入"
  },
  "plankton": {
    "pos": "n.",
    "en_def": "tiny plants and animals that float in the sea",
    "cn_def": "浮游生物"
  },
  "apathy": {
    "pos": "n.",
    "en_def": "a lack of interest or concern",
    "cn_def": "冷漠;漠不關心"
  },
  "breakthrough": {
    "pos": "n.",
    "en_def": "an important new discovery",
    "cn_def": "突破"
  },
  "gulf": {
    "pos": "n.",
    "en_def": "a large area of sea mostly surrounded by land",
    "cn_def": "海灣(大型)"
  },
  "squid": {
    "pos": "n.",
    "en_def": "a sea animal with ten arms and a long body",
    "cn_def": "魷魚"
  },
  "inlet": {
    "pos": "n.",
    "en_def": "a narrow area of water that goes into the land from the sea",
    "cn_def": "小海灣;水灣"
  },
  "seamount": {
    "pos": "n.",
    "en_def": "an underwater mountain that does not reach the surface",
    "cn_def": "海底山"
  },
  "dolphin": {
    "pos": "n.",
    "en_def": "an intelligent sea mammal with a long nose",
    "cn_def": "海豚"
  },
  "seafood": {
    "pos": "n.",
    "en_def": "fish and shellfish eaten as food",
    "cn_def": "海鮮"
  },
  "affluent": {
    "pos": "adj.",
    "en_def": "rich and having a comfortable life",
    "cn_def": "富裕的"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "able to last a long time without breaking",
    "cn_def": "耐用的"
  },
  "interdependent": {
    "pos": "adj.",
    "en_def": "depending on each other",
    "cn_def": "相互依賴的"
  },
  "red tide": {
    "pos": "n.phr.",
    "en_def": "a harmful algae bloom that makes the sea look red",
    "cn_def": "赤潮;紅潮"
  },
  "wave power": {
    "pos": "n.phr.",
    "en_def": "electricity made from the movement of sea waves",
    "cn_def": "波浪發電"
  },
  "marine protected area": {
    "pos": "n.phr.",
    "en_def": "a part of the sea where human activities are limited to protect nature",
    "cn_def": "海洋保護區"
  },
  "transit": {
    "pos": "n.",
    "en_def": "the act of moving people or goods from one place to another",
    "cn_def": "運輸;運送"
  },
  "panel": {
    "pos": "n.",
    "en_def": "a group of experts who discuss or decide something",
    "cn_def": "小組;委員會"
  },
  "disclose": {
    "pos": "v.",
    "en_def": "to make information known to the public",
    "cn_def": "揭露;公開"
  },
  "diverge": {
    "pos": "v.",
    "en_def": "to go in different directions",
    "cn_def": "分歧;分開"
  },
  "authorise": {
    "pos": "v.",
    "en_def": "to give official permission for something",
    "cn_def": "授權;批准"
  },
  "inhabit": {
    "pos": "v.",
    "en_def": "to live in a place",
    "cn_def": "居住於;棲息於"
  },
  "culminate": {
    "pos": "v.",
    "en_def": "to end with an important event",
    "cn_def": "以……告終;達到頂點"
  },
  "confer": {
    "pos": "v.",
    "en_def": "to discuss something with others before deciding",
    "cn_def": "商議;協商"
  },
  "longline": {
    "pos": "n.",
    "en_def": "a very long fishing line with thousands of hooks",
    "cn_def": "延繩釣"
  },
  "octopus": {
    "pos": "n.",
    "en_def": "a sea animal with a soft body and eight arms",
    "cn_def": "章魚"
  },
  "sewage": {
    "pos": "n.",
    "en_def": "dirty water and waste from toilets and drains",
    "cn_def": "污水"
  },
  "mineral": {
    "pos": "n.",
    "en_def": "a natural substance such as metal found in rock",
    "cn_def": "礦物"
  },
  "undertow": {
    "pos": "n.",
    "en_def": "a strong current under the surface that pulls water away from the shore",
    "cn_def": "退浪;底流"
  },
  "expertise": {
    "pos": "n.",
    "en_def": "special skill or knowledge",
    "cn_def": "專業知識;專長"
  },
  "concise": {
    "pos": "adj.",
    "en_def": "short and clear",
    "cn_def": "簡潔的"
  },
  "sunlit": {
    "pos": "adj.",
    "en_def": "receiving light from the sun",
    "cn_def": "陽光照射的"
  },
  "entrenched": {
    "pos": "adj.",
    "en_def": "firmly established and difficult to change",
    "cn_def": "根深蒂固的"
  },
  "seabed": {
    "pos": "n.",
    "en_def": "the ground at the bottom of the sea",
    "cn_def": "海床"
  },
  "tuna": {
    "pos": "n.",
    "en_def": "a large sea fish often eaten in sushi or from cans",
    "cn_def": "鮪魚"
  },
  "anemone": {
    "pos": "n.",
    "en_def": "a sea animal with many soft arms that looks like a flower",
    "cn_def": "海葵"
  },
  "enduring": {
    "pos": "adj.",
    "en_def": "lasting for a long time",
    "cn_def": "持久的;長久的"
  },
  "indiscriminate": {
    "pos": "adj.",
    "en_def": "done without careful choice",
    "cn_def": "不加選擇的;濫用的"
  },
  "formidable": {
    "pos": "adj.",
    "en_def": "very powerful or difficult",
    "cn_def": "強大的;令人敬畏的"
  },
  "relentless": {
    "pos": "adj.",
    "en_def": "continuing strongly without stopping",
    "cn_def": "持續不斷的;無情的"
  },
  "abyssal": {
    "pos": "adj.",
    "en_def": "found in the deepest parts of the ocean",
    "cn_def": "深海底層的"
  },
  "prone": {
    "pos": "adj.",
    "en_def": "likely to suffer from something",
    "cn_def": "易於……的"
  },
  "index": {
    "pos": "n.",
    "en_def": "a number used to measure changes",
    "cn_def": "指數;指標"
  },
  "catalyst": {
    "pos": "n.",
    "en_def": "something that causes an important change",
    "cn_def": "催化劑;促成因素"
  },
  "jellyfish": {
    "pos": "n.",
    "en_def": "a soft sea animal with long parts that can sting",
    "cn_def": "水母"
  },
  "prerequisite": {
    "pos": "n.",
    "en_def": "something that must exist before something else can happen",
    "cn_def": "先決條件"
  },
  "seabird": {
    "pos": "n.",
    "en_def": "a bird that lives near the sea and eats fish",
    "cn_def": "海鳥"
  },
  "kelp": {
    "pos": "n.",
    "en_def": "a very large, brown seaweed",
    "cn_def": "海帶;巨藻"
  },
  "cove": {
    "pos": "n.",
    "en_def": "a small, sheltered bay",
    "cn_def": "小海灣"
  },
  "swell": {
    "pos": "n.",
    "en_def": "long, smooth waves caused by distant winds",
    "cn_def": "湧浪"
  },
  "amenity": {
    "pos": "n.",
    "en_def": "something that makes a place comfortable or easy to use",
    "cn_def": "便利設施"
  },
  "calcium": {
    "pos": "n.",
    "en_def": "a chemical element found in bones, shells and coral",
    "cn_def": "鈣"
  },
  "limestone": {
    "pos": "n.",
    "en_def": "a type of white or grey rock formed from shells and coral",
    "cn_def": "石灰岩"
  },
  "instruct": {
    "pos": "v.",
    "en_def": "to tell someone officially what to do",
    "cn_def": "指示;教導"
  },
  "illuminate": {
    "pos": "v.",
    "en_def": "to make something clearer or easier to understand",
    "cn_def": "闡明;照亮"
  },
  "apparatus": {
    "pos": "n.",
    "en_def": "equipment used for a particular purpose",
    "cn_def": "儀器;設備"
  },
  "bait": {
    "pos": "n.",
    "en_def": "food put on a hook or in a trap to catch fish or animals",
    "cn_def": "魚餌;誘餌"
  },
  "capitalise": {
    "pos": "v.",
    "en_def": "to use a situation to gain an advantage",
    "cn_def": "利用;從中獲利"
  },
  "harness": {
    "pos": "v.",
    "en_def": "to control and use natural energy",
    "cn_def": "利用(自然力)"
  }
};

const EXTRA_GLOSSES = {};
