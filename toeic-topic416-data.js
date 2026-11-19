// Topic 416 Quiz Data: Travel 旅行
// Source word list: https://www.examword.com/group-topic/travel — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T416 - Travel 旅行",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accommodation",
    "pos": "n.",
    "cn_def": "住宿；住處",
    "en_def": "a place to stay, such as a hotel room",
    "sentence": "A: Our sales team is flying to Singapore for the trade fair next month, so have you found somewhere for all eight of us to stay near the convention center? B: Yes, I reserved {{BLANK}} at a business hotel only ten minutes away on foot, and the price includes breakfast and free Wi-Fi in every room.",
    "cn": "A：我們的業務團隊下個月要飛去新加坡參加貿易展，你找到會展中心附近能讓我們八個人住的地方了嗎？ B：找到了，我在一家步行只要十分鐘的商務旅館訂了【住宿】，價格包含早餐，而且每個房間都有免費無線網路。"
  },
  {
    "word": "all inclusive",
    "pos": "adj.phr.",
    "cn_def": "全包式的；費用全含的",
    "en_def": "with meals, drinks, and activities all included in one price",
    "sentence": "A: The company wants to reward the top sellers with a beach holiday this summer, but I'm worried about extra costs for food and drinks at the resort. B: Don't worry, the package I chose is {{BLANK}}, so meals, drinks, airport transfers, and water sports are all covered by one fixed price.",
    "cn": "A：公司想在今年夏天用海灘假期獎勵業績最好的業務員，但我擔心度假村裡餐飲的額外費用。 B：別擔心，我選的方案是【全包式的】，所以餐點、飲料、機場接送和水上活動都包含在一個固定價格裡。"
  },
  {
    "word": "half-board",
    "pos": "n.",
    "cn_def": "半膳（含早餐及一餐）",
    "en_def": "a hotel stay that includes breakfast and one other meal, usually dinner",
    "sentence": "A: When we visit the factory in the countryside next week, will we need to find restaurants for every meal, because there aren't many shops around there? B: I booked {{BLANK}} at the country inn, so breakfast and dinner are served at the hotel, and we only have to buy lunch near the factory.",
    "cn": "A：我們下週去鄉下參觀工廠時，每一餐都需要找餐廳嗎？因為那附近沒有什麼店家。 B：我在那間鄉村旅店訂了【半膳】，所以早餐和晚餐都在飯店供應，我們只需要在工廠附近買午餐就好。"
  },
  {
    "word": "full-board",
    "pos": "n.",
    "cn_def": "全膳（含三餐）",
    "en_def": "a hotel stay that includes breakfast, lunch, and dinner",
    "sentence": "A: The training retreat in the mountains lasts four days, and there are no restaurants nearby, so how will the trainees get their meals during the workshops? B: The lodge offers {{BLANK}}, which means breakfast, lunch, and dinner are all prepared by the kitchen staff, so nobody has to leave the site at all.",
    "cn": "A：山上的培訓營為期四天，附近也沒有餐廳，那學員在工作坊期間要怎麼用餐呢？ B：山莊提供【全膳】，也就是早餐、午餐和晚餐都由廚房員工準備，所以完全沒有人需要離開營地。"
  },
  {
    "word": "self-catering",
    "pos": "adj.",
    "cn_def": "自炊式的；自理餐食的",
    "en_def": "describing a place to stay where you cook your own meals",
    "sentence": "A: My family is staying in Hualien for two weeks during the summer, and eating out every night would be really expensive for five people. B: Then you should rent a {{BLANK}} apartment with a small kitchen, because you can buy fresh food at the market and cook your own dinners to save money.",
    "cn": "A：我們全家暑假要在花蓮待兩個星期，五個人每天晚上都外食會非常貴。 B：那你們應該租一間附小廚房的【自炊式】公寓，因為你們可以在市場買新鮮食材，自己煮晚餐來省錢。"
  },
  {
    "word": "book",
    "pos": "v.",
    "cn_def": "預訂；預約",
    "en_def": "to arrange to have a seat, room, or ticket at a future time",
    "sentence": "A: The client from Tokyo is arriving on Friday afternoon, and he asked us to find him a quiet hotel close to our head office downtown. B: I'll {{BLANK}} a room for him at the Grand Plaza this morning, because it is near the office and it usually fills up quickly before weekends.",
    "cn": "A：東京的客戶星期五下午抵達，他請我們幫他在市中心總部附近找一間安靜的飯店。 B：我今天早上就會在君悅廣場幫他【預訂】一個房間，因為那裡離辦公室很近，而且週末前通常很快就客滿。"
  },
  {
    "word": "breathtaking view",
    "pos": "n.phr.",
    "cn_def": "令人屏息的美景",
    "en_def": "a scene so beautiful that it surprises you",
    "sentence": "A: Why did the marketing team choose that hotel on the hill for the company dinner, even though it is far from the city center and harder to reach? B: The restaurant on the top floor has a {{BLANK}} of the harbor at sunset, and the managers thought guests would remember the evening for years.",
    "cn": "A：為什麼行銷團隊選了山丘上那家飯店辦公司晚宴？它離市中心很遠，交通也比較不方便。 B：頂樓的餐廳可以欣賞夕陽下港口【令人屏息的美景】，經理們認為賓客會對那個晚上記憶多年。"
  },
  {
    "word": "charter flight",
    "pos": "n.phr.",
    "cn_def": "包機",
    "en_def": "a plane trip hired by a group, not a regular scheduled flight",
    "sentence": "A: More than two hundred employees are going to the annual conference in Okinawa, so how can we make sure everyone arrives at the same time? B: The travel department arranged a {{BLANK}} just for our company, so the whole group will leave together from Taoyuan Airport early on Monday morning.",
    "cn": "A：有兩百多名員工要去沖繩參加年會，我們要怎麼確保每個人同時抵達？ B：差旅部門為我們公司安排了一架【包機】，所以全體人員會在星期一一大早一起從桃園機場出發。"
  },
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "the place someone is traveling to",
    "sentence": "A: Our boss wants to hold the next team-building trip somewhere warm, safe, and not too far, but nobody can agree on a place yet. B: I think Da Nang is the best {{BLANK}}, because the flight takes only three hours, the hotels are affordable, and the beaches are clean and quiet.",
    "cn": "A：老闆希望下次的團隊建立旅行去溫暖、安全又不太遠的地方，但大家還沒辦法決定地點。 B：我覺得峴港是最好的【目的地】，因為飛行只要三小時，飯店價格實惠，而且海灘乾淨又安靜。"
  },
  {
    "word": "guided tour",
    "pos": "n.phr.",
    "cn_def": "導覽行程",
    "en_def": "a trip around a place led by a person who explains things",
    "sentence": "A: The visitors from our German partner have a free afternoon on Thursday, and they would like to learn about the history of Taipei before they fly home. B: I've arranged a {{BLANK}} of the old town with an English-speaking expert, who will explain the temples, markets, and buildings as they walk.",
    "cn": "A：德國合作夥伴的訪客星期四下午有空，他們想在回國前了解台北的歷史。 B：我安排了老城區的【導覽行程】，由一位會說英文的專家帶領，他會邊走邊介紹寺廟、市場和建築。"
  },
  {
    "word": "local crafts",
    "pos": "n.phr.",
    "cn_def": "當地手工藝品",
    "en_def": "handmade objects made by people who live in a particular area",
    "sentence": "A: I'd like to give each of our overseas clients a small gift from Taiwan at the end of the meeting, but I don't want anything ordinary from the airport. B: You could visit the market in Yingge, where artists sell {{BLANK}} such as hand-painted cups and pottery that show our culture.",
    "cn": "A：我想在會議結束時送每位海外客戶一份來自台灣的小禮物，但我不想要機場那種普通的東西。 B：你可以去鶯歌的市集，那裡的藝術家販售手繪杯子和陶器等【當地手工藝品】，能展現我們的文化。"
  },
  {
    "word": "travel agency",
    "pos": "n.phr.",
    "cn_def": "旅行社",
    "en_def": "a company that arranges trips, tickets, and hotels for customers",
    "sentence": "A: Planning the sales trip to five European cities is taking me too much time, because I keep comparing flights, trains, and hotel prices online every night. B: Why don't you contact the {{BLANK}} our company usually works with, because their staff can organize the whole schedule and often get cheaper group rates?",
    "cn": "A：規劃到歐洲五個城市的業務出差花了我太多時間，因為我每天晚上都在網路上比較機票、火車和飯店價格。 B：你何不聯絡我們公司常合作的【旅行社】呢？他們的員工可以安排整個行程，而且常常能拿到更便宜的團體價。"
  },
  {
    "word": "travel agent",
    "pos": "n.phr.",
    "cn_def": "旅行社業務員；旅遊顧問",
    "en_def": "a person whose job is to plan and sell trips for customers",
    "sentence": "A: My flight to Bangkok was canceled because of the storm, and I have an important meeting there tomorrow afternoon, so what should I do now? B: Call our {{BLANK}}, Ms. Lin, right away, because she knows the airlines well and can usually find you another seat within an hour.",
    "cn": "A：我飛曼谷的班機因為暴風雨被取消了，而我明天下午在那裡有一個重要會議，現在該怎麼辦？ B：馬上打給我們的【旅遊顧問】林小姐，因為她很熟悉各家航空公司，通常一小時內就能幫你找到另一個座位。"
  },
  {
    "word": "stunning landscape",
    "pos": "n.phr.",
    "cn_def": "壯麗的風景",
    "en_def": "countryside or scenery that is extremely beautiful",
    "sentence": "A: Why are so many photographers and tour groups going to Taroko Gorge this autumn, even though the roads there are narrow and often crowded? B: The area has a {{BLANK}} of marble cliffs, deep valleys, and clear blue rivers, so visitors feel it is worth the long drive.",
    "cn": "A：為什麼今年秋天有這麼多攝影師和旅行團去太魯閣，即使那裡的道路很窄又常常擁擠？ B：那個地區有大理石峭壁、深谷和清澈藍色河流構成的【壯麗風景】，所以遊客覺得長途開車很值得。"
  },
  {
    "word": "sightseeing",
    "pos": "n.",
    "cn_def": "觀光；遊覽",
    "en_def": "visiting famous or interesting places as a tourist",
    "sentence": "A: The conference in Kyoto ends on Wednesday, but our return flight isn't until Friday, so what are you planning to do with the extra time? B: I'm going to do some {{BLANK}} around the old temples and gardens, and then I'll buy some green tea for my coworkers before I leave.",
    "cn": "A：京都的研討會星期三結束，但我們的回程班機是星期五，你打算怎麼利用多出來的時間？ B：我要在古老的寺廟和庭園一帶【觀光】，然後在離開前幫同事買些綠茶。"
  },
  {
    "word": "tourist trap",
    "pos": "n.phr.",
    "cn_def": "觀光陷阱；坑觀光客的地方",
    "en_def": "a place that attracts tourists but charges too much for poor quality",
    "sentence": "A: The restaurant next to the famous night market looks busy every evening, so should we take our visitors there for dinner after the factory tour? B: I'd avoid it, because it's a {{BLANK}} where the menu prices are double and the food is not very good, so locals never eat there.",
    "cn": "A：那家在知名夜市旁的餐廳每天晚上看起來都很熱鬧，我們參觀完工廠後要帶訪客去那裡吃晚餐嗎？ B：我會避開那裡，因為那是個【觀光陷阱】，菜單價格貴一倍，食物也不太好吃，所以當地人從來不去。"
  },
  {
    "word": "youth hostel",
    "pos": "n.phr.",
    "cn_def": "青年旅館",
    "en_def": "a cheap place to stay, often with shared rooms, popular with young travelers",
    "sentence": "A: Our new intern wants to travel around Europe after she finishes her contract, but she has a very small budget for hotels and transport. B: She should stay in a {{BLANK}} in each city, because the beds are cheap, the kitchens are shared, and she can meet other young travelers easily.",
    "cn": "A：我們的新實習生想在合約結束後去歐洲旅行，但她的住宿和交通預算非常少。 B：她應該在每個城市住【青年旅館】，因為床位便宜，廚房共用，而且她很容易就能認識其他年輕旅人。"
  },
  {
    "word": "long weekend",
    "pos": "n.phr.",
    "cn_def": "連續假期；長週末",
    "en_def": "a weekend with an extra day off, such as Friday or Monday",
    "sentence": "A: Monday is a national holiday this month, so do you have any plans now that the office will be closed for three days in a row? B: Yes, my wife and I are taking a {{BLANK}} in Kenting, where we'll relax on the beach and try some fresh seafood.",
    "cn": "A：這個月的星期一是國定假日，既然辦公室會連續關閉三天，你有什麼計畫嗎？ B：有啊，我和太太要去墾丁過一個【長週末】，我們會在海灘放鬆，還要嚐嚐新鮮海鮮。"
  }
];

