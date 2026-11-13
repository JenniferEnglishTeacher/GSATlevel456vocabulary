// Part 2 Quiz Data: chin – explorer
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 1-2 - chin – explorer",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "chin",
    "pos": "n.",
    "cn_def": "下巴；頦",
    "en_def": "the bottom part of a person's face below the mouth",
    "sentence": "While listening thoughtfully to the lecture, the university student rested his {{BLANK}} on his hand and took detailed notes.",
    "cn": "在全神貫注聆聽演講時，那名大學生用手托著下巴並寫下詳細的筆記。"
  },
  {
    "word": "double chin",
    "pos": "n.phr.",
    "cn_def": "雙下巴",
    "en_def": "a fold of thick fatty skin below someone's chin",
    "sentence": "After gaining weight during the long winter vacation, David noticed that he had developed an obvious {{BLANK}} in photos.",
    "cn": "在漫長的寒假期間體重增加之後，大衛在照片中注意到自己出現了明顯的雙下巴。"
  },
  {
    "word": "keep his chin up",
    "pos": "v.phr.",
    "cn_def": "保持樂觀；不氣餒；振作起來",
    "en_def": "to stay cheerful and brave in a difficult or discouraging situation",
    "sentence": "Even though Mark failed his driver's license exam yesterday, his encouraging parents told him to {{BLANK}} and try again.",
    "cn": "雖然馬克昨天駕照考試沒及格，但他給予鼓勵的父母告訴他要振作起來／保持樂觀，再試一次。"
  },
  {
    "word": "cleaner",
    "pos": "n.",
    "cn_def": "清潔人員；清潔工",
    "en_def": "a person employed to clean buildings, offices, or houses",
    "sentence": "Early every morning before the office workers arrive, the dedicated {{BLANK}} sweeps the hallway floors and empties all the trash bins.",
    "cn": "每天清晨在辦公室員工抵達之前，那位盡責的清潔工都會清掃走廊地板並倒空所有垃圾桶。"
  },
  {
    "word": "cleaner",
    "pos": "n.",
    "cn_def": "清潔劑；清潔劑產品",
    "en_def": "a substance or chemical product used for cleaning things",
    "sentence": "My mother prefers to buy an eco-friendly {{BLANK}} because it cleans oily kitchen stoves effectively without harming the environment.",
    "cn": "我母親偏好購買環保清潔劑，因為它能有效清除廚房瓦斯爐的油污，又不會傷害環境。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "打掃；清理；洗淨",
    "en_def": "to make something free from dirt or stains by washing or wiping",
    "sentence": "Before our relatives arrived from out of town for the weekend, we had to {{BLANK}} the entire apartment thoroughly.",
    "cn": "在我們的親戚從外地抵達過週末之前，我們必須將整間公寓徹底打掃乾淨。"
  },
  {
    "word": "crispy",
    "pos": "adj.",
    "cn_def": "酥脆的；脆生生的",
    "en_def": "pleasantly thin, dry, and crunchy in a pleasant way",
    "sentence": "The chef fried the chicken wings at a high temperature so that the skin was golden and {{BLANK}} while the meat stayed juicy.",
    "cn": "主廚用高溫油炸雞翅，使外皮呈現金黃酥脆，而肉質依然鮮嫩多汁。"
  },
  {
    "word": "cruel",
    "pos": "adj.",
    "cn_def": "殘忍的；殘酷的",
    "en_def": "extremely unkind and causing pain or suffering to others intentionally",
    "sentence": "It is completely unacceptable to be {{BLANK}} to domestic animals, and anyone who abuses pets should be punished by the law.",
    "cn": "對家養動物殘忍是完全不可接受的，任何虐待寵物的人都應當受到法律制裁。"
  },
  {
    "word": "cruelty",
    "pos": "n.",
    "cn_def": "殘忍行為；殘酷（不可數）",
    "en_def": "cruel behavior or actions that cause pain or distress to others",
    "sentence": "Many animal welfare organizations work tirelessly every day to protect innocent wild animals from human {{BLANK}} and exploitation.",
    "cn": "許多動物福利組織每天不知疲倦地工作，以保護無辜的野生動物免受人類的殘忍行為與剝削。"
  },
  {
    "word": "database",
    "pos": "n.",
    "cn_def": "資料庫",
    "en_def": "an organized set of data or information stored electronically in a computer",
    "sentence": "The hospital established a secure national {{BLANK}} that stores medical records of thousands of patients for quick doctor access.",
    "cn": "這家醫院建立了一個安全的國家資料庫，存放數千名病人的病歷，以便醫師能迅速查閱。"
  },
  {
    "word": "dawn",
    "pos": "n.",
    "cn_def": "黎明；破曉；拂曉",
    "en_def": "the first appearance of light in the sky before sunrise",
    "sentence": "Hardworking local fishermen usually wake up at {{BLANK}} to prepare their heavy nets and depart before the morning sun appears.",
    "cn": "辛勤的當地漁民通常在黎明時分起床準備沉重的漁網，並在早晨太陽出現之前出海。"
  },
  {
    "word": "dawned",
    "pos": "v.",
    "cn_def": "破曉；開始展開；萌芽",
    "en_def": "to begin to grow light as the sun rises, or to begin to become evident",
    "sentence": "As the morning finally {{BLANK}} over the quiet valley, bright golden sunlight illuminated the misty peaks of the high mountains.",
    "cn": "當清晨終於在寂靜的山谷中破曉展開時，明亮的金黃陽光照亮了高山多霧的峰頂。"
  },
  {
    "word": "dawned on",
    "pos": "v.phr.",
    "cn_def": "使某人恍然大悟；某人突然明白",
    "en_def": "to become understood or realized by someone for the first time",
    "sentence": "It suddenly {{BLANK}} Peter that he had left his apartment keys and wallet inside the locked office downtown.",
    "cn": "彼得突然恍然大悟／明白過來，自己把公寓鑰匙和皮夾遺忘在市中心上鎖的辦公室裡了。"
  },
  {
    "word": "dusk",
    "pos": "n.",
    "cn_def": "薄暮；黃昏；傍晚",
    "en_def": "the time at the end of the day just before it becomes completely dark",
    "sentence": "Streetlights across the busy avenue turn on automatically at {{BLANK}} so drivers can see pedestrians clearly on their way home.",
    "cn": "繁忙大道上的路燈在黃昏時分會自動開啟，以便駕駛人在下班回家的路上能清楚看見行人。"
  },
  {
    "word": "deck",
    "pos": "n.",
    "cn_def": "甲板；（屋外的）木質露天平台",
    "en_def": "a flat, open floor on a ship, boat, or outdoor platform of a house",
    "sentence": "During the pleasant cruise across the Mediterranean, passengers gathered on the open {{BLANK}} to enjoy the cool evening sea breeze.",
    "cn": "在橫跨地中海的心曠神怡遊輪航程中，乘客們聚集在露天甲板上享受涼爽的傍晚海風。"
  },
  {
    "word": "a deck of cards",
    "pos": "n.phr.",
    "cn_def": "一副撲克牌",
    "en_def": "a full pack of 52 playing cards used in games and magic tricks",
    "sentence": "The talented young magician asked an audience member to choose a single card from {{BLANK}} and remember its symbol.",
    "cn": "那位才華洋溢的年輕魔術師請一位現場觀眾從一副撲克牌中選出一張牌並記住其花色花樣。"
  },
  {
    "word": "deck out",
    "pos": "v.phr.",
    "cn_def": "盛裝打扮；裝飾一新",
    "en_def": "to decorate or dress someone or something in a very attractive or festive way",
    "sentence": "Every December, our neighbors {{BLANK}} their front garden with colorful glowing lights, plastic reindeer, and holiday wreaths.",
    "cn": "每年十二月，我們的鄰居都會用五彩繽紛的發光燈飾、塑膠馴鹿與節慶花環將前院花園裝飾一新。"
  },
  {
    "word": "elderly",
    "pos": "adj.",
    "cn_def": "年長的；上了年紀的（客氣說法）",
    "en_def": "polite term describing people who are old and past middle age",
    "sentence": "The polite junior high student stood up and offered his comfortable bus seat to an {{BLANK}} passenger carrying heavy bags.",
    "cn": "那位有禮貌的國中生站起身來，將舒適的公車座位讓給一位手提沉重提袋的年長乘客。"
  },
  {
    "word": "the elderly",
    "pos": "n.phr.",
    "cn_def": "年長者；銀髮族；長輩（複數集合稱謂）",
    "en_def": "older people considered as a collective group (used with plural verb)",
    "sentence": "The local community center organizes weekly health screenings and free digital workshops specifically designed for {{BLANK}}.",
    "cn": "當地的社區中心每週舉辦專門為銀髮長輩設計的健康檢查以及免費數位學習工作坊。"
  },
  {
    "word": "aged",
    "pos": "adj.",
    "cn_def": "年邁的；老年的；…歲的",
    "en_def": "very old, or having reached a specified age (pronounced /ˈeɪ.dʒɪd/ or /eɪdʒd/)",
    "sentence": "The doctor gently reminded the family that their {{BLANK}} grandfather required warm clothing and continuous medical attention in winter.",
    "cn": "醫生親切地提醒這家人，他們年邁的祖父在冬天需要保暖的衣物與持續的醫療照護。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的；古老的",
    "en_def": "belonging to the very distant past, especially thousand of years ago",
    "sentence": "Many adventurous tourists travel to Egypt every year to marvel at the massive stone pyramids built by {{BLANK}} civilizations.",
    "cn": "每年許多喜愛冒險的遊客前往埃及，讚嘆由古代文明所建造的宏偉石頭金字塔。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險；探究；研討",
    "en_def": "to travel through an unfamiliar area to discover what is there, or to investigate",
    "sentence": "Equipped with strong helmets and bright headlights, the experienced team entered the deep underground cavern to {{BLANK}} its hidden passages.",
    "cn": "配戴堅固的頭盔與明亮的頭燈，那支經驗豐富的隊伍進入深邃的地下洞穴以探索其隱藏的通道。"
  },
  {
    "word": "exploration",
    "pos": "n.",
    "cn_def": "探索；探險；探勘",
    "en_def": "the action of traveling in or through an unfamiliar area in order to learn about it",
    "sentence": "Modern technological advancements in satellite robotics have opened up exciting new frontiers for deep-space {{BLANK}} across our solar system.",
    "cn": "衛星機器人領域的現代科技進展，為我們太陽系內的深空探索開創了令人振奮的嶄新前沿。"
  },
  {
    "word": "explorer",
    "pos": "n.",
    "cn_def": "探險家；探勘者",
    "en_def": "a person who travels to unfamiliar places in order to discover what is there",
    "sentence": "The fearless Arctic {{BLANK}} documented his dangerous journey across frozen mountains in an inspiring daily diary.",
    "cn": "那位無畏的北極探險家在一本鼓舞人心的每日日記中，記錄了他穿越冰封山脈的危險旅程。"
  }
];

