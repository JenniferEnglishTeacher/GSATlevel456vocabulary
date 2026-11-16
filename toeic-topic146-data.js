// Topic 146 Quiz Data: Forest 森林
// Source word list: https://www.examword.com/group-topic/forest — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T146 - Forest 森林",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "woods",
    "pos": "n.",
    "cn_def": "樹林",
    "en_def": "an area of land with many trees, smaller than a forest",
    "sentence": "A: Where are we holding the team-building picnic next Friday, and should I tell everyone to bring comfortable shoes and warm jackets? B: We booked a quiet spot in the {{BLANK}} behind the conference center, so yes, people should wear good shoes because the paths are still muddy after the recent rain.",
    "cn": "A：我們下週五的團隊建立野餐在哪裡舉行？我應該提醒大家帶舒適的鞋子和保暖外套嗎？ B：我們在會議中心後面的【樹林】裡訂了一個安靜的地點，所以是的，大家應該穿好走的鞋，因為最近下過雨，小路還是很泥濘。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林",
    "en_def": "a thick tropical forest with many plants",
    "sentence": "A: Why did the documentary crew ask for an extra week before they deliver the final video to our marketing department? B: Heavy rain in the {{BLANK}} washed away several roads, so the team could not reach the filming location on time and had to wait for local guides to find a safer route.",
    "cn": "A：為什麼紀錄片團隊要求多一週才把最終影片交給我們行銷部？ B：【叢林】裡的大雨沖毀了好幾條道路，所以團隊無法準時抵達拍攝地點，只好等當地嚮導找到一條比較安全的路線。"
  },
  {
    "word": "rainforest",
    "pos": "n.",
    "cn_def": "雨林",
    "en_def": "a thick forest in a warm place that gets a lot of rain",
    "sentence": "A: What is the main message of the new advertising campaign for our organic coffee, and who is the target customer? B: We want to show that our farmers help protect the {{BLANK}} in Brazil, because younger shoppers really care about where their coffee comes from and how it affects the planet.",
    "cn": "A：我們有機咖啡的新廣告活動主要想傳達什麼？目標客群是誰？ B：我們想呈現我們的農民協助保護巴西的【雨林】，因為年輕的消費者非常在意咖啡的產地以及它對地球的影響。"
  },
  {
    "word": "tree",
    "pos": "n.",
    "cn_def": "樹",
    "en_def": "a tall plant with a wooden trunk and branches",
    "sentence": "A: Why is the parking lot behind our office closed this morning, and where should visitors leave their cars until it opens again? B: A large {{BLANK}} fell during last night's storm and damaged two cars, so visitors should use the public garage across the street until the workers remove it this afternoon.",
    "cn": "A：為什麼我們辦公室後面的停車場今天早上關閉了？在重新開放之前，訪客應該把車停在哪裡？ B：一棵大【樹】在昨晚的暴風雨中倒下，壓壞了兩輛車，所以在工人今天下午把它移走之前，訪客應該使用對街的公共停車場。"
  },
  {
    "word": "canopy",
    "pos": "n.",
    "cn_def": "林冠；樹冠層",
    "en_def": "the top layer of branches and leaves in a forest",
    "sentence": "A: Did the tour company finally finish building the new walkway for visitors at the nature park outside the city? B: Yes, and guests can now walk high above the ground through the forest {{BLANK}}, where they can see colorful birds and monkeys that usually stay hidden from people on the paths below.",
    "cn": "A：旅遊公司終於完成城外自然公園的新遊客步道了嗎？ B：是的，現在遊客可以在離地很高的森林【樹冠層】中漫步，在那裡可以看到平常躲著下方步道遊客的五彩鳥類和猴子。"
  },
  {
    "word": "underbrush",
    "pos": "n.",
    "cn_def": "林下灌木叢",
    "en_def": "small bushes and plants growing under the trees in a forest",
    "sentence": "A: Why did the park managers close the hiking area near the lake for the whole weekend, even though the weather was perfect? B: The dry {{BLANK}} along the paths could catch fire very easily in this hot weather, so workers needed two full days to cut it back and make the area safe for visitors.",
    "cn": "A：為什麼公園管理員整個週末都關閉湖邊的健行區，即使天氣很完美？ B：步道旁乾燥的【林下灌木叢】在這種炎熱天氣下很容易起火，所以工人需要整整兩天把它修剪掉，讓這個區域對遊客來說是安全的。"
  },
  {
    "word": "foliage",
    "pos": "n.",
    "cn_def": "枝葉；葉子",
    "en_def": "the leaves of trees and plants",
    "sentence": "A: Why are so many hotel rooms in the mountain town already fully booked for the second week of October? B: That is when the autumn {{BLANK}} turns bright red and gold, so thousands of tourists travel there to take photos, and many companies also plan weekend trips for their staff at that time.",
    "cn": "A：為什麼山城的旅館房間在十月第二週就已經全部訂滿了？ B：那正是秋天的【枝葉】轉為鮮紅和金黃的時候，所以成千上萬的遊客會去那裡拍照，許多公司也會在那時為員工安排週末旅遊。"
  },
  {
    "word": "evergreen",
    "pos": "adj.",
    "cn_def": "常綠的",
    "en_def": "having green leaves all year round",
    "sentence": "A: Which plants should we put along the front entrance of the new office building so that it looks nice all year? B: The designer suggested {{BLANK}} bushes, because they stay green even in winter, and they also need very little water and care, which will save our maintenance team a lot of time.",
    "cn": "A：我們應該在新辦公大樓的正門沿線種什麼植物，讓它一年四季都好看？ B：設計師建議種【常綠的】灌木，因為它們即使在冬天也保持綠色，而且只需要很少的水和照顧，可以替我們的維修團隊省下很多時間。"
  },
  {
    "word": "deciduous",
    "pos": "adj.",
    "cn_def": "落葉的",
    "en_def": "losing its leaves every autumn",
    "sentence": "A: Why does the courtyard outside the cafeteria get so much sunlight in winter but stay nice and cool during the summer months? B: The architect planted {{BLANK}} trees there on purpose, so their leaves block the hot sun in summer, but they drop in autumn and let warm light come through the windows.",
    "cn": "A：為什麼餐廳外的中庭冬天陽光充足，夏天卻很涼爽？ B：建築師特意在那裡種了【落葉的】樹，所以夏天它們的葉子能擋住炎熱的陽光，而秋天葉子掉落後，溫暖的光線就能透過窗戶照進來。"
  },
  {
    "word": "conifer",
    "pos": "n.",
    "cn_def": "針葉樹",
    "en_def": "a tree that has thin needles and produces cones",
    "sentence": "A: What kind of trees is the paper company planting on the land it bought near the river last spring? B: They are mainly planting a fast-growing {{BLANK}} that has thin needles and cones, because its wood is soft and easy to process, and it can be harvested in about twenty-five years.",
    "cn": "A：造紙公司在去年春天買下的河邊土地上種的是哪一種樹？ B：他們主要種一種生長快速、有細針葉和毬果的【針葉樹】，因為它的木材柔軟又容易加工，而且大約二十五年就可以採伐。"
  },
  {
    "word": "pine",
    "pos": "n.",
    "cn_def": "松樹",
    "en_def": "a tall tree with long thin needles that stays green all year",
    "sentence": "A: What makes the new line of cleaning products different from the ones our competitors sell in supermarkets? B: They have a fresh {{BLANK}} smell that customers say reminds them of a walk in the mountains, and they are also made with plant-based ingredients that are safe for children and pets.",
    "cn": "A：我們新系列的清潔用品和競爭對手在超市賣的有什麼不同？ B：它們有清新的【松樹】香味，顧客說讓他們想起在山裡散步，而且它們是用對孩童和寵物都安全的植物性成分製成的。"
  },
  {
    "word": "oak",
    "pos": "n.",
    "cn_def": "橡樹；橡木",
    "en_def": "a large tree with very hard wood",
    "sentence": "A: Why is the new conference table for the boardroom so expensive compared with the one we bought for the training room? B: It is made of solid {{BLANK}} wood, which is very strong and heavy, and a local craftsman built it by hand, so it should last for many decades without any problems.",
    "cn": "A：為什麼董事會議室的新會議桌比我們為訓練室買的那張貴這麼多？ B：它是用實心【橡】木做的，非常堅固又沉重，而且是當地工匠手工打造的，所以應該可以用好幾十年都沒問題。"
  },
  {
    "word": "birch",
    "pos": "n.",
    "cn_def": "樺樹；樺木",
    "en_def": "a tree with thin white bark and light-colored wood",
    "sentence": "A: Have you decided what to use for the walls of the new reception area, because the contractor needs an answer today? B: I chose light-colored {{BLANK}} panels, because their pale wood with fine lines makes the room look bright and modern, and they cost less than the dark wood we saw last week.",
    "cn": "A：你決定新接待區的牆面要用什麼材料了嗎？因為承包商今天就需要答覆。 B：我選了淺色的【樺木】板，因為它那帶有細紋的淺色木材讓房間看起來明亮又現代，而且比我們上週看的深色木材便宜。"
  },
  {
    "word": "moss",
    "pos": "n.",
    "cn_def": "苔蘚",
    "en_def": "a small soft green plant that grows on wet ground, rocks or trees",
    "sentence": "A: Why did the building manager ask the cleaning company to come back and wash the stone steps outside the main entrance again? B: Green {{BLANK}} has been growing on them because of all the rain this month, and it makes the steps very slippery, so he is worried that an employee might fall and get hurt.",
    "cn": "A：為什麼大樓經理要清潔公司再回來清洗正門外的石階？ B：因為這個月一直下雨，石階上長了綠色的【苔蘚】，讓階梯變得很滑，所以他擔心員工可能會跌倒受傷。"
  },
  {
    "word": "fern",
    "pos": "n.",
    "cn_def": "蕨類植物",
    "en_def": "a green plant with feathery leaves and no flowers",
    "sentence": "A: What kind of plants would work well in the hotel lobby, since it doesn't get much direct sunlight during the day? B: I would recommend a large {{BLANK}} with soft, feathery leaves, because it grows well in the shade, likes the humid air from the fountain, and makes the space feel calm and relaxing.",
    "cn": "A：既然飯店大廳白天沒有太多直射陽光，什麼樣的植物適合放在那裡？ B：我會推薦一株有柔軟羽狀葉子的大型【蕨類植物】，因為它在陰涼處長得很好，喜歡噴泉帶來的潮濕空氣，還能讓空間感覺平靜放鬆。"
  },
  {
    "word": "wildlife",
    "pos": "n.",
    "cn_def": "野生動物",
    "en_def": "wild animals and birds living in nature",
    "sentence": "A: Why did the city council reject the plan to build a new shopping mall on the edge of the national park? B: Many residents complained that the construction noise and extra traffic would harm the local {{BLANK}}, especially the deer and rare birds that live in the area all year round.",
    "cn": "A：為什麼市議會否決了在國家公園邊緣興建新購物中心的計畫？ B：許多居民抱怨施工噪音和增加的車流會傷害當地的【野生動物】，尤其是全年住在那個地區的鹿和稀有鳥類。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "A: Why did the developer agree to keep that large green area next to the new apartment buildings instead of using it for parking? B: Scientists found that the wetland is an important {{BLANK}} for several kinds of frogs and birds, so the city required the company to protect it before giving final approval.",
    "cn": "A：為什麼開發商同意保留新公寓大樓旁那一大片綠地，而不是拿來當停車場？ B：科學家發現那片濕地是好幾種青蛙和鳥類的重要【棲息地】，所以市政府要求該公司先保護它，才會給予最終核准。"
  },
  {
    "word": "trail",
    "pos": "n.",
    "cn_def": "小徑；步道",
    "en_def": "a path through the countryside or a forest",
    "sentence": "A: Are you planning to do anything relaxing this weekend after such a long and stressful week of meetings with clients? B: I'm going to walk the new {{BLANK}} that goes along the river to the waterfall, because it only takes about three hours, and the views are supposed to be beautiful this time of year.",
    "cn": "A：在這麼漫長又充滿壓力、一直和客戶開會的一週之後，你這週末打算做些放鬆的事嗎？ B：我要去走那條沿著河邊通往瀑布的新【步道】，因為只要大約三個小時，而且聽說每年這個時候的景色都很美。"
  },
  {
    "word": "hike",
    "pos": "v.",
    "cn_def": "健行；徒步旅行",
    "en_def": "to take a long walk in the countryside or mountains",
    "sentence": "A: How do you usually spend your vacation, since you always come back to the office looking so rested and full of energy? B: My wife and I like to {{BLANK}} in the mountains for several days, carrying our own food and tents, because being away from phones and email helps us forget about work completely.",
    "cn": "A：你通常怎麼度假？因為你每次回到辦公室都看起來精神飽滿、充滿活力。 B：我太太和我喜歡在山裡【健行】好幾天，自己背著食物和帳篷，因為遠離手機和電子郵件能讓我們完全忘掉工作。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探查",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What are the new employees going to do on their first afternoon after the orientation meeting ends? B: They will {{BLANK}} the whole campus with a guide, visiting the research labs, the gym, and the cafeteria, so they can learn where everything is before they start working on Monday.",
    "cn": "A：新進員工在新人說明會結束後的第一個下午要做什麼？ B：他們會跟著導覽員【探索】整個園區，參觀研究實驗室、健身房和員工餐廳，這樣他們在星期一開始上班前就能知道每個地方在哪裡。"
  },
  {
    "word": "dense",
    "pos": "adj.",
    "cn_def": "茂密的；濃密的",
    "en_def": "with many things growing or standing close together; thick",
    "sentence": "A: Why didn't the delivery drone reach the cabin resort in the mountains yesterday afternoon as we had planned? B: The forest around the resort is so {{BLANK}} that the drone couldn't find a safe place to land between the trees, so we will have to send the package by truck instead.",
    "cn": "A：為什麼送貨無人機昨天下午沒有照計畫抵達山上的小木屋度假村？ B：度假村周圍的森林太【茂密】了，無人機在樹林間找不到安全的降落地點，所以我們只好改用卡車送包裹。"
  },
  {
    "word": "shady",
    "pos": "adj.",
    "cn_def": "陰涼的；遮蔭的",
    "en_def": "protected from direct sunlight",
    "sentence": "A: Where should we set up the food tables for the company picnic, because the weather report says it will be very hot on Saturday? B: Let's put them in the {{BLANK}} area under the big trees near the lake, so the food stays fresh and guests can sit comfortably without getting sunburned.",
    "cn": "A：公司野餐的餐桌應該擺在哪裡？因為氣象報告說星期六會非常熱。 B：我們把它們放在湖邊大樹下的【陰涼】區域吧，這樣食物能保持新鮮，賓客也能舒服地坐著而不會被曬傷。"
  },
  {
    "word": "lush",
    "pos": "adj.",
    "cn_def": "青翠繁茂的",
    "en_def": "having lots of healthy green plants",
    "sentence": "A: What did the clients say about the resort that we chose for next month's sales conference in the south? B: They loved the photos of the {{BLANK}} gardens around the pool and said the hotel looked like a peaceful place to relax after long meetings, so they have already confirmed their rooms.",
    "cn": "A：客戶對我們為下個月南部業務會議選的度假村有什麼看法？ B：他們很喜歡泳池周圍【青翠繁茂的】花園照片，說那間飯店看起來是長時間開會後放鬆的寧靜地方，所以他們已經確認訂房了。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古老的",
    "en_def": "very old; from a long time ago",
    "sentence": "A: Why is the tour company charging more for the new day trip to the national park than for its other tours? B: The trip includes a special guide who leads visitors to an {{BLANK}} forest where some of the trees are more than two thousand years old, and the group size is limited to ten people.",
    "cn": "A：為什麼旅行社新推出的國家公園一日遊比其他行程貴？ B：這個行程包含一位特別導遊，會帶遊客前往一片【古老的】森林，那裡有些樹已超過兩千年，而且每團人數限制在十人。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "天然的；自然的",
    "en_def": "existing in nature, not made by people",
    "sentence": "A: Why does our new office furniture cost more than the cheaper plastic sets the purchasing team showed us last month? B: It is made from {{BLANK}} materials like bamboo and wood instead of plastic, so it is better for the environment, and it also matches the company's green image very well.",
    "cn": "A：為什麼我們新的辦公家具比採購團隊上個月給我們看的便宜塑膠組合貴？ B：它是用竹子和木頭這類【天然的】材料做的，而不是塑膠，所以對環境比較好，也非常符合公司的環保形象。"
  },
  {
    "word": "woodland",
    "pos": "n.",
    "cn_def": "林地",
    "en_def": "land that is covered with trees",
    "sentence": "A: Is the company still planning to build its new distribution center on the land beside the highway? B: No, the plan changed because most of that property is protected {{BLANK}}, so the managers are now looking at an empty factory site in the next town, which is closer to the port anyway.",
    "cn": "A：公司還打算在高速公路旁的那塊地上蓋新的物流中心嗎？ B：沒有，計畫改了，因為那塊地大部分是受保護的【林地】，所以經理們現在在看隔壁鎮的一個閒置工廠用地，而且那裡反正離港口也比較近。"
  },
  {
    "word": "timber",
    "pos": "n.",
    "cn_def": "木材；木料",
    "en_def": "wood that is used for building or making things",
    "sentence": "A: Why has the price of building the new warehouse gone up so much since the contractor gave us the first estimate in March? B: The cost of {{BLANK}} rose sharply after the floods closed several sawmills, and since the roof and walls need a lot of wood, the total budget increased by almost fifteen percent.",
    "cn": "A：為什麼自從承包商三月給我們第一份估價後，興建新倉庫的價格漲了這麼多？ B：洪水讓好幾家鋸木廠關閉後，【木材】成本大幅上漲，而屋頂和牆壁需要大量木頭，所以總預算增加了將近百分之十五。"
  },
  {
    "word": "logging",
    "pos": "n.",
    "cn_def": "伐木（業）",
    "en_def": "the work of cutting down trees for wood",
    "sentence": "A: Why are so many people in that small mountain town looking for new jobs at the moment? B: The government banned {{BLANK}} in the nearby forest last year to protect rare animals, so the local sawmill closed, and many workers who used to cut trees now need training for different careers.",
    "cn": "A：為什麼那個山區小鎮現在有這麼多人在找新工作？ B：政府去年為了保護稀有動物，禁止在附近的森林【伐木】，所以當地的鋸木廠關門了，許多以前砍樹的工人現在需要接受其他職業的訓練。"
  },
  {
    "word": "conservation",
    "pos": "n.",
    "cn_def": "保育；保護",
    "en_def": "the protection of nature, plants and animals",
    "sentence": "A: Why did our company decide to donate part of this year's profits to an environmental group instead of holding a big party for staff? B: The board wanted to support forest {{BLANK}} projects in the region, because protecting trees and wildlife fits our green image, and most employees voted for the idea in the survey.",
    "cn": "A：為什麼公司決定把今年部分利潤捐給環保團體，而不是為員工辦一場大派對？ B：董事會想支持本地區的森林【保育】計畫，因為保護樹木和野生動物符合我們的環保形象，而且大多數員工在問卷中也投票支持這個想法。"
  },
  {
    "word": "ecosystem",
    "pos": "n.",
    "cn_def": "生態系統",
    "en_def": "all the plants and animals in an area and how they live together",
    "sentence": "A: Why are the scientists so worried about the new chemical factory that will open beside the river next year? B: They think the waste water could damage the whole {{BLANK}}, because if the fish and insects die, the birds and other animals that depend on them will also have trouble surviving.",
    "cn": "A：為什麼科學家這麼擔心明年將在河邊開設的新化工廠？ B：他們認為廢水可能會破壞整個【生態系統】，因為如果魚和昆蟲死了，依賴牠們的鳥類和其他動物也將難以生存。"
  },
  {
    "word": "clearing",
    "pos": "n.",
    "cn_def": "林中空地",
    "en_def": "an open area in a forest with no trees",
    "sentence": "A: Where exactly will the outdoor wedding ceremony take place, since the invitation only says it will be at the mountain lodge? B: It will be held in a small grassy {{BLANK}} about ten minutes' walk from the lodge, where the trees open up and guests can enjoy a beautiful view of the valley below.",
    "cn": "A：戶外婚禮究竟會在哪裡舉行？因為邀請函上只寫說在山間小屋。 B：會在離小屋步行約十分鐘的一小片草地【林中空地】舉行，那裡樹木散開，賓客可以欣賞下方山谷的美麗景色。"
  },
  {
    "word": "bark",
    "pos": "n.",
    "cn_def": "樹皮",
    "en_def": "the hard outer covering of a tree",
    "sentence": "A: Why is the new herbal tea from our supplier so popular with customers who have trouble sleeping at night? B: It contains a special kind of tree {{BLANK}} that has been used for hundreds of years to help people relax, and it also has a pleasant, slightly sweet taste that customers enjoy.",
    "cn": "A：為什麼供應商的新花草茶這麼受晚上睡不好的顧客歡迎？ B：它含有一種特殊的【樹皮】，幾百年來一直被用來幫助人放鬆，而且它還有顧客喜歡的宜人、微甜的味道。"
  },
  {
    "word": "branch",
    "pos": "n.",
    "cn_def": "樹枝",
    "en_def": "a part of a tree that grows out from the trunk",
    "sentence": "A: Why is there no electricity in the east wing of the office building this morning, and when will it come back on? B: During the strong winds last night, a heavy {{BLANK}} broke off and landed on the power line, so the electric company is repairing it now and expects to finish by noon.",
    "cn": "A：為什麼辦公大樓東翼今天早上沒有電？什麼時候會恢復？ B：昨晚強風時，一根粗重的【樹枝】斷裂並落在電線上，所以電力公司現在正在修理，預計中午前完成。"
  },
  {
    "word": "root",
    "pos": "n.",
    "cn_def": "根",
    "en_def": "the part of a plant that grows under the ground",
    "sentence": "A: Why is the gardening company digging up the sidewalk in front of our office building this week? B: The {{BLANK}} of the old tree near the entrance has grown under the path and pushed the stones up, so several people have tripped, and the city wants it fixed before someone gets seriously hurt.",
    "cn": "A：為什麼園藝公司這週要挖開我們辦公大樓前的人行道？ B：入口附近那棵老樹的【根】長到步道下面，把石板頂了起來，已經有好幾個人絆倒，市政府希望在有人嚴重受傷前把它修好。"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "cn_def": "葉子",
    "en_def": "a flat green part of a plant that grows from a stem",
    "sentence": "A: How did the design team come up with the new logo for our environmentally friendly product line? B: They used a simple green {{BLANK}} as the main image, because it clearly shows that the products are made from plants, and customers in our survey said it looked fresh, clean, and easy to remember.",
    "cn": "A：設計團隊是怎麼想出我們環保產品線的新標誌的？ B：他們用一片簡單的綠色【葉子】作為主要圖像，因為它清楚表達產品是用植物製成的，而問卷中的顧客也說它看起來清新、乾淨又好記。"
  }
];

