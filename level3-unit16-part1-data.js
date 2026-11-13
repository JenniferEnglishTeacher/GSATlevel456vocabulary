// Part 1 Quiz Data: bamboo – dim
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 16-1 - bamboo – dim",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bamboo",
    "pos": "n.",
    "cn_def": "竹子；竹竿（可數/不可數）",
    "en_def": "a tall tropical grass with hard, hollow stems used for building, furniture, or food",
    "sentence": "Pandas in the wild depend almost entirely on eating tender green {{BLANK}} leaves to survive in the mountains.",
    "cn": "野外的熊貓幾乎完全依靠食用鮮嫩的綠色竹子葉在高山中生存。"
  },
  {
    "word": "bamboo shoot",
    "pos": "n.phr.",
    "cn_def": "竹筍（可數）",
    "en_def": "the edible young sprout of the bamboo plant, used as a vegetable in cooking",
    "sentence": "During the early spring rainy season, local farmers hike into the hills to dig up crispy {{BLANK}}.",
    "cn": "在初春多雨的季節，當地農民徒步走進山丘挖掘清脆的竹筍。"
  },
  {
    "word": "client",
    "pos": "n.",
    "cn_def": "委託人；客戶；訟務當事人（可數）",
    "en_def": "a person or organization using the professional services of a lawyer, accountant, or company",
    "sentence": "The experienced defense attorney met privately with her {{BLANK}} to discuss their defense strategy before the trial.",
    "cn": "經驗豐富的辯護律師在審判前與她的委託人／客戶私下會面以討論辯護策略。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客；買家（可數）",
    "en_def": "a person who buys goods or services from a shop, store, or business",
    "sentence": "Providing friendly and prompt {{BLANK}} service is the most effective way to retain shoppers in retail stores.",
    "cn": "提供親切且迅速的顧客服務是在零售店留住消費者的最有效方法。"
  },
  {
    "word": "consumer",
    "pos": "n.",
    "cn_def": "消費者（可數）",
    "en_def": "a person who purchases goods and services for personal use",
    "sentence": "Government agencies established strict regulations to protect {{BLANK}} rights from misleading advertising campaigns.",
    "cn": "政府機構制定了嚴格的法規，以保護消費者權益不受誤導性廣告宣傳的侵害。"
  },
  {
    "word": "cone",
    "pos": "n.",
    "cn_def": "圓錐體；甜筒；三角錐（可數）",
    "en_def": "a solid or hollow object that tapers from a circular base to a point; a wafer container for ice cream",
    "sentence": "On a scorching summer afternoon, the little girl happily ate two scoops of chocolate gelato in a waffle {{BLANK}}.",
    "cn": "在炎熱的夏日午後，小女孩開心地吃著裝在威化甜筒裡的兩球巧克力義式冰淇淋。"
  },
  {
    "word": "constant",
    "pos": "adj.",
    "cn_def": "持續不斷的；始終如一的；恆定的",
    "en_def": "occurring continuously over a period of time; remaining unchanging",
    "sentence": "Residents living right next to the busy highway often complain about the {{BLANK}} noise of speeding trucks.",
    "cn": "住在繁忙公路旁的居民經常抱怨疾駛卡車所帶來的持續不斷的噪音。"
  },
  {
    "word": "constantly",
    "pos": "adv.",
    "cn_def": "不斷地；時常地；時時刻刻",
    "en_def": "continuously over a period of time; always or repeatedly",
    "sentence": "In our fast-paced modern world, digital information and smartphone software apps are {{BLANK}} changing and updating.",
    "cn": "在我們快節奏的現代世界中，數位資訊與智慧型手機應用程式不斷地改變和更新。"
  },
  {
    "word": "controller",
    "pos": "n.",
    "cn_def": "控制器；管制員；主計官（可數）",
    "en_def": "a person who directs or regulates something; a handheld device used to operate games or machines",
    "sentence": "The teenage boy grabbed his wireless game {{BLANK}} and spent two hours playing an exciting racing game with his friend.",
    "cn": "那位青少年男孩拿起他的無線遊戲控制器／手把，花兩個小時和朋友玩了一場刺激的賽車遊戲。"
  },
  {
    "word": "crawl",
    "pos": "v.",
    "cn_def": "爬行；緩慢移動（動詞）",
    "en_def": "to move forward on hands and knees or by dragging the body close to the ground",
    "sentence": "The ten-month-old infant learned how to {{BLANK}} across the carpeted living room floor to reach her favorite doll.",
    "cn": "十個月大的嬰兒學會了如何在鋪有地毯的客廳地板上爬行，以搆到她最喜歡的洋娃娃。"
  },
  {
    "word": "crawling",
    "pos": "v.phr.",
    "cn_def": "擠滿；到處都是（動詞片語）",
    "en_def": "to be filled or overrun with an unpleasantly large number of people or things",
    "sentence": "On sunny holiday weekends, the picturesque coastal town is completely {{BLANK}} with curious foreign tourists.",
    "cn": "在陽光明媚的假日週末，這座風景如畫的濱海小鎮完全擠滿了好奇的外國遊客。"
  },
  {
    "word": "dairy",
    "pos": "n.",
    "cn_def": "乳品廠；酪農場（可數）",
    "en_def": "a building or company where milk and cream are stored or made into butter and cheese",
    "sentence": "The school children took an educational bus field trip to visit a famous local {{BLANK}} outside the countryside.",
    "cn": "學童們搭乘校車進行戶外教學，參觀鄉村外著名的當地乳品廠。"
  },
  {
    "word": "dairy",
    "pos": "adj.",
    "cn_def": "乳製品的；酪農業的",
    "en_def": "containing or made from milk, or involving milk production",
    "sentence": "People who suffer from severe lactose intolerance must strictly avoid consuming butter, cheese, and other {{BLANK}} products.",
    "cn": "患有嚴重乳糖不耐症的人必須嚴格避免食用奶油、起司和其他乳製品。"
  },
  {
    "word": "dim",
    "pos": "adj.",
    "cn_def": "昏暗的；模糊的；前景黯淡的",
    "en_def": "not shining brightly or clearly; dark or indistinct",
    "sentence": "You should not strain your eyes by attempting to read small text in a {{BLANK}} room without adequate lighting.",
    "cn": "你不應該在缺乏充足光線的昏暗房間裡試圖閱讀細小文字而傷眼。"
  },
  {
    "word": "dimmed",
    "pos": "v.",
    "cn_def": "使變暗；漸漸變暗；使模糊（動詞）",
    "en_def": "to make or become less bright, clear, or distinct",
    "sentence": "The thoughtful cinema staff slowly {{BLANK}} the ceiling lights just before the feature movie began playing on the big screen.",
    "cn": "正片在銀幕上播放前，貼心的電影院工作人員緩緩調暗了天花板上的燈光。"
  }
];

