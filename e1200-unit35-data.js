// Unit 35 Quiz Data: Other Verbs (Part 1) 其他動詞（上）（第35上區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U35 - Other Verbs (Part 1)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "feel (feels)",
    "pos": "v.",
    "cn_def": "覺得；感覺",
    "en_def": "to be happy, sad, sick, or well; to know something by touching",
    "sentence": "Q: How does your grandma feel today? — A: She {{BLANK}} much better now.",
    "cn": "你奶奶今天覺得怎麼樣？ — 她現在覺得好多了。"
  },
  {
    "word": "smell",
    "pos": "v.",
    "cn_def": "聞起來",
    "en_def": "to have a good or bad air that your nose notices",
    "sentence": "Q: How do the flowers in your garden smell? — A: They {{BLANK}} sweet.",
    "cn": "你花園裡的花聞起來怎麼樣？ — 它們聞起來很香。"
  },
  {
    "word": "sound (sounds)",
    "pos": "v.",
    "cn_def": "聽起來",
    "en_def": "to seem a certain way when you hear it",
    "sentence": "Q: How does the new song sound? — A: It {{BLANK}} great. I love it.",
    "cn": "這首新歌聽起來怎麼樣？ — 聽起來很棒，我很喜歡。"
  },
  {
    "word": "taste",
    "pos": "v.",
    "cn_def": "嚐起來；品嚐",
    "en_def": "to have a sweet, sour, or other flavor in your mouth; to try a little food",
    "sentence": "Q: How do these cookies taste? — A: They {{BLANK}} sweet and yummy.",
    "cn": "這些餅乾嚐起來怎麼樣？ — 又甜又好吃。"
  },
  {
    "word": "know (knows)",
    "pos": "v.",
    "cn_def": "知道；認識",
    "en_def": "to have something in your mind; to have met someone before",
    "sentence": "Q: Does Lisa have Tom's phone number? — A: Yes, she does. She {{BLANK}} his number.",
    "cn": "麗莎有湯姆的電話號碼嗎？ — 有，她知道他的號碼。"
  },
  {
    "word": "remember",
    "pos": "v.",
    "cn_def": "記得",
    "en_def": "to keep something in your mind; to not forget",
    "sentence": "Q: Do you {{BLANK}} my name? — A: Yes, I do. You're Lisa.",
    "cn": "你記得我的名字嗎？ — 記得，你是麗莎。"
  },
  {
    "word": "think",
    "pos": "v.",
    "cn_def": "想；認為",
    "en_def": "to use your mind; to have an idea about something",
    "sentence": "Q: What do you say about this book? — A: I {{BLANK}} it's very interesting.",
    "cn": "你對這本書有什麼看法？ — 我認為它很有趣。"
  },
  {
    "word": "believe",
    "pos": "v.",
    "cn_def": "相信",
    "en_def": "to feel sure that something is true",
    "sentence": "Q: Does Amy say ghosts are real? — A: No, she doesn't. She doesn't {{BLANK}} in ghosts.",
    "cn": "艾美說鬼是真的嗎？ — 不，她不相信有鬼。"
  },
  {
    "word": "hope",
    "pos": "v.",
    "cn_def": "希望",
    "en_def": "to want something good to happen",
    "sentence": "Q: Do you have any plans for tomorrow? — A: Yes. We want to go to the beach. I {{BLANK}} it will be sunny.",
    "cn": "你明天有什麼計畫嗎？ — 有，我們想去海邊，我希望會是晴天。"
  },
  {
    "word": "want (wants)",
    "pos": "v.",
    "cn_def": "想要",
    "en_def": "to wish to have or do something",
    "sentence": "Q: What does your sister ask for on her birthday? — A: She {{BLANK}} a new bike.",
    "cn": "你妹妹生日要求什麼？ — 她想要一輛新腳踏車。"
  },
  {
    "word": "need (needs)",
    "pos": "v.",
    "cn_def": "需要",
    "en_def": "to have to have something",
    "sentence": "Q: What does Ben take to art class? — A: He {{BLANK}} some color pens.",
    "cn": "班帶什麼去美術課？ — 他需要一些彩色筆。"
  },
  {
    "word": "wish",
    "pos": "v.",
    "cn_def": "祝福；希望",
    "en_def": "to say that you hope someone will have something good",
    "sentence": "Q: What do you say to Tom on his birthday? — A: I say, \"I {{BLANK}} you a happy birthday!\"",
    "cn": "湯姆生日時你對他說什麼？ — 我說：「祝你生日快樂！」"
  },
  {
    "word": "like (likes)",
    "pos": "v.",
    "cn_def": "喜歡",
    "en_def": "to think someone or something is nice or fun",
    "sentence": "Q: What does your brother do after school? — A: He {{BLANK}} to play basketball. He plays every day.",
    "cn": "你哥哥放學後做什麼？ — 他喜歡打籃球，他每天都打。"
  },
  {
    "word": "love",
    "pos": "v.",
    "cn_def": "喜愛；愛",
    "en_def": "to like someone or something very, very much",
    "sentence": "Q: Do your parents enjoy cooking? — A: Yes, they do. They {{BLANK}} cooking.",
    "cn": "你爸媽喜歡煮飯嗎？ — 是的，他們很愛煮飯。"
  },
  {
    "word": "hate (hates)",
    "pos": "v.",
    "cn_def": "討厭",
    "en_def": "to not like someone or something at all",
    "sentence": "Q: Does your cat enjoy water? — A: No, it doesn't. It {{BLANK}} water.",
    "cn": "你的貓喜歡水嗎？ — 不，牠討厭水。"
  },
  {
    "word": "mind",
    "pos": "v.",
    "cn_def": "介意",
    "en_def": "to feel unhappy or bothered about something",
    "sentence": "Q: Do you {{BLANK}} if I sit here? — A: No, I don't. Please sit down.",
    "cn": "你介意我坐這裡嗎？ — 不介意，請坐。"
  },
  {
    "word": "bow",
    "pos": "v.",
    "cn_def": "鞠躬；敬禮",
    "en_def": "to bend your head or body forward to show respect",
    "sentence": "Q: What do people in Japan do when they meet? — A: They {{BLANK}} to each other.",
    "cn": "日本人見面時做什麼？ — 他們互相鞠躬。"
  },
  {
    "word": "collect (collects)",
    "pos": "v.",
    "cn_def": "收集",
    "en_def": "to get and keep many things of the same kind as a hobby",
    "sentence": "Q: What does Uncle Jack do in his free time? — A: He {{BLANK}} stamps.",
    "cn": "傑克叔叔空閒時做什麼？ — 他收集郵票。"
  },
  {
    "word": "feed (feeds)",
    "pos": "v.",
    "cn_def": "餵",
    "en_def": "to give food to a person or an animal",
    "sentence": "Q: What does your sister do every morning? — A: She {{BLANK}} the fish.",
    "cn": "你姊姊每天早上做什麼？ — 她餵魚。"
  },
  {
    "word": "look (looking)",
    "pos": "v.",
    "cn_def": "看（著）",
    "en_def": "to turn your eyes to see something",
    "sentence": "Q: What are the students doing? — A: They are {{BLANK}} at the blackboard.",
    "cn": "學生們在做什麼？ — 他們正在看黑板。"
  },
  {
    "word": "watch (watching)",
    "pos": "v.",
    "cn_def": "觀看；注視",
    "en_def": "to look at something for some time",
    "sentence": "Q: What is Grandpa doing now? — A: He is {{BLANK}} TV in the living room.",
    "cn": "爺爺現在在做什麼？ — 他正在客廳看電視。"
  },
  {
    "word": "listen (listening)",
    "pos": "v.",
    "cn_def": "聽",
    "en_def": "to try to hear something",
    "sentence": "Q: What is Amy doing in her room? — A: She is {{BLANK}} to music.",
    "cn": "艾美在她房間做什麼？ — 她正在聽音樂。"
  },
  {
    "word": "carry (carrying)",
    "pos": "v.",
    "cn_def": "搬；攜帶",
    "en_def": "to hold something and take it somewhere",
    "sentence": "Q: What is Dad doing? — A: He is {{BLANK}} a big box into the house.",
    "cn": "爸爸在做什麼？ — 他正把一個大箱子搬進屋裡。"
  },
  {
    "word": "catch (catching)",
    "pos": "v.",
    "cn_def": "接住；抓",
    "en_def": "to get and hold something that is moving",
    "sentence": "Q: What is your dog doing in the park? — A: It is {{BLANK}} a ball.",
    "cn": "你的狗在公園做什麼？ — 牠正在接球。"
  },
  {
    "word": "clap (clapping)",
    "pos": "v.",
    "cn_def": "拍手",
    "en_def": "to hit your hands together to make a sound",
    "sentence": "Q: What are the fans doing? — A: They are {{BLANK}} their hands for the team.",
    "cn": "球迷們在做什麼？ — 他們正在為球隊拍手。"
  },
  {
    "word": "brush (brushing)",
    "pos": "v.",
    "cn_def": "刷",
    "en_def": "to clean your teeth or tidy your hair with a brush",
    "sentence": "Q: What is your brother doing in the bathroom? — A: He is {{BLANK}} his teeth.",
    "cn": "你弟弟在浴室做什麼？ — 他正在刷牙。"
  },
  {
    "word": "cut (cutting)",
    "pos": "v.",
    "cn_def": "切；剪",
    "en_def": "to use a knife or scissors to make pieces",
    "sentence": "Q: What is Mom doing in the kitchen? — A: She is {{BLANK}} vegetables.",
    "cn": "媽媽在廚房做什麼？ — 她正在切菜。"
  },
  {
    "word": "fry (frying)",
    "pos": "v.",
    "cn_def": "油炸；煎",
    "en_def": "to cook food in hot oil",
    "sentence": "Q: What is your uncle doing at the night market? — A: He is {{BLANK}} chicken.",
    "cn": "你叔叔在夜市做什麼？ — 他正在炸雞。"
  },
  {
    "word": "dig (digging)",
    "pos": "v.",
    "cn_def": "挖",
    "en_def": "to make a hole in the ground",
    "sentence": "Q: What are the children doing on the beach? — A: They are {{BLANK}} in the sand.",
    "cn": "孩子們在海灘上做什麼？ — 他們正在挖沙。"
  },
  {
    "word": "cry (crying)",
    "pos": "v.",
    "cn_def": "哭",
    "en_def": "to have tears come from your eyes because you are sad or hurt",
    "sentence": "Q: What is the baby doing? — A: She is {{BLANK}}. She is hungry.",
    "cn": "寶寶在做什麼？ — 她在哭，她餓了。"
  },
  {
    "word": "fight (fighting)",
    "pos": "v.",
    "cn_def": "打架；爭吵",
    "en_def": "to hit each other or to shout angrily at each other",
    "sentence": "Q: What are those two boys doing? — A: They are {{BLANK}}. Let's tell the teacher.",
    "cn": "那兩個男孩在做什麼？ — 他們在打架，我們去告訴老師吧。"
  },
  {
    "word": "see (saw)",
    "pos": "v.",
    "cn_def": "看見",
    "en_def": "to notice something with your eyes",
    "sentence": "Q: What did you do at the zoo yesterday? — A: I {{BLANK}} a big elephant.",
    "cn": "你昨天在動物園做了什麼？ — 我看到一隻大象。"
  },
  {
    "word": "hear (heard)",
    "pos": "v.",
    "cn_def": "聽見",
    "en_def": "to notice a sound with your ears",
    "sentence": "Q: Why did you get up last night? — A: I {{BLANK}} a strange noise outside.",
    "cn": "你昨晚為什麼起床？ — 我聽到外面有奇怪的聲音。"
  },
  {
    "word": "notice (noticed)",
    "pos": "v.",
    "cn_def": "注意到",
    "en_def": "to see or hear something and know that it is there",
    "sentence": "Q: Did Amy look different yesterday? — A: Yes, she did. I {{BLANK}} her new glasses.",
    "cn": "艾美昨天看起來不一樣嗎？ — 是的，我注意到她的新眼鏡。"
  },
  {
    "word": "forget (forgot)",
    "pos": "v.",
    "cn_def": "忘記",
    "en_def": "to not remember",
    "sentence": "Q: Why did Tom buy lunch at school yesterday? — A: He {{BLANK}} his lunch box at home.",
    "cn": "湯姆昨天為什麼在學校買午餐？ — 他把便當忘在家裡了。"
  },
  {
    "word": "go (went)",
    "pos": "v.",
    "cn_def": "去",
    "en_def": "to move from here to another place",
    "sentence": "Q: What did you do last Sunday? — A: I {{BLANK}} to the beach with my family.",
    "cn": "你上星期日做了什麼？ — 我和家人去了海邊。"
  },
  {
    "word": "come (came)",
    "pos": "v.",
    "cn_def": "來",
    "en_def": "to move to the place where the speaker is",
    "sentence": "Q: Did Uncle Jack visit you yesterday? — A: Yes, he did. He {{BLANK}} to our house for dinner.",
    "cn": "傑克叔叔昨天有來看你們嗎？ — 有，他來我們家吃晚餐。"
  },
  {
    "word": "bring (brought)",
    "pos": "v.",
    "cn_def": "帶來",
    "en_def": "to take something or someone with you to a place",
    "sentence": "Q: Did you have food for the picnic yesterday? — A: Yes, I did. I {{BLANK}} some sandwiches.",
    "cn": "你昨天野餐有帶食物嗎？ — 有，我帶了一些三明治。"
  },
  {
    "word": "break (broke)",
    "pos": "v.",
    "cn_def": "打破",
    "en_def": "to make something go into pieces or stop working",
    "sentence": "Q: What did Tom do yesterday? — A: He {{BLANK}} the window with his ball.",
    "cn": "湯姆昨天做了什麼？ — 他用球打破了窗戶。"
  },
  {
    "word": "drop (dropped)",
    "pos": "v.",
    "cn_def": "（使）掉落",
    "en_def": "to let something fall",
    "sentence": "Q: What happened to your phone? — A: I {{BLANK}} it on the floor yesterday.",
    "cn": "你的手機怎麼了？ — 我昨天把它摔到地上。"
  },
  {
    "word": "finish (finished)",
    "pos": "v.",
    "cn_def": "完成",
    "en_def": "to do all of something, so no part is left",
    "sentence": "Q: Did Ben do his homework last night? — A: Yes, he did. He {{BLANK}} it at nine.",
    "cn": "班昨晚有寫功課嗎？ — 有，他九點寫完了。"
  },
  {
    "word": "end (ended)",
    "pos": "v.",
    "cn_def": "結束",
    "en_def": "to stop; to be over",
    "sentence": "Q: Was the movie long last night? — A: Yes. It {{BLANK}} at eleven o'clock.",
    "cn": "昨晚的電影很長嗎？ — 是的，它十一點才結束。"
  },
  {
    "word": "check",
    "pos": "v.",
    "cn_def": "檢查",
    "en_def": "to look at something to see if it is right",
    "sentence": "Q: What will Dad do before the trip tomorrow? — A: He will {{BLANK}} the car.",
    "cn": "爸爸明天旅行前會做什麼？ — 他會檢查車子。"
  },
  {
    "word": "correct",
    "pos": "v.",
    "cn_def": "改正",
    "en_def": "to make something right",
    "sentence": "Q: What will you do with your mistakes? — A: I will {{BLANK}} them.",
    "cn": "你會怎麼處理你的錯誤？ — 我會改正它們。"
  },
  {
    "word": "choose",
    "pos": "v.",
    "cn_def": "選擇；挑選",
    "en_def": "to pick the one you want",
    "sentence": "Q: Which cake will you have, chocolate or strawberry? — A: I will {{BLANK}} the chocolate one.",
    "cn": "你要哪一個蛋糕，巧克力還是草莓？ — 我會選巧克力的。"
  },
  {
    "word": "cover",
    "pos": "v.",
    "cn_def": "覆蓋；蓋住",
    "en_def": "to put something over another thing",
    "sentence": "Q: It will rain tomorrow. What will you do with your bike? — A: I will {{BLANK}} it.",
    "cn": "明天會下雨，你會怎麼處理你的腳踏車？ — 我會把它蓋起來。"
  },
  {
    "word": "surprise",
    "pos": "v.",
    "cn_def": "使驚訝；給…驚喜",
    "en_def": "to do something that someone did not expect",
    "sentence": "Q: What will you do for Mom's birthday tomorrow? — A: We will {{BLANK}} her with a big cake.",
    "cn": "明天媽媽生日你們會做什麼？ — 我們會用一個大蛋糕給她驚喜。"
  },
  {
    "word": "guess",
    "pos": "v.",
    "cn_def": "猜",
    "en_def": "to give an answer when you are not sure",
    "sentence": "Q: Can you {{BLANK}} my age? — A: Yes. I think you are thirteen.",
    "cn": "你能猜出我的年齡嗎？ — 能，我想你十三歲。"
  },
  {
    "word": "define",
    "pos": "v.",
    "cn_def": "解釋；給…下定義",
    "en_def": "to say what a word means",
    "sentence": "Q: Can you {{BLANK}} this word in English? — A: Yes. \"Glad\" means \"happy.\"",
    "cn": "你能用英文解釋這個字嗎？ — 可以，glad 的意思是 happy（高興的）。"
  },
  {
    "word": "count",
    "pos": "v.",
    "cn_def": "數；計算",
    "en_def": "to say numbers in order; to find how many there are",
    "sentence": "Q: Can your little sister {{BLANK}} to one hundred? — A: Yes, she can. She is very smart.",
    "cn": "你妹妹能數到一百嗎？ — 能，她很聰明。"
  },
  {
    "word": "copy",
    "pos": "v.",
    "cn_def": "抄寫；複製",
    "en_def": "to write or make something that is the same as another thing",
    "sentence": "Q: I was sick yesterday. Can I {{BLANK}} your notes? — A: Sure. Here you are.",
    "cn": "我昨天生病了，我可以抄你的筆記嗎？ — 當然，給你。"
  },
  {
    "word": "close",
    "pos": "v.",
    "cn_def": "關上",
    "en_def": "to shut something",
    "sentence": "Q: It's cold. Can you {{BLANK}} the window, please? — A: Sure.",
    "cn": "好冷，你可以關上窗戶嗎？ — 好的。"
  },
  {
    "word": "enter",
    "pos": "v.",
    "cn_def": "進入",
    "en_def": "to go into a place",
    "sentence": "Q: Can I come in? — A: Yes, but please knock before you {{BLANK}} the room.",
    "cn": "我可以進來嗎？ — 可以，但進房間前請先敲門。"
  },
  {
    "word": "follow",
    "pos": "v.",
    "cn_def": "跟隨；遵循",
    "en_def": "to go after someone; to do what someone or a rule says",
    "sentence": "Q: Can you show me the way to the library? — A: Sure. {{BLANK}} me.",
    "cn": "你可以帶我去圖書館嗎？ — 當然，跟我來。"
  },
  {
    "word": "blow",
    "pos": "v.",
    "cn_def": "吹",
    "en_def": "to send air out of your mouth",
    "sentence": "Q: Can I eat the cake now? — A: Not yet. Make a wish and {{BLANK}} out the candles first.",
    "cn": "我現在可以吃蛋糕了嗎？ — 還不行，先許願然後吹熄蠟燭。"
  },
  {
    "word": "cheat",
    "pos": "v.",
    "cn_def": "作弊；欺騙",
    "en_def": "to do something that is not fair to get a better score or to win",
    "sentence": "Q: Can I look at your answers? — A: No! Don't {{BLANK}} on the test.",
    "cn": "我可以看你的答案嗎？ — 不行！考試不要作弊。"
  },
  {
    "word": "worry",
    "pos": "v.",
    "cn_def": "擔心",
    "en_def": "to feel afraid that something bad may happen",
    "sentence": "Q: Can you help me? I can't find my dog. — A: Sure. Don't {{BLANK}}. We can find it.",
    "cn": "你可以幫我嗎？我找不到我的狗。 — 當然，別擔心，我們找得到牠。"
  }
];

