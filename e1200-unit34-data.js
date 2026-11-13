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
    "en_def": "a person from the United States",
    "sentence": "Q: Who is Mr. Brown? — A: He is our English teacher. He is an {{BLANK}} from New York.",
    "cn": "布朗先生是誰？ — 他是我們的英文老師，他是來自紐約的美國人。"
  },
  {
    "word": "foreigner (foreigners)",
    "pos": "n.",
    "cn_def": "外國人",
    "en_def": "a person from another country",
    "sentence": "Q: Who are those people at the night market? — A: They are {{BLANK}}. They come from Japan and Korea.",
    "cn": "夜市裡那些人是誰？ — 他們是外國人，來自日本和韓國。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；隊長",
    "en_def": "the person who a group follows",
    "sentence": "Q: Who is that tall boy? — A: He is Tom, our team {{BLANK}}. Everyone listens to him.",
    "cn": "那個高高的男孩是誰？ — 他是湯姆，我們的隊長，大家都聽他的。"
  },
  {
    "word": "member",
    "pos": "n.",
    "cn_def": "成員；會員",
    "en_def": "one of the people in a group or club",
    "sentence": "Q: Does Amy join the music club? — A: Yes, she does. She is a {{BLANK}} of the club.",
    "cn": "艾美有參加音樂社嗎？ — 有，她是社團的成員。"
  },
  {
    "word": "player (players)",
    "pos": "n.",
    "cn_def": "球員；選手",
    "en_def": "a person who plays a game or a sport",
    "sentence": "Q: Who are those boys in the park? — A: They are basketball {{BLANK}}. They play every Sunday.",
    "cn": "公園裡那些男孩是誰？ — 他們是籃球員，他們每個星期日都打球。"
  },
  {
    "word": "band",
    "pos": "n.",
    "cn_def": "樂團",
    "en_def": "a group of people who play music together",
    "sentence": "Q: What does your brother do after school? — A: He plays the drums in a {{BLANK}}.",
    "cn": "你哥哥放學後做什麼？ — 他在一個樂團裡打鼓。"
  },
  {
    "word": "club",
    "pos": "n.",
    "cn_def": "社團",
    "en_def": "a group of people who meet to do something they all like",
    "sentence": "Q: What club do you join? — A: I join the English {{BLANK}}.",
    "cn": "你參加什麼社團？ — 我參加英文社。"
  },
  {
    "word": "group",
    "pos": "n.",
    "cn_def": "團體；小組",
    "en_def": "a number of people or things that are together",
    "sentence": "Q: Who do you study with? — A: I study with my friends. We have a study {{BLANK}}.",
    "cn": "你和誰一起讀書？ — 我和朋友們一起讀書，我們有一個讀書小組。"
  },
  {
    "word": "god (God)",
    "pos": "n.",
    "cn_def": "上帝；神",
    "en_def": "the one who some people believe made the world and pray to",
    "sentence": "Q: Who do people pray to in the church? — A: They pray to {{BLANK}}.",
    "cn": "人們在教堂裡向誰禱告？ — 他們向上帝禱告。"
  },
  {
    "word": "chance",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a time when you can do something",
    "sentence": "Q: Does Lisa have a chance to go to Japan? — A: Yes, she does. She has a {{BLANK}} to visit her aunt there.",
    "cn": "麗莎有機會去日本嗎？ — 有，她有機會去那裡拜訪她的阿姨。"
  },
  {
    "word": "choice (choices)",
    "pos": "n.",
    "cn_def": "選擇",
    "en_def": "one of the things that you can choose",
    "sentence": "Q: What do we have for lunch? — A: We have two {{BLANK}}: noodles or rice.",
    "cn": "我們午餐吃什麼？ — 我們有兩個選擇：麵或飯。"
  },
  {
    "word": "idea",
    "pos": "n.",
    "cn_def": "主意；想法",
    "en_def": "a thought or a plan in your mind",
    "sentence": "Q: How can we make Mom happy on Mother's Day? — A: I have a good {{BLANK}}. Let's make a cake for her.",
    "cn": "母親節我們要怎麼讓媽媽開心？ — 我有一個好主意，我們來為她做一個蛋糕吧。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something that you do often, without thinking",
    "sentence": "Q: Does your dad get up early every day? — A: Yes, he does. It's his good {{BLANK}}.",
    "cn": "你爸爸每天都早起嗎？ — 是的，這是他的好習慣。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "something that happened to you; what you learn from doing things",
    "sentence": "Q: Does your mom cook well? — A: Yes, she does. She has a lot of {{BLANK}} in cooking.",
    "cn": "你媽媽很會煮飯嗎？ — 是的，她有很多煮飯的經驗。"
  },
  {
    "word": "trouble",
    "pos": "n.",
    "cn_def": "麻煩；困難",
    "en_def": "problems or difficulties",
    "sentence": "Q: Do you need help with your homework? — A: Yes, I do. I have {{BLANK}} with the math questions.",
    "cn": "你的功課需要幫忙嗎？ — 需要，我數學題目有困難。"
  },
  {
    "word": "mistake (mistakes)",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "something you do or write that is wrong",
    "sentence": "Q: Does Ben get 100 on the test? — A: No, he doesn't. He makes two {{BLANK}}.",
    "cn": "班考試考一百分嗎？ — 沒有，他犯了兩個錯誤。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "a mistake",
    "sentence": "Q: Is your answer right? — A: No, it isn't. There is an {{BLANK}} in it.",
    "cn": "你的答案對嗎？ — 不對，裡面有一個錯誤。"
  },
  {
    "word": "excuse",
    "pos": "n.",
    "cn_def": "藉口",
    "en_def": "a reason you give to explain why you did something wrong",
    "sentence": "Q: Why does Tom come late again? — A: He says he gets up late. That's not a good {{BLANK}}.",
    "cn": "湯姆為什麼又遲到了？ — 他說他太晚起床，那不是個好藉口。"
  },
  {
    "word": "reason",
    "pos": "n.",
    "cn_def": "理由；原因",
    "en_def": "why something happens or why someone does something",
    "sentence": "Q: Why do you study English every day? — A: I want to talk to people from other countries. That's my {{BLANK}}.",
    "cn": "你為什麼每天讀英文？ — 我想和其他國家的人說話，那就是我的理由。"
  },
  {
    "word": "sight",
    "pos": "n.",
    "cn_def": "視力",
    "en_def": "the power to see",
    "sentence": "Q: Does your grandpa read the newspaper without glasses? — A: No, he doesn't. He has poor {{BLANK}}.",
    "cn": "你爺爺不戴眼鏡看報紙嗎？ — 不，他視力不好。"
  },
  {
    "word": "voice",
    "pos": "n.",
    "cn_def": "聲音；嗓音",
    "en_def": "the sound you make when you speak or sing",
    "sentence": "Q: Does Amy sing well? — A: Yes, she does. She has a beautiful {{BLANK}}.",
    "cn": "艾美唱歌好聽嗎？ — 好聽，她有美妙的嗓音。"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "a time when people come together to talk about something",
    "sentence": "Q: What does Ms. Lin have this afternoon? — A: She has a {{BLANK}} with other teachers.",
    "cn": "林老師今天下午有什麼事？ — 她和其他老師有一個會議。"
  },
  {
    "word": "party",
    "pos": "n.",
    "cn_def": "派對",
    "en_def": "a time when people come together to eat, play, and have fun",
    "sentence": "Q: What do you have on Saturday? — A: We have a birthday {{BLANK}} for Amy.",
    "cn": "你們星期六有什麼活動？ — 我們要為艾美辦一個生日派對。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試；採訪",
    "en_def": "a meeting where someone asks you questions, often for a job",
    "sentence": "Q: Where does your sister go today? — A: She goes to a big company. She has a job {{BLANK}}.",
    "cn": "你姊姊今天去哪裡？ — 她去一家大公司，她有一個工作面試。"
  },
  {
    "word": "report",
    "pos": "n.",
    "cn_def": "報告；報導",
    "en_def": "something you write or say to tell people about what you learned or saw",
    "sentence": "Q: What do you need to write for English class? — A: I need to write a book {{BLANK}}.",
    "cn": "英文課你需要寫什麼？ — 我需要寫一份讀書報告。"
  },
  {
    "word": "sale",
    "pos": "n.",
    "cn_def": "特價；出售",
    "en_def": "a time when a store sells things at lower prices",
    "sentence": "Q: Why do so many people go to the store today? — A: There is a big {{BLANK}}. Everything is cheap.",
    "cn": "今天為什麼這麼多人去那家店？ — 有大特價，所有東西都很便宜。"
  },
  {
    "word": "prize",
    "pos": "n.",
    "cn_def": "獎品；獎",
    "en_def": "something you get when you win",
    "sentence": "Q: What does Tom get in the race? — A: He gets first {{BLANK}}. It's a new bike.",
    "cn": "湯姆在賽跑中得到什麼？ — 他得到第一名的獎品，是一輛新腳踏車。"
  },
  {
    "word": "treat",
    "pos": "n.",
    "cn_def": "請客",
    "en_def": "something nice that someone buys for you",
    "sentence": "Q: Do we need to pay for dinner tonight? — A: No, we don't. It's Dad's {{BLANK}}.",
    "cn": "我們今晚晚餐需要付錢嗎？ — 不用，爸爸請客。"
  },
  {
    "word": "tip",
    "pos": "n.",
    "cn_def": "小費",
    "en_def": "extra money you give to a waiter or a driver to say thank you",
    "sentence": "Q: What does Dad give the waiter? — A: He gives him a {{BLANK}}.",
    "cn": "爸爸給服務生什麼？ — 他給他小費。"
  },
  {
    "word": "order",
    "pos": "n.",
    "cn_def": "點餐；訂單",
    "en_def": "the food or drinks you ask for in a restaurant",
    "sentence": "Q: What does the waiter say? — A: He says, \"May I take your {{BLANK}}?\"",
    "cn": "服務生說什麼？ — 他說：「我可以幫您點餐嗎？」"
  },
  {
    "word": "service",
    "pos": "n.",
    "cn_def": "服務",
    "en_def": "the help that workers in a store or restaurant give you",
    "sentence": "Q: Do you like this restaurant? — A: Yes, I do. The food is good, and the {{BLANK}} is great, too.",
    "cn": "你喜歡這家餐廳嗎？ — 喜歡，食物很好吃，服務也很棒。"
  },
  {
    "word": "eve (Eve)",
    "pos": "n.",
    "cn_def": "前夕",
    "en_def": "the day or night before a special day",
    "sentence": "Q: What do you do on Chinese New Year's {{BLANK}}? — A: We eat a big dinner with our family.",
    "cn": "你們除夕做什麼？ — 我們和家人吃一頓大餐。"
  },
  {
    "word": "age",
    "pos": "n.",
    "cn_def": "年齡",
    "en_def": "how old someone is",
    "sentence": "Q: What's your grandma's {{BLANK}}? — A: She is seventy years old.",
    "cn": "你奶奶幾歲？ — 她七十歲。"
  },
  {
    "word": "birthday",
    "pos": "n.",
    "cn_def": "生日",
    "en_def": "the day of the year when you were born",
    "sentence": "Q: When is your {{BLANK}}? — A: It's on May 5th.",
    "cn": "你的生日是什麼時候？ — 在五月五日。"
  },
  {
    "word": "dream",
    "pos": "n.",
    "cn_def": "夢想",
    "en_def": "something you hope for very much; what you see in your sleep",
    "sentence": "Q: What's your sister's {{BLANK}}? — A: She wants to be a singer.",
    "cn": "你姊姊的夢想是什麼？ — 她想當歌手。"
  },
  {
    "word": "interest (interests)",
    "pos": "n.",
    "cn_def": "興趣",
    "en_def": "something you like to do or learn about",
    "sentence": "Q: What {{BLANK}} does Ben have? — A: He likes reading and playing chess.",
    "cn": "班有什麼興趣？ — 他喜歡閱讀和下西洋棋。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "科目",
    "en_def": "something you study at school, like math or English",
    "sentence": "Q: What's your favorite {{BLANK}}? — A: It's math.",
    "cn": "你最喜歡的科目是什麼？ — 是數學。"
  },
  {
    "word": "topic",
    "pos": "n.",
    "cn_def": "主題；話題",
    "en_def": "what people talk or write about",
    "sentence": "Q: What's the {{BLANK}} of today's class? — A: It's animals.",
    "cn": "今天上課的主題是什麼？ — 是動物。"
  },
  {
    "word": "word",
    "pos": "n.",
    "cn_def": "字；單字",
    "en_def": "a group of letters that means something",
    "sentence": "Q: What does this {{BLANK}} mean? — A: It means \"happy.\"",
    "cn": "這個字是什麼意思？ — 它的意思是「快樂的」。"
  },
  {
    "word": "sentence",
    "pos": "n.",
    "cn_def": "句子",
    "en_def": "a group of words that starts with a big letter and ends with a period",
    "sentence": "Q: What's the first {{BLANK}} on page 10? — A: It's \"Tom has a cat.\"",
    "cn": "第十頁的第一個句子是什麼？ — 是「湯姆有一隻貓」。"
  },
  {
    "word": "way",
    "pos": "n.",
    "cn_def": "道路；方法",
    "en_def": "a road to a place; how you do something",
    "sentence": "Q: What's the {{BLANK}} to the station? — A: Go straight and turn left.",
    "cn": "去車站的路怎麼走？ — 直走然後左轉。"
  },
  {
    "word": "matter",
    "pos": "n.",
    "cn_def": "事情；問題",
    "en_def": "something that you need to think or talk about; a problem",
    "sentence": "Q: What's the {{BLANK}}? — A: I have a headache.",
    "cn": "怎麼了？ — 我頭痛。"
  },
  {
    "word": "kind",
    "pos": "n.",
    "cn_def": "種類",
    "en_def": "a group of things that are the same in some way; a type",
    "sentence": "Q: What {{BLANK}} of music do you like? — A: I like pop music.",
    "cn": "你喜歡哪一種音樂？ — 我喜歡流行音樂。"
  },
  {
    "word": "level",
    "pos": "n.",
    "cn_def": "程度；等級",
    "en_def": "how good you are at something; how high something is",
    "sentence": "Q: What's the {{BLANK}} of this book? — A: It's easy. Children can read it.",
    "cn": "這本書的程度如何？ — 很簡單，小孩子都能讀。"
  },
  {
    "word": "mind",
    "pos": "n.",
    "cn_def": "頭腦；心思",
    "en_def": "the part of you that thinks and remembers",
    "sentence": "Q: You look worried. What's on your {{BLANK}}? — A: I'm worried about the math test.",
    "cn": "你看起來很擔心，你在想什麼？ — 我在擔心數學考試。"
  },
  {
    "word": "rule",
    "pos": "n.",
    "cn_def": "規則",
    "en_def": "something that tells you what you must or must not do",
    "sentence": "Q: What's the first {{BLANK}} in your class? — A: Don't be late for class.",
    "cn": "你們班的第一條規則是什麼？ — 上課不要遲到。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "動作；行動",
    "en_def": "something that you do; moving and doing things",
    "sentence": "Q: Does your brother like {{BLANK}} movies? — A: Yes, he does. He watches them every weekend.",
    "cn": "你哥哥喜歡動作片嗎？ — 喜歡，他每個週末都看。"
  },
  {
    "word": "fun",
    "pos": "n.",
    "cn_def": "樂趣；好玩的事",
    "en_def": "something that makes you happy; a good time",
    "sentence": "Q: Do you and your friends have a good time at the beach? — A: Yes, we do. We have a lot of {{BLANK}}.",
    "cn": "你和朋友們在海灘玩得開心嗎？ — 開心，我們玩得很愉快。"
  },
  {
    "word": "joke (jokes)",
    "pos": "n.",
    "cn_def": "笑話",
    "en_def": "a short, funny story that makes people laugh",
    "sentence": "Q: Does Uncle Jack like to make people laugh? — A: Yes, he does. He tells funny {{BLANK}}.",
    "cn": "傑克叔叔喜歡逗人笑嗎？ — 喜歡，他會講好笑的笑話。"
  },
  {
    "word": "story (stories)",
    "pos": "n.",
    "cn_def": "故事",
    "en_def": "words that tell about people and things that happened, real or not real",
    "sentence": "Q: Do the children like books? — A: Yes, they do. They love {{BLANK}} about animals.",
    "cn": "孩子們喜歡書嗎？ — 喜歡，他們很愛動物的故事。"
  },
  {
    "word": "program",
    "pos": "n.",
    "cn_def": "節目",
    "en_def": "a show on TV or the radio",
    "sentence": "Q: What TV {{BLANK}} does your dad like? — A: He likes sports shows.",
    "cn": "你爸爸喜歡什麼電視節目？ — 他喜歡運動節目。"
  },
  {
    "word": "trick (tricks)",
    "pos": "n.",
    "cn_def": "惡作劇；把戲",
    "en_def": "something you do to fool or surprise someone for fun",
    "sentence": "Q: Do your classmates like April Fools' Day? — A: Yes, they do. They play {{BLANK}} on their friends.",
    "cn": "你的同學們喜歡愚人節嗎？ — 喜歡，他們會對朋友惡作劇。"
  },
  {
    "word": "smile",
    "pos": "n.",
    "cn_def": "微笑",
    "en_def": "the happy look on your face when the ends of your mouth go up",
    "sentence": "Q: Do the students like their new teacher? — A: Yes, they do. She has a sweet {{BLANK}}.",
    "cn": "學生們喜歡他們的新老師嗎？ — 喜歡，她有甜美的笑容。"
  },
  {
    "word": "joy",
    "pos": "n.",
    "cn_def": "歡樂；喜悅",
    "en_def": "a feeling of being very happy",
    "sentence": "Q: How does Grandma feel when she sees the baby? — A: She is full of {{BLANK}}.",
    "cn": "奶奶看到寶寶時感覺如何？ — 她充滿了喜悅。"
  },
  {
    "word": "pleasure",
    "pos": "n.",
    "cn_def": "榮幸；愉快",
    "en_def": "a feeling of being happy to do something",
    "sentence": "Q: Thank you for helping me. — A: It's my {{BLANK}}.",
    "cn": "謝謝你幫我。 — 這是我的榮幸。（不客氣）"
  },
  {
    "word": "cheer (cheers)",
    "pos": "n.",
    "cn_def": "歡呼；喝采",
    "en_def": "a loud, happy shout for a team or a player",
    "sentence": "Q: What do the fans do at the game? — A: They give loud {{BLANK}} for the team.",
    "cn": "球迷在比賽時做什麼？ — 他們為球隊大聲歡呼。"
  },
  {
    "word": "fact",
    "pos": "n.",
    "cn_def": "事實",
    "en_def": "something that is true",
    "sentence": "Q: Does Tom know a lot about koalas? — A: Yes, he does. He knows a fun {{BLANK}}: koalas sleep 20 hours a day.",
    "cn": "湯姆對無尾熊很了解嗎？ — 是的，他知道一個有趣的事實：無尾熊一天睡二十個小時。"
  }
];

