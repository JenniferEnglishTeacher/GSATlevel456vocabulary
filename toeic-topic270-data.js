// Topic 270 Quiz Data: Parking 停車
// Source word list: https://www.examword.com/group-topic/parking — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T270 - Parking 停車",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "parking lot",
    "pos": "n.phr.",
    "cn_def": "停車場",
    "en_def": "a large outdoor area where cars can be left",
    "sentence": "A: Where should the visitors from the Singapore office leave their rental car when they arrive for tomorrow's training session at nine? B: They can use the large {{BLANK}} behind the main building, which has plenty of spaces, and the security guard at the gate will give them a visitor pass for the whole day.",
    "cn": "A：新加坡辦公室的訪客明天九點來參加訓練課程時，應該把租來的車停在哪裡？ B：他們可以使用主大樓後面的大型【停車場】，那裡有很多車位，門口的警衛會給他們一張全天有效的訪客通行證。"
  },
  {
    "word": "parking space",
    "pos": "n.phr.",
    "cn_def": "停車位",
    "en_def": "a marked area where one car can be left",
    "sentence": "A: Why were you almost late for the budget meeting with the finance director this morning, even though you left home early? B: The garage near our office was nearly full, so I drove around for fifteen minutes before I finally found an empty {{BLANK}} on the top floor near the elevator.",
    "cn": "A：你今天早上明明很早出門，為什麼跟財務長的預算會議還差點遲到？ B：我們辦公室附近的停車場幾乎滿了，所以我開車繞了十五分鐘，最後才在頂樓電梯旁找到一個空的【停車位】。"
  },
  {
    "word": "garage",
    "pos": "n.",
    "cn_def": "車庫；停車場",
    "en_def": "a building where cars are kept or parked",
    "sentence": "A: Is it safe to leave my new company car outside the hotel tonight, or is there somewhere covered where I can park it? B: The hotel has a private {{BLANK}} under the building with cameras and a guard, and guests can park there for free if they show their room key at the entrance.",
    "cn": "A：今晚把我的新公司車停在飯店外面安全嗎？還是有什麼有遮蔽的地方可以停？ B：飯店在大樓下方有一個私人【車庫】，裝有監視器並有警衛看守，房客只要在入口出示房卡就可以免費停車。"
  },
  {
    "word": "underground parking",
    "pos": "n.phr.",
    "cn_def": "地下停車場",
    "en_def": "a parking area built below the ground",
    "sentence": "A: Does the new office tower downtown have enough space for employees who drive to work every day, or will they need to find other options? B: Yes, there are three floors of {{BLANK}} below the building, so staff can leave their cars there and take the elevator straight up to their desks, even when it rains.",
    "cn": "A：市中心那棟新辦公大樓有足夠的空間給每天開車上班的員工嗎？還是他們得另找辦法？ B：有的，大樓下方有三層【地下停車場】，所以員工可以把車停在那裡，然後直接搭電梯上樓到座位，即使下雨也沒問題。"
  },
  {
    "word": "multistorey car park",
    "pos": "n.phr.",
    "cn_def": "多層停車場；立體停車場",
    "en_def": "a building with several levels for parking cars",
    "sentence": "A: Where do you usually leave your car when you go shopping at the big mall near the train station on weekends? B: I always use the {{BLANK}} next to the mall because it has six levels, so there is usually a free space on the higher floors even when the streets are very busy.",
    "cn": "A：你週末去火車站附近那間大型購物中心購物時，通常把車停在哪裡？ B：我總是使用購物中心旁邊的【多層停車場】，因為它有六層，所以即使街上非常繁忙，較高樓層通常還是有空位。"
  },
  {
    "word": "meter",
    "pos": "n.",
    "cn_def": "計時器；停車計費表",
    "en_def": "a machine beside the street where you pay for parking time",
    "sentence": "A: Why did you leave the client lunch so suddenly before we even ordered dessert at that restaurant on Main Street? B: I suddenly remembered that I had only paid for one hour at the parking {{BLANK}} outside, so I had to run back and add more coins before a warden gave me a ticket.",
    "cn": "A：我們在緬因街那家餐廳和客戶吃午餐，甜點都還沒點，你為什麼突然離開？ B：我突然想起我只在外面的停車【計時器】投了一小時的錢，所以我必須跑回去多投一些硬幣，免得交通管理員開我罰單。"
  },
  {
    "word": "ticket",
    "pos": "n.",
    "cn_def": "罰單",
    "en_def": "a piece of paper telling you to pay money for parking in the wrong place",
    "sentence": "A: Why do you look so upset after coming back from the post office to mail those contracts for the legal department? B: I left my car in a no-parking area for only ten minutes, but when I came back there was a parking {{BLANK}} on the window, and now I have to pay sixty dollars.",
    "cn": "A：你幫法務部去郵局寄那些合約，回來之後為什麼看起來這麼不開心？ B：我只把車停在禁止停車區十分鐘，但回來時車窗上就有一張停車【罰單】，現在我必須付六十美元。"
  },
  {
    "word": "fine",
    "pos": "n.",
    "cn_def": "罰款；罰金",
    "en_def": "money you must pay because you broke a rule",
    "sentence": "A: What happens if delivery drivers stop in front of the shopping center entrance instead of using the loading area at the back? B: The city has become much stricter this year, so drivers who block the entrance must pay a large {{BLANK}} of two hundred dollars, and their company may also receive a warning letter.",
    "cn": "A：如果送貨司機把車停在購物中心入口前面，而不是使用後面的卸貨區，會怎麼樣？ B：市政府今年變得嚴格多了，所以擋住入口的司機必須繳交兩百美元的高額【罰款】，他們的公司也可能收到警告信。"
  },
  {
    "word": "permit",
    "pos": "n.",
    "cn_def": "許可證；通行證",
    "en_def": "an official paper that allows you to do something",
    "sentence": "A: Can new employees park in the staff area next to the factory, or do they have to use the public lot across the road? B: They can park in the staff area, but first they need to get a parking {{BLANK}} from the human resources office and display it clearly on the front window of their car.",
    "cn": "A：新員工可以把車停在工廠旁邊的員工區嗎？還是必須使用對面的公共停車場？ B：他們可以停在員工區，但首先必須到人力資源辦公室申請停車【許可證】，並清楚地放在車子的前擋風玻璃上。"
  },
  {
    "word": "zone",
    "pos": "n.",
    "cn_def": "區域；地帶",
    "en_def": "an area with a special use or rule",
    "sentence": "A: Why did the security guard ask the taxi driver to move his car while he was waiting for our guests outside the hotel lobby? B: He had stopped in a no-parking {{BLANK}} that is kept clear for fire trucks and ambulances, so the guard asked him to wait in the taxi area around the corner instead.",
    "cn": "A：計程車司機在飯店大廳外等我們的客人時，警衛為什麼要他把車移走？ B：他停在一個為消防車和救護車保留的禁止停車【區】，所以警衛請他改到轉角的計程車區等候。"
  },
  {
    "word": "reserved",
    "pos": "adj.",
    "cn_def": "保留的；專用的",
    "en_def": "kept for a particular person or use",
    "sentence": "A: Can I leave my car in one of the empty spaces near the front door while I deliver these boxes to the reception desk? B: I'm afraid not, because those spaces are {{BLANK}} for the company directors and important visitors, but you can use the loading area on the left side of the building for ten minutes.",
    "cn": "A：我把這些箱子送到櫃檯時，可以把車停在前門附近的空位嗎？ B：恐怕不行，因為那些車位是【保留】給公司董事和重要訪客的，不過你可以在大樓左側的卸貨區停十分鐘。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "無障礙的；方便使用的",
    "en_def": "easy for people who use wheelchairs to reach or use",
    "sentence": "A: Our new client uses a wheelchair, so is there a convenient place where her driver can stop when she visits us next Monday? B: Yes, there are two {{BLANK}} spaces right next to the main entrance, and they are wider than normal, so she can get out of the car easily and go straight inside.",
    "cn": "A：我們的新客戶使用輪椅，她下週一來拜訪時，她的司機有方便停車的地方嗎？ B：有的，主要入口旁邊就有兩個【無障礙】車位，比一般車位更寬，所以她可以輕鬆下車並直接進入大樓。"
  },
  {
    "word": "valet",
    "pos": "n.",
    "cn_def": "代客泊車員",
    "en_def": "a worker who parks customers' cars for them",
    "sentence": "A: Will our guests have trouble finding somewhere to park when they come to the awards dinner at the hotel on Friday evening? B: Not at all, because the hotel offers a {{BLANK}} service, so a staff member will take their keys at the front door and park their cars for them while they enjoy the dinner.",
    "cn": "A：我們的賓客週五晚上來飯店參加頒獎晚宴時，會很難找到停車位嗎？ B：完全不會，因為飯店提供【代客泊車】服務，工作人員會在門口接過他們的鑰匙，在他們享用晚餐時幫他們停車。"
  },
  {
    "word": "parallel park",
    "pos": "v.phr.",
    "cn_def": "路邊平行停車",
    "en_def": "to park a car in a line beside the street between two other cars",
    "sentence": "A: How did your driving lesson go yesterday afternoon before your important job interview with the delivery company next week? B: It went well, but I still find it hard to {{BLANK}} on busy streets, so my instructor made me practice between two vans until I could fit into the space without touching the curb.",
    "cn": "A：在你下週和快遞公司的重要工作面試之前，你昨天下午的駕駛課上得怎麼樣？ B：還不錯，但我仍然覺得在繁忙的街道上【路邊停車】很難，所以教練讓我在兩輛廂型車之間練習，直到我能停進車位而不碰到路緣。"
  },
  {
    "word": "reverse",
    "pos": "v.",
    "cn_def": "倒車",
    "en_def": "to drive a vehicle backwards",
    "sentence": "A: Why did the truck driver ask you to stand behind his vehicle when he arrived at the warehouse with the furniture order? B: He needed to {{BLANK}} into the narrow loading area between two walls, so he asked me to watch carefully and tell him when he was getting too close to the boxes.",
    "cn": "A：卡車司機載著家具訂單抵達倉庫時，為什麼要你站在他的車後面？ B：他需要【倒車】進入兩面牆之間狹窄的卸貨區，所以他請我仔細看著，在他太靠近箱子時告訴他。"
  },
  {
    "word": "occupy",
    "pos": "v.",
    "cn_def": "佔用；佔據",
    "en_def": "to fill or use a space",
    "sentence": "A: Why is it so difficult to find a place for visitors to park near our office building on weekday mornings? B: Workers from the bank across the street arrive very early and {{BLANK}} almost every space on our block by eight o'clock, so our visitors often have to walk from the public lot two streets away.",
    "cn": "A：為什麼平日早上我們辦公大樓附近很難找到讓訪客停車的地方？ B：對街銀行的員工很早就到，八點前就【佔用】了我們這條街區幾乎所有的車位，所以我們的訪客常常必須從兩條街外的公共停車場走過來。"
  },
  {
    "word": "vacant",
    "pos": "adj.",
    "cn_def": "空的；未被佔用的",
    "en_def": "empty; not being used",
    "sentence": "A: Did you manage to find a place to park when you went to the hospital to visit your manager after her operation yesterday? B: Yes, but only after waiting for twenty minutes, because the hospital lot was full, and a {{BLANK}} space finally appeared when a family drove away after their visit.",
    "cn": "A：你昨天去醫院探望手術後的經理時，有找到停車的地方嗎？ B：有，但等了二十分鐘才找到，因為醫院停車場滿了，直到一家人探病完開車離開，才終於出現一個【空的】車位。"
  },
  {
    "word": "congestion",
    "pos": "n.",
    "cn_def": "壅塞；擁擠",
    "en_def": "too much traffic in one place",
    "sentence": "A: Why has the city decided to build a new parking garage near the railway station instead of adding more spaces downtown? B: The officials hope that people will leave their cars near the station and take the train into the city, which should reduce traffic {{BLANK}} on the main roads during rush hour.",
    "cn": "A：市政府為什麼決定在火車站附近蓋新的停車場，而不是在市中心增加更多車位？ B：官員希望民眾把車停在車站附近再搭火車進城，這應該能減少尖峰時段主要道路上的交通【壅塞】。"
  },
  {
    "word": "restriction",
    "pos": "n.",
    "cn_def": "限制；規定",
    "en_def": "a rule that limits what you can do",
    "sentence": "A: Can I park on the street outside the conference center all day on Thursday while I attend the marketing workshop? B: I wouldn't do that, because there is a two-hour {{BLANK}} on that street from Monday to Friday, so you should use the conference center's lot, which charges a fixed daily price.",
    "cn": "A：我週四參加行銷研討會時，可以整天把車停在會議中心外面的街上嗎？ B：我不建議那樣做，因為那條街週一到週五有兩小時的停車【限制】，所以你應該使用會議中心的停車場，那裡收取固定的每日費用。"
  },
  {
    "word": "enforcement",
    "pos": "n.",
    "cn_def": "執法；強制執行",
    "en_def": "making sure that people obey a rule or law",
    "sentence": "A: Why have so many drivers in our neighborhood started getting tickets for parking near the school this month? B: The city has hired more officers for parking {{BLANK}}, and they now walk around the school area every morning to check that nobody is blocking the crossings or the bus stops.",
    "cn": "A：為什麼這個月我們社區有那麼多駕駛因為在學校附近停車而收到罰單？ B：市政府聘請了更多負責停車【執法】的人員，他們現在每天早上在學校周邊巡邏，檢查有沒有人擋住斑馬線或公車站。"
  },
  {
    "word": "tow",
    "pos": "v.",
    "cn_def": "拖吊；拖走",
    "en_def": "to pull a car away with another vehicle",
    "sentence": "A: What happened to the van that was parked in front of the emergency exit during the fire drill yesterday afternoon? B: The building manager called the city, and a truck came to {{BLANK}} it away within an hour, so the owner will have to pay a fee to get it back from the storage yard.",
    "cn": "A：昨天下午消防演習時停在緊急出口前的那台廂型車後來怎麼了？ B：大樓管理員打電話給市政府，一小時內就有一輛拖吊車來把它【拖】走，所以車主必須付費才能從保管場領回車子。"
  },
  {
    "word": "driveway",
    "pos": "n.",
    "cn_def": "私人車道",
    "en_def": "a short private road from the street to a house or garage",
    "sentence": "A: Where should the moving company park their large truck when they come to deliver the new furniture to your house on Saturday? B: They can park in my {{BLANK}} in front of the garage, because it is wide enough for a truck, and it will be easier for them to carry the heavy sofa through the side door.",
    "cn": "A：搬家公司週六送新家具到你家時，他們的大卡車應該停在哪裡？ B：他們可以停在我車庫前面的【私人車道】上，因為那裡夠寬，可以停一台卡車，而且他們從側門搬沉重的沙發也比較容易。"
  },
  {
    "word": "curb",
    "pos": "n.",
    "cn_def": "路緣；人行道邊",
    "en_def": "the edge of the sidewalk next to the road",
    "sentence": "A: Why did the driving test examiner give you such a low score even though you didn't make any big mistakes on the highway? B: When I parked at the end of the test, I stopped too far from the {{BLANK}}, and one of my wheels was almost in the middle of the lane, which she said was dangerous.",
    "cn": "A：你在高速公路上沒有犯什麼大錯，為什麼駕照考官給你這麼低的分數？ B：考試最後停車時，我停得離【路緣】太遠，有一個輪子幾乎在車道中間，她說那很危險。"
  },
  {
    "word": "pay-and-display",
    "pos": "adj.",
    "cn_def": "購票顯示式的（停車）",
    "en_def": "describing parking where you buy a ticket from a machine and leave it inside your car",
    "sentence": "A: How do I pay for parking at the train station lot, since there is no attendant and no gate at the entrance? B: It is a {{BLANK}} lot, so you buy a ticket from the machine near the exit, choose how many hours you need, and leave the ticket on your dashboard where it can be seen.",
    "cn": "A：火車站停車場的入口既沒有管理員也沒有閘門，我要怎麼付停車費？ B：那是【購票顯示式】的停車場，所以你要在出口附近的機器買票，選擇你需要的時數，然後把票放在儀表板上看得見的地方。"
  },
  {
    "word": "hourly rate",
    "pos": "n.phr.",
    "cn_def": "每小時費率；時薪",
    "en_def": "the amount of money charged for each hour",
    "sentence": "A: Is it cheaper to park in the garage near the convention center or to take a taxi from the hotel every day this week? B: The garage charges an {{BLANK}} of five dollars, so if you stay there from nine until six, it will cost much more than a short taxi ride each morning and evening.",
    "cn": "A：這週每天把車停在會展中心附近的停車場比較便宜，還是每天從飯店搭計程車比較便宜？ B：那個停車場的【每小時費率】是五美元，所以如果你從九點停到六點，費用會比每天早晚搭一小段計程車貴得多。"
  },
  {
    "word": "overflow",
    "pos": "adj.",
    "cn_def": "（滿位時）備用的；溢出的",
    "en_def": "extra; used when the main place is already full",
    "sentence": "A: Where will the hundreds of guests park during the company's anniversary celebration on Saturday if the main lot fills up early? B: We have rented the field behind the sports center as an {{BLANK}} parking area, and a shuttle bus will carry guests from there to the main hall every ten minutes.",
    "cn": "A：如果公司週年慶當天主要停車場很早就停滿了，數百名賓客要停在哪裡？ B：我們租了體育中心後面的空地當作【備用】停車區，接駁車每十分鐘會從那裡載賓客到主會場。"
  },
  {
    "word": "car park",
    "pos": "n.phr.",
    "cn_def": "停車場",
    "en_def": "(British English) a place where cars are parked",
    "sentence": "A: Where shall we meet before we drive together to the trade fair in Manchester on Wednesday morning? B: Let's meet in the {{BLANK}} behind the hotel at seven thirty, because it is easy to find, and we can leave one of our cars there for the day and share the other one.",
    "cn": "A：週三早上我們一起開車去曼徹斯特的商展之前，要在哪裡碰面？ B：我們七點半在飯店後面的【停車場】碰面吧，因為那裡很好找，而且我們可以把其中一台車停在那裡一整天，共乘另一台車。"
  },
  {
    "word": "capacity",
    "pos": "n.",
    "cn_def": "容量；容納量",
    "en_def": "the largest number something can hold",
    "sentence": "A: Will the new parking garage at the shopping center be big enough for all the customers during the busy holiday season? B: It has a {{BLANK}} of eight hundred cars, which is twice as many as the old lot, so the managers believe it will be large enough even on the busiest weekends.",
    "cn": "A：購物中心新的停車場在繁忙的假期季節夠容納所有顧客嗎？ B：它的【容量】是八百輛車，是舊停車場的兩倍，所以經理們認為即使在最忙的週末也夠大。"
  },
  {
    "word": "designated",
    "pos": "adj.",
    "cn_def": "指定的；專用的",
    "en_def": "chosen for a special purpose",
    "sentence": "A: Can our customers leave their electric cars anywhere in the lot while they shop, or is there a special place for charging? B: There are ten {{BLANK}} spaces for electric vehicles near the entrance, and each one has a charging station, so drivers can recharge their batteries during their visit.",
    "cn": "A：我們的顧客購物時可以把電動車停在停車場的任何地方嗎？還是有專門充電的位置？ B：入口附近有十個電動車【指定】車位，每個都有充電站，所以駕駛可以在購物期間幫電池充電。"
  },
  {
    "word": "violation",
    "pos": "n.",
    "cn_def": "違規；違反",
    "en_def": "an action that breaks a rule or law",
    "sentence": "A: Why did you receive a letter from the city government this morning, and is it something to do with the company car? B: Yes, it says that our car was parked in a bus lane last Tuesday, which is a serious parking {{BLANK}}, so the company will have to pay a fine of one hundred fifty dollars.",
    "cn": "A：你今天早上為什麼收到市政府的信？跟公司的車有關嗎？ B：是的，信上說我們的車上週二停在公車專用道上，這是嚴重的停車【違規】，所以公司必須繳一百五十美元的罰款。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的；有保全的",
    "en_def": "safe; protected from danger or theft",
    "sentence": "A: Why do you pay extra every month to park your car in the building near the hospital instead of on the street? B: The building is much more {{BLANK}} because it has cameras and a guard all night, and last year someone broke into my car when I left it on the street near my apartment.",
    "cn": "A：你為什麼每個月多付錢把車停在醫院附近的大樓裡，而不是停在街上？ B：那棟大樓【安全】多了，因為有監視器和警衛整夜看守，而且去年我把車停在公寓附近的街上時，有人闖進了我的車。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "臨時的；暫時的",
    "en_def": "lasting for only a short time",
    "sentence": "A: Where will the staff park while the company's main parking garage is being repaired over the next three months? B: The company has rented a {{BLANK}} lot across the river until the repairs are finished, and a free shuttle will take employees to the office every fifteen minutes during the morning.",
    "cn": "A：公司的主要停車場在接下來三個月整修期間，員工要停在哪裡？ B：公司在河對岸租了一個【臨時】停車場，直到整修完成為止，早上每十五分鐘會有免費接駁車載員工到辦公室。"
  },
  {
    "word": "availability",
    "pos": "n.",
    "cn_def": "可用性；供應情況",
    "en_def": "whether something is free to be used",
    "sentence": "A: How can drivers know whether there is still room in the downtown garages before they drive all the way into the city center? B: The city has a new app that shows the {{BLANK}} of spaces in every garage in real time, so drivers can choose the right one and avoid wasting time driving around.",
    "cn": "A：駕駛人在一路開進市中心之前，怎麼知道市區的停車場是否還有空位？ B：市政府有一個新的應用程式，可以即時顯示每個停車場的車位【供應情況】，所以駕駛人可以選擇合適的停車場，避免浪費時間繞來繞去。"
  }
];

