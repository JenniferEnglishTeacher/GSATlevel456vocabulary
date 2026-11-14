// Topic 2 Quiz Data: Accommodation 住宿
// Source word list: https://www.examword.com/group-topic/accommodation — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T02 - Accommodation 住宿",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "currently",
    "pos": "adv.",
    "cn_def": "目前；現在",
    "en_def": "at the present time",
    "sentence": "A: Is the company still looking for a new office in the city center, or has the manager decided to stay in this old building for another year? B: We are {{BLANK}} renting a small floor near the train station while the agents search for a larger space with better parking for our staff and visitors.",
    "cn": "A：公司還在市中心找新辦公室嗎？還是經理已經決定在這棟舊大樓再待一年？ B：我們【目前】在火車站附近租了一個小樓層，同時仲介正在幫我們找一個更大、讓員工和訪客停車更方便的空間。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起；買得起",
    "en_def": "to have enough money to pay for something",
    "sentence": "A: Are you going to buy that two-bedroom flat near your office, since you said last month that the rent you pay now is far too high? B: I would love to, but I can't {{BLANK}} such a large down payment this year, so I plan to save more money and look again next spring.",
    "cn": "A：你要買你辦公室附近那間兩房公寓嗎？你上個月說現在付的房租太高了。 B：我很想買，但今年我無法【負擔】這麼高的頭期款，所以我打算多存點錢，明年春天再看看。"
  },
  {
    "word": "yard",
    "pos": "n.",
    "cn_def": "院子；庭院",
    "en_def": "an area of land next to a house, often with grass",
    "sentence": "A: Why did your family choose the older house on Maple Street instead of the new apartment downtown, even though the drive to work is much longer? B: The house has a large {{BLANK}} where our children can play safely after school, and there is enough room for a small vegetable garden and our dog.",
    "cn": "A：為什麼你們家選擇楓樹街那間比較舊的房子，而不是市中心的新公寓，即使開車上班要久得多？ B：那間房子有一個大【院子】，孩子們放學後可以在那裡安全地玩耍，而且還有足夠的空間弄一個小菜園和養我們的狗。"
  },
  {
    "word": "veranda",
    "pos": "n.",
    "cn_def": "有頂的走廊；陽台",
    "en_def": "a covered area with a roof along the outside of a house",
    "sentence": "A: Where should we serve coffee to the guests after the hotel tour this afternoon, since the weather report says it might rain a little later? B: Let's use the {{BLANK}} at the front of the main building, because it has a roof to keep everyone dry, comfortable chairs, and a lovely view of the lake.",
    "cn": "A：今天下午飯店導覽結束後，我們應該在哪裡請客人喝咖啡？氣象報告說晚一點可能會下點雨。 B：我們就用主建築前面的【有頂走廊】吧，因為它有屋頂可以讓大家不被淋濕，有舒服的椅子，還能看到湖的美景。"
  },
  {
    "word": "spot",
    "pos": "n.",
    "cn_def": "地點；場所",
    "en_def": "a particular place",
    "sentence": "A: Have you found a good place to stay for the sales conference next month, or are all the hotels near the convention center already fully booked? B: I found a quiet {{BLANK}} just ten minutes away by subway, and it has a free breakfast, fast internet, and a small meeting room we can use.",
    "cn": "A：你找到下個月業務會議期間的好住處了嗎？還是會展中心附近的飯店都已經訂滿了？ B：我找到一個安靜的【地點】，搭地鐵只要十分鐘，而且有免費早餐、快速網路，還有一間我們可以使用的小會議室。"
  },
  {
    "word": "outskirts",
    "pos": "n.",
    "cn_def": "郊區；市郊",
    "en_def": "the outer areas of a town or city",
    "sentence": "A: Why is the new factory so far from the city center, when most of the workers live downtown and have to take two buses every morning? B: Land on the {{BLANK}} of town is much cheaper, so the company could build a bigger site, and it will run a free shuttle bus for staff starting next month.",
    "cn": "A：為什麼新工廠離市中心這麼遠？大部分工人都住在市區，每天早上得搭兩班公車。 B：城鎮【郊區】的土地便宜很多，所以公司能蓋更大的廠區，而且從下個月開始會為員工提供免費接駁車。"
  },
  {
    "word": "uniquely",
    "pos": "adv.",
    "cn_def": "獨特地；獨一無二地",
    "en_def": "in a special way that is unlike any other",
    "sentence": "A: What makes this boutique hotel so popular with business travelers, even though its room prices are higher than the chain hotels nearby? B: Each room is {{BLANK}} designed by a local artist, and guests also enjoy free laundry service, a quiet work area, and a personal welcome from the friendly owner.",
    "cn": "A：為什麼這間精品飯店這麼受商務旅客歡迎，雖然它的房價比附近的連鎖飯店還貴？ B：每間房間都是由當地藝術家【獨特地】設計的，而且客人還能享受免費洗衣服務、安靜的工作區，以及友善老闆的親自歡迎。"
  },
  {
    "word": "patio",
    "pos": "n.",
    "cn_def": "露台；戶外平台",
    "en_def": "a flat paved area outside a building for sitting or eating",
    "sentence": "A: Where are we having the team lunch on Friday, since the cafeteria is closed for repairs and the conference room is too small for everyone? B: The manager booked a restaurant with a large {{BLANK}} behind the building, so we can eat outdoors under umbrellas and enjoy the warm weather together.",
    "cn": "A：星期五的團隊午餐我們要在哪裡吃？員工餐廳因為維修關閉，會議室又太小，容納不下所有人。 B：經理訂了一家餐廳，建築後面有一個大【露台】，所以我們可以在陽傘下戶外用餐，一起享受溫暖的天氣。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口；港市",
    "en_def": "a town or place with a harbor where ships load and unload",
    "sentence": "A: Why did the shipping company move its main office out of the capital last year, when most of its clients are still based there? B: The managers wanted to be close to the busy {{BLANK}} where our cargo ships arrive, so they can check deliveries quickly and solve problems with customs officers in person.",
    "cn": "A：為什麼那家航運公司去年把總部搬出首都？它大部分的客戶都還在那裡。 B：經理們想靠近我們貨船抵達的繁忙【港口】，這樣他們就能快速檢查貨物，並親自和海關人員解決問題。"
  },
  {
    "word": "barbeque",
    "pos": "n.",
    "cn_def": "烤肉；烤肉聚會",
    "en_def": "an outdoor meal where food is cooked over a fire",
    "sentence": "A: How are we going to welcome the new employees who joined the sales department this month, since many of them have not met the rest of the staff yet? B: We are planning a {{BLANK}} in the park next Saturday afternoon, and the company will pay for the meat, drinks, and games for everyone's families.",
    "cn": "A：我們要怎麼歡迎這個月加入業務部的新員工？他們很多人都還沒見過其他同事。 B：我們計劃下星期六下午在公園辦一場【烤肉聚會】，公司會出錢買肉、飲料，還會為大家的家人準備遊戲。"
  },
  {
    "word": "apartment block",
    "pos": "n.phr.",
    "cn_def": "公寓大樓",
    "en_def": "a large building divided into many flats",
    "sentence": "A: Where will the new engineers from overseas live when they arrive next month, since the hotels near the office are very expensive for long stays? B: The company rented ten units in a new {{BLANK}} across the street, so they can walk to work, share a gym, and get help from the building manager.",
    "cn": "A：海外來的新工程師下個月抵達後要住在哪裡？辦公室附近的飯店長期住宿非常貴。 B：公司在對街一棟新的【公寓大樓】租了十個單位，這樣他們可以走路上班、共用健身房，還能得到大樓管理員的協助。"
  },
  {
    "word": "back garden",
    "pos": "n.phr.",
    "cn_def": "後花園；後院",
    "en_def": "the garden behind a house",
    "sentence": "A: Why are you working from home every Friday now, when you used to come into the office five days a week without any problems? B: My manager agreed that I could use the quiet office I built in my {{BLANK}}, so I can focus on reports without noise and save two hours of driving.",
    "cn": "A：為什麼你現在每個星期五都在家工作？你以前一週五天進辦公室都沒問題啊。 B：我的主管同意我使用我在【後花園】蓋的安靜辦公室，這樣我可以在沒有噪音的情況下專心寫報告，還能省下兩小時的開車時間。"
  },
  {
    "word": "detached house",
    "pos": "n.phr.",
    "cn_def": "獨棟房屋",
    "en_def": "a house that stands alone and is not joined to another",
    "sentence": "A: Are you and your wife still looking at small flats in the city, or have you changed your plans since the baby was born last spring? B: We now want a {{BLANK}} with three bedrooms, because we need more space and privacy, and we don't want to share walls with noisy neighbors anymore.",
    "cn": "A：你和太太還在看城裡的小公寓嗎？還是去年春天寶寶出生後你們改變計畫了？ B：我們現在想要一間有三個房間的【獨棟房屋】，因為我們需要更多空間和隱私，也不想再和吵鬧的鄰居共用牆壁了。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區；近郊住宅區",
    "en_def": "an area where people live outside the center of a city",
    "sentence": "A: Why does Ms. Chen take the early train every morning, even though our meetings usually don't start until ten o'clock? B: She lives in a quiet {{BLANK}} about forty minutes from the city, so she leaves early to avoid crowded trains and uses the extra time to answer her emails.",
    "cn": "A：為什麼陳小姐每天早上都搭早班火車？我們的會議通常十點才開始。 B：她住在離城市大約四十分鐘車程的安靜【郊區】，所以她提早出門以避開擁擠的列車，並利用多出來的時間回覆電子郵件。"
  },
  {
    "word": "terraced house",
    "pos": "n.phr.",
    "cn_def": "連棟房屋；排屋",
    "en_def": "one of a row of houses that are joined together",
    "sentence": "A: What kind of home did you finally choose when you moved to London for your new job at the bank last autumn? B: I rented a small {{BLANK}} in a row of old brick homes, and although the walls are shared, it is cheaper than a flat and close to the underground station.",
    "cn": "A：你去年秋天為了銀行的新工作搬到倫敦時，最後選了什麼樣的住處？ B：我在一排老舊的磚造房子中租了一間小【連棟房屋】，雖然牆壁是共用的，但比公寓便宜，而且離地鐵站很近。"
  },
  {
    "word": "dream home",
    "pos": "n.phr.",
    "cn_def": "夢想中的家",
    "en_def": "the perfect house that someone has always wanted",
    "sentence": "A: Why have you been working so much overtime and saving almost all of your salary since the beginning of the year? B: My husband and I found our {{BLANK}} near the beach, with big windows and a sunny kitchen, and we need a larger down payment before the bank will approve our loan.",
    "cn": "A：為什麼你從年初開始就一直加班，還把幾乎所有薪水都存起來？ B：我先生和我在海邊附近找到了我們【夢想中的家】，有大窗戶和陽光充足的廚房，在銀行核准貸款前我們需要更多頭期款。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "格局；佈局；配置",
    "en_def": "the way the parts of a place are arranged",
    "sentence": "A: Did the clients like the new office building they visited yesterday, or do they still want to look at other places before signing the lease? B: They loved the open {{BLANK}}, because the desks, meeting rooms, and kitchen are arranged so that teams can easily talk, share ideas, and work together.",
    "cn": "A：客戶喜歡他們昨天參觀的新辦公大樓嗎？還是他們在簽租約前還想看看其他地方？ B：他們很喜歡那個開放式的【格局】，因為辦公桌、會議室和廚房的配置讓各團隊可以輕鬆交談、分享想法並一起工作。"
  },
  {
    "word": "troublesome",
    "pos": "adj.",
    "cn_def": "麻煩的；棘手的",
    "en_def": "causing problems or worry",
    "sentence": "A: Why did you decide to move out of your old flat downtown before your lease ended, even though the rent was very reasonable? B: The heating system was {{BLANK}} all winter, and the landlord took weeks to send someone to fix it, so I often had to work at home in my coat.",
    "cn": "A：為什麼你在租約到期前就決定搬離市區的舊公寓？雖然房租很合理。 B：暖氣系統整個冬天都很【麻煩】，房東要好幾週才派人來修，所以我在家工作時常常得穿著外套。"
  },
  {
    "word": "fully-furnished",
    "pos": "adj.",
    "cn_def": "家具齊全的",
    "en_def": "having all the furniture that is needed",
    "sentence": "A: What should I bring when I move to Singapore for the six-month project, since I don't want to ship too many heavy boxes? B: Don't worry, the company has booked you a {{BLANK}} apartment with a bed, sofa, desk, and kitchen tools, so you only need your clothes and your laptop.",
    "cn": "A：我搬去新加坡做六個月的專案時該帶什麼？我不想運太多很重的箱子。 B：別擔心，公司已經幫你訂了一間【家具齊全的】公寓，有床、沙發、書桌和廚房用具，所以你只需要帶衣服和筆電。"
  },
  {
    "word": "hall of residence",
    "pos": "n.phr.",
    "cn_def": "大學宿舍；學生宿舍",
    "en_def": "a building where university students live",
    "sentence": "A: Where did the summer interns from the local university stay while they worked at our head office for eight weeks this year? B: They lived in a {{BLANK}} on campus, which was cheap and near the bus line, and they shared meals there with students working at other companies too.",
    "cn": "A：今年在我們總公司工作八週的當地大學暑期實習生住在哪裡？ B：他們住在校園內的【學生宿舍】，價格便宜又靠近公車路線，而且他們也在那裡和在其他公司工作的學生一起吃飯。"
  },
  {
    "word": "home comforts",
    "pos": "n.phr.",
    "cn_def": "居家的舒適；家中的便利",
    "en_def": "things that make life at home easy and pleasant",
    "sentence": "A: Do you enjoy staying in hotels during your long business trips, or do you get tired of living out of a suitcase for weeks? B: I usually miss my {{BLANK}}, like my own soft pillow, my coffee machine, and cooking my own dinner, so I try to book serviced apartments instead.",
    "cn": "A：你長期出差時喜歡住飯店嗎？還是連續好幾週靠一只行李箱過活會讓你感到疲倦？ B：我通常會想念【居家的舒適】，像是我自己的軟枕頭、咖啡機，還有自己煮晚餐，所以我會盡量改訂服務式公寓。"
  },
  {
    "word": "house-warming party",
    "pos": "n.phr.",
    "cn_def": "喬遷派對；暖屋派對",
    "en_def": "a party to celebrate moving into a new home",
    "sentence": "A: What are you doing this Saturday evening, since several of us from the marketing team are going out for dinner after the trade show? B: I can't join you because Kevin from accounting just bought a new flat, and he invited the whole department to his {{BLANK}} to see the place.",
    "cn": "A：你這個星期六晚上要做什麼？我們行銷團隊幾個人在商展結束後要出去吃晚餐。 B：我沒辦法跟你們去，因為會計部的凱文剛買了新公寓，他邀請整個部門去參加他的【喬遷派對】看看新家。"
  },
  {
    "word": "exhausting",
    "pos": "adj.",
    "cn_def": "令人筋疲力盡的",
    "en_def": "making you feel very tired",
    "sentence": "A: How was your move to the new office building last weekend, and did the moving company arrive on time with enough workers? B: It was {{BLANK}}, because the elevator broke in the morning, so we had to carry dozens of boxes up five floors, and I slept for twelve hours afterward.",
    "cn": "A：你們上週末搬到新辦公大樓的情況如何？搬家公司有準時帶足夠的工人來嗎？ B：真是【令人筋疲力盡】，因為電梯早上壞了，我們只好把幾十個箱子搬上五樓，之後我睡了十二個小時。"
  },
  {
    "word": "move into",
    "pos": "v.phr.",
    "cn_def": "搬進；遷入",
    "en_def": "to start living or working in a new place",
    "sentence": "A: When can the accounting team start using the new office space on the third floor, since they are working in the crowded meeting room right now? B: The painters will finish on Thursday, so the team can {{BLANK}} the new space next Monday, after the IT staff set up the phones and computers.",
    "cn": "A：會計團隊什麼時候可以開始使用三樓的新辦公空間？他們現在正在擁擠的會議室裡工作。 B：油漆工星期四會完工，所以在資訊人員裝好電話和電腦之後，團隊下星期一就可以【搬進】新空間。"
  },
  {
    "word": "chill out",
    "pos": "v.phr.",
    "cn_def": "放鬆；休息",
    "en_def": "to relax and rest",
    "sentence": "A: What do you usually do after a long week of meetings and deadlines, since you always look so calm and fresh on Monday mornings? B: I like to {{BLANK}} on my balcony with a good book and some music, and I turn off my work phone so nobody can bother me all weekend.",
    "cn": "A：在經歷了一整週的會議和截止期限後，你通常會做什麼？你每個星期一早上看起來總是很冷靜又有精神。 B：我喜歡在陽台上看本好書、聽點音樂來【放鬆】，而且我會關掉工作手機，這樣整個週末就沒人能打擾我。"
  },
  {
    "word": "permanent address",
    "pos": "n.phr.",
    "cn_def": "永久地址；戶籍地址",
    "en_def": "the place where you live long-term, used on official forms",
    "sentence": "A: Which address should I write on this job application form, since I am staying in a hotel until I find a flat in the city? B: Please give your {{BLANK}}, such as your family home, so the human resources office can send your contract and tax documents to a place that won't change.",
    "cn": "A：在這張求職申請表上我應該寫哪個地址？我在城裡找到公寓之前都住在飯店。 B：請填寫你的【永久地址】，例如你的老家，這樣人資部才能把你的合約和稅務文件寄到一個不會變動的地方。"
  },
  {
    "word": "ideal home",
    "pos": "n.phr.",
    "cn_def": "理想的家",
    "en_def": "the best possible home for someone",
    "sentence": "A: What is the main goal of the new housing project that our construction company is building near the river next year? B: We want to create the {{BLANK}} for young families, with safe parks, good schools nearby, energy-saving windows, and prices that most local workers can really pay each month.",
    "cn": "A：我們建設公司明年要在河邊蓋的新住宅案，主要目標是什麼？ B：我們想為年輕家庭打造【理想的家】，有安全的公園、附近有好學校、節能窗戶，而且價格是大部分當地上班族每個月真的付得起的。"
  },
  {
    "word": "single room",
    "pos": "n.phr.",
    "cn_def": "單人房",
    "en_def": "a room for one person",
    "sentence": "A: Should I book a double room for the training course in Tokyo, or will I be sharing with someone else from our branch office? B: The company only pays for a {{BLANK}} for each employee, so you will have your own space, but it is quite small and has just one bed and a desk.",
    "cn": "A：東京的培訓課程我該訂雙人房嗎？還是我會和分公司的其他人同住？ B：公司只為每位員工支付一間【單人房】的費用，所以你會有自己的空間，但房間很小，只有一張床和一張書桌。"
  },
  {
    "word": "spacious room",
    "pos": "n.phr.",
    "cn_def": "寬敞的房間",
    "en_def": "a room with a lot of space",
    "sentence": "A: Why did the managers choose this hotel for the annual training workshop instead of the cheaper one near the airport? B: This hotel offered a {{BLANK}} that can hold eighty people with tables, a large screen, and good lighting, while the other one only had small meeting areas for groups of ten.",
    "cn": "A：為什麼主管們選這間飯店舉辦年度培訓工作坊，而不是機場附近比較便宜的那間？ B：這間飯店提供了一間能容納八十人、配有桌子、大螢幕和良好照明的【寬敞房間】，而另一間只有供十人小組使用的小型會議區。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "舒適溫暖的；溫馨的",
    "en_def": "warm, comfortable, and pleasant",
    "sentence": "A: How do you like the small café the company opened on the ground floor for staff who want a break from their desks? B: It feels very {{BLANK}}, with soft chairs, warm lights, and a small bookshelf, so many of us go there to relax or have quiet meetings in the afternoon.",
    "cn": "A：你覺得公司在一樓為想離開辦公桌休息的員工開的小咖啡館怎麼樣？ B：感覺非常【溫馨舒適】，有柔軟的椅子、溫暖的燈光和一個小書架，所以我們很多人下午都會去那裡放鬆或開安靜的會議。"
  }
];

