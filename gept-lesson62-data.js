// Lesson 62 Quiz Data: Mathematics, Geometric Shapes, Lines & Completeness
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 62 - Mathematics, Geometric Shapes, Lines & Completeness",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "equal",
    "pos": "adj. / v.",
    "cn_def": "相等的；等於",
    "en_def": "the same in quantity, size, or value; to be the same as",
    "sentence": "In a fair democracy, all citizens should enjoy {{BLANK}} legal rights under the law regardless of their background.",
    "cn": "在公平的民主制度下，無論背景為何，所有公民在法律面前都應享有平等的法律權利。"
  },
  {
    "word": "entire",
    "pos": "adj.",
    "cn_def": "整個的；完全的",
    "en_def": "whole or complete, with nothing missing",
    "sentence": "The dedicated scientist spent the {{BLANK}} weekend in the university laboratory to complete her physics experiment.",
    "cn": "這位敬業的科學家在大學實驗室度過了整個週末，以完成她的物理實驗。"
  },
  {
    "word": "maximum",
    "pos": "adj. / n.",
    "cn_def": "最大的；最高極限",
    "en_def": "the greatest possible amount, degree, or number",
    "sentence": "The highway patrol officer stated that the {{BLANK}} speed limit on this bridge is eighty kilometers per hour.",
    "cn": "公路巡警指出這座橋上的最高速限為每小時八十公里。"
  },
  {
    "word": "total",
    "pos": "adj. / n.",
    "cn_def": "總計的；總數",
    "en_def": "complete; including everything; the whole amount",
    "sentence": "After buying textbooks and school uniforms, the {{BLANK}} cost came to over three thousand dollars.",
    "cn": "在購買了教科書與學校制服後，總計費用超過了三千元。"
  },
  {
    "word": "amount",
    "pos": "n.",
    "cn_def": "數量；總額",
    "en_def": "a quantity of something, especially something that cannot be counted",
    "sentence": "Drinking a generous {{BLANK}} of warm water each morning helps maintain digestion and promotes physical health.",
    "cn": "每天早晨飲用足量的溫水有助於維持消化並促進身體健康。"
  },
  {
    "word": "curve",
    "pos": "n. / v.",
    "cn_def": "曲線；彎曲",
    "en_def": "a line or surface that bends smoothly without sharp angles",
    "sentence": "The coastal mountain road has a dangerous sharp {{BLANK}} near the cliff, so drivers must slow down considerably.",
    "cn": "這條濱海山路在懸崖附近有一個危險的急轉彎曲線，因此駕駛人必須大幅減速。"
  },
  {
    "word": "straight",
    "pos": "adj. / adv.",
    "cn_def": "筆直的；直接",
    "en_def": "continuing in one direction without bending or turning",
    "sentence": "The art teacher asked the students to draw a {{BLANK}} pencil line across the paper before painting the landscape.",
    "cn": "美術老師要求學生在繪畫風景之前，先用鉛筆在紙上畫出一條筆直的線。"
  },
  {
    "word": "underline",
    "pos": "v.",
    "cn_def": "畫底線；強調",
    "en_def": "to draw a line under a word to give it emphasis",
    "sentence": "You should take a fluorescent highlighter and {{BLANK}} the key grammatical rules while reviewing each chapter.",
    "cn": "在複習每個章節時，你應該拿螢光筆在重點文法規則下方畫底線以加強記憶。"
  },
  {
    "word": "triangle",
    "pos": "n.",
    "cn_def": "三角形",
    "en_def": "a flat geometric shape with three straight sides and three angles",
    "sentence": "The primary school students learned how to calculate the area of a {{BLANK}} by multiplying base times height and dividing by two.",
    "cn": "小學生學會了如何藉由底乘以高除以二來計算三角形的面積。"
  },
  {
    "word": "rectangle",
    "pos": "n.",
    "cn_def": "長方形；矩形",
    "en_def": "a flat geometric shape with four straight sides and four right angles",
    "sentence": "The new living room rug is shaped like a large {{BLANK}}, and it fits neatly under the glass coffee table.",
    "cn": "新客廳地毯的形狀像一個大長方形，它整齊地鋪在玻璃咖啡桌下方。"
  }
];

