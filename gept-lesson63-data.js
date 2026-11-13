// Lesson 63 Quiz Data: Dimensions, Spatial Measurements, Broadcasting & Navigation
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 63 - Dimensions, Spatial Measurements, Broadcasting & Navigation",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "narrow",
    "pos": "adj. / v.",
    "cn_def": "狹窄的；使變窄",
    "en_def": "limited in width; not wide; to become less wide",
    "sentence": "The old mountain trail became extremely {{BLANK}} near the rock cliff, so hikers had to walk in single file.",
    "cn": "靠近岩石懸崖邊的老山徑變得極其狹窄，因此登山者不得不排成單行前進。"
  },
  {
    "word": "wide",
    "pos": "adj. / adv.",
    "cn_def": "寬闊的；廣泛地",
    "en_def": "measuring a lot from side to side; broad; fully",
    "sentence": "The city government built a {{BLANK}} new boulevard with dedicated bicycle lanes and bright streetlights.",
    "cn": "市政府建造了一條設有專用自行車道和明亮路燈的寬闊新林蔭大道。"
  },
  {
    "word": "width",
    "pos": "n.",
    "cn_def": "寬度",
    "en_def": "the distance or measurement from side to side",
    "sentence": "The interior designer measured the exact {{BLANK}} of the living room window before ordering custom silk curtains.",
    "cn": "室內設計師在訂製絲綢窗簾之前，測量了客廳窗戶的精確寬度。"
  },
  {
    "word": "length",
    "pos": "n.",
    "cn_def": "長度",
    "en_def": "the measurement of something from end to end",
    "sentence": "The luxury sailing yacht measures over twenty meters in {{BLANK}}, and it can accommodate twelve passengers comfortably.",
    "cn": "這艘豪華帆船遊艇長度超過二十公尺，可舒適容納十二名乘客。"
  },
  {
    "word": "height",
    "pos": "n.",
    "cn_def": "高度；身高",
    "en_def": "the measurement of someone or something from base to top",
    "sentence": "My younger brother has grown so fast this year that he is now almost the same {{BLANK}} as our father.",
    "cn": "我的弟弟今年長得非常快，以至於他現在的身高幾乎和我們父親一樣高了。"
  },
  {
    "word": "scale",
    "pos": "n. / v.",
    "cn_def": "磅秤；規模；比例尺",
    "en_def": "a weighing device; relative size or extent; to climb",
    "sentence": "The doctor asked the patient to step onto the medical {{BLANK}} to record his body weight before the examination.",
    "cn": "醫生請病人在檢查前站上醫療用磅秤，以便記錄他的體重。"
  },
  {
    "word": "broad",
    "pos": "adj.",
    "cn_def": "寬廣的；廣泛的",
    "en_def": "wide in extent from side to side; spacious",
    "sentence": "The professional swimmer has very {{BLANK}} shoulders and muscular arms from years of rigorous daily training.",
    "cn": "這位專業游泳選手由於多年嚴格的日常訓練，擁有非常寬廣的肩膀與肌肉發達的雙臂。"
  },
  {
    "word": "broadcast",
    "pos": "v. / n.",
    "cn_def": "廣播；播送",
    "en_def": "to transmit programs on television or radio",
    "sentence": "The national television station will {{BLANK}} the exciting international baseball championship live from Tokyo tonight.",
    "cn": "國家電視台今晚將從東京現場實況轉播激動人心的國際棒球錦標賽。"
  },
  {
    "word": "address",
    "pos": "n. / v.",
    "cn_def": "地址；致詞；處理",
    "en_def": "the details of where someone lives; to speak formally to",
    "sentence": "Please write your permanent home {{BLANK}} and contact telephone number clearly at the top of the registration form.",
    "cn": "請在註冊表格頂端清楚寫下您的戶籍地址與聯絡電話號碼。"
  },
  {
    "word": "direct",
    "pos": "adj. / v.",
    "cn_def": "直達的；指引；引導",
    "en_def": "going in a straight line without stopping; to guide",
    "sentence": "Passengers traveling on business prefer to take a {{BLANK}} flight to London because it saves several hours of layover time.",
    "cn": "出差旅行的乘客偏好搭乘直飛倫敦的航班，因為這樣可以節省數小時的中途轉機時間。"
  }
];

