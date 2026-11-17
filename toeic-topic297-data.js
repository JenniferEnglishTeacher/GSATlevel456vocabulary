// Topic 297 Quiz Data: Population 人口
// Source word list: https://www.examword.com/group-topic/population — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T297 - Population 人口",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "resident",
    "pos": "n.",
    "cn_def": "居民",
    "en_def": "a person who lives in a particular place",
    "sentence": "A: Why is the city council holding a public meeting at the library on Thursday evening instead of during normal office hours? B: They want every local {{BLANK}} to have a chance to attend after work, because the new bus route will pass right through several quiet neighborhoods and many people have complained.",
    "cn": "A：為什麼市議會要在星期四晚上在圖書館舉行公聽會，而不是在正常上班時間？ B：他們希望每位當地【居民】下班後都有機會參加，因為新的公車路線將穿過幾個安靜的社區，而且很多人已經抱怨過了。"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民；市民",
    "en_def": "a person who legally belongs to a country",
    "sentence": "A: Do I need any special documents to apply for the government job that was advertised on the city website last week? B: Yes, you must prove that you are a {{BLANK}} of this country, so bring your passport or national ID card to the interview along with your university diploma and two recent photos.",
    "cn": "A：我要申請上週在市政府網站上公告的政府職缺，需要準備什麼特別的文件嗎？ B：需要，你必須證明你是這個國家的【公民】，所以面試時請帶護照或身分證，還有你的大學畢業證書和兩張近照。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "a group of people living in the same area",
    "sentence": "A: Why did our company decide to send twenty employees to clean the riverside park last Saturday morning instead of having a normal team-building event? B: Our manager believes that a good business should give something back to the local {{BLANK}}, and the volunteers also got to know their coworkers from other departments much better.",
    "cn": "A：為什麼公司上週六早上決定派二十位員工去清理河濱公園，而不是舉辦一般的團隊建立活動？ B：我們經理認為好的企業應該回饋當地【社區】，而且志工們也因此更加認識其他部門的同事。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "都市的",
    "en_def": "relating to a city or town",
    "sentence": "A: Why is the new supermarket chain opening most of its small stores near train stations instead of building large shops outside the city? B: Their research shows that busy {{BLANK}} areas have many young workers who live in small apartments, so they prefer to buy fresh food in small amounts on their way home every evening.",
    "cn": "A：為什麼那家新的連鎖超市把大部分小型店面開在火車站附近，而不是在城外蓋大型賣場？ B：他們的研究顯示，繁忙的【都市】地區有許多住在小公寓的年輕上班族，所以他們比較喜歡每天晚上下班途中少量購買新鮮食物。"
  },
  {
    "word": "rural",
    "pos": "adj.",
    "cn_def": "鄉村的；農村的",
    "en_def": "relating to the countryside, not the city",
    "sentence": "A: Why has the delivery company raised its shipping fees for customers who live in the mountains and small farming villages this year? B: Drivers must travel much longer distances on narrow roads to reach {{BLANK}} addresses, and each truck can only make a few stops a day, so the cost of fuel and labor is much higher.",
    "cn": "A：為什麼那家貨運公司今年調高了住在山區和小農村的客戶的運費？ B：司機必須在狹窄的道路上開更遠的距離才能到達【鄉村】地址，而且每輛卡車一天只能停幾個點，所以油錢和人力成本高很多。"
  },
  {
    "word": "density",
    "pos": "n.",
    "cn_def": "密度",
    "en_def": "how many people or things are in a certain area",
    "sentence": "A: Why does the real estate agent say that apartments in this district are so expensive compared with houses near the airport? B: The population {{BLANK}} here is very high because thousands of office workers want to live close to their jobs, so space is limited and landlords can charge much more rent.",
    "cn": "A：為什麼房仲說這一區的公寓比機場附近的房子貴那麼多？ B：這裡的人口【密度】非常高，因為成千上萬的上班族想住在離公司近的地方，所以空間有限，房東可以收更高的租金。"
  },
  {
    "word": "census",
    "pos": "n.",
    "cn_def": "人口普查",
    "en_def": "an official count of all the people in a country",
    "sentence": "A: Why did a woman from the government knock on our door this morning and ask how many people live in our apartment? B: She was collecting information for the national {{BLANK}}, which happens every ten years, and the results help the government decide where to build new schools, hospitals, and roads.",
    "cn": "A：為什麼今天早上有一位政府的女士來敲門，問我們公寓裡住了幾個人？ B：她在為全國【人口普查】蒐集資料，這每十年舉行一次，結果會幫助政府決定在哪裡蓋新的學校、醫院和道路。"
  },
  {
    "word": "demographic",
    "pos": "adj.",
    "cn_def": "人口統計的",
    "en_def": "relating to the features of a population, such as age or income",
    "sentence": "A: Why does the marketing team want to change the advertisements for our new sports drink before the summer campaign begins? B: The latest {{BLANK}} data shows that most of our customers are actually women over thirty-five, not teenagers, so the colorful cartoon style may not attract the right buyers at all.",
    "cn": "A：為什麼行銷團隊想在夏季活動開始前更改我們新運動飲料的廣告？ B：最新的【人口統計】資料顯示，我們大部分的顧客其實是三十五歲以上的女性，不是青少年，所以那種色彩鮮豔的卡通風格可能完全吸引不到對的買家。"
  },
  {
    "word": "birthrate",
    "pos": "n.",
    "cn_def": "出生率",
    "en_def": "the number of babies born in a period, compared with the population",
    "sentence": "A: Why are so many kindergartens in our town closing or turning into care centers for elderly people these days? B: The {{BLANK}} has fallen sharply over the past twenty years because young couples worry about high housing costs and long working hours, so there are simply not enough small children to fill the classrooms.",
    "cn": "A：為什麼最近我們鎮上有那麼多幼兒園關閉，或改成老人照護中心？ B：過去二十年來【出生率】大幅下降，因為年輕夫妻擔心高房價和長工時，所以根本沒有足夠的小孩來填滿教室。"
  },
  {
    "word": "death rate",
    "pos": "n.phr.",
    "cn_def": "死亡率",
    "en_def": "the number of deaths in a period compared with the population",
    "sentence": "A: Why did the health department report say that the new hospital in the eastern district was such a success for local families? B: Since it opened three years ago, the {{BLANK}} from heart attacks has dropped by almost half, because patients can now reach emergency doctors within fifteen minutes instead of driving over an hour.",
    "cn": "A：為什麼衛生局的報告說東區的新醫院對當地家庭來說如此成功？ B：自從三年前開幕以來，心臟病發作的【死亡率】下降了將近一半，因為病人現在十五分鐘內就能找到急診醫生，而不必開車一個多小時。"
  },
  {
    "word": "migration",
    "pos": "n.",
    "cn_def": "遷移；移居",
    "en_def": "the movement of people from one place to another to live",
    "sentence": "A: Why is the factory in the south having so much trouble finding enough young workers for its production lines this year? B: There has been a large {{BLANK}} of young people from small towns to the capital, where salaries are higher and there are more jobs in technology, so many southern towns now have mostly older residents.",
    "cn": "A：為什麼南部那家工廠今年很難為生產線找到足夠的年輕員工？ B：有大量年輕人從小鎮【遷移】到首都，那裡薪水較高、科技業工作也較多，所以現在很多南部小鎮的居民大多是年長者。"
  },
  {
    "word": "immigration",
    "pos": "n.",
    "cn_def": "移入；移民；入境檢查",
    "en_def": "coming to live in a new country; also the passport check at an airport",
    "sentence": "A: Why did it take you almost two hours to leave the airport after your flight landed from Singapore last night? B: The line at {{BLANK}} was extremely long because three international flights arrived at the same time, and the officers had to check every passport and visa carefully before letting travelers enter the country.",
    "cn": "A：你昨晚從新加坡的班機降落後，為什麼花了快兩個小時才離開機場？ B：【入境檢查】的隊伍排得非常長，因為三班國際航班同時抵達，而且官員必須仔細檢查每本護照和簽證，才讓旅客入境。"
  },
  {
    "word": "emigration",
    "pos": "n.",
    "cn_def": "移出；移居國外",
    "en_def": "the act of leaving your own country to live in another",
    "sentence": "A: Why is the government offering tax benefits to young engineers who stay and work in the country after graduation? B: In recent years, {{BLANK}} has become a serious problem, because many talented graduates move abroad for higher salaries, and local companies are struggling to find skilled staff for their research departments.",
    "cn": "A：為什麼政府要提供稅務優惠給畢業後留在國內工作的年輕工程師？ B：近年來，人才【移居國外】已成為嚴重的問題，因為許多優秀的畢業生為了更高的薪水出國，本地公司很難為研發部門找到有技術的員工。"
  },
  {
    "word": "growth",
    "pos": "n.",
    "cn_def": "成長；增長",
    "en_def": "an increase in size or number",
    "sentence": "A: Why is the city planning to add two new subway lines and widen the main roads over the next ten years? B: Officials expect rapid population {{BLANK}} as more companies move their offices here, and the current transport system is already too crowded during the morning and evening rush hours.",
    "cn": "A：為什麼市政府計畫在未來十年增加兩條新的捷運線並拓寬主要道路？ B：官員預期隨著更多公司把辦公室搬來，人口會快速【成長】，而且目前的交通系統在早晚尖峰時段已經太擁擠了。"
  },
  {
    "word": "decline",
    "pos": "n.",
    "cn_def": "下降；減少",
    "en_def": "a gradual decrease in amount or quality",
    "sentence": "A: Why did the owner of the small bakery near the old train station finally decide to close the shop last month? B: The town has seen a steady {{BLANK}} in the number of people living there since the factory moved away, so she had fewer customers every year and could no longer pay the rent.",
    "cn": "A：為什麼舊火車站附近那家小麵包店的老闆上個月終於決定關店？ B：自從工廠遷走後，鎮上居住的人數持續【減少】，所以她的客人一年比一年少，再也付不起房租了。"
  },
  {
    "word": "overpopulation",
    "pos": "n.",
    "cn_def": "人口過剩",
    "en_def": "a situation in which too many people live in one area",
    "sentence": "A: Why did the speaker at the environmental conference say that some large cities may face water shortages in the future? B: She explained that {{BLANK}} puts heavy pressure on limited resources like clean water, housing, and public transportation, especially in places where the number of residents grows faster than the government can build new facilities.",
    "cn": "A：為什麼環境研討會上的講者說一些大城市未來可能會面臨缺水？ B：她解釋說【人口過剩】會對乾淨的水、住宅和大眾運輸等有限資源造成沉重壓力，特別是在居民人數成長速度超過政府興建新設施速度的地方。"
  },
  {
    "word": "aging",
    "pos": "n.",
    "cn_def": "老化",
    "en_def": "the process of growing old; a population getting older",
    "sentence": "A: Why is the insurance company hiring so many new staff for its health and retirement products department this year? B: Because of the rapid {{BLANK}} of society, more and more customers are worried about medical costs after they retire, so demand for long-term care plans has increased a lot.",
    "cn": "A：為什麼那家保險公司今年為健康和退休產品部門招募那麼多新員工？ B：由於社會快速【老化】，越來越多客戶擔心退休後的醫療費用，所以長期照護保險的需求增加了很多。"
  },
  {
    "word": "youth",
    "pos": "n.",
    "cn_def": "年輕人；青年",
    "en_def": "young people as a group",
    "sentence": "A: Why did the city library start offering free coding classes and career workshops every Saturday afternoon this semester? B: The mayor wants to help local {{BLANK}} learn useful skills for the job market, because many teenagers in this area spend their weekends at home with nothing to do after school ends.",
    "cn": "A：為什麼市立圖書館這學期開始每週六下午提供免費的程式課和職涯工作坊？ B：市長想幫助當地【年輕人】學習對就業市場有用的技能，因為這一區很多青少年放學後週末都待在家裡無事可做。"
  },
  {
    "word": "household",
    "pos": "n.",
    "cn_def": "家庭；戶",
    "en_def": "all the people who live together in one home",
    "sentence": "A: Why did the electricity company send everyone in our building a letter about saving energy during the hot summer months? B: The average {{BLANK}} now uses much more power than ten years ago because families have more air conditioners and computers, so the company is asking people to turn off devices they are not using.",
    "cn": "A：為什麼電力公司寄給我們大樓每個人一封關於夏季節約能源的信？ B：現在平均每個【家庭】的用電量比十年前多很多，因為家裡有更多冷氣和電腦，所以公司請大家關掉沒在使用的電器。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區",
    "en_def": "an area where people live on the edge of a city",
    "sentence": "A: Why did you and your family move out of your apartment downtown and buy a house so far from the office? B: We found a quiet {{BLANK}} with a large park and good schools for our children, and although the train ride takes forty minutes, the houses there are much cheaper and more spacious.",
    "cn": "A：你和家人為什麼搬出市中心的公寓，買了一間離公司這麼遠的房子？ B：我們找到一個安靜的【郊區】，有大公園和適合孩子的好學校，雖然搭火車要四十分鐘，但那裡的房子便宜很多也寬敞很多。"
  },
  {
    "word": "metropolitan",
    "pos": "adj.",
    "cn_def": "大都會的",
    "en_def": "relating to a large city and the areas around it",
    "sentence": "A: Why did the restaurant group decide to open its first branch in the capital instead of in a smaller city near the coast? B: The {{BLANK}} area has over seven million people, including many office workers and tourists who eat out often, so the owners believed it was the best market to test their new menu.",
    "cn": "A：為什麼那家餐飲集團決定把第一家分店開在首都，而不是海邊附近的小城市？ B：那個【大都會】區有超過七百萬人，包括許多常外食的上班族和觀光客，所以老闆們認為那是測試新菜單最好的市場。"
  },
  {
    "word": "region",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "a large area of a country or the world",
    "sentence": "A: Why has the sales manager asked us to hire three more representatives for the northern part of the country this year? B: Our sales in that {{BLANK}} increased by thirty percent last year because several new factories opened there, and the current team cannot visit all the new customers on time.",
    "cn": "A：為什麼銷售經理今年要我們為北部再多聘請三位業務代表？ B：去年我們在那個【地區】的銷售成長了百分之三十，因為那裡開了好幾家新工廠，現有的團隊沒辦法準時拜訪所有新客戶。"
  },
  {
    "word": "minority",
    "pos": "n.",
    "cn_def": "少數；少數群體",
    "en_def": "a smaller group, less than half of a larger group",
    "sentence": "A: Was everyone at the staff meeting happy about the plan to move the office to the new building across the river? B: Most employees liked the idea, but a small {{BLANK}} of workers who live in the west were worried that their daily commute would become much longer and more expensive.",
    "cn": "A：員工會議上，大家都對把辦公室搬到河對岸新大樓的計畫感到滿意嗎？ B：大部分員工喜歡這個想法，但有【少數】住在西邊的員工擔心他們每天的通勤會變得更久、更貴。"
  },
  {
    "word": "majority",
    "pos": "n.",
    "cn_def": "大多數",
    "en_def": "the larger part or number, more than half",
    "sentence": "A: How did the management team decide which day of the week to hold the monthly training sessions for new employees? B: They sent an online survey to all departments, and the {{BLANK}} of staff chose Wednesday afternoon because it is usually the least busy time, so the sessions will start next week.",
    "cn": "A：管理團隊是怎麼決定每月新進員工訓練要在星期幾舉行的？ B：他們寄了一份線上問卷給所有部門，【大多數】員工選了星期三下午，因為那通常是最不忙的時段，所以訓練下週就會開始。"
  },
  {
    "word": "distribution",
    "pos": "n.",
    "cn_def": "分布；分配",
    "en_def": "the way something is spread or shared among people or areas",
    "sentence": "A: Why did the government publish a new map showing where people of different ages live across the country? B: It shows the {{BLANK}} of the population by age group, so city planners can see which areas need more schools for children and which areas need more clinics and services for elderly residents.",
    "cn": "A：為什麼政府公布了一張新地圖，顯示全國不同年齡層的人住在哪裡？ B：它顯示了各年齡層的人口【分布】，讓都市規劃人員可以看出哪些地區需要更多兒童學校，哪些地區需要更多給年長居民的診所和服務。"
  },
  {
    "word": "urbanization",
    "pos": "n.",
    "cn_def": "都市化",
    "en_def": "the process of more people moving to and living in cities",
    "sentence": "A: Why are so many farms near the edge of the city being sold to developers who build shopping malls and apartment towers? B: Rapid {{BLANK}} has increased the demand for housing and stores, so land that was used for growing rice twenty years ago is now much more valuable for building homes and offices.",
    "cn": "A：為什麼城市邊緣有那麼多農地被賣給建造購物中心和公寓大樓的開發商？ B：快速的【都市化】增加了對住宅和商店的需求，所以二十年前用來種稻的土地，現在拿來蓋房子和辦公室價值高得多。"
  },
  {
    "word": "infrastructure",
    "pos": "n.",
    "cn_def": "基礎建設",
    "en_def": "the basic systems a city or country needs, such as roads, water and power",
    "sentence": "A: Why are foreign companies suddenly so interested in building factories in that small coastal city? B: The government has invested heavily in {{BLANK}} over the past five years, including a new port, faster highways, and a reliable power supply, so shipping goods from there is now cheap and efficient.",
    "cn": "A：為什麼外國公司突然對在那個沿海小城市蓋工廠這麼感興趣？ B：過去五年政府在【基礎建設】上大量投資，包括新港口、更快的高速公路和穩定的電力供應，所以現在從那裡運貨既便宜又有效率。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業；工作",
    "en_def": "the state of having a paid job",
    "sentence": "A: Why are so many young families moving to the new industrial park area north of the river these days? B: The two electronics factories there have created thousands of {{BLANK}} opportunities with good salaries and benefits, so people from nearby towns are moving closer to avoid a long daily commute.",
    "cn": "A：為什麼最近有那麼多年輕家庭搬到河北邊的新工業區？ B：那裡的兩家電子工廠創造了數千個薪資和福利都很好的【就業】機會，所以附近城鎮的人都搬得更近，避免每天長途通勤。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "the process of teaching and learning, especially at school",
    "sentence": "A: Why do so many parents want to rent apartments near the old district even though the buildings are small and quite old? B: The schools in that area are famous for providing excellent {{BLANK}}, and parents believe their children will have a better chance of getting into top universities if they study there.",
    "cn": "A：為什麼那麼多家長想在老城區附近租公寓，即使那裡的房子又小又舊？ B：那一區的學校以提供優質【教育】聞名，家長相信孩子在那裡讀書，考上頂尖大學的機會會比較大。"
  },
  {
    "word": "healthcare",
    "pos": "n.",
    "cn_def": "醫療保健",
    "en_def": "medical services that keep people healthy",
    "sentence": "A: Why did your parents decide to move from their quiet village back to the city after living in the countryside for ten years? B: As they get older, they need regular checkups and easy access to good {{BLANK}}, and the nearest hospital from the village was more than an hour away by bus.",
    "cn": "A：你父母在鄉下住了十年之後，為什麼決定從安靜的村莊搬回城市？ B：隨著年紀變大，他們需要定期健康檢查和方便取得良好的【醫療保健】，而村子離最近的醫院搭公車要超過一個小時。"
  },
  {
    "word": "standard of living",
    "pos": "n.phr.",
    "cn_def": "生活水準",
    "en_def": "how comfortable and wealthy people's lives are",
    "sentence": "A: Why did the report say that people in this country are much happier now than they were thirty years ago? B: Their {{BLANK}} has improved a lot because salaries have risen, most families can afford a car and a comfortable apartment, and public services such as transport and medical care are much better.",
    "cn": "A：為什麼報告說這個國家的人現在比三十年前快樂很多？ B：他們的【生活水準】提升了很多，因為薪水提高，大部分家庭買得起車子和舒適的公寓，而且交通和醫療等公共服務也好了很多。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people",
    "sentence": "A: Why did you take a taxi to the conference center this morning instead of the subway like you usually do? B: The subway was so {{BLANK}} because of the holiday festival downtown that I could not even get on the first two trains, and I did not want to be late for my presentation.",
    "cn": "A：你今天早上為什麼搭計程車去會議中心，而不是像平常一樣搭捷運？ B：因為市中心的節慶活動，捷運非常【擁擠】，我連前兩班車都擠不上去，我不想在簡報時遲到。"
  },
  {
    "word": "diverse",
    "pos": "adj.",
    "cn_def": "多元的；多樣的",
    "en_def": "including many different types of people or things",
    "sentence": "A: Why does the hotel train its front desk staff to speak several languages and learn about different cultural customs? B: Its guests come from very {{BLANK}} backgrounds, including business travelers from Asia, Europe, and South America, so the managers want every visitor to feel welcome and understood during their stay.",
    "cn": "A：為什麼那家飯店訓練櫃台人員說好幾種語言，並學習不同的文化習俗？ B：飯店的客人來自非常【多元】的背景，包括來自亞洲、歐洲和南美洲的商務旅客，所以經理希望每位旅客在住宿期間都感到受歡迎和被理解。"
  },
  {
    "word": "estimate",
    "pos": "v.",
    "cn_def": "估計",
    "en_def": "to guess an amount using the information you have",
    "sentence": "A: How many visitors do you think will come to the city's international food fair at the convention center next weekend? B: The organizers {{BLANK}} that around fifty thousand people will attend over the two days, so they have hired extra security guards and arranged free shuttle buses from the main train station.",
    "cn": "A：你覺得下週末在會展中心舉辦的城市國際美食展會有多少參觀者？ B：主辦單位【估計】兩天內大約會有五萬人參加，所以他們加聘了保全人員，並安排從主要火車站出發的免費接駁車。"
  }
];

