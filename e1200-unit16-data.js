// Unit 16 Quiz Data: School 學校（第16區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U16 - School",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "Chinese",
    "pos": "n.",
    "cn_def": "中文；國文",
    "en_def": "the language people speak in Taiwan and China; a school subject",
    "sentence": "Q: What class do you have on Monday morning? — A: I have {{BLANK}} class first.",
    "cn": "你星期一早上有什麼課？ — 我第一堂是國文課。"
  },
  {
    "word": "English",
    "pos": "n.",
    "cn_def": "英語",
    "en_def": "the language people speak in the U.S.A. and the U.K.",
    "sentence": "Q: What class does Amy have on Tuesday? — A: She has {{BLANK}} class with Mr. Smith.",
    "cn": "艾美星期二有什麼課？ — 她有史密斯老師的英文課。"
  },
  {
    "word": "math (mathematics)",
    "pos": "n.",
    "cn_def": "數學",
    "en_def": "the study of numbers and shapes",
    "sentence": "Q: What class do Tom and Ben have now? — A: They have {{BLANK}} class. They're counting numbers.",
    "cn": "湯姆和班現在上什麼課？ — 他們在上數學課，他們正在算數字。",
    "alts": [
      "mathematics"
    ]
  },
  {
    "word": "history",
    "pos": "n.",
    "cn_def": "歷史",
    "en_def": "the study of things that happened in the past",
    "sentence": "Q: What class does your brother have this afternoon? — A: He has {{BLANK}} class. He learns about the past.",
    "cn": "你哥哥今天下午有什麼課？ — 他有歷史課，他學習過去的事。"
  },
  {
    "word": "lesson (lessons)",
    "pos": "n.",
    "cn_def": "課",
    "en_def": "a time when you learn something with a teacher",
    "sentence": "Q: How many English {{BLANK}} do you have a week? — A: I have five.",
    "cn": "你一週有幾堂英文課？ — 我有五堂。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "a set of classes on one subject",
    "sentence": "Q: What {{BLANK}} does your mom take on Saturdays? — A: She takes a cooking class.",
    "cn": "你媽媽星期六上什麼課程？ — 她上烹飪課。"
  },
  {
    "word": "art",
    "pos": "n.",
    "cn_def": "美術",
    "en_def": "making pictures or beautiful things; a school subject",
    "sentence": "Q: What's your favorite subject? — A: My favorite subject is {{BLANK}}. I like to draw.",
    "cn": "你最喜歡的科目是什麼？ — 我最喜歡的科目是美術，我喜歡畫畫。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds that people sing or play; a school subject",
    "sentence": "Q: What's Lisa's favorite subject? — A: Her favorite subject is {{BLANK}}. She sings very well.",
    "cn": "麗莎最喜歡的科目是什麼？ — 她最喜歡的科目是音樂，她唱歌唱得很好。"
  },
  {
    "word": "PE (physical education)",
    "pos": "n.",
    "cn_def": "體育",
    "en_def": "a school class in which you do sports and exercise",
    "sentence": "Q: What's Tom's favorite subject? — A: His favorite subject is {{BLANK}}. He loves to run.",
    "cn": "湯姆最喜歡的科目是什麼？ — 他最喜歡的科目是體育，他很愛跑步。",
    "alts": [
      "physical education"
    ]
  },
  {
    "word": "science",
    "pos": "n.",
    "cn_def": "自然科學",
    "en_def": "the study of nature and how things work",
    "sentence": "Q: What's your favorite subject, Ben? — A: It's {{BLANK}}. I like to learn about plants and animals.",
    "cn": "班，你最喜歡的科目是什麼？ — 是自然科學，我喜歡學習植物和動物。"
  },
  {
    "word": "language (languages)",
    "pos": "n.",
    "cn_def": "語言",
    "en_def": "the words people use to speak and write, like English or Chinese",
    "sentence": "Q: What's Amy's favorite subject? — A: English. She can speak three {{BLANK}}.",
    "cn": "艾美最喜歡的科目是什麼？ — 英文。她會說三種語言。"
  },
  {
    "word": "dictionary",
    "pos": "n.",
    "cn_def": "字典",
    "en_def": "a book that tells you what words mean",
    "sentence": "Q: Can I borrow your {{BLANK}}? — A: Sure. Here you are.",
    "cn": "我可以借你的字典嗎？ — 當然，給你。"
  },
  {
    "word": "map",
    "pos": "n.",
    "cn_def": "地圖",
    "en_def": "a picture that shows where places are",
    "sentence": "Q: Can I borrow your {{BLANK}} of Taiwan? — A: Sorry, I'm using it now.",
    "cn": "我可以借你的臺灣地圖嗎？ — 抱歉，我現在正在用。"
  },
  {
    "word": "notebook",
    "pos": "n.",
    "cn_def": "筆記本",
    "en_def": "a small book of paper that you write in",
    "sentence": "Q: Can I borrow your {{BLANK}}? I want to copy the notes. — A: OK. Here you are.",
    "cn": "我可以借你的筆記本嗎？我想抄筆記。 — 好，給你。"
  },
  {
    "word": "paper",
    "pos": "n.",
    "cn_def": "紙",
    "en_def": "thin material that you write or draw on",
    "sentence": "Q: Can I borrow a piece of {{BLANK}}? — A: Sure. Here you are.",
    "cn": "我可以借一張紙嗎？ — 當然，給你。"
  },
  {
    "word": "book",
    "pos": "n.",
    "cn_def": "書",
    "en_def": "pages with words or pictures that you read",
    "sentence": "Q: Can I borrow this {{BLANK}}? — A: Yes, you can. Please bring it back on Friday.",
    "cn": "我可以借這本書嗎？ — 可以，請在星期五還回來。"
  },
  {
    "word": "chalk",
    "pos": "n.",
    "cn_def": "粉筆",
    "en_def": "a white or colored stick for writing on a blackboard",
    "sentence": "Q: Can I borrow some {{BLANK}}, Mr. Lee? — A: Sure. Write the answer on the blackboard.",
    "cn": "李老師，我可以借一些粉筆嗎？ — 當然，把答案寫在黑板上。"
  },
  {
    "word": "workbook",
    "pos": "n.",
    "cn_def": "作業本",
    "en_def": "a book with exercises for students to do",
    "sentence": "Q: Open your {{BLANK}} to page ten. — A: OK, Ms. Lin.",
    "cn": "把你的作業本翻到第十頁。 — 好的，林老師。"
  },
  {
    "word": "page",
    "pos": "n.",
    "cn_def": "頁",
    "en_def": "one side of a piece of paper in a book",
    "sentence": "Q: Turn to {{BLANK}} 25, please. — A: Page 25? OK.",
    "cn": "請翻到第 25 頁。 — 第 25 頁嗎？好。"
  },
  {
    "word": "blackboard",
    "pos": "n.",
    "cn_def": "黑板",
    "en_def": "a dark board on a classroom wall that teachers write on",
    "sentence": "Q: Look at the {{BLANK}}, everyone. — A: Yes, Mr. Lee.",
    "cn": "大家看黑板。 — 是的，李老師。"
  },
  {
    "word": "picture",
    "pos": "n.",
    "cn_def": "圖片；照片",
    "en_def": "a drawing, painting, or photo",
    "sentence": "Q: Look at the {{BLANK}} and tell me about it. — A: There are three cats in it.",
    "cn": "看這張圖片，然後跟我說說它。 — 圖裡有三隻貓。"
  },
  {
    "word": "listen",
    "pos": "v.",
    "cn_def": "聽",
    "en_def": "to try to hear something",
    "sentence": "Q: {{BLANK}} carefully, everyone. — A: Yes, Ms. Chen.",
    "cn": "大家仔細聽。 — 是的，陳老師。"
  },
  {
    "word": "repeat",
    "pos": "v.",
    "cn_def": "重複；跟著唸",
    "en_def": "to say or do something again",
    "sentence": "Q: {{BLANK}} after me: \"apple.\" — A: \"Apple.\"",
    "cn": "跟著我唸：「apple」。 — 「Apple。」"
  },
  {
    "word": "say",
    "pos": "v.",
    "cn_def": "說；講",
    "en_def": "to speak words",
    "sentence": "Q: {{BLANK}} \"Good morning\" to your teacher. — A: Good morning, Ms. Wang!",
    "cn": "跟你的老師說「早安」。 — 王老師早安！"
  },
  {
    "word": "read",
    "pos": "v.",
    "cn_def": "讀；唸",
    "en_def": "to look at words and understand them",
    "sentence": "Q: Please {{BLANK}} the story out loud, Tom. — A: OK, Ms. Lin.",
    "cn": "湯姆，請把這個故事大聲唸出來。 — 好的，林老師。"
  },
  {
    "word": "write",
    "pos": "v.",
    "cn_def": "寫",
    "en_def": "to make words with a pen or pencil",
    "sentence": "Q: {{BLANK}} your name on the paper, please. — A: OK. Can I use a pencil?",
    "cn": "請在紙上寫你的名字。 — 好，我可以用鉛筆嗎？"
  },
  {
    "word": "spell",
    "pos": "v.",
    "cn_def": "拼字",
    "en_def": "to say or write the letters of a word in the right order",
    "sentence": "Q: {{BLANK}} the word \"book,\" please. — A: B-O-O-K.",
    "cn": "請拼出 book 這個字。 — B-O-O-K。"
  },
  {
    "word": "draw",
    "pos": "v.",
    "cn_def": "畫",
    "en_def": "to make a picture with a pen or pencil",
    "sentence": "Q: {{BLANK}} a cat in your notebook. — A: OK. Can I color it, too?",
    "cn": "在你的筆記本裡畫一隻貓。 — 好，我也可以幫牠上色嗎？"
  },
  {
    "word": "answer",
    "pos": "v.",
    "cn_def": "回答",
    "en_def": "to say or write something when someone asks you a question",
    "sentence": "Q: Please {{BLANK}} my question, Ben. — A: Sorry, I don't know.",
    "cn": "班，請回答我的問題。 — 抱歉，我不知道。"
  },
  {
    "word": "talk",
    "pos": "v.",
    "cn_def": "說話",
    "en_def": "to say things to someone",
    "sentence": "Q: Don't {{BLANK}} in class, Amy. — A: Sorry, Mr. Wang.",
    "cn": "艾美，上課不要說話。 — 對不起，王老師。"
  },
  {
    "word": "pen (pens)",
    "pos": "n.",
    "cn_def": "筆",
    "en_def": "a thing for writing with ink",
    "sentence": "Q: What do you have in your pencil case? — A: I have two {{BLANK}}. One is red and one is blue.",
    "cn": "你的鉛筆盒裡有什麼？ — 我有兩支筆，一支紅色、一支藍色。"
  },
  {
    "word": "pencil",
    "pos": "n.",
    "cn_def": "鉛筆",
    "en_def": "a thin wooden stick for writing or drawing that you can erase",
    "sentence": "Q: What does Amy have in her pencil case? — A: She has a long {{BLANK}}.",
    "cn": "艾美的鉛筆盒裡有什麼？ — 她有一支長鉛筆。"
  },
  {
    "word": "eraser",
    "pos": "n.",
    "cn_def": "橡皮擦",
    "en_def": "a small piece of rubber that takes away pencil marks",
    "sentence": "Q: What does Tom have in his pencil case? — A: He has a small {{BLANK}}. It looks like a car.",
    "cn": "湯姆的鉛筆盒裡有什麼？ — 他有一個小橡皮擦，它看起來像一輛車。"
  },
  {
    "word": "ruler (rulers)",
    "pos": "n.",
    "cn_def": "尺",
    "en_def": "a long flat thing for drawing straight lines and measuring",
    "sentence": "Q: What do Ben and Lisa have in their pencil cases? — A: They have {{BLANK}}. They can draw straight lines.",
    "cn": "班和麗莎的鉛筆盒裡有什麼？ — 他們有尺，他們可以畫直線。"
  },
  {
    "word": "glue",
    "pos": "n.",
    "cn_def": "膠水",
    "en_def": "a sticky liquid for joining things together",
    "sentence": "Q: Do you have any {{BLANK}} in your pencil case? — A: Yes, I do. Here you are.",
    "cn": "你的鉛筆盒裡有膠水嗎？ — 有，給你。"
  },
  {
    "word": "marker",
    "pos": "n.",
    "cn_def": "麥克筆；簽字筆",
    "en_def": "a thick pen for writing on a board or coloring",
    "sentence": "Q: Does Lisa have a {{BLANK}} in her pencil case? — A: No, she doesn't. Ask Ben.",
    "cn": "麗莎的鉛筆盒裡有麥克筆嗎？ — 不，她沒有。問班吧。"
  },
  {
    "word": "elementary school",
    "pos": "n.",
    "cn_def": "小學",
    "en_def": "a school for children from about six to twelve years old",
    "sentence": "Q: What school does your little sister go to? — A: She goes to Da-an {{BLANK}}.",
    "cn": "你妹妹讀哪一所學校？ — 她讀大安國小。",
    "nblanks": 2
  },
  {
    "word": "junior high school",
    "pos": "n.",
    "cn_def": "國中",
    "en_def": "a school for students from about twelve to fifteen years old",
    "sentence": "Q: What school do you go to? — A: I go to Ren-ai {{BLANK}}.",
    "cn": "你讀哪一所學校？ — 我讀仁愛國中。",
    "nblanks": 3
  },
  {
    "word": "senior high school",
    "pos": "n.",
    "cn_def": "高中",
    "en_def": "a school for students from about fifteen to eighteen years old",
    "sentence": "Q: Where does your brother study? — A: He studies at a {{BLANK}} in Taipei.",
    "cn": "你哥哥在哪裡讀書？ — 他在臺北的一所高中讀書。",
    "nblanks": 3
  },
  {
    "word": "school",
    "pos": "n.",
    "cn_def": "學校",
    "en_def": "a place where children go to learn",
    "sentence": "Q: Where do you and your sister go in the morning? — A: We go to {{BLANK}}.",
    "cn": "你和你妹妹早上去哪裡？ — 我們去上學。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room in a school where students have lessons",
    "sentence": "Q: Where are the students? — A: They're in the {{BLANK}}. They're having English class.",
    "cn": "學生們在哪裡？ — 他們在教室裡，他們正在上英文課。"
  },
  {
    "word": "gym",
    "pos": "n.",
    "cn_def": "體育館",
    "en_def": "a big room or building for sports and exercise",
    "sentence": "Q: Where do you play basketball on rainy days? — A: We play in the {{BLANK}}.",
    "cn": "下雨天你們在哪裡打籃球？ — 我們在體育館打。"
  },
  {
    "word": "playground",
    "pos": "n.",
    "cn_def": "操場",
    "en_def": "an outside place at a school or park where children play",
    "sentence": "Q: Where does Ben run after school? — A: He runs on the {{BLANK}}.",
    "cn": "班放學後在哪裡跑步？ — 他在操場上跑步。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a place with many books that you can read or borrow",
    "sentence": "Q: Where does Amy read books? — A: She reads books in the {{BLANK}}. It's quiet there.",
    "cn": "艾美在哪裡看書？ — 她在圖書館看書，那裡很安靜。"
  },
  {
    "word": "seesaw",
    "pos": "n.",
    "cn_def": "蹺蹺板",
    "en_def": "a long board for two children; when one end goes up, the other goes down",
    "sentence": "Q: What do the two kids play on the playground? — A: They play on the {{BLANK}}.",
    "cn": "那兩個孩子在操場上玩什麼？ — 他們玩蹺蹺板。"
  },
  {
    "word": "slide",
    "pos": "n.",
    "cn_def": "溜滑梯",
    "en_def": "a thing in a playground that children climb up and slide down",
    "sentence": "Q: Where is your little brother? — A: He's on the {{BLANK}}. He's going down fast!",
    "cn": "你弟弟在哪裡？ — 他在溜滑梯上，他正快速滑下來！"
  },
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師",
    "en_def": "a person whose job is to teach students",
    "sentence": "Q: What does Mr. Lee do? — A: He is an English {{BLANK}}. He works at our school.",
    "cn": "李先生是做什麼的？ — 他是英文老師，他在我們學校工作。"
  },
  {
    "word": "student (students)",
    "pos": "n.",
    "cn_def": "學生",
    "en_def": "a person who studies at a school",
    "sentence": "Q: What do Amy and Ben do? — A: They are {{BLANK}}. They go to Ren-ai Junior High School.",
    "cn": "艾美和班是做什麼的？ — 他們是學生，他們讀仁愛國中。"
  },
  {
    "word": "classmate",
    "pos": "n.",
    "cn_def": "同學",
    "en_def": "a student who is in the same class as you",
    "sentence": "Q: Who is that boy? — A: He's my {{BLANK}}. We sit next to each other.",
    "cn": "那個男孩是誰？ — 他是我的同學，我們坐在彼此旁邊。"
  },
  {
    "word": "friend",
    "pos": "n.",
    "cn_def": "朋友",
    "en_def": "a person you know well and like",
    "sentence": "Q: Who do you play with after school? — A: I play with my best {{BLANK}}, Tina.",
    "cn": "你放學後和誰一起玩？ — 我和我最好的朋友蒂娜一起玩。"
  },
  {
    "word": "class",
    "pos": "n.",
    "cn_def": "班級",
    "en_def": "a group of students who learn together",
    "sentence": "Q: Is Amy in your class? — A: Yes. We are in the same {{BLANK}}.",
    "cn": "艾美和你同班嗎？ — 是的，我們在同一班。"
  },
  {
    "word": "teach (teaches)",
    "pos": "v.",
    "cn_def": "教",
    "en_def": "to help someone learn something",
    "sentence": "Q: What does Ms. Wang do? — A: She {{BLANK}} math.",
    "cn": "王老師是做什麼的？ — 她教數學。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習",
    "en_def": "to get to know something new",
    "sentence": "Q: What do you learn in English class? — A: We {{BLANK}} new words and songs.",
    "cn": "你們在英文課學什麼？ — 我們學新單字和歌曲。"
  },
  {
    "word": "study (studies)",
    "pos": "v.",
    "cn_def": "讀書；學習",
    "en_def": "to read and work to learn something",
    "sentence": "Q: When does Ben study? — A: He {{BLANK}} after dinner every day.",
    "cn": "班什麼時候讀書？ — 他每天晚餐後讀書。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋",
    "en_def": "to tell someone about something so they can understand it",
    "sentence": "Q: Does your teacher {{BLANK}} new words in English? — A: Yes, she does. She speaks slowly.",
    "cn": "你的老師用英文解釋新單字嗎？ — 是的，她會。她說得很慢。"
  },
  {
    "word": "ask",
    "pos": "v.",
    "cn_def": "問",
    "en_def": "to say a question to someone",
    "sentence": "Q: What do you do when you don't know the answer? — A: I {{BLANK}} my teacher.",
    "cn": "當你不知道答案時，你會怎麼做？ — 我會問我的老師。"
  },
  {
    "word": "understand",
    "pos": "v.",
    "cn_def": "了解；懂",
    "en_def": "to know what something means",
    "sentence": "Q: Do you {{BLANK}} this sentence? — A: No, I don't. Can you help me?",
    "cn": "你懂這個句子嗎？ — 不，我不懂。你可以幫我嗎？"
  },
  {
    "word": "practice (practices)",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again and again to get better at it",
    "sentence": "Q: What does Lisa do after school? — A: She {{BLANK}} the piano for an hour.",
    "cn": "麗莎放學後做什麼？ — 她練習彈鋼琴一個小時。"
  },
  {
    "word": "speak",
    "pos": "v.",
    "cn_def": "說（語言）",
    "en_def": "to say words; to be able to use a language",
    "sentence": "Q: Do your parents {{BLANK}} English at home? — A: No, they don't.",
    "cn": "你的爸媽在家說英文嗎？ — 不，他們不說。"
  },
  {
    "word": "mark (marks)",
    "pos": "v.",
    "cn_def": "打分數；做記號",
    "en_def": "to give a score to a student's work; to put a sign on something",
    "sentence": "Q: What does the teacher do after the test? — A: She {{BLANK}} our tests.",
    "cn": "考試後老師做什麼？ — 她批改我們的考卷。"
  },
  {
    "word": "pass",
    "pos": "v.",
    "cn_def": "通過；及格",
    "en_def": "to do well on a test",
    "sentence": "Q: Does Tom always {{BLANK}} his math tests? — A: Yes, he does. He studies hard.",
    "cn": "湯姆數學考試總是及格嗎？ — 是的，他總是及格。他很用功。"
  },
  {
    "word": "fail",
    "pos": "v.",
    "cn_def": "不及格；失敗",
    "en_def": "to not pass a test; to not do what you tried to do",
    "sentence": "Q: Why does Amy study so hard? — A: She doesn't want to {{BLANK}} the English test.",
    "cn": "艾美為什麼這麼用功？ — 她不想英文考試不及格。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to get ready for something",
    "sentence": "Q: What do you do before a test? — A: I {{BLANK}} for it. I read my notes again.",
    "cn": "考試前你做什麼？ — 我會準備，我會再讀一次筆記。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "功課；作業",
    "en_def": "school work that students do at home",
    "sentence": "Q: Do you have any {{BLANK}} today? — A: Yes, I do. I have a lot.",
    "cn": "你今天有功課嗎？ — 有，我有很多。"
  },
  {
    "word": "test",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "a set of questions to see how much you know",
    "sentence": "Q: Does Ben have a math {{BLANK}} tomorrow? — A: Yes, he does. He is studying now.",
    "cn": "班明天有數學考試嗎？ — 是的，他有。他現在正在讀書。"
  },
  {
    "word": "quiz",
    "pos": "n.",
    "cn_def": "小考",
    "en_def": "a short test",
    "sentence": "Q: Do we have an English {{BLANK}} today? — A: No, we don't. It's on Friday.",
    "cn": "我們今天有英文小考嗎？ — 不，沒有。在星期五。"
  },
  {
    "word": "grade (grades)",
    "pos": "n.",
    "cn_def": "成績；年級",
    "en_def": "a number or letter that shows how good your school work is; a school year",
    "sentence": "Q: Does Lisa get good {{BLANK}}? — A: Yes, she does. She is a smart girl.",
    "cn": "麗莎的成績好嗎？ — 是的，很好。她是個聰明的女孩。"
  },
  {
    "word": "question (questions)",
    "pos": "n.",
    "cn_def": "問題；疑問",
    "en_def": "something you ask when you want to know something",
    "sentence": "Q: Do you have any {{BLANK}}? — A: Yes. How do you say \"cat\" in Chinese?",
    "cn": "你們有任何問題嗎？ — 有。「cat」的中文怎麼說？"
  },
  {
    "word": "problem",
    "pos": "n.",
    "cn_def": "（須解決的）問題",
    "en_def": "something difficult that you need to fix or answer",
    "sentence": "Q: Does Tom have a {{BLANK}} with his homework? — A: Yes, he does. Let's help him.",
    "cn": "湯姆的功課有問題嗎？ — 是的，他有。我們來幫他吧。"
  },
  {
    "word": "example",
    "pos": "n.",
    "cn_def": "例子",
    "en_def": "one thing that shows what others of the same kind are like",
    "sentence": "Q: Does the teacher have an {{BLANK}} for this word? — A: Yes, she does. She writes it on the blackboard.",
    "cn": "老師有這個字的例子嗎？ — 是的，她有。她把它寫在黑板上。"
  },
  {
    "word": "exercise (exercises)",
    "pos": "n.",
    "cn_def": "練習；習題",
    "en_def": "a set of questions that helps you practice",
    "sentence": "Q: Do we have any {{BLANK}} in the workbook today? — A: Yes, we do. Please do them on page 12.",
    "cn": "我們今天作業本有習題嗎？ — 有，請做第 12 頁的。"
  },
  {
    "word": "knowledge",
    "pos": "n.",
    "cn_def": "知識",
    "en_def": "the things that a person knows",
    "sentence": "Q: Does your grandpa have a lot of {{BLANK}}? — A: Yes, he does. He reads many books.",
    "cn": "你爺爺很有知識嗎？ — 是的，他很有學問。他讀很多書。"
  },
  {
    "word": "story",
    "pos": "n.",
    "cn_def": "故事",
    "en_def": "words that tell about people and things that happened, real or not real",
    "sentence": "Q: Does Grandma have a good {{BLANK}} for us? — A: Yes, she does. It's about a little bear.",
    "cn": "奶奶有好故事要講給我們聽嗎？ — 是的，她有。是關於一隻小熊的。"
  },
  {
    "word": "envelope",
    "pos": "n.",
    "cn_def": "信封",
    "en_def": "a paper cover that you put a letter in",
    "sentence": "Q: Do you have an {{BLANK}}? — A: Yes, I do. Here you are.",
    "cn": "你有信封嗎？ — 有，給你。"
  },
  {
    "word": "letter",
    "pos": "n.",
    "cn_def": "信",
    "en_def": "a message you write on paper and send to someone",
    "sentence": "Q: Does Amy have a {{BLANK}} for me? — A: Yes, she does. It's from your pen pal.",
    "cn": "艾美有給我的信嗎？ — 是的，她有。是你筆友寄來的。"
  },
  {
    "word": "postcard",
    "pos": "n.",
    "cn_def": "明信片",
    "en_def": "a card with a picture that you mail without an envelope",
    "sentence": "Q: Do you have a {{BLANK}} from Japan? — A: Yes, I do. My aunt sends it to me.",
    "cn": "你有從日本寄來的明信片嗎？ — 有，我阿姨寄給我的。"
  },
  {
    "word": "glasses",
    "pos": "n.",
    "cn_def": "眼鏡",
    "en_def": "two pieces of glass you wear in front of your eyes to see better",
    "sentence": "Q: Does your teacher wear {{BLANK}}? — A: Yes, she does. She can't see well without them.",
    "cn": "你的老師戴眼鏡嗎？ — 是的，她戴。沒有眼鏡她看不清楚。"
  },
  {
    "word": "present",
    "pos": "n.",
    "cn_def": "禮物",
    "en_def": "something you give to someone; a gift",
    "sentence": "Q: Do you have a birthday {{BLANK}} for Ben? — A: Yes, I do. It's a new ball.",
    "cn": "你有給班的生日禮物嗎？ — 有，是一顆新球。"
  }
];

