// Unit 34 Quiz Data: Other Nouns (Part 2) 其他名詞（下）（第34下區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U34 - Other Nouns (Part 2)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "American",
    "pos": "n.",
    "cn_def": "美國人",
    "en_def": "",
    "sentence": "Q: Who is Mr. Brown? — A: He is our English teacher. He is an {{BLANK}} from New York.",
    "cn": "布朗先生是誰？ — 他是我們的英文老師，他是來自紐約的美國人。"
  },
  {
    "word": "foreigner (foreigners)",
    "pos": "n.",
    "cn_def": "外國人",
    "en_def": "",
    "sentence": "Q: Who are those people at the night market? — A: They are {{BLANK}}. They come from Japan and Korea.",
    "cn": "夜市裡那些人是誰？ — 他們是外國人，來自日本和韓國。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；隊長",
    "en_def": "",
    "sentence": "Q: Who is that tall boy? — A: He is Tom, our team {{BLANK}}. Everyone listens to him.",
    "cn": "那個高高的男孩是誰？ — 他是湯姆，我們的隊長，大家都聽他的。"
  },
  {
    "word": "member",
    "pos": "n.",
    "cn_def": "成員；會員",
    "en_def": "",
    "sentence": "Q: Does Amy join the music club? — A: Yes, she does. She is a {{BLANK}} of the club.",
    "cn": "艾美有參加音樂社嗎？ — 有，她是社團的成員。"
  },
  {
    "word": "player (players)",
    "pos": "n.",
    "cn_def": "球員；選手",
    "en_def": "",
    "sentence": "Q: Who are those boys in the park? — A: They are basketball {{BLANK}}. They play every Sunday.",
    "cn": "公園裡那些男孩是誰？ — 他們是籃球員，他們每個星期日都打球。"
  },
  {
    "word": "band",
    "pos": "n.",
    "cn_def": "樂團",
    "en_def": "",
    "sentence": "Q: What does your brother do after school? — A: He plays the drums in a {{BLANK}}.",
    "cn": "你哥哥放學後做什麼？ — 他在一個樂團裡打鼓。"
  },
  {
    "word": "club",
    "pos": "n.",
    "cn_def": "社團",
    "en_def": "",
    "sentence": "Q: What club do you join? — A: I join the English {{BLANK}}.",
    "cn": "你參加什麼社團？ — 我參加英文社。"
  },
  {
    "word": "group",
    "pos": "n.",
    "cn_def": "團體；小組",
    "en_def": "",
    "sentence": "Q: Who do you study with? — A: I study with my friends. We have a study {{BLANK}}.",
    "cn": "你和誰一起讀書？ — 我和朋友們一起讀書，我們有一個讀書小組。"
  },
  {
    "word": "god (God)",
    "pos": "n.",
    "cn_def": "上帝；神",
    "en_def": "",
    "sentence": "Q: Who do people pray to in the church? — A: They pray to {{BLANK}}.",
    "cn": "人們在教堂裡向誰禱告？ — 他們向上帝禱告。"
  },
  {
    "word": "chance",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "",
    "sentence": "Q: Does Lisa have a chance to go to Japan? — A: Yes, she does. She has a {{BLANK}} to visit her aunt there.",
    "cn": "麗莎有機會去日本嗎？ — 有，她有機會去那裡拜訪她的阿姨。"
  },
  {
    "word": "choice (choices)",
    "pos": "n.",
    "cn_def": "選擇",
    "en_def": "",
    "sentence": "Q: What do we have for lunch? — A: We have two {{BLANK}}: noodles or rice.",
    "cn": "我們午餐吃什麼？ — 我們有兩個選擇：麵或飯。"
  },
  {
    "word": "idea",
    "pos": "n.",
    "cn_def": "主意；想法",
    "en_def": "",
    "sentence": "Q: How can we make Mom happy on Mother's Day? — A: I have a good {{BLANK}}. Let's make a cake for her.",
    "cn": "母親節我們要怎麼讓媽媽開心？ — 我有一個好主意，我們來為她做一個蛋糕吧。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "",
    "sentence": "Q: Does your dad get up early every day? — A: Yes, he does. It's his good {{BLANK}}.",
    "cn": "你爸爸每天都早起嗎？ — 是的，這是他的好習慣。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "",
    "sentence": "Q: Does your mom cook well? — A: Yes, she does. She has a lot of {{BLANK}} in cooking.",
    "cn": "你媽媽很會煮飯嗎？ — 是的，她有很多煮飯的經驗。"
  },
  {
    "word": "trouble",
    "pos": "n.",
    "cn_def": "麻煩；困難",
    "en_def": "",
    "sentence": "Q: Do you need help with your homework? — A: Yes, I do. I have {{BLANK}} with the math questions.",
    "cn": "你的功課需要幫忙嗎？ — 需要，我數學題目有困難。"
  },
  {
    "word": "mistake (mistakes)",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "",
    "sentence": "Q: Does Ben get 100 on the test? — A: No, he doesn't. He makes two {{BLANK}}.",
    "cn": "班考試考一百分嗎？ — 沒有，他犯了兩個錯誤。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "",
    "sentence": "Q: Is your answer right? — A: No, it isn't. There is an {{BLANK}} in it.",
    "cn": "你的答案對嗎？ — 不對，裡面有一個錯誤。"
  },
  {
    "word": "excuse",
    "pos": "n.",
    "cn_def": "藉口",
    "en_def": "",
    "sentence": "Q: Why does Tom come late again? — A: He says he gets up late. That's not a good {{BLANK}}.",
    "cn": "湯姆為什麼又遲到了？ — 他說他太晚起床，那不是個好藉口。"
  },
  {
    "word": "reason",
    "pos": "n.",
    "cn_def": "理由；原因",
    "en_def": "",
    "sentence": "Q: Why do you study English every day? — A: I want to talk to people from other countries. That's my {{BLANK}}.",
    "cn": "你為什麼每天讀英文？ — 我想和其他國家的人說話，那就是我的理由。"
  },
  {
    "word": "sight",
    "pos": "n.",
    "cn_def": "視力",
    "en_def": "",
    "sentence": "Q: Does your grandpa read the newspaper without glasses? — A: No, he doesn't. He has poor {{BLANK}}.",
    "cn": "你爺爺不戴眼鏡看報紙嗎？ — 不，他視力不好。"
  },
  {
    "word": "voice",
    "pos": "n.",
    "cn_def": "聲音；嗓音",
    "en_def": "",
    "sentence": "Q: Does Amy sing well? — A: Yes, she does. She has a beautiful {{BLANK}}.",
    "cn": "艾美唱歌好聽嗎？ — 好聽，她有美妙的嗓音。"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "",
    "sentence": "Q: What does Ms. Lin have this afternoon? — A: She has a {{BLANK}} with other teachers.",
    "cn": "林老師今天下午有什麼事？ — 她和其他老師有一個會議。"
  },
  {
    "word": "party",
    "pos": "n.",
    "cn_def": "派對",
    "en_def": "",
    "sentence": "Q: What do you have on Saturday? — A: We have a birthday {{BLANK}} for Amy.",
    "cn": "你們星期六有什麼活動？ — 我們要為艾美辦一個生日派對。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試；採訪",
    "en_def": "",
    "sentence": "Q: Where does your sister go today? — A: She goes to a big company. She has a job {{BLANK}}.",
    "cn": "你姊姊今天去哪裡？ — 她去一家大公司，她有一個工作面試。"
  },
  {
    "word": "report",
    "pos": "n.",
    "cn_def": "報告；報導",
    "en_def": "",
    "sentence": "Q: What do you need to write for English class? — A: I need to write a book {{BLANK}}.",
    "cn": "英文課你需要寫什麼？ — 我需要寫一份讀書報告。"
  },
  {
    "word": "sale",
    "pos": "n.",
    "cn_def": "特價；出售",
    "en_def": "",
    "sentence": "Q: Why do so many people go to the store today? — A: There is a big {{BLANK}}. Everything is cheap.",
    "cn": "今天為什麼這麼多人去那家店？ — 有大特價，所有東西都很便宜。"
  },
  {
    "word": "prize",
    "pos": "n.",
    "cn_def": "獎品；獎",
    "en_def": "",
    "sentence": "Q: What does Tom get in the race? — A: He gets first {{BLANK}}. It's a new bike.",
    "cn": "湯姆在賽跑中得到什麼？ — 他得到第一名的獎品，是一輛新腳踏車。"
  },
  {
    "word": "treat",
    "pos": "n.",
    "cn_def": "請客",
    "en_def": "",
    "sentence": "Q: Do we need to pay for dinner tonight? — A: No, we don't. It's Dad's {{BLANK}}.",
    "cn": "我們今晚晚餐需要付錢嗎？ — 不用，爸爸請客。"
  },
  {
    "word": "tip",
    "pos": "n.",
    "cn_def": "小費",
    "en_def": "",
    "sentence": "Q: What does Dad give the waiter? — A: He gives him a {{BLANK}}.",
    "cn": "爸爸給服務生什麼？ — 他給他小費。"
  },
  {
    "word": "order",
    "pos": "n.",
    "cn_def": "點餐；訂單",
    "en_def": "",
    "sentence": "Q: What does the waiter say? — A: He says, \"May I take your {{BLANK}}?\"",
    "cn": "服務生說什麼？ — 他說：「我可以幫您點餐嗎？」"
  },
  {
    "word": "service",
    "pos": "n.",
    "cn_def": "服務",
    "en_def": "",
    "sentence": "Q: Do you like this restaurant? — A: Yes, I do. The food is good, and the {{BLANK}} is great, too.",
    "cn": "你喜歡這家餐廳嗎？ — 喜歡，食物很好吃，服務也很棒。"
  },
  {
    "word": "eve (Eve)",
    "pos": "n.",
    "cn_def": "前夕",
    "en_def": "",
    "sentence": "Q: What do you do on Chinese New Year's {{BLANK}}? — A: We eat a big dinner with our family.",
    "cn": "你們除夕做什麼？ — 我們和家人吃一頓大餐。"
  },
  {
    "word": "age",
    "pos": "n.",
    "cn_def": "年齡",
    "en_def": "",
    "sentence": "Q: What's your grandma's {{BLANK}}? — A: She is seventy years old.",
    "cn": "你奶奶幾歲？ — 她七十歲。"
  },
  {
    "word": "birthday",
    "pos": "n.",
    "cn_def": "生日",
    "en_def": "",
    "sentence": "Q: When is your {{BLANK}}? — A: It's on May 5th.",
    "cn": "你的生日是什麼時候？ — 在五月五日。"
  },
  {
    "word": "dream",
    "pos": "n.",
    "cn_def": "夢想",
    "en_def": "",
    "sentence": "Q: What's your sister's {{BLANK}}? — A: She wants to be a singer.",
    "cn": "你姊姊的夢想是什麼？ — 她想當歌手。"
  },
  {
    "word": "interest (interests)",
    "pos": "n.",
    "cn_def": "興趣",
    "en_def": "",
    "sentence": "Q: What {{BLANK}} does Ben have? — A: He likes reading and playing chess.",
    "cn": "班有什麼興趣？ — 他喜歡閱讀和下西洋棋。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "科目",
    "en_def": "",
    "sentence": "Q: What's your favorite {{BLANK}}? — A: It's math.",
    "cn": "你最喜歡的科目是什麼？ — 是數學。"
  },
  {
    "word": "topic",
    "pos": "n.",
    "cn_def": "主題；話題",
    "en_def": "",
    "sentence": "Q: What's the {{BLANK}} of today's class? — A: It's animals.",
    "cn": "今天上課的主題是什麼？ — 是動物。"
  },
  {
    "word": "word",
    "pos": "n.",
    "cn_def": "字；單字",
    "en_def": "",
    "sentence": "Q: What does this {{BLANK}} mean? — A: It means \"happy.\"",
    "cn": "這個字是什麼意思？ — 它的意思是「快樂的」。"
  },
  {
    "word": "sentence",
    "pos": "n.",
    "cn_def": "句子",
    "en_def": "",
    "sentence": "Q: What's the first {{BLANK}} on page 10? — A: It's \"Tom has a cat.\"",
    "cn": "第十頁的第一個句子是什麼？ — 是「湯姆有一隻貓」。"
  },
  {
    "word": "way",
    "pos": "n.",
    "cn_def": "道路；方法",
    "en_def": "",
    "sentence": "Q: What's the {{BLANK}} to the station? — A: Go straight and turn left.",
    "cn": "去車站的路怎麼走？ — 直走然後左轉。"
  },
  {
    "word": "matter",
    "pos": "n.",
    "cn_def": "事情；問題",
    "en_def": "",
    "sentence": "Q: What's the {{BLANK}}? — A: I have a headache.",
    "cn": "怎麼了？ — 我頭痛。"
  },
  {
    "word": "kind",
    "pos": "n.",
    "cn_def": "種類",
    "en_def": "",
    "sentence": "Q: What {{BLANK}} of music do you like? — A: I like pop music.",
    "cn": "你喜歡哪一種音樂？ — 我喜歡流行音樂。"
  },
  {
    "word": "level",
    "pos": "n.",
    "cn_def": "程度；等級",
    "en_def": "",
    "sentence": "Q: What's the {{BLANK}} of this book? — A: It's easy. Children can read it.",
    "cn": "這本書的程度如何？ — 很簡單，小孩子都能讀。"
  },
  {
    "word": "mind",
    "pos": "n.",
    "cn_def": "頭腦；心思",
    "en_def": "",
    "sentence": "Q: You look worried. What's on your {{BLANK}}? — A: I'm worried about the math test.",
    "cn": "你看起來很擔心，你在想什麼？ — 我在擔心數學考試。"
  },
  {
    "word": "rule",
    "pos": "n.",
    "cn_def": "規則",
    "en_def": "",
    "sentence": "Q: What's the first {{BLANK}} in your class? — A: Don't be late for class.",
    "cn": "你們班的第一條規則是什麼？ — 上課不要遲到。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "動作；行動",
    "en_def": "",
    "sentence": "Q: Does your brother like {{BLANK}} movies? — A: Yes, he does. He watches them every weekend.",
    "cn": "你哥哥喜歡動作片嗎？ — 喜歡，他每個週末都看。"
  },
  {
    "word": "fun",
    "pos": "n.",
    "cn_def": "樂趣；好玩的事",
    "en_def": "",
    "sentence": "Q: Do you and your friends have a good time at the beach? — A: Yes, we do. We have a lot of {{BLANK}}.",
    "cn": "你和朋友們在海灘玩得開心嗎？ — 開心，我們玩得很愉快。"
  },
  {
    "word": "joke (jokes)",
    "pos": "n.",
    "cn_def": "笑話",
    "en_def": "",
    "sentence": "Q: Does Uncle Jack like to make people laugh? — A: Yes, he does. He tells funny {{BLANK}}.",
    "cn": "傑克叔叔喜歡逗人笑嗎？ — 喜歡，他會講好笑的笑話。"
  },
  {
    "word": "story (stories)",
    "pos": "n.",
    "cn_def": "故事",
    "en_def": "",
    "sentence": "Q: Do the children like books? — A: Yes, they do. They love {{BLANK}} about animals.",
    "cn": "孩子們喜歡書嗎？ — 喜歡，他們很愛動物的故事。"
  },
  {
    "word": "program",
    "pos": "n.",
    "cn_def": "節目",
    "en_def": "",
    "sentence": "Q: What TV {{BLANK}} does your dad like? — A: He likes sports shows.",
    "cn": "你爸爸喜歡什麼電視節目？ — 他喜歡運動節目。"
  },
  {
    "word": "trick (tricks)",
    "pos": "n.",
    "cn_def": "惡作劇；把戲",
    "en_def": "",
    "sentence": "Q: Do your classmates like April Fools' Day? — A: Yes, they do. They play {{BLANK}} on their friends.",
    "cn": "你的同學們喜歡愚人節嗎？ — 喜歡，他們會對朋友惡作劇。"
  },
  {
    "word": "smile",
    "pos": "n.",
    "cn_def": "微笑",
    "en_def": "",
    "sentence": "Q: Do the students like their new teacher? — A: Yes, they do. She has a sweet {{BLANK}}.",
    "cn": "學生們喜歡他們的新老師嗎？ — 喜歡，她有甜美的笑容。"
  },
  {
    "word": "joy",
    "pos": "n.",
    "cn_def": "歡樂；喜悅",
    "en_def": "",
    "sentence": "Q: How does Grandma feel when she sees the baby? — A: She is full of {{BLANK}}.",
    "cn": "奶奶看到寶寶時感覺如何？ — 她充滿了喜悅。"
  },
  {
    "word": "pleasure",
    "pos": "n.",
    "cn_def": "榮幸；愉快",
    "en_def": "",
    "sentence": "Q: Thank you for helping me. — A: It's my {{BLANK}}.",
    "cn": "謝謝你幫我。 — 這是我的榮幸。（不客氣）"
  },
  {
    "word": "cheer (cheers)",
    "pos": "n.",
    "cn_def": "歡呼；喝采",
    "en_def": "",
    "sentence": "Q: What do the fans do at the game? — A: They give loud {{BLANK}} for the team.",
    "cn": "球迷在比賽時做什麼？ — 他們為球隊大聲歡呼。"
  },
  {
    "word": "fact",
    "pos": "n.",
    "cn_def": "事實",
    "en_def": "",
    "sentence": "Q: Does Tom know a lot about koalas? — A: Yes, he does. He knows a fun {{BLANK}}: koalas sleep 20 hours a day.",
    "cn": "湯姆對無尾熊很了解嗎？ — 是的，他知道一個有趣的事實：無尾熊一天睡二十個小時。"
  }
];

