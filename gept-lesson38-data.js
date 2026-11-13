// Lesson 38 Quiz Data: Animal Anatomy, Ancient Beasts, Cages & Emotional States
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 38 - Animal Anatomy, Ancient Beasts, Cages & Emotional States",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "tail",
    "pos": "n.",
    "cn_def": "尾巴",
    "en_def": "the flexible rear part extending from an animal's body",
    "sentence": "The joyful puppy wagged its fluffy {{BLANK}} enthusiastically as soon as its owner walked through the front door.",
    "cn": "當主人一踏進前門時，那隻快樂的小狗便興奮熱情地搖動著牠毛茸茸的尾巴。"
  },
  {
    "word": "dragon",
    "pos": "n.",
    "cn_def": "龍",
    "en_def": "a mythical giant reptile often depicted with wings, claws, and breathing fire",
    "sentence": "In ancient Chinese culture, the magnificent golden {{BLANK}} is a sacred symbol of royal power, prosperity, and good luck.",
    "cn": "在古代中國文化當中，雄偉的金龍是象徵皇家權力、繁榮昌盛與吉祥好運的神聖代表。"
  },
  {
    "word": "dinosaur",
    "pos": "n.",
    "cn_def": "恐龍",
    "en_def": "an extinct prehistoric reptile that lived millions of years ago",
    "sentence": "Children at the natural science museum were fascinated by the towering skeleton of a prehistoric carnivorous {{BLANK}}.",
    "cn": "自然科學博物館裡的孩子們，被一具高聳巨大的史前肉食性恐龍骨架深深吸引著。"
  },
  {
    "word": "cage",
    "pos": "n.",
    "cn_def": "籠子；鳥籠",
    "en_def": "a structure made of bars or wire in which animals or birds are kept",
    "sentence": "Animal welfare advocates argue that wild exotic birds should never be kept confined inside a cramped metal {{BLANK}}.",
    "cn": "動物福祉倡導者主張，野生珍禽異鳥絕不應該被終身囚禁在狹窄冰冷的金屬籠子裡。"
  },
  {
    "word": "nest",
    "pos": "n.",
    "cn_def": "鳥巢；窩",
    "en_def": "a structure built by birds or insects to lay eggs and shelter their young",
    "sentence": "High in the oak tree branches, two mother robins carefully constructed a cozy mud and twig {{BLANK}} for their chicks.",
    "cn": "在高高的橡樹枝上，兩隻知更鳥媽媽用泥土和細枝細心築起了一個舒適的鳥巢給牠們的雛鳥。"
  },
  {
    "word": "emotion",
    "pos": "n.",
    "cn_def": "情緒；感情",
    "en_def": "a strong feeling such as joy, sorrow, love, or anger",
    "sentence": "When the Olympic champion stood on the medal podium, she was overwhelmed with strong {{BLANK}} and wept tears of joy.",
    "cn": "當這位奧運冠軍站在獎牌頒獎台上時，她內心湧現出強烈澎湃的情緒，流下了喜悅的淚水。"
  },
  {
    "word": "sense",
    "pos": "n. / v.",
    "cn_def": "感覺；感官；理解力",
    "en_def": "a physical faculty such as sight; a feeling; to perceive",
    "sentence": "Dogs have an extraordinarily sharp {{BLANK}} of smell that allows police officers to track missing people through forests.",
    "cn": "狗狗擁有極為靈敏銳利的嗅覺感官，讓警員能夠循線在森林深處追蹤失蹤人員。"
  },
  {
    "word": "feeling",
    "pos": "n.",
    "cn_def": "感覺；感受",
    "en_def": "an emotional state, physical sensation, or belief",
    "sentence": "I had an uncomfortable gut {{BLANK}} that something was wrong with our itinerary, so I rechecked all plane tickets.",
    "cn": "我心中升起一種隱隱不安的直覺感受，覺得我們的行程安排出了差錯，因此重新核對了所有機票。"
  },
  {
    "word": "asleep",
    "pos": "adj.",
    "cn_def": "睡著的",
    "en_def": "in a state of sleep; not awake",
    "sentence": "Exhausted after studying all night for the biology exam, Jason fell fast {{BLANK}} at his desk with his textbook open.",
    "cn": "為了生物考試徹夜苦讀而筋疲力盡的傑森，攤開著教科書在書桌上沉沉睡著了。"
  },
  {
    "word": "mad",
    "pos": "adj.",
    "cn_def": "生氣的；瘋狂的",
    "en_def": "very angry; insane; wildly enthusiastic",
    "sentence": "Father was extremely {{BLANK}} when he discovered that my brother had broken the garage window with a baseball.",
    "cn": "當父親發現弟弟用棒球打破了車庫窗戶時，他感到極度生氣而暴跳如雷。"
  }
];

