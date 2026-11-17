// Topic 318 Quiz Data: Rainy 下雨天
// Source word list: https://www.examword.com/group-topic/rainy — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T318 - Rainy 下雨天",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rain",
    "pos": "n.",
    "cn_def": "雨；雨水",
    "en_def": "water that falls from clouds in drops",
    "sentence": "A: Should we still hold the company picnic in the park on Saturday, or do you think we need to move it indoors? B: The weather report says heavy {{BLANK}} will start around noon, so I've already booked the hotel ballroom as a backup and told the caterers about the change.",
    "cn": "A：我們星期六還要在公園舉辦公司野餐嗎？還是你覺得需要移到室內？ B：氣象報告說中午左右會開始下大【雨】，所以我已經預訂了飯店宴會廳作為備案，也通知了外燴廠商這項變更。"
  },
  {
    "word": "rainfall",
    "pos": "n.",
    "cn_def": "降雨量",
    "en_def": "the amount of rain that falls in an area",
    "sentence": "A: Why did the farm supplier raise the price of fresh vegetables again this month, even though we signed a contract last spring? B: The total {{BLANK}} in the south was much lower than usual this summer, so many crops dried out and farmers are now selling far fewer boxes to restaurants like ours.",
    "cn": "A：為什麼農產供應商這個月又調漲了新鮮蔬菜的價格，即使我們去年春天已經簽約了？ B：今年夏天南部的總【降雨量】比平常低很多，所以許多作物都乾枯了，農民現在賣給像我們這樣餐廳的箱數少了很多。"
  },
  {
    "word": "shower",
    "pos": "n.",
    "cn_def": "陣雨",
    "en_def": "a short period of light rain",
    "sentence": "A: Did you get caught in bad weather on your way back from the client meeting downtown this afternoon? B: Yes, a sudden {{BLANK}} started just as I left the building, but it only lasted about ten minutes, so I waited in a coffee shop and finished my report before walking to the station.",
    "cn": "A：你今天下午從市中心的客戶會議回來的路上有遇到壞天氣嗎？ B：有，我一走出大樓就突然下了一場【陣雨】，不過只持續了大約十分鐘，所以我在咖啡店裡等著，順便把報告寫完，然後才走去車站。"
  },
  {
    "word": "downpour",
    "pos": "n.",
    "cn_def": "傾盆大雨",
    "en_def": "a very heavy fall of rain",
    "sentence": "A: Why are so many employees arriving late today, and why is the lobby floor covered with wet footprints? B: A heavy {{BLANK}} hit the city during rush hour, so several bus routes were delayed, and the cleaning staff has not had time to dry the entrance yet.",
    "cn": "A：為什麼今天這麼多員工遲到，而且大廳地板上滿是濕腳印？ B：交通尖峰時段城市遭遇一場【傾盆大雨】，所以好幾條公車路線延誤，清潔人員也還沒時間把入口擦乾。"
  },
  {
    "word": "drizzle",
    "pos": "n.",
    "cn_def": "毛毛雨；細雨",
    "en_def": "light rain with very small drops",
    "sentence": "A: Do you think the outdoor product photo shoot can continue this morning, or should we cancel it and call the models? B: It's only a light {{BLANK}} right now, so if the assistants hold covers over the cameras, we can probably finish the last few shots before the weather gets worse.",
    "cn": "A：你覺得今天早上的戶外產品拍攝可以繼續嗎，還是我們應該取消並打電話通知模特兒？ B：現在只是下著小【毛毛雨】，所以只要助理拿遮蓋物擋住相機，我們大概可以在天氣變糟之前拍完最後幾張照片。"
  },
  {
    "word": "storm",
    "pos": "n.",
    "cn_def": "暴風雨",
    "en_def": "very bad weather with strong wind and rain",
    "sentence": "A: Has the airline told you whether your flight to Tokyo for the trade show will leave on time tomorrow morning? B: Not yet, because a strong {{BLANK}} is moving toward the coast tonight, so they said they will send a text message by six o'clock if the departure is delayed or canceled.",
    "cn": "A：航空公司有告訴你明天早上飛往東京參加商展的班機會準時出發嗎？ B：還沒有，因為今晚有一場強烈的【暴風雨】正朝海岸移動，所以他們說如果起飛延誤或取消，會在六點前傳簡訊通知。"
  },
  {
    "word": "thunderstorm",
    "pos": "n.",
    "cn_def": "雷雨",
    "en_def": "a storm with thunder and lightning",
    "sentence": "A: Why did the lights in the conference room go off for a few seconds during the sales meeting this afternoon? B: There was a {{BLANK}} over the industrial park, and lightning hit a power line nearby, so the building switched to its backup generator until the electricity came back.",
    "cn": "A：今天下午業務會議時，會議室的燈為什麼熄滅了幾秒鐘？ B：工業區上空有一場【雷雨】，閃電擊中附近的電線，所以大樓切換到備用發電機，直到電力恢復。"
  },
  {
    "word": "cloudy",
    "pos": "adj.",
    "cn_def": "多雲的；陰天的",
    "en_def": "having many clouds in the sky",
    "sentence": "A: Is it a good idea to take our overseas visitors on the mountain tour tomorrow, or will they miss the famous view? B: The forecast says it will be {{BLANK}} in the morning but clear after lunch, so let's visit the factory first and drive up to the viewpoint in the afternoon.",
    "cn": "A：明天帶海外訪客去山區觀光是個好主意嗎？還是他們會錯過著名的景色？ B：天氣預報說早上會是【多雲】，但午餐後會放晴，所以我們先參觀工廠，下午再開車上觀景台。"
  },
  {
    "word": "overcast",
    "pos": "adj.",
    "cn_def": "陰天的；烏雲密布的",
    "en_def": "completely covered with gray clouds",
    "sentence": "A: The photographer wants to take pictures of the new office building for our website, so when would be the best time? B: Actually, she said an {{BLANK}} sky is better for this kind of job, because soft light shows the glass walls clearly without strong reflections, so tomorrow morning should be perfect.",
    "cn": "A：攝影師想為我們的網站拍攝新辦公大樓的照片，什麼時候最好？ B：其實她說這種工作在【陰沉多雲】的天空下比較好，因為柔和的光線能清楚呈現玻璃外牆而不會有強烈反光，所以明天早上應該很完美。"
  },
  {
    "word": "wet",
    "pos": "adj.",
    "cn_def": "濕的",
    "en_def": "covered with water or rain; not dry",
    "sentence": "A: Why did the delivery company refuse to accept the boxes we packed for the Singapore order this morning? B: The boxes were left outside the loading dock during the night, and the driver said the cardboard was too {{BLANK}} to protect the electronic parts inside, so we have to repack everything.",
    "cn": "A：為什麼快遞公司今天早上拒收我們為新加坡訂單包裝的箱子？ B：那些箱子整晚被放在裝卸平台外面，司機說紙箱太【濕】了，無法保護裡面的電子零件，所以我們必須全部重新包裝。"
  },
  {
    "word": "damp",
    "pos": "adj.",
    "cn_def": "潮濕的",
    "en_def": "slightly wet in an unpleasant way",
    "sentence": "A: The storage room smells strange, and some of the paper files on the bottom shelf have turned a little green, so what happened? B: The air in there has been {{BLANK}} since the pipe broke last month, so I'm going to buy a dehumidifier and move the important documents to the second floor.",
    "cn": "A：儲藏室聞起來怪怪的，最底層架子上的一些紙本文件也有點發綠，發生了什麼事？ B：自從上個月水管破裂以來，那裡的空氣一直很【潮濕】，所以我打算買一台除濕機，並把重要文件搬到二樓。"
  },
  {
    "word": "humid",
    "pos": "adj.",
    "cn_def": "潮濕悶熱的",
    "en_def": "hot and wet in the air",
    "sentence": "A: Why are the new employees from Canada complaining that they feel tired after walking to the office every morning? B: Taipei is very hot and {{BLANK}} in summer, so they are not used to the heavy air yet, and I've suggested that they take the shuttle bus until they adjust.",
    "cn": "A：為什麼從加拿大來的新員工抱怨每天早上走路到公司後都覺得很累？ B：台北夏天非常炎熱又【潮濕】，他們還不習慣那種沉重的空氣，所以我建議他們在適應之前先搭接駁車。"
  },
  {
    "word": "puddle",
    "pos": "n.",
    "cn_def": "水坑；水窪",
    "en_def": "a small pool of rainwater on the ground",
    "sentence": "A: How did you get mud all over your new suit before the job interview this morning? B: A taxi drove through a big {{BLANK}} right next to the bus stop while I was waiting, and the dirty water splashed all over me, so I had to buy a clean shirt at the department store.",
    "cn": "A：今天早上面試前，你的新西裝怎麼沾滿了泥巴？ B：我在公車站等車時，一輛計程車開過旁邊一個大【水坑】，髒水濺得我全身都是，所以我只好去百貨公司買一件乾淨的襯衫。"
  },
  {
    "word": "umbrella",
    "pos": "n.",
    "cn_def": "雨傘",
    "en_def": "a folding cover you hold over your head in the rain",
    "sentence": "A: Do we have anything that guests can use when they leave the hotel lobby, because it has started raining heavily again? B: Yes, each guest can borrow a large {{BLANK}} with our hotel logo from the front desk, and they can simply return it when they come back or leave it at the airport counter.",
    "cn": "A：客人離開飯店大廳時有沒有什麼可以用的東西？因為又開始下大雨了。 B：有，每位客人都可以向櫃台借一把印有我們飯店標誌的大【雨傘】，回來時歸還或放在機場櫃台就可以了。"
  },
  {
    "word": "raincoat",
    "pos": "n.",
    "cn_def": "雨衣",
    "en_def": "a coat that keeps you dry in the rain",
    "sentence": "A: What should the delivery riders wear during the typhoon season so they can still work safely on their scooters? B: The company will give every rider a bright yellow {{BLANK}} with reflective strips, so drivers can see them easily at night and their clothes stay dry during long shifts.",
    "cn": "A：外送員在颱風季節應該穿什麼，才能繼續安全地騎機車工作？ B：公司會發給每位外送員一件附有反光條的亮黃色【雨衣】，讓其他駕駛在夜間容易看見他們，長時間值班時衣服也能保持乾燥。"
  },
  {
    "word": "waterproof",
    "pos": "adj.",
    "cn_def": "防水的",
    "en_def": "not letting water pass through",
    "sentence": "A: Why does this hiking jacket cost twice as much as the other one, even though they look almost the same? B: This model is completely {{BLANK}}, so it keeps you dry in heavy storms, and it also comes with a two-year warranty, which is why our outdoor customers prefer it.",
    "cn": "A：為什麼這件登山外套的價格是另一件的兩倍，雖然它們看起來幾乎一樣？ B：這款是完全【防水】的，在大暴雨中也能讓你保持乾爽，而且還附有兩年保固，這就是我們的戶外客戶偏好它的原因。"
  },
  {
    "word": "flood",
    "pos": "n.",
    "cn_def": "水災；淹水",
    "en_def": "a large amount of water covering land that is usually dry",
    "sentence": "A: Why is the warehouse closed today, and when can we start shipping orders to our customers again? B: Last night's heavy rain caused a {{BLANK}} on the ground floor, so the manager is checking the damaged products, and he expects to reopen the building by Thursday afternoon.",
    "cn": "A：倉庫今天為什麼關閉？我們什麼時候可以再開始出貨給客戶？ B：昨晚的大雨導致一樓【淹水】，所以經理正在檢查受損的產品，他預計星期四下午可以重新開放大樓。"
  },
  {
    "word": "forecast",
    "pos": "n.",
    "cn_def": "預報；預測",
    "en_def": "a report saying what the weather will be like",
    "sentence": "A: Should we send the sales team to the outdoor trade fair in Kaohsiung this weekend, or is it too risky? B: The weather {{BLANK}} says a typhoon may arrive on Saturday, so let's wait until tomorrow morning for the latest update before we book the train tickets and hotel rooms.",
    "cn": "A：我們這個週末應該派業務團隊去高雄參加戶外商展嗎，還是風險太大？ B：天氣【預報】說星期六可能會有颱風來襲，所以我們等到明天早上看最新消息後，再訂火車票和飯店房間吧。"
  },
  {
    "word": "pour",
    "pos": "v.",
    "cn_def": "下大雨；傾瀉",
    "en_def": "to rain very heavily",
    "sentence": "A: Is it a good time to walk over to the bank across the street, or should I wait a little longer? B: I would wait, because it's starting to {{BLANK}} again, and the guard just told me the sidewalk outside is already covered in water, so it's better to go after lunch.",
    "cn": "A：現在是走去對街銀行的好時機嗎？還是我應該再等一下？ B：我會建議再等等，因為又開始【下傾盆大雨】了，警衛剛剛告訴我外面的人行道已經積水，所以午餐後再去比較好。"
  },
  {
    "word": "soak",
    "pos": "v.",
    "cn_def": "浸濕；濕透",
    "en_def": "to make something completely wet",
    "sentence": "A: Why did you bring an extra pair of shoes and socks to the office in your bag this morning? B: The streets near my apartment flood easily in this season, and heavy rain can {{BLANK}} my shoes in just a few minutes, so I always keep dry ones here for important meetings.",
    "cn": "A：你今天早上為什麼在包包裡多帶了一雙鞋子和襪子來公司？ B：我公寓附近的街道在這個季節很容易淹水，大雨幾分鐘內就能【浸濕】我的鞋子，所以我總是在這裡放一雙乾的，以備重要會議時使用。"
  },
  {
    "word": "splash",
    "pos": "v.",
    "cn_def": "濺；潑",
    "en_def": "to make water or mud fly through the air and land on something",
    "sentence": "A: Why is the receptionist asking everyone to walk slowly near the main entrance of the building today? B: Water from the roof is dripping into a bucket by the door, and if people walk too fast, they {{BLANK}} dirty water onto the clean carpet and the visitors' chairs.",
    "cn": "A：為什麼接待人員今天要大家在大樓正門附近慢慢走？ B：屋頂的水正滴進門邊的水桶裡，如果大家走太快，就會把髒水【濺】到乾淨的地毯和訪客座椅上。"
  },
  {
    "word": "muddy",
    "pos": "adj.",
    "cn_def": "泥濘的",
    "en_def": "covered with soft wet earth",
    "sentence": "A: How was the site visit to the new factory construction area outside the city yesterday afternoon? B: It went well, but the ground was very {{BLANK}} after two days of rain, so we all had to wear rubber boots, and the engineers had to delay pouring the concrete.",
    "cn": "A：昨天下午去城外新工廠建地的實地考察怎麼樣？ B：很順利，但下了兩天雨之後地面非常【泥濘】，所以我們都必須穿雨鞋，工程師也只好延後灌漿。"
  },
  {
    "word": "slippery",
    "pos": "adj.",
    "cn_def": "滑的",
    "en_def": "wet or smooth so that it is easy to fall",
    "sentence": "A: Why did the building manager put yellow warning signs at the bottom of the stairs this morning? B: People keep bringing water in on their shoes, so the marble floor is very {{BLANK}} today, and he doesn't want any employees or customers to fall and get hurt.",
    "cn": "A：為什麼大樓管理員今天早上在樓梯底下放了黃色警告標誌？ B：大家的鞋子一直把水帶進來，所以今天大理石地板非常【滑】，他不希望有任何員工或客人滑倒受傷。"
  },
  {
    "word": "gloomy",
    "pos": "adj.",
    "cn_def": "陰沉的；陰暗的",
    "en_def": "dark and gray in a way that makes you feel sad",
    "sentence": "A: Why do you think fewer customers came into the café this week, even though we started our new lunch special? B: The weather has been dark and {{BLANK}} for five days, so people prefer to stay in their offices and order delivery instead of walking outside.",
    "cn": "A：你覺得為什麼這週來咖啡廳的客人變少了，即使我們推出了新的午餐特餐？ B：天氣已經陰暗【陰沉】了五天，所以大家寧願待在辦公室叫外送，也不想走到外面。"
  },
  {
    "word": "chilly",
    "pos": "adj.",
    "cn_def": "寒冷的；涼颼颼的",
    "en_def": "cold enough to be uncomfortable",
    "sentence": "A: Should we turn on the heater in the training room before the new employees arrive for orientation this morning? B: Yes, please, because it feels quite {{BLANK}} in there after last night's rain, and people won't be able to concentrate on the presentation if they are cold.",
    "cn": "A：今天早上新進員工來參加新人訓練之前，我們應該先打開訓練室的暖氣嗎？ B：好，麻煩你，因為昨晚下雨後裡面感覺相當【寒冷】，如果大家覺得冷，就無法專心聽簡報。"
  },
  {
    "word": "mist",
    "pos": "n.",
    "cn_def": "薄霧",
    "en_def": "a thin cloud of tiny water drops near the ground",
    "sentence": "A: Why did the ferry company delay the morning boat to the island, where we are holding the team-building event? B: A thick {{BLANK}} covered the harbor early this morning, so the captain could not see far enough to sail safely, but the next boat should leave at ten thirty.",
    "cn": "A：為什麼渡輪公司延後了早上開往島上的船班？我們要在那裡舉辦團隊建立活動。 B：今天清晨港口被一片濃【霧】籠罩，船長看不夠遠，無法安全航行，不過下一班船應該會在十點半出發。"
  },
  {
    "word": "foggy",
    "pos": "adj.",
    "cn_def": "起霧的；多霧的",
    "en_def": "full of thick cloud near the ground, so it is hard to see",
    "sentence": "A: Why was the airport shuttle bus so late picking up our visitors from the hotel this morning? B: It was very {{BLANK}} on the highway near the airport, so all the drivers had to slow down and turn on their lights, and the trip took almost an hour longer than usual.",
    "cn": "A：為什麼今天早上機場接駁車那麼晚才到飯店接我們的訪客？ B：機場附近的高速公路上【霧很濃】，所以所有駕駛都必須減速並打開車燈，車程比平常多花了將近一個小時。"
  },
  {
    "word": "raindrop",
    "pos": "n.",
    "cn_def": "雨滴",
    "en_def": "a single drop of rain",
    "sentence": "A: How did you know there was a problem with the roof of the meeting room before the repair workers arrived? B: During the meeting, a large {{BLANK}} fell from the ceiling onto my laptop, so I looked up, saw a wet spot, and immediately called the building maintenance office.",
    "cn": "A：在修繕工人來之前，你怎麼知道會議室的屋頂有問題？ B：開會時，一大顆【雨滴】從天花板掉到我的筆電上，我抬頭一看發現一塊濕痕，就立刻打電話給大樓維修辦公室。"
  },
  {
    "word": "leak",
    "pos": "v.",
    "cn_def": "漏水；滲漏",
    "en_def": "to let water come in or out through a small hole",
    "sentence": "A: Why did the landlord send a plumber to check our office windows and ceiling yesterday afternoon? B: Water started to {{BLANK}} through the window frame during the storm on Monday, so he wants to fix it before the typhoon season begins and our computers get damaged.",
    "cn": "A：為什麼房東昨天下午派水電工來檢查我們辦公室的窗戶和天花板？ B：星期一暴風雨期間，水開始從窗框【滲漏】進來，所以他想在颱風季開始、我們的電腦受損之前修好。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "遮蔽處；躲避處",
    "en_def": "a place or cover that protects you from bad weather",
    "sentence": "A: What should the tour guide do if heavy rain starts while the group is walking through the old town this afternoon? B: She can take everyone to the large covered market near the temple, which offers good {{BLANK}} from the weather, and the visitors can buy snacks while they wait.",
    "cn": "A：如果今天下午團體在老城區步行時開始下大雨，導遊應該怎麼做？ B：她可以帶大家去寺廟附近那個有屋頂的大型市場，那裡是躲避天氣的好【遮蔽處】，遊客等待時也可以買點心。"
  },
  {
    "word": "monsoon",
    "pos": "n.",
    "cn_def": "季風；雨季",
    "en_def": "the season of very heavy rain in South and Southeast Asia",
    "sentence": "A: Why does our supplier in India always ask for longer delivery times between June and September? B: During the {{BLANK}} season, very heavy rain falls almost every day, and many roads to the port are closed, so trucks often cannot move the goods on schedule.",
    "cn": "A：為什麼我們在印度的供應商總是在六月到九月之間要求延長交貨時間？ B：在【季風】季期間，幾乎每天都會下非常大的雨，許多通往港口的道路都會封閉，所以卡車常常無法按時運送貨物。"
  },
  {
    "word": "rainstorm",
    "pos": "n.",
    "cn_def": "暴雨",
    "en_def": "a storm with a lot of heavy rain",
    "sentence": "A: Why are the cleaners mopping the floor of the shopping mall entrance again, when they just finished an hour ago? B: A sudden {{BLANK}} started while hundreds of shoppers were coming in for the weekend sale, and they carried water and mud everywhere on their shoes and bags.",
    "cn": "A：為什麼清潔人員又在拖購物中心入口的地板？他們一個小時前才剛拖完。 B：數百位購物者進來參加週末特賣時，突然下起一場【暴雨】，他們的鞋子和包包把水和泥巴帶得到處都是。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "清新的；新鮮的",
    "en_def": "clean and cool, pleasant to breathe",
    "sentence": "A: Would you like to take a short walk around the park with me before our afternoon meeting with the new clients? B: That's a great idea, because the air always smells so {{BLANK}} and clean after it rains, and a little exercise will help me think clearly before the long discussion.",
    "cn": "A：下午和新客戶開會之前，你想和我去公園散步一下嗎？ B：好主意，因為下過雨後空氣總是聞起來很【清新】又乾淨，稍微運動一下能讓我在漫長的討論前思緒清晰。"
  }
];

