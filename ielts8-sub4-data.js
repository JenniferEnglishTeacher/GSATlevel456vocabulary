// Topic 8 Subunit 4 Quiz Data: Ancient Civilisations & Societies 古文明與社會
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T08 S04 - Ancient Civilisations & Societies 古文明與社會",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "civilisation",
    "pos": "n.",
    "cn_def": "文明",
    "en_def": "a developed society with cities, laws and writing",
    "sentence": "The Maya built a great {{BLANK}} in the rainforest, but many of their cities were empty by the year 900.",
    "cn": "馬雅人在雨林中建立了一個偉大的文明,但到了西元900年,他們的許多城市都已空無一人。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的;古老的",
    "en_def": "very old; from a long time ago",
    "sentence": "We visited an {{BLANK}} temple in Cambodia, and our guide said it was built almost a thousand years ago.",
    "cn": "我們參觀了柬埔寨的一座古老寺廟,導遊說它幾乎是一千年前建造的。"
  },
  {
    "word": "empire",
    "pos": "n.",
    "cn_def": "帝國",
    "en_def": "a group of countries ruled by one powerful ruler",
    "sentence": "The Roman {{BLANK}} once stretched from Britain to Egypt, so people in many lands used the same coins.",
    "cn": "羅馬帝國曾經從不列顛延伸到埃及,所以許多地方的人使用相同的錢幣。"
  },
  {
    "word": "emperor",
    "pos": "n.",
    "cn_def": "皇帝",
    "en_def": "the male ruler of an empire",
    "sentence": "The first {{BLANK}} of China connected many walls to protect his land, but thousands of workers died building them.",
    "cn": "中國的第一位皇帝把許多城牆連接起來保護他的領土,但數千名工人在建造時喪生。"
  },
  {
    "word": "dynasty",
    "pos": "n.",
    "cn_def": "王朝;朝代",
    "en_def": "a series of rulers from the same family",
    "sentence": "The Tang {{BLANK}} was famous for poetry and trade, and many foreigners lived in its capital city.",
    "cn": "唐朝以詩歌和貿易聞名,許多外國人居住在它的首都。"
  },
  {
    "word": "pharaoh",
    "pos": "n.",
    "cn_def": "法老",
    "en_def": "a king of ancient Egypt",
    "sentence": "The young {{BLANK}} died when he was only nineteen, but his tomb was filled with golden treasures.",
    "cn": "那位年輕的法老年僅十九歲就去世了,但他的墳墓裡裝滿了黃金寶藏。"
  },
  {
    "word": "monarch",
    "pos": "n.",
    "cn_def": "君主",
    "en_def": "a king or queen",
    "sentence": "The {{BLANK}} lived in a huge palace, while most ordinary people lived in small houses made of mud.",
    "cn": "君主住在一座巨大的宮殿裡,而大多數平民住在泥土做的小房子裡。"
  },
  {
    "word": "kingdom",
    "pos": "n.",
    "cn_def": "王國",
    "en_def": "a country ruled by a king or queen",
    "sentence": "The small {{BLANK}} grew rich from trade, so neighbouring rulers often tried to take control of it.",
    "cn": "這個小王國因貿易而富裕,所以鄰近的統治者常常試圖控制它。"
  },
  {
    "word": "reign",
    "pos": "n.",
    "cn_def": "統治期間;在位期",
    "en_def": "the period when a king or queen rules",
    "sentence": "During the queen's long {{BLANK}}, the country built many roads, and trade with other lands grew quickly.",
    "cn": "在女王漫長的統治期間,國家修建了許多道路,與其他地區的貿易也迅速成長。"
  },
  {
    "word": "city-state",
    "pos": "n.",
    "cn_def": "城邦",
    "en_def": "a city that governs itself like an independent country",
    "sentence": "Athens was a powerful {{BLANK}} in ancient Greece, and it had its own army, laws and coins.",
    "cn": "雅典是古希臘一個強大的城邦,它擁有自己的軍隊、法律和錢幣。"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民;市民",
    "en_def": "a person who belongs to a city or country and has rights",
    "sentence": "In ancient Athens, every male {{BLANK}} could vote, but women and foreigners were not allowed to take part.",
    "cn": "在古雅典,每位男性公民都可以投票,但女性和外國人不被允許參與。"
  },
  {
    "word": "democracy",
    "pos": "n.",
    "cn_def": "民主(制度)",
    "en_def": "a system where people choose their leaders by voting",
    "sentence": "The idea of {{BLANK}} began in ancient Greece, although only a small group of people could actually vote.",
    "cn": "民主的概念起源於古希臘,雖然實際上只有一小群人能投票。"
  },
  {
    "word": "republic",
    "pos": "n.",
    "cn_def": "共和國",
    "en_def": "a country with elected leaders and no king",
    "sentence": "Rome was a {{BLANK}} for nearly five hundred years, but later it was ruled by emperors.",
    "cn": "羅馬作為共和國將近五百年,但後來由皇帝統治。"
  },
  {
    "word": "senate",
    "pos": "n.",
    "cn_def": "元老院;參議院",
    "en_def": "a group of important people who make laws",
    "sentence": "The Roman {{BLANK}} met in a large building in the city centre, and its members argued about wars and taxes.",
    "cn": "羅馬元老院在市中心的一棟大建築裡開會,議員們爭論戰爭和稅收的問題。"
  },
  {
    "word": "aristocrat",
    "pos": "n.",
    "cn_def": "貴族",
    "en_def": "a person from a rich, noble family",
    "sentence": "The {{BLANK}} wore silk robes and gold rings, so everyone in the street knew he was an important man.",
    "cn": "那位貴族穿著絲綢長袍和金戒指,所以街上的每個人都知道他是個重要人物。"
  },
  {
    "word": "peasant",
    "pos": "n.",
    "cn_def": "農民;佃農",
    "en_def": "a poor farmer in the past",
    "sentence": "A {{BLANK}} worked in the fields from morning to night, but he had to give much of his harvest to the landowner.",
    "cn": "一位農民從早到晚在田裡工作,但他必須把大部分收成交給地主。"
  },
  {
    "word": "priest",
    "pos": "n.",
    "cn_def": "祭司;神職人員",
    "en_def": "a person who performs religious ceremonies",
    "sentence": "The {{BLANK}} climbed to the top of the temple each morning, and he watched the sky to predict the weather.",
    "cn": "祭司每天早上爬到神廟頂端,觀察天空來預測天氣。"
  },
  {
    "word": "deity",
    "pos": "n.",
    "cn_def": "神;神祇",
    "en_def": "a god or goddess",
    "sentence": "Each city in ancient Egypt had its own {{BLANK}}, and people built temples to ask for good harvests.",
    "cn": "古埃及的每個城市都有自己的神祇,人們建造神廟來祈求豐收。"
  },
  {
    "word": "worship",
    "pos": "v.",
    "cn_def": "崇拜;敬拜",
    "en_def": "to show respect and love to a god",
    "sentence": "Ancient farmers used to {{BLANK}} the sun, because they knew that their crops could not grow without it.",
    "cn": "古代農民過去會崇拜太陽,因為他們知道沒有它作物就無法生長。"
  },
  {
    "word": "ritual",
    "pos": "n.",
    "cn_def": "儀式",
    "en_def": "a ceremony that is always done in the same way",
    "sentence": "The {{BLANK}} took place every spring, and the whole village danced and shared food to welcome the new season.",
    "cn": "這個儀式每年春天舉行,全村的人一起跳舞並分享食物來迎接新的季節。"
  },
  {
    "word": "offering",
    "pos": "n.",
    "cn_def": "祭品;供品",
    "en_def": "a gift given to a god",
    "sentence": "People left food and flowers as an {{BLANK}} at the temple, because they hoped the gods would protect their families.",
    "cn": "人們把食物和花留在神廟作為供品,因為他們希望神明保佑他們的家人。"
  },
  {
    "word": "myth",
    "pos": "n.",
    "cn_def": "神話",
    "en_def": "an ancient story about gods and heroes",
    "sentence": "The Greek {{BLANK}} about a hero who fights a monster is still popular, and many films have retold it.",
    "cn": "那則關於英雄與怪物戰鬥的希臘神話至今仍很受歡迎,許多電影都重新講述過它。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "傳說",
    "en_def": "an old story that may be partly true",
    "sentence": "According to {{BLANK}}, a golden city lies hidden in the jungle, but explorers have never found it.",
    "cn": "根據傳說,有一座黃金城市隱藏在叢林裡,但探險家們從未找到它。"
  },
  {
    "word": "scribe",
    "pos": "n.",
    "cn_def": "抄寫員;書記",
    "en_def": "a person whose job was to write documents in the past",
    "sentence": "Only a {{BLANK}} could read and write in ancient Egypt, so these men were highly respected.",
    "cn": "在古埃及只有書記會讀寫,所以這些人非常受尊敬。"
  },
  {
    "word": "hieroglyphs",
    "pos": "n.",
    "cn_def": "象形文字",
    "en_def": "picture symbols used in ancient Egyptian writing",
    "sentence": "The walls of the tomb were covered with {{BLANK}}, and experts spent years learning what they meant.",
    "cn": "墳墓的牆上布滿了象形文字,專家們花了好幾年才弄懂它們的意思。"
  },
  {
    "word": "alphabet",
    "pos": "n.",
    "cn_def": "字母(表)",
    "en_def": "a set of letters used to write a language",
    "sentence": "The Phoenicians created an {{BLANK}} with only twenty-two letters, so writing became much easier to learn.",
    "cn": "腓尼基人創造了一套只有二十二個字母的字母表,所以書寫變得容易學習多了。"
  },
  {
    "word": "calendar",
    "pos": "n.",
    "cn_def": "曆法;日曆",
    "en_def": "a system for dividing the year into days and months",
    "sentence": "The Maya had a very accurate {{BLANK}}, because their priests studied the movements of the sun and the stars.",
    "cn": "馬雅人有非常精確的曆法,因為他們的祭司研究太陽和星星的運行。"
  },
  {
    "word": "astronomy",
    "pos": "n.",
    "cn_def": "天文學",
    "en_def": "the scientific study of stars and planets",
    "sentence": "Ancient Babylonians were skilled in {{BLANK}}, and they could predict when the moon would turn dark.",
    "cn": "古巴比倫人精通天文學,他們能預測月亮何時會變暗。"
  },
  {
    "word": "philosopher",
    "pos": "n.",
    "cn_def": "哲學家",
    "en_def": "a person who thinks deeply about life and truth",
    "sentence": "The Greek {{BLANK}} taught his students by asking questions, and his method is still used in classrooms today.",
    "cn": "那位希臘哲學家以提問的方式教導學生,而他的方法至今仍在教室中使用。"
  },
  {
    "word": "tribute",
    "pos": "n.",
    "cn_def": "貢品;進貢",
    "en_def": "payment given by a weaker ruler to a stronger one",
    "sentence": "Small kingdoms had to send {{BLANK}} to the emperor every year, so his palace was full of gold and silk.",
    "cn": "小王國每年都必須向皇帝送上貢品,所以他的宮殿裡堆滿了黃金和絲綢。"
  }
];

