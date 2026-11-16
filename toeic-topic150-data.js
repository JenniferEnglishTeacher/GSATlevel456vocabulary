// Topic 150 Quiz Data: Furniture 家具
// Source word list: https://www.examword.com/group-topic/furniture — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T150 - Furniture 家具",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "chair",
    "pos": "n.",
    "cn_def": "椅子",
    "en_def": "a seat for one person with a back and usually four legs",
    "sentence": "A: The new intern will start working in our accounting department on Monday, so is there anything we still need to prepare for her desk? B: Yes, we should order a comfortable office {{BLANK}} with good back support, because she will be sitting in front of the computer for most of the day.",
    "cn": "A：新實習生星期一要開始在我們的會計部門工作，她的座位還有什麼需要準備的嗎？ B：有，我們應該訂一張有良好背部支撐、坐起來舒服的辦公【椅子】，因為她一天大部分時間都會坐在電腦前面。"
  },
  {
    "word": "table",
    "pos": "n.",
    "cn_def": "桌子",
    "en_def": "a piece of furniture with a flat top and legs, used for eating or working",
    "sentence": "A: How many people have confirmed that they are coming to the client dinner at the Italian restaurant on Friday evening, and have you booked a place yet? B: Twelve guests have replied so far, so I reserved a long {{BLANK}} near the window where everyone can sit together and talk easily.",
    "cn": "A：有多少人已確認會來參加星期五晚上在義大利餐廳舉行的客戶晚宴？你訂位了嗎？ B：目前有十二位客人回覆了，所以我在窗邊訂了一張長【桌子】，讓大家可以坐在一起輕鬆聊天。"
  },
  {
    "word": "desk",
    "pos": "n.",
    "cn_def": "書桌；辦公桌",
    "en_def": "a table for working or studying, often with drawers",
    "sentence": "A: I heard that the marketing team is moving to the third floor next week, but do you know where the new graphic designer is going to sit? B: The office manager said she will have the corner {{BLANK}} next to the big window, because she needs plenty of natural light for her design work.",
    "cn": "A：我聽說行銷團隊下週要搬到三樓，你知道新來的平面設計師要坐哪裡嗎？ B：辦公室經理說她會坐在大窗戶旁邊那張角落的【辦公桌】，因為她的設計工作需要充足的自然光。"
  },
  {
    "word": "sofa",
    "pos": "n.",
    "cn_def": "沙發",
    "en_def": "a long, soft seat with a back and arms for two or more people",
    "sentence": "A: The hotel lobby looks much more welcoming since the renovation last month, but what did the manager change to make guests feel more relaxed while waiting? B: She replaced the old hard benches with a large leather {{BLANK}} and several soft cushions, so tired travelers can sit comfortably while they wait to check in.",
    "cn": "A：自從上個月整修後，飯店大廳看起來親切多了，經理改了什麼讓等候的客人感覺更放鬆？ B：她把舊的硬長椅換成一張大型皮【沙發】和幾個軟墊，讓疲累的旅客在等候辦理入住時可以舒服地坐著。"
  },
  {
    "word": "couch",
    "pos": "n.",
    "cn_def": "長沙發；睡椅",
    "en_def": "a long comfortable seat for more than one person; a sofa",
    "sentence": "A: Our cousin is visiting from Kaohsiung this weekend for a job interview, but we don't have a guest room, so where do you think he can sleep? B: He can sleep on the {{BLANK}} in the living room, because it is long and soft enough, and I will put some clean sheets and a pillow on it tonight.",
    "cn": "A：我們的表哥這個週末要從高雄來參加工作面試，但我們沒有客房，你覺得他可以睡哪裡？ B：他可以睡客廳的【長沙發】，因為它夠長也夠軟，我今晚會在上面放乾淨的床單和枕頭。"
  },
  {
    "word": "armchair",
    "pos": "n.",
    "cn_def": "扶手椅",
    "en_def": "a comfortable chair with side supports for your arms",
    "sentence": "A: The library wants to create a quiet reading corner for older visitors who come every morning to read the newspapers, so what kind of seating should we buy? B: I suggest buying a few soft {{BLANK}} pieces with high backs and wide arms, because older readers can rest their elbows and stand up from them more easily.",
    "cn": "A：圖書館想為每天早上來看報紙的年長訪客打造一個安靜的閱讀角落，我們該買什麼樣的座椅？ B：我建議買幾張高椅背、寬扶手的軟【扶手椅】，因為年長讀者可以把手肘靠在上面，起身時也比較容易。"
  },
  {
    "word": "stool",
    "pos": "n.",
    "cn_def": "凳子；高腳椅",
    "en_def": "a seat without a back or arms, usually for one person",
    "sentence": "A: The new coffee shop near the train station is very small, so how did the owner manage to fit in enough seats for all the morning commuters? B: He installed a narrow counter along the window and put a tall {{BLANK}} in front of it every half meter, so customers can sit quickly and drink their coffee.",
    "cn": "A：火車站附近那家新咖啡店很小，老闆是怎麼塞進足夠的座位給所有早上通勤的人？ B：他沿著窗戶裝了一張窄長的吧檯，每隔半公尺就在前面放一張高【凳子】，讓客人可以很快坐下來喝咖啡。"
  },
  {
    "word": "bench",
    "pos": "n.",
    "cn_def": "長椅；長凳",
    "en_def": "a long seat for several people, often made of wood and found outdoors",
    "sentence": "A: The city government is improving the park next to our office building, but what changes will they make for the workers who eat lunch outside every day? B: They plan to put a wooden {{BLANK}} under each big tree along the path, so office workers can sit in the shade and enjoy their lunch.",
    "cn": "A：市政府正在改善我們辦公大樓旁邊的公園，他們會為每天在戶外吃午餐的上班族做哪些改變？ B：他們打算在步道旁每棵大樹下放一張木製【長椅】，讓上班族可以坐在樹蔭下享用午餐。"
  },
  {
    "word": "cabinet",
    "pos": "n.",
    "cn_def": "櫥櫃；檔案櫃",
    "en_def": "a piece of furniture with shelves or drawers and doors, used for storing things",
    "sentence": "A: The auditors are coming next Tuesday to check our financial records from last year, so where should I keep all the important documents until then? B: Please put them in the metal filing {{BLANK}} in the manager's office and lock it every evening, because those papers contain private information about our clients.",
    "cn": "A：審計人員下週二要來檢查我們去年的財務紀錄，在那之前我該把所有重要文件放在哪裡？ B：請把它們放進經理辦公室裡的金屬檔案【櫃】，並且每天晚上上鎖，因為那些文件含有客戶的私人資料。"
  },
  {
    "word": "cupboard",
    "pos": "n.",
    "cn_def": "碗櫥；櫥櫃",
    "en_def": "a piece of furniture or a small space with a door and shelves, used for keeping dishes, food, etc.",
    "sentence": "A: I want to make some tea for the visitors from the Japanese company who are waiting in the meeting room, but where are the clean cups kept? B: They are in the kitchen {{BLANK}} above the sink, on the second shelf, and you can also find the tea bags and sugar next to them.",
    "cn": "A：我想為在會議室等候的日本公司訪客泡些茶，乾淨的杯子放在哪裡？ B：在水槽上方的廚房【碗櫥】裡第二層，你也可以在旁邊找到茶包和糖。"
  },
  {
    "word": "wardrobe",
    "pos": "n.",
    "cn_def": "衣櫥；衣櫃",
    "en_def": "a tall cupboard in which you hang your clothes",
    "sentence": "A: The guests at our hotel often complain that there is not enough space for their suits and dresses during long business trips, so what can we do about it? B: We could replace the small closets with a bigger {{BLANK}} in every room, so guests can hang all their clothes neatly and keep them free of wrinkles.",
    "cn": "A：我們飯店的客人常抱怨長途出差時沒有足夠空間放西裝和洋裝，我們能怎麼做？ B：我們可以把每間房的小衣櫥換成更大的【衣櫃】，讓客人能把所有衣服整齊掛好，不會起皺。"
  },
  {
    "word": "dresser",
    "pos": "n.",
    "cn_def": "梳妝台；五斗櫃",
    "en_def": "a piece of bedroom furniture with drawers for clothes, often with a mirror on top",
    "sentence": "A: My sister is moving into her first apartment near the hospital where she works, but the bedroom has no closet, so where will she keep her folded clothes? B: She bought a white wooden {{BLANK}} with six deep drawers and a mirror on top, so she can store her clothes and get ready for work every morning.",
    "cn": "A：我妹妹要搬進她工作的醫院附近的第一間公寓，但臥室沒有衣櫥，她要把摺好的衣服放哪裡？ B：她買了一個有六個深抽屜、上面附鏡子的白色木製【五斗櫃】，這樣她既能收納衣服，每天早上也能在那裡準備上班。"
  },
  {
    "word": "bookshelf",
    "pos": "n.",
    "cn_def": "書架",
    "en_def": "a shelf or set of shelves for holding books",
    "sentence": "A: Our training center has received over two hundred new business books from a generous donor, but where are we going to display them for the staff? B: We will put a tall {{BLANK}} against the wall in the break room, so employees can borrow a book easily and read during their lunch break.",
    "cn": "A：我們的訓練中心從一位慷慨的捐贈者那裡收到兩百多本新的商業書籍，我們要把它們陳列在哪裡給員工看？ B：我們會在休息室靠牆放一個高【書架】，讓員工可以輕鬆借書並在午休時閱讀。"
  },
  {
    "word": "bed",
    "pos": "n.",
    "cn_def": "床",
    "en_def": "a piece of furniture for sleeping on",
    "sentence": "A: I'm booking a hotel room for the two engineers who are going to Singapore for the installation project, so what kind of room should I reserve? B: Please ask for a room with a separate {{BLANK}} for each person, because they will work long hours and both need a good night's sleep.",
    "cn": "A：我在為要去新加坡執行安裝專案的兩位工程師訂飯店房間，我該訂哪種房型？ B：請要一間每人各有一張獨立【床】的房間，因為他們要長時間工作，兩人都需要好好睡一覺。"
  },
  {
    "word": "mattress",
    "pos": "n.",
    "cn_def": "床墊",
    "en_def": "the large soft part of a bed that you lie on",
    "sentence": "A: Several guests have written online reviews saying they woke up with back pain after staying at our hotel, so what should we do first to solve the problem? B: We should replace the old {{BLANK}} in every room with a firmer one, because the current ones are over ten years old and too soft.",
    "cn": "A：好幾位客人在網路評論中說住了我們飯店後醒來背痛，我們應該先做什麼來解決這個問題？ B：我們應該把每間房的舊【床墊】換成較硬的，因為現有的已經用了十多年，太軟了。"
  },
  {
    "word": "headboard",
    "pos": "n.",
    "cn_def": "床頭板",
    "en_def": "the upright board at the head end of a bed",
    "sentence": "A: The designer wants the guest rooms to look more luxurious after the renovation, but our budget is limited, so what is a cheap way to improve the beds? B: We could add a tall padded {{BLANK}} behind each bed, because it makes the room look elegant and gives guests something soft to lean against while reading.",
    "cn": "A：設計師希望客房整修後看起來更豪華，但我們預算有限，有什麼便宜的方法可以改善床的樣子？ B：我們可以在每張床後面加一片高的軟墊【床頭板】，因為它讓房間看起來優雅，也讓客人看書時有柔軟的地方可以靠。"
  },
  {
    "word": "nightstand",
    "pos": "n.",
    "cn_def": "床頭櫃；床頭桌",
    "en_def": "a small table beside a bed",
    "sentence": "A: Many business travelers have asked for a place to charge their phones near the bed, so how can we solve this without doing a lot of construction work? B: We can buy a new {{BLANK}} for each room with a built-in USB charger and a small lamp, so guests can charge their phones beside them overnight.",
    "cn": "A：很多商務旅客要求床邊要有地方可以幫手機充電，我們怎麼在不大興土木的情況下解決這個問題？ B：我們可以為每個房間買一個內建USB充電器和小檯燈的新【床頭櫃】，讓客人整晚都能在身邊幫手機充電。"
  },
  {
    "word": "drawer",
    "pos": "n.",
    "cn_def": "抽屜",
    "en_def": "a box-shaped part of a desk or cabinet that slides in and out for storing things",
    "sentence": "A: I need to sign the delivery form for the package that just arrived at the front desk, but I can't find a pen anywhere on my desk, so do you have one? B: There are plenty of pens in the top {{BLANK}} of my desk, so please take one, and you can also borrow my stapler if you need it.",
    "cn": "A：我需要在剛送到櫃台的包裹的簽收單上簽名，但我桌上到處都找不到筆，你有嗎？ B：我桌子最上面的【抽屜】裡有很多筆，請拿一支，如果需要的話你也可以借我的釘書機。"
  },
  {
    "word": "shelf",
    "pos": "n.",
    "cn_def": "架子；擱板",
    "en_def": "a flat board fixed to a wall or in a cupboard for putting things on",
    "sentence": "A: The new printer paper arrived this morning, but the storage room is already very crowded, so where should I put the twenty boxes? B: Please put them on the empty {{BLANK}} at the back of the storage room, but make sure the heavy boxes go at the bottom so nothing falls on anyone.",
    "cn": "A：新的影印紙今天早上到了，但儲藏室已經很擠了，這二十箱我該放哪裡？ B：請放在儲藏室後面那個空的【架子】上，但一定要把重的箱子放在最下面，這樣才不會有東西掉下來砸到人。"
  },
  {
    "word": "rack",
    "pos": "n.",
    "cn_def": "架子（衣架、置物架）",
    "en_def": "a frame with bars or hooks for holding or hanging things",
    "sentence": "A: It's raining heavily today, and many visitors are coming to the trade fair with wet umbrellas and coats, so how can we keep the entrance hall dry and safe? B: Let's put a coat {{BLANK}} and an umbrella stand right next to the entrance, so guests can hang their wet things before they walk in.",
    "cn": "A：今天雨下得很大，很多訪客帶著濕雨傘和外套來參加商展，我們要怎麼保持入口大廳乾燥又安全？ B：我們在入口旁邊放一個外套【架】和傘架，讓客人進來之前先把濕的東西掛好。"
  },
  {
    "word": "counter",
    "pos": "n.",
    "cn_def": "櫃台；流理台",
    "en_def": "a long flat surface in a shop, bank or kitchen where customers are served or food is prepared",
    "sentence": "A: The bank branch downtown is always crowded at lunchtime, and customers often wait more than thirty minutes, so what is the manager planning to do about it? B: She plans to open a second service {{BLANK}} during busy hours and add two more tellers, so customers can deposit money and leave more quickly.",
    "cn": "A：市中心的銀行分行午餐時間總是很擁擠，客戶常常要等超過三十分鐘，經理打算怎麼處理？ B：她打算在尖峰時段開設第二個服務【櫃台】並增加兩名櫃員，讓客戶能更快存完錢離開。"
  },
  {
    "word": "folding",
    "pos": "adj.",
    "cn_def": "可摺疊的",
    "en_def": "able to be bent or closed so that it becomes smaller and easier to carry or store",
    "sentence": "A: We are holding the company's outdoor training day on the lawn next month, but we don't have enough seats for all two hundred employees, so what should we do? B: We can rent some {{BLANK}} chairs from an event company, because they are light, easy to carry outside, and simple to store away after the event.",
    "cn": "A：我們下個月要在草坪上舉辦公司的戶外訓練日，但座位不夠兩百名員工坐，我們該怎麼辦？ B：我們可以向活動公司租一些【可摺疊的】椅子，因為它們很輕、容易搬到外面，活動結束後也很容易收起來。"
  },
  {
    "word": "wooden",
    "pos": "adj.",
    "cn_def": "木製的",
    "en_def": "made of wood",
    "sentence": "A: The owner of the new bakery wants customers to feel warm and comfortable when they come in, so what kind of furniture did the designer choose for the shop? B: The designer chose simple {{BLANK}} tables and chairs in a light brown color, because natural materials make the small shop feel cozy and friendly.",
    "cn": "A：新麵包店的老闆希望顧客進門時感到溫暖舒適，設計師為店裡選了什麼樣的家具？ B：設計師選了淺棕色的簡單【木製的】桌椅，因為天然材質讓這家小店感覺溫馨又親切。"
  },
  {
    "word": "metal",
    "pos": "adj.",
    "cn_def": "金屬（製）的",
    "en_def": "made of metal",
    "sentence": "A: The factory needs new storage units for its heavy tools and machine parts, and the old plastic ones keep breaking, so what should the purchasing manager order? B: He should order strong {{BLANK}} shelves that can hold a lot of weight, because they will last much longer and won't break under heavy equipment.",
    "cn": "A：工廠需要新的收納設備來放重型工具和機器零件，舊的塑膠架一直壞掉，採購經理應該訂什麼？ B：他應該訂可以承重很多的堅固【金屬】架，因為它們會用得更久，放了重型設備也不會壞。"
  },
  {
    "word": "upholstered",
    "pos": "adj.",
    "cn_def": "有軟墊布套的；包覆布料的",
    "en_def": "covered with soft material and cloth, as on chairs and sofas",
    "sentence": "A: The waiting room at the dental clinic feels cold and uncomfortable, and patients are already nervous, so how can we make them feel more relaxed? B: We could replace the hard plastic seats with {{BLANK}} chairs covered in soft blue fabric, so patients feel more comfortable while they wait for their appointments.",
    "cn": "A：牙醫診所的候診室感覺冰冷又不舒服，病人本來就很緊張了，我們要怎麼讓他們感覺更放鬆？ B：我們可以把硬塑膠椅換成包著柔軟藍色布料的【軟墊】椅，讓病人在等候看診時感覺更舒服。"
  },
  {
    "word": "adjustable",
    "pos": "adj.",
    "cn_def": "可調整的",
    "en_def": "able to be changed in height, size or position",
    "sentence": "A: Several employees in the design department have complained about neck and back pain after sitting at their computers all day, so what does the health and safety officer suggest? B: She suggests buying {{BLANK}} desks that can move up and down, so workers can stand for part of the day and change their position often.",
    "cn": "A：設計部門有好幾位員工抱怨整天坐在電腦前後脖子和背部疼痛，職業安全衛生人員有什麼建議？ B：她建議買可以升降的【可調整的】桌子，讓員工一天中有部分時間站著工作，並經常變換姿勢。"
  },
  {
    "word": "compact",
    "pos": "adj.",
    "cn_def": "小巧的；緊湊的",
    "en_def": "small and using little space",
    "sentence": "A: Our company is opening a small branch office in a busy part of Taipei where rent is very expensive, so how can we make the space work for six people? B: We should choose {{BLANK}} furniture, such as narrow desks and stackable chairs, because it takes up less room and still gives everyone a place to work.",
    "cn": "A：我們公司要在台北租金很貴的熱鬧地區開設一間小分公司，我們要怎麼讓空間容納六個人？ B：我們應該選擇【小巧的】家具，例如窄書桌和可疊放的椅子，因為它們佔用空間較少，又能讓每個人都有地方工作。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；新式的",
    "en_def": "of the present time; using new styles and ideas",
    "sentence": "A: The architecture firm wants to impress international clients when they visit the new headquarters, so what style did they choose for the reception area? B: They chose a {{BLANK}} style with clean lines, glass tables, and white leather chairs, because it shows clients that the company is creative and up to date.",
    "cn": "A：建築事務所希望國際客戶參觀新總部時留下深刻印象，他們為接待區選了什麼風格？ B：他們選了線條簡潔、搭配玻璃桌和白色皮椅的【現代】風格，因為這讓客戶看到公司富有創意又跟得上潮流。"
  },
  {
    "word": "antique",
    "pos": "adj.",
    "cn_def": "古董的；古老的",
    "en_def": "old and often valuable because of its age and quality",
    "sentence": "A: The manager of the historic hotel downtown wants guests to feel the history of the building as soon as they walk in, so what did she put in the lobby? B: She placed an {{BLANK}} desk from the 1920s near the entrance, and guests often take photos of it because the wood carvings are so beautiful.",
    "cn": "A：市中心那家歷史悠久飯店的經理希望客人一進門就感受到建築的歷史，她在大廳放了什麼？ B：她在入口附近放了一張1920年代的【古董】書桌，客人常常拍照，因為上面的木雕非常漂亮。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝",
    "en_def": "to put the parts of something together",
    "sentence": "A: The new office desks were delivered this morning in flat boxes, but the furniture company says installation costs extra, so who is going to put them together? B: Two people from our maintenance team will {{BLANK}} them this afternoon using the instructions in the boxes, so the new staff can use them tomorrow.",
    "cn": "A：新辦公桌今天早上以扁平紙箱送達，但家具公司說安裝要另外收費，誰要把它們組起來？ B：我們維修組的兩個人今天下午會照著箱子裡的說明書【組裝】，讓新同事明天就能使用。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "排列；布置",
    "en_def": "to put things in a particular order or position",
    "sentence": "A: We are expecting about fifty people for the product training session tomorrow morning, so how should we set up the chairs in the main conference room? B: Please {{BLANK}} the chairs in rows facing the screen, and leave a wide path in the middle so people can walk to their seats easily.",
    "cn": "A：明天早上的產品訓練課程預計大約有五十人參加，我們應該怎麼在主會議室擺放椅子？ B：請把椅子面向螢幕【排列】成一排排，中間留一條寬走道，讓大家能輕鬆走到座位。"
  },
  {
    "word": "polish",
    "pos": "v.",
    "cn_def": "擦亮；磨光",
    "en_def": "to rub a surface to make it smooth and shiny",
    "sentence": "A: The company president is coming to visit our branch office on Friday, and the meeting room furniture looks dull and dusty, so what should the cleaning staff do? B: They should {{BLANK}} the long wooden table and the cabinets on Thursday evening, so everything looks clean and shiny when the president arrives.",
    "cn": "A：公司總裁星期五要來視察我們分公司，會議室的家具看起來黯淡又有灰塵，清潔人員該做什麼？ B：他們應該在星期四晚上把長木桌和櫃子【擦亮】，這樣總裁到的時候一切看起來乾淨又閃亮。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；布置",
    "en_def": "to make something look more attractive by adding things to it",
    "sentence": "A: The company's twentieth anniversary party will be held in the staff cafeteria next Friday evening, but it looks very plain, so how can we make it feel special? B: We can {{BLANK}} the room with balloons, flowers, and colorful lights, and put photos from the company's history on the walls for everyone to enjoy.",
    "cn": "A：公司二十週年派對下週五晚上要在員工餐廳舉行，但那裡看起來很單調，我們要怎麼讓它感覺特別？ B：我們可以用氣球、鮮花和彩燈【裝飾】這個空間，再把公司歷年照片貼在牆上給大家欣賞。"
  },
  {
    "word": "rearrange",
    "pos": "v.",
    "cn_def": "重新排列；重新布置",
    "en_def": "to change the position or order of things",
    "sentence": "A: Our sales team has grown from five to nine people this year, and the office now feels crowded and difficult to move around in, so what can we do without moving? B: We could {{BLANK}} the desks into two long rows by the windows, which would create more open space in the middle of the room.",
    "cn": "A：我們的業務團隊今年從五人增加到九人，辦公室現在感覺很擠，走動也不方便，不搬家的話我們能怎麼做？ B：我們可以把桌子【重新排列】成靠窗的兩長排，這樣房間中間就會空出更多空間。"
  }
];

