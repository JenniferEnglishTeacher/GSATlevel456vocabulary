// Unit 6 Quiz Data: Family 家庭（第06區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U06 - Family",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "father (dad, daddy)",
    "pos": "n.",
    "cn_def": "父親；爸爸",
    "en_def": "",
    "sentence": "Q: Who is that tall man? — A: He is my {{BLANK}}. I call him Dad.",
    "cn": "那位高高的男士是誰？ — 他是我的父親，我叫他爸爸。",
    "alts": [
      "dad",
      "daddy"
    ]
  },
  {
    "word": "mother (mom, mommy)",
    "pos": "n.",
    "cn_def": "母親；媽媽",
    "en_def": "",
    "sentence": "Q: Who is she? — A: She is Tom's {{BLANK}}. Tom calls her Mom.",
    "cn": "她是誰？ — 她是湯姆的母親，湯姆叫她媽媽。",
    "alts": [
      "mom",
      "mommy"
    ]
  },
  {
    "word": "grandfather (grandpa)",
    "pos": "n.",
    "cn_def": "祖父；爺爺",
    "en_def": "",
    "sentence": "Q: Who is that old man? — A: He is Amy and Ben's {{BLANK}}. He is their dad's father.",
    "cn": "那位老先生是誰？ — 他是艾美和班的爺爺，他是他們爸爸的父親。",
    "alts": [
      "grandpa"
    ]
  },
  {
    "word": "grandmother (grandma)",
    "pos": "n.",
    "cn_def": "祖母；奶奶",
    "en_def": "",
    "sentence": "Q: Who is she? Is she your teacher? — A: No, she isn't. She is my {{BLANK}}. She is my dad's mother.",
    "cn": "她是誰？她是你的老師嗎？ — 不，她不是。她是我的奶奶，她是我爸爸的母親。",
    "alts": [
      "grandma"
    ]
  },
  {
    "word": "uncle",
    "pos": "n.",
    "cn_def": "伯父；叔叔；舅舅",
    "en_def": "",
    "sentence": "Q: Who is he? — A: He is Lisa's {{BLANK}}. He is her father's brother.",
    "cn": "他是誰？ — 他是麗莎的叔叔，他是她爸爸的弟弟。"
  },
  {
    "word": "aunt",
    "pos": "n.",
    "cn_def": "伯母；阿姨；姑姑",
    "en_def": "",
    "sentence": "Q: Who is she? — A: She is Tom and Mary's {{BLANK}}. She is their mother's sister.",
    "cn": "她是誰？ — 她是湯姆和瑪麗的阿姨，她是他們媽媽的姊妹。"
  },
  {
    "word": "husband",
    "pos": "n.",
    "cn_def": "丈夫",
    "en_def": "",
    "sentence": "Q: Is Mr. Chen Ms. Lin's brother? — A: No, he isn't. He is Ms. Lin's {{BLANK}}.",
    "cn": "陳先生是林女士的哥哥嗎？ — 不，他不是。他是林女士的丈夫。"
  },
  {
    "word": "wife",
    "pos": "n.",
    "cn_def": "妻子",
    "en_def": "",
    "sentence": "Q: Is she your uncle's sister? — A: No, she isn't. She is my uncle's {{BLANK}}. She is my aunt.",
    "cn": "她是你叔叔的姊妹嗎？ — 不，她不是。她是我叔叔的妻子，她是我的嬸嬸。"
  },
  {
    "word": "married",
    "pos": "adj.",
    "cn_def": "已婚的",
    "en_def": "",
    "sentence": "Q: Is Ms. Wu your aunt? Is she Mr. Wu's wife? — A: Yes, she is. She is {{BLANK}} to Mr. Wu.",
    "cn": "吳女士是你的阿姨嗎？她是吳先生的太太嗎？ — 是的，她是。她嫁給了吳先生（她是已婚的）。"
  },
  {
    "word": "son",
    "pos": "n.",
    "cn_def": "兒子",
    "en_def": "",
    "sentence": "Q: Is that boy Mr. and Mrs. Wang's child? — A: Yes, he is. He is their only {{BLANK}}.",
    "cn": "那個男孩是王先生和王太太的小孩嗎？ — 是的，他是。他是他們唯一的兒子。"
  },
  {
    "word": "daughter",
    "pos": "n.",
    "cn_def": "女兒",
    "en_def": "",
    "sentence": "Q: Is that girl your child, Mrs. Lee? — A: No, she isn't. She is my sister's {{BLANK}}.",
    "cn": "李太太，那個女孩是您的小孩嗎？ — 不，她不是。她是我姊姊的女兒。"
  },
  {
    "word": "cousin",
    "pos": "n.",
    "cn_def": "堂表兄弟姊妹",
    "en_def": "",
    "sentence": "Q: Is Ben your brother? — A: No, he isn't. He is my {{BLANK}}. He is my uncle's son.",
    "cn": "班是你的兄弟嗎？ — 不，他不是。他是我的堂哥，他是我叔叔的兒子。"
  },
  {
    "word": "brother (brothers)",
    "pos": "n.",
    "cn_def": "兄弟",
    "en_def": "",
    "sentence": "Q: How many brothers do you have? — A: I have two {{BLANK}}. They are older than me.",
    "cn": "你有幾個兄弟？ — 我有兩個哥哥，他們比我大。"
  },
  {
    "word": "sister",
    "pos": "n.",
    "cn_def": "姊妹",
    "en_def": "",
    "sentence": "Q: How many sisters does Amy have? — A: She has one {{BLANK}}. Her name is Lily.",
    "cn": "艾美有幾個姊妹？ — 她有一個姊妹，她的名字叫莉莉。"
  },
  {
    "word": "parent (parents)",
    "pos": "n.",
    "cn_def": "父（母）親；父母",
    "en_def": "",
    "sentence": "Q: How many children do your parents have? — A: My {{BLANK}} have three children: my two sisters and me.",
    "cn": "你的父母有幾個小孩？ — 我的父母有三個小孩：我的兩個姊姊和我。"
  },
  {
    "word": "relative (relatives)",
    "pos": "n.",
    "cn_def": "親戚",
    "en_def": "",
    "sentence": "Q: How many relatives does your mom have in Tainan? — A: She has many {{BLANK}} there. We visit them at Chinese New Year.",
    "cn": "你媽媽在台南有幾個親戚？ — 她在那裡有很多親戚，我們過年時去拜訪他們。"
  },
  {
    "word": "born",
    "pos": "v.",
    "cn_def": "出生（be born）",
    "en_def": "",
    "sentence": "Q: How many children do Mr. and Mrs. Lin have? — A: They have two. Their baby was {{BLANK}} last month.",
    "cn": "林先生和林太太有幾個小孩？ — 他們有兩個，他們的寶寶上個月出生。"
  },
  {
    "word": "family",
    "pos": "n.",
    "cn_def": "家庭；家人",
    "en_def": "",
    "sentence": "Q: What does your family do on Sundays? — A: My {{BLANK}} goes hiking. We love the mountains.",
    "cn": "你的家人星期日做什麼？ — 我的家人去健行，我們很愛山。"
  },
  {
    "word": "live",
    "pos": "v.",
    "cn_def": "住",
    "en_def": "",
    "sentence": "Q: What do your grandparents do? — A: They are farmers. They {{BLANK}} in the country.",
    "cn": "你的祖父母做什麼工作？ — 他們是農夫，他們住在鄉下。"
  },
  {
    "word": "grow (grows)",
    "pos": "v.",
    "cn_def": "成長；長大",
    "en_def": "",
    "sentence": "Q: What does your son do? — A: He is a student now. He wants to be a doctor when he {{BLANK}} up.",
    "cn": "你的兒子做什麼？ — 他現在是學生，他長大後想當醫生。"
  }
];

