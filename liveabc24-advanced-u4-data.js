// Unit 4 Quiz Data: professional – performer
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U4 - professional – performer",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的、職業的",
    "en_def": "relating to work that needs special training.",
    "sentence": "You should always seek {{BLANK}} advice from a qualified lawyer before signing any important legal document.",
    "cn": "在簽署任何重要法律文件之前，你應該向有資格的律師尋求專業建議。"
  },
  {
    "word": "professional",
    "pos": "n.",
    "cn_def": "專家、職業選手",
    "en_def": "a person who earns money in a specific activity.",
    "sentence": "She trained for over a decade before becoming a {{BLANK}} and now competes in tennis tournaments around the world.",
    "cn": "她訓練了十多年才成為職業選手，現在在全球各地的網球錦標賽中參賽。"
  },
  {
    "word": "profession",
    "pos": "n.",
    "cn_def": "職業、同業",
    "en_def": "a type of job that requires advanced education.",
    "sentence": "Teaching is a rewarding {{BLANK}}, but it also demands a great deal of patience, dedication, and creativity every day.",
    "cn": "教學是一份令人滿足的職業，但它每天也需要極大的耐心、奉獻精神和創造力。"
  },
  {
    "word": "professionalism",
    "pos": "n.",
    "cn_def": "專業精神、專業度",
    "en_def": "the high quality or behavior expected of an expert.",
    "sentence": "The doctor's {{BLANK}} was evident in the way she explained the diagnosis clearly and answered every question with care.",
    "cn": "這位醫生的專業精神體現在她清楚解釋診斷結果、並耐心回答每個問題的方式上。"
  },
  {
    "word": "affect",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to produce a change or have an effect on.",
    "sentence": "Poor sleep can seriously {{BLANK}} a student's ability to concentrate and remember information during class.",
    "cn": "睡眠不足會嚴重影響學生在課堂上專注和記憶資訊的能力。"
  },
  {
    "word": "affected",
    "pos": "v.",
    "cn_def": "打動、使傷感",
    "en_def": "to touch someone's emotions deeply.",
    "sentence": "The documentary about homeless children {{BLANK}} the audience so deeply that many people donated money immediately after.",
    "cn": "這部關於無家可歸兒童的紀錄片深深打動了觀眾，許多人在觀看後立即捐款。"
  },
  {
    "word": "affection",
    "pos": "n.",
    "cn_def": "喜愛、感情",
    "en_def": "a feeling of liking or loving someone.",
    "sentence": "She showed great {{BLANK}} for her younger brother by always helping him with his homework and cheering him up.",
    "cn": "她對弟弟表現出深厚的感情，總是幫助他完成作業，並為他打氣加油。"
  },
  {
    "word": "affectionate",
    "pos": "adj.",
    "cn_def": "充滿深情的、溫柔親切的",
    "en_def": "showing feelings of liking or love.",
    "sentence": "The puppy was so {{BLANK}} that it would jump onto everyone's lap and lick their faces the moment they sat down.",
    "cn": "這隻小狗非常溫柔親切，只要有人坐下，它就會跳上膝蓋、舔舐他們的臉。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響力、實權",
    "en_def": "the power to change how someone thinks or acts.",
    "sentence": "Social media has a strong {{BLANK}} on young people's opinions about fashion, beauty, and lifestyle choices.",
    "cn": "社群媒體對年輕人在時尚、美容和生活方式選擇上的觀點具有強大的影響力。"
  },
  {
    "word": "influenced",
    "pos": "v.",
    "cn_def": "影響、感化",
    "en_def": "to affect or change how someone behaves.",
    "sentence": "Her kind and patient teacher {{BLANK}} her so much that she decided to study education and become a teacher herself.",
    "cn": "她善良耐心的老師對她影響如此深遠，讓她決定攻讀教育並自己成為一名老師。"
  },
  {
    "word": "influential",
    "pos": "adj.",
    "cn_def": "有影響力的",
    "en_def": "having a lot of power to change things.",
    "sentence": "She became one of the most {{BLANK}} scientists of her generation, as her discoveries changed how doctors treat cancer.",
    "cn": "她成為同世代最具影響力的科學家之一，因為她的發現改變了醫生治療癌症的方式。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "樂器",
    "en_def": "an object used for playing music.",
    "sentence": "Learning to play a musical {{BLANK}} as a child is believed to help develop better memory and concentration skills.",
    "cn": "相信從小學習演奏樂器有助於培養更好的記憶力和專注力。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "儀器、器具",
    "en_def": "a tool used for scientific or precise work.",
    "sentence": "The surgeon carefully selected the right {{BLANK}} for the delicate procedure to ensure the patient's safety throughout.",
    "cn": "外科醫生仔細選擇了適合此精細手術的器具，以確保病人全程的安全。"
  },
  {
    "word": "instrumental",
    "pos": "adj.",
    "cn_def": "起重要作用的、作為工具的",
    "en_def": "being an important part of making something happen.",
    "sentence": "The school counsellor was {{BLANK}} in helping the struggling student find a part-time job and manage his time better.",
    "cn": "學校輔導老師在幫助這名陷入困境的學生找到兼職工作、更好地管理時間方面起了重要作用。"
  },
  {
    "word": "session",
    "pos": "n.",
    "cn_def": "（授課、活動、會議的）期間、單次集會",
    "en_def": "a period of time used for a specific activity.",
    "sentence": "The yoga {{BLANK}} lasted for one hour, and the instructor guided the students through a series of calming exercises.",
    "cn": "瑜伽課程持續了一個小時，教練帶領學生進行一系列舒緩的練習。"
  },
  {
    "word": "jam session",
    "pos": "n.",
    "cn_def": "即興演奏會",
    "en_def": "an informal performance of jazz or rock music.",
    "sentence": "The musicians gathered in the basement for a late-night {{BLANK}} and played together until early the next morning.",
    "cn": "音樂家們聚集在地下室進行深夜即興演奏會，一起演奏直到第二天清晨。"
  },
  {
    "word": "training session",
    "pos": "n.",
    "cn_def": "培訓課程、訓練營",
    "en_def": "a period of time set aside for learning skills.",
    "sentence": "The coach organised an extra {{BLANK}} on Saturday morning to help the team prepare for the regional championship.",
    "cn": "教練在週六早上安排了額外的訓練課程，幫助球隊備戰區域錦標賽。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創造力的、創新的",
    "en_def": "having the ability to make new things or ideas.",
    "sentence": "The teacher encouraged students to be {{BLANK}} in their projects, so they could express their own unique ideas freely.",
    "cn": "老師鼓勵學生在專題作業中發揮創造力，讓他們能夠自由表達自己獨特的想法。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造、發明、引起",
    "en_def": "to make something new exist or happen.",
    "sentence": "The government plans to {{BLANK}} thousands of new jobs by investing in the renewable energy and technology sectors.",
    "cn": "政府計劃透過投資可再生能源和科技領域，創造數千個新工作機會。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the ability to think of original ideas.",
    "sentence": "Art classes give students the freedom to develop their {{BLANK}} and express themselves through colour, shape, and design.",
    "cn": "美術課讓學生有自由發展創造力，並透過色彩、形狀和設計來表達自我。"
  },
  {
    "word": "creation",
    "pos": "n.",
    "cn_def": "創造、創作品",
    "en_def": "the act of making something or the item made.",
    "sentence": "The {{BLANK}} of the national park was an important step in protecting the local wildlife and natural environment.",
    "cn": "國家公園的創立是保護當地野生動物和自然環境的重要一步。"
  },
  {
    "word": "creator",
    "pos": "n.",
    "cn_def": "創作者、造物主",
    "en_def": "a person who invents or makes something.",
    "sentence": "The {{BLANK}} of the popular mobile app was only nineteen years old when she launched it and gained millions of users.",
    "cn": "這款熱門手機應用程式的創作者在推出時才十九歲，卻獲得了數百萬名用戶。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "表演、演出",
    "en_def": "to entertain an audience by acting, singing, etc.",
    "sentence": "The school choir will {{BLANK}} three songs at the graduation ceremony, and they have been practising for two months.",
    "cn": "學校合唱團將在畢業典禮上演唱三首歌曲，他們已經練習了兩個月。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "執行、履行、表現（好/壞）",
    "en_def": "to do a piece of work, duty, or legal task.",
    "sentence": "The nurse was trained to {{BLANK}} emergency first aid so that she could help patients before the doctor arrived.",
    "cn": "這名護士接受了緊急急救訓練，使她能在醫生到達之前為病人提供協助。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表演、演出",
    "en_def": "the act of putting on a show for an audience.",
    "sentence": "The ballet {{BLANK}} received a standing ovation from the crowd, and the lead dancer was called back for three encores.",
    "cn": "芭蕾舞演出獲得觀眾起立鼓掌，主要舞者被三度召回謝幕。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "性能、表現、績效",
    "en_def": "how well a person, machine, or stock does a job.",
    "sentence": "The manager reviewed each employee's {{BLANK}} at the end of the year and gave feedback to help them improve further.",
    "cn": "經理在年底審核每位員工的績效，並提供反饋幫助他們進一步提升。"
  },
  {
    "word": "performer",
    "pos": "n.",
    "cn_def": "表演者、演出者",
    "en_def": "a person who entertains an audience.",
    "sentence": "The street {{BLANK}} attracted a large crowd by juggling five balls while balancing on a narrow wooden board.",
    "cn": "這位街頭表演者一邊在窄木板上保持平衡，一邊拋接五顆球，吸引了大批觀眾。"
  }
];

