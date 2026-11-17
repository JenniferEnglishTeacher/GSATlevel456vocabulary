// Topic 296 Quiz Data: Popular 受歡迎的
// Source word list: https://www.examword.com/group-topic/popular — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T296 - Popular 受歡迎的",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "有名的；著名的",
    "en_def": "known by many people",
    "sentence": "A: Why is there such a long line outside the new bakery on Main Street every morning, even when it is raining? B: The owner is a {{BLANK}} chef who used to appear on a cooking show on TV, so many people come early hoping to meet him and take photos.",
    "cn": "A：為什麼主街上那家新麵包店每天早上外面都排著長長的隊伍，甚至下雨天也是？ B：老闆是一位以前上過電視烹飪節目的【有名的】主廚，所以很多人一早就來，希望能見到他並拍照。"
  },
  {
    "word": "well-known",
    "pos": "adj.",
    "cn_def": "眾所周知的；知名的",
    "en_def": "known about by a lot of people",
    "sentence": "A: Should we hire a small local agency or a larger firm to design the advertisements for our new product line next spring? B: I would choose a {{BLANK}} firm with clients all over Asia, because customers trust their work and our managers will feel more comfortable with the budget.",
    "cn": "A：我們應該請一家當地的小型廣告公司，還是一家較大的公司來設計明年春天新產品系列的廣告？ B：我會選一家客戶遍及亞洲的【知名】公司，因為顧客信任他們的作品，我們的主管對預算也會比較放心。"
  },
  {
    "word": "celebrated",
    "pos": "adj.",
    "cn_def": "著名的；受讚揚的",
    "en_def": "famous and praised by many people",
    "sentence": "A: Who is going to give the opening speech at the hotel's anniversary dinner on Friday evening, and has the guest list been finalized? B: A {{BLANK}} architect who designed several award-winning buildings downtown has agreed to speak, and the event planner sent the final list to the kitchen yesterday.",
    "cn": "A：誰要在週五晚上飯店的週年晚宴上致開幕詞？賓客名單定案了嗎？ B：一位設計過市中心好幾棟得獎建築的【著名】建築師已經答應致詞，活動策劃人昨天也把最終名單送到廚房了。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢；潮流",
    "en_def": "a general change or development in a particular direction",
    "sentence": "A: Why did the marketing team decide to add more plant-based meals to the company cafeteria menu this season? B: A recent survey showed a growing {{BLANK}} among younger employees toward healthier eating, so the team wanted to offer choices that match what people really want for lunch.",
    "cn": "A：為什麼行銷團隊決定這一季在公司餐廳菜單中加入更多植物性餐點？ B：最近一項調查顯示，年輕員工中有越來越明顯的健康飲食【趨勢】，所以團隊想提供符合大家午餐真正需求的選擇。"
  },
  {
    "word": "trendy",
    "pos": "adj.",
    "cn_def": "時髦的；流行的",
    "en_def": "modern and popular at the moment",
    "sentence": "A: Where should we take the visiting clients from Tokyo for dinner after the meeting on Thursday night? B: There is a {{BLANK}} restaurant near the train station with modern decorations and creative dishes, and many young professionals go there, so I think our guests will enjoy the atmosphere.",
    "cn": "A：週四晚上開完會後，我們該帶來訪的東京客戶去哪裡吃晚餐？ B：火車站附近有一家【時髦的】餐廳，裝潢現代、菜色有創意，很多年輕上班族都會去，所以我想我們的客人會喜歡那裡的氣氛。"
  },
  {
    "word": "viral",
    "pos": "adj.",
    "cn_def": "爆紅的；（網路上）迅速傳播的",
    "en_def": "spreading very quickly to many people on the internet",
    "sentence": "A: Why have online orders for our reusable water bottles increased so quickly since last weekend? B: A short video of a customer using our bottle on a mountain hike went {{BLANK}} on social media, and now thousands of people are visiting our website every hour to buy one.",
    "cn": "A：為什麼從上週末開始，我們環保水壺的網路訂單增加得這麼快？ B：一段顧客在登山時使用我們水壺的短片在社群媒體上【爆紅】，現在每小時都有數千人上我們的網站購買。"
  },
  {
    "word": "hit",
    "pos": "n.",
    "cn_def": "成功而轟動的事物；熱門作品",
    "en_def": "something that is very popular and successful",
    "sentence": "A: How did the new summer drink that the café introduced last month sell during the hot weather? B: It was a big {{BLANK}} with office workers in the area, and the manager told me the staff had to order extra fruit twice a week because supplies kept running out.",
    "cn": "A：咖啡館上個月推出的新夏季飲品在炎熱天氣裡賣得如何？ B：它在附近上班族之間大受歡迎，是個大【熱門商品】，經理告訴我員工每週得多訂兩次水果，因為存貨一直不夠。"
  },
  {
    "word": "bestseller",
    "pos": "n.",
    "cn_def": "暢銷書；暢銷品",
    "en_def": "a book or product that is bought by a very large number of people",
    "sentence": "A: Why is the bookstore near our office putting so many copies of that business book in its front window? B: The book became a {{BLANK}} after the author appeared on a popular radio program, and the store manager says customers ask for it almost every day at the counter.",
    "cn": "A：為什麼我們辦公室附近的書店在櫥窗裡擺了那麼多本那本商業書？ B：作者上了一個熱門廣播節目後，那本書就成了【暢銷書】，店長說幾乎每天都有顧客在櫃檯詢問。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people",
    "sentence": "A: Would you like to have lunch at the shopping mall food court today, or should we eat somewhere else near the office? B: The food court is always {{BLANK}} at noon because of the special discounts, so let's go to the quiet noodle shop around the corner and save some time.",
    "cn": "A：你今天想在購物中心的美食街吃午餐，還是我們去辦公室附近別的地方吃？ B：因為有特價優惠，美食街中午總是很【擁擠】，我們去轉角那家安靜的麵店吧，可以省點時間。"
  },
  {
    "word": "favorite",
    "pos": "adj.",
    "cn_def": "最喜愛的",
    "en_def": "liked more than all the others",
    "sentence": "A: Which dessert should we order for the farewell party for Linda, who is retiring from the accounting department next week? B: Chocolate cake is her {{BLANK}} dessert, and the bakery across the street can write a short message on top if we place the order by Wednesday afternoon.",
    "cn": "A：下週會計部的琳達要退休了，歡送會我們該訂哪種甜點？ B：巧克力蛋糕是她【最喜愛的】甜點，如果我們在週三下午前訂購，對面的麵包店可以在蛋糕上寫一段短短的祝福。"
  },
  {
    "word": "demand",
    "pos": "n.",
    "cn_def": "需求",
    "en_def": "the need or desire of people to buy something",
    "sentence": "A: Why has the factory asked workers to take extra shifts on weekends for the next two months? B: Customer {{BLANK}} for our electric fans has risen sharply because of the unusually hot summer, and the company needs to produce more units before stores run out of stock.",
    "cn": "A：為什麼工廠要求員工在接下來兩個月的週末加班？ B：因為今年夏天異常炎熱，顧客對我們電風扇的【需求】大幅增加，公司必須在商店缺貨前生產更多產品。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響力；影響",
    "en_def": "the power to change what people think or do",
    "sentence": "A: Why did the cosmetics company pay a young online star to introduce its new skin cream to customers? B: She has a strong {{BLANK}} on what teenagers buy, and the marketing director believes her short reviews will bring many new shoppers to our stores and website.",
    "cn": "A：為什麼那家化妝品公司要付錢請一位年輕網紅向顧客介紹新的護膚霜？ B：她對青少年購買什麼東西有很強的【影響力】，行銷總監相信她的簡短評論會為我們的店面和網站帶來許多新顧客。"
  },
  {
    "word": "attract",
    "pos": "v.",
    "cn_def": "吸引",
    "en_def": "to make people want to come to a place or be interested in something",
    "sentence": "A: What is the main goal of the summer music festival that the city is organizing in the riverside park this year? B: The organizers hope to {{BLANK}} more tourists to the area, so local hotels and restaurants can earn extra income during the slow season after the school holidays.",
    "cn": "A：今年市政府在河濱公園舉辦的夏季音樂節，主要目的是什麼？ B：主辦單位希望【吸引】更多觀光客來這個地區，讓當地的飯店和餐廳在學校假期結束後的淡季也能增加收入。"
  },
  {
    "word": "appeal",
    "pos": "v.",
    "cn_def": "吸引；有吸引力",
    "en_def": "to be interesting or attractive to someone (appeal to)",
    "sentence": "A: Do you think the new bright cartoon design on our cereal boxes will work well in supermarkets around the country? B: The colorful characters should {{BLANK}} to young children and their parents, but we should still test the packaging with a few focus groups before we print thousands of boxes.",
    "cn": "A：你覺得我們穀片盒上新的鮮豔卡通設計，在全國各地的超市會有好的效果嗎？ B：這些色彩繽紛的角色應該會【吸引】小孩和他們的父母，但我們在印製數千個盒子之前，還是應該先找幾個焦點團體測試包裝。"
  },
  {
    "word": "fashionable",
    "pos": "adj.",
    "cn_def": "時尚的；流行的",
    "en_def": "popular in clothes or style at a particular time",
    "sentence": "A: Why did the clothing store move its winter jackets to the front of the shop this week? B: Long wool coats have become very {{BLANK}} this year after several actors wore them at an awards show, so the manager wants customers to see them as soon as they walk in.",
    "cn": "A：為什麼服飾店這週把冬季外套移到店面最前面？ B：自從幾位演員在頒獎典禮上穿了長版羊毛大衣後，今年這種大衣變得非常【時尚】，所以店長希望顧客一走進來就能看到。"
  },
  {
    "word": "iconic",
    "pos": "adj.",
    "cn_def": "具代表性的；標誌性的",
    "en_def": "very famous and seen as a symbol of something",
    "sentence": "A: Which photo should we use on the cover of the travel brochure for our new city tour package? B: Let's use a picture of the {{BLANK}} red bridge at sunset, because almost everyone recognizes it immediately and it shows the beauty of the city better than any other building.",
    "cn": "A：我們新的城市旅遊行程簡介封面該用哪張照片？ B：用那座【標誌性的】紅色大橋在夕陽下的照片吧，因為幾乎每個人一眼就認得出來，而且它比任何其他建築都更能展現這座城市的美。"
  },
  {
    "word": "mainstream",
    "pos": "adj.",
    "cn_def": "主流的",
    "en_def": "accepted or liked by most ordinary people",
    "sentence": "A: Why did the small coffee company decide to start selling its products in big supermarket chains instead of only online? B: Specialty coffee has become more {{BLANK}} in recent years, and the owners believe ordinary shoppers are now willing to pay a little more for better quality beans.",
    "cn": "A：為什麼那家小咖啡公司決定開始在大型連鎖超市販售產品，而不是只在網路上賣？ B：近幾年精品咖啡變得更加【主流】，老闆們相信一般消費者現在願意多付一點錢買品質更好的咖啡豆。"
  },
  {
    "word": "public",
    "pos": "n.",
    "cn_def": "大眾；民眾",
    "en_def": "ordinary people in general (the public)",
    "sentence": "A: When will the new art museum downtown finally open, and will employees of our company get free tickets? B: The museum will be open to the {{BLANK}} from the first of next month, and our company is a sponsor, so staff can visit for free by showing their ID cards.",
    "cn": "A：市中心的新美術館什麼時候終於要開幕？我們公司的員工可以拿到免費門票嗎？ B：美術館將從下個月一號開始對【大眾】開放，而且我們公司是贊助商，所以員工出示識別證就能免費參觀。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "認可；表揚",
    "en_def": "praise and thanks for someone's work or success",
    "sentence": "A: Why was Daniel invited to the head office in Singapore to have dinner with the company president last week? B: He received {{BLANK}} for his excellent sales results this year, and the president wanted to thank him in person for bringing in several important new clients.",
    "cn": "A：為什麼丹尼爾上週受邀到新加坡總部和公司總裁共進晚餐？ B：他今年優異的業績獲得了【表揚】，總裁想親自感謝他帶來了好幾位重要的新客戶。"
  },
  {
    "word": "reputation",
    "pos": "n.",
    "cn_def": "聲譽；名聲",
    "en_def": "the opinion that people have about someone or something",
    "sentence": "A: Why are you willing to pay more to use that cleaning company for our office building instead of a cheaper one? B: They have an excellent {{BLANK}} for careful and reliable service, and several other businesses in our building told me they have never had a single complaint about them.",
    "cn": "A：為什麼你願意花比較多錢請那家清潔公司打掃我們的辦公大樓，而不選便宜一點的？ B：他們以細心可靠的服務享有極佳的【聲譽】，我們大樓裡好幾家公司都告訴我，他們從來沒有對這家公司有過任何抱怨。"
  },
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；欣賞",
    "en_def": "to respect and like someone or something very much",
    "sentence": "A: Why do so many young employees want to join the project team led by Ms. Chen in the design department? B: They {{BLANK}} her creative ideas and the way she listens patiently to everyone, and many of them hope to learn new skills by working closely with her this year.",
    "cn": "A：為什麼這麼多年輕員工想加入設計部陳小姐帶領的專案團隊？ B：他們【欽佩】她富有創意的想法以及她耐心傾聽每個人的方式，很多人希望今年能透過和她密切合作學到新技能。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持",
    "en_def": "help and approval given to a person, idea or plan",
    "sentence": "A: How did the new bicycle-sharing program become so successful in just a few months after it started downtown? B: It had strong {{BLANK}} from local residents and office workers who wanted a cheap, healthy way to travel, and the city added more bike stations because of their requests.",
    "cn": "A：市中心新的共享單車計畫開始後短短幾個月，怎麼會變得這麼成功？ B：它獲得當地居民和上班族的大力【支持】，他們想要便宜又健康的交通方式，市政府也因應他們的要求增設了更多租借站。"
  },
  {
    "word": "follower",
    "pos": "n.",
    "cn_def": "追蹤者；追隨者",
    "en_def": "a person who follows someone's account or activities, especially on social media",
    "sentence": "A: Why did the sportswear brand choose that young fitness coach to advertise its new running shoes this spring? B: Her online videos are so popular that she gains almost one new {{BLANK}} every minute, and the brand believes her fans will trust her opinion about shoes.",
    "cn": "A：為什麼那個運動服品牌選擇那位年輕健身教練來宣傳今年春天的新跑鞋？ B：她的網路影片非常受歡迎，幾乎每分鐘就多一位新的【追蹤者】，品牌相信她的粉絲會信任她對鞋子的看法。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the people who watch or listen to an event or performance",
    "sentence": "A: How did the product launch event go at the convention center yesterday afternoon? B: The {{BLANK}} of nearly five hundred buyers and journalists clapped loudly after the demonstration, and several large retailers asked our sales team for price lists before they left the hall.",
    "cn": "A：昨天下午在會展中心的產品發表會進行得如何？ B：將近五百位買家和記者組成的【觀眾】在示範結束後熱烈鼓掌，好幾家大型零售商在離開會場前就向我們的業務團隊索取價目表。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意；關注",
    "en_def": "the act of noticing or being interested in someone or something",
    "sentence": "A: Why did the restaurant put a huge colorful sign and a live band in front of its entrance this weekend? B: The owner wanted to catch the {{BLANK}} of shoppers walking past on the busy street, because the restaurant only opened last month and many people still don't know about it.",
    "cn": "A：為什麼那家餐廳這個週末在門口擺了一個巨大的彩色招牌，還請了現場樂團？ B：老闆想吸引熱鬧街上路過的購物人潮的【注意】，因為餐廳上個月才開幕，很多人還不知道它。"
  },
  {
    "word": "promote",
    "pos": "v.",
    "cn_def": "宣傳；推廣",
    "en_def": "to advertise something so that people will buy or use it",
    "sentence": "A: How are we planning to tell customers about the new low-sugar drinks before they arrive in convenience stores next month? B: We will {{BLANK}} them with free samples at train stations and short online ads, and the marketing team is also preparing posters for every store near office buildings.",
    "cn": "A：在新的低糖飲料下個月進駐便利商店之前，我們打算如何讓顧客知道？ B：我們會在火車站發送免費試喝品並投放簡短的網路廣告來【宣傳】它們，行銷團隊也在為辦公大樓附近的每家門市準備海報。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功；成功的事物",
    "en_def": "the result of achieving what you wanted",
    "sentence": "A: Was the online cooking class that the community center offered for busy office workers worth the time and money? B: It was a great {{BLANK}}, because more than two hundred people signed up in the first week, and the center has already decided to offer a second class in the autumn.",
    "cn": "A：社區中心為忙碌上班族開設的線上烹飪課值得投入時間和金錢嗎？ B：那是一次很大的【成功】，第一週就有兩百多人報名，中心已經決定秋天再開第二班。"
  },
  {
    "word": "buzz",
    "pos": "n.",
    "cn_def": "熱烈討論；話題",
    "en_def": "excited talk among people about something new",
    "sentence": "A: Why are so many people in the office talking about the new phone that the company will release next Tuesday? B: There is a lot of {{BLANK}} about its amazing camera after some photos leaked online, and our customer service team has already received hundreds of questions about the price.",
    "cn": "A：為什麼辦公室裡這麼多人在談論公司下週二要推出的新手機？ B：在一些照片外流到網路上後，大家對它驚人的相機有很多【熱烈討論】，我們的客服團隊已經接到上百個關於價格的詢問。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that someone or something is good and suitable",
    "sentence": "A: I need to book a hotel for three visiting engineers who arrive next Monday; do you know a good place near the factory? B: I would {{BLANK}} the Garden Hotel, because it is clean, quiet and only ten minutes away by taxi, and it also offers a discount for business guests.",
    "cn": "A：我需要幫下週一抵達的三位來訪工程師訂飯店，你知道工廠附近有什麼好地方嗎？ B：我會【推薦】花園飯店，因為那裡乾淨、安靜，搭計程車只要十分鐘，而且還提供商務旅客折扣。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱情的；熱衷的",
    "en_def": "feeling or showing a lot of excitement and interest",
    "sentence": "A: How did the staff react when the manager announced the plan to start a company basketball team this year? B: Most employees were very {{BLANK}} about the idea, and more than thirty people signed up within an hour, so the manager is now looking for a gym where we can practice.",
    "cn": "A：經理宣布今年要成立公司籃球隊的計畫時，員工的反應如何？ B：大部分員工對這個想法都非常【熱衷】，一小時內就有三十多人報名，所以經理現在正在找可以讓我們練球的體育館。"
  },
  {
    "word": "widely",
    "pos": "adv.",
    "cn_def": "廣泛地",
    "en_def": "by a lot of people or in many places",
    "sentence": "A: Is the new accounting software that we bought difficult to learn for staff who have never used it before? B: Not at all, because it is {{BLANK}} used by companies in many countries, and there are plenty of free video lessons online that explain every step in simple language.",
    "cn": "A：我們買的新會計軟體，對從未用過的員工來說難學嗎？ B：一點也不難，因為許多國家的公司都【廣泛地】使用它，而且網路上有很多免費的教學影片，用簡單的語言說明每一個步驟。"
  },
  {
    "word": "dominant",
    "pos": "adj.",
    "cn_def": "占優勢的；主導的",
    "en_def": "more powerful or important than others",
    "sentence": "A: Why is it so hard for new companies to sell search engines or online map services in this country? B: One large technology company has a {{BLANK}} position in that market, and most users are used to its products, so newcomers struggle to attract enough customers to survive.",
    "cn": "A：為什麼新公司在這個國家很難推銷搜尋引擎或線上地圖服務？ B：一家大型科技公司在那個市場占有【主導的】地位，大部分使用者都習慣了它的產品，所以新進業者很難吸引足夠的顧客生存下去。"
  },
  {
    "word": "recognizable",
    "pos": "adj.",
    "cn_def": "容易辨認的",
    "en_def": "easy to know or identify because you have seen it before",
    "sentence": "A: Why did the designer insist on keeping the same yellow color in our new company logo? B: That bright shade makes our brand instantly {{BLANK}} to customers on busy shopping streets, and changing it now could confuse people who have trusted our stores for over twenty years.",
    "cn": "A：為什麼設計師堅持在我們公司的新標誌中保留同樣的黃色？ B：那個鮮豔的色調讓顧客在熱鬧的購物街上能立刻【認出】我們的品牌，現在改掉可能會讓信任我們商店二十多年的人感到困惑。"
  },
  {
    "word": "mass",
    "pos": "adj.",
    "cn_def": "大量的；大眾的",
    "en_def": "involving or made for a very large number of people or things",
    "sentence": "A: Why did the toy company decide to build a second factory outside the city instead of expanding the old one? B: The new robot toy is ready for {{BLANK}} production, and the old factory is too small to make enough units for stores all over the country before the holidays.",
    "cn": "A：為什麼那家玩具公司決定在城外蓋第二座工廠，而不是擴建舊廠？ B：新的機器人玩具已經準備好【大量】生產，而舊工廠太小，無法在假期前為全國各地的商店生產足夠的數量。"
  }
];

