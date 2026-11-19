// Topic 444 Quiz Data: Wild Animal 野生動物
// Source word list: https://www.examword.com/group-topic/wild-animal — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T444 - Wild Animal 野生動物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "wildlife",
    "pos": "n.",
    "cn_def": "野生動物；野生生物",
    "en_def": "wild animals and plants living in nature",
    "sentence": "A: Our travel agency is planning a new tour package for families next spring, so which national park do you think customers would enjoy the most? B: I would recommend the one in the south, because visitors can see a lot of {{BLANK}} from safe wooden platforms, and the local guides explain everything in simple English.",
    "cn": "A：我們旅行社正在規劃明年春天新的家庭旅遊套裝行程，你覺得客戶最喜歡哪一座國家公園？ B：我會推薦南部那一座，因為遊客可以從安全的木製平台上看到許多【野生動物】，而且當地導遊會用簡單的英文解說一切。"
  },
  {
    "word": "predator",
    "pos": "n.",
    "cn_def": "掠食者；捕食性動物",
    "en_def": "an animal that hunts and eats other animals",
    "sentence": "A: Why did the farm manager decide to put up a taller electric fence around the chicken area last week? B: A large {{BLANK}} has been coming down from the hills at night, and the workers found that several chickens were missing, so he wanted to protect the rest before the weekend market.",
    "cn": "A：農場經理為什麼上週決定在雞舍區四周架設更高的電圍欄？ B：有一隻大型【掠食者】晚上一直從山上下來，工人發現好幾隻雞不見了，所以他想在週末市集前保護剩下的雞。"
  },
  {
    "word": "prey",
    "pos": "n.",
    "cn_def": "獵物",
    "en_def": "an animal that is hunted and eaten by another animal",
    "sentence": "A: The film crew spent three weeks in the grasslands, so what was the most exciting scene they managed to record for the documentary? B: They filmed a group of lions slowly following their {{BLANK}} through the tall grass at sunrise, and the director says that clip will probably be shown at the beginning of the program.",
    "cn": "A：攝製團隊在草原上待了三週，他們為紀錄片拍到最精彩的畫面是什麼？ B：他們拍到一群獅子在日出時穿過高草慢慢跟蹤牠們的【獵物】，導演說那段影片很可能會放在節目的開頭播出。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural place where an animal or plant lives",
    "sentence": "A: Why is the city council holding a public meeting about the new shopping mall project on Thursday evening? B: Some residents are worried that building it near the river will destroy the natural {{BLANK}} of several rare birds, so the council wants to hear everyone's opinions before it signs the final contract.",
    "cn": "A：市議會為什麼要在週四晚上就新購物中心計畫召開公聽會？ B：有些居民擔心在河邊興建會破壞幾種稀有鳥類的天然【棲息地】，所以議會想在簽署最終合約前聽取大家的意見。"
  },
  {
    "word": "forest",
    "pos": "n.",
    "cn_def": "森林",
    "en_def": "a large area of land covered with trees",
    "sentence": "A: Where is the company going to hold its team-building retreat this year, and will we need to bring our own camping equipment? B: We have booked some wooden cabins in a quiet {{BLANK}} about two hours from the office, and the hotel will provide tents, sleeping bags, and meals for all the staff members.",
    "cn": "A：公司今年的團隊建立活動要在哪裡舉辦？我們需要自備露營裝備嗎？ B：我們在距離辦公室約兩小時車程的一片寧靜【森林】裡訂了幾間木屋，飯店會為所有員工提供帳篷、睡袋和餐點。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林",
    "en_def": "a thick tropical forest with many plants and trees",
    "sentence": "A: I heard you just came back from your business trip to Southeast Asia, so did you have any free time to go sightseeing? B: Yes, on the last day our client took us on a guided boat tour through the {{BLANK}}, where we saw colorful birds, huge trees, and even a few monkeys playing near the river.",
    "cn": "A：聽說你剛從東南亞出差回來，你有空去觀光嗎？ B：有，最後一天客戶帶我們搭乘有導覽的船遊覽【叢林】，我們看到了色彩繽紛的鳥、巨大的樹木，甚至還有幾隻猴子在河邊玩耍。"
  },
  {
    "word": "desert",
    "pos": "n.",
    "cn_def": "沙漠",
    "en_def": "a large dry area with very little rain and few plants",
    "sentence": "A: Why does the delivery company need to send extra water and spare tires with the trucks going to the new mining site? B: The route crosses a wide {{BLANK}} where the temperature can reach forty-five degrees in the afternoon, and there are no gas stations or repair shops for almost three hundred kilometers.",
    "cn": "A：為什麼運輸公司需要讓前往新礦場的卡車額外攜帶水和備胎？ B：那條路線會穿越一片廣闊的【沙漠】，下午氣溫可高達四十五度，而且將近三百公里都沒有加油站或修車廠。"
  },
  {
    "word": "savanna",
    "pos": "n.",
    "cn_def": "熱帶大草原",
    "en_def": "a large flat area of grassland with few trees in a hot region",
    "sentence": "A: What kind of animals will the guests see during the photography safari that our agency is selling this summer? B: They will drive across the open {{BLANK}} in jeeps with an experienced guide, so they should be able to take pictures of zebras, giraffes, and elephants eating grass near the few trees there.",
    "cn": "A：今年夏天我們旅行社推出的攝影獵遊行程中，客人會看到哪些動物？ B：他們會和經驗豐富的導遊搭乘吉普車穿越廣闊的【熱帶大草原】，應該能拍到斑馬、長頸鹿和大象在那裡少數幾棵樹附近吃草的照片。"
  },
  {
    "word": "mountain",
    "pos": "n.",
    "cn_def": "山；山脈",
    "en_def": "a very high hill",
    "sentence": "A: Why is the new branch manager always so tired on Monday mornings, even though she does not work on weekends? B: She belongs to a hiking club, and almost every Saturday they climb a different {{BLANK}} outside the city, so by Sunday night her legs are sore and she usually goes to bed early.",
    "cn": "A：新任分行經理週末不用上班，為什麼週一早上總是那麼疲倦？ B：她參加了一個登山社，幾乎每個週六都會去爬城外不同的【山】，所以到了週日晚上她的腿都很痠，通常很早就上床睡覺。"
  },
  {
    "word": "lion",
    "pos": "n.",
    "cn_def": "獅子",
    "en_def": "a large wild cat; the male has long thick hair around its head",
    "sentence": "A: Which animal attracts the most visitors at the city zoo, and why did the zoo decide to build a bigger area for it? B: The male {{BLANK}} is the most popular because children love his loud roar and thick golden hair, and the managers wanted to give him more space after many guests complained that his old area looked too small.",
    "cn": "A：市立動物園哪一種動物吸引最多遊客？動物園為什麼決定為牠建造更大的區域？ B：那隻雄【獅子】最受歡迎，因為孩子們喜歡牠響亮的吼聲和濃密的金色鬃毛，而在許多遊客抱怨牠原本的區域看起來太小之後，管理階層想給牠更多空間。"
  },
  {
    "word": "tiger",
    "pos": "n.",
    "cn_def": "老虎",
    "en_def": "a large wild cat with orange fur and black stripes",
    "sentence": "A: Have you seen the new poster that the marketing team designed for the energy drink campaign next month? B: Yes, it shows a strong {{BLANK}} with bright orange fur and black stripes jumping over a rock, and I think it sends a clear message that the drink gives people energy and confidence.",
    "cn": "A：你看過行銷團隊為下個月能量飲料活動設計的新海報了嗎？ B：看過了，上面是一隻有著亮橘色毛皮和黑色條紋的強壯【老虎】躍過岩石，我覺得它清楚傳達了這款飲料能帶給人們活力與自信的訊息。"
  },
  {
    "word": "elephant",
    "pos": "n.",
    "cn_def": "大象",
    "en_def": "a very large gray animal with a long nose called a trunk",
    "sentence": "A: Why are so many tourists visiting the animal rescue center in the north of the country these days? B: The center takes care of an old {{BLANK}} that was hurt in a traffic accident, and visitors can watch the staff feed him bananas and wash his huge gray body with water every afternoon.",
    "cn": "A：為什麼最近有那麼多觀光客去該國北部的動物救援中心？ B：那個中心在照顧一頭在交通事故中受傷的老【大象】，遊客每天下午都可以看工作人員餵牠吃香蕉，並用水清洗牠巨大的灰色身體。"
  },
  {
    "word": "bear",
    "pos": "n.",
    "cn_def": "熊",
    "en_def": "a large heavy animal with thick fur that can stand on its back legs",
    "sentence": "A: Why did the park rangers close the campground near the lake during the busy holiday weekend? B: Several campers reported seeing a large brown {{BLANK}} looking for food near the garbage cans at night, so the rangers decided it was safer to move everyone to another area until the animal left.",
    "cn": "A：為什麼公園巡山員在忙碌的連假週末關閉了湖邊的露營區？ B：好幾位露營者回報晚上看到一頭大型棕【熊】在垃圾桶附近找食物，所以巡山員決定在牠離開前把所有人移到另一區比較安全。"
  },
  {
    "word": "wolf",
    "pos": "n.",
    "cn_def": "狼",
    "en_def": "a wild animal like a large dog that lives and hunts in groups",
    "sentence": "A: What is the documentary that our production company is making for the nature channel about this year? B: It follows a single gray {{BLANK}} that left its family group and traveled hundreds of kilometers alone across the snowy countryside to find a new place to live and hunt.",
    "cn": "A：我們製作公司今年為自然頻道拍攝的紀錄片是關於什麼的？ B：它記錄一匹離開家族群體的灰【狼】，獨自穿越積雪的鄉間數百公里，尋找新的棲身與狩獵之地。"
  },
  {
    "word": "deer",
    "pos": "n.",
    "cn_def": "鹿",
    "en_def": "a wild animal with long legs; the male has antlers",
    "sentence": "A: Why were you late for the client meeting this morning, since you usually leave home very early? B: A young {{BLANK}} suddenly walked onto the country road in front of my car, so I had to stop and wait until it slowly crossed into the field, and then traffic was heavy on the highway.",
    "cn": "A：你今天早上為什麼開客戶會議遲到？你通常很早就出門的。 B：一隻小【鹿】突然走到我車前的鄉間道路上，所以我必須停下來等牠慢慢走進田裡，接著高速公路上的車流又很多。"
  },
  {
    "word": "monkey",
    "pos": "n.",
    "cn_def": "猴子",
    "en_def": "an animal with a long tail that climbs trees and lives in hot countries",
    "sentence": "A: Why did the hotel staff warn the guests not to leave food or bags on their balconies during their stay? B: A clever {{BLANK}} from the nearby hills often climbs onto the building and steals snacks, sunglasses, and even phones, so the hotel wants to prevent guests from losing their belongings.",
    "cn": "A：為什麼飯店人員警告房客住宿期間不要把食物或包包留在陽台上？ B：附近山上一隻聰明的【猴子】常爬上大樓偷零食、太陽眼鏡，甚至手機，所以飯店想避免房客遺失物品。"
  },
  {
    "word": "snake",
    "pos": "n.",
    "cn_def": "蛇",
    "en_def": "a long thin animal with no legs that slides along the ground",
    "sentence": "A: Why did the warehouse workers stop unloading the shipment of fruit from overseas yesterday afternoon? B: One of them found a small green {{BLANK}} hiding between the banana boxes, so the supervisor called an animal control officer to catch it safely before anyone continued working.",
    "cn": "A：倉庫工人昨天下午為什麼停止卸下那批從海外運來的水果？ B：其中一人發現一條綠色小【蛇】躲在香蕉箱之間，所以主管打電話請動物管制人員來安全捕捉，之後大家才繼續工作。"
  },
  {
    "word": "eagle",
    "pos": "n.",
    "cn_def": "老鷹；鷹",
    "en_def": "a large strong bird that hunts small animals",
    "sentence": "A: Why does the airline use the picture of a bird on its new logo and on the side of all its planes? B: The {{BLANK}} is a symbol of strength and sharp eyesight, and the company wants passengers to feel that its pilots are as skilled and confident in the sky as that large bird.",
    "cn": "A：那家航空公司為什麼在新標誌和所有飛機機身上使用鳥的圖案？ B：【老鷹】是力量和敏銳視力的象徵，公司希望乘客感覺到他們的機師在空中就像那隻大鳥一樣熟練而自信。"
  },
  {
    "word": "hunt",
    "pos": "v.",
    "cn_def": "獵捕；打獵",
    "en_def": "to chase and kill wild animals for food or sport",
    "sentence": "A: Why are the farmers in the valley complaining to the local government about the foxes this year? B: The foxes come out after dark to {{BLANK}} chickens and rabbits on the farms, and the farmers say they have already lost a lot of money because the animals keep breaking through their fences.",
    "cn": "A：山谷裡的農民今年為什麼向地方政府抱怨狐狸的事？ B：狐狸會在天黑後出來【獵捕】農場裡的雞和兔子，農民說他們已經損失了很多錢，因為那些動物一直衝破圍籬。"
  },
  {
    "word": "roam",
    "pos": "v.",
    "cn_def": "漫遊；遊蕩",
    "en_def": "to move or travel around an area without a clear plan",
    "sentence": "A: What makes the new safari park different from the old zoo that closed downtown last year? B: Instead of keeping the animals in small cages, the park lets them {{BLANK}} freely across a huge area of grass and hills, while visitors watch them from buses with large windows.",
    "cn": "A：新的野生動物園和去年在市中心關閉的舊動物園有什麼不同？ B：園方不是把動物關在小籠子裡，而是讓牠們在廣大的草地和山丘上自由【漫遊】，遊客則從有大窗戶的巴士裡觀看。"
  },
  {
    "word": "hide",
    "pos": "v.",
    "cn_def": "躲藏；隱藏",
    "en_def": "to go to a place where you cannot be seen or found",
    "sentence": "A: Why couldn't the visitors see any of the small animals when the tour group arrived at the nature center at noon? B: Many of them {{BLANK}} under rocks or inside holes in the ground during the hottest part of the day, so the guide suggested coming back in the late afternoon when it is cooler.",
    "cn": "A：導覽團中午抵達自然中心時，為什麼遊客一隻小動物都看不到？ B：牠們很多在一天中最熱的時候會【躲】在石頭下或地洞裡，所以導遊建議傍晚天氣比較涼時再回來。"
  },
  {
    "word": "climb",
    "pos": "v.",
    "cn_def": "爬；攀爬",
    "en_def": "to go up something using your hands and feet",
    "sentence": "A: Why did the zoo hire an engineer to check the walls around the new bear area before it opens next month? B: Young bears can {{BLANK}} surprisingly high walls and trees, so the managers want to be completely sure the area is safe for both the animals and the thousands of visitors who will come.",
    "cn": "A：動物園為什麼在下個月開放新熊區前請工程師檢查四周的牆？ B：小熊可以【爬】上高得驚人的牆和樹，所以管理階層想完全確定那個區域對動物和即將到訪的數千名遊客都是安全的。"
  },
  {
    "word": "run",
    "pos": "v.",
    "cn_def": "跑",
    "en_def": "to move very fast on your legs",
    "sentence": "A: The tour guide told us to stay calm if we meet an elephant on the walking trail, so what exactly should we do? B: You should never turn around and {{BLANK}}, because the animal may follow you, so just stand still, speak quietly, and slowly move backward until you reach the jeep.",
    "cn": "A：導遊告訴我們如果在步道上遇到大象要保持冷靜，那我們究竟該怎麼做？ B：你絕對不要轉身就【跑】，因為那隻動物可能會追你，所以只要站著不動、小聲說話，然後慢慢往後退直到回到吉普車上。"
  },
  {
    "word": "dangerous",
    "pos": "adj.",
    "cn_def": "危險的",
    "en_def": "able to hurt or kill you",
    "sentence": "A: Why do all the new employees at the wildlife park have to attend a full day of safety training before they start? B: Some of the animals there can be very {{BLANK}} if people get too close, so the staff must learn how to feed them, clean the areas, and react quickly in an emergency.",
    "cn": "A：野生動物園所有新進員工為什麼在開始工作前都必須參加一整天的安全訓練？ B：那裡有些動物如果人靠得太近會非常【危險】，所以員工必須學會如何餵食、清潔區域，以及在緊急狀況下迅速反應。"
  },
  {
    "word": "fierce",
    "pos": "adj.",
    "cn_def": "兇猛的；激烈的",
    "en_def": "angry, violent, and likely to attack; very strong",
    "sentence": "A: Why did the photographer use a very long camera lens instead of getting closer to the animals during the trip? B: The mother leopard becomes extremely {{BLANK}} when she is protecting her babies, so the guide told everyone to stay at least fifty meters away and keep their voices down.",
    "cn": "A：攝影師在旅途中為什麼使用很長的鏡頭，而不是靠近動物？ B：母豹在保護幼崽時會變得極度【兇猛】，所以導遊告訴大家至少保持五十公尺的距離並壓低音量。"
  },
  {
    "word": "powerful",
    "pos": "adj.",
    "cn_def": "強而有力的；強大的",
    "en_def": "very strong",
    "sentence": "A: How did the zoo staff manage to move the huge rhino to its new area without hurting it or anyone else? B: They borrowed a {{BLANK}} crane from a construction company to lift its heavy metal box, and a team of ten workers carefully guided it into place over about three hours.",
    "cn": "A：動物園員工是如何在不傷到牠或其他人的情況下把那頭巨大的犀牛移到新區域？ B：他們向一家營建公司借了一台【強力】起重機來吊起牠沉重的金屬箱，十名工作人員花了大約三小時小心地把它引導就定位。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "稀有的；罕見的",
    "en_def": "not seen or found very often",
    "sentence": "A: Why are so many bird watchers and reporters gathering at the city park near our office building this week? B: Someone took a photo of a very {{BLANK}} bird that usually lives only on a small island far away, and people want to see it before it flies back home.",
    "cn": "A：為什麼這週有那麼多賞鳥人士和記者聚集在我們辦公大樓附近的市立公園？ B：有人拍到一隻非常【稀有】的鳥，牠通常只住在遙遠的一座小島上，大家想在牠飛回去之前看看牠。"
  },
  {
    "word": "endangered",
    "pos": "adj.",
    "cn_def": "瀕臨絕種的",
    "en_def": "in danger of disappearing from the world completely",
    "sentence": "A: Why did the company decide to donate part of its profits from the new line of T-shirts to an environmental group? B: The group protects {{BLANK}} sea turtles, whose numbers have dropped sharply because of plastic waste, and our customers said they would gladly pay more to support that cause.",
    "cn": "A：公司為什麼決定把新系列T恤的部分利潤捐給一個環保團體？ B：那個團體保護【瀕臨絕種的】海龜，牠們的數量因為塑膠垃圾而急劇減少，我們的顧客說他們很樂意多付一點錢來支持這項公益。"
  },
  {
    "word": "nocturnal",
    "pos": "adj.",
    "cn_def": "夜行性的",
    "en_def": "active at night rather than during the day",
    "sentence": "A: Why does the zoo offer a special evening tour on Fridays, and is it worth paying extra for the tickets? B: Many of the animals there are {{BLANK}}, so they sleep all day and only become active after dark, which means the evening tour is the best chance to see them eating and moving around.",
    "cn": "A：動物園為什麼在週五推出特別的夜間導覽？多付錢買票值得嗎？ B：那裡很多動物是【夜行性的】，牠們白天都在睡覺，天黑後才開始活動，所以夜間導覽是看到牠們進食和走動的最好機會。"
  },
  {
    "word": "swiftly",
    "pos": "adv.",
    "cn_def": "迅速地",
    "en_def": "quickly",
    "sentence": "A: How did the hotel staff react when a wild boar wandered into the garden during the outdoor wedding party last weekend? B: The security team acted {{BLANK}} and calmly guided the guests inside, and then they opened the back gate so the animal could return to the forest without hurting anyone.",
    "cn": "A：上週末戶外婚宴期間一頭野豬闖進花園時，飯店人員是如何反應的？ B：保全團隊【迅速地】行動，冷靜地引導賓客進到室內，接著打開後門讓那頭動物回到森林，沒有傷到任何人。"
  },
  {
    "word": "silently",
    "pos": "adv.",
    "cn_def": "安靜地；無聲地",
    "en_def": "without making any sound",
    "sentence": "A: What advice did the guide give the tour group before they entered the bird-watching area early this morning? B: She told everyone to switch off their phones and walk {{BLANK}} along the wooden path, because even a small noise could frighten the birds and make them fly away before anyone took a picture.",
    "cn": "A：今天清晨導遊在團員進入賞鳥區前給了什麼建議？ B：她叫大家關掉手機，沿著木棧道【安靜地】走，因為即使是小小的聲音也可能嚇到鳥，讓牠們在大家拍照前就飛走。"
  },
  {
    "word": "wildly",
    "pos": "adv.",
    "cn_def": "狂野地；極度地",
    "en_def": "in an uncontrolled or extreme way; very",
    "sentence": "A: Was the new nature documentary series that our channel launched last month successful with viewers? B: Yes, it was {{BLANK}} popular with families and students, and the ratings were so high that the director has already been asked to make a second season about ocean animals.",
    "cn": "A：我們頻道上個月推出的新自然紀錄片系列受觀眾歡迎嗎？ B：是的，它在家庭和學生之間【極度】受歡迎，收視率高到導演已經被邀請製作關於海洋動物的第二季。"
  }
];

