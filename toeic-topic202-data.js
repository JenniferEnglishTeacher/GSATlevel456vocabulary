// Topic 202 Quiz Data: Invitation Letter 邀請函
// Source word list: https://www.examword.com/group-topic/invitation-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T202 - Invitation Letter 邀請函",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "客人；賓客",
    "en_def": "a person who is invited to an event or a home",
    "sentence": "A: How many people from our partner companies have accepted the invitation to the anniversary dinner, and do we need a bigger room at the hotel? B: Every {{BLANK}} on the list has replied already, so we expect about eighty people, and the hotel manager said the main hall can hold them all comfortably.",
    "cn": "A：我們合作公司中有多少人已經接受週年晚宴的邀請了？我們需要飯店更大的場地嗎？ B：名單上的每一位【賓客】都已經回覆了，所以我們預計大約八十人，飯店經理說主廳可以舒適地容納所有人。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；招待",
    "en_def": "to organize an event and receive the people who come",
    "sentence": "A: Which branch office is going to {{BLANK}} the regional sales conference this year, since the Taipei office did it last spring? B: The Kaohsiung team offered to do it because they have a new meeting center near the train station, and they will also provide lunch and a short city tour for visitors.",
    "cn": "A：既然台北辦公室去年春天辦過了，今年哪個分公司要【主辦】區域業務會議？ B：高雄團隊主動提出要辦，因為他們在火車站附近有一個新的會議中心，而且他們還會為來訪者提供午餐和簡短的市區導覽。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動；事件",
    "en_def": "a planned public or social occasion",
    "sentence": "A: Have you finished writing the letters to our clients about the product launch next month, or do you still need the details from marketing? B: I've almost finished, but I still need to know what time the {{BLANK}} starts and whether parking is free, because many clients will drive from other cities to the exhibition center.",
    "cn": "A：你已經寫完給客戶關於下個月產品發表的信了嗎？還是你還需要行銷部的細節？ B：我快寫完了，但我還需要知道這場【活動】幾點開始以及停車是否免費，因為很多客戶會從其他城市開車到展覽中心。"
  },
  {
    "word": "celebration",
    "pos": "n.",
    "cn_def": "慶祝活動；慶典",
    "en_def": "a special event held to enjoy a happy day or success",
    "sentence": "A: Why is the office manager ordering so many flowers and balloons for the lobby this Friday afternoon? B: The company is having a small {{BLANK}} for its twentieth anniversary, and the CEO wants every employee to gather downstairs after work for cake, speeches, and photos with the founders.",
    "cn": "A：為什麼辦公室經理這週五下午要為大廳訂這麼多花和氣球？ B：公司要為二十週年舉辦一場小型【慶祝活動】，執行長希望每位員工下班後到樓下集合，一起吃蛋糕、聽致詞，並和創辦人合照。"
  },
  {
    "word": "party",
    "pos": "n.",
    "cn_def": "派對；聚會",
    "en_def": "a social event where people eat, drink, and have fun together",
    "sentence": "A: Are you going to the retirement {{BLANK}} for Mr. Chen on Thursday evening, or do you have to stay late to finish the monthly report? B: I'll definitely be there, because he trained me when I first started in the department, and I've already bought him a nice pen as a gift.",
    "cn": "A：你星期四晚上會去參加陳先生的退休【派對】嗎？還是你得留下來加班完成月報？ B：我一定會去，因為我剛進部門時是他訓練我的，而且我已經買了一支很好的筆當禮物送他。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal event held for a special purpose",
    "sentence": "A: What should I wear to the opening {{BLANK}} of the new factory, and how long do you think the speeches will last? B: A dark suit would be best because the mayor and several investors will be there, and the program says the ribbon cutting and speeches will take about an hour.",
    "cn": "A：新工廠的開幕【典禮】我應該穿什麼？你覺得致詞會持續多久？ B：最好穿深色西裝，因為市長和幾位投資人都會出席，節目表上說剪綵和致詞大約需要一個小時。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會；集會",
    "en_def": "a meeting of people, often a friendly or social one",
    "sentence": "A: Is the dinner on Saturday a big business meeting with presentations, or is it something more relaxed for the staff and their families? B: It's just a casual {{BLANK}} at the manager's house, so people can bring their children, share some food, and get to know each other outside the busy office.",
    "cn": "A：星期六的晚餐是有簡報的大型商務會議，還是給員工和家人比較輕鬆的活動？ B：那只是在經理家裡的一場輕鬆【聚會】，所以大家可以帶小孩、分享食物，並在忙碌的辦公室之外互相認識。"
  },
  {
    "word": "occasion",
    "pos": "n.",
    "cn_def": "場合；特殊時刻",
    "en_def": "a special time or event",
    "sentence": "A: Should we order the expensive champagne for the dinner with our Japanese partners, or is regular wine good enough? B: Let's get the champagne, because signing a ten-year contract with them is a very important {{BLANK}} for the whole company, and we want them to feel truly respected and welcome.",
    "cn": "A：和日本合作夥伴的晚宴我們應該訂昂貴的香檳，還是一般的葡萄酒就夠了？ B：我們買香檳吧，因為和他們簽下十年合約對整個公司來說是非常重要的【場合】，我們希望他們感到真正受到尊重和歡迎。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "出席；參加",
    "en_def": "to go to an event, meeting, or class",
    "sentence": "A: Will the sales director be able to {{BLANK}} the awards dinner next Friday, or is she still traveling in Europe that week? B: She returns on Thursday night, so she'll be there, and she has even agreed to give a short speech to thank the top salespeople for their hard work.",
    "cn": "A：業務總監下週五能【出席】頒獎晚宴嗎？還是她那週還在歐洲出差？ B：她星期四晚上回來，所以她會到場，而且她甚至答應發表簡短的致詞，感謝頂尖業務員的努力。"
  },
  {
    "word": "join",
    "pos": "v.",
    "cn_def": "加入；和……一起",
    "en_def": "to do something together with other people",
    "sentence": "A: We're going to a new Thai restaurant near the station after work to celebrate Lisa's promotion; would you like to {{BLANK}} us? B: I'd love to, but I have to finish this budget report first, so I'll probably arrive around seven-thirty if that's still okay with everyone.",
    "cn": "A：我們下班後要去車站附近一家新的泰國餐廳慶祝麗莎升職，你想【加入】我們嗎？ B：我很想去，但我得先完成這份預算報告，所以如果大家還可以的話，我大概七點半左右到。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參與；參加",
    "en_def": "to take part in an activity",
    "sentence": "A: How many departments have agreed to {{BLANK}} in the charity fun run that the company is organizing next month? B: Almost all of them have signed up, and each team will wear a different colored shirt, so it should be a great day for both the staff and the local children's hospital.",
    "cn": "A：公司下個月舉辦的慈善路跑，有多少部門已經同意【參加】了？ B：幾乎所有部門都報名了，而且每個團隊會穿不同顏色的上衣，所以對員工和當地兒童醫院來說，這應該會是很棒的一天。"
  },
  {
    "word": "welcome",
    "pos": "v.",
    "cn_def": "迎接；歡迎",
    "en_def": "to greet someone in a friendly way when they arrive",
    "sentence": "A: Who will {{BLANK}} the visitors from the Singapore office when they arrive at the airport tomorrow morning? B: Mr. Lin from the international department will meet them at the arrival gate with a sign, and then a driver will take everyone straight to the hotel to rest before lunch.",
    "cn": "A：新加坡辦公室的訪客明天早上抵達機場時，誰會去【迎接】他們？ B：國際部的林先生會拿著牌子在入境大廳接他們，然後司機會直接把大家載到飯店，讓他們在午餐前休息。"
  },
  {
    "word": "honor",
    "pos": "n.",
    "cn_def": "榮幸；榮譽",
    "en_def": "something that makes you feel proud and respected",
    "sentence": "A: Did you hear that the company asked you to give the main speech at the annual awards dinner this year? B: Yes, it's a great {{BLANK}} to be chosen, but I'm also a little nervous because there will be more than three hundred people in the audience, including our biggest clients.",
    "cn": "A：你聽說公司今年請你在年度頒獎晚宴上發表主要演講了嗎？ B：聽說了，被選中是很大的【榮幸】，但我也有點緊張，因為觀眾會超過三百人，包括我們最大的客戶。"
  },
  {
    "word": "pleasure",
    "pos": "n.",
    "cn_def": "樂意；愉快；榮幸",
    "en_def": "a feeling of happiness or enjoyment",
    "sentence": "A: Could you write the opening line for the letter we're sending to the new partners about our spring banquet? B: Sure, I'll start by saying it gives us great {{BLANK}} to invite them, and then I'll explain the date, the hotel, and the dress code in the next short paragraph.",
    "cn": "A：你可以幫我們寄給新合作夥伴、關於春季宴會的信寫開頭一句嗎？ B：當然，我會先寫能邀請他們令我們感到非常【愉快】，接著在下一個短段落說明日期、飯店和服裝規定。"
  },
  {
    "word": "delighted",
    "pos": "adj.",
    "cn_def": "非常高興的",
    "en_def": "very pleased and happy",
    "sentence": "A: How did the clients react when you told them that our CEO wanted to meet them in person during their visit? B: They were absolutely {{BLANK}}, and they immediately said they would change their flight to stay one more day so they could have dinner with her on Friday.",
    "cn": "A：當你告訴客戶我們的執行長想在他們來訪期間親自見他們時，他們有什麼反應？ B：他們非常【高興】，立刻說要改航班多留一天，這樣週五就能和她共進晚餐。"
  },
  {
    "word": "venue",
    "pos": "n.",
    "cn_def": "（活動）場地；舉辦地點",
    "en_def": "the place where an event is held",
    "sentence": "A: Have you found a place for the year-end party yet, since the hotel we used last year is closed for repairs? B: I booked a new {{BLANK}} by the river that has a large hall, a stage for the band, and enough parking spaces for about two hundred cars.",
    "cn": "A：你找到尾牙的地點了嗎？我們去年用的飯店在整修停業。 B：我在河邊訂了一個新的【場地】，有大廳、樂團用的舞台，以及大約可停兩百輛車的停車位。"
  },
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "地點；位置",
    "en_def": "the place where something is",
    "sentence": "A: Why did the managers decide to hold the training workshop at the hotel instead of in our own meeting room? B: The hotel is in a convenient {{BLANK}} right next to the subway station, so staff from all three branch offices can get there quickly without driving or paying for parking.",
    "cn": "A：為什麼經理們決定在飯店舉辦培訓研習，而不是在我們自己的會議室？ B：那家飯店位在捷運站旁、交通便利的【位置】，所以三個分公司的員工都能快速抵達，不用開車或付停車費。"
  },
  {
    "word": "date",
    "pos": "n.",
    "cn_def": "日期",
    "en_def": "the day, month, and year when something happens",
    "sentence": "A: Have we decided when the welcome dinner for the new interns will be, because I need to print the invitation cards this week? B: The manager chose Friday the twelfth as the {{BLANK}}, but please check with the restaurant first to make sure they still have a private room available that evening.",
    "cn": "A：我們決定好新實習生歡迎晚宴的時間了嗎？因為我這週需要印邀請卡。 B：經理選了十二號星期五作為【日期】，但請先跟餐廳確認那天晚上他們還有包廂可以用。"
  },
  {
    "word": "time",
    "pos": "n.",
    "cn_def": "時間",
    "en_def": "the hour and minute when something happens",
    "sentence": "A: When should the guests arrive for the product launch, because the letter I'm writing doesn't say yet? B: Please tell them the doors open at six, but the starting {{BLANK}} for the main presentation is six-thirty, so they'll have half an hour to find their seats and have a drink.",
    "cn": "A：賓客應該什麼時候抵達產品發表會？因為我寫的信上還沒寫。 B：請告訴他們六點開放入場，但主要簡報的開始【時間】是六點半，所以他們有半小時可以找座位和喝點飲料。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "行程表；時間表",
    "en_def": "a plan that lists when things will happen",
    "sentence": "A: Could you send the visitors the full plan for their two days in Taipei, including the factory tour and meals? B: I'll email the {{BLANK}} this afternoon, and it will show exactly when each meeting starts, where lunch will be served, and who will drive them back to the hotel.",
    "cn": "A：你可以把訪客在台北兩天的完整計畫寄給他們嗎？包括工廠參觀和餐點。 B：我今天下午會寄出【行程表】，上面會清楚顯示每場會議何時開始、午餐在哪裡供應，以及誰會載他們回飯店。"
  },
  {
    "word": "program",
    "pos": "n.",
    "cn_def": "節目表；活動流程",
    "en_def": "a list of the activities at an event and their order",
    "sentence": "A: What will happen during the evening after the dinner is served, because some guests have asked me already? B: According to the {{BLANK}}, there will be a short speech from the chairman, an awards presentation for the best teams, and then live music until about ten o'clock.",
    "cn": "A：晚餐上完之後晚上會有什麼活動？因為有些賓客已經問我了。 B：根據【節目表】，董事長會發表簡短致詞，接著為最佳團隊頒獎，然後有現場音樂演奏到大約十點。"
  },
  {
    "word": "arrangement",
    "pos": "n.",
    "cn_def": "安排；準備",
    "en_def": "a plan or preparation made for something to happen",
    "sentence": "A: One of the guests coming to our banquet uses a wheelchair, so is there anything we should do before Friday? B: I've already made a special {{BLANK}} with the hotel, so they will prepare a ramp at the entrance and save a table near the door for him and his assistant.",
    "cn": "A：要來參加我們宴會的一位賓客坐輪椅，週五之前我們有什麼該做的嗎？ B：我已經和飯店做了特別的【安排】，所以他們會在入口準備斜坡，並在門口附近為他和他的助理保留一張桌子。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "籌辦；組織",
    "en_def": "to plan and arrange an event",
    "sentence": "A: Who is going to {{BLANK}} the company picnic this year, since Tom moved to the Shanghai office in the spring? B: Amy from human resources volunteered, and she has already chosen a park near the lake, ordered food, and planned some team games for the afternoon.",
    "cn": "A：既然湯姆春天調到上海辦公室了，今年誰要【籌辦】公司野餐？ B：人資部的艾美自願了，她已經選好湖邊的一座公園、訂了食物，還規劃了一些下午的團隊遊戲。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to make something ready",
    "sentence": "A: The clients from Korea will arrive in two hours, but the meeting room is still messy, and there's no food yet. B: Don't worry, I'll ask two interns to {{BLANK}} the room, set out some snacks and drinks, and test the projector so everything is ready before they come in.",
    "cn": "A：韓國客戶兩小時後就到了，但會議室還是很亂，也還沒有食物。 B：別擔心，我會請兩位實習生【準備】好會議室，擺上點心和飲料，並測試投影機，讓一切在他們進來前都就緒。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable because of a special day or success",
    "sentence": "A: Our team finally reached its sales goal for the year two weeks early, so what should we do on Friday? B: Let's {{BLANK}} with a nice lunch at the Italian restaurant downstairs, and I'll ask the manager if the company can pay for it as a thank-you for everyone.",
    "cn": "A：我們團隊終於提早兩週達成今年的業績目標了，那星期五我們該做什麼？ B：我們去樓下的義大利餐廳吃一頓好吃的午餐來【慶祝】吧，我會問經理公司能不能出錢，當作對大家的感謝。"
  },
  {
    "word": "enjoy",
    "pos": "v.",
    "cn_def": "享受；喜歡",
    "en_def": "to get pleasure from something",
    "sentence": "A: The dinner last night was wonderful, but did our visitors from the Tokyo office have a good time too? B: They loved it, and they said they hope to {{BLANK}} another evening like that with us when our team visits Japan next spring, so they asked for the name of the restaurant.",
    "cn": "A：昨晚的晚餐很棒，但我們東京辦公室來的訪客也玩得愉快嗎？ B：他們很喜歡，還說希望明年春天我們團隊去日本時，能再和我們【享受】一個那樣的夜晚，所以他們問了餐廳的名字。"
  },
  {
    "word": "refreshments",
    "pos": "n.",
    "cn_def": "茶點；點心飲料",
    "en_def": "light food and drinks served at an event",
    "sentence": "A: Will there be any food at the afternoon seminar, or should the participants bring their own snacks? B: Light {{BLANK}} such as coffee, tea, fruit, and small cakes will be served during the break, so nobody needs to bring anything, but lunch is not included.",
    "cn": "A：下午的研討會會提供食物嗎？還是參加者應該自己帶點心？ B：休息時間會供應咖啡、茶、水果和小蛋糕等簡單【茶點】，所以大家都不用帶東西，但不包含午餐。"
  },
  {
    "word": "dinner",
    "pos": "n.",
    "cn_def": "晚餐；晚宴",
    "en_def": "the main meal of the day, usually eaten in the evening",
    "sentence": "A: Where are we taking the investors on Wednesday night after they finish visiting the factory and the new office? B: We've booked a private room at the seafood restaurant near the harbor for {{BLANK}}, and the CEO will join us at seven to talk about next year's plans.",
    "cn": "A：投資人星期三參觀完工廠和新辦公室後，晚上我們要帶他們去哪裡？ B：我們在港口附近的海鮮餐廳訂了包廂吃【晚餐】，執行長七點會加入我們，談談明年的計畫。"
  },
  {
    "word": "lunch",
    "pos": "n.",
    "cn_def": "午餐",
    "en_def": "a meal eaten in the middle of the day",
    "sentence": "A: The training session starts at nine and ends at four, so will the trainees have time to eat in the middle of the day? B: Yes, there will be a one-hour break at noon, and the company will provide {{BLANK}} boxes in the meeting room, so nobody has to go outside in the rain.",
    "cn": "A：培訓課程九點開始、四點結束，那學員中午會有時間吃飯嗎？ B：會，中午有一小時的休息，公司會在會議室提供【午餐】便當，所以沒有人需要冒雨外出。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "serious and following official rules of dress and behavior",
    "sentence": "A: Should I wear jeans and a polo shirt to the awards banquet on Saturday, or is that too casual? B: The invitation says it's a {{BLANK}} event, so you should wear a suit and tie, because the chairman and many important clients will be sitting at the front tables.",
    "cn": "A：星期六的頒獎宴會我可以穿牛仔褲和polo衫嗎？還是那樣太隨便了？ B：邀請函上說是【正式】活動，所以你應該穿西裝打領帶，因為董事長和許多重要客戶會坐在前面的桌子。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的；輕鬆的",
    "en_def": "relaxed and friendly, not following strict rules",
    "sentence": "A: Do I need to prepare a speech or wear a suit for the team barbecue at the manager's house this weekend? B: No, it's a completely {{BLANK}} afternoon, so just wear something comfortable, bring a drink if you like, and relax with your coworkers and their families.",
    "cn": "A：這週末在經理家的團隊烤肉，我需要準備演講或穿西裝嗎？ B：不用，那是完全【非正式】的下午聚會，所以穿舒服一點就好，想的話帶瓶飲料，和同事以及他們的家人一起放鬆。"
  },
  {
    "word": "special",
    "pos": "adj.",
    "cn_def": "特別的",
    "en_def": "different from usual and more important",
    "sentence": "A: Why are you sending a handwritten card instead of an email to our oldest client this year? B: She has been working with us for twenty-five years, so we want to invite her to a {{BLANK}} dinner with the board of directors and thank her in a more personal way.",
    "cn": "A：今年你為什麼寄手寫卡片，而不是電子郵件給我們最老的客戶？ B：她和我們合作了二十五年，所以我們想邀請她參加和董事會共進的【特別】晚宴，用更個人的方式感謝她。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "easy to remember because it is special or enjoyable",
    "sentence": "A: What do you want the guests to remember most about our company's fiftieth anniversary party next month? B: We want it to be a {{BLANK}} evening for everyone, so we've planned a short video about our history, a live band, and a surprise fireworks show over the river.",
    "cn": "A：下個月公司五十週年派對，你最希望賓客記得什麼？ B：我們希望那會是讓每個人【難忘】的夜晚，所以我們規劃了一段關於公司歷史的短片、現場樂團，以及河上的驚喜煙火秀。"
  },
  {
    "word": "kindly",
    "pos": "adv.",
    "cn_def": "（禮貌請求）敬請；懇請",
    "en_def": "used in polite requests to mean please",
    "sentence": "A: How should I end the invitation letter to the hotel managers so that they reply before the deadline? B: Write that we {{BLANK}} ask them to confirm their attendance by May tenth, and add the phone number and email address of our event coordinator at the bottom of the page.",
    "cn": "A：我應該怎麼結束給飯店經理們的邀請信，讓他們在截止日前回覆？ B：寫上我們【懇請】他們在五月十日前確認是否出席，並在頁面底部附上活動協調人的電話和電子郵件。"
  },
  {
    "word": "please",
    "pos": "adv.",
    "cn_def": "請",
    "en_def": "a polite word used when asking for something",
    "sentence": "A: What should the last line of the invitation say, since we need to know how many people will come to the banquet? B: Let's write, 'Could you {{BLANK}} let us know by Friday whether you can attend,' and include a small reply card with a stamped envelope to make it easy for them.",
    "cn": "A：既然我們需要知道有多少人會來參加宴會，邀請函的最後一句應該寫什麼？ B：我們寫「能否【請】您在週五前告知是否能出席」，並附上一張回覆卡和貼好郵票的信封，讓他們方便回覆。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認",
    "en_def": "to say that something is true or will definitely happen",
    "sentence": "A: The restaurant called and asked how many seats we need for the client dinner on Thursday night. B: Please wait until noon, because I'm still waiting for two managers from Osaka to {{BLANK}} whether they can come, and then I'll give the restaurant the final number.",
    "cn": "A：餐廳打電話來問我們星期四晚上的客戶晚宴需要多少個座位。 B：請等到中午，因為我還在等大阪的兩位經理【確認】他們能不能來，然後我會告訴餐廳最後的人數。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆；答覆",
    "en_def": "to answer someone by letter, email, or phone",
    "sentence": "A: Has the director of the Hong Kong office answered our invitation to the opening of the new showroom? B: Not yet, but his assistant said he would {{BLANK}} by Friday after he checks his travel plans, so I'll call her again on Monday if we haven't heard anything.",
    "cn": "A：香港辦公室主任對我們新展示廳開幕的邀請有答覆了嗎？ B：還沒有，但他的助理說他確認完出差計畫後，會在週五前【回覆】，所以如果我們還沒消息，我星期一會再打給她。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應；回覆",
    "en_def": "to give an answer to a message or question",
    "sentence": "A: Only half of the people we invited to the networking evening have answered so far, and it's next Thursday. B: Let's send a polite reminder email today asking everyone else to {{BLANK}} by Monday, because the caterer needs the final number of guests three days before the event.",
    "cn": "A：我們邀請參加交流晚會的人到目前只有一半回覆，而活動就在下週四。 B：我們今天寄一封禮貌的提醒信，請其他人在星期一前【回應】，因為外燴業者需要在活動前三天知道最後的賓客人數。"
  },
  {
    "word": "look forward to",
    "pos": "v.phr.",
    "cn_def": "期待；盼望",
    "en_def": "to feel happy and excited about something that will happen",
    "sentence": "A: How should I finish my email to the new supplier after inviting them to visit our factory next month? B: You could say that we {{BLANK}} meeting their team in person, and then thank them again for their excellent service and quick deliveries during the past year.",
    "cn": "A：在邀請新供應商下個月參觀我們工廠之後，我該怎麼結束這封電子郵件？ B：你可以說我們【期待】與他們的團隊見面，然後再次感謝他們過去一年的優質服務和快速交貨。"
  },
  {
    "word": "hope",
    "pos": "v.",
    "cn_def": "希望",
    "en_def": "to want something to happen and think it is possible",
    "sentence": "A: The weather report says it might rain on Saturday, and our company picnic is planned for the park by the river. B: I {{BLANK}} the rain stops by noon, but just in case, I've already reserved the covered area near the playground so nobody gets wet during lunch.",
    "cn": "A：氣象預報說星期六可能會下雨，而我們的公司野餐預定在河邊公園舉行。 B：我【希望】雨在中午前停，但以防萬一，我已經預訂了遊樂場附近有遮蔽的區域，這樣午餐時沒有人會淋濕。"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "in a short time from now",
    "sentence": "A: When will the invitations for the year-end banquet be sent out, because some staff are already asking about the date? B: They will be ready very {{BLANK}}, probably by tomorrow afternoon, because the printing shop promised to finish the cards and envelopes this morning.",
    "cn": "A：年終宴會的邀請函什麼時候會寄出？因為有些員工已經在問日期了。 B：很【快】就會準備好，大概明天下午，因為印刷店答應今天早上完成卡片和信封。"
  },
  {
    "word": "sincerely",
    "pos": "adv.",
    "cn_def": "誠摯地；（書信結尾）敬上",
    "en_def": "in a true and honest way; used to end a formal letter",
    "sentence": "A: Should I end this formal invitation to the bank's president with 'Best wishes' or something more traditional? B: For a letter like this, it's better to write 'Yours {{BLANK}},' and then sign your full name and title, because that sounds more polite and professional to senior business people.",
    "cn": "A：這封給銀行總裁的正式邀請函，我應該用「祝好」結尾，還是更傳統一點的？ B：像這樣的信，最好寫「謹此【敬上】」，然後簽上你的全名和職稱，因為對資深商界人士來說，這聽起來比較有禮貌也比較專業。"
  },
  {
    "word": "warm regards",
    "pos": "phr.",
    "cn_def": "誠摯問候（信件結尾語）",
    "en_def": "a friendly way to end a letter or email",
    "sentence": "A: What closing should I use for the friendly invitation I'm sending to our long-time partners in Vietnam? B: Since you know them well, you can end with '{{BLANK}},' and then your first name, because it sounds kind and friendly but is still polite enough for a business letter.",
    "cn": "A：我要寄給越南長期合作夥伴的友善邀請信，應該用什麼結尾？ B：既然你和他們很熟，可以用「【誠摯問候】」再加上你的名字，因為這聽起來親切友善，但對商業信件來說仍然夠有禮貌。"
  }
];

