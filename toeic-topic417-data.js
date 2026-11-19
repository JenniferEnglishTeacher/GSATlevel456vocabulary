// Topic 417 Quiz Data: Trees 樹木
// Source word list: https://www.examword.com/group-topic/trees — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T417 - Trees 樹木",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "forest",
    "pos": "n.",
    "cn_def": "森林",
    "en_def": "a large area of land covered with trees",
    "sentence": "A: Our marketing team wants to hold next month's training retreat somewhere quiet outside the city, so do you have any suggestions for a location? B: There is a small hotel next to a large {{BLANK}} about two hours north of here, and guests can walk along peaceful trails between the meetings and enjoy the fresh air.",
    "cn": "A：我們行銷團隊想把下個月的培訓靜修活動辦在城外安靜的地方，你有推薦的地點嗎？ B：這裡往北大約兩小時車程有一間小旅館，就在一片大【森林】旁邊，客人可以在會議之間沿著寧靜的步道散步、享受新鮮空氣。"
  },
  {
    "word": "wood",
    "pos": "n.",
    "cn_def": "木頭；木材",
    "en_def": "the hard material that trees are made of",
    "sentence": "A: The customers at our furniture showroom keep asking why the new dining tables cost so much more than last year's models, so what should I tell them? B: Explain that the tables are now made from solid {{BLANK}} that comes from certified tree farms instead of cheap plastic, so they are stronger and last much longer.",
    "cn": "A：我們家具展示間的顧客一直問，為什麼新款餐桌比去年的款式貴這麼多，我該怎麼跟他們說？ B：跟他們解釋，這些桌子現在是用來自認證林場的實心【木材】製成的，而不是便宜的塑膠，所以更堅固、也耐用得多。"
  },
  {
    "word": "trunk",
    "pos": "n.",
    "cn_def": "樹幹",
    "en_def": "the thick main stem of a tree",
    "sentence": "A: Why did the gardening company close the path in front of our office building yesterday afternoon, and when will it be open again? B: Their workers found a deep crack in the {{BLANK}} of the old tree beside the entrance, so they are worried it might come down during the storm and are removing it tomorrow morning.",
    "cn": "A：園藝公司昨天下午為什麼封閉我們辦公大樓前的步道？什麼時候會重新開放？ B：他們的工人發現入口旁那棵老樹的【樹幹】上有一道很深的裂縫，擔心它可能在暴風雨期間倒下，所以明天早上要把它移除。"
  },
  {
    "word": "branch",
    "pos": "n.",
    "cn_def": "樹枝",
    "en_def": "a part of a tree that grows out from the trunk",
    "sentence": "A: Did the strong wind last night cause any problems at the parking lot behind the factory, because several employees said their cars were damaged? B: Yes, a large {{BLANK}} broke off one of the old trees and landed on two cars, so the security manager has already called the insurance company and a tree service.",
    "cn": "A：昨晚的強風有沒有對工廠後面的停車場造成問題？因為好幾位員工說他們的車受損了。 B：有，一根大【樹枝】從一棵老樹上斷落，砸在兩輛車上，所以保全經理已經打電話給保險公司和樹木處理公司了。"
  },
  {
    "word": "twig",
    "pos": "n.",
    "cn_def": "細枝；嫩枝",
    "en_def": "a very small, thin branch",
    "sentence": "A: Why does the cleaning crew spend so much time on the hotel's outdoor terrace every morning before the breakfast guests arrive? B: The trees around the terrace drop dry leaves onto the tables at night, and the staff must remove every small {{BLANK}} and piece of dirt before they set out the cups, plates, and fresh flowers.",
    "cn": "A：為什麼清潔人員每天早上在早餐客人抵達前，都要在飯店戶外露台花那麼多時間？ B：露台周圍的樹晚上會把枯葉掉到桌上，員工必須在擺放杯子、盤子和鮮花之前，清掉每一根小【細枝】和每一點灰塵。"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "cn_def": "葉子",
    "en_def": "one of the flat green parts that grow on a tree",
    "sentence": "A: What design did the advertising agency choose for the new logo of our organic tea company, and will it be ready before the trade fair? B: They chose a simple green {{BLANK}} inside a circle, because it shows that our products are natural, and the designer promised to send the final version by Friday afternoon.",
    "cn": "A：廣告公司為我們有機茶公司的新標誌選了什麼設計？會在商展前完成嗎？ B：他們選了一個圓圈裡的簡單綠色【葉子】，因為它能表現出我們的產品很天然，設計師也答應在星期五下午之前把最終版本寄過來。"
  },
  {
    "word": "root",
    "pos": "n.",
    "cn_def": "根",
    "en_def": "the part of a plant that grows under the ground",
    "sentence": "A: Why is the sidewalk outside the bank cracked and uneven, and has anyone reported it to the city office yet? B: The main {{BLANK}} of the big tree next to it has spread under the concrete and pushed it up, so I called the city office this morning and they promised to repair it next week.",
    "cn": "A：銀行外面的人行道為什麼裂開又不平？有人向市政府辦公室反映了嗎？ B：旁邊那棵大樹的主【根】延伸到水泥下面，把人行道頂了起來，所以我今天早上打電話給市政府辦公室，他們答應下週會修理。"
  },
  {
    "word": "bark",
    "pos": "n.",
    "cn_def": "樹皮",
    "en_def": "the hard outer covering of a tree",
    "sentence": "A: Our gift shop wants to sell more products from local farmers, so do you think customers would like the new cinnamon sticks from the mountain village? B: I'm sure they will, because cinnamon actually comes from the dried {{BLANK}} of a special tree, and many visitors enjoy buying natural spices that they can use for cooking at home.",
    "cn": "A：我們的禮品店想多賣一些在地農民的產品，你覺得顧客會喜歡山村的新肉桂棒嗎？ B：我確定他們會喜歡，因為肉桂其實來自一種特殊樹木的乾燥【樹皮】，而且很多遊客喜歡買可以在家做菜用的天然香料。"
  },
  {
    "word": "seed",
    "pos": "n.",
    "cn_def": "種子",
    "en_def": "a small hard part from which a new plant grows",
    "sentence": "A: What kind of gift is the company planning to give visitors at the environmental fair next weekend, since we don't want to hand out plastic items? B: We ordered small paper bags, and each one holds a tree {{BLANK}} with simple instructions, so people can take it home and start a little garden with their children.",
    "cn": "A：公司打算在下週末的環保博覽會上送訪客什麼禮物？因為我們不想發塑膠製品。 B：我們訂了小紙袋，每一袋裝著一顆樹的【種子】和簡單的說明，讓大家可以帶回家，和孩子一起開始一個小花園。"
  },
  {
    "word": "sapling",
    "pos": "n.",
    "cn_def": "樹苗；幼樹",
    "en_def": "a young tree",
    "sentence": "A: How are we going to celebrate the company's tenth anniversary next month, since the managers said they wanted something good for the environment? B: Every employee will receive a small {{BLANK}} to put in the new park beside our office, and the city has agreed to look after the young trees for the first two years.",
    "cn": "A：下個月我們要怎麼慶祝公司十週年？因為經理們說想做一些對環境有益的事。 B：每位員工都會拿到一棵小【樹苗】，種在辦公室旁邊的新公園裡，而且市政府已經同意在頭兩年照顧這些小樹。"
  },
  {
    "word": "shade",
    "pos": "n.",
    "cn_def": "陰涼處；樹蔭",
    "en_def": "a cool, dark area where sunlight is blocked",
    "sentence": "A: The outdoor company picnic is on Saturday and the weather report says it will be very hot, so where should we put the food tables? B: Let's set them up under the big trees near the lake, because there is plenty of {{BLANK}} there, and the drinks and salads will stay cool much longer in the afternoon.",
    "cn": "A：公司戶外野餐在星期六，天氣預報說會非常熱，我們該把食物桌擺在哪裡？ B：我們把桌子擺在湖邊的大樹下吧，因為那裡有很多【樹蔭】，飲料和沙拉在下午也能保持涼爽更久。"
  },
  {
    "word": "grove",
    "pos": "n.",
    "cn_def": "小樹林",
    "en_def": "a small group of trees",
    "sentence": "A: Why did the hotel decide to move the wedding ceremony from the ballroom to the garden, and did the couple agree to the change? B: The couple loved the quiet {{BLANK}} of orange trees behind the main building, so the event planner suggested holding the ceremony there, and they were very excited about the idea.",
    "cn": "A：飯店為什麼決定把婚禮儀式從宴會廳移到花園？新人同意這個改變嗎？ B：新人很喜歡主建築後面那片寧靜的柳橙【小樹林】，所以活動策劃人建議在那裡舉行儀式，他們對這個想法非常興奮。"
  },
  {
    "word": "oak",
    "pos": "n.",
    "cn_def": "橡樹；橡木",
    "en_def": "a large tree with very hard wood",
    "sentence": "A: Have you decided what material we should use for the new reception desk in the hotel lobby, because the designer needs an answer today? B: I think we should choose {{BLANK}}, since it is a very hard and strong kind of wood that looks elegant, and it will not be damaged easily by heavy suitcases.",
    "cn": "A：你決定飯店大廳新櫃台要用什麼材料了嗎？因為設計師今天需要答覆。 B：我覺得我們應該選【橡木】，因為它是非常堅硬又耐用的木材，看起來很優雅，而且不容易被沉重的行李箱弄壞。"
  },
  {
    "word": "pine",
    "pos": "n.",
    "cn_def": "松樹",
    "en_def": "a tall evergreen tree with thin, sharp leaves called needles",
    "sentence": "A: What makes the mountain resort that you booked for our sales team different from the hotels we usually stay at in the city? B: It is surrounded by huge {{BLANK}} trees, so the air smells fresh and clean, and there are walking trails where people can relax after the long workshop sessions.",
    "cn": "A：你幫我們業務團隊訂的山區度假村，跟我們平常在城市住的飯店有什麼不同？ B：它被巨大的【松樹】環繞，所以空氣聞起來清新乾淨，而且還有步道，讓大家在漫長的研習課程後可以放鬆。"
  },
  {
    "word": "maple",
    "pos": "n.",
    "cn_def": "楓樹",
    "en_def": "a tree with wide leaves that turn red in autumn",
    "sentence": "A: Which month would be the best time to organize the company trip to the mountains, since many employees want to take beautiful photos? B: Late November is perfect, because the leaves of every {{BLANK}} tree along the river turn bright red and orange, and the weather is cool and comfortable for hiking.",
    "cn": "A：哪個月最適合安排公司去山區旅遊？因為很多員工想拍漂亮的照片。 B：十一月下旬最完美，因為河邊每一棵【楓樹】的葉子都會變成鮮紅和橘色，而且天氣涼爽，很適合健行。"
  },
  {
    "word": "palm",
    "pos": "n.",
    "cn_def": "棕櫚樹",
    "en_def": "a tall tree with large leaves at the top that grows in hot places",
    "sentence": "A: What did the travel agency say about the beach hotel for our client conference in Thailand, and is it close to the airport? B: They said the hotel has a lovely garden full of {{BLANK}} trees and a private beach, and it is only twenty minutes from the airport by shuttle bus.",
    "cn": "A：旅行社對我們在泰國客戶大會要住的海灘飯店怎麼說？它離機場近嗎？ B：他們說那間飯店有一座種滿【棕櫚樹】的美麗花園和私人海灘，而且搭接駁巴士到機場只要二十分鐘。"
  },
  {
    "word": "evergreen",
    "pos": "adj.",
    "cn_def": "常綠的",
    "en_def": "having green leaves all year",
    "sentence": "A: Our landscape designer wants to plant some trees along the front of the shopping mall, so which kind would look best all year? B: She should choose {{BLANK}} trees, because they keep their leaves even in winter, and the entrance will look fresh and attractive to shoppers during every season of the year.",
    "cn": "A：我們的景觀設計師想在購物中心正門前種一些樹，哪一種一年四季看起來最好？ B：她應該選【常綠】樹，因為它們連冬天也會保有葉子，入口在一年中的每個季節對購物者來說都會看起來清新又吸引人。"
  },
  {
    "word": "deciduous",
    "pos": "adj.",
    "cn_def": "落葉的",
    "en_def": "losing its leaves every autumn",
    "sentence": "A: Why does the maintenance team have to clean the gutters on the office roof so often in October and November every year? B: Most of the trees around our building are {{BLANK}}, so they lose all their leaves in autumn, and the leaves block the gutters and cause rain to leak into the meeting rooms.",
    "cn": "A：為什麼維修團隊每年十月和十一月都要那麼常清理辦公室屋頂的排水溝？ B：我們大樓周圍大部分的樹都是【落葉】樹，所以秋天會掉光葉子，那些葉子會堵住排水溝，讓雨水漏進會議室。"
  },
  {
    "word": "grow",
    "pos": "v.",
    "cn_def": "生長；成長",
    "en_def": "to become bigger over time",
    "sentence": "A: When will the new trees in front of the hotel look big enough to give guests some protection from the hot sun? B: The gardener told me they usually {{BLANK}} about one meter every year, so in three or four years they should be high enough to cover the outdoor seating area completely.",
    "cn": "A：飯店前面的新樹什麼時候才會長得夠大，可以替客人遮擋炎熱的陽光？ B：園丁告訴我它們通常每年【生長】大約一公尺，所以三、四年後應該就會長得夠高，可以完全遮住戶外座位區。"
  },
  {
    "word": "plant",
    "pos": "v.",
    "cn_def": "種植",
    "en_def": "to put a seed or young tree in the ground to grow",
    "sentence": "A: What activity has the human resources department planned for Earth Day this year, and do employees need to sign up in advance? B: We are going to {{BLANK}} fifty young trees in the park next to our factory, so please sign up by Friday because we need to order gloves and tools for everyone.",
    "cn": "A：人力資源部今年為地球日安排了什麼活動？員工需要事先報名嗎？ B：我們要在工廠旁的公園【種植】五十棵小樹，所以請在星期五前報名，因為我們需要幫每個人訂手套和工具。"
  },
  {
    "word": "water",
    "pos": "v.",
    "cn_def": "澆水",
    "en_def": "to give water to plants",
    "sentence": "A: Who will take care of the small trees on the office balcony while our team is at the conference in Singapore for two weeks? B: I asked the building manager, and she agreed to {{BLANK}} them every morning before work, because the weather will be very hot and dry while we are away.",
    "cn": "A：我們團隊去新加坡開會兩週期間，誰會照顧辦公室陽台上的小樹？ B：我問了大樓管理員，她同意每天早上上班前幫它們【澆水】，因為我們不在的時候天氣會非常炎熱乾燥。"
  },
  {
    "word": "sprout",
    "pos": "v.",
    "cn_def": "發芽",
    "en_def": "to begin to grow and produce new leaves",
    "sentence": "A: The tree seeds that we gave customers at the spring fair were a big success, but how long will it take before they start growing? B: If people keep the soil wet and put the pots near a sunny window, the seeds usually {{BLANK}} within two weeks, and small leaves appear soon after that.",
    "cn": "A：我們在春季博覽會送給顧客的樹木種子大受歡迎，但要多久才會開始生長？ B：如果大家保持土壤濕潤，並把盆栽放在有陽光的窗邊，種子通常在兩週內就會【發芽】，之後不久就會長出小葉子。"
  },
  {
    "word": "bloom",
    "pos": "v.",
    "cn_def": "開花",
    "en_def": "to produce flowers",
    "sentence": "A: When should our travel agency start advertising the cherry blossom tour to Japan, since customers usually book these trips very early? B: We should begin in January, because the cherry trees usually {{BLANK}} in late March or early April, and the best hotels near the famous parks are often fully booked by February.",
    "cn": "A：我們旅行社應該什麼時候開始宣傳日本賞櫻行程？因為顧客通常很早就預訂這類旅遊。 B：我們應該在一月開始，因為櫻花樹通常在三月下旬或四月初【開花】，而知名公園附近最好的飯店常常到二月就被訂滿了。"
  },
  {
    "word": "shed",
    "pos": "v.",
    "cn_def": "脫落；掉落（葉子）",
    "en_def": "to lose leaves, skin, etc. naturally",
    "sentence": "A: Why do the cleaning staff at the shopping center need extra workers every autumn, and does it cost the company a lot of money? B: The trees along the parking area {{BLANK}} their leaves in October, so the paths become slippery and dangerous, and we must hire extra people to keep everything safe for customers.",
    "cn": "A：為什麼購物中心的清潔人員每年秋天都需要額外的工人？這會花公司很多錢嗎？ B：停車區沿路的樹在十月會【掉落】葉子，步道會變得濕滑又危險，所以我們必須雇用額外人手，確保顧客的安全。"
  },
  {
    "word": "fall",
    "pos": "v.",
    "cn_def": "落下；掉落",
    "en_def": "to drop down to the ground",
    "sentence": "A: Is it safe to hold the outdoor dinner for our clients in the garden this weekend, since the weather report mentions strong winds? B: The manager is worried that old branches may {{BLANK}} onto the tables if the wind gets stronger, so she suggested moving the dinner into the glass hall next to the garden.",
    "cn": "A：這週末在花園為客戶舉辦戶外晚宴安全嗎？因為天氣預報提到會有強風。 B：經理擔心如果風變得更強，老樹枝可能會【掉落】到餐桌上，所以她建議把晚宴移到花園旁邊的玻璃大廳。"
  },
  {
    "word": "tall",
    "pos": "adj.",
    "cn_def": "高的；高大的",
    "en_def": "having a greater height than usual",
    "sentence": "A: Why did the city council decide to keep the old trees when they rebuilt the main shopping street last year? B: Many shop owners said the {{BLANK}} trees made the street beautiful and gave shoppers a cool place to walk in summer, so the council agreed to protect them during the construction work.",
    "cn": "A：去年市議會重建主要購物街時，為什麼決定保留那些老樹？ B：很多店家說那些【高大的】樹讓街道很漂亮，夏天也給購物者一個涼爽的散步地方，所以議會同意在施工期間保護它們。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古老的",
    "en_def": "very old; from a long time ago",
    "sentence": "A: What is the main attraction that our tour guide will show the clients on the second day of the trip to the mountains? B: She will take them to see an {{BLANK}} tree that is more than two thousand years old, and many visitors say it is the most impressive part of the whole tour.",
    "cn": "A：我們的導遊在山區旅遊第二天會帶客戶看的主要景點是什麼？ B：她會帶他們去看一棵超過兩千年的【古老】樹木，很多遊客都說那是整趟旅程中最令人印象深刻的部分。"
  },
  {
    "word": "dense",
    "pos": "adj.",
    "cn_def": "茂密的；濃密的",
    "en_def": "having many things very close together",
    "sentence": "A: Why did the hiking group from our office get lost for almost an hour during the team-building trip last Saturday? B: The trail went through a very {{BLANK}} forest where the trees grew close together, so it was hard to see the signs, and nobody's phone could get a signal there.",
    "cn": "A：上星期六團隊建立旅遊時，我們辦公室的健行小組為什麼迷路了將近一小時？ B：步道穿過一片非常【茂密】的森林，樹木長得很緊密，所以很難看到指標，而且在那裡沒有人的手機收得到訊號。"
  },
  {
    "word": "green",
    "pos": "adj.",
    "cn_def": "綠色的；綠意盎然的",
    "en_def": "having the color of leaves and grass; full of plants",
    "sentence": "A: What do you think made so many new guests choose our hotel this summer, according to the online reviews that you read? B: Most of them said they loved the {{BLANK}} garden full of trees behind the hotel, because it feels peaceful and quiet even though we are in the middle of a busy city.",
    "cn": "A：根據你看的網路評論，你覺得是什麼讓這麼多新客人今年夏天選擇我們飯店？ B：大部分人說他們很喜歡飯店後面種滿樹木、【綠意盎然】的花園，因為即使我們位在繁忙城市的中心，那裡還是感覺很寧靜。"
  },
  {
    "word": "lush",
    "pos": "adj.",
    "cn_def": "茂盛的；青翠的",
    "en_def": "with a lot of healthy green plants",
    "sentence": "A: Why did the photographer choose that small valley for the new advertising photos of our outdoor clothing brand? B: The valley has {{BLANK}} trees and fresh grass everywhere after the spring rain, so the colors look rich and beautiful, and the models can wear the new jackets in a natural setting.",
    "cn": "A：攝影師為什麼選那個小山谷拍我們戶外服飾品牌的新廣告照片？ B：春雨過後，那個山谷到處都是【茂盛的】樹木和新鮮的草地，所以顏色看起來豐富又美麗，模特兒可以在自然的環境中穿上新外套。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "自然的；天然的",
    "en_def": "existing in nature, not made by people",
    "sentence": "A: The hotel manager wants to make the lobby feel warmer and more welcoming, so what changes did the designer suggest at the meeting? B: She suggested adding large indoor trees and furniture made of {{BLANK}} materials like wood and stone, because guests usually feel more relaxed in a space that looks like the outdoors.",
    "cn": "A：飯店經理想讓大廳感覺更溫馨、更有歡迎感，設計師在會議上建議了哪些改變？ B：她建議增加大型室內樹木，以及用木頭和石頭這類【天然】材料製成的家具，因為客人通常在看起來像戶外的空間裡會感覺比較放鬆。"
  },
  {
    "word": "oxygen",
    "pos": "n.",
    "cn_def": "氧氣",
    "en_def": "a gas in the air that people need to breathe",
    "sentence": "A: Why does the company want to put so many large plants and small trees in the new open office on the fifth floor? B: The manager read that plants produce {{BLANK}} and clean the air, so she believes employees will feel more awake and comfortable during long working days in front of their computers.",
    "cn": "A：公司為什麼想在五樓的新開放式辦公室放這麼多大型植物和小樹？ B：經理讀到植物會產生【氧氣】並淨化空氣，所以她相信員工在電腦前長時間工作時會感覺更清醒、更舒服。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "A: Why did the construction company change its plan to build a new warehouse next to the river outside town? B: Scientists found that the old trees there are an important {{BLANK}} for rare birds, so the city asked the company to choose another site to protect the animals living there.",
    "cn": "A：建設公司為什麼改變在鎮外河邊蓋新倉庫的計畫？ B：科學家發現那裡的老樹是珍稀鳥類重要的【棲息地】，所以市政府要求公司另選地點，以保護住在那裡的動物。"
  },
  {
    "word": "canopy",
    "pos": "n.",
    "cn_def": "林冠；樹冠層",
    "en_def": "the top layer of branches and leaves in a forest",
    "sentence": "A: What is the most popular activity at the eco-resort that our travel agency started selling to young customers this year? B: Guests love walking on a long bridge high above the ground through the forest {{BLANK}}, where they can see colorful birds and monkeys up close among the leaves and branches.",
    "cn": "A：我們旅行社今年開始賣給年輕顧客的生態度假村裡，最受歡迎的活動是什麼？ B：客人很喜歡走在高出地面的長橋上，穿越森林的【樹冠層】，在那裡可以在樹葉和樹枝間近距離看到色彩繽紛的鳥和猴子。"
  },
  {
    "word": "soil",
    "pos": "n.",
    "cn_def": "土壤",
    "en_def": "the top layer of the earth in which plants grow",
    "sentence": "A: Why are the young trees that we planted around the new factory last spring growing so slowly, even though we water them often? B: The gardener tested the ground and found that the {{BLANK}} contains too much sand and not enough nutrients, so he will add natural fertilizer next week to help them.",
    "cn": "A：我們去年春天在新工廠周圍種的小樹，為什麼即使常澆水還是長得這麼慢？ B：園丁檢測了地面，發現【土壤】含有太多沙子、養分不足，所以他下週會加入天然肥料來幫助它們。"
  }
];

