// Unit 37 Quiz Data: Other Verbs (Part 3) 其他動詞（下）（第35下區）
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小1200字 U37 - Other Verbs (Part 3)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "care (cares)",
    "pos": "v.",
    "cn_def": "關心；在乎",
    "en_def": "to think that someone or something is important",
    "sentence": "Q: Does Lisa care about her friends? — A: Yes, she does. She {{BLANK}} about them a lot.",
    "cn": "麗莎關心她的朋友嗎？ — 是的，她非常關心他們。"
  },
  {
    "word": "enjoy",
    "pos": "v.",
    "cn_def": "喜愛；享受",
    "en_def": "to like doing something",
    "sentence": "Q: What do you and your friends do on weekends? — A: We {{BLANK}} playing basketball.",
    "cn": "你和朋友週末做什麼？ — 我們喜歡打籃球。"
  },
  {
    "word": "own (owns)",
    "pos": "v.",
    "cn_def": "擁有",
    "en_def": "to have something that is yours",
    "sentence": "Q: Does your uncle have a farm? — A: Yes, he does. He {{BLANK}} a big farm in the country.",
    "cn": "你叔叔有農場嗎？ — 有，他在鄉下擁有一座大農場。"
  },
  {
    "word": "pray (prays)",
    "pos": "v.",
    "cn_def": "祈禱；拜拜",
    "en_def": "to talk to God or the gods",
    "sentence": "Q: What does Grandma do at the temple? — A: She {{BLANK}} for our family.",
    "cn": "奶奶在廟裡做什麼？ — 她為我們家祈福。"
  },
  {
    "word": "sleep",
    "pos": "v.",
    "cn_def": "睡覺",
    "en_def": "to rest with your eyes closed, as you do at night",
    "sentence": "Q: When do you go to bed? — A: At ten. I {{BLANK}} for eight hours.",
    "cn": "你幾點上床？ — 十點，我睡八個小時。"
  },
  {
    "word": "stay",
    "pos": "v.",
    "cn_def": "停留；待",
    "en_def": "to not leave a place",
    "sentence": "Q: What do you do on rainy days? — A: I {{BLANK}} at home and read.",
    "cn": "你下雨天做什麼？ — 我待在家看書。"
  },
  {
    "word": "visit (visits)",
    "pos": "v.",
    "cn_def": "拜訪；參觀",
    "en_def": "to go to see a person or a place",
    "sentence": "Q: What does Ben do on Sundays? — A: He {{BLANK}} his grandparents.",
    "cn": "班星期日做什麼？ — 他去探望祖父母。"
  },
  {
    "word": "wake (wakes)",
    "pos": "v.",
    "cn_def": "醒來",
    "en_def": "to stop sleeping",
    "sentence": "Q: When does your brother get up? — A: He {{BLANK}} up at six every day.",
    "cn": "你哥哥幾點起床？ — 他每天六點醒來。"
  },
  {
    "word": "mean (means)",
    "pos": "v.",
    "cn_def": "意思是",
    "en_def": "to have the same idea as another word; to say",
    "sentence": "Q: Do you know the word \"glad\"? — A: Yes, I do. It {{BLANK}} \"happy.\"",
    "cn": "你知道 glad 這個字嗎？ — 知道，它的意思是「高興」。"
  },
  {
    "word": "sell",
    "pos": "v.",
    "cn_def": "賣",
    "en_def": "to give something to someone for money",
    "sentence": "Q: What do the people at the market do? — A: They {{BLANK}} fruit and vegetables.",
    "cn": "市場裡的人做什麼？ — 他們賣水果和蔬菜。"
  },
  {
    "word": "keep (keeps)",
    "pos": "v.",
    "cn_def": "保存；保持",
    "en_def": "to have something in one place; to not give or throw something away",
    "sentence": "Q: Where does Mom put the milk? — A: She {{BLANK}} it in the fridge.",
    "cn": "媽媽把牛奶放在哪裡？ — 她把它保存在冰箱裡。"
  },
  {
    "word": "lead (leads)",
    "pos": "v.",
    "cn_def": "帶領；引導",
    "en_def": "to go in front and show the way",
    "sentence": "Q: What does the team leader do on the trip? — A: He {{BLANK}} the way.",
    "cn": "旅行時隊長做什麼？ — 他帶路。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享",
    "en_def": "to let someone have or use part of what you have",
    "sentence": "Q: What do you do with your cookies? — A: I {{BLANK}} them with my friends.",
    "cn": "你怎麼處理你的餅乾？ — 我和朋友分享。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "存（錢）；救",
    "en_def": "to keep money and not spend it; to take someone out of danger",
    "sentence": "Q: Do you and your sister spend all your money? — A: No, we don't. We {{BLANK}} it to buy a bike.",
    "cn": "你和妹妹會把錢都花光嗎？ — 不會，我們存錢買腳踏車。"
  },
  {
    "word": "start (starts)",
    "pos": "v.",
    "cn_def": "開始",
    "en_def": "to begin",
    "sentence": "Q: When does your first class begin? — A: It {{BLANK}} at eight.",
    "cn": "你的第一堂課幾點開始？ — 它八點開始。"
  },
  {
    "word": "date (dates)",
    "pos": "v.",
    "cn_def": "和…約會",
    "en_def": "to go out with a boyfriend or girlfriend",
    "sentence": "Q: Does your big sister have a boyfriend? — A: Yes, she does. She {{BLANK}} Tom. They go to the movies on Saturdays.",
    "cn": "你姊姊有男朋友嗎？ — 有，她和湯姆約會，他們星期六去看電影。"
  },
  {
    "word": "expect",
    "pos": "v.",
    "cn_def": "期待；預期",
    "en_def": "to think that something will happen",
    "sentence": "Q: Do you think you can do well on the test? — A: Yes, I do. I {{BLANK}} to get a good grade.",
    "cn": "你覺得你考試會考好嗎？ — 會，我期待拿到好成績。"
  },
  {
    "word": "sit (sitting)",
    "pos": "v.",
    "cn_def": "坐",
    "en_def": "to rest on a chair or on the ground, not standing",
    "sentence": "Q: What is Grandpa doing in the park? — A: He is {{BLANK}} on a bench.",
    "cn": "爺爺在公園做什麼？ — 他正坐在長椅上。"
  },
  {
    "word": "lie (lying)",
    "pos": "v.",
    "cn_def": "躺",
    "en_def": "to have your body flat on a bed or on the ground",
    "sentence": "Q: What is the cat doing? — A: It is {{BLANK}} in the sun.",
    "cn": "那隻貓在做什麼？ — 牠正躺在陽光下。"
  },
  {
    "word": "hide (hiding)",
    "pos": "v.",
    "cn_def": "躲藏；隱藏",
    "en_def": "to go where no one can see or find you",
    "sentence": "Q: What are the kids doing behind the door? — A: They are {{BLANK}} from their mom.",
    "cn": "孩子們在門後做什麼？ — 他們正在躲媽媽。"
  },
  {
    "word": "hop (hopping)",
    "pos": "v.",
    "cn_def": "跳；單腳跳",
    "en_def": "to make short, quick jumps",
    "sentence": "Q: What is the rabbit doing in the garden? — A: It is {{BLANK}} around.",
    "cn": "兔子在花園裡做什麼？ — 牠正在跳來跳去。"
  },
  {
    "word": "wait (waiting)",
    "pos": "v.",
    "cn_def": "等待",
    "en_def": "to stay in a place until someone comes or something happens",
    "sentence": "Q: What are you doing at the bus stop? — A: I'm {{BLANK}} for the bus.",
    "cn": "你在公車站做什麼？ — 我正在等公車。"
  },
  {
    "word": "prepare (preparing)",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to make something ready",
    "sentence": "Q: What is Mom doing in the kitchen? — A: She is {{BLANK}} dinner.",
    "cn": "媽媽在廚房做什麼？ — 她正在準備晚餐。"
  },
  {
    "word": "plan (planning)",
    "pos": "v.",
    "cn_def": "計畫",
    "en_def": "to think about what you will do and how to do it",
    "sentence": "Q: What are your parents doing? — A: They are {{BLANK}} a trip to Japan.",
    "cn": "你爸媽在做什麼？ — 他們正在計畫去日本旅行。"
  },
  {
    "word": "fill (filling)",
    "pos": "v.",
    "cn_def": "裝滿",
    "en_def": "to put so much into something that there is no more space",
    "sentence": "Q: What is Dad doing with the bottle? — A: He is {{BLANK}} it with water.",
    "cn": "爸爸在用瓶子做什麼？ — 他正在把它裝滿水。"
  },
  {
    "word": "show (showing)",
    "pos": "v.",
    "cn_def": "給…看；展示",
    "en_def": "to let someone see something",
    "sentence": "Q: What is Amy doing? — A: She is {{BLANK}} her new bike to her friends.",
    "cn": "艾美在做什麼？ — 她正在給朋友看她的新腳踏車。"
  },
  {
    "word": "upload (uploading)",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to send a file or photo from your computer or phone to the Internet",
    "sentence": "Q: What is your sister doing on the computer? — A: She is {{BLANK}} her photos to the Internet.",
    "cn": "你妹妹在電腦上做什麼？ — 她正在把照片上傳到網路。"
  },
  {
    "word": "download (downloading)",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to get a file or game from the Internet onto your computer or phone",
    "sentence": "Q: What is Ben doing with his cellphone? — A: He is {{BLANK}} a new game.",
    "cn": "班在用手機做什麼？ — 他正在下載一個新遊戲。"
  },
  {
    "word": "find (found)",
    "pos": "v.",
    "cn_def": "找到",
    "en_def": "to see or get something after you look for it",
    "sentence": "Q: Where was your key? — A: I {{BLANK}} it under the bed.",
    "cn": "你的鑰匙在哪裡？ — 我在床底下找到它。"
  },
  {
    "word": "get (got)",
    "pos": "v.",
    "cn_def": "得到；收到",
    "en_def": "to be given something",
    "sentence": "Q: What was your birthday present? — A: I {{BLANK}} a new watch.",
    "cn": "你的生日禮物是什麼？ — 我收到一支新手錶。"
  },
  {
    "word": "give (gave)",
    "pos": "v.",
    "cn_def": "給",
    "en_def": "to let someone have something",
    "sentence": "Q: What did Tom do on Mother's Day? — A: He {{BLANK}} his mom a card.",
    "cn": "湯姆在母親節做了什麼？ — 他給媽媽一張卡片。"
  },
  {
    "word": "send (sent)",
    "pos": "v.",
    "cn_def": "寄；送",
    "en_def": "to make a letter or package go to another place",
    "sentence": "Q: What did you do at the post office yesterday? — A: I {{BLANK}} a letter to my grandma.",
    "cn": "你昨天在郵局做了什麼？ — 我寄了一封信給奶奶。"
  },
  {
    "word": "invite (invited)",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone to come to a party or a meal",
    "sentence": "Q: Who did Lisa ask to her party last week? — A: She {{BLANK}} all her classmates.",
    "cn": "麗莎上週請誰去她的派對？ — 她邀請了全班同學。"
  },
  {
    "word": "join (joined)",
    "pos": "v.",
    "cn_def": "加入",
    "en_def": "to become a member of a group or club",
    "sentence": "Q: Did Ben become a club member last year? — A: Yes, he did. He {{BLANK}} the music club.",
    "cn": "班去年有成為社團成員嗎？ — 有，他加入了音樂社。"
  },
  {
    "word": "reach (reached)",
    "pos": "v.",
    "cn_def": "到達；伸手拿到",
    "en_def": "to get to a place",
    "sentence": "Q: When did you get to the top of the mountain? — A: We {{BLANK}} the top at noon.",
    "cn": "你們什麼時候到山頂的？ — 我們中午到達山頂。"
  },
  {
    "word": "fall (fell)",
    "pos": "v.",
    "cn_def": "跌倒；落下",
    "en_def": "to drop down to the ground",
    "sentence": "Q: Why did you go to the nurse's office yesterday? — A: I {{BLANK}} down on the playground.",
    "cn": "你昨天為什麼去保健室？ — 我在操場上跌倒了。"
  },
  {
    "word": "hurt (hurt)",
    "pos": "v.",
    "cn_def": "弄傷；受傷",
    "en_def": "to make part of the body feel pain",
    "sentence": "Q: What's wrong with your knee? — A: I {{BLANK}} it in PE class yesterday.",
    "cn": "你的膝蓋怎麼了？ — 我昨天上體育課時弄傷了它。"
  },
  {
    "word": "happen (happened)",
    "pos": "v.",
    "cn_def": "發生",
    "en_def": "to take place",
    "sentence": "Q: What {{BLANK}} to your bike last night? — A: A car hit it.",
    "cn": "你的腳踏車昨晚發生了什麼事？ — 被一輛車撞了。"
  },
  {
    "word": "die (died)",
    "pos": "v.",
    "cn_def": "死",
    "en_def": "to stop living",
    "sentence": "Q: Do you still have your fish? — A: No, I don't. It {{BLANK}} last week.",
    "cn": "你還有養那條魚嗎？ — 沒有，牠上週死了。"
  },
  {
    "word": "disappear (disappeared)",
    "pos": "v.",
    "cn_def": "消失",
    "en_def": "to go away so that no one can see it",
    "sentence": "Q: Where is the cake on the table? — A: I don't know. It {{BLANK}} this morning!",
    "cn": "桌上的蛋糕在哪裡？ — 我不知道，它今天早上不見了！"
  },
  {
    "word": "lay (laid)",
    "pos": "v.",
    "cn_def": "下（蛋）；放置",
    "en_def": "(of a bird) to make an egg come out",
    "sentence": "Q: What did the hen do this morning? — A: It {{BLANK}} two eggs.",
    "cn": "那隻母雞今天早上做了什麼？ — 牠下了兩顆蛋。"
  },
  {
    "word": "lie (lied)",
    "pos": "v.",
    "cn_def": "說謊",
    "en_def": "to say something that is not true",
    "sentence": "Q: Why is Mom angry with Tom? — A: Because he {{BLANK}} to her yesterday.",
    "cn": "媽媽為什麼生湯姆的氣？ — 因為他昨天對她說謊。"
  },
  {
    "word": "decide",
    "pos": "v.",
    "cn_def": "決定",
    "en_def": "to choose what to do after thinking",
    "sentence": "Q: Will you buy the red bag or the blue bag? — A: I don't know. I will {{BLANK}} later.",
    "cn": "你會買紅色還是藍色的包包？ — 我不知道，我等一下再決定。"
  },
  {
    "word": "deal",
    "pos": "v.",
    "cn_def": "處理（deal with）",
    "en_def": "(with \"with\") to take care of a problem",
    "sentence": "Q: Who will help with this problem? — A: Don't worry. I will {{BLANK}} with it.",
    "cn": "誰會幫忙處理這個問題？ — 別擔心，我會處理。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋",
    "en_def": "to tell someone about something so they can understand it",
    "sentence": "Q: Will the teacher talk about the new words tomorrow? — A: Yes, she will. She will {{BLANK}} them to us.",
    "cn": "老師明天會講新單字嗎？ — 會，她會跟我們解釋。"
  },
  {
    "word": "treat",
    "pos": "v.",
    "cn_def": "請客；對待",
    "en_def": "to pay for someone's food or drink; to act toward someone in some way",
    "sentence": "Q: What will you do for your mom on her birthday? — A: I will {{BLANK}} her to dinner.",
    "cn": "媽媽生日那天你會為她做什麼？ — 我會請她吃晚餐。"
  },
  {
    "word": "raise",
    "pos": "v.",
    "cn_def": "舉起；養育",
    "en_def": "to lift something up; to take care of a child until he or she grows up",
    "sentence": "Q: What will you do if you know the answer? — A: I will {{BLANK}} my hand.",
    "cn": "如果你知道答案你會做什麼？ — 我會舉手。"
  },
  {
    "word": "please",
    "pos": "v.",
    "cn_def": "使高興；取悅",
    "en_def": "to make someone happy",
    "sentence": "Q: Can you {{BLANK}} everyone? — A: No, I can't. That's too hard.",
    "cn": "你能讓每個人都高興嗎？ — 不行，那太難了。"
  },
  {
    "word": "thank",
    "pos": "v.",
    "cn_def": "感謝",
    "en_def": "to tell someone you are glad for what they did",
    "sentence": "Q: What do you say when someone helps you? — A: {{BLANK}} you very much.",
    "cn": "有人幫你時你會說什麼？ — 非常謝謝你。"
  },
  {
    "word": "welcome",
    "pos": "v.",
    "cn_def": "歡迎",
    "en_def": "to say hello in a friendly way to someone who comes",
    "sentence": "Q: What does the teacher say to the new students? — A: She says, \"{{BLANK}} to our school!\"",
    "cn": "老師對新生說什麼？ — 她說：「歡迎來到我們學校！」"
  },
  {
    "word": "excuse",
    "pos": "v.",
    "cn_def": "原諒（Excuse me.）",
    "en_def": "to forgive someone for a small thing",
    "sentence": "Q: How do you ask a stranger for help? — A: {{BLANK}} me. Can you help me?",
    "cn": "你怎麼向陌生人求助？ — 不好意思，你可以幫我嗎？"
  },
  {
    "word": "cheer up",
    "pos": "phr.",
    "cn_def": "打起精神；振作",
    "en_def": "to become happier; to stop feeling sad",
    "sentence": "Q: My dog is sick. I'm so sad. — A: {{BLANK}}! It will be OK.",
    "cn": "我的狗生病了，我好難過。 — 打起精神！會沒事的。",
    "nblanks": 2
  },
  {
    "word": "nod",
    "pos": "v.",
    "cn_def": "點頭",
    "en_def": "to move your head up and down to say \"yes\"",
    "sentence": "Q: Can you say \"yes\" without words? — A: Yes, I can. I can {{BLANK}} my head.",
    "cn": "你可以不說話表示「是」嗎？ — 可以，我可以點頭。"
  },
  {
    "word": "stop",
    "pos": "v.",
    "cn_def": "停止；停",
    "en_def": "to not move or not do something anymore",
    "sentence": "Q: The light is red. Can we cross the street? — A: No. {{BLANK}}! Wait for the green light.",
    "cn": "紅燈了，我們可以過馬路嗎？ — 不行，停！等綠燈。"
  },
  {
    "word": "try",
    "pos": "v.",
    "cn_def": "嘗試；試",
    "en_def": "to see if you can do something",
    "sentence": "Q: Can I have some of your cake? — A: Sure. {{BLANK}} it. It's yummy.",
    "cn": "我可以吃一點你的蛋糕嗎？ — 當然，試試看，很好吃。"
  },
  {
    "word": "let",
    "pos": "v.",
    "cn_def": "讓",
    "en_def": "to allow someone to do something",
    "sentence": "Q: Mom, can you help me with this heavy box? — A: Sure. {{BLANK}} me carry it for you.",
    "cn": "媽，你可以幫我搬這個重箱子嗎？ — 當然，讓我幫你搬。"
  }
];

