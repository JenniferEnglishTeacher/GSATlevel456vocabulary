// Part 4 Quiz Data: shortly – trend
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 15-4 - shortly – trend",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "shortly",
    "pos": "adv.",
    "cn_def": "不久；立刻；很快（副詞）",
    "en_def": "in a short time; soon; at a short interval",
    "sentence": "Please take a comfortable seat in the waiting lounge; the chief doctor will examine you {{BLANK}} once he finishes surgery.",
    "cn": "請在候診室找個舒適的座位稍坐；主任醫生一完成手術就很快／立刻會為你看診。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "信號；暗號；通訊訊號（可數）",
    "en_def": "a gesture, action, or sound that gives information or instructions; an electrical impulse or radio wave",
    "sentence": "The intense bicycle street race officially began when the traffic {{BLANK}} overhead changed rapidly from red to bright green.",
    "cn": "當頭頂上的交通號誌／信號迅速由紅燈轉變為亮綠燈時，激烈的自行車街道賽正式展開。"
  },
  {
    "word": "signaled",
    "pos": "v.",
    "cn_def": "發出信號；示意；標誌著（動詞）",
    "en_def": "to convey information or instructions by means of a gesture, action, or sound",
    "sentence": "The caring elementary teacher gently {{BLANK}} to the noisy students to sit down quietly and open their textbooks.",
    "cn": "那位充滿關愛的小學老師溫和地向吵鬧的學生打手勢示意，讓他們安靜坐好並打開教科書。"
  },
  {
    "word": "spit",
    "pos": "v.",
    "cn_def": "吐出；吐口水（動詞，三態：spit/spat, spit/spat, spit）",
    "en_def": "to eject saliva or food forcibly from one's mouth",
    "sentence": "It is considered extremely rude and unhygienic in civilized modern societies to {{BLANK}} carelessly on public walkways.",
    "cn": "在文明的現代社會中，在公共人行道上隨地吐痰／吐口水被視為極其粗魯且不衛生的行為。"
  },
  {
    "word": "spit",
    "pos": "n.",
    "cn_def": "口水；唾液；微雨（不可數）",
    "en_def": "saliva, especially that which is ejected from the mouth; a light fall of rain",
    "sentence": "A small {{BLANK}} of afternoon rain began to sprinkle on our umbrellas as we walked along the windy riverbank.",
    "cn": "當我們沿著風大的河岸漫步時，一陣陣午後微雨開始灑落在我們的雨傘上。"
  },
  {
    "word": "spy",
    "pos": "n.",
    "cn_def": "間諜；特務；臥底（可數）",
    "en_def": "a person employed by a government or organization to obtain secret information on enemies or competitors",
    "sentence": "The captured military {{BLANK}} was immediately locked inside a secure underground facility for intense government interrogation.",
    "cn": "那名被俘虜的軍事間諜立刻被關押在一處安全的地下設施中，接受嚴格的政府審訊。"
  },
  {
    "word": "spy",
    "pos": "v.",
    "cn_def": "從事間諜活動；暗中窺探；發現看見（動詞）",
    "en_def": "to observe secretively; to discern or see, especially with difficulty",
    "sentence": "Alice hid behind the living room bookshelf to {{BLANK}} on her older brother and discover where he hid his diary.",
    "cn": "愛麗絲躲在客廳書架後面暗中窺探她的哥哥，想查出他把日記藏在哪裡。"
  },
  {
    "word": "superior",
    "pos": "adj.",
    "cn_def": "較優良的；品質上乘的；上級的",
    "en_def": "higher in rank, status, quality, or achievement than another",
    "sentence": "These handmade leather hiking boots are significantly more expensive because they are manufactured with {{BLANK}} craftsmanship.",
    "cn": "這些手工皮革登山靴明顯更為昂貴，因為它們是用上乘優質的精湛工藝製造的。"
  },
  {
    "word": "superior",
    "pos": "n.",
    "cn_def": "上司；長官；長輩（可數）",
    "en_def": "a person higher in rank or status than another",
    "sentence": "Dean scheduled a formal private meeting with his direct {{BLANK}} because he needed to request two weeks of leave.",
    "cn": "狄恩與他的直屬上級主管安排了一次正式的私人會面，因為他需要請假兩週。"
  },
  {
    "word": "talkative",
    "pos": "adj.",
    "cn_def": "健談的；多話的；愛說話的",
    "en_def": "fond of or given to talking; loquacious",
    "sentence": "While Rebecca is quiet and thoughtful, her younger sister is an energetic and extraordinarily {{BLANK}} girl who loves making friends.",
    "cn": "雖然蕾貝卡文靜且深思熟慮，但她的妹妹卻是一個充滿活力且極其健談多話的女孩，喜歡結交朋友。"
  },
  {
    "word": "tame",
    "pos": "adj.",
    "cn_def": "溫馴的；馴服的；平淡無奇的",
    "en_def": "domesticated, gentle, and obedient; not dangerous or wild",
    "sentence": "The gentle and {{BLANK}} brown horse on the educational farm is so calm that small children can safely ride it.",
    "cn": "教育農場上那匹溫柔且溫馴的棕馬非常沉穩平靜，小孩子可以安全地騎乘牠。"
  },
  {
    "word": "tame",
    "pos": "v.",
    "cn_def": "馴化；馴服；克制平息（動詞）",
    "en_def": "to domesticate a wild animal; to make something less powerful or dangerous",
    "sentence": "Experienced zoologists explain that humans can never truly {{BLANK}} a fierce adult wolf because its wild hunting instincts remain strong.",
    "cn": "經驗豐富的動物學家解釋說，人類永遠無法真正馴服一隻兇猛的成年野狼，因為其野外狩獵本能依然強大。"
  },
  {
    "word": "trends",
    "pos": "n.",
    "cn_def": "趨勢；潮流；動向（可數）",
    "en_def": "a general direction in which something is developing or changing; a prevailing fashion",
    "sentence": "Carrie always reads international design magazines to stay informed about the latest clothing {{BLANK}} for the upcoming winter season.",
    "cn": "凱莉總是閱讀國際設計雜誌，以便隨時掌握即將到來的冬季最新服裝潮流趨勢。"
  }
];

