// Lesson 32 Quiz Data: Countryside, Physical Terrain & Local Environments
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 32 - Countryside, Physical Terrain & Local Environments",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "field",
    "pos": "n.",
    "cn_def": "田野；田地；領域",
    "en_def": "an area of open land planted with crops or pasture",
    "sentence": "The hardworking farmers were harvesting ripe golden wheat in the large {{BLANK}}, and they worked until sunset.",
    "cn": "勤勞的農民們在大田地裡收割成熟的金黃色小麥，而且他們一直工作到日落。"
  },
  {
    "word": "plain",
    "pos": "n. / adj.",
    "cn_def": "平原；樸素的",
    "en_def": "a large flat area of land; simple and not decorated",
    "sentence": "Large herds of wild animals run freely across the vast grassy {{BLANK}}, which spreads for hundreds of miles.",
    "cn": "大群野生動物在遼闊廣袤的草質平原上自由奔跑，該平原向外延伸了數百英里。"
  },
  {
    "word": "mud",
    "pos": "n.",
    "cn_def": "泥巴；泥濘",
    "en_def": "wet, soft earth formed by mixing soil and water",
    "sentence": "Heavy rain turned the dirt playground into sticky brown {{BLANK}}, so all the school children had to play inside.",
    "cn": "大雨將泥土操場變成了黏稠的褐色泥巴，所以所有小學生都必須在室內玩耍。"
  },
  {
    "word": "hole",
    "pos": "n.",
    "cn_def": "洞穴；孔洞",
    "en_def": "an empty space in an object or opening in the ground",
    "sentence": "The clever little rabbit dug a deep {{BLANK}} under the wooden fence to escape from the neighbor's barking dog.",
    "cn": "聰明的小兔子在木柵欄下挖了一個深洞，以逃避鄰居家狂吠的狗。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "自然環境",
    "en_def": "the natural world in which people, animals, and plants live",
    "sentence": "Everyone should reduce plastic waste to protect our natural {{BLANK}}, or future generations will face serious pollution.",
    "cn": "每個人都應該減少塑膠垃圾以保護我們的自然環境，否則未來世代將面臨嚴重的污染。"
  },
  {
    "word": "area",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "a particular region or part of a town, country, or space",
    "sentence": "The city government built several new public parks in this residential {{BLANK}}, making life much more pleasant for families.",
    "cn": "市政府在這個住宅區域建造了幾座新的公園，讓各個家庭的生活變得更加愜意。"
  },
  {
    "word": "spot",
    "pos": "n. / v.",
    "cn_def": "地點；污漬；發現",
    "en_def": "a particular place; a small mark; to see or notice",
    "sentence": "We found a quiet shady {{BLANK}} under a huge oak tree, where our family enjoyed a wonderful afternoon picnic.",
    "cn": "我們在一棵大橡樹下找到了一個安靜陰涼的地點，我們全家人在那裡享用了美好的午後野餐。"
  },
  {
    "word": "corner",
    "pos": "n.",
    "cn_def": "角落；街角",
    "en_def": "the place where two walls, lines, or streets meet",
    "sentence": "There is a friendly convenience store located on the street {{BLANK}}, and it is open twenty-four hours every day.",
    "cn": "在街道街角坐落著一家親切的便利商店，而且它每天二十四小時營業。"
  },
  {
    "word": "county",
    "pos": "n.",
    "cn_def": "郡；縣",
    "en_def": "an administrative division of a country or state",
    "sentence": "My grandparents have lived in this quiet farming {{BLANK}} for sixty years, and they know almost every neighbor here.",
    "cn": "我的祖父母在這個安靜的農業縣居住了一甲子，而且他們幾乎認識這裡的每一位鄰居。"
  },
  {
    "word": "countryside",
    "pos": "n.",
    "cn_def": "鄉村；鄉下",
    "en_def": "land outside of cities and towns, with fields and farms",
    "sentence": "Many city residents enjoy driving out to the green {{BLANK}} on weekends to breathe fresh air and escape busy crowds.",
    "cn": "許多城市居民喜歡在週末開車前往綠意盎然的鄉村，以呼吸新鮮空氣並遠離繁忙擁擠的人群。"
  }
];

