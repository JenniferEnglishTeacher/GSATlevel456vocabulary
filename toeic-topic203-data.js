// Topic 203 Quiz Data: Island 島嶼
// Source word list: https://www.examword.com/group-topic/island — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T203 - Island 島嶼",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "islet",
    "pos": "n.",
    "cn_def": "小島",
    "en_def": "a very small island",
    "sentence": "A: Our team wants a quiet place for the summer staff retreat, so did the travel agent suggest anywhere special near the coast? B: Yes, she suggested a tiny {{BLANK}} about twenty minutes from the harbor by boat, where there is only one small hotel, a garden, and a short walking path around the edge.",
    "cn": "A：我們團隊想為夏季員工休養之旅找一個安靜的地方，旅行社有沒有建議海岸附近什麼特別的地方？ B：有，她建議了一個從港口搭船大約二十分鐘、很小的【小島】，那裡只有一間小旅館、一座花園和一條環繞島邊的短步道。"
  },
  {
    "word": "archipelago",
    "pos": "n.",
    "cn_def": "群島",
    "en_def": "a group of islands close together",
    "sentence": "A: How many islands will the cruise ship visit during the ten-day company trip that the sales department won last quarter? B: The ship will sail through the whole {{BLANK}}, stopping at seven different islands, so everyone will have time to swim, shop for local crafts, and enjoy seafood dinners.",
    "cn": "A：業務部上一季贏得的十天公司旅遊中，郵輪會造訪幾座島嶼？ B：郵輪會航行穿越整個【群島】，停靠七座不同的島嶼，所以大家都有時間游泳、購買當地手工藝品，並享用海鮮晚餐。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸",
    "en_def": "the land next to the sea",
    "sentence": "A: Where is the new branch office going to open, and will it be easy for our clients to visit it from the city? B: It will open in a small town on the east {{BLANK}}, about two hours away by train, and many clients say they will enjoy the sea view during meetings.",
    "cn": "A：新的分公司要開在哪裡？客戶從市區去拜訪方便嗎？ B：它會開在東【海岸】的一個小鎮，搭火車大約兩小時，很多客戶說他們開會時會很享受海景。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸；岸邊",
    "en_def": "the land along the edge of the sea or a lake",
    "sentence": "A: After the boat tour for our overseas visitors ends this afternoon, where should the bus driver wait to pick everyone up? B: Please ask him to wait near the small café on the {{BLANK}}, because the boat will land there at four, and the guests will want a hot drink before the long ride back.",
    "cn": "A：今天下午我們海外訪客的遊船行程結束後，巴士司機應該在哪裡等著接大家？ B：請他在【岸邊】的小咖啡館附近等，因為船四點會在那裡靠岸，客人在長途回程前會想喝杯熱飲。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘",
    "en_def": "an area of sand or small stones next to the sea",
    "sentence": "A: Do you have any ideas for the team-building activity next Friday, since the weather report says it will be sunny and warm? B: Why don't we rent a large tent at the {{BLANK}} near the hotel and organize a volleyball game, a picnic lunch, and a short sandcastle contest for all the departments?",
    "cn": "A：你對下週五的團隊建立活動有什麼想法嗎？氣象預報說那天會晴朗溫暖。 B：我們何不在飯店附近的【海灘】租一個大帳篷，為所有部門舉辦排球賽、野餐午餐和一場簡短的沙堡比賽？"
  },
  {
    "word": "bay",
    "pos": "n.",
    "cn_def": "海灣",
    "en_def": "a part of the sea with land curving around it",
    "sentence": "A: Why did the hotel manager recommend a room on the fifth floor for our guest speaker who arrives on Monday? B: From that floor, she can see the whole {{BLANK}}, where the water is calm and the fishing boats come back at sunset, so it is a relaxing view after a long flight.",
    "cn": "A：為什麼飯店經理推薦五樓的房間給我們週一抵達的客座講者？ B：從那層樓她可以看到整個【海灣】，那裡水面平靜，漁船在日落時返航，所以長途飛行後能欣賞令人放鬆的景色。"
  },
  {
    "word": "lagoon",
    "pos": "n.",
    "cn_def": "潟湖",
    "en_def": "an area of shallow sea water separated from the sea by sand or coral",
    "sentence": "A: Is it safe for the children of our employees to swim during the family day at the island resort next month? B: Yes, the resort has a shallow {{BLANK}} protected from the big waves by a wall of sand and rocks, and lifeguards will watch the kids from morning until late afternoon.",
    "cn": "A：下個月在島上度假村的家庭日，我們員工的小孩游泳安全嗎？ B：安全，度假村有一個淺淺的【潟湖】，被沙和岩石形成的屏障擋住大浪，救生員會從早上到傍晚一直看顧孩子們。"
  },
  {
    "word": "reef",
    "pos": "n.",
    "cn_def": "礁；礁石",
    "en_def": "a line of rocks or coral close to the surface of the sea",
    "sentence": "A: Why did the captain change the route of the diving trip that our clients booked for Saturday morning? B: The water near the {{BLANK}} is very low at that time of day, so the boat could hit the sharp rocks, and he decided to take a safer path through deeper water instead.",
    "cn": "A：為什麼船長更改了客戶預訂的週六早上潛水行程路線？ B：那個時段【礁石】附近的水位很低，船可能會撞上尖銳的岩石，所以他決定改走水較深、較安全的路線。"
  },
  {
    "word": "coral",
    "pos": "n.",
    "cn_def": "珊瑚",
    "en_def": "a hard colorful material made by tiny sea animals",
    "sentence": "A: What will the visitors see during the glass-bottom boat tour that the travel company added to its new island package? B: They will look down at bright {{BLANK}} in many colors, along with small fish swimming around it, and a guide will explain why warm, clean water is so important for it.",
    "cn": "A：旅行社在新的海島套裝行程中加入的玻璃底船之旅，遊客會看到什麼？ B：他們會往下看到許多顏色的鮮豔【珊瑚】，還有小魚在周圍游來游去，導遊會解釋為什麼溫暖乾淨的海水對它如此重要。"
  },
  {
    "word": "peninsula",
    "pos": "n.",
    "cn_def": "半島",
    "en_def": "a piece of land almost surrounded by water but joined to a larger area",
    "sentence": "A: Can we drive to the new factory site, or do we need to take a boat like we did when we visited the island last year? B: We can drive, because the site is on a {{BLANK}} connected to the mainland by a narrow strip of land, although the road is long and winding.",
    "cn": "A：我們可以開車去新工廠的預定地嗎？還是要像去年去那座島一樣搭船？ B：可以開車，因為預定地位於一個由狹長陸地與本土相連的【半島】上，不過道路又長又彎曲。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港口；港灣",
    "en_def": "an area of water where ships can stay safely",
    "sentence": "A: Where should the delivery company leave the new equipment for the island office, since there is no airport there? B: They should bring it to the main {{BLANK}} in the city by Thursday, where our cargo boat is tied up, and the crew will load it carefully before sailing on Friday morning.",
    "cn": "A：既然那座島上沒有機場，貨運公司應該把島上辦公室的新設備放在哪裡？ B：他們應該在週四前把設備送到市區的主要【港口】，我們的貨船停泊在那裡，船員會在週五早上啟航前小心地裝貨。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口；港市",
    "en_def": "a town or place where ships load and unload goods",
    "sentence": "A: Why are the parts for the assembly line taking so long to arrive from our supplier overseas this month? B: The ship is waiting outside the busy {{BLANK}} because many other cargo ships arrived at the same time, and workers can only unload a few containers each day.",
    "cn": "A：為什麼這個月海外供應商的組裝線零件這麼久才到？ B：船隻正在繁忙的【港口】外等候，因為許多其他貨船同時抵達，而工人每天只能卸下幾個貨櫃。"
  },
  {
    "word": "cliff",
    "pos": "n.",
    "cn_def": "懸崖",
    "en_def": "a high, steep rock face, often next to the sea",
    "sentence": "A: Is the hiking path on the island suitable for the older members of our tour group, or should we plan something easier? B: Part of the trail runs along the edge of a tall {{BLANK}} above the sea, so it might be dangerous for them, and I suggest booking a short bus tour of the town instead.",
    "cn": "A：島上的健行步道適合我們旅行團裡年長的團員嗎？還是我們應該安排輕鬆一點的行程？ B：部分步道沿著海面上方一座高聳【懸崖】的邊緣，對他們來說可能有危險，我建議改訂一趟市區的短程巴士遊。"
  },
  {
    "word": "volcanic",
    "pos": "adj.",
    "cn_def": "火山的",
    "en_def": "made by or related to a volcano",
    "sentence": "A: Why does the beach near the conference hotel have black sand instead of the white sand shown in the brochure? B: The island was formed by {{BLANK}} activity thousands of years ago, so the sand is made of dark rock, and the hotel plans to update the photos in its brochure next month.",
    "cn": "A：為什麼會議飯店附近的海灘是黑沙，而不是手冊上的白沙？ B：這座島是數千年前由【火山】活動形成的，所以沙子由深色岩石構成，飯店計劃下個月更新手冊上的照片。"
  },
  {
    "word": "tropical",
    "pos": "adj.",
    "cn_def": "熱帶的",
    "en_def": "from or in the hot, wet parts of the world",
    "sentence": "A: What kind of clothes should our staff pack for the sales conference on the island at the end of July? B: They should bring light cotton shirts, sunglasses, and an umbrella, because the {{BLANK}} weather there is hot and sunny in the morning but often rainy in the afternoon.",
    "cn": "A：我們的員工參加七月底在島上舉辦的業務會議應該帶什麼樣的衣服？ B：他們應該帶輕薄的棉質襯衫、太陽眼鏡和雨傘，因為那裡的【熱帶】天氣早上炎熱晴朗，但下午常下雨。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的",
    "en_def": "far away from towns and other people",
    "sentence": "A: Why is the internet so slow at the research station where our engineers are installing the new weather equipment? B: The station is in a {{BLANK}} area on the north side of the island, far from any town, so the signal must travel a long way from the nearest tower.",
    "cn": "A：為什麼我們工程師正在安裝新氣象設備的研究站網路這麼慢？ B：研究站位於島嶼北邊一個【偏遠的】地區，離任何城鎮都很遠，所以訊號必須從最近的基地台傳送很長的距離。"
  },
  {
    "word": "isolated",
    "pos": "adj.",
    "cn_def": "孤立的；與世隔絕的",
    "en_def": "far from or cut off from other places or people",
    "sentence": "A: How did the hotel staff manage when the storm closed the ferry service to the island for three days last winter? B: Although the island was completely {{BLANK}} from the mainland, the manager had stored enough food, water, and fuel, so the guests stayed comfortable until the boats returned.",
    "cn": "A：去年冬天暴風雨讓往返島上的渡輪停駛三天，飯店員工是如何應對的？ B：雖然那座島與本土完全【隔絕】，但經理事先儲存了足夠的食物、水和燃料，所以客人一直很舒適，直到船班恢復。"
  },
  {
    "word": "marine",
    "pos": "adj.",
    "cn_def": "海洋的",
    "en_def": "related to the sea and the things that live in it",
    "sentence": "A: What will the new science center near the harbor focus on, and when is the opening ceremony planned? B: It will focus on {{BLANK}} life, such as fish, turtles, and sea plants, and the opening ceremony is planned for early May, with free tickets for local schools.",
    "cn": "A：港口附近新的科學中心會以什麼為主題？開幕典禮預計什麼時候舉行？ B：它會以【海洋】生物為主題，例如魚類、海龜和海草，開幕典禮預計在五月初舉行，並提供當地學校免費入場券。"
  },
  {
    "word": "coastal",
    "pos": "adj.",
    "cn_def": "沿海的",
    "en_def": "on or near the coast",
    "sentence": "A: Which areas will the new delivery service cover first, and why did the company choose them over the city center? B: It will start in the {{BLANK}} towns along the highway by the sea, because many small hotels and restaurants there need fresh supplies every morning but have few delivery options.",
    "cn": "A：新的配送服務會先涵蓋哪些地區？為什麼公司選擇那些地方而不是市中心？ B：它會從海邊公路沿線的【沿海】城鎮開始，因為那裡許多小旅館和餐廳每天早上都需要新鮮補給，但配送選擇很少。"
  },
  {
    "word": "navigation",
    "pos": "n.",
    "cn_def": "導航；航行",
    "en_def": "the skill or act of finding the way, especially on a ship",
    "sentence": "A: Why did the shipping company buy new computer screens for all of its boats that travel between the islands? B: The old screens often stopped working in bad weather, which made {{BLANK}} difficult at night, so the captains asked for a more reliable system to guide them safely.",
    "cn": "A：為什麼航運公司為所有往返島嶼之間的船隻買了新的電腦螢幕？ B：舊螢幕在惡劣天氣時常常故障，使得夜間【導航】很困難，所以船長們要求一套更可靠的系統來安全引導他們。"
  },
  {
    "word": "ferry",
    "pos": "n.",
    "cn_def": "渡輪",
    "en_def": "a boat that regularly carries people and cars across water",
    "sentence": "A: How will the guests get from the airport to the island hotel where the wedding reception is being held on Saturday? B: A shuttle bus will take them to the pier, and then they will ride a {{BLANK}} for about forty minutes, so they should arrive before the ceremony starts at five.",
    "cn": "A：客人要如何從機場到週六舉辦婚宴的島上飯店？ B：接駁巴士會載他們到碼頭，然後他們會搭大約四十分鐘的【渡輪】，所以應該能在五點典禮開始前抵達。"
  },
  {
    "word": "tourism",
    "pos": "n.",
    "cn_def": "觀光業；旅遊業",
    "en_def": "the business of providing services for people on holiday",
    "sentence": "A: Why has the island government decided to build a new airport, even though only a few thousand people live there? B: {{BLANK}} brings in most of the island's income, and officials believe more flights will attract visitors from abroad, create jobs in hotels, and help local shops grow.",
    "cn": "A：雖然島上只住了幾千人，為什麼島嶼政府決定蓋一座新機場？ B：【觀光業】帶來了島上大部分的收入，官員認為更多航班能吸引國外遊客、在飯店創造工作機會，並幫助當地商店成長。"
  },
  {
    "word": "resort",
    "pos": "n.",
    "cn_def": "度假村",
    "en_def": "a place where people go for holidays, with hotels and activities",
    "sentence": "A: Where are we holding the annual awards dinner this year, since the hotel downtown is being repaired? B: We booked a beach {{BLANK}} on the island that has a large ballroom, three restaurants, and a pool, and the price includes two nights for every guest.",
    "cn": "A：既然市區的飯店正在整修，我們今年的年度頒獎晚宴要在哪裡舉辦？ B：我們訂了島上的一家海濱【度假村】，那裡有一個大宴會廳、三間餐廳和一座游泳池，價格包含每位賓客住宿兩晚。"
  },
  {
    "word": "fishing",
    "pos": "n.",
    "cn_def": "捕魚；漁業",
    "en_def": "the job or activity of catching fish",
    "sentence": "A: What do most people on the small island do for work, since there are no factories or large offices there? B: Most families earn their living from {{BLANK}}, so the men usually leave the harbor before sunrise, and the women sell the catch at the market later in the morning.",
    "cn": "A：既然那座小島上沒有工廠或大型辦公室，島上大多數人從事什麼工作？ B：大多數家庭靠【捕魚】維生，所以男人通常在日出前離開港口，女人則在早上晚些時候到市場販賣漁獲。"
  },
  {
    "word": "wildlife",
    "pos": "n.",
    "cn_def": "野生動物",
    "en_def": "animals and birds that live in nature",
    "sentence": "A: Why are the tour guides asking visitors not to leave food or plastic bags on the hiking trails anymore? B: The island's {{BLANK}}, especially the birds and small monkeys, has started eating the trash, and several animals became sick, so the park managers made new rules last week.",
    "cn": "A：為什麼導遊要求遊客不要再把食物或塑膠袋留在健行步道上？ B：島上的【野生動物】，特別是鳥類和小猴子，開始吃這些垃圾，有幾隻動物生病了，所以公園管理人員上週訂定了新規定。"
  },
  {
    "word": "vegetation",
    "pos": "n.",
    "cn_def": "植被；草木",
    "en_def": "plants in general, especially in one area",
    "sentence": "A: Why did the construction company delay building the new hotel on the hillside near the bay? B: The environmental report showed that the thick {{BLANK}} there keeps the soil from sliding into the sea during heavy rain, so the engineers must find a way to protect the plants first.",
    "cn": "A：為什麼建設公司延後在海灣附近山坡上興建新飯店？ B：環境報告顯示那裡茂密的【植被】可以防止大雨時土壤滑入海中，所以工程師必須先想辦法保護這些植物。"
  },
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the usual weather of a place",
    "sentence": "A: Why do so many retired managers from our company decide to move to the southern islands after they leave work? B: The {{BLANK}} there is warm all year, with mild winters and plenty of sunshine, so they can garden, swim, and play golf without worrying about snow or freezing temperatures.",
    "cn": "A：為什麼我們公司那麼多退休經理離職後決定搬到南方的島嶼？ B：那裡的【氣候】全年溫暖，冬天溫和、陽光充足，所以他們可以種花、游泳和打高爾夫球，不必擔心下雪或嚴寒。"
  },
  {
    "word": "humid",
    "pos": "adj.",
    "cn_def": "潮濕的；悶熱的",
    "en_def": "warm and wet in the air",
    "sentence": "A: Why do the laptops in the island office keep breaking down, even though they are almost brand new? B: The air in the building is very {{BLANK}} during the summer months, and the old air conditioner cannot remove the moisture, so water collects inside the machines and damages them.",
    "cn": "A：為什麼島上辦公室的筆電一直故障，即使它們幾乎是全新的？ B：夏季幾個月大樓裡的空氣非常【潮濕】，而舊冷氣無法除濕，所以水氣會累積在機器內部並損壞它們。"
  },
  {
    "word": "scenic",
    "pos": "adj.",
    "cn_def": "風景優美的",
    "en_def": "having beautiful natural views",
    "sentence": "A: Should we take the highway or the smaller road along the sea when we drive the clients to the lighthouse tomorrow? B: Let's take the {{BLANK}} road by the water, because it is only fifteen minutes longer, and the clients can enjoy views of the cliffs, the beaches, and the fishing boats.",
    "cn": "A：明天開車載客戶去燈塔時，我們要走高速公路還是沿海的小路？ B：我們走水邊那條【風景優美的】路吧，因為只多花十五分鐘，而且客戶可以欣賞懸崖、海灘和漁船的景色。"
  },
  {
    "word": "secluded",
    "pos": "adj.",
    "cn_def": "僻靜的；隱蔽的",
    "en_def": "quiet, private, and away from other people",
    "sentence": "A: The CEO wants a quiet place to plan next year's strategy with the directors, so where do you think we should go? B: There is a {{BLANK}} villa on the far side of the island, hidden behind tall trees and away from the tourist areas, where nobody will disturb the meetings.",
    "cn": "A：執行長想找一個安靜的地方和董事們規劃明年的策略，你認為我們應該去哪裡？ B：島的另一邊有一棟【僻靜的】別墅，隱身在高大的樹木後面、遠離觀光區，在那裡沒有人會打擾會議。"
  },
  {
    "word": "inhabitant",
    "pos": "n.",
    "cn_def": "居民",
    "en_def": "a person who lives in a particular place",
    "sentence": "A: How did the island council decide where to build the new medical clinic, since there were several possible sites? B: They asked every {{BLANK}} to complete a short survey last spring, and most people chose a spot near the harbor because it is easy to reach by bus or bicycle.",
    "cn": "A：既然有好幾個可能的地點，島嶼議會是如何決定新診所蓋在哪裡的？ B：他們去年春天請每一位【居民】填寫一份簡短的問卷，大多數人選擇港口附近的地點，因為搭公車或騎腳踏車都很容易到達。"
  },
  {
    "word": "mainland",
    "pos": "n.",
    "cn_def": "本土；大陸",
    "en_def": "the main area of land of a country, not its islands",
    "sentence": "A: Where do the island restaurants get their fresh vegetables and meat, since there are very few farms on the island? B: Most supplies come from the {{BLANK}} by cargo boat twice a week, so when storms cancel the trips, the chefs have to change their menus quickly.",
    "cn": "A：既然島上農場很少，島上的餐廳從哪裡取得新鮮蔬菜和肉類？ B：大部分補給品每週兩次由貨船從【本土】運來，所以當暴風雨取消船班時，廚師們必須迅速更換菜單。"
  },
  {
    "word": "transport",
    "pos": "v.",
    "cn_def": "運送；運輸",
    "en_def": "to move goods or people from one place to another",
    "sentence": "A: How are we going to send the heavy display booths to the trade fair on the island next month? B: We will {{BLANK}} them by truck to the harbor first, and then the shipping company will load them onto a cargo boat that arrives two days before the fair opens.",
    "cn": "A：下個月我們要如何把沉重的展示攤位送到島上的貿易展？ B：我們會先用卡車把它們【運送】到港口，然後貨運公司會把它們裝上一艘在展覽開幕前兩天抵達的貨船。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What are you planning to do on the free afternoon after the conference sessions finish on Thursday? B: I want to rent a bicycle and {{BLANK}} the small villages on the north side of the island, because a colleague told me there are great local cafés and an old lighthouse there.",
    "cn": "A：週四會議結束後的空閒下午你打算做什麼？ B：我想租一輛腳踏車去【探索】島北邊的小村莊，因為一位同事告訴我那裡有很棒的在地咖啡館和一座古老的燈塔。"
  }
];

