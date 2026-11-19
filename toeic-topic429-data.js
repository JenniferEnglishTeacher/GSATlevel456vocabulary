// Topic 429 Quiz Data: Visit 拜訪
// Source word list: https://www.examword.com/group-topic/visit — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T429 - Visit 拜訪",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "訪客；參觀者",
    "en_def": "a person who comes to see a place or a person",
    "sentence": "A: Why did the receptionist ask me to wear this badge before I went upstairs to the sales department this morning? B: Every {{BLANK}} must wear one while inside the building, because the security team needs to know who is not an employee, especially when important clients are touring the factory floor.",
    "cn": "A：為什麼今天早上我上樓去業務部之前，接待員要我戴上這個識別證？ B：每位【訪客】在大樓內都必須佩戴，因為保全團隊需要知道誰不是員工，尤其是當重要客戶在參觀工廠廠房的時候。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "客人；賓客",
    "en_def": "a person who is invited to an event or someone's place",
    "sentence": "A: How many people from the partner companies are coming to the anniversary dinner at the hotel on Friday evening? B: We have invited about eighty people, and each {{BLANK}} will receive a small gift at the door, so please make sure the welcome table is ready before six o'clock.",
    "cn": "A：週五晚上在飯店舉行的週年晚宴，合作公司會來多少人？ B：我們邀請了大約八十人，每位【賓客】在門口都會收到一份小禮物，所以請確保六點前把迎賓桌準備好。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；招待",
    "en_def": "to organize an event and take care of the people who come",
    "sentence": "A: Which office is going to organize the training workshop for the new staff from our overseas branches next month? B: Our Taipei office has agreed to {{BLANK}} the event this time, so we will need to book a large conference room, arrange lunch, and prepare hotel rooms for everyone.",
    "cn": "A：下個月為海外分公司新進員工舉辦的培訓工作坊，由哪個辦公室負責籌辦？ B：這次我們台北辦公室同意【主辦】這場活動，所以我們需要預訂一間大會議室、安排午餐，並為每個人準備飯店房間。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone to come to an event or place",
    "sentence": "A: Should we ask the customers from the Singapore company to join us for dinner after they finish visiting the factory? B: Yes, I think we should {{BLANK}} them to the seafood restaurant near the harbor, because they traveled a long way and it would be a nice chance to build a closer relationship.",
    "cn": "A：新加坡公司的客戶參觀完工廠後，我們要不要請他們一起吃晚餐？ B：要，我認為我們應該【邀請】他們去港口附近的海鮮餐廳，因為他們遠道而來，這也是建立更密切關係的好機會。"
  },
  {
    "word": "invitation",
    "pos": "n.",
    "cn_def": "邀請；邀請函",
    "en_def": "a request for someone to come to an event",
    "sentence": "A: Did the marketing manager reply to the event organizers about the product launch in Kaohsiung next week? B: She accepted their {{BLANK}} yesterday afternoon, and she asked me to book a train ticket for her and to find a hotel close to the convention center.",
    "cn": "A：行銷經理回覆了下週在高雄舉行的產品發表會的主辦單位了嗎？ B：她昨天下午接受了他們的【邀請】，並請我幫她訂火車票，再找一間離會展中心近的飯店。"
  },
  {
    "word": "arrival",
    "pos": "n.",
    "cn_def": "抵達；到達",
    "en_def": "the act of reaching a place",
    "sentence": "A: When should the driver leave the office to pick up the director from the airport this afternoon? B: Her flight is delayed by about an hour, so the {{BLANK}} time is now four thirty, which means the driver should leave by three o'clock to avoid the heavy traffic on the highway.",
    "cn": "A：今天下午司機應該什麼時候離開辦公室去機場接主任？ B：她的班機延誤了大約一小時，所以現在【抵達】時間是四點半，這表示司機應該在三點前出發，以避開高速公路上的塞車。"
  },
  {
    "word": "depart",
    "pos": "v.",
    "cn_def": "出發；離開",
    "en_def": "to leave a place, especially to start a trip",
    "sentence": "A: What time does the shuttle bus take the conference visitors back to the hotel after the last session today? B: The bus will {{BLANK}} from the main entrance at six fifteen, so please remind everyone to collect their bags from the cloakroom before the closing speech ends.",
    "cn": "A：今天最後一場會議結束後，接駁巴士什麼時候載與會訪客回飯店？ B：巴士將在六點十五分從大門口【出發】，所以請提醒大家在閉幕致詞結束前，到衣帽間拿回他們的包包。"
  },
  {
    "word": "stay",
    "pos": "v.",
    "cn_def": "停留；暫住",
    "en_def": "to live in a place for a short time",
    "sentence": "A: How long are the engineers from the German supplier going to remain in Taiwan for the machine installation? B: They plan to {{BLANK}} for about two weeks, so I have reserved rooms at the business hotel next to the train station, which is only ten minutes from our factory.",
    "cn": "A：德國供應商的工程師為了安裝機器，會在台灣待多久？ B：他們打算【停留】大約兩週，所以我已經在火車站旁的商務旅館預訂了房間，那裡離我們工廠只有十分鐘。"
  },
  {
    "word": "tour",
    "pos": "n.",
    "cn_def": "參觀；遊覽",
    "en_def": "a visit around a place to see it",
    "sentence": "A: What are we going to do with the new clients after the morning presentation finishes on Wednesday? B: The production manager will give them a short {{BLANK}} of the factory, showing them how the products are made and packed, and then we will all have lunch together in the staff cafeteria.",
    "cn": "A：週三上午的簡報結束後，我們要安排新客戶做什麼？ B：生產經理會帶他們做簡短的工廠【參觀】，讓他們看看產品是怎麼製造和包裝的，然後我們大家會一起在員工餐廳吃午餐。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "導遊；嚮導",
    "en_def": "a person who shows visitors around a place",
    "sentence": "A: Is anyone going to show the visiting team around the old town during their free afternoon on Saturday? B: Yes, I hired a local {{BLANK}} who speaks excellent English and knows the history of every temple and market, so they will learn a lot and won't get lost.",
    "cn": "A：週六下午訪問團自由活動時，會有人帶他們逛老城區嗎？ B：有，我請了一位當地的【導遊】，他英文說得很好，也很了解每座廟宇和市場的歷史，所以他們會學到很多，而且不會迷路。"
  },
  {
    "word": "greet",
    "pos": "v.",
    "cn_def": "迎接；問候",
    "en_def": "to say hello to someone when you meet them",
    "sentence": "A: What should I do when the delegation from the Japanese bank arrives at the front desk tomorrow morning? B: Please {{BLANK}} them warmly at the entrance, offer them some tea or coffee, and then take them up to the tenth floor, where the general manager will be waiting in the conference room.",
    "cn": "A：明天早上日本銀行的代表團到達櫃台時，我該怎麼做？ B：請在入口處熱情地【迎接】他們，請他們喝茶或咖啡，然後帶他們上十樓，總經理會在會議室等候。"
  },
  {
    "word": "welcome",
    "pos": "v.",
    "cn_def": "歡迎",
    "en_def": "to greet someone in a happy, friendly way when they arrive",
    "sentence": "A: Who is going to give the opening speech at the international trade fair this year, and how long will it be? B: The mayor will {{BLANK}} all the foreign exhibitors in a short speech of about five minutes, and after that the chairman will introduce the main products we are showing.",
    "cn": "A：今年國際貿易展的開幕致詞由誰負責，會講多久？ B：市長會用大約五分鐘的簡短致詞【歡迎】所有外國參展商，之後董事長會介紹我們展出的主要產品。"
  },
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議；會面",
    "en_def": "a time when people come together to talk about something",
    "sentence": "A: Why is the marketing team so busy preparing slides and printing reports this afternoon? B: The visitors from our biggest customer are coming tomorrow for an important {{BLANK}}, and we want to show them our sales results and discuss next year's contract before they fly home.",
    "cn": "A：行銷團隊今天下午為什麼忙著準備投影片和列印報告？ B：我們最大客戶的訪客明天要來參加一場重要的【會議】，我們想在他們搭機回國之前，向他們展示我們的銷售成績，並討論明年的合約。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集；集合",
    "en_def": "to come together in one place as a group",
    "sentence": "A: Where should all the visitors wait before the factory tour begins at ten o'clock tomorrow? B: Please ask everyone to {{BLANK}} in the lobby on the first floor, where the safety officer will give them helmets and explain the rules before they enter the production area.",
    "cn": "A：明天十點工廠參觀開始前，所有訪客應該在哪裡等候？ B：請大家在一樓大廳【集合】，安全人員會在他們進入生產區之前發給他們安全帽並說明規定。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "談話；對話",
    "en_def": "a talk between two or more people",
    "sentence": "A: How did you get to know the purchasing director from that Korean company so quickly at the trade show? B: We started a friendly {{BLANK}} while waiting in line for coffee, and we discovered that we both studied in Canada, so we exchanged business cards and agreed to meet again.",
    "cn": "A：你在商展上怎麼那麼快就認識了那家韓國公司的採購主任？ B：我們在排隊買咖啡時開始了一段友善的【對話】，發現我們都曾在加拿大讀書，所以就交換了名片，並約好再見面。"
  },
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "聊天；閒談",
    "en_def": "to talk in a friendly, informal way",
    "sentence": "A: Do you have a few minutes to talk before the visitors from head office arrive this afternoon? B: Sure, we can {{BLANK}} over a cup of coffee in the break room for about fifteen minutes, but then I need to go downstairs and make sure the conference room is ready.",
    "cn": "A：今天下午總公司的訪客到達之前，你有幾分鐘可以談談嗎？ B：當然，我們可以在休息室喝杯咖啡【聊天】大約十五分鐘，但之後我得下樓確認會議室準備好了。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "約會；預約",
    "en_def": "a fixed time to meet someone",
    "sentence": "A: Can I see the office manager about the new furniture order sometime this afternoon? B: I'm afraid she is very busy today, but I can make an {{BLANK}} for you at ten o'clock tomorrow morning, and I'll send you a reminder by email this evening.",
    "cn": "A：今天下午我可以找個時間跟辦公室經理談談新家具的訂單嗎？ B：恐怕她今天很忙，不過我可以幫你【預約】明天早上十點，今晚我會用電子郵件寄提醒給你。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "行程表；時間表",
    "en_def": "a plan that shows what will happen and when",
    "sentence": "A: Could you tell me what the visiting directors will be doing on each day of their trip next week? B: I have prepared a detailed {{BLANK}} that shows all their meetings, meals, and factory visits, and I will email it to everyone in the department before Friday afternoon.",
    "cn": "A：你能告訴我下週來訪的董事們每天要做什麼嗎？ B：我準備了一份詳細的【行程表】，上面列出他們所有的會議、餐敘和工廠參訪，我會在週五下午前用電子郵件寄給部門裡的每個人。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；遊覽",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What do you plan to do in Tainan after the business meetings finish on Thursday afternoon? B: I want to {{BLANK}} the old streets near the Confucius Temple, try some famous local snacks, and maybe buy a few small gifts for my coworkers back in the office.",
    "cn": "A：週四下午商務會議結束後，你打算在台南做什麼？ B：我想去【探索】孔廟附近的老街，嚐嚐一些有名的當地小吃，也許再幫辦公室的同事買幾份小禮物。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "觀察；觀摩",
    "en_def": "to watch someone or something carefully",
    "sentence": "A: Why are the trainees from the new branch spending the whole day in our customer service center? B: They are here to {{BLANK}} how our experienced staff answer phone calls and handle complaints, so that they can use the same methods when their own office opens next month.",
    "cn": "A：新分店的受訓人員為什麼要在我們的客服中心待一整天？ B：他們來這裡【觀察】我們經驗豐富的員工如何接聽電話和處理客訴，好讓他們在下個月自己的辦公室開張時，能使用同樣的方法。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習",
    "en_def": "to get knowledge or a skill by studying or experience",
    "sentence": "A: What is the main purpose of the visit to the solar panel factory in Germany next month? B: Our engineers want to {{BLANK}} how they recycle old materials and save energy, because the company hopes to use similar ideas in our own production line next year.",
    "cn": "A：下個月參訪德國太陽能板工廠的主要目的是什麼？ B：我們的工程師想【學習】他們如何回收舊材料和節省能源，因為公司希望明年在我們自己的生產線上採用類似的做法。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗；經歷",
    "en_def": "something that happens to you and affects you",
    "sentence": "A: How was your first business trip to Japan with the sales manager last month? B: It was a wonderful {{BLANK}}, because I visited three clients, practiced my presentation skills, and even had time to see the cherry blossoms in a beautiful park near our hotel.",
    "cn": "A：上個月你第一次和業務經理去日本出差，感覺怎麼樣？ B：那是一次很棒的【經歷】，因為我拜訪了三位客戶、練習了簡報技巧，甚至還有時間在飯店附近一座美麗的公園賞櫻。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "當地的",
    "en_def": "from or in the area where you are",
    "sentence": "A: Where should we take the visitors from the London office for dinner on their first night in Taipei? B: Let's take them to a {{BLANK}} restaurant in the night market area, because they told me they want to try real Taiwanese food instead of eating at the hotel again.",
    "cn": "A：倫敦辦公室的訪客在台北的第一晚，我們應該帶他們去哪裡吃晚餐？ B：我們帶他們去夜市附近的一家【當地】餐廳吧，因為他們告訴我想吃道地的台灣菜，而不是又在飯店吃。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Why is it so difficult to book a table at that restaurant next to the convention center this week? B: It is very {{BLANK}} with business travelers because the food is excellent and the prices are reasonable, so you usually need to reserve a table at least three days ahead.",
    "cn": "A：這週為什麼那麼難訂到會展中心旁邊那家餐廳的位子？ B：那家餐廳在商務旅客之間非常【受歡迎】，因為菜色很棒、價格也合理，所以通常你至少要提前三天訂位。"
  },
  {
    "word": "historic",
    "pos": "adj.",
    "cn_def": "有歷史意義的；歷史悠久的",
    "en_def": "important in history",
    "sentence": "A: Is there anything interesting near the hotel that the visiting clients could see during their lunch break? B: There is a {{BLANK}} building just across the street that was built about two hundred years ago, and it now has a small museum and a lovely tea shop inside.",
    "cn": "A：飯店附近有沒有什麼有趣的地方，可以讓來訪的客戶在午休時間去看看？ B：就在對街有一棟【具有歷史意義的】建築，大約兩百年前建造，現在裡面有一間小博物館和一家很棒的茶館。"
  },
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "著名的；有名的",
    "en_def": "known by many people",
    "sentence": "A: Why are so many tourists and business visitors waiting in line outside that small bakery every morning? B: The shop is {{BLANK}} for its pineapple cakes, which many people buy as gifts, so the line is often very long before the doors open at nine o'clock.",
    "cn": "A：為什麼每天早上都有那麼多觀光客和商務訪客在那家小麵包店外面排隊？ B：那家店以鳳梨酥【聞名】，很多人買來當伴手禮，所以九點開門前隊伍常常排得很長。"
  },
  {
    "word": "nearby",
    "pos": "adj.",
    "cn_def": "附近的",
    "en_def": "not far away",
    "sentence": "A: Where can our visitors park their cars when they come to the office for the workshop on Monday? B: Our own parking lot is full on weekdays, but there is a {{BLANK}} public parking garage only two minutes away on foot, and we will pay their parking fees.",
    "cn": "A：週一我們的訪客來辦公室參加工作坊時，可以把車停在哪裡？ B：我們自己的停車場平日都停滿了，不過有一座【附近的】公有停車場，走路只要兩分鐘，我們會支付他們的停車費。"
  },
  {
    "word": "brief",
    "pos": "adj.",
    "cn_def": "簡短的；短暫的",
    "en_def": "lasting only a short time",
    "sentence": "A: Does the vice president have time to meet the new suppliers when they come to our office this afternoon? B: She can only have a {{BLANK}} meeting with them for about ten minutes, because she has to leave for the airport at three o'clock to catch a flight to Hong Kong.",
    "cn": "A：今天下午新供應商來我們辦公室時，副總裁有時間見他們嗎？ B：她只能和他們進行大約十分鐘的【簡短】會面，因為她三點必須出發去機場，搭飛機到香港。"
  },
  {
    "word": "pleasant",
    "pos": "adj.",
    "cn_def": "愉快的；令人愉悅的",
    "en_def": "nice and enjoyable",
    "sentence": "A: How was the dinner with the Australian buyers at the riverside restaurant last night? B: It was very {{BLANK}}, because the weather was cool, the food was delicious, and everyone relaxed and talked about their families and hobbies instead of business and prices.",
    "cn": "A：昨晚在河畔餐廳和澳洲買家的晚餐怎麼樣？ B：非常【愉快】，因為天氣涼爽、食物美味，而且大家都很放鬆，聊的是家人和嗜好，而不是生意和價格。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的；親切的",
    "en_def": "kind and helpful to other people",
    "sentence": "A: What did the visitors from the Thai company say about their trip when they left our office yesterday? B: They said our staff were very {{BLANK}} and helpful, especially the receptionist, who helped them find a pharmacy and called a taxi for them when it started to rain.",
    "cn": "A：泰國公司的訪客昨天離開我們辦公室時，對這次行程有什麼看法？ B：他們說我們的員工非常【友善】又樂於助人，尤其是接待員，她幫他們找到藥局，下雨時還幫他們叫了計程車。"
  },
  {
    "word": "return",
    "pos": "v.",
    "cn_def": "返回；回來",
    "en_def": "to come or go back to a place",
    "sentence": "A: When will the sales director be back from her two-week visit to our customers in Europe? B: She will {{BLANK}} to Taipei next Tuesday evening, and she has already asked me to set up a meeting with the whole team on Wednesday morning to share what she learned.",
    "cn": "A：業務總監為期兩週的歐洲客戶拜訪什麼時候會回來？ B：她下週二晚上會【回到】台北，而且她已經請我安排週三早上和整個團隊開會，分享她的收穫。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "回憶；記憶",
    "en_def": "something you remember from the past",
    "sentence": "A: Why do you keep that small wooden box from Kyoto on your desk next to the computer? B: It reminds me of my first business trip abroad, when our client took us to a beautiful temple, so it is a happy {{BLANK}} that makes me smile on busy days.",
    "cn": "A：你為什麼把那個京都的小木盒放在桌上電腦旁邊？ B：它讓我想起我第一次出國出差，那時客戶帶我們去了一座美麗的寺廟，所以它是一段快樂的【回憶】，在忙碌的日子裡讓我微笑。"
  },
  {
    "word": "farewell",
    "pos": "n.",
    "cn_def": "告別；送別",
    "en_def": "the act of saying goodbye",
    "sentence": "A: Is the department planning anything special for our team leader before he moves to the new branch in Singapore? B: Yes, we are having a {{BLANK}} party for him at the Italian restaurant on Friday night, and everyone has signed a card to thank him for his ten years of hard work.",
    "cn": "A：我們的組長調到新加坡新分公司之前，部門有計畫為他做什麼特別的事嗎？ B：有，我們週五晚上在義大利餐廳為他舉辦【歡送】派對，大家都在卡片上簽了名，感謝他十年來的辛勞。"
  },
  {
    "word": "thank",
    "pos": "v.",
    "cn_def": "感謝",
    "en_def": "to tell someone you are grateful for something they did",
    "sentence": "A: What should I write in the email to the Japanese clients now that they have gone back to Osaka? B: You should {{BLANK}} them for visiting our factory and for their useful suggestions, and then attach the price list they asked for during the meeting on Tuesday afternoon.",
    "cn": "A：既然日本客戶已經回大阪了，我給他們的電子郵件該寫些什麼？ B：你應該【感謝】他們來參觀我們的工廠以及提供有用的建議，然後附上他們週二下午開會時要求的價目表。"
  }
];

