// Unit 22 Quiz Data: Occupations 職業（第23區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U22 - Occupations",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "doctor (Dr.)",
    "pos": "n.",
    "cn_def": "醫生",
    "en_def": "a person whose job is to help sick people get well",
    "sentence": "Q: What does your mother do? — A: She is a {{BLANK}}. She works in a hospital.",
    "cn": "你媽媽是做什麼的？ — 她是醫生，她在醫院工作。",
    "alts": [
      "Dr."
    ]
  },
  {
    "word": "nurse (nurses)",
    "pos": "n.",
    "cn_def": "護士",
    "en_def": "a person who takes care of sick people in a hospital",
    "sentence": "Q: What do Amy's aunts do? — A: They are {{BLANK}}. They help sick people.",
    "cn": "艾美的阿姨們是做什麼的？ — 她們是護士，她們幫助生病的人。"
  },
  {
    "word": "dentist",
    "pos": "n.",
    "cn_def": "牙醫",
    "en_def": "a doctor who takes care of people's teeth",
    "sentence": "Q: What does Mr. Lin do? — A: He is a {{BLANK}}. He checks people's teeth.",
    "cn": "林先生是做什麼的？ — 他是牙醫，他檢查人們的牙齒。"
  },
  {
    "word": "housewife",
    "pos": "n.",
    "cn_def": "家庭主婦",
    "en_def": "a woman who stays home and takes care of her family and house",
    "sentence": "Q: What does Ben's mom do? — A: She is a {{BLANK}}. She cooks and cleans at home.",
    "cn": "班的媽媽是做什麼的？ — 她是家庭主婦，她在家煮飯、打掃。"
  },
  {
    "word": "job",
    "pos": "n.",
    "cn_def": "工作",
    "en_def": "the work that you do to get money",
    "sentence": "Q: What do your parents do? — A: My dad is a teacher, and my mom has a new {{BLANK}} at a bank.",
    "cn": "你爸媽是做什麼的？ — 我爸爸是老師，我媽媽在銀行有一份新工作。"
  },
  {
    "word": "business",
    "pos": "n.",
    "cn_def": "生意",
    "en_def": "buying and selling things to make money",
    "sentence": "Q: What do Tom's parents do? — A: They have a small {{BLANK}}. They sell shoes.",
    "cn": "湯姆的爸媽是做什麼的？ — 他們做小生意，他們賣鞋子。"
  },
  {
    "word": "businessman",
    "pos": "n.",
    "cn_def": "商人",
    "en_def": "a man who works in a company and buys and sells things",
    "sentence": "Q: What does Mr. Wang do? — A: He is a {{BLANK}}. He often travels to other countries.",
    "cn": "王先生是做什麼的？ — 他是商人，他常常去其他國家。"
  },
  {
    "word": "boss",
    "pos": "n.",
    "cn_def": "老闆",
    "en_def": "the person who tells workers what to do",
    "sentence": "Q: What does Ms. Chen do at the store? — A: She is the {{BLANK}}. She tells everyone what to do.",
    "cn": "陳女士在店裡做什麼？ — 她是老闆，她告訴每個人要做什麼。"
  },
  {
    "word": "actor",
    "pos": "n.",
    "cn_def": "男演員",
    "en_def": "a man who plays a part in a movie or a play",
    "sentence": "Q: What does Tom want to be? — A: He wants to be an {{BLANK}}. He wants to be in movies.",
    "cn": "湯姆想當什麼？ — 他想當男演員，他想演電影。"
  },
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "a woman who plays a part in a movie or a play",
    "sentence": "Q: What do you want to be, Amy? — A: I want to be an {{BLANK}}. I love to act on TV.",
    "cn": "艾美，你想當什麼？ — 我想當女演員，我喜歡在電視上演戲。"
  },
  {
    "word": "singer (singers)",
    "pos": "n.",
    "cn_def": "歌手",
    "en_def": "a person who sings songs",
    "sentence": "Q: What do your sisters want to be? — A: They want to be {{BLANK}}. They sing very well.",
    "cn": "你的姊妹們想當什麼？ — 她們想當歌手，她們唱歌很好聽。"
  },
  {
    "word": "writer",
    "pos": "n.",
    "cn_def": "作家",
    "en_def": "a person who writes books or stories",
    "sentence": "Q: What does Kevin want to be? — A: He wants to be a {{BLANK}}. He likes to write stories.",
    "cn": "凱文想當什麼？ — 他想當作家，他喜歡寫故事。"
  },
  {
    "word": "reporter",
    "pos": "n.",
    "cn_def": "記者",
    "en_def": "a person who finds and tells the news",
    "sentence": "Q: What do you want to be in the future? — A: I want to be a {{BLANK}}. I want to report the news on TV.",
    "cn": "你將來想當什麼？ — 我想當記者，我想在電視上報新聞。"
  },
  {
    "word": "engineer",
    "pos": "n.",
    "cn_def": "工程師",
    "en_def": "a person who plans and builds machines, roads, or bridges",
    "sentence": "Q: What does your brother want to be? — A: He wants to be an {{BLANK}}. He likes computers and machines.",
    "cn": "你哥哥想當什麼？ — 他想當工程師，他喜歡電腦和機器。"
  },
  {
    "word": "lawyer (lawyers)",
    "pos": "n.",
    "cn_def": "律師",
    "en_def": "a person who knows the law and helps people with it",
    "sentence": "Q: What do Jenny and Lisa want to be? — A: They want to be {{BLANK}} like their father.",
    "cn": "珍妮和麗莎想當什麼？ — 她們想像她們的爸爸一樣當律師。"
  },
  {
    "word": "soldier",
    "pos": "n.",
    "cn_def": "軍人",
    "en_def": "a person who is in an army",
    "sentence": "Q: What does Peter want to be? — A: He wants to be a {{BLANK}}. He wants to keep our country safe.",
    "cn": "彼得想當什麼？ — 他想當軍人，他想保衛我們的國家安全。"
  },
  {
    "word": "cowboy (cowboys)",
    "pos": "n.",
    "cn_def": "牛仔",
    "en_def": "a man who rides a horse and takes care of cows",
    "sentence": "Q: What do the boys want to be at the Halloween party? — A: They want to be {{BLANK}}. They wear big hats.",
    "cn": "男孩們在萬聖節派對上想扮成什麼？ — 他們想扮成牛仔，他們戴大帽子。"
  },
  {
    "word": "work (works)",
    "pos": "v.",
    "cn_def": "工作",
    "en_def": "to do a job",
    "sentence": "Q: Where does your father work? — A: He {{BLANK}} at a bank.",
    "cn": "你爸爸在哪裡工作？ — 他在銀行工作。"
  },
  {
    "word": "farmer (farmers)",
    "pos": "n.",
    "cn_def": "農夫",
    "en_def": "a person who grows food or keeps animals on a farm",
    "sentence": "Q: Where do {{BLANK}} work? — A: They work on farms. They grow rice and vegetables.",
    "cn": "農夫在哪裡工作？ — 他們在農場工作，他們種稻米和蔬菜。"
  },
  {
    "word": "fisherman",
    "pos": "n.",
    "cn_def": "漁夫",
    "en_def": "a person who catches fish as a job",
    "sentence": "Q: Where does a {{BLANK}} work? — A: He works on a boat at sea.",
    "cn": "漁夫在哪裡工作？ — 他在海上的船上工作。"
  },
  {
    "word": "cook",
    "pos": "n.",
    "cn_def": "廚師",
    "en_def": "a person who makes food as a job",
    "sentence": "Q: Where does the {{BLANK}} work? — A: She works in the kitchen of a restaurant.",
    "cn": "那位廚師在哪裡工作？ — 她在一家餐廳的廚房工作。"
  },
  {
    "word": "waiter (waiters)",
    "pos": "n.",
    "cn_def": "男服務生",
    "en_def": "a man who brings food to people in a restaurant",
    "sentence": "Q: Where do {{BLANK}} work? — A: They work in restaurants. They bring food to people.",
    "cn": "男服務生在哪裡工作？ — 他們在餐廳工作，他們幫人送餐。"
  },
  {
    "word": "waitress",
    "pos": "n.",
    "cn_def": "女服務生",
    "en_def": "a woman who brings food to people in a restaurant",
    "sentence": "Q: Where does Mary's sister work? — A: She is a {{BLANK}} at a coffee shop.",
    "cn": "瑪莉的姊姊在哪裡工作？ — 她在一家咖啡店當女服務生。"
  },
  {
    "word": "clerk (clerks)",
    "pos": "n.",
    "cn_def": "店員",
    "en_def": "a person who works in a store or an office",
    "sentence": "Q: Where do Ken and his friend work? — A: They are {{BLANK}} at a supermarket.",
    "cn": "肯和他的朋友在哪裡工作？ — 他們在一家超市當店員。"
  },
  {
    "word": "secretary",
    "pos": "n.",
    "cn_def": "秘書",
    "en_def": "a person who answers the phone and writes letters for a boss",
    "sentence": "Q: Where does Ms. Lee work? — A: She works in an office. She is a {{BLANK}}.",
    "cn": "李女士在哪裡工作？ — 她在辦公室工作，她是秘書。"
  },
  {
    "word": "mailman (mail carrier)",
    "pos": "n.",
    "cn_def": "郵差",
    "en_def": "a person who brings letters to people's homes",
    "sentence": "Q: What does a {{BLANK}} do? — A: He brings letters to every home.",
    "cn": "郵差做什麼？ — 他把信送到每一戶人家。",
    "alts": [
      "mail carrier"
    ]
  },
  {
    "word": "police",
    "pos": "n.",
    "cn_def": "警察",
    "en_def": "the people whose job is to catch bad people and keep everyone safe",
    "sentence": "Q: What do the {{BLANK}} do? — A: They help people and keep our city safe.",
    "cn": "警察做什麼？ — 他們幫助人們，維護我們城市的安全。"
  },
  {
    "word": "officer",
    "pos": "n.",
    "cn_def": "警官；官員",
    "en_def": "a person with an important job in the police or the army",
    "sentence": "Q: What does a police {{BLANK}} do? — A: He helps people and catches bad men.",
    "cn": "警官做什麼？ — 他幫助人們、抓壞人。"
  },
  {
    "word": "driver (drivers)",
    "pos": "n.",
    "cn_def": "駕駛人；司機",
    "en_def": "a person who drives a car, bus, or taxi",
    "sentence": "Q: What do bus {{BLANK}} do? — A: They drive buses and take people to many places.",
    "cn": "公車司機做什麼？ — 他們開公車，載人們去很多地方。"
  },
  {
    "word": "salesman",
    "pos": "n.",
    "cn_def": "推銷員",
    "en_def": "a man whose job is to sell things",
    "sentence": "Q: What does a {{BLANK}} do? — A: He sells things to people.",
    "cn": "推銷員做什麼？ — 他把東西賣給人們。"
  },
  {
    "word": "shopkeeper (shopkeepers)",
    "pos": "n.",
    "cn_def": "店主",
    "en_def": "a person who owns a small store",
    "sentence": "Q: What do {{BLANK}} do? — A: They open their stores and sell things.",
    "cn": "店主做什麼？ — 他們開店、賣東西。"
  },
  {
    "word": "worker (workers)",
    "pos": "n.",
    "cn_def": "工人",
    "en_def": "a person who works, often in a factory",
    "sentence": "Q: What do the {{BLANK}} do at the factory? — A: They make toys.",
    "cn": "工人們在工廠做什麼？ — 他們製作玩具。"
  }
];

