// Topic 4 Subunit 2 Quiz Data: Marine Life 海洋生物
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T04 S02 - Marine Life 海洋生物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "plankton",
    "pos": "n.",
    "cn_def": "浮游生物",
    "en_def": "tiny plants and animals that float in the sea",
    "sentence": "Many large whales eat {{BLANK}}, although these tiny living things are almost too small to see.",
    "cn": "許多大型鯨魚以浮游生物為食,儘管這些微小的生物小到幾乎看不見。"
  },
  {
    "word": "phytoplankton",
    "pos": "n.",
    "cn_def": "浮游植物",
    "en_def": "tiny plants that float in the sea and use sunlight",
    "sentence": "{{BLANK}} produces a large part of the oxygen we breathe, so the health of the ocean matters to everyone.",
    "cn": "浮游植物製造了我們呼吸的大部分氧氣,所以海洋的健康對每個人都很重要。"
  },
  {
    "word": "zooplankton",
    "pos": "n.",
    "cn_def": "浮游動物",
    "en_def": "tiny animals that float in the sea",
    "sentence": "Small fish feed on {{BLANK}} at night, and then bigger fish come to hunt those small fish.",
    "cn": "小魚在夜間以浮游動物為食,然後更大的魚會來獵捕那些小魚。"
  },
  {
    "word": "krill",
    "pos": "n.",
    "cn_def": "磷蝦",
    "en_def": "small shrimp-like animals eaten by whales and penguins",
    "sentence": "Blue whales can eat four tonnes of {{BLANK}} a day, so they need huge areas of rich, cold water.",
    "cn": "藍鯨一天可以吃掉四噸的磷蝦,所以牠們需要廣大、豐富又寒冷的水域。"
  },
  {
    "word": "jellyfish",
    "pos": "n.",
    "cn_def": "水母",
    "en_def": "a soft sea animal with long parts that can sting",
    "sentence": "My sister was stung by a {{BLANK}} while she was swimming, so we put vinegar on her arm right away.",
    "cn": "我妹妹游泳時被水母螫到,所以我們立刻在她手臂上塗醋。"
  },
  {
    "word": "octopus",
    "pos": "n.",
    "cn_def": "章魚",
    "en_def": "a sea animal with a soft body and eight arms",
    "sentence": "The {{BLANK}} can change its colour in seconds, and it often hides between rocks to avoid hungry predators.",
    "cn": "章魚能在幾秒內改變顏色,而且牠常常躲在岩石之間躲避飢餓的掠食者。"
  },
  {
    "word": "squid",
    "pos": "n.",
    "cn_def": "魷魚",
    "en_def": "a sea animal with ten arms and a long body",
    "sentence": "Fishermen use bright lights at night to attract {{BLANK}}, and the boats look like floating stars from the shore.",
    "cn": "漁民在夜間使用明亮的燈光吸引魷魚,從岸邊看,那些船就像漂浮的星星。"
  },
  {
    "word": "crustacean",
    "pos": "n.",
    "cn_def": "甲殼類動物",
    "en_def": "an animal with a hard shell, such as a crab or shrimp",
    "sentence": "A crab is a {{BLANK}}, so it has a hard shell, and it must grow a new one as its body gets bigger.",
    "cn": "螃蟹是甲殼類動物,所以牠有堅硬的殼,而且當身體長大時必須長出新殼。"
  },
  {
    "word": "crab",
    "pos": "n.",
    "cn_def": "螃蟹",
    "en_def": "a sea animal with a shell, eight legs and two claws",
    "sentence": "The little {{BLANK}} walked sideways across the sand, and it quickly disappeared into a hole when we came closer.",
    "cn": "那隻小螃蟹橫著走過沙灘,我們靠近時牠迅速消失在一個洞裡。"
  },
  {
    "word": "lobster",
    "pos": "n.",
    "cn_def": "龍蝦",
    "en_def": "a large shellfish with big claws that people eat",
    "sentence": "{{BLANK}} is an expensive dish in many restaurants, but some people refuse to eat it because they worry about overfishing.",
    "cn": "龍蝦在許多餐廳是昂貴的菜餚,但有些人拒絕吃,因為他們擔心過度捕撈。"
  },
  {
    "word": "shellfish",
    "pos": "n.",
    "cn_def": "貝類;有殼海鮮",
    "en_def": "sea animals with shells that people eat, like clams and shrimp",
    "sentence": "My uncle cannot eat {{BLANK}} because it makes his skin itchy, so he always orders fish instead.",
    "cn": "我叔叔不能吃有殼海鮮,因為那會讓他皮膚發癢,所以他總是改點魚。"
  },
  {
    "word": "mollusc",
    "pos": "n.",
    "cn_def": "軟體動物",
    "en_def": "a soft animal often with a shell, like a snail or octopus",
    "sentence": "An octopus is a {{BLANK}} without a shell, while a snail is one that carries its shell on its back.",
    "cn": "章魚是沒有殼的軟體動物,而蝸牛則是背著殼的軟體動物。"
  },
  {
    "word": "clam",
    "pos": "n.",
    "cn_def": "蛤蜊",
    "en_def": "a shellfish with two shells that close tightly",
    "sentence": "We dug {{BLANK}} out of the wet sand at low tide, and my grandmother cooked them in a delicious soup.",
    "cn": "我們在退潮時從濕沙裡挖出蛤蜊,而奶奶把牠們煮成美味的湯。"
  },
  {
    "word": "oyster",
    "pos": "n.",
    "cn_def": "牡蠣;蚵仔",
    "en_def": "a shellfish that can make pearls and is often eaten raw",
    "sentence": "Changhua is famous for its {{BLANK}} farms, and visitors love to try the local oyster omelettes.",
    "cn": "彰化以牡蠣養殖場聞名,而遊客喜歡品嚐當地的蚵仔煎。"
  },
  {
    "word": "sea urchin",
    "pos": "n.phr.",
    "cn_def": "海膽",
    "en_def": "a small round sea animal covered in sharp spines",
    "sentence": "Wear shoes when you walk on the rocks, because a {{BLANK}} can hurt your feet badly with its sharp spines.",
    "cn": "在岩石上走路時要穿鞋,因為海膽會用牠尖銳的刺嚴重刺傷你的腳。"
  },
  {
    "word": "starfish",
    "pos": "n.",
    "cn_def": "海星",
    "en_def": "a flat sea animal shaped like a star",
    "sentence": "The children found a bright orange {{BLANK}} in a rock pool, but their teacher asked them to put it back gently.",
    "cn": "孩子們在潮池裡發現一隻鮮橘色的海星,但老師請他們輕輕地把牠放回去。"
  },
  {
    "word": "sponge",
    "pos": "n.",
    "cn_def": "海綿",
    "en_def": "a simple sea animal with a body full of holes",
    "sentence": "A {{BLANK}} looks like a plant, but it is actually an animal that filters food from the water.",
    "cn": "海綿看起來像植物,但牠其實是從水中過濾食物的動物。"
  },
  {
    "word": "seahorse",
    "pos": "n.",
    "cn_def": "海馬",
    "en_def": "a small fish with a head shaped like a horse",
    "sentence": "The male {{BLANK}} carries the babies in a pouch, and this makes it very unusual in the animal world.",
    "cn": "雄海馬把寶寶放在育兒袋中,這讓牠在動物界中非常特別。"
  },
  {
    "word": "shark",
    "pos": "n.",
    "cn_def": "鯊魚",
    "en_def": "a large fish with sharp teeth",
    "sentence": "Many people fear the {{BLANK}}, but it rarely attacks humans, and millions are killed every year for their fins.",
    "cn": "許多人害怕鯊魚,但牠很少攻擊人類,而且每年有數百萬隻因為魚鰭而被殺。"
  },
  {
    "word": "whale",
    "pos": "n.",
    "cn_def": "鯨魚",
    "en_def": "a very large sea mammal",
    "sentence": "We took a boat trip from Hualien to see a {{BLANK}}, and we were lucky enough to watch one jump out of the water.",
    "cn": "我們從花蓮搭船出海去看鯨魚,而且很幸運地看到一隻躍出水面。"
  },
  {
    "word": "dolphin",
    "pos": "n.",
    "cn_def": "海豚",
    "en_def": "an intelligent sea mammal with a long nose",
    "sentence": "A group of {{BLANK}} swam next to our boat, and they seemed to enjoy playing in the waves.",
    "cn": "一群海豚在我們的船旁邊游泳,牠們似乎很享受在浪中嬉戲。"
  },
  {
    "word": "seal",
    "pos": "n.",
    "cn_def": "海豹",
    "en_def": "a sea mammal with flippers that lives in cold places",
    "sentence": "A {{BLANK}} was lying on the rocks in the sun, and it did not seem worried by the tourists taking photos.",
    "cn": "一隻海豹躺在岩石上曬太陽,而且牠似乎一點也不在意拍照的遊客。"
  },
  {
    "word": "sea turtle",
    "pos": "n.phr.",
    "cn_def": "海龜",
    "en_def": "a large turtle that lives in the ocean",
    "sentence": "A {{BLANK}} swam slowly past us while we were snorkelling off Xiaoliuqiu, and we kept a respectful distance.",
    "cn": "我們在小琉球外海浮潛時,一隻海龜慢慢游過我們身邊,我們保持了尊重的距離。"
  },
  {
    "word": "seabird",
    "pos": "n.",
    "cn_def": "海鳥",
    "en_def": "a bird that lives near the sea and eats fish",
    "sentence": "The {{BLANK}} dived into the water to catch a fish, but it accidentally swallowed a piece of plastic too.",
    "cn": "那隻海鳥衝進水裡抓魚,但牠也不小心吞下了一片塑膠。"
  },
  {
    "word": "penguin",
    "pos": "n.",
    "cn_def": "企鵝",
    "en_def": "a black and white sea bird that cannot fly but swims well",
    "sentence": "A {{BLANK}} cannot fly, but it is an excellent swimmer, so it can catch fish easily under the ice.",
    "cn": "企鵝不會飛,但牠是很棒的游泳者,所以能輕鬆地在冰下捕魚。"
  },
  {
    "word": "gill",
    "pos": "n.",
    "cn_def": "鰓",
    "en_def": "the part of a fish used for breathing in water",
    "sentence": "Fish breathe through their {{BLANK}}, so they can take oxygen from the water but cannot live in the air.",
    "cn": "魚透過鰓呼吸,所以牠們能從水中取得氧氣,但無法在空氣中存活。"
  },
  {
    "word": "fin",
    "pos": "n.",
    "cn_def": "鰭",
    "en_def": "a thin flat part of a fish that helps it swim",
    "sentence": "We saw a dark {{BLANK}} above the water and thought it was a shark, but it turned out to be a friendly dolphin.",
    "cn": "我們看到水面上有一個深色的鰭,以為是鯊魚,但結果是一隻友善的海豚。"
  },
  {
    "word": "tentacle",
    "pos": "n.",
    "cn_def": "觸手",
    "en_def": "a long, thin arm of an animal like an octopus or jellyfish",
    "sentence": "The jellyfish's {{BLANK}} can be several metres long, so swimmers may be stung without even seeing it.",
    "cn": "水母的觸手可能長達好幾公尺,所以泳客甚至沒看到牠就可能被螫。"
  },
  {
    "word": "shell",
    "pos": "n.",
    "cn_def": "殼;貝殼",
    "en_def": "the hard outer cover of some animals",
    "sentence": "My little brother collected a beautiful {{BLANK}} from the beach, but I reminded him that some crabs need them as homes.",
    "cn": "我弟弟從海灘撿了一個美麗的貝殼,但我提醒他有些螃蟹需要它們當家。"
  },
  {
    "word": "blubber",
    "pos": "n.",
    "cn_def": "鯨脂;脂肪層",
    "en_def": "the thick layer of fat under the skin of whales and seals",
    "sentence": "Seals have a thick layer of {{BLANK}} under their skin, so they can stay warm in icy water.",
    "cn": "海豹皮膚下有一層厚厚的脂肪層,所以牠們能在冰冷的水中保暖。"
  },
  {
    "word": "school",
    "pos": "n.",
    "cn_def": "魚群",
    "en_def": "a large group of fish swimming together",
    "sentence": "A huge {{BLANK}} of silver fish moved together like one animal, and it quickly changed direction when a shark appeared.",
    "cn": "一大群銀色的魚群像一隻動物般一起移動,而且當鯊魚出現時迅速改變方向。"
  },
  {
    "word": "filter feeder",
    "pos": "n.phr.",
    "cn_def": "濾食動物",
    "en_def": "an animal that eats by straining tiny food from water",
    "sentence": "The whale shark is a {{BLANK}}, so although it is huge, it only eats tiny plankton and small fish.",
    "cn": "鯨鯊是濾食動物,所以雖然牠很巨大,但只吃微小的浮游生物和小魚。"
  },
  {
    "word": "bioluminescent",
    "pos": "adj.",
    "cn_def": "生物發光的",
    "en_def": "able to produce its own light",
    "sentence": "The waves glowed blue at night because of {{BLANK}} plankton, and tourists came from far away to see it.",
    "cn": "因為會發光的浮游生物,海浪在夜裡發出藍光,遊客從遠方前來觀賞。"
  },
  {
    "word": "aquatic",
    "pos": "adj.",
    "cn_def": "水生的",
    "en_def": "living or growing in water",
    "sentence": "Frogs begin life as {{BLANK}} animals, but adult frogs can live on land as well as in water.",
    "cn": "青蛙一開始是水生動物,但成蛙既能在水中也能在陸地上生活。"
  }
];

