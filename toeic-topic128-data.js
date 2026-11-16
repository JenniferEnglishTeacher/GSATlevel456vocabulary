// Topic 128 Quiz Data: Exhibition 展覽
// Source word list: https://www.examword.com/group-topic/exhibition — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T128 - Exhibition 展覽",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "display",
    "pos": "n.",
    "cn_def": "展示；陳列",
    "en_def": "an arrangement of things for people to look at",
    "sentence": "A: Why did the marketing team ask the store staff to stay late on Friday evening after all the customers had gone home? B: They wanted to set up a new window {{BLANK}} of our winter jackets and boots, so shoppers walking past the mall entrance would notice the products on Saturday morning.",
    "cn": "A：為什麼行銷團隊要求店員在週五晚上所有顧客離開後留下來加班？ B：他們想布置一個新的冬季外套和靴子櫥窗【展示】，讓週六早上經過購物中心入口的購物者能注意到這些商品。"
  },
  {
    "word": "gallery",
    "pos": "n.",
    "cn_def": "畫廊；美術館",
    "en_def": "a room or building where art is shown or sold",
    "sentence": "A: Where should we take the visiting clients from Japan after our long meeting ends on Thursday afternoon? B: There is a small art {{BLANK}} next to the hotel that shows paintings by local artists, and it stays open until eight, so we could walk there before having dinner together.",
    "cn": "A：週四下午漫長的會議結束後，我們應該帶來訪的日本客戶去哪裡？ B：飯店旁邊有一間小型藝術【畫廊】展出本地藝術家的畫作，而且開到八點，所以我們可以在一起吃晚餐前走過去看看。"
  },
  {
    "word": "museum",
    "pos": "n.",
    "cn_def": "博物館",
    "en_def": "a building where old, important, or interesting objects are kept and shown",
    "sentence": "A: What are the new employees from the overseas branch going to do on their free day during the training week? B: The HR department has booked a group tour of the city's history {{BLANK}}, where they can learn about the local culture, and then they will have lunch at a traditional restaurant nearby.",
    "cn": "A：海外分公司的新進員工在訓練週的空閒日要做什麼？ B：人資部門已經預約了市立歷史【博物館】的團體導覽，讓他們可以認識當地文化，之後他們會在附近一家傳統餐廳吃午餐。"
  },
  {
    "word": "showcase",
    "pos": "n.",
    "cn_def": "展示會；展示平台",
    "en_def": "an event or place that shows the best qualities of something",
    "sentence": "A: Why is the design department working so hard on those product samples even though the launch is still two months away? B: The annual technology {{BLANK}} in Taipei is next week, and our manager hopes that presenting our new smart lamps there will attract buyers from several large international companies.",
    "cn": "A：為什麼設計部門這麼努力準備那些產品樣品，明明上市還有兩個月？ B：台北的年度科技【展示會】就在下週，我們經理希望在那裡展示新的智慧檯燈能吸引幾家大型國際公司的買家。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收藏品；館藏",
    "en_def": "a group of similar things that someone has gathered",
    "sentence": "A: Do you know why there are so many security guards standing near the entrance of our office building this morning? B: Our company chairman is lending his private {{BLANK}} of rare old coins to the city museum for a special show, so the guards are protecting the boxes until the delivery trucks arrive.",
    "cn": "A：你知道為什麼今天早上我們辦公大樓入口附近站了這麼多保全嗎？ B：我們公司董事長要把他私人的稀有古錢幣【收藏】借給市立博物館辦特展，所以保全在保護那些箱子，直到運送的卡車抵達。"
  },
  {
    "word": "artifact",
    "pos": "n.",
    "cn_def": "文物；古器物",
    "en_def": "an object made by people long ago that is historically interesting",
    "sentence": "A: Why has the construction work on the new shopping center across from our office stopped for the past two weeks? B: The workers dug up an ancient {{BLANK}} while they were preparing the ground, so the city sent experts to study the area carefully before the building project can continue.",
    "cn": "A：為什麼我們辦公室對面新購物中心的工程已經停了兩個星期？ B：工人在整地時挖出了一件古代【文物】，所以市政府派了專家來仔細研究那個區域，之後建案才能繼續進行。"
  },
  {
    "word": "painting",
    "pos": "n.",
    "cn_def": "畫作；繪畫",
    "en_def": "a picture made with paint",
    "sentence": "A: Have you decided what we should buy as a retirement gift for Mr. Lin, who has worked in our accounting department for thirty years? B: Since he loves the mountains, I suggest a large {{BLANK}} of Yushan by a local artist, which he can hang in his living room at home.",
    "cn": "A：你決定好我們要買什麼退休禮物送給在會計部工作了三十年的林先生了嗎？ B：既然他熱愛山，我建議買一幅本地藝術家畫的玉山大型【畫作】，他可以掛在家裡的客廳。"
  },
  {
    "word": "sculpture",
    "pos": "n.",
    "cn_def": "雕塑；雕像",
    "en_def": "a piece of art made by shaping stone, wood, metal, or clay",
    "sentence": "A: What is that huge metal object that the workers are putting in front of the main entrance of our headquarters? B: It is a modern {{BLANK}} designed by a famous artist from Spain, and the board of directors hopes it will make our building look more welcoming to clients and visitors.",
    "cn": "A：工人們放在我們總部大門前面的那個巨大金屬物體是什麼？ B：那是一位西班牙知名藝術家設計的現代【雕塑】，董事會希望它能讓我們的大樓對客戶和訪客看起來更親切。"
  },
  {
    "word": "installation",
    "pos": "n.",
    "cn_def": "裝置藝術",
    "en_def": "a large artwork made for a particular space, often with light, sound, or objects",
    "sentence": "A: Why are so many young people taking photos on the second floor of the shopping mall this weekend? B: An artist created a light {{BLANK}} there with thousands of tiny colored lamps hanging from the ceiling, and it has become very popular on social media since it opened on Friday.",
    "cn": "A：為什麼這個週末有這麼多年輕人在購物中心二樓拍照？ B：一位藝術家在那裡創作了一件燈光【裝置藝術】，有上千盞彩色小燈從天花板垂下來，自從週五開放以來就在社群媒體上非常受歡迎。"
  },
  {
    "word": "photography",
    "pos": "n.",
    "cn_def": "攝影",
    "en_def": "the art or job of taking photos",
    "sentence": "A: Why did you sign up for that evening class at the community center when you are already so busy at the office? B: Our company website needs better pictures of our products, so I want to improve my {{BLANK}} skills, and the class teaches lighting and camera settings every Tuesday night.",
    "cn": "A：你在辦公室已經這麼忙了，為什麼還報名社區中心的夜間課程？ B：我們公司網站需要更好的產品照片，所以我想提升我的【攝影】技巧，而那門課每週二晚上教打光和相機設定。"
  },
  {
    "word": "artist",
    "pos": "n.",
    "cn_def": "藝術家；畫家",
    "en_def": "a person who paints, draws, or makes art",
    "sentence": "A: Who designed the colorful wall pictures in the new staff lounge that everyone has been talking about this week? B: The office manager hired a young local {{BLANK}} who spent three days painting flowers and city scenes on the walls, and she even asked employees for ideas before she started.",
    "cn": "A：這週大家都在討論的新員工休息室裡那些色彩繽紛的牆面圖畫是誰設計的？ B：辦公室經理請了一位年輕的本地【藝術家】，她花了三天在牆上畫花朵和城市風景，而且開始之前還詢問了員工的想法。"
  },
  {
    "word": "curator",
    "pos": "n.",
    "cn_def": "策展人；館長",
    "en_def": "a person in charge of the objects in a museum or gallery",
    "sentence": "A: Who should I contact about borrowing some old photographs of our factory for the company's fiftieth anniversary event next month? B: You should email the {{BLANK}} at the city history museum, because she is responsible for the items they keep and decides whether they can be lent to other organizations.",
    "cn": "A：為了下個月公司五十週年活動，我想借一些工廠的老照片，應該聯絡誰？ B：你應該寫電子郵件給市立歷史博物館的【策展人】，因為她負責館內保存的物品，並決定是否能借給其他機構。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main subject or idea of an event or work",
    "sentence": "A: Has the planning committee decided on the decorations for the company's year-end party at the hotel ballroom? B: Yes, they chose \"Travel Around the World\" as the {{BLANK}}, so each department will decorate a table with food and pictures from a different country, and guests can wear costumes.",
    "cn": "A：籌備委員會決定好公司在飯店宴會廳舉辦的尾牙裝飾了嗎？ B：決定了，他們選了「環遊世界」作為【主題】，所以每個部門會用不同國家的食物和圖片布置一張桌子，賓客也可以穿戲服。"
  },
  {
    "word": "venue",
    "pos": "n.",
    "cn_def": "場地；會場",
    "en_def": "the place where an event happens",
    "sentence": "A: Why did the event organizers move the product launch from the downtown hotel to the convention center at the last minute? B: More than five hundred guests registered, so the hotel ballroom was too small, and they needed a larger {{BLANK}} with enough seats, parking spaces, and a big stage.",
    "cn": "A：為什麼活動主辦單位在最後一刻把產品發表會從市中心飯店改到會展中心？ B：報名的賓客超過五百人，飯店宴會廳太小了，他們需要一個有足夠座位、停車位和大舞台的更大【場地】。"
  },
  {
    "word": "opening",
    "pos": "n.",
    "cn_def": "開幕；開幕式",
    "en_def": "the first day or ceremony when something starts or opens to the public",
    "sentence": "A: Are you going to the new art center downtown on Saturday evening, or do you have to work overtime again? B: I'm definitely going, because our company sponsored the grand {{BLANK}}, and my manager asked me to welcome the guests and give out free drinks at the front door.",
    "cn": "A：你週六晚上會去市中心新的藝術中心嗎？還是你又得加班？ B：我一定會去，因為我們公司贊助了盛大的【開幕式】，經理要我在門口迎接賓客並發送免費飲料。"
  },
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "訪客；參觀者",
    "en_def": "a person who comes to see a place or person",
    "sentence": "A: Why does the security guard at the front desk ask everyone to sign a book when they enter our building? B: Every {{BLANK}} must write down their name, the company they work for, and the time they arrive, so that the office knows exactly who is inside in case of an emergency.",
    "cn": "A：為什麼前台的保全要每個進入我們大樓的人在本子上簽名？ B：每位【訪客】都必須寫下姓名、任職的公司和抵達時間，這樣萬一發生緊急狀況，辦公室才能確切知道誰在裡面。"
  },
  {
    "word": "ticket",
    "pos": "n.",
    "cn_def": "門票；票",
    "en_def": "a piece of paper or digital code that lets you enter an event",
    "sentence": "A: How much did it cost the company to take our whole sales team to the science fair in Kaohsiung last weekend? B: Each {{BLANK}} was only two hundred dollars because we bought them online a month early, but the train fares and hotel rooms made the total cost much higher.",
    "cn": "A：上週末公司帶整個業務團隊去高雄的科學展花了多少錢？ B：每張【門票】只要兩百元，因為我們提早一個月在網路上買，但火車票和飯店房間讓總花費高了很多。"
  },
  {
    "word": "brochure",
    "pos": "n.",
    "cn_def": "小冊子；簡介手冊",
    "en_def": "a thin booklet with pictures and information about a product, service, or event",
    "sentence": "A: What should we hand to the guests who stop at our booth at the trade show next Wednesday? B: The design team printed a colorful {{BLANK}} that explains our products, prices, and contact information, so visitors can take it home and read it later when they have more time.",
    "cn": "A：下週三商展時，我們應該發什麼給停在我們攤位的來賓？ B：設計團隊印了一份彩色的【簡介手冊】，說明我們的產品、價格和聯絡資訊，讓訪客可以帶回家，等有空時再讀。"
  },
  {
    "word": "catalog",
    "pos": "n.",
    "cn_def": "目錄；型錄",
    "en_def": "a list or book of all the items for sale or on show",
    "sentence": "A: How can our customers in other countries find out about all the furniture we sell if they cannot visit the showroom? B: We send them our online {{BLANK}}, which has photos, sizes, and prices of every sofa and table, and they can place orders directly on the website.",
    "cn": "A：如果其他國家的客戶無法參觀展示間，他們要怎麼了解我們販售的所有家具？ B：我們會寄給他們線上【型錄】，裡面有每張沙發和桌子的照片、尺寸和價格，他們可以直接在網站上下單。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動的",
    "en_def": "letting people take part by touching, using, or responding",
    "sentence": "A: Why do children enjoy the new science center so much more than the old one that closed last year? B: The new building has many {{BLANK}} screens and machines that let kids press buttons, play games, and do simple experiments themselves instead of just reading signs on the walls.",
    "cn": "A：為什麼孩子們比較喜歡新的科學中心，而不是去年關閉的舊館？ B：新館有許多【互動式】螢幕和機器，讓孩子可以自己按按鈕、玩遊戲、做簡單的實驗，而不只是讀牆上的說明牌。"
  },
  {
    "word": "educational",
    "pos": "adj.",
    "cn_def": "有教育意義的",
    "en_def": "teaching people something useful",
    "sentence": "A: Why did the school choose the ocean exhibit for the students' field trip instead of the amusement park this year? B: The teachers wanted something more {{BLANK}}, so the students can learn about sea animals and pollution, and they will also write short reports about what they saw afterward.",
    "cn": "A：為什麼學校今年的校外教學選擇海洋特展而不是遊樂園？ B：老師們想要更有【教育意義】的活動，讓學生可以認識海洋動物和污染問題，之後他們也要針對所見寫簡短的報告。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "暫時的；臨時的",
    "en_def": "lasting for only a short time",
    "sentence": "A: Is the dinosaur show at the natural history museum going to stay there for the rest of the year? B: No, it is only a {{BLANK}} exhibit that will close at the end of March, so if you want to take your kids, you should buy tickets online soon before they sell out.",
    "cn": "A：自然史博物館的恐龍展會一直展到年底嗎？ B：不會，那只是一個【短期的】特展，三月底就會結束，所以如果你想帶孩子去，應該盡快在網路上買票，以免賣完。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "永久的；常設的",
    "en_def": "lasting for a very long time or forever",
    "sentence": "A: Will the famous painting that was shown here last month return to the gallery in Paris after the show ends? B: No, our museum bought it from the owner, so it is now part of the {{BLANK}} collection, and visitors will be able to see it in the main hall every day.",
    "cn": "A：上個月在這裡展出的那幅名畫，展覽結束後會回到巴黎的美術館嗎？ B：不會，我們博物館向收藏者買下了它，所以它現在是【永久】館藏的一部分，訪客每天都能在主廳看到它。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "relating to seeing or things you can see",
    "sentence": "A: Do you think our sales presentation for the hotel group next Monday needs any changes before we send it out? B: The information is good, but it has too much text, so I suggest adding more {{BLANK}} elements like charts, photos, and short videos to keep the audience interested.",
    "cn": "A：你覺得我們下週一要給飯店集團的業務簡報在寄出前需要修改嗎？ B：內容很好，但文字太多，所以我建議加入更多像圖表、照片和短片這類【視覺】元素，讓聽眾保持興趣。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "having or using new and original ideas",
    "sentence": "A: Why did the advertising agency hire that young designer even though she has only one year of work experience? B: Her ideas are very {{BLANK}} and fresh, and during the interview she showed a poster campaign that helped a small café double its customers in just three months.",
    "cn": "A：為什麼廣告公司會錄用那位年輕設計師，明明她只有一年工作經驗？ B：她的想法非常【有創意】又新穎，而且面試時她展示了一個海報宣傳活動，幫助一家小咖啡館在短短三個月內客人翻倍。"
  },
  {
    "word": "informative",
    "pos": "adj.",
    "cn_def": "提供有用資訊的；內容豐富的",
    "en_def": "giving useful information",
    "sentence": "A: How was the safety training session that the factory manager organized for all the new workers yesterday afternoon? B: It was very {{BLANK}}, because the trainer explained how to use each machine correctly, showed real examples of accidents, and answered every question we asked clearly.",
    "cn": "A：昨天下午廠長為所有新進員工安排的安全訓練課程怎麼樣？ B：內容非常【豐富實用】，因為講師說明了如何正確使用每台機器、展示了真實的事故案例，並清楚回答了我們提出的每個問題。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探究",
    "en_def": "to travel around or look at a place to learn about it",
    "sentence": "A: What are you planning to do during your free afternoon after the conference in Tokyo ends on Friday? B: I want to {{BLANK}} the old neighborhoods near the river, visit a few small shops and temples, and try some local street food before I fly back to Taipei on Saturday.",
    "cn": "A：週五東京的會議結束後，你空閒的下午打算做什麼？ B：我想去【探索】河邊的老街區，逛幾家小店和寺廟，再嚐嚐當地的街頭小吃，然後週六飛回台北。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "觀察",
    "en_def": "to watch someone or something carefully",
    "sentence": "A: Why is the new assistant sitting in the back of the meeting room without saying anything during the client meetings? B: The manager asked her to {{BLANK}} how the senior staff talk with customers and handle difficult questions, so she can learn before she starts leading meetings herself next month.",
    "cn": "A：為什麼新助理在客戶會議時都坐在會議室後面一句話也不說？ B：經理要她【觀察】資深員工如何與客戶交談及處理困難的問題，這樣她下個月開始自己主持會議前就能先學習。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "欣賞；重視",
    "en_def": "to understand and enjoy the good qualities of something",
    "sentence": "A: Why did the museum guide ask everyone to put away their phones before entering the main hall this afternoon? B: She said visitors can {{BLANK}} the details of the paintings much better when they look carefully with their own eyes instead of taking photos the whole time.",
    "cn": "A：為什麼今天下午博物館導覽員要大家在進入主廳前把手機收起來？ B：她說訪客用自己的眼睛仔細看，而不是一直拍照，才更能【欣賞】畫作的細節。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "啟發；激勵",
    "en_def": "to give someone the idea or desire to do something",
    "sentence": "A: Why does the company invite successful business owners to speak to the young employees every month? B: The managers hope their stories will {{BLANK}} the staff to work harder, share new ideas, and maybe even start their own projects within the company in the future.",
    "cn": "A：為什麼公司每個月都邀請成功的企業主來對年輕員工演講？ B：主管們希望他們的故事能【激勵】員工更努力工作、分享新點子，甚至未來在公司內部發起自己的專案。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "強調；突顯",
    "en_def": "to show that something is important; to make something stand out",
    "sentence": "A: What should I focus on in my report about the trade fair for the board meeting tomorrow morning? B: You should {{BLANK}} the three new contracts we signed with buyers from Europe, because the directors care most about results and will want to know how much income they will bring.",
    "cn": "A：明天早上董事會的商展報告，我應該著重在哪裡？ B：你應該【強調】我們和歐洲買家簽下的三份新合約，因為董事們最在意成果，也會想知道這些合約能帶來多少收入。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；發表",
    "en_def": "a talk that gives information about something",
    "sentence": "A: Why are you staying so late at the office tonight when everyone else has already gone home? B: I have to give a {{BLANK}} about our new product line to the sales directors at nine tomorrow morning, and I still need to finish the slides and practice what I want to say.",
    "cn": "A：大家都回家了，為什麼你今晚還在辦公室待這麼晚？ B：明天早上九點我要向業務總監們做一場關於新產品線的【簡報】，我還得完成投影片並練習要說的內容。"
  },
  {
    "word": "guided",
    "pos": "adj.",
    "cn_def": "有導覽的",
    "en_def": "led by a guide who shows and explains things",
    "sentence": "A: How will the overseas partners see our factory when they visit Hsinchu next Tuesday afternoon? B: The production manager will lead a {{BLANK}} tour of the whole building, explaining each step of the process, and afterwards the partners will have tea and cake in the meeting room.",
    "cn": "A：下週二下午海外合作夥伴來新竹時，要怎麼參觀我們的工廠？ B：生產經理會帶領一場整棟廠房的【導覽】參觀，說明製程的每個步驟，之後夥伴們會在會議室享用茶點和蛋糕。"
  },
  {
    "word": "cultural",
    "pos": "adj.",
    "cn_def": "文化的",
    "en_def": "relating to the customs, arts, and beliefs of a group of people",
    "sentence": "A: Why do we give new foreign employees a short training course before they start working with our local customers? B: There are many {{BLANK}} differences in how people greet each other, give gifts, and talk about business, so the course helps them avoid embarrassing mistakes with clients.",
    "cn": "A：為什麼我們要在外籍新進員工開始接觸本地客戶前，先讓他們上一個短期訓練課程？ B：人們打招呼、送禮和談生意的方式有許多【文化】差異，所以這個課程幫助他們避免在客戶面前犯下尷尬的錯誤。"
  },
  {
    "word": "publicly",
    "pos": "adv.",
    "cn_def": "公開地",
    "en_def": "in a way that everyone can see or know about",
    "sentence": "A: When will the company tell everyone about the plan to open three new stores in southern Taiwan next year? B: The CEO will announce the plan {{BLANK}} at a press conference on Monday, but until then, managers have asked staff not to discuss it with customers or post anything online.",
    "cn": "A：公司什麼時候會讓大家知道明年要在南台灣開三家新店的計畫？ B：執行長會在週一的記者會上【公開】宣布這項計畫，但在那之前，主管要求員工不要和客戶討論，也不要在網路上發布任何消息。"
  }
];