const MCQS = [
  {
    "q": "The Philippines is made up of more than seven thousand islands. Our tour company offers cruises across this large _____ every winter.",
    "options": [
      "archipelago",
      "lagoon",
      "cliff",
      "harbor"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The company opened a new seafood restaurant on the west _____. Diners can watch the sunset over the ocean while they eat.",
    "options": [
      "coral",
      "ferry",
      "coast",
      "reef"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Several old wooden boxes from the cargo ship washed up on the _____ after the storm. Volunteers cleaned up the sand the next morning.",
    "options": [
      "climate",
      "shore",
      "tourism",
      "navigation"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The hotel offers free sun umbrellas and towels at its private sandy _____. Guests can swim there from eight in the morning until six.",
    "options": [
      "climate",
      "wildlife",
      "navigation",
      "beach"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The fishing boats return to the calm waters of the _____ every evening. Its curved shoreline protects them from strong ocean winds.",
    "options": [
      "cliff",
      "climate",
      "bay",
      "tourism"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The resort's shallow _____ is separated from the open sea by a long strip of sand. Children can swim safely in its calm water.",
    "options": [
      "lagoon",
      "cliff",
      "port",
      "climate"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Divers from around the world come to see the colorful coral _____ near the island. Local guides ask them not to touch anything underwater.",
    "options": [
      "harbor",
      "ferry",
      "peninsula",
      "reef"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Warmer ocean temperatures have damaged much of the bright _____ around the island. Scientists are planting new pieces to help it grow back.",
    "options": [
      "ferry",
      "coral",
      "cliff",
      "port"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The new factory is located on a narrow _____ that sticks out into the sea. It is connected to the city by a single road.",
    "options": [
      "peninsula",
      "lagoon",
      "reef",
      "climate"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Dozens of sailboats were tied up safely in the _____ during the storm. The marina manager checked every boat the next morning.",
    "options": [
      "climate",
      "wildlife",
      "harbor",
      "tourism"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The cargo ship will dock at the _____ of Kaohsiung on Monday morning. Workers will then unload over two hundred containers of electronics.",
    "options": [
      "reef",
      "port",
      "coral",
      "cliff"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The hotel restaurant sits on top of a tall _____ above the ocean. Guests are warned not to stand too close to the edge.",
    "options": [
      "ferry",
      "climate",
      "lagoon",
      "cliff"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The island's black beaches are made of _____ rock from an eruption long ago. Many tourists take photos of the unusual dark sand.",
    "options": [
      "humid",
      "secluded",
      "volcanic",
      "coastal"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The hotel breakfast includes fresh mangoes, papayas, and other _____ fruits from local farms. Guests can also order fresh juice at the bar.",
    "options": [
      "tropical",
      "volcanic",
      "isolated",
      "secluded"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The research team works in a _____ village that is six hours from the nearest town. Supplies arrive by helicopter once a month.",
    "options": [
      "volcanic",
      "humid",
      "marine",
      "remote"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "During the storm, the island was completely _____ from the mainland for three days. No ferries or planes could reach it.",
    "options": [
      "tropical",
      "isolated",
      "scenic",
      "volcanic"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The aquarium hired three new _____ biologists to study sea turtles and sharks. They will also give talks to visiting school groups.",
    "options": [
      "marine",
      "humid",
      "scenic",
      "secluded"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Heavy rain and high waves caused flooding in several _____ towns last night. Residents living near the sea were asked to move inland.",
    "options": [
      "volcanic",
      "marine",
      "coastal",
      "humid"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The ship's new satellite _____ system helps the captain find the safest route at night. It also warns the crew about rocks.",
    "options": [
      "vegetation",
      "navigation",
      "tourism",
      "wildlife"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Passengers can take the morning _____ from the harbor to the island. Tickets cost twenty dollars, and cars are allowed on board.",
    "options": [
      "reef",
      "coral",
      "climate",
      "ferry"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The island depends heavily on _____, which provides more than half of all local jobs. Hotels and restaurants hire extra staff every summer.",
    "options": [
      "navigation",
      "vegetation",
      "tourism",
      "coral"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Our company booked a five-star beach _____ for the annual sales retreat. The package includes meals, spa treatments, and a boat tour.",
    "options": [
      "resort",
      "reef",
      "lagoon",
      "peninsula"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Most families in the small village earn a living from _____ and selling seafood. The boats leave the harbor before sunrise every day.",
    "options": [
      "wildlife",
      "navigation",
      "climate",
      "fishing"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Visitors to the national park are asked not to feed the _____. Monkeys and birds can become sick from eating human food.",
    "options": [
      "vegetation",
      "wildlife",
      "climate",
      "navigation"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The hillside is covered in thick green _____, including tall grass and palm trees. These plants help stop soil from washing away.",
    "options": [
      "vegetation",
      "wildlife",
      "tourism",
      "navigation"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The island has a mild _____ with warm temperatures all year round. That is why many retired workers decide to move there.",
    "options": [
      "coral",
      "harbor",
      "climate",
      "reef"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The weather in July is hot and _____, so the air feels heavy and sticky. Visitors should drink plenty of water and stay in the shade.",
    "options": [
      "volcanic",
      "humid",
      "marine",
      "isolated"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Tourists love driving along the _____ coastal road because of its beautiful ocean views. Many cars stop at the lookout points to take photos.",
    "options": [
      "humid",
      "volcanic",
      "isolated",
      "scenic"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The couple chose a quiet, _____ cabin hidden in the forest for their honeymoon. No other guests stayed within a mile of it.",
    "options": [
      "humid",
      "marine",
      "secluded",
      "volcanic"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Every _____ of the island received a letter about the new water rules. Only about two thousand people live there all year.",
    "options": [
      "inhabitant",
      "archipelago",
      "peninsula",
      "harbor"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "islet": {
    "pos": "n.",
    "en_def": "a very small island",
    "cn_def": "小島"
  },
  "archipelago": {
    "pos": "n.",
    "en_def": "a group of islands close together",
    "cn_def": "群島"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of the sea or a lake",
    "cn_def": "岸；岸邊"
  },
  "beach": {
    "pos": "n.",
    "en_def": "an area of sand or small stones next to the sea",
    "cn_def": "海灘"
  },
  "bay": {
    "pos": "n.",
    "en_def": "a part of the sea with land curving around it",
    "cn_def": "海灣"
  },
  "lagoon": {
    "pos": "n.",
    "en_def": "an area of shallow sea water separated from the sea by sand or coral",
    "cn_def": "潟湖"
  },
  "reef": {
    "pos": "n.",
    "en_def": "a line of rocks or coral close to the surface of the sea",
    "cn_def": "礁；礁石"
  },
  "coral": {
    "pos": "n.",
    "en_def": "a hard colorful material made by tiny sea animals",
    "cn_def": "珊瑚"
  },
  "peninsula": {
    "pos": "n.",
    "en_def": "a piece of land almost surrounded by water but joined to a larger area",
    "cn_def": "半島"
  },
  "harbor": {
    "pos": "n.",
    "en_def": "an area of water where ships can stay safely",
    "cn_def": "港口；港灣"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or place where ships load and unload goods",
    "cn_def": "港口；港市"
  },
  "cliff": {
    "pos": "n.",
    "en_def": "a high, steep rock face, often next to the sea",
    "cn_def": "懸崖"
  },
  "volcanic": {
    "pos": "adj.",
    "en_def": "made by or related to a volcano",
    "cn_def": "火山的"
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from or in the hot, wet parts of the world",
    "cn_def": "熱帶的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from towns and other people",
    "cn_def": "偏遠的"
  },
  "isolated": {
    "pos": "adj.",
    "en_def": "far from or cut off from other places or people",
    "cn_def": "孤立的；與世隔絕的"
  },
  "marine": {
    "pos": "adj.",
    "en_def": "related to the sea and the things that live in it",
    "cn_def": "海洋的"
  },
  "coastal": {
    "pos": "adj.",
    "en_def": "on or near the coast",
    "cn_def": "沿海的"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the skill or act of finding the way, especially on a ship",
    "cn_def": "導航；航行"
  },
  "ferry": {
    "pos": "n.",
    "en_def": "a boat that regularly carries people and cars across water",
    "cn_def": "渡輪"
  },
  "tourism": {
    "pos": "n.",
    "en_def": "the business of providing services for people on holiday",
    "cn_def": "觀光業；旅遊業"
  },
  "resort": {
    "pos": "n.",
    "en_def": "a place where people go for holidays, with hotels and activities",
    "cn_def": "度假村"
  },
  "fishing": {
    "pos": "n.",
    "en_def": "the job or activity of catching fish",
    "cn_def": "捕魚；漁業"
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "animals and birds that live in nature",
    "cn_def": "野生動物"
  },
  "vegetation": {
    "pos": "n.",
    "en_def": "plants in general, especially in one area",
    "cn_def": "植被；草木"
  },
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather of a place",
    "cn_def": "氣候"
  },
  "humid": {
    "pos": "adj.",
    "en_def": "warm and wet in the air",
    "cn_def": "潮濕的；悶熱的"
  },
  "scenic": {
    "pos": "adj.",
    "en_def": "having beautiful natural views",
    "cn_def": "風景優美的"
  },
  "secluded": {
    "pos": "adj.",
    "en_def": "quiet, private, and away from other people",
    "cn_def": "僻靜的；隱蔽的"
  },
  "inhabitant": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民"
  },
  "mainland": {
    "pos": "n.",
    "en_def": "the main area of land of a country, not its islands",
    "cn_def": "本土；大陸"
  },
  "transport": {
    "pos": "v.",
    "en_def": "to move goods or people from one place to another",
    "cn_def": "運送；運輸"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險"
  }
};

const EXTRA_GLOSSES = {};
