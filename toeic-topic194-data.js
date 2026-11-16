// Topic 194 Quiz Data: Interesting Person 有趣的人
// Source word list: https://www.examword.com/group-topic/interesting-person — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T194 - Interesting Person 有趣的人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "interesting",
    "pos": "adj.",
    "cn_def": "有趣的",
    "en_def": "able to hold your attention",
    "sentence": "A: How was the guest speaker at yesterday's sales conference, and did the new team members stay awake during the long afternoon session? B: She told an {{BLANK}} story about how she opened her first shop with almost no money, so everyone listened carefully and asked many questions afterward.",
    "cn": "A：昨天銷售會議的客座講者表現如何？新進團隊成員在漫長的下午場有保持清醒嗎？ B：她講了一個【有趣的】故事，說她當初幾乎沒錢就開了第一家店，所以大家都很專心聽，之後也問了很多問題。"
  },
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "引人入勝的；令人著迷的",
    "en_def": "extremely interesting",
    "sentence": "A: Did you enjoy the factory tour that the client arranged for our visitors from Japan last Thursday afternoon? B: Yes, it was {{BLANK}} to watch the robots pack thousands of boxes every hour, and our guests kept taking photos because they had never seen such a fast production line before.",
    "cn": "A：上週四下午客戶為我們日本訪客安排的工廠參觀，你喜歡嗎？ B：喜歡，看機器人每小時包裝數千個箱子真是【令人著迷】，我們的客人一直拍照，因為他們從沒看過這麼快的生產線。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "吸引人的；迷人的",
    "en_def": "pleasant and keeping your interest",
    "sentence": "A: Why do so many customers stay on our new website for such a long time compared with the old one we had last year? B: The designers added short videos and an {{BLANK}} quiz on the home page, so visitors keep clicking, reading product details, and sharing the links with their friends.",
    "cn": "A：為什麼和去年的舊網站相比，這麼多顧客會在我們的新網站停留這麼久？ B：設計師在首頁加了短影片和一個【吸引人的】小測驗，所以訪客一直點擊、閱讀產品細節，還把連結分享給朋友。"
  },
  {
    "word": "captivating",
    "pos": "adj.",
    "cn_def": "令人著迷的；迷人的",
    "en_def": "so attractive that you cannot look away",
    "sentence": "A: Why was the theater completely full on Saturday night even though the tickets were more expensive than usual? B: The lead actress gave a {{BLANK}} performance that critics praised in every newspaper, so people from all over the city booked seats as soon as the reviews came out.",
    "cn": "A：為什麼週六晚上劇院全滿，即使票價比平常貴？ B：女主角的表演【令人著迷】，各大報的評論家都讚不絕口，所以評論一出來，全市的人都馬上訂了座位。"
  },
  {
    "word": "intriguing",
    "pos": "adj.",
    "cn_def": "耐人尋味的；引起好奇的",
    "en_def": "interesting because it is strange or not fully known",
    "sentence": "A: Have you read the email from the new supplier in Vietnam about their unusual pricing plan for next year? B: Yes, their offer is quite {{BLANK}} because they will lower prices if we order early, but I want to ask the finance team a few questions before we decide anything.",
    "cn": "A：你看過越南新供應商寄來、關於明年特殊定價方案的電子郵件了嗎？ B：看過了，他們的提議相當【耐人尋味】，因為如果我們提早訂貨他們就會降價，但在做任何決定之前，我想先問財務團隊幾個問題。"
  },
  {
    "word": "charming",
    "pos": "adj.",
    "cn_def": "迷人的；可愛的",
    "en_def": "very pleasant and attractive",
    "sentence": "A: What did you think of the small bed-and-breakfast where we stayed during the business trip to the countryside last month? B: It was a {{BLANK}} little place with flowers in every window and a friendly owner who served homemade bread, so I would happily book it again for our next visit.",
    "cn": "A：你覺得上個月到鄉下出差時我們住的那間小民宿怎麼樣？ B：那是個【迷人的】小地方，每扇窗戶都有花，還有一位會端出自製麵包的親切老闆，所以下次去我很樂意再訂。"
  },
  {
    "word": "charismatic",
    "pos": "adj.",
    "cn_def": "有領袖魅力的",
    "en_def": "having a strong personal charm that attracts people",
    "sentence": "A: Why do you think so many employees voted for Mr. Lin to become the new leader of the workers' committee this year? B: He is a {{BLANK}} speaker who makes everyone feel important, and when he talks at meetings, even the quiet staff members start sharing their ideas and supporting his plans.",
    "cn": "A：你覺得為什麼今年有這麼多員工投票讓林先生成為員工委員會的新領導人？ B：他是一位【有領袖魅力的】演說者，讓每個人都覺得自己很重要，他在會議上說話時，連安靜的員工也會開始分享想法並支持他的計畫。"
  },
  {
    "word": "entertaining",
    "pos": "adj.",
    "cn_def": "有趣的；具娛樂性的",
    "en_def": "fun and enjoyable to watch or listen to",
    "sentence": "A: How should we keep the children busy while their parents attend the long product training at the hotel on Sunday? B: We could hire a magician to give an {{BLANK}} show in the next room, and the staff can also prepare snacks, games, and coloring books for the younger ones.",
    "cn": "A：週日家長在飯店參加冗長的產品訓練時，我們該如何讓孩子們有事做？ B：我們可以請一位魔術師在隔壁房間表演一場【有趣的】秀，工作人員也可以為年紀較小的孩子準備點心、遊戲和著色本。"
  },
  {
    "word": "amusing",
    "pos": "adj.",
    "cn_def": "好笑的；逗趣的",
    "en_def": "funny and making people smile or laugh",
    "sentence": "A: Why was everyone in the break room laughing so loudly when I walked past after lunch today? B: Kevin was telling an {{BLANK}} story about how he got lost in the airport in Tokyo and accidentally joined a tour group of retired teachers for almost an hour.",
    "cn": "A：今天午餐後我經過休息室時，為什麼大家笑得那麼大聲？ B：Kevin在講一個【好笑的】故事，說他在東京機場迷路，還不小心跟著一群退休老師的旅行團走了將近一個小時。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "熱鬧的；活潑的",
    "en_def": "full of energy, activity, or excitement",
    "sentence": "A: Which restaurant would you suggest for the team dinner after we finish the big project on Friday evening? B: Try the Italian place near the station, because it has a {{BLANK}} atmosphere with live music and friendly waiters, and the large tables are perfect for a group of twelve people.",
    "cn": "A：週五晚上我們完成大專案後，你建議去哪家餐廳辦團隊晚餐？ B：試試車站附近那家義大利餐廳，那裡氣氛【熱鬧】，有現場音樂和親切的服務生，大桌子也很適合十二個人的團體。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "有活力的；積極進取的",
    "en_def": "full of energy and new ideas",
    "sentence": "A: What kind of person is the marketing department looking for to replace Sarah when she moves to the Singapore office? B: They want someone {{BLANK}} who has lots of energy, can manage several campaigns at once, and is not afraid to try new ideas when the market changes quickly.",
    "cn": "A：Sarah調到新加坡辦公室後，行銷部想找什麼樣的人來接替她？ B：他們想找一個【有活力的】人，精力充沛、能同時管理好幾個宣傳活動，而且在市場快速變化時不怕嘗試新點子。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at making new and original things or ideas",
    "sentence": "A: How did the small design company win the contract to make the new logo for the city's tourism office? B: Their designers came up with a very {{BLANK}} idea that combined the mountains and the river into one simple picture, and the judges said nobody else had thought of it.",
    "cn": "A：那家小設計公司是如何贏得為市觀光局設計新標誌的合約？ B：他們的設計師想出了一個非常【有創意的】點子，把山和河結合成一個簡單的圖案，評審說沒有其他人想到這一點。"
  },
  {
    "word": "imaginative",
    "pos": "adj.",
    "cn_def": "富有想像力的",
    "en_def": "showing new and unusual ideas from the mind",
    "sentence": "A: Why did the toy company decide to hire that young writer to create stories for their new product line? B: Her books are full of {{BLANK}} characters, such as talking clouds and flying trains, and the managers believe children will love buying toys based on those unusual worlds.",
    "cn": "A：為什麼玩具公司決定聘請那位年輕作家為他們的新產品線創作故事？ B：她的書裡充滿了【富有想像力的】角色，例如會說話的雲和會飛的火車，經理們相信孩子們會喜歡購買以那些奇特世界為主題的玩具。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "鼓舞人心的",
    "en_def": "making people want to do something good",
    "sentence": "A: Was the talk by the founder of the recycling company worth attending, or should I watch the recording later at home? B: It was really {{BLANK}}, because she explained how she started with only two workers and now employs five hundred people, and many of us left wanting to start our own projects.",
    "cn": "A：那家回收公司創辦人的演講值得去聽嗎？還是我晚點在家看錄影就好？ B：真的很【鼓舞人心】，因為她說明了她如何從只有兩名員工開始，到現在僱用了五百人，我們很多人離開時都想開始自己的計畫。"
  },
  {
    "word": "influential",
    "pos": "adj.",
    "cn_def": "有影響力的",
    "en_def": "able to change what people think or do",
    "sentence": "A: Why is the publishing company paying so much money to invite Professor Chen to write a review of our new book? B: He is one of the most {{BLANK}} critics in the country, and when he recommends a book, sales usually go up quickly in bookstores and online shops.",
    "cn": "A：為什麼出版公司要花這麼多錢邀請陳教授為我們的新書寫書評？ B：他是國內最【有影響力的】評論家之一，當他推薦一本書時，書店和網路商店的銷量通常會迅速上升。"
  },
  {
    "word": "thoughtful",
    "pos": "adj.",
    "cn_def": "體貼的；細心的",
    "en_def": "kind and thinking about other people's needs",
    "sentence": "A: Did anyone remember that today is the receptionist's last day before she leaves for her new job in Kaohsiung? B: Yes, Daniel was very {{BLANK}} and bought her a card and some flowers, and he also asked everyone in the office to write a short message wishing her good luck.",
    "cn": "A：有人記得今天是接待員去高雄新工作前的最後一天嗎？ B：有，Daniel非常【體貼】，幫她買了卡片和一些花，還請辦公室每個人寫一段祝她好運的簡短留言。"
  },
  {
    "word": "insightful",
    "pos": "adj.",
    "cn_def": "有見地的；有洞察力的",
    "en_def": "showing a deep and clear understanding",
    "sentence": "A: Was the report from the outside consultant useful, or was it just a list of things we already knew about our customers? B: It was very {{BLANK}}, because it explained why young shoppers prefer our competitor's app, and it gave us several clear steps to improve our online service.",
    "cn": "A：外部顧問的報告有用嗎？還是只是列出我們早就知道的顧客資訊？ B：非常【有見地】，因為它說明了為什麼年輕購物者偏好競爭對手的應用程式，還給了我們幾個改善線上服務的明確步驟。"
  },
  {
    "word": "perceptive",
    "pos": "adj.",
    "cn_def": "感覺敏銳的；有洞察力的",
    "en_def": "quick to notice and understand things",
    "sentence": "A: How did the new manager know that the team was unhappy even though nobody had complained to her directly? B: She is very {{BLANK}} and noticed that people stopped joining lunch together and spoke less at meetings, so she arranged private talks to find out what was wrong.",
    "cn": "A：新經理是怎麼知道團隊不開心的，明明沒有人直接向她抱怨？ B：她非常【有洞察力】，注意到大家不再一起吃午餐、開會時話也變少了，所以她安排了私下談話來了解問題所在。"
  },
  {
    "word": "observant",
    "pos": "adj.",
    "cn_def": "觀察力敏銳的",
    "en_def": "good at noticing small details",
    "sentence": "A: How did the security guard find the lost laptop so quickly after the busy conference ended last night? B: He is very {{BLANK}} and remembered seeing a black bag under a chair in the third row, so he checked there first and returned it to the owner within ten minutes.",
    "cn": "A：昨晚忙碌的會議結束後，保全人員是怎麼這麼快找到遺失的筆電的？ B：他觀察力非常【敏銳】，記得曾看到第三排椅子下有個黑色袋子，所以他先去那裡找，十分鐘內就把它還給了失主。"
  },
  {
    "word": "intelligent",
    "pos": "adj.",
    "cn_def": "聰明的；有才智的",
    "en_def": "able to learn and understand things quickly",
    "sentence": "A: Why did the bank promote Amy to team leader after she had worked in the loan department for only two years? B: She is extremely {{BLANK}} and can solve difficult problems quickly, and her managers were impressed by how fast she learned the new computer system last spring.",
    "cn": "A：為什麼銀行在Amy只在貸款部門工作兩年後，就把她升為組長？ B：她非常【聰明】，能迅速解決困難的問題，主管們也對她去年春天很快就學會新電腦系統印象深刻。"
  },
  {
    "word": "brilliant",
    "pos": "adj.",
    "cn_def": "傑出的；絕妙的",
    "en_def": "extremely clever or excellent",
    "sentence": "A: How did the engineering team manage to cut the factory's electricity costs by almost thirty percent this year? B: One of the young engineers had a {{BLANK}} idea to use the heat from the machines to warm the offices, and the plan worked better than anyone expected.",
    "cn": "A：工程團隊是如何在今年把工廠的電費削減將近百分之三十的？ B：其中一位年輕工程師想出了一個【絕妙的】點子，利用機器產生的熱來為辦公室供暖，這個計畫的效果比任何人預期的都好。"
  },
  {
    "word": "knowledgeable",
    "pos": "adj.",
    "cn_def": "知識淵博的；很懂的",
    "en_def": "knowing a lot about a subject",
    "sentence": "A: Who should we ask about the new tax rules before we send the invoices to our customers in Europe next week? B: Talk to Mr. Huang in accounting, because he is very {{BLANK}} about international tax, and he helped several departments with similar questions last year.",
    "cn": "A：下週寄發票給歐洲客戶之前，我們該向誰詢問新的稅務規定？ B：去找會計部的黃先生，因為他對國際稅務非常【在行】，去年他還幫好幾個部門解答過類似的問題。"
  },
  {
    "word": "articulate",
    "pos": "adj.",
    "cn_def": "能言善道的；表達清楚的",
    "en_def": "able to express ideas clearly in words",
    "sentence": "A: Why did the directors choose Jessica to present our proposal to the investors at next month's meeting? B: She is very {{BLANK}} and can explain complicated financial information in simple, clear sentences, so investors who are not experts can still understand our plans easily.",
    "cn": "A：為什麼董事們選Jessica在下個月的會議上向投資人報告我們的提案？ B：她非常【能言善道】，能用簡單清楚的句子解釋複雜的財務資訊，所以不是專家的投資人也能輕鬆理解我們的計畫。"
  },
  {
    "word": "witty",
    "pos": "adj.",
    "cn_def": "機智風趣的",
    "en_def": "clever and funny with words",
    "sentence": "A: Why do so many people read the weekly newsletter written by the head of the customer service team? B: She writes {{BLANK}} comments about everyday office problems, like broken printers and long meetings, so readers laugh while they learn about the latest company news and updates.",
    "cn": "A：為什麼這麼多人閱讀客服團隊主管寫的每週電子報？ B：她會針對日常辦公室的問題寫一些【風趣機智的】評論，像是故障的印表機和冗長的會議，所以讀者能一邊笑一邊了解公司的最新消息和動態。"
  },
  {
    "word": "humorous",
    "pos": "adj.",
    "cn_def": "幽默的",
    "en_def": "funny and making people laugh",
    "sentence": "A: Should I start my presentation to the new employees with company history, or is there a better way to begin? B: Start with a short {{BLANK}} video about a confused new worker on his first day, because it will make people relax before you explain the more serious rules.",
    "cn": "A：我向新進員工簡報時，應該從公司歷史開始講嗎？還是有更好的開場方式？ B：先放一段關於一位新員工上班第一天手忙腳亂的【幽默】短片，因為這會讓大家在你說明比較嚴肅的規定之前先放鬆下來。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and pleasant to other people",
    "sentence": "A: How was your first week at the new branch office, and did you have any trouble finding your way around? B: Everyone was very {{BLANK}}, so my coworkers showed me where the meeting rooms were, invited me to lunch, and helped me set up my computer on the first morning.",
    "cn": "A：你在新分公司的第一週過得怎麼樣？有沒有找不到路的困擾？ B：大家都非常【友善】，所以同事們帶我去看會議室在哪裡、邀我一起吃午餐，第一天早上還幫我設定好電腦。"
  },
  {
    "word": "outgoing",
    "pos": "adj.",
    "cn_def": "外向的；友好的",
    "en_def": "liking to meet and talk with people",
    "sentence": "A: What kind of personality does the hotel want for the new guest relations position at the front desk? B: They are looking for an {{BLANK}} person who enjoys talking with strangers, because the job includes welcoming guests, answering questions, and organizing evening events for international visitors.",
    "cn": "A：飯店櫃台新的賓客關係職位想要什麼樣個性的人？ B：他們在找一個【外向的】人，喜歡和陌生人聊天，因為這份工作包括迎接客人、回答問題，以及為國際旅客籌辦晚間活動。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有自信的",
    "en_def": "sure about yourself and your abilities",
    "sentence": "A: Are you nervous about leading the training session for the sales staff from the three new stores tomorrow? B: Not really, I feel {{BLANK}} because I practiced the whole presentation twice with my manager, and I know the products very well after selling them for five years.",
    "cn": "A：明天要為三家新門市的銷售人員主持訓練課程，你會緊張嗎？ B：不太會，我覺得很有【自信】，因為我已經和經理把整個簡報練習了兩次，而且賣了五年產品，我對它們非常熟悉。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的；獨一無二的",
    "en_def": "the only one of its kind; very special",
    "sentence": "A: Why are tourists willing to pay so much more to stay at that small hotel instead of the large ones downtown? B: Each room has a {{BLANK}} design painted by a local artist, so no two rooms look the same, and guests often post photos of their room online.",
    "cn": "A：為什麼觀光客願意多花那麼多錢住那間小飯店，而不住市中心的大飯店？ B：每個房間都有由當地藝術家彩繪的【獨特】設計，所以沒有兩間房看起來一樣，房客也常把房間的照片貼到網路上。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；顯著的",
    "en_def": "unusual or surprising in a way that people notice",
    "sentence": "A: How did the new store manage to sell so much during its first three months, even with the bad weather? B: The sales team made {{BLANK}} progress by calling every old customer and offering free delivery, and the final numbers were almost double what the directors had expected.",
    "cn": "A：新門市在頭三個月是如何賣出這麼多的，即使天氣不好？ B：銷售團隊打電話給每位老顧客並提供免費送貨，取得了【顯著的】進展，最後的數字幾乎是董事們預期的兩倍。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "easy to remember because it is special",
    "sentence": "A: How can we make sure our booth stands out at the trade fair, since there will be more than three hundred companies there? B: Let's give visitors a {{BLANK}} experience, such as a short virtual reality tour of our factory, because people often forget brochures but remember something fun they tried.",
    "cn": "A：商展會有超過三百家公司參加，我們要怎麼確保攤位能脫穎而出？ B：我們給參觀者一個【難忘的】體驗吧，例如參觀我們工廠的簡短虛擬實境導覽，因為人們常會忘記宣傳冊，但會記得他們試過的有趣事物。"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱情的；熱愛的",
    "en_def": "having very strong feelings about something you love",
    "sentence": "A: Why did the café owner spend so much money on special coffee machines and training for all of her staff? B: She is {{BLANK}} about serving the best coffee in the city, and she believes that well-trained baristas will bring customers back again and again.",
    "cn": "A：那位咖啡店老闆為什麼花那麼多錢買特殊咖啡機，還讓所有員工受訓？ B：她對提供全市最好的咖啡充滿【熱情】，而且她相信訓練有素的咖啡師會讓顧客一再回流。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱衷的；熱烈的",
    "en_def": "showing great interest and excitement",
    "sentence": "A: How did the staff react when the company announced the new plan to let employees work from home on Fridays? B: Most people were very {{BLANK}} about the idea, and several workers with long commutes said it would save them hours of travel time every week.",
    "cn": "A：公司宣布讓員工週五在家工作的新計畫時，員工的反應如何？ B：大多數人對這個想法都非常【熱衷】，好幾位通勤時間長的員工說，這每週能為他們省下好幾個小時的交通時間。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why does the new intern ask so many questions about how each department works during her first week here? B: She is {{BLANK}} about every part of the business, and she wants to understand how sales, shipping, and accounting connect before she chooses which team to join.",
    "cn": "A：為什麼新實習生在第一週一直問那麼多關於各部門如何運作的問題？ B：她對公司的每個部分都很【好奇】，想在選擇加入哪個團隊之前，了解銷售、出貨和會計之間是如何連結的。"
  },
  {
    "word": "open-minded",
    "pos": "adj.",
    "cn_def": "心胸開放的；開明的",
    "en_def": "willing to accept new or different ideas",
    "sentence": "A: Do you think the new director will agree to try our plan to hold meetings outside in the park during summer? B: Probably, because she is quite {{BLANK}} and always listens carefully to unusual suggestions, even when they are very different from the way things were done before.",
    "cn": "A：你覺得新主管會同意試試我們夏天在公園戶外開會的計畫嗎？ B：應該會，因為她相當【心胸開放】，總是仔細傾聽不尋常的建議，即使那些建議和以往的做法非常不同。"
  },
  {
    "word": "warm",
    "pos": "adj.",
    "cn_def": "熱情的；溫暖的",
    "en_def": "friendly and kind in a way that makes people feel welcome",
    "sentence": "A: How did the staff at the Tainan branch treat you when you visited them for the quarterly review last week? B: They gave me a very {{BLANK}} welcome at the station, took me to a famous local restaurant for dinner, and showed me around their newly renovated office the next morning.",
    "cn": "A：上週你去台南分公司做季度考核時，那裡的員工如何招待你？ B：他們在車站給了我非常【熱情的】歡迎，帶我去一家有名的當地餐廳吃晚餐，隔天早上還帶我參觀他們剛整修好的辦公室。"
  }
];

