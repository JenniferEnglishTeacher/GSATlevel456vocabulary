// Lesson 28 Quiz Data: Rail Transit, Travel Motion & Visual Signals
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 28 - Rail Transit, Travel Motion & Visual Signals",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "jeep",
    "pos": "n.",
    "cn_def": "吉普車",
    "en_def": "a sturdy motor vehicle with four-wheel drive, used over rough terrain",
    "sentence": "The wildlife rangers drove a rugged open-top {{BLANK}} across the rocky grassland to observe migrating wild animals.",
    "cn": "野生動物巡警駕駛著一輛耐用的敞篷吉普車穿過崎嶇的草原，觀察遷徙的野生動物。"
  },
  {
    "word": "railroad",
    "pos": "n.",
    "cn_def": "鐵路；鐵路系統",
    "en_def": "a permanent track composed of rails on which trains run; train system",
    "sentence": "Workers constructed the famous historic mountain {{BLANK}} over a century ago to transport timber from deep alpine forests.",
    "cn": "一個多世紀前，工人們修建了這條著名的歷史登山鐵路，將木材從高山深林中運送出來。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "月台；講台；平台",
    "en_def": "a raised level surface on which people stand at a train station or stage",
    "sentence": "Dozens of eager commuters stood behind the yellow safety line on the railway {{BLANK}} waiting for the morning express train.",
    "cn": "數十名熱切的通勤者站在鐵路月台上的黃色安全線後方，等待著早班特快列車。"
  },
  {
    "word": "passenger",
    "pos": "n.",
    "cn_def": "乘客；旅客",
    "en_def": "a traveler on a public or private conveyance other than the driver or crew",
    "sentence": "The flight attendant gently reminded each seated {{BLANK}} to keep their seatbelts fastened during turbulent weather conditions.",
    "cn": "空服人員溫柔地提醒每一位就座的乘客，在不穩定的氣流天氣條件下務必繫好安全帶。"
  },
  {
    "word": "path",
    "pos": "n.",
    "cn_def": "小徑；路線；道路",
    "en_def": "a way or track laid down for walking or made by continual treading",
    "sentence": "A quiet stone {{BLANK}} wound through the green bamboo grove, leading visitors toward an ancient wooden Buddhist monastery.",
    "cn": "一條幽靜的石砌小徑穿過翠綠的竹林，引導遊客走向一座古老的木造佛寺。"
  },
  {
    "word": "tunnel",
    "pos": "n. / v.",
    "cn_def": "隧道；地道；挖地道",
    "en_def": "an artificial underground passage, especially one built through a hill",
    "sentence": "The high-speed bullet train turned on its bright headlights before speeding through the long mountain {{BLANK}}.",
    "cn": "高速高鐵列車在急速駛過長長的山區隧道之前，打開了明亮的前照燈。"
  },
  {
    "word": "sign",
    "pos": "n. / v.",
    "cn_def": "標誌；指示牌；簽署",
    "en_def": "a notice bearing information or instructions; to write one's name",
    "sentence": "The yellow highway warning {{BLANK}} alerted motorists to watch out for falling rocks during heavy rainy weather.",
    "cn": "黃色公路警示標誌提醒駕駛人，在大雨滂沱的天氣中要小心落石。"
  },
  {
    "word": "movement",
    "pos": "n.",
    "cn_def": "動作；移動；運動",
    "en_def": "an act of changing physical location or position; a group trend",
    "sentence": "The dance instructor watched the student's graceful arm {{BLANK}} carefully and offered tips on keeping perfect balance.",
    "cn": "舞蹈教練仔細觀察學生優雅的手臂動作，並提供了保持完美平衡的訣竅。"
  },
  {
    "word": "motion",
    "pos": "n.",
    "cn_def": "移動；動作；提議",
    "en_def": "the action or process of moving or being moved; gesture",
    "sentence": "The sensor lights in the dark hallway are activated by physical {{BLANK}}, so they turn on whenever someone walks past.",
    "cn": "黑暗走廊裡的感應燈是由人體移動感應觸發的，因此每當有人走過時它們就會亮起。"
  },
  {
    "word": "effect",
    "pos": "n.",
    "cn_def": "影響；效果；結果",
    "en_def": "a change which is a result or consequence of an action or other cause",
    "sentence": "Scientific studies demonstrate that regular physical exercise has a beneficial long-term {{BLANK}} on cardiovascular health.",
    "cn": "科學研究顯示，規律的體能鍛鍊對心血管健康具有持久且有益的良好影響。"
  }
];

