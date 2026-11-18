// Topic 373 Quiz Data: Staying At Home 待在家
// Source word list: https://www.examword.com/group-topic/staying-at-home — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T373 - Staying At Home 待在家",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "house",
    "pos": "n.",
    "cn_def": "房子；住宅",
    "en_def": "a building where people, usually one family, live",
    "sentence": "A: Why did you decide to move out of the city after working downtown for almost ten years, especially since your office is still there? B: My wife and I wanted more space for the kids, so we bought a {{BLANK}} with three bedrooms in the suburbs, and now I take the express train to work twice a week.",
    "cn": "A：你在市中心工作了將近十年，為什麼決定搬離城市，尤其是你的辦公室還在那裡？ B：我太太和我想給孩子更多空間，所以我們在郊區買了一棟有三間臥室的【房子】，現在我每週搭兩次快車去上班。"
  },
  {
    "word": "apartment",
    "pos": "n.",
    "cn_def": "公寓",
    "en_def": "a set of rooms for living in, inside a larger building",
    "sentence": "A: Have you found a place to live yet now that the company is transferring you to the Taichung branch next month? B: Yes, I signed a one-year lease on a small {{BLANK}} near the station yesterday, and the rent is reasonable because the building is a bit old, but it has an elevator and a laundry room.",
    "cn": "A：公司下個月就要把你調到台中分公司了，你找到住的地方了嗎？ B：找到了，我昨天在車站附近簽了一間小【公寓】的一年租約，因為大樓有點舊所以租金合理，不過有電梯和洗衣間。"
  },
  {
    "word": "indoors",
    "pos": "adv.",
    "cn_def": "在室內；到室內",
    "en_def": "into or inside a building",
    "sentence": "A: The weather report says it will rain heavily all afternoon, so what should we do about the outdoor team-building games we planned for the new staff? B: Let's move the activities {{BLANK}} to the large training room on the second floor, and I'll ask the facilities team to push the tables against the wall so everyone has enough space.",
    "cn": "A：氣象報告說整個下午都會下大雨，那我們替新進員工安排的戶外團隊建立遊戲該怎麼辦？ B：我們把活動移【到室內】二樓的大訓練教室吧，我會請總務組把桌子推到牆邊，讓大家有足夠的空間。"
  },
  {
    "word": "indoor",
    "pos": "adj.",
    "cn_def": "室內的",
    "en_def": "used or happening inside a building",
    "sentence": "A: I want to start exercising regularly, but it's usually too hot to run outside after I finish work in the evening, so do you have any ideas? B: You should try the new {{BLANK}} swimming pool at the sports center near our office, because it has air conditioning, it's open until ten, and employees get a discount with their staff cards.",
    "cn": "A：我想開始規律運動，但晚上下班後外面通常太熱沒辦法跑步，你有什麼建議嗎？ B：你應該試試我們辦公室附近運動中心新開的【室內】游泳池，那裡有空調，開到晚上十點，而且員工憑員工證還有折扣。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and stop worrying or working",
    "sentence": "A: You've been working late every night since the product launch, so what are your plans for the long weekend that starts on Friday? B: I'm not going anywhere this time, because I just want to {{BLANK}} at home, sleep late, and watch some movies with my wife before the next big project begins on Monday.",
    "cn": "A：產品發表後你每天晚上都加班，星期五開始的連假你有什麼計畫？ B：這次我哪裡都不去，我只想在家【放鬆】、睡晚一點，在星期一下一個大案子開始前和我太太看幾部電影。"
  },
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a time when you sleep or stop doing things so you feel better",
    "sentence": "A: The doctor said you have a bad cold, so are you still planning to come to the client meeting tomorrow morning? B: No, he told me to get plenty of {{BLANK}} and drink lots of water for a few days, so I've asked Kevin to lead the meeting, and I'll join by phone only if they need me.",
    "cn": "A：醫生說你得了重感冒，那你明天早上還打算來參加客戶會議嗎？ B：不去了，他叫我這幾天要充分【休息】、多喝水，所以我已經請凱文主持會議，只有在他們需要我的時候我才會用電話加入。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "舒適溫馨的",
    "en_def": "warm, comfortable and pleasant",
    "sentence": "A: What did you think of the small café that opened next to our office building last week, and is it a good place for meeting clients? B: I really liked it, because it's warm and {{BLANK}} with soft chairs and quiet music, so it's perfect for a relaxed chat, although it can get crowded around lunchtime.",
    "cn": "A：你覺得上週在我們辦公大樓旁開的那家小咖啡館怎麼樣？適合跟客戶見面嗎？ B：我很喜歡，那裡溫暖又【舒適溫馨】，有柔軟的椅子和輕柔的音樂，很適合輕鬆聊天，不過午餐時間可能會很擁擠。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的；舒服的",
    "en_def": "making you feel relaxed and free from pain",
    "sentence": "A: Why did you buy a new chair for your home office when the company already offered to lend you one from the storage room? B: The old one hurt my back after a few hours, so I bought a more {{BLANK}} chair with good support, and now I can sit at my desk all day without feeling tired or sore.",
    "cn": "A：公司已經說要從儲藏室借你一張椅子了，你為什麼還替家裡的辦公室買新椅子？ B：舊的那張坐幾個小時就讓我背痛，所以我買了一張支撐性好、更【舒適的】椅子，現在我可以整天坐在桌前也不會覺得疲累或痠痛。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；隱密的",
    "en_def": "only for one person or group, not for everyone",
    "sentence": "A: Can I hold my video call with the job candidate in the open area, or will the noise from the other teams be a problem? B: You'd better book one of the small {{BLANK}} rooms on the third floor, because the candidate may discuss personal details, and nobody can hear your conversation through those thick walls.",
    "cn": "A：我可以在開放區和應徵者進行視訊通話嗎？還是其他團隊的噪音會是個問題？ B：你最好預約三樓其中一間小型【私人】會議室，因為應徵者可能會談到個人資料，而且那些厚牆讓別人聽不到你們的對話。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行作息；慣例",
    "en_def": "the usual order in which you do things every day",
    "sentence": "A: How do you stay productive when you work from home three days a week, since I always get distracted by the TV and my phone? B: I follow a strict daily {{BLANK}}, so I start at eight, take a short break at ten, eat lunch at noon, and stop working at five, just like I would in the office.",
    "cn": "A：你一週在家工作三天，是怎麼保持效率的？我總是被電視和手機分心。 B：我遵守嚴格的每日【例行作息】，八點開始、十點短暫休息、中午吃午餐、五點收工，就跟在辦公室一樣。"
  },
  {
    "word": "housework",
    "pos": "n.",
    "cn_def": "家事",
    "en_def": "work such as cleaning and washing that you do in a home",
    "sentence": "A: Since you and your husband both have full-time jobs, how do you find time to keep your apartment tidy during the busy week? B: We share the {{BLANK}}, so he does the laundry and the dishes, I vacuum the floors and clean the bathroom, and on Saturdays we spend one hour together tidying the whole place.",
    "cn": "A：既然你和先生都是全職工作，忙碌的一週裡你們怎麼抽出時間維持公寓整潔？ B：我們分擔【家事】，他負責洗衣服和洗碗，我負責吸地板和打掃浴室，星期六我們再一起花一小時整理整個家。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "清潔；打掃",
    "en_def": "to remove dirt from something",
    "sentence": "A: The new tenants are moving into the apartment on Monday, so is everything ready, or do we still need to fix anything before they arrive? B: The painters finished yesterday, and a team is coming tomorrow to {{BLANK}} the windows, carpets, and kitchen, so the place should look like new by Sunday evening.",
    "cn": "A：新房客星期一就要搬進公寓了，一切都準備好了嗎？還是在他們到之前我們還需要修理什麼？ B：油漆工昨天完工了，明天會有一組人來【清潔】窗戶、地毯和廚房，所以到星期天晚上房子應該會煥然一新。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "煮；烹調",
    "en_def": "to make food ready to eat by heating it",
    "sentence": "A: Do you usually eat out for lunch, or do you bring your own meals to the office like many of our coworkers have started doing? B: I usually {{BLANK}} a big pot of soup and some rice on Sunday evening, then pack small boxes for each day, because it saves money and it's much healthier than fast food.",
    "cn": "A：你午餐通常外食，還是像很多同事開始做的那樣自己帶便當到辦公室？ B：我通常星期天晚上【煮】一大鍋湯和一些飯，再分裝成每天的小盒子，因為這樣省錢，而且比速食健康多了。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘焙；烤",
    "en_def": "to cook food such as bread or cake in an oven",
    "sentence": "A: These cookies at the reception desk are delicious, so did you order them from the bakery across the street for our visitors? B: No, my sister likes to {{BLANK}} on weekends when she stays home, so she made three dozen for our office, and she's thinking about selling them online next year.",
    "cn": "A：櫃台的這些餅乾好好吃，是你向對街的麵包店訂來招待訪客的嗎？ B：不是，我姊姊週末待在家時喜歡【烘焙】，所以她替我們辦公室做了三打，而且她正考慮明年在網路上販售。"
  },
  {
    "word": "watch",
    "pos": "v.",
    "cn_def": "觀看",
    "en_def": "to look at something for a period of time",
    "sentence": "A: I missed the online training session about the new expense system yesterday because I was visiting a client, so what should I do? B: Don't worry, because the session was recorded, so you can {{BLANK}} the video on the company website at any time this week, and then just complete the short quiz at the end.",
    "cn": "A：我昨天去拜訪客戶，錯過了新報帳系統的線上培訓課程，我該怎麼辦？ B：別擔心，課程有錄影，所以你這週任何時間都可以在公司網站上【觀看】影片，然後完成最後的小測驗就好。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流播放；直播",
    "en_def": "to send or receive video or sound over the internet as it happens",
    "sentence": "A: Many of our employees work in other countries, so how will they be able to see the CEO's speech at the annual meeting next Friday? B: The IT department will {{BLANK}} the whole event live on our internal website, and anyone who can't watch it at that time can see the recording later in the afternoon.",
    "cn": "A：我們很多員工在其他國家工作，他們要怎麼看到下週五年會上執行長的演講？ B：資訊部會在內部網站上【直播】整場活動，當時無法收看的人可以在下午稍晚觀看錄影。"
  },
  {
    "word": "read",
    "pos": "v.",
    "cn_def": "閱讀；讀",
    "en_def": "to look at words and understand them",
    "sentence": "A: I have to sign the new rental agreement for my apartment this afternoon, but it's twelve pages long and full of legal terms. B: You should {{BLANK}} every page carefully before you sign anything, and if any part is unclear, ask the landlord to explain it, because it's much harder to change the agreement later.",
    "cn": "A：我今天下午要簽公寓的新租約，但它有十二頁長，而且滿是法律用語。 B：你在簽任何東西之前都應該仔細【閱讀】每一頁，如果有任何部分不清楚，就請房東解釋，因為之後要修改合約就難多了。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "讀書；學習",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: Are you coming to the department dinner on Saturday night at the new Italian restaurant downtown, or do you have other plans? B: I'm sorry, but I need to stay home and {{BLANK}} for my accounting certificate exam on Monday morning, because if I pass it, I'll be able to apply for a promotion next year.",
    "cn": "A：你星期六晚上會來市中心那家新義大利餐廳參加部門聚餐嗎？還是你有其他計畫？ B：抱歉，我得待在家【讀書】準備星期一早上的會計證照考試，因為如果通過了，我明年就能申請升遷。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "遠距的；遠端的",
    "en_def": "done from a place far away, such as from home, using the internet",
    "sentence": "A: Is it true that the company will let us do our jobs from home after the office moves to the new building next spring? B: Yes, the manager announced a new {{BLANK}} work policy this morning, so employees can stay home two days a week, as long as they have a fast internet connection and attend the Monday meeting.",
    "cn": "A：明年春天辦公室搬到新大樓後，公司真的會讓我們在家工作嗎？ B：是的，經理今天早上宣布了新的【遠距】工作政策，只要員工有快速的網路連線並參加星期一的會議，每週就可以在家兩天。"
  },
  {
    "word": "work",
    "pos": "v.",
    "cn_def": "工作",
    "en_def": "to do a job",
    "sentence": "A: Why do so many people in the design team ask to stay home on Fridays, even though our office has free coffee and snacks? B: They say they can {{BLANK}} from home more efficiently on Fridays, because there are no meetings and no noise, so they usually finish their drawings faster than they do in the office.",
    "cn": "A：雖然我們辦公室有免費的咖啡和點心，為什麼設計團隊這麼多人星期五要求待在家？ B：他們說星期五在家【工作】比較有效率，因為沒有會議也沒有噪音，所以他們通常比在辦公室更快完成設計圖。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好；業餘愛好",
    "en_def": "something you enjoy doing in your free time",
    "sentence": "A: What do you usually do in your free time on weekends, since you said you don't like going out to crowded shopping malls? B: My favorite {{BLANK}} is painting, so I spend most Saturday afternoons at home with my brushes and paints, and last month I even sold two small pictures to a coworker.",
    "cn": "A：你說你不喜歡去擁擠的購物中心，那你週末空閒時通常做什麼？ B：我最喜歡的【嗜好】是畫畫，所以大部分星期六下午我都在家拿著畫筆和顏料，上個月我甚至還賣了兩幅小畫給同事。"
  },
  {
    "word": "garden",
    "pos": "n.",
    "cn_def": "花園；菜園",
    "en_def": "an area of land next to a house where flowers or vegetables are grown",
    "sentence": "A: Where did you get these fresh tomatoes and peppers that you brought to the staff kitchen this morning? They taste wonderful. B: I grow them in the small {{BLANK}} behind my house, so I spend about an hour there every Sunday morning, and this summer we've had more vegetables than my family can eat.",
    "cn": "A：你今天早上帶到員工廚房的這些新鮮番茄和甜椒是從哪裡來的？好好吃。 B：是我在房子後面的小【菜園】種的，我每個星期天早上都在那裡待一個小時左右，今年夏天的蔬菜多到我們全家都吃不完。"
  },
  {
    "word": "balcony",
    "pos": "n.",
    "cn_def": "陽台",
    "en_def": "a small area outside an upstairs room where you can stand or sit",
    "sentence": "A: Did you find a new apartment near the office, and does it have enough space for you to work from home sometimes? B: Yes, it's on the eighth floor, and it has a {{BLANK}} with a view of the river, so I often sit out there with my laptop and a cup of coffee in the morning.",
    "cn": "A：你在辦公室附近找到新公寓了嗎？空間夠讓你偶爾在家工作嗎？ B：找到了，在八樓，還有一個看得到河景的【陽台】，所以我早上常帶著筆電和一杯咖啡坐在外面。"
  },
  {
    "word": "sofa",
    "pos": "n.",
    "cn_def": "沙發",
    "en_def": "a long soft seat for two or more people",
    "sentence": "A: The waiting area in our lobby looks a bit empty, and clients have to stand when they arrive early, so what should we buy? B: Let's order a large leather {{BLANK}} and a small coffee table from the furniture store downtown, because then three or four visitors can sit comfortably while they wait for their meetings.",
    "cn": "A：我們大廳的等候區看起來有點空，客戶提早到的時候只能站著，我們該買些什麼？ B：我們向市中心的家具店訂一張大的皮【沙發】和一張小咖啡桌吧，這樣三、四位訪客在等開會時就能舒服地坐著。"
  },
  {
    "word": "blanket",
    "pos": "n.",
    "cn_def": "毯子",
    "en_def": "a large warm cover made of cloth, used on a bed or to keep warm",
    "sentence": "A: It's going to be really cold tonight, and the heater in my home office isn't working, so how can I stay warm while I finish the report? B: Just wrap a thick {{BLANK}} around your legs and make a hot cup of tea, and I'll call the repair company tomorrow morning to fix the heater for you.",
    "cn": "A：今晚會非常冷，我家辦公室的暖氣又壞了，我完成報告時要怎麼保暖？ B：就用一條厚【毯子】裹住雙腿，再泡一杯熱茶，我明天早上會打電話請維修公司來幫你修暖氣。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making little or no noise",
    "sentence": "A: Why do you prefer to write your monthly reports at home instead of at your desk, since you have a big screen at the office? B: My apartment is much more {{BLANK}} during the day while my neighbors are at work, so I can concentrate without phones ringing or people chatting around me all the time.",
    "cn": "A：你在辦公室有大螢幕，為什麼還比較喜歡在家寫月報，而不是在座位上寫？ B：白天鄰居都去上班了，我的公寓【安靜】多了，所以我能專心，不會一直有電話鈴響或身邊有人聊天。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；和平的",
    "en_def": "calm and quiet, without trouble or noise",
    "sentence": "A: Where are you going for your vacation this year, and are you planning another busy trip to visit several cities in Europe? B: Not this time, because I want something {{BLANK}}, so I've booked a small cabin in the mountains where there's no traffic, no crowds, and only the sound of birds and the river.",
    "cn": "A：你今年要去哪裡度假？又打算來一趟走訪歐洲好幾個城市的忙碌旅程嗎？ B：這次不會，我想要【寧靜】一點的，所以我訂了山上的一間小木屋，那裡沒有車流、沒有人潮，只有鳥叫聲和河流聲。"
  },
  {
    "word": "lonely",
    "pos": "adj.",
    "cn_def": "寂寞的；孤單的",
    "en_def": "unhappy because you are alone or have no one to talk to",
    "sentence": "A: How do you feel about working from home every day now that our team has moved completely online? B: At first I enjoyed it, but I sometimes feel {{BLANK}} because I don't see my coworkers in person anymore, so I've started meeting a few of them for lunch at a café once a week.",
    "cn": "A：現在我們團隊已經完全改為線上作業，你覺得每天在家工作怎麼樣？ B：一開始我很喜歡，但因為不再當面見到同事，有時候會覺得【寂寞】，所以我開始每週一次和幾位同事在咖啡館吃午餐。"
  },
  {
    "word": "family",
    "pos": "n.",
    "cn_def": "家人；家庭",
    "en_def": "a group of people related to each other, such as parents and children",
    "sentence": "A: Why did you turn down the job offer in Singapore, even though the salary was much higher than what you earn here? B: I wanted to stay close to my {{BLANK}}, because my parents are getting older and my children are still in elementary school, so moving to another country didn't feel right for us.",
    "cn": "A：新加坡那份工作的薪水比你在這裡賺的高很多，你為什麼還拒絕了？ B：我想待在【家人】身邊，因為我父母年紀漸長，孩子們還在讀小學，所以搬到別的國家對我們來說感覺不對。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起",
    "en_def": "with each other; in the same place",
    "sentence": "A: Now that the holidays are coming, do you have any special plans, or are you going to work during the break like last year? B: I've taken the whole week off, so my parents, my sister, and I will stay home {{BLANK}}, cook a big dinner, and watch old movies, because we rarely have time for that.",
    "cn": "A：假期快到了，你有什麼特別的計畫嗎？還是要像去年一樣在假期中工作？ B：我請了一整週的假，所以我爸媽、我妹妹和我會【一起】待在家、煮一頓豐盛的晚餐、看老電影，因為我們很少有時間這樣做。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；安排",
    "en_def": "to put things in order so they are easy to find or use",
    "sentence": "A: My home office is such a mess that I can never find the receipts I need for my expense reports at the end of the month. B: You should {{BLANK}} all your papers into labeled folders by month and keep them in one drawer, and then it will only take a few minutes to find anything you need.",
    "cn": "A：我家裡的辦公室亂到我月底永遠找不到報帳需要的收據。 B：你應該把所有文件按月份【整理】進貼好標籤的資料夾，放在同一個抽屜裡，這樣找任何需要的東西都只要幾分鐘。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；布置",
    "en_def": "to make a place look nicer by adding pretty things",
    "sentence": "A: The company is holding its year-end party in the main lobby next Friday, so who is in charge of making the space look nice? B: The marketing team will {{BLANK}} the lobby with lights, flowers, and balloons on Thursday afternoon, and the facilities staff will set up the tables and chairs early on Friday morning.",
    "cn": "A：公司下週五要在大廳舉辦尾牙，誰負責把場地弄漂亮？ B：行銷團隊會在星期四下午用燈飾、花和氣球【布置】大廳，總務人員會在星期五一早擺好桌椅。"
  },
  {
    "word": "comfort",
    "pos": "n.",
    "cn_def": "舒適；安逸",
    "en_def": "a pleasant feeling of being relaxed and free from pain",
    "sentence": "A: Why did you choose that expensive hotel for your business trip when the company usually asks us to book cheaper rooms? B: The meetings run very late, so I wanted the {{BLANK}} of a quiet room and a good bed, and I paid the difference myself because a good night's sleep helps me do my job well.",
    "cn": "A：公司通常要求我們訂便宜一點的房間，你出差為什麼選那家昂貴的飯店？ B：會議都開到很晚，所以我想要一間安靜房間和一張好床的【舒適】，差價我自己付，因為一夜好眠能幫助我把工作做好。"
  }
];

