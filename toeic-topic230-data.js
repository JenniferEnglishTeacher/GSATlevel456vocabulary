// Topic 230 Quiz Data: Map 地圖
// Source word list: https://www.examword.com/group-topic/map — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T230 - Map 地圖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "map chart",
    "pos": "n.phr.",
    "cn_def": "地圖圖表",
    "en_def": "a chart that shows numbers or information on a map",
    "sentence": "A: The sales director wants to see which cities bought the most of our new coffee machines last quarter, so what kind of graphic should I prepare for Friday's meeting? B: I think a {{BLANK}} would work best, because everyone can quickly see the strong and weak cities by looking at the colors on each part of the country.",
    "cn": "A：業務總監想看上一季哪些城市買了最多我們的新咖啡機，那我該為星期五的會議準備哪種圖表？ B：我認為【地圖圖表】最合適，因為大家只要看國內各地的顏色，就能很快看出表現強和弱的城市。"
  },
  {
    "word": "geography",
    "pos": "n.",
    "cn_def": "地理；地形",
    "en_def": "the study of land, places, and where things are on Earth",
    "sentence": "A: Our logistics team keeps saying that delivery times to the eastern towns are much longer than to the west, but why is that happening when the distance looks similar? B: It is mostly because of the {{BLANK}} there, since the trucks have to drive slowly through high mountains and narrow roads that often close after heavy rain.",
    "cn": "A：我們的物流團隊一直說送貨到東部城鎮的時間比西部長很多，但距離看起來差不多，為什麼會這樣？ B：主要是因為那裡的【地形】，卡車必須緩慢穿越高山和狹窄的道路，而這些道路在大雨後經常封閉。"
  },
  {
    "word": "region",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "a large part of a country or the world",
    "sentence": "A: The marketing manager asked me to plan the launch events for our new snack products next spring, so where do you think we should start first? B: I would start in the northern {{BLANK}}, because our survey showed that young office workers there buy the most healthy snacks and visit convenience stores almost every day.",
    "cn": "A：行銷經理要我規劃明年春天新零食產品的上市活動，你覺得我們應該先從哪裡開始？ B：我會先從北部【地區】開始，因為我們的調查顯示，那裡的年輕上班族買最多健康零食，而且幾乎每天都會去便利商店。"
  },
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "地點；位置",
    "en_def": "a place where something is or happens",
    "sentence": "A: We are finally opening a second café next year, but the owner and I still disagree about whether we should choose a busy street or a quieter neighborhood. B: In my experience, the {{BLANK}} matters more than anything else, so we should pick a spot near the train station where hundreds of commuters walk past every morning.",
    "cn": "A：我們明年終於要開第二間咖啡店了，但老闆和我對於應該選熱鬧的街道還是比較安靜的社區仍有不同意見。 B：根據我的經驗，【地點】比什麼都重要，所以我們應該選在火車站附近，那裡每天早上有好幾百位通勤者經過。"
  },
  {
    "word": "boundary",
    "pos": "n.",
    "cn_def": "邊界；界線",
    "en_def": "a line that marks the edge of an area",
    "sentence": "A: Before the construction company starts building the new warehouse next month, do we know exactly where our land ends and the neighbor's farm begins? B: Yes, the surveyor checked the {{BLANK}} last week and put small wooden posts along the fence, so the builders will not accidentally dig on the farmer's property.",
    "cn": "A：在建設公司下個月開始興建新倉庫之前，我們確切知道我們的土地在哪裡結束、鄰居的農場從哪裡開始嗎？ B：知道，測量員上週檢查了【邊界】，並沿著圍籬放了小木樁，所以工人不會不小心挖到農夫的土地。"
  },
  {
    "word": "area",
    "pos": "n.",
    "cn_def": "區域；地區",
    "en_def": "a part of a place, city, or country",
    "sentence": "A: My company is moving me to the Kaohsiung branch in January, and I need to find an apartment that is safe, quiet, and not too expensive. B: You should look at the {{BLANK}} around the central park, because it has good schools, several supermarkets, and a subway line that goes straight to the business district.",
    "cn": "A：公司一月要把我調到高雄分公司，我需要找一間安全、安靜而且不太貴的公寓。 B：你應該看看中央公園周圍的【區域】，因為那裡有好學校、好幾家超市，還有一條直達商業區的捷運線。"
  },
  {
    "word": "coordinate",
    "pos": "n.",
    "cn_def": "座標",
    "en_def": "one of a set of numbers that show an exact position on a map",
    "sentence": "A: The new delivery driver could not find the remote factory yesterday because the address on our website was not clear enough, so how can we help him today? B: Let's send him the exact GPS {{BLANK}} of the main gate, so his phone can guide him directly there without stopping to ask local farmers for directions.",
    "cn": "A：新來的送貨司機昨天找不到那間偏遠的工廠，因為我們網站上的地址不夠清楚，那今天我們要怎麼幫他？ B：我們把大門的精確GPS【座標】傳給他吧，這樣他的手機就能直接帶他過去，不必停下來向當地農民問路。"
  },
  {
    "word": "latitude",
    "pos": "n.",
    "cn_def": "緯度",
    "en_def": "the distance of a place north or south of the equator",
    "sentence": "A: Our travel agency is designing a winter tour for customers who want to see the northern lights, so which countries should we include in the brochure? B: We should choose places at a high {{BLANK}}, like northern Norway or Finland, because the lights appear most clearly far from the equator on cold, dark, and cloudless nights.",
    "cn": "A：我們旅行社正在設計一個給想看北極光的顧客的冬季行程，那手冊裡應該包含哪些國家？ B：我們應該選高【緯度】的地方，例如挪威北部或芬蘭，因為在遠離赤道、寒冷黑暗又無雲的夜晚，極光最清楚。"
  },
  {
    "word": "longitude",
    "pos": "n.",
    "cn_def": "經度",
    "en_def": "the distance of a place east or west of a fixed line on Earth",
    "sentence": "A: I am preparing a training session for new pilots at our airline, and they keep asking why the time changes when they fly across the ocean. B: You can explain that time zones depend on {{BLANK}}, so every time a plane moves about fifteen degrees east or west, the local clock usually changes by one hour.",
    "cn": "A：我正在為我們航空公司的新進機師準備一場訓練課程，他們一直問為什麼飛越海洋時時間會改變。 B：你可以解釋時區取決於【經度】，所以飛機每往東或往西移動大約十五度，當地時鐘通常就會改變一小時。"
  },
  {
    "word": "scale",
    "pos": "n.",
    "cn_def": "比例尺；規模",
    "en_def": "the relationship between a distance on a map and the real distance",
    "sentence": "A: The hiking club wants to print a trail guide for the national park, but the old version looked confusing because it was hard to judge how far each path was. B: This time we should add a clear {{BLANK}} at the bottom, so visitors can see that one centimeter equals one kilometer and plan their walking time better.",
    "cn": "A：登山社想印一份國家公園的步道指南，但舊版看起來很混亂，因為很難判斷每條步道有多遠。 B：這次我們應該在底部加上清楚的【比例尺】，這樣遊客就能看到一公分等於一公里，更能規劃步行時間。"
  },
  {
    "word": "projection",
    "pos": "n.",
    "cn_def": "投影法；預測",
    "en_def": "a way of showing the round Earth on a flat map",
    "sentence": "A: Several clients asked why Greenland looks almost as big as Africa on the world map in our meeting room, even though it is actually much smaller. B: That happens because of the {{BLANK}} the mapmaker used, which stretches places near the poles, so we should buy a newer map that shows sizes more fairly.",
    "cn": "A：好幾位客戶問為什麼我們會議室的世界地圖上，格陵蘭看起來幾乎和非洲一樣大，雖然它其實小得多。 B：那是因為製圖者使用的【投影法】會把靠近兩極的地方拉長，所以我們應該買一張能更公平呈現面積的新地圖。"
  },
  {
    "word": "choropleth",
    "pos": "n.",
    "cn_def": "面量圖；分區設色圖",
    "en_def": "a map in which areas are shaded in different colors to show data",
    "sentence": "A: The health department wants to show the public how many people in each county got the flu vaccine this year, so what kind of map would be clear for ordinary readers? B: A {{BLANK}} would be ideal, because each county can be filled with a darker or lighter color depending on its rate, and people understand it at a glance.",
    "cn": "A：衛生局想讓民眾看到今年每個縣有多少人接種流感疫苗，那哪種地圖對一般讀者來說比較清楚？ B：【面量圖】最理想，因為每個縣可以依接種率填上較深或較淺的顏色，大家一眼就能看懂。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "符號；標誌",
    "en_def": "a small picture or sign that stands for something",
    "sentence": "A: Visitors to our shopping mall often complain that they cannot find the restrooms, even though we put up new floor maps near every entrance last month. B: Maybe the {{BLANK}} we used is too small and unfamiliar, so let's change it to the standard picture of a man and a woman that people recognize everywhere.",
    "cn": "A：我們購物中心的訪客常抱怨找不到廁所，雖然我們上個月已經在每個入口附近貼了新的樓層地圖。 B：也許我們用的【符號】太小又不常見，所以我們改成大家到處都認得的標準男女圖示吧。"
  },
  {
    "word": "marker",
    "pos": "n.",
    "cn_def": "標記；標示",
    "en_def": "a sign or pin that shows a position on a map",
    "sentence": "A: I shared the online map of our branch offices with the new sales staff, but how will they know which office is the headquarters? B: I will change the headquarters {{BLANK}} to a large red pin, while the other branches stay blue, so new employees can find the main office on their phones in seconds.",
    "cn": "A：我把我們分公司的線上地圖分享給新進業務人員了，但他們要怎麼知道哪一間是總公司？ B：我會把總公司的【標記】改成一個大的紅色圖釘，其他分公司維持藍色，這樣新員工幾秒內就能在手機上找到總公司。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "圖例",
    "en_def": "the box on a map that explains its colors and signs",
    "sentence": "A: The board members looked confused during my presentation because they did not understand what the green, yellow, and red areas on the sales map meant. B: Next time you should include a {{BLANK}} in the bottom corner that explains each color, so nobody has to interrupt you or guess what the different shades show.",
    "cn": "A：董事會成員在我簡報時看起來很困惑，因為他們不懂業務地圖上的綠色、黃色和紅色區域代表什麼意思。 B：下次你應該在右下角放一個【圖例】來解釋每個顏色，這樣就沒有人需要打斷你或猜測不同的深淺代表什麼。"
  },
  {
    "word": "color scale",
    "pos": "n.phr.",
    "cn_def": "色階；顏色刻度",
    "en_def": "a range of colors used to show low to high values",
    "sentence": "A: Our customers say the new weather app is hard to read, because the temperature map uses so many bright colors that the hot and cold areas look almost the same. B: We should use a simple {{BLANK}} that goes from light blue for cold places to dark red for hot places, so users understand it immediately.",
    "cn": "A：顧客說新的天氣應用程式很難看懂，因為溫度地圖用了太多鮮豔的顏色，熱和冷的區域看起來幾乎一樣。 B：我們應該使用簡單的【色階】，從冷的地方用淺藍色到熱的地方用深紅色，這樣使用者馬上就能理解。"
  },
  {
    "word": "density",
    "pos": "n.",
    "cn_def": "密度",
    "en_def": "how crowded a place is with people or things",
    "sentence": "A: The city planning office asked us to recommend where new bus routes are most needed, so what information should we collect before writing the report? B: First we should study the population {{BLANK}} of each district, because neighborhoods where many families live close together usually need buses that come more often.",
    "cn": "A：市政規劃處請我們建議哪裡最需要新的公車路線，那我們在寫報告前應該收集哪些資訊？ B：我們應該先研究每一區的人口【密度】，因為許多家庭住得很靠近的社區通常需要班次更頻繁的公車。"
  },
  {
    "word": "distribution",
    "pos": "n.",
    "cn_def": "分布；分配",
    "en_def": "the way something is spread over an area",
    "sentence": "A: Our company sells solar panels across the country, but the manager wants to know whether most of our customers live in the south or are spread everywhere. B: I can make a map showing the {{BLANK}} of customers by city, and I expect it will prove that sunny southern towns buy far more panels than the rainy north.",
    "cn": "A：我們公司在全國銷售太陽能板，但經理想知道我們大部分的顧客住在南部，還是分散在各地。 B：我可以製作一張依城市顯示顧客【分布】的地圖，我預期它會證明陽光充足的南部城鎮買的太陽能板遠比多雨的北部多。"
  },
  {
    "word": "spatial",
    "pos": "adj.",
    "cn_def": "空間的",
    "en_def": "relating to space, position, or where things are",
    "sentence": "A: Why did the shopping center hire a data company to study the way customers walk around the building on weekends? B: They want a {{BLANK}} analysis of the crowds, so they can see which corners people never visit and move popular stores there to make every part of the mall busier.",
    "cn": "A：為什麼購物中心要聘請一家數據公司研究週末顧客在大樓裡走動的方式？ B：他們想要對人潮做【空間】分析，這樣就能看出哪些角落從來沒人去，然後把熱門店家移到那裡，讓購物中心的每一部分都更熱鬧。"
  },
  {
    "word": "overlay",
    "pos": "n.",
    "cn_def": "疊加圖層；覆蓋層",
    "en_def": "a layer of information placed on top of a map or picture",
    "sentence": "A: The investors want to know whether our new stores are close to public transportation, but our sales map only shows the shops and their monthly income. B: I can add a transparent {{BLANK}} with all the subway and bus stations, so they can see both kinds of information together on the same screen.",
    "cn": "A：投資人想知道我們的新店是否靠近大眾運輸，但我們的業務地圖只顯示店面和每月收入。 B：我可以加一層包含所有捷運和公車站的透明【疊加圖層】，這樣他們就能在同一個畫面上同時看到兩種資訊。"
  },
  {
    "word": "zoom",
    "pos": "v.",
    "cn_def": "縮放；放大",
    "en_def": "to make a picture or map look bigger or smaller on a screen",
    "sentence": "A: I am meeting a client at a small restaurant downtown this afternoon, but the online map only shows the main streets and I cannot see the narrow lane. B: Just {{BLANK}} in on the map with two fingers, and the small lanes and even the shop names will appear, so you will not get lost on the way.",
    "cn": "A：我今天下午要在市中心一間小餐廳和客戶見面，但線上地圖只顯示主要街道，我看不到那條小巷。 B：只要用兩根手指把地圖【放大】，小巷甚至店名都會出現，這樣你在路上就不會迷路了。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "強調；標示",
    "en_def": "to make something easy to notice, often with a bright color",
    "sentence": "A: The regional manager only has five minutes to look at my report before her flight, so how can I make sure she notices the three cities with falling sales? B: You should {{BLANK}} those cities in bright orange on the map, so they stand out immediately while all the other areas stay in light gray.",
    "cn": "A：區域經理在搭機前只有五分鐘看我的報告，我要怎麼確保她注意到那三個業績下滑的城市？ B：你應該在地圖上用亮橘色【標示】那些城市，讓它們立刻凸顯出來，其他區域則維持淺灰色。"
  },
  {
    "word": "comparison",
    "pos": "n.",
    "cn_def": "比較",
    "en_def": "the act of looking at two or more things to see how they are similar or different",
    "sentence": "A: The director wants to know whether our online advertising campaign worked better in Taichung or in Tainan last month, so how should I present the results? B: Put two maps side by side for an easy {{BLANK}}, and use the same colors on both, so she can see right away which city had more new customers.",
    "cn": "A：總監想知道上個月我們的網路廣告活動在台中還是台南效果比較好，那我該怎麼呈現結果？ B：把兩張地圖並排放在一起以便【比較】，兩張都用相同的顏色，這樣她馬上就能看出哪個城市有較多新顧客。"
  },
  {
    "word": "pattern",
    "pos": "n.",
    "cn_def": "模式；規律",
    "en_def": "a regular way in which something happens or is arranged",
    "sentence": "A: After looking at the delivery map for the whole year, have you noticed anything interesting about when our customers order the most furniture? B: Yes, there is a clear {{BLANK}}, because orders from big cities always rise sharply in spring when many young people move into new apartments after finding jobs.",
    "cn": "A：看了整年的送貨地圖之後，你有沒有注意到顧客什麼時候訂購最多家具的有趣現象？ B：有，有一個很明顯的【模式】，因為春天時許多年輕人找到工作後搬進新公寓，大城市的訂單總是急劇增加。"
  },
  {
    "word": "context",
    "pos": "n.",
    "cn_def": "背景；脈絡",
    "en_def": "the situation or facts around something that help explain it",
    "sentence": "A: The sales map shows that our shop in the east lost many customers in July, so should we tell the manager that the staff there did a poor job? B: Not yet, because we need more {{BLANK}} first, such as whether a typhoon closed the roads or a new competitor opened nearby during that month.",
    "cn": "A：業務地圖顯示我們東部的店七月流失了很多顧客，我們應該告訴經理那裡的員工表現不好嗎？ B：還不要，因為我們需要先了解更多【背景】，例如那個月是否有颱風封路，或附近是否開了新的競爭對手。"
  },
  {
    "word": "visualization",
    "pos": "n.",
    "cn_def": "視覺化；圖像化呈現",
    "en_def": "a picture, chart, or map that makes information easy to understand",
    "sentence": "A: Our monthly report has twenty pages of numbers about sales in every district, and most managers say they never have time to read it all. B: Let's replace the long tables with one clear {{BLANK}}, such as a colored map, so busy managers can understand the main results in less than a minute.",
    "cn": "A：我們的月報有二十頁各區域的銷售數字，大部分經理說他們從來沒時間全部讀完。 B：我們把冗長的表格換成一個清楚的【視覺化圖像】吧，例如彩色地圖，這樣忙碌的經理不到一分鐘就能理解主要結果。"
  },
  {
    "word": "accuracy",
    "pos": "n.",
    "cn_def": "準確性；精確度",
    "en_def": "the quality of being correct and exact",
    "sentence": "A: Several drivers complained that our delivery app sent them to the wrong buildings last week, which caused late packages and angry customers. B: We need to improve the {{BLANK}} of the addresses in our system, so I have asked the IT team to check every location and fix any mistakes before Monday.",
    "cn": "A：好幾位司機抱怨我們的送貨應用程式上週把他們導到錯誤的大樓，造成包裹延遲和顧客生氣。 B：我們需要提高系統中地址的【準確性】，所以我已經請資訊團隊檢查每一個地點，並在星期一前修正所有錯誤。"
  },
  {
    "word": "orientation",
    "pos": "n.",
    "cn_def": "方位；方向",
    "en_def": "the direction something faces or points",
    "sentence": "A: The visitors at our trade show keep turning the floor plan around because they cannot tell which way they are facing inside the large exhibition hall. B: Let's add a big arrow showing north on every sign, so the {{BLANK}} is clear and people can match the plan with the real hall more easily.",
    "cn": "A：展覽會的訪客一直把平面圖轉來轉去，因為他們在大展覽館裡分不清自己面對哪個方向。 B：我們在每個指示牌上加一個指向北方的大箭頭吧，這樣【方位】就很清楚，大家也更容易把平面圖和實際的展館對應起來。"
  },
  {
    "word": "navigation",
    "pos": "n.",
    "cn_def": "導航；航行",
    "en_def": "the process of finding the way from one place to another",
    "sentence": "A: Our sales representatives spend many hours driving to clients in small towns, and they often get lost on country roads without street signs. B: The company should install a good {{BLANK}} system in every car, so the staff can follow spoken directions and arrive on time without calling the office for help.",
    "cn": "A：我們的業務代表花很多時間開車去小鎮拜訪客戶，而且常在沒有路標的鄉間道路上迷路。 B：公司應該在每輛車上安裝好的【導航】系統，這樣員工就能跟著語音指示，準時抵達而不必打電話回辦公室求助。"
  },
  {
    "word": "interpretation",
    "pos": "n.",
    "cn_def": "解讀；詮釋",
    "en_def": "an explanation of what something means",
    "sentence": "A: The two analysts looked at the same map of customer complaints, but they gave the manager completely different reasons for the problem in the south. B: That is because each one had a different {{BLANK}} of the data, so we should hold a short meeting and agree on one explanation before we report to the director.",
    "cn": "A：兩位分析師看了同一張顧客投訴地圖，卻對南部的問題給經理完全不同的原因。 B：那是因為他們對資料的【解讀】各不相同，所以我們應該開個簡短的會議，在向總監報告前統一說法。"
  }
];

