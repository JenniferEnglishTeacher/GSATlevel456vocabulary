// Topic 178 Quiz Data: Hotel 飯店
// Source word list: https://www.examword.com/group-topic/hotel — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T178 - Hotel 飯店",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accommodation",
    "pos": "n.",
    "cn_def": "住宿；住處",
    "en_def": "a place to stay or live, such as a hotel room",
    "sentence": "A: Our sales team is attending the trade fair in Osaka next month, so could you tell me whether the company will pay for our hotel rooms? B: Yes, the company covers {{BLANK}} for up to four nights, but you need to choose a hotel near the exhibition center and keep every receipt for the finance department.",
    "cn": "A：我們業務團隊下個月要參加大阪的商展，可以告訴我公司是否會支付我們的飯店房間費用嗎？ B：會的，公司最多補助四晚的【住宿】，但你必須選擇靠近展覽中心的飯店，並把每張收據都留給財務部。"
  },
  {
    "word": "reservation",
    "pos": "n.",
    "cn_def": "預訂；預約",
    "en_def": "an arrangement to keep a table, room or seat for you",
    "sentence": "A: I'm calling because I want to have dinner with three important clients at your hotel restaurant on Friday evening; is there still a table available? B: Yes, we have a quiet table by the window at seven o'clock, and I can make a {{BLANK}} for you right now if you give me your name and phone number.",
    "cn": "A：我打電話來是因為星期五晚上想和三位重要客戶在貴飯店的餐廳用餐，請問還有空桌嗎？ B：有的，七點鐘靠窗有一張安靜的桌子，如果您給我姓名和電話號碼，我現在就可以幫您【預訂】。"
  },
  {
    "word": "check-in",
    "pos": "n.",
    "cn_def": "入住登記",
    "en_def": "the act of arriving at a hotel and getting your room",
    "sentence": "A: Our flight lands at around eleven in the morning, so can we go straight to our rooms when we arrive at the hotel? B: I'm afraid {{BLANK}} doesn't start until three in the afternoon, but the front desk can keep your luggage safe while you have lunch and walk around the old town.",
    "cn": "A：我們的班機大約早上十一點降落，抵達飯店時可以直接進房間嗎？ B：恐怕【入住登記】要到下午三點才開始，不過您吃午餐、逛老城區的時候，櫃台可以幫您保管行李。"
  },
  {
    "word": "check-out",
    "pos": "n.",
    "cn_def": "退房",
    "en_def": "the act of paying and leaving a hotel",
    "sentence": "A: Our train back to Taipei doesn't leave until six in the evening, so is it possible for us to keep our room a little longer tomorrow? B: Normal {{BLANK}} is at noon, but if you ask the front desk tonight, they can usually let you leave at two o'clock without any extra charge.",
    "cn": "A：我們回台北的火車要到晚上六點才開，明天可以讓我們晚一點交還房間嗎？ B：一般【退房】時間是中午，但如果您今晚向櫃台提出，他們通常可以讓您兩點再離開，而且不另外收費。"
  },
  {
    "word": "reception",
    "pos": "n.",
    "cn_def": "接待處；櫃台",
    "en_def": "the place in a hotel where guests are welcomed and helped",
    "sentence": "A: I just arrived for the marketing conference, but I'm not sure where I should go to pick up my room key and the welcome package. B: Please go to the {{BLANK}} desk on the ground floor next to the elevators, where the staff will check your passport and give you everything you need.",
    "cn": "A：我剛到這裡參加行銷研討會，但不確定該去哪裡領房間鑰匙和歡迎禮包。 B：請到一樓電梯旁的【接待】櫃台，工作人員會核對您的護照，並把您需要的東西都交給您。"
  },
  {
    "word": "lobby",
    "pos": "n.",
    "cn_def": "大廳",
    "en_def": "the large hall near the entrance of a hotel",
    "sentence": "A: Where should we meet the clients from Singapore before we take them out to dinner tonight, since none of us know the area very well? B: Let's wait for them in the hotel {{BLANK}} at half past six, because it has comfortable sofas and is easy to find right after you walk through the main entrance.",
    "cn": "A：我們今晚帶新加坡客戶去吃晚餐前，要在哪裡和他們碰面？我們都不太熟悉這一帶。 B：我們六點半在飯店【大廳】等他們吧，那裡有舒服的沙發，而且一走進正門就很容易找到。"
  },
  {
    "word": "suite",
    "pos": "n.",
    "cn_def": "套房",
    "en_def": "a set of connected hotel rooms, usually with a living room",
    "sentence": "A: The CEO is visiting our Tokyo office next week with his wife, and he wants a room where he can also hold small private meetings. B: Then we should book the executive {{BLANK}} on the top floor, which has a separate living room, a large desk, and a beautiful view of the city.",
    "cn": "A：執行長下週要和太太一起來東京辦公室，他想要一間也能開小型私人會議的房間。 B：那我們應該訂頂樓的行政【套房】，裡面有獨立的客廳、大書桌，還有美麗的城市景觀。"
  },
  {
    "word": "single",
    "pos": "n.",
    "cn_def": "單人房",
    "en_def": "a hotel room with one bed for one person",
    "sentence": "A: The new intern is traveling alone to the training workshop in Kaohsiung, so what kind of room should I reserve for her at the hotel? B: Just reserve a {{BLANK}} for two nights, since she doesn't need a big room, and it's the cheapest option that still includes free breakfast and fast internet.",
    "cn": "A：新來的實習生要獨自去高雄參加培訓工作坊，我該幫她在飯店預訂哪一種房間？ B：訂兩晚的【單人房】就好，因為她不需要大房間，而且這是仍包含免費早餐和高速網路的最便宜選擇。"
  },
  {
    "word": "double",
    "pos": "n.",
    "cn_def": "雙人房",
    "en_def": "a hotel room with one large bed for two people",
    "sentence": "A: My husband is joining me on this business trip because we plan to remain in the city for the weekend after the conference finishes. B: In that case, I'll change your booking from a single room to a {{BLANK}}, which has one large bed for two people and costs only a little more per night.",
    "cn": "A：我先生這次會跟我一起出差，因為研討會結束後我們打算在這個城市多待一個週末。 B：這樣的話，我會把您的預訂從單人房改成【雙人房】，裡面有一張可睡兩人的大床，每晚只貴一點點。"
  },
  {
    "word": "amenity",
    "pos": "n.",
    "cn_def": "便利設施；備品",
    "en_def": "something that makes a place more comfortable or useful",
    "sentence": "A: Our guests often complain that the rooms feel too basic, so what can we add to make them happier during their visit? B: A popular {{BLANK}} these days is a coffee machine in every room, and many travelers also expect a hair dryer, free bottled water, and good-quality shampoo.",
    "cn": "A：我們的客人常抱怨房間太陽春，我們可以增加什麼讓他們住得更開心？ B：現在很受歡迎的一項【便利設施】是每間房都有咖啡機，很多旅客也期待有吹風機、免費瓶裝水和品質好的洗髮精。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施；場所",
    "en_def": "a building or room used for a special purpose",
    "sentence": "A: We need a hotel for our three-day training program, but it must be a place where forty employees can study and practice together. B: The Grand Plaza has an excellent conference {{BLANK}} with projectors and fast internet, and it's only ten minutes from our office by taxi.",
    "cn": "A：我們三天的培訓課程需要一間飯店，但必須是能讓四十位員工一起學習和練習的地方。 B：君悅廣場飯店有很棒的會議【設施】，配備投影機和高速網路，而且從我們辦公室搭計程車只要十分鐘。"
  },
  {
    "word": "housekeeping",
    "pos": "n.",
    "cn_def": "房務部；客房清潔",
    "en_def": "the hotel department that cleans rooms and provides towels",
    "sentence": "A: There's a coffee stain on the carpet in my room, and I also need two more towels before I take a shower tonight. B: I'm sorry about that, sir; I'll call {{BLANK}} right away, and someone will come up to clean the carpet and bring you fresh towels within fifteen minutes.",
    "cn": "A：我房間的地毯上有咖啡漬，而且今晚洗澡前我還需要多兩條毛巾。 B：先生，真抱歉；我馬上通知【房務部】，十五分鐘內就會有人上去清理地毯，並給您送乾淨的毛巾。"
  },
  {
    "word": "concierge",
    "pos": "n.",
    "cn_def": "禮賓人員；服務台人員",
    "en_def": "a hotel worker who helps guests with tickets, tours and advice",
    "sentence": "A: My clients want to see a traditional music show tonight, but I have no idea where to buy tickets in this city. B: You should ask the {{BLANK}} near the front entrance, because he knows all the local theaters and can usually get good seats even on the same day.",
    "cn": "A：我的客戶今晚想看傳統音樂表演，但我完全不知道在這個城市要去哪裡買票。 B：你應該去問正門附近的【禮賓人員】，因為他熟悉當地所有劇院，即使是當天通常也能拿到好位子。"
  },
  {
    "word": "bellhop",
    "pos": "n.",
    "cn_def": "行李員",
    "en_def": "a hotel worker who carries guests' bags to their rooms",
    "sentence": "A: I have three heavy suitcases and a box of product samples for tomorrow's presentation, so I can't carry everything upstairs by myself. B: Don't worry, the {{BLANK}} will put all your bags on a cart and bring them to your room while you finish signing the forms at the front desk.",
    "cn": "A：我有三個很重的行李箱，還有一箱明天簡報要用的產品樣品，沒辦法自己全部搬上樓。 B：別擔心，【行李員】會把您所有的行李放上推車送到房間，您可以先在櫃台把表格簽完。"
  },
  {
    "word": "room service",
    "pos": "n.phr.",
    "cn_def": "客房服務",
    "en_def": "a hotel service that brings food and drinks to your room",
    "sentence": "A: I'm too tired to go out after this long meeting, but I haven't eaten anything since lunch and I'm really hungry. B: Why don't you order {{BLANK}} from the menu on your desk, since they deliver hot meals to your door until midnight and simply add the cost to your bill?",
    "cn": "A：開完這場冗長的會議我累得不想出門，但我從午餐後就沒吃東西，真的很餓。 B：何不用你桌上的菜單叫【客房服務】呢？他們到午夜前都會把熱騰騰的餐點送到門口，費用直接加到帳單上。"
  },
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "自助餐",
    "en_def": "a meal where people serve themselves from many dishes",
    "sentence": "A: Does the room price include breakfast, or will I have to find a café near the office every morning before work? B: It includes a full {{BLANK}} in the restaurant on the second floor, where you can choose from eggs, fresh fruit, noodles, and bread from six-thirty to ten.",
    "cn": "A：房價有包含早餐嗎？還是我每天早上上班前都得在辦公室附近找咖啡店？ B：有包含二樓餐廳的豐盛【自助餐】，從六點半到十點都可以選擇蛋、新鮮水果、麵和麵包。"
  },
  {
    "word": "complimentary",
    "pos": "adj.",
    "cn_def": "免費贈送的",
    "en_def": "given free of charge",
    "sentence": "A: Do I need to pay extra if I want to use the gym or drink something from the minibar during my three-night visit? B: The gym is {{BLANK}} for all guests, and so are the two bottles of water in your room, but the snacks and drinks in the minibar are charged separately.",
    "cn": "A：我住三晚期間如果想用健身房或喝迷你吧裡的飲料，需要另外付費嗎？ B：健身房對所有房客都是【免費的】，房間裡的兩瓶水也是，但迷你吧的零食和飲料要另外收費。"
  },
  {
    "word": "vacancy",
    "pos": "n.",
    "cn_def": "空房",
    "en_def": "a room in a hotel that is available",
    "sentence": "A: We're driving along the coast without a booking, and it's getting dark, so I really hope we can find somewhere to sleep soon. B: Look at that small hotel on the right; the sign says there's a {{BLANK}}, so let's stop and ask the price before all the rooms are taken by other tourists.",
    "cn": "A：我們沿著海岸開車卻沒有訂房，天色也暗了，真希望能快點找到地方睡覺。 B：你看右邊那間小旅館，招牌上寫著有【空房】，我們停下來問問價錢，免得房間都被其他遊客訂走。"
  },
  {
    "word": "occupancy",
    "pos": "n.",
    "cn_def": "住房率；入住",
    "en_def": "the number or percentage of hotel rooms being used",
    "sentence": "A: How is the hotel doing this year compared with last year, now that more international tourists are visiting the island again? B: Our {{BLANK}} has risen to almost ninety percent during the summer months, so the manager is planning to hire more staff and open another wing next spring.",
    "cn": "A：現在越來越多國際觀光客又來島上旅遊，飯店今年和去年相比表現如何？ B：我們夏季的【住房率】已經上升到將近九成，所以經理打算明年春天多雇些員工，並開放另一棟側樓。"
  },
  {
    "word": "rate",
    "pos": "n.",
    "cn_def": "費率；價格",
    "en_def": "the price charged for something, such as a room per night",
    "sentence": "A: I'm planning a three-week business trip to Seoul, so is there any way to pay less than the normal nightly price? B: If you stay more than ten nights, we can offer you a special weekly {{BLANK}}, which will save your company about twenty percent compared with booking each night separately.",
    "cn": "A：我計畫到首爾出差三週，有沒有辦法付比一般每晚價格更少的錢？ B：如果您住超過十晚，我們可以提供特別的週【費率】，跟每晚分開訂相比，能幫貴公司省下約兩成費用。"
  },
  {
    "word": "luxury",
    "pos": "n.",
    "cn_def": "奢華；豪華",
    "en_def": "great comfort and expensive things",
    "sentence": "A: Why did the company choose such an expensive hotel for the awards dinner when we usually look for cheaper places? B: The directors wanted to thank our top sellers with a little {{BLANK}}, so they booked a five-star hotel with marble bathrooms, silk sheets, and a famous French chef.",
    "cn": "A：我們平常都找比較便宜的地方，為什麼公司這次頒獎晚宴要選這麼貴的飯店？ B：董事們想用一點【奢華】來感謝我們的頂尖業務，所以訂了一間有大理石浴室、絲質床單和知名法國主廚的五星級飯店。"
  },
  {
    "word": "budget",
    "pos": "adj.",
    "cn_def": "平價的；經濟型的",
    "en_def": "cheap; low in price",
    "sentence": "A: The finance team said we have to cut travel costs this year, so where should the junior staff stay during the training course? B: Let's find a {{BLANK}} hotel near the station, since it will be clean and safe but cost much less than the expensive international chains downtown.",
    "cn": "A：財務部說今年必須削減差旅費，那培訓課程期間資淺員工該住哪裡？ B：我們找一間車站附近的【平價】旅館吧，既乾淨又安全，但比市中心昂貴的國際連鎖飯店便宜很多。"
  },
  {
    "word": "downtown",
    "pos": "adv.",
    "cn_def": "在市中心；往市中心",
    "en_def": "in or to the center of a city",
    "sentence": "A: Would you prefer a hotel near the airport, or somewhere closer to the client's head office for your meetings next week? B: I'd rather stay {{BLANK}}, because the head office is in the city center and I'd like to walk to restaurants and shops in the evenings.",
    "cn": "A：你下週開會比較想住機場附近的飯店，還是離客戶總部近一點的地方？ B：我寧願住在【市中心】，因為總部就在市區，而且我晚上想走路去餐廳和商店。"
  },
  {
    "word": "seaside",
    "pos": "adj.",
    "cn_def": "海邊的；濱海的",
    "en_def": "near the sea",
    "sentence": "A: Where should we hold the company's summer retreat this year, since everyone said the mountain resort felt too cold and quiet last time? B: How about a {{BLANK}} resort in Kenting, where staff can swim, play beach volleyball, and enjoy fresh seafood after the team-building activities?",
    "cn": "A：今年公司夏季員工旅遊要在哪裡辦？大家都說上次的山區度假村太冷又太安靜。 B：辦在墾丁的【海濱】度假村怎麼樣？員工在團隊建立活動後可以游泳、打沙灘排球，還能享用新鮮海鮮。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space; large",
    "sentence": "A: Is the new family room big enough for my parents and our two kids, or should I reserve two separate rooms instead? B: It's very {{BLANK}}, with two large beds, a sofa, and a desk, so all six of you will have plenty of room to move around comfortably.",
    "cn": "A：新的家庭房夠我爸媽和我們兩個孩子住嗎？還是我應該改訂兩間分開的房間？ B：那間房非常【寬敞】，有兩張大床、一張沙發和一張書桌，所以你們六個人都有足夠空間舒適地活動。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "making you feel relaxed and pleasant",
    "sentence": "A: How was your night at the new airport hotel, since you had to get up so early for your flight to Hong Kong? B: The bed was so {{BLANK}} and the room was so quiet that I slept deeply for six hours, even though I was worried about missing my alarm.",
    "cn": "A：你為了趕飛往香港的班機要很早起床，在新的機場飯店過夜感覺如何？ B：床很【舒適】，房間又很安靜，所以即使我擔心沒聽到鬧鐘，還是熟睡了六個小時。"
  },
  {
    "word": "cleanliness",
    "pos": "n.",
    "cn_def": "清潔；乾淨",
    "en_def": "the state of being clean",
    "sentence": "A: What do guests mention most often in their online reviews of our hotel, apart from the friendly front desk staff? B: They mostly praise the {{BLANK}} of the rooms and bathrooms, so the manager wants to give the housekeeping team a bonus for their hard work this year.",
    "cn": "A：除了友善的櫃台人員之外，客人在網路評論中最常提到我們飯店的什麼？ B：他們大多稱讚房間和浴室的【清潔】，所以經理想發獎金給房務團隊，感謝他們今年的辛勞。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "保全；安全",
    "en_def": "protection of people and things from danger or crime",
    "sentence": "A: I'm a little nervous about leaving my laptop and passport in the room while I attend the conference all day. B: There's no need to worry, because {{BLANK}} is excellent here; every room has a safe, and guards check the hallways and cameras twenty-four hours a day.",
    "cn": "A：我整天都要參加研討會，把筆電和護照留在房間讓我有點緊張。 B：不用擔心，這裡的【保全】很好；每個房間都有保險箱，警衛二十四小時巡查走廊和監視器。"
  },
  {
    "word": "hospitality",
    "pos": "n.",
    "cn_def": "殷勤款待；好客",
    "en_def": "friendly and generous treatment of guests",
    "sentence": "A: Why do so many business travelers keep coming back to that small family hotel instead of the big international chains? B: The owners are famous for their warm {{BLANK}}, always greeting guests by name, serving homemade tea, and helping them plan trips around the area.",
    "cn": "A：為什麼那麼多商務旅客不住大型國際連鎖飯店，而一再回到那間家庭式小旅館？ B：老闆以熱情的【款待】聞名，總是叫得出客人的名字、端上自製的茶，還幫他們規劃附近的行程。"
  },
  {
    "word": "book",
    "pos": "v.",
    "cn_def": "預訂",
    "en_def": "to arrange to have a room, seat or ticket",
    "sentence": "A: The sales conference in Tainan starts next Thursday, and I just realized nobody has arranged rooms for our team yet. B: I'll {{BLANK}} five rooms at the hotel near the convention center this afternoon, and then I'll email everyone the confirmation number and directions.",
    "cn": "A：台南的業務會議下週四就開始了，我剛發現還沒有人幫我們團隊安排房間。 B：我今天下午會在會議中心附近的飯店【預訂】五間房，然後把確認號碼和交通路線用電子郵件寄給大家。"
  },
  {
    "word": "stay",
    "pos": "v.",
    "cn_def": "暫住；停留",
    "en_def": "to live in a place for a short time as a guest",
    "sentence": "A: How long are you planning to remain in Singapore after the product launch, since the client wants to meet you again? B: I'll {{BLANK}} at the same hotel for three more nights, which gives me enough time to visit the client's factory and prepare the final contract.",
    "cn": "A：產品發表會後你打算在新加坡待多久？客戶想再跟你見一次面。 B：我會在同一間飯店再【住】三晚，這樣就有足夠時間參觀客戶的工廠並準備最終合約。"
  },
  {
    "word": "upgrade",
    "pos": "v.",
    "cn_def": "升級",
    "en_def": "to give someone a better room or seat",
    "sentence": "A: I'm a gold member of your hotel program, and I wonder whether my standard room could be changed to something better tonight. B: Since you're a loyal member and we're not fully booked, we can {{BLANK}} you to a sea-view room on the twelfth floor at no extra cost.",
    "cn": "A：我是貴飯店會員計畫的金卡會員，想問今晚我的標準房能不能換成更好的房間？ B：因為您是忠實會員，而且我們還沒客滿，可以免費幫您【升級】到十二樓的海景房。"
  },
  {
    "word": "conveniently",
    "pos": "adv.",
    "cn_def": "方便地；便利地",
    "en_def": "in a way that is easy and useful",
    "sentence": "A: How far is your hotel from the subway, since I'll be carrying a lot of display materials to the trade show every day? B: It's {{BLANK}} located just two minutes from the main subway station, and there's also a free shuttle bus that goes directly to the exhibition hall.",
    "cn": "A：你們飯店離地鐵多遠？因為我每天都要帶很多展示材料去商展。 B：飯店位置【便利】，距離地鐵總站只要兩分鐘，還有免費接駁車直達展覽館。"
  },
  {
    "word": "temporarily",
    "pos": "adv.",
    "cn_def": "暫時地",
    "en_def": "for a short time only",
    "sentence": "A: Why can't I use the swimming pool this week, when the website says it's open to guests every day of the year? B: I'm sorry, but the pool is {{BLANK}} closed for repairs until Friday, so we're offering all guests free passes to the fitness center next door instead.",
    "cn": "A：網站上說游泳池全年每天都對房客開放，為什麼我這週不能使用？ B：很抱歉，游泳池因為維修【暫時】關閉到星期五，所以我們改為提供所有房客隔壁健身中心的免費通行證。"
  }
];

