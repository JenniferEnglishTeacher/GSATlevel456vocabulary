// Topic 77 Quiz Data: Construction 建築工程
// Source word list: https://www.examword.com/group-topic/construction — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T77 - Construction 建築工程",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "building",
    "pos": "n.",
    "cn_def": "建築物；大樓",
    "en_def": "a structure with walls and a roof, such as an office or house",
    "sentence": "A: Why are so many workers standing outside the office this morning instead of going up to their desks on time? B: The fire alarm went off at eight o'clock, so security asked everyone to leave the {{BLANK}} until the fire department checks every floor and says it is safe to return.",
    "cn": "A：為什麼今天早上這麼多員工站在辦公室外面，而不是準時上樓到座位上？ B：八點時火災警報響了，所以保全請大家離開【大樓】，直到消防隊檢查完每一層樓並確認可以安全回去為止。"
  },
  {
    "word": "site",
    "pos": "n.",
    "cn_def": "地點；工地",
    "en_def": "a place where something is built or happens",
    "sentence": "A: Do visitors need to wear anything special when they come to see the new hospital that your company is building near the river? B: Yes, everyone who enters the construction {{BLANK}} must wear a hard hat and safety boots, and they have to sign in at the gate before the guide shows them around.",
    "cn": "A：參觀者來看你們公司在河邊興建的新醫院時，需要穿戴什麼特別的東西嗎？ B：需要，每個進入施工【工地】的人都必須戴安全帽、穿安全靴，而且在導覽員帶他們參觀之前要先在大門登記。"
  },
  {
    "word": "project",
    "pos": "n.",
    "cn_def": "專案；工程計畫",
    "en_def": "a planned piece of work with a clear goal",
    "sentence": "A: How long will it take to finish the new shopping center beside the train station, and when can the shops start moving in? B: The whole {{BLANK}} should take about eighteen months, but the builders hope to open the first floor early so that a few stores can start doing business before the holidays.",
    "cn": "A：車站旁的新購物中心要多久才能完工？商店什麼時候可以開始進駐？ B：整個【工程案】大約需要十八個月，但建商希望提早開放一樓，讓幾家店能在假期前開始營業。"
  },
  {
    "word": "foundation",
    "pos": "n.",
    "cn_def": "地基",
    "en_def": "the solid base under a building that supports it",
    "sentence": "A: Why did the workers spend so many weeks digging a deep hole before they started putting up the walls of the new hotel? B: They needed to build a strong {{BLANK}} under the ground first, because the hotel will have twenty floors and the soil in this area is quite soft after heavy rain.",
    "cn": "A：為什麼工人們在開始蓋新飯店的牆之前，花了好幾個星期挖一個深坑？ B：他們必須先在地下打好堅固的【地基】，因為飯店將有二十層樓，而且這一帶的土壤在大雨後相當鬆軟。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；建築物",
    "en_def": "something that has been built, such as a bridge or building",
    "sentence": "A: What did the safety inspector say after she checked the old bridge that connects our factory to the main road last Friday? B: She said the whole {{BLANK}} is still strong enough for cars, but heavy trucks should use the other road until the city replaces some of the rusty metal parts next spring.",
    "cn": "A：上週五安全檢查員檢查完連接我們工廠和主要道路的舊橋後，她說了什麼？ B：她說整個【結構】仍然足以承受汽車通行，但在市政府明年春天更換一些生鏽的金屬零件之前，重型卡車應該改走另一條路。"
  },
  {
    "word": "framework",
    "pos": "n.",
    "cn_def": "框架；骨架",
    "en_def": "the main frame that supports a building or object",
    "sentence": "A: The new warehouse already looks quite tall, but why can I still see right through it from the parking lot? B: So far the workers have only put up the metal {{BLANK}} that holds everything together, and they will add the walls, windows and roof over the next two months if the weather stays dry.",
    "cn": "A：新倉庫看起來已經很高了，但為什麼我從停車場還能直接看穿過去？ B：到目前為止，工人只搭好了支撐整體的金屬【骨架】，如果天氣持續乾燥，他們會在接下來兩個月加上牆壁、窗戶和屋頂。"
  },
  {
    "word": "material",
    "pos": "n.",
    "cn_def": "材料",
    "en_def": "a substance used to make or build things",
    "sentence": "A: Why has the price of the new office building gone up so much since we signed the contract with the builder in January? B: The cost of almost every building {{BLANK}}, such as wood, glass and metal, has risen sharply this year, so the builder asked us to pay an extra eight percent.",
    "cn": "A：自從我們一月和建商簽約以來，新辦公大樓的價格為什麼漲了這麼多？ B：今年幾乎每一種建築【材料】，像是木材、玻璃和金屬，價格都大幅上漲，所以建商要求我們多付百分之八。"
  },
  {
    "word": "cement",
    "pos": "n.",
    "cn_def": "水泥",
    "en_def": "a gray powder mixed with water and sand that becomes hard when dry",
    "sentence": "A: Why are the builders covering the new sidewalk in front of our store with plastic sheets this afternoon? B: They just poured fresh {{BLANK}} this morning, and it needs at least two days to dry completely, so they don't want customers or dogs to walk on it and leave footprints.",
    "cn": "A：為什麼建築工人今天下午用塑膠布蓋住我們店門口的新人行道？ B：他們今天早上剛倒了新的【水泥】，至少需要兩天才能完全乾，所以他們不希望顧客或狗走在上面留下腳印。"
  },
  {
    "word": "concrete",
    "pos": "n.",
    "cn_def": "混凝土",
    "en_def": "a hard building material made from cement, sand, small stones and water",
    "sentence": "A: Why did the city decide to replace the old wooden parking garage behind the train station instead of fixing it? B: The engineers said that wood is not safe enough for so many cars, so the new garage will be made of {{BLANK}}, which is much stronger and will last for at least fifty years.",
    "cn": "A：市政府為什麼決定拆換火車站後面的舊木造停車場，而不是修理它？ B：工程師說木頭對於這麼多車輛來說不夠安全，所以新的停車場會用【混凝土】建造，它堅固得多，而且至少可以用五十年。"
  },
  {
    "word": "brick",
    "pos": "n.",
    "cn_def": "磚塊",
    "en_def": "a small hard block of baked clay used for building walls",
    "sentence": "A: What kind of walls are you planning for the new café that you are opening near the university next year? B: We want warm red {{BLANK}} walls inside and outside, because students like a cozy, old-fashioned look, and the walls also keep the room cool during the hot summer months.",
    "cn": "A：你們明年要在大學附近開的新咖啡館，打算用什麼樣的牆？ B：我們想要內外都是溫暖的紅【磚】牆，因為學生喜歡溫馨、復古的風格，而且這種牆在炎熱的夏季月份也能讓室內保持涼爽。"
  },
  {
    "word": "steel",
    "pos": "n.",
    "cn_def": "鋼；鋼鐵",
    "en_def": "a very strong metal made from iron",
    "sentence": "A: Why is the new sports stadium so much more expensive than the one the city built about twenty years ago? B: The designers chose a roof made of strong {{BLANK}} beams that can cover the whole field without any columns, and that metal is very expensive to buy and to bring here by ship.",
    "cn": "A：為什麼新的體育場比市政府大約二十年前蓋的那座貴這麼多？ B：設計師選擇了用堅固的【鋼】樑做成的屋頂，可以不用任何柱子就覆蓋整個場地，而這種金屬的購買和用船運來的費用都非常昂貴。"
  },
  {
    "word": "crane",
    "pos": "n.",
    "cn_def": "起重機；吊車",
    "en_def": "a tall machine used for lifting and moving heavy things",
    "sentence": "A: How do the workers get those huge glass windows all the way up to the thirtieth floor of the new tower? B: They use a tall {{BLANK}} that lifts each window slowly from the truck, and two workers on the top floor guide it into place with ropes while talking to the driver by radio.",
    "cn": "A：工人們是怎麼把那些巨大的玻璃窗一路送到新大樓的三十樓的？ B：他們用一台高大的【起重機】把每片窗戶從卡車上慢慢吊起來，頂樓的兩名工人一邊用無線電和操作員通話，一邊用繩子把窗戶引導到定位。"
  },
  {
    "word": "scaffold",
    "pos": "n.",
    "cn_def": "鷹架",
    "en_def": "a frame of poles and boards that workers stand on when working on a building",
    "sentence": "A: Why is the front of the bank covered with metal poles and wooden boards this week? B: The painters put up a {{BLANK}} so they can stand safely while they clean and paint the outside walls, and they expect to take it down by Friday if it doesn't rain.",
    "cn": "A：為什麼這週銀行正面被金屬桿和木板包圍住？ B：油漆工搭了【鷹架】，這樣他們在清洗和粉刷外牆時可以安全地站在上面，如果不下雨，他們預計週五前拆掉。"
  },
  {
    "word": "blueprint",
    "pos": "n.",
    "cn_def": "藍圖；設計圖",
    "en_def": "a detailed plan or drawing of a building",
    "sentence": "A: Before we sign the contract, can we see exactly where the meeting rooms and the kitchen will be in our new office? B: Of course, the architect will bring the {{BLANK}} to our meeting on Tuesday, and she can explain every room and make small changes if you want more space.",
    "cn": "A：在我們簽約之前，可以先看看新辦公室裡會議室和茶水間的確切位置嗎？ B：當然可以，建築師週二開會時會帶【藍圖】來，她可以說明每個房間，如果你們想要更多空間，她也可以做些小修改。"
  },
  {
    "word": "contractor",
    "pos": "n.",
    "cn_def": "承包商",
    "en_def": "a person or company paid to do building work",
    "sentence": "A: Who will be responsible for hiring the workers and buying the materials for the new factory in Taichung? B: We chose a local {{BLANK}} with thirty years of experience, so his company will manage the whole job, and we only need to check the progress once a month.",
    "cn": "A：誰會負責雇用工人並購買台中新工廠的材料？ B：我們選了一家有三十年經驗的當地【承包商】，所以他的公司會管理整個工作，我們只需要每個月檢查一次進度。"
  },
  {
    "word": "architect",
    "pos": "n.",
    "cn_def": "建築師",
    "en_def": "a person whose job is to design buildings",
    "sentence": "A: The new library looks so modern, with all that glass and the green garden on the roof, but who came up with the idea? B: A young {{BLANK}} from Kaohsiung won the design competition last year, and she wanted the building to use natural light and save as much energy as possible.",
    "cn": "A：新圖書館看起來好現代，有那麼多玻璃，屋頂上還有綠色花園，這是誰想出來的點子？ B：一位來自高雄的年輕【建築師】去年贏得設計比賽，她希望這棟建築能利用自然光並盡可能節省能源。"
  },
  {
    "word": "engineer",
    "pos": "n.",
    "cn_def": "工程師",
    "en_def": "a person who designs or builds machines, roads, bridges, etc.",
    "sentence": "A: Why did the builders stop working on the tenth floor of the apartment tower for a whole week? B: A structural {{BLANK}} found a small crack in one of the main columns, so she ordered extra tests to make sure the tower is strong enough before anyone continues.",
    "cn": "A：建築工人為什麼整整一個星期停止在公寓大樓十樓施工？ B：一位結構【工程師】在其中一根主柱上發現了一道小裂縫，所以她下令進行額外的測試，在任何人繼續施工前確保大樓夠堅固。"
  },
  {
    "word": "laborer",
    "pos": "n.",
    "cn_def": "勞工；工人",
    "en_def": "a worker who does hard physical work",
    "sentence": "A: Why does the construction company give its workers such long breaks in the middle of the afternoon during the summer? B: Every {{BLANK}} on the team spends hours carrying heavy materials and digging under the hot sun, so the manager wants to protect their health and prevent accidents caused by tiredness.",
    "cn": "A：為什麼營造公司在夏天的下午給工人這麼長的休息時間？ B：團隊中的每個【工人】都要在烈日下花好幾個小時搬運重物和挖土，所以經理想要保護他們的健康，並防止因疲勞造成的意外。"
  },
  {
    "word": "permit",
    "pos": "n.",
    "cn_def": "許可證",
    "en_def": "an official document that allows you to do something",
    "sentence": "A: Why haven't the builders started work on your new restaurant yet, even though you signed the contract two months ago? B: We are still waiting for a building {{BLANK}} from the city government, and without that official paper we are not allowed to break any walls or add a second floor.",
    "cn": "A：你兩個月前就簽約了，為什麼建築工人還沒開始動工蓋你的新餐廳？ B：我們還在等市政府核發建築【許可證】，沒有那份正式文件，我們不准打掉任何牆或加蓋二樓。"
  },
  {
    "word": "build",
    "pos": "v.",
    "cn_def": "建造",
    "en_def": "to make something by putting parts or materials together",
    "sentence": "A: Our company has grown so fast this year, so where are we going to put all the new staff next spring? B: The board has decided to {{BLANK}} a five-story office next to the factory, and the work will start in March so that everyone can move in before the end of the year.",
    "cn": "A：我們公司今年成長得這麼快，明年春天要把新員工安置在哪裡？ B：董事會決定在工廠旁邊【建造】一棟五層樓的辦公室，工程將在三月開始，好讓大家在年底前搬進去。"
  },
  {
    "word": "construct",
    "pos": "v.",
    "cn_def": "建造；建設",
    "en_def": "to build something such as a road, bridge or building",
    "sentence": "A: How is the city going to handle all the traffic when the new science park opens near the highway? B: The government plans to {{BLANK}} two new bridges and a wider road over the next three years, so drivers will be able to reach the park without waiting in long lines.",
    "cn": "A：新的科學園區在高速公路附近開幕時，市政府要如何處理所有交通？ B：政府計畫在未來三年內【興建】兩座新橋和一條更寬的道路，這樣駕駛人就能不必大排長龍抵達園區。"
  },
  {
    "word": "install",
    "pos": "v.",
    "cn_def": "安裝",
    "en_def": "to put equipment into place so it is ready to use",
    "sentence": "A: The new office looks almost ready, but why is it still so hot inside when the staff are moving in next Monday? B: The technicians will come on Thursday to {{BLANK}} the air conditioners in every room, and they promised that everything will be working before the weekend.",
    "cn": "A：新辦公室看起來差不多好了，但員工下週一就要搬進來，為什麼裡面還這麼熱？ B：技術人員星期四會來在每個房間【安裝】冷氣，他們保證週末前一切都會正常運作。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修理；修補",
    "en_def": "to fix something that is broken or damaged",
    "sentence": "A: Why is part of the parking lot behind our office closed off with orange cones today? B: Heavy rain last week made several deep holes in the ground, so the building manager hired a team to {{BLANK}} the surface before someone damages a car or falls and gets hurt.",
    "cn": "A：為什麼今天我們辦公室後面停車場有一部分用橘色三角錐圍起來？ B：上週的大雨在地面上造成好幾個深坑，所以大樓管理員請了一組人來【修補】路面，以免有人的車子受損或有人跌倒受傷。"
  },
  {
    "word": "demolish",
    "pos": "v.",
    "cn_def": "拆除",
    "en_def": "to completely destroy a building",
    "sentence": "A: What is going to happen to the old cinema on Main Street now that it has been closed for so many years? B: The new owner plans to {{BLANK}} it next month and build a modern apartment complex, because the old building is unsafe and would cost too much to fix.",
    "cn": "A：主街上那家關閉多年的老電影院會怎麼樣？ B：新屋主計畫下個月把它【拆除】，然後蓋一座現代化的公寓大樓，因為那棟舊建築不安全，修理的費用也太高。"
  },
  {
    "word": "residential",
    "pos": "adj.",
    "cn_def": "住宅的",
    "en_def": "(of an area) where people live, not where they work",
    "sentence": "A: Why can't the factory owner build a new warehouse on that empty land beside the park? B: That area is a quiet {{BLANK}} zone with houses and schools, so the city does not allow big trucks or noisy businesses there, and he will have to look for land in the industrial park instead.",
    "cn": "A：為什麼工廠老闆不能在公園旁那塊空地上蓋新倉庫？ B：那一區是有房屋和學校的安靜【住宅】區，市政府不允許大型卡車或吵雜的商家在那裡，所以他必須改在工業區找地。"
  },
  {
    "word": "commercial",
    "pos": "adj.",
    "cn_def": "商業的",
    "en_def": "related to business and making money",
    "sentence": "A: Why is the rent for the ground floor so much higher than the rent for the apartments upstairs? B: The ground floor is used as {{BLANK}} space for shops and restaurants, and businesses are willing to pay more because thousands of people walk past the building every day.",
    "cn": "A：為什麼一樓的租金比樓上的公寓高這麼多？ B：一樓是作為商店和餐廳的【商業】空間，因為每天有數千人經過這棟大樓，所以商家願意付更多錢。"
  },
  {
    "word": "industrial",
    "pos": "adj.",
    "cn_def": "工業的",
    "en_def": "connected with factories and the production of goods",
    "sentence": "A: Why did your company decide to move its factory out of the city center last year? B: The government created a new {{BLANK}} park near the port with cheaper land and better roads for trucks, so moving there saved us money and made shipping our products overseas much easier.",
    "cn": "A：為什麼你們公司去年決定把工廠搬出市中心？ B：政府在港口附近設立了新的【工業】園區，土地更便宜，卡車用的道路也更好，所以搬到那裡為我們省了錢，也讓產品運往海外變得容易許多。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "暫時的；臨時的",
    "en_def": "lasting only for a short time",
    "sentence": "A: Where will the staff work while the builders are fixing the roof and the walls of the main office this summer? B: The company has rented a {{BLANK}} office on the other side of the street for three months, and everyone will move back once the work is finished in September.",
    "cn": "A：今年夏天建築工人修理總公司屋頂和牆壁時，員工要在哪裡上班？ B：公司在對街租了一間為期三個月的【臨時】辦公室，等九月工程完成後，大家就會搬回去。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "永久的",
    "en_def": "lasting for a very long time or forever",
    "sentence": "A: Will the outdoor market behind the train station stay open after the summer festival is over? B: Yes, the city liked it so much that it will become a {{BLANK}} market, and workers will build a proper roof and toilets so that it can stay open all year round.",
    "cn": "A：夏季節慶結束後，火車站後面的戶外市集還會繼續開嗎？ B：會，市政府非常喜歡它，所以它會成為【永久性】的市集，工人會蓋一個正式的屋頂和廁所，讓它全年都能營業。"
  },
  {
    "word": "safely",
    "pos": "adv.",
    "cn_def": "安全地",
    "en_def": "in a way that avoids danger or harm",
    "sentence": "A: Why does every new worker have to attend a two-day training course before they are allowed onto the building site? B: The company wants everyone to learn how to use the machines and climb ladders {{BLANK}}, because even one small mistake on a busy site can cause a serious accident.",
    "cn": "A：為什麼每個新工人在獲准進入工地之前，都必須參加兩天的訓練課程？ B：公司希望每個人都學會如何【安全地】使用機器和爬梯子，因為在忙碌的工地上，即使一個小錯誤也可能造成嚴重意外。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "with great attention to avoid mistakes or damage",
    "sentence": "A: Why did the workers spend so much time moving the old paintings out of the museum before the renovation started? B: The paintings are very valuable and easy to damage, so the team packed each one {{BLANK}} in soft boxes and drove them slowly to a storage room across town.",
    "cn": "A：為什麼工人在翻修開始前，花了那麼多時間把舊畫作搬出博物館？ B：那些畫非常珍貴而且容易損壞，所以團隊把每一幅都【小心地】包裝在柔軟的箱子裡，然後慢慢開車送到城市另一頭的儲藏室。"
  },
  {
    "word": "efficiently",
    "pos": "adv.",
    "cn_def": "有效率地",
    "en_def": "in a way that works well without wasting time or money",
    "sentence": "A: How did the builders manage to finish the new train station three months earlier than everyone expected? B: The manager planned every step and made sure the teams worked {{BLANK}}, so nobody wasted time waiting for materials and the machines were busy from early morning until late evening.",
    "cn": "A：建築工人是怎麼做到比大家預期早三個月完成新火車站的？ B：經理規劃了每一個步驟，並確保各組都【有效率地】工作，所以沒有人浪費時間等材料，機器從清晨一直忙到深夜。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地",
    "en_def": "again and again at the same time or interval",
    "sentence": "A: How do you make sure the old office tower stays safe for the hundreds of people who work there every day? B: We hire inspectors to check the elevators, the fire doors and the walls {{BLANK}}, usually every three months, and we fix any problem they find right away.",
    "cn": "A：你們如何確保這棟老舊辦公大樓對每天在那裡工作的數百人來說是安全的？ B：我們聘請檢查員【定期】檢查電梯、防火門和牆壁，通常每三個月一次，發現任何問題就立刻修理。"
  }
];

