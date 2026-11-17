// Topic 269 Quiz Data: Park 公園
// Source word list: https://www.examword.com/group-topic/park — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T269 - Park 公園",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸",
    "en_def": "to take air into your body and let it out again",
    "sentence": "A: Why do you walk to the riverside park during your lunch break instead of eating with the rest of the team in the cafeteria? B: After sitting in a crowded office all morning, I need to {{BLANK}} some fresh air and clear my head before the long afternoon meetings with our clients start.",
    "cn": "A：你為什麼午休時走到河濱公園，而不是和團隊其他人一起在員工餐廳吃飯？ B：在擁擠的辦公室坐了一整個早上後，我需要【呼吸】一些新鮮空氣、讓頭腦清醒一下，然後才開始下午和客戶的冗長會議。"
  },
  {
    "word": "aesthetic",
    "pos": "adj.",
    "cn_def": "美學的；美感的",
    "en_def": "relating to beauty and the way things look",
    "sentence": "A: Why did the city council choose that expensive design company to plan the new park next to the train station downtown? B: Their proposal had the best {{BLANK}} value, with beautiful flower gardens, curved walking paths, and modern lights that will make the whole area more attractive to visitors and local businesses.",
    "cn": "A：市議會為什麼選那家昂貴的設計公司來規劃市中心火車站旁的新公園？ B：他們的提案最具【美學】價值，有漂亮的花園、彎曲的步道和現代化的燈具，能讓整個區域對遊客和當地商家更有吸引力。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to relax after work or after feeling stressed",
    "sentence": "A: What do you usually do after a long day of answering customer complaints at the call center downtown? B: I usually take the bus to Central Park, sit on a quiet bench near the lake, and listen to music for an hour so I can {{BLANK}} before I go home and cook dinner.",
    "cn": "A：你在市中心客服中心處理了一整天的客訴後，通常會做什麼？ B：我通常搭公車去中央公園，坐在湖邊一張安靜的長椅上聽一小時的音樂，好讓自己【放鬆】，然後再回家煮晚餐。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "A: Why is the north side of the park closed to visitors this month, even though the weather has been perfect for walking? B: The park managers are protecting the natural {{BLANK}} of several rare birds that build their nests there in spring, so they asked the public to stay away until the young birds can fly.",
    "cn": "A：為什麼這個月公園北側不開放給遊客，即使天氣非常適合散步？ B：公園管理人員正在保護幾種稀有鳥類的天然【棲息地】，牠們春天會在那裡築巢，所以他們請民眾在幼鳥會飛之前不要靠近。"
  },
  {
    "word": "physical",
    "pos": "adj.",
    "cn_def": "身體的",
    "en_def": "relating to the body",
    "sentence": "A: Why does our company pay for employees to join the weekend walking club in the park near the office? B: The human resources manager believes that regular {{BLANK}} activity reduces stress and sick days, so she organized the club and offers small prizes to staff members who attend every Saturday morning.",
    "cn": "A：為什麼公司要出錢讓員工參加辦公室附近公園的週末健走社？ B：人資經理認為規律的【身體】活動能減少壓力和病假天數，所以她成立了這個社團，並送小獎品給每個星期六早上都出席的員工。"
  },
  {
    "word": "mental",
    "pos": "adj.",
    "cn_def": "心理的；精神的",
    "en_def": "relating to the mind",
    "sentence": "A: Why did the city decide to build more green spaces and small parks between the office towers in the business district? B: Studies showed that office workers who spend time near trees and water have better {{BLANK}} health, so city leaders hope the parks will help people feel calmer and work more effectively.",
    "cn": "A：為什麼市政府決定在商業區的辦公大樓之間建造更多綠地和小公園？ B：研究顯示，花時間待在樹木和水邊的上班族有較好的【心理】健康，所以市府領導人希望這些公園能幫助人們感到更平靜、工作更有效率。"
  },
  {
    "word": "well-being",
    "pos": "n.",
    "cn_def": "幸福；身心健康",
    "en_def": "the state of being healthy and happy",
    "sentence": "A: Why is the hotel adding a small garden with walking paths and benches behind the main building this year? B: The general manager says that guests and staff both need a peaceful place to rest, and she believes the garden will improve everyone's {{BLANK}} and lead to better reviews online.",
    "cn": "A：飯店今年為什麼要在主建築後面增加一座有步道和長椅的小花園？ B：總經理說房客和員工都需要一個安靜休息的地方，她相信這座花園能提升大家的【身心健康】，並帶來更好的網路評價。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施；場所",
    "en_def": "a building or place used for a particular activity",
    "sentence": "A: Before we choose the location for the company picnic next month, can you tell me what the riverside park offers? B: It has a large sports {{BLANK}} with basketball courts and clean restrooms, and there is also a covered area where we can set up tables in case it rains that afternoon.",
    "cn": "A：在我們選定下個月公司野餐的地點之前，你可以告訴我河濱公園有什麼嗎？ B：那裡有一座大型運動【設施】，有籃球場和乾淨的洗手間，還有一個有遮蔽的區域，萬一那天下午下雨，我們可以在那裡擺桌子。"
  },
  {
    "word": "jog",
    "pos": "v.",
    "cn_def": "慢跑",
    "en_def": "to run slowly for exercise",
    "sentence": "A: How do you stay so energetic during our busy sales season when everyone else in the department looks so tired? B: Every morning before work, I {{BLANK}} around the park near my apartment for about thirty minutes, and then I take a quick shower and eat a healthy breakfast before catching the train.",
    "cn": "A：在忙碌的銷售旺季，部門其他人都看起來很累，你怎麼還能保持那麼有活力？ B：每天早上上班前，我會在公寓附近的公園【慢跑】大約三十分鐘，然後快速沖個澡、吃一頓健康的早餐，再去搭火車。"
  },
  {
    "word": "amusement",
    "pos": "n.",
    "cn_def": "娛樂；消遣",
    "en_def": "enjoyment and entertainment",
    "sentence": "A: Where are we taking the visiting clients and their children on Saturday afternoon after the factory tour is finished? B: The marketing director booked tickets to the new {{BLANK}} park outside the city, which has roller coasters, water rides, and several restaurants, so both the adults and the kids will have a good time.",
    "cn": "A：星期六下午工廠參觀結束後，我們要帶來訪的客戶和他們的孩子去哪裡？ B：行銷總監訂了城外新開的【遊樂】園門票，那裡有雲霄飛車、水上設施和好幾家餐廳，所以大人和小孩都會玩得很開心。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景；景色",
    "en_def": "the natural features of a place, such as hills, lakes and trees",
    "sentence": "A: Why did the travel agency raise the price of the mountain park tour that we offered to our customers last year? B: They added a cable car ride to the top of the hill, where visitors can enjoy beautiful {{BLANK}} of the lakes and forests, and they also included a lunch at a famous local restaurant.",
    "cn": "A：旅行社為什麼調高去年我們提供給客戶的山區公園行程價格？ B：他們增加了搭纜車上山頂的行程，遊客可以在那裡欣賞湖泊和森林的美麗【風景】，而且還包含在一家知名當地餐廳的午餐。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗；經歷",
    "en_def": "something that happens to you; knowledge gained by doing something",
    "sentence": "A: Did the new employees enjoy the team-building day that the training department organized at the national park last Friday? B: Yes, most of them said it was a wonderful {{BLANK}}, because they hiked together, cooked lunch over a fire, and got to know colleagues from other departments whom they had never met before.",
    "cn": "A：新進員工喜歡上週五訓練部門在國家公園舉辦的團隊建立活動嗎？ B：是的，大部分人都說那是一次很棒的【經驗】，因為他們一起健行、用火煮午餐，還認識了以前從沒見過的其他部門同事。"
  },
  {
    "word": "escape",
    "pos": "v.",
    "cn_def": "逃離；逃避",
    "en_def": "to get away from something unpleasant",
    "sentence": "A: Why are so many office workers sitting by the fountain in the small park across the street at lunchtime today? B: It's the hottest day of the summer, and the shade of the tall trees helps them {{BLANK}} the heat and noise of the busy streets for a little while before they return to their desks.",
    "cn": "A：為什麼今天午餐時間有這麼多上班族坐在對街小公園的噴水池邊？ B：今天是夏天最熱的一天，高大樹木的樹蔭能幫他們暫時【逃離】炎熱和繁忙街道的噪音，然後再回到辦公桌前。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群；人潮",
    "en_def": "a large group of people in one place",
    "sentence": "A: Should we hold the product launch event in the city park on Sunday afternoon, or would an indoor hall be better? B: The park is a great choice, but there is a free music festival there that weekend, so a huge {{BLANK}} will be there and our guests may have trouble finding parking.",
    "cn": "A：我們應該在星期日下午的市立公園舉辦產品發表會，還是室內會場比較好？ B：公園是很好的選擇，但那個週末那裡有免費音樂節，所以會有一大群【人潮】，我們的來賓可能很難找到停車位。"
  },
  {
    "word": "hustle",
    "pos": "n.",
    "cn_def": "喧囂；忙亂",
    "en_def": "busy and noisy activity",
    "sentence": "A: Why did you move your design studio from downtown to the small town near the national park last year? B: I was tired of the {{BLANK}} and bustle of the city, and I found that I could think more creatively and finish projects faster in a quiet place surrounded by trees and mountains.",
    "cn": "A：你去年為什麼把設計工作室從市中心搬到國家公園附近的小鎮？ B：我厭倦了城市的【喧囂】與忙碌，而且我發現待在被樹木和山脈環繞的安靜地方，我能更有創意地思考，也能更快完成案子。"
  },
  {
    "word": "bustle",
    "pos": "n.",
    "cn_def": "熙攘；忙碌",
    "en_def": "busy, noisy activity with many people moving around",
    "sentence": "A: What do you like most about working at the café next to the busy city park near the central train station? B: I enjoy the {{BLANK}} of the morning rush, when office workers, joggers, and tourists all come in at the same time for coffee, because the time passes quickly and I meet many interesting people.",
    "cn": "A：在中央火車站附近、熱鬧的市立公園旁的咖啡店工作，你最喜歡的是什麼？ B：我喜歡早晨尖峰時段的【熙攘忙碌】，上班族、慢跑者和觀光客都同時進來買咖啡，因為時間過得很快，而且我會遇到很多有趣的人。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維護；保養",
    "en_def": "to keep something in good condition",
    "sentence": "A: Why does the city charge a small entrance fee for the botanical park when most other parks downtown are free? B: The money helps the city hire gardeners and {{BLANK}} the greenhouses, walking paths, and public restrooms, which are expensive to repair because thousands of visitors use them every week.",
    "cn": "A：為什麼市政府對植物公園收取小額門票，而市中心大多數其他公園都是免費的？ B：這筆錢幫助市府雇用園丁，並【維護】溫室、步道和公共廁所，因為每週有數千名遊客使用，修理起來很昂貴。"
  },
  {
    "word": "metropolis",
    "pos": "n.",
    "cn_def": "大都市",
    "en_def": "a very large and busy city",
    "sentence": "A: Is it true that our company is opening a new branch office in Tokyo next spring instead of a smaller city? B: Yes, management wants to be in a busy {{BLANK}} with millions of customers, and they chose an office building right next to a large park so that employees can relax during breaks.",
    "cn": "A：公司明年春天要在東京開新分公司，而不是在比較小的城市，是真的嗎？ B：是的，管理階層想進駐一個擁有數百萬顧客的繁忙【大都市】，他們選了一棟就在大公園旁邊的辦公大樓，讓員工休息時能放鬆。"
  },
  {
    "word": "state-owned",
    "pos": "adj.",
    "cn_def": "國有的；公營的",
    "en_def": "owned and controlled by the government",
    "sentence": "A: Who is responsible for cleaning the large park beside the river, the city government or a private company? B: The land is {{BLANK}}, so the national government pays for the cleaning, but last year it hired a private company to manage the gardens, the parking lot, and the visitor center.",
    "cn": "A：誰負責清潔河邊那座大公園，是市政府還是民間公司？ B：那塊土地是【國有的】，所以由中央政府支付清潔費，但去年政府雇用了一家民間公司來管理花園、停車場和遊客中心。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space",
    "sentence": "A: Why do you think the family picnic for our employees should be held at Riverside Park instead of the hotel garden? B: Riverside Park has a {{BLANK}} lawn where the children can run and play games safely, and there are enough picnic tables for all two hundred guests, which the hotel garden does not have.",
    "cn": "A：你為什麼認為員工家庭野餐應該在河濱公園舉辦，而不是飯店花園？ B：河濱公園有一片【寬敞的】草坪，孩子們可以安全地跑步和玩遊戲，而且有足夠容納兩百位來賓的野餐桌，這是飯店花園沒有的。"
  },
  {
    "word": "concrete jungle",
    "pos": "n.phr.",
    "cn_def": "水泥叢林",
    "en_def": "a city area with many tall buildings and very few trees or parks",
    "sentence": "A: Why did the city council approve the plan to turn the old parking lot downtown into a public park with trees and flowers? B: Many residents complained that the business district had become a {{BLANK}} with no green spaces, so the council decided that more plants would make the area more pleasant.",
    "cn": "A：市議會為什麼批准把市中心舊停車場改建成有樹木和花卉的公共公園的計畫？ B：許多居民抱怨商業區已經變成一座沒有綠地的【水泥叢林】，所以議會決定更多的植物會讓這個區域更宜人。"
  },
  {
    "word": "skyscraper",
    "pos": "n.",
    "cn_def": "摩天大樓",
    "en_def": "a very tall building in a city",
    "sentence": "A: Why is the view from your new office so much better than the view from the old one on the fifth floor? B: We moved to the fortieth floor of a new {{BLANK}} downtown, and from my window I can see the whole city park, the river, and even the mountains on a clear day.",
    "cn": "A：為什麼你新辦公室的視野比原本五樓的舊辦公室好那麼多？ B：我們搬到市中心一棟新【摩天大樓】的四十樓，從我的窗戶可以看到整座市立公園、河流，天氣晴朗時甚至能看到山。"
  },
  {
    "word": "erected",
    "pos": "v.",
    "cn_def": "豎立；建造（erect 的過去分詞）",
    "en_def": "built or put up (a statue, building or sign); past form of erect",
    "sentence": "A: Have you seen the new bronze statue near the main gate of the park where we usually eat our lunch on Fridays? B: Yes, it was {{BLANK}} last month to honor the company founder who donated the land, and the city held a small ceremony there with speeches and live music.",
    "cn": "A：你看過公園正門附近那座新的銅像了嗎？我們星期五通常在那個公園吃午餐。 B：看過了，它是上個月【豎立】的，用來紀念捐出那塊土地的公司創辦人，市政府還在那裡舉辦了一場有演講和現場音樂的小型典禮。"
  },
  {
    "word": "mandate",
    "pos": "n.",
    "cn_def": "命令；授權",
    "en_def": "an official order or permission to do something",
    "sentence": "A: Why are all the new office buildings in this district required to include a small public garden or park on their property? B: The city government issued a {{BLANK}} last year that requires every large development to provide green space for the public, and builders who ignore it must pay a heavy fine.",
    "cn": "A：為什麼這個區所有新辦公大樓都被要求在基地內設置小型公共花園或公園？ B：市政府去年發布了一項【命令】，要求每個大型開發案都要提供公共綠地，忽視這項規定的建商必須繳交高額罰款。"
  },
  {
    "word": "primary",
    "pos": "adj.",
    "cn_def": "主要的",
    "en_def": "main; most important",
    "sentence": "A: What was the main reason the company chose this location for its new headquarters, given that the rent is quite high? B: The {{BLANK}} reason was the large park next door, because the CEO wanted employees to have a healthy place to walk, and it also impresses clients who visit our offices.",
    "cn": "A：既然租金相當高，公司選擇這個地點作為新總部的主要原因是什麼？ B：【主要】原因是隔壁的大公園，因為執行長希望員工有一個健康的散步場所，而且這也能讓來訪的客戶留下好印象。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；舉辦",
    "en_def": "to hold and organize an event",
    "sentence": "A: Is the city planning anything special for the national holiday weekend at the new waterfront park near our hotel? B: Yes, the city will {{BLANK}} a food festival and an outdoor concert there on Saturday night, so we should expect many more guests and add extra staff to the front desk and restaurant.",
    "cn": "A：市政府在國定假日週末有沒有在我們飯店附近的新濱水公園規劃什麼特別活動？ B：有，市政府星期六晚上會在那裡【主辦】美食節和戶外音樂會，所以我們應該預期會有更多房客，並在櫃台和餐廳增加人手。"
  },
  {
    "word": "commemorate",
    "pos": "v.",
    "cn_def": "紀念",
    "en_def": "to do something special to honor and remember an important person or event",
    "sentence": "A: Why is the city building a new garden with a fountain and a stone wall in the middle of the old park downtown? B: The mayor wants to {{BLANK}} the hundredth anniversary of the city's founding, so the wall will show photos and stories about the people who helped build the town.",
    "cn": "A：市政府為什麼要在市中心老公園的中央建造一座有噴泉和石牆的新花園？ B：市長想要【紀念】建城一百週年，所以那面牆會展示幫助建設城鎮的人們的照片和故事。"
  },
  {
    "word": "emit",
    "pos": "v.",
    "cn_def": "排放；發出",
    "en_def": "to send out gas, heat, light or sound",
    "sentence": "A: Why does the park management only allow electric shuttle buses to carry visitors from the parking lot to the lake? B: Gas-powered buses {{BLANK}} smoke and harmful gases that damage the plants and bother the animals, so the park switched to electric buses to keep the air clean for everyone.",
    "cn": "A：為什麼公園管理處只允許電動接駁車載遊客從停車場到湖邊？ B：燃油巴士會【排放】廢氣和有害氣體，損害植物並干擾動物，所以公園改用電動巴士，為所有人保持空氣清新。"
  }
];

