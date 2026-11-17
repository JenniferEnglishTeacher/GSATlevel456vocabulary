// Topic 326 Quiz Data: Rent 租賃
// Source word list: https://www.examword.com/group-topic/rent — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T326 - Rent 租賃",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rental",
    "pos": "n.",
    "cn_def": "租賃；出租",
    "en_def": "renting something, such as a home or car, for money",
    "sentence": "A: Our sales team is moving to the Kaohsiung office next month, so where will the three new staff members live while they look for their own places? B: The company has signed a six-month {{BLANK}} agreement for a small apartment near the train station, so they can walk to work and settle in without any stress.",
    "cn": "A：我們的業務團隊下個月要搬到高雄辦公室，那三位新員工在找自己的住處期間要住在哪裡？ B：公司已經簽了一份為期六個月的【租賃】合約，租下火車站附近的一間小公寓，所以他們可以走路上班，輕鬆安頓下來。"
  },
  {
    "word": "landlord",
    "pos": "n.",
    "cn_def": "房東",
    "en_def": "a man who owns a home or building and rents it to others",
    "sentence": "A: The heater in my apartment stopped working last night, and it was so cold that I could hardly sleep before my early meeting today. B: You should call your {{BLANK}} right away, because he is responsible for repairs in the building, and he usually sends a technician within a day or two.",
    "cn": "A：我公寓的暖氣昨晚壞了，冷到我幾乎睡不著，而今天一早還要開會。 B：你應該馬上打電話給你的【房東】，因為他負責大樓的維修，通常一兩天內就會派技師過來。"
  },
  {
    "word": "landlady",
    "pos": "n.",
    "cn_def": "女房東",
    "en_def": "a woman who owns a home or building and rents it to others",
    "sentence": "A: Is it true that the owner of your new apartment lets you keep a cat, even though most buildings in this area do not allow pets at all? B: Yes, my {{BLANK}} is a kind retired teacher who lives on the first floor, and she said a quiet cat is fine as long as I keep the place clean.",
    "cn": "A：你新公寓的屋主真的讓你養貓嗎？這一帶大部分的大樓根本都不准養寵物。 B：是啊，我的【女房東】是一位親切的退休老師，就住在一樓，她說只要我把房子保持乾淨，養一隻安靜的貓沒問題。"
  },
  {
    "word": "tenant",
    "pos": "n.",
    "cn_def": "房客；租戶",
    "en_def": "a person who pays rent to live in or use a place",
    "sentence": "A: Why did the building manager put up so many notices in the lobby this week, and what are they about? B: He wants every {{BLANK}} in the building to know that the water will be turned off on Saturday morning, because workers need to replace some old pipes on the third floor.",
    "cn": "A：大樓管理員這週為什麼在大廳貼了那麼多公告？內容是什麼？ B：他要讓大樓裡的每一位【房客】知道星期六早上會停水，因為工人需要更換三樓的一些老舊水管。"
  },
  {
    "word": "lease",
    "pos": "n.",
    "cn_def": "租約",
    "en_def": "a legal agreement to rent a home, office or land for a set time",
    "sentence": "A: Our office space downtown is getting too small for the growing design team, so can we move to a bigger place before summer? B: Unfortunately, our current {{BLANK}} does not end until next March, and breaking it early would cost us three months of rent, so we should wait a little longer.",
    "cn": "A：我們市中心的辦公空間對日漸擴大的設計團隊來說越來越小了，我們可以在夏天前搬到更大的地方嗎？ B：可惜我們目前的【租約】要到明年三月才到期，提前解約要付三個月的租金，所以我們應該再等一陣子。"
  },
  {
    "word": "contract",
    "pos": "n.",
    "cn_def": "合約；契約",
    "en_def": "a written agreement between two or more people or companies",
    "sentence": "A: Before I move into the studio next week, is there anything important I should check with the property manager? B: Yes, read the {{BLANK}} carefully before you sign it, especially the parts about pets, guests, and repairs, because you will have to follow those rules for the whole year.",
    "cn": "A：我下週搬進套房之前，有什麼重要的事情應該和物業經理確認的嗎？ B：有，簽名前要仔細閱讀【合約】，特別是關於寵物、訪客和維修的部分，因為你整整一年都必須遵守那些規定。"
  },
  {
    "word": "deposit",
    "pos": "n.",
    "cn_def": "訂金；押金",
    "en_def": "money you pay first to hold something or show you will pay the rest",
    "sentence": "A: I really like the apartment we saw this afternoon, but I am worried that someone else might take it before I decide. B: If you pay a small {{BLANK}} today, the owner will hold it for you until Friday, and the money will be counted as part of your first month's rent.",
    "cn": "A：我很喜歡我們今天下午看的那間公寓，但我擔心在我決定之前會被別人租走。 B：如果你今天付一點【訂金】，屋主會幫你保留到星期五，而且這筆錢會算進你第一個月的房租裡。"
  },
  {
    "word": "security deposit",
    "pos": "n.phr.",
    "cn_def": "押金；保證金",
    "en_def": "money paid to an owner that is returned if nothing is damaged",
    "sentence": "A: When I move out of my flat at the end of this month, will I get back the two months of rent that I paid at the beginning? B: Yes, you should get the whole {{BLANK}} back as long as there is no damage to the walls, floors, or furniture, so take photos of everything before you leave.",
    "cn": "A：我這個月底搬出公寓時，能拿回一開始付的那兩個月房租嗎？ B：可以，只要牆壁、地板或家具沒有損壞，你應該能拿回全部的【押金】，所以離開前把每樣東西都拍照存證。"
  },
  {
    "word": "monthly",
    "pos": "adj.",
    "cn_def": "每月的",
    "en_def": "happening or paid once every month",
    "sentence": "A: How much does it cost to stay in that new apartment building near the science park where many engineers live? B: The {{BLANK}} rent for a one-bedroom unit is about twenty thousand dollars, which is a little high, but it includes internet, cleaning service, and a parking space.",
    "cn": "A：住在科學園區附近那棟很多工程師住的新公寓大樓要花多少錢？ B：一房的單位【每月】租金大約兩萬元，有點高，但包含網路、清潔服務和一個停車位。"
  },
  {
    "word": "payment",
    "pos": "n.",
    "cn_def": "付款；支付",
    "en_def": "an amount of money that is paid, or the act of paying",
    "sentence": "A: I just got an email from the property office saying that my rent is late, but I am sure I sent the money last week. B: Maybe the bank transfer took longer than usual because of the holiday, so call the office, explain the situation, and send them a copy of your {{BLANK}} receipt.",
    "cn": "A：我剛收到物業辦公室的電子郵件，說我的房租遲交了，但我確定上週已經匯錢了。 B：可能是因為假期，銀行轉帳比平常久，所以打電話給辦公室說明情況，並寄一份你的【付款】收據給他們。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；價格合理的",
    "en_def": "not too expensive; cheap enough for people to pay",
    "sentence": "A: My cousin is starting her first job in Taipei next month, but she says that apartments in the city center cost far too much for her. B: She could look in New Taipei City, where there are many {{BLANK}} studios close to the MRT, so she can save money and still get to work quickly.",
    "cn": "A：我表妹下個月要在台北開始她的第一份工作，但她說市中心的公寓對她來說太貴了。 B：她可以在新北市找找看，那裡捷運附近有很多【價格合理的】套房，這樣她能省錢，又能很快到公司。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: Why did you decide to move out of that beautiful apartment with the river view after living there for only one year? B: The owner raised the rent by fifteen percent, and it became too {{BLANK}} for me, so I found a smaller place that costs much less and is still close to my office.",
    "cn": "A：你為什麼才住了一年就決定搬離那間有河景的漂亮公寓？ B：屋主把房租調漲了百分之十五，對我來說太【昂貴】了，所以我找了一間比較小、便宜很多、而且離公司還是很近的地方。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "the amount of money you plan to spend",
    "sentence": "A: Can you help me find an apartment near the office? I have looked at several places online, but I am not sure which ones I can afford. B: Sure, first tell me your {{BLANK}} for rent each month, and then we can remove the places that cost too much and visit the rest this weekend.",
    "cn": "A：你可以幫我在公司附近找間公寓嗎？我在網路上看了好幾個地方，但不確定哪些我負擔得起。 B：當然，先告訴我你每個月房租的【預算】，然後我們可以刪掉太貴的地方，這個週末去看剩下的。"
  },
  {
    "word": "utility",
    "pos": "n.",
    "cn_def": "（水、電、瓦斯等）公用事業",
    "en_def": "a basic service such as water, electricity or gas",
    "sentence": "A: The rent for this studio seems quite reasonable, but are there any other costs I should know about before I sign? B: Yes, you need to pay each {{BLANK}} bill yourself, such as water, electricity, and gas, which usually adds about two thousand dollars a month in summer.",
    "cn": "A：這間套房的租金看起來很合理，但簽約前還有其他我該知道的費用嗎？ B：有，你需要自己支付每一項【水電瓦斯】帳單，像是水費、電費和瓦斯費，夏天通常每個月會多出大約兩千元。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修；保養",
    "en_def": "the work of keeping a building or machine in good condition",
    "sentence": "A: The elevator in our office building has broken down twice this month, and visitors keep complaining about using the stairs. B: I already talked to the building manager, and she said the {{BLANK}} team will check it on Monday and replace the old parts so it will run safely again.",
    "cn": "A：我們辦公大樓的電梯這個月已經故障兩次了，訪客一直抱怨要走樓梯。 B：我已經和大樓經理談過了，她說【維修】團隊星期一會來檢查，並更換舊零件，讓電梯能再安全運作。"
  },
  {
    "word": "furnished",
    "pos": "adj.",
    "cn_def": "附家具的",
    "en_def": "having furniture already in it",
    "sentence": "A: I am moving to Singapore for a one-year project, so should I ship my bed, desk, and sofa from Taiwan? B: That would cost a lot of money, so I suggest renting a fully {{BLANK}} apartment instead, which already has beds, a sofa, a fridge, and a washing machine ready to use.",
    "cn": "A：我要搬去新加坡做一年的專案，那我應該從台灣把床、書桌和沙發運過去嗎？ B：那會花很多錢，所以我建議你改租一間完全【附家具的】公寓，裡面已經有床、沙發、冰箱和洗衣機可以直接使用。"
  },
  {
    "word": "unfurnished",
    "pos": "adj.",
    "cn_def": "不附家具的",
    "en_def": "having no furniture in it",
    "sentence": "A: Why is the rent for this large apartment so much lower than the price of the smaller one we saw yesterday? B: It is {{BLANK}}, so there are no beds, tables, or chairs at all, and you would have to buy everything yourself before you could actually live there comfortably.",
    "cn": "A：為什麼這間大公寓的租金比我們昨天看的那間小的低那麼多？ B：它是【不附家具的】，所以完全沒有床、桌子或椅子，你得自己把所有東西買齊，才能真正住得舒服。"
  },
  {
    "word": "vacancy",
    "pos": "n.",
    "cn_def": "空房；空缺",
    "en_def": "an empty room, apartment or job that is available",
    "sentence": "A: Do you know if there are any empty rooms in the dormitory for the new interns who are joining us next month? B: I called the housing office this morning, and they said there is only one {{BLANK}} right now, so we may need to find hotel rooms for the other two interns.",
    "cn": "A：你知道宿舍還有沒有空房間給下個月要加入我們的新實習生嗎？ B：我今天早上打電話給住宿辦公室，他們說目前只有一間【空房】，所以我們可能需要幫另外兩位實習生找飯店房間。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "申請（書）",
    "en_def": "a formal written request for something",
    "sentence": "A: I found a great apartment near the park, but the agent said several other people are interested in it too. B: Then you should fill out the rental {{BLANK}} today and attach a copy of your work contract, because owners usually choose the first tenant with a stable job.",
    "cn": "A：我在公園附近找到一間很棒的公寓，但仲介說還有好幾個人也有興趣。 B：那你應該今天就填好租屋【申請書】，並附上你的工作合約影本，因為屋主通常會選擇第一個有穩定工作的房客。"
  },
  {
    "word": "approval",
    "pos": "n.",
    "cn_def": "批准；同意",
    "en_def": "official permission to do something",
    "sentence": "A: Can I paint my bedroom walls light blue? The white color makes the room feel cold and boring after a long day at work. B: You need written {{BLANK}} from the owner before you change anything, or you may have to pay to repaint the walls white when you move out.",
    "cn": "A：我可以把臥室的牆漆成淺藍色嗎？白色讓房間在漫長的工作日後感覺冰冷又無聊。 B：你在更動任何東西之前需要屋主的書面【同意】，不然搬走時你可能得付錢把牆重新漆回白色。"
  },
  {
    "word": "renew",
    "pos": "v.",
    "cn_def": "續約；更新",
    "en_def": "to make an agreement continue for a longer time",
    "sentence": "A: My one-year agreement for the apartment ends in December, and the owner asked whether I plan to stay longer. B: If you like the place and the rent stays the same, you should {{BLANK}} it for another year, because moving during the busy holiday season would be stressful and expensive.",
    "cn": "A：我那間公寓的一年合約十二月就到期了，屋主問我是否打算繼續住。 B：如果你喜歡那個地方，租金也維持不變，你應該再【續約】一年，因為在忙碌的假期季節搬家會很有壓力又很花錢。"
  },
  {
    "word": "terminate",
    "pos": "v.",
    "cn_def": "終止",
    "en_def": "to end something officially",
    "sentence": "A: My company is sending me to work in Tokyo next month, but my apartment agreement here still has six months left. B: Check the agreement carefully, because many owners allow you to {{BLANK}} it early if you give them two months' notice and pay a small fee.",
    "cn": "A：公司下個月要派我去東京工作，但我這裡的公寓合約還剩六個月。 B：仔細看一下合約，因為很多屋主允許你在提前兩個月通知並支付一小筆費用的情況下提早【終止】合約。"
  },
  {
    "word": "evict",
    "pos": "v.",
    "cn_def": "驅逐；逐出",
    "en_def": "to force someone to leave a home by law",
    "sentence": "A: I heard that the owner of the building next door is very angry with one of the people living on the second floor. B: Yes, that person has not paid rent for four months and keeps holding loud parties, so the owner is planning to {{BLANK}} him by the end of the month.",
    "cn": "A：我聽說隔壁大樓的屋主對住在二樓的其中一個人非常生氣。 B：對，那個人已經四個月沒繳房租，還一直辦吵鬧的派對，所以屋主打算在月底前【驅逐】他。"
  },
  {
    "word": "eviction",
    "pos": "n.",
    "cn_def": "驅逐；迫遷",
    "en_def": "the act of forcing someone to leave a home",
    "sentence": "A: Why did the young couple downstairs suddenly start packing boxes and calling moving companies yesterday? B: They received an {{BLANK}} notice from the owner because they had kept three large dogs in the apartment, which was clearly against the building rules in their agreement.",
    "cn": "A：樓下那對年輕夫妻昨天為什麼突然開始打包箱子、打電話給搬家公司？ B：他們收到屋主的【驅逐】通知，因為他們在公寓裡養了三隻大狗，這明顯違反了他們合約中的大樓規定。"
  },
  {
    "word": "sublet",
    "pos": "v.",
    "cn_def": "轉租；分租",
    "en_def": "to rent a place you are renting to another person",
    "sentence": "A: I am going to study in London for three months, but I do not want to pay rent for an empty apartment in Taipei. B: Ask the owner if you can {{BLANK}} your place to someone else while you are away, because many students and short-term workers are looking for rooms like yours.",
    "cn": "A：我要去倫敦讀書三個月，但不想替台北一間空著的公寓付房租。 B：問問屋主你能不能在你不在的期間把房子【轉租】給別人，因為很多學生和短期工作者都在找像你那樣的房間。"
  },
  {
    "word": "roommate",
    "pos": "n.",
    "cn_def": "室友",
    "en_def": "a person who shares a room or home with you",
    "sentence": "A: Living alone in the city is so expensive that I spend almost half of my salary on rent every month. B: Why not find a {{BLANK}} to share a two-bedroom apartment with you, so you can split the rent and bills and also have someone to talk to after work?",
    "cn": "A：一個人住在城市裡太貴了，我每個月幾乎把一半的薪水花在房租上。 B：何不找個【室友】和你合租一間兩房的公寓，這樣你們可以分攤房租和帳單，下班後也有人可以聊天？"
  },
  {
    "word": "apartment",
    "pos": "n.",
    "cn_def": "公寓",
    "en_def": "a set of rooms for living in, usually on one floor of a building",
    "sentence": "A: Where are you living now that you have started your new job at the bank downtown? B: I rent a small {{BLANK}} on the eighth floor of a building near the MRT station, so it only takes me ten minutes to get to the office every morning.",
    "cn": "A：你現在在市中心的銀行開始新工作了，住在哪裡呢？ B：我在捷運站附近一棟大樓的八樓租了一間小【公寓】，所以每天早上只要十分鐘就能到公司。"
  },
  {
    "word": "house",
    "pos": "n.",
    "cn_def": "房子；獨棟住宅",
    "en_def": "a building where people live, usually for one family",
    "sentence": "A: Now that your family has two children and a dog, are you still living in that small flat in the city center? B: No, we moved to a two-story {{BLANK}} with a garden in the suburbs last spring, and although the commute is longer, the kids love playing outside on weekends.",
    "cn": "A：你們家現在有兩個孩子和一隻狗，還住在市中心那間小公寓嗎？ B：沒有，我們去年春天搬到郊區一棟附花園的兩層樓【房子】，雖然通勤時間比較長，但孩子們很喜歡週末在外面玩。"
  },
  {
    "word": "real estate",
    "pos": "n.phr.",
    "cn_def": "房地產；不動產",
    "en_def": "land and buildings that people buy, sell or rent",
    "sentence": "A: My manager is moving here from Canada next month, and he asked me to help him find a place to live near the office. B: I suggest contacting a local {{BLANK}} agency, because their staff know the neighborhoods well and can show him several suitable homes in one afternoon.",
    "cn": "A：我的經理下個月要從加拿大搬來這裡，他請我幫他在公司附近找個住的地方。 B：我建議聯絡當地的【房地產】仲介公司，因為他們的員工很熟悉各個社區，可以在一個下午內帶他看好幾間合適的房子。"
  },
  {
    "word": "agent",
    "pos": "n.",
    "cn_def": "仲介；代理人",
    "en_def": "a person whose job is to help people buy, sell or rent homes",
    "sentence": "A: I have been searching online for an apartment for weeks, but every good place disappears before I can visit it. B: Maybe you should ask an {{BLANK}} for help, because they often hear about new places before they are posted online, although you will need to pay a small service fee.",
    "cn": "A：我已經在網路上找公寓找了好幾週，但每個好地方都在我能去看之前就消失了。 B：也許你應該請【仲介】幫忙，因為他們常常在新物件上網之前就得到消息，不過你需要付一筆小小的服務費。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查；查看",
    "en_def": "a careful check of something to find problems",
    "sentence": "A: The new tenants are moving into the apartment on Monday, so is there anything we must do before we give them the keys? B: Yes, we should do a careful {{BLANK}} of every room on Friday, checking the lights, the water, and the windows, and write down any problems we find.",
    "cn": "A：新房客星期一要搬進公寓了，在把鑰匙交給他們之前，我們有什麼必須做的事嗎？ B：有，我們應該在星期五對每個房間做一次仔細的【檢查】，查看電燈、水和窗戶，並記下發現的任何問題。"
  },
  {
    "word": "due date",
    "pos": "n.phr.",
    "cn_def": "到期日；截止日",
    "en_def": "the date by which something must be paid or done",
    "sentence": "A: I just started renting this room last week, so when exactly do I need to pay the owner each month? B: The {{BLANK}} for rent is the fifth of every month, so remember to set a reminder on your phone, because the owner is quite strict about late payments.",
    "cn": "A：我上週才開始租這個房間，那我每個月到底什麼時候要付錢給屋主？ B：房租的【繳款期限】是每個月五號，所以記得在手機上設定提醒，因為屋主對遲繳相當嚴格。"
  },
  {
    "word": "late fee",
    "pos": "n.phr.",
    "cn_def": "滯納金；逾期費",
    "en_def": "extra money you must pay because you paid or returned something late",
    "sentence": "A: I forgot to pay my rent on time this month because I was busy traveling for work, so what will happen now? B: According to your agreement, you will have to pay a {{BLANK}} of five hundred dollars, so send the money today before the charge becomes even higher.",
    "cn": "A：我這個月因為忙著出差，忘了準時繳房租，現在會怎麼樣？ B：根據你的合約，你必須支付五百元的【滯納金】，所以今天就把錢匯過去，以免費用變得更高。"
  }
];

