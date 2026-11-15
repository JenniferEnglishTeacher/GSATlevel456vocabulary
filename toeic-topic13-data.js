// Topic 13 Quiz Data: Animal 動物
// Source word list: https://www.examword.com/group-topic/animal — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T13 - Animal 動物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "欣賞；感激",
    "en_def": "to understand the value of something and be thankful for it",
    "sentence": "A: How did the volunteers from our office feel after spending the whole Saturday cleaning up the city animal shelter last weekend? B: They were tired but happy, and the shelter manager said she really wanted to {{BLANK}} their hard work, so she sent each of them a thank-you card with a photo of the dogs.",
    "cn": "A：我們辦公室的志工上週末花了整個星期六打掃市立動物收容所，之後他們感覺如何？ B：他們很累但很開心，收容所經理說她非常想【感謝】他們的辛勞，所以她寄給每個人一張附有狗狗照片的感謝卡。"
  },
  {
    "word": "stand out",
    "pos": "v.phr.",
    "cn_def": "突出；脫穎而出",
    "en_def": "to be easy to see or notice because it is different or better",
    "sentence": "A: Why did the pet food company choose that small design agency for its new advertising campaign instead of the big firm in the city? B: The agency's poster showed a sleepy cat sitting inside a coffee cup, and the bright, funny picture made their idea {{BLANK}} from all the other proposals the marketing team received.",
    "cn": "A：為什麼那家寵物食品公司的新廣告活動選了那間小型設計公司，而不是城裡的大公司？ B：那間公司的海報畫了一隻坐在咖啡杯裡打瞌睡的貓，這張明亮又有趣的圖讓他們的點子在行銷團隊收到的所有提案中【脫穎而出】。"
  },
  {
    "word": "creation",
    "pos": "n.",
    "cn_def": "創造；創建；作品",
    "en_def": "the act of making something new, or the new thing that is made",
    "sentence": "A: What is the main goal of the new project that the city council and the local zoo announced at the press conference yesterday afternoon? B: They are planning the {{BLANK}} of a large wildlife park outside town, which will protect rare birds, provide about two hundred jobs, and attract more tourists to the area.",
    "cn": "A：市議會和當地動物園昨天下午在記者會上宣布的新計畫，主要目標是什麼？ B：他們正在規劃在城外【創建】一座大型野生動物園，它將保護稀有鳥類、提供大約兩百個工作機會，並吸引更多觀光客來到這個地區。"
  },
  {
    "word": "special",
    "pos": "adj.",
    "cn_def": "特別的；特殊的",
    "en_def": "different from usual and better or more important",
    "sentence": "A: Is it true that the hotel downtown now allows guests to bring their dogs, even though pets were not permitted there in the past? B: Yes, they opened a {{BLANK}} floor for pet owners last month, with wooden floors, dog beds, and a small garden, and the rooms are fully booked every weekend.",
    "cn": "A：市中心那家飯店現在真的允許房客帶狗入住嗎？過去那裡是不准帶寵物的。 B：是的，他們上個月為飼主開放了一個【特別的】樓層，有木頭地板、狗床和一座小花園，而且每個週末房間都被訂滿。"
  },
  {
    "word": "emotional",
    "pos": "adj.",
    "cn_def": "情感的；情緒激動的",
    "en_def": "having or showing strong feelings",
    "sentence": "A: Why did Mr. Lin leave the meeting early, and why did he look so upset when he returned to his desk this afternoon? B: His family's old dog died this morning after fifteen years together, so he felt very {{BLANK}} and needed a few minutes alone before he could talk to the clients again.",
    "cn": "A：林先生為什麼提早離開會議？他今天下午回到座位時為什麼看起來那麼難過？ B：他家那隻陪伴了十五年的老狗今天早上過世了，所以他的情緒非常【激動】，需要獨處幾分鐘才能再和客戶談話。"
  },
  {
    "word": "connection",
    "pos": "n.",
    "cn_def": "連結；關係",
    "en_def": "a relationship or link between people, animals or things",
    "sentence": "A: Why does the hospital let trained dogs visit the patients in the children's ward every Wednesday afternoon? B: The doctors found that the kids feel calmer and less lonely when they build a {{BLANK}} with a friendly animal, and many of them also eat better and sleep longer after the visits.",
    "cn": "A：為什麼醫院每週三下午讓受過訓練的狗去探訪兒童病房的病人？ B：醫生們發現，孩子們和友善的動物建立【連結】時，會覺得比較平靜、比較不孤單，而且很多孩子在探訪後也吃得更好、睡得更久。"
  },
  {
    "word": "dedicated to something",
    "pos": "adj.phr.",
    "cn_def": "致力於某事；全心投入某事",
    "en_def": "giving a lot of time and energy to one thing because you care about it",
    "sentence": "A: What kind of person are you looking for to manage the new animal rescue center that the company is sponsoring next year? B: We need someone who is {{BLANK}} they truly believe in, because the job has long hours and low pay, and the manager must keep working hard even on difficult days.",
    "cn": "A：你們在找什麼樣的人來管理公司明年要贊助的新動物救援中心？ B：我們需要一個【全心投入】自己真心相信之事的人，因為這份工作工時長、薪水低，即使在辛苦的日子，管理者也必須持續努力。"
  },
  {
    "word": "come across somebody",
    "pos": "v.phr.",
    "cn_def": "偶然遇見某人",
    "en_def": "to meet or find someone by chance",
    "sentence": "A: How did you find such an experienced dog trainer for the security team at the warehouse so quickly last month? B: I was walking in the park on Sunday morning when I happened to {{BLANK}} who was training three police dogs, so I asked for her business card and invited her for an interview.",
    "cn": "A：上個月你是怎麼這麼快就為倉庫保全團隊找到一位經驗這麼豐富的訓犬師？ B：星期天早上我在公園散步時，碰巧【遇見一個人】正在訓練三隻警犬，所以我向她要了名片，並邀請她來面試。"
  },
  {
    "word": "husky",
    "pos": "n.",
    "cn_def": "哈士奇；雪橇犬",
    "en_def": "a strong dog with thick fur that can pull sleds over snow",
    "sentence": "A: Have you decided which photo to use on the front page of our winter travel brochure for the trip to northern Canada? B: Yes, the design team picked a picture of a beautiful {{BLANK}} pulling a sled across the snow, because it shows the adventure and excitement that our customers are looking for.",
    "cn": "A：你決定好我們加拿大北部旅遊行程的冬季旅遊手冊封面要用哪張照片了嗎？ B：決定了，設計團隊選了一張美麗的【哈士奇】拉著雪橇穿越雪地的照片，因為它呈現出顧客想要的冒險與刺激感。"
  },
  {
    "word": "infeasible",
    "pos": "adj.",
    "cn_def": "不可行的",
    "en_def": "not possible to do in practice",
    "sentence": "A: Why did the board reject the plan to build a large pet hotel on the empty land next to our shopping mall? B: The engineers reported that the land is too wet and the building costs would be far too high, so the whole project was judged {{BLANK}} and the board voted against it.",
    "cn": "A：董事會為什麼否決在我們購物中心旁邊空地蓋一間大型寵物旅館的計畫？ B：工程師報告說那塊地太潮濕，建築成本也會高出太多，所以整個計畫被判定為【不可行】，董事會因此投票反對。"
  },
  {
    "word": "child-friendly",
    "pos": "adj.",
    "cn_def": "適合兒童的；對兒童友善的",
    "en_def": "suitable and safe for children",
    "sentence": "A: Which restaurant should we book for the company family day, since many employees are bringing their young kids this year? B: Let's choose the farm café near the river, because it is very {{BLANK}}, with a small petting zoo, a safe play area, and a special menu for kids under ten.",
    "cn": "A：今年很多員工會帶小孩來，公司家庭日我們應該訂哪家餐廳？ B：我們選河邊那家農場咖啡廳吧，因為它非常【適合兒童】，有一個小型動物觸摸區、安全的遊戲區，還有給十歲以下孩子的特別菜單。"
  },
  {
    "word": "fatal",
    "pos": "adj.",
    "cn_def": "致命的",
    "en_def": "causing death",
    "sentence": "A: Why did the farm owner call the vet so early this morning, and why are all the workers wearing masks and gloves today? B: A few of the chickens became sick overnight, and the vet warned that the disease can be {{BLANK}} to birds if it spreads, so everyone must follow strict safety rules.",
    "cn": "A：農場主人今天一大早為什麼打電話給獸醫？為什麼今天所有工人都戴著口罩和手套？ B：有幾隻雞一夜之間生病了，獸醫警告說這種疾病如果擴散，對鳥類可能是【致命的】，所以大家都必須遵守嚴格的安全規定。"
  },
  {
    "word": "dread to think",
    "pos": "v.phr.",
    "cn_def": "不敢想像",
    "en_def": "to be afraid to imagine something bad that might happen",
    "sentence": "A: Did you hear that the security guard found a large snake in the storage room just before the school children arrived for their factory tour? B: Yes, luckily he caught it and called the animal control office, but I {{BLANK}} what might have happened if one of the kids had opened that door first.",
    "cn": "A：你有沒有聽說，就在學童抵達工廠參觀前，保全在儲藏室裡發現了一條大蛇？ B：有，幸好他抓住了牠並打電話給動物管制單位，但我真【不敢想像】如果有個孩子先打開那扇門會發生什麼事。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；進步",
    "en_def": "a change that makes something better",
    "sentence": "A: Has the new diet that the zoo started last spring made any difference to the health of the older elephants? B: Yes, the keepers have seen a clear {{BLANK}} in their weight and energy, and the vet said the animals are now walking longer distances and eating more fresh fruit every day.",
    "cn": "A：動物園去年春天開始的新飲食，對年長大象的健康有任何影響嗎？ B：有，飼育員看到牠們的體重和活力都有明顯的【改善】，獸醫也說這些動物現在每天走更遠的距離，也吃更多新鮮水果。"
  },
  {
    "word": "vertical",
    "pos": "adj.",
    "cn_def": "垂直的；直立的",
    "en_def": "standing or pointing straight up",
    "sentence": "A: How can the pet store fit so many fish tanks and bird houses into such a small shop on the main street? B: The owner installed tall {{BLANK}} shelves along every wall, so the tanks are stacked from the floor to the ceiling, which saves space and still leaves room for customers to walk around.",
    "cn": "A：大街上那間寵物店那麼小，怎麼放得下那麼多魚缸和鳥屋？ B：老闆沿著每面牆裝了高大的【垂直】層架，所以魚缸從地板一路疊到天花板，既節省空間，又還留有讓顧客走動的空間。"
  },
  {
    "word": "beloved",
    "pos": "adj.",
    "cn_def": "心愛的；深受喜愛的",
    "en_def": "loved very much",
    "sentence": "A: Why is everyone in the office signing that large card on the reception desk, and who is it for? B: Our manager's {{BLANK}} cat, which used to visit the office every Friday and sleep on the printer, passed away last night, so we want to show her that we care about her.",
    "cn": "A：為什麼辦公室裡每個人都在簽櫃台上那張大卡片？是要給誰的？ B：我們經理【心愛的】貓昨晚過世了，牠以前每個星期五都會來辦公室，睡在印表機上，所以我們想讓她知道我們很關心她。"
  },
  {
    "word": "rear",
    "pos": "v.",
    "cn_def": "飼養；養育",
    "en_def": "to care for young animals or children until they are fully grown",
    "sentence": "A: What does your cousin do on that large farm in the mountains, since she moved away from the city three years ago? B: She and her husband {{BLANK}} sheep and goats for wool and cheese, and they also sell their products online to customers and restaurants all over the country.",
    "cn": "A：你表姊三年前搬離城市後，在山上那座大農場做什麼？ B：她和她先生【飼養】綿羊和山羊來生產羊毛和起司，他們也在網路上把產品賣給全國各地的顧客和餐廳。"
  },
  {
    "word": "adopt",
    "pos": "v.",
    "cn_def": "領養；收養",
    "en_def": "to take an animal or child into your home and care for it as your own",
    "sentence": "A: Are you still planning to buy a puppy from the pet shop near the train station after you move into your new apartment? B: No, I changed my mind after visiting the animal shelter last weekend, and I decided to {{BLANK}} an older dog that needs a home instead of paying a lot of money.",
    "cn": "A：你搬進新公寓後，還打算從火車站附近那家寵物店買一隻小狗嗎？ B：不了，上週末我去過動物收容所後改變主意，我決定【領養】一隻需要家的老狗，而不是花很多錢去買。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好；業餘愛好",
    "en_def": "an activity you do for fun in your free time",
    "sentence": "A: What do you usually do on weekends to relax, since your job at the bank is so stressful during the week? B: My favorite {{BLANK}} is bird watching, so I often drive to the wetlands with my camera early on Saturday morning and spend a few quiet hours taking photos of the birds.",
    "cn": "A：你在銀行的工作平日壓力那麼大，週末通常做什麼來放鬆？ B：我最喜歡的【嗜好】是賞鳥，所以我常在星期六一大早帶著相機開車去濕地，花幾個安靜的小時拍鳥的照片。"
  },
  {
    "word": "immense",
    "pos": "adj.",
    "cn_def": "巨大的；極大的",
    "en_def": "extremely large or great",
    "sentence": "A: Was the charity event for the wildlife protection group a success, and how much money did your team finally raise? B: It was an {{BLANK}} success, because more than two thousand people attended, and we raised enough money to build a new hospital for injured sea turtles on the coast.",
    "cn": "A：為野生動物保護團體舉辦的慈善活動成功嗎？你們團隊最後募到多少錢？ B：那是一次【巨大的】成功，因為有超過兩千人參加，而且我們募到的錢足夠在海岸邊蓋一間新的受傷海龜醫院。"
  },
  {
    "word": "naughty",
    "pos": "adj.",
    "cn_def": "頑皮的；淘氣的",
    "en_def": "behaving badly; used about children or pets",
    "sentence": "A: Why are you late for the morning meeting, and why is there mud all over the bottom of your trousers? B: Sorry, my {{BLANK}} puppy ran out of the gate while I was taking out the trash, and I had to chase him through the neighbor's wet garden for almost twenty minutes.",
    "cn": "A：你為什麼晨會遲到？褲管下面為什麼全都是泥巴？ B：抱歉，我在倒垃圾的時候，我那隻【頑皮的】小狗從大門跑出去，我只好在鄰居濕答答的花園裡追了牠將近二十分鐘。"
  },
  {
    "word": "relatively",
    "pos": "adv.",
    "cn_def": "相對地；比較而言",
    "en_def": "when compared with other things or people",
    "sentence": "A: Do you think a rabbit would be a good pet for my daughter, since we live in a small apartment and both work long hours? B: Yes, rabbits are {{BLANK}} quiet and clean compared with dogs, and they don't need daily walks, but you will still have to clean their space every few days.",
    "cn": "A：你覺得兔子適合給我女兒當寵物嗎？我們住在小公寓，而且兩個人工時都很長。 B：適合，和狗相比，兔子【相對】安靜又乾淨，也不需要每天散步，不過你們還是得每隔幾天清理牠們的空間。"
  },
  {
    "word": "absolutely",
    "pos": "adv.",
    "cn_def": "絕對地；完全地",
    "en_def": "completely; totally",
    "sentence": "A: Is it really all right to bring my guide dog into your restaurant, since I saw a sign at the door that says no animals are allowed? B: Yes, it is {{BLANK}} fine, because that rule doesn't apply to working dogs, and our staff will happily find you a quiet table near the window.",
    "cn": "A：帶我的導盲犬進你們餐廳真的沒問題嗎？我在門口看到一個寫著禁止動物進入的告示。 B：是的，【完全】沒問題，因為那條規定不適用於工作犬，我們的員工也很樂意為您安排靠窗的安靜座位。"
  },
  {
    "word": "definitely",
    "pos": "adv.",
    "cn_def": "一定；肯定地",
    "en_def": "certainly; without any doubt",
    "sentence": "A: Should we include the visit to the panda center in the schedule for the overseas clients, or will they be too tired after the long flight? B: We should {{BLANK}} keep it, because several of the clients said in their emails that seeing the pandas was the thing they were most excited about.",
    "cn": "A：我們應該把參觀熊貓中心排進海外客戶的行程嗎？還是他們長途飛行後會太累？ B：我們【一定】要保留這個行程，因為有好幾位客戶在電子郵件中說，看熊貓是他們最期待的事。"
  },
  {
    "word": "cage",
    "pos": "n.",
    "cn_def": "籠子",
    "en_def": "a box made of metal bars or wire for keeping birds or animals",
    "sentence": "A: How should we send the two parrots that the customer ordered, since they are traveling by plane to another city tomorrow? B: The airline requires each bird to travel in a strong {{BLANK}} with water, food, and holes for fresh air, so please check the size rules on their website before you buy one.",
    "cn": "A：客戶訂的兩隻鸚鵡明天要搭飛機去另一個城市，我們應該怎麼寄送？ B：航空公司規定每隻鳥都必須裝在堅固的【籠子】裡運送，要附上水、食物和通風孔，所以你買之前請先到他們網站查看尺寸規定。"
  },
  {
    "word": "dump",
    "pos": "v.",
    "cn_def": "丟棄；拋棄",
    "en_def": "to leave something or someone somewhere because you do not want it",
    "sentence": "A: Why has the animal shelter asked the city to put more cameras along the country road behind the industrial park? B: Some people drive there at night to {{BLANK}} pets they no longer want, and the shelter hopes the cameras will stop them and help the police find the owners.",
    "cn": "A：為什麼動物收容所要求市政府在工業區後方的鄉間道路多裝一些攝影機？ B：有些人晚上開車到那裡【丟棄】他們不想再養的寵物，收容所希望攝影機能阻止他們，並幫助警方找到飼主。"
  },
  {
    "word": "stroke",
    "pos": "v.",
    "cn_def": "撫摸",
    "en_def": "to move your hand gently over something, such as an animal's fur",
    "sentence": "A: Is it all right for the children on the school tour to touch the animals at your farm, or is that too dangerous for them? B: They can gently {{BLANK}} the baby goats and the rabbits in the small yard, but they must wash their hands afterward and stay away from the horses.",
    "cn": "A：參加校外教學的孩子們可以摸你們農場的動物嗎？還是那對他們來說太危險了？ B：他們可以在小院子裡輕輕【撫摸】小山羊和兔子，但之後一定要洗手，而且要遠離那些馬。"
  },
  {
    "word": "depressed",
    "pos": "adj.",
    "cn_def": "沮喪的；憂鬱的",
    "en_def": "very sad and without hope, often for a long time",
    "sentence": "A: Why did your sister decide to get a dog after she moved to Taipei for her new job at the advertising company? B: She felt lonely and a little {{BLANK}} living alone in a new city, so her doctor suggested a pet, and now she walks in the park every evening and has made new friends.",
    "cn": "A：你妹妹搬到台北去廣告公司做新工作後，為什麼決定養狗？ B：她一個人住在陌生的城市覺得孤單，也有點【沮喪】，所以她的醫生建議她養寵物，現在她每天傍晚都去公園散步，還交了新朋友。"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫",
    "en_def": "to stop or wait before doing something because you are not sure",
    "sentence": "A: What will you do if my dog gets sick while I am away on my business trip and you are looking after him? B: I will take him to the vet right away, but please don't {{BLANK}} to send me his medical records and the clinic's phone number before you leave, so I have everything ready.",
    "cn": "A：我出差期間由你照顧我的狗，如果牠生病了你會怎麼做？ B：我會立刻帶牠去看獸醫，不過請你出發前不要【猶豫】，把牠的病歷和診所電話傳給我，這樣我就能把一切準備好。"
  },
  {
    "word": "chores",
    "pos": "n.",
    "cn_def": "家務；雜事",
    "en_def": "small regular jobs that you do at home, such as cleaning",
    "sentence": "A: How do you manage to keep your house clean while working full-time and taking care of two cats and a large dog? B: My husband and I share the {{BLANK}} every weekend, so he vacuums the pet hair and washes the floors while I clean the litter boxes and do the laundry.",
    "cn": "A：你全職工作，還要照顧兩隻貓和一隻大狗，是怎麼保持家裡乾淨的？ B：我先生和我每個週末分擔【家務】，他用吸塵器吸寵物毛並拖地，我則清理貓砂盆和洗衣服。"
  },
  {
    "word": "companion",
    "pos": "n.",
    "cn_def": "同伴；伴侶",
    "en_def": "a person or animal you spend a lot of time with",
    "sentence": "A: Why does the retirement home in our neighborhood keep a cat in the main lounge, even though some visitors are worried about allergies? B: The staff said the cat is a wonderful {{BLANK}} for the older residents, who feel happier and less lonely when it sits on their laps during the afternoon.",
    "cn": "A：我們社區的養老院為什麼在主要交誼廳養了一隻貓，即使有些訪客擔心過敏問題？ B：工作人員說，那隻貓是年長住戶很棒的【同伴】，下午牠坐在他們腿上時，他們會覺得更快樂、比較不孤單。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕；緩解",
    "en_def": "to make pain, worry or stress less",
    "sentence": "A: Why did the tech company bring several puppies into the office during the final week of the busy product launch? B: The managers wanted to {{BLANK}} stress among the engineers, who were working late every night, and playing with the puppies for a few minutes really helped everyone feel calmer.",
    "cn": "A：為什麼那家科技公司在忙碌的產品發表最後一週把幾隻小狗帶進辦公室？ B：主管們想【減輕】每天晚上都工作到很晚的工程師們的壓力，和小狗玩幾分鐘真的讓大家感覺平靜許多。"
  }
];

