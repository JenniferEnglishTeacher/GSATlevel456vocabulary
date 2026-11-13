// Lesson 6 Quiz Data: Family Relations, Social Roles & Guests
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 6 - Family Relations, Social Roles & Guests",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "granddaughter",
    "pos": "n.",
    "cn_def": "孫女；外孫女",
    "en_def": "a daughter of your son or daughter",
    "sentence": "The elderly lady smiled happily as her little {{BLANK}} ran into her arms and handed her a handmade birthday card.",
    "cn": "當小孫女跑進那位年長女士的懷裡並遞給她一張手工生日卡片時，她幸福地微笑著。"
  },
  {
    "word": "grandson",
    "pos": "n.",
    "cn_def": "孫子；外孫",
    "en_def": "a son of your son or daughter",
    "sentence": "Mr. Watson took his energetic ten-year-old {{BLANK}} to the baseball park, and they caught a foul ball in the third inning.",
    "cn": "華生先生帶著他精力充沛的十歲孫子去棒球場，他們在第三局接到了一顆界外球。"
  },
  {
    "word": "nephew",
    "pos": "n.",
    "cn_def": "姪子；外甥",
    "en_def": "a son of your brother or sister",
    "sentence": "Aunt Catherine bought a remote-controlled helicopter for her favorite {{BLANK}}, and they flew it together in the garden.",
    "cn": "凱薩琳姑姑為她最喜歡的姪子買了一架遙控直升機，他們一起在花園裡放飛它。"
  },
  {
    "word": "niece",
    "pos": "n.",
    "cn_def": "姪女；外甥女",
    "en_def": "a daughter of your brother or sister",
    "sentence": "Uncle David was extremely proud when his smart {{BLANK}} graduated from medical school with top honors last month.",
    "cn": "上個月，當大衛叔叔聰穎的姪女以優異的成績從醫學院畢業時，他感到無比自豪。"
  },
  {
    "word": "relative",
    "pos": "n. / adj.",
    "cn_def": "親戚；親屬",
    "en_def": "a person connected by blood or marriage; comparative",
    "sentence": "During the Lunar New Year holidays, dozens of distant {{BLANK}}s gather at our ancestral home to share a festive reunion dinner.",
    "cn": "在農曆新年假期期間，數十位遠房親戚聚集在我們祖厝，共同享用豐盛的團圓晚餐。"
  },
  {
    "word": "couple",
    "pos": "n.",
    "cn_def": "夫妻；情侶；一對",
    "en_def": "two people who are married or in a romantic relationship; a small number",
    "sentence": "The newly married young {{BLANK}} rented a cozy apartment near the park, and they spent weekends decorating their living room.",
    "cn": "這對新婚的年輕夫婦在公園附近租了一間溫馨的公寓，他們利用週末時間裝飾客廳。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "客人；賓客",
    "en_def": "a person invited to visit someone's home or attend an event",
    "sentence": "The hotel staff prepared fresh flowers and fruit baskets to welcome every VIP {{BLANK}} attending the international conference.",
    "cn": "飯店員工準備了鮮花和水果籃，以歡迎出席這次國際會議的每一位貴賓。"
  },
  {
    "word": "host",
    "pos": "n. / v.",
    "cn_def": "主人；主辦；主持",
    "en_def": "a person who receives or entertains guests; to organize an event",
    "sentence": "The gracious {{BLANK}} welcomed each visitor at the front door with a warm smile and served hot tea in the parlor.",
    "cn": "親切的主人在前門帶著溫暖的微笑迎接每位訪客，並在客廳裡為大家奉上熱茶。"
  },
  {
    "word": "member",
    "pos": "n.",
    "cn_def": "成員；會員",
    "en_def": "a person or animal belonging to a group, club, or society",
    "sentence": "Because Samuel has been an active {{BLANK}} of the science club for three years, he was elected team leader for the competition.",
    "cn": "因為塞繆爾連續三年擔任科學社團的活躍成員，他被推選為本次競賽的隊長。"
  },
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "參觀者；訪客",
    "en_def": "a person who visits someone or somewhere for a short time",
    "sentence": "Museum guides kindly reminded each foreign {{BLANK}} not to take photos using flash inside the ancient Egyptian exhibition hall.",
    "cn": "博物館導覽員親切地提醒每一位外國參觀者，在古埃及展覽廳內不得使用閃光燈拍照。"
  }
];

