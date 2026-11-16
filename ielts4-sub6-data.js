// Topic 4 Subunit 6 Quiz Data: Fishing, Shipping & Ocean Resources 漁業、航運與海洋資源
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T04 S06 - Fishing, Shipping & Ocean Resources 漁業、航運與海洋資源",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fishery",
    "pos": "n.",
    "cn_def": "漁場;漁業",
    "en_def": "an area or business where fish are caught",
    "sentence": "The local {{BLANK}} closed for three months, so fish numbers could recover after years of heavy fishing.",
    "cn": "當地漁場關閉三個月,好讓魚群數量在多年的大量捕撈後得以恢復。"
  },
  {
    "word": "fisherman",
    "pos": "n.",
    "cn_def": "漁夫;漁民",
    "en_def": "a person who catches fish as a job",
    "sentence": "My grandfather was a {{BLANK}} for forty years, and he says there were far more fish in the sea when he was young.",
    "cn": "我爺爺當了四十年的漁夫,而他說他年輕時海裡的魚多得多。"
  },
  {
    "word": "trawler",
    "pos": "n.",
    "cn_def": "拖網漁船",
    "en_def": "a large fishing boat that pulls a big net",
    "sentence": "A huge {{BLANK}} can catch tons of fish in one day, but it also catches many animals that nobody wants to eat.",
    "cn": "一艘巨大的拖網漁船一天就能捕到好幾噸的魚,但它也捕到許多沒人想吃的動物。"
  },
  {
    "word": "trawl",
    "pos": "v.",
    "cn_def": "拖網捕魚",
    "en_def": "to catch fish by pulling a large net through the water",
    "sentence": "Boats that {{BLANK}} along the sea floor damage coral and sponges, so some countries have banned this method.",
    "cn": "沿著海床拖網捕魚的船隻會破壞珊瑚和海綿,所以一些國家已經禁止這種方法。"
  },
  {
    "word": "longline",
    "pos": "n.",
    "cn_def": "延繩釣",
    "en_def": "a very long fishing line with thousands of hooks",
    "sentence": "A single {{BLANK}} can stretch for many kilometres, and sea turtles and birds are sometimes caught on its hooks.",
    "cn": "一條延繩釣可以延伸好幾公里,而且海龜和海鳥有時會被它的鉤子鉤住。"
  },
  {
    "word": "catch",
    "pos": "v.",
    "cn_def": "捕捉;抓到",
    "en_def": "to get hold of a fish or animal",
    "sentence": "My father {{BLANK}} three large fish yesterday, but he let the smallest one go because it was too young.",
    "cn": "我爸爸昨天捕到三條大魚,但他把最小的那條放走了,因為牠太小了。",
    "answer": "caught",
    "alts": [
      "catch"
    ]
  },
  {
    "word": "fish stock",
    "pos": "n.phr.",
    "cn_def": "魚類資源;魚群存量",
    "en_def": "the amount of fish of one kind in an area",
    "sentence": "The {{BLANK}} of tuna has fallen sharply, so the government has limited how many fish each boat can catch.",
    "cn": "鮪魚的魚群存量已經大幅下降,所以政府限制了每艘船能捕撈的魚量。"
  },
  {
    "word": "aquaculture",
    "pos": "n.",
    "cn_def": "水產養殖",
    "en_def": "the farming of fish and other sea creatures",
    "sentence": "{{BLANK}} provides about half of the seafood we eat today, but badly run farms can pollute the water nearby.",
    "cn": "水產養殖提供了我們今天所吃海鮮的大約一半,但管理不善的養殖場會污染附近的水域。"
  },
  {
    "word": "fish farm",
    "pos": "n.phr.",
    "cn_def": "養魚場",
    "en_def": "a place where fish are raised for food",
    "sentence": "The {{BLANK}} near our village raises milkfish, and it sells them to restaurants all over southern Taiwan.",
    "cn": "我們村子附近的養魚場養殖虱目魚,而且把牠們賣給台灣南部各地的餐廳。"
  },
  {
    "word": "seafood",
    "pos": "n.",
    "cn_def": "海鮮",
    "en_def": "fish and shellfish eaten as food",
    "sentence": "We had fresh {{BLANK}} at the night market, and my brother tried grilled squid for the first time.",
    "cn": "我們在夜市吃了新鮮的海鮮,而我弟弟第一次嚐試了烤魷魚。"
  },
  {
    "word": "tuna",
    "pos": "n.",
    "cn_def": "鮪魚",
    "en_def": "a large sea fish often eaten in sushi or from cans",
    "sentence": "Bluefin {{BLANK}} is very popular in sushi restaurants, but its numbers dropped sharply because of overfishing.",
    "cn": "黑鮪魚在壽司店非常受歡迎,但牠的數量因為過度捕撈而大幅減少。"
  },
  {
    "word": "salmon",
    "pos": "n.",
    "cn_def": "鮭魚",
    "en_def": "a fish with pink flesh that swims from the sea up rivers to lay eggs",
    "sentence": "Every autumn, {{BLANK}} swim up rivers to lay their eggs, and bears wait by the water to catch them.",
    "cn": "每年秋天,鮭魚會逆流而上產卵,而熊會在水邊等著抓牠們。"
  },
  {
    "word": "shrimp",
    "pos": "n.",
    "cn_def": "蝦子",
    "en_def": "a small sea animal with a shell that people eat",
    "sentence": "Mangroves are often cut down to build {{BLANK}} farms, so coastlines lose their natural protection from storms.",
    "cn": "紅樹林常被砍伐來興建蝦場,所以海岸線失去了抵擋暴風的天然屏障。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口;港市",
    "en_def": "a town or city with a harbour where ships load and unload",
    "sentence": "Kaohsiung is a busy {{BLANK}}, and huge ships arrive there every day from all over the world.",
    "cn": "高雄是個繁忙的港口,而巨大的船隻每天從世界各地抵達那裡。"
  },
  {
    "word": "cargo",
    "pos": "n.",
    "cn_def": "貨物",
    "en_def": "goods carried by a ship, plane or truck",
    "sentence": "The ship was carrying {{BLANK}} from China to Europe, but a storm forced it to stop in Singapore.",
    "cn": "這艘船正把貨物從中國運往歐洲,但一場暴風雨迫使它停靠新加坡。"
  },
  {
    "word": "container ship",
    "pos": "n.phr.",
    "cn_def": "貨櫃船",
    "en_def": "a large ship that carries goods in big metal boxes",
    "sentence": "A {{BLANK}} got stuck in the Suez Canal in 2021, and hundreds of other ships had to wait for days.",
    "cn": "2021年一艘貨櫃船卡在蘇伊士運河,而數百艘其他船隻必須等好幾天。"
  },
  {
    "word": "tanker",
    "pos": "n.",
    "cn_def": "油輪",
    "en_def": "a ship that carries oil or other liquids",
    "sentence": "The oil {{BLANK}} ran into rocks near the coast, so thousands of tonnes of oil leaked into the sea.",
    "cn": "那艘油輪在海岸附近撞上岩石,所以數千噸的石油漏入海中。"
  },
  {
    "word": "freight",
    "pos": "n.",
    "cn_def": "貨運;貨物",
    "en_def": "goods carried by ship, train or plane",
    "sentence": "Most international {{BLANK}} travels by sea because it is cheaper, although air transport is much faster.",
    "cn": "大部分國際貨運走海運,因為比較便宜,雖然空運快得多。"
  },
  {
    "word": "shipping lane",
    "pos": "n.phr.",
    "cn_def": "航道",
    "en_def": "a regular route used by ships at sea",
    "sentence": "The {{BLANK}} passes close to a whale feeding area, so ships are asked to slow down during certain months.",
    "cn": "這條航道靠近鯨魚的覓食區,所以船隻在某些月份被要求減速。"
  },
  {
    "word": "oil rig",
    "pos": "n.phr.",
    "cn_def": "鑽油平台",
    "en_def": "a large structure used to get oil from under the sea",
    "sentence": "Workers on the {{BLANK}} live at sea for weeks at a time, and they fly home by helicopter.",
    "cn": "鑽油平台上的工人一次在海上住好幾週,而且他們搭直升機回家。"
  },
  {
    "word": "drilling",
    "pos": "n.",
    "cn_def": "鑽探",
    "en_def": "making deep holes in the ground to find oil or gas",
    "sentence": "Offshore {{BLANK}} brings money to the region, but many residents worry about another oil spill.",
    "cn": "離岸鑽探為地區帶來收入,但許多居民擔心再次發生漏油。"
  },
  {
    "word": "mineral",
    "pos": "n.",
    "cn_def": "礦物",
    "en_def": "a natural substance such as metal found in rock",
    "sentence": "The sea floor contains many valuable {{BLANK}}, but mining them could destroy habitats that we barely understand.",
    "cn": "海床含有許多珍貴的礦物,但開採它們可能會破壞我們幾乎不了解的棲地。"
  },
  {
    "word": "nodule",
    "pos": "n.",
    "cn_def": "結核(礦物團塊)",
    "en_def": "a small round lump of mineral found on the sea floor",
    "sentence": "Each metal {{BLANK}} on the sea floor took millions of years to form, so mining companies cannot simply wait for more.",
    "cn": "海床上的每一顆金屬結核都花了數百萬年才形成,所以採礦公司無法單純等它再長出來。"
  },
  {
    "word": "wave power",
    "pos": "n.phr.",
    "cn_def": "波浪發電",
    "en_def": "electricity made from the movement of sea waves",
    "sentence": "Taiwan is surrounded by the sea, so {{BLANK}} could become an important source of clean energy in the future.",
    "cn": "台灣四面環海,所以波浪發電未來可能成為重要的乾淨能源來源。"
  },
  {
    "word": "fishing ground",
    "pos": "n.phr.",
    "cn_def": "漁場",
    "en_def": "an area of sea where many fish are caught",
    "sentence": "The waters near Penghu are a rich {{BLANK}}, and fishermen there have caught squid for generations.",
    "cn": "澎湖附近的海域是豐富的漁場,那裡的漁民世世代代都在捕魷魚。"
  },
  {
    "word": "whaling",
    "pos": "n.",
    "cn_def": "捕鯨",
    "en_def": "the hunting of whales",
    "sentence": "Most countries have banned {{BLANK}}, but a few still hunt whales and say it is part of their culture.",
    "cn": "大多數國家已經禁止捕鯨,但少數國家仍然獵捕鯨魚,並說這是他們文化的一部分。"
  },
  {
    "word": "harpoon",
    "pos": "n.",
    "cn_def": "魚叉",
    "en_def": "a long spear used to hunt whales and large fish",
    "sentence": "In the past, hunters threw a {{BLANK}} by hand, but modern whaling ships use guns that fire them.",
    "cn": "過去,獵人用手投擲魚叉,但現代捕鯨船使用發射魚叉的槍。"
  },
  {
    "word": "bait",
    "pos": "n.",
    "cn_def": "魚餌;誘餌",
    "en_def": "food put on a hook or in a trap to catch fish or animals",
    "sentence": "We used small pieces of squid as {{BLANK}}, and within ten minutes my sister caught her first fish.",
    "cn": "我們用小塊魷魚當魚餌,不到十分鐘我妹妹就釣到她的第一條魚。"
  },
  {
    "word": "overexploit",
    "pos": "v.",
    "cn_def": "過度開發;過度利用",
    "en_def": "to use too much of a natural resource so it cannot recover",
    "sentence": "If we continue to {{BLANK}} the sea, there may be almost no large fish left by the end of this century.",
    "cn": "如果我們繼續過度利用海洋,到本世紀末可能幾乎不剩任何大型魚類。"
  },
  {
    "word": "pearl",
    "pos": "n.",
    "cn_def": "珍珠",
    "en_def": "a small, shiny white ball that grows inside an oyster",
    "sentence": "Each {{BLANK}} takes years to grow inside an oyster, so natural ones are rare and very expensive.",
    "cn": "每一顆珍珠都要在牡蠣裡花好幾年才能長成,所以天然珍珠很稀少且非常昂貴。"
  },
  {
    "word": "coastguard",
    "pos": "n.",
    "cn_def": "海巡;海岸巡防隊",
    "en_def": "the organisation that protects people and controls activity along the coast",
    "sentence": "The {{BLANK}} rescued five fishermen after their boat sank, and they also arrested a ship that was fishing illegally.",
    "cn": "海巡在漁船沉沒後救起五名漁民,而且他們也逮捕了一艘非法捕魚的船。"
  },
  {
    "word": "fleet",
    "pos": "n.",
    "cn_def": "船隊",
    "en_def": "a group of ships that work together",
    "sentence": "The country's fishing {{BLANK}} has grown to over 2,000 boats, so experts worry that fish cannot reproduce fast enough.",
    "cn": "該國的捕魚船隊已經成長到超過兩千艘船,所以專家擔心魚類繁殖的速度跟不上。"
  },
  {
    "word": "fishing net",
    "pos": "n.phr.",
    "cn_def": "漁網",
    "en_def": "a net used for catching fish",
    "sentence": "An old {{BLANK}} was stuck on the reef, and the divers spent an hour cutting it free.",
    "cn": "一張舊漁網卡在珊瑚礁上,潛水員們花了一個小時把它割下來。"
  }
];

