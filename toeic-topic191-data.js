// Topic 191 Quiz Data: Inspired 受到啟發
// Source word list: https://www.examword.com/group-topic/inspired — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T191 - Inspired 受到啟發",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感；鼓舞",
    "en_def": "something that gives you new ideas or the wish to do something",
    "sentence": "A: Where did the design team get the {{BLANK}} for the new office lobby, because everyone who visits says it looks fresh and welcoming? B: They took a trip to several small cafés in Kyoto last spring, and the warm wood, soft lights, and indoor plants gave them lots of ideas.",
    "cn": "A：設計團隊新辦公大廳的【靈感】是從哪裡來的？因為每位來訪的人都說它看起來清新又親切。 B：他們去年春天到京都去參觀了幾間小咖啡館，那裡溫暖的木頭、柔和的燈光和室內植物給了他們很多想法。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；促使",
    "en_def": "to make someone want to work hard or do something",
    "sentence": "A: Sales have been slow for three months, and the team seems tired and bored, so what can we do as managers to help? B: I think a small bonus for every new client and a fun team dinner at the end of the month would really {{BLANK}} them to try harder.",
    "cn": "A：銷售已經低迷三個月了，團隊看起來又累又無聊，身為經理我們能做些什麼來幫忙？ B：我認為每簽一位新客戶就發一小筆獎金，再加上月底一頓有趣的團隊晚餐，真的能【激勵】他們更加努力。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；動力",
    "en_def": "the reason or energy that makes you want to do something",
    "sentence": "A: You started taking online accounting classes every evening after work even though you are already busy, so why did you decide to do it? B: My main {{BLANK}} is the promotion that will open next year, because the new position requires a certificate and pays almost twenty percent more.",
    "cn": "A：你雖然已經很忙了，卻還是每天下班後去上線上會計課，你為什麼決定這麼做？ B：我主要的【動機】是明年將開放的升遷機會，因為那個新職位需要證照，而且薪水多了將近百分之二十。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone support or confidence to do something",
    "sentence": "A: The new interns are very quiet during our weekly meetings, and I am worried that they have good ideas but are too shy to speak up. B: Let's ask each of them one easy question at the start, and then {{BLANK}} them to share their opinions without worrying about making mistakes.",
    "cn": "A：新來的實習生在我們每週的會議上都很安靜，我擔心他們其實有好點子，只是太害羞而不敢發言。 B：我們一開始先問他們每人一個簡單的問題，然後【鼓勵】他們分享意見，不必擔心犯錯。"
  },
  {
    "word": "encouragement",
    "pos": "n.",
    "cn_def": "鼓勵；激勵",
    "en_def": "words or actions that give someone support and confidence",
    "sentence": "A: How did you finally manage to finish the marathon last weekend when you told me your legs were hurting badly after the first twenty kilometers? B: My coworkers were waiting along the road with signs and water, and their loud {{BLANK}} helped me keep running all the way to the finish line.",
    "cn": "A：你告訴過我跑完前二十公里後腿就痛得很厲害，那你上週末到底是怎麼跑完馬拉松的？ B：我的同事們拿著標語和水在路邊等我，他們大聲的【鼓勵】讓我一路跑到了終點線。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響；影響力",
    "en_def": "the power to change how someone thinks or behaves",
    "sentence": "A: Why did our young customers suddenly start buying so many green tea drinks this summer when they used to prefer sweet coffee? B: A popular food blogger posted several videos about healthy drinks, and her {{BLANK}} on teenagers and college students is much stronger than any of our television ads.",
    "cn": "A：為什麼我們的年輕顧客以前偏好甜咖啡，今年夏天卻突然開始買那麼多綠茶飲料？ B：一位很紅的美食部落客發了好幾支關於健康飲品的影片，她對青少年和大學生的【影響力】遠比我們任何電視廣告都還要大。"
  },
  {
    "word": "role model",
    "pos": "n.phr.",
    "cn_def": "榜樣；模範",
    "en_def": "a person whose behavior others copy because they admire them",
    "sentence": "A: Why do so many new employees in the marketing department ask to join Ms. Chen's projects even though her deadlines are always very tight? B: She is a great {{BLANK}} for young workers because she stays calm under pressure, treats everyone fairly, and always explains clearly how she solves problems.",
    "cn": "A：為什麼行銷部有那麼多新員工要求加入陳小姐的專案，即使她的截止期限總是很緊？ B：她是年輕員工很好的【榜樣】，因為她在壓力下保持冷靜、公平對待每個人，而且總是清楚解釋她如何解決問題。"
  },
  {
    "word": "example",
    "pos": "n.",
    "cn_def": "榜樣；例子",
    "en_def": "a person or action that others can learn from or copy",
    "sentence": "A: Our new branch manager comes to the office before eight every morning and is always the last person to turn off the lights, isn't she? B: Yes, and she sets a good {{BLANK}} for the whole team, so now even the salespeople who used to arrive late are coming in early.",
    "cn": "A：我們新的分店經理每天早上八點前就到辦公室，而且總是最後一個關燈的人，對吧？ B：對，她為整個團隊樹立了好【榜樣】，所以現在連以前常遲到的業務員也都提早上班了。"
  },
  {
    "word": "idea",
    "pos": "n.",
    "cn_def": "想法；主意",
    "en_def": "a thought or plan about what to do",
    "sentence": "A: The hotel wants to attract more families during the slow winter months, but the manager says the budget for advertising is very small this year. B: I have an {{BLANK}} that might help: we could offer free breakfast for children and a weekend cooking class that parents and kids can join together.",
    "cn": "A：飯店想在淡季的冬季月份吸引更多家庭客，但經理說今年的廣告預算很少。 B：我有一個可能有幫助的【主意】：我們可以提供兒童免費早餐，以及一個讓父母和孩子一起參加的週末烹飪課。"
  },
  {
    "word": "vision",
    "pos": "n.",
    "cn_def": "願景；遠見",
    "en_def": "a clear picture or plan of what the future should be like",
    "sentence": "A: Why did the investors agree to put so much money into such a small startup that only has twelve employees and one product? B: The founder shared a clear {{BLANK}} of building affordable solar panels for every home in Asia, and her detailed five-year plan made the investors feel confident.",
    "cn": "A：為什麼投資人願意投那麼多錢到一家只有十二名員工和一項產品的小新創公司？ B：創辦人分享了要為亞洲每個家庭打造平價太陽能板的清楚【願景】，而她詳細的五年計畫讓投資人很有信心。"
  },
  {
    "word": "dream",
    "pos": "n.",
    "cn_def": "夢想",
    "en_def": "something you hope very much to do or have in the future",
    "sentence": "A: You've worked as an accountant for ten years, so why are you suddenly taking baking classes on Saturday mornings at the community center? B: It has always been my {{BLANK}} to open a small bakery near the train station, and I want to learn the skills before I leave my office job.",
    "cn": "A：你已經當了十年會計師，為什麼突然在社區中心上週六早上的烘焙課？ B：在火車站附近開一間小麵包店一直是我的【夢想】，我想在辭掉辦公室工作前先學會這些技能。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you are trying to achieve",
    "sentence": "A: What did the manager say during the meeting this morning about our plans for the next quarter, since I missed it because of a dentist appointment? B: Our main {{BLANK}} is to increase online sales by fifteen percent, so we will spend more on social media ads and improve the website.",
    "cn": "A：經理今天早上開會時對下一季的計畫說了些什麼？因為我去看牙醫所以錯過了。 B：我們的主要【目標】是讓線上銷售成長百分之十五，所以我們會在社群媒體廣告上花更多錢，並改善網站。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造；建立",
    "en_def": "to make something new",
    "sentence": "A: Our website looks old-fashioned, and many customers have complained that they cannot find the product information they need on their phones. B: Let's hire a young designer to {{BLANK}} a new homepage that is simple, colorful, and easy to use on both smartphones and laptops.",
    "cn": "A：我們的網站看起來很老氣，很多顧客抱怨用手機找不到他們需要的產品資訊。 B：我們請一位年輕設計師來【建立】一個簡單、色彩豐富，而且在手機和筆電上都容易使用的新首頁吧。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to form a picture of something in your mind",
    "sentence": "A: The new conference room is still empty and full of dust, so it is hard for me to believe it will be ready for the clients next week. B: Just {{BLANK}} it with a long wooden table, big windows, soft chairs, and a large screen on the wall, and you will see how nice it will be.",
    "cn": "A：新的會議室還是空的而且滿是灰塵，我很難相信下週就能準備好迎接客戶。 B：只要【想像】一下裡面擺上一張長木桌、大窗戶、柔軟的椅子，牆上還有一個大螢幕，你就會知道它會有多棒。"
  },
  {
    "word": "discover",
    "pos": "v.",
    "cn_def": "發現",
    "en_def": "to find or learn something for the first time",
    "sentence": "A: How did you start your career as a professional photographer when you studied engineering at university and worked in a factory for five years? B: During a business trip to Iceland, I happened to {{BLANK}} how much I loved taking pictures of mountains, so I took evening courses and slowly built my portfolio.",
    "cn": "A：你大學讀工程，又在工廠工作了五年，你是怎麼開始專業攝影師的職涯的？ B：在一次去冰島的出差中，我碰巧【發現】自己有多喜歡拍山景，所以我去上夜間課程，慢慢建立起我的作品集。"
  },
  {
    "word": "spark",
    "pos": "v.",
    "cn_def": "激發；引發",
    "en_def": "to cause something to start or develop",
    "sentence": "A: Why did the city library invite a famous astronaut to give a free talk to the high school students on Saturday afternoon? B: The librarians hoped her exciting stories about life in space would {{BLANK}} the teenagers' interest in science and encourage more of them to study engineering later.",
    "cn": "A：為什麼市立圖書館邀請一位知名太空人在週六下午為高中生舉辦一場免費演講？ B：圖書館員希望她在太空生活的精彩故事能【激發】青少年對科學的興趣，並讓更多人日後去讀工程。"
  },
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；欣賞",
    "en_def": "to respect and like someone because of what they do",
    "sentence": "A: Why do you always quote our former CEO in your presentations even though she retired from the company more than five years ago? B: I really {{BLANK}} the way she saved the business during the financial crisis without firing anyone, and her honest leadership still guides how I manage my team.",
    "cn": "A：為什麼你在簡報裡總是引用我們前任執行長的話，即使她已經退休超過五年了？ B：我真的很【欽佩】她在金融危機期間沒有裁掉任何人就救了公司，她誠實的領導方式至今仍指引我管理團隊。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: We need someone to plan the decorations, games, and music for the company's twentieth anniversary party, but nobody has volunteered yet. B: Why don't we ask Tina from the design department, because she is very {{BLANK}} and always comes up with fun and surprising ideas for our team events?",
    "cn": "A：我們需要有人來規劃公司二十週年派對的布置、遊戲和音樂，但目前還沒人自願。 B：我們何不請設計部的蒂娜來負責？她非常【有創意】，總能為我們的團隊活動想出有趣又令人驚喜的點子。"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱情的；熱愛的",
    "en_def": "having very strong feelings about something you love",
    "sentence": "A: What did you think of the new chef that the restaurant owner hired last week to manage the kitchen during the busy holiday season? B: He is truly {{BLANK}} about local food, and he visits the farmers' market every morning to choose the freshest vegetables and talk with the growers.",
    "cn": "A：你覺得餐廳老闆上週聘請、在繁忙假期負責廚房的新主廚怎麼樣？ B：他真的非常【熱愛】在地食材，每天早上都去農夫市集挑選最新鮮的蔬菜，還會和種植者聊天。"
  },
  {
    "word": "motivated",
    "pos": "adj.",
    "cn_def": "有幹勁的；積極的",
    "en_def": "wanting to do something and willing to work hard",
    "sentence": "A: Why did the human resources team choose the candidate with less experience instead of the one who had worked in sales for ten years? B: She seemed highly {{BLANK}} during the interview, she had already studied our products in detail, and she clearly wanted to learn and grow with the company.",
    "cn": "A：為什麼人資團隊選了經驗較少的應徵者，而不是在業務領域工作了十年的那位？ B：她在面試時看起來非常【有幹勁】，已經詳細研究過我們的產品，而且顯然很想和公司一起學習成長。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱心的；熱情的",
    "en_def": "showing a lot of interest and excitement",
    "sentence": "A: How did the staff react when the director announced that the office would move to a new building with a gym and a rooftop garden? B: Everyone was very {{BLANK}} about the news, and several people immediately started planning lunchtime yoga classes and weekend gardening activities together.",
    "cn": "A：當主管宣布辦公室要搬到一棟有健身房和屋頂花園的新大樓時，員工的反應如何？ B：大家對這個消息都非常【熱烈】，好幾個人立刻開始一起規劃午休瑜伽課和週末園藝活動。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "下定決心的；堅定的",
    "en_def": "having made a firm decision to do something",
    "sentence": "A: Your team failed the safety inspection twice this year, so are you going to give up on getting the international certificate for the factory? B: No, we are {{BLANK}} to pass next time, so we hired an outside expert, trained every worker again, and replaced all the old machines.",
    "cn": "A：你們團隊今年已經兩次沒通過安全檢查，你們要放棄為工廠取得國際認證嗎？ B：不，我們【下定決心】下次一定要通過，所以我們聘請了外部專家、重新訓練每位工人，並更換了所有舊機器。"
  },
  {
    "word": "hopeful",
    "pos": "adj.",
    "cn_def": "抱有希望的",
    "en_def": "feeling that something good will probably happen",
    "sentence": "A: Do you think the company will win the large contract with the Japanese electronics firm after last week's long meeting in Osaka? B: I'm quite {{BLANK}} because their managers liked our samples, asked many questions about delivery times, and invited us back for a factory tour next month.",
    "cn": "A：上週在大阪那場冗長的會議之後，你覺得公司會拿到那家日本電子公司的大合約嗎？ B：我相當【有希望】，因為他們的經理們很喜歡我們的樣品，問了很多交貨時間的問題，還邀請我們下個月再去參觀工廠。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "光明的；有前途的",
    "en_def": "full of hope and likely to be successful",
    "sentence": "A: Our small company only sold coffee in one shop three years ago, so how do you feel about opening five new branches across the country next year? B: The future looks {{BLANK}} because our online orders keep growing every month, and many shopping malls have contacted us about renting space.",
    "cn": "A：我們這家小公司三年前只在一家店賣咖啡，你對明年在全國開五家新分店有什麼感覺？ B：未來看起來很【光明】，因為我們的線上訂單每個月都在成長，而且很多購物中心都主動聯絡我們洽談租用空間。"
  },
  {
    "word": "strongly",
    "pos": "adv.",
    "cn_def": "強烈地；堅決地",
    "en_def": "in a very firm or powerful way",
    "sentence": "A: The board is still deciding whether to move the factory overseas, so what is your opinion as the head of the local workers' team? B: I {{BLANK}} believe we should stay here, because our skilled workers, good roads, and close relationship with nearby suppliers are worth much more than cheaper rent.",
    "cn": "A：董事會仍在決定是否要把工廠移到海外，身為本地工人團隊的負責人，你的意見是什麼？ B：我【堅決】認為我們應該留在這裡，因為我們熟練的工人、良好的道路以及和附近供應商的密切關係，比便宜的租金值得多了。"
  },
  {
    "word": "deeply",
    "pos": "adv.",
    "cn_def": "深深地",
    "en_def": "very much; in a strong way",
    "sentence": "A: How did the audience react to the short film about the volunteer doctors that our charity showed at the dinner event last Friday evening? B: Many guests were {{BLANK}} moved by the stories of the children who were treated, and several of them offered to donate money before the dinner even ended.",
    "cn": "A：上週五晚上我們的慈善機構在晚宴活動中播放了那部關於志工醫生的短片，觀眾的反應如何？ B：許多來賓都被那些接受治療的孩子們的故事【深深地】感動，有好幾位甚至在晚宴結束前就表示要捐款。"
  },
  {
    "word": "greatly",
    "pos": "adv.",
    "cn_def": "大大地；非常",
    "en_def": "very much; to a large degree",
    "sentence": "A: Since the company started offering flexible working hours and the option to work from home twice a week, have you noticed any changes? B: Yes, staff morale has {{BLANK}} improved, fewer people are taking sick days, and our customer service team is answering emails much faster than before.",
    "cn": "A：自從公司開始提供彈性工時，並讓員工每週可以在家工作兩天，你有注意到什麼改變嗎？ B：有，員工士氣【大大地】提升了，請病假的人變少了，而且我們的客服團隊回覆電子郵件也比以前快得多。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地",
    "en_def": "in a way that uses new and original ideas",
    "sentence": "A: Our budget for the product launch was cut by half last week, so how can we still get attention from customers without expensive television ads? B: We need to think {{BLANK}}, perhaps by holding a free tasting event in the train station and asking customers to share photos online for a small prize.",
    "cn": "A：我們產品發表會的預算上週被砍了一半，沒有昂貴的電視廣告，我們要怎麼還能吸引顧客注意？ B：我們需要【有創意地】思考，也許可以在火車站舉辦免費試吃活動，並請顧客在網路上分享照片來換小獎品。"
  },
  {
    "word": "passionately",
    "pos": "adv.",
    "cn_def": "熱情地；熱烈地",
    "en_def": "with very strong feelings or great interest",
    "sentence": "A: Why did the city council finally decide to keep the old public library open instead of turning the building into a parking lot? B: Hundreds of residents came to the meeting and spoke {{BLANK}} about how the library helped their children, so the council members changed their minds.",
    "cn": "A：為什麼市議會最後決定保留舊的公立圖書館，而不是把那棟建築改成停車場？ B：數百位居民來參加會議，【熱情地】講述圖書館如何幫助他們的孩子，所以議員們改變了心意。"
  },
  {
    "word": "openly",
    "pos": "adv.",
    "cn_def": "公開地；坦率地",
    "en_def": "in an honest way, without hiding anything",
    "sentence": "A: The team leader said the project was going well, but I heard there were serious problems with the software during testing last week. B: I think we should talk {{BLANK}} about those problems at the next meeting, so everyone understands the risks and we can solve them together quickly.",
    "cn": "A：組長說專案進行得很順利，但我聽說上週測試時軟體出了嚴重的問題。 B：我認為我們應該在下次會議上【坦率地】討論那些問題，讓大家都了解風險，這樣我們才能一起快速解決。"
  },
  {
    "word": "positively",
    "pos": "adv.",
    "cn_def": "正面地；積極地",
    "en_def": "in a good or hopeful way",
    "sentence": "A: I was nervous about introducing the new online ordering system to our older customers who usually call the store to place their orders. B: Don't worry, because most of them have responded {{BLANK}} so far, and several told us the website is easier than waiting on the phone.",
    "cn": "A：我原本很擔心要向通常打電話到店裡訂貨的年長顧客介紹新的線上訂購系統。 B：別擔心，到目前為止他們大多數的反應都很【正面】，好幾位還告訴我們網站比在電話上等候還方便。"
  }
];

