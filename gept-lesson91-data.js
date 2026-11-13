// Lesson 91 Quiz Data: Everyday Attributes, Privacy, Frequency, Organization & Flavors
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 91 - Everyday Attributes, Privacy, Frequency, Organization & Flavors",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "necessary",
    "pos": "adj.",
    "cn_def": "必須的；必要的",
    "en_def": "needed in order to achieve a particular result",
    "sentence": "Having a valid passport is absolutely {{BLANK}} before traveling abroad, and you must check its expiration date.",
    "cn": "出國旅行前持有有效護照是絕對必要的，且你必須檢查其有效期限。"
  },
  {
    "word": "ordinary",
    "pos": "adj.",
    "cn_def": "普通的；平常的",
    "en_def": "normal or not special or different in any way",
    "sentence": "He looked like an {{BLANK}} office worker on the street, but he was actually a famous detective.",
    "cn": "他在街上看起來像個普通的上班族，但他實際上是一位著名的偵探。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；私密的",
    "en_def": "only for one person or group and not for public use",
    "sentence": "The manager entered his {{BLANK}} office to review confidential documents, and he asked not to be disturbed.",
    "cn": "經理進入他的私人辦公室審閱機密文件，並要求不要被打擾。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "罕見的；稀有的",
    "en_def": "not common or not seen or happening very often",
    "sentence": "Snowfall is very {{BLANK}} in this coastal city during winter, so all the children were thrilled to see it.",
    "cn": "這座沿海城市冬天下雪非常罕見，所以所有的孩子看到雪都興奮不已。"
  },
  {
    "word": "sudden",
    "pos": "adj.",
    "cn_def": "突然的；意外的",
    "en_def": "happening or done quickly and without warning",
    "sentence": "A {{BLANK}} thunderstorm hit the outdoor market in the afternoon, and shoppers rushed to find shelter.",
    "cn": "午後一場突然的雷陣雨襲擊了戶外市集，購物者紛紛衝去尋找遮蔽處。"
  },
  {
    "word": "tidy",
    "pos": "adj. / v.",
    "cn_def": "整潔的；整理",
    "en_def": "having everything in its right place; to make clean",
    "sentence": "The teacher asked students to keep their desks clean and {{BLANK}}, so the classroom looked very neat.",
    "cn": "老師要求學生保持課桌乾淨且整潔，因此教室看起來非常整齊。"
  },
  {
    "word": "usual",
    "pos": "adj.",
    "cn_def": "通常的；慣常的",
    "en_def": "normal or happening most of the time",
    "sentence": "Mr. Lin ordered his {{BLANK}} cup of black coffee without sugar, and he sat by the quiet window.",
    "cn": "林先生點了他慣常喝的不加糖黑咖啡，並坐在安靜的窗邊。"
  },
  {
    "word": "whole",
    "pos": "adj. / n.",
    "cn_def": "全部的；整個的",
    "en_def": "complete, including all parts of something",
    "sentence": "The young boy was so hungry that he ate the {{BLANK}} pizza alone, and he felt extremely full.",
    "cn": "那個小男孩太餓了，以致於獨自吃掉了整個披薩，他感到非常飽足。"
  },
  {
    "word": "sour",
    "pos": "adj.",
    "cn_def": "酸的；酸腐的",
    "en_def": "having a sharp, acid taste like lemon or vinegar",
    "sentence": "The fresh lemonade tasted a bit too {{BLANK}} for the little child, so her mother added some sweet honey.",
    "cn": "新鮮檸檬水對小小孩來說嚐起來有點太酸了，所以她的母親加了一些香甜的蜂蜜。"
  },
  {
    "word": "bitter",
    "pos": "adj.",
    "cn_def": "苦的；痛苦的",
    "en_def": "having a strong, sharp, harsh taste like black coffee or medicine",
    "sentence": "Traditional herbal medicine usually tastes very {{BLANK}}, but it is considered very effective for curing colds.",
    "cn": "傳統草藥嚐起來通常非常苦，但它被認為對治療感冒非常有效。"
  }
];