const MCQS = [
  {
    "q": "The outdoor concert was moved into the gym this evening. Heavy _____ was expected to fall throughout the night.",
    "options": [
      "rain",
      "umbrella",
      "shelter",
      "puddle"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Farmers in the region are worried about this year's harvest. Total _____ has been forty percent below average since March.",
    "options": [
      "forecast",
      "shelter",
      "rainfall",
      "raincoat"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Don't worry about the weather for the afternoon tour. The _____ should pass quickly, and the sun will come out again by three.",
    "options": [
      "puddle",
      "shower",
      "umbrella",
      "shelter"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The marketing staff got completely wet on their way back from lunch. A sudden _____ began just as they left the restaurant.",
    "options": [
      "mist",
      "puddle",
      "shelter",
      "downpour"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Only a light _____ was falling when the guests arrived. Most of them walked from the parking lot without opening their umbrellas.",
    "options": [
      "flood",
      "monsoon",
      "drizzle",
      "puddle"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The airport canceled all evening flights to the island. A powerful _____ with strong winds is expected to reach the coast tonight.",
    "options": [
      "storm",
      "drizzle",
      "mist",
      "puddle"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The sky will be _____ this morning, but the sun should appear later. Visitors can still enjoy the garden tour after lunch.",
    "options": [
      "waterproof",
      "slippery",
      "muddy",
      "cloudy"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The photographer prefers to shoot the building when the sky is _____. Soft, even light makes the glass windows look clear without reflections.",
    "options": [
      "waterproof",
      "overcast",
      "slippery",
      "damp"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Please leave your _____ umbrella in the stand by the door. The cleaning staff just polished the lobby floor this morning.",
    "options": [
      "wet",
      "chilly",
      "foggy",
      "gloomy"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The old storage room smells bad because the walls are always _____. We need to buy a dehumidifier before the paper files are ruined.",
    "options": [
      "foggy",
      "cloudy",
      "damp",
      "gloomy"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Many visitors find Taipei's summer weather uncomfortable. It is not only hot but also very _____, so people sweat even in the shade.",
    "options": [
      "waterproof",
      "humid",
      "slippery",
      "muddy"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "A passing truck drove through a large _____ beside the road. Dirty water splashed onto the people waiting at the bus stop.",
    "options": [
      "umbrella",
      "raincoat",
      "forecast",
      "puddle"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The hotel lends guests a free _____ when it rains. Simply return it to the front desk when you come back.",
    "options": [
      "puddle",
      "flood",
      "umbrella",
      "monsoon"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "All delivery riders must wear a bright _____ during wet weather. The reflective strips help drivers see them clearly at night.",
    "options": [
      "raincoat",
      "puddle",
      "forecast",
      "shelter"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "This watch is fully _____ up to fifty meters. You can wear it while swimming without worrying about damage.",
    "options": [
      "damp",
      "humid",
      "muddy",
      "waterproof"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The ground floor of the warehouse was closed for three days. A _____ after the typhoon damaged many boxes of products.",
    "options": [
      "drizzle",
      "flood",
      "mist",
      "raindrop"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "According to the weather _____, the typhoon will reach Taipei on Friday. The company has told employees to work from home that day.",
    "options": [
      "forecast",
      "shelter",
      "puddle",
      "umbrella"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Look out the window, it has just started to _____ with rain. Let's stay inside the station until it gets lighter.",
    "options": [
      "soak",
      "splash",
      "pour",
      "shelter"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Put the old towels under the window before the storm. They will _____ up any water that comes in through the frame.",
    "options": [
      "pour",
      "soak",
      "splash",
      "leak"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Please drive slowly near the bus stop on rainy days. Fast cars often _____ muddy water onto people waiting by the road.",
    "options": [
      "soak",
      "shelter",
      "forecast",
      "splash"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Visitors to the construction site must wear rubber boots today. The ground is very _____ after two days of heavy rain.",
    "options": [
      "foggy",
      "gloomy",
      "muddy",
      "chilly"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Hold the handrail when you walk down the stairs. The marble steps become very _____ when people bring in water on their shoes.",
    "options": [
      "slippery",
      "cloudy",
      "foggy",
      "humid"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Many people feel less energetic during long periods of dark, _____ weather. Bright office lighting can help employees stay positive in winter.",
    "options": [
      "waterproof",
      "slippery",
      "muddy",
      "gloomy"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Bring a warm sweater to the evening reception on the rooftop. It can get quite _____ after sunset in November.",
    "options": [
      "waterproof",
      "chilly",
      "slippery",
      "muddy"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The morning ferry was delayed for an hour. A thick _____ over the harbor made it hard for the captain to see.",
    "options": [
      "mist",
      "shower",
      "puddle",
      "raincoat"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Drivers on the mountain road should turn on their headlights. It is often _____ in the early morning, and visibility can be very poor.",
    "options": [
      "humid",
      "damp",
      "foggy",
      "waterproof"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Our office roof began to _____ during last night's storm. Water dripped onto several desks, so a repair worker is coming today.",
    "options": [
      "soak",
      "leak",
      "splash",
      "shelter"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "When the storm started, the hikers looked for _____ under a large rock. They waited there until the rain stopped.",
    "options": [
      "forecast",
      "puddle",
      "monsoon",
      "shelter"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Shipping from that region is often slow between June and September. Heavy rain during the _____ season closes many roads to the port.",
    "options": [
      "umbrella",
      "puddle",
      "monsoon",
      "raindrop"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "After the rain, the air in the mountains smells clean and _____. Many guests take an early walk before breakfast to enjoy it.",
    "options": [
      "fresh",
      "muddy",
      "gloomy",
      "slippery"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "rain": {
    "pos": "n.",
    "en_def": "water that falls from clouds in drops",
    "cn_def": "雨；雨水"
  },
  "rainfall": {
    "pos": "n.",
    "en_def": "the amount of rain that falls in an area",
    "cn_def": "降雨量"
  },
  "shower": {
    "pos": "n.",
    "en_def": "a short period of light rain",
    "cn_def": "陣雨"
  },
  "downpour": {
    "pos": "n.",
    "en_def": "a very heavy fall of rain",
    "cn_def": "傾盆大雨"
  },
  "drizzle": {
    "pos": "n.",
    "en_def": "light rain with very small drops",
    "cn_def": "毛毛雨；細雨"
  },
  "storm": {
    "pos": "n.",
    "en_def": "very bad weather with strong wind and rain",
    "cn_def": "暴風雨"
  },
  "thunderstorm": {
    "pos": "n.",
    "en_def": "a storm with thunder and lightning",
    "cn_def": "雷雨"
  },
  "cloudy": {
    "pos": "adj.",
    "en_def": "having many clouds in the sky",
    "cn_def": "多雲的；陰天的"
  },
  "overcast": {
    "pos": "adj.",
    "en_def": "completely covered with gray clouds",
    "cn_def": "陰天的；烏雲密布的"
  },
  "wet": {
    "pos": "adj.",
    "en_def": "covered with water or rain; not dry",
    "cn_def": "濕的"
  },
  "damp": {
    "pos": "adj.",
    "en_def": "slightly wet in an unpleasant way",
    "cn_def": "潮濕的"
  },
  "humid": {
    "pos": "adj.",
    "en_def": "hot and wet in the air",
    "cn_def": "潮濕悶熱的"
  },
  "puddle": {
    "pos": "n.",
    "en_def": "a small pool of rainwater on the ground",
    "cn_def": "水坑；水窪"
  },
  "umbrella": {
    "pos": "n.",
    "en_def": "a folding cover you hold over your head in the rain",
    "cn_def": "雨傘"
  },
  "raincoat": {
    "pos": "n.",
    "en_def": "a coat that keeps you dry in the rain",
    "cn_def": "雨衣"
  },
  "waterproof": {
    "pos": "adj.",
    "en_def": "not letting water pass through",
    "cn_def": "防水的"
  },
  "flood": {
    "pos": "n.",
    "en_def": "a large amount of water covering land that is usually dry",
    "cn_def": "水災；淹水"
  },
  "forecast": {
    "pos": "n.",
    "en_def": "a report saying what the weather will be like",
    "cn_def": "預報；預測"
  },
  "pour": {
    "pos": "v.",
    "en_def": "to rain very heavily",
    "cn_def": "下大雨；傾瀉"
  },
  "soak": {
    "pos": "v.",
    "en_def": "to make something completely wet",
    "cn_def": "浸濕；濕透"
  },
  "splash": {
    "pos": "v.",
    "en_def": "to make water or mud fly through the air and land on something",
    "cn_def": "濺；潑"
  },
  "muddy": {
    "pos": "adj.",
    "en_def": "covered with soft wet earth",
    "cn_def": "泥濘的"
  },
  "slippery": {
    "pos": "adj.",
    "en_def": "wet or smooth so that it is easy to fall",
    "cn_def": "滑的"
  },
  "gloomy": {
    "pos": "adj.",
    "en_def": "dark and gray in a way that makes you feel sad",
    "cn_def": "陰沉的；陰暗的"
  },
  "chilly": {
    "pos": "adj.",
    "en_def": "cold enough to be uncomfortable",
    "cn_def": "寒冷的；涼颼颼的"
  },
  "mist": {
    "pos": "n.",
    "en_def": "a thin cloud of tiny water drops near the ground",
    "cn_def": "薄霧"
  },
  "foggy": {
    "pos": "adj.",
    "en_def": "full of thick cloud near the ground, so it is hard to see",
    "cn_def": "起霧的；多霧的"
  },
  "raindrop": {
    "pos": "n.",
    "en_def": "a single drop of rain",
    "cn_def": "雨滴"
  },
  "leak": {
    "pos": "v.",
    "en_def": "to let water come in or out through a small hole",
    "cn_def": "漏水；滲漏"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place or cover that protects you from bad weather",
    "cn_def": "遮蔽處；躲避處"
  },
  "monsoon": {
    "pos": "n.",
    "en_def": "the season of very heavy rain in South and Southeast Asia",
    "cn_def": "季風；雨季"
  },
  "rainstorm": {
    "pos": "n.",
    "en_def": "a storm with a lot of heavy rain",
    "cn_def": "暴雨"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "clean and cool, pleasant to breathe",
    "cn_def": "清新的；新鮮的"
  }
};

const EXTRA_GLOSSES = {};