const MCQS = [
  {
    "q": "The new smartphones will be on _____ in the main lobby all week. Staff members can test them during their lunch break.",
    "options": [
      "display",
      "theme",
      "curator",
      "venue"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The art _____ downtown will exhibit works by local painters next month. Admission is free for employees of sponsoring companies.",
    "options": [
      "brochure",
      "ticket",
      "gallery",
      "theme"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The trade fair serves as a _____ for small companies with new products. Many buyers attend it every year to find suppliers.",
    "options": [
      "curator",
      "showcase",
      "ticket",
      "sculpture"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The museum recently added fifty rare maps to its _____. They were donated by a retired shipping company owner.",
    "options": [
      "venue",
      "opening",
      "theme",
      "collection"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Each ancient _____ in the exhibit has a label explaining where it was found. Visitors are asked not to touch the glass cases.",
    "options": [
      "artifact",
      "brochure",
      "venue",
      "theme"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "A large bronze _____ of the company founder stands in front of the headquarters. It was made by a well-known local artist.",
    "options": [
      "brochure",
      "ticket",
      "catalog",
      "sculpture"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The lobby features a new light _____ made of hundreds of glass bulbs. It changes color every hour throughout the day.",
    "options": [
      "catalog",
      "installation",
      "ticket",
      "curator"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Flash _____ is not allowed inside the exhibition hall. The bright light can damage old paintings and bother other guests.",
    "options": [
      "sculpture",
      "venue",
      "photography",
      "theme"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The museum's chief _____ chose every item in the new show. She spent two years collecting pieces from private owners.",
    "options": [
      "visitor",
      "curator",
      "ticket",
      "brochure"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The _____ of this year's conference is green business. All speakers will discuss ways to reduce waste and save energy.",
    "options": [
      "theme",
      "venue",
      "ticket",
      "catalog"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The organizers are still looking for a suitable _____ for the job fair. It must hold at least three hundred people.",
    "options": [
      "theme",
      "brochure",
      "venue",
      "curator"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The mayor will cut the ribbon at the grand _____ of the art center. The ceremony starts at ten in the morning on Saturday.",
    "options": [
      "theme",
      "catalog",
      "brochure",
      "opening"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Please pick up a free _____ at the information desk. It lists the hours, floor map, and special events for the month.",
    "options": [
      "brochure",
      "sculpture",
      "curator",
      "venue"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Customers can order any item from our spring _____ by phone or online. Delivery usually takes three to five business days.",
    "options": [
      "curator",
      "catalog",
      "venue",
      "sculpture"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The science center offers _____ games that respond when children touch the screen. Parents say their kids never get bored there.",
    "options": [
      "guided",
      "permanent",
      "temporary",
      "interactive"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The field trip was both fun and _____ for the trainees. They learned how the factory turns recycled plastic into new products.",
    "options": [
      "permanent",
      "guided",
      "educational",
      "temporary"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The gallery is only a _____ home for the paintings. They will return to the national museum when repairs there are finished.",
    "options": [
      "temporary",
      "creative",
      "visual",
      "guided"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "After a six-month trial period, the designer was offered a _____ position. She will now receive full benefits and a higher salary.",
    "options": [
      "visual",
      "guided",
      "informative",
      "permanent"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Charts and photos are useful _____ aids in any sales talk. They help the audience understand numbers quickly and easily.",
    "options": [
      "cultural",
      "guided",
      "visual",
      "temporary"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The marketing team needs a _____ idea for the new advertisement. The last campaign was too similar to our competitor's.",
    "options": [
      "permanent",
      "creative",
      "guided",
      "temporary"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The safety workshop was short but very _____. Everyone left with a clear list of steps to follow during a fire.",
    "options": [
      "permanent",
      "guided",
      "temporary",
      "informative"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company plans to _____ new markets in Southeast Asia next year. A research team will visit Vietnam and Thailand first.",
    "options": [
      "explore",
      "observe",
      "appreciate",
      "inspire"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Trainee nurses must _____ experienced staff for two weeks before treating patients. They take notes on every procedure they watch.",
    "options": [
      "explore",
      "observe",
      "inspire",
      "highlight"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "We truly _____ your quick response to our request. Your help allowed us to finish the project ahead of schedule.",
    "options": [
      "observe",
      "explore",
      "appreciate",
      "highlight"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The speaker's success story helped _____ many young employees to start their own projects. Several have already shared new ideas with management.",
    "options": [
      "inspire",
      "observe",
      "explore",
      "appreciate"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "In your report, please _____ the main risks of the new plan. The directors need to see them clearly before Friday's meeting.",
    "options": [
      "inspire",
      "appreciate",
      "explore",
      "highlight"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The sales manager will give a short _____ about the new pricing plan. Please bring your laptops to the meeting room.",
    "options": [
      "venue",
      "presentation",
      "curator",
      "sculpture"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Visitors can join a free _____ tour of the factory every Saturday. An engineer explains each step of the production line.",
    "options": [
      "permanent",
      "visual",
      "guided",
      "creative"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Our overseas staff attend training on _____ differences before meeting local clients. The course covers greetings, gifts, and table manners.",
    "options": [
      "visual",
      "guided",
      "permanent",
      "cultural"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The company will _____ announce the merger at a press conference on Monday. Until then, employees should not discuss it with outsiders.",
    "options": [
      "creatively",
      "publicly",
      "visually",
      "permanently"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "display": {
    "pos": "n.",
    "en_def": "an arrangement of things for people to look at",
    "cn_def": "展示；陳列"
  },
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where art is shown or sold",
    "cn_def": "畫廊；美術館"
  },
  "museum": {
    "pos": "n.",
    "en_def": "a building where old, important, or interesting objects are kept and shown",
    "cn_def": "博物館"
  },
  "showcase": {
    "pos": "n.",
    "en_def": "an event or place that shows the best qualities of something",
    "cn_def": "展示會；展示平台"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of similar things that someone has gathered",
    "cn_def": "收藏品；館藏"
  },
  "artifact": {
    "pos": "n.",
    "en_def": "an object made by people long ago that is historically interesting",
    "cn_def": "文物；古器物"
  },
  "painting": {
    "pos": "n.",
    "en_def": "a picture made with paint",
    "cn_def": "畫作；繪畫"
  },
  "sculpture": {
    "pos": "n.",
    "en_def": "a piece of art made by shaping stone, wood, metal, or clay",
    "cn_def": "雕塑；雕像"
  },
  "installation": {
    "pos": "n.",
    "en_def": "a large artwork made for a particular space, often with light, sound, or objects",
    "cn_def": "裝置藝術"
  },
  "photography": {
    "pos": "n.",
    "en_def": "the art or job of taking photos",
    "cn_def": "攝影"
  },
  "artist": {
    "pos": "n.",
    "en_def": "a person who paints, draws, or makes art",
    "cn_def": "藝術家；畫家"
  },
  "curator": {
    "pos": "n.",
    "en_def": "a person in charge of the objects in a museum or gallery",
    "cn_def": "策展人；館長"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main subject or idea of an event or work",
    "cn_def": "主題"
  },
  "venue": {
    "pos": "n.",
    "en_def": "the place where an event happens",
    "cn_def": "場地；會場"
  },
  "opening": {
    "pos": "n.",
    "en_def": "the first day or ceremony when something starts or opens to the public",
    "cn_def": "開幕；開幕式"
  },
  "visitor": {
    "pos": "n.",
    "en_def": "a person who comes to see a place or person",
    "cn_def": "訪客；參觀者"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a piece of paper or digital code that lets you enter an event",
    "cn_def": "門票；票"
  },
  "brochure": {
    "pos": "n.",
    "en_def": "a thin booklet with pictures and information about a product, service, or event",
    "cn_def": "小冊子；簡介手冊"
  },
  "catalog": {
    "pos": "n.",
    "en_def": "a list or book of all the items for sale or on show",
    "cn_def": "目錄；型錄"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "letting people take part by touching, using, or responding",
    "cn_def": "互動的"
  },
  "educational": {
    "pos": "adj.",
    "en_def": "teaching people something useful",
    "cn_def": "有教育意義的"
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting for only a short time",
    "cn_def": "暫時的；臨時的"
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "lasting for a very long time or forever",
    "cn_def": "永久的；常設的"
  },
  "visual": {
    "pos": "adj.",
    "en_def": "relating to seeing or things you can see",
    "cn_def": "視覺的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "having or using new and original ideas",
    "cn_def": "有創意的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving useful information",
    "cn_def": "提供有用資訊的；內容豐富的"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around or look at a place to learn about it",
    "cn_def": "探索；探究"
  },
  "observe": {
    "pos": "v.",
    "en_def": "to watch someone or something carefully",
    "cn_def": "觀察"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to understand and enjoy the good qualities of something",
    "cn_def": "欣賞；重視"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the idea or desire to do something",
    "cn_def": "啟發；激勵"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to show that something is important; to make something stand out",
    "cn_def": "強調；突顯"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information about something",
    "cn_def": "簡報；發表"
  },
  "guided": {
    "pos": "adj.",
    "en_def": "led by a guide who shows and explains things",
    "cn_def": "有導覽的"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "relating to the customs, arts, and beliefs of a group of people",
    "cn_def": "文化的"
  },
  "publicly": {
    "pos": "adv.",
    "en_def": "in a way that everyone can see or know about",
    "cn_def": "公開地"
  }
};

const EXTRA_GLOSSES = {};