const MCQS = [
  {
    "q": "When I was sick, the ______ looked at my throat and gave me some medicine.",
    "options": [
      "doctor",
      "lawyer",
      "farmer",
      "singer"
    ],
    "answer": 0,
    "cn": "你媽媽是做什麼的？ — 她是醫生，她在醫院工作。",
    "vocabIndex": 0
  },
  {
    "q": "The ______ in this hospital help the doctors and take care of sick people day and night.",
    "options": [
      "farmers",
      "nurses",
      "soldiers",
      "singers"
    ],
    "answer": 1,
    "cn": "艾美的阿姨們是做什麼的？ — 她們是護士，她們幫助生病的人。",
    "vocabIndex": 1
  },
  {
    "q": "I have a bad toothache, so I am going to see the ______ this afternoon.",
    "options": [
      "lawyer",
      "farmer",
      "soldier",
      "dentist"
    ],
    "answer": 3,
    "cn": "林先生是做什麼的？ — 他是牙醫，他檢查人們的牙齒。",
    "vocabIndex": 2
  },
  {
    "q": "Mrs. Lin doesn't have a job outside. She is a ______, and she takes care of her home and children.",
    "options": [
      "waitress",
      "actress",
      "housewife",
      "secretary"
    ],
    "answer": 2,
    "cn": "班的媽媽是做什麼的？ — 她是家庭主婦，她在家煮飯、打掃。",
    "vocabIndex": 3
  },
  {
    "q": "My brother got a ______ at a bank. He starts work next Monday.",
    "options": [
      "job",
      "boss",
      "cook",
      "clerk"
    ],
    "answer": 0,
    "cn": "你爸媽是做什麼的？ — 我爸爸是老師，我媽媽在銀行有一份新工作。",
    "vocabIndex": 4
  },
  {
    "q": "Mr. Wang's ______ is doing well. His company sells computers all over the world.",
    "options": [
      "boss",
      "cowboy",
      "police",
      "business"
    ],
    "answer": 3,
    "cn": "湯姆的爸媽是做什麼的？ — 他們做小生意，他們賣鞋子。",
    "vocabIndex": 5
  },
  {
    "q": "Mr. Chen is a rich ______. He has three companies and often flies to other countries for meetings.",
    "options": [
      "fisherman",
      "businessman",
      "cowboy",
      "soldier"
    ],
    "answer": 1,
    "cn": "王先生是做什麼的？ — 他是商人，他常常去其他國家。",
    "vocabIndex": 6
  },
  {
    "q": "My ______ is very nice. He never gets angry at the people who work for him.",
    "options": [
      "job",
      "business",
      "boss",
      "police"
    ],
    "answer": 2,
    "cn": "陳女士在店裡做什麼？ — 她是老闆，她告訴每個人要做什麼。",
    "vocabIndex": 7
  },
  {
    "q": "Tom Cruise is a famous ______. He has been in more than forty movies.",
    "options": [
      "actor",
      "actress",
      "waitress",
      "housewife"
    ],
    "answer": 0,
    "cn": "湯姆想當什麼？ — 他想當男演員，他想演電影。",
    "vocabIndex": 8
  },
  {
    "q": "She is a famous ______. She plays a queen in her new movie.",
    "options": [
      "actor",
      "waiter",
      "businessman",
      "actress"
    ],
    "answer": 3,
    "cn": "艾美，你想當什麼？ — 我想當女演員，我喜歡在電視上演戲。",
    "vocabIndex": 9
  },
  {
    "q": "The two ______ have beautiful voices. Their new song is number one this week.",
    "options": [
      "soldiers",
      "singers",
      "farmers",
      "lawyers"
    ],
    "answer": 1,
    "cn": "你的姊妹們想當什麼？ — 她們想當歌手，她們唱歌很好聽。",
    "vocabIndex": 10
  },
  {
    "q": "J.K. Rowling is a famous ______. Her books about Harry Potter are read all over the world.",
    "options": [
      "actress",
      "soldier",
      "writer",
      "farmer"
    ],
    "answer": 2,
    "cn": "凱文想當什麼？ — 他想當作家，他喜歡寫故事。",
    "vocabIndex": 11
  },
  {
    "q": "The TV ______ asked the singer many questions for the evening news.",
    "options": [
      "reporter",
      "farmer",
      "soldier",
      "fisherman"
    ],
    "answer": 0,
    "cn": "你將來想當什麼？ — 我想當記者，我想在電視上報新聞。",
    "vocabIndex": 12
  },
  {
    "q": "My father is an ______. He plans and builds bridges and roads.",
    "options": [
      "actor",
      "actress",
      "officer",
      "engineer"
    ],
    "answer": 3,
    "cn": "你哥哥想當什麼？ — 他想當工程師，他喜歡電腦和機器。",
    "vocabIndex": 13
  },
  {
    "q": "Good ______ know the law very well. They help people who are in trouble with it.",
    "options": [
      "farmers",
      "lawyers",
      "singers",
      "waiters"
    ],
    "answer": 1,
    "cn": "珍妮和麗莎想當什麼？ — 她們想像她們的爸爸一樣當律師。",
    "vocabIndex": 14
  },
  {
    "q": "My brother is a ______ in the army. He wears a green uniform and carries a gun.",
    "options": [
      "farmer",
      "waiter",
      "soldier",
      "writer"
    ],
    "answer": 2,
    "cn": "彼得想當什麼？ — 他想當軍人，他想保衛我們的國家安全。",
    "vocabIndex": 15
  },
  {
    "q": "In old American movies, ______ ride horses and take care of cows. They wear big hats.",
    "options": [
      "cowboys",
      "dentists",
      "lawyers",
      "nurses"
    ],
    "answer": 0,
    "cn": "男孩們在萬聖節派對上想扮成什麼？ — 他們想扮成牛仔，他們戴大帽子。",
    "vocabIndex": 16
  },
  {
    "q": "My mother ______ in a hospital. She is a nurse there.",
    "options": [
      "plays",
      "works",
      "studies",
      "celebrates"
    ],
    "answer": 1,
    "cn": "你爸爸在哪裡工作？ — 他在銀行工作。",
    "vocabIndex": 17
  },
  {
    "q": "______ grow rice, fruit, and vegetables. They get up early and work in the fields all day.",
    "options": [
      "Soldiers",
      "Lawyers",
      "Dentists",
      "farmers"
    ],
    "answer": 3,
    "cn": "農夫在哪裡工作？ — 他們在農場工作，他們種稻米和蔬菜。",
    "vocabIndex": 18
  },
  {
    "q": "The ______ goes out to sea in his boat every morning and comes back with a lot of fish.",
    "options": [
      "farmer",
      "soldier",
      "fisherman",
      "lawyer"
    ],
    "answer": 2,
    "cn": "漁夫在哪裡工作？ — 他在海上的船上工作。",
    "vocabIndex": 19
  },
  {
    "q": "The ______ at this restaurant makes the best beef noodles in town. He has worked in the kitchen for twenty years.",
    "options": [
      "cook",
      "waiter",
      "driver",
      "clerk"
    ],
    "answer": 0,
    "cn": "那位廚師在哪裡工作？ — 她在一家餐廳的廚房工作。",
    "vocabIndex": 20
  },
  {
    "q": "The ______ in this restaurant are all men. They bring the food to the tables quickly.",
    "options": [
      "actresses",
      "waiters",
      "farmers",
      "soldiers"
    ],
    "answer": 1,
    "cn": "男服務生在哪裡工作？ — 他們在餐廳工作，他們幫人送餐。",
    "vocabIndex": 21
  },
  {
    "q": "The ______ brought us the menu. She was a friendly young woman with a big smile.",
    "options": [
      "waiter",
      "actor",
      "businessman",
      "waitress"
    ],
    "answer": 3,
    "cn": "瑪莉的姊姊在哪裡工作？ — 她在一家咖啡店當女服務生。",
    "vocabIndex": 22
  },
  {
    "q": "The ______ at the convenience store are friendly. They always say \"Welcome!\" when you walk in.",
    "options": [
      "farmers",
      "soldiers",
      "clerks",
      "dentists"
    ],
    "answer": 2,
    "cn": "肯和他的朋友在哪裡工作？ — 他們在一家超市當店員。",
    "vocabIndex": 23
  },
  {
    "q": "Mr. Lin's ______ answers the phone and writes letters for him. She also plans his meetings.",
    "options": [
      "secretary",
      "soldier",
      "farmer",
      "fisherman"
    ],
    "answer": 0,
    "cn": "李女士在哪裡工作？ — 她在辦公室工作，她是秘書。",
    "vocabIndex": 24
  },
  {
    "q": "The ______ brings letters and packages to our house every morning.",
    "options": [
      "fisherman",
      "mailman",
      "salesman",
      "businessman"
    ],
    "answer": 1,
    "cn": "郵差做什麼？ — 他把信送到每一戶人家。",
    "vocabIndex": 25
  },
  {
    "q": "Call the ______! Someone broke into our house and took our TV.",
    "options": [
      "actors",
      "singers",
      "writers",
      "police"
    ],
    "answer": 3,
    "cn": "警察做什麼？ — 他們幫助人們，維護我們城市的安全。",
    "vocabIndex": 26
  },
  {
    "q": "A police ______ stopped our car and asked my father some questions.",
    "options": [
      "actor",
      "cook",
      "officer",
      "writer"
    ],
    "answer": 2,
    "cn": "警官做什麼？ — 他幫助人們、抓壞人。",
    "vocabIndex": 27
  },
  {
    "q": "Bus ______ have to be careful on the road. They carry many people every day.",
    "options": [
      "farmers",
      "drivers",
      "singers",
      "writers"
    ],
    "answer": 1,
    "cn": "公車司機做什麼？ — 他們開公車，載人們去很多地方。",
    "vocabIndex": 28
  },
  {
    "q": "The car ______ told us many good things about the new car. He really wanted us to buy it.",
    "options": [
      "fisherman",
      "mailman",
      "soldier",
      "salesman"
    ],
    "answer": 3,
    "cn": "推銷員做什麼？ — 他把東西賣給人們。",
    "vocabIndex": 29
  },
  {
    "q": "The ______ on this street open their stores at nine and close them at ten at night.",
    "options": [
      "farmers",
      "soldiers",
      "shopkeepers",
      "reporters"
    ],
    "answer": 2,
    "cn": "店主做什麼？ — 他們開店、賣東西。",
    "vocabIndex": 30
  },
  {
    "q": "The ______ in this factory make two hundred cars a day. They start at eight in the morning.",
    "options": [
      "workers",
      "singers",
      "lawyers",
      "dentists"
    ],
    "answer": 0,
    "cn": "工人們在工廠做什麼？ — 他們製作玩具。",
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "doctor": {
    "pos": "n.",
    "en_def": "a person whose job is to help sick people get well",
    "cn_def": "醫生"
  },
  "lawyer": {
    "pos": "n.",
    "en_def": "a person who knows the law and helps people with it",
    "cn_def": "律師"
  },
  "farmer": {
    "pos": "n.",
    "en_def": "a person who grows food or keeps animals on a farm",
    "cn_def": "農夫"
  },
  "singer": {
    "pos": "n.",
    "en_def": "a person who sings songs",
    "cn_def": "歌手"
  },
  "farmers": {
    "pos": "n.",
    "en_def": "a person who grows food or keeps animals on a farm",
    "cn_def": "農夫"
  },
  "nurses": {
    "pos": "n.",
    "en_def": "a person who takes care of sick people in a hospital",
    "cn_def": "護士"
  },
  "soldiers": {
    "pos": "n.",
    "en_def": "a person who is in an army",
    "cn_def": "軍人"
  },
  "singers": {
    "pos": "n.",
    "en_def": "a person who sings songs",
    "cn_def": "歌手"
  },
  "soldier": {
    "pos": "n.",
    "en_def": "a person who is in an army",
    "cn_def": "軍人"
  },
  "dentist": {
    "pos": "n.",
    "en_def": "a doctor who takes care of people's teeth",
    "cn_def": "牙醫"
  },
  "waitress": {
    "pos": "n.",
    "en_def": "a woman who brings food to people in a restaurant",
    "cn_def": "女服務生"
  },
  "actress": {
    "pos": "n.",
    "en_def": "a woman who plays a part in a movie or a play",
    "cn_def": "女演員"
  },
  "housewife": {
    "pos": "n.",
    "en_def": "a woman who stays home and takes care of her family and house",
    "cn_def": "家庭主婦"
  },
  "secretary": {
    "pos": "n.",
    "en_def": "a person who answers the phone and writes letters for a boss",
    "cn_def": "秘書"
  },
  "job": {
    "pos": "n.",
    "en_def": "the work that you do to get money",
    "cn_def": "工作"
  },
  "boss": {
    "pos": "n.",
    "en_def": "the person who tells workers what to do",
    "cn_def": "老闆"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  },
  "clerk": {
    "pos": "n.",
    "en_def": "a person who works in a store or an office",
    "cn_def": "店員"
  },
  "cowboy": {
    "pos": "n.",
    "en_def": "a man who rides a horse and takes care of cows",
    "cn_def": "牛仔"
  },
  "police": {
    "pos": "n.",
    "en_def": "the people whose job is to catch bad people and keep everyone safe",
    "cn_def": "警察"
  },
  "business": {
    "pos": "n.",
    "en_def": "buying and selling things to make money",
    "cn_def": "生意"
  },
  "fisherman": {
    "pos": "n.",
    "en_def": "a person who catches fish as a job",
    "cn_def": "漁夫"
  },
  "businessman": {
    "pos": "n.",
    "en_def": "a man who works in a company and buys and sells things",
    "cn_def": "商人"
  },
  "actor": {
    "pos": "n.",
    "en_def": "a man who plays a part in a movie or a play",
    "cn_def": "男演員"
  },
  "waiter": {
    "pos": "n.",
    "en_def": "a man who brings food to people in a restaurant",
    "cn_def": "男服務生"
  },
  "lawyers": {
    "pos": "n.",
    "en_def": "a person who knows the law and helps people with it",
    "cn_def": "律師"
  },
  "writer": {
    "pos": "n.",
    "en_def": "a person who writes books or stories",
    "cn_def": "作家"
  },
  "reporter": {
    "pos": "n.",
    "en_def": "a person who finds and tells the news",
    "cn_def": "記者"
  },
  "officer": {
    "pos": "n.",
    "en_def": "a person with an important job in the police or the army",
    "cn_def": "警官；官員"
  },
  "engineer": {
    "pos": "n.",
    "en_def": "a person who plans and builds machines, roads, or bridges",
    "cn_def": "工程師"
  },
  "waiters": {
    "pos": "n.",
    "en_def": "a man who brings food to people in a restaurant",
    "cn_def": "男服務生"
  },
  "cowboys": {
    "pos": "n.",
    "en_def": "a man who rides a horse and takes care of cows",
    "cn_def": "牛仔"
  },
  "dentists": {
    "pos": "n.",
    "en_def": "a doctor who takes care of people's teeth",
    "cn_def": "牙醫"
  },
  "plays": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "玩；打（球）"
  },
  "works": {
    "pos": "v.",
    "en_def": "to do a job",
    "cn_def": "工作"
  },
  "studies": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "讀書；學習"
  },
  "celebrates": {
    "pos": "v.",
    "en_def": "to do something fun on a special day",
    "cn_def": "慶祝"
  },
  "driver": {
    "pos": "n.",
    "en_def": "a person who drives a car, bus, or taxi",
    "cn_def": "駕駛人；司機"
  },
  "actresses": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "女演員"
  },
  "clerks": {
    "pos": "n.",
    "en_def": "a person who works in a store or an office",
    "cn_def": "店員"
  },
  "mailman": {
    "pos": "n.",
    "en_def": "a person who brings letters to people's homes",
    "cn_def": "郵差"
  },
  "salesman": {
    "pos": "n.",
    "en_def": "a man whose job is to sell things",
    "cn_def": "推銷員"
  },
  "actors": {
    "pos": "n.",
    "en_def": "a man who plays a part in a movie or a play",
    "cn_def": "男演員"
  },
  "writers": {
    "pos": "n.",
    "en_def": "a person who writes books or stories",
    "cn_def": "作家"
  },
  "drivers": {
    "pos": "n.",
    "en_def": "a person who drives a car, bus, or taxi",
    "cn_def": "駕駛人；司機"
  },
  "shopkeepers": {
    "pos": "n.",
    "en_def": "a person who owns a small store",
    "cn_def": "店主"
  },
  "reporters": {
    "pos": "n.",
    "en_def": "a person who finds and tells the news",
    "cn_def": "記者"
  },
  "workers": {
    "pos": "n.",
    "en_def": "a person who works, often in a factory",
    "cn_def": "工人"
  }
};

const EXTRA_GLOSSES = {};
