// Topic 92 Quiz Data: Cultural Place 文化場所
// Source word list: https://www.examword.com/group-topic/cultural-place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T92 - Cultural Place 文化場所",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "museum",
    "pos": "n.",
    "cn_def": "博物館",
    "en_def": "a building where people can see old, valuable or interesting objects",
    "sentence": "A: Where should we take the visiting engineers from Germany on Saturday afternoon after the factory tour ends? B: I think the science {{BLANK}} near the river would be perfect, because it has a large section on the history of machines, and the entrance is free for groups of ten or more.",
    "cn": "A：工廠參觀結束後，星期六下午我們該帶來訪的德國工程師去哪裡？ B：我覺得河邊的科學【博物館】會很適合，因為那裡有一大區介紹機器的歷史，而且十人以上的團體可以免費入場。"
  },
  {
    "word": "gallery",
    "pos": "n.",
    "cn_def": "美術館；畫廊",
    "en_def": "a room or building where works of art are shown",
    "sentence": "A: Have you decided where to hold the welcome party for our new clients from Singapore next Friday evening? B: Yes, we booked a modern art {{BLANK}} downtown, because the guests can walk around and look at paintings by local artists while they enjoy drinks and talk with our sales team.",
    "cn": "A：你決定好下週五晚上要在哪裡為新加坡來的新客戶舉辦歡迎派對了嗎？ B：決定了，我們訂了市中心一間現代【美術館】，因為客人可以一邊四處走走欣賞本地藝術家的畫作，一邊享用飲料並和我們的業務團隊聊天。"
  },
  {
    "word": "theater",
    "pos": "n.",
    "cn_def": "劇院",
    "en_def": "a building where plays and shows are performed",
    "sentence": "A: Why is the marketing team leaving the office so early this Thursday, when we still have a lot of work to finish? B: The company bought tickets for everyone to see a musical at the new {{BLANK}} on Park Avenue, as a reward for reaching our sales goal three months early.",
    "cn": "A：我們還有很多工作要完成，為什麼行銷團隊這個星期四這麼早就下班？ B：公司幫大家買了票，去公園大道上新開的【劇院】看一齣音樂劇，作為提早三個月達成銷售目標的獎勵。"
  },
  {
    "word": "cinema",
    "pos": "n.",
    "cn_def": "電影院",
    "en_def": "a building where people watch films",
    "sentence": "A: The shopping mall next to our office looks much busier than usual, so do you know what is happening there today? B: A large {{BLANK}} with twelve screens opened on the top floor this week, and many people are lining up to buy tickets for the new action film.",
    "cn": "A：我們辦公室旁邊的購物中心看起來比平常熱鬧得多，你知道今天那裡發生什麼事嗎？ B：本週頂樓開了一間有十二個影廳的大型【電影院】，很多人正在排隊買新上映動作片的票。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a place where people can borrow or read books",
    "sentence": "A: Where can the new interns study quietly for their certification exam during the lunch break, since the office is so noisy? B: The city {{BLANK}} across the street has free study rooms and fast Wi-Fi, and it also keeps many business books that they can borrow with a free card.",
    "cn": "A：辦公室這麼吵，新實習生午休時可以去哪裡安靜地準備認證考試？ B：對街的市立【圖書館】有免費的自習室和快速的無線網路，還有很多商業書籍，只要辦一張免費的借書證就能借閱。"
  },
  {
    "word": "monument",
    "pos": "n.",
    "cn_def": "紀念碑；紀念建築",
    "en_def": "a statue or building made to help people remember a person or event",
    "sentence": "A: What is that tall stone structure in the middle of the park that all the tour groups stop to take photos of? B: It is a {{BLANK}} built in 1920 to honor the workers who built the city's first railway, and a small sign beside it explains their story in four languages.",
    "cn": "A：公園中間那座所有旅行團都停下來拍照的高大石造建築是什麼？ B：那是一座建於1920年的【紀念碑】，用來紀念建造這座城市第一條鐵路的工人，旁邊有一塊小牌子用四種語言介紹他們的故事。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；文化資產",
    "en_def": "the history, traditions and old buildings that a country or group has had for many years",
    "sentence": "A: Why did the city council refuse the developer's plan to build a hotel on the old harbor site last month? B: The council said the old warehouses are an important part of the city's {{BLANK}}, so they must be protected and repaired instead of being knocked down for a modern building.",
    "cn": "A：上個月市議會為什麼拒絕開發商在舊港口用地蓋飯店的計畫？ B：議會表示那些舊倉庫是這座城市【文化遺產】的重要部分，所以必須加以保護和修繕，而不是拆掉改建成現代建築。"
  },
  {
    "word": "temple",
    "pos": "n.",
    "cn_def": "廟；寺廟",
    "en_def": "a building where people go to pray, especially in Asian religions",
    "sentence": "A: Our visitors from Canada want to see something special about local culture before they fly home on Sunday, so where should we take them? B: Let's take them to the old {{BLANK}} near the night market, where they can watch people light incense and learn about the gods that local families pray to.",
    "cn": "A：我們的加拿大訪客星期天搭機回國前，想看看一些特別的在地文化，我們該帶他們去哪裡？ B：我們帶他們去夜市附近那間古老的【廟宇】吧，他們可以在那裡看人們點香，並了解當地家庭所祭拜的神明。"
  },
  {
    "word": "church",
    "pos": "n.",
    "cn_def": "教堂",
    "en_def": "a building where Christians go to pray",
    "sentence": "A: Why are there so many people in formal clothes outside the old stone building on Main Street this morning? B: A couple is getting married in the {{BLANK}} at eleven o'clock, so the guests are waiting outside, and our café across the street has been very busy serving them coffee.",
    "cn": "A：今天早上主街上那棟古老石造建築外面為什麼有那麼多穿正式服裝的人？ B：有一對新人十一點要在【教堂】結婚，所以賓客在外面等候，我們對街的咖啡店一直忙著為他們送咖啡。"
  },
  {
    "word": "mosque",
    "pos": "n.",
    "cn_def": "清真寺",
    "en_def": "a building where Muslims go to pray",
    "sentence": "A: Is there anything we should know before we take the visiting delegation from Malaysia around the city tomorrow? B: Yes, some of them would like to stop at the {{BLANK}} near the train station for Friday prayers, so please plan a one-hour break around noon and choose a halal restaurant for lunch.",
    "cn": "A：明天帶馬來西亞來訪的代表團在市區參觀之前，我們有什麼需要知道的嗎？ B：有，他們之中有些人想在火車站附近的【清真寺】停留做星期五的禮拜，所以請在中午前後安排一小時的休息時間，並選一間清真餐廳吃午餐。"
  },
  {
    "word": "shrine",
    "pos": "n.",
    "cn_def": "神社；聖祠",
    "en_def": "a holy place built to honor a god or a special person",
    "sentence": "A: What did you enjoy most about your business trip to Kyoto, apart from the meetings with the suppliers? B: On the last morning I walked to a quiet {{BLANK}} in the hills, where hundreds of red gates lined the path, and it was the most peaceful hour of the whole busy week.",
    "cn": "A：除了和供應商開會之外，你這次京都出差最喜歡的是什麼？ B：最後一天早上，我走到山上一座寧靜的【神社】，小路兩旁排列著數百座紅色鳥居，那是整個忙碌的一週裡最平靜的一個小時。"
  },
  {
    "word": "palace",
    "pos": "n.",
    "cn_def": "宮殿",
    "en_def": "a large, grand house where a king, queen or president lives or once lived",
    "sentence": "A: How was the company trip to Bangkok, and did the new staff enjoy the sightseeing on the second day? B: Everyone loved it, especially the visit to the royal {{BLANK}}, where the gold roofs shone in the sun, although we had to wear long trousers and cover our shoulders before going inside.",
    "cn": "A：公司的曼谷旅遊怎麼樣？新同事喜歡第二天的觀光行程嗎？ B：大家都很喜歡，尤其是參觀皇家【宮殿】，金色的屋頂在陽光下閃閃發亮，不過進去之前我們必須穿長褲並遮住肩膀。"
  },
  {
    "word": "castle",
    "pos": "n.",
    "cn_def": "城堡",
    "en_def": "a large, strong building with thick walls, built in the past to protect people",
    "sentence": "A: Where will the annual sales conference be held this year, since the hotel we used last year is closed for repairs? B: The organizers booked a five-hundred-year-old {{BLANK}} in Scotland that is now a hotel, so we will have our meetings in a hall with stone walls and enjoy dinner in its garden.",
    "cn": "A：去年用的飯店因整修而關閉，今年的年度業務會議要在哪裡舉辦？ B：主辦單位訂了一座位於蘇格蘭、有五百年歷史且現已改成飯店的【城堡】，所以我們會在石牆大廳裡開會，並在它的花園享用晚餐。"
  },
  {
    "word": "plaza",
    "pos": "n.",
    "cn_def": "廣場",
    "en_def": "an open public area in a town, often with shops around it",
    "sentence": "A: Where will the company set up its booth for the new coffee drink during the holiday weekend? B: We got permission to use the open {{BLANK}} in front of the city hall, where thousands of shoppers pass every day, so we expect to give away about two thousand free samples.",
    "cn": "A：連假週末期間，公司要在哪裡設置新咖啡飲品的攤位？ B：我們獲准使用市政廳前面的開放【廣場】，那裡每天有數千名購物人潮經過，所以我們預計會發送大約兩千份免費試飲品。"
  },
  {
    "word": "square",
    "pos": "n.",
    "cn_def": "廣場",
    "en_def": "an open area in a town with buildings on all four sides",
    "sentence": "A: Where should I meet the tour group from Japan tomorrow morning, since I have never been to the old town before? B: Wait for them by the fountain in the main {{BLANK}}, which is surrounded by cafés and old buildings, and you will easily see the big clock on the town hall.",
    "cn": "A：我從沒去過舊城區，明天早上該在哪裡和日本旅行團碰面？ B：在主【廣場】的噴水池旁邊等他們，廣場四周都是咖啡館和老建築，你會很容易看見市政廳上的大時鐘。"
  },
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "a famous building or object that is easy to see and helps people know where they are",
    "sentence": "A: Why does the hotel group want to buy that tall old tower near the harbor, even though it needs so many repairs? B: It is the most famous {{BLANK}} in the city and appears on almost every postcard, so a hotel there would attract many visitors who want a room with a special view.",
    "cn": "A：港口附近那座高大的舊塔需要大量修繕，為什麼飯店集團還想買下它？ B：它是這座城市最有名的【地標】，幾乎每張明信片上都有它，所以在那裡開飯店會吸引許多想要特別景觀房的遊客。"
  },
  {
    "word": "exhibition",
    "pos": "n.",
    "cn_def": "展覽",
    "en_def": "a public show of art or other interesting things",
    "sentence": "A: Why is the museum staying open until ten o'clock every night this month, when it usually closes at five? B: A special {{BLANK}} of ancient Egyptian gold jewelry has arrived from London, and so many people want to see it that the managers decided to add evening hours.",
    "cn": "A：博物館平常五點就關門，為什麼這個月每天晚上都開到十點？ B：一場古埃及黃金珠寶的特別【展覽】從倫敦運來了，想看的人實在太多，所以館方決定增加晚間開放時段。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；藝術節",
    "en_def": "a special time when people celebrate something, often with music and food",
    "sentence": "A: Why are all the hotels in the city fully booked for the second weekend of October this year? B: The annual food and music {{BLANK}} takes place along the river that weekend, and it attracts more than a hundred thousand visitors from other countries, so you should book a room today.",
    "cn": "A：為什麼今年十月第二個週末城裡所有的飯店都客滿了？ B：那個週末河岸邊會舉辦年度美食音樂【節】，吸引超過十萬名外國遊客，所以你今天就應該訂房。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表演；演出",
    "en_def": "the act of playing music, dancing or acting in front of an audience",
    "sentence": "A: What is planned for the guests after dinner at the hotel on the last night of the international conference? B: A local group will give a short {{BLANK}} of traditional drum music and dance on the stage, and after that everyone can join a free tour of the hotel's garden.",
    "cn": "A：國際會議最後一晚，在飯店晚餐後為賓客安排了什麼節目？ B：一個本地團體會在台上進行一段傳統鼓樂和舞蹈的簡短【表演】，之後大家可以參加飯店花園的免費導覽。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief that people have followed for a long time",
    "sentence": "A: Why does everyone in the office bring a dish from home on the last Friday before the New Year holiday? B: It is a {{BLANK}} that started when the company was founded thirty years ago, and the boss believes that sharing food helps the different departments get to know each other better.",
    "cn": "A：為什麼新年假期前的最後一個星期五，辦公室裡每個人都從家裡帶一道菜來？ B：這是公司三十年前創立時開始的【傳統】，老闆認為分享食物能幫助不同部門彼此更加認識。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗；慣例",
    "en_def": "something that people in a society usually do",
    "sentence": "A: Should I bring a gift when I visit the family of our business partner in Seoul next week? B: Yes, it is a local {{BLANK}} to bring a small present such as fruit or sweets when you visit someone's home, and you should also take off your shoes at the door.",
    "cn": "A：下週我去拜訪首爾生意夥伴的家人時，應該帶禮物嗎？ B：應該，到別人家拜訪時帶水果或甜點等小禮物是當地的【習俗】，而且你也應該在門口脫鞋。"
  },
  {
    "word": "folklore",
    "pos": "n.",
    "cn_def": "民間傳說；民俗",
    "en_def": "old stories and beliefs of a group of people, passed down over time",
    "sentence": "A: Why did the advertising agency choose a white snake for the new tea company's logo and TV commercial? B: In local {{BLANK}}, the white snake is a symbol of good luck and long life, so older shoppers will feel a warm connection to the brand when they see it.",
    "cn": "A：廣告公司為什麼為新茶飲公司的商標和電視廣告選擇白蛇？ B：在當地的【民間傳說】中，白蛇象徵好運與長壽，所以年長的消費者看到時會對這個品牌產生親切感。"
  },
  {
    "word": "artifact",
    "pos": "n.",
    "cn_def": "文物；手工藝品",
    "en_def": "an old object made by people, especially one that is important in history",
    "sentence": "A: Why did the construction work on the new subway station stop suddenly last week? B: The workers found an ancient clay pot under the street, and the city must check whether the {{BLANK}} is valuable before the digging can continue, so the project may be two months late.",
    "cn": "A：新地鐵站的施工上週為什麼突然停工？ B：工人在街道底下發現了一個古老的陶罐，市政府必須先確認這件【文物】是否有價值，才能繼續開挖，所以工程可能會延誤兩個月。"
  },
  {
    "word": "architecture",
    "pos": "n.",
    "cn_def": "建築風格；建築學",
    "en_def": "the style and design of buildings",
    "sentence": "A: What do foreign visitors usually say about the old part of the city when they come for business meetings? B: Most of them are surprised by the beautiful {{BLANK}}, because the streets are full of red-brick shop houses from the 1920s that mix Japanese, Western and Chinese styles.",
    "cn": "A：外國訪客來這裡開商務會議時，通常怎麼評價城市的舊城區？ B：大多數人都對美麗的【建築風格】感到驚訝，因為街道上滿是1920年代的紅磚街屋，融合了日式、西式和中式風格。"
  },
  {
    "word": "historic",
    "pos": "adj.",
    "cn_def": "具有歷史意義的",
    "en_def": "important in history",
    "sentence": "A: Why is the hotel so expensive, even though the rooms are smaller than those at the new hotels near the airport? B: It is a {{BLANK}} building where the first trade agreement between the two countries was signed in 1895, so many guests pay extra to stay in such a famous place.",
    "cn": "A：那間飯店的房間比機場附近的新飯店小，為什麼還那麼貴？ B：那是一棟【具有歷史意義的】建築，1895年兩國第一份貿易協定就是在那裡簽署的，所以很多客人願意多付錢住在這麼有名的地方。"
  },
  {
    "word": "cultural",
    "pos": "adj.",
    "cn_def": "文化的",
    "en_def": "connected with the art, music, traditions and way of life of a group of people",
    "sentence": "A: Why does the company send new managers to spend a month in the Tokyo office before they start working with Japanese clients? B: The training helps them understand important {{BLANK}} differences, such as how people give feedback or exchange business cards, so they avoid mistakes in their first important meetings.",
    "cn": "A：為什麼公司在新任經理開始和日本客戶合作之前，先派他們到東京辦公室待一個月？ B：這項訓練能幫助他們了解重要的【文化】差異，例如人們如何給予回饋或交換名片，讓他們在最初的重要會議中避免犯錯。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following ways of doing things that have existed for a long time",
    "sentence": "A: What kind of restaurant should we book for the dinner with our clients from Paris on their first night in Taipei? B: Let's take them to a {{BLANK}} Taiwanese restaurant in Dadaocheng, where the cooks still make dishes the old way and the guests sit at round wooden tables.",
    "cn": "A：巴黎客戶在台北的第一晚，我們應該訂什麼樣的餐廳和他們吃晚餐？ B：帶他們去大稻埕一間【傳統】台菜餐廳吧，那裡的廚師仍用古早方法做菜，客人坐在木製圓桌旁用餐。"
  },
  {
    "word": "ethnic",
    "pos": "adj.",
    "cn_def": "民族的；種族的",
    "en_def": "connected with a group of people who share a culture, language or history",
    "sentence": "A: Why did the supermarket chain decide to open a new section near the entrance of every store this spring? B: Our research showed that more shoppers want to cook {{BLANK}} food at home, so the new section sells spices, sauces and noodles from Thailand, India, Mexico and Korea.",
    "cn": "A：這家連鎖超市今年春天為什麼決定在每家店的入口附近開設新區？ B：我們的研究顯示，越來越多顧客想在家烹調【異國民族風味的】料理，所以新區販售來自泰國、印度、墨西哥和韓國的香料、醬料和麵條。"
  },
  {
    "word": "sacred",
    "pos": "adj.",
    "cn_def": "神聖的",
    "en_def": "holy; connected with God or religion and treated with great respect",
    "sentence": "A: Why did the mining company cancel its plan to dig on the mountain after spending two years on research? B: The local people consider the mountain {{BLANK}}, because their families have prayed there for centuries, and the company decided that keeping a good relationship with them was more important.",
    "cn": "A：這家礦業公司花了兩年做研究之後，為什麼取消了在那座山開採的計畫？ B：當地人認為那座山是【神聖的】，因為他們的家族世世代代在那裡祈禱，公司認為維持與他們的良好關係更重要。"
  },
  {
    "word": "tourist",
    "pos": "n.",
    "cn_def": "觀光客；遊客",
    "en_def": "a person who visits a place for pleasure",
    "sentence": "A: Why does the new hotel near the station offer free maps and bicycles at the front desk? B: Almost every {{BLANK}} who stays there wants to explore the old town by themselves, and the manager found that guests who enjoy their visit are more likely to leave good reviews online.",
    "cn": "A：車站附近那間新飯店為什麼在櫃台提供免費地圖和腳踏車？ B：幾乎每位住在那裡的【觀光客】都想自己探索舊城區，經理發現玩得愉快的客人比較會在網路上留下好評。"
  },
  {
    "word": "guide",
    "pos": "v.",
    "cn_def": "引導；帶領",
    "en_def": "to show someone the way, especially around a place",
    "sentence": "A: Who will take care of the twenty visitors from our partner bank when they come to see the new head office on Monday? B: Mr. Lee from the front desk will {{BLANK}} them through each floor, explain how the departments work together, and then bring them to the meeting room for lunch.",
    "cn": "A：星期一合作銀行的二十位訪客來參觀新總部時，由誰負責接待？ B：櫃台的李先生會【帶領】他們參觀每個樓層，說明各部門如何合作，然後帶他們到會議室用午餐。"
  },
  {
    "word": "tour",
    "pos": "n.",
    "cn_def": "參觀；遊覽",
    "en_def": "a visit to a place in which you walk around and look at it",
    "sentence": "A: What will the overseas buyers do on the morning after they arrive, before the contract meeting begins? B: Our factory manager will give them a two-hour {{BLANK}} of the production line, so they can see how carefully we test every product before it is packed and shipped.",
    "cn": "A：海外買家抵達後的隔天早上，在合約會議開始之前要做什麼？ B：我們的廠長會帶他們進行兩小時的生產線【參觀】，讓他們看到我們在每件產品包裝出貨前測試得多麼仔細。"
  },
  {
    "word": "display",
    "pos": "v.",
    "cn_def": "展示；陳列",
    "en_def": "to put something in a place where people can see it easily",
    "sentence": "A: Where should we put the old photos and the first product the company ever made, now that the new lobby is finished? B: Let's {{BLANK}} them in a glass case near the main entrance, so that visitors can learn about our sixty-year history while they wait for their appointments.",
    "cn": "A：新大廳完工了，我們該把那些舊照片和公司做出的第一件產品放在哪裡？ B：我們把它們【展示】在主入口附近的玻璃櫃裡吧，讓訪客在等候會面時可以了解公司六十年的歷史。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；保護",
    "en_def": "to keep something in its original state and protect it from harm",
    "sentence": "A: Why is the government giving money to the owners of old wooden houses in the mountain village? B: It wants to {{BLANK}} these hundred-year-old homes for future generations, so owners who repair the roofs and walls using the original methods can receive up to half of the cost.",
    "cn": "A：政府為什麼要撥款給山村裡老木屋的屋主？ B：政府希望為後代【保存】這些百年老屋，所以用原始工法修繕屋頂和牆壁的屋主，最多可以獲得一半費用的補助。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable for a special day or event",
    "sentence": "A: Why is the whole staff going to a restaurant by the river after work this Friday instead of going home? B: We are going to {{BLANK}} the company's twentieth anniversary together, and the president will give a short speech and hand out awards to the employees who have worked here the longest.",
    "cn": "A：為什麼全體員工這週五下班後不回家，而是要去河邊的一家餐廳？ B：我們要一起【慶祝】公司成立二十週年，總裁會發表簡短致詞，並頒獎給在這裡工作最久的員工。"
  }
];

