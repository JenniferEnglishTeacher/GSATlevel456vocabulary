// Topic 295 Quiz Data: Pop Star 流行歌手
// Source word list: https://www.examword.com/group-topic/pop-star — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T295 - Pop Star 流行歌手",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "celebrity",
    "pos": "n.",
    "cn_def": "名人",
    "en_def": "a famous person, especially in entertainment",
    "sentence": "A: Why is there such a long line of reporters outside the hotel lobby this afternoon, and should we ask security to move them? B: A famous {{BLANK}} is checking in for the music awards tonight, so the manager asked us to keep the entrance clear and guide other guests through the side door.",
    "cn": "A：為什麼今天下午飯店大廳外有這麼長的記者隊伍？我們應該請保全把他們移開嗎？ B：一位知名的【名人】要入住準備參加今晚的音樂頒獎典禮，所以經理要求我們保持入口暢通，並引導其他客人從側門進出。"
  },
  {
    "word": "singer",
    "pos": "n.",
    "cn_def": "歌手",
    "en_def": "a person who sings, especially as a job",
    "sentence": "A: Have we confirmed who will perform at the company's year-end party, since the event planner needs the final program by Friday? B: Yes, we hired a local {{BLANK}} with a beautiful voice, and she will perform three songs after dinner while the staff enjoy dessert and coffee.",
    "cn": "A：我們確定誰要在公司尾牙表演了嗎？活動企劃星期五前需要最終節目表。 B：確定了，我們請了一位聲音很美的當地【歌手】，她會在晚餐後表演三首歌，讓員工享用甜點和咖啡。"
  },
  {
    "word": "performer",
    "pos": "n.",
    "cn_def": "表演者",
    "en_def": "someone who entertains an audience by singing, acting, or playing music",
    "sentence": "A: The opening ceremony for our new shopping mall starts at ten, but is the entertainment ready and are the speakers working properly? B: Everything is ready, and the main {{BLANK}} arrived early to test the microphones, so the crowd will see a great show right after the mayor's short speech.",
    "cn": "A：我們新購物中心的開幕典禮十點開始，娛樂節目準備好了嗎？喇叭運作正常嗎？ B：一切都準備好了，主要【表演者】提早到場測試麥克風，所以市長簡短致詞後，群眾馬上就能看到精彩的表演。"
  },
  {
    "word": "album",
    "pos": "n.",
    "cn_def": "專輯",
    "en_def": "a collection of songs released together",
    "sentence": "A: Why did the record store order so many extra boxes from the supplier this week, when sales were slow last month? B: A popular band is releasing its new {{BLANK}} on Saturday morning, and the owner expects hundreds of customers to line up early to buy signed copies.",
    "cn": "A：為什麼唱片行這週向供應商多訂了這麼多箱貨，明明上個月銷量很差？ B：一個受歡迎的樂團星期六早上要發行新【專輯】，老闆預期會有好幾百位顧客一早排隊購買簽名版。"
  },
  {
    "word": "single",
    "pos": "n.",
    "cn_def": "單曲",
    "en_def": "one song that is sold or released on its own",
    "sentence": "A: Why are the radio station's phone lines so busy this morning, and is something wrong with our call system? B: Nothing is wrong; the station just played a famous singer's new {{BLANK}} for the first time, and hundreds of listeners are calling to request that the song be played again.",
    "cn": "A：為什麼今天早上電台的電話線這麼忙？我們的電話系統出問題了嗎？ B：沒有問題，電台剛剛首次播放了一位知名歌手的新【單曲】，好幾百位聽眾打電話來要求再播一次這首歌。"
  },
  {
    "word": "concert",
    "pos": "n.",
    "cn_def": "演唱會；音樂會",
    "en_def": "a public music performance",
    "sentence": "A: Why are all the hotel rooms near the stadium fully booked this weekend, even though it isn't a holiday? B: A famous pop group is holding a big outdoor {{BLANK}} there on Saturday night, so thousands of fans are traveling from other cities to watch the show.",
    "cn": "A：為什麼這週末體育場附近的飯店房間全被訂滿了，明明又不是假日？ B：一個知名的流行團體星期六晚上要在那裡舉辦大型戶外【演唱會】，所以成千上萬的歌迷從其他城市前來觀看表演。"
  },
  {
    "word": "tour",
    "pos": "n.",
    "cn_def": "巡迴演出",
    "en_def": "a series of performances in different places",
    "sentence": "A: Why does the band need so many trucks and extra staff this year, since last year's budget was much smaller? B: They are starting a world {{BLANK}} next month with shows in twenty cities across Asia and Europe, so they need more equipment, drivers, and technicians to move everything safely.",
    "cn": "A：為什麼這個樂團今年需要這麼多卡車和額外人員？去年的預算少很多。 B：他們下個月要開始世界【巡迴演出】，在亞洲和歐洲的二十個城市演出，所以需要更多設備、司機和技術人員來安全地搬運所有東西。"
  },
  {
    "word": "stage",
    "pos": "n.",
    "cn_def": "舞台",
    "en_def": "the raised area where performers stand",
    "sentence": "A: The workers have been hammering in the town square since early morning, so what exactly are they building for this weekend's festival? B: They are building a large wooden {{BLANK}} where the bands will perform, and they also need to add lights and speakers before the sound check on Friday.",
    "cn": "A：工人從一大早就在市鎮廣場敲敲打打，他們到底在為這週末的節慶搭建什麼？ B：他們在搭一個大型木造【舞台】讓樂團在上面表演，而且星期五試音之前還要裝上燈光和喇叭。"
  },
  {
    "word": "fan",
    "pos": "n.",
    "cn_def": "粉絲；歌迷",
    "en_def": "a person who strongly likes a famous person or team",
    "sentence": "A: Why did your assistant ask for Friday afternoon off, when we have such an important meeting with the clients that day? B: She is a huge {{BLANK}} of that Korean singer and finally got a concert ticket, so I agreed after she promised to finish the sales report by Thursday.",
    "cn": "A：你的助理為什麼星期五下午要請假？那天我們跟客戶有很重要的會議。 B：她是那位韓國歌手的超級【粉絲】，終於搶到了演唱會門票，她答應星期四前完成銷售報告後我就同意了。"
  },
  {
    "word": "fame",
    "pos": "n.",
    "cn_def": "名氣；名聲",
    "en_def": "the state of being known by many people",
    "sentence": "A: That young actor seems so tired and unhappy in his recent interviews, even though his new movie is a big success, doesn't he? B: Yes, sudden {{BLANK}} can be stressful, because photographers follow him everywhere and he no longer has any privacy when he goes shopping or eats out.",
    "cn": "A：那位年輕演員最近的訪談看起來好累又不開心，雖然他的新電影大獲成功，不是嗎？ B：是啊，突如其來的【名氣】會帶來壓力，因為攝影師到處跟著他，他去購物或外出吃飯時都不再有任何隱私。"
  },
  {
    "word": "spotlight",
    "pos": "n.",
    "cn_def": "焦點；聚光燈",
    "en_def": "public attention; also a strong light on a stage",
    "sentence": "A: Why has our small coffee shop suddenly become so busy, with customers waiting outside even on weekday mornings? B: A famous singer posted a photo of our cakes online last week, so we are in the {{BLANK}} now, and many of her fans want to visit and try the same dessert.",
    "cn": "A：為什麼我們的小咖啡店突然變得這麼忙，連平日早上都有顧客在外面等？ B：上週一位知名歌手在網路上發了我們蛋糕的照片，所以我們現在成了【焦點】，很多她的粉絲都想來店裡嘗嘗同樣的甜點。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天分；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Why did the music company sign a contract with a high school student who has never performed in public before? B: The producers heard her sing at a small café and believed she had real {{BLANK}}, so they decided to train her for two years before her first concert.",
    "cn": "A：為什麼唱片公司要跟一位從來沒公開表演過的高中生簽約？ B：製作人在一家小咖啡館聽到她唱歌，相信她真的很有【天分】，所以決定在她首場演唱會前先訓練她兩年。"
  },
  {
    "word": "vocal",
    "pos": "adj.",
    "cn_def": "聲音的；聲樂的",
    "en_def": "relating to the voice or singing",
    "sentence": "A: Why does the lead singer spend an hour every morning with that teacher before the band's practice begins? B: She takes {{BLANK}} lessons to protect her voice during the long tour, because singing for two hours every night can easily damage her throat if she is not careful.",
    "cn": "A：為什麼主唱每天早上在樂團練習前，都要和那位老師待一個小時？ B：她在上【聲樂】課來保護嗓子，因為長期巡演期間每晚唱兩小時，如果不小心很容易傷到喉嚨。"
  },
  {
    "word": "dance",
    "pos": "v.",
    "cn_def": "跳舞",
    "en_def": "to move your body to music",
    "sentence": "A: The office party is on Friday night, but do you know what activities the event team has planned after the dinner? B: They hired a DJ who will play popular songs, so everyone can {{BLANK}} together in the hall, and there will also be a lucky draw with some great prizes.",
    "cn": "A：公司派對在星期五晚上，你知道活動小組晚餐後安排了什麼活動嗎？ B：他們請了一位DJ播放流行歌曲，所以大家可以在大廳一起【跳舞】，另外還有抽獎活動，有一些很棒的獎品。"
  },
  {
    "word": "choreography",
    "pos": "n.",
    "cn_def": "編舞",
    "en_def": "the planned steps and movements of a dance",
    "sentence": "A: Why has the girl group been practicing in the studio until midnight every day this week, even after their singing lessons? B: Their new song has very difficult {{BLANK}}, with fast and complicated moves, so the dancers must repeat every step many times before the music video is filmed.",
    "cn": "A：為什麼那個女子團體這週每天都在練習室練到半夜，連歌唱課結束後也是？ B：她們新歌的【編舞】非常困難，動作又快又複雜，所以在拍攝音樂錄影帶之前，舞者必須把每個步驟重複練習很多次。"
  },
  {
    "word": "hit",
    "pos": "n.",
    "cn_def": "熱門歌曲；成功作品",
    "en_def": "a very successful song, movie, etc.",
    "sentence": "A: Why does that old song from the nineties suddenly play in every shop and café I visit downtown these days? B: It was used in a popular TV drama last month, so it became a {{BLANK}} again, and young people are now downloading it and sharing it on social media.",
    "cn": "A：為什麼這陣子我去市中心的每家商店和咖啡館，都會突然播那首九〇年代的老歌？ B：上個月它被一部熱門電視劇採用，所以又成了【熱門歌曲】，現在年輕人都在下載並在社群媒體上分享。"
  },
  {
    "word": "chart",
    "pos": "n.",
    "cn_def": "排行榜",
    "en_def": "a weekly list of the most popular songs",
    "sentence": "A: Why is everyone at the record company celebrating with cake and drinks in the meeting room this afternoon? B: Our new singer's first song reached number one on the national music {{BLANK}} this week, so the boss wanted to thank the whole team for their hard work on the promotion.",
    "cn": "A：為什麼唱片公司的大家今天下午都在會議室吃蛋糕、喝飲料慶祝？ B：我們新歌手的第一首歌這週登上全國音樂【排行榜】第一名，所以老闆想感謝全體同仁在宣傳上的辛勞。"
  },
  {
    "word": "award",
    "pos": "n.",
    "cn_def": "獎項",
    "en_def": "a prize given for an achievement",
    "sentence": "A: Why is the singer's manager so busy booking flights and hotel rooms for the whole team next month? B: The singer has been invited to receive an {{BLANK}} for best new artist at a ceremony in Tokyo, so the manager wants the dancers and band to travel with her.",
    "cn": "A：為什麼那位歌手的經紀人下個月要這麼忙著幫整個團隊訂機票和飯店？ B：那位歌手受邀到東京的頒獎典禮領取最佳新人【獎】，所以經紀人希望舞者和樂團都跟她一起去。"
  },
  {
    "word": "record",
    "pos": "v.",
    "cn_def": "錄製",
    "en_def": "to put music or sound onto a disc or file so it can be played later",
    "sentence": "A: Why has the singer cancelled all of her interviews and public events for the next three weeks? B: She needs to {{BLANK}} twelve new songs in the studio before the album deadline, so her manager asked the media team to postpone everything until the work is finished.",
    "cn": "A：為什麼那位歌手取消了接下來三週所有的訪談和公開活動？ B：她必須在專輯截止日前在錄音室【錄製】十二首新歌，所以經紀人請媒體團隊把所有活動延到工作完成之後。"
  },
  {
    "word": "studio",
    "pos": "n.",
    "cn_def": "錄音室；工作室",
    "en_def": "a room where music is recorded",
    "sentence": "A: Why is the band renting a quiet place in the mountains instead of working at their usual office in the city? B: They found a recording {{BLANK}} with excellent equipment far from the traffic noise, so they can focus on writing and producing their new songs without any distractions.",
    "cn": "A：為什麼樂團要在山上租一個安靜的地方，而不是在城裡平常的辦公室工作？ B：他們找到一間遠離車流噪音、設備很棒的錄音【室】，這樣就能專心創作和製作新歌，不受任何干擾。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經紀人；經理",
    "en_def": "a person who handles the business affairs of a performer",
    "sentence": "A: Who should I contact if our company wants to invite that famous singer to perform at our product launch in May? B: You should email her {{BLANK}}, because he handles all her schedules, fees, and contracts, and he usually replies within two working days with a price quote.",
    "cn": "A：如果我們公司想邀請那位知名歌手在五月的產品發表會上表演，我應該聯絡誰？ B：你應該寫電子郵件給她的【經紀人】，因為他負責她所有的行程、酬勞和合約，通常會在兩個工作天內回覆報價。"
  },
  {
    "word": "agent",
    "pos": "n.",
    "cn_def": "經紀人；代理人",
    "en_def": "a person whose job is to find work and make deals for performers",
    "sentence": "A: How did that unknown actor get a role in such a big international movie only a year after leaving drama school? B: His {{BLANK}} sent his videos to many film companies and arranged several auditions, and one director liked his performance so much that he offered him the part immediately.",
    "cn": "A：那位沒沒無聞的演員才從戲劇學校畢業一年，怎麼就拿到這麼大的國際電影角色？ B：他的【經紀人】把他的影片寄給很多電影公司，還安排了好幾次試鏡，有一位導演非常喜歡他的表演，立刻就給了他這個角色。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a product name made by a particular company",
    "sentence": "A: Why did the marketing department pay so much money to that pop star for just one short advertisement? B: Our {{BLANK}} wants to attract more young customers, and her fans usually buy whatever she wears, so the managers believe her video will greatly increase our sales this year.",
    "cn": "A：為什麼行銷部門只為了一支短廣告就付給那位流行歌星這麼多錢？ B：我們的【品牌】想吸引更多年輕顧客，而她的粉絲通常會買她穿的任何東西，所以主管們相信她的影片會大幅提升我們今年的銷售。"
  },
  {
    "word": "trendy",
    "pos": "adj.",
    "cn_def": "時髦的；流行的",
    "en_def": "very fashionable and modern",
    "sentence": "A: Why are so many young customers coming to the new restaurant on the corner, even though the prices are quite high? B: It has a very {{BLANK}} design with bright lights and modern furniture, and several famous singers have posted photos there, so people want to take pictures too.",
    "cn": "A：為什麼轉角那家新餐廳有這麼多年輕顧客，雖然價格相當高？ B：它的設計非常【時髦】，有明亮的燈光和現代家具，而且好幾位知名歌手在那裡發過照片，所以大家也想去拍照。"
  },
  {
    "word": "charismatic",
    "pos": "adj.",
    "cn_def": "有魅力的",
    "en_def": "having a strong personal charm that attracts people",
    "sentence": "A: Why do you think so many people stayed until the end of the long press conference yesterday afternoon? B: The singer was so {{BLANK}} and funny that everyone enjoyed listening to her, and she answered every question with a warm smile, so nobody wanted to leave early.",
    "cn": "A：你覺得為什麼昨天下午冗長的記者會有這麼多人留到最後？ B：那位歌手非常【有魅力】又風趣，大家都很喜歡聽她說話，而且她每個問題都帶著溫暖的微笑回答，所以沒有人想提早離開。"
  },
  {
    "word": "influence",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to have an effect on what people think or do",
    "sentence": "A: Why does the cosmetics company want to work with famous singers instead of using ordinary models in its advertisements? B: Pop stars can strongly {{BLANK}} what young people buy, because millions of fans copy their style, so a single post from them may sell thousands of products.",
    "cn": "A：為什麼那家化妝品公司想和知名歌手合作，而不是在廣告中使用一般模特兒？ B：流行歌星能強烈【影響】年輕人的購買行為，因為數百萬粉絲會模仿他們的風格，所以他們的一則貼文就可能賣出好幾千件商品。"
  },
  {
    "word": "follow",
    "pos": "v.",
    "cn_def": "追蹤；關注",
    "en_def": "to choose to see someone's posts on social media",
    "sentence": "A: How do you always know about the singer's concert dates before the tickets are even announced on the official website? B: I {{BLANK}} her on social media, and she often shares news about her tour with fans first, so I can plan my vacation days and book cheap flights early.",
    "cn": "A：你怎麼總是在官網公布門票之前就知道那位歌手的演唱會日期？ B：我在社群媒體上【追蹤】她，她常常先跟粉絲分享巡演消息，所以我可以提早安排休假並訂便宜的機票。"
  },
  {
    "word": "headline",
    "pos": "v.",
    "cn_def": "擔任主秀；壓軸演出",
    "en_def": "to be the main performer at a show or festival",
    "sentence": "A: Why did the festival tickets sell out so quickly this year, when last year we still had seats on the final day? B: The organizers announced that a world-famous rock band would {{BLANK}} the event on Saturday night, so music lovers from all over the country rushed to buy tickets.",
    "cn": "A：為什麼今年的音樂節門票賣得這麼快？去年直到最後一天都還有位子。 B：主辦單位宣布一個世界知名的搖滾樂團將在星期六晚上【擔任主秀】，所以全國各地的音樂愛好者都搶著買票。"
  },
  {
    "word": "idol",
    "pos": "n.",
    "cn_def": "偶像",
    "en_def": "a famous person who is greatly loved and admired",
    "sentence": "A: Why is your daughter so excited, and why does she want to leave work early to go to the airport this evening? B: Her {{BLANK}}, a famous K-pop singer, is arriving in Taipei tonight, and she wants to wait at the arrival gate with her friends to welcome him.",
    "cn": "A：你女兒為什麼這麼興奮？為什麼她今晚想提早下班去機場？ B：她的【偶像】，一位知名的韓國流行歌手，今晚抵達台北，她想和朋友在入境大廳等著迎接他。"
  },
  {
    "word": "publicity",
    "pos": "n.",
    "cn_def": "宣傳；曝光",
    "en_def": "public attention given to someone or something by the media",
    "sentence": "A: Why did the concert organizers invite so many journalists and online influencers to the rehearsal yesterday afternoon? B: They wanted to create more {{BLANK}} for the show before tickets go on sale next week, so they hoped the reporters would write good articles and share exciting videos.",
    "cn": "A：為什麼演唱會主辦單位昨天下午邀請這麼多記者和網紅來看彩排？ B：他們想在下週開賣門票之前為演出製造更多【宣傳】，所以希望記者寫出好文章並分享令人興奮的影片。"
  },
  {
    "word": "rehearse",
    "pos": "v.",
    "cn_def": "排練",
    "en_def": "to practice a performance before the real show",
    "sentence": "A: Why is the main hall locked all afternoon when we usually hold our staff training sessions there on Thursdays? B: The singers and dancers need to {{BLANK}} for tomorrow's charity concert, so the events team moved our training to the small meeting room on the third floor.",
    "cn": "A：為什麼主廳整個下午都鎖著？我們通常每週四都在那裡舉辦員工訓練。 B：歌手和舞者需要為明天的慈善演唱會【排練】，所以活動小組把我們的訓練移到三樓的小會議室了。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with someone to create something",
    "sentence": "A: I heard that the American rapper and the Taiwanese pop singer are releasing a song together, but how did that happen? B: Their companies agreed to let them {{BLANK}} on one special project, so they wrote the lyrics online and then met in Los Angeles to record it.",
    "cn": "A：我聽說那位美國饒舌歌手和台灣流行歌手要一起發行一首歌，這是怎麼促成的？ B：他們的公司同意讓兩人在一個特別企劃上【合作】，所以他們先在網路上寫歌詞，然後在洛杉磯碰面錄製。"
  },
  {
    "word": "autograph",
    "pos": "n.",
    "cn_def": "親筆簽名",
    "en_def": "a famous person's signature written for a fan",
    "sentence": "A: Why were so many people waiting at the bookstore entrance before it opened at nine this morning? B: A famous singer was coming to sign copies of her new photo book, and fans wanted to get her {{BLANK}} and take a quick picture with her before she left.",
    "cn": "A：為什麼今天早上書店九點開門前就有這麼多人在入口等？ B：一位知名歌手要來為她的新寫真書簽名，粉絲們想在她離開前拿到她的【親筆簽名】，並和她快速合照。"
  },
  {
    "word": "glamorous",
    "pos": "adj.",
    "cn_def": "光鮮亮麗的",
    "en_def": "attractive, exciting, and connected with wealth or fame",
    "sentence": "A: Do you think working as a pop star's assistant would be exciting, since you get to travel to so many cities? B: It looks {{BLANK}} on social media, but the real job means long hours, late flights, and very little sleep, so many assistants quit after only a few months.",
    "cn": "A：你覺得當流行歌星的助理會很刺激嗎？因為可以到很多城市旅行。 B：在社群媒體上看起來很【光鮮亮麗】，但實際工作要長時間工作、搭晚班飛機、睡眠很少，所以很多助理只做了幾個月就離職了。"
  }
];