const MCQS = [
  {
    "q": "Q: How does your grandma feel today? — A: She ______ much better now.【覺得；感覺】",
    "options": [
      "feels",
      "feeds",
      "guess",
      "collects"
    ],
    "answer": 0,
    "cn": "你奶奶今天覺得怎麼樣？ — 她現在覺得好多了。",
    "vocabIndex": 0
  },
  {
    "q": "Q: How do the flowers in your garden smell? — A: They ______ sweet.【聞起來】",
    "options": [
      "cheat",
      "smell",
      "correct",
      "check"
    ],
    "answer": 1,
    "cn": "你花園裡的花聞起來怎麼樣？ — 它們聞起來很香。",
    "vocabIndex": 1
  },
  {
    "q": "Q: How does the new song sound? — A: It ______ great. I love it.【聽起來】",
    "options": [
      "feeds",
      "guess",
      "sounds",
      "knows"
    ],
    "answer": 2,
    "cn": "這首新歌聽起來怎麼樣？ — 聽起來很棒，我很喜歡。",
    "vocabIndex": 2
  },
  {
    "q": "Q: How do these cookies taste? — A: They ______ sweet and yummy.【嚐起來；品嚐】",
    "options": [
      "remember",
      "hope",
      "close",
      "taste"
    ],
    "answer": 3,
    "cn": "這些餅乾嚐起來怎麼樣？ — 又甜又好吃。",
    "vocabIndex": 3
  },
  {
    "q": "Q: Does Lisa have Tom's phone number? — A: Yes, she does. She ______ his number.【知道；認識】",
    "options": [
      "hates",
      "guess",
      "knows",
      "feels"
    ],
    "answer": 2,
    "cn": "麗莎有湯姆的電話號碼嗎？ — 有，她知道他的號碼。",
    "vocabIndex": 4
  },
  {
    "q": "Q: Do you ______ my name? — A: Yes, I do. You're Lisa.【記得】",
    "options": [
      "mind",
      "remember",
      "broke",
      "cheat"
    ],
    "answer": 1,
    "cn": "你記得我的名字嗎？ — 記得，你是麗莎。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What do you say about this book? — A: I ______ it's very interesting.【想；認為】",
    "options": [
      "think",
      "define",
      "heard",
      "check"
    ],
    "answer": 0,
    "cn": "你對這本書有什麼看法？ — 我認為它很有趣。",
    "vocabIndex": 6
  },
  {
    "q": "Q: Does Amy say ghosts are real? — A: No, she doesn't. She doesn't ______ in ghosts.【相信】",
    "options": [
      "went",
      "hope",
      "define",
      "believe"
    ],
    "answer": 3,
    "cn": "艾美說鬼是真的嗎？ — 不，她不相信有鬼。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Do you have any plans for tomorrow? — A: Yes. We want to go to the beach. I ______ it will be sunny.【希望】",
    "options": [
      "heard",
      "hope",
      "taste",
      "mind"
    ],
    "answer": 1,
    "cn": "你明天有什麼計畫嗎？ — 有，我們想去海邊，我希望會是晴天。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What does your sister ask for on her birthday? — A: She ______ a new bike.【想要】",
    "options": [
      "likes",
      "knows",
      "wants",
      "hates"
    ],
    "answer": 2,
    "cn": "你妹妹生日要求什麼？ — 她想要一輛新腳踏車。",
    "vocabIndex": 9
  },
  {
    "q": "Q: What does Ben take to art class? — A: He ______ some color pens.【需要】",
    "options": [
      "needs",
      "feeds",
      "wants",
      "hates"
    ],
    "answer": 0,
    "cn": "班帶什麼去美術課？ — 他需要一些彩色筆。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What do you say to Tom on his birthday? — A: I say, \"I ______ you a happy birthday!\"【祝福；希望】",
    "options": [
      "cheat",
      "saw",
      "close",
      "wish"
    ],
    "answer": 3,
    "cn": "湯姆生日時你對他說什麼？ — 我說：「祝你生日快樂！」",
    "vocabIndex": 11
  },
  {
    "q": "Q: What does your brother do after school? — A: He ______ to play basketball. He plays every day.【喜歡】",
    "options": [
      "likes",
      "wants",
      "guess",
      "knows"
    ],
    "answer": 0,
    "cn": "你哥哥放學後做什麼？ — 他喜歡打籃球，他每天都打。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Do your parents enjoy cooking? — A: Yes, they do. They ______ cooking.【喜愛；愛】",
    "options": [
      "came",
      "heard",
      "love",
      "worry"
    ],
    "answer": 2,
    "cn": "你爸媽喜歡煮飯嗎？ — 是的，他們很愛煮飯。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Does your cat enjoy water? — A: No, it doesn't. It ______ water.【討厭】",
    "options": [
      "feeds",
      "hates",
      "knows",
      "sounds"
    ],
    "answer": 1,
    "cn": "你的貓喜歡水嗎？ — 不，牠討厭水。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Do you ______ if I sit here? — A: No, I don't. Please sit down.【介意】",
    "options": [
      "choose",
      "hope",
      "brought",
      "mind"
    ],
    "answer": 3,
    "cn": "你介意我坐這裡嗎？ — 不介意，請坐。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What do people in Japan do when they meet? — A: They ______ to each other.【鞠躬；敬禮】",
    "options": [
      "bow",
      "surprise",
      "check",
      "cheat"
    ],
    "answer": 0,
    "cn": "日本人見面時做什麼？ — 他們互相鞠躬。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What does Uncle Jack do in his free time? — A: He ______ stamps.【收集】",
    "options": [
      "likes",
      "collects",
      "feels",
      "needs"
    ],
    "answer": 1,
    "cn": "傑克叔叔空閒時做什麼？ — 他收集郵票。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What does your sister do every morning? — A: She ______ the fish.【餵】",
    "options": [
      "wants",
      "hates",
      "collects",
      "feeds"
    ],
    "answer": 3,
    "cn": "你姊姊每天早上做什麼？ — 她餵魚。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What are the students doing? — A: They are ______ at the blackboard.【看（著）】",
    "options": [
      "brushing",
      "digging",
      "looking",
      "watching"
    ],
    "answer": 2,
    "cn": "學生們在做什麼？ — 他們正在看黑板。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What is Grandpa doing now? — A: He is ______ TV in the living room.【觀看；注視】",
    "options": [
      "frying",
      "crying",
      "looking",
      "watching"
    ],
    "answer": 3,
    "cn": "爺爺現在在做什麼？ — 他正在客廳看電視。",
    "vocabIndex": 20
  },
  {
    "q": "Q: What is Amy doing in her room? — A: She is ______ to music.【聽】",
    "options": [
      "catching",
      "listening",
      "digging",
      "cutting"
    ],
    "answer": 1,
    "cn": "艾美在她房間做什麼？ — 她正在聽音樂。",
    "vocabIndex": 21
  },
  {
    "q": "Q: What is Dad doing? — A: He is ______ a big box into the house.【搬；攜帶】",
    "options": [
      "carrying",
      "clapping",
      "crying",
      "listening"
    ],
    "answer": 0,
    "cn": "爸爸在做什麼？ — 他正把一個大箱子搬進屋裡。",
    "vocabIndex": 22
  },
  {
    "q": "Q: What is your dog doing in the park? — A: It is ______ a ball.【接住；抓】",
    "options": [
      "listening",
      "digging",
      "catching",
      "looking"
    ],
    "answer": 2,
    "cn": "你的狗在公園做什麼？ — 牠正在接球。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What are the fans doing? — A: They are ______ their hands for the team.【拍手】",
    "options": [
      "listening",
      "watching",
      "frying",
      "clapping"
    ],
    "answer": 3,
    "cn": "球迷們在做什麼？ — 他們正在為球隊拍手。",
    "vocabIndex": 24
  },
  {
    "q": "Q: What is your brother doing in the bathroom? — A: He is ______ his teeth.【刷】",
    "options": [
      "brushing",
      "listening",
      "watching",
      "frying"
    ],
    "answer": 0,
    "cn": "你弟弟在浴室做什麼？ — 他正在刷牙。",
    "vocabIndex": 25
  },
  {
    "q": "Q: What is Mom doing in the kitchen? — A: She is ______ vegetables.【切；剪】",
    "options": [
      "clapping",
      "looking",
      "cutting",
      "crying"
    ],
    "answer": 2,
    "cn": "媽媽在廚房做什麼？ — 她正在切菜。",
    "vocabIndex": 26
  },
  {
    "q": "Q: What is your uncle doing at the night market? — A: He is ______ chicken.【油炸；煎】",
    "options": [
      "brushing",
      "frying",
      "cutting",
      "catching"
    ],
    "answer": 1,
    "cn": "你叔叔在夜市做什麼？ — 他正在炸雞。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What are the children doing on the beach? — A: They are ______ in the sand.【挖】",
    "options": [
      "frying",
      "clapping",
      "digging",
      "looking"
    ],
    "answer": 2,
    "cn": "孩子們在海灘上做什麼？ — 他們正在挖沙。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What is the baby doing? — A: She is ______. She is hungry.【哭】",
    "options": [
      "crying",
      "listening",
      "carrying",
      "looking"
    ],
    "answer": 0,
    "cn": "寶寶在做什麼？ — 她在哭，她餓了。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What are those two boys doing? — A: They are ______. Let's tell the teacher.【打架；爭吵】",
    "options": [
      "clapping",
      "brushing",
      "watching",
      "fighting"
    ],
    "answer": 3,
    "cn": "那兩個男孩在做什麼？ — 他們在打架，我們去告訴老師吧。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What did you do at the zoo yesterday? — A: I ______ a big elephant.【看見】",
    "options": [
      "correct",
      "saw",
      "taste",
      "think"
    ],
    "answer": 1,
    "cn": "你昨天在動物園做了什麼？ — 我看到一隻大象。",
    "vocabIndex": 31
  },
  {
    "q": "Q: Why did you get up last night? — A: I ______ a strange noise outside.【聽見】",
    "options": [
      "love",
      "cover",
      "heard",
      "mind"
    ],
    "answer": 2,
    "cn": "你昨晚為什麼起床？ — 我聽到外面有奇怪的聲音。",
    "vocabIndex": 32
  },
  {
    "q": "Q: Did Amy look different yesterday? — A: Yes, she did. I ______ her new glasses.【注意到】",
    "options": [
      "finished",
      "noticed",
      "ended",
      "dropped"
    ],
    "answer": 1,
    "cn": "艾美昨天看起來不一樣嗎？ — 是的，我注意到她的新眼鏡。",
    "vocabIndex": 33
  },
  {
    "q": "Q: Why did Tom buy lunch at school yesterday? — A: He ______ his lunch box at home.【忘記】",
    "options": [
      "correct",
      "check",
      "came",
      "forgot"
    ],
    "answer": 3,
    "cn": "湯姆昨天為什麼在學校買午餐？ — 他把便當忘在家裡了。",
    "vocabIndex": 34
  },
  {
    "q": "Q: What did you do last Sunday? — A: I ______ to the beach with my family.【去】",
    "options": [
      "went",
      "define",
      "remember",
      "blow"
    ],
    "answer": 0,
    "cn": "你上星期日做了什麼？ — 我和家人去了海邊。",
    "vocabIndex": 35
  },
  {
    "q": "Q: Did Uncle Jack visit you yesterday? — A: Yes, he did. He ______ to our house for dinner.【來】",
    "options": [
      "blow",
      "remember",
      "came",
      "mind"
    ],
    "answer": 2,
    "cn": "傑克叔叔昨天有來看你們嗎？ — 有，他來我們家吃晚餐。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Did you have food for the picnic yesterday? — A: Yes, I did. I ______ some sandwiches.【帶來】",
    "options": [
      "brought",
      "broke",
      "cheat",
      "believe"
    ],
    "answer": 0,
    "cn": "你昨天野餐有帶食物嗎？ — 有，我帶了一些三明治。",
    "vocabIndex": 37
  },
  {
    "q": "Q: What did Tom do yesterday? — A: He ______ the window with his ball.【打破】",
    "options": [
      "cover",
      "love",
      "smell",
      "broke"
    ],
    "answer": 3,
    "cn": "湯姆昨天做了什麼？ — 他用球打破了窗戶。",
    "vocabIndex": 38
  },
  {
    "q": "Q: What happened to your phone? — A: I ______ it on the floor yesterday.【（使）掉落】",
    "options": [
      "noticed",
      "dropped",
      "finished",
      "ended"
    ],
    "answer": 1,
    "cn": "你的手機怎麼了？ — 我昨天把它摔到地上。",
    "vocabIndex": 39
  },
  {
    "q": "Q: Did Ben do his homework last night? — A: Yes, he did. He ______ it at nine.【完成】",
    "options": [
      "noticed",
      "ended",
      "dropped",
      "finished"
    ],
    "answer": 3,
    "cn": "班昨晚有寫功課嗎？ — 有，他九點寫完了。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Was the movie long last night? — A: Yes. It ______ at eleven o'clock.【結束】",
    "options": [
      "ended",
      "noticed",
      "finished",
      "dropped"
    ],
    "answer": 0,
    "cn": "昨晚的電影很長嗎？ — 是的，它十一點才結束。",
    "vocabIndex": 41
  },
  {
    "q": "Q: What will Dad do before the trip tomorrow? — A: He will ______ the car.【檢查】",
    "options": [
      "brought",
      "check",
      "mind",
      "define"
    ],
    "answer": 1,
    "cn": "爸爸明天旅行前會做什麼？ — 他會檢查車子。",
    "vocabIndex": 42
  },
  {
    "q": "Q: What will you do with your mistakes? — A: I will ______ them.【改正】",
    "options": [
      "worry",
      "close",
      "correct",
      "broke"
    ],
    "answer": 2,
    "cn": "你會怎麼處理你的錯誤？ — 我會改正它們。",
    "vocabIndex": 43
  },
  {
    "q": "Q: Which cake will you have, chocolate or strawberry? — A: I will ______ the chocolate one.【選擇；挑選】",
    "options": [
      "cheat",
      "went",
      "think",
      "choose"
    ],
    "answer": 3,
    "cn": "你要哪一個蛋糕，巧克力還是草莓？ — 我會選巧克力的。",
    "vocabIndex": 44
  },
  {
    "q": "Q: It will rain tomorrow. What will you do with your bike? — A: I will ______ it.【覆蓋；蓋住】",
    "options": [
      "think",
      "cover",
      "cheat",
      "brought"
    ],
    "answer": 1,
    "cn": "明天會下雨，你會怎麼處理你的腳踏車？ — 我會把它蓋起來。",
    "vocabIndex": 45
  },
  {
    "q": "Q: What will you do for Mom's birthday tomorrow? — A: We will ______ her with a big cake.【使驚訝；給…驚喜】",
    "options": [
      "surprise",
      "think",
      "hope",
      "bow"
    ],
    "answer": 0,
    "cn": "明天媽媽生日你們會做什麼？ — 我們會用一個大蛋糕給她驚喜。",
    "vocabIndex": 46
  },
  {
    "q": "Q: Can you ______ my age? — A: Yes. I think you are thirteen.【猜】",
    "options": [
      "hates",
      "feels",
      "guess",
      "sounds"
    ],
    "answer": 2,
    "cn": "你能猜出我的年齡嗎？ — 能，我想你十三歲。",
    "vocabIndex": 47
  },
  {
    "q": "Q: Can you ______ this word in English? — A: Yes. \"Glad\" means \"happy.\"【解釋；給…下定義】",
    "options": [
      "define",
      "cover",
      "brought",
      "broke"
    ],
    "answer": 0,
    "cn": "你能用英文解釋這個字嗎？ — 可以，glad 的意思是 happy（高興的）。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Can your little sister ______ to one hundred? — A: Yes, she can. She is very smart.【數；計算】",
    "options": [
      "cheat",
      "count",
      "broke",
      "correct"
    ],
    "answer": 1,
    "cn": "你妹妹能數到一百嗎？ — 能，她很聰明。",
    "vocabIndex": 49
  },
  {
    "q": "Q: I was sick yesterday. Can I ______ your notes? — A: Sure. Here you are.【抄寫；複製】",
    "options": [
      "forgot",
      "remember",
      "copy",
      "worry"
    ],
    "answer": 2,
    "cn": "我昨天生病了，我可以抄你的筆記嗎？ — 當然，給你。",
    "vocabIndex": 50
  },
  {
    "q": "Q: It's cold. Can you ______ the window, please? — A: Sure.【關上】",
    "options": [
      "correct",
      "mind",
      "cheat",
      "close"
    ],
    "answer": 3,
    "cn": "好冷，你可以關上窗戶嗎？ — 好的。",
    "vocabIndex": 51
  },
  {
    "q": "Q: Can I come in? — A: Yes, but please knock before you ______ the room.【進入】",
    "options": [
      "enter",
      "remember",
      "went",
      "surprise"
    ],
    "answer": 0,
    "cn": "我可以進來嗎？ — 可以，但進房間前請先敲門。",
    "vocabIndex": 52
  },
  {
    "q": "Q: Can you show me the way to the library? — A: Sure. ______ me.【跟隨；遵循】",
    "options": [
      "Smell",
      "Follow",
      "Worry",
      "Copy"
    ],
    "answer": 1,
    "cn": "你可以帶我去圖書館嗎？ — 當然，跟我來。",
    "vocabIndex": 53
  },
  {
    "q": "Q: Can I eat the cake now? — A: Not yet. Make a wish and ______ out the candles first.【吹】",
    "options": [
      "close",
      "cover",
      "blow",
      "wish"
    ],
    "answer": 2,
    "cn": "我現在可以吃蛋糕了嗎？ — 還不行，先許願然後吹熄蠟燭。",
    "vocabIndex": 54
  },
  {
    "q": "Q: Can I look at your answers? — A: No! Don't ______ on the test.【作弊；欺騙】",
    "options": [
      "love",
      "brought",
      "follow",
      "cheat"
    ],
    "answer": 3,
    "cn": "我可以看你的答案嗎？ — 不行！考試不要作弊。",
    "vocabIndex": 55
  },
  {
    "q": "Q: Can you help me? I can't find my dog. — A: Sure. Don't ______. We can find it.【擔心】",
    "options": [
      "broke",
      "saw",
      "worry",
      "love"
    ],
    "answer": 2,
    "cn": "你可以幫我嗎？我找不到我的狗。 — 當然，別擔心，我們找得到牠。",
    "vocabIndex": 56
  }
];

