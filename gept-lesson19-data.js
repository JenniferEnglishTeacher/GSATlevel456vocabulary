// Lesson 19 Quiz Data: Household Hardware, Lighting & Everyday Gadgets
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 19 - Household Hardware, Lighting & Everyday Gadgets",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "toilet",
    "pos": "n.",
    "cn_def": "抽水馬桶；洗手間",
    "en_def": "a fixed bowl with a seat and water flush system used for urination and defecation",
    "sentence": "When traveling on a long-distance express train, you can find a clean public {{BLANK}} at either end of the carriage.",
    "cn": "在長途特快車上旅行時，你可以在車廂的任一端找到一間乾淨的公用洗手間（抽水馬桶）。"
  },
  {
    "word": "candle",
    "pos": "n.",
    "cn_def": "蠟燭",
    "en_def": "a cylinder of wax with a central wick burned to provide light or fragrance",
    "sentence": "When the sudden thunderstorm caused a blackout across the neighborhood, grandmother lit a scented {{BLANK}} on the dining table.",
    "cn": "當突如其來的雷雨導致整個社區停電時，祖母在餐桌上點燃了一支香氛蠟燭。"
  },
  {
    "word": "flashlight",
    "pos": "n.",
    "cn_def": "手電筒",
    "en_def": "a portable handheld battery-powered electric lamp",
    "sentence": "The security guard carried a heavy-duty LED {{BLANK}} while patrolling the dark warehouse grounds at midnight.",
    "cn": "警衛在半夜巡邏黑暗的倉庫廠區時，手裡拿著一支高功率的LED手電筒。"
  },
  {
    "word": "needle",
    "pos": "n.",
    "cn_def": "縫紉針；指針",
    "en_def": "a very thin pointed steel tool with an eye for thread used in sewing",
    "sentence": "Aunt Mary threaded a sharp steel {{BLANK}} carefully before mending the torn sleeve on her husband's wool jacket.",
    "cn": "瑪麗姑姑在修補丈夫羊毛夾克上破損的袖子之前，小心翼翼地穿好了一根鋒利的鋼縫紉針。"
  },
  {
    "word": "pin",
    "pos": "n. / v.",
    "cn_def": "大頭針；別針；別住",
    "en_def": "a tiny thin piece of metal used for fastening clothes or paper",
    "sentence": "The tailor used a sharp silver {{BLANK}} to hold the pant cuff in place before he began sewing the hem.",
    "cn": "裁縫師在開始縫製褲管邊緣之前，用一枚鋒利的銀色別針把褲腳固定在原位。"
  },
  {
    "word": "hanger",
    "pos": "n.",
    "cn_def": "衣架",
    "en_def": "a curved piece of wood, metal, or plastic on which clothes are hung",
    "sentence": "Please hang your damp winter raincoat neatly on a sturdy wooden {{BLANK}} instead of throwing it over the couch.",
    "cn": "請把你潮濕的冬季雨衣整齊掛在堅固的木衣架上，不要隨手扔在沙發上。"
  },
  {
    "word": "lock",
    "pos": "n. / v.",
    "cn_def": "門鎖；上鎖",
    "en_def": "a mechanism for keeping a door secure; to fasten with a key",
    "sentence": "Before our family leaves the house for a long vacation, father always checks that the front door {{BLANK}} is secure.",
    "cn": "在我們全家出門度長假之前，父親總是會檢查前門門鎖是否已經鎖好牢固。"
  },
  {
    "word": "freezer",
    "pos": "n.",
    "cn_def": "冷凍庫；冷凍櫃",
    "en_def": "a refrigerated cabinet or room preserved at below freezing temperatures",
    "sentence": "Mother bought two large tubs of vanilla ice cream and placed them immediately inside the kitchen {{BLANK}} to keep firm.",
    "cn": "母親買了兩大桶香草冰淇淋，並立刻放進廚房冷凍庫以保持硬度。"
  },
  {
    "word": "recorder",
    "pos": "n.",
    "cn_def": "錄音機；記錄器；直笛",
    "en_def": "an apparatus for recording sound or visual signals digitally or on tape",
    "sentence": "The university journalist placed a digital audio {{BLANK}} on the interview table to capture every word accurately.",
    "cn": "大學校刊記者在訪談桌上放了一台數位錄音機，以便準確記錄下每一個字。"
  },
  {
    "word": "video",
    "pos": "n. / v.",
    "cn_def": "影片；錄影；錄製影片",
    "en_def": "the recording, reproducing, or broadcasting of moving visual images",
    "sentence": "During my sister's high school graduation ceremony, my proud father recorded the entire event on digital {{BLANK}}.",
    "cn": "在我姊姊的高中畢業典禮上，我引以為傲的父親用數位影片記錄下了整場活動。"
  }
];

