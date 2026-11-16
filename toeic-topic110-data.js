// Topic 110 Quiz Data: Drama 戲劇
// Source word list: https://www.examword.com/group-topic/drama — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T110 - Drama 戲劇",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "theatre",
    "pos": "n.",
    "cn_def": "劇院；戲院",
    "en_def": "a building where plays and shows are performed",
    "sentence": "A: Our sales team reached its yearly target last month, so how should we celebrate with them before the holiday break begins? B: I suggest we buy group tickets for the new musical at the {{BLANK}} downtown, because the show starts at seven, and we can have dinner at the Italian restaurant across the street first.",
    "cn": "A：我們的業務團隊上個月達成了年度目標，在假期開始前我們該怎麼和他們一起慶祝？ B：我建議我們買市中心那家【劇院】新音樂劇的團體票，因為表演七點開始，我們可以先在對街的義大利餐廳吃晚餐。"
  },
  {
    "word": "play",
    "pos": "n.",
    "cn_def": "戲劇；劇本",
    "en_def": "a story that actors perform on a stage",
    "sentence": "A: The company is sponsoring a local arts festival this year, so what kind of event will our logo appear on in the program? B: Our logo will be printed on the posters for a {{BLANK}} about a small family business, which a group of college students wrote themselves and will perform three times next weekend at the community center.",
    "cn": "A：公司今年贊助一個地方藝術節，我們的標誌會出現在節目單上的哪種活動？ B：我們的標誌會印在一齣關於小型家族企業的【戲劇】海報上，那是一群大學生自己寫的，下週末將在社區中心演出三場。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "演出；表演",
    "en_def": "the act of singing, dancing or acting for an audience",
    "sentence": "A: Did you enjoy the show that the marketing department organized for our overseas guests last night, or did you leave early? B: I stayed until the very end, because the {{BLANK}} was excellent, and the clients told me the singers and dancers were the best part of their whole business trip to Taipei.",
    "cn": "A：你喜歡行銷部昨晚為海外貴賓安排的表演嗎？還是你提早離開了？ B：我一直待到最後，因為那場【演出】非常精彩，客戶告訴我，那些歌手和舞者是他們這次台北商務之旅中最棒的部分。"
  },
  {
    "word": "stage",
    "pos": "n.",
    "cn_def": "舞台",
    "en_def": "the raised area in a theatre or hall where people perform or speak",
    "sentence": "A: The awards ceremony starts in two hours, so is everything ready in the main hall for our chairman's speech? B: Almost, but the workers are still setting up the lights and the microphone on the {{BLANK}}, and I asked them to place a small table there for the trophies before the guests arrive.",
    "cn": "A：頒獎典禮兩小時後開始，主廳裡為董事長演講準備的一切都就緒了嗎？ B：差不多了，但工人還在【舞台】上架設燈光和麥克風，我也請他們在賓客抵達前在那裡放一張小桌子擺獎盃。"
  },
  {
    "word": "actor",
    "pos": "n.",
    "cn_def": "演員；男演員",
    "en_def": "a person, usually a man, who acts in plays, films or TV shows",
    "sentence": "A: Who is going to host the opening night of our new hotel, since the general manager is too nervous to speak in front of a large crowd? B: We hired a famous local {{BLANK}} who has appeared in several popular TV series, and he will welcome the guests and introduce the chef before dinner is served.",
    "cn": "A：我們新飯店的開幕之夜要由誰來主持？因為總經理太緊張，不敢在一大群人面前說話。 B：我們請了一位知名的本地【男演員】，他演過好幾部熱門電視劇，他會在晚餐上桌前歡迎賓客並介紹主廚。"
  },
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "a woman who acts in plays, films or TV shows",
    "sentence": "A: Why is there such a long line outside the bookstore at the shopping mall this afternoon, and should we change our meeting place? B: A well-known {{BLANK}} is signing copies of her new book about her life in films, so it will be crowded for hours, and we had better meet at the coffee shop on the second floor instead.",
    "cn": "A：今天下午購物中心書店外面為什麼排了這麼長的隊伍？我們要不要換個碰面地點？ B：一位知名的【女演員】正在為她講述自己電影生涯的新書簽名，所以接下來幾個小時都會很擁擠，我們最好改在二樓的咖啡店碰面。"
  },
  {
    "word": "cast",
    "pos": "n.",
    "cn_def": "演員陣容；全體演員",
    "en_def": "all the actors in a play, film or show",
    "sentence": "A: I heard the staff musical for the company's anniversary is going well, but how many employees finally agreed to take part? B: The {{BLANK}} now includes eighteen people from five different departments, and even the finance manager agreed to sing a short song, so everyone is practicing during lunch breaks twice a week.",
    "cn": "A：我聽說公司週年慶的員工音樂劇進行得很順利，最後有多少員工同意參加？ B：現在的【演員陣容】包括來自五個不同部門的十八個人，連財務經理都答應唱一首短歌，所以大家每週兩次利用午休時間練習。"
  },
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "劇本；腳本；講稿",
    "en_def": "the written words of a play, film, speech or broadcast",
    "sentence": "A: The video team wants to film our new training program next Monday, but have the trainers prepared what they are going to say on camera? B: Yes, the human resources department wrote a clear {{BLANK}} for each trainer, and they will read it carefully over the weekend so that the filming can finish in one day.",
    "cn": "A：影片團隊想在下週一拍攝我們的新訓練課程，但講師們準備好要在鏡頭前說什麼了嗎？ B：準備好了，人資部門為每位講師寫了一份清楚的【腳本】，他們週末會仔細閱讀，好讓拍攝能在一天內完成。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "（戲劇、電影的）一場；場景",
    "en_def": "one part of a play or film that happens in one place",
    "sentence": "A: The new television commercial for our sports drink looks great, but why did the shooting take two extra days? B: The final {{BLANK}}, where the runner crosses the finish line at sunrise, had to be filmed three more times because heavy clouds kept covering the sky, and the director wanted the light to be perfect.",
    "cn": "A：我們運動飲料的新電視廣告看起來很棒，但拍攝為什麼多花了兩天？ B：最後一【場戲】，也就是跑者在日出時衝過終點線的那一段，必須再多拍三次，因為厚厚的雲層一直遮住天空，而導演希望光線完美無缺。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話；對白",
    "en_def": "the words that people say to each other in a play, film or book",
    "sentence": "A: Our English training course for front desk staff starts next month, so how will the teacher help them practice talking with hotel guests? B: Each lesson includes a short {{BLANK}} between a receptionist and a traveler, and the staff will act it out in pairs so they feel more confident when they answer real questions.",
    "cn": "A：我們櫃檯員工的英語訓練課程下個月開始，老師會怎麼幫助他們練習和飯店客人交談？ B：每堂課都包含一段櫃檯接待員和旅客之間的簡短【對話】，員工會兩人一組演練，這樣他們回答真正的問題時會更有自信。"
  },
  {
    "word": "monologue",
    "pos": "n.",
    "cn_def": "獨白",
    "en_def": "a long speech by one actor alone in a play or film",
    "sentence": "A: The drama club is performing at our company's year-end party, so how long will the main actor be alone in front of the audience? B: He has a five-minute {{BLANK}} near the end of the show, when he talks about his dreams for the future, and many people say it is the most moving part of the whole story.",
    "cn": "A：戲劇社要在我們公司的尾牙演出，主角會獨自面對觀眾多久？ B：他在戲快結束時有一段五分鐘的【獨白】，訴說他對未來的夢想，很多人說那是整個故事中最感人的部分。"
  },
  {
    "word": "tragedy",
    "pos": "n.",
    "cn_def": "悲劇",
    "en_def": "a serious play or story with a sad ending",
    "sentence": "A: Several clients asked whether they could bring their children to the show we booked for Saturday evening, so what should I tell them? B: Please explain that it is a serious {{BLANK}} about a family that loses everything in a war, so it may be too sad for young children, and we can offer them tickets to the musical instead.",
    "cn": "A：有好幾位客戶問能不能帶孩子去看我們訂的星期六晚上的演出，我該怎麼回覆他們？ B：請向他們說明這是一齣嚴肅的【悲劇】，講述一個家庭在戰爭中失去一切的故事，對年幼的孩子來說可能太悲傷了，我們可以改提供音樂劇的票給他們。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇",
    "en_def": "a funny play, film or show that makes people laugh",
    "sentence": "A: Everyone has been working very hard on the annual report, so what kind of entertainment should we choose for the team night out on Friday? B: Let's book seats for the new {{BLANK}} at the arts center, because it is full of funny jokes and silly characters, and a good laugh is exactly what the team needs after such a stressful month.",
    "cn": "A：大家都非常努力在做年度報告，星期五的團隊聚會我們該選哪種娛樂活動？ B：我們去訂藝術中心那齣新【喜劇】的位子吧，因為裡面充滿好笑的笑話和滑稽的角色，在這麼有壓力的一個月之後，好好笑一場正是團隊需要的。"
  },
  {
    "word": "melodrama",
    "pos": "n.",
    "cn_def": "通俗劇；灑狗血的戲",
    "en_def": "a story or play with too much strong emotion and exciting events",
    "sentence": "A: Did you like the television series that the advertising agency recommended for our product placement, or do you think it is a bad match for our brand? B: Honestly, it is a {{BLANK}} with too many tears, shouting and surprising love stories, so I worry that our older banking customers will not take our message seriously if we appear in it.",
    "cn": "A：你喜歡廣告代理商推薦我們做置入性行銷的那部電視劇嗎？還是你覺得它和我們的品牌不搭？ B：老實說，那是一部充滿太多眼淚、爭吵和意外愛情故事的【通俗劇】，所以我擔心如果我們出現在劇中，我們年長的銀行客戶不會認真看待我們的訊息。"
  },
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "情節；劇情",
    "en_def": "the main events of a story, film or play",
    "sentence": "A: The publisher wants to turn the best-selling novel into a stage musical, but what did the producers think about the story when they read it? B: They loved the {{BLANK}}, in which a young chef secretly saves a failing restaurant, but they said several parts are too long and must be shortened before rehearsals begin in March.",
    "cn": "A：出版社想把那本暢銷小說改編成舞台音樂劇，製作人讀過後覺得這個故事怎麼樣？ B：他們很喜歡那個【情節】，講的是一位年輕廚師暗中拯救一家快倒閉的餐廳，但他們說有好幾個部分太長，必須在三月開始排練前刪短。"
  },
  {
    "word": "climax",
    "pos": "n.",
    "cn_def": "高潮；頂點",
    "en_def": "the most exciting or important part of a story",
    "sentence": "A: The audience at last night's show seemed quiet for most of the evening, so were the sponsors disappointed with the performance? B: Not at all, because at the {{BLANK}} of the story, when the hero finally discovers the truth about his father, everyone stood up and clapped, and the sponsors said they would support the next season as well.",
    "cn": "A：昨晚演出的觀眾大部分時間似乎都很安靜，贊助商對演出感到失望嗎？ B：一點也不，因為在故事的【高潮】，當主角終於發現關於他父親的真相時，所有人都站起來鼓掌，贊助商還說他們下一季也會繼續支持。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突；矛盾",
    "en_def": "a serious disagreement or fight between people",
    "sentence": "A: The new drama that our company is sponsoring has received great reviews, so why do critics say it feels so real? B: The main {{BLANK}} is between two brothers who disagree about whether to sell their late father's factory, and many people in the audience recognize the same arguments from their own family businesses.",
    "cn": "A：我們公司贊助的新戲獲得很好的評價，為什麼評論家說它感覺這麼真實？ B：主要的【衝突】發生在兩兄弟之間，他們對是否要賣掉亡父的工廠意見不合，許多觀眾在其中看到了自己家族企業中同樣的爭執。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person in a story, play or film",
    "sentence": "A: The children's theatre group asked our toy company to design a doll for their new show, so what information do we need from them first? B: We need a clear description of the main {{BLANK}}, including her age, clothes and personality, so that our designers can create a doll that looks exactly like the girl on stage.",
    "cn": "A：兒童劇團請我們玩具公司為他們的新戲設計一個娃娃，我們首先需要他們提供什麼資訊？ B：我們需要主要【角色】的清楚描述，包括她的年齡、服裝和個性，這樣我們的設計師才能做出和舞台上那個女孩一模一樣的娃娃。"
  },
  {
    "word": "role",
    "pos": "n.",
    "cn_def": "角色；（演員扮演的）角",
    "en_def": "the part that an actor plays in a play or film",
    "sentence": "A: Our receptionist Anna told me she was chosen for the community musical next month, so will she need to take any days off? B: Yes, she got the leading {{BLANK}} as a young nurse, so she asked for two afternoons off for rehearsals, and I have already found someone to cover the front desk while she is away.",
    "cn": "A：我們的櫃檯人員安娜告訴我，她被選上參加下個月的社區音樂劇，她需要請假嗎？ B：需要，她拿到了一位年輕護士的主要【角色】，所以她請了兩個下午的假去排練，我已經找好人在她不在時代班櫃檯。"
  },
  {
    "word": "rehearsal",
    "pos": "n.",
    "cn_def": "排練；彩排",
    "en_def": "a practice of a play, show or speech before the real one",
    "sentence": "A: The marketing team is presenting the new product at the trade show on Thursday, but are they ready to speak in front of hundreds of buyers? B: They will hold a full {{BLANK}} in the large meeting room tomorrow afternoon, with the lights, slides and microphones, so they can fix any problems before the real event begins.",
    "cn": "A：行銷團隊星期四要在商展上發表新產品，他們準備好在數百位買家面前演講了嗎？ B：他們明天下午會在大會議室進行一次完整的【彩排】，包括燈光、投影片和麥克風，這樣就能在正式活動開始前修正任何問題。"
  },
  {
    "word": "direct",
    "pos": "v.",
    "cn_def": "導演；執導",
    "en_def": "to be in charge of the actors and the making of a play or film",
    "sentence": "A: The college drama club is planning a show to raise money for the local hospital, so who will guide the actors during practice? B: A retired film teacher has kindly agreed to {{BLANK}} the show for free, and he will meet the students every Saturday to help them with their acting and movement on stage.",
    "cn": "A：大學戲劇社正在籌劃一場演出，為當地醫院募款，練習時由誰來指導演員？ B：一位退休的電影老師好心答應免費【執導】這場演出，他每個星期六都會和學生見面，幫助他們練習演技和舞台走位。"
  },
  {
    "word": "director",
    "pos": "n.",
    "cn_def": "導演",
    "en_def": "the person in charge of making a film or play",
    "sentence": "A: The bank wants to make a short video about its history for its fiftieth anniversary, so who is in charge of the filming? B: We hired an experienced {{BLANK}} who has made many award-winning documentaries, and she will decide which employees to interview and how each part of the video should look.",
    "cn": "A：銀行想為五十週年拍一支關於其歷史的短片，拍攝由誰負責？ B：我們聘請了一位經驗豐富的【導演】，她拍過許多得獎的紀錄片，她會決定要採訪哪些員工以及影片每個部分該呈現什麼樣子。"
  },
  {
    "word": "production",
    "pos": "n.",
    "cn_def": "（戲劇、電影的）製作；作品",
    "en_def": "a play, film or show that is made for the public",
    "sentence": "A: Our company has agreed to sponsor a musical at the city arts center, so how much money will we need to give them this year? B: The new {{BLANK}} needs about two million dollars for costumes, lights and actors' salaries, and in return, our logo will appear on every poster and ticket for the whole season.",
    "cn": "A：我們公司同意贊助市立藝術中心的一齣音樂劇，今年我們需要給他們多少錢？ B：這部新【製作】大約需要兩百萬元來支付服裝、燈光和演員的薪水，作為回報，我們的標誌會出現在整季的每一張海報和門票上。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的；巨大的；突然的",
    "en_def": "sudden and very big; also related to plays and acting",
    "sentence": "A: Did the sales figures change much after we launched the new online advertising campaign in September, or did the results disappoint the managers? B: Yes, there was a {{BLANK}} increase in orders during the first two weeks, so the warehouse had to hire extra workers, and the manager is now asking for a bigger budget for next year.",
    "cn": "A：我們九月推出新的網路廣告活動後，銷售數字有很大的變化嗎？還是結果讓經理們失望了？ B：有變化，頭兩週的訂單出現【大幅的】增加，所以倉庫必須加聘人手，經理現在正在爭取明年更多的預算。"
  },
  {
    "word": "theatrical",
    "pos": "adj.",
    "cn_def": "劇場的；戲劇的",
    "en_def": "related to the theatre or acting",
    "sentence": "A: Why did the hotel ask the event company to decorate the ballroom for the charity dinner instead of doing it themselves? B: The event company has special {{BLANK}} lighting and colorful curtains, so they can make the room look like a real stage, and the guests will feel as if they are attending a show on Broadway.",
    "cn": "A：為什麼飯店請活動公司來布置慈善晚宴的宴會廳，而不是自己布置？ B：活動公司有專業的【劇場】燈光和色彩繽紛的布幕，可以讓宴會廳看起來像真正的舞台，賓客會覺得彷彿在百老匯看表演一樣。"
  },
  {
    "word": "emotional",
    "pos": "adj.",
    "cn_def": "情緒的；感人的；激動的",
    "en_def": "making people feel strong feelings, such as sadness or love",
    "sentence": "A: How did the staff react at the farewell party when our general manager announced that she was finally retiring after thirty years? B: It was a very {{BLANK}} evening, because many people cried during her speech, and several employees said that she had been like a mother to them since they first joined the company.",
    "cn": "A：在歡送會上，當我們的總經理宣布她在三十年後終於要退休時，員工有什麼反應？ B：那是一個非常【感人】的夜晚，因為很多人在她致詞時都哭了，好幾位員工說，從他們剛進公司起，她就像母親一樣照顧他們。"
  },
  {
    "word": "intense",
    "pos": "adj.",
    "cn_def": "強烈的；激烈的；極大的",
    "en_def": "very strong or extreme",
    "sentence": "A: The new manager seems very tired these days, so is something wrong at the branch office she is in charge of? B: She has been under {{BLANK}} pressure to finish the merger with the Japanese company by the end of the month, so she works late every night and rarely has time for lunch.",
    "cn": "A：新經理最近看起來很疲倦，她負責的分公司出了什麼問題嗎？ B：她承受著【極大的】壓力，必須在月底前完成與日本公司的合併案，所以她每天晚上都工作到很晚，幾乎沒有時間吃午餐。"
  },
  {
    "word": "captivating",
    "pos": "adj.",
    "cn_def": "迷人的；引人入勝的",
    "en_def": "so interesting or beautiful that it holds your attention",
    "sentence": "A: Why did so many people stay at our booth at the travel fair, even though other companies were giving away free gifts? B: Our new video about the islands was truly {{BLANK}}, with beautiful music and amazing pictures of the ocean, so visitors stopped to watch it and then asked many questions about our holiday packages.",
    "cn": "A：為什麼這麼多人停留在我們旅展的攤位上，即使其他公司都在發送免費贈品？ B：我們關於那些島嶼的新影片真的很【引人入勝】，有優美的音樂和令人驚豔的海洋畫面，所以參觀者停下來觀看，接著問了很多關於我們度假套裝行程的問題。"
  },
  {
    "word": "expressive",
    "pos": "adj.",
    "cn_def": "富有表現力的；富有表情的",
    "en_def": "showing feelings and thoughts clearly",
    "sentence": "A: Which of the two singers do you think we should invite to perform at the hotel's grand opening next month? B: I prefer the younger one, because she has a very {{BLANK}} face and voice, so even guests who don't understand Chinese can feel the happiness and sadness in her songs.",
    "cn": "A：你覺得下個月飯店盛大開幕時，我們應該邀請兩位歌手中的哪一位來表演？ B：我比較喜歡年輕的那位，因為她的表情和嗓音都非常【富有表現力】，所以即使是聽不懂中文的賓客，也能感受到她歌曲中的喜悅與悲傷。"
  },
  {
    "word": "dramatically",
    "pos": "adv.",
    "cn_def": "大幅地；戲劇性地",
    "en_def": "in a sudden and very big way",
    "sentence": "A: Has the number of visitors to our online ticket store changed since we started offering student discounts for weekend shows? B: Yes, it has risen {{BLANK}} over the past three months, so we now sell almost twice as many tickets, and we may need to add extra performances on Sunday afternoons.",
    "cn": "A：自從我們開始提供週末演出的學生折扣後，我們網路售票商店的訪客人數有改變嗎？ B：有，過去三個月人數【大幅地】上升，所以我們現在賣出的票幾乎是原來的兩倍，我們可能需要在星期日下午加場演出。"
  },
  {
    "word": "passionately",
    "pos": "adv.",
    "cn_def": "熱情地；熱烈地",
    "en_def": "with very strong feelings or interest",
    "sentence": "A: Why did the board finally agree to give money to the city's new youth theatre, when they had refused the same request last year? B: The young director spoke so {{BLANK}} about helping teenagers build confidence through acting that every board member was moved, and they voted to support the project for three years.",
    "cn": "A：董事會去年拒絕了同樣的請求，為什麼最後同意捐款給市裡的新青少年劇院？ B：那位年輕導演【熱情地】談到如何透過表演幫助青少年建立自信，讓每一位董事都很感動，於是他們投票決定支持這個計畫三年。"
  },
  {
    "word": "portray",
    "pos": "v.",
    "cn_def": "描繪；飾演",
    "en_def": "to show or describe someone in a certain way, or to act as a character",
    "sentence": "A: The film company wants to make a movie about our company's founder, but are we happy with the way they plan to show him? B: Yes, they promised to {{BLANK}} him as a hard-working and honest man who started with nothing, and our public relations team will check the script before filming begins.",
    "cn": "A：電影公司想拍一部關於我們公司創辦人的電影，我們對他們打算呈現他的方式滿意嗎？ B：滿意，他們承諾會把他【描繪】成一個白手起家、勤奮又誠實的人，而我們的公關團隊會在開拍前審核劇本。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "詮釋；解讀",
    "en_def": "to understand or perform something in a particular way",
    "sentence": "A: The actors in our training video for new employees seem confused about the customer complaint scene, so what should we do? B: Let's ask the trainer to explain the situation again, because each actor may {{BLANK}} the angry customer's feelings differently, and we want everyone to show the same calm and polite response.",
    "cn": "A：我們新進員工訓練影片中的演員對客訴那一場戲似乎感到困惑，我們該怎麼辦？ B：我們請講師再解釋一次情況吧，因為每個演員對憤怒客戶的情緒可能有不同的【詮釋】，而我們希望每個人都表現出同樣冷靜又有禮貌的回應。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興發揮；即興表演",
    "en_def": "to speak or act without planning or preparing first",
    "sentence": "A: What happened at the product launch yesterday when the projector suddenly stopped working in the middle of the presentation? B: Our sales manager had to {{BLANK}}, so he told a funny story about the first time he used the product, and the audience laughed and didn't even notice the problem with the screen.",
    "cn": "A：昨天產品發表會進行到一半投影機突然故障時，發生了什麼事？ B：我們的業務經理只好【即興發揮】，他講了一個自己第一次使用這項產品的有趣故事，觀眾都笑了，甚至沒注意到螢幕出了問題。"
  },
  {
    "word": "spotlight",
    "pos": "n.",
    "cn_def": "聚光燈；（眾人的）焦點",
    "en_def": "a strong light that shines on one person or place on a stage",
    "sentence": "A: How will our new chief executive be introduced to the investors at the annual meeting next week? B: The lights in the hall will go down, and then a bright {{BLANK}} will shine on her as she walks to the front, so everyone will know immediately who she is before she begins her speech.",
    "cn": "A：下週年度大會上，我們的新執行長要怎麼介紹給投資人？ B：大廳的燈光會暗下來，接著當她走到前面時，一道明亮的【聚光燈】會照在她身上，這樣在她開始演講前，大家馬上就會知道她是誰。"
  }
];