const MCQS = [
  {
    "q": "The training program lasts five days at our regional office. The company will provide free _____ for all participants at a nearby hotel.",
    "options": [
      "accommodation",
      "occupancy",
      "cleanliness",
      "hospitality"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The restaurant is always busy on Friday nights. Please call ahead and make a _____ for eight people at seven o'clock.",
    "options": [
      "vacancy",
      "facility",
      "reservation",
      "luxury"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Guests arriving before three o'clock may leave their luggage with the front desk. Early _____ is available only if a room is ready.",
    "options": [
      "reception",
      "check-in",
      "buffet",
      "security"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Your flight does not leave until the evening. You can request a late _____ so you can keep the room until two o'clock.",
    "options": [
      "lobby",
      "amenity",
      "concierge",
      "check-out"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Visitors must sign in at the _____ desk on the ground floor. A staff member will then give them a visitor badge.",
    "options": [
      "luxury",
      "vacancy",
      "reception",
      "occupancy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The tour group will gather in the hotel _____ at eight o'clock. From there, a bus will take everyone to the museum.",
    "options": [
      "lobby",
      "rate",
      "cleanliness",
      "hospitality"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The president of the company always stays in the top-floor _____ when she visits. It has a private living room and a large dining table.",
    "options": [
      "buffet",
      "vacancy",
      "reservation",
      "suite"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Free wireless internet has become a basic _____ that most travelers expect. Hotels without it often receive poor online reviews.",
    "options": [
      "occupancy",
      "amenity",
      "check-out",
      "concierge"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The new convention center is a modern _____ that can hold up to two thousand people. It also has a large underground parking area.",
    "options": [
      "facility",
      "hospitality",
      "cleanliness",
      "reservation"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Please hang the green card on your door if you want your room cleaned. The _____ staff will come between ten and two o'clock.",
    "options": [
      "accommodation",
      "occupancy",
      "housekeeping",
      "luxury"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "If you need tickets for a concert or a recommendation for dinner, ask the _____. He knows every good restaurant in the city.",
    "options": [
      "buffet",
      "concierge",
      "lobby",
      "vacancy"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The kitchen delivers meals to guest rooms until midnight. To order _____, simply dial zero on the phone beside your bed.",
    "options": [
      "check-in",
      "cleanliness",
      "accommodation",
      "room service"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Breakfast is served as a _____ in the main dining room every morning. Guests can choose from hot dishes, fruit, and fresh bread.",
    "options": [
      "suite",
      "rate",
      "buffet",
      "security"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "All guests receive a _____ bottle of water and a newspaper each day. There is no charge for these items.",
    "options": [
      "complimentary",
      "spacious",
      "budget",
      "comfortable"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The small hotel by the lake was fully booked last weekend. However, the owner said there would be a _____ starting Monday.",
    "options": [
      "lobby",
      "facility",
      "amenity",
      "vacancy"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Hotel _____ usually rises sharply during the Lunar New Year holiday. Most hotels in the city are almost full for the whole week.",
    "options": [
      "hospitality",
      "occupancy",
      "reception",
      "luxury"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The hotel offers a special _____ of two thousand dollars per night for corporate clients. This price includes breakfast and parking.",
    "options": [
      "rate",
      "lobby",
      "suite",
      "check-in"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The resort was built to offer guests complete _____ and comfort. Every villa has a private pool and a personal butler.",
    "options": [
      "vacancy",
      "occupancy",
      "luxury",
      "check-out"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Students and young backpackers often choose _____ hotels to save money. These places are simple but usually clean and safe.",
    "options": [
      "complimentary",
      "budget",
      "spacious",
      "seaside"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Most of our clients have offices in the city center. For that reason, our team prefers to stay _____ during business trips.",
    "options": [
      "temporarily",
      "conveniently",
      "carefully",
      "downtown"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The new apartments have very large living rooms and wide balconies. Buyers say they feel bright and _____ compared with older buildings.",
    "options": [
      "complimentary",
      "seaside",
      "spacious",
      "budget"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "After a long flight, all I wanted was a _____ bed and a hot shower. Fortunately, the hotel room had both.",
    "options": [
      "comfortable",
      "complimentary",
      "seaside",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The hotel received high scores for _____ in the latest inspection. Inspectors found no dust or stains in any of the rooms.",
    "options": [
      "hospitality",
      "occupancy",
      "vacancy",
      "cleanliness"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "For the safety of our guests, _____ cameras are installed in every hallway. Guards also check the parking area every hour.",
    "options": [
      "luxury",
      "security",
      "reception",
      "accommodation"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Many graduates hope to find jobs in the _____ industry. Hotels, restaurants, and travel agencies are hiring more staff this year.",
    "options": [
      "hospitality",
      "cleanliness",
      "occupancy",
      "vacancy"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The conference room is very popular on weekday mornings. Please _____ it at least three days in advance to make sure it is available.",
    "options": [
      "stay",
      "upgrade",
      "book",
      "cancel"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "During the trade fair, our sales team will _____ at a hotel next to the exhibition hall. This will save them time traveling each day.",
    "options": [
      "book",
      "stay",
      "upgrade",
      "confirm"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The airline decided to _____ several loyal passengers to business class because economy was overbooked. They were delighted with the free change.",
    "options": [
      "stay",
      "book",
      "cancel",
      "upgrade"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The new office is _____ located near two subway lines. Most employees can now get to work in less than thirty minutes.",
    "options": [
      "temporarily",
      "carefully",
      "conveniently",
      "downtown"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The hotel restaurant is _____ closed while the kitchen is being renovated. It will reopen at the beginning of next month.",
    "options": [
      "temporarily",
      "conveniently",
      "downtown",
      "carefully"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "accommodation": {
    "pos": "n.",
    "en_def": "a place to stay or live, such as a hotel room",
    "cn_def": "住宿；住處"
  },
  "reservation": {
    "pos": "n.",
    "en_def": "an arrangement to keep a table, room or seat for you",
    "cn_def": "預訂；預約"
  },
  "check-in": {
    "pos": "n.",
    "en_def": "the act of arriving at a hotel and getting your room",
    "cn_def": "入住登記"
  },
  "check-out": {
    "pos": "n.",
    "en_def": "the act of paying and leaving a hotel",
    "cn_def": "退房"
  },
  "reception": {
    "pos": "n.",
    "en_def": "the place in a hotel where guests are welcomed and helped",
    "cn_def": "接待處；櫃台"
  },
  "lobby": {
    "pos": "n.",
    "en_def": "the large hall near the entrance of a hotel",
    "cn_def": "大廳"
  },
  "suite": {
    "pos": "n.",
    "en_def": "a set of connected hotel rooms, usually with a living room",
    "cn_def": "套房"
  },
  "single": {
    "pos": "n.",
    "en_def": "a hotel room with one bed for one person",
    "cn_def": "單人房"
  },
  "double": {
    "pos": "n.",
    "en_def": "a hotel room with one large bed for two people",
    "cn_def": "雙人房"
  },
  "amenity": {
    "pos": "n.",
    "en_def": "something that makes a place more comfortable or useful",
    "cn_def": "便利設施；備品"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or room used for a special purpose",
    "cn_def": "設施；場所"
  },
  "housekeeping": {
    "pos": "n.",
    "en_def": "the hotel department that cleans rooms and provides towels",
    "cn_def": "房務部；客房清潔"
  },
  "concierge": {
    "pos": "n.",
    "en_def": "a hotel worker who helps guests with tickets, tours and advice",
    "cn_def": "禮賓人員；服務台人員"
  },
  "bellhop": {
    "pos": "n.",
    "en_def": "a hotel worker who carries guests' bags to their rooms",
    "cn_def": "行李員"
  },
  "room service": {
    "pos": "n.phr.",
    "en_def": "a hotel service that brings food and drinks to your room",
    "cn_def": "客房服務"
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal where people serve themselves from many dishes",
    "cn_def": "自助餐"
  },
  "complimentary": {
    "pos": "adj.",
    "en_def": "given free of charge",
    "cn_def": "免費贈送的"
  },
  "vacancy": {
    "pos": "n.",
    "en_def": "a room in a hotel that is available",
    "cn_def": "空房"
  },
  "occupancy": {
    "pos": "n.",
    "en_def": "the number or percentage of hotel rooms being used",
    "cn_def": "住房率；入住"
  },
  "rate": {
    "pos": "n.",
    "en_def": "the price charged for something, such as a room per night",
    "cn_def": "費率；價格"
  },
  "luxury": {
    "pos": "n.",
    "en_def": "great comfort and expensive things",
    "cn_def": "奢華；豪華"
  },
  "budget": {
    "pos": "adj.",
    "en_def": "cheap; low in price",
    "cn_def": "平價的；經濟型的"
  },
  "downtown": {
    "pos": "adv.",
    "en_def": "in or to the center of a city",
    "cn_def": "在市中心；往市中心"
  },
  "seaside": {
    "pos": "adj.",
    "en_def": "near the sea",
    "cn_def": "海邊的；濱海的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space; large",
    "cn_def": "寬敞的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "making you feel relaxed and pleasant",
    "cn_def": "舒適的"
  },
  "cleanliness": {
    "pos": "n.",
    "en_def": "the state of being clean",
    "cn_def": "清潔；乾淨"
  },
  "security": {
    "pos": "n.",
    "en_def": "protection of people and things from danger or crime",
    "cn_def": "保全；安全"
  },
  "hospitality": {
    "pos": "n.",
    "en_def": "friendly and generous treatment of guests",
    "cn_def": "殷勤款待；好客"
  },
  "book": {
    "pos": "v.",
    "en_def": "to arrange to have a room, seat or ticket",
    "cn_def": "預訂"
  },
  "stay": {
    "pos": "v.",
    "en_def": "to live in a place for a short time as a guest",
    "cn_def": "暫住；停留"
  },
  "upgrade": {
    "pos": "v.",
    "en_def": "to give someone a better room or seat",
    "cn_def": "升級"
  },
  "conveniently": {
    "pos": "adv.",
    "en_def": "in a way that is easy and useful",
    "cn_def": "方便地；便利地"
  },
  "temporarily": {
    "pos": "adv.",
    "en_def": "for a short time only",
    "cn_def": "暫時地"
  }
};

const EXTRA_GLOSSES = {};