const MCQS = [
  {
    "q": "Excuse me, could you tell me where the nearest public ______ is located in this department store?",
    "options": [
      "toilet",
      "candle",
      "needle",
      "lock"
    ],
    "answer": 0,
    "cn": "不好意思，你能告訴我這家百貨公司最近的公用洗手間在哪裡嗎？ 【選項解析】(A) toilet 洗手間  (B) candle 蠟燭  (C) needle 針  (D) lock 門鎖。百貨公司公廁為 public toilet。",
    "vocabIndex": 0
  },
  {
    "q": "On her ninth birthday, the birthday girl made a silent wish and blew out all nine ______ on the cake.",
    "options": [
      "toilets",
      "freezers",
      "needles",
      "candles"
    ],
    "answer": 3,
    "cn": "在她九歲生日那天，壽星默默許了願，吹熄了蛋糕上全部的九支蠟燭。 【選項解析】(A) toilets 馬桶  (B) candles 蠟燭  (C) needles 針  (D) freezers 冷凍櫃。蛋糕上吹熄 candles。",
    "vocabIndex": 1
  },
  {
    "q": "The campers walked through the dense woods at midnight using a battery-powered ______ to illuminate the trail.",
    "options": [
      "hanger",
      "flashlight",
      "needle",
      "lock"
    ],
    "answer": 1,
    "cn": "露營者在半夜穿越茂密森林，使用電池供電的手電筒照亮山徑。 【選項解析】(A) hanger 衣架  (B) needle 針  (C) flashlight 手電筒  (D) lock 門鎖。夜晚照亮路徑使用 flashlight。",
    "vocabIndex": 2
  },
  {
    "q": "Grandma put on her reading glasses so that she could thread the tiny eye of the sewing ______.",
    "options": [
      "candle",
      "toilet",
      "needle",
      "freezer"
    ],
    "answer": 2,
    "cn": "祖母戴上老花眼鏡，這樣她才能把線穿過縫紉針細小的針眼。 【選項解析】(A) candle 蠟燭  (B) toilet 馬桶  (C) freezer 冷凍庫  (D) needle 縫紉針。針眼穿線為 eye of the sewing needle。",
    "vocabIndex": 3
  },
  {
    "q": "The doctor fastened the paper name tag to the lapel of her white coat using a small gold safety ______.",
    "options": [
      "candle",
      "toilet",
      "freezer",
      "pin"
    ],
    "answer": 3,
    "cn": "女醫生用一枚小金安全別針，把紙質名牌別在她白袍的翻領上。 【選項解析】(A) pin 別針  (B) toilet 馬桶  (C) freezer 冷凍櫃  (D) candle 蠟燭。別名牌使用 safety pin。",
    "vocabIndex": 4
  },
  {
    "q": "Don't leave your tailored suit crumpled on the desk; suspend it neatly upon a plastic coat ______.",
    "options": [
      "hanger",
      "candle",
      "needle",
      "toilet"
    ],
    "answer": 0,
    "cn": "不要把你的合身西裝皺巴巴地丟在桌上，整齊地吊掛在塑膠衣架上吧。 【選項解析】(A) candle 蠟燭  (B) hanger 衣架  (C) needle 針  (D) toilet 馬桶。掛衣服用 coat hanger。",
    "vocabIndex": 5
  },
  {
    "q": "Make sure to turn the brass key twice to secure the deadbolt ______ on the main entrance door.",
    "options": [
      "candle",
      "lock",
      "needle",
      "freezer"
    ],
    "answer": 1,
    "cn": "請務必轉動黃銅鑰匙兩圈，以確保大門上的固定鎖栓鎖牢固。 【選項解析】(A) candle 蠟燭  (B) needle 針  (C) lock 門鎖  (D) freezer 冷凍櫃。鑰匙上鎖為 deadbolt lock。",
    "vocabIndex": 6
  },
  {
    "q": "Keep raw salmon and meat dumplings frozen at minus twenty degrees inside the deep ______.",
    "options": [
      "toilet",
      "candle",
      "freezer",
      "needle"
    ],
    "answer": 2,
    "cn": "將生鮭魚和生肉水餃放在深度冷凍櫃中，保持在零下二十度冰凍。 【選項解析】(A) toilet 馬桶  (B) candle 蠟燭  (C) needle 針  (D) freezer 冷凍庫。維持零下20度低溫為 deep freezer。",
    "vocabIndex": 7
  },
  {
    "q": "The detective pressed the record button on his pocket voice ______ to save the witness statement.",
    "options": [
      "recorder",
      "candle",
      "toilet",
      "needle"
    ],
    "answer": 0,
    "cn": "刑警按下口袋錄音機上的錄音鍵，以完整保存目擊者的證詞。 【選項解析】(A) recorder 錄音機  (B) candle 蠟燭  (C) toilet 馬桶  (D) needle 針。存證錄音使用 voice recorder。",
    "vocabIndex": 8
  },
  {
    "q": "Millions of students watch educational science ______ on YouTube to help them review difficult exam concepts.",
    "options": [
      "candles",
      "needles",
      "videos",
      "toilets"
    ],
    "answer": 2,
    "cn": "數百萬名學生在YouTube上觀看自然科學教育影片，協助複習難懂的考試觀念。 【選項解析】(A) candles 蠟燭  (B) videos 影片  (C) needles 針  (D) toilets 馬桶。網路觀看教學影片為 educational science videos。",
    "vocabIndex": 9
  },
  {
    "q": "After using the private restroom, remember to push the handle downward to flush the porcelain ______.",
    "options": [
      "candle",
      "toilet",
      "needle",
      "lock"
    ],
    "answer": 1,
    "cn": "使用完私人洗手間後，記得將把手往下壓以沖洗陶瓷馬桶。 【選項解析】(A) candle 蠟燭  (B) needle 針  (C) toilet 馬桶  (D) lock 門鎖。沖水馬桶為 flush the porcelain toilet。",
    "vocabIndex": 0
  },
  {
    "q": "The romantic restaurant set a flickering wax ______ in a glass holder on every single dining table.",
    "options": [
      "toilet",
      "needle",
      "freezer",
      "candle"
    ],
    "answer": 3,
    "cn": "這家浪漫餐廳在每張餐桌的玻璃燭台裡都擺了一支閃爍的蠟燭。 【選項解析】(A) toilet 馬桶  (B) needle 針  (C) freezer 冷凍櫃  (D) candle 蠟燭。餐桌氣氛點燃 wax candle。",
    "vocabIndex": 1
  },
  {
    "q": "Always keep a spare ______ and extra alkaline batteries in your car's emergency glove compartment.",
    "options": [
      "toilet",
      "flashlight",
      "needle",
      "hanger"
    ],
    "answer": 1,
    "cn": "請隨時在車子的緊急手套箱中備有一支備用手電筒和多餘的鹼性電池。 【選項解析】(A) flashlight 手電筒  (B) toilet 馬桶  (C) needle 針  (D) hanger 衣架。緊急照明必備 spare flashlight。",
    "vocabIndex": 2
  },
  {
    "q": "A nurse cleaned the sharp hypodermic ______ with rubbing alcohol before administering the annual flu vaccine.",
    "options": [
      "needle",
      "toilet",
      "candle",
      "lock"
    ],
    "answer": 0,
    "cn": "護理師在施打年度流感疫苗之前，先用消毒酒精擦拭鋒利的皮下注射針頭。 【選項解析】(A) toilet 馬桶  (B) needle 注射針頭  (C) candle 蠟燭  (D) lock 門鎖。醫用針頭為 hypodermic needle。",
    "vocabIndex": 3
  },
  {
    "q": "The teacher used a colorful thumb ______ to attach the class field trip schedule to the cork noticeboard.",
    "options": [
      "toilet",
      "candle",
      "freezer",
      "pin"
    ],
    "answer": 3,
    "cn": "老師用一枚彩色圖釘把班級校外教學日程表固定在軟木公告欄上。 【選項解析】(A) toilet 馬桶  (B) candle 蠟燭  (C) pin 圖釘  (D) freezer 冷凍櫃。固定紙張於軟木板用 thumb pin。",
    "vocabIndex": 4
  },
  {
    "q": "There were no empty coat ______ left in the restaurant cloakroom, so the waiter folded my jacket over a chair.",
    "options": [
      "toilets",
      "needles",
      "hangers",
      "candles"
    ],
    "answer": 2,
    "cn": "餐廳寄物處沒有多餘的衣架了，所以服務生把我的夾克折疊放在椅子上。 【選項解析】(A) toilets 馬桶  (B) needles 針  (C) candles 蠟燭  (D) hangers 衣架。寄物懸掛使用 coat hangers。",
    "vocabIndex": 5
  },
  {
    "q": "A thief tried to pick the heavy iron pad ______ with a bent metal wire, but the security alarm sounded.",
    "options": [
      "needle",
      "candle",
      "toilet",
      "lock"
    ],
    "answer": 3,
    "cn": "小偷試圖用彎曲金屬線撬開笨重的鐵掛鎖，但安全警報器響了。 【選項解析】(A) lock 掛鎖  (B) candle 蠟燭  (C) toilet 馬桶  (D) needle 針。被撬開的五金為 pad lock。",
    "vocabIndex": 6
  },
  {
    "q": "Ice cream and frozen popsicles will melt into sticky liquid if you fail to store them in the ______.",
    "options": [
      "candle",
      "toilet",
      "freezer",
      "needle"
    ],
    "answer": 2,
    "cn": "如果你沒把冰淇淋和冰棒放進冷凍庫裡保存，它們會融化成黏稠的液體。 【選項解析】(A) candle 蠟燭  (B) freezer 冷凍庫  (C) toilet 馬桶  (D) needle 針。防融化置於 freezer。",
    "vocabIndex": 7
  },
  {
    "q": "In elementary school music class, all fourth-grade children learn how to play simple songs on a plastic ______.",
    "options": [
      "recorder",
      "candle",
      "toilet",
      "needle"
    ],
    "answer": 0,
    "cn": "在國小音樂課上，所有四年級的孩子都會學習如何在塑膠直笛上吹奏簡單歌曲。 【選項解析】(A) toilet 馬桶  (B) candle 蠟燭  (C) recorder 直笛  (D) needle 針。學校吹奏樂器為 plastic recorder。",
    "vocabIndex": 8
  },
  {
    "q": "The police reviewed the security camera surveillance ______ to identify the vehicle involved in the hit-and-run.",
    "options": [
      "candle",
      "video",
      "toilet",
      "needle"
    ],
    "answer": 1,
    "cn": "警方調閱監視攝影機的監控錄影畫面，以辨識涉及肇事逃逸的車輛。 【選項解析】(A) candle 蠟燭  (B) needle 針  (C) toilet 馬桶  (D) video 錄影畫面。監視器影像為 surveillance video。",
    "vocabIndex": 9
  },
  {
    "q": "The airline flight attendant reminded passengers that smoking inside the aircraft ______ is strictly prohibited by law.",
    "options": [
      "candle",
      "needle",
      "toilet",
      "lock"
    ],
    "answer": 2,
    "cn": "飛機空服員提醒旅客，法律嚴格禁止在飛機洗手間內吸菸。 【選項解析】(A) toilet 洗手間  (B) needle 針  (C) candle 蠟燭  (D) lock 門鎖。飛機上洗手間為 aircraft toilet。",
    "vocabIndex": 0
  },
  {
    "q": "Scented lavender ______ emit a calming aroma that helps soothe insomnia before going to sleep at night.",
    "options": [
      "toilets",
      "locks",
      "needles",
      "candles"
    ],
    "answer": 3,
    "cn": "薰衣草香氛蠟燭能散發舒緩香氣，有助於在夜晚入睡前撫平失眠。 【選項解析】(A) toilets 馬桶  (B) candles 蠟燭  (C) needles 針  (D) locks 門鎖。放鬆薰香點燃 scented lavender candles。",
    "vocabIndex": 1
  },
  {
    "q": "When our fuse box tripped during the thunderstorm, dad reached into the drawer for a reliable ______.",
    "options": [
      "flashlight",
      "toilet",
      "needle",
      "hanger"
    ],
    "answer": 0,
    "cn": "暴風雨中保險絲跳電時，爸爸伸手到抽屜裡拿出一支可靠的手電筒。 【選項解析】(A) needle 針  (B) toilet 馬桶  (C) flashlight 手電筒  (D) hanger 衣架。停電備用照明為 reliable flashlight。",
    "vocabIndex": 2
  },
  {
    "q": "Searching for a missing sewing ______ on a shaggy carpet is very difficult and dangerous for bare feet.",
    "options": [
      "toilet",
      "needle",
      "lock",
      "candle"
    ],
    "answer": 1,
    "cn": "在長毛地毯上尋找掉落的縫紉針非常困難，而且對赤腳來說非常危險。 【選項解析】(A) toilet 馬桶  (B) candle 蠟燭  (C) lock 門鎖  (D) needle 縫紉針。掉落的尖銳金屬是 sewing needle。",
    "vocabIndex": 3
  },
  {
    "q": "When the customer bought a dress, the cashier attached the paper price tag with a small metal ______.",
    "options": [
      "candle",
      "toilet",
      "freezer",
      "pin"
    ],
    "answer": 3,
    "cn": "當顧客買下洋裝時，收銀員用一枚小金屬別針將紙質價格標籤固定好。 【選項解析】(A) pin 別針  (B) toilet 馬桶  (C) freezer 冷凍庫  (D) candle 蠟燭。固定標籤使用 small metal pin。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "toilet": {
    "pos": "n.",
    "en_def": "a fixed bowl with a seat and water flush system used for urination and defecation",
    "cn_def": "抽水馬桶；洗手間",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fixed bowl with a seat and water flush system used for urination and defecation",
        "cn_def": "抽水馬桶；洗手間"
      }
    ]
  },
  "candle": {
    "pos": "n.",
    "en_def": "a cylinder of wax with a central wick burned to provide light or fragrance",
    "cn_def": "蠟燭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cylinder of wax with a central wick burned to provide light or fragrance",
        "cn_def": "蠟燭"
      }
    ]
  },
  "flashlight": {
    "pos": "n.",
    "en_def": "a portable handheld battery-powered electric lamp",
    "cn_def": "手電筒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a portable handheld battery-powered electric lamp",
        "cn_def": "手電筒"
      }
    ]
  },
  "needle": {
    "pos": "n.",
    "en_def": "a very thin pointed steel tool with an eye for thread used in sewing",
    "cn_def": "縫紉針；指針",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a very thin pointed steel tool with an eye for thread used in sewing",
        "cn_def": "縫紉針；指針"
      }
    ]
  },
  "pin": {
    "pos": "n. / v.",
    "en_def": "a tiny thin piece of metal used for fastening clothes or paper",
    "cn_def": "大頭針；別針；別住",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a tiny thin piece of metal used for fastening clothes or paper",
        "cn_def": "大頭針；別針；別住"
      }
    ]
  },
  "hanger": {
    "pos": "n.",
    "en_def": "a curved piece of wood, metal, or plastic on which clothes are hung",
    "cn_def": "衣架",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a curved piece of wood, metal, or plastic on which clothes are hung",
        "cn_def": "衣架"
      }
    ]
  },
  "lock": {
    "pos": "n. / v.",
    "en_def": "a mechanism for keeping a door secure; to fasten with a key",
    "cn_def": "門鎖；上鎖",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a mechanism for keeping a door secure; to fasten with a key",
        "cn_def": "門鎖；上鎖"
      }
    ]
  },
  "freezer": {
    "pos": "n.",
    "en_def": "a refrigerated cabinet or room preserved at below freezing temperatures",
    "cn_def": "冷凍庫；冷凍櫃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a refrigerated cabinet or room preserved at below freezing temperatures",
        "cn_def": "冷凍庫；冷凍櫃"
      }
    ]
  },
  "recorder": {
    "pos": "n.",
    "en_def": "an apparatus for recording sound or visual signals digitally or on tape",
    "cn_def": "錄音機；記錄器；直笛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an apparatus for recording sound or visual signals digitally or on tape",
        "cn_def": "錄音機；記錄器；直笛"
      }
    ]
  },
  "video": {
    "pos": "n. / v.",
    "en_def": "the recording, reproducing, or broadcasting of moving visual images",
    "cn_def": "影片；錄影；錄製影片",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the recording, reproducing, or broadcasting of moving visual images",
        "cn_def": "影片；錄影；錄製影片"
      }
    ]
  },
  "toilets": {
    "pos": "",
    "en_def": "",
    "cn_def": "馬桶",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "馬桶"
      }
    ]
  },
  "freezers": {
    "pos": "",
    "en_def": "",
    "cn_def": "冷凍櫃",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "冷凍櫃"
      }
    ]
  },
  "needles": {
    "pos": "",
    "en_def": "",
    "cn_def": "針",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "針"
      }
    ]
  },
  "candles": {
    "pos": "",
    "en_def": "",
    "cn_def": "蠟燭",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蠟燭"
      }
    ]
  },
  "videos": {
    "pos": "",
    "en_def": "",
    "cn_def": "影片",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "影片"
      }
    ]
  },
  "hangers": {
    "pos": "",
    "en_def": "",
    "cn_def": "衣架",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "衣架"
      }
    ]
  },
  "locks": {
    "pos": "",
    "en_def": "",
    "cn_def": "門鎖",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "門鎖"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
