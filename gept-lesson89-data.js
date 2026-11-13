// Lesson 89 Quiz Data: Media Channels, Social Influence, Purpose & Personal Absences
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 89 - Media Channels, Social Influence, Purpose & Personal Absences",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道；管道；途徑",
    "en_def": "a television or radio station; a system for communication",
    "sentence": "My grandfather picked up the remote control and switched to the news {{BLANK}} to watch the weather forecast for tomorrow.",
    "cn": "我祖父拿起遙控器切換到新聞頻道，觀看明天的天氣預報。"
  },
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "困難；難題",
    "en_def": "the state of being hard to do or understand; an obstacle",
    "sentence": "Because the foreign language textbook was full of advanced words, the beginner had great {{BLANK}} understanding the chapter.",
    "cn": "因為這本外語教科書充滿了進階單字，初學者在理解該章節時遇到了很大的困難。"
  },
  {
    "word": "influence",
    "pos": "n. / v.",
    "cn_def": "影響；感化",
    "en_def": "the power to have an effect on people or things",
    "sentence": "Dedicated teachers have a profound {{BLANK}} on their students' future career choices and ethical character development.",
    "cn": "敬業的教師對學生未來的職業選擇和品德塑造有著深遠的影響。"
  },
  {
    "word": "link",
    "pos": "n. / v.",
    "cn_def": "連結；關聯；繫結",
    "en_def": "a connection between two things; to connect together",
    "sentence": "The high-speed rail line provides an essential transportation {{BLANK}} connecting the major metropolitan cities of Taiwan.",
    "cn": "高鐵提供了一條不可或缺的交通連結，聯繫著台灣各大都會城市。"
  },
  {
    "word": "pardon",
    "pos": "n. / v.",
    "cn_def": "原諒；寬恕；請再說一遍",
    "en_def": "forgiveness for an offense; an expression used to ask someone to repeat",
    "sentence": "I beg your {{BLANK}}, but could you please speak a little louder because the traffic noise outside is very loud?",
    "cn": "請原諒我（請再說一遍），但你能否稍微說大聲一點，因為外面的車流噪音非常吵雜？"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的；意圖",
    "en_def": "the reason for which something is done or created",
    "sentence": "The primary {{BLANK}} of this community health seminar is to teach residents how to prepare balanced and nutritious meals.",
    "cn": "本社區健康研討會的主要目的是教導居民如何準備均衡且營養的餐點。"
  },
  {
    "word": "reason",
    "pos": "n. / v.",
    "cn_def": "理由；原因；推理",
    "en_def": "a cause or explanation for an action or event; to think logically",
    "sentence": "The school principal explained the main {{BLANK}} why cell phone usage was prohibited inside classrooms during lecture hours.",
    "cn": "校長解釋了在講課時間內教室禁止使用手機的主要原因。"
  },
  {
    "word": "shower",
    "pos": "n. / v.",
    "cn_def": "淋浴；陣雨；下陣雨",
    "en_def": "a device that sprays water for washing; a brief fall of rain",
    "sentence": "Taking a warm relaxing {{BLANK}} after a tiring day of physical labor helps soothe tense muscles and promotes deep sleep.",
    "cn": "在經歷了一整天辛勞的體力勞動後，洗個舒適的溫水澡有助於舒緩緊繃的肌肉並促進深度睡眠。"
  },
  {
    "word": "absent",
    "pos": "adj.",
    "cn_def": "缺席的；不在場的",
    "en_def": "not present in a place, especially school or work",
    "sentence": "Three students were {{BLANK}} from English class yesterday morning because they had caught a contagious seasonal flu virus.",
    "cn": "昨天早上有三名學生在英語課上缺席，因為他們感染了傳染性極強的季節性流感病毒。"
  },
  {
    "word": "blank",
    "pos": "adj. / n.",
    "cn_def": "空白的；空格",
    "en_def": "empty; without any writing, print, or marks",
    "sentence": "Please fill in each numbered {{BLANK}} on the test sheet with the most suitable English vocabulary word from the box.",
    "cn": "請在測驗卷上的每個編號空格中填入方框中最合適的英語單字。"
  }
];

