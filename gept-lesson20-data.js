// Lesson 20 Quiz Data: Sports, Leisure Activities & Camping Recreation
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 20 - Sports, Leisure Activities & Camping Recreation",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "activities",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "a thing that a person or group does or has done",
    "sentence": "The summer camp offered many exciting outdoor {{BLANK}} such as kayaking, rock climbing, and forest hiking.",
    "cn": "夏令營提供了許多令人興奮的戶外活動，例如划皮艇、攀岩以及森林健行。"
  },
  {
    "word": "badminton",
    "pos": "n.",
    "cn_def": "羽毛球運動",
    "en_def": "a court game played with lightweight rackets and a shuttlecock",
    "sentence": "After finishing classes on Friday afternoon, Kevin and his classmate played three intense games of {{BLANK}}.",
    "cn": "星期五下午放學後，凱文和他的同學在體育館打了三場激烈的羽毛球比賽。"
  },
  {
    "word": "bowling",
    "pos": "n.",
    "cn_def": "保齡球運動",
    "en_def": "a game in which players roll a heavy ball down a wooden lane to knock down pins",
    "sentence": "For my brother's sixteenth birthday celebration, we booked two lanes at the downtown {{BLANK}} alley.",
    "cn": "為了慶祝我弟弟的十六歲生日，我們在市中心的保齡球館預訂了兩個球道。"
  },
  {
    "word": "football",
    "pos": "n.",
    "cn_def": "美式足球；橄欖球；足球",
    "en_def": "a game played with an oval ball on an outdoor field; American football or soccer",
    "sentence": "High school students gathered at the outdoor stadium on Friday night to cheer for their varsity {{BLANK}} team.",
    "cn": "高中生們週五晚上聚集在戶外體育場，為他們的學校美式足球代表隊加油吶喊。"
  },
  {
    "word": "frisbee",
    "pos": "n.",
    "cn_def": "飛盤",
    "en_def": "a plastic flying disc thrown for recreation or in competitive team sports",
    "sentence": "On sunny Saturday afternoons, dog owners gather in the riverside park and toss a bright plastic {{BLANK}} to their pets.",
    "cn": "在陽光明媚的週六午後，養狗人士聚集在河濱公園，向他們的寵物拋擲鮮豔的塑膠飛盤。"
  },
  {
    "word": "golf",
    "pos": "n.",
    "cn_def": "高爾夫球",
    "en_def": "a club-and-ball sport played across an outdoor course of 9 or 18 holes",
    "sentence": "My retired grandfather plays eighteen holes of {{BLANK}} every Wednesday morning with his former business partners.",
    "cn": "我退休的祖父每週三早上都會與他以前的商業夥伴打十八洞高爾夫球。"
  },
  {
    "word": "soccer",
    "pos": "n.",
    "cn_def": "足球（英式足球）",
    "en_def": "a football game played between two teams of eleven players with a round ball",
    "sentence": "During the FIFA World Cup tournament, millions of passionate fans watch their national {{BLANK}} team on television.",
    "cn": "在國際足協世界盃錦標賽期間，數以百萬計的熱情球迷在電視機前觀看他們的國家足球隊比賽。"
  },
  {
    "word": "volleyball",
    "pos": "n.",
    "cn_def": "排球",
    "en_def": "a team game played by hitting an inflated ball back and forth over a high net",
    "sentence": "During their summer vacation at Kenting, the teenagers enjoyed playing beach {{BLANK}} under the blue sky.",
    "cn": "在墾丁放暑假期間，青少年們在藍天下的沙灘上盡情享受打沙灘排球的樂趣。"
  },
  {
    "word": "tent",
    "pos": "n.",
    "cn_def": "帳篷",
    "en_def": "a portable shelter made of fabric supported by poles and ropes",
    "sentence": "Before the mountain rainstorm arrived, the hikers pitched their waterproof canvas {{BLANK}} on high ground.",
    "cn": "在山區暴風雨來臨之前，登山者們在高地上搭起了他們的防水帆布帳篷。"
  },
  {
    "word": "chess",
    "pos": "n.",
    "cn_def": "西洋棋；國際象棋",
    "en_def": "a strategic board game for two players played on a checkered board with sixteen pieces each",
    "sentence": "Grandmaster players must think three or four moves ahead when competing in a national {{BLANK}} championship.",
    "cn": "國際特級大師在參加全國西洋棋錦標賽時，必須提前深思熟慮三到四步棋。"
  }
];

