// Topic 137 Quiz Data: Farming 農耕
// Source word list: https://www.examword.com/group-topic/farming — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T137 - Farming 農耕",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "orchard",
    "pos": "n.",
    "cn_def": "果園",
    "en_def": "an area of land where fruit trees are grown",
    "sentence": "A: Where are we taking the new interns for the team-building trip on Saturday, and do they need to bring anything special with them? B: We're visiting a family-owned apple {{BLANK}} outside the city, so they should wear comfortable shoes, bring a hat, and be ready to pick fruit for most of the afternoon.",
    "cn": "A：星期六的團隊建立活動我們要帶新來的實習生去哪裡？他們需要帶什麼特別的東西嗎？ B：我們要去市郊一座家族經營的蘋果【果園】，所以他們應該穿舒適的鞋子、帶頂帽子，並準備好整個下午大部分時間都要採水果。"
  },
  {
    "word": "vineyard",
    "pos": "n.",
    "cn_def": "葡萄園",
    "en_def": "a farm where grapes are grown, usually to make wine",
    "sentence": "A: Why did the restaurant manager change the wine list again this month, and are the customers happy with the new choices so far? B: She signed a contract with a small {{BLANK}} in the hills nearby, so the wines are cheaper and fresher, and most guests say they really enjoy trying local flavors.",
    "cn": "A：為什麼餐廳經理這個月又更換了酒單？到目前為止顧客對新的選擇滿意嗎？ B：她和附近山上一座小型【葡萄園】簽了合約，所以酒更便宜也更新鮮，大部分客人都說他們很喜歡品嚐在地的風味。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "令人提神的；清爽的",
    "en_def": "making you feel cool, rested, or full of energy again",
    "sentence": "A: How was the company picnic at the farm last weekend, and did anyone complain about the hot weather or the long bus ride there? B: It was hot, but the farmer served cold fruit juice straight from the field, which was really {{BLANK}}, so everyone felt relaxed and happy during the whole afternoon.",
    "cn": "A：上週末在農場舉辦的公司野餐怎麼樣？有人抱怨天氣太熱或到那裡的巴士車程太長嗎？ B：天氣是很熱，但農夫端出了用田裡現採水果做的冰果汁，真的很【清爽提神】，所以大家整個下午都覺得很放鬆、很開心。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的；值得紀念的",
    "en_def": "special or enjoyable enough to be remembered for a long time",
    "sentence": "A: What did the visitors from our Japanese partner company think about the farm tour you organized for them on Friday afternoon? B: They said it was the most {{BLANK}} part of their business trip, because they planted rice with local farmers and took lots of photos to show their colleagues back home.",
    "cn": "A：日本合作公司的訪客覺得你星期五下午幫他們安排的農場參訪怎麼樣？ B：他們說那是這趟出差最【難忘】的部分，因為他們和當地農夫一起插秧，還拍了很多照片要給國內的同事看。"
  },
  {
    "word": "hay",
    "pos": "n.",
    "cn_def": "乾草",
    "en_def": "grass that has been cut and dried to feed animals",
    "sentence": "A: Why is the delivery truck from the farm supply store parked behind the barn, and when will the driver finish unloading everything? B: He is unloading a large order of {{BLANK}} for the horses and cows, so it will take about an hour, but he promised to move the truck before the visitors arrive.",
    "cn": "A：農業用品店的送貨卡車為什麼停在穀倉後面？司機什麼時候會卸完所有東西？ B：他正在卸一大批給馬和牛吃的【乾草】，所以大約要花一個小時，不過他保證會在訪客抵達前把卡車移走。"
  },
  {
    "word": "poultry",
    "pos": "n.",
    "cn_def": "家禽",
    "en_def": "birds such as chickens and ducks kept for meat or eggs",
    "sentence": "A: Has the supermarket chain decided which local farm will supply its chicken and duck products starting next quarter? B: Yes, the purchasing manager chose a {{BLANK}} farm in the south because its prices are fair, its birds are raised outdoors, and it can deliver fresh products to every store twice a week.",
    "cn": "A：連鎖超市決定好下一季開始要由哪一家在地農場供應雞肉和鴨肉產品了嗎？ B：決定了，採購經理選了南部一家【家禽】養殖場，因為它價格公道、禽鳥在戶外飼養，而且每週能送兩次新鮮產品到每家分店。"
  },
  {
    "word": "bear",
    "pos": "v.",
    "cn_def": "結（果實）；忍受",
    "en_def": "to produce fruit or crops; to accept something difficult",
    "sentence": "A: Why did the farm manager order so many new trees for the north field when the old ones still look healthy? B: The old trees are too old to {{BLANK}} much fruit anymore, so he wants to replace them now, and the young trees should start producing apples in about three years.",
    "cn": "A：北邊田地的老樹看起來還很健康，為什麼農場經理要訂那麼多新樹苗？ B：那些老樹已經太老，【結】不了多少果實了，所以他想現在就換掉，而新樹大約三年後就會開始長出蘋果。"
  },
  {
    "word": "puke",
    "pos": "v.",
    "cn_def": "嘔吐（口語）",
    "en_def": "(informal) to bring food up from your stomach through your mouth; to vomit",
    "sentence": "A: Why did Tom leave the farm tour so early yesterday afternoon, and is he feeling better now? B: The bus ride on the mountain road was so bumpy that he felt sick and almost had to {{BLANK}}, so his manager drove him back to the hotel to rest, and he feels fine this morning.",
    "cn": "A：湯姆昨天下午為什麼那麼早就離開農場參訪？他現在感覺好一點了嗎？ B：山路上的巴士車程太顛簸，他覺得很不舒服，差點就要【吐】了，所以他的經理開車送他回飯店休息，他今天早上已經沒事了。"
  },
  {
    "word": "unbearable",
    "pos": "adj.",
    "cn_def": "無法忍受的",
    "en_def": "too bad, painful, or unpleasant to accept",
    "sentence": "A: Why did the farm workers start their shifts at five in the morning this week instead of at eight like usual? B: The afternoon heat has been almost {{BLANK}} lately, so the supervisor changed the schedule, and now the workers finish picking the vegetables before the hottest part of the day begins.",
    "cn": "A：為什麼農場工人這週早上五點就開始上班，而不是像平常一樣八點？ B：最近下午的高溫幾乎讓人【無法忍受】，所以主管調整了班表，現在工人們會在一天最熱的時段開始前就採收完蔬菜。"
  },
  {
    "word": "crucial",
    "pos": "adj.",
    "cn_def": "極重要的；關鍵的",
    "en_def": "extremely important",
    "sentence": "A: Why does the farm owner check the weather report so carefully every morning before he plans the day's work? B: Rain at the wrong time can destroy the whole crop, so the weather is {{BLANK}} for his business, and he needs to know when to plant, water, and harvest the vegetables.",
    "cn": "A：為什麼農場主人每天早上安排工作前都要那麼仔細地查看天氣預報？ B：在錯誤的時間下雨可能會毀掉整片作物，所以天氣對他的生意【至關重要】，他需要知道什麼時候該播種、澆水和採收蔬菜。"
  },
  {
    "word": "despise",
    "pos": "v.",
    "cn_def": "鄙視；厭惡",
    "en_def": "to dislike someone or something very much",
    "sentence": "A: Why did Mark decide to leave his office job in the city and move to his parents' farm in the countryside? B: He told me he had come to {{BLANK}} long meetings and crowded trains, so he chose to work outdoors with his family, even though the pay is lower and the hours are much longer.",
    "cn": "A：馬克為什麼決定辭掉城市裡的辦公室工作，搬到鄉下他父母的農場？ B：他跟我說他已經變得非常【厭惡】冗長的會議和擁擠的電車，所以選擇和家人一起在戶外工作，即使薪水比較低、工時也長得多。"
  },
  {
    "word": "backbreaking",
    "pos": "adj.",
    "cn_def": "極累人的；繁重的",
    "en_def": "(of work) very hard and tiring for the body",
    "sentence": "A: Why is the farm hiring so many extra workers this month, and how long will the new staff stay on the job? B: Picking strawberries by hand is {{BLANK}} work that takes many hours each day, so the owner needs more people until the harvest ends, which should be in about six weeks.",
    "cn": "A：農場這個月為什麼要多雇那麼多工人？新員工會做多久？ B：用手採草莓是每天要花好幾個小時的【繁重累人】工作，所以農場主人在採收結束前需要更多人手，大約還要六個星期。"
  },
  {
    "word": "enjoyable",
    "pos": "adj.",
    "cn_def": "令人愉快的；有趣的",
    "en_def": "giving pleasure; fun",
    "sentence": "A: Should we book the farm-stay package for our department's weekend trip, or would a hotel near the beach be a better choice? B: I think the farm would be more {{BLANK}}, because the staff can feed the animals, cook with fresh vegetables, and relax together away from the noise and stress of the office.",
    "cn": "A：我們部門的週末旅遊應該訂農場住宿方案，還是住海邊附近的飯店比較好？ B：我覺得農場會更【有趣愉快】，因為員工可以餵動物、用新鮮蔬菜煮飯，還能遠離辦公室的噪音和壓力，一起放鬆。"
  },
  {
    "word": "regional",
    "pos": "adj.",
    "cn_def": "地區的；區域性的",
    "en_def": "relating to a particular area of a country",
    "sentence": "A: Why is the grocery store putting signs that say \"local\" on so many of the fruit and vegetable boxes this month? B: The company started a program to support {{BLANK}} farmers, so now most of the produce comes from farms within one hundred kilometers, and customers seem to like buying fresh local food.",
    "cn": "A：雜貨店這個月為什麼在那麼多蔬果箱上貼「在地」的標示？ B：公司推出了一個支持【地區】農民的計畫，所以現在大部分農產品都來自一百公里內的農場，而顧客似乎很喜歡買新鮮的在地食物。"
  },
  {
    "word": "farmland",
    "pos": "n.",
    "cn_def": "農田；耕地",
    "en_def": "land that is used for farming",
    "sentence": "A: Why are so many people in the town upset about the new shopping mall that the city council approved last week? B: The developers plan to build it on good {{BLANK}} that has grown rice for generations, so local farmers are worried about losing their jobs and the town's traditional way of life.",
    "cn": "A：為什麼鎮上這麼多人對市議會上週通過的新購物中心感到不滿？ B：開發商打算把它蓋在世世代代種稻的良好【農地】上，所以當地農民擔心會失去工作，也擔心小鎮傳統的生活方式消失。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的；可持續的",
    "en_def": "able to continue for a long time without harming the environment",
    "sentence": "A: Why did the food company decide to pay more for the vegetables it buys from farms in the eastern region? B: Those farms use {{BLANK}} methods that protect the soil and save water, and the company believes customers will pay a little more for products that are better for the environment.",
    "cn": "A：為什麼食品公司決定用更高的價格向東部地區的農場購買蔬菜？ B：那些農場採用保護土壤又節水的【永續】耕作方法，公司相信顧客會願意為對環境更好的產品多付一點錢。"
  },
  {
    "word": "restore",
    "pos": "v.",
    "cn_def": "恢復；修復",
    "en_def": "to bring something back to its earlier good condition",
    "sentence": "A: What is the government planning to do with the old farm fields that were damaged by the flood last summer? B: It will give farmers money and advice to help {{BLANK}} the soil, so the land can grow healthy crops again, and officials hope most fields will be ready by next spring.",
    "cn": "A：政府打算如何處理去年夏天被洪水破壞的舊農田？ B：政府會提供農民資金和建議，幫助他們【恢復】土壤，讓土地能再次種出健康的作物，官員希望大部分田地能在明年春天前準備好。"
  },
  {
    "word": "spray",
    "pos": "v.",
    "cn_def": "噴灑",
    "en_def": "to cover something with small drops of liquid",
    "sentence": "A: Why are the workers wearing masks and gloves in the apple field this morning, and is it safe for the visitors to walk there? B: They need to {{BLANK}} the trees with a natural liquid that keeps insects away, so please ask the visitors to wait in the shop until the workers have finished, which should take an hour.",
    "cn": "A：今天早上工人們為什麼在蘋果園裡戴著口罩和手套？訪客在那裡走動安全嗎？ B：他們要用一種能驅蟲的天然液體【噴灑】果樹，所以請讓訪客先在商店裡等到工人完成，大約需要一個小時。"
  },
  {
    "word": "steady",
    "pos": "adj.",
    "cn_def": "穩定的；平穩的",
    "en_def": "developing or happening at a regular, even rate",
    "sentence": "A: How are sales of the farm's organic eggs doing this year, and does the owner plan to raise more chickens soon? B: Sales have shown {{BLANK}} growth every month since January, so she is building a larger chicken house, and she expects to double production by the end of next year.",
    "cn": "A：農場的有機雞蛋今年銷售得怎麼樣？老闆打算很快多養一些雞嗎？ B：從一月起每個月的銷售都呈現【穩定】成長，所以她正在蓋一座更大的雞舍，預計明年底前產量會加倍。"
  },
  {
    "word": "hardworking",
    "pos": "adj.",
    "cn_def": "勤奮的；努力工作的",
    "en_def": "putting a lot of effort into work",
    "sentence": "A: Why did the farm owner give every worker a bonus at the end of the harvest season this year? B: He said the team was very {{BLANK}} during the busy months, often staying late to finish picking the crops before the storms came, so he wanted to thank them for their effort.",
    "cn": "A：農場主人今年為什麼在採收季結束時發給每位工人一筆獎金？ B：他說團隊在忙碌的那幾個月非常【勤奮】，常常留到很晚，好在暴風雨來之前採收完作物，所以他想感謝大家的努力。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "都市的；城市的",
    "en_def": "relating to a city or town",
    "sentence": "A: What is the green area on the roof of the new office building, and who takes care of all those plants? B: It's an {{BLANK}} farm where employees grow vegetables for the staff cafeteria, and a small team of volunteers waters the plants every morning before work starts.",
    "cn": "A：新辦公大樓屋頂上那片綠色區域是什麼？那些植物是誰在照顧的？ B：那是一座【都市】農場，員工在那裡種植供員工餐廳使用的蔬菜，還有一小群志工每天早上上班前會去澆水。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林；熱帶雨林",
    "en_def": "a thick tropical forest with many trees and plants",
    "sentence": "A: Where does the coffee company get the beans for the new premium blend that it started selling last month? B: The beans come from small farms at the edge of a {{BLANK}} in South America, where the hot, wet weather and rich soil give the coffee a very strong and special flavor.",
    "cn": "A：咖啡公司上個月開始販售的新款頂級綜合咖啡，豆子是從哪裡來的？ B：豆子來自南美洲一片【叢林】邊緣的小農場，那裡炎熱潮濕的氣候和肥沃的土壤讓咖啡有非常濃郁又特別的風味。"
  },
  {
    "word": "pillar",
    "pos": "n.",
    "cn_def": "支柱；柱子",
    "en_def": "a very important part of something; a tall column that supports a building",
    "sentence": "A: Why does the mayor talk so much about farming in his speeches when most people in the city work in offices now? B: He says agriculture is still a {{BLANK}} of the local economy, because many factories, shops, and restaurants in the area depend on the food that nearby farms produce every year.",
    "cn": "A：現在市內大多數人都在辦公室工作，為什麼市長在演講中還那麼常談到農業？ B：他說農業仍然是地方經濟的【支柱】，因為這一帶許多工廠、商店和餐廳都仰賴附近農場每年生產的糧食。"
  },
  {
    "word": "purify",
    "pos": "v.",
    "cn_def": "淨化；使純淨",
    "en_def": "to make something clean by removing dirty or harmful things",
    "sentence": "A: Why did the farm buy that expensive new machine next to the well, and what does it actually do? B: It is used to {{BLANK}} the water before the workers wash the vegetables, so the produce stays clean and safe, and the farm can pass the health inspection next month without any problems.",
    "cn": "A：農場為什麼在水井旁邊買了那台昂貴的新機器？它到底是做什麼用的？ B：它是用來在工人清洗蔬菜前【淨化】用水的，這樣農產品就能保持乾淨安全，農場下個月也能順利通過衛生檢查。"
  },
  {
    "word": "organic",
    "pos": "adj.",
    "cn_def": "有機的",
    "en_def": "grown or made without artificial chemicals",
    "sentence": "A: Why are the vegetables in this section of the supermarket so much more expensive than the ones near the entrance? B: These are {{BLANK}} vegetables grown without chemicals, so they cost more to produce, but many customers are happy to pay extra because they believe the food is healthier.",
    "cn": "A：超市這一區的蔬菜為什麼比入口附近的貴那麼多？ B：這些是不使用化學藥劑種植的【有機】蔬菜，所以生產成本比較高，但很多顧客樂意多付錢，因為他們相信這些食物比較健康。"
  },
  {
    "word": "equivalent",
    "pos": "n.",
    "cn_def": "相等物；等量",
    "en_def": "something that has the same amount, value, or size as something else",
    "sentence": "A: How large is the new farm that the agricultural company bought in the countryside last month? B: It covers the {{BLANK}} of about fifty soccer fields, so the manager plans to hire twenty more workers and buy several new tractors before the planting season begins in March.",
    "cn": "A：那家農業公司上個月在鄉下買的新農場有多大？ B：面積【相當於】大約五十個足球場，所以經理打算在三月播種季開始前再雇二十名工人，並添購幾台新拖拉機。"
  },
  {
    "word": "opt",
    "pos": "v.",
    "cn_def": "選擇；挑選",
    "en_def": "to choose one thing instead of another",
    "sentence": "A: Did the farmers in the village agree to sell their crops to the big supermarket chain, or are they still discussing the offer? B: Most of them decided to {{BLANK}} for the local market instead, because they can set their own prices there and they don't want to depend on one large buyer.",
    "cn": "A：村裡的農民同意把作物賣給那家大型連鎖超市了嗎？還是他們還在討論這個提議？ B：他們大多數決定改【選擇】在地市場，因為在那裡可以自己定價，而且他們不想依賴單一的大買家。"
  },
  {
    "word": "indulge",
    "pos": "v.",
    "cn_def": "沉溺；盡情享受",
    "en_def": "to allow yourself to enjoy something special",
    "sentence": "A: What do the visitors usually do at the end of the farm tour, after they have picked fruit and fed the animals? B: Most of them {{BLANK}} in fresh strawberry ice cream at the farm café, and many also buy jam and honey to take home as gifts for their friends and coworkers.",
    "cn": "A：農場參訪結束時，訪客採完水果、餵完動物之後通常會做什麼？ B：他們大多會在農場咖啡廳【盡情享用】新鮮草莓冰淇淋，很多人還會買果醬和蜂蜜帶回家，當作送給朋友和同事的禮物。"
  },
  {
    "word": "abundance",
    "pos": "n.",
    "cn_def": "大量；豐富",
    "en_def": "a very large amount of something",
    "sentence": "A: Why are fruit prices at the market so much lower this month than they were in the spring? B: The good weather this summer produced an {{BLANK}} of peaches and plums, so farmers have more fruit than they can sell, and they are lowering prices to sell everything before it goes bad.",
    "cn": "A：為什麼市場上這個月的水果價格比春天時低那麼多？ B：今年夏天天氣好，桃子和李子【大豐收】，所以農民的水果多到賣不完，他們正在降價，好在水果壞掉前全部賣出去。"
  },
  {
    "word": "stimulate",
    "pos": "v.",
    "cn_def": "刺激；促進",
    "en_def": "to encourage something to grow, develop, or become more active",
    "sentence": "A: Why did the government announce new loans for young people who want to start farms in rural areas? B: Officials hope the loans will {{BLANK}} growth in the countryside, because many villages have lost workers to the cities, and new farms could create jobs and bring families back.",
    "cn": "A：政府為什麼宣布要提供新貸款給想在鄉村地區開農場的年輕人？ B：官員希望這些貸款能【刺激】鄉村的發展，因為許多村莊的勞動力都流失到城市，而新農場可以創造工作機會並把家庭帶回來。"
  },
  {
    "word": "appetite",
    "pos": "n.",
    "cn_def": "食慾；胃口",
    "en_def": "the feeling that you want to eat food",
    "sentence": "A: Did the guests enjoy lunch at the farm restaurant after the long morning of picking apples in the orchard? B: Yes, all that fresh air and hard work gave everyone a big {{BLANK}}, so they ate almost everything on the table and even asked the chef for the recipe for her vegetable soup.",
    "cn": "A：在果園採了一整個早上的蘋果後，客人們喜歡農場餐廳的午餐嗎？ B：喜歡，新鮮空氣加上辛苦工作讓大家【胃口】大開，所以他們幾乎吃光了桌上所有的菜，甚至還向主廚要了她的蔬菜湯食譜。"
  },
  {
    "word": "migrate",
    "pos": "v.",
    "cn_def": "遷移；移居",
    "en_def": "to move from one place to another to live or work",
    "sentence": "A: Why are there fewer young workers in the farming villages than there were ten or twenty years ago? B: Many young people {{BLANK}} to big cities to look for better-paid jobs, so farm owners now find it hard to hire staff, and some are starting to use machines instead.",
    "cn": "A：為什麼現在農村裡的年輕工人比十年或二十年前少？ B：許多年輕人【移居】到大城市尋找薪水更好的工作，所以農場主人現在很難雇到人手，有些人開始改用機器。"
  }
];