const MCQS = [
  {
    "q": "The wireless internet ______ was very weak in the deep basement, so my video call got disconnected.",
    "options": [
      "trend",
      "signal",
      "spy",
      "spit"
    ],
    "answer": 1,
    "cn": "深邃地下室裡的無線網路訊號非常微弱，因此我的視訊通話斷線了。",
    "vocabIndex": 1
  },
  {
    "q": "The secret ______ worked inside the enemy headquarters and sent daily coded messages home.",
    "options": [
      "spit",
      "trend",
      "signal",
      "spy"
    ],
    "answer": 3,
    "cn": "那位秘密間諜在敵方指揮部內工作，每天向國內發送加密訊息。",
    "vocabIndex": 5
  },
  {
    "q": "Wearing oversized colorful jackets is the newest fashion ______ among teenagers this winter.",
    "options": [
      "spy",
      "signal",
      "trend",
      "spit"
    ],
    "answer": 2,
    "cn": "今年冬天，穿著寬大鮮豔的外套是青少年中最受歡迎的時尚潮流趨勢。",
    "vocabIndex": 12
  },
  {
    "q": "The worker scheduled a private meeting to discuss his salary promotion with his direct ______.",
    "options": [
      "superior",
      "signal",
      "spy",
      "trend"
    ],
    "answer": 0,
    "cn": "那位員工安排了一次私人會議，與他的直屬上級長官討論加薪升遷事宜。",
    "vocabIndex": 7
  },
  {
    "q": "A light ______ of rain began to fall from the dark clouds, so we opened our umbrella.",
    "options": [
      "trend",
      "spit",
      "spy",
      "superior"
    ],
    "answer": 1,
    "cn": "幾滴細小的微雨開始從烏雲中落下，因此我們撐開了雨傘。",
    "vocabIndex": 3
  },
  {
    "q": "The police caught the industrial ______ who was trying to steal secret computer blueprints.",
    "options": [
      "spy",
      "signal",
      "trend",
      "spit"
    ],
    "answer": 0,
    "cn": "警方抓住了那名試圖竊取機密電腦藍圖的商業間諜。",
    "vocabIndex": 5
  },
  {
    "q": "The flashing red light was a clear ______ that cars must stop completely before crossing the tracks.",
    "options": [
      "trend",
      "spy",
      "signal",
      "spit"
    ],
    "answer": 2,
    "cn": "閃爍的紅燈是一個明確的信號／號誌，車輛在穿過鐵軌前必須完全停下。",
    "vocabIndex": 1
  },
  {
    "q": "There is a worldwide ______ of people using smartwatches to monitor their heart rate every day.",
    "options": [
      "spit",
      "spy",
      "signal",
      "trend"
    ],
    "answer": 3,
    "cn": "全球有一種人們每天使用智慧手錶來監測心率的動向趨勢。",
    "vocabIndex": 12
  },
  {
    "q": "The polite young clerk always speaks with great respect when talking to her company ______.",
    "options": [
      "superiors",
      "signals",
      "trends",
      "spies"
    ],
    "answer": 0,
    "cn": "那位有禮貌的年輕店員在與她的公司長官上司們說話時，總是表達出極大的尊敬。",
    "vocabIndex": 7
  },
  {
    "q": "This brand-new television screen provides ______ color quality that is clearer than any older models.",
    "options": [
      "talkative",
      "tame",
      "superior",
      "spitting"
    ],
    "answer": 2,
    "cn": "這款全新電視螢幕提供了更優質的色彩畫質，比任何舊型號都更加清晰。",
    "vocabIndex": 7
  },
  {
    "q": "The pony on the children's farm is very ______ and loves to be petted on its soft nose.",
    "options": [
      "superior",
      "signaled",
      "talkative",
      "tame"
    ],
    "answer": 3,
    "cn": "兒童農場裡的小馬非常溫馴，喜歡讓人撫摸牠柔軟的鼻子。",
    "vocabIndex": 10
  },
  {
    "q": "Lucy is an unusually ______ girl who talked continuously about her pet dog throughout the whole dinner.",
    "options": [
      "tame",
      "talkative",
      "superior",
      "signaled"
    ],
    "answer": 1,
    "cn": "露西是個極其多話健談的女孩，整頓晚餐都在滔滔不絕地談論她的寵物狗。",
    "vocabIndex": 9
  },
  {
    "q": "Organic fresh milk from local green farms is far ______ to chemical powdered milk in nutrition.",
    "options": [
      "superior",
      "tame",
      "spat",
      "talkative"
    ],
    "answer": 0,
    "cn": "來自當地綠色農場的有機鮮奶在營養方面遠遠優於化學調配奶粉。",
    "vocabIndex": 7
  },
  {
    "q": "Unlike wild mountain tigers, pet cats are gentle and completely ______ house animals.",
    "options": [
      "talkative",
      "superior",
      "tame",
      "shortly"
    ],
    "answer": 2,
    "cn": "與野生山林老虎不同，寵物貓是溫和且完全溫馴的家養動物。",
    "vocabIndex": 10
  },
  {
    "q": "The bus driver ______ with his hand for the walking children to cross the road safely.",
    "options": [
      "tamed",
      "signaled",
      "spat",
      "spied"
    ],
    "answer": 1,
    "cn": "公車司機用手打信號示意，讓步行的孩子們安全穿過馬路。",
    "vocabIndex": 1
  },
  {
    "q": "The soup was boiling hot, so the little girl ______ it out onto her spoon immediately.",
    "options": [
      "signaled",
      "tamed",
      "spied",
      "spat"
    ],
    "answer": 3,
    "cn": "湯滾燙無比，因此小女孩立刻將它吐回在湯匙上。"
  },
  {
    "q": "Through his bedroom window, the boy ______ a red fox walking quietly through the backyard garden.",
    "options": [
      "spied",
      "spat",
      "tamed",
      "signaled"
    ],
    "answer": 0,
    "cn": "透過臥室的窗戶，男孩看見發現一隻紅狐狸正悄悄走過後院花園。",
    "vocabIndex": 5
  },
  {
    "q": "It is nearly impossible to ______ a ferocious wild lion once it has grown up in the wilderness.",
    "options": [
      "signal",
      "spy",
      "spit",
      "tame"
    ],
    "answer": 3,
    "cn": "兇猛的野獅一旦在荒野中長大，幾乎不可能將牠馴服。",
    "vocabIndex": 10
  },
  {
    "q": "A referee ______ the end of the soccer game by blowing his whistle three times.",
    "options": [
      "spat",
      "tamed",
      "signaled",
      "spied"
    ],
    "answer": 2,
    "cn": "裁判吹了三聲哨子，示意宣告足球比賽正式結束。",
    "vocabIndex": 1
  },
  {
    "q": "The dentist asked the patient to rinse his mouth with warm mint water and then ______ into the sink.",
    "options": [
      "tame",
      "spit",
      "signal",
      "spy"
    ],
    "answer": 1,
    "cn": "牙醫請病人用溫薄荷水漱口，然後吐入水槽中。",
    "vocabIndex": 3
  },
  {
    "q": "The doctor had to finish one more appointment, but promised he would arrive ______.",
    "options": [
      "shortly",
      "talkatively",
      "tamely",
      "superiorly"
    ],
    "answer": 0,
    "cn": "醫生還得完成一次預約看診，但保證他很快／不久就會抵達。",
    "vocabIndex": 0
  },
  {
    "q": "The train departed from the station ______ after all passengers found their comfortable seats.",
    "options": [
      "tamely",
      "talkatively",
      "shortly",
      "superiorly"
    ],
    "answer": 2,
    "cn": "在所有乘客找到舒適的座位後不久，火車便駛離了車站。",
    "vocabIndex": 0
  },
  {
    "q": "Our school team proved to ______ all other competitors in both soccer strategy and physical stamina.",
    "options": [
      "spit out",
      "be superior to",
      "spy on",
      "arrive shortly"
    ],
    "answer": 1,
    "cn": "我們學校的隊伍在足球戰術與體能耐力兩方面，都證明了遠比其他競爭者更為優越。",
    "vocabIndex": 7
  },
  {
    "q": "The jealous boy was caught trying to ______ his sister to find out where she hid her savings.",
    "options": [
      "be superior to",
      "arrive shortly",
      "spit out",
      "spy on"
    ],
    "answer": 3,
    "cn": "那個嫉妒的男孩在試圖暗中窺探他的姊姊以找出她把存款藏在哪裡時被抓包了。",
    "vocabIndex": 5
  },
  {
    "q": "The medicine tasted so bitter and horrible that the toddler quickly ______ it ______ into a napkin.",
    "options": [
      "spied on",
      "spat it out",
      "was tame to",
      "was superior to"
    ],
    "answer": 1,
    "cn": "藥味吃起來太苦且太可怕了，以至於那個幼童立刻將它吐在餐巾紙上。"
  }
];

