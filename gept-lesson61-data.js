// Lesson 61 Quiz Data: Units of Measurement, Numbers, Quantities & Addition
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 61 - Units of Measurement, Numbers, Quantities & Addition",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "meter",
    "pos": "n.",
    "cn_def": "公尺；計量器",
    "en_def": "a standard unit of length equal to 100 centimeters",
    "sentence": "The city built a new twenty-five {{BLANK}} swimming pool in the sports park, so local students can practice there every weekend.",
    "cn": "該市在體育公園新建了一座二十五公尺長的游泳池，因此當地學生每個週末都可以在那裡練習。"
  },
  {
    "word": "centimeter",
    "pos": "n.",
    "cn_def": "公分",
    "en_def": "a metric unit of length equal to one hundredth of a meter",
    "sentence": "The tailor carefully measured my sleeve length down to the last {{BLANK}}, and then he marked the fabric with yellow chalk.",
    "cn": "裁縫師仔細測量了我的袖長精確至最後一公分，然後他用黃色粉筆在布料上做了記號。"
  },
  {
    "word": "kilometer",
    "pos": "n.",
    "cn_def": "公里",
    "en_def": "a metric unit of length equal to 1,000 meters",
    "sentence": "My uncle drives thirty {{BLANK}} along the coastal highway every morning, but the fresh sea breeze always keeps him awake.",
    "cn": "我叔叔每天早晨沿著濱海公路開車三十公里，但是清新的海風總是讓他保持清醒。"
  },
  {
    "word": "inch",
    "pos": "n.",
    "cn_def": "英吋",
    "en_def": "a unit of length equal to 2.54 centimeters",
    "sentence": "The carpenter trimmed one {{BLANK}} off the wooden door, and then it finally fit into the old doorframe smoothly.",
    "cn": "木匠把木門切掉了一英吋，然後這扇門終於順暢地嵌進了舊門框中。"
  },
  {
    "word": "liter",
    "pos": "n.",
    "cn_def": "公升",
    "en_def": "a metric unit of volume equal to 1,000 cubic centimeters",
    "sentence": "During the intense summer marathon, each runner was handed half a {{BLANK}} of mineral water at every rest station.",
    "cn": "在炎熱激烈的夏季馬拉松比賽中，每個休息站都會遞給每位跑者半公升的礦泉水。"
  },
  {
    "word": "item",
    "pos": "n.",
    "cn_def": "項目；物品",
    "en_def": "an individual article or unit in a list or collection",
    "sentence": "Mother carefully checked every single {{BLANK}} on her grocery list, and then she walked toward the supermarket checkout counter.",
    "cn": "母親仔細核對了採購清單上的每一個項目，然後她朝著超級市場的收銀櫃台走去。"
  },
  {
    "word": "double",
    "pos": "adj. / v.",
    "cn_def": "雙倍的；加倍",
    "en_def": "twice as much or as many; to become twice as great",
    "sentence": "The hotel receptionist politely offered us a comfortable {{BLANK}} room with two large beds and a wonderful mountain view.",
    "cn": "飯店櫃檯接待員禮貌地為我們提供了一間帶有兩張大床和美麗山景的舒適雙人房。"
  },
  {
    "word": "quarter",
    "pos": "n.",
    "cn_def": "四分之一；一刻鐘",
    "en_def": "one of four equal parts of something; fifteen minutes",
    "sentence": "David saves a {{BLANK}} of his monthly allowance to buy English novels, and he puts the remaining coins into a ceramic bank.",
    "cn": "戴維每月省下四分之一的零用錢來買英文小說，並將剩餘的硬幣存入陶瓷存錢筒。"
  },
  {
    "word": "zero",
    "pos": "n. / adj.",
    "cn_def": "零；零度",
    "en_def": "the number or symbol 0; nil; nothing",
    "sentence": "The temperature on the high mountain dropped to five degrees below {{BLANK}} last night, so all the outdoor water pipes froze.",
    "cn": "昨晚高山上的氣溫降到了零下五度，因此戶外所有的水管都結凍了。"
  },
  {
    "word": "add",
    "pos": "v.",
    "cn_def": "添加；增加；相加",
    "en_def": "to put something with another thing to increase the size or amount",
    "sentence": "If the tomato soup tastes slightly too plain, you can {{BLANK}} a little sea salt and black pepper to improve the flavor.",
    "cn": "如果番茄湯嚐起來稍微太淡，你可以添加少許海鹽和黑胡椒以增添風味。"
  }
];

