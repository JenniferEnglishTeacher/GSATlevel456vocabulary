// Topic 281 Quiz Data: Phone 手機
// Source word list: https://www.examword.com/group-topic/phone — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T281 - Phone 手機",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "smartphone",
    "pos": "n.",
    "cn_def": "智慧型手機",
    "en_def": "a mobile phone that can use the internet and run apps",
    "sentence": "A: Why did the sales department ask for a new budget this quarter, when they already received new laptops last year? B: The team travels to meet clients almost every day, so the manager wants every salesperson to have a company {{BLANK}} that can check email, share files, and join video meetings on the road.",
    "cn": "A：業務部去年已經拿到新筆電了，為什麼這一季又要求新的預算？ B：團隊幾乎每天都要出差拜訪客戶，所以經理希望每位業務員都有一支公司配發的【智慧型手機】，可以在路上收信、分享檔案和參加視訊會議。"
  },
  {
    "word": "call",
    "pos": "v.",
    "cn_def": "打電話給",
    "en_def": "to telephone someone",
    "sentence": "A: The shipment from our supplier in Osaka still hasn't arrived, and the customer is asking for news every hour. What should I do? B: Please {{BLANK}} the supplier's office before lunch and ask them for the tracking number, because emails sometimes take a whole day to get an answer.",
    "cn": "A：我們大阪供應商的貨到現在還沒到，客戶每個小時都在問消息。我該怎麼辦？ B：請在午餐前【打電話給】供應商的辦公室，向他們要追蹤號碼，因為電子郵件有時要一整天才會得到回覆。"
  },
  {
    "word": "text",
    "pos": "v.",
    "cn_def": "傳簡訊給",
    "en_def": "to send a short written message by phone",
    "sentence": "A: I'm stuck in heavy traffic on the way to the conference center, and I don't think I can answer the phone while driving. B: That's fine, just pull over safely and {{BLANK}} me when you're near the parking lot, and I'll ask the receptionist to save you a seat in the front row.",
    "cn": "A：我在去會議中心的路上塞在車陣裡，我想我開車時沒辦法接電話。 B：沒關係，先安全靠邊停車，快到停車場時【傳簡訊給】我，我會請接待人員在第一排幫你留個位子。"
  },
  {
    "word": "message",
    "pos": "n.",
    "cn_def": "訊息；留言",
    "en_def": "a piece of written or spoken information sent to someone",
    "sentence": "A: Did anyone from the marketing agency try to reach us while I was at the dentist this morning? B: Yes, their account manager left a {{BLANK}} on your desk phone saying the new brochure designs are ready, and she would like you to review them before Thursday afternoon.",
    "cn": "A：我早上去看牙醫時，行銷公司有人試著聯絡我們嗎？ B：有，他們的客戶經理在你的桌上電話留了一則【留言】，說新的手冊設計已經好了，她希望你在星期四下午前看過。"
  },
  {
    "word": "contact",
    "pos": "v.",
    "cn_def": "聯絡",
    "en_def": "to get in touch with someone by phone, email, etc.",
    "sentence": "A: One of our hotel guests says his room key stopped working late last night, and he is very upset about it. B: I'm sorry to hear that; please {{BLANK}} the front desk manager right away, offer the guest a free breakfast, and make sure maintenance checks the electronic lock today.",
    "cn": "A：我們的一位飯店房客說他的房卡昨晚深夜失效了，他對此非常不滿。 B：很遺憾聽到這件事；請立刻【聯絡】櫃檯經理，提供房客免費早餐，並確保維修人員今天檢查電子鎖。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕",
    "en_def": "the flat glass surface of a phone or computer where you see pictures and words",
    "sentence": "A: Why did you send your phone back to the store when you only bought it two weeks ago? B: I dropped it on the stairs at the train station, and the {{BLANK}} cracked so badly that I couldn't read my emails or see who was calling me during work.",
    "cn": "A：你兩週前才買的手機，為什麼要送回店裡？ B：我在火車站的樓梯上把它摔了，【螢幕】裂得很嚴重，我上班時沒辦法看電子郵件，也看不到誰打電話給我。"
  },
  {
    "word": "battery",
    "pos": "n.",
    "cn_def": "電池",
    "en_def": "the part that stores electric power for a phone",
    "sentence": "A: Could you lend me your phone for a few minutes? I need to confirm my taxi to the airport, but mine just turned off. B: Sure, here you go, but please be quick, because my {{BLANK}} is also low after I used the map all afternoon to find our client's new office.",
    "cn": "A：可以借我你的手機幾分鐘嗎？我需要確認去機場的計程車，但我的剛剛關機了。 B：當然，拿去吧，但請快一點，因為我整個下午都用地圖找客戶的新辦公室，我的【電池】也快沒電了。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "充電",
    "en_def": "to put electricity into a battery",
    "sentence": "A: Is there anywhere in this waiting area where I can plug in my phone before my flight to Singapore leaves? B: Yes, there are free power outlets next to the coffee shop near Gate 12, so you can {{BLANK}} your phone there while you have a snack and wait for boarding.",
    "cn": "A：在我飛往新加坡的班機起飛前，這個候機區有地方可以插手機嗎？ B：有，12號登機門附近的咖啡店旁邊有免費插座，你可以在吃點心等登機時在那裡幫手機【充電】。"
  },
  {
    "word": "charger",
    "pos": "n.",
    "cn_def": "充電器",
    "en_def": "a device used to put power into a battery",
    "sentence": "A: I'm packing for the three-day trade show in Tokyo. Is there anything important that I usually forget? B: Last time you left your phone {{BLANK}} in the hotel room, so you had to buy an expensive new one at the convention center gift shop on the second morning.",
    "cn": "A：我在為東京三天的商展打包。有什麼重要的東西是我常常忘記的嗎？ B：上次你把手機【充電器】留在飯店房間，結果第二天早上只好在會展中心的禮品店買了一個很貴的新的。"
  },
  {
    "word": "ring",
    "pos": "v.",
    "cn_def": "（電話）響",
    "en_def": "to make a sound when a call comes in",
    "sentence": "A: Why were you in such a hurry to leave the meeting room before the presentation ended? B: My boss told us to keep our phones on silent, but I forgot, and I was afraid mine would {{BLANK}} loudly in the middle of the director's speech about next year's budget.",
    "cn": "A：簡報還沒結束，你為什麼急著離開會議室？ B：老闆叫我們把手機調成靜音，但我忘了，我怕我的手機會在主任談明年預算的演講中間大聲【響起來】。"
  },
  {
    "word": "vibrate",
    "pos": "v.",
    "cn_def": "震動",
    "en_def": "to shake quickly with small movements",
    "sentence": "A: How can I make sure I don't miss calls from the delivery company about the new office furniture while I'm in the board meeting? B: Set your phone to {{BLANK}} instead of ringing, put it in your jacket pocket, and quietly step outside to answer if the driver tries to reach you this afternoon.",
    "cn": "A：我在董事會開會時，要怎麼確保不會漏接貨運公司打來關於新辦公家具的電話？ B：把手機設定成【震動】而不是響鈴，放在外套口袋裡，如果司機今天下午打給你，就安靜地走出去接。"
  },
  {
    "word": "app",
    "pos": "n.",
    "cn_def": "應用程式",
    "en_def": "a program you download onto a phone",
    "sentence": "A: How do customers usually order lunch from your restaurant now that you've stopped taking orders by phone? B: Most of them use our free {{BLANK}}, which lets them choose their meals, pay online, and see exactly when the delivery driver will arrive at their office building.",
    "cn": "A：既然你們不再接受電話點餐，客人現在通常怎麼向你們餐廳訂午餐？ B：大部分人使用我們的免費【應用程式】，可以選餐點、線上付款，還能看到外送員確切幾點會抵達他們的辦公大樓。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy a file or program from the internet onto a device",
    "sentence": "A: The training session for new employees starts tomorrow at nine. Is there anything they should prepare in advance? B: Yes, please ask them to {{BLANK}} the company handbook and the meeting software tonight, because the office internet is often slow when everyone logs in at the same time.",
    "cn": "A：新進員工的訓練課程明天九點開始。他們有什麼需要事先準備的嗎？ B：有，請他們今晚先【下載】公司手冊和會議軟體，因為大家同時登入時，辦公室的網路常常很慢。"
  },
  {
    "word": "wifi",
    "pos": "n.",
    "cn_def": "無線網路",
    "en_def": "a way to connect to the internet without wires",
    "sentence": "A: Our guests from the Seoul office keep complaining that they can't open their emails in the conference room. What's wrong? B: The {{BLANK}} in that part of the building is very weak, so I'll ask the IT team to install another router before the afternoon workshop begins.",
    "cn": "A：首爾辦公室來的客人一直抱怨在會議室打不開電子郵件。出了什麼問題？ B：大樓那一區的【無線網路】很弱，所以我會請資訊團隊在下午的研習開始前再裝一台路由器。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "訊號",
    "en_def": "the strength of the connection that lets a phone work",
    "sentence": "A: Why didn't you join the video meeting with the Vancouver team this morning? Everyone was waiting for you. B: I was on the train going through the mountains, and the {{BLANK}} kept dropping, so I sent the team leader an email and promised to watch the recording later.",
    "cn": "A：你今天早上為什麼沒參加和溫哥華團隊的視訊會議？大家都在等你。 B：我在穿越山區的火車上，【訊號】一直斷斷續續，所以我寄了電子郵件給組長，答應稍後看錄影。"
  },
  {
    "word": "camera",
    "pos": "n.",
    "cn_def": "相機；鏡頭",
    "en_def": "the part of a phone used to take photos and videos",
    "sentence": "A: The new product catalog needs photos by Friday, but our photographer is sick this week. Do you have any ideas? B: The latest company phones have an excellent {{BLANK}}, so I can take clear pictures of the products in the showroom this afternoon and send them to the designer.",
    "cn": "A：新的產品目錄星期五前需要照片，但我們的攝影師這週生病了。你有什麼點子嗎？ B：最新的公司手機有很棒的【相機】，所以我今天下午可以在展示間把產品拍清楚，再傳給設計師。"
  },
  {
    "word": "selfie",
    "pos": "n.",
    "cn_def": "自拍照",
    "en_def": "a photo you take of yourself with your phone",
    "sentence": "A: The marketing team wants more people to post about our new café on social media. Do you have any suggestions? B: We could put a big flower wall near the entrance and give a free drink to anyone who takes a {{BLANK}} there and shares it online with our hashtag.",
    "cn": "A：行銷團隊希望有更多人在社群媒體上分享我們的新咖啡廳。你有什麼建議嗎？ B：我們可以在入口附近擺一面大花牆，只要有人在那裡拍【自拍照】並加上我們的主題標籤分享上網，就送他一杯免費飲料。"
  },
  {
    "word": "headphone",
    "pos": "n.",
    "cn_def": "耳機",
    "en_def": "a device you wear over your ears to listen to sound",
    "sentence": "A: Why does the customer service team want new equipment? Their phones are only a year old. B: The office is very noisy because of the construction next door, so each agent needs a good {{BLANK}} set with a microphone to hear customers clearly and answer their questions politely.",
    "cn": "A：客服團隊為什麼要新設備？他們的電話才用一年而已。 B：因為隔壁在施工，辦公室非常吵，所以每位客服人員都需要一副附麥克風的好【耳機】，才能清楚聽到客人說話並禮貌地回答問題。"
  },
  {
    "word": "speaker",
    "pos": "n.",
    "cn_def": "喇叭；擴音器",
    "en_def": "the part of a device that the sound comes out of",
    "sentence": "A: The sound during yesterday's online meeting was terrible, and nobody could understand the presenter from the Berlin office. B: I think the {{BLANK}} in the meeting room is broken, so I've already asked the technician to replace it before our next conference with the European partners.",
    "cn": "A：昨天線上會議的聲音很糟糕，沒有人聽得懂柏林辦公室簡報者說的話。 B：我想會議室的【喇叭】壞了，所以我已經請技術人員在我們和歐洲夥伴下次開會前換掉它。"
  },
  {
    "word": "notification",
    "pos": "n.",
    "cn_def": "通知",
    "en_def": "a message on a phone that tells you something new has happened",
    "sentence": "A: How will I know when the client has signed the contract? I'll be out of the office visiting the factory all day. B: The system will send a {{BLANK}} to your phone as soon as the document is signed, so you can check it immediately even while you're on the factory floor.",
    "cn": "A：我怎麼知道客戶什麼時候簽好合約？我整天都要外出參觀工廠。 B：文件一簽好，系統就會傳一則【通知】到你的手機，所以即使你在廠房裡也能立刻查看。"
  },
  {
    "word": "unlock",
    "pos": "v.",
    "cn_def": "解鎖",
    "en_def": "to open a phone so you can use it, usually with a code or your finger",
    "sentence": "A: I found a phone in the lobby this morning, but I don't know who it belongs to. What should I do with it? B: Don't try to {{BLANK}} it yourself; just take it to the security office, and they will keep it safe until the owner calls the building manager.",
    "cn": "A：我今天早上在大廳撿到一支手機，但不知道是誰的。我該怎麼處理？ B：不要自己試著把它【解鎖】；直接拿去保全室，他們會妥善保管，直到失主打電話給大樓管理員。"
  },
  {
    "word": "password",
    "pos": "n.",
    "cn_def": "密碼",
    "en_def": "a secret word or set of numbers used to get into a phone or account",
    "sentence": "A: I can't log in to the company's sales system, and I have a report due to my manager in an hour. B: The IT department changed everyone's {{BLANK}} last night for security reasons, so check your email for the new one, or call the help desk on extension 204.",
    "cn": "A：我登不進公司的銷售系統，而我一小時後要交報告給經理。 B：資訊部門昨晚為了安全理由更改了每個人的【密碼】，所以去查一下你的電子郵件看新的密碼，或打分機204給服務台。"
  },
  {
    "word": "update",
    "pos": "v.",
    "cn_def": "更新",
    "en_def": "to put the newest version of software on a device",
    "sentence": "A: My work phone has been running slowly for days, and some apps close by themselves while I'm using them. B: You should {{BLANK}} the operating system tonight when you're not busy, because the latest version fixes many problems and makes the phone much faster and safer.",
    "cn": "A：我的工作手機好幾天都跑得很慢，有些應用程式在我使用時會自己關掉。 B：你應該今晚不忙的時候把作業系統【更新】，因為最新版本修正了很多問題，讓手機更快也更安全。"
  },
  {
    "word": "storage",
    "pos": "n.",
    "cn_def": "儲存空間",
    "en_def": "the space on a phone for keeping photos, files, and apps",
    "sentence": "A: Why can't I save the photos from the factory inspection on my phone? It keeps saying that the action has failed. B: Your phone has almost no {{BLANK}} left because of all the videos from the training course, so move some of them to the cloud and try again.",
    "cn": "A：為什麼我無法把工廠檢查的照片存在手機裡？它一直說操作失敗。 B：因為訓練課程的那些影片，你的手機幾乎沒有【儲存空間】了，所以把一些影片移到雲端再試一次。"
  },
  {
    "word": "browser",
    "pos": "n.",
    "cn_def": "瀏覽器",
    "en_def": "a program used to look at websites",
    "sentence": "A: The new online booking page isn't loading on my phone, but my coworker says it works fine for her. B: You may be using an old {{BLANK}}, so try opening the page in a different one or install the latest version, and then refresh the page to check the hotel prices again.",
    "cn": "A：新的線上訂房頁面在我的手機上打不開，但我同事說她的可以正常使用。 B：你可能在用舊的【瀏覽器】，所以試著用另一個打開頁面，或安裝最新版本，然後重新整理頁面再查一次飯店價格。"
  },
  {
    "word": "scroll",
    "pos": "v.",
    "cn_def": "捲動（頁面）",
    "en_def": "to move up or down on a screen to see more",
    "sentence": "A: I'm looking at the online menu for the staff party, but I can only see the drinks and desserts. B: You need to {{BLANK}} down to the bottom of the page, where the restaurant lists all the main dishes, the vegetarian choices, and the prices for groups of twenty people.",
    "cn": "A：我在看員工派對的線上菜單，但我只看到飲料和甜點。 B：你要【捲動】到頁面最下方，餐廳在那裡列出了所有主菜、素食選擇和二十人團體的價格。"
  },
  {
    "word": "tap",
    "pos": "v.",
    "cn_def": "輕觸；點按",
    "en_def": "to touch a screen lightly with your finger",
    "sentence": "A: Our older customers say the new self-service machine in the bank lobby is too confusing for them to use. B: Let's put a simple sign next to it explaining that they only need to {{BLANK}} the green button on the screen, and ask a staff member to stand nearby during busy hours.",
    "cn": "A：我們的年長客戶說銀行大廳新的自助機器太複雜，他們不會用。 B：我們在旁邊放個簡單的告示，說明他們只需要【點按】螢幕上的綠色按鈕，並在尖峰時段請一位員工站在附近。"
  },
  {
    "word": "swipe",
    "pos": "v.",
    "cn_def": "滑動",
    "en_def": "to move your finger quickly across a screen",
    "sentence": "A: How do I see the rest of the product photos in this online catalog? I can only see the first picture. B: Just {{BLANK}} left on the image to see the next one, and if you want more details about the price or size, touch the small blue button underneath.",
    "cn": "A：我要怎麼看這個線上目錄裡其他的產品照片？我只看得到第一張。 B：在圖片上往左【滑動】就能看下一張，如果你想知道價格或尺寸的更多細節，就按下面的藍色小按鈕。"
  },
  {
    "word": "mute",
    "pos": "v.",
    "cn_def": "使靜音",
    "en_def": "to turn off the sound",
    "sentence": "A: There's a lot of noise from the street outside my apartment, and I have an important video interview in ten minutes. B: When you're not speaking, you can {{BLANK}} your microphone so the interviewers won't hear the traffic, and close the windows before the meeting starts.",
    "cn": "A：我公寓外面的街上很吵，而我十分鐘後有一場重要的視訊面試。 B：你沒說話的時候可以把麥克風【靜音】，這樣面試官就不會聽到車聲，會議開始前也把窗戶關上。"
  },
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "音量",
    "en_def": "how loud a sound is",
    "sentence": "A: Several passengers on the morning bus complained that the driver's radio was too loud during the trip downtown. B: I'll remind all our drivers to keep the {{BLANK}} low, because many people want to read, rest, or answer work emails quietly on their way to the office.",
    "cn": "A：幾位早班公車的乘客抱怨，往市區的路上司機的收音機太大聲。 B：我會提醒所有司機把【音量】調低，因為很多人想在上班途中安靜地閱讀、休息或回覆工作郵件。"
  },
  {
    "word": "hotspot",
    "pos": "n.",
    "cn_def": "（無線）熱點",
    "en_def": "a phone or place that shares an internet connection",
    "sentence": "A: The internet at the hotel isn't working, and I need to send the sales contract to our lawyer before midnight. B: You can connect your laptop to my phone's {{BLANK}}, because my plan includes plenty of data, and the file should only take a few minutes to send.",
    "cn": "A：飯店的網路壞了，而我必須在午夜前把銷售合約寄給我們的律師。 B：你可以把筆電連上我手機的【熱點】，因為我的方案有很多數據流量，檔案應該只要幾分鐘就能傳送出去。"
  },
  {
    "word": "bluetooth",
    "pos": "n.",
    "cn_def": "藍牙",
    "en_def": "a way of connecting devices without wires over a short distance",
    "sentence": "A: Do you know how I can play music from my phone through the speakers in the staff lounge for the farewell party? B: Turn on {{BLANK}} in your phone's settings, choose the lounge speaker from the list, and the music should start playing in a few seconds without any cables.",
    "cn": "A：你知道我要怎麼在歡送派對時，用員工休息室的喇叭播放手機裡的音樂嗎？ B：在手機設定裡打開【藍牙】，從清單中選擇休息室的喇叭，幾秒鐘內音樂就會開始播放，不需要任何線材。"
  },
  {
    "word": "portable",
    "pos": "adj.",
    "cn_def": "可攜式的；輕便的",
    "en_def": "easy to carry",
    "sentence": "A: Our sales reps often visit customers in places without power outlets, and their phones die in the afternoon. B: Let's buy each of them a small {{BLANK}} battery pack, which they can keep in their bags and use to charge their phones while traveling between appointments.",
    "cn": "A：我們的業務代表常到沒有插座的地方拜訪客戶，他們的手機下午就沒電了。 B：我們幫每個人買一個小型【可攜式】電池組，他們可以放在包包裡，在往返拜訪行程之間幫手機充電。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy to use or useful because it saves time",
    "sentence": "A: Why did the company decide to let staff pay for lunch in the cafeteria with their phones instead of cash? B: It's much more {{BLANK}} for everyone, because the lines move faster, the cashiers don't need to count coins, and employees can check their spending in the app.",
    "cn": "A：公司為什麼決定讓員工在餐廳用手機付午餐錢，而不用現金？ B：這對每個人來說都【方便】多了，因為隊伍移動得更快，收銀員不用數零錢，員工也能在應用程式裡查看花費。"
  }
];

