// Lesson 80 Quiz Data: Daily Tasks, Clothing, Speech, Delivery & Problem Solving
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 80 - Daily Tasks, Clothing, Speech, Delivery & Problem Solving",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "button",
    "pos": "n. / v.",
    "cn_def": "鈕扣；按鈕；扣上鈕扣",
    "en_def": "a small disc used to fasten clothes; to fasten clothes",
    "sentence": "Before stepping out into the chilly winter wind, remember to securely {{BLANK}} your wool coat up to your neck.",
    "cn": "在踏入刺骨的冬風之前，請記得將你的羊毛大衣【扣上鈕扣】一路扣到脖子。"
  },
  {
    "word": "fit",
    "pos": "v. / adj.",
    "cn_def": "合身；合適；健康的",
    "en_def": "to be of the right size or shape for; in good physical health",
    "sentence": "The stylish leather jacket was too small to {{BLANK}} Jason comfortably, so he had to exchange it for a larger size.",
    "cn": "那件時尚的皮夾克太小了不【合身】，傑森穿起來不舒服，所以他只得換成更大的尺寸。"
  },
  {
    "word": "pronounce",
    "pos": "v.",
    "cn_def": "發音；讀音；宣判",
    "en_def": "to make the sound of a word or letter in a particular way",
    "sentence": "Foreign language students often find it challenging to correctly {{BLANK}} French words with silent final consonants.",
    "cn": "外語學生經常發現在遇到結尾有不發音子音的法語單字時，要正確地【發音】是相當具有挑戰性的。"
  },
  {
    "word": "deliver",
    "pos": "v.",
    "cn_def": "遞送；運送；發表（演說）",
    "en_def": "to bring and hand over a letter, parcel, or goods to the proper recipient",
    "sentence": "The friendly courier promised to {{BLANK}} the urgent legal documents directly to the client's office before noon.",
    "cn": "親切的快遞員保證會在中午之前將這份緊急法律文件直接【遞送】到客戶的辦公室。"
  },
  {
    "word": "receive",
    "pos": "v.",
    "cn_def": "收到；接收；得到",
    "en_def": "to be given, presented with, or paid something",
    "sentence": "Every registered participant in the academic conference will {{BLANK}} an official certificate of completion and study materials.",
    "cn": "學術研討會的每位註冊與會者都將【收到】一份正式的結業證書與學習教材。"
  },
  {
    "word": "depend",
    "pos": "v.",
    "cn_def": "取決於；依賴；依靠",
    "en_def": "to be determined or decided by something else; to rely on",
    "sentence": "Whether our high school baseball team can practice outdoors this afternoon will completely {{BLANK}} on the weather conditions.",
    "cn": "我們高中棒球隊今天下午能否在室外進行練球，將完全【取決於】天氣狀況。"
  },
  {
    "word": "guard",
    "pos": "v. / n.",
    "cn_def": "守衛；保衛；警衛",
    "en_def": "to watch over in order to protect or control; a protector",
    "sentence": "Two armed security officers were hired by the national museum to {{BLANK}} the priceless diamond exhibition day and night.",
    "cn": "國家博物館聘請了兩名武裝警衛人員，日夜【守衛】這場價值連城的鑽石展覽。"
  },
  {
    "word": "rent",
    "pos": "v. / n.",
    "cn_def": "租用；出租；租金",
    "en_def": "to pay someone for the use of something; a regular payment",
    "sentence": "During their summer road trip along the Pacific coast, the college students decided to {{BLANK}} a camper van.",
    "cn": "在沿著太平洋海岸進行夏季公路旅行期間，大學生們決定【租用】一輛露營車。"
  },
  {
    "word": "solve",
    "pos": "v.",
    "cn_def": "解決；解答；解開",
    "en_def": "to find an answer to, explanation for, or means of dealing with a problem",
    "sentence": "Dedicated environmental engineers are working hard to {{BLANK}} the serious groundwater pollution problem in this industrial town.",
    "cn": "敬業的環境工程師們正努力工作，以【解決】這個工業城鎮嚴重的地下水污染問題。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決方法；解答；溶液",
    "en_def": "a means of solving a problem or dealing with a difficult situation",
    "sentence": "Installing solar panels on the school roof provided an eco-friendly and cost-effective {{BLANK}} for high electricity bills.",
    "cn": "在學校屋頂安裝太陽能電池板，為高昂的電費帳單提供了一個環保且具成本效益的【解決方法】。"
  }
];

