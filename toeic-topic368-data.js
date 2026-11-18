// Topic 368 Quiz Data: Sport 運動
// Source word list: https://www.examword.com/group-topic/sport — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T368 - Sport 運動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lifeguard",
    "pos": "n.",
    "cn_def": "救生員",
    "en_def": "a person whose job is to watch swimmers and save them if they are in danger",
    "sentence": "A: Is it safe for the children from our staff family day to swim at the hotel pool while the parents attend the afternoon workshop? B: Yes, it should be fine, because the hotel has a trained {{BLANK}} on duty from nine to six, and the manager promised that two of our own staff will also watch the kids.",
    "cn": "A：員工家庭日的孩子們在家長參加下午工作坊時，在飯店泳池游泳安全嗎？ B：應該沒問題，因為飯店從九點到六點都有受過訓練的【救生員】值班，而且經理也保證我們會有兩位同事一起看顧孩子們。"
  },
  {
    "word": "boating",
    "pos": "n.",
    "cn_def": "划船；乘船遊玩",
    "en_def": "the activity of traveling in a small boat for fun",
    "sentence": "A: What activities has the travel agency planned for our department's weekend trip to the lake, and do we need to bring any special equipment? B: They have planned hiking on Saturday morning and {{BLANK}} on Sunday afternoon, and the resort will provide life jackets, so you only need comfortable clothes and some sunscreen.",
    "cn": "A：旅行社為我們部門週末的湖邊旅遊安排了哪些活動？我們需要帶什麼特別的裝備嗎？ B：他們安排了週六上午健行、週日下午【划船】，渡假村會提供救生衣，所以你只需要帶舒適的衣服和一些防曬乳。"
  },
  {
    "word": "diving",
    "pos": "n.",
    "cn_def": "跳水；潛水",
    "en_def": "the sport of jumping into water head first, or swimming under water",
    "sentence": "A: Why did the city decide to close the deep end of the public pool for the whole summer, even though so many families use it on weekends? B: The inspectors found cracks in the board, so all {{BLANK}} is banned until the repairs are finished, and the city council has not yet approved the budget for the work.",
    "cn": "A：為什麼市政府決定整個夏天關閉公共泳池的深水區，雖然週末有那麼多家庭使用？ B：檢查人員發現跳板上有裂縫，所以在修理完成前禁止所有【跳水】活動，而市議會還沒有核准這項工程的預算。"
  },
  {
    "word": "scuba diving",
    "pos": "n.phr.",
    "cn_def": "水肺潛水",
    "en_def": "swimming deep under water using a tank of air on your back",
    "sentence": "A: Have you decided what to do during your vacation in Kenting next month, or are you still comparing different tour packages online? B: I booked a beginner {{BLANK}} course with a local shop, because I want to see the fish up close, and the instructor will teach us how to use the air tank safely.",
    "cn": "A：你決定好下個月去墾丁度假要做什麼了嗎？還是你還在網路上比較不同的旅遊行程？ B：我向當地一家店報名了初學者【水肺潛水】課程，因為我想近距離看魚，教練會教我們如何安全使用氣瓶。"
  },
  {
    "word": "swimming",
    "pos": "n.",
    "cn_def": "游泳",
    "en_def": "the activity of moving through water using your arms and legs",
    "sentence": "A: Our health insurance company is offering a discount to employees who exercise regularly, so which kind of exercise are you going to choose this year? B: I'm going to try {{BLANK}} at the sports center near the office, because it is easy on my knees, and they have early lessons before work starts at nine.",
    "cn": "A：我們的健康保險公司對規律運動的員工提供折扣，那你今年打算選擇哪一種運動？ B：我打算去公司附近的運動中心【游泳】，因為這對我的膝蓋負擔比較小，而且他們在九點上班前有早班課程。"
  },
  {
    "word": "kayaking",
    "pos": "n.",
    "cn_def": "划獨木舟",
    "en_def": "the sport of moving a small narrow boat through water with a paddle",
    "sentence": "A: The marketing team wants an outdoor activity for the team-building day, but some people are worried it will be too difficult, so what do you suggest? B: I suggest {{BLANK}} on the quiet river near Bitan, because the boats are stable, the guides give a short lesson first, and everyone can paddle at their own pace.",
    "cn": "A：行銷團隊想在團隊建立日安排戶外活動，但有些人擔心會太困難，你有什麼建議嗎？ B：我建議在碧潭附近平靜的河上【划獨木舟】，因為船很穩，嚮導會先上一堂簡短的課，每個人都可以按照自己的速度划。"
  },
  {
    "word": "waterskiing",
    "pos": "n.",
    "cn_def": "滑水",
    "en_def": "the sport of being pulled over water on skis by a boat",
    "sentence": "A: Why does the resort brochure say that guests must sign a special form before they join the morning activity on the lake? B: That activity is {{BLANK}}, and since a fast boat pulls you across the water on two skis, the resort needs you to confirm that you can swim and that you understand the risks.",
    "cn": "A：為什麼渡假村的手冊上說，住客在參加湖上的早晨活動前必須簽一份特別的表格？ B：那個活動是【滑水】，因為快艇會拉著踩在兩塊滑板上的你橫越水面，所以渡假村需要你確認你會游泳並了解其中的風險。"
  },
  {
    "word": "wakeboarding",
    "pos": "n.",
    "cn_def": "滑水板運動；尾波滑水",
    "en_def": "riding on one short board over water while a boat pulls you",
    "sentence": "A: I saw a photo of you on a board behind a boat on the company website, so was that taken at the summer retreat last month? B: Yes, it was, and {{BLANK}} was the most exciting part of the trip, although I fell into the water many times before I could finally stand up on the board.",
    "cn": "A：我在公司網站上看到一張你在船後面踩著板子的照片，那是上個月夏季員工旅遊時拍的嗎？ B：是的，【尾波滑水】是那趟旅程中最刺激的部分，不過我掉進水裡好多次，最後才終於能站在板子上。"
  },
  {
    "word": "surfing",
    "pos": "n.",
    "cn_def": "衝浪",
    "en_def": "the sport of riding on waves on a special board",
    "sentence": "A: Why are so many young travelers booking rooms at our beach hotel in Yilan this autumn, even though it is not the busy summer season? B: The waves are much bigger in autumn, so it is the best time for {{BLANK}}, and we have started renting boards and offering lessons with local instructors at the front desk.",
    "cn": "A：為什麼今年秋天有這麼多年輕旅客預訂我們在宜蘭的海灘飯店，雖然現在不是忙碌的夏季旺季？ B：秋天的浪大很多，所以是【衝浪】的最佳時機，而且我們已經開始在櫃檯出租衝浪板，並提供當地教練的課程。"
  },
  {
    "word": "water polo",
    "pos": "n.phr.",
    "cn_def": "水球",
    "en_def": "a team game played in a pool in which players try to throw a ball into a goal",
    "sentence": "A: The sports center is asking local companies to sponsor a team sport for teenagers, so which one do you think we should support this year? B: I think we should support {{BLANK}}, because the players need a pool, caps, and balls, and the coach told me that the team cannot afford to join the national league without our help.",
    "cn": "A：運動中心正在請當地企業贊助一項青少年團隊運動，你覺得我們今年應該支持哪一項？ B：我覺得我們應該支持【水球】，因為球員需要泳池、泳帽和球，教練告訴我，沒有我們的幫助，球隊負擔不起參加全國聯賽的費用。"
  },
  {
    "word": "combination",
    "pos": "n.",
    "cn_def": "結合；組合",
    "en_def": "two or more things joined or mixed together",
    "sentence": "A: Why do you think the new fitness program has become so popular with the employees in our Taipei office during the past few months? B: It offers a {{BLANK}} of yoga, running, and weight training in one class, so people can improve their strength and flexibility at the same time without spending too many hours at the gym.",
    "cn": "A：你覺得為什麼新的健身課程這幾個月在台北辦公室的員工之間這麼受歡迎？ B：它在一堂課中提供瑜伽、跑步和重量訓練的【結合】，所以大家可以同時提升肌力和柔軟度，而不必在健身房花太多時間。"
  },
  {
    "word": "aquaphobia",
    "pos": "n.",
    "cn_def": "恐水症；怕水",
    "en_def": "a strong fear of water",
    "sentence": "A: Why didn't Mr. Lin join the rest of the sales team on the boat tour during the conference trip to Penghu last week? B: He suffers from {{BLANK}}, so he feels very nervous whenever he is near deep water, and he chose to visit the local museum and try some seafood restaurants instead.",
    "cn": "A：為什麼上週去澎湖參加研討會旅行時，林先生沒有和業務團隊的其他人一起參加乘船遊覽？ B：他有【恐水症】，所以每次靠近深水就會非常緊張，他選擇去參觀當地博物館並嘗試幾家海鮮餐廳。"
  },
  {
    "word": "struggle",
    "pos": "v.",
    "cn_def": "努力；掙扎；奮鬥",
    "en_def": "to try very hard to do something difficult",
    "sentence": "A: How is the new running club at the factory going, and are the workers enjoying the early morning practice before their shifts begin? B: Most of them enjoy it, but some beginners {{BLANK}} to keep up with the group on the uphill part of the route, so the coach has decided to create a slower team for them.",
    "cn": "A：工廠新成立的跑步社進行得怎麼樣？工人們喜歡在輪班開始前的清晨練習嗎？ B：大部分人都很喜歡，但有些初學者在路線上坡的路段很【吃力】才跟得上團體，所以教練決定為他們成立一個速度較慢的隊伍。"
  },
  {
    "word": "athletic",
    "pos": "adj.",
    "cn_def": "運動的；強健的；擅長運動的",
    "en_def": "strong, fit, and good at sports",
    "sentence": "A: The sportswear company wants a new face for its advertising campaign, so what kind of person are the designers hoping to find for the photos? B: They want someone who looks {{BLANK}} and healthy, ideally a real runner or swimmer, because customers trust ads more when the model actually trains and competes in a sport.",
    "cn": "A：運動服飾公司想為廣告活動找新代言人，設計師希望為照片找什麼樣的人？ B：他們想找看起來【強健】又健康的人，最好是真正的跑者或游泳選手，因為當模特兒真的有在訓練和參加比賽時，顧客會更信任廣告。"
  },
  {
    "word": "recreational",
    "pos": "adj.",
    "cn_def": "休閒的；娛樂的",
    "en_def": "done for fun and enjoyment, not as a job or for competition",
    "sentence": "A: The city is building a new park next to our office building, so do you know what facilities will be available to the public? B: According to the plan, there will be a {{BLANK}} area with bike paths, tennis courts, and a small lake, so people can relax and exercise after work or on the weekends.",
    "cn": "A：市政府正在我們辦公大樓旁邊興建新公園，你知道會有哪些設施開放給民眾使用嗎？ B：根據計畫，會有一個【休閒】區，包括自行車道、網球場和一座小湖，讓大家可以在下班後或週末放鬆和運動。"
  },
  {
    "word": "keep fit",
    "pos": "v.phr.",
    "cn_def": "保持健康；保持身材",
    "en_def": "to stay healthy and strong, especially by exercising",
    "sentence": "A: You have been working long hours on the budget report all month, so how do you still find time to stay healthy and full of energy? B: I try to {{BLANK}} by walking to the office every morning and taking the stairs instead of the elevator, and on Saturdays I go hiking with a few friends from the accounting team.",
    "cn": "A：你整個月都在加班趕預算報告，你是怎麼還能找到時間保持健康又充滿活力的？ B：我每天早上走路上班，並且走樓梯而不搭電梯，以此來【保持健康】，週六我也會和幾位會計部的朋友一起去爬山。"
  },
  {
    "word": "traumatize",
    "pos": "v.",
    "cn_def": "使受精神創傷",
    "en_def": "to shock and upset someone so badly that the bad feeling lasts a long time",
    "sentence": "A: Why does the swimming school insist that new instructors never push young children into the water during their first few lessons? B: A frightening experience like that can {{BLANK}} a child, and parents have told us that some kids refused to go near a pool for years after a teacher at another school treated them roughly.",
    "cn": "A：為什麼游泳學校堅持新教練在最初幾堂課中絕不能把小孩推進水裡？ B：那樣可怕的經驗可能會讓孩子【受到心理創傷】，家長告訴我們，有些孩子在其他學校被老師粗暴對待後，好幾年都不肯靠近泳池。"
  },
  {
    "word": "coral",
    "pos": "n.",
    "cn_def": "珊瑚",
    "en_def": "a hard material in warm seas made by very small sea animals",
    "sentence": "A: Why is the tour company asking all divers to stop wearing certain sunscreens before they join the boat trips around Green Island this summer? B: Scientists found that some chemicals in those products harm the {{BLANK}}, so the company only allows ocean-friendly lotions now, and the guides will check every bag before the boat leaves the harbor.",
    "cn": "A：為什麼旅遊公司要求所有潛水客今年夏天在參加綠島周邊的乘船行程前，停止使用某些防曬乳？ B：科學家發現那些產品中的某些化學物質會傷害【珊瑚】，所以公司現在只允許使用對海洋友善的乳液，導遊會在船離港前檢查每個包包。"
  },
  {
    "word": "coral reef",
    "pos": "n.phr.",
    "cn_def": "珊瑚礁",
    "en_def": "a long line of coral in warm shallow sea water where many fish live",
    "sentence": "A: What makes this island so popular with foreign tourists, and why are hotel prices so high during the summer months? B: There is a beautiful {{BLANK}} just a few minutes from the beach, so visitors come from all over the world to see the colorful fish, and the hotels are fully booked from June to September.",
    "cn": "A：是什麼讓這座島這麼受外國觀光客歡迎？為什麼夏季月份的飯店價格這麼高？ B：離海灘只有幾分鐘的地方有一片美麗的【珊瑚礁】，所以世界各地的遊客都來看色彩繽紛的魚，飯店從六月到九月都客滿。"
  },
  {
    "word": "attract",
    "pos": "v.",
    "cn_def": "吸引",
    "en_def": "to make people want to come to a place or event",
    "sentence": "A: Why has the city government agreed to spend so much money on a new marathon route along the river this year? B: Officials hope the race will {{BLANK}} thousands of runners from other countries, and those visitors will stay in local hotels, eat in restaurants, and help small businesses earn more during the slow winter season.",
    "cn": "A：為什麼市政府今年同意花這麼多錢在沿著河岸的新馬拉松路線上？ B：官員希望這場賽事能【吸引】數千名外國跑者，而這些遊客會住在當地飯店、在餐廳用餐，幫助小商家在冬季淡季時賺更多錢。"
  },
  {
    "word": "fascinated",
    "pos": "adj.",
    "cn_def": "著迷的；深感興趣的",
    "en_def": "very interested in something",
    "sentence": "A: How did your son enjoy the field trip to the aquarium that his school organized last Friday, and did he learn anything useful? B: He loved it, and he was {{BLANK}} by the sharks and sea turtles, so now he wants to study marine science, and he keeps asking me to buy him books about ocean animals.",
    "cn": "A：你兒子上週五參加學校舉辦的水族館校外教學玩得開心嗎？他有學到什麼有用的東西嗎？ B：他很喜歡，他對鯊魚和海龜【著迷】極了，所以現在想讀海洋科學，還一直要我買海洋動物的書給他。"
  },
  {
    "word": "entrance",
    "pos": "n.",
    "cn_def": "入口",
    "en_def": "a door, gate, or opening where you go into a place",
    "sentence": "A: I'm meeting the new clients at the sports stadium for the game tonight, but I've never been there, so where should we wait for them? B: Wait at the main {{BLANK}} on the north side, next to the ticket office, because it is the easiest place to find, and the security guards there can also give you directions.",
    "cn": "A：我今晚要在體育場和新客戶碰面看比賽，但我從沒去過那裡，我們應該在哪裡等他們？ B：在北側售票處旁邊的主要【入口】等，因為那裡最容易找到，而且那裡的保全人員也可以幫你指路。"
  },
  {
    "word": "magnificent",
    "pos": "adj.",
    "cn_def": "壯麗的；宏偉的",
    "en_def": "very beautiful and impressive",
    "sentence": "A: Was the view from the top of Hehuan Mountain worth the long bus ride that the tour group took early on Saturday morning? B: Absolutely, the sunrise was {{BLANK}}, with gold and pink clouds above the valley, and many of the guests said it was the best moment of the whole trip, even though it was very cold.",
    "cn": "A：從合歡山頂上看出去的風景值得旅行團週六一大早搭那麼久的巴士嗎？ B：絕對值得，日出非常【壯麗】，山谷上方是金色和粉紅色的雲，很多團員都說那是整趟旅程最棒的時刻，雖然天氣非常冷。"
  },
  {
    "word": "aquatic",
    "pos": "adj.",
    "cn_def": "水生的；水上的",
    "en_def": "living in water, or happening in water",
    "sentence": "A: The new community sports center opens next month, so what kinds of classes will it offer to members and their families? B: It will focus on {{BLANK}} activities such as swimming, water aerobics, and diving lessons, because it has two indoor pools, and it will also offer a few yoga and dance classes in the studio upstairs.",
    "cn": "A：新的社區運動中心下個月開幕，它會提供會員和家人哪些課程？ B：它會著重在【水上】活動，例如游泳、水中有氧和跳水課，因為它有兩座室內泳池，樓上的教室也會提供一些瑜伽和舞蹈課程。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假定；以為",
    "en_def": "to think something is true without being sure",
    "sentence": "A: Why didn't you bring a towel and swimsuit to the hotel, since the welcome letter said there was a pool on the top floor? B: I didn't read the letter carefully, so I just {{BLANK}} that the pool was closed in winter, but now I see that it is heated, so I'll buy a swimsuit at the shop downstairs.",
    "cn": "A：你為什麼沒有帶毛巾和泳衣到飯店？歡迎信上說頂樓有游泳池耶。 B：我沒有仔細讀那封信，所以就【以為】泳池冬天會關閉，但現在我知道它有加溫，所以我會在樓下的商店買一件泳衣。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（總稱）",
    "en_def": "all the subjects or courses taught in a school or training program",
    "sentence": "A: The private school has hired a new sports director this year, so what changes will parents notice in their children's lessons? B: She is updating the physical education {{BLANK}} so that every student learns to swim before graduation, and she will also add basketball, yoga, and first aid to the weekly schedule.",
    "cn": "A：那所私立學校今年聘請了新的體育主任，家長會在孩子的課程中注意到哪些改變？ B：她正在更新體育【課程】，讓每位學生畢業前都學會游泳，她也會在每週課表中加入籃球、瑜伽和急救。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become calm after work or stress",
    "sentence": "A: After such a busy quarter with so many deadlines and client meetings, what are you planning to do during the long holiday weekend? B: I'm going to a hot spring hotel in Beitou to {{BLANK}}, and I will turn off my work phone, read a novel, and maybe take a slow walk in the mountains with my wife.",
    "cn": "A：在這麼忙碌、有這麼多截止期限和客戶會議的一季之後，你連假週末打算做什麼？ B：我要去北投的溫泉飯店【放鬆】一下，我會關掉工作手機、讀一本小說，也許和太太在山裡慢慢散步。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry caused by difficult situations or too much work",
    "sentence": "A: Why did the human resources department start offering free lunchtime yoga classes in the meeting room on the tenth floor? B: A recent survey showed that many employees feel a lot of {{BLANK}} because of long hours and heavy workloads, so the company hopes that regular exercise will help people feel calmer and more productive.",
    "cn": "A：為什麼人資部門開始在十樓會議室提供免費的午休瑜伽課？ B：最近一項調查顯示，許多員工因為工時長、工作量大而感到很大的【壓力】，所以公司希望規律運動能讓大家感覺更平靜、更有效率。"
  },
  {
    "word": "various",
    "pos": "adj.",
    "cn_def": "各種的；不同的",
    "en_def": "of several different kinds",
    "sentence": "A: What kinds of sports equipment does the new store at the shopping mall sell, and are the prices reasonable compared to online shops? B: It sells {{BLANK}} items for running, swimming, and cycling, from shoes to helmets, and members get a ten percent discount, so the prices are actually quite similar to the ones online.",
    "cn": "A：購物中心那家新店賣哪些運動器材？和網路商店相比，價格合理嗎？ B：它賣跑步、游泳和騎自行車的【各種】商品，從鞋子到安全帽都有，會員還可以打九折，所以價格其實和網路上差不多。"
  },
  {
    "word": "novice",
    "pos": "n.",
    "cn_def": "新手；初學者",
    "en_def": "a person who is new to an activity and has little experience",
    "sentence": "A: I want to join the company tennis club, but I've never played before, so will I be able to play with the other members? B: Don't worry, because the club welcomes every {{BLANK}}, and a coach gives free lessons to new players every Tuesday evening, so you will learn the basic rules and skills in a few weeks.",
    "cn": "A：我想參加公司的網球社，但我從來沒打過，我能和其他社員一起打球嗎？ B：別擔心，社團歡迎每一位【新手】，每週二晚上教練會免費指導新球員，所以你幾個星期內就能學會基本規則和技巧。"
  },
  {
    "word": "retreat",
    "pos": "n.",
    "cn_def": "休養處；靜修；（團體）研習營",
    "en_def": "a short trip to a quiet place to rest, think, or train",
    "sentence": "A: Where is the management team going next week, and why will they be away from the office for three whole days? B: They are attending a sports and wellness {{BLANK}} in the mountains, where they will hike, do yoga, and discuss next year's goals in a calm place without phones or daily interruptions.",
    "cn": "A：管理團隊下週要去哪裡？為什麼他們要離開辦公室整整三天？ B：他們要去參加山上的運動與身心健康【研習營】，在那裡健行、做瑜伽，並在一個沒有電話和日常打擾的安靜地方討論明年的目標。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity or event",
    "sentence": "A: The charity bike ride is next Sunday, so how many people from our office have signed up so far, and is there still time to register? B: About twenty colleagues have decided to {{BLANK}}, and registration closes on Friday, so if you want to join, please send your name and shirt size to Linda before then.",
    "cn": "A：慈善自行車活動在下週日，到目前為止我們辦公室有多少人報名了？還來得及登記嗎？ B：大約有二十位同事決定【參加】，報名在週五截止，所以如果你想加入，請在那之前把你的名字和衣服尺寸寄給琳達。"
  },
  {
    "word": "emotionally",
    "pos": "adv.",
    "cn_def": "情感上；情緒上",
    "en_def": "in a way that is connected with feelings",
    "sentence": "A: How did the players react after our city's baseball team finally won the national championship last night after twenty years? B: Many of them were {{BLANK}} overwhelmed, so they cried and hugged each other on the field, and the coach thanked the fans for supporting the team through so many difficult seasons.",
    "cn": "A：昨晚我們城市的棒球隊相隔二十年終於贏得全國冠軍後，球員們有什麼反應？ B：他們很多人【情緒上】激動不已，在球場上哭著互相擁抱，教練也感謝球迷們在那麼多艱難的球季中一路支持球隊。"
  },
  {
    "word": "cycling",
    "pos": "n.",
    "cn_def": "騎自行車",
    "en_def": "the sport or activity of riding a bicycle",
    "sentence": "A: I heard you sold your car last month, so how do you get to the office every day, especially when the weather is bad? B: I've started {{BLANK}} to work along the river path, which takes about twenty-five minutes, and on rainy days I just take the MRT, so I save money and get exercise too.",
    "cn": "A：聽說你上個月把車賣了，那你每天怎麼來上班？尤其是天氣不好的時候？ B：我開始沿著河濱步道【騎自行車】上班，大約要二十五分鐘，下雨天我就搭捷運，所以我既省錢又能運動。"
  },
  {
    "word": "entire",
    "pos": "adj.",
    "cn_def": "整個的；全部的",
    "en_def": "whole; complete",
    "sentence": "A: Why are the hotels near the stadium so expensive this week, and why can't I find a single room for my business trip? B: The international tennis tournament is taking place, so the {{BLANK}} city is full of fans and journalists, and most hotels were booked months ago, so you might need to stay in the next town.",
    "cn": "A：為什麼這週體育館附近的飯店這麼貴？我為什麼連一間出差用的房間都找不到？ B：國際網球錦標賽正在舉行，所以【整個】城市擠滿了球迷和記者，大部分飯店幾個月前就被訂光了，你可能需要住在隔壁的城鎮。"
  },
  {
    "word": "crazy",
    "pos": "adj.",
    "cn_def": "瘋狂的；狂熱的",
    "en_def": "very excited about something, or very strange or silly",
    "sentence": "A: Why is your brother taking a week off work in July, and where is he going with all that camping equipment and those running shoes? B: He is {{BLANK}} about mountain running, so he is joining a hundred-kilometer race in Japan, and he has been training every night after work for six months to prepare for it.",
    "cn": "A：你哥哥為什麼七月要請一週的假？他帶著那些露營裝備和跑鞋要去哪裡？ B：他對山地越野跑非常【狂熱】，所以他要去日本參加一百公里的比賽，為了準備，他已經每天下班後訓練了六個月。"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "cn_def": "提高；增強",
    "en_def": "to improve something or make it better",
    "sentence": "A: Why did the football club spend so much money on new video software and data analysts before the start of the season? B: The coaches want to {{BLANK}} the players' performance by studying every movement during games, and the software shows exactly where each player was standing, so they can plan better training sessions.",
    "cn": "A：為什麼足球俱樂部在球季開始前花那麼多錢買新的影像軟體和聘請數據分析師？ B：教練們想透過研究比賽中的每一個動作來【提升】球員的表現，這套軟體能精確顯示每位球員站的位置，讓他們可以規劃更好的訓練課程。"
  },
  {
    "word": "soccer",
    "pos": "n.",
    "cn_def": "足球",
    "en_def": "a game in which two teams of eleven players kick a ball and try to score goals",
    "sentence": "A: What kind of event is the company planning for the families of employees at the end of the month, and do children need to bring anything? B: We are holding a friendly {{BLANK}} match at the school field near the office, so children should bring sneakers and water bottles, and we will provide team shirts and balls for everyone.",
    "cn": "A：公司月底為員工家屬規劃了什麼樣的活動？孩子們需要帶什麼東西嗎？ B：我們要在公司附近的學校操場舉辦一場友誼【足球】賽，所以孩子們要帶運動鞋和水壺，我們會為每個人準備隊服和球。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "錦標賽；聯賽",
    "en_def": "a competition in which many players or teams play a series of games",
    "sentence": "A: Why is the sales department leaving the office early on Friday afternoon, and is there something important happening that I don't know about? B: They are playing in the annual company basketball {{BLANK}}, and eight teams from different branches will compete over the weekend, with the final game on Sunday evening at the sports center downtown.",
    "cn": "A：為什麼業務部週五下午提早離開辦公室？是有什麼我不知道的重要事情嗎？ B：他們要參加公司年度籃球【錦標賽】，來自不同分公司的八支隊伍會在週末比賽，決賽在週日晚上於市中心的運動中心舉行。"
  },
  {
    "word": "compete",
    "pos": "v.",
    "cn_def": "競爭；比賽",
    "en_def": "to try to win a contest or race against others",
    "sentence": "A: How many athletes from Taiwan will travel to the international swimming championship in Singapore this coming spring? B: Twelve swimmers will {{BLANK}} in various events, and a sports drink company has agreed to pay for their flights and hotels, so the national team can bring two extra coaches and a physical therapist.",
    "cn": "A：今年春天會有多少台灣選手前往新加坡參加國際游泳錦標賽？ B：會有十二位游泳選手在各項比賽中【參賽】，一家運動飲料公司已經同意支付他們的機票和住宿，所以國家隊可以多帶兩位教練和一位物理治療師。"
  },
  {
    "word": "sporty",
    "pos": "adj.",
    "cn_def": "愛好運動的；運動風的",
    "en_def": "liking sports and good at them; looking suitable for sports",
    "sentence": "A: Our cousin's birthday is next week, and she loves being outdoors, so what kind of gift do you think we should buy for her? B: Since she is very {{BLANK}} and goes jogging every morning before work, let's get her a nice water bottle and a fitness watch that can track her heart rate and running distance.",
    "cn": "A：我們表妹下週生日，她很喜歡待在戶外，你覺得我們應該買什麼樣的禮物給她？ B：既然她很【愛運動】，每天早上上班前都會去慢跑，我們就送她一個好的水壺和一支可以記錄心率和跑步距離的運動手錶吧。"
  },
  {
    "word": "opponent",
    "pos": "n.",
    "cn_def": "對手",
    "en_def": "a person or team you play against in a game or competition",
    "sentence": "A: Our badminton team has the semi-final against the bank's team on Saturday, so how are the players preparing for such an important match? B: The coach is showing them videos of every {{BLANK}} they might face, so they can study each player's strengths and weaknesses and plan a smart strategy before the match begins.",
    "cn": "A：我們羽球隊週六要和銀行隊打準決賽，球員們是怎麼為這麼重要的比賽做準備的？ B：教練讓他們看可能會遇到的每一位【對手】的影片，讓他們研究每位選手的優缺點，並在比賽開始前規劃聰明的策略。"
  },
  {
    "word": "beat",
    "pos": "v.",
    "cn_def": "打敗；擊敗",
    "en_def": "to defeat someone in a game or competition",
    "sentence": "A: Do you think our company's volleyball team has any chance in the final against the hospital team, which has won the cup for three years? B: I think we can {{BLANK}} them this time, because our two new players are very tall and quick, and we have practiced together twice a week since September.",
    "cn": "A：你覺得我們公司的排球隊在決賽對上連續三年奪冠的醫院隊有任何勝算嗎？ B：我認為我們這次可以【打敗】他們，因為我們的兩位新球員又高又敏捷，而且我們從九月開始每週一起練習兩次。"
  },
  {
    "word": "self-discipline",
    "pos": "n.",
    "cn_def": "自律；自我約束",
    "en_def": "the ability to make yourself do things you should do, even when you don't want to",
    "sentence": "A: How did you manage to train for the marathon while working full time and taking care of two small children at home? B: It took a lot of {{BLANK}}, because I had to wake up at five every morning to run before work, and I also stopped eating snacks late at night and went to bed early.",
    "cn": "A：你是怎麼在全職工作又要在家照顧兩個小孩的情況下，還能為馬拉松做訓練的？ B：那需要很強的【自律】，因為我每天早上五點就得起床在上班前跑步，我也不再在深夜吃零食，並且早早上床睡覺。"
  }
];

