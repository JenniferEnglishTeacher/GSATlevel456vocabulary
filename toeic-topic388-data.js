// Topic 388 Quiz Data: Surprise 驚喜
// Source word list: https://www.examword.com/group-topic/surprise — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T388 - Surprise 驚喜",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "astonishment",
    "pos": "n.",
    "cn_def": "驚訝；驚愕",
    "en_def": "the feeling of being very surprised",
    "sentence": "A: Why did the sales team look so happy when they came out of the meeting room this morning after the quarterly review? B: To everyone's {{BLANK}}, the manager announced that our small branch had earned more profit than the main office, so we will all receive a bonus next month.",
    "cn": "A：今天早上季度檢討後，業務團隊走出會議室時為什麼看起來那麼開心？ B：令大家【驚訝】的是，經理宣布我們這間小分公司賺的利潤比總公司還多，所以下個月大家都會拿到獎金。"
  },
  {
    "word": "amazement",
    "pos": "n.",
    "cn_def": "驚奇；驚嘆",
    "en_def": "a feeling of great surprise and pleasure",
    "sentence": "A: How did the visitors from Japan react when you showed them around the new factory and the automatic packing machines yesterday? B: They watched in {{BLANK}} as the robots packed hundreds of boxes in just a few minutes, and several of them took videos to show their own managers back home.",
    "cn": "A：昨天你帶日本來的訪客參觀新工廠和自動包裝機時，他們有什麼反應？ B：他們【驚奇】地看著機器人在短短幾分鐘內包裝好幾百個箱子，其中好幾位還拍了影片要帶回去給自己的主管看。"
  },
  {
    "word": "shock",
    "pos": "n.",
    "cn_def": "震驚；衝擊",
    "en_def": "a sudden, unpleasant surprise",
    "sentence": "A: Have you heard that the café across from our office is closing at the end of this month after twenty years in business? B: Yes, it came as a real {{BLANK}} to me, because it was always full at lunchtime, but the owner told me the rent has nearly doubled this year.",
    "cn": "A：你有聽說我們辦公室對面那家營業了二十年的咖啡館這個月底要關門嗎？ B：有啊，這真的讓我很【震驚】，因為它午餐時間總是客滿，不過老闆告訴我今年的房租幾乎漲了一倍。"
  },
  {
    "word": "disbelief",
    "pos": "n.",
    "cn_def": "難以置信；不相信",
    "en_def": "the feeling of not being able to believe something",
    "sentence": "A: What did the customer say when you told him the repair would cost more than buying a brand-new printer for his small office? B: He stared at me in {{BLANK}} for a moment and then asked me to check the price again, because he had paid much less for the same repair last year.",
    "cn": "A：當你告訴那位客人，修理費會比幫他的小辦公室買一台全新印表機還貴時，他說了什麼？ B：他【難以置信】地盯著我看了一會兒，然後要我再查一次價格，因為他去年同樣的修理付的錢少得多。"
  },
  {
    "word": "wonder",
    "pos": "n.",
    "cn_def": "驚奇；驚嘆",
    "en_def": "a feeling of surprise and admiration for something beautiful or unusual",
    "sentence": "A: Why do so many tourists stop and take pictures in the lobby of the new hotel downtown, even if they are not staying there? B: The huge glass ceiling and the indoor waterfall fill people with {{BLANK}}, so the hotel has become a popular place for photos, and the manager is very pleased with the free advertising.",
    "cn": "A：為什麼這麼多觀光客會在市中心那家新飯店的大廳停下來拍照，即使他們沒有住在那裡？ B：巨大的玻璃天花板和室內瀑布讓人充滿【驚奇】，所以這家飯店成了熱門的拍照地點，經理對這種免費宣傳非常滿意。"
  },
  {
    "word": "stun",
    "pos": "v.",
    "cn_def": "使震驚；使目瞪口呆",
    "en_def": "to surprise or shock someone so much that they cannot react",
    "sentence": "A: Are you sure it is a good idea to tell the whole staff about the merger at Friday's meeting instead of sending an email first? B: I know the news will {{BLANK}} many employees, but I think it is better to explain the changes face to face and answer their questions about their jobs and salaries.",
    "cn": "A：你確定在星期五的會議上把合併的事告訴全體員工，而不是先寄電子郵件，是個好主意嗎？ B：我知道這個消息會讓許多員工【震驚】，但我認為當面說明這些改變，並回答他們關於工作和薪水的問題會比較好。"
  },
  {
    "word": "astonish",
    "pos": "v.",
    "cn_def": "使驚訝",
    "en_def": "to surprise someone very much",
    "sentence": "A: What do you think the judges will say when they taste the new spicy chocolate cake that our bakery is entering in the competition next week? B: I believe the unusual flavor will {{BLANK}} them, because nobody else has ever mixed hot peppers with dark chocolate, and our test customers loved it last month.",
    "cn": "A：你覺得評審品嚐我們烘焙坊下週要參賽的新款辣味巧克力蛋糕時會說什麼？ B：我相信這種特別的口味會讓他們【大吃一驚】，因為從來沒有人把辣椒和黑巧克力混在一起，而且上個月試吃的客人都很喜歡。"
  },
  {
    "word": "amaze",
    "pos": "v.",
    "cn_def": "使驚嘆；使驚奇",
    "en_def": "to surprise someone in a very pleasant way",
    "sentence": "A: Why are you so confident that the clients will like the new website design that our team has been working on for the past three weeks? B: The colorful pictures and the fast search function will {{BLANK}} them, and I also added a short video that shows how easily customers can place an order on their phones.",
    "cn": "A：你為什麼這麼有把握客戶會喜歡我們團隊過去三週一直在做的新網站設計？ B：繽紛的圖片和快速的搜尋功能會讓他們【驚嘆】，而且我還加了一段短片，展示顧客用手機下單有多麼容易。"
  },
  {
    "word": "startle",
    "pos": "v.",
    "cn_def": "使嚇一跳；使受驚",
    "en_def": "to suddenly frighten or surprise someone a little",
    "sentence": "A: Could you please lower the volume of the fire alarm test that is planned for this afternoon in the warehouse building? B: Sure, I don't want the loud noise to {{BLANK}} the workers who are driving the forklifts, so I will also send everyone a text message ten minutes before the test begins.",
    "cn": "A：可以請你把今天下午倉庫大樓預定的火災警報測試音量調低一點嗎？ B：當然，我不希望巨大的聲響【嚇到】正在駕駛堆高機的工人，所以我也會在測試開始前十分鐘傳簡訊通知大家。"
  },
  {
    "word": "unexpected",
    "pos": "adj.",
    "cn_def": "意外的；出乎意料的",
    "en_def": "not expected; surprising",
    "sentence": "A: Why did the train to Taichung leave almost forty minutes late this morning, even though the weather was clear and sunny? B: There was an {{BLANK}} problem with the signal system near the station, so the staff had to check every line carefully before they allowed any trains to depart safely.",
    "cn": "A：今天早上天氣晴朗，為什麼往台中的火車還是晚了將近四十分鐘才開？ B：車站附近的號誌系統發生了【意外的】問題，所以工作人員必須仔細檢查每一條路線，才能讓列車安全出發。"
  },
  {
    "word": "sudden",
    "pos": "adj.",
    "cn_def": "突然的",
    "en_def": "happening quickly and without warning",
    "sentence": "A: Why did the restaurant have to close early last night while many customers were still waiting for their dinner? B: There was a {{BLANK}} power cut in the whole neighborhood around eight o'clock, and the kitchen could not cook anything, so the manager gave everyone a coupon for a free meal next time.",
    "cn": "A：昨晚還有很多客人在等晚餐，為什麼那家餐廳必須提早打烊？ B：大約八點時整個社區【突然】停電，廚房什麼都不能煮，所以經理給每個人一張下次免費用餐的優惠券。"
  },
  {
    "word": "unbelievable",
    "pos": "adj.",
    "cn_def": "令人難以置信的",
    "en_def": "so surprising that it is hard to believe",
    "sentence": "A: Did you really buy that new laptop for only half the usual price at the electronics store near the train station? B: Yes, the price was {{BLANK}}, because the store was moving to a new location and wanted to sell all its old stock before the end of the week.",
    "cn": "A：你真的在火車站附近的電器行用半價買到那台新筆電嗎？ B：對啊，價格【令人難以置信】，因為那家店要搬到新地點，想在週末前把所有舊庫存賣掉。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "顯著的；非凡的",
    "en_def": "unusual or surprising in a way that people notice",
    "sentence": "A: How did the new sales manager manage to increase our online orders so quickly after she joined the company in March? B: She made a {{BLANK}} improvement in only three months by training the staff to answer customer messages faster and by offering free delivery on weekends.",
    "cn": "A：新的業務經理三月加入公司後，是怎麼這麼快就讓我們的網路訂單增加的？ B：她在短短三個月內就帶來【顯著的】進步，方法是訓練員工更快回覆顧客訊息，以及在週末提供免運費。"
  },
  {
    "word": "extraordinary",
    "pos": "adj.",
    "cn_def": "非凡的；特別的",
    "en_def": "very unusual and much greater or better than normal",
    "sentence": "A: Why is everyone talking about the new employee in the accounting department who started working here last Monday? B: She has an {{BLANK}} memory for numbers, so she can remember the prices of almost every product we sell, and she found two mistakes in last year's reports on her first day.",
    "cn": "A：為什麼大家都在談論上週一開始在會計部上班的那位新員工？ B：她對數字有【非凡的】記憶力，幾乎記得我們賣的每一樣產品的價格，而且她第一天上班就在去年的報告裡找到兩個錯誤。"
  },
  {
    "word": "incredible",
    "pos": "adj.",
    "cn_def": "極好的；令人驚嘆的",
    "en_def": "extremely good or surprising",
    "sentence": "A: How was the view from the conference room on the top floor of the hotel where you stayed during your business trip to Singapore? B: It was {{BLANK}}, especially at night, because I could see the whole city and the harbor lights, and our clients said it was the best meeting room they had ever used.",
    "cn": "A：你去新加坡出差時住的那家飯店，頂樓會議室的景色怎麼樣？ B：景色【令人驚嘆】，尤其是晚上，因為我可以看到整座城市和港口的燈光，我們的客戶說那是他們用過最棒的會議室。"
  },
  {
    "word": "overwhelmed",
    "pos": "adj.",
    "cn_def": "不知所措的；深受感動的",
    "en_def": "having such a strong feeling that you do not know how to react",
    "sentence": "A: How did the new intern feel when the whole team surprised her with a birthday cake during the lunch break yesterday? B: She was completely {{BLANK}} and almost cried, because she had only been working here for two weeks and did not expect anyone to remember her birthday.",
    "cn": "A：昨天午休時全組拿生日蛋糕給新實習生驚喜，她有什麼感覺？ B：她完全【感動得不知所措】，差點哭出來，因為她才來這裡上班兩個星期，沒想到有人會記得她的生日。"
  },
  {
    "word": "speechless",
    "pos": "adj.",
    "cn_def": "說不出話的",
    "en_def": "unable to speak because you are very surprised or emotional",
    "sentence": "A: What happened when the boss told Kevin at the year-end party that he had won the prize for best employee of the year? B: He was so {{BLANK}} that he just stood on the stage and smiled for a long time, and then he finally thanked his team for all their help and support.",
    "cn": "A：老闆在尾牙上告訴凱文他獲得年度最佳員工獎時，發生了什麼事？ B：他驚訝得【說不出話】，只是站在台上笑了很久，最後才感謝他的團隊給予的所有幫助和支持。"
  },
  {
    "word": "gasp",
    "pos": "v.",
    "cn_def": "倒抽一口氣",
    "en_def": "to breathe in suddenly and loudly because you are surprised or shocked",
    "sentence": "A: How did the audience react when the speaker showed the photo of the damaged factory at the safety training session this morning? B: Many people began to {{BLANK}} when they saw how badly the machines had been burned, and afterward several workers asked how they could prevent a fire in our own building.",
    "cn": "A：今天早上的安全訓練課程中，講者展示那張受損工廠的照片時，聽眾有什麼反應？ B：很多人看到機器燒得那麼嚴重時都【倒抽一口氣】，之後有好幾位工人詢問要如何預防我們自己的大樓發生火災。"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "cn_def": "揭露；透露",
    "en_def": "to show or tell something that was secret or hidden",
    "sentence": "A: When will the marketing department finally show us the design of the new company logo that everyone has been talking about? B: They plan to {{BLANK}} it at the staff meeting next Friday afternoon, and after that they will print it on all our business cards, shopping bags, and delivery trucks.",
    "cn": "A：行銷部什麼時候才會讓我們看大家一直在談論的新公司標誌設計？ B：他們打算在下週五下午的員工會議上【揭曉】，之後會把它印在我們所有的名片、購物袋和送貨卡車上。"
  },
  {
    "word": "announcement",
    "pos": "n.",
    "cn_def": "宣布；公告",
    "en_def": "an official statement that tells people about something",
    "sentence": "A: Why are so many reporters waiting outside the main entrance of the department store this morning with their cameras and microphones? B: The president is going to make an important {{BLANK}} about opening ten new stores in southern Taiwan, and the company has invited the media to a press conference at ten o'clock.",
    "cn": "A：今天早上為什麼有這麼多記者拿著相機和麥克風在百貨公司大門外等候？ B：總裁要針對在南台灣開設十家新店做一項重要的【宣布】，公司邀請了媒體參加十點的記者會。"
  },
  {
    "word": "twist",
    "pos": "n.",
    "cn_def": "（意外的）轉折",
    "en_def": "an unexpected change in a situation",
    "sentence": "A: Did the negotiations with the supplier finally end yesterday, or are you still waiting for them to send the signed contract? B: There was an interesting {{BLANK}} at the last minute, because the supplier suddenly offered us a lower price if we agreed to order twice as many parts every month.",
    "cn": "A：和供應商的協商昨天終於結束了嗎？還是你還在等他們寄回簽好的合約？ B：最後一刻出現了有趣的【轉折】，因為供應商突然提出，只要我們同意每個月訂兩倍的零件，就給我們更低的價格。"
  },
  {
    "word": "plot twist",
    "pos": "n.phr.",
    "cn_def": "劇情轉折",
    "en_def": "a surprising change in the story of a book or film",
    "sentence": "A: Why did the movie we watched after the team dinner last night get such good reviews from critics and ordinary viewers? B: It has a clever {{BLANK}} near the end, when the friendly detective turns out to be the real thief, so almost nobody in the theater could guess what would happen.",
    "cn": "A：我們昨晚團隊聚餐後看的那部電影，為什麼影評和一般觀眾都給這麼好的評價？ B：它在接近結尾時有個巧妙的【劇情轉折】，那位友善的偵探竟然就是真正的小偷，所以戲院裡幾乎沒有人猜得到會發生什麼事。"
  },
  {
    "word": "unexpectedly",
    "pos": "adv.",
    "cn_def": "出乎意料地；突然地",
    "en_def": "in a way that is surprising or not expected",
    "sentence": "A: Why are you working so late tonight when you told me this morning that you would leave the office at six o'clock? B: Our biggest client arrived {{BLANK}} this afternoon without making an appointment, so I spent three hours showing him our new products and now I have to finish my report.",
    "cn": "A：你今天早上跟我說六點就會離開辦公室，為什麼今晚還工作到這麼晚？ B：我們最大的客戶今天下午沒有預約就【突然】來了，所以我花了三個小時向他介紹新產品，現在得趕完我的報告。"
  },
  {
    "word": "abruptly",
    "pos": "adv.",
    "cn_def": "突然地；唐突地",
    "en_def": "suddenly and without warning",
    "sentence": "A: Why did the video call with the overseas partners end so early, before we could discuss the delivery schedule for next month? B: The internet connection stopped {{BLANK}} because of a storm in their city, so I sent them an email afterward and suggested that we continue the meeting tomorrow morning.",
    "cn": "A：和海外合作夥伴的視訊會議為什麼那麼早就結束了，我們都還沒討論下個月的交貨時程？ B：因為他們那邊的城市有暴風雨，網路連線【突然】中斷，所以我後來寄了一封電子郵件給他們，建議明天早上再繼續開會。"
  },
  {
    "word": "out of the blue",
    "pos": "phr.",
    "cn_def": "突如其來地；出乎意料地",
    "en_def": "suddenly and without any warning",
    "sentence": "A: How did you get the job offer from that big technology company, since you told me you hadn't applied for any new positions? B: A manager there called me completely {{BLANK}} last week, because she had read my article about online marketing and wanted someone with my experience to join her team.",
    "cn": "A：你跟我說你沒有應徵任何新職位，那你是怎麼拿到那家大型科技公司的工作機會的？ B：那裡的一位經理上週【突然】打電話給我，因為她讀了我寫的網路行銷文章，想找有我這種經驗的人加入她的團隊。"
  },
  {
    "word": "anticipate",
    "pos": "v.",
    "cn_def": "預期；預料",
    "en_def": "to expect something and prepare for it",
    "sentence": "A: Do you think we will need extra staff at the information desk during the international trade fair next weekend? B: Yes, we {{BLANK}} a large number of visitors, because more than three hundred companies have registered, so I have already asked five part-time workers to help us on Saturday and Sunday.",
    "cn": "A：你覺得下週末國際貿易展期間，服務台需要額外的人手嗎？ B：需要，我們【預期】會有大量的參觀者，因為已經有超過三百家公司報名，所以我已經請五位兼職人員星期六和星期天來幫忙。"
  },
  {
    "word": "foresee",
    "pos": "v.",
    "cn_def": "預見；預知",
    "en_def": "to know that something will happen before it happens",
    "sentence": "A: Why didn't the project manager prepare a backup plan in case the building materials arrived late at the construction site? B: Nobody could {{BLANK}} the typhoon that closed the port for a whole week, so the shipping company couldn't deliver anything, and now we are trying to finish the work on time.",
    "cn": "A：專案經理為什麼沒有準備備案，以防建材太晚送到工地？ B：沒有人能【預見】那個讓港口關閉整整一週的颱風，所以貨運公司什麼都送不來，現在我們正努力如期完工。"
  },
  {
    "word": "predictable",
    "pos": "adj.",
    "cn_def": "可預料的；老套的",
    "en_def": "happening in a way that you can easily guess",
    "sentence": "A: Did you enjoy the mystery novel that your colleague lent you for your long flight to London last week? B: Not really, because the ending was quite {{BLANK}}, and I guessed who the criminal was after reading only the first few chapters, so I spent the rest of the flight watching movies instead.",
    "cn": "A：上週你飛倫敦的長途航程中，同事借你的那本推理小說好看嗎？ B：不太好看，因為結局相當【可預料】，我只讀了前幾章就猜到誰是犯人，所以剩下的航程我都改看電影了。"
  },
  {
    "word": "baffled",
    "pos": "adj.",
    "cn_def": "困惑的；不解的",
    "en_def": "completely unable to understand something",
    "sentence": "A: Has the IT department found out why the office printers keep stopping in the middle of large printing jobs every afternoon? B: Not yet, the technicians are completely {{BLANK}}, because the machines are new and work perfectly in the morning, so they have asked the manufacturer to send an expert next Tuesday.",
    "cn": "A：資訊部查出辦公室的印表機為什麼每天下午印大量文件時總是中途停下來了嗎？ B：還沒，技術人員完全【摸不著頭緒】，因為那些機器是新的，而且早上運作得很正常，所以他們已經請製造商下週二派專家過來。"
  },
  {
    "word": "bewildered",
    "pos": "adj.",
    "cn_def": "不知所措的；困惑的",
    "en_def": "confused because there are too many things to understand",
    "sentence": "A: How did the new overseas staff manage on their first day when they arrived at the busy Taipei Main Station by themselves? B: They felt rather {{BLANK}} by all the signs and exits at first, but a friendly station worker helped them find the right platform and gave them a free map of the city.",
    "cn": "A：新來的海外員工第一天自己抵達繁忙的台北車站時，他們應付得怎麼樣？ B：一開始他們被那麼多指標和出口弄得相當【困惑】，但一位親切的站務人員幫他們找到正確的月台，還給了他們一份免費的城市地圖。"
  },
  {
    "word": "staggering",
    "pos": "adj.",
    "cn_def": "驚人的；令人震驚的",
    "en_def": "so large or surprising that it is difficult to believe",
    "sentence": "A: Have you seen the total cost of repairing the office building after the heavy flood last month? B: Yes, the amount is {{BLANK}}, almost five million dollars, because the water damaged the elevators, the computers, and the carpets on the first two floors, so the insurance company is sending someone to check everything.",
    "cn": "A：你看過上個月大淹水後辦公大樓的總修繕費用了嗎？ B：看過了，金額【驚人】，將近五百萬元，因為水損壞了一、二樓的電梯、電腦和地毯，所以保險公司要派人來檢查所有東西。"
  },
  {
    "word": "eye-opening",
    "pos": "adj.",
    "cn_def": "令人大開眼界的",
    "en_def": "making you understand something surprising that you did not know before",
    "sentence": "A: What did you learn from the week-long training program at our factory in Vietnam that you attended last month? B: It was a truly {{BLANK}} experience, because I saw how carefully the workers check every product by hand, and I came back with many useful ideas for improving our own quality control.",
    "cn": "A：你上個月參加我們越南工廠為期一週的訓練課程，學到了什麼？ B：那真是一次【令人大開眼界的】經驗，因為我看到工人們多麼仔細地用手檢查每一件產品，我帶回了許多改善我們自己品質管理的實用點子。"
  },
  {
    "word": "jaw-dropping",
    "pos": "adj.",
    "cn_def": "令人瞠目結舌的",
    "en_def": "extremely surprising or impressive",
    "sentence": "A: Why are people waiting in such a long line outside the new electronics shop at the shopping mall this weekend? B: The shop is showing a {{BLANK}} television that is as large as a wall and as thin as a credit card, and everyone who sees it wants to take a picture with it.",
    "cn": "A：這個週末為什麼有這麼多人在購物中心那家新電器行外面大排長龍？ B：那家店正在展示一台【令人瞠目結舌的】電視，它跟一面牆一樣大，卻跟信用卡一樣薄，每個看到的人都想跟它合照。"
  },
  {
    "word": "shocked",
    "pos": "adj.",
    "cn_def": "震驚的",
    "en_def": "very surprised and upset",
    "sentence": "A: How did the staff react when they heard that the popular cafeteria manager is leaving the company after fifteen years? B: Most of them were {{BLANK}}, because she never mentioned any plans to retire, and many employees have already started collecting money to buy her a farewell gift before she goes.",
    "cn": "A：員工聽到那位很受歡迎的員工餐廳經理在工作十五年後要離開公司時，有什麼反應？ B：他們大多數都很【震驚】，因為她從來沒提過任何退休計畫，很多員工已經開始集資，要在她離開前買一份送別禮物給她。"
  }
];

