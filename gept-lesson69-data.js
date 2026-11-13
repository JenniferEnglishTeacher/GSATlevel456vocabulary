// Lesson 69 Quiz Data: Theatrical Performance, Social Behavior, Damage & Story Structure
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 69 - Theatrical Performance, Social Behavior, Damage & Story Structure",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "damage",
    "pos": "n. / v.",
    "cn_def": "損害；毀壞",
    "en_def": "physical harm caused to something; to inflict harm",
    "sentence": "The severe summer typhoon caused extensive {{BLANK}} to local fruit orchards, destroying thousands of mango trees.",
    "cn": "這場強烈的夏季颱風對當地的果園造成了廣泛的損害，摧毀了數千棵芒果樹。"
  },
  {
    "word": "behave",
    "pos": "v.",
    "cn_def": "表現；守規矩",
    "en_def": "to act or conduct oneself in a specified way",
    "sentence": "The teacher reminded the primary school students to {{BLANK}} politely during their annual field trip to the science museum.",
    "cn": "老師提醒小學生在參觀科學博物館的年度校外教學期間，要表現得彬彬有禮。"
  },
  {
    "word": "act",
    "pos": "v. / n.",
    "cn_def": "行動；演戲；行為",
    "en_def": "to take action; to perform in a play; a deed",
    "sentence": "The young firefighter was awarded a medal for his selfless {{BLANK}} of courage in rescuing children from the blazing building.",
    "cn": "這位年輕消防員因其從燃燒的大樓中救出兒童的無私英勇行為，被授予了一枚勳章。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "行動；動作",
    "en_def": "the process of doing something, typically to achieve an aim",
    "sentence": "A popular English proverb wisely states that {{BLANK}} speaks louder than words when demonstrating genuine commitment.",
    "cn": "一則著名的英語諺語明智地指出，在展現真正的承諾時，行動勝於空談。"
  },
  {
    "word": "role",
    "pos": "n.",
    "cn_def": "角色；作用",
    "en_def": "an actor's part in a play; the function assumed by someone",
    "sentence": "Parents play an essential {{BLANK}} in shaping their children's moral character, personal values, and study habits.",
    "cn": "父母在塑造子女的道德品格、個人價值觀與學習習慣方面，扮演著至關重要的角色。"
  },
  {
    "word": "stage",
    "pos": "n. / v.",
    "cn_def": "舞台；階段",
    "en_def": "a raised floor or platform on which actors perform",
    "sentence": "The talented young pianist walked confidently across the wooden {{BLANK}} and bowed politely to the waiting audience.",
    "cn": "這位才華洋溢的年輕鋼琴家自信地走過木製舞台，並禮貌地向等待的觀眾鞠躬致意。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the assembled spectators or listeners at a public event",
    "sentence": "At the conclusion of the thrilling theatrical drama, the entire {{BLANK}} stood up and gave the actors a standing ovation.",
    "cn": "在這齣扣人心弦的話劇結尾，全體觀眾起立為演員們起立鼓掌。"
  },
  {
    "word": "beginning",
    "pos": "n.",
    "cn_def": "開始；起初",
    "en_def": "the point in time or space at which something starts",
    "sentence": "For the young university graduate, moving to this new city marked the exciting {{BLANK}} of an independent career.",
    "cn": "對這位年輕的大學畢業生而言，搬到這座新城市標誌著一段獨立職業生涯的令人興奮的開始。"
  },
  {
    "word": "end",
    "pos": "n. / v.",
    "cn_def": "結束；末端",
    "en_def": "the final part of something; to terminate",
    "sentence": "The championship soccer match remained scoreless until the very {{BLANK}} of the second half, when a striker scored.",
    "cn": "這場足球冠軍賽一直未分勝負，直到下半場即將結束之際，一名前鋒攻進了一球。"
  },
  {
    "word": "pause",
    "pos": "v. / n.",
    "cn_def": "暫停；停頓",
    "en_def": "a temporary stop in action or speech; to stop briefly",
    "sentence": "The eloquent speaker made a dramatic {{BLANK}} before revealing the final conclusion of his environmental research.",
    "cn": "這位雄辯的演講者在透露其環境研究的最終結論之前，戲劇性地停頓了一下。"
  }
];