const MCQS = [
  {
    "q": "Q: Does Lisa care about her friends? — A: Yes, she does. She ______ about them a lot.【關心；在乎】",
    "options": [
      "cares",
      "visits",
      "wakes",
      "owns"
    ],
    "answer": 0,
    "cn": "麗莎關心她的朋友嗎？ — 是的，她非常關心他們。",
    "vocabIndex": 0
  },
  {
    "q": "Q: What do you and your friends do on weekends? — A: We ______ playing basketball.【喜愛；享受】",
    "options": [
      "let",
      "deal",
      "enjoy",
      "found"
    ],
    "answer": 2,
    "cn": "你和朋友週末做什麼？ — 我們喜歡打籃球。",
    "vocabIndex": 1
  },
  {
    "q": "Q: Does your uncle have a farm? — A: Yes, he does. He ______ a big farm in the country.【擁有】",
    "options": [
      "prays",
      "visits",
      "means",
      "owns"
    ],
    "answer": 3,
    "cn": "你叔叔有農場嗎？ — 有，他在鄉下擁有一座大農場。",
    "vocabIndex": 2
  },
  {
    "q": "Q: What does Grandma do at the temple? — A: She ______ for our family.【祈禱；拜拜】",
    "options": [
      "owns",
      "prays",
      "leads",
      "starts"
    ],
    "answer": 1,
    "cn": "奶奶在廟裡做什麼？ — 她為我們家祈福。",
    "vocabIndex": 3
  },
  {
    "q": "Q: When do you go to bed? — A: At ten. I ______ for eight hours.【睡覺】",
    "options": [
      "deal",
      "decide",
      "sleep",
      "stay"
    ],
    "answer": 2,
    "cn": "你幾點上床？ — 十點，我睡八個小時。",
    "vocabIndex": 4
  },
  {
    "q": "Q: What do you do on rainy days? — A: I ______ at home and read.【停留；待】",
    "options": [
      "excuse",
      "laid",
      "got",
      "stay"
    ],
    "answer": 3,
    "cn": "你下雨天做什麼？ — 我待在家看書。",
    "vocabIndex": 5
  },
  {
    "q": "Q: What does Ben do on Sundays? — A: He ______ his grandparents.【拜訪；參觀】",
    "options": [
      "visits",
      "wakes",
      "starts",
      "prays"
    ],
    "answer": 0,
    "cn": "班星期日做什麼？ — 他去探望祖父母。",
    "vocabIndex": 6
  },
  {
    "q": "Q: When does your brother get up? — A: He ______ up at six every day.【醒來】",
    "options": [
      "means",
      "wakes",
      "visits",
      "cares"
    ],
    "answer": 1,
    "cn": "你哥哥幾點起床？ — 他每天六點醒來。",
    "vocabIndex": 7
  },
  {
    "q": "Q: Do you know the word \"glad\"? — A: Yes, I do. It ______ \"happy.\"【意思是】",
    "options": [
      "means",
      "wakes",
      "prays",
      "visits"
    ],
    "answer": 0,
    "cn": "你知道 glad 這個字嗎？ — 知道，它的意思是「高興」。",
    "vocabIndex": 8
  },
  {
    "q": "Q: What do the people at the market do? — A: They ______ fruit and vegetables.【賣】",
    "options": [
      "thank",
      "sell",
      "decide",
      "sent"
    ],
    "answer": 1,
    "cn": "市場裡的人做什麼？ — 他們賣水果和蔬菜。",
    "vocabIndex": 9
  },
  {
    "q": "Q: Where does Mom put the milk? — A: She ______ it in the fridge.【保存；保持】",
    "options": [
      "leads",
      "dates",
      "owns",
      "keeps"
    ],
    "answer": 3,
    "cn": "媽媽把牛奶放在哪裡？ — 她把它保存在冰箱裡。",
    "vocabIndex": 10
  },
  {
    "q": "Q: What does the team leader do on the trip? — A: He ______ the way.【帶領；引導】",
    "options": [
      "keeps",
      "wakes",
      "leads",
      "dates"
    ],
    "answer": 2,
    "cn": "旅行時隊長做什麼？ — 他帶路。",
    "vocabIndex": 11
  },
  {
    "q": "Q: What do you do with your cookies? — A: I ______ them with my friends.【分享】",
    "options": [
      "please",
      "share",
      "expect",
      "try"
    ],
    "answer": 1,
    "cn": "你怎麼處理你的餅乾？ — 我和朋友分享。",
    "vocabIndex": 12
  },
  {
    "q": "Q: Do you and your sister spend all your money? — A: No, we don't. We ______ it to buy a bike.【存（錢）；救】",
    "options": [
      "welcome",
      "laid",
      "save",
      "try"
    ],
    "answer": 2,
    "cn": "你和妹妹會把錢都花光嗎？ — 不會，我們存錢買腳踏車。",
    "vocabIndex": 13
  },
  {
    "q": "Q: When does your first class begin? — A: It ______ at eight.【開始】",
    "options": [
      "starts",
      "means",
      "prays",
      "owns"
    ],
    "answer": 0,
    "cn": "你的第一堂課幾點開始？ — 它八點開始。",
    "vocabIndex": 14
  },
  {
    "q": "Q: Does your big sister have a boyfriend? — A: Yes, she does. She ______ Tom. They go to the movies on Saturdays.【和…約會】",
    "options": [
      "owns",
      "visits",
      "keeps",
      "dates"
    ],
    "answer": 3,
    "cn": "你姊姊有男朋友嗎？ — 有，她和湯姆約會，他們星期六去看電影。",
    "vocabIndex": 15
  },
  {
    "q": "Q: Do you think you can do well on the test? — A: Yes, I do. I ______ to get a good grade.【期待；預期】",
    "options": [
      "expect",
      "please",
      "gave",
      "treat"
    ],
    "answer": 0,
    "cn": "你覺得你考試會考好嗎？ — 會，我期待拿到好成績。",
    "vocabIndex": 16
  },
  {
    "q": "Q: What is Grandpa doing in the park? — A: He is ______ on a bench.【坐】",
    "options": [
      "uploading",
      "lying",
      "downloading",
      "sitting"
    ],
    "answer": 3,
    "cn": "爺爺在公園做什麼？ — 他正坐在長椅上。",
    "vocabIndex": 17
  },
  {
    "q": "Q: What is the cat doing? — A: It is ______ in the sun.【躺】",
    "options": [
      "waiting",
      "lying",
      "hopping",
      "downloading"
    ],
    "answer": 1,
    "cn": "那隻貓在做什麼？ — 牠正躺在陽光下。",
    "vocabIndex": 18
  },
  {
    "q": "Q: What are the kids doing behind the door? — A: They are ______ from their mom.【躲藏；隱藏】",
    "options": [
      "waiting",
      "showing",
      "hiding",
      "planning"
    ],
    "answer": 2,
    "cn": "孩子們在門後做什麼？ — 他們正在躲媽媽。",
    "vocabIndex": 19
  },
  {
    "q": "Q: What is the rabbit doing in the garden? — A: It is ______ around.【跳；單腳跳】",
    "options": [
      "preparing",
      "hiding",
      "sitting",
      "hopping"
    ],
    "answer": 3,
    "cn": "兔子在花園裡做什麼？ — 牠正在跳來跳去。",
    "vocabIndex": 20
  },
  {
    "q": "Q: What are you doing at the bus stop? — A: I'm ______ for the bus.【等待】",
    "options": [
      "preparing",
      "waiting",
      "lying",
      "downloading"
    ],
    "answer": 1,
    "cn": "你在公車站做什麼？ — 我正在等公車。",
    "vocabIndex": 21
  },
  {
    "q": "Q: What is Mom doing in the kitchen? — A: She is ______ dinner.【準備】",
    "options": [
      "preparing",
      "filling",
      "waiting",
      "hopping"
    ],
    "answer": 0,
    "cn": "媽媽在廚房做什麼？ — 她正在準備晚餐。",
    "vocabIndex": 22
  },
  {
    "q": "Q: What are your parents doing? — A: They are ______ a trip to Japan.【計畫】",
    "options": [
      "hopping",
      "hiding",
      "planning",
      "uploading"
    ],
    "answer": 2,
    "cn": "你爸媽在做什麼？ — 他們正在計畫去日本旅行。",
    "vocabIndex": 23
  },
  {
    "q": "Q: What is Dad doing with the bottle? — A: He is ______ it with water.【裝滿】",
    "options": [
      "filling",
      "uploading",
      "preparing",
      "waiting"
    ],
    "answer": 0,
    "cn": "爸爸在用瓶子做什麼？ — 他正在把它裝滿水。",
    "vocabIndex": 24
  },
  {
    "q": "Q: What is Amy doing? — A: She is ______ her new bike to her friends.【給…看；展示】",
    "options": [
      "lying",
      "showing",
      "hiding",
      "sitting"
    ],
    "answer": 1,
    "cn": "艾美在做什麼？ — 她正在給朋友看她的新腳踏車。",
    "vocabIndex": 25
  },
  {
    "q": "Q: What is your sister doing on the computer? — A: She is ______ her photos to the Internet.【上傳】",
    "options": [
      "planning",
      "hopping",
      "lying",
      "uploading"
    ],
    "answer": 3,
    "cn": "你妹妹在電腦上做什麼？ — 她正在把照片上傳到網路。",
    "vocabIndex": 26
  },
  {
    "q": "Q: What is Ben doing with his cellphone? — A: He is ______ a new game.【下載】",
    "options": [
      "lying",
      "planning",
      "downloading",
      "filling"
    ],
    "answer": 2,
    "cn": "班在用手機做什麼？ — 他正在下載一個新遊戲。",
    "vocabIndex": 27
  },
  {
    "q": "Q: Where was your key? — A: I ______ it under the bed.【找到】",
    "options": [
      "share",
      "laid",
      "expect",
      "found"
    ],
    "answer": 3,
    "cn": "你的鑰匙在哪裡？ — 我在床底下找到它。",
    "vocabIndex": 28
  },
  {
    "q": "Q: What was your birthday present? — A: I ______ a new watch.【得到；收到】",
    "options": [
      "stay",
      "got",
      "sleep",
      "sell"
    ],
    "answer": 1,
    "cn": "你的生日禮物是什麼？ — 我收到一支新手錶。",
    "vocabIndex": 29
  },
  {
    "q": "Q: What did Tom do on Mother's Day? — A: He ______ his mom a card.【給】",
    "options": [
      "enjoy",
      "nod",
      "gave",
      "treat"
    ],
    "answer": 2,
    "cn": "湯姆在母親節做了什麼？ — 他給媽媽一張卡片。",
    "vocabIndex": 30
  },
  {
    "q": "Q: What did you do at the post office yesterday? — A: I ______ a letter to my grandma.【寄；送】",
    "options": [
      "sent",
      "got",
      "excuse",
      "share"
    ],
    "answer": 0,
    "cn": "你昨天在郵局做了什麼？ — 我寄了一封信給奶奶。",
    "vocabIndex": 31
  },
  {
    "q": "Q: Who did Lisa ask to her party last week? — A: She ______ all her classmates.【邀請】",
    "options": [
      "happened",
      "lied",
      "reached",
      "invited"
    ],
    "answer": 3,
    "cn": "麗莎上週請誰去她的派對？ — 她邀請了全班同學。",
    "vocabIndex": 32
  },
  {
    "q": "Q: Did Ben become a club member last year? — A: Yes, he did. He ______ the music club.【加入】",
    "options": [
      "joined",
      "happened",
      "died",
      "disappeared"
    ],
    "answer": 0,
    "cn": "班去年有成為社團成員嗎？ — 有，他加入了音樂社。",
    "vocabIndex": 33
  },
  {
    "q": "Q: When did you get to the top of the mountain? — A: We ______ the top at noon.【到達；伸手拿到】",
    "options": [
      "invited",
      "joined",
      "reached",
      "disappeared"
    ],
    "answer": 2,
    "cn": "你們什麼時候到山頂的？ — 我們中午到達山頂。",
    "vocabIndex": 34
  },
  {
    "q": "Q: Why did you go to the nurse's office yesterday? — A: I ______ down on the playground.【跌倒；落下】",
    "options": [
      "try",
      "fell",
      "explain",
      "stay"
    ],
    "answer": 1,
    "cn": "你昨天為什麼去保健室？ — 我在操場上跌倒了。",
    "vocabIndex": 35
  },
  {
    "q": "Q: What's wrong with your knee? — A: I ______ it in PE class yesterday.【弄傷；受傷】",
    "options": [
      "try",
      "decide",
      "treat",
      "hurt"
    ],
    "answer": 3,
    "cn": "你的膝蓋怎麼了？ — 我昨天上體育課時弄傷了它。",
    "vocabIndex": 36
  },
  {
    "q": "Q: What ______ to your bike last night? — A: A car hit it.【發生】",
    "options": [
      "joined",
      "reached",
      "happened",
      "disappeared"
    ],
    "answer": 2,
    "cn": "你的腳踏車昨晚發生了什麼事？ — 被一輛車撞了。",
    "vocabIndex": 37
  },
  {
    "q": "Q: Do you still have your fish? — A: No, I don't. It ______ last week.【死】",
    "options": [
      "died",
      "invited",
      "joined",
      "lied"
    ],
    "answer": 0,
    "cn": "你還有養那條魚嗎？ — 沒有，牠上週死了。",
    "vocabIndex": 38
  },
  {
    "q": "Q: Where is the cake on the table? — A: I don't know. It ______ this morning!【消失】",
    "options": [
      "died",
      "disappeared",
      "happened",
      "joined"
    ],
    "answer": 1,
    "cn": "桌上的蛋糕在哪裡？ — 我不知道，它今天早上不見了！",
    "vocabIndex": 39
  },
  {
    "q": "Q: What did the hen do this morning? — A: It ______ two eggs.【下（蛋）；放置】",
    "options": [
      "laid",
      "hurt",
      "let",
      "gave"
    ],
    "answer": 0,
    "cn": "那隻母雞今天早上做了什麼？ — 牠下了兩顆蛋。",
    "vocabIndex": 40
  },
  {
    "q": "Q: Why is Mom angry with Tom? — A: Because he ______ to her yesterday.【說謊】",
    "options": [
      "happened",
      "disappeared",
      "died",
      "lied"
    ],
    "answer": 3,
    "cn": "媽媽為什麼生湯姆的氣？ — 因為他昨天對她說謊。",
    "vocabIndex": 41
  },
  {
    "q": "Q: Will you buy the red bag or the blue bag? — A: I don't know. I will ______ later.【決定】",
    "options": [
      "laid",
      "sleep",
      "decide",
      "enjoy"
    ],
    "answer": 2,
    "cn": "你會買紅色還是藍色的包包？ — 我不知道，我等一下再決定。",
    "vocabIndex": 42
  },
  {
    "q": "Q: Who will help with this problem? — A: Don't worry. I will ______ with it.【處理（deal with）】",
    "options": [
      "found",
      "deal",
      "stay",
      "sell"
    ],
    "answer": 1,
    "cn": "誰會幫忙處理這個問題？ — 別擔心，我會處理。",
    "vocabIndex": 43
  },
  {
    "q": "Q: Will the teacher talk about the new words tomorrow? — A: Yes, she will. She will ______ them to us.【解釋】",
    "options": [
      "decide",
      "got",
      "try",
      "explain"
    ],
    "answer": 3,
    "cn": "老師明天會講新單字嗎？ — 會，她會跟我們解釋。",
    "vocabIndex": 44
  },
  {
    "q": "Q: What will you do for your mom on her birthday? — A: I will ______ her to dinner.【請客；對待】",
    "options": [
      "treat",
      "nod",
      "thank",
      "fell"
    ],
    "answer": 0,
    "cn": "媽媽生日那天你會為她做什麼？ — 我會請她吃晚餐。",
    "vocabIndex": 45
  },
  {
    "q": "Q: What will you do if you know the answer? — A: I will ______ my hand.【舉起；養育】",
    "options": [
      "expect",
      "raise",
      "stop",
      "explain"
    ],
    "answer": 1,
    "cn": "如果你知道答案你會做什麼？ — 我會舉手。",
    "vocabIndex": 46
  },
  {
    "q": "Q: Can you ______ everyone? — A: No, I can't. That's too hard.【使高興；取悅】",
    "options": [
      "sent",
      "decide",
      "please",
      "share"
    ],
    "answer": 2,
    "cn": "你能讓每個人都高興嗎？ — 不行，那太難了。",
    "vocabIndex": 47
  },
  {
    "q": "Q: What do you say when someone helps you? — A: ______ you very much.【感謝】",
    "options": [
      "Nod",
      "Gave",
      "Got",
      "Thank"
    ],
    "answer": 3,
    "cn": "有人幫你時你會說什麼？ — 非常謝謝你。",
    "vocabIndex": 48
  },
  {
    "q": "Q: What does the teacher say to the new students? — A: She says, \"______ to our school!\"【歡迎】",
    "options": [
      "welcome",
      "deal",
      "let",
      "hurt"
    ],
    "answer": 0,
    "cn": "老師對新生說什麼？ — 她說：「歡迎來到我們學校！」",
    "vocabIndex": 49
  },
  {
    "q": "Q: How do you ask a stranger for help? — A: ______ me. Can you help me?【原諒（Excuse me.）】",
    "options": [
      "Expect",
      "Let",
      "Excuse",
      "Share"
    ],
    "answer": 2,
    "cn": "你怎麼向陌生人求助？ — 不好意思，你可以幫我嗎？",
    "vocabIndex": 50
  },
  {
    "q": "Q: My dog is sick. I'm so sad. — A: ______! It will be OK.【打起精神；振作】",
    "options": [
      "Take the MRT",
      "Cheer up",
      "A lot of",
      "A few"
    ],
    "answer": 1,
    "cn": "我的狗生病了，我好難過。 — 打起精神！會沒事的。",
    "vocabIndex": 51
  },
  {
    "q": "Q: Can you say \"yes\" without words? — A: Yes, I can. I can ______ my head.【點頭】",
    "options": [
      "nod",
      "stay",
      "sent",
      "share"
    ],
    "answer": 0,
    "cn": "你可以不說話表示「是」嗎？ — 可以，我可以點頭。",
    "vocabIndex": 52
  },
  {
    "q": "Q: The light is red. Can we cross the street? — A: No. ______! Wait for the green light.【停止；停】",
    "options": [
      "Gave",
      "Fell",
      "Stop",
      "Deal"
    ],
    "answer": 2,
    "cn": "紅燈了，我們可以過馬路嗎？ — 不行，停！等綠燈。",
    "vocabIndex": 53
  },
  {
    "q": "Q: Can I have some of your cake? — A: Sure. ______ it. It's yummy.【嘗試；試】",
    "options": [
      "Let",
      "Try",
      "Share",
      "Gave"
    ],
    "answer": 1,
    "cn": "我可以吃一點你的蛋糕嗎？ — 當然，試試看，很好吃。",
    "vocabIndex": 54
  },
  {
    "q": "Q: Mom, can you help me with this heavy box? — A: Sure. ______ me carry it for you.【讓】",
    "options": [
      "Explain",
      "Decide",
      "Please",
      "Let"
    ],
    "answer": 3,
    "cn": "媽，你可以幫我搬這個重箱子嗎？ — 當然，讓我幫你搬。",
    "vocabIndex": 55
  }
];

