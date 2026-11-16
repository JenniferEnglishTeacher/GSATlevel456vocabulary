// Topic 177 Quiz Data: Hometown 家鄉
// Source word list: https://www.examword.com/group-topic/hometown — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T177 - Hometown 家鄉",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "historical sites",
    "pos": "n.phr.",
    "cn_def": "歷史古蹟",
    "en_def": "old places that are important in history",
    "sentence": "A: Our overseas clients arrive in Tainan on Thursday, and they will have a free afternoon before the factory tour on Friday morning. What should we show them? B: I suggest taking them to the old fort and the temples, because the city's {{BLANK}} give visitors a clear picture of four hundred years of local history.",
    "cn": "A：我們的海外客戶週四抵達台南，週五早上參觀工廠前有一個下午的空檔，我們該帶他們看什麼？ B：我建議帶他們去古堡和廟宇，因為這座城市的【歷史古蹟】能讓遊客清楚了解四百年的在地歷史。"
  },
  {
    "word": "breathtaking",
    "pos": "adj.",
    "cn_def": "令人屏息的；壯觀的",
    "en_def": "extremely beautiful or exciting",
    "sentence": "A: You grew up in that small town in the mountains of Hualien, right? Is it worth visiting during the long weekend if my family only has two days? B: Absolutely, the view from the cliff road at sunrise is {{BLANK}}, and you can also stop at small farms along the way to buy fresh fruit.",
    "cn": "A：你是在花蓮山區那個小鎮長大的，對吧？如果我們家只有兩天，連假時值得去嗎？ B：當然值得，日出時從懸崖公路看出去的景色【令人屏息】，沿途你還可以在小農場停下來買新鮮水果。"
  },
  {
    "word": "picturesque",
    "pos": "adj.",
    "cn_def": "風景如畫的",
    "en_def": "pretty, like a picture",
    "sentence": "A: Why did the marketing team choose your hometown as the location for the new travel advertisement instead of a big city like Taipei? B: The director felt that its {{BLANK}} streets, with old wooden houses and a small river running beside them, would look beautiful on screen and attract younger travelers.",
    "cn": "A：為什麼行銷團隊選擇你的家鄉而不是台北這樣的大城市來拍新的旅遊廣告？ B：導演覺得那裡【風景如畫的】街道，有老木屋和旁邊流過的小河，在螢幕上會很好看，也能吸引年輕旅客。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following customs that have existed for a long time",
    "sentence": "A: Is there anything special we should prepare for the welcome dinner when the visiting managers come to your hometown next month? B: Yes, I have booked a family restaurant that serves {{BLANK}} dishes like braised pork rice and fish ball soup, which my grandmother used to cook for festivals.",
    "cn": "A：下個月來訪的經理們到你家鄉時，歡迎晚宴我們需要準備什麼特別的嗎？ B：有，我訂了一家家庭餐廳，供應滷肉飯和魚丸湯這類【傳統】料理，那是我祖母以前過節時會煮的。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代化的；新式的",
    "en_def": "new and using the latest ideas or technology",
    "sentence": "A: Has your hometown changed much since you moved to the capital for work about ten years ago? B: Quite a lot, because the old train station was replaced by a {{BLANK}} building with glass walls, digital ticket machines, and a food court that stays open until midnight.",
    "cn": "A：自從你大約十年前搬到首都工作以來，你的家鄉改變很多嗎？ B：改變不少，舊火車站被一棟【現代化的】建築取代，有玻璃牆、數位售票機，還有營業到午夜的美食街。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；維護",
    "en_def": "to keep something safe and in good condition",
    "sentence": "A: Why is the city council spending so much money on the old market street when it could build a new shopping center instead? B: Many residents asked the council to {{BLANK}} the historic shops and narrow lanes, because they are an important part of the town's identity and attract tourists.",
    "cn": "A：市議會明明可以蓋新的購物中心，為什麼要花那麼多錢在舊市場街上？ B：許多居民請市議會【保存】那些歷史老店和狹窄巷弄，因為它們是小鎮特色的重要部分，也能吸引觀光客。"
  },
  {
    "word": "high-rise",
    "pos": "n.",
    "cn_def": "高樓大廈",
    "en_def": "a very tall building with many floors",
    "sentence": "A: Where will the new employees from the Tokyo branch stay while they are working at our headquarters for six months? B: The company has rented several apartments in a new {{BLANK}} near the station, so they can walk to the office in ten minutes and enjoy a great view of the city.",
    "cn": "A：東京分公司的新員工在我們總部工作六個月期間會住在哪裡？ B：公司在車站附近一棟新的【高樓】租了幾間公寓，所以他們走十分鐘就能到辦公室，還能欣賞很棒的城市景色。"
  },
  {
    "word": "hospitality",
    "pos": "n.",
    "cn_def": "熱情好客；款待",
    "en_def": "friendly and generous treatment of guests",
    "sentence": "A: How did the overseas buyers feel about their trip to your hometown after the trade fair last week? B: They were very impressed by the {{BLANK}} of the local people, who invited them into their homes for tea and even drove them back to the hotel after dinner.",
    "cn": "A：上週商展後海外買家對你家鄉之旅感覺如何？ B：他們對當地人的【熱情好客】印象非常深刻，當地人請他們到家裡喝茶，晚餐後甚至開車送他們回飯店。"
  },
  {
    "word": "day by day",
    "pos": "phr.",
    "cn_def": "一天天地；逐日",
    "en_def": "slowly, a little more each day",
    "sentence": "A: Is the new subway line in your hometown going to be finished before the international sports event next summer? B: The workers are making progress {{BLANK}}, and the project manager told reporters that the stations should be ready for testing by the end of March.",
    "cn": "A：你家鄉的新捷運線能在明年夏天的國際運動賽事前完工嗎？ B：工人們的進度【一天天地】推進，專案經理告訴記者，車站應該在三月底前能準備好進行測試。"
  },
  {
    "word": "potential",
    "pos": "n.",
    "cn_def": "潛力",
    "en_def": "the possibility to develop or succeed in the future",
    "sentence": "A: Why did the hotel group decide to invest in your quiet hometown instead of a more famous tourist city? B: Their research team believed the area had great {{BLANK}} for growth, since a new highway will open soon and more visitors are looking for peaceful places by the sea.",
    "cn": "A：為什麼飯店集團決定投資你那安靜的家鄉，而不是更有名的觀光城市？ B：他們的研究團隊認為這個地區有很大的成長【潛力】，因為新的高速公路即將通車，而且越來越多遊客在尋找海邊的寧靜去處。"
  },
  {
    "word": "hotspot",
    "pos": "n.",
    "cn_def": "熱門地點；熱點",
    "en_def": "a popular place where many people go",
    "sentence": "A: Have you noticed how crowded the old harbor in your hometown has become on weekends lately? B: Yes, since a famous travel blogger posted photos of its colorful boats and seafood stalls, it has turned into a popular {{BLANK}} for young tourists from all over the country.",
    "cn": "A：你有沒有注意到你家鄉的老港口最近週末變得多擁擠？ B：有，自從一位知名旅遊部落客貼了那裡彩色漁船和海鮮攤的照片後，那裡就變成全國年輕遊客的熱門【景點】。"
  },
  {
    "word": "settle down",
    "pos": "v.phr.",
    "cn_def": "安定下來；定居",
    "en_def": "to start living in one place for a long time",
    "sentence": "A: After working in three different countries for our company, do you plan to keep moving around for your career? B: Not really, I would like to {{BLANK}} in my hometown in a few years, buy a small house near my parents, and maybe work for our local branch office.",
    "cn": "A：在三個不同國家為公司工作後，你打算為了事業繼續到處搬嗎？ B：不太會，我想幾年後在家鄉【安定下來】，在父母附近買間小房子，也許在我們當地的分公司工作。"
  },
  {
    "word": "enormously",
    "pos": "adv.",
    "cn_def": "極大地；非常",
    "en_def": "very much; to a very great degree",
    "sentence": "A: Has the new airport made a difference to the businesses in your hometown since it opened last year? B: It has helped them {{BLANK}}, because hotels are almost always full now and many restaurants have hired extra staff to serve the large number of visitors.",
    "cn": "A：新機場去年啟用後，對你家鄉的商家有影響嗎？ B：幫助【非常大】，因為現在飯店幾乎都客滿，很多餐廳也多請了員工來服務大量遊客。"
  },
  {
    "word": "barely",
    "pos": "adv.",
    "cn_def": "幾乎沒有；勉強",
    "en_def": "almost not; only just",
    "sentence": "A: Did you have time to visit your old friends when you went back to your hometown for the business conference? B: I {{BLANK}} had time to eat, because the meetings started at eight every morning and the client dinners usually lasted until almost eleven at night.",
    "cn": "A：你回家鄉參加商務會議時，有時間拜訪老朋友嗎？ B：我【幾乎沒】時間吃飯，因為會議每天早上八點開始，客戶晚宴通常持續到將近晚上十一點。"
  },
  {
    "word": "skyscraper",
    "pos": "n.",
    "cn_def": "摩天大樓",
    "en_def": "a very tall modern building in a city",
    "sentence": "A: Why is everyone talking about the construction project downtown during the morning coffee break? B: A developer is planning to build a sixty-floor {{BLANK}} there, which will be the tallest building in the area and hold offices, a hotel, and a shopping center.",
    "cn": "A：為什麼大家早上喝咖啡休息時都在聊市中心的建案？ B：有一家開發商打算在那裡蓋一棟六十層的【摩天大樓】，它將是這一帶最高的建築，裡面有辦公室、飯店和購物中心。"
  },
  {
    "word": "ameliorate",
    "pos": "v.",
    "cn_def": "改善；改良",
    "en_def": "to make a bad situation better",
    "sentence": "A: What is the new mayor doing about the noise and air pollution near the industrial zone in your hometown? B: She has promised to {{BLANK}} the situation by planting more trees, moving heavy trucks to a new road, and checking factory smoke every month.",
    "cn": "A：新市長對你家鄉工業區附近的噪音和空氣污染有什麼作為？ B：她承諾要透過種更多樹、把大卡車改道到新路，以及每月檢查工廠排煙來【改善】情況。"
  },
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎建設",
    "en_def": "basic systems a place needs, such as roads, power and water",
    "sentence": "A: Why do so many young people from your hometown move to big cities after they finish university? B: The town's {{BLANK}} is quite old, so the roads, internet service, and public buses are not good enough for the kinds of companies that offer well-paid jobs.",
    "cn": "A：為什麼你家鄉這麼多年輕人大學畢業後就搬到大城市？ B：鎮上的【基礎建設】相當老舊，道路、網路服務和公車都不足以吸引提供高薪工作的公司。"
  },
  {
    "word": "decrepit",
    "pos": "adj.",
    "cn_def": "破舊的；衰敗的",
    "en_def": "old and in very bad condition",
    "sentence": "A: Is the old cinema on Main Street still open, or has it finally closed after all these years? B: It closed a long time ago, and the building is now so {{BLANK}} that the city plans to tear it down next year and build a small park for families.",
    "cn": "A：主街上那家老電影院還開著嗎，還是這麼多年後終於關了？ B：很久以前就關了，現在那棟建築已經非常【破舊不堪】，市政府打算明年拆掉，蓋一座給家庭使用的小公園。"
  },
  {
    "word": "region",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "a large area of a country",
    "sentence": "A: Why is your hometown famous among food lovers in Taiwan, even though it is a fairly small place? B: The whole {{BLANK}} is known for its high-quality rice and fresh oranges, and every autumn there is a farmers' festival that attracts thousands of visitors.",
    "cn": "A：為什麼你的家鄉雖然很小，卻在台灣美食愛好者之間很有名？ B：整個【地區】以高品質的米和新鮮柳丁聞名，每年秋天還有吸引數千名遊客的農民節。"
  },
  {
    "word": "vicinity",
    "pos": "n.",
    "cn_def": "附近；鄰近地區",
    "en_def": "the area near a place",
    "sentence": "A: Are there any good places for our team to have lunch near the conference hall where we will hold the product launch? B: There are several cheap noodle shops and a nice Italian restaurant in the {{BLANK}}, so everyone can find something they like within a five-minute walk.",
    "cn": "A：我們要舉辦產品發表會的會議廳附近有適合團隊吃午餐的地方嗎？ B：【附近】有幾家便宜的麵店和一家不錯的義大利餐廳，所以大家走五分鐘內都能找到喜歡的東西。"
  },
  {
    "word": "frequently",
    "pos": "adv.",
    "cn_def": "經常地；頻繁地",
    "en_def": "often",
    "sentence": "A: How often do you go back to visit your parents now that you have been promoted to the Taipei office? B: I return home quite {{BLANK}}, usually twice a month, because the high-speed train takes only ninety minutes and my mother always cooks my favorite meals.",
    "cn": "A：你升調台北辦公室後，多久回去看你父母一次？ B：我相當【經常】回家，通常一個月兩次，因為高鐵只要九十分鐘，而且我媽媽總是煮我最愛吃的菜。"
  },
  {
    "word": "increasingly",
    "pos": "adv.",
    "cn_def": "越來越；日益",
    "en_def": "more and more",
    "sentence": "A: Why are so many coffee shops and design studios opening along the quiet streets of your hometown these days? B: The town is becoming {{BLANK}} popular with young people from the city who want lower rent, fresh air, and a slower pace of life after years of stress.",
    "cn": "A：為什麼最近你家鄉安靜的街道上開了那麼多咖啡店和設計工作室？ B：這個小鎮在城市年輕人之間變得【越來越】受歡迎，他們在多年壓力之後想要較低的房租、新鮮空氣和較慢的生活步調。"
  },
  {
    "word": "accessibility",
    "pos": "n.",
    "cn_def": "無障礙程度；可及性",
    "en_def": "how easy a place is to reach or use, especially for disabled people",
    "sentence": "A: What changes has the train station in your hometown made since the city received complaints last year? B: To improve {{BLANK}} for elderly passengers and people in wheelchairs, it added two large elevators, wider gates, and ramps at every entrance of the building.",
    "cn": "A：自從去年市府接到投訴後，你家鄉的火車站做了哪些改變？ B：為了提升年長乘客和輪椅使用者的【無障礙便利性】，車站增設了兩部大型電梯、更寬的閘門，並在每個入口加設坡道。"
  },
  {
    "word": "consequently",
    "pos": "adv.",
    "cn_def": "因此；結果",
    "en_def": "as a result",
    "sentence": "A: Why are hotel prices in your hometown so high this month compared with the same time last year? B: A big international music festival is being held there, and {{BLANK}}, most rooms were booked months ago by fans who traveled from Japan and Korea.",
    "cn": "A：為什麼你家鄉這個月的飯店價格比去年同期高那麼多？ B：那裡正在舉辦一場大型國際音樂節，【因此】大部分房間在幾個月前就被從日本和韓國來的樂迷訂走了。"
  },
  {
    "word": "venues",
    "pos": "n.",
    "cn_def": "場地；會場",
    "en_def": "places where events such as meetings or concerts are held",
    "sentence": "A: Do you think your hometown could host the company's annual sales conference next spring instead of Taipei? B: I think so, because the city now has several modern {{BLANK}}, including a large convention center and two hotels with ballrooms big enough for three hundred guests.",
    "cn": "A：你覺得明年春天公司的年度業務會議可以在你家鄉舉辦，而不是台北嗎？ B：我覺得可以，因為那座城市現在有好幾個現代化的【場地】，包括一座大型會議中心，以及兩間宴會廳大到能容納三百位賓客的飯店。"
  },
  {
    "word": "tourist attraction",
    "pos": "n.phr.",
    "cn_def": "觀光景點",
    "en_def": "a place that many visitors go to see",
    "sentence": "A: Why did the city decide to repair the old lighthouse on the hill instead of building a new parking lot? B: Officials realized that it could become a major {{BLANK}}, since visitors love taking photos there at sunset and buying snacks from the shops nearby.",
    "cn": "A：為什麼市政府決定修復山丘上的老燈塔，而不是蓋新停車場？ B：官員們發現它能成為主要的【觀光景點】，因為遊客喜歡在那裡拍夕陽照片，還會在附近商店買小吃。"
  },
  {
    "word": "majority",
    "pos": "n.",
    "cn_def": "大多數",
    "en_def": "more than half of a group",
    "sentence": "A: Do most people in your hometown work in farming, or have things changed over the past twenty years? B: Things have changed a lot, and now the {{BLANK}} of residents work in factories, shops, or offices, while only a few older families still grow rice.",
    "cn": "A：你家鄉大部分人都務農嗎，還是過去二十年來情況變了？ B：變了很多，現在【大多數】居民在工廠、商店或辦公室工作，只有少數年長的家庭還在種稻。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work",
    "sentence": "A: Have you ever thought about living in your hometown again and still keeping your job at our office in Taichung? B: Yes, many of my old classmates {{BLANK}} by train every day, since the trip takes only forty minutes and housing back home is much cheaper.",
    "cn": "A：你有沒有想過搬回家鄉住，同時保留在我們台中辦公室的工作？ B：有啊，我很多老同學每天搭火車【通勤】，因為車程只要四十分鐘，而且老家的房子便宜多了。"
  },
  {
    "word": "transportation",
    "pos": "n.",
    "cn_def": "運輸；交通工具",
    "en_def": "a system of buses, trains and other vehicles for moving people",
    "sentence": "A: Is it easy for tourists without a car to travel around your hometown and visit the beaches and temples? B: Public {{BLANK}} has improved a lot recently, because the city added new bus routes and a bike-sharing system that connects the station with most popular places.",
    "cn": "A：沒有車的遊客在你家鄉到處遊覽、去海灘和廟宇方便嗎？ B：大眾【運輸】最近改善很多，因為市府增加了新的公車路線，以及一套連接車站和大多數熱門地點的共享單車系統。"
  },
  {
    "word": "traffic jam",
    "pos": "n.phr.",
    "cn_def": "塞車；交通堵塞",
    "en_def": "a long line of cars that cannot move or move very slowly",
    "sentence": "A: Why did the sales manager arrive almost an hour late for the client meeting this morning? B: She got stuck in a terrible {{BLANK}} on the bridge into the city, because two trucks had an accident and the police closed one lane for cleanup.",
    "cn": "A：為什麼業務經理今天早上客戶會議遲到將近一小時？ B：她在進城的橋上碰到嚴重的【塞車】，因為兩輛卡車發生事故，警方封閉了一個車道進行清理。"
  },
  {
    "word": "rush hour",
    "pos": "n.phr.",
    "cn_def": "尖峰時段",
    "en_def": "the busy time when people travel to or from work",
    "sentence": "A: What time should we leave the office tomorrow if we want to reach the airport by six o'clock in the evening? B: Let's leave by three thirty, because the roads around the city center become very crowded during {{BLANK}} and the taxi ride could take twice as long.",
    "cn": "A：如果我們想在明天傍晚六點前到機場，應該幾點離開辦公室？ B：我們三點半前出發吧，因為市中心周圍的道路在【尖峰時段】會非常擁擠，計程車車程可能要兩倍時間。"
  },
  {
    "word": "comfort",
    "pos": "n.",
    "cn_def": "安慰；舒適",
    "en_def": "a feeling of being relaxed, calm and less worried",
    "sentence": "A: Why do you always go back to your hometown when you feel tired after a long business trip abroad? B: I find great {{BLANK}} in sitting with my family at the dinner table, eating my mother's soup, and hearing the familiar sounds of the night market outside.",
    "cn": "A：為什麼你每次長途出差回來覺得累時，總是回家鄉？ B：和家人坐在餐桌旁、喝媽媽煮的湯、聽著外面夜市熟悉的聲音，讓我得到很大的【慰藉】。"
  },
  {
    "word": "strive",
    "pos": "v.",
    "cn_def": "努力；奮鬥",
    "en_def": "to try very hard to do something",
    "sentence": "A: What is the local government's main goal now that so many young workers have left the town? B: Officials {{BLANK}} to attract new businesses by offering lower taxes, cheap office space, and training programs, hoping that young people will return and raise their families there.",
    "cn": "A：既然那麼多年輕工作者離開了小鎮，地方政府現在的主要目標是什麼？ B：官員們【努力】透過提供較低稅金、便宜辦公空間和培訓計畫來吸引新企業，希望年輕人能回來並在那裡養家。"
  },
  {
    "word": "chain store",
    "pos": "n.phr.",
    "cn_def": "連鎖店",
    "en_def": "one of many shops with the same name and owner",
    "sentence": "A: Why are some residents in your hometown upset about the new shopping street that opened last month? B: Every shop there is a large {{BLANK}} selling the same products as in other cities, so the small family businesses that made the town special are losing customers.",
    "cn": "A：為什麼你家鄉有些居民對上個月開幕的新購物街不滿？ B：那裡每家店都是大型【連鎖店】，賣的東西和其他城市一樣，所以讓小鎮與眾不同的小型家族商店正在流失顧客。"
  },
  {
    "word": "fashion house",
    "pos": "n.phr.",
    "cn_def": "時裝公司；時裝品牌",
    "en_def": "a company that designs and sells expensive clothes",
    "sentence": "A: Did you know that the famous designer who grew up in your hometown is opening a store downtown? B: Yes, her {{BLANK}} in Paris became very successful, and now she wants to show her new collection in the city where she first learned to sew from her aunt.",
    "cn": "A：你知道在你家鄉長大的那位知名設計師要在市中心開店嗎？ B：知道，她在巴黎的【時裝公司】非常成功，現在她想在她最初跟阿姨學縫紉的城市展示新系列。"
  },
  {
    "word": "get around",
    "pos": "v.phr.",
    "cn_def": "四處走動；到處去",
    "en_def": "to travel or move from place to place",
    "sentence": "A: I'm going to your hometown for a three-day sales trip next week, but I won't have a car. Any advice? B: It's easy to {{BLANK}} because the city is small, the buses run every ten minutes, and you can rent an electric scooter from most convenience stores.",
    "cn": "A：我下週要去你家鄉出差三天跑業務，但我沒車。有什麼建議嗎？ B：在那裡【四處走動】很容易，因為城市很小，公車每十分鐘一班，而且大多數便利商店都可以租電動機車。"
  },
  {
    "word": "pavement cafe",
    "pos": "n.phr.",
    "cn_def": "路邊咖啡座；露天咖啡館",
    "en_def": "a cafe with tables outside on the sidewalk",
    "sentence": "A: Where would be a relaxing place to meet the new client on Saturday afternoon before her flight home? B: There is a lovely {{BLANK}} on the main square, where you can sit outside under an umbrella, drink good coffee, and watch street performers.",
    "cn": "A：週六下午客戶搭機回國前，哪裡適合跟這位新客戶輕鬆見面？ B：主廣場上有一家很棒的【露天咖啡座】，你們可以坐在戶外的陽傘下喝好咖啡，看街頭藝人表演。"
  },
  {
    "word": "linger",
    "pos": "v.",
    "cn_def": "逗留；流連",
    "en_def": "to stay somewhere longer than usual because you enjoy it",
    "sentence": "A: Why did the tour group return to the bus thirty minutes late after visiting the old street in your hometown? B: Many of the visitors wanted to {{BLANK}} at the small craft shops and food stalls, because they had never seen handmade paper umbrellas before.",
    "cn": "A：為什麼旅行團參觀完你家鄉的老街後晚了三十分鐘回到遊覽車上？ B：很多遊客想在小手工藝店和小吃攤【逗留】，因為他們從來沒看過手工紙傘。"
  },
  {
    "word": "residential area",
    "pos": "n.phr.",
    "cn_def": "住宅區",
    "en_def": "a part of a town where people live, not work",
    "sentence": "A: Why did the city refuse the company's plan to build a new factory near the river last spring? B: The land is in a quiet {{BLANK}} with many homes, schools, and parks, so the council decided that noise and heavy trucks would cause problems for families.",
    "cn": "A：為什麼市政府去年春天拒絕了公司在河邊蓋新工廠的計畫？ B：那塊地位於安靜的【住宅區】，有很多住家、學校和公園，所以議會認為噪音和大卡車會對家庭造成困擾。"
  },
  {
    "word": "inner-city",
    "pos": "adj.",
    "cn_def": "市中心老舊地區的",
    "en_def": "in the old central part of a city, often with poor people",
    "sentence": "A: What kind of volunteer work will our company support this year as part of its community program? B: We will help {{BLANK}} schools in the old downtown district, where many students come from low-income families and need computers, books, and after-school tutoring.",
    "cn": "A：今年我們公司的社區計畫要支持什麼樣的志工活動？ B：我們會協助舊市中心區那些【市中心老舊地區的】學校，那裡很多學生來自低收入家庭，需要電腦、書籍和課後輔導。"
  },
  {
    "word": "poor housing",
    "pos": "n.phr.",
    "cn_def": "簡陋的住房；居住條件差",
    "en_def": "homes that are in bad condition",
    "sentence": "A: Why did the charity choose your hometown for its new building project this year? B: Many families in the old fishing village still live in {{BLANK}} with leaking roofs and no hot water, so the volunteers plan to repair fifty homes before winter.",
    "cn": "A：為什麼這家慈善機構今年選擇你的家鄉進行新的建設計畫？ B：老漁村裡很多家庭仍住在屋頂漏水又沒熱水的【簡陋住房】裡，所以志工們計畫在冬天前修繕五十間房子。"
  },
  {
    "word": "shopping centre",
    "pos": "n.phr.",
    "cn_def": "購物中心",
    "en_def": "a large building with many shops (British spelling)",
    "sentence": "A: Where can I buy a suit and some gifts for my clients before the business dinner tonight? B: Go to the new {{BLANK}} across from the train station, which has clothing stores, a bookshop, and a gift market on the ground floor, and it stays open until ten.",
    "cn": "A：今晚商務晚宴前，我可以在哪裡買西裝和送客戶的禮物？ B：去火車站對面新的【購物中心】，裡面有服飾店、書店，一樓還有禮品市集，而且營業到十點。"
  },
  {
    "word": "shopping mall",
    "pos": "n.phr.",
    "cn_def": "購物商場",
    "en_def": "a very large building or area with many stores and restaurants",
    "sentence": "A: Why are the small shops on the old street in your hometown losing so many customers this year? B: A huge {{BLANK}} with a cinema, free parking, and over two hundred stores opened just outside town, so most families now go there on weekends.",
    "cn": "A：為什麼你家鄉老街上的小店今年流失了那麼多顧客？ B：鎮外剛開了一座有電影院、免費停車場和兩百多家店的巨型【購物商場】，所以現在大部分家庭週末都去那裡。"
  },
  {
    "word": "office block",
    "pos": "n.phr.",
    "cn_def": "辦公大樓",
    "en_def": "a large building with many offices",
    "sentence": "A: Where will our company's new branch office be located when it opens in your hometown next year? B: We have rented the top two floors of a modern {{BLANK}} near the city hall, which has a large parking garage and is close to several bus stops.",
    "cn": "A：明年我們公司在你家鄉開的新分公司會在哪裡？ B：我們租了市政府附近一棟現代化【辦公大樓】的頂部兩層，那裡有大型停車場，而且離幾個公車站很近。"
  }
];

