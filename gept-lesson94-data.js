// Lesson 94 Quiz Data: Spatial Movement, Gestures, Nutrition, Meals & Pharmaceuticals
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 94 - Spatial Movement, Gestures, Nutrition, Meals & Pharmaceuticals",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "forward",
    "pos": "adv. / adj.",
    "cn_def": "向前；前進地",
    "en_def": "toward the direction that is in front of you; into the future",
    "sentence": "The brave police officer took three steps {{BLANK}} to speak with the frightened store owner.",
    "cn": "英勇的警官向前邁出三步，與受驚嚇的店主交談。"
  },
  {
    "word": "toward",
    "pos": "prep.",
    "cn_def": "朝向；面對",
    "en_def": "in the direction of somebody or something",
    "sentence": "The lost kitten was terrified by traffic, so it ran {{BLANK}} the warm embrace of the little girl.",
    "cn": "迷路的小貓被車流嚇壞了，所以它朝著小女孩溫暖的懷抱跑去。"
  },
  {
    "word": "upon",
    "pos": "prep.",
    "cn_def": "在…之上；在…之後",
    "en_def": "more formal word for on; happening immediately after",
    "sentence": "The successful future of our modern democracy depends {{BLANK}} the active participation of educated citizens.",
    "cn": "我們現代民主制度的成功未來取決於受良好教育公民的積極參與。"
  },
  {
    "word": "degree",
    "pos": "n.",
    "cn_def": "度數；程度；大學學位",
    "en_def": "a unit of measurement for temperature or angles; a university qualification",
    "sentence": "After completing four years of medical study, Rachel proudly earned her bachelor's {{BLANK}} from the university.",
    "cn": "完成四年的醫學研讀後，瑞秋自豪地從這所大學獲得了學士學位。"
  },
  {
    "word": "gesture",
    "pos": "n. / v.",
    "cn_def": "手勢；姿態；做手勢",
    "en_def": "a movement of hands or body to express meaning; an action expressing feeling",
    "sentence": "A warm smile and a polite handshake are widely recognized as a friendly {{BLANK}} of welcome.",
    "cn": "溫暖的微笑與禮貌的握手被廣泛視為表示歡迎的友善姿態（手勢）。"
  },
  {
    "word": "diet",
    "pos": "n.",
    "cn_def": "日常飲食；節食",
    "en_def": "the food and drink that a person or animal usually consumes",
    "sentence": "Eating a balanced {{BLANK}} rich in fresh vegetables and whole grains helps lower the risk of heart disease.",
    "cn": "攝取富含新鮮蔬菜與全穀物的均衡日常飲食有助於降低心臟病風險。"
  },
  {
    "word": "bar",
    "pos": "n.",
    "cn_def": "條；塊；酒吧",
    "en_def": "a solid piece of something; a counter where drinks are served",
    "sentence": "Before washing her hands in the bathroom, mother unwrapped a new {{BLANK}} of fragrant soap.",
    "cn": "在浴室洗手之前，母親拆開了一塊新的芳香肥皂。"
  },
  {
    "word": "barbecue",
    "pos": "n. / v.",
    "cn_def": "戶外烤肉；燒烤",
    "en_def": "a meal cooked outdoors on a metal frame over a fire",
    "sentence": "Our community organized an outdoor summer {{BLANK}} in the park, and neighbors grilled chicken together.",
    "cn": "我們社區在公園舉辦了戶外夏季烤肉，鄰居們一起烤雞肉。"
  },
  {
    "word": "supper",
    "pos": "n.",
    "cn_def": "晚餐；晚飯",
    "en_def": "an informal meal eaten in the evening",
    "sentence": "Grandmother prepared a warm pot of beef noodle soup for our family {{BLANK}} on the cold winter evening.",
    "cn": "在寒冷的冬夜裡，祖母為我們全家的晚餐準備了一鍋熱騰騰的牛肉麵湯。"
  },
  {
    "word": "drug",
    "pos": "n.",
    "cn_def": "藥物；藥品；毒品",
    "en_def": "a medicine or substance used to treat disease or illness",
    "sentence": "Medical scientists are testing a powerful new {{BLANK}} that may help cure patients with lung cancer.",
    "cn": "醫學科學家正在測試一種強效新藥物，它可能有助於治癒肺癌患者。"
  }
];