const MCQS = [
  {
    "q": "The company moved its staff into a new _____ last month. It has twelve floors and a large parking garage.",
    "options": [
      "building",
      "crane",
      "permit",
      "laborer"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Visitors must wear hard hats at all times on the _____. The rule protects them from falling tools and materials.",
    "options": [
      "blueprint",
      "site",
      "contractor",
      "steel"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new hospital _____ is running two months behind schedule. Heavy rain stopped work for most of October.",
    "options": [
      "brick",
      "engineer",
      "project",
      "scaffold"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Before the walls go up, workers must pour a solid _____ deep in the ground. It supports the weight of the whole tower.",
    "options": [
      "architect",
      "permit",
      "crane",
      "foundation"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The steel _____ of the warehouse was finished in March. Next, the builders will add the walls and the roof.",
    "options": [
      "laborer",
      "permit",
      "framework",
      "site"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Glass is a popular building _____ for modern offices. It lets in natural light and makes rooms feel bigger.",
    "options": [
      "material",
      "contractor",
      "crane",
      "engineer"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The new parking garage is made of _____ instead of wood. It is much stronger and will last for decades.",
    "options": [
      "architect",
      "laborer",
      "permit",
      "concrete"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The old factory has thick red _____ walls. The new owners want to keep them because they look so charming.",
    "options": [
      "engineer",
      "brick",
      "contractor",
      "permit"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The bridge is made of _____ beams that can carry heavy trucks. This strong metal is also used in tall towers.",
    "options": [
      "blueprint",
      "site",
      "laborer",
      "steel"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "A tall _____ lifted the heavy glass panels to the top floor. Two workers guided them into place with ropes.",
    "options": [
      "permit",
      "blueprint",
      "crane",
      "foundation"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The architect showed us the _____ of the new office. It clearly marked the meeting rooms, the kitchen and the exits.",
    "options": [
      "crane",
      "blueprint",
      "laborer",
      "cement"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "We hired a local _____ to build the new warehouse. His company will hire the workers and buy all the materials.",
    "options": [
      "contractor",
      "brick",
      "permit",
      "foundation"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The famous _____ designed the museum with a glass roof. She wanted visitors to enjoy natural light in every room.",
    "options": [
      "cement",
      "architect",
      "crane",
      "framework"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "A structural _____ checked the cracks in the old bridge. He said it was still safe for cars but not for trucks.",
    "options": [
      "brick",
      "site",
      "blueprint",
      "engineer"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Each _____ on the team carries heavy bags of sand all day. The company provides cold water and long breaks in summer.",
    "options": [
      "laborer",
      "blueprint",
      "foundation",
      "steel"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "You need a _____ from the city before you add a second floor to your house. The application usually takes six weeks.",
    "options": [
      "crane",
      "brick",
      "permit",
      "framework"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The city plans to _____ a new sports center next year. It will include a swimming pool and two basketball courts.",
    "options": [
      "build",
      "install",
      "repair",
      "demolish"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Engineers will _____ a new bridge across the river by 2028. It will cut travel time to the airport by half.",
    "options": [
      "install",
      "repair",
      "construct",
      "demolish"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The technicians will _____ the new air conditioners on Friday. Staff should clear their desks near the windows before then.",
    "options": [
      "demolish",
      "install",
      "construct",
      "build"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Heavy winds damaged part of the roof last night. The owner called a team to _____ it before the next storm.",
    "options": [
      "construct",
      "install",
      "build",
      "repair"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The old cinema is unsafe and too expensive to fix. The owner will _____ it and put up an apartment block.",
    "options": [
      "install",
      "repair",
      "demolish",
      "construct"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Factories are not allowed in this quiet _____ area. It is full of family homes, parks and schools.",
    "options": [
      "industrial",
      "residential",
      "commercial",
      "temporary"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The ground floor is _____ space, so it is rented to shops and cafés. Businesses pay high rent because many shoppers pass by.",
    "options": [
      "residential",
      "industrial",
      "permanent",
      "commercial"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The factory moved to a new _____ park near the port. The area has cheap land and wide roads for trucks.",
    "options": [
      "industrial",
      "residential",
      "commercial",
      "permanent"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "While the roof is being repaired, staff will work in a _____ office across the street. They will return in three months.",
    "options": [
      "permanent",
      "residential",
      "industrial",
      "temporary"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The summer market was so popular that it became _____. It now stays open all year round with a proper roof.",
    "options": [
      "permanent",
      "temporary",
      "residential",
      "industrial"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "After the storm last night, every worker got home _____. The manager was relieved that nobody had been injured.",
    "options": [
      "efficiently",
      "regularly",
      "safely",
      "carefully"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Please read the contract _____ before you sign it. Some of the rules about delays are hidden in small print.",
    "options": [
      "safely",
      "carefully",
      "efficiently",
      "regularly"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The new machines dig twice as fast and use less fuel, so the team works more _____. As a result, the project finished early.",
    "options": [
      "efficiently",
      "carefully",
      "safely",
      "regularly"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Inspectors check the elevators _____, usually once every three months. This keeps the building safe for everyone.",
    "options": [
      "carefully",
      "regularly",
      "safely",
      "efficiently"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "building": {
    "pos": "n.",
    "en_def": "a structure with walls and a roof, such as an office or house",
    "cn_def": "建築物；大樓"
  },
  "site": {
    "pos": "n.",
    "en_def": "a place where something is built or happens",
    "cn_def": "地點；工地"
  },
  "project": {
    "pos": "n.",
    "en_def": "a planned piece of work with a clear goal",
    "cn_def": "專案；工程計畫"
  },
  "foundation": {
    "pos": "n.",
    "en_def": "the solid base under a building that supports it",
    "cn_def": "地基"
  },
  "structure": {
    "pos": "n.",
    "en_def": "something that has been built, such as a bridge or building",
    "cn_def": "結構；建築物"
  },
  "framework": {
    "pos": "n.",
    "en_def": "the main frame that supports a building or object",
    "cn_def": "框架；骨架"
  },
  "material": {
    "pos": "n.",
    "en_def": "a substance used to make or build things",
    "cn_def": "材料"
  },
  "cement": {
    "pos": "n.",
    "en_def": "a gray powder mixed with water and sand that becomes hard when dry",
    "cn_def": "水泥"
  },
  "concrete": {
    "pos": "n.",
    "en_def": "a hard building material made from cement, sand, small stones and water",
    "cn_def": "混凝土"
  },
  "brick": {
    "pos": "n.",
    "en_def": "a small hard block of baked clay used for building walls",
    "cn_def": "磚塊"
  },
  "steel": {
    "pos": "n.",
    "en_def": "a very strong metal made from iron",
    "cn_def": "鋼；鋼鐵"
  },
  "crane": {
    "pos": "n.",
    "en_def": "a tall machine used for lifting and moving heavy things",
    "cn_def": "起重機；吊車"
  },
  "scaffold": {
    "pos": "n.",
    "en_def": "a frame of poles and boards that workers stand on when working on a building",
    "cn_def": "鷹架"
  },
  "blueprint": {
    "pos": "n.",
    "en_def": "a detailed plan or drawing of a building",
    "cn_def": "藍圖；設計圖"
  },
  "contractor": {
    "pos": "n.",
    "en_def": "a person or company paid to do building work",
    "cn_def": "承包商"
  },
  "architect": {
    "pos": "n.",
    "en_def": "a person whose job is to design buildings",
    "cn_def": "建築師"
  },
  "engineer": {
    "pos": "n.",
    "en_def": "a person who designs or builds machines, roads, bridges, etc.",
    "cn_def": "工程師"
  },
  "laborer": {
    "pos": "n.",
    "en_def": "a worker who does hard physical work",
    "cn_def": "勞工；工人"
  },
  "permit": {
    "pos": "n.",
    "en_def": "an official document that allows you to do something",
    "cn_def": "許可證"
  },
  "build": {
    "pos": "v.",
    "en_def": "to make something by putting parts or materials together",
    "cn_def": "建造"
  },
  "construct": {
    "pos": "v.",
    "en_def": "to build something such as a road, bridge or building",
    "cn_def": "建造；建設"
  },
  "install": {
    "pos": "v.",
    "en_def": "to put equipment into place so it is ready to use",
    "cn_def": "安裝"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken or damaged",
    "cn_def": "修理；修補"
  },
  "demolish": {
    "pos": "v.",
    "en_def": "to completely destroy a building",
    "cn_def": "拆除"
  },
  "residential": {
    "pos": "adj.",
    "en_def": "(of an area) where people live, not where they work",
    "cn_def": "住宅的"
  },
  "commercial": {
    "pos": "adj.",
    "en_def": "related to business and making money",
    "cn_def": "商業的"
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "connected with factories and the production of goods",
    "cn_def": "工業的"
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting only for a short time",
    "cn_def": "暫時的；臨時的"
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "lasting for a very long time or forever",
    "cn_def": "永久的"
  },
  "safely": {
    "pos": "adv.",
    "en_def": "in a way that avoids danger or harm",
    "cn_def": "安全地"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with great attention to avoid mistakes or damage",
    "cn_def": "小心地；仔細地"
  },
  "efficiently": {
    "pos": "adv.",
    "en_def": "in a way that works well without wasting time or money",
    "cn_def": "有效率地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "again and again at the same time or interval",
    "cn_def": "定期地"
  }
};

const EXTRA_GLOSSES = {};
