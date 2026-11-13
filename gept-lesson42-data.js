// Lesson 42 Quiz Data: Moral Character, Politeness & Sense of Responsibility
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 42 - Moral Character, Politeness & Sense of Responsibility",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "stupid",
    "pos": "adj.",
    "cn_def": "愚蠢的；笨拙的",
    "en_def": "showing a lack of good judgment, sense, or thought",
    "sentence": "Don't do such a {{BLANK}} thing again, and always think carefully about the consequences before you act.",
    "cn": "別再做這種愚蠢的事情了，在行動之前一定要仔細考慮後果。"
  },
  {
    "word": "silly",
    "pos": "adj.",
    "cn_def": "傻氣的；糊塗的",
    "en_def": "foolish, childish, or not serious",
    "sentence": "The two sisters had a {{BLANK}} argument over who should wear the pink dress, but they made up after five minutes.",
    "cn": "兩姐妹為了誰該穿那件粉色連衣裙發生了糊塗的爭吵，但五分鐘後她們就和好了。"
  },
  {
    "word": "royal",
    "pos": "adj.",
    "cn_def": "皇室的；國王的",
    "en_def": "relating to or belonging to a king, queen, or royal family",
    "sentence": "Thousands of enthusiastic citizens gathered outside the palace to watch the spectacular {{BLANK}} parade pass by.",
    "cn": "成千上萬熱情的市民聚集在宮殿外，觀看壯觀的皇室遊行隊伍經過。"
  },
  {
    "word": "honesty",
    "pos": "n.",
    "cn_def": "誠實；正直",
    "en_def": "the quality of being truthful, trustworthy, and fair",
    "sentence": "My grandfather taught me that {{BLANK}} is the best policy in life, and you will always earn respect by telling the truth.",
    "cn": "我的祖父教導我誠實是人生上策，而你說實話總能贏得別人的尊重。"
  },
  {
    "word": "dishonest",
    "pos": "adj.",
    "cn_def": "不誠實的；欺騙的",
    "en_def": "not honest; intending to trick or lie to people",
    "sentence": "The company fired the {{BLANK}} accountant immediately, because he stole money from the firm's bank account for months.",
    "cn": "公司立刻解雇了那名不誠實的會計師，因為他數月來一直從公司銀行帳戶盜取資金。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；由衷的",
    "en_def": "honest, genuine, and not pretending",
    "sentence": "He wrote a very {{BLANK}} apology letter to his best friend, and she happily forgave him for his thoughtless mistake.",
    "cn": "他給最好的朋友寫了一封非常真誠的道歉信，她高興地原諒了他輕率的錯誤。"
  },
  {
    "word": "impolite",
    "pos": "adj.",
    "cn_def": "不禮貌的；粗魯的",
    "en_def": "rude; not showing good manners toward others",
    "sentence": "Leaving the dinner party without saying goodbye to the host is considered very {{BLANK}}, so please stay until the dessert is served.",
    "cn": "未向主人告別就離開晚宴被認為是非常不禮貌的，所以請留下來直到甜點端上來。"
  },
  {
    "word": "humble",
    "pos": "adj.",
    "cn_def": "謙虛的；不起眼的",
    "en_def": "not proud or boastful; modest about one's abilities",
    "sentence": "Even after winning the Nobel Prize in physics, the elderly professor remained very {{BLANK}} and continued to mentor young students.",
    "cn": "即使在獲得諾貝爾物理學獎之後，那位年邁的教授依然非常謙虛，並繼續指導年輕學生。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責任的；承擔責任的",
    "en_def": "having the obligation to take care of something; reliable",
    "sentence": "Every driver is personally {{BLANK}} for following traffic regulations, so you must always stop when the traffic light turns red.",
    "cn": "每位駕駛人都有責任遵守交通法規，因此當交通號誌變紅時，你必須隨時停車。"
  },
  {
    "word": "duty",
    "pos": "n.",
    "cn_def": "職責；責任；義務",
    "en_def": "a moral or legal obligation; something one must do",
    "sentence": "It is the primary {{BLANK}} of police officers to protect citizens from harm and maintain peace throughout the city.",
    "cn": "警官的首要職責是保護市民免受傷害，並維持全城的安寧。"
  }
];

