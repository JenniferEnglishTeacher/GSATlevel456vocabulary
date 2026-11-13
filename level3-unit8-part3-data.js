// Part 3 Quiz Data: knight – part and parcel of
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 8-3 - knight – part and parcel of",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "knight",
    "pos": "n./v.",
    "cn_def": "騎士；爵士；授以爵位（名詞/動詞）",
    "en_def": "a medieval warrior in armor serving a monarch; to grant someone the title of knight",
    "sentence": "In the exciting fairy tale, a brave {{BLANK}} in shining metal armor rode his white horse to save the princess from the dragon.",
    "cn": "在那則精彩的童話故事中，一位身穿閃亮金屬盔甲的勇敢騎士騎著白馬從巨龍手中救出了公主。"
  },
  {
    "word": "ladder",
    "pos": "n.",
    "cn_def": "梯子；階梯（可數）",
    "en_def": "a piece of equipment consisting of two parallel vertical poles and steps used for climbing",
    "sentence": "You will certainly need a tall aluminum {{BLANK}} if you want to rescue the frightened kitten stuck high up in the tree.",
    "cn": "如果你想把卡在高樹上受驚嚇的小貓救下來，你肯定需要一把高鋁梯。"
  },
  {
    "word": "mathematical",
    "pos": "adj.",
    "cn_def": "數學的；精確嚴謹的",
    "en_def": "relating to, involving, or based on the science of mathematics",
    "sentence": "Albert possesses a rare natural talent and can solve any complicated {{BLANK}} equation on the blackboard within seconds.",
    "cn": "艾伯特擁有罕見的過人天賦，能在幾秒鐘之內解開黑板上任何複雜的數學方程式。"
  },
  {
    "word": "mend",
    "pos": "v.",
    "cn_def": "修補；縫補；癒合改善",
    "en_def": "to repair something that is broken, damaged, or torn; to improve or heal",
    "sentence": "Vicki used some strong waterproof glue to {{BLANK}} the broken ceramic handle of her favorite morning coffee cup.",
    "cn": "維琪使用一些強力防水膠水來修補她最喜歡的早晨咖啡杯破損的陶瓷把手。"
  },
  {
    "word": "mend his ways",
    "pos": "v.phr.",
    "cn_def": "改過自新；改邪歸正",
    "en_def": "to improve one's bad behavior, habits, or conduct",
    "sentence": "The patient school principal gave the mischievous teenage boy one final opportunity to {{BLANK}} before suspending him.",
    "cn": "耐心的校長給了那個調皮搗蛋的少年最後一次改過自新的機會，才暫時沒讓他停學。"
  },
  {
    "word": "mighty",
    "pos": "adj.",
    "cn_def": "強大的；強有力的；巨大的",
    "en_def": "possessing great and impressive power, strength, or size",
    "sentence": "The ancient king assembled a {{BLANK}} army composed of ten thousand disciplined soldiers to defend his border fortress.",
    "cn": "那位古代國王集結了一支由一萬名紀律嚴明士兵組成的強大軍隊，來守衛邊界要塞。"
  },
  {
    "word": "navy",
    "pos": "n.",
    "cn_def": "海軍；海軍部隊（常大寫）",
    "en_def": "the branch of a country's armed services that conducts military operations at sea",
    "sentence": "My older brother proudly enlisted in the national {{BLANK}} after graduating from high school and now sails across oceans.",
    "cn": "我哥哥高中畢業後自豪地加入了國家海軍，現在航行於各大洋之間。"
  },
  {
    "word": "neat",
    "pos": "adj.",
    "cn_def": "整潔的；整齊的；極好的",
    "en_def": "arranged in an orderly, clean, and tidy way; cleverly simple",
    "sentence": "Martin made sure that his appearance was completely clean and {{BLANK}} before leaving his apartment for the dinner date.",
    "cn": "馬丁在離開公寓前往晚餐約會之前，確保自己的儀表完全乾淨且整齊得體。"
  },
  {
    "word": "overseas",
    "pos": "adv./adj.",
    "cn_def": "在海外；到國外（副詞/形容詞）",
    "en_def": "in or to a foreign country, especially one across the sea",
    "sentence": "Because our company manufactures electronic goods for global consumers, the sales manager frequently travels {{BLANK}} for client meetings.",
    "cn": "因為我們公司為全球消費者生產電子產品，業務經理經常前往海外與客戶開會。"
  },
  {
    "word": "parcel",
    "pos": "n./v.",
    "cn_def": "包裹；一片土地；分包（名詞/動詞）",
    "en_def": "a package wrapped in paper for mailing; a piece of land; to divide into portions",
    "sentence": "I was thrilled to receive a surprise postal {{BLANK}} from my cousin in Canada that contained delicious maple candies.",
    "cn": "我收到加拿大表哥寄來的驚喜郵政包裹，裡面裝滿了美味的楓糖果，讓我欣喜萬分。"
  },
  {
    "word": "part and parcel of",
    "pos": "phr.",
    "cn_def": "…不可或缺的一部分；必然組成部分",
    "en_def": "an essential or unavoidable part of an experience, activity, or job",
    "sentence": "Dealing with occasional flight delays and tiring jet lag is simply {{BLANK}} traveling frequently for business.",
    "cn": "面對偶爾的班機延誤與疲憊的時差反應，只不過是頻繁出差不可或缺／不可避免的一部分。"
  }
];

