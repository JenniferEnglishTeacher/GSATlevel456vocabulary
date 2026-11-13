// Unit 1 Quiz Data: People 人物（第01區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U01 - People",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "man",
    "pos": "n.",
    "cn_def": "男人",
    "en_def": "an adult male person",
    "sentence": "Q: Who is that? — A: That {{BLANK}} is Tom's father. He is a doctor.",
    "cn": "那是誰？ — 那個男人是湯姆的爸爸，他是醫生。"
  },
  {
    "word": "men",
    "pos": "n.",
    "cn_def": "男人們（複數）",
    "en_def": "more than one man",
    "sentence": "Q: Who are those? — A: Those {{BLANK}} are Ben and Ken's uncles.",
    "cn": "那些是誰？ — 那些男人是班和肯的叔叔。"
  },
  {
    "word": "woman",
    "pos": "n.",
    "cn_def": "女人",
    "en_def": "an adult female person",
    "sentence": "Q: Who is this? — A: This {{BLANK}} is my mom's friend, Ms. Lin.",
    "cn": "這是誰？ — 這位女士是我媽媽的朋友，林女士。"
  },
  {
    "word": "women",
    "pos": "n.",
    "cn_def": "女人們（複數）",
    "en_def": "more than one woman",
    "sentence": "Q: Who are these? — A: These {{BLANK}} are Amy and Lisa's aunts.",
    "cn": "這些是誰？ — 這些女士是艾美和麗莎的阿姨。"
  },
  {
    "word": "person",
    "pos": "n.",
    "cn_def": "人",
    "en_def": "one man, woman, or child",
    "sentence": "Q: Who is that? — A: That {{BLANK}} is my English teacher. She is very kind.",
    "cn": "那是誰？ — 那個人是我的英文老師，她很親切。"
  },
  {
    "word": "people",
    "pos": "n.",
    "cn_def": "人們",
    "en_def": "more than one person",
    "sentence": "Q: Who are those? — A: Those {{BLANK}} are my dad's friends from work.",
    "cn": "那些是誰？ — 那些人是我爸爸的同事朋友。"
  },
  {
    "word": "guy",
    "pos": "n.",
    "cn_def": "傢伙",
    "en_def": "a man or a boy",
    "sentence": "Q: Who is that? — A: That {{BLANK}} is Ken's cousin. He is very funny.",
    "cn": "那是誰？ — 那個傢伙是肯的表哥，他很好笑。"
  },
  {
    "word": "children",
    "pos": "n.",
    "cn_def": "小孩們（複數）",
    "en_def": "more than one child",
    "sentence": "Q: Who are these? — A: These {{BLANK}} are my aunt's. They are my cousins.",
    "cn": "這些是誰？ — 這些小孩是我阿姨的，他們是我的表兄弟姊妹。"
  },
  {
    "word": "neighbor",
    "pos": "n.",
    "cn_def": "鄰居",
    "en_def": "someone who lives next to you or near you",
    "sentence": "Q: Who is this? — A: This is my {{BLANK}}, Mr. Chen. He lives next door.",
    "cn": "這是誰？ — 這是我的鄰居陳先生，他住在隔壁。"
  },
  {
    "word": "neighborhood",
    "pos": "n.",
    "cn_def": "社區；鄰近地區",
    "en_def": "the area around your home",
    "sentence": "Q: Who are those kids? — A: They are kids from my {{BLANK}}. We often play together.",
    "cn": "那些小孩是誰？ — 他們是我們社區的小孩，我們常常一起玩。"
  },
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "訪客",
    "en_def": "someone who comes to see a person or a place",
    "sentence": "Q: Who is that? — A: That is our {{BLANK}} from Japan. She is Amy's friend.",
    "cn": "那是誰？ — 那是我們來自日本的訪客，她是艾美的朋友。"
  },
  {
    "word": "stranger",
    "pos": "n.",
    "cn_def": "陌生人",
    "en_def": "someone you do not know",
    "sentence": "Q: Who is that man at the door? — A: I don't know. He is a {{BLANK}}. Don't open the door.",
    "cn": "門口那個男人是誰？ — 我不知道，他是陌生人，不要開門。"
  },
  {
    "word": "king",
    "pos": "n.",
    "cn_def": "國王",
    "en_def": "the man who rules a country",
    "sentence": "Q: Who is this in the picture? — A: This is the {{BLANK}} of the country. He lives in a big castle.",
    "cn": "照片裡這是誰？ — 這是這個國家的國王，他住在一座大城堡裡。"
  },
  {
    "word": "queen",
    "pos": "n.",
    "cn_def": "皇后",
    "en_def": "the woman who rules a country, or a king's wife",
    "sentence": "Q: Who is that? — A: That is the {{BLANK}}. She is the king's wife.",
    "cn": "那是誰？ — 那是皇后，她是國王的太太。"
  },
  {
    "word": "prince",
    "pos": "n.",
    "cn_def": "王子",
    "en_def": "the son of a king or queen",
    "sentence": "Q: Who is this? — A: This is the {{BLANK}}. He is the king and queen's son.",
    "cn": "這是誰？ — 這是王子，他是國王和皇后的兒子。"
  },
  {
    "word": "princess",
    "pos": "n.",
    "cn_def": "公主",
    "en_def": "the daughter of a king or queen",
    "sentence": "Q: Who is that? — A: That is the {{BLANK}}. She is the king and queen's daughter.",
    "cn": "那是誰？ — 那是公主，她是國王和皇后的女兒。"
  },
  {
    "word": "giant",
    "pos": "n.",
    "cn_def": "巨人",
    "en_def": "a very big and tall person in stories",
    "sentence": "Q: Who is that in the story? — A: That is a {{BLANK}}. He is very, very tall.",
    "cn": "故事裡那是誰？ — 那是一個巨人，他非常非常高。"
  },
  {
    "word": "fool",
    "pos": "n.",
    "cn_def": "傻子",
    "en_def": "a person who is not smart",
    "sentence": "Q: Who is this in the story? — A: This is a {{BLANK}}. He often does stupid things.",
    "cn": "故事裡這是誰？ — 這是一個傻子，他常常做蠢事。"
  },
  {
    "word": "baby",
    "pos": "n.",
    "cn_def": "嬰兒",
    "en_def": "a very young child",
    "sentence": "Q: How old is Lisa's little sister? — A: She is a {{BLANK}}. She is one year old.",
    "cn": "麗莎的小妹妹幾歲？ — 她是個嬰兒，她一歲。"
  },
  {
    "word": "child",
    "pos": "n.",
    "cn_def": "小孩",
    "en_def": "a young boy or girl",
    "sentence": "Q: How old is Ms. Lin's son? — A: He is a small {{BLANK}}. He is six years old.",
    "cn": "林女士的兒子幾歲？ — 他是個小孩子，他六歲。"
  },
  {
    "word": "kid",
    "pos": "n.",
    "cn_def": "小孩",
    "en_def": "a child",
    "sentence": "Q: How old are your cousin's kids? — A: His {{BLANK}} are five and seven years old.",
    "cn": "你表哥的小孩幾歲？ — 他的小孩們五歲和七歲。"
  },
  {
    "word": "boy",
    "pos": "n.",
    "cn_def": "男孩",
    "en_def": "a male child",
    "sentence": "Q: How old is Amy's brother? — A: The {{BLANK}} is ten years old.",
    "cn": "艾美的弟弟幾歲？ — 那個男孩十歲。"
  },
  {
    "word": "girl",
    "pos": "n.",
    "cn_def": "女孩",
    "en_def": "a female child",
    "sentence": "Q: How old is Ben's sister? — A: The little {{BLANK}} is eight years old.",
    "cn": "班的妹妹幾歲？ — 那個小女孩八歲。"
  },
  {
    "word": "teenager",
    "pos": "n.",
    "cn_def": "青少年",
    "en_def": "a person who is 13 to 19 years old",
    "sentence": "Q: How old is your brother? — A: He is fifteen years old. He is a {{BLANK}}.",
    "cn": "你哥哥幾歲？ — 他十五歲，他是個青少年。"
  }
];

