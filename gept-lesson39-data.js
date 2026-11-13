// Lesson 39 Quiz Data: Fear, Psychological Sensations & States of Mind
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 39 - Fear, Psychological Sensations & States of Mind",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "frightened",
    "pos": "adj.",
    "cn_def": "受驚嚇的；害怕的",
    "en_def": "afraid or anxious, often suddenly",
    "sentence": "The {{BLANK}} little boy hid behind his mother's winter coat when the neighbor's huge guard dog barked loudly.",
    "cn": "當鄰居巨大的看門狗大聲吠叫時，受驚嚇的小男孩躲在母親的冬衣外套後面。"
  },
  {
    "word": "fear",
    "pos": "n. / v.",
    "cn_def": "恐懼；害怕",
    "en_def": "an unpleasant emotion caused by the threat of danger; to be afraid of",
    "sentence": "Many young children have an intense {{BLANK}} of darkness, so their parents often leave a small lamp on in the bedroom.",
    "cn": "許多幼童對黑暗有著強烈的恐懼，所以他們的父母常在臥室裡留一盞小夜燈。"
  },
  {
    "word": "scared",
    "pos": "adj.",
    "cn_def": "害怕的；提心吊膽的",
    "en_def": "fearful or frightened",
    "sentence": "Emma felt very {{BLANK}} when the elevator stopped suddenly between floors, but she remembered to press the emergency bell.",
    "cn": "當電梯在樓層之間突然停止時，艾瑪感到非常害怕，但她記得按下緊急通報鈕。"
  },
  {
    "word": "terrible",
    "pos": "adj.",
    "cn_def": "可怕的；糟糕的",
    "en_def": "extremely bad, serious, or unpleasant",
    "sentence": "A {{BLANK}} traffic accident blocked all three lanes on the highway this morning, causing hours of frustrating delay.",
    "cn": "今天早上高速公路上發生了一起嚴重的可怕車禍，阻塞了全部三個車道，造成數小時的延誤。"
  },
  {
    "word": "horrible",
    "pos": "adj.",
    "cn_def": "令人恐懼的；極糟的",
    "en_def": "causing horror; dreadful or very shocking",
    "sentence": "The smell coming from the abandoned trash container was truly {{BLANK}}, so everyone held their noses while walking past.",
    "cn": "廢棄垃圾子車散發出來的氣味實在太令人作嘔可怕了，以至於每個人走過時都捏住了鼻子。"
  },
  {
    "word": "calm",
    "pos": "adj. / v.",
    "cn_def": "平靜的；鎮靜的",
    "en_def": "not showing or feeling anger, fear, or other strong emotions",
    "sentence": "The experienced flight captain remained completely {{BLANK}} during the turbulent storm, reassuring all nervous passengers.",
    "cn": "經驗豐富的機長在顛簸的暴風雨中保持著完全的冷靜鎮定，安撫了所有緊張的乘客。"
  },
  {
    "word": "nervous",
    "pos": "adj.",
    "cn_def": "緊張不安的",
    "en_def": "easily agitated or alarmed; anxious about something",
    "sentence": "Kevin always feels extremely {{BLANK}} right before giving an oral presentation in front of the whole class.",
    "cn": "凱文在全班同學面前進行口頭報告之前，總是感到極度緊張不安。"
  },
  {
    "word": "pleased",
    "pos": "adj.",
    "cn_def": "感到欣慰滿意的",
    "en_def": "feeling or showing pleasure and satisfaction",
    "sentence": "Grandmother was very {{BLANK}} when all her children and grandchildren returned home to celebrate her eightieth birthday.",
    "cn": "當所有兒孫都返回老家為她慶祝八十大壽時，祖母感到非常欣慰而滿心歡喜。"
  },
  {
    "word": "pleasant",
    "pos": "adj.",
    "cn_def": "令人愉快的；宜人的",
    "en_def": "giving a sense of happy satisfaction or enjoyment",
    "sentence": "We spent a very {{BLANK}} afternoon walking through the botanical park, enjoying the fragrant blooming flowers.",
    "cn": "我們在植物公園裡散步，度過了一個非常令人愉快的午後，盡情欣賞芳香盛開的繁花。"
  },
  {
    "word": "pleasure",
    "pos": "n.",
    "cn_def": "樂趣；榮幸",
    "en_def": "a feeling of happy satisfaction and enjoyment",
    "sentence": "It was an absolute {{BLANK}} to meet your parents at the school concert, and we hope to chat again soon.",
    "cn": "在學校音樂會上見到您的雙親真是莫大的榮幸與樂事，我們希望很快能再次暢談。"
  }
];

