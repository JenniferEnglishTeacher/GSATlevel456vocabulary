// Topic 44 Quiz Data: Car 汽車
// Source word list: https://www.examword.com/group-topic/car — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T44 - Car 汽車",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "vehicle",
    "pos": "n.",
    "cn_def": "車輛",
    "en_def": "a machine such as a car, bus or truck that carries people or goods",
    "sentence": "A: Our sales team will visit five clients in the countryside next week, and the roads there are narrow and muddy, so which company car should we book? B: I suggest the large {{BLANK}} with four-wheel drive, because it can carry all six of us and our sample boxes without any trouble on those rough mountain roads.",
    "cn": "A：我們業務團隊下週要拜訪鄉下的五位客戶，那裡的道路又窄又泥濘，我們該預訂哪一輛公司車？ B：我建議那台四輪驅動的大型【車輛】，因為它可以載我們六個人和樣品箱，在崎嶇的山路上也不會有任何問題。"
  },
  {
    "word": "engine",
    "pos": "n.",
    "cn_def": "引擎",
    "en_def": "the part of a car that makes the power to move it",
    "sentence": "A: The delivery van made a loud knocking noise this morning when I started it, and then it stopped twice on the highway, so what do you think is wrong? B: The mechanic checked it at lunchtime and said the {{BLANK}} is overheating because it has not had fresh oil for almost a year.",
    "cn": "A：今天早上我發動送貨車時它發出很大的敲擊聲，接著在高速公路上熄火了兩次，你覺得是哪裡出了問題？ B：技師午餐時間檢查過了，他說【引擎】過熱，因為它將近一年沒換新機油了。"
  },
  {
    "word": "fuel",
    "pos": "n.",
    "cn_def": "燃料",
    "en_def": "something such as gas or oil that is burned to give power",
    "sentence": "A: The trip to the trade fair in Kaohsiung is about four hours by car, so how often do you think we will need to stop on the way? B: The tank holds enough {{BLANK}} for around six hundred kilometers, so we should only need one short stop, and we can buy coffee and snacks at the same time.",
    "cn": "A：開車去高雄的商展大約要四個小時，你覺得我們路上需要停幾次？ B：油箱裡的【燃料】足夠跑大約六百公里，所以我們應該只需要短暫停一次，同時還可以買咖啡和點心。"
  },
  {
    "word": "petrol",
    "pos": "n.",
    "cn_def": "汽油",
    "en_def": "the British word for gasoline, the liquid fuel for cars",
    "sentence": "A: The company is paying for our travel expenses during the sales tour around the island, so do I need to keep every receipt from the gas station? B: Yes, please keep them all, because the accounting department will only pay you back for the {{BLANK}} if you attach the original receipts to your expense report.",
    "cn": "A：公司會支付我們環島業務之旅的差旅費，那我需要保留加油站的每一張收據嗎？ B：是的，請全部保留，因為只有你在費用報告上附上收據正本，會計部才會退還你的【汽油】費用。"
  },
  {
    "word": "diesel",
    "pos": "n.",
    "cn_def": "柴油",
    "en_def": "a heavy fuel used in many trucks, buses and some cars",
    "sentence": "A: Our moving company is planning to replace the old trucks next year, so are you going to choose the same type of fuel as before or try something different? B: We will probably stay with {{BLANK}} for the heavy trucks because it gives them more power on long trips, but the small vans may become fully electric.",
    "cn": "A：我們搬家公司打算明年汰換舊卡車，你們會選擇和以前一樣的燃料，還是嘗試不同的？ B：重型卡車我們可能會繼續用【柴油】，因為它在長途行駛時提供更大的動力，但小型廂型車可能會全面改為電動。"
  },
  {
    "word": "electric",
    "pos": "adj.",
    "cn_def": "電動的",
    "en_def": "using electricity for power",
    "sentence": "A: The city government is offering money to companies that reduce air pollution this year, so should we think about changing the vehicles we use for deliveries? B: That is a great idea, because an {{BLANK}} van does not need gasoline, it is much quieter in busy streets, and charging it overnight at the warehouse is quite cheap.",
    "cn": "A：市政府今年提供補助給減少空氣汙染的公司，我們是否該考慮更換送貨用的車輛？ B：這是個好主意，因為【電動】廂型車不需要汽油，在繁忙的街道上安靜得多，而且晚上在倉庫充電也相當便宜。"
  },
  {
    "word": "battery",
    "pos": "n.",
    "cn_def": "電瓶；電池",
    "en_def": "an object that stores electricity to start a car or run a machine",
    "sentence": "A: I tried to start my car in the parking lot after the late meeting last night, but nothing happened at all, even though the lights had been switched off. B: That usually means the {{BLANK}} is dead, so you should ask a coworker to help you with jump leads or call the roadside assistance number.",
    "cn": "A：昨晚開完很晚的會後，我在停車場想發動車子，但完全沒反應，雖然車燈都已經關掉了。 B：那通常表示【電瓶】沒電了，你應該請同事用救車線幫忙，或打道路救援電話。"
  },
  {
    "word": "brake",
    "pos": "v.",
    "cn_def": "煞車",
    "en_def": "to make a vehicle slow down or stop",
    "sentence": "A: When you were driving the company van down that steep hill in the rain yesterday afternoon, did you notice anything strange about how it handled the road? B: Yes, I had to {{BLANK}} much harder than usual to slow down before the traffic lights, so I think the pedals need to be checked as soon as possible.",
    "cn": "A：昨天下午你在雨中開公司廂型車下那個陡坡時，有沒有注意到車子的操控有什麼奇怪的地方？ B：有，我必須比平常更用力【煞車】才能在紅綠燈前減速，所以我認為踏板需要盡快檢查。"
  },
  {
    "word": "accelerate",
    "pos": "v.",
    "cn_def": "加速",
    "en_def": "to make a vehicle go faster",
    "sentence": "A: I am a little nervous about driving on the highway for the first time with my new job, so do you have any advice for joining the fast lane? B: When you enter from the ramp, you need to {{BLANK}} smoothly until you match the speed of the other cars, and always check your mirrors before you change lanes.",
    "cn": "A：新工作讓我第一次要開上高速公路，我有點緊張，你對切入快車道有什麼建議嗎？ B：從匝道進入時，你需要平穩地【加速】直到跟上其他車的速度，而且變換車道前一定要看後照鏡。"
  },
  {
    "word": "steer",
    "pos": "v.",
    "cn_def": "駕駛；操控方向",
    "en_def": "to control the direction a vehicle goes",
    "sentence": "A: The rental company gave us a very large van for moving the office furniture this weekend, and I have only ever driven small cars, so is it difficult? B: It is not too bad, but you must {{BLANK}} slowly and carefully around corners, because the back of the van needs much more space than you might expect.",
    "cn": "A：租車公司給了我們一台很大的廂型車，這週末用來搬辦公室家具，而我只開過小車，這會很難嗎？ B：還好，但轉彎時你必須慢慢地、小心地【操控方向】，因為廂型車的後半部需要的空間比你想像的多得多。"
  },
  {
    "word": "wheel",
    "pos": "n.",
    "cn_def": "車輪",
    "en_def": "one of the round parts under a car that turn so it can move",
    "sentence": "A: Why did the delivery driver arrive almost two hours late this afternoon when the customer had been waiting since lunch? B: He said a nail went through one of the front tires on the highway, so he had to stop at the side of the road and change the {{BLANK}} by himself before he could continue.",
    "cn": "A：客戶從午餐時間就在等，為什麼送貨司機今天下午遲到將近兩個小時？ B：他說在高速公路上有根釘子刺穿了一個前輪胎，所以他得停在路邊自己換【車輪】才能繼續上路。"
  },
  {
    "word": "tire",
    "pos": "n.",
    "cn_def": "輪胎",
    "en_def": "the rubber ring around a wheel that is filled with air",
    "sentence": "A: The company minibus feels a bit unsteady when I drive it at high speed on the highway, and it seems to pull to the left, so what should I do? B: One {{BLANK}} probably does not have enough air in it, so stop at the next gas station and check the pressure on all four before you drive any further.",
    "cn": "A：我在高速公路上高速駕駛公司的小巴時感覺有點不穩，而且好像會往左偏，我該怎麼辦？ B：可能有一個【輪胎】氣不足，所以在下一個加油站停下來，四個都檢查胎壓後再繼續開。"
  },
  {
    "word": "seat",
    "pos": "n.",
    "cn_def": "座位",
    "en_def": "a place where a person sits in a vehicle",
    "sentence": "A: I am driving three clients from the airport to the hotel tonight, and one of them is quite tall, so how can I make the trip more pleasant for him? B: Offer him the front passenger {{BLANK}}, because it has the most room for his legs, and he can enjoy the view of the city lights on the way.",
    "cn": "A：我今晚要開車載三位客戶從機場到飯店，其中一位個子很高，我該怎麼讓他的車程更舒服？ B：讓他坐前面的副駕駛【座位】，因為那裡的腿部空間最大，而且他可以沿途欣賞城市的燈光。"
  },
  {
    "word": "seatbelt",
    "pos": "n.",
    "cn_def": "安全帶",
    "en_def": "a belt in a car that holds you in your seat for safety",
    "sentence": "A: Our new driving rules for staff say that everyone in a company car must follow certain safety steps, so what is the most important one? B: Before the car moves, the driver must make sure that every passenger, including those in the back, has fastened their {{BLANK}}, because it can save lives in an accident.",
    "cn": "A：我們新的員工駕駛規定說，每個坐公司車的人都必須遵守某些安全步驟，最重要的是哪一個？ B：車子開動前，司機必須確認每位乘客，包括後座的人，都已經繫好【安全帶】，因為發生事故時它能救命。"
  },
  {
    "word": "dashboard",
    "pos": "n.",
    "cn_def": "儀表板",
    "en_def": "the panel in front of the driver that shows speed, fuel and other information",
    "sentence": "A: While I was driving to the branch office this morning, a small orange light suddenly came on in front of me, and I wasn't sure whether it was serious. B: If a warning light appears on the {{BLANK}}, you should check the owner's manual right away, because it might mean the engine oil is low.",
    "cn": "A：今天早上我開車去分公司時，面前突然亮起一個橘色小燈，我不確定是否嚴重。 B：如果【儀表板】上出現警示燈，你應該立刻查看車主手冊，因為那可能表示引擎機油不足。"
  },
  {
    "word": "mirror",
    "pos": "n.",
    "cn_def": "後照鏡",
    "en_def": "a piece of glass in a car that lets the driver see behind or beside",
    "sentence": "A: I almost hit a motorcycle when I was turning right into the hotel entrance yesterday, and I still feel shaken about it, so what went wrong? B: Before you turn or change lanes, always look in the side {{BLANK}} and also turn your head, because motorcycles can hide in places you cannot easily see.",
    "cn": "A：我昨天右轉進飯店入口時差點撞到一台機車，到現在還心有餘悸，是哪裡出了錯？ B：轉彎或變換車道前，一定要看側邊【後照鏡】，也要轉頭確認，因為機車可能躲在你不容易看到的地方。"
  },
  {
    "word": "headlight",
    "pos": "n.",
    "cn_def": "車頭燈",
    "en_def": "one of the large lights at the front of a car",
    "sentence": "A: I have to drive back from the factory late tonight after the inspection, and the country road there has no street lamps at all, so is that dangerous? B: Just drive slowly, and before you leave, ask the security guard to check that each {{BLANK}} is working, because you will need strong light to see the road clearly.",
    "cn": "A：今晚檢查完後我得很晚才從工廠開車回來，那裡的鄉間道路完全沒有路燈，這樣危險嗎？ B：慢慢開就好，出發前請警衛幫你確認每一個【車頭燈】都正常運作，因為你需要強光才能看清楚路面。"
  },
  {
    "word": "license",
    "pos": "n.",
    "cn_def": "執照；駕照",
    "en_def": "an official card that shows you are allowed to drive",
    "sentence": "A: We are hiring a new sales assistant who will often visit customers by car, so what documents should we ask the candidates to bring to the interview? B: Besides their résumé, they must bring a valid driver's {{BLANK}}, and we should also ask how many years of driving experience they have on busy city roads.",
    "cn": "A：我們要招聘一位常需要開車拜訪客戶的新業務助理，應該請應徵者帶哪些文件來面試？ B：除了履歷，他們還必須帶有效的駕駛【執照】，我們也應該問他們在繁忙市區道路有幾年的駕駛經驗。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars, buses and other vehicles moving on a road",
    "sentence": "A: The meeting with the investors starts at nine o'clock tomorrow morning in the city center, so what time should we leave the office to get there? B: Let's leave by seven thirty, because the {{BLANK}} on the main road is always heavy during rush hour, and we don't want to arrive late and stressed.",
    "cn": "A：明天早上九點在市中心和投資人開會，我們該幾點離開辦公室才能到？ B：我們七點半前出發吧，因為尖峰時段主要道路上的【車流】總是很多，我們不想遲到又緊張兮兮地抵達。"
  },
  {
    "word": "parking",
    "pos": "n.",
    "cn_def": "停車；停車位",
    "en_def": "space for leaving cars; the act of leaving a car somewhere for a time",
    "sentence": "A: Many visitors are coming to our product launch at the convention center on Saturday, so how will they find a place to leave their cars? B: The center has free {{BLANK}} for up to three hundred cars behind the main hall, and we will put clear signs at the entrance to guide drivers there.",
    "cn": "A：週六會有很多訪客來會展中心參加我們的產品發表會，他們要怎麼找到地方放車？ B：會展中心主廳後方有可容納三百輛車的免費【停車位】，我們會在入口放置清楚的指標引導駕駛人過去。"
  },
  {
    "word": "garage",
    "pos": "n.",
    "cn_def": "車庫；修車廠",
    "en_def": "a building where cars are kept or repaired",
    "sentence": "A: The weather report says there will be a strong typhoon this weekend with heavy rain and wind, so where should we keep the company cars? B: Please move all of them into the underground {{BLANK}} below the office building on Friday evening, because branches and flying objects could easily damage them outside.",
    "cn": "A：氣象報告說這週末會有強烈颱風，伴隨大雨和強風，我們該把公司車放在哪裡？ B：請在週五傍晚把所有車都移到辦公大樓下方的地下【車庫】，因為在外面樹枝和飛落物很容易把它們弄壞。"
  },
  {
    "word": "service",
    "pos": "v.",
    "cn_def": "保養；檢修",
    "en_def": "to check and fix a vehicle or machine regularly so it keeps working well",
    "sentence": "A: Our delivery vans have traveled more than ten thousand kilometers since January, and two drivers say the brakes feel soft, so what should we do? B: We should {{BLANK}} all of them at the dealer next week, so the mechanics can check the oil, the brakes and the tires before any real problems appear.",
    "cn": "A：我們的送貨車從一月以來已經跑了一萬多公里，有兩位司機說煞車感覺很軟，我們該怎麼辦？ B：我們下週應該把它們全部送到經銷商那裡【保養】，讓技師在真正出問題之前檢查機油、煞車和輪胎。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修理",
    "en_def": "to fix something that is broken or damaged",
    "sentence": "A: Someone backed into my car in the shopping mall parking lot on Sunday and broke the back door, so how long will it take to fix? B: The body shop told me they can {{BLANK}} the damage in about three days, and the insurance company will pay for most of the cost because the other driver admitted it.",
    "cn": "A：週日有人在購物中心停車場倒車撞到我的車，撞壞了後車門，要多久才能修好？ B：鈑金廠告訴我他們大約三天就能【修理】好損壞的地方，而且因為對方駕駛承認了，保險公司會支付大部分費用。"
  },
  {
    "word": "speed",
    "pos": "n.",
    "cn_def": "速度",
    "en_def": "how fast something moves",
    "sentence": "A: I got a ticket in the mail this morning for driving too fast near the school on my way to the office last month, and I'm very surprised. B: The {{BLANK}} limit on that street is only thirty kilometers per hour during school hours, and there is a camera hidden near the crossing.",
    "cn": "A：今天早上我收到一張罰單，是上個月上班途中在學校附近開太快，我非常驚訝。 B：那條街在上學時段的【速度】限制只有每小時三十公里，而且斑馬線附近藏了一台測速相機。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "車款；型號",
    "en_def": "a particular type or version of a product",
    "sentence": "A: The sales manager wants to replace her old company car with something more modern this year, so which car is she thinking about buying? B: She likes the latest {{BLANK}} from the Japanese maker, because it has a bigger trunk for her samples, better fuel economy, and a smart system that connects to her phone.",
    "cn": "A：業務經理今年想把她的舊公司車換成更現代化的車，她考慮買哪一台？ B：她喜歡那家日本車廠的最新【車款】，因為它的後車廂更大可以放樣品、更省油，還有能連接手機的智慧系統。"
  },
  {
    "word": "used",
    "pos": "adj.",
    "cn_def": "二手的",
    "en_def": "owned by someone before; not new",
    "sentence": "A: Our small catering business needs a second van for weekend events, but we don't have a large budget this year, so what are our choices? B: We could buy a {{BLANK}} van from a trusted dealer, because it costs about half the price of a brand-new one, and many come with a one-year warranty.",
    "cn": "A：我們的小型外燴公司週末活動需要第二台廂型車，但今年預算不多，我們有哪些選擇？ B：我們可以向信譽良好的車商買一台【二手】廂型車，因為價格大約是全新車的一半，而且很多附有一年保固。"
  },
  {
    "word": "new",
    "pos": "adj.",
    "cn_def": "新的",
    "en_def": "recently made or bought; not used before",
    "sentence": "A: I heard that the company finally replaced the old delivery trucks that kept breaking down last winter, so how do the drivers feel about it? B: They are very happy with the {{BLANK}} trucks, which arrived straight from the factory last week, because they are quieter, cleaner and much more reliable on long trips.",
    "cn": "A：我聽說公司終於汰換了去年冬天一直故障的舊送貨卡車，司機們覺得怎麼樣？ B：他們對上週直接從工廠送來的【新】卡車非常滿意，因為它們更安靜、更乾淨，長途行駛也可靠得多。"
  },
  {
    "word": "safe",
    "pos": "adj.",
    "cn_def": "安全的",
    "en_def": "not likely to cause harm or danger",
    "sentence": "A: My elderly parents want to buy a car for their weekend trips to the countryside, and they asked me for advice, so what should they look for? B: They should choose a {{BLANK}} car with good airbags, automatic emergency braking and high test scores, because protecting the people inside matters more than style or speed.",
    "cn": "A：我年邁的父母想買一台車週末去鄉下玩，他們問我的意見，他們應該注意什麼？ B：他們應該選擇一台有良好安全氣囊、自動緊急煞車和高測試分數的【安全】車款，因為保護車內的人比外型或速度更重要。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "making you feel relaxed and physically pleasant",
    "sentence": "A: The marketing team will drive six hours to the exhibition in Taichung and back on Friday, so which car should I reserve from the rental company? B: Please book the large sedan with soft leather seats and plenty of leg room, because it is much more {{BLANK}} for long trips than the small city car.",
    "cn": "A：行銷團隊週五要開六個小時的車往返台中的展覽，我該向租車公司預訂哪一台車？ B：請預訂那台有柔軟皮椅和寬敞腿部空間的大型轎車，因為長途旅行時它比小型城市車【舒適】得多。"
  }
];

