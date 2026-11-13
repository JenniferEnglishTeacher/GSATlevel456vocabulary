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
    "en_def": "a man who has a child",
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
    "en_def": "a woman who has a child",
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
    "en_def": "the father of your father or mother",
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
    "en_def": "the mother of your father or mother",
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
    "en_def": "the brother of your father or mother",
    "sentence": "Q: Who is he? — A: He is Lisa's {{BLANK}}. He is her father's brother.",
    "cn": "他是誰？ — 他是麗莎的叔叔，他是她爸爸的弟弟。"
  },
  {
    "word": "aunt",
    "pos": "n.",
    "cn_def": "伯母；阿姨；姑姑",
    "en_def": "the sister of your father or mother",
    "sentence": "Q: Who is she? — A: She is Tom and Mary's {{BLANK}}. She is their mother's sister.",
    "cn": "她是誰？ — 她是湯姆和瑪麗的阿姨，她是他們媽媽的姊妹。"
  },
  {
    "word": "husband",
    "pos": "n.",
    "cn_def": "丈夫",
    "en_def": "the man a woman is married to",
    "sentence": "Q: Is Mr. Chen Ms. Lin's brother? — A: No, he isn't. He is Ms. Lin's {{BLANK}}.",
    "cn": "陳先生是林女士的哥哥嗎？ — 不，他不是。他是林女士的丈夫。"
  },
  {
    "word": "wife",
    "pos": "n.",
    "cn_def": "妻子",
    "en_def": "the woman a man is married to",
    "sentence": "Q: Is she your uncle's sister? — A: No, she isn't. She is my uncle's {{BLANK}}. She is my aunt.",
    "cn": "她是你叔叔的姊妹嗎？ — 不，她不是。她是我叔叔的妻子，她是我的嬸嬸。"
  },
  {
    "word": "married",
    "pos": "adj.",
    "cn_def": "已婚的",
    "en_def": "having a husband or a wife",
    "sentence": "Q: Is Ms. Wu your aunt? Is she Mr. Wu's wife? — A: Yes, she is. She is {{BLANK}} to Mr. Wu.",
    "cn": "吳女士是你的阿姨嗎？她是吳先生的太太嗎？ — 是的，她是。她嫁給了吳先生（她是已婚的）。"
  },
  {
    "word": "son",
    "pos": "n.",
    "cn_def": "兒子",
    "en_def": "someone's male child",
    "sentence": "Q: Is that boy Mr. and Mrs. Wang's child? — A: Yes, he is. He is their only {{BLANK}}.",
    "cn": "那個男孩是王先生和王太太的小孩嗎？ — 是的，他是。他是他們唯一的兒子。"
  },
  {
    "word": "daughter",
    "pos": "n.",
    "cn_def": "女兒",
    "en_def": "someone's female child",
    "sentence": "Q: Is that girl your child, Mrs. Lee? — A: No, she isn't. She is my sister's {{BLANK}}.",
    "cn": "李太太，那個女孩是您的小孩嗎？ — 不，她不是。她是我姊姊的女兒。"
  },
  {
    "word": "cousin",
    "pos": "n.",
    "cn_def": "堂表兄弟姊妹",
    "en_def": "the child of your uncle or aunt",
    "sentence": "Q: Is Ben your brother? — A: No, he isn't. He is my {{BLANK}}. He is my uncle's son.",
    "cn": "班是你的兄弟嗎？ — 不，他不是。他是我的堂哥，他是我叔叔的兒子。"
  },
  {
    "word": "brother (brothers)",
    "pos": "n.",
    "cn_def": "兄弟",
    "en_def": "a boy or man who has the same parents as you",
    "sentence": "Q: How many brothers do you have? — A: I have two {{BLANK}}. They are older than me.",
    "cn": "你有幾個兄弟？ — 我有兩個哥哥，他們比我大。"
  },
  {
    "word": "sister",
    "pos": "n.",
    "cn_def": "姊妹",
    "en_def": "a girl or woman who has the same parents as you",
    "sentence": "Q: How many sisters does Amy have? — A: She has one {{BLANK}}. Her name is Lily.",
    "cn": "艾美有幾個姊妹？ — 她有一個姊妹，她的名字叫莉莉。"
  },
  {
    "word": "parent (parents)",
    "pos": "n.",
    "cn_def": "父（母）親；父母",
    "en_def": "a father or a mother",
    "sentence": "Q: How many children do your parents have? — A: My {{BLANK}} have three children: my two sisters and me.",
    "cn": "你的父母有幾個小孩？ — 我的父母有三個小孩：我的兩個姊姊和我。"
  },
  {
    "word": "relative (relatives)",
    "pos": "n.",
    "cn_def": "親戚",
    "en_def": "a person in your family",
    "sentence": "Q: How many relatives does your mom have in Tainan? — A: She has many {{BLANK}} there. We visit them at Chinese New Year.",
    "cn": "你媽媽在台南有幾個親戚？ — 她在那裡有很多親戚，我們過年時去拜訪他們。"
  },
  {
    "word": "born",
    "pos": "v.",
    "cn_def": "出生（be born）",
    "en_def": "having come into the world as a baby",
    "sentence": "Q: How many children do Mr. and Mrs. Lin have? — A: They have two. Their baby was {{BLANK}} last month.",
    "cn": "林先生和林太太有幾個小孩？ — 他們有兩個，他們的寶寶上個月出生。"
  },
  {
    "word": "family",
    "pos": "n.",
    "cn_def": "家庭；家人",
    "en_def": "a group of people such as parents and their children",
    "sentence": "Q: What does your family do on Sundays? — A: My {{BLANK}} goes hiking. We love the mountains.",
    "cn": "你的家人星期日做什麼？ — 我的家人去健行，我們很愛山。"
  },
  {
    "word": "live",
    "pos": "v.",
    "cn_def": "住",
    "en_def": "to have your home in a place",
    "sentence": "Q: What do your grandparents do? — A: They are farmers. They {{BLANK}} in the country.",
    "cn": "你的祖父母做什麼工作？ — 他們是農夫，他們住在鄉下。"
  },
  {
    "word": "grow (grows)",
    "pos": "v.",
    "cn_def": "成長；長大",
    "en_def": "to get bigger or older",
    "sentence": "Q: What does your son do? — A: He is a student now. He wants to be a doctor when he {{BLANK}} up.",
    "cn": "你的兒子做什麼？ — 他現在是學生，他長大後想當醫生。"
  }
];

