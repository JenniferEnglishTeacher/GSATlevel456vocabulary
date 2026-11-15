// Topic 29 Quiz Data: Birds 鳥類
// Source word list: https://www.examword.com/group-topic/birds — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T29 - Birds 鳥類",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "keen",
    "pos": "adj.",
    "cn_def": "熱衷的；渴望的",
    "en_def": "very interested in something and eager to do it",
    "sentence": "A: Why did the marketing director ask Linda to plan the company's weekend trip to the wetlands park this year instead of hiring a travel agency? B: Linda is very {{BLANK}} on bird watching, so she already knows the best walking paths, the quietest viewing spots, and the time when most of the birds come out to feed.",
    "cn": "A：為什麼行銷總監今年要琳達規劃公司週末去濕地公園的旅遊，而不是請旅行社？ B：琳達非常【熱衷於】賞鳥，所以她早就知道最好的步道、最安靜的觀賞地點，以及大部分鳥類出來覓食的時間。"
  },
  {
    "word": "fond",
    "pos": "adj.",
    "cn_def": "喜愛的",
    "en_def": "liking someone or something very much",
    "sentence": "A: Why does Mr. Chen always eat his lunch on the bench beside the pond instead of joining the rest of the team in the staff cafeteria? B: He has always been {{BLANK}} of the ducks and small birds that live there, and he says that watching them for twenty minutes helps him relax before his busy afternoon meetings.",
    "cn": "A：為什麼陳先生總是在池塘邊的長椅上吃午餐，而不是和團隊其他人一起去員工餐廳？ B：他一直都很【喜愛】住在那裡的鴨子和小鳥，他說看牠們二十分鐘能幫助他在忙碌的下午會議前放鬆。"
  },
  {
    "word": "attract",
    "pos": "v.",
    "cn_def": "吸引",
    "en_def": "to make a person or animal come to a place",
    "sentence": "A: The hotel garden looks so quiet these days, so what is the manager planning to do before the spring tourist season begins next month? B: She has ordered several wooden feeders and some colorful flowering plants to {{BLANK}} more birds, because many of our guests enjoy taking photos of wildlife while they have breakfast on the terrace.",
    "cn": "A：飯店花園最近看起來好冷清，經理打算在下個月春季旅遊旺季開始前做些什麼？ B：她訂購了幾個木製餵食器和一些色彩鮮豔的開花植物，來【吸引】更多鳥類，因為我們許多客人喜歡在露台吃早餐時拍野生動物的照片。"
  },
  {
    "word": "creature",
    "pos": "n.",
    "cn_def": "生物；動物",
    "en_def": "a living animal, especially a small or unusual one",
    "sentence": "A: What did the children in the after-school nature class find most exciting about yesterday's field trip to the forest center? B: They loved the guided walk, but the best moment was when the guide showed them a tiny {{BLANK}} with bright blue feathers sitting quietly on a branch just above the visitors' path.",
    "cn": "A：課後自然課的孩子們覺得昨天去森林中心的校外教學中最令人興奮的是什麼？ B：他們很喜歡導覽步行，但最精彩的時刻是導遊讓他們看到一隻有著亮藍色羽毛的小【生物】，靜靜地停在遊客步道正上方的樹枝上。"
  },
  {
    "word": "vertebrate",
    "pos": "n.",
    "cn_def": "脊椎動物",
    "en_def": "an animal that has a backbone",
    "sentence": "A: Our new exhibition sign at the science museum needs a simple explanation, so how should we describe birds for the young visitors? B: We could say that a bird is a {{BLANK}}, which means it has a backbone just like fish, frogs, snakes, and people, and then add a colorful picture of a bird's skeleton next to the text.",
    "cn": "A：我們科學博物館的新展覽告示牌需要簡單的說明，那我們要如何向年輕參觀者描述鳥類？ B：我們可以說鳥是一種【脊椎動物】，意思是牠和魚、青蛙、蛇以及人一樣有脊椎，然後在文字旁邊加上一張彩色的鳥類骨骼圖。"
  },
  {
    "word": "feather",
    "pos": "n.",
    "cn_def": "羽毛",
    "en_def": "one of the soft, light parts that cover a bird's body",
    "sentence": "A: Why did the furniture company decide to stop selling the expensive pillows that were so popular in last year's winter catalog? B: Several customers complained that a {{BLANK}} kept coming out through the cotton cover every night, so the product team is now testing a stronger cover and a different filling.",
    "cn": "A：為什麼家具公司決定停賣那款在去年冬季型錄中很受歡迎的昂貴枕頭？ B：好幾位顧客抱怨每天晚上都有【羽毛】從棉質枕套裡跑出來，所以產品團隊現在正在測試更牢固的枕套和不同的填充物。"
  },
  {
    "word": "beak",
    "pos": "n.",
    "cn_def": "鳥喙",
    "en_def": "the hard, pointed mouth of a bird",
    "sentence": "A: How did the zoo's animal doctor know that the old parrot was sick, even though it still looked active and noisy in the bird house? B: She noticed that its {{BLANK}} had a small crack near the tip, so the bird could not break open its seeds properly and had been eating much less food than usual.",
    "cn": "A：雖然那隻老鸚鵡在鳥舍裡看起來仍然很活潑又吵鬧，動物園的獸醫怎麼知道牠生病了？ B：她注意到牠的【鳥喙】靠近尖端處有一道小裂縫，所以這隻鳥無法好好啄開種子，吃的食物也比平常少了很多。"
  },
  {
    "word": "Aves",
    "pos": "n.",
    "cn_def": "鳥綱（鳥類的學名）",
    "en_def": "the scientific name for the class of all birds",
    "sentence": "A: The publisher wants the new animal guidebook to look more professional, so what should we print at the top of the chapter about birds? B: Let's print the scientific class name {{BLANK}} under the main title, and then explain in a short note that every bird, from the tiny hummingbird to the huge ostrich, belongs to this group.",
    "cn": "A：出版社希望新的動物圖鑑看起來更專業，那我們應該在鳥類那一章的頂端印些什麼？ B：我們在主標題下方印上科學分類名稱【鳥綱】，然後用一段簡短說明解釋每一種鳥，從小小的蜂鳥到巨大的鴕鳥，都屬於這一類。"
  },
  {
    "word": "distinctive",
    "pos": "adj.",
    "cn_def": "獨特的；與眾不同的",
    "en_def": "special or different, so it is easy to recognize",
    "sentence": "A: Why did the design team choose a small red bird for the new logo instead of the blue circle that the director first suggested? B: They wanted something {{BLANK}} that customers would remember after seeing it only once, and the red bird stands out clearly on our product boxes, website, and delivery trucks.",
    "cn": "A：為什麼設計團隊為新標誌選了一隻小紅鳥，而不是總監一開始建議的藍色圓圈？ B：他們想要一個【獨特的】東西，讓顧客只看一次就記得，而且這隻紅鳥在我們的產品盒子、網站和送貨卡車上都非常顯眼。"
  },
  {
    "word": "flora",
    "pos": "n.",
    "cn_def": "植物群；（某地區的）植物",
    "en_def": "all the plants that grow in a particular area",
    "sentence": "A: What will the tour guide talk about during the first part of the afternoon nature walk around the island for our company group? B: She will first introduce the local {{BLANK}}, such as the tall palm trees and wild orchids, and explain how these plants give the island's birds both food and safe places to rest.",
    "cn": "A：導遊在下午為我們公司團體安排的環島自然步行前半段會介紹什麼？ B：她會先介紹當地的【植物】，例如高大的棕櫚樹和野生蘭花，並說明這些植物如何為島上的鳥類提供食物和安全的休息處。"
  },
  {
    "word": "fauna",
    "pos": "n.",
    "cn_def": "動物群；（某地區的）動物",
    "en_def": "all the animals that live in a particular area",
    "sentence": "A: Why is the environmental group asking our construction company to delay the new factory project near the river until next year? B: They are worried that the noise and dust will harm the local {{BLANK}}, especially the rare birds, frogs, and fish that depend on the quiet riverbanks during their breeding season.",
    "cn": "A：為什麼環保團體要求我們的營建公司把河邊的新工廠案延到明年？ B：他們擔心噪音和灰塵會傷害當地的【動物】，尤其是在繁殖季節依賴安靜河岸的珍稀鳥類、青蛙和魚類。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "稀有的；罕見的",
    "en_def": "not seen or found very often",
    "sentence": "A: Why were so many photographers waiting outside the city park with their big cameras when I walked past this morning on my way to the office? B: A birdwatcher posted online that a {{BLANK}} owl from the mountains had been seen there, so people came early hoping to get a picture before it flew away.",
    "cn": "A：今天早上我走路去辦公室經過時，為什麼有那麼多攝影師帶著大相機在市立公園外等？ B：一位賞鳥人士在網路上發文說，有人在那裡看見一隻來自山區的【稀有】貓頭鷹，所以大家一早就來，希望在牠飛走前拍到照片。"
  },
  {
    "word": "shiny",
    "pos": "adj.",
    "cn_def": "發亮的；閃亮的",
    "en_def": "bright and reflecting light",
    "sentence": "A: Why did the restaurant staff put plastic covers over the outdoor tables after the lunch rush ended yesterday afternoon? B: A group of crows kept landing on the patio and stealing the {{BLANK}} spoons and forks, so the manager decided to protect the silverware until the birds stop visiting.",
    "cn": "A：為什麼餐廳員工昨天下午午餐尖峰過後，要在戶外餐桌上蓋上塑膠罩？ B：有一群烏鴉一直降落在露台上偷走【亮晶晶的】湯匙和叉子，所以經理決定在那些鳥不再來之前先保護好餐具。"
  },
  {
    "word": "breed",
    "pos": "v.",
    "cn_def": "繁殖；飼養",
    "en_def": "to keep animals so that they produce young animals",
    "sentence": "A: How does the small family farm outside the city make enough money now that fewer people are buying their fresh vegetables at the market? B: The owners started to {{BLANK}} chickens and ducks for local restaurants, and they also sell the eggs online, which has become their most successful product this year.",
    "cn": "A：現在在市場買新鮮蔬菜的人變少了，城外那座小型家庭農場要如何賺足夠的錢？ B：農場主人開始【繁殖飼養】雞和鴨供應給當地餐廳，他們也在網路上賣雞蛋，這已成為他們今年最成功的產品。"
  },
  {
    "word": "pigeon",
    "pos": "n.",
    "cn_def": "鴿子",
    "en_def": "a gray bird often seen in cities and parks",
    "sentence": "A: Why is the building manager putting thin metal spikes along the edges of the roof and above all the office windows this week? B: Every {{BLANK}} from the train station seems to land on our roof, and the birds leave such a mess on the windows that the cleaning company says washing them every day costs too much.",
    "cn": "A：為什麼大樓管理員這週要在屋頂邊緣和所有辦公室窗戶上方裝上細細的金屬尖刺？ B：火車站那邊的每一隻【鴿子】似乎都會降落在我們的屋頂上，而且這些鳥把窗戶弄得好髒，清潔公司說每天清洗的費用太高了。"
  },
  {
    "word": "sparrow",
    "pos": "n.",
    "cn_def": "麻雀",
    "en_def": "a small, common brown bird",
    "sentence": "A: What was that small brown bird that flew into the café this morning and made all the customers laugh while they were waiting in line? B: It was just a {{BLANK}} looking for bread crumbs, and after one of our servers opened the back door, it hopped outside and flew up into the tree by the parking lot.",
    "cn": "A：今天早上飛進咖啡廳、讓排隊的客人都笑出來的那隻棕色小鳥是什麼？ B：那只是一隻在找麵包屑的【麻雀】，我們一位服務生打開後門後，牠就跳到外面，飛上停車場旁的那棵樹。"
  },
  {
    "word": "finch",
    "pos": "n.",
    "cn_def": "雀鳥（雀科鳴禽）",
    "en_def": "a small singing bird with a short, thick beak",
    "sentence": "A: My manager wants a small pet for the reception area that is quiet, cheerful, and easy to care for, so what would you recommend from your shop? B: I would suggest a {{BLANK}}, because it is a small, colorful songbird that eats simple seeds, does not need much space, and sings softly enough not to disturb your visitors.",
    "cn": "A：我的經理想為接待區找一隻安靜、討喜又好照顧的小寵物，你會推薦你們店裡的哪一種？ B：我建議養一隻【雀鳥】，因為牠是一種色彩繽紛的小型鳴禽，吃簡單的種子、不需要太多空間，而且歌聲輕柔，不會打擾你們的訪客。"
  },
  {
    "word": "exotic",
    "pos": "adj.",
    "cn_def": "異國的；外來的；奇特的",
    "en_def": "coming from a faraway country and unusual",
    "sentence": "A: Why has the number of visitors to the botanical garden increased so much since the new section opened in the summer? B: The garden built a warm glass house full of {{BLANK}} birds from South America and Africa, and many families now visit on weekends to see their bright colors and listen to their unusual songs.",
    "cn": "A：為什麼植物園從夏天新區開放後，遊客人數增加了那麼多？ B：植物園蓋了一座溫暖的玻璃屋，裡面滿是來自南美洲和非洲的【異國】鳥類，現在很多家庭週末都會來看牠們鮮豔的色彩、聽牠們奇特的歌聲。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的",
    "en_def": "far away from towns and cities",
    "sentence": "A: Why does the research team need a helicopter for their bird study next month instead of driving there in the company vans? B: The birds they want to study only live on a {{BLANK}} island about two hundred kilometers from the coast, and there are no roads, ferries, or hotels anywhere near it.",
    "cn": "A：為什麼研究團隊下個月的鳥類研究需要直升機，而不是開公司的廂型車去？ B：他們想研究的鳥只住在離海岸約兩百公里的一座【偏遠的】島上，而且附近完全沒有道路、渡輪或旅館。"
  },
  {
    "word": "hunt",
    "pos": "v.",
    "cn_def": "狩獵；獵捕",
    "en_def": "to chase and catch animals for food or sport",
    "sentence": "A: Why did the national park office put up so many new signs near the lake entrance before the autumn holiday weekend? B: The signs tell visitors that it is against the law to {{BLANK}} the ducks and geese in the park, because the number of these birds has dropped sharply over the past few years.",
    "cn": "A：為什麼國家公園管理處在秋季連假前，在湖畔入口附近豎立了那麼多新告示牌？ B：告示牌告訴遊客，在園內【獵捕】鴨子和鵝是違法的，因為這些鳥的數量在過去幾年大幅減少。"
  },
  {
    "word": "roast",
    "pos": "v.",
    "cn_def": "烤；烘烤",
    "en_def": "to cook meat in an oven or over a fire",
    "sentence": "A: The hotel is hosting a large holiday dinner for our clients next Friday, so how will the kitchen prepare the main dish for so many guests? B: The head chef plans to {{BLANK}} twenty turkeys slowly in the big ovens for several hours, and then serve them with potatoes, fresh vegetables, and a special fruit sauce.",
    "cn": "A：飯店下週五要為我們的客戶舉辦大型節日晚宴，廚房要如何為這麼多客人準備主菜？ B：主廚打算用大烤箱慢慢地【烤】二十隻火雞好幾個小時，然後搭配馬鈴薯、新鮮蔬菜和特製水果醬一起上菜。"
  },
  {
    "word": "game birds",
    "pos": "n.phr.",
    "cn_def": "獵禽（可狩獵食用的野鳥）",
    "en_def": "wild birds that people hunt for sport or food",
    "sentence": "A: Why does the new restaurant near the old castle have such a short menu and change it every few weeks during the autumn and winter? B: The chef only cooks {{BLANK}}, such as wild duck, pheasant, and quail, that local hunters bring in each week, so the dishes depend on what is available during the season.",
    "cn": "A：為什麼古堡附近那家新餐廳的菜單那麼短，而且在秋冬期間每幾週就換一次？ B：主廚只烹調當地獵人每週送來的【獵禽】，像是野鴨、雉雞和鵪鶉，所以菜色取決於當季能取得的食材。"
  },
  {
    "word": "delicacy",
    "pos": "n.",
    "cn_def": "珍饈；美味佳餚",
    "en_def": "a rare or expensive food that people think is special",
    "sentence": "A: What dish should we order for the visiting Japanese clients at tonight's business dinner if we want them to try something truly local? B: Let's order the roast pigeon, which is a famous {{BLANK}} in this region, and the restaurant only serves a few plates each night, so I will call now to reserve two.",
    "cn": "A：如果我們想讓來訪的日本客戶嚐嚐道地的料理，今晚的商務晚宴該點什麼菜？ B：我們點烤乳鴿吧，那是這個地區有名的【美味佳餚】，而且餐廳每晚只供應幾盤，所以我現在就打電話預訂兩份。"
  },
  {
    "word": "cage",
    "pos": "n.",
    "cn_def": "籠子",
    "en_def": "a box made of wire or bars for keeping birds or animals",
    "sentence": "A: The pet shop customer said her parrot keeps trying to escape, so what advice did you give her before she left the store? B: I told her to buy a bigger {{BLANK}} with a stronger lock on the door, because a bird that has too little space often gets bored and looks for ways to get out.",
    "cn": "A：那位寵物店顧客說她的鸚鵡一直想逃跑，她離開店之前你給了她什麼建議？ B：我告訴她買一個更大、門鎖更牢固的【籠子】，因為空間太小的鳥常常會覺得無聊，並想辦法跑出來。"
  },
  {
    "word": "nest",
    "pos": "n.",
    "cn_def": "鳥巢",
    "en_def": "a place a bird builds to lay its eggs and keep its babies",
    "sentence": "A: Why haven't the workers started painting the outside of the office building yet, even though the job was supposed to begin on Monday? B: They found a {{BLANK}} with four small eggs under the roof near the main entrance, so the manager decided to wait until the young birds can fly before the painting begins.",
    "cn": "A：為什麼工人還沒開始粉刷辦公大樓外牆，明明工程應該在星期一開始？ B：他們在主要入口附近的屋簷下發現一個有四顆小蛋的【鳥巢】，所以經理決定等到幼鳥會飛之後再開始粉刷。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural place where an animal or plant lives",
    "sentence": "A: Why is our company giving money to the wetland project this year instead of sponsoring the city marathon like we did before? B: The CEO believes we should help protect the natural {{BLANK}} of the water birds, since the new housing developments near the coast have already destroyed many of the places where they feed and rest.",
    "cn": "A：為什麼我們公司今年要捐錢給濕地計畫，而不是像以前那樣贊助城市馬拉松？ B：執行長認為我們應該幫忙保護水鳥的自然【棲息地】，因為沿海附近的新住宅開發已經破壞了許多牠們覓食和休息的地方。"
  },
  {
    "word": "perch",
    "pos": "v.",
    "cn_def": "（鳥）棲息；停歇",
    "en_def": "(of a bird) to sit on a branch or an edge",
    "sentence": "A: Why did the café owner put a small wooden bar outside the front window when she redecorated the shop last month? B: She noticed that birds like to {{BLANK}} near the window in the morning, so she gave them a safe place to sit, and now customers enjoy watching them while they drink their coffee.",
    "cn": "A：為什麼咖啡廳老闆上個月重新裝潢店面時，在前窗外放了一根小木桿？ B：她注意到鳥兒喜歡在早上【停歇】在窗戶附近，所以她給牠們一個安全的地方坐，現在客人都喜歡一邊喝咖啡一邊看牠們。"
  },
  {
    "word": "amuse",
    "pos": "v.",
    "cn_def": "逗樂；使開心",
    "en_def": "to make someone laugh or smile",
    "sentence": "A: The children in the hospital waiting room looked bored and tired this morning, so what did the nurses do to make them feel better? B: A volunteer brought a friendly talking parrot to {{BLANK}} them, and the kids laughed loudly every time the bird said hello or copied the sound of a ringing phone.",
    "cn": "A：今天早上醫院候診室的孩子們看起來又無聊又疲倦，護理師們做了什麼讓他們感覺好一點？ B：一位志工帶來一隻友善、會說話的鸚鵡來【逗樂】他們，每次那隻鳥說哈囉或模仿電話鈴聲時，孩子們都大聲笑出來。"
  }
];

