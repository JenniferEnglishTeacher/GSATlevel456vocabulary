// Topic 176 Quiz Data: Home 家
// Source word list: https://www.examword.com/group-topic/home — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T176 - Home 家",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "currently",
    "pos": "adv.",
    "cn_def": "目前；現在",
    "en_def": "at the present time",
    "sentence": "A: Are you still renting that small flat near the train station, or did you finally buy the house you showed me online last month? B: I am {{BLANK}} staying with my sister for a few weeks, because the sale of the new house will not be completed until the bank approves my loan.",
    "cn": "A：你還在租火車站附近那間小公寓嗎？還是你終於買下上個月在網路上給我看的那棟房子了？ B：我【目前】暫時住在我姊姊家幾個星期，因為新房子要等銀行核准我的貸款後才能完成交易。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起；買得起",
    "en_def": "to have enough money to pay for something",
    "sentence": "A: Why did you and your husband decide to look for a home in a smaller town instead of staying in the city center near your offices? B: Housing prices downtown have risen so quickly that we simply could not {{BLANK}} a three-bedroom apartment there on our two salaries, even with help from our parents.",
    "cn": "A：你和你先生為什麼決定在小鎮找房子，而不是留在離公司近的市中心？ B：市中心的房價漲得太快，即使有父母的幫忙，靠我們兩份薪水也根本【負擔不起】那裡的三房公寓。"
  },
  {
    "word": "yard",
    "pos": "n.",
    "cn_def": "院子；庭院",
    "en_def": "an area of land next to a house, often with grass",
    "sentence": "A: Is there enough space at your new place for the children to play outside safely when the weather is nice on weekends? B: Yes, there is a large {{BLANK}} behind the house with a wooden fence around it, so the kids can run around and the dog cannot escape into the street.",
    "cn": "A：你新家有足夠的空間讓孩子們在週末天氣好的時候安全地在戶外玩嗎？ B：有的，房子後面有一個很大的【院子】，四周圍著木頭籬笆，所以孩子們可以到處跑，狗也跑不到街上去。"
  },
  {
    "word": "veranda",
    "pos": "n.",
    "cn_def": "陽台；走廊（有頂的）",
    "en_def": "a covered area with a floor along the outside of a house",
    "sentence": "A: Where do you usually have breakfast in the summer, since your kitchen gets so hot in the morning sun? B: We carry our coffee and toast out to the {{BLANK}} at the front of the house, where the roof gives us shade and we can watch our neighbors walking to work.",
    "cn": "A：既然你家廚房在早上的陽光下會變得很熱，你們夏天通常在哪裡吃早餐？ B：我們會把咖啡和吐司端到房子前面的【有頂陽台】，那裡的屋頂可以遮陽，我們還可以看鄰居走路去上班。"
  },
  {
    "word": "spot",
    "pos": "n.",
    "cn_def": "地點；處所",
    "en_def": "a particular place",
    "sentence": "A: Your new apartment has such a wonderful view of the river and the mountains; how did you manage to find it so quickly? B: A coworker told me about it before it was advertised, and I knew right away it was the perfect {{BLANK}} because it is quiet but still close to the subway.",
    "cn": "A：你的新公寓可以看到河流和山景，景色真棒；你是怎麼這麼快就找到的？ B：在廣告刊登之前，一位同事就先告訴我了，我馬上知道那是個完美的【地點】，因為那裡很安靜，但又離捷運很近。"
  },
  {
    "word": "outskirts",
    "pos": "n.",
    "cn_def": "郊區；市郊",
    "en_def": "the outer areas of a town or city",
    "sentence": "A: Doesn't it take you a long time to drive to the office every morning now that you have moved out of the downtown area? B: It takes about forty minutes, but living on the {{BLANK}} of the city means we pay much lower rent and have fresh air, trees, and a quiet street.",
    "cn": "A：你搬離市中心之後，現在每天早上開車到公司不是要花很久的時間嗎？ B：大約要四十分鐘，但住在城市的【郊區】代表我們付的房租便宜很多，而且有新鮮空氣、樹木和安靜的街道。"
  },
  {
    "word": "uniquely",
    "pos": "adv.",
    "cn_def": "獨特地；獨一無二地",
    "en_def": "in a special way that is not like anything else",
    "sentence": "A: Why are so many design magazines writing articles about the old house that your architect friend rebuilt last year? B: The house is {{BLANK}} designed, with a glass roof over the living room and walls made from recycled wood, so it looks different from every other home in the neighborhood.",
    "cn": "A：為什麼這麼多設計雜誌都在報導你那位建築師朋友去年重建的老房子？ B：那棟房子設計得很【獨特】，客廳上方是玻璃屋頂，牆壁是用回收木材做的，所以看起來和附近其他房子都不一樣。"
  },
  {
    "word": "patio",
    "pos": "n.",
    "cn_def": "露台；天井",
    "en_def": "a flat area with a hard floor next to a house, used for sitting outside",
    "sentence": "A: Where are you planning to hold the dinner for your team after the project is finished next Saturday evening? B: I am going to set up two long tables on the {{BLANK}} behind my house, because the stone floor is flat and there is enough room for twelve people to eat outdoors.",
    "cn": "A：下週六晚上專案結束後，你打算在哪裡為你的團隊舉辦晚餐？ B：我打算在我家後面的【露台】上擺兩張長桌，因為石板地面很平坦，而且有足夠的空間讓十二個人在戶外用餐。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口；港市",
    "en_def": "a town or city with a harbor where ships load and unload",
    "sentence": "A: What made you choose to buy a home in Keelung rather than in Taipei, where most of your clients are based? B: I grew up near the sea, and I love living in a busy {{BLANK}} where I can watch the cargo ships arriving and eat fresh seafood every weekend.",
    "cn": "A：你的客戶大多在台北，是什麼原因讓你選擇在基隆而不是台北買房子？ B：我在海邊長大，我很喜歡住在熱鬧的【港口城市】，可以看貨船進港，每個週末還能吃到新鮮的海鮮。"
  },
  {
    "word": "barbeque",
    "pos": "n.",
    "cn_def": "烤肉；烤肉聚會",
    "en_def": "a meal or party where food is cooked outdoors over a fire",
    "sentence": "A: What are you doing this Sunday afternoon now that the weather has finally become warm and sunny again? B: My family is having a {{BLANK}} in the back of our house, so my father will grill chicken and corn while my cousins bring salads and cold drinks for everyone.",
    "cn": "A：天氣終於又變得溫暖晴朗了，你這個星期天下午要做什麼？ B：我們家要在屋後舉辦【烤肉聚會】，我爸爸會烤雞肉和玉米，表兄弟姊妹們則會帶沙拉和冷飲給大家。"
  },
  {
    "word": "apartment block",
    "pos": "n.phr.",
    "cn_def": "公寓大樓",
    "en_def": "a large building divided into many separate flats",
    "sentence": "A: How many families live in the new building that was just finished across the road from our office? B: It is a twelve-story {{BLANK}} with about ninety units, and I heard that most of the flats were sold to young couples before construction was even completed.",
    "cn": "A：我們公司對面剛完工的新大樓裡住了多少戶人家？ B：那是一棟十二層樓的【公寓大樓】，大約有九十戶，我聽說大部分的房子在還沒蓋好之前就賣給了年輕夫妻。"
  },
  {
    "word": "back garden",
    "pos": "n.phr.",
    "cn_def": "後花園；後院",
    "en_def": "a garden behind a house",
    "sentence": "A: Your tomatoes and peppers look so fresh; did you buy them at the farmers' market near the station this morning? B: No, I grew them myself in the small {{BLANK}} behind our kitchen, and I water them every evening after I come home from work.",
    "cn": "A：你的番茄和甜椒看起來好新鮮；是今天早上在車站附近的農夫市集買的嗎？ B：不是，是我自己種在廚房後面的小【後花園】裡的，我每天下班回家後都會幫它們澆水。"
  },
  {
    "word": "detached house",
    "pos": "n.phr.",
    "cn_def": "獨棟房屋",
    "en_def": "a house that stands alone and is not joined to another house",
    "sentence": "A: Why did you decide to sell your flat in the city and move your whole family out to the countryside last spring? B: We wanted a {{BLANK}} with walls that are not shared with neighbors, so the kids can play the piano loudly without anyone knocking on the door to complain.",
    "cn": "A：你去年春天為什麼決定賣掉市區的公寓，帶全家搬到鄉下？ B：我們想要一棟不和鄰居共用牆壁的【獨棟房屋】，這樣孩子們大聲彈鋼琴也不會有人來敲門抱怨。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區；近郊住宅區",
    "en_def": "an area where people live outside the center of a city",
    "sentence": "A: Do you think it is a good idea for our company to open a new branch outside the city center next year? B: Yes, because many young families have moved to the quiet {{BLANK}} north of the river, and they would prefer a bank close to their homes and schools.",
    "cn": "A：你認為我們公司明年在市中心以外開設新分行是個好主意嗎？ B：是的，因為很多年輕家庭已經搬到河北岸那個安靜的【郊區住宅區】，他們會比較喜歡離家和學校近的銀行。"
  },
  {
    "word": "terraced house",
    "pos": "n.phr.",
    "cn_def": "連棟房屋；排屋",
    "en_def": "one of a row of houses joined together by their side walls",
    "sentence": "A: What kind of home did you live in when you were working at the London office for three years? B: I rented a narrow {{BLANK}} on a long street where every home was connected to the next one, so I could sometimes hear my neighbor's television through the wall.",
    "cn": "A：你在倫敦辦公室工作那三年住的是什麼樣的房子？ B：我租了一間狹窄的【連棟房屋】，在一條長街上，每一戶都和隔壁相連，所以我有時候隔著牆壁都聽得到鄰居的電視聲。"
  },
  {
    "word": "dream home",
    "pos": "n.phr.",
    "cn_def": "夢想中的家",
    "en_def": "the perfect house that someone has always wanted",
    "sentence": "A: You have been saving money and looking at houses for nearly ten years; have you finally found something you really like? B: Yes, we just signed the contract for our {{BLANK}}, a bright wooden house with a big kitchen, a quiet garden, and a lovely view of the lake.",
    "cn": "A：你存錢看房子已經快十年了，終於找到真正喜歡的了嗎？ B：是的，我們剛簽約買下我們【夢想中的家】，那是一棟明亮的木屋，有大廚房、安靜的花園，還有美麗的湖景。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "格局；布局",
    "en_def": "the way the rooms and parts of a place are arranged",
    "sentence": "A: The apartment is not very big, so why did you say it feels much more comfortable than your old one? B: The {{BLANK}} is much better, because the kitchen opens into the living room and both bedrooms are at the quiet end, away from the front door and the elevator.",
    "cn": "A：這間公寓不是很大，為什麼你說住起來比以前那間舒服很多？ B：它的【格局】好很多，因為廚房和客廳是相通的，兩間臥室都在安靜的那一頭，遠離大門和電梯。"
  },
  {
    "word": "troublesome",
    "pos": "adj.",
    "cn_def": "麻煩的；令人頭痛的",
    "en_def": "causing problems or worry again and again",
    "sentence": "A: Have you fixed the problem with the water heater in your bathroom, or are you still taking cold showers in the morning? B: It has been really {{BLANK}}, because the repairman came twice last week but it broke down again yesterday, so the landlord has promised to buy a new one.",
    "cn": "A：你浴室熱水器的問題修好了嗎？還是你早上還在洗冷水澡？ B：這真的很【麻煩】，因為修理工上週來了兩次，但昨天又壞了，所以房東答應會買一台新的。"
  },
  {
    "word": "fully-furnished",
    "pos": "adj.",
    "cn_def": "附全套家具的",
    "en_def": "having all the furniture needed already in it",
    "sentence": "A: Will you need to buy beds, sofas, and a dining table when you move to Singapore for your new job next month? B: No, the company has rented a {{BLANK}} flat for me, so everything from the bed to the washing machine is already there and I only need to bring my clothes.",
    "cn": "A：你下個月為了新工作搬到新加坡時，需要買床、沙發和餐桌嗎？ B：不用，公司幫我租了一間【附全套家具的】公寓，所以從床到洗衣機一應俱全，我只要帶衣服過去就好。"
  },
  {
    "word": "hall of residence",
    "pos": "n.phr.",
    "cn_def": "大學學生宿舍",
    "en_def": "a building where university students live",
    "sentence": "A: Where did you live during your first year of university before you moved into a shared flat with your friends? B: I stayed in a {{BLANK}} on campus, where about two hundred students had their own small rooms and shared a large kitchen on each floor.",
    "cn": "A：你大學一年級在和朋友合租公寓之前住在哪裡？ B：我住在校園裡的【學生宿舍】，那裡大約有兩百名學生各自擁有小房間，每層樓共用一間大廚房。"
  },
  {
    "word": "home comforts",
    "pos": "n.phr.",
    "cn_def": "家中的舒適享受",
    "en_def": "the things that make life at home pleasant and easy",
    "sentence": "A: How did you feel after spending three weeks working on that construction site in the desert with no hot water? B: It was an interesting experience, but I really missed my {{BLANK}}, such as a soft bed, a hot shower, and my mother's cooking every evening.",
    "cn": "A：你在那個沒有熱水的沙漠工地工作了三個星期，感覺怎麼樣？ B：那是很有趣的經驗，但我真的很想念【家裡的舒適享受】，像是柔軟的床、熱水澡，還有媽媽每天晚上煮的飯菜。"
  },
  {
    "word": "house-warming party",
    "pos": "n.phr.",
    "cn_def": "喬遷派對；暖屋派對",
    "en_def": "a party for friends after moving into a new home",
    "sentence": "A: Now that you have finally unpacked all the boxes in your new apartment, are you planning to invite anyone over? B: Yes, we are holding a {{BLANK}} next Saturday night, so please come and meet our new neighbors, and feel free to bring your partner too.",
    "cn": "A：你終於把新公寓裡的箱子都拆完了，打算邀請誰來家裡坐坐嗎？ B：有，我們下週六晚上要辦一場【喬遷派對】，請你來認識我們的新鄰居，也歡迎帶你的另一半一起來。"
  },
  {
    "word": "exhausting",
    "pos": "adj.",
    "cn_def": "令人筋疲力盡的",
    "en_def": "making you feel extremely tired",
    "sentence": "A: You look very tired this morning; did you finish moving all your furniture to the new place over the weekend? B: Yes, but it was {{BLANK}}, because the building has no elevator and we had to carry the heavy sofa and the bookshelves up to the fifth floor by ourselves.",
    "cn": "A：你今天早上看起來好累；你週末把所有家具都搬到新家了嗎？ B：搬完了，但真是【累死人了】，因為那棟大樓沒有電梯，我們得自己把很重的沙發和書架搬上五樓。"
  },
  {
    "word": "move into",
    "pos": "v.phr.",
    "cn_def": "搬進；遷入",
    "en_def": "to start living in a new home",
    "sentence": "A: When will the builders finish painting and cleaning your new apartment so that you can stop paying rent at the old place? B: If everything goes according to plan, we will {{BLANK}} the new flat on the first of next month, just before our daughter starts school.",
    "cn": "A：工人什麼時候會完成新公寓的油漆和清潔，讓你不用再付舊房子的房租？ B：如果一切按照計畫，我們下個月一號就會【搬進】新公寓，剛好在女兒開學之前。"
  },
  {
    "word": "chill out",
    "pos": "v.phr.",
    "cn_def": "放鬆；休息一下",
    "en_def": "to relax completely",
    "sentence": "A: What do you usually do when you get home after a long day of meetings and phone calls with difficult customers? B: I like to {{BLANK}} on the sofa with a cup of tea and some quiet music, and I try not to check my work email until the next morning.",
    "cn": "A：在一整天開會和應付難搞的客戶電話之後，你回到家通常會做什麼？ B：我喜歡在沙發上【放鬆一下】，喝杯茶聽點輕音樂，而且我會盡量到隔天早上才去看工作信箱。"
  },
  {
    "word": "permanent address",
    "pos": "n.phr.",
    "cn_def": "永久地址；戶籍地址",
    "en_def": "the place where someone officially lives for a long time",
    "sentence": "A: You have moved three times this year for different projects, so which address should I write on your insurance form? B: Please use my {{BLANK}}, which is my parents' house in Taichung, because all my official letters still go there while I travel for work.",
    "cn": "A：你今年因為不同的專案搬了三次家，那我在你的保險表格上應該寫哪個地址？ B：請寫我的【永久地址】，就是我父母在台中的房子，因為我出差期間所有的正式信件都還是寄到那裡。"
  },
  {
    "word": "ideal home",
    "pos": "n.phr.",
    "cn_def": "理想的家",
    "en_def": "a home that is exactly right for someone",
    "sentence": "A: If money were not a problem, what kind of place would you like to live in after you retire from the company? B: My {{BLANK}} would be a small cottage near the beach with a large kitchen, a sunny reading room, and enough space for my grandchildren to visit.",
    "cn": "A：如果錢不是問題，你從公司退休後想住在什麼樣的地方？ B：我【理想的家】會是海邊的一間小屋，有個大廚房、一間陽光充足的閱讀室，還有足夠的空間讓孫子孫女來玩。"
  },
  {
    "word": "single room",
    "pos": "n.phr.",
    "cn_def": "單人房",
    "en_def": "a room for one person",
    "sentence": "A: Do you have to share a room with a colleague when the company sends us to the training center in Kaohsiung next week? B: No, this year every staff member will get a {{BLANK}} with its own small desk and bathroom, so everyone can rest well between the training sessions.",
    "cn": "A：下週公司派我們去高雄的訓練中心時，你需要和同事同住一間房嗎？ B：不用，今年每位員工都會分到一間【單人房】，有自己的小書桌和浴室，所以大家在課程之間都能好好休息。"
  },
  {
    "word": "spacious room",
    "pos": "n.phr.",
    "cn_def": "寬敞的房間",
    "en_def": "a room that is large and has plenty of space",
    "sentence": "A: Why did your manager recommend that hotel for the visiting clients from Japan instead of the cheaper one near the station? B: Each guest gets a {{BLANK}} with a large desk, a sofa, and a big window, so the clients can work comfortably and even hold small meetings there.",
    "cn": "A：為什麼你的經理推薦那家飯店給來訪的日本客戶，而不是車站附近比較便宜的那家？ B：每位房客都有一間【寬敞的房間】，有大書桌、沙發和大窗戶，所以客戶可以舒適地工作，甚至在那裡開小型會議。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "溫暖舒適的；舒適宜人的",
    "en_def": "warm, comfortable, and pleasant",
    "sentence": "A: Your living room is quite small, but why do all your guests say they enjoy spending time at your place in winter? B: I think it feels {{BLANK}} because of the soft lights, the thick carpet, and the warm blankets on the sofa, so everyone wants to stay and talk for hours.",
    "cn": "A：你的客廳挺小的，但為什麼你的客人都說冬天很喜歡待在你家？ B：我想是因為柔和的燈光、厚厚的地毯和沙發上的暖毯，讓人覺得很【溫暖舒適】，所以大家都想留下來聊上好幾個小時。"
  }
];