const MCQS = [
  {
    "q": "Many visitors prefer to drive around the island during their stay. The car _____ company near the airport offers good prices on weekly plans.",
    "options": [
      "rental",
      "vacancy",
      "inspection",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Kevin Chen owns three apartment buildings on Park Street. As a _____, he spends most of his time collecting rent and arranging repairs.",
    "options": [
      "roommate",
      "tenant",
      "landlord",
      "utility"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ms Lin owns the whole building and lives on the ground floor. Our _____ always brings her tenants homemade cookies during the Moon Festival.",
    "options": [
      "roommate",
      "landlady",
      "agent",
      "vacancy"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The apartment on the fourth floor has been empty since June. The owner hopes to find a quiet _____ who will stay for two years.",
    "options": [
      "landlord",
      "maintenance",
      "deposit",
      "tenant"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The bakery signed a five-year _____ for the shop on Main Street. The owner promised not to raise the rent during that period.",
    "options": [
      "vacancy",
      "utility",
      "lease",
      "eviction"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Both companies agreed to the terms after a long meeting. The managers signed the _____ and shook hands before lunch.",
    "options": [
      "contract",
      "tenant",
      "vacancy",
      "maintenance"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The hotel asks guests to pay a _____ when they book a room. The money is returned if they cancel at least three days early.",
    "options": [
      "vacancy",
      "inspection",
      "roommate",
      "deposit"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Mark paid two months' rent as a _____ before moving in. He will get the money back if the apartment is clean when he leaves.",
    "options": [
      "late fee",
      "security deposit",
      "due date",
      "real estate"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Members must pay a _____ fee on the first day of every month. Those who forget to pay lose access to the pool.",
    "options": [
      "monthly",
      "furnished",
      "unfurnished",
      "vacant"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The online shop accepts _____ by credit card or bank transfer. Orders are shipped as soon as the money arrives.",
    "options": [
      "tenant",
      "vacancy",
      "payment",
      "inspection"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The city plans to build more _____ housing for young families. Rents in these new buildings will be much lower than the market price.",
    "options": [
      "expensive",
      "affordable",
      "monthly",
      "eligible"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Our department has a limited _____ for the year-end party. We can spend no more than fifty thousand dollars on food and drinks.",
    "options": [
      "tenant",
      "vacancy",
      "lease",
      "budget"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The rent does not include water and electricity. Tenants must pay each _____ company directly every two months.",
    "options": [
      "landlord",
      "vacancy",
      "utility",
      "deposit"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The machines on the production line need regular _____ to run smoothly. A technician checks and cleans them every Friday afternoon.",
    "options": [
      "maintenance",
      "eviction",
      "vacancy",
      "approval"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The studio comes with a bed, a desk, and a new sofa. Because it is fully _____, the tenant only needs to bring clothes.",
    "options": [
      "unfurnished",
      "expensive",
      "affordable",
      "furnished"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The empty apartment has no beds, tables, or chairs. Because it is _____, the rent is lower than other units in the building.",
    "options": [
      "furnished",
      "unfurnished",
      "expensive",
      "monthly"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The hotel is fully booked for the national holiday weekend. The front desk staff said there is not a single _____ until Tuesday.",
    "options": [
      "vacancy",
      "utility",
      "deposit",
      "lease"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Please complete the _____ form and attach a copy of your ID. The office will review it and reply within five working days.",
    "options": [
      "tenant",
      "utility",
      "application",
      "eviction"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The marketing team cannot start the campaign yet. They are still waiting for final _____ from the general manager.",
    "options": [
      "vacancy",
      "approval",
      "eviction",
      "utility"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Your gym membership will end on December 31. If you want to keep using the pool, please _____ it before then.",
    "options": [
      "terminate",
      "evict",
      "inspect",
      "renew"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The company may _____ the agreement if the supplier delivers late again. Managers have already sent a written warning about the delays.",
    "options": [
      "renew",
      "sublet",
      "terminate",
      "evict"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The owner went to court to _____ the tenants who had not paid rent for six months. They must leave the building by Friday.",
    "options": [
      "evict",
      "renew",
      "sublet",
      "terminate"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "After ignoring several warnings about loud parties, the tenant received an _____ notice. He has thirty days to find a new home.",
    "options": [
      "application",
      "approval",
      "agent",
      "eviction"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Lisa will work overseas for six months but wants to keep her apartment. She plans to _____ it to a student until she returns.",
    "options": [
      "evict",
      "sublet",
      "terminate",
      "renew"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Jenny shares a two-bedroom flat near the university. Her _____ studies engineering and often cooks dinner for both of them.",
    "options": [
      "roommate",
      "agent",
      "vacancy",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Prices for homes near the new MRT line have risen quickly. Many investors are buying _____ in that area this year.",
    "options": [
      "late fee",
      "due date",
      "real estate",
      "security deposit"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "We did not have time to look for an office ourselves. A local _____ found us three good options and arranged all the visits.",
    "options": [
      "tenant",
      "agent",
      "roommate",
      "vacancy"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Fire safety officers will visit the factory next Tuesday. Everyone should prepare for the _____ by clearing the emergency exits.",
    "options": [
      "eviction",
      "vacancy",
      "rental",
      "inspection"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The report must be finished by the end of this month. Please do not miss the _____, or the client may cancel the order.",
    "options": [
      "late fee",
      "real estate",
      "due date",
      "security deposit"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The library charges a _____ when books are returned after the due date. The charge is ten dollars per book per day.",
    "options": [
      "late fee",
      "due date",
      "real estate",
      "security deposit"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "rental": {
    "pos": "n.",
    "en_def": "renting something, such as a home or car, for money",
    "cn_def": "租賃；出租"
  },
  "landlord": {
    "pos": "n.",
    "en_def": "a man who owns a home or building and rents it to others",
    "cn_def": "房東"
  },
  "landlady": {
    "pos": "n.",
    "en_def": "a woman who owns a home or building and rents it to others",
    "cn_def": "女房東"
  },
  "tenant": {
    "pos": "n.",
    "en_def": "a person who pays rent to live in or use a place",
    "cn_def": "房客；租戶"
  },
  "lease": {
    "pos": "n.",
    "en_def": "a legal agreement to rent a home, office or land for a set time",
    "cn_def": "租約"
  },
  "contract": {
    "pos": "n.",
    "en_def": "a written agreement between two or more people or companies",
    "cn_def": "合約；契約"
  },
  "deposit": {
    "pos": "n.",
    "en_def": "money you pay first to hold something or show you will pay the rest",
    "cn_def": "訂金；押金"
  },
  "security deposit": {
    "pos": "n.phr.",
    "en_def": "money paid to an owner that is returned if nothing is damaged",
    "cn_def": "押金；保證金"
  },
  "monthly": {
    "pos": "adj.",
    "en_def": "happening or paid once every month",
    "cn_def": "每月的"
  },
  "payment": {
    "pos": "n.",
    "en_def": "an amount of money that is paid, or the act of paying",
    "cn_def": "付款；支付"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "not too expensive; cheap enough for people to pay",
    "cn_def": "負擔得起的；價格合理的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money you plan to spend",
    "cn_def": "預算"
  },
  "utility": {
    "pos": "n.",
    "en_def": "a basic service such as water, electricity or gas",
    "cn_def": "（水、電、瓦斯等）公用事業"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping a building or machine in good condition",
    "cn_def": "維修；保養"
  },
  "furnished": {
    "pos": "adj.",
    "en_def": "having furniture already in it",
    "cn_def": "附家具的"
  },
  "unfurnished": {
    "pos": "adj.",
    "en_def": "having no furniture in it",
    "cn_def": "不附家具的"
  },
  "vacancy": {
    "pos": "n.",
    "en_def": "an empty room, apartment or job that is available",
    "cn_def": "空房；空缺"
  },
  "application": {
    "pos": "n.",
    "en_def": "a formal written request for something",
    "cn_def": "申請（書）"
  },
  "approval": {
    "pos": "n.",
    "en_def": "official permission to do something",
    "cn_def": "批准；同意"
  },
  "renew": {
    "pos": "v.",
    "en_def": "to make an agreement continue for a longer time",
    "cn_def": "續約；更新"
  },
  "terminate": {
    "pos": "v.",
    "en_def": "to end something officially",
    "cn_def": "終止"
  },
  "evict": {
    "pos": "v.",
    "en_def": "to force someone to leave a home by law",
    "cn_def": "驅逐；逐出"
  },
  "eviction": {
    "pos": "n.",
    "en_def": "the act of forcing someone to leave a home",
    "cn_def": "驅逐；迫遷"
  },
  "sublet": {
    "pos": "v.",
    "en_def": "to rent a place you are renting to another person",
    "cn_def": "轉租；分租"
  },
  "roommate": {
    "pos": "n.",
    "en_def": "a person who shares a room or home with you",
    "cn_def": "室友"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in, usually on one floor of a building",
    "cn_def": "公寓"
  },
  "house": {
    "pos": "n.",
    "en_def": "a building where people live, usually for one family",
    "cn_def": "房子；獨棟住宅"
  },
  "real estate": {
    "pos": "n.phr.",
    "en_def": "land and buildings that people buy, sell or rent",
    "cn_def": "房地產；不動產"
  },
  "agent": {
    "pos": "n.",
    "en_def": "a person whose job is to help people buy, sell or rent homes",
    "cn_def": "仲介；代理人"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "a careful check of something to find problems",
    "cn_def": "檢查；查看"
  },
  "due date": {
    "pos": "n.phr.",
    "en_def": "the date by which something must be paid or done",
    "cn_def": "到期日；截止日"
  },
  "late fee": {
    "pos": "n.phr.",
    "en_def": "extra money you must pay because you paid or returned something late",
    "cn_def": "滯納金；逾期費"
  }
};

const EXTRA_GLOSSES = {};