const MCQS = [
  {
    "q": "Q: Who is that tall man? — A: He is my ______. I call him Dad.【父親；爸爸】",
    "options": [
      "father",
      "uncle",
      "son",
      "grandfather"
    ],
    "answer": 0,
    "cn": "那位高高的男士是誰？ — 他是我的父親，我叫他爸爸。",
    "vocabIndex": 0
  },
  {
    "q": "Q: Who is she? — A: She is Tom's ______. Tom calls her Mom.【母親；媽媽】",
    "options": [
      "wife",
      "father",
      "son",
      "mother"
    ],
    "answer": 3,
    "cn": "她是誰？ — 她是湯姆的母親，湯姆叫她媽媽。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Who is that old man? — A: He is Amy and Ben's ______. He is their dad's father.【祖父；爺爺】",
    "options": [
      "family",
      "grandfather",
      "wife",
      "daughter"
    ],
    "answer": 1,
    "cn": "那位老先生是誰？ — 他是艾美和班的爺爺，他是他們爸爸的父親。",
    "vocabIndex": 2
  },
  {
    "q": "Q: Who is she? Is she your teacher? — A: No, she isn't. She is my ______. She is my dad's mother.【祖母；奶奶】",
    "options": [
      "mother",
      "wife",
      "grandmother",
      "family"
    ],
    "answer": 2,
    "cn": "她是誰？她是你的老師嗎？ — 不，她不是。她是我的奶奶，她是我爸爸的母親。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Who is he? — A: He is Lisa's ______. He is her father's brother.【伯父；叔叔；舅舅】",
    "options": [
      "family",
      "uncle",
      "father",
      "son"
    ],
    "answer": 1,
    "cn": "他是誰？ — 他是麗莎的叔叔，他是她爸爸的弟弟。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Who is she? — A: She is Tom and Mary's ______. She is their mother's sister.【伯母；阿姨；姑姑】",
    "options": [
      "daughter",
      "son",
      "cousin",
      "aunt"
    ],
    "answer": 3,
    "cn": "她是誰？ — 她是湯姆和瑪麗的阿姨，她是他們媽媽的姊妹。",
    "vocabIndex": 5
  },
  {
    "q": "Q: Is Mr. Chen Ms. Lin's brother? — A: No, he isn't. He is Ms. Lin's ______.【丈夫】",
    "options": [
      "husband",
      "wife",
      "son",
      "uncle"
    ],
    "answer": 0,
    "cn": "陳先生是林女士的哥哥嗎？ — 不，他不是。他是林女士的丈夫。",
    "vocabIndex": 6
  },
  {
    "q": "Q: Is she your uncle's sister? — A: No, she isn't. She is my uncle's ______. She is my aunt.【妻子】",
    "options": [
      "son",
      "aunt",
      "wife",
      "uncle"
    ],
    "answer": 2,
    "cn": "她是你叔叔的姊妹嗎？ — 不，她不是。她是我叔叔的妻子，她是我的嬸嬸。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Is Ms. Wu your aunt? Is she Mr. Wu's wife? — A: Yes, she is. She is ______ to Mr. Wu.【已婚的】",
    "options": [
      "married",
      "surprised",
      "interested",
      "red"
    ],
    "answer": 0,
    "cn": "吳女士是你的阿姨嗎？她是吳先生的太太嗎？ — 是的，她是。她嫁給了吳先生（她是已婚的）。",
    "vocabIndex": 8
  },
  {
    "q": "Q: Is that boy Mr. and Mrs. Wang's child? — A: Yes, he is. He is their only ______.【兒子】",
    "options": [
      "cousin",
      "grandmother",
      "aunt",
      "son"
    ],
    "answer": 3,
    "cn": "那個男孩是王先生和王太太的小孩嗎？ — 是的，他是。他是他們唯一的兒子。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Is that girl your child, Mrs. Lee? — A: No, she isn't. She is my sister's ______.【女兒】",
    "options": [
      "son",
      "daughter",
      "family",
      "husband"
    ],
    "answer": 1,
    "cn": "李太太，那個女孩是您的小孩嗎？ — 不，她不是。她是我姊姊的女兒。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Is Ben your brother? — A: No, he isn't. He is my ______. He is my uncle's son.【堂表兄弟姊妹】",
    "options": [
      "uncle",
      "mother",
      "cousin",
      "husband"
    ],
    "answer": 2,
    "cn": "班是你的兄弟嗎？ — 不，他不是。他是我的堂哥，他是我叔叔的兒子。",
    "vocabIndex": 11
  },
  {
    "q": "Q: How many brothers do you have? — A: I have two ______. They are older than me.【兄弟】",
    "options": [
      "relatives",
      "brothers",
      "parents",
      "family"
    ],
    "answer": 1,
    "cn": "你有幾個兄弟？ — 我有兩個哥哥，他們比我大。",
    "vocabIndex": 12
  },
  {
    "q": "Q: How many sisters does Amy have? — A: She has one ______. Her name is Lily.【姊妹】",
    "options": [
      "wife",
      "son",
      "sister",
      "aunt"
    ],
    "answer": 2,
    "cn": "艾美有幾個姊妹？ — 她有一個姊妹，她的名字叫莉莉。",
    "vocabIndex": 13
  },
  {
    "q": "Q: How many children do your parents have? — A: My ______ have three children: my two sisters and me.【父（母）親；父母】",
    "options": [
      "relatives",
      "brothers",
      "sister",
      "parents"
    ],
    "answer": 3,
    "cn": "你的父母有幾個小孩？ — 我的父母有三個小孩：我的兩個姊姊和我。",
    "vocabIndex": 14
  },
  {
    "q": "Q: How many relatives does your mom have in Tainan? — A: She has many ______ there. We visit them at Chinese New Year.【親戚】",
    "options": [
      "relatives",
      "brothers",
      "parents",
      "cousin"
    ],
    "answer": 0,
    "cn": "你媽媽在台南有幾個親戚？ — 她在那裡有很多親戚，我們過年時去拜訪他們。",
    "vocabIndex": 15
  },
  {
    "q": "Q: How many children do Mr. and Mrs. Lin have? — A: They have two. Their baby was ______ last month.【出生（be born）】",
    "options": [
      "live",
      "grows",
      "draw",
      "born"
    ],
    "answer": 3,
    "cn": "林先生和林太太有幾個小孩？ — 他們有兩個，他們的寶寶上個月出生。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What does your family do on Sundays? — A: My ______ goes hiking. We love the mountains.【家庭；家人】",
    "options": [
      "husband",
      "family",
      "daughter",
      "wife"
    ],
    "answer": 1,
    "cn": "你的家人星期日做什麼？ — 我的家人去健行，我們很愛山。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What do your grandparents do? — A: They are farmers. They ______ in the country.【住】",
    "options": [
      "born",
      "grows",
      "live",
      "mind"
    ],
    "answer": 2,
    "cn": "你的祖父母做什麼工作？ — 他們是農夫，他們住在鄉下。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What does your son do? — A: He is a student now. He wants to be a doctor when he ______ up.【成長；長大】",
    "options": [
      "grows",
      "live",
      "born",
      "hates"
    ],
    "answer": 0,
    "cn": "你的兒子做什麼？ — 他現在是學生，他長大後想當醫生。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "interested": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "感興趣的"
  },
  "father": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "父親；爸爸"
  },
  "mother": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "母親；媽媽"
  },
  "grandfather": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "祖父；爺爺"
  },
  "grandmother": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "祖母；奶奶"
  },
  "uncle": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "伯父；叔叔；舅舅"
  },
  "aunt": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "伯母；阿姨；姑姑"
  },
  "husband": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "丈夫"
  },
  "wife": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "妻子"
  },
  "married": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "已婚的"
  },
  "son": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "兒子"
  },
  "daughter": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "女兒"
  },
  "cousin": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "堂表兄弟姊妹"
  },
  "brothers": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "兄弟"
  },
  "sister": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "姊妹"
  },
  "parents": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "父（母）親；父母"
  },
  "relatives": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "親戚"
  },
  "born": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "出生（be born）"
  },
  "family": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "家庭；家人"
  },
  "live": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "住"
  },
  "grows": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "成長；長大"
  },
  "red": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "紅色（的）"
  },
  "draw": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "畫圖"
  },
  "mind": {
    "pos": "n.",
    "en_def": "",
    "cn_def": "頭腦；心思"
  },
  "hates": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "討厭"
  },
  "surprised": {
    "pos": "adj.",
    "en_def": "",
    "cn_def": "感到驚訝的"
  }
};

const EXTRA_GLOSSES = {};
