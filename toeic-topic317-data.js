// Topic 317 Quiz Data: Quiet Place 安靜的地方
// Source word list: https://www.examword.com/group-topic/quiet-place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T317 - Quiet Place 安靜的地方",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "silent",
    "pos": "adj.",
    "cn_def": "安靜的；沉默的",
    "en_def": "making no sound; not speaking",
    "sentence": "A: The training session starts in five minutes, so should I remind everyone in the hall to switch their phones off before the speaker begins? B: Yes, please ask them to put their phones on {{BLANK}} mode, because the speaker hates being interrupted by ringing in the middle of her talk.",
    "cn": "A：訓練課程五分鐘後就要開始了，我要不要在講者開始前提醒大廳裡的每個人把手機關掉？ B：好，請請他們把手機調成【靜音】模式，因為講者很討厭演講到一半被鈴聲打斷。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平和的",
    "en_def": "quiet and calm, without noise or trouble",
    "sentence": "A: Our sales team has been working long hours all month, so where do you think we should hold the weekend staff trip this year? B: I suggest the small lakeside hotel outside the city, because it is a {{BLANK}} area far from traffic where people can finally rest and talk.",
    "cn": "A：我們的業務團隊這整個月都工作很長的時間，你覺得今年的週末員工旅遊應該辦在哪裡？ B：我建議城外那家湖邊的小飯店，因為那是個遠離車流的【寧靜】地區，大家終於可以休息和聊天。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "平靜的；冷靜的",
    "en_def": "quiet and relaxed, not worried or excited",
    "sentence": "A: The client was shouting on the phone about the late shipment this morning, so how did you manage to handle the situation so well? B: I stayed {{BLANK}}, listened to all of his complaints without interrupting, and then promised him a full refund on the delivery charge.",
    "cn": "A：今天早上客戶在電話裡為了延遲出貨大吼，你是怎麼把情況處理得這麼好的？ B：我保持【冷靜】，沒有打斷地聽完他所有的抱怨，然後答應全額退還他運費。"
  },
  {
    "word": "tranquil",
    "pos": "adj.",
    "cn_def": "寧靜的；安寧的",
    "en_def": "very calm and peaceful",
    "sentence": "A: The guests from our Tokyo office said they wanted somewhere relaxing for dinner after the long meeting, so which restaurant did you book? B: I reserved a table at the Japanese garden restaurant downtown, because its {{BLANK}} atmosphere with soft music and a small pond is perfect after a stressful day.",
    "cn": "A：東京辦公室來的客人說長時間開會後想找個放鬆的地方吃晚餐，你訂了哪家餐廳？ B：我訂了市中心那家日式庭園餐廳，因為它有輕柔音樂和小池塘的【寧靜】氣氛，非常適合在壓力很大的一天之後去。"
  },
  {
    "word": "serene",
    "pos": "adj.",
    "cn_def": "安詳的；寧靜的",
    "en_def": "calm, peaceful and untroubled",
    "sentence": "A: Have you seen the photos from the new mountain resort that our travel agency is going to promote to customers next season? B: Yes, the pictures of the lake at sunrise look so {{BLANK}} that I think busy office workers from the city will want to book a weekend there immediately.",
    "cn": "A：你看過我們旅行社下一季要向顧客推廣的新山區度假村的照片了嗎？ B：看過了，湖面日出的照片看起來好【安詳寧靜】，我想城市裡忙碌的上班族會馬上想訂那裡的週末行程。"
  },
  {
    "word": "still",
    "pos": "adj.",
    "cn_def": "靜止的；平靜的",
    "en_def": "not moving; calm and quiet",
    "sentence": "A: The photographer for our new hotel brochure wants to take pictures of the swimming pool, so what time should I tell him to come tomorrow? B: Tell him to arrive early in the morning before the guests wake up, when the water is completely {{BLANK}} and the reflection of the building looks beautiful.",
    "cn": "A：幫我們新飯店手冊拍照的攝影師想拍游泳池，我該叫他明天幾點來？ B：叫他一早在客人起床前到，那時池水完全【靜止】，建築物的倒影看起來很漂亮。"
  },
  {
    "word": "secluded",
    "pos": "adj.",
    "cn_def": "僻靜的；隱蔽的",
    "en_def": "quiet and hidden away from other people",
    "sentence": "A: The CEO wants to plan next year's company strategy with the managers without any distractions, so did you find a good place for the meeting? B: I found a {{BLANK}} villa in the hills about two hours from the city, where there is no traffic noise and no one will disturb the managers.",
    "cn": "A：執行長想和經理們在沒有任何干擾的情況下規劃明年的公司策略，你找到適合開會的地方了嗎？ B：我找到一棟離市區大約兩小時、位在山上的【僻靜】別墅，那裡沒有車流噪音，也沒人會打擾經理們。"
  },
  {
    "word": "isolated",
    "pos": "adj.",
    "cn_def": "孤立的；偏遠的",
    "en_def": "far away from other places or people",
    "sentence": "A: Why is it taking so long for the repair team to fix the internet connection at our warehouse in the countryside? B: The warehouse is in a very {{BLANK}} area with only one narrow road, so the technicians need almost three hours to drive there with their equipment.",
    "cn": "A：為什麼維修團隊修理我們鄉下倉庫的網路連線要花這麼久？ B：倉庫位在一個非常【偏遠孤立】的地區，只有一條窄路，所以技術人員帶著設備開車過去要將近三個小時。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "遙遠的；偏僻的",
    "en_def": "far from towns, cities or other people",
    "sentence": "A: Is it true that the engineering team will be working at a mining site in the mountains for the next two months? B: Yes, the site is so {{BLANK}} that there are no shops or restaurants nearby, so the company is sending food supplies to them every week by truck.",
    "cn": "A：工程團隊接下來兩個月要在山區的礦場工作，這是真的嗎？ B：是的，那個工地非常【偏遠】，附近沒有商店或餐廳，所以公司每週都用卡車送食物補給給他們。"
  },
  {
    "word": "undisturbed",
    "pos": "adj.",
    "cn_def": "不受打擾的",
    "en_def": "not interrupted or bothered by anyone",
    "sentence": "A: I have to finish the annual financial report by Friday afternoon, but people keep coming to my desk with questions, so what should I do? B: Why don't you book the small meeting room on the fifth floor, where you can work {{BLANK}} for a few hours with the door closed?",
    "cn": "A：我得在星期五下午前完成年度財務報告，但一直有人來我座位問問題，我該怎麼辦？ B：你何不預約五樓的小會議室？在那裡你可以關上門【不受打擾】地工作幾個小時。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；私密的",
    "en_def": "only for one person or group, not for everyone",
    "sentence": "A: The new client wants to discuss the contract details over lunch, but the restaurant near our office is always crowded and noisy, isn't it? B: That's true, so I have asked the manager to give us a {{BLANK}} room at the back, where nobody can hear our conversation about the prices.",
    "cn": "A：新客戶想邊吃午餐邊討論合約細節，但我們辦公室附近那家餐廳總是又擠又吵，不是嗎？ B：沒錯，所以我已經請經理給我們後面的一間【私人】包廂，在那裡沒人聽得到我們談價格的內容。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "舒適溫馨的",
    "en_def": "warm, comfortable and pleasant",
    "sentence": "A: What did the visitors from the head office think of the new staff lounge that we decorated last month? B: They loved it, especially the soft sofas, warm lights and bookshelves, and they said it feels as {{BLANK}} as a living room where employees can relax during their breaks.",
    "cn": "A：總公司來的訪客覺得我們上個月布置的新員工休息室怎麼樣？ B：他們很喜歡，尤其是柔軟的沙發、溫暖的燈光和書架，他們說那裡感覺像客廳一樣【舒適溫馨】，員工可以在休息時間放鬆。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒服的；舒適的",
    "en_def": "making you feel physically relaxed",
    "sentence": "A: Our customers have been complaining that the waiting area at the service center is too crowded, so what changes are we making? B: We are buying larger and more {{BLANK}} chairs, adding a coffee machine, and moving the waiting area away from the noisy front door next month.",
    "cn": "A：顧客一直抱怨服務中心的等候區太擁擠，我們要做哪些改變？ B：我們下個月會買更大、更【舒適】的椅子，增加一台咖啡機，並把等候區移離吵雜的大門。"
  },
  {
    "word": "restful",
    "pos": "adj.",
    "cn_def": "令人放鬆的；寧靜的",
    "en_def": "making you feel relaxed and calm",
    "sentence": "A: How was your holiday at the countryside guesthouse that your colleagues recommended to you before you left last week? B: It was very {{BLANK}}, because I slept late every morning, walked in the fields in the afternoon, and didn't check my work email even once.",
    "cn": "A：你上週出發前同事推薦給你的鄉間民宿假期過得如何？ B：非常【令人放鬆】，因為我每天早上睡到很晚，下午在田野散步，而且一次都沒有查看工作電子郵件。"
  },
  {
    "word": "soothing",
    "pos": "adj.",
    "cn_def": "撫慰的；使人平靜的",
    "en_def": "making someone feel calm and less worried",
    "sentence": "A: Many patients feel nervous before their appointments, so is there anything we can do to improve the dental clinic's waiting room? B: We could play some {{BLANK}} music in the background and paint the walls light blue, because both can help patients feel calmer while they wait.",
    "cn": "A：很多病患在看診前會很緊張，我們有什麼方法可以改善牙醫診所的候診室嗎？ B：我們可以播放一些【使人平靜的】背景音樂，並把牆壁漆成淺藍色，因為兩者都能幫助病患在等候時感覺比較平靜。"
  },
  {
    "word": "gentle",
    "pos": "adj.",
    "cn_def": "溫和的；輕柔的",
    "en_def": "soft and not strong or loud",
    "sentence": "A: The hotel manager wants guests to wake up feeling relaxed instead of stressed, so what is the plan for the new rooms? B: Each room will have a special alarm clock with {{BLANK}} light and quiet bird sounds, so guests are woken slowly instead of by a loud ringing noise.",
    "cn": "A：飯店經理希望客人醒來時感到放鬆而不是有壓力，新客房的計畫是什麼？ B：每間房都會有特別的鬧鐘，帶有【柔和】的光線和輕輕的鳥叫聲，讓客人慢慢醒來，而不是被很大的鈴聲吵醒。"
  },
  {
    "word": "soft",
    "pos": "adj.",
    "cn_def": "輕柔的；柔軟的",
    "en_def": "quiet and not loud; not hard",
    "sentence": "A: Several employees in the open office have complained that it is difficult to concentrate, so what does the office manager plan to do? B: She will put {{BLANK}} carpets on the floor and add some plants between the desks, because they will reduce the noise from phone calls and footsteps.",
    "cn": "A：開放式辦公室裡有幾位員工抱怨很難專心，辦公室經理打算怎麼做？ B：她會在地板上鋪【柔軟的】地毯，並在桌子之間加一些植物，因為這樣可以減少講電話和腳步的噪音。"
  },
  {
    "word": "hush",
    "pos": "n.",
    "cn_def": "一片寂靜；肅靜",
    "en_def": "a sudden silence after noise",
    "sentence": "A: What happened at the end of the awards dinner when the CEO walked up to the stage to announce the employee of the year? B: A {{BLANK}} fell over the whole room, and everyone waited quietly until she read the winner's name and the crowd started clapping loudly.",
    "cn": "A：頒獎晚宴最後執行長走上台宣布年度最佳員工時發生了什麼事？ B：整個會場突然【一片寂靜】，大家都安靜地等著，直到她念出得獎者的名字，大家才開始大聲鼓掌。"
  },
  {
    "word": "silence",
    "pos": "n.",
    "cn_def": "寂靜；沉默",
    "en_def": "a complete lack of sound or speech",
    "sentence": "A: The new manager seemed upset at the end of the meeting yesterday, so did something go wrong while I was out of the office? B: When she asked who had made the mistake in the order, there was a long {{BLANK}}, because nobody wanted to admit they had entered the wrong number.",
    "cn": "A：新經理昨天會議結束時似乎很不高興，我不在辦公室時是不是出了什麼差錯？ B：她問是誰把訂單弄錯時，現場一陣長長的【沉默】，因為沒有人想承認自己輸入了錯誤的數字。"
  },
  {
    "word": "solitude",
    "pos": "n.",
    "cn_def": "獨處；孤獨",
    "en_def": "the state of being alone, often in a pleasant way",
    "sentence": "A: Why does our chief designer spend every weekend alone in that small cabin in the mountains without any internet? B: She says she needs a few days of {{BLANK}} away from meetings and phone calls, because that is when she comes up with her best ideas for new products.",
    "cn": "A：我們的首席設計師為什麼每個週末都一個人待在山上那間沒有網路的小木屋？ B：她說她需要幾天遠離會議和電話的【獨處】時間，因為那正是她想出新產品最佳點子的時候。"
  },
  {
    "word": "retreat",
    "pos": "n.",
    "cn_def": "靜修地；休養所；度假會",
    "en_def": "a quiet place or event where people go to rest or think",
    "sentence": "A: Is the management team really going away for three days next week, and who will make decisions while they are gone? B: Yes, they are attending a planning {{BLANK}} at a quiet hotel by the sea, and Mr. Chen will handle any urgent problems in the office until Thursday.",
    "cn": "A：管理團隊下週真的要離開三天嗎？他們不在時誰來做決定？ B：是的，他們要去海邊一家安靜的飯店參加規劃【靜修會議】，在星期四之前陳先生會處理辦公室的任何緊急問題。"
  },
  {
    "word": "haven",
    "pos": "n.",
    "cn_def": "避風港；安全的地方",
    "en_def": "a safe or peaceful place",
    "sentence": "A: The city is so busy and noisy, so where do you usually go during your lunch break when you need a rest from work? B: There is a small garden behind the museum, and it is a real {{BLANK}} for office workers who want to eat quietly and get away from the traffic.",
    "cn": "A：城市這麼忙碌又吵雜，你需要從工作中休息時，午休時間通常去哪裡？ B：博物館後面有一座小花園，對想安靜吃飯、遠離車流的上班族來說，那裡是真正的【避風港】。"
  },
  {
    "word": "sanctuary",
    "pos": "n.",
    "cn_def": "庇護所；聖地；寧靜之處",
    "en_def": "a place of safety and peace",
    "sentence": "A: Why has the new office building become so popular with technology companies that want to rent space downtown? B: Besides the good location, it has a rooftop garden that feels like a {{BLANK}} above the busy streets, where staff can relax and breathe fresh air.",
    "cn": "A：為什麼新辦公大樓這麼受想在市中心租辦公空間的科技公司歡迎？ B：除了地點好之外，它還有一座屋頂花園，感覺像是繁忙街道上方的【寧靜庇護所】，員工可以在那裡放鬆、呼吸新鮮空氣。"
  },
  {
    "word": "escape",
    "pos": "n.",
    "cn_def": "逃離；解脫",
    "en_def": "a way of getting away from something unpleasant",
    "sentence": "A: Our travel company wants to attract more young professionals this summer, so what should we focus on in the new advertisements? B: We should present our island tours as a perfect {{BLANK}} from the stress of the office, with photos of empty beaches and quiet sunsets.",
    "cn": "A：我們旅行社今年夏天想吸引更多年輕上班族，新廣告應該著重在什麼？ B：我們應該把島嶼旅遊呈現為一個逃離辦公室壓力的完美【解脫】，搭配空曠海灘和寧靜夕陽的照片。"
  },
  {
    "word": "meditate",
    "pos": "v.",
    "cn_def": "冥想；打坐",
    "en_def": "to sit quietly and focus your mind to relax",
    "sentence": "A: You always seem so relaxed even when we have very tight deadlines, so what is your secret for handling stress at work? B: I {{BLANK}} for fifteen minutes in a quiet corner of the park every morning before I come to the office, and it helps me think clearly all day.",
    "cn": "A：即使截止期限很緊，你看起來總是很放鬆，你處理工作壓力的祕訣是什麼？ B：我每天早上進辦公室前，會在公園安靜的角落【冥想】十五分鐘，這讓我一整天都能清楚思考。"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "cn_def": "反思；深思",
    "en_def": "to think carefully and deeply about something",
    "sentence": "A: The project ended badly last month, so does the director want us to start the next one right away? B: No, she wants each team member to take some quiet time to {{BLANK}} on what went wrong, and then we will share our ideas at a meeting on Monday.",
    "cn": "A：上個月的專案結果很糟，主管要我們馬上開始下一個專案嗎？ B：不，她希望每位組員花一些安靜的時間【反思】哪裡出了問題，然後我們星期一在會議上分享想法。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become less worried or tense",
    "sentence": "A: The new hotel near the airport is advertising a quiet lounge for business travelers, so what kind of services does it offer? B: Guests can {{BLANK}} in soft chairs, enjoy free tea and snacks, and take a short nap there while they wait for their late-night flights.",
    "cn": "A：機場附近的新飯店在宣傳一間給商務旅客的安靜休息室，它提供哪些服務？ B：客人可以在柔軟的椅子上【放鬆】，享用免費的茶和點心，在等深夜班機時還可以在那裡小睡一下。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆；紓解",
    "en_def": "to relax after working hard or feeling stressed",
    "sentence": "A: Our staff have worked overtime every night to finish the product launch, so how can we thank them for their hard work? B: Let's give everyone a free pass to the hot spring resort, where they can {{BLANK}} for a whole weekend without thinking about deadlines.",
    "cn": "A：我們的員工為了完成產品發表每晚都加班，我們要怎麼感謝他們的辛勞？ B：我們送每個人一張溫泉度假村的免費票吧，他們可以在那裡【放鬆紓壓】一整個週末，不用想截止期限。"
  },
  {
    "word": "breeze",
    "pos": "n.",
    "cn_def": "微風",
    "en_def": "a light, gentle wind",
    "sentence": "A: The outdoor café on the hotel's top floor is always full in the afternoon, so why do so many guests like to sit there? B: They enjoy the cool {{BLANK}} from the sea and the quiet view of the harbor, which make it a pleasant place to read or work on a laptop.",
    "cn": "A：飯店頂樓的戶外咖啡廳下午總是客滿，為什麼那麼多客人喜歡坐那裡？ B：他們喜歡從海上吹來的涼爽【微風】和港口的寧靜景色，讓那裡成為看書或用筆電工作的好地方。"
  },
  {
    "word": "shade",
    "pos": "n.",
    "cn_def": "陰涼處；樹蔭",
    "en_def": "an area that is darker and cooler because the sun cannot reach it",
    "sentence": "A: The company picnic is on Saturday and the weather forecast says it will be very hot, so where should we set up the tables? B: Let's put them in the {{BLANK}} under the big trees near the lake, so that the older guests and children can stay cool while they eat.",
    "cn": "A：公司野餐在星期六，天氣預報說會非常熱，我們應該把桌子擺在哪裡？ B：我們把桌子放在湖邊大樹下的【陰涼處】吧，這樣年長的客人和小孩吃東西時可以保持涼爽。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a building or room where books are kept for people to read or borrow",
    "sentence": "A: I need somewhere quiet to prepare for my accounting exam next week, but my apartment is too noisy because of the construction next door. B: You should study at the public {{BLANK}} on Main Street, because it has private study rooms and stays open until ten o'clock at night.",
    "cn": "A：我下週要考會計考試，需要一個安靜的地方準備，但我公寓隔壁在施工太吵了。 B：你應該去緬因街的公立【圖書館】讀書，因為那裡有私人自習室，而且開到晚上十點。"
  },
  {
    "word": "cottage",
    "pos": "n.",
    "cn_def": "小屋；鄉間小舍",
    "en_def": "a small house, usually in the countryside",
    "sentence": "A: Where are you planning to stay during your vacation, since you said you wanted to avoid crowded hotels this time? B: I have rented a small wooden {{BLANK}} near a forest for a week, where I can cook my own meals, read books and listen to the birds every morning.",
    "cn": "A：你說這次想避開擁擠的飯店，那你假期打算住哪裡？ B：我在森林附近租了一間小木造【小屋】一個星期，在那裡我可以自己煮飯、看書，每天早上聽鳥叫。"
  },
  {
    "word": "meadow",
    "pos": "n.",
    "cn_def": "草地；牧草地",
    "en_def": "a field of grass and wild flowers",
    "sentence": "A: The marketing team needs a beautiful outdoor background for the photos of our new line of organic tea, so did you find a location? B: Yes, there is a quiet {{BLANK}} full of wild flowers behind a farm about an hour from here, and the owner said we can use it on Sunday.",
    "cn": "A：行銷團隊需要一個漂亮的戶外背景來拍我們新系列有機茶的照片，你找到地點了嗎？ B：找到了，離這裡大約一小時的一座農場後面有一片長滿野花的安靜【草地】，主人說我們星期天可以使用。"
  },
  {
    "word": "whisper",
    "pos": "v.",
    "cn_def": "低聲說；耳語",
    "en_def": "to speak very quietly using only your breath",
    "sentence": "A: The guests are already sitting in the concert hall and the performance is about to start, so how should I tell the manager about the problem? B: Walk to the back row and {{BLANK}} the message to him, because the musicians will be upset if anyone talks loudly during the show.",
    "cn": "A：客人已經坐在音樂廳裡，表演快要開始了，我該怎麼告訴經理這個問題？ B：走到最後一排，【低聲】把訊息告訴他，因為如果有人在表演中大聲說話，樂手們會不高興。"
  },
  {
    "word": "murmur",
    "pos": "n.",
    "cn_def": "低語聲；潺潺聲",
    "en_def": "a soft, low, continuous sound of voices or water",
    "sentence": "A: The new restaurant has been getting excellent reviews online, so what do customers like most about the place? B: Many reviewers mention the pleasant {{BLANK}} of the small river next to the outdoor tables, which makes dinner there feel calm and romantic.",
    "cn": "A：新餐廳在網路上評價很好，顧客最喜歡那裡的什麼？ B：很多評論者提到戶外座位旁小河那令人愉快的【潺潺聲】，讓在那裡吃晚餐感覺平靜又浪漫。"
  }
];

