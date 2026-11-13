// Part 2 Quiz Data: confirm – harmless
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 12-2 - confirm – harmless",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "證實；確認；確定（動詞）",
    "en_def": "to establish the truth or correctness of something; to make definite",
    "sentence": "I need to call the dental clinic this afternoon to {{BLANK}} the exact time of my checkup tomorrow.",
    "cn": "我今天下午需要打電話給牙醫診所，以確認我明天檢查的確切時間。"
  },
  {
    "word": "confirmation",
    "pos": "n.",
    "cn_def": "確認；證實；確認函（不可數/可數）",
    "en_def": "the action of confirming something, or proof that verifies a statement",
    "sentence": "After completing your online ticket purchase, you will immediately receive a booking {{BLANK}} by email.",
    "cn": "在完成線上購票後，您將會立即透過電子郵件收到預訂確認函。"
  },
  {
    "word": "crashed",
    "pos": "v.",
    "cn_def": "撞毀；墜毀；（電腦）當機（動詞）",
    "en_def": "to collide violently with an obstacle; of a computer to fail suddenly",
    "sentence": "The driver lost control on the icy road and {{BLANK}} his car into a sturdy concrete wall.",
    "cn": "駕駛人在結冰的道路上失去控制，將他的車撞上了一面堅固的混凝土牆。"
  },
  {
    "word": "crash",
    "pos": "n.",
    "cn_def": "撞車事故；墜機；暴跌；轟隆聲（可數）",
    "en_def": "a violent collision or impact; a sudden economic collapse or loud noise",
    "sentence": "Remarkably, all passengers survived the terrifying plane {{BLANK}} in the remote mountain valley without fatal injuries.",
    "cn": "令人驚嘆的是，偏遠山谷那場可怕空難／墜機事故中的所有乘客都奇蹟倖存，沒有人受致命傷。"
  },
  {
    "word": "dinosaur",
    "pos": "n.",
    "cn_def": "恐龍；過時落伍的人事物（可數）",
    "en_def": "an extinct prehistoric reptile; an outdated or obsolete person or thing",
    "sentence": "In today's digital era of high-speed smartphones, that clunky desktop computer is a complete {{BLANK}}.",
    "cn": "在現今高速智慧型手機的數位時代，那台笨重的桌上型電腦簡直是個完全過時落伍的老古董。"
  },
  {
    "word": "enable",
    "pos": "v.",
    "cn_def": "使能夠；使可行；啟動（動詞）",
    "en_def": "to give someone the authority, means, or opportunity to do something",
    "sentence": "Winning the prestigious full scholarship will {{BLANK}} the talented student to study at Oxford University.",
    "cn": "贏得那筆著名的全額獎學金將使那位優秀的學生能夠在牛津大學深造。"
  },
  {
    "word": "fake",
    "pos": "adj.",
    "cn_def": "偽造的；冒牌的；假造的（形容詞）",
    "en_def": "not genuine or authentic; fraudulent or imitation",
    "sentence": "Social media users should think critically and avoid sharing sensational {{BLANK}} news online.",
    "cn": "社群媒體使用者應批判性思考，避免在網路上轉發聳人聽聞的假新聞。"
  },
  {
    "word": "fake",
    "pos": "n./v.",
    "cn_def": "贗品；騙子（名詞）；偽造；假裝（動詞）",
    "en_def": "a forgery or counterfeit object (n.); to forge or pretend something (v.)",
    "sentence": "The dishonest employee was fired after he tried to {{BLANK}} his manager's signature on the check.",
    "cn": "那名不誠實的員工在試圖於支票上偽造主管簽名後遭到解僱。"
  },
  {
    "word": "fashionable",
    "pos": "adj.",
    "cn_def": "時髦的；流行的；時興的",
    "en_def": "characteristic of, influenced by, or representing a current popular style",
    "sentence": "Paris is widely recognized as the global capital of {{BLANK}} clothing and artistic lifestyle.",
    "cn": "巴黎被廣泛公認為時髦服飾與藝術生活的世界之都。"
  },
  {
    "word": "fashion",
    "pos": "n.",
    "cn_def": "流行；時尚；時裝（可數/不可數）",
    "en_def": "a popular style or practice, especially in clothing, footwear, or lifestyle",
    "sentence": "Baggy denim jeans were popular decades ago, but they have recently come back into {{BLANK}} again.",
    "cn": "寬鬆的牛仔褲幾十年前很受歡迎，但最近又重新回歸流行。"
  },
  {
    "word": "governor",
    "pos": "n.",
    "cn_def": "州長；總督；主管（可數）",
    "en_def": "the elected executive head of a state in the US, or ruler of a province",
    "sentence": "During the severe water drought, the state {{BLANK}} ordered all cities to restrict residential lawn watering.",
    "cn": "在嚴重的旱災期間，該州州長下令所有城市限制住宅草坪澆水。"
  },
  {
    "word": "harm",
    "pos": "v.",
    "cn_def": "傷害；損害；危害（動詞）",
    "en_def": "to cause physical injury, material damage, or negative consequences to",
    "sentence": "Excessive consumption of sugary energy drinks will gradually {{BLANK}} your teeth and digestive organs.",
    "cn": "過量飲用含糖能量飲料會逐漸損害你的牙齒和消化器官。"
  },
  {
    "word": "harm",
    "pos": "n.",
    "cn_def": "傷害；危害；損害（不可數）",
    "en_def": "physical injury, especially that which is deliberately inflicted, or damage",
    "sentence": "During the violent summer typhoon, the farmer moved his cattle into the sturdy barn to keep them out of {{BLANK}}'s way.",
    "cn": "在猛烈的夏季颱風期間，農夫將牛群移入堅固的牛棚，以確保牠們處於安全避險之地。"
  },
  {
    "word": "harmful",
    "pos": "adj.",
    "cn_def": "有害的；致害的",
    "en_def": "causing or likely to cause harm; damaging or dangerous",
    "sentence": "Medical research has conclusively proven that breathing secondhand tobacco smoke is highly {{BLANK}} to children's lungs.",
    "cn": "醫學研究已確鑿證實，吸入二手菸對兒童的肺部具有高度危害性／有害的。"
  },
  {
    "word": "harmless",
    "pos": "adj.",
    "cn_def": "無害的；無惡意的",
    "en_def": "not able or likely to cause harm, injury, or damage",
    "sentence": "Do not scream or run away from that small garden spider because it is completely {{BLANK}} to humans.",
    "cn": "不要對那隻小小的花園蜘蛛尖叫或逃跑，因為它對人類而言是完全無害的。"
  }
];