const MCQS = [
  {
    "q": "Mr. Smith is an ______. He was born in New York, but he lives in Taipei now.",
    "options": [
      "American",
      "age",
      "idea",
      "error"
    ],
    "answer": 0,
    "cn": "布朗先生是誰？ — 他是我們的英文老師，他是來自紐約的美國人。",
    "vocabIndex": 0
  },
  {
    "q": "Many ______ visit Taiwan every year. They come from Japan, Korea, America, and other countries.",
    "options": [
      "members",
      "foreigners",
      "leaders",
      "players"
    ],
    "answer": 1,
    "cn": "夜市裡那些人是誰？ — 他們是外國人，來自日本和韓國。",
    "vocabIndex": 1
  },
  {
    "q": "Amy is the ______ of our group. She tells us what to do and helps us work together.",
    "options": [
      "foreigner",
      "prize",
      "leader",
      "habit"
    ],
    "answer": 2,
    "cn": "那個高高的男孩是誰？ — 他是湯姆，我們的隊長，大家都聽他的。",
    "vocabIndex": 2
  },
  {
    "q": "Our basketball club has twenty ______. We all meet and practice every Friday.",
    "options": [
      "prizes",
      "habits",
      "rules",
      "members"
    ],
    "answer": 3,
    "cn": "艾美有參加音樂社嗎？ — 有，她是社團的成員。",
    "vocabIndex": 3
  },
  {
    "q": "There are five ______ on a basketball team. They all run fast and jump high.",
    "options": [
      "players",
      "foreigners",
      "prizes",
      "topics"
    ],
    "answer": 0,
    "cn": "公園裡那些男孩是誰？ — 他們是籃球員，他們每個星期日都打球。",
    "vocabIndex": 4
  },
  {
    "q": "My brother plays the drums in a rock ______. They have a show this Saturday night.",
    "options": [
      "prize",
      "band",
      "habit",
      "reason"
    ],
    "answer": 1,
    "cn": "你哥哥放學後做什麼？ — 他在一個樂團裡打鼓。",
    "vocabIndex": 5
  },
  {
    "q": "I joined the school chess ______. We meet and play every Wednesday after class.",
    "options": [
      "prize",
      "reason",
      "club",
      "age"
    ],
    "answer": 2,
    "cn": "你參加什麼社團？ — 我參加英文社。",
    "vocabIndex": 6
  },
  {
    "q": "The teacher put us into ______ of four. Each one has to make a poster together.",
    "options": [
      "prizes",
      "habits",
      "voices",
      "group"
    ],
    "answer": 3,
    "cn": "你和誰一起讀書？ — 我和朋友們一起讀書，我們有一個讀書小組。",
    "vocabIndex": 7
  },
  {
    "q": "Many people go to church on Sunday to pray to ______. They believe He made the world.",
    "options": [
      "Eve",
      "God",
      "Age",
      "Fun"
    ],
    "answer": 1,
    "cn": "人們在教堂裡向誰禱告？ — 他們向上帝禱告。",
    "vocabIndex": 8
  },
  {
    "q": "This is your last ______ to pass the test. If you fail again, you can't try another time.",
    "options": [
      "habit",
      "voice",
      "chance",
      "age"
    ],
    "answer": 2,
    "cn": "麗莎有機會去日本嗎？ — 有，她有機會去那裡拜訪她的阿姨。",
    "vocabIndex": 9
  },
  {
    "q": "You have two ______: you can stay home or come with us. Which one do you want?",
    "options": [
      "voices",
      "prizes",
      "ages",
      "choices"
    ],
    "answer": 3,
    "cn": "我們午餐吃什麼？ — 我們有兩個選擇：麵或飯。",
    "vocabIndex": 10
  },
  {
    "q": "I have a good ______! Let's have a picnic by the river this Sunday.",
    "options": [
      "idea",
      "habit",
      "voice",
      "age"
    ],
    "answer": 0,
    "cn": "母親節我們要怎麼讓媽媽開心？ — 我有一個好主意，我們來為她做一個蛋糕吧。",
    "vocabIndex": 11
  },
  {
    "q": "Ben has a bad ______. He bites his nails when he is nervous.",
    "options": [
      "prize",
      "chance",
      "voice",
      "habit"
    ],
    "answer": 3,
    "cn": "你爸爸每天都早起嗎？ — 是的，這是他的好習慣。",
    "vocabIndex": 12
  },
  {
    "q": "Mr. Lin has ten years of ______ as a teacher, so he knows how to help students learn.",
    "options": [
      "trouble",
      "fun",
      "experience",
      "sight"
    ],
    "answer": 2,
    "cn": "你媽媽很會煮飯嗎？ — 是的，她有很多煮飯的經驗。",
    "vocabIndex": 13
  },
  {
    "q": "Ben is in ______ again. He broke the classroom window with a ball.",
    "options": [
      "fun",
      "trouble",
      "age",
      "sight"
    ],
    "answer": 1,
    "cn": "你的功課需要幫忙嗎？ — 需要，我數學題目有困難。",
    "vocabIndex": 14
  },
  {
    "q": "I made three ______ on the spelling test. I wrote the wrong letters in those words.",
    "options": [
      "mistakes",
      "prizes",
      "parties",
      "voices"
    ],
    "answer": 0,
    "cn": "班考試考一百分嗎？ — 沒有，他犯了兩個錯誤。",
    "vocabIndex": 15
  },
  {
    "q": "The computer says there is an ______. Something is wrong, and I can't open the file.",
    "options": [
      "age",
      "idea",
      "excuse",
      "error"
    ],
    "answer": 3,
    "cn": "你的答案對嗎？ — 不對，裡面有一個錯誤。",
    "vocabIndex": 16
  },
  {
    "q": "\"The bus was late\" is his ______ every time. He never says the real reason.",
    "options": [
      "prize",
      "voice",
      "excuse",
      "age"
    ],
    "answer": 2,
    "cn": "湯姆為什麼又遲到了？ — 他說他太晚起床，那不是個好藉口。",
    "vocabIndex": 17
  },
  {
    "q": "What is the ______ for your being late? Did you miss the bus?",
    "options": [
      "prize",
      "reason",
      "voice",
      "age"
    ],
    "answer": 1,
    "cn": "你為什麼每天讀英文？ — 我想和其他國家的人說話，那就是我的理由。",
    "vocabIndex": 18
  },
  {
    "q": "Grandpa's ______ is not good now. He can't read the newspaper without his glasses.",
    "options": [
      "sight",
      "voice",
      "age",
      "dream"
    ],
    "answer": 0,
    "cn": "你爺爺不戴眼鏡看報紙嗎？ — 不，他視力不好。",
    "vocabIndex": 19
  },
  {
    "q": "The singer has a beautiful ______. Everyone loves to hear her sing.",
    "options": [
      "sight",
      "age",
      "voice",
      "tip"
    ],
    "answer": 2,
    "cn": "艾美唱歌好聽嗎？ — 好聽，她有美妙的嗓音。",
    "vocabIndex": 20
  },
  {
    "q": "The teachers have a ______ at four today. They will sit together and talk about the school trip.",
    "options": [
      "prize",
      "tip",
      "smile",
      "meeting"
    ],
    "answer": 3,
    "cn": "林老師今天下午有什麼事？ — 她和其他老師有一個會議。",
    "vocabIndex": 21
  },
  {
    "q": "We are having a birthday ______ for Amy on Saturday. There will be cake, games, and music.",
    "options": [
      "party",
      "tip",
      "sight",
      "reason"
    ],
    "answer": 0,
    "cn": "你們星期六有什麼活動？ — 我們要為艾美辦一個生日派對。",
    "vocabIndex": 22
  },
  {
    "q": "I have a job ______ at the bank tomorrow. The boss will ask me a lot of questions.",
    "options": [
      "prize",
      "interview",
      "smile",
      "joke"
    ],
    "answer": 1,
    "cn": "你姊姊今天去哪裡？ — 她去一家大公司，她有一個工作面試。",
    "vocabIndex": 23
  },
  {
    "q": "We have to write a ______ about animals for science class. Mine is about pandas, and it is three pages long.",
    "options": [
      "tip",
      "smile",
      "report",
      "prize"
    ],
    "answer": 2,
    "cn": "英文課你需要寫什麼？ — 我需要寫一份讀書報告。",
    "vocabIndex": 24
  },
  {
    "q": "The department store is having a big ______ this week. Everything is thirty percent off.",
    "options": [
      "sale",
      "tip",
      "joke",
      "dream"
    ],
    "answer": 0,
    "cn": "今天為什麼這麼多人去那家店？ — 有大特價，所有東西都很便宜。",
    "vocabIndex": 25
  },
  {
    "q": "Lisa won first ______ in the singing contest. She got a new bike.",
    "options": [
      "tip",
      "prize",
      "age",
      "habit"
    ],
    "answer": 1,
    "cn": "湯姆在賽跑中得到什麼？ — 他得到第一名的獎品，是一輛新腳踏車。",
    "vocabIndex": 26
  },
  {
    "q": "Put your wallet away. Dinner is my ______ tonight, so you don't have to pay.",
    "options": [
      "tip",
      "rule",
      "age",
      "treat"
    ],
    "answer": 3,
    "cn": "我們今晚晚餐需要付錢嗎？ — 不用，爸爸請客。",
    "vocabIndex": 27
  },
  {
    "q": "The waiter was very nice, so my dad left him a one-hundred-dollar ______ on the table.",
    "options": [
      "rule",
      "prize",
      "tip",
      "joke"
    ],
    "answer": 2,
    "cn": "爸爸給服務生什麼？ — 他給他小費。",
    "vocabIndex": 28
  },
  {
    "q": "The waiter wrote down our ______: two steaks and one salad.",
    "options": [
      "order",
      "tip",
      "age",
      "rule"
    ],
    "answer": 0,
    "cn": "服務生說什麼？ — 他說：「我可以幫您點餐嗎？」",
    "vocabIndex": 29
  },
  {
    "q": "The food is good at this restaurant, but the ______ is slow. The waiters take too long.",
    "options": [
      "age",
      "service",
      "sight",
      "dream"
    ],
    "answer": 1,
    "cn": "你喜歡這家餐廳嗎？ — 喜歡，食物很好吃，服務也很棒。",
    "vocabIndex": 30
  },
  {
    "q": "On Chinese New Year's ______, the whole family eats a big dinner together and stays up late.",
    "options": [
      "Age",
      "Fun",
      "Tip",
      "Eve"
    ],
    "answer": 3,
    "cn": "你們除夕做什麼？ — 我們和家人吃一頓大餐。",
    "vocabIndex": 31
  },
  {
    "q": "Children can start school at the ______ of six. My brother is five, so he has to wait a year.",
    "options": [
      "age",
      "tip",
      "rule",
      "joke"
    ],
    "answer": 0,
    "cn": "你奶奶幾歲？ — 她七十歲。",
    "vocabIndex": 32
  },
  {
    "q": "Today is my ______. I am thirteen years old now, and my friends are giving me a party.",
    "options": [
      "habit",
      "voice",
      "birthday",
      "rule"
    ],
    "answer": 2,
    "cn": "你的生日是什麼時候？ — 在五月五日。",
    "vocabIndex": 33
  },
  {
    "q": "My ______ is to be a doctor. I hope it will come true one day.",
    "options": [
      "age",
      "tip",
      "sight",
      "dream"
    ],
    "answer": 3,
    "cn": "你姊姊的夢想是什麼？ — 她想當歌手。",
    "vocabIndex": 34
  },
  {
    "q": "My two main ______ are music and sports. I spend all my free time on them.",
    "options": [
      "ages",
      "interests",
      "tips",
      "voices"
    ],
    "answer": 1,
    "cn": "班有什麼興趣？ — 他喜歡閱讀和下西洋棋。",
    "vocabIndex": 35
  },
  {
    "q": "Math is my favorite ______ at school. I also like science and English.",
    "options": [
      "sentence",
      "joke",
      "subject",
      "tip"
    ],
    "answer": 2,
    "cn": "你最喜歡的科目是什麼？ — 是數學。",
    "vocabIndex": 36
  },
  {
    "q": "The ______ of today's talk is \"How to Stay Healthy.\" The speaker will talk about food and exercise.",
    "options": [
      "tip",
      "smile",
      "age",
      "topic"
    ],
    "answer": 3,
    "cn": "今天上課的主題是什麼？ — 是動物。",
    "vocabIndex": 37
  },
  {
    "q": "What does this ______ mean? I can't find it in my dictionary.",
    "options": [
      "word",
      "smile",
      "tip",
      "age"
    ],
    "answer": 0,
    "cn": "這個字是什麼意思？ — 它的意思是「快樂的」。",
    "vocabIndex": 38
  },
  {
    "q": "Please make a ______ with the word \"happy,\" like \"I am happy today.\"",
    "options": [
      "smile",
      "sentence",
      "tip",
      "level"
    ],
    "answer": 1,
    "cn": "第十頁的第一個句子是什麼？ — 是「湯姆有一隻貓」。",
    "vocabIndex": 39
  },
  {
    "q": "Can you tell me the ______ to the station? I think I am lost.",
    "options": [
      "rule",
      "joke",
      "fact",
      "way"
    ],
    "answer": 3,
    "cn": "去車站的路怎麼走？ — 直走然後左轉。",
    "vocabIndex": 40
  },
  {
    "q": "What's the ______ with you? You look sad today.",
    "options": [
      "rule",
      "matter",
      "joke",
      "level"
    ],
    "answer": 1,
    "cn": "怎麼了？ — 我頭痛。",
    "vocabIndex": 41
  },
  {
    "q": "What ______ of music do you like, pop or rock?",
    "options": [
      "kind",
      "level",
      "rule",
      "fact"
    ],
    "answer": 0,
    "cn": "你喜歡哪一種音樂？ — 我喜歡流行音樂。",
    "vocabIndex": 42
  },
  {
    "q": "This book is too hard for me. I need one at an easier ______.",
    "options": [
      "joke",
      "smile",
      "level",
      "fact"
    ],
    "answer": 2,
    "cn": "這本書的程度如何？ — 很簡單，小孩子都能讀。",
    "vocabIndex": 43
  },
  {
    "q": "I can't make up my ______. Should I buy the red one or the blue one?",
    "options": [
      "mind",
      "rule",
      "joke",
      "fact"
    ],
    "answer": 0,
    "cn": "你看起來很擔心，你在想什麼？ — 我在擔心數學考試。",
    "vocabIndex": 44
  },
  {
    "q": "We must follow the school ______. For example, we can't use cellphones in class.",
    "options": [
      "jokes",
      "smiles",
      "rules",
      "facts"
    ],
    "answer": 2,
    "cn": "你們班的第一條規則是什麼？ — 上課不要遲到。",
    "vocabIndex": 45
  },
  {
    "q": "The firefighters took ______ right away. They put out the fire in ten minutes.",
    "options": [
      "joy",
      "fun",
      "fact",
      "action"
    ],
    "answer": 3,
    "cn": "你哥哥喜歡動作片嗎？ — 喜歡，他每個週末都看。",
    "vocabIndex": 46
  },
  {
    "q": "The party was a lot of ______. We played games, sang songs, and laughed all night.",
    "options": [
      "fact",
      "fun",
      "rule",
      "level"
    ],
    "answer": 1,
    "cn": "你和朋友們在海灘玩得開心嗎？ — 開心，我們玩得很愉快。",
    "vocabIndex": 47
  },
  {
    "q": "Uncle Ben tells funny ______. We always laugh when he comes to dinner.",
    "options": [
      "jokes",
      "rules",
      "facts",
      "levels"
    ],
    "answer": 0,
    "cn": "傑克叔叔喜歡逗人笑嗎？ — 喜歡，他會講好笑的笑話。",
    "vocabIndex": 48
  },
  {
    "q": "Grandma tells us ______ about her childhood before bed. My favorite one is about her dog.",
    "options": [
      "rules",
      "levels",
      "cheers",
      "stories"
    ],
    "answer": 3,
    "cn": "孩子們喜歡書嗎？ — 喜歡，他們很愛動物的故事。",
    "vocabIndex": 49
  },
  {
    "q": "My favorite TV ______ is on at eight every Friday. It is a singing show.",
    "options": [
      "joke",
      "program",
      "smile",
      "rule"
    ],
    "answer": 1,
    "cn": "你爸爸喜歡什麼電視節目？ — 他喜歡運動節目。",
    "vocabIndex": 50
  },
  {
    "q": "On April Fools' Day, students play ______ on their friends and teachers.",
    "options": [
      "rules",
      "facts",
      "tricks",
      "smiles"
    ],
    "answer": 2,
    "cn": "你的同學們喜歡愚人節嗎？ — 喜歡，他們會對朋友惡作劇。",
    "vocabIndex": 51
  },
  {
    "q": "The baby has a sweet ______ on her face. She looks so happy.",
    "options": [
      "joke",
      "rule",
      "fact",
      "smile"
    ],
    "answer": 3,
    "cn": "學生們喜歡他們的新老師嗎？ — 喜歡，她有甜美的笑容。",
    "vocabIndex": 52
  },
  {
    "q": "The children shouted with ______ when they saw the snow. They were so happy.",
    "options": [
      "rule",
      "joy",
      "fact",
      "level"
    ],
    "answer": 1,
    "cn": "奶奶看到寶寶時感覺如何？ — 她充滿了喜悅。",
    "vocabIndex": 53
  },
  {
    "q": "\"Thank you for your help.\" \"It was my ______. I was happy to do it.\"",
    "options": [
      "pleasure",
      "rule",
      "joke",
      "level"
    ],
    "answer": 0,
    "cn": "謝謝你幫我。 — 這是我的榮幸。（不客氣）",
    "vocabIndex": 54
  },
  {
    "q": "The fans gave three loud ______ for the winning team.",
    "options": [
      "rules",
      "facts",
      "cheers",
      "jokes"
    ],
    "answer": 2,
    "cn": "球迷在比賽時做什麼？ — 他們為球隊大聲歡呼。",
    "vocabIndex": 55
  },
  {
    "q": "The earth goes around the sun. This is a ______, not just an idea.",
    "options": [
      "fact",
      "joke",
      "rule",
      "smile"
    ],
    "answer": 0,
    "cn": "湯姆對無尾熊很了解嗎？ — 是的，他知道一個有趣的事實：無尾熊一天睡二十個小時。",
    "vocabIndex": 56
  }
];

