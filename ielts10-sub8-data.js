// Topic 10 Subunit 8 Quiz Data: Academic Words 學術單字 2 (confluence – protracted)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T10 S08 - Academic Words 學術單字 2 (confluence – protracted)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "confluence",
    "pos": "n.",
    "cn_def": "（河流的）匯流處",
    "en_def": "the place where two rivers join",
    "sentence": "The old town was built at the {{BLANK}} of two rivers, because boats could easily bring goods there from different areas.",
    "cn": "這座古城建在兩條河的匯流處，因為船隻可以輕易地從不同地區把貨物運到那裡。"
  },
  {
    "word": "congregate",
    "pos": "v.",
    "cn_def": "聚集",
    "en_def": "to gather together in a group",
    "sentence": "Young people {{BLANK}} in the square on Friday nights, and street dancers perform while their friends film them.",
    "cn": "年輕人星期五晚上會聚集在廣場上，而街舞者表演時他們的朋友會幫忙錄影。"
  },
  {
    "word": "untapped",
    "pos": "adj.",
    "cn_def": "未開發的；未利用的",
    "en_def": "not yet used, although it could be useful",
    "sentence": "Empty rooftops are an {{BLANK}} resource in many cities, but they could be used for gardens or solar power.",
    "cn": "空著的屋頂在許多城市是未被利用的資源，但它們可以用來做花園或太陽能發電。"
  },
  {
    "word": "countless",
    "pos": "adj.",
    "cn_def": "無數的",
    "en_def": "too many to be counted",
    "sentence": "I have walked past that old building {{BLANK}} times, but I never noticed the beautiful carvings above the door until today.",
    "cn": "我已經走過那棟老建築無數次，但直到今天才注意到門上方美麗的雕刻。"
  },
  {
    "word": "decrepit",
    "pos": "adj.",
    "cn_def": "破舊的；老朽的",
    "en_def": "old and in very bad condition",
    "sentence": "The {{BLANK}} apartment block had broken windows and no lift, so the elderly residents could hardly leave their homes.",
    "cn": "那棟破舊的公寓大樓窗戶破損又沒有電梯，所以年長的住戶幾乎無法出門。"
  },
  {
    "word": "demarcate",
    "pos": "v.",
    "cn_def": "劃定（界線）",
    "en_def": "to show clearly where an area begins and ends",
    "sentence": "The city painted yellow lines to {{BLANK}} the parking area, so drivers would stop blocking the fire exit.",
    "cn": "市政府畫上黃線來劃定停車區，好讓駕駛人不再擋住消防通道。"
  },
  {
    "word": "derelict",
    "pos": "adj.",
    "cn_def": "廢棄的；荒廢的",
    "en_def": "empty and falling apart because nobody uses it",
    "sentence": "The {{BLANK}} warehouse by the river was turned into a market, and now it is full of food stalls and live music.",
    "cn": "河邊那間廢棄的倉庫被改造成市集，而現在那裡滿是小吃攤和現場音樂。"
  },
  {
    "word": "dismal",
    "pos": "adj.",
    "cn_def": "陰鬱的；淒涼的",
    "en_def": "sad, dark and without hope",
    "sentence": "The station looked {{BLANK}} with its grey walls and broken lights, but after the makeover it became bright and welcoming.",
    "cn": "這座車站以前有灰色牆壁和故障的燈，看起來很陰鬱，但改造後變得明亮又親切。"
  },
  {
    "word": "enticing",
    "pos": "adj.",
    "cn_def": "誘人的；吸引人的",
    "en_def": "attractive and making you want to have or do something",
    "sentence": "The smell of fried chicken from the night market was so {{BLANK}} that we stopped to buy some although we had just eaten.",
    "cn": "夜市傳來的炸雞香味太誘人了，所以雖然我們剛吃過飯，還是停下來買了一些。"
  },
  {
    "word": "expedient",
    "pos": "adj.",
    "cn_def": "權宜的；方便的",
    "en_def": "useful for a quick result, though perhaps not the best way",
    "sentence": "Building another road seemed {{BLANK}} to the mayor, but experts warned that it would only bring more cars.",
    "cn": "對市長來說，再蓋一條路似乎是權宜之計，但專家警告這只會帶來更多車輛。"
  },
  {
    "word": "fledgling",
    "pos": "adj.",
    "cn_def": "剛起步的；初出茅廬的",
    "en_def": "new and still developing",
    "sentence": "The {{BLANK}} bike-sharing company had only fifty bikes at first, but now it has thousands across the city.",
    "cn": "那家剛起步的共享單車公司起初只有五十輛腳踏車，但現在全市已有數千輛。"
  },
  {
    "word": "fraught",
    "pos": "adj.",
    "cn_def": "充滿（問題、憂慮）的",
    "en_def": "full of problems or worry",
    "sentence": "The plan to move the old market was {{BLANK}} with difficulties, because the vendors did not want to lose their customers.",
    "cn": "遷移舊市場的計畫充滿困難，因為攤販們不想失去他們的顧客。"
  },
  {
    "word": "generic",
    "pos": "adj.",
    "cn_def": "一般的；千篇一律的",
    "en_def": "not special; the same as many others",
    "sentence": "Many new shopping malls look {{BLANK}}, so travellers sometimes forget which city they are in.",
    "cn": "許多新購物中心看起來千篇一律，所以旅客有時會忘記自己身在哪座城市。"
  },
  {
    "word": "gradient",
    "pos": "n.",
    "cn_def": "坡度",
    "en_def": "how steep a slope is",
    "sentence": "The road to the school has a steep {{BLANK}}, so students on bicycles often have to get off and push.",
    "cn": "通往學校的路坡度很陡，所以騎腳踏車的學生常常得下車用推的。"
  },
  {
    "word": "harmonious",
    "pos": "adj.",
    "cn_def": "和諧的；協調的",
    "en_def": "fitting together well in a pleasant way",
    "sentence": "The new museum has a {{BLANK}} design that matches the old houses nearby, so it does not look out of place.",
    "cn": "新博物館有著與附近老房子相配的和諧設計，所以它看起來並不突兀。"
  },
  {
    "word": "haven",
    "pos": "n.",
    "cn_def": "避風港；安全的地方",
    "en_def": "a safe and peaceful place",
    "sentence": "The tea garden is a quiet {{BLANK}} in the busy city, and people go there to escape the noise for an hour.",
    "cn": "那座茶園是繁忙城市中一個安靜的避風港，而人們會去那裡躲開噪音一個小時。"
  },
  {
    "word": "hub",
    "pos": "n.",
    "cn_def": "中心；樞紐",
    "en_def": "the central or most important place for an activity",
    "sentence": "Taipei Main Station is a transport {{BLANK}} where the MRT, trains and buses meet, so it is crowded all day long.",
    "cn": "台北車站是捷運、火車和公車交會的交通樞紐，所以它一整天都很擁擠。"
  },
  {
    "word": "idyllic",
    "pos": "adj.",
    "cn_def": "田園詩般的；恬靜優美的",
    "en_def": "extremely peaceful and beautiful",
    "sentence": "The village looks {{BLANK}} with its rice fields and mountains, but young people leave because there are few jobs.",
    "cn": "這個村莊有稻田和群山，看起來恬靜優美，但年輕人紛紛離開，因為工作機會很少。"
  },
  {
    "word": "immaculate",
    "pos": "adj.",
    "cn_def": "一塵不染的；完美無瑕的",
    "en_def": "perfectly clean and tidy",
    "sentence": "The streets in the old Japanese town were {{BLANK}}, although there were hardly any rubbish bins anywhere.",
    "cn": "那座日本古鎮的街道一塵不染，雖然到處幾乎都沒有垃圾桶。"
  },
  {
    "word": "omnipresent",
    "pos": "adj.",
    "cn_def": "無所不在的",
    "en_def": "seeming to be everywhere at the same time",
    "sentence": "Security cameras are {{BLANK}} in modern cities, so people feel safer, but some worry about their privacy.",
    "cn": "監視器在現代城市中無所不在，所以人們感覺更安全，但有些人擔心自己的隱私。"
  },
  {
    "word": "orderly",
    "pos": "adj.",
    "cn_def": "有秩序的；整齊的",
    "en_def": "well arranged or behaving in a calm, organised way",
    "sentence": "Passengers wait in an {{BLANK}} line on the MRT platform, so getting on and off the train is quick and safe.",
    "cn": "乘客在捷運月台上排成有秩序的隊伍，所以上下車既快速又安全。"
  },
  {
    "word": "overarching",
    "pos": "adj.",
    "cn_def": "首要的；總括的",
    "en_def": "most important and including everything else",
    "sentence": "The {{BLANK}} goal of the plan is to make the city greener, and every new project must help reach that goal.",
    "cn": "這項計畫的首要目標是讓城市更綠化，而每一個新專案都必須有助於達成這個目標。"
  },
  {
    "word": "perimeter",
    "pos": "n.",
    "cn_def": "周邊；周界",
    "en_def": "the outer edge of an area",
    "sentence": "Workers put a fence around the {{BLANK}} of the building site, so nobody could walk in by accident.",
    "cn": "工人們在工地的周邊架起圍籬，好讓沒有人會不小心走進去。"
  },
  {
    "word": "picturesque",
    "pos": "adj.",
    "cn_def": "風景如畫的",
    "en_def": "pretty enough to be in a painting",
    "sentence": "Jiufen is a {{BLANK}} mountain town with narrow lanes and red lanterns, so it attracts thousands of visitors every weekend.",
    "cn": "九份是一座有狹窄巷弄和紅燈籠、風景如畫的山城，所以每個週末都吸引數千名遊客。"
  },
  {
    "word": "protracted",
    "pos": "adj.",
    "cn_def": "拖延的；曠日持久的",
    "en_def": "lasting longer than expected or than usual",
    "sentence": "After {{BLANK}} talks that lasted three years, the owners finally agreed to rebuild the old apartment block.",
    "cn": "經過持續三年、曠日持久的協商後，屋主們終於同意重建那棟老舊公寓大樓。"
  }
];