const MCQS = [
  {
    "q": "Every _____ must sign in at the front desk and receive a badge. Employees, however, can simply use their ID cards at the gate.",
    "options": [
      "visitor",
      "memory",
      "schedule",
      "invitation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel offers free breakfast to every _____ who stays more than two nights. Please show your room key at the restaurant entrance.",
    "options": [
      "arrival",
      "tour",
      "guest",
      "appointment"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our company will _____ the annual technology conference in Taichung next spring. More than five hundred people are expected to attend.",
    "options": [
      "depart",
      "host",
      "greet",
      "return"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "We would like to _____ you to the opening of our new showroom on May 5. Light refreshments will be served after the ceremony.",
    "options": [
      "observe",
      "explore",
      "gather",
      "invite"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The manager could not accept the _____ to speak at the seminar. She will be traveling in Europe that whole week.",
    "options": [
      "arrival",
      "memory",
      "invitation",
      "experience"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Please inform the front desk of your expected _____ time at least one day in advance. The airport shuttle runs every thirty minutes.",
    "options": [
      "arrival",
      "farewell",
      "conversation",
      "memory"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Flight 302 to Tokyo will _____ from Gate 12 at 9:40 in the morning. Passengers should arrive at the gate thirty minutes early.",
    "options": [
      "gather",
      "observe",
      "welcome",
      "depart"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Visitors can join a free guided _____ of the museum every hour. Each one lasts about forty-five minutes and starts in the main hall.",
    "options": [
      "memory",
      "tour",
      "invitation",
      "appointment"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Our tour _____ explained the history of the old fort in clear and simple English. Everyone in the group enjoyed her stories.",
    "options": [
      "guide",
      "guest",
      "visitor",
      "memory"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The receptionist stood up to _____ the clients as they walked into the lobby. She then offered them coffee and showed them to the meeting room.",
    "options": [
      "depart",
      "explore",
      "return",
      "greet"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The chairman opened the event by asking everyone to _____ the new partners from Asia. The audience stood up and clapped loudly.",
    "options": [
      "observe",
      "depart",
      "welcome",
      "explore"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The weekly sales _____ has been moved from Monday to Tuesday morning. Please check the updated calendar before you book any visits.",
    "options": [
      "arrival",
      "meeting",
      "memory",
      "guide"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "All tour members should _____ in the hotel lobby at 8 o'clock tomorrow. The bus will leave for the national park shortly after.",
    "options": [
      "invite",
      "thank",
      "observe",
      "gather"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "During the long train ride, I had an interesting _____ with a sales manager from Osaka. We exchanged business cards before getting off.",
    "options": [
      "conversation",
      "invitation",
      "appointment",
      "arrival"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "If you need to see the doctor in the company clinic, please make an _____ online. Walk-in visits are only accepted for emergencies.",
    "options": [
      "experience",
      "appointment",
      "invitation",
      "conversation"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The visitors have a very busy _____ tomorrow, with four meetings and a factory visit. Lunch will be served in the conference room.",
    "options": [
      "memory",
      "guide",
      "schedule",
      "farewell"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "After the conference ends, many participants plan to _____ the old streets and night markets of the city. Maps are available at the reception desk.",
    "options": [
      "explore",
      "greet",
      "thank",
      "invite"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "New staff members will _____ experienced workers on the production line for two weeks. After that, they will start working on their own.",
    "options": [
      "depart",
      "observe",
      "gather",
      "return"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Working at the international trade fair was a valuable _____ for our young staff. They learned how to talk with buyers from many countries.",
    "options": [
      "arrival",
      "schedule",
      "invitation",
      "experience"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Visitors who want to understand the _____ culture should try the street food in the night market. It is cheap and delicious.",
    "options": [
      "brief",
      "nearby",
      "local",
      "pleasant"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "This beach resort is very _____ with families because it offers safe swimming areas and children's activities. Rooms are often fully booked in summer.",
    "options": [
      "brief",
      "popular",
      "historic",
      "local"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The city's _____ district has many temples and buildings that are more than three hundred years old. Visitors can join a walking tour there.",
    "options": [
      "historic",
      "friendly",
      "brief",
      "pleasant"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Tainan is _____ for its delicious snacks and old temples. Many visitors travel there just to try the food.",
    "options": [
      "brief",
      "friendly",
      "famous",
      "nearby"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The director made a _____ visit to the Kaohsiung branch, staying for only one hour. She had to return to Taipei for another meeting.",
    "options": [
      "famous",
      "historic",
      "local",
      "brief"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Thank you for staying with us, and we hope you had a _____ stay at our hotel. Please leave a review on our website.",
    "options": [
      "historic",
      "pleasant",
      "famous",
      "nearby"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The hotel staff were so _____ and helpful that we decided to stay there again next year. They even gave us a free city map.",
    "options": [
      "historic",
      "brief",
      "local",
      "friendly"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The sales director will _____ from her business trip to Europe next Tuesday. Until then, please send any urgent questions to her assistant.",
    "options": [
      "return",
      "greet",
      "observe",
      "invite"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The photo of the team at the trade fair brings back a happy _____ for everyone. We hung it in the break room.",
    "options": [
      "arrival",
      "schedule",
      "memory",
      "appointment"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The staff held a _____ party for Linda, who is retiring after thirty years with the company. Everyone signed a card to wish her well.",
    "options": [
      "conversation",
      "schedule",
      "arrival",
      "farewell"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "We would like to _____ all of our volunteers for their hard work at the festival. Without their help, the event would not have been possible.",
    "options": [
      "thank",
      "greet",
      "observe",
      "explore"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "visitor": {
    "pos": "n.",
    "en_def": "a person who comes to see a place or a person",
    "cn_def": "訪客；參觀者"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person who is invited to an event or someone's place",
    "cn_def": "客人；賓客"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and take care of the people who come",
    "cn_def": "主辦；招待"
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone to come to an event or place",
    "cn_def": "邀請"
  },
  "invitation": {
    "pos": "n.",
    "en_def": "a request for someone to come to an event",
    "cn_def": "邀請；邀請函"
  },
  "arrival": {
    "pos": "n.",
    "en_def": "the act of reaching a place",
    "cn_def": "抵達；到達"
  },
  "depart": {
    "pos": "v.",
    "en_def": "to leave a place, especially to start a trip",
    "cn_def": "出發；離開"
  },
  "stay": {
    "pos": "v.",
    "en_def": "to live in a place for a short time",
    "cn_def": "停留；暫住"
  },
  "tour": {
    "pos": "n.",
    "en_def": "a visit around a place to see it",
    "cn_def": "參觀；遊覽"
  },
  "guide": {
    "pos": "n.",
    "en_def": "a person who shows visitors around a place",
    "cn_def": "導遊；嚮導"
  },
  "greet": {
    "pos": "v.",
    "en_def": "to say hello to someone when you meet them",
    "cn_def": "迎接；問候"
  },
  "welcome": {
    "pos": "v.",
    "en_def": "to greet someone in a happy, friendly way when they arrive",
    "cn_def": "歡迎"
  },
  "meeting": {
    "pos": "n.",
    "en_def": "a time when people come together to talk about something",
    "cn_def": "會議；會面"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in one place as a group",
    "cn_def": "聚集；集合"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "談話；對話"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "聊天；閒談"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "a fixed time to meet someone",
    "cn_def": "約會；預約"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that shows what will happen and when",
    "cn_def": "行程表；時間表"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；遊覽"
  },
  "observe": {
    "pos": "v.",
    "en_def": "to watch someone or something carefully",
    "cn_def": "觀察；觀摩"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a skill by studying or experience",
    "cn_def": "學習"
  },
  "experience": {
    "pos": "n.",
    "en_def": "something that happens to you and affects you",
    "cn_def": "經驗；經歷"
  },
  "local": {
    "pos": "adj.",
    "en_def": "from or in the area where you are",
    "cn_def": "當地的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "historic": {
    "pos": "adj.",
    "en_def": "important in history",
    "cn_def": "有歷史意義的；歷史悠久的"
  },
  "famous": {
    "pos": "adj.",
    "en_def": "known by many people",
    "cn_def": "著名的；有名的"
  },
  "nearby": {
    "pos": "adj.",
    "en_def": "not far away",
    "cn_def": "附近的"
  },
  "brief": {
    "pos": "adj.",
    "en_def": "lasting only a short time",
    "cn_def": "簡短的；短暫的"
  },
  "pleasant": {
    "pos": "adj.",
    "en_def": "nice and enjoyable",
    "cn_def": "愉快的；令人愉悅的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and helpful to other people",
    "cn_def": "友善的；親切的"
  },
  "return": {
    "pos": "v.",
    "en_def": "to come or go back to a place",
    "cn_def": "返回；回來"
  },
  "memory": {
    "pos": "n.",
    "en_def": "something you remember from the past",
    "cn_def": "回憶；記憶"
  },
  "farewell": {
    "pos": "n.",
    "en_def": "the act of saying goodbye",
    "cn_def": "告別；送別"
  },
  "thank": {
    "pos": "v.",
    "en_def": "to tell someone you are grateful for something they did",
    "cn_def": "感謝"
  }
};

const EXTRA_GLOSSES = {};