const MCQS = [
  {
    "q": "Before stepping out into the chilly winter wind, remember to securely ______ your wool coat up to your neck.",
    "options": [
      "deliver",
      "pronounce",
      "solve",
      "button"
    ],
    "answer": 3,
    "cn": "在踏入刺骨冬風前，請記得把羊毛大衣一路扣到脖子。 【選項解析】(A) deliver 運送  (B) button 扣上  (C) solve 解決  (D) pronounce 發音。扣上大衣扣子用 button your coat。",
    "vocabIndex": 0
  },
  {
    "q": "The vintage jeans were tailored perfectly and managed to ______ grandfather just as they did thirty years ago.",
    "options": [
      "fit",
      "deliver",
      "button",
      "rent"
    ],
    "answer": 0,
    "cn": "這條復古牛仔褲裁剪得非常完美，穿在祖父身上依然像三十年前那樣合身。 【選項解析】(A) button 扣上  (B) deliver 遞送  (C) fit 合身  (D) rent 租用。衣服尺寸合身用 fit。",
    "vocabIndex": 1
  },
  {
    "q": "The English teacher spent twenty minutes demonstrating how to ______ difficult vowel sounds in the phonetic alphabet.",
    "options": [
      "deliver",
      "button",
      "pronounce",
      "rent"
    ],
    "answer": 2,
    "cn": "英語老師花了二十分鐘示範如何正確發出音標中困難的母音音素。 【選項解析】(A) pronounce 發音  (B) button 扣上  (C) deliver 發表  (D) rent 租賃。發出單字讀音用 pronounce vowel sounds。",
    "vocabIndex": 2
  },
  {
    "q": "Online grocery services allow customers to order fresh organic vegetables and have them ______ right to their doorstep.",
    "options": [
      "fit",
      "delivered",
      "solved",
      "guarded"
    ],
    "answer": 1,
    "cn": "線上生鮮雜貨服務讓顧客能訂購新鮮有機蔬菜，並直接宅配運送到家門口。 【選項解析】(A) fit 合身  (B) delivered 運送  (C) solved 解決  (D) guarded 看守。物品宅配到府用 have them delivered。",
    "vocabIndex": 3
  },
  {
    "q": "If you submit your university application before the deadline, you will ______ a confirmation email from admissions.",
    "options": [
      "receive",
      "guard",
      "rent",
      "deliver"
    ],
    "answer": 0,
    "cn": "如果你在截止日期前提交大學申請，將會收到來自招生處的確認電子郵件。 【選項解析】(A) guard 守衛  (B) receive 收到  (C) rent 租用  (D) deliver 遞送。收到信件用 receive email。",
    "vocabIndex": 4
  },
  {
    "q": "Successful career advancement will greatly ______ upon your continuous dedication to learning modern technical skills.",
    "options": [
      "pronounce",
      "button",
      "depend",
      "solve"
    ],
    "answer": 2,
    "cn": "職場上的成功晉升，將極大程度取決於你對學習現代技術技能的持續投入。 【選項解析】(A) pronounce 發音  (B) depend 取決於  (C) button 扣上  (D) solve 解決。depend upon 為固定搭配「取決於…」。",
    "vocabIndex": 5
  },
  {
    "q": "The royal palace has trained bodyguards who ______ the king and queen whenever they appear at public events.",
    "options": [
      "deliver",
      "rent",
      "fit",
      "guard"
    ],
    "answer": 3,
    "cn": "皇宮配備了訓練有素的保鑣，每當國王和王后出席公開活動時便貼身護衛。 【選項解析】(A) guard 保護  (B) rent 租用  (C) fit 合身  (D) deliver 遞送。保護皇室安全用 guard the king。",
    "vocabIndex": 6
  },
  {
    "q": "Instead of purchasing an expensive formal tuxedo for prom night, Samuel chose to ______ one from a local tailor.",
    "options": [
      "pronounce",
      "rent",
      "guard",
      "solve"
    ],
    "answer": 1,
    "cn": "塞繆爾沒有為畢業舞會購買昂貴的正式燕尾服，而是選擇向當地裁縫店租了一套。 【選項解析】(A) pronounce 發音  (B) guard 守衛  (C) rent 租用  (D) solve 解決。租借衣服動詞用 rent。",
    "vocabIndex": 7
  },
  {
    "q": "The brilliant detective gathered all forensic clues together in order to ______ the mysterious bank robbery.",
    "options": [
      "rent",
      "button",
      "solve",
      "pronounce"
    ],
    "answer": 2,
    "cn": "才華出眾的刑警匯集了所有鑑識線索，以偵破這起神秘的銀行搶案。 【選項解析】(A) solve 偵破  (B) button 扣上  (C) rent 租賃  (D) pronounce 宣判。偵破刑案用 solve the robbery。",
    "vocabIndex": 8
  },
  {
    "q": "Investing heavily in public transit infrastructure offers a sustainable ______ to chronic urban traffic congestion.",
    "options": [
      "button",
      "solution",
      "rent",
      "guard"
    ],
    "answer": 1,
    "cn": "大舉投資大眾運輸基礎設施，為長期的都市交通壅塞提供了永續的解決方案。 【選項解析】(A) button 鈕扣  (B) guard 警衛  (C) rent 租金  (D) solution 解方。sustainable solution 表永續解方。",
    "vocabIndex": 9
  },
  {
    "q": "Press the flashing red ______ on the kitchen blender to stop the spinning blades immediately.",
    "options": [
      "button",
      "guard",
      "solution",
      "rent"
    ],
    "answer": 0,
    "cn": "按下廚房果汁機上閃爍的紅鈕，即可立即停止旋轉刀片。 【選項解析】(A) button 按鈕  (B) guard 警衛  (C) solution 溶液  (D) rent 租金。機器開關按鈕為 button。",
    "vocabIndex": 0
  },
  {
    "q": "Regular cardiovascular exercise keeps athletes ______ and prepared for rigorous athletic tournaments.",
    "options": [
      "solved",
      "rented",
      "guarded",
      "fit"
    ],
    "answer": 3,
    "cn": "規律的有氧運動讓運動員保持體魄健壯，並為嚴格的體育錦標賽做好準備。 【選項解析】(A) fit 健美的  (B) rented 租賃的  (C) guarded 受防範的  (D) solved 已解決的。keep fit 表保持身體健康健美。",
    "vocabIndex": 1
  },
  {
    "q": "Can you please help me ______ the name of this traditional Polish dish written on the menu?",
    "options": [
      "button",
      "rent",
      "pronounce",
      "guard"
    ],
    "answer": 2,
    "cn": "你能幫我唸出菜單上寫的這個傳統波蘭菜的名稱嗎？ 【選項解析】(A) pronounce 發音  (B) rent 租用  (C) button 扣上  (D) guard 守護。唸出單字用 pronounce the name。",
    "vocabIndex": 2
  },
  {
    "q": "The post office postal truck arrives at our neighborhood every afternoon to ______ incoming letters.",
    "options": [
      "pronounce",
      "solve",
      "guard",
      "deliver"
    ],
    "answer": 3,
    "cn": "郵局郵務車每天下午抵達我們社區以投遞送達信件。 【選項解析】(A) pronounce 宣判  (B) deliver 投遞  (C) guard 看守  (D) solve 解決。郵差送信為 deliver letters。",
    "vocabIndex": 3
  },
  {
    "q": "The charity was overjoyed to ______ a generous million-dollar donation from an anonymous community benefactor.",
    "options": [
      "receive",
      "button",
      "guard",
      "deliver"
    ],
    "answer": 0,
    "cn": "該慈善機構欣喜地收到了來自一位匿名社區善心人士的百萬美元慷慨捐款。 【選項解析】(A) receive 接受/收到  (B) button 扣上  (C) guard 保衛  (D) deliver 運送。接受捐款用 receive donation。",
    "vocabIndex": 4
  },
  {
    "q": "Young children ______ heavily upon their parents for emotional comfort, nourishing food, and safe shelter.",
    "options": [
      "pronounce",
      "depend",
      "solve",
      "button"
    ],
    "answer": 1,
    "cn": "幼童在情感安慰、營養食物與安全庇護方面均高度依賴父母。 【選項解析】(A) depend 依賴  (B) pronounce 發音  (C) solve 解決  (D) button 扣上。depend heavily upon 表高度仰賴。",
    "vocabIndex": 5
  },
  {
    "q": "A fierce German shepherd stood behind the iron gate to ______ the industrial warehouse against unauthorized intruders.",
    "options": [
      "guard",
      "deliver",
      "rent",
      "fit"
    ],
    "answer": 0,
    "cn": "一隻兇猛的德國牧羊犬站在鐵門後，看守工業倉庫防止未經授權的闖入者進入。 【選項解析】(A) guard 看守  (B) deliver 送達  (C) rent 租賃  (D) fit 合身。看守倉庫動詞用 guard the warehouse。",
    "vocabIndex": 6
  },
  {
    "q": "The monthly ______ for a two-bedroom apartment in Taipei has risen noticeably over the past three years.",
    "options": [
      "guard",
      "button",
      "rent",
      "solution"
    ],
    "answer": 2,
    "cn": "在過去三年中，台北兩房公寓的每月租金顯著上漲。 【選項解析】(A) rent 租金  (B) button 鈕扣  (C) guard 警衛  (D) solution 溶液。monthly rent 表每月租金。",
    "vocabIndex": 7
  },
  {
    "q": "Working cooperatively in small study groups helps high school students ______ complicated algebra equations.",
    "options": [
      "rent",
      "solve",
      "guard",
      "button"
    ],
    "answer": 1,
    "cn": "在小讀書會中合作學習，有助於高中生解答複雜的代數方程式。 【選項解析】(A) solve 解答  (B) rent 租用  (C) guard 守望  (D) button 扣上。解答方程式用 solve equations。",
    "vocabIndex": 8
  },
  {
    "q": "Scientists around the world are collaborating to discover an innovative ______ for plastic ocean waste.",
    "options": [
      "rent",
      "button",
      "guard",
      "solution"
    ],
    "answer": 3,
    "cn": "全球各國科學家攜手合作，致力於找出解決海洋塑膠廢棄物的創新解方。 【選項解析】(A) solution 解方  (B) button 按鈕  (C) guard 警衛  (D) rent 租金。innovative solution 表創新解方。",
    "vocabIndex": 9
  },
  {
    "q": "The formal dress shirt lost a pearl ______ from its sleeve, so Amanda sewed on a matching replacement.",
    "options": [
      "button",
      "guard",
      "solution",
      "rent"
    ],
    "answer": 0,
    "cn": "這件正式襯衫的袖口掉了一顆珍珠鈕扣，因此阿曼達縫上了一顆相配的備用扣。 【選項解析】(A) button 鈕扣  (B) guard 警衛  (C) solution 解方  (D) rent 租金。pearl button 表珍珠鈕扣。",
    "vocabIndex": 0
  },
  {
    "q": "Because that large sofa will not ______ through the narrow living room doorway, we must disassemble its legs.",
    "options": [
      "deliver",
      "fit",
      "guard",
      "pronounce"
    ],
    "answer": 1,
    "cn": "因為那張大沙發過不去客廳狹窄的門口，我們只得把沙發腳拆卸下來。 【選項解析】(A) fit 穿過/容得下  (B) deliver 送達  (C) guard 防範  (D) pronounce 發音。fit through doorway 表穿得過門口。",
    "vocabIndex": 1
  },
  {
    "q": "The judge took the stand to formally ______ the legal verdict in the highly publicized corporate fraud case.",
    "options": [
      "button",
      "rent",
      "pronounce",
      "solve"
    ],
    "answer": 2,
    "cn": "法官走上法官席，在這起備受矚目的企業詐欺案件中正式宣讀法律判決。 【選項解析】(A) pronounce 宣判  (B) rent 出租  (C) button 扣緊  (D) solve 破解。pronounce verdict 表宣讀判決。",
    "vocabIndex": 2
  },
  {
    "q": "The university professor was invited to ______ the keynote speech at the annual international literature symposium.",
    "options": [
      "fit",
      "rent",
      "guard",
      "deliver"
    ],
    "answer": 3,
    "cn": "這位大學教授受邀在年度國際文學研討會上發表專題演講。 【選項解析】(A) deliver 發表演講  (B) rent 租賃  (C) guard 看守  (D) fit 合身。deliver a keynote speech 表發表專題演講。",
    "vocabIndex": 3
  },
  {
    "q": "Finding a permanent ______ to global climate change requires international treaties and renewable energy adoption.",
    "options": [
      "solution",
      "button",
      "guard",
      "rent"
    ],
    "answer": 0,
    "cn": "為全球氣候變遷找出長久解決方案，需要簽署國際條約並採用再生能源。 【選項解析】(A) solution 解法  (B) button 紐扣  (C) guard 衛兵  (D) rent 租金。permanent solution 表長久解決方案。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "button": {
    "pos": "n. / v.",
    "en_def": "a small disc used to fasten clothes; to fasten clothes",
    "cn_def": "鈕扣；按鈕；扣上鈕扣",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a small disc used to fasten clothes; to fasten clothes",
        "cn_def": "鈕扣；按鈕；扣上鈕扣"
      }
    ]
  },
  "fit": {
    "pos": "v. / adj.",
    "en_def": "to be of the right size or shape for; in good physical health",
    "cn_def": "合身；合適；健康的",
    "combined": [
      {
        "pos": "v. / adj.",
        "en_def": "to be of the right size or shape for; in good physical health",
        "cn_def": "合身；合適；健康的"
      }
    ]
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to make the sound of a word or letter in a particular way",
    "cn_def": "發音；讀音；宣判",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make the sound of a word or letter in a particular way",
        "cn_def": "發音；讀音；宣判"
      }
    ]
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to bring and hand over a letter, parcel, or goods to the proper recipient",
    "cn_def": "遞送；運送；發表（演說）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring and hand over a letter, parcel, or goods to the proper recipient",
        "cn_def": "遞送；運送；發表（演說）"
      }
    ]
  },
  "receive": {
    "pos": "v.",
    "en_def": "to be given, presented with, or paid something",
    "cn_def": "收到；接收；得到",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be given, presented with, or paid something",
        "cn_def": "收到；接收；得到"
      }
    ]
  },
  "depend": {
    "pos": "v.",
    "en_def": "to be determined or decided by something else; to rely on",
    "cn_def": "取決於；依賴；依靠",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be determined or decided by something else; to rely on",
        "cn_def": "取決於；依賴；依靠"
      }
    ]
  },
  "guard": {
    "pos": "v. / n.",
    "en_def": "to watch over in order to protect or control; a protector",
    "cn_def": "守衛；保衛；警衛",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to watch over in order to protect or control; a protector",
        "cn_def": "守衛；保衛；警衛"
      }
    ]
  },
  "rent": {
    "pos": "v. / n.",
    "en_def": "to pay someone for the use of something; a regular payment",
    "cn_def": "租用；出租；租金",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to pay someone for the use of something; a regular payment",
        "cn_def": "租用；出租；租金"
      }
    ]
  },
  "solve": {
    "pos": "v.",
    "en_def": "to find an answer to, explanation for, or means of dealing with a problem",
    "cn_def": "解決；解答；解開",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find an answer to, explanation for, or means of dealing with a problem",
        "cn_def": "解決；解答；解開"
      }
    ]
  },
  "solution": {
    "pos": "n.",
    "en_def": "a means of solving a problem or dealing with a difficult situation",
    "cn_def": "解決方法；解答；溶液",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a means of solving a problem or dealing with a difficult situation",
        "cn_def": "解決方法；解答；溶液"
      }
    ]
  },
  "delivered": {
    "pos": "",
    "en_def": "",
    "cn_def": "運送",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "運送"
      }
    ]
  },
  "solved": {
    "pos": "",
    "en_def": "",
    "cn_def": "解決",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "解決"
      }
    ]
  },
  "guarded": {
    "pos": "",
    "en_def": "",
    "cn_def": "看守",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "看守"
      }
    ]
  },
  "rented": {
    "pos": "",
    "en_def": "",
    "cn_def": "租賃的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "租賃的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