const MCQS = [
  {
    "q": "You should always seek ______ advice from a qualified lawyer before signing any important legal document.",
    "options": [
      "professional",
      "affectionate",
      "instrumental",
      "influential"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "She trained for over a decade before becoming a ______ and now competes in tennis tournaments around the world.",
    "options": [
      "professionalism",
      "influence",
      "professional",
      "profession"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Teaching is a rewarding ______, but it also demands a great deal of patience, dedication, and creativity every day.",
    "options": [
      "jam session",
      "affection",
      "creativity",
      "profession"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The doctor's ______ was evident in the way she explained the diagnosis clearly and answered every question with care.",
    "options": [
      "jam session",
      "professionalism",
      "creation",
      "creator"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Poor sleep can seriously ______ a student's ability to concentrate and remember information during class.",
    "options": [
      "influenced",
      "create",
      "perform",
      "affect"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The documentary about homeless children ______ the audience so deeply that many people donated money immediately after.",
    "options": [
      "affected",
      "create",
      "influenced",
      "perform"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "She showed great ______ for her younger brother by always helping him with his homework and cheering him up.",
    "options": [
      "creator",
      "affection",
      "training session",
      "influence"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The puppy was so ______ that it would jump onto everyone's lap and lick their faces the moment they sat down.",
    "options": [
      "creative",
      "instrumental",
      "affectionate",
      "influential"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Social media has a strong ______ on young people's opinions about fashion, beauty, and lifestyle choices.",
    "options": [
      "professionalism",
      "session",
      "creation",
      "influence"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Her kind and patient teacher ______ her so much that she decided to study education and become a teacher herself.",
    "options": [
      "influenced",
      "affect",
      "affected",
      "create"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "She became one of the most ______ scientists of her generation, as her discoveries changed how doctors treat cancer.",
    "options": [
      "creative",
      "professional",
      "influential",
      "affectionate"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Learning to play a musical ______ as a child is believed to help develop better memory and concentration skills.",
    "options": [
      "professionalism",
      "instrument",
      "jam session",
      "performance"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The surgeon carefully selected the right ______ for the delicate procedure to ensure the patient's safety throughout.",
    "options": [
      "professionalism",
      "profession",
      "instrument",
      "professional"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The school counsellor was ______ in helping the struggling student find a part-time job and manage his time better.",
    "options": [
      "affectionate",
      "instrumental",
      "professional",
      "influential"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The yoga ______ lasted for one hour, and the instructor guided the students through a series of calming exercises.",
    "options": [
      "session",
      "profession",
      "affection",
      "influence"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The musicians gathered in the basement for a late-night ______ and played together until early the next morning.",
    "options": [
      "professionalism",
      "profession",
      "influence",
      "jam session"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The coach organised an extra ______ on Saturday morning to help the team prepare for the regional championship.",
    "options": [
      "training session",
      "creator",
      "professional",
      "affection"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The teacher encouraged students to be ______ in their projects, so they could express their own unique ideas freely.",
    "options": [
      "professional",
      "influential",
      "instrumental",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The government plans to ______ thousands of new jobs by investing in the renewable energy and technology sectors.",
    "options": [
      "affected",
      "create",
      "influenced",
      "perform"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Art classes give students the freedom to develop their ______ and express themselves through colour, shape, and design.",
    "options": [
      "session",
      "profession",
      "creativity",
      "jam session"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The ______ of the national park was an important step in protecting the local wildlife and natural environment.",
    "options": [
      "creation",
      "influence",
      "performer",
      "professionalism"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The ______ of the popular mobile app was only nineteen years old when she launched it and gained millions of users.",
    "options": [
      "training session",
      "creator",
      "creativity",
      "performer"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The school choir will ______ three songs at the graduation ceremony, and they have been practising for two months.",
    "options": [
      "influenced",
      "create",
      "perform",
      "affect"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The nurse was trained to ______ emergency first aid so that she could help patients before the doctor arrived.",
    "options": [
      "influenced",
      "create",
      "affect",
      "perform"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The ballet ______ received a standing ovation from the crowd, and the lead dancer was called back for three encores.",
    "options": [
      "performance",
      "instrument",
      "professionalism",
      "jam session"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The manager reviewed each employee's ______ at the end of the year and gave feedback to help them improve further.",
    "options": [
      "performer",
      "profession",
      "performance",
      "influence"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The street ______ attracted a large crowd by juggling five balls while balancing on a narrow wooden board.",
    "options": [
      "creativity",
      "performer",
      "professionalism",
      "performance"
    ],
    "answer": 1,
    "vocabIndex": 26
  }
];

const LOOKUP = {
  "professional": {
    "pos": "adj.",
    "en_def": "relating to work that needs special training.",
    "cn_def": "專業的、職業的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to work that needs special training.",
        "cn_def": "專業的、職業的"
      },
      {
        "pos": "n.",
        "en_def": "a person who earns money in a specific activity.",
        "cn_def": "專家、職業選手"
      }
    ]
  },
  "profession": {
    "pos": "n.",
    "en_def": "a type of job that requires advanced education.",
    "cn_def": "職業、同業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a type of job that requires advanced education.",
        "cn_def": "職業、同業"
      }
    ]
  },
  "professionalism": {
    "pos": "n.",
    "en_def": "the high quality or behavior expected of an expert.",
    "cn_def": "專業精神、專業度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the high quality or behavior expected of an expert.",
        "cn_def": "專業精神、專業度"
      }
    ]
  },
  "affect": {
    "pos": "v.",
    "en_def": "to produce a change or have an effect on.",
    "cn_def": "影響",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to produce a change or have an effect on.",
        "cn_def": "影響"
      },
      {
        "pos": "v.",
        "en_def": "to touch someone's emotions deeply.",
        "cn_def": "打動、使傷感"
      }
    ]
  },
  "affected": {
    "pos": "v.",
    "en_def": "to touch someone's emotions deeply.",
    "cn_def": "打動、使傷感",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to touch someone's emotions deeply.",
        "cn_def": "打動、使傷感"
      }
    ]
  },
  "affection": {
    "pos": "n.",
    "en_def": "a feeling of liking or loving someone.",
    "cn_def": "喜愛、感情",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of liking or loving someone.",
        "cn_def": "喜愛、感情"
      }
    ]
  },
  "affectionate": {
    "pos": "adj.",
    "en_def": "showing feelings of liking or love.",
    "cn_def": "充滿深情的、溫柔親切的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing feelings of liking or love.",
        "cn_def": "充滿深情的、溫柔親切的"
      }
    ]
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to change how someone thinks or acts.",
    "cn_def": "影響力、實權",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the power to change how someone thinks or acts.",
        "cn_def": "影響力、實權"
      },
      {
        "pos": "v.",
        "en_def": "to affect or change how someone behaves.",
        "cn_def": "影響、感化"
      }
    ]
  },
  "influenced": {
    "pos": "v.",
    "en_def": "to affect or change how someone behaves.",
    "cn_def": "影響、感化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to affect or change how someone behaves.",
        "cn_def": "影響、感化"
      }
    ]
  },
  "influential": {
    "pos": "adj.",
    "en_def": "having a lot of power to change things.",
    "cn_def": "有影響力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a lot of power to change things.",
        "cn_def": "有影響力的"
      }
    ]
  },
  "instrument": {
    "pos": "n.",
    "en_def": "an object used for playing music.",
    "cn_def": "樂器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an object used for playing music.",
        "cn_def": "樂器"
      },
      {
        "pos": "n.",
        "en_def": "a tool used for scientific or precise work.",
        "cn_def": "儀器、器具"
      }
    ]
  },
  "instrumental": {
    "pos": "adj.",
    "en_def": "being an important part of making something happen.",
    "cn_def": "起重要作用的、作為工具的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "being an important part of making something happen.",
        "cn_def": "起重要作用的、作為工具的"
      }
    ]
  },
  "session": {
    "pos": "n.",
    "en_def": "a period of time used for a specific activity.",
    "cn_def": "（授課、活動、會議的）期間、單次集會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of time used for a specific activity.",
        "cn_def": "（授課、活動、會議的）期間、單次集會"
      }
    ]
  },
  "jam session": {
    "pos": "n.",
    "en_def": "an informal performance of jazz or rock music.",
    "cn_def": "即興演奏會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an informal performance of jazz or rock music.",
        "cn_def": "即興演奏會"
      }
    ]
  },
  "training session": {
    "pos": "n.",
    "en_def": "a period of time set aside for learning skills.",
    "cn_def": "培訓課程、訓練營",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of time set aside for learning skills.",
        "cn_def": "培訓課程、訓練營"
      }
    ]
  },
  "creative": {
    "pos": "adj.",
    "en_def": "having the ability to make new things or ideas.",
    "cn_def": "有創造力的、創新的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having the ability to make new things or ideas.",
        "cn_def": "有創造力的、創新的"
      }
    ]
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new exist or happen.",
    "cn_def": "創造、發明、引起",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something new exist or happen.",
        "cn_def": "創造、發明、引起"
      }
    ]
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to think of original ideas.",
    "cn_def": "創造力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to think of original ideas.",
        "cn_def": "創造力"
      }
    ]
  },
  "creation": {
    "pos": "n.",
    "en_def": "the act of making something or the item made.",
    "cn_def": "創造、創作品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of making something or the item made.",
        "cn_def": "創造、創作品"
      }
    ]
  },
  "creator": {
    "pos": "n.",
    "en_def": "a person who invents or makes something.",
    "cn_def": "創作者、造物主",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who invents or makes something.",
        "cn_def": "創作者、造物主"
      }
    ]
  },
  "perform": {
    "pos": "v.",
    "en_def": "to entertain an audience by acting, singing, etc.",
    "cn_def": "表演、演出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to entertain an audience by acting, singing, etc.",
        "cn_def": "表演、演出"
      },
      {
        "pos": "v.",
        "en_def": "to do a piece of work, duty, or legal task.",
        "cn_def": "執行、履行、表現（好/壞）"
      }
    ]
  },
  "performance": {
    "pos": "n.",
    "en_def": "the act of putting on a show for an audience.",
    "cn_def": "表演、演出",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of putting on a show for an audience.",
        "cn_def": "表演、演出"
      },
      {
        "pos": "n.",
        "en_def": "how well a person, machine, or stock does a job.",
        "cn_def": "性能、表現、績效"
      }
    ]
  },
  "performer": {
    "pos": "n.",
    "en_def": "a person who entertains an audience.",
    "cn_def": "表演者、演出者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who entertains an audience.",
        "cn_def": "表演者、演出者"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
