// Lesson 29 Quiz Data: Weather, Atmospheric Conditions & Cosmos
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 29 - Weather, Atmospheric Conditions & Cosmos",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the weather conditions prevailing in an area over a long period",
    "sentence": "The Mediterranean region is famous for its mild winter {{BLANK}}, which attracts millions of northern European holidaymakers each year.",
    "cn": "地中海地區以其溫和的冬季氣候聞名，每年吸引數百萬北歐度假者前來。"
  },
  {
    "word": "temperature",
    "pos": "n.",
    "cn_def": "溫度；氣溫；體溫",
    "en_def": "the degree of heat or cold measured by a thermometer",
    "sentence": "When the winter cold front arrived from Siberia, the nighttime {{BLANK}} dropped rapidly below five degrees Celsius in the mountains.",
    "cn": "當來自西伯利亞的冬季冷鋒抵達時，山區的夜間氣溫迅速降至攝氏五度以下。"
  },
  {
    "word": "fog",
    "pos": "n.",
    "cn_def": "霧；濃霧",
    "en_def": "a thick cloud of tiny water droplets suspended in the atmosphere near earth",
    "sentence": "Heavy morning {{BLANK}} settled over the harbor, forcing ship captains to blow loud foghorns to avoid collisions with other vessels.",
    "cn": "清晨的濃霧籠罩著港口，迫使船長們鳴響響亮的霧號以避免與其他船隻相撞。"
  },
  {
    "word": "thunder",
    "pos": "n. / v.",
    "cn_def": "雷聲；雷鳴；打雷",
    "en_def": "a loud rumbling or crashing noise heard after a lightning flash",
    "sentence": "A sudden roll of loud {{BLANK}} shook the window glass, and the frightened family rushed inside before the heavy rainfall started.",
    "cn": "一陣突如其來的滾滾雷聲震動了窗戶玻璃，受驚的全家人在暴雨降臨前匆忙躲進屋內。"
  },
  {
    "word": "lightning",
    "pos": "n.",
    "cn_def": "閃電",
    "en_def": "the natural electrical discharge of very short duration between clouds",
    "sentence": "A blinding flash of sharp {{BLANK}} illuminated the dark midnight sky, striking a tall pine tree on the hill a second later.",
    "cn": "一道耀眼的銳利閃電照亮了漆黑的午夜天空，一秒鐘後擊中了山丘上的一棵高大松樹。"
  },
  {
    "word": "storm",
    "pos": "n. / v.",
    "cn_def": "暴風雨；風暴",
    "en_def": "a violent disturbance of the atmosphere with strong winds, rain, or snow",
    "sentence": "The tropical {{BLANK}} brought ferocious gale-force winds and heavy rain, uprooting trees and causing temporary power outages in town.",
    "cn": "熱帶風暴帶來了兇猛的狂風和暴雨，連根拔起了樹木並導致鎮上暫時停電。"
  },
  {
    "word": "stormy",
    "pos": "adj.",
    "cn_def": "暴風雨的；波濤洶湧的",
    "en_def": "characterized by violent weather with strong winds, rain, or thunder",
    "sentence": "The brave fishermen decided to stay safely inside the sheltered harbor because {{BLANK}} seas made sailing extremely hazardous.",
    "cn": "勇敢的漁民決定安全地留在遮蔽的避風港內，因為暴風雨的洶湧大海使出航極其危險。"
  },
  {
    "word": "snowy",
    "pos": "adj.",
    "cn_def": "下雪的；積雪的；多雪的",
    "en_def": "covered with snow, or characterized by snowfall",
    "sentence": "Children dressed in warm wool jackets ran out into the {{BLANK}} yard, joyfully building a round snowman with their neighborhood friends.",
    "cn": "穿著保暖羊毛夾克的孩子們跑進積雪的院子裡，歡天喜地與鄰居朋友一起堆起圓圓的雪人。"
  },
  {
    "word": "humid",
    "pos": "adj.",
    "cn_def": "潮濕的；濕潤的",
    "en_def": "marked by a relatively high level of water vapor in the atmosphere",
    "sentence": "Summer afternoons in Taipei are intensely hot and {{BLANK}}, so most people carry small towels and stay inside air-conditioned shops.",
    "cn": "台北夏日的午後非常炎熱潮濕，所以大多數人都隨身攜帶小毛巾並待在有冷氣的店鋪裡。"
  },
  {
    "word": "universe",
    "pos": "n.",
    "cn_def": "宇宙；全人類",
    "en_def": "all existing matter, energy, and space considered as a whole; cosmos",
    "sentence": "Astronomers use giant space telescopes orbiting Earth to study distant galaxies and discover the mysterious secrets of the vast {{BLANK}}.",
    "cn": "天文學家使用環繞地球運行的巨型太空望遠鏡研究遙遠的星系，發現浩瀚宇宙的神祕秘密。"
  }
];