const LOOKUP = {
  "shortly": {
    "pos": "adv.",
    "en_def": "in a short time; soon; at a short interval",
    "cn_def": "不久；立刻；很快（副詞）",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a short time; soon; at a short interval",
        "cn_def": "不久；立刻；很快（副詞）"
      }
    ]
  },
  "signal": {
    "pos": "n.",
    "en_def": "a gesture, action, or sound that gives information or instructions; an electrical impulse or radio wave",
    "cn_def": "信號；暗號；通訊訊號（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a gesture, action, or sound that gives information or instructions; an electrical impulse or radio wave",
        "cn_def": "信號；暗號；通訊訊號（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to convey information or instructions by means of a gesture, action, or sound",
        "cn_def": "發出信號；示意；標誌著（動詞）"
      }
    ]
  },
  "signaled": {
    "pos": "v.",
    "en_def": "to convey information or instructions by means of a gesture, action, or sound",
    "cn_def": "發出信號；示意；標誌著（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to convey information or instructions by means of a gesture, action, or sound",
        "cn_def": "發出信號；示意；標誌著（動詞）"
      }
    ]
  },
  "spit": {
    "pos": "v.",
    "en_def": "to eject saliva or food forcibly from one's mouth",
    "cn_def": "吐出；吐口水（動詞，三態：spit/spat, spit/spat, spit）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to eject saliva or food forcibly from one's mouth",
        "cn_def": "吐出；吐口水（動詞，三態：spit/spat, spit/spat, spit）"
      },
      {
        "pos": "n.",
        "en_def": "saliva, especially that which is ejected from the mouth; a light fall of rain",
        "cn_def": "口水；唾液；微雨（不可數）"
      }
    ]
  },
  "spy": {
    "pos": "n.",
    "en_def": "a person employed by a government or organization to obtain secret information on enemies or competitors",
    "cn_def": "間諜；特務；臥底（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person employed by a government or organization to obtain secret information on enemies or competitors",
        "cn_def": "間諜；特務；臥底（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to observe secretively; to discern or see, especially with difficulty",
        "cn_def": "從事間諜活動；暗中窺探；發現看見（動詞）"
      }
    ]
  },
  "superior": {
    "pos": "adj.",
    "en_def": "higher in rank, status, quality, or achievement than another",
    "cn_def": "較優良的；品質上乘的；上級的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "higher in rank, status, quality, or achievement than another",
        "cn_def": "較優良的；品質上乘的；上級的"
      },
      {
        "pos": "n.",
        "en_def": "a person higher in rank or status than another",
        "cn_def": "上司；長官；長輩（可數）"
      }
    ]
  },
  "talkative": {
    "pos": "adj.",
    "en_def": "fond of or given to talking; loquacious",
    "cn_def": "健談的；多話的；愛說話的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fond of or given to talking; loquacious",
        "cn_def": "健談的；多話的；愛說話的"
      }
    ]
  },
  "tame": {
    "pos": "adj.",
    "en_def": "domesticated, gentle, and obedient; not dangerous or wild",
    "cn_def": "溫馴的；馴服的；平淡無奇的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "domesticated, gentle, and obedient; not dangerous or wild",
        "cn_def": "溫馴的；馴服的；平淡無奇的"
      },
      {
        "pos": "v.",
        "en_def": "to domesticate a wild animal; to make something less powerful or dangerous",
        "cn_def": "馴化；馴服；克制平息（動詞）"
      }
    ]
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which something is developing or changing; a prevailing fashion",
    "cn_def": "趨勢；潮流；動向（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general direction in which something is developing or changing; a prevailing fashion",
        "cn_def": "趨勢；潮流；動向（可數）"
      }
    ]
  },
  "trends": {
    "pos": "n.",
    "en_def": "a general direction in which something is developing or changing; a prevailing fashion",
    "cn_def": "趨勢；潮流；動向（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general direction in which something is developing or changing; a prevailing fashion",
        "cn_def": "趨勢；潮流；動向（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
