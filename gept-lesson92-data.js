// Lesson 92 Quiz Data: Spatial Positions, Locations, Frequency, Adverbs of Degree & Conjunctions
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 92 - Spatial Positions, Locations, Frequency, Adverbs of Degree & Conjunctions",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ahead",
    "pos": "adv.",
    "cn_def": "在前方；提前",
    "en_def": "further forward in space or time",
    "sentence": "The bus driver noticed road construction two miles {{BLANK}}, so he slowed down to merge safely.",
    "cn": "公車司機注意到兩英里前方有道路施工，所以他減速以便安全匯入車道。"
  },
  {
    "word": "alike",
    "pos": "adj. / adv.",
    "cn_def": "相似的；同樣地",
    "en_def": "similar to each other; in the same way",
    "sentence": "The identical twin sisters dress and speak so much {{BLANK}}, that even their close classmates confuse them.",
    "cn": "這對同卵雙胞胎姊妹穿著和說話如此相似，以致於連她們親近的同學都會搞混。"
  },
  {
    "word": "anywhere",
    "pos": "adv.",
    "cn_def": "在任何地方",
    "en_def": "in, at, or to any place, especially in negative sentences or questions",
    "sentence": "I searched my backpack thoroughly, but I could not find my student ID card {{BLANK}} in the classroom.",
    "cn": "我徹底搜遍了背包，但在教室裡的任何地方我都找不到學生證。"
  },
  {
    "word": "everywhere",
    "pos": "adv.",
    "cn_def": "到處；各處",
    "en_def": "to, in, or at every place",
    "sentence": "Spring has arrived in the countryside, and colorful wildflowers are blooming {{BLANK}} along the mountain paths.",
    "cn": "鄉村迎來了春天，繽紛的野花在山徑各處隨處綻放。"
  },
  {
    "word": "somewhere",
    "pos": "adv.",
    "cn_def": "在某處；到某處",
    "en_def": "in, at, or to an unspecified or unknown place",
    "sentence": "David left his car keys {{BLANK}} in the living room, but he could not remember the exact spot.",
    "cn": "大衛把車鑰匙遺落在客廳的某個地方，但他記不得確切位置了。"
  },
  {
    "word": "especially",
    "pos": "adv.",
    "cn_def": "尤其；特別是",
    "en_def": "used to emphasize that something is more true about one thing",
    "sentence": "Taiwan experiences heavy rainfall during summer months, {{BLANK}} when typhoons approach from the eastern ocean.",
    "cn": "台灣在夏季月份降雨豐沛，特別是當颱風從東部海面逼近時。"
  },
  {
    "word": "hardly",
    "pos": "adv.",
    "cn_def": "幾乎不；簡直不",
    "en_def": "almost not at all; scarcely",
    "sentence": "The music was so deafening at the concert that we could {{BLANK}} hear each other speak across the table.",
    "cn": "音樂會在音樂聲震耳欲聾，以致於我們隔著桌子幾乎聽不見對方說話。"
  },
  {
    "word": "nearly",
    "pos": "adv.",
    "cn_def": "幾乎；接近",
    "en_def": "almost, not quite completely",
    "sentence": "Our high school basketball team played exceptionally well, and we {{BLANK}} won the championship match yesterday.",
    "cn": "我們高中籃球隊打得非常出色，我們昨天差一點就贏得冠軍賽了。"
  },
  {
    "word": "while",
    "pos": "conj. / n.",
    "cn_def": "當…的時候；一段時間",
    "en_def": "during the time that; a period of time",
    "sentence": "My father likes to listen to classical radio {{BLANK}} he prepares breakfast for the whole family.",
    "cn": "我父親喜歡在為全家人準備早餐時聆聽古典音樂電台廣播。"
  },
  {
    "word": "rather",
    "pos": "adv.",
    "cn_def": "相當；頗為",
    "en_def": "quite, to some degree; more readily or willingly",
    "sentence": "The math exam was {{BLANK}} difficult for most students, but Kevin completed all questions with high confidence.",
    "cn": "這場數學考試對多數學生而言頗為困難，但凱文充滿信心地答完了所有題目。"
  }
];