const MCQS = [
  {
    "q": "The marketing team designed a _____ that shows monthly sales in every county. Each area is colored according to its total revenue.",
    "options": [
      "map chart",
      "legend",
      "marker",
      "symbol"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many international students choose this university because of its interest in physical _____. Its courses study mountains, rivers, and climate in Asia.",
    "options": [
      "navigation",
      "orientation",
      "geography",
      "accuracy"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our company plans to expand into the southern _____ next year. Market research shows strong demand for electric scooters there.",
    "options": [
      "symbol",
      "region",
      "legend",
      "overlay"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The hotel's central _____ near the train station attracts many business travelers. Guests can walk to most offices in ten minutes.",
    "options": [
      "density",
      "projection",
      "scale",
      "location"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Workers placed a new fence along the eastern _____ of the factory property. The neighbors had complained about trucks parking on their land.",
    "options": [
      "pattern",
      "context",
      "boundary",
      "comparison"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Smoking is not allowed in any public _____ of the building. Employees who wish to smoke must go to the outdoor garden.",
    "options": [
      "area",
      "latitude",
      "marker",
      "projection"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Each store on the digital map has a unique _____ based on its exact position. Drivers enter this number into their GPS devices.",
    "options": [
      "distribution",
      "comparison",
      "interpretation",
      "coordinate"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Cities located at a high _____ have very short days in winter. Many offices there install bright lights to keep workers cheerful.",
    "options": [
      "density",
      "latitude",
      "accuracy",
      "visualization"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Lines of _____ run from the North Pole to the South Pole. They help pilots calculate time differences between countries.",
    "options": [
      "longitude",
      "legend",
      "boundary",
      "navigation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The architect drew the floor plan to _____ so every room appears in correct proportion. One centimeter represents two meters.",
    "options": [
      "pattern",
      "context",
      "scale",
      "symbol"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The common world map uses a _____ that makes northern countries look much larger. Teachers often explain this problem to students.",
    "options": [
      "marker",
      "projection",
      "comparison",
      "location"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The health report includes a _____ in which counties are shaded by infection rate. Darker colors show areas with more cases.",
    "options": [
      "boundary",
      "legend",
      "navigation",
      "choropleth"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "On the hiking map, a small tent _____ shows each campsite. A cup shows where visitors can buy drinks.",
    "options": [
      "density",
      "accuracy",
      "symbol",
      "projection"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The manager placed a red _____ on the online map at our new office. Clients can now find the entrance easily.",
    "options": [
      "marker",
      "geography",
      "context",
      "distribution"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "If you do not understand the colors on the map, check the _____ in the corner. It explains what each shade means.",
    "options": [
      "region",
      "longitude",
      "pattern",
      "legend"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The designer changed the _____ from rainbow colors to shades of blue. Readers now see low and high values more clearly.",
    "options": [
      "map chart",
      "color scale",
      "coordinate",
      "boundary"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "This district has the highest population _____ in the city. More than twenty thousand people live in each square kilometer.",
    "options": [
      "density",
      "orientation",
      "navigation",
      "legend"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The report examines the _____ of our customers across the country. Most of them live in large cities on the west coast.",
    "options": [
      "symbol",
      "marker",
      "distribution",
      "latitude"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The planning department uses _____ data to decide where new parks should go. It shows which neighborhoods are far from green space.",
    "options": [
      "choropleth",
      "spatial",
      "overlay",
      "marker"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The app lets users add a weather _____ on top of the road map. Drivers can then avoid areas with heavy rain.",
    "options": [
      "boundary",
      "longitude",
      "accuracy",
      "overlay"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Please _____ in on the downtown area during the presentation. The clients want to see the exact streets around our shops.",
    "options": [
      "highlight",
      "compare",
      "zoom",
      "navigate"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Please _____ the three stores with falling profits in red. The director wants to notice them quickly at the meeting.",
    "options": [
      "highlight",
      "zoom",
      "overlay",
      "locate"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The table offers a _____ of shipping costs in five Asian countries. Japan is clearly the most expensive market.",
    "options": [
      "projection",
      "coordinate",
      "boundary",
      "comparison"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Analysts noticed a clear _____ in the sales data. Orders always increase sharply during the two weeks before Lunar New Year.",
    "options": [
      "legend",
      "pattern",
      "latitude",
      "symbol"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The numbers are hard to understand without some _____. Please explain why sales fell during the typhoon season.",
    "options": [
      "context",
      "scale",
      "marker",
      "longitude"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new software turns complex sales figures into a simple _____. Managers can understand the results at a glance.",
    "options": [
      "boundary",
      "coordinate",
      "visualization",
      "orientation"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The delivery company improved the _____ of its address system. As a result, fewer packages were sent to the wrong buildings.",
    "options": [
      "density",
      "accuracy",
      "legend",
      "latitude"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Visitors had trouble with the _____ of the floor plan because it did not show north. The museum added a clear arrow.",
    "options": [
      "distribution",
      "comparison",
      "pattern",
      "orientation"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "All company vehicles now have a satellite _____ system. Drivers receive spoken directions to each customer's address.",
    "options": [
      "projection",
      "symbol",
      "navigation",
      "region"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The two economists offered a different _____ of the same survey results. Their reports reached opposite conclusions about the market.",
    "options": [
      "interpretation",
      "overlay",
      "marker",
      "boundary"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "map chart": {
    "pos": "n.phr.",
    "en_def": "a chart that shows numbers or information on a map",
    "cn_def": "地圖圖表"
  },
  "geography": {
    "pos": "n.",
    "en_def": "the study of land, places, and where things are on Earth",
    "cn_def": "地理；地形"
  },
  "region": {
    "pos": "n.",
    "en_def": "a large part of a country or the world",
    "cn_def": "地區；區域"
  },
  "location": {
    "pos": "n.",
    "en_def": "a place where something is or happens",
    "cn_def": "地點；位置"
  },
  "boundary": {
    "pos": "n.",
    "en_def": "a line that marks the edge of an area",
    "cn_def": "邊界；界線"
  },
  "area": {
    "pos": "n.",
    "en_def": "a part of a place, city, or country",
    "cn_def": "區域；地區"
  },
  "coordinate": {
    "pos": "n.",
    "en_def": "one of a set of numbers that show an exact position on a map",
    "cn_def": "座標"
  },
  "latitude": {
    "pos": "n.",
    "en_def": "the distance of a place north or south of the equator",
    "cn_def": "緯度"
  },
  "longitude": {
    "pos": "n.",
    "en_def": "the distance of a place east or west of a fixed line on Earth",
    "cn_def": "經度"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the relationship between a distance on a map and the real distance",
    "cn_def": "比例尺；規模"
  },
  "projection": {
    "pos": "n.",
    "en_def": "a way of showing the round Earth on a flat map",
    "cn_def": "投影法；預測"
  },
  "choropleth": {
    "pos": "n.",
    "en_def": "a map in which areas are shaded in different colors to show data",
    "cn_def": "面量圖；分區設色圖"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a small picture or sign that stands for something",
    "cn_def": "符號；標誌"
  },
  "marker": {
    "pos": "n.",
    "en_def": "a sign or pin that shows a position on a map",
    "cn_def": "標記；標示"
  },
  "legend": {
    "pos": "n.",
    "en_def": "the box on a map that explains its colors and signs",
    "cn_def": "圖例"
  },
  "color scale": {
    "pos": "n.phr.",
    "en_def": "a range of colors used to show low to high values",
    "cn_def": "色階；顏色刻度"
  },
  "density": {
    "pos": "n.",
    "en_def": "how crowded a place is with people or things",
    "cn_def": "密度"
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way something is spread over an area",
    "cn_def": "分布；分配"
  },
  "spatial": {
    "pos": "adj.",
    "en_def": "relating to space, position, or where things are",
    "cn_def": "空間的"
  },
  "overlay": {
    "pos": "n.",
    "en_def": "a layer of information placed on top of a map or picture",
    "cn_def": "疊加圖層；覆蓋層"
  },
  "zoom": {
    "pos": "v.",
    "en_def": "to make a picture or map look bigger or smaller on a screen",
    "cn_def": "縮放；放大"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make something easy to notice, often with a bright color",
    "cn_def": "強調；標示"
  },
  "comparison": {
    "pos": "n.",
    "en_def": "the act of looking at two or more things to see how they are similar or different",
    "cn_def": "比較"
  },
  "pattern": {
    "pos": "n.",
    "en_def": "a regular way in which something happens or is arranged",
    "cn_def": "模式；規律"
  },
  "context": {
    "pos": "n.",
    "en_def": "the situation or facts around something that help explain it",
    "cn_def": "背景；脈絡"
  },
  "visualization": {
    "pos": "n.",
    "en_def": "a picture, chart, or map that makes information easy to understand",
    "cn_def": "視覺化；圖像化呈現"
  },
  "accuracy": {
    "pos": "n.",
    "en_def": "the quality of being correct and exact",
    "cn_def": "準確性；精確度"
  },
  "orientation": {
    "pos": "n.",
    "en_def": "the direction something faces or points",
    "cn_def": "方位；方向"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the process of finding the way from one place to another",
    "cn_def": "導航；航行"
  },
  "interpretation": {
    "pos": "n.",
    "en_def": "an explanation of what something means",
    "cn_def": "解讀；詮釋"
  }
};

const EXTRA_GLOSSES = {};