const MCQS = [
  {
    "q": "The sales clerk gave back the extra hundred dollars to the customer, demonstrating remarkable ______ and professional ethics.",
    "options": [
      "honesty",
      "duty",
      "crime",
      "danger"
    ],
    "answer": 0,
    "cn": "店員將多出的一百美元歸還給顧客，展現了非凡的誠實與職業道德。 【選項解析】(A) duty 職責  (B) honesty 誠實  (C) crime 犯罪  (D) danger 危險。退還多找的錢展現 honesty。",
    "vocabIndex": 3
  },
  {
    "q": "It was quite ______ of Peter to leave his wet raincoat on the classroom sofa, soaking everyone's books and papers.",
    "options": [
      "royal",
      "stupid",
      "humble",
      "responsible"
    ],
    "answer": 1,
    "cn": "彼得把濕雨衣丟在教室沙發上把大家的書本紙張都弄濕了，這實在相當愚蠢。 【選項解析】(A) royal 皇家的  (B) humble 謙遜的  (C) stupid 愚笨的  (D) responsible 負責任的。浸濕眾人物品為 stupid 行為。",
    "vocabIndex": 0
  },
  {
    "q": "Princess Victoria wore an exquisite crown and attended the ______ wedding ceremony held in the historic cathedral.",
    "options": [
      "silly",
      "dishonest",
      "royal",
      "impolite"
    ],
    "answer": 2,
    "cn": "維多利亞公主頭戴精美王冠，出席了在歷史大教堂舉行的盛大皇室婚禮儀式。 【選項解析】(A) silly 糊塗的  (B) royal 皇室的  (C) dishonest 不誠實的  (D) impolite 無禮的。公主與皇室典禮選 royal。",
    "vocabIndex": 2
  },
  {
    "q": "Talking loudly on your mobile phone inside the quiet public library is extremely ______, so please switch it to silent mode.",
    "options": [
      "sincere",
      "humble",
      "royal",
      "impolite"
    ],
    "answer": 3,
    "cn": "在安靜的公共圖書館裡大聲講手機極其不禮貌，所以請將手機調成靜音模式。 【選項解析】(A) impolite 不禮貌的  (B) humble 謙遜的  (C) royal 皇家的  (D) sincere 真誠的。圖書館大聲講電話為 impolite。",
    "vocabIndex": 6
  },
  {
    "q": "When the project failed to meet the deadline, Kevin stood up and admitted that he was entirely ______ for the delays.",
    "options": [
      "royal",
      "responsible",
      "silly",
      "dishonest"
    ],
    "answer": 1,
    "cn": "當專案未能在截止日期前完成時，凱文站了出來並承認他對延誤負有全部責任。 【選項解析】(A) royal 皇家的  (B) responsible 負責任的  (C) silly 糊塗的  (D) dishonest 不誠實的。be responsible for 為承擔責任。",
    "vocabIndex": 8
  },
  {
    "q": "The politician lost public support after journalists revealed that he made many ______ statements during the election.",
    "options": [
      "sincere",
      "humble",
      "dishonest",
      "royal"
    ],
    "answer": 2,
    "cn": "在記者揭露該政客在選舉期間發表了許多不誠實的言論後，他失去了公眾支持。 【選項解析】(A) sincere 真誠的  (B) dishonest 欺瞞的  (C) humble 謙卑的  (D) royal 皇家的。發表虛假言論為 dishonest。",
    "vocabIndex": 4
  },
  {
    "q": "A dedicated doctor believes that saving human lives under any condition is her most important professional ______.",
    "options": [
      "honesty",
      "illness",
      "injury",
      "duty"
    ],
    "answer": 3,
    "cn": "一位敬業的醫生認為，在任何情況下拯救生命都是她最重要的職業職責。 【選項解析】(A) honesty 誠實  (B) duty 職責  (C) injury 傷害  (D) illness 疾病。救死扶傷為 professional duty。",
    "vocabIndex": 9
  },
  {
    "q": "Although she came from a very wealthy family, Amanda remained ______ and always treated everyone with equal respect.",
    "options": [
      "humble",
      "impolite",
      "dishonest",
      "stupid"
    ],
    "answer": 0,
    "cn": "雖然阿曼達出身於非常富有的家庭，但她依然謙遜，並總是平等尊重地對待每個人。 【選項解析】(A) impolite 粗魯的  (B) humble 謙遜的  (C) dishonest 虛偽的  (D) stupid 愚笨的。富而不驕為 humble。",
    "vocabIndex": 7
  },
  {
    "q": "Please accept my ______ gratitude for your generous support during my family's difficult financial situation.",
    "options": [
      "dishonest",
      "silly",
      "stupid",
      "sincere"
    ],
    "answer": 3,
    "cn": "在我家面臨經濟困難的時期，請接受我對您慷慨支持由衷的真誠謝意。 【選項解析】(A) sincere 真誠的  (B) silly 傻氣的  (C) stupid 愚笨的  (D) dishonest 虛偽的。sincere gratitude（由衷的感謝）。",
    "vocabIndex": 5
  },
  {
    "q": "Stop laughing at that ______ joke and concentrate on your English grammar homework before dinner begins.",
    "options": [
      "royal",
      "sincere",
      "silly",
      "humble"
    ],
    "answer": 2,
    "cn": "別再對那個傻氣的笑話發笑了，晚餐開始前請專注於你的英語文法作業。 【選項解析】(A) royal 皇家的  (B) silly 傻氣的  (C) sincere 誠懇的  (D) humble 謙遜的。silly joke 為無聊傻氣的玩笑。",
    "vocabIndex": 1
  },
  {
    "q": "Cheating on school examinations by copying another student's test paper is a ______ act that will result in severe punishment.",
    "options": [
      "dishonest",
      "humble",
      "royal",
      "sincere"
    ],
    "answer": 0,
    "cn": "在學校考試中透過抄襲別人的試卷來作弊是一種不誠實的行為，將受到嚴厲懲罰。 【選項解析】(A) humble 謙虛的  (B) dishonest 不誠實的  (C) royal 皇家的  (D) sincere 真誠的。作弊屬於 dishonest 行為。",
    "vocabIndex": 4
  },
  {
    "q": "As a pet owner, you are ______ for feeding your puppy daily and taking it for regular outdoor exercise.",
    "options": [
      "silly",
      "responsible",
      "impolite",
      "royal"
    ],
    "answer": 1,
    "cn": "作為寵物主人，你有責任每天餵養你的幼犬並帶它進行定期的戶外運動。 【選項解析】(A) responsible 負責任的  (B) silly 糊塗的  (C) impolite 粗暴的  (D) royal 皇室的。be responsible for doing sth.（對...負責）。",
    "vocabIndex": 8
  },
  {
    "q": "It is your legal ______ as a citizen to pay taxes on time and respect the laws of the country.",
    "options": [
      "accident",
      "honesty",
      "error",
      "duty"
    ],
    "answer": 3,
    "cn": "按時納稅並遵守國家法律是身為公民的法定責任與義務。 【選項解析】(A) duty 義務  (B) honesty 誠實  (C) error 錯誤  (D) accident 意外。公民責任義務為 legal duty。",
    "vocabIndex": 9
  },
  {
    "q": "The teacher thanked the young boy for his ______, because he admitted breaking the window without hesitation.",
    "options": [
      "duty",
      "honesty",
      "wound",
      "crime"
    ],
    "answer": 1,
    "cn": "老師感謝那個小男孩的誠實，因為他毫不猶豫地承認打碎了窗戶。 【選項解析】(A) honesty 誠實  (B) duty 職責  (C) wound 傷口  (D) crime 罪行。坦白認錯為 honesty。",
    "vocabIndex": 3
  },
  {
    "q": "Burping loudly at the dining table without apologizing is considered very ______ in most Western and Asian cultures.",
    "options": [
      "impolite",
      "sincere",
      "humble",
      "royal"
    ],
    "answer": 0,
    "cn": "在餐桌上大聲打嗝而不道歉，在大多數西方與亞洲文化中都被認為是非常不禮貌的。 【選項解析】(A) sincere 真誠的  (B) impolite 無禮的  (C) humble 謙和的  (D) royal 皇室的。餐桌失禮為 impolite。",
    "vocabIndex": 6
  },
  {
    "q": "Forgetting your own passport on the dining table on the day of an international flight is an incredibly ______ mistake.",
    "options": [
      "humble",
      "royal",
      "stupid",
      "sincere"
    ],
    "answer": 2,
    "cn": "在出國旅行搭機當天把護照忘在餐桌上，是一個極其愚蠢的錯誤。 【選項解析】(A) stupid 愚笨的  (B) royal 皇家的  (C) humble 謙卑的  (D) sincere 誠摯的。stupid mistake（愚蠢的疏失）。",
    "vocabIndex": 0
  },
  {
    "q": "In traditional British history, the ______ navy guarded the sea trade routes across the world for centuries.",
    "options": [
      "royal",
      "silly",
      "dishonest",
      "impolite"
    ],
    "answer": 0,
    "cn": "在傳統英國歷史上，皇家海軍幾個世紀以來一直守衛著世界各地的海上貿易航線。 【選項解析】(A) royal 皇家的  (B) silly 傻里傻氣的  (C) dishonest 欺詐的  (D) impolite 粗野的。Royal Navy（皇家海軍）。",
    "vocabIndex": 2
  },
  {
    "q": "The world-famous architect lived in a ______ cottage by the woods, preferring quiet nature to bustling city life.",
    "options": [
      "dishonest",
      "humble",
      "stupid",
      "impolite"
    ],
    "answer": 1,
    "cn": "這位舉世聞名的建築師住在樹林邊的一座簡樸小屋裡，比起熱鬧的城市生活更喜歡安靜的大自然。 【選項解析】(A) humble 簡樸的  (B) dishonest 不實的  (C) stupid 愚笨的  (D) impolite 無禮的。humble cottage（簡樸小屋）。",
    "vocabIndex": 7
  },
  {
    "q": "Her eyes were filled with tears as she delivered a ______ speech thanking her parents for their endless sacrifice.",
    "options": [
      "stupid",
      "dishonest",
      "silly",
      "sincere"
    ],
    "answer": 3,
    "cn": "當她發表真誠的演講感謝父母無盡的犧牲時，她的眼中充滿了淚水。 【選項解析】(A) sincere 真誠的  (B) dishonest 虛假的  (C) silly 幼稚的  (D) stupid 笨拙的。sincere speech（真摯的演說）。",
    "vocabIndex": 5
  },
  {
    "q": "Making ______ faces in class to distract your classmates from listening to the lecture is immature behavior.",
    "options": [
      "sincere",
      "royal",
      "silly",
      "responsible"
    ],
    "answer": 2,
    "cn": "在課堂上做鬼臉分散同學聽課的注意力是一種不成熟的幼稚行為。 【選項解析】(A) silly 鬼臉；傻氣的  (B) royal 皇室的  (C) sincere 誠懇的  (D) responsible 負責任的。silly faces（搞怪鬼臉）。",
    "vocabIndex": 1
  },
  {
    "q": "Parents have a sacred ______ to nurture and protect their children until they grow into independent adults.",
    "options": [
      "duty",
      "honesty",
      "fault",
      "damage"
    ],
    "answer": 0,
    "cn": "父母有神聖的職責撫養和保護他們的孩子，直到他們長大成為獨立的成年人。 【選項解析】(A) duty 職責  (B) honesty 誠信  (C) fault 缺點  (D) damage 損害。sacred duty（神聖職責）。",
    "vocabIndex": 9
  },
  {
    "q": "Selling expired medicine to sick patients is not only ______ but also constitutes a serious criminal violation.",
    "options": [
      "sincere",
      "humble",
      "dishonest",
      "royal"
    ],
    "answer": 2,
    "cn": "將過期藥品賣給生病的病人不僅是不誠實的，而且構成嚴重的刑事違法行為。 【選項解析】(A) dishonest 欺詐的  (B) humble 謙遜的  (C) sincere 誠摯的  (D) royal 皇室的。販售過期藥品為 dishonest。",
    "vocabIndex": 4
  },
  {
    "q": "Taking an umbrella on a bright sunny day without a cloud in the sky might seem ______ to passersby.",
    "options": [
      "responsible",
      "sincere",
      "royal",
      "silly"
    ],
    "answer": 3,
    "cn": "在晴空萬里萬里無雲的日子裡帶著一把雨傘，對路人來說似乎顯得有些傻氣。 【選項解析】(A) silly 傻氣的  (B) sincere 真切的  (C) royal 皇家的  (D) responsible 負責任的。豔陽天拿傘看似 silly。",
    "vocabIndex": 1
  },
  {
    "q": "The bus driver was praised by the police for acting in a very ______ manner during the stormy highway emergency.",
    "options": [
      "stupid",
      "responsible",
      "dishonest",
      "impolite"
    ],
    "answer": 1,
    "cn": "公車司機在暴風雨高速公路緊急情況下表現得非常負責任，受到了警方的表揚。 【選項解析】(A) responsible 負責任的  (B) stupid 愚蠢的  (C) dishonest 虛偽的  (D) impolite 粗魯的。responsible manner（負責任的態度）。",
    "vocabIndex": 8
  },
  {
    "q": "When answering questions from the judge in court, you must swear to speak with absolute ______.",
    "options": [
      "trouble",
      "duty",
      "pain",
      "honesty"
    ],
    "answer": 3,
    "cn": "在法庭上回答法官提問時，你必須發誓以絕對的誠實陳述。 【選項解析】(A) honesty 誠實  (B) duty 義務  (C) pain 痛苦  (D) trouble 麻煩。speak with absolute honesty（絕對誠實作供）。",
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "stupid": {
    "pos": "adj.",
    "en_def": "showing a lack of good judgment, sense, or thought",
    "cn_def": "愚蠢的；笨拙的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing a lack of good judgment, sense, or thought",
        "cn_def": "愚蠢的；笨拙的"
      }
    ]
  },
  "silly": {
    "pos": "adj.",
    "en_def": "foolish, childish, or not serious",
    "cn_def": "傻氣的；糊塗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "foolish, childish, or not serious",
        "cn_def": "傻氣的；糊塗的"
      }
    ]
  },
  "royal": {
    "pos": "adj.",
    "en_def": "relating to or belonging to a king, queen, or royal family",
    "cn_def": "皇室的；國王的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to or belonging to a king, queen, or royal family",
        "cn_def": "皇室的；國王的"
      }
    ]
  },
  "honesty": {
    "pos": "n.",
    "en_def": "the quality of being truthful, trustworthy, and fair",
    "cn_def": "誠實；正直",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being truthful, trustworthy, and fair",
        "cn_def": "誠實；正直"
      }
    ]
  },
  "dishonest": {
    "pos": "adj.",
    "en_def": "not honest; intending to trick or lie to people",
    "cn_def": "不誠實的；欺騙的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not honest; intending to trick or lie to people",
        "cn_def": "不誠實的；欺騙的"
      }
    ]
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "honest, genuine, and not pretending",
    "cn_def": "真誠的；由衷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "honest, genuine, and not pretending",
        "cn_def": "真誠的；由衷的"
      }
    ]
  },
  "impolite": {
    "pos": "adj.",
    "en_def": "rude; not showing good manners toward others",
    "cn_def": "不禮貌的；粗魯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "rude; not showing good manners toward others",
        "cn_def": "不禮貌的；粗魯的"
      }
    ]
  },
  "humble": {
    "pos": "adj.",
    "en_def": "not proud or boastful; modest about one's abilities",
    "cn_def": "謙虛的；不起眼的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not proud or boastful; modest about one's abilities",
        "cn_def": "謙虛的；不起眼的"
      }
    ]
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having the obligation to take care of something; reliable",
    "cn_def": "負責任的；承擔責任的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having the obligation to take care of something; reliable",
        "cn_def": "負責任的；承擔責任的"
      }
    ]
  },
  "duty": {
    "pos": "n.",
    "en_def": "a moral or legal obligation; something one must do",
    "cn_def": "職責；責任；義務",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a moral or legal obligation; something one must do",
        "cn_def": "職責；責任；義務"
      }
    ]
  },
  "crime": {
    "pos": "",
    "en_def": "",
    "cn_def": "犯罪",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "犯罪"
      }
    ]
  },
  "danger": {
    "pos": "",
    "en_def": "",
    "cn_def": "危險",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "危險"
      }
    ]
  },
  "illness": {
    "pos": "",
    "en_def": "",
    "cn_def": "疾病",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "疾病"
      }
    ]
  },
  "injury": {
    "pos": "",
    "en_def": "",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傷害"
      }
    ]
  },
  "accident": {
    "pos": "",
    "en_def": "",
    "cn_def": "意外",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "意外"
      }
    ]
  },
  "error": {
    "pos": "",
    "en_def": "",
    "cn_def": "錯誤",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "錯誤"
      }
    ]
  },
  "wound": {
    "pos": "",
    "en_def": "",
    "cn_def": "傷口",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "傷口"
      }
    ]
  },
  "fault": {
    "pos": "",
    "en_def": "",
    "cn_def": "缺點",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "缺點"
      }
    ]
  },
  "damage": {
    "pos": "",
    "en_def": "",
    "cn_def": "損害",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "損害"
      }
    ]
  },
  "trouble": {
    "pos": "",
    "en_def": "",
    "cn_def": "麻煩",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "麻煩"
      }
    ]
  },
  "pain": {
    "pos": "",
    "en_def": "",
    "cn_def": "痛苦",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "痛苦"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
