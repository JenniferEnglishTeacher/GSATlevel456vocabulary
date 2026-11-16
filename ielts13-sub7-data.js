// Topic 13 Subunit 7 Quiz Data: Social Life, Mating & Parenting 社會生活、求偶與育幼
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S07 - Social Life, Mating & Parenting 社會生活、求偶與育幼",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pack",
    "pos": "n.",
    "cn_def": "（狼）群",
    "en_def": "a group of wolves or wild dogs",
    "sentence": "A wolf {{BLANK}} hunts together, so they can catch animals much larger than any single wolf.",
    "cn": "一群狼會一起狩獵，所以牠們能捕捉比任何一隻狼都大得多的動物。"
  },
  {
    "word": "troop",
    "pos": "n.",
    "cn_def": "（猴）群",
    "en_def": "a group of monkeys",
    "sentence": "A {{BLANK}} of monkeys stole the tourists' snacks, and the guide warned us to keep our bags closed.",
    "cn": "一群猴子偷走了遊客的零食，而導遊警告我們要把包包關好。"
  },
  {
    "word": "pod",
    "pos": "n.",
    "cn_def": "（鯨豚）群",
    "en_def": "a group of whales or dolphins",
    "sentence": "We saw a {{BLANK}} of dolphins from the boat, and they jumped beside us for almost ten minutes.",
    "cn": "我們從船上看到一群海豚，而牠們在我們旁邊跳躍了將近十分鐘。"
  },
  {
    "word": "swarm",
    "pos": "n.",
    "cn_def": "（昆蟲）一大群",
    "en_def": "a large moving group of insects",
    "sentence": "A {{BLANK}} of bees landed on the school gate, so the teachers kept the students inside until it left.",
    "cn": "一大群蜜蜂停在學校大門上，所以老師們讓學生待在室內直到牠們離開。"
  },
  {
    "word": "hive",
    "pos": "n.",
    "cn_def": "蜂巢",
    "en_def": "a home where bees live together",
    "sentence": "Each {{BLANK}} has thousands of bees, but they all work together to collect food and protect the queen.",
    "cn": "每個蜂巢裡有數千隻蜜蜂，但牠們全都一起合作採集食物並保護蜂后。"
  },
  {
    "word": "queen bee",
    "pos": "n.phr.",
    "cn_def": "蜂后",
    "en_def": "the only female bee in a hive that lays eggs",
    "sentence": "The {{BLANK}} can lay over a thousand eggs a day, while the worker bees feed her and clean the hive.",
    "cn": "蜂后一天可以產下超過一千顆卵，而工蜂則餵養她並清潔蜂巢。"
  },
  {
    "word": "worker ant",
    "pos": "n.phr.",
    "cn_def": "工蟻",
    "en_def": "an ant that collects food and builds the nest",
    "sentence": "Each {{BLANK}} can carry objects much heavier than itself, so a small group can move a whole dead insect.",
    "cn": "每隻工蟻都能搬運比自己重得多的東西，所以一小群工蟻就能搬動一整隻死掉的昆蟲。"
  },
  {
    "word": "termite",
    "pos": "n.",
    "cn_def": "白蟻",
    "en_def": "a small insect that eats wood and lives in large groups",
    "sentence": "{{BLANK}} in Africa build huge mounds of soil, and the tunnels inside keep the air cool.",
    "cn": "非洲的白蟻會建造巨大的土丘，而裡面的通道讓空氣保持涼爽。"
  },
  {
    "word": "alpha male",
    "pos": "n.phr.",
    "cn_def": "首領雄性",
    "en_def": "the most powerful male in a group",
    "sentence": "The {{BLANK}} eats first after a hunt, but he must also protect the group from danger.",
    "cn": "首領雄性在狩獵後最先進食，但他也必須保護群體免受危險。"
  },
  {
    "word": "pecking order",
    "pos": "n.phr.",
    "cn_def": "啄序；等級次序",
    "en_def": "the order of rank within a group",
    "sentence": "The hens quickly formed a {{BLANK}}, and the strongest hen always got the best place at the food bowl.",
    "cn": "母雞們很快就形成了啄序，而最強壯的母雞總是在食盆旁佔到最好的位置。"
  },
  {
    "word": "grooming",
    "pos": "n.",
    "cn_def": "理毛",
    "en_def": "cleaning another animal's fur",
    "sentence": "Monkeys spend hours on {{BLANK}} each day, and this helps them build friendships within the group.",
    "cn": "猴子每天花好幾個小時理毛，而這幫助牠們在群體內建立友誼。"
  },
  {
    "word": "kin selection",
    "pos": "n.phr.",
    "cn_def": "親屬選擇",
    "en_def": "helping relatives so that shared genes survive",
    "sentence": "A bee may die to protect its hive, and scientists explain this with {{BLANK}}, because the other bees are its sisters.",
    "cn": "一隻蜜蜂可能會為了保護蜂巢而死，而科學家用親屬選擇來解釋這點，因為其他蜜蜂是牠的姊妹。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的",
    "en_def": "working together with others",
    "sentence": "Lions are {{BLANK}} hunters, so they often surround a zebra from different sides before they attack.",
    "cn": "獅子是合作的獵手，所以牠們常常在攻擊前從不同方向包圍一隻斑馬。"
  },
  {
    "word": "selfless",
    "pos": "adj.",
    "cn_def": "無私的",
    "en_def": "caring more about others than yourself",
    "sentence": "The mother bird made a {{BLANK}} move when she pretended to be hurt, and the fox followed her away from the chicks.",
    "cn": "母鳥假裝受傷，做出了無私的舉動，而狐狸跟著她離開了雛鳥。"
  },
  {
    "word": "freeloader",
    "pos": "n.",
    "cn_def": "搭便車者；白吃白喝者",
    "en_def": "someone who takes help but gives nothing back",
    "sentence": "In a vampire bat group, a {{BLANK}} who never shares blood is soon ignored, so the bats rarely cheat.",
    "cn": "在吸血蝠群體中，從不分享血液的搭便車者很快就會被冷落，所以蝙蝠很少作弊。"
  },
  {
    "word": "courtship",
    "pos": "n.",
    "cn_def": "求偶",
    "en_def": "actions an animal uses to attract a partner",
    "sentence": "The bird's {{BLANK}} includes singing and dancing, and the female watches carefully before she chooses.",
    "cn": "這種鳥的求偶包括唱歌和跳舞，而雌鳥在選擇之前會仔細觀察。"
  },
  {
    "word": "plumage",
    "pos": "n.",
    "cn_def": "羽毛",
    "en_def": "a bird's feathers",
    "sentence": "The male's bright {{BLANK}} attracts females, but it also makes him easier for hawks to see.",
    "cn": "雄鳥鮮豔的羽毛能吸引雌鳥，但也讓牠更容易被老鷹發現。"
  },
  {
    "word": "peacock",
    "pos": "n.",
    "cn_def": "雄孔雀",
    "en_def": "a male bird with a large, colourful tail",
    "sentence": "The {{BLANK}} spread his beautiful tail in the park, and a crowd of children gathered to take photos.",
    "cn": "那隻雄孔雀在公園裡展開牠美麗的尾巴，而一群孩子聚集過來拍照。"
  },
  {
    "word": "monogamous",
    "pos": "adj.",
    "cn_def": "一夫一妻制的",
    "en_def": "having only one partner",
    "sentence": "Swans are mostly {{BLANK}}, so a pair often stays together and raises chicks for many years.",
    "cn": "天鵝大多是一夫一妻制的，所以一對天鵝常常會在一起並養育雛鳥好多年。"
  },
  {
    "word": "pair bond",
    "pos": "n.phr.",
    "cn_def": "配偶關係",
    "en_def": "a strong long-term link between two partners",
    "sentence": "Penguins form a {{BLANK}} each season, and the parents call to each other to find their partner in the crowd.",
    "cn": "企鵝每個季節都會建立配偶關係，而父母會互相呼叫，以便在擁擠的群體中找到伴侶。"
  },
  {
    "word": "brood",
    "pos": "n.",
    "cn_def": "一窩幼鳥",
    "en_def": "a group of young birds born at the same time",
    "sentence": "The duck led her {{BLANK}} across the road, and the drivers stopped their cars to let them pass.",
    "cn": "那隻鴨子帶著她的一窩幼鳥過馬路，而駕駛們停下車讓牠們通過。"
  },
  {
    "word": "clutch",
    "pos": "n.",
    "cn_def": "一窩蛋",
    "en_def": "a group of eggs laid at one time",
    "sentence": "The turtle buried her {{BLANK}} of eggs in the warm sand, and then she returned to the sea.",
    "cn": "那隻海龜把她的一窩蛋埋在溫暖的沙子裡，然後回到海裡。"
  },
  {
    "word": "chick",
    "pos": "n.",
    "cn_def": "雛鳥；小雞",
    "en_def": "a baby bird",
    "sentence": "The hungry {{BLANK}} opened its mouth very wide, and its father pushed a small fish inside.",
    "cn": "那隻飢餓的雛鳥把嘴張得很大，而牠的爸爸把一條小魚塞了進去。"
  },
  {
    "word": "parental care",
    "pos": "n.phr.",
    "cn_def": "親代照顧",
    "en_def": "the ways parents look after their young",
    "sentence": "Most fish give little {{BLANK}}, but some male seahorses carry and protect the babies themselves.",
    "cn": "大多數魚類很少提供親代照顧，但有些雄海馬會親自攜帶和保護寶寶。"
  },
  {
    "word": "nurse",
    "pos": "v.",
    "cn_def": "哺乳",
    "en_def": "to feed a baby with milk from its mother",
    "sentence": "The mother cat {{BLANK}} her kittens every few hours, so she rarely leaves the box during the first week.",
    "cn": "母貓每隔幾個小時就哺乳她的小貓，所以她在第一週很少離開箱子。"
  },
  {
    "word": "vampire bat",
    "pos": "n.phr.",
    "cn_def": "吸血蝙蝠",
    "en_def": "a bat that feeds on the blood of animals",
    "sentence": "A hungry {{BLANK}} can die after two nights without food, so friends share their meals to keep each other alive.",
    "cn": "一隻飢餓的吸血蝙蝠兩晚沒有進食就可能死亡，所以朋友之間會分享食物讓彼此活下去。"
  },
  {
    "word": "meerkat",
    "pos": "n.",
    "cn_def": "狐獴",
    "en_def": "a small African animal that stands on its back legs",
    "sentence": "One {{BLANK}} stands on a rock to watch for eagles, while the others dig for insects in the sand.",
    "cn": "一隻狐獴站在岩石上留意老鷹，而其他狐獴在沙地裡挖昆蟲。"
  },
  {
    "word": "lookout",
    "pos": "n.",
    "cn_def": "守望者；哨兵",
    "en_def": "an animal or person who watches for danger",
    "sentence": "The goose that acts as a {{BLANK}} keeps its head up, and it honks loudly if a dog comes near.",
    "cn": "擔任守望者的那隻鵝會抬著頭，而如果有狗靠近牠就會大聲鳴叫。"
  },
  {
    "word": "matriarch",
    "pos": "n.",
    "cn_def": "女族長",
    "en_def": "an old female who leads a family group",
    "sentence": "The elephant {{BLANK}} remembers where water can be found, so the group follows her during dry seasons.",
    "cn": "象群的女族長記得哪裡可以找到水，所以群體在乾季會跟隨她。"
  },
  {
    "word": "division of labour",
    "pos": "n.phr.",
    "cn_def": "分工",
    "en_def": "splitting work so each member does a different job",
    "sentence": "Ant colonies have a clear {{BLANK}}, because some ants find food while others care for the young.",
    "cn": "蟻群有明確的分工，因為有些螞蟻尋找食物，而其他螞蟻照顧幼蟲。"
  }
];

