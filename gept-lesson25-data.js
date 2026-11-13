// Lesson 25 Quiz Data: Service Roles, Royalty & Specialized Trades
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 25 - Service Roles, Royalty & Specialized Trades",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "salesman",
    "pos": "n.",
    "cn_def": "業務員；推銷員",
    "en_def": "a man whose job involves selling goods or services",
    "sentence": "The friendly car {{BLANK}} explained all the safety features of the hybrid sedan and offered us a free test drive.",
    "cn": "這位親切的汽車業務員解釋了這輛油電混合轎車的所有安全功能，並為我們提供了免費試駕。"
  },
  {
    "word": "scientist",
    "pos": "n.",
    "cn_def": "科學家",
    "en_def": "a person who studies or has expert knowledge in one or more sciences",
    "sentence": "The environmental {{BLANK}} analyzed water samples collected from the river and discovered dangerous levels of chemical waste.",
    "cn": "這位環境科學家分析了從該河流採集的水樣，並發現了危險含量的化學廢料。"
  },
  {
    "word": "mechanic",
    "pos": "n.",
    "cn_def": "技工；修車工",
    "en_def": "a person who repairs and maintains machinery, especially car engines",
    "sentence": "When my old car suddenly broke down on the highway, a skillful {{BLANK}} replaced the damaged alternator in two hours.",
    "cn": "當我的老爺車在公路上突然拋錨時，一位技術精湛的技工在兩小時內更換了損壞的發電機。"
  },
  {
    "word": "secretary",
    "pos": "n.",
    "cn_def": "秘書",
    "en_def": "a person employed to assist with correspondence, keep records, and make appointments",
    "sentence": "The executive {{BLANK}} answered incoming telephone calls politely and scheduled important meetings on the company digital calendar.",
    "cn": "這位主管秘書客氣地接聽打進來的電話，並在公司的數位行事曆上安排了重要會議。"
  },
  {
    "word": "servant",
    "pos": "n.",
    "cn_def": "僕人；傭人",
    "en_def": "a person who performs duties for others, especially in a domestic setting",
    "sentence": "In ancient European castles, numerous {{BLANK}}s cleaned grand dining halls, prepared elaborate meals, and looked after the nobility.",
    "cn": "在古代歐洲城堡中，眾多僕人負責打掃宏偉的宴會廳、準備豐盛的餐點，並伺候貴族階層。"
  },
  {
    "word": "vendor",
    "pos": "n.",
    "cn_def": "小販；攤販；廠商",
    "en_def": "a person or company offering something for sale, especially street traders",
    "sentence": "Every Saturday night, the street food {{BLANK}} sets up his mobile stall in the night market to grill fragrant sausages for customers.",
    "cn": "每逢週六晚上，街頭小販都會在夜市擺出移動攤位，為顧客現烤香氣四溢的香腸。"
  },
  {
    "word": "thief",
    "pos": "n.",
    "cn_def": "小偷；竊賊",
    "en_def": "a person who steals another person's property, especially secretly (pl. thieves)",
    "sentence": "An alert store security officer caught the sneaky {{BLANK}} trying to sneak out the back exit with stolen electronic watches.",
    "cn": "一名警覺的店內保全人員抓住了這個鬼鬼祟祟的小偷，他當時正試圖帶著偷來的電子手錶從後門溜出去。"
  },
  {
    "word": "speaker",
    "pos": "n.",
    "cn_def": "演講者；講者；揚聲器",
    "en_def": "a person who speaks, especially at a formal event; audio device",
    "sentence": "The keynote {{BLANK}} delivered an inspiring talk on artificial intelligence, and the auditorium erupted in loud applause.",
    "cn": "主講人在會上發表了關於人工智慧的激勵人心演講，整個禮堂爆發出熱烈的掌聲。"
  },
  {
    "word": "prince",
    "pos": "n.",
    "cn_def": "王子；親王",
    "en_def": "the son of a monarch; a close male member of a royal family",
    "sentence": "The handsome young {{BLANK}} rode his white horse through the palace gates to greet thousands of cheering royal subjects.",
    "cn": "這位英俊的年輕王子騎著白馬穿過宮殿大門，向數千名歡呼的王室子民揮手致意。"
  },
  {
    "word": "princess",
    "pos": "n.",
    "cn_def": "公主；王妃",
    "en_def": "the daughter of a monarch; the wife of a prince",
    "sentence": "The royal {{BLANK}} wore a sparkling diamond tiara to the banquet and smiled warmly at international diplomatic guests.",
    "cn": "這位王室公主戴著閃亮的鑽石皇冠出席宴會，並對國際外交嘉賓報以溫暖的微笑。"
  }
];