const MCQS = [
  {
    "q": "Q: What class do you have on Monday morning? — A: I have ______ class first.【中文；國文】",
    "options": [
      "Envelope",
      "Chinese",
      "Page",
      "Homework"
    ],
    "answer": 1,
    "cn": "你星期一早上有什麼課？ — 我第一堂是國文課。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What class does Amy have on Tuesday? — A: She has ______ class with Mr. Smith.【英語】",
    "options": [
      "Glue",
      "Library",
      "English",
      "Slide"
    ],
    "answer": 2,
    "cn": "艾美星期二有什麼課？ — 她有史密斯老師的英文課。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What class do Tom and Ben have now? — A: They have ______ class. They're counting numbers.【數學】",
    "options": [
      "library",
      "history",
      "pencil",
      "math"
    ],
    "answer": 3,
    "cn": "湯姆和班現在上什麼課？ — 他們在上數學課，他們正在算數字。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What class does your brother have this afternoon? — A: He has ______ class. He learns about the past.【歷史】",
    "options": [
      "history",
      "present",
      "eraser",
      "pencil"
    ],
    "answer": 0,
    "cn": "你哥哥今天下午有什麼課？ — 他有歷史課，他學習過去的事。",
    "vocabIndex": 3
  },
  {
    "q": "Q: How many English ______ do you have a week? — A: I have five.【課】",
    "options": [
      "students",
      "glasses",
      "lessons",
      "pens"
    ],
    "answer": 2,
    "cn": "你一週有幾堂英文課？ — 我有五堂。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What ______ does your mom take on Saturdays? — A: She takes a cooking class.【課程】",
    "options": [
      "pencil",
      "math",
      "junior high school",
      "course"
    ],
    "answer": 3,
    "cn": "你媽媽星期六上什麼課程？ — 她上烹飪課。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What's your favorite subject? — A: My favorite subject is ______. I like to draw.【美術】",
    "options": [
      "picture",
      "art",
      "envelope",
      "library"
    ],
    "answer": 1,
    "cn": "你最喜歡的科目是什麼？ — 我最喜歡的科目是美術，我喜歡畫畫。",
    "vocabIndex": 6
  },
  {
    "q": "Q: What's Lisa's favorite subject? — A: Her favorite subject is ______. She sings very well.【音樂】",
    "options": [
      "music",
      "dictionary",
      "knowledge",
      "notebook"
    ],
    "answer": 0,
    "cn": "麗莎最喜歡的科目是什麼？ — 她最喜歡的科目是音樂，她唱歌唱得很好。",
    "vocabIndex": 7
  },
  {
    "q": "Q: What's Tom's favorite subject? — A: His favorite subject is ______. He loves to run.【體育】",
    "options": [
      "Test",
      "PE",
      "Music",
      "History"
    ],
    "answer": 1,
    "cn": "湯姆最喜歡的科目是什麼？ — 他最喜歡的科目是體育，他很愛跑步。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What's your favorite subject, Ben? — A: It's ______. I like to learn about plants and animals.【自然科學】",
    "options": [
      "seesaw",
      "postcard",
      "science",
      "playground"
    ],
    "answer": 2,
    "cn": "班，你最喜歡的科目是什麼？ — 是自然科學，我喜歡學習植物和動物。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What's Amy's favorite subject? — A: English. She can speak three ______.【語言】",
    "options": [
      "class",
      "exercises",
      "rulers",
      "languages"
    ],
    "answer": 3,
    "cn": "艾美最喜歡的科目是什麼？ — 英文。她會說三種語言。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Can I borrow your ______? — A: Sure. Here you are.【字典】",
    "options": [
      "dictionary",
      "test",
      "letter",
      "chalk"
    ],
    "answer": 0,
    "cn": "我可以借你的字典嗎？ — 當然，給你。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Can I borrow your ______ of Taiwan? — A: Sorry, I'm using it now.【地圖】",
    "options": [
      "gym",
      "dictionary",
      "music",
      "map"
    ],
    "answer": 3,
    "cn": "我可以借你的臺灣地圖嗎？ — 抱歉，我現在正在用。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Can I borrow your ______? I want to copy the notes. — A: OK. Here you are.【筆記本】",
    "options": [
      "page",
      "history",
      "notebook",
      "teacher"
    ],
    "answer": 2,
    "cn": "我可以借你的筆記本嗎？我想抄筆記。 — 好，給你。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Can I borrow a piece of ______? — A: Sure. Here you are.【紙】",
    "options": [
      "glue",
      "paper",
      "story",
      "chalk"
    ],
    "answer": 1,
    "cn": "我可以借一張紙嗎？ — 當然，給你。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Can I borrow this ______? — A: Yes, you can. Please bring it back on Friday.【書】",
    "options": [
      "book",
      "course",
      "test",
      "elementary school"
    ],
    "answer": 0,
    "cn": "我可以借這本書嗎？ — 可以，請在星期五還回來。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Can I borrow some ______, Mr. Lee? — A: Sure. Write the answer on the blackboard.【粉筆】",
    "options": [
      "teacher",
      "blackboard",
      "chalk",
      "PE"
    ],
    "answer": 2,
    "cn": "李老師，我可以借一些粉筆嗎？ — 當然，把答案寫在黑板上。",
    "vocabIndex": 16
  },
  {
    "q": "Q: Open your ______ to page ten. — A: OK, Ms. Lin.【作業本】",
    "options": [
      "classmate",
      "Chinese",
      "chalk",
      "workbook"
    ],
    "answer": 3,
    "cn": "把你的作業本翻到第十頁。 — 好的，林老師。",
    "vocabIndex": 17
  },
  {
    "q": "Q: Turn to ______ 25, please. — A: Page 25? OK.【頁】",
    "options": [
      "page",
      "friend",
      "picture",
      "pencil"
    ],
    "answer": 0,
    "cn": "請翻到第 25 頁。 — 第 25 頁嗎？好。",
    "vocabIndex": 18
  },
  {
    "q": "Q: Look at the ______, everyone. — A: Yes, Mr. Lee.【黑板】",
    "options": [
      "book",
      "blackboard",
      "story",
      "page"
    ],
    "answer": 1,
    "cn": "大家看黑板。 — 是的，李老師。",
    "vocabIndex": 19
  },
  {
    "q": "Q: Look at the ______ and tell me about it. — A: There are three cats in it.【圖片；照片】",
    "options": [
      "history",
      "glue",
      "knowledge",
      "picture"
    ],
    "answer": 3,
    "cn": "看這張圖片，然後跟我說說它。 — 圖裡有三隻貓。",
    "vocabIndex": 20
  },
  {
    "q": "Q: ______ carefully, everyone. — A: Yes, Ms. Chen.【聽】",
    "options": [
      "Write",
      "Listen",
      "Prepare",
      "Ask"
    ],
    "answer": 1,
    "cn": "大家仔細聽。 — 是的，陳老師。",
    "vocabIndex": 21
  },
  {
    "q": "Q: ______ after me: \"apple.\" — A: \"Apple.\"【重複；跟著唸】",
    "options": [
      "Repeat",
      "Listen",
      "Answer",
      "Prepare"
    ],
    "answer": 0,
    "cn": "跟著我唸：「apple」。 — 「Apple。」",
    "vocabIndex": 22
  },
  {
    "q": "Q: ______ \"Good morning\" to your teacher. — A: Good morning, Ms. Wang!【說；講】",
    "options": [
      "Write",
      "Listen",
      "Say",
      "Prepare"
    ],
    "answer": 2,
    "cn": "跟你的老師說「早安」。 — 王老師早安！",
    "vocabIndex": 23
  },
  {
    "q": "Q: Please ______ the story out loud, Tom. — A: OK, Ms. Lin.【讀；唸】",
    "options": [
      "read",
      "listen",
      "say",
      "prepare"
    ],
    "answer": 0,
    "cn": "湯姆，請把這個故事大聲唸出來。 — 好的，林老師。",
    "vocabIndex": 24
  },
  {
    "q": "Q: ______ your name on the paper, please. — A: OK. Can I use a pencil?【寫】",
    "options": [
      "Read",
      "Fail",
      "Write",
      "Explain"
    ],
    "answer": 2,
    "cn": "請在紙上寫你的名字。 — 好，我可以用鉛筆嗎？",
    "vocabIndex": 25
  },
  {
    "q": "Q: ______ the word \"book,\" please. — A: B-O-O-K.【拼字】",
    "options": [
      "Write",
      "Spell",
      "Fail",
      "Repeat"
    ],
    "answer": 1,
    "cn": "請拼出 book 這個字。 — B-O-O-K。",
    "vocabIndex": 26
  },
  {
    "q": "Q: ______ a cat in your notebook. — A: OK. Can I color it, too?【畫】",
    "options": [
      "Say",
      "Explain",
      "Speak",
      "Draw"
    ],
    "answer": 3,
    "cn": "在你的筆記本裡畫一隻貓。 — 好，我也可以幫牠上色嗎？",
    "vocabIndex": 27
  },
  {
    "q": "Q: Please ______ my question, Ben. — A: Sorry, I don't know.【回答】",
    "options": [
      "answer",
      "write",
      "explain",
      "talk"
    ],
    "answer": 0,
    "cn": "班，請回答我的問題。 — 抱歉，我不知道。",
    "vocabIndex": 28
  },
  {
    "q": "Q: Don't ______ in class, Amy. — A: Sorry, Mr. Wang.【說話】",
    "options": [
      "speak",
      "talk",
      "spell",
      "explain"
    ],
    "answer": 1,
    "cn": "艾美，上課不要說話。 — 對不起，王老師。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What do you have in your pencil case? — A: I have two ______. One is red and one is blue.【筆】",
    "options": [
      "grades",
      "glasses",
      "students",
      "pens"
    ],
    "answer": 3,
    "cn": "你的鉛筆盒裡有什麼？ — 我有兩支筆，一支紅色、一支藍色。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What does Amy have in her pencil case? — A: She has a long ______.【鉛筆】",
    "options": [
      "test",
      "PE",
      "pencil",
      "math"
    ],
    "answer": 2,
    "cn": "艾美的鉛筆盒裡有什麼？ — 她有一支長鉛筆。",
    "vocabIndex": 31
  },
  {
    "q": "Q: What does Tom have in his pencil case? — A: He has a small ______. It looks like a car.【橡皮擦】",
    "options": [
      "letter",
      "eraser",
      "dictionary",
      "chalk"
    ],
    "answer": 1,
    "cn": "湯姆的鉛筆盒裡有什麼？ — 他有一個小橡皮擦，它看起來像一輛車。",
    "vocabIndex": 32
  },
  {
    "q": "Q: What do Ben and Lisa have in their pencil cases? — A: They have ______. They can draw straight lines.【尺】",
    "options": [
      "class",
      "languages",
      "exercises",
      "rulers"
    ],
    "answer": 3,
    "cn": "班和麗莎的鉛筆盒裡有什麼？ — 他們有尺，他們可以畫直線。",
    "vocabIndex": 33
  },
  {
    "q": "Q: Do you have any ______ in your pencil case? — A: Yes, I do. Here you are.【膠水】",
    "options": [
      "glue",
      "course",
      "English",
      "example"
    ],
    "answer": 0,
    "cn": "你的鉛筆盒裡有膠水嗎？ — 有，給你。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Does Lisa have a ______ in her pencil case? — A: No, she doesn't. Ask Ben.【麥克筆；簽字筆】",
    "options": [
      "course",
      "junior high school",
      "marker",
      "Chinese"
    ],
    "answer": 2,
    "cn": "麗莎的鉛筆盒裡有麥克筆嗎？ — 不，她沒有。問班吧。",
    "vocabIndex": 35
  },
  {
    "q": "Q: What school does your little sister go to? — A: She goes to Da-an ______.【小學】",
    "options": [
      "classroom",
      "elementary school",
      "test",
      "teacher"
    ],
    "answer": 1,
    "cn": "你妹妹讀哪一所學校？ — 她讀大安國小。",
    "vocabIndex": 36
  },
  {
    "q": "Q: What school do you go to? — A: I go to Ren-ai ______.【國中】",
    "options": [
      "junior high school",
      "gym",
      "chalk",
      "dictionary"
    ],
    "answer": 0,
    "cn": "你讀哪一所學校？ — 我讀仁愛國中。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Where does your brother study? — A: He studies at a ______ in Taipei.【高中】",
    "options": [
      "knowledge",
      "history",
      "senior high school",
      "picture"
    ],
    "answer": 2,
    "cn": "你哥哥在哪裡讀書？ — 他在臺北的一所高中讀書。",
    "vocabIndex": 38
  },
  {
    "q": "Q: Where do you and your sister go in the morning? — A: We go to ______.【學校】",
    "options": [
      "eraser",
      "dictionary",
      "workbook",
      "school"
    ],
    "answer": 3,
    "cn": "你和你妹妹早上去哪裡？ — 我們去上學。",
    "vocabIndex": 39
  },
  {
    "q": "Q: Where are the students? — A: They're in the ______. They're having English class.【教室】",
    "options": [
      "envelope",
      "classroom",
      "classmate",
      "problem"
    ],
    "answer": 1,
    "cn": "學生們在哪裡？ — 他們在教室裡，他們正在上英文課。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Where do you play basketball on rainy days? — A: We play in the ______.【體育館】",
    "options": [
      "music",
      "course",
      "gym",
      "senior high school"
    ],
    "answer": 2,
    "cn": "下雨天你們在哪裡打籃球？ — 我們在體育館打。",
    "vocabIndex": 41
  },
  {
    "q": "Q: Where does Ben run after school? — A: He runs on the ______.【操場】",
    "options": [
      "quiz",
      "picture",
      "classroom",
      "playground"
    ],
    "answer": 3,
    "cn": "班放學後在哪裡跑步？ — 他在操場上跑步。",
    "vocabIndex": 42
  },
  {
    "q": "Q: Where does Amy read books? — A: She reads books in the ______. It's quiet there.【圖書館】",
    "options": [
      "library",
      "homework",
      "example",
      "art"
    ],
    "answer": 0,
    "cn": "艾美在哪裡看書？ — 她在圖書館看書，那裡很安靜。",
    "vocabIndex": 43
  },
  {
    "q": "Q: What do the two kids play on the playground? — A: They play on the ______.【蹺蹺板】",
    "options": [
      "library",
      "letter",
      "music",
      "seesaw"
    ],
    "answer": 3,
    "cn": "那兩個孩子在操場上玩什麼？ — 他們玩蹺蹺板。",
    "vocabIndex": 44
  },
  {
    "q": "Q: Where is your little brother? — A: He's on the ______. He's going down fast!【溜滑梯】",
    "options": [
      "dictionary",
      "postcard",
      "slide",
      "test"
    ],
    "answer": 2,
    "cn": "你弟弟在哪裡？ — 他在溜滑梯上，他正快速滑下來！",
    "vocabIndex": 45
  },
  {
    "q": "Q: What does Mr. Lee do? — A: He is an English ______. He works at our school.【老師】",
    "options": [
      "slide",
      "teacher",
      "problem",
      "book"
    ],
    "answer": 1,
    "cn": "李先生是做什麼的？ — 他是英文老師，他在我們學校工作。",
    "vocabIndex": 46
  },
  {
    "q": "Q: What do Amy and Ben do? — A: They are ______. They go to Ren-ai Junior High School.【學生】",
    "options": [
      "students",
      "questions",
      "grades",
      "lessons"
    ],
    "answer": 0,
    "cn": "艾美和班是做什麼的？ — 他們是學生，他們讀仁愛國中。",
    "vocabIndex": 47
  },
  {
    "q": "Q: Who is that boy? — A: He's my ______. We sit next to each other.【同學】",
    "options": [
      "history",
      "eraser",
      "classroom",
      "classmate"
    ],
    "answer": 3,
    "cn": "那個男孩是誰？ — 他是我的同學，我們坐在彼此旁邊。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Who do you play with after school? — A: I play with my best ______, Tina.【朋友】",
    "options": [
      "story",
      "slide",
      "friend",
      "marker"
    ],
    "answer": 2,
    "cn": "你放學後和誰一起玩？ — 我和我最好的朋友蒂娜一起玩。",
    "vocabIndex": 49
  },
  {
    "q": "Q: Is Amy in your class? — A: Yes. We are in the same ______.【班級】",
    "options": [
      "exercises",
      "class",
      "grades",
      "questions"
    ],
    "answer": 1,
    "cn": "艾美和你同班嗎？ — 是的，我們在同一班。",
    "vocabIndex": 50
  },
  {
    "q": "Q: What does Ms. Wang do? — A: She ______ math.【教】",
    "options": [
      "teaches",
      "pass",
      "practices",
      "marks"
    ],
    "answer": 0,
    "cn": "王老師是做什麼的？ — 她教數學。",
    "vocabIndex": 51
  },
  {
    "q": "Q: What do you learn in English class? — A: We ______ new words and songs.【學習】",
    "options": [
      "explain",
      "speak",
      "listen",
      "learn"
    ],
    "answer": 3,
    "cn": "你們在英文課學什麼？ — 我們學新單字和歌曲。",
    "vocabIndex": 52
  },
  {
    "q": "Q: When does Ben study? — A: He ______ after dinner every day.【讀書；學習】",
    "options": [
      "pass",
      "studies",
      "marks",
      "practices"
    ],
    "answer": 1,
    "cn": "班什麼時候讀書？ — 他每天晚餐後讀書。",
    "vocabIndex": 53
  },
  {
    "q": "Q: Does your teacher ______ new words in English? — A: Yes, she does. She speaks slowly.【解釋】",
    "options": [
      "read",
      "write",
      "explain",
      "prepare"
    ],
    "answer": 2,
    "cn": "你的老師用英文解釋新單字嗎？ — 是的，她會。她說得很慢。",
    "vocabIndex": 54
  },
  {
    "q": "Q: What do you do when you don't know the answer? — A: I ______ my teacher.【問】",
    "options": [
      "ask",
      "say",
      "fail",
      "write"
    ],
    "answer": 0,
    "cn": "當你不知道答案時，你會怎麼做？ — 我會問我的老師。",
    "vocabIndex": 55
  },
  {
    "q": "Q: Do you ______ this sentence? — A: No, I don't. Can you help me?【了解；懂】",
    "options": [
      "draw",
      "understand",
      "explain",
      "write"
    ],
    "answer": 1,
    "cn": "你懂這個句子嗎？ — 不，我不懂。你可以幫我嗎？",
    "vocabIndex": 56
  },
  {
    "q": "Q: What does Lisa do after school? — A: She ______ the piano for an hour.【練習】",
    "options": [
      "pass",
      "studies",
      "practices",
      "marks"
    ],
    "answer": 2,
    "cn": "麗莎放學後做什麼？ — 她練習彈鋼琴一個小時。",
    "vocabIndex": 57
  },
  {
    "q": "Q: Do your parents ______ English at home? — A: No, they don't.【說（語言）】",
    "options": [
      "draw",
      "explain",
      "say",
      "speak"
    ],
    "answer": 3,
    "cn": "你的爸媽在家說英文嗎？ — 不，他們不說。",
    "vocabIndex": 58
  },
  {
    "q": "Q: What does the teacher do after the test? — A: She ______ our tests.【打分數；做記號】",
    "options": [
      "marks",
      "practices",
      "studies",
      "pass"
    ],
    "answer": 0,
    "cn": "考試後老師做什麼？ — 她批改我們的考卷。",
    "vocabIndex": 59
  },
  {
    "q": "Q: Does Tom always ______ his math tests? — A: Yes, he does. He studies hard.【通過；及格】",
    "options": [
      "studies",
      "practices",
      "marks",
      "pass"
    ],
    "answer": 3,
    "cn": "湯姆數學考試總是及格嗎？ — 是的，他總是及格。他很用功。",
    "vocabIndex": 60
  },
  {
    "q": "Q: Why does Amy study so hard? — A: She doesn't want to ______ the English test.【不及格；失敗】",
    "options": [
      "read",
      "fail",
      "say",
      "prepare"
    ],
    "answer": 1,
    "cn": "艾美為什麼這麼用功？ — 她不想英文考試不及格。",
    "vocabIndex": 61
  },
  {
    "q": "Q: What do you do before a test? — A: I ______ for it. I read my notes again.【準備】",
    "options": [
      "listen",
      "explain",
      "prepare",
      "draw"
    ],
    "answer": 2,
    "cn": "考試前你做什麼？ — 我會準備，我會再讀一次筆記。",
    "vocabIndex": 62
  },
  {
    "q": "Q: Do you have any ______ today? — A: Yes, I do. I have a lot.【功課；作業】",
    "options": [
      "homework",
      "Chinese",
      "school",
      "junior high school"
    ],
    "answer": 0,
    "cn": "你今天有功課嗎？ — 有，我有很多。",
    "vocabIndex": 63
  },
  {
    "q": "Q: Does Ben have a math ______ tomorrow? — A: Yes, he does. He is studying now.【考試】",
    "options": [
      "example",
      "PE",
      "test",
      "math"
    ],
    "answer": 2,
    "cn": "班明天有數學考試嗎？ — 是的，他有。他現在正在讀書。",
    "vocabIndex": 64
  },
  {
    "q": "Q: Do we have an English ______ today? — A: No, we don't. It's on Friday.【小考】",
    "options": [
      "quiz",
      "friend",
      "school",
      "junior high school"
    ],
    "answer": 0,
    "cn": "我們今天有英文小考嗎？ — 不，沒有。在星期五。",
    "vocabIndex": 65
  },
  {
    "q": "Q: Does Lisa get good ______? — A: Yes, she does. She is a smart girl.【成績；年級】",
    "options": [
      "lessons",
      "pens",
      "students",
      "grades"
    ],
    "answer": 3,
    "cn": "麗莎的成績好嗎？ — 是的，很好。她是個聰明的女孩。",
    "vocabIndex": 66
  },
  {
    "q": "Q: Do you have any ______? — A: Yes. How do you say \"cat\" in Chinese?【問題；疑問】",
    "options": [
      "class",
      "questions",
      "rulers",
      "exercises"
    ],
    "answer": 1,
    "cn": "你們有任何問題嗎？ — 有。「cat」的中文怎麼說？",
    "vocabIndex": 67
  },
  {
    "q": "Q: Does Tom have a ______ with his homework? — A: Yes, he does. Let's help him.【（須解決的）問題】",
    "options": [
      "problem",
      "playground",
      "story",
      "quiz"
    ],
    "answer": 0,
    "cn": "湯姆的功課有問題嗎？ — 是的，他有。我們來幫他吧。",
    "vocabIndex": 68
  },
  {
    "q": "Q: Does the teacher have an ______ for this word? — A: Yes, she does. She writes it on the blackboard.【例子】",
    "options": [
      "school",
      "PE",
      "history",
      "example"
    ],
    "answer": 3,
    "cn": "老師有這個字的例子嗎？ — 是的，她有。她把它寫在黑板上。",
    "vocabIndex": 69
  },
  {
    "q": "Q: Do we have any ______ in the workbook today? — A: Yes, we do. Please do them on page 12.【練習；習題】",
    "options": [
      "grades",
      "exercises",
      "class",
      "glasses"
    ],
    "answer": 1,
    "cn": "我們今天作業本有習題嗎？ — 有，請做第 12 頁的。",
    "vocabIndex": 70
  },
  {
    "q": "Q: Does your grandpa have a lot of ______? — A: Yes, he does. He reads many books.【知識】",
    "options": [
      "gym",
      "senior high school",
      "knowledge",
      "page"
    ],
    "answer": 2,
    "cn": "你爺爺很有知識嗎？ — 是的，他很有學問。他讀很多書。",
    "vocabIndex": 71
  },
  {
    "q": "Q: Does Grandma have a good ______ for us? — A: Yes, she does. It's about a little bear.【故事】",
    "options": [
      "seesaw",
      "story",
      "school",
      "math"
    ],
    "answer": 1,
    "cn": "奶奶有好故事要講給我們聽嗎？ — 是的，她有。是關於一隻小熊的。",
    "vocabIndex": 72
  },
  {
    "q": "Q: Do you have an ______? — A: Yes, I do. Here you are.【信封】",
    "options": [
      "elementary school",
      "library",
      "science",
      "envelope"
    ],
    "answer": 3,
    "cn": "你有信封嗎？ — 有，給你。",
    "vocabIndex": 73
  },
  {
    "q": "Q: Does Amy have a ______ for me? — A: Yes, she does. It's from your pen pal.【信】",
    "options": [
      "letter",
      "chalk",
      "senior high school",
      "pencil"
    ],
    "answer": 0,
    "cn": "艾美有給我的信嗎？ — 是的，她有。是你筆友寄來的。",
    "vocabIndex": 74
  },
  {
    "q": "Q: Do you have a ______ from Japan? — A: Yes, I do. My aunt sends it to me.【明信片】",
    "options": [
      "art",
      "workbook",
      "postcard",
      "classmate"
    ],
    "answer": 2,
    "cn": "你有從日本寄來的明信片嗎？ — 有，我阿姨寄給我的。",
    "vocabIndex": 75
  },
  {
    "q": "Q: Does your teacher wear ______? — A: Yes, she does. She can't see well without them.【眼鏡】",
    "options": [
      "glasses",
      "grades",
      "languages",
      "lessons"
    ],
    "answer": 0,
    "cn": "你的老師戴眼鏡嗎？ — 是的，她戴。沒有眼鏡她看不清楚。",
    "vocabIndex": 76
  },
  {
    "q": "Q: Do you have a birthday ______ for Ben? — A: Yes, I do. It's a new ball.【禮物】",
    "options": [
      "playground",
      "blackboard",
      "present",
      "junior high school"
    ],
    "answer": 2,
    "cn": "你有給班的生日禮物嗎？ — 有，是一顆新球。",
    "vocabIndex": 77
  }
];