const MCQS = [
  {
    "q": "The new national park attracts thousands of visitors every year. Tourists can observe local _____ such as birds, deer, and foxes in their natural surroundings.",
    "options": [
      "wildlife",
      "furniture",
      "traffic",
      "equipment"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Sharks are at the top of the ocean food chain. As a _____, they keep the number of smaller fish under control.",
    "options": [
      "passenger",
      "predator",
      "customer",
      "volunteer"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The hawk circled high above the field for several minutes. Then it dived down quickly to catch its _____ near the river.",
    "options": [
      "crop",
      "fence",
      "prey",
      "path"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Building the new highway would destroy the _____ of many small animals. The council has asked engineers to suggest a different route.",
    "options": [
      "invoice",
      "schedule",
      "budget",
      "habitat"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The paper company has promised to plant a new tree for every one it cuts down. It wants to keep the _____ healthy for future generations.",
    "options": [
      "ceiling",
      "forest",
      "lobby",
      "garage"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The explorers needed sharp knives to cut through the thick plants. The tropical _____ was so dense that sunlight rarely reached the ground.",
    "options": [
      "jungle",
      "desert",
      "harbor",
      "airport"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Very little rain falls in this region during the year. The company is testing solar panels in the _____ because the sunshine is so strong.",
    "options": [
      "basement",
      "tunnel",
      "cafeteria",
      "desert"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ski resort sits at the top of a tall _____. Guests take a cable car from the village to reach the hotel.",
    "options": [
      "valley",
      "pond",
      "mountain",
      "basement"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The male _____ at the city zoo has a thick golden mane. Visitors often hear his loud roar from the main entrance.",
    "options": [
      "lion",
      "rabbit",
      "turtle",
      "parrot"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Its orange fur and black stripes make the _____ easy to recognize. Sadly, only a few thousand of these big cats remain in the wild.",
    "options": [
      "zebra",
      "sheep",
      "tiger",
      "giraffe"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ used its long trunk to pick up water from the river. It then sprayed the water over its huge gray back.",
    "options": [
      "eagle",
      "elephant",
      "snake",
      "rabbit"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Campers must store their food in metal boxes at night. A hungry _____ can smell food from far away and tear open tents with its claws.",
    "options": [
      "eagle",
      "deer",
      "rabbit",
      "bear"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Drivers should slow down on this country road after dark. A _____ may suddenly jump out of the woods in front of your car.",
    "options": [
      "eagle",
      "whale",
      "deer",
      "parrot"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The _____ swung from branch to branch using its long arms. The children at the zoo laughed as it grabbed a banana.",
    "options": [
      "monkey",
      "snake",
      "wolf",
      "deer"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The _____ has no legs, so it moves by sliding along the ground. Visitors should not touch it because its bite can be poisonous.",
    "options": [
      "lion",
      "eagle",
      "deer",
      "snake"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The _____ flew high above the valley with its huge wings. It can spot a small rabbit on the ground from very far away.",
    "options": [
      "wolf",
      "eagle",
      "bear",
      "deer"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Lions usually _____ in groups to catch large animals like zebras. The females do most of the work while the males guard the area.",
    "options": [
      "hunt",
      "borrow",
      "apologize",
      "decorate"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "On the large ranch, the cattle are allowed to _____ freely across the hills. The owner believes this keeps the animals healthy and calm.",
    "options": [
      "hire",
      "deposit",
      "print",
      "roam"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Small animals often _____ under bushes when a hawk flies overhead. This helps them avoid being seen and caught.",
    "options": [
      "shout",
      "hide",
      "deliver",
      "invest"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The maintenance worker had to _____ a tall ladder to fix the light. He wore a safety belt to protect himself from falling.",
    "options": [
      "purchase",
      "cancel",
      "climb",
      "describe"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The marketing director had to _____ to catch the last train after the meeting. She reached the platform just as the doors were closing.",
    "options": [
      "sit",
      "sleep",
      "borrow",
      "run"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Swimming in the river is _____ after heavy rain because the water moves very fast. Signs along the bank warn visitors to stay out.",
    "options": [
      "dangerous",
      "delicious",
      "generous",
      "punctual"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The two airlines are in _____ competition for passengers on the Asia routes. Both have lowered ticket prices several times this year.",
    "options": [
      "polite",
      "empty",
      "fierce",
      "shy"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The new vacuum cleaner has a very _____ motor that picks up dust easily. It is also quieter than most other models on the market.",
    "options": [
      "fragile",
      "powerful",
      "absent",
      "sleepy"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "This coin is extremely _____ because only fifty were ever made. Collectors are expected to pay a high price for it at the auction.",
    "options": [
      "common",
      "cheap",
      "ordinary",
      "rare"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The panda was once an _____ species with very few animals left in the wild. Protection programs have helped its numbers grow slowly.",
    "options": [
      "endangered",
      "enormous",
      "enjoyable",
      "entertaining"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Owls are _____ birds that hunt mainly at night. During the day, they usually rest quietly in tall trees.",
    "options": [
      "domestic",
      "nocturnal",
      "punctual",
      "temporary"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The fire department responded _____ to the emergency call from the factory. The trucks arrived within five minutes, and nobody was hurt.",
    "options": [
      "rudely",
      "rarely",
      "swiftly",
      "loudly"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The library asks all visitors to work _____ in the study rooms. Phones must be switched off or set to vibrate mode.",
    "options": [
      "silently",
      "loudly",
      "angrily",
      "carelessly"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The new smartphone app became _____ popular among teenagers within a month. Its developers are now planning to release a paid version.",
    "options": [
      "gently",
      "silently",
      "politely",
      "wildly"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "wildlife": {
    "pos": "n.",
    "en_def": "wild animals and plants living in nature",
    "cn_def": "野生動物；野生生物"
  },
  "predator": {
    "pos": "n.",
    "en_def": "an animal that hunts and eats other animals",
    "cn_def": "掠食者；捕食性動物"
  },
  "prey": {
    "pos": "n.",
    "en_def": "an animal that is hunted and eaten by another animal",
    "cn_def": "獵物"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural place where an animal or plant lives",
    "cn_def": "棲息地"
  },
  "forest": {
    "pos": "n.",
    "en_def": "a large area of land covered with trees",
    "cn_def": "森林"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest with many plants and trees",
    "cn_def": "叢林"
  },
  "desert": {
    "pos": "n.",
    "en_def": "a large dry area with very little rain and few plants",
    "cn_def": "沙漠"
  },
  "savanna": {
    "pos": "n.",
    "en_def": "a large flat area of grassland with few trees in a hot region",
    "cn_def": "熱帶大草原"
  },
  "mountain": {
    "pos": "n.",
    "en_def": "a very high hill",
    "cn_def": "山；山脈"
  },
  "lion": {
    "pos": "n.",
    "en_def": "a large wild cat; the male has long thick hair around its head",
    "cn_def": "獅子"
  },
  "tiger": {
    "pos": "n.",
    "en_def": "a large wild cat with orange fur and black stripes",
    "cn_def": "老虎"
  },
  "elephant": {
    "pos": "n.",
    "en_def": "a very large gray animal with a long nose called a trunk",
    "cn_def": "大象"
  },
  "bear": {
    "pos": "n.",
    "en_def": "a large heavy animal with thick fur that can stand on its back legs",
    "cn_def": "熊"
  },
  "wolf": {
    "pos": "n.",
    "en_def": "a wild animal like a large dog that lives and hunts in groups",
    "cn_def": "狼"
  },
  "deer": {
    "pos": "n.",
    "en_def": "a wild animal with long legs; the male has antlers",
    "cn_def": "鹿"
  },
  "monkey": {
    "pos": "n.",
    "en_def": "an animal with a long tail that climbs trees and lives in hot countries",
    "cn_def": "猴子"
  },
  "snake": {
    "pos": "n.",
    "en_def": "a long thin animal with no legs that slides along the ground",
    "cn_def": "蛇"
  },
  "eagle": {
    "pos": "n.",
    "en_def": "a large strong bird that hunts small animals",
    "cn_def": "老鷹；鷹"
  },
  "hunt": {
    "pos": "v.",
    "en_def": "to chase and kill wild animals for food or sport",
    "cn_def": "獵捕；打獵"
  },
  "roam": {
    "pos": "v.",
    "en_def": "to move or travel around an area without a clear plan",
    "cn_def": "漫遊；遊蕩"
  },
  "hide": {
    "pos": "v.",
    "en_def": "to go to a place where you cannot be seen or found",
    "cn_def": "躲藏；隱藏"
  },
  "climb": {
    "pos": "v.",
    "en_def": "to go up something using your hands and feet",
    "cn_def": "爬；攀爬"
  },
  "run": {
    "pos": "v.",
    "en_def": "to move very fast on your legs",
    "cn_def": "跑"
  },
  "dangerous": {
    "pos": "adj.",
    "en_def": "able to hurt or kill you",
    "cn_def": "危險的"
  },
  "fierce": {
    "pos": "adj.",
    "en_def": "angry, violent, and likely to attack; very strong",
    "cn_def": "兇猛的；激烈的"
  },
  "powerful": {
    "pos": "adj.",
    "en_def": "very strong",
    "cn_def": "強而有力的；強大的"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "稀有的；罕見的"
  },
  "endangered": {
    "pos": "adj.",
    "en_def": "in danger of disappearing from the world completely",
    "cn_def": "瀕臨絕種的"
  },
  "nocturnal": {
    "pos": "adj.",
    "en_def": "active at night rather than during the day",
    "cn_def": "夜行性的"
  },
  "swiftly": {
    "pos": "adv.",
    "en_def": "quickly",
    "cn_def": "迅速地"
  },
  "silently": {
    "pos": "adv.",
    "en_def": "without making any sound",
    "cn_def": "安靜地；無聲地"
  },
  "wildly": {
    "pos": "adv.",
    "en_def": "in an uncontrolled or extreme way; very",
    "cn_def": "狂野地；極度地"
  }
};

const EXTRA_GLOSSES = {};
