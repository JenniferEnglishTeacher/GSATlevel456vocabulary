// Lesson 17 Quiz Data: Home Fixtures, Domestic Appliances & Floor Coverings
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 17 - Home Fixtures, Domestic Appliances & Floor Coverings",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ceiling",
    "pos": "n.",
    "cn_def": "天花板",
    "en_def": "the overhead upper surface of a room",
    "sentence": "The historic cathedral features a magnificent dome with biblical scenes painted across the high {{BLANK}}.",
    "cn": "這座歷史悠久的大教堂擁有壯麗的穹頂，高聳的天花板上繪製著聖經場景。"
  },
  {
    "word": "roof",
    "pos": "n.",
    "cn_def": "屋頂",
    "en_def": "the structure forming the upper covering of a building",
    "sentence": "A violent typhoon damaged the terracotta tiles, so two workers climbed up to repair the house {{BLANK}}.",
    "cn": "強烈颱風破壞了紅陶瓦片，所以兩名工人爬上去修復房子的屋頂。"
  },
  {
    "word": "curtain",
    "pos": "n.",
    "cn_def": "窗簾；簾子",
    "en_def": "a piece of hanging cloth used to screen a window",
    "sentence": "Because the afternoon sunlight was shining directly into the study, Linda pulled the thick velvet {{BLANK}} closed.",
    "cn": "因為午後的陽光直接照進書房，琳達把厚重的天鵝絨窗簾拉上了。"
  },
  {
    "word": "dryer",
    "pos": "n.",
    "cn_def": "烘乾機；吹風機",
    "en_def": "an appliance that removes moisture, especially for clothes or hair",
    "sentence": "After washing his muddy soccer kit, Tom placed the clean uniforms into the electric clothes {{BLANK}}.",
    "cn": "在洗好沾滿泥巴的足球裝備後，湯姆把乾淨的球衣放進了電動乾衣機中。"
  },
  {
    "word": "heater",
    "pos": "n.",
    "cn_def": "暖氣機；電暖爐",
    "en_def": "an apparatus used for warming the air in a room or building",
    "sentence": "When mountain temperatures dropped below zero degrees in January, we gathered around the portable electric {{BLANK}}.",
    "cn": "當一月份山區氣溫降至零度以下時，我們聚集在便攜式電暖爐周圍取暖。"
  },
  {
    "word": "microwave",
    "pos": "n.",
    "cn_def": "微波爐",
    "en_def": "an oven that cooks or warms food using high-frequency electromagnetic waves",
    "sentence": "If you arrive home late and find the dinner cold, you can reheat the chicken soup in the kitchen {{BLANK}}.",
    "cn": "如果你很晚才到家發現晚餐涼了，你可以把雞湯放進廚房微波爐裡重新加熱。"
  },
  {
    "word": "oven",
    "pos": "n.",
    "cn_def": "烤箱",
    "en_def": "an enclosed compartment used for baking or roasting food",
    "sentence": "Mother preheated the electric baking {{BLANK}} to 180 degrees before putting the apple pie inside.",
    "cn": "母親在把蘋果派放進去之前，先把電烤箱預熱到攝氏一百八十度。"
  },
  {
    "word": "stove",
    "pos": "n.",
    "cn_def": "瓦斯爐；火爐",
    "en_def": "an apparatus for cooking or heating that operates by burning fuel or electricity",
    "sentence": "Always remember to turn off the gas knobs on the kitchen {{BLANK}} before leaving the house.",
    "cn": "出門前請務必記得關閉廚房瓦斯爐上的旋鈕開關。"
  },
  {
    "word": "carpet",
    "pos": "n.",
    "cn_def": "地毯",
    "en_def": "a thick heavy woven floor covering covering an entire room",
    "sentence": "The luxury presidential suite was decorated with Persian rugs and a thick, soft woolen {{BLANK}} on the floor.",
    "cn": "豪華總統套房鋪設著波斯地毯，地板上鋪著一層厚實柔軟的羊毛地毯。"
  },
  {
    "word": "mat",
    "pos": "n.",
    "cn_def": "地墊；門墊；墊子",
    "en_def": "a small piece of coarse material placed on a floor for wiping shoes",
    "sentence": "Before stepping into the Japanese-style living room, visitors wipe the mud off their shoes on the door {{BLANK}}.",
    "cn": "在走進日式客廳之前，訪客會在門墊上擦掉鞋子上的泥土。"
  }
];