const LOOKUP = {
  "a lot of": {
    "pos": "phr.",
    "en_def": "a large number or amount of",
    "cn_def": "許多的"
  },
  "a few": {
    "pos": "phr.",
    "en_def": "a small number of (things you can count)",
    "cn_def": "一些；幾個（可數）"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to tell someone about something so they can understand it",
    "cn_def": "解釋"
  },
  "take the mrt": {
    "pos": "phr.",
    "en_def": "to travel on the city's fast trains",
    "cn_def": "搭捷運"
  },
  "excuse": {
    "pos": "n.",
    "en_def": "a reason you give to explain why you did something wrong",
    "cn_def": "藉口"
  },
  "treat": {
    "pos": "n.",
    "en_def": "something nice that someone buys for you",
    "cn_def": "請客"
  },
  "cares": {
    "pos": "v.",
    "en_def": "to think that someone or something is important",
    "cn_def": "關心；在乎"
  },
  "enjoy": {
    "pos": "v.",
    "en_def": "to like doing something",
    "cn_def": "喜愛；享受"
  },
  "owns": {
    "pos": "v.",
    "en_def": "to have something that is yours",
    "cn_def": "擁有"
  },
  "prays": {
    "pos": "v.",
    "en_def": "to talk to God or the gods",
    "cn_def": "祈禱；拜拜"
  },
  "sleep": {
    "pos": "v.",
    "en_def": "to rest with your eyes closed, as you do at night",
    "cn_def": "睡覺"
  },
  "stay": {
    "pos": "v.",
    "en_def": "to not leave a place",
    "cn_def": "停留；待"
  },
  "visits": {
    "pos": "v.",
    "en_def": "to go to see a person or a place",
    "cn_def": "拜訪；參觀"
  },
  "wakes": {
    "pos": "v.",
    "en_def": "to stop sleeping",
    "cn_def": "醒來"
  },
  "means": {
    "pos": "v.",
    "en_def": "to have the same idea as another word; to say",
    "cn_def": "意思是"
  },
  "sell": {
    "pos": "v.",
    "en_def": "to give something to someone for money",
    "cn_def": "賣"
  },
  "keeps": {
    "pos": "v.",
    "en_def": "to have something in one place; to not give or throw something away",
    "cn_def": "保存；保持"
  },
  "leads": {
    "pos": "v.",
    "en_def": "to go in front and show the way",
    "cn_def": "帶領；引導"
  },
  "share": {
    "pos": "v.",
    "en_def": "to let someone have or use part of what you have",
    "cn_def": "分享"
  },
  "save": {
    "pos": "v.",
    "en_def": "to keep money and not spend it; to take someone out of danger",
    "cn_def": "存（錢）；救"
  },
  "starts": {
    "pos": "v.",
    "en_def": "to begin",
    "cn_def": "開始"
  },
  "dates": {
    "pos": "v.",
    "en_def": "to go out with a boyfriend or girlfriend",
    "cn_def": "和…約會"
  },
  "expect": {
    "pos": "v.",
    "en_def": "to think that something will happen",
    "cn_def": "期待；預期"
  },
  "sitting": {
    "pos": "v.",
    "en_def": "to rest on a chair or on the ground, not standing",
    "cn_def": "坐"
  },
  "lying": {
    "pos": "v.",
    "en_def": "to have your body flat on a bed or on the ground",
    "cn_def": "躺"
  },
  "hiding": {
    "pos": "v.",
    "en_def": "to go where no one can see or find you",
    "cn_def": "躲藏；隱藏"
  },
  "hopping": {
    "pos": "v.",
    "en_def": "to make short, quick jumps",
    "cn_def": "跳；單腳跳"
  },
  "waiting": {
    "pos": "v.",
    "en_def": "to stay in a place until someone comes or something happens",
    "cn_def": "等待"
  },
  "preparing": {
    "pos": "v.",
    "en_def": "to make something ready",
    "cn_def": "準備"
  },
  "planning": {
    "pos": "v.",
    "en_def": "to think about what you will do and how to do it",
    "cn_def": "計畫"
  },
  "filling": {
    "pos": "v.",
    "en_def": "to put so much into something that there is no more space",
    "cn_def": "裝滿"
  },
  "showing": {
    "pos": "v.",
    "en_def": "to let someone see something",
    "cn_def": "給…看；展示"
  },
  "uploading": {
    "pos": "v.",
    "en_def": "to send a file or photo from your computer or phone to the Internet",
    "cn_def": "上傳"
  },
  "downloading": {
    "pos": "v.",
    "en_def": "to get a file or game from the Internet onto your computer or phone",
    "cn_def": "下載"
  },
  "found": {
    "pos": "v.",
    "en_def": "to see or get something after you look for it",
    "cn_def": "找到"
  },
  "got": {
    "pos": "v.",
    "en_def": "to be given something",
    "cn_def": "得到；收到"
  },
  "gave": {
    "pos": "v.",
    "en_def": "to let someone have something",
    "cn_def": "給"
  },
  "sent": {
    "pos": "v.",
    "en_def": "to make a letter or package go to another place",
    "cn_def": "寄；送"
  },
  "invited": {
    "pos": "v.",
    "en_def": "to ask someone to come to a party or a meal",
    "cn_def": "邀請"
  },
  "joined": {
    "pos": "v.",
    "en_def": "to become a member of a group or club",
    "cn_def": "加入"
  },
  "reached": {
    "pos": "v.",
    "en_def": "to get to a place",
    "cn_def": "到達；伸手拿到"
  },
  "fell": {
    "pos": "v.",
    "en_def": "to drop down to the ground",
    "cn_def": "跌倒；落下"
  },
  "hurt": {
    "pos": "v.",
    "en_def": "to make part of the body feel pain",
    "cn_def": "弄傷；受傷"
  },
  "happened": {
    "pos": "v.",
    "en_def": "to take place",
    "cn_def": "發生"
  },
  "died": {
    "pos": "v.",
    "en_def": "to stop living",
    "cn_def": "死"
  },
  "disappeared": {
    "pos": "v.",
    "en_def": "to go away so that no one can see it",
    "cn_def": "消失"
  },
  "laid": {
    "pos": "v.",
    "en_def": "(of a bird) to make an egg come out",
    "cn_def": "下（蛋）；放置"
  },
  "lied": {
    "pos": "v.",
    "en_def": "to say something that is not true",
    "cn_def": "說謊"
  },
  "decide": {
    "pos": "v.",
    "en_def": "to choose what to do after thinking",
    "cn_def": "決定"
  },
  "deal": {
    "pos": "v.",
    "en_def": "(with \"with\") to take care of a problem",
    "cn_def": "處理（deal with）"
  },
  "raise": {
    "pos": "v.",
    "en_def": "to lift something up; to take care of a child until he or she grows up",
    "cn_def": "舉起；養育"
  },
  "please": {
    "pos": "v.",
    "en_def": "to make someone happy",
    "cn_def": "使高興；取悅"
  },
  "thank": {
    "pos": "v.",
    "en_def": "to tell someone you are glad for what they did",
    "cn_def": "感謝"
  },
  "welcome": {
    "pos": "v.",
    "en_def": "to say hello in a friendly way to someone who comes",
    "cn_def": "歡迎"
  },
  "cheer up": {
    "pos": "phr.",
    "en_def": "to become happier; to stop feeling sad",
    "cn_def": "打起精神；振作"
  },
  "nod": {
    "pos": "v.",
    "en_def": "to move your head up and down to say \"yes\"",
    "cn_def": "點頭"
  },
  "stop": {
    "pos": "v.",
    "en_def": "to not move or not do something anymore",
    "cn_def": "停止；停"
  },
  "try": {
    "pos": "v.",
    "en_def": "to see if you can do something",
    "cn_def": "嘗試；試"
  },
  "let": {
    "pos": "v.",
    "en_def": "to allow someone to do something",
    "cn_def": "讓"
  }
};

const EXTRA_GLOSSES = {};
