// Lesson 35 Quiz Data: Marine Animals, Waterfowl & Farm Birds
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 35 - Marine Animals, Waterfowl & Farm Birds",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dolphin",
    "pos": "n.",
    "cn_def": "海豚",
    "en_def": "a highly intelligent sea mammal with a curved beak and blowhole",
    "sentence": "A playful {{BLANK}} leapt gracefully out of the sparkling blue waves, thrilling all the tourists on the cruise boat.",
    "cn": "一隻愛玩的海豚優雅地躍出閃爍蔚藍的海浪，讓遊輪上的所有遊客雀躍不已。"
  },
  {
    "word": "whale",
    "pos": "n.",
    "cn_def": "鯨魚",
    "en_def": "a very large sea mammal that breathes air through a blowhole",
    "sentence": "The blue {{BLANK}} is the largest animal on Earth, and it migrates thousands of miles across polar oceans.",
    "cn": "藍鯨是地球上體型最大的動物，牠會在極地海洋間進行長達數千英里的遷徙。"
  },
  {
    "word": "shark",
    "pos": "n.",
    "cn_def": "鯊魚",
    "en_def": "a large predatory fish with sharp teeth and a prominent dorsal fin",
    "sentence": "When the lifeguards spotted a large {{BLANK}} swimming near the crowded shore, they ordered all swimmers out of the water.",
    "cn": "當救生員發現一條大型鯊魚在擁擠的海岸附近游動時，他們立刻命令所有泳客離開水面。"
  },
  {
    "word": "shrimp",
    "pos": "n.",
    "cn_def": "蝦子",
    "en_def": "a small edible sea creature with a soft shell and long legs",
    "sentence": "The night market food vendor fried fresh {{BLANK}} with garlic and pepper, creating a mouth-watering aroma.",
    "cn": "夜市的熟食攤販用大蒜和胡椒熱炒新鮮的蝦子，散發出一股令人垂涎欲滴的香氣。"
  },
  {
    "word": "crab",
    "pos": "n.",
    "cn_def": "螃蟹",
    "en_def": "a sea creature with a hard flat shell and ten legs, including two large pincers",
    "sentence": "A small red {{BLANK}} walked sideways across the wet sand, using its sharp claws to catch tiny morsels.",
    "cn": "一隻紅色的小螃蟹在濕潤的沙灘上橫著行走，用牠鋒利的雙螯捕捉細小的食物碎屑。"
  },
  {
    "word": "turtle",
    "pos": "n.",
    "cn_def": "烏龜；海龜",
    "en_def": "a slow-moving reptile with a hard bony shell protecting its body",
    "sentence": "A green sea {{BLANK}} crawled slowly up onto the sandy beach at night to lay dozens of round white eggs.",
    "cn": "一隻綠蠵龜在夜間緩慢爬上沙灘，在沙坑中產下了數十顆圓形的白卵。"
  },
  {
    "word": "duck",
    "pos": "n.",
    "cn_def": "鴨子",
    "en_def": "a common water bird with webbed feet and a broad flat beak",
    "sentence": "A mother {{BLANK}} led her six fluffy yellow ducklings across the calm pond, quacking softly to keep them close.",
    "cn": "一隻鴨媽媽帶著她六隻毛茸茸的黃色小鴨橫渡平靜的池塘，輕聲嘎嘎叫著以讓牠們跟緊。"
  },
  {
    "word": "geese",
    "pos": "n.",
    "cn_def": "鵝（複數為 geese）",
    "en_def": "a large water bird with a long neck, larger than a duck",
    "sentence": "A flock of wild {{BLANK}} flew overhead in a neat V-shaped pattern as cold winter approached the northern lakes.",
    "cn": "寒冬逼近北方湖泊之際，一群野生鵝在上空以整齊的V字隊形向南方振翅翱翔。"
  },
  {
    "word": "swan",
    "pos": "n.",
    "cn_def": "天鵝",
    "en_def": "a large graceful water bird with long neck and white feathers",
    "sentence": "A beautiful white {{BLANK}} glided smoothly across the mirror-like lake, bending its long neck into the cool water.",
    "cn": "一隻美麗的白天鵝在如鏡面般的湖水上平穩滑行，並將修長的頸部探入清涼的水中。"
  },
  {
    "word": "hen",
    "pos": "n.",
    "cn_def": "母雞",
    "en_def": "an adult female chicken kept for producing eggs or meat",
    "sentence": "The farmer feeds each speckled {{BLANK}} with cracked corn every morning, and he collects fresh eggs every afternoon.",
    "cn": "農夫每天早晨用碎玉米餵養每一隻斑紋母雞，並且在每天下午收集新鮮的雞蛋。"
  }
];

