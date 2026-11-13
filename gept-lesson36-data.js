// Lesson 36 Quiz Data: Wild Animals, Forest Creatures & Zoo Mammals
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 36 - Wild Animals, Forest Creatures & Zoo Mammals",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "turkey",
    "pos": "n.",
    "cn_def": "火雞",
    "en_def": "a large American bird with naked head and tail feathers, eaten as food",
    "sentence": "American families traditionally roast a large stuffed {{BLANK}} for dinner on Thanksgiving Day every November.",
    "cn": "美國家庭傳統上在每年十一月的感恩節晚餐時，都會烤一隻碩大且塞滿餡料的火雞。"
  },
  {
    "word": "frog",
    "pos": "n.",
    "cn_def": "青蛙",
    "en_def": "a tailless amphibious creature with long legs for jumping and a croak",
    "sentence": "A small green {{BLANK}} hopped quickly off the broad lily pad into the pond when a snake came near.",
    "cn": "當一條蛇靠近時，一隻綠色小青蛙迅速從寬大的荷葉上跳進了池塘裡。"
  },
  {
    "word": "kangaroo",
    "pos": "n.",
    "cn_def": "袋鼠",
    "en_def": "a large Australian herbivore that moves by leaping with strong hind legs",
    "sentence": "An Australian mother {{BLANK}} carried her tiny baby inside her front pouch while hopping across the dry grassy plains.",
    "cn": "一隻澳洲袋鼠媽媽在乾草平原上跳躍前進時，在前腹的育兒袋裡懷抱著她的小寶寶。"
  },
  {
    "word": "wolves",
    "pos": "n.",
    "cn_def": "狼（複數為 wolves）",
    "en_def": "a wild predatory canine that hunts cooperatively in a pack",
    "sentence": "On freezing winter nights, a hungry pack of gray {{BLANK}} howled eerily at the full moon across the snowy valley.",
    "cn": "在酷寒的冬夜裡，一群飢餓的灰狼隔著積雪覆蓋的山谷，對著滿月發出令人毛骨悚然的嚎叫。"
  },
  {
    "word": "fox",
    "pos": "n.",
    "cn_def": "狐狸",
    "en_def": "a small carnivorous canine with a bushy tail and a clever, sneaky reputation",
    "sentence": "A clever red {{BLANK}} stole silently into the chicken coop after midnight and caught two fat roosting hens.",
    "cn": "一隻聰明伶俐的紅狐狸在半夜悄悄溜進雞舍，抓走了兩隻肥胖停棲的母雞。"
  },
  {
    "word": "panda",
    "pos": "n.",
    "cn_def": "熊貓；大貓熊",
    "en_def": "a large black-and-white bear native to China that feeds on bamboo",
    "sentence": "The chubby giant {{BLANK}} sat quietly on the grassy zoo lawn, munching happily on fresh green bamboo stalks.",
    "cn": "圓滾滾的大貓熊安靜地坐在動物園的草坪上，津津有味地大口啃食著新鮮翠綠的竹莖。"
  },
  {
    "word": "koala",
    "pos": "n.",
    "cn_def": "無尾熊",
    "en_def": "an Australian tree-dwelling marsupial with gray fur that eats eucalyptus leaves",
    "sentence": "A sleepy gray {{BLANK}} clung tightly to the tall eucalyptus tree branch and dozed peacefully under the warm sun.",
    "cn": "一隻睡眼惺忪的灰色無尾熊緊緊抱住高高的尤加利樹枝，在溫暖的陽光下安詳打盹。"
  },
  {
    "word": "donkey",
    "pos": "n.",
    "cn_def": "驢子",
    "en_def": "a domesticated hoofed mammal related to the horse, with long ears",
    "sentence": "The stubborn brown {{BLANK}} refused to move forward along the steep mountain path until the farmer offered it a juicy apple.",
    "cn": "那隻頑固的褐色驢子拒絕沿著陡峭山徑往前走，直到農夫遞給牠一顆多汁的蘋果才肯邁步。"
  },
  {
    "word": "zebra",
    "pos": "n.",
    "cn_def": "斑馬",
    "en_def": "an African wild horse with distinct black and white vertical stripes",
    "sentence": "A herd of African {{BLANK}}s stood close together near the waterhole, their black and white stripes confusing watching predators.",
    "cn": "一群非洲斑馬在水坑邊緊緊聚集在一起，牠們的黑白條紋讓伺機而動的掠食者眼花撩亂。"
  },
  {
    "word": "hippopotamus",
    "pos": "n.",
    "cn_def": "河馬",
    "en_def": "a huge thick-skinned African mammal that lives mostly in rivers",
    "sentence": "The massive gray {{BLANK}} submerged its heavy body in the muddy river, keeping only its eyes and nostrils above water.",
    "cn": "龐大的灰色河馬將沉重的身軀浸泡在泥濘的河水中，僅僅把眼睛和鼻孔露出水面。"
  }
];

