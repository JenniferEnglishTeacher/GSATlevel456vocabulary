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
    "en_def": "",
    "sentence": "Q: Who is that? — A: That {{BLANK}} is Tom's father. He is a doctor.",
    "cn": "那是誰？ — 那個男人是湯姆的爸爸，他是醫生。"
  },
  {
    "word": "men",
    "pos": "n.",
    "cn_def": "男人們（複數）",
    "en_def": "",
    "sentence": "Q: Who are those? — A: Those {{BLANK}} are Ben and Ken's uncles.",
    "cn": "那些是誰？ — 那些男人是班和肯的叔叔。"
  },
  {
    "word": "woman",
    "pos": "n.",
    "cn_def": "女人",
    "en_def": "",
    "sentence": "Q: Who is this? — A: This {{BLANK}} is my mom's friend, Ms. Lin.",
    "cn": "這是誰？ — 這位女士是我媽媽的朋友，林女士。"
  },
  {
    "word": "women",
    "pos": "n.",
    "cn_def": "女人們（複數）",
    "en_def": "",
    "sentence": "Q: Who are these? — A: These {{BLANK}} are Amy and Lisa's aunts.",
    "cn": "這些是誰？ — 這些女士是艾美和麗莎的阿姨。"
  },
  {
    "word": "person",
    "pos": "n.",
    "cn_def": "人",
    "en_def": "",
    "sentence": "Q: Who is that? — A: That {{BLANK}} is my English teacher. She is very kind.",
    "cn": "那是誰？ — 那個人是我的英文老師，她很親切。"
  },
  {
    "word": "people",
    "pos": "n.",
    "cn_def": "人們",
    "en_def": "",
    "sentence": "Q: Who are those? — A: Those {{BLANK}} are my dad's friends from work.",
    "cn": "那些是誰？ — 那些人是我爸爸的同事朋友。"
  },
  {
    "word": "guy",
    "pos": "n.",
    "cn_def": "傢伙",
    "en_def": "",
    "sentence": "Q: Who is that? — A: That {{BLANK}} is Ken's cousin. He is very funny.",
    "cn": "那是誰？ — 那個傢伙是肯的表哥，他很好笑。"
  },
  {
    "word": "children",
    "pos": "n.",
    "cn_def": "小孩們（複數）",
    "en_def": "",
    "sentence": "Q: Who are these? — A: These {{BLANK}} are my aunt's. They are my cousins.",
    "cn": "這些是誰？ — 這些小孩是我阿姨的，他們是我的表兄弟姊妹。"
  },
  {
    "word": "neighbor",
    "pos": "n.",
    "cn_def": "鄰居",
    "en_def": "",
    "sentence": "Q: Who is this? — A: This is my {{BLANK}}, Mr. Chen. He lives next door.",
    "cn": "這是誰？ — 這是我的鄰居陳先生，他住在隔壁。"
  },
  {
    "word": "neighborhood",
    "pos": "n.",
    "cn_def": "社區；鄰近地區",
    "en_def": "",
    "sentence": "Q: Who are those kids? — A: They are kids from my {{BLANK}}. We often play together.",
    "cn": "那些小孩是誰？ — 他們是我們社區的小孩，我們常常一起玩。"
  },
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "訪客",
    "en_def": "",
    "sentence": "Q: Who is that? — A: That is our {{BLANK}} from Japan. She is Amy's friend.",
    "cn": "那是誰？ — 那是我們來自日本的訪客，她是艾美的朋友。"
  },
  {
    "word": "stranger",
    "pos": "n.",
    "cn_def": "陌生人",
    "en_def": "",
    "sentence": "Q: Who is that man at the door? — A: I don't know. He is a {{BLANK}}. Don't open the door.",
    "cn": "門口那個男人是誰？ — 我不知道，他是陌生人，不要開門。"
  },
  {
    "word": "king",
    "pos": "n.",
    "cn_def": "國王",
    "en_def": "",
    "sentence": "Q: Who is this in the picture? — A: This is the {{BLANK}} of the country. He lives in a big castle.",
    "cn": "照片裡這是誰？ — 這是這個國家的國王，他住在一座大城堡裡。"
  },
  {
    "word": "queen",
    "pos": "n.",
    "cn_def": "皇后",
    "en_def": "",
    "sentence": "Q: Who is that? — A: That is the {{BLANK}}. She is the king's wife.",
    "cn": "那是誰？ — 那是皇后，她是國王的太太。"
  },
  {
    "word": "prince",
    "pos": "n.",
    "cn_def": "王子",
    "en_def": "",
    "sentence": "Q: Who is this? — A: This is the {{BLANK}}. He is the king and queen's son.",
    "cn": "這是誰？ — 這是王子，他是國王和皇后的兒子。"
  },
  {
    "word": "princess",
    "pos": "n.",
    "cn_def": "公主",
    "en_def": "",
    "sentence": "Q: Who is that? — A: That is the {{BLANK}}. She is the king and queen's daughter.",
    "cn": "那是誰？ — 那是公主，她是國王和皇后的女兒。"
  },
  {
    "word": "giant",
    "pos": "n.",
    "cn_def": "巨人",
    "en_def": "",
    "sentence": "Q: Who is that in the story? — A: That is a {{BLANK}}. He is very, very tall.",
    "cn": "故事裡那是誰？ — 那是一個巨人，他非常非常高。"
  },
  {
    "word": "fool",
    "pos": "n.",
    "cn_def": "傻子",
    "en_def": "",
    "sentence": "Q: Who is this in the story? — A: This is a {{BLANK}}. He often does stupid things.",
    "cn": "故事裡這是誰？ — 這是一個傻子，他常常做蠢事。"
  },
  {
    "word": "baby",
    "pos": "n.",
    "cn_def": "嬰兒",
    "en_def": "",
    "sentence": "Q: How old is Lisa's little sister? — A: She is a {{BLANK}}. She is one year old.",
    "cn": "麗莎的小妹妹幾歲？ — 她是個嬰兒，她一歲。"
  },
  {
    "word": "child",
    "pos": "n.",
    "cn_def": "小孩",
    "en_def": "",
    "sentence": "Q: How old is Ms. Lin's son? — A: He is a small {{BLANK}}. He is six years old.",
    "cn": "林女士的兒子幾歲？ — 他是個小孩子，他六歲。"
  },
  {
    "word": "kid",
    "pos": "n.",
    "cn_def": "小孩",
    "en_def": "",
    "sentence": "Q: How old are your cousin's kids? — A: His {{BLANK}} are five and seven years old.",
    "cn": "你表哥的小孩幾歲？ — 他的小孩們五歲和七歲。"
  },
  {
    "word": "boy",
    "pos": "n.",
    "cn_def": "男孩",
    "en_def": "",
    "sentence": "Q: How old is Amy's brother? — A: The {{BLANK}} is ten years old.",
    "cn": "艾美的弟弟幾歲？ — 那個男孩十歲。"
  },
  {
    "word": "girl",
    "pos": "n.",
    "cn_def": "女孩",
    "en_def": "",
    "sentence": "Q: How old is Ben's sister? — A: The little {{BLANK}} is eight years old.",
    "cn": "班的妹妹幾歲？ — 那個小女孩八歲。"
  },
  {
    "word": "teenager",
    "pos": "n.",
    "cn_def": "青少年",
    "en_def": "",
    "sentence": "Q: How old is your brother? — A: He is fifteen years old. He is a {{BLANK}}.",
    "cn": "你哥哥幾歲？ — 他十五歲，他是個青少年。"
  }
];

