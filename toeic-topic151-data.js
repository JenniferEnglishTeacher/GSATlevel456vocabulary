// Topic 151 Quiz Data: Game 遊戲；比賽
// Source word list: https://www.examword.com/group-topic/game — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T151 - Game 遊戲；比賽",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "遊戲；比賽",
    "en_def": "an activity or sport with rules that people play for fun or to win",
    "sentence": "A: Why did half of the sales department leave the office so early on Friday afternoon, even though the quarterly report was still unfinished? B: The company bought tickets for the whole team to watch the baseball {{BLANK}} downtown, so the manager let everyone go at three and promised to finish the report on Monday.",
    "cn": "A：為什麼業務部有一半的人星期五下午這麼早就離開辦公室，即使季報都還沒完成？ B：公司幫整個團隊買了票去市中心看棒球【比賽】，所以經理讓大家三點就走，並保證星期一會把報告完成。"
  },
  {
    "word": "play",
    "pos": "v.",
    "cn_def": "玩；打（球）；參加（比賽）",
    "en_def": "to take part in a game or sport",
    "sentence": "A: What do the new interns usually do during their lunch break, since most of them don't know anyone in the building yet? B: Many of them go up to the staff lounge on the fifth floor to {{BLANK}} table tennis together, which helps them relax and get to know people from other departments.",
    "cn": "A：新來的實習生午休時間通常都做些什麼？因為他們大部分在這棟大樓裡都還不認識任何人。 B：他們很多人會到五樓的員工休息室一起【打】桌球，這能幫助他們放鬆，也能認識其他部門的人。"
  },
  {
    "word": "player",
    "pos": "n.",
    "cn_def": "選手；玩家",
    "en_def": "a person who takes part in a game or sport",
    "sentence": "A: Why is the sports company paying so much money to put a basketball star in its new advertising campaign this year? B: The marketing director believes that a famous {{BLANK}} will attract younger customers, and sales of the running shoes increased by thirty percent after the last commercial with an athlete.",
    "cn": "A：為什麼這家運動用品公司今年要花這麼多錢，請一位籃球明星拍新的廣告活動？ B：行銷總監相信一位知名的【選手】能吸引年輕顧客，而且上次找運動員拍廣告之後，跑鞋的銷售量增加了百分之三十。"
  },
  {
    "word": "team",
    "pos": "n.",
    "cn_def": "隊；團隊",
    "en_def": "a group of people who play or work together",
    "sentence": "A: Is it true that our company is going to join the charity soccer tournament against the bank next door this summer? B: Yes, the human resources department is putting together a {{BLANK}} of eleven employees, and they will practice every Wednesday evening in the park near the train station.",
    "cn": "A：我們公司今年夏天真的要參加和隔壁銀行對抗的慈善足球錦標賽嗎？ B：是的，人資部門正在組一支由十一名員工組成的【隊伍】，他們每週三晚上會在火車站附近的公園練習。"
  },
  {
    "word": "opponent",
    "pos": "n.",
    "cn_def": "對手",
    "en_def": "a person or team you compete against",
    "sentence": "A: How do you feel about the chess competition for staff members next week, now that you have seen the list of players? B: I'm a little nervous because my first {{BLANK}} is the finance director, who has won the company prize three years in a row and plays online every night.",
    "cn": "A：既然你已經看過參賽名單了，你對下週的員工西洋棋比賽感覺如何？ B：我有點緊張，因為我的第一位【對手】是財務長，他已經連續三年贏得公司的獎項，而且每天晚上都在網路上下棋。"
  },
  {
    "word": "score",
    "pos": "n.",
    "cn_def": "比分；得分",
    "en_def": "the number of points each side has in a game",
    "sentence": "A: Did you see the end of the football final last night, or did you have to leave the sports bar before the second half started? B: I stayed until the end, and the {{BLANK}} was tied at two goals each until the very last minute, when the home team finally got another one and the whole bar cheered loudly.",
    "cn": "A：你昨晚有看完足球決賽嗎？還是下半場開始前就得離開運動酒吧？ B：我待到最後，【比分】一直是二比二平手，直到最後一分鐘地主隊終於又進了一球，整間酒吧都大聲歡呼起來。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "進球；得分",
    "en_def": "a point won by putting the ball into the net",
    "sentence": "A: Why is everyone in the marketing office talking about Kevin this morning instead of preparing for the client meeting? B: He scored the winning {{BLANK}} in the company soccer match against our biggest competitor on Saturday, so people keep asking him to describe how he kicked the ball past their goalkeeper.",
    "cn": "A：為什麼今天早上行銷辦公室裡的每個人都在談論凱文，而不是在準備客戶會議？ B：他星期六在公司對抗我們最大競爭對手的足球比賽中踢進了致勝的【一球】，所以大家一直請他描述他是怎麼把球踢過對方守門員的。"
  },
  {
    "word": "win",
    "pos": "v.",
    "cn_def": "贏；贏得",
    "en_def": "to be first or best in a game or competition",
    "sentence": "A: Why is the sales team working so late every night this month, even though their targets for the quarter have already been reached? B: The company is giving a free trip to Japan to the branch that sells the most, and they really want to {{BLANK}} the prize before the contest ends on Friday.",
    "cn": "A：為什麼業務團隊這個月每天晚上都工作到這麼晚，即使他們這一季的目標已經達成了？ B：公司要招待銷售量最高的分店免費去日本旅遊，他們非常想在比賽於星期五結束前【贏得】這個獎。"
  },
  {
    "word": "lose",
    "pos": "v.",
    "cn_def": "輸；輸掉",
    "en_def": "to not win a game or competition",
    "sentence": "A: Why does the manager look so disappointed this morning, and why did she cancel the celebration lunch she planned for the staff? B: Our company basketball team didn't expect to {{BLANK}} the final against the hotel staff yesterday evening, so she decided to save the lunch for a happier day next month.",
    "cn": "A：為什麼經理今天早上看起來這麼失望，而且還取消了她為員工安排的慶功午餐？ B：我們公司籃球隊昨天傍晚沒想到會在決賽中【輸】給飯店員工隊，所以她決定把午餐留到下個月比較開心的日子。"
  },
  {
    "word": "draw",
    "pos": "n.",
    "cn_def": "平手；和局",
    "en_def": "a game that ends with both sides having the same score",
    "sentence": "A: Who won the friendly soccer match between the factory workers and the office staff at the company picnic on Saturday? B: Nobody won, actually, because it ended in a {{BLANK}} of one to one, and since it was getting dark, the organizers decided to give both teams a small trophy and some free drinks.",
    "cn": "A：星期六公司野餐時，工廠員工和辦公室職員之間的足球友誼賽是誰贏了？ B：其實沒有人贏，因為比賽以一比一【平手】結束，而且因為天色漸暗，主辦人決定頒給兩隊各一座小獎盃和一些免費飲料。"
  },
  {
    "word": "match",
    "pos": "n.",
    "cn_def": "比賽",
    "en_def": "a sports game between two people or teams",
    "sentence": "A: Why are so many hotel rooms in the city fully booked this weekend, even though it is not a holiday? B: The national tennis {{BLANK}} between the two top players is taking place at the new stadium on Saturday, so thousands of fans are traveling here from other cities to watch it.",
    "cn": "A：為什麼這個週末市區有這麼多飯店客滿，即使不是假日？ B：兩位頂尖選手之間的全國網球【比賽】星期六將在新體育館舉行，所以有成千上萬的球迷從其他城市來這裡觀賽。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "錦標賽；聯賽",
    "en_def": "a competition with many games in which the winners keep playing until one is left",
    "sentence": "A: Why has the conference center hired so many extra security guards and cleaners for the whole of next week? B: It is hosting an international badminton {{BLANK}} with more than two hundred players from thirty countries, and the organizers expect large crowds every day until the final on Sunday.",
    "cn": "A：為什麼會議中心下週一整週雇用了這麼多額外的保全和清潔人員？ B：它要主辦一場國際羽球【錦標賽】，有來自三十個國家的兩百多名選手參加，主辦單位預期在星期日決賽前每天都會湧入大批人潮。"
  },
  {
    "word": "champion",
    "pos": "n.",
    "cn_def": "冠軍",
    "en_def": "the winner of a competition",
    "sentence": "A: Who is the speaker at the sales conference tomorrow morning, and why did the organizers choose someone from outside our industry? B: She is a former Olympic swimming {{BLANK}}, and they invited her because she gives excellent talks about setting goals, working hard, and staying calm under pressure.",
    "cn": "A：明天早上業務研討會的講者是誰？為什麼主辦單位選了一位我們產業以外的人？ B：她是前奧運游泳【冠軍】，他們邀請她是因為她很擅長演講，談論設定目標、努力工作以及在壓力下保持冷靜。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "an event in which people try to win something",
    "sentence": "A: How did the design department get so many fresh ideas for the new company logo in such a short time? B: The director held a {{BLANK}} for all employees, offering a weekend at a mountain resort to the winner, and more than eighty people sent in their drawings before the deadline last Friday.",
    "cn": "A：設計部門怎麼能在這麼短的時間內為公司新標誌想出這麼多新點子？ B：主管為全體員工舉辦了一場【比賽】，提供優勝者一個在山區度假村度週末的獎勵，結果上週五截止前就有八十多人交出了他們的作品。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "regular training to get better at something",
    "sentence": "A: Why does Mr. Chen leave the office at exactly six o'clock every Tuesday and Thursday, even when there is a lot of work? B: He is the coach of his daughter's volleyball team, and he has to be at the school gym by six-thirty to lead the {{BLANK}} before their big competition next month.",
    "cn": "A：為什麼陳先生每週二和週四都在六點整離開辦公室，即使工作很多也一樣？ B：他是他女兒排球隊的教練，他必須在六點半前到學校體育館帶領【練習】，為下個月的大型比賽做準備。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略；戰略",
    "en_def": "a careful plan for reaching a goal",
    "sentence": "A: Why did the coach call a meeting with all the players during the break, even though the team was already winning? B: She wanted to explain a new {{BLANK}} for the second half, because the other team had started to defend much better and she was worried they would come back and catch up.",
    "cn": "A：為什麼教練在中場休息時召集所有球員開會，即使球隊已經領先了？ B：她想說明下半場的新【策略】，因為對方隊伍的防守開始變得好很多，她擔心他們會反攻追上比分。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技巧；技能",
    "en_def": "the ability to do something well",
    "sentence": "A: Why did the restaurant manager hire the young man with no experience instead of the older cook who applied last week? B: During the interview, he showed amazing {{BLANK}} with a knife and cut the vegetables faster than anyone, and the manager felt he could learn the rest of the job quickly.",
    "cn": "A：為什麼餐廳經理雇用了那位沒有經驗的年輕人，而不是上週來應徵的那位年紀較大的廚師？ B：面試時他展現了驚人的刀工【技巧】，切菜比任何人都快，經理覺得他能很快學會其餘的工作。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something difficult that tests your ability",
    "sentence": "A: Why are so many people in the accounting department walking up and down the stairs during their breaks this month? B: The company started a fitness {{BLANK}} in which every team counts its steps for thirty days, and the group that walks the most will receive gift cards and a free dinner.",
    "cn": "A：為什麼會計部門有這麼多人這個月在休息時間爬上爬下樓梯？ B：公司發起了一項健身【挑戰】，每個小組要計算三十天的步數，走最多步的小組可以得到禮物卡和一頓免費晚餐。"
  },
  {
    "word": "level",
    "pos": "n.",
    "cn_def": "關卡；等級",
    "en_def": "one stage of a video game; how high or advanced something is",
    "sentence": "A: Why does your son look so tired at breakfast, and why was the light in his bedroom still on so late last night? B: He stayed up until midnight trying to finish the last {{BLANK}} of his new video game, and I told him he can't use the computer on school nights anymore.",
    "cn": "A：你兒子為什麼早餐時看起來這麼累，而且昨晚他房間的燈為什麼那麼晚還亮著？ B：他熬夜到半夜，想破他新電玩遊戲的最後一個【關卡】，我已經告訴他上學日的晚上不能再用電腦了。"
  },
  {
    "word": "controller",
    "pos": "n.",
    "cn_def": "遊戲控制器；手把",
    "en_def": "a device you hold in your hands to play video games",
    "sentence": "A: Why did the customer bring the new game system back to the electronics store only two days after he bought it? B: The {{BLANK}} stopped working whenever he pressed the left button, so the sales clerk checked the receipt and gave him a new one without asking him to pay anything extra.",
    "cn": "A：為什麼那位顧客買了新遊戲主機才兩天就拿回電器行？ B：只要他按左邊的按鈕，【遊戲手把】就停止運作，所以店員查看了收據後就直接換了一個新的給他，沒有要他多付任何費用。"
  },
  {
    "word": "console",
    "pos": "n.",
    "cn_def": "遊戲主機",
    "en_def": "a machine connected to a TV for playing video games",
    "sentence": "A: Why is there such a long line outside the electronics store at the shopping mall this morning, even before it opens? B: The store is starting to sell the newest video game {{BLANK}} today, and only a few hundred are available, so people have been waiting since last night to buy one.",
    "cn": "A：為什麼今天早上購物中心的電器行外面排了這麼長的隊伍，甚至還沒開門就這樣？ B：這家店今天開始賣最新的電玩【遊戲主機】，而且只有幾百台，所以大家從昨晚就開始排隊要買。"
  },
  {
    "word": "board",
    "pos": "n.",
    "cn_def": "遊戲盤；棋盤",
    "en_def": "a flat piece of wood or cardboard with marks, used for games like chess",
    "sentence": "A: What are we going to do with the children at the company family day if it rains and we can't use the garden? B: We set up a large chess {{BLANK}} on every table in the cafeteria, and there are plenty of cards and puzzles, so the kids can play indoors while their parents enjoy lunch and talk with coworkers.",
    "cn": "A：如果公司家庭日下雨不能用花園，我們要怎麼安排孩子們？ B：我們在餐廳每張桌子上都擺了一個大【棋盤】，還有很多紙牌和拼圖，讓孩子們可以在室內玩，同時父母可以享用午餐並和同事聊天。"
  },
  {
    "word": "dice",
    "pos": "n.",
    "cn_def": "骰子",
    "en_def": "small cubes with dots on each side, used in games",
    "sentence": "A: Why did the toy company have to delay the release of its new family game until after the holiday season? B: The factory made a mistake and the {{BLANK}} in the boxes had two sixes and no ones, so the company had to collect all the sets from the stores and fix the problem.",
    "cn": "A：為什麼這家玩具公司必須把新的家庭遊戲延到節慶季過後才上市？ B：工廠出了差錯，盒子裡的【骰子】有兩個六點卻沒有一點，所以公司必須從各家店回收所有的組合並修正問題。"
  },
  {
    "word": "card",
    "pos": "n.",
    "cn_def": "紙牌；卡片",
    "en_def": "a small piece of stiff paper used for playing games",
    "sentence": "A: How do the flight attendants pass the time when their flight is delayed for several hours at the airport? B: They usually sit together in the crew lounge and play a {{BLANK}} game or two, and sometimes they invite the pilots to join them while they wait for the weather to improve.",
    "cn": "A：班機在機場延誤好幾個小時時，空服員都怎麼打發時間？ B：他們通常一起坐在機組人員休息室玩一兩局【紙牌】遊戲，有時候還會邀請機師加入，一起等待天氣好轉。"
  },
  {
    "word": "puzzle",
    "pos": "n.",
    "cn_def": "拼圖；謎題",
    "en_def": "a game or problem that you solve by thinking or by putting pieces together",
    "sentence": "A: What is that large picture of a mountain lake on the table in the staff lounge, and why is nobody allowed to move it? B: It's a thousand-piece {{BLANK}} that the receptionists have been putting together during their breaks for two weeks, and they hope to finish it before the holiday party next Friday.",
    "cn": "A：員工休息室桌上那幅大大的山中湖泊圖是什麼？為什麼都不准人移動它？ B：那是一幅一千片的【拼圖】，櫃檯人員兩個星期以來都利用休息時間在拼，她們希望在下週五的節慶派對前完成。"
  },
  {
    "word": "fun",
    "pos": "adj.",
    "cn_def": "有趣的；好玩的",
    "en_def": "enjoyable and pleasant",
    "sentence": "A: Did the new employees enjoy the training day at the beach resort, or did they think it was too long and boring? B: They said it was really {{BLANK}}, because the trainers mixed short lessons with team games on the sand, and everyone got to know each other while learning about the company.",
    "cn": "A：新進員工喜歡在海灘度假村舉辦的訓練日嗎？還是他們覺得太長又無聊？ B：他們說真的很【好玩】，因為講師把短短的課程和沙灘上的團隊遊戲混在一起，大家在認識公司的同時也彼此熟識了。"
  },
  {
    "word": "exciting",
    "pos": "adj.",
    "cn_def": "令人興奮的；刺激的",
    "en_def": "making you feel very happy and interested",
    "sentence": "A: Why are so many people from the office going to the stadium on Sunday, even though it is supposed to rain all afternoon? B: It's the most {{BLANK}} race of the year, since the two fastest drivers in the country will compete for the title, and our company is one of the main sponsors of the event.",
    "cn": "A：為什麼辦公室有這麼多人星期天要去體育場，即使整個下午據說都會下雨？ B：那是今年最【刺激】的一場賽事，因為全國最快的兩位車手將爭奪冠軍頭銜，而且我們公司是這場活動的主要贊助商之一。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "好勝的；競爭激烈的",
    "en_def": "wanting very much to win; with many people trying to win",
    "sentence": "A: Why did the manager ask Tom not to join the friendly bowling night with the new clients next week? B: Tom is so {{BLANK}} that he gets angry when he loses even a simple game, and the manager worried that he might upset the clients and hurt the business relationship.",
    "cn": "A：為什麼經理叫湯姆下週不要參加和新客戶的保齡球友誼之夜？ B：湯姆非常【好勝】，即使只是輸了一場簡單的比賽也會生氣，經理擔心他會讓客戶不高興，進而影響生意上的關係。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的",
    "en_def": "involving people working together to reach the same goal",
    "sentence": "A: Why did the human resources team choose that strange board game for the training workshop instead of a normal quiz? B: It's a {{BLANK}} game in which all the players must work together to escape from a burning island, so it teaches communication and teamwork better than a contest where people compete.",
    "cn": "A：為什麼人資團隊在訓練工作坊上選了那款奇怪的桌遊，而不是一般的問答測驗？ B：那是一款【合作型】遊戲，所有玩家必須同心協力從一座失火的島上逃脫，所以它比讓大家互相競爭的比賽更能教導溝通和團隊合作。"
  },
  {
    "word": "casual",
    "pos": "adj.",
    "cn_def": "休閒的；輕鬆的",
    "en_def": "relaxed and not very serious",
    "sentence": "A: Do you think the new mobile game will make money, even though it is very simple and has only a few levels? B: Yes, because it is designed for {{BLANK}} players who only want to relax for ten minutes on the train, and those people are the largest group of customers in the market today.",
    "cn": "A：你覺得這款新的手機遊戲會賺錢嗎？即使它非常簡單，只有幾個關卡？ B：會的，因為它是為只想在火車上放鬆十分鐘的【休閒】玩家設計的，而這些人是當今市場上最大的顧客群。"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "認真的",
    "en_def": "caring a lot about something and doing it with effort",
    "sentence": "A: Why does Linda spend so much money on new running shoes and a personal trainer, when she used to jog only on weekends? B: She has become a {{BLANK}} runner since she joined the company marathon club last year, and now she trains five mornings a week before work and enters races in other cities.",
    "cn": "A：為什麼琳達花這麼多錢買新跑鞋和請私人教練？她以前只在週末慢跑。 B：自從她去年加入公司的馬拉松社團後，她就成了一位【認真】的跑者，現在她每週有五天早上在上班前訓練，還會去其他城市參加比賽。"
  },
  {
    "word": "spectator",
    "pos": "n.",
    "cn_def": "觀眾",
    "en_def": "a person who watches a sports event",
    "sentence": "A: Why did the city council decide to build a new parking garage next to the sports stadium this year? B: Every {{BLANK}} who drove to the football matches last season complained about the lack of parking spaces, and the traffic jams after each match caused problems for local shops and residents.",
    "cn": "A：為什麼市議會今年決定在體育場旁邊蓋一座新的停車場？ B：上一季每位開車去看足球比賽的【觀眾】都抱怨停車位不足，而且每場比賽後的塞車也對當地商店和居民造成困擾。"
  },
  {
    "word": "referee",
    "pos": "n.",
    "cn_def": "裁判",
    "en_def": "an official who makes sure players follow the rules",
    "sentence": "A: Why were the fans so angry at the end of the basketball game last night, and why did some of them throw cups onto the court? B: The {{BLANK}} called a foul in the last second that gave the visiting team two free shots, and most people in the stadium thought it was a terrible decision.",
    "cn": "A：為什麼昨晚籃球比賽結束時球迷這麼生氣，有些人甚至把杯子丟到球場上？ B：【裁判】在最後一秒判了一個犯規，讓客隊得到兩次罰球，而體育館裡大部分的人都覺得那是個很糟的判決。"
  },
  {
    "word": "rule",
    "pos": "n.",
    "cn_def": "規則",
    "en_def": "an instruction that says what is allowed in a game",
    "sentence": "A: Why did the new board game take so long to finish at the staff party, even though the box said it lasts only thirty minutes? B: Nobody understood the main {{BLANK}} about how to move the pieces, so we spent almost an hour reading the instructions and arguing about what was allowed.",
    "cn": "A：為什麼那款新桌遊在員工派對上花了這麼久才玩完？盒子上明明寫只要三十分鐘。 B：沒有人搞懂移動棋子的主要【規則】，所以我們花了將近一個小時讀說明書，並爭論哪些動作是被允許的。"
  },
  {
    "word": "turn",
    "pos": "n.",
    "cn_def": "輪到的機會；（輪流的）一次",
    "en_def": "the time when it is your chance to play or do something",
    "sentence": "A: Why are those two colleagues sitting quietly in the break room and staring at the chess board for so long? B: It's Peter's {{BLANK}}, and he has been thinking about his next move for almost ten minutes because one mistake could cost him the game and the free lunch they bet on.",
    "cn": "A：為什麼那兩位同事在休息室裡安靜地坐著，盯著棋盤看了這麼久？ B：現在【輪到】彼得了，他已經思考他的下一步將近十分鐘，因為一個失誤就可能讓他輸掉這局棋和他們打賭的那頓免費午餐。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利",
    "en_def": "a win in a game, fight or competition",
    "sentence": "A: Why did the company president take the whole soccer team out for an expensive dinner at the hotel last night? B: He wanted to celebrate their {{BLANK}} in the city business league, because it was the first time in ten years that our company beat all the other firms and brought home the trophy.",
    "cn": "A：為什麼公司總裁昨晚帶整支足球隊去飯店吃昂貴的晚餐？ B：他想慶祝他們在全市企業聯賽中的【勝利】，因為這是十年來我們公司第一次擊敗所有其他公司並把獎盃帶回家。"
  }
];