const MCQS = [
  {
    "q": "We hired an electrician to install a modern crystal chandelier directly onto the high living room ______.",
    "options": [
      "mat",
      "carpet",
      "stove",
      "ceiling"
    ],
    "answer": 3,
    "cn": "我們僱用了一名電工，把一盞現代水晶吊燈直接安裝在客廳挑高的天花板上。 【選項解析】(A) ceiling 天花板  (B) carpet 地毯  (C) stove 瓦斯爐  (D) mat 地墊。吊燈安裝於 ceiling 上。",
    "vocabIndex": 0
  },
  {
    "q": "Heavy snow accumulated on the slanted wooden ______ of the alpine cottage during the winter storm.",
    "options": [
      "curtain",
      "roof",
      "microwave",
      "dryer"
    ],
    "answer": 1,
    "cn": "在冬季暴風雪期間，大量積雪堆積在高山小屋傾斜的木屋頂上。 【選項解析】(A) curtain 窗簾  (B) roof 屋頂  (C) microwave 微波爐  (D) dryer 乾衣機。積雪堆積在 slanted wooden roof。",
    "vocabIndex": 1
  },
  {
    "q": "Sunlight woke the baby early, so mother bought a blackout ______ to keep the nursery dim and quiet.",
    "options": [
      "heater",
      "stove",
      "curtain",
      "oven"
    ],
    "answer": 2,
    "cn": "陽光很早就把嬰兒吵醒了，所以媽媽買了一副遮光窗簾以保持嬰兒房昏暗寧靜。 【選項解析】(A) heater 暖氣  (B) stove 爐子  (C) curtain 窗簾  (D) oven 烤箱。遮光使用 blackout curtain。",
    "vocabIndex": 2
  },
  {
    "q": "If you leave wet towels sitting inside the laundry ______ after the cycle ends, they will develop an unpleasant smell.",
    "options": [
      "dryer",
      "mat",
      "roof",
      "ceiling"
    ],
    "answer": 0,
    "cn": "如果烘衣循環結束後把濕毛巾留在洗衣烘衣機裡，毛巾會產生難聞的氣味。 【選項解析】(A) ceiling 天花板  (B) mat 墊子  (C) roof 屋頂  (D) dryer 乾衣機。洗衣烘乾設備為 laundry dryer。",
    "vocabIndex": 3
  },
  {
    "q": "In the cold mountain cabin, our family sat around the kerosene ______ to warm our freezing hands.",
    "options": [
      "roof",
      "carpet",
      "curtain",
      "heater"
    ],
    "answer": 3,
    "cn": "在寒冷的高山木屋中，我們全家圍坐在煤油暖爐旁溫暖凍僵的雙手。 【選項解析】(A) heater 暖爐  (B) carpet 地毯  (C) curtain 窗簾  (D) roof 屋頂。取暖設備為 kerosene heater。",
    "vocabIndex": 4
  },
  {
    "q": "You can defrost that frozen beef steak in three minutes if you use the automatic setting on the ______.",
    "options": [
      "curtain",
      "mat",
      "microwave",
      "ceiling"
    ],
    "answer": 2,
    "cn": "如果你使用微波爐上的自動設定，可以在三分鐘內解凍那塊冷凍牛排。 【選項解析】(A) curtain 窗簾  (B) microwave 微波爐  (C) mat 墊子  (D) ceiling 天花板。快速解凍用 microwave。",
    "vocabIndex": 5
  },
  {
    "q": "The pastry chef placed twenty chocolate chip cookies on a baking sheet and slid them into the hot ______.",
    "options": [
      "ceiling",
      "oven",
      "curtain",
      "carpet"
    ],
    "answer": 1,
    "cn": "西點廚師把二十塊巧克力脆片餅乾放在烤盤上，並滑進滾燙的烤箱中。 【選項解析】(A) ceiling 天花板  (B) curtain 窗簾  (C) oven 烤箱  (D) carpet 地毯。烘烤餅乾使用 hot oven。",
    "vocabIndex": 6
  },
  {
    "q": "A pot of vegetable broth was bubbling gently over the medium flame on the four-burner kitchen ______.",
    "options": [
      "stove",
      "carpet",
      "ceiling",
      "roof"
    ],
    "answer": 0,
    "cn": "一鍋蔬菜高湯在四口瓦斯爐的中火上微滾冒泡。 【選項解析】(A) roof 屋頂  (B) carpet 地毯  (C) ceiling 天花板  (D) stove 瓦斯爐。瓦斯爐火上煮湯為 kitchen stove。",
    "vocabIndex": 7
  },
  {
    "q": "Walking barefoot across the plush living room ______ feels wonderfully soft during chilly winter mornings.",
    "options": [
      "ceiling",
      "roof",
      "carpet",
      "stove"
    ],
    "answer": 2,
    "cn": "在寒冷的冬日早晨，赤腳走在客廳厚實柔軟的地毯上感覺無比舒服。 【選項解析】(A) carpet 地毯  (B) roof 屋頂  (C) ceiling 天花板  (D) stove 爐子。赤腳踩在 plush carpet 上。",
    "vocabIndex": 8
  },
  {
    "q": "Please wipe your wet shoes thoroughly on the rubber welcome ______ before entering the classroom.",
    "options": [
      "mat",
      "ceiling",
      "heater",
      "oven"
    ],
    "answer": 0,
    "cn": "在進入教室之前，請在橡膠歡迎門墊上徹底擦乾淨你濕漉漉的鞋子。 【選項解析】(A) ceiling 天花板  (B) mat 地墊  (C) heater 暖爐  (D) oven 烤箱。擦鞋門墊為 welcome mat。",
    "vocabIndex": 9
  },
  {
    "q": "Water stains began to appear on the white plaster ______ because the bathroom pipe on the floor above was leaking.",
    "options": [
      "carpet",
      "ceiling",
      "stove",
      "mat"
    ],
    "answer": 1,
    "cn": "因為樓上浴室水管漏水，白色灰泥天花板上開始出現水漬。 【選項解析】(A) carpet 地毯  (B) stove 爐子  (C) ceiling 天花板  (D) mat 地墊。天花板漏水為 water stains on plaster ceiling。",
    "vocabIndex": 0
  },
  {
    "q": "Solar panels were installed across the south-facing ______ of the school library to generate clean electricity.",
    "options": [
      "curtain",
      "microwave",
      "dryer",
      "roof"
    ],
    "answer": 3,
    "cn": "學校圖書館朝南的屋頂上安裝了太陽能電池板以產生乾淨的電力。 【選項解析】(A) curtain 窗簾  (B) microwave 微波爐  (C) dryer 乾衣機  (D) roof 屋頂。屋頂裝太陽能板為 south-facing roof。",
    "vocabIndex": 1
  },
  {
    "q": "The stage actor waited nervously behind the heavy red velvet ______ before walking out to face the crowd.",
    "options": [
      "curtain",
      "stove",
      "oven",
      "heater"
    ],
    "answer": 0,
    "cn": "舞台劇演員在厚重紅色天鵝絨布幔後緊張等待，然後才步出舞台面對觀眾。 【選項解析】(A) curtain 舞台布幔  (B) stove 爐子  (C) oven 烤箱  (D) heater 暖爐。舞台簾幕為 velvet curtain。",
    "vocabIndex": 2
  },
  {
    "q": "Hang your delicate silk blouses on a clothesline instead of tossing them into the hot tumbling ______.",
    "options": [
      "ceiling",
      "roof",
      "dryer",
      "mat"
    ],
    "answer": 2,
    "cn": "把你嬌貴的絲質襯衫掛在曬衣繩上，不要扔進滾燙滾動的烘衣機裡。 【選項解析】(A) ceiling 天花板  (B) dryer 烘乾機  (C) roof 屋頂  (D) mat 地墊。高溫烘乾設備為 tumbling dryer。",
    "vocabIndex": 3
  },
  {
    "q": "Turn on the bathroom space ______ ten minutes before taking a shower so that the room becomes comfortably warm.",
    "options": [
      "carpet",
      "heater",
      "curtain",
      "roof"
    ],
    "answer": 1,
    "cn": "在沖澡前十分鐘開啟浴室暖風機，這樣整個房間就會變得溫暖舒適。 【選項解析】(A) carpet 地毯  (B) curtain 窗簾  (C) heater 暖風機  (D) roof 屋頂。浴室加溫器為 bathroom space heater。",
    "vocabIndex": 4
  },
  {
    "q": "Reheating pizza in a ______ makes the cheese melt, but baking it in an oven keeps the crust crispy.",
    "options": [
      "ceiling",
      "roof",
      "mat",
      "microwave"
    ],
    "answer": 3,
    "cn": "用微波爐重新加熱披薩能讓起司融化，但在烤箱裡烤能讓餅皮保持酥脆。 【選項解析】(A) ceiling 天花板  (B) roof 屋頂  (C) mat 墊子  (D) microwave 微波爐。快速熱融起司使用 microwave。",
    "vocabIndex": 5
  },
  {
    "q": "Don't touch the interior metal racks of the baking ______ without wearing thick heat-resistant mitts.",
    "options": [
      "oven",
      "curtain",
      "carpet",
      "roof"
    ],
    "answer": 0,
    "cn": "未戴上厚耐熱手套之前，切勿徒手觸碰烘烤烤箱內部的金屬架。 【選項解析】(A) oven 烤箱  (B) curtain 窗簾  (C) carpet 地毯  (D) roof 屋頂。高溫烘焙設備為 baking oven。",
    "vocabIndex": 6
  },
  {
    "q": "Mother placed a large iron tea kettle directly over the gas burner on the stainless steel ______.",
    "options": [
      "roof",
      "mat",
      "ceiling",
      "stove"
    ],
    "answer": 3,
    "cn": "母親將大鐵水壺直接放在不鏽鋼瓦斯爐的燃氣爐頭上。 【選項解析】(A) roof 屋頂  (B) stove 瓦斯爐  (C) ceiling 天花板  (D) mat 墊子。爐火加熱水壺在 stainless steel stove。",
    "vocabIndex": 7
  },
  {
    "q": "Red wine spilled across the cream-colored bedroom ______, and it took professional cleaners two hours to remove the stain.",
    "options": [
      "ceiling",
      "carpet",
      "stove",
      "roof"
    ],
    "answer": 1,
    "cn": "紅酒灑在米色的臥室地毯上，專業清潔工花了兩小時才徹底清除污漬。 【選項解析】(A) ceiling 天花板  (B) stove 爐子  (C) carpet 地毯  (D) roof 屋頂。地面紡織鋪層為 bedroom carpet。",
    "vocabIndex": 8
  },
  {
    "q": "After getting out of the hot bathtub, step onto the absorbent cotton bath ______ to avoid slipping.",
    "options": [
      "ceiling",
      "roof",
      "mat",
      "heater"
    ],
    "answer": 2,
    "cn": "走出熱水浴缸後，踏在吸水的純棉浴室踏墊上以防滑倒。 【選項解析】(A) ceiling 天花板  (B) roof 屋頂  (C) heater 暖氣  (D) mat 腳踏墊。浴室吸水墊為 bath mat。",
    "vocabIndex": 9
  },
  {
    "q": "The tall office building was designed with suspended acoustic panels attached to the high concrete ______.",
    "options": [
      "ceiling",
      "carpet",
      "stove",
      "oven"
    ],
    "answer": 0,
    "cn": "這棟高層辦公大樓設計有安裝在挑高混凝土天花板上的吸音隔音板。 【選項解析】(A) ceiling 天花板  (B) carpet 地毯  (C) stove 爐子  (D) oven 烤箱。挑高混凝土上方為 concrete ceiling。",
    "vocabIndex": 0
  },
  {
    "q": "Firefighters climbed up tall hydraulic ladders to extinguish the flames blazing across the factory ______.",
    "options": [
      "curtain",
      "dryer",
      "microwave",
      "roof"
    ],
    "answer": 3,
    "cn": "消防隊員爬上高大的雲梯以撲滅在工廠屋頂上熊熊燃燒的烈火。 【選項解析】(A) curtain 窗簾  (B) roof 屋頂  (C) microwave 微波爐  (D) dryer 乾衣機。火勢蔓延於 factory roof。",
    "vocabIndex": 1
  },
  {
    "q": "Pulling back the bedroom ______ revealed a magnificent panorama of the sun rising over the distant mountains.",
    "options": [
      "heater",
      "curtain",
      "stove",
      "mat"
    ],
    "answer": 1,
    "cn": "拉開臥室窗簾，遠處群山頂上朝陽升起的壯麗全景展露無遺。 【選項解析】(A) heater 暖風機  (B) stove 爐子  (C) curtain 窗簾  (D) mat 墊子。拉開窗簾用 pulling back bedroom curtain。",
    "vocabIndex": 2
  },
  {
    "q": "Clean out the lint filter in your laundry ______ after every single load to prevent a potential fire hazard.",
    "options": [
      "ceiling",
      "roof",
      "dryer",
      "carpet"
    ],
    "answer": 2,
    "cn": "每次烘乾後請清除乾衣機內的棉絮濾網，以防止潛在的火災危險。 【選項解析】(A) ceiling 天花板  (B) roof 屋頂  (C) carpet 地毯  (D) dryer 乾衣機。清除濾網為 laundry dryer。",
    "vocabIndex": 3
  },
  {
    "q": "When winter storms knock out municipal power, our neighbors rely on a wood-burning ______ for warmth.",
    "options": [
      "curtain",
      "mat",
      "ceiling",
      "heater"
    ],
    "answer": 3,
    "cn": "當冬日暴風雨切斷市政電力時，我們的鄰居仰賴燃木火爐來獲取溫暖。 【選項解析】(A) heater 暖氣/火爐  (B) mat 墊子  (C) ceiling 天花板  (D) curtain 窗簾。供暖設備為 wood-burning heater。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "ceiling": {
    "pos": "n.",
    "en_def": "the overhead upper surface of a room",
    "cn_def": "天花板",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the overhead upper surface of a room",
        "cn_def": "天花板"
      }
    ]
  },
  "roof": {
    "pos": "n.",
    "en_def": "the structure forming the upper covering of a building",
    "cn_def": "屋頂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the structure forming the upper covering of a building",
        "cn_def": "屋頂"
      }
    ]
  },
  "curtain": {
    "pos": "n.",
    "en_def": "a piece of hanging cloth used to screen a window",
    "cn_def": "窗簾；簾子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of hanging cloth used to screen a window",
        "cn_def": "窗簾；簾子"
      }
    ]
  },
  "dryer": {
    "pos": "n.",
    "en_def": "an appliance that removes moisture, especially for clothes or hair",
    "cn_def": "烘乾機；吹風機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an appliance that removes moisture, especially for clothes or hair",
        "cn_def": "烘乾機；吹風機"
      }
    ]
  },
  "heater": {
    "pos": "n.",
    "en_def": "an apparatus used for warming the air in a room or building",
    "cn_def": "暖氣機；電暖爐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an apparatus used for warming the air in a room or building",
        "cn_def": "暖氣機；電暖爐"
      }
    ]
  },
  "microwave": {
    "pos": "n.",
    "en_def": "an oven that cooks or warms food using high-frequency electromagnetic waves",
    "cn_def": "微波爐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an oven that cooks or warms food using high-frequency electromagnetic waves",
        "cn_def": "微波爐"
      }
    ]
  },
  "oven": {
    "pos": "n.",
    "en_def": "an enclosed compartment used for baking or roasting food",
    "cn_def": "烤箱",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an enclosed compartment used for baking or roasting food",
        "cn_def": "烤箱"
      }
    ]
  },
  "stove": {
    "pos": "n.",
    "en_def": "an apparatus for cooking or heating that operates by burning fuel or electricity",
    "cn_def": "瓦斯爐；火爐",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an apparatus for cooking or heating that operates by burning fuel or electricity",
        "cn_def": "瓦斯爐；火爐"
      }
    ]
  },
  "carpet": {
    "pos": "n.",
    "en_def": "a thick heavy woven floor covering covering an entire room",
    "cn_def": "地毯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thick heavy woven floor covering covering an entire room",
        "cn_def": "地毯"
      }
    ]
  },
  "mat": {
    "pos": "n.",
    "en_def": "a small piece of coarse material placed on a floor for wiping shoes",
    "cn_def": "地墊；門墊；墊子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small piece of coarse material placed on a floor for wiping shoes",
        "cn_def": "地墊；門墊；墊子"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