const MCQS = [
  {
    "q": "The coach asked the team captain to step ______ from the line to receive the champion trophy.",
    "options": [
      "supper",
      "barbecue",
      "forward",
      "diet"
    ],
    "answer": 2,
    "cn": "教練請隊長從隊伍中向前邁步，以領取冠軍獎盃。 【選項解析】(A) supper 晚餐  (B) forward 向前  (C) barbecue 烤肉  (D) diet 飲食。step forward 表「向前邁步」。",
    "vocabIndex": 0
  },
  {
    "q": "Dark thunderclouds began drifting ______ the eastern coastal towns, prompting a flood warning.",
    "options": [
      "bar",
      "toward",
      "drug",
      "degree"
    ],
    "answer": 1,
    "cn": "烏黑的雷雨雲開始朝著東部沿海城鎮飄移，引發了淹水警報。 【選項解析】(A) toward 朝向  (B) bar 條塊  (C) drug 藥物  (D) degree 度數。drifting toward 表「朝…飄移」。",
    "vocabIndex": 1
  },
  {
    "q": "The final success of this scientific expedition relies ______ the collective dedication of all team members.",
    "options": [
      "diet",
      "supper",
      "gesture",
      "upon"
    ],
    "answer": 3,
    "cn": "這次科學探險的最終成功取決於所有團隊成員的共同奉獻。 【選項解析】(A) diet 飲食  (B) supper 晚餐  (C) upon 取決於  (D) gesture 手勢。relies upon 表「依賴；取決於」。",
    "vocabIndex": 2
  },
  {
    "q": "Yesterday afternoon, the thermometer registered thirty-eight ______ Celsius, setting a new summer temperature record.",
    "options": [
      "degrees",
      "gestures",
      "bars",
      "suppers"
    ],
    "answer": 0,
    "cn": "昨天下午溫度計顯示攝氏三十八度，創下了夏季氣溫新紀錄。 【選項解析】(A) gesture 手勢  (B) degree 度數  (C) bar 條塊  (D) supper 晚餐。thirty-eight degrees Celsius 表「攝氏38度」。",
    "vocabIndex": 3
  },
  {
    "q": "Raising your right hand with an open palm is an unmistakable universal ______ that signals others to stop.",
    "options": [
      "barbecue",
      "gesture",
      "supper",
      "drug"
    ],
    "answer": 1,
    "cn": "舉起右手手掌張開是示意他人停下的明確通用手勢。 【選項解析】(A) barbecue 烤肉  (B) supper 晚餐  (C) gesture 手勢  (D) drug 藥物。universal gesture 表「通用手勢」。",
    "vocabIndex": 4
  },
  {
    "q": "Incorporating fresh fruits and leafy vegetables into your daily ______ is essential for maintaining health.",
    "options": [
      "diet",
      "bar",
      "gesture",
      "degree"
    ],
    "answer": 0,
    "cn": "將新鮮水果與葉菜類納入你的日常飲食中，對維持健康至關重要。 【選項解析】(A) diet 飲食  (B) bar 條塊  (C) gesture 手勢  (D) degree 度數。daily diet 表「日常飲食」。",
    "vocabIndex": 5
  },
  {
    "q": "The chef chopped a solid ______ of dark chocolate into small pieces to melt for the dessert cake.",
    "options": [
      "supper",
      "diet",
      "bar",
      "degree"
    ],
    "answer": 2,
    "cn": "主廚將一整條黑巧克力切碎，以便融化用於製作甜點蛋糕。 【選項解析】(A) supper 晚餐  (B) bar 條塊  (C) diet 飲食  (D) degree 度數。a solid bar of chocolate 表「一整塊巧克力」。",
    "vocabIndex": 6
  },
  {
    "q": "Every year on Mid-Autumn Festival, families in Taiwan gather on balconies to enjoy an evening ______.",
    "options": [
      "drug",
      "degree",
      "gesture",
      "barbecue"
    ],
    "answer": 3,
    "cn": "每年中秋節台灣許多家庭都會聚集在陽台享受晚間烤肉。 【選項解析】(A) drug 藥物  (B) degree 度數  (C) barbecue 烤肉  (D) gesture 手勢。an evening barbecue 表「晚間烤肉」。",
    "vocabIndex": 7
  },
  {
    "q": "After working late at the office, uncle Frank arrived home just in time to join us for hot ______.",
    "options": [
      "barbecue",
      "degree",
      "supper",
      "gesture"
    ],
    "answer": 2,
    "cn": "在辦公室加班後，法蘭克叔叔及時到家與我們共進熱騰騰的晚餐。 【選項解析】(A) barbecue 烤肉  (B) supper 晚餐  (C) degree 度數  (D) gesture 手勢。join us for supper 表「共進晚餐」。",
    "vocabIndex": 8
  },
  {
    "q": "The doctor warned the patient that taking this prescription ______ with alcohol could cause severe dizziness.",
    "options": [
      "bar",
      "gesture",
      "diet",
      "drug"
    ],
    "answer": 3,
    "cn": "醫生警告病患將這種處方藥物與酒精一起服用可能會引起嚴重暈眩。 【選項解析】(A) bar 條塊  (B) gesture 手勢  (C) diet 飲食  (D) drug 藥物。prescription drug 表「處方藥物」。",
    "vocabIndex": 9
  },
  {
    "q": "When the speaker invited questions from the auditorium, a student moved ______ to the floor microphone.",
    "options": [
      "forward",
      "supper",
      "diet",
      "barbecue"
    ],
    "answer": 0,
    "cn": "當演講者邀請聽眾提問時，一名學生走到地面的麥克風前。 【選項解析】(A) forward 向前  (B) supper 晚餐  (C) diet 飲食  (D) barbecue 烤肉。moved forward 表「向前走」。",
    "vocabIndex": 0
  },
  {
    "q": "The frightened hikers turned their flashlights ______ the thick forest bushes when they heard strange rustling noises.",
    "options": [
      "bar",
      "toward",
      "drug",
      "degree"
    ],
    "answer": 1,
    "cn": "當迷路的登山客聽到奇怪的沙沙聲時，他們把手電筒照向茂密的森林灌木叢。 【選項解析】(A) toward 朝向  (B) bar 條塊  (C) drug 藥物  (D) degree 度數。turned toward 表「轉向；朝向」。",
    "vocabIndex": 1
  },
  {
    "q": "The professor emphasized that academic integrity is built ______ complete honesty and rigorous research.",
    "options": [
      "upon",
      "supper",
      "diet",
      "gesture"
    ],
    "answer": 0,
    "cn": "教授強調學術誠信是建立在完全誠實與嚴謹研究的基礎之上。 【選項解析】(A) diet 飲食  (B) supper 晚餐  (C) upon 建立於  (D) gesture 手勢。built upon 表「建立在…之上」。",
    "vocabIndex": 2
  },
  {
    "q": "After four years of study at the university, Kevin received his master's ______ in computer science.",
    "options": [
      "gestures",
      "bars",
      "degrees",
      "suppers"
    ],
    "answer": 2,
    "cn": "在大學研讀四年後，凱文獲得了電腦科學碩士學位。 【選項解析】(A) gesture 手勢  (B) bar 條塊  (C) degree 學位  (D) supper 晚餐。master's degree 表「碩士學位」。",
    "vocabIndex": 3
  },
  {
    "q": "Sending a handwritten thank-you card to your host after dinner is a gracious social ______ of appreciation.",
    "options": [
      "barbecue",
      "drug",
      "supper",
      "gesture"
    ],
    "answer": 3,
    "cn": "晚餐後寄一張手寫感謝卡給主人是一種展現感激的優雅社交姿態。 【選項解析】(A) barbecue 烤肉  (B) gesture 姿態  (C) supper 晚餐  (D) drug 藥物。social gesture 表「社交姿態；心意表達」。",
    "vocabIndex": 4
  },
  {
    "q": "Nutritionists advise people with high cholesterol to follow a low-fat ______ with minimal processed foods.",
    "options": [
      "bar",
      "diet",
      "gesture",
      "degree"
    ],
    "answer": 1,
    "cn": "營養師建議高膽固醇患者遵循加工食品極少的低脂飲食。 【選項解析】(A) bar 條塊  (B) gesture 手勢  (C) diet 飲食  (D) degree 度數。low-fat diet 表「低脂飲食」。",
    "vocabIndex": 5
  },
  {
    "q": "Grandma gave each grandchild a sweet ______ of strawberry candy after they finished cleaning the kitchen.",
    "options": [
      "bar",
      "supper",
      "diet",
      "degree"
    ],
    "answer": 0,
    "cn": "在孫子孫女們打掃完廚房後，奶奶給了每個人一小條甜草莓糖。 【選項解析】(A) bar 條塊  (B) supper 晚餐  (C) diet 飲食  (D) degree 度數。a sweet bar of candy 表「一條糖果」。",
    "vocabIndex": 6
  },
  {
    "q": "During the seaside camping trip, the high school students grilled hot dogs and sweet corn on the ______.",
    "options": [
      "drug",
      "degree",
      "gesture",
      "barbecue"
    ],
    "answer": 3,
    "cn": "在海邊露營旅行期間，高中生們在烤肉架上烤熱狗和甜玉米。 【選項解析】(A) drug 藥物  (B) degree 度數  (C) gesture 手勢  (D) barbecue 烤肉架。grilled on the barbecue 表「在烤肉架上燒烤」。",
    "vocabIndex": 7
  },
  {
    "q": "Mother set the wooden dining table with bowls and chopsticks, calling everyone downstairs for delicious ______.",
    "options": [
      "barbecue",
      "supper",
      "degree",
      "gesture"
    ],
    "answer": 1,
    "cn": "母親擺好碗筷呼喚大家下樓享用美味的晚餐。 【選項解析】(A) supper 晚餐  (B) barbecue 烤肉  (C) degree 度數  (D) gesture 手勢。delicious supper 表「美味的晚餐」。",
    "vocabIndex": 8
  },
  {
    "q": "Pharmacists must explain the potential side effects of every new ______ before dispensing it to patients.",
    "options": [
      "bar",
      "gesture",
      "drug",
      "diet"
    ],
    "answer": 2,
    "cn": "藥劑師在向病患配發每一種新藥物之前，都必須解釋其潛在副作用。 【選項解析】(A) bar 條塊  (B) gesture 手勢  (C) drug 藥物  (D) diet 飲食。side effects of every new drug 表「新藥的副作用」。",
    "vocabIndex": 9
  },
  {
    "q": "The curious little boy took a cautious step ______ to touch the soft wool of the friendly sheep.",
    "options": [
      "supper",
      "forward",
      "barbecue",
      "diet"
    ],
    "answer": 1,
    "cn": "好奇的小男孩謹慎地向前邁出一小步，去摸友善綿羊的柔軟羊毛。 【選項解析】(A) forward 向前  (B) supper 晚餐  (C) barbecue 烤肉  (D) diet 飲食。step forward 表「向前邁步」。",
    "vocabIndex": 0
  },
  {
    "q": "The mother walked slowly ______ the school gate to meet her seven-year-old daughter after afternoon classes.",
    "options": [
      "bar",
      "degree",
      "drug",
      "toward"
    ],
    "answer": 3,
    "cn": "母親緩步走向校門口，去接下午放學的七歲女兒。 【選項解析】(A) bar 條塊  (B) toward 朝向  (C) drug 藥物  (D) degree 度數。walked toward the gate 表「朝校門走去」。",
    "vocabIndex": 1
  },
  {
    "q": "Once ______ a time, a brave young warrior lived in a peaceful village surrounded by misty mountains.",
    "options": [
      "diet",
      "supper",
      "upon",
      "gesture"
    ],
    "answer": 2,
    "cn": "從前從前，一位年輕英勇的戰士住在被雲霧繚繞群山包圍的寧靜村莊裡。 【選項解析】(A) diet 飲食  (B) supper 晚餐  (C) upon 從前  (D) gesture 手勢。Once upon a time 為童話經典開頭「從前從前」。",
    "vocabIndex": 2
  },
  {
    "q": "The fever was so high that the boy's body temperature reached forty ______ Celsius yesterday morning.",
    "options": [
      "degrees",
      "bars",
      "gestures",
      "suppers"
    ],
    "answer": 0,
    "cn": "發燒非常嚴重，以致於男孩昨天早晨的體溫高達攝氏四十度。 【選項解析】(A) gestures 手勢  (B) bars 條塊  (C) degrees 度數  (D) suppers 晚餐。forty degrees Celsius 表「攝氏40度」。",
    "vocabIndex": 3
  },
  {
    "q": "Shrugging your shoulders with your palms turned upward is a common ______ indicating that you do not know.",
    "options": [
      "barbecue",
      "supper",
      "drug",
      "gesture"
    ],
    "answer": 3,
    "cn": "手掌朝上聳聳肩是一種表示自己不知情的常見肢體手勢動作。 【選項解析】(A) barbecue 烤肉  (B) supper 晚餐  (C) gesture 手勢動作  (D) drug 藥品。common gesture 表「常見手勢」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "forward": {
    "pos": "adv. / adj.",
    "en_def": "toward the direction that is in front of you; into the future",
    "cn_def": "向前；前進地",
    "combined": [
      {
        "pos": "adv. / adj.",
        "en_def": "toward the direction that is in front of you; into the future",
        "cn_def": "向前；前進地"
      }
    ]
  },
  "toward": {
    "pos": "prep.",
    "en_def": "in the direction of somebody or something",
    "cn_def": "朝向；面對",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "in the direction of somebody or something",
        "cn_def": "朝向；面對"
      }
    ]
  },
  "upon": {
    "pos": "prep.",
    "en_def": "more formal word for on; happening immediately after",
    "cn_def": "在…之上；在…之後",
    "combined": [
      {
        "pos": "prep.",
        "en_def": "more formal word for on; happening immediately after",
        "cn_def": "在…之上；在…之後"
      }
    ]
  },
  "degree": {
    "pos": "n.",
    "en_def": "a unit of measurement for temperature or angles; a university qualification",
    "cn_def": "度數；程度；大學學位",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a unit of measurement for temperature or angles; a university qualification",
        "cn_def": "度數；程度；大學學位"
      }
    ]
  },
  "gesture": {
    "pos": "n. / v.",
    "en_def": "a movement of hands or body to express meaning; an action expressing feeling",
    "cn_def": "手勢；姿態；做手勢",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a movement of hands or body to express meaning; an action expressing feeling",
        "cn_def": "手勢；姿態；做手勢"
      }
    ]
  },
  "diet": {
    "pos": "n.",
    "en_def": "the food and drink that a person or animal usually consumes",
    "cn_def": "日常飲食；節食",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the food and drink that a person or animal usually consumes",
        "cn_def": "日常飲食；節食"
      }
    ]
  },
  "bar": {
    "pos": "n.",
    "en_def": "a solid piece of something; a counter where drinks are served",
    "cn_def": "條；塊；酒吧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a solid piece of something; a counter where drinks are served",
        "cn_def": "條；塊；酒吧"
      }
    ]
  },
  "barbecue": {
    "pos": "n. / v.",
    "en_def": "a meal cooked outdoors on a metal frame over a fire",
    "cn_def": "戶外烤肉；燒烤",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a meal cooked outdoors on a metal frame over a fire",
        "cn_def": "戶外烤肉；燒烤"
      }
    ]
  },
  "supper": {
    "pos": "n.",
    "en_def": "an informal meal eaten in the evening",
    "cn_def": "晚餐；晚飯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an informal meal eaten in the evening",
        "cn_def": "晚餐；晚飯"
      }
    ]
  },
  "drug": {
    "pos": "n.",
    "en_def": "a medicine or substance used to treat disease or illness",
    "cn_def": "藥物；藥品；毒品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a medicine or substance used to treat disease or illness",
        "cn_def": "藥物；藥品；毒品"
      }
    ]
  },
  "degrees": {
    "pos": "",
    "en_def": "",
    "cn_def": "度數",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "度數"
      }
    ]
  },
  "bars": {
    "pos": "",
    "en_def": "",
    "cn_def": "條塊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "條塊"
      }
    ]
  },
  "gestures": {
    "pos": "",
    "en_def": "",
    "cn_def": "手勢",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "手勢"
      }
    ]
  },
  "suppers": {
    "pos": "",
    "en_def": "",
    "cn_def": "晚餐",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "晚餐"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
