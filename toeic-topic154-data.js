// Topic 154 Quiz Data: Geography 地理
// Source word list: https://www.examword.com/group-topic/geography — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T154 - Geography 地理",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "map",
    "pos": "n.",
    "cn_def": "地圖",
    "en_def": "a drawing that shows where places, roads and rivers are",
    "sentence": "A: I have never visited the new branch office in the business park, so how will I find the right building when I arrive there tomorrow morning? B: Don't worry, I will email you a {{BLANK}} that shows the parking area, the main entrance and the closest bus stop before you leave tonight.",
    "cn": "A：我從來沒去過商業園區裡的新分公司，明天早上到那裡時我要怎麼找到正確的大樓？ B：別擔心，今晚你出發前我會寄給你一張【地圖】，上面標示了停車區、正門和最近的公車站。"
  },
  {
    "word": "globe",
    "pos": "n.",
    "cn_def": "地球儀；全世界",
    "en_def": "a round model of the Earth; also the whole world",
    "sentence": "A: What should we put on the reception desk to show visitors that our shipping company works with customers in many different places? B: Let's buy a large {{BLANK}} with small flags on it, so guests can see every city where we deliver goods while they wait for their meetings.",
    "cn": "A：我們該在接待櫃台放什麼，讓訪客知道我們的貨運公司和許多不同地方的客戶合作？ B：我們買一個插著小旗子的大【地球儀】吧，這樣客人在等候開會時就能看到我們送貨的每一個城市。"
  },
  {
    "word": "continent",
    "pos": "n.",
    "cn_def": "洲；大陸",
    "en_def": "one of the very large land areas of the world, such as Asia or Africa",
    "sentence": "A: Our sales team has already opened offices in Japan, Korea and Thailand, so where does the director want to expand the business next year? B: She wants to move into Africa, because it is a huge {{BLANK}} with many growing cities and young customers who are starting to buy smartphones online.",
    "cn": "A：我們的業務團隊已經在日本、韓國和泰國開了辦公室，那總監明年想把生意擴展到哪裡？ B：她想進軍非洲，因為那是一個巨大的【大陸】，有許多正在成長的城市，以及開始在網路上買智慧型手機的年輕顧客。"
  },
  {
    "word": "country",
    "pos": "n.",
    "cn_def": "國家",
    "en_def": "an area of land with its own government; a nation",
    "sentence": "A: Do you know why the new manager from the head office speaks Spanish, French and English so well during our video meetings? B: She grew up in a small {{BLANK}} in South America, and later she studied in Europe for six years before she joined our company in Taipei.",
    "cn": "A：你知道為什麼總公司來的新經理在我們視訊會議時西班牙文、法文和英文都說得那麼好嗎？ B：她在南美洲的一個小【國家】長大，後來在歐洲讀了六年書，才加入我們在台北的公司。"
  },
  {
    "word": "region",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "a large area of a country or the world with its own features",
    "sentence": "A: Why are our coffee shops in the north selling so much more iced tea than the shops in the south this summer? B: The northern {{BLANK}} has been much hotter and drier than usual since June, so many customers want cold drinks when they come in after work.",
    "cn": "A：為什麼今年夏天我們北部的咖啡店比南部的店賣出更多冰茶？ B：從六月以來，北部【地區】比往常更熱也更乾燥，所以很多顧客下班後進來都想喝冷飲。"
  },
  {
    "word": "landscape",
    "pos": "n.",
    "cn_def": "風景；景觀",
    "en_def": "everything you can see when you look across an area of land",
    "sentence": "A: Why did the marketing team choose this small mountain village for the photos in our new travel brochure for next spring? B: The {{BLANK}} there is beautiful, with green tea fields, old stone houses and a quiet lake, so the pictures will attract many tourists from the city.",
    "cn": "A：為什麼行銷團隊選擇這個小山村來拍我們明年春天新旅遊手冊的照片？ B：那裡的【風景】很美，有綠色的茶園、古老的石屋和寧靜的湖泊，所以照片會吸引很多城市來的遊客。"
  },
  {
    "word": "terrain",
    "pos": "n.",
    "cn_def": "地形；地勢",
    "en_def": "land, especially when talking about its shape or how easy it is to cross",
    "sentence": "A: Why does the delivery to the farm near the mountains always take two more hours than the delivery to the city stores? B: The {{BLANK}} in that area is rocky and steep, so our drivers must go slowly and sometimes use a smaller truck to get up the narrow roads safely.",
    "cn": "A：為什麼送貨到山區附近那座農場總是比送到市區商店多花兩小時？ B：那個區域的【地形】崎嶇又陡峭，所以我們的司機必須慢慢開，有時還得改用較小的卡車才能安全地開上狹窄的道路。"
  },
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the usual weather conditions in a place over a long time",
    "sentence": "A: Our company is thinking about moving its main factory to the south, but will the hot weather cause problems for our workers and machines? B: The {{BLANK}} there is warm and wet most of the year, so we will need good air conditioning and must plan regular checks on the equipment.",
    "cn": "A：我們公司正考慮把主要工廠搬到南部，但炎熱的天氣會不會對我們的員工和機器造成問題？ B：那裡的【氣候】一年中大部分時間都溫暖潮濕，所以我們需要良好的空調，並且必須安排定期檢查設備。"
  },
  {
    "word": "weather",
    "pos": "n.",
    "cn_def": "天氣",
    "en_def": "the condition of the air, such as sun, rain, wind or temperature, on a particular day",
    "sentence": "A: Are we still going to hold the company picnic in the riverside park on Saturday, or should we tell everyone to stay home? B: The {{BLANK}} report says it will rain heavily all afternoon, so I think we should move the event indoors to the hotel ballroom instead.",
    "cn": "A：我們星期六還要在河濱公園舉辦公司野餐嗎？還是應該通知大家待在家？ B：【天氣】預報說整個下午都會下大雨，所以我認為我們應該把活動改到飯店宴會廳的室內舉行。"
  },
  {
    "word": "latitude",
    "pos": "n.",
    "cn_def": "緯度",
    "en_def": "the distance of a place north or south of the equator, measured in degrees",
    "sentence": "A: The solar panel company says our new warehouse roof can produce a lot of power, but how did they calculate the amount? B: They looked at the {{BLANK}} of our location, which shows how far north we are, and then they estimated how much sunlight we get each month.",
    "cn": "A：太陽能板公司說我們新倉庫的屋頂可以產生很多電力，但他們是怎麼計算出這個數量的？ B：他們查看了我們所在位置的【緯度】，也就是我們在多北邊的位置，然後估算出我們每個月能得到多少日照。"
  },
  {
    "word": "longitude",
    "pos": "n.",
    "cn_def": "經度",
    "en_def": "the distance of a place east or west of a fixed line, measured in degrees",
    "sentence": "A: How does the captain of our cargo ship know exactly where the ship is when it is in the middle of the ocean at night? B: The navigation system shows both the latitude and the {{BLANK}} of the ship every minute, so the crew can always check their exact position on the screen.",
    "cn": "A：我們貨船的船長晚上在大洋中央時，怎麼知道船的確切位置？ B：導航系統每分鐘都會顯示船的緯度和【經度】，所以船員隨時都能在螢幕上確認他們的確切位置。"
  },
  {
    "word": "equator",
    "pos": "n.",
    "cn_def": "赤道",
    "en_def": "an imaginary line around the middle of the Earth",
    "sentence": "A: Why is it hot all year in Singapore, even in December, when our office in Taipei is getting cold and people wear jackets? B: Singapore is very close to the {{BLANK}}, so the sun is strong every month, and the temperature hardly changes between summer and winter there.",
    "cn": "A：為什麼新加坡一整年都很熱，甚至在十二月，當我們台北的辦公室變冷、大家都穿外套時也是一樣？ B：新加坡非常靠近【赤道】，所以每個月陽光都很強，那裡的氣溫在夏天和冬天之間幾乎沒有變化。"
  },
  {
    "word": "hemisphere",
    "pos": "n.",
    "cn_def": "半球",
    "en_def": "one half of the Earth, such as the northern or southern half",
    "sentence": "A: Why does our Australian office plan its big summer sale in January when we are selling winter coats here in Taiwan? B: Australia is in the southern {{BLANK}}, so their seasons are the opposite of ours, and January is the hottest time of the year for them.",
    "cn": "A：為什麼我們澳洲辦公室把夏季大特賣安排在一月，而我們台灣這邊正在賣冬季外套？ B：澳洲位於南【半球】，所以他們的季節和我們相反，一月對他們來說是一年中最熱的時候。"
  },
  {
    "word": "ocean",
    "pos": "n.",
    "cn_def": "海洋；大洋",
    "en_def": "the very large area of salt water that covers most of the Earth",
    "sentence": "A: How long will it take for our furniture order from the factory in California to reach the store in Kaohsiung? B: The goods will travel by ship across the Pacific {{BLANK}}, so it usually takes about three weeks, and then one more day by truck to the store.",
    "cn": "A：我們從加州工廠訂的家具要多久才能送到高雄的店？ B：貨物會用船橫越太平【洋】運送，所以通常需要大約三週，然後再用卡車多花一天送到店裡。"
  },
  {
    "word": "sea",
    "pos": "n.",
    "cn_def": "海",
    "en_def": "a large area of salt water that is smaller than an ocean",
    "sentence": "A: Where would you suggest we hold the team-building trip this summer so that everyone can relax after the busy sales season? B: Let's book a hotel by the {{BLANK}} in Kenting, where people can swim, enjoy fresh seafood for dinner and watch the sunset from the beach.",
    "cn": "A：你建議今年夏天的團隊建立旅行辦在哪裡，好讓大家在忙碌的銷售季後放鬆一下？ B：我們訂墾丁【海】邊的飯店吧，大家可以去游泳、晚餐享用新鮮海鮮，還能在海灘上看夕陽。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河；江",
    "en_def": "a long natural flow of water that goes into the sea or a lake",
    "sentence": "A: Why did the city government decide to build the new office tower so far from the main train station and shopping area? B: The land next to the {{BLANK}} was cheaper and larger, and the planners want workers to enjoy the water view and the bike path along the bank.",
    "cn": "A：為什麼市政府決定把新辦公大樓蓋在離主要火車站和購物區那麼遠的地方？ B：【河】旁邊的土地比較便宜也比較大，而且規劃人員希望上班族能享受水景和沿著河岸的自行車道。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖",
    "en_def": "a large area of fresh water with land all around it",
    "sentence": "A: Have you decided where the company will hold the weekend retreat for the managers after the end of the financial year? B: Yes, we booked a quiet resort beside a large {{BLANK}} in the mountains, where people can go boating in the morning and have meetings in the afternoon.",
    "cn": "A：你決定好財務年度結束後公司要在哪裡為經理們舉辦週末靜修活動了嗎？ B：決定了，我們訂了山中一座大【湖】旁邊的安靜度假村，大家早上可以划船，下午再開會。"
  },
  {
    "word": "mountain",
    "pos": "n.",
    "cn_def": "山",
    "en_def": "a very high hill",
    "sentence": "A: Why are the tea leaves from that farm so much more expensive than the ones we usually buy for the office kitchen? B: They are grown high on a {{BLANK}} where the air is cool and clean, and the workers have to pick every leaf by hand on steep slopes.",
    "cn": "A：為什麼那座農場的茶葉比我們平常買來放辦公室茶水間的貴那麼多？ B：它們種在高【山】上，那裡空氣涼爽又乾淨，而且工人必須在陡坡上用手摘下每一片葉子。"
  },
  {
    "word": "hill",
    "pos": "n.",
    "cn_def": "小山；丘陵",
    "en_def": "an area of land that is higher than the land around it but lower than a mountain",
    "sentence": "A: Is the new hotel close enough to the conference center for our guests to walk there each morning, or should we rent a bus? B: It is only ten minutes away, but the road goes up a steep {{BLANK}}, so older guests with heavy bags might prefer to take the shuttle.",
    "cn": "A：新飯店離會議中心近到我們的客人每天早上可以走路過去嗎？還是我們應該租一輛巴士？ B：只要十分鐘，但路要爬上一個陡峭的【小山坡】，所以帶著重行李的年長客人可能會比較想搭接駁車。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷；谷地",
    "en_def": "a low area of land between hills or mountains, often with a river",
    "sentence": "A: Why does the winery in that area produce such good grapes every year, even when the weather in other places is bad? B: The farm sits in a sheltered {{BLANK}} between two mountains, so strong winds cannot reach the vines, and a small river gives them enough water.",
    "cn": "A：為什麼那一帶的酒莊每年都能種出那麼好的葡萄，即使其他地方天氣很差也一樣？ B：那座農場位於兩座山之間一個受保護的【山谷】，所以強風吹不到葡萄藤，而且一條小河提供它們足夠的水。"
  },
  {
    "word": "plain",
    "pos": "n.",
    "cn_def": "平原",
    "en_def": "a large area of flat land with few trees",
    "sentence": "A: Why did the logistics company choose that area for its new distribution center instead of the cheaper land near the hills? B: It is on a wide, flat {{BLANK}} with good highways, so large trucks can drive in and out easily and the building is simple to expand later.",
    "cn": "A：為什麼物流公司選那個地區蓋新的配送中心，而不是選山丘附近比較便宜的土地？ B：它位於一片寬廣平坦的【平原】上，有良好的公路，所以大卡車可以輕鬆進出，而且建築物以後也很容易擴建。"
  },
  {
    "word": "plateau",
    "pos": "n.",
    "cn_def": "高原",
    "en_def": "a large area of high, flat land",
    "sentence": "A: Why did several of our engineers feel tired and short of breath during the first days of the project in the west of China? B: The work site is on a high {{BLANK}} about four thousand meters above sea level, so the air is thin and people need time to get used to it.",
    "cn": "A：為什麼我們有幾位工程師在中國西部的專案頭幾天覺得很累又喘不過氣？ B：工地位於海拔約四千公尺的【高原】上，所以空氣稀薄，大家需要時間來適應。"
  },
  {
    "word": "desert",
    "pos": "n.",
    "cn_def": "沙漠",
    "en_def": "a large, dry area of land with very little rain and few plants",
    "sentence": "A: Why does the solar energy company want to build its largest power station so far away from the cities in the north? B: The land is a huge {{BLANK}} where it almost never rains, so there is strong sunshine every day and nobody needs the empty ground for farming or houses.",
    "cn": "A：為什麼那家太陽能公司想把最大的發電廠蓋在離北部城市那麼遠的地方？ B：那片土地是一大片幾乎從不下雨的【沙漠】，所以每天都有強烈的陽光，而且沒有人需要那塊空地來耕種或蓋房子。"
  },
  {
    "word": "forest",
    "pos": "n.",
    "cn_def": "森林",
    "en_def": "a large area of land covered with trees",
    "sentence": "A: Where are we taking the new employees for the outdoor training day next Friday, and what should they wear for the activities? B: We are going to a national {{BLANK}} park an hour away, so they should wear comfortable shoes because the walking paths go through thick trees and wet ground.",
    "cn": "A：下週五的戶外訓練日我們要帶新進員工去哪裡？他們活動時該穿什麼？ B：我們要去一小時車程外的國家【森林】公園，所以他們應該穿舒適的鞋子，因為步道會穿過茂密的樹林和潮濕的地面。"
  },
  {
    "word": "island",
    "pos": "n.",
    "cn_def": "島",
    "en_def": "a piece of land with water all around it",
    "sentence": "A: Why do the prices of fruit and vegetables at the hotel restaurant seem much higher than in the city where our head office is? B: The hotel is on a small {{BLANK}}, so almost all food must come by boat from the mainland, and the shipping costs are added to every dish.",
    "cn": "A：為什麼飯店餐廳的水果和蔬菜價格看起來比我們總公司所在的城市高很多？ B：飯店位於一座小【島】上，所以幾乎所有食物都必須從本島用船運來，運費都被加進了每道菜裡。"
  },
  {
    "word": "peninsula",
    "pos": "n.",
    "cn_def": "半島",
    "en_def": "a long piece of land that is mostly surrounded by water but joined to a larger area",
    "sentence": "A: The client wants to visit three cities in Korea next month, but how will the travel agent plan such a busy trip in only five days? B: Korea is a {{BLANK}}, so the cities are not very far apart, and the fast trains can take them from one coast to another in a few hours.",
    "cn": "A：客戶下個月想去韓國的三個城市，但旅行社要怎麼在只有五天內安排這麼緊湊的行程？ B：韓國是一個【半島】，所以城市之間不會太遠，而且高速列車幾個小時內就能帶他們從一邊的海岸到另一邊。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸；沿海地區",
    "en_def": "the land next to the sea",
    "sentence": "A: Why are so many of the hotel's guests from overseas booking rooms with a balcony on the east side of the building this year? B: The east side faces the {{BLANK}}, so guests can watch the sunrise over the water and hear the waves while they eat breakfast outside.",
    "cn": "A：為什麼今年飯店有那麼多外國客人都訂大樓東側附陽台的房間？ B：東側面向【海岸】，所以客人可以看到海上的日出，在外面吃早餐時還能聽到海浪聲。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸；岸邊",
    "en_def": "the land along the edge of a sea, lake or wide river",
    "sentence": "A: The tour group wants to go fishing at the lake during their visit, but do they need to rent a boat from the resort? B: No, they can fish from the {{BLANK}} near the hotel garden, because there is a wooden deck there with chairs, lights and enough space for ten people.",
    "cn": "A：旅行團在參觀期間想去湖邊釣魚，他們需要向度假村租船嗎？ B：不用，他們可以在飯店花園附近的【岸邊】釣魚，因為那裡有一座木製平台，有椅子、燈，空間也夠十個人使用。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港口；港灣",
    "en_def": "an area of water near the land where ships can stay safely",
    "sentence": "A: Why did the shipping manager say our container of electronics will arrive two days later than the date on the original schedule? B: A storm closed the {{BLANK}} in Keelung for two days, so all the cargo ships had to wait outside until it was safe to enter and unload.",
    "cn": "A：為什麼航運經理說我們那個貨櫃的電子產品會比原本行程表上的日期晚兩天到？ B：一場暴風雨讓基隆【港】關閉了兩天，所以所有貨船都必須在外面等，直到可以安全進港卸貨。"
  },
  {
    "word": "border",
    "pos": "n.",
    "cn_def": "邊界；國界",
    "en_def": "the official line that separates two countries or areas",
    "sentence": "A: How long will it take for the truck carrying our machine parts to get from the factory in Germany to our customer in France? B: It is only a short drive, but the truck must stop at the {{BLANK}} for a quick check of the documents, so I expect delivery tomorrow afternoon.",
    "cn": "A：載著我們機器零件的卡車從德國工廠到法國客戶那裡要多久？ B：其實車程很短，但卡車必須在【邊界】停下來快速檢查文件，所以我預計明天下午會送達。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "都市的；城市的",
    "en_def": "relating to a city or town",
    "sentence": "A: Why does our bicycle company sell so many folding bikes in Taipei but very few in the farming villages in the south? B: People in {{BLANK}} areas live in small apartments and take the metro to work, so they need a light bike that they can carry easily and store inside.",
    "cn": "A：為什麼我們的自行車公司在台北賣出很多摺疊車，但在南部的農村卻賣得很少？ B：【都市】地區的人住在小公寓裡，搭捷運上班，所以他們需要一台可以輕鬆攜帶並放在室內的輕便自行車。"
  },
  {
    "word": "rural",
    "pos": "adj.",
    "cn_def": "鄉村的；農村的",
    "en_def": "relating to the countryside, not the city",
    "sentence": "A: The bank wants to open more branches next year, but why is the manager planning to send mobile service vans instead of building offices? B: Many customers in {{BLANK}} villages live far from town, so a van that visits each village once a week is cheaper and more convenient for them.",
    "cn": "A：銀行明年想開更多分行，但為什麼經理打算派行動服務車，而不是蓋辦公室？ B：很多住在【鄉村】的客戶離市區很遠，所以每週到每個村莊一次的服務車對他們來說更便宜也更方便。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "自然的；天然的",
    "en_def": "existing in nature and not made or caused by people",
    "sentence": "A: Why did the resort decide to keep the old rocks and trees around the swimming pool instead of building a modern garden? B: The owner believes guests prefer {{BLANK}} beauty, so the designers kept the waterfall, the big stones and the local plants exactly as they were.",
    "cn": "A：為什麼度假村決定保留游泳池周圍的老岩石和樹木，而不是蓋一座現代化花園？ B：老闆相信客人比較喜歡【自然】之美，所以設計師把瀑布、大石頭和當地植物都保持原狀。"
  },
  {
    "word": "physical",
    "pos": "adj.",
    "cn_def": "自然地理的；身體的；實體的",
    "en_def": "relating to the real shape and features of land, or to the body",
    "sentence": "A: The new staff member keeps getting lost when she drives to our customers' farms, so what kind of map should we give her? B: Give her a {{BLANK}} map that shows the hills, rivers and valleys, because the small roads out there are not on most phone apps.",
    "cn": "A：新同事開車去客戶的農場時一直迷路，我們應該給她哪一種地圖？ B：給她一張標示山丘、河流和山谷的【地形】圖，因為那邊的小路在大部分手機應用程式上都找不到。"
  },
  {
    "word": "human",
    "pos": "adj.",
    "cn_def": "人類的；人文的",
    "en_def": "relating to people, not to nature or machines",
    "sentence": "A: Why did the city planners invite a university professor to the meeting about the new highway through the old town? B: She studies {{BLANK}} geography, so she can explain how the road will change the way people live, shop and travel in that neighborhood.",
    "cn": "A：為什麼都市規劃人員邀請一位大學教授來參加關於穿越舊城區新公路的會議？ B：她研究【人文】地理，所以她可以解釋這條路會如何改變那個社區居民的生活、購物和交通方式。"
  }
];