const MCQS = [
  {
    "q": "The conference organizers have reserved hotel rooms for all speakers. Please contact Ms. Chen if your _____ does not meet your needs.",
    "options": [
      "accommodation",
      "sightseeing",
      "destination",
      "admission"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The resort's new package covers meals, drinks, and activities for one price. Many families prefer this _____ option for stress-free holidays.",
    "options": [
      "self-catering",
      "all inclusive",
      "guided",
      "breathtaking"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Breakfast and dinner are included in the room rate at the lakeside inn. Guests who choose _____ must buy lunch elsewhere.",
    "options": [
      "sightseeing",
      "accommodation",
      "half-board",
      "destination"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "All three meals are served daily at the mountain lodge. The _____ rate is popular with groups attending long training programs.",
    "options": [
      "half-board",
      "sightseeing",
      "destination",
      "full-board"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Each unit at Sunset Villas has a fully equipped kitchen. These _____ cottages are ideal for families who want to cook their own meals.",
    "options": [
      "self-catering",
      "all inclusive",
      "guided",
      "breathtaking"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Rooms in the city center fill quickly during the trade show. Attendees are advised to _____ their hotels at least a month in advance.",
    "options": [
      "cancel",
      "book",
      "delay",
      "postpone"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The rooftop restaurant overlooks the entire harbor. Diners can enjoy a _____ of the city lights while they eat.",
    "options": [
      "tourist trap",
      "charter flight",
      "breathtaking view",
      "long weekend"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Regular airlines could not carry the entire sales team on the same day. The company therefore hired a _____ to the conference.",
    "options": [
      "guided tour",
      "youth hostel",
      "travel agency",
      "charter flight"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Bali has become a popular _____ for corporate retreats. Its resorts offer meeting rooms as well as beautiful beaches.",
    "options": [
      "destination",
      "accommodation",
      "sightseeing",
      "admission"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Visitors to the factory can join a free _____ every Saturday morning. An expert explains each stage of the production process.",
    "options": [
      "tourist trap",
      "guided tour",
      "long weekend",
      "charter flight"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The shop near the train station sells handmade baskets and pottery. Tourists love buying these _____ as gifts for friends back home.",
    "options": [
      "breathtaking views",
      "charter flights",
      "local crafts",
      "tourist traps"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Golden Sun Tours is the largest _____ in the region. It arranges flights, hotels, and visas for business travelers.",
    "options": [
      "travel agent",
      "youth hostel",
      "guided tour",
      "travel agency"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Mr. Park has worked as a _____ for fifteen years. He helps clients plan trips that match their budgets and interests.",
    "options": [
      "travel agent",
      "travel agency",
      "tourist trap",
      "youth hostel"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The national park is famous for its green hills and clear lakes. Photographers travel from all over the world to capture its _____.",
    "options": [
      "tourist trap",
      "stunning landscape",
      "charter flight",
      "travel agency"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The delegates finished their meetings early on Friday. They spent the afternoon _____ around the historic district.",
    "options": [
      "accommodation",
      "booking",
      "sightseeing",
      "admission"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The restaurant beside the famous castle charges very high prices for average food. Most locals consider it a _____.",
    "options": [
      "guided tour",
      "youth hostel",
      "long weekend",
      "tourist trap"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Students on a tight budget often stay in a _____ during their trips. Rooms are shared, but the prices are very low.",
    "options": [
      "youth hostel",
      "travel agency",
      "charter flight",
      "guided tour"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Monday is a public holiday, so the office will be closed. Many employees are planning short trips for the _____.",
    "options": [
      "guided tour",
      "long weekend",
      "tourist trap",
      "charter flight"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The hotel near the airport offers comfortable rooms at reasonable prices. It is the most convenient _____ for travelers with early flights.",
    "options": [
      "destination",
      "sightseeing",
      "accommodation",
      "booking"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Mr. Wu paid one price that covered his flight, meals, and drinks. He said the _____ trip saved him time and money.",
    "options": [
      "self-catering",
      "breathtaking",
      "guided",
      "all inclusive"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The company rented _____ apartments for the interns this summer. Each apartment has a kitchen so they can prepare their own food.",
    "options": [
      "self-catering",
      "full-board",
      "all inclusive",
      "guided"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Ms. Tanaka asked her assistant to _____ a table for six. The dinner will celebrate the signing of the new contract.",
    "options": [
      "cancel",
      "book",
      "refund",
      "expire"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The football club flew to the final on a _____. The plane left from a small airport near the stadium.",
    "options": [
      "travel agent",
      "guided tour",
      "charter flight",
      "youth hostel"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Please write your final _____ on the travel request form. The finance department needs it to approve your expenses.",
    "options": [
      "sightseeing",
      "accommodation",
      "admission",
      "destination"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The museum offers a _____ in English every afternoon. Visitors can ask the guide questions about the paintings.",
    "options": [
      "guided tour",
      "tourist trap",
      "charter flight",
      "long weekend"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Our company signed a contract with a new _____ this year. Their staff will handle all employee business trips from now on.",
    "options": [
      "travel agent",
      "travel agency",
      "guided tour",
      "tourist trap"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "If your flight is canceled, call your _____ immediately. She can usually rebook you on the next available plane.",
    "options": [
      "travel agency",
      "youth hostel",
      "travel agent",
      "guided tour"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "A free afternoon of _____ is included in the conference schedule. Buses will take participants to the city's main attractions.",
    "options": [
      "accommodation",
      "booking",
      "admission",
      "sightseeing"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The guidebook warns readers about the shops near the main square. They call the area a _____ with overpriced souvenirs.",
    "options": [
      "tourist trap",
      "guided tour",
      "youth hostel",
      "long weekend"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Mr. Lee took Friday off to enjoy a _____ with his family. They drove to the coast and stayed at a small hotel.",
    "options": [
      "guided tour",
      "long weekend",
      "tourist trap",
      "charter flight"
    ],
    "answer": 1,
    "vocabIndex": 17
  }
];

const LOOKUP = {
  "accommodation": {
    "pos": "n.",
    "en_def": "a place to stay, such as a hotel room",
    "cn_def": "住宿；住處"
  },
  "all inclusive": {
    "pos": "adj.phr.",
    "en_def": "with meals, drinks, and activities all included in one price",
    "cn_def": "全包式的；費用全含的"
  },
  "half-board": {
    "pos": "n.",
    "en_def": "a hotel stay that includes breakfast and one other meal, usually dinner",
    "cn_def": "半膳（含早餐及一餐）"
  },
  "full-board": {
    "pos": "n.",
    "en_def": "a hotel stay that includes breakfast, lunch, and dinner",
    "cn_def": "全膳（含三餐）"
  },
  "self-catering": {
    "pos": "adj.",
    "en_def": "describing a place to stay where you cook your own meals",
    "cn_def": "自炊式的；自理餐食的"
  },
  "book": {
    "pos": "v.",
    "en_def": "to arrange to have a seat, room, or ticket at a future time",
    "cn_def": "預訂；預約"
  },
  "breathtaking view": {
    "pos": "n.phr.",
    "en_def": "a scene so beautiful that it surprises you",
    "cn_def": "令人屏息的美景"
  },
  "charter flight": {
    "pos": "n.phr.",
    "en_def": "a plane trip hired by a group, not a regular scheduled flight",
    "cn_def": "包機"
  },
  "destination": {
    "pos": "n.",
    "en_def": "the place someone is traveling to",
    "cn_def": "目的地"
  },
  "guided tour": {
    "pos": "n.phr.",
    "en_def": "a trip around a place led by a person who explains things",
    "cn_def": "導覽行程"
  },
  "local crafts": {
    "pos": "n.phr.",
    "en_def": "handmade objects made by people who live in a particular area",
    "cn_def": "當地手工藝品"
  },
  "travel agency": {
    "pos": "n.phr.",
    "en_def": "a company that arranges trips, tickets, and hotels for customers",
    "cn_def": "旅行社"
  },
  "travel agent": {
    "pos": "n.phr.",
    "en_def": "a person whose job is to plan and sell trips for customers",
    "cn_def": "旅行社業務員；旅遊顧問"
  },
  "stunning landscape": {
    "pos": "n.phr.",
    "en_def": "countryside or scenery that is extremely beautiful",
    "cn_def": "壯麗的風景"
  },
  "sightseeing": {
    "pos": "n.",
    "en_def": "visiting famous or interesting places as a tourist",
    "cn_def": "觀光；遊覽"
  },
  "tourist trap": {
    "pos": "n.phr.",
    "en_def": "a place that attracts tourists but charges too much for poor quality",
    "cn_def": "觀光陷阱；坑觀光客的地方"
  },
  "youth hostel": {
    "pos": "n.phr.",
    "en_def": "a cheap place to stay, often with shared rooms, popular with young travelers",
    "cn_def": "青年旅館"
  },
  "long weekend": {
    "pos": "n.phr.",
    "en_def": "a weekend with an extra day off, such as Friday or Monday",
    "cn_def": "連續假期；長週末"
  }
};

const EXTRA_GLOSSES = {};