const MCQS = [
  {
    "q": "The math teacher wrote on the whiteboard that two plus two ______ four, which every student already knew.",
    "options": [
      "equals",
      "curves",
      "underlines",
      "totals"
    ],
    "answer": 0,
    "cn": "數學老師在白板上寫著二加二等於四，這是每個學生早就知道的事實。 【選項解析】(A) curves 彎曲  (B) equals 等於  (C) underlines 畫底線  (D) totals 總計。數學算式二加二等於四用 equals。",
    "vocabIndex": 0
  },
  {
    "q": "Heavy rain flooded the valley, and the storm cut off electricity to the ______ town for nearly two days.",
    "options": [
      "straight",
      "entire",
      "equal",
      "maximum"
    ],
    "answer": 1,
    "cn": "豪雨淹沒了山谷，這場風暴使整個城鎮斷電了近兩天。 【選項解析】(A) entire 整個的  (B) straight 筆直的  (C) equal 平等的  (D) maximum 最大的。修飾全體 town 用 entire。",
    "vocabIndex": 1
  },
  {
    "q": "The elevator safety certificate indicates that the ______ capacity is twelve passengers or nine hundred kilograms.",
    "options": [
      "curve",
      "triangle",
      "total",
      "maximum"
    ],
    "answer": 3,
    "cn": "電梯安全證書標明最高承載量為十二名乘客或九百公斤。 【選項解析】(A) curve 曲線  (B) triangle 三角形  (C) maximum 最大限度  (D) total 總共。maximum capacity 為「最高乘載量」。",
    "vocabIndex": 2
  },
  {
    "q": "When the cashier scanned all the groceries, the ______ amount shown on the cash register was sixty dollars.",
    "options": [
      "straight",
      "equal",
      "total",
      "entire"
    ],
    "answer": 2,
    "cn": "當收銀員掃描完所有雜貨時，收銀機上顯示的總金額為六十美元。 【選項解析】(A) straight 筆直的  (B) equal 平等的  (C) total 總計的  (D) entire 整個的。total amount 指「總金額」。",
    "vocabIndex": 3
  },
  {
    "q": "A large ______ of dust had gathered on the bookshelves because nobody had cleaned the room for months.",
    "options": [
      "triangle",
      "amount",
      "rectangle",
      "curve"
    ],
    "answer": 1,
    "cn": "由於數月沒人清理房間，書架上積聚了大量的灰塵。 【選項解析】(A) amount 數量  (B) triangle 三角形  (C) rectangle 長方形  (D) curve 曲線。a large amount of + 不可數名詞（dust）。",
    "vocabIndex": 4
  },
  {
    "q": "The high-speed train tilted gently as it passed through a wide railway ______ around the base of the hill.",
    "options": [
      "rectangle",
      "triangle",
      "amount",
      "curve"
    ],
    "answer": 3,
    "cn": "當高鐵通過山腳下一處寬闊的鐵路彎道時，車身微微傾斜。 【選項解析】(A) rectangle 長方形  (B) triangle 三角形  (C) curve 彎道；曲線  (D) amount 數量。鐵路轉彎處稱為 curve。",
    "vocabIndex": 5
  },
  {
    "q": "Walk along this road in a ______ direction for three blocks, and you will see the post office on your left.",
    "options": [
      "straight",
      "curve",
      "maximum",
      "equal"
    ],
    "answer": 0,
    "cn": "沿著這條路筆直走三個街區，你就會在左手邊看到郵局。 【選項解析】(A) maximum 最大的  (B) curve 曲線  (C) straight 筆直的  (D) equal 平等的。straight direction 指「筆直的方向」。",
    "vocabIndex": 6
  },
  {
    "q": "The professor advised everyone to ______ the main thesis statement in their introductory essays.",
    "options": [
      "curve",
      "equal",
      "underline",
      "divide"
    ],
    "answer": 2,
    "cn": "教授建議大家在導論短文中給中心論點句子畫底線。 【選項解析】(A) curve 彎曲  (B) underline 畫底線  (C) equal 等於  (D) divide 分割。強調文字用 underline。",
    "vocabIndex": 7
  },
  {
    "q": "In geometry class, we used a plastic ruler to measure each side of the wooden ______ on the desk.",
    "options": [
      "curve",
      "amount",
      "maximum",
      "triangle"
    ],
    "answer": 3,
    "cn": "在幾何學課堂上，我們用塑膠尺測量了桌上木製三角形的每個邊長。 【選項解析】(A) curve 曲線  (B) amount 數量  (C) triangle 三角形  (D) maximum 最大極限。有各個邊長測量之幾何形狀為 triangle。",
    "vocabIndex": 8
  },
  {
    "q": "Most classroom whiteboards are built in the shape of a large ______ so that teachers have plenty of writing space.",
    "options": [
      "curve",
      "triangle",
      "rectangle",
      "total"
    ],
    "answer": 2,
    "cn": "大多數教室白板都製成大長方形的形狀，以便教師有充足的書寫空間。 【選項解析】(A) rectangle 長方形  (B) triangle 三角形  (C) curve 曲線  (D) total 總額。白板形狀為 rectangle。",
    "vocabIndex": 9
  },
  {
    "q": "Men and women working in this international corporation receive ______ pay for doing identical engineering tasks.",
    "options": [
      "equal",
      "straight",
      "entire",
      "maximum"
    ],
    "answer": 0,
    "cn": "在這家跨國企業工作的男女同仁，從事相同的工程任務時享有同等報酬。 【選項解析】(A) entire 整個的  (B) straight 筆直的  (C) equal 同等的  (D) maximum 最大的。equal pay 指「同工同酬」。",
    "vocabIndex": 0
  },
  {
    "q": "It took the author an ______ year of continuous research and writing to finish his biographical novel.",
    "options": [
      "equal",
      "entire",
      "straight",
      "curved"
    ],
    "answer": 1,
    "cn": "作者花費了整整一年的持續研究與寫作，才完成了他的傳記小說。 【選項解析】(A) entire 整整的  (B) equal 平等的  (C) straight 筆直的  (D) curved 彎曲的。an entire year 指「整整一年」。",
    "vocabIndex": 1
  },
  {
    "q": "To prevent structural damage, the bridge has a ______ load weight limit that prohibits heavy transport trucks.",
    "options": [
      "maximum",
      "curve",
      "rectangle",
      "total"
    ],
    "answer": 0,
    "cn": "為防止結構受損，該橋設有禁止重型運輸卡車通過的最大載重限制。 【選項解析】(A) rectangle 長方形  (B) curve 曲線  (C) maximum 最大限度的  (D) total 總計的。maximum weight limit 指「最高載重限制」。",
    "vocabIndex": 2
  },
  {
    "q": "A ______ of forty international exchange students enrolled in the advanced conversational Mandarin course.",
    "options": [
      "triangle",
      "rectangle",
      "curve",
      "total"
    ],
    "answer": 3,
    "cn": "總計有四十名國際交換學生註冊了這門進階華語會話課程。 【選項解析】(A) triangle 三角形  (B) total 總數  (C) curve 曲線  (D) rectangle 長方形。a total of + 數字表示「總計…」。",
    "vocabIndex": 3
  },
  {
    "q": "The doctor warned the patient that consuming an excessive ______ of refined sugar could worsen his health.",
    "options": [
      "triangle",
      "curve",
      "amount",
      "maximum"
    ],
    "answer": 2,
    "cn": "醫生警告病人攝入過量的精製糖可能會惡化他的健康狀況。 【選項解析】(A) amount 數量  (B) curve 曲線  (C) triangle 三角形  (D) maximum 最大值。an excessive amount of 表示「過量的…」。",
    "vocabIndex": 4
  },
  {
    "q": "The baseball pitcher threw a fast ball that seemed to ______ suddenly right before reaching home plate.",
    "options": [
      "equal",
      "curve",
      "underline",
      "total"
    ],
    "answer": 1,
    "cn": "棒球投手投出了一記剛好在抵達本壘板前突然轉彎的快速球。 【選項解析】(A) equal 等於  (B) underline 畫底線  (C) curve 轉彎  (D) total 總計。球路變換方向用動詞 curve。",
    "vocabIndex": 5
  },
  {
    "q": "Draw a ______ pencil line connecting point A to point B, and then measure its distance in centimeters.",
    "options": [
      "maximum",
      "equal",
      "curved",
      "straight"
    ],
    "answer": 3,
    "cn": "用鉛筆畫一條筆直的線將A點連接到B點，然後測量其公分距離。 【選項解析】(A) maximum 最大的  (B) straight 筆直的  (C) curved 彎曲的  (D) equal 平等的。straight line 為「直線」。",
    "vocabIndex": 6
  },
  {
    "q": "During the reading comprehension exam, please ______ the sentences that provide evidence for your answers.",
    "options": [
      "underline",
      "curve",
      "equal",
      "design"
    ],
    "answer": 0,
    "cn": "在閱讀測驗考試中，請在為你的答案提供證據的句子下方畫底線。 【選項解析】(A) curve 彎曲  (B) underline 畫底線  (C) equal 等於  (D) design 設計。畫線標註用 underline。",
    "vocabIndex": 7
  },
  {
    "q": "An equilateral ______ has three sides that are exactly the same length and three sixty-degree angles.",
    "options": [
      "rectangle",
      "triangle",
      "curve",
      "amount"
    ],
    "answer": 1,
    "cn": "正三角形的三條邊完全等長，且具有三個六十度的角。 【選項解析】(A) rectangle 長方形  (B) triangle 三角形  (C) curve 曲線  (D) amount 數量。等邊三角度幾何圖形為 triangle。",
    "vocabIndex": 8
  },
  {
    "q": "The carpenter cut a piece of plywood into a neat ______ to serve as the tabletop for our study desk.",
    "options": [
      "triangle",
      "curve",
      "rectangle",
      "maximum"
    ],
    "answer": 2,
    "cn": "木匠把一塊膠合板切成俐落的長方形，作為我們書桌的桌面。 【選項解析】(A) rectangle 長方形  (B) curve 曲線  (C) triangle 三角形  (D) maximum 最大。桌子常見面板形狀為 rectangle。",
    "vocabIndex": 9
  },
  {
    "q": "Both job candidates possess ______ educational qualifications, but Mark has three more years of management experience.",
    "options": [
      "entire",
      "maximum",
      "straight",
      "equal"
    ],
    "answer": 3,
    "cn": "兩位求職者都具備同等的學歷資格，但馬克多了三年的管理經驗。 【選項解析】(A) entire 整個的  (B) equal 同等的  (C) straight 筆直的  (D) maximum 最大的。equal qualifications 指「同等資格條件」。",
    "vocabIndex": 0
  },
  {
    "q": "The fire destroyed the ______ warehouse, but fortunately all employees evacuated safely without any injuries.",
    "options": [
      "straight",
      "equal",
      "entire",
      "triangle"
    ],
    "answer": 2,
    "cn": "大火燒毀了整座倉庫，但幸運的是所有員工安全疏散，無人受傷。 【選項解析】(A) entire 整個的  (B) equal 平等的  (C) straight 筆直的  (D) triangle 三角形。the entire warehouse 指「整座倉庫」。",
    "vocabIndex": 1
  },
  {
    "q": "The athlete exerted his ______ effort during the final lap of the race and won the championship trophy.",
    "options": [
      "curve",
      "maximum",
      "triangle",
      "straight"
    ],
    "answer": 1,
    "cn": "運動員在比賽的最後一圈竭盡全力，贏得了冠軍獎盃。 【選項解析】(A) curve 曲線  (B) triangle 三角形  (C) maximum 最大的  (D) straight 筆直的。maximum effort 指「最大努力」。",
    "vocabIndex": 2
  },
  {
    "q": "The river follows a gentle ______ through the fertile farmland before emptying into the wide blue sea.",
    "options": [
      "curve",
      "rectangle",
      "triangle",
      "total"
    ],
    "answer": 0,
    "cn": "河流在注入寬廣蔚藍的大海之前，沿著肥沃的農田形成優美的彎曲。 【選項解析】(A) triangle 三角形  (B) rectangle 長方形  (C) curve 曲線；彎流  (D) total 總數。河流彎流稱為 curve。",
    "vocabIndex": 5
  },
  {
    "q": "If you look ______ ahead down the long highway, you can see the snow-capped mountain peaks in the distance.",
    "options": [
      "maximum",
      "entire",
      "straight",
      "equal"
    ],
    "answer": 2,
    "cn": "如果你沿著漫長的高速公路筆直往前看，可以看到遠方白雪皚皚的山峰。 【選項解析】(A) straight 筆直地  (B) entire 整個的  (C) maximum 最大限度  (D) equal 平等的。look straight ahead 指「筆直往前看」。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "equal": {
    "pos": "adj. / v.",
    "en_def": "the same in quantity, size, or value; to be the same as",
    "cn_def": "相等的；等於",
    "combined": [
      {
        "pos": "adj. / v.",
        "en_def": "the same in quantity, size, or value; to be the same as",
        "cn_def": "相等的；等於"
      }
    ]
  },
  "entire": {
    "pos": "adj.",
    "en_def": "whole or complete, with nothing missing",
    "cn_def": "整個的；完全的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "whole or complete, with nothing missing",
        "cn_def": "整個的；完全的"
      }
    ]
  },
  "maximum": {
    "pos": "adj. / n.",
    "en_def": "the greatest possible amount, degree, or number",
    "cn_def": "最大的；最高極限",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "the greatest possible amount, degree, or number",
        "cn_def": "最大的；最高極限"
      }
    ]
  },
  "total": {
    "pos": "adj. / n.",
    "en_def": "complete; including everything; the whole amount",
    "cn_def": "總計的；總數",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "complete; including everything; the whole amount",
        "cn_def": "總計的；總數"
      }
    ]
  },
  "amount": {
    "pos": "n.",
    "en_def": "a quantity of something, especially something that cannot be counted",
    "cn_def": "數量；總額",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a quantity of something, especially something that cannot be counted",
        "cn_def": "數量；總額"
      }
    ]
  },
  "curve": {
    "pos": "n. / v.",
    "en_def": "a line or surface that bends smoothly without sharp angles",
    "cn_def": "曲線；彎曲",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a line or surface that bends smoothly without sharp angles",
        "cn_def": "曲線；彎曲"
      }
    ]
  },
  "straight": {
    "pos": "adj. / adv.",
    "en_def": "continuing in one direction without bending or turning",
    "cn_def": "筆直的；直接",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "continuing in one direction without bending or turning",
        "cn_def": "筆直的；直接"
      }
    ]
  },
  "underline": {
    "pos": "v.",
    "en_def": "to draw a line under a word to give it emphasis",
    "cn_def": "畫底線；強調",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to draw a line under a word to give it emphasis",
        "cn_def": "畫底線；強調"
      }
    ]
  },
  "triangle": {
    "pos": "n.",
    "en_def": "a flat geometric shape with three straight sides and three angles",
    "cn_def": "三角形",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat geometric shape with three straight sides and three angles",
        "cn_def": "三角形"
      }
    ]
  },
  "rectangle": {
    "pos": "n.",
    "en_def": "a flat geometric shape with four straight sides and four right angles",
    "cn_def": "長方形；矩形",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat geometric shape with four straight sides and four right angles",
        "cn_def": "長方形；矩形"
      }
    ]
  },
  "equals": {
    "pos": "",
    "en_def": "",
    "cn_def": "等於",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "等於"
      }
    ]
  },
  "curves": {
    "pos": "",
    "en_def": "",
    "cn_def": "彎曲",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "彎曲"
      }
    ]
  },
  "underlines": {
    "pos": "",
    "en_def": "",
    "cn_def": "畫底線",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "畫底線"
      }
    ]
  },
  "totals": {
    "pos": "",
    "en_def": "",
    "cn_def": "總計",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "總計"
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
  "curved": {
    "pos": "",
    "en_def": "",
    "cn_def": "彎曲的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "彎曲的"
      }
    ]
  },
  "design": {
    "pos": "",
    "en_def": "",
    "cn_def": "設計",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "設計"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