const MCQS = [
  {
    "q": "Last year, more than a million visitors came to see the city's dinosaur bones. The natural history _____ is now planning to build a second hall.",
    "options": [
      "museum",
      "cinema",
      "temple",
      "castle"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The young painter will show twenty new works next month. A small _____ in the old town has agreed to hang her paintings for three weeks.",
    "options": [
      "library",
      "gallery",
      "mosque",
      "palace"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The actors have practiced the new play for six weeks. Opening night at the _____ is already sold out, so extra shows have been added.",
    "options": [
      "monument",
      "landmark",
      "theater",
      "shrine"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Employees can borrow books and magazines for free. The company _____ on the third floor is open from eight in the morning until six.",
    "options": [
      "castle",
      "temple",
      "square",
      "library"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "A tall stone _____ stands in the park in memory of the soldiers. Every November, city leaders place flowers at its base.",
    "options": [
      "festival",
      "monument",
      "custom",
      "performance"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The old tea factory has been named part of the nation's _____. The government will now pay to protect it from damage.",
    "options": [
      "tourist",
      "plaza",
      "cinema",
      "heritage"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Visitors must take off their shoes before entering the _____. Inside, monks light incense and pray in front of a large golden Buddha.",
    "options": [
      "temple",
      "gallery",
      "cinema",
      "library"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The king and queen lived in the _____ for over two hundred years. Today, its gardens and grand rooms are open to visitors.",
    "options": [
      "museum",
      "theater",
      "palace",
      "library"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The _____ was built on a hill with thick stone walls to protect the town. Now it is a popular place for company retreats.",
    "options": [
      "gallery",
      "tradition",
      "cinema",
      "castle"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The town hall faces the main _____, where a farmers' market is held every Saturday. Cafés and shops line all four sides.",
    "options": [
      "square",
      "exhibition",
      "artifact",
      "folklore"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The red bridge is the city's best-known _____. Taxi drivers often use it to give directions to visitors who are lost.",
    "options": [
      "custom",
      "folklore",
      "landmark",
      "tradition"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The museum's new _____ of modern Japanese furniture opens on Monday. It will run until the end of March.",
    "options": [
      "tourist",
      "exhibition",
      "monument",
      "temple"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The three-day lantern _____ brings thousands of visitors to the city each spring. Local hotels and restaurants earn much of their yearly income then.",
    "options": [
      "festival",
      "architecture",
      "landmark",
      "castle"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The orchestra's evening _____ was so popular that every seat was filled. The audience stood and clapped for five minutes at the end.",
    "options": [
      "heritage",
      "tourist",
      "performance",
      "artifact"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Giving red envelopes during Lunar New Year is a long _____ in Taiwan. Many companies also give them to staff as a bonus.",
    "options": [
      "landmark",
      "tradition",
      "exhibition",
      "palace"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "In some countries, it is the _____ to leave a tip of about fifteen percent. Visitors should check local rules before they travel.",
    "options": [
      "festival",
      "tourist",
      "gallery",
      "custom"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Many of the region's old stories are about mountain spirits. The new theme park uses this _____ to design its rides and shows.",
    "options": [
      "cinema",
      "castle",
      "folklore",
      "tourist"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Divers found a bronze bowl in the shipwreck last month. Experts say the _____ is more than eight hundred years old.",
    "options": [
      "square",
      "festival",
      "plaza",
      "artifact"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Students come from around the world to study the city's _____. Its buildings show a mix of Spanish and Arabic designs.",
    "options": [
      "tourist",
      "architecture",
      "custom",
      "cinema"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The hotel is in a _____ building where the national constitution was signed. Guests can visit the signing room for free.",
    "options": [
      "historic",
      "ethnic",
      "sacred",
      "cultural"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The city plans to build a new _____ center with a theater, a library and an art gallery. It will open in 2028.",
    "options": [
      "sacred",
      "cultural",
      "ethnic",
      "historic"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The restaurant serves _____ Taiwanese dishes cooked the way grandmothers made them. Its braised pork rice has not changed in fifty years.",
    "options": [
      "traditional",
      "sacred",
      "historic",
      "cultural"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The neighborhood has many _____ restaurants run by families from Vietnam, India and Ethiopia. Office workers enjoy trying different foods at lunch.",
    "options": [
      "sacred",
      "historic",
      "cultural",
      "ethnic"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The river is _____ to the local people, who hold religious ceremonies there. The factory has agreed not to dump any waste into it.",
    "options": [
      "ethnic",
      "historic",
      "sacred",
      "traditional"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Every _____ who buys a museum pass receives a free city map. The pass also includes rides on the harbor ferry.",
    "options": [
      "monument",
      "temple",
      "landmark",
      "tourist"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "A staff member will _____ the new employees around the building on their first morning. Then they will meet their team leaders.",
    "options": [
      "preserve",
      "celebrate",
      "guide",
      "display"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The factory offers a free _____ every Saturday morning. Visitors can watch how the chocolate is made and taste fresh samples.",
    "options": [
      "tour",
      "monument",
      "heritage",
      "folklore"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The shop will _____ the new summer clothes in its front window. Managers hope the bright colors will attract people walking past.",
    "options": [
      "celebrate",
      "display",
      "preserve",
      "guide"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The town council voted to _____ the old railway station instead of tearing it down. It will be repaired and turned into a café.",
    "options": [
      "guide",
      "celebrate",
      "preserve",
      "display"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The staff will _____ the opening of the new branch with a party on Friday. Snacks and drinks will be provided after work.",
    "options": [
      "celebrate",
      "preserve",
      "guide",
      "display"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "museum": {
    "pos": "n.",
    "en_def": "a building where people can see old, valuable or interesting objects",
    "cn_def": "博物館"
  },
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where works of art are shown",
    "cn_def": "美術館；畫廊"
  },
  "theater": {
    "pos": "n.",
    "en_def": "a building where plays and shows are performed",
    "cn_def": "劇院"
  },
  "cinema": {
    "pos": "n.",
    "en_def": "a building where people watch films",
    "cn_def": "電影院"
  },
  "library": {
    "pos": "n.",
    "en_def": "a place where people can borrow or read books",
    "cn_def": "圖書館"
  },
  "monument": {
    "pos": "n.",
    "en_def": "a statue or building made to help people remember a person or event",
    "cn_def": "紀念碑；紀念建築"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "the history, traditions and old buildings that a country or group has had for many years",
    "cn_def": "遺產；文化資產"
  },
  "temple": {
    "pos": "n.",
    "en_def": "a building where people go to pray, especially in Asian religions",
    "cn_def": "廟；寺廟"
  },
  "church": {
    "pos": "n.",
    "en_def": "a building where Christians go to pray",
    "cn_def": "教堂"
  },
  "mosque": {
    "pos": "n.",
    "en_def": "a building where Muslims go to pray",
    "cn_def": "清真寺"
  },
  "shrine": {
    "pos": "n.",
    "en_def": "a holy place built to honor a god or a special person",
    "cn_def": "神社；聖祠"
  },
  "palace": {
    "pos": "n.",
    "en_def": "a large, grand house where a king, queen or president lives or once lived",
    "cn_def": "宮殿"
  },
  "castle": {
    "pos": "n.",
    "en_def": "a large, strong building with thick walls, built in the past to protect people",
    "cn_def": "城堡"
  },
  "plaza": {
    "pos": "n.",
    "en_def": "an open public area in a town, often with shops around it",
    "cn_def": "廣場"
  },
  "square": {
    "pos": "n.",
    "en_def": "an open area in a town with buildings on all four sides",
    "cn_def": "廣場"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "a famous building or object that is easy to see and helps people know where they are",
    "cn_def": "地標"
  },
  "exhibition": {
    "pos": "n.",
    "en_def": "a public show of art or other interesting things",
    "cn_def": "展覽"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special time when people celebrate something, often with music and food",
    "cn_def": "節慶；藝術節"
  },
  "performance": {
    "pos": "n.",
    "en_def": "the act of playing music, dancing or acting in front of an audience",
    "cn_def": "表演；演出"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief that people have followed for a long time",
    "cn_def": "傳統"
  },
  "custom": {
    "pos": "n.",
    "en_def": "something that people in a society usually do",
    "cn_def": "習俗；慣例"
  },
  "folklore": {
    "pos": "n.",
    "en_def": "old stories and beliefs of a group of people, passed down over time",
    "cn_def": "民間傳說；民俗"
  },
  "artifact": {
    "pos": "n.",
    "en_def": "an old object made by people, especially one that is important in history",
    "cn_def": "文物；手工藝品"
  },
  "architecture": {
    "pos": "n.",
    "en_def": "the style and design of buildings",
    "cn_def": "建築風格；建築學"
  },
  "historic": {
    "pos": "adj.",
    "en_def": "important in history",
    "cn_def": "具有歷史意義的"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "connected with the art, music, traditions and way of life of a group of people",
    "cn_def": "文化的"
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following ways of doing things that have existed for a long time",
    "cn_def": "傳統的"
  },
  "ethnic": {
    "pos": "adj.",
    "en_def": "connected with a group of people who share a culture, language or history",
    "cn_def": "民族的；種族的"
  },
  "sacred": {
    "pos": "adj.",
    "en_def": "holy; connected with God or religion and treated with great respect",
    "cn_def": "神聖的"
  },
  "tourist": {
    "pos": "n.",
    "en_def": "a person who visits a place for pleasure",
    "cn_def": "觀光客；遊客"
  },
  "guide": {
    "pos": "v.",
    "en_def": "to show someone the way, especially around a place",
    "cn_def": "引導；帶領"
  },
  "tour": {
    "pos": "n.",
    "en_def": "a visit to a place in which you walk around and look at it",
    "cn_def": "參觀；遊覽"
  },
  "display": {
    "pos": "v.",
    "en_def": "to put something in a place where people can see it easily",
    "cn_def": "展示；陳列"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something in its original state and protect it from harm",
    "cn_def": "保存；保護"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable for a special day or event",
    "cn_def": "慶祝"
  }
};

const EXTRA_GLOSSES = {};
