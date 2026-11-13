// Lesson 3 Quiz Data: Illnesses, Symptoms & Physical Sensations
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 3 - Illnesses, Symptoms & Physical Sensations",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "deaf",
    "pos": "adj.",
    "cn_def": "聾的；重聽的",
    "en_def": "unable to hear anything or unable to hear well",
    "sentence": "The elderly musician became completely {{BLANK}} in his left ear, but he continued to compose touching songs by feeling the piano's vibrations.",
    "cn": "這位年長的音樂家左耳完全聾了，但他透過感受鋼琴的振動繼續創作出感人的歌曲。"
  },
  {
    "word": "dizzy",
    "pos": "adj.",
    "cn_def": "頭暈的",
    "en_def": "feeling as if everything is turning around and that you might fall",
    "sentence": "After riding the fast roller coaster three times in the amusement park, Laura felt very {{BLANK}} and had to sit on the bench.",
    "cn": "在遊樂園連續坐了三次快速雲霄飛車後，蘿拉感到非常頭暈，不得不坐在長椅上。"
  },
  {
    "word": "dumb",
    "pos": "adj.",
    "cn_def": "啞的；說不出話的；愚蠢的",
    "en_def": "temporarily unable to speak, or permanently unable to speak; stupid",
    "sentence": "When Mark heard the sudden news that he had won the grand prize, he was struck {{BLANK}} with shock and could not say a single word.",
    "cn": "當馬克聽到自己獲得大獎的突發消息時，他震驚得說不出話來，一個字也說不出來。"
  },
  {
    "word": "fever",
    "pos": "n.",
    "cn_def": "發燒",
    "en_def": "a medical condition in which the body temperature is higher than normal",
    "sentence": "The little boy developed a high {{BLANK}} of thirty-nine degrees late at night, so his worried parents took him straight to the emergency room.",
    "cn": "小男孩在深夜發了三十九度的高燒，擔憂的父母立刻將他直接送往急診室。"
  },
  {
    "word": "flu",
    "pos": "n.",
    "cn_def": "流行性感冒；流感",
    "en_def": "an infectious illness like a very bad cold that causes fever and weakness",
    "sentence": "Several students in our class caught the {{BLANK}} this week, so the teacher advised everyone to wash hands often and wear masks.",
    "cn": "我們班這週有幾位同學得了流行性感冒，所以老師建議大家要勤洗手並戴口罩。"
  },
  {
    "word": "healthy",
    "pos": "adj.",
    "cn_def": "健康的；健壯的",
    "en_def": "strong and well; not sick; good for health",
    "sentence": "My grandfather eats plenty of fresh vegetables every day and walks two miles, so he remains remarkably {{BLANK}} at the age of eighty.",
    "cn": "我的祖父每天吃大量新鮮蔬菜並步行兩英里，因此他在八十歲高齡依然非常健康。"
  },
  {
    "word": "ill",
    "pos": "adj.",
    "cn_def": "生病的；不舒服的",
    "en_def": "not feeling well; suffering from a disease or sickness",
    "sentence": "Because our English teacher suddenly fell {{BLANK}} with a severe stomachache yesterday, another teacher had to take over our afternoon class.",
    "cn": "因為我們的英文老師昨天突然因嚴重胃痛而生病，另一位老師不得不接替我們下午的課。"
  },
  {
    "word": "pain",
    "pos": "n.",
    "cn_def": "疼痛；痛苦",
    "en_def": "the unpleasant physical feeling caused by injury or illness",
    "sentence": "After running the full marathon on Sunday morning, Jack experienced severe muscle {{BLANK}} in both legs and could hardly climb the stairs.",
    "cn": "週日早晨跑完完整的馬拉松後，傑克的雙腿經歷了嚴重的肌肉疼痛，幾乎無法爬樓梯。"
  },
  {
    "word": "painful",
    "pos": "adj.",
    "cn_def": "令人疼痛的；痛苦的",
    "en_def": "causing physical pain or mental suffering",
    "sentence": "The deep cut on Robert's right thumb was extremely {{BLANK}}, but the nurse treated it gently with antiseptic cream and a clean bandage.",
    "cn": "羅伯特右手大拇指上的深傷口極為令人疼痛，但護士用消毒藥膏和乾淨繃帶溫柔地進行了處理。"
  },
  {
    "word": "pale",
    "pos": "adj.",
    "cn_def": "蒼白的；灰白的",
    "en_def": "having less color than usual, especially on the face because of illness",
    "sentence": "When the nurse noticed how {{BLANK}} the young patient looked after giving blood, she immediately brought him a cup of warm sweet tea.",
    "cn": "當護士注意到那位年輕病人在捐血後臉色多麼蒼白時，她立刻給他端來一杯溫熱的甜茶。"
  }
];

