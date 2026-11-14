// Topic 10 Quiz Data: Airport 機場
// Source word list: https://www.examword.com/group-topic/airport — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T10 - Airport 機場",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "terminal",
    "pos": "n.",
    "cn_def": "航廈；航站",
    "en_def": "a large building at an airport where passengers arrive and leave",
    "sentence": "A: I'm picking up our clients from Seoul at the airport tomorrow afternoon, but I'm not sure where I should wait for them. B: Their airline uses {{BLANK}} 2, so wait near the arrivals hall on the first floor, and send them a message so they know where to find you after they collect their bags.",
    "cn": "A：我明天下午要去機場接首爾來的客戶，但不確定該在哪裡等他們。 B：他們的航空公司使用第二【航廈】，所以在一樓入境大廳附近等，並傳訊息給他們，讓他們領完行李後知道去哪裡找你。"
  },
  {
    "word": "runway",
    "pos": "n.",
    "cn_def": "跑道",
    "en_def": "a long, flat road where airplanes take off and land",
    "sentence": "A: Why has our plane been waiting on the ground for forty minutes when it was supposed to leave at nine o'clock? B: The captain just announced that workers are clearing snow from the {{BLANK}}, and he thinks we will be able to take off in about fifteen minutes once they have finished.",
    "cn": "A：為什麼我們的飛機已經在地面等了四十分鐘？它原本應該九點起飛的。 B：機長剛剛廣播說，工作人員正在清除【跑道】上的積雪，他認為等他們清完，我們大約十五分鐘後就能起飛。"
  },
  {
    "word": "gate",
    "pos": "n.",
    "cn_def": "登機門",
    "en_def": "the place in an airport where passengers get on a plane",
    "sentence": "A: Excuse me, my flight to Bangkok leaves in thirty minutes, but the screen doesn't show where I should go to get on the plane. B: Your flight has just been moved to {{BLANK}} 15 because of a technical problem, so please walk quickly to the end of this hall and turn left.",
    "cn": "A：不好意思，我飛往曼谷的班機三十分鐘後起飛，但螢幕沒有顯示我該去哪裡登機。 B：因為技術問題，您的班機剛剛改到15號【登機門】，所以請快步走到這個大廳的盡頭再左轉。"
  },
  {
    "word": "check-in",
    "pos": "n.",
    "cn_def": "報到；登機手續；報到櫃台",
    "en_def": "the place or process where you show your ticket and give your bags before a flight",
    "sentence": "A: Our flight to Tokyo leaves at seven in the morning, so what time do you think we should leave the hotel? B: Let's leave at four thirty, because the {{BLANK}} counter closes one hour before departure, and there are often long lines of tour groups at the airport early in the morning.",
    "cn": "A：我們飛往東京的班機早上七點起飛，你覺得我們應該幾點離開飯店？ B：我們四點半出發吧，因為【報到】櫃台在起飛前一小時就關閉了，而且清晨的機場常常有旅行團排長長的隊伍。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "安檢；安全檢查處；安全",
    "en_def": "the area at an airport where bags and passengers are checked for dangerous items",
    "sentence": "A: Why did it take you so long to get to the gate, when you arrived at the airport two hours before the flight? B: The line at {{BLANK}} was huge, and then the officers opened my bag because I forgot to take my laptop out and put it in a separate tray.",
    "cn": "A：你在班機起飛前兩小時就到機場了，為什麼花了這麼久才到登機門？ B：【安檢】的隊伍超長，然後安檢人員打開了我的包包，因為我忘了把筆電拿出來放在另一個托盤裡。"
  },
  {
    "word": "customs",
    "pos": "n.",
    "cn_def": "海關",
    "en_def": "the place at an airport where officers check what you bring into a country",
    "sentence": "A: I bought some expensive watches during my business trip to Switzerland, so do I need to do anything special when I land? B: Yes, you need to go to the red line at {{BLANK}} and tell the officers what you bought, because you may have to pay tax on goods over a certain value.",
    "cn": "A：我在瑞士出差時買了幾支昂貴的手錶，降落時需要做什麼特別的事嗎？ B：需要，你必須到【海關】的紅線通道向關員申報你買的東西，因為超過一定金額的物品可能要繳稅。"
  },
  {
    "word": "immigration",
    "pos": "n.",
    "cn_def": "入境檢查；移民局",
    "en_def": "the place at an airport where officers check passports and visas",
    "sentence": "A: How long will it take us to leave the airport after we land in New York on Monday evening? B: It could take an hour or more, because the lines at {{BLANK}} are usually very long in the evening, and the officers ask every visitor several questions before stamping their passports.",
    "cn": "A：我們週一晚上在紐約降落後，要花多久時間才能離開機場？ B：可能要一個小時以上，因為晚上【入境審查】的隊伍通常很長，而且官員在護照蓋章前會問每位訪客好幾個問題。"
  },
  {
    "word": "baggage",
    "pos": "n.",
    "cn_def": "行李",
    "en_def": "the bags and suitcases you take with you when you travel",
    "sentence": "A: I'm flying to Singapore for a two-week training course, and I need to bring a lot of documents and clothes. B: Check the airline's website before you pack, because your ticket only includes twenty kilograms of {{BLANK}}, and the fee for extra weight at the airport is very expensive.",
    "cn": "A：我要飛去新加坡參加兩週的培訓課程，需要帶很多文件和衣服。 B：打包前先查一下航空公司的網站，因為你的機票只含二十公斤的【行李】，在機場付超重費非常貴。"
  },
  {
    "word": "luggage",
    "pos": "n.",
    "cn_def": "行李",
    "en_def": "suitcases and bags used for carrying things when traveling",
    "sentence": "A: Do you know where I can leave my bags for a few hours, because my hotel room won't be ready until three o'clock this afternoon? B: There is a {{BLANK}} storage office on the ground floor of the train station, and it only costs about five dollars for each bag per day.",
    "cn": "A：你知道我可以把包包寄放在哪裡幾個小時嗎？因為我的飯店房間要到下午三點才準備好。 B：火車站一樓有一個【行李】寄放處，每件每天大約只要五美元。"
  },
  {
    "word": "carousel",
    "pos": "n.",
    "cn_def": "行李轉盤",
    "en_def": "a moving belt at an airport from which passengers collect their bags",
    "sentence": "A: We've been waiting for our suitcases for nearly thirty minutes, so are you sure we're standing in the right place? B: The screen says that bags from our flight will come out on {{BLANK}} 4, but there was a problem with the machine, so the airport staff are fixing it now.",
    "cn": "A：我們已經等行李將近三十分鐘了，你確定我們站對地方了嗎？ B：螢幕顯示我們班機的行李會從4號【行李轉盤】出來，但機器出了問題，所以機場人員正在修理。"
  },
  {
    "word": "boarding",
    "pos": "n.",
    "cn_def": "登機；上船；上車",
    "en_def": "the act of getting on a plane, ship, or train",
    "sentence": "A: I still need to buy a gift for my client at the duty-free shop, so do I have enough time before our flight? B: You'll have to hurry, because {{BLANK}} starts in fifteen minutes, and passengers with small children and business class tickets will get on the plane first.",
    "cn": "A：我還需要在免稅店買份禮物給客戶，我們班機起飛前我時間夠嗎？ B：你得快一點，因為十五分鐘後就開始【登機】了，帶小孩的乘客和商務艙旅客會先上飛機。"
  },
  {
    "word": "departure",
    "pos": "n.",
    "cn_def": "出發；離開；起飛",
    "en_def": "the act of leaving a place, especially at the start of a journey",
    "sentence": "A: Our flight to Hong Kong was supposed to leave at eleven, but it's already eleven thirty, so what's happening? B: The airline just sent a text saying that the {{BLANK}} has been moved to twelve fifteen because the plane arrived late from Manila after bad weather this morning.",
    "cn": "A：我們飛往香港的班機原定十一點起飛，但現在已經十一點半了，怎麼回事？ B：航空公司剛剛傳簡訊說，因為飛機今天早上遇到壞天氣從馬尼拉晚到，【起飛】時間改到十二點十五分。"
  },
  {
    "word": "arrival",
    "pos": "n.",
    "cn_def": "抵達；到達",
    "en_def": "the act of reaching a place",
    "sentence": "A: When should the hotel driver go to the airport to pick up our guest speaker from London? B: Her {{BLANK}} is planned for six forty in the evening, but the driver should check the flight information online before he leaves, because flights from Europe are sometimes early or late.",
    "cn": "A：飯店司機應該什麼時候去機場接從倫敦來的演講嘉賓？ B：她預計晚上六點四十分【抵達】，但司機出發前應該先上網查航班資訊，因為來自歐洲的班機有時會提早或延誤。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤；耽擱",
    "en_def": "a time when someone or something has to wait or is late",
    "sentence": "A: Why didn't Mr. Lopez join the morning meeting at our office in Taipei as he had planned? B: His flight had a four-hour {{BLANK}} because of a typhoon near Hong Kong, so he landed after lunch and joined the afternoon session by video call from the airport.",
    "cn": "A：為什麼羅培茲先生沒有如原本計畫參加我們台北辦公室的早上會議？ B：他的班機因為香港附近的颱風【延誤】了四個小時，所以他午餐後才降落，並在機場用視訊參加了下午的會議。"
  },
  {
    "word": "cancellation",
    "pos": "n.",
    "cn_def": "取消",
    "en_def": "a decision that something planned will not happen",
    "sentence": "A: The airline just told us that our flight to Osaka won't leave tonight because of the snowstorm, so what should we do? B: Go to the service desk right away, because after a {{BLANK}} like this, the airline must offer you a seat on the next flight and a free hotel room.",
    "cn": "A：航空公司剛告訴我們，因為暴風雪，我們飛往大阪的班機今晚不會起飛，我們該怎麼辦？ B：馬上去服務櫃台，因為發生像這樣的【取消】後，航空公司必須提供你下一班飛機的座位和免費的飯店房間。"
  },
  {
    "word": "passport",
    "pos": "n.",
    "cn_def": "護照",
    "en_def": "an official document that shows who you are and allows you to travel to other countries",
    "sentence": "A: The company wants me to attend a trade fair in Germany next month, but I haven't traveled abroad for over ten years. B: Then check your {{BLANK}} today, because it may have expired, and getting a new one can take two or three weeks during the busy summer season.",
    "cn": "A：公司要我下個月去德國參加商展，但我已經十多年沒出國了。 B：那你今天就檢查一下你的【護照】，因為它可能已經過期了，而在忙碌的夏季，申請新的可能要兩、三個星期。"
  },
  {
    "word": "visa",
    "pos": "n.",
    "cn_def": "簽證",
    "en_def": "an official document or stamp that allows you to enter or stay in a country",
    "sentence": "A: Our new engineer from India is starting work at the Taipei office in March, so has everything been prepared for him? B: Almost everything, but he is still waiting for his work {{BLANK}}, and the human resources department says it should be ready about two weeks before he flies here.",
    "cn": "A：我們從印度來的新工程師三月要在台北辦公室上班，所有事情都替他準備好了嗎？ B：幾乎都好了，但他還在等工作【簽證】，人資部說大約在他飛來前兩週就會辦好。"
  },
  {
    "word": "ticket",
    "pos": "n.",
    "cn_def": "票；機票",
    "en_def": "a piece of paper or electronic document that shows you have paid to travel",
    "sentence": "A: I need to fly to Kaohsiung for a client meeting next Thursday, so should I book the flight myself or ask someone else to do it? B: Please ask the travel coordinator to buy your {{BLANK}}, because the company gets a special discount, and she also keeps all the receipts for the accounting department.",
    "cn": "A：我下週四要飛去高雄和客戶開會，我應該自己訂機票，還是請別人幫忙？ B：請差旅專員幫你買【機票】，因為公司有特別折扣，而且她也會為會計部保留所有收據。"
  },
  {
    "word": "boarding pass",
    "pos": "n.phr.",
    "cn_def": "登機證",
    "en_def": "a card or electronic document that allows you to get on a plane",
    "sentence": "A: The airline staff at the gate won't let me get on the plane, but I already showed them my passport. B: You also need to show your {{BLANK}}, so open the airline app on your phone, find your trip, and show them the code with your seat number on it.",
    "cn": "A：登機門的航空公司人員不讓我上飛機，但我已經給他們看過護照了。 B：你還需要出示你的【登機證】，所以打開手機上的航空公司應用程式，找到你的行程，給他們看有座位號碼的條碼。"
  },
  {
    "word": "aisle",
    "pos": "n.",
    "cn_def": "走道",
    "en_def": "a long narrow space between rows of seats on a plane",
    "sentence": "A: Would you like me to book a window seat for your long flight to Los Angeles next week? B: No, please get me a seat on the {{BLANK}}, because I usually drink lots of water on long trips and need to stand up and walk around without asking the other passengers to move.",
    "cn": "A：下週你飛洛杉磯的長途航班，要我幫你訂靠窗的座位嗎？ B：不用，請幫我訂靠【走道】的座位，因為我長途旅行時通常會喝很多水，需要站起來走動，不想一直請其他乘客讓開。"
  },
  {
    "word": "overhead",
    "pos": "adj.",
    "cn_def": "頭頂上的；上方的",
    "en_def": "above your head",
    "sentence": "A: Where should I put my laptop bag and coat after I find my seat on the plane? B: You can put the coat in the {{BLANK}} bin, but keep the laptop bag under the seat in front of you, because the flight attendants want the space above the seats for larger suitcases.",
    "cn": "A：我在飛機上找到座位後，筆電包和外套應該放在哪裡？ B：外套可以放在【頭頂上方的】置物櫃，但筆電包要放在前方座位底下，因為空服員希望座位上方的空間留給較大的行李箱。"
  },
  {
    "word": "carry-on",
    "pos": "n.",
    "cn_def": "隨身行李",
    "en_def": "a small bag that you are allowed to take onto a plane with you",
    "sentence": "A: Can I bring my large camera bag onto the plane, or do I need to check it at the counter with my suitcase? B: Each passenger can take one {{BLANK}} that weighs less than seven kilograms, so you can bring the camera bag if it is light enough to fit those airline rules.",
    "cn": "A：我可以把大相機包帶上飛機嗎？還是需要和行李箱一起在櫃台託運？ B：每位乘客可以攜帶一件七公斤以下的【隨身行李】，所以如果相機包夠輕、符合航空公司的規定，你就可以帶上去。"
  },
  {
    "word": "jet lag",
    "pos": "n.phr.",
    "cn_def": "時差；時差反應",
    "en_def": "a tired feeling after a long flight across different time zones",
    "sentence": "A: You flew back from New York only yesterday, so how are you feeling this morning, and are you ready for the meeting? B: I'm suffering from {{BLANK}}, because I woke up at three in the morning and couldn't sleep again, so I'll need lots of coffee to stay awake during the meeting.",
    "cn": "A：你昨天才從紐約飛回來，今天早上感覺怎麼樣？準備好開會了嗎？ B：我有【時差】，因為我凌晨三點就醒了，再也睡不著，所以開會時我需要很多咖啡才能保持清醒。"
  },
  {
    "word": "announcement",
    "pos": "n.",
    "cn_def": "宣布；廣播；公告",
    "en_def": "a public statement giving people information",
    "sentence": "A: Did you hear what the voice just said through the speakers in the waiting area? It was too noisy for me. B: It was an {{BLANK}} that our flight to Hanoi is ready for boarding, and passengers sitting in rows thirty to forty-five should go to the gate first.",
    "cn": "A：你有聽到剛才候機區喇叭說了什麼嗎？太吵了我沒聽清楚。 B：那是一則【廣播】，說我們飛往河內的班機準備登機了，坐在第三十到四十五排的乘客要先到登機門。"
  },
  {
    "word": "queue",
    "pos": "n.",
    "cn_def": "隊伍；行列",
    "en_def": "a line of people waiting for something",
    "sentence": "A: Why are so many passengers standing near the information desk, and why does everyone look so angry? B: There is a long {{BLANK}} of travelers waiting to change their tickets, because three flights were canceled this morning due to fog, and only two staff members are working at the desk.",
    "cn": "A：為什麼這麼多乘客站在服務台附近，而且大家看起來都那麼生氣？ B：有一長串旅客在【排隊】等著換票，因為今天早上有三個航班因大霧取消，而服務台只有兩名工作人員。"
  },
  {
    "word": "transfer",
    "pos": "n.",
    "cn_def": "轉機；轉乘；接駁",
    "en_def": "moving from one plane or vehicle to another during a trip",
    "sentence": "A: I have to fly from Taipei to Toronto for the conference next month, but there is no direct flight. B: You can take the flight with a {{BLANK}} in Vancouver, because you only wait two hours there, and your suitcase will go directly to Toronto without you collecting it.",
    "cn": "A：下個月我要從台北飛多倫多參加研討會，但沒有直飛班機。 B：你可以搭在溫哥華【轉機】的班機，因為在那裡只要等兩個小時，而且你的行李箱會直接送到多倫多，不用自己領取。"
  },
  {
    "word": "connection",
    "pos": "n.",
    "cn_def": "轉乘班機；銜接的交通工具",
    "en_def": "a plane, train, or bus that you take after getting off another one",
    "sentence": "A: Our first flight from Taipei is already thirty minutes late, so will we still be able to catch the flight to Paris in Dubai? B: I'm worried that we might miss our {{BLANK}}, because there is only one hour between the two flights, and the airport in Dubai is very large.",
    "cn": "A：我們從台北起飛的第一班飛機已經誤點三十分鐘了，我們還趕得上在杜拜飛往巴黎的班機嗎？ B：我擔心我們會錯過【轉機班機】，因為兩個航班之間只有一個小時，而杜拜機場又非常大。"
  },
  {
    "word": "screening",
    "pos": "n.",
    "cn_def": "篩檢；檢查；安全檢查",
    "en_def": "the process of checking people or bags for dangerous items",
    "sentence": "A: Why did the airport ask all international passengers to arrive three hours early this week? B: The government added extra {{BLANK}} of passengers and bags after some new safety rules started on Monday, so every person now goes through two machines before reaching the gates.",
    "cn": "A：為什麼機場這週要求所有國際線旅客提早三個小時到？ B：週一開始實施一些新的安全規定後，政府對旅客和行李增加了額外的【檢查】，所以現在每個人到登機門前都要通過兩台機器。"
  },
  {
    "word": "taxi",
    "pos": "v.",
    "cn_def": "（飛機）滑行",
    "en_def": "(of a plane) to move slowly along the ground before taking off or after landing",
    "sentence": "A: We landed ten minutes ago, so why are we still sitting on the plane and not at the gate yet? B: The airport is very busy this morning, so the plane has to {{BLANK}} slowly across the airfield and wait for another aircraft to leave our gate before we can get off.",
    "cn": "A：我們十分鐘前就降落了，為什麼還坐在飛機上、還沒到登機門？ B：今天早上機場很忙，所以飛機必須在機坪上緩慢【滑行】，並等另一架飛機離開我們的登機門後，我們才能下機。"
  },
  {
    "word": "depart",
    "pos": "v.",
    "cn_def": "出發；離開；起飛",
    "en_def": "to leave a place, especially to start a journey",
    "sentence": "A: Is the last flight to Hualien tonight still on schedule, or has it been affected by the strong winds along the coast? B: It is scheduled to {{BLANK}} at eight forty-five, but the airline says it will send passengers a message within the next hour if the weather becomes too dangerous.",
    "cn": "A：今晚飛往花蓮的最後一班飛機還照常嗎？還是受到沿海強風的影響？ B：預定八點四十五分【起飛】，但航空公司說如果天氣變得太危險，會在接下來一小時內傳訊息通知乘客。"
  },
  {
    "word": "arrive",
    "pos": "v.",
    "cn_def": "到達；抵達",
    "en_def": "to reach a place at the end of a journey",
    "sentence": "A: How early should international passengers get to Taoyuan Airport before their flights during the holiday season? B: The airport suggests that they {{BLANK}} at least three hours before their flight, because the check-in lines and security checks are much slower when so many families are traveling.",
    "cn": "A：在假期期間，國際線旅客應該在班機起飛前多早到桃園機場？ B：機場建議他們至少在起飛前三小時【抵達】，因為有這麼多家庭出遊時，報到的隊伍和安檢都會慢很多。"
  },
  {
    "word": "securely",
    "pos": "adv.",
    "cn_def": "牢固地；安全地",
    "en_def": "in a way that is firmly fixed or safely protected",
    "sentence": "A: The plane is shaking a lot, and the seatbelt sign just came on, so is there anything I should do right now? B: Make sure your seatbelt is fastened {{BLANK}} around your waist, and put your hot coffee on the floor so that it doesn't spill on you or the passenger next to you.",
    "cn": "A：飛機晃得很厲害，安全帶指示燈剛剛亮了，我現在有什麼該做的嗎？ B：確定你的安全帶有【牢牢地】繫在腰上，並把熱咖啡放到地上，以免灑到你或你旁邊的乘客。"
  },
  {
    "word": "onboard",
    "pos": "adj.",
    "cn_def": "機上的；船上的；車上的",
    "en_def": "available or happening on a plane, ship, or train",
    "sentence": "A: It's a twelve-hour flight to Amsterdam, so how will you keep busy during the trip if you don't want to work? B: The airline has a great {{BLANK}} entertainment system with hundreds of films and music albums, so I plan to watch a few movies and then sleep for several hours.",
    "cn": "A：飛阿姆斯特丹要十二個小時，如果你不想工作，旅途中要怎麼打發時間？ B：這家航空公司有很棒的【機上】娛樂系統，有數百部電影和音樂專輯，所以我打算看幾部電影，然後睡幾個小時。"
  }
];

