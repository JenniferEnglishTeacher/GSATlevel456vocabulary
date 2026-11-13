// Part 5 Quiz Data: summit – vitamin
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 14-5 - summit – vitamin",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "summit",
    "pos": "n.",
    "cn_def": "山頂；頂峰；高峰會議（可數）",
    "en_def": "the highest point of a hill or mountain; a high-level meeting of heads of government",
    "sentence": "After ten hours of strenuous climbing across ice and rock, the mountaineers finally reached the snow-covered {{BLANK}}.",
    "cn": "在穿越冰層與岩石歷經十個小時的艱苦攀登後，登山隊員們終於登上了白雪覆蓋的山頂。"
  },
  {
    "word": "swift",
    "pos": "adj.",
    "cn_def": "迅速的；敏捷的；快速的",
    "en_def": "happening quickly or moving with great speed",
    "sentence": "The customer service department earned high praise from clients for its remarkably {{BLANK}} response to inquiries.",
    "cn": "客戶服務部門因對詢問做出非常迅速的回應而贏得客戶的高度讚賞。"
  },
  {
    "word": "swiftly",
    "pos": "adv.",
    "cn_def": "迅速地；敏捷地",
    "en_def": "at high speed; quickly and smoothly",
    "sentence": "The agile deer moved {{BLANK}} through the dense forest whenever it heard the distant snap of twigs.",
    "cn": "每當聽到遠處樹枝折斷的聲音，敏捷的鹿就會在茂密的森林中迅速地穿梭。"
  },
  {
    "word": "tablet",
    "pos": "n.",
    "cn_def": "藥片；平板電腦；刻寫石板（可數）",
    "en_def": "a small flat compressed medicine disc; a portable touchscreen computer; an inscribed flat slab",
    "sentence": "The family doctor advised grandma to take one calcium {{BLANK}} with a glass of warm water every morning.",
    "cn": "家庭醫生建議祖母每天早晨配上一杯溫水吞服一顆鈣片。"
  },
  {
    "word": "tease",
    "pos": "v.",
    "cn_def": "嘲弄；取笑；戲弄（動詞）",
    "en_def": "to make fun of someone playfully or unkindly",
    "sentence": "Older boys at the playground would often {{BLANK}} little Kevin about his oversized glasses until he cried.",
    "cn": "操場上的大男孩們常因小凱文戴著過大的眼鏡而取笑他，直到他哭了出來。"
  },
  {
    "word": "trumpet",
    "pos": "n.",
    "cn_def": "小號；喇叭（可數）",
    "en_def": "a brass musical wind instrument with a flared bell and valves",
    "sentence": "An accomplished jazz musician stepped onto the stage and played the brass {{BLANK}} with brilliant skill.",
    "cn": "一位造詣高超的爵士樂手走上舞台，技巧精湛地吹奏黃銅小號。"
  },
  {
    "word": "tub",
    "pos": "n.",
    "cn_def": "浴缸；桶；盆（可數）",
    "en_def": "a wide, open, deep, typically round container used for holding liquids or goods",
    "sentence": "After a grueling day of physical labor, soaking in a warm {{BLANK}} full of fragrant bubbles eased all my muscle aches.",
    "cn": "經過一整天繁重的體力勞動後，泡在裝滿芬芳泡沫的溫暖浴缸裡緩解了我所有的肌肉痠痛。"
  },
  {
    "word": "vitamin",
    "pos": "n.",
    "cn_def": "維他命；維生素（可數）",
    "en_def": "an organic compound essential in small quantities to maintain normal metabolism and health",
    "sentence": "Fresh citrus fruits such as oranges and grapefruits are naturally rich in {{BLANK}} C, which strengthens immune defense.",
    "cn": "新鮮柑橘類水果（例如柳橙和葡萄柚）天然富含維他命C，有助於增強免疫防禦。"
  }
];