const MCQS = [
  {
    "q": "Dad switched the television ______ to watch the live international soccer championship match with his friends.",
    "options": [
      "channel",
      "difficulty",
      "purpose",
      "reason"
    ],
    "answer": 0,
    "cn": "爸爸切換電視頻道，和他的朋友們一起觀看國際足球錦標賽的現場直播。 【選項解析】(A) channel 頻道  (B) difficulty 困難  (C) purpose 目的  (D) reason 原因。電視頻道為 television channel。",
    "vocabIndex": 0
  },
  {
    "q": "Even six months after the serious skiing accident, David still experiences severe ______ walking down steep staircases.",
    "options": [
      "channel",
      "link",
      "difficulty",
      "shower"
    ],
    "answer": 2,
    "cn": "即使在發生嚴重滑雪事故六個月後，戴維在走下陡峭樓梯時仍然遇到嚴重的困難。 【選項解析】(A) channel 頻道  (B) difficulty 困難  (C) link 連結  (D) shower 淋浴。遇到困難為 experience difficulty doing sth。",
    "vocabIndex": 1
  },
  {
    "q": "Parents' reading habits at home have a significant positive ______ on their children's language development and curiosity.",
    "options": [
      "difficulty",
      "influence",
      "link",
      "shower"
    ],
    "answer": 1,
    "cn": "父母在家裡的閱讀習慣對孩子的語言發展和求知好奇心有著顯著的正面影響。 【選項解析】(A) difficulty 困難  (B) link 連結  (C) influence 影響  (D) shower 淋浴。正面影響為 positive influence。",
    "vocabIndex": 2
  },
  {
    "q": "Medical researchers have discovered a direct ______ between heavy daily sugar intake and the development of diabetes.",
    "options": [
      "shower",
      "channel",
      "pardon",
      "link"
    ],
    "answer": 3,
    "cn": "醫學研究人員發現了每天大量攝入糖分與罹患糖尿病之間的直接關聯。 【選項解析】(A) shower 陣雨  (B) channel 頻道  (C) pardon 原諒  (D) link 關聯。直接關聯為 direct link。",
    "vocabIndex": 3
  },
  {
    "q": "I beg your ______, sir, but did you say the train to Kaohsiung departs from platform two or platform four?",
    "options": [
      "shower",
      "channel",
      "pardon",
      "link"
    ],
    "answer": 2,
    "cn": "先生，請原諒我（請您再說一次），您是說往高雄的火車是從第二月台還是第四月台開出？ 【選項解析】(A) pardon 原諒/請再說一遍  (B) channel 頻道  (C) shower 陣雨  (D) link 連結。I beg your pardon 為禮貌請求重述。",
    "vocabIndex": 4
  },
  {
    "q": "The main ______ of holding the charity bazaar is to raise money for orphanages and elderly nursing homes.",
    "options": [
      "purpose",
      "shower",
      "difficulty",
      "channel"
    ],
    "answer": 0,
    "cn": "舉辦慈善義賣的主要目的是為孤兒院和養老院籌集善款。 【選項解析】(A) shower 淋浴  (B) purpose 目的  (C) difficulty 困難  (D) channel 管道。主要目的為 primary purpose。",
    "vocabIndex": 5
  },
  {
    "q": "The teacher asked Henry for the specific ______ why his math homework was not handed in on time this morning.",
    "options": [
      "channel",
      "reason",
      "difficulty",
      "link"
    ],
    "answer": 1,
    "cn": "老師詢問亨利今天早上沒有按時交數學作業的具體原因是什麼。 【選項解析】(A) channel 頻道  (B) difficulty 困難  (C) reason 原因  (D) link 連結。具體原因為 specific reason。",
    "vocabIndex": 6
  },
  {
    "q": "We got caught in a sudden afternoon ______ while walking in the park and had to take shelter under a gazebo.",
    "options": [
      "link",
      "channel",
      "difficulty",
      "shower"
    ],
    "answer": 3,
    "cn": "我們在公園散步時遭遇了一場突如其來的午後陣雨，不得不躲進涼亭避雨。 【選項解析】(A) shower 陣雨  (B) channel 頻道  (C) difficulty 困難  (D) link 連結。午後陣雨為 afternoon shower。",
    "vocabIndex": 7
  },
  {
    "q": "If a student is ______ from school for more than three consecutive days, a parent note or doctor certificate is required.",
    "options": [
      "blank",
      "absent",
      "deep",
      "final"
    ],
    "answer": 1,
    "cn": "如果學生連續三天以上缺課，必須出具家長請假條或醫生證明。 【選項解析】(A) blank 空白的  (B) absent 缺席的  (C) deep 深的  (D) final 最終的。缺席不在場為 absent from school。",
    "vocabIndex": 8
  },
  {
    "q": "Write your full name and examination number clearly on the ______ sheet of paper before you begin answering questions.",
    "options": [
      "absent",
      "similar",
      "blank",
      "extra"
    ],
    "answer": 2,
    "cn": "在開始回答問題之前，請在空白試卷上清楚寫下您的全名和准考證號碼。 【選項解析】(A) absent 缺席的  (B) blank 空白的  (C) similar 相似的  (D) extra 額外的。空白紙張為 blank sheet of paper。",
    "vocabIndex": 9
  },
  {
    "q": "You can visit our official YouTube ______ to watch free English pronunciation lessons and grammar review videos.",
    "options": [
      "reason",
      "difficulty",
      "shower",
      "channel"
    ],
    "answer": 3,
    "cn": "您可以造訪我們的官方YouTube頻道，觀看免費的英語發音教學和文法複習影片。 【選項解析】(A) channel 頻道  (B) difficulty 困難  (C) shower 淋浴  (D) reason 原因。網路影音頻道為 YouTube channel。",
    "vocabIndex": 0
  },
  {
    "q": "The climber encountered great ______ during the blizzard on the mountain peak and called emergency rescue services.",
    "options": [
      "difficulty",
      "channel",
      "link",
      "shower"
    ],
    "answer": 0,
    "cn": "登山者在山頂暴風雪中遭遇了巨大的困難，並撥打了緊急救援電話。 【選項解析】(A) channel 頻道  (B) difficulty 困難  (C) link 連結  (D) shower 淋浴。遭遇困難為 encounter difficulty。",
    "vocabIndex": 1
  },
  {
    "q": "Popular social media influencers often ______ teenagers' purchasing decisions and fashion tastes through short video clips.",
    "options": [
      "shower",
      "channel",
      "link",
      "influence"
    ],
    "answer": 3,
    "cn": "受歡迎的社群媒體網紅經常透過短影片左右青少年的購買決定和時尚品味。 【選項解析】(A) shower 淋浴  (B) channel 引導  (C) influence 影響  (D) link 連結。影響決策動詞為 influence。",
    "vocabIndex": 2
  },
  {
    "q": "The underground bridge provides a vital pedestrian ______ between the central subway station and the department store.",
    "options": [
      "link",
      "shower",
      "pardon",
      "difficulty"
    ],
    "answer": 0,
    "cn": "地下行人通道提供了中央地鐵站與百貨公司之間至關重要的行人通行連結。 【選項解析】(A) difficulty 困難  (B) shower 陣雨  (C) pardon 原諒  (D) link 連結。交通連結為 vital pedestrian link。",
    "vocabIndex": 3
  },
  {
    "q": "I must ask for your ______ for being twenty minutes late to our dinner appointment due to heavy traffic on the expressway.",
    "options": [
      "channel",
      "pardon",
      "shower",
      "reason"
    ],
    "answer": 1,
    "cn": "因為快速道路上塞車導致我們的晚餐約會遲到了二十分鐘，我必須請求您的原諒。 【選項解析】(A) pardon 原諒  (B) channel 途徑  (C) shower 陣雨  (D) reason 理由。請求原諒為 ask for one's pardon。",
    "vocabIndex": 4
  },
  {
    "q": "For what ______ did the company president call an emergency meeting of all departmental managers this morning?",
    "options": [
      "shower",
      "difficulty",
      "purpose",
      "link"
    ],
    "answer": 2,
    "cn": "公司總裁今天早上召集所有部門主管召開緊急會議究竟是出於什麼目的？ 【選項解析】(A) shower 淋浴  (B) purpose 目的  (C) difficulty 難處  (D) link 關係。出於何種目的為 for what purpose。",
    "vocabIndex": 5
  },
  {
    "q": "There is no legitimate ______ to treat people unfairly simply because of their race, religion, or social background.",
    "options": [
      "reason",
      "difficulty",
      "channel",
      "shower"
    ],
    "answer": 0,
    "cn": "僅僅因為他人的種族、宗教或社會背景就不公平地對待他人是沒有任何正當理由的。 【選項解析】(A) channel 頻道  (B) difficulty 困難  (C) reason 理由  (D) shower 淋浴。正當理由為 legitimate reason。",
    "vocabIndex": 6
  },
  {
    "q": "Before jumping into the public swimming pool, swimmers are strictly required to take a quick cleansing ______.",
    "options": [
      "difficulty",
      "channel",
      "shower",
      "link"
    ],
    "answer": 2,
    "cn": "在跳入公共游泳池之前，泳客被嚴格要求先進行快速的淋浴沖洗。 【選項解析】(A) shower 淋浴  (B) channel 渠道  (C) difficulty 障礙  (D) link 連結。沖洗身體為 take a shower。",
    "vocabIndex": 7
  },
  {
    "q": "Why was Samuel ______ from yesterday's soccer practice when our team had an important strategy rehearsal?",
    "options": [
      "blank",
      "deep",
      "final",
      "absent"
    ],
    "answer": 3,
    "cn": "在我們球隊進行重要戰術演練時，塞繆爾為什麼缺席了昨天的足球訓練？ 【選項解析】(A) blank 空白的  (B) absent 缺席的  (C) final 最後的  (D) deep 深的。缺席活動為 absent from practice。",
    "vocabIndex": 8
  },
  {
    "q": "The nervous speaker's mind went completely ______ on stage, but he took a deep breath and remembered his opening lines.",
    "options": [
      "absent",
      "blank",
      "similar",
      "extra"
    ],
    "answer": 1,
    "cn": "這位緊張的演講者在台上腦袋突然一片空白，但他深吸了一口氣，想起了開場白。 【選項解析】(A) absent 缺席的  (B) blank 空白的  (C) similar 相似的  (D) extra 額外的。mind went blank 表示「腦中一片空白」。",
    "vocabIndex": 9
  },
  {
    "q": "Our company uses multiple marketing ______ such as social media, email newsletters, and billboards to reach new buyers.",
    "options": [
      "channels",
      "difficulties",
      "showers",
      "reasons"
    ],
    "answer": 0,
    "cn": "我們公司利用社群媒體、電子郵件通訊和廣告牌等多種行銷管道來吸引新買家。 【選項解析】(A) channels 管道/途徑  (B) difficulties 困難  (C) showers 陣雨  (D) reasons 原因。行銷管道為 marketing channels。",
    "vocabIndex": 0
  },
  {
    "q": "Foreign students often face considerable language ______ when first attending university lectures conducted entirely in English.",
    "options": [
      "channels",
      "links",
      "difficulties",
      "showers"
    ],
    "answer": 2,
    "cn": "外國學生在初次參加完全用英語講授的大學課程時，往往面臨相當大的語言困難。 【選項解析】(A) channels 頻道  (B) difficulties 困難  (C) links 連結  (D) showers 陣雨。語言困難為 language difficulties。",
    "vocabIndex": 1
  },
  {
    "q": "Climate scientists warn that global warming will exert a dangerous ______ on agricultural crop yields worldwide.",
    "options": [
      "shower",
      "influence",
      "channel",
      "link"
    ],
    "answer": 1,
    "cn": "氣候科學家警告說，全球暖化將對全世界的農作物產量產生危險的衝擊影響。 【選項解析】(A) shower 陣雨  (B) channel 頻道  (C) influence 影響  (D) link 關係。產生危險影響為 exert a dangerous influence。",
    "vocabIndex": 2
  },
  {
    "q": "The internet article included a convenient web ______ that redirected readers directly to the university application page.",
    "options": [
      "difficulty",
      "shower",
      "pardon",
      "link"
    ],
    "answer": 3,
    "cn": "網路文章包含一個方便的網頁超連結，將讀者直接引導至大學入學申請頁面。 【選項解析】(A) difficulty 難處  (B) shower 淋浴  (C) pardon 原諒  (D) link 超連結。網路超連結為 web link。",
    "vocabIndex": 3
  },
  {
    "q": "Please leave that section ______ if you do not have any overseas traveling experience in the past twelve months.",
    "options": [
      "absent",
      "deep",
      "blank",
      "extra"
    ],
    "answer": 2,
    "cn": "如果您在過去十二個月內沒有任何出國旅行經驗，請將該欄位留白。 【選項解析】(A) absent 缺席的  (B) blank 空白的  (C) deep 深的  (D) extra 額外的。保留空白為 leave ... blank。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "channel": {
    "pos": "n.",
    "en_def": "a television or radio station; a system for communication",
    "cn_def": "頻道；管道；途徑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a television or radio station; a system for communication",
        "cn_def": "頻道；管道；途徑"
      }
    ]
  },
  "difficulty": {
    "pos": "n.",
    "en_def": "the state of being hard to do or understand; an obstacle",
    "cn_def": "困難；難題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being hard to do or understand; an obstacle",
        "cn_def": "困難；難題"
      }
    ]
  },
  "influence": {
    "pos": "n. / v.",
    "en_def": "the power to have an effect on people or things",
    "cn_def": "影響；感化",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the power to have an effect on people or things",
        "cn_def": "影響；感化"
      }
    ]
  },
  "link": {
    "pos": "n. / v.",
    "en_def": "a connection between two things; to connect together",
    "cn_def": "連結；關聯；繫結",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a connection between two things; to connect together",
        "cn_def": "連結；關聯；繫結"
      }
    ]
  },
  "pardon": {
    "pos": "n. / v.",
    "en_def": "forgiveness for an offense; an expression used to ask someone to repeat",
    "cn_def": "原諒；寬恕；請再說一遍",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "forgiveness for an offense; an expression used to ask someone to repeat",
        "cn_def": "原諒；寬恕；請再說一遍"
      }
    ]
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason for which something is done or created",
    "cn_def": "目的；意圖",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the reason for which something is done or created",
        "cn_def": "目的；意圖"
      }
    ]
  },
  "reason": {
    "pos": "n. / v.",
    "en_def": "a cause or explanation for an action or event; to think logically",
    "cn_def": "理由；原因；推理",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a cause or explanation for an action or event; to think logically",
        "cn_def": "理由；原因；推理"
      }
    ]
  },
  "shower": {
    "pos": "n. / v.",
    "en_def": "a device that sprays water for washing; a brief fall of rain",
    "cn_def": "淋浴；陣雨；下陣雨",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a device that sprays water for washing; a brief fall of rain",
        "cn_def": "淋浴；陣雨；下陣雨"
      }
    ]
  },
  "absent": {
    "pos": "adj.",
    "en_def": "not present in a place, especially school or work",
    "cn_def": "缺席的；不在場的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not present in a place, especially school or work",
        "cn_def": "缺席的；不在場的"
      }
    ]
  },
  "blank": {
    "pos": "adj. / n.",
    "en_def": "empty; without any writing, print, or marks",
    "cn_def": "空白的；空格",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "empty; without any writing, print, or marks",
        "cn_def": "空白的；空格"
      }
    ]
  },
  "deep": {
    "pos": "",
    "en_def": "",
    "cn_def": "深的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "深的"
      }
    ]
  },
  "final": {
    "pos": "",
    "en_def": "",
    "cn_def": "最終的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "最終的"
      }
    ]
  },
  "similar": {
    "pos": "",
    "en_def": "",
    "cn_def": "相似的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "相似的"
      }
    ]
  },
  "extra": {
    "pos": "",
    "en_def": "",
    "cn_def": "額外的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "額外的"
      }
    ]
  },
  "channels": {
    "pos": "",
    "en_def": "",
    "cn_def": "管道/途徑",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "管道/途徑"
      }
    ]
  },
  "difficulties": {
    "pos": "",
    "en_def": "",
    "cn_def": "困難",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "困難"
      }
    ]
  },
  "showers": {
    "pos": "",
    "en_def": "",
    "cn_def": "陣雨",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "陣雨"
      }
    ]
  },
  "reasons": {
    "pos": "",
    "en_def": "",
    "cn_def": "原因",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "原因"
      }
    ]
  },
  "links": {
    "pos": "",
    "en_def": "",
    "cn_def": "連結",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "連結"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
