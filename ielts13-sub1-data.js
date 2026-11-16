// Topic 13 Subunit 1 Quiz Data: Evolution & Natural Selection 演化與天擇
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S01 - Evolution & Natural Selection 演化與天擇",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "evolution",
    "pos": "n.",
    "cn_def": "演化",
    "en_def": "slow change in living things over many generations",
    "sentence": "Our biology teacher showed us fossils of early horses, and she explained how {{BLANK}} slowly changed their size and teeth over millions of years.",
    "cn": "我們的生物老師給我們看早期馬的化石，並解釋了演化如何在數百萬年間慢慢改變牠們的體型和牙齒。"
  },
  {
    "word": "natural selection",
    "pos": "n.phr.",
    "cn_def": "天擇",
    "en_def": "process where living things best suited to their surroundings survive",
    "sentence": "Rabbits with white fur are harder for foxes to see in the snow, so {{BLANK}} helps them survive and pass on that colour.",
    "cn": "白色毛皮的兔子在雪地裡較不容易被狐狸看見，所以天擇幫助牠們存活並把這種毛色傳下去。"
  },
  {
    "word": "sexual selection",
    "pos": "n.phr.",
    "cn_def": "性擇",
    "en_def": "choosing mates by features such as bright colours or songs",
    "sentence": "Female birds often choose males with the brightest feathers, and scientists believe {{BLANK}} explains why many male birds look so colourful.",
    "cn": "雌鳥常常選擇羽毛最鮮豔的雄鳥，而科學家相信性擇解釋了為什麼許多雄鳥看起來如此色彩繽紛。"
  },
  {
    "word": "artificial selection",
    "pos": "n.phr.",
    "cn_def": "人擇；人工選擇",
    "en_def": "when humans choose which plants or animals breed",
    "sentence": "All the different dog breeds came from wolves, but they look so different because people used {{BLANK}} for thousands of years.",
    "cn": "所有不同的狗品種都來自狼，但牠們看起來如此不同，是因為人們數千年來一直進行人擇。"
  },
  {
    "word": "fitness",
    "pos": "n.",
    "cn_def": "適存度",
    "en_def": "how well a living thing survives and has young",
    "sentence": "In biology, {{BLANK}} does not mean going to the gym, because it describes how many healthy young an animal can produce.",
    "cn": "在生物學中，適存度並不是指去健身房，因為它描述的是一隻動物能產下多少健康的後代。"
  },
  {
    "word": "common ancestor",
    "pos": "n.phr.",
    "cn_def": "共同祖先",
    "en_def": "an earlier species that two later species both came from",
    "sentence": "Humans and chimpanzees look different today, but scientists say we shared a {{BLANK}} that lived about six million years ago.",
    "cn": "人類和黑猩猩今天看起來不同，但科學家說我們有一個大約生活在六百萬年前的共同祖先。"
  },
  {
    "word": "speciation",
    "pos": "n.",
    "cn_def": "物種形成",
    "en_def": "the forming of a new and separate species",
    "sentence": "When a river split one group of beetles into two, the groups stopped meeting, and over time {{BLANK}} produced two different kinds.",
    "cn": "當一條河把一群甲蟲分成兩群後，兩群不再相遇，經過一段時間，物種形成產生了兩種不同的甲蟲。"
  },
  {
    "word": "descent",
    "pos": "n.",
    "cn_def": "血統；由來",
    "en_def": "coming from earlier family members or species",
    "sentence": "The museum guide explained that whales are of land-animal {{BLANK}}, and the small bones in their bodies are clues to that past.",
    "cn": "博物館導覽員解釋說鯨魚是陸地動物血統，而牠們體內的小骨頭就是那段過去的線索。"
  },
  {
    "word": "vestigial",
    "pos": "adj.",
    "cn_def": "退化的；殘留的",
    "en_def": "still present in the body but no longer useful",
    "sentence": "Some snakes still have tiny {{BLANK}} leg bones inside their bodies, although they have not used legs for millions of years.",
    "cn": "有些蛇的體內仍有微小的退化的腿骨，雖然牠們已經數百萬年沒有使用腿了。"
  },
  {
    "word": "missing link",
    "pos": "n.phr.",
    "cn_def": "缺失的環節",
    "en_def": "a fossil that connects two groups of living things",
    "sentence": "Newspapers called the feathered dinosaur fossil a {{BLANK}}, because it seemed to connect reptiles and modern birds.",
    "cn": "報紙把這個有羽毛的恐龍化石稱為缺失的環節，因為它似乎連接了爬行動物和現代鳥類。"
  },
  {
    "word": "tree of life",
    "pos": "n.phr.",
    "cn_def": "生命之樹",
    "en_def": "a diagram showing how all living things are related",
    "sentence": "The poster in the science lab shows a huge {{BLANK}}, and students can trace how fish, birds and humans are related.",
    "cn": "科學實驗室裡的海報展示了一棵巨大的生命之樹，學生可以追溯魚類、鳥類和人類之間的關係。"
  },
  {
    "word": "coevolution",
    "pos": "n.",
    "cn_def": "共同演化",
    "en_def": "when two species change over time because of each other",
    "sentence": "Some flowers have long tubes and some moths have long tongues, and scientists see this as a clear example of {{BLANK}}.",
    "cn": "有些花有長長的花管，而有些蛾有長長的口器，科學家把這視為共同演化的清楚例子。"
  },
  {
    "word": "convergent evolution",
    "pos": "n.phr.",
    "cn_def": "趨同演化",
    "en_def": "when unrelated animals develop similar features",
    "sentence": "Sharks and dolphins are not closely related, but they both have smooth bodies and fins because of {{BLANK}}.",
    "cn": "鯊魚和海豚並不是近親，但因為趨同演化，牠們都有光滑的身體和鰭。"
  },
  {
    "word": "arms race",
    "pos": "n.phr.",
    "cn_def": "軍備競賽",
    "en_def": "a contest where each side keeps improving to beat the other",
    "sentence": "Cheetahs became faster to catch gazelles, while gazelles became faster to escape, so the two animals are locked in an {{BLANK}}.",
    "cn": "獵豹變得更快以捕捉瞪羚，而瞪羚也變得更快以逃脫，所以這兩種動物陷入了一場軍備競賽。"
  },
  {
    "word": "selection pressure",
    "pos": "n.phr.",
    "cn_def": "選擇壓力",
    "en_def": "a force in nature that affects which animals survive",
    "sentence": "When the winters became colder, there was strong {{BLANK}} on the deer, and only those with thick coats survived.",
    "cn": "當冬天變得更冷時，鹿群受到強大的選擇壓力，只有毛皮厚的鹿才存活下來。"
  },
  {
    "word": "advantageous",
    "pos": "adj.",
    "cn_def": "有利的",
    "en_def": "helpful and giving a better chance of success",
    "sentence": "Long necks were {{BLANK}} for giraffes because they could reach leaves high in the trees, so more long-necked giraffes survived.",
    "cn": "長脖子對長頸鹿是有利的，因為牠們能吃到樹上高處的葉子，所以有更多長脖子的長頸鹿存活下來。"
  },
  {
    "word": "outcompete",
    "pos": "v.",
    "cn_def": "競爭勝過",
    "en_def": "to do better than others in getting food or space",
    "sentence": "Grey squirrels were brought to Britain from America, and they {{BLANK}} the native red squirrels in many forests.",
    "cn": "灰松鼠從美洲被帶到英國，而牠們在許多森林中競爭勝過了本地的紅松鼠。"
  },
  {
    "word": "finch",
    "pos": "n.",
    "cn_def": "雀鳥",
    "en_def": "a small bird with a short, strong beak",
    "sentence": "Darwin studied the different {{BLANK}} on the Galápagos Islands, and he noticed that their beaks matched the food on each island.",
    "cn": "達爾文研究了加拉巴哥群島上不同的雀鳥，並注意到牠們的喙與每個島上的食物相符。"
  },
  {
    "word": "beak",
    "pos": "n.",
    "cn_def": "鳥喙",
    "en_def": "the hard, pointed mouth of a bird",
    "sentence": "Birds that crack hard seeds usually have a thick {{BLANK}}, but birds that catch insects often have a thin one.",
    "cn": "會咬開堅硬種子的鳥通常有厚實的鳥喙，但捕捉昆蟲的鳥通常有細長的喙。"
  },
  {
    "word": "primordial",
    "pos": "adj.",
    "cn_def": "原始的；最初的",
    "en_def": "existing at the very beginning of time",
    "sentence": "Some scientists think life began in a {{BLANK}} soup of chemicals in the ocean, but others believe it started near hot vents.",
    "cn": "有些科學家認為生命起源於海洋中化學物質組成的原始的湯，但其他人相信生命始於熱泉噴口附近。"
  },
  {
    "word": "single-celled",
    "pos": "adj.",
    "cn_def": "單細胞的",
    "en_def": "made of only one cell",
    "sentence": "The first living things on Earth were tiny {{BLANK}} creatures, and they existed alone for billions of years before animals appeared.",
    "cn": "地球上最早的生物是微小的單細胞的生物，而牠們在動物出現之前獨自存在了數十億年。"
  },
  {
    "word": "multicellular",
    "pos": "adj.",
    "cn_def": "多細胞的",
    "en_def": "made of many cells working together",
    "sentence": "Plants and animals are {{BLANK}} living things, but bacteria are made of just one cell each.",
    "cn": "植物和動物都是多細胞的生物，但細菌每個都只由一個細胞組成。"
  },
  {
    "word": "microorganism",
    "pos": "n.",
    "cn_def": "微生物",
    "en_def": "a living thing too small to see without a microscope",
    "sentence": "A spoonful of garden soil contains millions of {{BLANK}}, and many of them help plants grow by breaking down dead leaves.",
    "cn": "一湯匙的花園土壤含有數百萬個微生物，而且其中許多會分解枯葉來幫助植物生長。"
  },
  {
    "word": "naturalist",
    "pos": "n.",
    "cn_def": "博物學家",
    "en_def": "a person who studies plants and animals in nature",
    "sentence": "As a young {{BLANK}}, Darwin collected beetles and birds, and his notes later helped him form his famous theory.",
    "cn": "年輕時身為博物學家的達爾文收集甲蟲和鳥類，而他的筆記後來幫助他形成了著名的理論。"
  },
  {
    "word": "biologist",
    "pos": "n.",
    "cn_def": "生物學家",
    "en_def": "a scientist who studies living things",
    "sentence": "My cousin works as a {{BLANK}} in Taiwan, and she spends weeks in the mountains counting frogs and taking photos.",
    "cn": "我的表姐在台灣擔任生物學家，她會花好幾週在山裡數青蛙和拍照。"
  },
  {
    "word": "variant",
    "pos": "n.",
    "cn_def": "變種；變體",
    "en_def": "a form of something that is slightly different",
    "sentence": "Doctors watched the new {{BLANK}} of the virus closely, because it spread faster than the earlier type.",
    "cn": "醫生密切觀察這種病毒的新變種，因為它比較早的類型傳播得更快。"
  },
  {
    "word": "ancestral",
    "pos": "adj.",
    "cn_def": "祖先的",
    "en_def": "belonging to earlier family members or species",
    "sentence": "Scientists studied the {{BLANK}} home of the first dogs, and they found that wolves there lived close to early humans.",
    "cn": "科學家研究了最早的狗的祖先的家園，並發現那裡的狼和早期人類生活得很近。"
  },
  {
    "word": "taxonomy",
    "pos": "n.",
    "cn_def": "分類學",
    "en_def": "the science of naming and grouping living things",
    "sentence": "Students learn {{BLANK}} in their first year, so they can name animals correctly and know which group each one belongs to.",
    "cn": "學生在第一年學習分類學，好讓他們能正確地為動物命名並知道每種動物屬於哪一類。"
  },
  {
    "word": "peppered moth",
    "pos": "n.phr.",
    "cn_def": "樺尺蛾",
    "en_def": "a moth that changed colour when cities became sooty",
    "sentence": "During the Industrial Revolution, dark {{BLANK}} became more common, because they were hidden on dirty black trees.",
    "cn": "在工業革命期間，深色的樺尺蛾變得更常見，因為牠們能隱藏在骯髒的黑色樹幹上。"
  },
  {
    "word": "superbug",
    "pos": "n.",
    "cn_def": "超級細菌",
    "en_def": "a germ that common medicines can no longer kill",
    "sentence": "Doctors warn that taking medicine you do not need can create a {{BLANK}}, and then ordinary drugs will stop working.",
    "cn": "醫生警告服用不需要的藥物可能會產生超級細菌，然後一般的藥物就會失效。"
  },
  {
    "word": "drug-resistant",
    "pos": "adj.",
    "cn_def": "抗藥性的",
    "en_def": "not affected by medicines that once worked",
    "sentence": "The hospital found a {{BLANK}} infection in one patient, so the nurses moved him to a separate room.",
    "cn": "醫院在一名病人身上發現了抗藥性的感染，所以護理師把他移到單獨的病房。"
  },
  {
    "word": "giraffe",
    "pos": "n.",
    "cn_def": "長頸鹿",
    "en_def": "a tall African animal with a very long neck",
    "sentence": "Male {{BLANK}} swing their long necks at each other when they fight, and the stronger one usually wins a partner.",
    "cn": "雄長頸鹿打鬥時會互相揮動長脖子，而較強壯的那一隻通常會贏得伴侶。"
  }
];