const MCQS = [
  {
    "q": "Our clients invited us to watch the hockey _____ on Friday night. We will meet at the arena entrance at seven o'clock.",
    "options": [
      "victory",
      "game",
      "spectator",
      "strategy"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Several employees _____ tennis at the club near the office after work. They say it helps them reduce stress before going home.",
    "options": [
      "win",
      "lose",
      "challenge",
      "play"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The team signed a talented young _____ from Brazil last month. He will join the training camp with the others next week.",
    "options": [
      "spectator",
      "console",
      "player",
      "tournament"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our department formed a bowling _____ of six people this spring. We compete against other local companies every Thursday evening.",
    "options": [
      "team",
      "dice",
      "score",
      "referee"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The tennis star easily defeated her _____ in the first round. She will play her next match on Wednesday afternoon.",
    "options": [
      "controller",
      "puzzle",
      "spectator",
      "opponent"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please write down the final _____ before you leave the gym. Our company team needs it for the weekly league report.",
    "options": [
      "rule",
      "console",
      "score",
      "dice"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The striker kicked the ball hard and scored a _____ in the last minute. All the fans in the stadium jumped up and cheered.",
    "options": [
      "goal",
      "referee",
      "board",
      "level"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Our design team hopes to _____ the national advertising award this year. The results will be announced at the ceremony in May.",
    "options": [
      "lose",
      "play",
      "practice",
      "win"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "If we _____ tonight's match, our team will be out of the tournament. Everyone needs to give their best effort this evening.",
    "options": [
      "win",
      "lose",
      "practice",
      "challenge"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Neither team scored during the ninety minutes, so the match ended in a _____. The two coaches shook hands after the final whistle.",
    "options": [
      "draw",
      "victory",
      "goal",
      "tournament"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The tennis _____ between the two top players lasted almost four hours. Many fans stayed in their seats until midnight to see the end.",
    "options": [
      "referee",
      "controller",
      "match",
      "level"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Sixteen companies have signed up for the annual golf _____ next month. Each company may send up to four players to take part.",
    "options": [
      "opponent",
      "dice",
      "spectator",
      "tournament"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "After winning every game this season, Martin became the company chess _____. His name will be added to the trophy in the lobby.",
    "options": [
      "strategy",
      "champion",
      "puzzle",
      "opponent"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The bakery is holding a cake design _____ for local students. The winner will receive a cash prize and a paid summer job.",
    "options": [
      "competition",
      "strategy",
      "console",
      "referee"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The company choir meets for _____ every Monday evening in the community hall. Members must attend at least three sessions before each concert.",
    "options": [
      "victory",
      "dice",
      "practice",
      "opponent"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The marketing director presented a new _____ to increase online sales. It focuses mainly on short videos and social media advertising.",
    "options": [
      "spectator",
      "strategy",
      "champion",
      "dice"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Good communication is the most important _____ for this customer service position. Applicants should be friendly and patient with every caller.",
    "options": [
      "referee",
      "tournament",
      "skill",
      "victory"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Opening a new branch in a foreign country was a big _____ for the small company. However, the managers worked hard and succeeded.",
    "options": [
      "spectator",
      "challenge",
      "dice",
      "referee"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Players must reach the highest _____ to unlock the bonus content. Most users need about a month of regular playing to get there.",
    "options": [
      "dice",
      "opponent",
      "controller",
      "level"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "This wireless game _____ works with both the television and the computer. Its battery lasts about twenty hours after a full charge.",
    "options": [
      "opponent",
      "spectator",
      "controller",
      "strategy"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The electronics store sold out of the new video game _____ in only two hours. More units will arrive at the end of the month.",
    "options": [
      "console",
      "referee",
      "tournament",
      "opponent"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "In this board game, each player rolls two _____ to decide how many spaces to move. The first player to reach the end wins.",
    "options": [
      "referee",
      "dice",
      "champion",
      "strategy"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The children spent the rainy afternoon putting together a large jigsaw _____. It showed a map of the world with colorful animals.",
    "options": [
      "puzzle",
      "referee",
      "victory",
      "opponent"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The final minutes of the basketball game were extremely _____. Nobody in the stadium wanted to sit down until the last whistle.",
    "options": [
      "cooperative",
      "casual",
      "patient",
      "exciting"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The online shopping market is highly _____, so prices change almost every day. Small stores must find creative ways to attract customers.",
    "options": [
      "competitive",
      "cooperative",
      "casual",
      "serious"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Each _____ must show a valid ticket at the stadium gate. Bags will also be checked by security staff before entry.",
    "options": [
      "victory",
      "spectator",
      "strategy",
      "puzzle"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The _____ blew the whistle and stopped the game after the player fell. Medical staff quickly ran onto the field to help him.",
    "options": [
      "spectator",
      "controller",
      "referee",
      "victory"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "According to the club's new _____, members must book the tennis courts one day in advance. Late bookings will not be accepted.",
    "options": [
      "rule",
      "score",
      "victory",
      "opponent"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Please wait for your _____ in line at the reception desk. A staff member will call your number shortly.",
    "options": [
      "score",
      "victory",
      "goal",
      "turn"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The sales team celebrated its _____ in the regional sales contest with a dinner. They had beaten five other branches this year.",
    "options": [
      "opponent",
      "victory",
      "referee",
      "dice"
    ],
    "answer": 1,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "game": {
    "pos": "n.",
    "en_def": "an activity or sport with rules that people play for fun or to win",
    "cn_def": "遊戲；比賽"
  },
  "play": {
    "pos": "v.",
    "en_def": "to take part in a game or sport",
    "cn_def": "玩；打（球）；參加（比賽）"
  },
  "player": {
    "pos": "n.",
    "en_def": "a person who takes part in a game or sport",
    "cn_def": "選手；玩家"
  },
  "team": {
    "pos": "n.",
    "en_def": "a group of people who play or work together",
    "cn_def": "隊；團隊"
  },
  "opponent": {
    "pos": "n.",
    "en_def": "a person or team you compete against",
    "cn_def": "對手"
  },
  "score": {
    "pos": "n.",
    "en_def": "the number of points each side has in a game",
    "cn_def": "比分；得分"
  },
  "goal": {
    "pos": "n.",
    "en_def": "a point won by putting the ball into the net",
    "cn_def": "進球；得分"
  },
  "win": {
    "pos": "v.",
    "en_def": "to be first or best in a game or competition",
    "cn_def": "贏；贏得"
  },
  "lose": {
    "pos": "v.",
    "en_def": "to not win a game or competition",
    "cn_def": "輸；輸掉"
  },
  "draw": {
    "pos": "n.",
    "en_def": "a game that ends with both sides having the same score",
    "cn_def": "平手；和局"
  },
  "match": {
    "pos": "n.",
    "en_def": "a sports game between two people or teams",
    "cn_def": "比賽"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a competition with many games in which the winners keep playing until one is left",
    "cn_def": "錦標賽；聯賽"
  },
  "champion": {
    "pos": "n.",
    "en_def": "the winner of a competition",
    "cn_def": "冠軍"
  },
  "competition": {
    "pos": "n.",
    "en_def": "an event in which people try to win something",
    "cn_def": "比賽；競賽"
  },
  "practice": {
    "pos": "n.",
    "en_def": "regular training to get better at something",
    "cn_def": "練習"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan for reaching a goal",
    "cn_def": "策略；戰略"
  },
  "skill": {
    "pos": "n.",
    "en_def": "the ability to do something well",
    "cn_def": "技巧；技能"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "level": {
    "pos": "n.",
    "en_def": "one stage of a video game; how high or advanced something is",
    "cn_def": "關卡；等級"
  },
  "controller": {
    "pos": "n.",
    "en_def": "a device you hold in your hands to play video games",
    "cn_def": "遊戲控制器；手把"
  },
  "console": {
    "pos": "n.",
    "en_def": "a machine connected to a TV for playing video games",
    "cn_def": "遊戲主機"
  },
  "board": {
    "pos": "n.",
    "en_def": "a flat piece of wood or cardboard with marks, used for games like chess",
    "cn_def": "遊戲盤；棋盤"
  },
  "dice": {
    "pos": "n.",
    "en_def": "small cubes with dots on each side, used in games",
    "cn_def": "骰子"
  },
  "card": {
    "pos": "n.",
    "en_def": "a small piece of stiff paper used for playing games",
    "cn_def": "紙牌；卡片"
  },
  "puzzle": {
    "pos": "n.",
    "en_def": "a game or problem that you solve by thinking or by putting pieces together",
    "cn_def": "拼圖；謎題"
  },
  "fun": {
    "pos": "adj.",
    "en_def": "enjoyable and pleasant",
    "cn_def": "有趣的；好玩的"
  },
  "exciting": {
    "pos": "adj.",
    "en_def": "making you feel very happy and interested",
    "cn_def": "令人興奮的；刺激的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "wanting very much to win; with many people trying to win",
    "cn_def": "好勝的；競爭激烈的"
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "involving people working together to reach the same goal",
    "cn_def": "合作的"
  },
  "casual": {
    "pos": "adj.",
    "en_def": "relaxed and not very serious",
    "cn_def": "休閒的；輕鬆的"
  },
  "serious": {
    "pos": "adj.",
    "en_def": "caring a lot about something and doing it with effort",
    "cn_def": "認真的"
  },
  "spectator": {
    "pos": "n.",
    "en_def": "a person who watches a sports event",
    "cn_def": "觀眾"
  },
  "referee": {
    "pos": "n.",
    "en_def": "an official who makes sure players follow the rules",
    "cn_def": "裁判"
  },
  "rule": {
    "pos": "n.",
    "en_def": "an instruction that says what is allowed in a game",
    "cn_def": "規則"
  },
  "turn": {
    "pos": "n.",
    "en_def": "the time when it is your chance to play or do something",
    "cn_def": "輪到的機會；（輪流的）一次"
  },
  "victory": {
    "pos": "n.",
    "en_def": "a win in a game, fight or competition",
    "cn_def": "勝利"
  }
};

const EXTRA_GLOSSES = {};