const MCQS = [
  {
    "q": "The acrobatic ______ swam alongside our tour boat and performed breathtaking backflips above the blue water.",
    "options": [
      "duck",
      "turtle",
      "hen",
      "dolphin"
    ],
    "answer": 3,
    "cn": "身手矯捷的海豚在我們的觀光遊船旁並肩暢泳，並在蔚藍海水上方做出了驚險優雅的後空翻。 【選項解析】(A) dolphin 海豚  (B) turtle 烏龜  (C) hen 母雞  (D) duck 鴨子。acrobatic dolphin leaps above water（特技般躍出水面的海豚）。",
    "vocabIndex": 0
  },
  {
    "q": "Because it has a massive skeleton and thick layer of blubber, the blue ______ can withstand icy polar waters easily.",
    "options": [
      "whale",
      "hen",
      "crab",
      "duck"
    ],
    "answer": 0,
    "cn": "因為擁有龐大的骨架與厚實的鯨脂層，藍鯨能夠極其輕鬆地抵禦極地極寒的海水環境。 【選項解析】(A) hen 母雞  (B) whale 鯨魚  (C) crab 螃蟹  (D) duck 鴨子。blue whale with blubber layer（擁有鯨脂的藍鯨）。",
    "vocabIndex": 1
  },
  {
    "q": "Beach warning sirens blared loudly after a coastal fisherman spotted a dangerous white ______ near the surfing zone.",
    "options": [
      "duck",
      "shark",
      "turtle",
      "swan"
    ],
    "answer": 1,
    "cn": "在一名沿海漁民於衝浪區域附近發現一條危險的大白鯊之後，海灘警戒警報聲大作。 【選項解析】(A) duck 鴨子  (B) turtle 海龜  (C) shark 鯊魚  (D) swan 天鵝。dangerous white shark near surfing zone（衝浪區出現大白鯊）。",
    "vocabIndex": 2
  },
  {
    "q": "The seafood chef prepared a steaming bowl of noodles garnished with juicy pink ______ and green scallions.",
    "options": [
      "hen",
      "swan",
      "shrimp",
      "goose"
    ],
    "answer": 2,
    "cn": "海鮮大廚端上了一碗熱騰騰的湯麵，上面鋪滿了多汁粉嫩的蝦子與碧綠的青蔥作為佐料。 【選項解析】(A) hen 母雞  (B) swan 天鵝  (C) goose 鵝  (D) shrimp 蝦子。garnished with juicy pink shrimp（點綴粉紅蝦子）。",
    "vocabIndex": 3
  },
  {
    "q": "When disturbed on the rocky shore, the tiny hermit ______ pulled its soft body entirely into its borrowed shell.",
    "options": [
      "crab",
      "dolphin",
      "whale",
      "hen"
    ],
    "answer": 0,
    "cn": "當在岩石海岸受到驚擾時，這隻小寄居蟹便會將牠柔軟的身軀徹底縮回牠所借宿的外殼中。 【選項解析】(A) crab 螃蟹/寄居蟹  (B) dolphin 海豚  (C) whale 鯨魚  (D) hen 母雞。hermit crab in shell（寄居蟹縮回殼中）。",
    "vocabIndex": 4
  },
  {
    "q": "Marine biologists placed a GPS satellite tracker on the shell of the endangered sea ______ to study its Pacific route.",
    "options": [
      "goose",
      "hen",
      "turtle",
      "duck"
    ],
    "answer": 2,
    "cn": "海洋生物學家在瀕危海龜的外殼上安裝了GPS衛星定位追蹤器，用以研究牠橫越太平洋的路線。 【選項解析】(A) goose 鵝  (B) turtle 海龜  (C) hen 母雞  (D) duck 鴨子。satellite tracker on shell of sea turtle（海龜殼上的衛星追蹤器）。",
    "vocabIndex": 5
  },
  {
    "q": "The noisy yellow ______ waddled across the muddy farm trail and splashed happily into the rain puddle.",
    "options": [
      "whale",
      "shark",
      "dolphin",
      "duck"
    ],
    "answer": 3,
    "cn": "這隻吵鬧的黃色小鴨搖搖擺擺地走過泥濘農場小徑，並歡快地啪嗒一聲跳進了雨水窪裡。 【選項解析】(A) whale 鯨魚  (B) shark 鯊魚  (C) duck 鴨子  (D) dolphin 海豚。yellow duck waddled and splashed（搖擺跳進水窪的黃色鴨子）。",
    "vocabIndex": 6
  },
  {
    "q": "In the fairy tale story, the awkward gray bird transformed miraculously into a magnificent white ______.",
    "options": [
      "shrimp",
      "swan",
      "hen",
      "crab"
    ],
    "answer": 1,
    "cn": "在童話故事當中，那隻笨拙醜陋的灰色小鳥奇蹟般地蛻變成為了一隻優雅美麗的白天鵝。 【選項解析】(A) shrimp 蝦子  (B) crab 螃蟹  (C) hen 母雞  (D) swan 天鵝。ugly bird turned into white swan（醜小鴨變白天鵝）。",
    "vocabIndex": 8
  },
  {
    "q": "The backyard coop houses twenty healthy brown ______ that lay dozens of organic eggs for our breakfast table.",
    "options": [
      "sharks",
      "whales",
      "hens",
      "dolphins"
    ],
    "answer": 2,
    "cn": "後院的雞舍裡飼養了二十隻健康的褐色母雞，為我們的早餐餐桌產下數打優質有機雞蛋。 【選項解析】(A) hens 母雞  (B) whales 鯨魚  (C) sharks 鯊魚  (D) dolphins 海豚。hens lay organic eggs（母雞產有機蛋）。",
    "vocabIndex": 9
  },
  {
    "q": "As autumn arrived in the north, a large flock of wild ______ honked loudly while flying south toward warmer climates.",
    "options": [
      "shrimp",
      "geese",
      "crabs",
      "sharks"
    ],
    "answer": 1,
    "cn": "北方入秋之際，一大群野鵝在上空大聲鳴叫，成群結隊地往南方溫暖的氣候展翅遷徙。 【選項解析】(A) shrimp 蝦子  (B) geese 野鵝/野雁（複數）  (C) crabs 螃蟹  (D) sharks 鯊魚。flock of wild geese fly south（野鵝/雁群向南飛）。",
    "vocabIndex": 7
  },
  {
    "q": "Snorkelers near the coral reef were amazed when a friendly ______ approached them and clicked curiously.",
    "options": [
      "turtle",
      "hen",
      "duck",
      "dolphin"
    ],
    "answer": 3,
    "cn": "在珊瑚礁附近浮潛的遊客驚喜不已，因為一隻友善的海豚主動游近他們身旁並好奇地發出喀嗒聲。 【選項解析】(A) turtle 海龜  (B) hen 母雞  (C) dolphin 海豚  (D) duck 鴨子。friendly dolphin clicked（發出喀嗒回聲定位聲的海豚）。",
    "vocabIndex": 0
  },
  {
    "q": "Watch your bare toes while walking along the rocky tide pools, or a pinching ______ might snap at your feet.",
    "options": [
      "crab",
      "whale",
      "hen",
      "swan"
    ],
    "answer": 0,
    "cn": "赤腳走過多石的潮間帶水坑時要當心，否則夾人很痛的螃蟹可能會朝著你的雙腳狠狠夾上一把。 【選項解析】(A) swan 天鵝  (B) whale 鯨魚  (C) hen 母雞  (D) crab 螃蟹。pinching crab snaps at feet（夾人的螃蟹）。",
    "vocabIndex": 4
  },
  {
    "q": "The giant humpback ______ breached high above the ocean surface, creating a colossal splash seen from miles away.",
    "options": [
      "duck",
      "whale",
      "shrimp",
      "hen"
    ],
    "answer": 1,
    "cn": "龐大的座頭鯨高高躍出大洋水面，激起數英里外都能看見的滔天巨大水花。 【選項解析】(A) whale 鯨魚  (B) duck 鴨子  (C) shrimp 蝦子  (D) hen 母雞。humpback whale breached（座頭鯨躍出水面）。",
    "vocabIndex": 1
  },
  {
    "q": "The old giant tortoises and freshwater ______ can often live for more than one hundred years in peaceful habitats.",
    "options": [
      "sharks",
      "geese",
      "dolphins",
      "turtles"
    ],
    "answer": 3,
    "cn": "古老的象龜與淡水陸龜在安寧與不受打擾的天然棲息地中，往往能夠存活超過一百歲以上。 【選項解析】(A) sharks 鯊魚  (B) turtles 烏龜  (C) dolphins 海豚  (D) geese 鵝。tortoises and turtles live 100+ years（龜類長壽百歲）。",
    "vocabIndex": 5
  },
  {
    "q": "Many species of pelagic ______ have multiple rows of razor-sharp teeth that continuously regenerate throughout their lives.",
    "options": [
      "sharks",
      "swans",
      "ducks",
      "hens"
    ],
    "answer": 0,
    "cn": "許多種遠洋鯊魚都擁有多排如剃刀般鋒利的牙齒，並且在一生當中持續不斷地脫落與再生。 【選項解析】(A) ducks 鴨子  (B) swans 天鵝  (C) sharks 鯊魚  (D) hens 母雞。pelagic sharks with sharp teeth（遠洋鯊魚的鋒利再生牙齒）。",
    "vocabIndex": 2
  },
  {
    "q": "Taiwanese night markets are famous for serving crispy fried ______ balls coated in sweet mayonnaise and pineapple chunks.",
    "options": [
      "duck",
      "turtle",
      "shrimp",
      "swan"
    ],
    "answer": 2,
    "cn": "台灣夜市以供應酥脆爽口的鳳梨蝦球聞名，上面淋著甜甜的美乃滋並佐以香甜鳳梨塊。 【選項解析】(A) duck 鴨子  (B) turtle 烏龜  (C) swan 天鵝  (D) shrimp 蝦子。crispy fried shrimp balls（鳳梨蝦球）。",
    "vocabIndex": 3
  },
  {
    "q": "A mother ______ clucked nervously in the grass when a stray farm cat approached too close to her newly hatched chicks.",
    "options": [
      "hen",
      "whale",
      "dolphin",
      "shark"
    ],
    "answer": 0,
    "cn": "當一隻流浪農場貓靠得離剛孵化的幼雛太近時，母雞在草叢中緊張無比地咯咯咕噥叫著保護孩子。 【選項解析】(A) hen 母雞  (B) whale 鯨魚  (C) dolphin 海豚  (D) shark 鯊魚。mother hen clucked to protect chicks（母雞咯咯叫保護小雞）。",
    "vocabIndex": 9
  },
  {
    "q": "Two elegant white ______ mated for life and floated serenely across the palace fountain in the public garden.",
    "options": [
      "crabs",
      "sharks",
      "turtles",
      "swans"
    ],
    "answer": 3,
    "cn": "兩隻優雅的白天鵝終生相伴為偶，在公園皇宮噴泉池中安詳愜意地並肩飄行。 【選項解析】(A) crabs 螃蟹  (B) swans 天鵝  (C) turtles 烏龜  (D) sharks 鯊魚。elegant white swans mate for life（終生相伴的白天鵝）。",
    "vocabIndex": 8
  },
  {
    "q": "Children threw dry bread crumbs into the pond water, watching the hungry ______ paddle their webbed feet quickly.",
    "options": [
      "sharks",
      "ducks",
      "whales",
      "crabs"
    ],
    "answer": 1,
    "cn": "孩子們將乾麵包屑扔進池塘水中，看著飢餓的鴨群迅速划動牠們帶蹼的雙腳前來爭食。 【選項解析】(A) sharks 鯊魚  (B) whales 鯨魚  (C) ducks 鴨子  (D) crabs 螃蟹。ducks paddle webbed feet（鴨子划動蹼足）。",
    "vocabIndex": 6
  },
  {
    "q": "The aggressive domestic ______ hissed loudly at the postman and chased him all the way to the garden gate.",
    "options": [
      "dolphin",
      "shrimp",
      "goose",
      "turtle"
    ],
    "answer": 2,
    "cn": "這隻脾氣兇悍的看門鵝對著郵差大聲發出嘶嘶威嚇聲，一路將他追趕到了花園大門口。 【選項解析】(A) dolphin 海豚  (B) shrimp 蝦子  (C) turtle 烏龜  (D) goose 鵝。domestic goose hissed and chased（看門鵝嘶嘶叫追人）。",
    "vocabIndex": 7
  },
  {
    "q": "With its streamlined body and clever playful nature, the bottlenose ______ is widely loved by children worldwide.",
    "options": [
      "duck",
      "hen",
      "crab",
      "dolphin"
    ],
    "answer": 3,
    "cn": "憑藉其流線型的身軀與聰明貪玩的天性，瓶鼻海豚受到全世界兒童的廣泛喜愛。 【選項解析】(A) dolphin 海豚  (B) hen 母雞  (C) crab 螃蟹  (D) duck 鴨子。bottlenose dolphin（瓶鼻海豚）。",
    "vocabIndex": 0
  },
  {
    "q": "The protective mother sea ______ spends hours digging an egg chamber high above the high-tide watermark.",
    "options": [
      "shark",
      "turtle",
      "swan",
      "whale"
    ],
    "answer": 1,
    "cn": "保護後代的海龜媽媽在遠高於高潮線的沙灘高處，耗費數小時挖掘產卵土穴。 【選項解析】(A) shark 鯊魚  (B) turtle 海龜  (C) swan 天鵝  (D) whale 鯨魚。mother sea turtle digs egg chamber（海龜媽媽挖沙產卵）。",
    "vocabIndex": 5
  },
  {
    "q": "The ocean expedition used an underwater steel cage so researchers could safely observe a fierce tiger ______.",
    "options": [
      "duck",
      "hen",
      "shark",
      "goose"
    ],
    "answer": 2,
    "cn": "海洋探險隊使用了水下防護鋼籠，使研究人員能夠在安全保障下近距離觀察兇猛的虎鯊。 【選項解析】(A) duck 鴨子  (B) hen 母雞  (C) shark 鯊魚  (D) goose 鵝。underwater steel cage to observe tiger shark（鋼籠觀察虎鯊）。",
    "vocabIndex": 2
  },
  {
    "q": "A bowl of savory seafood porridge topped with boiled ______ and sweet ginger is a classic Taiwanese breakfast dish.",
    "options": [
      "shrimp",
      "whale",
      "turtle",
      "swan"
    ],
    "answer": 0,
    "cn": "一碗鋪滿水煮蝦子與鮮甜薑絲的美味海鮮粥，是台灣最道地經典的美味早餐之一。 【選項解析】(A) swan 天鵝  (B) whale 鯨魚  (C) turtle 烏龜  (D) shrimp 蝦子。seafood porridge topped with boiled shrimp（鮮蝦海鮮粥）。",
    "vocabIndex": 3
  },
  {
    "q": "When the rooster crowed at dawn, the speckled ______ hopped down from her wooden roost and searched for worms.",
    "options": [
      "shark",
      "dolphin",
      "hen",
      "whale"
    ],
    "answer": 2,
    "cn": "破曉時分公雞啼鳴時，這隻斑點母雞便從木製棲架上跳了下來，在泥土中尋找小蟲食用。 【選項解析】(A) hen 母雞  (B) dolphin 海豚  (C) shark 鯊魚  (D) whale 鯨魚。speckled hen hopped down（斑點母雞跳下棲架）。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "dolphin": {
    "pos": "n.",
    "en_def": "a highly intelligent sea mammal with a curved beak and blowhole",
    "cn_def": "海豚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a highly intelligent sea mammal with a curved beak and blowhole",
        "cn_def": "海豚"
      }
    ]
  },
  "whale": {
    "pos": "n.",
    "en_def": "a very large sea mammal that breathes air through a blowhole",
    "cn_def": "鯨魚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very large sea mammal that breathes air through a blowhole",
        "cn_def": "鯨魚"
      }
    ]
  },
  "shark": {
    "pos": "n.",
    "en_def": "a large predatory fish with sharp teeth and a prominent dorsal fin",
    "cn_def": "鯊魚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large predatory fish with sharp teeth and a prominent dorsal fin",
        "cn_def": "鯊魚"
      }
    ]
  },
  "shrimp": {
    "pos": "n.",
    "en_def": "a small edible sea creature with a soft shell and long legs",
    "cn_def": "蝦子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small edible sea creature with a soft shell and long legs",
        "cn_def": "蝦子"
      }
    ]
  },
  "crab": {
    "pos": "n.",
    "en_def": "a sea creature with a hard flat shell and ten legs, including two large pincers",
    "cn_def": "螃蟹",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sea creature with a hard flat shell and ten legs, including two large pincers",
        "cn_def": "螃蟹"
      }
    ]
  },
  "turtle": {
    "pos": "n.",
    "en_def": "a slow-moving reptile with a hard bony shell protecting its body",
    "cn_def": "烏龜；海龜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a slow-moving reptile with a hard bony shell protecting its body",
        "cn_def": "烏龜；海龜"
      }
    ]
  },
  "duck": {
    "pos": "n.",
    "en_def": "a common water bird with webbed feet and a broad flat beak",
    "cn_def": "鴨子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a common water bird with webbed feet and a broad flat beak",
        "cn_def": "鴨子"
      }
    ]
  },
  "goose": {
    "pos": "n.",
    "en_def": "a large water bird with a long neck, larger than a duck",
    "cn_def": "鵝（複數為 geese）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large water bird with a long neck, larger than a duck",
        "cn_def": "鵝（複數為 geese）"
      }
    ]
  },
  "swan": {
    "pos": "n.",
    "en_def": "a large graceful water bird with long neck and white feathers",
    "cn_def": "天鵝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large graceful water bird with long neck and white feathers",
        "cn_def": "天鵝"
      }
    ]
  },
  "hen": {
    "pos": "n.",
    "en_def": "an adult female chicken kept for producing eggs or meat",
    "cn_def": "母雞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an adult female chicken kept for producing eggs or meat",
        "cn_def": "母雞"
      }
    ]
  },
  "sharks": {
    "pos": "",
    "en_def": "",
    "cn_def": "鯊魚",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鯊魚"
      }
    ]
  },
  "whales": {
    "pos": "",
    "en_def": "",
    "cn_def": "鯨魚",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鯨魚"
      }
    ]
  },
  "hens": {
    "pos": "",
    "en_def": "",
    "cn_def": "母雞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "母雞"
      }
    ]
  },
  "dolphins": {
    "pos": "",
    "en_def": "",
    "cn_def": "海豚",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "海豚"
      }
    ]
  },
  "geese": {
    "pos": "",
    "en_def": "",
    "cn_def": "野鵝/野雁（複數）",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "野鵝/野雁（複數）"
      }
    ]
  },
  "crabs": {
    "pos": "",
    "en_def": "",
    "cn_def": "螃蟹",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "螃蟹"
      }
    ]
  },
  "turtles": {
    "pos": "",
    "en_def": "",
    "cn_def": "烏龜",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "烏龜"
      }
    ]
  },
  "swans": {
    "pos": "",
    "en_def": "",
    "cn_def": "天鵝",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "天鵝"
      }
    ]
  },
  "ducks": {
    "pos": "",
    "en_def": "",
    "cn_def": "鴨子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鴨子"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