const MCQS = [
  {
    "q": "My ______ is a doctor, and my mother is a nurse. He works at the same hospital as she does.",
    "options": [
      "aunt",
      "sister",
      "father",
      "daughter"
    ],
    "answer": 2,
    "cn": "那位高高的男士是誰？ — 他是我的父親，我叫他爸爸。",
    "vocabIndex": 0
  },
  {
    "q": "Tom's ______ is a great cook. She makes breakfast for her husband and her three children every morning.",
    "options": [
      "father",
      "mother",
      "uncle",
      "son"
    ],
    "answer": 1,
    "cn": "她是誰？ — 她是湯姆的母親，湯姆叫她媽媽。",
    "vocabIndex": 1
  },
  {
    "q": "My mother's father is my ______. He is eighty years old, but he still rides his bike to the market.",
    "options": [
      "grandfather",
      "grandmother",
      "uncle",
      "cousin"
    ],
    "answer": 0,
    "cn": "那位老先生是誰？ — 他是艾美和班的爺爺，他是他們爸爸的父親。",
    "vocabIndex": 2
  },
  {
    "q": "My father's mother is my ______. She tells us stories about her life when we visit her on weekends.",
    "options": [
      "grandfather",
      "aunt",
      "sister",
      "grandmother"
    ],
    "answer": 3,
    "cn": "她是誰？她是你的老師嗎？ — 不，她不是。她是我的奶奶，她是我爸爸的母親。",
    "vocabIndex": 3
  },
  {
    "q": "My father's brother is my ______. He has a farm in Tainan, and we pick fruit there every summer.",
    "options": [
      "uncle",
      "aunt",
      "cousin",
      "grandfather"
    ],
    "answer": 0,
    "cn": "他是誰？ — 他是麗莎的叔叔，他是她爸爸的弟弟。",
    "vocabIndex": 4
  },
  {
    "q": "My mother's sister is my ______. She is not married, and she often takes me to the movies.",
    "options": [
      "uncle",
      "aunt",
      "grandmother",
      "daughter"
    ],
    "answer": 1,
    "cn": "她是誰？ — 她是湯姆和瑪麗的阿姨，她是他們媽媽的姊妹。",
    "vocabIndex": 5
  },
  {
    "q": "Mrs. Lin's ______ is a taxi driver. They got married thirty years ago, and he still buys her flowers every year.",
    "options": [
      "wife",
      "daughter",
      "sister",
      "husband"
    ],
    "answer": 3,
    "cn": "陳先生是林女士的哥哥嗎？ — 不，他不是。他是林女士的丈夫。",
    "vocabIndex": 6
  },
  {
    "q": "Mr. Wang and his ______ have a small restaurant. He cooks the food, and she takes the orders.",
    "options": [
      "husband",
      "son",
      "wife",
      "uncle"
    ],
    "answer": 2,
    "cn": "她是你叔叔的姊妹嗎？ — 不，她不是。她是我叔叔的妻子，她是我的嬸嬸。",
    "vocabIndex": 7
  },
  {
    "q": "My aunt is not ______. She doesn't have a husband, and she lives by herself in Taipei.",
    "options": [
      "sick",
      "old",
      "tall",
      "married"
    ],
    "answer": 3,
    "cn": "吳女士是你的阿姨嗎？她是吳先生的太太嗎？ — 是的，她是。她嫁給了吳先生（她是已婚的）。",
    "vocabIndex": 8
  },
  {
    "q": "Mr. and Mrs. Chen have one ______ and two daughters. The boy is the youngest child in the family.",
    "options": [
      "wife",
      "aunt",
      "son",
      "mother"
    ],
    "answer": 2,
    "cn": "那個男孩是王先生和王太太的小孩嗎？ — 是的，他是。他是他們唯一的兒子。",
    "vocabIndex": 9
  },
  {
    "q": "The Lins have a ______ and two sons. The girl is fifteen, and her brothers are twelve and ten.",
    "options": [
      "daughter",
      "husband",
      "uncle",
      "father"
    ],
    "answer": 0,
    "cn": "李太太，那個女孩是您的小孩嗎？ — 不，她不是。她是我姊姊的女兒。",
    "vocabIndex": 10
  },
  {
    "q": "My uncle's son is my ______. He is the same age as me, and we play together every Chinese New Year.",
    "options": [
      "brother",
      "cousin",
      "father",
      "grandfather"
    ],
    "answer": 1,
    "cn": "班是你的兄弟嗎？ — 不，他不是。他是我的堂哥，他是我叔叔的兒子。",
    "vocabIndex": 11
  },
  {
    "q": "I have two ______, but I don't have any sisters. The three of us boys share one big bedroom.",
    "options": [
      "aunts",
      "daughters",
      "mothers",
      "brothers"
    ],
    "answer": 3,
    "cn": "你有幾個兄弟？ — 我有兩個哥哥，他們比我大。",
    "vocabIndex": 12
  },
  {
    "q": "I have a brother and a ______. He is in senior high school, and she is still in elementary school.",
    "options": [
      "father",
      "husband",
      "sister",
      "uncle"
    ],
    "answer": 2,
    "cn": "艾美有幾個姊妹？ — 她有一個姊妹，她的名字叫莉莉。",
    "vocabIndex": 13
  },
  {
    "q": "My ______ both work in Taipei. My father is a bus driver, and my mother is a teacher.",
    "options": [
      "parents",
      "sons",
      "cousins",
      "sisters"
    ],
    "answer": 0,
    "cn": "你的父母有幾個小孩？ — 我的父母有三個小孩：我的兩個姊姊和我。",
    "vocabIndex": 14
  },
  {
    "q": "At Chinese New Year, all our ______ come to our house: grandparents, uncles, aunts, and cousins. We have a big dinner together.",
    "options": [
      "sons",
      "relatives",
      "husbands",
      "daughters"
    ],
    "answer": 1,
    "cn": "你媽媽在台南有幾個親戚？ — 她在那裡有很多親戚，我們過年時去拜訪他們。",
    "vocabIndex": 15
  },
  {
    "q": "I was ______ in Taipei in 2012, but my family moved to Tainan when I was only two years old.",
    "options": [
      "live",
      "grow",
      "born",
      "marry"
    ],
    "answer": 2,
    "cn": "林先生和林太太有幾個小孩？ — 他們有兩個，他們的寶寶上個月出生。",
    "vocabIndex": 16
  },
  {
    "q": "There are five people in my ______: my parents, my two sisters, and me. We live in an apartment in Taipei.",
    "options": [
      "family",
      "cousin",
      "husband",
      "relative"
    ],
    "answer": 0,
    "cn": "你的家人星期日做什麼？ — 我的家人去健行，我們很愛山。",
    "vocabIndex": 17
  },
  {
    "q": "My grandparents ______ in a small house in the country. They have been there for fifty years, and they love it.",
    "options": [
      "grow",
      "born",
      "marry",
      "live"
    ],
    "answer": 3,
    "cn": "你的祖父母做什麼工作？ — 他們是農夫，他們住在鄉下。",
    "vocabIndex": 18
  },
  {
    "q": "My little brother ______ very fast. His pants were long last year, but they are too short for him now.",
    "options": [
      "lives",
      "grows",
      "marries",
      "cooks"
    ],
    "answer": 1,
    "cn": "你的兒子做什麼？ — 他現在是學生，他長大後想當醫生。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "aunt": {
    "pos": "n.",
    "en_def": "the sister of your father or mother",
    "cn_def": "伯母；阿姨；姑姑"
  },
  "sister": {
    "pos": "n.",
    "en_def": "a girl or woman who has the same parents as you",
    "cn_def": "姊妹"
  },
  "father": {
    "pos": "n.",
    "en_def": "a man who has a child",
    "cn_def": "父親；爸爸"
  },
  "daughter": {
    "pos": "n.",
    "en_def": "someone's female child",
    "cn_def": "女兒"
  },
  "mother": {
    "pos": "n.",
    "en_def": "a woman who has a child",
    "cn_def": "母親；媽媽"
  },
  "uncle": {
    "pos": "n.",
    "en_def": "the brother of your father or mother",
    "cn_def": "伯父；叔叔；舅舅"
  },
  "son": {
    "pos": "n.",
    "en_def": "someone's male child",
    "cn_def": "兒子"
  },
  "grandfather": {
    "pos": "n.",
    "en_def": "the father of your father or mother",
    "cn_def": "祖父；爺爺"
  },
  "grandmother": {
    "pos": "n.",
    "en_def": "the mother of your father or mother",
    "cn_def": "祖母；奶奶"
  },
  "cousin": {
    "pos": "n.",
    "en_def": "the child of your uncle or aunt",
    "cn_def": "堂表兄弟姊妹"
  },
  "wife": {
    "pos": "n.",
    "en_def": "the woman a man is married to",
    "cn_def": "妻子"
  },
  "husband": {
    "pos": "n.",
    "en_def": "the man a woman is married to",
    "cn_def": "丈夫"
  },
  "sick": {
    "pos": "adj.",
    "en_def": "not feeling well; ill",
    "cn_def": "生病的"
  },
  "old": {
    "pos": "adj.",
    "en_def": "having lived for many years; not young",
    "cn_def": "老的"
  },
  "tall": {
    "pos": "adj.",
    "en_def": "high from head to foot",
    "cn_def": "高的"
  },
  "married": {
    "pos": "adj.",
    "en_def": "having a husband or a wife",
    "cn_def": "已婚的"
  },
  "brother": {
    "pos": "n.",
    "en_def": "a boy or man who has the same parents as you",
    "cn_def": "兄弟"
  },
  "aunts": {
    "pos": "n.",
    "en_def": "the sister of your father or mother",
    "cn_def": "伯母；阿姨；姑姑"
  },
  "daughters": {
    "pos": "n.",
    "en_def": "someone's female child",
    "cn_def": "女兒"
  },
  "mothers": {
    "pos": "n.",
    "en_def": "a woman who has a child",
    "cn_def": "母親；媽媽"
  },
  "brothers": {
    "pos": "n.",
    "en_def": "a boy or man who has the same parents as you",
    "cn_def": "兄弟"
  },
  "parents": {
    "pos": "n.",
    "en_def": "a father or a mother",
    "cn_def": "父（母）親；父母"
  },
  "sons": {
    "pos": "n.",
    "en_def": "someone's male child",
    "cn_def": "兒子"
  },
  "cousins": {
    "pos": "n.",
    "en_def": "the child of your uncle or aunt",
    "cn_def": "堂表兄弟姊妹"
  },
  "sisters": {
    "pos": "n.",
    "en_def": "a girl or woman who has the same parents as you",
    "cn_def": "姊妹"
  },
  "relatives": {
    "pos": "n.",
    "en_def": "a person in your family",
    "cn_def": "親戚"
  },
  "husbands": {
    "pos": "n.",
    "en_def": "the man a woman is married to",
    "cn_def": "丈夫"
  },
  "live": {
    "pos": "v.",
    "en_def": "to have your home in a place",
    "cn_def": "住"
  },
  "grow": {
    "pos": "v.",
    "en_def": "to get bigger or older",
    "cn_def": "成長；長大"
  },
  "born": {
    "pos": "v.",
    "en_def": "having come into the world as a baby",
    "cn_def": "出生（be born）"
  },
  "marry": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "結婚"
  },
  "family": {
    "pos": "n.",
    "en_def": "a group of people such as parents and their children",
    "cn_def": "家庭；家人"
  },
  "relative": {
    "pos": "n.",
    "en_def": "a person in your family",
    "cn_def": "親戚"
  },
  "lives": {
    "pos": "v.",
    "en_def": "to have your home in a place",
    "cn_def": "住"
  },
  "grows": {
    "pos": "v.",
    "en_def": "to get bigger or older",
    "cn_def": "成長；長大"
  },
  "marries": {
    "pos": "v.",
    "en_def": "",
    "cn_def": "結婚"
  },
  "cooks": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮飯；烹調"
  }
};

const EXTRA_GLOSSES = {};
