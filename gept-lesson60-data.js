// Lesson 60 Quiz Data: Visual Arts, Monetary Currency, Household Income & Commercial Fees
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 60 - Visual Arts, Monetary Currency, Household Income & Commercial Fees",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "photograph",
    "pos": "n. / v.",
    "cn_def": "照片；相片；攝影",
    "en_def": "a picture made using a camera; to take a picture",
    "sentence": "The tourist asked a friendly passerby to take a {{BLANK}} of his family standing in front of Taipei 101.",
    "cn": "這位遊客請一位好心的路人幫他站在台北101前面的家人拍一張______。"
  },
  {
    "word": "picture",
    "pos": "n. / v.",
    "cn_def": "圖片；畫像；照片",
    "en_def": "a visual representation of something produced on a surface; photo",
    "sentence": "The children drew a colorful {{BLANK}} of a green dragon and pinned it proudly to the classroom art board.",
    "cn": "孩子們畫了一張綠色飛龍的彩色______，並自豪地用圖釘釘在教室的藝術展示欄上。"
  },
  {
    "word": "painting",
    "pos": "n.",
    "cn_def": "油畫；繪畫；畫作",
    "en_def": "the action or skill of using paint; a painted picture",
    "sentence": "The national art gallery purchased an expensive oil {{BLANK}} painted by a renowned eighteenth-century European master.",
    "cn": "國家美術館購買了一幅由十八世紀著名的歐洲繪畫大師所創作的昂貴油畫______。"
  },
  {
    "word": "crayon",
    "pos": "n.",
    "cn_def": "蠟筆",
    "en_def": "a pencil or stick of colored chalk or wax, used for drawing",
    "sentence": "Little Emma opened her brand-new box of wax {{BLANK}}ss and began coloring the sunshine bright golden yellow.",
    "cn": "小艾瑪打開了她嶄新的蠟______盒，開始將陽光塗成鮮豔的金黃色。"
  },
  {
    "word": "bill",
    "pos": "n.",
    "cn_def": "帳單；紙鈔；法案",
    "en_def": "a printed statement of the money owed for goods or services; paper money",
    "sentence": "After finishing our delicious Italian dinner, father asked the polite waiter to bring our dinner {{BLANK}}.",
    "cn": "在享用完美味的義大利晚餐後，父親請有禮貌的服務生送上我們的晚餐______。"
  },
  {
    "word": "cash",
    "pos": "n. / v.",
    "cn_def": "現金；兌現",
    "en_def": "money in coins or notes, as distinct from checks, credit cards, or debt",
    "sentence": "The night market stall only accepts payment in {{BLANK}}, so tourists should carry sufficient coins and paper notes.",
    "cn": "夜市攤位只接受用______付款，因此遊客應該隨身攜帶足夠的硬幣與紙鈔。"
  },
  {
    "word": "coin",
    "pos": "n. / v.",
    "cn_def": "硬幣；投幣",
    "en_def": "a flat, typically round piece of metal with an official stamp, used as money",
    "sentence": "I dropped a ten-dollar metal {{BLANK}} into the vending machine, and a can of cold green tea dropped into the tray.",
    "cn": "我將一枚十元金屬______投入販賣機，一罐冰綠茶隨即便掉進托盤中。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入；所得",
    "en_def": "money received, especially on a regular basis, for work or investments",
    "sentence": "A progressive tax system requires families with higher annual {{BLANK}} to pay a larger proportion of their earnings in tax.",
    "cn": "累進稅率制度要求每年有較高______的家庭繳納其薪資所得中較大比例的稅款。"
  },
  {
    "word": "charge",
    "pos": "n. / v.",
    "cn_def": "費用；收費；控告；衝鋒",
    "en_def": "a price asked for goods or services; to demand an amount",
    "sentence": "The hotel provides free Wi-Fi internet access to all guests without any additional hourly {{BLANK}}.",
    "cn": "這家飯店向所有住客提供免費無線網路連線服務，完全不收任何額外的每小時______。"
  },
  {
    "word": "fee",
    "pos": "n.",
    "cn_def": "規費；手續費；學雜費",
    "en_def": "a payment made to a professional person or institution for advice or services",
    "sentence": "University students must pay their tuition {{BLANK}} at the bank before the first week of classes begins.",
    "cn": "大學生必須在開學第一週上課開始前，至銀行繳清他們的學雜______。"
  }
];