const MCQS = [
  {
    "q": "When the veterinarian entered the examination room, the nervous cat puffed up its fur and twitched its long ______.",
    "options": [
      "tail",
      "cage",
      "nest",
      "dragon"
    ],
    "answer": 0,
    "cn": "當獸醫走進診間時，那隻緊張的貓咪豎起了全身的毛，不安地頻頻抽動著長長的尾巴。 【選項解析】(A) tail 尾巴  (B) cage 籠子  (C) nest 巢穴  (D) dragon 龍。twitched long tail（抽動長尾巴）。",
    "vocabIndex": 0
  },
  {
    "q": "Traditional dragon boat racers paddle vigorously under the stern gaze of an ornately carved wooden ______ head.",
    "options": [
      "nest",
      "cage",
      "dinosaur",
      "dragon"
    ],
    "answer": 3,
    "cn": "傳統的龍舟划手們在雕工繁複精美的木雕龍頭威嚴注視下，奮力齊心划槳向前奔馳。 【選項解析】(A) nest 巢  (B) dragon 龍  (C) dinosaur 恐龍  (D) cage 籠子。dragon boat, wooden dragon head（龍舟與雕花龍頭）。",
    "vocabIndex": 1
  },
  {
    "q": "Paleontologists in Argentina excavated the massive fossilized leg bone of a colossal plant-eating ______.",
    "options": [
      "cage",
      "tail",
      "dinosaur",
      "nest"
    ],
    "answer": 2,
    "cn": "阿根廷的古生物學家挖掘出了一具龐大史前植食性巨型恐龍的石化巨大腿骨化石。 【選項解析】(A) cage 籠子  (B) tail 尾巴  (C) dinosaur 恐龍  (D) nest 巢穴。fossilized bone of prehistoric dinosaur（史前恐龍化石骨）。",
    "vocabIndex": 2
  },
  {
    "q": "The zoo keepers gently placed the injured eagle into a padded transport ______ before driving to the animal hospital.",
    "options": [
      "emotion",
      "cage",
      "nest",
      "tail"
    ],
    "answer": 1,
    "cn": "在開車前往動物醫院之前，動物園管理員小心翼翼地將受傷的老鷹安置於鋪有軟墊的運輸籠中。 【選項解析】(A) emotion 情緒  (B) tail 尾巴  (C) nest 鳥巢  (D) cage 運輸籠/籠子。padded transport cage（鋪墊的運輸籠）。",
    "vocabIndex": 3
  },
  {
    "q": "The mother sparrow flew back and forth dozens of times with dry moss to line her newly built ______.",
    "options": [
      "nest",
      "dinosaur",
      "dragon",
      "cage"
    ],
    "answer": 0,
    "cn": "麻雀媽媽叼著乾燥的苔蘚來回飛了數十趟，為她剛搭建好的舒適鳥巢鋪上柔軟的內襯墊料。 【選項解析】(A) nest 鳥巢  (B) dinosaur 恐龍  (C) dragon 龍  (D) cage 籠子。line newly built nest（給新築的鳥巢鋪墊襯物）。",
    "vocabIndex": 4
  },
  {
    "q": "Great actors possess the remarkable ability to convey profound human ______ without speaking a single spoken word.",
    "options": [
      "cage",
      "dinosaur",
      "tail",
      "emotion"
    ],
    "answer": 3,
    "cn": "傑出的偉大演員具備非凡卓越的感染力，即使不發一語也能傳神地傳達出人類深刻細膩的情感。 【選項解析】(A) cage 籠子  (B) emotion 情感  (C) tail 尾巴  (D) dinosaur 恐龍。convey profound human emotion（傳達人類深刻情感）。",
    "vocabIndex": 5
  },
  {
    "q": "Good leaders must have a strong ______ of responsibility, always putting the welfare of their team members first.",
    "options": [
      "tail",
      "nest",
      "sense",
      "cage"
    ],
    "answer": 2,
    "cn": "優秀的領導者必須具備強烈的責任感，始終把團隊成員的福祉與權益放在第一優先位置。 【選項解析】(A) tail 尾巴  (B) nest 窩  (C) sense 意識/感覺  (D) cage 籠子。sense of responsibility（責任感）。",
    "vocabIndex": 6
  },
  {
    "q": "After being betrayed by someone he trusted completely, Samuel was left with a lingering ______ of bitter disappointment.",
    "options": [
      "dragon",
      "feeling",
      "cage",
      "dinosaur"
    ],
    "answer": 1,
    "cn": "在遭到完全信任的人無情背叛之後，塞繆爾心中久久揮之不去一股苦澀失落的心痛感受。 【選項解析】(A) dragon 龍  (B) dinosaur 恐龍  (C) cage 籠子  (D) feeling 感受。lingering feeling of disappointment（久久不散的失落感）。",
    "vocabIndex": 7
  },
  {
    "q": "The bedtime lullaby was so gentle that the crying baby stopped fussing and was sound ______ within minutes.",
    "options": [
      "excellent",
      "mad",
      "asleep",
      "local"
    ],
    "answer": 2,
    "cn": "這首睡前搖籃曲如此溫柔安詳，啼哭的嬰兒停止了吵鬧，在幾分鐘內便安然熟睡了過去。 【選項解析】(A) asleep 熟睡的  (B) mad 生氣的  (C) excellent 優秀的  (D) local 當地的。sound asleep（安然熟睡）。",
    "vocabIndex": 8
  },
  {
    "q": "Mother got furious and terribly ______ when my younger sister spilled red grape juice all over the new white sofa.",
    "options": [
      "mad",
      "asleep",
      "noisy",
      "overseas"
    ],
    "answer": 0,
    "cn": "當我妹妹把紅葡萄汁灑得新白色沙發上到處都是時，媽媽極度生氣且火冒三丈。 【選項解析】(A) asleep 睡著的  (B) mad 抓狂發怒的  (C) noisy 吵鬧的  (D) overseas 海外的。furious and terribly mad（極度憤怒抓狂）。",
    "vocabIndex": 9
  },
  {
    "q": "A peacock fan display occurs when the male bird raises and spreads its iridescent ______ feathers in courtship.",
    "options": [
      "nest",
      "tail",
      "cage",
      "emotion"
    ],
    "answer": 1,
    "cn": "孔雀開屏求偶時，雄鳥會在求偶儀式中豎起並展開牠那泛著彩虹光澤的絢麗長尾羽。 【選項解析】(A) nest 巢  (B) cage 籠  (C) tail 尾羽/尾巴  (D) emotion 情緒。spreads tail feathers（展開尾羽）。",
    "vocabIndex": 0
  },
  {
    "q": "Welsh mythology proudly features a red ______ emblazoned across their historic national green and white flag.",
    "options": [
      "dinosaur",
      "cage",
      "nest",
      "dragon"
    ],
    "answer": 3,
    "cn": "威爾斯的民族神話驕傲地將一條栩栩如生的紅龍徽章，銘刻在他們歷史悠久的綠白國旗中央。 【選項解析】(A) dinosaur 恐龍  (B) cage 籠子  (C) nest 鳥巢  (D) dragon 龍。Welsh red dragon on flag（威爾斯國旗上的紅龍）。",
    "vocabIndex": 1
  },
  {
    "q": "The Tyrannosaurus Rex is undoubtedly the most famous prehistoric carnivorous ______ featured in Hollywood cinema.",
    "options": [
      "tail",
      "cage",
      "dinosaur",
      "nest"
    ],
    "answer": 2,
    "cn": "雷克斯暴龍無疑是好萊塢電影銀幕上所描繪過最家喻戶曉的史前肉食性巨獸恐龍。 【選項解析】(A) dinosaur 恐龍  (B) cage 籠子  (C) tail 尾巴  (D) nest 鳥巢。prehistoric carnivorous dinosaur（史前肉食恐龍）。",
    "vocabIndex": 2
  },
  {
    "q": "It broke the little girl's heart to see the singing canary locked behind the iron bars of an ornamental ______.",
    "options": [
      "tail",
      "dinosaur",
      "nest",
      "cage"
    ],
    "answer": 3,
    "cn": "看著唱歌的金絲雀被鎖在裝飾性金屬鳥籠冰冷的鐵欄杆之後，小女孩感到無比心碎難過。 【選項解析】(A) tail 尾巴  (B) cage 鳥籠/籠子  (C) nest 窩  (D) dinosaur 恐龍。canary locked behind bars of cage（關在籠中的金絲雀）。",
    "vocabIndex": 3
  },
  {
    "q": "High up in the cliff crags, the golden eagle built a sturdy twig ______ that has weathered storms for decades.",
    "options": [
      "nest",
      "cage",
      "dragon",
      "emotion"
    ],
    "answer": 0,
    "cn": "在高高的懸崖峭壁石縫間，金雕築造了一個堅固耐用的細枝巨巢，歷經數十年的風暴仍完好。 【選項解析】(A) dragon 龍  (B) cage 籠  (C) nest 鳥巢  (D) emotion 情緒。sturdy twig nest on cliff（懸崖上的樹枝巨巢）。",
    "vocabIndex": 4
  },
  {
    "q": "Compassion and empathy are positive human ______ that unite people across different cultural backgrounds.",
    "options": [
      "cages",
      "emotions",
      "nests",
      "tails"
    ],
    "answer": 1,
    "cn": "同情心與同理心是人類積極正向的寶貴情感，能夠跨越不同的文化背景將人們緊緊凝聚在一起。 【選項解析】(A) cages 籠子  (B) tails 尾巴  (C) nests 窩巢  (D) emotions 情感。positive human emotions（正向的人類情感）。",
    "vocabIndex": 5
  },
  {
    "q": "Spiders do not have ears, but they have an acute ______ of vibration that warns them of approaching danger on their webs.",
    "options": [
      "nest",
      "tail",
      "cage",
      "sense"
    ],
    "answer": 3,
    "cn": "蜘蛛沒有耳朵，但牠們擁有敏銳無比的震動感官，能夠警告牠們蛛網上有潛在危險逼近。 【選項解析】(A) sense 感官/感覺  (B) tail 尾巴  (C) cage 籠子  (D) nest 巢。acute sense of vibration（敏銳的震動感官）。",
    "vocabIndex": 6
  },
  {
    "q": "A sudden ______ of dizziness overcame the traveler due to dehydration after hiking under the blistering midday sun.",
    "options": [
      "cage",
      "dinosaur",
      "feeling",
      "dragon"
    ],
    "answer": 2,
    "cn": "在烈日當空的日正當中健行導致脫水後，旅人心中突然襲來一陣強烈劇烈的眩暈感。 【選項解析】(A) cage 籠子  (B) feeling 感覺/感覺症狀  (C) dinosaur 恐龍  (D) dragon 龍。sudden feeling of dizziness（突然一陣眩暈感）。",
    "vocabIndex": 7
  },
  {
    "q": "Because the house was completely dark and quiet at 2 a.m., everyone in the family was already sound ______.",
    "options": [
      "mad",
      "asleep",
      "noisy",
      "local"
    ],
    "answer": 1,
    "cn": "因為凌晨兩點整棟房子完全漆黑一片且鴉雀無聲，全家人都早已進入了香甜的夢鄉之中。 【選項解析】(A) mad 生氣的  (B) noisy 吵鬧的  (C) asleep 睡著的  (D) local 本地的。sound asleep at 2 a.m.（凌晨兩點沉睡中）。",
    "vocabIndex": 8
  },
  {
    "q": "The boss was so wildly ______ about the leaked quarterly sales figures that he called an emergency board meeting immediately.",
    "options": [
      "mad",
      "excellent",
      "overseas",
      "asleep"
    ],
    "answer": 0,
    "cn": "老闆對於外洩的季度銷售數據機密感到極其抓狂震怒，當場立刻召集了緊急董事會議。 【選項解析】(A) asleep 睡著的  (B) excellent 出色的  (C) overseas 海外的  (D) mad 抓狂發火的。wildly mad about leak（對洩密極度抓狂發火）。",
    "vocabIndex": 9
  },
  {
    "q": "The horse swished its bushy ______ back and forth rhythmically to drive away persistent horseflies on the farm.",
    "options": [
      "nest",
      "tail",
      "cage",
      "dragon"
    ],
    "answer": 1,
    "cn": "馬兒在農場裡有節奏地來回甩動著牠蓬鬆的尾巴，以驅趕那些揮之不去、惹人討厭的牛虻飛蟲。 【選項解析】(A) tail 尾巴  (B) nest 窩  (C) cage 籠  (D) dragon 龍。swished bushy tail to drive away flies（甩動尾巴驅趕蒼蠅）。",
    "vocabIndex": 0
  },
  {
    "q": "In popular Western fantasy novels, the fire-breathing ______ fiercely hoards mounds of gold inside its mountain cavern.",
    "options": [
      "nest",
      "cage",
      "tail",
      "dragon"
    ],
    "answer": 3,
    "cn": "在西方著名的奇幻小說中，那隻會口吐烈火的惡龍在牠的深山洞穴裡貪婪地囤積堆積如山的黃金。 【選項解析】(A) nest 巢  (B) dragon 巨龍  (C) tail 尾巴  (D) cage 籠子。fire-breathing dragon hoards gold（吐火巨龍看守囤積黃金）。",
    "vocabIndex": 1
  },
  {
    "q": "Scientists discover fossilized footprints that reveal fascinating clues about how large herds of ______ traveled together.",
    "options": [
      "cages",
      "tails",
      "dinosaurs",
      "nests"
    ],
    "answer": 2,
    "cn": "科學家發現了石化恐龍足跡，為研究龐大的恐龍群體如何結伴長途跋涉提供了引人入勝的線索。 【選項解析】(A) cages 籠子  (B) tails 尾巴  (C) dinosaurs 恐龍群  (D) nests 巢穴。herds of dinosaurs traveled（成群恐龍集體遷徙遷行）。",
    "vocabIndex": 2
  },
  {
    "q": "The pet hamster spent hours running on its plastic exercise wheel inside its transparent acrylic ______.",
    "options": [
      "cage",
      "nest",
      "dragon",
      "tail"
    ],
    "answer": 0,
    "cn": "寵物倉鼠在牠那透明壓克力打造的寵物箱籠子裡，花了好幾個小時在塑膠滾輪上賣力奔跑。 【選項解析】(A) tail 尾巴  (B) nest 窩  (C) dragon 龍  (D) cage 籠子/寵物籠。transparent acrylic cage（透明壓克力寵物籠）。",
    "vocabIndex": 3
  },
  {
    "q": "A mother duck carefully gathered dry grass and soft down feathers to make a warm insulated ______ near the pond.",
    "options": [
      "dragon",
      "nest",
      "cage",
      "dinosaur"
    ],
    "answer": 1,
    "cn": "野鴨媽媽在池塘邊細心收集了乾燥的青草與柔軟的絨羽，築造出一個溫暖保暖的鴨窩孵卵。 【選項解析】(A) nest 鳥窩/巢  (B) dragon 龍  (C) cage 籠子  (D) dinosaur 恐龍。insulated nest near the pond（池塘邊保暖的鳥巢）。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "tail": {
    "pos": "n.",
    "en_def": "the flexible rear part extending from an animal's body",
    "cn_def": "尾巴",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the flexible rear part extending from an animal's body",
        "cn_def": "尾巴"
      }
    ]
  },
  "dragon": {
    "pos": "n.",
    "en_def": "a mythical giant reptile often depicted with wings, claws, and breathing fire",
    "cn_def": "龍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mythical giant reptile often depicted with wings, claws, and breathing fire",
        "cn_def": "龍"
      }
    ]
  },
  "dinosaur": {
    "pos": "n.",
    "en_def": "an extinct prehistoric reptile that lived millions of years ago",
    "cn_def": "恐龍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extinct prehistoric reptile that lived millions of years ago",
        "cn_def": "恐龍"
      }
    ]
  },
  "cage": {
    "pos": "n.",
    "en_def": "a structure made of bars or wire in which animals or birds are kept",
    "cn_def": "籠子；鳥籠",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a structure made of bars or wire in which animals or birds are kept",
        "cn_def": "籠子；鳥籠"
      }
    ]
  },
  "nest": {
    "pos": "n.",
    "en_def": "a structure built by birds or insects to lay eggs and shelter their young",
    "cn_def": "鳥巢；窩",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a structure built by birds or insects to lay eggs and shelter their young",
        "cn_def": "鳥巢；窩"
      }
    ]
  },
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling such as joy, sorrow, love, or anger",
    "cn_def": "情緒；感情",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong feeling such as joy, sorrow, love, or anger",
        "cn_def": "情緒；感情"
      }
    ]
  },
  "sense": {
    "pos": "n. / v.",
    "en_def": "a physical faculty such as sight; a feeling; to perceive",
    "cn_def": "感覺；感官；理解力",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a physical faculty such as sight; a feeling; to perceive",
        "cn_def": "感覺；感官；理解力"
      }
    ]
  },
  "feeling": {
    "pos": "n.",
    "en_def": "an emotional state, physical sensation, or belief",
    "cn_def": "感覺；感受",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an emotional state, physical sensation, or belief",
        "cn_def": "感覺；感受"
      }
    ]
  },
  "asleep": {
    "pos": "adj.",
    "en_def": "in a state of sleep; not awake",
    "cn_def": "睡著的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "in a state of sleep; not awake",
        "cn_def": "睡著的"
      }
    ]
  },
  "mad": {
    "pos": "adj.",
    "en_def": "very angry; insane; wildly enthusiastic",
    "cn_def": "生氣的；瘋狂的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very angry; insane; wildly enthusiastic",
        "cn_def": "生氣的；瘋狂的"
      }
    ]
  },
  "excellent": {
    "pos": "",
    "en_def": "",
    "cn_def": "優秀的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "優秀的"
      }
    ]
  },
  "local": {
    "pos": "",
    "en_def": "",
    "cn_def": "當地的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "當地的"
      }
    ]
  },
  "noisy": {
    "pos": "",
    "en_def": "",
    "cn_def": "吵鬧的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "吵鬧的"
      }
    ]
  },
  "overseas": {
    "pos": "",
    "en_def": "",
    "cn_def": "海外的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "海外的"
      }
    ]
  },
  "cages": {
    "pos": "",
    "en_def": "",
    "cn_def": "籠子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "籠子"
      }
    ]
  },
  "emotions": {
    "pos": "",
    "en_def": "",
    "cn_def": "情感",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "情感"
      }
    ]
  },
  "nests": {
    "pos": "",
    "en_def": "",
    "cn_def": "窩巢",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "窩巢"
      }
    ]
  },
  "tails": {
    "pos": "",
    "en_def": "",
    "cn_def": "尾巴",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "尾巴"
      }
    ]
  },
  "dinosaurs": {
    "pos": "",
    "en_def": "",
    "cn_def": "恐龍群",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "恐龍群"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