const MCQS = [
  {
    "q": "The hotel staff were told to protect the privacy of every _____ staying on the top floor. Photographers were not allowed inside the lobby.",
    "options": [
      "celebrity",
      "album",
      "chart",
      "studio"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Each _____ at the charity show will receive a free meal and a parking pass. The organizers are thanking them for donating their time.",
    "options": [
      "album",
      "award",
      "performer",
      "chart"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The band's latest _____ contains twelve songs and a bonus track. It will be available in stores and online from next Monday.",
    "options": [
      "stage",
      "album",
      "agent",
      "spotlight"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The singer released her first _____ last Friday before the full album comes out. The song has already been streamed two million times.",
    "options": [
      "concert",
      "studio",
      "autograph",
      "single"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Tickets for the outdoor _____ sold out within ten minutes of going on sale. Extra buses will run to the stadium that night.",
    "options": [
      "album",
      "idol",
      "concert",
      "manager"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The band will begin a twelve-city _____ across Europe next spring. Tickets for each show will go on sale on the official website.",
    "options": [
      "tour",
      "chart",
      "studio",
      "autograph"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The lights went down and the singer walked onto the _____ to loud cheers. She opened the show with her most famous song.",
    "options": [
      "chart",
      "fame",
      "publicity",
      "stage"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Every loyal _____ who buys the deluxe album will receive a signed poster. The offer is valid only until the end of this month.",
    "options": [
      "studio",
      "fan",
      "chart",
      "award"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The young actor found _____ after appearing in a popular TV drama last year. Now he cannot walk downtown without being recognized.",
    "options": [
      "fame",
      "choreography",
      "studio",
      "album"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "After winning the contest, the shy student was suddenly in the _____ of the national media. Reporters called her school every day.",
    "options": [
      "album",
      "autograph",
      "spotlight",
      "studio"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The music school offers free lessons to children who show great _____ but cannot afford the fees. Many graduates now work as professional musicians.",
    "options": [
      "publicity",
      "talent",
      "studio",
      "chart"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The singer canceled two shows to rest her voice after suffering a _____ injury. Her doctor advised her not to sing for two weeks.",
    "options": [
      "trendy",
      "glamorous",
      "charismatic",
      "vocal"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The dancers spent three weeks learning the complex _____ for the new music video. Every movement had to match the beat perfectly.",
    "options": [
      "publicity",
      "autograph",
      "choreography",
      "fame"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The song became a huge _____ and was played on radio stations around the world. It earned the songwriter millions of dollars.",
    "options": [
      "hit",
      "agent",
      "studio",
      "idol"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Her new song climbed to the top of the music _____ in only one week. Radio stations now play it several times a day.",
    "options": [
      "autograph",
      "agent",
      "talent",
      "chart"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The singer thanked her family when she received the _____ for Best Female Artist. The ceremony was broadcast live on national television.",
    "options": [
      "tour",
      "award",
      "studio",
      "fan"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The band plans to _____ their next album in a studio in London. The sessions will begin as soon as the songs are finished.",
    "options": [
      "record",
      "headline",
      "collaborate",
      "influence"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The producer booked the recording _____ for three full days next week. The band hopes to finish all twelve songs there.",
    "options": [
      "chart",
      "award",
      "studio",
      "idol"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Please send all business inquiries to the singer's _____ rather than to the singer directly. He handles her schedule and contracts.",
    "options": [
      "fan",
      "manager",
      "album",
      "spotlight"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The actor's _____ negotiated a better contract for him with the film company. She also found him two new advertising jobs.",
    "options": [
      "fan",
      "idol",
      "autograph",
      "agent"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The new café downtown is popular with young people because of its _____ design and colorful drinks. It is always busy on weekends.",
    "options": [
      "vocal",
      "charismatic",
      "trendy",
      "nervous"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The singer is so _____ that people feel drawn to her the moment she walks into a room. Her personal charm is famous.",
    "options": [
      "charismatic",
      "vocal",
      "empty",
      "delayed"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Popular singers can _____ the fashion choices of millions of young fans. Brands therefore pay them large amounts to wear their clothes.",
    "options": [
      "rehearse",
      "record",
      "headline",
      "influence"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The famous rock band will _____ the music festival on its final night. Smaller local groups will perform earlier in the afternoon.",
    "options": [
      "record",
      "headline",
      "collaborate",
      "rehearse"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The teenager waited six hours at the airport just to see her _____ arrive from Seoul. She held a large sign with his name.",
    "options": [
      "idol",
      "album",
      "studio",
      "chart"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The movie star's surprise visit to the hospital attracted a lot of _____ in the newspapers. The charity received many new donations afterward.",
    "options": [
      "choreography",
      "autograph",
      "publicity",
      "studio"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The orchestra will _____ in the main hall every evening this week before Saturday's concert. The hall is closed to visitors until then.",
    "options": [
      "headline",
      "rehearse",
      "influence",
      "follow"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The two singers decided to _____ on a song to raise money for flood victims. They will perform it together at the charity event.",
    "options": [
      "headline",
      "follow",
      "influence",
      "collaborate"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "After the concert, fans lined up to get the singer's _____ on their posters and CDs. She signed for almost two hours.",
    "options": [
      "chart",
      "studio",
      "autograph",
      "talent"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The magazine shows only the _____ side of celebrity life, with parties and designer clothes. It rarely mentions the long working hours.",
    "options": [
      "glamorous",
      "vocal",
      "empty",
      "careless"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "celebrity": {
    "pos": "n.",
    "en_def": "a famous person, especially in entertainment",
    "cn_def": "名人"
  },
  "singer": {
    "pos": "n.",
    "en_def": "a person who sings, especially as a job",
    "cn_def": "歌手"
  },
  "performer": {
    "pos": "n.",
    "en_def": "someone who entertains an audience by singing, acting, or playing music",
    "cn_def": "表演者"
  },
  "album": {
    "pos": "n.",
    "en_def": "a collection of songs released together",
    "cn_def": "專輯"
  },
  "single": {
    "pos": "n.",
    "en_def": "one song that is sold or released on its own",
    "cn_def": "單曲"
  },
  "concert": {
    "pos": "n.",
    "en_def": "a public music performance",
    "cn_def": "演唱會；音樂會"
  },
  "tour": {
    "pos": "n.",
    "en_def": "a series of performances in different places",
    "cn_def": "巡迴演出"
  },
  "stage": {
    "pos": "n.",
    "en_def": "the raised area where performers stand",
    "cn_def": "舞台"
  },
  "fan": {
    "pos": "n.",
    "en_def": "a person who strongly likes a famous person or team",
    "cn_def": "粉絲；歌迷"
  },
  "fame": {
    "pos": "n.",
    "en_def": "the state of being known by many people",
    "cn_def": "名氣；名聲"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "public attention; also a strong light on a stage",
    "cn_def": "焦點；聚光燈"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天分；才能"
  },
  "vocal": {
    "pos": "adj.",
    "en_def": "relating to the voice or singing",
    "cn_def": "聲音的；聲樂的"
  },
  "dance": {
    "pos": "v.",
    "en_def": "to move your body to music",
    "cn_def": "跳舞"
  },
  "choreography": {
    "pos": "n.",
    "en_def": "the planned steps and movements of a dance",
    "cn_def": "編舞"
  },
  "hit": {
    "pos": "n.",
    "en_def": "a very successful song, movie, etc.",
    "cn_def": "熱門歌曲；成功作品"
  },
  "chart": {
    "pos": "n.",
    "en_def": "a weekly list of the most popular songs",
    "cn_def": "排行榜"
  },
  "award": {
    "pos": "n.",
    "en_def": "a prize given for an achievement",
    "cn_def": "獎項"
  },
  "record": {
    "pos": "v.",
    "en_def": "to put music or sound onto a disc or file so it can be played later",
    "cn_def": "錄製"
  },
  "studio": {
    "pos": "n.",
    "en_def": "a room where music is recorded",
    "cn_def": "錄音室；工作室"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person who handles the business affairs of a performer",
    "cn_def": "經紀人；經理"
  },
  "agent": {
    "pos": "n.",
    "en_def": "a person whose job is to find work and make deals for performers",
    "cn_def": "經紀人；代理人"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  },
  "trendy": {
    "pos": "adj.",
    "en_def": "very fashionable and modern",
    "cn_def": "時髦的；流行的"
  },
  "charismatic": {
    "pos": "adj.",
    "en_def": "having a strong personal charm that attracts people",
    "cn_def": "有魅力的"
  },
  "influence": {
    "pos": "v.",
    "en_def": "to have an effect on what people think or do",
    "cn_def": "影響"
  },
  "follow": {
    "pos": "v.",
    "en_def": "to choose to see someone's posts on social media",
    "cn_def": "追蹤；關注"
  },
  "headline": {
    "pos": "v.",
    "en_def": "to be the main performer at a show or festival",
    "cn_def": "擔任主秀；壓軸演出"
  },
  "idol": {
    "pos": "n.",
    "en_def": "a famous person who is greatly loved and admired",
    "cn_def": "偶像"
  },
  "publicity": {
    "pos": "n.",
    "en_def": "public attention given to someone or something by the media",
    "cn_def": "宣傳；曝光"
  },
  "rehearse": {
    "pos": "v.",
    "en_def": "to practice a performance before the real show",
    "cn_def": "排練"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with someone to create something",
    "cn_def": "合作"
  },
  "autograph": {
    "pos": "n.",
    "en_def": "a famous person's signature written for a fan",
    "cn_def": "親筆簽名"
  },
  "glamorous": {
    "pos": "adj.",
    "en_def": "attractive, exciting, and connected with wealth or fame",
    "cn_def": "光鮮亮麗的"
  }
};

const EXTRA_GLOSSES = {};