const LOOKUP = {
  "american": {
    "pos": "n.",
    "en_def": "a person from the United States",
    "cn_def": "美國人"
  },
  "age": {
    "pos": "n.",
    "en_def": "how old someone is",
    "cn_def": "年齡"
  },
  "idea": {
    "pos": "n.",
    "en_def": "a thought or a plan in your mind",
    "cn_def": "主意；想法"
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake",
    "cn_def": "錯誤"
  },
  "members": {
    "pos": "n.",
    "en_def": "one of the people in a group or club",
    "cn_def": "成員；會員"
  },
  "foreigners": {
    "pos": "n.",
    "en_def": "a person from another country",
    "cn_def": "外國人"
  },
  "leaders": {
    "pos": "n.",
    "en_def": "the person who a group follows",
    "cn_def": "領導者；隊長"
  },
  "players": {
    "pos": "n.",
    "en_def": "a person who plays a game or a sport",
    "cn_def": "球員；選手"
  },
  "foreigner": {
    "pos": "n.",
    "en_def": "a person from another country",
    "cn_def": "外國人"
  },
  "prize": {
    "pos": "n.",
    "en_def": "something you get when you win",
    "cn_def": "獎品；獎"
  },
  "leader": {
    "pos": "n.",
    "en_def": "the person who a group follows",
    "cn_def": "領導者；隊長"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something that you do often, without thinking",
    "cn_def": "習慣"
  },
  "prizes": {
    "pos": "n.",
    "en_def": "something you get when you win",
    "cn_def": "獎品；獎"
  },
  "habits": {
    "pos": "n.",
    "en_def": "something that you do often, without thinking",
    "cn_def": "習慣"
  },
  "rules": {
    "pos": "n.",
    "en_def": "something that tells you what you must or must not do",
    "cn_def": "規則"
  },
  "topics": {
    "pos": "n.",
    "en_def": "what people talk or write about",
    "cn_def": "主題；話題"
  },
  "band": {
    "pos": "n.",
    "en_def": "a group of people who play music together",
    "cn_def": "樂團"
  },
  "reason": {
    "pos": "n.",
    "en_def": "why something happens or why someone does something",
    "cn_def": "理由；原因"
  },
  "club": {
    "pos": "n.",
    "en_def": "a group of people who meet to do something they all like",
    "cn_def": "社團"
  },
  "voices": {
    "pos": "n.",
    "en_def": "the sound you make when you speak or sing",
    "cn_def": "聲音；嗓音"
  },
  "group": {
    "pos": "n.",
    "en_def": "a number of people or things that are together",
    "cn_def": "團體；小組"
  },
  "eve": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "前夕"
  },
  "god": {
    "pos": "n.",
    "en_def": "the one who some people believe made the world and pray to",
    "cn_def": "上帝；神"
  },
  "fun": {
    "pos": "n.",
    "en_def": "something that makes you happy; a good time",
    "cn_def": "樂趣；好玩的事"
  },
  "voice": {
    "pos": "n.",
    "en_def": "the sound you make when you speak or sing",
    "cn_def": "聲音；嗓音"
  },
  "chance": {
    "pos": "n.",
    "en_def": "a time when you can do something",
    "cn_def": "機會"
  },
  "ages": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "年齡"
  },
  "choices": {
    "pos": "n.",
    "en_def": "one of the things that you can choose",
    "cn_def": "選擇"
  },
  "trouble": {
    "pos": "n.",
    "en_def": "problems or difficulties",
    "cn_def": "麻煩；困難"
  },
  "experience": {
    "pos": "n.",
    "en_def": "something that happened to you; what you learn from doing things",
    "cn_def": "經驗"
  },
  "sight": {
    "pos": "n.",
    "en_def": "the power to see",
    "cn_def": "視力"
  },
  "mistakes": {
    "pos": "n.",
    "en_def": "something you do or write that is wrong",
    "cn_def": "錯誤"
  },
  "parties": {
    "pos": "n.",
    "en_def": "a time when people come together to eat, play, and have fun",
    "cn_def": "派對"
  },
  "excuse": {
    "pos": "n.",
    "en_def": "a reason you give to explain why you did something wrong",
    "cn_def": "藉口"
  },
  "dream": {
    "pos": "n.",
    "en_def": "something you hope for very much; what you see in your sleep",
    "cn_def": "夢想"
  },
  "tip": {
    "pos": "n.",
    "en_def": "extra money you give to a waiter or a driver to say thank you",
    "cn_def": "小費"
  },
  "smile": {
    "pos": "n.",
    "en_def": "the happy look on your face when the ends of your mouth go up",
    "cn_def": "微笑"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "a time when people come together to talk about something",
    "cn_def": "會議"
  },
  "party": {
    "pos": "n.",
    "en_def": "a time when people come together to eat, play, and have fun",
    "cn_def": "派對"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a meeting where someone asks you questions, often for a job",
    "cn_def": "面試；採訪"
  },
  "joke": {
    "pos": "n.",
    "en_def": "a short, funny story that makes people laugh",
    "cn_def": "笑話"
  },
  "report": {
    "pos": "n.",
    "en_def": "something you write or say to tell people about what you learned or saw",
    "cn_def": "報告；報導"
  },
  "sale": {
    "pos": "n.",
    "en_def": "a time when a store sells things at lower prices",
    "cn_def": "特價；出售"
  },
  "rule": {
    "pos": "n.",
    "en_def": "something that tells you what you must or must not do",
    "cn_def": "規則"
  },
  "treat": {
    "pos": "n.",
    "en_def": "something nice that someone buys for you",
    "cn_def": "請客"
  },
  "order": {
    "pos": "v.",
    "en_def": "to ask for food or drinks in a restaurant",
    "cn_def": "點餐"
  },
  "service": {
    "pos": "n.",
    "en_def": "the help that workers in a store or restaurant give you",
    "cn_def": "服務"
  },
  "birthday": {
    "pos": "n.",
    "en_def": "the day of the year when you were born",
    "cn_def": "生日"
  },
  "interests": {
    "pos": "n.",
    "en_def": "something you like to do or learn about",
    "cn_def": "興趣"
  },
  "tips": {
    "pos": "n.",
    "en_def": "extra money you give to a waiter or a driver to say thank you",
    "cn_def": "小費"
  },
  "sentence": {
    "pos": "n.",
    "en_def": "a group of words that starts with a big letter and ends with a period",
    "cn_def": "句子"
  },
  "subject": {
    "pos": "n.",
    "en_def": "something you study at school, like math or English",
    "cn_def": "科目"
  },
  "topic": {
    "pos": "n.",
    "en_def": "what people talk or write about",
    "cn_def": "主題；話題"
  },
  "word": {
    "pos": "n.",
    "en_def": "a group of letters that means something",
    "cn_def": "字；單字"
  },
  "level": {
    "pos": "n.",
    "en_def": "how good you are at something; how high something is",
    "cn_def": "程度；等級"
  },
  "fact": {
    "pos": "n.",
    "en_def": "something that is true",
    "cn_def": "事實"
  },
  "way": {
    "pos": "n.",
    "en_def": "a road to a place; how you do something",
    "cn_def": "道路；方法"
  },
  "matter": {
    "pos": "n.",
    "en_def": "something that you need to think or talk about; a problem",
    "cn_def": "事情；問題"
  },
  "kind": {
    "pos": "adj.",
    "en_def": "nice and helpful to other people",
    "cn_def": "親切的"
  },
  "mind": {
    "pos": "n.",
    "en_def": "the part of you that thinks and remembers",
    "cn_def": "頭腦；心思"
  },
  "jokes": {
    "pos": "n.",
    "en_def": "a short, funny story that makes people laugh",
    "cn_def": "笑話"
  },
  "smiles": {
    "pos": "n.",
    "en_def": "the happy look on your face when the ends of your mouth go up",
    "cn_def": "微笑"
  },
  "facts": {
    "pos": "n.",
    "en_def": "something that is true",
    "cn_def": "事實"
  },
  "joy": {
    "pos": "n.",
    "en_def": "a feeling of being very happy",
    "cn_def": "歡樂；喜悅"
  },
  "action": {
    "pos": "n.",
    "en_def": "something that you do; moving and doing things",
    "cn_def": "動作；行動"
  },
  "levels": {
    "pos": "n.",
    "en_def": "how good you are at something; how high something is",
    "cn_def": "程度；等級"
  },
  "cheers": {
    "pos": "n.",
    "en_def": "a loud, happy shout for a team or a player",
    "cn_def": "歡呼；喝采"
  },
  "stories": {
    "pos": "n.",
    "en_def": "words that tell about people and things that happened, real or not real",
    "cn_def": "故事"
  },
  "program": {
    "pos": "n.",
    "en_def": "a show on TV or the radio",
    "cn_def": "節目"
  },
  "tricks": {
    "pos": "n.",
    "en_def": "something you do to fool or surprise someone for fun",
    "cn_def": "惡作劇；把戲"
  },
  "pleasure": {
    "pos": "n.",
    "en_def": "a feeling of being happy to do something",
    "cn_def": "榮幸；愉快"
  }
};

const EXTRA_GLOSSES = {};