const MCQS = [
  {
    "q": "When the family car began making a strange rattling sound, my father took it to a reliable auto ______.",
    "options": [
      "scientist",
      "mechanic",
      "vendor",
      "prince"
    ],
    "answer": 1,
    "cn": "當家裡的汽車開始發出奇怪的咔嗒聲時，父親把它送到了可靠的汽車技工那裡檢修。 【選項解析】(A) scientist 科學家 (B) mechanic 技工 (C) vendor 小販 (D) prince 王子。auto mechanic（汽車修理工）。",
    "vocabIndex": 2
  },
  {
    "q": "The pharmaceutical ______ conducted complex laboratory trials to test the safety of a new influenza vaccine.",
    "options": [
      "thief",
      "salesman",
      "servant",
      "scientist"
    ],
    "answer": 3,
    "cn": "製藥科學家進行了複雜的實驗室試驗，以測試新型流感疫苗的安全性。 【選項解析】(A) thief (B) salesman (C) scientist 科學家 (D) servant。進行疫苗實驗室試驗者為 pharmaceutical scientist。",
    "vocabIndex": 1
  },
  {
    "q": "The energetic computer ______ demonstrated the latest tablet features to shoppers gathered at the electronics expo.",
    "options": [
      "mechanic",
      "princess",
      "salesman",
      "thief"
    ],
    "answer": 2,
    "cn": "充滿活力的電腦銷售員向聚集在電子展覽會上的購物者示範最新平板電腦的功能。 【選項解析】(A) salesman 業務員 (B) princess (C) mechanic (D) thief。推銷電子展品者為 computer salesman。",
    "vocabIndex": 0
  },
  {
    "q": "The director asked his confidential ______ to draft a formal reply to the foreign government's invitation letter.",
    "options": [
      "secretary",
      "vendor",
      "prince",
      "scientist"
    ],
    "answer": 0,
    "cn": "主管請他的機要秘書起草一份給外國政府邀請函的正式回信。 【選項解析】(A) vendor (B) secretary 秘書 (C) prince (D) scientist。起草正式信函、掌管文書者為 confidential secretary。",
    "vocabIndex": 3
  },
  {
    "q": "In the 18th century, wealthy aristocratic families employed a faithful household ______ to maintain their country manor.",
    "options": [
      "salesman",
      "servant",
      "speaker",
      "mechanic"
    ],
    "answer": 1,
    "cn": "在 18 世紀，富有的貴族家庭僱用忠誠的家僕來維護他們的鄉村莊園。 【選項解析】(A) servant 僕人 (B) salesman (C) speaker (D) mechanic。照顧鄉村莊園的傭工為 household servant。",
    "vocabIndex": 4
  },
  {
    "q": "A night market ______ pushed his wooden cart into the crowded alley and began frying delicious scallion pancakes.",
    "options": [
      "prince",
      "scientist",
      "vendor",
      "secretary"
    ],
    "answer": 2,
    "cn": "夜市小販把木推車推進擁擠的小巷，開始現煎美味的蔥油餅。 【選項解析】(A) prince (B) scientist (C) vendor 小販 (D) secretary。night market vendor 指夜市小販。",
    "vocabIndex": 5
  },
  {
    "q": "The house was broken into while the family was on vacation, and the ______ stole valuable jewelry from the safe.",
    "options": [
      "thief",
      "salesman",
      "mechanic",
      "servant"
    ],
    "answer": 0,
    "cn": "這家人度假時房子遭人破門而入，竊賊從保險箱裡偷走了昂貴的珠寶。 【選項解析】(A) salesman (B) thief 竊賊 (C) mechanic (D) servant。破門偷走珠寶者為 thief。",
    "vocabIndex": 6
  },
  {
    "q": "The guest ______ at the graduation ceremony encouraged students to be resilient when confronting future challenges.",
    "options": [
      "vendor",
      "princess",
      "thief",
      "speaker"
    ],
    "answer": 3,
    "cn": "畢業典禮上的特邀演講嘉賓鼓勵學生在面對未來的挑戰時要保持堅韌不拔。 【選項解析】(A) speaker 演講者 (B) princess (C) thief (D) vendor。guest speaker（特邀演講嘉賓）。",
    "vocabIndex": 7
  },
  {
    "q": "The young crown ______ was next in line for the throne and was trained strictly in international politics from childhood.",
    "options": [
      "prince",
      "mechanic",
      "salesman",
      "secretary"
    ],
    "answer": 0,
    "cn": "年輕的王儲是王位的第一順位繼承人，從小就接受嚴格的國際政治訓練。 【選項解析】(A) mechanic (B) prince 王子 (C) salesman (D) secretary。crown prince 指皇太子/王儲。",
    "vocabIndex": 8
  },
  {
    "q": "Little girls around the world love fairy tales where a beautiful ______ lives happily ever after in a grand palace.",
    "options": [
      "scientist",
      "vendor",
      "thief",
      "princess"
    ],
    "answer": 3,
    "cn": "全世界的小女孩都喜歡童話故事，在故事中美麗的公主在宏偉的城堡裡從此過著幸福快樂的生活。 【選項解析】(A) scientist (B) vendor (C) thief (D) princess 公主。童話故事中的王室女主角為 princess。",
    "vocabIndex": 9
  },
  {
    "q": "An aircraft ______ inspected the jet engine blades thoroughly before granting final takeoff clearance.",
    "options": [
      "salesman",
      "prince",
      "mechanic",
      "speaker"
    ],
    "answer": 2,
    "cn": "飛機機械技工在給予最終起飛許可前，徹底檢查了噴射發動機葉片。 【選項解析】(A) mechanic 技工 (B) prince (C) salesman (D) speaker。aircraft mechanic（飛機維修工程師/技工）。",
    "vocabIndex": 2
  },
  {
    "q": "Nobel Prize-winning ______ from around the world gathered in Stockholm to discuss global climate challenges.",
    "options": [
      "servants",
      "scientists",
      "thieves",
      "vendors"
    ],
    "answer": 1,
    "cn": "來自世界各地的諾貝爾獎得主科學家聚集在斯德哥爾摩，討論全球氣候挑戰。 【選項解析】(A) servants (B) thieves (C) scientists 科學家 (D) vendors。Nobel Prize-winning scientists。",
    "vocabIndex": 1
  },
  {
    "q": "A door-to-door vacuum ______ knocked on our front door yesterday, but mother politely declined his demonstration.",
    "options": [
      "secretary",
      "princess",
      "prince",
      "salesman"
    ],
    "answer": 3,
    "cn": "一名挨家挨戶推銷吸塵器的業務員昨天敲了我們的前門，但母親客氣地拒絕了他的示範。 【選項解析】(A) secretary (B) salesman 推銷員 (C) prince (D) princess。door-to-door vacuum salesman。",
    "vocabIndex": 0
  },
  {
    "q": "The school board appointed a competent ______ to take minutes during executive meetings and maintain archived records.",
    "options": [
      "mechanic",
      "thief",
      "secretary",
      "vendor"
    ],
    "answer": 2,
    "cn": "學校董事會任命了一位稱職的秘書在執行會議期間記錄會議紀錄並維護存檔記錄。 【選項解析】(A) mechanic (B) thief (C) vendor (D) secretary 秘書。負責會議記錄（take minutes）者為 secretary。",
    "vocabIndex": 3
  },
  {
    "q": "The cruel master ordered his overworked ______ to chop firewood all night without offering him any warm food.",
    "options": [
      "servant",
      "scientist",
      "speaker",
      "salesman"
    ],
    "answer": 0,
    "cn": "殘忍的主人命令他那過勞的僕人整夜砍柴，卻沒有給他任何溫暖的食物。 【選項解析】(A) scientist (B) servant 僕人 (C) speaker (D) salesman。服侍主人（master）的人為 servant。",
    "vocabIndex": 4
  },
  {
    "q": "A souvenir ______ set up a stall near the famous landmark selling handmade wooden postcards to foreign tourists.",
    "options": [
      "prince",
      "vendor",
      "thief",
      "secretary"
    ],
    "answer": 1,
    "cn": "紀念品小販在著名地標附近擺了一個攤位，向外國遊客出售手工木製明信片。 【選項解析】(A) vendor 攤販 (B) prince (C) thief (D) secretary。souvenir vendor（紀念品攤販）。",
    "vocabIndex": 5
  },
  {
    "q": "Police detectives matched fingerprints found on the broken window frame to a notorious jewel ______.",
    "options": [
      "salesman",
      "mechanic",
      "thief",
      "scientist"
    ],
    "answer": 2,
    "cn": "警察偵探將破碎窗框上發現的指紋與一名臭名昭著的珠寶大盜進行了比對匹配。 【選項解析】(A) salesman (B) mechanic (C) thief 竊賊 (D) scientist。jewel thief（珠寶竊賊）。",
    "vocabIndex": 6
  },
  {
    "q": "During the debate competition, each student ______ had exactly three minutes to present an opening argument.",
    "options": [
      "speaker",
      "prince",
      "vendor",
      "servant"
    ],
    "answer": 0,
    "cn": "在辯論比賽中，每位學生發言者正好有三分鐘時間陳述開場論點。 【選項解析】(A) prince (B) speaker 發言者 (C) vendor (D) servant。debate speaker 指辯論發言選手。",
    "vocabIndex": 7
  },
  {
    "q": "In the royal fairy tale, the handsome ______ rode through enchanted forests to rescue his beloved companion.",
    "options": [
      "salesman",
      "secretary",
      "mechanic",
      "prince"
    ],
    "answer": 3,
    "cn": "在王室童話中，英俊的王子騎馬穿越魔法森林去拯救他心愛的伴侶。 【選項解析】(A) prince 王子 (B) secretary (C) mechanic (D) salesman。handsome prince 為童話典型形象。",
    "vocabIndex": 8
  },
  {
    "q": "The charity gala was hosted by an elegant ______, who donated millions of dollars to build children's hospitals.",
    "options": [
      "thief",
      "princess",
      "vendor",
      "scientist"
    ],
    "answer": 1,
    "cn": "這場慈善晚會由一位優雅的公主主持，她捐贈了數百萬美元建造兒童醫院。 【選項解析】(A) thief (B) vendor (C) princess 公主 (D) scientist。royal princess 出席主持慈善晚會。",
    "vocabIndex": 9
  },
  {
    "q": "Because my bicycle chain snapped in half, the neighborhood bike ______ repaired it with a replacement link.",
    "options": [
      "salesman",
      "speaker",
      "mechanic",
      "prince"
    ],
    "answer": 2,
    "cn": "因為我的自行車鏈條斷成了兩截，鄰里自行車技工用替換鏈節把它修好了。 【選項解析】(A) salesman (B) mechanic 技工 (C) speaker (D) prince。bike mechanic 指自行車修護技工。",
    "vocabIndex": 2
  },
  {
    "q": "Dedicated marine ______ spent three months studying coral reef restoration off the southern coast of Taiwan.",
    "options": [
      "servants",
      "thieves",
      "vendors",
      "scientists"
    ],
    "answer": 3,
    "cn": "敬業的海洋科學家花了三個月時間研究台灣南部海岸附近的珊瑚礁修復工作。 【選項解析】(A) servants (B) scientists 科學家 (C) vendors (D) thieves。marine scientists 指海洋科學家。",
    "vocabIndex": 1
  },
  {
    "q": "An enthusiastic insurance ______ called Mr. Wang to explain the financial advantages of long-term retirement policies.",
    "options": [
      "salesman",
      "secretary",
      "princess",
      "mechanic"
    ],
    "answer": 0,
    "cn": "一位熱心的保險業務員打電話給王先生，解釋長期退休保單的財務優勢。 【選項解析】(A) princess (B) secretary (C) salesman 業務員 (D) mechanic。insurance salesman 指保險業務員。",
    "vocabIndex": 0
  },
  {
    "q": "The personal ______ managed the celebrity's daily schedule, answered fan mail, and organized press conferences.",
    "options": [
      "thief",
      "secretary",
      "vendor",
      "speaker"
    ],
    "answer": 1,
    "cn": "私人秘書管理名人的日常行程安排、回覆粉絲信件並組織記者會。 【選項解析】(A) thief (B) secretary 秘書 (C) vendor (D) speaker。personal secretary 指私人秘書。",
    "vocabIndex": 3
  },
  {
    "q": "Street food ______ outside the sports arena did booming business selling hot dogs and cold soda during the game.",
    "options": [
      "vendors",
      "mechanics",
      "scientists",
      "princes"
    ],
    "answer": 0,
    "cn": "體育場外的街頭食品小販在比賽期間賣熱狗和冷冰汽水，生意興隆。 【選項解析】(A) princes (B) mechanics (C) scientists (D) vendors 攤販。street food vendors 指路邊飲食攤商。",
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "salesman": {
    "pos": "n.",
    "en_def": "a man whose job involves selling goods or services",
    "cn_def": "業務員；推銷員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a man whose job involves selling goods or services",
        "cn_def": "業務員；推銷員"
      }
    ]
  },
  "scientist": {
    "pos": "n.",
    "en_def": "a person who studies or has expert knowledge in one or more sciences",
    "cn_def": "科學家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who studies or has expert knowledge in one or more sciences",
        "cn_def": "科學家"
      }
    ]
  },
  "mechanic": {
    "pos": "n.",
    "en_def": "a person who repairs and maintains machinery, especially car engines",
    "cn_def": "技工；修車工",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who repairs and maintains machinery, especially car engines",
        "cn_def": "技工；修車工"
      }
    ]
  },
  "secretary": {
    "pos": "n.",
    "en_def": "a person employed to assist with correspondence, keep records, and make appointments",
    "cn_def": "秘書",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person employed to assist with correspondence, keep records, and make appointments",
        "cn_def": "秘書"
      }
    ]
  },
  "servant": {
    "pos": "n.",
    "en_def": "a person who performs duties for others, especially in a domestic setting",
    "cn_def": "僕人；傭人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who performs duties for others, especially in a domestic setting",
        "cn_def": "僕人；傭人"
      }
    ]
  },
  "vendor": {
    "pos": "n.",
    "en_def": "a person or company offering something for sale, especially street traders",
    "cn_def": "小販；攤販；廠商",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or company offering something for sale, especially street traders",
        "cn_def": "小販；攤販；廠商"
      }
    ]
  },
  "thief": {
    "pos": "n.",
    "en_def": "a person who steals another person's property, especially secretly (pl. thieves)",
    "cn_def": "小偷；竊賊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who steals another person's property, especially secretly (pl. thieves)",
        "cn_def": "小偷；竊賊"
      }
    ]
  },
  "speaker": {
    "pos": "n.",
    "en_def": "a person who speaks, especially at a formal event; audio device",
    "cn_def": "演講者；講者；揚聲器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who speaks, especially at a formal event; audio device",
        "cn_def": "演講者；講者；揚聲器"
      }
    ]
  },
  "prince": {
    "pos": "n.",
    "en_def": "the son of a monarch; a close male member of a royal family",
    "cn_def": "王子；親王",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the son of a monarch; a close male member of a royal family",
        "cn_def": "王子；親王"
      }
    ]
  },
  "princess": {
    "pos": "n.",
    "en_def": "the daughter of a monarch; the wife of a prince",
    "cn_def": "公主；王妃",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the daughter of a monarch; the wife of a prince",
        "cn_def": "公主；王妃"
      }
    ]
  },
  "scientists": {
    "pos": "",
    "en_def": "",
    "cn_def": "科學家",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "科學家"
      }
    ]
  },
  "vendors": {
    "pos": "",
    "en_def": "",
    "cn_def": "攤販",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "攤販"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