const MCQS = [
  {
    "q": "Tropical islands usually have a warm and sunny ______ throughout the year, making them popular holiday destinations.",
    "options": [
      "fog",
      "lightning",
      "climate",
      "thunder"
    ],
    "answer": 2,
    "cn": "熱帶島嶼通常全年氣候溫暖晴朗，使其成為受歡迎的度假勝地。 【選項解析】(A) fog 霧 (B) climate 氣候 (C) lightning 閃電 (D) thunder 雷聲。warm and sunny climate 指氣候。",
    "vocabIndex": 0
  },
  {
    "q": "The nurse used a digital ear thermometer to check the sick toddler's body ______ before administering medicine.",
    "options": [
      "temperature",
      "universe",
      "storm",
      "climate"
    ],
    "answer": 0,
    "cn": "護士在給藥前，使用數位耳溫槍檢查生病幼兒的體溫。 【選項解析】(A) temperature 體溫 (B) universe 宇宙 (C) storm 暴風雨 (D) climate。body temperature 指體溫。",
    "vocabIndex": 1
  },
  {
    "q": "Dense gray ______ enveloped the mountain highway, reducing visibility to less than ten meters ahead of the windshield.",
    "options": [
      "thunder",
      "universe",
      "climate",
      "fog"
    ],
    "answer": 3,
    "cn": "濃密的灰色晨霧籠罩了高山公路，使擋風玻璃前的能見度降低到不足十公尺。 【選項解析】(A) thunder (B) fog 霧 (C) climate (D) universe。dense fog 指濃霧造成視線不佳。",
    "vocabIndex": 2
  },
  {
    "q": "We saw the bright flash in the sky, and five seconds later a terrifying boom of ______ echoed through the valley.",
    "options": [
      "temperature",
      "thunder",
      "climate",
      "fog"
    ],
    "answer": 1,
    "cn": "我們看到天空中閃過一道亮光，五秒鐘後一聲可怕的雷鳴在山谷中迴盪。 【選項解析】(A) temperature (B) climate (C) thunder 雷聲 (D) fog。先見閃電後聞雷聲 boom of thunder。",
    "vocabIndex": 3
  },
  {
    "q": "You should never stand under a tall solitary tree in an open meadow during a thunderstorm to avoid being struck by ______.",
    "options": [
      "lightning",
      "climate",
      "universe",
      "temperature"
    ],
    "answer": 0,
    "cn": "雷雨期間切勿站在空曠草地上的孤立高樹下，以避免遭到雷擊閃電襲擊。 【選項解析】(A) lightning 閃電 (B) climate (C) universe (D) temperature。struck by lightning 指遭雷擊。",
    "vocabIndex": 4
  },
  {
    "q": "The maritime bureau issued a severe weather alert warning that a powerful winter ______ would reach the northern coast by dawn.",
    "options": [
      "climate",
      "storm",
      "fog",
      "temperature"
    ],
    "answer": 1,
    "cn": "海事局發布惡劣天氣警報，警告一場強大的冬季暴風雨將在黎明前襲擊北部海岸。 【選項解析】(A) climate (B) temperature (C) fog (D) storm 風暴。winter storm 指冬季暴風雨。",
    "vocabIndex": 5
  },
  {
    "q": "The cargo ship rocked violently from side to side in the ______ waters, forcing the crew to secure all loose containers.",
    "options": [
      "humid",
      "snowy",
      "stormy",
      "mild"
    ],
    "answer": 2,
    "cn": "貨輪在暴風雨肆虐的波濤洶湧海水中劇烈左右搖晃，迫使船員固定所有鬆動的貨櫃。 【選項解析】(A) stormy 暴風雨的 (B) snowy 下雪的 (C) humid 潮濕的 (D) mild。stormy waters 指波濤洶湧的海水。",
    "vocabIndex": 6
  },
  {
    "q": "The ski resort opened earlier than expected this year because heavy ______ conditions covered the slopes with deep powder.",
    "options": [
      "humid",
      "stormy",
      "dry",
      "snowy"
    ],
    "answer": 3,
    "cn": "該滑雪度假勝地今年比預期更早開放，因為大雪覆蓋了滑雪坡道呈現厚厚粉雪。 【選項解析】(A) humid (B) stormy (C) snowy 積雪的 (D) dry。snowy conditions 指降雪積雪狀況。",
    "vocabIndex": 7
  },
  {
    "q": "Because the subtropical rainforest climate is extremely warm and ______, exotic ferns and colorful orchids thrive on tree trunks.",
    "options": [
      "humid",
      "stormy",
      "snowy",
      "cold"
    ],
    "answer": 0,
    "cn": "由於亞熱帶雨林氣候極其溫暖潮濕，奇異的蕨類植物和色彩鮮豔的蘭花在樹幹上蓬勃生長。 【選項解析】(A) snowy (B) stormy (C) humid 潮濕的 (D) cold。warm and humid 指溫暖潮濕。",
    "vocabIndex": 8
  },
  {
    "q": "Modern cosmologists estimate that our observable ______ contains billions of galaxies, each holding hundreds of billions of stars.",
    "options": [
      "storm",
      "climate",
      "temperature",
      "universe"
    ],
    "answer": 3,
    "cn": "現代宇宙學家估計我們可觀測的宇宙包含數十億個星系，每個星系擁有數千億顆恆星。 【選項解析】(A) storm (B) universe 宇宙 (C) temperature (D) climate。observable universe 指可觀測宇宙。",
    "vocabIndex": 9
  },
  {
    "q": "Global warming is causing profound disruptions to Earth's seasonal ______, resulting in prolonged droughts and severe floods.",
    "options": [
      "fog",
      "climate",
      "lightning",
      "thunder"
    ],
    "answer": 1,
    "cn": "全球暖化對地球的季節性氣候造成深刻破壞，導致長期乾旱和嚴重洪水。 【選項解析】(A) fog (B) thunder (C) lightning (D) climate 氣候。Earth's seasonal climate。",
    "vocabIndex": 0
  },
  {
    "q": "During the heatwave in July, the afternoon ______ climbed above thirty-eight degrees Celsius in central urban districts.",
    "options": [
      "universe",
      "storm",
      "temperature",
      "fog"
    ],
    "answer": 2,
    "cn": "在七月的熱浪中，中部市區午後氣溫攀升至攝氏三十八度以上。 【選項解析】(A) temperature 氣溫 (B) storm (C) universe (D) fog。temperature climbed above 38 degrees。",
    "vocabIndex": 1
  },
  {
    "q": "Flights departing from the international airport were grounded for two hours until the thick morning ______ dissipated.",
    "options": [
      "fog",
      "climate",
      "lightning",
      "universe"
    ],
    "answer": 0,
    "cn": "從國際機場起飛的航班停飛了兩個小時，直到濃厚的晨霧散去。 【選項解析】(A) climate (B) fog 霧 (C) lightning (D) universe。thick morning fog 指濃郁晨霧。",
    "vocabIndex": 2
  },
  {
    "q": "The frightened puppy hid under the sofa because the deafening roar of ______ made the whole living room vibrate.",
    "options": [
      "temperature",
      "climate",
      "thunder",
      "fog"
    ],
    "answer": 2,
    "cn": "受驚嚇的小狗躲在沙發底下，因為震耳欲聾的打雷轟鳴聲讓整個客廳都在震動。 【選項解析】(A) temperature (B) climate (C) thunder 雷聲 (D) fog。roar of thunder 指打雷轟鳴。",
    "vocabIndex": 3
  },
  {
    "q": "An electrical bolt of ______ hit the metal TV antenna on the roof, instantly disabling electrical appliances throughout the house.",
    "options": [
      "universe",
      "climate",
      "temperature",
      "lightning"
    ],
    "answer": 3,
    "cn": "一道閃電擊中了屋頂的金屬電視天線，瞬間損壞了全屋的電器設備。 【選項解析】(A) lightning 閃電 (B) climate (C) temperature (D) universe。bolt of lightning 指一道閃電。",
    "vocabIndex": 4
  },
  {
    "q": "Fierce gale winds from the tropical ______ tore roof tiles off houses and knocked down power lines across the coastal county.",
    "options": [
      "climate",
      "storm",
      "temperature",
      "fog"
    ],
    "answer": 1,
    "cn": "熱帶風暴帶來的猛烈狂風掀掉了房屋的屋瓦，並吹倒了沿海縣市的電線。 【選項解析】(A) climate (B) temperature (C) storm 風暴 (D) fog。tropical storm 指熱帶風暴。",
    "vocabIndex": 5
  },
  {
    "q": "The small fishing boat could not cross the ______ sea, so the captain returned to the safety of the rocky cove.",
    "options": [
      "snowy",
      "humid",
      "stormy",
      "clear"
    ],
    "answer": 2,
    "cn": "小型漁船無法穿越暴風雨肆虐的大海，因此船長返回了多岩石海灣的安全水域。 【選項解析】(A) snowy (B) stormy 暴風雨的 (C) humid (D) clear。stormy sea 指暴風雨之大海。",
    "vocabIndex": 6
  },
  {
    "q": "In December, tourists love visiting the ______ peaks of Hokkaido to enjoy hot springs and ski on pristine white trails.",
    "options": [
      "snowy",
      "stormy",
      "humid",
      "hot"
    ],
    "answer": 0,
    "cn": "在十二月，遊客喜歡造訪北海道白雪皚皚的山峰，享受溫泉並在潔白的純淨雪道上滑雪。 【選項解析】(A) humid (B) stormy (C) snowy 積雪的 (D) hot。snowy peaks 指積雪山峰。",
    "vocabIndex": 7
  },
  {
    "q": "When the weather is excessively hot and ______, moisture in the air prevents sweat from evaporating, making people feel uncomfortable.",
    "options": [
      "snowy",
      "humid",
      "stormy",
      "windy"
    ],
    "answer": 1,
    "cn": "當天氣過度炎熱潮濕時，空氣中的水分阻止汗水蒸發，使人感到非常不舒服。 【選項解析】(A) snowy (B) stormy (C) humid 潮濕的 (D) windy。hot and humid 指濕熱。",
    "vocabIndex": 8
  },
  {
    "q": "Space probes explore the outer boundaries of our solar system, sending back extraordinary pictures from across the known ______.",
    "options": [
      "storm",
      "temperature",
      "climate",
      "universe"
    ],
    "answer": 3,
    "cn": "太空探測器探索我們太陽系的外邊界，從已知宇宙的各個角落傳回非凡的照片。 【選項解析】(A) storm (B) temperature (C) climate (D) universe 宇宙。known universe 指已知宇宙。",
    "vocabIndex": 9
  },
  {
    "q": "Planting olive and citrus trees requires a warm Mediterranean ______, where winters are mild and summers are dry.",
    "options": [
      "fog",
      "climate",
      "lightning",
      "thunder"
    ],
    "answer": 1,
    "cn": "種植橄欖和柑橘樹需要溫暖的地中海型氣候，那裡冬季溫和，夏季乾燥。 【選項解析】(A) climate 氣候 (B) fog (C) lightning (D) thunder。Mediterranean climate（地中海氣候）。",
    "vocabIndex": 0
  },
  {
    "q": "To bake the chocolate cake perfectly, set the electronic kitchen oven ______ to one hundred and eighty degrees Celsius.",
    "options": [
      "climate",
      "universe",
      "temperature",
      "storm"
    ],
    "answer": 2,
    "cn": "為了完美烘烤巧克力蛋糕，請將廚房電子烤箱溫度設定為攝氏一百八十度。 【選項解析】(A) climate (B) temperature 溫度 (C) universe (D) storm。oven temperature 指烤箱溫度。",
    "vocabIndex": 1
  },
  {
    "q": "Early morning motorists turned on yellow ______ lights and maintained double following distance along the foggy highway.",
    "options": [
      "fog",
      "thunder",
      "lightning",
      "climate"
    ],
    "answer": 0,
    "cn": "清晨的駕駛人開啟黃色霧燈，並在多霧的高速公路上保持兩倍的跟車距離。 【選項解析】(A) lightning (B) thunder (C) fog 霧 (D) climate。fog lights 指車輛霧燈。",
    "vocabIndex": 2
  },
  {
    "q": "The sudden flash was followed immediately by sharp rattling ______, signaling that the storm center was directly overhead.",
    "options": [
      "temperature",
      "universe",
      "climate",
      "thunder"
    ],
    "answer": 3,
    "cn": "突如其來的閃光之後緊接著是一陣劇烈的連環雷鳴，顯示風暴中心就在正上方。 【選項解析】(A) temperature (B) universe (C) climate (D) thunder 雷聲。rattling thunder 指轟鳴雷聲。",
    "vocabIndex": 3
  },
  {
    "q": "Protective copper rods are installed on tall skyscrapers to channel hazardous strikes of ______ harmlessly deep into the ground.",
    "options": [
      "fog",
      "lightning",
      "climate",
      "temperature"
    ],
    "answer": 1,
    "cn": "摩天大樓上安裝了保護性的銅避雷針，將危險的閃電襲擊安全導入地底深處。 【選項解析】(A) lightning 閃電 (B) fog (C) climate (D) temperature。strikes of lightning 指閃電雷擊。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "climate": {
    "pos": "n.",
    "en_def": "the weather conditions prevailing in an area over a long period",
    "cn_def": "氣候",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the weather conditions prevailing in an area over a long period",
        "cn_def": "氣候"
      }
    ]
  },
  "temperature": {
    "pos": "n.",
    "en_def": "the degree of heat or cold measured by a thermometer",
    "cn_def": "溫度；氣溫；體溫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the degree of heat or cold measured by a thermometer",
        "cn_def": "溫度；氣溫；體溫"
      }
    ]
  },
  "fog": {
    "pos": "n.",
    "en_def": "a thick cloud of tiny water droplets suspended in the atmosphere near earth",
    "cn_def": "霧；濃霧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thick cloud of tiny water droplets suspended in the atmosphere near earth",
        "cn_def": "霧；濃霧"
      }
    ]
  },
  "thunder": {
    "pos": "n. / v.",
    "en_def": "a loud rumbling or crashing noise heard after a lightning flash",
    "cn_def": "雷聲；雷鳴；打雷",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a loud rumbling or crashing noise heard after a lightning flash",
        "cn_def": "雷聲；雷鳴；打雷"
      }
    ]
  },
  "lightning": {
    "pos": "n.",
    "en_def": "the natural electrical discharge of very short duration between clouds",
    "cn_def": "閃電",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the natural electrical discharge of very short duration between clouds",
        "cn_def": "閃電"
      }
    ]
  },
  "storm": {
    "pos": "n. / v.",
    "en_def": "a violent disturbance of the atmosphere with strong winds, rain, or snow",
    "cn_def": "暴風雨；風暴",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a violent disturbance of the atmosphere with strong winds, rain, or snow",
        "cn_def": "暴風雨；風暴"
      }
    ]
  },
  "stormy": {
    "pos": "adj.",
    "en_def": "characterized by violent weather with strong winds, rain, or thunder",
    "cn_def": "暴風雨的；波濤洶湧的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "characterized by violent weather with strong winds, rain, or thunder",
        "cn_def": "暴風雨的；波濤洶湧的"
      }
    ]
  },
  "snowy": {
    "pos": "adj.",
    "en_def": "covered with snow, or characterized by snowfall",
    "cn_def": "下雪的；積雪的；多雪的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "covered with snow, or characterized by snowfall",
        "cn_def": "下雪的；積雪的；多雪的"
      }
    ]
  },
  "humid": {
    "pos": "adj.",
    "en_def": "marked by a relatively high level of water vapor in the atmosphere",
    "cn_def": "潮濕的；濕潤的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "marked by a relatively high level of water vapor in the atmosphere",
        "cn_def": "潮濕的；濕潤的"
      }
    ]
  },
  "universe": {
    "pos": "n.",
    "en_def": "all existing matter, energy, and space considered as a whole; cosmos",
    "cn_def": "宇宙；全人類",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all existing matter, energy, and space considered as a whole; cosmos",
        "cn_def": "宇宙；全人類"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