const MCQS = [
  {
    "q": "The runner dashed across the track and set a new national record in the four-hundred-______ race yesterday afternoon.",
    "options": [
      "liter",
      "meter",
      "quarter",
      "zero"
    ],
    "answer": 1,
    "cn": "昨天下午跑者衝過跑道，並在四百公尺賽跑中創下了新的國家紀錄。 【選項解析】(A) meter 公尺  (B) liter 公升  (C) quarter 四分之一  (D) zero 零。由 race（賽跑）可知填長度單位 meter。",
    "vocabIndex": 0
  },
  {
    "q": "The nurse measured the little girl's height on the wall chart and recorded that she had grown three ______ this year.",
    "options": [
      "centimeters",
      "items",
      "liters",
      "quarters"
    ],
    "answer": 0,
    "cn": "護士在牆壁身高表上測量了小女孩的身高，並記錄下她今年長高了三公分。 【選項解析】(A) liters 公升  (B) items 項目  (C) centimeters 公分  (D) quarters 四分之一。身高增長以 centimeters 計量。",
    "vocabIndex": 1
  },
  {
    "q": "The mountain village is located about fifteen ______ away from the nearest town, so villagers usually ride motorcycles to buy supplies.",
    "options": [
      "centimeters",
      "inches",
      "liters",
      "kilometers"
    ],
    "answer": 3,
    "cn": "這座山村距離最近的城鎮大約十五公里遠，所以村民通常騎機車去採買物資。 【選項解析】(A) centimeters 公分  (B) kilometers 公里  (C) liters 公升  (D) inches 英吋。城鎮間長距離以 kilometers 計算。",
    "vocabIndex": 2
  },
  {
    "q": "My father noticed that the wooden bookshelf was just one ______ too wide to fit between the two bedroom closets.",
    "options": [
      "double",
      "liter",
      "inch",
      "zero"
    ],
    "answer": 2,
    "cn": "我父親注意到木書架寬了一英吋，因此無法塞進兩個臥室衣櫃之間。 【選項解析】(A) inch 英吋  (B) liter 公升  (C) double 雙倍的  (D) zero 零。家具微小寬度差距以 inch 描述。",
    "vocabIndex": 3
  },
  {
    "q": "The recipe instructed the chef to pour two ______ of chicken broth into the large stainless steel pot before boiling.",
    "options": [
      "liters",
      "centimeters",
      "meters",
      "inches"
    ],
    "answer": 0,
    "cn": "食譜指示主廚在煮沸前，將兩公升的雞高湯倒入不銹鋼大鍋中。 【選項解析】(A) inches 英吋  (B) centimeters 公分  (C) meters 公尺  (D) liters 公升。液體容量單位為 liters。",
    "vocabIndex": 4
  },
  {
    "q": "Please review every single ______ on this packing list before leaving home, or you might forget your passport.",
    "options": [
      "liter",
      "item",
      "meter",
      "kilometer"
    ],
    "answer": 1,
    "cn": "出門前請仔細檢查這份行李清單上的每一個項目，否則你可能會忘記帶護照。 【選項解析】(A) liter 公升  (B) item 項目  (C) meter 公尺  (D) kilometer 公里。packing list 上指各個 item。",
    "vocabIndex": 5
  },
  {
    "q": "Because the train was fully booked for the holiday weekend, the railway company decided to ______ the number of passenger cars.",
    "options": [
      "add",
      "count",
      "double",
      "subtract"
    ],
    "answer": 2,
    "cn": "因為假週末期間火車票全數售罄，鐵路公司決定將客車車廂數量加倍。 【選項解析】(A) add 增加  (B) double 加倍  (C) count 計算  (D) subtract 減去。使數量增為兩倍用動詞 double。",
    "vocabIndex": 6
  },
  {
    "q": "The clock on the church tower struck a ______ past ten, and the wedding guests slowly walked into the chapel.",
    "options": [
      "zero",
      "centimeter",
      "liter",
      "quarter"
    ],
    "answer": 3,
    "cn": "教堂塔樓上的鐘敲響了十點一刻，婚禮賓客們緩步走進了禮拜堂。 【選項解析】(A) quarter 一刻鐘  (B) centimeter 公分  (C) liter 公升  (D) zero 零。a quarter past ten 表示「十點十五分」。",
    "vocabIndex": 7
  },
  {
    "q": "In extreme winter blizzards in northern Canada, temperatures frequently fall way below ______, freezing entire rivers solid.",
    "options": [
      "meter",
      "zero",
      "inch",
      "item"
    ],
    "answer": 1,
    "cn": "在加拿大北部的極端冬季暴風雪中，氣溫經常降至零度以下，使整條河流徹底凍結。 【選項解析】(A) meter 公尺  (B) inch 英吋  (C) zero 零  (D) item 項目。below zero 表示「零度以下」。",
    "vocabIndex": 8
  },
  {
    "q": "You should ______ some extra garlic and olive oil to the pasta sauce, and it will taste much more delicious.",
    "options": [
      "multiply",
      "double",
      "add",
      "measure"
    ],
    "answer": 2,
    "cn": "你應該在義大利麵醬裡加些大蒜與橄欖油，嚐起來會美味許多。 【選項解析】(A) multiply 乘  (B) double 加倍  (C) add 添加  (D) measure 測量。添加調味料使用動詞 add。",
    "vocabIndex": 9
  },
  {
    "q": "When the delivery truck arrived at our warehouse, the driver unloaded ten ______ of fresh cooking oil.",
    "options": [
      "liters",
      "inches",
      "meters",
      "items"
    ],
    "answer": 0,
    "cn": "當送貨卡車抵達我們的倉庫時，司機卸下了十公升的新鮮食用油。 【選項解析】(A) liters 公升  (B) inches 英吋  (C) meters 公尺  (D) items 項目。液體食用油單位為 liters。",
    "vocabIndex": 4
  },
  {
    "q": "The construction worker measured the concrete wall and found that it was exactly three ______ high.",
    "options": [
      "quarters",
      "zeroes",
      "liters",
      "meters"
    ],
    "answer": 3,
    "cn": "建築工人測量了混凝土牆，發現其高度正好是三公尺。 【選項解析】(A) quarters 一刻鐘  (B) meters 公尺  (C) liters 公升  (D) zeroes 零。圍牆高度一般以 meters 計量。",
    "vocabIndex": 0
  },
  {
    "q": "Even an error of one single ______ on the blueprint can cause serious structural problems for modern skyscrapers.",
    "options": [
      "quarter",
      "liter",
      "centimeter",
      "zero"
    ],
    "answer": 2,
    "cn": "即使在藍圖上僅有一公分的誤差，也可能對現代摩天大樓造成嚴重的結構問題。 【選項解析】(A) centimeter 公分  (B) liter 公升  (C) quarter 四分之一  (D) zero 零。藍圖精密測量單位為 centimeter。",
    "vocabIndex": 1
  },
  {
    "q": "The tourist walked nearly five ______ through the historic district, but his comfortable walking shoes kept his feet from aching.",
    "options": [
      "kilometers",
      "inches",
      "liters",
      "items"
    ],
    "answer": 0,
    "cn": "觀光客徒步穿過歷史街區近五公里，但他舒適的健走鞋保護了他的雙腳免於痠痛。 【選項解析】(A) liters 公升  (B) inches 英吋  (C) kilometers 公里  (D) items 項目。步行長距離以 kilometers 計算。",
    "vocabIndex": 2
  },
  {
    "q": "The seamstress used a flexible measuring tape to check the waistline, which had expanded by half an ______.",
    "options": [
      "item",
      "inch",
      "liter",
      "kilometer"
    ],
    "answer": 1,
    "cn": "女裁縫師用軟捲尺檢查腰圍，該腰圍已經擴大了半英吋。 【選項解析】(A) item 項目  (B) inch 英吋  (C) liter 公升  (D) kilometer 公里。身體圍度變化常以 inch 測量。",
    "vocabIndex": 3
  },
  {
    "q": "The auction house listed a rare antique vase as the final ______ to be sold at the evening charity gala.",
    "options": [
      "quarter",
      "meter",
      "centimeter",
      "item"
    ],
    "answer": 3,
    "cn": "拍賣行將一只稀有的古董花瓶列為當晚慈善晚會上拍賣的最後一件物品。 【選項解析】(A) quarter 四分之一  (B) meter 公尺  (C) item 項目；物品  (D) centimeter 公分。拍賣品指 item。",
    "vocabIndex": 5
  },
  {
    "q": "To prepare for the unexpected winter storm, the local grocery store decided to ______ its emergency candle inventory.",
    "options": [
      "add",
      "measure",
      "double",
      "reduce"
    ],
    "answer": 2,
    "cn": "為了防備意外的冬季暴風雪，當地雜貨店決定將緊急蠟燭的庫存加倍。 【選項解析】(A) add 增加  (B) measure 測量  (C) reduce 減少  (D) double 加倍。庫存量翻倍用動詞 double。",
    "vocabIndex": 6
  },
  {
    "q": "Nearly a ______ of the students in our class walk to school every morning, while the others take public buses.",
    "options": [
      "liter",
      "zero",
      "meter",
      "quarter"
    ],
    "answer": 3,
    "cn": "我們班近四分之一的學生每天步行上學，而其餘學生則搭乘公車。 【選項解析】(A) liter 公升  (B) quarter 四分之一  (C) meter 公尺  (D) zero 零。a quarter of the students 指「四分之一的學生」。",
    "vocabIndex": 7
  },
  {
    "q": "After answering all the tricky math questions incorrectly, the careless student received a painful score of ______ on his quiz.",
    "options": [
      "inch",
      "zero",
      "item",
      "meter"
    ],
    "answer": 1,
    "cn": "在將所有棘手的數學問題全部答錯後，粗心的學生在測驗中得到了令人痛苦的零分。 【選項解析】(A) inch 英吋  (B) item 項目  (C) zero 零  (D) meter 公尺。a score of zero 指「零分」。",
    "vocabIndex": 8
  },
  {
    "q": "Don't forget to ______ a few spoonfuls of honey to your lemon tea, or it will taste too sour to drink.",
    "options": [
      "add",
      "double",
      "divide",
      "count"
    ],
    "answer": 0,
    "cn": "別忘了在檸檬茶裡加幾匙蜂蜜，否則喝起來會太酸。 【選項解析】(A) add 添加  (B) double 加倍  (C) divide 分割  (D) count 計算。添加蜂蜜用 add。",
    "vocabIndex": 9
  },
  {
    "q": "The Olympic swimming pool is fifty ______ in length, allowing eight competitors to race side by side.",
    "options": [
      "liters",
      "meters",
      "quarters",
      "zeroes"
    ],
    "answer": 1,
    "cn": "奧運標準泳池長度為五十公尺，允許八名選手並肩競速。 【選項解析】(A) liters 公升  (B) meters 公尺  (C) quarters 一刻鐘  (D) zeroes 零。泳池長度單位為 meters。",
    "vocabIndex": 0
  },
  {
    "q": "The newborn kitten was so tiny that its entire body measured only ten ______ from nose to tail.",
    "options": [
      "liters",
      "items",
      "centimeters",
      "kilometers"
    ],
    "answer": 2,
    "cn": "新生的小貓非常嬌小，從鼻子到尾巴的整體長度只有十公分。 【選項解析】(A) liters 公升  (B) items 項目  (C) centimeters 公分  (D) kilometers 公里。小動物尺寸以 centimeters 測量。",
    "vocabIndex": 1
  },
  {
    "q": "The flight captain announced that the aircraft was cruising at an altitude of ten ______ above the clouds.",
    "options": [
      "kilometers",
      "inches",
      "liters",
      "quarters"
    ],
    "answer": 0,
    "cn": "機長宣布飛機正在雲層上方十公里的巡航高度飛行。 【選項解析】(A) inches 英吋  (B) kilometers 公里  (C) liters 公升  (D) quarters 四分之一。巡航飛行高度以 kilometers 計算。",
    "vocabIndex": 2
  },
  {
    "q": "The family ordered a ______ cheeseburger with two beef patties and crispy french fries at the drive-through window.",
    "options": [
      "single",
      "narrow",
      "broad",
      "double"
    ],
    "answer": 3,
    "cn": "這家人在得來速窗口點了一份帶有兩塊牛肉餅和脆薯條的雙層起司漢堡。 【選項解析】(A) single 單一的  (B) narrow 狹窄的  (C) double 雙層的  (D) broad 寬廣的。含有兩塊肉餅指 double cheeseburger。",
    "vocabIndex": 6
  },
  {
    "q": "Please ______ these two numbers together on your calculator, and tell the accountant the final sum immediately.",
    "options": [
      "double",
      "add",
      "measure",
      "cancel"
    ],
    "answer": 1,
    "cn": "請用計算機把這兩個數字加在一起，並立即告訴會計師最終的總和。 【選項解析】(A) add 相加  (B) double 加倍  (C) measure 測量  (D) cancel 取消。add numbers together 表示「將數字加總」。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "meter": {
    "pos": "n.",
    "en_def": "a standard unit of length equal to 100 centimeters",
    "cn_def": "公尺；計量器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a standard unit of length equal to 100 centimeters",
        "cn_def": "公尺；計量器"
      }
    ]
  },
  "centimeter": {
    "pos": "n.",
    "en_def": "a metric unit of length equal to one hundredth of a meter",
    "cn_def": "公分",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metric unit of length equal to one hundredth of a meter",
        "cn_def": "公分"
      }
    ]
  },
  "kilometer": {
    "pos": "n.",
    "en_def": "a metric unit of length equal to 1,000 meters",
    "cn_def": "公里",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metric unit of length equal to 1,000 meters",
        "cn_def": "公里"
      }
    ]
  },
  "inch": {
    "pos": "n.",
    "en_def": "a unit of length equal to 2.54 centimeters",
    "cn_def": "英吋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a unit of length equal to 2.54 centimeters",
        "cn_def": "英吋"
      }
    ]
  },
  "liter": {
    "pos": "n.",
    "en_def": "a metric unit of volume equal to 1,000 cubic centimeters",
    "cn_def": "公升",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a metric unit of volume equal to 1,000 cubic centimeters",
        "cn_def": "公升"
      }
    ]
  },
  "item": {
    "pos": "n.",
    "en_def": "an individual article or unit in a list or collection",
    "cn_def": "項目；物品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an individual article or unit in a list or collection",
        "cn_def": "項目；物品"
      }
    ]
  },
  "double": {
    "pos": "adj. / v.",
    "en_def": "twice as much or as many; to become twice as great",
    "cn_def": "雙倍的；加倍",
    "combined": [
      {
        "pos": "adj. / v.",
        "en_def": "twice as much or as many; to become twice as great",
        "cn_def": "雙倍的；加倍"
      }
    ]
  },
  "quarter": {
    "pos": "n.",
    "en_def": "one of four equal parts of something; fifteen minutes",
    "cn_def": "四分之一；一刻鐘",
    "combined": [
      {
        "pos": "n.",
        "en_def": "one of four equal parts of something; fifteen minutes",
        "cn_def": "四分之一；一刻鐘"
      }
    ]
  },
  "zero": {
    "pos": "n. / adj.",
    "en_def": "the number or symbol 0; nil; nothing",
    "cn_def": "零；零度",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "the number or symbol 0; nil; nothing",
        "cn_def": "零；零度"
      }
    ]
  },
  "add": {
    "pos": "v.",
    "en_def": "to put something with another thing to increase the size or amount",
    "cn_def": "添加；增加；相加",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put something with another thing to increase the size or amount",
        "cn_def": "添加；增加；相加"
      }
    ]
  },
  "centimeters": {
    "pos": "",
    "en_def": "",
    "cn_def": "公分",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "公分"
      }
    ]
  },
  "items": {
    "pos": "",
    "en_def": "",
    "cn_def": "項目",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "項目"
      }
    ]
  },
  "liters": {
    "pos": "",
    "en_def": "",
    "cn_def": "公升",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "公升"
      }
    ]
  },
  "quarters": {
    "pos": "",
    "en_def": "",
    "cn_def": "四分之一",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "四分之一"
      }
    ]
  },
  "inches": {
    "pos": "",
    "en_def": "",
    "cn_def": "英吋",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "英吋"
      }
    ]
  },
  "kilometers": {
    "pos": "",
    "en_def": "",
    "cn_def": "公里",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "公里"
      }
    ]
  },
  "meters": {
    "pos": "",
    "en_def": "",
    "cn_def": "公尺",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "公尺"
      }
    ]
  },
  "count": {
    "pos": "",
    "en_def": "",
    "cn_def": "計算",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "計算"
      }
    ]
  },
  "subtract": {
    "pos": "",
    "en_def": "",
    "cn_def": "減去",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "減去"
      }
    ]
  },
  "multiply": {
    "pos": "",
    "en_def": "",
    "cn_def": "乘",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "乘"
      }
    ]
  },
  "measure": {
    "pos": "",
    "en_def": "",
    "cn_def": "測量",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "測量"
      }
    ]
  },
  "zeroes": {
    "pos": "",
    "en_def": "",
    "cn_def": "零",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "零"
      }
    ]
  },
  "reduce": {
    "pos": "",
    "en_def": "",
    "cn_def": "減少",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "減少"
      }
    ]
  },
  "divide": {
    "pos": "",
    "en_def": "",
    "cn_def": "分割",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "分割"
      }
    ]
  },
  "single": {
    "pos": "",
    "en_def": "",
    "cn_def": "單一的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "單一的"
      }
    ]
  },
  "narrow": {
    "pos": "",
    "en_def": "",
    "cn_def": "狹窄的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "狹窄的"
      }
    ]
  },
  "broad": {
    "pos": "",
    "en_def": "",
    "cn_def": "寬廣的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "寬廣的"
      }
    ]
  },
  "cancel": {
    "pos": "",
    "en_def": "",
    "cn_def": "取消",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "取消"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