const MCQS = [
  {
    "q": "Q: Who is Mr. Brown? — A: He is our English teacher. He is an ______ from New York.【美國人】",
    "options": [
      "Report",
      "American",
      "Tip",
      "Program"
    ],
    "answer": 1,
    "cn": "布朗先生是誰？ — 他是我們的英文老師，他是來自紐約的美國人。",
    "vocabIndex": 0
  },
  {
    "q": "Q: Who are those people at the night market? — A: They are ______. They come from Japan and Korea.【外國人】",
    "options": [
      "tricks",
      "jokes",
      "foreigners",
      "interests"
    ],
    "answer": 2,
    "cn": "夜市裡那些人是誰？ — 他們是外國人，來自日本和韓國。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Who is that tall boy? — A: He is Tom, our team ______. Everyone listens to him.【領導者；隊長】",
    "options": [
      "leader",
      "pleasure",
      "sale",
      "god"
    ],
    "answer": 0,
    "cn": "那個高高的男孩是誰？ — 他是湯姆，我們的隊長，大家都聽他的。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Does Amy join the music club? — A: Yes, she does. She is a ______ of the club.【成員；會員】",
    "options": [
      "chance",
      "kind",
      "service",
      "member"
    ],
    "answer": 3,
    "cn": "艾美有參加音樂社嗎？ — 有，她是社團的成員。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Who are those boys in the park? — A: They are basketball ______. They play every Sunday.【球員；選手】",
    "options": [
      "mistakes",
      "players",
      "cheers",
      "tricks"
    ],
    "answer": 1,
    "cn": "公園裡那些男孩是誰？ — 他們是籃球員，他們每個星期日都打球。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What does your brother do after school? — A: He plays the drums in a ______.【樂團】",
    "options": [
      "tip",
      "club",
      "group",
      "band"
    ],
    "answer": 3,
    "cn": "你哥哥放學後做什麼？ — 他在一個樂團裡打鼓。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What club do you join? — A: I join the English ______.【社團】",
    "options": [
      "party",
      "experience",
      "club",
      "member"
    ],
    "answer": 2,
    "cn": "你參加什麼社團？ — 我參加英文社。",
    "vocabIndex": 6
  },
  {
    "q": "Q: Who do you study with? — A: I study with my friends. We have a study ______.【團體；小組】",
    "options": [
      "group",
      "matter",
      "American",
      "god"
    ],
    "answer": 0,
    "cn": "你和誰一起讀書？ — 我和朋友們一起讀書，我們有一個讀書小組。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Who do people pray to in the church? — A: They pray to ______.【上帝；神】",
    "options": [
      "Order",
      "Band",
      "God",
      "Reason"
    ],
    "answer": 2,
    "cn": "人們在教堂裡向誰禱告？ — 他們向上帝禱告。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Does Lisa have a chance to go to Japan? — A: Yes, she does. She has a ______ to visit her aunt there.【機會】",
    "options": [
      "sentence",
      "chance",
      "club",
      "mind"
    ],
    "answer": 1,
    "cn": "麗莎有機會去日本嗎？ — 有，她有機會去那裡拜訪她的阿姨。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What do we have for lunch? — A: We have two ______: noodles or rice.【選擇】",
    "options": [
      "players",
      "interests",
      "cheers",
      "choices"
    ],
    "answer": 3,
    "cn": "我們午餐吃什麼？ — 我們有兩個選擇：麵或飯。",
    "vocabIndex": 10
  },
  {
    "q": "Q: How can we make Mom happy on Mother's Day? — A: I have a good ______. Let's make a cake for her.【主意；想法】",
    "options": [
      "idea",
      "subject",
      "tip",
      "pleasure"
    ],
    "answer": 0,
    "cn": "母親節我們要怎麼讓媽媽開心？ — 我有一個好主意，我們來為她做一個蛋糕吧。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Does your dad get up early every day? — A: Yes, he does. It's his good ______.【習慣】",
    "options": [
      "trouble",
      "interview",
      "sale",
      "habit"
    ],
    "answer": 3,
    "cn": "你爸爸每天都早起嗎？ — 是的，這是他的好習慣。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Does your mom cook well? — A: Yes, she does. She has a lot of ______ in cooking.【經驗】",
    "options": [
      "sight",
      "error",
      "experience",
      "eve"
    ],
    "answer": 2,
    "cn": "你媽媽很會煮飯嗎？ — 是的，她有很多煮飯的經驗。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Do you need help with your homework? — A: Yes, I do. I have ______ with the math questions.【麻煩；困難】",
    "options": [
      "trouble",
      "program",
      "sale",
      "American"
    ],
    "answer": 0,
    "cn": "你的功課需要幫忙嗎？ — 需要，我數學題目有困難。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Does Ben get 100 on the test? — A: No, he doesn't. He makes two ______.【錯誤】",
    "options": [
      "cheers",
      "mistakes",
      "players",
      "foreigners"
    ],
    "answer": 1,
    "cn": "班考試考一百分嗎？ — 沒有，他犯了兩個錯誤。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Is your answer right? — A: No, it isn't. There is an ______ in it.【錯誤】",
    "options": [
      "level",
      "American",
      "tip",
      "error"
    ],
    "answer": 3,
    "cn": "你的答案對嗎？ — 不對，裡面有一個錯誤。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Why does Tom come late again? — A: He says he gets up late. That's not a good ______.【藉口】",
    "options": [
      "habit",
      "American",
      "excuse",
      "fun"
    ],
    "answer": 2,
    "cn": "湯姆為什麼又遲到了？ — 他說他太晚起床，那不是個好藉口。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Why do you study English every day? — A: I want to talk to people from other countries. That's my ______.【理由；原因】",
    "options": [
      "member",
      "reason",
      "trouble",
      "habit"
    ],
    "answer": 1,
    "cn": "你為什麼每天讀英文？ — 我想和其他國家的人說話，那就是我的理由。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Does your grandpa read the newspaper without glasses? — A: No, he doesn't. He has poor ______.【視力】",
    "options": [
      "sight",
      "club",
      "band",
      "fun"
    ],
    "answer": 0,
    "cn": "你爺爺不戴眼鏡看報紙嗎？ — 不，他視力不好。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Does Amy sing well? — A: Yes, she does. She has a beautiful ______.【聲音；嗓音】",
    "options": [
      "way",
      "voice",
      "birthday",
      "matter"
    ],
    "answer": 1,
    "cn": "艾美唱歌好聽嗎？ — 好聽，她有美妙的嗓音。",
    "vocabIndex": 20
  },
  {
    "q": "Q: What does Ms. Lin have this afternoon? — A: She has a ______ with other teachers.【會議】",
    "options": [
      "party",
      "reason",
      "meeting",
      "action"
    ],
    "answer": 2,
    "cn": "林老師今天下午有什麼事？ — 她和其他老師有一個會議。",
    "vocabIndex": 21
  },
  {
    "q": "Q: What do you have on Saturday? — A: We have a birthday ______ for Amy.【派對】",
    "options": [
      "party",
      "leader",
      "excuse",
      "mind"
    ],
    "answer": 0,
    "cn": "你們星期六有什麼活動？ — 我們要為艾美辦一個生日派對。",
    "vocabIndex": 22
  },
  {
    "q": "Q: Where does your sister go today? — A: She goes to a big company. She has a job ______.【面試；採訪】",
    "options": [
      "leader",
      "club",
      "mind",
      "interview"
    ],
    "answer": 3,
    "cn": "你姊姊今天去哪裡？ — 她去一家大公司，她有一個工作面試。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What do you need to write for English class? — A: I need to write a book ______.【報告；報導】",
    "options": [
      "report",
      "matter",
      "club",
      "reason"
    ],
    "answer": 0,
    "cn": "英文課你需要寫什麼？ — 我需要寫一份讀書報告。",
    "vocabIndex": 24
  },
  {
    "q": "Q: Why do so many people go to the store today? — A: There is a big ______. Everything is cheap.【特價；出售】",
    "options": [
      "sight",
      "fact",
      "sale",
      "mind"
    ],
    "answer": 2,
    "cn": "今天為什麼這麼多人去那家店？ — 有大特價，所有東西都很便宜。",
    "vocabIndex": 25
  },
  {
    "q": "Q: What does Tom get in the race? — A: He gets first ______. It's a new bike.【獎品；獎】",
    "options": [
      "chance",
      "prize",
      "age",
      "interview"
    ],
    "answer": 1,
    "cn": "湯姆在賽跑中得到什麼？ — 他得到第一名的獎品，是一輛新腳踏車。",
    "vocabIndex": 26
  },
  {
    "q": "Q: Do we need to pay for dinner tonight? — A: No, we don't. It's Dad's ______.【請客】",
    "options": [
      "prize",
      "voice",
      "error",
      "treat"
    ],
    "answer": 3,
    "cn": "我們今晚晚餐需要付錢嗎？ — 不用，爸爸請客。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What does Dad give the waiter? — A: He gives him a ______.【小費】",
    "options": [
      "order",
      "tip",
      "prize",
      "rule"
    ],
    "answer": 1,
    "cn": "爸爸給服務生什麼？ — 他給他小費。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What does the waiter say? — A: He says, \"May I take your ______?\"【點餐；訂單】",
    "options": [
      "birthday",
      "prize",
      "order",
      "American"
    ],
    "answer": 2,
    "cn": "服務生說什麼？ — 他說：「我可以幫您點餐嗎？」",
    "vocabIndex": 29
  },
  {
    "q": "Q: Do you like this restaurant? — A: Yes, I do. The food is good, and the ______ is great, too.【服務】",
    "options": [
      "service",
      "chance",
      "birthday",
      "sentence"
    ],
    "answer": 0,
    "cn": "你喜歡這家餐廳嗎？ — 喜歡，食物很好吃，服務也很棒。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What do you do on Chinese New Year's ______? — A: We eat a big dinner with our family.【前夕】",
    "options": [
      "Treat",
      "Chance",
      "Group",
      "Eve"
    ],
    "answer": 3,
    "cn": "你們除夕做什麼？ — 我們和家人吃一頓大餐。",
    "vocabIndex": 31
  },
  {
    "q": "Q: What's your grandma's ______? — A: She is seventy years old.【年齡】",
    "options": [
      "party",
      "sight",
      "age",
      "band"
    ],
    "answer": 2,
    "cn": "你奶奶幾歲？ — 她七十歲。",
    "vocabIndex": 32
  },
  {
    "q": "Q: When is your ______? — A: It's on May 5th.【生日】",
    "options": [
      "subject",
      "idea",
      "American",
      "birthday"
    ],
    "answer": 3,
    "cn": "你的生日是什麼時候？ — 在五月五日。",
    "vocabIndex": 33
  },
  {
    "q": "Q: What's your sister's ______? — A: She wants to be a singer.【夢想】",
    "options": [
      "dream",
      "trouble",
      "age",
      "group"
    ],
    "answer": 0,
    "cn": "你姊姊的夢想是什麼？ — 她想當歌手。",
    "vocabIndex": 34
  },
  {
    "q": "Q: What ______ does Ben have? — A: He likes reading and playing chess.【興趣】",
    "options": [
      "jokes",
      "interests",
      "stories",
      "choices"
    ],
    "answer": 1,
    "cn": "班有什麼興趣？ — 他喜歡閱讀和下西洋棋。",
    "vocabIndex": 35
  },
  {
    "q": "Q: What's your favorite ______? — A: It's math.【科目】",
    "options": [
      "trouble",
      "American",
      "idea",
      "subject"
    ],
    "answer": 3,
    "cn": "你最喜歡的科目是什麼？ — 是數學。",
    "vocabIndex": 36
  },
  {
    "q": "Q: What's the ______ of today's class? — A: It's animals.【主題；話題】",
    "options": [
      "smile",
      "report",
      "topic",
      "order"
    ],
    "answer": 2,
    "cn": "今天上課的主題是什麼？ — 是動物。",
    "vocabIndex": 37
  },
  {
    "q": "Q: What does this ______ mean? — A: It means \"happy.\"【字；單字】",
    "options": [
      "word",
      "pleasure",
      "matter",
      "reason"
    ],
    "answer": 0,
    "cn": "這個字是什麼意思？ — 它的意思是「快樂的」。",
    "vocabIndex": 38
  },
  {
    "q": "Q: What's the first ______ on page 10? — A: It's \"Tom has a cat.\"【句子】",
    "options": [
      "sale",
      "sentence",
      "experience",
      "club"
    ],
    "answer": 1,
    "cn": "第十頁的第一個句子是什麼？ — 是「湯姆有一隻貓」。",
    "vocabIndex": 39
  },
  {
    "q": "Q: What's the ______ to the station? — A: Go straight and turn left.【道路；方法】",
    "options": [
      "rule",
      "fun",
      "way",
      "group"
    ],
    "answer": 2,
    "cn": "去車站的路怎麼走？ — 直走然後左轉。",
    "vocabIndex": 40
  },
  {
    "q": "Q: What's the ______? — A: I have a headache.【事情；問題】",
    "options": [
      "habit",
      "level",
      "age",
      "matter"
    ],
    "answer": 3,
    "cn": "怎麼了？ — 我頭痛。",
    "vocabIndex": 41
  },
  {
    "q": "Q: What ______ of music do you like? — A: I like pop music.【種類】",
    "options": [
      "party",
      "kind",
      "band",
      "order"
    ],
    "answer": 1,
    "cn": "你喜歡哪一種音樂？ — 我喜歡流行音樂。",
    "vocabIndex": 42
  },
  {
    "q": "Q: What's the ______ of this book? — A: It's easy. Children can read it.【程度；等級】",
    "options": [
      "level",
      "reason",
      "god",
      "service"
    ],
    "answer": 0,
    "cn": "這本書的程度如何？ — 很簡單，小孩子都能讀。",
    "vocabIndex": 43
  },
  {
    "q": "Q: You look worried. What's on your ______? — A: I'm worried about the math test.【頭腦；心思】",
    "options": [
      "matter",
      "program",
      "order",
      "mind"
    ],
    "answer": 3,
    "cn": "你看起來很擔心，你在想什麼？ — 我在擔心數學考試。",
    "vocabIndex": 44
  },
  {
    "q": "Q: What's the first ______ in your class? — A: Don't be late for class.【規則】",
    "options": [
      "fun",
      "rule",
      "subject",
      "group"
    ],
    "answer": 1,
    "cn": "你們班的第一條規則是什麼？ — 上課不要遲到。",
    "vocabIndex": 45
  },
  {
    "q": "Q: Does your brother like ______ movies? — A: Yes, he does. He watches them every weekend.【動作；行動】",
    "options": [
      "reason",
      "error",
      "action",
      "topic"
    ],
    "answer": 2,
    "cn": "你哥哥喜歡動作片嗎？ — 喜歡，他每個週末都看。",
    "vocabIndex": 46
  },
  {
    "q": "Q: Do you and your friends have a good time at the beach? — A: Yes, we do. We have a lot of ______.【樂趣；好玩的事】",
    "options": [
      "fun",
      "sale",
      "topic",
      "chance"
    ],
    "answer": 0,
    "cn": "你和朋友們在海灘玩得開心嗎？ — 開心，我們玩得很愉快。",
    "vocabIndex": 47
  },
  {
    "q": "Q: Does Uncle Jack like to make people laugh? — A: Yes, he does. He tells funny ______.【笑話】",
    "options": [
      "foreigners",
      "jokes",
      "mistakes",
      "tricks"
    ],
    "answer": 1,
    "cn": "傑克叔叔喜歡逗人笑嗎？ — 喜歡，他會講好笑的笑話。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Do the children like books? — A: Yes, they do. They love ______ about animals.【故事】",
    "options": [
      "foreigners",
      "jokes",
      "interests",
      "stories"
    ],
    "answer": 3,
    "cn": "孩子們喜歡書嗎？ — 喜歡，他們很愛動物的故事。",
    "vocabIndex": 49
  },
  {
    "q": "Q: What TV ______ does your dad like? — A: He likes sports shows.【節目】",
    "options": [
      "program",
      "rule",
      "leader",
      "matter"
    ],
    "answer": 0,
    "cn": "你爸爸喜歡什麼電視節目？ — 他喜歡運動節目。",
    "vocabIndex": 50
  },
  {
    "q": "Q: Do your classmates like April Fools' Day? — A: Yes, they do. They play ______ on their friends.【惡作劇；把戲】",
    "options": [
      "players",
      "mistakes",
      "tricks",
      "cheers"
    ],
    "answer": 2,
    "cn": "你的同學們喜歡愚人節嗎？ — 喜歡，他們會對朋友惡作劇。",
    "vocabIndex": 51
  },
  {
    "q": "Q: Do the students like their new teacher? — A: Yes, they do. She has a sweet ______.【微笑】",
    "options": [
      "interview",
      "smile",
      "order",
      "rule"
    ],
    "answer": 1,
    "cn": "學生們喜歡他們的新老師嗎？ — 喜歡，她有甜美的笑容。",
    "vocabIndex": 52
  },
  {
    "q": "Q: How does Grandma feel when she sees the baby? — A: She is full of ______.【歡樂；喜悅】",
    "options": [
      "joy",
      "service",
      "experience",
      "error"
    ],
    "answer": 0,
    "cn": "奶奶看到寶寶時感覺如何？ — 她充滿了喜悅。",
    "vocabIndex": 53
  },
  {
    "q": "Q: Thank you for helping me. — A: It's my ______.【榮幸；愉快】",
    "options": [
      "voice",
      "joy",
      "pleasure",
      "chance"
    ],
    "answer": 2,
    "cn": "謝謝你幫我。 — 這是我的榮幸。（不客氣）",
    "vocabIndex": 54
  },
  {
    "q": "Q: What do the fans do at the game? — A: They give loud ______ for the team.【歡呼；喝采】",
    "options": [
      "foreigners",
      "stories",
      "tricks",
      "cheers"
    ],
    "answer": 3,
    "cn": "球迷在比賽時做什麼？ — 他們為球隊大聲歡呼。",
    "vocabIndex": 55
  },
  {
    "q": "Q: Does Tom know a lot about koalas? — A: Yes, he does. He knows a fun ______: koalas sleep 20 hours a day.【事實】",
    "options": [
      "leader",
      "god",
      "fact",
      "mind"
    ],
    "answer": 2,
    "cn": "湯姆對無尾熊很了解嗎？ — 是的，他知道一個有趣的事實：無尾熊一天睡二十個小時。",
    "vocabIndex": 56
  }
];

