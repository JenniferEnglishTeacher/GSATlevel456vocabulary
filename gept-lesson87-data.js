// Lesson 87 Quiz Data: Scientific Methods, Research Projects, Samples & Physical States
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 87 - Scientific Methods, Research Projects, Samples & Physical States",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "favor",
    "pos": "n. / v.",
    "cn_def": "恩惠；幫忙；偏袒",
    "en_def": "an act of kindness beyond what is due; to prefer or support",
    "sentence": "Could you please do me a small personal {{BLANK}} and look after my pet cat while I travel to Tainan this weekend?",
    "cn": "你能幫我一個小小的個人忙，在我這週末前往台南旅遊時照顧我的寵物貓嗎？"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法；方式",
    "en_def": "a particular way of doing something, especially a systematic one",
    "sentence": "The science teacher taught the high school students a systematic {{BLANK}} for testing the cleanliness of drinking water.",
    "cn": "自然老師教授了高中生一套用來檢驗飲用水清潔度的系統性方法。"
  },
  {
    "word": "project",
    "pos": "n. / v.",
    "cn_def": "專案；計畫；研討題目",
    "en_def": "a planned piece of work that has a specific purpose",
    "sentence": "Our environmental biology team worked hard for three months to complete the research {{BLANK}} on river pollution.",
    "cn": "我們的環境生物團隊辛勤工作了三個月，完成了關於河流污染的研究專案。"
  },
  {
    "word": "sample",
    "pos": "n. / v.",
    "cn_def": "樣本；樣品；品嚐",
    "en_def": "a small amount of a substance showing what the whole is like",
    "sentence": "The department store cosmetic counter gave free skin lotion {{BLANK}} to customers who filled out a short survey.",
    "cn": "百貨公司化妝品專櫃向填寫簡短問卷的顧客發放了免費的護膚乳液樣品。"
  },
  {
    "word": "screen",
    "pos": "n. / v.",
    "cn_def": "螢幕；紗窗；篩選",
    "en_def": "the flat surface on a computer or television; to filter or test",
    "sentence": "Looking continuously at a bright smartphone {{BLANK}} in the dark before sleeping can cause severe eyestrain.",
    "cn": "睡前在黑暗中持續盯著明亮的手機螢幕會造成嚴重的眼睛疲勞。"
  },
  {
    "word": "steam",
    "pos": "n. / v.",
    "cn_def": "水蒸氣；蒸煮",
    "en_def": "the hot gas that water turns into when boiled; to cook with steam",
    "sentence": "Hot white {{BLANK}} rose from the boiling kettle in the kitchen, signaling that the morning tea was ready.",
    "cn": "熱騰騰的白色水蒸氣從廚房沸騰的水壺中升起，示意晨茶已經準備好了。"
  },
  {
    "word": "tank",
    "pos": "n.",
    "cn_def": "儲水槽；油箱；坦克",
    "en_def": "a large container for holding liquid or gas; an armored fighting vehicle",
    "sentence": "The apartment building maintenance team cleaned the large rooftop water {{BLANK}} thoroughly yesterday morning.",
    "cn": "公寓大樓維護團隊昨天早上徹底清洗了屋頂上的大型儲水槽。"
  },
  {
    "word": "pile",
    "pos": "n. / v.",
    "cn_def": "一堆；堆疊",
    "en_def": "a mass of things heaped together on top of one another",
    "sentence": "A tall {{BLANK}} of dirty clothing lay beside the washing machine waiting to be washed on Sunday afternoon.",
    "cn": "一大堆髒衣服堆在洗衣機旁，等待著在星期天下午清洗。"
  },
  {
    "word": "bundle",
    "pos": "n. / v.",
    "cn_def": "一捆；一束；包裹",
    "en_def": "a number of things tied or wrapped together",
    "sentence": "The volunteer workers tied a thick {{BLANK}} of old newspapers with plastic ropes before sending them to the recycling center.",
    "cn": "志工們在將大捆舊報紙送往回收中心之前，先用塑膠繩將它們捆綁整齊。"
  },
  {
    "word": "liquid",
    "pos": "n. / adj.",
    "cn_def": "液體；液態的",
    "en_def": "a substance that flows freely, such as water or oil",
    "sentence": "You should drink plenty of warm {{BLANK}}s such as honey water and chicken broth when you have a fever.",
    "cn": "當你發燒時，你應該多喝溫熱的液體，例如蜂蜜水和雞湯。"
  }
];

