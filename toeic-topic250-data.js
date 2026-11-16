// Topic 250 Quiz Data: Music 音樂
// Source word list: https://www.examword.com/group-topic/music — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T250 - Music 音樂",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "music genre",
    "pos": "n.phr.",
    "cn_def": "音樂類型",
    "en_def": "a type or style of music",
    "sentence": "A: Which kind of songs should we play in the hotel lobby when the international guests arrive for the conference next Monday? B: The manager wants a relaxing {{BLANK}} like soft jazz, because loud songs might bother people who are checking in or making phone calls near the front desk.",
    "cn": "A：下週一國際來賓抵達參加會議時，我們應該在飯店大廳播放哪一種歌曲？ B：經理想要一種輕鬆的【音樂類型】，像是輕柔的爵士樂，因為大聲的歌曲可能會打擾到在櫃檯附近辦理入住或講電話的人。"
  },
  {
    "word": "blues",
    "pos": "n.",
    "cn_def": "藍調音樂",
    "en_def": "a slow, sad style of music that started in the southern US",
    "sentence": "A: Are you going to the new restaurant downtown with the sales team after work on Friday to celebrate the big contract? B: Yes, I am, and I heard a local band plays the {{BLANK}} there every weekend, so we can enjoy some slow, emotional songs while we have dinner together.",
    "cn": "A：你星期五下班後會和業務團隊一起去市中心那家新餐廳慶祝簽下大合約嗎？ B：會啊，我聽說每個週末都有一個當地樂團在那裡演奏【藍調音樂】，所以我們可以一邊一起吃晚餐，一邊欣賞一些緩慢而感人的歌曲。"
  },
  {
    "word": "classical music",
    "pos": "n.phr.",
    "cn_def": "古典音樂",
    "en_def": "serious, traditional music by composers like Mozart and Beethoven",
    "sentence": "A: What kind of background sound would help our staff concentrate better in the open office while they work on the annual reports? B: Many studies say that quiet {{BLANK}}, such as pieces by Mozart or Bach, can reduce stress and help employees focus for longer periods without getting tired.",
    "cn": "A：什麼樣的背景聲音能幫助我們的員工在開放式辦公室製作年度報告時更專心？ B：許多研究指出，安靜的【古典音樂】，例如莫札特或巴哈的作品，可以減輕壓力，並幫助員工在較長時間內專注而不感到疲倦。"
  },
  {
    "word": "pop music",
    "pos": "n.phr.",
    "cn_def": "流行音樂",
    "en_def": "modern popular music that many people, especially young people, like",
    "sentence": "A: Why did the marketing department choose that young singer for the new soft drink advertisement instead of a famous actor? B: Our research showed that most teenagers listen to {{BLANK}} every day on their phones, so a popular singer can help us reach more young customers quickly.",
    "cn": "A：行銷部門為什麼選擇那位年輕歌手拍新的汽水廣告，而不是找一位知名演員？ B：我們的調查顯示，大多數青少年每天都用手機聽【流行音樂】，所以一位受歡迎的歌手能幫助我們迅速接觸到更多年輕顧客。"
  },
  {
    "word": "rock music",
    "pos": "n.phr.",
    "cn_def": "搖滾樂",
    "en_def": "loud music with a strong beat, usually played with electric guitars",
    "sentence": "A: Could you ask the people in the apartment next to our office to turn down their speakers this afternoon? B: I already spoke to them, but they keep playing loud {{BLANK}} with heavy electric guitars, so I will call the building manager and make a formal complaint before our client meeting.",
    "cn": "A：你可以請我們辦公室隔壁公寓的人今天下午把喇叭音量調小嗎？ B：我已經跟他們說過了，但他們一直播放有沉重電吉他聲的大聲【搖滾樂】，所以我會在客戶會議之前打電話給大樓管理員正式投訴。"
  },
  {
    "word": "catchy tune",
    "pos": "n.phr.",
    "cn_def": "朗朗上口的曲調",
    "en_def": "a song or melody that is easy to remember",
    "sentence": "A: How did the new coffee shop chain become so well known in such a short time after it opened last spring? B: Their TV commercial has a {{BLANK}} that everyone remembers after hearing it only once, so customers often sing it while they wait in line for their drinks.",
    "cn": "A：那家新的連鎖咖啡店去年春天開幕後，怎麼能在這麼短的時間內變得如此有名？ B：他們的電視廣告有一段【朗朗上口的曲調】，大家只聽一次就記得，所以顧客常常在排隊等飲料時哼唱。"
  },
  {
    "word": "elevator music",
    "pos": "n.phr.",
    "cn_def": "電梯音樂；罐頭背景音樂",
    "en_def": "soft, boring music played in shops, lifts, or on the phone while you wait",
    "sentence": "A: Did you finally reach the airline's customer service center about your lost luggage this morning? B: Not yet, because I was put on hold for forty minutes and had to listen to the same boring {{BLANK}} again and again, so I gave up and sent them an email instead.",
    "cn": "A：你今天早上終於聯絡上航空公司的客服中心處理你遺失的行李了嗎？ B：還沒有，因為我被要求在線上等了四十分鐘，還得一遍又一遍地聽同樣無聊的【罐頭背景音樂】，所以我放棄了，改寄電子郵件給他們。"
  },
  {
    "word": "live music",
    "pos": "n.phr.",
    "cn_def": "現場音樂",
    "en_def": "music played by musicians in front of an audience, not recorded",
    "sentence": "A: What can we do to make the company's year-end party more exciting than last year's boring dinner at the hotel? B: Let's hire a small band to play {{BLANK}} during the meal, because employees usually enjoy dancing and singing along when real musicians perform on stage.",
    "cn": "A：我們可以做些什麼讓公司的尾牙比去年在飯店那場無聊的晚宴更精彩？ B：我們請一個小樂團在用餐時演奏【現場音樂】吧，因為當真正的音樂家在台上表演時，員工通常都很喜歡跟著跳舞唱歌。"
  },
  {
    "word": "opera",
    "pos": "n.",
    "cn_def": "歌劇",
    "en_def": "a play in which the words are sung, usually with an orchestra",
    "sentence": "A: What are you planning to do with the visiting clients from Italy on Saturday evening after the factory tour? B: I've booked expensive tickets for an {{BLANK}} at the national theater, because their director told me they love watching singers perform famous classic stories with a full orchestra.",
    "cn": "A：週六晚上工廠參觀結束後，你打算和來訪的義大利客戶做什麼？ B：我已經訂了國家戲劇院一場【歌劇】的昂貴門票，因為他們的總監告訴我，他們很喜歡欣賞歌手在完整管弦樂團伴奏下演出著名的經典故事。"
  },
  {
    "word": "tuneful",
    "pos": "adj.",
    "cn_def": "曲調優美的；悅耳的",
    "en_def": "having a pleasant melody that is nice to listen to",
    "sentence": "A: Have you chosen the background song for our new hotel advertisement yet, or are you still listening to the samples from the studio? B: I chose a soft and {{BLANK}} piece with a gentle piano melody, because it makes the beautiful rooms and the ocean view feel calm and relaxing.",
    "cn": "A：你已經選好我們新飯店廣告的背景歌曲了嗎？還是你還在聽錄音室給的樣本？ B：我選了一首帶有溫柔鋼琴旋律、輕柔又【悅耳的】曲子，因為它讓漂亮的房間和海景顯得平靜又放鬆。"
  },
  {
    "word": "concert",
    "pos": "n.",
    "cn_def": "音樂會；演唱會",
    "en_def": "a performance of music in front of an audience",
    "sentence": "A: Why is the parking lot next to our office building completely full this evening when it is usually empty after six? B: A famous band is giving a {{BLANK}} at the stadium across the street tonight, and thousands of fans arrived early to buy T-shirts and find good seats.",
    "cn": "A：為什麼我們辦公大樓旁的停車場今晚全滿，平常六點以後通常都是空的？ B：今晚有一個知名樂團在對街的體育館舉辦【演唱會】，數千名歌迷提早到場買T恤和找好位子。"
  },
  {
    "word": "record",
    "pos": "v.",
    "cn_def": "錄製；錄音",
    "en_def": "to store music or sound so that it can be played again later",
    "sentence": "A: Is the singer from the coffee commercial still working with our advertising agency on the new summer campaign? B: Yes, she's coming to the studio on Thursday morning to {{BLANK}} three short songs for the radio ads, and the sound engineer has already prepared all the equipment for her.",
    "cn": "A：那位咖啡廣告的歌手還在和我們的廣告公司合作新的夏季宣傳活動嗎？ B：是的，她星期四早上會來錄音室【錄製】三首電台廣告用的短歌，音響工程師已經幫她準備好所有設備了。"
  },
  {
    "word": "music festival",
    "pos": "n.phr.",
    "cn_def": "音樂節",
    "en_def": "a large event, often outdoors and lasting several days, where many bands perform",
    "sentence": "A: Why are all the hotels in the city fully booked next weekend when we need rooms for our sales conference? B: There's a huge {{BLANK}} in the park with more than fifty bands playing for three days, so thousands of visitors have reserved every room in town.",
    "cn": "A：為什麼我們下週末需要房間開業務會議時，城裡所有的飯店都客滿了？ B：公園裡有一場大型【音樂節】，五十多個樂團會連續演出三天，所以數千名遊客已經訂走了城裡所有的房間。"
  },
  {
    "word": "to face the music",
    "pos": "phr.",
    "cn_def": "承擔後果；接受批評",
    "en_def": "to accept criticism or punishment for something you did wrong",
    "sentence": "A: Did Kevin tell the director that he sent the wrong price list to our biggest customer last week? B: Not yet, but he knows he will have {{BLANK}} at tomorrow's meeting, so he is preparing a clear explanation and a plan to fix the problem quickly.",
    "cn": "A：Kevin告訴主管他上週把錯誤的價目表寄給我們最大的客戶了嗎？ B：還沒，但他知道他在明天的會議上得【承擔後果】，所以他正在準備清楚的說明以及迅速解決問題的計畫。"
  },
  {
    "word": "to sound like a broken record",
    "pos": "phr.",
    "cn_def": "一再重複同樣的話；老調重彈",
    "en_def": "to repeat the same thing again and again in an annoying way",
    "sentence": "A: Are you going to remind the team again about filling in their time sheets before Friday afternoon? B: I don't want {{BLANK}}, but many people forgot last month, and the accounting department couldn't pay everyone's salary on time because of the missing information.",
    "cn": "A：你又要提醒團隊在週五下午之前填好工時表嗎？ B：我不想【一再重複同樣的話】，但上個月很多人都忘了，會計部門因為缺少資料而無法準時發放大家的薪水。"
  },
  {
    "word": "to ring a bell",
    "pos": "phr.",
    "cn_def": "聽起來耳熟；令人想起",
    "en_def": "to sound familiar; to remind you of something",
    "sentence": "A: Do you remember a supplier called Green Leaf Packaging that contacted us about cheaper boxes last year? B: The name seems {{BLANK}}, so let me check my old emails and the meeting notes, because I think their sales manager visited our warehouse in March.",
    "cn": "A：你記得去年有一家叫綠葉包裝的供應商聯絡我們，談比較便宜的紙箱嗎？ B：這個名字好像【聽起來很耳熟】，讓我查一下我的舊郵件和會議紀錄，因為我想他們的業務經理三月時來過我們的倉庫。"
  },
  {
    "word": "a massive hit",
    "pos": "n.phr.",
    "cn_def": "大受歡迎的作品；超級熱門",
    "en_def": "something, like a song or product, that becomes extremely popular and successful",
    "sentence": "A: How are sales of the new wireless headphones going since we launched them in Japan and Korea last month? B: They have become {{BLANK}} with university students, and the stores in Tokyo already need another shipment because almost every shelf is empty.",
    "cn": "A：自從我們上個月在日本和韓國推出新款無線耳機以來，銷售情況如何？ B：它們在大學生之間成了【大受歡迎的熱門商品】，東京的門市因為幾乎每個貨架都空了，已經需要再補一批貨。"
  },
  {
    "word": "drum",
    "pos": "n.",
    "cn_def": "鼓",
    "en_def": "a musical instrument that you hit with sticks or your hands",
    "sentence": "A: What was that loud banging noise coming from the conference room during the lunch break today? B: The events team was testing a large {{BLANK}} for the opening ceremony of the new branch, and they wanted to make sure the sound was strong enough for the outdoor stage.",
    "cn": "A：今天午休時會議室傳出的那陣巨大的敲擊聲是什麼？ B：活動團隊在測試新分店開幕典禮要用的一面大【鼓】，他們想確定聲音夠大，適合戶外舞台。"
  },
  {
    "word": "guitar",
    "pos": "n.",
    "cn_def": "吉他",
    "en_def": "a musical instrument with six strings that you play with your fingers",
    "sentence": "A: What does your new manager like to do in his free time when he isn't busy with the monthly budget reports? B: He plays the {{BLANK}} in a small band with some old friends from university, and they sometimes perform at a café near the train station on Saturday nights.",
    "cn": "A：你的新經理在不忙每月預算報告時，空閒時間喜歡做什麼？ B：他和幾個大學老朋友組了一個小樂團，他在裡面彈【吉他】，他們有時週六晚上會在火車站附近的咖啡廳表演。"
  },
  {
    "word": "piano",
    "pos": "n.",
    "cn_def": "鋼琴",
    "en_def": "a large musical instrument with black and white keys",
    "sentence": "A: Why did the hotel move all the sofas out of the main lobby this morning before the wedding reception? B: They needed space for a big black {{BLANK}}, because the bride asked a famous musician to play soft songs while the guests are having drinks and taking photos.",
    "cn": "A：飯店今天早上為什麼在婚宴前把所有沙發都搬出大廳？ B：他們需要空間擺放一架黑色大【鋼琴】，因為新娘請了一位知名音樂家在賓客喝飲料和拍照時演奏輕柔的歌曲。"
  },
  {
    "word": "saxophone",
    "pos": "n.",
    "cn_def": "薩克斯風",
    "en_def": "a curved metal instrument that you blow into, often used in jazz",
    "sentence": "A: Who is the man playing jazz at the entrance of the shopping mall during the holiday sale this week? B: He's a professional musician that the mall hired to play the {{BLANK}} every afternoon, because the manager believes relaxing jazz encourages shoppers to stay longer and spend more.",
    "cn": "A：這週假日特賣期間在購物中心入口演奏爵士樂的男子是誰？ B：他是購物中心聘請來每天下午吹【薩克斯風】的專業音樂家，因為經理相信輕鬆的爵士樂能讓購物者停留更久、花更多錢。"
  },
  {
    "word": "violin",
    "pos": "n.",
    "cn_def": "小提琴",
    "en_def": "a small wooden instrument with four strings that you play with a bow",
    "sentence": "A: Why is your daughter carrying that small black case when she gets on the school bus every Tuesday morning? B: She takes {{BLANK}} lessons after school, and her teacher says that if she keeps practicing every day, she can join the city youth orchestra next year.",
    "cn": "A：為什麼你女兒每週二早上搭校車時都提著那個黑色小盒子？ B：她放學後要上【小提琴】課，她的老師說只要她每天持續練習，明年就能加入市立青少年管弦樂團。"
  }
];