const MCQS = [
  {
    "q": "Many large whales eat _____, although these tiny living things are almost too small to see.",
    "options": [
      "disparity",
      "surface",
      "plankton",
      "vision"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "_____ produces a large part of the oxygen we breathe, so the health of the ocean matters to everyone.",
    "options": [
      "impetus",
      "phytoplankton",
      "trench",
      "voyage"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Small fish feed on _____ at night, and then bigger fish come to hunt those small fish.",
    "options": [
      "zooplankton",
      "counterpart",
      "inventory",
      "toxin"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Blue whales can eat four tonnes of _____ a day, so they need huge areas of rich, cold water.",
    "options": [
      "navigation",
      "submersible",
      "predicament",
      "krill"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "My sister was stung by a _____ while she was swimming, so we put vinegar on her arm right away.",
    "options": [
      "expertise",
      "jellyfish",
      "salmon",
      "compass"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The _____ can change its colour in seconds, and it often hides between rocks to avoid hungry predators.",
    "options": [
      "apparatus",
      "clownfish",
      "octopus",
      "inventory"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Fishermen use bright lights at night to attract _____, and the boats look like floating stars from the shore.",
    "options": [
      "squid",
      "abundance",
      "port",
      "buoy"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A crab is a _____, so it has a hard shell, and it must grow a new one as its body gets bigger.",
    "options": [
      "facet",
      "tsunami",
      "pathogen",
      "crustacean"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The little _____ walked sideways across the sand, and it quickly disappeared into a hole when we came closer.",
    "options": [
      "sandbar",
      "crab",
      "expertise",
      "runoff"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "_____ is an expensive dish in many restaurants, but some people refuse to eat it because they worry about overfishing.",
    "options": [
      "lobster",
      "practitioner",
      "runoff",
      "fishery"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "My uncle cannot eat _____ because it makes his skin itchy, so he always orders fish instead.",
    "options": [
      "drilling",
      "strait",
      "shellfish",
      "straw"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "An octopus is a _____ without a shell, while a snail is one that carries its shell on its back.",
    "options": [
      "pearl",
      "swell",
      "momentum",
      "mollusc"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "We dug _____ out of the wet sand at low tide, and my grandmother cooked them in a delicious soup.",
    "options": [
      "disparity",
      "expertise",
      "clam",
      "trench"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Changhua is famous for its _____ farms, and visitors love to try the local oyster omelettes.",
    "options": [
      "momentum",
      "autonomy",
      "shoreline",
      "oyster"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Wear shoes when you walk on the rocks, because a _____ can hurt your feet badly with its sharp spines.",
    "options": [
      "fishing net",
      "sea urchin",
      "rip current",
      "ghost net"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The children found a bright orange _____ in a rock pool, but their teacher asked them to put it back gently.",
    "options": [
      "starfish",
      "pearl",
      "fallacy",
      "counterpart"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "A _____ looks like a plant, but it is actually an animal that filters food from the water.",
    "options": [
      "port",
      "sponge",
      "aquaculture",
      "fisherman"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The male _____ carries the babies in a pouch, and this makes it very unusual in the animal world.",
    "options": [
      "mode",
      "mineral",
      "seahorse",
      "medium"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Many people fear the _____, but it rarely attacks humans, and millions are killed every year for their fins.",
    "options": [
      "bait",
      "gulf",
      "efficacy",
      "shark"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "We took a boat trip from Hualien to see a _____, and we were lucky enough to watch one jump out of the water.",
    "options": [
      "whale",
      "carcass",
      "trawler",
      "apparatus"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "A group of _____ swam next to our boat, and they seemed to enjoy playing in the waves.",
    "options": [
      "diver",
      "cliff",
      "momentum",
      "dolphin"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A _____ was lying on the rocks in the sun, and it did not seem worried by the tourists taking photos.",
    "options": [
      "seal",
      "shortfall",
      "sonar",
      "remedy"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A _____ swam slowly past us while we were snorkelling off Xiaoliuqiu, and we kept a respectful distance.",
    "options": [
      "rip current",
      "garbage patch",
      "sea turtle",
      "wave power"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The _____ dived into the water to catch a fish, but it accidentally swallowed a piece of plastic too.",
    "options": [
      "whaling",
      "seabird",
      "port",
      "explorer"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "A _____ cannot fly, but it is an excellent swimmer, so it can catch fish easily under the ice.",
    "options": [
      "licence",
      "gyre",
      "configuration",
      "penguin"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Fish breathe through their _____, so they can take oxygen from the water but cannot live in the air.",
    "options": [
      "pearl",
      "freight",
      "gill",
      "advent"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "We saw a dark _____ above the water and thought it was a shark, but it turned out to be a friendly dolphin.",
    "options": [
      "hull",
      "fin",
      "skeleton",
      "inlet"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The jellyfish's _____ can be several metres long, so swimmers may be stung without even seeing it.",
    "options": [
      "tentacle",
      "vision",
      "calcium",
      "shore"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "My little brother collected a beautiful _____ from the beach, but I reminded him that some crabs need them as homes.",
    "options": [
      "wetsuit",
      "fishery",
      "shell",
      "diver"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Seals have a thick layer of _____ under their skin, so they can stay warm in icy water.",
    "options": [
      "lighthouse",
      "blubber",
      "cove",
      "diver"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "A huge _____ of silver fish moved together like one animal, and it quickly changed direction when a shark appeared.",
    "options": [
      "lifeguard",
      "archipelago",
      "toxin",
      "school"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The whale shark is a _____, so although it is huge, it only eats tiny plankton and small fish.",
    "options": [
      "filter feeder",
      "sea cucumber",
      "a fish out of water",
      "scuba diving"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The waves glowed blue at night because of _____ plankton, and tourists came from far away to see it.",
    "options": [
      "homogeneous",
      "conscientious",
      "bioluminescent",
      "invaluable"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Frogs begin life as _____ animals, but adult frogs can live on land as well as in water.",
    "options": [
      "impending",
      "extensive",
      "appreciable",
      "aquatic"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "plankton": {
    "pos": "n.",
    "en_def": "tiny plants and animals that float in the sea",
    "cn_def": "浮游生物"
  },
  "phytoplankton": {
    "pos": "n.",
    "en_def": "tiny plants that float in the sea and use sunlight",
    "cn_def": "浮游植物"
  },
  "zooplankton": {
    "pos": "n.",
    "en_def": "tiny animals that float in the sea",
    "cn_def": "浮游動物"
  },
  "krill": {
    "pos": "n.",
    "en_def": "small shrimp-like animals eaten by whales and penguins",
    "cn_def": "磷蝦"
  },
  "jellyfish": {
    "pos": "n.",
    "en_def": "a soft sea animal with long parts that can sting",
    "cn_def": "水母"
  },
  "octopus": {
    "pos": "n.",
    "en_def": "a sea animal with a soft body and eight arms",
    "cn_def": "章魚"
  },
  "squid": {
    "pos": "n.",
    "en_def": "a sea animal with ten arms and a long body",
    "cn_def": "魷魚"
  },
  "crustacean": {
    "pos": "n.",
    "en_def": "an animal with a hard shell, such as a crab or shrimp",
    "cn_def": "甲殼類動物"
  },
  "crab": {
    "pos": "n.",
    "en_def": "a sea animal with a shell, eight legs and two claws",
    "cn_def": "螃蟹"
  },
  "lobster": {
    "pos": "n.",
    "en_def": "a large shellfish with big claws that people eat",
    "cn_def": "龍蝦"
  },
  "shellfish": {
    "pos": "n.",
    "en_def": "sea animals with shells that people eat, like clams and shrimp",
    "cn_def": "貝類;有殼海鮮"
  },
  "mollusc": {
    "pos": "n.",
    "en_def": "a soft animal often with a shell, like a snail or octopus",
    "cn_def": "軟體動物"
  },
  "clam": {
    "pos": "n.",
    "en_def": "a shellfish with two shells that close tightly",
    "cn_def": "蛤蜊"
  },
  "oyster": {
    "pos": "n.",
    "en_def": "a shellfish that can make pearls and is often eaten raw",
    "cn_def": "牡蠣;蚵仔"
  },
  "sea urchin": {
    "pos": "n.phr.",
    "en_def": "a small round sea animal covered in sharp spines",
    "cn_def": "海膽"
  },
  "starfish": {
    "pos": "n.",
    "en_def": "a flat sea animal shaped like a star",
    "cn_def": "海星"
  },
  "sponge": {
    "pos": "n.",
    "en_def": "a simple sea animal with a body full of holes",
    "cn_def": "海綿"
  },
  "seahorse": {
    "pos": "n.",
    "en_def": "a small fish with a head shaped like a horse",
    "cn_def": "海馬"
  },
  "shark": {
    "pos": "n.",
    "en_def": "a large fish with sharp teeth",
    "cn_def": "鯊魚"
  },
  "whale": {
    "pos": "n.",
    "en_def": "a very large sea mammal",
    "cn_def": "鯨魚"
  },
  "dolphin": {
    "pos": "n.",
    "en_def": "an intelligent sea mammal with a long nose",
    "cn_def": "海豚"
  },
  "seal": {
    "pos": "n.",
    "en_def": "a sea mammal with flippers that lives in cold places",
    "cn_def": "海豹"
  },
  "sea turtle": {
    "pos": "n.phr.",
    "en_def": "a large turtle that lives in the ocean",
    "cn_def": "海龜"
  },
  "seabird": {
    "pos": "n.",
    "en_def": "a bird that lives near the sea and eats fish",
    "cn_def": "海鳥"
  },
  "penguin": {
    "pos": "n.",
    "en_def": "a black and white sea bird that cannot fly but swims well",
    "cn_def": "企鵝"
  },
  "gill": {
    "pos": "n.",
    "en_def": "the part of a fish used for breathing in water",
    "cn_def": "鰓"
  },
  "fin": {
    "pos": "n.",
    "en_def": "a thin flat part of a fish that helps it swim",
    "cn_def": "鰭"
  },
  "tentacle": {
    "pos": "n.",
    "en_def": "a long, thin arm of an animal like an octopus or jellyfish",
    "cn_def": "觸手"
  },
  "shell": {
    "pos": "n.",
    "en_def": "the hard outer cover of some animals",
    "cn_def": "殼;貝殼"
  },
  "blubber": {
    "pos": "n.",
    "en_def": "the thick layer of fat under the skin of whales and seals",
    "cn_def": "鯨脂;脂肪層"
  },
  "school": {
    "pos": "n.",
    "en_def": "a large group of fish swimming together",
    "cn_def": "魚群"
  },
  "filter feeder": {
    "pos": "n.phr.",
    "en_def": "an animal that eats by straining tiny food from water",
    "cn_def": "濾食動物"
  },
  "bioluminescent": {
    "pos": "adj.",
    "en_def": "able to produce its own light",
    "cn_def": "生物發光的"
  },
  "aquatic": {
    "pos": "adj.",
    "en_def": "living or growing in water",
    "cn_def": "水生的"
  },
  "disparity": {
    "pos": "n.",
    "en_def": "a large difference between things",
    "cn_def": "差異;懸殊"
  },
  "surface": {
    "pos": "n.",
    "en_def": "the top layer of water or land",
    "cn_def": "表面;水面"
  },
  "vision": {
    "pos": "n.",
    "en_def": "an idea or hope about the future",
    "cn_def": "願景;遠見"
  },
  "impetus": {
    "pos": "n.",
    "en_def": "something that encourages an activity to develop",
    "cn_def": "動力;推動力"
  },
  "trench": {
    "pos": "n.",
    "en_def": "a very deep, narrow valley in the ocean floor",
    "cn_def": "海溝"
  },
  "voyage": {
    "pos": "n.",
    "en_def": "a long journey by sea",
    "cn_def": "航程;航行"
  },
  "counterpart": {
    "pos": "n.",
    "en_def": "a person or thing with the same role in a different place",
    "cn_def": "對應的人或物;同行"
  },
  "inventory": {
    "pos": "n.",
    "en_def": "a complete list of things in a place",
    "cn_def": "清單;盤點"
  },
  "toxin": {
    "pos": "n.",
    "en_def": "a poisonous substance made by a living thing",
    "cn_def": "毒素"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the skill of planning and following a route",
    "cn_def": "導航;航海術"
  },
  "submersible": {
    "pos": "n.",
    "en_def": "a small underwater vehicle used for research",
    "cn_def": "深潛器"
  },
  "predicament": {
    "pos": "n.",
    "en_def": "a difficult situation",
    "cn_def": "困境"
  },
  "expertise": {
    "pos": "n.",
    "en_def": "special skill or knowledge",
    "cn_def": "專業知識;專長"
  },
  "salmon": {
    "pos": "n.",
    "en_def": "a fish with pink flesh that swims from the sea up rivers to lay eggs",
    "cn_def": "鮭魚"
  },
  "compass": {
    "pos": "n.",
    "en_def": "a tool with a needle that always points north",
    "cn_def": "指南針;羅盤"
  },
  "apparatus": {
    "pos": "n.",
    "en_def": "equipment used for a particular purpose",
    "cn_def": "儀器;設備"
  },
  "clownfish": {
    "pos": "n.",
    "en_def": "a small orange and white fish that lives in anemones",
    "cn_def": "小丑魚"
  },
  "abundance": {
    "pos": "n.",
    "en_def": "a very large amount of something",
    "cn_def": "豐富;大量"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or city with a harbour where ships load and unload",
    "cn_def": "港口;港市"
  },
  "buoy": {
    "pos": "n.",
    "en_def": "a floating object in the sea used as a marker or to measure things",
    "cn_def": "浮標"
  },
  "facet": {
    "pos": "n.",
    "en_def": "one part or side of something",
    "cn_def": "方面;面向"
  },
  "tsunami": {
    "pos": "n.",
    "en_def": "a very large wave caused by an earthquake under the sea",
    "cn_def": "海嘯"
  },
  "pathogen": {
    "pos": "n.",
    "en_def": "a very small living thing that causes disease",
    "cn_def": "病原體"
  },
  "sandbar": {
    "pos": "n.",
    "en_def": "a long pile of sand in the sea near the coast",
    "cn_def": "沙洲"
  },
  "runoff": {
    "pos": "n.",
    "en_def": "rain water that flows from land into rivers and the sea, carrying dirt and chemicals",
    "cn_def": "地表逕流"
  },
  "practitioner": {
    "pos": "n.",
    "en_def": "a person who works in a skilled job",
    "cn_def": "從業人員;實踐者"
  },
  "fishery": {
    "pos": "n.",
    "en_def": "an area or business where fish are caught",
    "cn_def": "漁場;漁業"
  },
  "drilling": {
    "pos": "n.",
    "en_def": "making deep holes in the ground to find oil or gas",
    "cn_def": "鑽探"
  },
  "strait": {
    "pos": "n.",
    "en_def": "a narrow area of sea that joins two larger seas",
    "cn_def": "海峽"
  },
  "straw": {
    "pos": "n.",
    "en_def": "a thin tube used for drinking",
    "cn_def": "吸管"
  },
  "pearl": {
    "pos": "n.",
    "en_def": "a small, shiny white ball that grows inside an oyster",
    "cn_def": "珍珠"
  },
  "swell": {
    "pos": "n.",
    "en_def": "long, smooth waves caused by distant winds",
    "cn_def": "湧浪"
  },
  "momentum": {
    "pos": "n.",
    "en_def": "the force that keeps something moving or developing",
    "cn_def": "動力;氣勢"
  },
  "autonomy": {
    "pos": "n.",
    "en_def": "the freedom to make your own decisions",
    "cn_def": "自主權"
  },
  "shoreline": {
    "pos": "n.",
    "en_def": "the edge of the sea where it meets the land",
    "cn_def": "海岸線"
  },
  "fishing net": {
    "pos": "n.phr.",
    "en_def": "a net used for catching fish",
    "cn_def": "漁網"
  },
  "rip current": {
    "pos": "n.phr.",
    "en_def": "a strong current that flows quickly away from the beach",
    "cn_def": "離岸流"
  },
  "ghost net": {
    "pos": "n.phr.",
    "en_def": "a fishing net that has been lost or left in the sea",
    "cn_def": "幽靈漁網"
  },
  "fallacy": {
    "pos": "n.",
    "en_def": "a false idea that many people believe",
    "cn_def": "謬誤;錯誤觀念"
  },
  "aquaculture": {
    "pos": "n.",
    "en_def": "the farming of fish and other sea creatures",
    "cn_def": "水產養殖"
  },
  "fisherman": {
    "pos": "n.",
    "en_def": "a person who catches fish as a job",
    "cn_def": "漁夫;漁民"
  },
  "mode": {
    "pos": "n.",
    "en_def": "a particular way of doing something",
    "cn_def": "方式;模式"
  },
  "mineral": {
    "pos": "n.",
    "en_def": "a natural substance such as metal found in rock",
    "cn_def": "礦物"
  },
  "medium": {
    "pos": "n.",
    "en_def": "a way of communicating or expressing something",
    "cn_def": "媒介;媒體"
  },
  "bait": {
    "pos": "n.",
    "en_def": "food put on a hook or in a trap to catch fish or animals",
    "cn_def": "魚餌;誘餌"
  },
  "gulf": {
    "pos": "n.",
    "en_def": "a large area of sea mostly surrounded by land",
    "cn_def": "海灣(大型)"
  },
  "efficacy": {
    "pos": "n.",
    "en_def": "the ability to produce the result you want",
    "cn_def": "效力;功效"
  },
  "carcass": {
    "pos": "n.",
    "en_def": "the dead body of an animal",
    "cn_def": "屍體(動物)"
  },
  "trawler": {
    "pos": "n.",
    "en_def": "a large fishing boat that pulls a big net",
    "cn_def": "拖網漁船"
  },
  "diver": {
    "pos": "n.",
    "en_def": "a person who swims underwater, often for work or sport",
    "cn_def": "潛水員"
  },
  "cliff": {
    "pos": "n.",
    "en_def": "a high, steep rock face, often by the sea",
    "cn_def": "懸崖;峭壁"
  },
  "shortfall": {
    "pos": "n.",
    "en_def": "an amount that is less than needed",
    "cn_def": "短缺;不足"
  },
  "sonar": {
    "pos": "n.",
    "en_def": "a system that uses sound to find objects underwater",
    "cn_def": "聲納"
  },
  "remedy": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "補救辦法;解決方法"
  },
  "garbage patch": {
    "pos": "n.phr.",
    "en_def": "a large area of the ocean where floating rubbish collects",
    "cn_def": "垃圾帶"
  },
  "wave power": {
    "pos": "n.phr.",
    "en_def": "electricity made from the movement of sea waves",
    "cn_def": "波浪發電"
  },
  "whaling": {
    "pos": "n.",
    "en_def": "the hunting of whales",
    "cn_def": "捕鯨"
  },
  "explorer": {
    "pos": "n.",
    "en_def": "a person who travels to unknown places to learn about them",
    "cn_def": "探險家"
  },
  "licence": {
    "pos": "n.",
    "en_def": "an official document that allows you to do something",
    "cn_def": "執照;許可證"
  },
  "gyre": {
    "pos": "n.",
    "en_def": "a large system of circular ocean currents",
    "cn_def": "環流"
  },
  "configuration": {
    "pos": "n.",
    "en_def": "the way parts are arranged",
    "cn_def": "配置;結構"
  },
  "freight": {
    "pos": "n.",
    "en_def": "goods carried by ship, train or plane",
    "cn_def": "貨運;貨物"
  },
  "advent": {
    "pos": "n.",
    "en_def": "the arrival or beginning of something important",
    "cn_def": "出現;到來"
  },
  "hull": {
    "pos": "n.",
    "en_def": "the main body of a ship",
    "cn_def": "船身;船體"
  },
  "skeleton": {
    "pos": "n.",
    "en_def": "the hard structure that supports a body",
    "cn_def": "骨骼"
  },
  "inlet": {
    "pos": "n.",
    "en_def": "a narrow area of water that goes into the land from the sea",
    "cn_def": "小海灣;水灣"
  },
  "calcium": {
    "pos": "n.",
    "en_def": "a chemical element found in bones, shells and coral",
    "cn_def": "鈣"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of the sea",
    "cn_def": "岸邊;海岸"
  },
  "wetsuit": {
    "pos": "n.",
    "en_def": "a tight rubber suit that keeps you warm in water",
    "cn_def": "潛水衣;防寒衣"
  },
  "lighthouse": {
    "pos": "n.",
    "en_def": "a tower with a bright light that warns ships of danger",
    "cn_def": "燈塔"
  },
  "cove": {
    "pos": "n.",
    "en_def": "a small, sheltered bay",
    "cn_def": "小海灣"
  },
  "lifeguard": {
    "pos": "n.",
    "en_def": "a person whose job is to watch and rescue swimmers",
    "cn_def": "救生員"
  },
  "archipelago": {
    "pos": "n.",
    "en_def": "a group of many islands",
    "cn_def": "群島"
  },
  "sea cucumber": {
    "pos": "n.phr.",
    "en_def": "a soft sea animal shaped like a cucumber that lives on the sea floor",
    "cn_def": "海參"
  },
  "a fish out of water": {
    "pos": "n.phr.",
    "en_def": "a person who feels uncomfortable in an unfamiliar situation",
    "cn_def": "如魚離水;不自在的人"
  },
  "scuba diving": {
    "pos": "n.phr.",
    "en_def": "swimming deep underwater with an air tank",
    "cn_def": "水肺潛水"
  },
  "homogeneous": {
    "pos": "adj.",
    "en_def": "made of parts that are all the same",
    "cn_def": "同質的;均勻的"
  },
  "conscientious": {
    "pos": "adj.",
    "en_def": "careful to do things well and correctly",
    "cn_def": "認真的;盡責的"
  },
  "invaluable": {
    "pos": "adj.",
    "en_def": "extremely useful",
    "cn_def": "非常寶貴的"
  },
  "impending": {
    "pos": "adj.",
    "en_def": "about to happen, usually something bad",
    "cn_def": "即將發生的"
  },
  "extensive": {
    "pos": "adj.",
    "en_def": "covering a large area or including a lot",
    "cn_def": "廣泛的;大量的"
  },
  "appreciable": {
    "pos": "adj.",
    "en_def": "large enough to be noticed",
    "cn_def": "可觀的;明顯的"
  }
};

const EXTRA_GLOSSES = {};