const MCQS = [
  {
    "q": "The museum displays paintings by a _____ artist whose work is known around the world. Tickets for the exhibition sold out within two days.",
    "options": [
      "famous",
      "crowded",
      "enthusiastic",
      "mass"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our firm hired a _____ consultant who has advised many large banks. Her name alone helped us win the client's trust.",
    "options": [
      "crowded",
      "viral",
      "well-known",
      "mass"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Sales reports show a clear _____ toward online shopping among older customers. The company will therefore improve its website for this group.",
    "options": [
      "audience",
      "trend",
      "reputation",
      "follower"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The new hotel lobby has a _____ design with bright lights and modern furniture. Young travelers often post photos of it online.",
    "options": [
      "crowded",
      "dominant",
      "enthusiastic",
      "trendy"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The funny advertisement went _____ within hours and was shared millions of times. The company's website crashed because of all the visitors.",
    "options": [
      "crowded",
      "viral",
      "dominant",
      "recognizable"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The band's new song was a huge _____ with listeners of all ages. It stayed at number one on the radio for six weeks.",
    "options": [
      "hit",
      "demand",
      "attention",
      "reputation"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Her cookbook became a national _____ only a month after it was published. The publisher is now printing another fifty thousand copies.",
    "options": [
      "audience",
      "attention",
      "influence",
      "bestseller"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The train platform is always _____ between eight and nine in the morning. Many commuters now leave home earlier to find a seat.",
    "options": [
      "iconic",
      "celebrated",
      "crowded",
      "recognizable"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Lemon tea is my manager's _____ drink, so we always keep some in the office kitchen. She drinks at least three cups every day.",
    "options": [
      "favorite",
      "dominant",
      "crowded",
      "viral"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "There is high _____ for experienced nurses in the city's new hospitals. Salaries in the field have risen quickly as a result.",
    "options": [
      "recognition",
      "buzz",
      "demand",
      "follower"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Online reviews have a strong _____ on what travelers choose to book. Hotels therefore reply quickly to every negative comment.",
    "options": [
      "audience",
      "influence",
      "bestseller",
      "public"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The shopping mall is offering free parking to _____ more weekend visitors. Managers hope the change will increase sales by ten percent.",
    "options": [
      "admire",
      "appeal",
      "recommend",
      "attract"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The new menu is designed to _____ to families with small children. It includes smaller portions and several healthy snacks.",
    "options": [
      "attract",
      "appeal",
      "admire",
      "promote"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Wide-leg trousers have become _____ again this season, so the store ordered several new styles. They are selling especially well online.",
    "options": [
      "fashionable",
      "dominant",
      "enthusiastic",
      "crowded"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The tower is an _____ symbol of the city and appears on many postcards. Visitors often wait an hour to reach the top.",
    "options": [
      "enthusiastic",
      "crowded",
      "viral",
      "iconic"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Electric cars were once rare, but they have now entered the _____ market. Even small dealers in rural towns sell them today.",
    "options": [
      "enthusiastic",
      "celebrated",
      "mainstream",
      "favorite"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The new library will be open to the _____ every day except Monday. Residents can borrow up to ten books at a time.",
    "options": [
      "public",
      "audience",
      "follower",
      "trend"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The engineer received an award in _____ of her work on the new safety system. Her team celebrated with a dinner afterward.",
    "options": [
      "demand",
      "buzz",
      "recognition",
      "trend"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The law firm has built a strong _____ for handling difficult contract cases. Many international companies trust it with their legal work.",
    "options": [
      "audience",
      "reputation",
      "bestseller",
      "attention"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Many staff members _____ the CEO for her honesty during the difficult year. She always explained problems clearly at company meetings.",
    "options": [
      "attract",
      "appeal",
      "promote",
      "admire"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The speaker told jokes to keep the _____ interested during the long presentation. Nearly three hundred people attended the conference session.",
    "options": [
      "follower",
      "audience",
      "reputation",
      "demand"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Please pay close _____ to the safety instructions before using the new machine. Workers who ignore them may be seriously injured.",
    "options": [
      "attention",
      "recognition",
      "demand",
      "influence"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The tourism office will _____ the island as a quiet holiday destination this year. Its advertisements will appear in several travel magazines.",
    "options": [
      "admire",
      "appeal",
      "attract",
      "promote"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The charity concert was a great _____ and raised more than two million dollars. The organizers plan to hold it again next year.",
    "options": [
      "demand",
      "trend",
      "success",
      "follower"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Could you _____ a reliable printing company for our annual report? Our usual supplier is too busy this month.",
    "options": [
      "recommend",
      "admire",
      "attract",
      "appeal"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The customers were _____ about the new loyalty program and signed up in large numbers. Membership doubled in the first month.",
    "options": [
      "iconic",
      "recognizable",
      "enthusiastic",
      "dominant"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The safety rules are _____ known among factory workers because they are posted on every wall. Few accidents have occurred this year.",
    "options": [
      "rarely",
      "widely",
      "barely",
      "hardly"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The company holds a _____ share of the domestic smartphone market. Its competitors together sell fewer phones than it does alone.",
    "options": [
      "enthusiastic",
      "crowded",
      "celebrated",
      "dominant"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The brand's red packaging is easily _____ even from across a large supermarket. Shoppers can find the products in seconds.",
    "options": [
      "enthusiastic",
      "recognizable",
      "mainstream",
      "crowded"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The factory switched to _____ production last year to lower the cost of each unit. Prices for customers dropped by almost twenty percent.",
    "options": [
      "mass",
      "iconic",
      "favorite",
      "enthusiastic"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "famous": {
    "pos": "adj.",
    "en_def": "known by many people",
    "cn_def": "有名的；著名的"
  },
  "well-known": {
    "pos": "adj.",
    "en_def": "known about by a lot of people",
    "cn_def": "眾所周知的；知名的"
  },
  "celebrated": {
    "pos": "adj.",
    "en_def": "famous and praised by many people",
    "cn_def": "著名的；受讚揚的"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general change or development in a particular direction",
    "cn_def": "趨勢；潮流"
  },
  "trendy": {
    "pos": "adj.",
    "en_def": "modern and popular at the moment",
    "cn_def": "時髦的；流行的"
  },
  "viral": {
    "pos": "adj.",
    "en_def": "spreading very quickly to many people on the internet",
    "cn_def": "爆紅的；（網路上）迅速傳播的"
  },
  "hit": {
    "pos": "n.",
    "en_def": "something that is very popular and successful",
    "cn_def": "成功而轟動的事物；熱門作品"
  },
  "bestseller": {
    "pos": "n.",
    "en_def": "a book or product that is bought by a very large number of people",
    "cn_def": "暢銷書；暢銷品"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "favorite": {
    "pos": "adj.",
    "en_def": "liked more than all the others",
    "cn_def": "最喜愛的"
  },
  "demand": {
    "pos": "n.",
    "en_def": "the need or desire of people to buy something",
    "cn_def": "需求"
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to change what people think or do",
    "cn_def": "影響力；影響"
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make people want to come to a place or be interested in something",
    "cn_def": "吸引"
  },
  "appeal": {
    "pos": "v.",
    "en_def": "to be interesting or attractive to someone (appeal to)",
    "cn_def": "吸引；有吸引力"
  },
  "fashionable": {
    "pos": "adj.",
    "en_def": "popular in clothes or style at a particular time",
    "cn_def": "時尚的；流行的"
  },
  "iconic": {
    "pos": "adj.",
    "en_def": "very famous and seen as a symbol of something",
    "cn_def": "具代表性的；標誌性的"
  },
  "mainstream": {
    "pos": "adj.",
    "en_def": "accepted or liked by most ordinary people",
    "cn_def": "主流的"
  },
  "public": {
    "pos": "n.",
    "en_def": "ordinary people in general (the public)",
    "cn_def": "大眾；民眾"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "praise and thanks for someone's work or success",
    "cn_def": "認可；表揚"
  },
  "reputation": {
    "pos": "n.",
    "en_def": "the opinion that people have about someone or something",
    "cn_def": "聲譽；名聲"
  },
  "admire": {
    "pos": "v.",
    "en_def": "to respect and like someone or something very much",
    "cn_def": "欽佩；欣賞"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and approval given to a person, idea or plan",
    "cn_def": "支持"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who follows someone's account or activities, especially on social media",
    "cn_def": "追蹤者；追隨者"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to an event or performance",
    "cn_def": "觀眾；聽眾"
  },
  "attention": {
    "pos": "n.",
    "en_def": "the act of noticing or being interested in someone or something",
    "cn_def": "注意；關注"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to advertise something so that people will buy or use it",
    "cn_def": "宣傳；推廣"
  },
  "success": {
    "pos": "n.",
    "en_def": "the result of achieving what you wanted",
    "cn_def": "成功；成功的事物"
  },
  "buzz": {
    "pos": "n.",
    "en_def": "excited talk among people about something new",
    "cn_def": "熱烈討論；話題"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that someone or something is good and suitable",
    "cn_def": "推薦；建議"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "feeling or showing a lot of excitement and interest",
    "cn_def": "熱情的；熱衷的"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "by a lot of people or in many places",
    "cn_def": "廣泛地"
  },
  "dominant": {
    "pos": "adj.",
    "en_def": "more powerful or important than others",
    "cn_def": "占優勢的；主導的"
  },
  "recognizable": {
    "pos": "adj.",
    "en_def": "easy to know or identify because you have seen it before",
    "cn_def": "容易辨認的"
  },
  "mass": {
    "pos": "adj.",
    "en_def": "involving or made for a very large number of people or things",
    "cn_def": "大量的；大眾的"
  }
};

const EXTRA_GLOSSES = {};