const MCQS = [
  {
    "q": "To the _____ of the hotel staff, the famous singer cleaned her own room before checking out. She also left a kind thank-you note.",
    "options": [
      "astonishment",
      "announcement",
      "deadline",
      "invoice"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The news of the sudden factory closure came as a _____ to the workers. Many of them had worked there for more than twenty years.",
    "options": [
      "twist",
      "shock",
      "receipt",
      "discount"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The manager shook his head in _____ when he saw the huge phone bill. Someone had made long international calls every night last month.",
    "options": [
      "announcement",
      "twist",
      "disbelief",
      "deadline"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The poor sales figures are likely to _____ the shareholders at next week's meeting. The CEO has prepared a detailed explanation for the sudden drop.",
    "options": [
      "foresee",
      "reveal",
      "anticipate",
      "stun"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The young pianist's skill never fails to _____ the audience at every concert. Critics say she plays like someone with forty years of experience.",
    "options": [
      "astonish",
      "foresee",
      "reveal",
      "gasp"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Please knock gently before entering the laboratory so you don't _____ the researchers. They are often handling glass equipment and dangerous chemicals.",
    "options": [
      "foresee",
      "startle",
      "anticipate",
      "reveal"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Due to an _____ increase in orders, the factory will open on Saturday this week. All workers will receive extra pay for the overtime.",
    "options": [
      "speechless",
      "bewildered",
      "unexpected",
      "shocked"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Drivers should slow down near the school because children may make a _____ movement into the road. The speed limit there is thirty kilometers per hour.",
    "options": [
      "speechless",
      "baffled",
      "shocked",
      "sudden"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The shoes were on sale for an _____ price of only ten dollars. Customers lined up outside the store before it opened.",
    "options": [
      "unbelievable",
      "overwhelmed",
      "speechless",
      "bewildered"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our online sales have shown a _____ improvement since we started offering free delivery. The director plans to continue the service next year.",
    "options": [
      "speechless",
      "remarkable",
      "baffled",
      "shocked"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The new engineer has an _____ ability to solve complex problems quickly. She fixed the broken assembly line in less than an hour.",
    "options": [
      "overwhelmed",
      "bewildered",
      "extraordinary",
      "exhausted"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "From the top of the tower, visitors can enjoy an _____ view of the entire city. Tickets are half price for students on weekdays.",
    "options": [
      "overwhelmed",
      "abrupt",
      "exhausted",
      "incredible"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The small customer service team felt _____ by thousands of complaints after the system failure. The company hired temporary staff to help them.",
    "options": [
      "overwhelmed",
      "predictable",
      "jaw-dropping",
      "staggering"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The sales contest winner was left _____ when she heard about the prize. She finally thanked everyone with tears in her eyes.",
    "options": [
      "predictable",
      "speechless",
      "staggering",
      "eye-opening"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Several passengers began to _____ when the plane suddenly dropped during the storm. The pilot soon announced that everything was safe.",
    "options": [
      "foresee",
      "reveal",
      "gasp",
      "anticipate"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company will _____ the details of its new smartphone at a press conference on Monday. Reporters from twenty countries have been invited.",
    "options": [
      "startle",
      "gasp",
      "stun",
      "reveal"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The airline made an _____ that all flights to Tokyo were canceled because of the typhoon. Passengers were offered free hotel rooms for the night.",
    "options": [
      "announcement",
      "astonishment",
      "amazement",
      "disbelief"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "In a surprising _____, the smaller company agreed to buy its larger rival. The deal shocked many experts in the industry.",
    "options": [
      "deadline",
      "twist",
      "disbelief",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The film's final _____ surprised the audience when the hero turned out to be the villain. Many viewers went back to watch it again.",
    "options": [
      "lecture hall",
      "nose pad",
      "plot twist",
      "price tag"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The CEO visited the branch office _____ on Tuesday without telling anyone in advance. The staff quickly cleaned their desks and prepared coffee.",
    "options": [
      "cheaply",
      "loudly",
      "rarely",
      "unexpectedly"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The meeting ended _____ when the fire alarm went off at three o'clock. Everyone left the building quickly and calmly.",
    "options": [
      "abruptly",
      "cheaply",
      "generously",
      "rarely"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "An old client called me _____ yesterday and offered us a large contract. We had not heard from him for five years.",
    "options": [
      "by far",
      "out of the blue",
      "at least",
      "in charge"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "We _____ a sharp rise in demand for air conditioners during the summer months. The warehouse has already ordered extra stock.",
    "options": [
      "startle",
      "gasp",
      "anticipate",
      "stun"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "It is difficult to _____ all the problems that may happen during a big outdoor event. Therefore, we always prepare a backup plan.",
    "options": [
      "startle",
      "gasp",
      "stun",
      "foresee"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The weather in this region is quite _____ in summer, with heavy rain almost every afternoon. Tourists should always carry an umbrella.",
    "options": [
      "predictable",
      "speechless",
      "baffled",
      "overwhelmed"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Engineers were completely _____ by the strange noise coming from the new machine. They finally called the manufacturer for technical support.",
    "options": [
      "predictable",
      "baffled",
      "staggering",
      "eye-opening"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The company lost a _____ amount of money after the failed product launch. Several managers resigned as a result.",
    "options": [
      "speechless",
      "bewildered",
      "staggering",
      "overwhelmed"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Visiting the factory in Vietnam was an _____ experience for our new designers. They learned how much work goes into every product.",
    "options": [
      "overwhelmed",
      "exhausted",
      "ashamed",
      "eye-opening"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The dancers gave a _____ performance that earned a standing ovation from the crowd. Tickets for next week's show sold out within an hour.",
    "options": [
      "jaw-dropping",
      "speechless",
      "baffled",
      "bewildered"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Employees were _____ to hear that the company would move its headquarters overseas. Many of them worry about losing their jobs.",
    "options": [
      "predictable",
      "shocked",
      "staggering",
      "jaw-dropping"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "astonishment": {
    "pos": "n.",
    "en_def": "the feeling of being very surprised",
    "cn_def": "驚訝；驚愕"
  },
  "amazement": {
    "pos": "n.",
    "en_def": "a feeling of great surprise and pleasure",
    "cn_def": "驚奇；驚嘆"
  },
  "shock": {
    "pos": "n.",
    "en_def": "a sudden, unpleasant surprise",
    "cn_def": "震驚；衝擊"
  },
  "disbelief": {
    "pos": "n.",
    "en_def": "the feeling of not being able to believe something",
    "cn_def": "難以置信；不相信"
  },
  "wonder": {
    "pos": "n.",
    "en_def": "a feeling of surprise and admiration for something beautiful or unusual",
    "cn_def": "驚奇；驚嘆"
  },
  "stun": {
    "pos": "v.",
    "en_def": "to surprise or shock someone so much that they cannot react",
    "cn_def": "使震驚；使目瞪口呆"
  },
  "astonish": {
    "pos": "v.",
    "en_def": "to surprise someone very much",
    "cn_def": "使驚訝"
  },
  "amaze": {
    "pos": "v.",
    "en_def": "to surprise someone in a very pleasant way",
    "cn_def": "使驚嘆；使驚奇"
  },
  "startle": {
    "pos": "v.",
    "en_def": "to suddenly frighten or surprise someone a little",
    "cn_def": "使嚇一跳；使受驚"
  },
  "unexpected": {
    "pos": "adj.",
    "en_def": "not expected; surprising",
    "cn_def": "意外的；出乎意料的"
  },
  "sudden": {
    "pos": "adj.",
    "en_def": "happening quickly and without warning",
    "cn_def": "突然的"
  },
  "unbelievable": {
    "pos": "adj.",
    "en_def": "so surprising that it is hard to believe",
    "cn_def": "令人難以置信的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual or surprising in a way that people notice",
    "cn_def": "顯著的；非凡的"
  },
  "extraordinary": {
    "pos": "adj.",
    "en_def": "very unusual and much greater or better than normal",
    "cn_def": "非凡的；特別的"
  },
  "incredible": {
    "pos": "adj.",
    "en_def": "extremely good or surprising",
    "cn_def": "極好的；令人驚嘆的"
  },
  "overwhelmed": {
    "pos": "adj.",
    "en_def": "having such a strong feeling that you do not know how to react",
    "cn_def": "不知所措的；深受感動的"
  },
  "speechless": {
    "pos": "adj.",
    "en_def": "unable to speak because you are very surprised or emotional",
    "cn_def": "說不出話的"
  },
  "gasp": {
    "pos": "v.",
    "en_def": "to breathe in suddenly and loudly because you are surprised or shocked",
    "cn_def": "倒抽一口氣"
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show or tell something that was secret or hidden",
    "cn_def": "揭露；透露"
  },
  "announcement": {
    "pos": "n.",
    "en_def": "an official statement that tells people about something",
    "cn_def": "宣布；公告"
  },
  "twist": {
    "pos": "n.",
    "en_def": "an unexpected change in a situation",
    "cn_def": "（意外的）轉折"
  },
  "plot twist": {
    "pos": "n.phr.",
    "en_def": "a surprising change in the story of a book or film",
    "cn_def": "劇情轉折"
  },
  "unexpectedly": {
    "pos": "adv.",
    "en_def": "in a way that is surprising or not expected",
    "cn_def": "出乎意料地；突然地"
  },
  "abruptly": {
    "pos": "adv.",
    "en_def": "suddenly and without warning",
    "cn_def": "突然地；唐突地"
  },
  "out of the blue": {
    "pos": "phr.",
    "en_def": "suddenly and without any warning",
    "cn_def": "突如其來地；出乎意料地"
  },
  "anticipate": {
    "pos": "v.",
    "en_def": "to expect something and prepare for it",
    "cn_def": "預期；預料"
  },
  "foresee": {
    "pos": "v.",
    "en_def": "to know that something will happen before it happens",
    "cn_def": "預見；預知"
  },
  "predictable": {
    "pos": "adj.",
    "en_def": "happening in a way that you can easily guess",
    "cn_def": "可預料的；老套的"
  },
  "baffled": {
    "pos": "adj.",
    "en_def": "completely unable to understand something",
    "cn_def": "困惑的；不解的"
  },
  "bewildered": {
    "pos": "adj.",
    "en_def": "confused because there are too many things to understand",
    "cn_def": "不知所措的；困惑的"
  },
  "staggering": {
    "pos": "adj.",
    "en_def": "so large or surprising that it is difficult to believe",
    "cn_def": "驚人的；令人震驚的"
  },
  "eye-opening": {
    "pos": "adj.",
    "en_def": "making you understand something surprising that you did not know before",
    "cn_def": "令人大開眼界的"
  },
  "jaw-dropping": {
    "pos": "adj.",
    "en_def": "extremely surprising or impressive",
    "cn_def": "令人瞠目結舌的"
  },
  "shocked": {
    "pos": "adj.",
    "en_def": "very surprised and upset",
    "cn_def": "震驚的"
  }
};

const EXTRA_GLOSSES = {};