const MCQS = [
  {
    "q": "Our radio station is adding a new evening program. Each week it will introduce listeners to a different _____, such as reggae or Latin jazz.",
    "options": [
      "music genre",
      "music festival",
      "elevator music",
      "a massive hit"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The jazz club downtown has a special night every Thursday. A local band sings slow, sad songs about hard times, which is typical of the _____.",
    "options": [
      "concert",
      "opera",
      "blues",
      "piano"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The hotel restaurant plays quiet _____ by Mozart and Beethoven during dinner. Guests say the elegant atmosphere makes the meal feel special.",
    "options": [
      "rock music",
      "classical music",
      "pop music",
      "elevator music"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new advertisement features a young singer who is famous on social media. Most of our target customers are teenagers who love chart-topping _____.",
    "options": [
      "elevator music",
      "classical music",
      "music genre",
      "pop music"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The band uses loud electric guitars and heavy drums in every song. Fans of _____ filled the stadium on Saturday night.",
    "options": [
      "classical music",
      "elevator music",
      "rock music",
      "music genre"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Customers remember our brand because of the jingle in our radio ad. It is a short _____ that people hum all day.",
    "options": [
      "catchy tune",
      "music genre",
      "music festival",
      "live music"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "I was on hold with the bank for thirty minutes. The whole time I had to listen to boring _____ that never changed.",
    "options": [
      "live music",
      "music festival",
      "a massive hit",
      "elevator music"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The restaurant hired a jazz trio to play on Friday nights. Since it started offering _____, the number of weekend customers has doubled.",
    "options": [
      "elevator music",
      "live music",
      "music genre",
      "a massive hit"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The visiting clients love classical singing and dramatic stories. We booked tickets for an _____ at the national theater on Saturday evening.",
    "options": [
      "opera",
      "concert",
      "piano",
      "guitar"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The composer wrote a soft and _____ melody for the hotel's new advertisement. Everyone who heard it said it was pleasant and easy to remember.",
    "options": [
      "punctual",
      "fragile",
      "tuneful",
      "spacious"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The famous band will give a _____ at the city stadium next month. Tickets went on sale this morning and sold out within an hour.",
    "options": [
      "opera",
      "concert",
      "blues",
      "violin"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The singer will come to our studio on Monday. She will _____ two songs for the company's new television commercial.",
    "options": [
      "inspect",
      "repair",
      "deliver",
      "record"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "More than fifty bands will perform in the park over three days. The _____ is expected to attract thousands of visitors to the city.",
    "options": [
      "music genre",
      "catchy tune",
      "music festival",
      "elevator music"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Kevin sent the wrong invoice to our biggest client. He knows he will have _____ when the director learns about the mistake.",
    "options": [
      "to face the music",
      "to ring a bell",
      "to sound like a broken record",
      "to break the ice"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "I hate _____, but please remember to submit your time sheets. Last month several people forgot, and payroll was delayed.",
    "options": [
      "to face the music",
      "to ring a bell",
      "to break the ice",
      "to sound like a broken record"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Does the name Green Leaf Packaging seem _____? I think their sales manager visited our office last spring and left a catalog.",
    "options": [
      "to face the music",
      "to ring a bell",
      "to break the ice",
      "to sound like a broken record"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Our new wireless headphones became _____ with university students. Stores in Tokyo sold out of them in just two weeks.",
    "options": [
      "a massive hit",
      "music genre",
      "catchy tune",
      "live music"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The events team tested a large _____ for the opening ceremony. Its deep, loud beat could be heard across the whole parking lot.",
    "options": [
      "violin",
      "guitar",
      "drum",
      "piano"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Our new manager plays the electric _____ in a rock band on weekends. He says performing on stage helps him relax after a busy week.",
    "options": [
      "opera",
      "guitar",
      "concert",
      "saxophone"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The hotel placed a black grand _____ in the lobby for the wedding reception. A famous musician played soft songs on it all evening.",
    "options": [
      "drum",
      "violin",
      "guitar",
      "piano"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The jazz musician at the mall entrance plays a shiny brass _____. Shoppers often stop to listen and take photos of him.",
    "options": [
      "violin",
      "piano",
      "saxophone",
      "guitar"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "My daughter practices the _____ with her bow for an hour every evening. She hopes to join the city youth orchestra next year.",
    "options": [
      "violin",
      "piano",
      "drum",
      "guitar"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The marching band walked down the main street during the festival. A young man at the front kept the beat on a large _____.",
    "options": [
      "violin",
      "piano",
      "opera",
      "drum"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "She learned to strum chords on her _____ by watching online videos. Now she plays and sings at the café near our office.",
    "options": [
      "piano",
      "guitar",
      "drum",
      "saxophone"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The musician placed her fingers on the black and white keys. The old _____ in the hotel lobby had just been tuned.",
    "options": [
      "piano",
      "violin",
      "guitar",
      "saxophone"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The orchestra needs one more string player for the holiday concert. The conductor is looking for someone who can play the _____ well.",
    "options": [
      "drum",
      "saxophone",
      "violin",
      "opera"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The orchestra will hold a charity _____ at City Hall on Friday night. All ticket money will go to the children's hospital.",
    "options": [
      "drum",
      "concert",
      "violin",
      "blues"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The singers at the _____ performed the whole story in Italian. The theater showed English subtitles above the stage for the audience.",
    "options": [
      "blues",
      "drum",
      "piano",
      "opera"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our CEO enjoys symphonies by Beethoven and Brahms. He often listens to _____ in his office while reading reports.",
    "options": [
      "rock music",
      "pop music",
      "classical music",
      "a massive hit"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The new bar near the station has a stage for local bands. It offers _____ every weekend, so it is always crowded on Saturdays.",
    "options": [
      "live music",
      "elevator music",
      "music genre",
      "a massive hit"
    ],
    "answer": 0,
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "music genre": {
    "pos": "n.phr.",
    "en_def": "a type or style of music",
    "cn_def": "音樂類型"
  },
  "blues": {
    "pos": "n.",
    "en_def": "a slow, sad style of music that started in the southern US",
    "cn_def": "藍調音樂"
  },
  "classical music": {
    "pos": "n.phr.",
    "en_def": "serious, traditional music by composers like Mozart and Beethoven",
    "cn_def": "古典音樂"
  },
  "pop music": {
    "pos": "n.phr.",
    "en_def": "modern popular music that many people, especially young people, like",
    "cn_def": "流行音樂"
  },
  "rock music": {
    "pos": "n.phr.",
    "en_def": "loud music with a strong beat, usually played with electric guitars",
    "cn_def": "搖滾樂"
  },
  "catchy tune": {
    "pos": "n.phr.",
    "en_def": "a song or melody that is easy to remember",
    "cn_def": "朗朗上口的曲調"
  },
  "elevator music": {
    "pos": "n.phr.",
    "en_def": "soft, boring music played in shops, lifts, or on the phone while you wait",
    "cn_def": "電梯音樂；罐頭背景音樂"
  },
  "live music": {
    "pos": "n.phr.",
    "en_def": "music played by musicians in front of an audience, not recorded",
    "cn_def": "現場音樂"
  },
  "opera": {
    "pos": "n.",
    "en_def": "a play in which the words are sung, usually with an orchestra",
    "cn_def": "歌劇"
  },
  "tuneful": {
    "pos": "adj.",
    "en_def": "having a pleasant melody that is nice to listen to",
    "cn_def": "曲調優美的；悅耳的"
  },
  "concert": {
    "pos": "n.",
    "en_def": "a performance of music in front of an audience",
    "cn_def": "音樂會；演唱會"
  },
  "record": {
    "pos": "v.",
    "en_def": "to store music or sound so that it can be played again later",
    "cn_def": "錄製；錄音"
  },
  "music festival": {
    "pos": "n.phr.",
    "en_def": "a large event, often outdoors and lasting several days, where many bands perform",
    "cn_def": "音樂節"
  },
  "to face the music": {
    "pos": "phr.",
    "en_def": "to accept criticism or punishment for something you did wrong",
    "cn_def": "承擔後果；接受批評"
  },
  "to sound like a broken record": {
    "pos": "phr.",
    "en_def": "to repeat the same thing again and again in an annoying way",
    "cn_def": "一再重複同樣的話；老調重彈"
  },
  "to ring a bell": {
    "pos": "phr.",
    "en_def": "to sound familiar; to remind you of something",
    "cn_def": "聽起來耳熟；令人想起"
  },
  "a massive hit": {
    "pos": "n.phr.",
    "en_def": "something, like a song or product, that becomes extremely popular and successful",
    "cn_def": "大受歡迎的作品；超級熱門"
  },
  "drum": {
    "pos": "n.",
    "en_def": "a musical instrument that you hit with sticks or your hands",
    "cn_def": "鼓"
  },
  "guitar": {
    "pos": "n.",
    "en_def": "a musical instrument with six strings that you play with your fingers",
    "cn_def": "吉他"
  },
  "piano": {
    "pos": "n.",
    "en_def": "a large musical instrument with black and white keys",
    "cn_def": "鋼琴"
  },
  "saxophone": {
    "pos": "n.",
    "en_def": "a curved metal instrument that you blow into, often used in jazz",
    "cn_def": "薩克斯風"
  },
  "violin": {
    "pos": "n.",
    "en_def": "a small wooden instrument with four strings that you play with a bow",
    "cn_def": "小提琴"
  }
};

const EXTRA_GLOSSES = {};