const MCQS = [
  {
    "q": "The fragile glass dish fell off the kitchen table and hit the tiled floor with a loud ______.",
    "options": [
      "dinosaur",
      "governor",
      "crash",
      "confirmation"
    ],
    "answer": 2,
    "cn": "易碎的玻璃盤從廚房桌子掉落，伴隨著一聲響亮的撞擊聲／碎裂聲摔在瓷磚地板上。",
    "vocabIndex": 2
  },
  {
    "q": "After booking the flight ticket online, you will receive an email ______ of your seat reservation.",
    "options": [
      "confirmation",
      "harm",
      "dinosaur",
      "crash"
    ],
    "answer": 0,
    "cn": "在線上預訂機票後，您將會收到一封座位預訂的電子郵件確認函。",
    "vocabIndex": 1
  },
  {
    "q": "Millions of years ago, giant ______ walked on the earth before they all died out.",
    "options": [
      "governors",
      "dinosaurs",
      "crashes",
      "fashions"
    ],
    "answer": 1,
    "cn": "數百萬年前，巨大的恐龍在全部滅絕之前漫步在地球上。",
    "vocabIndex": 4
  },
  {
    "q": "The art expert looked closely at the painting and discovered that it was not real, but a cheap ______.",
    "options": [
      "dinosaur",
      "governor",
      "confirmation",
      "fake"
    ],
    "answer": 3,
    "cn": "藝術專家仔細觀察了這幅畫，發現它不是真跡，而是一幅廉價的贗品。",
    "vocabIndex": 6
  },
  {
    "q": "During the severe winter blizzard, the state ______ closed all public schools and highways.",
    "options": [
      "dinosaur",
      "governor",
      "crash",
      "fashion"
    ],
    "answer": 1,
    "cn": "在嚴重的冬季暴風雪期間，該州州長關閉了所有公立學校和高速公路。",
    "vocabIndex": 10
  },
  {
    "q": "Baggy jeans and white sneakers were popular years ago and are now back in ______.",
    "options": [
      "dinosaur",
      "governor",
      "crash",
      "fashion"
    ],
    "answer": 3,
    "cn": "寬鬆牛仔褲和白球鞋多年前很流行，現在又重新回歸時尚流行。",
    "vocabIndex": 9
  },
  {
    "q": "Eating too much sweet candy will do great ______ to your teeth.",
    "options": [
      "confirmation",
      "dinosaur",
      "harm",
      "crash"
    ],
    "answer": 2,
    "cn": "吃太多甜糖果會對你的牙齒造成極大的損害／傷害。",
    "vocabIndex": 11
  },
  {
    "q": "The famous museum display features the skeleton of a huge ______ found in the desert.",
    "options": [
      "dinosaur",
      "governor",
      "confirmation",
      "crash"
    ],
    "answer": 0,
    "cn": "這家著名博物館的展覽以沙漠中發現的巨型恐龍骨骼為特色。",
    "vocabIndex": 4
  },
  {
    "q": "The bad driver caused a serious three-car ______ on the highway this morning.",
    "options": [
      "dinosaur",
      "crash",
      "governor",
      "fashion"
    ],
    "answer": 1,
    "cn": "那位不良駕駛今天早晨在高速公路上引起了一場嚴重的三車相撞事故。",
    "vocabIndex": 2
  },
  {
    "q": "Voters will go to the polling stations on Tuesday to choose their next state ______.",
    "options": [
      "governor",
      "dinosaur",
      "confirmation",
      "crash"
    ],
    "answer": 0,
    "cn": "選民們將在星期二前往投票所，選出他們的下一任州州長。",
    "vocabIndex": 10
  },
  {
    "q": "Please call the train station to ______ the departure time of the express train to Kaohsiung.",
    "options": [
      "harm",
      "crash",
      "confirm",
      "enable"
    ],
    "answer": 2,
    "cn": "請打電話給火車站，以確認前往高雄特快車的發車時間。",
    "vocabIndex": 0
  },
  {
    "q": "The careless driver did not see the red light and ______ his car into the back of a bus.",
    "options": [
      "enabled",
      "confirmed",
      "harmed",
      "crashed"
    ],
    "answer": 3,
    "cn": "那位粗心的駕駛沒有看見紅燈，把他的車撞上了公車的尾部。",
    "vocabIndex": 2
  },
  {
    "q": "Getting high grades on your final exams will ______ you to enter a prestigious university.",
    "options": [
      "crash",
      "harm",
      "enable",
      "confirm"
    ],
    "answer": 2,
    "cn": "在期末考試中取得高分將使你能夠進入頂尖名校。",
    "vocabIndex": 5
  },
  {
    "q": "Throwing toxic chemical waste into the river will seriously ______ the wild fish and plants.",
    "options": [
      "confirm",
      "harm",
      "crash",
      "enable"
    ],
    "answer": 1,
    "cn": "將有毒化學廢料倒入河中將會嚴重危害／損害野生魚類和植物。",
    "vocabIndex": 11
  },
  {
    "q": "The doctor did a blood test to ______ that the patient had completely recovered from the virus.",
    "options": [
      "confirm",
      "crash",
      "enable",
      "harm"
    ],
    "answer": 0,
    "cn": "醫生做了血液檢驗以證實／確認病人已完全從病毒中康復。",
    "vocabIndex": 0
  },
  {
    "q": "Whenever I try to open three big computer games at once, my old computer will ______.",
    "options": [
      "confirm",
      "enable",
      "harm",
      "crash"
    ],
    "answer": 3,
    "cn": "每當我試圖同時開啟三個大型電腦遊戲時，我的老電腦就會當機。",
    "vocabIndex": 2
  },
  {
    "q": "The bad man was sent to prison because he tried to ______ the rich president's signature on a paper.",
    "options": [
      "harm",
      "fake",
      "confirm",
      "enable"
    ],
    "answer": 1,
    "cn": "那個壞人被送進了監獄，因為他試圖在文件上偽造富商總裁的簽名。",
    "vocabIndex": 6
  },
  {
    "q": "This warm winter jacket is made of ______ fur, so no real animals were hurt to make it.",
    "options": [
      "harmful",
      "fashionable",
      "fake",
      "confirmed"
    ],
    "answer": 2,
    "cn": "這件保暖的冬季夾克是用仿造的／人造皮草製成的，因此沒有真正的動物受到傷害。",
    "vocabIndex": 6
  },
  {
    "q": "My older sister always wears ______ clothes and looks like a model in magazines.",
    "options": [
      "fashionable",
      "fake",
      "harmful",
      "harmless"
    ],
    "answer": 0,
    "cn": "我姊姊總是穿著時髦流行的衣服，看起來就像雜誌上的模特兒。",
    "vocabIndex": 8
  },
  {
    "q": "Smoking cigarettes is very ______ to your lungs and causes dangerous diseases.",
    "options": [
      "harmless",
      "fake",
      "fashionable",
      "harmful"
    ],
    "answer": 3,
    "cn": "吸菸對你的肺部非常有害，並且會引發危險的疾病。",
    "vocabIndex": 13
  },
  {
    "q": "Don't be afraid of that tiny garden spider because it is completely ______ to humans.",
    "options": [
      "harmful",
      "harmless",
      "fake",
      "fashionable"
    ],
    "answer": 1,
    "cn": "不要害怕那隻小小的花園蜘蛛，因為它對人類是完全無害的。",
    "vocabIndex": 14
  },
  {
    "q": "That popular boutique down the road sells very ______ dresses that young women love to wear.",
    "options": [
      "fake",
      "harmless",
      "harmful",
      "fashionable"
    ],
    "answer": 3,
    "cn": "路邊那家受歡迎的精品店販售許多年輕女性喜愛穿著的時髦洋裝。",
    "vocabIndex": 8
  },
  {
    "q": "This new medicine might taste a bit bitter, but the doctor says it will ______.",
    "options": [
      "do more good than harm",
      "crash into a tree",
      "keep out of harm's way",
      "be a complete fake"
    ],
    "answer": 0,
    "cn": "這種新藥嚐起來可能有點苦，但醫生說它絕對會利大於弊（好處多於壞處）。",
    "vocabIndex": 11
  },
  {
    "q": "When the dark storm clouds gathered, the mother took her kids home to ______.",
    "options": [
      "crash into a tree",
      "do more good than harm",
      "keep them out of harm's way",
      "make a fake smile"
    ],
    "answer": 2,
    "cn": "當烏雲密佈時，母親帶著孩子們回家以讓他們免受傷害／置於安全之處。"
  },
  {
    "q": "Smart shoppers must be careful because some websites sell luxury purses that are ______.",
    "options": [
      "out of harm's way",
      "doing more good than harm",
      "crashing into a tree",
      "an absolute fake"
    ],
    "answer": 3,
    "cn": "聰明的購物者必須小心，因為有些網站販售的奢華手提包完全是徹底的仿冒假貨。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "confirm": {
    "pos": "v.",
    "en_def": "to establish the truth or correctness of something; to make definite",
    "cn_def": "證實；確認；確定（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to establish the truth or correctness of something; to make definite",
        "cn_def": "證實；確認；確定（動詞）"
      }
    ]
  },
  "confirmation": {
    "pos": "n.",
    "en_def": "the action of confirming something, or proof that verifies a statement",
    "cn_def": "確認；證實；確認函（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of confirming something, or proof that verifies a statement",
        "cn_def": "確認；證實；確認函（不可數/可數）"
      }
    ]
  },
  "crashed": {
    "pos": "v.",
    "en_def": "to collide violently with an obstacle; of a computer to fail suddenly",
    "cn_def": "撞毀；墜毀；（電腦）當機（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to collide violently with an obstacle; of a computer to fail suddenly",
        "cn_def": "撞毀；墜毀；（電腦）當機（動詞）"
      }
    ]
  },
  "crash": {
    "pos": "v.",
    "en_def": "to collide violently with an obstacle; of a computer to fail suddenly",
    "cn_def": "撞毀；墜毀；（電腦）當機（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to collide violently with an obstacle; of a computer to fail suddenly",
        "cn_def": "撞毀；墜毀；（電腦）當機（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a violent collision or impact; a sudden economic collapse or loud noise",
        "cn_def": "撞車事故；墜機；暴跌；轟隆聲（可數）"
      }
    ]
  },
  "dinosaur": {
    "pos": "n.",
    "en_def": "an extinct prehistoric reptile; an outdated or obsolete person or thing",
    "cn_def": "恐龍；過時落伍的人事物（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an extinct prehistoric reptile; an outdated or obsolete person or thing",
        "cn_def": "恐龍；過時落伍的人事物（可數）"
      }
    ]
  },
  "enable": {
    "pos": "v.",
    "en_def": "to give someone the authority, means, or opportunity to do something",
    "cn_def": "使能夠；使可行；啟動（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone the authority, means, or opportunity to do something",
        "cn_def": "使能夠；使可行；啟動（動詞）"
      }
    ]
  },
  "fake": {
    "pos": "adj.",
    "en_def": "not genuine or authentic; fraudulent or imitation",
    "cn_def": "偽造的；冒牌的；假造的（形容詞）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not genuine or authentic; fraudulent or imitation",
        "cn_def": "偽造的；冒牌的；假造的（形容詞）"
      },
      {
        "pos": "n./v.",
        "en_def": "a forgery or counterfeit object (n.); to forge or pretend something (v.)",
        "cn_def": "贗品；騙子（名詞）；偽造；假裝（動詞）"
      }
    ]
  },
  "fashionable": {
    "pos": "adj.",
    "en_def": "characteristic of, influenced by, or representing a current popular style",
    "cn_def": "時髦的；流行的；時興的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "characteristic of, influenced by, or representing a current popular style",
        "cn_def": "時髦的；流行的；時興的"
      }
    ]
  },
  "fashion": {
    "pos": "n.",
    "en_def": "a popular style or practice, especially in clothing, footwear, or lifestyle",
    "cn_def": "流行；時尚；時裝（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a popular style or practice, especially in clothing, footwear, or lifestyle",
        "cn_def": "流行；時尚；時裝（可數/不可數）"
      }
    ]
  },
  "governor": {
    "pos": "n.",
    "en_def": "the elected executive head of a state in the US, or ruler of a province",
    "cn_def": "州長；總督；主管（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the elected executive head of a state in the US, or ruler of a province",
        "cn_def": "州長；總督；主管（可數）"
      }
    ]
  },
  "harm": {
    "pos": "v.",
    "en_def": "to cause physical injury, material damage, or negative consequences to",
    "cn_def": "傷害；損害；危害（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause physical injury, material damage, or negative consequences to",
        "cn_def": "傷害；損害；危害（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "physical injury, especially that which is deliberately inflicted, or damage",
        "cn_def": "傷害；危害；損害（不可數）"
      }
    ]
  },
  "harmful": {
    "pos": "adj.",
    "en_def": "causing or likely to cause harm; damaging or dangerous",
    "cn_def": "有害的；致害的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing or likely to cause harm; damaging or dangerous",
        "cn_def": "有害的；致害的"
      }
    ]
  },
  "harmless": {
    "pos": "adj.",
    "en_def": "not able or likely to cause harm, injury, or damage",
    "cn_def": "無害的；無惡意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able or likely to cause harm, injury, or damage",
        "cn_def": "無害的；無惡意的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