const MCQS = [
  {
    "q": "Our new intern is very _____ on photography. She volunteered to take pictures of the birds at the company's nature event.",
    "options": [
      "rare",
      "shiny",
      "keen",
      "remote"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Mrs. Lee has always been _____ of her grandmother's old songbird. She still feeds it every morning before she leaves for work.",
    "options": [
      "fond",
      "rare",
      "distinctive",
      "exotic"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The park staff planted berry bushes along the walking path. They hope the fruit will _____ more birds during the cold winter months.",
    "options": [
      "hunt",
      "breed",
      "roast",
      "attract"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The museum's new display shows a strange flying _____ from millions of years ago. Scientists believe it was an early relative of modern birds.",
    "options": [
      "delicacy",
      "creature",
      "nest",
      "cage"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Every bird has a backbone, just like a human. That is why scientists say that a bird is a _____.",
    "options": [
      "feather",
      "flora",
      "vertebrate",
      "cage"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The designer added a long white _____ to the hat for the fashion show. It came from an ostrich farm in South Africa.",
    "options": [
      "feather",
      "nest",
      "pigeon",
      "beak"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The bird used its strong, curved _____ to crack open the hard nuts. The visitors at the zoo were amazed by its power.",
    "options": [
      "habitat",
      "beak",
      "flora",
      "cage"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "In science class, the students learned that all birds belong to one group. The scientific name of this class is _____.",
    "options": [
      "flora",
      "game birds",
      "fauna",
      "Aves"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The male bird has a _____ red mark on its head. This special feature makes it easy for birdwatchers to recognize.",
    "options": [
      "remote",
      "fond",
      "distinctive",
      "keen"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The island is famous for its wild orchids and tall ferns. Plant experts come from all over the world to study its _____.",
    "options": [
      "cage",
      "beak",
      "vertebrate",
      "flora"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The documentary shows the animals that live in the rainforest. It focuses on the local _____, including monkeys, frogs, and colorful birds.",
    "options": [
      "fauna",
      "flora",
      "delicacy",
      "feather"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Only about fifty of these owls are left in the wild. The bird is so _____ that most people have never seen one.",
    "options": [
      "fond",
      "rare",
      "keen",
      "shiny"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new office lobby has a _____ marble floor. The cleaners polish it every night so that it reflects the morning sunlight.",
    "options": [
      "shiny",
      "remote",
      "keen",
      "fond"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The farm plans to _____ more chickens next year. The owners expect strong demand for fresh eggs from local bakeries.",
    "options": [
      "roast",
      "amuse",
      "perch",
      "breed"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "In the past, a trained _____ carried short messages between cities. Today, these gray birds are mostly seen in parks and squares.",
    "options": [
      "cage",
      "pigeon",
      "habitat",
      "flora"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "A small brown _____ built a nest above the shop door. The owner decided not to remove it until the babies could fly.",
    "options": [
      "fauna",
      "delicacy",
      "sparrow",
      "vertebrate"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The pet shop sells a tiny songbird with a short, thick beak. This colorful _____ is popular because it is easy to look after.",
    "options": [
      "habitat",
      "finch",
      "cage",
      "delicacy"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The hotel's garden is full of _____ plants from tropical countries. Guests often ask the staff where these unusual flowers come from.",
    "options": [
      "fond",
      "keen",
      "exotic",
      "shiny"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The research station is in a _____ area with no roads. All supplies must be delivered by small plane once a month.",
    "options": [
      "keen",
      "fond",
      "shiny",
      "remote"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Owls usually _____ at night when small animals come out. Their excellent hearing helps them find food in the dark.",
    "options": [
      "hunt",
      "amuse",
      "roast",
      "attract"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The kitchen staff will _____ the chicken in the oven for two hours. It will be served with vegetables at the staff party.",
    "options": [
      "hunt",
      "perch",
      "roast",
      "amuse"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Wild duck and pheasant are popular _____ in this region. Many hunters visit the area during the autumn hunting season.",
    "options": [
      "game birds",
      "beak",
      "flora",
      "vertebrate"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Bird's nest soup is considered a _____ in many Asian countries. It is expensive and is usually served at special banquets.",
    "options": [
      "beak",
      "sparrow",
      "habitat",
      "delicacy"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Please keep the parrot in its _____ while the painters are working. We do not want it to fly out of the open windows.",
    "options": [
      "habitat",
      "cage",
      "flora",
      "fauna"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The eagles built a huge _____ on top of the old radio tower. The city decided to protect it until the eggs hatch.",
    "options": [
      "finch",
      "beak",
      "nest",
      "delicacy"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The new highway would cut through the wetlands. Environmental groups say it will destroy the natural _____ of many water birds.",
    "options": [
      "delicacy",
      "feather",
      "cage",
      "habitat"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Seagulls like to _____ on the posts along the harbor. From there, they watch the fishing boats come back with their catch.",
    "options": [
      "roast",
      "perch",
      "hunt",
      "breed"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The clown at the company picnic tried to _____ the children with funny tricks. Everyone laughed when he pulled a toy bird from his hat.",
    "options": [
      "amuse",
      "perch",
      "roast",
      "breed"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Many forests are being cut down to make room for farmland. As a result, birds are losing their _____ and moving into cities.",
    "options": [
      "delicacy",
      "Aves",
      "beak",
      "habitat"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The shop placed bright lights and colorful signs in its window. The manager hopes these changes will _____ more customers this holiday season.",
    "options": [
      "attract",
      "roast",
      "perch",
      "breed"
    ],
    "answer": 0,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "keen": {
    "pos": "adj.",
    "en_def": "very interested in something and eager to do it",
    "cn_def": "熱衷的；渴望的"
  },
  "fond": {
    "pos": "adj.",
    "en_def": "liking someone or something very much",
    "cn_def": "喜愛的"
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make a person or animal come to a place",
    "cn_def": "吸引"
  },
  "creature": {
    "pos": "n.",
    "en_def": "a living animal, especially a small or unusual one",
    "cn_def": "生物；動物"
  },
  "vertebrate": {
    "pos": "n.",
    "en_def": "an animal that has a backbone",
    "cn_def": "脊椎動物"
  },
  "feather": {
    "pos": "n.",
    "en_def": "one of the soft, light parts that cover a bird's body",
    "cn_def": "羽毛"
  },
  "beak": {
    "pos": "n.",
    "en_def": "the hard, pointed mouth of a bird",
    "cn_def": "鳥喙"
  },
  "aves": {
    "pos": "n.",
    "en_def": "the scientific name for the class of all birds",
    "cn_def": "鳥綱（鳥類的學名）"
  },
  "distinctive": {
    "pos": "adj.",
    "en_def": "special or different, so it is easy to recognize",
    "cn_def": "獨特的；與眾不同的"
  },
  "flora": {
    "pos": "n.",
    "en_def": "all the plants that grow in a particular area",
    "cn_def": "植物群；（某地區的）植物"
  },
  "fauna": {
    "pos": "n.",
    "en_def": "all the animals that live in a particular area",
    "cn_def": "動物群；（某地區的）動物"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "稀有的；罕見的"
  },
  "shiny": {
    "pos": "adj.",
    "en_def": "bright and reflecting light",
    "cn_def": "發亮的；閃亮的"
  },
  "breed": {
    "pos": "v.",
    "en_def": "to keep animals so that they produce young animals",
    "cn_def": "繁殖；飼養"
  },
  "pigeon": {
    "pos": "n.",
    "en_def": "a gray bird often seen in cities and parks",
    "cn_def": "鴿子"
  },
  "sparrow": {
    "pos": "n.",
    "en_def": "a small, common brown bird",
    "cn_def": "麻雀"
  },
  "finch": {
    "pos": "n.",
    "en_def": "a small singing bird with a short, thick beak",
    "cn_def": "雀鳥（雀科鳴禽）"
  },
  "exotic": {
    "pos": "adj.",
    "en_def": "coming from a faraway country and unusual",
    "cn_def": "異國的；外來的；奇特的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from towns and cities",
    "cn_def": "偏遠的"
  },
  "hunt": {
    "pos": "v.",
    "en_def": "to chase and catch animals for food or sport",
    "cn_def": "狩獵；獵捕"
  },
  "roast": {
    "pos": "v.",
    "en_def": "to cook meat in an oven or over a fire",
    "cn_def": "烤；烘烤"
  },
  "game birds": {
    "pos": "n.phr.",
    "en_def": "wild birds that people hunt for sport or food",
    "cn_def": "獵禽（可狩獵食用的野鳥）"
  },
  "delicacy": {
    "pos": "n.",
    "en_def": "a rare or expensive food that people think is special",
    "cn_def": "珍饈；美味佳餚"
  },
  "cage": {
    "pos": "n.",
    "en_def": "a box made of wire or bars for keeping birds or animals",
    "cn_def": "籠子"
  },
  "nest": {
    "pos": "n.",
    "en_def": "a place a bird builds to lay its eggs and keep its babies",
    "cn_def": "鳥巢"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural place where an animal or plant lives",
    "cn_def": "棲息地"
  },
  "perch": {
    "pos": "v.",
    "en_def": "(of a bird) to sit on a branch or an edge",
    "cn_def": "（鳥）棲息；停歇"
  },
  "amuse": {
    "pos": "v.",
    "en_def": "to make someone laugh or smile",
    "cn_def": "逗樂；使開心"
  }
};

const EXTRA_GLOSSES = {};