const MCQS = [
  {
    "q": "Our hotel has a free _____ for guests behind the main building. Please show your room key to the guard at the gate.",
    "options": [
      "parking lot",
      "hourly rate",
      "violation",
      "enforcement"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The garage was almost full when I arrived. It took me fifteen minutes to find an empty _____ on the fifth floor.",
    "options": [
      "congestion",
      "enforcement",
      "parking space",
      "capacity"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Most employees drive to work, so the company built a three-level parking _____ next to the factory. It opened to staff last month.",
    "options": [
      "curb",
      "garage",
      "fine",
      "meter"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "I only paid for one hour at the parking _____ outside. I must go and add more coins before the warden arrives.",
    "options": [
      "driveway",
      "capacity",
      "availability",
      "meter"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The driver found a parking _____ on his windshield when he returned. He had stopped in a no-parking area for ten minutes.",
    "options": [
      "capacity",
      "driveway",
      "ticket",
      "valet"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Drivers who block the hospital entrance must pay a large _____ of two hundred dollars. The city introduced this rule last spring.",
    "options": [
      "fine",
      "curb",
      "zone",
      "garage"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "New staff should apply for a parking _____ at the human resources office. They must display it on the front window of their cars.",
    "options": [
      "congestion",
      "curb",
      "capacity",
      "permit"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Taxis may not stop outside the main doors. That area is a no-parking _____ kept clear for fire trucks and ambulances.",
    "options": [
      "valet",
      "zone",
      "meter",
      "ticket"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The spaces near the front door are _____ for company directors. Visitors should use the lot on the left side of the building.",
    "options": [
      "reserved",
      "vacant",
      "temporary",
      "overflow"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The shopping mall has six _____ parking spaces for wheelchair users. Each one is wider than a normal space and close to the elevator.",
    "options": [
      "overflow",
      "temporary",
      "accessible",
      "secure"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Guests at the awards dinner do not need to look for parking. A _____ will take their keys at the door and park their cars.",
    "options": [
      "curb",
      "valet",
      "meter",
      "permit"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Many new drivers find it difficult to _____ on busy streets. My instructor made me practice fitting between two vans along the curb.",
    "options": [
      "occupy",
      "tow",
      "accelerate",
      "parallel park"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The truck driver had to _____ slowly into the narrow loading area. I stood behind the truck and told him when to stop.",
    "options": [
      "occupy",
      "tow",
      "reverse",
      "attach"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Bank employees arrive very early and _____ most of the spaces on our street. Our visitors often have to park two blocks away.",
    "options": [
      "occupy",
      "tow",
      "reverse",
      "parallel park"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The hospital lot was full when I arrived. After twenty minutes, a _____ space finally appeared when another visitor drove away.",
    "options": [
      "accessible",
      "secure",
      "overflow",
      "vacant"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The new garage near the station should reduce traffic _____ downtown. Commuters can park there and take the train into the city.",
    "options": [
      "capacity",
      "congestion",
      "permit",
      "availability"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "There is a two-hour parking _____ on this street on weekdays. If you need to stay longer, please use the public garage.",
    "options": [
      "restriction",
      "congestion",
      "capacity",
      "valet"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The city has hired ten new parking _____ officers this year. They check the streets near schools every morning.",
    "options": [
      "congestion",
      "capacity",
      "enforcement",
      "availability"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "A car was blocking the emergency exit during the fire drill. The manager called a truck to _____ it away immediately.",
    "options": [
      "occupy",
      "tow",
      "reverse",
      "parallel park"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Please do not park in front of my garage. If you block my _____, I cannot get my car out in the morning.",
    "options": [
      "capacity",
      "violation",
      "enforcement",
      "driveway"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "During the driving test, I stopped too far from the _____. One of my wheels was almost in the middle of the lane.",
    "options": [
      "capacity",
      "permit",
      "curb",
      "valet"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The garage near the convention center charges an _____ of five dollars. Parking there all day can cost more than a taxi.",
    "options": [
      "hourly rate",
      "enforcement",
      "availability",
      "capacity"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The main lot fills up quickly during the festival. Latecomers should use the _____ parking area behind the sports center.",
    "options": [
      "accessible",
      "reserved",
      "secure",
      "overflow"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Let's meet in the hotel _____ at seven thirty. We can leave one car there and drive together to the trade fair.",
    "options": [
      "curb",
      "car park",
      "permit",
      "capacity"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The new garage has a _____ of eight hundred cars. That is twice as many as the old lot could hold.",
    "options": [
      "capacity",
      "congestion",
      "availability",
      "restriction"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Electric cars must use the ten _____ spaces near the entrance. Each of these spaces has its own charging station.",
    "options": [
      "vacant",
      "overflow",
      "designated",
      "temporary"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Parking in a bus lane is a serious _____. Drivers who do it must pay a fine of one hundred fifty dollars.",
    "options": [
      "capacity",
      "violation",
      "availability",
      "driveway"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "I pay extra to park in a _____ garage with cameras and a night guard. My car was broken into on the street last year.",
    "options": [
      "vacant",
      "overflow",
      "temporary",
      "secure"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The main garage will be closed for repairs until March. Until then, staff will use a _____ lot across the river.",
    "options": [
      "accessible",
      "overflow",
      "temporary",
      "reserved"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "This new app shows the _____ of parking spaces in real time. Drivers no longer have to drive around looking for a space.",
    "options": [
      "availability",
      "congestion",
      "enforcement",
      "violation"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "parking lot": {
    "pos": "n.phr.",
    "en_def": "a large outdoor area where cars can be left",
    "cn_def": "停車場"
  },
  "parking space": {
    "pos": "n.phr.",
    "en_def": "a marked area where one car can be left",
    "cn_def": "停車位"
  },
  "garage": {
    "pos": "n.",
    "en_def": "a building where cars are kept or parked",
    "cn_def": "車庫；停車場"
  },
  "underground parking": {
    "pos": "n.phr.",
    "en_def": "a parking area built below the ground",
    "cn_def": "地下停車場"
  },
  "multistorey car park": {
    "pos": "n.phr.",
    "en_def": "a building with several levels for parking cars",
    "cn_def": "多層停車場；立體停車場"
  },
  "meter": {
    "pos": "n.",
    "en_def": "a machine beside the street where you pay for parking time",
    "cn_def": "計時器；停車計費表"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a piece of paper telling you to pay money for parking in the wrong place",
    "cn_def": "罰單"
  },
  "fine": {
    "pos": "n.",
    "en_def": "money you must pay because you broke a rule",
    "cn_def": "罰款；罰金"
  },
  "permit": {
    "pos": "n.",
    "en_def": "an official paper that allows you to do something",
    "cn_def": "許可證；通行證"
  },
  "zone": {
    "pos": "n.",
    "en_def": "an area with a special use or rule",
    "cn_def": "區域；地帶"
  },
  "reserved": {
    "pos": "adj.",
    "en_def": "kept for a particular person or use",
    "cn_def": "保留的；專用的"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy for people who use wheelchairs to reach or use",
    "cn_def": "無障礙的；方便使用的"
  },
  "valet": {
    "pos": "n.",
    "en_def": "a worker who parks customers' cars for them",
    "cn_def": "代客泊車員"
  },
  "parallel park": {
    "pos": "v.phr.",
    "en_def": "to park a car in a line beside the street between two other cars",
    "cn_def": "路邊平行停車"
  },
  "reverse": {
    "pos": "v.",
    "en_def": "to drive a vehicle backwards",
    "cn_def": "倒車"
  },
  "occupy": {
    "pos": "v.",
    "en_def": "to fill or use a space",
    "cn_def": "佔用；佔據"
  },
  "vacant": {
    "pos": "adj.",
    "en_def": "empty; not being used",
    "cn_def": "空的；未被佔用的"
  },
  "congestion": {
    "pos": "n.",
    "en_def": "too much traffic in one place",
    "cn_def": "壅塞；擁擠"
  },
  "restriction": {
    "pos": "n.",
    "en_def": "a rule that limits what you can do",
    "cn_def": "限制；規定"
  },
  "enforcement": {
    "pos": "n.",
    "en_def": "making sure that people obey a rule or law",
    "cn_def": "執法；強制執行"
  },
  "tow": {
    "pos": "v.",
    "en_def": "to pull a car away with another vehicle",
    "cn_def": "拖吊；拖走"
  },
  "driveway": {
    "pos": "n.",
    "en_def": "a short private road from the street to a house or garage",
    "cn_def": "私人車道"
  },
  "curb": {
    "pos": "n.",
    "en_def": "the edge of the sidewalk next to the road",
    "cn_def": "路緣；人行道邊"
  },
  "pay-and-display": {
    "pos": "adj.",
    "en_def": "describing parking where you buy a ticket from a machine and leave it inside your car",
    "cn_def": "購票顯示式的（停車）"
  },
  "hourly rate": {
    "pos": "n.phr.",
    "en_def": "the amount of money charged for each hour",
    "cn_def": "每小時費率；時薪"
  },
  "overflow": {
    "pos": "adj.",
    "en_def": "extra; used when the main place is already full",
    "cn_def": "（滿位時）備用的；溢出的"
  },
  "car park": {
    "pos": "n.phr.",
    "en_def": "(British English) a place where cars are parked",
    "cn_def": "停車場"
  },
  "capacity": {
    "pos": "n.",
    "en_def": "the largest number something can hold",
    "cn_def": "容量；容納量"
  },
  "designated": {
    "pos": "adj.",
    "en_def": "chosen for a special purpose",
    "cn_def": "指定的；專用的"
  },
  "violation": {
    "pos": "n.",
    "en_def": "an action that breaks a rule or law",
    "cn_def": "違規；違反"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe; protected from danger or theft",
    "cn_def": "安全的；有保全的"
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting for only a short time",
    "cn_def": "臨時的；暫時的"
  },
  "availability": {
    "pos": "n.",
    "en_def": "whether something is free to be used",
    "cn_def": "可用性；供應情況"
  }
};

const EXTRA_GLOSSES = {};