const MCQS = [
  {
    "q": "The landlord is _____ repairing the roof of the building. Tenants should keep their windows closed until the work is finished.",
    "options": [
      "currently",
      "uniquely",
      "fully-furnished",
      "cozy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many young workers say they cannot _____ the high rents downtown. As a result, they share flats with friends or live with parents.",
    "options": [
      "chill out",
      "afford",
      "move into",
      "spot"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The children played soccer in the _____ until it got dark. Their mother then called them inside to wash their hands for dinner.",
    "options": [
      "port",
      "layout",
      "yard",
      "suburb"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Grandfather likes to sit on the _____ in the evening. The roof keeps him dry while he watches the rain fall on the street.",
    "options": [
      "port",
      "layout",
      "outskirts",
      "veranda"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The new café is a popular _____ for local residents to meet. It sits on a quiet corner opposite the community park.",
    "options": [
      "yard",
      "layout",
      "spot",
      "suburb"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The factory was built on the _____ of town to reduce noise. Most workers drive there from the city center every morning.",
    "options": [
      "outskirts",
      "patio",
      "veranda",
      "layout"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The hotel lobby is _____ decorated with paper lanterns made by local artists. No other building in the city looks quite like it.",
    "options": [
      "currently",
      "exhausting",
      "troublesome",
      "uniquely"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Guests can enjoy their coffee on the stone _____ beside the pool. Umbrellas provide shade there during the hottest hours of the afternoon.",
    "options": [
      "suburb",
      "patio",
      "port",
      "outskirts"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Kaohsiung is the largest _____ in southern Taiwan. Thousands of containers are loaded onto cargo ships there every single day.",
    "options": [
      "port",
      "patio",
      "veranda",
      "yard"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The sales team held a _____ in the company parking lot. The manager grilled sausages while the staff played music and games.",
    "options": [
      "layout",
      "barbeque",
      "spot",
      "port"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The developer plans to build a twenty-story _____ near the station. It will contain more than two hundred small flats for young workers.",
    "options": [
      "back garden",
      "home comforts",
      "apartment block",
      "single room"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "My mother grows herbs and roses in our _____. She spends every Sunday morning there pulling weeds and watering the plants.",
    "options": [
      "permanent address",
      "hall of residence",
      "single room",
      "back garden"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "A _____ usually costs more than a flat of the same size. Owners enjoy more privacy because no walls are shared with neighbors.",
    "options": [
      "hall of residence",
      "permanent address",
      "detached house",
      "single room"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "After the twins were born, the couple moved to a quiet _____. Their new home is close to good schools and a large park.",
    "options": [
      "suburb",
      "port",
      "veranda",
      "patio"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "In many English cities, workers once lived in a _____ on long, narrow streets. Each home was joined to the houses on both sides.",
    "options": [
      "permanent address",
      "dream home",
      "hall of residence",
      "terraced house"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "After years of saving, the Lins finally bought their _____. It has a sunny kitchen, three bedrooms, and a view of the mountains.",
    "options": [
      "single room",
      "dream home",
      "permanent address",
      "hall of residence"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The architect changed the _____ of the office to create more open space. Now the meeting rooms are all on the north side.",
    "options": [
      "layout",
      "outskirts",
      "barbeque",
      "port"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The old elevator has been _____ for months and breaks down every week. Residents have asked the building manager to replace it.",
    "options": [
      "spacious",
      "troublesome",
      "cozy",
      "fully-furnished"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company provides a _____ apartment for new overseas staff. Employees only need to bring their clothes and personal items.",
    "options": [
      "troublesome",
      "exhausting",
      "fully-furnished",
      "uniquely"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "First-year students are guaranteed a place in a _____ on campus. Each building has a common kitchen and a laundry room.",
    "options": [
      "back garden",
      "dream home",
      "home comforts",
      "hall of residence"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Travelers on long business trips often miss their _____. A familiar pillow and home-cooked meals are hard to find in hotels.",
    "options": [
      "apartment block",
      "terraced house",
      "home comforts",
      "single room"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "We are throwing a _____ next Saturday to celebrate our new apartment. Please bring a dish to share with the other guests.",
    "options": [
      "house-warming party",
      "permanent address",
      "terraced house",
      "spacious room"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Carrying boxes up six floors in the summer heat was _____. Everyone needed a long rest and plenty of water afterward.",
    "options": [
      "cozy",
      "spacious",
      "fully-furnished",
      "exhausting"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The new tenants plan to _____ the apartment at the end of the month. The painters must therefore finish the work by then.",
    "options": [
      "afford",
      "move into",
      "chill out",
      "spot"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "After the busy conference, the staff went to the beach to _____. Nobody talked about work for the rest of the weekend.",
    "options": [
      "chill out",
      "afford",
      "move into",
      "spot"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Please write your _____ on the application form, not a temporary one. The bank will send your new card to that location.",
    "options": [
      "dream home",
      "permanent address",
      "back garden",
      "single room"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The magazine asked readers to describe their _____. Most people wanted a quiet house with a garden and plenty of natural light.",
    "options": [
      "hall of residence",
      "apartment block",
      "ideal home",
      "single room"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The guest asked for a _____ because she was traveling alone. The receptionist gave her a key to a quiet room on the fifth floor.",
    "options": [
      "back garden",
      "terraced house",
      "home comforts",
      "single room"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The conference was held in a _____ with tall windows and plenty of seats. All one hundred guests could sit and move around easily.",
    "options": [
      "home comforts",
      "back garden",
      "spacious room",
      "permanent address"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The small café feels warm and _____ on cold winter evenings. Soft lights and thick cushions make customers want to stay longer.",
    "options": [
      "cozy",
      "exhausting",
      "troublesome",
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
    "en_def": "a covered area with a floor along the outside of a house",
    "cn_def": "陽台；走廊（有頂的）"
  },
  "spot": {
    "pos": "n.",
    "en_def": "a particular place",
    "cn_def": "地點；處所"
  },
  "outskirts": {
    "pos": "n.",
    "en_def": "the outer areas of a town or city",
    "cn_def": "郊區；市郊"
  },
  "uniquely": {
    "pos": "adv.",
    "en_def": "in a special way that is not like anything else",
    "cn_def": "獨特地；獨一無二地"
  },
  "patio": {
    "pos": "n.",
    "en_def": "a flat area with a hard floor next to a house, used for sitting outside",
    "cn_def": "露台；天井"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or city with a harbor where ships load and unload",
    "cn_def": "港口；港市"
  },
  "barbeque": {
    "pos": "n.",
    "en_def": "a meal or party where food is cooked outdoors over a fire",
    "cn_def": "烤肉；烤肉聚會"
  },
  "apartment block": {
    "pos": "n.phr.",
    "en_def": "a large building divided into many separate flats",
    "cn_def": "公寓大樓"
  },
  "back garden": {
    "pos": "n.phr.",
    "en_def": "a garden behind a house",
    "cn_def": "後花園；後院"
  },
  "detached house": {
    "pos": "n.phr.",
    "en_def": "a house that stands alone and is not joined to another house",
    "cn_def": "獨棟房屋"
  },
  "suburb": {
    "pos": "n.",
    "en_def": "an area where people live outside the center of a city",
    "cn_def": "郊區；近郊住宅區"
  },
  "terraced house": {
    "pos": "n.phr.",
    "en_def": "one of a row of houses joined together by their side walls",
    "cn_def": "連棟房屋；排屋"
  },
  "dream home": {
    "pos": "n.phr.",
    "en_def": "the perfect house that someone has always wanted",
    "cn_def": "夢想中的家"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way the rooms and parts of a place are arranged",
    "cn_def": "格局；布局"
  },
  "troublesome": {
    "pos": "adj.",
    "en_def": "causing problems or worry again and again",
    "cn_def": "麻煩的；令人頭痛的"
  },
  "fully-furnished": {
    "pos": "adj.",
    "en_def": "having all the furniture needed already in it",
    "cn_def": "附全套家具的"
  },
  "hall of residence": {
    "pos": "n.phr.",
    "en_def": "a building where university students live",
    "cn_def": "大學學生宿舍"
  },
  "home comforts": {
    "pos": "n.phr.",
    "en_def": "the things that make life at home pleasant and easy",
    "cn_def": "家中的舒適享受"
  },
  "house-warming party": {
    "pos": "n.phr.",
    "en_def": "a party for friends after moving into a new home",
    "cn_def": "喬遷派對；暖屋派對"
  },
  "exhausting": {
    "pos": "adj.",
    "en_def": "making you feel extremely tired",
    "cn_def": "令人筋疲力盡的"
  },
  "move into": {
    "pos": "v.phr.",
    "en_def": "to start living in a new home",
    "cn_def": "搬進；遷入"
  },
  "chill out": {
    "pos": "v.phr.",
    "en_def": "to relax completely",
    "cn_def": "放鬆；休息一下"
  },
  "permanent address": {
    "pos": "n.phr.",
    "en_def": "the place where someone officially lives for a long time",
    "cn_def": "永久地址；戶籍地址"
  },
  "ideal home": {
    "pos": "n.phr.",
    "en_def": "a home that is exactly right for someone",
    "cn_def": "理想的家"
  },
  "single room": {
    "pos": "n.phr.",
    "en_def": "a room for one person",
    "cn_def": "單人房"
  },
  "spacious room": {
    "pos": "n.phr.",
    "en_def": "a room that is large and has plenty of space",
    "cn_def": "寬敞的房間"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable, and pleasant",
    "cn_def": "溫暖舒適的；舒適宜人的"
  }
};

const EXTRA_GLOSSES = {};
