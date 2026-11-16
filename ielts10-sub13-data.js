// Topic 10 Subunit 13 Quiz Data: Academic Words 學術單字 7 (outlier – flaunt)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S13 - Academic Words 學術單字 7 (outlier – flaunt)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "outlier",
    "pos": "n.",
    "cn_def": "異常值；離群者",
    "en_def": "a person or thing very different from the rest of the group",
    "sentence": "Most cities in the survey had rising rents, but this town was an {{BLANK}}, because its prices actually fell.",
    "cn": "調查中大多數城市的房租都在上漲，但這個城鎮是個異數，因為它的房價反而下跌了。"
  },
  {
    "word": "panacea",
    "pos": "n.",
    "cn_def": "萬靈丹",
    "en_def": "something believed to solve all problems",
    "sentence": "Building more roads is not a {{BLANK}} for traffic, because new roads often attract even more cars.",
    "cn": "多蓋道路並不是解決交通問題的萬靈丹，因為新道路往往會吸引更多車輛。"
  },
  {
    "word": "patchwork",
    "pos": "n.",
    "cn_def": "拼湊物；大雜燴",
    "en_def": "something made of many different parts that do not match",
    "sentence": "From the plane, the farmland looked like a {{BLANK}} of green and yellow fields, while the city was a grey block.",
    "cn": "從飛機上看，農地像是綠色和黃色田地的拼布，而城市則是一塊灰色的區塊。"
  },
  {
    "word": "precinct",
    "pos": "n.",
    "cn_def": "（城市中的）特定區域；徒步區",
    "en_def": "an area of a town used for a special purpose, often closed to cars",
    "sentence": "The shopping {{BLANK}} is closed to traffic, so parents can let their children walk around freely.",
    "cn": "這個購物徒步區禁止車輛通行，所以家長可以讓孩子自由地四處走動。"
  },
  {
    "word": "tapestry",
    "pos": "n.",
    "cn_def": "豐富多彩的組合",
    "en_def": "a rich mixture of different things",
    "sentence": "The city is a {{BLANK}} of old temples, modern towers and busy markets, so every street has something new to see.",
    "cn": "這座城市是古老廟宇、現代高樓和熱鬧市場交織而成的多彩畫面，所以每條街都有新鮮事可看。"
  },
  {
    "word": "wasteland",
    "pos": "n.",
    "cn_def": "荒地；廢地",
    "en_def": "an empty area of land that is not used or cared for",
    "sentence": "The area behind the factory was a {{BLANK}} for years, but volunteers cleaned it up and turned it into a garden.",
    "cn": "工廠後面那塊地多年來是一片荒地，但志工們把它清理乾淨並改造成一座花園。"
  },
  {
    "word": "aptly",
    "pos": "adv.",
    "cn_def": "恰當地；貼切地",
    "en_def": "in a suitable or fitting way",
    "sentence": "The street is {{BLANK}} named Bamboo Lane, because tall bamboo grows along both sides of it.",
    "cn": "這條街被貼切地命名為「竹巷」，因為兩旁長滿了高大的竹子。"
  },
  {
    "word": "broadly",
    "pos": "adv.",
    "cn_def": "大致上；整體而言",
    "en_def": "in general, without considering details",
    "sentence": "Residents {{BLANK}} support the new bike lanes, although some shop owners worry about losing parking spaces.",
    "cn": "居民們大致上支持新的自行車道，雖然有些店家擔心會失去停車位。"
  },
  {
    "word": "ever-increasing",
    "pos": "adj.",
    "cn_def": "不斷增加的",
    "en_def": "growing all the time",
    "sentence": "The city struggles to provide homes for its {{BLANK}} population, so it is building new towns along the train lines.",
    "cn": "這座城市難以為其不斷增加的人口提供住所，所以它正沿著鐵路線興建新市鎮。"
  },
  {
    "word": "unparalleled",
    "pos": "adj.",
    "cn_def": "無與倫比的",
    "en_def": "better or greater than anything else",
    "sentence": "The tower offers {{BLANK}} views of the harbour, so tickets for the observation deck sell out every weekend.",
    "cn": "這座塔提供無與倫比的港口景觀，所以觀景台的門票每個週末都賣光。"
  },
  {
    "word": "throng",
    "pos": "n.",
    "cn_def": "人群；群眾",
    "en_def": "a large crowd of people",
    "sentence": "A {{BLANK}} of shoppers filled the street on the first day of the sale, and the police had to control the crowd.",
    "cn": "特賣第一天一大群購物者擠滿了街道，而警察不得不出面控制人潮。"
  },
  {
    "word": "abode",
    "pos": "n.",
    "cn_def": "住所；居所",
    "en_def": "the place where someone lives (formal)",
    "sentence": "Her tiny flat is a humble {{BLANK}}, but she has filled it with plants and books, so it feels warm and cosy.",
    "cn": "她的小公寓是一個簡樸的住所，但她在裡面擺滿了植物和書，所以感覺溫暖又舒適。"
  },
  {
    "word": "boon",
    "pos": "n.",
    "cn_def": "恩惠；福音",
    "en_def": "something very helpful",
    "sentence": "The new metro line is a {{BLANK}} for students in the suburbs, because their journey to school is now half as long.",
    "cn": "新捷運線對郊區的學生來說是一大福音，因為他們的上學路程現在縮短了一半。"
  },
  {
    "word": "brisk",
    "pos": "adj.",
    "cn_def": "興旺的；輕快的",
    "en_def": "quick and active",
    "sentence": "Business at the night market was {{BLANK}} during the holiday, so the vendors stayed open until two in the morning.",
    "cn": "假期間夜市的生意很興旺，所以攤販們一直營業到凌晨兩點。"
  },
  {
    "word": "caveat",
    "pos": "n.",
    "cn_def": "但書；附加說明",
    "en_def": "a warning that something is true only in certain conditions",
    "sentence": "The plan sounds great, but there is one {{BLANK}}: it only works if enough people stop driving to work.",
    "cn": "這個計畫聽起來很棒，但有一個但書：只有足夠多的人不再開車上班時它才行得通。"
  },
  {
    "word": "clamour",
    "pos": "n.",
    "cn_def": "強烈要求；喧嚷",
    "en_def": "a loud demand or complaint from many people",
    "sentence": "There has been a growing {{BLANK}} for cheaper housing, so the government promised to build fifty thousand new homes.",
    "cn": "要求更便宜住宅的呼聲越來越大，所以政府承諾興建五萬戶新住宅。"
  },
  {
    "word": "clout",
    "pos": "n.",
    "cn_def": "影響力；權勢",
    "en_def": "power and influence",
    "sentence": "Large developers have a lot of political {{BLANK}}, so small community groups often find it hard to stop their projects.",
    "cn": "大型建商有很大的政治影響力，所以小型社區團體常常很難阻止他們的開發案。"
  },
  {
    "word": "coveted",
    "pos": "adj.",
    "cn_def": "令人垂涎的；眾所渴望的",
    "en_def": "wanted very much by many people",
    "sentence": "A flat with a river view is a {{BLANK}} prize in this city, so prices for those homes are extremely high.",
    "cn": "在這座城市裡，有河景的公寓是令人垂涎的寶物，所以那些房子的價格極高。"
  },
  {
    "word": "crux",
    "pos": "n.",
    "cn_def": "關鍵；癥結",
    "en_def": "the most important point of a problem",
    "sentence": "The {{BLANK}} of the problem is that there are not enough homes, so building more is the only real solution.",
    "cn": "問題的癥結在於住房不足，所以興建更多住宅才是唯一真正的解決辦法。"
  },
  {
    "word": "culprit",
    "pos": "n.",
    "cn_def": "罪魁禍首；元凶",
    "en_def": "the person or thing that causes a problem",
    "sentence": "Experts say that air conditioners are the main {{BLANK}} behind the city's summer power cuts, so they ask people to save energy.",
    "cn": "專家表示冷氣是造成城市夏季停電的主要元凶，所以他們呼籲大家節約用電。"
  },
  {
    "word": "debacle",
    "pos": "n.",
    "cn_def": "徹底的失敗；大挫敗",
    "en_def": "a complete and embarrassing failure",
    "sentence": "The new bus system was a {{BLANK}} on its first day, because the apps crashed and passengers waited for hours.",
    "cn": "新公車系統在第一天就徹底失敗，因為應用程式當機，乘客等了好幾個小時。"
  },
  {
    "word": "deluge",
    "pos": "n.",
    "cn_def": "豪雨；洪水般大量湧來的事物",
    "en_def": "a very large amount of rain or water; a huge amount of something",
    "sentence": "The council received a {{BLANK}} of complaints about the new parking fees, so it agreed to review them.",
    "cn": "議會收到了排山倒海般的投訴，反對新的停車費，所以同意重新檢討。"
  },
  {
    "word": "detour",
    "pos": "n.",
    "cn_def": "繞道；繞行路線",
    "en_def": "a longer route taken to avoid a problem",
    "sentence": "The main road was closed for repairs, so the bus took a {{BLANK}} through the back streets and we arrived late.",
    "cn": "主要道路因施工封閉，所以公車繞道走後巷，而我們遲到了。"
  },
  {
    "word": "extravagant",
    "pos": "adj.",
    "cn_def": "奢侈的；鋪張浪費的",
    "en_def": "spending or costing far too much money",
    "sentence": "Critics called the golden bus shelters {{BLANK}}, and they said the money should have been spent on more buses.",
    "cn": "批評者稱那些金色公車候車亭太奢侈，並說這筆錢應該用來增加公車班次。"
  },
  {
    "word": "flaunt",
    "pos": "v.",
    "cn_def": "炫耀；誇示",
    "en_def": "to show something off proudly to get attention",
    "sentence": "Some rich residents {{BLANK}} their sports cars on the narrow streets, but neighbours complain about the noise.",
    "cn": "一些有錢的居民在狹窄的街道上炫耀他們的跑車，但鄰居們抱怨噪音很大。"
  }
];