const MCQS = [
  {
    "q": "Q: Who is that? — A: That ______ is Tom's father. He is a doctor.【男人】",
    "options": [
      "prince",
      "children",
      "man",
      "giant"
    ],
    "answer": 2,
    "cn": "那是誰？ — 那個男人是湯姆的爸爸，他是醫生。",
    "vocabIndex": 0
  },
  {
    "q": "Q: Who are those? — A: Those ______ are Ben and Ken's uncles.【男人們（複數）】",
    "options": [
      "fool",
      "man",
      "baby",
      "men"
    ],
    "answer": 3,
    "cn": "那些是誰？ — 那些男人是班和肯的叔叔。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Who is this? — A: This ______ is my mom's friend, Ms. Lin.【女人】",
    "options": [
      "woman",
      "child",
      "giant",
      "neighbor"
    ],
    "answer": 0,
    "cn": "這是誰？ — 這位女士是我媽媽的朋友，林女士。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Who are these? — A: These ______ are Amy and Lisa's aunts.【女人們（複數）】",
    "options": [
      "baby",
      "women",
      "visitor",
      "woman"
    ],
    "answer": 1,
    "cn": "這些是誰？ — 這些女士是艾美和麗莎的阿姨。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Who is that? — A: That ______ is my English teacher. She is very kind.【人】",
    "options": [
      "person",
      "girl",
      "giant",
      "boy"
    ],
    "answer": 0,
    "cn": "那是誰？ — 那個人是我的英文老師，她很親切。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Who are those? — A: Those ______ are my dad's friends from work.【人們】",
    "options": [
      "women",
      "giant",
      "people",
      "woman"
    ],
    "answer": 2,
    "cn": "那些是誰？ — 那些人是我爸爸的同事朋友。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Who is that? — A: That ______ is Ken's cousin. He is very funny.【傢伙】",
    "options": [
      "teenager",
      "woman",
      "neighborhood",
      "guy"
    ],
    "answer": 3,
    "cn": "那是誰？ — 那個傢伙是肯的表哥，他很好笑。",
    "vocabIndex": 6
  },
  {
    "q": "Q: Who are these? — A: These ______ are my aunt's. They are my cousins.【小孩們（複數）】",
    "options": [
      "prince",
      "children",
      "giant",
      "woman"
    ],
    "answer": 1,
    "cn": "這些是誰？ — 這些小孩是我阿姨的，他們是我的表兄弟姊妹。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Who is this? — A: This is my ______, Mr. Chen. He lives next door.【鄰居】",
    "options": [
      "person",
      "men",
      "neighbor",
      "children"
    ],
    "answer": 2,
    "cn": "這是誰？ — 這是我的鄰居陳先生，他住在隔壁。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Who are those kids? — A: They are kids from my ______. We often play together.【社區；鄰近地區】",
    "options": [
      "visitor",
      "man",
      "women",
      "neighborhood"
    ],
    "answer": 3,
    "cn": "那些小孩是誰？ — 他們是我們社區的小孩，我們常常一起玩。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Who is that? — A: That is our ______ from Japan. She is Amy's friend.【訪客】",
    "options": [
      "man",
      "visitor",
      "woman",
      "boy"
    ],
    "answer": 1,
    "cn": "那是誰？ — 那是我們來自日本的訪客，她是艾美的朋友。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Who is that man at the door? — A: I don't know. He is a ______. Don't open the door.【陌生人】",
    "options": [
      "stranger",
      "guy",
      "baby",
      "girl"
    ],
    "answer": 0,
    "cn": "門口那個男人是誰？ — 我不知道，他是陌生人，不要開門。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Who is this in the picture? — A: This is the ______ of the country. He lives in a big castle.【國王】",
    "options": [
      "queen",
      "guy",
      "men",
      "king"
    ],
    "answer": 3,
    "cn": "照片裡這是誰？ — 這是這個國家的國王，他住在一座大城堡裡。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Who is that? — A: That is the ______. She is the king's wife.【皇后】",
    "options": [
      "women",
      "teenager",
      "queen",
      "neighborhood"
    ],
    "answer": 2,
    "cn": "那是誰？ — 那是皇后，她是國王的太太。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Who is this? — A: This is the ______. He is the king and queen's son.【王子】",
    "options": [
      "guy",
      "prince",
      "person",
      "girl"
    ],
    "answer": 1,
    "cn": "這是誰？ — 這是王子，他是國王和皇后的兒子。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Who is that? — A: That is the ______. She is the king and queen's daughter.【公主】",
    "options": [
      "princess",
      "kids",
      "teenager",
      "children"
    ],
    "answer": 0,
    "cn": "那是誰？ — 那是公主，她是國王和皇后的女兒。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Who is that in the story? — A: That is a ______. He is very, very tall.【巨人】",
    "options": [
      "stranger",
      "queen",
      "giant",
      "visitor"
    ],
    "answer": 2,
    "cn": "故事裡那是誰？ — 那是一個巨人，他非常非常高。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Who is this in the story? — A: This is a ______. He often does stupid things.【傻子】",
    "options": [
      "man",
      "neighborhood",
      "prince",
      "fool"
    ],
    "answer": 3,
    "cn": "故事裡這是誰？ — 這是一個傻子，他常常做蠢事。",
    "vocabIndex": 17
  },
  {
    "q": "Q: How old is Lisa's little sister? — A: She is a ______. She is one year old.【嬰兒】",
    "options": [
      "prince",
      "baby",
      "man",
      "neighborhood"
    ],
    "answer": 1,
    "cn": "麗莎的小妹妹幾歲？ — 她是個嬰兒，她一歲。",
    "vocabIndex": 18
  },
  {
    "q": "Q: How old is Ms. Lin's son? — A: He is a small ______. He is six years old.【小孩】",
    "options": [
      "child",
      "woman",
      "teenager",
      "person"
    ],
    "answer": 0,
    "cn": "林女士的兒子幾歲？ — 他是個小孩子，他六歲。",
    "vocabIndex": 19
  },
  {
    "q": "Q: How old are your cousin's kids? — A: His ______ are five and seven years old.【小孩】",
    "options": [
      "princess",
      "neighborhood",
      "woman",
      "kids"
    ],
    "answer": 3,
    "cn": "你表哥的小孩幾歲？ — 他的小孩們五歲和七歲。",
    "vocabIndex": 20
  },
  {
    "q": "Q: How old is Amy's brother? — A: The ______ is ten years old.【男孩】",
    "options": [
      "visitor",
      "man",
      "boy",
      "giant"
    ],
    "answer": 2,
    "cn": "艾美的弟弟幾歲？ — 那個男孩十歲。",
    "vocabIndex": 21
  },
  {
    "q": "Q: How old is Ben's sister? — A: The little ______ is eight years old.【女孩】",
    "options": [
      "woman",
      "girl",
      "men",
      "child"
    ],
    "answer": 1,
    "cn": "班的妹妹幾歲？ — 那個小女孩八歲。",
    "vocabIndex": 22
  },
  {
    "q": "Q: How old is your brother? — A: He is fifteen years old. He is a ______.【青少年】",
    "options": [
      "teenager",
      "women",
      "neighbor",
      "people"
    ],
    "answer": 0,
    "cn": "你哥哥幾歲？ — 他十五歲，他是個青少年。",
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "man": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "男人"
  },
  "men": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "男人們（複數）"
  },
  "woman": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "女人"
  },
  "women": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "女人們（複數）"
  },
  "person": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "人"
  },
  "people": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "人們"
  },
  "guy": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "傢伙"
  },
  "children": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小孩們（複數）"
  },
  "neighbor": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "鄰居"
  },
  "neighborhood": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "社區；鄰近地區"
  },
  "visitor": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "訪客"
  },
  "stranger": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "陌生人"
  },
  "king": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "國王"
  },
  "queen": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "皇后"
  },
  "prince": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "王子"
  },
  "princess": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "公主"
  },
  "giant": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "巨人"
  },
  "fool": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "傻子"
  },
  "baby": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "嬰兒"
  },
  "child": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小孩"
  },
  "kids": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "小孩"
  },
  "boy": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "男孩"
  },
  "girl": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "女孩"
  },
  "teenager": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "青少年"
  }
};

const EXTRA_GLOSSES = {};
