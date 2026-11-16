// Topic 126 Quiz Data: Evening 傍晚
// Source word list: https://www.examword.com/group-topic/evening — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T126 - Evening 傍晚",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dusk",
    "pos": "n.",
    "cn_def": "黃昏；薄暮",
    "en_def": "the time in the evening when it is starting to get dark",
    "sentence": "A: Should we start the outdoor cleanup in the park after work today, or will it be too dark for the volunteers to see clearly? B: We should begin right after five o'clock and finish before {{BLANK}}, because the park has no streetlights and the manager wants everyone safely home before it gets dark.",
    "cn": "A：我們今天下班後應該在公園開始戶外清潔活動嗎？還是會太暗，志工們看不清楚？ B：我們應該在五點一過就開始，並在【黃昏】之前結束，因為公園沒有路燈，而且經理希望大家在天黑前安全回家。"
  },
  {
    "word": "twilight",
    "pos": "n.",
    "cn_def": "暮光；黃昏時分",
    "en_def": "the soft, weak light just after the sun goes down",
    "sentence": "A: Why did the photographer ask to move the outdoor product shoot for the new watches from noon to the end of the day? B: She said the soft blue light of {{BLANK}}, just after the sun goes down, makes the metal look elegant, and it removes the strong shadows that appear at midday.",
    "cn": "A：為什麼攝影師要求把新款手錶的戶外產品拍攝從中午改到傍晚？ B：她說太陽剛下山後【暮光】中柔和的藍色光線會讓金屬看起來很優雅，而且能消除正午時出現的強烈陰影。"
  },
  {
    "word": "sunset",
    "pos": "n.",
    "cn_def": "日落；夕陽",
    "en_def": "the time when the sun goes down and the sky changes color",
    "sentence": "A: Our clients from Tokyo arrive on Friday afternoon, so what kind of welcome event do you think we should plan for them that evening? B: Let's book a table on the hotel's rooftop terrace, where they can enjoy the beautiful {{BLANK}} over the harbor while we talk about the project in a relaxed setting.",
    "cn": "A：我們東京的客戶星期五下午抵達，你覺得那天晚上我們應該為他們安排什麼樣的歡迎活動？ B：我們在飯店的屋頂露台訂位吧，他們可以在那裡欣賞港口上美麗的【夕陽】，同時我們在輕鬆的環境下討論專案。"
  },
  {
    "word": "nightfall",
    "pos": "n.",
    "cn_def": "入夜；黃昏",
    "en_def": "the time in the evening when it becomes dark",
    "sentence": "A: The hiking trip for the new employees starts at two in the afternoon, so do you think the group can get back to the parking lot safely? B: Yes, the guide says the trail takes about three hours, so we should return before {{BLANK}}, but everyone should still bring a flashlight just in case.",
    "cn": "A：新進員工的健行活動下午兩點開始，你覺得這群人能安全回到停車場嗎？ B：可以，嚮導說這條步道大約需要三個小時，所以我們應該能在【入夜】前回來，不過以防萬一，每個人還是應該帶一支手電筒。"
  },
  {
    "word": "sundown",
    "pos": "n.",
    "cn_def": "日落時分",
    "en_def": "the time when the sun goes down; sunset",
    "sentence": "A: The farmers' market downtown is very popular, but do you know how long the food stalls stay open on Saturdays during the summer? B: Most of the vendors keep selling fruit, bread, and snacks until {{BLANK}}, and then the city cleaning crew arrives to clear the street before the night traffic begins.",
    "cn": "A：市中心的農夫市集很受歡迎，你知道夏天週六那些食物攤位營業到幾點嗎？ B：大部分攤販會一直賣水果、麵包和點心到【日落】，然後市政清潔人員會在夜間車流開始前來清理街道。"
  },
  {
    "word": "early evening",
    "pos": "n.phr.",
    "cn_def": "傍晚；晚間初時",
    "en_def": "the first part of the evening, around 5 to 7 p.m.",
    "sentence": "A: When is the best time to call our sales partners in London, since they are eight hours behind us here in Taipei? B: Try calling them in the {{BLANK}}, around six or seven o'clock our time, because that is late morning for them and they usually have just finished their first meetings.",
    "cn": "A：我們倫敦的業務夥伴比台北這裡晚八個小時，什麼時候打電話給他們最好？ B：試著在【傍晚】打給他們，大約是我們這邊的六、七點，因為那是他們的上午稍晚，他們通常剛開完第一批會議。"
  },
  {
    "word": "late evening",
    "pos": "n.phr.",
    "cn_def": "深夜；晚間較晚時分",
    "en_def": "the last part of the evening, before midnight",
    "sentence": "A: Why are the cleaning staff in our office building working such strange hours this month instead of during the afternoon? B: The building manager moved their shift to the {{BLANK}}, after ten o'clock, so the noisy vacuum cleaners will not disturb employees who are still in meetings or talking with customers on the phone.",
    "cn": "A：為什麼我們辦公大樓的清潔人員這個月不在下午工作，而是在這麼奇怪的時間上班？ B：大樓經理把他們的班次調到【深夜】，也就是十點以後，這樣吵雜的吸塵器就不會打擾仍在開會或正在和客戶講電話的員工。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆；休息",
    "en_def": "to rest and feel calm",
    "sentence": "A: You have been working on the annual budget report for three weeks without a break, so what are you going to do this weekend? B: I plan to turn off my work phone, sit in the garden with a good book, and just {{BLANK}} for two days so I can feel fresh when the new quarter starts.",
    "cn": "A：你已經連續三週不停地做年度預算報告了，這個週末你打算做什麼？ B：我打算關掉工作手機，帶本好書坐在花園裡，好好【放鬆】兩天，這樣新的一季開始時我才能精神飽滿。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆；解除緊張",
    "en_def": "to stop worrying and become calm after work or stress",
    "sentence": "A: The sales team looks really tired after finishing that difficult contract negotiation, so is there anything special planned for them tonight? B: The director booked a private room at a quiet jazz bar near the station, where everyone can {{BLANK}} with some music and snacks after such a long and stressful week.",
    "cn": "A：業務團隊結束了那場艱難的合約談判後看起來真的很累，今晚有為他們安排什麼特別的活動嗎？ B：主管在車站附近一間安靜的爵士酒吧訂了包廂，大家可以在漫長又充滿壓力的一週後，聽聽音樂、吃點小點心【放鬆一下】。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "空閒；休閒",
    "en_def": "free time when you are not working",
    "sentence": "A: The new apartment complex across from our office is advertising itself to young professionals, so what makes it so attractive to them? B: Besides being close to the train station, it offers a gym, a pool, and a rooftop garden, so residents have plenty of places to enjoy their {{BLANK}} time after work.",
    "cn": "A：我們辦公室對面的新公寓大樓正在向年輕上班族打廣告，它為什麼對他們這麼有吸引力？ B：除了靠近火車站，它還提供健身房、游泳池和屋頂花園，所以住戶下班後有很多地方可以享受【休閒】時光。"
  },
  {
    "word": "dinner",
    "pos": "n.",
    "cn_def": "晚餐；正餐",
    "en_def": "the main meal of the day, usually eaten in the evening",
    "sentence": "A: The CEO of our biggest supplier is visiting Taipei next Thursday, so how should we welcome him after the factory tour? B: I think we should invite him to a formal {{BLANK}} at a famous Taiwanese restaurant at seven o'clock, so he can try local dishes and meet our senior managers in a friendly setting.",
    "cn": "A：我們最大供應商的執行長下週四要來台北，參觀工廠後我們應該如何招待他？ B：我認為我們應該在七點邀請他到一家知名的台菜餐廳享用正式【晚餐】，讓他可以品嚐在地菜餚，並在友善的氣氛中認識我們的高階主管。"
  },
  {
    "word": "supper",
    "pos": "n.",
    "cn_def": "（簡單的）晚餐；宵夜",
    "en_def": "a light meal eaten in the evening",
    "sentence": "A: The conference program says the sessions end at nine at night, but will the guests get anything to eat after such a long day? B: Yes, the hotel will serve a light {{BLANK}} of soup, sandwiches, and fruit in the lobby lounge, so people can have a simple meal before going up to their rooms.",
    "cn": "A：會議議程說場次到晚上九點才結束，經過這麼漫長的一天，來賓們會有東西吃嗎？ B：有的，飯店會在大廳酒吧提供有湯、三明治和水果的清淡【晚餐】，讓大家回房前可以簡單吃一點。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會；集會",
    "en_def": "a meeting of people for a social purpose",
    "sentence": "A: Our department hit its sales target this quarter, so is the manager planning anything to celebrate the team's hard work? B: She is organizing a small {{BLANK}} at her house on Friday evening, where we can share food, play some games, and finally get to know the new staff members better.",
    "cn": "A：我們部門這一季達成了銷售目標，經理有打算辦什麼活動來慶祝團隊的努力嗎？ B：她正在籌辦星期五晚上在她家的一場小型【聚會】，我們可以在那裡分享食物、玩些遊戲，終於可以更認識新同事。"
  },
  {
    "word": "stroll",
    "pos": "n.",
    "cn_def": "散步；漫步",
    "en_def": "a slow, relaxed walk",
    "sentence": "A: The hotel restaurant was excellent, but I ate far too much, so what would you like to do before we go back to our rooms? B: Let's take a short {{BLANK}} along the riverside path behind the hotel, because the weather is cool tonight and a gentle walk will help us feel more comfortable.",
    "cn": "A：飯店餐廳很棒，但我吃太多了，回房間前你想做什麼？ B：我們沿著飯店後面的河濱步道【散散步】吧，因為今晚天氣涼爽，悠閒地走一走會讓我們覺得舒服些。"
  },
  {
    "word": "dim",
    "pos": "adj.",
    "cn_def": "昏暗的；暗淡的",
    "en_def": "not bright; with little light",
    "sentence": "A: The restaurant we chose for the client dinner looks very romantic, but will it be a good place to show them the product samples? B: Probably not, because the lights there are quite {{BLANK}} in the evening, so it would be hard for the clients to see the colors and details of our new designs.",
    "cn": "A：我們為客戶晚餐選的餐廳看起來很浪漫，但那裡適合給他們看產品樣品嗎？ B：可能不適合，因為那裡晚上的燈光相當【昏暗】，客戶很難看清楚我們新設計的顏色和細節。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "calm and without noise or trouble",
    "sentence": "A: Why did the company choose a hotel so far outside the city for the annual planning meeting this year? B: The managers wanted a {{BLANK}} place in the mountains, away from traffic noise and phone calls, so everyone could focus on long-term goals and think clearly about next year's strategy.",
    "cn": "A：今年公司為什麼選了一間離市區這麼遠的飯店來開年度規劃會議？ B：經理們想要一個在山上的【寧靜】地方，遠離車流噪音和電話，讓大家能專注於長期目標，清楚思考明年的策略。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making very little noise",
    "sentence": "A: I need to finish the contract review before the meeting tomorrow morning, but the open office is so noisy that I can't concentrate. B: Why don't you stay a little later tonight, because after six o'clock most people go home and the office becomes very {{BLANK}}, so you can work without any interruptions.",
    "cn": "A：我必須在明天早上開會前完成合約審查，但開放式辦公室太吵了，我無法專心。 B：你今晚何不稍微晚一點走，因為六點以後大部分人都回家了，辦公室會變得很【安靜】，你就可以不受打擾地工作。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "溫暖舒適的；溫馨的",
    "en_def": "warm, comfortable, and pleasant",
    "sentence": "A: We're looking for a small café where the book club from our company can meet on Wednesday evenings, so do you know a good one? B: There's a {{BLANK}} little café on Fifth Street with soft sofas, warm lights, and a fireplace, so it feels comfortable and friendly, especially on cold winter nights.",
    "cn": "A：我們在找一間小咖啡館，讓公司的讀書會可以在星期三晚上聚會，你知道哪間不錯嗎？ B：第五街有一間【溫馨舒適】的小咖啡館，有柔軟的沙發、溫暖的燈光和壁爐，感覺舒服又友善，尤其是在寒冷的冬夜。"
  },
  {
    "word": "calmly",
    "pos": "adv.",
    "cn_def": "冷靜地；平靜地",
    "en_def": "in a relaxed way, without getting upset",
    "sentence": "A: How did the hotel staff handle the situation when the power suddenly went out during the wedding banquet last night? B: The manager {{BLANK}} explained the problem to the guests, asked the waiters to bring candles to every table, and kept everyone seated until the electricity came back about fifteen minutes later.",
    "cn": "A：昨晚婚宴中突然停電時，飯店員工是怎麼處理的？ B：經理【冷靜地】向賓客說明狀況，請服務生為每一桌送上蠟燭，並讓大家保持就座，直到大約十五分鐘後電力恢復。"
  },
  {
    "word": "softly",
    "pos": "adv.",
    "cn_def": "輕柔地；輕聲地",
    "en_def": "in a quiet and gentle way",
    "sentence": "A: Is it all right if we play some background music in the hotel lobby during the evening reception for our international guests? B: Yes, but please make sure the piano plays {{BLANK}}, because guests will be talking about business and they should be able to hear each other without raising their voices.",
    "cn": "A：在為國際來賓舉辦的晚間招待會期間，我們可以在飯店大廳播放一些背景音樂嗎？ B：可以，但請確保鋼琴【輕柔地】演奏，因為來賓會談論生意，他們應該不必提高音量就能聽見彼此說話。"
  },
  {
    "word": "glow",
    "pos": "n.",
    "cn_def": "光輝；柔和的光芒",
    "en_def": "a soft, steady light",
    "sentence": "A: The designers want the outside of our new store to look attractive at night, so what kind of lighting have they chosen for the front? B: They picked warm yellow lights under the windows, which give the whole entrance a soft {{BLANK}} after dark and make people walking past feel welcome to come inside.",
    "cn": "A：設計師希望我們新店的外觀在晚上看起來很吸引人，他們為店面選了什麼樣的照明？ B：他們在窗戶下方挑選了溫暖的黃色燈光，天黑後會讓整個入口散發柔和的【光芒】，讓路過的人覺得受到歡迎而想進來。"
  },
  {
    "word": "fade",
    "pos": "v.",
    "cn_def": "逐漸消失；變暗",
    "en_def": "to slowly become less bright or strong",
    "sentence": "A: The outdoor concert for our customers starts at seven, so when should the stage crew turn on the spotlights and decorations? B: They should wait until the daylight starts to {{BLANK}}, around six-thirty, because the colored lights will look much brighter and more impressive against the darkening sky.",
    "cn": "A：為客戶舉辦的戶外音樂會七點開始，舞台工作人員應該什麼時候打開聚光燈和裝飾燈？ B：他們應該等到天光開始【漸漸消失】，大約六點半，因為在漸暗的天空襯托下，彩色燈光會看起來更明亮、更令人印象深刻。"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "cn_def": "反思；仔細思考",
    "en_def": "to think carefully about something",
    "sentence": "A: You always seem so organized at work, so do you have any special habit that helps you plan your tasks each day? B: Every evening after dinner, I spend ten minutes writing in a notebook to {{BLANK}} on what went well and what went wrong, and then I make a short list for tomorrow.",
    "cn": "A：你工作時總是很有條理，你有什麼特別的習慣能幫你規劃每天的工作嗎？ B：每天晚餐後，我會花十分鐘在筆記本上寫字，【反思】哪些事做得好、哪些事出了錯，然後為明天列一張簡短的清單。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；打盹",
    "en_def": "a short sleep during the day",
    "sentence": "A: You look much more energetic than you did at lunch, so did you drink a lot of coffee this afternoon? B: No, I took a twenty-minute {{BLANK}} in the staff lounge during my break, and now I feel ready to prepare the slides for the evening presentation to the board.",
    "cn": "A：你看起來比午餐時有精神多了，你今天下午喝了很多咖啡嗎？ B：沒有，我休息時在員工休息室【小睡】了二十分鐘，現在我覺得已經準備好為晚上向董事會的簡報準備投影片了。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；日常作息",
    "en_def": "the usual order in which you do things every day",
    "sentence": "A: Now that you work from home three days a week, how do you separate your job from your personal life in the evenings? B: I follow the same {{BLANK}} every day: I shut down my laptop at six, go for a short walk, cook something simple, and never check work e-mails after eight.",
    "cn": "A：既然你現在每週有三天在家工作，你晚上如何把工作和個人生活分開？ B：我每天都遵循同樣的【例行作息】：六點關掉筆電、去散步一下、煮點簡單的東西，而且八點以後絕不查看工作郵件。"
  },
  {
    "word": "entertainment",
    "pos": "n.",
    "cn_def": "娛樂；娛樂活動",
    "en_def": "shows, games, or activities that people enjoy",
    "sentence": "A: The trade fair ends at five each day, but what will the overseas visitors do in the evening while they are staying in the city? B: The organizers have arranged evening {{BLANK}} for them, including a night market tour, a traditional music show, and a boat ride on the river, so nobody will feel bored.",
    "cn": "A：商展每天五點結束，但海外訪客住在城裡期間晚上要做什麼呢？ B：主辦單位已經為他們安排了晚間【娛樂活動】，包括夜市導覽、傳統音樂表演和河上遊船，所以沒有人會感到無聊。"
  },
  {
    "word": "outing",
    "pos": "n.",
    "cn_def": "出遊；遠足",
    "en_def": "a short trip for fun, often with a group",
    "sentence": "A: Our team has been under a lot of pressure lately, so what is human resources doing to help improve morale this month? B: They have planned an evening {{BLANK}} to the harbor on Friday, with a seafood buffet and fireworks, and the company will pay for the bus and the meal for everyone.",
    "cn": "A：我們團隊最近壓力很大，人資部這個月有做什麼來幫忙提升士氣嗎？ B：他們安排了星期五晚上到港口的【出遊】，有海鮮自助餐和煙火，公司會為每個人支付巴士和餐費。"
  },
  {
    "word": "refreshment",
    "pos": "n.",
    "cn_def": "茶點；點心飲料",
    "en_def": "food and drinks served at a meeting or event",
    "sentence": "A: The evening seminar for new investors will last about three hours, so should we provide anything for the guests during the break? B: Yes, please set up a table outside the hall with coffee, tea, and cookies, because people will appreciate a little {{BLANK}} after listening to presentations for such a long time.",
    "cn": "A：新投資人的晚間研討會將持續大約三個小時，休息時間我們應該為來賓準備些什麼嗎？ B：要，請在會議廳外擺一張桌子，放上咖啡、茶和餅乾，因為聽了這麼久的簡報，大家會很感謝有些【茶點】可以享用。"
  },
  {
    "word": "lamplight",
    "pos": "n.",
    "cn_def": "燈光",
    "en_def": "the light that comes from a lamp",
    "sentence": "A: The bookstore owner wants to attract more customers in the evening, so what changes has she made to the reading area? B: She replaced the bright ceiling lights with small table lamps, so people can now read by warm {{BLANK}} in comfortable chairs, and many customers stay longer and buy more books.",
    "cn": "A：書店老闆想在晚上吸引更多顧客，她對閱讀區做了什麼改變？ B：她把明亮的天花板燈換成小檯燈，所以現在大家可以坐在舒適的椅子上，在溫暖的【燈光】下閱讀，許多顧客待得更久、買更多書。"
  },
  {
    "word": "fireplace",
    "pos": "n.",
    "cn_def": "壁爐",
    "en_def": "an open place in the wall of a room where a fire is made",
    "sentence": "A: The mountain lodge we booked for the winter team-building weekend looks great online, but will it be warm enough at night? B: Don't worry, the main living room has a large stone {{BLANK}}, and the staff will light a fire every evening so we can sit together, drink hot tea, and chat.",
    "cn": "A：我們為冬季團隊建立週末預訂的山中小屋在網路上看起來很棒，但晚上會夠暖和嗎？ B：別擔心，主客廳有一座大型石砌【壁爐】，工作人員每天晚上都會生火，讓我們可以坐在一起喝熱茶聊天。"
  },
  {
    "word": "moonrise",
    "pos": "n.",
    "cn_def": "月出；月亮升起",
    "en_def": "the time when the moon first appears in the sky",
    "sentence": "A: The resort is offering a special evening boat tour on Saturday, so what makes it different from the regular sightseeing trips? B: The boat leaves the harbor just before {{BLANK}}, so guests can watch the full moon slowly appear over the sea while they enjoy a light meal and live music.",
    "cn": "A：度假村星期六推出特別的夜間遊船行程，它和一般的觀光行程有什麼不同？ B：船會在【月出】前離開港口，讓旅客在享用簡餐和現場音樂的同時，欣賞滿月緩緩從海面上升起。"
  },
  {
    "word": "starry",
    "pos": "adj.",
    "cn_def": "佈滿星星的；星光燦爛的",
    "en_def": "full of stars",
    "sentence": "A: Why did the tour company choose a campsite so far from the city for the overnight trip with our overseas clients? B: The area has almost no light pollution, so on clear nights guests can lie on the grass and look up at a {{BLANK}} sky, which is something they can never see at home.",
    "cn": "A：旅行社為什麼要為我們海外客戶的過夜行程選一個離城市這麼遠的營地？ B：那個地區幾乎沒有光害，所以在晴朗的夜晚，客人可以躺在草地上仰望【繁星點點的】天空，這是他們在家鄉永遠看不到的。"
  },
  {
    "word": "pleasant",
    "pos": "adj.",
    "cn_def": "令人愉快的；宜人的",
    "en_def": "nice and enjoyable",
    "sentence": "A: How was the welcome reception for the new branch manager last night, and did she get a chance to meet everyone? B: It was a very {{BLANK}} evening, because the food was delicious, the speeches were short, and she spent time talking with almost every staff member in a friendly way.",
    "cn": "A：昨晚新分行經理的歡迎會怎麼樣？她有機會見到每個人嗎？ B：那是一個非常【愉快的】夜晚，因為食物很美味、致詞很簡短，而且她親切地跟幾乎每一位員工都聊了天。"
  },
  {
    "word": "wind-down",
    "pos": "n.",
    "cn_def": "逐步減緩；收尾",
    "en_def": "a period of slowly becoming less active before stopping",
    "sentence": "A: The factory runs three shifts a day, so how do the night supervisors prepare the machines before the morning team arrives? B: During the last hour there is a slow {{BLANK}} of production, when workers turn off the machines one by one, clean the equipment, and write notes for the next shift.",
    "cn": "A：工廠一天三班運作，夜班主管們在早班人員到達前如何準備機器？ B：在最後一個小時會有一段生產逐步【收尾減緩】的時間，工人們會逐一關閉機器、清潔設備，並為下一班寫下交接紀錄。"
  }
];

