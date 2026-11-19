// Topic 415 Quiz Data: Transport 交通運輸
// Source word list: https://www.examword.com/group-topic/transport — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T415 - Transport 交通運輸",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "pleasant to use and making you feel relaxed",
    "sentence": "A: Our sales team has to travel to the Kaohsiung branch next Monday, so should we drive there or book seats on the high-speed train? B: I think the train is more {{BLANK}} because the seats are wide, there is free Wi-Fi, and everyone can relax or finish their reports during the two-hour trip.",
    "cn": "A：我們的業務團隊下週一要去高雄分公司，我們應該開車去還是訂高鐵的座位？ B：我覺得火車比較【舒適】，因為座位寬敞、有免費Wi-Fi，而且每個人在兩小時的車程中都可以休息或完成報告。"
  },
  {
    "word": "congestion",
    "pos": "n.",
    "cn_def": "（交通）壅塞",
    "en_def": "too many vehicles on the road, so traffic moves slowly",
    "sentence": "A: Why did the city government decide to charge drivers a fee for entering the downtown business district during weekdays? B: The mayor wants to reduce {{BLANK}} on the main roads, because thousands of cars were causing long delays, and the extra money will be used to improve bus services for local residents.",
    "cn": "A：為什麼市政府決定對平日進入市中心商業區的駕駛人收費？ B：市長想減少主要道路上的【交通壅塞】，因為數以千計的汽車造成了長時間的延誤，而額外的收入將用來改善當地居民的公車服務。"
  },
  {
    "word": "overcrowded",
    "pos": "adj.",
    "cn_def": "過度擁擠的",
    "en_def": "having too many people in one place",
    "sentence": "A: You look really tired this morning, so did something happen on your way to the office today? B: The subway was so {{BLANK}} that I couldn't even move my arms, and I had to let two trains pass before I finally found a small space near the door.",
    "cn": "A：你今天早上看起來很累，上班途中發生了什麼事嗎？ B：地鐵【過度擁擠】到我連手臂都動不了，我必須讓兩班列車先過，最後才在門邊找到一個小空位。"
  },
  {
    "word": "ultimately",
    "pos": "adv.",
    "cn_def": "最終；最後",
    "en_def": "in the end, after a long process",
    "sentence": "A: The board spent months discussing whether to move our headquarters closer to the new train station, so what did they decide? B: After comparing rent prices and travel times for all employees, they {{BLANK}} chose the building next to the station, and we will move there in March.",
    "cn": "A：董事會花了好幾個月討論是否把總部搬到離新火車站近一點的地方，他們最後決定了什麼？ B：在比較了所有員工的租金價格和通勤時間之後，他們【最終】選擇了車站旁的那棟大樓，我們三月就會搬過去。"
  },
  {
    "word": "tram",
    "pos": "n.",
    "cn_def": "路面電車",
    "en_def": "an electric vehicle that runs on rails along city streets",
    "sentence": "A: What is the easiest way for our overseas visitors to get from their hotel to the convention center tomorrow morning? B: They can take the {{BLANK}} that runs along the river every ten minutes, because it stops right in front of the main entrance and the tickets are cheap.",
    "cn": "A：我們的海外訪客明天早上從飯店到會議中心最簡單的方法是什麼？ B：他們可以搭沿著河邊行駛、每十分鐘一班的【路面電車】，因為它就停在正門口前面，而且票價很便宜。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；價格親民的",
    "en_def": "cheap enough for most people to pay for",
    "sentence": "A: Many of our new interns live far from the office, so how can we help them get to work without spending too much money? B: The city offers a monthly travel card that is quite {{BLANK}} for students, and we could also pay part of the cost as an extra benefit.",
    "cn": "A：我們很多新實習生住得離辦公室很遠，我們要怎麼幫助他們上班又不花太多錢？ B：市政府為學生提供了一種相當【負擔得起】的月票，我們也可以補貼部分費用作為額外福利。"
  },
  {
    "word": "extended",
    "pos": "adj.",
    "cn_def": "延長的",
    "en_def": "made longer than usual",
    "sentence": "A: I heard the metro company announced some changes to its service hours, so will that help staff who finish work late at night? B: Yes, the {{BLANK}} hours mean trains will now run until two in the morning on weekends, so our restaurant workers can get home safely after closing.",
    "cn": "A：我聽說捷運公司宣布了營運時間的一些調整，這對深夜下班的員工有幫助嗎？ B：有的，【延長的】營運時間代表週末列車會開到凌晨兩點，所以我們餐廳的員工打烊後可以安全回家。"
  },
  {
    "word": "underground",
    "pos": "adj.",
    "cn_def": "地下的",
    "en_def": "below the surface of the ground",
    "sentence": "A: Is there a safe way to walk from the train station to our office building when it is raining heavily? B: Yes, there is an {{BLANK}} passage that connects the station with the shopping mall and our building, so you can stay dry and avoid crossing the busy street.",
    "cn": "A：大雨的時候，有沒有安全的方式可以從火車站走到我們的辦公大樓？ B：有的，有一條【地下的】通道連接車站、購物中心和我們的大樓，所以你可以不被淋濕，也不用穿越繁忙的街道。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的",
    "en_def": "far away from towns and cities",
    "sentence": "A: Why is it so difficult to hire workers for our new factory, even though we are offering good salaries and training? B: The factory is in a {{BLANK}} area in the mountains with no bus service, so most people cannot get there unless they own a car or motorcycle.",
    "cn": "A：為什麼我們的新工廠很難招到工人，即使我們提供了很好的薪水和訓練？ B：工廠位於山區的一個【偏遠的】地方，沒有公車服務，所以大多數人除非有汽車或機車，否則沒辦法到那裡。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work",
    "sentence": "A: You moved to a new apartment in Taoyuan last month, so how long does it take you to get to the office now? B: I {{BLANK}} by train every day, and the trip takes about forty minutes, which gives me time to read emails before my first meeting starts.",
    "cn": "A：你上個月搬到桃園的新公寓，現在到辦公室要花多久時間？ B：我每天搭火車【通勤】，車程大約四十分鐘，這讓我在第一場會議開始前有時間看電子郵件。"
  },
  {
    "word": "horrendous",
    "pos": "adj.",
    "cn_def": "極糟的；可怕的",
    "en_def": "extremely bad or unpleasant",
    "sentence": "A: Did you manage to arrive at the airport in time for your flight to Tokyo yesterday afternoon? B: Only just, because the traffic on the highway was {{BLANK}} after a truck broke down, and we were stuck in the same place for almost an hour before the police cleared the road.",
    "cn": "A：你昨天下午有及時趕到機場搭去東京的班機嗎？ B：勉強趕上，因為一輛卡車拋錨之後，高速公路上的交通【糟糕透頂】，我們在同一個地方卡了將近一個小時，警察才把道路清空。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；進步",
    "en_def": "a change that makes something better",
    "sentence": "A: Have you noticed any changes since the city added more buses to the route that goes past our office? B: Yes, there has been a big {{BLANK}} in waiting times, and now I rarely wait more than five minutes, even during the busiest part of the morning.",
    "cn": "A：自從市政府在經過我們辦公室的路線上增加更多公車後，你有注意到任何變化嗎？ B：有，等車時間有很大的【改善】，現在即使在早上最忙的時段，我也很少等超過五分鐘。"
  },
  {
    "word": "days off",
    "pos": "n.phr.",
    "cn_def": "休假日",
    "en_def": "days when you do not have to work",
    "sentence": "A: Are you planning to visit your family in Hualien during the long holiday weekend next month? B: Yes, I have three {{BLANK}} in a row, so I already bought my train tickets online, because the seats always sell out quickly before national holidays.",
    "cn": "A：你打算下個月連假的時候回花蓮看家人嗎？ B：是的，我有連續三天的【休假日】，所以我已經在網路上買好火車票了，因為國定假日前座位總是很快就賣完。"
  },
  {
    "word": "time off",
    "pos": "n.phr.",
    "cn_def": "休假；請假",
    "en_def": "a period when you are allowed to be away from work",
    "sentence": "A: The new rail line to the coast opens next week, so are you going to try it out soon? B: I'd love to, but I can't take any {{BLANK}} until the end of the quarter, because our department is busy preparing the annual budget for the board.",
    "cn": "A：通往海岸的新鐵路線下週通車，你會很快去搭搭看嗎？ B：我很想，但在這一季結束前我沒辦法【請假】，因為我們部門正忙著為董事會準備年度預算。"
  },
  {
    "word": "diminish",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to become smaller or less",
    "sentence": "A: Do you think the new bike-sharing program will really make a difference to traffic in the city center? B: I hope so, because if more office workers ride bikes for short trips, the number of cars on the road should {{BLANK}}, and the air quality will get better too.",
    "cn": "A：你認為新的共享單車計畫真的會對市中心的交通有幫助嗎？ B：我希望如此，因為如果更多上班族短程騎腳踏車，路上的汽車數量應該會【減少】，空氣品質也會變得更好。"
  },
  {
    "word": "iconic",
    "pos": "adj.",
    "cn_def": "具代表性的；標誌性的",
    "en_def": "very famous and seen as a symbol of a place",
    "sentence": "A: What should I show our clients from London when they visit Taipei for the first time next week? B: You should take them on the {{BLANK}} cable car up to Maokong, because it is famous all over the world, and they can enjoy tea while looking at the city.",
    "cn": "A：下週倫敦的客戶第一次來台北時，我應該帶他們看什麼？ B：你應該帶他們搭那座【具代表性的】貓空纜車上山，因為它舉世聞名，他們還可以一邊喝茶一邊欣賞城市景色。"
  },
  {
    "word": "impressive",
    "pos": "adj.",
    "cn_def": "令人印象深刻的",
    "en_def": "very good, making people admire it",
    "sentence": "A: How was your business trip to Singapore, and did you have time to look around the city at all? B: It was great, and the public transport system was really {{BLANK}}, because the trains were clean, fast, and so frequent that I never needed a taxi.",
    "cn": "A：你去新加坡出差怎麼樣，你有時間在城市裡四處看看嗎？ B：很棒，而且大眾運輸系統真的【令人印象深刻】，因為列車乾淨、快速，班次又多，我從來不需要搭計程車。"
  },
  {
    "word": "architecture",
    "pos": "n.",
    "cn_def": "建築風格；建築",
    "en_def": "the style and design of buildings",
    "sentence": "A: Why do so many tourists take photos inside the new central station instead of just catching their trains? B: The {{BLANK}} of the building is very unusual, with a huge glass roof and wooden columns, and it won several international design awards last year.",
    "cn": "A：為什麼這麼多遊客在新的中央車站裡拍照，而不只是趕火車？ B：這棟建築物的【建築風格】非常特別，有巨大的玻璃屋頂和木頭柱子，去年還獲得了好幾個國際設計獎。"
  },
  {
    "word": "punctual",
    "pos": "adj.",
    "cn_def": "準時的",
    "en_def": "arriving or leaving at the right time",
    "sentence": "A: I'm worried about arriving late for the job interview in Hsinchu, so should I take the bus or the train? B: Take the train, because it is usually very {{BLANK}} and almost never leaves or arrives late, while the bus often gets stuck in traffic near the science park.",
    "cn": "A：我擔心去新竹面試會遲到，我應該搭公車還是火車？ B：搭火車，因為它通常非常【準時】，幾乎從不晚開或誤點，而公車常常在科學園區附近塞車。"
  },
  {
    "word": "overpasses",
    "pos": "n.",
    "cn_def": "天橋；高架道路",
    "en_def": "bridges that carry a road over another road",
    "sentence": "A: Why is it so much easier to drive through the industrial zone than it was a few years ago? B: The government built several {{BLANK}} above the busiest intersections, so trucks can cross without stopping at traffic lights, and deliveries are much faster now.",
    "cn": "A：為什麼現在開車穿過工業區比幾年前容易得多？ B：政府在最繁忙的十字路口上方建了好幾座【高架道路】，所以卡車不用停紅綠燈就能通過，現在送貨快多了。"
  },
  {
    "word": "underpasses",
    "pos": "n.",
    "cn_def": "地下道",
    "en_def": "roads or paths that go under another road",
    "sentence": "A: Is it safe for our staff to walk from the parking lot to the office across that wide road? B: Yes, there are two {{BLANK}} below the road with good lighting and security cameras, so people can cross safely without waiting for the cars to stop.",
    "cn": "A：我們的員工從停車場穿過那條寬馬路走到辦公室安全嗎？ B：安全，馬路下方有兩條照明良好又有監視器的【地下道】，所以大家不用等車停下來就能安全過馬路。"
  },
  {
    "word": "rush hour",
    "pos": "n.phr.",
    "cn_def": "尖峰時段",
    "en_def": "the busy time when most people travel to or from work",
    "sentence": "A: What time should the movers bring the new office furniture to our building next Tuesday? B: Ask them to come after ten o'clock, because during {{BLANK}} the streets around here are full of cars and buses, and the truck would not be able to park near the entrance.",
    "cn": "A：搬家工人下週二應該幾點把新辦公家具送到我們大樓？ B：請他們十點以後再來，因為【尖峰時段】這附近的街道都擠滿了汽車和公車，卡車沒辦法停在入口附近。"
  },
  {
    "word": "ferry",
    "pos": "n.",
    "cn_def": "渡輪",
    "en_def": "a boat that carries people and vehicles across water",
    "sentence": "A: How are we going to get all the conference equipment to the hotel on the island next weekend? B: We will load everything into the van and take the morning {{BLANK}} from the harbor, which carries cars and passengers and takes about ninety minutes to cross.",
    "cn": "A：下週末我們要怎麼把所有會議器材送到島上的飯店？ B：我們會把所有東西裝上廂型車，搭早上從港口出發的【渡輪】，這班船載運汽車和乘客，渡海大約需要九十分鐘。"
  },
  {
    "word": "rapid-transit",
    "pos": "adj.",
    "cn_def": "快速大眾運輸的；捷運的",
    "en_def": "describing a fast city train system, such as a metro",
    "sentence": "A: Why are property prices rising so quickly in the area around our new branch office? B: The city is building a {{BLANK}} line that will connect the area to the airport and downtown in under thirty minutes, so many companies want to move there.",
    "cn": "A：為什麼我們新分公司周邊地區的房價漲得這麼快？ B：市政府正在興建一條【捷運】路線，將在三十分鐘內把這個地區連接到機場和市中心，所以很多公司都想搬到那裡。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時刻表",
    "en_def": "a list of times when buses, trains, etc. leave and arrive",
    "sentence": "A: I need to catch a bus to the client's factory this afternoon, but I'm not sure when the buses leave. B: You can check the {{BLANK}} on the bus company's app, which shows every departure time and even tells you if a bus is running late because of traffic.",
    "cn": "A：我今天下午需要搭公車去客戶的工廠，但我不確定公車幾點發車。 B：你可以在客運公司的應用程式上查看【時刻表】，上面顯示每一班的發車時間，甚至會告訴你公車是否因為塞車而誤點。"
  },
  {
    "word": "strictly",
    "pos": "adv.",
    "cn_def": "嚴格地",
    "en_def": "in a way that must be completely obeyed",
    "sentence": "A: Can I bring my coffee onto the train during my trip to the meeting in Taichung this afternoon? B: Eating and drinking are {{BLANK}} forbidden on the metro, but on the high-speed rail it is fine, so just finish your coffee before you enter the metro station.",
    "cn": "A：我今天下午去台中開會的路上，可以把咖啡帶上車嗎？ B：在捷運上飲食是【嚴格】禁止的，但在高鐵上沒問題，所以進捷運站之前先把咖啡喝完就好。"
  },
  {
    "word": "obvious",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "easy to see or understand",
    "sentence": "A: Why did the company decide to move our office from the suburbs to the building next to the main station? B: The reason is quite {{BLANK}}, because most employees were spending two hours a day in traffic, and now they can simply walk from the train to their desks.",
    "cn": "A：為什麼公司決定把我們的辦公室從郊區搬到主車站旁的大樓？ B：原因相當【明顯】，因為大多數員工每天要花兩個小時在交通上，現在他們下了火車直接走到座位就可以了。"
  },
  {
    "word": "incredibly",
    "pos": "adv.",
    "cn_def": "極其；非常",
    "en_def": "extremely; very much",
    "sentence": "A: How did you get from the airport to the hotel when you arrived in Seoul for the trade fair? B: I took the airport express train, which was {{BLANK}} fast and quiet, and it brought me to the city center in less than an hour for a very reasonable price.",
    "cn": "A：你到首爾參加貿易展時，是怎麼從機場到飯店的？ B：我搭了機場快線，它【非常】快速又安靜，以很合理的價格在不到一小時內把我送到市中心。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的；便利的",
    "en_def": "easy to use or get to; saving time",
    "sentence": "A: Why did you choose this hotel for the team training even though it is a little more expensive than the others? B: Its location is very {{BLANK}}, because it is right above a metro station, so everyone can arrive easily from different parts of the city without driving.",
    "cn": "A：為什麼你選這家飯店舉辦團隊訓練，即使它比其他飯店貴一點？ B：它的位置非常【方便】，因為就在捷運站正上方，所以每個人都可以從城市不同地區輕鬆抵達，不用開車。"
  },
  {
    "word": "invest",
    "pos": "v.",
    "cn_def": "投資",
    "en_def": "to spend money on something to make it better or earn more later",
    "sentence": "A: The newspaper says the government has a big plan for the railway network over the next ten years, so what is it about? B: They will {{BLANK}} billions of dollars in faster trains and new stations, which should create jobs and help businesses in smaller towns grow.",
    "cn": "A：報紙說政府對未來十年的鐵路網有一項重大計畫，內容是什麼？ B：他們將【投資】數十億元在更快的列車和新車站上，這應該能創造就業機會，並幫助小城鎮的企業成長。"
  },
  {
    "word": "evolve",
    "pos": "v.",
    "cn_def": "演變；發展",
    "en_def": "to change and develop slowly over time",
    "sentence": "A: Do you think the way people travel to work will change much in the next twenty years? B: I'm sure it will {{BLANK}} quickly, because electric buses, self-driving cars, and working from home are already changing how and when our employees travel each day.",
    "cn": "A：你認為未來二十年人們上班的交通方式會有很大的改變嗎？ B：我相信它會快速【演變】，因為電動公車、自動駕駛汽車和在家工作已經在改變我們員工每天出行的方式和時間。"
  }
];