const MCQS = [
  {
    "q": "Every new sales representative receives a company _____ on the first day. It allows them to check email and maps while visiting clients.",
    "options": [
      "smartphone",
      "volume",
      "signal",
      "battery"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The manager asked her assistant to _____ the supplier this morning. She wants to confirm the delivery date before the afternoon meeting.",
    "options": [
      "mute",
      "unlock",
      "call",
      "download"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "If you are running late for the interview, please _____ me a quick message. I will tell the hiring manager to wait a few minutes.",
    "options": [
      "charge",
      "text",
      "swipe",
      "unlock"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The client was not at his desk, so I left a _____ with his secretary. He should return my call before five o'clock.",
    "options": [
      "battery",
      "screen",
      "storage",
      "message"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Customers who have problems with their orders should _____ our help desk by phone or email. Our staff are available from nine to six on weekdays.",
    "options": [
      "vibrate",
      "contact",
      "scroll",
      "charge"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The touch _____ on my tablet stopped responding after I dropped it. I had to take it to the repair shop near the station.",
    "options": [
      "screen",
      "password",
      "signal",
      "wifi"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "My phone's _____ only lasts about four hours now. I may need to replace it before the long business trip next week.",
    "options": [
      "browser",
      "message",
      "password",
      "battery"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please remember to _____ your laptop before the training session tomorrow. There are only a few power outlets in the meeting room.",
    "options": [
      "mute",
      "text",
      "charge",
      "scroll"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "I forgot my phone _____ at home this morning. Could I borrow yours for an hour so my battery doesn't die?",
    "options": [
      "charger",
      "notification",
      "browser",
      "selfie"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Please make sure your phones do not _____ during the concert. The performers asked the audience to stay completely quiet.",
    "options": [
      "download",
      "unlock",
      "ring",
      "scroll"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "During meetings, I set my phone to _____ instead of using a loud ringtone. That way I can still feel incoming calls without disturbing anyone.",
    "options": [
      "download",
      "vibrate",
      "unlock",
      "scroll"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Our restaurant launched a new _____ last month. Customers can now order meals and earn reward points directly from their phones.",
    "options": [
      "signal",
      "volume",
      "battery",
      "app"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "New employees should _____ the security software before using their laptops. The installation file is available on the company website.",
    "options": [
      "mute",
      "download",
      "tap",
      "ring"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The hotel offers free _____ in every room and in the lobby. Guests only need to enter their room number to connect to the internet.",
    "options": [
      "wifi",
      "storage",
      "volume",
      "camera"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The phone _____ in the basement parking lot is very weak. Drivers often cannot make calls until they reach the ground floor.",
    "options": [
      "charger",
      "selfie",
      "password",
      "signal"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The new model has an excellent _____ that takes sharp photos even at night. Many travel bloggers have already ordered one.",
    "options": [
      "hotspot",
      "password",
      "camera",
      "browser"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ in the conference room is broken, so remote participants cannot hear the presenter. A technician will repair it this afternoon.",
    "options": [
      "speaker",
      "password",
      "selfie",
      "browser"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "You will receive a _____ on your phone when your package is ready for pickup. Please bring your ID to the front counter.",
    "options": [
      "battery",
      "charger",
      "notification",
      "volume"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Employees must use their fingerprints to _____ their work phones. This protects customer information if a device is lost or stolen.",
    "options": [
      "vibrate",
      "unlock",
      "ring",
      "scroll"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "For security reasons, please change your _____ every three months. It should include numbers, letters, and at least one symbol.",
    "options": [
      "speaker",
      "volume",
      "hotspot",
      "password"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The IT team will _____ all office computers to the latest software this weekend. Staff should save their files before leaving on Friday.",
    "options": [
      "vibrate",
      "update",
      "text",
      "ring"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "My phone does not have enough _____ for any more videos. I need to delete some old files or move them to the cloud.",
    "options": [
      "storage",
      "signal",
      "volume",
      "selfie"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The online form works best in the latest version of your web _____. Older versions may not display the buttons correctly.",
    "options": [
      "charger",
      "battery",
      "speaker",
      "browser"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "To pay at the register, simply _____ your phone on the card reader. The payment will be completed in less than two seconds.",
    "options": [
      "download",
      "update",
      "tap",
      "mute"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Please _____ your microphone when you are not speaking during the video conference. Background noise makes it hard for others to hear.",
    "options": [
      "mute",
      "charge",
      "download",
      "text"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Could you turn down the _____ of the music in the lobby? Some guests at the front desk cannot hear the receptionist clearly.",
    "options": [
      "password",
      "storage",
      "volume",
      "hotspot"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The café's internet was down, so I used my phone as a mobile _____. My laptop stayed connected during the entire client presentation.",
    "options": [
      "password",
      "hotspot",
      "charger",
      "selfie"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The wireless earphones connect to your phone through _____. Simply turn it on in the settings and select the device from the list.",
    "options": [
      "storage",
      "password",
      "camera",
      "bluetooth"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "This lightweight printer is fully _____, so sales staff can carry it in a backpack. It even runs on a rechargeable battery.",
    "options": [
      "delicious",
      "portable",
      "jealous",
      "generous"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The new office is in a very _____ location next to the subway station. Most employees can now get to work in under twenty minutes.",
    "options": [
      "convenient",
      "portable",
      "nervous",
      "honest"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "smartphone": {
    "pos": "n.",
    "en_def": "a mobile phone that can use the internet and run apps",
    "cn_def": "智慧型手機"
  },
  "call": {
    "pos": "v.",
    "en_def": "to telephone someone",
    "cn_def": "打電話給"
  },
  "text": {
    "pos": "v.",
    "en_def": "to send a short written message by phone",
    "cn_def": "傳簡訊給"
  },
  "message": {
    "pos": "n.",
    "en_def": "a piece of written or spoken information sent to someone",
    "cn_def": "訊息；留言"
  },
  "contact": {
    "pos": "v.",
    "en_def": "to get in touch with someone by phone, email, etc.",
    "cn_def": "聯絡"
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat glass surface of a phone or computer where you see pictures and words",
    "cn_def": "螢幕"
  },
  "battery": {
    "pos": "n.",
    "en_def": "the part that stores electric power for a phone",
    "cn_def": "電池"
  },
  "charge": {
    "pos": "v.",
    "en_def": "to put electricity into a battery",
    "cn_def": "充電"
  },
  "charger": {
    "pos": "n.",
    "en_def": "a device used to put power into a battery",
    "cn_def": "充電器"
  },
  "ring": {
    "pos": "v.",
    "en_def": "to make a sound when a call comes in",
    "cn_def": "（電話）響"
  },
  "vibrate": {
    "pos": "v.",
    "en_def": "to shake quickly with small movements",
    "cn_def": "震動"
  },
  "app": {
    "pos": "n.",
    "en_def": "a program you download onto a phone",
    "cn_def": "應用程式"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy a file or program from the internet onto a device",
    "cn_def": "下載"
  },
  "wifi": {
    "pos": "n.",
    "en_def": "a way to connect to the internet without wires",
    "cn_def": "無線網路"
  },
  "signal": {
    "pos": "n.",
    "en_def": "the strength of the connection that lets a phone work",
    "cn_def": "訊號"
  },
  "camera": {
    "pos": "n.",
    "en_def": "the part of a phone used to take photos and videos",
    "cn_def": "相機；鏡頭"
  },
  "selfie": {
    "pos": "n.",
    "en_def": "a photo you take of yourself with your phone",
    "cn_def": "自拍照"
  },
  "headphone": {
    "pos": "n.",
    "en_def": "a device you wear over your ears to listen to sound",
    "cn_def": "耳機"
  },
  "speaker": {
    "pos": "n.",
    "en_def": "the part of a device that the sound comes out of",
    "cn_def": "喇叭；擴音器"
  },
  "notification": {
    "pos": "n.",
    "en_def": "a message on a phone that tells you something new has happened",
    "cn_def": "通知"
  },
  "unlock": {
    "pos": "v.",
    "en_def": "to open a phone so you can use it, usually with a code or your finger",
    "cn_def": "解鎖"
  },
  "password": {
    "pos": "n.",
    "en_def": "a secret word or set of numbers used to get into a phone or account",
    "cn_def": "密碼"
  },
  "update": {
    "pos": "v.",
    "en_def": "to put the newest version of software on a device",
    "cn_def": "更新"
  },
  "storage": {
    "pos": "n.",
    "en_def": "the space on a phone for keeping photos, files, and apps",
    "cn_def": "儲存空間"
  },
  "browser": {
    "pos": "n.",
    "en_def": "a program used to look at websites",
    "cn_def": "瀏覽器"
  },
  "scroll": {
    "pos": "v.",
    "en_def": "to move up or down on a screen to see more",
    "cn_def": "捲動（頁面）"
  },
  "tap": {
    "pos": "v.",
    "en_def": "to touch a screen lightly with your finger",
    "cn_def": "輕觸；點按"
  },
  "swipe": {
    "pos": "v.",
    "en_def": "to move your finger quickly across a screen",
    "cn_def": "滑動"
  },
  "mute": {
    "pos": "v.",
    "en_def": "to turn off the sound",
    "cn_def": "使靜音"
  },
  "volume": {
    "pos": "n.",
    "en_def": "how loud a sound is",
    "cn_def": "音量"
  },
  "hotspot": {
    "pos": "n.",
    "en_def": "a phone or place that shares an internet connection",
    "cn_def": "（無線）熱點"
  },
  "bluetooth": {
    "pos": "n.",
    "en_def": "a way of connecting devices without wires over a short distance",
    "cn_def": "藍牙"
  },
  "portable": {
    "pos": "adj.",
    "en_def": "easy to carry",
    "cn_def": "可攜式的；輕便的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or useful because it saves time",
    "cn_def": "方便的"
  }
};

const EXTRA_GLOSSES = {};