const MCQS = [
  {
    "q": "The new factory has a modern air filter system. Workers can now _____ clean air even on the busiest production days.",
    "options": [
      "breathe",
      "host",
      "emit",
      "commemorate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The architect added glass walls and indoor plants to the lobby. These changes improved the _____ appeal of the whole building.",
    "options": [
      "state-owned",
      "aesthetic",
      "mental",
      "spacious"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "After the busy trade show, the sales team went to a quiet hot spring resort. They needed a weekend to _____ before returning to work.",
    "options": [
      "emit",
      "commemorate",
      "unwind",
      "host"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The construction company changed its plans for the new shopping mall. Building near the wetland would have destroyed the _____ of many rare birds.",
    "options": [
      "mandate",
      "bustle",
      "amusement",
      "habitat"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All new warehouse employees must pass a _____ examination before they start work. The job requires lifting heavy boxes for several hours.",
    "options": [
      "aesthetic",
      "physical",
      "state-owned",
      "spacious"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Our company now offers free counseling sessions for all staff. Managers believe that good _____ health leads to better performance at work.",
    "options": [
      "mental",
      "spacious",
      "aesthetic",
      "state-owned"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new office design includes standing desks and a rooftop garden. Management hopes these changes will improve the _____ of all employees.",
    "options": [
      "metropolis",
      "skyscraper",
      "hustle",
      "well-being"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The hotel recently opened a new fitness _____ on the third floor. Guests can use the gym and pool free of charge.",
    "options": [
      "scenery",
      "crowd",
      "facility",
      "mandate"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The doctor advised the manager to exercise more often. He now plans to _____ along the river for twenty minutes every morning.",
    "options": [
      "jog",
      "emit",
      "host",
      "commemorate"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The new _____ park outside the city will open next summer. It is expected to create more than five hundred local jobs.",
    "options": [
      "habitat",
      "mandate",
      "amusement",
      "metropolis"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The hotel rooms on the top floor cost more than the others. Guests pay extra to enjoy the mountain _____ from their balconies.",
    "options": [
      "mandate",
      "scenery",
      "bustle",
      "well-being"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Applicants for the park ranger position should have at least two years of _____. Knowledge of local plants and animals is also helpful.",
    "options": [
      "metropolis",
      "skyscraper",
      "habitat",
      "experience"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many city residents drive to the countryside on weekends. They want to _____ the noise and pollution of downtown for a while.",
    "options": [
      "breathe",
      "host",
      "escape",
      "emit"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The opening ceremony of the new shopping center attracted a large _____. Security guards were hired to keep visitors safe and orderly.",
    "options": [
      "crowd",
      "habitat",
      "mandate",
      "scenery"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Many workers move to the countryside after retirement. They want to leave the _____ and bustle of the city behind them.",
    "options": [
      "amusement",
      "habitat",
      "metropolis",
      "hustle"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Shop owners near the station enjoy the morning _____ of commuters. Busy streets usually mean more customers for their small businesses.",
    "options": [
      "habitat",
      "bustle",
      "mandate",
      "well-being"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The building management company is responsible for repairing the elevators. It must also _____ the gardens and parking areas around the property.",
    "options": [
      "maintain",
      "emit",
      "breathe",
      "commemorate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Shanghai has grown into a busy _____ with more than twenty million residents. Many international companies have opened offices there.",
    "options": [
      "habitat",
      "amusement",
      "mandate",
      "metropolis"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The railway company is _____, so the government sets the ticket prices. Private companies cannot run trains on these lines.",
    "options": [
      "aesthetic",
      "state-owned",
      "mental",
      "spacious"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The new conference room is very _____ and can hold up to two hundred people. It also has the latest audio equipment.",
    "options": [
      "state-owned",
      "mental",
      "spacious",
      "physical"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new mayor promised to plant ten thousand trees downtown. She said the city should no longer feel like a _____.",
    "options": [
      "well-being",
      "habitat",
      "mandate",
      "concrete jungle"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The company rents three floors in a sixty-story _____ downtown. Its offices have a wonderful view of the harbor.",
    "options": [
      "skyscraper",
      "habitat",
      "scenery",
      "bustle"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A large tent was _____ in the hotel garden for the wedding reception. It protected the guests from the strong afternoon sun.",
    "options": [
      "emitted",
      "breathed",
      "erected",
      "commemorated"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The new law gives the environmental agency a clear _____ to protect city parks. Developers must now get approval before cutting down trees.",
    "options": [
      "bustle",
      "mandate",
      "scenery",
      "amusement"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Reducing traffic in the city center is the _____ goal of the new bicycle plan. Officials also hope it will improve air quality.",
    "options": [
      "spacious",
      "state-owned",
      "mental",
      "primary"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Our hotel will _____ the international trade conference next March. More than three thousand business leaders are expected to attend.",
    "options": [
      "host",
      "emit",
      "unwind",
      "breathe"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The company will plant fifty trees in the city park next month. The event will _____ the fiftieth anniversary of its founding.",
    "options": [
      "emit",
      "commemorate",
      "unwind",
      "jog"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The new delivery trucks run on electricity instead of diesel. They _____ no harmful gases while they travel around the city.",
    "options": [
      "unwind",
      "jog",
      "emit",
      "host"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The city plans to build a new recycling _____ near the industrial park. It will process tons of plastic and paper every day.",
    "options": [
      "facility",
      "crowd",
      "scenery",
      "hustle"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Volunteers help the park staff _____ the walking trails every spring. They remove fallen branches and repair damaged signs.",
    "options": [
      "emit",
      "commemorate",
      "unwind",
      "maintain"
    ],
    "answer": 3,
    "vocabIndex": 16
  }
];

const LOOKUP = {
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into your body and let it out again",
    "cn_def": "呼吸"
  },
  "aesthetic": {
    "pos": "adj.",
    "en_def": "relating to beauty and the way things look",
    "cn_def": "美學的；美感的"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after work or after feeling stressed",
    "cn_def": "放鬆"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲息地"
  },
  "physical": {
    "pos": "adj.",
    "en_def": "relating to the body",
    "cn_def": "身體的"
  },
  "mental": {
    "pos": "adj.",
    "en_def": "relating to the mind",
    "cn_def": "心理的；精神的"
  },
  "well-being": {
    "pos": "n.",
    "en_def": "the state of being healthy and happy",
    "cn_def": "幸福；身心健康"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or place used for a particular activity",
    "cn_def": "設施；場所"
  },
  "jog": {
    "pos": "v.",
    "en_def": "to run slowly for exercise",
    "cn_def": "慢跑"
  },
  "amusement": {
    "pos": "n.",
    "en_def": "enjoyment and entertainment",
    "cn_def": "娛樂；消遣"
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural features of a place, such as hills, lakes and trees",
    "cn_def": "風景；景色"
  },
  "experience": {
    "pos": "n.",
    "en_def": "something that happens to you; knowledge gained by doing something",
    "cn_def": "經驗；經歷"
  },
  "escape": {
    "pos": "v.",
    "en_def": "to get away from something unpleasant",
    "cn_def": "逃離；逃避"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large group of people in one place",
    "cn_def": "人群；人潮"
  },
  "hustle": {
    "pos": "n.",
    "en_def": "busy and noisy activity",
    "cn_def": "喧囂；忙亂"
  },
  "bustle": {
    "pos": "n.",
    "en_def": "busy, noisy activity with many people moving around",
    "cn_def": "熙攘；忙碌"
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to keep something in good condition",
    "cn_def": "維護；保養"
  },
  "metropolis": {
    "pos": "n.",
    "en_def": "a very large and busy city",
    "cn_def": "大都市"
  },
  "state-owned": {
    "pos": "adj.",
    "en_def": "owned and controlled by the government",
    "cn_def": "國有的；公營的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space",
    "cn_def": "寬敞的"
  },
  "concrete jungle": {
    "pos": "n.phr.",
    "en_def": "a city area with many tall buildings and very few trees or parks",
    "cn_def": "水泥叢林"
  },
  "skyscraper": {
    "pos": "n.",
    "en_def": "a very tall building in a city",
    "cn_def": "摩天大樓"
  },
  "erected": {
    "pos": "v.",
    "en_def": "built or put up (a statue, building or sign); past form of erect",
    "cn_def": "豎立；建造（erect 的過去分詞）"
  },
  "mandate": {
    "pos": "n.",
    "en_def": "an official order or permission to do something",
    "cn_def": "命令；授權"
  },
  "primary": {
    "pos": "adj.",
    "en_def": "main; most important",
    "cn_def": "主要的"
  },
  "host": {
    "pos": "v.",
    "en_def": "to hold and organize an event",
    "cn_def": "主辦；舉辦"
  },
  "commemorate": {
    "pos": "v.",
    "en_def": "to do something special to honor and remember an important person or event",
    "cn_def": "紀念"
  },
  "emit": {
    "pos": "v.",
    "en_def": "to send out gas, heat, light or sound",
    "cn_def": "排放；發出"
  }
};

const EXTRA_GLOSSES = {};
