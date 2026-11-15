// Topic 84 Quiz Data: Country 國家
// Source word list: https://www.examword.com/group-topic/country — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T84 - Country 國家",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "nation",
    "pos": "n.",
    "cn_def": "國家；民族",
    "en_def": "a country and its people",
    "sentence": "A: Why is the hotel chain spending so much money on advertising in Vietnam this year instead of in its home market? B: The managers believe it is a young and fast-growing {{BLANK}}, so they expect millions of new travelers there to need clean, affordable rooms over the next ten years.",
    "cn": "A：為什麼這家連鎖飯店今年在越南花這麼多錢打廣告，而不是在本國市場？ B：經理們認為那是一個年輕且快速成長的【國家】，所以預期未來十年那裡會有數百萬名新旅客需要乾淨又平價的房間。"
  },
  {
    "word": "state",
    "pos": "n.",
    "cn_def": "州",
    "en_def": "a part of a country, such as the US, with its own local government",
    "sentence": "A: Why does the company want to move its main warehouse from California to Texas next spring? B: Taxes and land prices are much lower in that {{BLANK}}, and the new location is closer to our biggest customers, so we can save money and deliver orders a day faster.",
    "cn": "A：為什麼公司想在明年春天把主要倉庫從加州搬到德州？ B：那個【州】的稅金和土地價格低很多，而且新地點離我們最大的客戶比較近，所以我們可以省錢，而且出貨能快一天。"
  },
  {
    "word": "republic",
    "pos": "n.",
    "cn_def": "共和國",
    "en_def": "a country with an elected leader and no king or queen",
    "sentence": "A: What did you learn about the country before you went there to open our new sales office last month? B: I read that it became a {{BLANK}} in 1960, so its leader is chosen by voters every five years, and the government has worked hard to attract foreign companies like ours.",
    "cn": "A：上個月你去那裡開設我們的新業務辦公室之前，對那個國家有什麼了解？ B：我讀到它在1960年成為【共和國】，所以領導人每五年由選民選出，而且政府一直很努力吸引像我們這樣的外國公司。"
  },
  {
    "word": "kingdom",
    "pos": "n.",
    "cn_def": "王國",
    "en_def": "a country ruled by a king or queen",
    "sentence": "A: Why are so many tourists booking our tour package to Bhutan, even though the flights are expensive? B: The small mountain {{BLANK}} has a royal family, beautiful old temples and very few visitors, so travelers feel they are discovering a special place that most people never see.",
    "cn": "A：為什麼即使機票很貴，還是有那麼多遊客預訂我們的不丹旅遊套裝行程？ B：這個小小的山中【王國】有王室、美麗的古老寺廟，而且遊客很少，所以旅客覺得他們正在發現一個大多數人從沒見過的特別地方。"
  },
  {
    "word": "government",
    "pos": "n.",
    "cn_def": "政府",
    "en_def": "the group of people who control and manage a country",
    "sentence": "A: Why are so many small restaurants in our neighborhood hiring young workers again this summer? B: The {{BLANK}} started a new program that pays part of the salary for anyone under twenty-five, so owners can train new staff without spending too much of their own money.",
    "cn": "A：為什麼我們社區有這麼多小餐廳今年夏天又開始僱用年輕員工？ B：【政府】推出了一項新計畫，替二十五歲以下的人支付部分薪水，所以老闆們可以培訓新員工，而不用花太多自己的錢。"
  },
  {
    "word": "capital",
    "pos": "n.",
    "cn_def": "首都",
    "en_def": "the city where a country's government is",
    "sentence": "A: Where will the international trade fair be held next year, and should we book our hotel rooms now? B: It will take place in the {{BLANK}}, near the president's office and the main train station, so I suggest booking early because hotels there fill up quickly during big events.",
    "cn": "A：明年的國際商展會在哪裡舉辦？我們應該現在就訂飯店房間嗎？ B：會在【首都】舉行，靠近總統府和主要火車站，所以我建議提早預訂，因為那裡的飯店在大型活動期間很快就會客滿。"
  },
  {
    "word": "border",
    "pos": "n.",
    "cn_def": "邊界；國界",
    "en_def": "the line between two countries",
    "sentence": "A: Why did the delivery of the machine parts from Germany arrive two days late this week? B: The trucks had to wait for many hours at the {{BLANK}} because customs officers were checking every vehicle carefully, so the driver could not enter the country until Wednesday afternoon.",
    "cn": "A：為什麼這週從德國運來的機器零件晚了兩天才到？ B：卡車必須在【邊界】等好幾個小時，因為海關人員正在仔細檢查每一輛車，所以司機直到星期三下午才能入境。"
  },
  {
    "word": "territory",
    "pos": "n.",
    "cn_def": "領土；（業務）轄區",
    "en_def": "an area of land controlled by a country, or an area a person is responsible for",
    "sentence": "A: Why are you traveling so much more this year than you did last year? B: My boss made me responsible for a much larger sales {{BLANK}} that includes three countries in Southeast Asia, so I visit clients in a different city almost every week.",
    "cn": "A：為什麼你今年出差的次數比去年多那麼多？ B：老闆讓我負責一個大得多的銷售【轄區】，包含東南亞三個國家，所以我幾乎每週都要去不同城市拜訪客戶。"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民；國民",
    "en_def": "a person who legally belongs to a country",
    "sentence": "A: Can our new engineer from Canada start working at the Tokyo office next month, or does she need a special visa? B: She is actually a Japanese {{BLANK}} because her mother was born in Osaka, so she does not need a work visa and can start as soon as she finds an apartment.",
    "cn": "A：我們從加拿大來的新工程師下個月可以開始在東京辦公室上班嗎？還是她需要特別的簽證？ B：她其實是日本【公民】，因為她母親在大阪出生，所以她不需要工作簽證，只要找到公寓就可以開始上班。"
  },
  {
    "word": "citizenship",
    "pos": "n.",
    "cn_def": "公民身分；國籍",
    "en_def": "the legal right to belong to a country",
    "sentence": "A: Why did the human resources manager ask for a copy of your passport during the interview yesterday? B: For this government project, every employee must have local {{BLANK}}, so she needed to check that I was born here and have the right to work on secret documents.",
    "cn": "A：為什麼人資經理昨天面試時要你的護照影本？ B：這個政府專案的每位員工都必須具備本國【公民身分】，所以她需要確認我是在這裡出生，而且有權處理機密文件。"
  },
  {
    "word": "population",
    "pos": "n.",
    "cn_def": "人口",
    "en_def": "the number of people living in a place",
    "sentence": "A: Why did the supermarket chain decide to open three new stores in the northern part of the city? B: The {{BLANK}} there has grown quickly since the new train line opened, and many young families have moved into the apartments, so the company expects strong sales of fresh food.",
    "cn": "A：為什麼這家連鎖超市決定在城市北區開三家新店？ B：自從新的火車路線開通後，那裡的【人口】快速成長，許多年輕家庭搬進了公寓，所以公司預期生鮮食品的銷售會很強勁。"
  },
  {
    "word": "democracy",
    "pos": "n.",
    "cn_def": "民主；民主國家",
    "en_def": "a system in which people vote to choose their government",
    "sentence": "A: Why is the news channel planning so many special programs for next weekend? B: The country is holding its first free election since it became a {{BLANK}}, so reporters will interview voters all day and explain the results live as soon as the votes are counted.",
    "cn": "A：為什麼新聞台下週末規劃了那麼多特別節目？ B：這個國家自從成為【民主國家】以來首次舉行自由選舉，所以記者們會整天採訪選民，並在計票完成後立刻現場解說結果。"
  },
  {
    "word": "economy",
    "pos": "n.",
    "cn_def": "經濟",
    "en_def": "the system of money, trade and jobs in a country",
    "sentence": "A: Why are fewer customers buying new cars at our showroom this year compared with last year? B: The {{BLANK}} has been weak since prices for food and gas went up, so many families are worried about their jobs and prefer to keep their old cars a little longer.",
    "cn": "A：為什麼今年來我們展示中心買新車的顧客比去年少？ B：自從食物和油價上漲後，【經濟】一直很疲弱，所以許多家庭擔心工作不保，寧願把舊車多開一陣子。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the customs, art and way of life of a group of people",
    "sentence": "A: Why does the company give a two-day training course to every manager before they move to the Seoul office? B: Business {{BLANK}} in Korea is quite different from ours, so the course teaches managers how to greet clients, exchange business cards and behave politely at company dinners.",
    "cn": "A：為什麼公司要讓每位經理在調到首爾辦公室之前上兩天的訓練課程？ B：韓國的商業【文化】和我們的很不一樣，所以課程會教經理如何問候客戶、交換名片，以及在公司聚餐時表現得有禮貌。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief passed down over many years",
    "sentence": "A: Why does everyone in the office bring a dish of food to the meeting room on the last Friday of December? B: It is a {{BLANK}} that our founder started thirty years ago, so each department cooks something special and we all eat lunch together before the holiday break.",
    "cn": "A：為什麼辦公室的每個人在十二月的最後一個星期五都帶一道菜到會議室？ B：這是我們創辦人三十年前開始的【傳統】，所以每個部門都會煮一道特別的菜，我們在放假前一起吃午餐。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；文化資產",
    "en_def": "the history, buildings and customs that a country or group values",
    "sentence": "A: Why did the city council reject the plan to build a shopping mall on the old harbor site? B: The old warehouses there are an important part of the city's {{BLANK}}, so the council wants to protect them and turn them into a museum and small shops for tourists.",
    "cn": "A：為什麼市議會否決了在舊港口用地蓋購物中心的計畫？ B：那裡的舊倉庫是這座城市【文化資產】的重要部分，所以議會想保護它們，並把它們改建成博物館和給遊客的小店。"
  },
  {
    "word": "language",
    "pos": "n.",
    "cn_def": "語言",
    "en_def": "the words and grammar people use to speak and write",
    "sentence": "A: Why did the hotel hire two new receptionists even though business has been slow this autumn? B: Many of our guests now come from Spain and Brazil, so the manager wanted staff who speak a second {{BLANK}} well enough to help visitors check in and answer their questions.",
    "cn": "A：為什麼飯店今年秋天生意清淡，還是僱用了兩位新的櫃台人員？ B：我們現在有很多客人來自西班牙和巴西，所以經理想要第二種【語言】說得夠好的員工，來幫助旅客辦理入住並回答他們的問題。"
  },
  {
    "word": "religion",
    "pos": "n.",
    "cn_def": "宗教",
    "en_def": "a belief in God or gods and the activities connected with it",
    "sentence": "A: Why did the restaurant add so many new vegetarian dishes to its menu this year? B: Many of our customers follow a {{BLANK}} that does not allow them to eat meat, so the chef created more choices to make sure every guest can enjoy a full meal here.",
    "cn": "A：為什麼這家餐廳今年在菜單上加了那麼多新的素食料理？ B：我們有很多顧客信奉不允許吃肉的【宗教】，所以主廚設計了更多選擇，確保每位客人都能在這裡享用完整的一餐。"
  },
  {
    "word": "flag",
    "pos": "n.",
    "cn_def": "國旗；旗子",
    "en_def": "a piece of cloth with a special design that is the symbol of a country or group",
    "sentence": "A: What should we put on the stage for the welcome ceremony when the Japanese partners arrive on Monday? B: Please place their national {{BLANK}} next to ours behind the speaker's desk, because it shows respect for our guests and will look good in the photos for the newsletter.",
    "cn": "A：日本合作夥伴星期一抵達時，歡迎儀式的舞台上應該放什麼？ B：請把他們的【國旗】放在講台後方我們的國旗旁邊，因為這表示對貴賓的尊重，而且在電子報的照片裡也會很好看。"
  },
  {
    "word": "anthem",
    "pos": "n.",
    "cn_def": "國歌",
    "en_def": "a country's official song",
    "sentence": "A: Why did everyone in the stadium stand up before the football match started last night? B: The band played the national {{BLANK}} before the opening kick, so all the players and fans stood quietly to show respect, and then the crowd cheered loudly when the game finally began.",
    "cn": "A：昨晚足球賽開始前，為什麼體育場裡的每個人都站起來？ B：樂隊在開球前演奏【國歌】，所以所有球員和球迷都安靜地站著表示敬意，比賽終於開始時，觀眾才大聲歡呼。"
  },
  {
    "word": "independence",
    "pos": "n.",
    "cn_def": "獨立",
    "en_def": "freedom from control by another country",
    "sentence": "A: Why will the bank and the post office be closed next Thursday? B: It is the day the country celebrates its {{BLANK}} from Britain, so it is a public holiday, and there will be a big parade with music and fireworks along the main street in the evening.",
    "cn": "A：為什麼銀行和郵局下週四不營業？ B：那天是國家慶祝脫離英國【獨立】的日子，所以是國定假日，晚上主要街道上還會有盛大的遊行，有音樂和煙火。"
  },
  {
    "word": "colony",
    "pos": "n.",
    "cn_def": "殖民地",
    "en_def": "a country or area controlled by another country",
    "sentence": "A: Why do so many street signs and old buildings in this city look so European? B: The city was a Portuguese {{BLANK}} for more than four hundred years, so the old churches, squares and even some of the food still show the influence of that long period.",
    "cn": "A：為什麼這座城市有那麼多路標和老建築看起來很有歐洲風格？ B：這座城市曾經是葡萄牙【殖民地】超過四百年，所以老教堂、廣場，甚至一些食物至今仍顯示出那段漫長時期的影響。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "都市的；城市的",
    "en_def": "connected with towns and cities",
    "sentence": "A: Why is the car-sharing company only offering its service in large cities and not in small towns? B: In {{BLANK}} areas, many people live close together, parking is expensive and fewer people own cars, so the service is used much more often and makes a bigger profit.",
    "cn": "A：為什麼這家共享汽車公司只在大城市提供服務，而不在小鎮？ B：在【都市】地區，很多人住得很近，停車費很貴，而且擁有汽車的人比較少，所以服務的使用率高得多，利潤也比較大。"
  },
  {
    "word": "rural",
    "pos": "adj.",
    "cn_def": "鄉村的",
    "en_def": "connected with the countryside",
    "sentence": "A: Why is the internet company building so many new towers in the mountains this year? B: The government wants families in {{BLANK}} villages to have fast internet too, so it is paying the company to bring service to farms and small schools far away from the cities.",
    "cn": "A：為什麼網路公司今年在山區蓋了那麼多新的基地台？ B：政府希望【鄉村】地區村落的家庭也能有快速網路，所以付錢讓公司把服務帶到遠離城市的農場和小學校。"
  },
  {
    "word": "developed",
    "pos": "adj.",
    "cn_def": "已開發的",
    "en_def": "having many industries and a high standard of living",
    "sentence": "A: Why are the company's sales of luxury watches so strong in Europe and North America? B: People in highly {{BLANK}} countries usually have higher incomes and more free time, so they are more willing to spend money on expensive gifts and quality products that last for many years.",
    "cn": "A：為什麼公司的高級手錶在歐洲和北美賣得那麼好？ B：高度【已開發】國家的人通常收入較高、空閒時間較多，所以比較願意花錢買昂貴的禮物和能用很多年的優質產品。"
  },
  {
    "word": "developing",
    "pos": "adj.",
    "cn_def": "開發中的",
    "en_def": "becoming richer and building more industries",
    "sentence": "A: Why is our company making a cheaper version of its smartphone this year? B: Many customers in {{BLANK}} countries want a reliable phone but cannot pay high prices yet, so a simpler model with a good camera could help us sell millions more units in Africa and Asia.",
    "cn": "A：為什麼我們公司今年要推出比較便宜的智慧型手機版本？ B：許多【開發中】國家的顧客想要可靠的手機，但目前還付不起高價，所以一款相機不錯的簡化機型能幫我們在非洲和亞洲多賣出數百萬支。"
  },
  {
    "word": "coastal",
    "pos": "adj.",
    "cn_def": "沿海的",
    "en_def": "on or near the coast",
    "sentence": "A: Where is the new hotel resort going to be built, and when will it be ready for guests? B: It will be in a quiet {{BLANK}} town about two hours south of the airport, right next to the beach, and the owners hope to welcome the first guests before next summer.",
    "cn": "A：新的度假飯店要蓋在哪裡？什麼時候可以接待客人？ B：會蓋在機場南邊大約兩小時車程的一個安靜【沿海】小鎮，就在海灘旁邊，業主希望在明年夏天前迎接第一批客人。"
  },
  {
    "word": "inland",
    "pos": "adj.",
    "cn_def": "內陸的",
    "en_def": "away from the sea, in the middle of a country",
    "sentence": "A: Why does it take so long to ship our products to the customer in Chengdu? B: It is a large {{BLANK}} city far from the ocean, so the containers arrive at the port in Shanghai first and then travel by train for several more days before they reach the warehouse.",
    "cn": "A：為什麼把我們的產品運到成都的客戶那裡要花那麼久？ B：那是一座遠離海洋的大型【內陸】城市，所以貨櫃會先抵達上海的港口，再搭火車走好幾天才到倉庫。"
  },
  {
    "word": "diverse",
    "pos": "adj.",
    "cn_def": "多元的；各式各樣的",
    "en_def": "including many different types of people or things",
    "sentence": "A: Why does the marketing team want to show people of different ages and backgrounds in the new advertisement? B: Our customers are a very {{BLANK}} group, from students to retired teachers, so the team wants everyone who watches the ad to feel that the product is also made for them.",
    "cn": "A：為什麼行銷團隊想在新廣告裡呈現不同年齡和背景的人？ B：我們的顧客群非常【多元】，從學生到退休老師都有，所以團隊希望每個看廣告的人都覺得這個產品也是為他們設計的。"
  },
  {
    "word": "patriotic",
    "pos": "adj.",
    "cn_def": "愛國的",
    "en_def": "loving and supporting your country",
    "sentence": "A: Why did the sports drink company use so many red and white colors in its new commercial? B: The ad will be shown during the national team's World Cup games, so the company wanted a {{BLANK}} message that makes viewers feel proud and connected to the players.",
    "cn": "A：為什麼那家運動飲料公司在新廣告裡用了那麼多紅色和白色？ B：這支廣告會在國家隊的世界盃比賽期間播出，所以公司想傳達【愛國】的訊息，讓觀眾感到驕傲並與球員產生連結。"
  },
  {
    "word": "national",
    "pos": "adj.",
    "cn_def": "全國的；國家的",
    "en_def": "connected with a whole country",
    "sentence": "A: Why are all the shops downtown so busy with customers buying gifts this week? B: Monday is a {{BLANK}} holiday, so most people have a long weekend off work, and many of them are buying presents and food before they travel home to visit their families.",
    "cn": "A：為什麼這週市中心的商店都擠滿了買禮物的顧客？ B：星期一是【國定】假日，所以大部分人都有連假，很多人在回家探望家人之前購買禮物和食物。"
  },
  {
    "word": "foreign",
    "pos": "adj.",
    "cn_def": "外國的",
    "en_def": "from or connected with another country",
    "sentence": "A: Why does the bank have such a long line of travelers at the counter near the entrance today? B: That counter changes {{BLANK}} money, and many people are getting dollars and euros before the summer holidays, so the staff are busy serving customers all morning.",
    "cn": "A：為什麼今天銀行入口附近的櫃台排了那麼長的旅客隊伍？ B：那個櫃台負責兌換【外國】貨幣，很多人在暑假前換美元和歐元，所以員工整個上午都忙著服務顧客。"
  },
  {
    "word": "overseas",
    "pos": "adj.",
    "cn_def": "海外的",
    "en_def": "in or from another country across the sea",
    "sentence": "A: Why did the furniture company hire three new sales staff who speak both English and Japanese? B: Most of its {{BLANK}} customers live in the United States and Japan, so the company needs people who can answer emails and phone calls from those markets quickly and politely.",
    "cn": "A：為什麼那家家具公司僱用了三位會說英文和日文的新業務人員？ B：它大部分的【海外】顧客住在美國和日本，所以公司需要能快速且有禮貌地回覆來自那些市場的電子郵件和電話的人。"
  },
  {
    "word": "abroad",
    "pos": "adv.",
    "cn_def": "在國外；到國外",
    "en_def": "in or to a foreign country",
    "sentence": "A: Why is Mr. Chen leaving his job at the bank after working there for fifteen years? B: He has accepted an offer to work {{BLANK}} for two years at a company in London, and he wants his children to learn English and experience life in another country while they are young.",
    "cn": "A：陳先生為什麼在銀行工作十五年後要離職？ B：他接受了一份到【國外】倫敦一家公司工作兩年的機會，他希望孩子們趁年紀還小時學英文，並體驗在另一個國家的生活。"
  }
];