const MCQS = [
  {
    "q": "The safari guide drove a four-wheel-drive ______ across the bumpy muddy road so tourists could photograph zebras.",
    "options": [
      "path",
      "effect",
      "tunnel",
      "jeep"
    ],
    "answer": 3,
    "cn": "荒野遊獵嚮導駕駛四輪驅動吉普車穿過崎嶇泥濘的道路，以便遊客拍攝斑馬。 【選項解析】(A) path 小徑 (B) jeep 吉普車 (C) tunnel 隧道 (D) effect 效果。四輪驅動穿越崎嶇道路者為 4WD jeep。",
    "vocabIndex": 0
  },
  {
    "q": "The high-speed transcontinental ______ connected remote coastal fishing towns to thriving industrial trade hubs.",
    "options": [
      "passenger",
      "railroad",
      "motion",
      "movement"
    ],
    "answer": 1,
    "cn": "這條跨洲高速鐵路將偏遠的沿海漁鎮與繁榮的工業貿易樞紐連接起來。 【選項解析】(A) passenger 乘客 (B) railroad 鐵路 (C) motion 動作 (D) movement 移動。transcontinental railroad（橫貫大陸鐵路）。",
    "vocabIndex": 1
  },
  {
    "q": "Hundreds of passengers waited patiently on the cold station ______ as the morning commuter train approached.",
    "options": [
      "sign",
      "effect",
      "platform",
      "jeep"
    ],
    "answer": 2,
    "cn": "數百名乘客在早班通勤火車進站時，在寒冷的車站月台上耐心等待。 【選項解析】(A) sign 標誌 (B) effect (C) platform 月台 (D) jeep。station platform 表車站月台。",
    "vocabIndex": 2
  },
  {
    "q": "Every international airline ______ must present a valid passport and boarding pass before entering the departure gate.",
    "options": [
      "passenger",
      "movement",
      "tunnel",
      "railroad"
    ],
    "answer": 0,
    "cn": "每位國際航班旅客在進入登機門之前，都必須出示有效護照和登機證。 【選項解析】(A) passenger 乘客 (B) movement (C) tunnel (D) railroad。搭乘航班之旅客為 flight passenger。",
    "vocabIndex": 3
  },
  {
    "q": "Follow the winding gravel ______ through the flower garden, and you will find a peaceful marble fountain at the end.",
    "options": [
      "motion",
      "effect",
      "sign",
      "path"
    ],
    "answer": 3,
    "cn": "沿著穿過花園的蜿蜒碎石小徑漫步，你將在盡頭發現一座寧靜的大理石噴泉。 【選項解析】(A) motion (B) effect (C) sign (D) path 小徑。gravel path 指碎石小路。",
    "vocabIndex": 4
  },
  {
    "q": "Vehicles entering the dark undersea ______ are strictly required to turn on headlights and obey the lower speed limit.",
    "options": [
      "tunnel",
      "jeep",
      "passenger",
      "platform"
    ],
    "answer": 0,
    "cn": "進入黑暗海底隧道的車輛被嚴格要求開啟前大燈並遵守較低的速限規定。 【選項解析】(A) tunnel 隧道 (B) jeep (C) passenger (D) platform。undersea tunnel（海底隧道）。",
    "vocabIndex": 5
  },
  {
    "q": "The metal road ______ showed a sharp right turn ahead, prompting the attentive driver to slow down immediately.",
    "options": [
      "effect",
      "motion",
      "sign",
      "movement"
    ],
    "answer": 2,
    "cn": "金屬道路標誌顯示前方急向右轉，促使警覺的司機立即減速。 【選項解析】(A) effect (B) sign 道路標誌 (C) motion (D) movement。road sign 指道路交通標誌。",
    "vocabIndex": 6
  },
  {
    "q": "The wildlife camera captured the stealthy ______ of a leopard stalking a deer through the tall savannah grass.",
    "options": [
      "platform",
      "movement",
      "railroad",
      "passenger"
    ],
    "answer": 1,
    "cn": "野生動物相機捕捉到一隻花豹穿過大草原高草潛伏靠近鹿群的悄悄動作。 【選項解析】(A) movement 移動/動作 (B) platform (C) railroad (D) passenger。stealthy movement 指潛行動作。",
    "vocabIndex": 7
  },
  {
    "q": "The automated camera caught the subtle hand ______ of the magician as he replaced the playing card unseen.",
    "options": [
      "tunnel",
      "path",
      "jeep",
      "motion"
    ],
    "answer": 3,
    "cn": "自動攝影機捕捉到了魔術師在無人注意下掉換撲克牌時的微妙手部動作。 【選項解析】(A) tunnel (B) path (C) motion 動作 (D) jeep。hand motion 指手部細微動作。",
    "vocabIndex": 8
  },
  {
    "q": "Lack of sleep had a negative ______ on David's academic concentration, causing his exam scores to drop.",
    "options": [
      "platform",
      "sign",
      "effect",
      "railroad"
    ],
    "answer": 2,
    "cn": "睡眠不足對大衛的學術專注力產生了負面影響，導致他的考試成績下滑。 【選項解析】(A) effect 影響 (B) sign (C) platform (D) railroad。negative effect on... 指對……產生負面影響。",
    "vocabIndex": 9
  },
  {
    "q": "Soldiers used an armored military ______ to navigate rugged mountain trails where regular cars could not travel.",
    "options": [
      "jeep",
      "effect",
      "path",
      "passenger"
    ],
    "answer": 0,
    "cn": "士兵們使用裝甲軍用吉普車穿梭於普通汽車無法通行的崎嶇山徑。 【選項解析】(A) passenger (B) effect (C) path (D) jeep 吉普車。military jeep 指軍用吉普車。",
    "vocabIndex": 0
  },
  {
    "q": "In the 19th century, expansion of the transcontinental ______ stimulated trade and settlement across North America.",
    "options": [
      "movement",
      "railroad",
      "tunnel",
      "sign"
    ],
    "answer": 1,
    "cn": "在 19 世紀，橫貫大陸鐵路的擴張促進了整個北美的貿易和定居拓荒。 【選項解析】(A) railroad 鐵路 (B) movement (C) tunnel (D) sign。expansion of railroad（鐵路拓建）。",
    "vocabIndex": 1
  },
  {
    "q": "The station announcer warned travelers not to lean over the edge of the subway ______ while waiting for trains.",
    "options": [
      "platform",
      "motion",
      "effect",
      "jeep"
    ],
    "answer": 0,
    "cn": "車站廣播提醒旅客在等車時，切勿探身越過地鐵月台邊緣。 【選項解析】(A) motion (B) platform 月台 (C) effect (D) jeep。edge of subway platform（地鐵月台邊緣）。",
    "vocabIndex": 2
  },
  {
    "q": "The elderly bus ______ was offered a courtesy seat by a polite student who noticed she was carrying heavy groceries.",
    "options": [
      "sign",
      "path",
      "passenger",
      "railroad"
    ],
    "answer": 2,
    "cn": "一位有禮貌的學生看到這位老婦人提著沉重的雜貨，便主動給這位年邁的公車乘客讓座。 【選項解析】(A) passenger 乘客 (B) path (C) sign (D) railroad。bus passenger 指公車乘客。",
    "vocabIndex": 3
  },
  {
    "q": "Hikers enjoyed walking along the scenic coastal ______, which offered breathtaking panoramic views of the blue ocean.",
    "options": [
      "movement",
      "path",
      "effect",
      "tunnel"
    ],
    "answer": 1,
    "cn": "徒步旅行者享受漫步於風景優美的海岸步道，該小徑提供蔚藍海洋令人驚嘆的全景。 【選項解析】(A) movement (B) effect (C) path 步道 (D) tunnel。scenic coastal path（濱海觀景步道）。",
    "vocabIndex": 4
  },
  {
    "q": "Construction teams drilled through solid granite for five years to build the twenty-kilometer railway ______.",
    "options": [
      "platform",
      "passenger",
      "jeep",
      "tunnel"
    ],
    "answer": 3,
    "cn": "施工團隊耗時五年鑽穿堅硬的花崗岩，修建完成了這條長達二十公里的鐵路隧道。 【選項解析】(A) tunnel 隧道 (B) passenger (C) jeep (D) platform。railway tunnel 指鐵路隧道。",
    "vocabIndex": 5
  },
  {
    "q": "A red octagonal stop ______ was erected at the dangerous street corner to prevent further vehicular collisions.",
    "options": [
      "sign",
      "effect",
      "motion",
      "path"
    ],
    "answer": 0,
    "cn": "危險的街角樹立了一個紅色的八角形停車標誌，以防止再次發生車輛碰撞事故。 【選項解析】(A) motion (B) effect (C) sign 交通標誌 (D) path。stop sign 指八角形停字標誌。",
    "vocabIndex": 6
  },
  {
    "q": "The doctor checked the range of joint ______ in the athlete's shoulder following his reconstructive surgery.",
    "options": [
      "railroad",
      "movement",
      "platform",
      "tunnel"
    ],
    "answer": 1,
    "cn": "在運動員進行韌帶重建手術後，醫生檢查了他肩部的關節活動幅度。 【選項解析】(A) railroad (B) movement 活動度/活動範圍 (C) platform (D) tunnel。range of joint movement 指關節活動度。",
    "vocabIndex": 7
  },
  {
    "q": "Modern automatic doors operate using infrared ______ sensors that detect approaching people and open smoothly.",
    "options": [
      "passenger",
      "jeep",
      "motion",
      "effect"
    ],
    "answer": 2,
    "cn": "現代自動門使用紅外線動態感應器運作，該感應器探測到接近的人員並平穩打開門。 【選項解析】(A) motion 動態 (B) jeep (C) passenger (D) effect。motion sensor 指動態感應器。",
    "vocabIndex": 8
  },
  {
    "q": "The unexpected positive ______ of planting urban trees was a noticeable reduction in neighborhood summer heat.",
    "options": [
      "sign",
      "path",
      "platform",
      "effect"
    ],
    "answer": 3,
    "cn": "種植城市樹木帶來的意料之外積極效應，是鄰里夏季高溫顯著降低。 【選項解析】(A) sign (B) path (C) platform (D) effect 效應/效果。positive effect（正向效應）。",
    "vocabIndex": 9
  },
  {
    "q": "The tour guide parked the sturdy ______ beside the canyon viewpoint so passengers could take memorable landscape photos.",
    "options": [
      "railroad",
      "jeep",
      "movement",
      "motion"
    ],
    "answer": 1,
    "cn": "導遊將堅固的吉普車停在峽谷觀景點旁，以便乘客拍攝難忘的風景照。 【選項解析】(A) jeep 吉普車 (B) railroad (C) movement (D) motion。parked the sturdy jeep。",
    "vocabIndex": 0
  },
  {
    "q": "Steam locomotives operated along this historical mountain ______ for decades before modern diesel trains were introduced.",
    "options": [
      "railroad",
      "passenger",
      "effect",
      "sign"
    ],
    "answer": 0,
    "cn": "在現代柴油火車問世之前，蒸汽機車在這條歷史高山鐵路上行駛了數十年。 【選項解析】(A) effect (B) passenger (C) railroad 鐵路 (D) sign。mountain railroad 指高山登山鐵路。",
    "vocabIndex": 1
  },
  {
    "q": "The crowded railway ______ was cleared quickly as passengers boarded the ten arriving passenger carriages.",
    "options": [
      "path",
      "motion",
      "platform",
      "tunnel"
    ],
    "answer": 2,
    "cn": "當旅客登上進站的十節客運車廂時，擁擠的鐵路月台迅速被清空疏散。 【選項解析】(A) path (B) platform 月台 (C) motion (D) tunnel。railway platform 指火車月台。",
    "vocabIndex": 2
  },
  {
    "q": "The train captain apologized over the intercom to every delayed ______ for the unexpected signal breakdown.",
    "options": [
      "movement",
      "jeep",
      "effect",
      "passenger"
    ],
    "answer": 3,
    "cn": "列車長透過廣播對講機向每一位因意外號誌故障而行程受阻的延誤旅客致歉。 【選項解析】(A) passenger 旅客 (B) jeep (C) effect (D) movement。delayed passenger 指被延誤之乘客。",
    "vocabIndex": 3
  },
  {
    "q": "A narrow dirt ______ led through the quiet orchard directly to the farmer's welcoming wooden cottage.",
    "options": [
      "motion",
      "tunnel",
      "path",
      "sign"
    ],
    "answer": 2,
    "cn": "一條狹窄的泥土小徑穿過寧靜的果園，直接通向農夫熱情好客的木造小屋。 【選項解析】(A) motion (B) tunnel (C) path 小徑 (D) sign。narrow dirt path 指泥土小徑。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "jeep": {
    "pos": "n.",
    "en_def": "a sturdy motor vehicle with four-wheel drive, used over rough terrain",
    "cn_def": "吉普車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sturdy motor vehicle with four-wheel drive, used over rough terrain",
        "cn_def": "吉普車"
      }
    ]
  },
  "railroad": {
    "pos": "n.",
    "en_def": "a permanent track composed of rails on which trains run; train system",
    "cn_def": "鐵路；鐵路系統",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a permanent track composed of rails on which trains run; train system",
        "cn_def": "鐵路；鐵路系統"
      }
    ]
  },
  "platform": {
    "pos": "n.",
    "en_def": "a raised level surface on which people stand at a train station or stage",
    "cn_def": "月台；講台；平台",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a raised level surface on which people stand at a train station or stage",
        "cn_def": "月台；講台；平台"
      }
    ]
  },
  "passenger": {
    "pos": "n.",
    "en_def": "a traveler on a public or private conveyance other than the driver or crew",
    "cn_def": "乘客；旅客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a traveler on a public or private conveyance other than the driver or crew",
        "cn_def": "乘客；旅客"
      }
    ]
  },
  "path": {
    "pos": "n.",
    "en_def": "a way or track laid down for walking or made by continual treading",
    "cn_def": "小徑；路線；道路",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a way or track laid down for walking or made by continual treading",
        "cn_def": "小徑；路線；道路"
      }
    ]
  },
  "tunnel": {
    "pos": "n. / v.",
    "en_def": "an artificial underground passage, especially one built through a hill",
    "cn_def": "隧道；地道；挖地道",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an artificial underground passage, especially one built through a hill",
        "cn_def": "隧道；地道；挖地道"
      }
    ]
  },
  "sign": {
    "pos": "n. / v.",
    "en_def": "a notice bearing information or instructions; to write one's name",
    "cn_def": "標誌；指示牌；簽署",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a notice bearing information or instructions; to write one's name",
        "cn_def": "標誌；指示牌；簽署"
      }
    ]
  },
  "movement": {
    "pos": "n.",
    "en_def": "an act of changing physical location or position; a group trend",
    "cn_def": "動作；移動；運動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of changing physical location or position; a group trend",
        "cn_def": "動作；移動；運動"
      }
    ]
  },
  "motion": {
    "pos": "n.",
    "en_def": "the action or process of moving or being moved; gesture",
    "cn_def": "移動；動作；提議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or process of moving or being moved; gesture",
        "cn_def": "移動；動作；提議"
      }
    ]
  },
  "effect": {
    "pos": "n.",
    "en_def": "a change which is a result or consequence of an action or other cause",
    "cn_def": "影響；效果；結果",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change which is a result or consequence of an action or other cause",
        "cn_def": "影響；效果；結果"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