const MCQS = [
  {
    "q": "The company rented a bus to take staff to an apple _____ outside town. Everyone picked fruit and enjoyed a picnic under the trees.",
    "options": [
      "orchard",
      "hay",
      "poultry",
      "appetite"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel offers guests a wine-tasting tour every Saturday. Buses leave at ten and visit a local _____ in the hills.",
    "options": [
      "jungle",
      "pillar",
      "vineyard",
      "abundance"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "After the long meeting, the manager handed out cold lemonade. Everyone found the drink very _____ on such a hot afternoon.",
    "options": [
      "backbreaking",
      "refreshing",
      "regional",
      "urban"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The awards dinner was held at a beautiful farm by the lake. Many guests said it was the most _____ event of the year.",
    "options": [
      "organic",
      "regional",
      "steady",
      "memorable"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The farmer stores dry _____ in the barn every autumn. It feeds his horses and cows through the long, cold winter.",
    "options": [
      "vineyard",
      "pillar",
      "hay",
      "equivalent"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The restaurant buys all its chicken and duck from a local _____ farm. The owner says the birds are raised outdoors.",
    "options": [
      "poultry",
      "jungle",
      "abundance",
      "equivalent"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "These young trees will not _____ fruit for another three years. The farm manager expects the first apple harvest in 2029.",
    "options": [
      "opt",
      "migrate",
      "purify",
      "bear"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The heat inside the old greenhouse became _____ by noon. The supervisor told everyone to stop working and rest in the shade.",
    "options": [
      "memorable",
      "unbearable",
      "organic",
      "regional"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Good communication with suppliers is _____ during the harvest season. A single late delivery can cause the whole crop to spoil.",
    "options": [
      "crucial",
      "urban",
      "refreshing",
      "backbreaking"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Picking cotton by hand used to be _____ work for farm laborers. Today, large machines do most of the job in a few hours.",
    "options": [
      "refreshing",
      "regional",
      "backbreaking",
      "organic"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Staff members said the cooking class at the farm was very _____. Many of them asked the HR department to plan another one soon.",
    "options": [
      "unbearable",
      "enjoyable",
      "urban",
      "regional"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The bank's _____ office handles loans for farmers in the southern part of the country. Its staff visit farms every month.",
    "options": [
      "refreshing",
      "backbreaking",
      "enjoyable",
      "regional"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The developer wants to build houses on fifty acres of _____ near the river. Local farmers have asked the city to reject the plan.",
    "options": [
      "appetite",
      "pillar",
      "farmland",
      "poultry"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The supermarket only buys coffee from farms that use _____ methods. These methods protect the soil and reduce water use.",
    "options": [
      "sustainable",
      "unbearable",
      "memorable",
      "refreshing"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "After the flood, the government sent experts to help farmers _____ the damaged fields. Most land should be ready for planting next spring.",
    "options": [
      "indulge",
      "migrate",
      "opt",
      "restore"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Workers will _____ the fruit trees with a natural insect repellent tomorrow morning. Visitors should avoid the north field until noon.",
    "options": [
      "migrate",
      "spray",
      "opt",
      "indulge"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The farm's online sales have shown _____ growth since the new website launched. The owner plans to hire two more packers.",
    "options": [
      "steady",
      "urban",
      "refreshing",
      "backbreaking"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Ms. Lin thanked her _____ staff for finishing the harvest before the typhoon arrived. She gave each employee a generous bonus.",
    "options": [
      "regional",
      "refreshing",
      "hardworking",
      "organic"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The city plans to turn empty rooftops into _____ gardens. Residents will be able to grow vegetables right in the downtown area.",
    "options": [
      "backbreaking",
      "urban",
      "unbearable",
      "steady"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The coffee beans are grown on small farms at the edge of a thick _____. The hot, wet climate gives them a rich flavor.",
    "options": [
      "appetite",
      "equivalent",
      "pillar",
      "jungle"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Agriculture remains a _____ of the local economy in this region. Many shops and factories depend on the crops that farmers grow.",
    "options": [
      "hay",
      "appetite",
      "pillar",
      "vineyard"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The farm installed a new filter system to _____ the well water. Now the vegetables are washed with clean, safe water every day.",
    "options": [
      "purify",
      "migrate",
      "indulge",
      "bear"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Our cafeteria now serves _____ vegetables grown without chemical fertilizers. They cost a little more, but employees say they taste better.",
    "options": [
      "unbearable",
      "backbreaking",
      "crucial",
      "organic"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new greenhouse covers the _____ of three soccer fields. It will allow the company to grow tomatoes all year round.",
    "options": [
      "abundance",
      "equivalent",
      "appetite",
      "poultry"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Customers who prefer local produce can _____ for our weekly vegetable box. It is delivered fresh from nearby farms every Monday.",
    "options": [
      "opt",
      "migrate",
      "indulge",
      "restore"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "During the farm festival, visitors can _____ in homemade pies and fresh cream. All the desserts are made with fruit picked that morning.",
    "options": [
      "purify",
      "migrate",
      "indulge",
      "restore"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "This year's warm weather produced an _____ of strawberries. Prices at the market dropped because farmers had more fruit than they could sell.",
    "options": [
      "appetite",
      "abundance",
      "equivalent",
      "orchard"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The new tax plan is designed to _____ investment in rural areas. Officials hope it will create jobs and attract young families.",
    "options": [
      "purify",
      "migrate",
      "indulge",
      "stimulate"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The long morning of fieldwork gave the volunteers a huge _____. They finished every dish at the farmhouse lunch within minutes.",
    "options": [
      "pillar",
      "vineyard",
      "appetite",
      "hay"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Every winter, many seasonal workers _____ south to find jobs on fruit farms. They return home when the harvest ends in spring.",
    "options": [
      "migrate",
      "opt",
      "purify",
      "stimulate"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "orchard": {
    "pos": "n.",
    "en_def": "an area of land where fruit trees are grown",
    "cn_def": "果園"
  },
  "vineyard": {
    "pos": "n.",
    "en_def": "a farm where grapes are grown, usually to make wine",
    "cn_def": "葡萄園"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "making you feel cool, rested, or full of energy again",
    "cn_def": "令人提神的；清爽的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special or enjoyable enough to be remembered for a long time",
    "cn_def": "難忘的；值得紀念的"
  },
  "hay": {
    "pos": "n.",
    "en_def": "grass that has been cut and dried to feed animals",
    "cn_def": "乾草"
  },
  "poultry": {
    "pos": "n.",
    "en_def": "birds such as chickens and ducks kept for meat or eggs",
    "cn_def": "家禽"
  },
  "bear": {
    "pos": "v.",
    "en_def": "to produce fruit or crops; to accept something difficult",
    "cn_def": "結（果實）；忍受"
  },
  "puke": {
    "pos": "v.",
    "en_def": "(informal) to bring food up from your stomach through your mouth; to vomit",
    "cn_def": "嘔吐（口語）"
  },
  "unbearable": {
    "pos": "adj.",
    "en_def": "too bad, painful, or unpleasant to accept",
    "cn_def": "無法忍受的"
  },
  "crucial": {
    "pos": "adj.",
    "en_def": "extremely important",
    "cn_def": "極重要的；關鍵的"
  },
  "despise": {
    "pos": "v.",
    "en_def": "to dislike someone or something very much",
    "cn_def": "鄙視；厭惡"
  },
  "backbreaking": {
    "pos": "adj.",
    "en_def": "(of work) very hard and tiring for the body",
    "cn_def": "極累人的；繁重的"
  },
  "enjoyable": {
    "pos": "adj.",
    "en_def": "giving pleasure; fun",
    "cn_def": "令人愉快的；有趣的"
  },
  "regional": {
    "pos": "adj.",
    "en_def": "relating to a particular area of a country",
    "cn_def": "地區的；區域性的"
  },
  "farmland": {
    "pos": "n.",
    "en_def": "land that is used for farming",
    "cn_def": "農田；耕地"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue for a long time without harming the environment",
    "cn_def": "永續的；可持續的"
  },
  "restore": {
    "pos": "v.",
    "en_def": "to bring something back to its earlier good condition",
    "cn_def": "恢復；修復"
  },
  "spray": {
    "pos": "v.",
    "en_def": "to cover something with small drops of liquid",
    "cn_def": "噴灑"
  },
  "steady": {
    "pos": "adj.",
    "en_def": "developing or happening at a regular, even rate",
    "cn_def": "穩定的；平穩的"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "putting a lot of effort into work",
    "cn_def": "勤奮的；努力工作的"
  },
  "urban": {
    "pos": "adj.",
    "en_def": "relating to a city or town",
    "cn_def": "都市的；城市的"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest with many trees and plants",
    "cn_def": "叢林；熱帶雨林"
  },
  "pillar": {
    "pos": "n.",
    "en_def": "a very important part of something; a tall column that supports a building",
    "cn_def": "支柱；柱子"
  },
  "purify": {
    "pos": "v.",
    "en_def": "to make something clean by removing dirty or harmful things",
    "cn_def": "淨化；使純淨"
  },
  "organic": {
    "pos": "adj.",
    "en_def": "grown or made without artificial chemicals",
    "cn_def": "有機的"
  },
  "equivalent": {
    "pos": "n.",
    "en_def": "something that has the same amount, value, or size as something else",
    "cn_def": "相等物；等量"
  },
  "opt": {
    "pos": "v.",
    "en_def": "to choose one thing instead of another",
    "cn_def": "選擇；挑選"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to allow yourself to enjoy something special",
    "cn_def": "沉溺；盡情享受"
  },
  "abundance": {
    "pos": "n.",
    "en_def": "a very large amount of something",
    "cn_def": "大量；豐富"
  },
  "stimulate": {
    "pos": "v.",
    "en_def": "to encourage something to grow, develop, or become more active",
    "cn_def": "刺激；促進"
  },
  "appetite": {
    "pos": "n.",
    "en_def": "the feeling that you want to eat food",
    "cn_def": "食慾；胃口"
  },
  "migrate": {
    "pos": "v.",
    "en_def": "to move from one place to another to live or work",
    "cn_def": "遷移；移居"
  }
};

const EXTRA_GLOSSES = {};