const MCQS = [
  {
    "q": "The staff outing includes a show at the old _____ near the river. The building has over eight hundred red velvet seats.",
    "options": [
      "dialogue",
      "theatre",
      "climax",
      "script"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The local drama group will perform a new _____ next month. It tells the story of a fisherman and his three daughters.",
    "options": [
      "spotlight",
      "rehearsal",
      "play",
      "director"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ticket holders must arrive at least fifteen minutes before the _____ begins. Late guests will not be allowed in until the break.",
    "options": [
      "performance",
      "character",
      "plot",
      "conflict"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "After the speeches, the winners were invited onto the _____ to receive their awards. Photographers took pictures from the front row.",
    "options": [
      "comedy",
      "tragedy",
      "dialogue",
      "stage"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The cereal company hired a popular _____ to appear in its new television commercial. Sales rose soon after the advertisement aired.",
    "options": [
      "script",
      "actor",
      "scene",
      "climax"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The whole _____ of the musical attended the charity dinner after the show. Guests could take photos with all the performers.",
    "options": [
      "plot",
      "spotlight",
      "tragedy",
      "cast"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please send the final _____ for the radio advertisement by Friday. The voice actors need time to practice their lines.",
    "options": [
      "stage",
      "climax",
      "script",
      "spotlight"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The opening _____ of the commercial shows a family eating breakfast together. It was filmed in a real kitchen in Taichung.",
    "options": [
      "scene",
      "director",
      "actor",
      "theatre"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The textbook includes a short _____ between a hotel clerk and a guest. Students read it aloud in pairs during class.",
    "options": [
      "climax",
      "stage",
      "dialogue",
      "production"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Many audience members cried at the end of the _____. In the final scene, the young hero dies while saving his village.",
    "options": [
      "comedy",
      "tragedy",
      "rehearsal",
      "spotlight"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new _____ at the City Theatre is full of jokes and silly mistakes. The audience laughed loudly from beginning to end.",
    "options": [
      "comedy",
      "tragedy",
      "conflict",
      "climax"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The movie had famous actors and beautiful music. However, the _____ was so confusing that many viewers did not understand the ending.",
    "options": [
      "stage",
      "spotlight",
      "cast",
      "plot"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The story slowly builds toward its _____ in the last act. That is when the detective finally reveals the name of the thief.",
    "options": [
      "actor",
      "climax",
      "cast",
      "theatre"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The main _____ in the story is between a factory owner and his workers. They argue about pay and safety for most of the play.",
    "options": [
      "stage",
      "script",
      "spotlight",
      "conflict"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Children love the main _____ in the cartoon, a friendly blue robot. The company now sells toys and T-shirts with his picture.",
    "options": [
      "character",
      "rehearsal",
      "dialogue",
      "theatre"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Our receptionist will play the _____ of a busy doctor in the company's safety video. She practiced her lines all week.",
    "options": [
      "stage",
      "plot",
      "role",
      "climax"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The final _____ for Saturday's concert will take place on Friday evening. All performers must wear their costumes and arrive by six.",
    "options": [
      "rehearsal",
      "character",
      "tragedy",
      "plot"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The famous filmmaker has agreed to _____ our next television commercial. She will choose the actors and plan every scene.",
    "options": [
      "portray",
      "interpret",
      "improvise",
      "direct"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The _____ asked the actors to repeat the scene five times. He wanted every movement to look natural on camera.",
    "options": [
      "script",
      "climax",
      "director",
      "spotlight"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The theatre's new _____ of the famous musical opens next week. More than ten thousand tickets have already been sold.",
    "options": [
      "dialogue",
      "production",
      "conflict",
      "character"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The new advertising campaign led to a _____ rise in online sales. Orders doubled in just three weeks.",
    "options": [
      "emotional",
      "expressive",
      "captivating",
      "dramatic"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The costume shop rents _____ wigs, masks and gowns to drama clubs. Its prices are lower than those of other stores.",
    "options": [
      "theatrical",
      "intense",
      "emotional",
      "expressive"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The retiring manager could not stop crying during her farewell speech. It was a very _____ moment for her and her team.",
    "options": [
      "theatrical",
      "captivating",
      "emotional",
      "expressive"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Competition among online shoe stores has become very _____ this year. Many small shops have closed because of low prices.",
    "options": [
      "theatrical",
      "intense",
      "expressive",
      "emotional"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The magician's show was truly _____, and it held the children's attention for a full hour. Nobody even looked at their phones.",
    "options": [
      "emotional",
      "expressive",
      "theatrical",
      "captivating"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The dancer has a very _____ face that shows every feeling clearly. Even people in the back row can see her joy and sadness.",
    "options": [
      "expressive",
      "intense",
      "dramatic",
      "theatrical"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The new film will _____ the founder as a kind and hard-working man. His family helped the writers with many details.",
    "options": [
      "direct",
      "interpret",
      "portray",
      "improvise"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Every reader may _____ the ending of the novel in a different way. That is why the book club had such a long discussion.",
    "options": [
      "direct",
      "interpret",
      "portray",
      "improvise"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The speaker's laptop suddenly stopped working during the talk. She had to _____ and continue without her slides.",
    "options": [
      "improvise",
      "direct",
      "portray",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "A bright _____ followed the singer as she walked across the stage. The rest of the hall remained completely dark.",
    "options": [
      "plot",
      "cast",
      "spotlight",
      "dialogue"
    ],
    "answer": 2,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "theatre": {
    "pos": "n.",
    "en_def": "a building where plays and shows are performed",
    "cn_def": "劇院；戲院"
  },
  "play": {
    "pos": "n.",
    "en_def": "a story that actors perform on a stage",
    "cn_def": "戲劇；劇本"
  },
  "performance": {
    "pos": "n.",
    "en_def": "the act of singing, dancing or acting for an audience",
    "cn_def": "演出；表演"
  },
  "stage": {
    "pos": "n.",
    "en_def": "the raised area in a theatre or hall where people perform or speak",
    "cn_def": "舞台"
  },
  "actor": {
    "pos": "n.",
    "en_def": "a person, usually a man, who acts in plays, films or TV shows",
    "cn_def": "演員；男演員"
  },
  "actress": {
    "pos": "n.",
    "en_def": "a woman who acts in plays, films or TV shows",
    "cn_def": "女演員"
  },
  "cast": {
    "pos": "n.",
    "en_def": "all the actors in a play, film or show",
    "cn_def": "演員陣容；全體演員"
  },
  "script": {
    "pos": "n.",
    "en_def": "the written words of a play, film, speech or broadcast",
    "cn_def": "劇本；腳本；講稿"
  },
  "scene": {
    "pos": "n.",
    "en_def": "one part of a play or film that happens in one place",
    "cn_def": "（戲劇、電影的）一場；場景"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "the words that people say to each other in a play, film or book",
    "cn_def": "對話；對白"
  },
  "monologue": {
    "pos": "n.",
    "en_def": "a long speech by one actor alone in a play or film",
    "cn_def": "獨白"
  },
  "tragedy": {
    "pos": "n.",
    "en_def": "a serious play or story with a sad ending",
    "cn_def": "悲劇"
  },
  "comedy": {
    "pos": "n.",
    "en_def": "a funny play, film or show that makes people laugh",
    "cn_def": "喜劇"
  },
  "melodrama": {
    "pos": "n.",
    "en_def": "a story or play with too much strong emotion and exciting events",
    "cn_def": "通俗劇；灑狗血的戲"
  },
  "plot": {
    "pos": "n.",
    "en_def": "the main events of a story, film or play",
    "cn_def": "情節；劇情"
  },
  "climax": {
    "pos": "n.",
    "en_def": "the most exciting or important part of a story",
    "cn_def": "高潮；頂點"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement or fight between people",
    "cn_def": "衝突；矛盾"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person in a story, play or film",
    "cn_def": "角色；人物"
  },
  "role": {
    "pos": "n.",
    "en_def": "the part that an actor plays in a play or film",
    "cn_def": "角色；（演員扮演的）角"
  },
  "rehearsal": {
    "pos": "n.",
    "en_def": "a practice of a play, show or speech before the real one",
    "cn_def": "排練；彩排"
  },
  "direct": {
    "pos": "v.",
    "en_def": "to be in charge of the actors and the making of a play or film",
    "cn_def": "導演；執導"
  },
  "director": {
    "pos": "n.",
    "en_def": "the person in charge of making a film or play",
    "cn_def": "導演"
  },
  "production": {
    "pos": "n.",
    "en_def": "a play, film or show that is made for the public",
    "cn_def": "（戲劇、電影的）製作；作品"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "sudden and very big; also related to plays and acting",
    "cn_def": "戲劇性的；巨大的；突然的"
  },
  "theatrical": {
    "pos": "adj.",
    "en_def": "related to the theatre or acting",
    "cn_def": "劇場的；戲劇的"
  },
  "emotional": {
    "pos": "adj.",
    "en_def": "making people feel strong feelings, such as sadness or love",
    "cn_def": "情緒的；感人的；激動的"
  },
  "intense": {
    "pos": "adj.",
    "en_def": "very strong or extreme",
    "cn_def": "強烈的；激烈的；極大的"
  },
  "captivating": {
    "pos": "adj.",
    "en_def": "so interesting or beautiful that it holds your attention",
    "cn_def": "迷人的；引人入勝的"
  },
  "expressive": {
    "pos": "adj.",
    "en_def": "showing feelings and thoughts clearly",
    "cn_def": "富有表現力的；富有表情的"
  },
  "dramatically": {
    "pos": "adv.",
    "en_def": "in a sudden and very big way",
    "cn_def": "大幅地；戲劇性地"
  },
  "passionately": {
    "pos": "adv.",
    "en_def": "with very strong feelings or interest",
    "cn_def": "熱情地；熱烈地"
  },
  "portray": {
    "pos": "v.",
    "en_def": "to show or describe someone in a certain way, or to act as a character",
    "cn_def": "描繪；飾演"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to understand or perform something in a particular way",
    "cn_def": "詮釋；解讀"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to speak or act without planning or preparing first",
    "cn_def": "即興發揮；即興表演"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "a strong light that shines on one person or place on a stage",
    "cn_def": "聚光燈；（眾人的）焦點"
  }
};

const EXTRA_GLOSSES = {};