const MCQS = [
  {
    "q": "Pandas in the mountain forest love to chew on sweet, fresh ______ all day long.",
    "options": [
      "clients",
      "cones",
      "bamboos",
      "controllers"
    ],
    "answer": 2,
    "cn": "高山森林裡的熊貓整天都喜歡咀嚼清甜新鮮的竹子。",
    "vocabIndex": 0
  },
  {
    "q": "The lawyer sat in her private office to talk with her new ______ about the case.",
    "options": [
      "client",
      "cone",
      "controller",
      "dairy"
    ],
    "answer": 0,
    "cn": "律師坐在她的私人辦公室裡，與她的新客戶／委託人談論案情。",
    "vocabIndex": 2
  },
  {
    "q": "Dad bought me a chocolate ice cream scoop sitting on a crispy sugar ______.",
    "options": [
      "client",
      "cone",
      "controller",
      "bamboo"
    ],
    "answer": 1,
    "cn": "爸爸給我買了一球放在酥脆脆皮甜筒上的巧克力冰淇淋。",
    "vocabIndex": 5
  },
  {
    "q": "My brother plays video games on the TV screen using a wireless hand ______.",
    "options": [
      "client",
      "bamboo",
      "dairy",
      "controller"
    ],
    "answer": 3,
    "cn": "我弟弟使用無線手持控制器／搖桿在電視螢幕上玩電玩遊戲。",
    "vocabIndex": 8
  },
  {
    "q": "Fresh milk and butter are made every morning at the local family ______.",
    "options": [
      "controller",
      "dairy",
      "client",
      "cone"
    ],
    "answer": 1,
    "cn": "每天早晨，當地的家族乳品廠都會生產新鮮的牛奶和奶油。",
    "vocabIndex": 11
  },
  {
    "q": "The polite shopkeeper smiled and helped every single ______ who walked into the store.",
    "options": [
      "cone",
      "bamboo",
      "customer",
      "controller"
    ],
    "answer": 2,
    "cn": "有禮貌的店主微笑著協助每一位走進店裡的顧客。",
    "vocabIndex": 3
  },
  {
    "q": "Smart ______ read product reviews online before choosing what to buy.",
    "options": [
      "consumers",
      "cones",
      "controllers",
      "bamboos"
    ],
    "answer": 0,
    "cn": "聰明的消費者在選擇要買什麼之前會在網路上閱讀產品評論。",
    "vocabIndex": 4
  },
  {
    "q": "Orange traffic ______ were placed in the street so cars would not hit the deep hole.",
    "options": [
      "consumers",
      "clients",
      "dairies",
      "cones"
    ],
    "answer": 3,
    "cn": "橘色的交通三角錐被放置在街道上，這樣汽車就不會撞到深坑。",
    "vocabIndex": 5
  },
  {
    "q": "Because the dog was sleeping under the table, the baby began to ______ toward it quietly.",
    "options": [
      "dim",
      "crawl",
      "elect",
      "freeze"
    ],
    "answer": 1,
    "cn": "因為狗狗睡在桌子底下，小嬰兒開始安靜地朝牠爬行。",
    "vocabIndex": 9
  },
  {
    "q": "Please ______ the bedside lamp so the baby can fall asleep peacefully.",
    "options": [
      "dim",
      "elect",
      "freeze",
      "crawl"
    ],
    "answer": 0,
    "cn": "請把床頭燈調暗，這樣小嬰兒才能安詳地入睡。",
    "vocabIndex": 13
  },
  {
    "q": "During the morning rush hour, heavy car traffic on the city bridge ______ along slowly.",
    "options": [
      "dines",
      "dims",
      "crawls",
      "freezes"
    ],
    "answer": 2,
    "cn": "在早晨尖峰時段，市區橋樑上沉重的車流緩慢如牛步般爬行。",
    "vocabIndex": 9
  },
  {
    "q": "As the sun set behind the mountains, daylight slowly ______ into darkness.",
    "options": [
      "crawled",
      "frozen",
      "elected",
      "dimmed"
    ],
    "answer": 3,
    "cn": "隨著太陽落入山後，日光漸漸變暗為黑暗。",
    "vocabIndex": 14
  },
  {
    "q": "It is harmful to your eyes if you try to do your homework in a ______ room.",
    "options": [
      "constant",
      "dim",
      "dairy",
      "frequent"
    ],
    "answer": 1,
    "cn": "如果你試圖在昏暗的房間裡寫作業，這會傷害你的眼睛。",
    "vocabIndex": 13
  },
  {
    "q": "The baby fell asleep to the ______ humming sound of the room fan.",
    "options": [
      "dim",
      "enjoyable",
      "dairy",
      "constant"
    ],
    "answer": 3,
    "cn": "小嬰兒在房間電風扇持續不斷的低鳴聲中睡著了。",
    "vocabIndex": 6
  },
  {
    "q": "Yogurt and cheese are common ______ foods that give our bodies calcium.",
    "options": [
      "dairy",
      "constant",
      "dim",
      "frequent"
    ],
    "answer": 0,
    "cn": "優格與起司是為我們身體提供鈣質的常見乳製品食物。",
    "vocabIndex": 11
  },
  {
    "q": "The hallway was so ______ that I had to feel the wall with my hand to find the door.",
    "options": [
      "constant",
      "dairy",
      "dim",
      "enjoyable"
    ],
    "answer": 2,
    "cn": "走廊太過昏暗，以至於我不得不伸手摸著牆壁來找門。",
    "vocabIndex": 13
  },
  {
    "q": "The doctor keeps the patient under ______ care to make sure she gets well soon.",
    "options": [
      "constant",
      "dim",
      "dairy",
      "frequent"
    ],
    "answer": 0,
    "cn": "醫生對病人進行持續不斷的照護，以確保她能早日康復。",
    "vocabIndex": 6
  },
  {
    "q": "Grandma's recipe uses ______ milk fresh from the nearby green meadow.",
    "options": [
      "constant",
      "dairy",
      "dim",
      "enjoyable"
    ],
    "answer": 1,
    "cn": "奶奶的食譜使用了來自附近綠色牧場的新鮮酪農牛奶。",
    "vocabIndex": 11
  },
  {
    "q": "The weather in this rainy valley is ______ changing from sunshine to rain.",
    "options": [
      "dimly",
      "enjoyably",
      "constantly",
      "frequently"
    ],
    "answer": 2,
    "cn": "這個多雨山谷裡的天氣時常／不斷地在陽光與降雨之間變化。",
    "vocabIndex": 7
  },
  {
    "q": "The street lamps in the old lane shone ______ through the heavy white fog.",
    "options": [
      "constantly",
      "enjoyably",
      "cleanly",
      "dimly"
    ],
    "answer": 3,
    "cn": "老巷子裡的路燈透過厚重的白霧微暗地發光。"
  },
  {
    "q": "Mom sliced crispy ______ to cook with pork ribs in the delicious winter soup.",
    "options": [
      "bamboo shoots",
      "ice cream cones",
      "air traffic controllers",
      "dairy products"
    ],
    "answer": 0,
    "cn": "媽媽切了清脆的竹筍，加入冬日美味湯品中與排骨一起燉煮。",
    "vocabIndex": 1
  },
  {
    "q": "On hot summer days, children love to hold sweet ______ filled with strawberry gelato.",
    "options": [
      "bamboo shoots",
      "traffic cones",
      "ice cream cones",
      "customer services"
    ],
    "answer": 2,
    "cn": "在炎熱的夏日，孩子們喜歡拿著裝有草莓義式冰淇淋的甜美冰淇淋甜筒。",
    "vocabIndex": 5
  },
  {
    "q": "Police officers set up bright orange ______ to keep cars from entering the flooded street.",
    "options": [
      "bamboo shoots",
      "ice cream cones",
      "air traffic controllers",
      "traffic cones"
    ],
    "answer": 3,
    "cn": "警察設置了鮮豔的橘色交通三角錐，以防止車輛駛入淹水的街道。",
    "vocabIndex": 5
  },
  {
    "q": "The airport needs a skilled ______ to watch the radar and guide arriving planes safely.",
    "options": [
      "bamboo shoot",
      "air traffic controller",
      "ice cream cone",
      "traffic cone"
    ],
    "answer": 1,
    "cn": "機場需要一名技術純熟的航空交通管制員來監看雷達並安全引導進場班機。",
    "vocabIndex": 8
  },
  {
    "q": "The sweet sugar cookies on the garden table were soon ______ hundreds of hungry ants.",
    "options": [
      "freezing with",
      "dimming with",
      "crawling with",
      "dining with"
    ],
    "answer": 2,
    "cn": "花園桌上的甜糖餅乾很快就爬滿了數百隻飢餓的螞蟻。",
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "bamboo": {
    "pos": "n.",
    "en_def": "a tall tropical grass with hard, hollow stems used for building, furniture, or food",
    "cn_def": "竹子；竹竿（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tall tropical grass with hard, hollow stems used for building, furniture, or food",
        "cn_def": "竹子；竹竿（可數/不可數）"
      }
    ]
  },
  "bamboo shoot": {
    "pos": "n.phr.",
    "en_def": "the edible young sprout of the bamboo plant, used as a vegetable in cooking",
    "cn_def": "竹筍（可數）",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "the edible young sprout of the bamboo plant, used as a vegetable in cooking",
        "cn_def": "竹筍（可數）"
      }
    ]
  },
  "client": {
    "pos": "n.",
    "en_def": "a person or organization using the professional services of a lawyer, accountant, or company",
    "cn_def": "委託人；客戶；訟務當事人（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or organization using the professional services of a lawyer, accountant, or company",
        "cn_def": "委託人；客戶；訟務當事人（可數）"
      }
    ]
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services from a shop, store, or business",
    "cn_def": "顧客；買家（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who buys goods or services from a shop, store, or business",
        "cn_def": "顧客；買家（可數）"
      }
    ]
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who purchases goods and services for personal use",
    "cn_def": "消費者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who purchases goods and services for personal use",
        "cn_def": "消費者（可數）"
      }
    ]
  },
  "cone": {
    "pos": "n.",
    "en_def": "a solid or hollow object that tapers from a circular base to a point; a wafer container for ice cream",
    "cn_def": "圓錐體；甜筒；三角錐（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a solid or hollow object that tapers from a circular base to a point; a wafer container for ice cream",
        "cn_def": "圓錐體；甜筒；三角錐（可數）"
      }
    ]
  },
  "constant": {
    "pos": "adj.",
    "en_def": "occurring continuously over a period of time; remaining unchanging",
    "cn_def": "持續不斷的；始終如一的；恆定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring continuously over a period of time; remaining unchanging",
        "cn_def": "持續不斷的；始終如一的；恆定的"
      }
    ]
  },
  "constantly": {
    "pos": "adv.",
    "en_def": "continuously over a period of time; always or repeatedly",
    "cn_def": "不斷地；時常地；時時刻刻",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "continuously over a period of time; always or repeatedly",
        "cn_def": "不斷地；時常地；時時刻刻"
      }
    ]
  },
  "controller": {
    "pos": "n.",
    "en_def": "a person who directs or regulates something; a handheld device used to operate games or machines",
    "cn_def": "控制器；管制員；主計官（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who directs or regulates something; a handheld device used to operate games or machines",
        "cn_def": "控制器；管制員；主計官（可數）"
      }
    ]
  },
  "crawl": {
    "pos": "v.",
    "en_def": "to move forward on hands and knees or by dragging the body close to the ground",
    "cn_def": "爬行；緩慢移動（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move forward on hands and knees or by dragging the body close to the ground",
        "cn_def": "爬行；緩慢移動（動詞）"
      }
    ]
  },
  "crawl with": {
    "pos": "v.phr.",
    "en_def": "to be filled or overrun with an unpleasantly large number of people or things",
    "cn_def": "擠滿；到處都是（動詞片語）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to be filled or overrun with an unpleasantly large number of people or things",
        "cn_def": "擠滿；到處都是（動詞片語）"
      }
    ]
  },
  "crawling": {
    "pos": "v.phr.",
    "en_def": "to be filled or overrun with an unpleasantly large number of people or things",
    "cn_def": "擠滿；到處都是（動詞片語）",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to be filled or overrun with an unpleasantly large number of people or things",
        "cn_def": "擠滿；到處都是（動詞片語）"
      }
    ]
  },
  "dairy": {
    "pos": "n.",
    "en_def": "a building or company where milk and cream are stored or made into butter and cheese",
    "cn_def": "乳品廠；酪農場（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building or company where milk and cream are stored or made into butter and cheese",
        "cn_def": "乳品廠；酪農場（可數）"
      },
      {
        "pos": "adj.",
        "en_def": "containing or made from milk, or involving milk production",
        "cn_def": "乳製品的；酪農業的"
      }
    ]
  },
  "dim": {
    "pos": "adj.",
    "en_def": "not shining brightly or clearly; dark or indistinct",
    "cn_def": "昏暗的；模糊的；前景黯淡的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not shining brightly or clearly; dark or indistinct",
        "cn_def": "昏暗的；模糊的；前景黯淡的"
      },
      {
        "pos": "v.",
        "en_def": "to make or become less bright, clear, or distinct",
        "cn_def": "使變暗；漸漸變暗；使模糊（動詞）"
      }
    ]
  },
  "dimmed": {
    "pos": "v.",
    "en_def": "to make or become less bright, clear, or distinct",
    "cn_def": "使變暗；漸漸變暗；使模糊（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become less bright, clear, or distinct",
        "cn_def": "使變暗；漸漸變暗；使模糊（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