const MCQS = [
  {
    "q": "The historic stone bridge is too ______ for two cars to pass each other at the same time, so drivers take turns.",
    "options": [
      "narrow",
      "broad",
      "wide",
      "direct"
    ],
    "answer": 0,
    "cn": "這座歷史石橋太狹窄了，無法讓兩輛車同時會車通過，因此駕駛人必須輪流通行。 【選項解析】(A) broad 寬廣的  (B) narrow 狹窄的  (C) wide 寬闊的  (D) direct 直達的。無法兩車並行說明橋面 narrow。",
    "vocabIndex": 0
  },
  {
    "q": "The heavy wooden gate swung ______ open when the palace guards welcomed the foreign visitors inside.",
    "options": [
      "narrow",
      "direct",
      "scale",
      "wide"
    ],
    "answer": 3,
    "cn": "當皇宮衛兵歡迎外國訪客進入時，厚重的木門大開著。 【選項解析】(A) narrow 狹窄的  (B) direct 直達的  (C) wide 敞開地  (D) scale 磅秤。swung wide open 表示「大門敞開」。",
    "vocabIndex": 1
  },
  {
    "q": "The carpenter measured the ______ of the hallway to ensure that the refrigerator could pass through safely.",
    "options": [
      "broadcast",
      "width",
      "address",
      "direct"
    ],
    "answer": 1,
    "cn": "木匠測量了走廊的寬度，以確保冰箱能夠安全通過。 【選項解析】(A) width 寬度  (B) broadcast 廣播  (C) address 地址  (D) direct 直達的。通道兩側間距指 width。",
    "vocabIndex": 2
  },
  {
    "q": "The suspension bridge extends across the river for a total ______ of nearly two kilometers.",
    "options": [
      "address",
      "scale",
      "length",
      "broadcast"
    ],
    "answer": 2,
    "cn": "這座懸索橋跨越河流，總長度接近兩公里。 【選項解析】(A) address 地址  (B) scale 規模  (C) length 長度  (D) broadcast 廣播。橋樑端到端距離為 length。",
    "vocabIndex": 3
  },
  {
    "q": "Due to his impressive ______, Samuel was selected as the starting center for the high school basketball team.",
    "options": [
      "height",
      "scale",
      "broadcast",
      "width"
    ],
    "answer": 0,
    "cn": "由於他令人印象深刻的身高，塞繆爾被選為高中籃球隊的先發中鋒。 【選項解析】(A) width 寬度  (B) scale 磅秤  (C) broadcast 廣播  (D) height 身高。籃球員身材優勢為 height。",
    "vocabIndex": 4
  },
  {
    "q": "She stood nervously on the bathroom ______ every Monday morning to check whether her new fitness diet was working.",
    "options": [
      "length",
      "scale",
      "address",
      "width"
    ],
    "answer": 1,
    "cn": "她每週一早上緊張地站在浴室磅秤上，檢查新健康飲食計畫是否見效。 【選項解析】(A) length 長度  (B) scale 磅秤  (C) address 地址  (D) width 寬度。浴室測體重器具為 scale。",
    "vocabIndex": 5
  },
  {
    "q": "The athlete smiled with a ______ grin when the principal presented him with the gold medal.",
    "options": [
      "narrow",
      "direct",
      "broad",
      "scale"
    ],
    "answer": 2,
    "cn": "當校長向運動員頒發金牌時，他臉上露出了燦爛的笑容。 【選項解析】(A) narrow 狹窄的  (B) direct 直達的  (C) broad 燦爛的；寬闊的  (D) scale 磅秤。a broad grin 表示「燦爛滿面的笑容」。",
    "vocabIndex": 6
  },
  {
    "q": "The sports network will ______ the final match of the World Cup to millions of viewers around the globe.",
    "options": [
      "address",
      "scale",
      "narrow",
      "broadcast"
    ],
    "answer": 3,
    "cn": "體育電視網將向全球數百萬觀眾現場轉播世界盃決賽。 【選項解析】(A) address 致詞  (B) broadcast 轉播  (C) narrow 縮小  (D) scale 攀登。電視傳播賽事用 broadcast。",
    "vocabIndex": 7
  },
  {
    "q": "If you move to a new apartment, don't forget to update your mailing ______ with the post office and your bank.",
    "options": [
      "length",
      "address",
      "height",
      "width"
    ],
    "answer": 1,
    "cn": "如果你搬進新公寓，別忘了向郵局與銀行更新你的郵寄地址。 【選項解析】(A) address 地址  (B) length 長度  (C) height 身高  (D) width 寬度。收信郵寄資訊為 mailing address。",
    "vocabIndex": 8
  },
  {
    "q": "We decided to take a ______ train from Taipei to Kaohsiung so that we would arrive in time for lunch.",
    "options": [
      "narrow",
      "broad",
      "direct",
      "wide"
    ],
    "answer": 2,
    "cn": "我們決定搭乘從台北到高雄的直達火車，以便能及時趕上吃午餐。 【選項解析】(A) narrow 狹窄的  (B) broad 寬廣的  (C) direct 直達的  (D) wide 寬闊的。中途不轉車的班次為 direct train。",
    "vocabIndex": 9
  },
  {
    "q": "Be careful when driving down this ______ alley because parked scooters leave very little room for vehicles.",
    "options": [
      "narrow",
      "wide",
      "direct",
      "broad"
    ],
    "answer": 0,
    "cn": "開車進這條狹窄巷弄時要小心，因為停放的機車給車輛留下的空間非常有限。 【選項解析】(A) broad 寬廣的  (B) wide 寬闊的  (C) direct 直達的  (D) narrow 狹窄的。巷弄空間小指 narrow alley。",
    "vocabIndex": 0
  },
  {
    "q": "The park features a ______ lawn where families can spread picnic blankets and play games on weekends.",
    "options": [
      "narrow",
      "direct",
      "height",
      "wide"
    ],
    "answer": 3,
    "cn": "該公園有一片寬闊的草坪，家庭可以在週末鋪上野餐墊玩遊戲。 【選項解析】(A) narrow 狹窄的  (B) wide 寬闊的  (C) height 高度  (D) direct 直達的。廣大平坦草坪為 wide lawn。",
    "vocabIndex": 1
  },
  {
    "q": "The fabric is sold by the meter, but you must specify both the ______ and the color you need.",
    "options": [
      "width",
      "address",
      "broadcast",
      "scale"
    ],
    "answer": 0,
    "cn": "布料按公尺出售，但你必須同時註明所需的寬度與顏色。 【選項解析】(A) broadcast 廣播  (B) address 地址  (C) width 寬度  (D) scale 磅秤。布匹規格尺寸為 width。",
    "vocabIndex": 2
  },
  {
    "q": "A regular football field has a ______ of one hundred yards between the two goal lines.",
    "options": [
      "height",
      "width",
      "length",
      "scale"
    ],
    "answer": 2,
    "cn": "正規美式足球場在兩個達陣球門線之間具有一百碼的長度。 【選項解析】(A) height 高度  (B) width 寬度  (C) length 長度  (D) scale 比例尺。球場兩端長度為 length。",
    "vocabIndex": 3
  },
  {
    "q": "The skyscraper rose to an astounding ______ of five hundred meters, offering panoramic views of the entire valley.",
    "options": [
      "width",
      "height",
      "address",
      "scale"
    ],
    "answer": 1,
    "cn": "這座摩天大樓聳立達五百公尺的驚人高度，可俯瞰整個山谷的全景。 【選項解析】(A) height 高度  (B) width 寬度  (C) address 地址  (D) scale 規模。建築物垂直垂直尺寸為 height。",
    "vocabIndex": 4
  },
  {
    "q": "The government launched a relief project on a massive ______ to reconstruct homes destroyed by the earthquake.",
    "options": [
      "address",
      "broadcast",
      "length",
      "scale"
    ],
    "answer": 3,
    "cn": "政府展開了一項大規模的救援重建計畫，以重建因地震被毀的家園。 【選項解析】(A) address 地址  (B) scale 規模  (C) length 長度  (D) broadcast 廣播。on a massive scale 為固定搭配「大規模地」。",
    "vocabIndex": 5
  },
  {
    "q": "Through the ______ window of the harbor lighthouse, the watchman could observe incoming cargo ships.",
    "options": [
      "narrow",
      "broad",
      "direct",
      "scale"
    ],
    "answer": 1,
    "cn": "透過港口燈塔的寬闊窗戶，值班員能夠觀察進港的貨船。 【選項解析】(A) narrow 狹窄的  (B) direct 直達的  (C) broad 寬闊的  (D) scale 磅秤。窗戶視野寬大為 broad window。",
    "vocabIndex": 6
  },
  {
    "q": "Several radio channels will ______ emergency weather warnings throughout the night as the typhoon approaches.",
    "options": [
      "address",
      "direct",
      "broadcast",
      "scale"
    ],
    "answer": 2,
    "cn": "隨著颱風逼近，數個廣播頻道將整夜播送緊急天氣警報。 【選項解析】(A) address 致詞  (B) broadcast 廣播  (C) direct 引導  (D) scale 攀登。廣播播送警報為 broadcast warnings。",
    "vocabIndex": 7
  },
  {
    "q": "The letter was returned to the sender because the envelope had an incomplete and incorrect delivery ______.",
    "options": [
      "height",
      "width",
      "length",
      "address"
    ],
    "answer": 3,
    "cn": "信件被退回給寄件人，因為信封上的投遞地址不完整且錯誤。 【選項解析】(A) address 地址  (B) width 寬度  (C) length 長度  (D) height 高度。信件投遞目的地為 address。",
    "vocabIndex": 8
  },
  {
    "q": "The tour guide gave ______ instructions to the travelers so that nobody would get lost in the busy museum.",
    "options": [
      "direct",
      "broad",
      "wide",
      "narrow"
    ],
    "answer": 0,
    "cn": "導遊向旅客發出了直接明確的指示，以免有人在繁忙的博物館中迷路。 【選項解析】(A) narrow 狹隘的  (B) broad 廣泛的  (C) wide 寬泛的  (D) direct 直接明確的。direct instructions 指明確直截的指示。",
    "vocabIndex": 9
  },
  {
    "q": "The cat squeezed its flexible body through a ______ opening in the garden fence to catch a mouse.",
    "options": [
      "direct",
      "wide",
      "broad",
      "narrow"
    ],
    "answer": 3,
    "cn": "貓咪擠過花園圍欄上的狹窄縫隙，去抓一隻老鼠。 【選項解析】(A) direct 直接的  (B) narrow 狹窄的  (C) broad 寬廣的  (D) wide 寬闊的。微小縫隙為 narrow opening。",
    "vocabIndex": 0
  },
  {
    "q": "He opened his arms ______ to hug his grandparents when they arrived at the airport terminal.",
    "options": [
      "direct",
      "narrow",
      "wide",
      "scale"
    ],
    "answer": 2,
    "cn": "當祖父母抵達機場航廈時，他張開雙臂熱情擁抱他們。 【選項解析】(A) wide 張開地  (B) narrow 狹窄的  (C) direct 直接的  (D) scale 磅秤。opened arms wide 為「張大雙臂」。",
    "vocabIndex": 1
  },
  {
    "q": "The architect doubled the ______ of the balcony so that residents could place outdoor tables and chairs comfortably.",
    "options": [
      "broadcast",
      "width",
      "address",
      "scale"
    ],
    "answer": 1,
    "cn": "建築師將陽台的寬度增加了一倍，以便住戶可以舒適地放置戶外桌椅。 【選項解析】(A) broadcast 廣播  (B) address 地址  (C) width 寬度  (D) scale 磅秤。陽台側邊跨距為 width。",
    "vocabIndex": 2
  },
  {
    "q": "The mayor will ______ the city council tomorrow morning to discuss the annual education budget.",
    "options": [
      "address",
      "broadcast",
      "direct",
      "scale"
    ],
    "answer": 0,
    "cn": "市長明天上午將向市議會發表演說，討論年度教育預算。 【選項解析】(A) broadcast 廣播  (B) address 向…致詞  (C) direct 指導  (D) scale 攀登。address the council 表示「向議會發表演講」。",
    "vocabIndex": 8
  },
  {
    "q": "There is no ______ bus route connecting the two remote villages, so travelers have to change buses in the city.",
    "options": [
      "narrow",
      "direct",
      "broad",
      "wide"
    ],
    "answer": 1,
    "cn": "沒有直達公車路線連接這兩個偏遠村莊，因此旅客必須在城裡轉車。 【選項解析】(A) narrow 狹窄的  (B) broad 廣闊的  (C) direct 直達的  (D) wide 寬廣的。direct bus route 為「直達公車路線」。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "narrow": {
    "pos": "adj. / v.",
    "en_def": "limited in width; not wide; to become less wide",
    "cn_def": "狹窄的；使變窄",
    "combined": [
      {
        "pos": "adj. / v.",
        "en_def": "limited in width; not wide; to become less wide",
        "cn_def": "狹窄的；使變窄"
      }
    ]
  },
  "wide": {
    "pos": "adj. / adv.",
    "en_def": "measuring a lot from side to side; broad; fully",
    "cn_def": "寬闊的；廣泛地",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "measuring a lot from side to side; broad; fully",
        "cn_def": "寬闊的；廣泛地"
      }
    ]
  },
  "width": {
    "pos": "n.",
    "en_def": "the distance or measurement from side to side",
    "cn_def": "寬度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the distance or measurement from side to side",
        "cn_def": "寬度"
      }
    ]
  },
  "length": {
    "pos": "n.",
    "en_def": "the measurement of something from end to end",
    "cn_def": "長度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the measurement of something from end to end",
        "cn_def": "長度"
      }
    ]
  },
  "height": {
    "pos": "n.",
    "en_def": "the measurement of someone or something from base to top",
    "cn_def": "高度；身高",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the measurement of someone or something from base to top",
        "cn_def": "高度；身高"
      }
    ]
  },
  "scale": {
    "pos": "n. / v.",
    "en_def": "a weighing device; relative size or extent; to climb",
    "cn_def": "磅秤；規模；比例尺",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a weighing device; relative size or extent; to climb",
        "cn_def": "磅秤；規模；比例尺"
      }
    ]
  },
  "broad": {
    "pos": "adj.",
    "en_def": "wide in extent from side to side; spacious",
    "cn_def": "寬廣的；廣泛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "wide in extent from side to side; spacious",
        "cn_def": "寬廣的；廣泛的"
      }
    ]
  },
  "broadcast": {
    "pos": "v. / n.",
    "en_def": "to transmit programs on television or radio",
    "cn_def": "廣播；播送",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to transmit programs on television or radio",
        "cn_def": "廣播；播送"
      }
    ]
  },
  "address": {
    "pos": "n. / v.",
    "en_def": "the details of where someone lives; to speak formally to",
    "cn_def": "地址；致詞；處理",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the details of where someone lives; to speak formally to",
        "cn_def": "地址；致詞；處理"
      }
    ]
  },
  "direct": {
    "pos": "adj. / v.",
    "en_def": "going in a straight line without stopping; to guide",
    "cn_def": "直達的；指引；引導",
    "combined": [
      {
        "pos": "adj. / v.",
        "en_def": "going in a straight line without stopping; to guide",
        "cn_def": "直達的；指引；引導"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
