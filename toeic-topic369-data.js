// Topic 369 Quiz Data: Sports Team 運動隊伍
// Source word list: https://www.examword.com/group-topic/sports-team — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T369 - Sports Team 運動隊伍",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "player",
    "pos": "n.",
    "cn_def": "球員；選手",
    "en_def": "a person who takes part in a sport or game",
    "sentence": "A: Why is the company softball team looking for new members this month, and when do they usually meet after work? B: One {{BLANK}} moved to our Tokyo office last week, so they need someone to replace her, and they practice every Thursday evening at the park behind the station.",
    "cn": "A：公司的壘球隊這個月為什麼在招新成員？他們下班後通常什麼時候聚會？ B：有一位【球員】上週調到我們的東京辦公室，所以他們需要找人遞補她，而且他們每週四晚上都在車站後面的公園練習。"
  },
  {
    "word": "captain",
    "pos": "n.",
    "cn_def": "隊長",
    "en_def": "the leader of a sports team",
    "sentence": "A: Who should I talk to if I want to join the office basketball team for the charity tournament next month? B: You should speak to Daniel from accounting, because he is the team {{BLANK}}, and he decides who plays in each game and collects the registration fees from everyone.",
    "cn": "A：如果我想參加下個月慈善錦標賽的公司籃球隊，我應該找誰談？ B：你應該找會計部的丹尼爾，因為他是球隊【隊長】，由他決定每場比賽誰上場，也負責向大家收報名費。"
  },
  {
    "word": "coach",
    "pos": "n.",
    "cn_def": "教練",
    "en_def": "a person who trains and teaches a sports team",
    "sentence": "A: Has the city soccer club found someone to replace the trainer who retired after last season, and are the players happy with the choice? B: Yes, they hired a new {{BLANK}} who used to play professionally in Spain, and the players say his training sessions are hard but very useful.",
    "cn": "A：市立足球俱樂部找到人接替上一季結束後退休的教練了嗎？球員們對這個人選滿意嗎？ B：有，他們聘請了一位曾在西班牙踢職業足球的新【教練】，球員們說他的訓練課程很辛苦，但非常有用。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理；領隊",
    "en_def": "a person who runs the business side of a team",
    "sentence": "A: Who is responsible for the team's budget, travel plans, and contracts, since the coach only seems to focus on training the players? B: That's the job of the team {{BLANK}}, who handles all the business matters, signs new players, and books hotels whenever the team travels to away games.",
    "cn": "A：既然教練似乎只專注於訓練球員，那誰負責球隊的預算、行程安排和合約？ B：那是球隊【經理】的工作，他處理所有的商務事宜、簽下新球員，並在球隊出征客場比賽時預訂飯店。"
  },
  {
    "word": "teammate",
    "pos": "n.",
    "cn_def": "隊友",
    "en_def": "a person who is on the same team as you",
    "sentence": "A: Why does Kevin look so happy today, even though he has to stay late to finish the quarterly sales report? B: Last night his volleyball team won the final, and a {{BLANK}} passed him the ball at the last second, so he scored the winning point in front of the whole crowd.",
    "cn": "A：凱文今天為什麼看起來這麼開心，即使他得留下來加班完成季度銷售報告？ B：昨晚他的排球隊贏得了決賽，一位【隊友】在最後一秒把球傳給他，所以他在全場觀眾面前拿下了致勝的一分。"
  },
  {
    "word": "opponent",
    "pos": "n.",
    "cn_def": "對手",
    "en_def": "the person or team you play against",
    "sentence": "A: Do you think our company team has a good chance of winning the regional bowling contest this Saturday afternoon? B: It will be difficult, because our {{BLANK}} in the first round is a bank that has won the trophy three years in a row, but we've been practicing hard every week.",
    "cn": "A：你覺得我們公司隊這週六下午贏得區域保齡球比賽的機會大嗎？ B：會很困難，因為我們第一輪的【對手】是一家連續三年奪得獎盃的銀行，不過我們每週都在努力練習。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "an event in which people try to win",
    "sentence": "A: Why are so many employees signing up for the running club this spring, when only a few people joined last year? B: The company announced a friendly {{BLANK}} between departments, and the winning team will receive a cash prize and an extra day off, so everyone is suddenly very interested.",
    "cn": "A：為什麼今年春天有這麼多員工報名跑步社，去年卻只有少數人參加？ B：公司宣布舉辦部門之間的友誼【比賽】，獲勝隊伍將獲得獎金和一天額外的假，所以大家突然都很有興趣。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "錦標賽；巡迴賽",
    "en_def": "a series of games to find the best player or team",
    "sentence": "A: Is the hotel fully booked next weekend, or can we still reserve rooms for our clients who are visiting from Seoul? B: I'm afraid most rooms are taken, because a large tennis {{BLANK}} is being held downtown, and many players, fans, and reporters have already arrived in the city.",
    "cn": "A：下週末飯店客滿了嗎？還是我們還能為從首爾來訪的客戶訂房？ B：恐怕大部分房間都被訂走了，因為市中心正在舉辦一場大型網球【錦標賽】，許多選手、球迷和記者都已經到了這座城市。"
  },
  {
    "word": "league",
    "pos": "n.",
    "cn_def": "聯盟；聯賽",
    "en_def": "a group of teams that play against each other in a season",
    "sentence": "A: How often does our office basketball team play, and are the games only against other companies in this building? B: We play every Wednesday night in a local business {{BLANK}} with twelve teams from different companies around the city, and the season lasts about four months, from January to April.",
    "cn": "A：我們辦公室的籃球隊多久比賽一次？比賽對手只有這棟大樓裡的其他公司嗎？ B：我們每週三晚上在一個地方企業【聯賽】中比賽，有來自全市各公司的十二支隊伍，賽季大約持續四個月，從一月到四月。"
  },
  {
    "word": "championship",
    "pos": "n.",
    "cn_def": "冠軍賽；冠軍頭銜",
    "en_def": "a competition to find the best team; the title of winner",
    "sentence": "A: Why is there a big trophy in the lobby, and why were people taking photos with it during lunch break today? B: Our company soccer team won the city {{BLANK}} last weekend after beating three strong teams, so the CEO wanted to display the trophy where every visitor and employee could see it.",
    "cn": "A：大廳裡為什麼有一座大獎盃？今天午休時為什麼大家都在跟它拍照？ B：我們公司的足球隊上週末擊敗三支強隊，贏得了全市【冠軍賽】，所以執行長想把獎盃擺在每位訪客和員工都看得到的地方。"
  },
  {
    "word": "match",
    "pos": "n.",
    "cn_def": "比賽",
    "en_def": "a sports event between two players or teams",
    "sentence": "A: Can we move the client meeting from Friday afternoon to Thursday, since many people in the office want to leave early on Friday? B: Sure, I know the national team is playing an important {{BLANK}} on Friday at four, and nobody will be able to concentrate on business while it is on TV.",
    "cn": "A：我們能把客戶會議從週五下午改到週四嗎？因為辦公室很多人週五想早點走。 B：當然可以，我知道國家隊週五四點有一場重要的【比賽】，比賽在電視上播出時，沒有人能專心談生意。"
  },
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "比賽；遊戲",
    "en_def": "a single sports event with rules and a winner",
    "sentence": "A: Are you coming to the company dinner on Saturday evening, or do you already have other plans with your family? B: I'll come a little late, because my son's team has a basketball {{BLANK}} at six, and I promised him I would watch it from the beginning until the end.",
    "cn": "A：你週六晚上會來參加公司聚餐嗎？還是你已經和家人有其他計畫了？ B：我會晚一點到，因為我兒子的球隊六點有一場籃球【比賽】，我答應他會從頭到尾看完。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "a regular time when a team trains together",
    "sentence": "A: Why does the team leave the office at exactly five-thirty every Tuesday and Thursday, even when there's a lot of work? B: They have soccer {{BLANK}} at the sports center from six to eight, and the coach doesn't let anyone play in Saturday's game if they miss more than one session.",
    "cn": "A：為什麼那組人每週二和週四都準時五點半離開辦公室，即使工作很多也一樣？ B：他們六點到八點在運動中心有足球【練習】，如果錯過超過一次，教練就不讓那個人參加週六的比賽。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "訓練",
    "en_def": "exercise and lessons to improve skills or fitness",
    "sentence": "A: How did the hockey players become so strong and fast before the season started, after being out of shape in the summer? B: The club sent them to a two-week {{BLANK}} camp in the mountains, where they ran, lifted weights, and worked on their skills for six hours every day.",
    "cn": "A：曲棍球員們夏天時體能還很差，怎麼在賽季開始前變得這麼強壯又快速？ B：俱樂部送他們去山上參加為期兩週的【訓練】營，他們每天在那裡跑步、舉重並練習技巧六個小時。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略；戰略",
    "en_def": "a long-term plan to reach a goal",
    "sentence": "A: Our team lost every game last season, so what is the new coach planning to do differently this year to help us win? B: He has a clear {{BLANK}} for the whole season, which focuses on strong defense, better fitness, and giving young players more chances to show what they can really do.",
    "cn": "A：我們的球隊上一季每場都輸，新教練今年打算做哪些不同的事來幫助我們贏球？ B：他對整個賽季有明確的【策略】，著重於強大的防守、更好的體能，以及給年輕球員更多機會展現他們真正的實力。"
  },
  {
    "word": "tactic",
    "pos": "n.",
    "cn_def": "戰術；策略",
    "en_def": "a planned action used to win in a game",
    "sentence": "A: How did the visiting team manage to win yesterday's game when our players were bigger and much more experienced? B: Their coach used a clever {{BLANK}} in the second half, telling his players to slow the game down and pass the ball carefully, which made our players tired and frustrated.",
    "cn": "A：我們的球員體型更大、經驗也豐富得多，客隊昨天是怎麼贏球的？ B：他們的教練在下半場用了一個聰明的【戰術】，要球員放慢比賽節奏並小心傳球，讓我們的球員又累又沮喪。"
  },
  {
    "word": "formation",
    "pos": "n.",
    "cn_def": "陣型；隊形",
    "en_def": "the way players are arranged on the field",
    "sentence": "A: Why did the coach draw so many circles and arrows on the whiteboard before the players went back onto the field? B: He was explaining a new {{BLANK}} with four defenders and three midfielders, so that every player would understand exactly where to stand and move during the second half.",
    "cn": "A：為什麼教練在球員回到球場前在白板上畫了那麼多圓圈和箭頭？ B：他在解說一個有四名後衛和三名中場的新【陣型】，讓每位球員都清楚知道下半場該站在哪裡、怎麼移動。"
  },
  {
    "word": "defense",
    "pos": "n.",
    "cn_def": "防守；防守球員",
    "en_def": "the players or actions that stop the other team from scoring",
    "sentence": "A: The newspaper says our city's team allowed only two goals in ten games, so what is the secret of their success this season? B: Their {{BLANK}} is the best in the league, because the players work together to protect the net, and the goalkeeper has made many amazing saves.",
    "cn": "A：報紙說我們市的球隊十場比賽只失兩球，他們這一季成功的秘訣是什麼？ B：他們的【防守】是聯賽中最好的，因為球員們齊心協力保護球門，守門員也做出了許多精彩的撲救。"
  },
  {
    "word": "offense",
    "pos": "n.",
    "cn_def": "進攻；進攻球員",
    "en_def": "the players or actions that try to score points",
    "sentence": "A: Why did the club pay so much money to sign that young striker from Brazil, when the team already has good defenders? B: Their {{BLANK}} has been weak all season, and they scored only eight goals in twelve games, so they need someone fast who can create chances and finish them.",
    "cn": "A：球隊已經有很好的後衛了，俱樂部為什麼花這麼多錢簽下那位來自巴西的年輕前鋒？ B：他們整季的【進攻】都很弱，十二場比賽只進了八球，所以他們需要一位速度快、能創造機會並把握機會的人。"
  },
  {
    "word": "substitute",
    "pos": "n.",
    "cn_def": "替補球員",
    "en_def": "a player who replaces another player during a game",
    "sentence": "A: What happened to Mark during the softball game on Sunday, and is he going to be able to come to work this week? B: He hurt his ankle in the third inning, so the coach sent in a {{BLANK}} to take his place, but the doctor says Mark only needs two days of rest.",
    "cn": "A：馬克週日壘球比賽時發生了什麼事？他這週能來上班嗎？ B：他在第三局扭傷了腳踝，所以教練派了一名【替補球員】上場代替他，不過醫生說馬克只需要休息兩天。"
  },
  {
    "word": "starter",
    "pos": "n.",
    "cn_def": "先發球員",
    "en_def": "a player who plays from the beginning of a game",
    "sentence": "A: Is it true that the young player from the training program will play from the beginning of tonight's game? B: Yes, the coach was so impressed with his effort in practice that he made him a {{BLANK}}, so he'll be on the field when the game begins instead of waiting on the bench.",
    "cn": "A：訓練計畫中的那位年輕球員今晚會從比賽一開始就上場，是真的嗎？ B：是的，教練對他練習時的努力印象深刻，讓他擔任【先發球員】，所以比賽一開始他就會在場上，而不是在板凳上等待。"
  },
  {
    "word": "bench",
    "pos": "n.",
    "cn_def": "球員席；板凳",
    "en_def": "the seat where players wait when they are not playing",
    "sentence": "A: Did the new player from the sales department get to play in last night's game against the marketing team? B: Not really, he spent most of the game sitting on the {{BLANK}}, because the coach wanted to use the experienced players first, but he played the last five minutes and scored once.",
    "cn": "A：業務部來的新球員昨晚對行銷部的比賽有上場嗎？ B：其實沒有，他大部分時間都坐在【板凳】上，因為教練想先用經驗豐富的球員，不過他打了最後五分鐘，還得了一次分。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利",
    "en_def": "a win in a game or competition",
    "sentence": "A: Why is everyone in the office wearing red shirts today, and why did the boss order pizza for the whole floor? B: The local baseball team, which our company sponsors, celebrated a big {{BLANK}} over their biggest rivals last night, so the boss decided to share the happy moment with all of us.",
    "cn": "A：為什麼辦公室裡每個人今天都穿紅色上衣？老闆為什麼幫整層樓訂了披薩？ B：我們公司贊助的地方棒球隊昨晚擊敗最大的對手，慶祝一場重大【勝利】，所以老闆決定和我們大家分享這個快樂的時刻。"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "cn_def": "失敗；戰敗",
    "en_def": "a loss in a game or competition",
    "sentence": "A: How are the players feeling after they lost the final by five points, and will they still go to the team dinner tonight? B: They are disappointed after such a painful {{BLANK}}, but the captain says they will still attend the dinner to thank the fans and sponsors for their support this season.",
    "cn": "A：球員們以五分之差輸掉決賽後感覺如何？他們今晚還會去參加球隊晚宴嗎？ B：在這麼痛苦的【失敗】之後，他們很失望，但隊長說他們仍會出席晚宴，感謝球迷和贊助商這一季的支持。"
  },
  {
    "word": "score",
    "pos": "n.",
    "cn_def": "比數；得分",
    "en_def": "the number of points each team has in a game",
    "sentence": "A: I missed the last part of the game because I had to answer an urgent email from a client, so who won in the end? B: Our team won, and the final {{BLANK}} was three to one, after two late goals in the last ten minutes made the whole crowd stand up and cheer.",
    "cn": "A：我錯過了比賽的最後一段，因為得回一封客戶的緊急郵件，最後誰贏了？ B：我們隊贏了，最終【比數】是三比一，最後十分鐘的兩個進球讓全場觀眾都站起來歡呼。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "進球；得分",
    "en_def": "a point scored by getting the ball into the net",
    "sentence": "A: Why was the crowd so loud in the last minute of the game, and why were the fans jumping up and down? B: Our youngest player kicked the ball past the goalkeeper and scored the winning {{BLANK}} just before the referee blew the whistle, so everyone in the stadium went crazy with joy.",
    "cn": "A：比賽最後一分鐘觀眾為什麼這麼大聲？球迷為什麼在跳上跳下？ B：我們最年輕的球員把球踢過守門員，就在裁判吹哨前攻進致勝的一【球】，所以全場的人都樂瘋了。"
  },
  {
    "word": "assist",
    "pos": "n.",
    "cn_def": "助攻",
    "en_def": "a pass that helps a teammate score",
    "sentence": "A: Did Jenny score any points in the basketball game against the design department last night, since she's usually our best shooter? B: She didn't score much, but she made one great {{BLANK}} when she passed the ball to Tom, who scored the winning basket in the last seconds of the game.",
    "cn": "A：珍妮昨晚對設計部的籃球比賽有得分嗎？她通常是我們最好的射手。 B：她得分不多，但她做出了一次漂亮的【助攻】，把球傳給湯姆，湯姆在比賽最後幾秒投進了致勝的一球。"
  },
  {
    "word": "captaincy",
    "pos": "n.",
    "cn_def": "隊長職務；隊長任期",
    "en_def": "the position or period of being team captain",
    "sentence": "A: Why did the club choose Lisa to lead the team this season instead of the older players who have been here longer? B: She was given the {{BLANK}} because she always encourages her teammates, works the hardest in training, and stays calm under pressure, which the coach believes is more important than age.",
    "cn": "A：俱樂部這一季為什麼選麗莎來領導球隊，而不是待得更久的資深球員？ B：她獲得了【隊長職務】，因為她總是鼓勵隊友、訓練時最努力，而且在壓力下能保持冷靜，教練認為這些比年齡更重要。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "職業的；專業的",
    "en_def": "doing a sport as a paid job",
    "sentence": "A: Is your brother still working at the bank, or did he finally decide to follow his dream of playing basketball full-time? B: He left the bank last spring and signed a contract with a {{BLANK}} team in Taichung, so now he earns his living by playing and trains every single day.",
    "cn": "A：你哥哥還在銀行工作嗎？還是他終於決定追求全職打籃球的夢想了？ B：他去年春天離開銀行，和台中的一支【職業】球隊簽約，所以現在他靠打球維生，而且每天都要訓練。"
  },
  {
    "word": "amateur",
    "pos": "adj.",
    "cn_def": "業餘的",
    "en_def": "doing a sport for fun, not for money",
    "sentence": "A: Do the players on the company cycling team get paid for racing, or do they just do it for fun on weekends? B: They're all {{BLANK}} riders who have regular jobs in the office, so they don't receive any money, but they enjoy the exercise and the chance to make new friends.",
    "cn": "A：公司自行車隊的成員比賽有領錢嗎？還是他們只是週末好玩騎騎？ B：他們都是在辦公室有正職的【業餘】車手，所以沒有領任何錢，但他們享受運動和結交新朋友的機會。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "競爭激烈的；好勝的",
    "en_def": "wanting very much to win; with many people trying to win",
    "sentence": "A: Do you think I should join the office tennis club, even though I've only played a few times and I'm not very good? B: Of course, it isn't very {{BLANK}} at all, because most members just want to relax after work, and nobody really cares who wins or loses each match.",
    "cn": "A：你覺得我應該參加公司的網球社嗎？雖然我只打過幾次，而且打得不太好。 B：當然應該，那裡一點都不【競爭激烈】，因為大部分成員只是想下班後放鬆，沒有人真的在乎每場比賽誰輸誰贏。"
  },
  {
    "word": "united",
    "pos": "adj.",
    "cn_def": "團結的",
    "en_def": "joined together and working as one group",
    "sentence": "A: How did such a small team manage to beat the champions last weekend, when nobody expected them to win at all? B: The players stayed {{BLANK}} even when they were losing at halftime, and instead of blaming each other, they worked together and fought for every ball until the very end.",
    "cn": "A：這麼一支小球隊上週末怎麼能打敗冠軍隊？根本沒人料到他們會贏。 B：即使中場落後，球員們仍保持【團結】，他們沒有互相指責，而是齊心協力，奮戰每一球直到最後。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的；配合的",
    "en_def": "willing to work together and help others",
    "sentence": "A: How is the new project team working together, since the members come from four different departments and two different countries? B: They're very {{BLANK}}, just like a good sports team, because everyone shares information, helps each other meet deadlines, and listens carefully to other people's ideas during the weekly meetings.",
    "cn": "A：新的專案團隊合作得如何？成員來自四個不同部門和兩個不同國家。 B：他們非常【合作】，就像一支好的運動隊伍，因為每個人都分享資訊、互相幫忙趕上期限，並在每週會議中仔細聆聽別人的想法。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的；給予鼓勵的",
    "en_def": "giving help and encouragement",
    "sentence": "A: Did the fans get angry when the home team lost all three games during their first week of the new season? B: No, they were very {{BLANK}}, and they kept cheering and singing at every game, because they know the team has many young players who need time and encouragement to improve.",
    "cn": "A：主隊在新賽季的第一週三場比賽全輸時，球迷有生氣嗎？ B：沒有，他們非常【支持】，每場比賽都持續加油歌唱，因為他們知道球隊有很多年輕球員，需要時間和鼓勵才能進步。"
  }
];