const MCQS = [
  {
    "q": "Wearing a heavy helmet is ______ for all scooter riders in Taiwan, or they will be fined by traffic police.",
    "options": [
      "rare",
      "sour",
      "necessary",
      "bitter"
    ],
    "answer": 2,
    "cn": "在台灣騎乘機車戴安全帽是絕對必要的，否則會被交警罰款。 【選項解析】(A) rare 稀有的  (B) necessary 必須的  (C) sour 酸的  (D) bitter 苦的。騎車戴安全帽為法定「必須」規範。",
    "vocabIndex": 0
  },
  {
    "q": "Mrs. Davis keeps all her personal diary notebooks locked inside a ______ drawer that only she can open.",
    "options": [
      "whole",
      "sudden",
      "sour",
      "private"
    ],
    "answer": 3,
    "cn": "戴維斯太太將個人日記本鎖在只有她能打開的私人抽屜裡。 【選項解析】(A) private 私人的  (B) sudden 突然的  (C) sour 酸的  (D) whole 全部的。日記屬於私人 personal 物件，放在 private 抽屜。",
    "vocabIndex": 2
  },
  {
    "q": "Because she forgot to put the carton of fresh milk back into the refrigerator, it quickly turned ______ overnight.",
    "options": [
      "sour",
      "necessary",
      "ordinary",
      "bitter"
    ],
    "answer": 0,
    "cn": "因為她忘了將鮮奶盒放回冰箱，鮮奶隔夜迅速變酸了。 【選項解析】(A) bitter 苦的  (B) necessary 必要的  (C) ordinary 普通的  (D) sour 酸的。牛奶變質會 turn sour（發酸）。",
    "vocabIndex": 8
  },
  {
    "q": "Taking a strong dose of cough syrup can leave a very ______ taste in your mouth, so drink some water immediately.",
    "options": [
      "ordinary",
      "bitter",
      "rare",
      "necessary"
    ],
    "answer": 1,
    "cn": "喝下一大劑止咳糖漿會在嘴裡留下非常苦的味道，因此請立刻喝些水。 【選項解析】(A) ordinary 普通的  (B) bitter 苦的  (C) rare 罕見的  (D) necessary 必要的。藥水味道通常是 bitter（苦澀的）。",
    "vocabIndex": 9
  },
  {
    "q": "It is extremely ______ to see giant sea turtles laying eggs on this public beach during daytime.",
    "options": [
      "private",
      "sour",
      "rare",
      "tidy"
    ],
    "answer": 2,
    "cn": "在白天看到巨大海龜在這座公共海灘上產卵是極為罕見的現象。 【選項解析】(A) private 私人的  (B) sour 酸的  (C) rare 罕見的  (D) tidy 整潔的。白天海龜產卵極為 rare（罕見）。",
    "vocabIndex": 3
  },
  {
    "q": "After spending three hours cleaning the living room, Emily felt proud to see how neat and ______ it looked.",
    "options": [
      "bitter",
      "tidy",
      "sudden",
      "necessary"
    ],
    "answer": 1,
    "cn": "花了三個小時打掃客廳後，艾蜜莉看著客廳如此乾淨整潔感到很自豪。 【選項解析】(A) tidy 整潔的  (B) bitter 苦的  (C) sudden 突然的  (D) necessary 必要的。neat and tidy 為常見搭配詞「乾淨整潔」。",
    "vocabIndex": 5
  },
  {
    "q": "The chef prepared our meal with extraordinary skill, although he used very ______ ingredients found in local markets.",
    "options": [
      "private",
      "sudden",
      "sour",
      "ordinary"
    ],
    "answer": 3,
    "cn": "那位主廚以非凡技巧料理餐點，雖然他使用的是在地市場常見的普通食材。 【選項解析】(A) private 私人的  (B) ordinary 普通的  (C) sour 酸的  (D) sudden 突然的。與 extraordinary 相對的是 ordinary（普通的）。",
    "vocabIndex": 1
  },
  {
    "q": "The family spent the ______ weekend camping by the river, and they enjoyed barbecue under the starry sky.",
    "options": [
      "whole",
      "sour",
      "rare",
      "bitter"
    ],
    "answer": 0,
    "cn": "這家人在河邊露營度過了整個週末，並在星空下享受了烤肉。 【選項解析】(A) bitter 苦的  (B) sour 酸的  (C) rare 稀有的  (D) whole 整個的。whole weekend 表「整個週末」。",
    "vocabIndex": 7
  },
  {
    "q": "Grandpa walked into the neighborhood diner at his ______ time, and the waiter greeted him warmly.",
    "options": [
      "necessary",
      "sour",
      "bitter",
      "usual"
    ],
    "answer": 3,
    "cn": "爺爺在慣常的時間走進社區小餐館，服務生熱情地向他打招呼。 【選項解析】(A) necessary 必要的  (B) usual 慣常的  (C) bitter 苦的  (D) sour 酸的。usual time 表「慣常的時間」。",
    "vocabIndex": 6
  },
  {
    "q": "The driver slammed on the brakes because of a ______ stop by the truck ahead of him on the road.",
    "options": [
      "tidy",
      "sudden",
      "sour",
      "rare"
    ],
    "answer": 1,
    "cn": "司機因為前方卡車在路上突然煞停而猛踩煞車。 【選項解析】(A) sudden 突然的  (B) tidy 整潔的  (C) sour 酸的  (D) rare 罕見的。sudden stop 表「緊急突然煞車停下」。",
    "vocabIndex": 4
  },
  {
    "q": "Regular hand washing is ______ to prevent the spread of infectious diseases during winter.",
    "options": [
      "bitter",
      "rare",
      "necessary",
      "sour"
    ],
    "answer": 2,
    "cn": "在冬季規律洗手是預防傳染病擴散所必需的手段。 【選項解析】(A) bitter 苦的  (B) rare 罕見的  (C) necessary 必要的  (D) sour 酸的。衛生習慣是 necessary（必需的）。",
    "vocabIndex": 0
  },
  {
    "q": "Celebrities often hire security guards because they value their ______ lives away from media cameras.",
    "options": [
      "private",
      "sour",
      "sudden",
      "tidy"
    ],
    "answer": 0,
    "cn": "名人經常聘請保鏢，因為他們重視遠離媒體鏡頭的私生活。 【選項解析】(A) sour 酸的  (B) private 私人的  (C) sudden 突然的  (D) tidy 整潔的。private life 指「私生活」。",
    "vocabIndex": 2
  },
  {
    "q": "Adding fresh lemon slices gives the iced black tea a pleasantly ______ flavor on hot summer afternoons.",
    "options": [
      "bitter",
      "ordinary",
      "necessary",
      "sour"
    ],
    "answer": 3,
    "cn": "在炎熱夏日午後加入新鮮檸檬片給冰紅茶帶來了怡人的微酸風味。 【選項解析】(A) sour 酸的  (B) ordinary 普通的  (C) necessary 必要的  (D) bitter 苦的。lemon 帶來的是 sour（酸味）。",
    "vocabIndex": 8
  },
  {
    "q": "Drinking dark roast coffee without any milk can taste quite ______, but many adults prefer that rich flavor.",
    "options": [
      "rare",
      "tidy",
      "bitter",
      "usual"
    ],
    "answer": 2,
    "cn": "喝不加牛奶的深焙黑咖啡嚐起來可能相當苦，但許多成年人偏愛那濃郁風味。 【選項解析】(A) rare 罕見的  (B) tidy 整潔的  (C) bitter 苦的  (D) usual 慣常的。黑咖啡無糖無奶味道偏 bitter（苦）。",
    "vocabIndex": 9
  },
  {
    "q": "Finding antique gold coins buried under the floorboards of an old house is a very ______ occurrence.",
    "options": [
      "necessary",
      "rare",
      "bitter",
      "sour"
    ],
    "answer": 1,
    "cn": "在老屋的地板下發現埋藏的古代金幣是非常罕見的事件。 【選項解析】(A) necessary 必要的  (B) sour 酸的  (C) bitter 苦的  (D) rare 罕見的。rare occurrence 表「罕見的事」。",
    "vocabIndex": 3
  },
  {
    "q": "Please make sure your bedroom is neat and ______ before your cousins arrive to visit this afternoon.",
    "options": [
      "tidy",
      "sudden",
      "bitter",
      "sour"
    ],
    "answer": 0,
    "cn": "在今天下午表兄弟姐妹來訪之前，請確保你的臥室收拾乾淨整潔。 【選項解析】(A) tidy 整潔的  (B) sudden 突然的  (C) bitter 苦的  (D) sour 酸的。tidy 指「乾淨整齊的」。",
    "vocabIndex": 5
  },
  {
    "q": "Although the painting depicted an ______ street scene, art critics praised its magnificent use of light and color.",
    "options": [
      "private",
      "ordinary",
      "sour",
      "necessary"
    ],
    "answer": 1,
    "cn": "雖然那幅畫描繪的是平凡普通的街景，藝術評論家卻讚賞其光影與色彩運用。 【選項解析】(A) private 私人的  (B) ordinary 普通的  (C) sour 酸的  (D) necessary 必要的。ordinary street scene「平凡的街景」。",
    "vocabIndex": 1
  },
  {
    "q": "The heavy earthquake caused shaking across the ______ island, and emergency services responded immediately.",
    "options": [
      "bitter",
      "rare",
      "sour",
      "whole"
    ],
    "answer": 3,
    "cn": "強烈地震導致整個島嶼劇烈搖晃，緊急救援部門立刻出動應變。 【選項解析】(A) bitter 苦的  (B) rare 罕見的  (C) whole 整個的  (D) sour 酸的。whole island 表「全島」。",
    "vocabIndex": 7
  },
  {
    "q": "As was her ______ routine, grandma woke up at sunrise and walked around the community park.",
    "options": [
      "usual",
      "bitter",
      "sour",
      "sudden"
    ],
    "answer": 0,
    "cn": "正如她一貫的生活作息，祖母在日出時醒來並在社區公園散步。 【選項解析】(A) usual 慣常的  (B) bitter 苦的  (C) sour 酸的  (D) sudden 突然的。usual routine「慣常作息」。",
    "vocabIndex": 6
  },
  {
    "q": "The passengers were terrified by a ______ drop in altitude when the airplane encountered severe atmospheric turbulence.",
    "options": [
      "tidy",
      "rare",
      "sudden",
      "sour"
    ],
    "answer": 2,
    "cn": "當飛機遭遇強烈大氣亂流時，突然急速下降讓乘客們嚇壞了。 【選項解析】(A) tidy 整潔的  (B) sudden 突然的  (C) rare 罕見的  (D) sour 酸的。sudden drop 表「突然急降」。",
    "vocabIndex": 4
  },
  {
    "q": "Having sufficient sleep every night is ______ for maintaining a strong and healthy immune system.",
    "options": [
      "bitter",
      "necessary",
      "rare",
      "sour"
    ],
    "answer": 1,
    "cn": "每晚維持充足睡眠對於保持強健健康的免疫系統是必要的。 【選項解析】(A) bitter 苦的  (B) sour 酸的  (C) rare 罕見的  (D) necessary 必要的。充足睡眠是 necessary（不可或缺的）。",
    "vocabIndex": 0
  },
  {
    "q": "You should not read other people's text messages without permission because they are strictly ______.",
    "options": [
      "sour",
      "tidy",
      "bitter",
      "private"
    ],
    "answer": 3,
    "cn": "未經許可你不該閱讀他人的手機簡訊，因為那些純屬個人私密內容。 【選項解析】(A) sour 酸的  (B) private 私人的  (C) bitter 苦的  (D) tidy 整潔的。簡訊是 strictly private（完全私密的）。",
    "vocabIndex": 2
  },
  {
    "q": "If fresh green apples are picked too early from the orchard, their crunchy flesh will taste unpleasantly ______.",
    "options": [
      "tidy",
      "ordinary",
      "sour",
      "sudden"
    ],
    "answer": 2,
    "cn": "若太早從果園採摘新鮮青蘋果，其清脆果肉嚐起來會令人不悅地酸澀。 【選項解析】(A) sour 酸的  (B) ordinary 普通的  (C) tidy 整潔的  (D) sudden 突然的。未熟蘋果嚐起來酸 sour。",
    "vocabIndex": 8
  },
  {
    "q": "The old veteran still harbored ______ memories about the brutal wartime hardships he endured in his youth.",
    "options": [
      "bitter",
      "rare",
      "tidy",
      "necessary"
    ],
    "answer": 0,
    "cn": "老兵對年輕時在戰火中經歷的殘酷艱辛歲月依然懷有辛酸記憶。 【選項解析】(A) rare 罕見的  (B) bitter 痛苦辛酸的  (C) tidy 整潔的  (D) necessary 必要的。bitter memories 表「痛苦辛酸的回憶」。",
    "vocabIndex": 9
  },
  {
    "q": "Seeing wild pandas roaming freely through bamboo forests in high mountains has become exceedingly ______.",
    "options": [
      "ordinary",
      "rare",
      "sour",
      "bitter"
    ],
    "answer": 1,
    "cn": "親眼目睹野生大熊貓在高山竹林中自由漫步已變得極其罕見。 【選項解析】(A) rare 稀有的  (B) ordinary 普通的  (C) sour 酸的  (D) bitter 苦的。野生大熊貓數量極少，目睹極其 rare。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "necessary": {
    "pos": "adj.",
    "en_def": "needed in order to achieve a particular result",
    "cn_def": "必須的；必要的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "needed in order to achieve a particular result",
        "cn_def": "必須的；必要的"
      }
    ]
  },
  "ordinary": {
    "pos": "adj.",
    "en_def": "normal or not special or different in any way",
    "cn_def": "普通的；平常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "normal or not special or different in any way",
        "cn_def": "普通的；平常的"
      }
    ]
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or group and not for public use",
    "cn_def": "私人的；私密的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "only for one person or group and not for public use",
        "cn_def": "私人的；私密的"
      }
    ]
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not common or not seen or happening very often",
    "cn_def": "罕見的；稀有的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not common or not seen or happening very often",
        "cn_def": "罕見的；稀有的"
      }
    ]
  },
  "sudden": {
    "pos": "adj.",
    "en_def": "happening or done quickly and without warning",
    "cn_def": "突然的；意外的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or done quickly and without warning",
        "cn_def": "突然的；意外的"
      }
    ]
  },
  "tidy": {
    "pos": "adj. / v.",
    "en_def": "having everything in its right place; to make clean",
    "cn_def": "整潔的；整理",
    "combined": [
      {
        "pos": "adj. / v.",
        "en_def": "having everything in its right place; to make clean",
        "cn_def": "整潔的；整理"
      }
    ]
  },
  "usual": {
    "pos": "adj.",
    "en_def": "normal or happening most of the time",
    "cn_def": "通常的；慣常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "normal or happening most of the time",
        "cn_def": "通常的；慣常的"
      }
    ]
  },
  "whole": {
    "pos": "adj. / n.",
    "en_def": "complete, including all parts of something",
    "cn_def": "全部的；整個的",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "complete, including all parts of something",
        "cn_def": "全部的；整個的"
      }
    ]
  },
  "sour": {
    "pos": "adj.",
    "en_def": "having a sharp, acid taste like lemon or vinegar",
    "cn_def": "酸的；酸腐的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a sharp, acid taste like lemon or vinegar",
        "cn_def": "酸的；酸腐的"
      }
    ]
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong, sharp, harsh taste like black coffee or medicine",
    "cn_def": "苦的；痛苦的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a strong, sharp, harsh taste like black coffee or medicine",
        "cn_def": "苦的；痛苦的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