const LOOKUP = {
  "blow": {
    "pos": "v.",
    "en_def": "(of wind or air) to move; to send air out of your mouth",
    "cn_def": "吹"
  },
  "mind": {
    "pos": "n.",
    "en_def": "the part of you that thinks and remembers",
    "cn_def": "頭腦；心思"
  },
  "feels": {
    "pos": "v.",
    "en_def": "to be happy, sad, sick, or well; to know something by touching",
    "cn_def": "覺得；感覺"
  },
  "smell": {
    "pos": "v.",
    "en_def": "to have a good or bad air that your nose notices",
    "cn_def": "聞起來"
  },
  "sounds": {
    "pos": "v.",
    "en_def": "to seem a certain way when you hear it",
    "cn_def": "聽起來"
  },
  "taste": {
    "pos": "v.",
    "en_def": "to have a sweet, sour, or other flavor in your mouth; to try a little food",
    "cn_def": "嚐起來；品嚐"
  },
  "knows": {
    "pos": "v.",
    "en_def": "to have something in your mind; to have met someone before",
    "cn_def": "知道；認識"
  },
  "remember": {
    "pos": "v.",
    "en_def": "to keep something in your mind; to not forget",
    "cn_def": "記得"
  },
  "think": {
    "pos": "v.",
    "en_def": "to use your mind; to have an idea about something",
    "cn_def": "想；認為"
  },
  "believe": {
    "pos": "v.",
    "en_def": "to feel sure that something is true",
    "cn_def": "相信"
  },
  "hope": {
    "pos": "v.",
    "en_def": "to want something good to happen",
    "cn_def": "希望"
  },
  "wants": {
    "pos": "v.",
    "en_def": "to wish to have or do something",
    "cn_def": "想要"
  },
  "needs": {
    "pos": "v.",
    "en_def": "to have to have something",
    "cn_def": "需要"
  },
  "wish": {
    "pos": "v.",
    "en_def": "to say that you hope someone will have something good",
    "cn_def": "祝福；希望"
  },
  "likes": {
    "pos": "v.",
    "en_def": "to think someone or something is nice or fun",
    "cn_def": "喜歡"
  },
  "love": {
    "pos": "v.",
    "en_def": "to like someone or something very, very much",
    "cn_def": "喜愛；愛"
  },
  "hates": {
    "pos": "v.",
    "en_def": "to not like someone or something at all",
    "cn_def": "討厭"
  },
  "bow": {
    "pos": "v.",
    "en_def": "to bend your head or body forward to show respect",
    "cn_def": "鞠躬；敬禮"
  },
  "collects": {
    "pos": "v.",
    "en_def": "to get and keep many things of the same kind as a hobby",
    "cn_def": "收集"
  },
  "feeds": {
    "pos": "v.",
    "en_def": "to give food to a person or an animal",
    "cn_def": "餵"
  },
  "looking": {
    "pos": "v.",
    "en_def": "to turn your eyes to see something",
    "cn_def": "看（著）"
  },
  "watching": {
    "pos": "v.",
    "en_def": "to look at something for some time",
    "cn_def": "觀看；注視"
  },
  "listening": {
    "pos": "v.",
    "en_def": "to try to hear something",
    "cn_def": "聽"
  },
  "carrying": {
    "pos": "v.",
    "en_def": "to hold something and take it somewhere",
    "cn_def": "搬；攜帶"
  },
  "catching": {
    "pos": "v.",
    "en_def": "to get and hold something that is moving",
    "cn_def": "接住；抓"
  },
  "clapping": {
    "pos": "v.",
    "en_def": "to hit your hands together to make a sound",
    "cn_def": "拍手"
  },
  "brushing": {
    "pos": "v.",
    "en_def": "to clean your teeth or tidy your hair with a brush",
    "cn_def": "刷"
  },
  "cutting": {
    "pos": "v.",
    "en_def": "to use a knife or scissors to make pieces",
    "cn_def": "切；剪"
  },
  "frying": {
    "pos": "v.",
    "en_def": "to cook food in hot oil",
    "cn_def": "油炸；煎"
  },
  "digging": {
    "pos": "v.",
    "en_def": "to make a hole in the ground",
    "cn_def": "挖"
  },
  "crying": {
    "pos": "v.",
    "en_def": "to have tears come from your eyes because you are sad or hurt",
    "cn_def": "哭"
  },
  "fighting": {
    "pos": "v.",
    "en_def": "to hit each other or to shout angrily at each other",
    "cn_def": "打架；爭吵"
  },
  "saw": {
    "pos": "v.",
    "en_def": "to notice something with your eyes",
    "cn_def": "看見"
  },
  "heard": {
    "pos": "v.",
    "en_def": "to notice a sound with your ears",
    "cn_def": "聽見"
  },
  "noticed": {
    "pos": "v.",
    "en_def": "to see or hear something and know that it is there",
    "cn_def": "注意到"
  },
  "forgot": {
    "pos": "v.",
    "en_def": "to not remember",
    "cn_def": "忘記"
  },
  "went": {
    "pos": "v.",
    "en_def": "to move from here to another place",
    "cn_def": "去"
  },
  "came": {
    "pos": "v.",
    "en_def": "to move to the place where the speaker is",
    "cn_def": "來"
  },
  "brought": {
    "pos": "v.",
    "en_def": "to take something or someone with you to a place",
    "cn_def": "帶來"
  },
  "broke": {
    "pos": "v.",
    "en_def": "to make something go into pieces or stop working",
    "cn_def": "打破"
  },
  "dropped": {
    "pos": "v.",
    "en_def": "to let something fall",
    "cn_def": "（使）掉落"
  },
  "finished": {
    "pos": "v.",
    "en_def": "to do all of something, so no part is left",
    "cn_def": "完成"
  },
  "ended": {
    "pos": "v.",
    "en_def": "to stop; to be over",
    "cn_def": "結束"
  },
  "check": {
    "pos": "v.",
    "en_def": "to look at something to see if it is right",
    "cn_def": "檢查"
  },
  "correct": {
    "pos": "v.",
    "en_def": "to make something right",
    "cn_def": "改正"
  },
  "choose": {
    "pos": "v.",
    "en_def": "to pick the one you want",
    "cn_def": "選擇；挑選"
  },
  "cover": {
    "pos": "v.",
    "en_def": "to put something over another thing",
    "cn_def": "覆蓋；蓋住"
  },
  "surprise": {
    "pos": "v.",
    "en_def": "to do something that someone did not expect",
    "cn_def": "使驚訝；給…驚喜"
  },
  "guess": {
    "pos": "v.",
    "en_def": "to give an answer when you are not sure",
    "cn_def": "猜"
  },
  "define": {
    "pos": "v.",
    "en_def": "to say what a word means",
    "cn_def": "解釋；給…下定義"
  },
  "count": {
    "pos": "v.",
    "en_def": "to say numbers in order; to find how many there are",
    "cn_def": "數；計算"
  },
  "copy": {
    "pos": "v.",
    "en_def": "to write or make something that is the same as another thing",
    "cn_def": "抄寫；複製"
  },
  "close": {
    "pos": "v.",
    "en_def": "to shut something",
    "cn_def": "關上"
  },
  "enter": {
    "pos": "v.",
    "en_def": "to go into a place",
    "cn_def": "進入"
  },
  "follow": {
    "pos": "v.",
    "en_def": "to go after someone; to do what someone or a rule says",
    "cn_def": "跟隨；遵循"
  },
  "cheat": {
    "pos": "v.",
    "en_def": "to do something that is not fair to get a better score or to win",
    "cn_def": "作弊；欺騙"
  },
  "worry": {
    "pos": "v.",
    "en_def": "to feel afraid that something bad may happen",
    "cn_def": "擔心"
  }
};

const EXTRA_GLOSSES = {};