const MCQS = [
  {
    "q": "The company owns a large _____ near the lake. Every spring, employees volunteer to clean the hiking trails there.",
    "options": [
      "forest",
      "bark",
      "oxygen",
      "twig"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our new office chairs are made of recycled _____ instead of metal. They are lighter and much more comfortable for long meetings.",
    "options": [
      "oxygen",
      "shade",
      "wood",
      "seed"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The storm cracked the _____ of the old tree in front of the bank. Workers will remove the tree before it comes down.",
    "options": [
      "oxygen",
      "trunk",
      "habitat",
      "shade"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "A heavy _____ broke off during the typhoon. It landed on the roof of the parking garage, but nobody was hurt.",
    "options": [
      "soil",
      "oxygen",
      "shade",
      "branch"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The designer added a small green _____ to the logo of our organic tea brand. It shows customers that the product is natural.",
    "options": [
      "oxygen",
      "soil",
      "leaf",
      "habitat"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The tree's _____ system has spread under the sidewalk. The city will repair the cracked concrete next month.",
    "options": [
      "root",
      "shade",
      "bark",
      "oxygen"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Cinnamon is made from the dried _____ of a tropical tree. Our gift shop sells it in small glass jars.",
    "options": [
      "soil",
      "oxygen",
      "shade",
      "bark"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Each visitor received a small bag with one tree _____ inside. The company hopes people will plant it at home.",
    "options": [
      "canopy",
      "seed",
      "trunk",
      "habitat"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Every new employee plants a young _____ in the company garden. After ten years, these will become a small forest.",
    "options": [
      "sapling",
      "canopy",
      "habitat",
      "oxygen"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Please put the drinks table in the _____ under the trees. Otherwise, the hot afternoon sun will warm the bottles quickly.",
    "options": [
      "bark",
      "oxygen",
      "shade",
      "canopy"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The reception desk is made of solid _____. This hard, strong wood will not be damaged easily by heavy luggage.",
    "options": [
      "soil",
      "oak",
      "oxygen",
      "habitat"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The mountain hotel is surrounded by huge _____ trees. Guests enjoy the fresh smell of their needles on morning walks.",
    "options": [
      "soil",
      "oxygen",
      "bark",
      "pine"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "We chose _____ trees for the hotel entrance. They keep their leaves all winter, so the area always looks fresh.",
    "options": [
      "deciduous",
      "natural",
      "evergreen",
      "tall"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Most trees in this park are _____. They lose all their leaves in autumn, so the paths need cleaning every day.",
    "options": [
      "deciduous",
      "evergreen",
      "natural",
      "dense"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "These young trees _____ about one meter every year. In five years, they will provide plenty of shade for the parking lot.",
    "options": [
      "shed",
      "bloom",
      "water",
      "grow"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Our team will _____ fifty trees along the river on Earth Day. Volunteers should bring gloves and comfortable shoes.",
    "options": [
      "sprout",
      "plant",
      "bloom",
      "fall"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "While we are away, the building manager will _____ the office plants every morning. The weather is expected to be very dry.",
    "options": [
      "water",
      "sprout",
      "shed",
      "bloom"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Keep the soil wet and the seeds will _____ within two weeks. Small green leaves will appear soon after that.",
    "options": [
      "shed",
      "fall",
      "sprout",
      "bloom"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The cherry trees usually _____ in early April. Our spring tour lets customers see thousands of pink flowers in the park.",
    "options": [
      "shed",
      "bloom",
      "water",
      "plant"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Every autumn, the maple trees in the parking area _____ their leaves. Extra cleaners are hired to keep the paths safe.",
    "options": [
      "bloom",
      "sprout",
      "water",
      "shed"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Old branches may _____ onto the tables if the wind becomes stronger. The dinner has been moved indoors for safety.",
    "options": [
      "grow",
      "sprout",
      "fall",
      "bloom"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The trees on Main Street are very _____. They reach the windows on the third floor of the office buildings.",
    "options": [
      "tall",
      "natural",
      "deciduous",
      "evergreen"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Visitors come from all over the world to see this _____ tree. Scientists believe it is more than two thousand years old.",
    "options": [
      "lush",
      "dense",
      "natural",
      "ancient"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The hikers got lost in a _____ forest. The trees grew so close together that they could not see the trail signs.",
    "options": [
      "natural",
      "dense",
      "deciduous",
      "evergreen"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "After the spring rain, the valley was _____ with healthy grass and trees. It was the perfect setting for our outdoor advertisement.",
    "options": [
      "lush",
      "ancient",
      "tall",
      "deciduous"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The designer recommended furniture made from _____ materials such as wood and stone. Guests feel more relaxed in spaces like this.",
    "options": [
      "ancient",
      "lush",
      "natural",
      "tall"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Plants in the office produce _____ and help clean the air. Employees say they feel more awake during the afternoon.",
    "options": [
      "bark",
      "oxygen",
      "soil",
      "habitat"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The old trees by the river are an important _____ for rare birds. The company chose another site for its warehouse.",
    "options": [
      "oxygen",
      "bark",
      "seed",
      "habitat"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "From the high bridge, guests can walk through the forest _____. They see birds and monkeys among the leaves.",
    "options": [
      "soil",
      "root",
      "canopy",
      "seed"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The young trees are growing slowly because the _____ contains too much sand. The gardener will add fertilizer next week.",
    "options": [
      "soil",
      "bark",
      "canopy",
      "oxygen"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "forest": {
    "pos": "n.",
    "en_def": "a large area of land covered with trees",
    "cn_def": "森林"
  },
  "wood": {
    "pos": "n.",
    "en_def": "the hard material that trees are made of",
    "cn_def": "木頭；木材"
  },
  "trunk": {
    "pos": "n.",
    "en_def": "the thick main stem of a tree",
    "cn_def": "樹幹"
  },
  "branch": {
    "pos": "n.",
    "en_def": "a part of a tree that grows out from the trunk",
    "cn_def": "樹枝"
  },
  "twig": {
    "pos": "n.",
    "en_def": "a very small, thin branch",
    "cn_def": "細枝；嫩枝"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "one of the flat green parts that grow on a tree",
    "cn_def": "葉子"
  },
  "root": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground",
    "cn_def": "根"
  },
  "bark": {
    "pos": "n.",
    "en_def": "the hard outer covering of a tree",
    "cn_def": "樹皮"
  },
  "seed": {
    "pos": "n.",
    "en_def": "a small hard part from which a new plant grows",
    "cn_def": "種子"
  },
  "sapling": {
    "pos": "n.",
    "en_def": "a young tree",
    "cn_def": "樹苗；幼樹"
  },
  "shade": {
    "pos": "n.",
    "en_def": "a cool, dark area where sunlight is blocked",
    "cn_def": "陰涼處；樹蔭"
  },
  "grove": {
    "pos": "n.",
    "en_def": "a small group of trees",
    "cn_def": "小樹林"
  },
  "oak": {
    "pos": "n.",
    "en_def": "a large tree with very hard wood",
    "cn_def": "橡樹；橡木"
  },
  "pine": {
    "pos": "n.",
    "en_def": "a tall evergreen tree with thin, sharp leaves called needles",
    "cn_def": "松樹"
  },
  "maple": {
    "pos": "n.",
    "en_def": "a tree with wide leaves that turn red in autumn",
    "cn_def": "楓樹"
  },
  "palm": {
    "pos": "n.",
    "en_def": "a tall tree with large leaves at the top that grows in hot places",
    "cn_def": "棕櫚樹"
  },
  "evergreen": {
    "pos": "adj.",
    "en_def": "having green leaves all year",
    "cn_def": "常綠的"
  },
  "deciduous": {
    "pos": "adj.",
    "en_def": "losing its leaves every autumn",
    "cn_def": "落葉的"
  },
  "grow": {
    "pos": "v.",
    "en_def": "to become bigger over time",
    "cn_def": "生長；成長"
  },
  "plant": {
    "pos": "v.",
    "en_def": "to put a seed or young tree in the ground to grow",
    "cn_def": "種植"
  },
  "water": {
    "pos": "v.",
    "en_def": "to give water to plants",
    "cn_def": "澆水"
  },
  "sprout": {
    "pos": "v.",
    "en_def": "to begin to grow and produce new leaves",
    "cn_def": "發芽"
  },
  "bloom": {
    "pos": "v.",
    "en_def": "to produce flowers",
    "cn_def": "開花"
  },
  "shed": {
    "pos": "v.",
    "en_def": "to lose leaves, skin, etc. naturally",
    "cn_def": "脫落；掉落（葉子）"
  },
  "fall": {
    "pos": "v.",
    "en_def": "to drop down to the ground",
    "cn_def": "落下；掉落"
  },
  "tall": {
    "pos": "adj.",
    "en_def": "having a greater height than usual",
    "cn_def": "高的；高大的"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a long time ago",
    "cn_def": "古老的"
  },
  "dense": {
    "pos": "adj.",
    "en_def": "having many things very close together",
    "cn_def": "茂密的；濃密的"
  },
  "green": {
    "pos": "adj.",
    "en_def": "having the color of leaves and grass; full of plants",
    "cn_def": "綠色的；綠意盎然的"
  },
  "lush": {
    "pos": "adj.",
    "en_def": "with a lot of healthy green plants",
    "cn_def": "茂盛的；青翠的"
  },
  "natural": {
    "pos": "adj.",
    "en_def": "existing in nature, not made by people",
    "cn_def": "自然的；天然的"
  },
  "oxygen": {
    "pos": "n.",
    "en_def": "a gas in the air that people need to breathe",
    "cn_def": "氧氣"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲息地"
  },
  "canopy": {
    "pos": "n.",
    "en_def": "the top layer of branches and leaves in a forest",
    "cn_def": "林冠；樹冠層"
  },
  "soil": {
    "pos": "n.",
    "en_def": "the top layer of the earth in which plants grow",
    "cn_def": "土壤"
  }
};

const EXTRA_GLOSSES = {};