const MCQS = [
  {
    "q": "The new airport buses have soft leather seats and extra legroom. Passengers say the ride is much more _____ than before.",
    "options": [
      "comfortable",
      "remote",
      "horrendous",
      "extended"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Thousands of cars enter the business district every morning. The city plans a new toll to reduce _____ on the main roads.",
    "options": [
      "architecture",
      "congestion",
      "improvement",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The morning trains are so _____ that many passengers cannot get on. The railway company will add more carriages next month.",
    "options": [
      "affordable",
      "convenient",
      "overcrowded",
      "iconic"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The committee discussed several routes for the new bus line. They _____ chose the one that serves the most office buildings.",
    "options": [
      "strictly",
      "incredibly",
      "rarely",
      "ultimately"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Visitors can ride the old-fashioned _____ along the harbor road. It runs on rails every ten minutes and costs only one dollar.",
    "options": [
      "ferry",
      "tram",
      "architecture",
      "congestion"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Many young workers cannot pay high taxi fares every day. The city offers _____ monthly passes for buses and trains.",
    "options": [
      "affordable",
      "horrendous",
      "overcrowded",
      "remote"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "During the music festival, the metro will run until three in the morning. These _____ hours will help visitors get home safely.",
    "options": [
      "obvious",
      "iconic",
      "punctual",
      "extended"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new _____ line runs beneath the old city center. Builders had to dig deep tunnels to avoid damaging historic buildings.",
    "options": [
      "remote",
      "affordable",
      "underground",
      "comfortable"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The research station is located in a _____ mountain area. Staff must take a small plane because there are no roads.",
    "options": [
      "remote",
      "punctual",
      "convenient",
      "impressive"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many employees _____ from nearby towns by train every day. The company gives them a travel allowance to cover the cost.",
    "options": [
      "invest",
      "commute",
      "diminish",
      "evolve"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "A heavy storm and two accidents made the traffic _____ last night. Some drivers spent four hours on a trip that usually takes one.",
    "options": [
      "affordable",
      "punctual",
      "horrendous",
      "comfortable"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Since the new trains arrived, passengers have noticed a big _____ in service. Delays have fallen by half this year.",
    "options": [
      "congestion",
      "schedule",
      "ferry",
      "improvement"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our engineer has worked overtime for three months on the rail project. Her manager suggested that she take some _____ next week.",
    "options": [
      "rush hour",
      "time off",
      "architecture",
      "congestion"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Experts expect road traffic to _____ after the new subway opens. Fewer people will need to drive to the city center.",
    "options": [
      "diminish",
      "commute",
      "invest",
      "evolve"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The red bridge has become the city's most _____ landmark. It appears on postcards, posters, and the airport's welcome signs.",
    "options": [
      "affordable",
      "punctual",
      "remote",
      "iconic"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The new station has a glass roof and a beautiful garden. Visitors from overseas often describe it as truly _____.",
    "options": [
      "punctual",
      "horrendous",
      "impressive",
      "affordable"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The museum near the harbor is famous for its unusual _____. Its curved walls and glass towers were designed by a well-known engineer.",
    "options": [
      "architecture",
      "congestion",
      "improvement",
      "schedule"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Swiss trains are known for being very _____. They almost always leave and arrive exactly on time.",
    "options": [
      "remote",
      "punctual",
      "overcrowded",
      "iconic"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Drivers no longer stop at the busy intersections downtown. The city built three _____ so that cars can cross above the traffic.",
    "options": [
      "underpasses",
      "ferries",
      "overpasses",
      "schedules"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Pedestrians can use the two _____ beneath the highway. They are well lit and have security cameras for safety.",
    "options": [
      "overpasses",
      "ferries",
      "trams",
      "underpasses"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The roads near our office are full of cars between seven and nine. Please avoid driving during _____ if you can.",
    "options": [
      "time off",
      "rush hour",
      "architecture",
      "improvement"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The island has no bridge or airport. Visitors must take a _____ from the harbor, which takes about two hours.",
    "options": [
      "ferry",
      "tram",
      "schedule",
      "congestion"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The city is building a new _____ system with fast trains every three minutes. It will link the airport with downtown.",
    "options": [
      "overcrowded",
      "horrendous",
      "remote",
      "rapid-transit"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Please check the train _____ before you leave for the airport. Some departure times have changed because of track repairs.",
    "options": [
      "architecture",
      "congestion",
      "schedule",
      "improvement"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Smoking is _____ prohibited in all stations and on every train. Passengers who break this rule must pay a large fine.",
    "options": [
      "strictly",
      "ultimately",
      "incredibly",
      "rarely"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "After the new bridge opened, the benefits were _____ to everyone. Travel times dropped from forty minutes to just ten.",
    "options": [
      "remote",
      "obvious",
      "punctual",
      "overcrowded"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The new high-speed train is _____ fast and quiet. It can carry passengers between the two cities in under an hour.",
    "options": [
      "strictly",
      "ultimately",
      "incredibly",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The hotel is very _____ for business travelers. It is located directly above a metro station and close to the convention center.",
    "options": [
      "horrendous",
      "remote",
      "overcrowded",
      "convenient"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The government plans to _____ two billion dollars in new railway lines. The project will create thousands of jobs in rural areas.",
    "options": [
      "commute",
      "invest",
      "diminish",
      "evolve"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Transportation technology continues to _____ quickly. Electric buses and self-driving cars may soon change how people travel to work.",
    "options": [
      "evolve",
      "invest",
      "commute",
      "diminish"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "comfortable": {
    "pos": "adj.",
    "en_def": "pleasant to use and making you feel relaxed",
    "cn_def": "舒適的"
  },
  "congestion": {
    "pos": "n.",
    "en_def": "too many vehicles on the road, so traffic moves slowly",
    "cn_def": "（交通）壅塞"
  },
  "overcrowded": {
    "pos": "adj.",
    "en_def": "having too many people in one place",
    "cn_def": "過度擁擠的"
  },
  "ultimately": {
    "pos": "adv.",
    "en_def": "in the end, after a long process",
    "cn_def": "最終；最後"
  },
  "tram": {
    "pos": "n.",
    "en_def": "an electric vehicle that runs on rails along city streets",
    "cn_def": "路面電車"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "cheap enough for most people to pay for",
    "cn_def": "負擔得起的；價格親民的"
  },
  "extended": {
    "pos": "adj.",
    "en_def": "made longer than usual",
    "cn_def": "延長的"
  },
  "underground": {
    "pos": "adj.",
    "en_def": "below the surface of the ground",
    "cn_def": "地下的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from towns and cities",
    "cn_def": "偏遠的"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work",
    "cn_def": "通勤"
  },
  "horrendous": {
    "pos": "adj.",
    "en_def": "extremely bad or unpleasant",
    "cn_def": "極糟的；可怕的"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better",
    "cn_def": "改善；進步"
  },
  "days off": {
    "pos": "n.phr.",
    "en_def": "days when you do not have to work",
    "cn_def": "休假日"
  },
  "time off": {
    "pos": "n.phr.",
    "en_def": "a period when you are allowed to be away from work",
    "cn_def": "休假；請假"
  },
  "diminish": {
    "pos": "v.",
    "en_def": "to become smaller or less",
    "cn_def": "減少；降低"
  },
  "iconic": {
    "pos": "adj.",
    "en_def": "very famous and seen as a symbol of a place",
    "cn_def": "具代表性的；標誌性的"
  },
  "impressive": {
    "pos": "adj.",
    "en_def": "very good, making people admire it",
    "cn_def": "令人印象深刻的"
  },
  "architecture": {
    "pos": "n.",
    "en_def": "the style and design of buildings",
    "cn_def": "建築風格；建築"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or leaving at the right time",
    "cn_def": "準時的"
  },
  "overpasses": {
    "pos": "n.",
    "en_def": "bridges that carry a road over another road",
    "cn_def": "天橋；高架道路"
  },
  "underpasses": {
    "pos": "n.",
    "en_def": "roads or paths that go under another road",
    "cn_def": "地下道"
  },
  "rush hour": {
    "pos": "n.phr.",
    "en_def": "the busy time when most people travel to or from work",
    "cn_def": "尖峰時段"
  },
  "ferry": {
    "pos": "n.",
    "en_def": "a boat that carries people and vehicles across water",
    "cn_def": "渡輪"
  },
  "rapid-transit": {
    "pos": "adj.",
    "en_def": "describing a fast city train system, such as a metro",
    "cn_def": "快速大眾運輸的；捷運的"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a list of times when buses, trains, etc. leave and arrive",
    "cn_def": "時刻表"
  },
  "strictly": {
    "pos": "adv.",
    "en_def": "in a way that must be completely obeyed",
    "cn_def": "嚴格地"
  },
  "obvious": {
    "pos": "adj.",
    "en_def": "easy to see or understand",
    "cn_def": "明顯的"
  },
  "incredibly": {
    "pos": "adv.",
    "en_def": "extremely; very much",
    "cn_def": "極其；非常"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or get to; saving time",
    "cn_def": "方便的；便利的"
  },
  "invest": {
    "pos": "v.",
    "en_def": "to spend money on something to make it better or earn more later",
    "cn_def": "投資"
  },
  "evolve": {
    "pos": "v.",
    "en_def": "to change and develop slowly over time",
    "cn_def": "演變；發展"
  }
};

const EXTRA_GLOSSES = {};
