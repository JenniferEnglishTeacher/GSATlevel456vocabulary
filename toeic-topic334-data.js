// Topic 334 Quiz Data: Road 道路
// Source word list: https://www.examword.com/group-topic/road — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T334 - Road 道路",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "street",
    "pos": "n.",
    "cn_def": "街道；馬路",
    "en_def": "a public road in a town or city, usually with buildings on both sides",
    "sentence": "A: Where exactly is the new branch office, because I have a meeting with the bank manager there at ten and I don't want to be late? B: It is on Main {{BLANK}}, right next to the post office, so you can park behind the building and walk in through the side door.",
    "cn": "A：新的分行辦公室到底在哪裡？因為我十點要在那裡和銀行經理開會，不想遲到。 B：它在主【街】上，就在郵局旁邊，所以你可以把車停在大樓後面，從側門走進去。"
  },
  {
    "word": "highway",
    "pos": "n.",
    "cn_def": "公路；幹道",
    "en_def": "a main road for fast travel between cities",
    "sentence": "A: How long will it take the delivery van to bring the printed brochures from the factory to our office before the trade show starts tomorrow? B: If the driver takes the {{BLANK}} instead of the small country roads, he should arrive in about two hours, even with some evening traffic.",
    "cn": "A：送貨車要多久才能在明天商展開始前，把印好的手冊從工廠送到我們辦公室？ B：如果司機走【公路】而不是鄉間小路，就算傍晚有些車流，大約兩個小時應該就能到。"
  },
  {
    "word": "freeway",
    "pos": "n.",
    "cn_def": "高速公路",
    "en_def": "a wide road for fast traffic that has no stoplights and no tolls",
    "sentence": "A: Do you think we should leave the hotel early tomorrow morning to catch our flight, or is the airport close enough that we can relax over breakfast? B: Let's leave early, because the {{BLANK}} gets very crowded after seven o'clock when thousands of office workers drive into the city.",
    "cn": "A：你覺得我們明天早上應該早點離開飯店去趕飛機嗎？還是機場夠近，我們可以悠閒地吃早餐？ B：我們早點出發吧，因為七點以後成千上萬的上班族開車進城，【高速公路】會非常擁擠。"
  },
  {
    "word": "lane",
    "pos": "n.",
    "cn_def": "車道",
    "en_def": "one part of a road that is marked for a single line of cars",
    "sentence": "A: Why did the taxi driver keep changing his position on the road while we were rushing to the client meeting downtown this afternoon? B: He was trying to stay in the fastest {{BLANK}}, because the right side was full of buses stopping to pick up passengers near the train station.",
    "cn": "A：今天下午我們趕去市中心見客戶時，計程車司機為什麼一直變換位置？ B：他想保持在最快的【車道】上，因為右邊擠滿了在火車站附近停靠載客的公車。"
  },
  {
    "word": "intersection",
    "pos": "n.",
    "cn_def": "十字路口；交叉口",
    "en_def": "a place where two or more roads meet and cross",
    "sentence": "A: Could you give me clear instructions to the new warehouse, since my phone's map app keeps sending me the wrong way? B: Sure, drive north for about a mile, turn left at the busy {{BLANK}} with the gas station on the corner, and our gray building will be on your right.",
    "cn": "A：你可以清楚告訴我怎麼去新倉庫嗎？因為我手機的地圖一直帶我走錯路。 B：當然，往北開大約一英里，在角落有加油站的繁忙【十字路口】左轉，我們的灰色大樓就在你右手邊。"
  },
  {
    "word": "crosswalk",
    "pos": "n.",
    "cn_def": "斑馬線；行人穿越道",
    "en_def": "a marked place on a road where people can walk across safely",
    "sentence": "A: Is it safe for our summer interns to walk from the subway station to the office, since many of them are new to the city? B: Yes, but remind them to use the {{BLANK}} in front of the bakery, because cars drive very fast on that street during the morning rush.",
    "cn": "A：我們的暑期實習生從地鐵站走到辦公室安全嗎？因為他們很多人剛來這個城市。 B：安全，但要提醒他們使用麵包店前面的【斑馬線】，因為早上尖峰時段那條街上的車開得很快。"
  },
  {
    "word": "sidewalk",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "a path at the side of a street for people to walk on",
    "sentence": "A: Why did the café owner put up a small fence outside the shop this week, and will customers still be able to sit outside? B: The city told her to keep the {{BLANK}} clear for people walking by, so she moved the tables closer to the window and added a fence for safety.",
    "cn": "A：咖啡店老闆這週為什麼在店外架了一個小圍欄？客人還能坐在戶外嗎？ B：市政府要她讓【人行道】保持暢通，方便路人通行，所以她把桌子移到靠近窗戶的地方，並加了圍欄以策安全。"
  },
  {
    "word": "bridge",
    "pos": "n.",
    "cn_def": "橋；橋樑",
    "en_def": "a structure built over a river or road so people and cars can cross",
    "sentence": "A: Why are the trucks from our supplier taking a much longer way to reach the factory this month? B: The old {{BLANK}} over the river is closed for safety checks until the end of May, so the drivers have to go around the lake, which adds about forty minutes.",
    "cn": "A：為什麼我們供應商的卡車這個月要繞更遠的路才能到工廠？ B：河上那座舊【橋】為了安全檢查封閉到五月底，所以司機只好繞湖而行，大約多花四十分鐘。"
  },
  {
    "word": "tunnel",
    "pos": "n.",
    "cn_def": "隧道",
    "en_def": "a long passage under the ground or through a hill for cars or trains",
    "sentence": "A: Why did my phone call with you suddenly drop for a few minutes while you were driving back from the client's office? B: Sorry about that, I was passing through the long {{BLANK}} under the mountain, and there is usually no signal inside until you come out on the other side.",
    "cn": "A：你從客戶辦公室開車回來時，為什麼我們的電話突然斷了幾分鐘？ B：抱歉，我那時正經過山底下那條長長的【隧道】，裡面通常收不到訊號，要等出了另一頭才會恢復。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "all the cars, buses and other vehicles moving on roads",
    "sentence": "A: Why did the sales team arrive so late for the nine o'clock meeting when they left the hotel before eight? B: There was heavy {{BLANK}} near the stadium because of a big concert, so their bus moved very slowly for almost an hour before it reached our office.",
    "cn": "A：業務團隊八點前就離開飯店了，為什麼九點的會議還遲到這麼久？ B：體育場附近因為大型演唱會【交通】很壅塞，所以他們的巴士移動得非常慢，花了將近一小時才到我們辦公室。"
  },
  {
    "word": "congestion",
    "pos": "n.",
    "cn_def": "擁塞；壅塞",
    "en_def": "a situation where there are too many vehicles and they move slowly",
    "sentence": "A: What is the city planning to do about the long lines of cars near the new shopping mall every weekend? B: They will add more buses and a larger parking area, hoping to reduce the {{BLANK}} that makes shoppers wait for thirty minutes just to leave the area.",
    "cn": "A：市政府打算怎麼處理每個週末新購物中心附近大排長龍的車潮？ B：他們會增加公車班次並擴大停車場，希望減少讓購物者光是要離開就得等三十分鐘的交通【壅塞】。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "號誌；信號燈",
    "en_def": "a light that tells drivers when to stop or go",
    "sentence": "A: Why were so many cars stopped in the middle of the road near the hospital when I drove past this morning? B: The traffic {{BLANK}} at that corner stopped working after the storm last night, so a police officer had to stand there and direct the cars by hand.",
    "cn": "A：我今天早上開車經過醫院附近時，為什麼那麼多車停在路中間？ B：那個轉角的交通【號誌】在昨晚暴風雨後故障了，所以一位警察只好站在那裡用手指揮車輛。"
  },
  {
    "word": "sign",
    "pos": "n.",
    "cn_def": "標誌；告示牌",
    "en_def": "a board with words or pictures that gives information to people on a road",
    "sentence": "A: How will visitors find the parking area for the job fair, since our building has two entrances and the back gate is usually locked? B: We will put a large {{BLANK}} with an arrow at the front gate, and two staff members will stand nearby to help drivers find a space.",
    "cn": "A：參加就業博覽會的訪客要怎麼找到停車場？因為我們的大樓有兩個入口，後門通常是鎖著的。 B：我們會在前門放一個有箭頭的大型【標誌】，另外還會有兩名員工站在附近幫駕駛找車位。"
  },
  {
    "word": "speed limit",
    "pos": "n.phr.",
    "cn_def": "速限",
    "en_def": "the fastest speed that vehicles are allowed to go on a road",
    "sentence": "A: Why did the delivery company send a letter to all of its drivers this week, and is it about the new trucks? B: No, it reminds them to follow the {{BLANK}} near schools and hospitals, because two drivers were stopped by the police last month for driving too fast.",
    "cn": "A：貨運公司這週為什麼寄信給所有司機？是關於新卡車的事嗎？ B：不是，信裡提醒他們在學校和醫院附近要遵守【速限】，因為上個月有兩名司機開太快被警察攔下。"
  },
  {
    "word": "pavement",
    "pos": "n.",
    "cn_def": "路面；柏油路面",
    "en_def": "the hard surface of a road",
    "sentence": "A: Why is the parking lot behind our office closed this weekend, and where should employees leave their cars on Monday? B: Workers are putting new {{BLANK}} on the whole lot because the old surface had many holes, so please park in the public garage across the street until Tuesday.",
    "cn": "A：我們辦公室後面的停車場這個週末為什麼關閉？員工星期一要把車停在哪裡？ B：工人正在為整個停車場鋪設新的【路面】，因為舊的表面有很多坑洞，所以星期二之前請停在對街的公共停車場。"
  },
  {
    "word": "shoulder",
    "pos": "n.",
    "cn_def": "路肩",
    "en_def": "the strip of ground at the edge of a highway where cars can stop in an emergency",
    "sentence": "A: What should our delivery drivers do if one of the company trucks has a flat tire on the freeway during a long trip? B: They should turn on the warning lights, pull over onto the {{BLANK}} as safely as possible, and then call the office so we can send a repair service.",
    "cn": "A：如果公司的卡車在長途行駛中於高速公路上爆胎，送貨司機該怎麼辦？ B：他們應該打開警示燈，盡量安全地把車停到【路肩】上，然後打電話給辦公室，讓我們派修車服務過去。"
  },
  {
    "word": "roundabout",
    "pos": "n.",
    "cn_def": "圓環",
    "en_def": "a round place where several roads meet and cars drive around in a circle",
    "sentence": "A: Do I need to turn left at the traffic lights to reach the convention center, or is there an easier way from the hotel? B: There are no lights on that road anymore, so just go around the {{BLANK}} and take the third exit, which leads straight to the main parking area.",
    "cn": "A：我要在紅綠燈左轉才能到會議中心嗎？還是從飯店有更簡單的走法？ B：那條路已經沒有紅綠燈了，所以你只要繞過【圓環】，從第三個出口出去，就會直接通到主要停車場。"
  },
  {
    "word": "curve",
    "pos": "n.",
    "cn_def": "彎道；彎曲處",
    "en_def": "a bend in a road",
    "sentence": "A: Why did the city put up new yellow warning lights on the mountain road leading to the company retreat center? B: There is a sharp {{BLANK}} just before the entrance, and several drivers have missed it at night, so the lights help them slow down in time.",
    "cn": "A：市政府為什麼在通往公司度假中心的山路上裝設新的黃色警示燈？ B：入口前有一個急【彎道】，好幾位駕駛晚上都沒注意到，所以這些燈能幫助他們及時減速。"
  },
  {
    "word": "straight",
    "pos": "adj.",
    "cn_def": "筆直的；直的",
    "en_def": "going in one direction without bending",
    "sentence": "A: Is the drive from the airport to the factory difficult for visitors who have never been to this part of the country before? B: Not at all, the road is long and {{BLANK}} for almost thirty miles, so they only need to make one turn when they see the factory sign.",
    "cn": "A：從機場開車到工廠，對第一次來這個地區的訪客來說困難嗎？ B：一點也不，那條路又長又【筆直】，將近三十英里都不用轉彎，所以他們只需要在看到工廠標誌時轉一次彎。"
  },
  {
    "word": "narrow",
    "pos": "adj.",
    "cn_def": "狹窄的",
    "en_def": "small from one side to the other; not wide",
    "sentence": "A: Can the moving company bring a large truck to our new office in the old part of town on Saturday morning? B: Probably not, because the streets there are very {{BLANK}} and full of parked cars, so they will send two smaller vans to carry the desks and computers.",
    "cn": "A：搬家公司星期六早上可以開大卡車到我們位於舊城區的新辦公室嗎？ B：可能不行，因為那裡的街道非常【狹窄】，又停滿了車，所以他們會派兩輛小貨車來載桌子和電腦。"
  },
  {
    "word": "wide",
    "pos": "adj.",
    "cn_def": "寬闊的；寬的",
    "en_def": "large from one side to the other",
    "sentence": "A: Why did the company choose the new location near the harbor for its main warehouse instead of the cheaper building downtown? B: The roads near the harbor are {{BLANK}} enough for large container trucks to turn easily, and drivers can avoid the heavy city traffic completely.",
    "cn": "A：公司為什麼選擇港口附近的新地點作為主要倉庫，而不是市中心較便宜的那棟大樓？ B：港口附近的道路夠【寬】，大型貨櫃車可以輕鬆轉彎，司機也能完全避開市區的繁忙交通。"
  },
  {
    "word": "smooth",
    "pos": "adj.",
    "cn_def": "平坦的；平順的",
    "en_def": "flat and even, with no holes or bumps",
    "sentence": "A: How was your bus trip to the branch office last week, since the old road always made you feel sick? B: It was much better this time, because the city finished repairing the road, and the surface is so {{BLANK}} now that I could even read reports on my laptop.",
    "cn": "A：你上週搭巴士去分公司的行程如何？因為以前那條舊路總是讓你不舒服。 B：這次好多了，因為市政府把道路修好了，現在路面非常【平順】，我甚至可以在筆電上看報告。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "崎嶇的；不平的",
    "en_def": "not flat or even; full of stones or holes",
    "sentence": "A: Should we rent a regular car or a larger vehicle for the site visit to the new mine in the hills next month? B: A larger vehicle is better, because the last part of the road is very {{BLANK}} and covered with stones, and a small car could easily get damaged there.",
    "cn": "A：下個月去山區新礦場實地考察，我們應該租一般的車還是大型車？ B：大型車比較好，因為最後一段路非常【崎嶇】，滿是石頭，小車在那裡很容易受損。"
  },
  {
    "word": "slippery",
    "pos": "adj.",
    "cn_def": "濕滑的",
    "en_def": "wet or smooth so that it is easy to slide and fall",
    "sentence": "A: Why did the manager send a message telling everyone to drive carefully on the way home this evening? B: It has been raining all afternoon, and the roads near the industrial park become very {{BLANK}} when it is wet, so several cars slid off last winter.",
    "cn": "A：經理為什麼傳訊息叫大家今晚回家路上小心開車？ B：整個下午都在下雨，工業區附近的道路一濕就會非常【濕滑】，去年冬天就有好幾輛車滑出路面。"
  },
  {
    "word": "bumpy",
    "pos": "adj.",
    "cn_def": "顛簸的；凹凸不平的",
    "en_def": "having many raised parts or holes that make a ride uncomfortable",
    "sentence": "A: Why did some of the glass bottles in our last delivery to the restaurant arrive broken, even though they were packed carefully? B: The driver had to use an old farm road because of the accident on the highway, and the ride was so {{BLANK}} that some boxes fell over.",
    "cn": "A：我們上次送到餐廳的玻璃瓶即使包裝得很仔細，為什麼還有一些破掉了？ B：因為公路上發生事故，司機只好走一條舊農路，路況非常【顛簸】，有些箱子就倒了。"
  },
  {
    "word": "construction",
    "pos": "n.",
    "cn_def": "施工；建設",
    "en_def": "the work of building or repairing roads or buildings",
    "sentence": "A: Why is the main entrance to the office park closed, and how are the staff supposed to get to work this week? B: There is road {{BLANK}} in front of the gate until Friday, so everyone should use the back entrance on Oak Street and allow ten extra minutes.",
    "cn": "A：辦公園區的正門為什麼關閉了？員工這週要怎麼來上班？ B：大門前面在進行道路【施工】，一直到星期五，所以大家應該改走橡樹街的後門，並多預留十分鐘。"
  },
  {
    "word": "detour",
    "pos": "n.",
    "cn_def": "繞道；改道",
    "en_def": "a different, longer way you take because the usual road is closed",
    "sentence": "A: Why did the airport shuttle take almost an hour today when the trip usually takes only twenty minutes? B: The main road was closed for a marathon, so the driver had to take a {{BLANK}} through the suburbs, and many other cars were doing the same thing.",
    "cn": "A：機場接駁車通常只要二十分鐘，今天為什麼開了將近一小時？ B：主要道路因為馬拉松比賽封閉，所以司機只好經由郊區【繞道】，而且很多其他車也都這樣做。"
  },
  {
    "word": "direction",
    "pos": "n.",
    "cn_def": "方向",
    "en_def": "the way that someone or something is moving or facing",
    "sentence": "A: Are you sure this is the right way to the client's factory, because we have been driving for twenty minutes and I can't see any signs? B: Oh no, I think we are going in the wrong {{BLANK}}, so let me check the map and turn around at the next gas station.",
    "cn": "A：你確定這是去客戶工廠的路嗎？我們已經開了二十分鐘，卻看不到任何標誌。 B：糟了，我想我們走錯【方向】了，讓我查一下地圖，在下一個加油站掉頭。"
  },
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "the place that someone is going to",
    "sentence": "A: How do the drivers know where to take each package when they leave the warehouse early in the morning? B: Every box has a label showing its final {{BLANK}}, and the system plans the order of stops so the drivers can finish all the deliveries before five.",
    "cn": "A：司機一大早離開倉庫時，怎麼知道每個包裹要送到哪裡？ B：每個箱子上都有標籤標示最終【目的地】，系統會規劃停靠順序，讓司機能在五點前完成所有配送。"
  },
  {
    "word": "journey",
    "pos": "n.",
    "cn_def": "旅程；行程",
    "en_def": "a trip from one place to another, usually a long one",
    "sentence": "A: How long is the trip from the head office to the new factory in the south, and should we book a hotel for the night? B: The {{BLANK}} takes about six hours by car, so it would be better to stay one night and visit the factory the next morning when everyone is rested.",
    "cn": "A：從總公司到南部新工廠要多久？我們應該訂一晚的飯店嗎？ B：這趟【旅程】開車大約要六個小時，所以最好住一晚，等大家休息夠了，隔天早上再參觀工廠。"
  },
  {
    "word": "route",
    "pos": "n.",
    "cn_def": "路線",
    "en_def": "the way you follow to get from one place to another",
    "sentence": "A: Why did the delivery company change the drivers' daily plan after the new bridge opened last month? B: The new {{BLANK}} over the river is much shorter, so the drivers can now reach the shopping mall in half the time and make more deliveries each day.",
    "cn": "A：上個月新橋通車後，貨運公司為什麼改變了司機的每日計畫？ B：跨越河流的新【路線】短得多，所以司機現在只要一半的時間就能到購物中心，每天能多送幾趟貨。"
  },
  {
    "word": "travel",
    "pos": "v.",
    "cn_def": "旅行；移動；行進",
    "en_def": "to go from one place to another, especially over a long distance",
    "sentence": "A: Is it true that the new sales manager has to visit clients in three different cities every week? B: Yes, she will {{BLANK}} by train most of the time, because it is faster than driving and she can answer emails on her laptop during the trip.",
    "cn": "A：新來的業務經理每週都要去三個不同城市拜訪客戶，是真的嗎？ B：是的，她大部分時間會搭火車【移動】，因為比開車快，而且她可以在路上用筆電回覆電子郵件。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between your home and your workplace",
    "sentence": "A: Why did Daniel move to an apartment close to the office last month when he loved living near the beach? B: He used to {{BLANK}} for almost two hours each day by bus and train, and he wanted more time in the evening to spend with his family.",
    "cn": "A：Daniel 很喜歡住在海邊，為什麼上個月搬到辦公室附近的公寓？ B：他以前每天要搭公車和火車【通勤】將近兩個小時，他希望晚上能有更多時間陪家人。"
  },
  {
    "word": "pedestrian",
    "pos": "n.",
    "cn_def": "行人",
    "en_def": "a person who is walking, especially in a town or city",
    "sentence": "A: Why has the city closed the main shopping street to cars every Sunday afternoon starting this month? B: They want to make it safer for every {{BLANK}} who visits the market, and the store owners hope the change will bring more families to the area.",
    "cn": "A：市政府為什麼從這個月開始每週日下午禁止汽車進入主要購物街？ B：他們想讓每位逛市集的【行人】更安全，店家也希望這項改變能吸引更多家庭來到這一帶。"
  }
];

