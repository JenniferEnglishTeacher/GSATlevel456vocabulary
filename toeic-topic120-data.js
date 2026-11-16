// Topic 120 Quiz Data: Energetic Person 精力充沛的人
// Source word list: https://www.examword.com/group-topic/energetic-person — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T120 - Energetic Person 精力充沛的人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "full of energy and ready to be active",
    "sentence": "A: Who do you think should lead the morning tour for the new interns, since it involves walking around the whole factory for three hours? B: I would choose Daniel from the marketing team, because he is always {{BLANK}} early in the day and he never complains about long walks or busy schedules.",
    "cn": "A：你覺得誰應該帶新實習生進行早上的參觀？因為要在整個工廠走三個小時。 B：我會選行銷部的丹尼爾，因為他一大早總是【精力充沛】，而且從不抱怨走很多路或行程很忙。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "活潑的；熱鬧的",
    "en_def": "full of life, fun and activity",
    "sentence": "A: How was the welcome dinner for the visiting clients from Japan last night, and did everyone get along well? B: It was a really {{BLANK}} evening, because the restaurant had live music, the staff told funny stories, and the clients stayed chatting with us until almost midnight.",
    "cn": "A：昨晚為日本來訪客戶舉辦的歡迎晚宴怎麼樣？大家相處得好嗎？ B：那真是一個非常【熱鬧】的晚上，因為餐廳有現場音樂，員工講了很多有趣的故事，客戶跟我們聊到快半夜才走。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "積極的；活躍的",
    "en_def": "busy doing things and taking part in them",
    "sentence": "A: Do you know whether our new branch manager has any experience working with local community groups in this area? B: Yes, she has been very {{BLANK}} in the city's business association for years, so she already knows many shop owners and often helps organize charity events on weekends.",
    "cn": "A：你知道我們新的分行經理有沒有和這一帶在地社區團體合作的經驗嗎？ B：有，她多年來一直在市內的商業協會非常【活躍】，所以她已經認識很多店家老闆，而且週末常幫忙籌辦慈善活動。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "有活力的；變化快速的",
    "en_def": "full of energy, new ideas and change",
    "sentence": "A: What kind of company culture should we describe in the job advertisement to attract younger designers and engineers? B: We should say that we offer a {{BLANK}} work environment where new ideas are welcomed, projects change quickly, and employees can grow their skills by working with different departments.",
    "cn": "A：我們應該在徵才廣告中描述什麼樣的公司文化，才能吸引較年輕的設計師和工程師？ B：我們應該說我們提供一個【充滿活力】的工作環境，歡迎新想法、專案變化快速，而且員工可以透過與不同部門合作來提升技能。"
  },
  {
    "word": "vibrant",
    "pos": "adj.",
    "cn_def": "充滿活力的；鮮豔的",
    "en_def": "bright, exciting and full of life",
    "sentence": "A: Why did the company decide to open its new office downtown instead of in the quiet business park near the airport? B: The downtown area has a {{BLANK}} atmosphere with cafés, shops, and cultural events, so the managers believed it would help attract talented young employees and impress visiting clients.",
    "cn": "A：為什麼公司決定把新辦公室開在市中心，而不是機場附近安靜的商業園區？ B：市中心有咖啡館、商店和文化活動，氣氛【充滿活力】，所以經理們認為這有助於吸引有才華的年輕員工，也能讓來訪的客戶留下好印象。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱情的；熱衷的",
    "en_def": "showing strong interest and excitement",
    "sentence": "A: How did the sales staff react when the director announced the new bonus plan at Monday's meeting? B: Most of them were very {{BLANK}} about it, because the plan rewards good teamwork, and several people immediately started talking about how they could reach their targets before the end of the quarter.",
    "cn": "A：週一會議上主任宣布新的獎金方案時，業務人員有什麼反應？ B：他們大多數人對此都非常【熱衷】，因為這個方案會獎勵良好的團隊合作，有好幾個人立刻開始討論要怎麼在這一季結束前達成目標。"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱愛的；充滿熱情的",
    "en_def": "having very strong feelings about something you love",
    "sentence": "A: Why did the hiring committee choose Ms. Lin for the position at the environmental research center over the other candidates? B: She has less experience than some of them, but she is truly {{BLANK}} about protecting the ocean, and she spoke about her volunteer work so clearly that everyone was impressed.",
    "cn": "A：為什麼招聘委員會在眾多應徵者中選了林小姐擔任環境研究中心的職位？ B：她的經驗比其中幾個人少，但她真的非常【熱愛】保護海洋，而且她把自己的志工經驗講得很清楚，讓每個人都印象深刻。"
  },
  {
    "word": "spirited",
    "pos": "adj.",
    "cn_def": "熱烈的；激烈的；生氣勃勃的",
    "en_def": "full of energy and strong feeling",
    "sentence": "A: Did the board members agree quickly on the plan to move the factory overseas, or was there a long argument? B: There was a {{BLANK}} debate that lasted almost two hours, because several members strongly disagreed about the costs, but in the end they voted to study the idea for another month.",
    "cn": "A：董事會成員是很快就同意把工廠遷往海外的計畫，還是經過了長時間的爭論？ B：有一場將近兩小時的【激烈】辯論，因為好幾位成員對成本強烈反對，但最後他們投票決定再研究這個構想一個月。"
  },
  {
    "word": "vigorous",
    "pos": "adj.",
    "cn_def": "強而有力的；劇烈的",
    "en_def": "strong, active and full of energy",
    "sentence": "A: What did the doctor at the company health check tell you about your back pain and your long hours at the computer? B: She told me to avoid {{BLANK}} exercise for two weeks, take short breaks every hour, and walk slowly after lunch until the pain in my lower back gets better.",
    "cn": "A：公司健康檢查的醫生針對你的背痛和長時間使用電腦說了什麼？ B：她叫我兩週內避免【劇烈】運動，每小時短暫休息一下，午餐後慢慢散步，直到下背的疼痛好轉。"
  },
  {
    "word": "robust",
    "pos": "adj.",
    "cn_def": "強健的；穩健的",
    "en_def": "strong and healthy; not easily weakened",
    "sentence": "A: Are you worried that the new coffee chain across the street will take away many of our regular customers this year? B: Not really, because our sales have been {{BLANK}} for three years in a row, our customers love the loyalty program, and we are planning to add a breakfast menu next month.",
    "cn": "A：你擔心對街新開的連鎖咖啡店今年會搶走我們很多常客嗎？ B：不太擔心，因為我們的銷售已經連續三年都很【穩健】，客人很喜歡我們的集點方案，而且我們打算下個月推出早餐菜單。"
  },
  {
    "word": "peppy",
    "pos": "adj.",
    "cn_def": "活潑的；輕快的；精神十足的",
    "en_def": "lively, cheerful and full of energy",
    "sentence": "A: What kind of music should we play in the background of the new advertisement for our sports drink? B: I think we need something short and {{BLANK}} with a fast beat, because the video shows young people running and dancing, and slow music would make the whole thing feel boring.",
    "cn": "A：我們新的運動飲料廣告背景應該放什麼樣的音樂？ B：我覺得我們需要一段簡短又【輕快活潑】、節奏很快的音樂，因為影片中是年輕人在跑步和跳舞，慢歌會讓整支廣告感覺很無聊。"
  },
  {
    "word": "bubbly",
    "pos": "adj.",
    "cn_def": "活潑開朗的",
    "en_def": "very cheerful, friendly and full of energy",
    "sentence": "A: Why do so many hotel guests mention the young woman at the front desk in their online reviews? B: She has such a {{BLANK}} personality, always smiling and chatting with people from different countries, that guests feel welcome as soon as they arrive, even after a long and tiring flight.",
    "cn": "A：為什麼這麼多飯店住客在網路評論中提到櫃檯那位年輕女生？ B：她的個性非常【活潑開朗】，總是面帶微笑，和來自不同國家的人聊天，所以即使旅客搭了又長又累的班機，一抵達就會感到受歡迎。"
  },
  {
    "word": "animated",
    "pos": "adj.",
    "cn_def": "熱烈的；生動的",
    "en_def": "full of interest and energy, especially when talking",
    "sentence": "A: Was the training session on the new software as boring as everyone expected it to be this afternoon? B: Not at all, because the trainer asked so many interesting questions that we had an {{BLANK}} conversation about our daily problems, and the time passed much faster than I thought.",
    "cn": "A：今天下午的新軟體訓練課程有大家預期的那麼無聊嗎？ B：一點也不，因為講師問了很多有趣的問題，我們針對日常遇到的問題進行了【熱烈】的對話，時間過得比我想的快很多。"
  },
  {
    "word": "zestful",
    "pos": "adj.",
    "cn_def": "充滿熱情的；興致勃勃的",
    "en_def": "full of energy and enjoyment",
    "sentence": "A: How would you describe the new tour guide that the travel agency hired for the summer mountain trips? B: He has a {{BLANK}} attitude toward every trip, telling stories, singing songs on the bus, and cheering up tired travelers, so customers say the long hours on the road feel short and fun.",
    "cn": "A：你會怎麼形容旅行社為夏季山區行程新聘的導遊？ B：他對每一趟行程都抱持【充滿熱情】的態度，會講故事、在巴士上唱歌，並為疲累的旅客打氣，所以客人都說長時間的車程感覺又短又有趣。"
  },
  {
    "word": "zealous",
    "pos": "adj.",
    "cn_def": "熱心的；狂熱的",
    "en_def": "very eager and determined, sometimes too much",
    "sentence": "A: Why did several customers complain about the new security guard at the shopping mall entrance last weekend? B: He was a little too {{BLANK}} about following the rules, so he checked every bag very slowly, and a long line of shoppers formed outside the doors during the busy Saturday sale.",
    "cn": "A：為什麼上週末有好幾位顧客投訴購物中心入口的新警衛？ B：他對遵守規定有點過於【熱衷】，所以每個包包都檢查得很慢，結果在忙碌的週六特賣期間，門外排起了一長串購物人潮。"
  },
  {
    "word": "driven",
    "pos": "adj.",
    "cn_def": "有幹勁的；有強烈企圖心的",
    "en_def": "very determined to succeed",
    "sentence": "A: Do you think Kevin will really finish his MBA while working full-time as an assistant manager at the bank? B: I'm sure he will, because he is extremely {{BLANK}} and organized, studying every night after work and on weekends, and he has already told everyone he wants to become a branch director.",
    "cn": "A：你覺得凱文真的能一邊在銀行全職擔任副理，一邊完成他的企管碩士嗎？ B：我確定他可以，因為他非常【有企圖心】又很有條理，每天下班後和週末都在念書，而且他已經告訴大家他想成為分行主管。"
  },
  {
    "word": "motivated",
    "pos": "adj.",
    "cn_def": "有動力的；積極的",
    "en_def": "wanting to do something and willing to work hard for it",
    "sentence": "A: What qualities are you looking for in the new sales assistant, since you said experience is not the most important thing? B: I want someone who is highly {{BLANK}} and willing to learn, because we can teach product knowledge in a few weeks, but a positive attitude toward work is much harder to train.",
    "cn": "A：你說經驗不是最重要的，那你希望新的業務助理具備什麼特質？ B：我希望找一個非常【積極主動】又願意學習的人，因為產品知識幾週內就能教會，但對工作的正面態度要難訓練得多。"
  },
  {
    "word": "go-getter",
    "pos": "n.",
    "cn_def": "積極進取的人；有魄力的人",
    "en_def": "a person who works hard and is determined to succeed",
    "sentence": "A: Why did the regional manager promote Sarah so quickly after she joined the company only a year ago? B: She is a real {{BLANK}} who finds new customers on her own, solves problems without waiting for instructions, and she brought in three large contracts during her first six months.",
    "cn": "A：為什麼莎拉才進公司一年，區域經理就這麼快升她的職？ B：她是一個真正【積極進取的人】，會自己開發新客戶、不等指示就主動解決問題，而且在頭六個月就談成了三份大合約。"
  },
  {
    "word": "self-starter",
    "pos": "n.",
    "cn_def": "主動自發的人；能自我激勵的人",
    "en_def": "a person who starts work without needing to be told",
    "sentence": "A: Our new team members will work from home most days, so what kind of people should we look for during the interviews? B: Each person should be a {{BLANK}} who can plan the day alone, finish tasks without close supervision, and contact the manager only when something is really unclear.",
    "cn": "A：我們的新團隊成員大部分時間都會在家工作，那面試時我們應該找什麼樣的人？ B：每個人都應該是能【主動自發的人】，能獨自規劃一天的工作，在沒有密切監督的情況下完成任務，只有在真的不清楚時才聯絡主管。"
  },
  {
    "word": "hardworking",
    "pos": "adj.",
    "cn_def": "勤奮的",
    "en_def": "working with a lot of effort",
    "sentence": "A: What did the restaurant owner say about the kitchen staff when the food critic praised the meal in the newspaper? B: He thanked his {{BLANK}} cooks and dishwashers, who start preparing ingredients at six every morning, and he gave everyone an extra day off to celebrate the excellent review.",
    "cn": "A：美食評論家在報紙上稱讚那頓餐點時，餐廳老闆怎麼評論廚房員工？ B：他感謝他那些【勤奮】的廚師和洗碗工，他們每天早上六點就開始準備食材，他還多給每個人一天假來慶祝這篇好評。"
  },
  {
    "word": "industrious",
    "pos": "adj.",
    "cn_def": "勤勉的；勤奮的",
    "en_def": "always working hard",
    "sentence": "A: How did the small family business manage to grow into a company with five factories in just twenty years? B: The founder was an {{BLANK}} man who worked long hours, saved every dollar, and trained his children carefully, so the business kept expanding even during difficult economic times.",
    "cn": "A：那家小型家族企業怎麼能在短短二十年內成長為擁有五座工廠的公司？ B：創辦人是一位【勤勉】的人，他工作時間很長、省下每一塊錢，並用心培訓他的孩子，所以即使經濟困難時，事業也持續擴張。"
  },
  {
    "word": "tireless",
    "pos": "adj.",
    "cn_def": "不知疲倦的；孜孜不倦的",
    "en_def": "working hard for a long time without stopping",
    "sentence": "A: Why is the hospital naming its new children's wing after a nurse instead of a doctor or a donor? B: Ms. Wong spent forty years caring for sick children, and the hospital wanted to honor her {{BLANK}} efforts, especially her work raising money for families who could not afford treatment.",
    "cn": "A：為什麼醫院要以一位護理師的名字，而不是醫生或捐款人的名字，來命名新的兒童大樓？ B：黃小姐花了四十年照顧生病的孩子，醫院想表揚她【不辭辛勞】的付出，特別是她為付不起醫療費的家庭募款的貢獻。"
  },
  {
    "word": "relentless",
    "pos": "adj.",
    "cn_def": "不懈的；持續不斷的",
    "en_def": "never stopping or becoming weaker",
    "sentence": "A: How did your small online shop become so successful, even with large companies selling similar products at lower prices? B: We had a {{BLANK}} focus on customer service, answering every message within an hour, and that careful attention helped us build a loyal group of buyers who recommended us to friends.",
    "cn": "A：即使大公司以更低的價格販售類似商品，你們的小網店是怎麼變得這麼成功的？ B：我們【持續不懈】地專注於客戶服務，每則訊息都在一小時內回覆，這種用心幫我們建立了一群忠實顧客，他們還會把我們推薦給朋友。"
  },
  {
    "word": "eager",
    "pos": "adj.",
    "cn_def": "渴望的；熱切的",
    "en_def": "wanting very much to do or have something",
    "sentence": "A: How are the new interns doing in their first week at the accounting firm, and do they need more help? B: They are all {{BLANK}} to learn, asking good questions in every meeting, but I think they need more practice with our software before they handle real client accounts next month.",
    "cn": "A：新實習生在會計事務所的第一週表現如何？他們需要更多協助嗎？ B：他們都很【渴望】學習，每次開會都會提出好問題，但我想在下個月處理真正的客戶帳目之前，他們需要多練習我們的軟體。"
  },
  {
    "word": "keen",
    "pos": "adj.",
    "cn_def": "熱衷的；渴望的",
    "en_def": "very interested in something and wanting to do it",
    "sentence": "A: Has the marketing director decided whether our department will attend the trade fair in Singapore this spring? B: She is very {{BLANK}} on the idea, because many of our Asian buyers will be there, but she still needs approval from finance before she books the booth and the flights.",
    "cn": "A：行銷總監決定我們部門今年春天是否要參加新加坡的商展了嗎？ B：她非常【熱衷】這個想法，因為我們很多亞洲買家都會到場，但她在預訂攤位和機票之前，仍需要財務部門的核准。"
  },
  {
    "word": "brisk",
    "pos": "adj.",
    "cn_def": "輕快的；（生意）興隆的",
    "en_def": "quick and full of energy; busy (business)",
    "sentence": "A: How were sales at the new bakery near the train station during its first week of business? B: Trade was {{BLANK}}, especially in the early morning when commuters stopped for coffee and sandwiches, so the owner is already planning to hire two more workers for the morning shift.",
    "cn": "A：火車站附近新開的麵包店開幕第一週的銷售情況如何？ B：生意很【興隆】，特別是清晨通勤族會停下來買咖啡和三明治的時候，所以老闆已經打算為早班再多雇兩名員工。"
  },
  {
    "word": "sprightly",
    "pos": "adj.",
    "cn_def": "（老人）精神矍鑠的；輕快的",
    "en_def": "lively and active, especially for an older person",
    "sentence": "A: Is the retired engineer who leads our factory tours really over eighty years old, as the visitors were saying? B: Yes, he is eighty-two, but he is so {{BLANK}} that he climbs the stairs faster than most of us and still walks around the whole plant twice a week.",
    "cn": "A：帶我們工廠導覽的那位退休工程師真的像參觀者說的已經八十多歲了嗎？ B：是的，他八十二歲了，但他【精神矍鑠】，爬樓梯比我們大多數人都快，而且每週仍會繞整個廠區走兩次。"
  },
  {
    "word": "vivacious",
    "pos": "adj.",
    "cn_def": "活潑迷人的",
    "en_def": "attractive because lively and full of energy",
    "sentence": "A: Who are we inviting to host the company's annual awards dinner, since last year's host was so quiet? B: We've invited a {{BLANK}} TV presenter who is famous for her bright smile and quick jokes, so we hope she will keep the audience laughing and make the long evening more fun.",
    "cn": "A：既然去年的主持人那麼安靜，今年公司年度頒獎晚宴我們要邀請誰來主持？ B：我們邀請了一位【活潑迷人】的電視節目主持人，她以燦爛的笑容和機智的笑話聞名，希望她能讓觀眾一直笑，讓漫長的晚上更有趣。"
  },
  {
    "word": "high-spirited",
    "pos": "adj.",
    "cn_def": "興高采烈的；活潑的",
    "en_def": "lively, cheerful and full of energy",
    "sentence": "A: Why was the school group on the museum tour so noisy this morning, and did they disturb the other visitors? B: The children were a bit {{BLANK}} after the long bus ride, laughing and running around, but their teachers calmed them down quickly, and nobody complained at the front desk.",
    "cn": "A：今天早上參加博物館導覽的學生團為什麼那麼吵？他們有打擾到其他參觀者嗎？ B：孩子們在長途巴士車程後有點【興高采烈】，又笑又跑，但老師們很快就讓他們安靜下來，沒有人到服務台抱怨。"
  },
  {
    "word": "adventurous",
    "pos": "adj.",
    "cn_def": "愛冒險的；勇於嘗試的",
    "en_def": "willing to try new or exciting things",
    "sentence": "A: Which of our travel packages would you recommend for a young couple who want something different for their honeymoon? B: If they are {{BLANK}}, I'd suggest the ten-day trip to Iceland, which includes glacier hiking, cave tours, and a night in a small cabin to watch the northern lights.",
    "cn": "A：有一對年輕夫妻想要不一樣的蜜月旅行，你會推薦我們哪個旅遊方案？ B：如果他們【喜歡冒險】，我會建議十天的冰島行程，其中包括冰河健行、洞穴導覽，以及在小木屋住一晚觀賞北極光。"
  },
  {
    "word": "enterprising",
    "pos": "adj.",
    "cn_def": "有進取心的；有創業精神的",
    "en_def": "good at thinking of new ways to make money or solve problems",
    "sentence": "A: How did that small noodle shop near our office become famous across the whole city so quickly? B: An {{BLANK}} young owner started selling cooking videos online, showing customers how she makes the noodles by hand, and soon thousands of people were visiting the shop to try them.",
    "cn": "A：我們辦公室附近那家小麵店怎麼這麼快就紅遍全市？ B：一位【有進取心】的年輕老闆開始在網路上販售烹飪影片，向顧客展示她如何手工製作麵條，很快就有成千上萬的人來店裡品嚐。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；多產的",
    "en_def": "producing a lot; getting a lot done",
    "sentence": "A: How was the meeting with the suppliers this afternoon, and did you settle the delivery problems from last month? B: It was very {{BLANK}}, because we agreed on a new schedule, solved the packaging issue, and even got a small discount on our next order of raw materials.",
    "cn": "A：今天下午和供應商的會議如何？你們解決上個月的交貨問題了嗎？ B：會議非常【有成效】，因為我們談定了新的時程，解決了包裝問題，甚至在下一批原料訂單上還拿到了小折扣。"
  },
  {
    "word": "fast-paced",
    "pos": "adj.",
    "cn_def": "快節奏的",
    "en_def": "happening or moving very quickly",
    "sentence": "A: Why did Tom leave his job at the small bookstore to work at the busy advertising agency downtown? B: He said he wanted a more {{BLANK}} job with tight deadlines and new projects every week, because selling books all day had started to feel too slow and quiet for him.",
    "cn": "A：湯姆為什麼辭掉小書店的工作，去市中心忙碌的廣告公司上班？ B：他說他想要一份更【快節奏】的工作，有緊迫的截止期限，每週都有新專案，因為整天賣書開始讓他覺得太慢又太安靜了。"
  },
  {
    "word": "energetically",
    "pos": "adv.",
    "cn_def": "精力充沛地；積極地",
    "en_def": "in a way that shows a lot of energy",
    "sentence": "A: How did the new sales team respond when the company lost its biggest customer in the middle of the year? B: They worked {{BLANK}} to find new clients, making dozens of calls every day and visiting stores across the region, and by December they had replaced almost all the lost business.",
    "cn": "A：公司在年中失去最大客戶時，新的業務團隊如何因應？ B：他們【積極地】努力開發新客戶，每天打幾十通電話並拜訪全區的商店，到了十二月，他們幾乎已經補回了所有流失的業務。"
  },
  {
    "word": "enthusiastically",
    "pos": "adv.",
    "cn_def": "熱情地；熱烈地",
    "en_def": "in a very interested and excited way",
    "sentence": "A: How did the audience respond after the CEO introduced the new electric car at the product launch yesterday? B: They clapped {{BLANK}} for almost a minute, and many reporters rushed to the stage to take photos, so the marketing team believes the car will sell very well this year.",
    "cn": "A：昨天產品發表會上執行長介紹新款電動車後，觀眾反應如何？ B：他們【熱烈地】鼓掌將近一分鐘，許多記者衝到台前拍照，所以行銷團隊相信這款車今年會賣得很好。"
  }
];