const MCQS = [
  {
    "q": "Thank you for looking after our office fish during the holiday. We truly _____ your kind help and have bought you a small gift.",
    "options": [
      "appreciate",
      "dump",
      "rear",
      "hesitate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our new pet shampoo comes in bright orange bottles. The color helps the product _____ on crowded supermarket shelves.",
    "options": [
      "stroke",
      "stand out",
      "adopt",
      "relieve"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The company announced a new animal care program this week. Its _____ will provide forty jobs for local residents.",
    "options": [
      "cage",
      "hobby",
      "creation",
      "husky"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The hotel offers a _____ discount to guests traveling with pets. This price is available only from Monday to Thursday.",
    "options": [
      "fatal",
      "naughty",
      "depressed",
      "special"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many customers cried while watching our video about rescued dogs. The _____ story made them want to donate money.",
    "options": [
      "vertical",
      "infeasible",
      "emotional",
      "child-friendly"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Volunteers at the shelter spend time with each cat every day. This helps them build a strong _____ with the animals.",
    "options": [
      "connection",
      "chores",
      "creation",
      "cage"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Ms. Chen has worked at the wildlife center for twenty years. She is truly _____ that matters deeply to her.",
    "options": [
      "beloved",
      "fatal",
      "immense",
      "dedicated to something"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "While hiking near the lake, I happened to _____ who was feeding wild ducks. She turned out to be our new vet.",
    "options": [
      "stand out",
      "come across somebody",
      "rear",
      "dump"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The sled tour company owns twelve strong dogs. Each _____ can pull heavy loads across the snow for many hours.",
    "options": [
      "hobby",
      "improvement",
      "creation",
      "husky"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The manager wanted to open a pet café in only two weeks. The team said the plan was _____ because of the short time.",
    "options": [
      "beloved",
      "naughty",
      "infeasible",
      "vertical"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The museum added a petting zoo and a play area last year. It is now one of the most _____ places in the city.",
    "options": [
      "fatal",
      "child-friendly",
      "depressed",
      "infeasible"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Workers must wear thick gloves when handling these snakes. A single bite can be _____ if it is not treated quickly.",
    "options": [
      "fatal",
      "special",
      "child-friendly",
      "beloved"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The new feeding system saves the farm a lot of time. The owner has also noticed a big _____ in the health of the cows.",
    "options": [
      "cage",
      "improvement",
      "husky",
      "chores"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The zoo's oldest elephant died last week at the age of sixty. Visitors left flowers for the _____ animal at the main gate.",
    "options": [
      "infeasible",
      "vertical",
      "child-friendly",
      "beloved"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The farm on the hill has belonged to the same family for a century. They _____ cows and sell fresh milk to local shops.",
    "options": [
      "rear",
      "hesitate",
      "relieve",
      "stand out"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The shelter has more than fifty cats waiting for new homes. Anyone who wants to _____ one must fill out a short form.",
    "options": [
      "hesitate",
      "relieve",
      "adopt",
      "appreciate"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Mr. Park started keeping tropical fish after he retired. This relaxing _____ now takes up most of his free time.",
    "options": [
      "hobby",
      "cage",
      "connection",
      "husky"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Cleaning up after the oil spill was a huge job. Volunteers needed _____ energy and patience to save the injured seabirds.",
    "options": [
      "naughty",
      "vertical",
      "immense",
      "child-friendly"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Our office dog sometimes steals sandwiches from people's desks. Everyone laughs at his _____ behavior, but we keep food out of reach.",
    "options": [
      "fatal",
      "naughty",
      "infeasible",
      "vertical"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Goldfish are _____ easy to care for compared with other pets. They need only clean water and a little food each day.",
    "options": [
      "absolutely",
      "definitely",
      "fatal",
      "relatively"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The new cage we ordered is _____ perfect for our rabbit. It is the right size and completely safe for small animals.",
    "options": [
      "relatively",
      "definitely",
      "absolutely",
      "naughty"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The vet is sure that your cat will get better soon. She will _____ be ready to come home by Friday afternoon.",
    "options": [
      "relatively",
      "absolutely",
      "beloved",
      "definitely"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Please keep the bird in its _____ while the cleaners are working. Otherwise, it may fly out of the open window.",
    "options": [
      "cage",
      "hobby",
      "improvement",
      "connection"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The city will fine anyone who tries to _____ old furniture by the river. Please call the recycling center for a free pickup.",
    "options": [
      "stroke",
      "dump",
      "appreciate",
      "rear"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The therapy cat loves attention from the patients. It purrs loudly whenever someone sits down to _____ its soft fur.",
    "options": [
      "dump",
      "hesitate",
      "adopt",
      "stroke"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "After losing his job, Tom felt _____ for several weeks. Walking his dog every morning slowly helped him feel hopeful again.",
    "options": [
      "child-friendly",
      "depressed",
      "infeasible",
      "vertical"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "If you have any questions about your pet insurance, please do not _____ to call us. Our team is available twenty-four hours a day.",
    "options": [
      "rear",
      "stroke",
      "hesitate",
      "stand out"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Farm workers start their daily _____ at five in the morning. They feed the animals, clean the barns, and collect eggs.",
    "options": [
      "chores",
      "husky",
      "creation",
      "companion"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Many people who live alone choose to keep a cat. A pet can be a loyal _____ during long and quiet evenings.",
    "options": [
      "improvement",
      "companion",
      "cage",
      "creation"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The office now lets employees bring their dogs on Fridays. Managers believe the animals help _____ stress during busy weeks.",
    "options": [
      "relieve",
      "adopt",
      "dump",
      "come across somebody"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "appreciate": {
    "pos": "v.",
    "en_def": "to understand the value of something and be thankful for it",
    "cn_def": "欣賞；感激"
  },
  "stand out": {
    "pos": "v.phr.",
    "en_def": "to be easy to see or notice because it is different or better",
    "cn_def": "突出；脫穎而出"
  },
  "creation": {
    "pos": "n.",
    "en_def": "the act of making something new, or the new thing that is made",
    "cn_def": "創造；創建；作品"
  },
  "special": {
    "pos": "adj.",
    "en_def": "different from usual and better or more important",
    "cn_def": "特別的；特殊的"
  },
  "emotional": {
    "pos": "adj.",
    "en_def": "having or showing strong feelings",
    "cn_def": "情感的；情緒激動的"
  },
  "connection": {
    "pos": "n.",
    "en_def": "a relationship or link between people, animals or things",
    "cn_def": "連結；關係"
  },
  "dedicated to something": {
    "pos": "adj.phr.",
    "en_def": "giving a lot of time and energy to one thing because you care about it",
    "cn_def": "致力於某事；全心投入某事"
  },
  "come across somebody": {
    "pos": "v.phr.",
    "en_def": "to meet or find someone by chance",
    "cn_def": "偶然遇見某人"
  },
  "husky": {
    "pos": "n.",
    "en_def": "a strong dog with thick fur that can pull sleds over snow",
    "cn_def": "哈士奇；雪橇犬"
  },
  "infeasible": {
    "pos": "adj.",
    "en_def": "not possible to do in practice",
    "cn_def": "不可行的"
  },
  "child-friendly": {
    "pos": "adj.",
    "en_def": "suitable and safe for children",
    "cn_def": "適合兒童的；對兒童友善的"
  },
  "fatal": {
    "pos": "adj.",
    "en_def": "causing death",
    "cn_def": "致命的"
  },
  "dread to think": {
    "pos": "v.phr.",
    "en_def": "to be afraid to imagine something bad that might happen",
    "cn_def": "不敢想像"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better",
    "cn_def": "改善；進步"
  },
  "vertical": {
    "pos": "adj.",
    "en_def": "standing or pointing straight up",
    "cn_def": "垂直的；直立的"
  },
  "beloved": {
    "pos": "adj.",
    "en_def": "loved very much",
    "cn_def": "心愛的；深受喜愛的"
  },
  "rear": {
    "pos": "v.",
    "en_def": "to care for young animals or children until they are fully grown",
    "cn_def": "飼養；養育"
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to take an animal or child into your home and care for it as your own",
    "cn_def": "領養；收養"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you do for fun in your free time",
    "cn_def": "嗜好；業餘愛好"
  },
  "immense": {
    "pos": "adj.",
    "en_def": "extremely large or great",
    "cn_def": "巨大的；極大的"
  },
  "naughty": {
    "pos": "adj.",
    "en_def": "behaving badly; used about children or pets",
    "cn_def": "頑皮的；淘氣的"
  },
  "relatively": {
    "pos": "adv.",
    "en_def": "when compared with other things or people",
    "cn_def": "相對地；比較而言"
  },
  "absolutely": {
    "pos": "adv.",
    "en_def": "completely; totally",
    "cn_def": "絕對地；完全地"
  },
  "definitely": {
    "pos": "adv.",
    "en_def": "certainly; without any doubt",
    "cn_def": "一定；肯定地"
  },
  "cage": {
    "pos": "n.",
    "en_def": "a box made of metal bars or wire for keeping birds or animals",
    "cn_def": "籠子"
  },
  "dump": {
    "pos": "v.",
    "en_def": "to leave something or someone somewhere because you do not want it",
    "cn_def": "丟棄；拋棄"
  },
  "stroke": {
    "pos": "v.",
    "en_def": "to move your hand gently over something, such as an animal's fur",
    "cn_def": "撫摸"
  },
  "depressed": {
    "pos": "adj.",
    "en_def": "very sad and without hope, often for a long time",
    "cn_def": "沮喪的；憂鬱的"
  },
  "hesitate": {
    "pos": "v.",
    "en_def": "to stop or wait before doing something because you are not sure",
    "cn_def": "猶豫"
  },
  "chores": {
    "pos": "n.",
    "en_def": "small regular jobs that you do at home, such as cleaning",
    "cn_def": "家務；雜事"
  },
  "companion": {
    "pos": "n.",
    "en_def": "a person or animal you spend a lot of time with",
    "cn_def": "同伴；伴侶"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to make pain, worry or stress less",
    "cn_def": "減輕；緩解"
  }
};

const EXTRA_GLOSSES = {};