const MCQS = [
  {
    "q": "Only one _____ is allowed to park in front of each shop. Delivery trucks must use the loading area behind the building.",
    "options": [
      "vehicle",
      "mirror",
      "battery",
      "headlight"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The mechanic opened the hood and found a problem with the _____. That is why the car would not start this morning.",
    "options": [
      "seat",
      "engine",
      "mirror",
      "license"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "We almost ran out of _____ on the highway last night. Luckily, there was a gas station at the next exit.",
    "options": [
      "mirror",
      "seatbelt",
      "fuel",
      "garage"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The price of _____ rose again this month in the UK. Many drivers there are now taking the train to work instead.",
    "options": [
      "dashboard",
      "headlight",
      "wheel",
      "petrol"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Most large trucks run on _____ because it gives them more power. However, many cities now want cleaner fuels for heavy vehicles.",
    "options": [
      "seatbelt",
      "diesel",
      "garage",
      "license"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Please do not leave the lights on when you park overnight. Last time, the _____ was completely dead the next morning.",
    "options": [
      "wheel",
      "garage",
      "model",
      "battery"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The driver had to _____ suddenly when a dog ran across the road. Luckily, nobody was hurt and the car stopped in time.",
    "options": [
      "brake",
      "accelerate",
      "repair",
      "service"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The driver hit a deep hole in the road, and the front _____ came loose. A tow truck took the car to the garage.",
    "options": [
      "license",
      "traffic",
      "wheel",
      "speed"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "I heard a loud bang on the highway and pulled over. One _____ was completely flat, so I called for help.",
    "options": [
      "mirror",
      "seat",
      "model",
      "tire"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The office has installed charging stations for staff who drive _____ cars. Charging is free during working hours.",
    "options": [
      "electric",
      "used",
      "safe",
      "comfortable"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please put your bag under the _____ in front of you. The bus will leave the station in about five minutes.",
    "options": [
      "traffic",
      "fuel",
      "seat",
      "speed"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "When the light turns green, _____ slowly and smoothly. Pressing the pedal too hard wastes fuel and makes passengers uncomfortable.",
    "options": [
      "brake",
      "accelerate",
      "repair",
      "service"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Every passenger must wear a _____ during the ride, even in the back. The driver will not start until everyone is ready.",
    "options": [
      "dashboard",
      "garage",
      "seatbelt",
      "petrol"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The new screen on the _____ shows the map and the speed. The driver can see it without looking away from the road.",
    "options": [
      "tire",
      "fuel",
      "garage",
      "dashboard"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Before you back out of the space, check the rear-view _____. Children sometimes play near the cars in this lot.",
    "options": [
      "engine",
      "mirror",
      "fuel",
      "license"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "It is hard to _____ a large truck through the narrow streets of the old town. Drivers need special training for this route.",
    "options": [
      "steer",
      "repair",
      "brake",
      "service"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "One _____ on the company van is broken. Please fix it before the driver goes out on the night delivery route.",
    "options": [
      "petrol",
      "headlight",
      "traffic",
      "diesel"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "New employees must show a valid driver's _____ before they use any company car. Copies are kept in the human resources office.",
    "options": [
      "battery",
      "engine",
      "license",
      "fuel"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Buying a _____ car can save a lot of money. However, you should always ask about its history and previous owners.",
    "options": [
      "used",
      "electric",
      "new",
      "comfortable"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The bus was forty minutes late because of heavy _____ downtown. A truck had broken down in the middle of the main road.",
    "options": [
      "seatbelt",
      "model",
      "headlight",
      "traffic"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The hotel offers free _____ for guests in the lot behind the building. Visitors must show their room key at the gate.",
    "options": [
      "parking",
      "engine",
      "wheel",
      "dashboard"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The dealer recommends that you _____ your car every ten thousand kilometers. Regular checks keep the engine in good condition.",
    "options": [
      "accelerate",
      "brake",
      "steer",
      "service"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "My car is at the _____ today because the brakes need repairing. The mechanic says I can pick it up tomorrow afternoon.",
    "options": [
      "mirror",
      "garage",
      "battery",
      "speed"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The car is completely _____ and has never been driven by anyone before. It still has that fresh factory smell.",
    "options": [
      "used",
      "electric",
      "new",
      "safe"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Drivers must reduce their _____ near schools and hospitals. The city has put up new cameras on several busy streets.",
    "options": [
      "garage",
      "seatbelt",
      "petrol",
      "speed"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The mechanic said it will cost about five hundred dollars to _____ the broken door. The insurance company will pay most of it.",
    "options": [
      "accelerate",
      "repair",
      "steer",
      "brake"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The newest _____ of this car will arrive in showrooms next month. It uses less fuel and has a larger trunk.",
    "options": [
      "traffic",
      "mirror",
      "model",
      "parking"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Always keep a _____ distance from the car in front of you. You need enough space to stop if it brakes suddenly.",
    "options": [
      "safe",
      "electric",
      "used",
      "new"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The bus seats are soft and wide, so the long ride feels _____. Passengers can also adjust the seats and rest their legs.",
    "options": [
      "electric",
      "comfortable",
      "used",
      "new"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Please turn off the _____ while you wait in the loading area. Leaving it running wastes fuel and pollutes the air.",
    "options": [
      "seatbelt",
      "garage",
      "license",
      "engine"
    ],
    "answer": 3,
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "vehicle": {
    "pos": "n.",
    "en_def": "a machine such as a car, bus or truck that carries people or goods",
    "cn_def": "車輛"
  },
  "engine": {
    "pos": "n.",
    "en_def": "the part of a car that makes the power to move it",
    "cn_def": "引擎"
  },
  "fuel": {
    "pos": "n.",
    "en_def": "something such as gas or oil that is burned to give power",
    "cn_def": "燃料"
  },
  "petrol": {
    "pos": "n.",
    "en_def": "the British word for gasoline, the liquid fuel for cars",
    "cn_def": "汽油"
  },
  "diesel": {
    "pos": "n.",
    "en_def": "a heavy fuel used in many trucks, buses and some cars",
    "cn_def": "柴油"
  },
  "electric": {
    "pos": "adj.",
    "en_def": "using electricity for power",
    "cn_def": "電動的"
  },
  "battery": {
    "pos": "n.",
    "en_def": "an object that stores electricity to start a car or run a machine",
    "cn_def": "電瓶；電池"
  },
  "brake": {
    "pos": "v.",
    "en_def": "to make a vehicle slow down or stop",
    "cn_def": "煞車"
  },
  "accelerate": {
    "pos": "v.",
    "en_def": "to make a vehicle go faster",
    "cn_def": "加速"
  },
  "steer": {
    "pos": "v.",
    "en_def": "to control the direction a vehicle goes",
    "cn_def": "駕駛；操控方向"
  },
  "wheel": {
    "pos": "n.",
    "en_def": "one of the round parts under a car that turn so it can move",
    "cn_def": "車輪"
  },
  "tire": {
    "pos": "n.",
    "en_def": "the rubber ring around a wheel that is filled with air",
    "cn_def": "輪胎"
  },
  "seat": {
    "pos": "n.",
    "en_def": "a place where a person sits in a vehicle",
    "cn_def": "座位"
  },
  "seatbelt": {
    "pos": "n.",
    "en_def": "a belt in a car that holds you in your seat for safety",
    "cn_def": "安全帶"
  },
  "dashboard": {
    "pos": "n.",
    "en_def": "the panel in front of the driver that shows speed, fuel and other information",
    "cn_def": "儀表板"
  },
  "mirror": {
    "pos": "n.",
    "en_def": "a piece of glass in a car that lets the driver see behind or beside",
    "cn_def": "後照鏡"
  },
  "headlight": {
    "pos": "n.",
    "en_def": "one of the large lights at the front of a car",
    "cn_def": "車頭燈"
  },
  "license": {
    "pos": "n.",
    "en_def": "an official card that shows you are allowed to drive",
    "cn_def": "執照；駕照"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars, buses and other vehicles moving on a road",
    "cn_def": "交通；車流"
  },
  "parking": {
    "pos": "n.",
    "en_def": "space for leaving cars; the act of leaving a car somewhere for a time",
    "cn_def": "停車；停車位"
  },
  "garage": {
    "pos": "n.",
    "en_def": "a building where cars are kept or repaired",
    "cn_def": "車庫；修車廠"
  },
  "service": {
    "pos": "v.",
    "en_def": "to check and fix a vehicle or machine regularly so it keeps working well",
    "cn_def": "保養；檢修"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken or damaged",
    "cn_def": "修理"
  },
  "speed": {
    "pos": "n.",
    "en_def": "how fast something moves",
    "cn_def": "速度"
  },
  "model": {
    "pos": "n.",
    "en_def": "a particular type or version of a product",
    "cn_def": "車款；型號"
  },
  "used": {
    "pos": "adj.",
    "en_def": "owned by someone before; not new",
    "cn_def": "二手的"
  },
  "new": {
    "pos": "adj.",
    "en_def": "recently made or bought; not used before",
    "cn_def": "新的"
  },
  "safe": {
    "pos": "adj.",
    "en_def": "not likely to cause harm or danger",
    "cn_def": "安全的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "making you feel relaxed and physically pleasant",
    "cn_def": "舒適的"
  }
};

const EXTRA_GLOSSES = {};
