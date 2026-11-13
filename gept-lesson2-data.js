// Lesson 2 Quiz Data: Body Parts, Physical Health & Medical Conditions
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 2 - Body Parts, Physical Health & Medical Conditions",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "thumb",
    "pos": "n.",
    "cn_def": "拇指",
    "en_def": "the short, thick first finger on the human hand",
    "sentence": "When Emma opened the heavy glass door, her left {{BLANK}} was caught in the frame, but luckily it was not broken.",
    "cn": "當艾瑪推開厚重的玻璃門時，她的左手拇指被門框夾到了，但幸運的是沒有骨折。"
  },
  {
    "word": "toe",
    "pos": "n.",
    "cn_def": "腳趾",
    "en_def": "any of the five separate parts at the end of each foot",
    "sentence": "Jason accidentally kicked the corner of the wooden table, and he hurt his big {{BLANK}}, so he sat on the sofa in pain.",
    "cn": "傑森不小心踢到木桌的角落並傷到了他的大腳趾，所以他痛苦地坐在沙發上。"
  },
  {
    "word": "tongue",
    "pos": "n.",
    "cn_def": "舌頭",
    "en_def": "the soft organ inside the mouth used for tasting and speaking",
    "sentence": "The spicy noodle soup was still extremely hot, and Kevin burned his {{BLANK}} badly, so he had to drink a glass of cold water.",
    "cn": "那碗辣麵湯依然非常燙，凱文嚴重燙傷了舌頭，所以他不得不喝下一杯冰水。"
  },
  {
    "word": "tummy",
    "pos": "n.",
    "cn_def": "肚子；胃",
    "en_def": "the stomach or belly, especially used by or with children",
    "sentence": "The little girl ate too many chocolate candies before lunch, so she had a sore {{BLANK}} and could not finish her meal.",
    "cn": "小女孩在午餐前吃了太多巧克力糖，所以她肚子痛且無法吃完正餐。"
  },
  {
    "word": "waist",
    "pos": "n.",
    "cn_def": "腰部",
    "en_def": "the narrow middle part of the human body above the hips",
    "sentence": "My uncle has exercised every morning for six months, and his {{BLANK}} has become much smaller, so he needs to buy a new belt.",
    "cn": "我叔叔連續六個月每天早晨運動，他的腰圍縮小了許多，所以他需要買一條新皮帶。"
  },
  {
    "word": "wrist",
    "pos": "n.",
    "cn_def": "手腕",
    "en_def": "the joint between the hand and the lower arm",
    "sentence": "David fell off his skateboard on the playground, and he sprained his right {{BLANK}} when he tried to stop himself from hitting the floor.",
    "cn": "大衛在操場上從滑板上摔了下來，當他試圖用手撐地防止摔倒時扭傷了右手腕。"
  },
  {
    "word": "AIDS",
    "pos": "n.",
    "cn_def": "愛滋病",
    "en_def": "a serious disease caused by a virus that harms the immune system",
    "sentence": "Modern doctors have developed new treatments for {{BLANK}}, and many international groups work together to prevent its spread worldwide.",
    "cn": "現代醫生已經開發出治療愛滋病的新療法，許多國際組織也攜手合作以防止其在全球蔓延。"
  },
  {
    "word": "cancer",
    "pos": "n.",
    "cn_def": "癌症",
    "en_def": "a very serious disease in which abnormal cells grow uncontrollably",
    "sentence": "Smoking cigarettes significantly increases the risk of lung {{BLANK}}, so the government launched an educational campaign across the country.",
    "cn": "吸菸會顯著增加罹患肺癌的風險，因此政府在全國展開了一項教育宣導宣傳。"
  },
  {
    "word": "cough",
    "pos": "v. / n.",
    "cn_def": "咳嗽",
    "en_def": "to force air out of the throat with a sudden sound; the illness",
    "sentence": "The classroom was completely quiet during the exam, but Jerry had a dry {{BLANK}} and tried his best not to disturb others.",
    "cn": "考試期間教室裡非常安靜，但傑瑞患有乾咳並竭盡全力不去打擾他人。"
  },
  {
    "word": "death",
    "pos": "n.",
    "cn_def": "死亡",
    "en_def": "the end of life; the state of being dead",
    "sentence": "The sudden {{BLANK}} of the beloved leader deeply shocked the entire nation, and thousands of citizens gathered to pay their respects.",
    "cn": "這位敬愛領袖的突然去世深深震驚了全國，數千名市民聚集在一起表達敬意。"
  }
];

