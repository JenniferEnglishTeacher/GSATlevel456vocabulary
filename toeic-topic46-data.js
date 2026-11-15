// Topic 46 Quiz Data: Celebration 慶祝
// Source word list: https://www.examword.com/group-topic/celebration — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T46 - Celebration 慶祝",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable because of a special event",
    "sentence": "A: Our sales team finally reached its yearly target last Friday, so how is the manager planning to thank everyone for all the extra hours? B: She has booked a private room at an Italian restaurant downtown, and we will {{BLANK}} the success with dinner and a short speech next Thursday evening.",
    "cn": "A：我們銷售團隊上週五終於達成年度目標，經理打算怎麼感謝大家加了那麼多班？ B：她在市中心一家義大利餐廳訂了包廂，下週四晚上我們會用晚餐和簡短致詞來【慶祝】這次的成功。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；節日活動",
    "en_def": "a special event or time with performances, food, or celebrations",
    "sentence": "A: The hotels in the city center are almost fully booked for the second week of October, so do you know why so many visitors are coming? B: The annual food {{BLANK}} is taking place along the river that week, and thousands of tourists usually arrive to try dishes from over fifty local restaurants.",
    "cn": "A：市中心的飯店十月第二週幾乎都客滿了，你知道為什麼有這麼多遊客要來嗎？ B：那週河岸邊會舉辦一年一度的美食【節】，通常有成千上萬的遊客前來品嚐五十多家在地餐廳的料理。"
  },
  {
    "word": "party",
    "pos": "n.",
    "cn_def": "派對",
    "en_def": "a social event where people meet to eat, drink, and have fun",
    "sentence": "A: Mr. Chen is retiring at the end of this month after working here for thirty years, so is the department doing anything special for him? B: Yes, we are organizing a surprise farewell {{BLANK}} in the staff lounge on his last afternoon, and his family has secretly agreed to join us.",
    "cn": "A：陳先生在這裡工作了三十年，這個月底就要退休了，部門有沒有為他準備什麼特別的活動？ B：有，我們正在籌辦一場驚喜歡送【派對】，就在他最後一天下午於員工休息室舉行，他的家人也已經偷偷答應要參加。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal public event held for a special purpose",
    "sentence": "A: The new factory in Taichung is ready to start production next month, so will the company hold any official event to mark the opening? B: The CEO will cut a red ribbon at the opening {{BLANK}} on Monday morning, and several local officials and reporters have been invited to watch.",
    "cn": "A：台中的新工廠下個月就要開始生產了，公司會舉辦任何正式活動來紀念開幕嗎？ B：執行長星期一早上會在開幕【典禮】上剪綵，也邀請了幾位地方官員和記者到場觀禮。"
  },
  {
    "word": "occasion",
    "pos": "n.",
    "cn_def": "場合；特殊時刻",
    "en_def": "a special event or an important time",
    "sentence": "A: I want to buy a nice pen for my boss because she just got promoted to regional director, but do you think a present like that is too expensive? B: Not at all, because a promotion is an important {{BLANK}}, and a quality pen is something she will use at meetings every day.",
    "cn": "A：我想買一支好筆送老闆，因為她剛升任區域總監，但你覺得這樣的禮物會不會太貴？ B：一點也不會，因為升遷是很重要的【時刻】，而且一支好筆是她每天開會都會用到的東西。"
  },
  {
    "word": "anniversary",
    "pos": "n.",
    "cn_def": "週年紀念",
    "en_def": "the date each year when an important event happened in the past",
    "sentence": "A: Why is the lobby full of balloons and old photographs of the original office building this morning? B: Our company was founded exactly twenty years ago today, so management is marking the {{BLANK}} with a photo exhibition and a free lunch for every employee in the building.",
    "cn": "A：今天早上大廳為什麼擺滿了氣球和原本辦公大樓的老照片？ B：我們公司正好是二十年前的今天成立的，所以管理階層用攝影展和為大樓裡每位員工準備的免費午餐來紀念這個【週年紀念日】。"
  },
  {
    "word": "birthday",
    "pos": "n.",
    "cn_def": "生日",
    "en_def": "the day each year when someone was born",
    "sentence": "A: Everyone in the accounting office signed a big card this morning, so what is the reason for it? B: It is Linda's fortieth {{BLANK}} today, and while she is at a meeting with the auditors, we are going to hide a chocolate cake in the kitchen to surprise her later.",
    "cn": "A：今天早上會計辦公室每個人都在一張大卡片上簽名，是什麼原因呢？ B：今天是琳達的四十歲【生日】，趁她在和查帳人員開會時，我們要把一個巧克力蛋糕藏在茶水間，晚點給她驚喜。"
  },
  {
    "word": "wedding",
    "pos": "n.",
    "cn_def": "婚禮",
    "en_def": "a ceremony at which two people get married",
    "sentence": "A: Could you cover my shifts at the front desk next Friday and Saturday, because I need to fly to Kaohsiung for a family event? B: Sure, I remember you mentioned that your younger sister is getting married, so please have a great time at the {{BLANK}} and send my congratulations to the happy couple.",
    "cn": "A：你下週五和週六可以幫我代櫃檯的班嗎？因為我要飛去高雄參加家族活動。 B：當然，我記得你提過你妹妹要結婚了，祝你在【婚禮】上玩得開心，也幫我向這對新人道賀。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會",
    "en_def": "a meeting of people for a social purpose",
    "sentence": "A: The new employees from our overseas branches seem a little lonely in the city, so how can we help them make friends quickly? B: The HR department is planning a casual {{BLANK}} on the rooftop next Friday evening, with snacks, drinks, and simple games so that people can talk freely.",
    "cn": "A：海外分公司來的新員工在這城市好像有點孤單，我們要怎麼幫他們快點交到朋友？ B：人資部正計畫下週五晚上在頂樓辦一場輕鬆的【聚會】，有點心、飲料和簡單遊戲，讓大家可以自在聊天。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief passed down over many years",
    "sentence": "A: Why does everyone in your office eat a big lunch in the meeting room on the last working day of every year? B: It is a long {{BLANK}} that started when the founder ran the company, and even though we now have three hundred staff, we still keep it to thank everyone.",
    "cn": "A：為什麼你們辦公室每年最後一個上班日大家都在會議室吃大餐？ B：這是創辦人經營公司時就開始的悠久【傳統】，雖然我們現在有三百名員工，還是保留下來感謝大家。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗；風俗",
    "en_def": "a usual way of behaving in a society or group",
    "sentence": "A: I am visiting our partners in Seoul next week for the first time, so is there anything I should know before the business dinner? B: It is a local {{BLANK}} to wait until the oldest person at the table starts eating, so be patient and follow what the others do during the meal.",
    "cn": "A：我下週第一次去首爾拜訪合作夥伴，商務晚宴之前有什麼該知道的嗎？ B：當地的【習俗】是要等桌上最年長的人先開動，所以用餐時要有耐心，跟著其他人的做法就對了。"
  },
  {
    "word": "toast",
    "pos": "n.",
    "cn_def": "敬酒；祝酒",
    "en_def": "the act of raising glasses and drinking to wish someone success or happiness",
    "sentence": "A: The managing director just stood up and lifted her glass at the end of the annual dinner, so what is she going to do? B: She is about to propose a {{BLANK}} to the whole sales team for their excellent results, so pick up your glass and get ready to drink with everyone.",
    "cn": "A：常務董事在年度晚宴尾聲站起來舉起酒杯，她要做什麼？ B：她要為整個業務團隊的優異成績提議【敬酒】，所以拿起你的杯子，準備和大家一起乾杯。"
  },
  {
    "word": "cheer",
    "pos": "v.",
    "cn_def": "歡呼；喝采",
    "en_def": "to shout loudly to show you are happy or to support someone",
    "sentence": "A: What was all that noise coming from the conference room during the lunch break today? B: The whole marketing department gathered to watch the live announcement of the design awards, and everyone started to {{BLANK}} loudly when our team's poster won first prize.",
    "cn": "A：今天午休時會議室傳來的那些吵鬧聲是什麼？ B：整個行銷部聚在一起看設計獎的直播頒獎，當我們團隊的海報拿下首獎時，大家都大聲【歡呼】起來。"
  },
  {
    "word": "joyful",
    "pos": "adj.",
    "cn_def": "歡樂的；喜悅的",
    "en_def": "very happy; full of joy",
    "sentence": "A: How did the staff react when the CEO announced that everyone would get an extra week of paid holiday this year? B: The atmosphere in the hall was very {{BLANK}}, with people laughing, hugging their coworkers, and immediately talking about where they wanted to travel in the summer.",
    "cn": "A：執行長宣布今年大家都多一週帶薪假時，員工反應如何？ B：大廳裡的氣氛非常【歡樂】，大家笑著擁抱同事，馬上就聊起夏天想去哪裡旅行。"
  },
  {
    "word": "festive",
    "pos": "adj.",
    "cn_def": "節慶的；喜氣洋洋的",
    "en_def": "bright and cheerful because of a holiday or celebration",
    "sentence": "A: The department store downtown looks completely different this December, so what has the management changed? B: They hung red lanterns and thousands of small lights across the entrance, and they play holiday songs all day, so the whole building feels really {{BLANK}} for shoppers.",
    "cn": "A：市中心那家百貨公司今年十二月看起來完全不一樣，管理部門改了什麼？ B：他們在入口處掛了紅燈籠和成千上萬顆小燈，還整天播放節日歌曲，讓整棟建築對購物者來說充滿【節慶氣氛】。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；布置",
    "en_def": "to make a place look nicer by adding pretty things to it",
    "sentence": "A: The holiday party starts at six o'clock in the main hall, so what should the volunteers do after lunch? B: Please {{BLANK}} the walls with paper stars and balloons, set up the tables near the windows, and check that the speakers work before the guests arrive.",
    "cn": "A：節日派對六點在大廳開始，志工們午餐後該做什麼？ B：請用紙星星和氣球【裝飾】牆面，把桌子擺在窗邊，並在賓客抵達前確認喇叭正常運作。"
  },
  {
    "word": "decoration",
    "pos": "n.",
    "cn_def": "裝飾品",
    "en_def": "a thing used to make something look more attractive",
    "sentence": "A: The cleaning staff asked me what to do with all the paper lanterns and lights from last night's company party, so do you have any idea? B: Please put every {{BLANK}} back into the large boxes in the storage room, because we plan to use them again at next year's event.",
    "cn": "A：清潔人員問我昨晚公司派對留下的紙燈籠和燈飾要怎麼處理，你有什麼想法嗎？ B：請把每一件【裝飾品】放回儲藏室的大箱子裡，因為我們打算明年的活動再用。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "pleasant sounds made by voices or instruments",
    "sentence": "A: The guests at the hotel's anniversary dinner seemed bored during the first hour, so how can we make the evening more lively? B: Let's ask the jazz band to start playing some cheerful {{BLANK}} near the dance floor, because people usually relax and talk more once they hear a good rhythm.",
    "cn": "A：飯店週年晚宴前一小時賓客似乎很無聊，我們怎麼讓晚上更熱鬧？ B：請爵士樂團在舞池附近開始演奏一些歡快的【音樂】吧，因為人們聽到好節奏通常就會放鬆、聊得更多。"
  },
  {
    "word": "dance",
    "pos": "v.",
    "cn_def": "跳舞",
    "en_def": "to move your body to music",
    "sentence": "A: Is the year-end banquet just a formal dinner, or will there be some activities after the speeches are finished? B: After dessert, the lights will go down and a DJ will play popular songs, so anyone who wants to {{BLANK}} can join their coworkers on the floor until midnight.",
    "cn": "A：尾牙只是正式晚餐嗎？還是致詞結束後會有些活動？ B：甜點之後燈光會調暗，DJ會播放流行歌曲，想【跳舞】的人可以和同事一起到舞池直到午夜。"
  },
  {
    "word": "gift",
    "pos": "n.",
    "cn_def": "禮物",
    "en_def": "something you give to someone, often on a special day",
    "sentence": "A: Our biggest client, Ms. Tanaka, is celebrating her company's tenth year in business, so what should we send to her office? B: I think a basket of high-quality Taiwanese tea would be a thoughtful {{BLANK}}, and we can attach a handwritten card from our president as well.",
    "cn": "A：我們最大的客戶田中女士的公司正在慶祝創立十週年，我們該送什麼到她辦公室？ B：我覺得一籃高品質的台灣茶會是一份貼心的【禮物】，我們也可以附上總裁的親筆卡片。"
  },
  {
    "word": "cake",
    "pos": "n.",
    "cn_def": "蛋糕",
    "en_def": "a sweet baked food made from flour, sugar, and eggs",
    "sentence": "A: We are holding a small celebration for the team's tenth project this afternoon, so have you ordered something sweet for everyone? B: Yes, the bakery across the street is making a large strawberry {{BLANK}} with our company logo on top, and they will deliver it at three o'clock.",
    "cn": "A：今天下午我們要為團隊第十個專案辦個小慶祝，你有幫大家訂甜點嗎？ B：有，對街的麵包店正在做一個上面有公司標誌的大草莓【蛋糕】，三點會送來。"
  },
  {
    "word": "fireworks",
    "pos": "n.",
    "cn_def": "煙火",
    "en_def": "colorful explosions in the sky used for celebrations",
    "sentence": "A: Why are so many people waiting outside the office buildings near Taipei 101 at almost midnight on December 31st? B: They are hoping to get a good view of the famous New Year's {{BLANK}}, which light up the sky for several minutes and are shown live on TV around the world.",
    "cn": "A：為什麼十二月三十一日快午夜時，台北101附近的辦公大樓外面有這麼多人在等？ B：他們希望能清楚看到著名的跨年【煙火】，煙火會照亮天空好幾分鐘，並在全世界的電視上現場直播。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群",
    "en_def": "a large number of people together in one place",
    "sentence": "A: Should we drive to the stadium for the city's victory parade tomorrow, or will it be difficult to find a parking space? B: The news says a huge {{BLANK}} of about fifty thousand fans is expected, so taking the subway early in the morning is definitely the safer and faster choice.",
    "cn": "A：明天市區的勝利遊行我們要開車去體育場嗎？還是會很難找到停車位？ B：新聞說預計會有約五萬名球迷的龐大【人群】，所以一早搭捷運絕對是比較安全又快速的選擇。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone to come to an event",
    "sentence": "A: The company is opening its new branch in Hsinchu next month, so who should we ask to attend the opening event? B: We should {{BLANK}} our main suppliers, a few important customers, and the local reporters, and we need to mail the cards at least three weeks in advance.",
    "cn": "A：公司下個月要在新竹開新分店，開幕活動我們該請誰出席？ B：我們應該【邀請】主要供應商、幾位重要客戶和地方記者，而且至少要提前三週寄出卡片。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "客人；賓客",
    "en_def": "a person who is invited to an event or a home",
    "sentence": "A: How many chairs should I set up in the ballroom for the award dinner on Saturday night? B: According to the final list from the events team, two hundred and twenty people have replied, and every {{BLANK}} will receive a name card, so please prepare ten extra seats for any last-minute visitors as well.",
    "cn": "A：週六晚上的頒獎晚宴，我在宴會廳要擺多少張椅子？ B：根據活動團隊的最終名單，共有兩百二十人回覆，每位【賓客】都會拿到名牌，所以也請多準備十個座位給臨時來的訪客。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；招待",
    "en_def": "to organize an event and welcome the people who come",
    "sentence": "A: Our department won the best customer service award this year, so where will the celebration dinner take place? B: The general manager has offered to {{BLANK}} the dinner at her house in Yangmingshan, and she will even hire a chef to cook for the whole team that night.",
    "cn": "A：我們部門今年拿到最佳客服獎，慶功晚宴會在哪裡舉行？ B：總經理主動提議在她陽明山的家裡【主辦】晚宴，她甚至會請一位廚師當晚為整個團隊下廚。"
  },
  {
    "word": "enjoy",
    "pos": "v.",
    "cn_def": "享受；喜愛",
    "en_def": "to get pleasure from something",
    "sentence": "A: You took the new interns to the night market after their first week at work, so how did they like it? B: They seemed to {{BLANK}} the evening very much, because they tried a lot of local snacks, played some games, and kept taking photos until nearly eleven o'clock.",
    "cn": "A：實習生第一週上班後你帶他們去夜市，他們覺得怎麼樣？ B：他們似乎非常【享受】那個晚上，因為吃了很多在地小吃、玩了一些遊戲，還一直拍照到快十一點。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "special and easy to remember",
    "sentence": "A: The customers who joined our boat tour for the company's anniversary sent many thank-you emails, so what did they like most? B: Many of them said it was a {{BLANK}} trip, because the sunset over the harbor was beautiful and the staff served fresh seafood on the deck.",
    "cn": "A：參加我們公司週年遊船行程的客戶寄來很多感謝信，他們最喜歡什麼？ B：很多人說那是一趟【難忘的】旅程，因為港口的夕陽很美，員工還在甲板上提供新鮮海鮮。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起；在一起",
    "en_def": "with each other; in the same place",
    "sentence": "A: The team has been working remotely for almost a year, so how can we improve communication between the members? B: I suggest that we bring everyone {{BLANK}} for a weekend trip to Hualien, where they can share meals, go hiking, and get to know each other better.",
    "cn": "A：團隊遠距工作快一年了，我們要怎麼改善成員之間的溝通？ B：我建議把大家聚集【在一起】去花蓮週末旅遊，讓他們可以共享餐點、健行，彼此更加了解。"
  }
];

