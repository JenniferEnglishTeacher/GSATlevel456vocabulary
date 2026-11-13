// Lesson 98 Quiz Data: Vision, Landscapes, Human Intelligence, Abilities & Hygiene
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 98 - Vision, Landscapes, Human Intelligence, Abilities & Hygiene",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "return",
    "pos": "v. / n.",
    "cn_def": "返回；歸還",
    "en_def": "to come or go back to a place; to give something back; an act of returning",
    "sentence": "Students must {{BLANK}} all borrowed library books before the end of the semester to avoid late fines.",
    "cn": "學生必須在學期結束前歸還所有借閱的圖書館書籍，以避免繳交逾期罰款。"
  },
  {
    "word": "sight",
    "pos": "n.",
    "cn_def": "視力；景物；景象",
    "en_def": "the ability to see; something that is seen; vision",
    "sentence": "Watching fireworks explode over Sun Moon Lake on New Year's Eve was truly a breathtaking {{BLANK}} to behold.",
    "cn": "在除夕夜觀看煙火在日月潭上空綻放，確實是一幅令人屏息的壯麗景象。"
  },
  {
    "word": "view",
    "pos": "n. / v.",
    "cn_def": "視野；景色；看法；觀看",
    "en_def": "what you can see from a particular place; an opinion; to look at",
    "sentence": "From the top floor of Taipei 101, visitors can enjoy a panoramic {{BLANK}} of the entire mountain basin.",
    "cn": "從台北101的頂樓，遊客可以欣賞整座盆地山景的全景視野。"
  },
  {
    "word": "silent",
    "pos": "adj.",
    "cn_def": "寂靜的；無聲的；沉默的",
    "en_def": "without any sound; not speaking",
    "sentence": "The auditorium remained completely {{BLANK}} while the pianist performed a delicate classical piece on stage.",
    "cn": "當鋼琴家在舞台上演奏一首細緻的古典樂曲時，禮堂裡保持著完全的寂靜無聲。"
  },
  {
    "word": "ability",
    "pos": "n.",
    "cn_def": "能力；本領",
    "en_def": "the physical or mental power or skill needed to do something",
    "sentence": "Regular language practice will greatly enhance your {{BLANK}} to communicate fluently with native speakers.",
    "cn": "規律的語言練習將大幅提升你與母語人士流利溝通的能力。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do an activity or job well, especially that is learned",
    "sentence": "Learning carpentry requires both creative patience and the practical {{BLANK}} to use specialized hand tools.",
    "cn": "學習木工既需要創造性的耐心，也需要使用專業手工具的實用技能。"
  },
  {
    "word": "tip",
    "pos": "n. / v.",
    "cn_def": "尖端；秘訣；小費",
    "en_def": "the pointed end of something; useful advice; extra money given for service",
    "sentence": "The experienced English teacher shared a helpful {{BLANK}} on how to memorize vocabulary through reading.",
    "cn": "那位富有經驗的英語老師分享了一個關於如何透過閱讀記憶單字的實用秘訣。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天賦；才華",
    "en_def": "a natural ability to be good at something, especially in arts or sports",
    "sentence": "From early childhood, Mozart displayed an extraordinary musical {{BLANK}} for composing orchestral melodies.",
    "cn": "從幼年時期起，莫札特就展現了創作管弦樂旋律的非凡音樂天賦。"
  },
  {
    "word": "genius",
    "pos": "n.",
    "cn_def": "天才；天賦才智",
    "en_def": "an exceptionally talented or intelligent person",
    "sentence": "Albert Einstein is universally celebrated as a scientific {{BLANK}} whose theories reshaped modern physics.",
    "cn": "愛因斯坦被世人公認為一位科學天才，他的理論重塑了現代物理學。"
  },
  {
    "word": "soap",
    "pos": "n.",
    "cn_def": "肥皂",
    "en_def": "a substance used with water for washing and cleaning",
    "sentence": "Always wash your hands thoroughly with warm water and antibacterial {{BLANK}} before preparing food.",
    "cn": "在準備食物之前，務必用溫水與抗菌肥皂徹底清洗雙手。"
  }
];