const MCQS = [
  {
    "q": "Most cities in the survey had rising rents, but this town was an _____, because its prices actually fell.",
    "options": [
      "clutter",
      "fare",
      "interior",
      "outlier"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Building more roads is not a _____ for traffic, because new roads often attract even more cars.",
    "options": [
      "apartment",
      "panacea",
      "footfall",
      "storey"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "From the plane, the farmland looked like a _____ of green and yellow fields, while the city was a grey block.",
    "options": [
      "patchwork",
      "pavement",
      "backdrop",
      "skylight"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The shopping _____ is closed to traffic, so parents can let their children walk around freely.",
    "options": [
      "cross-section",
      "electrician",
      "precinct",
      "housing"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The city is a _____ of old temples, modern towers and busy markets, so every street has something new to see.",
    "options": [
      "plaza",
      "tapestry",
      "locality",
      "cement"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The area behind the factory was a _____ for years, but volunteers cleaned it up and turned it into a garden.",
    "options": [
      "recourse",
      "skyline",
      "wasteland",
      "architecture"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The street is _____ named Bamboo Lane, because tall bamboo grows along both sides of it.",
    "options": [
      "congenial",
      "spire",
      "stark",
      "aptly"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Residents _____ support the new bike lanes, although some shop owners worry about losing parking spaces.",
    "options": [
      "broadly",
      "clientele",
      "run-down",
      "brittle"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The city struggles to provide homes for its _____ population, so it is building new towns along the train lines.",
    "options": [
      "derelict",
      "ever-increasing",
      "rife",
      "bustling"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The tower offers _____ views of the harbour, so tickets for the observation deck sell out every weekend.",
    "options": [
      "considerate",
      "waterproof",
      "generic",
      "unparalleled"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "A _____ of shoppers filled the street on the first day of the sale, and the police had to control the crowd.",
    "options": [
      "greywater",
      "gentrification",
      "throng",
      "e-scooter"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Her tiny flat is a humble _____, but she has filled it with plants and books, so it feels warm and cosy.",
    "options": [
      "abode",
      "mainstay",
      "radius",
      "enclave"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The new metro line is a _____ for students in the suburbs, because their journey to school is now half as long.",
    "options": [
      "carpenter",
      "malaise",
      "boon",
      "gravel"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Business at the night market was _____ during the holiday, so the vendors stayed open until two in the morning.",
    "options": [
      "brisk",
      "immaculate",
      "residential",
      "acceptable"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The plan sounds great, but there is one _____: it only works if enough people stop driving to work.",
    "options": [
      "redevelopment",
      "caveat",
      "skyline",
      "assortment"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "There has been a growing _____ for cheaper housing, so the government promised to build fifty thousand new homes.",
    "options": [
      "blight",
      "footfall",
      "mainstay",
      "clamour"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Large developers have a lot of political _____, so small community groups often find it hard to stop their projects.",
    "options": [
      "fare",
      "clout",
      "clientele",
      "beam"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "A flat with a river view is a _____ prize in this city, so prices for those homes are extremely high.",
    "options": [
      "immaculate",
      "audacious",
      "fledgling",
      "coveted"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The _____ of the problem is that there are not enough homes, so building more is the only real solution.",
    "options": [
      "cyclist",
      "squatter",
      "crux",
      "fee"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Experts say that air conditioners are the main _____ behind the city's summer power cuts, so they ask people to save energy.",
    "options": [
      "culprit",
      "homeowner",
      "park-and-ride",
      "backlog"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The new bus system was a _____ on its first day, because the apps crashed and passengers waited for hours.",
    "options": [
      "pretext",
      "tile",
      "debacle",
      "tram"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The council received a _____ of complaints about the new parking fees, so it agreed to review them.",
    "options": [
      "deluge",
      "nuisance",
      "fixture",
      "greywater"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The main road was closed for repairs, so the bus took a _____ through the back streets and we arrived late.",
    "options": [
      "thermostat",
      "car-sharing",
      "gradient",
      "detour"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Critics called the golden bus shelters _____, and they said the money should have been spent on more buses.",
    "options": [
      "generic",
      "extravagant",
      "walkable",
      "brittle"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Some rich residents _____ their sports cars on the narrow streets, but neighbours complain about the noise.",
    "options": [
      "flaunt",
      "ravage",
      "appease",
      "buttress"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "outlier": {
    "pos": "n.",
    "en_def": "a person or thing very different from the rest of the group",
    "cn_def": "異常值；離群者"
  },
  "panacea": {
    "pos": "n.",
    "en_def": "something believed to solve all problems",
    "cn_def": "萬靈丹"
  },
  "patchwork": {
    "pos": "n.",
    "en_def": "something made of many different parts that do not match",
    "cn_def": "拼湊物；大雜燴"
  },
  "precinct": {
    "pos": "n.",
    "en_def": "an area of a town used for a special purpose, often closed to cars",
    "cn_def": "（城市中的）特定區域；徒步區"
  },
  "tapestry": {
    "pos": "n.",
    "en_def": "a rich mixture of different things",
    "cn_def": "豐富多彩的組合"
  },
  "wasteland": {
    "pos": "n.",
    "en_def": "an empty area of land that is not used or cared for",
    "cn_def": "荒地；廢地"
  },
  "aptly": {
    "pos": "adv.",
    "en_def": "in a suitable or fitting way",
    "cn_def": "恰當地；貼切地"
  },
  "broadly": {
    "pos": "adv.",
    "en_def": "in general, without considering details",
    "cn_def": "大致上；整體而言"
  },
  "ever-increasing": {
    "pos": "adj.",
    "en_def": "growing all the time",
    "cn_def": "不斷增加的"
  },
  "unparalleled": {
    "pos": "adj.",
    "en_def": "better or greater than anything else",
    "cn_def": "無與倫比的"
  },
  "throng": {
    "pos": "n.",
    "en_def": "a large crowd of people",
    "cn_def": "人群；群眾"
  },
  "abode": {
    "pos": "n.",
    "en_def": "the place where someone lives (formal)",
    "cn_def": "住所；居所"
  },
  "boon": {
    "pos": "n.",
    "en_def": "something very helpful",
    "cn_def": "恩惠；福音"
  },
  "brisk": {
    "pos": "adj.",
    "en_def": "quick and active",
    "cn_def": "興旺的；輕快的"
  },
  "caveat": {
    "pos": "n.",
    "en_def": "a warning that something is true only in certain conditions",
    "cn_def": "但書；附加說明"
  },
  "clamour": {
    "pos": "n.",
    "en_def": "a loud demand or complaint from many people",
    "cn_def": "強烈要求；喧嚷"
  },
  "clout": {
    "pos": "n.",
    "en_def": "power and influence",
    "cn_def": "影響力；權勢"
  },
  "coveted": {
    "pos": "adj.",
    "en_def": "wanted very much by many people",
    "cn_def": "令人垂涎的；眾所渴望的"
  },
  "crux": {
    "pos": "n.",
    "en_def": "the most important point of a problem",
    "cn_def": "關鍵；癥結"
  },
  "culprit": {
    "pos": "n.",
    "en_def": "the person or thing that causes a problem",
    "cn_def": "罪魁禍首；元凶"
  },
  "debacle": {
    "pos": "n.",
    "en_def": "a complete and embarrassing failure",
    "cn_def": "徹底的失敗；大挫敗"
  },
  "deluge": {
    "pos": "n.",
    "en_def": "a very large amount of rain or water; a huge amount of something",
    "cn_def": "豪雨；洪水般大量湧來的事物"
  },
  "detour": {
    "pos": "n.",
    "en_def": "a longer route taken to avoid a problem",
    "cn_def": "繞道；繞行路線"
  },
  "extravagant": {
    "pos": "adj.",
    "en_def": "spending or costing far too much money",
    "cn_def": "奢侈的；鋪張浪費的"
  },
  "flaunt": {
    "pos": "v.",
    "en_def": "to show something off proudly to get attention",
    "cn_def": "炫耀；誇示"
  },
  "clutter": {
    "pos": "n.",
    "en_def": "many things lying around in an untidy way",
    "cn_def": "雜亂的東西"
  },
  "fare": {
    "pos": "n.",
    "en_def": "the money you pay to travel on a bus, train or taxi",
    "cn_def": "車資；票價"
  },
  "interior": {
    "pos": "n.",
    "en_def": "the inside of a building or room",
    "cn_def": "內部；室內"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in on one floor of a building",
    "cn_def": "公寓"
  },
  "footfall": {
    "pos": "n.",
    "en_def": "the number of people who visit a shop or area",
    "cn_def": "人流量；來客數"
  },
  "storey": {
    "pos": "n.",
    "en_def": "one level or floor of a building",
    "cn_def": "（樓房的）層"
  },
  "pavement": {
    "pos": "n.",
    "en_def": "the path at the side of a road for people to walk on",
    "cn_def": "人行道"
  },
  "backdrop": {
    "pos": "n.",
    "en_def": "the scenery behind something",
    "cn_def": "背景"
  },
  "skylight": {
    "pos": "n.",
    "en_def": "a window in a roof that lets in light",
    "cn_def": "天窗"
  },
  "cross-section": {
    "pos": "n.",
    "en_def": "a group that includes many different types of people",
    "cn_def": "橫斷面；具代表性的一群人"
  },
  "electrician": {
    "pos": "n.",
    "en_def": "a person who puts in and repairs electrical wires",
    "cn_def": "電工"
  },
  "housing": {
    "pos": "n.",
    "en_def": "buildings that people live in",
    "cn_def": "住房；住宅"
  },
  "plaza": {
    "pos": "n.",
    "en_def": "an open public square in a city",
    "cn_def": "廣場"
  },
  "locality": {
    "pos": "n.",
    "en_def": "a particular area or neighbourhood",
    "cn_def": "地區；所在地"
  },
  "cement": {
    "pos": "n.",
    "en_def": "a grey powder mixed with water and sand to make concrete",
    "cn_def": "水泥"
  },
  "recourse": {
    "pos": "n.",
    "en_def": "a possible way to get help in a difficult situation",
    "cn_def": "求助的途徑；依靠"
  },
  "skyline": {
    "pos": "n.",
    "en_def": "the shape that tall buildings make against the sky",
    "cn_def": "天際線"
  },
  "architecture": {
    "pos": "n.",
    "en_def": "the style and design of buildings",
    "cn_def": "建築；建築風格"
  },
  "congenial": {
    "pos": "adj.",
    "en_def": "pleasant and friendly",
    "cn_def": "宜人的；投緣的"
  },
  "spire": {
    "pos": "n.",
    "en_def": "a tall pointed structure on top of a church or tower",
    "cn_def": "尖塔；尖頂"
  },
  "stark": {
    "pos": "adj.",
    "en_def": "very clear and obvious, often unpleasantly so",
    "cn_def": "鮮明的；明顯的"
  },
  "clientele": {
    "pos": "n.",
    "en_def": "all the customers of a shop or business",
    "cn_def": "（全體）顧客；客群"
  },
  "run-down": {
    "pos": "adj.",
    "en_def": "in bad condition because nobody has looked after it",
    "cn_def": "破敗的；年久失修的"
  },
  "brittle": {
    "pos": "adj.",
    "en_def": "hard but easily broken",
    "cn_def": "易碎的；脆的"
  },
  "derelict": {
    "pos": "adj.",
    "en_def": "empty and falling apart because nobody uses it",
    "cn_def": "廢棄的；荒廢的"
  },
  "rife": {
    "pos": "adj.",
    "en_def": "very common, usually about something bad",
    "cn_def": "（壞事）盛行的；普遍的"
  },
  "bustling": {
    "pos": "adj.",
    "en_def": "full of busy, noisy activity",
    "cn_def": "熙熙攘攘的；熱鬧的"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's feelings and needs",
    "cn_def": "體貼的；為他人著想的"
  },
  "waterproof": {
    "pos": "adj.",
    "en_def": "not allowing water to go through",
    "cn_def": "防水的"
  },
  "generic": {
    "pos": "adj.",
    "en_def": "not special; the same as many others",
    "cn_def": "一般的；千篇一律的"
  },
  "greywater": {
    "pos": "n.",
    "en_def": "used water from sinks and showers that can be used again",
    "cn_def": "中水；灰水（可回收的生活廢水）"
  },
  "gentrification": {
    "pos": "n.",
    "en_def": "when richer people move into a poor area and prices rise",
    "cn_def": "仕紳化；中產階級化"
  },
  "e-scooter": {
    "pos": "n.",
    "en_def": "a small electric scooter that you stand on",
    "cn_def": "電動滑板車"
  },
  "mainstay": {
    "pos": "n.",
    "en_def": "the most important part that everything depends on",
    "cn_def": "支柱；主要依靠"
  },
  "radius": {
    "pos": "n.",
    "en_def": "the distance from the centre of a circle to its edge; an area around a point",
    "cn_def": "半徑；（某點周圍的）範圍"
  },
  "enclave": {
    "pos": "n.",
    "en_def": "an area where a particular group of people lives",
    "cn_def": "飛地；（特定族群的）聚居地"
  },
  "carpenter": {
    "pos": "n.",
    "en_def": "a person who makes and repairs wooden things",
    "cn_def": "木匠"
  },
  "malaise": {
    "pos": "n.",
    "en_def": "a general feeling that something is wrong or weak",
    "cn_def": "萎靡不振；（社會、經濟的）低迷"
  },
  "gravel": {
    "pos": "n.",
    "en_def": "small stones used to make paths and roads",
    "cn_def": "碎石；礫石"
  },
  "immaculate": {
    "pos": "adj.",
    "en_def": "perfectly clean and tidy",
    "cn_def": "一塵不染的；完美無瑕的"
  },
  "residential": {
    "pos": "adj.",
    "en_def": "used for homes rather than offices or factories",
    "cn_def": "住宅的"
  },
  "acceptable": {
    "pos": "adj.",
    "en_def": "good enough to be allowed or agreed to",
    "cn_def": "可接受的"
  },
  "redevelopment": {
    "pos": "n.",
    "en_def": "the process of rebuilding an old area with new buildings",
    "cn_def": "重建；再開發"
  },
  "assortment": {
    "pos": "n.",
    "en_def": "a mixture of different kinds of things",
    "cn_def": "各式各樣；什錦"
  },
  "blight": {
    "pos": "n.",
    "en_def": "something that spoils or damages a place",
    "cn_def": "禍害；破壞景觀的事物"
  },
  "beam": {
    "pos": "n.",
    "en_def": "a long thick piece of wood or metal that supports a roof",
    "cn_def": "樑；橫樑"
  },
  "audacious": {
    "pos": "adj.",
    "en_def": "very bold and willing to take risks",
    "cn_def": "大膽的；有魄力的"
  },
  "fledgling": {
    "pos": "adj.",
    "en_def": "new and still developing",
    "cn_def": "剛起步的；初出茅廬的"
  },
  "cyclist": {
    "pos": "n.",
    "en_def": "a person who rides a bicycle",
    "cn_def": "騎單車的人"
  },
  "squatter": {
    "pos": "n.",
    "en_def": "a person who lives in an empty building without permission",
    "cn_def": "違法佔住者"
  },
  "fee": {
    "pos": "n.",
    "en_def": "money you pay for a service or to enter a place",
    "cn_def": "費用"
  },
  "homeowner": {
    "pos": "n.",
    "en_def": "a person who owns the home they live in",
    "cn_def": "屋主；房屋所有權人"
  },
  "park-and-ride": {
    "pos": "n.",
    "en_def": "a system where you park outside a city and take a bus in",
    "cn_def": "停車轉乘"
  },
  "backlog": {
    "pos": "n.",
    "en_def": "a large amount of work waiting to be done",
    "cn_def": "積壓的工作；待辦的大量事項"
  },
  "pretext": {
    "pos": "n.",
    "en_def": "a false reason given to hide the real one",
    "cn_def": "藉口；托辭"
  },
  "tile": {
    "pos": "n.",
    "en_def": "a thin flat square piece used to cover floors, walls or roofs",
    "cn_def": "磁磚；瓦片"
  },
  "tram": {
    "pos": "n.",
    "en_def": "an electric vehicle that runs on rails along city streets",
    "cn_def": "路面電車"
  },
  "nuisance": {
    "pos": "n.",
    "en_def": "something annoying that causes problems",
    "cn_def": "討厭的事物；麻煩"
  },
  "fixture": {
    "pos": "n.",
    "en_def": "a person or thing that is always present in a place",
    "cn_def": "固定存在的人或事物；常客"
  },
  "thermostat": {
    "pos": "n.",
    "en_def": "a device that controls the temperature of a room",
    "cn_def": "恆溫器；溫控器"
  },
  "car-sharing": {
    "pos": "n.",
    "en_def": "a service where people rent cars for short periods",
    "cn_def": "汽車共享"
  },
  "gradient": {
    "pos": "n.",
    "en_def": "how steep a slope is",
    "cn_def": "坡度"
  },
  "walkable": {
    "pos": "adj.",
    "en_def": "safe and pleasant for walking around",
    "cn_def": "適合步行的"
  },
  "ravage": {
    "pos": "v.",
    "en_def": "to damage something very badly",
    "cn_def": "摧毀；嚴重破壞"
  },
  "appease": {
    "pos": "v.",
    "en_def": "to make someone calmer by giving them what they want",
    "cn_def": "安撫；平息（怒氣）"
  },
  "buttress": {
    "pos": "v.",
    "en_def": "to support or make something stronger",
    "cn_def": "支持；加強"
  }
};

const EXTRA_GLOSSES = {};