const MCQS = [
  {
    "q": "The prime minister gave a speech to the whole _____ on television last night. She promised to create more jobs next year.",
    "options": [
      "nation",
      "border",
      "flag",
      "heritage"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our company has offices in every _____ in the western United States. The largest one is in Nevada, near Las Vegas.",
    "options": [
      "citizen",
      "tradition",
      "state",
      "language"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new tax rules were announced by the _____ on Monday. Small businesses will pay less tax starting in January.",
    "options": [
      "population",
      "government",
      "culture",
      "flag"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Most of the country's banks have their head offices in the _____. It is also the city where the president lives.",
    "options": [
      "economy",
      "religion",
      "democracy",
      "capital"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Travelers must show their passports when they cross the _____ between the two countries. The check usually takes about ten minutes.",
    "options": [
      "capital",
      "population",
      "border",
      "culture"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Ms. Kim is responsible for a large sales _____ in northern Europe. She visits customers in Sweden, Norway and Finland every month.",
    "options": [
      "territory",
      "tradition",
      "democracy",
      "religion"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Every _____ over the age of eighteen can vote in the election. Voting stations will open at eight in the morning.",
    "options": [
      "economy",
      "border",
      "heritage",
      "citizen"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Applicants for this government job must hold local _____. Please attach a copy of your passport to your application form.",
    "options": [
      "population",
      "citizenship",
      "tradition",
      "anthem"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The _____ of the city has doubled in the last twenty years. As a result, the government is building more schools and hospitals.",
    "options": [
      "language",
      "flag",
      "religion",
      "population"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "In a _____, people choose their leaders by voting in free elections. The country held its first election in 1996.",
    "options": [
      "border",
      "democracy",
      "flag",
      "heritage"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Experts expect the _____ to grow by three percent next year. Exports of computer chips are rising quickly.",
    "options": [
      "economy",
      "flag",
      "citizen",
      "religion"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "New employees from overseas often need time to learn about the company _____. For example, staff here usually eat lunch together.",
    "options": [
      "border",
      "capital",
      "culture",
      "citizen"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Giving red envelopes during the Lunar New Year is an old _____ in Taiwan. Many companies also give them to their employees.",
    "options": [
      "territory",
      "tradition",
      "population",
      "democracy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The old train station is part of the town's _____ and cannot be torn down. It will become a small history museum instead.",
    "options": [
      "economy",
      "citizen",
      "border",
      "heritage"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Ms. Lopez speaks Spanish, English and French. Her ability to use more than one _____ makes her perfect for the international sales team.",
    "options": [
      "territory",
      "capital",
      "language",
      "colony"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Hotel staff should respect the _____ of every guest. For example, some guests do not eat pork or drink alcohol for spiritual reasons.",
    "options": [
      "religion",
      "border",
      "economy",
      "capital"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "A large _____ with the company logo hangs above the main entrance. Visitors can see it clearly from the highway.",
    "options": [
      "population",
      "democracy",
      "flag",
      "heritage"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The country celebrated one hundred years of _____ last summer. Before that, it had been controlled by a foreign power.",
    "options": [
      "independence",
      "population",
      "capital",
      "anthem"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Traffic jams are common in crowded _____ areas, where millions of people drive to work. The city plans to add more bus lanes.",
    "options": [
      "patriotic",
      "foreign",
      "rural",
      "urban"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many young people are leaving _____ villages to find jobs in the city. As a result, some farms have no one to work on them.",
    "options": [
      "urban",
      "rural",
      "patriotic",
      "developed"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Highly _____ countries such as Japan and Germany have modern roads and hospitals. Most people there also earn high incomes.",
    "options": [
      "rural",
      "coastal",
      "developed",
      "patriotic"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Our charity builds clean water systems in _____ countries in Africa. These countries are growing quickly but still need help with basic services.",
    "options": [
      "developed",
      "developing",
      "patriotic",
      "urban"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The storm is expected to hit _____ towns on Friday night. People who live near the beach should move to higher ground.",
    "options": [
      "coastal",
      "inland",
      "patriotic",
      "foreign"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Our staff come from twelve different countries and speak many languages. We are proud to have such a _____ team.",
    "options": [
      "rural",
      "inland",
      "coastal",
      "diverse"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The bank will be closed on Monday because it is a _____ holiday. All branches will reopen on Tuesday morning at nine.",
    "options": [
      "rural",
      "national",
      "inland",
      "coastal"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Tourists can exchange _____ currency at the counter near the hotel lobby. The service is available from seven a.m. to ten p.m.",
    "options": [
      "rural",
      "urban",
      "diverse",
      "foreign"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The company's _____ sales grew by twenty percent last year. Most of the growth came from new customers in Europe and Australia.",
    "options": [
      "rural",
      "patriotic",
      "overseas",
      "inland"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Goods arriving at the port are sent by train to _____ cities. The trip to the center of the country takes about three days.",
    "options": [
      "inland",
      "coastal",
      "patriotic",
      "foreign"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The singer performed many _____ songs at the National Day concert. The audience waved flags and sang along proudly.",
    "options": [
      "rural",
      "inland",
      "coastal",
      "patriotic"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Thailand is a _____ with a king who is greatly respected. Visitors should be careful when they talk about the royal family.",
    "options": [
      "population",
      "kingdom",
      "economy",
      "heritage"
    ],
    "answer": 1,
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "nation": {
    "pos": "n.",
    "en_def": "a country and its people",
    "cn_def": "國家；民族"
  },
  "state": {
    "pos": "n.",
    "en_def": "a part of a country, such as the US, with its own local government",
    "cn_def": "州"
  },
  "republic": {
    "pos": "n.",
    "en_def": "a country with an elected leader and no king or queen",
    "cn_def": "共和國"
  },
  "kingdom": {
    "pos": "n.",
    "en_def": "a country ruled by a king or queen",
    "cn_def": "王國"
  },
  "government": {
    "pos": "n.",
    "en_def": "the group of people who control and manage a country",
    "cn_def": "政府"
  },
  "capital": {
    "pos": "n.",
    "en_def": "the city where a country's government is",
    "cn_def": "首都"
  },
  "border": {
    "pos": "n.",
    "en_def": "the line between two countries",
    "cn_def": "邊界；國界"
  },
  "territory": {
    "pos": "n.",
    "en_def": "an area of land controlled by a country, or an area a person is responsible for",
    "cn_def": "領土；（業務）轄區"
  },
  "citizen": {
    "pos": "n.",
    "en_def": "a person who legally belongs to a country",
    "cn_def": "公民；國民"
  },
  "citizenship": {
    "pos": "n.",
    "en_def": "the legal right to belong to a country",
    "cn_def": "公民身分；國籍"
  },
  "population": {
    "pos": "n.",
    "en_def": "the number of people living in a place",
    "cn_def": "人口"
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system in which people vote to choose their government",
    "cn_def": "民主；民主國家"
  },
  "economy": {
    "pos": "n.",
    "en_def": "the system of money, trade and jobs in a country",
    "cn_def": "經濟"
  },
  "culture": {
    "pos": "n.",
    "en_def": "the customs, art and way of life of a group of people",
    "cn_def": "文化"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief passed down over many years",
    "cn_def": "傳統"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "the history, buildings and customs that a country or group values",
    "cn_def": "遺產；文化資產"
  },
  "language": {
    "pos": "n.",
    "en_def": "the words and grammar people use to speak and write",
    "cn_def": "語言"
  },
  "religion": {
    "pos": "n.",
    "en_def": "a belief in God or gods and the activities connected with it",
    "cn_def": "宗教"
  },
  "flag": {
    "pos": "n.",
    "en_def": "a piece of cloth with a special design that is the symbol of a country or group",
    "cn_def": "國旗；旗子"
  },
  "anthem": {
    "pos": "n.",
    "en_def": "a country's official song",
    "cn_def": "國歌"
  },
  "independence": {
    "pos": "n.",
    "en_def": "freedom from control by another country",
    "cn_def": "獨立"
  },
  "colony": {
    "pos": "n.",
    "en_def": "a country or area controlled by another country",
    "cn_def": "殖民地"
  },
  "urban": {
    "pos": "adj.",
    "en_def": "connected with towns and cities",
    "cn_def": "都市的；城市的"
  },
  "rural": {
    "pos": "adj.",
    "en_def": "connected with the countryside",
    "cn_def": "鄉村的"
  },
  "developed": {
    "pos": "adj.",
    "en_def": "having many industries and a high standard of living",
    "cn_def": "已開發的"
  },
  "developing": {
    "pos": "adj.",
    "en_def": "becoming richer and building more industries",
    "cn_def": "開發中的"
  },
  "coastal": {
    "pos": "adj.",
    "en_def": "on or near the coast",
    "cn_def": "沿海的"
  },
  "inland": {
    "pos": "adj.",
    "en_def": "away from the sea, in the middle of a country",
    "cn_def": "內陸的"
  },
  "diverse": {
    "pos": "adj.",
    "en_def": "including many different types of people or things",
    "cn_def": "多元的；各式各樣的"
  },
  "patriotic": {
    "pos": "adj.",
    "en_def": "loving and supporting your country",
    "cn_def": "愛國的"
  },
  "national": {
    "pos": "adj.",
    "en_def": "connected with a whole country",
    "cn_def": "全國的；國家的"
  },
  "foreign": {
    "pos": "adj.",
    "en_def": "from or connected with another country",
    "cn_def": "外國的"
  },
  "overseas": {
    "pos": "adj.",
    "en_def": "in or from another country across the sea",
    "cn_def": "海外的"
  },
  "abroad": {
    "pos": "adv.",
    "en_def": "in or to a foreign country",
    "cn_def": "在國外；到國外"
  }
};

const EXTRA_GLOSSES = {};