const MCQS = [
  {
    "q": "Mr. Lin is a tall ______ with short black hair. He is forty years old, and he has a wife and two young sons at home.",
    "options": [
      "girl",
      "baby",
      "queen",
      "man"
    ],
    "answer": 3,
    "cn": "那是誰？ — 那個男人是湯姆的爸爸，他是醫生。",
    "vocabIndex": 0
  },
  {
    "q": "Look at those three ______ over there. They are my father and my two uncles, and they are all wearing blue shirts today.",
    "options": [
      "men",
      "women",
      "girls",
      "babies"
    ],
    "answer": 0,
    "cn": "那些是誰？ — 那些男人是班和肯的叔叔。",
    "vocabIndex": 1
  },
  {
    "q": "Ms. Chen is a very kind ______. She is my mother's sister, and she often takes her son and daughter to the park.",
    "options": [
      "man",
      "woman",
      "boy",
      "king"
    ],
    "answer": 1,
    "cn": "這是誰？ — 這位女士是我媽媽的朋友，林女士。",
    "vocabIndex": 2
  },
  {
    "q": "My mother and my aunt are both strong ______. They work at the hospital all day, and they still cook dinner for their families.",
    "options": [
      "men",
      "boys",
      "women",
      "kings"
    ],
    "answer": 2,
    "cn": "這些是誰？ — 這些女士是艾美和麗莎的阿姨。",
    "vocabIndex": 3
  },
  {
    "q": "Only one ______ can sit in this small chair. If two of you want to sit down, please use the long sofa over there.",
    "options": [
      "people",
      "person",
      "children",
      "women"
    ],
    "answer": 1,
    "cn": "那是誰？ — 那個人是我的英文老師，她很親切。",
    "vocabIndex": 4
  },
  {
    "q": "There are more than two million ______ in this big city. The streets, buses, and trains are always full in the morning.",
    "options": [
      "people",
      "kings",
      "giants",
      "princes"
    ],
    "answer": 0,
    "cn": "那些是誰？ — 那些人是我爸爸的同事朋友。",
    "vocabIndex": 5
  },
  {
    "q": "Do you know the ______ in the red cap? He is a new student in my brother's class, and he plays basketball very well.",
    "options": [
      "girl",
      "woman",
      "princess",
      "guy"
    ],
    "answer": 3,
    "cn": "那是誰？ — 那個傢伙是肯的表哥，他很好笑。",
    "vocabIndex": 6
  },
  {
    "q": "Mr. and Mrs. Wang have three ______: two sons and one daughter. They all go to the same elementary school near their home.",
    "options": [
      "neighbors",
      "visitors",
      "children",
      "strangers"
    ],
    "answer": 2,
    "cn": "這些是誰？ — 這些小孩是我阿姨的，他們是我的表兄弟姊妹。",
    "vocabIndex": 7
  },
  {
    "q": "Mrs. Lee is our ______. She lives in the house next to ours, and she often gives us vegetables from her garden.",
    "options": [
      "stranger",
      "giant",
      "prince",
      "neighbor"
    ],
    "answer": 3,
    "cn": "這是誰？ — 這是我的鄰居陳先生，他住在隔壁。",
    "vocabIndex": 8
  },
  {
    "q": "We live in a quiet ______. There are many trees and a small park near our home, and the streets are clean and safe.",
    "options": [
      "stranger",
      "neighborhood",
      "teenager",
      "visitor"
    ],
    "answer": 1,
    "cn": "那些小孩是誰？ — 他們是我們社區的小孩，我們常常一起玩。",
    "vocabIndex": 9
  },
  {
    "q": "The museum had a special ______ yesterday. He came from Japan, looked at the pictures for two hours, and then went back to his hotel.",
    "options": [
      "visitor",
      "neighborhood",
      "baby",
      "queen"
    ],
    "answer": 0,
    "cn": "那是誰？ — 那是我們來自日本的訪客，她是艾美的朋友。",
    "vocabIndex": 10
  },
  {
    "q": "Don't open the door for a ______. If you don't know the person outside, call your mom or dad first.",
    "options": [
      "neighbor",
      "prince",
      "stranger",
      "baby"
    ],
    "answer": 2,
    "cn": "門口那個男人是誰？ — 我不知道，他是陌生人，不要開門。",
    "vocabIndex": 11
  },
  {
    "q": "The ______ lives in a big castle with his wife, the queen. He is the most important man in the country, and everyone listens to him.",
    "options": [
      "king",
      "princess",
      "stranger",
      "teenager"
    ],
    "answer": 0,
    "cn": "照片裡這是誰？ — 這是這個國家的國王，他住在一座大城堡裡。",
    "vocabIndex": 12
  },
  {
    "q": "The king's wife is the ______. She wears a beautiful dress, and she lives in the castle with the king and their children.",
    "options": [
      "prince",
      "queen",
      "giant",
      "neighbor"
    ],
    "answer": 1,
    "cn": "那是誰？ — 那是皇后，她是國王的太太。",
    "vocabIndex": 13
  },
  {
    "q": "The king and queen have one son. The young ______ is ten years old, and he will be the king of the country one day.",
    "options": [
      "princess",
      "queen",
      "woman",
      "prince"
    ],
    "answer": 3,
    "cn": "這是誰？ — 這是王子，他是國王和皇后的兒子。",
    "vocabIndex": 14
  },
  {
    "q": "The king has a beautiful daughter. The ______ loves to read, and she often walks in the castle garden with her mother, the queen.",
    "options": [
      "prince",
      "king",
      "princess",
      "man"
    ],
    "answer": 2,
    "cn": "那是誰？ — 那是公主，她是國王和皇后的女兒。",
    "vocabIndex": 15
  },
  {
    "q": "In the story, a ______ lives at the top of the mountain. He is as tall as a tree, and his shoes are as big as boats.",
    "options": [
      "baby",
      "giant",
      "kid",
      "girl"
    ],
    "answer": 1,
    "cn": "故事裡那是誰？ — 那是一個巨人，他非常非常高。",
    "vocabIndex": 16
  },
  {
    "q": "Don't be a ______! You can't swim, and the river is deep and fast today. Stay here with us on the beach.",
    "options": [
      "king",
      "visitor",
      "fool",
      "neighbor"
    ],
    "answer": 2,
    "cn": "故事裡這是誰？ — 這是一個傻子，他常常做蠢事。",
    "vocabIndex": 17
  },
  {
    "q": "My little sister is still a ______. She is only eight months old, so she can't walk or talk yet.",
    "options": [
      "baby",
      "teenager",
      "woman",
      "queen"
    ],
    "answer": 0,
    "cn": "麗莎的小妹妹幾歲？ — 她是個嬰兒，她一歲。",
    "vocabIndex": 18
  },
  {
    "q": "Every ______ under six can ride the bus for free, but boys and girls over six need to buy a ticket.",
    "options": [
      "man",
      "woman",
      "teenager",
      "child"
    ],
    "answer": 3,
    "cn": "林女士的兒子幾歲？ — 他是個小孩子，他六歲。",
    "vocabIndex": 19
  },
  {
    "q": "When my dad was a ______, he didn't have a cellphone or a computer. He played outside with his friends after school every day.",
    "options": [
      "kid",
      "girl",
      "woman",
      "princess"
    ],
    "answer": 0,
    "cn": "你表哥的小孩幾歲？ — 他的小孩們五歲和七歲。",
    "vocabIndex": 20
  },
  {
    "q": "My aunt had a baby last week. It is a ______, so they named him Tom and bought him a little blue hat.",
    "options": [
      "girl",
      "woman",
      "queen",
      "boy"
    ],
    "answer": 3,
    "cn": "艾美的弟弟幾歲？ — 那個男孩十歲。",
    "vocabIndex": 21
  },
  {
    "q": "There is a new ______ in our class. Her name is Amy, and she sits next to me. She has long black hair.",
    "options": [
      "boy",
      "man",
      "girl",
      "king"
    ],
    "answer": 2,
    "cn": "班的妹妹幾歲？ — 那個小女孩八歲。",
    "vocabIndex": 22
  },
  {
    "q": "My brother is fifteen years old, so he is a ______. He goes to junior high school and loves listening to pop music.",
    "options": [
      "baby",
      "teenager",
      "giant",
      "queen"
    ],
    "answer": 1,
    "cn": "你哥哥幾歲？ — 他十五歲，他是個青少年。",
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "girl": {
    "pos": "n.",
    "en_def": "a female child",
    "cn_def": "女孩"
  },
  "baby": {
    "pos": "n.",
    "en_def": "a very young child",
    "cn_def": "嬰兒"
  },
  "queen": {
    "pos": "n.",
    "en_def": "the woman who rules a country, or a king's wife",
    "cn_def": "皇后"
  },
  "man": {
    "pos": "n.",
    "en_def": "an adult male person",
    "cn_def": "男人"
  },
  "men": {
    "pos": "n.",
    "en_def": "more than one man",
    "cn_def": "男人們（複數）"
  },
  "women": {
    "pos": "n.",
    "en_def": "more than one woman",
    "cn_def": "女人們（複數）"
  },
  "girls": {
    "pos": "n.",
    "en_def": "a female child",
    "cn_def": "女孩"
  },
  "babies": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "嬰兒"
  },
  "woman": {
    "pos": "n.",
    "en_def": "an adult female person",
    "cn_def": "女人"
  },
  "boy": {
    "pos": "n.",
    "en_def": "a male child",
    "cn_def": "男孩"
  },
  "king": {
    "pos": "n.",
    "en_def": "the man who rules a country",
    "cn_def": "國王"
  },
  "boys": {
    "pos": "n.",
    "en_def": "a male child",
    "cn_def": "男孩"
  },
  "kings": {
    "pos": "n.",
    "en_def": "the man who rules a country",
    "cn_def": "國王"
  },
  "people": {
    "pos": "n.",
    "en_def": "more than one person",
    "cn_def": "人們"
  },
  "person": {
    "pos": "n.",
    "en_def": "one man, woman, or child",
    "cn_def": "人"
  },
  "children": {
    "pos": "n.",
    "en_def": "more than one child",
    "cn_def": "小孩們（複數）"
  },
  "giants": {
    "pos": "n.",
    "en_def": "a very big and tall person in stories",
    "cn_def": "巨人"
  },
  "princes": {
    "pos": "n.",
    "en_def": "the son of a king or queen",
    "cn_def": "王子"
  },
  "princess": {
    "pos": "n.",
    "en_def": "the daughter of a king or queen",
    "cn_def": "公主"
  },
  "guy": {
    "pos": "n.",
    "en_def": "a man or a boy",
    "cn_def": "傢伙"
  },
  "neighbors": {
    "pos": "n.",
    "en_def": "someone who lives next to you or near you",
    "cn_def": "鄰居"
  },
  "visitors": {
    "pos": "n.",
    "en_def": "someone who comes to see a person or a place",
    "cn_def": "訪客"
  },
  "strangers": {
    "pos": "n.",
    "en_def": "someone you do not know",
    "cn_def": "陌生人"
  },
  "stranger": {
    "pos": "n.",
    "en_def": "someone you do not know",
    "cn_def": "陌生人"
  },
  "giant": {
    "pos": "n.",
    "en_def": "a very big and tall person in stories",
    "cn_def": "巨人"
  },
  "prince": {
    "pos": "n.",
    "en_def": "the son of a king or queen",
    "cn_def": "王子"
  },
  "neighbor": {
    "pos": "n.",
    "en_def": "someone who lives next to you or near you",
    "cn_def": "鄰居"
  },
  "neighborhood": {
    "pos": "n.",
    "en_def": "the area around your home",
    "cn_def": "社區；鄰近地區"
  },
  "teenager": {
    "pos": "n.",
    "en_def": "a person who is 13 to 19 years old",
    "cn_def": "青少年"
  },
  "visitor": {
    "pos": "n.",
    "en_def": "someone who comes to see a person or a place",
    "cn_def": "訪客"
  },
  "kid": {
    "pos": "n.",
    "en_def": "a child",
    "cn_def": "小孩"
  },
  "fool": {
    "pos": "n.",
    "en_def": "a person who is not smart",
    "cn_def": "傻子"
  },
  "child": {
    "pos": "n.",
    "en_def": "a young boy or girl",
    "cn_def": "小孩"
  }
};

const EXTRA_GLOSSES = {};
