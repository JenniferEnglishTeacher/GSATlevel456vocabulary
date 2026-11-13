// Lesson 51 Quiz Data: Global Metropolises, International Commerce & Mechanical Tools
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 51 - Global Metropolises, International Commerce & Mechanical Tools",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Hong Kong",
    "pos": "n.",
    "cn_def": "香港",
    "en_def": "a major international financial center and city in southern China",
    "sentence": "Many international banking companies set up their regional headquarters in {{BLANK}} because of its active harbor and free trade.",
    "cn": "許多國際銀行公司因為其繁忙的港口和自由貿易而在______設立了區域總部。"
  },
  {
    "word": "New York",
    "pos": "n.",
    "cn_def": "紐約",
    "en_def": "the most populous city and financial center in the United States",
    "sentence": "The Broadway theater district in {{BLANK}} attracts millions of tourists every year, and people come from everywhere to watch musical shows.",
    "cn": "______的百老匯劇院區每年吸引數百萬遊客，人們從各地前來觀賞音樂劇。"
  },
  {
    "word": "Paris",
    "pos": "n.",
    "cn_def": "巴黎",
    "en_def": "the capital city of France, famous for fashion and art",
    "sentence": "We enjoyed drinking hot coffee at an outdoor cafe in {{BLANK}}, and later in the afternoon we walked toward the famous Eiffel Tower.",
    "cn": "我們在______的一家戶外咖啡館享用熱咖啡，隨後在下午走向著名的艾菲爾鐵塔。"
  },
  {
    "word": "London",
    "pos": "n.",
    "cn_def": "倫敦",
    "en_def": "the capital city of the United Kingdom, located on the River Thames",
    "sentence": "Tourists gathered along the River Thames in {{BLANK}} to take photographs of Big Ben, but a sudden fog covered the historic bridge.",
    "cn": "遊客聚集在______泰晤士河畔拍攝大笨鐘的照片，但一陣突如其來的濃霧籠罩了這座歷史悠久的大橋。"
  },
  {
    "word": "international",
    "pos": "adj.",
    "cn_def": "國際的",
    "en_def": "relating to, involving, or between two or more nations",
    "sentence": "The foreign trade fair was an important {{BLANK}} event for local exporters, and business leaders signed multiple trade agreements there.",
    "cn": "這場對外貿易展覽會對本地出口商而言是一次重要的______盛事，商業領袖在會上簽署了多項貿易協議。"
  },
  {
    "word": "tool",
    "pos": "n.",
    "cn_def": "工具",
    "en_def": "a handheld device used to carry out a particular mechanical function",
    "sentence": "The clever mechanic selected the correct repair {{BLANK}} from his heavy toolbox, and he tightened the loose metal screw on the engine.",
    "cn": "這位熟練的技工從他沉重的工具箱中挑選出正確的維修______，並鎖緊了引擎上鬆動的金屬螺絲。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "儀器；樂器",
    "en_def": "a tool or device used for delicate scientific, medical, or musical work",
    "sentence": "The hospital laboratory installed a precise scientific {{BLANK}} yesterday, and doctors can now test medical samples much faster.",
    "cn": "這家醫院實驗室昨天安裝了一台精密的科學______，醫生們現在可以更快地檢測醫療樣本。"
  },
  {
    "word": "hammer",
    "pos": "n. / v.",
    "cn_def": "鐵鎚；鎚打",
    "en_def": "a heavy hand tool with a metal head used for pounding nails",
    "sentence": "The carpenter used a steel {{BLANK}} to drive several long nails into the wooden frame, and the bookshelf became very steady.",
    "cn": "木匠使用一把鋼______將幾根長釘敲進木框中，書架頓時變得非常穩固。"
  },
  {
    "word": "rope",
    "pos": "n.",
    "cn_def": "繩索",
    "en_def": "a strong, thick cord made by twisting together strands of hemp or wire",
    "sentence": "The brave mountain climbers tied a strong nylon {{BLANK}} around their waists, so they could safely cross the dangerous snowy ridge.",
    "cn": "勇敢的登山客在腰間繫上堅韌的尼龍______，這樣他們就能安全地穿越危險的積雪山脊。"
  },
  {
    "word": "pump",
    "pos": "n. / v.",
    "cn_def": "幫浦；抽水機；充氣",
    "en_def": "a mechanical machine used to move liquids or gases; to move fluid",
    "sentence": "My bicycle tire was completely flat this morning, so my brother used a hand {{BLANK}} to fill it with air before school.",
    "cn": "我的腳踏車輪胎今天早上完全沒氣了，所以我哥哥在上學前用一把手動______幫它充飽氣。"
  }
];