const MCQS = [
  {
    "q": "The Riverside Hotel is _____ closed for renovation work. It will reopen to business guests on the first of June.",
    "options": [
      "currently",
      "uniquely",
      "loudly",
      "barely"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many young workers cannot _____ to rent a flat in the city center. They often share homes with friends to save money.",
    "options": [
      "chill out",
      "afford",
      "move into",
      "complain"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The house has a large front _____ with grass and flowers. The children can play there safely after school every day.",
    "options": [
      "port",
      "layout",
      "yard",
      "outskirts"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The guests drank tea on the covered _____ while it rained. The roof kept everyone dry during the long afternoon.",
    "options": [
      "suburb",
      "port",
      "outskirts",
      "veranda"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "This quiet café is a great _____ for small business meetings. It has free Wi-Fi and comfortable seats near the window.",
    "options": [
      "port",
      "outskirts",
      "spot",
      "barbeque"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new warehouse is located on the _____ of the city. Land there is much cheaper than in the busy downtown area.",
    "options": [
      "outskirts",
      "layout",
      "veranda",
      "barbeque"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Each guest room in the boutique hotel is _____ decorated. No two rooms have the same colors, furniture, or artwork.",
    "options": [
      "currently",
      "barely",
      "loudly",
      "uniquely"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The restaurant has a sunny _____ behind the building. Customers can eat outdoors there when the weather is warm.",
    "options": [
      "suburb",
      "patio",
      "port",
      "layout"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Our cargo ships arrive at the _____ every Monday morning. Workers then load the containers onto trucks for delivery.",
    "options": [
      "veranda",
      "yard",
      "layout",
      "port"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The company will hold a _____ in the park on Saturday. Staff can bring their families to enjoy grilled meat and games.",
    "options": [
      "layout",
      "outskirts",
      "barbeque",
      "suburb"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The developer is building a ten-story _____ near the station. It will contain more than eighty small flats for rent.",
    "options": [
      "back garden",
      "apartment block",
      "home comforts",
      "single room"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Mr. Lee grows tomatoes and herbs in his _____. He enjoys working there behind the house on weekend mornings.",
    "options": [
      "back garden",
      "permanent address",
      "hall of residence",
      "house-warming party"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The family bought a _____ with no shared walls. They wanted more privacy and space away from noisy neighbors.",
    "options": [
      "single room",
      "detached house",
      "home comforts",
      "permanent address"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Many office workers live in a quiet _____ outside the city. They take the train downtown every morning for work.",
    "options": [
      "patio",
      "veranda",
      "barbeque",
      "suburb"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "She rents a narrow _____ in a row of old brick homes. It shares walls with the houses on both sides.",
    "options": [
      "terraced house",
      "spacious room",
      "hall of residence",
      "house-warming party"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "After saving for ten years, the couple finally bought their _____. It has a garden, a big kitchen, and a sea view.",
    "options": [
      "permanent address",
      "hall of residence",
      "dream home",
      "single room"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The office has an open _____ with no walls between desks. This makes it easy for team members to talk.",
    "options": [
      "layout",
      "port",
      "barbeque",
      "suburb"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The old printer has been _____ all month. It keeps jamming, and the repair company has already visited three times.",
    "options": [
      "cozy",
      "fully-furnished",
      "troublesome",
      "affordable"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company provides a _____ apartment for overseas staff. It already has beds, sofas, and kitchen tools, so they bring only clothes.",
    "options": [
      "troublesome",
      "fully-furnished",
      "exhausting",
      "nervous"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "First-year university students usually live in a _____ on campus. It provides cheap rooms and shared kitchens for everyone.",
    "options": [
      "back garden",
      "house-warming party",
      "home comforts",
      "hall of residence"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "During long business trips, Ms. Park misses her _____. She especially misses her own bed and cooking her own meals.",
    "options": [
      "house-warming party",
      "apartment block",
      "home comforts",
      "permanent address"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Tom bought a new flat in the city last month. He invited all his coworkers to a _____ to celebrate moving in.",
    "options": [
      "permanent address",
      "back garden",
      "single room",
      "house-warming party"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Moving all the files to the new office was _____. Everyone felt very tired by the end of the long day.",
    "options": [
      "exhausting",
      "cozy",
      "fully-furnished",
      "affordable"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The sales team will _____ the new office on the fifth floor next week. The painters are finishing the walls now.",
    "options": [
      "afford",
      "move into",
      "chill out",
      "complain"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "After the busy product launch, the manager told everyone to _____ this weekend. They deserve some rest after working so hard.",
    "options": [
      "afford",
      "move into",
      "borrow",
      "chill out"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Please write your _____ on the form, not your hotel. We will send your contract there by mail next week.",
    "options": [
      "home comforts",
      "permanent address",
      "back garden",
      "house-warming party"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "For many young families, the _____ has three bedrooms and a garden. It should also be close to good schools.",
    "options": [
      "hall of residence",
      "single room",
      "ideal home",
      "permanent address"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The hotel charges less for a _____ than for a double. It has one bed and is perfect for business travelers.",
    "options": [
      "single room",
      "back garden",
      "apartment block",
      "home comforts"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The training will be held in a _____ on the second floor. It can easily hold one hundred people at tables.",
    "options": [
      "single room",
      "spacious room",
      "home comforts",
      "permanent address"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The small café near our office feels warm and _____. It has soft chairs, gentle lights, and very friendly staff.",
    "options": [
      "cozy",
      "troublesome",
      "exhausting",
      "fully-furnished"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "currently": {
    "pos": "adv.",
    "en_def": "at the present time",
    "cn_def": "目前；現在"
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for something",
    "cn_def": "負擔得起；買得起"
  },
  "yard": {
    "pos": "n.",
    "en_def": "an area of land next to a house, often with grass",
    "cn_def": "院子；庭院"
  },
  "veranda": {
    "pos": "n.",
    "en_def": "a covered area with a roof along the outside of a house",
    "cn_def": "有頂的走廊；陽台"
  },
  "spot": {
    "pos": "n.",
    "en_def": "a particular place",
    "cn_def": "地點；場所"
  },
  "outskirts": {
    "pos": "n.",
    "en_def": "the outer areas of a town or city",
    "cn_def": "郊區；市郊"
  },
  "uniquely": {
    "pos": "adv.",
    "en_def": "in a special way that is unlike any other",
    "cn_def": "獨特地；獨一無二地"
  },
  "patio": {
    "pos": "n.",
    "en_def": "a flat paved area outside a building for sitting or eating",
    "cn_def": "露台；戶外平台"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or place with a harbor where ships load and unload",
    "cn_def": "港口；港市"
  },
  "barbeque": {
    "pos": "n.",
    "en_def": "an outdoor meal where food is cooked over a fire",
    "cn_def": "烤肉；烤肉聚會"
  },
  "apartment block": {
    "pos": "n.phr.",
    "en_def": "a large building divided into many flats",
    "cn_def": "公寓大樓"
  },
  "back garden": {
    "pos": "n.phr.",
    "en_def": "the garden behind a house",
    "cn_def": "後花園；後院"
  },
  "detached house": {
    "pos": "n.phr.",
    "en_def": "a house that stands alone and is not joined to another",
    "cn_def": "獨棟房屋"
  },
  "suburb": {
    "pos": "n.",
    "en_def": "an area where people live outside the center of a city",
    "cn_def": "郊區；近郊住宅區"
  },
  "terraced house": {
    "pos": "n.phr.",
    "en_def": "one of a row of houses that are joined together",
    "cn_def": "連棟房屋；排屋"
  },
  "dream home": {
    "pos": "n.phr.",
    "en_def": "the perfect house that someone has always wanted",
    "cn_def": "夢想中的家"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way the parts of a place are arranged",
    "cn_def": "格局；佈局；配置"
  },
  "troublesome": {
    "pos": "adj.",
    "en_def": "causing problems or worry",
    "cn_def": "麻煩的；棘手的"
  },
  "fully-furnished": {
    "pos": "adj.",
    "en_def": "having all the furniture that is needed",
    "cn_def": "家具齊全的"
  },
  "hall of residence": {
    "pos": "n.phr.",
    "en_def": "a building where university students live",
    "cn_def": "大學宿舍；學生宿舍"
  },
  "home comforts": {
    "pos": "n.phr.",
    "en_def": "things that make life at home easy and pleasant",
    "cn_def": "居家的舒適；家中的便利"
  },
  "house-warming party": {
    "pos": "n.phr.",
    "en_def": "a party to celebrate moving into a new home",
    "cn_def": "喬遷派對；暖屋派對"
  },
  "exhausting": {
    "pos": "adj.",
    "en_def": "making you feel very tired",
    "cn_def": "令人筋疲力盡的"
  },
  "move into": {
    "pos": "v.phr.",
    "en_def": "to start living or working in a new place",
    "cn_def": "搬進；遷入"
  },
  "chill out": {
    "pos": "v.phr.",
    "en_def": "to relax and rest",
    "cn_def": "放鬆；休息"
  },
  "permanent address": {
    "pos": "n.phr.",
    "en_def": "the place where you live long-term, used on official forms",
    "cn_def": "永久地址；戶籍地址"
  },
  "ideal home": {
    "pos": "n.phr.",
    "en_def": "the best possible home for someone",
    "cn_def": "理想的家"
  },
  "single room": {
    "pos": "n.phr.",
    "en_def": "a room for one person",
    "cn_def": "單人房"
  },
  "spacious room": {
    "pos": "n.phr.",
    "en_def": "a room with a lot of space",
    "cn_def": "寬敞的房間"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable, and pleasant",
    "cn_def": "舒適溫暖的；溫馨的"
  }
};

const EXTRA_GLOSSES = {};