const MCQS = [
  {
    "q": "When the heavy dictionary slipped from the desk, it landed directly on David's right foot and bruised his big ______.",
    "options": [
      "thumb",
      "waist",
      "wrist",
      "toe"
    ],
    "answer": 3,
    "cn": "當厚重的字典從書桌上滑落時，它直接砸在戴維的右腳上並砸傷了他的大腳趾。 【選項解析】(A) thumb 拇指  (B) toe 腳趾  (C) wrist 手腕  (D) waist 腰部。由 right foot（右腳）可知砸到的是腳趾 toe。",
    "vocabIndex": 1
  },
  {
    "q": "The hot tea was poured straight from the boiling kettle, and Linda burned her ______ when she took a hasty sip.",
    "options": [
      "tongue",
      "waist",
      "tummy",
      "wrist"
    ],
    "answer": 0,
    "cn": "熱茶直接從沸騰的水壺倒出，琳達匆忙喝了一小口時嚴重燙傷了她的舌頭。 【選項解析】(A) tongue 舌頭  (B) waist 腰部  (C) tummy 肚子  (D) wrist 手腕。由 boiling kettle（沸水壺）與 took a hasty sip（匆忙喝一小口）可知燙傷的是 tongue。",
    "vocabIndex": 2
  },
  {
    "q": "Because my grandfather lost ten kilograms during his illness, his trousers were too loose around his ______.",
    "options": [
      "tongue",
      "cough",
      "waist",
      "thumb"
    ],
    "answer": 2,
    "cn": "因為我的祖父在生病期間瘦了十公斤，所以他的長褲在腰圍處顯得太鬆了。 【選項解析】(A) tongue 舌頭  (B) cough 咳嗽  (C) waist 腰部  (D) thumb 拇指。由 trousers were too loose（褲子太鬆）可知是指腰圍 waist。",
    "vocabIndex": 4
  },
  {
    "q": "While typing rapidly on the keyboard for hours, the programmer felt a sharp pain in her right ______ and decided to rest.",
    "options": [
      "tummy",
      "wrist",
      "cancer",
      "toe"
    ],
    "answer": 1,
    "cn": "在鍵盤上連續飛快打字數小時後，程式設計師感到右手腕陣陣劇痛並決定休息。 【選項解析】(A) tummy 肚子  (B) toe 腳趾  (C) cancer 癌症  (D) wrist 手腕。由 typing rapidly on the keyboard（在鍵盤打字）可知手腕 wrist 容易痠痛。",
    "vocabIndex": 5
  },
  {
    "q": "The doctor explained that regular medical checkups can help detect early signs of ______, which greatly improves recovery rates.",
    "options": [
      "cancer",
      "thumb",
      "waist",
      "toe"
    ],
    "answer": 0,
    "cn": "醫生解釋定期健康檢查有助於發現癌症的早期徵兆，這能大幅提高康復率。 【選項解析】(A) cancer 癌症  (B) thumb 拇指  (C) waist 腰部  (D) toe 腳趾。由 early signs of... improves recovery rates 可知指重大疾病 cancer。",
    "vocabIndex": 7
  },
  {
    "q": "Little Tommy drank three bottles of cold soda in an hour, so he ran to his mother complaining about a painful ______.",
    "options": [
      "wrist",
      "tummy",
      "death",
      "tongue"
    ],
    "answer": 1,
    "cn": "小湯米在一小時內喝了三瓶冰汽水，所以他跑去找媽媽抱怨肚子痛。 【選項解析】(A) wrist 手腕  (B) tummy 肚子  (C) death 死亡  (D) tongue 舌頭。由 drank three bottles of cold soda（喝了三瓶冰汽水）可知導致 tummy 痛。",
    "vocabIndex": 3
  },
  {
    "q": "The elderly gentleman wore a thick scarf to protect his chest against the cold wind, but his dry ______ still kept him awake at night.",
    "options": [
      "waist",
      "thumb",
      "cough",
      "toe"
    ],
    "answer": 2,
    "cn": "那位年長紳士圍了條厚圍巾以抵禦寒風保護胸部，但他的乾咳依然讓他在夜裡難以入眠。 【選項解析】(A) waist 腰部  (B) thumb 拇指  (C) cough 咳嗽  (D) toe 腳趾。由 dry cough（乾咳）及 kept him awake at night 可知選 cough。",
    "vocabIndex": 8
  },
  {
    "q": "The hitchhiker stood beside the highway with his ______ raised high in the air to signal passing drivers for a ride.",
    "options": [
      "tummy",
      "toe",
      "tongue",
      "thumb"
    ],
    "answer": 3,
    "cn": "搭便車者站在公路旁，將拇指高高舉在空中以示意過往司機搭載。 【選項解析】(A) thumb 拇指  (B) toe 腳趾  (C) tongue 舌頭  (D) tummy 肚子。搭便車的國際手勢是舉起大拇指 thumb。",
    "vocabIndex": 0
  },
  {
    "q": "News of the brave firefighter's heroic ______ during the rescue mission brought tears to everyone in the town.",
    "options": [
      "waist",
      "tummy",
      "death",
      "wrist"
    ],
    "answer": 2,
    "cn": "這位英勇消防員在救援任務中英勇殉職的消息，讓鎮上的每個人都流下了眼淚。 【選項解析】(A) waist 腰部  (B) death 死亡  (C) tummy 肚子  (D) wrist 手腕。由 heroic death during rescue mission（救援任務中英勇殉職）可知選 death。",
    "vocabIndex": 9
  },
  {
    "q": "Public health organizations hold seminars every December to teach young adults about the prevention of ______.",
    "options": [
      "toe",
      "AIDS",
      "thumb",
      "waist"
    ],
    "answer": 1,
    "cn": "公共衛生組織每年十二月都會舉辦研討會，向年輕人宣導預防愛滋病的知識。 【選項解析】(A) toe 腳趾  (B) AIDS 愛滋病  (C) thumb 拇指  (D) waist 腰部。每年12月1日為世界愛滋病日（World AIDS Day），防治疾病為 AIDS。",
    "vocabIndex": 6
  },
  {
    "q": "After hiking down the rocky mountain path in tight boots, Amanda noticed that her left ______ was badly swollen.",
    "options": [
      "toe",
      "waist",
      "tongue",
      "cancer"
    ],
    "answer": 0,
    "cn": "穿著過緊的靴子走下多石的山徑後，阿曼達發現她的左腳趾嚴重腫脹。 【選項解析】(A) toe 腳趾  (B) waist 腰部  (C) tongue 舌頭  (D) cancer 癌症。由 tight boots（過緊的靴子）與 hiking down mountain path 可知受擠壓腫脹的是 toe。",
    "vocabIndex": 1
  },
  {
    "q": "When playing badminton yesterday, Samuel slipped on the wooden court and painfully twisted his right ______.",
    "options": [
      "tummy",
      "cough",
      "tongue",
      "wrist"
    ],
    "answer": 3,
    "cn": "昨天打羽毛球時，塞繆爾在木質球場上滑倒，痛苦地扭傷了右手腕。 【選項解析】(A) tummy 肚子  (B) cough 咳嗽  (C) wrist 手腕  (D) tongue 舌頭。跌倒撐地或揮拍扭傷關節，此處指 wrist（手腕）。",
    "vocabIndex": 5
  },
  {
    "q": "The little boy stuck out his ______ playfully at his sister behind his mother's back, but she caught him doing it.",
    "options": [
      "cancer",
      "tongue",
      "waist",
      "toe"
    ],
    "answer": 1,
    "cn": "小男孩趁媽媽不注意時，調皮地對他妹妹吐舌頭，但他被抓了個正著。 【選項解析】(A) cancer 癌症  (B) tongue 舌頭  (C) waist 腰部  (D) toe 腳趾。stick out one's tongue 為常見片語「吐舌頭」。",
    "vocabIndex": 2
  },
  {
    "q": "Mr. Harrison fastened a leather belt tightly around his ______ before lifting the heavy wooden crates onto the truck.",
    "options": [
      "waist",
      "wrist",
      "tongue",
      "death"
    ],
    "answer": 0,
    "cn": "哈里森先生在把沉重的木箱搬上卡車前，將皮帶緊緊繫在腰部以提供支撐。 【選項解析】(A) waist 腰部  (B) wrist 手腕  (C) tongue 舌頭  (D) death 死亡。皮帶繫在腰部，故選 waist。",
    "vocabIndex": 4
  },
  {
    "q": "Heavy air pollution in industrial areas often makes people ______ continuously whenever they walk outside without a face mask.",
    "options": [
      "taste",
      "touch",
      "cough",
      "heal"
    ],
    "answer": 2,
    "cn": "工業區嚴重的空氣污染經常使人們在沒戴口罩外出時不斷咳嗽。 【選項解析】(A) taste 品嚐  (B) cough 咳嗽  (C) touch 接觸  (D) heal 治癒。空氣污染刺激呼吸道引發 cough（咳嗽）。",
    "vocabIndex": 8
  },
  {
    "q": "The sudden tragic ______ of the talented young musician was reported on the front page of every morning newspaper.",
    "options": [
      "toe",
      "tummy",
      "thumb",
      "death"
    ],
    "answer": 3,
    "cn": "這位才華洋溢的年輕音樂家突然英年早逝的噩耗，登上了每家早報的頭版。 【選項解析】(A) death 死亡  (B) tummy 肚子  (C) thumb 拇指  (D) toe 腳趾。由 tragic death（悲劇性去世）與 front page of morning newspaper 可知選 death。",
    "vocabIndex": 9
  },
  {
    "q": "The nurse gently placed an ice pack on the toddler's swollen ______ after he slammed it in the bedroom drawer.",
    "options": [
      "thumb",
      "tongue",
      "cancer",
      "waist"
    ],
    "answer": 0,
    "cn": "小幼童的拇指被臥室抽屜夾到後，護士溫柔地在他的腫脹拇指上敷了冰塊。 【選項解析】(A) cancer 癌症  (B) tongue 舌頭  (C) thumb 拇指  (D) waist 腰部。由 slammed it in the drawer（被抽屜夾到）可知指手指/拇指 thumb。",
    "vocabIndex": 0
  },
  {
    "q": "Eating spoiled seafood from the night market caused severe cramps in my ______, so I visited the clinic immediately.",
    "options": [
      "toe",
      "wrist",
      "tummy",
      "thumb"
    ],
    "answer": 2,
    "cn": "吃了夜市變質的海鮮導致我的肚子嚴重絞痛，所以我立刻去了診所就診。 【選項解析】(A) tummy 肚子  (B) wrist 手腕  (C) toe 腳趾  (D) thumb 拇指。吃了變質海鮮引起 tummy（肚子）痙攣絞痛。",
    "vocabIndex": 3
  },
  {
    "q": "Modern medical research has found effective antiviral drugs that allow people living with ______ to lead normal lives.",
    "options": [
      "tongue",
      "waist",
      "wrist",
      "AIDS"
    ],
    "answer": 3,
    "cn": "現代醫學研究發現了有效的抗病毒藥物，使愛滋病患者能夠過著正常生活。 【選項解析】(A) AIDS 愛滋病  (B) waist 腰部  (C) wrist 手腕  (D) tongue 舌頭。living with AIDS（與愛滋病共存）為固定醫療社會用語。",
    "vocabIndex": 6
  },
  {
    "q": "The doctor confirmed that the tumor in the patient's stomach was benign and not caused by ______, which relieved the whole family.",
    "options": [
      "death",
      "cancer",
      "tummy",
      "cough"
    ],
    "answer": 1,
    "cn": "醫生證實病患胃部的腫瘤是良性的，並非由癌症所引起，這讓全家人鬆了一口氣。 【選項解析】(A) death 死亡  (B) cancer 癌症  (C) tummy 肚子  (D) cough 咳嗽。tumor is benign and not caused by cancer（腫瘤為良性且非癌症）。",
    "vocabIndex": 7
  },
  {
    "q": "Be careful when running barefoot across the sandy beach, or a hidden piece of broken glass could cut your ______.",
    "options": [
      "toe",
      "waist",
      "tongue",
      "cough"
    ],
    "answer": 0,
    "cn": "赤腳跑過沙灘時要小心，否則隱藏的碎玻璃可能會割傷你的腳趾。 【選項解析】(A) tongue 舌頭  (B) waist 腰部  (C) toe 腳趾  (D) cough 咳嗽。running barefoot（赤腳跑步）容易割傷腳趾 toe。",
    "vocabIndex": 1
  },
  {
    "q": "The tennis coach told the players to wrap protective tape around each ______ to avoid strain during competitive matches.",
    "options": [
      "cancer",
      "tummy",
      "wrist",
      "death"
    ],
    "answer": 2,
    "cn": "網球教練告訴球員們在手腕上纏繞防護膠帶，以避免在激烈比賽中受傷。 【選項解析】(A) wrist 手腕  (B) tummy 肚子  (C) cancer 癌症  (D) death 死亡。網球運動需大量手腕力量，需保護 wrist。",
    "vocabIndex": 5
  },
  {
    "q": "The doctor asked the patient to open his mouth wide and stick out his ______ so she could inspect his swollen throat.",
    "options": [
      "waist",
      "tongue",
      "toe",
      "thumb"
    ],
    "answer": 1,
    "cn": "醫生請病人張大嘴巴並伸出舌頭，以便檢查他腫脹的喉嚨。 【選項解析】(A) waist 腰部  (B) tongue 舌頭  (C) toe 腳趾  (D) thumb 拇指。stick out one's tongue to inspect swollen throat（伸出舌頭檢查喉嚨）。",
    "vocabIndex": 2
  },
  {
    "q": "Whenever autumn arrives and temperatures drop quickly, grandfather begins to ______ and drink warm honey water.",
    "options": [
      "crawl",
      "climb",
      "bleed",
      "cough"
    ],
    "answer": 3,
    "cn": "每逢秋季來臨、氣溫驟降時，祖父就開始咳嗽並飲用溫蜂蜜水舒緩。 【選項解析】(A) crawl 爬行  (B) cough 咳嗽  (C) bleed 流血  (D) climb 攀爬。氣溫下降引發咳嗽，故選 cough。",
    "vocabIndex": 8
  },
  {
    "q": "When giving someone encouragement, raising your ______ upward is widely understood as a gesture of support and approval.",
    "options": [
      "thumb",
      "toe",
      "waist",
      "tummy"
    ],
    "answer": 0,
    "cn": "在給予他人鼓勵時，大拇指朝上被廣泛理解為支持與讚許的手勢。 【選項解析】(A) waist 腰部  (B) toe 腳趾  (C) thumb 拇指  (D) tummy 肚子。raising thumb upward（豎起大拇指）是肯定讚許的肢體語言。",
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "thumb": {
    "pos": "n.",
    "en_def": "the short, thick first finger on the human hand",
    "cn_def": "拇指",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the short, thick first finger on the human hand",
        "cn_def": "拇指"
      }
    ]
  },
  "toe": {
    "pos": "n.",
    "en_def": "any of the five separate parts at the end of each foot",
    "cn_def": "腳趾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any of the five separate parts at the end of each foot",
        "cn_def": "腳趾"
      }
    ]
  },
  "tongue": {
    "pos": "n.",
    "en_def": "the soft organ inside the mouth used for tasting and speaking",
    "cn_def": "舌頭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the soft organ inside the mouth used for tasting and speaking",
        "cn_def": "舌頭"
      }
    ]
  },
  "tummy": {
    "pos": "n.",
    "en_def": "the stomach or belly, especially used by or with children",
    "cn_def": "肚子；胃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the stomach or belly, especially used by or with children",
        "cn_def": "肚子；胃"
      }
    ]
  },
  "waist": {
    "pos": "n.",
    "en_def": "the narrow middle part of the human body above the hips",
    "cn_def": "腰部",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the narrow middle part of the human body above the hips",
        "cn_def": "腰部"
      }
    ]
  },
  "wrist": {
    "pos": "n.",
    "en_def": "the joint between the hand and the lower arm",
    "cn_def": "手腕",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the joint between the hand and the lower arm",
        "cn_def": "手腕"
      }
    ]
  },
  "aids": {
    "pos": "n.",
    "en_def": "a serious disease caused by a virus that harms the immune system",
    "cn_def": "愛滋病",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a serious disease caused by a virus that harms the immune system",
        "cn_def": "愛滋病"
      }
    ]
  },
  "cancer": {
    "pos": "n.",
    "en_def": "a very serious disease in which abnormal cells grow uncontrollably",
    "cn_def": "癌症",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very serious disease in which abnormal cells grow uncontrollably",
        "cn_def": "癌症"
      }
    ]
  },
  "cough": {
    "pos": "v. / n.",
    "en_def": "to force air out of the throat with a sudden sound; the illness",
    "cn_def": "咳嗽",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to force air out of the throat with a sudden sound; the illness",
        "cn_def": "咳嗽"
      }
    ]
  },
  "death": {
    "pos": "n.",
    "en_def": "the end of life; the state of being dead",
    "cn_def": "死亡",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the end of life; the state of being dead",
        "cn_def": "死亡"
      }
    ]
  },
  "taste": {
    "pos": "",
    "en_def": "",
    "cn_def": "品嚐",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "品嚐"
      }
    ]
  },
  "touch": {
    "pos": "",
    "en_def": "",
    "cn_def": "接觸",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "接觸"
      }
    ]
  },
  "heal": {
    "pos": "",
    "en_def": "",
    "cn_def": "治癒",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "治癒"
      }
    ]
  },
  "crawl": {
    "pos": "",
    "en_def": "",
    "cn_def": "爬行",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "爬行"
      }
    ]
  },
  "climb": {
    "pos": "",
    "en_def": "",
    "cn_def": "攀爬",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "攀爬"
      }
    ]
  },
  "bleed": {
    "pos": "",
    "en_def": "",
    "cn_def": "流血",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "流血"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