const MCQS = [
  {
    "q": "The Lins sold their old _____ near the train station last spring. They now live in a small town by the sea.",
    "options": [
      "sofa",
      "hobby",
      "blanket",
      "house"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Kevin rents a two-bedroom _____ on the tenth floor of a new building. It is only a short walk from his office downtown.",
    "options": [
      "blanket",
      "routine",
      "apartment",
      "hobby"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Because of the heavy rain, the company picnic was moved _____. Employees enjoyed their lunch in the large meeting hall instead.",
    "options": [
      "indoors",
      "loudly",
      "lately",
      "hardly"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "After the busy trade show, the sales team wanted to _____ at home for a few days. They had worked every weekend for a month.",
    "options": [
      "organize",
      "relax",
      "decorate",
      "clean"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The hotel lobby has soft lights, warm colors, and a fireplace. Guests often say it feels as _____ as their own living room.",
    "options": [
      "remote",
      "rapid",
      "false",
      "cozy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new office chairs are much more _____ than the old ones. Staff members no longer complain about back pain after long meetings.",
    "options": [
      "peaceful",
      "comfortable",
      "lonely",
      "private"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Please do not share employees' home addresses with anyone. This information is _____ and must be kept in a locked file.",
    "options": [
      "cozy",
      "peaceful",
      "private",
      "comfortable"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Working from home is easier when you keep a regular daily _____. Start at the same time every morning and take short breaks.",
    "options": [
      "hobby",
      "balcony",
      "blanket",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Many busy parents hire a cleaning service to help with the _____. This gives them more free time to relax on weekends.",
    "options": [
      "housework",
      "balcony",
      "sofa",
      "blanket"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Before the new tenants move in, the landlord will _____ the carpets and windows. The work should be finished by Friday afternoon.",
    "options": [
      "bake",
      "relax",
      "clean",
      "read"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The hotel chef will _____ a special dinner for the guests on Saturday night. The menu includes fresh fish and local vegetables.",
    "options": [
      "read",
      "cook",
      "relax",
      "study"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The café staff _____ fresh bread in the oven every morning at five. Customers can buy warm loaves as soon as the doors open.",
    "options": [
      "watch",
      "organize",
      "bake",
      "study"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Employees can _____ the training video online at any time this week. It takes about twenty minutes to finish the whole program.",
    "options": [
      "cook",
      "watch",
      "clean",
      "bake"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The company will _____ the CEO's speech live on its website. Staff in other countries can see it without traveling to headquarters.",
    "options": [
      "bake",
      "clean",
      "cook",
      "stream"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please _____ the contract carefully before you sign it. Ask the legal department for help if any part of it is unclear.",
    "options": [
      "bake",
      "decorate",
      "read",
      "relax"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Lisa plans to stay home and _____ for her accounting exam this weekend. She has turned off her phone to avoid any distractions.",
    "options": [
      "decorate",
      "bake",
      "clean",
      "study"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Our company now allows _____ work two days a week. Employees can do their jobs from home if they have a good internet connection.",
    "options": [
      "remote",
      "lonely",
      "cozy",
      "peaceful"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Many employees prefer to _____ from home on Fridays. They say they finish more tasks when there is no office noise around them.",
    "options": [
      "bake",
      "decorate",
      "cook",
      "work"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Gardening started as a weekend _____ for Helen several years ago. Now she sells her flowers at the local market every Sunday.",
    "options": [
      "hobby",
      "balcony",
      "blanket",
      "apartment"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The hotel has a large _____ behind the main building. Guests can enjoy the roses and fruit trees while they have breakfast outside.",
    "options": [
      "sofa",
      "blanket",
      "garden",
      "routine"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Each room on the fifth floor has a small _____ with two chairs. Guests can step outside and enjoy a view of the harbor.",
    "options": [
      "balcony",
      "blanket",
      "hobby",
      "routine"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The office waiting area has a long leather _____ for visitors. Up to four people can sit on it comfortably while they wait.",
    "options": [
      "garden",
      "hobby",
      "sofa",
      "balcony"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The airline gives each passenger a warm _____ on overnight flights. Passengers can also ask a flight attendant for an extra pillow.",
    "options": [
      "blanket",
      "sofa",
      "balcony",
      "hobby"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Please turn off your phone before the exam begins. All test takers must remain _____ until the last answer sheet is collected.",
    "options": [
      "cozy",
      "remote",
      "quiet",
      "lonely"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Both companies want a _____ end to the long dispute over the contract. Their lawyers will meet next week to discuss an agreement.",
    "options": [
      "cozy",
      "peaceful",
      "lonely",
      "remote"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Some new employees feel _____ when they work from home every day. Weekly video meetings help them stay connected with their coworkers.",
    "options": [
      "cozy",
      "private",
      "remote",
      "lonely"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Our hotel offers special rates for _____ groups with young children. Kids under the age of six can stay in their parents' room for free.",
    "options": [
      "hobby",
      "family",
      "garden",
      "routine"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The two departments will work _____ on the new marketing plan. They will share ideas and meet every Monday morning to check progress.",
    "options": [
      "together",
      "loudly",
      "hardly",
      "lately"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Ben will _____ the files on the shared drive into clear folders. This will help everyone find the documents they need more quickly.",
    "options": [
      "bake",
      "organize",
      "relax",
      "cook"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The staff will _____ the lobby with lights and flowers for the holiday party. The work will start on Thursday afternoon after lunch.",
    "options": [
      "decorate",
      "study",
      "relax",
      "read"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "house": {
    "pos": "n.",
    "en_def": "a building where people, usually one family, live",
    "cn_def": "房子；住宅"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in, inside a larger building",
    "cn_def": "公寓"
  },
  "indoors": {
    "pos": "adv.",
    "en_def": "into or inside a building",
    "cn_def": "在室內；到室內"
  },
  "indoor": {
    "pos": "adj.",
    "en_def": "used or happening inside a building",
    "cn_def": "室內的"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and stop worrying or working",
    "cn_def": "放鬆"
  },
  "rest": {
    "pos": "n.",
    "en_def": "a time when you sleep or stop doing things so you feel better",
    "cn_def": "休息"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable and pleasant",
    "cn_def": "舒適溫馨的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "making you feel relaxed and free from pain",
    "cn_def": "舒適的；舒服的"
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or group, not for everyone",
    "cn_def": "私人的；隱密的"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order in which you do things every day",
    "cn_def": "例行作息；慣例"
  },
  "housework": {
    "pos": "n.",
    "en_def": "work such as cleaning and washing that you do in a home",
    "cn_def": "家事"
  },
  "clean": {
    "pos": "v.",
    "en_def": "to remove dirt from something",
    "cn_def": "清潔；打掃"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "煮；烹調"
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread or cake in an oven",
    "cn_def": "烘焙；烤"
  },
  "watch": {
    "pos": "v.",
    "en_def": "to look at something for a period of time",
    "cn_def": "觀看"
  },
  "stream": {
    "pos": "v.",
    "en_def": "to send or receive video or sound over the internet as it happens",
    "cn_def": "串流播放；直播"
  },
  "read": {
    "pos": "v.",
    "en_def": "to look at words and understand them",
    "cn_def": "閱讀；讀"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "讀書；學習"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "done from a place far away, such as from home, using the internet",
    "cn_def": "遠距的；遠端的"
  },
  "work": {
    "pos": "v.",
    "en_def": "to do a job",
    "cn_def": "工作"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "something you enjoy doing in your free time",
    "cn_def": "嗜好；業餘愛好"
  },
  "garden": {
    "pos": "n.",
    "en_def": "an area of land next to a house where flowers or vegetables are grown",
    "cn_def": "花園；菜園"
  },
  "balcony": {
    "pos": "n.",
    "en_def": "a small area outside an upstairs room where you can stand or sit",
    "cn_def": "陽台"
  },
  "sofa": {
    "pos": "n.",
    "en_def": "a long soft seat for two or more people",
    "cn_def": "沙發"
  },
  "blanket": {
    "pos": "n.",
    "en_def": "a large warm cover made of cloth, used on a bed or to keep warm",
    "cn_def": "毯子"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making little or no noise",
    "cn_def": "安靜的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and quiet, without trouble or noise",
    "cn_def": "寧靜的；和平的"
  },
  "lonely": {
    "pos": "adj.",
    "en_def": "unhappy because you are alone or have no one to talk to",
    "cn_def": "寂寞的；孤單的"
  },
  "family": {
    "pos": "n.",
    "en_def": "a group of people related to each other, such as parents and children",
    "cn_def": "家人；家庭"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other; in the same place",
    "cn_def": "一起"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to put things in order so they are easy to find or use",
    "cn_def": "整理；安排"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make a place look nicer by adding pretty things",
    "cn_def": "裝飾；布置"
  },
  "comfort": {
    "pos": "n.",
    "en_def": "a pleasant feeling of being relaxed and free from pain",
    "cn_def": "舒適；安逸"
  }
};

const EXTRA_GLOSSES = {};
