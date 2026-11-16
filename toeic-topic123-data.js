// Topic 123 Quiz Data: Entertainment 娛樂
// Source word list: https://www.examword.com/group-topic/entertainment — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T123 - Entertainment 娛樂",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "amusement",
    "pos": "n.",
    "cn_def": "娛樂；樂趣；消遣",
    "en_def": "enjoyment from something fun; fun activities",
    "sentence": "A: Why did the company choose a seaside hotel for the annual staff trip instead of the mountain resort we visited last year? B: The seaside hotel has a large {{BLANK}} park right next door, so employees can bring their children, enjoy the rides together, and still attend the training sessions in the afternoon.",
    "cn": "A：為什麼公司這次員工旅遊選擇海邊的飯店，而不是我們去年去過的山上度假村？ B：海邊飯店旁邊就有一座大型【遊樂】園，所以員工可以帶孩子一起玩遊樂設施，下午還能參加培訓課程。"
  },
  {
    "word": "fun",
    "pos": "n.",
    "cn_def": "樂趣；好玩的事",
    "en_def": "enjoyment; a good time",
    "sentence": "A: How was the team-building day that the human resources department organized at the riverside park last Saturday? B: It was a lot of {{BLANK}}, because we played outdoor games in small groups, shared a barbecue lunch, and got to know colleagues from other departments whom we rarely meet at the office.",
    "cn": "A：人資部門上週六在河濱公園舉辦的團隊建立活動怎麼樣？ B：非常【好玩】，因為我們分成小組玩戶外遊戲、一起吃烤肉午餐，還認識了平常在辦公室很少碰到的其他部門同事。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "閒暇；休閒",
    "en_def": "free time when you are not working",
    "sentence": "A: Now that the new office building is finished, what will the empty space on the top floor be used for? B: Management plans to turn it into a {{BLANK}} area with sofas, board games, and a coffee machine, so staff can relax during their breaks and feel less stressed after long meetings.",
    "cn": "A：既然新辦公大樓已經完工，頂樓那塊空間要做什麼用？ B：管理階層打算把它改成【休閒】區，擺上沙發、桌遊和咖啡機，讓員工在休息時間放鬆，開完冗長的會議後也比較不會有壓力。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "休閒娛樂；消遣",
    "en_def": "activities people do for enjoyment in their free time",
    "sentence": "A: I heard the city council approved a large budget for the old factory site near the river, but what exactly will they build there? B: They are going to build a public {{BLANK}} center with a swimming pool, tennis courts, and a jogging path, which should attract families and create jobs for local residents.",
    "cn": "A：我聽說市議會為河邊那塊舊工廠用地通過了一大筆預算，他們到底要在那裡蓋什麼？ B：他們要蓋一座公共【休閒娛樂】中心，有游泳池、網球場和慢跑步道，應該能吸引家庭前來，也能為當地居民創造工作機會。"
  },
  {
    "word": "show",
    "pos": "n.",
    "cn_def": "表演；節目",
    "en_def": "a performance on stage, TV, or radio",
    "sentence": "A: Are you free on Friday evening, or do you have to stay late to finish the sales report for the regional manager? B: I should be finished by six, so I'd love to join you, especially if we can grab a quick dinner before the {{BLANK}} starts at the theater downtown.",
    "cn": "A：你週五晚上有空嗎？還是你得留下來加班完成給區域經理的銷售報告？ B：我應該六點前就能做完，所以很樂意跟你去，尤其如果我們能在市中心劇院的【表演】開始前先快速吃個晚餐的話。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表演；演出",
    "en_def": "an act of playing music, dancing, or acting for an audience",
    "sentence": "A: Did the client from Tokyo enjoy the evening we planned for him after the contract was signed yesterday? B: Yes, he loved it, and he said the traditional dance {{BLANK}} at the cultural center was the highlight of his trip, so he even asked our assistant to buy tickets for his wife.",
    "cn": "A：昨天簽完合約後，我們為那位東京來的客戶安排的晚上行程，他喜歡嗎？ B：是的，他非常喜歡，還說文化中心的傳統舞蹈【表演】是他這趟旅程的亮點，他甚至請我們的助理幫他太太也買票。"
  },
  {
    "word": "concert",
    "pos": "n.",
    "cn_def": "音樂會；演唱會",
    "en_def": "a public event where people play music",
    "sentence": "A: Why is the hotel lobby so crowded tonight, and why are there so many young people waiting at the front desk? B: A famous rock band is holding a {{BLANK}} at the stadium across the street, so most of the rooms are fully booked and the staff are working extra hours to check everyone in.",
    "cn": "A：今晚飯店大廳怎麼這麼擁擠？為什麼有這麼多年輕人在櫃檯排隊？ B：一個知名搖滾樂團在對街的體育館舉辦【演唱會】，所以大部分房間都被訂滿了，員工也正在加班幫大家辦理入住。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；藝術節；慶典",
    "en_def": "a special event or celebration, often with music, food, or films",
    "sentence": "A: Our sales at the downtown café doubled last weekend, but do you know what caused such a sudden increase in customers? B: The city held its annual three-day lantern {{BLANK}} in the square right outside our shop, so thousands of visitors stopped by for coffee between the stage shows and parades.",
    "cn": "A：我們市中心咖啡店上週末的營業額翻倍了，你知道是什麼造成顧客突然增加嗎？ B：市政府在我們店外的廣場舉辦一年一度、為期三天的燈籠【節】，所以成千上萬的遊客在舞台表演和遊行之間進來買咖啡。"
  },
  {
    "word": "theater",
    "pos": "n.",
    "cn_def": "劇院；戲院",
    "en_def": "a building where plays and shows are performed",
    "sentence": "A: Where should we take the overseas partners after the dinner on Thursday, since they said they want to experience some local culture? B: Let's take them to the new {{BLANK}} near the train station, because it offers plays with English subtitles and the seats are comfortable enough for a two-hour evening program.",
    "cn": "A：週四晚餐後我們要帶海外合作夥伴去哪裡？他們說想體驗一些在地文化。 B：我們帶他們去火車站附近新開的【劇院】吧，那裡的戲劇有英文字幕，座位也很舒服，適合兩小時的晚間節目。"
  },
  {
    "word": "cinema",
    "pos": "n.",
    "cn_def": "電影院",
    "en_def": "a building where people watch films",
    "sentence": "A: The shopping mall's visitor numbers dropped sharply last year, so what is the management team planning to do about it? B: They are going to open a modern {{BLANK}} with ten screens on the top floor, hoping that people who come to watch films will also eat and shop there.",
    "cn": "A：購物中心去年的來客數大幅下滑，管理團隊打算怎麼處理？ B：他們準備在頂樓開一家有十個影廳的現代化【電影院】，希望來看電影的人也會順便在那裡用餐購物。"
  },
  {
    "word": "movie",
    "pos": "n.",
    "cn_def": "電影",
    "en_def": "a film",
    "sentence": "A: Have you decided what we should do for the department's monthly social night, since the budget is quite small this time? B: I suggest borrowing the conference room projector and showing a well-known {{BLANK}} with free popcorn, because it is cheap, easy to organize, and most colleagues can stay after work.",
    "cn": "A：這次預算很少，部門每月的聯誼之夜你決定要做什麼了嗎？ B：我建議借會議室的投影機，放一部知名【電影】並提供免費爆米花，因為便宜、好安排，而且大多數同事下班後都能留下來。"
  },
  {
    "word": "television",
    "pos": "n.",
    "cn_def": "電視",
    "en_def": "a system or machine for watching programs at home",
    "sentence": "A: Why does the marketing department want to spend so much of this year's budget on a single advertisement? B: The ad will appear on national {{BLANK}} during the baseball finals, when millions of families are watching at home, so the manager believes it will greatly increase sales of our new sports drink.",
    "cn": "A：為什麼行銷部門要把今年這麼多預算花在單一支廣告上？ B：這支廣告會在棒球總決賽期間於全國【電視】播出，那時有數百萬個家庭在家收看，所以經理相信它會大幅提升我們新運動飲料的銷量。"
  },
  {
    "word": "series",
    "pos": "n.",
    "cn_def": "系列節目；影集",
    "en_def": "a set of TV programs with the same characters or subject",
    "sentence": "A: You look really tired this morning, so did you stay up late working on the budget proposal again? B: Actually, no, I started watching a new crime {{BLANK}} online last night and couldn't stop until I finished six episodes, so I only slept for about four hours before my alarm rang.",
    "cn": "A：你今天早上看起來很累，昨晚又熬夜做預算提案了嗎？ B：其實沒有，我昨晚在網路上開始看一部新的犯罪【影集】，一口氣看完六集停不下來，所以鬧鐘響之前只睡了大約四個小時。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇",
    "en_def": "a funny play, film, or show that makes people laugh",
    "sentence": "A: The atmosphere in the office has been very tense since the restructuring, so do you have any ideas for the year-end party? B: How about inviting a local {{BLANK}} group to perform for thirty minutes, since a lot of laughter could help everyone relax and feel more connected to each other again?",
    "cn": "A：自從組織重整後，辦公室氣氛一直很緊繃，你對尾牙有什麼點子嗎？ B：邀請一個本地【喜劇】團體來表演三十分鐘怎麼樣？大量的笑聲可能幫助大家放鬆，彼此也能再次感覺更親近。"
  },
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "戲劇；劇",
    "en_def": "a play or show with actors, often serious",
    "sentence": "A: Why did the training department hire actors for next week's customer service workshop instead of using the usual videos? B: The trainers believe that a short {{BLANK}} about an angry customer will be more realistic and memorable, so new employees can practice calm responses after watching the actors on stage.",
    "cn": "A：為什麼訓練部門下週的客服工作坊要請演員，而不是用平常的影片？ B：培訓師認為一齣關於憤怒顧客的短【劇】會更真實、更令人印象深刻，新進員工看完台上演員的演出後，就能練習冷靜地回應。"
  },
  {
    "word": "musical",
    "pos": "n.",
    "cn_def": "音樂劇",
    "en_def": "a play or film with a lot of singing and dancing",
    "sentence": "A: Is it true that the travel agency is offering a special package for tourists who visit London this spring? B: Yes, the package includes three nights at a central hotel, breakfast every morning, and two tickets to a famous {{BLANK}} with plenty of singing and dancing in the West End.",
    "cn": "A：旅行社今年春天真的有為去倫敦的遊客推出特別套裝行程嗎？ B：是的，套裝包含市中心飯店三晚住宿、每天早餐，以及兩張西區一齣充滿歌舞的知名【音樂劇】門票。"
  },
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "比賽；遊戲",
    "en_def": "a sports match or an activity played with rules",
    "sentence": "A: Why were so many staff members late to work this morning, even though the trains were running on time? B: The national team played an important baseball {{BLANK}} that ended after midnight, so many people stayed up to watch it on television and then overslept because they were too tired.",
    "cn": "A：為什麼今天早上有這麼多員工遲到？火車明明都準時啊。 B：國家隊打了一場重要的棒球【比賽】，過了午夜才結束，所以很多人熬夜看電視轉播，結果太累而睡過頭。"
  },
  {
    "word": "sport",
    "pos": "n.",
    "cn_def": "運動；體育活動",
    "en_def": "a physical activity or game with rules",
    "sentence": "A: The new employee wellness program looks great, but which activities is the company paying for this year? B: The company will cover the cost of one team {{BLANK}}, such as basketball or volleyball, because the HR manager believes playing together improves both health and communication between departments.",
    "cn": "A：新的員工健康計畫看起來很棒，今年公司會補助哪些活動？ B：公司會負擔一項團隊【運動】的費用，例如籃球或排球，因為人資經理認為一起運動能同時改善健康以及部門之間的溝通。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好；業餘愛好",
    "en_def": "an activity you do for fun in your free time",
    "sentence": "A: You always seem so calm, even when the deadlines at the office are extremely tight, so what is your secret? B: Gardening is my favorite {{BLANK}}, so every weekend I spend a few hours planting vegetables on my balcony, and it helps me forget about work and feel ready for Monday.",
    "cn": "A：即使辦公室的截止期限非常緊迫，你似乎總是很冷靜，你的祕訣是什麼？ B：園藝是我最喜歡的【嗜好】，所以每個週末我都會花幾個小時在陽台種菜，這讓我忘掉工作，為週一做好準備。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds arranged in a pleasant way, played or sung",
    "sentence": "A: Customers have complained that our restaurant feels too quiet and uncomfortable during dinner, so what should we change first? B: Let's play some soft jazz {{BLANK}} in the background and dim the lights a little, because a warmer atmosphere will encourage guests to stay longer and order dessert.",
    "cn": "A：顧客抱怨我們餐廳在晚餐時段太安靜、讓人不自在，我們應該先改變什麼？ B：我們在背景播放一些輕柔的爵士【音樂】，再把燈光調暗一點，因為更溫馨的氣氛會讓客人待久一點並點甜點。"
  },
  {
    "word": "dance",
    "pos": "n.",
    "cn_def": "舞蹈；舞",
    "en_def": "a set of steps and movements done to music",
    "sentence": "A: The hotel ballroom is booked for the company's anniversary dinner, but what kind of entertainment have you arranged for the guests? B: After the speeches, a professional band will play, and we have hired an instructor to teach everyone a simple group {{BLANK}}, so even shy employees can join in comfortably.",
    "cn": "A：飯店宴會廳已經訂好要辦公司週年晚宴，你為賓客安排了什麼樣的娛樂？ B：致詞結束後會有專業樂團演奏，我們還請了一位老師教大家一支簡單的團體【舞】，讓就算是害羞的員工也能自在地參與。"
  },
  {
    "word": "art",
    "pos": "n.",
    "cn_def": "藝術；藝術品",
    "en_def": "paintings, photos, sculptures, and other creative works",
    "sentence": "A: The new head office looks rather plain, so has the design team decided how to decorate the long hallway near the entrance? B: They are going to display modern {{BLANK}} by local painters and photographers, which will make the space more attractive and also support young creative people in our city.",
    "cn": "A：新總部看起來有點單調，設計團隊決定好要怎麼裝飾入口附近的長走廊了嗎？ B：他們打算展示本地畫家和攝影師的現代【藝術】作品，這會讓空間更有吸引力，也能支持我們城市裡年輕的創作者。"
  },
  {
    "word": "literature",
    "pos": "n.",
    "cn_def": "文學；文學作品",
    "en_def": "books, poems, and plays, especially ones of high quality",
    "sentence": "A: Why is the bookstore chain hosting reading events every Saturday afternoon this month? B: Sales of classic {{BLANK}} have been falling for years, so the company invited well-known authors to discuss famous novels with readers, hoping to attract more young customers and build a loyal community of book lovers.",
    "cn": "A：為什麼那家連鎖書店這個月每週六下午都舉辦閱讀活動？ B：經典【文學】作品的銷量多年來持續下滑，所以公司邀請知名作家和讀者討論著名小說，希望吸引更多年輕顧客，並建立忠實的愛書人社群。"
  },
  {
    "word": "broadcast",
    "pos": "v.",
    "cn_def": "播送；廣播；轉播",
    "en_def": "to send out a program on TV, radio, or the internet",
    "sentence": "A: Will the CEO's speech at the annual conference be available for employees working at our overseas branches? B: Yes, the IT team will {{BLANK}} it on our internal network at nine o'clock, and a recording will be posted later for staff in different time zones who cannot watch it at that time.",
    "cn": "A：執行長在年會上的演講，海外分公司的員工也看得到嗎？ B：可以，資訊團隊會在九點透過公司內部網路【播送】，之後也會上傳錄影，給那些因為時區不同而無法在當時觀看的員工。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流播放；線上直播",
    "en_def": "to play video or music directly from the internet",
    "sentence": "A: The training seminar room only holds fifty people, so how can all two hundred sales representatives attend next week? B: We will {{BLANK}} the seminar online so that representatives in other cities can watch it on their laptops, and they can type questions to the speaker in the chat box.",
    "cn": "A：培訓研討室只能容納五十人，下週兩百位業務代表要怎麼全部參加？ B：我們會在線上【串流直播】這場研討會，讓其他城市的業務代表可以用筆電觀看，也能在聊天框裡打字向講者提問。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "表演；演出",
    "en_def": "to sing, dance, act, or play music for an audience",
    "sentence": "A: The opening ceremony for our new factory is next Friday, but have we found any entertainers for the guests yet? B: Yes, a group of students from the local high school will {{BLANK}} traditional drum music for about fifteen minutes, which should create a lively and festive atmosphere for the visitors.",
    "cn": "A：新工廠的開幕典禮在下週五，我們找到為賓客表演的人了嗎？ B：找到了，一群本地高中的學生會【表演】大約十五分鐘的傳統鼓樂，應該能為來賓營造熱鬧又歡樂的氣氛。"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "cn_def": "招待；使娛樂",
    "en_def": "to give people a good time; to host guests",
    "sentence": "A: The overseas buyers will arrive two days before the trade fair begins, so what should we do with them during that time? B: We could {{BLANK}} them with a boat tour around the harbor and a seafood dinner, which would help us build a friendly relationship before the price negotiations start.",
    "cn": "A：海外買家會在商展開始前兩天抵達，那段時間我們該怎麼安排他們？ B：我們可以安排港口遊船和海鮮晚餐來【招待】他們，這有助於在價格談判開始前建立友好的關係。"
  },
  {
    "word": "enjoyable",
    "pos": "adj.",
    "cn_def": "令人愉快的",
    "en_def": "pleasant and fun",
    "sentence": "A: How did the guests feel about the cooking class we organized for the sales team's reward trip to Bangkok? B: Almost everyone said it was the most {{BLANK}} part of the trip, because they learned to make local dishes, laughed a lot together, and ate the delicious meal they had prepared.",
    "cn": "A：我們為業務團隊的曼谷獎勵旅遊安排的烹飪課，參加的人覺得怎麼樣？ B：幾乎每個人都說那是整趟旅程中最【令人愉快】的部分，因為他們學會做當地料理、一起開懷大笑，還吃到了自己做的美味餐點。"
  },
  {
    "word": "exciting",
    "pos": "adj.",
    "cn_def": "令人興奮的",
    "en_def": "making you feel very happy and interested",
    "sentence": "A: Why is everyone in the marketing department talking so loudly and smiling this morning? B: The manager just announced some {{BLANK}} news, because our company has been chosen as the official sponsor of the international film festival, which means our brand will be seen by millions of people.",
    "cn": "A：為什麼行銷部門的大家今天早上都講話這麼大聲、笑容滿面？ B：經理剛宣布了一個【令人興奮】的消息，我們公司被選為國際影展的官方贊助商，這代表我們的品牌將被數百萬人看見。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "吸引人的；引人入勝的",
    "en_def": "interesting and able to hold your attention",
    "sentence": "A: The last training video was so boring that half the staff fell asleep, so how will the new one be different? B: The new video uses real stories, short quizzes, and funny characters to make the lessons more {{BLANK}}, so employees will pay attention and remember the safety rules much better.",
    "cn": "A：上一支培訓影片太無聊，一半的員工都睡著了，新的這支會有什麼不同？ B：新影片用真實故事、小測驗和有趣的角色讓課程更【吸引人】，員工就會專心觀看，也更能記住安全規則。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的；流行的",
    "en_def": "liked by many people",
    "sentence": "A: Why did the restaurant on the corner decide to stay open until midnight on weekends? B: Its new late-night dessert menu has become very {{BLANK}} with young office workers who go there after movies or concerts, so the owner hired extra staff to serve the crowds.",
    "cn": "A：為什麼轉角那家餐廳決定週末營業到午夜？ B：它新推出的深夜甜點菜單在年輕上班族之間非常【受歡迎】，他們看完電影或演唱會後會去那裡，所以老闆多請了員工來應付人潮。"
  },
  {
    "word": "live",
    "pos": "adj.",
    "cn_def": "現場的；直播的",
    "en_def": "performed or shown while it is actually happening, not recorded",
    "sentence": "A: Do you think the hotel restaurant is a good place to take the new clients on Friday night? B: Yes, I think so, because they have {{BLANK}} jazz every Friday from seven to ten, the food is excellent, and the room is quiet enough for us to talk about the contract details.",
    "cn": "A：你覺得飯店餐廳適合週五晚上帶新客戶去嗎？ B：適合，因為他們每週五晚上七點到十點都有【現場】爵士樂演奏，食物也很棒，而且環境安靜，足以讓我們討論合約細節。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computers or electronic technology",
    "sentence": "A: Why are fewer customers buying DVDs and CDs at our electronics store these days? B: Most people now prefer {{BLANK}} entertainment, such as streaming films and downloading songs to their phones, so we should reduce our disc stock and give more shelf space to tablets and wireless headphones.",
    "cn": "A：為什麼最近在我們電子用品店買DVD和CD的顧客越來越少？ B：現在大多數人比較喜歡【數位】娛樂，例如串流看電影、把歌曲下載到手機裡，所以我們應該減少光碟庫存，把更多貨架空間留給平板和無線耳機。"
  },
  {
    "word": "entertainingly",
    "pos": "adv.",
    "cn_def": "有趣地；令人愉快地",
    "en_def": "in a fun and interesting way",
    "sentence": "A: Why do so many employees sign up for the finance director's workshops, even though the topic is usually boring numbers? B: She explains complex budgets so {{BLANK}} with funny stories and real examples that everyone stays interested, and people actually leave the room understanding how the company spends its money.",
    "cn": "A：為什麼這麼多員工報名財務長的工作坊，即使主題通常是無聊的數字？ B：她用有趣的故事和真實例子把複雜的預算講解得非常【生動有趣】，讓每個人都保持興趣，大家離開時也真的了解公司是怎麼花錢的。"
  }
];