const MCQS = [
  {
    "q": "The pool will close early on Monday afternoon. The only _____ on duty has to attend a first aid training course.",
    "options": [
      "lifeguard",
      "novice",
      "opponent",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Guests must take a safety class before going _____ at the reef. Instructors will explain how to use the air tank properly.",
    "options": [
      "cycling",
      "soccer",
      "scuba diving",
      "boating"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The resort offers _____ trips on the calm river every morning. Each guest receives a paddle, a helmet, and a life jacket.",
    "options": [
      "surfing",
      "kayaking",
      "diving",
      "soccer"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The beach has large waves from October to December. It is a popular place for _____, so many shops rent boards there.",
    "options": [
      "cycling",
      "kayaking",
      "boating",
      "surfing"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our school's _____ team practices in the indoor pool every evening. The players must swim and throw the ball at the same time.",
    "options": [
      "cycling",
      "soccer",
      "water polo",
      "surfing"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The new training plan uses a _____ of running and weight lifting. Employees say it is both effective and fun.",
    "options": [
      "combination",
      "curriculum",
      "tournament",
      "retreat"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Linda Chen has suffered from _____ since childhood. She feels very nervous whenever she has to take a boat or ferry.",
    "options": [
      "self-discipline",
      "stress",
      "curriculum",
      "aquaphobia"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many new members _____ to finish the ten-kilometer run. The coach advises them to start slowly and build their strength over time.",
    "options": [
      "assume",
      "struggle",
      "attract",
      "enhance"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The sportswear brand is looking for _____ models for its new advertisement. Applicants should be fit and have experience in sports.",
    "options": [
      "athletic",
      "entire",
      "aquatic",
      "recreational"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The city plans to open a new _____ area next to the river. It will include bike paths, picnic tables, and tennis courts.",
    "options": [
      "emotionally",
      "fascinated",
      "sporty",
      "recreational"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Experts warn that harsh coaching can _____ young athletes. Some children quit sports completely after being shouted at during practice.",
    "options": [
      "enhance",
      "attract",
      "traumatize",
      "participate"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The tour boat takes divers to a colorful _____ near the island. Visitors can see many kinds of tropical fish there.",
    "options": [
      "entrance",
      "coral reef",
      "retreat",
      "tournament"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The new water park hopes to _____ more than a million visitors a year. It has the longest slide in the country.",
    "options": [
      "compete",
      "participate",
      "struggle",
      "attract"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The children were _____ by the dolphins at the aquarium. They watched the show for an hour without moving from their seats.",
    "options": [
      "fascinated",
      "athletic",
      "entire",
      "various"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Please meet the tour guide at the main _____ of the stadium. She will hand out tickets at exactly six o'clock.",
    "options": [
      "opponent",
      "entrance",
      "combination",
      "novice"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The hotel room has a _____ view of the ocean. Guests can watch the sun rise over the water from their balcony.",
    "options": [
      "athletic",
      "sporty",
      "magnificent",
      "recreational"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The new _____ center has three indoor pools and a diving board. It will open to the public next month.",
    "options": [
      "aquatic",
      "entire",
      "crazy",
      "fascinated"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Please do not _____ that the gym is open on holidays. Check the schedule on our website before you visit.",
    "options": [
      "enhance",
      "assume",
      "beat",
      "traumatize"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The school added swimming lessons to its physical education _____ this year. Every student must pass a basic water safety test.",
    "options": [
      "retreat",
      "tournament",
      "combination",
      "curriculum"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Regular exercise can help reduce _____ caused by heavy workloads. The company now offers free yoga classes at lunchtime.",
    "options": [
      "entrance",
      "opponent",
      "stress",
      "lifeguard"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "This hiking trail is suitable for a complete _____. It is flat, short, and has clear signs along the way.",
    "options": [
      "opponent",
      "novice",
      "lifeguard",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The managers will spend three days at a mountain _____ next week. They will discuss company goals and enjoy outdoor activities.",
    "options": [
      "retreat",
      "entrance",
      "tournament",
      "opponent"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "All employees are invited to _____ in the charity fun run on Sunday. Registration forms are available at the front desk.",
    "options": [
      "assume",
      "beat",
      "participate",
      "attract"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "After the long and difficult final, the players were _____ exhausted. Several of them cried when they received their medals.",
    "options": [
      "rapidly",
      "financially",
      "quietly",
      "emotionally"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The city has built new lanes to make _____ to work safer. Riders no longer have to share the road with buses.",
    "options": [
      "cycling",
      "surfing",
      "boating",
      "diving"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The team hired a nutrition expert to _____ the players' performance. She designed a new diet plan for the season.",
    "options": [
      "assume",
      "traumatize",
      "enhance",
      "struggle"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "Sixteen teams will play in the company tennis _____ this weekend. The winners will receive a trophy and a gift card.",
    "options": [
      "retreat",
      "tournament",
      "entrance",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "More than two hundred runners will _____ in the city marathon on Sunday. Several roads will be closed from six to noon.",
    "options": [
      "assume",
      "relax",
      "attract",
      "compete"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "Our team studied videos of its next _____ before the semifinal. The coach wanted to find the other side's weak points.",
    "options": [
      "lifeguard",
      "opponent",
      "novice",
      "entrance"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "Training for a marathon while working full time requires great _____. Runners must wake up early and follow a strict schedule.",
    "options": [
      "self-discipline",
      "aquaphobia",
      "stress",
      "combination"
    ],
    "answer": 0,
    "vocabIndex": 43
  }
];

const LOOKUP = {
  "lifeguard": {
    "pos": "n.",
    "en_def": "a person whose job is to watch swimmers and save them if they are in danger",
    "cn_def": "救生員"
  },
  "boating": {
    "pos": "n.",
    "en_def": "the activity of traveling in a small boat for fun",
    "cn_def": "划船；乘船遊玩"
  },
  "diving": {
    "pos": "n.",
    "en_def": "the sport of jumping into water head first, or swimming under water",
    "cn_def": "跳水；潛水"
  },
  "scuba diving": {
    "pos": "n.phr.",
    "en_def": "swimming deep under water using a tank of air on your back",
    "cn_def": "水肺潛水"
  },
  "swimming": {
    "pos": "n.",
    "en_def": "the activity of moving through water using your arms and legs",
    "cn_def": "游泳"
  },
  "kayaking": {
    "pos": "n.",
    "en_def": "the sport of moving a small narrow boat through water with a paddle",
    "cn_def": "划獨木舟"
  },
  "waterskiing": {
    "pos": "n.",
    "en_def": "the sport of being pulled over water on skis by a boat",
    "cn_def": "滑水"
  },
  "wakeboarding": {
    "pos": "n.",
    "en_def": "riding on one short board over water while a boat pulls you",
    "cn_def": "滑水板運動；尾波滑水"
  },
  "surfing": {
    "pos": "n.",
    "en_def": "the sport of riding on waves on a special board",
    "cn_def": "衝浪"
  },
  "water polo": {
    "pos": "n.phr.",
    "en_def": "a team game played in a pool in which players try to throw a ball into a goal",
    "cn_def": "水球"
  },
  "combination": {
    "pos": "n.",
    "en_def": "two or more things joined or mixed together",
    "cn_def": "結合；組合"
  },
  "aquaphobia": {
    "pos": "n.",
    "en_def": "a strong fear of water",
    "cn_def": "恐水症；怕水"
  },
  "struggle": {
    "pos": "v.",
    "en_def": "to try very hard to do something difficult",
    "cn_def": "努力；掙扎；奮鬥"
  },
  "athletic": {
    "pos": "adj.",
    "en_def": "strong, fit, and good at sports",
    "cn_def": "運動的；強健的；擅長運動的"
  },
  "recreational": {
    "pos": "adj.",
    "en_def": "done for fun and enjoyment, not as a job or for competition",
    "cn_def": "休閒的；娛樂的"
  },
  "keep fit": {
    "pos": "v.phr.",
    "en_def": "to stay healthy and strong, especially by exercising",
    "cn_def": "保持健康；保持身材"
  },
  "traumatize": {
    "pos": "v.",
    "en_def": "to shock and upset someone so badly that the bad feeling lasts a long time",
    "cn_def": "使受精神創傷"
  },
  "coral": {
    "pos": "n.",
    "en_def": "a hard material in warm seas made by very small sea animals",
    "cn_def": "珊瑚"
  },
  "coral reef": {
    "pos": "n.phr.",
    "en_def": "a long line of coral in warm shallow sea water where many fish live",
    "cn_def": "珊瑚礁"
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make people want to come to a place or event",
    "cn_def": "吸引"
  },
  "fascinated": {
    "pos": "adj.",
    "en_def": "very interested in something",
    "cn_def": "著迷的；深感興趣的"
  },
  "entrance": {
    "pos": "n.",
    "en_def": "a door, gate, or opening where you go into a place",
    "cn_def": "入口"
  },
  "magnificent": {
    "pos": "adj.",
    "en_def": "very beautiful and impressive",
    "cn_def": "壯麗的；宏偉的"
  },
  "aquatic": {
    "pos": "adj.",
    "en_def": "living in water, or happening in water",
    "cn_def": "水生的；水上的"
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without being sure",
    "cn_def": "假定；以為"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects or courses taught in a school or training program",
    "cn_def": "課程（總稱）"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm after work or stress",
    "cn_def": "放鬆"
  },
  "stress": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by difficult situations or too much work",
    "cn_def": "壓力"
  },
  "various": {
    "pos": "adj.",
    "en_def": "of several different kinds",
    "cn_def": "各種的；不同的"
  },
  "novice": {
    "pos": "n.",
    "en_def": "a person who is new to an activity and has little experience",
    "cn_def": "新手；初學者"
  },
  "retreat": {
    "pos": "n.",
    "en_def": "a short trip to a quiet place to rest, think, or train",
    "cn_def": "休養處；靜修；（團體）研習營"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參加；參與"
  },
  "emotionally": {
    "pos": "adv.",
    "en_def": "in a way that is connected with feelings",
    "cn_def": "情感上；情緒上"
  },
  "cycling": {
    "pos": "n.",
    "en_def": "the sport or activity of riding a bicycle",
    "cn_def": "騎自行車"
  },
  "entire": {
    "pos": "adj.",
    "en_def": "whole; complete",
    "cn_def": "整個的；全部的"
  },
  "crazy": {
    "pos": "adj.",
    "en_def": "very excited about something, or very strange or silly",
    "cn_def": "瘋狂的；狂熱的"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to improve something or make it better",
    "cn_def": "提高；增強"
  },
  "soccer": {
    "pos": "n.",
    "en_def": "a game in which two teams of eleven players kick a ball and try to score goals",
    "cn_def": "足球"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a competition in which many players or teams play a series of games",
    "cn_def": "錦標賽；聯賽"
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to win a contest or race against others",
    "cn_def": "競爭；比賽"
  },
  "sporty": {
    "pos": "adj.",
    "en_def": "liking sports and good at them; looking suitable for sports",
    "cn_def": "愛好運動的；運動風的"
  },
  "opponent": {
    "pos": "n.",
    "en_def": "a person or team you play against in a game or competition",
    "cn_def": "對手"
  },
  "beat": {
    "pos": "v.",
    "en_def": "to defeat someone in a game or competition",
    "cn_def": "打敗；擊敗"
  },
  "self-discipline": {
    "pos": "n.",
    "en_def": "the ability to make yourself do things you should do, even when you don't want to",
    "cn_def": "自律；自我約束"
  }
};

const EXTRA_GLOSSES = {};