const MCQS = [
  {
    "q": "Keep driving straight on this highway, and you will see an international airport terminal three miles ______.",
    "options": [
      "hardly",
      "nearly",
      "rather",
      "ahead"
    ],
    "answer": 3,
    "cn": "在這條公路上繼續直行，你會在三英里前方看見一座國際機場航廈。 【選項解析】(A) hardly 幾乎不  (B) ahead 在前方  (C) rather 相當  (D) nearly 幾乎。three miles ahead 表「前方三英里處」。",
    "vocabIndex": 0
  },
  {
    "q": "Although these two smartphone models look very ______ in design, their internal processors are completely different.",
    "options": [
      "anywhere",
      "alike",
      "while",
      "hardly"
    ],
    "answer": 1,
    "cn": "雖然這兩款智慧型手機在外觀設計上非常相似，但內部處理器完全不同。 【選項解析】(A) alike 相似的  (B) anywhere 任何地方  (C) while 當…時  (D) hardly 幾乎不。look alike 表「外觀看起來相似」。",
    "vocabIndex": 1
  },
  {
    "q": "Because my mobile phone battery died, I could not contact my parents from ______ during my hiking trip.",
    "options": [
      "rather",
      "ahead",
      "anywhere",
      "alike"
    ],
    "answer": 2,
    "cn": "因為手機沒電了，在登山旅途中我在任何地方都無法聯絡父母。 【選項解析】(A) rather 相當  (B) ahead 在前方  (C) anywhere 任何地方  (D) alike 相似地。否定句中 not... anywhere 表「任何地方都不…」。",
    "vocabIndex": 2
  },
  {
    "q": "When festival season arrives in December, festive holiday lights and ornaments can be seen ______ downtown.",
    "options": [
      "everywhere",
      "hardly",
      "rather",
      "while"
    ],
    "answer": 0,
    "cn": "當十二月節慶季節來臨時，市中心各處都可以看見節慶燈飾與裝飾品。 【選項解析】(A) hardly 幾乎不  (B) everywhere 各處  (C) rather 相當  (D) while 當…時。everywhere downtown 表「市中心各處」。",
    "vocabIndex": 3
  },
  {
    "q": "I am certain that I placed my leather wallet ______ on this wooden dining table before leaving for work.",
    "options": [
      "rather",
      "ahead",
      "somewhere",
      "alike"
    ],
    "answer": 2,
    "cn": "我確信出門上班前我把皮夾放在這張木質餐桌上的某個地方。 【選項解析】(A) rather 相當  (B) ahead 在前方  (C) somewhere 在某處  (D) alike 相似地。somewhere on the table 表「桌上某處」。",
    "vocabIndex": 4
  },
  {
    "q": "Healthy lifestyle choices are vital for everyone, ______ for elderly citizens who need to control blood pressure.",
    "options": [
      "especially",
      "hardly",
      "anywhere",
      "alike"
    ],
    "answer": 0,
    "cn": "健康的生活型態對每個人都很重要，特別是對需要控制血壓的長者。 【選項解析】(A) especially 尤其  (B) hardly 幾乎不  (C) anywhere 任何地方  (D) alike 相似地。especially for 表「特別是針對…」。",
    "vocabIndex": 5
  },
  {
    "q": "The lecture room was so dark and hazy that the students in back could ______ read the whiteboard notes.",
    "options": [
      "rather",
      "hardly",
      "everywhere",
      "ahead"
    ],
    "answer": 1,
    "cn": "演講廳裡光線昏暗模糊，後排學生幾乎無法看清白板上的筆記。 【選項解析】(A) rather 相當  (B) hardly 幾乎不  (C) everywhere 各處  (D) ahead 在前方。could hardly read 表「幾乎無法閱讀」。",
    "vocabIndex": 6
  },
  {
    "q": "The marathon runner was exhausted after running forty kilometers, and he ______ collapsed before reaching the finish line.",
    "options": [
      "alike",
      "anywhere",
      "rather",
      "nearly"
    ],
    "answer": 3,
    "cn": "馬拉松跑者跑了四十公里後筋疲力竭，在抵達終點前幾乎昏倒了。 【選項解析】(A) alike 相似地  (B) anywhere 任何地方  (C) nearly 幾乎  (D) rather 相當。nearly collapsed 表「差點昏倒」。",
    "vocabIndex": 7
  },
  {
    "q": "Please keep your voice down ______ grandma is taking an afternoon nap in the adjacent bedroom.",
    "options": [
      "hardly",
      "rather",
      "while",
      "ahead"
    ],
    "answer": 2,
    "cn": "當祖母在隔壁臥室睡午覺時，請壓低你的說話音量。 【選項解析】(A) while 當…時  (B) rather 相當  (C) hardly 幾乎不  (D) ahead 在前方。while 連接兩件同時進行的動作。",
    "vocabIndex": 8
  },
  {
    "q": "The winter wind blowing from the ocean felt ______ chilly, so we zipped up our heavy coats tightly.",
    "options": [
      "anywhere",
      "hardly",
      "alike",
      "rather"
    ],
    "answer": 3,
    "cn": "從海上吹來的冬風讓人感覺相當刺骨，所以我們把厚外套拉鍊緊緊拉上。 【選項解析】(A) anywhere 任何地方  (B) rather 相當  (C) alike 相似地  (D) hardly 幾乎不。rather chilly 表「頗為寒冷」。",
    "vocabIndex": 9
  },
  {
    "q": "Pay close attention to traffic signs ______, because highway construction will require all vehicles to slow down.",
    "options": [
      "ahead",
      "hardly",
      "rather",
      "while"
    ],
    "answer": 0,
    "cn": "密切注意前方的交通標誌，因為公路施工將要求所有車輛減速。 【選項解析】(A) ahead 在前方  (B) hardly 幾乎不  (C) rather 相當  (D) while 當…時。signs ahead 表「前方的標誌」。",
    "vocabIndex": 0
  },
  {
    "q": "Great minds think ______, and our project team reached the exact same creative conclusion independently.",
    "options": [
      "anywhere",
      "alike",
      "rather",
      "everywhere"
    ],
    "answer": 1,
    "cn": "英雄所見略同，我們的專案團隊各自獨立得出了完全相同的創意結論。 【選項解析】(A) anywhere 任何地方  (B) everywhere 各處  (C) rather 相當  (D) alike 相同地。Great minds think alike 為經典諺語「英雄所見略同」。",
    "vocabIndex": 1
  },
  {
    "q": "The museum guards insisted that visitors are strictly forbidden from taking photographs ______ inside the gallery.",
    "options": [
      "anywhere",
      "rather",
      "ahead",
      "alike"
    ],
    "answer": 0,
    "cn": "博物館警衛堅持訪客在展覽館內的任何地方都嚴格禁止拍照。 【選項解析】(A) rather 相當  (B) anywhere 任何地方  (C) ahead 在前方  (D) alike 相似地。forbidden anywhere 表「任何地方皆禁止」。",
    "vocabIndex": 2
  },
  {
    "q": "Plastic waste is unfortunately found ______ along the coastline, so environmental volunteers organized a cleanup.",
    "options": [
      "hardly",
      "rather",
      "while",
      "everywhere"
    ],
    "answer": 3,
    "cn": "塑膠垃圾不幸地在海岸線到處被發現，因此環保志工組織了淨灘。 【選項解析】(A) hardly 幾乎不  (B) rather 相當  (C) everywhere 到處  (D) while 當…時。found everywhere 表「隨處可見」。",
    "vocabIndex": 3
  },
  {
    "q": "If you are feeling overwhelmed by work stress, let's take a weekend vacation ______ quiet in the countryside.",
    "options": [
      "rather",
      "hardly",
      "somewhere",
      "alike"
    ],
    "answer": 2,
    "cn": "如果你感到工作壓力過大，我們去鄉村某個安靜的地方度週末假期吧。 【選項解析】(A) somewhere 某個地方  (B) hardly 幾乎不  (C) rather 相當  (D) alike 相似地。somewhere quiet 表「某個安靜之處」。",
    "vocabIndex": 4
  },
  {
    "q": "Fresh fruits and vegetables are beneficial for children, ______ green vegetables packed with essential vitamins.",
    "options": [
      "hardly",
      "especially",
      "rather",
      "anywhere"
    ],
    "answer": 1,
    "cn": "新鮮蔬果對孩童有益，特別是富含必需維生素的綠色蔬菜。 【選項解析】(A) hardly 幾乎不  (B) especially 尤其  (C) rather 相當  (D) anywhere 任何地方。especially green vegetables 強調綠色蔬菜。",
    "vocabIndex": 5
  },
  {
    "q": "He was so shocked by the unexpected promotion news that he could ______ find the right words to reply.",
    "options": [
      "rather",
      "ahead",
      "everywhere",
      "hardly"
    ],
    "answer": 3,
    "cn": "他對突如其來的升遷消息感到非常震驚，以致於幾乎找不出適當話語回答。 【選項解析】(A) rather 相當  (B) ahead 在前方  (C) hardly 幾乎不  (D) everywhere 各處。could hardly find 表「幾乎找不到」。",
    "vocabIndex": 6
  },
  {
    "q": "The delicious homemade apple pie was ______ finished by the children before dinner was even served.",
    "options": [
      "alike",
      "rather",
      "nearly",
      "anywhere"
    ],
    "answer": 2,
    "cn": "那份美味的自製蘋果派在晚餐還沒端上來前，就幾乎被孩子們吃光了。 【選項解析】(A) nearly 幾乎  (B) rather 相當  (C) alike 相似地  (D) anywhere 任何地方。nearly finished 表「快吃完了」。",
    "vocabIndex": 7
  },
  {
    "q": "Linda answered customer inquiries on her laptop ______ she waited for her delayed flight at the gate.",
    "options": [
      "rather",
      "while",
      "hardly",
      "ahead"
    ],
    "answer": 1,
    "cn": "琳達在登機門等待延誤的班機時，在筆電上回覆客戶的諮詢。 【選項解析】(A) while 當…時  (B) rather 相當  (C) hardly 幾乎不  (D) ahead 在前方。while waiting 表「等待的同時」。",
    "vocabIndex": 8
  },
  {
    "q": "The documentary about deep sea exploration was ______ long, but it remained fascinating from start to finish.",
    "options": [
      "rather",
      "anywhere",
      "hardly",
      "alike"
    ],
    "answer": 0,
    "cn": "那部關於深海探索的紀錄片相當長，但從頭到尾都引人入勝。 【選項解析】(A) rather 相當  (B) anywhere 任何地方  (C) hardly 幾乎不  (D) alike 相似地。rather long 表「相當冗長」。",
    "vocabIndex": 9
  },
  {
    "q": "With determination and perseverance, bright opportunities will surely open up in the years ______.",
    "options": [
      "hardly",
      "rather",
      "while",
      "ahead"
    ],
    "answer": 3,
    "cn": "只要擁有決心與毅力，光明美好的機會必定會在未來的歲月裡敞開。 【選項解析】(A) hardly 幾乎不  (B) rather 相當  (C) ahead 在前方  (D) while 當…時。years ahead 指「未來的歲月」。",
    "vocabIndex": 0
  },
  {
    "q": "Teachers and students ______ participated enthusiastically in the annual charity fundraising carnival.",
    "options": [
      "anywhere",
      "alike",
      "rather",
      "hardly"
    ],
    "answer": 1,
    "cn": "師生雙方都同樣熱情地參與了一年一度的慈善募款園遊會。 【選項解析】(A) alike 同樣地  (B) anywhere 任何地方  (C) rather 相當  (D) hardly 幾乎不。Teachers and students alike 表「師生兩者皆然」。",
    "vocabIndex": 1
  },
  {
    "q": "I searched my pockets and desk drawers, but my apartment keys were simply not to be found ______.",
    "options": [
      "anywhere",
      "ahead",
      "rather",
      "alike"
    ],
    "answer": 0,
    "cn": "我搜遍了口袋與書桌抽屜，但我的公寓鑰匙在任何地方都找不到。 【選項解析】(A) rather 相當  (B) ahead 在前方  (C) anywhere 任何地方  (D) alike 相似地。not found anywhere 表「到處都找不到」。",
    "vocabIndex": 2
  },
  {
    "q": "Fallen autumn leaves blew ______ across the park lawn when the chilly October wind started gusting.",
    "options": [
      "hardly",
      "rather",
      "everywhere",
      "while"
    ],
    "answer": 2,
    "cn": "當十月的寒風開始呼嘯時，落下的秋葉在公園草坪上吹得到處都是。 【選項解析】(A) hardly 幾乎不  (B) everywhere 到處  (C) rather 相當  (D) while 當…時。blew everywhere 表「吹得漫天遍地」。",
    "vocabIndex": 3
  },
  {
    "q": "I am positive that we parked the family sedan ______ near the entrance of this underground garage.",
    "options": [
      "hardly",
      "somewhere",
      "rather",
      "alike"
    ],
    "answer": 1,
    "cn": "我確信我們把家裡的房車停在這座地下停車場入口附近的某個地方。 【選項解析】(A) somewhere 某個地方  (B) hardly 幾乎不  (C) rather 相當  (D) alike 相似地。somewhere near 表「附近的某處」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "ahead": {
    "pos": "adv.",
    "en_def": "further forward in space or time",
    "cn_def": "在前方；提前",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "further forward in space or time",
        "cn_def": "在前方；提前"
      }
    ]
  },
  "alike": {
    "pos": "adj. / adv.",
    "en_def": "similar to each other; in the same way",
    "cn_def": "相似的；同樣地",
    "combined": [
      {
        "pos": "adj. / adv.",
        "en_def": "similar to each other; in the same way",
        "cn_def": "相似的；同樣地"
      }
    ]
  },
  "anywhere": {
    "pos": "adv.",
    "en_def": "in, at, or to any place, especially in negative sentences or questions",
    "cn_def": "在任何地方",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in, at, or to any place, especially in negative sentences or questions",
        "cn_def": "在任何地方"
      }
    ]
  },
  "everywhere": {
    "pos": "adv.",
    "en_def": "to, in, or at every place",
    "cn_def": "到處；各處",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "to, in, or at every place",
        "cn_def": "到處；各處"
      }
    ]
  },
  "somewhere": {
    "pos": "adv.",
    "en_def": "in, at, or to an unspecified or unknown place",
    "cn_def": "在某處；到某處",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in, at, or to an unspecified or unknown place",
        "cn_def": "在某處；到某處"
      }
    ]
  },
  "especially": {
    "pos": "adv.",
    "en_def": "used to emphasize that something is more true about one thing",
    "cn_def": "尤其；特別是",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "used to emphasize that something is more true about one thing",
        "cn_def": "尤其；特別是"
      }
    ]
  },
  "hardly": {
    "pos": "adv.",
    "en_def": "almost not at all; scarcely",
    "cn_def": "幾乎不；簡直不",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "almost not at all; scarcely",
        "cn_def": "幾乎不；簡直不"
      }
    ]
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost, not quite completely",
    "cn_def": "幾乎；接近",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "almost, not quite completely",
        "cn_def": "幾乎；接近"
      }
    ]
  },
  "while": {
    "pos": "conj. / n.",
    "en_def": "during the time that; a period of time",
    "cn_def": "當…的時候；一段時間",
    "combined": [
      {
        "pos": "conj. / n.",
        "en_def": "during the time that; a period of time",
        "cn_def": "當…的時候；一段時間"
      }
    ]
  },
  "rather": {
    "pos": "adv.",
    "en_def": "quite, to some degree; more readily or willingly",
    "cn_def": "相當；頗為",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "quite, to some degree; more readily or willingly",
        "cn_def": "相當；頗為"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
