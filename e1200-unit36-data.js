// Unit 36 Quiz Data: Other Verbs (Part 2) 其他動詞（中）（第35中區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U36 - Other Verbs (Part 2)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rise (rises)",
    "pos": "v.",
    "cn_def": "升起；上升",
    "en_def": "to go up",
    "sentence": "Q: Where does the sun come up every morning? — A: It {{BLANK}} in the east.",
    "cn": "太陽每天早上從哪裡出來？ — 它從東方升起。"
  },
  {
    "word": "grow",
    "pos": "v.",
    "cn_def": "種植；生長",
    "en_def": "to get bigger; to help plants live and get bigger",
    "sentence": "Q: Do your grandparents have a farm? — A: Yes, they do. They {{BLANK}} rice and vegetables.",
    "cn": "你的祖父母有農場嗎？ — 有，他們種稻米和蔬菜。"
  },
  {
    "word": "plant",
    "pos": "v.",
    "cn_def": "種植；栽種",
    "en_def": "to put seeds or young trees in the ground",
    "sentence": "Q: What do the students do on Arbor Day? — A: They {{BLANK}} trees.",
    "cn": "學生們在植樹節做什麼？ — 他們種樹。"
  },
  {
    "word": "make (makes)",
    "pos": "v.",
    "cn_def": "製作；做",
    "en_def": "to build, cook, or create something",
    "sentence": "Q: What does your aunt do on weekends? — A: She {{BLANK}} cakes and cookies.",
    "cn": "你阿姨週末做什麼？ — 她做蛋糕和餅乾。"
  },
  {
    "word": "use",
    "pos": "v.",
    "cn_def": "使用",
    "en_def": "to do something with a tool or a thing",
    "sentence": "Q: What do you use to cut paper? — A: I {{BLANK}} scissors.",
    "cn": "你用什麼剪紙？ — 我用剪刀。"
  },
  {
    "word": "help (helps)",
    "pos": "v.",
    "cn_def": "幫忙",
    "en_def": "to do something for someone to make their work easier",
    "sentence": "Q: How does Ben help his mom at home? — A: He {{BLANK}} her wash the dishes.",
    "cn": "班在家怎麼幫媽媽？ — 他幫她洗碗。"
  },
  {
    "word": "walk",
    "pos": "v.",
    "cn_def": "走路",
    "en_def": "to move on your feet",
    "sentence": "Q: How do you and your sister go to school? — A: We {{BLANK}} to school. It's near.",
    "cn": "你和你妹妹怎麼上學？ — 我們走路上學，學校很近。"
  },
  {
    "word": "leave (leaves)",
    "pos": "v.",
    "cn_def": "離開；出發",
    "en_def": "to go away from a place",
    "sentence": "Q: When does your dad leave for work? — A: He {{BLANK}} home at seven.",
    "cn": "你爸爸什麼時候去上班？ — 他七點離開家。"
  },
  {
    "word": "park (parks)",
    "pos": "v.",
    "cn_def": "停（車）",
    "en_def": "to stop a car and leave it somewhere",
    "sentence": "Q: Where does your uncle put his car at night? — A: He {{BLANK}} it in front of his house.",
    "cn": "你叔叔晚上把車放在哪裡？ — 他把車停在他家前面。"
  },
  {
    "word": "open",
    "pos": "v.",
    "cn_def": "打開；開門（營業）",
    "en_def": "to move a door or lid so that things can go in or out; to start business for the day",
    "sentence": "Q: What time do the stores on this street open? — A: They {{BLANK}} at ten in the morning.",
    "cn": "這條街的商店幾點開門？ — 它們早上十點開門。"
  },
  {
    "word": "meet",
    "pos": "v.",
    "cn_def": "和…見面；遇見",
    "en_def": "to see and talk to someone for the first time or at a planned time",
    "sentence": "Q: Where do you and your friends meet after school? — A: We {{BLANK}} at the park.",
    "cn": "你和朋友放學後在哪裡碰面？ — 我們在公園碰面。"
  },
  {
    "word": "call (calls)",
    "pos": "v.",
    "cn_def": "打電話（給）",
    "en_def": "to talk to someone on the phone",
    "sentence": "Q: Does Lisa talk to her grandma every day? — A: Yes, she does. She {{BLANK}} her every evening.",
    "cn": "麗莎每天都和奶奶說話嗎？ — 是的，她每天晚上打電話給她。"
  },
  {
    "word": "miss (misses)",
    "pos": "v.",
    "cn_def": "想念；錯過",
    "en_def": "to feel sad because someone or something is not with you",
    "sentence": "Q: Does Grandpa often talk about his hometown? — A: Yes, he does. He {{BLANK}} it very much.",
    "cn": "爺爺常常談起他的家鄉嗎？ — 是的，他非常想念那裡。"
  },
  {
    "word": "belong (belongs)",
    "pos": "v.",
    "cn_def": "屬於",
    "en_def": "to be owned by someone",
    "sentence": "Q: Does this pen belong to you? — A: No, it doesn't. It {{BLANK}} to Amy.",
    "cn": "這支筆是你的嗎？ — 不是，它是艾美的。"
  },
  {
    "word": "agree",
    "pos": "v.",
    "cn_def": "同意",
    "en_def": "to have the same idea as someone",
    "sentence": "Q: Tom says the movie is great. Do you {{BLANK}} with him? — A: Yes, I do. I like it, too.",
    "cn": "湯姆說這部電影很棒，你同意他嗎？ — 同意，我也喜歡。"
  },
  {
    "word": "allow",
    "pos": "v.",
    "cn_def": "允許",
    "en_def": "to let someone do something",
    "sentence": "Q: Do your parents {{BLANK}} you to play games at night? — A: No, they don't. I have to go to bed at ten.",
    "cn": "你爸媽允許你晚上玩遊戲嗎？ — 不，他們不允許，我十點就得睡覺。"
  },
  {
    "word": "run (running)",
    "pos": "v.",
    "cn_def": "跑",
    "en_def": "to move very fast on your legs",
    "sentence": "Q: What is your dog doing in the yard? — A: It is {{BLANK}} after a ball.",
    "cn": "你的狗在院子裡做什麼？ — 牠正在追著一顆球跑。"
  },
  {
    "word": "jump (jumping)",
    "pos": "v.",
    "cn_def": "跳",
    "en_def": "to push your body up into the air with your legs",
    "sentence": "Q: What are the kids doing in the bedroom? — A: They are {{BLANK}} on the bed.",
    "cn": "孩子們在臥室做什麼？ — 他們正在床上跳。"
  },
  {
    "word": "stand (standing)",
    "pos": "v.",
    "cn_def": "站；站立",
    "en_def": "to be on your feet, not sitting",
    "sentence": "Q: What are the students doing at the bus stop? — A: They are {{BLANK}} in line.",
    "cn": "學生們在公車站做什麼？ — 他們正在排隊站著。"
  },
  {
    "word": "kick (kicking)",
    "pos": "v.",
    "cn_def": "踢",
    "en_def": "to hit something with your foot",
    "sentence": "Q: What is Tom doing on the playground? — A: He is {{BLANK}} a ball.",
    "cn": "湯姆在操場上做什麼？ — 他正在踢球。"
  },
  {
    "word": "hit (hitting)",
    "pos": "v.",
    "cn_def": "打；擊",
    "en_def": "to strike something hard with your hand or a stick",
    "sentence": "Q: What is the baseball player doing? — A: He is {{BLANK}} the ball with a bat.",
    "cn": "那位棒球員在做什麼？ — 他正在用球棒擊球。"
  },
  {
    "word": "pull (pulling)",
    "pos": "v.",
    "cn_def": "拉",
    "en_def": "to move something toward you",
    "sentence": "Q: What are the two teams doing? — A: They are {{BLANK}} a long rope.",
    "cn": "兩隊在做什麼？ — 他們正在拉一條長繩子。"
  },
  {
    "word": "push (pushing)",
    "pos": "v.",
    "cn_def": "推",
    "en_def": "to move something away from you with your hands",
    "sentence": "Q: What is Dad doing? — A: He is {{BLANK}} his bike up the hill.",
    "cn": "爸爸在做什麼？ — 他正把腳踏車推上山坡。"
  },
  {
    "word": "hold (holding)",
    "pos": "v.",
    "cn_def": "抱著；拿著",
    "en_def": "to have something in your hands or arms",
    "sentence": "Q: What is Aunt May doing? — A: She is {{BLANK}} her baby.",
    "cn": "梅阿姨在做什麼？ — 她正抱著她的寶寶。"
  },
  {
    "word": "hang (hanging)",
    "pos": "v.",
    "cn_def": "掛；懸掛",
    "en_def": "to put something up high so that the bottom part is free",
    "sentence": "Q: What is Mom doing on the balcony? — A: She is {{BLANK}} the clothes.",
    "cn": "媽媽在陽台做什麼？ — 她正在晾衣服。"
  },
  {
    "word": "mop (mopping)",
    "pos": "v.",
    "cn_def": "拖（地）",
    "en_def": "to clean the floor with a wet cloth on a long stick",
    "sentence": "Q: What is Grandma doing in the kitchen? — A: She is {{BLANK}} the floor.",
    "cn": "奶奶在廚房做什麼？ — 她正在拖地。"
  },
  {
    "word": "knock (knocking)",
    "pos": "v.",
    "cn_def": "敲",
    "en_def": "to hit a door with your hand to make a sound",
    "sentence": "Q: What is that man doing? — A: He is {{BLANK}} on the door.",
    "cn": "那個男人在做什麼？ — 他正在敲門。"
  },
  {
    "word": "shake (shaking)",
    "pos": "v.",
    "cn_def": "搖動；握（手）",
    "en_def": "to move something quickly up and down or from side to side",
    "sentence": "Q: What are the two players doing after the game? — A: They are {{BLANK}} hands.",
    "cn": "比賽後兩位選手在做什麼？ — 他們正在握手。"
  },
  {
    "word": "wave (waving)",
    "pos": "v.",
    "cn_def": "揮手",
    "en_def": "to move your hand in the air to say hello or good-bye",
    "sentence": "Q: What is Lisa doing at the school gate? — A: She is {{BLANK}} goodbye to her friends.",
    "cn": "麗莎在校門口做什麼？ — 她正在向朋友揮手道別。"
  },
  {
    "word": "kiss (kissing)",
    "pos": "v.",
    "cn_def": "親吻",
    "en_def": "to touch someone with your lips to show love",
    "sentence": "Q: What is the mother doing? — A: She is {{BLANK}} her baby good night.",
    "cn": "那位媽媽在做什麼？ — 她正在親吻寶寶道晚安。"
  },
  {
    "word": "laugh (laughing)",
    "pos": "v.",
    "cn_def": "笑",
    "en_def": "to make a sound with your voice because something is funny",
    "sentence": "Q: Why are the students so noisy? — A: They are {{BLANK}} at a funny joke.",
    "cn": "學生們為什麼那麼吵？ — 他們正在聽一個好笑的笑話大笑。"
  },
  {
    "word": "take (took)",
    "pos": "v.",
    "cn_def": "帶；拿",
    "en_def": "to carry something or go with someone to a place",
    "sentence": "Q: What did you do last Sunday? — A: I {{BLANK}} my dog to the park.",
    "cn": "你上星期日做了什麼？ — 我帶我的狗去公園。"
  },
  {
    "word": "put (put)",
    "pos": "v.",
    "cn_def": "放",
    "en_def": "to move something to a place",
    "sentence": "Q: Where did you put my book? — A: I {{BLANK}} it on your desk.",
    "cn": "你把我的書放在哪裡？ — 我把它放在你的書桌上。"
  },
  {
    "word": "throw (threw)",
    "pos": "v.",
    "cn_def": "丟；扔",
    "en_def": "to send something through the air with your hand",
    "sentence": "Q: What did Tom do with the ball? — A: He {{BLANK}} it to his dog.",
    "cn": "湯姆把球怎麼了？ — 他把球丟給他的狗。"
  },
  {
    "word": "roll (rolled)",
    "pos": "v.",
    "cn_def": "滾動",
    "en_def": "to move by turning over and over, like a ball",
    "sentence": "Q: What happened to your ball? — A: It {{BLANK}} down the hill.",
    "cn": "你的球怎麼了？ — 它滾下山坡了。"
  },
  {
    "word": "pick (picked)",
    "pos": "v.",
    "cn_def": "摘；撿",
    "en_def": "to take fruit or flowers from a plant with your hand",
    "sentence": "Q: What did you do on the farm yesterday? — A: We {{BLANK}} strawberries.",
    "cn": "你們昨天在農場做了什麼？ — 我們摘了草莓。"
  },
  {
    "word": "pack (packed)",
    "pos": "v.",
    "cn_def": "打包；收拾（行李）",
    "en_def": "to put things into a bag or a box",
    "sentence": "Q: Did you get ready for the trip last night? — A: Yes, I did. I {{BLANK}} my bag.",
    "cn": "你昨晚有為旅行做好準備嗎？ — 有，我打包好我的包包了。"
  },
  {
    "word": "move (moved)",
    "pos": "v.",
    "cn_def": "搬家；移動",
    "en_def": "to go to live in a new home; to go from one place to another",
    "sentence": "Q: Did Amy's family move last year? — A: Yes, they did. They {{BLANK}} to Taipei.",
    "cn": "艾美家去年搬家了嗎？ — 是的，他們搬到台北了。"
  },
  {
    "word": "tell (told)",
    "pos": "v.",
    "cn_def": "告訴；講",
    "en_def": "to say something to someone",
    "sentence": "Q: What did Grandma do last night? — A: She {{BLANK}} us a story.",
    "cn": "奶奶昨晚做了什麼？ — 她講了一個故事給我們聽。"
  },
  {
    "word": "begin (began)",
    "pos": "v.",
    "cn_def": "開始",
    "en_def": "to start",
    "sentence": "Q: When did the movie begin last night? — A: It {{BLANK}} at seven.",
    "cn": "昨晚的電影幾點開始？ — 它七點開始。"
  },
  {
    "word": "appear (appeared)",
    "pos": "v.",
    "cn_def": "出現",
    "en_def": "to come out so people can see it",
    "sentence": "Q: Did you see a rainbow yesterday? — A: Yes, I did. It {{BLANK}} after the rain.",
    "cn": "你昨天有看到彩虹嗎？ — 有，它在雨後出現。"
  },
  {
    "word": "hunt (hunted)",
    "pos": "v.",
    "cn_def": "打獵",
    "en_def": "to look for and catch wild animals for food",
    "sentence": "Q: What did people do for food long ago? — A: They {{BLANK}} animals.",
    "cn": "很久以前人們怎麼取得食物？ — 他們打獵。"
  },
  {
    "word": "attack (attacked)",
    "pos": "v.",
    "cn_def": "攻擊",
    "en_def": "to try to hurt someone or something",
    "sentence": "Q: What happened to your cat yesterday? — A: A big dog {{BLANK}} it, but it's OK now.",
    "cn": "你的貓昨天怎麼了？ — 一隻大狗攻擊牠，但牠現在沒事了。"
  },
  {
    "word": "kill (killed)",
    "pos": "v.",
    "cn_def": "殺死",
    "en_def": "to make a person, animal, or plant die",
    "sentence": "Q: What did Dad do in the kitchen last night? — A: He {{BLANK}} a big bug.",
    "cn": "爸爸昨晚在廚房做了什麼？ — 他打死了一隻大蟲。"
  },
  {
    "word": "become",
    "pos": "v.",
    "cn_def": "成為；變成",
    "en_def": "to start to be something",
    "sentence": "Q: Will your brother be a doctor? — A: Yes, he will. He will {{BLANK}} a doctor next year.",
    "cn": "你哥哥會成為醫生嗎？ — 會，他明年會成為醫生。"
  },
  {
    "word": "rest",
    "pos": "v.",
    "cn_def": "休息",
    "en_def": "to stop working and relax",
    "sentence": "Q: What will you do after the long walk? — A: I will {{BLANK}} at home.",
    "cn": "走了很長的路之後你會做什麼？ — 我會在家休息。"
  },
  {
    "word": "list",
    "pos": "v.",
    "cn_def": "列出；列清單",
    "en_def": "to write things down one after another",
    "sentence": "Q: What will you do before you go shopping? — A: I will {{BLANK}} the things I need.",
    "cn": "你去買東西之前會做什麼？ — 我會把需要的東西列出來。"
  },
  {
    "word": "sign",
    "pos": "v.",
    "cn_def": "簽（名）",
    "en_def": "to write your name on something",
    "sentence": "Q: Will your mom look at your test? — A: Yes, she will. She will {{BLANK}} her name on it.",
    "cn": "你媽媽會看你的考卷嗎？ — 會，她會在上面簽名。"
  },
  {
    "word": "paste",
    "pos": "v.",
    "cn_def": "黏貼",
    "en_def": "to stick something onto paper with glue",
    "sentence": "Q: What will you do with these photos? — A: I will {{BLANK}} them in my notebook.",
    "cn": "你會怎麼處理這些照片？ — 我會把它們貼在筆記本裡。"
  },
  {
    "word": "hand",
    "pos": "v.",
    "cn_def": "傳遞；拿給",
    "en_def": "to give something to someone with your hand",
    "sentence": "Q: Can you {{BLANK}} me the salt, please? — A: Sure. Here you are.",
    "cn": "你可以把鹽遞給我嗎？ — 當然，給你。"
  },
  {
    "word": "type",
    "pos": "v.",
    "cn_def": "打字",
    "en_def": "to write using a keyboard",
    "sentence": "Q: Can you {{BLANK}} fast on the computer? — A: Yes, I can. I use it every day.",
    "cn": "你在電腦上打字很快嗎？ — 是的，我每天都用電腦。"
  },
  {
    "word": "hurry",
    "pos": "v.",
    "cn_def": "趕快；匆忙",
    "en_def": "to do something or go somewhere quickly",
    "sentence": "Q: Can I finish my breakfast first? — A: No. {{BLANK}} up! The bus is coming.",
    "cn": "我可以先吃完早餐嗎？ — 不行，快點！公車要來了。"
  },
  {
    "word": "touch",
    "pos": "v.",
    "cn_def": "碰；觸摸",
    "en_def": "to put your hand or finger on something",
    "sentence": "Q: Can I hold the pot? — A: No! Don't {{BLANK}} it. It's very hot.",
    "cn": "我可以拿那個鍋子嗎？ — 不行！別碰它，它很燙。"
  },
  {
    "word": "shout",
    "pos": "v.",
    "cn_def": "大叫；喊叫",
    "en_def": "to say something in a very loud voice",
    "sentence": "Q: Can we play here? — A: Yes, but don't {{BLANK}}. The baby is sleeping.",
    "cn": "我們可以在這裡玩嗎？ — 可以，但不要大叫，寶寶在睡覺。"
  },
  {
    "word": "smoke",
    "pos": "v.",
    "cn_def": "抽菸",
    "en_def": "to breathe in the smoke of a cigarette",
    "sentence": "Q: Can my uncle smoke in the restaurant? — A: No. Please don't {{BLANK}} here.",
    "cn": "我叔叔可以在餐廳裡抽菸嗎？ — 不行，請不要在這裡抽菸。"
  }
];