const MCQS = [
  {
    "q": "The brave mountaineers cheered loudly when they finally reached the mountain ______.",
    "options": [
      "summit",
      "trumpet",
      "tub",
      "vitamin"
    ],
    "answer": 0,
    "cn": "當勇敢的登山客終於登上山頂峰時，他們大聲歡呼。",
    "vocabIndex": 0
  },
  {
    "q": "The boy played a lively tune on his shiny brass ______ in the school music band.",
    "options": [
      "tablet",
      "summit",
      "trumpet",
      "tub"
    ],
    "answer": 2,
    "cn": "小男孩在學校樂隊中用他光亮的銅管小號吹奏了一首活潑的曲子。",
    "vocabIndex": 5
  },
  {
    "q": "Mom bought a large ______ of strawberry ice cream for us to enjoy after dinner.",
    "options": [
      "summit",
      "trumpet",
      "tablet",
      "tub"
    ],
    "answer": 3,
    "cn": "媽媽買了一大桶草莓冰淇淋給我們晚餐後享用。",
    "vocabIndex": 6
  },
  {
    "q": "Eating fresh oranges every day gives your body plenty of healthy ______ C.",
    "options": [
      "summit",
      "vitamin",
      "trumpet",
      "tub"
    ],
    "answer": 1,
    "cn": "每天吃新鮮柳橙能為你的身體提供豐富且健康的維他命C。",
    "vocabIndex": 7
  },
  {
    "q": "The patient swallowed a small white medicine ______ with a glass of water.",
    "options": [
      "summit",
      "trumpet",
      "tablet",
      "tub"
    ],
    "answer": 2,
    "cn": "病人配著一杯水吞服了一顆白色的藥片。",
    "vocabIndex": 3
  },
  {
    "q": "The company gave a ______ reply to our email and answered all our questions within minutes.",
    "options": [
      "teased",
      "swift",
      "trumpeted",
      "tubbed"
    ],
    "answer": 1,
    "cn": "這家公司對我們的電子郵件給予了迅速敏捷的回覆，在幾分鐘內回答了所有問題。",
    "vocabIndex": 1
  },
  {
    "q": "The deer ran ______ across the green meadow and vanished into the trees.",
    "options": [
      "swiftly",
      "teased",
      "trumpeted",
      "swift"
    ],
    "answer": 0,
    "cn": "那隻鹿迅速敏捷地穿過綠色草地，消失在樹林中。",
    "vocabIndex": 2
  },
  {
    "q": "It is not kind to ______ younger children about their clothes or shoes at school.",
    "options": [
      "summit",
      "vitamin",
      "tub",
      "tease"
    ],
    "answer": 3,
    "cn": "在學校因為年幼學童的衣服或鞋子而取笑嘲弄他們是不善良的。",
    "vocabIndex": 4
  },
  {
    "q": "World leaders met at an international ______ to discuss ways to protect ocean life.",
    "options": [
      "summit",
      "tub",
      "trumpet",
      "vitamin"
    ],
    "answer": 0,
    "cn": "各國領袖在一場國際高峰會議上會面，商討保護海洋生物的方法。",
    "vocabIndex": 0
  },
  {
    "q": "The boy loves to watch cartoon movies on his touchscreen ______ while traveling.",
    "options": [
      "tub",
      "summit",
      "trumpet",
      "tablet"
    ],
    "answer": 3,
    "cn": "小男孩在旅行時喜歡用他的觸控螢幕平板電腦看卡通電影。",
    "vocabIndex": 3
  },
  {
    "q": "My grandfather blows on his brass ______ every morning to practice jazz music.",
    "options": [
      "summit",
      "trumpet",
      "tub",
      "vitamin"
    ],
    "answer": 1,
    "cn": "我祖父每天早晨吹奏他的黃銅小號來練習爵士音樂。",
    "vocabIndex": 5
  },
  {
    "q": "The baby splashed happily in the warm water inside the small blue plastic ______.",
    "options": [
      "summit",
      "trumpet",
      "tub",
      "tablet"
    ],
    "answer": 2,
    "cn": "小嬰兒在藍色小塑膠浴盆／浴缸裡的溫水中歡快地戲水。",
    "vocabIndex": 6
  },
  {
    "q": "Drinking fresh carrot juice gives your eyes a lot of helpful ______ A.",
    "options": [
      "trumpet",
      "tub",
      "summit",
      "vitamin"
    ],
    "answer": 3,
    "cn": "喝新鮮胡蘿蔔汁能給予你的眼睛大量有益的維生素A。",
    "vocabIndex": 7
  },
  {
    "q": "The clever cat made a ______ jump onto the wall and caught the flying toy.",
    "options": [
      "trumpeted",
      "teased",
      "swift",
      "tubbed"
    ],
    "answer": 2,
    "cn": "聰明的貓敏捷迅速地跳上牆頭，抓住了飛行的玩具。",
    "vocabIndex": 1
  },
  {
    "q": "The police car drove ______ through traffic to reach the scene of the accident.",
    "options": [
      "swiftly",
      "swift",
      "teased",
      "trumpeted"
    ],
    "answer": 0,
    "cn": "警車在車流中迅速敏捷地行駛，以趕往事故現場。",
    "vocabIndex": 2
  },
  {
    "q": "Jack was only ______ when he hid his sister's book under the sofa cushion.",
    "options": [
      "swift",
      "teasing",
      "summit",
      "trumpeting"
    ],
    "answer": 1,
    "cn": "傑克把妹妹的書藏在沙發墊下時，只是在開玩笑鬧著玩。",
    "vocabIndex": 4
  },
  {
    "q": "The hikers stopped to rest because the path to the high mountain ______ was steep.",
    "options": [
      "summit",
      "trumpet",
      "tablet",
      "tub"
    ],
    "answer": 0,
    "cn": "登山客停下來休息，因為通往高山頂峰的小徑非常陡峭。",
    "vocabIndex": 0
  },
  {
    "q": "The archeologist found an ancient stone ______ with royal words carved into it.",
    "options": [
      "trumpet",
      "tablet",
      "summit",
      "tub"
    ],
    "answer": 1,
    "cn": "考古學家發現了一塊刻有皇家文字的古代石碑／板。",
    "vocabIndex": 3
  },
  {
    "q": "We bought a large ______ of warm buttery popcorn to eat during the scary movie.",
    "options": [
      "trumpet",
      "tablet",
      "summit",
      "tub"
    ],
    "answer": 3,
    "cn": "我們買了一大桶熱騰騰的奶油爆米花，在看恐怖電影時享用。",
    "vocabIndex": 6
  },
  {
    "q": "Doctor Lee gave the thin patient some ______ pills to help him gain healthy strength.",
    "options": [
      "summit",
      "tub",
      "vitamin",
      "trumpet"
    ],
    "answer": 2,
    "cn": "李醫生給了消瘦的病人一些維他命藥丸，以幫助他恢復健康體力。",
    "vocabIndex": 7
  },
  {
    "q": "A wise and humble person does not like to ______ all the time.",
    "options": [
      "blow his own trumpet",
      "take a vitamin pill",
      "reach the mountain summit",
      "buy a tub of popcorn"
    ],
    "answer": 0,
    "cn": "一個睿智且謙遜的人不喜歡隨時隨地自吹自擂／誇耀自己。",
    "vocabIndex": 5
  },
  {
    "q": "After hiking for five hours in the cold wind, resting in a ______ felt wonderful.",
    "options": [
      "mountain summit",
      "brass trumpet",
      "vitamin C tablet",
      "warm bath in the tub"
    ],
    "answer": 3,
    "cn": "在寒風中健行五個小時之後，泡在浴缸裡的溫水澡感覺舒服極了。",
    "vocabIndex": 6
  },
  {
    "q": "The brave firefighter received an award for taking ______ during the building fire.",
    "options": [
      "stone tablet",
      "swift action",
      "tub of ice cream",
      "mountain summit"
    ],
    "answer": 1,
    "cn": "那位勇敢的消防隊員因在建築物火災中採取果斷迅速的行動而獲獎。",
    "vocabIndex": 1
  },
  {
    "q": "The nurse told the boy to ______ every morning after breakfast with a glass of juice.",
    "options": [
      "reach the summit",
      "blow his own trumpet",
      "take a vitamin tablet",
      "buy a tub of popcorn"
    ],
    "answer": 2,
    "cn": "護理師囑咐男孩每天早餐後配一杯果汁服用一顆維他命藥片。",
    "vocabIndex": 7
  },
  {
    "q": "The two presidents met at an ______ in Switzerland to discuss world peace.",
    "options": [
      "empty bathtub",
      "stone tablet",
      "brass trumpet",
      "international summit"
    ],
    "answer": 3,
    "cn": "兩位總統在瑞士的一場國際高峰會議上會面，商討世界和平。",
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "summit": {
    "pos": "n.",
    "en_def": "the highest point of a hill or mountain; a high-level meeting of heads of government",
    "cn_def": "山頂；頂峰；高峰會議（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the highest point of a hill or mountain; a high-level meeting of heads of government",
        "cn_def": "山頂；頂峰；高峰會議（可數）"
      }
    ]
  },
  "swift": {
    "pos": "adj.",
    "en_def": "happening quickly or moving with great speed",
    "cn_def": "迅速的；敏捷的；快速的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening quickly or moving with great speed",
        "cn_def": "迅速的；敏捷的；快速的"
      }
    ]
  },
  "swiftly": {
    "pos": "adv.",
    "en_def": "at high speed; quickly and smoothly",
    "cn_def": "迅速地；敏捷地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "at high speed; quickly and smoothly",
        "cn_def": "迅速地；敏捷地"
      }
    ]
  },
  "tablet": {
    "pos": "n.",
    "en_def": "a small flat compressed medicine disc; a portable touchscreen computer; an inscribed flat slab",
    "cn_def": "藥片；平板電腦；刻寫石板（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small flat compressed medicine disc; a portable touchscreen computer; an inscribed flat slab",
        "cn_def": "藥片；平板電腦；刻寫石板（可數）"
      }
    ]
  },
  "tease": {
    "pos": "v.",
    "en_def": "to make fun of someone playfully or unkindly",
    "cn_def": "嘲弄；取笑；戲弄（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make fun of someone playfully or unkindly",
        "cn_def": "嘲弄；取笑；戲弄（動詞）"
      }
    ]
  },
  "trumpet": {
    "pos": "n.",
    "en_def": "a brass musical wind instrument with a flared bell and valves",
    "cn_def": "小號；喇叭（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a brass musical wind instrument with a flared bell and valves",
        "cn_def": "小號；喇叭（可數）"
      }
    ]
  },
  "tub": {
    "pos": "n.",
    "en_def": "a wide, open, deep, typically round container used for holding liquids or goods",
    "cn_def": "浴缸；桶；盆（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a wide, open, deep, typically round container used for holding liquids or goods",
        "cn_def": "浴缸；桶；盆（可數）"
      }
    ]
  },
  "vitamin": {
    "pos": "n.",
    "en_def": "an organic compound essential in small quantities to maintain normal metabolism and health",
    "cn_def": "維他命；維生素（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organic compound essential in small quantities to maintain normal metabolism and health",
        "cn_def": "維他命；維生素（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