const MCQS = [
  {
    "q": "The park closes at _____ every day during the winter. Visitors must leave before the gates are locked and the lights go off.",
    "options": [
      "dusk",
      "nap",
      "routine",
      "supper"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The photographer took the final pictures of the hotel in the soft _____. The blue evening light made the building look calm and elegant.",
    "options": [
      "fireplace",
      "twilight",
      "gathering",
      "outing"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Guests at the rooftop bar can watch the _____ over the ocean every evening. Many people take photos as the sky turns orange and red.",
    "options": [
      "supper",
      "refreshment",
      "sunset",
      "routine"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The hiking guide told the group to return to the camp before _____. The mountain trail becomes very dangerous when it is completely dark.",
    "options": [
      "refreshment",
      "entertainment",
      "leisure",
      "nightfall"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The local farmers usually work in the fields from sunup to _____. They stop only when it becomes too dark to see.",
    "options": [
      "sundown",
      "gathering",
      "outing",
      "routine"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The store is busiest in the _____, between five and seven o'clock. That is when most office workers stop by on their way home.",
    "options": [
      "late evening",
      "early evening",
      "fireplace",
      "refreshment"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The cleaning crew works in the _____, after eleven o'clock. By then all the employees have gone home, so the office is empty.",
    "options": [
      "early evening",
      "gathering",
      "late evening",
      "moonrise"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "After the long sales conference, the staff went to the hotel spa to _____. The warm pool helped them forget about work for a while.",
    "options": [
      "fade",
      "glow",
      "evaporate",
      "relax"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Many employees like to _____ with a cup of tea after a stressful day at the office. It helps them sleep better at night.",
    "options": [
      "unwind",
      "fade",
      "glow",
      "assemble"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The new apartment building has a gym and a pool for residents to enjoy in their _____ time. Rent is a little higher than nearby buildings.",
    "options": [
      "dusk",
      "leisure",
      "outing",
      "fireplace"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The company will hold a formal _____ for its top clients at a hotel on Friday night. Guests are asked to wear business suits.",
    "options": [
      "nap",
      "glow",
      "dinner",
      "dusk"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Our manager invited the whole team to a small _____ at her home after the project ended. Everyone brought a dish to share.",
    "options": [
      "twilight",
      "nap",
      "sundown",
      "gathering"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "After the heavy business lunch, the two partners took a short _____ along the river. The fresh air helped them feel more awake.",
    "options": [
      "stroll",
      "glow",
      "fireplace",
      "twilight"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The lights in the restaurant were too _____ for the guests to read the menu easily. The waiter brought a small candle to each table.",
    "options": [
      "starry",
      "dim",
      "pleasant",
      "peaceful"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The company held its planning retreat at a _____ lake far from the city. There was no traffic noise, so everyone could think clearly.",
    "options": [
      "starry",
      "dim",
      "peaceful",
      "spicy"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Please keep your voices _____ in the library after eight o'clock. Many students are studying for their final exams there.",
    "options": [
      "starry",
      "cozy",
      "dim",
      "quiet"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The small café has soft sofas and a warm fireplace, so it feels very _____ in winter. Many customers stay for hours with a book.",
    "options": [
      "cozy",
      "starry",
      "frugal",
      "bland"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "When the fire alarm rang, the hotel manager _____ led the guests out of the building. Nobody panicked, and everyone left safely.",
    "options": [
      "dearly",
      "calmly",
      "publicly",
      "fluently"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The candles on each table gave the restaurant a warm _____ in the evening. Couples often choose it for special occasions.",
    "options": [
      "nap",
      "dusk",
      "glow",
      "outing"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "As the sun went down, the bright colors in the sky began to _____. Soon the streetlights came on along the harbor.",
    "options": [
      "relax",
      "reflect",
      "unwind",
      "fade"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Every Friday evening, the manager takes time to _____ on what the team achieved that week. She then writes a short plan for Monday.",
    "options": [
      "reflect",
      "fade",
      "glow",
      "stroll"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The long flight left Kevin very tired, so he took a short _____ at the hotel before the dinner meeting. He felt much better afterward.",
    "options": [
      "glow",
      "nap",
      "dusk",
      "fireplace"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Checking e-mails, reviewing the schedule, and calling clients are part of my morning _____. I do these tasks every day before nine.",
    "options": [
      "twilight",
      "glow",
      "routine",
      "moonrise"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The hotel offers live music and magic shows as evening _____ for its guests. Children especially enjoy the shows on weekends.",
    "options": [
      "fireplace",
      "nightfall",
      "lamplight",
      "entertainment"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Human resources organized a company _____ to the beach for all employees next Saturday. A bus will leave the office at eight.",
    "options": [
      "outing",
      "glow",
      "twilight",
      "nap"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Coffee and cookies will be offered as _____ during the break between sessions. Please return to the hall by three o'clock.",
    "options": [
      "sundown",
      "refreshment",
      "fireplace",
      "lamplight"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "On cold nights, guests at the mountain lodge sit around the _____ and drink hot chocolate. The fire keeps the whole room warm.",
    "options": [
      "sunset",
      "outing",
      "fireplace",
      "nap"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The boat tour leaves the harbor just before _____ so passengers can watch the moon come up over the sea. Tickets often sell out quickly.",
    "options": [
      "routine",
      "refreshment",
      "gathering",
      "moonrise"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Far away from the city lights, campers can enjoy a clear, _____ sky at night. Many people bring cameras to take pictures of the stars.",
    "options": [
      "starry",
      "cozy",
      "bland",
      "frugal"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "We had a very _____ evening with our clients at the new Italian restaurant. The food was excellent and the conversation was friendly.",
    "options": [
      "dim",
      "pleasant",
      "starry",
      "sedentary"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "dusk": {
    "pos": "n.",
    "en_def": "the time in the evening when it is starting to get dark",
    "cn_def": "黃昏；薄暮"
  },
  "twilight": {
    "pos": "n.",
    "en_def": "the soft, weak light just after the sun goes down",
    "cn_def": "暮光；黃昏時分"
  },
  "sunset": {
    "pos": "n.",
    "en_def": "the time when the sun goes down and the sky changes color",
    "cn_def": "日落；夕陽"
  },
  "nightfall": {
    "pos": "n.",
    "en_def": "the time in the evening when it becomes dark",
    "cn_def": "入夜；黃昏"
  },
  "sundown": {
    "pos": "n.",
    "en_def": "the time when the sun goes down; sunset",
    "cn_def": "日落時分"
  },
  "early evening": {
    "pos": "n.phr.",
    "en_def": "the first part of the evening, around 5 to 7 p.m.",
    "cn_def": "傍晚；晚間初時"
  },
  "late evening": {
    "pos": "n.phr.",
    "en_def": "the last part of the evening, before midnight",
    "cn_def": "深夜；晚間較晚時分"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and feel calm",
    "cn_def": "放鬆；休息"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to stop worrying and become calm after work or stress",
    "cn_def": "放鬆；解除緊張"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "free time when you are not working",
    "cn_def": "空閒；休閒"
  },
  "dinner": {
    "pos": "n.",
    "en_def": "the main meal of the day, usually eaten in the evening",
    "cn_def": "晚餐；正餐"
  },
  "supper": {
    "pos": "n.",
    "en_def": "a light meal eaten in the evening",
    "cn_def": "（簡單的）晚餐；宵夜"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people for a social purpose",
    "cn_def": "聚會；集會"
  },
  "stroll": {
    "pos": "n.",
    "en_def": "a slow, relaxed walk",
    "cn_def": "散步；漫步"
  },
  "dim": {
    "pos": "adj.",
    "en_def": "not bright; with little light",
    "cn_def": "昏暗的；暗淡的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and without noise or trouble",
    "cn_def": "寧靜的；平靜的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making very little noise",
    "cn_def": "安靜的"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable, and pleasant",
    "cn_def": "溫暖舒適的；溫馨的"
  },
  "calmly": {
    "pos": "adv.",
    "en_def": "in a relaxed way, without getting upset",
    "cn_def": "冷靜地；平靜地"
  },
  "softly": {
    "pos": "adv.",
    "en_def": "in a quiet and gentle way",
    "cn_def": "輕柔地；輕聲地"
  },
  "glow": {
    "pos": "n.",
    "en_def": "a soft, steady light",
    "cn_def": "光輝；柔和的光芒"
  },
  "fade": {
    "pos": "v.",
    "en_def": "to slowly become less bright or strong",
    "cn_def": "逐漸消失；變暗"
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to think carefully about something",
    "cn_def": "反思；仔細思考"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；打盹"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order in which you do things every day",
    "cn_def": "例行公事；日常作息"
  },
  "entertainment": {
    "pos": "n.",
    "en_def": "shows, games, or activities that people enjoy",
    "cn_def": "娛樂；娛樂活動"
  },
  "outing": {
    "pos": "n.",
    "en_def": "a short trip for fun, often with a group",
    "cn_def": "出遊；遠足"
  },
  "refreshment": {
    "pos": "n.",
    "en_def": "food and drinks served at a meeting or event",
    "cn_def": "茶點；點心飲料"
  },
  "lamplight": {
    "pos": "n.",
    "en_def": "the light that comes from a lamp",
    "cn_def": "燈光"
  },
  "fireplace": {
    "pos": "n.",
    "en_def": "an open place in the wall of a room where a fire is made",
    "cn_def": "壁爐"
  },
  "moonrise": {
    "pos": "n.",
    "en_def": "the time when the moon first appears in the sky",
    "cn_def": "月出；月亮升起"
  },
  "starry": {
    "pos": "adj.",
    "en_def": "full of stars",
    "cn_def": "佈滿星星的；星光燦爛的"
  },
  "pleasant": {
    "pos": "adj.",
    "en_def": "nice and enjoyable",
    "cn_def": "令人愉快的；宜人的"
  },
  "wind-down": {
    "pos": "n.",
    "en_def": "a period of slowly becoming less active before stopping",
    "cn_def": "逐步減緩；收尾"
  }
};

const EXTRA_GLOSSES = {};