const MCQS = [
  {
    "q": "The proud grandmother baked sweet apple pies to celebrate her five-year-old ______'s first ballet performance.",
    "options": [
      "grandson",
      "couple",
      "granddaughter",
      "host"
    ],
    "answer": 2,
    "cn": "自豪的祖母烤了香甜的蘋果派，以慶祝她五歲孫女的第一場芭蕾舞表演。 【選項解析】(A) grandson 孫子  (B) granddaughter 孫女  (C) couple 夫婦  (D) host 主人。由 ballet performance（芭蕾舞表演）及 grandmother 可知選 granddaughter。",
    "vocabIndex": 0
  },
  {
    "q": "Grandpa taught his teenage ______ how to cast a fishing line and steer the wooden boat across the lake.",
    "options": [
      "granddaughter",
      "grandson",
      "niece",
      "guest"
    ],
    "answer": 1,
    "cn": "祖父教他十幾歲的孫子如何拋投釣魚線並在湖面上掌舵木船。 【選項解析】(A) granddaughter 孫女  (B) niece 姪女  (C) grandson 孫子  (D) guest 客人。由 Grandpa... steer the wooden boat 可知帶孫子 grandson 釣魚。",
    "vocabIndex": 1
  },
  {
    "q": "Uncle Kevin sent a beautiful wooden toy castle to his six-year-old ______ on his birthday.",
    "options": [
      "visitor",
      "niece",
      "host",
      "nephew"
    ],
    "answer": 3,
    "cn": "凱文叔叔在六歲姪子生日時，送了一座精美的木製玩具城堡給他。 【選項解析】(A) nephew 姪子  (B) niece 姪女  (C) host 主人  (D) visitor 訪客。由 his birthday 可知姪子/外甥為男性 nephew。",
    "vocabIndex": 2
  },
  {
    "q": "Aunt Sarah helped her teenage ______ select an elegant white dress for her high school graduation ball.",
    "options": [
      "niece",
      "grandson",
      "nephew",
      "member"
    ],
    "answer": 0,
    "cn": "莎拉姑姑幫助她十幾歲的姪女挑選了一件優雅的白禮服，以參加高中畢業舞會。 【選項解析】(A) nephew 姪子  (B) grandson 孫子  (C) niece 姪女  (D) member 成員。選禮服參加畢業舞會的姪女為 niece。",
    "vocabIndex": 3
  },
  {
    "q": "When my parents celebrated their wedding anniversary, more than thirty close ______ traveled across the country to attend.",
    "options": [
      "hosts",
      "couples",
      "relatives",
      "members"
    ],
    "answer": 2,
    "cn": "當我父母慶祝結婚紀念日時，超過三十位近親親屬橫跨全國趕來參加盛會。 【選項解析】(A) relatives 親屬  (B) couples 夫妻  (C) hosts 主人  (D) members 會員。close relatives 指「近親」。",
    "vocabIndex": 4
  },
  {
    "q": "The newlywed ______ held hands tightly as they walked down the sunlit beach during their honeymoon in Hawaii.",
    "options": [
      "guest",
      "visitor",
      "relative",
      "couple"
    ],
    "answer": 3,
    "cn": "這對新婚夫婦在夏威夷度蜜月期間，漫步在陽光明媚的沙灘上時緊緊牽著手。 【選項解析】(A) guest 客人  (B) couple 夫婦  (C) relative 親戚  (D) visitor 參觀者。newlywed couple 指「新婚夫妻」。",
    "vocabIndex": 5
  },
  {
    "q": "The polite waiter made sure that every invited dinner ______ had a glass of chilled sparkling water at the banquet.",
    "options": [
      "guest",
      "relative",
      "host",
      "nephew"
    ],
    "answer": 0,
    "cn": "有禮貌的服務生確保宴會上每位受邀的晚宴賓客，都能享有一杯冰鎮氣泡水。 【選項解析】(A) host 主人  (B) relative 親戚  (C) guest 賓客  (D) nephew 姪子。invited dinner guest 指「受邀晚宴賓客」。",
    "vocabIndex": 6
  },
  {
    "q": "As the generous party ______, Mr. Jenkins made sure all his neighbors had plenty of barbecue and cold drinks.",
    "options": [
      "guest",
      "host",
      "grandson",
      "niece"
    ],
    "answer": 1,
    "cn": "身為慷慨的派對主人，詹金斯先生確保所有的鄰居都有充足的烤肉和冷飲。 【選項解析】(A) guest 客人  (B) host 主人  (C) grandson 孫子  (D) niece 姪女。舉辦派對款待賓客者為 host。",
    "vocabIndex": 7
  },
  {
    "q": "To join the community swimming pool and use the fitness equipment, you must register as an annual ______.",
    "options": [
      "visitor",
      "host",
      "couple",
      "member"
    ],
    "answer": 3,
    "cn": "若要加入社區游泳池並使用健身器材，你必須註冊成為年度會員。 【選項解析】(A) visitor 訪客  (B) member 會員  (C) couple 夫婦  (D) host 主人。register as an annual member 指註冊成為年度會員。",
    "vocabIndex": 8
  },
  {
    "q": "Thousands of international ______ travel to Taipei every autumn to admire the colorful fireworks and historic monuments.",
    "options": [
      "visitors",
      "nieces",
      "nephews",
      "hosts"
    ],
    "answer": 0,
    "cn": "數千名國際遊客每年秋天前往台北，欣賞絢麗的煙火並參觀歷史名勝。 【選項解析】(A) nieces 姪女  (B) visitors 遊客  (C) nephews 姪子  (D) hosts 主人。到訪台北觀光者為 visitors。",
    "vocabIndex": 9
  },
  {
    "q": "Old Mrs. Higgins knitted a soft pink wool sweater for her newborn ______ before the cold winter set in.",
    "options": [
      "grandson",
      "granddaughter",
      "couple",
      "guest"
    ],
    "answer": 1,
    "cn": "希金斯老太太在寒冬降臨前，為她剛出生的孫女織了一件柔軟的粉紅色羊毛毛衣。 【選項解析】(A) grandson 孫子  (B) granddaughter 孫女  (C) couple 夫婦  (D) guest 客人。粉紅毛衣織給新生孫女 granddaughter。",
    "vocabIndex": 0
  },
  {
    "q": "The grandfather beamed with pride when his twenty-year-old ______ scored the winning goal in the university soccer tournament.",
    "options": [
      "granddaughter",
      "niece",
      "grandson",
      "host"
    ],
    "answer": 2,
    "cn": "當二十歲的孫子在大學足球錦標賽中踢進致勝球時，祖父滿臉自豪歡喜。 【選項解析】(A) granddaughter 孫女  (B) grandson 孫子  (C) niece 姪女  (D) host 主人。由 his twenty-year-old grandson 可知為孫子。",
    "vocabIndex": 1
  },
  {
    "q": "Because his father had no brothers, Jack was the only beloved ______ on his mother's side of the family.",
    "options": [
      "niece",
      "nephew",
      "couple",
      "visitor"
    ],
    "answer": 1,
    "cn": "因為他父親沒有兄弟，傑克是母親那邊家族裡唯一備受疼愛的姪子/外甥。 【選項解析】(A) nephew 姪子  (B) niece 姪女  (C) couple 夫婦  (D) visitor 訪客。Jack 為男性，故為 nephew。",
    "vocabIndex": 2
  },
  {
    "q": "Mary asked her talented ______ to play the violin at her wedding ceremony, and the performance moved everyone to tears.",
    "options": [
      "nephew",
      "member",
      "host",
      "niece"
    ],
    "answer": 3,
    "cn": "瑪麗請她多才多藝的姪女在婚禮上演奏小提琴，這場演奏讓所有人感動落淚。 【選項解析】(A) nephew 姪子  (B) niece 姪女  (C) host 主人  (D) member 成員。親戚晚輩中的女性演奏家為 niece。",
    "vocabIndex": 3
  },
  {
    "q": "We invited all our living ______ to the ancestral village reunion, but some could not travel due to old age.",
    "options": [
      "couples",
      "visitors",
      "relatives",
      "guests"
    ],
    "answer": 2,
    "cn": "我們邀請了所有健在的親戚參加祖村宗親團聚，但有些人因年事已高無法遠行。 【選項解析】(A) couples 夫婦  (B) relatives 親屬  (C) visitors 訪客  (D) guests 賓客。ancestral village reunion 聚會對象為 relatives。",
    "vocabIndex": 4
  },
  {
    "q": "After dating for seven years through college, the romantic young ______ finally decided to announce their engagement.",
    "options": [
      "couple",
      "host",
      "guest",
      "member"
    ],
    "answer": 0,
    "cn": "在大學相戀七年後，這對浪漫的年輕情侶終於決定宣布訂婚。 【選項解析】(A) guest 賓客  (B) host 主人  (C) couple 情侶  (D) member 成員。相戀宣布訂婚者為 couple。",
    "vocabIndex": 5
  },
  {
    "q": "The hotel manager personally greeted each important foreign ______ at the lobby entrance and arranged baggage delivery.",
    "options": [
      "host",
      "nephew",
      "relative",
      "guest"
    ],
    "answer": 3,
    "cn": "飯店經理在大廳門口親自迎接每一位重要的外國貴賓，並安排行李運送。 【選項解析】(A) host 主人  (B) guest 貴賓  (C) relative 親戚  (D) nephew 姪子。飯店接待的客人為 guest。",
    "vocabIndex": 6
  },
  {
    "q": "Taiwan will proudly ______ the international technology summit next year, welcoming thousands of foreign experts.",
    "options": [
      "host",
      "guest",
      "relative",
      "niece"
    ],
    "answer": 0,
    "cn": "台灣明年將榮幸地主辦國際科技峰會，熱烈歡迎數千名外國專家與會。 【選項解析】(A) guest 款待  (B) host 主辦  (C) relative 親屬  (D) niece 姪女。host the summit 指主辦高峰會。",
    "vocabIndex": 7
  },
  {
    "q": "Every committee ______ was invited to vote on the environmental protection policy during the annual meeting.",
    "options": [
      "visitor",
      "member",
      "couple",
      "grandson"
    ],
    "answer": 1,
    "cn": "每位委員會成員都被邀請在年會上就環境保護政策進行投票表決。 【選項解析】(A) visitor 訪客  (B) member 成員  (C) couple 夫婦  (D) grandson 孫子。committee member 指委員會成員。",
    "vocabIndex": 8
  },
  {
    "q": "The national park guide warned every tourist and ______ to stay strictly on the marked walking trails for safety.",
    "options": [
      "nephew",
      "niece",
      "visitor",
      "host"
    ],
    "answer": 2,
    "cn": "國家公園導覽員告誡每位遊客和參觀者，為了自身安全必須嚴格走在標記步道上。 【選項解析】(A) nephew 姪子  (B) niece 姪女  (C) visitor 參觀者  (D) host 主人。national park tourist and visitor 指國家公園遊客。",
    "vocabIndex": 9
  },
  {
    "q": "The little ______ sat happily on her grandfather's lap while he read bedtime stories from a large illustrated book.",
    "options": [
      "granddaughter",
      "grandson",
      "host",
      "couple"
    ],
    "answer": 0,
    "cn": "小孫女高興地坐在祖父的膝蓋上，聽他朗讀大圖畫書裡的睡前故事。 【選項解析】(A) grandson 孫子  (B) granddaughter 孫女  (C) host 主人  (D) couple 夫婦。sit on grandfather's lap 聽故事的小女孩為 granddaughter。",
    "vocabIndex": 0
  },
  {
    "q": "When Mr. Davis retired, his eldest ______ took over management of the family hardware store in the downtown district.",
    "options": [
      "granddaughter",
      "guest",
      "niece",
      "grandson"
    ],
    "answer": 3,
    "cn": "戴維斯先生退休後，他年紀最大的長孫接管了市中心家族五金店的經營。 【選項解析】(A) granddaughter 孫女  (B) grandson 孫子  (C) niece 姪女  (D) guest 賓客。eldest grandson 指長孫。",
    "vocabIndex": 1
  },
  {
    "q": "My sister asked me to babysit my energetic little ______ while she went to the dentist for a tooth extraction.",
    "options": [
      "couple",
      "niece",
      "nephew",
      "host"
    ],
    "answer": 2,
    "cn": "我姐姐請我在她去牙醫拔牙期間，幫忙照看我那活潑好動的小外甥。 【選項解析】(A) nephew 外甥  (B) niece 外甥女  (C) couple 夫婦  (D) host 主人。照顧姊姊的兒子即為 nephew。",
    "vocabIndex": 2
  },
  {
    "q": "The kind aunt taught her young ______ how to bake chocolate chip cookies and decorate frosted birthday cupcakes.",
    "options": [
      "nephew",
      "niece",
      "grandson",
      "visitor"
    ],
    "answer": 1,
    "cn": "親切的姑姑教她年幼的姪女如何烘焙巧克力脆片餅乾，並裝飾糖霜生日杯子蛋糕。 【選項解析】(A) nephew 姪子  (B) niece 姪女  (C) grandson 孫子  (D) visitor 訪客。教導女性晚輩烘焙，選 niece。",
    "vocabIndex": 3
  },
  {
    "q": "Although we do not see each other often, my distant ______ always sends handwritten greeting cards during the holidays.",
    "options": [
      "couple",
      "member",
      "host",
      "relative"
    ],
    "answer": 3,
    "cn": "儘管我們不常碰面，但我遠方的親戚總是在節日期間寄來手寫的問候賀卡。 【選項解析】(A) couple 夫婦  (B) relative 親戚  (C) host 主人  (D) member 成員。distant relative 指遠親。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "granddaughter": {
    "pos": "n.",
    "en_def": "a daughter of your son or daughter",
    "cn_def": "孫女；外孫女",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a daughter of your son or daughter",
        "cn_def": "孫女；外孫女"
      }
    ]
  },
  "grandson": {
    "pos": "n.",
    "en_def": "a son of your son or daughter",
    "cn_def": "孫子；外孫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a son of your son or daughter",
        "cn_def": "孫子；外孫"
      }
    ]
  },
  "nephew": {
    "pos": "n.",
    "en_def": "a son of your brother or sister",
    "cn_def": "姪子；外甥",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a son of your brother or sister",
        "cn_def": "姪子；外甥"
      }
    ]
  },
  "niece": {
    "pos": "n.",
    "en_def": "a daughter of your brother or sister",
    "cn_def": "姪女；外甥女",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a daughter of your brother or sister",
        "cn_def": "姪女；外甥女"
      }
    ]
  },
  "relative": {
    "pos": "n. / adj.",
    "en_def": "a person connected by blood or marriage; comparative",
    "cn_def": "親戚；親屬",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a person connected by blood or marriage; comparative",
        "cn_def": "親戚；親屬"
      }
    ]
  },
  "couple": {
    "pos": "n.",
    "en_def": "two people who are married or in a romantic relationship; a small number",
    "cn_def": "夫妻；情侶；一對",
    "combined": [
      {
        "pos": "n.",
        "en_def": "two people who are married or in a romantic relationship; a small number",
        "cn_def": "夫妻；情侶；一對"
      }
    ]
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person invited to visit someone's home or attend an event",
    "cn_def": "客人；賓客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person invited to visit someone's home or attend an event",
        "cn_def": "客人；賓客"
      }
    ]
  },
  "host": {
    "pos": "n. / v.",
    "en_def": "a person who receives or entertains guests; to organize an event",
    "cn_def": "主人；主辦；主持",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a person who receives or entertains guests; to organize an event",
        "cn_def": "主人；主辦；主持"
      }
    ]
  },
  "member": {
    "pos": "n.",
    "en_def": "a person or animal belonging to a group, club, or society",
    "cn_def": "成員；會員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or animal belonging to a group, club, or society",
        "cn_def": "成員；會員"
      }
    ]
  },
  "visitor": {
    "pos": "n.",
    "en_def": "a person who visits someone or somewhere for a short time",
    "cn_def": "參觀者；訪客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who visits someone or somewhere for a short time",
        "cn_def": "參觀者；訪客"
      }
    ]
  },
  "hosts": {
    "pos": "",
    "en_def": "",
    "cn_def": "主人",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "主人"
      }
    ]
  },
  "couples": {
    "pos": "",
    "en_def": "",
    "cn_def": "夫妻",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "夫妻"
      }
    ]
  },
  "relatives": {
    "pos": "",
    "en_def": "",
    "cn_def": "親屬",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "親屬"
      }
    ]
  },
  "members": {
    "pos": "",
    "en_def": "",
    "cn_def": "會員",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "會員"
      }
    ]
  },
  "visitors": {
    "pos": "",
    "en_def": "",
    "cn_def": "遊客",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "遊客"
      }
    ]
  },
  "nieces": {
    "pos": "",
    "en_def": "",
    "cn_def": "姪女",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "姪女"
      }
    ]
  },
  "nephews": {
    "pos": "",
    "en_def": "",
    "cn_def": "姪子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "姪子"
      }
    ]
  },
  "guests": {
    "pos": "",
    "en_def": "",
    "cn_def": "賓客",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "賓客"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