const MCQS = [
  {
    "q": "Please remember to ______ your apartment keys to the landlord before moving out this Saturday morning.",
    "options": [
      "return",
      "soap",
      "sight",
      "talent"
    ],
    "answer": 0,
    "cn": "請記得在本週六早晨搬出前將公寓鑰匙歸還給房東。 【選項解析】(A) soap 肥皂  (B) return 歸還  (C) sight 視力  (D) talent 天賦。return keys to landlord 表「還鑰匙給房東」。",
    "vocabIndex": 0
  },
  {
    "q": "The dense sea fog gradually cleared, and the picturesque coastal lighthouse came into ______.",
    "options": [
      "genius",
      "soap",
      "sight",
      "ability"
    ],
    "answer": 2,
    "cn": "濃郁的海霧逐漸散去，如畫般的沿海燈塔映入眼簾。 【選項解析】(A) sight 景象；眼簾  (B) soap 肥皂  (C) genius 天才  (D) ability 能力。came into sight 為固定片語「映入眼簾」。",
    "vocabIndex": 1
  },
  {
    "q": "Our hillside hotel room offered a magnificent mountain ______ overlooking the sparkling lake below.",
    "options": [
      "soap",
      "tip",
      "ability",
      "view"
    ],
    "answer": 3,
    "cn": "我們位於半山腰的飯店房間提供了俯瞰下方波光粼粼湖泊的壯麗山景視野。 【選項解析】(A) soap 肥皂  (B) tip 秘訣  (C) view 景緻  (D) ability 能力。mountain view 表「山景」。",
    "vocabIndex": 2
  },
  {
    "q": "The entire library was peaceful and ______ as students studied diligently for their college exams.",
    "options": [
      "view",
      "silent",
      "skill",
      "talent"
    ],
    "answer": 1,
    "cn": "當學生們為大學考試勤奮溫習時，整座圖書館顯得安詳而寂靜無聲。 【選項解析】(A) silent 寂靜的  (B) view 景色  (C) skill 技能  (D) talent 天賦。peaceful and silent 表「安詳寂靜」。",
    "vocabIndex": 3
  },
  {
    "q": "Developing the ______ to think critically and solve problems independently is a major goal of education.",
    "options": [
      "soap",
      "tip",
      "sight",
      "ability"
    ],
    "answer": 3,
    "cn": "培養批判性思考與獨立解決問題的能力是教育的主要目標之一。 【選項解析】(A) soap 肥皂  (B) tip 秘訣  (C) ability 能力  (D) sight 視力。ability to think critically 表「批判思考能力」。",
    "vocabIndex": 4
  },
  {
    "q": "Mastering the specialized culinary ______ of making French pastry requires years of professional training.",
    "options": [
      "skill",
      "soap",
      "sight",
      "genius"
    ],
    "answer": 0,
    "cn": "精通製作法式糕點的專業烹飪技巧需要多年的專業訓練。 【選項解析】(A) skill 技能  (B) soap 肥皂  (C) sight 視力  (D) genius 天才。culinary skill 表「廚藝技能」。",
    "vocabIndex": 5
  },
  {
    "q": "The chef gave us a useful cooking ______: sprinkle sea salt over roasted vegetables to bring out flavor.",
    "options": [
      "soap",
      "tip",
      "view",
      "sight"
    ],
    "answer": 1,
    "cn": "主廚給了我們一個實用的烹飪秘訣：在烤蔬菜上灑上海鹽以提味。 【選項解析】(A) soap 肥皂  (B) sight 視力  (C) view 景色  (D) tip 秘訣。cooking tip 表「烹飪小秘訣」。",
    "vocabIndex": 6
  },
  {
    "q": "The young gymnast showed exceptional athletic ______ at the national championship competition.",
    "options": [
      "view",
      "soap",
      "talent",
      "tip"
    ],
    "answer": 2,
    "cn": "這位年輕體操選手在全國錦標大賽中展現了非凡的運動天賦。 【選項解析】(A) talent 天賦  (B) soap 肥皂  (C) view 景色  (D) tip 秘訣。athletic talent 表「運動天賦」。",
    "vocabIndex": 7
  },
  {
    "q": "People considered Leonardo da Vinci a true universal ______ who excelled in both painting and engineering.",
    "options": [
      "genius",
      "soap",
      "tip",
      "sight"
    ],
    "answer": 0,
    "cn": "人們認為達文西是一位真正的全才天才，在繪畫與工程學方面均卓爾不群。 【選項解析】(A) soap 肥皂  (B) genius 天才  (C) tip 小費  (D) sight 景象。universal genius 表「全才天才」。",
    "vocabIndex": 8
  },
  {
    "q": "Before having dinner with the family, the children washed their hands with fragrant lavender ______.",
    "options": [
      "talent",
      "ability",
      "soap",
      "view"
    ],
    "answer": 2,
    "cn": "在與家人共進晚餐之前，孩子們用芬芳的薰衣草肥皂洗手。 【選項解析】(A) talent 天賦  (B) ability 能力  (C) view 景色  (D) soap 肥皂。lavender soap 表「薰衣草肥皂」。",
    "vocabIndex": 9
  },
  {
    "q": "When does the overseas flight ______ to Taiwan after completing the scheduled international tour?",
    "options": [
      "skill",
      "soap",
      "talent",
      "return"
    ],
    "answer": 3,
    "cn": "在完成預定的國際行程後，那架海外班機何時返回台灣？ 【選項解析】(A) return 返回  (B) soap 肥皂  (C) talent 天賦  (D) skill 技能。flight return to Taiwan 表「班機返回台灣」。",
    "vocabIndex": 0
  },
  {
    "q": "Losing one's eye ______ is a tragedy that medical doctors work hard to prevent with modern laser surgery.",
    "options": [
      "soap",
      "sight",
      "tip",
      "genius"
    ],
    "answer": 1,
    "cn": "失去視力是一場悲劇，醫生們透過現代雷射手術竭力防止此一情況。 【選項解析】(A) soap 肥皂  (B) sight 視力  (C) tip 秘訣  (D) genius 天才。eye sight / eyesight 表「視力」。",
    "vocabIndex": 1
  },
  {
    "q": "From the balcony of our apartment, we have an unobstructed ocean ______ stretching to the horizon.",
    "options": [
      "view",
      "tip",
      "soap",
      "ability"
    ],
    "answer": 0,
    "cn": "從我們公寓的陽台望去，我們擁有延伸至地平線的無遮蔽海景視野。 【選項解析】(A) soap 肥皂  (B) tip 秘訣  (C) view 景緻  (D) ability 能力。ocean view 表「海景」。",
    "vocabIndex": 2
  },
  {
    "q": "The forest was completely ______ at midnight, with only the distant sound of an owl breaking the quiet.",
    "options": [
      "talent",
      "skill",
      "silent",
      "view"
    ],
    "answer": 2,
    "cn": "午夜時分的森林完全一片寂靜，只有遠處貓頭鷹的叫聲打破寧靜。 【選項解析】(A) silent 寂靜的  (B) skill 技能  (C) talent 天賦  (D) view 景色。completely silent 表「完全寂靜」。",
    "vocabIndex": 3
  },
  {
    "q": "Many animals have an extraordinary ______ to detect earthquakes hours before human sensors feel them.",
    "options": [
      "tip",
      "ability",
      "soap",
      "sight"
    ],
    "answer": 1,
    "cn": "許多動物擁有非凡的本領，能在人類感測器感受到地震前數小時察覺地震。 【選項解析】(A) tip 秘訣  (B) ability 能力  (C) soap 肥皂  (D) sight 視力。extraordinary ability 表「非凡本領」。",
    "vocabIndex": 4
  },
  {
    "q": "Computer programming is an indispensable technical ______ in today's digital economic environment.",
    "options": [
      "genius",
      "soap",
      "sight",
      "skill"
    ],
    "answer": 3,
    "cn": "電腦程式設計在當今數位經濟環境中是一項不可或缺的專業技術技能。 【選項解析】(A) skill 技能  (B) soap 肥皂  (C) sight 景象  (D) genius 天才。technical skill 表「技術技能」。",
    "vocabIndex": 5
  },
  {
    "q": "In American restaurants, it is customary to leave a fifteen percent cash ______ for attentive waiters.",
    "options": [
      "view",
      "soap",
      "tip",
      "sight"
    ],
    "answer": 2,
    "cn": "在美國餐廳，給予服務周到的服務生百分之十五的現金小費是慣例。 【選項解析】(A) view 觀點  (B) soap 肥皂  (C) tip 小費  (D) sight 視力。cash tip 表「現金小費」。",
    "vocabIndex": 6
  },
  {
    "q": "The audition judges were amazed by her vocal ______ when she sang an opera solo effortlessly.",
    "options": [
      "soap",
      "view",
      "tip",
      "talent"
    ],
    "answer": 3,
    "cn": "當她毫不費力地演唱一首歌劇獨唱時，選拔評審為她的歌唱才華驚嘆不已。 【選項解析】(A) soap 肥皂  (B) talent 才華  (C) tip 秘訣  (D) view 景觀。vocal talent 表「歌唱才華」。",
    "vocabIndex": 7
  },
  {
    "q": "Steve Jobs was widely recognized as a design ______ who transformed consumer technology products.",
    "options": [
      "soap",
      "genius",
      "tip",
      "sight"
    ],
    "answer": 1,
    "cn": "史蒂夫·賈伯斯被世人廣泛公認為一位改變了消費性科技產品的設計天才。 【選項解析】(A) soap 肥皂  (B) tip 秘訣  (C) genius 天才  (D) sight 景象。design genius 表「設計天才」。",
    "vocabIndex": 8
  },
  {
    "q": "Remember to take a bar of facial ______ and a clean towel when you go to the hot spring resort.",
    "options": [
      "soap",
      "talent",
      "view",
      "ability"
    ],
    "answer": 0,
    "cn": "前往溫泉度假村時，記得攜帶一塊洗面皂和乾淨毛巾。 【選項解析】(A) soap 肥皂  (B) talent 天賦  (C) view 視野  (D) ability 能力。facial soap 表「洗面皂」。",
    "vocabIndex": 9
  },
  {
    "q": "I must ______ to the office immediately because I forgot an important client contract on my desk.",
    "options": [
      "soap",
      "return",
      "sight",
      "skill"
    ],
    "answer": 1,
    "cn": "我必須立刻返回辦公室，因為我把一份重要的客戶合約忘在辦公桌上了。 【選項解析】(A) soap 肥皂  (B) return 返回  (C) sight 視力  (D) skill 技能。return to the office 表「返回辦公室」。",
    "vocabIndex": 0
  },
  {
    "q": "The cherry blossoms blooming across Yangmingshan in spring are a spectacular ______ that attracts crowds.",
    "options": [
      "sight",
      "soap",
      "tip",
      "genius"
    ],
    "answer": 0,
    "cn": "春天陽明山上櫻花盛開是一幅壯觀的景象，吸引了大批人潮。 【選項解析】(A) soap 肥皂  (B) sight 景象  (C) tip 秘訣  (D) genius 天才。spectacular sight 表「壯觀景象」。",
    "vocabIndex": 1
  },
  {
    "q": "The committee members expressed different ______ on whether to construct a new sports stadium in the city.",
    "options": [
      "tips",
      "soaps",
      "views",
      "sights"
    ],
    "answer": 2,
    "cn": "委員會成員對於是否在該市建造一座新體育場表達了不同的觀點看法。 【選項解析】(A) tips 秘訣  (B) soaps 肥皂  (C) views 觀點  (D) sights 視力。different views on 表「對…的不同看法」。",
    "vocabIndex": 2
  },
  {
    "q": "The theater audience remained reverently ______ until the final emotional violin chord faded away.",
    "options": [
      "view",
      "skill",
      "talent",
      "silent"
    ],
    "answer": 3,
    "cn": "劇場觀眾虔敬地保持肅靜，直到最後一個富有情感的小提琴和弦消逝。 【選項解析】(A) silent 肅靜的  (B) skill 技能  (C) talent 天賦  (D) view 景觀。remained silent 表「保持肅靜」。",
    "vocabIndex": 3
  },
  {
    "q": "Humans possess the unique cognitive ______ to create complex languages and write literature.",
    "options": [
      "tip",
      "soap",
      "ability",
      "sight"
    ],
    "answer": 2,
    "cn": "人類具備獨特的認知能力，能夠創造複雜語言並撰寫文學著作。 【選項解析】(A) tip 秘訣  (B) soap 肥皂  (C) sight 視力  (D) ability 能力。cognitive ability 表「認知能力」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "return": {
    "pos": "v. / n.",
    "en_def": "to come or go back to a place; to give something back; an act of returning",
    "cn_def": "返回；歸還",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to come or go back to a place; to give something back; an act of returning",
        "cn_def": "返回；歸還"
      }
    ]
  },
  "sight": {
    "pos": "n.",
    "en_def": "the ability to see; something that is seen; vision",
    "cn_def": "視力；景物；景象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to see; something that is seen; vision",
        "cn_def": "視力；景物；景象"
      }
    ]
  },
  "view": {
    "pos": "n. / v.",
    "en_def": "what you can see from a particular place; an opinion; to look at",
    "cn_def": "視野；景色；看法；觀看",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "what you can see from a particular place; an opinion; to look at",
        "cn_def": "視野；景色；看法；觀看"
      }
    ]
  },
  "silent": {
    "pos": "adj.",
    "en_def": "without any sound; not speaking",
    "cn_def": "寂靜的；無聲的；沉默的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "without any sound; not speaking",
        "cn_def": "寂靜的；無聲的；沉默的"
      }
    ]
  },
  "ability": {
    "pos": "n.",
    "en_def": "the physical or mental power or skill needed to do something",
    "cn_def": "能力；本領",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the physical or mental power or skill needed to do something",
        "cn_def": "能力；本領"
      }
    ]
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do an activity or job well, especially that is learned",
    "cn_def": "技能；技巧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an ability to do an activity or job well, especially that is learned",
        "cn_def": "技能；技巧"
      }
    ]
  },
  "tip": {
    "pos": "n. / v.",
    "en_def": "the pointed end of something; useful advice; extra money given for service",
    "cn_def": "尖端；秘訣；小費",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the pointed end of something; useful advice; extra money given for service",
        "cn_def": "尖端；秘訣；小費"
      }
    ]
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to be good at something, especially in arts or sports",
    "cn_def": "天賦；才華",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a natural ability to be good at something, especially in arts or sports",
        "cn_def": "天賦；才華"
      }
    ]
  },
  "genius": {
    "pos": "n.",
    "en_def": "an exceptionally talented or intelligent person",
    "cn_def": "天才；天賦才智",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an exceptionally talented or intelligent person",
        "cn_def": "天才；天賦才智"
      }
    ]
  },
  "soap": {
    "pos": "n.",
    "en_def": "a substance used with water for washing and cleaning",
    "cn_def": "肥皂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance used with water for washing and cleaning",
        "cn_def": "肥皂"
      }
    ]
  },
  "tips": {
    "pos": "",
    "en_def": "",
    "cn_def": "秘訣",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "秘訣"
      }
    ]
  },
  "soaps": {
    "pos": "",
    "en_def": "",
    "cn_def": "肥皂",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "肥皂"
      }
    ]
  },
  "views": {
    "pos": "",
    "en_def": "",
    "cn_def": "觀點",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "觀點"
      }
    ]
  },
  "sights": {
    "pos": "",
    "en_def": "",
    "cn_def": "視力",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "視力"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
