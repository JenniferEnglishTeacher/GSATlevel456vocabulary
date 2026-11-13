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
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: What do Amy's aunts do? — A: They are {{BLANK}}. They help sick people.",
    "cn": "艾美的阿姨們是做什麼的？ — 她們是護士，她們幫助生病的人。"
  },
  {
    "word": "dentist",
    "pos": "n.",
    "cn_def": "牙醫",
    "en_def": "",
    "sentence": "Q: What does Mr. Lin do? — A: He is a {{BLANK}}. He checks people's teeth.",
    "cn": "林先生是做什麼的？ — 他是牙醫，他檢查人們的牙齒。"
  },
  {
    "word": "housewife",
    "pos": "n.",
    "cn_def": "家庭主婦",
    "en_def": "",
    "sentence": "Q: What does Ben's mom do? — A: She is a {{BLANK}}. She cooks and cleans at home.",
    "cn": "班的媽媽是做什麼的？ — 她是家庭主婦，她在家煮飯、打掃。"
  },
  {
    "word": "job",
    "pos": "n.",
    "cn_def": "工作",
    "en_def": "",
    "sentence": "Q: What do your parents do? — A: My dad is a teacher, and my mom has a new {{BLANK}} at a bank.",
    "cn": "你爸媽是做什麼的？ — 我爸爸是老師，我媽媽在銀行有一份新工作。"
  },
  {
    "word": "business",
    "pos": "n.",
    "cn_def": "生意",
    "en_def": "",
    "sentence": "Q: What do Tom's parents do? — A: They have a small {{BLANK}}. They sell shoes.",
    "cn": "湯姆的爸媽是做什麼的？ — 他們做小生意，他們賣鞋子。"
  },
  {
    "word": "businessman",
    "pos": "n.",
    "cn_def": "商人",
    "en_def": "",
    "sentence": "Q: What does Mr. Wang do? — A: He is a {{BLANK}}. He often travels to other countries.",
    "cn": "王先生是做什麼的？ — 他是商人，他常常去其他國家。"
  },
  {
    "word": "boss",
    "pos": "n.",
    "cn_def": "老闆",
    "en_def": "",
    "sentence": "Q: What does Ms. Chen do at the store? — A: She is the {{BLANK}}. She tells everyone what to do.",
    "cn": "陳女士在店裡做什麼？ — 她是老闆，她告訴每個人要做什麼。"
  },
  {
    "word": "actor",
    "pos": "n.",
    "cn_def": "男演員",
    "en_def": "",
    "sentence": "Q: What does Tom want to be? — A: He wants to be an {{BLANK}}. He wants to be in movies.",
    "cn": "湯姆想當什麼？ — 他想當男演員，他想演電影。"
  },
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "",
    "sentence": "Q: What do you want to be, Amy? — A: I want to be an {{BLANK}}. I love to act on TV.",
    "cn": "艾美，你想當什麼？ — 我想當女演員，我喜歡在電視上演戲。"
  },
  {
    "word": "singer (singers)",
    "pos": "n.",
    "cn_def": "歌手",
    "en_def": "",
    "sentence": "Q: What do your sisters want to be? — A: They want to be {{BLANK}}. They sing very well.",
    "cn": "你的姊妹們想當什麼？ — 她們想當歌手，她們唱歌很好聽。"
  },
  {
    "word": "writer",
    "pos": "n.",
    "cn_def": "作家",
    "en_def": "",
    "sentence": "Q: What does Kevin want to be? — A: He wants to be a {{BLANK}}. He likes to write stories.",
    "cn": "凱文想當什麼？ — 他想當作家，他喜歡寫故事。"
  },
  {
    "word": "reporter",
    "pos": "n.",
    "cn_def": "記者",
    "en_def": "",
    "sentence": "Q: What do you want to be in the future? — A: I want to be a {{BLANK}}. I want to report the news on TV.",
    "cn": "你將來想當什麼？ — 我想當記者，我想在電視上報新聞。"
  },
  {
    "word": "engineer",
    "pos": "n.",
    "cn_def": "工程師",
    "en_def": "",
    "sentence": "Q: What does your brother want to be? — A: He wants to be an {{BLANK}}. He likes computers and machines.",
    "cn": "你哥哥想當什麼？ — 他想當工程師，他喜歡電腦和機器。"
  },
  {
    "word": "lawyer (lawyers)",
    "pos": "n.",
    "cn_def": "律師",
    "en_def": "",
    "sentence": "Q: What do Jenny and Lisa want to be? — A: They want to be {{BLANK}} like their father.",
    "cn": "珍妮和麗莎想當什麼？ — 她們想像她們的爸爸一樣當律師。"
  },
  {
    "word": "soldier",
    "pos": "n.",
    "cn_def": "軍人",
    "en_def": "",
    "sentence": "Q: What does Peter want to be? — A: He wants to be a {{BLANK}}. He wants to keep our country safe.",
    "cn": "彼得想當什麼？ — 他想當軍人，他想保衛我們的國家安全。"
  },
  {
    "word": "cowboy (cowboys)",
    "pos": "n.",
    "cn_def": "牛仔",
    "en_def": "",
    "sentence": "Q: What do the boys want to be at the Halloween party? — A: They want to be {{BLANK}}. They wear big hats.",
    "cn": "男孩們在萬聖節派對上想扮成什麼？ — 他們想扮成牛仔，他們戴大帽子。"
  },
  {
    "word": "work (works)",
    "pos": "v.",
    "cn_def": "工作",
    "en_def": "",
    "sentence": "Q: Where does your father work? — A: He {{BLANK}} at a bank.",
    "cn": "你爸爸在哪裡工作？ — 他在銀行工作。"
  },
  {
    "word": "farmer (farmers)",
    "pos": "n.",
    "cn_def": "農夫",
    "en_def": "",
    "sentence": "Q: Where do {{BLANK}} work? — A: They work on farms. They grow rice and vegetables.",
    "cn": "農夫在哪裡工作？ — 他們在農場工作，他們種稻米和蔬菜。"
  },
  {
    "word": "fisherman",
    "pos": "n.",
    "cn_def": "漁夫",
    "en_def": "",
    "sentence": "Q: Where does a {{BLANK}} work? — A: He works on a boat at sea.",
    "cn": "漁夫在哪裡工作？ — 他在海上的船上工作。"
  },
  {
    "word": "cook",
    "pos": "n.",
    "cn_def": "廚師",
    "en_def": "",
    "sentence": "Q: Where does the {{BLANK}} work? — A: She works in the kitchen of a restaurant.",
    "cn": "那位廚師在哪裡工作？ — 她在一家餐廳的廚房工作。"
  },
  {
    "word": "waiter (waiters)",
    "pos": "n.",
    "cn_def": "男服務生",
    "en_def": "",
    "sentence": "Q: Where do {{BLANK}} work? — A: They work in restaurants. They bring food to people.",
    "cn": "男服務生在哪裡工作？ — 他們在餐廳工作，他們幫人送餐。"
  },
  {
    "word": "waitress",
    "pos": "n.",
    "cn_def": "女服務生",
    "en_def": "",
    "sentence": "Q: Where does Mary's sister work? — A: She is a {{BLANK}} at a coffee shop.",
    "cn": "瑪莉的姊姊在哪裡工作？ — 她在一家咖啡店當女服務生。"
  },
  {
    "word": "clerk (clerks)",
    "pos": "n.",
    "cn_def": "店員",
    "en_def": "",
    "sentence": "Q: Where do Ken and his friend work? — A: They are {{BLANK}} at a supermarket.",
    "cn": "肯和他的朋友在哪裡工作？ — 他們在一家超市當店員。"
  },
  {
    "word": "secretary",
    "pos": "n.",
    "cn_def": "秘書",
    "en_def": "",
    "sentence": "Q: Where does Ms. Lee work? — A: She works in an office. She is a {{BLANK}}.",
    "cn": "李女士在哪裡工作？ — 她在辦公室工作，她是秘書。"
  },
  {
    "word": "mailman (mail carrier)",
    "pos": "n.",
    "cn_def": "郵差",
    "en_def": "",
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
    "en_def": "",
    "sentence": "Q: What do the {{BLANK}} do? — A: They help people and keep our city safe.",
    "cn": "警察做什麼？ — 他們幫助人們，維護我們城市的安全。"
  },
  {
    "word": "officer",
    "pos": "n.",
    "cn_def": "警官；官員",
    "en_def": "",
    "sentence": "Q: What does a police {{BLANK}} do? — A: He helps people and catches bad men.",
    "cn": "警官做什麼？ — 他幫助人們、抓壞人。"
  },
  {
    "word": "driver (drivers)",
    "pos": "n.",
    "cn_def": "駕駛人；司機",
    "en_def": "",
    "sentence": "Q: What do bus {{BLANK}} do? — A: They drive buses and take people to many places.",
    "cn": "公車司機做什麼？ — 他們開公車，載人們去很多地方。"
  },
  {
    "word": "salesman",
    "pos": "n.",
    "cn_def": "推銷員",
    "en_def": "",
    "sentence": "Q: What does a {{BLANK}} do? — A: He sells things to people.",
    "cn": "推銷員做什麼？ — 他把東西賣給人們。"
  },
  {
    "word": "shopkeeper (shopkeepers)",
    "pos": "n.",
    "cn_def": "店主",
    "en_def": "",
    "sentence": "Q: What do {{BLANK}} do? — A: They open their stores and sell things.",
    "cn": "店主做什麼？ — 他們開店、賣東西。"
  },
  {
    "word": "worker (workers)",
    "pos": "n.",
    "cn_def": "工人",
    "en_def": "",
    "sentence": "Q: What do the {{BLANK}} do at the factory? — A: They make toys.",
    "cn": "工人們在工廠做什麼？ — 他們製作玩具。"
  }
];