const MCQS = [
  {
    "q": "Excuse me, Mr. Wang, could you do me a huge ______ and give me a ride to the nearest train station?",
    "options": [
      "favor",
      "method",
      "project",
      "sample"
    ],
    "answer": 0,
    "cn": "不好意思王先生，你能幫我一個大忙，載我去最近的火車站嗎？ 【選項解析】(A) favor 幫忙  (B) method 方法  (C) project 專案  (D) sample 樣品。do sb a favor 為常見片語「幫某人一個忙」。",
    "vocabIndex": 0
  },
  {
    "q": "Using flashcards with pictures is a very effective study ______ for elementary students to memorize English words.",
    "options": [
      "favor",
      "project",
      "method",
      "screen"
    ],
    "answer": 2,
    "cn": "使用帶有圖片的單字卡是小學生記憶英語單字的一種非常有效的學習方法。 【選項解析】(A) favor 幫忙  (B) method 方法  (C) project 專案  (D) screen 螢幕。有效的學習方法為 effective study method。",
    "vocabIndex": 1
  },
  {
    "q": "All tenth-grade students are required to submit an independent science ______ before the end of the school semester.",
    "options": [
      "sample",
      "screen",
      "favor",
      "project"
    ],
    "answer": 3,
    "cn": "所有十年級學生都必須在學期結束前繳交一份獨立的科學研究專題。 【選項解析】(A) sample 樣本  (B) screen 螢幕  (C) project 專案/專題  (D) favor 恩惠。科學專題為 science project。",
    "vocabIndex": 2
  },
  {
    "q": "The laboratory technician tested a small blood ______ to determine whether the patient had contracted the virus.",
    "options": [
      "favor",
      "sample",
      "tank",
      "method"
    ],
    "answer": 1,
    "cn": "實驗室檢驗員化驗了一小份血液樣本，以確定該病患是否感染了病毒。 【選項解析】(A) favor 幫忙  (B) method 方法  (C) tank 水槽  (D) sample 樣本。血液樣本為 blood sample。",
    "vocabIndex": 3
  },
  {
    "q": "You can adjust the brightness settings on your computer ______ to make reading long documents more comfortable.",
    "options": [
      "pile",
      "steam",
      "tank",
      "screen"
    ],
    "answer": 3,
    "cn": "你可以調整電腦螢幕上的亮度設定，讓閱讀長篇文件更加舒適。 【選項解析】(A) screen 螢幕  (B) steam 水蒸氣  (C) tank 水槽  (D) pile 一堆。電腦螢幕為 computer screen。",
    "vocabIndex": 4
  },
  {
    "q": "When my mother lifted the metal lid of the rice cooker, a hot cloud of white ______ filled the kitchen.",
    "options": [
      "screen",
      "pile",
      "steam",
      "bundle"
    ],
    "answer": 2,
    "cn": "當我母親掀開電鍋的金屬蓋時，一團熱騰騰的白色水蒸氣瀰漫了廚房。 【選項解析】(A) screen 螢幕  (B) steam 水蒸氣  (C) pile 一堆  (D) bundle 一捆。熱蒸氣為 hot steam。",
    "vocabIndex": 5
  },
  {
    "q": "The driver pulled into the gas station because the fuel ______ in his car was almost completely empty.",
    "options": [
      "tank",
      "bundle",
      "pile",
      "steam"
    ],
    "answer": 0,
    "cn": "司機把車開進了加油站，因為他車裡的油箱幾乎完全空了。 【選項解析】(A) pile 一堆  (B) bundle 一捆  (C) tank 油箱  (D) steam 水蒸氣。汽車油箱為 fuel tank。",
    "vocabIndex": 6
  },
  {
    "q": "The librarian organized the messy ______ of returned storybooks into neat alphabetical order on the wooden cart.",
    "options": [
      "bundle",
      "pile",
      "tank",
      "liquid"
    ],
    "answer": 1,
    "cn": "圖書管理員把木推車上雜亂的一堆歸還童書按照字母順序整理得整整齊齊。 【選項解析】(A) pile 一堆  (B) bundle 一捆  (C) tank 水槽  (D) liquid 液體。雜亂的一堆書為 messy pile of books。",
    "vocabIndex": 7
  },
  {
    "q": "The postman delivered a wrapped ______ of letters and magazines to our front doorstep this morning.",
    "options": [
      "pile",
      "liquid",
      "bundle",
      "steam"
    ],
    "answer": 2,
    "cn": "今天早上郵差把一捆包紮好的信件和雜誌送到了我們的前門台階上。 【選項解析】(A) pile 一堆  (B) bundle 一捆  (C) liquid 液體  (D) steam 水蒸氣。捆綁好的信件為 bundle of letters。",
    "vocabIndex": 8
  },
  {
    "q": "Water, milk, and gasoline are common examples of ______ that take the shape of whatever container holds them.",
    "options": [
      "pile",
      "liquid",
      "steam",
      "tank"
    ],
    "answer": 1,
    "cn": "水、牛奶和汽油都是液體的常見例子，它們會呈現容納它們的任何容器的形狀。 【選項解析】(A) pile 一堆  (B) steam 水蒸氣  (C) liquid 液體  (D) tank 水槽。液態物質為 liquid。",
    "vocabIndex": 9
  },
  {
    "q": "I would consider it a great ______ if you could review my university application essay and offer suggestions.",
    "options": [
      "favor",
      "method",
      "project",
      "sample"
    ],
    "answer": 0,
    "cn": "如果你能幫忙審閱我的大學申請自傳並提供建議，我會認為這是一個莫大的幫忙。 【選項解析】(A) favor 幫忙  (B) method 方法  (C) project 計畫  (D) sample 樣品。重大幫助恩惠為 a great favor。",
    "vocabIndex": 0
  },
  {
    "q": "Scientists have developed a new recycling ______ that turns plastic waste into reusable building materials.",
    "options": [
      "favor",
      "screen",
      "project",
      "method"
    ],
    "answer": 3,
    "cn": "科學家開發了一種新的回收方法，可以將塑膠廢棄物轉化為可重複使用的建築材料。 【選項解析】(A) favor 幫忙  (B) method 方法  (C) project 專案  (D) screen 螢幕。回收處理方法為 recycling method。",
    "vocabIndex": 1
  },
  {
    "q": "The city council approved a multimillion-dollar transportation ______ to extend the metro line to the airport.",
    "options": [
      "project",
      "screen",
      "sample",
      "favor"
    ],
    "answer": 0,
    "cn": "市議會批准了一項耗資數百萬美元的交通建設專案，將地鐵路線延伸至機場。 【選項解析】(A) sample 樣本  (B) screen 螢幕  (C) project 專案  (D) favor 恩惠。交通重大建設計案為 transportation project。",
    "vocabIndex": 2
  },
  {
    "q": "The friendly food vendor gave every curious passerby a tasty free ______ of freshly baked apple pie.",
    "options": [
      "favor",
      "method",
      "sample",
      "tank"
    ],
    "answer": 2,
    "cn": "和藹可親的食品小販給每位好奇的過路人提供了一份剛出爐的美味免費蘋果派試吃品。 【選項解析】(A) favor 幫忙  (B) method 方法  (C) tank 水槽  (D) sample 試吃品/樣品。免費樣品為 free sample。",
    "vocabIndex": 3
  },
  {
    "q": "To protect your eyes from digital fatigue, remember to take a twenty-second break from your computer ______ every twenty minutes.",
    "options": [
      "steam",
      "screen",
      "tank",
      "pile"
    ],
    "answer": 1,
    "cn": "為了保護眼睛免受數位疲勞的影響，請記得每二十分鐘讓眼睛離開電腦螢幕休息二十秒。 【選項解析】(A) screen 螢幕  (B) steam 水蒸氣  (C) tank 儲水槽  (D) pile 一堆。離開電腦螢幕為 break from computer screen。",
    "vocabIndex": 4
  },
  {
    "q": "In cold winter mornings, you can see white ______ rising from hot bowls of beef noodle soup in street night markets.",
    "options": [
      "screen",
      "bundle",
      "pile",
      "steam"
    ],
    "answer": 3,
    "cn": "在寒冷的冬日早晨，你可以在夜市街頭看到一碗碗熱氣騰騰的牛肉麵冒出陣陣白蒸氣。 【選項解析】(A) screen 螢幕  (B) steam 蒸氣  (C) pile 一堆  (D) bundle 一捆。冒出白色熱氣蒸氣為 white steam rising。",
    "vocabIndex": 5
  },
  {
    "q": "Our residential community has a backup water ______ on the roof to guarantee continuous water supply during pipeline repairs.",
    "options": [
      "pile",
      "tank",
      "bundle",
      "steam"
    ],
    "answer": 1,
    "cn": "我們社區在屋頂上設有備用儲水槽，以確保管線維修期間仍能持續供水。 【選項解析】(A) pile 一堆  (B) bundle 一捆  (C) tank 儲水槽  (D) steam 水蒸氣。屋頂備用水塔為 backup water tank。",
    "vocabIndex": 6
  },
  {
    "q": "An untidy ______ of dirty dishes sat in the kitchen sink waiting for someone to wash them after dinner.",
    "options": [
      "pile",
      "bundle",
      "tank",
      "liquid"
    ],
    "answer": 0,
    "cn": "廚房水槽裡堆著一堆髒盤子，等待著有人在晚餐後把它們洗乾淨。 【選項解析】(A) pile 一堆  (B) bundle 一捆  (C) tank 水槽  (D) liquid 液體。一堆髒盤子為 pile of dirty dishes。",
    "vocabIndex": 7
  },
  {
    "q": "Grandfather carried a heavy ______ of dried firewood from the forest to keep the fireplace burning all night.",
    "options": [
      "pile",
      "steam",
      "liquid",
      "bundle"
    ],
    "answer": 3,
    "cn": "祖父從森林裡搬來了一大捆乾燥的木柴，讓壁爐整夜燃燒取暖。 【選項解析】(A) pile 一堆  (B) bundle 一捆  (C) liquid 液體  (D) steam 蒸氣。一捆乾燥木柴為 bundle of dried firewood。",
    "vocabIndex": 8
  },
  {
    "q": "Dangerous corrosive ______ must be stored in labeled glass bottles with secure plastic caps in the chemical lab.",
    "options": [
      "pile",
      "steam",
      "liquid",
      "tank"
    ],
    "answer": 2,
    "cn": "危險的腐蝕性液體在化學實驗室中必須存放在帶有安全塑膠蓋的標記玻璃瓶中。 【選項解析】(A) pile 一堆  (B) steam 蒸氣  (C) liquid 液體  (D) tank 水槽。腐蝕性液體為 corrosive liquid。",
    "vocabIndex": 9
  },
  {
    "q": "May I ask you for a quick ______: could you help me carry these heavy cardboard boxes up to the third floor?",
    "options": [
      "sample",
      "method",
      "project",
      "favor"
    ],
    "answer": 3,
    "cn": "我可以請你幫個小忙嗎：你能幫我把這些沉重的紙箱搬到三樓嗎？ 【選項解析】(A) favor 幫忙  (B) method 方法  (C) project 計畫  (D) sample 樣品。ask sb for a favor 表示請某人幫忙。",
    "vocabIndex": 0
  },
  {
    "q": "Following a regular exercise routine is an excellent ______ for improving cardiovascular fitness and mental alertness.",
    "options": [
      "favor",
      "method",
      "project",
      "screen"
    ],
    "answer": 1,
    "cn": "遵循規律的運動作息是增強心血管體能和保持精神敏銳的絕佳方法。 【選項解析】(A) favor 幫忙  (B) method 方法  (C) project 專題  (D) screen 螢幕。絕佳方法為 excellent method。",
    "vocabIndex": 1
  },
  {
    "q": "The school history ______ required students to interview their grandparents about daily life during the 1960s.",
    "options": [
      "sample",
      "screen",
      "project",
      "favor"
    ],
    "answer": 2,
    "cn": "學校的歷史專題作業要求學生訪談他們的祖父母，了解1960年代的日常生活。 【選項解析】(A) sample 樣本  (B) screen 螢幕  (C) project 專題  (D) favor 恩惠。歷史研究作業為 history project。",
    "vocabIndex": 2
  },
  {
    "q": "The doctor examined a tissue ______ under the high-powered microscope to ensure the cells were completely healthy.",
    "options": [
      "sample",
      "method",
      "tank",
      "favor"
    ],
    "answer": 0,
    "cn": "醫生在高倍顯微鏡下檢查了一份組織樣本，以確保細胞完全健康。 【選項解析】(A) favor 幫忙  (B) method 方法  (C) tank 水槽  (D) sample 組織樣本。醫學切片樣本為 tissue sample。",
    "vocabIndex": 3
  },
  {
    "q": "Please turn down the brightness on your television ______ before the living room lights are completely turned off.",
    "options": [
      "pile",
      "steam",
      "tank",
      "screen"
    ],
    "answer": 3,
    "cn": "在客廳燈光完全熄滅之前，請先把電視螢幕的亮度調低。 【選項解析】(A) screen 螢幕  (B) steam 蒸氣  (C) tank 水槽  (D) pile 一堆。電視螢幕為 television screen。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "favor": {
    "pos": "n. / v.",
    "en_def": "an act of kindness beyond what is due; to prefer or support",
    "cn_def": "恩惠；幫忙；偏袒",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an act of kindness beyond what is due; to prefer or support",
        "cn_def": "恩惠；幫忙；偏袒"
      }
    ]
  },
  "method": {
    "pos": "n.",
    "en_def": "a particular way of doing something, especially a systematic one",
    "cn_def": "方法；方式",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular way of doing something, especially a systematic one",
        "cn_def": "方法；方式"
      }
    ]
  },
  "project": {
    "pos": "n. / v.",
    "en_def": "a planned piece of work that has a specific purpose",
    "cn_def": "專案；計畫；研討題目",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a planned piece of work that has a specific purpose",
        "cn_def": "專案；計畫；研討題目"
      }
    ]
  },
  "sample": {
    "pos": "n. / v.",
    "en_def": "a small amount of a substance showing what the whole is like",
    "cn_def": "樣本；樣品；品嚐",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a small amount of a substance showing what the whole is like",
        "cn_def": "樣本；樣品；品嚐"
      }
    ]
  },
  "screen": {
    "pos": "n. / v.",
    "en_def": "the flat surface on a computer or television; to filter or test",
    "cn_def": "螢幕；紗窗；篩選",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the flat surface on a computer or television; to filter or test",
        "cn_def": "螢幕；紗窗；篩選"
      }
    ]
  },
  "steam": {
    "pos": "n. / v.",
    "en_def": "the hot gas that water turns into when boiled; to cook with steam",
    "cn_def": "水蒸氣；蒸煮",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the hot gas that water turns into when boiled; to cook with steam",
        "cn_def": "水蒸氣；蒸煮"
      }
    ]
  },
  "tank": {
    "pos": "n.",
    "en_def": "a large container for holding liquid or gas; an armored fighting vehicle",
    "cn_def": "儲水槽；油箱；坦克",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large container for holding liquid or gas; an armored fighting vehicle",
        "cn_def": "儲水槽；油箱；坦克"
      }
    ]
  },
  "pile": {
    "pos": "n. / v.",
    "en_def": "a mass of things heaped together on top of one another",
    "cn_def": "一堆；堆疊",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a mass of things heaped together on top of one another",
        "cn_def": "一堆；堆疊"
      }
    ]
  },
  "bundle": {
    "pos": "n. / v.",
    "en_def": "a number of things tied or wrapped together",
    "cn_def": "一捆；一束；包裹",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a number of things tied or wrapped together",
        "cn_def": "一捆；一束；包裹"
      }
    ]
  },
  "liquid": {
    "pos": "n. / adj.",
    "en_def": "a substance that flows freely, such as water or oil",
    "cn_def": "液體；液態的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a substance that flows freely, such as water or oil",
        "cn_def": "液體；液態的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