const MCQS = [
  {
    "q": "The staff will _____ the opening of the new branch with a lunch party. Everyone in the company is invited to join.",
    "options": [
      "cheer",
      "dance",
      "celebrate",
      "decorate"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The city holds a music _____ every summer in the riverside park. More than fifty bands perform over three days.",
    "options": [
      "toast",
      "custom",
      "gift",
      "festival"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "We are throwing a farewell _____ for Ms. Lin on Friday afternoon. Please sign the card on her desk before then.",
    "options": [
      "crowd",
      "party",
      "custom",
      "fireworks"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The award _____ will begin at seven in the main hall. Winners must arrive thirty minutes early for photos.",
    "options": [
      "ceremony",
      "gift",
      "cake",
      "custom"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Please wear a suit to the dinner tonight because it is a formal _____. The chairman and several clients will attend.",
    "options": [
      "cake",
      "music",
      "crowd",
      "occasion"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The hotel offers a free room upgrade to couples celebrating their wedding _____. The special offer ends next month.",
    "options": [
      "anniversary",
      "toast",
      "crowd",
      "decoration"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The office sent flowers to Mr. Park on his sixtieth _____. He was very surprised when the delivery arrived.",
    "options": [
      "crowd",
      "custom",
      "birthday",
      "festival"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "My cousin's _____ will be held in a garden beside the lake. About one hundred guests are expected to come.",
    "options": [
      "toast",
      "wedding",
      "music",
      "gift"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The alumni association organizes a small _____ every spring. Former students meet to share news about their careers.",
    "options": [
      "cake",
      "toast",
      "gathering",
      "decoration"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Giving red envelopes during Lunar New Year is an old _____ in Taiwan. Many companies also give them to employees.",
    "options": [
      "crowd",
      "tradition",
      "toast",
      "cake"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "In Japan, it is a common _____ to bow when you greet business partners. Visitors should learn this before the trip.",
    "options": [
      "custom",
      "gift",
      "crowd",
      "cake"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "At the end of dinner, the president raised her glass and made a _____ to the new partners. Everyone stood up and drank.",
    "options": [
      "crowd",
      "decoration",
      "festival",
      "toast"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Fans began to _____ loudly when the local team scored the winning goal. The noise could be heard across the city.",
    "options": [
      "decorate",
      "invite",
      "cheer",
      "host"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The children's faces were _____ as they opened their presents. Their parents laughed and took many photos of them.",
    "options": [
      "festive",
      "joyful",
      "memorable",
      "crowded"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The streets look _____ in December, with lights and red lanterns everywhere. Shops stay open late for holiday shoppers.",
    "options": [
      "memorable",
      "quiet",
      "joyful",
      "festive"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Volunteers will _____ the lobby with flowers and ribbons before the ceremony. The work should be finished by noon.",
    "options": [
      "decorate",
      "cheer",
      "dance",
      "enjoy"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The tall tree in the lobby has a gold star as its top _____. The staff put it up last Monday morning.",
    "options": [
      "crowd",
      "decoration",
      "custom",
      "occasion"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The restaurant plays soft piano _____ during dinner every night. Many customers say it helps them relax after work.",
    "options": [
      "music",
      "toast",
      "crowd",
      "ceremony"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "After the speeches, guests are welcome to _____ to songs played by a live band. The floor will stay open until eleven.",
    "options": [
      "invite",
      "decorate",
      "celebrate",
      "dance"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Each employee received a small _____ from the company at the year-end party. It was a box of pineapple cakes.",
    "options": [
      "ceremony",
      "custom",
      "gift",
      "crowd"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The bakery can write a short message on top of the _____ for free. Please order at least two days in advance.",
    "options": [
      "cake",
      "crowd",
      "toast",
      "custom"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The city spent a large budget on the New Year _____ display. It lit up the sky over the harbor for ten minutes.",
    "options": [
      "custom",
      "fireworks",
      "gathering",
      "tradition"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "A large _____ gathered outside the store before it opened for the big sale. Security guards helped people form a line.",
    "options": [
      "toast",
      "ceremony",
      "crowd",
      "decoration"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "We would like to _____ you to the opening of our new office. Please reply by Friday so we can prepare enough seats.",
    "options": [
      "cheer",
      "decorate",
      "dance",
      "invite"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Each _____ at the conference will receive a name card at the front desk. Lunch will be served at noon in the hall.",
    "options": [
      "guest",
      "toast",
      "custom",
      "festival"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Our company will _____ the international trade fair at the convention center this year. Over three hundred exhibitors will attend.",
    "options": [
      "cheer",
      "host",
      "dance",
      "decorate"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "We hope you _____ your stay at our hotel this weekend. Please call the front desk if you need anything at all.",
    "options": [
      "decorate",
      "cheer",
      "invite",
      "enjoy"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The tour guide made our trip to Tainan truly _____. We still talk about the delicious food and friendly people there.",
    "options": [
      "festive",
      "crowded",
      "memorable",
      "quiet"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The two departments will work _____ on the new advertising campaign. They will share one office until the project ends.",
    "options": [
      "abroad",
      "alone",
      "nearby",
      "together"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The bank will _____ its fiftieth year in business with a free concert. All customers and their families are welcome to attend.",
    "options": [
      "cheer",
      "celebrate",
      "dance",
      "invite"
    ],
    "answer": 1,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable because of a special event",
    "cn_def": "慶祝"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special event or time with performances, food, or celebrations",
    "cn_def": "節慶；節日活動"
  },
  "party": {
    "pos": "n.",
    "en_def": "a social event where people meet to eat, drink, and have fun",
    "cn_def": "派對"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal public event held for a special purpose",
    "cn_def": "典禮；儀式"
  },
  "occasion": {
    "pos": "n.",
    "en_def": "a special event or an important time",
    "cn_def": "場合；特殊時刻"
  },
  "anniversary": {
    "pos": "n.",
    "en_def": "the date each year when an important event happened in the past",
    "cn_def": "週年紀念"
  },
  "birthday": {
    "pos": "n.",
    "en_def": "the day each year when someone was born",
    "cn_def": "生日"
  },
  "wedding": {
    "pos": "n.",
    "en_def": "a ceremony at which two people get married",
    "cn_def": "婚禮"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people for a social purpose",
    "cn_def": "聚會"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief passed down over many years",
    "cn_def": "傳統"
  },
  "custom": {
    "pos": "n.",
    "en_def": "a usual way of behaving in a society or group",
    "cn_def": "習俗；風俗"
  },
  "toast": {
    "pos": "n.",
    "en_def": "the act of raising glasses and drinking to wish someone success or happiness",
    "cn_def": "敬酒；祝酒"
  },
  "cheer": {
    "pos": "v.",
    "en_def": "to shout loudly to show you are happy or to support someone",
    "cn_def": "歡呼；喝采"
  },
  "joyful": {
    "pos": "adj.",
    "en_def": "very happy; full of joy",
    "cn_def": "歡樂的；喜悅的"
  },
  "festive": {
    "pos": "adj.",
    "en_def": "bright and cheerful because of a holiday or celebration",
    "cn_def": "節慶的；喜氣洋洋的"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make a place look nicer by adding pretty things to it",
    "cn_def": "裝飾；布置"
  },
  "decoration": {
    "pos": "n.",
    "en_def": "a thing used to make something look more attractive",
    "cn_def": "裝飾品"
  },
  "music": {
    "pos": "n.",
    "en_def": "pleasant sounds made by voices or instruments",
    "cn_def": "音樂"
  },
  "dance": {
    "pos": "v.",
    "en_def": "to move your body to music",
    "cn_def": "跳舞"
  },
  "gift": {
    "pos": "n.",
    "en_def": "something you give to someone, often on a special day",
    "cn_def": "禮物"
  },
  "cake": {
    "pos": "n.",
    "en_def": "a sweet baked food made from flour, sugar, and eggs",
    "cn_def": "蛋糕"
  },
  "fireworks": {
    "pos": "n.",
    "en_def": "colorful explosions in the sky used for celebrations",
    "cn_def": "煙火"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large number of people together in one place",
    "cn_def": "人群"
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone to come to an event",
    "cn_def": "邀請"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person who is invited to an event or a home",
    "cn_def": "客人；賓客"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and welcome the people who come",
    "cn_def": "主辦；招待"
  },
  "enjoy": {
    "pos": "v.",
    "en_def": "to get pleasure from something",
    "cn_def": "享受；喜愛"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special and easy to remember",
    "cn_def": "難忘的"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other; in the same place",
    "cn_def": "一起；在一起"
  }
};

const EXTRA_GLOSSES = {};