const MCQS = [
  {
    "q": "The airport has opened a new building for international flights. All Asian airlines will move to the new _____ next month.",
    "options": [
      "visa",
      "queue",
      "ticket",
      "terminal"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The airport is building a third path for planes to land and take off. The new _____ will allow more flights each day.",
    "options": [
      "gate",
      "aisle",
      "runway",
      "carousel"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Passengers for Flight 205 should go to the boarding area now. The _____ will close ten minutes before departure.",
    "options": [
      "visa",
      "gate",
      "customs",
      "runway"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Travelers can now print their documents at home. Online _____ opens twenty-four hours before each flight.",
    "options": [
      "check-in",
      "carousel",
      "aisle",
      "runway"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Liquids larger than one hundred milliliters are not allowed on the plane. Please remove them from your bag before _____.",
    "options": [
      "arrival",
      "visa",
      "security",
      "carousel"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Visitors must declare any fresh fruit or meat when they enter the country. Officers at _____ may check your bags.",
    "options": [
      "aisle",
      "customs",
      "runway",
      "ticket"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Foreign visitors must show their passports and visas after landing. The officers at _____ may ask about the purpose of the trip.",
    "options": [
      "immigration",
      "carousel",
      "runway",
      "aisle"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Each passenger may check two suitcases for free. Extra _____ will cost fifty dollars per piece.",
    "options": [
      "runway",
      "terminal",
      "visa",
      "baggage"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Passengers from Flight 118 can collect their suitcases now. Bags will appear on the _____ in Hall B.",
    "options": [
      "visa",
      "carousel",
      "queue",
      "passport"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Families with young children may get on the plane first. General _____ will begin in about five minutes.",
    "options": [
      "customs",
      "visa",
      "boarding",
      "runway"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Heavy fog has closed the airport for the morning. The _____ of all flights has been moved to the afternoon.",
    "options": [
      "passport",
      "aisle",
      "carousel",
      "departure"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The hotel offers a free shuttle from the airport. Please tell us your flight number and time of _____ in advance.",
    "options": [
      "arrival",
      "aisle",
      "visa",
      "screening"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Engine problems kept the plane on the ground for three hours. The airline apologized for the long _____.",
    "options": [
      "passport",
      "aisle",
      "delay",
      "terminal"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The conference was called off because of the storm. Guests who booked rooms will receive a full refund for the _____.",
    "options": [
      "cancellation",
      "runway",
      "aisle",
      "carousel"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Please check the date on your travel document before you book. Your _____ must be valid for six months after arrival.",
    "options": [
      "runway",
      "passport",
      "carousel",
      "queue"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Citizens of some countries need special permission to work here. They must apply for a work _____ before arriving.",
    "options": [
      "runway",
      "carousel",
      "aisle",
      "visa"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Prices for flights rise quickly during the holidays. Book your _____ early to get the best price.",
    "options": [
      "carousel",
      "ticket",
      "runway",
      "customs"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Passengers must show this document at the gate. Please keep your _____ ready with your passport.",
    "options": [
      "boarding pass",
      "jet lag",
      "runway",
      "carousel"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Please keep the space between the seats clear. Bags left in the _____ can cause passengers to trip and fall.",
    "options": [
      "passport",
      "visa",
      "aisle",
      "ticket"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Large suitcases do not fit under the seats. Please place them in the _____ bins above you.",
    "options": [
      "dangerous",
      "remote",
      "relevant",
      "overhead"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Only one small bag is allowed in the cabin. Any _____ that is too heavy must be checked at the counter.",
    "options": [
      "carry-on",
      "runway",
      "visa",
      "terminal"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Flying across many time zones can make travelers very tired. Drinking water and sleeping well can reduce _____.",
    "options": [
      "boarding pass",
      "visa",
      "runway",
      "jet lag"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The pilot spoke to passengers over the speakers. His _____ explained that the plane would land twenty minutes early.",
    "options": [
      "carousel",
      "announcement",
      "runway",
      "visa"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Hundreds of travelers were waiting at the ticket desk. The _____ stretched all the way to the entrance.",
    "options": [
      "visa",
      "runway",
      "queue",
      "announcement"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Our flight from Taipei stops in Hong Kong. Passengers making a _____ there should follow the green signs.",
    "options": [
      "passport",
      "transfer",
      "carousel",
      "aisle"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The first flight landed forty minutes late. Several passengers missed their _____ to Chicago and had to wait overnight.",
    "options": [
      "visa",
      "aisle",
      "connection",
      "screening"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "All bags pass through an X-ray machine before boarding. This _____ helps keep dangerous items off planes.",
    "options": [
      "screening",
      "arrival",
      "ticket",
      "aisle"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "After landing, the plane will move slowly to the terminal. Please stay seated while we _____ to the gate.",
    "options": [
      "depart",
      "arrive",
      "wander",
      "taxi"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Please be at the gate no later than 7:30 a.m. The plane will _____ at eight o'clock sharp.",
    "options": [
      "taxi",
      "depart",
      "arrive",
      "wander"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The shuttle bus leaves the airport every thirty minutes. Most guests _____ at the hotel within an hour.",
    "options": [
      "taxi",
      "depart",
      "recognize",
      "arrive"
    ],
    "answer": 3,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "terminal": {
    "pos": "n.",
    "en_def": "a large building at an airport where passengers arrive and leave",
    "cn_def": "航廈；航站"
  },
  "runway": {
    "pos": "n.",
    "en_def": "a long, flat road where airplanes take off and land",
    "cn_def": "跑道"
  },
  "gate": {
    "pos": "n.",
    "en_def": "the place in an airport where passengers get on a plane",
    "cn_def": "登機門"
  },
  "check-in": {
    "pos": "n.",
    "en_def": "the place or process where you show your ticket and give your bags before a flight",
    "cn_def": "報到；登機手續；報到櫃台"
  },
  "security": {
    "pos": "n.",
    "en_def": "the area at an airport where bags and passengers are checked for dangerous items",
    "cn_def": "安檢；安全檢查處；安全"
  },
  "customs": {
    "pos": "n.",
    "en_def": "the place at an airport where officers check what you bring into a country",
    "cn_def": "海關"
  },
  "immigration": {
    "pos": "n.",
    "en_def": "the place at an airport where officers check passports and visas",
    "cn_def": "入境檢查；移民局"
  },
  "baggage": {
    "pos": "n.",
    "en_def": "the bags and suitcases you take with you when you travel",
    "cn_def": "行李"
  },
  "luggage": {
    "pos": "n.",
    "en_def": "suitcases and bags used for carrying things when traveling",
    "cn_def": "行李"
  },
  "carousel": {
    "pos": "n.",
    "en_def": "a moving belt at an airport from which passengers collect their bags",
    "cn_def": "行李轉盤"
  },
  "boarding": {
    "pos": "n.",
    "en_def": "the act of getting on a plane, ship, or train",
    "cn_def": "登機；上船；上車"
  },
  "departure": {
    "pos": "n.",
    "en_def": "the act of leaving a place, especially at the start of a journey",
    "cn_def": "出發；離開；起飛"
  },
  "arrival": {
    "pos": "n.",
    "en_def": "the act of reaching a place",
    "cn_def": "抵達；到達"
  },
  "delay": {
    "pos": "n.",
    "en_def": "a time when someone or something has to wait or is late",
    "cn_def": "延誤；耽擱"
  },
  "cancellation": {
    "pos": "n.",
    "en_def": "a decision that something planned will not happen",
    "cn_def": "取消"
  },
  "passport": {
    "pos": "n.",
    "en_def": "an official document that shows who you are and allows you to travel to other countries",
    "cn_def": "護照"
  },
  "visa": {
    "pos": "n.",
    "en_def": "an official document or stamp that allows you to enter or stay in a country",
    "cn_def": "簽證"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a piece of paper or electronic document that shows you have paid to travel",
    "cn_def": "票；機票"
  },
  "boarding pass": {
    "pos": "n.phr.",
    "en_def": "a card or electronic document that allows you to get on a plane",
    "cn_def": "登機證"
  },
  "aisle": {
    "pos": "n.",
    "en_def": "a long narrow space between rows of seats on a plane",
    "cn_def": "走道"
  },
  "overhead": {
    "pos": "adj.",
    "en_def": "above your head",
    "cn_def": "頭頂上的；上方的"
  },
  "carry-on": {
    "pos": "n.",
    "en_def": "a small bag that you are allowed to take onto a plane with you",
    "cn_def": "隨身行李"
  },
  "jet lag": {
    "pos": "n.phr.",
    "en_def": "a tired feeling after a long flight across different time zones",
    "cn_def": "時差；時差反應"
  },
  "announcement": {
    "pos": "n.",
    "en_def": "a public statement giving people information",
    "cn_def": "宣布；廣播；公告"
  },
  "queue": {
    "pos": "n.",
    "en_def": "a line of people waiting for something",
    "cn_def": "隊伍；行列"
  },
  "transfer": {
    "pos": "n.",
    "en_def": "moving from one plane or vehicle to another during a trip",
    "cn_def": "轉機；轉乘；接駁"
  },
  "connection": {
    "pos": "n.",
    "en_def": "a plane, train, or bus that you take after getting off another one",
    "cn_def": "轉乘班機；銜接的交通工具"
  },
  "screening": {
    "pos": "n.",
    "en_def": "the process of checking people or bags for dangerous items",
    "cn_def": "篩檢；檢查；安全檢查"
  },
  "taxi": {
    "pos": "v.",
    "en_def": "(of a plane) to move slowly along the ground before taking off or after landing",
    "cn_def": "（飛機）滑行"
  },
  "depart": {
    "pos": "v.",
    "en_def": "to leave a place, especially to start a journey",
    "cn_def": "出發；離開；起飛"
  },
  "arrive": {
    "pos": "v.",
    "en_def": "to reach a place at the end of a journey",
    "cn_def": "到達；抵達"
  },
  "securely": {
    "pos": "adv.",
    "en_def": "in a way that is firmly fixed or safely protected",
    "cn_def": "牢固地；安全地"
  },
  "onboard": {
    "pos": "adj.",
    "en_def": "available or happening on a plane, ship, or train",
    "cn_def": "機上的；船上的；車上的"
  }
};

const EXTRA_GLOSSES = {};