const MCQS = [
  {
    "q": "The postman rang our doorbell and handed my mother a brown paper ______ from America.",
    "options": [
      "navy",
      "ladder",
      "parcel",
      "knight"
    ],
    "answer": 2,
    "cn": "郵差按了我們家的門鈴，親手將一個來自美國的牛皮紙包裹交給我母親。",
    "vocabIndex": 9
  },
  {
    "q": "The firefighter climbed up the tall metal ______ to save the dog from the burning window.",
    "options": [
      "ladder",
      "parcel",
      "navy",
      "knight"
    ],
    "answer": 0,
    "cn": "消防員爬上高高的金屬梯子，從起火的窗戶中救出那隻狗。",
    "vocabIndex": 1
  },
  {
    "q": "The brave ______ on his white horse protected the castle walls against the enemy army.",
    "options": [
      "ladder",
      "parcel",
      "navy",
      "knight"
    ],
    "answer": 3,
    "cn": "騎著白馬的英勇騎士保護城堡城牆免遭敵軍入侵。",
    "vocabIndex": 0
  },
  {
    "q": "My uncle serves in the ______ and spends six months every year sailing on a big warship.",
    "options": [
      "parcel",
      "navy",
      "ladder",
      "knight"
    ],
    "answer": 1,
    "cn": "我叔叔在海軍服役，每年有六個月時間在一艘大型軍艦上航海。",
    "vocabIndex": 6
  },
  {
    "q": "A large ______ of land near the river was bought by the town to build a children's park.",
    "options": [
      "ladder",
      "navy",
      "knight",
      "parcel"
    ],
    "answer": 3,
    "cn": "河邊的一大片土地／地塊被鎮政府買下，用來建造一座兒童公園。",
    "vocabIndex": 9
  },
  {
    "q": "The painter put his bucket of paint on the step of the wooden ______ while painting the ceiling.",
    "options": [
      "navy",
      "ladder",
      "knight",
      "parcel"
    ],
    "answer": 1,
    "cn": "油漆工在粉刷天花板時，將他的油漆桶放在木梯的踏板上。",
    "vocabIndex": 1
  },
  {
    "q": "Grandma used a needle and blue thread to ______ the small hole in my wool sweater.",
    "options": [
      "mend",
      "parcel",
      "knight",
      "boot"
    ],
    "answer": 0,
    "cn": "奶奶用針和藍色毛線修補／縫補我羊毛衫上的小洞。",
    "vocabIndex": 3
  },
  {
    "q": "The queen ______ the brave explorer for discovering the new sea route around the continent.",
    "options": [
      "parceled",
      "mended",
      "knighted",
      "booted"
    ],
    "answer": 2,
    "cn": "女王因那名勇敢探險家發現環繞大洲的新海上航線而將他封為爵士。",
    "vocabIndex": 0
  },
  {
    "q": "It took a few weeks, but the boy's broken leg did slowly ______ and heal properly.",
    "options": [
      "drag",
      "knight",
      "parcel",
      "mend"
    ],
    "answer": 3,
    "cn": "花了幾週時間，但男孩骨折的腿確實慢慢癒合改善並康復良好。",
    "vocabIndex": 3
  },
  {
    "q": "Lisa's bedroom is always neat and clean because she puts all her clothes away ______.",
    "options": [
      "neatly",
      "mighty",
      "overseas",
      "mathematical"
    ],
    "answer": 0,
    "cn": "麗莎的臥室總是乾淨整齊，因為她總是將所有衣服整齊地收好。"
  },
  {
    "q": "Albert can calculate difficult ______ problems in his head faster than anyone else in class.",
    "options": [
      "mighty",
      "mathematical",
      "neat",
      "overseas"
    ],
    "answer": 1,
    "cn": "艾伯特在心算複雜數學難題時，速度比班上任何人都快。",
    "vocabIndex": 2
  },
  {
    "q": "The ______ river was so wide and deep that big cargo ships could sail up it easily.",
    "options": [
      "mathematical",
      "neat",
      "mighty",
      "overseas"
    ],
    "answer": 2,
    "cn": "那條巨大的／浩瀚的河流是如此寬廣深邃，大型貨輪可以輕易在上航行。",
    "vocabIndex": 5
  },
  {
    "q": "Sam has very ______ handwriting, so the teacher can read his homework effortlessly.",
    "options": [
      "mighty",
      "neat",
      "overseas",
      "mathematical"
    ],
    "answer": 1,
    "cn": "山姆的字跡非常工整整齊，因此老師批改他的作業毫不費力。",
    "vocabIndex": 7
  },
  {
    "q": "The strong fortress stood on top of the hill, defended by a ______ army of brave soldiers.",
    "options": [
      "mighty",
      "mathematical",
      "neat",
      "overseas"
    ],
    "answer": 0,
    "cn": "堅固的要塞屹立在山頂上，由一支由英勇士兵組成的強大軍隊防守著。",
    "vocabIndex": 5
  },
  {
    "q": "The school welcomed fifty ______ students who flew in from Japan and Canada to learn English.",
    "options": [
      "neat",
      "mighty",
      "mathematical",
      "overseas"
    ],
    "answer": 3,
    "cn": "學校熱烈歡迎了五十名搭機從日本和加拿大前來學習英語的海外學生。",
    "vocabIndex": 8
  },
  {
    "q": "Helen works for a global travel company, so she has to fly ______ several times each year.",
    "options": [
      "neatly",
      "mighty",
      "overseas",
      "mathematical"
    ],
    "answer": 2,
    "cn": "海倫為一家跨國旅遊公司工作，因此她每年必須飛往海外好幾次。",
    "vocabIndex": 8
  },
  {
    "q": "My father plans to travel ______ to Germany next month for an important business conference.",
    "options": [
      "neatly",
      "overseas",
      "mighty",
      "mathematical"
    ],
    "answer": 1,
    "cn": "我父親計畫下個月出國前往海外德國參加一場重要的商務會議。",
    "vocabIndex": 8
  },
  {
    "q": "The police officer told the noisy boy to ______ and stop causing trouble in the library.",
    "options": [
      "mend his ways",
      "climb the ladder",
      "part and parcel",
      "knight in armor"
    ],
    "answer": 0,
    "cn": "警官告訴那個吵鬧的男孩要改過自新／規矩點，不要在圖書館製造麻煩。",
    "vocabIndex": 4
  },
  {
    "q": "The boss warned the careless clerk that he must ______ or he would lose his job.",
    "options": [
      "climb the ladder",
      "part and parcel",
      "mend his ways",
      "boot up"
    ],
    "answer": 2,
    "cn": "老闆警告那名粗心的職員，他必須端正行為／改過自新，否則就會丟掉飯碗。",
    "vocabIndex": 4
  },
  {
    "q": "Working hard on rainy days is ______ of being a dedicated postal mail carrier.",
    "options": [
      "mend one's ways",
      "climb the ladder",
      "knight in armor",
      "part and parcel"
    ],
    "answer": 3,
    "cn": "雨天辛勤工作是身為盡職郵差不可或缺的一部分。",
    "vocabIndex": 9
  },
  {
    "q": "Practicing sports every single morning is ______ of becoming a champion athlete.",
    "options": [
      "part and parcel",
      "mend one's ways",
      "climb the ladder",
      "boot up"
    ],
    "answer": 0,
    "cn": "每天早晨練習各項運動，是成為冠軍運動員不可避免的必經之路。",
    "vocabIndex": 9
  },
  {
    "q": "When Cindy had a flat tire on the lonely road, the kind mechanic was like a ______.",
    "options": [
      "part and parcel",
      "mathematical equation",
      "corporate ladder",
      "knight in shining armor"
    ],
    "answer": 3,
    "cn": "當辛蒂在偏僻路上車胎爆胎時，那位熱心的修車師傅宛如及時拯救危難的英勇騎士。",
    "vocabIndex": 0
  },
  {
    "q": "The young office clerk works very hard every day, hoping to climb up the ______.",
    "options": [
      "knight in armor",
      "corporate ladder",
      "part and parcel",
      "mathematical model"
    ],
    "answer": 1,
    "cn": "那位年輕的辦公室職員每天非常努力工作，希望能早日晉升公司高階職位／力爭上游。",
    "vocabIndex": 1
  },
  {
    "q": "The hero in the movie was described by the villagers as their true ______.",
    "options": [
      "corporate ladder",
      "mathematical model",
      "knight in shining armor",
      "part and parcel"
    ],
    "answer": 2,
    "cn": "電影中的那位英雄被村民們譽為他們真正的英勇拯救者／及時救星。",
    "vocabIndex": 0
  },
  {
    "q": "Making a few small mistakes in life is just ______ of growing up and learning.",
    "options": [
      "part and parcel",
      "mend one's ways",
      "corporate ladder",
      "knight in armor"
    ],
    "answer": 0,
    "cn": "人生中犯些小錯誤只不過是成長與學習過程中不可避免的一部分。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "knight": {
    "pos": "n./v.",
    "en_def": "a medieval warrior in armor serving a monarch; to grant someone the title of knight",
    "cn_def": "騎士；爵士；授以爵位（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a medieval warrior in armor serving a monarch; to grant someone the title of knight",
        "cn_def": "騎士；爵士；授以爵位（名詞/動詞）"
      }
    ]
  },
  "ladder": {
    "pos": "n.",
    "en_def": "a piece of equipment consisting of two parallel vertical poles and steps used for climbing",
    "cn_def": "梯子；階梯（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a piece of equipment consisting of two parallel vertical poles and steps used for climbing",
        "cn_def": "梯子；階梯（可數）"
      }
    ]
  },
  "mathematical": {
    "pos": "adj.",
    "en_def": "relating to, involving, or based on the science of mathematics",
    "cn_def": "數學的；精確嚴謹的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to, involving, or based on the science of mathematics",
        "cn_def": "數學的；精確嚴謹的"
      }
    ]
  },
  "mend": {
    "pos": "v.",
    "en_def": "to repair something that is broken, damaged, or torn; to improve or heal",
    "cn_def": "修補；縫補；癒合改善",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to repair something that is broken, damaged, or torn; to improve or heal",
        "cn_def": "修補；縫補；癒合改善"
      }
    ]
  },
  "mend his ways": {
    "pos": "v.phr.",
    "en_def": "to improve one's bad behavior, habits, or conduct",
    "cn_def": "改過自新；改邪歸正",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to improve one's bad behavior, habits, or conduct",
        "cn_def": "改過自新；改邪歸正"
      }
    ]
  },
  "mend one's ways": {
    "pos": "v.phr.",
    "en_def": "to improve one's bad behavior, habits, or conduct",
    "cn_def": "改過自新；改邪歸正",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to improve one's bad behavior, habits, or conduct",
        "cn_def": "改過自新；改邪歸正"
      }
    ]
  },
  "mighty": {
    "pos": "adj.",
    "en_def": "possessing great and impressive power, strength, or size",
    "cn_def": "強大的；強有力的；巨大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "possessing great and impressive power, strength, or size",
        "cn_def": "強大的；強有力的；巨大的"
      }
    ]
  },
  "navy": {
    "pos": "n.",
    "en_def": "the branch of a country's armed services that conducts military operations at sea",
    "cn_def": "海軍；海軍部隊（常大寫）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the branch of a country's armed services that conducts military operations at sea",
        "cn_def": "海軍；海軍部隊（常大寫）"
      }
    ]
  },
  "neat": {
    "pos": "adj.",
    "en_def": "arranged in an orderly, clean, and tidy way; cleverly simple",
    "cn_def": "整潔的；整齊的；極好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "arranged in an orderly, clean, and tidy way; cleverly simple",
        "cn_def": "整潔的；整齊的；極好的"
      }
    ]
  },
  "overseas": {
    "pos": "adv./adj.",
    "en_def": "in or to a foreign country, especially one across the sea",
    "cn_def": "在海外；到國外（副詞/形容詞）",
    "combined": [
      {
        "pos": "adv./adj.",
        "en_def": "in or to a foreign country, especially one across the sea",
        "cn_def": "在海外；到國外（副詞/形容詞）"
      }
    ]
  },
  "parcel": {
    "pos": "n./v.",
    "en_def": "a package wrapped in paper for mailing; a piece of land; to divide into portions",
    "cn_def": "包裹；一片土地；分包（名詞/動詞）",
    "combined": [
      {
        "pos": "n./v.",
        "en_def": "a package wrapped in paper for mailing; a piece of land; to divide into portions",
        "cn_def": "包裹；一片土地；分包（名詞/動詞）"
      }
    ]
  },
  "part and parcel of": {
    "pos": "phr.",
    "en_def": "an essential or unavoidable part of an experience, activity, or job",
    "cn_def": "…不可或缺的一部分；必然組成部分",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an essential or unavoidable part of an experience, activity, or job",
        "cn_def": "…不可或缺的一部分；必然組成部分"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