const MCQS = [
  {
    "q": "The new office is on a quiet _____ lined with trees. Visitors can park in front of the building for free.",
    "options": [
      "street",
      "tunnel",
      "shoulder",
      "curve"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Drivers should take the _____ to reach the coastal factory quickly. The trip between the two cities takes about ninety minutes.",
    "options": [
      "crosswalk",
      "sidewalk",
      "highway",
      "pavement"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Please stay in the left _____ when you approach the airport exit. The right side is reserved for buses and taxis only.",
    "options": [
      "destination",
      "lane",
      "journey",
      "pedestrian"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Our store is located at the _____ of Fifth Avenue and Pine Street. Look for the green awning on the corner.",
    "options": [
      "detour",
      "congestion",
      "shoulder",
      "intersection"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Children from the nearby school must use the _____ when they go home. A guard stops the cars during busy hours.",
    "options": [
      "highway",
      "freeway",
      "crosswalk",
      "roundabout"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The café placed several tables on the wide _____ outside its entrance. Customers enjoy drinking coffee there on sunny afternoons.",
    "options": [
      "sidewalk",
      "tunnel",
      "signal",
      "lane"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A new _____ will connect the two sides of the river next year. It will shorten the drive to the industrial park.",
    "options": [
      "sign",
      "curve",
      "direction",
      "bridge"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The train passes through a long _____ under the mountain. Passengers may lose their phone connection for several minutes.",
    "options": [
      "sidewalk",
      "tunnel",
      "pavement",
      "street"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Employees are advised to leave early on Friday afternoon. _____ around the stadium will be heavy because of the football game.",
    "options": [
      "traffic",
      "shoulder",
      "destination",
      "bridge"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The city introduced a new bus line to ease _____ in the downtown area. Fewer cars now enter the center during rush hour.",
    "options": [
      "pedestrian",
      "journey",
      "congestion",
      "intersection"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Drivers must stop when the traffic _____ turns red. Cameras at this corner record every car that ignores it.",
    "options": [
      "route",
      "signal",
      "shoulder",
      "detour"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "A large _____ at the entrance shows visitors where to park. It also lists the opening hours of the showroom.",
    "options": [
      "lane",
      "tunnel",
      "commute",
      "sign"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The _____ near the elementary school is twenty-five miles per hour. Police officers check drivers' speed there every morning.",
    "options": [
      "roundabout",
      "crosswalk",
      "speed limit",
      "intersection"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "If your car breaks down on the freeway, move onto the _____ right away. Then turn on your warning lights and call for help.",
    "options": [
      "shoulder",
      "direction",
      "journey",
      "signal"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Take the second exit at the _____ to reach the hotel. The entrance is about two hundred meters further on the left.",
    "options": [
      "pedestrian",
      "destination",
      "congestion",
      "roundabout"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The bus slowed down before a sharp _____ in the mountain road. Several passengers held on to their seats tightly.",
    "options": [
      "sidewalk",
      "curve",
      "street",
      "sign"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The road from the port to the warehouse is long and _____. Drivers rarely need to turn for the first twenty miles.",
    "options": [
      "straight",
      "slippery",
      "bumpy",
      "narrow"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The lanes in the old town are too _____ for large trucks. The moving company will send two small vans instead.",
    "options": [
      "smooth",
      "straight",
      "narrow",
      "slippery"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new avenue is _____ enough for four lanes of traffic. It also has a separate path for bicycles.",
    "options": [
      "rough",
      "wide",
      "bumpy",
      "slippery"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "After the city repaired the road, the ride became very _____. Passengers can now drink coffee on the bus without spilling it.",
    "options": [
      "rough",
      "narrow",
      "bumpy",
      "smooth"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Be careful when driving after the storm tonight. Wet leaves make the roads near the park very _____.",
    "options": [
      "straight",
      "wide",
      "slippery",
      "narrow"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Road _____ will close Elm Street for three weeks. Workers are replacing the old water pipes under the surface.",
    "options": [
      "construction",
      "direction",
      "congestion",
      "journey"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The main road is closed because of a flood. Drivers must follow the _____ signs through the nearby village.",
    "options": [
      "shoulder",
      "sidewalk",
      "pavement",
      "detour"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Please check your map before you leave the hotel. The conference center is in the opposite _____ from the airport.",
    "options": [
      "construction",
      "direction",
      "bridge",
      "lane"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "All packages must be labeled with their final _____ before loading. This helps drivers plan their stops efficiently.",
    "options": [
      "destination",
      "curve",
      "intersection",
      "tunnel"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The sales director made a long _____ to visit clients in five cities. She returned to the office after two weeks.",
    "options": [
      "signal",
      "sign",
      "journey",
      "crosswalk"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The delivery company found a faster _____ to the shopping mall. Its drivers now save about twenty minutes on each trip.",
    "options": [
      "pedestrian",
      "route",
      "congestion",
      "shoulder"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Many employees _____ to the office by subway every day. The company offers a monthly pass at a discount.",
    "options": [
      "detour",
      "signal",
      "sign",
      "commute"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Our engineers often _____ abroad to meet suppliers. The company books their flights and hotels through an agency.",
    "options": [
      "commute",
      "signal",
      "travel",
      "detour"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The main square is now closed to cars on weekends. Every _____ can walk safely between the shops and the market.",
    "options": [
      "pedestrian",
      "highway",
      "freeway",
      "roundabout"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "street": {
    "pos": "n.",
    "en_def": "a public road in a town or city, usually with buildings on both sides",
    "cn_def": "街道；馬路"
  },
  "highway": {
    "pos": "n.",
    "en_def": "a main road for fast travel between cities",
    "cn_def": "公路；幹道"
  },
  "freeway": {
    "pos": "n.",
    "en_def": "a wide road for fast traffic that has no stoplights and no tolls",
    "cn_def": "高速公路"
  },
  "lane": {
    "pos": "n.",
    "en_def": "one part of a road that is marked for a single line of cars",
    "cn_def": "車道"
  },
  "intersection": {
    "pos": "n.",
    "en_def": "a place where two or more roads meet and cross",
    "cn_def": "十字路口；交叉口"
  },
  "crosswalk": {
    "pos": "n.",
    "en_def": "a marked place on a road where people can walk across safely",
    "cn_def": "斑馬線；行人穿越道"
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path at the side of a street for people to walk on",
    "cn_def": "人行道"
  },
  "bridge": {
    "pos": "n.",
    "en_def": "a structure built over a river or road so people and cars can cross",
    "cn_def": "橋；橋樑"
  },
  "tunnel": {
    "pos": "n.",
    "en_def": "a long passage under the ground or through a hill for cars or trains",
    "cn_def": "隧道"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "all the cars, buses and other vehicles moving on roads",
    "cn_def": "交通；車流"
  },
  "congestion": {
    "pos": "n.",
    "en_def": "a situation where there are too many vehicles and they move slowly",
    "cn_def": "擁塞；壅塞"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a light that tells drivers when to stop or go",
    "cn_def": "號誌；信號燈"
  },
  "sign": {
    "pos": "n.",
    "en_def": "a board with words or pictures that gives information to people on a road",
    "cn_def": "標誌；告示牌"
  },
  "speed limit": {
    "pos": "n.phr.",
    "en_def": "the fastest speed that vehicles are allowed to go on a road",
    "cn_def": "速限"
  },
  "pavement": {
    "pos": "n.",
    "en_def": "the hard surface of a road",
    "cn_def": "路面；柏油路面"
  },
  "shoulder": {
    "pos": "n.",
    "en_def": "the strip of ground at the edge of a highway where cars can stop in an emergency",
    "cn_def": "路肩"
  },
  "roundabout": {
    "pos": "n.",
    "en_def": "a round place where several roads meet and cars drive around in a circle",
    "cn_def": "圓環"
  },
  "curve": {
    "pos": "n.",
    "en_def": "a bend in a road",
    "cn_def": "彎道；彎曲處"
  },
  "straight": {
    "pos": "adj.",
    "en_def": "going in one direction without bending",
    "cn_def": "筆直的；直的"
  },
  "narrow": {
    "pos": "adj.",
    "en_def": "small from one side to the other; not wide",
    "cn_def": "狹窄的"
  },
  "wide": {
    "pos": "adj.",
    "en_def": "large from one side to the other",
    "cn_def": "寬闊的；寬的"
  },
  "smooth": {
    "pos": "adj.",
    "en_def": "flat and even, with no holes or bumps",
    "cn_def": "平坦的；平順的"
  },
  "rough": {
    "pos": "adj.",
    "en_def": "not flat or even; full of stones or holes",
    "cn_def": "崎嶇的；不平的"
  },
  "slippery": {
    "pos": "adj.",
    "en_def": "wet or smooth so that it is easy to slide and fall",
    "cn_def": "濕滑的"
  },
  "bumpy": {
    "pos": "adj.",
    "en_def": "having many raised parts or holes that make a ride uncomfortable",
    "cn_def": "顛簸的；凹凸不平的"
  },
  "construction": {
    "pos": "n.",
    "en_def": "the work of building or repairing roads or buildings",
    "cn_def": "施工；建設"
  },
  "detour": {
    "pos": "n.",
    "en_def": "a different, longer way you take because the usual road is closed",
    "cn_def": "繞道；改道"
  },
  "direction": {
    "pos": "n.",
    "en_def": "the way that someone or something is moving or facing",
    "cn_def": "方向"
  },
  "destination": {
    "pos": "n.",
    "en_def": "the place that someone is going to",
    "cn_def": "目的地"
  },
  "journey": {
    "pos": "n.",
    "en_def": "a trip from one place to another, usually a long one",
    "cn_def": "旅程；行程"
  },
  "route": {
    "pos": "n.",
    "en_def": "the way you follow to get from one place to another",
    "cn_def": "路線"
  },
  "travel": {
    "pos": "v.",
    "en_def": "to go from one place to another, especially over a long distance",
    "cn_def": "旅行；移動；行進"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between your home and your workplace",
    "cn_def": "通勤"
  },
  "pedestrian": {
    "pos": "n.",
    "en_def": "a person who is walking, especially in a town or city",
    "cn_def": "行人"
  }
};

const EXTRA_GLOSSES = {};
