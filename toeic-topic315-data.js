// Topic 315 Quiz Data: Public Facility 公共設施
// Source word list: https://www.examword.com/group-topic/public-facility — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T315 - Public Facility 公共設施",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎建設",
    "en_def": "the basic systems a city needs, such as roads, power and water",
    "sentence": "A: Why did the new electronics company decide to build its main factory in this small town instead of in the capital city? B: The local government spent years improving the {{BLANK}} here, so the roads, power lines and internet connections are now reliable, and the land is much cheaper too.",
    "cn": "A：為什麼那家新的電子公司決定把主要工廠蓋在這個小鎮，而不是首都？ B：當地政府花了好幾年改善這裡的【基礎建設】，所以現在道路、電線和網路連線都很可靠，而且土地也便宜很多。"
  },
  {
    "word": "amenity",
    "pos": "n.",
    "cn_def": "便利設施",
    "en_def": "a useful feature or service that makes a place pleasant to use",
    "sentence": "A: Our team is staying at the hotel near the convention hall next week, so do you know whether it has a gym or a business center? B: Yes, the most popular {{BLANK}} there is the free shuttle bus, but guests can also use the fitness room and the meeting rooms at no extra cost.",
    "cn": "A：我們團隊下週要住在會議廳附近的那家飯店，你知道那裡有健身房或商務中心嗎？ B：有，那裡最受歡迎的【便利設施】是免費接駁車，不過房客也可以免費使用健身房和會議室。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a building where people can read or borrow books",
    "sentence": "A: Where can I find a quiet place to prepare for my accounting exam, since my apartment is so noisy during the weekend? B: The public {{BLANK}} on Main Street has private study rooms that you can reserve online for free, and it stays open until nine o'clock every night.",
    "cn": "A：我的公寓週末很吵，哪裡可以找到安靜的地方準備會計考試？ B：主街上的公共【圖書館】有可以免費上網預約的個人自習室，而且每天晚上都開到九點。"
  },
  {
    "word": "hospital",
    "pos": "n.",
    "cn_def": "醫院",
    "en_def": "a large building where sick or hurt people get medical care",
    "sentence": "A: Why wasn't Mr. Chen at the sales meeting this morning, and will he be back in the office before the client visit on Friday? B: He hurt his back while moving boxes yesterday, so he went to the {{BLANK}} for some tests, but the doctor said he should be able to return by Thursday.",
    "cn": "A：陳先生今天早上為什麼沒來參加業務會議？他週五客戶來訪之前會回辦公室嗎？ B：他昨天搬箱子時傷到了背，所以去【醫院】做了一些檢查，不過醫生說他應該週四就能回來上班。"
  },
  {
    "word": "clinic",
    "pos": "n.",
    "cn_def": "診所",
    "en_def": "a small place where doctors or nurses see patients who do not stay overnight",
    "sentence": "A: Is there anywhere near the office where employees can get a flu shot without taking a whole day off work? B: There's a small {{BLANK}} on the second floor of the shopping mall across the street, and the nurses there can see you during your lunch break if you book ahead.",
    "cn": "A：辦公室附近有沒有地方可以讓員工打流感疫苗，又不用請一整天假？ B：對街購物中心的二樓有一間小【診所】，如果你事先預約，那裡的護理師可以在你午休時間幫你看診。"
  },
  {
    "word": "school",
    "pos": "n.",
    "cn_def": "學校",
    "en_def": "a place where children go to learn",
    "sentence": "A: Why are you leaving the office so early today when we still have the quarterly report to finish? B: My daughter's {{BLANK}} is holding a parent-teacher meeting at four o'clock, so I promised to attend, but I will log in from home tonight and finish my part of the report.",
    "cn": "A：我們還有季報要完成，你今天為什麼這麼早離開辦公室？ B：我女兒的【學校】四點要開家長會，我答應要出席，不過我今晚會在家上線，把我負責的報告部分完成。"
  },
  {
    "word": "park",
    "pos": "n.",
    "cn_def": "公園",
    "en_def": "a public area with grass and trees where people can walk, play or relax",
    "sentence": "A: Where should we hold the company picnic this year, since the restaurant we used last time was too small for everyone? B: The city {{BLANK}} next to the river has a large lawn, picnic tables and clean restrooms, and we only need to apply for a free permit two weeks in advance.",
    "cn": "A：今年公司野餐要辦在哪裡？上次那家餐廳對所有人來說太小了。 B：河邊的市立【公園】有一大片草地、野餐桌和乾淨的廁所，而且我們只需要提前兩週申請免費許可就好。"
  },
  {
    "word": "playground",
    "pos": "n.",
    "cn_def": "遊樂場；操場",
    "en_def": "an outdoor area with swings and slides where children play",
    "sentence": "A: Do you think the new apartment building near the train station is a good choice for families with young children? B: Yes, there's a safe {{BLANK}} with slides and swings right behind the building, so parents can watch their kids play from the windows while they cook dinner.",
    "cn": "A：你覺得火車站附近那棟新公寓適合有小孩的家庭嗎？ B：適合，大樓後面就有一座有溜滑梯和鞦韆的安全【遊樂場】，所以父母煮晚餐時可以從窗戶看著孩子玩。"
  },
  {
    "word": "stadium",
    "pos": "n.",
    "cn_def": "體育場",
    "en_def": "a large place with seats around a field for sports or concerts",
    "sentence": "A: Why are so many people wearing team shirts on the train this evening, and why is it so crowded? B: There's a big baseball game at the new {{BLANK}} tonight, and about forty thousand fans are expected, so the train company has added extra trains until midnight.",
    "cn": "A：今晚火車上為什麼有這麼多人穿著球隊上衣，而且這麼擁擠？ B：今晚新的【體育場】有一場重要的棒球比賽，預計會有大約四萬名球迷，所以鐵路公司加開了班次到午夜。"
  },
  {
    "word": "museum",
    "pos": "n.",
    "cn_def": "博物館",
    "en_def": "a building where important or interesting objects are shown to the public",
    "sentence": "A: What can we do with the overseas clients on Saturday afternoon after the factory tour is finished? B: We could take them to the history {{BLANK}} downtown, because it has an excellent exhibition about local tea culture, and the guided tours are available in English and Japanese.",
    "cn": "A：週六下午工廠參觀結束後，我們可以帶海外客戶做什麼？ B：我們可以帶他們去市中心的歷史【博物館】，因為那裡有一個很棒的在地茶文化展覽，而且有英文和日文的導覽。"
  },
  {
    "word": "theater",
    "pos": "n.",
    "cn_def": "劇院",
    "en_def": "a building where people watch plays, shows or concerts",
    "sentence": "A: Have you decided how to celebrate the end of the busy season with the marketing team next month? B: I booked twenty tickets for a musical at the new {{BLANK}} near city hall, and after the show we will have dinner at the Italian restaurant across the street.",
    "cn": "A：你決定下個月要怎麼和行銷團隊慶祝旺季結束了嗎？ B：我在市政府附近的新【劇院】訂了二十張音樂劇的票，看完表演後我們會去對街的義大利餐廳吃晚餐。"
  },
  {
    "word": "community center",
    "pos": "n.phr.",
    "cn_def": "社區活動中心",
    "en_def": "a public building where local people meet and join classes or activities",
    "sentence": "A: Where are the free computer classes for older residents being held, since my father would like to join one? B: They take place at the {{BLANK}} on Park Road every Tuesday and Thursday morning, and volunteers from local companies teach people how to send emails and pay bills online.",
    "cn": "A：給年長居民的免費電腦課在哪裡上？我爸爸想參加。 B：課程每週二和週四早上在公園路的【社區活動中心】上，由當地公司的志工教大家怎麼寄電子郵件和上網繳費。"
  },
  {
    "word": "swimming pool",
    "pos": "n.phr.",
    "cn_def": "游泳池",
    "en_def": "a large area of water built for people to swim in",
    "sentence": "A: Why is the hotel offering us a discount on our rooms for the conference next month? B: The indoor {{BLANK}} will be closed for repairs during that week, so guests won't be able to swim, and the manager wants to make up for the inconvenience with a lower price.",
    "cn": "A：為什麼飯店要給我們下個月開會的房間打折？ B：那一週室內【游泳池】會因為維修而關閉，所以房客無法游泳，經理想用比較低的價格來彌補這個不便。"
  },
  {
    "word": "gymnasium",
    "pos": "n.",
    "cn_def": "體育館",
    "en_def": "a large indoor room or building for sports and exercise",
    "sentence": "A: Where will the company hold its annual sports day if it rains again this year like it did last October? B: We have reserved the school {{BLANK}} next door as a backup, because it is large enough for basketball and volleyball games, and it has changing rooms and showers.",
    "cn": "A：如果今年又像去年十月那樣下雨，公司的年度運動會要在哪裡舉辦？ B：我們已經預約了隔壁學校的【體育館】作為備案，因為它大到可以打籃球和排球，而且有更衣室和淋浴間。"
  },
  {
    "word": "restroom",
    "pos": "n.",
    "cn_def": "洗手間；廁所",
    "en_def": "a room with toilets in a public building",
    "sentence": "A: Excuse me, I'm here for the job interview at ten, but I'm a little early, so is there somewhere I can wash my hands? B: Sure, the {{BLANK}} is at the end of the hallway on the left, next to the elevators, and you can wait in the lobby when you are finished.",
    "cn": "A：不好意思，我是來參加十點面試的，但我早到了一點，有地方可以洗手嗎？ B：當然，【洗手間】在走廊盡頭左邊、電梯旁邊，你用完之後可以在大廳等候。"
  },
  {
    "word": "transportation",
    "pos": "n.",
    "cn_def": "交通運輸",
    "en_def": "ways of moving people or goods from one place to another",
    "sentence": "A: Is it easy to get to the new office park every day if I don't own a car or a motorcycle? B: Yes, public {{BLANK}} in that area is very good, because there is a subway station nearby and several buses stop right outside the main entrance every ten minutes.",
    "cn": "A：如果我沒有汽車或機車，每天去新的辦公園區方便嗎？ B：方便，那一帶的大眾【交通運輸】很好，附近有捷運站，而且每十分鐘就有好幾班公車停在正門外。"
  },
  {
    "word": "subway",
    "pos": "n.",
    "cn_def": "地鐵；捷運",
    "en_def": "an underground train system in a city",
    "sentence": "A: What's the fastest way to get from the airport to our head office during rush hour on a weekday? B: Take the {{BLANK}} instead of a taxi, because the roads are always crowded in the morning, and the train goes directly to the station under our building in about thirty minutes.",
    "cn": "A：平日尖峰時段從機場到總公司最快的方法是什麼？ B：搭【捷運】而不要搭計程車，因為早上的道路總是很擁擠，而且列車大約三十分鐘就會直達我們大樓底下的車站。"
  },
  {
    "word": "bus station",
    "pos": "n.phr.",
    "cn_def": "公車站；客運站",
    "en_def": "a place where many buses start and end their trips",
    "sentence": "A: How will the visitors from the branch office in Tainan get here, since they told me they are not driving? B: They are taking a long-distance coach, so I will meet them at the {{BLANK}} downtown at eleven and drive them to the office in time for lunch.",
    "cn": "A：台南分公司的訪客要怎麼過來？他們跟我說不會開車。 B：他們搭長途客運，所以我十一點會去市中心的【客運站】接他們，然後開車載他們到公司，趕上午餐。"
  },
  {
    "word": "airport",
    "pos": "n.",
    "cn_def": "機場",
    "en_def": "a place where planes take off and land",
    "sentence": "A: What time should I leave the hotel tomorrow morning if my flight to Singapore departs at nine thirty? B: You should get to the {{BLANK}} at least two hours early, because the security lines are long on Mondays, so I suggest that you take a taxi at about six fifteen.",
    "cn": "A：如果我飛往新加坡的班機明天早上九點半起飛，我應該幾點離開飯店？ B：你應該至少提早兩小時到【機場】，因為週一的安檢隊伍很長，所以我建議你大約六點十五分搭計程車。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修；保養",
    "en_def": "the work of keeping buildings or machines in good condition",
    "sentence": "A: Why are the elevators in our building going to be stopped this Saturday morning from eight until noon? B: The building manager has arranged regular {{BLANK}} for all four elevators, so the technicians will check the cables and doors, and tenants will have to use the stairs during that time.",
    "cn": "A：我們大樓的電梯這週六早上八點到中午為什麼要停用？ B：大樓管理員安排了四部電梯的定期【維修保養】，技師會檢查纜線和門，所以那段時間住戶必須走樓梯。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "方便進入的；無障礙的",
    "en_def": "easy to reach, enter or use, also for people in wheelchairs",
    "sentence": "A: Is the new conference center suitable for our guest speaker, who uses a wheelchair and travels with an assistant? B: Yes, the whole building is fully {{BLANK}}, with ramps at every entrance, wide elevators and special restrooms, so she will be able to move around easily on her own.",
    "cn": "A：新的會議中心適合我們那位坐輪椅、和助理一起出行的演講嘉賓嗎？ B：適合，整棟建築都是完全【無障礙】的，每個入口都有斜坡，有寬敞的電梯和專用廁所，所以她可以輕鬆地自己行動。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的；便利的",
    "en_def": "easy to use or reach; saving time and trouble",
    "sentence": "A: Why did you choose the apartment near the night market when the one by the river was bigger and quieter? B: This one is more {{BLANK}} for me, because it is only five minutes from the subway station, and there are supermarkets, banks and clinics all within walking distance.",
    "cn": "A：河邊那間公寓比較大也比較安靜，你為什麼選夜市附近這間？ B：這間對我來說比較【方便】，因為離捷運站只要五分鐘，而且超市、銀行和診所都在走路就能到的距離。"
  },
  {
    "word": "renovate",
    "pos": "v.",
    "cn_def": "翻修；整修",
    "en_def": "to repair and improve an old building",
    "sentence": "A: Why has the old train station downtown been closed to the public since the beginning of the summer? B: The city decided to {{BLANK}} it completely, so workers are repairing the roof, adding new ticket machines and turning the waiting hall into a bright space with shops and cafés.",
    "cn": "A：市中心的舊火車站為什麼從夏天開始就不對外開放？ B：市政府決定把它完全【翻修】，所以工人正在修理屋頂、增設新的售票機，並把候車大廳改造成有商店和咖啡廳的明亮空間。"
  },
  {
    "word": "construct",
    "pos": "v.",
    "cn_def": "建造；興建",
    "en_def": "to build something such as a building, road or bridge",
    "sentence": "A: What is the government planning to do with the empty land beside the highway that has been unused for years? B: They intend to {{BLANK}} a new sports center there, with an indoor pool and tennis courts, and the project should create about two hundred jobs for local workers over three years.",
    "cn": "A：政府打算怎麼處理高速公路旁那塊空置多年的土地？ B：他們打算在那裡【興建】一座新的運動中心，裡面有室內泳池和網球場，這項工程在三年內應該能為當地勞工創造大約兩百個工作機會。"
  },
  {
    "word": "utility",
    "pos": "n.",
    "cn_def": "公用事業（水電瓦斯）",
    "en_def": "a basic public service such as electricity, gas or water",
    "sentence": "A: Is the monthly rent for the office space we visited yesterday the only cost we need to think about? B: Not exactly, because the landlord said every {{BLANK}}, such as water, electricity and gas, is charged separately, so we should add about eight thousand dollars to our monthly budget.",
    "cn": "A：我們昨天看的那間辦公室，每月租金是唯一需要考慮的費用嗎？ B：不完全是，因為房東說每一項【公用事業費用】，例如水、電和瓦斯，都是另外計費的，所以我們每月預算應該再加大約八千元。"
  },
  {
    "word": "sanitation",
    "pos": "n.",
    "cn_def": "環境衛生；公共衛生",
    "en_def": "the systems that keep places clean, such as removing trash and dirty water",
    "sentence": "A: Why did the health inspectors visit the food court at the train station yesterday afternoon? B: Several customers complained about the trash and dirty water near the kitchens, so the inspectors checked the {{BLANK}} there and told the managers to improve their cleaning within one week.",
    "cn": "A：衛生稽查員昨天下午為什麼去了火車站的美食街？ B：好幾位顧客抱怨廚房附近有垃圾和污水，所以稽查員檢查了那裡的【環境衛生】，並要求經理們在一週內改善清潔工作。"
  },
  {
    "word": "security",
    "pos": "n.",
    "cn_def": "保全；安全措施",
    "en_def": "things done to protect a place or people from danger or crime",
    "sentence": "A: Why do visitors have to show their ID cards at the front desk before they can enter our building now? B: After someone stole two laptops from the third floor last month, management increased {{BLANK}}, so guards check every visitor and new cameras record everyone who uses the elevators.",
    "cn": "A：為什麼訪客現在進我們大樓前都要在櫃檯出示身分證？ B：上個月有人從三樓偷走兩台筆電後，管理處加強了【保全措施】，所以警衛會檢查每位訪客，新的攝影機也會拍下每個搭電梯的人。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "休閒娛樂",
    "en_def": "activities people do for fun and relaxation",
    "sentence": "A: What does the city plan to build on the land where the old paper factory used to stand? B: It will become a large {{BLANK}} area with walking paths, basketball courts and a small lake, so residents will have a pleasant place to relax and exercise after work.",
    "cn": "A：市政府打算在舊造紙廠原址的土地上蓋什麼？ B：那裡會變成一個大型【休閒娛樂】區，有步道、籃球場和小湖，讓居民下班後有個舒適的地方可以放鬆和運動。"
  },
  {
    "word": "public service",
    "pos": "n.phr.",
    "cn_def": "公共服務",
    "en_def": "a service that the government provides for everyone, such as buses or trash collection",
    "sentence": "A: Why did the mayor receive so much praise from residents at the town meeting last night? B: She improved almost every {{BLANK}} in the city during her first two years, including faster garbage collection, longer library hours and more buses for people who live in the mountains.",
    "cn": "A：昨晚市民大會上，市長為什麼受到居民這麼多讚揚？ B：她在上任頭兩年幾乎改善了市內的每一項【公共服務】，包括更快的垃圾清運、更長的圖書館開放時間，以及為住在山區的人增加更多公車。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "避難所；遮蔽處",
    "en_def": "a place that protects people from bad weather or danger",
    "sentence": "A: What should employees do if a typhoon hits the city while they are still working at the factory? B: Everyone should move to the emergency {{BLANK}} in the basement, which has food, water and first-aid kits, and stay there until the supervisor says it is safe to go home.",
    "cn": "A：如果員工還在工廠上班時颱風侵襲城市，他們應該怎麼做？ B：大家都應該移到地下室的緊急【避難所】，那裡有食物、飲水和急救箱，並待在那裡直到主管說可以安全回家為止。"
  },
  {
    "word": "green space",
    "pos": "n.phr.",
    "cn_def": "綠地",
    "en_def": "an area of grass and trees in a town or city",
    "sentence": "A: Why are so many young families moving to the new neighborhood on the east side of the city? B: The developers kept a lot of {{BLANK}} between the apartment buildings, so there are lawns and trees everywhere, and children can play outside safely away from the busy roads.",
    "cn": "A：為什麼這麼多年輕家庭搬到城東的新社區？ B：開發商在公寓大樓之間保留了大量【綠地】，所以到處都有草坪和樹木，孩子們可以遠離繁忙的馬路安全地在戶外玩耍。"
  },
  {
    "word": "sidewalk",
    "pos": "n.",
    "cn_def": "人行道",
    "en_def": "a path beside a street for people to walk on",
    "sentence": "A: Why is the street outside our office blocked with orange cones and machines this week? B: Workers are rebuilding the {{BLANK}} because the old one was broken and dangerous, so pedestrians have to walk on the other side of the street until the job is finished next Friday.",
    "cn": "A：我們辦公室外面的街道這週為什麼被橘色三角錐和機具擋住？ B：工人正在重建【人行道】，因為舊的已經破損又危險，所以在下週五完工之前，行人必須走對面那一側的街道。"
  },
  {
    "word": "parking lot",
    "pos": "n.phr.",
    "cn_def": "停車場",
    "en_def": "an outdoor area where people leave their cars",
    "sentence": "A: Where should our visitors leave their cars when they come to the training session on Wednesday morning? B: They can use the {{BLANK}} behind the building, which has fifty free spaces, but they should arrive before nine because it usually fills up quickly on weekdays.",
    "cn": "A：我們的訪客週三早上來參加訓練課程時，車子應該停在哪裡？ B：他們可以使用大樓後面的【停車場】，那裡有五十個免費車位，不過他們應該九點前到，因為平日通常很快就停滿了。"
  },
  {
    "word": "water supply",
    "pos": "n.phr.",
    "cn_def": "供水；自來水供應",
    "en_def": "the system that brings clean water to homes and buildings",
    "sentence": "A: Why did the restaurant next door close early yesterday afternoon even though it had many reservations? B: The city cut off the {{BLANK}} to the whole block for six hours while workers repaired a broken pipe, so the kitchen could not wash dishes or cook safely.",
    "cn": "A：隔壁餐廳昨天下午明明有很多訂位，為什麼還提早關門？ B：工人修理破裂的水管時，市政府切斷了整個街區的【供水】六個小時，所以廚房無法洗碗，也無法安全地烹飪。"
  }
];