const MCQS = [
  {
    "q": "Please keep your phone on _____ during the board meeting. The chairman dislikes any interruptions while the directors are voting.",
    "options": [
      "silent",
      "gentle",
      "cozy",
      "remote"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "After the factory moved away, the riverside neighborhood became much more _____. Residents can now sleep well without the noise of trucks.",
    "options": [
      "remote",
      "peaceful",
      "gentle",
      "soft"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The flight attendant stayed _____ when the plane shook during the storm. Her quiet voice helped the nervous passengers relax.",
    "options": [
      "remote",
      "secluded",
      "calm",
      "cozy"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The spa is located in a _____ garden far from the busy main road. Guests often say it is the most relaxing place in town.",
    "options": [
      "comfortable",
      "gentle",
      "soft",
      "tranquil"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The software company rented a _____ cabin in the forest for its planning session. No visitors or phone calls could interrupt the team.",
    "options": [
      "soothing",
      "secluded",
      "gentle",
      "calm"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The research station is in a _____ part of the island. Supplies arrive by boat only once every two weeks.",
    "options": [
      "remote",
      "soft",
      "calm",
      "cozy"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The editor closed her office door so she could work _____ for the afternoon. She needed to finish checking the final chapter by six.",
    "options": [
      "restful",
      "gentle",
      "serene",
      "undisturbed"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The bank offers a _____ room where customers can discuss loans with an advisor. Nobody else can listen to these personal conversations.",
    "options": [
      "silent",
      "still",
      "private",
      "soft"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The small café has soft lights, warm blankets and a fireplace. Customers say it is the most _____ place to read on winter evenings.",
    "options": [
      "cozy",
      "remote",
      "isolated",
      "gentle"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The airline has installed more _____ seats in its business class cabins. Passengers can now lie almost flat during long flights.",
    "options": [
      "isolated",
      "remote",
      "comfortable",
      "silent"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The dentist plays _____ music in the treatment room to help patients relax. Many visitors say it makes them less nervous.",
    "options": [
      "secluded",
      "soothing",
      "remote",
      "isolated"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The manager gave the new intern a _____ reminder about the dress code. She did not want to embarrass him in front of others.",
    "options": [
      "isolated",
      "remote",
      "secluded",
      "gentle"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "A _____ fell over the conference room when the director announced the merger. Everyone waited quietly to hear what would happen to their jobs.",
    "options": [
      "haven",
      "shade",
      "hush",
      "breeze"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "There was an awkward _____ after the sales figures appeared on the screen. Nobody wanted to explain why the numbers were so low.",
    "options": [
      "silence",
      "cottage",
      "shade",
      "meadow"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The writer moved to the countryside because she needed peace and _____. She finished her novel there in only six months.",
    "options": [
      "breeze",
      "shade",
      "meadow",
      "solitude"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The management team will hold a two-day _____ at a quiet mountain hotel. They plan to discuss the company's goals for next year.",
    "options": [
      "breeze",
      "retreat",
      "murmur",
      "shade"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The rooftop garden has become a _____ for office workers during their lunch breaks. It offers fresh air and a break from the noisy streets.",
    "options": [
      "haven",
      "murmur",
      "breeze",
      "hush"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The travel agency promotes its beach resort as a perfect _____ from city life. Customers can enjoy a week without emails or traffic.",
    "options": [
      "shade",
      "breeze",
      "murmur",
      "escape"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Some employees _____ in the wellness room with closed eyes, focusing only on their breathing. They say it helps them concentrate all day.",
    "options": [
      "whisper",
      "meditate",
      "apologize",
      "complain"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "After the failed product launch, the team took time to _____ on its mistakes. The lessons will guide the next project.",
    "options": [
      "whisper",
      "relax",
      "reflect",
      "unwind"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Passengers can _____ in the airport lounge while they wait for delayed flights. It offers soft chairs, newspapers and free coffee.",
    "options": [
      "reflect",
      "whisper",
      "apologize",
      "relax"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Many office workers visit the hot springs on weekends to _____ after a busy week. The warm water helps them forget their stress.",
    "options": [
      "unwind",
      "reflect",
      "whisper",
      "apologize"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The restaurant's outdoor tables face the harbor and catch a cool sea _____. Diners enjoy eating there on hot summer evenings.",
    "options": [
      "shade",
      "murmur",
      "breeze",
      "haven"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The company picnic tables were placed in the _____ of tall trees. This kept the guests cool during the hot afternoon.",
    "options": [
      "breeze",
      "shade",
      "hush",
      "murmur"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Students often reserve study rooms at the city _____ before final exams. It is quiet and stays open late every weekday.",
    "options": [
      "cottage",
      "meadow",
      "sanctuary",
      "library"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The couple rented a small _____ by the lake for their summer vacation. It had two bedrooms and a lovely wooden porch.",
    "options": [
      "library",
      "meadow",
      "cottage",
      "shade"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The tea company filmed its new advertisement in a green _____ full of wild flowers. The peaceful scene matched the natural product.",
    "options": [
      "meadow",
      "cottage",
      "library",
      "haven"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The tour guide asked visitors to _____ inside the old temple. Loud voices are not allowed while people are praying.",
    "options": [
      "relax",
      "whisper",
      "unwind",
      "complain"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The hotel's brochure shows a _____ lake surrounded by mountains at sunrise. The calm image has attracted many tired city workers.",
    "options": [
      "isolated",
      "remote",
      "cozy",
      "serene"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The doctor advised the busy manager to take a _____ holiday without work emails. She booked a quiet week at a countryside inn.",
    "options": [
      "isolated",
      "remote",
      "restful",
      "secluded"
    ],
    "answer": 2,
    "vocabIndex": 13
  }
];

const LOOKUP = {
  "silent": {
    "pos": "adj.",
    "en_def": "making no sound; not speaking",
    "cn_def": "安靜的；沉默的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm, without noise or trouble",
    "cn_def": "寧靜的；平和的"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "quiet and relaxed, not worried or excited",
    "cn_def": "平靜的；冷靜的"
  },
  "tranquil": {
    "pos": "adj.",
    "en_def": "very calm and peaceful",
    "cn_def": "寧靜的；安寧的"
  },
  "serene": {
    "pos": "adj.",
    "en_def": "calm, peaceful and untroubled",
    "cn_def": "安詳的；寧靜的"
  },
  "still": {
    "pos": "adj.",
    "en_def": "not moving; calm and quiet",
    "cn_def": "靜止的；平靜的"
  },
  "secluded": {
    "pos": "adj.",
    "en_def": "quiet and hidden away from other people",
    "cn_def": "僻靜的；隱蔽的"
  },
  "isolated": {
    "pos": "adj.",
    "en_def": "far away from other places or people",
    "cn_def": "孤立的；偏遠的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far from towns, cities or other people",
    "cn_def": "遙遠的；偏僻的"
  },
  "undisturbed": {
    "pos": "adj.",
    "en_def": "not interrupted or bothered by anyone",
    "cn_def": "不受打擾的"
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or group, not for everyone",
    "cn_def": "私人的；私密的"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable and pleasant",
    "cn_def": "舒適溫馨的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "making you feel physically relaxed",
    "cn_def": "舒服的；舒適的"
  },
  "restful": {
    "pos": "adj.",
    "en_def": "making you feel relaxed and calm",
    "cn_def": "令人放鬆的；寧靜的"
  },
  "soothing": {
    "pos": "adj.",
    "en_def": "making someone feel calm and less worried",
    "cn_def": "撫慰的；使人平靜的"
  },
  "gentle": {
    "pos": "adj.",
    "en_def": "soft and not strong or loud",
    "cn_def": "溫和的；輕柔的"
  },
  "soft": {
    "pos": "adj.",
    "en_def": "quiet and not loud; not hard",
    "cn_def": "輕柔的；柔軟的"
  },
  "hush": {
    "pos": "n.",
    "en_def": "a sudden silence after noise",
    "cn_def": "一片寂靜；肅靜"
  },
  "silence": {
    "pos": "n.",
    "en_def": "a complete lack of sound or speech",
    "cn_def": "寂靜；沉默"
  },
  "solitude": {
    "pos": "n.",
    "en_def": "the state of being alone, often in a pleasant way",
    "cn_def": "獨處；孤獨"
  },
  "retreat": {
    "pos": "n.",
    "en_def": "a quiet place or event where people go to rest or think",
    "cn_def": "靜修地；休養所；度假會"
  },
  "haven": {
    "pos": "n.",
    "en_def": "a safe or peaceful place",
    "cn_def": "避風港；安全的地方"
  },
  "sanctuary": {
    "pos": "n.",
    "en_def": "a place of safety and peace",
    "cn_def": "庇護所；聖地；寧靜之處"
  },
  "escape": {
    "pos": "n.",
    "en_def": "a way of getting away from something unpleasant",
    "cn_def": "逃離；解脫"
  },
  "meditate": {
    "pos": "v.",
    "en_def": "to sit quietly and focus your mind to relax",
    "cn_def": "冥想；打坐"
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to think carefully and deeply about something",
    "cn_def": "反思；深思"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become less worried or tense",
    "cn_def": "放鬆"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after working hard or feeling stressed",
    "cn_def": "放鬆；紓解"
  },
  "breeze": {
    "pos": "n.",
    "en_def": "a light, gentle wind",
    "cn_def": "微風"
  },
  "shade": {
    "pos": "n.",
    "en_def": "an area that is darker and cooler because the sun cannot reach it",
    "cn_def": "陰涼處；樹蔭"
  },
  "library": {
    "pos": "n.",
    "en_def": "a building or room where books are kept for people to read or borrow",
    "cn_def": "圖書館"
  },
  "cottage": {
    "pos": "n.",
    "en_def": "a small house, usually in the countryside",
    "cn_def": "小屋；鄉間小舍"
  },
  "meadow": {
    "pos": "n.",
    "en_def": "a field of grass and wild flowers",
    "cn_def": "草地；牧草地"
  },
  "whisper": {
    "pos": "v.",
    "en_def": "to speak very quietly using only your breath",
    "cn_def": "低聲說；耳語"
  },
  "murmur": {
    "pos": "n.",
    "en_def": "a soft, low, continuous sound of voices or water",
    "cn_def": "低語聲；潺潺聲"
  }
};

const EXTRA_GLOSSES = {};
