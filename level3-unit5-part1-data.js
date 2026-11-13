// Part 1 Quiz Data: advertise – berry
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 5-1 - advertise – berry",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "advertise",
    "pos": "v.",
    "cn_def": "打廣告；宣傳；登廣告",
    "en_def": "to describe or draw attention to a product or service in public media to promote sales",
    "sentence": "To reach more young customers, the electronic company decided to {{BLANK}} its new smartphone in popular magazines.",
    "cn": "為了接觸更多年輕客戶，這家電子公司決定在暢銷雜誌上為其新款智慧型手機打廣告宣傳。"
  },
  {
    "word": "advertiser",
    "pos": "n.",
    "cn_def": "廣告商；廣告主（可數）",
    "en_def": "a person or company that pays for advertisements to promote products",
    "sentence": "Television networks often adjust their broadcasting schedules to satisfy the demands of commercial {{BLANK}}.",
    "cn": "電視聯播網經常調整其播出節目表，以滿足商業廣告主的要求。"
  },
  {
    "word": "advertising",
    "pos": "n.",
    "cn_def": "廣告業；廣告宣傳活動（不可數）",
    "en_def": "the activity or profession of producing advertisements for products (uncountable)",
    "sentence": "The cosmetics brand launched an extensive global {{BLANK}} campaign featuring several top Hollywood fashion models.",
    "cn": "該化妝品品牌發起了一場大型全球廣告宣傳活動，並邀請了幾位好萊塢頂尖時尚名模代言。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告；啟事（可數，簡稱 ad）",
    "en_def": "a public notice or announcement promoting a product, event, or job vacancy",
    "sentence": "While reading the morning newspaper, Patrick saw an {{BLANK}} for an interesting marketing job at an international trading company.",
    "cn": "在閱讀早報時，派翠克看見了一則跨國貿易公司有趣行銷職缺的徵才廣告。"
  },
  {
    "word": "commercial",
    "pos": "n.",
    "cn_def": "（電視或廣播）商業廣告（可數）",
    "en_def": "a paid television or radio advertisement",
    "sentence": "Viewers often walk to the kitchen to grab a snack during the long {{BLANK}} break of the Super Bowl broadcast.",
    "cn": "觀眾通常在超級盃轉播漫長的廣告時間走到廚房拿點心吃。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起；買得起；抽得出（時間）",
    "en_def": "to have enough money, time, or resources to be able to buy or do something",
    "sentence": "After saving money diligently for five years, the young couple could finally {{BLANK}} to buy their first apartment in the city.",
    "cn": "在勤奮存錢五年之後，這對年輕夫婦終於能夠負擔得起在市區買下他們的第一套公寓。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；價格合理的",
    "en_def": "reasonably priced and inexpensive enough for ordinary people to buy",
    "sentence": "The city government plans to build hundreds of {{BLANK}} housing units for low-income families and university graduates.",
    "cn": "市政府計畫為低收入家庭與大學畢業生興建數百戶負擔得起的／經濟實惠的社會住宅。"
  },
  {
    "word": "amazed",
    "pos": "v.",
    "cn_def": "使大為驚奇；使驚嘆（動詞）",
    "en_def": "to surprise someone greatly; to fill with wonder",
    "sentence": "The clever magician {{BLANK}} the cheering crowd by making a massive white horse disappear right before their eyes.",
    "cn": "那個聰明的魔術師在觀眾眼前讓一匹巨大的白馬憑空消失，使所有人大為驚嘆。"
  },
  {
    "word": "amazed",
    "pos": "adj.",
    "cn_def": "感到大為驚奇的；驚嘆的",
    "en_def": "feeling or showing great surprise or wonder",
    "sentence": "Foreign tourists were utterly {{BLANK}} at the breathtaking natural beauty of the rocky sea cliffs along the coast.",
    "cn": "外國遊客對沿海岩石海崖令人屏息的自然美景感到徹底驚嘆不已。"
  },
  {
    "word": "amazing",
    "pos": "adj.",
    "cn_def": "令人驚奇的；令人讚嘆的；極好的",
    "en_def": "causing great surprise or wonder; astonishingly good",
    "sentence": "The high school basketball team did an {{BLANK}} job by winning ten consecutive matches against tough rivals.",
    "cn": "這支高中籃球隊表現得極好，連續擊敗強勁對手贏得了十場比賽。"
  },
  {
    "word": "amazement",
    "pos": "n.",
    "cn_def": "驚奇；驚詫；讚嘆（不可數名詞）",
    "en_def": "a feeling of great surprise or wonder (uncountable)",
    "sentence": "Oliver looked up at the towering Eiffel Tower in Paris with a look of pure {{BLANK}} on his face.",
    "cn": "奧利佛臉上帶著純粹驚奇讚嘆的神情仰望著巴黎高聳的艾菲爾鐵塔。"
  },
  {
    "word": "ambassador",
    "pos": "n.",
    "cn_def": "大使；使節；形象代表（可數）",
    "en_def": "an accredited diplomat sent by a country as its official representative",
    "sentence": "The veteran diplomat was appointed by the president to serve as the new {{BLANK}} to France.",
    "cn": "這位資深外交官被總統任命為派駐法國的新任大使。"
  },
  {
    "word": "embassy",
    "pos": "n.",
    "cn_def": "大使館（可數名詞）",
    "en_def": "the official residence or offices of an ambassador in a foreign country",
    "sentence": "When Jason accidentally lost his passport while backpacking in Tokyo, he immediately rushed to the national {{BLANK}} for assistance.",
    "cn": "當傑森在東京背包客旅行不慎弄丟護照時，他立刻趕往本國大使館尋求協助。"
  },
  {
    "word": "awoke",
    "pos": "v.",
    "cn_def": "醒來；喚起；使意識到（動詞）",
    "en_def": "to stop sleeping or cause someone to stop sleeping",
    "sentence": "Charlie suddenly {{BLANK}} to a deafening thunderclap that rattled the bedroom windows during the night.",
    "cn": "查理在夜間被震得臥室窗戶發響的震耳雷聲猛然吵醒。"
  },
  {
    "word": "awake",
    "pos": "adj.",
    "cn_def": "清醒的；沒睡著的",
    "en_def": "not asleep; conscious and alert",
    "sentence": "Drinking a strong cup of black coffee before studying helped the tired student stay {{BLANK}} late into the night.",
    "cn": "溫書前喝一杯濃黑咖啡幫助疲憊的學生在深夜保持清醒。"
  },
  {
    "word": "awakened",
    "pos": "v.",
    "cn_def": "喚醒；激發；使覺醒（動詞）",
    "en_def": "to wake someone up; to arouse feelings or memories",
    "sentence": "Walking through the quiet old neighborhood after twenty years {{BLANK}} fond childhood memories in Grandfather's heart.",
    "cn": "相隔二十年後走過安靜的老社區，在祖父心中喚醒了美好的童年回憶。"
  },
  {
    "word": "aware",
    "pos": "adj.",
    "cn_def": "意識到的；知道的；注意到的",
    "en_def": "having knowledge or perception of a situation or fact",
    "sentence": "I was not {{BLANK}} of the strict new parking regulations downtown until a traffic police officer warned me.",
    "cn": "直到一名交警警告我，我才意識到／知道市中心嚴格的停車新規定。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；體認；認識（不可數名詞）",
    "en_def": "knowledge or perception of a situation, issue, or fact (uncountable)",
    "sentence": "The charity organization organized an annual marathon in the park to raise public {{BLANK}} about ocean plastic pollution.",
    "cn": "該慈善組織在公園舉辦了年度馬拉松，以提升大眾對海洋塑膠污染的公眾意識。"
  },
  {
    "word": "beetle",
    "pos": "n.",
    "cn_def": "甲蟲（可數名詞）",
    "en_def": "an insect of an order distinguished by forewings modified into hard wing cases",
    "sentence": "While exploring the damp forest floor, the biology students discovered a rare species of horned {{BLANK}} under a fallen log.",
    "cn": "在探索潮濕的森林地面時，生物系的學生在倒木下發現了一種罕見的有角甲蟲品種。"
  },
  {
    "word": "berries",
    "pos": "n.",
    "cn_def": "漿果；莓果（可數名詞）",
    "en_def": "a small round juicy fruit without a stone or pit",
    "sentence": "Every summer, our family visits a local farm in the countryside to pick sweet and juicy wild {{BLANK}} together.",
    "cn": "每年夏天，我們全家都會去鄉村的當地農場一起採摘香甜多汁的野生莓果。"
  }
];