const MCQS = [
  {
    "q": "The tour includes the old fort and several temples. Guests will learn about the city's past while visiting these _____.",
    "options": [
      "historical sites",
      "traffic jams",
      "office blocks",
      "chain stores"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "We drove to the top of the mountain before dawn. The sunrise over the clouds was absolutely _____, and everyone took photos.",
    "options": [
      "decrepit",
      "inner-city",
      "breathtaking",
      "traditional"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The small fishing village has colorful boats and old stone houses. Painters often visit because it is so _____.",
    "options": [
      "inner-city",
      "picturesque",
      "modern",
      "high-rise"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "At the festival, local families serve rice cakes made with old recipes. Visitors can taste these _____ snacks at the temple square.",
    "options": [
      "decrepit",
      "breathtaking",
      "inner-city",
      "traditional"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The new library has glass walls, digital study rooms, and fast Wi-Fi. It is one of the most _____ buildings in the region.",
    "options": [
      "decrepit",
      "traditional",
      "modern",
      "inner-city"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The council has set aside funds to _____ the old wooden houses. Residents believe these buildings are an important part of local history.",
    "options": [
      "preserve",
      "commute",
      "linger",
      "strive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our new apartment is on the thirtieth floor. Living in a _____ means we can see the whole city from our windows.",
    "options": [
      "pavement cafe",
      "chain store",
      "traffic jam",
      "high-rise"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The hotel staff greeted us with tea and warm smiles. Their _____ made our business trip feel like a visit home.",
    "options": [
      "accessibility",
      "hospitality",
      "infrastructure",
      "transportation"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Investors believe the quiet coastal town has strong _____ for growth. A new highway will bring many more visitors next year.",
    "options": [
      "potential",
      "majority",
      "vicinity",
      "comfort"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Since the night market appeared on a popular cooking show, it has become a busy _____. Crowds now fill the lanes every evening.",
    "options": [
      "region",
      "skyscraper",
      "hotspot",
      "majority"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "After years of traveling for work, Tom wants to _____ in his hometown. He plans to buy a small house near his parents.",
    "options": [
      "get around",
      "strive",
      "preserve",
      "settle down"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Sales at the local bakery grew _____ after the TV report. They now sell five times more bread than before.",
    "options": [
      "barely",
      "enormously",
      "frequently",
      "consequently"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The meeting room was so small that we could _____ move. Twelve people had to share a table meant for six.",
    "options": [
      "enormously",
      "frequently",
      "barely",
      "increasingly"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The developer plans to build a seventy-floor _____ downtown. It will become the tallest tower in the whole country.",
    "options": [
      "skyscraper",
      "hotspot",
      "pavement cafe",
      "traffic jam"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The city hopes to _____ air quality by planting thousands of trees. It will also limit the number of trucks downtown.",
    "options": [
      "linger",
      "ameliorate",
      "commute",
      "get around"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The government will spend billions on roads, bridges, and power lines. Officials say better _____ will attract more foreign companies.",
    "options": [
      "hospitality",
      "majority",
      "comfort",
      "infrastructure"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The old factory has broken windows and a leaking roof. The building is so _____ that it must be torn down.",
    "options": [
      "decrepit",
      "breathtaking",
      "picturesque",
      "modern"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Our hotel is in the _____ of the convention center. Guests can walk there in less than five minutes.",
    "options": [
      "majority",
      "potential",
      "vicinity",
      "comfort"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Anna visits her grandparents _____ because they live only ten minutes away. She usually stops by after work twice a week.",
    "options": [
      "enormously",
      "frequently",
      "consequently",
      "increasingly"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Remote work has become _____ common in recent years. Many companies now let staff work from home twice a week.",
    "options": [
      "enormously",
      "consequently",
      "frequently",
      "increasingly"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The station added ramps and larger elevators last year. These changes improved _____ for passengers who use wheelchairs.",
    "options": [
      "hospitality",
      "majority",
      "accessibility",
      "potential"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Heavy rain flooded the main road this morning. _____, many employees arrived late for the nine o'clock meeting.",
    "options": [
      "consequently",
      "barely",
      "enormously",
      "frequently"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The old lighthouse draws thousands of visitors every summer. It has become the town's most famous _____.",
    "options": [
      "residential area",
      "office block",
      "poor housing",
      "tourist attraction"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "A recent survey showed that the _____ of residents support the new park. Only a few people voted against the plan.",
    "options": [
      "vicinity",
      "majority",
      "potential",
      "region"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Many workers _____ to the city by train every morning. The trip takes about forty minutes from the suburbs.",
    "options": [
      "commute",
      "linger",
      "preserve",
      "ameliorate"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Tourists without cars can still visit the beaches easily. Public _____ in the area includes buses, trains, and shared bikes.",
    "options": [
      "hospitality",
      "accessibility",
      "transportation",
      "majority"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "An accident on the bridge caused a long _____ this morning. Some drivers waited for over an hour without moving.",
    "options": [
      "pavement cafe",
      "chain store",
      "office block",
      "traffic jam"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Trains are very crowded between seven and nine in the morning. Try to avoid traveling during _____ if you can.",
    "options": [
      "poor housing",
      "rush hour",
      "shopping mall",
      "office block"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Our hotel staff _____ to give every guest a pleasant stay. They answer requests quickly and remember regular customers' names.",
    "options": [
      "linger",
      "commute",
      "strive",
      "settle down"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The food at the night market smelled so good that visitors liked to _____. Many stayed for hours trying different snacks.",
    "options": [
      "linger",
      "commute",
      "strive",
      "ameliorate"
    ],
    "answer": 0,
    "vocabIndex": 37
  }
];

const LOOKUP = {
  "historical sites": {
    "pos": "n.phr.",
    "en_def": "old places that are important in history",
    "cn_def": "歷史古蹟"
  },
  "breathtaking": {
    "pos": "adj.",
    "en_def": "extremely beautiful or exciting",
    "cn_def": "令人屏息的；壯觀的"
  },
  "picturesque": {
    "pos": "adj.",
    "en_def": "pretty, like a picture",
    "cn_def": "風景如畫的"
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following customs that have existed for a long time",
    "cn_def": "傳統的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas or technology",
    "cn_def": "現代化的；新式的"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something safe and in good condition",
    "cn_def": "保存；維護"
  },
  "high-rise": {
    "pos": "n.",
    "en_def": "a very tall building with many floors",
    "cn_def": "高樓大廈"
  },
  "hospitality": {
    "pos": "n.",
    "en_def": "friendly and generous treatment of guests",
    "cn_def": "熱情好客；款待"
  },
  "day by day": {
    "pos": "phr.",
    "en_def": "slowly, a little more each day",
    "cn_def": "一天天地；逐日"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility to develop or succeed in the future",
    "cn_def": "潛力"
  },
  "hotspot": {
    "pos": "n.",
    "en_def": "a popular place where many people go",
    "cn_def": "熱門地點；熱點"
  },
  "settle down": {
    "pos": "v.phr.",
    "en_def": "to start living in one place for a long time",
    "cn_def": "安定下來；定居"
  },
  "enormously": {
    "pos": "adv.",
    "en_def": "very much; to a very great degree",
    "cn_def": "極大地；非常"
  },
  "barely": {
    "pos": "adv.",
    "en_def": "almost not; only just",
    "cn_def": "幾乎沒有；勉強"
  },
  "skyscraper": {
    "pos": "n.",
    "en_def": "a very tall modern building in a city",
    "cn_def": "摩天大樓"
  },
  "ameliorate": {
    "pos": "v.",
    "en_def": "to make a bad situation better",
    "cn_def": "改善；改良"
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "basic systems a place needs, such as roads, power and water",
    "cn_def": "基礎建設"
  },
  "decrepit": {
    "pos": "adj.",
    "en_def": "old and in very bad condition",
    "cn_def": "破舊的；衰敗的"
  },
  "region": {
    "pos": "n.",
    "en_def": "a large area of a country",
    "cn_def": "地區；區域"
  },
  "vicinity": {
    "pos": "n.",
    "en_def": "the area near a place",
    "cn_def": "附近；鄰近地區"
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "often",
    "cn_def": "經常地；頻繁地"
  },
  "increasingly": {
    "pos": "adv.",
    "en_def": "more and more",
    "cn_def": "越來越；日益"
  },
  "accessibility": {
    "pos": "n.",
    "en_def": "how easy a place is to reach or use, especially for disabled people",
    "cn_def": "無障礙程度；可及性"
  },
  "consequently": {
    "pos": "adv.",
    "en_def": "as a result",
    "cn_def": "因此；結果"
  },
  "venues": {
    "pos": "n.",
    "en_def": "places where events such as meetings or concerts are held",
    "cn_def": "場地；會場"
  },
  "tourist attraction": {
    "pos": "n.phr.",
    "en_def": "a place that many visitors go to see",
    "cn_def": "觀光景點"
  },
  "majority": {
    "pos": "n.",
    "en_def": "more than half of a group",
    "cn_def": "大多數"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work",
    "cn_def": "通勤"
  },
  "transportation": {
    "pos": "n.",
    "en_def": "a system of buses, trains and other vehicles for moving people",
    "cn_def": "運輸；交通工具"
  },
  "traffic jam": {
    "pos": "n.phr.",
    "en_def": "a long line of cars that cannot move or move very slowly",
    "cn_def": "塞車；交通堵塞"
  },
  "rush hour": {
    "pos": "n.phr.",
    "en_def": "the busy time when people travel to or from work",
    "cn_def": "尖峰時段"
  },
  "comfort": {
    "pos": "n.",
    "en_def": "a feeling of being relaxed, calm and less worried",
    "cn_def": "安慰；舒適"
  },
  "strive": {
    "pos": "v.",
    "en_def": "to try very hard to do something",
    "cn_def": "努力；奮鬥"
  },
  "chain store": {
    "pos": "n.phr.",
    "en_def": "one of many shops with the same name and owner",
    "cn_def": "連鎖店"
  },
  "fashion house": {
    "pos": "n.phr.",
    "en_def": "a company that designs and sells expensive clothes",
    "cn_def": "時裝公司；時裝品牌"
  },
  "get around": {
    "pos": "v.phr.",
    "en_def": "to travel or move from place to place",
    "cn_def": "四處走動；到處去"
  },
  "pavement cafe": {
    "pos": "n.phr.",
    "en_def": "a cafe with tables outside on the sidewalk",
    "cn_def": "路邊咖啡座；露天咖啡館"
  },
  "linger": {
    "pos": "v.",
    "en_def": "to stay somewhere longer than usual because you enjoy it",
    "cn_def": "逗留；流連"
  },
  "residential area": {
    "pos": "n.phr.",
    "en_def": "a part of a town where people live, not work",
    "cn_def": "住宅區"
  },
  "inner-city": {
    "pos": "adj.",
    "en_def": "in the old central part of a city, often with poor people",
    "cn_def": "市中心老舊地區的"
  },
  "poor housing": {
    "pos": "n.phr.",
    "en_def": "homes that are in bad condition",
    "cn_def": "簡陋的住房；居住條件差"
  },
  "shopping centre": {
    "pos": "n.phr.",
    "en_def": "a large building with many shops (British spelling)",
    "cn_def": "購物中心"
  },
  "shopping mall": {
    "pos": "n.phr.",
    "en_def": "a very large building or area with many stores and restaurants",
    "cn_def": "購物商場"
  },
  "office block": {
    "pos": "n.phr.",
    "en_def": "a large building with many offices",
    "cn_def": "辦公大樓"
  }
};

const EXTRA_GLOSSES = {};