const LOOKUP = {
  "music": {
    "pos": "n.",
    "en_def": "sounds that people sing or play and that are nice to hear",
    "cn_def": "音樂"
  },
  "draw": {
    "pos": "v.",
    "en_def": "to make a picture with a pen or pencil",
    "cn_def": "畫圖"
  },
  "chinese": {
    "pos": "n.",
    "en_def": "the language people speak in Taiwan and China; a school subject",
    "cn_def": "中文；國文"
  },
  "english": {
    "pos": "n.",
    "en_def": "the language people speak in the U.S.A. and the U.K.",
    "cn_def": "英語"
  },
  "math": {
    "pos": "n.",
    "en_def": "the study of numbers and shapes",
    "cn_def": "數學"
  },
  "history": {
    "pos": "n.",
    "en_def": "the study of things that happened in the past",
    "cn_def": "歷史"
  },
  "lessons": {
    "pos": "n.",
    "en_def": "a time when you learn something with a teacher",
    "cn_def": "課"
  },
  "course": {
    "pos": "n.",
    "en_def": "a set of classes on one subject",
    "cn_def": "課程"
  },
  "art": {
    "pos": "n.",
    "en_def": "making pictures or beautiful things; a school subject",
    "cn_def": "美術"
  },
  "pe": {
    "pos": "n.",
    "en_def": "a school class in which you do sports and exercise",
    "cn_def": "體育"
  },
  "science": {
    "pos": "n.",
    "en_def": "the study of nature and how things work",
    "cn_def": "自然科學"
  },
  "languages": {
    "pos": "n.",
    "en_def": "the words people use to speak and write, like English or Chinese",
    "cn_def": "語言"
  },
  "dictionary": {
    "pos": "n.",
    "en_def": "a book that tells you what words mean",
    "cn_def": "字典"
  },
  "map": {
    "pos": "n.",
    "en_def": "a picture that shows where places are",
    "cn_def": "地圖"
  },
  "notebook": {
    "pos": "n.",
    "en_def": "a small book of paper that you write in",
    "cn_def": "筆記本"
  },
  "paper": {
    "pos": "n.",
    "en_def": "thin material that you write or draw on",
    "cn_def": "紙"
  },
  "book": {
    "pos": "n.",
    "en_def": "pages with words or pictures that you read",
    "cn_def": "書"
  },
  "chalk": {
    "pos": "n.",
    "en_def": "a white or colored stick for writing on a blackboard",
    "cn_def": "粉筆"
  },
  "workbook": {
    "pos": "n.",
    "en_def": "a book with exercises for students to do",
    "cn_def": "作業本"
  },
  "page": {
    "pos": "n.",
    "en_def": "one side of a piece of paper in a book",
    "cn_def": "頁"
  },
  "blackboard": {
    "pos": "n.",
    "en_def": "a dark board on a classroom wall that teachers write on",
    "cn_def": "黑板"
  },
  "picture": {
    "pos": "n.",
    "en_def": "a drawing, painting, or photo",
    "cn_def": "圖片；照片"
  },
  "listen": {
    "pos": "v.",
    "en_def": "to try to hear something",
    "cn_def": "聽"
  },
  "repeat": {
    "pos": "v.",
    "en_def": "to say or do something again",
    "cn_def": "重複；跟著唸"
  },
  "say": {
    "pos": "v.",
    "en_def": "to speak words",
    "cn_def": "說；講"
  },
  "read": {
    "pos": "v.",
    "en_def": "to look at words and understand them",
    "cn_def": "讀；唸"
  },
  "write": {
    "pos": "v.",
    "en_def": "to make words with a pen or pencil",
    "cn_def": "寫"
  },
  "spell": {
    "pos": "v.",
    "en_def": "to say or write the letters of a word in the right order",
    "cn_def": "拼字"
  },
  "answer": {
    "pos": "v.",
    "en_def": "to say or write something when someone asks you a question",
    "cn_def": "回答"
  },
  "talk": {
    "pos": "v.",
    "en_def": "to say things to someone",
    "cn_def": "說話"
  },
  "pens": {
    "pos": "n.",
    "en_def": "a thing for writing with ink",
    "cn_def": "筆"
  },
  "pencil": {
    "pos": "n.",
    "en_def": "a thin wooden stick for writing or drawing that you can erase",
    "cn_def": "鉛筆"
  },
  "eraser": {
    "pos": "n.",
    "en_def": "a small piece of rubber that takes away pencil marks",
    "cn_def": "橡皮擦"
  },
  "rulers": {
    "pos": "n.",
    "en_def": "a long flat thing for drawing straight lines and measuring",
    "cn_def": "尺"
  },
  "glue": {
    "pos": "n.",
    "en_def": "a sticky liquid for joining things together",
    "cn_def": "膠水"
  },
  "marker": {
    "pos": "n.",
    "en_def": "a thick pen for writing on a board or coloring",
    "cn_def": "麥克筆；簽字筆"
  },
  "elementary school": {
    "pos": "n.",
    "en_def": "a school for children from about six to twelve years old",
    "cn_def": "小學"
  },
  "junior high school": {
    "pos": "n.",
    "en_def": "a school for students from about twelve to fifteen years old",
    "cn_def": "國中"
  },
  "senior high school": {
    "pos": "n.",
    "en_def": "a school for students from about fifteen to eighteen years old",
    "cn_def": "高中"
  },
  "school": {
    "pos": "n.",
    "en_def": "a place where children go to learn",
    "cn_def": "學校"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room in a school where students have lessons",
    "cn_def": "教室"
  },
  "gym": {
    "pos": "n.",
    "en_def": "a big room or building for sports and exercise",
    "cn_def": "體育館"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outside place at a school or park where children play",
    "cn_def": "操場"
  },
  "library": {
    "pos": "n.",
    "en_def": "a place with many books that you can read or borrow",
    "cn_def": "圖書館"
  },
  "seesaw": {
    "pos": "n.",
    "en_def": "a long board for two children; when one end goes up, the other goes down",
    "cn_def": "蹺蹺板"
  },
  "slide": {
    "pos": "n.",
    "en_def": "a thing in a playground that children climb up and slide down",
    "cn_def": "溜滑梯"
  },
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to teach students",
    "cn_def": "老師"
  },
  "students": {
    "pos": "n.",
    "en_def": "a person who studies at a school",
    "cn_def": "學生"
  },
  "classmate": {
    "pos": "n.",
    "en_def": "a student who is in the same class as you",
    "cn_def": "同學"
  },
  "friend": {
    "pos": "n.",
    "en_def": "a person you know well and like",
    "cn_def": "朋友"
  },
  "class": {
    "pos": "n.",
    "en_def": "a group of students who learn together",
    "cn_def": "班級"
  },
  "teaches": {
    "pos": "v.",
    "en_def": "to help someone learn something",
    "cn_def": "教"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get to know something new",
    "cn_def": "學習"
  },
  "studies": {
    "pos": "v.",
    "en_def": "to read and work to learn something",
    "cn_def": "讀書；學習"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to tell someone about something so they can understand it",
    "cn_def": "解釋"
  },
  "ask": {
    "pos": "v.",
    "en_def": "to say a question to someone",
    "cn_def": "問"
  },
  "understand": {
    "pos": "v.",
    "en_def": "to know what something means",
    "cn_def": "了解；懂"
  },
  "practices": {
    "pos": "v.",
    "en_def": "to do something again and again to get better at it",
    "cn_def": "練習"
  },
  "speak": {
    "pos": "v.",
    "en_def": "to say words; to be able to use a language",
    "cn_def": "說（語言）"
  },
  "marks": {
    "pos": "v.",
    "en_def": "to give a score to a student's work; to put a sign on something",
    "cn_def": "打分數；做記號"
  },
  "pass": {
    "pos": "v.",
    "en_def": "to do well on a test",
    "cn_def": "通過；及格"
  },
  "fail": {
    "pos": "v.",
    "en_def": "to not pass a test; to not do what you tried to do",
    "cn_def": "不及格；失敗"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to get ready for something",
    "cn_def": "準備"
  },
  "homework": {
    "pos": "n.",
    "en_def": "school work that students do at home",
    "cn_def": "功課；作業"
  },
  "test": {
    "pos": "n.",
    "en_def": "a set of questions to see how much you know",
    "cn_def": "考試"
  },
  "quiz": {
    "pos": "n.",
    "en_def": "a short test",
    "cn_def": "小考"
  },
  "grades": {
    "pos": "n.",
    "en_def": "a number or letter that shows how good your school work is; a school year",
    "cn_def": "成績；年級"
  },
  "questions": {
    "pos": "n.",
    "en_def": "something you ask when you want to know something",
    "cn_def": "問題；疑問"
  },
  "problem": {
    "pos": "n.",
    "en_def": "something difficult that you need to fix or answer",
    "cn_def": "（須解決的）問題"
  },
  "example": {
    "pos": "n.",
    "en_def": "one thing that shows what others of the same kind are like",
    "cn_def": "例子"
  },
  "exercises": {
    "pos": "n.",
    "en_def": "a set of questions that helps you practice",
    "cn_def": "練習；習題"
  },
  "knowledge": {
    "pos": "n.",
    "en_def": "the things that a person knows",
    "cn_def": "知識"
  },
  "story": {
    "pos": "n.",
    "en_def": "words that tell about people and things that happened, real or not real",
    "cn_def": "故事"
  },
  "envelope": {
    "pos": "n.",
    "en_def": "a paper cover that you put a letter in",
    "cn_def": "信封"
  },
  "letter": {
    "pos": "n.",
    "en_def": "a message you write on paper and send to someone",
    "cn_def": "信"
  },
  "postcard": {
    "pos": "n.",
    "en_def": "a card with a picture that you mail without an envelope",
    "cn_def": "明信片"
  },
  "glasses": {
    "pos": "n.",
    "en_def": "two pieces of glass you wear in front of your eyes to see better",
    "cn_def": "眼鏡"
  },
  "present": {
    "pos": "n.",
    "en_def": "something you give to someone; a gift",
    "cn_def": "禮物"
  }
};

const EXTRA_GLOSSES = {};