const LOOKUP = {
  "kind": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "親切的"
  },
  "order": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "點餐"
  },
  "band": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "樂團"
  },
  "american": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "美國人"
  },
  "foreigners": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "外國人"
  },
  "leader": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "領導者；隊長"
  },
  "member": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "成員；會員"
  },
  "players": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "球員；選手"
  },
  "club": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "社團"
  },
  "group": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "團體；小組"
  },
  "god": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "上帝；神"
  },
  "chance": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "機會"
  },
  "choices": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "選擇"
  },
  "idea": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "主意；想法"
  },
  "habit": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "習慣"
  },
  "experience": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "經驗"
  },
  "trouble": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "麻煩；困難"
  },
  "mistakes": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "錯誤"
  },
  "error": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "錯誤"
  },
  "excuse": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "藉口"
  },
  "reason": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "理由；原因"
  },
  "sight": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "視力"
  },
  "voice": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "聲音；嗓音"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "會議"
  },
  "party": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "派對"
  },
  "interview": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "面試；採訪"
  },
  "report": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "報告；報導"
  },
  "sale": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "特價；出售"
  },
  "prize": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "獎品；獎"
  },
  "treat": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "請客"
  },
  "tip": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小費"
  },
  "service": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "服務"
  },
  "eve": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "前夕"
  },
  "age": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "年齡"
  },
  "birthday": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "生日"
  },
  "dream": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "夢想"
  },
  "interests": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "興趣"
  },
  "subject": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "科目"
  },
  "topic": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "主題；話題"
  },
  "word": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "字；單字"
  },
  "sentence": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "句子"
  },
  "way": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "道路；方法"
  },
  "matter": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "事情；問題"
  },
  "level": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "程度；等級"
  },
  "mind": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "頭腦；心思"
  },
  "rule": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "規則"
  },
  "action": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "動作；行動"
  },
  "fun": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "樂趣；好玩的事"
  },
  "jokes": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "笑話"
  },
  "stories": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "故事"
  },
  "program": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "節目"
  },
  "tricks": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "惡作劇；把戲"
  },
  "smile": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "微笑"
  },
  "joy": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "歡樂；喜悅"
  },
  "pleasure": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "榮幸；愉快"
  },
  "cheers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "歡呼；喝采"
  },
  "fact": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "事實"
  }
};

const EXTRA_GLOSSES = {};