const MCQS = [
  {
    "q": "Q: Where does the sun come up every morning? — A: It ______ in the east.【升起；上升】",
    "options": [
      "rises",
      "parks",
      "makes",
      "misses"
    ],
    "answer": 0,
    "cn": "太陽每天早上從哪裡出來？ — 它從東方升起。",
    "vocabIndex": 0
  },
  {
    "q": "Q: Do your grandparents have a farm? — A: Yes, they do. They ______ rice and vegetables.【種植；生長】",
    "options": [
      "touch",
      "grow",
      "smoke",
      "list"
    ],
    "answer": 1,
    "cn": "你的祖父母有農場嗎？ — 有，他們種稻米和蔬菜。",
    "vocabIndex": 1
  },
  {
    "q": "Q: What do the students do on Arbor Day? — A: They ______ trees.【種植；栽種】",
    "options": [
      "began",
      "smoke",
      "plant",
      "took"
    ],
    "answer": 2,
    "cn": "學生們在植樹節做什麼？ — 他們種樹。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What does your aunt do on weekends? — A: She ______ cakes and cookies.【製作；做】",
    "options": [
      "leaves",
      "rises",
      "parks",
      "makes"
    ],
    "answer": 3,
    "cn": "你阿姨週末做什麼？ — 她做蛋糕和餅乾。",
    "vocabIndex": 3
  },
  {
    "q": "Q: What do you use to cut paper? — A: I ______ scissors.【使用】",
    "options": [
      "use",
      "rest",
      "grow",
      "meet"
    ],
    "answer": 0,
    "cn": "你用什麼剪紙？ — 我用剪刀。",
    "vocabIndex": 4
  },
  {
    "q": "Q: How does Ben help his mom at home? — A: He ______ her wash the dishes.【幫忙】",
    "options": [
      "calls",
      "helps",
      "rises",
      "leaves"
    ],
    "answer": 1,
    "cn": "班在家怎麼幫媽媽？ — 他幫她洗碗。",
    "vocabIndex": 5
  },
  {
    "q": "Q: How do you and your sister go to school? — A: We ______ to school. It's near.【走路】",
    "options": [
      "shout",
      "rest",
      "use",
      "walk"
    ],
    "answer": 3,
    "cn": "你和你妹妹怎麼上學？ — 我們走路上學，學校很近。",
    "vocabIndex": 6
  },
  {
    "q": "Q: When does your dad leave for work? — A: He ______ home at seven.【離開；出發】",
    "options": [
      "belongs",
      "misses",
      "leaves",
      "makes"
    ],
    "answer": 2,
    "cn": "你爸爸什麼時候去上班？ — 他七點離開家。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Where does your uncle put his car at night? — A: He ______ it in front of his house.【停（車）】",
    "options": [
      "helps",
      "makes",
      "leaves",
      "parks"
    ],
    "answer": 3,
    "cn": "你叔叔晚上把車放在哪裡？ — 他把車停在他家前面。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What time do the stores on this street open? — A: They ______ at ten in the morning.【打開；開門（營業）】",
    "options": [
      "walk",
      "open",
      "grow",
      "sign"
    ],
    "answer": 1,
    "cn": "這條街的商店幾點開門？ — 它們早上十點開門。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Where do you and your friends meet after school? — A: We ______ at the park.【和…見面；遇見】",
    "options": [
      "type",
      "hurry",
      "meet",
      "list"
    ],
    "answer": 2,
    "cn": "你和朋友放學後在哪裡碰面？ — 我們在公園碰面。",
    "vocabIndex": 10
  },
  {
    "q": "Q: Does Lisa talk to her grandma every day? — A: Yes, she does. She ______ her every evening.【打電話（給）】",
    "options": [
      "calls",
      "parks",
      "makes",
      "helps"
    ],
    "answer": 0,
    "cn": "麗莎每天都和奶奶說話嗎？ — 是的，她每天晚上打電話給她。",
    "vocabIndex": 11
  },
  {
    "q": "Q: Does Grandpa often talk about his hometown? — A: Yes, he does. He ______ it very much.【想念；錯過】",
    "options": [
      "calls",
      "misses",
      "rises",
      "belongs"
    ],
    "answer": 1,
    "cn": "爺爺常常談起他的家鄉嗎？ — 是的，他非常想念那裡。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Does this pen belong to you? — A: No, it doesn't. It ______ to Amy.【屬於】",
    "options": [
      "leaves",
      "misses",
      "helps",
      "belongs"
    ],
    "answer": 3,
    "cn": "這支筆是你的嗎？ — 不是，它是艾美的。",
    "vocabIndex": 13
  },
  {
    "q": "Q: Tom says the movie is great. Do you ______ with him? — A: Yes, I do. I like it, too.【同意】",
    "options": [
      "agree",
      "meet",
      "paste",
      "put"
    ],
    "answer": 0,
    "cn": "湯姆說這部電影很棒，你同意他嗎？ — 同意，我也喜歡。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Do your parents ______ you to play games at night? — A: No, they don't. I have to go to bed at ten.【允許】",
    "options": [
      "rest",
      "list",
      "allow",
      "agree"
    ],
    "answer": 2,
    "cn": "你爸媽允許你晚上玩遊戲嗎？ — 不，他們不允許，我十點就得睡覺。",
    "vocabIndex": 15
  },
  {
    "q": "Q: What is your dog doing in the yard? — A: It is ______ after a ball.【跑】",
    "options": [
      "holding",
      "hitting",
      "standing",
      "running"
    ],
    "answer": 3,
    "cn": "你的狗在院子裡做什麼？ — 牠正在追著一顆球跑。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What are the kids doing in the bedroom? — A: They are ______ on the bed.【跳】",
    "options": [
      "kicking",
      "jumping",
      "standing",
      "laughing"
    ],
    "answer": 1,
    "cn": "孩子們在臥室做什麼？ — 他們正在床上跳。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What are the students doing at the bus stop? — A: They are ______ in line.【站；站立】",
    "options": [
      "shaking",
      "holding",
      "standing",
      "hitting"
    ],
    "answer": 2,
    "cn": "學生們在公車站做什麼？ — 他們正在排隊站著。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What is Tom doing on the playground? — A: He is ______ a ball.【踢】",
    "options": [
      "kicking",
      "hitting",
      "running",
      "mopping"
    ],
    "answer": 0,
    "cn": "湯姆在操場上做什麼？ — 他正在踢球。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What is the baseball player doing? — A: He is ______ the ball with a bat.【打；擊】",
    "options": [
      "pushing",
      "holding",
      "hitting",
      "running"
    ],
    "answer": 2,
    "cn": "那位棒球員在做什麼？ — 他正在用球棒擊球。",
    "vocabIndex": 20
  },
  {
    "q": "Q: What are the two teams doing? — A: They are ______ a long rope.【拉】",
    "options": [
      "kicking",
      "running",
      "pushing",
      "pulling"
    ],
    "answer": 3,
    "cn": "兩隊在做什麼？ — 他們正在拉一條長繩子。",
    "vocabIndex": 21
  },
  {
    "q": "Q: What is Dad doing? — A: He is ______ his bike up the hill.【推】",
    "options": [
      "pushing",
      "mopping",
      "waving",
      "hitting"
    ],
    "answer": 0,
    "cn": "爸爸在做什麼？ — 他正把腳踏車推上山坡。",
    "vocabIndex": 22
  },
  {
    "q": "Q: What is Aunt May doing? — A: She is ______ her baby.【抱著；拿著】",
    "options": [
      "pulling",
      "holding",
      "kissing",
      "knocking"
    ],
    "answer": 1,
    "cn": "梅阿姨在做什麼？ — 她正抱著她的寶寶。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What is Mom doing on the balcony? — A: She is ______ the clothes.【掛；懸掛】",
    "options": [
      "waving",
      "pushing",
      "hanging",
      "standing"
    ],
    "answer": 2,
    "cn": "媽媽在陽台做什麼？ — 她正在晾衣服。",
    "vocabIndex": 24
  },
  {
    "q": "Q: What is Grandma doing in the kitchen? — A: She is ______ the floor.【拖（地）】",
    "options": [
      "hanging",
      "hitting",
      "laughing",
      "mopping"
    ],
    "answer": 3,
    "cn": "奶奶在廚房做什麼？ — 她正在拖地。",
    "vocabIndex": 25
  },
  {
    "q": "Q: What is that man doing? — A: He is ______ on the door.【敲】",
    "options": [
      "running",
      "knocking",
      "kicking",
      "standing"
    ],
    "answer": 1,
    "cn": "那個男人在做什麼？ — 他正在敲門。",
    "vocabIndex": 26
  },
  {
    "q": "Q: What are the two players doing after the game? — A: They are ______ hands.【搖動；握（手）】",
    "options": [
      "shaking",
      "jumping",
      "waving",
      "knocking"
    ],
    "answer": 0,
    "cn": "比賽後兩位選手在做什麼？ — 他們正在握手。",
    "vocabIndex": 27
  },
  {
    "q": "Q: What is Lisa doing at the school gate? — A: She is ______ goodbye to her friends.【揮手】",
    "options": [
      "laughing",
      "waving",
      "standing",
      "pushing"
    ],
    "answer": 1,
    "cn": "麗莎在校門口做什麼？ — 她正在向朋友揮手道別。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What is the mother doing? — A: She is ______ her baby good night.【親吻】",
    "options": [
      "running",
      "pushing",
      "kissing",
      "standing"
    ],
    "answer": 2,
    "cn": "那位媽媽在做什麼？ — 她正在親吻寶寶道晚安。",
    "vocabIndex": 29
  },
  {
    "q": "Q: Why are the students so noisy? — A: They are ______ at a funny joke.【笑】",
    "options": [
      "waving",
      "kicking",
      "hitting",
      "laughing"
    ],
    "answer": 3,
    "cn": "學生們為什麼那麼吵？ — 他們正在聽一個好笑的笑話大笑。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What did you do last Sunday? — A: I ______ my dog to the park.【帶；拿】",
    "options": [
      "took",
      "put",
      "paste",
      "plant"
    ],
    "answer": 0,
    "cn": "你上星期日做了什麼？ — 我帶我的狗去公園。",
    "vocabIndex": 31
  },
  {
    "q": "Q: Where did you put my book? — A: I ______ it on your desk.【放】",
    "options": [
      "hand",
      "meet",
      "put",
      "threw"
    ],
    "answer": 2,
    "cn": "你把我的書放在哪裡？ — 我把它放在你的書桌上。",
    "vocabIndex": 32
  },
  {
    "q": "Q: What did Tom do with the ball? — A: He ______ it to his dog.【丟；扔】",
    "options": [
      "threw",
      "allow",
      "touch",
      "walk"
    ],
    "answer": 0,
    "cn": "湯姆把球怎麼了？ — 他把球丟給他的狗。",
    "vocabIndex": 33
  },
  {
    "q": "Q: What happened to your ball? — A: It ______ down the hill.【滾動】",
    "options": [
      "appeared",
      "rolled",
      "moved",
      "hunted"
    ],
    "answer": 1,
    "cn": "你的球怎麼了？ — 它滾下山坡了。",
    "vocabIndex": 34
  },
  {
    "q": "Q: What did you do on the farm yesterday? — A: We ______ strawberries.【摘；撿】",
    "options": [
      "attacked",
      "hunted",
      "killed",
      "picked"
    ],
    "answer": 3,
    "cn": "你們昨天在農場做了什麼？ — 我們摘了草莓。",
    "vocabIndex": 35
  },
  {
    "q": "Q: Did you get ready for the trip last night? — A: Yes, I did. I ______ my bag.【打包；收拾（行李）】",
    "options": [
      "moved",
      "packed",
      "killed",
      "rolled"
    ],
    "answer": 1,
    "cn": "你昨晚有為旅行做好準備嗎？ — 有，我打包好我的包包了。",
    "vocabIndex": 36
  },
  {
    "q": "Q: Did Amy's family move last year? — A: Yes, they did. They ______ to Taipei.【搬家；移動】",
    "options": [
      "rolled",
      "packed",
      "moved",
      "picked"
    ],
    "answer": 2,
    "cn": "艾美家去年搬家了嗎？ — 是的，他們搬到台北了。",
    "vocabIndex": 37
  },
  {
    "q": "Q: What did Grandma do last night? — A: She ______ us a story.【告訴；講】",
    "options": [
      "told",
      "become",
      "open",
      "began"
    ],
    "answer": 0,
    "cn": "奶奶昨晚做了什麼？ — 她講了一個故事給我們聽。",
    "vocabIndex": 38
  },
  {
    "q": "Q: When did the movie begin last night? — A: It ______ at seven.【開始】",
    "options": [
      "put",
      "sign",
      "agree",
      "began"
    ],
    "answer": 3,
    "cn": "昨晚的電影幾點開始？ — 它七點開始。",
    "vocabIndex": 39
  },
  {
    "q": "Q: Did you see a rainbow yesterday? — A: Yes, I did. It ______ after the rain.【出現】",
    "options": [
      "moved",
      "packed",
      "appeared",
      "killed"
    ],
    "answer": 2,
    "cn": "你昨天有看到彩虹嗎？ — 有，它在雨後出現。",
    "vocabIndex": 40
  },
  {
    "q": "Q: What did people do for food long ago? — A: They ______ animals.【打獵】",
    "options": [
      "rolled",
      "hunted",
      "packed",
      "picked"
    ],
    "answer": 1,
    "cn": "很久以前人們怎麼取得食物？ — 他們打獵。",
    "vocabIndex": 41
  },
  {
    "q": "Q: What happened to your cat yesterday? — A: A big dog ______ it, but it's OK now.【攻擊】",
    "options": [
      "attacked",
      "rolled",
      "appeared",
      "picked"
    ],
    "answer": 0,
    "cn": "你的貓昨天怎麼了？ — 一隻大狗攻擊牠，但牠現在沒事了。",
    "vocabIndex": 42
  },
  {
    "q": "Q: What did Dad do in the kitchen last night? — A: He ______ a big bug.【殺死】",
    "options": [
      "packed",
      "hunted",
      "attacked",
      "killed"
    ],
    "answer": 3,
    "cn": "爸爸昨晚在廚房做了什麼？ — 他打死了一隻大蟲。",
    "vocabIndex": 43
  },
  {
    "q": "Q: Will your brother be a doctor? — A: Yes, he will. He will ______ a doctor next year.【成為；變成】",
    "options": [
      "become",
      "use",
      "list",
      "agree"
    ],
    "answer": 0,
    "cn": "你哥哥會成為醫生嗎？ — 會，他明年會成為醫生。",
    "vocabIndex": 44
  },
  {
    "q": "Q: What will you do after the long walk? — A: I will ______ at home.【休息】",
    "options": [
      "threw",
      "rest",
      "plant",
      "hand"
    ],
    "answer": 1,
    "cn": "走了很長的路之後你會做什麼？ — 我會在家休息。",
    "vocabIndex": 45
  },
  {
    "q": "Q: What will you do before you go shopping? — A: I will ______ the things I need.【列出；列清單】",
    "options": [
      "type",
      "meet",
      "list",
      "touch"
    ],
    "answer": 2,
    "cn": "你去買東西之前會做什麼？ — 我會把需要的東西列出來。",
    "vocabIndex": 46
  },
  {
    "q": "Q: Will your mom look at your test? — A: Yes, she will. She will ______ her name on it.【簽（名）】",
    "options": [
      "allow",
      "open",
      "shout",
      "sign"
    ],
    "answer": 3,
    "cn": "你媽媽會看你的考卷嗎？ — 會，她會在上面簽名。",
    "vocabIndex": 47
  },
  {
    "q": "Q: What will you do with these photos? — A: I will ______ them in my notebook.【黏貼】",
    "options": [
      "paste",
      "began",
      "sign",
      "rest"
    ],
    "answer": 0,
    "cn": "你會怎麼處理這些照片？ — 我會把它們貼在筆記本裡。",
    "vocabIndex": 48
  },
  {
    "q": "Q: Can you ______ me the salt, please? — A: Sure. Here you are.【傳遞；拿給】",
    "options": [
      "took",
      "put",
      "hand",
      "told"
    ],
    "answer": 2,
    "cn": "你可以把鹽遞給我嗎？ — 當然，給你。",
    "vocabIndex": 49
  },
  {
    "q": "Q: Can you ______ fast on the computer? — A: Yes, I can. I use it every day.【打字】",
    "options": [
      "rest",
      "type",
      "allow",
      "shout"
    ],
    "answer": 1,
    "cn": "你在電腦上打字很快嗎？ — 是的，我每天都用電腦。",
    "vocabIndex": 50
  },
  {
    "q": "Q: Can I finish my breakfast first? — A: No. ______ up! The bus is coming.【趕快；匆忙】",
    "options": [
      "Meet",
      "Hand",
      "Grow",
      "Hurry"
    ],
    "answer": 3,
    "cn": "我可以先吃完早餐嗎？ — 不行，快點！公車要來了。",
    "vocabIndex": 51
  },
  {
    "q": "Q: Can I hold the pot? — A: No! Don't ______ it. It's very hot.【碰；觸摸】",
    "options": [
      "touch",
      "meet",
      "shout",
      "agree"
    ],
    "answer": 0,
    "cn": "我可以拿那個鍋子嗎？ — 不行！別碰它，它很燙。",
    "vocabIndex": 52
  },
  {
    "q": "Q: Can we play here? — A: Yes, but don't ______. The baby is sleeping.【大叫；喊叫】",
    "options": [
      "hurry",
      "threw",
      "list",
      "shout"
    ],
    "answer": 3,
    "cn": "我們可以在這裡玩嗎？ — 可以，但不要大叫，寶寶在睡覺。",
    "vocabIndex": 53
  },
  {
    "q": "Q: Can my uncle smoke in the restaurant? — A: No. Please don't ______ here.【抽菸】",
    "options": [
      "list",
      "agree",
      "smoke",
      "put"
    ],
    "answer": 2,
    "cn": "我叔叔可以在餐廳裡抽菸嗎？ — 不行，請不要在這裡抽菸。",
    "vocabIndex": 54
  }
];