const MCQS = [
  {
    "q": "The passengers walked outside into the fresh air and stood on the ship's ______ to look at the ocean.",
    "options": [
      "database",
      "cleaner",
      "deck",
      "chin"
    ],
    "answer": 2,
    "cn": "乘客們走到戶外呼吸新鮮空氣，並站在船隻的甲板上眺望大海。",
    "vocabIndex": 14
  },
  {
    "q": "When grandpa was thinking about the question, he gently touched his grey beard on his ______.",
    "options": [
      "chin",
      "explorer",
      "deck",
      "cruelty"
    ],
    "answer": 0,
    "cn": "當爺爺在思考那個問題時，他輕輕撫摸著下巴上的灰色鬍鬚。",
    "vocabIndex": 0
  },
  {
    "q": "Mom sprayed a safe bathroom ______ on the mirror and wiped it with a dry cloth.",
    "options": [
      "deck",
      "database",
      "cruelty",
      "cleaner"
    ],
    "answer": 3,
    "cn": "媽媽在鏡子上噴了安全的浴室清潔劑，然後用乾布將它擦拭乾淨。",
    "vocabIndex": 3
  },
  {
    "q": "The school computer stores all students' phone numbers and home addresses in a secure ______.",
    "options": [
      "explorer",
      "database",
      "deck",
      "chin"
    ],
    "answer": 1,
    "cn": "學校電腦將所有學生的電話號碼與住家地址存放在一個安全的資料庫中。",
    "vocabIndex": 9
  },
  {
    "q": "Farmers wake up very early at ______ when the first light of the morning sun touches the hills.",
    "options": [
      "deck",
      "chin",
      "cleaner",
      "dawn"
    ],
    "answer": 3,
    "cn": "農民們在清晨黎明、當早晨第一道陽光灑向山丘時便早早起床。",
    "vocabIndex": 10
  },
  {
    "q": "As daylight faded into ______ and night approached, the street lamps began to shine brightly.",
    "options": [
      "dusk",
      "cruelty",
      "explorer",
      "database"
    ],
    "answer": 0,
    "cn": "隨著白晝漸漸隱入黃昏傍晚且黑夜臨近，路燈開始明亮地發光照耀。",
    "vocabIndex": 13
  },
  {
    "q": "Hitting a pet dog or leaving it hungry is an act of ______ that must not be allowed.",
    "options": [
      "deck",
      "cleaner",
      "cruelty",
      "database"
    ],
    "answer": 2,
    "cn": "毆打寵物犬或讓牠挨餓是絕不被允許的殘忍行為。",
    "vocabIndex": 8
  },
  {
    "q": "Robots and rockets help scientists with the ______ of outer space and far away planets.",
    "options": [
      "dusk",
      "exploration",
      "chin",
      "deck"
    ],
    "answer": 1,
    "cn": "機器人與火箭協助科學家進行外太空與遙遠星球的探索。",
    "vocabIndex": 22
  },
  {
    "q": "The brave ______ traveled across cold mountains and deep forests to find the ancient river.",
    "options": [
      "database",
      "dawn",
      "cruelty",
      "explorer"
    ],
    "answer": 3,
    "cn": "那位勇敢的探險家穿越寒冷山脈與深邃森林去尋找古老的河流。",
    "vocabIndex": 23
  },
  {
    "q": "Every evening, the office ______ sweeps the floors and empties all the waste baskets.",
    "options": [
      "cleaner",
      "chin",
      "database",
      "deck"
    ],
    "answer": 0,
    "cn": "每天傍晚，辦公室清潔工都會清掃地板並倒空所有的廢紙簍。",
    "vocabIndex": 3
  },
  {
    "q": "These potato chips make a loud crunching sound because they are very fresh and ______.",
    "options": [
      "cruel",
      "crispy",
      "elderly",
      "ancient"
    ],
    "answer": 1,
    "cn": "這些洋芋片發出響亮的喀嚓碎裂聲，因為它們非常新鮮且酥脆。",
    "vocabIndex": 6
  },
  {
    "q": "Leaving a small puppy outside alone in the freezing snow is very ______.",
    "options": [
      "ancient",
      "crispy",
      "cruel",
      "clean"
    ],
    "answer": 2,
    "cn": "將一隻幼犬獨自留在酷寒的冰雪中是非常殘忍的。",
    "vocabIndex": 7
  },
  {
    "q": "The young boy stood up on the crowded train and gave his seat to an ______ lady.",
    "options": [
      "crispy",
      "elderly",
      "cruel",
      "clean"
    ],
    "answer": 1,
    "cn": "小男孩在擁擠的火車上站起身，將座位讓給一位上了年紀的女士。",
    "vocabIndex": 17
  },
  {
    "q": "People in ______ Egypt built giant pyramids out of huge rocks thousands of years ago.",
    "options": [
      "cruel",
      "crispy",
      "ancient",
      "elderly"
    ],
    "answer": 2,
    "cn": "數千年前，古代埃及的人們用巨大的石塊建造了宏偉的金字塔。",
    "vocabIndex": 20
  },
  {
    "q": "The ______ dog could no longer run fast or jump high because of its weak, old legs.",
    "options": [
      "clean",
      "crispy",
      "cruel",
      "aged"
    ],
    "answer": 3,
    "cn": "那隻年邁的老狗因為腿腳虛弱無力，再也無法快跑或跳高了。",
    "vocabIndex": 19
  },
  {
    "q": "After washing my hands with soap and warm water, my fingers were completely ______.",
    "options": [
      "clean",
      "crispy",
      "cruel",
      "aged"
    ],
    "answer": 0,
    "cn": "在用肥皂與溫水洗過手之後，我的手指完全乾淨了。",
    "vocabIndex": 5
  },
  {
    "q": "The fried fish was delicious because the skin was golden and ______ while the meat was soft.",
    "options": [
      "elderly",
      "crispy",
      "ancient",
      "cruel"
    ],
    "answer": 1,
    "cn": "炸魚非常美味，因為外皮金黃酥脆，而裡面的魚肉則柔嫩無比。",
    "vocabIndex": 6
  },
  {
    "q": "During our summer trip to the island, we took a boat to ______ the quiet sea caves.",
    "options": [
      "dawn",
      "deck",
      "explore",
      "clean"
    ],
    "answer": 2,
    "cn": "在我們前往這座島嶼的夏季旅行中，我們搭船去探索幽靜的海蝕洞穴。",
    "vocabIndex": 21
  },
  {
    "q": "Please ______ your bedroom and put all your toys back in the box before dinner.",
    "options": [
      "deck",
      "explore",
      "dawn",
      "clean"
    ],
    "answer": 3,
    "cn": "吃晚餐前，請先清理打掃你的臥室，並將所有玩具收回盒子裡。",
    "vocabIndex": 5
  },
  {
    "q": "The morning began to ______ over the city, and the dark sky turned a soft pink color.",
    "options": [
      "dawn",
      "clean",
      "explore",
      "deck"
    ],
    "answer": 0,
    "cn": "早晨開始在城市上方破曉拂曉，黑暗的天空轉變成了柔和的粉紅色。",
    "vocabIndex": 10
  },
  {
    "q": "Every Christmas, we ______ our living room with green trees, bright red ribbons, and lights.",
    "options": [
      "explore",
      "deck",
      "clean",
      "dawn"
    ],
    "answer": 1,
    "cn": "每年聖誕節，我們都會用綠色聖誕樹、鮮紅緞帶與燈飾來裝飾我們的客廳。",
    "vocabIndex": 14
  },
  {
    "q": "Even when things are hard, you should smile and ______ so you will not feel sad.",
    "options": [
      "keep your chin up",
      "a deck of cards",
      "at dawn",
      "dawn on"
    ],
    "answer": 0,
    "cn": "即使事情陷入困境，你也應該微笑並振作樂觀起來，這樣才不會感到悲傷。",
    "vocabIndex": 2
  },
  {
    "q": "We sat on the floor with ______ and played a fun game together on the rainy day.",
    "options": [
      "keep your chin up",
      "dawn on",
      "at dawn",
      "a deck of cards"
    ],
    "answer": 3,
    "cn": "在這個下雨天，我們拿著一副撲克牌坐在地板上一起玩有趣的遊戲。",
    "vocabIndex": 15
  },
  {
    "q": "Birds start singing very early ______ before most people in the house are awake.",
    "options": [
      "keep your chin up",
      "dawn on",
      "at dawn",
      "a deck of cards"
    ],
    "answer": 2,
    "cn": "在屋子裡大多數人醒來之前，鳥兒們便非常早地在黎明時分開始歌唱。",
    "vocabIndex": 10
  },
  {
    "q": "It began to ______ Jack that he had forgotten his school homework at home.",
    "options": [
      "keep your chin up",
      "dawn on",
      "at dawn",
      "a deck of cards"
    ],
    "answer": 1,
    "cn": "傑克腦海中開始突然明白／恍然大悟，他把學校作業忘在家裡了。",
    "vocabIndex": 12
  }
];