const MCQS = [
  {
    "q": "The government plans to spend billions on roads, bridges and power lines. Better _____ will attract more foreign companies to the region.",
    "options": [
      "infrastructure",
      "recreation",
      "amenity",
      "shelter"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new apartment complex offers a rooftop garden and a fitness room. Each _____ is included in the monthly fee for residents.",
    "options": [
      "sidewalk",
      "shelter",
      "amenity",
      "stadium"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Members can borrow up to ten books at a time. The city _____ also offers free e-books through its mobile app.",
    "options": [
      "museum",
      "library",
      "clinic",
      "stadium"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The injured worker was taken by ambulance to the nearest _____. He stayed there for three nights before returning home.",
    "options": [
      "museum",
      "library",
      "stadium",
      "hospital"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Employees can get free health checks at the _____ on the ground floor. It is open every weekday from nine to five.",
    "options": [
      "stadium",
      "playground",
      "clinic",
      "airport"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The children walk to the elementary _____ near their home every day. Classes there begin at eight o'clock each morning.",
    "options": [
      "school",
      "airport",
      "stadium",
      "hospital"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Office workers often eat lunch on the benches in the _____ across the street. The trees there provide plenty of shade in summer.",
    "options": [
      "airport",
      "subway",
      "clinic",
      "park"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new housing project includes a _____ with swings and slides. Parents can watch their children from nearby benches.",
    "options": [
      "airport",
      "playground",
      "subway",
      "hospital"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "More than fifty thousand fans filled the _____ for the championship game. Extra trains were added to carry everyone home.",
    "options": [
      "stadium",
      "library",
      "clinic",
      "restroom"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The _____ is showing a special exhibition of ancient Chinese paintings. Admission is free for students on Wednesdays.",
    "options": [
      "hospital",
      "airport",
      "museum",
      "playground"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Free cooking classes for local residents are held at the _____ every Saturday. Registration opens on the first day of each month.",
    "options": [
      "parking lot",
      "community center",
      "bus station",
      "swimming pool"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Hotel guests may use the heated _____ on the roof until ten at night. Towels are available at the front desk.",
    "options": [
      "parking lot",
      "bus station",
      "water supply",
      "swimming pool"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Many commuters rely on public _____ to get to work each day. The city plans to add more bus routes next year.",
    "options": [
      "sanitation",
      "recreation",
      "transportation",
      "security"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "During rush hour, the _____ is much faster than driving downtown. Trains arrive at each station every three minutes.",
    "options": [
      "subway",
      "sidewalk",
      "playground",
      "shelter"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Passengers should arrive at the _____ two hours before international flights. Security checks can take a long time during holidays.",
    "options": [
      "library",
      "playground",
      "museum",
      "airport"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The escalators will be closed on Sunday for routine _____. Shoppers are asked to use the elevators instead.",
    "options": [
      "recreation",
      "maintenance",
      "sanitation",
      "transportation"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The renovated train station is now fully _____ to wheelchair users. Ramps and wide elevators have been installed at every entrance.",
    "options": [
      "accessible",
      "crowded",
      "temporary",
      "expensive"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The hotel is in a very _____ location, just two minutes from the subway. Guests can easily reach the convention center.",
    "options": [
      "tired",
      "nervous",
      "convenient",
      "grateful"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The owners plan to _____ the old cinema and turn it into a modern theater. The work will take about eight months.",
    "options": [
      "borrow",
      "renovate",
      "attend",
      "cancel"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The company received permission to _____ a new warehouse near the port. Building work will start in early spring.",
    "options": [
      "borrow",
      "describe",
      "attend",
      "construct"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The monthly rent does not include any _____ charges. Tenants must pay for their own electricity, water and gas.",
    "options": [
      "playground",
      "museum",
      "utility",
      "shelter"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Poor _____ in the old market led to complaints about smells and rats. The city has now hired more cleaning staff.",
    "options": [
      "sanitation",
      "recreation",
      "transportation",
      "security"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Visitors must wear a badge at all times for _____ reasons. Guards at the entrance will check each badge carefully.",
    "options": [
      "recreation",
      "sanitation",
      "transportation",
      "security"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The new riverside area offers jogging paths and tennis courts for _____. Residents can enjoy it free of charge every day.",
    "options": [
      "sanitation",
      "recreation",
      "infrastructure",
      "security"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Collecting garbage is an important _____ provided by the city government. Trucks visit each neighborhood three times a week.",
    "options": [
      "public service",
      "parking lot",
      "green space",
      "water supply"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "During the typhoon, hundreds of families stayed in a temporary _____ at the local school. Volunteers provided them with food and blankets.",
    "options": [
      "airport",
      "museum",
      "shelter",
      "sidewalk"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Doctors say that living near _____ such as parks and gardens improves health. The city will plant thousands of new trees.",
    "options": [
      "parking lot",
      "green space",
      "bus station",
      "swimming pool"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Pedestrians should stay on the _____ when walking along busy roads. Riding scooters there is not allowed.",
    "options": [
      "airport",
      "stadium",
      "clinic",
      "sidewalk"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The shopping mall's _____ has space for two thousand cars. Drivers can pay with their phones when they leave.",
    "options": [
      "green space",
      "water supply",
      "parking lot",
      "community center"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Residents were told to store bottled water before the repairs. The _____ will be shut off from midnight until six.",
    "options": [
      "water supply",
      "parking lot",
      "green space",
      "bus station"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "infrastructure": {
    "pos": "n.",
    "en_def": "the basic systems a city needs, such as roads, power and water",
    "cn_def": "基礎建設"
  },
  "amenity": {
    "pos": "n.",
    "en_def": "a useful feature or service that makes a place pleasant to use",
    "cn_def": "便利設施"
  },
  "library": {
    "pos": "n.",
    "en_def": "a building where people can read or borrow books",
    "cn_def": "圖書館"
  },
  "hospital": {
    "pos": "n.",
    "en_def": "a large building where sick or hurt people get medical care",
    "cn_def": "醫院"
  },
  "clinic": {
    "pos": "n.",
    "en_def": "a small place where doctors or nurses see patients who do not stay overnight",
    "cn_def": "診所"
  },
  "school": {
    "pos": "n.",
    "en_def": "a place where children go to learn",
    "cn_def": "學校"
  },
  "park": {
    "pos": "n.",
    "en_def": "a public area with grass and trees where people can walk, play or relax",
    "cn_def": "公園"
  },
  "playground": {
    "pos": "n.",
    "en_def": "an outdoor area with swings and slides where children play",
    "cn_def": "遊樂場；操場"
  },
  "stadium": {
    "pos": "n.",
    "en_def": "a large place with seats around a field for sports or concerts",
    "cn_def": "體育場"
  },
  "museum": {
    "pos": "n.",
    "en_def": "a building where important or interesting objects are shown to the public",
    "cn_def": "博物館"
  },
  "theater": {
    "pos": "n.",
    "en_def": "a building where people watch plays, shows or concerts",
    "cn_def": "劇院"
  },
  "community center": {
    "pos": "n.phr.",
    "en_def": "a public building where local people meet and join classes or activities",
    "cn_def": "社區活動中心"
  },
  "swimming pool": {
    "pos": "n.phr.",
    "en_def": "a large area of water built for people to swim in",
    "cn_def": "游泳池"
  },
  "gymnasium": {
    "pos": "n.",
    "en_def": "a large indoor room or building for sports and exercise",
    "cn_def": "體育館"
  },
  "restroom": {
    "pos": "n.",
    "en_def": "a room with toilets in a public building",
    "cn_def": "洗手間；廁所"
  },
  "transportation": {
    "pos": "n.",
    "en_def": "ways of moving people or goods from one place to another",
    "cn_def": "交通運輸"
  },
  "subway": {
    "pos": "n.",
    "en_def": "an underground train system in a city",
    "cn_def": "地鐵；捷運"
  },
  "bus station": {
    "pos": "n.phr.",
    "en_def": "a place where many buses start and end their trips",
    "cn_def": "公車站；客運站"
  },
  "airport": {
    "pos": "n.",
    "en_def": "a place where planes take off and land",
    "cn_def": "機場"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping buildings or machines in good condition",
    "cn_def": "維修；保養"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, enter or use, also for people in wheelchairs",
    "cn_def": "方便進入的；無障礙的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or reach; saving time and trouble",
    "cn_def": "方便的；便利的"
  },
  "renovate": {
    "pos": "v.",
    "en_def": "to repair and improve an old building",
    "cn_def": "翻修；整修"
  },
  "construct": {
    "pos": "v.",
    "en_def": "to build something such as a building, road or bridge",
    "cn_def": "建造；興建"
  },
  "utility": {
    "pos": "n.",
    "en_def": "a basic public service such as electricity, gas or water",
    "cn_def": "公用事業（水電瓦斯）"
  },
  "sanitation": {
    "pos": "n.",
    "en_def": "the systems that keep places clean, such as removing trash and dirty water",
    "cn_def": "環境衛生；公共衛生"
  },
  "security": {
    "pos": "n.",
    "en_def": "things done to protect a place or people from danger or crime",
    "cn_def": "保全；安全措施"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities people do for fun and relaxation",
    "cn_def": "休閒娛樂"
  },
  "public service": {
    "pos": "n.phr.",
    "en_def": "a service that the government provides for everyone, such as buses or trash collection",
    "cn_def": "公共服務"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place that protects people from bad weather or danger",
    "cn_def": "避難所；遮蔽處"
  },
  "green space": {
    "pos": "n.phr.",
    "en_def": "an area of grass and trees in a town or city",
    "cn_def": "綠地"
  },
  "sidewalk": {
    "pos": "n.",
    "en_def": "a path beside a street for people to walk on",
    "cn_def": "人行道"
  },
  "parking lot": {
    "pos": "n.phr.",
    "en_def": "an outdoor area where people leave their cars",
    "cn_def": "停車場"
  },
  "water supply": {
    "pos": "n.phr.",
    "en_def": "the system that brings clean water to homes and buildings",
    "cn_def": "供水；自來水供應"
  }
};

const EXTRA_GLOSSES = {};