const MCQS = [
  {
    "q": "The earthquake shook the old brick building violently, but fortunately it caused no structural ______.",
    "options": [
      "beginning",
      "stage",
      "audience",
      "damage"
    ],
    "answer": 3,
    "cn": "地震劇烈搖晃了老磚房，但幸運的是並未造成任何結構性損壞。 【選項解析】(A) damage 損害  (B) stage 舞台  (C) audience 觀眾  (D) beginning 開始。structural damage 指結構性損害。",
    "vocabIndex": 0
  },
  {
    "q": "Parents always expect their teenagers to ______ maturely and responsibly when attending social gatherings.",
    "options": [
      "damage",
      "behave",
      "act",
      "pause"
    ],
    "answer": 1,
    "cn": "父母總是期望青少年在參加社交聚會時能表現得成熟且負責任。 【選項解析】(A) damage 損害  (B) act 行動  (C) behave 舉止得體  (D) pause 停頓。舉止合宜為 behave maturely。",
    "vocabIndex": 1
  },
  {
    "q": "The police officer received a commendation for his heroic ______ of jumping into the freezing river to save a child.",
    "options": [
      "audience",
      "stage",
      "act",
      "beginning"
    ],
    "answer": 2,
    "cn": "這名警官因跳入冰冷的河中救出孩童的無私英勇舉動而受到嘉獎。 【選項解析】(A) act 行為  (B) stage 舞台  (C) audience 觀眾  (D) beginning 開始。英勇行為為 heroic act。",
    "vocabIndex": 2
  },
  {
    "q": "If we want to reduce global plastic pollution, governments and corporations must take immediate ______.",
    "options": [
      "action",
      "role",
      "stage",
      "beginning"
    ],
    "answer": 0,
    "cn": "如果我們想要減少全球塑膠污染，各國政府與企業必須採取立即行動。 【選項解析】(A) stage 舞台  (B) role 角色  (C) action 行動  (D) beginning 開始。take immediate action 為固定搭配「採取立即行動」。",
    "vocabIndex": 3
  },
  {
    "q": "Mr. Harrison was chosen to play the leading ______ of the wise king in the community theater production.",
    "options": [
      "audience",
      "role",
      "beginning",
      "damage"
    ],
    "answer": 1,
    "cn": "哈里森先生被選中在社區劇團的演出中飾演賢明君王的主角角色。 【選項解析】(A) audience 觀眾  (B) role 角色  (C) beginning 開始  (D) damage 損害。戲劇角色為 leading role。",
    "vocabIndex": 4
  },
  {
    "q": "When the curtain rose, the lighting technicians illuminated the center of the dark theater ______.",
    "options": [
      "stage",
      "damage",
      "audience",
      "action"
    ],
    "answer": 0,
    "cn": "當布幕升起時，燈光技術人員照亮了黑暗劇院舞台的中央。 【選項解析】(A) audience 觀眾  (B) damage 損害  (C) stage 舞台  (D) action 行動。表演場地為 theater stage。",
    "vocabIndex": 5
  },
  {
    "q": "The comedian told a hilarious joke about air travel, causing the entire ______ to burst into loud laughter.",
    "options": [
      "damage",
      "stage",
      "audience",
      "role"
    ],
    "answer": 2,
    "cn": "這位喜劇演員講了一個關於空中旅行的搞笑笑話，逗得全場觀眾哈哈大笑。 【選項解析】(A) damage 損害  (B) stage 舞台  (C) role 角色  (D) audience 觀眾。欣賞喜劇表演的群體為 audience。",
    "vocabIndex": 6
  },
  {
    "q": "In the very ______ of the mystery novel, a wealthy businessman is found missing from his locked bedroom.",
    "options": [
      "stage",
      "damage",
      "audience",
      "beginning"
    ],
    "answer": 3,
    "cn": "在這本懸疑小說的一開始，一名富有商人就被發現從反鎖的臥室中失蹤了。 【選項解析】(A) stage 舞台  (B) damage 損害  (C) audience 觀眾  (D) beginning 開端。小說起始部分為 in the very beginning。",
    "vocabIndex": 7
  },
  {
    "q": "We stayed in the cinema until the very ______ of the movie to watch all the behind-the-scenes clips.",
    "options": [
      "damage",
      "end",
      "role",
      "stage"
    ],
    "answer": 1,
    "cn": "我們一直留在電影院裡直到影片結束，觀看所有的幕後花絮片段。 【選項解析】(A) end 結束  (B) damage 損害  (C) role 角色  (D) stage 舞台。電影結束為 the very end of the movie。",
    "vocabIndex": 8
  },
  {
    "q": "Before answering the tricky legal question, the lawyer decided to ______ and organize his thoughts.",
    "options": [
      "act",
      "behave",
      "damage",
      "pause"
    ],
    "answer": 3,
    "cn": "在回答這個棘手的法律問題之前，律師決定停頓一下以整理思緒。 【選項解析】(A) act 行動  (B) behave 表現  (C) pause 停頓  (D) damage 損害。說話片刻停頓用 pause。",
    "vocabIndex": 9
  },
  {
    "q": "Strong ocean waves can inflict serious ______ on coastal seawalls during intense tropical storms.",
    "options": [
      "role",
      "audience",
      "damage",
      "stage"
    ],
    "answer": 2,
    "cn": "強烈海浪在強烈熱帶風暴期間會對沿海海堤造成嚴重破壞。 【選項解析】(A) damage 損害  (B) audience 觀眾  (C) role 角色  (D) stage 舞台。造成破壞為 inflict serious damage。",
    "vocabIndex": 0
  },
  {
    "q": "The mother praised her little son because he ______ so politely while visiting his grandmother.",
    "options": [
      "behaved",
      "paused",
      "damaged",
      "acted"
    ],
    "answer": 0,
    "cn": "母親稱讚她的小兒子，因為他在拜訪祖母時表現得非常有禮貌。 【選項解析】(A) damaged 損壞  (B) paused 暫停  (C) behaved 表現得體  (D) acted 行為。孩子乖巧有禮為 behaved politely。",
    "vocabIndex": 1
  },
  {
    "q": "It was an inspiring ______ of generosity when the anonymous donor provided computers to rural schools.",
    "options": [
      "audience",
      "stage",
      "role",
      "act"
    ],
    "answer": 3,
    "cn": "當這位匿名捐贈者為偏遠學校提供電腦時，這是一項令人感動的慷慨義舉。 【選項解析】(A) audience 觀眾  (B) stage 舞台  (C) role 角色  (D) act 行為；義舉。慷慨行為為 act of generosity。",
    "vocabIndex": 2
  },
  {
    "q": "Effective environmental policies require collective civic ______ rather than empty promises from politicians.",
    "options": [
      "action",
      "stage",
      "role",
      "beginning"
    ],
    "answer": 0,
    "cn": "有效的環境政策需要公眾集體的實際行動，而非政客空洞的承諾。 【選項解析】(A) action 行動  (B) stage 舞台  (C) role 角色  (D) beginning 開始。集體行動為 collective civic action。",
    "vocabIndex": 3
  },
  {
    "q": "Technology continues to play an increasingly important ______ in modern agricultural production and distribution.",
    "options": [
      "damage",
      "audience",
      "role",
      "stage"
    ],
    "answer": 2,
    "cn": "科技在現代農業生產與配送中持續扮演著日益重要的角色。 【選項解析】(A) damage 損害  (B) role 角色；作用  (C) audience 觀眾  (D) stage 舞台。play an important role 指「扮演重要角色」。",
    "vocabIndex": 4
  },
  {
    "q": "The rock band walked out onto the floodlit ______ and greeted twenty thousand cheering fans.",
    "options": [
      "role",
      "stage",
      "audience",
      "action"
    ],
    "answer": 1,
    "cn": "搖滾樂團走上燈火輝煌的舞台，向兩萬名歡呼的歌迷致意。 【選項解析】(A) role 角色  (B) audience 觀眾  (C) stage 舞台  (D) action 行動。表演舞台為 stage。",
    "vocabIndex": 5
  },
  {
    "q": "A captivated ______ of parents and teachers listened attentively to the children's choir performance.",
    "options": [
      "damage",
      "role",
      "stage",
      "audience"
    ],
    "answer": 3,
    "cn": "一群全神貫注的家長與老師聽眾，專注地聆聽兒童合唱團的演出。 【選項解析】(A) damage 損害  (B) audience 聽眾  (C) stage 舞台  (D) role 角色。聆聽音樂會者為 audience。",
    "vocabIndex": 6
  },
  {
    "q": "Learning basic vocabulary is just the ______ of your exciting journey toward mastering the English language.",
    "options": [
      "stage",
      "damage",
      "beginning",
      "audience"
    ],
    "answer": 2,
    "cn": "學習基礎單字只是你精通英語這段令人興奮旅程的開始而已。 【選項解析】(A) beginning 開端  (B) damage 損害  (C) stage 舞台  (D) audience 觀眾。旅程起點為 beginning。",
    "vocabIndex": 7
  },
  {
    "q": "At the ______ of the long presentation, the speaker invited questions from everyone in the meeting room.",
    "options": [
      "role",
      "end",
      "damage",
      "audience"
    ],
    "answer": 1,
    "cn": "在漫長演報的尾聲，主講人邀請會議室裡的每個人提問。 【選項解析】(A) role 角色  (B) damage 損害  (C) end 末了  (D) audience 觀眾。簡報結束時為 at the end of the presentation。",
    "vocabIndex": 8
  },
  {
    "q": "While reading the poem aloud, you should ______ slightly after every comma to create a pleasant rhythm.",
    "options": [
      "pause",
      "behave",
      "damage",
      "act"
    ],
    "answer": 0,
    "cn": "朗讀這首詩時，你應該在每個逗號後稍作停頓，以創造優美的節奏。 【選項解析】(A) behave 表現  (B) pause 停頓  (C) damage 損害  (D) act 行動。朗讀時短暫歇止為 pause。",
    "vocabIndex": 9
  },
  {
    "q": "The flood caused severe property ______ throughout the lower parts of the river valley.",
    "options": [
      "audience",
      "damage",
      "stage",
      "role"
    ],
    "answer": 1,
    "cn": "洪水在河谷下游地區造成了嚴重的財產損失。 【選項解析】(A) damage 損害  (B) audience 觀眾  (C) stage 舞台  (D) role 角色。property damage 指財產損失。",
    "vocabIndex": 0
  },
  {
    "q": "The kindergarten teacher taught the toddlers how to ______ kindly toward one another during playtime.",
    "options": [
      "damage",
      "act",
      "behave",
      "pause"
    ],
    "answer": 2,
    "cn": "幼稚園老師教導幼童在遊戲時間要友善地對待彼此。 【選項解析】(A) damage 損壞  (B) act 行動  (C) pause 暫停  (D) behave 舉止得體。友善相處為 behave kindly。",
    "vocabIndex": 1
  },
  {
    "q": "Taking an umbrella on a cloudy afternoon is a prudent ______ of preparation that prevents getting soaked.",
    "options": [
      "audience",
      "damage",
      "stage",
      "act"
    ],
    "answer": 3,
    "cn": "在陰天的下午帶一把傘是一項謹慎的防備舉措，可以防止全身被淋濕。 【選項解析】(A) audience 觀眾  (B) act 舉措  (C) stage 舞台  (D) damage 損害。預防行動為 a prudent act。",
    "vocabIndex": 2
  },
  {
    "q": "The director gathered all actors behind the ______ for a brief pep talk before the opening night curtain opened.",
    "options": [
      "stage",
      "role",
      "damage",
      "audience"
    ],
    "answer": 0,
    "cn": "首演當晚布幕拉開之前，導演將所有演員召集在後台進行簡短打氣講話。 【選項解析】(A) role 角色  (B) stage 舞台  (C) damage 損害  (D) audience 觀眾。behind the stage 指「在後台」。",
    "vocabIndex": 5
  },
  {
    "q": "There was an uncomfortable ______ in the conversation after David accidentally mentioned the family secret.",
    "options": [
      "role",
      "pause",
      "stage",
      "audience"
    ],
    "answer": 1,
    "cn": "在戴維不小心提及家族秘密後，對話中出現了令人尷尬的停頓。 【選項解析】(A) pause 停頓  (B) role 角色  (C) stage 舞台  (D) audience 觀眾。對話暫歇為 an uncomfortable pause。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "damage": {
    "pos": "n. / v.",
    "en_def": "physical harm caused to something; to inflict harm",
    "cn_def": "損害；毀壞",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "physical harm caused to something; to inflict harm",
        "cn_def": "損害；毀壞"
      }
    ]
  },
  "behave": {
    "pos": "v.",
    "en_def": "to act or conduct oneself in a specified way",
    "cn_def": "表現；守規矩",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to act or conduct oneself in a specified way",
        "cn_def": "表現；守規矩"
      }
    ]
  },
  "act": {
    "pos": "v. / n.",
    "en_def": "to take action; to perform in a play; a deed",
    "cn_def": "行動；演戲；行為",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to take action; to perform in a play; a deed",
        "cn_def": "行動；演戲；行為"
      }
    ]
  },
  "action": {
    "pos": "n.",
    "en_def": "the process of doing something, typically to achieve an aim",
    "cn_def": "行動；動作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of doing something, typically to achieve an aim",
        "cn_def": "行動；動作"
      }
    ]
  },
  "role": {
    "pos": "n.",
    "en_def": "an actor's part in a play; the function assumed by someone",
    "cn_def": "角色；作用",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an actor's part in a play; the function assumed by someone",
        "cn_def": "角色；作用"
      }
    ]
  },
  "stage": {
    "pos": "n. / v.",
    "en_def": "a raised floor or platform on which actors perform",
    "cn_def": "舞台；階段",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a raised floor or platform on which actors perform",
        "cn_def": "舞台；階段"
      }
    ]
  },
  "audience": {
    "pos": "n.",
    "en_def": "the assembled spectators or listeners at a public event",
    "cn_def": "觀眾；聽眾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the assembled spectators or listeners at a public event",
        "cn_def": "觀眾；聽眾"
      }
    ]
  },
  "beginning": {
    "pos": "n.",
    "en_def": "the point in time or space at which something starts",
    "cn_def": "開始；起初",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the point in time or space at which something starts",
        "cn_def": "開始；起初"
      }
    ]
  },
  "end": {
    "pos": "n. / v.",
    "en_def": "the final part of something; to terminate",
    "cn_def": "結束；末端",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the final part of something; to terminate",
        "cn_def": "結束；末端"
      }
    ]
  },
  "pause": {
    "pos": "v. / n.",
    "en_def": "a temporary stop in action or speech; to stop briefly",
    "cn_def": "暫停；停頓",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "a temporary stop in action or speech; to stop briefly",
        "cn_def": "暫停；停頓"
      }
    ]
  },
  "behaved": {
    "pos": "",
    "en_def": "",
    "cn_def": "表現得體",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "表現得體"
      }
    ]
  },
  "paused": {
    "pos": "",
    "en_def": "",
    "cn_def": "暫停",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "暫停"
      }
    ]
  },
  "damaged": {
    "pos": "",
    "en_def": "",
    "cn_def": "損壞",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "損壞"
      }
    ]
  },
  "acted": {
    "pos": "",
    "en_def": "",
    "cn_def": "行為",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "行為"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