const MCQS = [
  {
    "q": "Our trainer shared an _____ fact about the history of the company. Many employees did not know it started as a bicycle shop.",
    "options": [
      "empty",
      "interesting",
      "illegal",
      "exhausted"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The documentary about deep-sea fish was absolutely _____. Viewers could not stop watching the strange creatures glowing in the dark water.",
    "options": [
      "empty",
      "careless",
      "delayed",
      "fascinating"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The teacher's _____ lessons hold students' attention for the whole hour. She uses games, short videos, and group challenges in every class.",
    "options": [
      "boring",
      "silent",
      "engaging",
      "absent"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The detective novel has an _____ plot full of secrets. Readers keep guessing who stole the painting until the very last page.",
    "options": [
      "intriguing",
      "obvious",
      "honest",
      "empty"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The old village has _____ stone houses and narrow streets lined with flowers. Tourists often say it looks like a scene from a fairy tale.",
    "options": [
      "polluted",
      "noisy",
      "charming",
      "damaged"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Everyone laughed at the _____ cartoon on the office notice board. It showed a cat trying to fix a broken photocopier.",
    "options": [
      "amusing",
      "tragic",
      "official",
      "serious"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The night market was _____ with music, crowds, and the smell of fried food. It was the busiest evening of the whole year.",
    "options": [
      "empty",
      "quiet",
      "closed",
      "lively"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The agency needs a _____ designer who can produce fresh ideas for our advertisements. Applicants should send examples of their original artwork.",
    "options": [
      "retired",
      "creative",
      "nervous",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The children's author is famous for her _____ stories about dragons that live in teacups. Her books have been translated into twenty languages.",
    "options": [
      "imaginative",
      "factual",
      "accurate",
      "financial"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The athlete gave an _____ speech about overcoming injury. Many listeners said it encouraged them to chase their own goals.",
    "options": [
      "annoying",
      "outdated",
      "inaccurate",
      "inspiring"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The magazine editor is one of the most _____ people in the fashion industry. Designers often change their styles after she reviews their work.",
    "options": [
      "junior",
      "forgetful",
      "influential",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "It was very _____ of Mark to send a get-well card to his sick colleague. He also offered to cover her shifts this week.",
    "options": [
      "rude",
      "thoughtful",
      "lazy",
      "selfish"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The analyst offered an _____ explanation of why sales fell last quarter. Her clear ideas helped managers understand the real problem.",
    "options": [
      "unclear",
      "incorrect",
      "irrelevant",
      "insightful"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "An _____ clerk noticed that two invoices had the same number. Her careful attention saved the company from paying the supplier twice.",
    "options": [
      "observant",
      "absent",
      "inattentive",
      "unreliable"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Using the factory's waste heat to warm the offices was a _____ idea. It cut our energy bills by almost a third.",
    "options": [
      "terrible",
      "useless",
      "brilliant",
      "foolish"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Our tour guide was very _____ about the city's history. She answered every question about the old temples without checking her notes.",
    "options": [
      "ignorant",
      "knowledgeable",
      "confused",
      "unsure"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The company needs an _____ spokesperson who can speak clearly to reporters. The candidate must explain complex issues in simple words.",
    "options": [
      "articulate",
      "anxious",
      "impatient",
      "unknown"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The host made a _____ remark that made the whole audience laugh. His quick sense of humor kept the awards night fun.",
    "options": [
      "dull",
      "formal",
      "sad",
      "witty"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The speaker began with a _____ story about losing his luggage in Paris. The audience laughed and relaxed before the serious part.",
    "options": [
      "tragic",
      "humorous",
      "boring",
      "secret"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The hotel staff were so _____ that guests felt at home right away. They smiled, chatted, and gave helpful advice about local restaurants.",
    "options": [
      "rude",
      "cold",
      "friendly",
      "impolite"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Sales positions suit _____ people who enjoy meeting strangers. Shy applicants may prefer a role working with data in the back office.",
    "options": [
      "timid",
      "outgoing",
      "reserved",
      "quiet"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "After months of practice, Leo felt _____ in his ability to lead the meeting. He spoke calmly and answered every difficult question.",
    "options": [
      "nervous",
      "doubtful",
      "confident",
      "uncertain"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Each handmade bag is _____, so no two customers will ever own the same design. This is why the prices are higher than usual.",
    "options": [
      "identical",
      "ordinary",
      "common",
      "unique"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The hospital has made _____ progress in reducing waiting times this year. Patients now see a doctor in half the time.",
    "options": [
      "remarkable",
      "minor",
      "disappointing",
      "slow"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Our holiday in Kyoto was the most _____ trip of our lives. We still talk about the cherry blossoms every spring.",
    "options": [
      "forgettable",
      "boring",
      "memorable",
      "disappointing"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Our head chef is _____ about using fresh, local ingredients. She visits the farmers' market herself every morning before the restaurant opens.",
    "options": [
      "passionate",
      "careless",
      "indifferent",
      "bored"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The staff gave an _____ response to the new four-day work week. Almost everyone signed up for the trial on the first day.",
    "options": [
      "angry",
      "unfavorable",
      "awkward",
      "enthusiastic"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The intern is _____ about how each department works. She often asks questions to learn how the business really operates.",
    "options": [
      "uninterested",
      "curious",
      "silent",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Our new director is _____ and willing to consider unusual suggestions. She rarely rejects an idea without first discussing it with the team.",
    "options": [
      "stubborn",
      "narrow",
      "strict",
      "open-minded"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The visitors from Japan received a _____ welcome at the airport. Our team greeted them with flowers and a big smile.",
    "options": [
      "warm",
      "cold",
      "rude",
      "hostile"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "interesting": {
    "pos": "adj.",
    "en_def": "able to hold your attention",
    "cn_def": "有趣的"
  },
  "fascinating": {
    "pos": "adj.",
    "en_def": "extremely interesting",
    "cn_def": "引人入勝的；令人著迷的"
  },
  "engaging": {
    "pos": "adj.",
    "en_def": "pleasant and keeping your interest",
    "cn_def": "吸引人的；迷人的"
  },
  "captivating": {
    "pos": "adj.",
    "en_def": "so attractive that you cannot look away",
    "cn_def": "令人著迷的；迷人的"
  },
  "intriguing": {
    "pos": "adj.",
    "en_def": "interesting because it is strange or not fully known",
    "cn_def": "耐人尋味的；引起好奇的"
  },
  "charming": {
    "pos": "adj.",
    "en_def": "very pleasant and attractive",
    "cn_def": "迷人的；可愛的"
  },
  "charismatic": {
    "pos": "adj.",
    "en_def": "having a strong personal charm that attracts people",
    "cn_def": "有領袖魅力的"
  },
  "entertaining": {
    "pos": "adj.",
    "en_def": "fun and enjoyable to watch or listen to",
    "cn_def": "有趣的；具娛樂性的"
  },
  "amusing": {
    "pos": "adj.",
    "en_def": "funny and making people smile or laugh",
    "cn_def": "好笑的；逗趣的"
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of energy, activity, or excitement",
    "cn_def": "熱鬧的；活潑的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy and new ideas",
    "cn_def": "有活力的；積極進取的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at making new and original things or ideas",
    "cn_def": "有創意的"
  },
  "imaginative": {
    "pos": "adj.",
    "en_def": "showing new and unusual ideas from the mind",
    "cn_def": "富有想像力的"
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making people want to do something good",
    "cn_def": "鼓舞人心的"
  },
  "influential": {
    "pos": "adj.",
    "en_def": "able to change what people think or do",
    "cn_def": "有影響力的"
  },
  "thoughtful": {
    "pos": "adj.",
    "en_def": "kind and thinking about other people's needs",
    "cn_def": "體貼的；細心的"
  },
  "insightful": {
    "pos": "adj.",
    "en_def": "showing a deep and clear understanding",
    "cn_def": "有見地的；有洞察力的"
  },
  "perceptive": {
    "pos": "adj.",
    "en_def": "quick to notice and understand things",
    "cn_def": "感覺敏銳的；有洞察力的"
  },
  "observant": {
    "pos": "adj.",
    "en_def": "good at noticing small details",
    "cn_def": "觀察力敏銳的"
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "able to learn and understand things quickly",
    "cn_def": "聰明的；有才智的"
  },
  "brilliant": {
    "pos": "adj.",
    "en_def": "extremely clever or excellent",
    "cn_def": "傑出的；絕妙的"
  },
  "knowledgeable": {
    "pos": "adj.",
    "en_def": "knowing a lot about a subject",
    "cn_def": "知識淵博的；很懂的"
  },
  "articulate": {
    "pos": "adj.",
    "en_def": "able to express ideas clearly in words",
    "cn_def": "能言善道的；表達清楚的"
  },
  "witty": {
    "pos": "adj.",
    "en_def": "clever and funny with words",
    "cn_def": "機智風趣的"
  },
  "humorous": {
    "pos": "adj.",
    "en_def": "funny and making people laugh",
    "cn_def": "幽默的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and pleasant to other people",
    "cn_def": "友善的"
  },
  "outgoing": {
    "pos": "adj.",
    "en_def": "liking to meet and talk with people",
    "cn_def": "外向的；友好的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure about yourself and your abilities",
    "cn_def": "有自信的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "the only one of its kind; very special",
    "cn_def": "獨特的；獨一無二的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual or surprising in a way that people notice",
    "cn_def": "非凡的；顯著的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "easy to remember because it is special",
    "cn_def": "難忘的"
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "having very strong feelings about something you love",
    "cn_def": "熱情的；熱愛的"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing great interest and excitement",
    "cn_def": "熱衷的；熱烈的"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "open-minded": {
    "pos": "adj.",
    "en_def": "willing to accept new or different ideas",
    "cn_def": "心胸開放的；開明的"
  },
  "warm": {
    "pos": "adj.",
    "en_def": "friendly and kind in a way that makes people feel welcome",
    "cn_def": "熱情的；溫暖的"
  }
};

const EXTRA_GLOSSES = {};