const LOOKUP = {
  "hand": {
    "pos": "n.",
    "en_def": "the part at the end of your arm that you hold things with",
    "cn_def": "手"
  },
  "grow": {
    "pos": "v.",
    "en_def": "to get bigger or older",
    "cn_def": "成長；長大"
  },
  "plant": {
    "pos": "n.",
    "en_def": "a living thing with leaves and roots, like a tree or a flower",
    "cn_def": "植物"
  },
  "rises": {
    "pos": "v.",
    "en_def": "to go up",
    "cn_def": "升起；上升"
  },
  "makes": {
    "pos": "v.",
    "en_def": "to build, cook, or create something",
    "cn_def": "製作；做"
  },
  "use": {
    "pos": "v.",
    "en_def": "to do something with a tool or a thing",
    "cn_def": "使用"
  },
  "helps": {
    "pos": "v.",
    "en_def": "to do something for someone to make their work easier",
    "cn_def": "幫忙"
  },
  "walk": {
    "pos": "v.",
    "en_def": "to move on your feet",
    "cn_def": "走路"
  },
  "leaves": {
    "pos": "v.",
    "en_def": "to go away from a place",
    "cn_def": "離開；出發"
  },
  "parks": {
    "pos": "v.",
    "en_def": "to stop a car and leave it somewhere",
    "cn_def": "停（車）"
  },
  "open": {
    "pos": "v.",
    "en_def": "to move a door or lid so that things can go in or out; to start business for the day",
    "cn_def": "打開；開門（營業）"
  },
  "meet": {
    "pos": "v.",
    "en_def": "to see and talk to someone for the first time or at a planned time",
    "cn_def": "和…見面；遇見"
  },
  "calls": {
    "pos": "v.",
    "en_def": "to talk to someone on the phone",
    "cn_def": "打電話（給）"
  },
  "misses": {
    "pos": "v.",
    "en_def": "to feel sad because someone or something is not with you",
    "cn_def": "想念；錯過"
  },
  "belongs": {
    "pos": "v.",
    "en_def": "to be owned by someone",
    "cn_def": "屬於"
  },
  "agree": {
    "pos": "v.",
    "en_def": "to have the same idea as someone",
    "cn_def": "同意"
  },
  "allow": {
    "pos": "v.",
    "en_def": "to let someone do something",
    "cn_def": "允許"
  },
  "running": {
    "pos": "v.",
    "en_def": "to move very fast on your legs",
    "cn_def": "跑"
  },
  "jumping": {
    "pos": "v.",
    "en_def": "to push your body up into the air with your legs",
    "cn_def": "跳"
  },
  "standing": {
    "pos": "v.",
    "en_def": "to be on your feet, not sitting",
    "cn_def": "站；站立"
  },
  "kicking": {
    "pos": "v.",
    "en_def": "to hit something with your foot",
    "cn_def": "踢"
  },
  "hitting": {
    "pos": "v.",
    "en_def": "to strike something hard with your hand or a stick",
    "cn_def": "打；擊"
  },
  "pulling": {
    "pos": "v.",
    "en_def": "to move something toward you",
    "cn_def": "拉"
  },
  "pushing": {
    "pos": "v.",
    "en_def": "to move something away from you with your hands",
    "cn_def": "推"
  },
  "holding": {
    "pos": "v.",
    "en_def": "to have something in your hands or arms",
    "cn_def": "抱著；拿著"
  },
  "hanging": {
    "pos": "v.",
    "en_def": "to put something up high so that the bottom part is free",
    "cn_def": "掛；懸掛"
  },
  "mopping": {
    "pos": "v.",
    "en_def": "to clean the floor with a wet cloth on a long stick",
    "cn_def": "拖（地）"
  },
  "knocking": {
    "pos": "v.",
    "en_def": "to hit a door with your hand to make a sound",
    "cn_def": "敲"
  },
  "shaking": {
    "pos": "v.",
    "en_def": "to move something quickly up and down or from side to side",
    "cn_def": "搖動；握（手）"
  },
  "waving": {
    "pos": "v.",
    "en_def": "to move your hand in the air to say hello or good-bye",
    "cn_def": "揮手"
  },
  "kissing": {
    "pos": "v.",
    "en_def": "to touch someone with your lips to show love",
    "cn_def": "親吻"
  },
  "laughing": {
    "pos": "v.",
    "en_def": "to make a sound with your voice because something is funny",
    "cn_def": "笑"
  },
  "took": {
    "pos": "v.",
    "en_def": "to carry something or go with someone to a place",
    "cn_def": "帶；拿"
  },
  "put": {
    "pos": "v.",
    "en_def": "to move something to a place",
    "cn_def": "放"
  },
  "threw": {
    "pos": "v.",
    "en_def": "to send something through the air with your hand",
    "cn_def": "丟；扔"
  },
  "rolled": {
    "pos": "v.",
    "en_def": "to move by turning over and over, like a ball",
    "cn_def": "滾動"
  },
  "picked": {
    "pos": "v.",
    "en_def": "to take fruit or flowers from a plant with your hand",
    "cn_def": "摘；撿"
  },
  "packed": {
    "pos": "v.",
    "en_def": "to put things into a bag or a box",
    "cn_def": "打包；收拾（行李）"
  },
  "moved": {
    "pos": "v.",
    "en_def": "to go to live in a new home; to go from one place to another",
    "cn_def": "搬家；移動"
  },
  "told": {
    "pos": "v.",
    "en_def": "to say something to someone",
    "cn_def": "告訴；講"
  },
  "began": {
    "pos": "v.",
    "en_def": "to start",
    "cn_def": "開始"
  },
  "appeared": {
    "pos": "v.",
    "en_def": "to come out so people can see it",
    "cn_def": "出現"
  },
  "hunted": {
    "pos": "v.",
    "en_def": "to look for and catch wild animals for food",
    "cn_def": "打獵"
  },
  "attacked": {
    "pos": "v.",
    "en_def": "to try to hurt someone or something",
    "cn_def": "攻擊"
  },
  "killed": {
    "pos": "v.",
    "en_def": "to make a person, animal, or plant die",
    "cn_def": "殺死"
  },
  "become": {
    "pos": "v.",
    "en_def": "to start to be something",
    "cn_def": "成為；變成"
  },
  "rest": {
    "pos": "v.",
    "en_def": "to stop working and relax",
    "cn_def": "休息"
  },
  "list": {
    "pos": "v.",
    "en_def": "to write things down one after another",
    "cn_def": "列出；列清單"
  },
  "sign": {
    "pos": "v.",
    "en_def": "to write your name on something",
    "cn_def": "簽（名）"
  },
  "paste": {
    "pos": "v.",
    "en_def": "to stick something onto paper with glue",
    "cn_def": "黏貼"
  },
  "type": {
    "pos": "v.",
    "en_def": "to write using a keyboard",
    "cn_def": "打字"
  },
  "hurry": {
    "pos": "v.",
    "en_def": "to do something or go somewhere quickly",
    "cn_def": "趕快；匆忙"
  },
  "touch": {
    "pos": "v.",
    "en_def": "to put your hand or finger on something",
    "cn_def": "碰；觸摸"
  },
  "shout": {
    "pos": "v.",
    "en_def": "to say something in a very loud voice",
    "cn_def": "大叫；喊叫"
  },
  "smoke": {
    "pos": "v.",
    "en_def": "to breathe in the smoke of a cigarette",
    "cn_def": "抽菸"
  }
};

const EXTRA_GLOSSES = {};