const MCQS = [
  {
    "q": "Our hotel offers guided night walks for guests every Friday. Visitors follow a lantern path through the _____ behind the main building.",
    "options": [
      "woods",
      "bark",
      "moss",
      "canopy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The cosmetics company buys its plant oils from farmers in the Amazon. It promises that no part of the _____ is cut down for its products.",
    "options": [
      "trail",
      "bark",
      "rainforest",
      "clearing"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The landscaping crew will remove the dead _____ near the parking entrance on Monday. Please park on the street until the work is finished.",
    "options": [
      "trail",
      "tree",
      "habitat",
      "ecosystem"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "From the top of the observation tower, visitors can look across the green forest _____. Many rare birds build their nests at that height.",
    "options": [
      "underbrush",
      "root",
      "clearing",
      "canopy"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Rangers cut back the thick _____ along the hiking paths every spring. This reduces the risk of fire during the dry summer months.",
    "options": [
      "ecosystem",
      "conservation",
      "underbrush",
      "wildlife"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The mountain resort is fully booked every October. Guests come to photograph the bright red and orange _____ on the hillsides.",
    "options": [
      "foliage",
      "timber",
      "logging",
      "moss"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The office garden is planted with _____ shrubs that keep their leaves through the winter. They need little water and almost no care.",
    "options": [
      "deciduous",
      "evergreen",
      "shady",
      "ancient"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The maple trees in the park are _____, so they lose their leaves every autumn. Workers clear the paths every morning in November.",
    "options": [
      "deciduous",
      "evergreen",
      "dense",
      "lush"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The new air freshener has a fresh _____ scent that reminds customers of a mountain forest. It will be in stores next month.",
    "options": [
      "logging",
      "habitat",
      "pine",
      "clearing"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The boardroom table is made of solid _____ and weighs over two hundred kilograms. Six workers were needed to carry it upstairs.",
    "options": [
      "oak",
      "fern",
      "moss",
      "foliage"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The _____ tree is easy to recognize because of its thin white bark. Its pale wood is popular for modern furniture and flooring.",
    "options": [
      "oak",
      "pine",
      "moss",
      "birch"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Soft green _____ had covered the old stone wall behind the factory. The cleaning crew used a pressure washer to remove it.",
    "options": [
      "timber",
      "moss",
      "bark",
      "branch"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The new highway will include tunnels so that local _____ can cross safely. Deer and foxes are often hit by cars in this area.",
    "options": [
      "wildlife",
      "timber",
      "foliage",
      "conservation"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The wetland is the only natural _____ of this rare frog. The developer agreed to move the building site to protect it.",
    "options": [
      "logging",
      "timber",
      "trail",
      "habitat"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The park has opened a new hiking _____ that leads to the waterfall. It takes about two hours to walk from start to finish.",
    "options": [
      "trail",
      "canopy",
      "habitat",
      "bark"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "On weekends, our sales manager likes to _____ in the mountains with her dog. She says the long walks help her clear her mind.",
    "options": [
      "grow",
      "hike",
      "cut",
      "burn"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "New employees will have a free afternoon to _____ the campus. A map showing the cafeteria, gym, and labs is in the welcome pack.",
    "options": [
      "hike",
      "grow",
      "explore",
      "cut"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The forest around the cabin is so _____ that little sunlight reaches the ground. Visitors should stay on the marked paths at all times.",
    "options": [
      "dense",
      "ancient",
      "natural",
      "deciduous"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Let's move the lunch tables to a _____ spot under the trees. The afternoon sun is too strong for guests to sit outside comfortably.",
    "options": [
      "dense",
      "ancient",
      "shady",
      "deciduous"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "After weeks of spring rain, the hills around the resort are _____ and green. It is the best season for nature photography.",
    "options": [
      "ancient",
      "deciduous",
      "evergreen",
      "lush"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Some of the _____ trees in the national park are over three thousand years old. Visitors must not touch or climb on them.",
    "options": [
      "shady",
      "dense",
      "ancient",
      "lush"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The new furniture line uses only _____ materials such as wood and bamboo. No plastic or chemical paint is added to any product.",
    "options": [
      "dense",
      "natural",
      "ancient",
      "shady"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The rising price of _____ has made new wooden houses more expensive. Builders are now using more steel and concrete instead.",
    "options": [
      "foliage",
      "moss",
      "wildlife",
      "timber"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The government has banned illegal _____ in the northern forests. Companies that cut down trees without a permit will face heavy fines.",
    "options": [
      "conservation",
      "foliage",
      "logging",
      "habitat"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Part of every ticket price goes to forest _____ projects. These projects protect trees and help endangered animals survive.",
    "options": [
      "logging",
      "timber",
      "clearing",
      "conservation"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Scientists warned that the chemical spill could harm the river's entire _____. Fish, insects, and birds all depend on clean water.",
    "options": [
      "timber",
      "ecosystem",
      "canopy",
      "logging"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The wedding ceremony will take place in a grassy _____ in the middle of the forest. Chairs will be set up facing the mountains.",
    "options": [
      "canopy",
      "bark",
      "clearing",
      "root"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The new tea contains an extract from the _____ of a rare tree. It has been used for centuries to help people relax.",
    "options": [
      "clearing",
      "habitat",
      "canopy",
      "bark"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Strong winds broke a large _____ off the old oak tree last night. It fell onto the power line and caused a blackout.",
    "options": [
      "branch",
      "root",
      "moss",
      "fern"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Our new logo shows a single green _____ to represent our eco-friendly products. Customers said it looked simple and easy to remember.",
    "options": [
      "root",
      "leaf",
      "bark",
      "clearing"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "woods": {
    "pos": "n.",
    "en_def": "an area of land with many trees, smaller than a forest",
    "cn_def": "樹林"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest with many plants",
    "cn_def": "叢林"
  },
  "rainforest": {
    "pos": "n.",
    "en_def": "a thick forest in a warm place that gets a lot of rain",
    "cn_def": "雨林"
  },
  "tree": {
    "pos": "n.",
    "en_def": "a tall plant with a wooden trunk and branches",
    "cn_def": "樹"
  },
  "canopy": {
    "pos": "n.",
    "en_def": "the top layer of branches and leaves in a forest",
    "cn_def": "林冠；樹冠層"
  },
  "underbrush": {
    "pos": "n.",
    "en_def": "small bushes and plants growing under the trees in a forest",
    "cn_def": "林下灌木叢"
  },
  "foliage": {
    "pos": "n.",
    "en_def": "the leaves of trees and plants",
    "cn_def": "枝葉；葉子"
  },
  "evergreen": {
    "pos": "adj.",
    "en_def": "having green leaves all year round",
    "cn_def": "常綠的"
  },
  "deciduous": {
    "pos": "adj.",
    "en_def": "losing its leaves every autumn",
    "cn_def": "落葉的"
  },
  "conifer": {
    "pos": "n.",
    "en_def": "a tree that has thin needles and produces cones",
    "cn_def": "針葉樹"
  },
  "pine": {
    "pos": "n.",
    "en_def": "a tall tree with long thin needles that stays green all year",
    "cn_def": "松樹"
  },
  "oak": {
    "pos": "n.",
    "en_def": "a large tree with very hard wood",
    "cn_def": "橡樹；橡木"
  },
  "birch": {
    "pos": "n.",
    "en_def": "a tree with thin white bark and light-colored wood",
    "cn_def": "樺樹；樺木"
  },
  "moss": {
    "pos": "n.",
    "en_def": "a small soft green plant that grows on wet ground, rocks or trees",
    "cn_def": "苔蘚"
  },
  "fern": {
    "pos": "n.",
    "en_def": "a green plant with feathery leaves and no flowers",
    "cn_def": "蕨類植物"
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "wild animals and birds living in nature",
    "cn_def": "野生動物"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲息地"
  },
  "trail": {
    "pos": "n.",
    "en_def": "a path through the countryside or a forest",
    "cn_def": "小徑；步道"
  },
  "hike": {
    "pos": "v.",
    "en_def": "to take a long walk in the countryside or mountains",
    "cn_def": "健行；徒步旅行"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探查"
  },
  "dense": {
    "pos": "adj.",
    "en_def": "with many things growing or standing close together; thick",
    "cn_def": "茂密的；濃密的"
  },
  "shady": {
    "pos": "adj.",
    "en_def": "protected from direct sunlight",
    "cn_def": "陰涼的；遮蔭的"
  },
  "lush": {
    "pos": "adj.",
    "en_def": "having lots of healthy green plants",
    "cn_def": "青翠繁茂的"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a long time ago",
    "cn_def": "古老的"
  },
  "natural": {
    "pos": "adj.",
    "en_def": "existing in nature, not made by people",
    "cn_def": "天然的；自然的"
  },
  "woodland": {
    "pos": "n.",
    "en_def": "land that is covered with trees",
    "cn_def": "林地"
  },
  "timber": {
    "pos": "n.",
    "en_def": "wood that is used for building or making things",
    "cn_def": "木材；木料"
  },
  "logging": {
    "pos": "n.",
    "en_def": "the work of cutting down trees for wood",
    "cn_def": "伐木（業）"
  },
  "conservation": {
    "pos": "n.",
    "en_def": "the protection of nature, plants and animals",
    "cn_def": "保育；保護"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the plants and animals in an area and how they live together",
    "cn_def": "生態系統"
  },
  "clearing": {
    "pos": "n.",
    "en_def": "an open area in a forest with no trees",
    "cn_def": "林中空地"
  },
  "bark": {
    "pos": "n.",
    "en_def": "the hard outer covering of a tree",
    "cn_def": "樹皮"
  },
  "branch": {
    "pos": "n.",
    "en_def": "a part of a tree that grows out from the trunk",
    "cn_def": "樹枝"
  },
  "root": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground",
    "cn_def": "根"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "a flat green part of a plant that grows from a stem",
    "cn_def": "葉子"
  }
};

const EXTRA_GLOSSES = {};