const MCQS = [
  {
    "q": "Please bring an extra _____ from the meeting room for our visitor. All the seats in this office are already taken.",
    "options": [
      "chair",
      "shelf",
      "drawer",
      "rack"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The restaurant could not seat our group of fifteen together. We were given two smaller tables instead of one long _____.",
    "options": [
      "sofa",
      "stool",
      "table",
      "wardrobe"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Each new employee receives a laptop and a phone on the first day. Their _____ is ready with a lamp and a nameplate.",
    "options": [
      "mattress",
      "desk",
      "headboard",
      "couch"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The hotel suite includes a large living area. Guests can relax on the leather _____ while watching the city lights.",
    "options": [
      "counter",
      "cabinet",
      "drawer",
      "sofa"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After the long flight, Kevin fell asleep on the _____ in his living room. He did not even take off his shoes.",
    "options": [
      "shelf",
      "rack",
      "couch",
      "dresser"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Grandfather likes to rest his arms while reading the newspaper. He always sits in his old leather _____ by the fireplace.",
    "options": [
      "armchair",
      "bench",
      "stool",
      "counter"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The cafe has no tables, only a long counter by the window. Customers sit on a tall _____ and watch people walk by.",
    "options": [
      "wardrobe",
      "cabinet",
      "bookshelf",
      "stool"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The city has placed a new wooden _____ at every bus stop. Passengers can now sit while waiting for their buses.",
    "options": [
      "dresser",
      "bench",
      "nightstand",
      "headboard"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "All employee records must be stored safely. Please keep them in the locked filing _____ in the human resources office.",
    "options": [
      "cabinet",
      "bench",
      "couch",
      "stool"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The coffee mugs are kept in the kitchen. You will find them in the _____ above the sink, next to the plates.",
    "options": [
      "bench",
      "mattress",
      "cupboard",
      "sofa"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The hotel room has a large _____ with plenty of hangers. Guests can hang their suits and dresses there during their stay.",
    "options": [
      "bench",
      "wardrobe",
      "stool",
      "counter"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "She keeps her socks and sweaters neatly folded in the bedroom. Her white _____ has six drawers and a mirror on top.",
    "options": [
      "bench",
      "stool",
      "couch",
      "dresser"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The library added a tall _____ to the children's section. It holds more than three hundred picture books.",
    "options": [
      "mattress",
      "nightstand",
      "bookshelf",
      "couch"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The hostel offers rooms with four bunk beds. Each guest pays for one _____ and shares the bathroom with others.",
    "options": [
      "bed",
      "cabinet",
      "desk",
      "rack"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Many customers wake up with back pain after a poor night's sleep. Our new memory foam _____ offers better support.",
    "options": [
      "counter",
      "bench",
      "stool",
      "mattress"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The bed comes with a padded _____ in dark gray fabric. Guests can lean against it comfortably while reading in bed.",
    "options": [
      "counter",
      "headboard",
      "cupboard",
      "bench"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "He always leaves his glasses and phone beside the bed. There is a small lamp on his _____ as well.",
    "options": [
      "nightstand",
      "wardrobe",
      "bench",
      "sofa"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The spare office keys are kept in the reception area. They are in the top _____ of the front desk.",
    "options": [
      "bench",
      "couch",
      "drawer",
      "mattress"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The heavy boxes should not be placed up high. Please put them on the bottom _____ of the storage unit.",
    "options": [
      "sofa",
      "shelf",
      "couch",
      "stool"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Visitors can leave their bags and coats at the entrance. A coat _____ is provided next to the reception desk.",
    "options": [
      "mattress",
      "sofa",
      "headboard",
      "rack"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Customers should pay for their items before leaving the store. The cashier is waiting at the front _____.",
    "options": [
      "mattress",
      "headboard",
      "counter",
      "nightstand"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "We need extra seats for the outdoor event. The _____ chairs can be stored easily in the closet afterward.",
    "options": [
      "folding",
      "antique",
      "upholstered",
      "modern"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The restaurant uses natural materials in its design. All the tables are _____ and made from local oak trees.",
    "options": [
      "adjustable",
      "upholstered",
      "compact",
      "wooden"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The warehouse needs strong storage for heavy tools. The manager ordered _____ shelves that will not bend or break.",
    "options": [
      "upholstered",
      "metal",
      "antique",
      "folding"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The office chairs have soft seats covered in gray fabric. These _____ chairs are much more comfortable than plastic ones.",
    "options": [
      "upholstered",
      "metal",
      "folding",
      "wooden"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Employees can raise or lower their desks with a button. These _____ desks help reduce back pain from sitting all day.",
    "options": [
      "antique",
      "wooden",
      "adjustable",
      "upholstered"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The apartment in the city center is quite small. The owner bought _____ furniture that does not take up much space.",
    "options": [
      "antique",
      "compact",
      "upholstered",
      "wooden"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The collector paid a high price for the old desk. The _____ piece was made more than one hundred years ago.",
    "options": [
      "adjustable",
      "compact",
      "folding",
      "antique"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The new bookcase arrived in a flat box with many parts. It took two hours to _____ it using the instructions.",
    "options": [
      "decorate",
      "polish",
      "assemble",
      "rearrange"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The hotel staff will _____ the chairs in rows before the conference begins. Each row will have twenty seats facing the stage.",
    "options": [
      "arrange",
      "assemble",
      "polish",
      "decorate"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "chair": {
    "pos": "n.",
    "en_def": "a seat for one person with a back and usually four legs",
    "cn_def": "椅子"
  },
  "table": {
    "pos": "n.",
    "en_def": "a piece of furniture with a flat top and legs, used for eating or working",
    "cn_def": "桌子"
  },
  "desk": {
    "pos": "n.",
    "en_def": "a table for working or studying, often with drawers",
    "cn_def": "書桌；辦公桌"
  },
  "sofa": {
    "pos": "n.",
    "en_def": "a long, soft seat with a back and arms for two or more people",
    "cn_def": "沙發"
  },
  "couch": {
    "pos": "n.",
    "en_def": "a long comfortable seat for more than one person; a sofa",
    "cn_def": "長沙發；睡椅"
  },
  "armchair": {
    "pos": "n.",
    "en_def": "a comfortable chair with side supports for your arms",
    "cn_def": "扶手椅"
  },
  "stool": {
    "pos": "n.",
    "en_def": "a seat without a back or arms, usually for one person",
    "cn_def": "凳子；高腳椅"
  },
  "bench": {
    "pos": "n.",
    "en_def": "a long seat for several people, often made of wood and found outdoors",
    "cn_def": "長椅；長凳"
  },
  "cabinet": {
    "pos": "n.",
    "en_def": "a piece of furniture with shelves or drawers and doors, used for storing things",
    "cn_def": "櫥櫃；檔案櫃"
  },
  "cupboard": {
    "pos": "n.",
    "en_def": "a piece of furniture or a small space with a door and shelves, used for keeping dishes, food, etc.",
    "cn_def": "碗櫥；櫥櫃"
  },
  "wardrobe": {
    "pos": "n.",
    "en_def": "a tall cupboard in which you hang your clothes",
    "cn_def": "衣櫥；衣櫃"
  },
  "dresser": {
    "pos": "n.",
    "en_def": "a piece of bedroom furniture with drawers for clothes, often with a mirror on top",
    "cn_def": "梳妝台；五斗櫃"
  },
  "bookshelf": {
    "pos": "n.",
    "en_def": "a shelf or set of shelves for holding books",
    "cn_def": "書架"
  },
  "bed": {
    "pos": "n.",
    "en_def": "a piece of furniture for sleeping on",
    "cn_def": "床"
  },
  "mattress": {
    "pos": "n.",
    "en_def": "the large soft part of a bed that you lie on",
    "cn_def": "床墊"
  },
  "headboard": {
    "pos": "n.",
    "en_def": "the upright board at the head end of a bed",
    "cn_def": "床頭板"
  },
  "nightstand": {
    "pos": "n.",
    "en_def": "a small table beside a bed",
    "cn_def": "床頭櫃；床頭桌"
  },
  "drawer": {
    "pos": "n.",
    "en_def": "a box-shaped part of a desk or cabinet that slides in and out for storing things",
    "cn_def": "抽屜"
  },
  "shelf": {
    "pos": "n.",
    "en_def": "a flat board fixed to a wall or in a cupboard for putting things on",
    "cn_def": "架子；擱板"
  },
  "rack": {
    "pos": "n.",
    "en_def": "a frame with bars or hooks for holding or hanging things",
    "cn_def": "架子（衣架、置物架）"
  },
  "counter": {
    "pos": "n.",
    "en_def": "a long flat surface in a shop, bank or kitchen where customers are served or food is prepared",
    "cn_def": "櫃台；流理台"
  },
  "folding": {
    "pos": "adj.",
    "en_def": "able to be bent or closed so that it becomes smaller and easier to carry or store",
    "cn_def": "可摺疊的"
  },
  "wooden": {
    "pos": "adj.",
    "en_def": "made of wood",
    "cn_def": "木製的"
  },
  "metal": {
    "pos": "adj.",
    "en_def": "made of metal",
    "cn_def": "金屬（製）的"
  },
  "upholstered": {
    "pos": "adj.",
    "en_def": "covered with soft material and cloth, as on chairs and sofas",
    "cn_def": "有軟墊布套的；包覆布料的"
  },
  "adjustable": {
    "pos": "adj.",
    "en_def": "able to be changed in height, size or position",
    "cn_def": "可調整的"
  },
  "compact": {
    "pos": "adj.",
    "en_def": "small and using little space",
    "cn_def": "小巧的；緊湊的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "of the present time; using new styles and ideas",
    "cn_def": "現代的；新式的"
  },
  "antique": {
    "pos": "adj.",
    "en_def": "old and often valuable because of its age and quality",
    "cn_def": "古董的；古老的"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to put the parts of something together",
    "cn_def": "組裝"
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to put things in a particular order or position",
    "cn_def": "排列；布置"
  },
  "polish": {
    "pos": "v.",
    "en_def": "to rub a surface to make it smooth and shiny",
    "cn_def": "擦亮；磨光"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make something look more attractive by adding things to it",
    "cn_def": "裝飾；布置"
  },
  "rearrange": {
    "pos": "v.",
    "en_def": "to change the position or order of things",
    "cn_def": "重新排列；重新布置"
  }
};

const EXTRA_GLOSSES = {};