const MCQS = [
  {
    "q": "The mechanic carefully stored each steel ______ inside the garage cabinet so that he could easily find what he needed.",
    "options": [
      "tool",
      "rope",
      "pump",
      "hammer"
    ],
    "answer": 0,
    "cn": "技工將每件鋼製工具整齊存放在車庫櫥櫃中，以便隨時找到所需物品。 【選項解析】(A) tool 工具 (B) rope 繩索 (C) pump 幫浦 (D) hammer 鐵鎚。由 stored in garage cabinet 可知廣義指 tool。",
    "vocabIndex": 5
  },
  {
    "q": "Thousands of travelers visited Big Ben in ______ during their summer holiday, but continuous afternoon rain forced them indoors.",
    "options": [
      "Paris",
      "New York",
      "Hong Kong",
      "London"
    ],
    "answer": 3,
    "cn": "數千名遊客在暑假期間造訪了倫敦的大笨鐘，但午後持續的大雨迫使他們回到室內。 【選項解析】(A) Paris 巴黎 (B) London 倫敦 (C) Hong Kong 香港 (D) New York 紐約。Big Ben 位於倫敦 London。",
    "vocabIndex": 3
  },
  {
    "q": "The carpenter picked up a heavy iron ______ from the workbench, and he pounded the sharp nail into the wooden plank.",
    "options": [
      "pump",
      "rope",
      "hammer",
      "tool"
    ],
    "answer": 2,
    "cn": "木匠從工作台上拿起一把沉重的鐵鎚，將鋒利的釘子敲進了木板。 【選項解析】(A) pump 幫浦 (B) rope 繩索 (C) hammer 鐵鎚 (D) tool 工具。pounded the nail（釘釘子）使用 hammer。",
    "vocabIndex": 7
  },
  {
    "q": "Many multinational companies established financial offices in ______ because of its low tax rates and busy trading harbor.",
    "options": [
      "London",
      "Hong Kong",
      "Paris",
      "New York"
    ],
    "answer": 1,
    "cn": "許多跨國企業因為低稅率與繁榮的貿易港口而在香港設立了財務辦公室。 【選項解析】(A) Hong Kong 香港 (B) London 倫敦 (C) Paris 巴黎 (D) New York 紐約。由港口貿易與國際金融港可知選 Hong Kong。",
    "vocabIndex": 0
  },
  {
    "q": "The sailor quickly threw a thick coil of ______ to the dock workers so that they could secure the ship to the pier.",
    "options": [
      "rope",
      "hammer",
      "tool",
      "pump"
    ],
    "answer": 0,
    "cn": "水手迅速將一捆厚重的繩索拋給碼頭工人，以便他們將船隻固定在碼頭邊。 【選項解析】(A) tool 工具 (B) hammer 鐵鎚 (C) rope 繩索 (D) pump 幫浦。繫船固定用的是 rope。",
    "vocabIndex": 8
  },
  {
    "q": "The United Nations organized an ______ conference on climate change, and representatives from fifty nations attended the opening ceremony.",
    "options": [
      "ordinary",
      "ancient",
      "international",
      "natural"
    ],
    "answer": 2,
    "cn": "聯合國組織了一場關於氣候變遷的國際會議，來自五十個國家的代表出席了開幕式。 【選項解析】(A) international 國際的 (B) ancient 古老的 (C) ordinary 普通的 (D) natural 自然的。五十國代表出席屬 international。",
    "vocabIndex": 4
  },
  {
    "q": "The bicycle shop owner lent me an air ______ to inflate my tires, and he reminded me to check the tire pressure regularly.",
    "options": [
      "rope",
      "pump",
      "hammer",
      "tool"
    ],
    "answer": 1,
    "cn": "腳踏車店老闆借給我一個打氣筒來幫輪胎充氣，並提醒我定期檢查胎壓。 【選項解析】(A) rope 繩索 (B) tool 工具 (C) hammer 鐵鎚 (D) pump 幫浦。inflate tires 需用 air pump。",
    "vocabIndex": 9
  },
  {
    "q": "The Louvre Museum in ______ houses famous works of classical art, and art students flock there from all over the world.",
    "options": [
      "London",
      "Hong Kong",
      "New York",
      "Paris"
    ],
    "answer": 3,
    "cn": "巴黎的羅浮宮博物館收藏了古典藝術名作，來自世界各地的藝術系學生紛紛湧向那裡。 【選項解析】(A) London 倫敦 (B) Paris 巴黎 (C) New York 紐約 (D) Hong Kong 香港。Louvre 位於巴黎 Paris。",
    "vocabIndex": 2
  },
  {
    "q": "The medical research team utilized a delicate electronic ______ to monitor brain activity while the volunteer patient slept peacefully.",
    "options": [
      "hammer",
      "rope",
      "instrument",
      "pump"
    ],
    "answer": 2,
    "cn": "醫療研究團隊使用精密的電子儀器監測大腦活動，此時志願病患正在安詳入睡。 【選項解析】(A) instrument 儀器 (B) rope 繩索 (C) hammer 鐵鎚 (D) pump 幫浦。監測大腦需精密儀器 instrument。",
    "vocabIndex": 6
  },
  {
    "q": "Wall Street in ______ serves as the vibrant financial center of America, and stock prices fluctuate dramatically throughout the business day.",
    "options": [
      "New York",
      "Hong Kong",
      "Paris",
      "London"
    ],
    "answer": 0,
    "cn": "紐約的華爾街是美國充滿活力的金融中心，整個營業日期間股票價格波動劇烈。 【選項解析】(A) Paris 巴黎 (B) Hong Kong 香港 (C) New York 紐約 (D) London 倫敦。Wall Street 位於紐約 New York。",
    "vocabIndex": 1
  },
  {
    "q": "You should always use the right gardening ______ when digging holes for flowers, or you may easily damage your garden trowel.",
    "options": [
      "pump",
      "rope",
      "hammer",
      "tool"
    ],
    "answer": 3,
    "cn": "為花朵挖坑時應當使用正確的園藝工具，否則可能會損壞你的花園泥鏟。 【選項解析】(A) pump 幫浦 (B) tool 工具 (C) hammer 鐵鎚 (D) rope 繩索。gardening tool 指園藝工具。",
    "vocabIndex": 5
  },
  {
    "q": "The rock climbers secured their safety harness to a sturdy mountain ______ before descending the steep rocky cliff.",
    "options": [
      "tool",
      "rope",
      "hammer",
      "pump"
    ],
    "answer": 1,
    "cn": "攀岩者在沿著陡峭岩壁垂降之前，先將安全帶固定在堅固的登山繩索上。 【選項解析】(A) rope 繩索 (B) tool 工具 (C) hammer 鐵鎚 (D) pump 幫浦。攀岩垂降依賴 mountain rope。",
    "vocabIndex": 8
  },
  {
    "q": "Before hanging the heavy family picture on the living room wall, father used a small ______ to drive a brass nail into the plaster.",
    "options": [
      "pump",
      "rope",
      "tool",
      "hammer"
    ],
    "answer": 3,
    "cn": "在把沉重的全家福掛上客廳牆壁前，父親用小鐵鎚將銅釘敲進石膏牆。 【選項解析】(A) pump 幫浦 (B) hammer 鐵鎚 (C) tool 工具 (D) rope 繩索。敲釘子動作 drive a brass nail 需用 hammer。",
    "vocabIndex": 7
  },
  {
    "q": "The underground subway system in ______ is famous for its circular underground logo and carries millions of commuters each day.",
    "options": [
      "Paris",
      "Hong Kong",
      "London",
      "New York"
    ],
    "answer": 2,
    "cn": "倫敦的地下地鐵系統以其圓形標誌聞名，每天運送數百萬名通勤乘客。 【選項解析】(A) London 倫敦 (B) Hong Kong 香港 (C) Paris 巴黎 (D) New York 紐約。Underground（地鐵）為倫敦 London 特色。",
    "vocabIndex": 3
  },
  {
    "q": "To prevent the basement from flooding during torrential rainstorms, the building manager installed an automatic water ______.",
    "options": [
      "tool",
      "pump",
      "hammer",
      "rope"
    ],
    "answer": 1,
    "cn": "為了防止暴雨期間地下室淹水，大樓管理員安裝了一台自動抽水機。 【選項解析】(A) tool 工具 (B) rope 繩索 (C) hammer 鐵鎚 (D) pump 抽水機。排水防澇用 water pump。",
    "vocabIndex": 9
  },
  {
    "q": "Students who participate in the ______ student exchange program can study abroad for one full semester in Europe.",
    "options": [
      "international",
      "daily",
      "silent",
      "rapid"
    ],
    "answer": 0,
    "cn": "參加國際學生交換計畫的學生可以在歐洲留學整整一個學期。 【選項解析】(A) international 國際的 (B) daily 每日的 (C) silent 沉默的 (D) rapid 迅速的。海外留學交換為 international exchange。",
    "vocabIndex": 4
  },
  {
    "q": "The doctor sterilized each surgical ______ before entering the operating room to ensure the safety of the patient.",
    "options": [
      "pump",
      "instrument",
      "hammer",
      "rope"
    ],
    "answer": 1,
    "cn": "醫生在進入手術室之前對每件手術器械進行了消毒，以確保病人的安全。 【選項解析】(A) instrument 器械 (B) pump 幫浦 (C) hammer 鐵鎚 (D) rope 繩索。外科手術器械為 surgical instrument。",
    "vocabIndex": 6
  },
  {
    "q": "Visitors to ______ often take a scenic ride on the historic Star Ferry to admire the illuminated city skyline across Victoria Harbour.",
    "options": [
      "Hong Kong",
      "London",
      "Paris",
      "New York"
    ],
    "answer": 0,
    "cn": "造訪香港的遊客常乘坐歷史悠久的天星小輪，欣賞維多利亞港對岸璀璨的天際線。 【選項解析】(A) Paris 巴黎 (B) London 倫敦 (C) Hong Kong 香港 (D) New York 紐約。Victoria Harbour 與天星小輪位於 Hong Kong。",
    "vocabIndex": 0
  },
  {
    "q": "When the tire pressure warning light appeared on the dashboard, Henry pulled into a service station to borrow a tire ______.",
    "options": [
      "rope",
      "hammer",
      "pump",
      "tool"
    ],
    "answer": 2,
    "cn": "當儀表板上的胎壓警示燈亮起時，亨利將車開進保養廠借了一台輪胎充氣筒。 【選項解析】(A) rope 繩索 (B) hammer 鐵鎚 (C) pump 幫浦 (D) tool 工具。為輪胎補氣需用 pump。",
    "vocabIndex": 9
  },
  {
    "q": "The famous statue of Liberty stands proudly in the harbor of ______, welcoming immigrants and travelers from across the ocean.",
    "options": [
      "London",
      "Hong Kong",
      "Paris",
      "New York"
    ],
    "answer": 3,
    "cn": "著名的自由女神像驕傲地矗立在紐約港，歡迎來自大洋彼岸的移民與旅客。 【選項解析】(A) London 倫敦 (B) New York 紐約 (C) Paris 巴黎 (D) Hong Kong 香港。Statue of Liberty 位於紐約 New York。",
    "vocabIndex": 1
  },
  {
    "q": "The construction company purchased an electric power ______ to accelerate drilling through the thick concrete foundation.",
    "options": [
      "hammer",
      "rope",
      "tool",
      "pump"
    ],
    "answer": 2,
    "cn": "這家營造公司購買了一台電動工具，以加快鑽透厚實混凝土基礎的速度。 【選項解析】(A) tool 工具 (B) rope 繩索 (C) hammer 鐵鎚 (D) pump 幫浦。電動工具統稱為 electric power tool。",
    "vocabIndex": 5
  },
  {
    "q": "Walking along the historic riverbanks of the Seine in ______ offers romantic views of Notre-Dame Cathedral and local artists.",
    "options": [
      "Paris",
      "London",
      "Hong Kong",
      "New York"
    ],
    "answer": 0,
    "cn": "沿著巴黎塞納河的歷史河岸漫步，可以欣賞聖母院大教堂和街頭藝術家的浪漫景色。 【選項解析】(A) Paris 巴黎 (B) London 倫敦 (C) Hong Kong 香港 (D) New York 紐約。塞納河與聖母院位於巴黎 Paris。",
    "vocabIndex": 2
  },
  {
    "q": "The rescue team tied a knot in the rescue ______ and lowered it down the deep cave to pull the trapped explorer to safety.",
    "options": [
      "hammer",
      "rope",
      "pump",
      "tool"
    ],
    "answer": 1,
    "cn": "搜救隊在救援繩索上打了個結，並將它垂入深洞中，將受困的探險家拉至安全處。 【選項解析】(A) hammer 鐵鎚 (B) pump 幫浦 (C) rope 繩索 (D) tool 工具。垂入洞穴救人使用 rescue rope。",
    "vocabIndex": 8
  },
  {
    "q": "The violinist treated her musical ______ with exceptional care because it was handcrafted over two hundred years ago.",
    "options": [
      "rope",
      "pump",
      "hammer",
      "instrument"
    ],
    "answer": 3,
    "cn": "小提琴家對她的樂器格外珍惜，因為它是兩百多年前純手工打造的。 【選項解析】(A) rope 繩索 (B) instrument 樂器 (C) hammer 鐵鎚 (D) pump 幫浦。musical instrument 指樂器。",
    "vocabIndex": 6
  },
  {
    "q": "With a single strike of the heavy sledge ______, the demolition worker cracked the old brick wall into several pieces.",
    "options": [
      "hammer",
      "tool",
      "rope",
      "pump"
    ],
    "answer": 0,
    "cn": "隨著重型大鐵鎚的一記重擊，拆除工人將那座老舊磚牆砸碎成了數塊。 【選項解析】(A) pump 幫浦 (B) tool 工具 (C) rope 繩索 (D) hammer 鐵鎚。sledge hammer 指大鐵鎚。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "hong kong": {
    "pos": "n.",
    "en_def": "a major international financial center and city in southern China",
    "cn_def": "香港",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a major international financial center and city in southern China",
        "cn_def": "香港"
      }
    ]
  },
  "new york": {
    "pos": "n.",
    "en_def": "the most populous city and financial center in the United States",
    "cn_def": "紐約",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the most populous city and financial center in the United States",
        "cn_def": "紐約"
      }
    ]
  },
  "paris": {
    "pos": "n.",
    "en_def": "the capital city of France, famous for fashion and art",
    "cn_def": "巴黎",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the capital city of France, famous for fashion and art",
        "cn_def": "巴黎"
      }
    ]
  },
  "london": {
    "pos": "n.",
    "en_def": "the capital city of the United Kingdom, located on the River Thames",
    "cn_def": "倫敦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the capital city of the United Kingdom, located on the River Thames",
        "cn_def": "倫敦"
      }
    ]
  },
  "international": {
    "pos": "adj.",
    "en_def": "relating to, involving, or between two or more nations",
    "cn_def": "國際的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, involving, or between two or more nations",
        "cn_def": "國際的"
      }
    ]
  },
  "tool": {
    "pos": "n.",
    "en_def": "a handheld device used to carry out a particular mechanical function",
    "cn_def": "工具",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a handheld device used to carry out a particular mechanical function",
        "cn_def": "工具"
      }
    ]
  },
  "instrument": {
    "pos": "n.",
    "en_def": "a tool or device used for delicate scientific, medical, or musical work",
    "cn_def": "儀器；樂器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tool or device used for delicate scientific, medical, or musical work",
        "cn_def": "儀器；樂器"
      }
    ]
  },
  "hammer": {
    "pos": "n. / v.",
    "en_def": "a heavy hand tool with a metal head used for pounding nails",
    "cn_def": "鐵鎚；鎚打",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a heavy hand tool with a metal head used for pounding nails",
        "cn_def": "鐵鎚；鎚打"
      }
    ]
  },
  "rope": {
    "pos": "n.",
    "en_def": "a strong, thick cord made by twisting together strands of hemp or wire",
    "cn_def": "繩索",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong, thick cord made by twisting together strands of hemp or wire",
        "cn_def": "繩索"
      }
    ]
  },
  "pump": {
    "pos": "n. / v.",
    "en_def": "a mechanical machine used to move liquids or gases; to move fluid",
    "cn_def": "幫浦；抽水機；充氣",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a mechanical machine used to move liquids or gases; to move fluid",
        "cn_def": "幫浦；抽水機；充氣"
      }
    ]
  },
  "ordinary": {
    "pos": "",
    "en_def": "",
    "cn_def": "普通的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "普通的"
      }
    ]
  },
  "ancient": {
    "pos": "",
    "en_def": "",
    "cn_def": "古老的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "古老的"
      }
    ]
  },
  "natural": {
    "pos": "",
    "en_def": "",
    "cn_def": "自然的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "自然的"
      }
    ]
  },
  "daily": {
    "pos": "",
    "en_def": "",
    "cn_def": "每日的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "每日的"
      }
    ]
  },
  "silent": {
    "pos": "",
    "en_def": "",
    "cn_def": "沉默的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "沉默的"
      }
    ]
  },
  "rapid": {
    "pos": "",
    "en_def": "",
    "cn_def": "迅速的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "迅速的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