const MCQS = [
  {
    "q": "Each _____ at the awards banquet will receive a name card at the entrance. The hotel staff will then show them to their tables.",
    "options": [
      "guest",
      "venue",
      "schedule",
      "ceremony"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our Tainan branch has agreed to _____ the annual sales meeting this year. They will provide the meeting room, meals, and hotel discounts.",
    "options": [
      "reply",
      "respond",
      "host",
      "hope"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The opening _____ for the new factory will begin with a ribbon cutting. The mayor will also give a short speech to the workers.",
    "options": [
      "refreshments",
      "ceremony",
      "location",
      "honor"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The staff picnic is just an informal _____ for employees and their families. Nobody needs to prepare a speech or wear a suit.",
    "options": [
      "venue",
      "schedule",
      "pleasure",
      "gathering"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Signing the contract with our biggest partner is an important _____ for the company. We will celebrate it with a dinner at a five-star hotel.",
    "options": [
      "location",
      "occasion",
      "venue",
      "refreshments"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "All department heads are expected to _____ the board meeting on Monday morning. Please tell the secretary if you cannot be there.",
    "options": [
      "attend",
      "celebrate",
      "reply",
      "hope"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "More than two hundred employees signed up to _____ in the charity bike ride last weekend. Together they raised over one million dollars for the hospital.",
    "options": [
      "attend",
      "confirm",
      "host",
      "participate"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "It is a great _____ to welcome the president of the bank to our ceremony. We thank him for his many years of support.",
    "options": [
      "program",
      "location",
      "honor",
      "venue"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "We would like to thank you for your hard work this year. It gives us great _____ to invite you to our year-end dinner.",
    "options": [
      "pleasure",
      "arrangement",
      "schedule",
      "gathering"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The manager was _____ to hear that every client had accepted the invitation. She immediately thanked the team for writing such friendly letters.",
    "options": [
      "informal",
      "formal",
      "delighted",
      "memorable"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The hotel ballroom was too small for three hundred guests. We had to find a larger _____ for the product launch party.",
    "options": [
      "honor",
      "venue",
      "pleasure",
      "program"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new conference center is in a convenient _____ near the train station. Visitors from other cities can walk there in five minutes.",
    "options": [
      "ceremony",
      "occasion",
      "pleasure",
      "location"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The visitors received a detailed _____ for their three-day trip. It showed the times of every meeting, meal, and factory tour.",
    "options": [
      "venue",
      "schedule",
      "honor",
      "gathering"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "According to the evening _____, the chairman will speak first. After that, the awards will be presented and a band will play.",
    "options": [
      "program",
      "location",
      "pleasure",
      "venue"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Our assistant made a special _____ with the restaurant for a guest who does not eat meat. The chef will prepare a vegetarian meal for him.",
    "options": [
      "ceremony",
      "location",
      "celebration",
      "arrangement"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Ms. Wang has volunteered to _____ this year's company trip to Hualien. She will book the bus, the hotel, and all the meals.",
    "options": [
      "respond",
      "reply",
      "organize",
      "hope"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The interns were asked to _____ the meeting room before the clients arrived. They set out water, snacks, and copies of the agenda.",
    "options": [
      "prepare",
      "celebrate",
      "respond",
      "reply"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The team reached its sales goal two weeks early. To _____, the manager took everyone out for a nice lunch on Friday.",
    "options": [
      "confirm",
      "organize",
      "celebrate",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Light _____ such as coffee, tea, and cookies will be served during the break. Lunch, however, is not included in the seminar fee.",
    "options": [
      "programs",
      "refreshments",
      "venues",
      "occasions"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The invitation says the awards dinner is a _____ event. Men should wear a suit and tie, and women should wear an evening dress.",
    "options": [
      "informal",
      "delighted",
      "memorable",
      "formal"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The team barbecue is very _____, so you can wear shorts and sandals. Just bring your appetite and maybe a drink to share.",
    "options": [
      "formal",
      "informal",
      "delighted",
      "special"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The fireworks show at the end of the party made it a truly _____ night. Many guests were still talking about it a week later.",
    "options": [
      "memorable",
      "informal",
      "delighted",
      "formal"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Guests are _____ asked to arrive fifteen minutes early for security checks. Please bring this invitation card with you to the front gate.",
    "options": [
      "soon",
      "sincerely",
      "please",
      "kindly"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "Please _____ your attendance by calling our office before May 10. We need to know the final number of guests for the caterer.",
    "options": [
      "celebrate",
      "enjoy",
      "confirm",
      "host"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "We have not heard from the Osaka office about the dinner yet. Could you call them and ask them to _____ by Friday?",
    "options": [
      "reply",
      "organize",
      "prepare",
      "host"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "Nearly half of the invited clients have failed to _____ to our letter. We will send them a polite reminder email this afternoon.",
    "options": [
      "host",
      "join",
      "respond",
      "celebrate"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "Thank you for accepting our invitation to the opening ceremony. We _____ meeting you and your team in person next month.",
    "options": [
      "hope",
      "look forward to",
      "confirm",
      "respond"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "At the end of a formal letter, many writers use 'Yours _____' as the closing. They then sign their full name and job title below it.",
    "options": [
      "kindly",
      "soon",
      "please",
      "sincerely"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The company held a big _____ for its fiftieth anniversary last Saturday. Over five hundred employees and guests enjoyed food, music, and fireworks.",
    "options": [
      "location",
      "celebration",
      "arrangement",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The product launch was the biggest _____ in the company's history. More than one thousand visitors came to see the new phones.",
    "options": [
      "event",
      "honor",
      "pleasure",
      "arrangement"
    ],
    "answer": 0,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "guest": {
    "pos": "n.",
    "en_def": "a person who is invited to an event or a home",
    "cn_def": "客人；賓客"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and receive the people who come",
    "cn_def": "主辦；招待"
  },
  "event": {
    "pos": "n.",
    "en_def": "a planned public or social occasion",
    "cn_def": "活動；事件"
  },
  "celebration": {
    "pos": "n.",
    "en_def": "a special event held to enjoy a happy day or success",
    "cn_def": "慶祝活動；慶典"
  },
  "party": {
    "pos": "n.",
    "en_def": "a social event where people eat, drink, and have fun together",
    "cn_def": "派對；聚會"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal event held for a special purpose",
    "cn_def": "典禮；儀式"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people, often a friendly or social one",
    "cn_def": "聚會；集會"
  },
  "occasion": {
    "pos": "n.",
    "en_def": "a special time or event",
    "cn_def": "場合；特殊時刻"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event, meeting, or class",
    "cn_def": "出席；參加"
  },
  "join": {
    "pos": "v.",
    "en_def": "to do something together with other people",
    "cn_def": "加入；和……一起"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity",
    "cn_def": "參與；參加"
  },
  "welcome": {
    "pos": "v.",
    "en_def": "to greet someone in a friendly way when they arrive",
    "cn_def": "迎接；歡迎"
  },
  "honor": {
    "pos": "n.",
    "en_def": "something that makes you feel proud and respected",
    "cn_def": "榮幸；榮譽"
  },
  "pleasure": {
    "pos": "n.",
    "en_def": "a feeling of happiness or enjoyment",
    "cn_def": "樂意；愉快；榮幸"
  },
  "delighted": {
    "pos": "adj.",
    "en_def": "very pleased and happy",
    "cn_def": "非常高興的"
  },
  "venue": {
    "pos": "n.",
    "en_def": "the place where an event is held",
    "cn_def": "（活動）場地；舉辦地點"
  },
  "location": {
    "pos": "n.",
    "en_def": "the place where something is",
    "cn_def": "地點；位置"
  },
  "date": {
    "pos": "n.",
    "en_def": "the day, month, and year when something happens",
    "cn_def": "日期"
  },
  "time": {
    "pos": "n.",
    "en_def": "the hour and minute when something happens",
    "cn_def": "時間"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists when things will happen",
    "cn_def": "行程表；時間表"
  },
  "program": {
    "pos": "n.",
    "en_def": "a list of the activities at an event and their order",
    "cn_def": "節目表；活動流程"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "a plan or preparation made for something to happen",
    "cn_def": "安排；準備"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to plan and arrange an event",
    "cn_def": "籌辦；組織"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to make something ready",
    "cn_def": "準備"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable because of a special day or success",
    "cn_def": "慶祝"
  },
  "enjoy": {
    "pos": "v.",
    "en_def": "to get pleasure from something",
    "cn_def": "享受；喜歡"
  },
  "refreshments": {
    "pos": "n.",
    "en_def": "light food and drinks served at an event",
    "cn_def": "茶點；點心飲料"
  },
  "dinner": {
    "pos": "n.",
    "en_def": "the main meal of the day, usually eaten in the evening",
    "cn_def": "晚餐；晚宴"
  },
  "lunch": {
    "pos": "n.",
    "en_def": "a meal eaten in the middle of the day",
    "cn_def": "午餐"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and following official rules of dress and behavior",
    "cn_def": "正式的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly, not following strict rules",
    "cn_def": "非正式的；輕鬆的"
  },
  "special": {
    "pos": "adj.",
    "en_def": "different from usual and more important",
    "cn_def": "特別的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "easy to remember because it is special or enjoyable",
    "cn_def": "難忘的"
  },
  "kindly": {
    "pos": "adv.",
    "en_def": "used in polite requests to mean please",
    "cn_def": "（禮貌請求）敬請；懇請"
  },
  "please": {
    "pos": "adv.",
    "en_def": "a polite word used when asking for something",
    "cn_def": "請"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say that something is true or will definitely happen",
    "cn_def": "確認"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer someone by letter, email, or phone",
    "cn_def": "回覆；答覆"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to give an answer to a message or question",
    "cn_def": "回應；回覆"
  },
  "look forward to": {
    "pos": "v.phr.",
    "en_def": "to feel happy and excited about something that will happen",
    "cn_def": "期待；盼望"
  },
  "hope": {
    "pos": "v.",
    "en_def": "to want something to happen and think it is possible",
    "cn_def": "希望"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "in a short time from now",
    "cn_def": "很快；不久"
  },
  "sincerely": {
    "pos": "adv.",
    "en_def": "in a true and honest way; used to end a formal letter",
    "cn_def": "誠摯地；（書信結尾）敬上"
  },
  "warm regards": {
    "pos": "phr.",
    "en_def": "a friendly way to end a letter or email",
    "cn_def": "誠摯問候（信件結尾語）"
  }
};

const EXTRA_GLOSSES = {};