const MCQS = [
  {
    "q": "The old town was built at the _____ of two rivers, because boats could easily bring goods there from different areas.",
    "options": [
      "fixture",
      "confluence",
      "bulldozer",
      "contractor"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Young people _____ in the square on Friday nights, and street dancers perform while their friends film them.",
    "options": [
      "reinvigorate",
      "counteract",
      "congregate",
      "vie"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Empty rooftops are an _____ resource in many cities, but they could be used for gardens or solar power.",
    "options": [
      "untapped",
      "unparalleled",
      "tasteful",
      "net-zero"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "I have walked past that old building _____ times, but I never noticed the beautiful carvings above the door until today.",
    "options": [
      "discreet",
      "frenetic",
      "modernist",
      "countless"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The _____ apartment block had broken windows and no lift, so the elderly residents could hardly leave their homes.",
    "options": [
      "decrepit",
      "interconnected",
      "paltry",
      "elegant"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The city painted yellow lines to _____ the parking area, so drivers would stop blocking the fire exit.",
    "options": [
      "upcycle",
      "flaunt",
      "reinvigorate",
      "demarcate"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The _____ warehouse by the river was turned into a market, and now it is full of food stalls and live music.",
    "options": [
      "walkable",
      "contiguous",
      "derelict",
      "tranquil"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The station looked _____ with its grey walls and broken lights, but after the makeover it became bright and welcoming.",
    "options": [
      "grandiose",
      "dismal",
      "ramshackle",
      "untenable"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The smell of fried chicken from the night market was so _____ that we stopped to buy some although we had just eaten.",
    "options": [
      "enticing",
      "brisk",
      "decent",
      "walkable"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Building another road seemed _____ to the mayor, but experts warned that it would only bring more cars.",
    "options": [
      "bustling",
      "interconnected",
      "expedient",
      "lacklustre"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The _____ bike-sharing company had only fifty bikes at first, but now it has thousands across the city.",
    "options": [
      "liveable",
      "fledgling",
      "brittle",
      "open-plan"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The plan to move the old market was _____ with difficulties, because the vendors did not want to lose their customers.",
    "options": [
      "ride-hailing",
      "tasteful",
      "earthquake-proof",
      "fraught"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many new shopping malls look _____, so travellers sometimes forget which city they are in.",
    "options": [
      "generic",
      "conservative",
      "grandiose",
      "mixed-use"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The road to the school has a steep _____, so students on bicycles often have to get off and push.",
    "options": [
      "skyline",
      "gradient",
      "reprieve",
      "nightlife"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The new museum has a _____ design that matches the old houses nearby, so it does not look out of place.",
    "options": [
      "elegant",
      "multicultural",
      "bland",
      "harmonious"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The tea garden is a quiet _____ in the busy city, and people go there to escape the noise for an hour.",
    "options": [
      "plaza",
      "graffiti",
      "haven",
      "patchwork"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Taipei Main Station is a transport _____ where the MRT, trains and buses meet, so it is crowded all day long.",
    "options": [
      "fare",
      "wasteland",
      "perk",
      "hub"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The village looks _____ with its rice fields and mountains, but young people leave because there are few jobs.",
    "options": [
      "idyllic",
      "discreet",
      "car-free",
      "paltry"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The streets in the old Japanese town were _____, although there were hardly any rubbish bins anywhere.",
    "options": [
      "considerate",
      "contiguous",
      "immaculate",
      "spacious"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Security cameras are _____ in modern cities, so people feel safer, but some worry about their privacy.",
    "options": [
      "liveable",
      "omnipresent",
      "capricious",
      "upmarket"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Passengers wait in an _____ line on the MRT platform, so getting on and off the train is quick and safe.",
    "options": [
      "multicultural",
      "high-rise",
      "orderly",
      "staggering"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The _____ goal of the plan is to make the city greener, and every new project must help reach that goal.",
    "options": [
      "lacklustre",
      "overarching",
      "upmarket",
      "insidious"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Workers put a fence around the _____ of the building site, so nobody could walk in by accident.",
    "options": [
      "megacity",
      "ambience",
      "malaise",
      "perimeter"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Jiufen is a _____ mountain town with narrow lanes and red lanterns, so it attracts thousands of visitors every weekend.",
    "options": [
      "picturesque",
      "contiguous",
      "lush",
      "seismic"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "After _____ talks that lasted three years, the owners finally agreed to rebuild the old apartment block.",
    "options": [
      "unsightly",
      "insidious",
      "seismic",
      "protracted"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "confluence": {
    "pos": "n.",
    "en_def": "the place where two rivers join",
    "cn_def": "（河流的）匯流處"
  },
  "congregate": {
    "pos": "v.",
    "en_def": "to gather together in a group",
    "cn_def": "聚集"
  },
  "untapped": {
    "pos": "adj.",
    "en_def": "not yet used, although it could be useful",
    "cn_def": "未開發的；未利用的"
  },
  "countless": {
    "pos": "adj.",
    "en_def": "too many to be counted",
    "cn_def": "無數的"
  },
  "decrepit": {
    "pos": "adj.",
    "en_def": "old and in very bad condition",
    "cn_def": "破舊的；老朽的"
  },
  "demarcate": {
    "pos": "v.",
    "en_def": "to show clearly where an area begins and ends",
    "cn_def": "劃定（界線）"
  },
  "derelict": {
    "pos": "adj.",
    "en_def": "empty and falling apart because nobody uses it",
    "cn_def": "廢棄的；荒廢的"
  },
  "dismal": {
    "pos": "adj.",
    "en_def": "sad, dark and without hope",
    "cn_def": "陰鬱的；淒涼的"
  },
  "enticing": {
    "pos": "adj.",
    "en_def": "attractive and making you want to have or do something",
    "cn_def": "誘人的；吸引人的"
  },
  "expedient": {
    "pos": "adj.",
    "en_def": "useful for a quick result, though perhaps not the best way",
    "cn_def": "權宜的；方便的"
  },
  "fledgling": {
    "pos": "adj.",
    "en_def": "new and still developing",
    "cn_def": "剛起步的；初出茅廬的"
  },
  "fraught": {
    "pos": "adj.",
    "en_def": "full of problems or worry",
    "cn_def": "充滿（問題、憂慮）的"
  },
  "generic": {
    "pos": "adj.",
    "en_def": "not special; the same as many others",
    "cn_def": "一般的；千篇一律的"
  },
  "gradient": {
    "pos": "n.",
    "en_def": "how steep a slope is",
    "cn_def": "坡度"
  },
  "harmonious": {
    "pos": "adj.",
    "en_def": "fitting together well in a pleasant way",
    "cn_def": "和諧的；協調的"
  },
  "haven": {
    "pos": "n.",
    "en_def": "a safe and peaceful place",
    "cn_def": "避風港；安全的地方"
  },
  "hub": {
    "pos": "n.",
    "en_def": "the central or most important place for an activity",
    "cn_def": "中心；樞紐"
  },
  "idyllic": {
    "pos": "adj.",
    "en_def": "extremely peaceful and beautiful",
    "cn_def": "田園詩般的；恬靜優美的"
  },
  "immaculate": {
    "pos": "adj.",
    "en_def": "perfectly clean and tidy",
    "cn_def": "一塵不染的；完美無瑕的"
  },
  "omnipresent": {
    "pos": "adj.",
    "en_def": "seeming to be everywhere at the same time",
    "cn_def": "無所不在的"
  },
  "orderly": {
    "pos": "adj.",
    "en_def": "well arranged or behaving in a calm, organised way",
    "cn_def": "有秩序的；整齊的"
  },
  "overarching": {
    "pos": "adj.",
    "en_def": "most important and including everything else",
    "cn_def": "首要的；總括的"
  },
  "perimeter": {
    "pos": "n.",
    "en_def": "the outer edge of an area",
    "cn_def": "周邊；周界"
  },
  "picturesque": {
    "pos": "adj.",
    "en_def": "pretty enough to be in a painting",
    "cn_def": "風景如畫的"
  },
  "protracted": {
    "pos": "adj.",
    "en_def": "lasting longer than expected or than usual",
    "cn_def": "拖延的；曠日持久的"
  },
  "fixture": {
    "pos": "n.",
    "en_def": "a person or thing that is always present in a place",
    "cn_def": "固定存在的人或事物；常客"
  },
  "bulldozer": {
    "pos": "n.",
    "en_def": "a powerful machine that pushes earth and knocks down buildings",
    "cn_def": "推土機"
  },
  "contractor": {
    "pos": "n.",
    "en_def": "a person or company paid to do building work",
    "cn_def": "承包商"
  },
  "reinvigorate": {
    "pos": "v.",
    "en_def": "to give new energy and strength to something",
    "cn_def": "使重新振作；重新注入活力"
  },
  "counteract": {
    "pos": "v.",
    "en_def": "to reduce the bad effect of something",
    "cn_def": "抵消；對抗"
  },
  "vie": {
    "pos": "v.",
    "en_def": "to compete strongly with others for something",
    "cn_def": "競爭；角逐"
  },
  "unparalleled": {
    "pos": "adj.",
    "en_def": "better or greater than anything else",
    "cn_def": "無與倫比的"
  },
  "tasteful": {
    "pos": "adj.",
    "en_def": "attractive and showing good judgement about style",
    "cn_def": "雅致的；有品味的"
  },
  "net-zero": {
    "pos": "adj.",
    "en_def": "producing as much clean energy as it uses, or no extra carbon",
    "cn_def": "淨零（排放）的"
  },
  "discreet": {
    "pos": "adj.",
    "en_def": "careful not to attract attention",
    "cn_def": "不顯眼的；低調的"
  },
  "frenetic": {
    "pos": "adj.",
    "en_def": "fast, busy and slightly out of control",
    "cn_def": "狂亂的；忙亂的"
  },
  "modernist": {
    "pos": "adj.",
    "en_def": "in the plain 20th-century style using concrete, steel and glass",
    "cn_def": "現代主義的"
  },
  "interconnected": {
    "pos": "adj.",
    "en_def": "joined to each other so that each affects the others",
    "cn_def": "相互連結的"
  },
  "paltry": {
    "pos": "adj.",
    "en_def": "very small and not worth much",
    "cn_def": "微不足道的；少得可憐的"
  },
  "elegant": {
    "pos": "adj.",
    "en_def": "graceful and attractive in style",
    "cn_def": "優雅的；精緻的"
  },
  "upcycle": {
    "pos": "v.",
    "en_def": "to turn old things into something new and more useful",
    "cn_def": "升級再造"
  },
  "flaunt": {
    "pos": "v.",
    "en_def": "to show something off proudly to get attention",
    "cn_def": "炫耀；誇示"
  },
  "walkable": {
    "pos": "adj.",
    "en_def": "safe and pleasant for walking around",
    "cn_def": "適合步行的"
  },
  "contiguous": {
    "pos": "adj.",
    "en_def": "touching or next to each other along one side",
    "cn_def": "相連的；鄰接的"
  },
  "tranquil": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "grandiose": {
    "pos": "adj.",
    "en_def": "too big or ambitious to be practical",
    "cn_def": "浮誇的；過於宏大的"
  },
  "ramshackle": {
    "pos": "adj.",
    "en_def": "badly built and likely to fall down",
    "cn_def": "搖搖欲墜的；破舊的"
  },
  "untenable": {
    "pos": "adj.",
    "en_def": "not able to be continued or defended",
    "cn_def": "站不住腳的；難以維持的"
  },
  "brisk": {
    "pos": "adj.",
    "en_def": "quick and active",
    "cn_def": "興旺的；輕快的"
  },
  "decent": {
    "pos": "adj.",
    "en_def": "good enough; of an acceptable standard",
    "cn_def": "像樣的；過得去的"
  },
  "bustling": {
    "pos": "adj.",
    "en_def": "full of busy, noisy activity",
    "cn_def": "熙熙攘攘的；熱鬧的"
  },
  "lacklustre": {
    "pos": "adj.",
    "en_def": "not exciting or impressive",
    "cn_def": "平淡無奇的；缺乏活力的"
  },
  "liveable": {
    "pos": "adj.",
    "en_def": "pleasant and suitable for living in",
    "cn_def": "宜居的；適合居住的"
  },
  "brittle": {
    "pos": "adj.",
    "en_def": "hard but easily broken",
    "cn_def": "易碎的；脆的"
  },
  "open-plan": {
    "pos": "adj.",
    "en_def": "having few inside walls, with one large shared space",
    "cn_def": "開放式（格局）的"
  },
  "ride-hailing": {
    "pos": "adj.",
    "en_def": "booking a car and driver through a phone app",
    "cn_def": "叫車（服務）的"
  },
  "earthquake-proof": {
    "pos": "adj.",
    "en_def": "built so that it will not fall down in an earthquake",
    "cn_def": "防震的；耐震的"
  },
  "conservative": {
    "pos": "adj.",
    "en_def": "not willing to accept much change or new ideas",
    "cn_def": "保守的"
  },
  "mixed-use": {
    "pos": "adj.",
    "en_def": "used for both homes and businesses",
    "cn_def": "混合使用的；住商混合的"
  },
  "skyline": {
    "pos": "n.",
    "en_def": "the shape that tall buildings make against the sky",
    "cn_def": "天際線"
  },
  "reprieve": {
    "pos": "n.",
    "en_def": "a delay or cancellation of something bad",
    "cn_def": "暫緩；緩刑"
  },
  "nightlife": {
    "pos": "n.",
    "en_def": "entertainment such as bars and clubs that is open at night",
    "cn_def": "夜生活"
  },
  "multicultural": {
    "pos": "adj.",
    "en_def": "including people of many different cultures",
    "cn_def": "多元文化的"
  },
  "bland": {
    "pos": "adj.",
    "en_def": "without interesting features; dull",
    "cn_def": "平淡無奇的；乏味的"
  },
  "plaza": {
    "pos": "n.",
    "en_def": "an open public square in a city",
    "cn_def": "廣場"
  },
  "graffiti": {
    "pos": "n.",
    "en_def": "words or pictures painted on walls without permission",
    "cn_def": "塗鴉"
  },
  "patchwork": {
    "pos": "n.",
    "en_def": "something made of many different parts that do not match",
    "cn_def": "拼湊物；大雜燴"
  },
  "fare": {
    "pos": "n.",
    "en_def": "the money you pay to travel on a bus, train or taxi",
    "cn_def": "車資；票價"
  },
  "wasteland": {
    "pos": "n.",
    "en_def": "an empty area of land that is not used or cared for",
    "cn_def": "荒地；廢地"
  },
  "perk": {
    "pos": "n.",
    "en_def": "an extra benefit you get from a job or situation",
    "cn_def": "額外的好處；福利"
  },
  "car-free": {
    "pos": "adj.",
    "en_def": "where cars are not allowed",
    "cn_def": "無車的；禁止汽車的"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's feelings and needs",
    "cn_def": "體貼的；為他人著想的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space",
    "cn_def": "寬敞的"
  },
  "capricious": {
    "pos": "adj.",
    "en_def": "changing suddenly without a clear reason",
    "cn_def": "反覆無常的；多變的"
  },
  "upmarket": {
    "pos": "adj.",
    "en_def": "expensive and designed for rich customers",
    "cn_def": "高檔的；高級的"
  },
  "high-rise": {
    "pos": "adj.",
    "en_def": "very tall, with many floors",
    "cn_def": "高樓層的；高樓的"
  },
  "staggering": {
    "pos": "adj.",
    "en_def": "so large or surprising that it is hard to believe",
    "cn_def": "驚人的"
  },
  "insidious": {
    "pos": "adj.",
    "en_def": "harmful in a slow way that is hard to notice",
    "cn_def": "潛伏的；暗中為害的"
  },
  "megacity": {
    "pos": "n.",
    "en_def": "a very large city with over ten million people",
    "cn_def": "超大城市"
  },
  "ambience": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛；環境氛圍"
  },
  "malaise": {
    "pos": "n.",
    "en_def": "a general feeling that something is wrong or weak",
    "cn_def": "萎靡不振；（社會、經濟的）低迷"
  },
  "lush": {
    "pos": "adj.",
    "en_def": "covered with healthy green plants",
    "cn_def": "茂盛的；蒼翠的"
  },
  "seismic": {
    "pos": "adj.",
    "en_def": "connected with earthquakes",
    "cn_def": "地震的"
  },
  "unsightly": {
    "pos": "adj.",
    "en_def": "ugly and unpleasant to look at",
    "cn_def": "難看的；不雅觀的"
  }
};

const EXTRA_GLOSSES = {};