const MCQS = [
  {
    "q": "The Maya built a great _____ in the rainforest, but many of their cities were empty by the year 900.",
    "options": [
      "grandeur",
      "antler",
      "megalith",
      "civilisation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "We visited an _____ temple in Cambodia, and our guide said it was built almost a thousand years ago.",
    "options": [
      "ancient",
      "self-sufficient",
      "secular",
      "desolate"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The Roman _____ once stretched from Britain to Egypt, so people in many lands used the same coins.",
    "options": [
      "posterity",
      "fossil",
      "empire",
      "connotation"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The first _____ of China connected many walls to protect his land, but thousands of workers died building them.",
    "options": [
      "tenure",
      "emperor",
      "manuscript",
      "rampart"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The Tang _____ was famous for poetry and trade, and many foreigners lived in its capital city.",
    "options": [
      "ornament",
      "tomb",
      "splendour",
      "dynasty"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The young _____ died when he was only nineteen, but his tomb was filled with golden treasures.",
    "options": [
      "pharaoh",
      "subsistence",
      "palace",
      "sieve"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The _____ lived in a huge palace, while most ordinary people lived in small houses made of mud.",
    "options": [
      "quest",
      "monarch",
      "brick",
      "amphitheatre"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The small _____ grew rich from trade, so neighbouring rulers often tried to take control of it.",
    "options": [
      "dig",
      "hunter-gatherer",
      "kingdom",
      "DNA"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "During the queen's long _____, the country built many roads, and trade with other lands grew quickly.",
    "options": [
      "armour",
      "stratum",
      "uprising",
      "reign"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Athens was a powerful _____ in ancient Greece, and it had its own army, laws and coins.",
    "options": [
      "genome",
      "city-state",
      "connotation",
      "ancestry"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "In ancient Athens, every male _____ could vote, but women and foreigners were not allowed to take part.",
    "options": [
      "hoard",
      "merchant",
      "citizen",
      "warrior"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The idea of _____ began in ancient Greece, although only a small group of people could actually vote.",
    "options": [
      "democracy",
      "revolt",
      "curator",
      "mortar"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Rome was a _____ for nearly five hundred years, but later it was ruled by emperors.",
    "options": [
      "pottery",
      "flint",
      "republic",
      "dendrochronology"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The Roman _____ met in a large building in the city centre, and its members argued about wars and taxes.",
    "options": [
      "supremacy",
      "senate",
      "coffin",
      "residue"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The _____ wore silk robes and gold rings, so everyone in the street knew he was an important man.",
    "options": [
      "aristocrat",
      "urn",
      "rubble",
      "flint"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "A _____ worked in the fields from morning to night, but he had to give much of his harvest to the landowner.",
    "options": [
      "forerunner",
      "rite",
      "kiln",
      "peasant"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The _____ climbed to the top of the temple each morning, and he watched the sky to predict the weather.",
    "options": [
      "plough",
      "era",
      "priest",
      "downfall"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Each city in ancient Egypt had its own _____, and people built temples to ask for good harvests.",
    "options": [
      "deity",
      "pillar",
      "fortress",
      "pigment"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Ancient farmers used to _____ the sun, because they knew that their crops could not grow without it.",
    "options": [
      "recount",
      "worship",
      "overrun",
      "eclipse"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The _____ took place every spring, and the whole village danced and shared food to welcome the new season.",
    "options": [
      "burial",
      "decadence",
      "relic",
      "ritual"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "People left food and flowers as an _____ at the temple, because they hoped the gods would protect their families.",
    "options": [
      "incursion",
      "pirate",
      "offering",
      "remnant"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The Greek _____ about a hero who fights a monster is still popular, and many films have retold it.",
    "options": [
      "antecedent",
      "splendour",
      "majesty",
      "myth"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "According to _____, a golden city lies hidden in the jungle, but explorers have never found it.",
    "options": [
      "testament",
      "legend",
      "relic",
      "settlement"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Only a _____ could read and write in ancient Egypt, so these men were highly respected.",
    "options": [
      "scribe",
      "provenance",
      "feud",
      "pyramid"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The walls of the tomb were covered with _____, and experts spent years learning what they meant.",
    "options": [
      "excavation",
      "coin",
      "hieroglyphs",
      "kiln"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The Phoenicians created an _____ with only twenty-two letters, so writing became much easier to learn.",
    "options": [
      "dome",
      "obsidian",
      "arrowhead",
      "alphabet"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The Maya had a very accurate _____, because their priests studied the movements of the sun and the stars.",
    "options": [
      "calendar",
      "dome",
      "replica",
      "era"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Ancient Babylonians were skilled in _____, and they could predict when the moon would turn dark.",
    "options": [
      "mortar",
      "astronomy",
      "genesis",
      "coin"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The Greek _____ taught his students by asking questions, and his method is still used in classrooms today.",
    "options": [
      "stature",
      "apex",
      "parchment",
      "philosopher"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Small kingdoms had to send _____ to the emperor every year, so his palace was full of gold and silk.",
    "options": [
      "patron",
      "geologist",
      "tribute",
      "ruin"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "civilisation": {
    "pos": "n.",
    "en_def": "a developed society with cities, laws and writing",
    "cn_def": "文明"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a long time ago",
    "cn_def": "古代的;古老的"
  },
  "empire": {
    "pos": "n.",
    "en_def": "a group of countries ruled by one powerful ruler",
    "cn_def": "帝國"
  },
  "emperor": {
    "pos": "n.",
    "en_def": "the male ruler of an empire",
    "cn_def": "皇帝"
  },
  "dynasty": {
    "pos": "n.",
    "en_def": "a series of rulers from the same family",
    "cn_def": "王朝;朝代"
  },
  "pharaoh": {
    "pos": "n.",
    "en_def": "a king of ancient Egypt",
    "cn_def": "法老"
  },
  "monarch": {
    "pos": "n.",
    "en_def": "a king or queen",
    "cn_def": "君主"
  },
  "kingdom": {
    "pos": "n.",
    "en_def": "a country ruled by a king or queen",
    "cn_def": "王國"
  },
  "reign": {
    "pos": "n.",
    "en_def": "the period when a king or queen rules",
    "cn_def": "統治期間;在位期"
  },
  "city-state": {
    "pos": "n.",
    "en_def": "a city that governs itself like an independent country",
    "cn_def": "城邦"
  },
  "citizen": {
    "pos": "n.",
    "en_def": "a person who belongs to a city or country and has rights",
    "cn_def": "公民;市民"
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system where people choose their leaders by voting",
    "cn_def": "民主(制度)"
  },
  "republic": {
    "pos": "n.",
    "en_def": "a country with elected leaders and no king",
    "cn_def": "共和國"
  },
  "senate": {
    "pos": "n.",
    "en_def": "a group of important people who make laws",
    "cn_def": "元老院;參議院"
  },
  "aristocrat": {
    "pos": "n.",
    "en_def": "a person from a rich, noble family",
    "cn_def": "貴族"
  },
  "peasant": {
    "pos": "n.",
    "en_def": "a poor farmer in the past",
    "cn_def": "農民;佃農"
  },
  "priest": {
    "pos": "n.",
    "en_def": "a person who performs religious ceremonies",
    "cn_def": "祭司;神職人員"
  },
  "deity": {
    "pos": "n.",
    "en_def": "a god or goddess",
    "cn_def": "神;神祇"
  },
  "worship": {
    "pos": "v.",
    "en_def": "to show respect and love to a god",
    "cn_def": "崇拜;敬拜"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "a ceremony that is always done in the same way",
    "cn_def": "儀式"
  },
  "offering": {
    "pos": "n.",
    "en_def": "a gift given to a god",
    "cn_def": "祭品;供品"
  },
  "myth": {
    "pos": "n.",
    "en_def": "an ancient story about gods and heroes",
    "cn_def": "神話"
  },
  "legend": {
    "pos": "n.",
    "en_def": "an old story that may be partly true",
    "cn_def": "傳說"
  },
  "scribe": {
    "pos": "n.",
    "en_def": "a person whose job was to write documents in the past",
    "cn_def": "抄寫員;書記"
  },
  "hieroglyphs": {
    "pos": "n.",
    "en_def": "picture symbols used in ancient Egyptian writing",
    "cn_def": "象形文字"
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "a set of letters used to write a language",
    "cn_def": "字母(表)"
  },
  "calendar": {
    "pos": "n.",
    "en_def": "a system for dividing the year into days and months",
    "cn_def": "曆法;日曆"
  },
  "astronomy": {
    "pos": "n.",
    "en_def": "the scientific study of stars and planets",
    "cn_def": "天文學"
  },
  "philosopher": {
    "pos": "n.",
    "en_def": "a person who thinks deeply about life and truth",
    "cn_def": "哲學家"
  },
  "tribute": {
    "pos": "n.",
    "en_def": "payment given by a weaker ruler to a stronger one",
    "cn_def": "貢品;進貢"
  },
  "grandeur": {
    "pos": "n.",
    "en_def": "the quality of being very large and impressive",
    "cn_def": "宏偉;壯麗"
  },
  "antler": {
    "pos": "n.",
    "en_def": "a branch-like horn on the head of a deer",
    "cn_def": "鹿角"
  },
  "megalith": {
    "pos": "n.",
    "en_def": "a very large stone used in ancient monuments",
    "cn_def": "巨石"
  },
  "self-sufficient": {
    "pos": "adj.",
    "en_def": "able to provide everything you need without help",
    "cn_def": "自給自足的"
  },
  "secular": {
    "pos": "adj.",
    "en_def": "not connected with religion",
    "cn_def": "世俗的;非宗教的"
  },
  "desolate": {
    "pos": "adj.",
    "en_def": "empty and without people, often sad",
    "cn_def": "荒涼的;無人煙的"
  },
  "posterity": {
    "pos": "n.",
    "en_def": "all the people who will live in the future",
    "cn_def": "後代;後世"
  },
  "fossil": {
    "pos": "n.",
    "en_def": "the remains of an ancient plant or animal in rock",
    "cn_def": "化石"
  },
  "connotation": {
    "pos": "n.",
    "en_def": "an extra feeling or idea that a word suggests",
    "cn_def": "言外之意;含義"
  },
  "tenure": {
    "pos": "n.",
    "en_def": "the period when someone holds an important position",
    "cn_def": "任期;在職期間"
  },
  "manuscript": {
    "pos": "n.",
    "en_def": "a book or document written by hand",
    "cn_def": "手抄本;手稿"
  },
  "rampart": {
    "pos": "n.",
    "en_def": "a wide wall of earth or stone built for defence",
    "cn_def": "城牆;壁壘"
  },
  "ornament": {
    "pos": "n.",
    "en_def": "an object used for decoration",
    "cn_def": "裝飾品"
  },
  "tomb": {
    "pos": "n.",
    "en_def": "a large grave, often with a building over it",
    "cn_def": "墳墓;陵墓"
  },
  "splendour": {
    "pos": "n.",
    "en_def": "great beauty and impressive appearance",
    "cn_def": "壯麗;輝煌"
  },
  "subsistence": {
    "pos": "n.",
    "en_def": "the ability to survive with just enough food",
    "cn_def": "勉強維生;生存"
  },
  "palace": {
    "pos": "n.",
    "en_def": "a large, grand house of a king or queen",
    "cn_def": "宮殿"
  },
  "sieve": {
    "pos": "n.",
    "en_def": "a tool with a net that separates small things from soil",
    "cn_def": "篩子"
  },
  "quest": {
    "pos": "n.",
    "en_def": "a long search for something",
    "cn_def": "探索;追尋"
  },
  "brick": {
    "pos": "n.",
    "en_def": "a block of baked clay used for building",
    "cn_def": "磚塊"
  },
  "amphitheatre": {
    "pos": "n.",
    "en_def": "a round open building with rows of seats",
    "cn_def": "圓形劇場"
  },
  "dig": {
    "pos": "n.",
    "en_def": "an organised archaeological excavation",
    "cn_def": "考古挖掘(活動)"
  },
  "hunter-gatherer": {
    "pos": "n.",
    "en_def": "a person who lives by hunting animals and collecting plants",
    "cn_def": "狩獵採集者"
  },
  "dna": {
    "pos": "n.",
    "en_def": "the material in cells that carries genetic information",
    "cn_def": "去氧核糖核酸;DNA"
  },
  "armour": {
    "pos": "n.",
    "en_def": "metal clothing worn to protect the body in battle",
    "cn_def": "盔甲"
  },
  "stratum": {
    "pos": "n.",
    "en_def": "one layer of soil or rock (plural: strata)",
    "cn_def": "地層;層"
  },
  "uprising": {
    "pos": "n.",
    "en_def": "a situation where people fight against those in power",
    "cn_def": "起義;暴動"
  },
  "genome": {
    "pos": "n.",
    "en_def": "all the genetic information of a living thing",
    "cn_def": "基因組"
  },
  "ancestry": {
    "pos": "n.",
    "en_def": "the people your family came from in the past",
    "cn_def": "祖先;血統"
  },
  "hoard": {
    "pos": "n.",
    "en_def": "a hidden collection of valuable things",
    "cn_def": "窖藏;藏寶"
  },
  "merchant": {
    "pos": "n.",
    "en_def": "a person who buys and sells goods, often abroad",
    "cn_def": "商人"
  },
  "warrior": {
    "pos": "n.",
    "en_def": "a brave fighter, especially in ancient times",
    "cn_def": "戰士;勇士"
  },
  "revolt": {
    "pos": "n.",
    "en_def": "an attempt by people to fight against their rulers",
    "cn_def": "叛亂;起義"
  },
  "curator": {
    "pos": "n.",
    "en_def": "a person in charge of a museum collection",
    "cn_def": "(博物館)館長;策展人"
  },
  "mortar": {
    "pos": "n.",
    "en_def": "a mixture used to hold bricks or stones together",
    "cn_def": "灰漿;砂漿"
  },
  "pottery": {
    "pos": "n.",
    "en_def": "pots and dishes made from baked clay",
    "cn_def": "陶器"
  },
  "flint": {
    "pos": "n.",
    "en_def": "a hard grey stone that breaks into sharp pieces",
    "cn_def": "燧石;打火石"
  },
  "dendrochronology": {
    "pos": "n.",
    "en_def": "dating wood by counting and comparing tree rings",
    "cn_def": "樹輪年代學"
  },
  "supremacy": {
    "pos": "n.",
    "en_def": "the position of being the most powerful",
    "cn_def": "霸權;至高無上"
  },
  "coffin": {
    "pos": "n.",
    "en_def": "a box in which a dead body is buried",
    "cn_def": "棺材"
  },
  "residue": {
    "pos": "n.",
    "en_def": "a small amount of something that remains after a process",
    "cn_def": "殘留物;殘渣"
  },
  "urn": {
    "pos": "n.",
    "en_def": "a large decorated pot, often used to hold ashes",
    "cn_def": "甕;骨灰罈"
  },
  "rubble": {
    "pos": "n.",
    "en_def": "broken stones and bricks from a fallen building",
    "cn_def": "瓦礫;碎石"
  },
  "forerunner": {
    "pos": "n.",
    "en_def": "something that came before and led to something newer",
    "cn_def": "先驅;前身"
  },
  "rite": {
    "pos": "n.",
    "en_def": "a traditional ceremony",
    "cn_def": "儀式;典禮"
  },
  "kiln": {
    "pos": "n.",
    "en_def": "a very hot oven for baking pottery or bricks",
    "cn_def": "窯"
  },
  "plough": {
    "pos": "n.",
    "en_def": "a farm tool used to turn over the soil",
    "cn_def": "犁"
  },
  "era": {
    "pos": "n.",
    "en_def": "a long period of history",
    "cn_def": "時代;紀元"
  },
  "downfall": {
    "pos": "n.",
    "en_def": "the loss of power or success",
    "cn_def": "垮台;衰敗"
  },
  "pillar": {
    "pos": "n.",
    "en_def": "a tall column that supports a roof",
    "cn_def": "柱子"
  },
  "fortress": {
    "pos": "n.",
    "en_def": "a strong building used for military defence",
    "cn_def": "堡壘;要塞"
  },
  "pigment": {
    "pos": "n.",
    "en_def": "a natural powder used to make colour",
    "cn_def": "顏料;色素"
  },
  "recount": {
    "pos": "v.",
    "en_def": "to tell someone about something that happened",
    "cn_def": "敘述;講述"
  },
  "overrun": {
    "pos": "v.",
    "en_def": "to spread over a place in large numbers",
    "cn_def": "侵佔;蔓延"
  },
  "eclipse": {
    "pos": "v.",
    "en_def": "to become more important or successful than something else",
    "cn_def": "使黯然失色;超越"
  },
  "burial": {
    "pos": "n.",
    "en_def": "the act of putting a dead body in the ground",
    "cn_def": "埋葬;葬禮"
  },
  "decadence": {
    "pos": "n.",
    "en_def": "behaviour showing too much love of pleasure and luxury",
    "cn_def": "頹廢;墮落"
  },
  "relic": {
    "pos": "n.",
    "en_def": "an object that survives from the distant past",
    "cn_def": "遺物;古物"
  },
  "incursion": {
    "pos": "n.",
    "en_def": "a sudden attack into another country's land",
    "cn_def": "入侵;侵襲"
  },
  "pirate": {
    "pos": "n.",
    "en_def": "a person who attacks and robs ships at sea",
    "cn_def": "海盜"
  },
  "remnant": {
    "pos": "n.",
    "en_def": "a small part that remains of something larger",
    "cn_def": "殘餘;遺跡"
  },
  "antecedent": {
    "pos": "n.",
    "en_def": "something that existed before and influenced something later",
    "cn_def": "前身;先例"
  },
  "majesty": {
    "pos": "n.",
    "en_def": "impressive beauty and greatness",
    "cn_def": "雄偉;莊嚴"
  },
  "testament": {
    "pos": "n.",
    "en_def": "something that clearly shows that something is true",
    "cn_def": "證明;證據"
  },
  "settlement": {
    "pos": "n.",
    "en_def": "a place where people have come to live",
    "cn_def": "聚落;定居點"
  },
  "provenance": {
    "pos": "n.",
    "en_def": "the place where something comes from and its history",
    "cn_def": "出處;來源"
  },
  "feud": {
    "pos": "n.",
    "en_def": "a long, bitter argument between families or groups",
    "cn_def": "世仇;長期爭執"
  },
  "pyramid": {
    "pos": "n.",
    "en_def": "a huge stone building with four sloping sides",
    "cn_def": "金字塔"
  },
  "excavation": {
    "pos": "n.",
    "en_def": "the careful digging up of an old site",
    "cn_def": "發掘(工作);挖掘"
  },
  "coin": {
    "pos": "n.",
    "en_def": "a small round piece of metal used as money",
    "cn_def": "硬幣;錢幣"
  },
  "dome": {
    "pos": "n.",
    "en_def": "a round roof shaped like half a ball",
    "cn_def": "圓頂"
  },
  "obsidian": {
    "pos": "n.",
    "en_def": "black glass formed from volcanic rock",
    "cn_def": "黑曜石"
  },
  "arrowhead": {
    "pos": "n.",
    "en_def": "the sharp stone or metal point of an arrow",
    "cn_def": "箭頭"
  },
  "replica": {
    "pos": "n.",
    "en_def": "an exact copy of an object",
    "cn_def": "複製品"
  },
  "genesis": {
    "pos": "n.",
    "en_def": "the beginning or origin of something",
    "cn_def": "起源;開端"
  },
  "stature": {
    "pos": "n.",
    "en_def": "the importance or reputation of someone",
    "cn_def": "聲望;地位"
  },
  "apex": {
    "pos": "n.",
    "en_def": "the highest point of something",
    "cn_def": "頂點;巔峰"
  },
  "parchment": {
    "pos": "n.",
    "en_def": "writing material made from animal skin",
    "cn_def": "羊皮紙"
  },
  "patron": {
    "pos": "n.",
    "en_def": "a person who gives money to support artists or projects",
    "cn_def": "資助者;贊助人"
  },
  "geologist": {
    "pos": "n.",
    "en_def": "a scientist who studies rocks and the earth",
    "cn_def": "地質學家"
  },
  "ruin": {
    "pos": "n.",
    "en_def": "the broken parts left of an old building",
    "cn_def": "廢墟;遺跡"
  }
};

const EXTRA_GLOSSES = {};