const MCQS = [
  {
    "q": "Regular physical ______ such as jogging and swimming helps keep your heart healthy and reduces stress.",
    "options": [
      "activity",
      "tent",
      "frisbee",
      "chess"
    ],
    "answer": 0,
    "cn": "慢跑和游泳等規律的身體活動有助於保持心臟健康並減輕壓力。 【選項解析】(A) activity 活動  (B) tent 帳篷  (C) frisbee 飛盤  (D) chess 西洋棋。身體活動為 physical activity。",
    "vocabIndex": 0
  },
  {
    "q": "Samuel bought a professional carbon-fiber racket and a tube of goose feather shuttlecocks for ______.",
    "options": [
      "football",
      "golf",
      "bowling",
      "badminton"
    ],
    "answer": 3,
    "cn": "塞繆爾買了一支專業碳纖維球拍和一筒鵝毛羽毛球來打羽球。 【選項解析】(A) football 美式足球  (B) badminton 羽毛球  (C) bowling 保齡球  (D) golf 高爾夫。羽球器材為 shuttlecock for badminton。",
    "vocabIndex": 1
  },
  {
    "q": "When you roll the heavy ball down the polished lane and knock down all ten pins in ______, you score a strike.",
    "options": [
      "soccer",
      "bowling",
      "chess",
      "golf"
    ],
    "answer": 1,
    "cn": "當你在保齡球運動中將重球滾下磨光球道並擊倒所有十個球瓶時，就是全倒。 【選項解析】(A) soccer 足球  (B) chess 西洋棋  (C) bowling 保齡球  (D) golf 高爾夫。擊倒十瓶為 bowling strike。",
    "vocabIndex": 2
  },
  {
    "q": "In American high schools, playing on the varsity ______ team is considered a great athletic achievement.",
    "options": [
      "chess",
      "tent",
      "football",
      "activity"
    ],
    "answer": 2,
    "cn": "在美國高中，加入學校美式足球代表隊被視為一項重大的體育成就。 【選項解析】(A) chess 西洋棋  (B) tent 帳篷  (C) activity 活動  (D) football 美式足球。學校校隊為 varsity football team。",
    "vocabIndex": 3
  },
  {
    "q": "The border collie jumped two feet into the air to catch the spinning yellow plastic ______ with its teeth.",
    "options": [
      "golf",
      "frisbee",
      "bowling",
      "chess"
    ],
    "answer": 1,
    "cn": "這隻邊境牧羊犬躍入空中兩英尺高，用牙齒接住了旋轉的黃色塑膠飛盤。 【選項解析】(A) frisbee 飛盤  (B) golf 高爾夫  (C) bowling 保齡球  (D) chess 西洋棋。空中旋轉拋接玩具為 plastic frisbee。",
    "vocabIndex": 4
  },
  {
    "q": "Wealthy executives often conduct informal business negotiations while walking across a green ______ course.",
    "options": [
      "golf",
      "chess",
      "badminton",
      "volleyball"
    ],
    "answer": 0,
    "cn": "富裕的企業主管經常在漫步走過翠綠的高爾夫球場時進行非正式商業談判。 【選項解析】(A) chess 西洋棋  (B) golf 高爾夫  (C) badminton 羽毛球  (D) volleyball 排球。綠草球場為 golf course。",
    "vocabIndex": 5
  },
  {
    "q": "The Brazilian athlete kicked the black-and-white ball into the top corner of the goal net during the ______ match.",
    "options": [
      "bowling",
      "golf",
      "chess",
      "soccer"
    ],
    "answer": 3,
    "cn": "巴西運動員在足球比賽中將黑白相間的皮球踢進球門網的上角得分。 【選項解析】(A) bowling 保齡球  (B) golf 高爾夫  (C) soccer 足球  (D) chess 西洋棋。黑白皮球踢進球門為 soccer match。",
    "vocabIndex": 6
  },
  {
    "q": "Two teams of six players dive across the indoor court to prevent the leather ball from hitting the floor in ______.",
    "options": [
      "chess",
      "golf",
      "volleyball",
      "tent"
    ],
    "answer": 2,
    "cn": "在排球運動中，兩支各六人的隊伍在室內球場奮力撲救，防止皮球落水。 【選項解析】(A) chess 西洋棋  (B) golf 高爾夫  (C) tent 帳篷  (D) volleyball 排球。隔網擊球為 volleyball。",
    "vocabIndex": 7
  },
  {
    "q": "We hammered four steel pegs firmly into the soil to prevent our camping ______ from blowing away in the wind.",
    "options": [
      "chess",
      "tent",
      "activity",
      "bowling"
    ],
    "answer": 1,
    "cn": "我們將四根鋼營釘牢固敲進泥土中，以防止露營帳篷在狂風中被吹走。 【選項解析】(A) tent 帳篷  (B) chess 西洋棋  (C) activity 活動  (D) bowling 保齡球。防風固定為 camping tent。",
    "vocabIndex": 8
  },
  {
    "q": "In the ancient strategic board game of ______, the ultimate objective is to trap and checkmate the opponent's king.",
    "options": [
      "chess",
      "golf",
      "soccer",
      "football"
    ],
    "answer": 0,
    "cn": "在古老的策略棋盤遊戲西洋棋中，最終目標是困住並將死對手的國王。 【選項解析】(A) golf 高爾夫  (B) chess 西洋棋  (C) soccer 足球  (D) football 美式足球。圍困將死國王為 game of chess。",
    "vocabIndex": 9
  },
  {
    "q": "Physical education teachers organize a variety of group sports ______ to keep elementary students active.",
    "options": [
      "tents",
      "frisbees",
      "golfs",
      "activities"
    ],
    "answer": 3,
    "cn": "體育老師組織各種團體體育活動，讓小學生保持活躍好動。 【選項解析】(A) tents 帳篷  (B) frisbees 飛盤  (C) activities 活動  (D) golfs 高爾夫。運動項目為 group sports activities。",
    "vocabIndex": 0
  },
  {
    "q": "Hit the shuttlecock firmly over the high net with your racket so that your ______ opponent cannot return it.",
    "options": [
      "bowling",
      "chess",
      "badminton",
      "golf"
    ],
    "answer": 2,
    "cn": "用球拍用力將羽毛球擊過高網，讓你的羽毛球對手無法回擊。 【選項解析】(A) bowling 保齡球  (B) chess 西洋棋  (C) golf 高爾夫  (D) badminton 羽毛球。羽毛球運動對手為 badminton opponent。",
    "vocabIndex": 1
  },
  {
    "q": "You must put on special leather-soled shoes before stepping onto the polished wooden floor of the ______ alley.",
    "options": [
      "tent",
      "football",
      "chess",
      "bowling"
    ],
    "answer": 3,
    "cn": "在踩上磨光木地板的保齡球球道之前，你必須先換上專用皮底鞋。 【選項解析】(A) bowling 保齡球  (B) football 美式足球  (C) chess 西洋棋  (D) tent 帳篷。保齡球場館為 bowling alley。",
    "vocabIndex": 2
  },
  {
    "q": "The quarterback threw a fifty-yard touchdown pass in the final seconds of the championship ______ game.",
    "options": [
      "football",
      "golf",
      "chess",
      "bowling"
    ],
    "answer": 0,
    "cn": "四分衛在冠軍美式足球賽的最後幾秒投擲了一記五十碼的達陣傳球。 【選項解析】(A) golf 高爾夫  (B) football 美式足球  (C) chess 西洋棋  (D) bowling 保齡球。四分衛傳球達陣為 football game。",
    "vocabIndex": 3
  },
  {
    "q": "College students relaxing on the campus lawn enjoyed throwing a neon orange ______ back and forth in the breeze.",
    "options": [
      "bowling",
      "frisbee",
      "golf",
      "tent"
    ],
    "answer": 1,
    "cn": "在校園草坪上放鬆的大學生們享受在微風中來回拋擲螢光橘色飛盤。 【選項解析】(A) bowling 保齡球  (B) golf 高爾夫  (C) frisbee 飛盤  (D) tent 帳篷。草地上拋接玩具為 neon orange frisbee。",
    "vocabIndex": 4
  },
  {
    "q": "Players carry a set of fourteen metal and wooden clubs inside a heavy leather bag across the ______ course.",
    "options": [
      "chess",
      "soccer",
      "golf",
      "volleyball"
    ],
    "answer": 2,
    "cn": "球員們在高爾夫球場上背著裝有一套十四支金屬與木質球桿的重皮袋。 【選項解析】(A) chess 西洋棋  (B) soccer 足球  (C) volleyball 排球  (D) golf 高爾夫。十四支球桿為 golf course 規則。",
    "vocabIndex": 5
  },
  {
    "q": "Referees blow their whistles and show yellow caution cards whenever a ______ player commits a dangerous sliding tackle.",
    "options": [
      "soccer",
      "chess",
      "bowling",
      "golf"
    ],
    "answer": 0,
    "cn": "每當足球員做出危險的鏟球動作時，裁判會吹哨並亮出黃牌警告。 【選項解析】(A) soccer 足球  (B) chess 西洋棋  (C) bowling 保齡球  (D) golf 高爾夫。鏟球亮黃牌為 soccer player。",
    "vocabIndex": 6
  },
  {
    "q": "Playing beach ______ in the soft sand provides an intense cardiovascular workout for your legs and shoulders.",
    "options": [
      "chess",
      "volleyball",
      "golf",
      "bowling"
    ],
    "answer": 1,
    "cn": "在鬆軟沙灘上打沙灘排球為雙腿和肩膀提供了高強度的有氧鍛鍊。 【選項解析】(A) chess 西洋棋  (B) volleyball 排球  (C) golf 高爾夫  (D) bowling 保齡球。沙灘運動為 beach volleyball。",
    "vocabIndex": 7
  },
  {
    "q": "Because the heavy rain began to leak through the fabric, we covered our nylon camping ______ with a plastic tarp.",
    "options": [
      "chess",
      "golf",
      "tent",
      "activity"
    ],
    "answer": 2,
    "cn": "因為大雨開始滲過布料，我們在尼龍露營帳篷上覆蓋了一張塑膠防水布。 【選項解析】(A) chess 西洋棋  (B) golf 高爾夫  (C) tent 帳篷  (D) activity 活動。露營遮蔽所為 nylon camping tent。",
    "vocabIndex": 8
  },
  {
    "q": "The Russian grandmaster spent forty minutes analyzing the board position before moving his wooden queen in ______.",
    "options": [
      "football",
      "bowling",
      "golf",
      "chess"
    ],
    "answer": 3,
    "cn": "俄羅斯特級大師在西洋棋中移動木製皇后棋子之前，花了四十分鐘分析局面。 【選項解析】(A) football 美式足球  (B) bowling 保齡球  (C) golf 高爾夫  (D) chess 西洋棋。棋局棋子移動為 game of chess。",
    "vocabIndex": 9
  },
  {
    "q": "Swimming, cycling, and mountain hiking are our family's favorite recreational weekend ______.",
    "options": [
      "tents",
      "activities",
      "golfs",
      "frisbees"
    ],
    "answer": 1,
    "cn": "游泳、騎自行車以及登山健行是我們全家最喜愛的週末休閒活動。 【選項解析】(A) activities 活動  (B) tents 帳篷  (C) golfs 高爾夫  (D) frisbees 飛盤。休閒活動為 recreational weekend activities。",
    "vocabIndex": 0
  },
  {
    "q": "Fast reflexes and agile footwork are essential for anyone who aspires to play competitive singles ______.",
    "options": [
      "golf",
      "bowling",
      "badminton",
      "chess"
    ],
    "answer": 2,
    "cn": "靈敏的反應速度和敏捷的步法對於渴望打好競技單打羽球的人至關重要。 【選項解析】(A) golf 高爾夫  (B) badminton 羽毛球  (C) bowling 保齡球  (D) chess 西洋棋。競賽單打為 competitive singles badminton。",
    "vocabIndex": 1
  },
  {
    "q": "Knocking down all remaining pins on your second ball roll in a ______ frame is known as picking up a spare.",
    "options": [
      "chess",
      "football",
      "golf",
      "bowling"
    ],
    "answer": 3,
    "cn": "在保齡球局中用第二球擊倒所有剩下的球瓶，在術語中被稱為補中（解球）。 【選項解析】(A) chess 西洋棋  (B) football 美式足球  (C) bowling 保齡球  (D) golf 高爾夫。補中為 picking up a spare in bowling。",
    "vocabIndex": 2
  },
  {
    "q": "Thousands of screaming spectators packed the stadium bleachers to witness the traditional college ______ rivalry.",
    "options": [
      "football",
      "bowling",
      "golf",
      "chess"
    ],
    "answer": 0,
    "cn": "數千名尖叫吶喊的觀眾擠滿了體育場看台，見證傳統的大學美式足球對決宿敵戰。 【選項解析】(A) chess 西洋棋  (B) bowling 保齡球  (C) golf 高爾夫  (D) football 美式足球。大學體育宿敵賽為 college football rivalry。",
    "vocabIndex": 3
  },
  {
    "q": "Throwing a lightweight aerodynamic ______ requires a smooth flick of the wrist and good wind control.",
    "options": [
      "chess",
      "tent",
      "frisbee",
      "bowling"
    ],
    "answer": 2,
    "cn": "拋擲輕巧且符合空氣動力學的飛盤需要流暢的手腕抖動和良好的風向掌控。 【選項解析】(A) frisbee 飛盤  (B) tent 帳篷  (C) chess 西洋棋  (D) bowling 保齡球。空氣動力飛行盤為 aerodynamic frisbee。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "activity": {
    "pos": "n.",
    "en_def": "a thing that a person or group does or has done",
    "cn_def": "活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that a person or group does or has done",
        "cn_def": "活動"
      }
    ]
  },
  "badminton": {
    "pos": "n.",
    "en_def": "a court game played with lightweight rackets and a shuttlecock",
    "cn_def": "羽毛球運動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a court game played with lightweight rackets and a shuttlecock",
        "cn_def": "羽毛球運動"
      }
    ]
  },
  "bowling": {
    "pos": "n.",
    "en_def": "a game in which players roll a heavy ball down a wooden lane to knock down pins",
    "cn_def": "保齡球運動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a game in which players roll a heavy ball down a wooden lane to knock down pins",
        "cn_def": "保齡球運動"
      }
    ]
  },
  "football": {
    "pos": "n.",
    "en_def": "a game played with an oval ball on an outdoor field; American football or soccer",
    "cn_def": "美式足球；橄欖球；足球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a game played with an oval ball on an outdoor field; American football or soccer",
        "cn_def": "美式足球；橄欖球；足球"
      }
    ]
  },
  "frisbee": {
    "pos": "n.",
    "en_def": "a plastic flying disc thrown for recreation or in competitive team sports",
    "cn_def": "飛盤",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a plastic flying disc thrown for recreation or in competitive team sports",
        "cn_def": "飛盤"
      }
    ]
  },
  "golf": {
    "pos": "n.",
    "en_def": "a club-and-ball sport played across an outdoor course of 9 or 18 holes",
    "cn_def": "高爾夫球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a club-and-ball sport played across an outdoor course of 9 or 18 holes",
        "cn_def": "高爾夫球"
      }
    ]
  },
  "soccer": {
    "pos": "n.",
    "en_def": "a football game played between two teams of eleven players with a round ball",
    "cn_def": "足球（英式足球）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a football game played between two teams of eleven players with a round ball",
        "cn_def": "足球（英式足球）"
      }
    ]
  },
  "volleyball": {
    "pos": "n.",
    "en_def": "a team game played by hitting an inflated ball back and forth over a high net",
    "cn_def": "排球",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a team game played by hitting an inflated ball back and forth over a high net",
        "cn_def": "排球"
      }
    ]
  },
  "tent": {
    "pos": "n.",
    "en_def": "a portable shelter made of fabric supported by poles and ropes",
    "cn_def": "帳篷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a portable shelter made of fabric supported by poles and ropes",
        "cn_def": "帳篷"
      }
    ]
  },
  "chess": {
    "pos": "n.",
    "en_def": "a strategic board game for two players played on a checkered board with sixteen pieces each",
    "cn_def": "西洋棋；國際象棋",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strategic board game for two players played on a checkered board with sixteen pieces each",
        "cn_def": "西洋棋；國際象棋"
      }
    ]
  },
  "tents": {
    "pos": "",
    "en_def": "",
    "cn_def": "帳篷",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "帳篷"
      }
    ]
  },
  "frisbees": {
    "pos": "",
    "en_def": "",
    "cn_def": "飛盤",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "飛盤"
      }
    ]
  },
  "golfs": {
    "pos": "",
    "en_def": "",
    "cn_def": "高爾夫",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "高爾夫"
      }
    ]
  },
  "activities": {
    "pos": "",
    "en_def": "",
    "cn_def": "活動",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "活動"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