const MCQS = [
  {
    "q": "The loud boom of thunder sounded right above the roof, leaving the toddler utterly ______ and crying for his blanket.",
    "options": [
      "pleasant",
      "calm",
      "pleased",
      "frightened"
    ],
    "answer": 3,
    "cn": "屋頂正上方突然響起一聲巨大的雷鳴巨響，把剛會走路的小幼童嚇得魂飛魄散，哭著要他的小毛毯。 【選項解析】(A) frightened 嚇壞的  (B) calm 鎮定的  (C) pleased 滿意的  (D) pleasant 愉快的。loud boom of thunder, toddler utterly frightened（雷聲把幼兒嚇壞了）。",
    "vocabIndex": 0
  },
  {
    "q": "Firefighters must learn to master and control their natural ______ so they can enter burning structures safely.",
    "options": [
      "pleasure",
      "fear",
      "feeling",
      "sense"
    ],
    "answer": 1,
    "cn": "消防隊員必須學習掌握與克制自己本能的恐懼情緒，如此才能安全踏入烈火燃燒的火場建築內。 【選項解析】(A) pleasure 樂趣  (B) fear 恐懼  (C) feeling 感覺  (D) sense 感官。master natural fear（克服恐懼）。",
    "vocabIndex": 1
  },
  {
    "q": "The young girl was too ______ of the deep ocean waves to leave the sandy towel area without her parents.",
    "options": [
      "scared",
      "pleased",
      "calm",
      "pleasant"
    ],
    "answer": 0,
    "cn": "這個小女孩太過害怕遠海波濤洶湧的深浪，以致於沒有父母陪同根本不敢離開沙灘浴巾區域半步。 【選項解析】(A) calm 平靜的  (B) pleased 欣慰的  (C) scared 害怕的  (D) pleasant 宜人的。too scared to leave（太害怕不敢離開）。",
    "vocabIndex": 2
  },
  {
    "q": "A sudden ______ snowstorm paralyzed the entire mountain pass, forcing dozens of stranded drivers to abandon their cars.",
    "options": [
      "calm",
      "pleased",
      "terrible",
      "pleasant"
    ],
    "answer": 2,
    "cn": "一場突如其來的可怕暴風雪癱瘓了整座山口公路，迫使數十名受困司機不得不棄車逃生避難。 【選項解析】(A) calm 平靜的  (B) pleased 欣慰的  (C) pleasant 愉快的  (D) terrible 可怕的/嚴重的。terrible snowstorm（可怕嚴重的暴風雪）。",
    "vocabIndex": 3
  },
  {
    "q": "The dark cellar was infested with mold and rats, making it an utterly ______ place to stay even for ten minutes.",
    "options": [
      "pleasant",
      "calm",
      "pleased",
      "horrible"
    ],
    "answer": 3,
    "cn": "這個陰暗的地下室長滿了霉菌且老鼠橫行，使它成為一個即使只待上十分鐘也令人難以忍受的可怕場所。 【選項解析】(A) horrible 可怕糟糕的  (B) calm 平靜的  (C) pleased 滿意的  (D) pleasant 宜人的。mold and rats, utterly horrible place（發霉鼠患的可怕地方）。",
    "vocabIndex": 4
  },
  {
    "q": "Taking deep, slow breaths can help your racing heartbeat slow down so you can remain ______ under pressure.",
    "options": [
      "scared",
      "frightened",
      "calm",
      "terrible"
    ],
    "answer": 2,
    "cn": "進行深沉緩慢的深呼吸有助於減緩你狂跳的心率，讓你在巨大壓力之下依然能夠保持冷靜從容。 【選項解析】(A) scared 害怕的  (B) calm 冷靜的  (C) frightened 受驚的  (D) terrible 糟糕的。remain calm under pressure（在壓力下保持冷靜）。",
    "vocabIndex": 5
  },
  {
    "q": "Amanda's hands were shaking and she felt terribly ______ just before walking into the college interview room.",
    "options": [
      "pleased",
      "nervous",
      "calm",
      "pleasant"
    ],
    "answer": 1,
    "cn": "在邁步走進大學甄試面試考場之前，阿曼達的雙手不由自主地顫抖著，整個人感到無比緊張不安。 【選項解析】(A) pleased 欣慰的  (B) calm 冷靜的  (C) nervous 緊張的  (D) pleasant 愉快的。hands shaking, terribly nervous（雙手發抖且極度緊張）。",
    "vocabIndex": 6
  },
  {
    "q": "The school principal was genuinely ______ with the students' stellar performance during the charity fundraiser.",
    "options": [
      "pleased",
      "terrible",
      "frightened",
      "scared"
    ],
    "answer": 0,
    "cn": "校長對於全校學生在慈善募款活動期間所展現出的傑出卓越表現，感到由衷欣慰與深切讚賞。 【選項解析】(A) scared 害怕的  (B) terrible 糟糕的  (C) frightened 受驚的  (D) pleased 欣慰高興的。genuinely pleased with performance（對表現感到欣慰）。",
    "vocabIndex": 7
  },
  {
    "q": "The gentle autumn sunshine and cool mountain breeze made for an extraordinarily ______ afternoon stroll in the hills.",
    "options": [
      "scared",
      "frightened",
      "pleasant",
      "terrible"
    ],
    "answer": 2,
    "cn": "柔和溫煦的秋日陽光配上午後涼爽的山風，造就了一場漫步在丘陵間極其令人愉悅愜意的午後漫步。 【選項解析】(A) pleasant 令人愉悅宜人的  (B) frightened 害怕的  (C) scared 受驚的  (D) terrible 糟糕的。pleasant stroll（愉悅的漫步）。",
    "vocabIndex": 8
  },
  {
    "q": "It gave grandfather immense ______ to sit on his porch rocking chair and listen to his grandchildren playing outside.",
    "options": [
      "pleasure",
      "fear",
      "feeling",
      "emotion"
    ],
    "answer": 0,
    "cn": "坐在門廊的搖椅上，靜靜聽著屋外孫子們開心的嬉鬧玩耍聲，帶給了祖父無比深切的幸福樂趣。 【選項解析】(A) fear 恐懼  (B) pleasure 樂趣/幸福  (C) feeling 感受  (D) emotion 情緒。gave grandfather immense pleasure（帶給祖父無比樂趣）。",
    "vocabIndex": 9
  },
  {
    "q": "When the fire alarm unexpectedly shrieked in the hotel, several ______ guests ran out into the hallway in their pajamas.",
    "options": [
      "calm",
      "pleasant",
      "pleased",
      "frightened"
    ],
    "answer": 3,
    "cn": "當飯店的火警警報器無預警在走廊尖叫大作時，好幾位受到驚嚇的房客穿著睡衣就倉皇逃到了走廊上。 【選項解析】(A) calm 冷靜的  (B) pleasant 愉快的  (C) frightened 受驚嚇的  (D) pleased 滿意的。frightened guests ran out（受驚的房客跑了出來）。",
    "vocabIndex": 0
  },
  {
    "q": "Swimming alone far past the buoy line at night is an irresponsible and ______ idea that could easily cost your life.",
    "options": [
      "pleasant",
      "terrible",
      "calm",
      "pleased"
    ],
    "answer": 1,
    "cn": "夜間獨自一人游出浮標警戒線外遠處，是一件極其不負責任且極度糟糕的主意，隨時可能葬送性命。 【選項解析】(A) pleasant 愉快的  (B) pleased 欣慰的  (C) calm 平靜的  (D) terrible 糟糕差勁的。terrible idea（糟糕危險的念頭）。",
    "vocabIndex": 3
  },
  {
    "q": "The chef created a savory pasta dish that was an absolute ______ to eat, combining truffle oil with wild mushrooms.",
    "options": [
      "pleasure",
      "fear",
      "sense",
      "emotion"
    ],
    "answer": 0,
    "cn": "大廚精心烹調出一道美味無比的義大利麵，將松露油與野菇絕妙融合，品嚐起來完全是一大享受樂事。 【選項解析】(A) pleasure 享受/樂事  (B) fear 恐懼  (C) sense 感覺  (D) emotion 情緒。absolute pleasure to eat（吃起來真是人間樂事）。",
    "vocabIndex": 9
  },
  {
    "q": "Despite the turbulent rocking of the sailboat in rough waters, the veteran sailor maintained an impressively ______ demeanor.",
    "options": [
      "scared",
      "horrible",
      "frightened",
      "calm"
    ],
    "answer": 3,
    "cn": "儘管帆船在洶湧波濤中劇烈顛簸晃動，這位老練的水手依然保持著令人肅然起敬的沉著冷靜風範。 【選項解析】(A) scared 害怕的  (B) calm 沉著冷靜的  (C) frightened 受驚的  (D) horrible 可怕的。calm demeanor（冷靜風度）。",
    "vocabIndex": 5
  },
  {
    "q": "Many people harbor an irrational ______ of dental appointments, avoiding checkups until they suffer from excruciating toothaches.",
    "options": [
      "pleasure",
      "fear",
      "emotion",
      "sense"
    ],
    "answer": 1,
    "cn": "許多人對看牙醫懷有一種莫名非理性的恐懼，往往逃避檢查直到牙痛到了難以忍受的地步才肯就醫。 【選項解析】(A) pleasure 樂事  (B) emotion 情緒  (C) fear 恐懼  (D) sense 感官。irrational fear of dental appointments（對看牙醫非理性的恐懼）。",
    "vocabIndex": 1
  },
  {
    "q": "The nightmare was so vivid and ______ that the young boy woke up covered in sweat and called out for his father.",
    "options": [
      "calm",
      "pleased",
      "horrible",
      "pleasant"
    ],
    "answer": 2,
    "cn": "這場惡夢是如此逼真與可怕驚悚，小男孩滿身大汗地驚醒過來並大聲呼喊著爸爸前來。 【選項解析】(A) calm 平靜的  (B) pleased 滿意的  (C) pleasant 愉快的  (D) horrible 可怕驚悚的。nightmare was vivid and horrible（逼真可怕的惡夢）。",
    "vocabIndex": 4
  },
  {
    "q": "Little children often feel ______ during their first week of kindergarten until they make friendly classroom playmates.",
    "options": [
      "pleased",
      "scared",
      "pleasant",
      "calm"
    ],
    "answer": 1,
    "cn": "剛上幼稚園的第一週幼童往往容易感到膽怯害怕，直到在班上結交到友善的小玩伴為止。 【選項解析】(A) scared 害怕膽小的  (B) pleased 滿意的  (C) pleasant 愉悅的  (D) calm 冷靜的。feel scared during first week（第一週感到害怕不安）。",
    "vocabIndex": 2
  },
  {
    "q": "Although public speaking can make anyone feel ______, consistent daily rehearsal builds enduring personal confidence.",
    "options": [
      "pleased",
      "pleasant",
      "calm",
      "nervous"
    ],
    "answer": 3,
    "cn": "雖然在大眾面前公開演講會讓任何人都難免感到緊張，但堅持每天演練能建立長久穩固的自信心。 【選項解析】(A) pleased 欣慰的  (B) nervous 緊張焦慮的  (C) calm 鎮定的  (D) pleasant 宜人的。public speaking makes people nervous（公開演講令人緊張）。",
    "vocabIndex": 6
  },
  {
    "q": "My parents were extremely ______ to hear that our school football team won first place in the county tournament.",
    "options": [
      "frightened",
      "scared",
      "pleased",
      "terrible"
    ],
    "answer": 2,
    "cn": "當聽說我們學校的足球隊榮獲全縣冠軍錦標賽第一名殊榮時，我的雙親感到極為高興與欣慰。 【選項解析】(A) frightened 害怕的  (B) scared 驚恐的  (C) pleased 高興欣慰的  (D) terrible 糟糕的。extremely pleased to hear news（聽到好消息非常高興）。",
    "vocabIndex": 7
  },
  {
    "q": "Sitting by the tranquil lake watching swans glide across the water was a deeply relaxing and ______ experience.",
    "options": [
      "pleasant",
      "scared",
      "horrible",
      "frightened"
    ],
    "answer": 0,
    "cn": "坐在寧靜秀麗的湖畔看著天鵝在水面優雅滑行，是一次令人身心極度放鬆且心曠神怡的愉快體驗。 【選項解析】(A) frightened 害怕的  (B) scared 受驚的  (C) horrible 糟糕的  (D) pleasant 愉快舒暢的。relaxing and pleasant experience（放鬆愉快的體驗）。",
    "vocabIndex": 8
  },
  {
    "q": "The lost hiker was so cold and ______ after being trapped in the dark woods overnight that she wept when rescuers arrived.",
    "options": [
      "calm",
      "frightened",
      "pleasant",
      "pleased"
    ],
    "answer": 1,
    "cn": "迷路的登山客在漆黑森林中受困一整夜之後，又冷又驚恐害怕，當搜救人員趕到時她忍不住痛哭流涕。 【選項解析】(A) frightened 受驚恐害怕的  (B) calm 冷靜的  (C) pleasant 愉悅的  (D) pleased 欣慰的。cold and frightened in dark woods（又冷又害怕）。",
    "vocabIndex": 0
  },
  {
    "q": "The medical examiner confirmed that the victim had suffered a ______ head injury from the falling construction scaffolding.",
    "options": [
      "calm",
      "pleased",
      "terrible",
      "pleasant"
    ],
    "answer": 2,
    "cn": "法醫相驗證實，傷者遭受了自工地鷹架墜落重物所造成的致命且可怕嚴重的頭部重創創傷。 【選項解析】(A) calm 平靜的  (B) terrible 嚴重的/可怕的  (C) pleased 滿意的  (D) pleasant 愉悅的。terrible head injury（可怕嚴重的頭部傷害）。",
    "vocabIndex": 3
  },
  {
    "q": "When asked to lead the national anthem at the stadium, the choir singer felt momentarily ______ before hitting the first note.",
    "options": [
      "calm",
      "pleased",
      "pleasant",
      "nervous"
    ],
    "answer": 3,
    "cn": "當被要求在擠滿全場的體育場領唱國歌時，合唱團主唱在唱出第一個音符前短暫地感到了一陣緊張。 【選項解析】(A) calm 平靜的  (B) pleased 欣慰的  (C) nervous 緊張的  (D) pleasant 宜人的。felt momentarily nervous（短暫感到緊張）。",
    "vocabIndex": 6
  },
  {
    "q": "The old historic library offers a wonderfully quiet and ______ environment for scholars conducting deep historical research.",
    "options": [
      "pleasant",
      "scared",
      "horrible",
      "frightened"
    ],
    "answer": 0,
    "cn": "這座歷史悠久的古老圖書館，為致力於進行深入歷史考證研究的學者提供了無比安靜而舒適宜人的環境。 【選項解析】(A) frightened 害怕的  (B) scared 受驚的  (C) horrible 糟糕的  (D) pleasant 舒適宜人的。quiet and pleasant environment（安靜愉快的環境）。",
    "vocabIndex": 8
  },
  {
    "q": "It would give us great ______ if you and your esteemed family could attend our upcoming golden anniversary banquet.",
    "options": [
      "sense",
      "fear",
      "pleasure",
      "emotion"
    ],
    "answer": 2,
    "cn": "如果您與您尊貴的家人能夠撥冗出席我們即將舉辦的金婚紀念盛宴，將帶給我們全體莫大的榮幸與欣喜。 【選項解析】(A) pleasure 榮幸/樂事  (B) fear 恐懼  (C) sense 感覺  (D) emotion 情緒。give us great pleasure（帶給我們莫大榮幸/高興）。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "frightened": {
    "pos": "adj.",
    "en_def": "afraid or anxious, often suddenly",
    "cn_def": "受驚嚇的；害怕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "afraid or anxious, often suddenly",
        "cn_def": "受驚嚇的；害怕的"
      }
    ]
  },
  "fear": {
    "pos": "n. / v.",
    "en_def": "an unpleasant emotion caused by the threat of danger; to be afraid of",
    "cn_def": "恐懼；害怕",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an unpleasant emotion caused by the threat of danger; to be afraid of",
        "cn_def": "恐懼；害怕"
      }
    ]
  },
  "scared": {
    "pos": "adj.",
    "en_def": "fearful or frightened",
    "cn_def": "害怕的；提心吊膽的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fearful or frightened",
        "cn_def": "害怕的；提心吊膽的"
      }
    ]
  },
  "terrible": {
    "pos": "adj.",
    "en_def": "extremely bad, serious, or unpleasant",
    "cn_def": "可怕的；糟糕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely bad, serious, or unpleasant",
        "cn_def": "可怕的；糟糕的"
      }
    ]
  },
  "horrible": {
    "pos": "adj.",
    "en_def": "causing horror; dreadful or very shocking",
    "cn_def": "令人恐懼的；極糟的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing horror; dreadful or very shocking",
        "cn_def": "令人恐懼的；極糟的"
      }
    ]
  },
  "calm": {
    "pos": "adj. / v.",
    "en_def": "not showing or feeling anger, fear, or other strong emotions",
    "cn_def": "平靜的；鎮靜的",
    "combined": [
      {
        "pos": "adj. / v.",
        "en_def": "not showing or feeling anger, fear, or other strong emotions",
        "cn_def": "平靜的；鎮靜的"
      }
    ]
  },
  "nervous": {
    "pos": "adj.",
    "en_def": "easily agitated or alarmed; anxious about something",
    "cn_def": "緊張不安的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily agitated or alarmed; anxious about something",
        "cn_def": "緊張不安的"
      }
    ]
  },
  "pleased": {
    "pos": "adj.",
    "en_def": "feeling or showing pleasure and satisfaction",
    "cn_def": "感到欣慰滿意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or showing pleasure and satisfaction",
        "cn_def": "感到欣慰滿意的"
      }
    ]
  },
  "pleasant": {
    "pos": "adj.",
    "en_def": "giving a sense of happy satisfaction or enjoyment",
    "cn_def": "令人愉快的；宜人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "giving a sense of happy satisfaction or enjoyment",
        "cn_def": "令人愉快的；宜人的"
      }
    ]
  },
  "pleasure": {
    "pos": "n.",
    "en_def": "a feeling of happy satisfaction and enjoyment",
    "cn_def": "樂趣；榮幸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of happy satisfaction and enjoyment",
        "cn_def": "樂趣；榮幸"
      }
    ]
  },
  "feeling": {
    "pos": "",
    "en_def": "",
    "cn_def": "感覺",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "感覺"
      }
    ]
  },
  "sense": {
    "pos": "",
    "en_def": "",
    "cn_def": "感官",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "感官"
      }
    ]
  },
  "emotion": {
    "pos": "",
    "en_def": "",
    "cn_def": "情緒",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "情緒"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