const MCQS = [
  {
    "q": "During our vacation in Rome, we took an unforgettable black-and-white ______ in front of the Colosseum.",
    "options": [
      "crayon",
      "photograph",
      "bill",
      "coin"
    ],
    "answer": 1,
    "cn": "在羅馬度假期間，我們在羅馬競技場前拍了一張難忘的黑白照片。 【選項解析】(A) photograph 照片 (B) crayon 蠟筆 (C) bill 帳單 (D) coin 硬幣。拍黑白照片為 black-and-white photograph。",
    "vocabIndex": 0
  },
  {
    "q": "The illustrated children's book contains a charming ______ on every page to accompany the simple fairy tale.",
    "options": [
      "fee",
      "income",
      "cash",
      "picture"
    ],
    "answer": 3,
    "cn": "這本有插畫的童書每一頁都配有一幅迷人的插圖，伴隨著簡單的童話故事。 【選項解析】(A) fee 規費 (B) picture 插圖 (C) cash 現金 (D) income 收入。書中插圖為 picture。",
    "vocabIndex": 1
  },
  {
    "q": "The museum security guards stood watch beside the priceless oil ______, ensuring that no visitors touched the canvas.",
    "options": [
      "painting",
      "coin",
      "bill",
      "fee"
    ],
    "answer": 0,
    "cn": "博物館警衛守在價值連城的油畫畫作旁，確保沒有任何遊客觸碰畫布。 【選項解析】(A) bill 帳單 (B) coin 硬幣 (C) painting 油畫 (D) fee 費用。畫布上的油畫為 oil painting。",
    "vocabIndex": 2
  },
  {
    "q": "The kindergarten teacher handed each child a box of colored ______s to draw self-portraits on craft paper.",
    "options": [
      "coins",
      "bills",
      "crayons",
      "fees"
    ],
    "answer": 2,
    "cn": "幼兒園老師遞給每個孩子一盒彩色蠟筆，讓他們在手工紙上畫自畫像。 【選項解析】(A) crayons 蠟筆 (B) bills 鈔票 (C) coins 硬幣 (D) fees 規費。畫畫工具為 colored crayons。",
    "vocabIndex": 3
  },
  {
    "q": "When the electricity ______ arrived in the mailbox, father was pleased to see our power consumption had dropped.",
    "options": [
      "painting",
      "bill",
      "coin",
      "photograph"
    ],
    "answer": 1,
    "cn": "當電費帳單寄到信箱時，父親很高興地看到我們的用電量有所下降。 【選項解析】(A) painting 畫作 (B) coin 硬幣 (C) bill 帳單 (D) photograph 相片。電費帳單為 electricity bill。",
    "vocabIndex": 4
  },
  {
    "q": "Many small street vendors do not accept mobile payments, so it is always wise to carry some ______ in your wallet.",
    "options": [
      "picture",
      "painting",
      "cash",
      "crayon"
    ],
    "answer": 2,
    "cn": "許多街頭小攤販不接受手機行動支付，因此皮夾裡放些現金總是明智的做法。 【選項解析】(A) picture 圖片 (B) cash 現金 (C) painting 繪畫 (D) crayon 蠟筆。不支援行動支付需用 cash。",
    "vocabIndex": 5
  },
  {
    "q": "He flipped a silver ______ into the air to decide which of the two soccer teams would kick off first.",
    "options": [
      "coin",
      "bill",
      "fee",
      "painting"
    ],
    "answer": 0,
    "cn": "他將一枚銀色硬幣拋向空中，以決定兩支足球隊哪一方先開球。 【選項解析】(A) coin 硬幣 (B) bill 鈔票 (C) fee 費用 (D) painting 畫作。擲硬幣決定開球為 flip a coin。",
    "vocabIndex": 6
  },
  {
    "q": "The government introduced job training programs to help low-______ families improve their living standards.",
    "options": [
      "fee",
      "crayon",
      "photograph",
      "income"
    ],
    "answer": 3,
    "cn": "政府推出了職業培訓計畫，以協助低收入家庭改善生活水平。 【選項解析】(A) fee 規費 (B) crayon 蠟筆 (C) income 收入 (D) photograph 相片。低收入家庭為 low-income families。",
    "vocabIndex": 7
  },
  {
    "q": "The boutique hotel offers complimentary shuttle bus service to the airport at no extra ______ to registered guests.",
    "options": [
      "charge",
      "coin",
      "painting",
      "crayon"
    ],
    "answer": 0,
    "cn": "這家精品飯店向登記住客提供前往機場的免費接駁車服務，不另加收費用。 【選項解析】(A) charge 費用 (B) coin 硬幣 (C) painting 畫作 (D) crayon 蠟筆。不另加收費用為 at no extra charge。",
    "vocabIndex": 8
  },
  {
    "q": "Before registering for the marathon, participants must submit an online application and pay an entry ______.",
    "options": [
      "photograph",
      "picture",
      "fee",
      "coin"
    ],
    "answer": 2,
    "cn": "在報名參加馬拉松之前，參賽者必須提交線上申請並繳納報名費用。 【選項解析】(A) photograph 照片 (B) fee 規費 (C) picture 圖片 (D) coin 硬幣。參賽報名費為 entry fee。",
    "vocabIndex": 9
  },
  {
    "q": "Professional wedding photographers take hundreds of high-resolution digital ______s during the ceremony.",
    "options": [
      "coins",
      "photographs",
      "bills",
      "crayons"
    ],
    "answer": 1,
    "cn": "專業婚禮攝影師在儀式過程中拍攝了數百張高解析度的數位照片。 【選項解析】(A) photographs 照片 (B) coins 硬幣 (C) bills 帳單 (D) crayons 蠟筆。攝影作品為 digital photographs。",
    "vocabIndex": 0
  },
  {
    "q": "Can you help me hang this framed landscape ______ straight on the living room wall above the fireplace?",
    "options": [
      "fee",
      "income",
      "cash",
      "picture"
    ],
    "answer": 3,
    "cn": "你能幫我將這幅裝框的風景畫平整地掛在壁爐上方的客廳牆壁上嗎？ 【選項解析】(A) fee 規費 (B) picture 圖片 (C) cash 現金 (D) income 收入。裝框風景畫為 framed landscape picture。",
    "vocabIndex": 1
  },
  {
    "q": "The famous Impressionist ______ depicts water lilies floating peacefully upon a sunlit pond in rural France.",
    "options": [
      "coin",
      "painting",
      "fee",
      "bill"
    ],
    "answer": 1,
    "cn": "這幅著名的印象派油畫描繪了法國鄉村陽光照耀的池塘上靜靜漂浮的睡蓮。 【選項解析】(A) coin 硬幣 (B) fee 規費 (C) painting 油畫 (D) bill 帳單。莫內名畫為 Impressionist painting。",
    "vocabIndex": 2
  },
  {
    "q": "The toddler used a green wax ______ to scribble all over the bedroom wall before his parents could stop him.",
    "options": [
      "coin",
      "bill",
      "crayon",
      "fee"
    ],
    "answer": 2,
    "cn": "那個蹣跚學步的幼童在父母阻止前，用綠色蠟筆在臥室牆上塗鴉亂畫。 【選項解析】(A) crayon 蠟筆 (B) bill 帳單 (C) coin 硬幣 (D) fee 費用。塗鴉用 wax crayon。",
    "vocabIndex": 3
  },
  {
    "q": "The waiter brought the restaurant ______ in a small leather folder after we finished our coffee and dessert.",
    "options": [
      "bill",
      "painting",
      "photograph",
      "coin"
    ],
    "answer": 0,
    "cn": "在我們喝完咖啡與甜點後，服務生將餐廳結帳單夾在一個小皮夾中送過來。 【選項解析】(A) photograph 相片 (B) painting 畫作 (C) bill 帳單 (D) coin 硬幣。餐廳帳單為 restaurant bill。",
    "vocabIndex": 4
  },
  {
    "q": "Automated teller machines allow bank customers to withdraw paper ______ at any hour of the day or night.",
    "options": [
      "painting",
      "crayon",
      "picture",
      "cash"
    ],
    "answer": 3,
    "cn": "自動提款機讓銀行客戶在晝夜任何時刻都能提領紙幣現金。 【選項解析】(A) cash 現金 (B) crayon 蠟筆 (C) picture 圖片 (D) painting 畫作。領取現鈔為 withdraw cash。",
    "vocabIndex": 5
  },
  {
    "q": "Ancient Greek ______s were stamped with the proud image of an owl, the sacred bird of Athena.",
    "options": [
      "coins",
      "bills",
      "fees",
      "paintings"
    ],
    "answer": 0,
    "cn": "古希臘硬幣上鑄壓著貓頭鷹的驕傲形象，貓頭鷹是雅典娜女神的聖鳥。 【選項解析】(A) coins 硬幣 (B) bills 鈔票 (C) fees 費用 (D) paintings 畫作。金屬錢幣為 ancient coins。",
    "vocabIndex": 6
  },
  {
    "q": "Highly educated professionals like surgeons and corporate lawyers generally command a very high annual ______.",
    "options": [
      "crayon",
      "income",
      "picture",
      "photograph"
    ],
    "answer": 1,
    "cn": "外科醫生與企業律師等高學歷專業人士，通常享有非常高的年收入所得。 【選項解析】(A) crayon 蠟筆 (B) picture 圖片 (C) income 收入 (D) photograph 相片。年薪所得為 annual income。",
    "vocabIndex": 7
  },
  {
    "q": "There is a nominal delivery ______ of five dollars if your online grocery order totals less than thirty dollars.",
    "options": [
      "painting",
      "coin",
      "charge",
      "crayon"
    ],
    "answer": 2,
    "cn": "如果你的線上生鮮訂單總額少於三十美元，則需酌收五美元的運送費用。 【選項解析】(A) charge 費用 (B) coin 硬幣 (C) painting 畫作 (D) crayon 蠟筆。運送外加費用為 delivery charge。",
    "vocabIndex": 8
  },
  {
    "q": "Real estate agents typically receive a commission ______ equal to a percentage of the final home sale price.",
    "options": [
      "photograph",
      "coin",
      "picture",
      "fee"
    ],
    "answer": 3,
    "cn": "不動產房屋仲介通常會收取相當於最終房屋售價一定百分比的佣金服務費。 【選項解析】(A) photograph 照片 (B) fee 規費 (C) picture 圖片 (D) coin 硬幣。佣金服務費為 commission fee。",
    "vocabIndex": 9
  },
  {
    "q": "The family kept an old photo album filled with vintage ______s showing life in rural Taiwan during the 1960s.",
    "options": [
      "bills",
      "coins",
      "photographs",
      "crayons"
    ],
    "answer": 2,
    "cn": "這個家庭保存了一本裝滿老照片的相簿，記錄了1960年代台灣農村的生活。 【選項解析】(A) photographs 照片 (B) coins 硬幣 (C) bills 帳單 (D) crayons 蠟筆。相簿中的相片為 vintage photographs。",
    "vocabIndex": 0
  },
  {
    "q": "The magazine article was accompanied by a colorful graphic ______ summarizing recent population growth trends.",
    "options": [
      "cash",
      "fee",
      "income",
      "picture"
    ],
    "answer": 3,
    "cn": "該雜誌文章配有一幅色彩斑斕的圖解圖畫，概括了近期的人口增長趨勢。 【選項解析】(A) cash 現金 (B) fee 規費 (C) picture 插圖 (D) income 收入。雜誌配圖為 graphic picture。",
    "vocabIndex": 1
  },
  {
    "q": "The art collector spent over a million dollars at the London auction to acquire the rare watercolor ______.",
    "options": [
      "painting",
      "coin",
      "fee",
      "bill"
    ],
    "answer": 0,
    "cn": "該藝術收藏家在倫敦拍賣會上耗資逾百萬美元，購得了這幅罕見的水彩畫作。 【選項解析】(A) coin 硬幣 (B) painting 畫作 (C) fee 規費 (D) bill 帳單。水彩畫為 watercolor painting。",
    "vocabIndex": 2
  },
  {
    "q": "Would you prefer to settle your hotel bill using a credit card, or would you rather pay with paper ______?",
    "options": [
      "crayon",
      "cash",
      "picture",
      "painting"
    ],
    "answer": 1,
    "cn": "您希望使用信用卡結清飯店帳單，還是您比較想用紙幣現金付款？ 【選項解析】(A) cash 現金 (B) crayon 蠟筆 (C) picture 圖片 (D) painting 畫作。以現金付款為 pay with cash。",
    "vocabIndex": 5
  },
  {
    "q": "Museum admission is free for children under six years old, but adult visitors must pay an entrance ______.",
    "options": [
      "photograph",
      "coin",
      "picture",
      "fee"
    ],
    "answer": 3,
    "cn": "六歲以下兒童可免費進入博物館參觀，但成年參訪者必須繳納入場門票費。 【選項解析】(A) fee 門票 (B) coin 硬幣 (C) picture 圖片 (D) photograph 相片。入場門票為 entrance fee。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "photograph": {
    "pos": "n. / v.",
    "en_def": "a picture made using a camera; to take a picture",
    "cn_def": "照片；相片；攝影",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a picture made using a camera; to take a picture",
        "cn_def": "照片；相片；攝影"
      }
    ]
  },
  "picture": {
    "pos": "n. / v.",
    "en_def": "a visual representation of something produced on a surface; photo",
    "cn_def": "圖片；畫像；照片",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a visual representation of something produced on a surface; photo",
        "cn_def": "圖片；畫像；照片"
      }
    ]
  },
  "painting": {
    "pos": "n.",
    "en_def": "the action or skill of using paint; a painted picture",
    "cn_def": "油畫；繪畫；畫作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action or skill of using paint; a painted picture",
        "cn_def": "油畫；繪畫；畫作"
      }
    ]
  },
  "crayon": {
    "pos": "n.",
    "en_def": "a pencil or stick of colored chalk or wax, used for drawing",
    "cn_def": "蠟筆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a pencil or stick of colored chalk or wax, used for drawing",
        "cn_def": "蠟筆"
      }
    ]
  },
  "bill": {
    "pos": "n.",
    "en_def": "a printed statement of the money owed for goods or services; paper money",
    "cn_def": "帳單；紙鈔；法案",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a printed statement of the money owed for goods or services; paper money",
        "cn_def": "帳單；紙鈔；法案"
      }
    ]
  },
  "cash": {
    "pos": "n. / v.",
    "en_def": "money in coins or notes, as distinct from checks, credit cards, or debt",
    "cn_def": "現金；兌現",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "money in coins or notes, as distinct from checks, credit cards, or debt",
        "cn_def": "現金；兌現"
      }
    ]
  },
  "coin": {
    "pos": "n. / v.",
    "en_def": "a flat, typically round piece of metal with an official stamp, used as money",
    "cn_def": "硬幣；投幣",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a flat, typically round piece of metal with an official stamp, used as money",
        "cn_def": "硬幣；投幣"
      }
    ]
  },
  "income": {
    "pos": "n.",
    "en_def": "money received, especially on a regular basis, for work or investments",
    "cn_def": "收入；所得",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money received, especially on a regular basis, for work or investments",
        "cn_def": "收入；所得"
      }
    ]
  },
  "charge": {
    "pos": "n. / v.",
    "en_def": "a price asked for goods or services; to demand an amount",
    "cn_def": "費用；收費；控告；衝鋒",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a price asked for goods or services; to demand an amount",
        "cn_def": "費用；收費；控告；衝鋒"
      }
    ]
  },
  "fee": {
    "pos": "n.",
    "en_def": "a payment made to a professional person or institution for advice or services",
    "cn_def": "規費；手續費；學雜費",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a payment made to a professional person or institution for advice or services",
        "cn_def": "規費；手續費；學雜費"
      }
    ]
  },
  "coins": {
    "pos": "",
    "en_def": "",
    "cn_def": "硬幣",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "硬幣"
      }
    ]
  },
  "bills": {
    "pos": "",
    "en_def": "",
    "cn_def": "鈔票",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "鈔票"
      }
    ]
  },
  "crayons": {
    "pos": "",
    "en_def": "",
    "cn_def": "蠟筆",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蠟筆"
      }
    ]
  },
  "fees": {
    "pos": "",
    "en_def": "",
    "cn_def": "規費",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "規費"
      }
    ]
  },
  "photographs": {
    "pos": "",
    "en_def": "",
    "cn_def": "照片",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "照片"
      }
    ]
  },
  "paintings": {
    "pos": "",
    "en_def": "",
    "cn_def": "畫作",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "畫作"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