const MCQS = [
  {
    "q": "During early autumn, the golden wheat in the vast open ______ rippled beautifully whenever a gentle breeze blew.",
    "options": [
      "corner",
      "hole",
      "mud",
      "field"
    ],
    "answer": 3,
    "cn": "初秋時節，每當微風吹拂，遼闊開闊的田野中金黃色的小麥便泛起層層美麗的麥浪。 【選項解析】(A) field 田地  (B) hole 洞穴  (C) mud 泥巴  (D) corner 角落。open field（開闊田野）種植麥浪。",
    "vocabIndex": 0
  },
  {
    "q": "After two days of non-stop tropical rain, the unpaved school driveway was completely covered in thick slippery ______.",
    "options": [
      "environment",
      "county",
      "mud",
      "plain"
    ],
    "answer": 2,
    "cn": "在連續兩天未停歇的熱帶大雨過後，未鋪柏油的學校車道完全覆蓋在厚重濕滑的泥巴中。 【選項解析】(A) environment 環境  (B) mud 泥巴  (C) county 縣市  (D) plain 平原。雨後未鋪路面形成 thick slippery mud（濕滑泥巴）。",
    "vocabIndex": 2
  },
  {
    "q": "The playful dog used its paws to dig a deep ______ in the backyard, where it buried its favorite beef bone.",
    "options": [
      "area",
      "hole",
      "countryside",
      "spot"
    ],
    "answer": 1,
    "cn": "調皮的狗用爪子在後院挖了一個深洞，並把牠最心愛的牛骨頭埋在裡面藏起來。 【選項解析】(A) area 區域  (B) countryside 鄉村  (C) hole 洞穴  (D) spot 地點。dig a deep hole（挖深洞）。",
    "vocabIndex": 3
  },
  {
    "q": "Millions of wild buffalo once grazed peacefully across the expansive North American ______, stretching to the horizon.",
    "options": [
      "plain",
      "corner",
      "field",
      "mud"
    ],
    "answer": 0,
    "cn": "數以百萬計的野牛曾平靜地在遼闊的北美大平原上覓食，該平原一路延伸至無盡的地平線。 【選項解析】(A) mud 泥巴  (B) corner 街角  (C) field 田地  (D) plain 平原。North American plain（北美大平原）。",
    "vocabIndex": 1
  },
  {
    "q": "Planting more trees and conserving clean water are effective ways to protect our fragile global ______ for the future.",
    "options": [
      "hole",
      "environment",
      "county",
      "spot"
    ],
    "answer": 1,
    "cn": "種植更多樹木與節約潔淨水源，是為未來世代保護我們脆弱地球環境的有效方法。 【選項解析】(A) environment 環境  (B) hole 洞  (C) county 縣  (D) spot 地點。protect global environment（保護全球環境）。",
    "vocabIndex": 4
  },
  {
    "q": "The police cordoned off the entire downtown ______ after the gas leak, and they guided all residents to safety.",
    "options": [
      "countryside",
      "plain",
      "area",
      "mud"
    ],
    "answer": 2,
    "cn": "瓦斯外洩事故發生後，警方立刻封鎖了整個市中心區域，並引導所有居民撤離至安全處所。 【選項解析】(A) countryside 鄉下  (B) area 區域  (C) plain 平原  (D) mud 泥土。cordoned off entire downtown area（封鎖市中心區域）。",
    "vocabIndex": 5
  },
  {
    "q": "We arrived early at the botanical garden and reserved a lovely scenic ______ right beside the calm lotus pond.",
    "options": [
      "spot",
      "county",
      "hole",
      "field"
    ],
    "answer": 0,
    "cn": "我們很早便抵達了植物園，並在寧靜的荷花池畔搶先預訂了一個極佳的風景觀賞地點。 【選項解析】(A) hole 洞  (B) county 縣  (C) spot 地點  (D) field 田野。scenic spot（風景優美的地點）。",
    "vocabIndex": 6
  },
  {
    "q": "The old red mailbox stands right on the street ______, so you will easily see it as soon as you turn right.",
    "options": [
      "environment",
      "mud",
      "plain",
      "corner"
    ],
    "answer": 3,
    "cn": "那個老舊的紅色郵筒就立在街道的轉角處，所以你一右轉就能輕易地看見它。 【選項解析】(A) environment 環境  (B) mud 泥巴  (C) plain 平原  (D) corner 轉角/街角。street corner（街角）。",
    "vocabIndex": 7
  },
  {
    "q": "Yilan is a beautiful coastal ______ in northeastern Taiwan, well known for its hot springs and green rice paddies.",
    "options": [
      "county",
      "hole",
      "spot",
      "corner"
    ],
    "answer": 0,
    "cn": "宜蘭是台灣東北部一個美麗的沿海縣份，以其舒暢的溫泉與翠綠的稻田聞名遐邇。 【選項解析】(A) county 縣  (B) hole 洞  (C) spot 地點  (D) corner 角落。coastal county（沿海縣份）。",
    "vocabIndex": 8
  },
  {
    "q": "Tired of the deafening noise and smog of city life, Mr. Davis moved his entire family to the quiet ______.",
    "options": [
      "mud",
      "plain",
      "area",
      "countryside"
    ],
    "answer": 3,
    "cn": "厭倦了城市生活震耳欲聾的喧囂與烏煙瘴氣，戴維斯先生將全家人搬遷至寧靜的鄉村定居。 【選項解析】(A) mud 泥土  (B) countryside 鄉村  (C) area 地區  (D) plain 平原。move to quiet countryside（搬到寧靜鄉村）。",
    "vocabIndex": 9
  },
  {
    "q": "When playing soccer in the wet park, David slipped in the ______ and got his white jersey completely stained brown.",
    "options": [
      "corner",
      "environment",
      "mud",
      "county"
    ],
    "answer": 2,
    "cn": "在濕滑的公園踢足球時，戴維在泥巴裡滑了一跤，使得他的白色球衣徹底沾滿了褐色泥漬。 【選項解析】(A) corner 角落  (B) environment 環境  (C) mud 泥巴  (D) county 縣。slipped in the mud（在泥濘中滑倒）。",
    "vocabIndex": 2
  },
  {
    "q": "The golf ball rolled across the trimmed lawn and dropped cleanly into the shallow ______ on the green.",
    "options": [
      "field",
      "hole",
      "countryside",
      "plain"
    ],
    "answer": 1,
    "cn": "高爾夫球滾過修剪整齊的草坪，乾淨俐落地落入了果嶺上那個淺淺的球洞之中。 【選項解析】(A) field 田地  (B) plain 平原  (C) countryside 鄉村  (D) hole 球洞。dropped into shallow hole（掉進球洞）。",
    "vocabIndex": 3
  },
  {
    "q": "The industrial factory was fined heavily by the government for dumping toxic chemical wastewater into the local ______.",
    "options": [
      "corner",
      "spot",
      "environment",
      "hole"
    ],
    "answer": 2,
    "cn": "這家工廠因將有毒化學廢水排放至當地的生態環境中，遭到政府處以巨額罰款。 【選項解析】(A) environment 環境  (B) spot 地點  (C) corner 角落  (D) hole 洞穴。dump wastewater into environment（排廢水入環境）。",
    "vocabIndex": 4
  },
  {
    "q": "A scarecrow wearing a funny straw hat was erected in the middle of the corn ______ to keep hungry crows away.",
    "options": [
      "county",
      "plain",
      "mud",
      "field"
    ],
    "answer": 3,
    "cn": "玉米田中央豎立起了一個頭戴滑稽草帽的稻草人，以防止飢餓的烏鴉靠近偷食作物。 【選項解析】(A) county 縣  (B) field 田地  (C) mud 泥巴  (D) plain 平原。corn field（玉米田）。",
    "vocabIndex": 0
  },
  {
    "q": "The ancient nomadic tribes rode their horses freely across the wide Mongolian ______, following seasonal water sources.",
    "options": [
      "corner",
      "plain",
      "hole",
      "environment"
    ],
    "answer": 1,
    "cn": "古老的遊牧部落在遼闊的蒙古平原上自由策馬奔馳，追隨不同季節的水草資源遷徙。 【選項解析】(A) corner 轉角  (B) hole 洞穴  (C) plain 平原  (D) environment 環境。Mongolian plain（蒙古大平原）。",
    "vocabIndex": 1
  },
  {
    "q": "The cozy little coffee shop tucked away in the quiet street ______ serves the freshest handmade cinnamon rolls in town.",
    "options": [
      "corner",
      "area",
      "county",
      "mud"
    ],
    "answer": 0,
    "cn": "這家隱匿在安靜街角的小巧溫馨咖啡館，供應全鎮最新鮮手工烘焙的肉桂捲。 【選項解析】(A) mud 泥巴  (B) area 地區  (C) county 縣  (D) corner 街角。street corner（街角）。",
    "vocabIndex": 7
  },
  {
    "q": "This scenic coastal ______ is a favorite nesting location for rare sea birds, attracting photographers from around the world.",
    "options": [
      "mud",
      "hole",
      "plain",
      "spot"
    ],
    "answer": 3,
    "cn": "這個風景秀麗的海岸地點是珍稀海鳥喜愛的築巢場所，吸引了來自世界各地的攝影師前來。 【選項解析】(A) spot 地點  (B) hole 洞穴  (C) plain 平原  (D) mud 泥巴。coastal spot（海岸地點）。",
    "vocabIndex": 6
  },
  {
    "q": "Due to rapid economic growth, this rural ______ has transformed into a bustling commercial center with high-tech offices.",
    "options": [
      "area",
      "field",
      "corner",
      "hole"
    ],
    "answer": 0,
    "cn": "由於經濟快速成長，這個鄉村區域已轉型為擁有高科技辦公大樓的繁華商業中心。 【選項解析】(A) field 田野  (B) area 區域  (C) corner 角落  (D) hole 洞。rural area（鄉村地區）。",
    "vocabIndex": 5
  },
  {
    "q": "Taitung ______ is famous for its clean Pacific coastline, indigenous cultural heritage, and sweet organic custard apples.",
    "options": [
      "mud",
      "plain",
      "county",
      "spot"
    ],
    "answer": 2,
    "cn": "台東縣以其潔淨的太平洋海岸線、原住民文化遺產以及甜美的有機釋迦聞名於世。 【選項解析】(A) mud 泥土  (B) plain 平原  (C) county 縣  (D) spot 地點。Taitung County（台東縣）。",
    "vocabIndex": 8
  },
  {
    "q": "Whenever the holiday season arrives, we love taking a scenic train ride into the peaceful green ______ to recharge.",
    "options": [
      "hole",
      "countryside",
      "environment",
      "corner"
    ],
    "answer": 1,
    "cn": "每逢度假季節來臨，我們都喜歡搭乘風景優美的火車前往寧靜翠綠的鄉村放鬆充電。 【選項解析】(A) hole 洞穴  (B) corner 角落  (C) environment 環境  (D) countryside 鄉村。peaceful green countryside（寧靜綠色鄉村）。",
    "vocabIndex": 9
  },
  {
    "q": "The heavy tractor drove slowly through the agricultural ______, plowing deep straight furrows for planting new vegetables.",
    "options": [
      "spot",
      "mud",
      "field",
      "corner"
    ],
    "answer": 2,
    "cn": "沉重的耕耘機緩慢行駛過農田，犁出筆直深邃的田溝以便栽種新的蔬菜。 【選項解析】(A) field 田地  (B) mud 泥巴  (C) spot 地點  (D) corner 轉角。agricultural field（農田）。",
    "vocabIndex": 0
  },
  {
    "q": "After slipping on the rainy mountain path, my hiking boots were coated with thick sticky ______ that was difficult to scrape off.",
    "options": [
      "plain",
      "area",
      "hole",
      "mud"
    ],
    "answer": 3,
    "cn": "在陰雨的山徑上滑倒後，我的登山靴上包裹了厚厚一層黏稠的爛泥，非常難以刮除乾淨。 【選項解析】(A) plain 平原  (B) mud 爛泥/泥巴  (C) hole 洞  (D) area 地區。coated with thick sticky mud（裹著黏爛泥）。",
    "vocabIndex": 2
  },
  {
    "q": "The careful inspector noticed a small circular ______ in the water pipe, which had been leaking water under the floor.",
    "options": [
      "hole",
      "corner",
      "county",
      "environment"
    ],
    "answer": 0,
    "cn": "細心的檢修人員發現水管上有一個微小的圓形破洞，水一直沿著地板下方在滲漏。 【選項解析】(A) county 縣  (B) corner 轉角  (C) hole 破洞/孔  (D) environment 環境。circular hole in pipe（水管上的圓孔洞）。",
    "vocabIndex": 3
  },
  {
    "q": "The train crossed the flat endless ______ for hours, offering passengers sweeping views of golden grasslands under open skies.",
    "options": [
      "countryside",
      "plain",
      "field",
      "spot"
    ],
    "answer": 1,
    "cn": "火車在平坦無垠的大平原上行駛了數小時，讓乘客飽覽蒼穹下金黃草原的壯麗景致。 【選項解析】(A) countryside 鄉村  (B) spot 地點  (C) field 田地  (D) plain 平原。flat endless plain（平坦無際的大平原）。",
    "vocabIndex": 1
  },
  {
    "q": "Community leaders held an urgent town hall meeting to discuss how to keep the neighbourhood ______ clean and safe.",
    "options": [
      "corner",
      "mud",
      "hole",
      "environment"
    ],
    "answer": 3,
    "cn": "社區領袖們召開了緊急鎮民大會，共同商討如何保持鄰里周邊環境的潔淨與安全。 【選項解析】(A) environment 環境  (B) mud 泥濘  (C) hole 洞穴  (D) corner 角落。neighbourhood environment（鄰里環境）。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "field": {
    "pos": "n.",
    "en_def": "an area of open land planted with crops or pasture",
    "cn_def": "田野；田地；領域",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area of open land planted with crops or pasture",
        "cn_def": "田野；田地；領域"
      }
    ]
  },
  "plain": {
    "pos": "n. / adj.",
    "en_def": "a large flat area of land; simple and not decorated",
    "cn_def": "平原；樸素的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a large flat area of land; simple and not decorated",
        "cn_def": "平原；樸素的"
      }
    ]
  },
  "mud": {
    "pos": "n.",
    "en_def": "wet, soft earth formed by mixing soil and water",
    "cn_def": "泥巴；泥濘",
    "combined": [
      {
        "pos": "n.",
        "en_def": "wet, soft earth formed by mixing soil and water",
        "cn_def": "泥巴；泥濘"
      }
    ]
  },
  "hole": {
    "pos": "n.",
    "en_def": "an empty space in an object or opening in the ground",
    "cn_def": "洞穴；孔洞",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an empty space in an object or opening in the ground",
        "cn_def": "洞穴；孔洞"
      }
    ]
  },
  "environment": {
    "pos": "n.",
    "en_def": "the natural world in which people, animals, and plants live",
    "cn_def": "自然環境",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the natural world in which people, animals, and plants live",
        "cn_def": "自然環境"
      }
    ]
  },
  "area": {
    "pos": "n.",
    "en_def": "a particular region or part of a town, country, or space",
    "cn_def": "地區；區域",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular region or part of a town, country, or space",
        "cn_def": "地區；區域"
      }
    ]
  },
  "spot": {
    "pos": "n. / v.",
    "en_def": "a particular place; a small mark; to see or notice",
    "cn_def": "地點；污漬；發現",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a particular place; a small mark; to see or notice",
        "cn_def": "地點；污漬；發現"
      }
    ]
  },
  "corner": {
    "pos": "n.",
    "en_def": "the place where two walls, lines, or streets meet",
    "cn_def": "角落；街角",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place where two walls, lines, or streets meet",
        "cn_def": "角落；街角"
      }
    ]
  },
  "county": {
    "pos": "n.",
    "en_def": "an administrative division of a country or state",
    "cn_def": "郡；縣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an administrative division of a country or state",
        "cn_def": "郡；縣"
      }
    ]
  },
  "countryside": {
    "pos": "n.",
    "en_def": "land outside of cities and towns, with fields and farms",
    "cn_def": "鄉村；鄉下",
    "combined": [
      {
        "pos": "n.",
        "en_def": "land outside of cities and towns, with fields and farms",
        "cn_def": "鄉村；鄉下"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