const MCQS = [
  {
    "q": "During the traditional Thanksgiving feast, grandmother carved the golden roasted ______ with a sharp carving knife.",
    "options": [
      "turkey",
      "koala",
      "panda",
      "donkey"
    ],
    "answer": 0,
    "cn": "在傳統的感恩節大餐期間，祖母用一把鋒利的切肉刀將烤得金黃酥脆的火雞切片分食。 【選項解析】(A) turkey 火雞  (B) koala 無尾熊  (C) panda 貓熊  (D) donkey 驢子。Thanksgiving golden roasted turkey（感恩節烤火雞）。",
    "vocabIndex": 0
  },
  {
    "q": "The mother ______ in the Australian bush carries her tiny joey securely inside her warm abdominal pouch.",
    "options": [
      "frog",
      "kangaroo",
      "wolf",
      "zebra"
    ],
    "answer": 1,
    "cn": "在澳洲叢林裡的袋鼠媽媽，將幼小的袋鼠寶寶安全無虞地懷抱在溫暖的前腹育兒袋中。 【選項解析】(A) frog 青蛙  (B) kangaroo 袋鼠  (C) wolf 狼  (D) zebra 斑馬。Australian mother kangaroo with pouch（有育兒袋的澳洲袋鼠）。",
    "vocabIndex": 2
  },
  {
    "q": "On stormy winter nights in the dense pine forest, a lone gray ______ howled mournfully into the freezing wind.",
    "options": [
      "donkey",
      "turkey",
      "panda",
      "wolf"
    ],
    "answer": 3,
    "cn": "在茂密松樹林暴風雨肆虐的冬夜裡，一隻孤獨的灰狼對著刺骨寒風發出了悲涼的長嚎。 【選項解析】(A) donkey 驢子  (B) turkey 火雞  (C) wolf 狼  (D) panda 貓熊。gray wolf howled mournfully（灰狼悲涼嚎叫）。",
    "vocabIndex": 3
  },
  {
    "q": "A sly red ______ with a magnificent bushy tail crept stealthily through the tall grass toward the duck pond.",
    "options": [
      "hippopotamus",
      "frog",
      "fox",
      "zebra"
    ],
    "answer": 2,
    "cn": "一隻擁有美麗濃密蓬鬆尾巴的狡黠紅狐狸，悄悄穿過高高的草叢向著野鴨池塘潛行。 【選項解析】(A) hippopotamus 河馬  (B) frog 青蛙  (C) zebra 斑馬  (D) fox 狐狸。sly red fox with bushy tail（蓬鬆尾巴的狡猾紅狐）。",
    "vocabIndex": 4
  },
  {
    "q": "Visitors to the Taipei Zoo lined up for hours just to catch a glimpse of the playful baby ______ playing with a tire.",
    "options": [
      "donkey",
      "panda",
      "turkey",
      "wolf"
    ],
    "answer": 1,
    "cn": "前來台北市立動物園的遊客排隊數小時，只為一睹那隻正在跟輪胎玩耍的調皮貓熊寶寶。 【選項解析】(A) panda 貓熊  (B) donkey 驢子  (C) turkey 火雞  (D) wolf 狼。Taipei Zoo baby panda（台北動物園貓熊寶寶）。",
    "vocabIndex": 5
  },
  {
    "q": "Native only to eastern Australia, the gentle furry ______ sleeps up to twenty hours each day high in eucalyptus branches.",
    "options": [
      "frog",
      "zebra",
      "wolf",
      "koala"
    ],
    "answer": 3,
    "cn": "僅產於澳洲東部的溫和毛茸茸無尾熊，每天在高高的尤加利樹枝上沉睡長達二十小時。 【選項解析】(A) frog 青蛙  (B) koala 無尾熊  (C) wolf 狼  (D) zebra 斑馬。sleeps 20 hours in eucalyptus branches（在尤加利樹上睡20小時的無尾熊）。",
    "vocabIndex": 6
  },
  {
    "q": "The hardworking pack ______ carried two heavy baskets of fresh mountain tea down the steep rocky steps patiently.",
    "options": [
      "donkey",
      "fox",
      "kangaroo",
      "panda"
    ],
    "answer": 0,
    "cn": "這隻任勞任怨的馱運驢子耐心地馱著兩大簍新鮮高山茶葉，一步一步走下陡峭多石的階梯。 【選項解析】(A) kangaroo 袋鼠  (B) fox 狐狸  (C) donkey 驢子  (D) panda 貓熊。pack donkey carried baskets（馱著籮筐的驢子）。",
    "vocabIndex": 7
  },
  {
    "q": "Predators find it difficult to target an individual ______ because the herd's dazzling striped coats create visual confusion.",
    "options": [
      "turkey",
      "koala",
      "zebra",
      "frog"
    ],
    "answer": 2,
    "cn": "掠食肉食動物很難單獨鎖定單隻斑馬，因為斑馬群耀眼的黑白條紋會在視覺上產生極大困惑。 【選項解析】(A) turkey 火雞  (B) koala 無尾熊  (C) frog 青蛙  (D) zebra 斑馬。striped coats of zebras（斑馬的黑白條紋外衣）。",
    "vocabIndex": 8
  },
  {
    "q": "The giant river ______ opened its enormous pink jaws wide to warn a rival male to stay away from its territory.",
    "options": [
      "donkey",
      "hippopotamus",
      "fox",
      "kangaroo"
    ],
    "answer": 1,
    "cn": "龐大的巨大河馬大大張開牠粉紅色的大嘴，警告與其競爭的雄性個體遠離其領域範圍。 【選項解析】(A) hippopotamus 河馬  (B) donkey 驢子  (C) fox 狐狸  (D) kangaroo 袋鼠。hippopotamus opened pink jaws wide（河馬大張血盆大口）。",
    "vocabIndex": 9
  },
  {
    "q": "The tiny tree ______ has sticky suction cups on its toes that allow it to climb smooth green plant leaves effortlessly.",
    "options": [
      "frog",
      "turkey",
      "wolf",
      "panda"
    ],
    "answer": 0,
    "cn": "這隻微小的樹蛙腳趾上具備黏性吸盤，使牠能夠毫不費力地攀爬光滑翠綠的植物葉面。 【選項解析】(A) turkey 火雞  (B) frog 青蛙/樹蛙  (C) wolf 狼  (D) panda 貓熊。tree frog with suction cups（帶吸盤腳趾的樹蛙）。",
    "vocabIndex": 1
  },
  {
    "q": "In the fable of Little Red Riding Hood, the deceptive ______ disguises itself in grandmother's nightgown.",
    "options": [
      "koala",
      "zebra",
      "wolf",
      "donkey"
    ],
    "answer": 2,
    "cn": "在小紅帽的童話寓言中，狡詐奸巧的大野狼穿上了祖母的睡袍偽裝成老奶奶騙人。 【選項解析】(A) koala 無尾熊  (B) zebra 斑馬  (C) wolf 大野狼  (D) donkey 驢子。Little Red Riding Hood, deceptive wolf（小紅帽與大野狼）。",
    "vocabIndex": 3
  },
  {
    "q": "Farmers often complain when a wild ______ sneaks into the orchard at night and damages low-hanging fruit trees.",
    "options": [
      "kangaroo",
      "hippopotamus",
      "turkey",
      "fox"
    ],
    "answer": 3,
    "cn": "當野狐狸半夜潛入果園並損壞低垂的果樹時，果農們往往忍不住抱怨連連。 【選項解析】(A) kangaroo 袋鼠  (B) hippopotamus 河馬  (C) turkey 火雞  (D) fox 狐狸。wild fox sneaks into orchard（野狐狸溜進果園）。",
    "vocabIndex": 4
  },
  {
    "q": "Because an adult ______ eats almost exclusively bamboo shoots and leaves, habitat preservation is vital for its survival.",
    "options": [
      "panda",
      "wolf",
      "donkey",
      "frog"
    ],
    "answer": 0,
    "cn": "因為成年大貓熊幾乎完全以竹筍與竹葉為食，因此保護其天然棲息地對其存續至關重要。 【選項解析】(A) panda 貓熊  (B) wolf 狼  (C) donkey 驢子  (D) frog 青蛙。eats exclusively bamboo（專吃竹子的大貓熊）。",
    "vocabIndex": 5
  },
  {
    "q": "A mother ______ resting in a tree fork will fiercely protect her offspring if an eagle circles too close overhead.",
    "options": [
      "zebra",
      "wolf",
      "turkey",
      "koala"
    ],
    "answer": 3,
    "cn": "在尤加利樹椏上休息的無尾熊媽媽，如果發現老鷹在上空盤旋得太近，會拼死保護幼崽。 【選項解析】(A) zebra 斑馬  (B) koala 無尾熊  (C) turkey 火雞  (D) wolf 狼。mother koala in tree fork（樹杈上的無尾熊媽媽）。",
    "vocabIndex": 6
  },
  {
    "q": "Sancho Panza rode a humble gray ______ beside Don Quixote's skinny horse during their chivalric adventures in Spain.",
    "options": [
      "kangaroo",
      "donkey",
      "fox",
      "hippopotamus"
    ],
    "answer": 1,
    "cn": "桑丘·潘薩騎著一頭謙遜樸實的灰驢子，在西班牙的騎士冒險旅程中緊跟在唐吉訶德身後。 【選項解析】(A) kangaroo 袋鼠  (B) fox 狐狸  (C) donkey 驢子  (D) hippopotamus 河馬。Sancho Panza rode a donkey（桑丘騎著灰驢子）。",
    "vocabIndex": 7
  },
  {
    "q": "As the safari jeep drove across the Serengeti, passengers watched hundreds of ______ grazing peacefully alongside antelopes.",
    "options": [
      "turkeys",
      "wolves",
      "zebras",
      "frogs"
    ],
    "answer": 2,
    "cn": "當野生動物觀光吉普車行駛過塞倫蓋提大草原時，遊客們看見數百隻斑馬與羚羊和睦並肩吃草。 【選項解析】(A) turkeys 火雞  (B) wolves 狼  (C) frogs 青蛙  (D) zebras 斑馬。zebras grazing in Serengeti（塞倫蓋提草原上的斑馬群）。",
    "vocabIndex": 8
  },
  {
    "q": "Although the bulky ______ looks slow and docile, it can run surprisingly fast on land and is extremely dangerous.",
    "options": [
      "hippopotamus",
      "koala",
      "donkey",
      "panda"
    ],
    "answer": 0,
    "cn": "雖然笨重粗壯的河馬看起來既緩慢又溫順，但牠在陸地上奔跑速度驚人且極具攻擊危險性。 【選項解析】(A) hippopotamus 河馬  (B) koala 無尾熊  (C) donkey 驢子  (D) panda 貓熊。bulky hippopotamus runs fast on land（陸地上奔跑迅速的笨重河馬）。",
    "vocabIndex": 9
  },
  {
    "q": "In springtime, the male ______ croaks loudly from the reeds along the lake edge to attract a breeding mate.",
    "options": [
      "wolf",
      "zebra",
      "turkey",
      "frog"
    ],
    "answer": 3,
    "cn": "春天時節，雄蛙在湖畔邊的蘆葦叢中大聲呱呱啼鳴，以吸引雌性個體前來交配繁殖。 【選項解析】(A) wolf 狼  (B) frog 青蛙  (C) turkey 火雞  (D) zebra 斑馬。male frog croaks in reeds（雄青蛙在蘆葦中啼鳴）。",
    "vocabIndex": 1
  },
  {
    "q": "Native American legends often portray the cunning ______ as a master trickster who uses clever wits to survive.",
    "options": [
      "koala",
      "donkey",
      "fox",
      "hippopotamus"
    ],
    "answer": 2,
    "cn": "美洲原住民的傳說往往將狡黠的狐狸描繪為足智多謀的惡作劇大師，善用過人機智生存。 【選項解析】(A) koala 無尾熊  (B) donkey 驢子  (C) fox 狐狸  (D) hippopotamus 河馬。cunning fox as trickster（狡猾機靈的狐狸）。",
    "vocabIndex": 4
  },
  {
    "q": "The large wild ______ ruffled its colorful feathers and puffed out its chest in a proud courtship display.",
    "options": [
      "kangaroo",
      "turkey",
      "zebra",
      "panda"
    ],
    "answer": 1,
    "cn": "這隻大型野生雄火雞抖動著牠色彩繽紛的羽毛，驕傲地挺起胸膛展現其求偶展示。 【選項解析】(A) kangaroo 袋鼠  (B) panda 貓熊  (C) zebra 斑馬  (D) turkey 火雞。wild turkey ruffled feathers（野生火雞抖動羽毛求偶）。",
    "vocabIndex": 0
  },
  {
    "q": "A powerful pack of arctic ______ will travel dozens of miles across barren icy terrain in pursuit of caribou herds.",
    "options": [
      "wolves",
      "koalas",
      "donkeys",
      "pandas"
    ],
    "answer": 0,
    "cn": "一群強大的北極狼會在貧瘠荒蕪的冰原上跋涉數十英里，不知疲倦地追擊著馴鹿群。 【選項解析】(A) wolves 狼群  (B) koalas 無尾熊  (C) donkeys 驢子  (D) pandas 貓熊。pack of arctic wolves hunt caribou（北極狼群捕食馴鹿）。",
    "vocabIndex": 3
  },
  {
    "q": "Tourists visiting wildlife sanctuaries in Brisbane love having their photos taken while holding a placid little ______.",
    "options": [
      "wolf",
      "koala",
      "hippopotamus",
      "zebra"
    ],
    "answer": 1,
    "cn": "參訪布里斯本野生動物保護區的遊客，最喜歡在抱著溫馴安靜的小無尾熊時合影留念。 【選項解析】(A) wolf 狼  (B) koala 無尾熊  (C) hippopotamus 河馬  (D) zebra 斑馬。holding a placid koala（抱著溫順的無尾熊拍照）。",
    "vocabIndex": 6
  },
  {
    "q": "The old man placed a woven straw blanket over the back of his tired ______ to keep it warm in the cold stable.",
    "options": [
      "kangaroo",
      "fox",
      "panda",
      "donkey"
    ],
    "answer": 3,
    "cn": "老先生將一條編織草毯蓋在他疲憊的驢子背上，讓牠在寒冷的馬廄中保持溫暖。 【選項解析】(A) kangaroo 袋鼠  (B) fox 狐狸  (C) donkey 驢子  (D) panda 貓熊。blanket on tired donkey（老驢子背上的草毯）。",
    "vocabIndex": 7
  },
  {
    "q": "The newborn ______ took its first wobbly steps on thin spindly legs while its mother licked its black and white coat.",
    "options": [
      "turkey",
      "frog",
      "zebra",
      "wolf"
    ],
    "answer": 2,
    "cn": "剛出生的初生小斑馬用細弱搖晃的腿邁出最初的步伐，而牠的母親在一旁舔拭著牠的黑白斑紋。 【選項解析】(A) turkey 火雞  (B) frog 青蛙  (C) wolf 狼  (D) zebra 斑馬。newborn zebra with black and white coat（初生小斑馬）。",
    "vocabIndex": 8
  },
  {
    "q": "During the intense midday heat, the entire family of ______ stayed completely submerged in the cool river shallows.",
    "options": [
      "kangaroos",
      "foxes",
      "turkeys",
      "hippopotamuses"
    ],
    "answer": 3,
    "cn": "在正午酷熱難耐的烈日高照下，整群河馬家庭完全浸泡在清涼的河水淺灘中消暑。 【選項解析】(A) hippopotamuses 河馬群  (B) foxes 狐狸  (C) turkeys 火雞  (D) kangaroos 袋鼠。family of hippopotamuses submerged（浸泡水中的河馬家族）。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "turkey": {
    "pos": "n.",
    "en_def": "a large American bird with naked head and tail feathers, eaten as food",
    "cn_def": "火雞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large American bird with naked head and tail feathers, eaten as food",
        "cn_def": "火雞"
      }
    ]
  },
  "frog": {
    "pos": "n.",
    "en_def": "a tailless amphibious creature with long legs for jumping and a croak",
    "cn_def": "青蛙",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tailless amphibious creature with long legs for jumping and a croak",
        "cn_def": "青蛙"
      }
    ]
  },
  "kangaroo": {
    "pos": "n.",
    "en_def": "a large Australian herbivore that moves by leaping with strong hind legs",
    "cn_def": "袋鼠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large Australian herbivore that moves by leaping with strong hind legs",
        "cn_def": "袋鼠"
      }
    ]
  },
  "wolf": {
    "pos": "n.",
    "en_def": "a wild predatory canine that hunts cooperatively in a pack",
    "cn_def": "狼（複數為 wolves）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a wild predatory canine that hunts cooperatively in a pack",
        "cn_def": "狼（複數為 wolves）"
      }
    ]
  },
  "fox": {
    "pos": "n.",
    "en_def": "a small carnivorous canine with a bushy tail and a clever, sneaky reputation",
    "cn_def": "狐狸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small carnivorous canine with a bushy tail and a clever, sneaky reputation",
        "cn_def": "狐狸"
      }
    ]
  },
  "panda": {
    "pos": "n.",
    "en_def": "a large black-and-white bear native to China that feeds on bamboo",
    "cn_def": "熊貓；大貓熊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large black-and-white bear native to China that feeds on bamboo",
        "cn_def": "熊貓；大貓熊"
      }
    ]
  },
  "koala": {
    "pos": "n.",
    "en_def": "an Australian tree-dwelling marsupial with gray fur that eats eucalyptus leaves",
    "cn_def": "無尾熊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an Australian tree-dwelling marsupial with gray fur that eats eucalyptus leaves",
        "cn_def": "無尾熊"
      }
    ]
  },
  "donkey": {
    "pos": "n.",
    "en_def": "a domesticated hoofed mammal related to the horse, with long ears",
    "cn_def": "驢子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a domesticated hoofed mammal related to the horse, with long ears",
        "cn_def": "驢子"
      }
    ]
  },
  "zebra": {
    "pos": "n.",
    "en_def": "an African wild horse with distinct black and white vertical stripes",
    "cn_def": "斑馬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an African wild horse with distinct black and white vertical stripes",
        "cn_def": "斑馬"
      }
    ]
  },
  "hippopotamus": {
    "pos": "n.",
    "en_def": "a huge thick-skinned African mammal that lives mostly in rivers",
    "cn_def": "河馬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a huge thick-skinned African mammal that lives mostly in rivers",
        "cn_def": "河馬"
      }
    ]
  },
  "turkeys": {
    "pos": "",
    "en_def": "",
    "cn_def": "火雞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "火雞"
      }
    ]
  },
  "wolves": {
    "pos": "",
    "en_def": "",
    "cn_def": "狼",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狼"
      }
    ]
  },
  "zebras": {
    "pos": "",
    "en_def": "",
    "cn_def": "斑馬",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "斑馬"
      }
    ]
  },
  "frogs": {
    "pos": "",
    "en_def": "",
    "cn_def": "青蛙",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "青蛙"
      }
    ]
  },
  "koalas": {
    "pos": "",
    "en_def": "",
    "cn_def": "無尾熊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "無尾熊"
      }
    ]
  },
  "donkeys": {
    "pos": "",
    "en_def": "",
    "cn_def": "驢子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "驢子"
      }
    ]
  },
  "pandas": {
    "pos": "",
    "en_def": "",
    "cn_def": "貓熊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "貓熊"
      }
    ]
  },
  "kangaroos": {
    "pos": "",
    "en_def": "",
    "cn_def": "袋鼠",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "袋鼠"
      }
    ]
  },
  "foxes": {
    "pos": "",
    "en_def": "",
    "cn_def": "狐狸",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狐狸"
      }
    ]
  },
  "hippopotamuses": {
    "pos": "",
    "en_def": "",
    "cn_def": "河馬群",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "河馬群"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