const MCQS = [
  {
    "q": "The new fitness instructor is young and _____. She leads three hard classes every morning without ever looking tired.",
    "options": [
      "energetic",
      "fast-paced",
      "sleepy",
      "expensive"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel bar becomes quite _____ on Friday nights. A local band plays jazz, and the place is full of guests and music.",
    "options": [
      "eager",
      "lively",
      "driven",
      "motivated"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Our CEO plans to take an _____ role in the charity project. She will personally visit each school we support this year.",
    "options": [
      "eager",
      "industrious",
      "active",
      "enthusiastic"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The smartphone industry is a highly _____ market. Prices, products, and customer tastes change almost every few months.",
    "options": [
      "hardworking",
      "eager",
      "tireless",
      "dynamic"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Visitors love the _____ colors of the new mural in our lobby. The bright reds and yellows make the entrance feel warm and cheerful.",
    "options": [
      "driven",
      "vibrant",
      "hardworking",
      "eager"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The audience gave the speaker an _____ welcome when she walked onto the stage. Many people stood up and cheered loudly.",
    "options": [
      "enthusiastic",
      "industrious",
      "enterprising",
      "active"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our new chef is _____ about using fresh local ingredients. He visits the farmers' market himself every morning before the restaurant opens.",
    "options": [
      "brisk",
      "robust",
      "fast-paced",
      "passionate"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The two candidates had a _____ debate about taxes on live television. Both of them spoke with strong feelings and refused to back down.",
    "options": [
      "hardworking",
      "industrious",
      "spirited",
      "tireless"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Doctors recommend at least thirty minutes of _____ exercise three times a week. Running and swimming are good examples of this activity.",
    "options": [
      "vigorous",
      "enterprising",
      "eager",
      "driven"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The country's economy remained _____ despite the global slowdown. Exports rose by eight percent, and unemployment stayed low.",
    "options": [
      "eager",
      "robust",
      "adventurous",
      "keen"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Customers enjoy talking with Amy at the information desk. She has a cheerful, _____ personality that makes everyone smile.",
    "options": [
      "fast-paced",
      "productive",
      "bubbly",
      "robust"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The two engineers were having an _____ conversation about the new design. They waved their hands and talked excitedly for an hour.",
    "options": [
      "industrious",
      "enterprising",
      "adventurous",
      "animated"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Mark is a highly _____ young lawyer who wants to become a partner by thirty. He often stays at the office until midnight.",
    "options": [
      "vibrant",
      "driven",
      "brisk",
      "fast-paced"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The company offers bonuses to keep its employees _____. Workers who reach their monthly targets receive extra pay and a day off.",
    "options": [
      "motivated",
      "brisk",
      "fast-paced",
      "vibrant"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Our new account manager is a real _____. She contacted twenty possible clients in her first week without being asked.",
    "options": [
      "routine",
      "budget",
      "warehouse",
      "go-getter"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "This position requires a _____ who can work independently. You will receive little supervision and must plan your own schedule.",
    "options": [
      "spreadsheet",
      "warehouse",
      "self-starter",
      "newsletter"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The farmers in this region are known as _____ people. They start work before sunrise and rarely take a holiday.",
    "options": [
      "hardworking",
      "fast-paced",
      "brisk",
      "expensive"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Ants are often called _____ insects. They work constantly to collect and store food for the whole colony during the summer.",
    "options": [
      "fast-paced",
      "industrious",
      "brisk",
      "affordable"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The mayor thanked the volunteers for their _____ efforts after the flood. Many of them worked day and night for a full week.",
    "options": [
      "fast-paced",
      "bubbly",
      "tireless",
      "brisk"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The company faced _____ pressure from competitors to lower its prices. The pressure did not stop for the entire year.",
    "options": [
      "bubbly",
      "adventurous",
      "eager",
      "relentless"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many new graduates are _____ to gain work experience. They often accept internships even when the pay is quite low.",
    "options": [
      "bubbly",
      "eager",
      "brisk",
      "robust"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The manager is very _____ on the new marketing plan. She believes it will increase online sales by twenty percent.",
    "options": [
      "keen",
      "eager",
      "passionate",
      "enthusiastic"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The ice cream shop did _____ business during the heat wave. Long lines of customers formed outside the door every afternoon.",
    "options": [
      "eager",
      "passionate",
      "motivated",
      "brisk"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Tourists who are more _____ can try the jungle trek. It includes river crossings and two nights sleeping in tents.",
    "options": [
      "productive",
      "fast-paced",
      "adventurous",
      "industrious"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "An _____ student started a small business selling used textbooks online. Within a year, she was earning more than her professors.",
    "options": [
      "enterprising",
      "idle",
      "absent",
      "exhausted"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Thanks to the new software, our team had its most _____ month ever. We completed twice as many orders as usual.",
    "options": [
      "bubbly",
      "productive",
      "eager",
      "adventurous"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Working in a hospital emergency room is extremely _____. Nurses must make quick decisions and move from patient to patient.",
    "options": [
      "eager",
      "keen",
      "fast-paced",
      "bubbly"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The volunteers worked _____ all afternoon to clean up the park. By evening, they had collected more than fifty bags of trash.",
    "options": [
      "rarely",
      "financially",
      "previously",
      "energetically"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The fans cheered _____ when the team scored the winning goal. Some of them even ran onto the field to celebrate.",
    "options": [
      "financially",
      "enthusiastically",
      "previously",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "Although my grandfather is ninety, he is still very _____. He walks to the market every morning and climbs stairs easily.",
    "options": [
      "sprightly",
      "expensive",
      "fast-paced",
      "temporary"
    ],
    "answer": 0,
    "vocabIndex": 26
  }
];

const LOOKUP = {
  "energetic": {
    "pos": "adj.",
    "en_def": "full of energy and ready to be active",
    "cn_def": "精力充沛的"
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of life, fun and activity",
    "cn_def": "活潑的；熱鬧的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "busy doing things and taking part in them",
    "cn_def": "積極的；活躍的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy, new ideas and change",
    "cn_def": "有活力的；變化快速的"
  },
  "vibrant": {
    "pos": "adj.",
    "en_def": "bright, exciting and full of life",
    "cn_def": "充滿活力的；鮮豔的"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing strong interest and excitement",
    "cn_def": "熱情的；熱衷的"
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "having very strong feelings about something you love",
    "cn_def": "熱愛的；充滿熱情的"
  },
  "spirited": {
    "pos": "adj.",
    "en_def": "full of energy and strong feeling",
    "cn_def": "熱烈的；激烈的；生氣勃勃的"
  },
  "vigorous": {
    "pos": "adj.",
    "en_def": "strong, active and full of energy",
    "cn_def": "強而有力的；劇烈的"
  },
  "robust": {
    "pos": "adj.",
    "en_def": "strong and healthy; not easily weakened",
    "cn_def": "強健的；穩健的"
  },
  "peppy": {
    "pos": "adj.",
    "en_def": "lively, cheerful and full of energy",
    "cn_def": "活潑的；輕快的；精神十足的"
  },
  "bubbly": {
    "pos": "adj.",
    "en_def": "very cheerful, friendly and full of energy",
    "cn_def": "活潑開朗的"
  },
  "animated": {
    "pos": "adj.",
    "en_def": "full of interest and energy, especially when talking",
    "cn_def": "熱烈的；生動的"
  },
  "zestful": {
    "pos": "adj.",
    "en_def": "full of energy and enjoyment",
    "cn_def": "充滿熱情的；興致勃勃的"
  },
  "zealous": {
    "pos": "adj.",
    "en_def": "very eager and determined, sometimes too much",
    "cn_def": "熱心的；狂熱的"
  },
  "driven": {
    "pos": "adj.",
    "en_def": "very determined to succeed",
    "cn_def": "有幹勁的；有強烈企圖心的"
  },
  "motivated": {
    "pos": "adj.",
    "en_def": "wanting to do something and willing to work hard for it",
    "cn_def": "有動力的；積極的"
  },
  "go-getter": {
    "pos": "n.",
    "en_def": "a person who works hard and is determined to succeed",
    "cn_def": "積極進取的人；有魄力的人"
  },
  "self-starter": {
    "pos": "n.",
    "en_def": "a person who starts work without needing to be told",
    "cn_def": "主動自發的人；能自我激勵的人"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "working with a lot of effort",
    "cn_def": "勤奮的"
  },
  "industrious": {
    "pos": "adj.",
    "en_def": "always working hard",
    "cn_def": "勤勉的；勤奮的"
  },
  "tireless": {
    "pos": "adj.",
    "en_def": "working hard for a long time without stopping",
    "cn_def": "不知疲倦的；孜孜不倦的"
  },
  "relentless": {
    "pos": "adj.",
    "en_def": "never stopping or becoming weaker",
    "cn_def": "不懈的；持續不斷的"
  },
  "eager": {
    "pos": "adj.",
    "en_def": "wanting very much to do or have something",
    "cn_def": "渴望的；熱切的"
  },
  "keen": {
    "pos": "adj.",
    "en_def": "very interested in something and wanting to do it",
    "cn_def": "熱衷的；渴望的"
  },
  "brisk": {
    "pos": "adj.",
    "en_def": "quick and full of energy; busy (business)",
    "cn_def": "輕快的；（生意）興隆的"
  },
  "sprightly": {
    "pos": "adj.",
    "en_def": "lively and active, especially for an older person",
    "cn_def": "（老人）精神矍鑠的；輕快的"
  },
  "vivacious": {
    "pos": "adj.",
    "en_def": "attractive because lively and full of energy",
    "cn_def": "活潑迷人的"
  },
  "high-spirited": {
    "pos": "adj.",
    "en_def": "lively, cheerful and full of energy",
    "cn_def": "興高采烈的；活潑的"
  },
  "adventurous": {
    "pos": "adj.",
    "en_def": "willing to try new or exciting things",
    "cn_def": "愛冒險的；勇於嘗試的"
  },
  "enterprising": {
    "pos": "adj.",
    "en_def": "good at thinking of new ways to make money or solve problems",
    "cn_def": "有進取心的；有創業精神的"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "producing a lot; getting a lot done",
    "cn_def": "有成效的；多產的"
  },
  "fast-paced": {
    "pos": "adj.",
    "en_def": "happening or moving very quickly",
    "cn_def": "快節奏的"
  },
  "energetically": {
    "pos": "adv.",
    "en_def": "in a way that shows a lot of energy",
    "cn_def": "精力充沛地；積極地"
  },
  "enthusiastically": {
    "pos": "adv.",
    "en_def": "in a very interested and excited way",
    "cn_def": "熱情地；熱烈地"
  }
};

const EXTRA_GLOSSES = {};
