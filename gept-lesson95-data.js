// Lesson 95 Quiz Data: International Commerce, Manufacturing Quality, Consumer Feedback & Statistical Trends
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 95 - International Commerce, Manufacturing Quality, Consumer Feedback & Statistical Trends",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "export",
    "pos": "v. / n.",
    "cn_def": "出口；外銷",
    "en_def": "to send goods to another country for sale; goods sold abroad",
    "sentence": "Taiwanese technology factories {{BLANK}} millions of advanced computer chips to international markets every year.",
    "cn": "台灣科技廠每年外銷數百萬顆先進電腦晶片至國際市場。"
  },
  {
    "word": "import",
    "pos": "v. / n.",
    "cn_def": "進口；輸入",
    "en_def": "to bring goods into a country from abroad to sell; goods bought from abroad",
    "sentence": "Because this island nation has limited natural petroleum reserves, it must {{BLANK}} most of its crude oil.",
    "cn": "因為這座島國的天然石油儲量有限，它必須進口大部分的原油。"
  },
  {
    "word": "product",
    "pos": "n.",
    "cn_def": "產品；製品",
    "en_def": "something that is made or grown to be sold",
    "sentence": "The software company launched an innovative new {{BLANK}} that helps high school students practice spoken English.",
    "cn": "這家軟體公司推出了一款創新的新產品，幫助高中生練習英語口說。"
  },
  {
    "word": "quality",
    "pos": "n.",
    "cn_def": "品質；特質",
    "en_def": "how good or bad something is; a characteristic",
    "sentence": "Consumers are willing to pay higher prices for handmade shoes because of their superior leather {{BLANK}}.",
    "cn": "消費者願意為手工鞋支付較高價格，因為其皮革品質卓越。"
  },
  {
    "word": "control",
    "pos": "n. / v.",
    "cn_def": "控制；管理；管制",
    "en_def": "the power to direct or manage something; to regulate",
    "sentence": "During heavy weekend traffic, automated electronic systems help {{BLANK}} vehicle speeds on the highway.",
    "cn": "在週末繁忙的車流中，自動化電子系統協助控制高速公路上的車速。"
  },
  {
    "word": "complain",
    "pos": "v.",
    "cn_def": "抱怨；發牢騷",
    "en_def": "to say that something is wrong or not satisfactory",
    "sentence": "Dozens of train passengers went to the service counter to {{BLANK}} about the two-hour departure delay.",
    "cn": "數十名火車乘客前往服務台抱怨發車延誤兩小時。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand by giving details",
    "sentence": "The science teacher used colorful physical models to {{BLANK}} how the solar system orbits around the sun.",
    "cn": "自然老師使用色彩繽紛的實體模型來解釋太陽系如何圍繞太陽公轉。"
  },
  {
    "word": "argue",
    "pos": "v.",
    "cn_def": "爭論；爭辯",
    "en_def": "to speak angrily to someone because you disagree; to give reasons for or against",
    "sentence": "The two business partners began to {{BLANK}} loudly over budget allocations during the morning board meeting.",
    "cn": "兩位商業夥伴在早晨董事會議期間開始為了預算分配大聲爭辯。"
  },
  {
    "word": "increase",
    "pos": "v. / n.",
    "cn_def": "增加；增長",
    "en_def": "to become larger in amount, number, or degree; a rise",
    "sentence": "Regular physical exercise and healthy nutrition will significantly {{BLANK}} your energy levels throughout the workday.",
    "cn": "規律的身體運動與健康的營養將在整個工作日內顯著增加你的活力水平。"
  },
  {
    "word": "decrease",
    "pos": "v. / n.",
    "cn_def": "減少；降低",
    "en_def": "to become less or to make something become less; a reduction",
    "sentence": "Installing energy-efficient LED light bulbs will dramatically {{BLANK}} monthly electricity bills for schools.",
    "cn": "安裝節能 LED 燈泡將大幅降低學校的每月電費支出。"
  }
];