const MCQS = [
  {
    "q": "All tenants must show their parking permits at the gate. Only a registered _____ of the building may park in the underground garage.",
    "options": [
      "resident",
      "density",
      "census",
      "decline"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Voting in the national election is open to every adult. Each _____ over eighteen must bring an ID card to the polling station.",
    "options": [
      "density",
      "citizen",
      "suburb",
      "region"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The supermarket donates leftover bread to a local charity every evening. Managers say supporting the _____ helps build trust with nearby shoppers.",
    "options": [
      "density",
      "census",
      "community",
      "migration"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Traffic jams are common in the city center during rush hour. Many _____ workers now prefer to cycle or take the subway to the office.",
    "options": [
      "demographic",
      "crowded",
      "diverse",
      "urban"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The village has only one small clinic and no bus service. Doctors say people in _____ areas often travel hours for basic treatment.",
    "options": [
      "rural",
      "urban",
      "crowded",
      "metropolitan"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Tokyo has millions of people living in a small space. Its population _____ is among the highest of any major city in the world.",
    "options": [
      "census",
      "density",
      "majority",
      "youth"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Every ten years the government counts all the people in the country. The next national _____ will take place in March and April.",
    "options": [
      "density",
      "decline",
      "census",
      "region"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Fewer couples are having children because of high living costs. The country's _____ has dropped to its lowest level in fifty years.",
    "options": [
      "infrastructure",
      "suburb",
      "household",
      "birthrate"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The new vaccine program has saved thousands of lives. Since it began, the _____ from the disease has fallen by forty percent.",
    "options": [
      "death rate",
      "standard of living",
      "census",
      "minority"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Many young people leave farming villages to look for jobs in big cities. This _____ has left many rural schools with very few students.",
    "options": [
      "census",
      "migration",
      "density",
      "healthcare"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Foreign visitors must show their passports when they arrive at the airport. The _____ officer will also ask about the purpose of your trip.",
    "options": [
      "emigration",
      "density",
      "immigration",
      "distribution"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Thousands of skilled nurses have left the country to work abroad. Hospitals blame this _____ for the shortage of experienced medical staff.",
    "options": [
      "immigration",
      "urbanization",
      "census",
      "emigration"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The city added two hundred thousand new residents in just five years. Such rapid _____ has put pressure on schools and public transport.",
    "options": [
      "growth",
      "decline",
      "minority",
      "census"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Many shops on Main Street have closed since the factory moved away. Local leaders are worried about the town's economic _____.",
    "options": [
      "census",
      "decline",
      "density",
      "youth"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The island has too many people and not enough fresh water. Experts warn that _____ could cause serious problems in the coming decades.",
    "options": [
      "infrastructure",
      "employment",
      "overpopulation",
      "education"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "More than a quarter of the residents are now over sixty-five. The rapid _____ of the population means more nursing homes are needed.",
    "options": [
      "youth",
      "census",
      "employment",
      "aging"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The survey asked each family how much they spend on food every month. The average _____ spends about one third of its income on groceries.",
    "options": [
      "household",
      "minority",
      "suburb",
      "region"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Lisa moved out of the busy downtown area last year. She now lives in a quiet _____ and takes the train to work every morning.",
    "options": [
      "census",
      "suburb",
      "density",
      "majority"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The company opened offices in the five largest cities in the country. Each _____ area has more than two million people.",
    "options": [
      "rural",
      "diverse",
      "metropolitan",
      "demographic"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Most staff voted to keep the current schedule. Only a small _____ wanted to start work earlier and finish at four o'clock.",
    "options": [
      "majority",
      "density",
      "census",
      "minority"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Ninety percent of the customers rated the new service as excellent. The vast _____ said they would recommend it to friends.",
    "options": [
      "majority",
      "minority",
      "distribution",
      "decline"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The map shows where people of different ages live across the country. It helps planners understand the _____ of the population.",
    "options": [
      "infrastructure",
      "distribution",
      "healthcare",
      "youth"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Farmland around the capital is quickly being replaced by apartment buildings. This rapid _____ has changed the area's landscape in just ten years.",
    "options": [
      "emigration",
      "census",
      "urbanization",
      "healthcare"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The government will spend billions on new roads, bridges, and railways. Better _____ should attract more foreign investment to the area.",
    "options": [
      "minority",
      "census",
      "youth",
      "infrastructure"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The new car factory will hire over three thousand local workers. It is expected to boost _____ in the area significantly.",
    "options": [
      "employment",
      "census",
      "minority",
      "overpopulation"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The foundation gives scholarships to students from low-income families. It believes that good _____ is the key to a better future.",
    "options": [
      "census",
      "education",
      "density",
      "migration"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The clinic offers free checkups to elderly residents every Tuesday. Officials want everyone to have access to affordable _____.",
    "options": [
      "census",
      "density",
      "healthcare",
      "minority"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Salaries have doubled over the past decade while prices stayed stable. As a result, the _____ in the country has improved greatly.",
    "options": [
      "death rate",
      "census",
      "minority",
      "standard of living"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The restaurant was full of tourists during the lunch hour. Because it was so _____, we decided to eat at a quieter cafe nearby.",
    "options": [
      "crowded",
      "rural",
      "diverse",
      "metropolitan"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Nobody knows the exact number of visitors yet. Organizers _____ that about twenty thousand people attended the festival last weekend.",
    "options": [
      "decline",
      "estimate",
      "prevent",
      "settle"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "resident": {
    "pos": "n.",
    "en_def": "a person who lives in a particular place",
    "cn_def": "居民"
  },
  "citizen": {
    "pos": "n.",
    "en_def": "a person who legally belongs to a country",
    "cn_def": "公民；市民"
  },
  "community": {
    "pos": "n.",
    "en_def": "a group of people living in the same area",
    "cn_def": "社區；社群"
  },
  "urban": {
    "pos": "adj.",
    "en_def": "relating to a city or town",
    "cn_def": "都市的"
  },
  "rural": {
    "pos": "adj.",
    "en_def": "relating to the countryside, not the city",
    "cn_def": "鄉村的；農村的"
  },
  "density": {
    "pos": "n.",
    "en_def": "how many people or things are in a certain area",
    "cn_def": "密度"
  },
  "census": {
    "pos": "n.",
    "en_def": "an official count of all the people in a country",
    "cn_def": "人口普查"
  },
  "demographic": {
    "pos": "adj.",
    "en_def": "relating to the features of a population, such as age or income",
    "cn_def": "人口統計的"
  },
  "birthrate": {
    "pos": "n.",
    "en_def": "the number of babies born in a period, compared with the population",
    "cn_def": "出生率"
  },
  "death rate": {
    "pos": "n.phr.",
    "en_def": "the number of deaths in a period compared with the population",
    "cn_def": "死亡率"
  },
  "migration": {
    "pos": "n.",
    "en_def": "the movement of people from one place to another to live",
    "cn_def": "遷移；移居"
  },
  "immigration": {
    "pos": "n.",
    "en_def": "coming to live in a new country; also the passport check at an airport",
    "cn_def": "移入；移民；入境檢查"
  },
  "emigration": {
    "pos": "n.",
    "en_def": "the act of leaving your own country to live in another",
    "cn_def": "移出；移居國外"
  },
  "growth": {
    "pos": "n.",
    "en_def": "an increase in size or number",
    "cn_def": "成長；增長"
  },
  "decline": {
    "pos": "n.",
    "en_def": "a gradual decrease in amount or quality",
    "cn_def": "下降；減少"
  },
  "overpopulation": {
    "pos": "n.",
    "en_def": "a situation in which too many people live in one area",
    "cn_def": "人口過剩"
  },
  "aging": {
    "pos": "n.",
    "en_def": "the process of growing old; a population getting older",
    "cn_def": "老化"
  },
  "youth": {
    "pos": "n.",
    "en_def": "young people as a group",
    "cn_def": "年輕人；青年"
  },
  "household": {
    "pos": "n.",
    "en_def": "all the people who live together in one home",
    "cn_def": "家庭；戶"
  },
  "suburb": {
    "pos": "n.",
    "en_def": "an area where people live on the edge of a city",
    "cn_def": "郊區"
  },
  "metropolitan": {
    "pos": "adj.",
    "en_def": "relating to a large city and the areas around it",
    "cn_def": "大都會的"
  },
  "region": {
    "pos": "n.",
    "en_def": "a large area of a country or the world",
    "cn_def": "地區；區域"
  },
  "minority": {
    "pos": "n.",
    "en_def": "a smaller group, less than half of a larger group",
    "cn_def": "少數；少數群體"
  },
  "majority": {
    "pos": "n.",
    "en_def": "the larger part or number, more than half",
    "cn_def": "大多數"
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way something is spread or shared among people or areas",
    "cn_def": "分布；分配"
  },
  "urbanization": {
    "pos": "n.",
    "en_def": "the process of more people moving to and living in cities",
    "cn_def": "都市化"
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "the basic systems a city or country needs, such as roads, water and power",
    "cn_def": "基礎建設"
  },
  "employment": {
    "pos": "n.",
    "en_def": "the state of having a paid job",
    "cn_def": "就業；工作"
  },
  "education": {
    "pos": "n.",
    "en_def": "the process of teaching and learning, especially at school",
    "cn_def": "教育"
  },
  "healthcare": {
    "pos": "n.",
    "en_def": "medical services that keep people healthy",
    "cn_def": "醫療保健"
  },
  "standard of living": {
    "pos": "n.phr.",
    "en_def": "how comfortable and wealthy people's lives are",
    "cn_def": "生活水準"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "diverse": {
    "pos": "adj.",
    "en_def": "including many different types of people or things",
    "cn_def": "多元的；多樣的"
  },
  "estimate": {
    "pos": "v.",
    "en_def": "to guess an amount using the information you have",
    "cn_def": "估計"
  }
};

const EXTRA_GLOSSES = {};