const MCQS = [
  {
    "q": "The club is looking for a new goalkeeper this season. Every _____ must pass a medical check before signing a contract.",
    "options": [
      "league",
      "player",
      "victory",
      "bench"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Mr. Chen has played for the team for ten years. The coach chose him as team _____ because the others respect him.",
    "options": [
      "captain",
      "opponent",
      "score",
      "tournament"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The players listened carefully during halftime. Their _____ explained what they needed to change to win the second half.",
    "options": [
      "league",
      "defeat",
      "coach",
      "bench"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The team's general _____ handles player contracts and travel. She also meets with sponsors to discuss the club's budget each year.",
    "options": [
      "manager",
      "substitute",
      "goal",
      "formation"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Ken passed the ball to a _____ instead of shooting himself. Their cooperation helped the team score its first goal of the evening.",
    "options": [
      "championship",
      "teammate",
      "defense",
      "strategy"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Our team will face a strong _____ in the semifinal. That club has not lost a single game in the past two seasons.",
    "options": [
      "opponent",
      "practice",
      "assist",
      "formation"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The bakery is holding a cake-decorating _____ next month. The winner will receive a cash prize and a story in the local newspaper.",
    "options": [
      "defense",
      "bench",
      "competition",
      "offense"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "More than forty golfers have registered for the annual charity _____. All money raised will go to the children's hospital downtown.",
    "options": [
      "formation",
      "tournament",
      "assist",
      "defeat"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The basketball _____ includes twelve teams from across the region. The season starts in January and ends with playoffs in May.",
    "options": [
      "league",
      "captain",
      "victory",
      "training"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Our company's bowling team won the national _____ last year. This year they hope to defend their title in Osaka.",
    "options": [
      "bench",
      "championship",
      "tactic",
      "assist"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Tickets for Saturday's tennis _____ sold out within an hour. Fans who missed out can watch it live on Channel 5.",
    "options": [
      "coach",
      "defense",
      "formation",
      "match"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Team members must arrive at the field by six for _____. Anyone who is late will have to run extra laps.",
    "options": [
      "victory",
      "opponent",
      "practice",
      "championship"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "All new staff will attend a three-day safety _____ course. It covers first aid, fire exits, and the correct use of equipment.",
    "options": [
      "score",
      "training",
      "bench",
      "captain"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The marketing director presented a new sales _____ at the meeting. It aims to increase online orders by twenty percent this year.",
    "options": [
      "bench",
      "assist",
      "strategy",
      "defeat"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The coach used a clever _____ in the final minutes, keeping the ball away from the other team. The plan worked perfectly.",
    "options": [
      "championship",
      "bench",
      "score",
      "tactic"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The coach drew the new _____ on the whiteboard before the game. It placed three defenders at the back and five in midfield.",
    "options": [
      "formation",
      "victory",
      "assist",
      "tournament"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The team's _____ was excellent in yesterday's game. The other side did not score even once in ninety minutes.",
    "options": [
      "tournament",
      "league",
      "assist",
      "defense"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The team scored only three goals all season. The coach plans to improve the _____ by adding two fast strikers next year.",
    "options": [
      "offense",
      "defeat",
      "bench",
      "captain"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Our striker hurt his knee in the first half. A _____ came onto the field and scored the winning goal ten minutes later.",
    "options": [
      "league",
      "strategy",
      "substitute",
      "championship"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The injured player watched the rest of the game from the _____. He hopes to return to the field next week.",
    "options": [
      "tactic",
      "bench",
      "victory",
      "opponent"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The fans celebrated the team's 3–0 _____ in the streets. It was the club's first win against its rivals in five years.",
    "options": [
      "victory",
      "formation",
      "coach",
      "practice"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The team suffered a heavy _____ in the final, losing 5–0. The players apologized to the fans after the game.",
    "options": [
      "assist",
      "captain",
      "league",
      "defeat"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The final _____ of the match was 2–1. Our team won thanks to a late goal in the last minute of play.",
    "options": [
      "score",
      "opponent",
      "bench",
      "tactic"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Maria kicked the ball into the net from thirty meters away. It was the most beautiful _____ of the whole tournament.",
    "options": [
      "coach",
      "league",
      "goal",
      "practice"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Tom did not score any points himself in the game. However, he made a great _____ that helped his teammate win it.",
    "options": [
      "league",
      "defense",
      "bench",
      "assist"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "After college, Rina signed a contract with a _____ soccer club. She now earns her living by playing the sport full-time.",
    "options": [
      "amateur",
      "cooperative",
      "professional",
      "supportive"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The runners in this race are all _____ athletes with regular jobs. None of them receive any money for taking part.",
    "options": [
      "professional",
      "united",
      "supportive",
      "amateur"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The job market for engineers is very _____ this year. Hundreds of people applied for only three open positions at the firm.",
    "options": [
      "amateur",
      "cooperative",
      "competitive",
      "supportive"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The two firms signed a _____ agreement to share research costs. Both companies will contribute equal funds to the new project.",
    "options": [
      "amateur",
      "cooperative",
      "competitive",
      "supportive"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Our manager was very _____ when I needed time off to care for my mother. She told me to take as long as I needed.",
    "options": [
      "amateur",
      "competitive",
      "united",
      "supportive"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "player": {
    "pos": "n.",
    "en_def": "a person who takes part in a sport or game",
    "cn_def": "球員；選手"
  },
  "captain": {
    "pos": "n.",
    "en_def": "the leader of a sports team",
    "cn_def": "隊長"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains and teaches a sports team",
    "cn_def": "教練"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who runs the business side of a team",
    "cn_def": "經理；領隊"
  },
  "teammate": {
    "pos": "n.",
    "en_def": "a person who is on the same team as you",
    "cn_def": "隊友"
  },
  "opponent": {
    "pos": "n.",
    "en_def": "the person or team you play against",
    "cn_def": "對手"
  },
  "competition": {
    "pos": "n.",
    "en_def": "an event in which people try to win",
    "cn_def": "比賽；競賽"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a series of games to find the best player or team",
    "cn_def": "錦標賽；巡迴賽"
  },
  "league": {
    "pos": "n.",
    "en_def": "a group of teams that play against each other in a season",
    "cn_def": "聯盟；聯賽"
  },
  "championship": {
    "pos": "n.",
    "en_def": "a competition to find the best team; the title of winner",
    "cn_def": "冠軍賽；冠軍頭銜"
  },
  "match": {
    "pos": "n.",
    "en_def": "a sports event between two players or teams",
    "cn_def": "比賽"
  },
  "game": {
    "pos": "n.",
    "en_def": "a single sports event with rules and a winner",
    "cn_def": "比賽；遊戲"
  },
  "practice": {
    "pos": "n.",
    "en_def": "a regular time when a team trains together",
    "cn_def": "練習"
  },
  "training": {
    "pos": "n.",
    "en_def": "exercise and lessons to improve skills or fitness",
    "cn_def": "訓練"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a long-term plan to reach a goal",
    "cn_def": "策略；戰略"
  },
  "tactic": {
    "pos": "n.",
    "en_def": "a planned action used to win in a game",
    "cn_def": "戰術；策略"
  },
  "formation": {
    "pos": "n.",
    "en_def": "the way players are arranged on the field",
    "cn_def": "陣型；隊形"
  },
  "defense": {
    "pos": "n.",
    "en_def": "the players or actions that stop the other team from scoring",
    "cn_def": "防守；防守球員"
  },
  "offense": {
    "pos": "n.",
    "en_def": "the players or actions that try to score points",
    "cn_def": "進攻；進攻球員"
  },
  "substitute": {
    "pos": "n.",
    "en_def": "a player who replaces another player during a game",
    "cn_def": "替補球員"
  },
  "starter": {
    "pos": "n.",
    "en_def": "a player who plays from the beginning of a game",
    "cn_def": "先發球員"
  },
  "bench": {
    "pos": "n.",
    "en_def": "the seat where players wait when they are not playing",
    "cn_def": "球員席；板凳"
  },
  "victory": {
    "pos": "n.",
    "en_def": "a win in a game or competition",
    "cn_def": "勝利"
  },
  "defeat": {
    "pos": "n.",
    "en_def": "a loss in a game or competition",
    "cn_def": "失敗；戰敗"
  },
  "score": {
    "pos": "n.",
    "en_def": "the number of points each team has in a game",
    "cn_def": "比數；得分"
  },
  "goal": {
    "pos": "n.",
    "en_def": "a point scored by getting the ball into the net",
    "cn_def": "進球；得分"
  },
  "assist": {
    "pos": "n.",
    "en_def": "a pass that helps a teammate score",
    "cn_def": "助攻"
  },
  "captaincy": {
    "pos": "n.",
    "en_def": "the position or period of being team captain",
    "cn_def": "隊長職務；隊長任期"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "doing a sport as a paid job",
    "cn_def": "職業的；專業的"
  },
  "amateur": {
    "pos": "adj.",
    "en_def": "doing a sport for fun, not for money",
    "cn_def": "業餘的"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "wanting very much to win; with many people trying to win",
    "cn_def": "競爭激烈的；好勝的"
  },
  "united": {
    "pos": "adj.",
    "en_def": "joined together and working as one group",
    "cn_def": "團結的"
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "willing to work together and help others",
    "cn_def": "合作的；配合的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "支持的；給予鼓勵的"
  }
};

const EXTRA_GLOSSES = {};