const MCQS = [
  {
    "q": "The electronics company hired a famous singer to ______ its new wireless headphones on TV.",
    "options": [
      "afford",
      "awake",
      "amaze",
      "advertise"
    ],
    "answer": 3,
    "cn": "這家電信公司聘請了一位著名歌手在電視上為其新款無線耳機打廣告宣傳。",
    "vocabIndex": 0
  },
  {
    "q": "Because flights to Europe were very expensive, our family could not ______ to travel abroad this summer.",
    "options": [
      "amaze",
      "advertise",
      "afford",
      "awaken"
    ],
    "answer": 2,
    "cn": "因為去歐洲的機票非常昂貴，我們全家今年夏天負擔不起出國旅行。",
    "vocabIndex": 5
  },
  {
    "q": "The clever street magician used shiny silver rings to ______ the large crowd of children.",
    "options": [
      "amaze",
      "awake",
      "afford",
      "advertise"
    ],
    "answer": 0,
    "cn": "那位聰明的街頭魔術師使用發亮的銀戒讓一大群孩子大為驚嘆。",
    "vocabIndex": 7
  },
  {
    "q": "A loud clap of thunder rattled the bedroom window and caused the baby to ______ suddenly.",
    "options": [
      "afford",
      "awake",
      "amaze",
      "advertise"
    ],
    "answer": 1,
    "cn": "一聲巨響的雷聲震得臥室窗戶發響，使嬰兒突然驚醒。",
    "vocabIndex": 13
  },
  {
    "q": "Visiting the ancient stone temple after twenty years ______ warm childhood memories in grandpa's heart.",
    "options": [
      "awakened",
      "advertised",
      "afforded",
      "amazed"
    ],
    "answer": 0,
    "cn": "相隔二十年後參觀這座古老的石頭寺廟，在祖父心中喚醒了溫暖的童年回憶。",
    "vocabIndex": 15
  },
  {
    "q": "While reading the morning newspaper, Dad saw an ______ for a used family car in great condition.",
    "options": [
      "ambassador",
      "advertisement",
      "embassy",
      "beetle"
    ],
    "answer": 1,
    "cn": "在閱讀早報時，爸爸看到了一則車況極佳的二手家庭轎車廣告。",
    "vocabIndex": 3
  },
  {
    "q": "The radio host played a funny ______ for a local pizza restaurant between two pop songs.",
    "options": [
      "berry",
      "ambassador",
      "beetle",
      "commercial"
    ],
    "answer": 3,
    "cn": "廣播主持人在兩首流行歌曲之間播放了一則當地披薩餐廳的有趣商業廣告。",
    "vocabIndex": 4
  },
  {
    "q": "Many online ______ pay popular video bloggers a lot of money to show their brand names.",
    "options": [
      "embassies",
      "beetles",
      "advertisers",
      "berries"
    ],
    "answer": 2,
    "cn": "許多網路廣告商付給知名影音部落客很多錢，以展示其品牌名稱。",
    "vocabIndex": 1
  },
  {
    "q": "The senior diplomat was chosen by the government to serve as our country's new ______ to Japan.",
    "options": [
      "ambassador",
      "commercial",
      "advertisement",
      "beetle"
    ],
    "answer": 0,
    "cn": "這位資深外交官被政府選定為派駐日本的新任大使。",
    "vocabIndex": 11
  },
  {
    "q": "When Lisa lost her travel wallet in Paris, she went straight to her national ______ for help.",
    "options": [
      "berry",
      "beetle",
      "embassy",
      "commercial"
    ],
    "answer": 2,
    "cn": "當麗莎在巴黎遺失旅行皮夾時，她直接前往本國大使館尋求協助。",
    "vocabIndex": 12
  },
  {
    "q": "My little brother caught a shiny green ______ on a tree trunk and kept it in a plastic box.",
    "options": [
      "embassy",
      "commercial",
      "ambassador",
      "beetle"
    ],
    "answer": 3,
    "cn": "我弟弟在樹幹上抓到了一隻發亮的綠色甲蟲，並把它養在塑膠盒裡。",
    "vocabIndex": 18
  },
  {
    "q": "Grandma picked fresh red ______ in the garden and used them to bake a sweet dessert pie.",
    "options": [
      "commercials",
      "berries",
      "embassies",
      "ambassadors"
    ],
    "answer": 1,
    "cn": "祖母在花園裡採摘了新鮮的紅莓果，並用它們烤了一個甜點派。",
    "vocabIndex": 19
  },
  {
    "q": "The tourists looked at the giant stone pyramid with open eyes and pure ______.",
    "options": [
      "amazement",
      "berry",
      "embassy",
      "beetle"
    ],
    "answer": 0,
    "cn": "遊客們張大雙眼、滿懷純粹的驚奇與讚嘆看著巨大的石頭金字塔。",
    "vocabIndex": 10
  },
  {
    "q": "The school held an environmental week to increase students' ______ of plastic waste.",
    "options": [
      "embassy",
      "beetle",
      "commercial",
      "awareness"
    ],
    "answer": 3,
    "cn": "學校舉辦了環境週，以提高學生對塑膠垃圾的意識與認識。",
    "vocabIndex": 17
  },
  {
    "q": "This shop sells comfortable clothes at an ______ price that students can easily pay.",
    "options": [
      "awake",
      "aware",
      "affordable",
      "amazed"
    ],
    "answer": 2,
    "cn": "這家商店以學生能輕鬆支付的實惠負擔得起的價格販售舒適的衣服。",
    "vocabIndex": 6
  },
  {
    "q": "The audience was completely ______ when the young girl played the violin like a master.",
    "options": [
      "affordable",
      "amazed",
      "awake",
      "aware"
    ],
    "answer": 1,
    "cn": "當小女孩像大師般拉奏小提琴時，全場觀眾大為驚嘆佩服。",
    "vocabIndex": 8
  },
  {
    "q": "From the high mountain cabin, the hikers watched an ______ sunset painted across the sky.",
    "options": [
      "amazing",
      "aware",
      "awake",
      "affordable"
    ],
    "answer": 0,
    "cn": "從小山屋出發，健行者們欣賞著染遍天際令人讚嘆極美好的夕陽。",
    "vocabIndex": 9
  },
  {
    "q": "Drinking cold water and washing his face helped Mark stay ______ during the late lecture.",
    "options": [
      "affordable",
      "awake",
      "amazed",
      "amazing"
    ],
    "answer": 1,
    "cn": "喝冰水和洗臉幫助馬克在深夜的講座中保持清醒。",
    "vocabIndex": 13
  },
  {
    "q": "Are you ______ that the school gate closes twenty minutes earlier on Friday afternoons?",
    "options": [
      "affordable",
      "amazed",
      "aware",
      "amazing"
    ],
    "answer": 2,
    "cn": "你知道／意識到學校大門在週五下午會提早二十分鐘關閉嗎？",
    "vocabIndex": 16
  },
  {
    "q": "More young people today are environmentally ______ and carry their own drinking bottles.",
    "options": [
      "affordable",
      "amazed",
      "awake",
      "aware"
    ],
    "answer": 3,
    "cn": "現今有更多年輕人具備環保意識，並會自帶水壺。",
    "vocabIndex": 16
  },
  {
    "q": "The sports shoes company launched an exciting new ______ on television and social media.",
    "options": [
      "brand ambassador",
      "advertising campaign",
      "rhinocerous beetle",
      "berry pie"
    ],
    "answer": 1,
    "cn": "這家運動鞋公司在電視和社群媒體上發起了一場令人振奮的新廣告宣傳活動。",
    "vocabIndex": 2
  },
  {
    "q": "The famous basketball star was chosen as the global ______ for the sportswear brand.",
    "options": [
      "brand ambassador",
      "advertising campaign",
      "commercial break",
      "berry pie"
    ],
    "answer": 0,
    "cn": "這位著名的籃球巨星獲選為該運動服裝品牌的全球品牌形象代言人。",
    "vocabIndex": 11
  },
  {
    "q": "We ran into the kitchen to grab some potato chips during the three-minute ______.",
    "options": [
      "brand ambassador",
      "advertising campaign",
      "stag beetle",
      "commercial break"
    ],
    "answer": 3,
    "cn": "我們在三分鐘的廣告時間跑進廚房拿了些洋芋片。",
    "vocabIndex": 4
  },
  {
    "q": "The little boy looked carefully at the large black horns of the ______ on the tree branch.",
    "options": [
      "advertising campaign",
      "commercial break",
      "stag beetle",
      "brand ambassador"
    ],
    "answer": 2,
    "cn": "小男孩仔細觀察著樹枝上那隻鍬形甲蟲巨大的黑色角狀大顎。",
    "vocabIndex": 18
  },
  {
    "q": "After hiking up the sunny hill, the children sat down to enjoy a fresh slice of ______.",
    "options": [
      "berry pie",
      "advertising campaign",
      "brand ambassador",
      "commercial break"
    ],
    "answer": 0,
    "cn": "健行登上陽光明媚的山丘後，孩子們坐下來享用了一塊新鮮的莓果派。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "advertise": {
    "pos": "v.",
    "en_def": "to describe or draw attention to a product or service in public media to promote sales",
    "cn_def": "打廣告；宣傳；登廣告",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to describe or draw attention to a product or service in public media to promote sales",
        "cn_def": "打廣告；宣傳；登廣告"
      }
    ]
  },
  "advertiser": {
    "pos": "n.",
    "en_def": "a person or company that pays for advertisements to promote products",
    "cn_def": "廣告商；廣告主（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or company that pays for advertisements to promote products",
        "cn_def": "廣告商；廣告主（可數）"
      }
    ]
  },
  "advertising": {
    "pos": "n.",
    "en_def": "the activity or profession of producing advertisements for products (uncountable)",
    "cn_def": "廣告業；廣告宣傳活動（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the activity or profession of producing advertisements for products (uncountable)",
        "cn_def": "廣告業；廣告宣傳活動（不可數）"
      }
    ]
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a public notice or announcement promoting a product, event, or job vacancy",
    "cn_def": "廣告；啟事（可數，簡稱 ad）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public notice or announcement promoting a product, event, or job vacancy",
        "cn_def": "廣告；啟事（可數，簡稱 ad）"
      }
    ]
  },
  "commercial": {
    "pos": "n.",
    "en_def": "a paid television or radio advertisement",
    "cn_def": "（電視或廣播）商業廣告（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a paid television or radio advertisement",
        "cn_def": "（電視或廣播）商業廣告（可數）"
      }
    ]
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money, time, or resources to be able to buy or do something",
    "cn_def": "負擔得起；買得起；抽得出（時間）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have enough money, time, or resources to be able to buy or do something",
        "cn_def": "負擔得起；買得起；抽得出（時間）"
      }
    ]
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "reasonably priced and inexpensive enough for ordinary people to buy",
    "cn_def": "負擔得起的；價格合理的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "reasonably priced and inexpensive enough for ordinary people to buy",
        "cn_def": "負擔得起的；價格合理的"
      }
    ]
  },
  "amaze": {
    "pos": "v.",
    "en_def": "to surprise someone greatly; to fill with wonder",
    "cn_def": "使大為驚奇；使驚嘆（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to surprise someone greatly; to fill with wonder",
        "cn_def": "使大為驚奇；使驚嘆（動詞）"
      }
    ]
  },
  "amazed": {
    "pos": "v.",
    "en_def": "to surprise someone greatly; to fill with wonder",
    "cn_def": "使大為驚奇；使驚嘆（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to surprise someone greatly; to fill with wonder",
        "cn_def": "使大為驚奇；使驚嘆（動詞）"
      },
      {
        "pos": "adj.",
        "en_def": "feeling or showing great surprise or wonder",
        "cn_def": "感到大為驚奇的；驚嘆的"
      }
    ]
  },
  "amazing": {
    "pos": "adj.",
    "en_def": "causing great surprise or wonder; astonishingly good",
    "cn_def": "令人驚奇的；令人讚嘆的；極好的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing great surprise or wonder; astonishingly good",
        "cn_def": "令人驚奇的；令人讚嘆的；極好的"
      }
    ]
  },
  "amazement": {
    "pos": "n.",
    "en_def": "a feeling of great surprise or wonder (uncountable)",
    "cn_def": "驚奇；驚詫；讚嘆（不可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of great surprise or wonder (uncountable)",
        "cn_def": "驚奇；驚詫；讚嘆（不可數名詞）"
      }
    ]
  },
  "ambassador": {
    "pos": "n.",
    "en_def": "an accredited diplomat sent by a country as its official representative",
    "cn_def": "大使；使節；形象代表（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an accredited diplomat sent by a country as its official representative",
        "cn_def": "大使；使節；形象代表（可數）"
      }
    ]
  },
  "embassy": {
    "pos": "n.",
    "en_def": "the official residence or offices of an ambassador in a foreign country",
    "cn_def": "大使館（可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the official residence or offices of an ambassador in a foreign country",
        "cn_def": "大使館（可數名詞）"
      }
    ]
  },
  "awoke": {
    "pos": "v.",
    "en_def": "to stop sleeping or cause someone to stop sleeping",
    "cn_def": "醒來；喚起；使意識到（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop sleeping or cause someone to stop sleeping",
        "cn_def": "醒來；喚起；使意識到（動詞）"
      }
    ]
  },
  "awake": {
    "pos": "v.",
    "en_def": "to stop sleeping or cause someone to stop sleeping",
    "cn_def": "醒來；喚起；使意識到（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stop sleeping or cause someone to stop sleeping",
        "cn_def": "醒來；喚起；使意識到（動詞）"
      },
      {
        "pos": "adj.",
        "en_def": "not asleep; conscious and alert",
        "cn_def": "清醒的；沒睡著的"
      }
    ]
  },
  "awakened": {
    "pos": "v.",
    "en_def": "to wake someone up; to arouse feelings or memories",
    "cn_def": "喚醒；激發；使覺醒（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to wake someone up; to arouse feelings or memories",
        "cn_def": "喚醒；激發；使覺醒（動詞）"
      }
    ]
  },
  "awaken": {
    "pos": "v.",
    "en_def": "to wake someone up; to arouse feelings or memories",
    "cn_def": "喚醒；激發；使覺醒（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to wake someone up; to arouse feelings or memories",
        "cn_def": "喚醒；激發；使覺醒（動詞）"
      }
    ]
  },
  "aware": {
    "pos": "adj.",
    "en_def": "having knowledge or perception of a situation or fact",
    "cn_def": "意識到的；知道的；注意到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having knowledge or perception of a situation or fact",
        "cn_def": "意識到的；知道的；注意到的"
      }
    ]
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowledge or perception of a situation, issue, or fact (uncountable)",
    "cn_def": "意識；體認；認識（不可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "knowledge or perception of a situation, issue, or fact (uncountable)",
        "cn_def": "意識；體認；認識（不可數名詞）"
      }
    ]
  },
  "beetle": {
    "pos": "n.",
    "en_def": "an insect of an order distinguished by forewings modified into hard wing cases",
    "cn_def": "甲蟲（可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an insect of an order distinguished by forewings modified into hard wing cases",
        "cn_def": "甲蟲（可數名詞）"
      }
    ]
  },
  "berry": {
    "pos": "n.",
    "en_def": "a small round juicy fruit without a stone or pit",
    "cn_def": "漿果；莓果（可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small round juicy fruit without a stone or pit",
        "cn_def": "漿果；莓果（可數名詞）"
      }
    ]
  },
  "berries": {
    "pos": "n.",
    "en_def": "a small round juicy fruit without a stone or pit",
    "cn_def": "漿果；莓果（可數名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small round juicy fruit without a stone or pit",
        "cn_def": "漿果；莓果（可數名詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