const MCQS = [
  {
    "q": "High technology firms in Hsinchu Science Park ______ advanced electronic equipment to clients around the globe.",
    "options": [
      "explain",
      "complain",
      "export",
      "argue"
    ],
    "answer": 2,
    "cn": "新竹科學園區的高科技公司向全球客戶出口先進的電子設備。 【選項解析】(A) explain 解釋  (B) export 出口  (C) complain 抱怨  (D) argue 爭論。export to international markets 表「出口到國際市場」。",
    "vocabIndex": 0
  },
  {
    "q": "Taiwan does not produce sufficient wheat locally, so food companies must ______ large quantities from North America.",
    "options": [
      "argue",
      "complain",
      "explain",
      "import"
    ],
    "answer": 3,
    "cn": "台灣本地無法生產足夠的小麥，因此食品公司必須從北美進口大量小麥。 【選項解析】(A) import 進口  (B) complain 抱怨  (C) explain 解釋  (D) argue 爭執。import from abroad 表「從國外進口」。",
    "vocabIndex": 1
  },
  {
    "q": "The new skincare ______ received wonderful reviews from customers because it contains all-natural plant extracts.",
    "options": [
      "product",
      "control",
      "quality",
      "increase"
    ],
    "answer": 0,
    "cn": "這款新護膚產品獲得了顧客的極佳評價，因為它含有全天然植物萃取物。 【選項解析】(A) control 控制  (B) product 產品  (C) quality 品質  (D) increase 增加。skincare product 表「護膚產品」。",
    "vocabIndex": 2
  },
  {
    "q": "Before products leave the assembly line, factory inspectors check each item carefully to ensure top ______.",
    "options": [
      "increase",
      "quality",
      "control",
      "product"
    ],
    "answer": 1,
    "cn": "在產品離開裝配線之前，工廠檢驗員仔細檢查每件物品以確保頂級品質。 【選項解析】(A) increase 增加  (B) control 控制  (C) quality 品質  (D) product 產品。ensure top quality 表「確保最高品質」。",
    "vocabIndex": 3
  },
  {
    "q": "The pilot struggled to maintain ______ of the light aircraft when violent crosswinds hit during landing.",
    "options": [
      "quality",
      "product",
      "control",
      "increase"
    ],
    "answer": 2,
    "cn": "降落時遭遇強烈側風襲擊，飛行員奮力維持輕型飛機的操控。 【選項解析】(A) control 控制  (B) product 產品  (C) quality 品質  (D) increase 增加。maintain control of 表「維持對…的控制」。",
    "vocabIndex": 4
  },
  {
    "q": "Dissatisfied hotel guests called the front desk to ______ about the lack of hot water in their bathrooms.",
    "options": [
      "argue",
      "explain",
      "export",
      "complain"
    ],
    "answer": 3,
    "cn": "感到不滿的飯店房客打電話給櫃台，抱怨浴室裡沒有熱水。 【選項解析】(A) argue 爭辯  (B) explain 解釋  (C) complain 抱怨  (D) export 出口。complain about 表「抱怨…」。",
    "vocabIndex": 5
  },
  {
    "q": "Could you please ______ this complicated grammar rule once again so the whole class can understand it?",
    "options": [
      "export",
      "explain",
      "argue",
      "import"
    ],
    "answer": 1,
    "cn": "能否請你把這條複雜的文法規則再解釋一遍，讓全班都能聽懂？ 【選項解析】(A) explain 解釋  (B) export 出口  (C) argue 爭論  (D) import 進口。explain grammar rule 表「解釋文法規則」。",
    "vocabIndex": 6
  },
  {
    "q": "The stubborn brothers always ______ about who should wash the dinner dishes after family meals on Sunday.",
    "options": [
      "argue",
      "import",
      "export",
      "explain"
    ],
    "answer": 0,
    "cn": "這對頑固的兄弟在週日全家用餐後，總是為了誰該洗晚餐碗盤而大聲爭執。 【選項解析】(A) export 出口  (B) import 進口  (C) argue 爭論  (D) explain 解釋。argue about who should wash dishes 表「為了誰該洗碗而爭吵」。",
    "vocabIndex": 7
  },
  {
    "q": "Government statistics show that the number of foreign tourists visiting Taiwan will ______ steadily this winter.",
    "options": [
      "complain",
      "argue",
      "increase",
      "explain"
    ],
    "answer": 2,
    "cn": "政府統計數據顯示，今年冬季來台觀光的外國遊客人數將會穩定增加。 【選項解析】(A) complain 抱怨  (B) argue 爭辯  (C) explain 解釋  (D) increase 增加。increase steadily 表「穩定增長」。",
    "vocabIndex": 8
  },
  {
    "q": "Eating less processed sugar and exercising regularly will help ______ the risk of developing diabetes.",
    "options": [
      "export",
      "argue",
      "complain",
      "decrease"
    ],
    "answer": 3,
    "cn": "少吃精緻糖類並定期運動將有助於降低罹患糖尿病的風險。 【選項解析】(A) export 出口  (B) decrease 降低  (C) complain 抱怨  (D) argue 爭辯。decrease the risk 表「降低風險」。",
    "vocabIndex": 9
  },
  {
    "q": "Agricultural cooperatives in southern Taiwan ______ sweet mangoes and fresh pineapples to Japan every summer.",
    "options": [
      "explain",
      "export",
      "complain",
      "argue"
    ],
    "answer": 1,
    "cn": "南台灣的農業合作社每年夏天都向日本外銷香甜芒果與新鮮鳳梨。 【選項解析】(A) export 出口  (B) explain 解釋  (C) complain 抱怨  (D) argue 爭辯。export fruit to Japan 表「外銷水果至日本」。",
    "vocabIndex": 0
  },
  {
    "q": "Due to freezing winter weather, local markets had to ______ fresh vegetables from neighboring southern regions.",
    "options": [
      "import",
      "complain",
      "argue",
      "explain"
    ],
    "answer": 0,
    "cn": "由於嚴寒冬日氣候，在地市場不得不從鄰近的南部地區輸入新鮮蔬菜。 【選項解析】(A) complain 抱怨  (B) import 進口  (C) argue 爭辯  (D) explain 解釋。import from neighboring regions 表「自鄰近地區輸入」。",
    "vocabIndex": 1
  },
  {
    "q": "The company's most popular consumer ______ is a lightweight waterproof backpack designed for outdoor hiking.",
    "options": [
      "quality",
      "product",
      "increase",
      "control"
    ],
    "answer": 1,
    "cn": "該公司最受歡迎的消費產品是一款專為戶外健行設計的輕量防水背包。 【選項解析】(A) quality 品質  (B) increase 增加  (C) product 產品  (D) control 控制。consumer product 表「消費產品」。",
    "vocabIndex": 2
  },
  {
    "q": "Japanese audio equipment is internationally famous for its remarkable sound clarity and manufacturing ______.",
    "options": [
      "increase",
      "control",
      "product",
      "quality"
    ],
    "answer": 3,
    "cn": "日本音響設備以其非凡的聲音清晰度與製造品質在國際上聞名遐邇。 【選項解析】(A) increase 增加  (B) quality 品質  (C) product 產品  (D) control 控制。manufacturing quality 表「製造品質」。",
    "vocabIndex": 3
  },
  {
    "q": "Parents should monitor and set reasonable limits to ______ how much time young children spend playing video games.",
    "options": [
      "complain",
      "export",
      "control",
      "argue"
    ],
    "answer": 2,
    "cn": "家長應監督並設定合理界線，以管控幼童玩電玩遊戲的時間。 【選項解析】(A) control 控制  (B) export 出口  (C) complain 抱怨  (D) argue 爭論。control screen time 表「管控使用螢幕時間」。",
    "vocabIndex": 4
  },
  {
    "q": "It is completely useless to ______ about bad weather, so we might as well make the best of a rainy afternoon.",
    "options": [
      "complain",
      "explain",
      "export",
      "argue"
    ],
    "answer": 0,
    "cn": "抱怨惡劣天氣是完全徒勞無功的，我們還不如在下雨午後隨遇而安。 【選項解析】(A) argue 爭吵  (B) explain 解釋  (C) export 出口  (D) complain 抱怨。complain about bad weather 表「抱怨天氣差」。",
    "vocabIndex": 5
  },
  {
    "q": "The financial advisor took time to ______ various retirement savings plans to the young couple in detail.",
    "options": [
      "import",
      "export",
      "argue",
      "explain"
    ],
    "answer": 3,
    "cn": "財務顧問撥出時間向這對年輕夫婦詳細說明各種退休儲蓄方案。 【選項解析】(A) explain 說明  (B) export 出口  (C) argue 爭論  (D) import 進口。explain savings plans 表「說明儲蓄方案」。",
    "vocabIndex": 6
  },
  {
    "q": "Lawyers on both sides began to ______ passionately about the validity of the new evidence presented in court.",
    "options": [
      "export",
      "argue",
      "import",
      "explain"
    ],
    "answer": 1,
    "cn": "雙方律師在法庭上開始就所呈新證據的有效性展開激烈辯論。 【選項解析】(A) export 出口  (B) argue 辯論  (C) import 進口  (D) explain 說明。argue about validity 表「就有效性展開辯論」。",
    "vocabIndex": 7
  },
  {
    "q": "Rising global fuel prices will inevitably ______ international airline ticket costs for holiday travelers.",
    "options": [
      "increase",
      "argue",
      "complain",
      "explain"
    ],
    "answer": 0,
    "cn": "全球燃料價格上漲勢必會增加度假旅客的國際機票費用成本。 【選項解析】(A) complain 抱怨  (B) argue 爭執  (C) increase 增加  (D) explain 解釋。increase ticket costs 表「增加機票成本」。",
    "vocabIndex": 8
  },
  {
    "q": "As autumn turns into cold winter, daylight hours gradually ______ across the northern hemisphere.",
    "options": [
      "export",
      "import",
      "decrease",
      "complain"
    ],
    "answer": 2,
    "cn": "隨著秋去冬來，北半球各地的白晝時間逐漸縮短減少。 【選項解析】(A) export 出口  (B) import 進口  (C) complain 抱怨  (D) decrease 減少。daylight hours decrease 表「白晝時間減少」。",
    "vocabIndex": 9
  },
  {
    "q": "Taiwan continues to ______ high-precision bicycle components to cycling enthusiasts throughout Europe.",
    "options": [
      "explain",
      "export",
      "complain",
      "argue"
    ],
    "answer": 1,
    "cn": "台灣持續向全歐洲的自行車愛好者外銷高精度自行車零件。 【選項解析】(A) explain 解釋  (B) export 外銷  (C) complain 抱怨  (D) argue 爭論。export components 表「外銷零組件」。",
    "vocabIndex": 0
  },
  {
    "q": "Because local coffee production cannot meet domestic demand, cafes must ______ specialty beans from Colombia.",
    "options": [
      "import",
      "complain",
      "explain",
      "argue"
    ],
    "answer": 0,
    "cn": "因為本土咖啡產量無法滿足國內需求，咖啡館必須從哥倫比亞進口精品豆。 【選項解析】(A) import 進口  (B) complain 抱怨  (C) explain 解釋  (D) argue 爭辯。import specialty beans 表「進口精品豆」。",
    "vocabIndex": 1
  },
  {
    "q": "The latest electronic ______ unveiled at the international exhibition was an ultra-thin foldable tablet computer.",
    "options": [
      "control",
      "quality",
      "product",
      "increase"
    ],
    "answer": 2,
    "cn": "在國際展覽會上亮相的最新電子產品是一款超薄可折疊平板電腦。 【選項解析】(A) control 控制  (B) quality 品質  (C) product 產品  (D) increase 增加。electronic product 表「電子產品」。",
    "vocabIndex": 2
  },
  {
    "q": "The strict quality inspector rejected several batches of fabric because their thread ______ did not meet standards.",
    "options": [
      "product",
      "increase",
      "control",
      "quality"
    ],
    "answer": 3,
    "cn": "嚴格的品質檢驗員退回了幾批布料，因為它們的織線品質未達標準。 【選項解析】(A) quality 品質  (B) increase 增加  (C) control 控制  (D) product 產品。thread quality 表「織線品質」。",
    "vocabIndex": 3
  },
  {
    "q": "Doctors urged the patient to take daily prescribed medication to keep his high blood pressure under ______.",
    "options": [
      "control",
      "quality",
      "product",
      "increase"
    ],
    "answer": 0,
    "cn": "醫生敦促病患每日服用處方藥物，以將他的高血壓維持在受控狀態。 【選項解析】(A) product 產品  (B) quality 品質  (C) control 受控  (D) increase 增加。keep under control 表「維持在控制之下」。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "export": {
    "pos": "v. / n.",
    "en_def": "to send goods to another country for sale; goods sold abroad",
    "cn_def": "出口；外銷",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to send goods to another country for sale; goods sold abroad",
        "cn_def": "出口；外銷"
      }
    ]
  },
  "import": {
    "pos": "v. / n.",
    "en_def": "to bring goods into a country from abroad to sell; goods bought from abroad",
    "cn_def": "進口；輸入",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to bring goods into a country from abroad to sell; goods bought from abroad",
        "cn_def": "進口；輸入"
      }
    ]
  },
  "product": {
    "pos": "n.",
    "en_def": "something that is made or grown to be sold",
    "cn_def": "產品；製品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is made or grown to be sold",
        "cn_def": "產品；製品"
      }
    ]
  },
  "quality": {
    "pos": "n.",
    "en_def": "how good or bad something is; a characteristic",
    "cn_def": "品質；特質",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how good or bad something is; a characteristic",
        "cn_def": "品質；特質"
      }
    ]
  },
  "control": {
    "pos": "n. / v.",
    "en_def": "the power to direct or manage something; to regulate",
    "cn_def": "控制；管理；管制",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the power to direct or manage something; to regulate",
        "cn_def": "控制；管理；管制"
      }
    ]
  },
  "complain": {
    "pos": "v.",
    "en_def": "to say that something is wrong or not satisfactory",
    "cn_def": "抱怨；發牢騷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say that something is wrong or not satisfactory",
        "cn_def": "抱怨；發牢騷"
      }
    ]
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand by giving details",
    "cn_def": "解釋；說明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something clear or easy to understand by giving details",
        "cn_def": "解釋；說明"
      }
    ]
  },
  "argue": {
    "pos": "v.",
    "en_def": "to speak angrily to someone because you disagree; to give reasons for or against",
    "cn_def": "爭論；爭辯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak angrily to someone because you disagree; to give reasons for or against",
        "cn_def": "爭論；爭辯"
      }
    ]
  },
  "increase": {
    "pos": "v. / n.",
    "en_def": "to become larger in amount, number, or degree; a rise",
    "cn_def": "增加；增長",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to become larger in amount, number, or degree; a rise",
        "cn_def": "增加；增長"
      }
    ]
  },
  "decrease": {
    "pos": "v. / n.",
    "en_def": "to become less or to make something become less; a reduction",
    "cn_def": "減少；降低",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to become less or to make something become less; a reduction",
        "cn_def": "減少；降低"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