const MCQS = [
  {
    "q": "The art director told the designers to visit the museum this weekend. She hoped the old paintings would give them _____ for the new ads.",
    "options": [
      "inspiration",
      "guidance",
      "pressure",
      "permission"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Managers often use small rewards to _____ their staff. A free lunch or an extra day off can make workers try much harder.",
    "options": [
      "prevent",
      "motivate",
      "complain",
      "delay"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Many employees lose _____ when their work is never praised. Regular feedback can help them stay interested in their jobs.",
    "options": [
      "equipment",
      "schedule",
      "motivation",
      "location"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The supervisor wants to _____ new staff to ask questions. She believes that no question is too simple during the first month.",
    "options": [
      "refuse",
      "forbid",
      "punish",
      "encourage"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After the failed product launch, the team needed some _____. The CEO's kind speech helped everyone feel confident again.",
    "options": [
      "punishment",
      "encouragement",
      "equipment",
      "agreement"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Online reviews have a strong _____ on what customers buy. Most shoppers read several comments before choosing a hotel or restaurant.",
    "options": [
      "influence",
      "shortage",
      "discount",
      "delivery"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The senior engineer is a positive _____ for the interns. They copy her careful habits and her friendly way of talking to clients.",
    "options": [
      "price tag",
      "time limit",
      "fire drill",
      "role model"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "By arriving early every day, the new manager set a good _____. Soon, the rest of the team began coming in on time too.",
    "options": [
      "deadline",
      "contract",
      "example",
      "salary"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "During the meeting, Kevin came up with a new _____ for the holiday sale. Everyone liked his plan to offer free gift wrapping.",
    "options": [
      "idea",
      "invoice",
      "receipt",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The founder shared her _____ for the company's future with all the staff. She wants every product to be made from recycled materials.",
    "options": [
      "complaint",
      "vision",
      "refund",
      "invoice"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Opening a small café by the beach has always been Mia's _____. She has been saving money for it for almost ten years.",
    "options": [
      "habit",
      "warning",
      "dream",
      "mistake"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The sales team finally reached its annual _____ in November. The manager took everyone out for a celebration dinner.",
    "options": [
      "delay",
      "error",
      "loss",
      "goal"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The new factory will _____ more than three hundred jobs in the area. Local leaders are very pleased with the investment.",
    "options": [
      "remove",
      "create",
      "reduce",
      "borrow"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Before the renovation, it was hard to _____ how the lobby would look. Now it is bright, modern, and full of plants.",
    "options": [
      "imagine",
      "repair",
      "deliver",
      "recruit"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "While cleaning out the storage room, the staff happened to _____ some old company photos. They decided to display them in the lobby.",
    "options": [
      "promote",
      "apply",
      "postpone",
      "discover"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The science fair is meant to _____ interest in engineering among young students. Local companies will also show their latest robots.",
    "options": [
      "cancel",
      "lower",
      "spark",
      "waste"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Many young workers _____ Ms. Lin for her honest leadership. She built the company from nothing and still treats everyone fairly.",
    "options": [
      "admire",
      "ignore",
      "dismiss",
      "suspect"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The marketing team found a _____ solution to the budget problem. They used free social media videos instead of expensive TV ads.",
    "options": [
      "careless",
      "creative",
      "noisy",
      "temporary"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The new chef is _____ about using local ingredients. He visits nearby farms every week to choose the best vegetables.",
    "options": [
      "doubtful",
      "absent",
      "passionate",
      "nervous"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The company is looking for a highly _____ sales assistant. The ideal candidate should be hard-working and eager to learn.",
    "options": [
      "exhausted",
      "delayed",
      "limited",
      "motivated"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Customers gave an _____ response to the new mobile app. Thousands of people downloaded it during the first week.",
    "options": [
      "anxious",
      "enthusiastic",
      "exhausted",
      "outdated"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Although the first test failed, the engineers were _____ to fix the problem. They worked late every night until the machine ran smoothly.",
    "options": [
      "determined",
      "reluctant",
      "confused",
      "bored"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "After a successful meeting with the buyers, the sales director is _____ about the deal. She expects to sign the contract next week.",
    "options": [
      "fearful",
      "careless",
      "jealous",
      "hopeful"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Thanks to growing online orders, the company has a _____ future. Experts expect its profits to double within three years.",
    "options": [
      "dull",
      "empty",
      "bright",
      "narrow"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Our consultant _____ recommends upgrading the computer system this year. The old software is slow and no longer safe to use.",
    "options": [
      "strongly",
      "barely",
      "rarely",
      "hardly"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The manager was _____ grateful for the team's hard work. She wrote each member a personal thank-you card.",
    "options": [
      "slightly",
      "deeply",
      "barely",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Your quick reply to this email would be _____ appreciated. We need your answer before the end of the day.",
    "options": [
      "hardly",
      "nearly",
      "greatly",
      "partly"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "With such a small budget, the designers had to think _____. They turned old wooden boxes into stylish shelves for the shop.",
    "options": [
      "rudely",
      "lazily",
      "briefly",
      "creatively"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "At the town meeting, residents spoke _____ about saving the old park. Many of them had played there since they were children.",
    "options": [
      "quietly",
      "passionately",
      "briefly",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The new CEO wants staff to discuss problems _____ in meetings. She believes honest talk helps the company improve faster.",
    "options": [
      "openly",
      "secretly",
      "rarely",
      "barely"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or the wish to do something",
    "cn_def": "靈感；鼓舞"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard or do something",
    "cn_def": "激勵；促使"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the reason or energy that makes you want to do something",
    "cn_def": "動機；動力"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone support or confidence to do something",
    "cn_def": "鼓勵"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone support and confidence",
    "cn_def": "鼓勵；激勵"
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to change how someone thinks or behaves",
    "cn_def": "影響；影響力"
  },
  "role model": {
    "pos": "n.phr.",
    "en_def": "a person whose behavior others copy because they admire them",
    "cn_def": "榜樣；模範"
  },
  "example": {
    "pos": "n.",
    "en_def": "a person or action that others can learn from or copy",
    "cn_def": "榜樣；例子"
  },
  "idea": {
    "pos": "n.",
    "en_def": "a thought or plan about what to do",
    "cn_def": "想法；主意"
  },
  "vision": {
    "pos": "n.",
    "en_def": "a clear picture or plan of what the future should be like",
    "cn_def": "願景；遠見"
  },
  "dream": {
    "pos": "n.",
    "en_def": "something you hope very much to do or have in the future",
    "cn_def": "夢想"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you are trying to achieve",
    "cn_def": "目標"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創造；建立"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像"
  },
  "discover": {
    "pos": "v.",
    "en_def": "to find or learn something for the first time",
    "cn_def": "發現"
  },
  "spark": {
    "pos": "v.",
    "en_def": "to cause something to start or develop",
    "cn_def": "激發；引發"
  },
  "admire": {
    "pos": "v.",
    "en_def": "to respect and like someone because of what they do",
    "cn_def": "欽佩；欣賞"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的"
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "having very strong feelings about something you love",
    "cn_def": "熱情的；熱愛的"
  },
  "motivated": {
    "pos": "adj.",
    "en_def": "wanting to do something and willing to work hard",
    "cn_def": "有幹勁的；積極的"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing a lot of interest and excitement",
    "cn_def": "熱心的；熱情的"
  },
  "determined": {
    "pos": "adj.",
    "en_def": "having made a firm decision to do something",
    "cn_def": "下定決心的；堅定的"
  },
  "hopeful": {
    "pos": "adj.",
    "en_def": "feeling that something good will probably happen",
    "cn_def": "抱有希望的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "full of hope and likely to be successful",
    "cn_def": "光明的；有前途的"
  },
  "strongly": {
    "pos": "adv.",
    "en_def": "in a very firm or powerful way",
    "cn_def": "強烈地；堅決地"
  },
  "deeply": {
    "pos": "adv.",
    "en_def": "very much; in a strong way",
    "cn_def": "深深地"
  },
  "greatly": {
    "pos": "adv.",
    "en_def": "very much; to a large degree",
    "cn_def": "大大地；非常"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a way that uses new and original ideas",
    "cn_def": "有創意地"
  },
  "passionately": {
    "pos": "adv.",
    "en_def": "with very strong feelings or great interest",
    "cn_def": "熱情地；熱烈地"
  },
  "openly": {
    "pos": "adv.",
    "en_def": "in an honest way, without hiding anything",
    "cn_def": "公開地；坦率地"
  },
  "positively": {
    "pos": "adv.",
    "en_def": "in a good or hopeful way",
    "cn_def": "正面地；積極地"
  }
};

const EXTRA_GLOSSES = {};