const MCQS = [
  {
    "q": "Q: What does your mother do? — A: She is a ______. She works in a hospital.【醫生】",
    "options": [
      "writer",
      "dentist",
      "doctor",
      "engineer"
    ],
    "answer": 2,
    "cn": "你媽媽是做什麼的？ — 她是醫生，她在醫院工作。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What do Amy's aunts do? — A: They are ______. They help sick people.【護士】",
    "options": [
      "nurses",
      "cowboys",
      "shopkeepers",
      "clerks"
    ],
    "answer": 0,
    "cn": "艾美的阿姨們是做什麼的？ — 她們是護士，她們幫助生病的人。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What does Mr. Lin do? — A: He is a ______. He checks people's teeth.【牙醫】",
    "options": [
      "fisherman",
      "dentist",
      "secretary",
      "engineer"
    ],
    "answer": 1,
    "cn": "林先生是做什麼的？ — 他是牙醫，他檢查人們的牙齒。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What does Ben's mom do? — A: She is a ______. She cooks and cleans at home.【家庭主婦】",
    "options": [
      "businessman",
      "dentist",
      "officer",
      "housewife"
    ],
    "answer": 3,
    "cn": "班的媽媽是做什麼的？ — 她是家庭主婦，她在家煮飯、打掃。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What do your parents do? — A: My dad is a teacher, and my mom has a new ______ at a bank.【工作】",
    "options": [
      "job",
      "dentist",
      "writer",
      "police"
    ],
    "answer": 0,
    "cn": "你爸媽是做什麼的？ — 我爸爸是老師，我媽媽在銀行有一份新工作。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What do Tom's parents do? — A: They have a small ______. They sell shoes.【生意】",
    "options": [
      "boss",
      "business",
      "lawyers",
      "farmers"
    ],
    "answer": 1,
    "cn": "湯姆的爸媽是做什麼的？ — 他們做小生意，他們賣鞋子。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What does Mr. Wang do? — A: He is a ______. He often travels to other countries.【商人】",
    "options": [
      "cook",
      "job",
      "doctor",
      "businessman"
    ],
    "answer": 3,
    "cn": "王先生是做什麼的？ — 他是商人，他常常去其他國家。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What does Ms. Chen do at the store? — A: She is the ______. She tells everyone what to do.【老闆】",
    "options": [
      "waiters",
      "nurses",
      "boss",
      "clerks"
    ],
    "answer": 2,
    "cn": "陳女士在店裡做什麼？ — 她是老闆，她告訴每個人要做什麼。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What does Tom want to be? — A: He wants to be an ______. He wants to be in movies.【男演員】",
    "options": [
      "writer",
      "actor",
      "mailman",
      "dentist"
    ],
    "answer": 1,
    "cn": "湯姆想當什麼？ — 他想當男演員，他想演電影。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What do you want to be, Amy? — A: I want to be an ______. I love to act on TV.【女演員】",
    "options": [
      "actress",
      "clerks",
      "cowboys",
      "waiters"
    ],
    "answer": 0,
    "cn": "艾美，你想當什麼？ — 我想當女演員，我喜歡在電視上演戲。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What do your sisters want to be? — A: They want to be ______. They sing very well.【歌手】",
    "options": [
      "drivers",
      "cowboys",
      "shopkeepers",
      "singers"
    ],
    "answer": 3,
    "cn": "你的姊妹們想當什麼？ — 她們想當歌手，她們唱歌很好聽。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What does Kevin want to be? — A: He wants to be a ______. He likes to write stories.【作家】",
    "options": [
      "secretary",
      "actor",
      "writer",
      "officer"
    ],
    "answer": 2,
    "cn": "凱文想當什麼？ — 他想當作家，他喜歡寫故事。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What do you want to be in the future? — A: I want to be a ______. I want to report the news on TV.【記者】",
    "options": [
      "reporter",
      "housewife",
      "businessman",
      "fisherman"
    ],
    "answer": 0,
    "cn": "你將來想當什麼？ — 我想當記者，我想在電視上報新聞。",
    "vocabIndex": 12
  },
  {
    "q": "Q: What does your brother want to be? — A: He wants to be an ______. He likes computers and machines.【工程師】",
    "options": [
      "job",
      "engineer",
      "businessman",
      "doctor"
    ],
    "answer": 1,
    "cn": "你哥哥想當什麼？ — 他想當工程師，他喜歡電腦和機器。",
    "vocabIndex": 13
  },
  {
    "q": "Q: What do Jenny and Lisa want to be? — A: They want to be ______ like their father.【律師】",
    "options": [
      "waiters",
      "workers",
      "farmers",
      "lawyers"
    ],
    "answer": 3,
    "cn": "珍妮和麗莎想當什麼？ — 她們想像她們的爸爸一樣當律師。",
    "vocabIndex": 14
  },
  {
    "q": "Q: What does Peter want to be? — A: He wants to be a ______. He wants to keep our country safe.【軍人】",
    "options": [
      "job",
      "cook",
      "soldier",
      "housewife"
    ],
    "answer": 2,
    "cn": "彼得想當什麼？ — 他想當軍人，他想保衛我們的國家安全。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What do the boys want to be at the Halloween party? — A: They want to be ______. They wear big hats.【牛仔】",
    "options": [
      "nurses",
      "drivers",
      "lawyers",
      "cowboys"
    ],
    "answer": 3,
    "cn": "男孩們在萬聖節派對上想扮成什麼？ — 他們想扮成牛仔，他們戴大帽子。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Where does your father work? — A: He ______ at a bank.【工作】",
    "options": [
      "knows",
      "grows",
      "works",
      "washes"
    ],
    "answer": 2,
    "cn": "你爸爸在哪裡工作？ — 他在銀行工作。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Where do ______ work? — A: They work on farms. They grow rice and vegetables.【農夫】",
    "options": [
      "farmers",
      "workers",
      "nurses",
      "singers"
    ],
    "answer": 0,
    "cn": "農夫在哪裡工作？ — 他們在農場工作，他們種稻米和蔬菜。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Where does a ______ work? — A: He works on a boat at sea.【漁夫】",
    "options": [
      "soldier",
      "fisherman",
      "salesman",
      "reporter"
    ],
    "answer": 1,
    "cn": "漁夫在哪裡工作？ — 他在海上的船上工作。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Where does the ______ work? — A: She works in the kitchen of a restaurant.【廚師】",
    "options": [
      "job",
      "housewife",
      "doctor",
      "cook"
    ],
    "answer": 3,
    "cn": "那位廚師在哪裡工作？ — 她在一家餐廳的廚房工作。",
    "vocabIndex": 20
  },
  {
    "q": "Q: Where do ______ work? — A: They work in restaurants. They bring food to people.【男服務生】",
    "options": [
      "waiters",
      "workers",
      "boss",
      "farmers"
    ],
    "answer": 0,
    "cn": "男服務生在哪裡工作？ — 他們在餐廳工作，他們幫人送餐。",
    "vocabIndex": 21
  },
  {
    "q": "Q: Where does Mary's sister work? — A: She is a ______ at a coffee shop.【女服務生】",
    "options": [
      "shopkeepers",
      "waitress",
      "boss",
      "lawyers"
    ],
    "answer": 1,
    "cn": "瑪莉的姊姊在哪裡工作？ — 她在一家咖啡店當女服務生。",
    "vocabIndex": 22
  },
  {
    "q": "Q: Where do Ken and his friend work? — A: They are ______ at a supermarket.【店員】",
    "options": [
      "workers",
      "boss",
      "clerks",
      "shopkeepers"
    ],
    "answer": 2,
    "cn": "肯和他的朋友在哪裡工作？ — 他們在一家超市當店員。",
    "vocabIndex": 23
  },
  {
    "q": "Q: Where does Ms. Lee work? — A: She works in an office. She is a ______.【秘書】",
    "options": [
      "officer",
      "doctor",
      "job",
      "secretary"
    ],
    "answer": 3,
    "cn": "李女士在哪裡工作？ — 她在辦公室工作，她是秘書。",
    "vocabIndex": 24
  },
  {
    "q": "Q: What does a ______ do? — A: He brings letters to every home.【郵差】",
    "options": [
      "salesman",
      "job",
      "mailman",
      "soldier"
    ],
    "answer": 2,
    "cn": "郵差做什麼？ — 他把信送到每一戶人家。",
    "vocabIndex": 25
  },
  {
    "q": "Q: What do the ______ do? — A: They help people and keep our city safe.【警察】",
    "options": [
      "job",
      "police",
      "doctor",
      "engineer"
    ],
    "answer": 1,
    "cn": "警察做什麼？ — 他們幫助人們，維護我們城市的安全。",
    "vocabIndex": 26
  },
  {
    "q": "Q: What does a police ______ do? — A: He helps people and catches bad men.【警官；官員】",
    "options": [
      "officer",
      "police",
      "reporter",
      "cook"
    ],
    "answer": 0,
    "cn": "警官做什麼？ — 他幫助人們、抓壞人。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What do bus ______ do? — A: They drive buses and take people to many places.【駕駛人；司機】",
    "options": [
      "farmers",
      "lawyers",
      "waiters",
      "drivers"
    ],
    "answer": 3,
    "cn": "公車司機做什麼？ — 他們開公車，載人們去很多地方。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What does a ______ do? — A: He sells things to people.【推銷員】",
    "options": [
      "writer",
      "salesman",
      "officer",
      "secretary"
    ],
    "answer": 1,
    "cn": "推銷員做什麼？ — 他把東西賣給人們。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What do ______ do? — A: They open their stores and sell things.【店主】",
    "options": [
      "shopkeepers",
      "cowboys",
      "workers",
      "actress"
    ],
    "answer": 0,
    "cn": "店主做什麼？ — 他們開店、賣東西。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What do the ______ do at the factory? — A: They make toys.【工人】",
    "options": [
      "farmers",
      "waiters",
      "workers",
      "business"
    ],
    "answer": 2,
    "cn": "工人們在工廠做什麼？ — 他們製作玩具。",
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "doctor": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "醫生"
  },
  "grows": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "成長；長大"
  },
  "cook": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "煮飯；烹調"
  },
  "washes": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "清洗"
  },
  "nurses": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "護士"
  },
  "dentist": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "牙醫"
  },
  "housewife": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "家庭主婦"
  },
  "job": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "工作"
  },
  "business": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "生意"
  },
  "businessman": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "商人"
  },
  "boss": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "老闆"
  },
  "actor": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "男演員"
  },
  "actress": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "女演員"
  },
  "singers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "歌手"
  },
  "writer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "作家"
  },
  "reporter": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "記者"
  },
  "engineer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "工程師"
  },
  "lawyers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "律師"
  },
  "soldier": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "軍人"
  },
  "cowboys": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "牛仔"
  },
  "works": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "工作"
  },
  "farmers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "農夫"
  },
  "fisherman": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "漁夫"
  },
  "waiters": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "男服務生"
  },
  "waitress": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "女服務生"
  },
  "clerks": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "店員"
  },
  "secretary": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "秘書"
  },
  "mailman": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "郵差"
  },
  "police": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "警察"
  },
  "officer": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "警官；官員"
  },
  "drivers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "駕駛人；司機"
  },
  "salesman": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "推銷員"
  },
  "shopkeepers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "店主"
  },
  "workers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "工人"
  },
  "knows": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "知道；認識"
  }
};

const EXTRA_GLOSSES = {};