const MCQS = [
  {
    "q": "The local _____ closed for three months, so fish numbers could recover after years of heavy fishing.",
    "options": [
      "sediment",
      "wetsuit",
      "fishery",
      "vision"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "My grandfather was a _____ for forty years, and he says there were far more fish in the sea when he was young.",
    "options": [
      "pebble",
      "lighthouse",
      "seabed",
      "fisherman"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "A huge _____ can catch tons of fish in one day, but it also catches many animals that nobody wants to eat.",
    "options": [
      "trawler",
      "seal",
      "barnacle",
      "cove"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Boats that _____ along the sea floor damage coral and sponges, so some countries have banned this method.",
    "options": [
      "involve",
      "trawl",
      "pinpoint",
      "succumb"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "A single _____ can stretch for many kilometres, and sea turtles and birds are sometimes caught on its hooks.",
    "options": [
      "pathogen",
      "oceanography",
      "longline",
      "configuration"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "My father _____ three large fish yesterday, but he let the smallest one go because it was too young.",
    "options": [
      "render",
      "evade",
      "dive",
      "caught"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The _____ of tuna has fallen sharply, so the government has limited how many fish each boat can catch.",
    "options": [
      "sustainable fishing",
      "fish stock",
      "hydrothermal vent",
      "no-take zone"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "_____ provides about half of the seafood we eat today, but badly run farms can pollute the water nearby.",
    "options": [
      "aquaculture",
      "seahorse",
      "remedy",
      "abyss"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The _____ near our village raises milkfish, and it sells them to restaurants all over southern Taiwan.",
    "options": [
      "high seas",
      "fish farm",
      "a fish out of water",
      "water pressure"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "We had fresh _____ at the night market, and my brother tried grilled squid for the first time.",
    "options": [
      "voyage",
      "seamount",
      "seafood",
      "larva"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Bluefin _____ is very popular in sushi restaurants, but its numbers dropped sharply because of overfishing.",
    "options": [
      "tuna",
      "harbour",
      "runoff",
      "impetus"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Every autumn, _____ swim up rivers to lay their eggs, and bears wait by the water to catch them.",
    "options": [
      "seagrass",
      "whale",
      "lighthouse",
      "salmon"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Mangroves are often cut down to build _____ farms, so coastlines lose their natural protection from storms.",
    "options": [
      "shrimp",
      "shell",
      "seagrass",
      "strait"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Kaohsiung is a busy _____, and huge ships arrive there every day from all over the world.",
    "options": [
      "seaweed",
      "dune",
      "port",
      "lighthouse"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The ship was carrying _____ from China to Europe, but a storm forced it to stop in Singapore.",
    "options": [
      "polyp",
      "constituent",
      "bay",
      "cargo"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "A _____ got stuck in the Suez Canal in 2021, and hundreds of other ships had to wait for days.",
    "options": [
      "oil spill",
      "container ship",
      "salt marsh",
      "tide pool"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The oil _____ ran into rocks near the coast, so thousands of tonnes of oil leaked into the sea.",
    "options": [
      "tanker",
      "seal",
      "pebble",
      "eutrophication"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Most international _____ travels by sea because it is cheaper, although air transport is much faster.",
    "options": [
      "calcium",
      "shallows",
      "larva",
      "freight"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The _____ passes close to a whale feeding area, so ships are asked to slow down during certain months.",
    "options": [
      "ballast water",
      "a fish out of water",
      "shipping lane",
      "sustainable fishing"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Workers on the _____ live at sea for weeks at a time, and they fly home by helicopter.",
    "options": [
      "oil spill",
      "oil rig",
      "ghost net",
      "tide pool"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Offshore _____ brings money to the region, but many residents worry about another oil spill.",
    "options": [
      "abundance",
      "practitioner",
      "seaweed",
      "drilling"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The sea floor contains many valuable _____, but mining them could destroy habitats that we barely understand.",
    "options": [
      "licence",
      "mineral",
      "vision",
      "surplus"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Each metal _____ on the sea floor took millions of years to form, so mining companies cannot simply wait for more.",
    "options": [
      "phytoplankton",
      "lighthouse",
      "nodule",
      "atoll"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Taiwan is surrounded by the sea, so _____ could become an important source of clean energy in the future.",
    "options": [
      "wave power",
      "dead zone",
      "sea urchin",
      "a fish out of water"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The waters near Penghu are a rich _____, and fishermen there have caught squid for generations.",
    "options": [
      "sea turtle",
      "salt marsh",
      "fishing ground",
      "sea cucumber"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Most countries have banned _____, but a few still hunt whales and say it is part of their culture.",
    "options": [
      "carcass",
      "submersible",
      "resurgence",
      "whaling"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "In the past, hunters threw a _____ by hand, but modern whaling ships use guns that fire them.",
    "options": [
      "runoff",
      "harpoon",
      "voyage",
      "dearth"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "We used small pieces of squid as _____, and within ten minutes my sister caught her first fish.",
    "options": [
      "bait",
      "shellfish",
      "tentacle",
      "depth"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "If we continue to _____ the sea, there may be almost no large fish left by the end of this century.",
    "options": [
      "uphold",
      "illuminate",
      "overexploit",
      "divert"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Each _____ takes years to grow inside an oyster, so natural ones are rare and very expensive.",
    "options": [
      "packaging",
      "pearl",
      "discourse",
      "amenity"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The _____ rescued five fishermen after their boat sank, and they also arrested a ship that was fishing illegally.",
    "options": [
      "breakthrough",
      "remedy",
      "surface",
      "coastguard"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The country's fishing _____ has grown to over 2,000 boats, so experts worry that fish cannot reproduce fast enough.",
    "options": [
      "fleet",
      "catalyst",
      "peninsula",
      "octopus"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "An old _____ was stuck on the reef, and the divers spent an hour cutting it free.",
    "options": [
      "garbage patch",
      "fishing net",
      "tide pool",
      "rip current"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "fishery": {
    "pos": "n.",
    "en_def": "an area or business where fish are caught",
    "cn_def": "漁場;漁業"
  },
  "fisherman": {
    "pos": "n.",
    "en_def": "a person who catches fish as a job",
    "cn_def": "漁夫;漁民"
  },
  "trawler": {
    "pos": "n.",
    "en_def": "a large fishing boat that pulls a big net",
    "cn_def": "拖網漁船"
  },
  "trawl": {
    "pos": "v.",
    "en_def": "to catch fish by pulling a large net through the water",
    "cn_def": "拖網捕魚"
  },
  "longline": {
    "pos": "n.",
    "en_def": "a very long fishing line with thousands of hooks",
    "cn_def": "延繩釣"
  },
  "catch": {
    "pos": "v.",
    "en_def": "to get hold of a fish or animal",
    "cn_def": "捕捉;抓到"
  },
  "caught": {
    "pos": "v.",
    "en_def": "to get hold of a fish or animal",
    "cn_def": "捕捉;抓到"
  },
  "fish stock": {
    "pos": "n.phr.",
    "en_def": "the amount of fish of one kind in an area",
    "cn_def": "魚類資源;魚群存量"
  },
  "aquaculture": {
    "pos": "n.",
    "en_def": "the farming of fish and other sea creatures",
    "cn_def": "水產養殖"
  },
  "fish farm": {
    "pos": "n.phr.",
    "en_def": "a place where fish are raised for food",
    "cn_def": "養魚場"
  },
  "seafood": {
    "pos": "n.",
    "en_def": "fish and shellfish eaten as food",
    "cn_def": "海鮮"
  },
  "tuna": {
    "pos": "n.",
    "en_def": "a large sea fish often eaten in sushi or from cans",
    "cn_def": "鮪魚"
  },
  "salmon": {
    "pos": "n.",
    "en_def": "a fish with pink flesh that swims from the sea up rivers to lay eggs",
    "cn_def": "鮭魚"
  },
  "shrimp": {
    "pos": "n.",
    "en_def": "a small sea animal with a shell that people eat",
    "cn_def": "蝦子"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or city with a harbour where ships load and unload",
    "cn_def": "港口;港市"
  },
  "cargo": {
    "pos": "n.",
    "en_def": "goods carried by a ship, plane or truck",
    "cn_def": "貨物"
  },
  "container ship": {
    "pos": "n.phr.",
    "en_def": "a large ship that carries goods in big metal boxes",
    "cn_def": "貨櫃船"
  },
  "tanker": {
    "pos": "n.",
    "en_def": "a ship that carries oil or other liquids",
    "cn_def": "油輪"
  },
  "freight": {
    "pos": "n.",
    "en_def": "goods carried by ship, train or plane",
    "cn_def": "貨運;貨物"
  },
  "shipping lane": {
    "pos": "n.phr.",
    "en_def": "a regular route used by ships at sea",
    "cn_def": "航道"
  },
  "oil rig": {
    "pos": "n.phr.",
    "en_def": "a large structure used to get oil from under the sea",
    "cn_def": "鑽油平台"
  },
  "drilling": {
    "pos": "n.",
    "en_def": "making deep holes in the ground to find oil or gas",
    "cn_def": "鑽探"
  },
  "mineral": {
    "pos": "n.",
    "en_def": "a natural substance such as metal found in rock",
    "cn_def": "礦物"
  },
  "nodule": {
    "pos": "n.",
    "en_def": "a small round lump of mineral found on the sea floor",
    "cn_def": "結核(礦物團塊)"
  },
  "wave power": {
    "pos": "n.phr.",
    "en_def": "electricity made from the movement of sea waves",
    "cn_def": "波浪發電"
  },
  "fishing ground": {
    "pos": "n.phr.",
    "en_def": "an area of sea where many fish are caught",
    "cn_def": "漁場"
  },
  "whaling": {
    "pos": "n.",
    "en_def": "the hunting of whales",
    "cn_def": "捕鯨"
  },
  "harpoon": {
    "pos": "n.",
    "en_def": "a long spear used to hunt whales and large fish",
    "cn_def": "魚叉"
  },
  "bait": {
    "pos": "n.",
    "en_def": "food put on a hook or in a trap to catch fish or animals",
    "cn_def": "魚餌;誘餌"
  },
  "overexploit": {
    "pos": "v.",
    "en_def": "to use too much of a natural resource so it cannot recover",
    "cn_def": "過度開發;過度利用"
  },
  "pearl": {
    "pos": "n.",
    "en_def": "a small, shiny white ball that grows inside an oyster",
    "cn_def": "珍珠"
  },
  "coastguard": {
    "pos": "n.",
    "en_def": "the organisation that protects people and controls activity along the coast",
    "cn_def": "海巡;海岸巡防隊"
  },
  "fleet": {
    "pos": "n.",
    "en_def": "a group of ships that work together",
    "cn_def": "船隊"
  },
  "fishing net": {
    "pos": "n.phr.",
    "en_def": "a net used for catching fish",
    "cn_def": "漁網"
  },
  "sediment": {
    "pos": "n.",
    "en_def": "sand, mud and stones that settle at the bottom of water",
    "cn_def": "沉積物"
  },
  "wetsuit": {
    "pos": "n.",
    "en_def": "a tight rubber suit that keeps you warm in water",
    "cn_def": "潛水衣;防寒衣"
  },
  "vision": {
    "pos": "n.",
    "en_def": "an idea or hope about the future",
    "cn_def": "願景;遠見"
  },
  "pebble": {
    "pos": "n.",
    "en_def": "a small, smooth, round stone",
    "cn_def": "鵝卵石"
  },
  "lighthouse": {
    "pos": "n.",
    "en_def": "a tower with a bright light that warns ships of danger",
    "cn_def": "燈塔"
  },
  "seabed": {
    "pos": "n.",
    "en_def": "the ground at the bottom of the sea",
    "cn_def": "海床"
  },
  "seal": {
    "pos": "n.",
    "en_def": "a sea mammal with flippers that lives in cold places",
    "cn_def": "海豹"
  },
  "barnacle": {
    "pos": "n.",
    "en_def": "a small sea animal that sticks to rocks and ships",
    "cn_def": "藤壺"
  },
  "cove": {
    "pos": "n.",
    "en_def": "a small, sheltered bay",
    "cn_def": "小海灣"
  },
  "involve": {
    "pos": "v.",
    "en_def": "to include someone or something as a necessary part",
    "cn_def": "涉及;使參與"
  },
  "pinpoint": {
    "pos": "v.",
    "en_def": "to find or describe something exactly",
    "cn_def": "精確找出;準確指出"
  },
  "succumb": {
    "pos": "v.",
    "en_def": "to be unable to resist something",
    "cn_def": "屈服;不敵"
  },
  "pathogen": {
    "pos": "n.",
    "en_def": "a very small living thing that causes disease",
    "cn_def": "病原體"
  },
  "oceanography": {
    "pos": "n.",
    "en_def": "the scientific study of the ocean",
    "cn_def": "海洋學"
  },
  "configuration": {
    "pos": "n.",
    "en_def": "the way parts are arranged",
    "cn_def": "配置;結構"
  },
  "render": {
    "pos": "v.",
    "en_def": "to cause something to be in a certain condition",
    "cn_def": "使成為;使變得"
  },
  "evade": {
    "pos": "v.",
    "en_def": "to escape or avoid something",
    "cn_def": "躲避;逃避"
  },
  "dive": {
    "pos": "v.",
    "en_def": "to go under water, often with special equipment",
    "cn_def": "潛水"
  },
  "sustainable fishing": {
    "pos": "n.phr.",
    "en_def": "catching fish in a way that leaves enough to breed",
    "cn_def": "永續漁業"
  },
  "hydrothermal vent": {
    "pos": "n.phr.",
    "en_def": "a crack in the sea floor that lets out very hot water",
    "cn_def": "熱泉噴口"
  },
  "no-take zone": {
    "pos": "n.phr.",
    "en_def": "a sea area where all fishing and collecting are banned",
    "cn_def": "禁漁區"
  },
  "seahorse": {
    "pos": "n.",
    "en_def": "a small fish with a head shaped like a horse",
    "cn_def": "海馬"
  },
  "remedy": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "補救辦法;解決方法"
  },
  "abyss": {
    "pos": "n.",
    "en_def": "a very deep place that seems to have no bottom",
    "cn_def": "深淵"
  },
  "high seas": {
    "pos": "n.phr.",
    "en_def": "the open ocean that no country controls",
    "cn_def": "公海"
  },
  "a fish out of water": {
    "pos": "n.phr.",
    "en_def": "a person who feels uncomfortable in an unfamiliar situation",
    "cn_def": "如魚離水;不自在的人"
  },
  "water pressure": {
    "pos": "n.phr.",
    "en_def": "the force of water pushing on something",
    "cn_def": "水壓"
  },
  "voyage": {
    "pos": "n.",
    "en_def": "a long journey by sea",
    "cn_def": "航程;航行"
  },
  "seamount": {
    "pos": "n.",
    "en_def": "an underwater mountain that does not reach the surface",
    "cn_def": "海底山"
  },
  "larva": {
    "pos": "n.",
    "en_def": "a very young form of an animal before it changes into an adult",
    "cn_def": "幼體;幼蟲"
  },
  "harbour": {
    "pos": "n.",
    "en_def": "a sheltered area of water where ships can stay safely",
    "cn_def": "港口;港灣"
  },
  "runoff": {
    "pos": "n.",
    "en_def": "rain water that flows from land into rivers and the sea, carrying dirt and chemicals",
    "cn_def": "地表逕流"
  },
  "impetus": {
    "pos": "n.",
    "en_def": "something that encourages an activity to develop",
    "cn_def": "動力;推動力"
  },
  "seagrass": {
    "pos": "n.",
    "en_def": "grass-like plants that grow in shallow sea water",
    "cn_def": "海草床植物;海草"
  },
  "whale": {
    "pos": "n.",
    "en_def": "a very large sea mammal",
    "cn_def": "鯨魚"
  },
  "shell": {
    "pos": "n.",
    "en_def": "the hard outer cover of some animals",
    "cn_def": "殼;貝殼"
  },
  "strait": {
    "pos": "n.",
    "en_def": "a narrow area of sea that joins two larger seas",
    "cn_def": "海峽"
  },
  "seaweed": {
    "pos": "n.",
    "en_def": "a plant that grows in the sea",
    "cn_def": "海草;海藻"
  },
  "dune": {
    "pos": "n.",
    "en_def": "a hill of sand formed by the wind",
    "cn_def": "沙丘"
  },
  "polyp": {
    "pos": "n.",
    "en_def": "a tiny soft animal that builds coral",
    "cn_def": "珊瑚蟲;水螅體"
  },
  "constituent": {
    "pos": "n.",
    "en_def": "one of the parts that form something",
    "cn_def": "成分;組成部分"
  },
  "bay": {
    "pos": "n.",
    "en_def": "a part of the sea that curves into the land",
    "cn_def": "海灣"
  },
  "oil spill": {
    "pos": "n.phr.",
    "en_def": "an accident in which oil escapes into the sea",
    "cn_def": "漏油;油污外洩"
  },
  "salt marsh": {
    "pos": "n.phr.",
    "en_def": "wet coastal land covered with grass and flooded by the tide",
    "cn_def": "鹽沼"
  },
  "tide pool": {
    "pos": "n.phr.",
    "en_def": "a small pool of sea water left among rocks at low tide",
    "cn_def": "潮池"
  },
  "eutrophication": {
    "pos": "n.",
    "en_def": "too many nutrients in water, which causes plants to grow too much",
    "cn_def": "優養化"
  },
  "calcium": {
    "pos": "n.",
    "en_def": "a chemical element found in bones, shells and coral",
    "cn_def": "鈣"
  },
  "shallows": {
    "pos": "n.",
    "en_def": "an area of shallow water",
    "cn_def": "淺灘;淺水區"
  },
  "ballast water": {
    "pos": "n.phr.",
    "en_def": "sea water carried in a ship to keep it steady",
    "cn_def": "壓艙水"
  },
  "ghost net": {
    "pos": "n.phr.",
    "en_def": "a fishing net that has been lost or left in the sea",
    "cn_def": "幽靈漁網"
  },
  "abundance": {
    "pos": "n.",
    "en_def": "a very large amount of something",
    "cn_def": "豐富;大量"
  },
  "practitioner": {
    "pos": "n.",
    "en_def": "a person who works in a skilled job",
    "cn_def": "從業人員;實踐者"
  },
  "licence": {
    "pos": "n.",
    "en_def": "an official document that allows you to do something",
    "cn_def": "執照;許可證"
  },
  "surplus": {
    "pos": "n.",
    "en_def": "an amount that is more than needed",
    "cn_def": "過剩;剩餘"
  },
  "phytoplankton": {
    "pos": "n.",
    "en_def": "tiny plants that float in the sea and use sunlight",
    "cn_def": "浮游植物"
  },
  "atoll": {
    "pos": "n.",
    "en_def": "a ring-shaped coral island around a lagoon",
    "cn_def": "環礁"
  },
  "dead zone": {
    "pos": "n.phr.",
    "en_def": "an area of sea with too little oxygen for most life",
    "cn_def": "死區;缺氧區"
  },
  "sea urchin": {
    "pos": "n.phr.",
    "en_def": "a small round sea animal covered in sharp spines",
    "cn_def": "海膽"
  },
  "sea turtle": {
    "pos": "n.phr.",
    "en_def": "a large turtle that lives in the ocean",
    "cn_def": "海龜"
  },
  "sea cucumber": {
    "pos": "n.phr.",
    "en_def": "a soft sea animal shaped like a cucumber that lives on the sea floor",
    "cn_def": "海參"
  },
  "carcass": {
    "pos": "n.",
    "en_def": "the dead body of an animal",
    "cn_def": "屍體(動物)"
  },
  "submersible": {
    "pos": "n.",
    "en_def": "a small underwater vehicle used for research",
    "cn_def": "深潛器"
  },
  "resurgence": {
    "pos": "n.",
    "en_def": "a return of something after a period of decline",
    "cn_def": "復甦;再度興起"
  },
  "dearth": {
    "pos": "n.",
    "en_def": "a lack of something",
    "cn_def": "缺乏;不足"
  },
  "shellfish": {
    "pos": "n.",
    "en_def": "sea animals with shells that people eat, like clams and shrimp",
    "cn_def": "貝類;有殼海鮮"
  },
  "tentacle": {
    "pos": "n.",
    "en_def": "a long, thin arm of an animal like an octopus or jellyfish",
    "cn_def": "觸手"
  },
  "depth": {
    "pos": "n.",
    "en_def": "how deep something is",
    "cn_def": "深度"
  },
  "uphold": {
    "pos": "v.",
    "en_def": "to support or defend a law or decision",
    "cn_def": "維護;支持"
  },
  "illuminate": {
    "pos": "v.",
    "en_def": "to make something clearer or easier to understand",
    "cn_def": "闡明;照亮"
  },
  "divert": {
    "pos": "v.",
    "en_def": "to change the direction of something",
    "cn_def": "使改道;轉移"
  },
  "packaging": {
    "pos": "n.",
    "en_def": "the materials used to wrap or protect goods",
    "cn_def": "包裝"
  },
  "discourse": {
    "pos": "n.",
    "en_def": "serious discussion about a subject",
    "cn_def": "論述;討論"
  },
  "amenity": {
    "pos": "n.",
    "en_def": "something that makes a place comfortable or easy to use",
    "cn_def": "便利設施"
  },
  "breakthrough": {
    "pos": "n.",
    "en_def": "an important new discovery",
    "cn_def": "突破"
  },
  "surface": {
    "pos": "n.",
    "en_def": "the top layer of water or land",
    "cn_def": "表面;水面"
  },
  "catalyst": {
    "pos": "n.",
    "en_def": "something that causes an important change",
    "cn_def": "催化劑;促成因素"
  },
  "peninsula": {
    "pos": "n.",
    "en_def": "land almost surrounded by water but joined to a larger area",
    "cn_def": "半島"
  },
  "octopus": {
    "pos": "n.",
    "en_def": "a sea animal with a soft body and eight arms",
    "cn_def": "章魚"
  },
  "garbage patch": {
    "pos": "n.phr.",
    "en_def": "a large area of the ocean where floating rubbish collects",
    "cn_def": "垃圾帶"
  },
  "rip current": {
    "pos": "n.phr.",
    "en_def": "a strong current that flows quickly away from the beach",
    "cn_def": "離岸流"
  }
};

const EXTRA_GLOSSES = {};