const MCQS = [
  {
    "q": "The new shopping mall includes a small _____ park on the roof. Families can enjoy the rides after they finish shopping.",
    "options": [
      "amusement",
      "literature",
      "television",
      "series"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many employees now spend their _____ time learning new skills online. The company even pays for some of these courses.",
    "options": [
      "comedy",
      "cinema",
      "leisure",
      "drama"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The orchestra will give a free _____ in the city park next Sunday. Seats are not provided, so visitors should bring their own blankets.",
    "options": [
      "hobby",
      "concert",
      "literature",
      "sport"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The town holds a film _____ every October that attracts directors from around the world. Hotels are usually fully booked that week.",
    "options": [
      "hobby",
      "amusement",
      "literature",
      "festival"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The play was so successful that the _____ added extra shows on Sunday afternoon. Tickets can be purchased at the box office.",
    "options": [
      "hobby",
      "literature",
      "theater",
      "sport"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The old _____ on Main Street now shows only classic films from the 1950s. Its small screen and red seats attract many older visitors.",
    "options": [
      "cinema",
      "hobby",
      "sport",
      "literature"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The company's new commercial will appear on national _____ during the evening news. The marketing team expects sales to rise quickly.",
    "options": [
      "hobby",
      "comedy",
      "literature",
      "television"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The popular crime _____ will return for a third season next spring. A new episode will be released online every Friday night.",
    "options": [
      "hobby",
      "series",
      "art",
      "amusement"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The stand-up _____ show made the audience laugh for two hours. Many guests said it was the funniest evening they had enjoyed in years.",
    "options": [
      "comedy",
      "literature",
      "recreation",
      "hobby"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The famous _____ features over twenty songs and several large dance scenes. It has been playing in London for more than ten years.",
    "options": [
      "hobby",
      "literature",
      "musical",
      "sport"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Our sales team watched the final baseball _____ together at a sports bar. Everyone cheered loudly when the home team won.",
    "options": [
      "hobby",
      "game",
      "literature",
      "amusement"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Photography started as a weekend _____ for Ms. Lin. Now she sells her pictures to travel magazines and earns extra income.",
    "options": [
      "television",
      "concert",
      "cinema",
      "hobby"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The café plays soft background _____ to help customers relax. The manager chose a playlist of quiet piano and jazz songs.",
    "options": [
      "sport",
      "cinema",
      "music",
      "literature"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The hotel lobby displays modern _____ created by local painters. Guests can buy any of the works at the front desk.",
    "options": [
      "art",
      "sport",
      "game",
      "hobby"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Professor Chen teaches classic English _____ at the university. Her students read novels and poems written more than a century ago.",
    "options": [
      "sport",
      "amusement",
      "cinema",
      "literature"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The radio station will _____ the mayor's speech at noon tomorrow. Listeners can also call in with questions afterward.",
    "options": [
      "entertain",
      "broadcast",
      "perform",
      "cheer"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Subscribers can _____ thousands of films on their phones for a low monthly fee. New titles are added to the service every week.",
    "options": [
      "stream",
      "perform",
      "entertain",
      "compose"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The jazz band will _____ at the hotel bar every Friday evening this month. Hotel guests can enter without paying a cover charge.",
    "options": [
      "broadcast",
      "stream",
      "perform",
      "invite"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Sales managers often _____ important clients at expensive restaurants. The company covers these costs as long as receipts are submitted.",
    "options": [
      "perform",
      "entertain",
      "broadcast",
      "stream"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "We found the hotel's cooking class thoroughly _____. Everyone left with full stomachs and several new recipes to try at home.",
    "options": [
      "digital",
      "live",
      "popular",
      "enjoyable"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The pianist received a standing ovation after her brilliant _____. Critics called it the best evening of music this season.",
    "options": [
      "hobby",
      "literature",
      "performance",
      "amusement"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The new action _____ earned more than fifty million dollars in its first weekend. It is now showing in cinemas across the country.",
    "options": [
      "movie",
      "hobby",
      "sport",
      "literature"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Basketball is the most popular team _____ among our employees. The company organizes a friendly tournament every summer.",
    "options": [
      "literature",
      "cinema",
      "comedy",
      "sport"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Guests at the wedding were invited to join a traditional folk _____ after dinner. Even the shy guests eventually got up and moved to the music.",
    "options": [
      "literature",
      "dance",
      "cinema",
      "television"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The speaker's _____ style kept the audience interested for the full hour. Many attendees asked for copies of her slides afterward.",
    "options": [
      "engaging",
      "digital",
      "live",
      "frequent"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The new coffee shop has become very _____ with office workers nearby. There is usually a long line before nine in the morning.",
    "options": [
      "digital",
      "live",
      "popular",
      "enjoyable"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The final match will be shown _____ on television tonight. Fans at home can watch every goal as it happens.",
    "options": [
      "entertainingly",
      "live",
      "loudly",
      "separately"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Many readers now buy _____ copies of books that can be downloaded instantly. Sales of printed copies have fallen at most stores.",
    "options": [
      "live",
      "enjoyable",
      "engaging",
      "digital"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The tour guide spoke so _____ that even the children listened carefully. She told funny stories about every building we passed.",
    "options": [
      "rarely",
      "silently",
      "entertainingly",
      "poorly"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The city plans to build a new _____ center with a pool and tennis courts. Construction will begin next spring near the river.",
    "options": [
      "recreation",
      "literature",
      "comedy",
      "television"
    ],
    "answer": 0,
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "amusement": {
    "pos": "n.",
    "en_def": "enjoyment from something fun; fun activities",
    "cn_def": "娛樂；樂趣；消遣"
  },
  "fun": {
    "pos": "n.",
    "en_def": "enjoyment; a good time",
    "cn_def": "樂趣；好玩的事"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "free time when you are not working",
    "cn_def": "閒暇；休閒"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities people do for enjoyment in their free time",
    "cn_def": "休閒娛樂；消遣"
  },
  "show": {
    "pos": "n.",
    "en_def": "a performance on stage, TV, or radio",
    "cn_def": "表演；節目"
  },
  "performance": {
    "pos": "n.",
    "en_def": "an act of playing music, dancing, or acting for an audience",
    "cn_def": "表演；演出"
  },
  "concert": {
    "pos": "n.",
    "en_def": "a public event where people play music",
    "cn_def": "音樂會；演唱會"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special event or celebration, often with music, food, or films",
    "cn_def": "節慶；藝術節；慶典"
  },
  "theater": {
    "pos": "n.",
    "en_def": "a building where plays and shows are performed",
    "cn_def": "劇院；戲院"
  },
  "cinema": {
    "pos": "n.",
    "en_def": "a building where people watch films",
    "cn_def": "電影院"
  },
  "movie": {
    "pos": "n.",
    "en_def": "a film",
    "cn_def": "電影"
  },
  "television": {
    "pos": "n.",
    "en_def": "a system or machine for watching programs at home",
    "cn_def": "電視"
  },
  "series": {
    "pos": "n.",
    "en_def": "a set of TV programs with the same characters or subject",
    "cn_def": "系列節目；影集"
  },
  "comedy": {
    "pos": "n.",
    "en_def": "a funny play, film, or show that makes people laugh",
    "cn_def": "喜劇"
  },
  "drama": {
    "pos": "n.",
    "en_def": "a play or show with actors, often serious",
    "cn_def": "戲劇；劇"
  },
  "musical": {
    "pos": "n.",
    "en_def": "a play or film with a lot of singing and dancing",
    "cn_def": "音樂劇"
  },
  "game": {
    "pos": "n.",
    "en_def": "a sports match or an activity played with rules",
    "cn_def": "比賽；遊戲"
  },
  "sport": {
    "pos": "n.",
    "en_def": "a physical activity or game with rules",
    "cn_def": "運動；體育活動"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you do for fun in your free time",
    "cn_def": "嗜好；業餘愛好"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds arranged in a pleasant way, played or sung",
    "cn_def": "音樂"
  },
  "dance": {
    "pos": "n.",
    "en_def": "a set of steps and movements done to music",
    "cn_def": "舞蹈；舞"
  },
  "art": {
    "pos": "n.",
    "en_def": "paintings, photos, sculptures, and other creative works",
    "cn_def": "藝術；藝術品"
  },
  "literature": {
    "pos": "n.",
    "en_def": "books, poems, and plays, especially ones of high quality",
    "cn_def": "文學；文學作品"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a program on TV, radio, or the internet",
    "cn_def": "播送；廣播；轉播"
  },
  "stream": {
    "pos": "v.",
    "en_def": "to play video or music directly from the internet",
    "cn_def": "串流播放；線上直播"
  },
  "perform": {
    "pos": "v.",
    "en_def": "to sing, dance, act, or play music for an audience",
    "cn_def": "表演；演出"
  },
  "entertain": {
    "pos": "v.",
    "en_def": "to give people a good time; to host guests",
    "cn_def": "招待；使娛樂"
  },
  "enjoyable": {
    "pos": "adj.",
    "en_def": "pleasant and fun",
    "cn_def": "令人愉快的"
  },
  "exciting": {
    "pos": "adj.",
    "en_def": "making you feel very happy and interested",
    "cn_def": "令人興奮的"
  },
  "engaging": {
    "pos": "adj.",
    "en_def": "interesting and able to hold your attention",
    "cn_def": "吸引人的；引人入勝的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的；流行的"
  },
  "live": {
    "pos": "adj.",
    "en_def": "performed or shown while it is actually happening, not recorded",
    "cn_def": "現場的；直播的"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computers or electronic technology",
    "cn_def": "數位的"
  },
  "entertainingly": {
    "pos": "adv.",
    "en_def": "in a fun and interesting way",
    "cn_def": "有趣地；令人愉快地"
  }
};

const EXTRA_GLOSSES = {};