const MCQS = [
  {
    "q": "Our biology teacher showed us fossils of early horses, and she explained how _____ slowly changed their size and teeth over millions of years.",
    "options": [
      "molecule",
      "evolution",
      "treatment",
      "gene"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Rabbits with white fur are harder for foxes to see in the snow, so _____ helps them survive and pass on that colour.",
    "options": [
      "bone marrow",
      "threat display",
      "kin selection",
      "natural selection"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Female birds often choose males with the brightest feathers, and scientists believe _____ explains why many male birds look so colourful.",
    "options": [
      "opposable thumb",
      "double helix",
      "sexual selection",
      "clinical trial"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "All the different dog breeds came from wolves, but they look so different because people used _____ for thousands of years.",
    "options": [
      "artificial selection",
      "paternity test",
      "fruit fly",
      "worker ant"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "In biology, _____ does not mean going to the gym, because it describes how many healthy young an animal can produce.",
    "options": [
      "imprinting",
      "archetype",
      "organ",
      "fitness"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Humans and chimpanzees look different today, but scientists say we shared a _____ that lived about six million years ago.",
    "options": [
      "great ape",
      "egg cell",
      "common ancestor",
      "waggle dance"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "When a river split one group of beetles into two, the groups stopped meeting, and over time _____ produced two different kinds.",
    "options": [
      "speciation",
      "reflex",
      "nucleus",
      "CRISPR"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The museum guide explained that whales are of land-animal _____, and the small bones in their bodies are clues to that past.",
    "options": [
      "inheritance",
      "descent",
      "fidelity",
      "fluke"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Some snakes still have tiny _____ leg bones inside their bodies, although they have not used legs for millions of years.",
    "options": [
      "vestigial",
      "antagonistic",
      "probable",
      "irrefutable"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Newspapers called the feathered dinosaur fossil a _____, because it seemed to connect reptiles and modern birds.",
    "options": [
      "kin selection",
      "cell division",
      "missing link",
      "biological parent"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The poster in the science lab shows a huge _____, and students can trace how fish, birds and humans are related.",
    "options": [
      "vampire bat",
      "tree of life",
      "cheek swab",
      "pecking order"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Some flowers have long tubes and some moths have long tongues, and scientists see this as a clear example of _____.",
    "options": [
      "conditioning",
      "flaw",
      "ethology",
      "coevolution"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Sharks and dolphins are not closely related, but they both have smooth bodies and fins because of _____.",
    "options": [
      "convergent evolution",
      "waggle dance",
      "colour blindness",
      "eye colour"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Cheetahs became faster to catch gazelles, while gazelles became faster to escape, so the two animals are locked in an _____.",
    "options": [
      "birth defect",
      "worker ant",
      "gene drive",
      "arms race"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "When the winters became colder, there was strong _____ on the deer, and only those with thick coats survived.",
    "options": [
      "petri dish",
      "selection pressure",
      "eye colour",
      "precision medicine"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Long necks were _____ for giraffes because they could reach leaves high in the trees, so more long-necked giraffes survived.",
    "options": [
      "valuable",
      "misleading",
      "advantageous",
      "unbiased"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Grey squirrels were brought to Britain from America, and they _____ the native red squirrels in many forests.",
    "options": [
      "outcompete",
      "distract",
      "reaffirm",
      "foresee"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Darwin studied the different _____ on the Galápagos Islands, and he noticed that their beaks matched the food on each island.",
    "options": [
      "genotype",
      "finch",
      "kit",
      "IVF"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Birds that crack hard seeds usually have a thick _____, but birds that catch insects often have a thin one.",
    "options": [
      "exception",
      "donor",
      "beak",
      "reflex"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Some scientists think life began in a _____ soup of chemicals in the ocean, but others believe it started near hot vents.",
    "options": [
      "homing",
      "instinctive",
      "persuasive",
      "primordial"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The first living things on Earth were tiny _____ creatures, and they existed alone for billions of years before animals appeared.",
    "options": [
      "observational",
      "single-celled",
      "probable",
      "descriptive"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Plants and animals are _____ living things, but bacteria are made of just one cell each.",
    "options": [
      "multicellular",
      "self-evident",
      "ineffective",
      "unbiased"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A spoonful of garden soil contains millions of _____, and many of them help plants grow by breaking down dead leaves.",
    "options": [
      "birthmark",
      "conditioning",
      "microorganism",
      "derivative"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "As a young _____, Darwin collected beetles and birds, and his notes later helped him form his famous theory.",
    "options": [
      "pheromone",
      "IVF",
      "nucleus",
      "naturalist"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "My cousin works as a _____ in Taiwan, and she spends weeks in the mountains counting frogs and taking photos.",
    "options": [
      "kit",
      "biologist",
      "upbringing",
      "embryo"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Doctors watched the new _____ of the virus closely, because it spread faster than the earlier type.",
    "options": [
      "hominid",
      "termite",
      "gorilla",
      "variant"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Scientists studied the _____ home of the first dogs, and they found that wolves there lived close to early humans.",
    "options": [
      "persuasive",
      "defensive",
      "ancestral",
      "ineffective"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Students learn _____ in their first year, so they can name animals correctly and know which group each one belongs to.",
    "options": [
      "taxonomy",
      "inbreeding",
      "analysis",
      "repertoire"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "During the Industrial Revolution, dark _____ became more common, because they were hidden on dirty black trees.",
    "options": [
      "double helix",
      "designer baby",
      "peppered moth",
      "gene drive"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Doctors warn that taking medicine you do not need can create a _____, and then ordinary drugs will stop working.",
    "options": [
      "superbug",
      "dimple",
      "sequencing",
      "certainty"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The hospital found a _____ infection in one patient, so the nurses moved him to a separate room.",
    "options": [
      "behavioural",
      "unreliable",
      "heritable",
      "drug-resistant"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Male _____ swing their long necks at each other when they fight, and the stronger one usually wins a partner.",
    "options": [
      "twin",
      "giraffe",
      "approximation",
      "agent"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "evolution": {
    "pos": "n.",
    "en_def": "slow change in living things over many generations",
    "cn_def": "演化"
  },
  "natural selection": {
    "pos": "n.phr.",
    "en_def": "process where living things best suited to their surroundings survive",
    "cn_def": "天擇"
  },
  "sexual selection": {
    "pos": "n.phr.",
    "en_def": "choosing mates by features such as bright colours or songs",
    "cn_def": "性擇"
  },
  "artificial selection": {
    "pos": "n.phr.",
    "en_def": "when humans choose which plants or animals breed",
    "cn_def": "人擇；人工選擇"
  },
  "fitness": {
    "pos": "n.",
    "en_def": "how well a living thing survives and has young",
    "cn_def": "適存度"
  },
  "common ancestor": {
    "pos": "n.phr.",
    "en_def": "an earlier species that two later species both came from",
    "cn_def": "共同祖先"
  },
  "speciation": {
    "pos": "n.",
    "en_def": "the forming of a new and separate species",
    "cn_def": "物種形成"
  },
  "descent": {
    "pos": "n.",
    "en_def": "coming from earlier family members or species",
    "cn_def": "血統；由來"
  },
  "vestigial": {
    "pos": "adj.",
    "en_def": "still present in the body but no longer useful",
    "cn_def": "退化的；殘留的"
  },
  "missing link": {
    "pos": "n.phr.",
    "en_def": "a fossil that connects two groups of living things",
    "cn_def": "缺失的環節"
  },
  "tree of life": {
    "pos": "n.phr.",
    "en_def": "a diagram showing how all living things are related",
    "cn_def": "生命之樹"
  },
  "coevolution": {
    "pos": "n.",
    "en_def": "when two species change over time because of each other",
    "cn_def": "共同演化"
  },
  "convergent evolution": {
    "pos": "n.phr.",
    "en_def": "when unrelated animals develop similar features",
    "cn_def": "趨同演化"
  },
  "arms race": {
    "pos": "n.phr.",
    "en_def": "a contest where each side keeps improving to beat the other",
    "cn_def": "軍備競賽"
  },
  "selection pressure": {
    "pos": "n.phr.",
    "en_def": "a force in nature that affects which animals survive",
    "cn_def": "選擇壓力"
  },
  "advantageous": {
    "pos": "adj.",
    "en_def": "helpful and giving a better chance of success",
    "cn_def": "有利的"
  },
  "outcompete": {
    "pos": "v.",
    "en_def": "to do better than others in getting food or space",
    "cn_def": "競爭勝過"
  },
  "finch": {
    "pos": "n.",
    "en_def": "a small bird with a short, strong beak",
    "cn_def": "雀鳥"
  },
  "beak": {
    "pos": "n.",
    "en_def": "the hard, pointed mouth of a bird",
    "cn_def": "鳥喙"
  },
  "primordial": {
    "pos": "adj.",
    "en_def": "existing at the very beginning of time",
    "cn_def": "原始的；最初的"
  },
  "single-celled": {
    "pos": "adj.",
    "en_def": "made of only one cell",
    "cn_def": "單細胞的"
  },
  "multicellular": {
    "pos": "adj.",
    "en_def": "made of many cells working together",
    "cn_def": "多細胞的"
  },
  "microorganism": {
    "pos": "n.",
    "en_def": "a living thing too small to see without a microscope",
    "cn_def": "微生物"
  },
  "naturalist": {
    "pos": "n.",
    "en_def": "a person who studies plants and animals in nature",
    "cn_def": "博物學家"
  },
  "biologist": {
    "pos": "n.",
    "en_def": "a scientist who studies living things",
    "cn_def": "生物學家"
  },
  "variant": {
    "pos": "n.",
    "en_def": "a form of something that is slightly different",
    "cn_def": "變種；變體"
  },
  "ancestral": {
    "pos": "adj.",
    "en_def": "belonging to earlier family members or species",
    "cn_def": "祖先的"
  },
  "taxonomy": {
    "pos": "n.",
    "en_def": "the science of naming and grouping living things",
    "cn_def": "分類學"
  },
  "peppered moth": {
    "pos": "n.phr.",
    "en_def": "a moth that changed colour when cities became sooty",
    "cn_def": "樺尺蛾"
  },
  "superbug": {
    "pos": "n.",
    "en_def": "a germ that common medicines can no longer kill",
    "cn_def": "超級細菌"
  },
  "drug-resistant": {
    "pos": "adj.",
    "en_def": "not affected by medicines that once worked",
    "cn_def": "抗藥性的"
  },
  "giraffe": {
    "pos": "n.",
    "en_def": "a tall African animal with a very long neck",
    "cn_def": "長頸鹿"
  },
  "molecule": {
    "pos": "n.",
    "en_def": "the smallest unit of a substance made of atoms",
    "cn_def": "分子"
  },
  "treatment": {
    "pos": "n.",
    "en_def": "medical care for an illness or injury",
    "cn_def": "治療"
  },
  "gene": {
    "pos": "n.",
    "en_def": "a part of DNA that controls a feature like eye colour",
    "cn_def": "基因"
  },
  "bone marrow": {
    "pos": "n.phr.",
    "en_def": "the soft tissue inside bones that makes blood",
    "cn_def": "骨髓"
  },
  "threat display": {
    "pos": "n.phr.",
    "en_def": "actions an animal uses to scare an enemy",
    "cn_def": "威嚇展示"
  },
  "kin selection": {
    "pos": "n.phr.",
    "en_def": "helping relatives so that shared genes survive",
    "cn_def": "親屬選擇"
  },
  "opposable thumb": {
    "pos": "n.phr.",
    "en_def": "a thumb that can touch the other fingers",
    "cn_def": "可對握的拇指"
  },
  "double helix": {
    "pos": "n.phr.",
    "en_def": "the twisted ladder shape of DNA",
    "cn_def": "雙螺旋"
  },
  "clinical trial": {
    "pos": "n.phr.",
    "en_def": "a test of a new treatment on volunteers",
    "cn_def": "臨床試驗"
  },
  "paternity test": {
    "pos": "n.phr.",
    "en_def": "a DNA test to find out who a child's father is",
    "cn_def": "親子鑑定"
  },
  "fruit fly": {
    "pos": "n.phr.",
    "en_def": "a tiny fly often used in genetics experiments",
    "cn_def": "果蠅"
  },
  "worker ant": {
    "pos": "n.phr.",
    "en_def": "an ant that collects food and builds the nest",
    "cn_def": "工蟻"
  },
  "imprinting": {
    "pos": "n.",
    "en_def": "a young animal's quick bond with the first thing it sees",
    "cn_def": "銘印"
  },
  "archetype": {
    "pos": "n.",
    "en_def": "a perfect typical example of something",
    "cn_def": "典型；原型"
  },
  "organ": {
    "pos": "n.",
    "en_def": "a body part such as the heart that does a special job",
    "cn_def": "器官"
  },
  "great ape": {
    "pos": "n.phr.",
    "en_def": "a large primate such as a gorilla or chimpanzee",
    "cn_def": "大型猿類"
  },
  "egg cell": {
    "pos": "n.phr.",
    "en_def": "the female cell that can grow into a baby",
    "cn_def": "卵細胞"
  },
  "waggle dance": {
    "pos": "n.phr.",
    "en_def": "a dance bees do to show where food is",
    "cn_def": "搖擺舞"
  },
  "reflex": {
    "pos": "n.",
    "en_def": "an automatic movement you do not think about",
    "cn_def": "反射動作"
  },
  "nucleus": {
    "pos": "n.",
    "en_def": "the centre of a cell that holds the DNA",
    "cn_def": "細胞核"
  },
  "crispr": {
    "pos": "n.",
    "en_def": "a tool that lets scientists cut and change DNA",
    "cn_def": "基因剪刀CRISPR"
  },
  "inheritance": {
    "pos": "n.",
    "en_def": "features passed from parents to children",
    "cn_def": "遺傳"
  },
  "fidelity": {
    "pos": "n.",
    "en_def": "loyalty to a partner",
    "cn_def": "忠誠"
  },
  "fluke": {
    "pos": "n.",
    "en_def": "a lucky or unusual result that happens by chance",
    "cn_def": "僥倖；偶然"
  },
  "antagonistic": {
    "pos": "adj.",
    "en_def": "showing strong opposition",
    "cn_def": "敵對的"
  },
  "probable": {
    "pos": "adj.",
    "en_def": "likely to be true or to happen",
    "cn_def": "很可能的"
  },
  "irrefutable": {
    "pos": "adj.",
    "en_def": "impossible to prove wrong",
    "cn_def": "無可辯駁的"
  },
  "cell division": {
    "pos": "n.phr.",
    "en_def": "the process in which one cell splits into two",
    "cn_def": "細胞分裂"
  },
  "biological parent": {
    "pos": "n.phr.",
    "en_def": "the parent who gave you your genes",
    "cn_def": "親生父母"
  },
  "vampire bat": {
    "pos": "n.phr.",
    "en_def": "a bat that feeds on the blood of animals",
    "cn_def": "吸血蝙蝠"
  },
  "cheek swab": {
    "pos": "n.phr.",
    "en_def": "a cotton stick rubbed inside the mouth to collect cells",
    "cn_def": "口腔拭子"
  },
  "pecking order": {
    "pos": "n.phr.",
    "en_def": "the order of rank within a group",
    "cn_def": "啄序；等級次序"
  },
  "conditioning": {
    "pos": "n.",
    "en_def": "training by linking an action with a reward or result",
    "cn_def": "制約"
  },
  "flaw": {
    "pos": "n.",
    "en_def": "a mistake or weakness",
    "cn_def": "缺陷；瑕疵"
  },
  "ethology": {
    "pos": "n.",
    "en_def": "the scientific study of animal behaviour",
    "cn_def": "動物行為學"
  },
  "colour blindness": {
    "pos": "n.phr.",
    "en_def": "being unable to see some colours clearly",
    "cn_def": "色盲"
  },
  "eye colour": {
    "pos": "n.phr.",
    "en_def": "the colour of the coloured part of the eye",
    "cn_def": "眼睛顏色"
  },
  "birth defect": {
    "pos": "n.phr.",
    "en_def": "a health problem that a baby is born with",
    "cn_def": "先天缺陷"
  },
  "gene drive": {
    "pos": "n.phr.",
    "en_def": "a method to spread a gene quickly through a population",
    "cn_def": "基因驅動"
  },
  "petri dish": {
    "pos": "n.phr.",
    "en_def": "a small round dish used to grow germs in a lab",
    "cn_def": "培養皿"
  },
  "precision medicine": {
    "pos": "n.phr.",
    "en_def": "treatment planned for a person's own genes",
    "cn_def": "精準醫療"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "very useful or important",
    "cn_def": "有價值的；寶貴的"
  },
  "misleading": {
    "pos": "adj.",
    "en_def": "giving the wrong idea",
    "cn_def": "誤導的"
  },
  "unbiased": {
    "pos": "adj.",
    "en_def": "fair and not influenced by personal opinions",
    "cn_def": "不偏不倚的"
  },
  "distract": {
    "pos": "v.",
    "en_def": "to take someone's attention away",
    "cn_def": "使分心"
  },
  "reaffirm": {
    "pos": "v.",
    "en_def": "to say again that something is true",
    "cn_def": "重申；再次確認"
  },
  "foresee": {
    "pos": "v.",
    "en_def": "to know that something will happen",
    "cn_def": "預見"
  },
  "genotype": {
    "pos": "n.",
    "en_def": "the set of genes a living thing has",
    "cn_def": "基因型"
  },
  "kit": {
    "pos": "n.",
    "en_def": "a set of things packed together for a task",
    "cn_def": "套組；工具包"
  },
  "ivf": {
    "pos": "n.",
    "en_def": "a method of joining egg and sperm outside the body",
    "cn_def": "試管嬰兒療程"
  },
  "exception": {
    "pos": "n.",
    "en_def": "something that does not follow the usual rule",
    "cn_def": "例外"
  },
  "donor": {
    "pos": "n.",
    "en_def": "a person who gives blood or body parts to help others",
    "cn_def": "捐贈者"
  },
  "homing": {
    "pos": "adj.",
    "en_def": "able to find the way home from far away",
    "cn_def": "歸巢的"
  },
  "instinctive": {
    "pos": "adj.",
    "en_def": "done naturally without learning",
    "cn_def": "本能的"
  },
  "persuasive": {
    "pos": "adj.",
    "en_def": "able to make people believe something",
    "cn_def": "有說服力的"
  },
  "observational": {
    "pos": "adj.",
    "en_def": "based on watching rather than experiments",
    "cn_def": "觀察性的"
  },
  "descriptive": {
    "pos": "adj.",
    "en_def": "describing what something is like",
    "cn_def": "描述性的"
  },
  "self-evident": {
    "pos": "adj.",
    "en_def": "clear without needing proof",
    "cn_def": "不言而喻的"
  },
  "ineffective": {
    "pos": "adj.",
    "en_def": "not producing the result you want",
    "cn_def": "無效的"
  },
  "birthmark": {
    "pos": "n.",
    "en_def": "a coloured mark on the skin from birth",
    "cn_def": "胎記"
  },
  "derivative": {
    "pos": "n.",
    "en_def": "something developed from something else",
    "cn_def": "衍生物"
  },
  "pheromone": {
    "pos": "n.",
    "en_def": "a chemical an animal releases to send a message",
    "cn_def": "費洛蒙"
  },
  "upbringing": {
    "pos": "n.",
    "en_def": "the way a child is cared for and taught at home",
    "cn_def": "教養；成長環境"
  },
  "embryo": {
    "pos": "n.",
    "en_def": "an animal or human in the very early stage of growth",
    "cn_def": "胚胎"
  },
  "hominid": {
    "pos": "n.",
    "en_def": "a member of the group including humans and great apes",
    "cn_def": "人科動物"
  },
  "termite": {
    "pos": "n.",
    "en_def": "a small insect that eats wood and lives in large groups",
    "cn_def": "白蟻"
  },
  "gorilla": {
    "pos": "n.",
    "en_def": "the largest ape, living in African forests",
    "cn_def": "大猩猩"
  },
  "defensive": {
    "pos": "adj.",
    "en_def": "protecting yourself from attack",
    "cn_def": "防禦性的"
  },
  "inbreeding": {
    "pos": "n.",
    "en_def": "breeding between closely related animals",
    "cn_def": "近親繁殖"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "repertoire": {
    "pos": "n.",
    "en_def": "all the things a person or animal can do",
    "cn_def": "全部本領；曲目"
  },
  "designer baby": {
    "pos": "n.phr.",
    "en_def": "a baby whose genes are chosen or changed by parents",
    "cn_def": "訂製嬰兒"
  },
  "dimple": {
    "pos": "n.",
    "en_def": "a small hollow in the cheek when you smile",
    "cn_def": "酒窩"
  },
  "sequencing": {
    "pos": "n.",
    "en_def": "finding the exact order of units in DNA",
    "cn_def": "定序"
  },
  "certainty": {
    "pos": "n.",
    "en_def": "the state of being completely sure",
    "cn_def": "確定性；把握"
  },
  "behavioural": {
    "pos": "adj.",
    "en_def": "relating to how a person or animal acts",
    "cn_def": "行為的"
  },
  "unreliable": {
    "pos": "adj.",
    "en_def": "not able to be trusted",
    "cn_def": "不可靠的"
  },
  "heritable": {
    "pos": "adj.",
    "en_def": "able to be passed from parent to child",
    "cn_def": "可遺傳的"
  },
  "twin": {
    "pos": "n.",
    "en_def": "one of two children born at the same time to the same mother",
    "cn_def": "雙胞胎"
  },
  "approximation": {
    "pos": "n.",
    "en_def": "a number or idea that is close but not exact",
    "cn_def": "近似值；概算"
  },
  "agent": {
    "pos": "n.",
    "en_def": "something that causes an effect",
    "cn_def": "媒介；作用物"
  }
};

const EXTRA_GLOSSES = {};