const MCQS = [
  {
    "q": "After spinning around in circles during the game, little Tommy felt so ______ that he fell onto the soft grass.",
    "options": [
      "healthy",
      "dizzy",
      "pale",
      "deaf"
    ],
    "answer": 1,
    "cn": "在遊戲中原地旋轉幾圈後，小湯米感到非常頭暈，以致於跌倒在柔軟的草地上。 【選項解析】(A) healthy 健康的  (B) dizzy 頭暈的  (C) pale 蒼白的  (D) deaf 聾的。由 spinning around in circles（旋轉圈圈）可知會感到 dizzy。",
    "vocabIndex": 1
  },
  {
    "q": "The doctor placed a thermometer under the baby's arm and confirmed that she had a dangerous ______ of 39.5 degrees.",
    "options": [
      "flu",
      "pain",
      "fever",
      "tummy"
    ],
    "answer": 2,
    "cn": "醫生在嬰兒的手臂下放了體溫計，證實她發了高達 39.5 度的危險高燒。 【選項解析】(A) fever 發燒  (B) pain 疼痛  (C) flu 流感  (D) tummy 肚子。由 thermometer（體溫計）及 39.5 degrees 可知選 fever。",
    "vocabIndex": 3
  },
  {
    "q": "Mr. Brown has been ______ since childhood, so he communicates smoothly with his family members using sign language.",
    "options": [
      "dizzy",
      "healthy",
      "painful",
      "deaf"
    ],
    "answer": 3,
    "cn": "布朗先生自幼就耳聾，因此他使用手語與家人順暢地溝通。 【選項解析】(A) dizzy 頭暈的  (B) healthy 健康的  (C) deaf 聾的  (D) painful 疼痛的。由 sign language（手語）可知其為 deaf。",
    "vocabIndex": 0
  },
  {
    "q": "Many factory workers caught the winter ______ at the same time, so the manager had to close the assembly line for three days.",
    "options": [
      "flu",
      "pain",
      "fever",
      "death"
    ],
    "answer": 0,
    "cn": "許多工廠工人在同一時間感染了冬季流感，所以經理不得不將裝配線關閉三天。 【選項解析】(A) pain 疼痛  (B) flu 流感  (C) fever 發燒  (D) death 死亡。由 winter... close assembly line for three days 可知指傳染性疾病 flu。",
    "vocabIndex": 4
  },
  {
    "q": "When the student heard the terrifying thunder shake the classroom windows, his face turned completely ______ with fright.",
    "options": [
      "healthy",
      "dizzy",
      "painful",
      "pale"
    ],
    "answer": 3,
    "cn": "當那位學生聽到可怕的雷聲震動教室窗戶時，他的臉嚇得完全發白。 【選項解析】(A) healthy 健康的  (B) dizzy 頭暈的  (C) pale 蒼白的  (D) painful 疼痛的。turn pale with fright（嚇得臉色蒼白）為常見搭配。",
    "vocabIndex": 9
  },
  {
    "q": "Eating fresh organic fruit and exercising regularly are the best ways to keep your body strong and ______.",
    "options": [
      "ill",
      "deaf",
      "healthy",
      "dizzy"
    ],
    "answer": 2,
    "cn": "吃新鮮有機水果和規律運動，是保持身體強壯與健康的最有效方法。 【選項解析】(A) ill 生病的  (B) deaf 聾的  (C) dizzy 頭暈的  (D) healthy 健康的。strong and healthy（強壯健康的）為同義補充。",
    "vocabIndex": 5
  },
  {
    "q": "The dentist gave Kevin an injection before pulling the rotten tooth, so the operation was not ______ at all.",
    "options": [
      "painful",
      "deaf",
      "dumb",
      "pale"
    ],
    "answer": 0,
    "cn": "牙醫在拔除蛀牙前給凱文打了麻醉針，所以手術過程一點也不令人疼痛。 【選項解析】(A) painful 疼痛的  (B) deaf 聾的  (C) dumb 啞的  (D) pale 蒼白的。打了麻藥（injection）使得拔牙過程 not painful。",
    "vocabIndex": 8
  },
  {
    "q": "When the injured player was carried off the soccer field on a stretcher, he was groaning with unbearable ______ in his ankle.",
    "options": [
      "fever",
      "pain",
      "flu",
      "cancer"
    ],
    "answer": 1,
    "cn": "當受傷的球員被用擔架抬下足球場時，他因腳踝難以忍受的疼痛而呻吟著。 【選項解析】(A) fever 發燒  (B) flu 流感  (C) pain 疼痛  (D) cancer 癌症。groaning with unbearable pain（因難以忍受的劇痛而呻吟）。",
    "vocabIndex": 7
  },
  {
    "q": "The little boy was struck ______ with astonishment when the magician pulled a live white rabbit out of the empty black hat.",
    "options": [
      "healthy",
      "dizzy",
      "deaf",
      "dumb"
    ],
    "answer": 3,
    "cn": "當魔術師從空黑帽子裡拉出一隻活生生的白兔時，小男孩驚訝得目瞪口呆說不出話來。 【選項解析】(A) healthy 健康的  (B) dumb 啞的/說不出話的  (C) deaf 聾的  (D) dizzy 頭暈的。struck dumb with astonishment（驚訝得目瞪口呆/說不出話）。",
    "vocabIndex": 2
  },
  {
    "q": "Because several employees became seriously ______ after eating contaminated food at the cafeteria, the health bureau launched an inspection.",
    "options": [
      "healthy",
      "painful",
      "ill",
      "deaf"
    ],
    "answer": 2,
    "cn": "由於幾位員工在餐廳吃了受污染的食物後嚴重生病，衛生局展開了全面檢查。 【選項解析】(A) healthy 健康的  (B) painful 疼痛的  (C) ill 生病的  (D) deaf 聾的。fall ill（生病倒下）為標準用法。",
    "vocabIndex": 6
  },
  {
    "q": "After standing under the scorching summer sun for two hours without drinking water, Samuel felt extremely ______ and fainted.",
    "options": [
      "deaf",
      "dizzy",
      "healthy",
      "dumb"
    ],
    "answer": 1,
    "cn": "在酷熱的夏日陽光下站了兩小時而沒喝水後，塞繆爾感到極度頭暈並昏了過去。 【選項解析】(A) deaf 聾的  (B) dizzy 頭暈的  (C) healthy 健康的  (D) dumb 啞的。酷暑脫水引發頭暈（dizzy）與昏厥。",
    "vocabIndex": 1
  },
  {
    "q": "The mother placed a cold wet towel on her son's forehead to help bring down his high ______ throughout the stormy night.",
    "options": [
      "fever",
      "pain",
      "flu",
      "waist"
    ],
    "answer": 0,
    "cn": "母親在兒子的額頭上放了一條冰冷濕毛巾，以幫助他在暴風雨之夜退去高燒。 【選項解析】(A) flu 流感  (B) pain 疼痛  (C) fever 發燒  (D) waist 腰部。bring down high fever（降低高燒）為常見搭配。",
    "vocabIndex": 3
  },
  {
    "q": "Even though my grandfather is slightly ______ in his right ear, he can still hear clearly if you speak directly toward him.",
    "options": [
      "pale",
      "deaf",
      "dizzy",
      "healthy"
    ],
    "answer": 1,
    "cn": "儘管我的祖父右耳稍微有點重聽，但如果你直接朝著他講話，他依然能聽得很清楚。 【選項解析】(A) deaf 聾的/重聽的  (B) pale 蒼白的  (C) dizzy 頭暈的  (D) healthy 健康的。指耳朵功能受損，選 deaf。",
    "vocabIndex": 0
  },
  {
    "q": "Drinking warm lemon water and getting plenty of rest in bed will help your body recover faster from the seasonal ______.",
    "options": [
      "pain",
      "cancer",
      "flu",
      "fever"
    ],
    "answer": 2,
    "cn": "喝溫檸檬水並在床上多休息，將有助於你的身體更快從季節性流感中康復。 【選項解析】(A) pain 疼痛  (B) flu 流感  (C) cancer 癌症  (D) fever 發燒。seasonal flu 指季節性流感。",
    "vocabIndex": 4
  },
  {
    "q": "When Mary stepped on a rusty iron nail in the garden, she cried out in sudden ______ and called her father for help.",
    "options": [
      "pain",
      "fever",
      "flu",
      "cough"
    ],
    "answer": 0,
    "cn": "當瑪麗在花園裡踩到生鏽的鐵釘時，她痛苦地尖叫並大聲向父親求救。 【選項解析】(A) fever 發燒  (B) pain 疼痛  (C) flu 流感  (D) cough 咳嗽。踩到鐵釘引起的劇烈感官反應是 pain。",
    "vocabIndex": 7
  },
  {
    "q": "The nurse told the patient that the injection would feel like a tiny pinch and would not be very ______.",
    "options": [
      "dizzy",
      "healthy",
      "deaf",
      "painful"
    ],
    "answer": 3,
    "cn": "護士告訴病人打針感覺就像被輕輕捏一下，並不會非常令人疼痛。 【選項解析】(A) painful 疼痛的  (B) healthy 健康的  (C) deaf 聾的  (D) dizzy 頭暈的。形容打針的感受，選 painful。",
    "vocabIndex": 8
  },
  {
    "q": "After being trapped inside the dark mine for twenty hours without food, the rescued workers looked remarkably weak and ______.",
    "options": [
      "healthy",
      "pale",
      "dumb",
      "painful"
    ],
    "answer": 1,
    "cn": "在漆黑的礦井中被困二十小時且沒有食物後，獲救的工人們看起來異常虛弱且面色蒼白。 【選項解析】(A) healthy 健康的  (B) pale 蒼白的  (C) dumb 啞的  (D) painful 疼痛的。weak and pale（虛弱且面色蒼白）。",
    "vocabIndex": 9
  },
  {
    "q": "Maintaining a balanced daily diet and sleeping eight hours every night will ensure you remain energetic and ______.",
    "options": [
      "dizzy",
      "ill",
      "deaf",
      "healthy"
    ],
    "answer": 3,
    "cn": "維持均衡的日常飲食並每晚睡滿八小時，將確保你保持活力與健康。 【選項解析】(A) dizzy 頭暈的  (B) ill 生病的  (C) deaf 聾的  (D) healthy 健康的。energetic and healthy（充滿活力且健康）。",
    "vocabIndex": 5
  },
  {
    "q": "When the police officer asked the frightened witness what had happened, she was struck ______ and could only point at the broken door.",
    "options": [
      "dumb",
      "deaf",
      "pale",
      "healthy"
    ],
    "answer": 0,
    "cn": "當警官詢問受驚的目擊者發生了什麼事時，她驚嚇得說不出話，只能指著破損的門。 【選項解析】(A) deaf 聾的  (B) dumb 說不出話的  (C) pale 蒼白的  (D) healthy 健康的。struck dumb 表示嚇得暫時失語。",
    "vocabIndex": 2
  },
  {
    "q": "The principal announced that school would be canceled tomorrow because our teacher suddenly fell ______ and had to stay in the hospital.",
    "options": [
      "healthy",
      "dizzy",
      "ill",
      "pale"
    ],
    "answer": 2,
    "cn": "校長宣布明天停課，因為我們的老師突然生病且必須住院治療。 【選項解析】(A) healthy 健康的  (B) dizzy 頭暈的  (C) ill 生病的  (D) pale 蒼白的。fell ill 表示罹病。",
    "vocabIndex": 6
  },
  {
    "q": "The cut on my finger was swollen and ______, so the doctor advised me to keep it clean and dry for a few days.",
    "options": [
      "dumb",
      "deaf",
      "healthy",
      "painful"
    ],
    "answer": 3,
    "cn": "我手指上的傷口紅腫且令人疼痛，所以醫生建議我保持幾天清潔乾燥。 【選項解析】(A) painful 疼痛的  (B) deaf 聾的  (C) healthy 健康的  (D) dumb 啞的。swollen and painful（紅腫疼痛）。",
    "vocabIndex": 8
  },
  {
    "q": "The patient took two painkiller pills before going to bed, and the sharp ______ in his injured shoulder gradually faded away.",
    "options": [
      "fever",
      "flu",
      "pain",
      "death"
    ],
    "answer": 2,
    "cn": "病人在睡前吃了兩顆止痛藥，他受傷肩膀上的劇烈疼痛逐漸消退。 【選項解析】(A) fever 發燒  (B) flu 流感  (C) pain 疼痛  (D) death 死亡。吃止痛藥（painkiller）是為了減緩 pain。",
    "vocabIndex": 7
  },
  {
    "q": "Looking down from the top of the hundred-story skyscraper made Oliver feel so ______ that he backed away from the window immediately.",
    "options": [
      "healthy",
      "dizzy",
      "deaf",
      "pale"
    ],
    "answer": 1,
    "cn": "從百層摩天大樓頂端向下看讓奧利佛感到非常頭暈，以致於他立刻從窗邊退開。 【選項解析】(A) healthy 健康的  (B) dizzy 頭暈的  (C) deaf 聾的  (D) pale 蒼白的。在高處向下看引起的暈眩感即為 dizzy。",
    "vocabIndex": 1
  },
  {
    "q": "The child had a runny nose, a sore throat, and a high ______, which indicated that he had caught a serious viral infection.",
    "options": [
      "fever",
      "flu",
      "pain",
      "tummy"
    ],
    "answer": 0,
    "cn": "那孩子流鼻水、喉嚨痛且發高燒，這表明他感染了嚴重的病毒。 【選項解析】(A) flu 流感  (B) fever 發燒  (C) pain 疼痛  (D) tummy 肚子。have a high fever（發高燒）。",
    "vocabIndex": 3
  },
  {
    "q": "When she saw the blood dripping from her sister's knee, Amanda's face turned as ______ as a white sheet of paper.",
    "options": [
      "deaf",
      "dizzy",
      "pale",
      "healthy"
    ],
    "answer": 2,
    "cn": "當看到血液從她妹妹的膝蓋滴下時，阿曼達的臉色變得像一張白紙一樣蒼白。 【選項解析】(A) pale 蒼白的  (B) dizzy 頭暈的  (C) deaf 聾的  (D) healthy 健康的。as pale as a sheet 為固定比喻「面如白紙」。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "deaf": {
    "pos": "adj.",
    "en_def": "unable to hear anything or unable to hear well",
    "cn_def": "聾的；重聽的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unable to hear anything or unable to hear well",
        "cn_def": "聾的；重聽的"
      }
    ]
  },
  "dizzy": {
    "pos": "adj.",
    "en_def": "feeling as if everything is turning around and that you might fall",
    "cn_def": "頭暈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling as if everything is turning around and that you might fall",
        "cn_def": "頭暈的"
      }
    ]
  },
  "dumb": {
    "pos": "adj.",
    "en_def": "temporarily unable to speak, or permanently unable to speak; stupid",
    "cn_def": "啞的；說不出話的；愚蠢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "temporarily unable to speak, or permanently unable to speak; stupid",
        "cn_def": "啞的；說不出話的；愚蠢的"
      }
    ]
  },
  "fever": {
    "pos": "n.",
    "en_def": "a medical condition in which the body temperature is higher than normal",
    "cn_def": "發燒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a medical condition in which the body temperature is higher than normal",
        "cn_def": "發燒"
      }
    ]
  },
  "flu": {
    "pos": "n.",
    "en_def": "an infectious illness like a very bad cold that causes fever and weakness",
    "cn_def": "流行性感冒；流感",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an infectious illness like a very bad cold that causes fever and weakness",
        "cn_def": "流行性感冒；流感"
      }
    ]
  },
  "healthy": {
    "pos": "adj.",
    "en_def": "strong and well; not sick; good for health",
    "cn_def": "健康的；健壯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "strong and well; not sick; good for health",
        "cn_def": "健康的；健壯的"
      }
    ]
  },
  "ill": {
    "pos": "adj.",
    "en_def": "not feeling well; suffering from a disease or sickness",
    "cn_def": "生病的；不舒服的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not feeling well; suffering from a disease or sickness",
        "cn_def": "生病的；不舒服的"
      }
    ]
  },
  "pain": {
    "pos": "n.",
    "en_def": "the unpleasant physical feeling caused by injury or illness",
    "cn_def": "疼痛；痛苦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the unpleasant physical feeling caused by injury or illness",
        "cn_def": "疼痛；痛苦"
      }
    ]
  },
  "painful": {
    "pos": "adj.",
    "en_def": "causing physical pain or mental suffering",
    "cn_def": "令人疼痛的；痛苦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing physical pain or mental suffering",
        "cn_def": "令人疼痛的；痛苦的"
      }
    ]
  },
  "pale": {
    "pos": "adj.",
    "en_def": "having less color than usual, especially on the face because of illness",
    "cn_def": "蒼白的；灰白的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having less color than usual, especially on the face because of illness",
        "cn_def": "蒼白的；灰白的"
      }
    ]
  },
  "tummy": {
    "pos": "",
    "en_def": "",
    "cn_def": "肚子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "肚子"
      }
    ]
  },
  "death": {
    "pos": "",
    "en_def": "",
    "cn_def": "死亡",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "死亡"
      }
    ]
  },
  "cancer": {
    "pos": "",
    "en_def": "",
    "cn_def": "癌症",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "癌症"
      }
    ]
  },
  "waist": {
    "pos": "",
    "en_def": "",
    "cn_def": "腰部",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "腰部"
      }
    ]
  },
  "cough": {
    "pos": "",
    "en_def": "",
    "cn_def": "咳嗽",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "咳嗽"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