const MCQS = [
  {
    "q": "Please bring a printed _____ of the factory site. The phone signal there is weak, and the roads are not marked clearly.",
    "options": [
      "map",
      "globe",
      "border",
      "valley"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The airline's new advertisement shows planes flying around the _____. It wants customers to know that it serves cities everywhere.",
    "options": [
      "region",
      "globe",
      "shore",
      "plain"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Asia is the largest _____ in the world. Our company now has offices in eight of its countries.",
    "options": [
      "island",
      "harbor",
      "continent",
      "valley"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Applicants must have a passport valid for travel to any _____ in Europe. The job requires frequent trips to clients abroad.",
    "options": [
      "equator",
      "coast",
      "desert",
      "country"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our sales in the coastal _____ rose by twelve percent last quarter. The manager credits the new delivery service for the growth.",
    "options": [
      "latitude",
      "region",
      "hemisphere",
      "globe"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The architect designed the hotel to fit into the surrounding _____. Its low roof and stone walls match the hills and fields nearby.",
    "options": [
      "landscape",
      "equator",
      "border",
      "longitude"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new delivery vans have large tires for rough _____. They can travel safely on muddy roads in the mountain villages.",
    "options": [
      "climate",
      "harbor",
      "continent",
      "terrain"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Tea farmers prefer this area because of its cool _____. The temperature stays mild and the rain is steady throughout the year.",
    "options": [
      "terrain",
      "peninsula",
      "climate",
      "border"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The outdoor product launch was moved indoors because of bad _____. Strong winds and heavy rain were expected all day.",
    "options": [
      "weather",
      "landscape",
      "border",
      "plateau"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The research station is located at a high _____ near the North Pole. Winters there are long, dark and extremely cold.",
    "options": [
      "valley",
      "harbor",
      "latitude",
      "continent"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Each line of _____ runs from the North Pole to the South Pole. Sailors use these lines to find their position at sea.",
    "options": [
      "terrain",
      "longitude",
      "plateau",
      "shore"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Countries near the _____ have warm weather all year. Our air conditioner sales in those markets are steady every month.",
    "options": [
      "plateau",
      "hill",
      "harbor",
      "equator"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Summer in the southern _____ begins in December. Our Australian stores therefore launch their swimwear collection before Christmas.",
    "options": [
      "continent",
      "landscape",
      "hemisphere",
      "valley"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The cargo ship took twenty days to cross the Atlantic _____. Bad weather in the middle of the trip slowed it down.",
    "options": [
      "ocean",
      "lake",
      "valley",
      "plateau"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Many hotels along the beach have rooms facing the _____. Guests can listen to the waves from their balconies.",
    "options": [
      "hill",
      "desert",
      "plateau",
      "sea"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The factory is built next to a wide _____. Boats carry raw materials to the plant from the port every week.",
    "options": [
      "desert",
      "river",
      "hill",
      "plateau"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The resort offers kayaks on the _____ every morning. Guests can also walk the trail that goes around the water.",
    "options": [
      "lake",
      "desert",
      "hill",
      "border"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Engineers built a long tunnel through the _____ last year. The new route has cut travel time between the two cities by an hour.",
    "options": [
      "lake",
      "sea",
      "shore",
      "mountain"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The company's head office stands on a small _____ above the town. Visitors can see the whole harbor from its top floor.",
    "options": [
      "lake",
      "ocean",
      "hill",
      "sea"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Rice farms fill the green _____ between the two mountain ranges. A river provides water for the fields all year.",
    "options": [
      "peak",
      "valley",
      "summit",
      "ridge"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Grass and wheat cover the wide, flat _____ in the center of the country. The area is ideal for large farms and warehouses.",
    "options": [
      "hill",
      "peak",
      "cliff",
      "plain"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Snow often closes the roads across the high _____ in winter. Drivers should check road reports before starting the trip.",
    "options": [
      "plateau",
      "ocean",
      "harbor",
      "lake"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Tourists can join a guided camel ride across the _____. Guides provide plenty of water because temperatures often go above forty degrees.",
    "options": [
      "harbor",
      "desert",
      "lake",
      "valley"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Workers are planting new trees in the _____ that was damaged by fire. The project should restore the area within ten years.",
    "options": [
      "desert",
      "ocean",
      "forest",
      "border"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The resort is located on a small _____ off the coast. Guests take a ferry from the mainland to reach it.",
    "options": [
      "island",
      "valley",
      "plateau",
      "desert"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The town sits at the end of a narrow _____. Water surrounds it on three sides, so seafood is the local specialty.",
    "options": [
      "plateau",
      "valley",
      "desert",
      "peninsula"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The new highway runs along the east _____ for nearly fifty kilometers. Drivers can enjoy ocean views for most of the trip.",
    "options": [
      "equator",
      "coast",
      "latitude",
      "globe"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The guests walked along the _____ of the lake after dinner. The path was lit by small lamps near the water.",
    "options": [
      "climate",
      "continent",
      "shore",
      "latitude"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Fishing boats return to the _____ before the storm arrives. The port authority has closed the area to all ships until Thursday.",
    "options": [
      "valley",
      "plateau",
      "desert",
      "harbor"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Trucks waited for six hours at the _____ yesterday. Customs officers were checking every vehicle that entered the country.",
    "options": [
      "border",
      "climate",
      "weather",
      "landscape"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "map": {
    "pos": "n.",
    "en_def": "a drawing that shows where places, roads and rivers are",
    "cn_def": "地圖"
  },
  "globe": {
    "pos": "n.",
    "en_def": "a round model of the Earth; also the whole world",
    "cn_def": "地球儀；全世界"
  },
  "continent": {
    "pos": "n.",
    "en_def": "one of the very large land areas of the world, such as Asia or Africa",
    "cn_def": "洲；大陸"
  },
  "country": {
    "pos": "n.",
    "en_def": "an area of land with its own government; a nation",
    "cn_def": "國家"
  },
  "region": {
    "pos": "n.",
    "en_def": "a large area of a country or the world with its own features",
    "cn_def": "地區；區域"
  },
  "landscape": {
    "pos": "n.",
    "en_def": "everything you can see when you look across an area of land",
    "cn_def": "風景；景觀"
  },
  "terrain": {
    "pos": "n.",
    "en_def": "land, especially when talking about its shape or how easy it is to cross",
    "cn_def": "地形；地勢"
  },
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather conditions in a place over a long time",
    "cn_def": "氣候"
  },
  "weather": {
    "pos": "n.",
    "en_def": "the condition of the air, such as sun, rain, wind or temperature, on a particular day",
    "cn_def": "天氣"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator, measured in degrees",
    "cn_def": "緯度"
  },
  "longitude": {
    "pos": "n.",
    "en_def": "the distance of a place east or west of a fixed line, measured in degrees",
    "cn_def": "經度"
  },
  "equator": {
    "pos": "n.",
    "en_def": "an imaginary line around the middle of the Earth",
    "cn_def": "赤道"
  },
  "hemisphere": {
    "pos": "n.",
    "en_def": "one half of the Earth, such as the northern or southern half",
    "cn_def": "半球"
  },
  "ocean": {
    "pos": "n.",
    "en_def": "the very large area of salt water that covers most of the Earth",
    "cn_def": "海洋；大洋"
  },
  "sea": {
    "pos": "n.",
    "en_def": "a large area of salt water that is smaller than an ocean",
    "cn_def": "海"
  },
  "river": {
    "pos": "n.",
    "en_def": "a long natural flow of water that goes into the sea or a lake",
    "cn_def": "河；江"
  },
  "lake": {
    "pos": "n.",
    "en_def": "a large area of fresh water with land all around it",
    "cn_def": "湖"
  },
  "mountain": {
    "pos": "n.",
    "en_def": "a very high hill",
    "cn_def": "山"
  },
  "hill": {
    "pos": "n.",
    "en_def": "an area of land that is higher than the land around it but lower than a mountain",
    "cn_def": "小山；丘陵"
  },
  "valley": {
    "pos": "n.",
    "en_def": "a low area of land between hills or mountains, often with a river",
    "cn_def": "山谷；谷地"
  },
  "plain": {
    "pos": "n.",
    "en_def": "a large area of flat land with few trees",
    "cn_def": "平原"
  },
  "plateau": {
    "pos": "n.",
    "en_def": "a large area of high, flat land",
    "cn_def": "高原"
  },
  "desert": {
    "pos": "n.",
    "en_def": "a large, dry area of land with very little rain and few plants",
    "cn_def": "沙漠"
  },
  "forest": {
    "pos": "n.",
    "en_def": "a large area of land covered with trees",
    "cn_def": "森林"
  },
  "island": {
    "pos": "n.",
    "en_def": "a piece of land with water all around it",
    "cn_def": "島"
  },
  "peninsula": {
    "pos": "n.",
    "en_def": "a long piece of land that is mostly surrounded by water but joined to a larger area",
    "cn_def": "半島"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸；沿海地區"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of a sea, lake or wide river",
    "cn_def": "岸；岸邊"
  },
  "harbor": {
    "pos": "n.",
    "en_def": "an area of water near the land where ships can stay safely",
    "cn_def": "港口；港灣"
  },
  "border": {
    "pos": "n.",
    "en_def": "the official line that separates two countries or areas",
    "cn_def": "邊界；國界"
  },
  "urban": {
    "pos": "adj.",
    "en_def": "relating to a city or town",
    "cn_def": "都市的；城市的"
  },
  "rural": {
    "pos": "adj.",
    "en_def": "relating to the countryside, not the city",
    "cn_def": "鄉村的；農村的"
  },
  "natural": {
    "pos": "adj.",
    "en_def": "existing in nature and not made or caused by people",
    "cn_def": "自然的；天然的"
  },
  "physical": {
    "pos": "adj.",
    "en_def": "relating to the real shape and features of land, or to the body",
    "cn_def": "自然地理的；身體的；實體的"
  },
  "human": {
    "pos": "adj.",
    "en_def": "relating to people, not to nature or machines",
    "cn_def": "人類的；人文的"
  }
};

const EXTRA_GLOSSES = {};