const MCQS = [
  {
    "q": "A wolf _____ hunts together, so they can catch animals much larger than any single wolf.",
    "options": [
      "carrier",
      "pack",
      "mitochondria",
      "inclusion"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "A _____ of monkeys stole the tourists' snacks, and the guide warned us to keep our bags closed.",
    "options": [
      "Neanderthal",
      "repertoire",
      "inbreeding",
      "troop"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "We saw a _____ of dolphins from the boat, and they jumped beside us for almost ten minutes.",
    "options": [
      "pod",
      "detection",
      "birthmark",
      "microorganism"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "A _____ of bees landed on the school gate, so the teachers kept the students inside until it left.",
    "options": [
      "mitochondria",
      "proclivity",
      "swarm",
      "chimpanzee"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Each _____ has thousands of bees, but they all work together to collect food and protect the queen.",
    "options": [
      "hive",
      "enzyme",
      "antenna",
      "fitness"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The _____ can lay over a thousand eggs a day, while the worker bees feed her and clean the hive.",
    "options": [
      "a chip off the old block",
      "cheek swab",
      "body language",
      "queen bee"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Each _____ can carry objects much heavier than itself, so a small group can move a whole dead insect.",
    "options": [
      "threat display",
      "worker ant",
      "amino acid",
      "biological parent"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "_____ in Africa build huge mounds of soil, and the tunnels inside keep the air cool.",
    "options": [
      "toolmaking",
      "chaos",
      "termite",
      "imprinting"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The _____ eats first after a hunt, but he must also protect the group from danger.",
    "options": [
      "eye colour",
      "mirror test",
      "selection pressure",
      "alpha male"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The hens quickly formed a _____, and the strongest hen always got the best place at the food bowl.",
    "options": [
      "amino acid",
      "pecking order",
      "birth defect",
      "fruit fly"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Monkeys spend hours on _____ each day, and this helps them build friendships within the group.",
    "options": [
      "grooming",
      "pheromone",
      "biochemistry",
      "naturalist"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "A bee may die to protect its hive, and scientists explain this with _____, because the other bees are its sisters.",
    "options": [
      "golden rice",
      "petri dish",
      "kin selection",
      "cheek swab"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Lions are _____ hunters, so they often surround a zebra from different sides before they attack.",
    "options": [
      "unsubstantiated",
      "cooperative",
      "reclusive",
      "fraternal"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The mother bird made a _____ move when she pretended to be hurt, and the fox followed her away from the chicks.",
    "options": [
      "selfless",
      "diagnostic",
      "unbiased",
      "unusual"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "In a vampire bat group, a _____ who never shares blood is soon ignored, so the bats rarely cheat.",
    "options": [
      "molecule",
      "possibility",
      "phenotype",
      "freeloader"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The bird's _____ includes singing and dancing, and the female watches carefully before she chooses.",
    "options": [
      "bioethics",
      "anthropomorphism",
      "courtship",
      "dimple"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The male's bright _____ attracts females, but it also makes him easier for hawks to see.",
    "options": [
      "plumage",
      "superbug",
      "anatomy",
      "exception"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The _____ spread his beautiful tail in the park, and a crowd of children gathered to take photos.",
    "options": [
      "proclivity",
      "certainty",
      "peacock",
      "de-extinction"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Swans are mostly _____, so a pair often stays together and raises chicks for many years.",
    "options": [
      "antagonistic",
      "well-documented",
      "reproducible",
      "monogamous"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Penguins form a _____ each season, and the parents call to each other to find their partner in the crowd.",
    "options": [
      "common ancestor",
      "pair bond",
      "natural selection",
      "threat display"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The duck led her _____ across the road, and the drivers stopped their cars to let them pass.",
    "options": [
      "brood",
      "naturalist",
      "coevolution",
      "observer"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The turtle buried her _____ of eggs in the warm sand, and then she returned to the sea.",
    "options": [
      "kit",
      "clutch",
      "ethologist",
      "insulin"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The hungry _____ opened its mouth very wide, and its father pushed a small fish inside.",
    "options": [
      "taxonomy",
      "gene",
      "chick",
      "existence"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Most fish give little _____, but some male seahorses carry and protect the babies themselves.",
    "options": [
      "early humans",
      "precision medicine",
      "clinical trial",
      "parental care"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The mother cat _____ her kittens every few hours, so she rarely leaves the box during the first week.",
    "options": [
      "arouse",
      "nurse",
      "recognise",
      "attract"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "A hungry _____ can die after two nights without food, so friends share their meals to keep each other alive.",
    "options": [
      "a chip off the old block",
      "the lion's share",
      "learned behaviour",
      "vampire bat"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "One _____ stands on a rock to watch for eagles, while the others dig for insects in the sand.",
    "options": [
      "meerkat",
      "parrot",
      "repertoire",
      "microbe"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The goose that acts as a _____ keeps its head up, and it honks loudly if a dog comes near.",
    "options": [
      "observer",
      "carrier",
      "lookout",
      "pedigree"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The elephant _____ remembers where water can be found, so the group follows her during dry seasons.",
    "options": [
      "matriarch",
      "subject",
      "gorilla",
      "bonobo"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Ant colonies have a clear _____, because some ants find food while others care for the young.",
    "options": [
      "mirror test",
      "division of labour",
      "gene drive",
      "convergent evolution"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "pack": {
    "pos": "n.",
    "en_def": "a group of wolves or wild dogs",
    "cn_def": "（狼）群"
  },
  "troop": {
    "pos": "n.",
    "en_def": "a group of monkeys",
    "cn_def": "（猴）群"
  },
  "pod": {
    "pos": "n.",
    "en_def": "a group of whales or dolphins",
    "cn_def": "（鯨豚）群"
  },
  "swarm": {
    "pos": "n.",
    "en_def": "a large moving group of insects",
    "cn_def": "（昆蟲）一大群"
  },
  "hive": {
    "pos": "n.",
    "en_def": "a home where bees live together",
    "cn_def": "蜂巢"
  },
  "queen bee": {
    "pos": "n.phr.",
    "en_def": "the only female bee in a hive that lays eggs",
    "cn_def": "蜂后"
  },
  "worker ant": {
    "pos": "n.phr.",
    "en_def": "an ant that collects food and builds the nest",
    "cn_def": "工蟻"
  },
  "termite": {
    "pos": "n.",
    "en_def": "a small insect that eats wood and lives in large groups",
    "cn_def": "白蟻"
  },
  "alpha male": {
    "pos": "n.phr.",
    "en_def": "the most powerful male in a group",
    "cn_def": "首領雄性"
  },
  "pecking order": {
    "pos": "n.phr.",
    "en_def": "the order of rank within a group",
    "cn_def": "啄序；等級次序"
  },
  "grooming": {
    "pos": "n.",
    "en_def": "cleaning another animal's fur",
    "cn_def": "理毛"
  },
  "kin selection": {
    "pos": "n.phr.",
    "en_def": "helping relatives so that shared genes survive",
    "cn_def": "親屬選擇"
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "working together with others",
    "cn_def": "合作的"
  },
  "selfless": {
    "pos": "adj.",
    "en_def": "caring more about others than yourself",
    "cn_def": "無私的"
  },
  "freeloader": {
    "pos": "n.",
    "en_def": "someone who takes help but gives nothing back",
    "cn_def": "搭便車者；白吃白喝者"
  },
  "courtship": {
    "pos": "n.",
    "en_def": "actions an animal uses to attract a partner",
    "cn_def": "求偶"
  },
  "plumage": {
    "pos": "n.",
    "en_def": "a bird's feathers",
    "cn_def": "羽毛"
  },
  "peacock": {
    "pos": "n.",
    "en_def": "a male bird with a large, colourful tail",
    "cn_def": "雄孔雀"
  },
  "monogamous": {
    "pos": "adj.",
    "en_def": "having only one partner",
    "cn_def": "一夫一妻制的"
  },
  "pair bond": {
    "pos": "n.phr.",
    "en_def": "a strong long-term link between two partners",
    "cn_def": "配偶關係"
  },
  "brood": {
    "pos": "n.",
    "en_def": "a group of young birds born at the same time",
    "cn_def": "一窩幼鳥"
  },
  "clutch": {
    "pos": "n.",
    "en_def": "a group of eggs laid at one time",
    "cn_def": "一窩蛋"
  },
  "chick": {
    "pos": "n.",
    "en_def": "a baby bird",
    "cn_def": "雛鳥；小雞"
  },
  "parental care": {
    "pos": "n.phr.",
    "en_def": "the ways parents look after their young",
    "cn_def": "親代照顧"
  },
  "nurse": {
    "pos": "v.",
    "en_def": "to feed a baby with milk from its mother",
    "cn_def": "哺乳"
  },
  "vampire bat": {
    "pos": "n.phr.",
    "en_def": "a bat that feeds on the blood of animals",
    "cn_def": "吸血蝙蝠"
  },
  "meerkat": {
    "pos": "n.",
    "en_def": "a small African animal that stands on its back legs",
    "cn_def": "狐獴"
  },
  "lookout": {
    "pos": "n.",
    "en_def": "an animal or person who watches for danger",
    "cn_def": "守望者；哨兵"
  },
  "matriarch": {
    "pos": "n.",
    "en_def": "an old female who leads a family group",
    "cn_def": "女族長"
  },
  "division of labour": {
    "pos": "n.phr.",
    "en_def": "splitting work so each member does a different job",
    "cn_def": "分工"
  },
  "carrier": {
    "pos": "n.",
    "en_def": "a person who has a gene but does not show its effect",
    "cn_def": "帶原者；攜帶者"
  },
  "mitochondria": {
    "pos": "n.",
    "en_def": "parts of a cell that make energy",
    "cn_def": "粒線體"
  },
  "inclusion": {
    "pos": "n.",
    "en_def": "adding someone or something to a group",
    "cn_def": "納入；包含"
  },
  "neanderthal": {
    "pos": "n.",
    "en_def": "an early human who lived in Europe and Asia",
    "cn_def": "尼安德塔人"
  },
  "repertoire": {
    "pos": "n.",
    "en_def": "all the things a person or animal can do",
    "cn_def": "全部本領；曲目"
  },
  "inbreeding": {
    "pos": "n.",
    "en_def": "breeding between closely related animals",
    "cn_def": "近親繁殖"
  },
  "detection": {
    "pos": "n.",
    "en_def": "the act of finding or noticing something",
    "cn_def": "偵測；發現"
  },
  "birthmark": {
    "pos": "n.",
    "en_def": "a coloured mark on the skin from birth",
    "cn_def": "胎記"
  },
  "microorganism": {
    "pos": "n.",
    "en_def": "a living thing too small to see without a microscope",
    "cn_def": "微生物"
  },
  "proclivity": {
    "pos": "n.",
    "en_def": "a natural tendency to do something",
    "cn_def": "傾向；癖好"
  },
  "chimpanzee": {
    "pos": "n.",
    "en_def": "an African ape that is closely related to humans",
    "cn_def": "黑猩猩"
  },
  "enzyme": {
    "pos": "n.",
    "en_def": "a substance in the body that speeds up chemical changes",
    "cn_def": "酵素"
  },
  "antenna": {
    "pos": "n.",
    "en_def": "one of two long thin parts on an insect's head",
    "cn_def": "觸角"
  },
  "fitness": {
    "pos": "n.",
    "en_def": "how well a living thing survives and has young",
    "cn_def": "適存度"
  },
  "a chip off the old block": {
    "pos": "n.phr.",
    "en_def": "a person who is very similar to a parent",
    "cn_def": "酷似父母的孩子"
  },
  "cheek swab": {
    "pos": "n.phr.",
    "en_def": "a cotton stick rubbed inside the mouth to collect cells",
    "cn_def": "口腔拭子"
  },
  "body language": {
    "pos": "n.phr.",
    "en_def": "messages sent by the way you move or stand",
    "cn_def": "肢體語言"
  },
  "threat display": {
    "pos": "n.phr.",
    "en_def": "actions an animal uses to scare an enemy",
    "cn_def": "威嚇展示"
  },
  "amino acid": {
    "pos": "n.phr.",
    "en_def": "a small unit that joins with others to build proteins",
    "cn_def": "胺基酸"
  },
  "biological parent": {
    "pos": "n.phr.",
    "en_def": "the parent who gave you your genes",
    "cn_def": "親生父母"
  },
  "toolmaking": {
    "pos": "n.",
    "en_def": "the activity of making tools",
    "cn_def": "工具製作"
  },
  "chaos": {
    "pos": "n.",
    "en_def": "a state of complete confusion",
    "cn_def": "混亂"
  },
  "imprinting": {
    "pos": "n.",
    "en_def": "a young animal's quick bond with the first thing it sees",
    "cn_def": "銘印"
  },
  "eye colour": {
    "pos": "n.phr.",
    "en_def": "the colour of the coloured part of the eye",
    "cn_def": "眼睛顏色"
  },
  "mirror test": {
    "pos": "n.phr.",
    "en_def": "a test to see if an animal recognises itself in a mirror",
    "cn_def": "鏡子測驗"
  },
  "selection pressure": {
    "pos": "n.phr.",
    "en_def": "a force in nature that affects which animals survive",
    "cn_def": "選擇壓力"
  },
  "birth defect": {
    "pos": "n.phr.",
    "en_def": "a health problem that a baby is born with",
    "cn_def": "先天缺陷"
  },
  "fruit fly": {
    "pos": "n.phr.",
    "en_def": "a tiny fly often used in genetics experiments",
    "cn_def": "果蠅"
  },
  "pheromone": {
    "pos": "n.",
    "en_def": "a chemical an animal releases to send a message",
    "cn_def": "費洛蒙"
  },
  "biochemistry": {
    "pos": "n.",
    "en_def": "the study of chemical processes in living things",
    "cn_def": "生物化學"
  },
  "naturalist": {
    "pos": "n.",
    "en_def": "a person who studies plants and animals in nature",
    "cn_def": "博物學家"
  },
  "golden rice": {
    "pos": "n.phr.",
    "en_def": "rice changed to contain more vitamin A",
    "cn_def": "黃金米"
  },
  "petri dish": {
    "pos": "n.phr.",
    "en_def": "a small round dish used to grow germs in a lab",
    "cn_def": "培養皿"
  },
  "unsubstantiated": {
    "pos": "adj.",
    "en_def": "not supported by evidence",
    "cn_def": "未經證實的"
  },
  "reclusive": {
    "pos": "adj.",
    "en_def": "avoiding others and living alone",
    "cn_def": "隱居的；不喜交際的"
  },
  "fraternal": {
    "pos": "adj.",
    "en_def": "(of twins) from two different eggs",
    "cn_def": "異卵的"
  },
  "diagnostic": {
    "pos": "adj.",
    "en_def": "used to find out what illness someone has",
    "cn_def": "診斷的"
  },
  "unbiased": {
    "pos": "adj.",
    "en_def": "fair and not influenced by personal opinions",
    "cn_def": "不偏不倚的"
  },
  "unusual": {
    "pos": "adj.",
    "en_def": "different from what is normal",
    "cn_def": "不尋常的"
  },
  "molecule": {
    "pos": "n.",
    "en_def": "the smallest unit of a substance made of atoms",
    "cn_def": "分子"
  },
  "possibility": {
    "pos": "n.",
    "en_def": "something that might happen or be true",
    "cn_def": "可能性"
  },
  "phenotype": {
    "pos": "n.",
    "en_def": "the features you can see, such as size or colour",
    "cn_def": "表現型"
  },
  "bioethics": {
    "pos": "n.",
    "en_def": "the study of right and wrong in medicine and biology",
    "cn_def": "生命倫理學"
  },
  "anthropomorphism": {
    "pos": "n.",
    "en_def": "giving human feelings to animals or objects",
    "cn_def": "擬人化"
  },
  "dimple": {
    "pos": "n.",
    "en_def": "a small hollow in the cheek when you smile",
    "cn_def": "酒窩"
  },
  "superbug": {
    "pos": "n.",
    "en_def": "a germ that common medicines can no longer kill",
    "cn_def": "超級細菌"
  },
  "anatomy": {
    "pos": "n.",
    "en_def": "the structure of a body",
    "cn_def": "解剖構造；解剖學"
  },
  "exception": {
    "pos": "n.",
    "en_def": "something that does not follow the usual rule",
    "cn_def": "例外"
  },
  "certainty": {
    "pos": "n.",
    "en_def": "the state of being completely sure",
    "cn_def": "確定性；把握"
  },
  "de-extinction": {
    "pos": "n.",
    "en_def": "bringing an extinct animal back to life",
    "cn_def": "復活滅絕物種"
  },
  "antagonistic": {
    "pos": "adj.",
    "en_def": "showing strong opposition",
    "cn_def": "敵對的"
  },
  "well-documented": {
    "pos": "adj.",
    "en_def": "recorded clearly in many reports",
    "cn_def": "有充分記錄的"
  },
  "reproducible": {
    "pos": "adj.",
    "en_def": "able to be repeated with the same results",
    "cn_def": "可重複驗證的"
  },
  "common ancestor": {
    "pos": "n.phr.",
    "en_def": "an earlier species that two later species both came from",
    "cn_def": "共同祖先"
  },
  "natural selection": {
    "pos": "n.phr.",
    "en_def": "process where living things best suited to their surroundings survive",
    "cn_def": "天擇"
  },
  "coevolution": {
    "pos": "n.",
    "en_def": "when two species change over time because of each other",
    "cn_def": "共同演化"
  },
  "observer": {
    "pos": "n.",
    "en_def": "a person who watches something carefully",
    "cn_def": "觀察者"
  },
  "kit": {
    "pos": "n.",
    "en_def": "a set of things packed together for a task",
    "cn_def": "套組；工具包"
  },
  "ethologist": {
    "pos": "n.",
    "en_def": "a scientist who studies animal behaviour",
    "cn_def": "動物行為學家"
  },
  "insulin": {
    "pos": "n.",
    "en_def": "a hormone that controls sugar in the blood",
    "cn_def": "胰島素"
  },
  "taxonomy": {
    "pos": "n.",
    "en_def": "the science of naming and grouping living things",
    "cn_def": "分類學"
  },
  "gene": {
    "pos": "n.",
    "en_def": "a part of DNA that controls a feature like eye colour",
    "cn_def": "基因"
  },
  "existence": {
    "pos": "n.",
    "en_def": "the state of being real or alive",
    "cn_def": "存在"
  },
  "early humans": {
    "pos": "n.phr.",
    "en_def": "people who lived very long ago",
    "cn_def": "早期人類"
  },
  "precision medicine": {
    "pos": "n.phr.",
    "en_def": "treatment planned for a person's own genes",
    "cn_def": "精準醫療"
  },
  "clinical trial": {
    "pos": "n.phr.",
    "en_def": "a test of a new treatment on volunteers",
    "cn_def": "臨床試驗"
  },
  "arouse": {
    "pos": "v.",
    "en_def": "to cause a feeling or reaction",
    "cn_def": "引起；激起"
  },
  "recognise": {
    "pos": "v.",
    "en_def": "to know someone or something you have seen before",
    "cn_def": "認出"
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make something come closer",
    "cn_def": "吸引"
  },
  "the lion's share": {
    "pos": "n.phr.",
    "en_def": "the largest part of something",
    "cn_def": "最大的一份"
  },
  "learned behaviour": {
    "pos": "n.phr.",
    "en_def": "an action an animal learns rather than is born with",
    "cn_def": "學習行為"
  },
  "parrot": {
    "pos": "n.",
    "en_def": "a colourful bird that can copy human speech",
    "cn_def": "鸚鵡"
  },
  "microbe": {
    "pos": "n.",
    "en_def": "a tiny living thing such as a bacterium",
    "cn_def": "微生物；細菌"
  },
  "pedigree": {
    "pos": "n.",
    "en_def": "the recorded family history of an animal",
    "cn_def": "血統證明；系譜"
  },
  "subject": {
    "pos": "n.",
    "en_def": "a person or animal used in a study",
    "cn_def": "受試者；研究對象"
  },
  "gorilla": {
    "pos": "n.",
    "en_def": "the largest ape, living in African forests",
    "cn_def": "大猩猩"
  },
  "bonobo": {
    "pos": "n.",
    "en_def": "a peaceful ape closely related to the chimpanzee",
    "cn_def": "巴諾布猿"
  },
  "gene drive": {
    "pos": "n.phr.",
    "en_def": "a method to spread a gene quickly through a population",
    "cn_def": "基因驅動"
  },
  "convergent evolution": {
    "pos": "n.phr.",
    "en_def": "when unrelated animals develop similar features",
    "cn_def": "趨同演化"
  }
};

const EXTRA_GLOSSES = {};