const LOOKUP = {
  "chin": {
    "pos": "n.",
    "en_def": "the bottom part of a person's face below the mouth",
    "cn_def": "下巴；頦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the bottom part of a person's face below the mouth",
        "cn_def": "下巴；頦"
      }
    ]
  },
  "double chin": {
    "pos": "n.phr.",
    "en_def": "a fold of thick fatty skin below someone's chin",
    "cn_def": "雙下巴",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a fold of thick fatty skin below someone's chin",
        "cn_def": "雙下巴"
      }
    ]
  },
  "keep one's chin up": {
    "pos": "v.phr.",
    "en_def": "to stay cheerful and brave in a difficult or discouraging situation",
    "cn_def": "保持樂觀；不氣餒；振作起來",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to stay cheerful and brave in a difficult or discouraging situation",
        "cn_def": "保持樂觀；不氣餒；振作起來"
      }
    ]
  },
  "keep his chin up": {
    "pos": "v.phr.",
    "en_def": "to stay cheerful and brave in a difficult or discouraging situation",
    "cn_def": "保持樂觀；不氣餒；振作起來",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to stay cheerful and brave in a difficult or discouraging situation",
        "cn_def": "保持樂觀；不氣餒；振作起來"
      }
    ]
  },
  "cleaner": {
    "pos": "n.",
    "en_def": "a person employed to clean buildings, offices, or houses",
    "cn_def": "清潔人員；清潔工",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person employed to clean buildings, offices, or houses",
        "cn_def": "清潔人員；清潔工"
      },
      {
        "pos": "n.",
        "en_def": "a substance or chemical product used for cleaning things",
        "cn_def": "清潔劑；清潔劑產品"
      }
    ]
  },
  "clean": {
    "pos": "v.",
    "en_def": "to make something free from dirt or stains by washing or wiping",
    "cn_def": "打掃；清理；洗淨",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something free from dirt or stains by washing or wiping",
        "cn_def": "打掃；清理；洗淨"
      }
    ]
  },
  "crispy": {
    "pos": "adj.",
    "en_def": "pleasantly thin, dry, and crunchy in a pleasant way",
    "cn_def": "酥脆的；脆生生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasantly thin, dry, and crunchy in a pleasant way",
        "cn_def": "酥脆的；脆生生的"
      }
    ]
  },
  "cruel": {
    "pos": "adj.",
    "en_def": "extremely unkind and causing pain or suffering to others intentionally",
    "cn_def": "殘忍的；殘酷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely unkind and causing pain or suffering to others intentionally",
        "cn_def": "殘忍的；殘酷的"
      }
    ]
  },
  "cruelty": {
    "pos": "n.",
    "en_def": "cruel behavior or actions that cause pain or distress to others",
    "cn_def": "殘忍行為；殘酷（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "cruel behavior or actions that cause pain or distress to others",
        "cn_def": "殘忍行為；殘酷（不可數）"
      }
    ]
  },
  "database": {
    "pos": "n.",
    "en_def": "an organized set of data or information stored electronically in a computer",
    "cn_def": "資料庫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organized set of data or information stored electronically in a computer",
        "cn_def": "資料庫"
      }
    ]
  },
  "dawn": {
    "pos": "n.",
    "en_def": "the first appearance of light in the sky before sunrise",
    "cn_def": "黎明；破曉；拂曉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the first appearance of light in the sky before sunrise",
        "cn_def": "黎明；破曉；拂曉"
      },
      {
        "pos": "v.",
        "en_def": "to begin to grow light as the sun rises, or to begin to become evident",
        "cn_def": "破曉；開始展開；萌芽"
      }
    ]
  },
  "dawned": {
    "pos": "v.",
    "en_def": "to begin to grow light as the sun rises, or to begin to become evident",
    "cn_def": "破曉；開始展開；萌芽",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to begin to grow light as the sun rises, or to begin to become evident",
        "cn_def": "破曉；開始展開；萌芽"
      }
    ]
  },
  "dawn on": {
    "pos": "v.phr.",
    "en_def": "to become understood or realized by someone for the first time",
    "cn_def": "使某人恍然大悟；某人突然明白",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to become understood or realized by someone for the first time",
        "cn_def": "使某人恍然大悟；某人突然明白"
      }
    ]
  },
  "dawned on": {
    "pos": "v.phr.",
    "en_def": "to become understood or realized by someone for the first time",
    "cn_def": "使某人恍然大悟；某人突然明白",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to become understood or realized by someone for the first time",
        "cn_def": "使某人恍然大悟；某人突然明白"
      }
    ]
  },
  "dusk": {
    "pos": "n.",
    "en_def": "the time at the end of the day just before it becomes completely dark",
    "cn_def": "薄暮；黃昏；傍晚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the time at the end of the day just before it becomes completely dark",
        "cn_def": "薄暮；黃昏；傍晚"
      }
    ]
  },
  "deck": {
    "pos": "n.",
    "en_def": "a flat, open floor on a ship, boat, or outdoor platform of a house",
    "cn_def": "甲板；（屋外的）木質露天平台",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat, open floor on a ship, boat, or outdoor platform of a house",
        "cn_def": "甲板；（屋外的）木質露天平台"
      }
    ]
  },
  "a deck of cards": {
    "pos": "n.phr.",
    "en_def": "a full pack of 52 playing cards used in games and magic tricks",
    "cn_def": "一副撲克牌",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "a full pack of 52 playing cards used in games and magic tricks",
        "cn_def": "一副撲克牌"
      }
    ]
  },
  "deck out": {
    "pos": "v.phr.",
    "en_def": "to decorate or dress someone or something in a very attractive or festive way",
    "cn_def": "盛裝打扮；裝飾一新",
    "combined": [
      {
        "pos": "v.phr.",
        "en_def": "to decorate or dress someone or something in a very attractive or festive way",
        "cn_def": "盛裝打扮；裝飾一新"
      }
    ]
  },
  "elderly": {
    "pos": "adj.",
    "en_def": "polite term describing people who are old and past middle age",
    "cn_def": "年長的；上了年紀的（客氣說法）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "polite term describing people who are old and past middle age",
        "cn_def": "年長的；上了年紀的（客氣說法）"
      }
    ]
  },
  "the elderly": {
    "pos": "n.phr.",
    "en_def": "older people considered as a collective group (used with plural verb)",
    "cn_def": "年長者；銀髮族；長輩（複數集合稱謂）",
    "combined": [
      {
        "pos": "n.phr.",
        "en_def": "older people considered as a collective group (used with plural verb)",
        "cn_def": "年長者；銀髮族；長輩（複數集合稱謂）"
      }
    ]
  },
  "aged": {
    "pos": "adj.",
    "en_def": "very old, or having reached a specified age (pronounced /ˈeɪ.dʒɪd/ or /eɪdʒd/)",
    "cn_def": "年邁的；老年的；…歲的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very old, or having reached a specified age (pronounced /ˈeɪ.dʒɪd/ or /eɪdʒd/)",
        "cn_def": "年邁的；老年的；…歲的"
      }
    ]
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "belonging to the very distant past, especially thousand of years ago",
    "cn_def": "古代的；古老的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "belonging to the very distant past, especially thousand of years ago",
        "cn_def": "古代的；古老的"
      }
    ]
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel through an unfamiliar area to discover what is there, or to investigate",
    "cn_def": "探索；探險；探究；研討",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to travel through an unfamiliar area to discover what is there, or to investigate",
        "cn_def": "探索；探險；探究；研討"
      }
    ]
  },
  "exploration": {
    "pos": "n.",
    "en_def": "the action of traveling in or through an unfamiliar area in order to learn about it",
    "cn_def": "探索；探險；探勘",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of traveling in or through an unfamiliar area in order to learn about it",
        "cn_def": "探索；探險；探勘"
      }
    ]
  },
  "explorer": {
    "pos": "n.",
    "en_def": "a person who travels to unfamiliar places in order to discover what is there",
    "cn_def": "探險家；探勘者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who travels to unfamiliar places in order to discover what is there",
        "cn_def": "探險家；探勘者"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
