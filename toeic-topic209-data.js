// Topic 209 Quiz Data: Land 土地
// Source word list: https://www.examword.com/group-topic/land — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T209 - Land 土地",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "soil",
    "pos": "n.",
    "cn_def": "土壤",
    "en_def": "the top layer of earth in which plants grow",
    "sentence": "A: Why did the garden company send someone to test the area behind our new office before they started planting trees and flowers there last week? B: They wanted to check whether the {{BLANK}} had enough water and nutrients, because the last building owner dumped old paint there and many plants died quickly.",
    "cn": "A：為什麼園藝公司上週在我們新辦公室後面種樹和花之前，要派人來檢測那塊區域？ B：他們想確認那裡的【土壤】是否有足夠的水分和養分，因為前一位大樓業主曾在那裡傾倒舊油漆，很多植物很快就死了。"
  },
  {
    "word": "ground",
    "pos": "n.",
    "cn_def": "地面",
    "en_def": "the surface of the earth",
    "sentence": "A: Why are the workers putting thick plastic sheets all over the area where the new parking lot will be built next month? B: The {{BLANK}} is still very wet after last week's heavy rain, so they want to protect it and keep the heavy machines from sinking into the mud.",
    "cn": "A：為什麼工人要在下個月將興建新停車場的區域鋪上厚厚的塑膠布？ B：上週大雨過後【地面】還是很濕，所以他們想保護它，避免重型機械陷進泥巴裡。"
  },
  {
    "word": "terrain",
    "pos": "n.",
    "cn_def": "地形；地勢",
    "en_def": "an area of land and its physical features, such as hills or rocks",
    "sentence": "A: Why did the delivery company choose those large trucks with special tires for the route to the mountain village, even though they cost more to rent? B: The {{BLANK}} there is steep and full of loose stones, so normal vans often get stuck or damaged, and the drivers feel much safer in stronger vehicles.",
    "cn": "A：為什麼物流公司在通往山村的路線上選用那些裝有特殊輪胎的大卡車，即使租金比較貴？ B：那裡的【地形】陡峭又布滿鬆動的石頭，一般廂型車常會卡住或損壞，而司機開較堅固的車輛會覺得安全得多。"
  },
  {
    "word": "landscape",
    "pos": "n.",
    "cn_def": "風景；景觀",
    "en_def": "everything you can see when you look across an area of land",
    "sentence": "A: What did the hotel guests write most often in the online reviews that our marketing team collected over the summer holiday? B: Most of them praised the beautiful {{BLANK}} around the hotel, especially the green hills and the lake, and many said they would come back next year with their families.",
    "cn": "A：行銷團隊在暑假期間蒐集的網路評論中，飯店客人最常寫的是什麼？ B：大多數人稱讚飯店周圍美麗的【風景】，尤其是綠色山丘和湖泊，許多人說明年還會和家人一起再來。"
  },
  {
    "word": "field",
    "pos": "n.",
    "cn_def": "田地；原野",
    "en_def": "an area of open land used for growing crops or keeping animals",
    "sentence": "A: Why is the company picnic going to be held at the farm outside town instead of in the city park like last year? B: The farmer has agreed to let us use a large {{BLANK}} next to his barn, so there will be plenty of space for games, food tables, and parking for everyone.",
    "cn": "A：為什麼公司野餐要在城外的農場舉辦，而不是像去年一樣在市立公園？ B：農夫同意讓我們使用他穀倉旁一大片【田地】，所以會有足夠的空間玩遊戲、擺放餐桌，還有給大家停車。"
  },
  {
    "word": "farmland",
    "pos": "n.",
    "cn_def": "農地",
    "en_def": "land used for growing crops or keeping animals",
    "sentence": "A: Why are so many local residents upset about the city's plan to build a huge shopping center on the north side of town? B: The project would cover hundreds of hectares of {{BLANK}} where families have grown rice and vegetables for generations, and people worry that food prices will rise.",
    "cn": "A：為什麼這麼多當地居民對市政府在城北興建大型購物中心的計畫感到不滿？ B：這個計畫會占用數百公頃的【農地】，那裡的家庭世世代代種植稻米和蔬菜，大家擔心食物價格會上漲。"
  },
  {
    "word": "meadow",
    "pos": "n.",
    "cn_def": "草地；牧草地",
    "en_def": "a field of grass and wild flowers",
    "sentence": "A: Where are we going to set up the tents for the outdoor wedding that our events team is planning for next Saturday afternoon? B: We will put them in the wide {{BLANK}} behind the old farmhouse, because it is flat, full of wild flowers, and the guests can enjoy a lovely view of the river.",
    "cn": "A：活動團隊為下週六下午籌備的戶外婚禮，我們要把帳篷搭在哪裡？ B：我們會搭在老農舍後面那片寬廣的【草地】上，因為那裡平坦、長滿野花，賓客還可以欣賞美麗的河景。"
  },
  {
    "word": "plain",
    "pos": "n.",
    "cn_def": "平原",
    "en_def": "a large area of flat land",
    "sentence": "A: Why did the energy company decide to build its new wind farm in the middle of the country instead of near the coast? B: There is a huge, flat {{BLANK}} there with very few trees or buildings, so the wind is strong all year and the construction costs will be much lower.",
    "cn": "A：為什麼能源公司決定把新風力發電場蓋在國家的中部，而不是靠近海岸？ B：那裡有一大片平坦的【平原】，幾乎沒有樹木或建築物，所以全年風力強勁，建造成本也會低很多。"
  },
  {
    "word": "valley",
    "pos": "n.",
    "cn_def": "山谷",
    "en_def": "low land between hills or mountains",
    "sentence": "A: Why does the train to the conference center slow down so much after it leaves the second station? B: The tracks go down into a narrow {{BLANK}} between two high mountains, and the river beside them sometimes floods, so drivers must travel carefully for about twenty minutes.",
    "cn": "A：為什麼開往會議中心的火車離開第二站後速度會慢這麼多？ B：鐵軌會下行進入兩座高山之間狹窄的【山谷】，旁邊的河有時會氾濫，所以司機必須小心行駛大約二十分鐘。"
  },
  {
    "word": "hill",
    "pos": "n.",
    "cn_def": "小山；丘陵",
    "en_def": "an area of land higher than the land around it, but lower than a mountain",
    "sentence": "A: Why do the delivery drivers complain so much about the route to our new branch office in the suburbs? B: The office sits at the top of a steep {{BLANK}}, and in winter the road becomes icy, so the trucks have trouble climbing up with heavy boxes.",
    "cn": "A：為什麼送貨司機對前往我們郊區新分公司的路線抱怨這麼多？ B：那間辦公室位在一座陡峭【小山】的頂端，冬天路面會結冰，所以卡車載著沉重的箱子很難爬上去。"
  },
  {
    "word": "mountain",
    "pos": "n.",
    "cn_def": "山",
    "en_def": "a very high hill",
    "sentence": "A: Why has the company decided to hold this year's team-building trip in the countryside instead of at a hotel downtown? B: The manager wants everyone to climb a famous {{BLANK}} together, because reaching the top as a group can build trust, and the fresh air will help people relax after a busy quarter.",
    "cn": "A：為什麼公司決定今年的團隊建立活動要辦在鄉下，而不是市中心的飯店？ B：經理希望大家一起攀登一座著名的【山】，因為團隊一起登頂可以建立信任，清新的空氣也能幫助大家在忙碌的一季後放鬆。"
  },
  {
    "word": "plateau",
    "pos": "n.",
    "cn_def": "高原",
    "en_def": "a large area of high, flat land",
    "sentence": "A: Why are the tea leaves from that supplier so much more expensive than the ones we usually buy for the café? B: They are grown on a high {{BLANK}} where the air is cool and the land is flat, so the leaves grow slowly and have a stronger flavor that customers love.",
    "cn": "A：為什麼那家供應商的茶葉比我們平常為咖啡廳採購的貴這麼多？ B：那些茶種植在海拔很高的【高原】上，那裡空氣涼爽、土地平坦，所以茶葉生長緩慢，帶有顧客喜愛的濃郁風味。"
  },
  {
    "word": "desert",
    "pos": "n.",
    "cn_def": "沙漠",
    "en_def": "a large, dry area with very little rain and few plants",
    "sentence": "A: Why does the solar power company want to build its new factory so far away from the city and the main highway? B: The site is in the middle of a dry {{BLANK}} where it almost never rains, so the sun shines nearly every day and the panels can produce a lot of electricity.",
    "cn": "A：為什麼太陽能公司想把新工廠蓋在離城市和主要公路那麼遠的地方？ B：那個地點位在乾燥的【沙漠】中央，幾乎從不下雨，所以幾乎每天都有陽光，太陽能板可以產生大量電力。"
  },
  {
    "word": "forest",
    "pos": "n.",
    "cn_def": "森林",
    "en_def": "a large area of land covered with trees",
    "sentence": "A: Why does the paper company plant thousands of young trees every spring, even though it costs a lot of money and time? B: The company cuts down part of the {{BLANK}} each year to make paper, so it plants new trees to protect the environment and keep wood available for the future.",
    "cn": "A：為什麼造紙公司每年春天都要種下數千棵樹苗，即使這要花很多錢和時間？ B：公司每年都會砍伐部分【森林】來造紙，所以種植新樹來保護環境，並確保未來仍有木材可用。"
  },
  {
    "word": "jungle",
    "pos": "n.",
    "cn_def": "叢林",
    "en_def": "a thick tropical forest",
    "sentence": "A: Why is the travel agency asking every guest to bring long pants, strong boots, and insect spray for next month's tour? B: Part of the trip goes through a thick tropical {{BLANK}}, where it is hot and wet, and there are many mosquitoes, so the guide wants everyone to stay safe and comfortable.",
    "cn": "A：為什麼旅行社要求每位旅客為下個月的行程帶長褲、堅固的靴子和防蚊液？ B：行程中有一段會穿過茂密的熱帶【叢林】，那裡又熱又潮濕，還有很多蚊子，所以導遊希望大家都安全又舒適。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸",
    "en_def": "the land next to the sea",
    "sentence": "A: Why are hotel prices so much higher in the towns we will visit on the second half of our sales trip? B: Those towns are right on the {{BLANK}}, so tourists come for the beaches and seafood every summer, and the hotels raise their prices when the weather is warm.",
    "cn": "A：為什麼我們業務出差後半段要去的那些城鎮，飯店價格高出這麼多？ B：那些城鎮就位在【海岸】邊，每年夏天觀光客都會為了海灘和海鮮而來，天氣溫暖時飯店就會調漲價格。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸邊；海濱",
    "en_def": "the land along the edge of a sea or lake",
    "sentence": "A: Where should we hold the company barbecue so that the children can play safely while the adults cook and chat? B: Let's book the picnic area on the {{BLANK}} of the lake, because the water there is shallow, there are lifeguards on duty, and there is plenty of shade under the trees.",
    "cn": "A：我們該在哪裡舉辦公司烤肉，讓小孩可以安全地玩，大人則可以烤肉聊天？ B：我們預訂湖【岸】邊的野餐區吧，因為那裡水淺、有救生員值勤，樹下也有很多陰涼處。"
  },
  {
    "word": "property",
    "pos": "n.",
    "cn_def": "房地產；財產",
    "en_def": "land or buildings that someone owns",
    "sentence": "A: Why did the bank ask for so many documents before agreeing to lend money to the small restaurant owner? B: She wanted to use her family's {{BLANK}} as security for the loan, so the bank needed to check who owned the land and how much the house was really worth.",
    "cn": "A：為什麼銀行在同意借錢給那位小餐館老闆前，要求那麼多文件？ B：她想用家族的【房地產】作為貸款擔保，所以銀行必須確認土地屬於誰，以及那棟房子實際上值多少錢。"
  },
  {
    "word": "estate",
    "pos": "n.",
    "cn_def": "莊園；地產",
    "en_def": "a large area of land in the countryside, usually with a big house, owned by one person or family",
    "sentence": "A: Why is the wine company holding its annual party outside the city this year instead of at a hotel ballroom? B: The owner bought a large {{BLANK}} with a big old house, gardens, and vineyards, so guests can taste the wine right where the grapes are grown.",
    "cn": "A：為什麼今年酒商要在城外舉辦年度派對，而不是在飯店宴會廳？ B：老闆買下一座大型【莊園】，有古老的大宅、花園和葡萄園，所以賓客可以在種植葡萄的地方直接品酒。"
  },
  {
    "word": "acre",
    "pos": "n.",
    "cn_def": "英畝",
    "en_def": "a unit for measuring land, about 4,047 square meters",
    "sentence": "A: How much is the farmer asking for the land next to our warehouse, which we might buy for extra parking? B: He is asking about twenty thousand dollars per {{BLANK}}, and since the whole piece is fairly large, the finance team needs to check our budget carefully before we make an offer.",
    "cn": "A：農夫要價多少賣我們倉庫旁的土地？我們可能會買來增加停車位。 B：他每【英畝】要價大約兩萬美元，因為整塊地相當大，財務團隊在我們出價前必須仔細檢查預算。"
  },
  {
    "word": "boundary",
    "pos": "n.",
    "cn_def": "邊界；界線",
    "en_def": "a line that marks the edge of an area of land",
    "sentence": "A: Why did the two neighbors call a land surveyor before the new fence between their houses was built? B: They disagreed about where the {{BLANK}} between their properties really was, so they wanted an expert to measure the land and put markers in the right places.",
    "cn": "A：為什麼兩位鄰居在他們房子之間的新圍籬蓋好之前要找土地測量員？ B：他們對兩家土地之間的【邊界】到底在哪裡意見不一，所以想請專家測量土地，並在正確的位置放上標記。"
  },
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "小塊土地",
    "en_def": "a small piece of land used for a special purpose",
    "sentence": "A: What is the company going to do with the empty piece of land behind the staff cafeteria? B: Management has decided to turn it into a small garden, and each department will get its own {{BLANK}} to grow vegetables and herbs that the cooks can use in staff lunches.",
    "cn": "A：公司要怎麼處理員工餐廳後面那塊空地？ B：管理階層決定把它改成一座小菜園，每個部門都會分到一【小塊地】來種蔬菜和香草，讓廚師用在員工午餐裡。"
  },
  {
    "word": "territory",
    "pos": "n.",
    "cn_def": "領土；轄區；區域",
    "en_def": "an area of land that a country, person, or group controls or is responsible for",
    "sentence": "A: Why does the new sales representative have to drive so many kilometers every week to meet her clients? B: Her {{BLANK}} covers the whole southern part of the country, including many small towns and farms, so she spends a lot of time on the road visiting customers.",
    "cn": "A：為什麼新的業務代表每週要開那麼多公里的車去見客戶？ B：她負責的【轄區】涵蓋國家整個南部，包括許多小鎮和農場，所以她花很多時間在路上拜訪客戶。"
  },
  {
    "word": "region",
    "pos": "n.",
    "cn_def": "地區",
    "en_def": "a large area of a country or the world",
    "sentence": "A: Why are our orange juice sales falling so quickly in the south while they are still growing in the north? B: A long dry period has hit the southern {{BLANK}}, so many farms there produced fewer oranges, and the shops had to raise prices, which made customers buy less.",
    "cn": "A：為什麼我們的柳橙汁在南部銷量下滑得這麼快，北部卻還在成長？ B：南部【地區】遭遇長期乾旱，許多農場產出的柳橙變少，商店只好漲價，讓顧客買得更少。"
  },
  {
    "word": "fertile",
    "pos": "adj.",
    "cn_def": "肥沃的",
    "en_def": "able to produce a lot of good crops",
    "sentence": "A: Why did the food company buy farms in that river area instead of in the dry hills near our main factory? B: The land near the river is very {{BLANK}}, so vegetables grow quickly and the harvest is large every year, which helps the company keep its costs down.",
    "cn": "A：為什麼食品公司要買那片河流地區的農場，而不是我們主要工廠附近乾燥的山丘？ B：河邊的土地非常【肥沃】，蔬菜長得快，每年收成都很好，這有助於公司壓低成本。"
  },
  {
    "word": "barren",
    "pos": "adj.",
    "cn_def": "貧瘠的；荒蕪的",
    "en_def": "too poor to produce plants or crops",
    "sentence": "A: Why did the farming company stop growing crops on the land it bought near the old factory ten years ago? B: The ground became completely {{BLANK}} after years of pollution, so nothing would grow there anymore, and the company decided to build solar panels on it instead.",
    "cn": "A：為什麼農業公司不再在十年前於舊工廠附近買下的土地上種植作物了？ B：經過多年污染後，那片土地變得完全【貧瘠】，什麼都長不出來，所以公司決定改在上面設置太陽能板。"
  },
  {
    "word": "rocky",
    "pos": "adj.",
    "cn_def": "多岩石的",
    "en_def": "covered with or made of rocks",
    "sentence": "A: Why did the construction team need an extra two weeks to finish the foundation for the new hotel by the sea? B: The ground was much more {{BLANK}} than they expected, so they had to bring special machines to break the hard stones before they could pour the concrete.",
    "cn": "A：為什麼施工團隊需要多兩週才能完成海邊新飯店的地基？ B：地面比他們預期的【多岩石】得多，所以他們必須運來特殊機器打碎堅硬的石頭，才能灌混凝土。"
  },
  {
    "word": "sandy",
    "pos": "adj.",
    "cn_def": "多沙的；沙質的",
    "en_def": "covered with sand",
    "sentence": "A: Why is that beach resort so popular with families who have small children, even though it is far from the airport? B: It has a long, soft, {{BLANK}} beach where kids can build castles safely, and the water is calm and shallow, so parents can relax while their children play.",
    "cn": "A：為什麼那間海灘度假村雖然離機場很遠，卻很受有小孩的家庭歡迎？ B：那裡有一片長長、柔軟的【沙質】海灘，孩子可以安全地堆城堡，海水平靜又淺，父母可以在孩子玩耍時放鬆。"
  },
  {
    "word": "grassy",
    "pos": "adj.",
    "cn_def": "長滿草的",
    "en_def": "covered with grass",
    "sentence": "A: Where will the outdoor concert for our customers take place if the city does not give us permission to use the stadium? B: We can use the large {{BLANK}} area behind the community center, because it is soft enough for people to sit on blankets, and there is enough room for a stage.",
    "cn": "A：如果市政府不允許我們使用體育場，為客戶舉辦的戶外音樂會要在哪裡舉行？ B：我們可以使用社區中心後面那片寬廣、【長滿草的】區域，因為那裡夠柔軟，讓大家可以坐在毯子上，也有足夠的空間搭舞台。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "耕種；栽培",
    "en_def": "to prepare land and grow crops on it",
    "sentence": "A: What will the farming cooperative do with the empty land it received from the city government last month? B: The members plan to {{BLANK}} the land with organic vegetables and fruit trees, and then sell the produce at local markets and to restaurants in the city center.",
    "cn": "A：農業合作社要怎麼處理上個月從市政府取得的空地？ B：成員們打算在那塊地上【耕種】有機蔬菜和果樹，然後把農產品賣到當地市場和市中心的餐廳。"
  },
  {
    "word": "irrigate",
    "pos": "v.",
    "cn_def": "灌溉",
    "en_def": "to supply water to land or crops through pipes or channels",
    "sentence": "A: Why did the farm owner spend so much money on new pipes and pumps this year, even though the harvest was smaller than usual? B: There has been very little rain lately, so he needs a better way to {{BLANK}} his fields, or the crops will dry up before next summer.",
    "cn": "A：為什麼農場主人今年花那麼多錢買新的管線和抽水機，即使收成比平常少？ B：最近幾乎沒下雨，所以他需要更好的方式來【灌溉】田地，否則作物在明年夏天前就會乾枯。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "開發",
    "en_def": "to build new houses, offices, or other buildings on land",
    "sentence": "A: Why has the price of land near the new train station gone up so quickly over the past six months? B: A large company plans to {{BLANK}} the area with apartments, shops, and offices, so many investors want to buy land there before the project begins.",
    "cn": "A：為什麼新火車站附近的地價在過去六個月漲得這麼快？ B：一家大公司計畫【開發】那個區域，興建公寓、商店和辦公室，所以許多投資人想在計畫開始前買下那裡的土地。"
  },
  {
    "word": "settle",
    "pos": "v.",
    "cn_def": "定居",
    "en_def": "to go to live in a new place and make it your home",
    "sentence": "A: Why did your grandparents choose to move to this quiet farming town after they left the big city many years ago? B: They wanted to {{BLANK}} somewhere with cheap land and clean air, so they bought a small farm here, built a house, and raised their children on it.",
    "cn": "A：為什麼你的祖父母多年前離開大城市後，選擇搬到這個安靜的農業小鎮？ B：他們想在一個土地便宜、空氣乾淨的地方【定居】，所以在這裡買了一座小農場，蓋了房子，並在那裡養大孩子。"
  },
  {
    "word": "naturally",
    "pos": "adv.",
    "cn_def": "自然地；天然地",
    "en_def": "in a way that is not made or caused by people",
    "sentence": "A: Why doesn't the hotel need to pay for air conditioning in the guest rooms during the summer months? B: It was built in a valley that stays {{BLANK}} cool because of the shade from the trees and the wind from the river, so the rooms are comfortable without machines.",
    "cn": "A：為什麼那間飯店夏天客房不需要付冷氣費？ B：它蓋在一個因為有樹蔭和河風而【自然地】保持涼爽的山谷裡，所以房間不用機器也很舒適。"
  },
  {
    "word": "widely",
    "pos": "adv.",
    "cn_def": "廣泛地",
    "en_def": "in many places or by many people",
    "sentence": "A: Why is our company's new coffee brand selling so well in supermarkets across the whole country this year? B: The coffee is now {{BLANK}} available in many kinds of stores, from big city supermarkets to small village shops, and our advertising has also made the brand familiar to young customers.",
    "cn": "A：為什麼我們公司的新咖啡品牌今年在全國超市都賣得這麼好？ B：這款咖啡現在【廣泛地】在各種商店都買得到，從大城市超市到小村莊商店都有，而且我們的廣告也讓年輕顧客熟悉這個品牌。"
  }
];

const MCQS = [
  {
    "q": "The farmer tested the _____ before planting the new crop. It contained too much salt for tomatoes to grow well.",
    "options": [
      "soil",
      "acre",
      "boundary",
      "shore"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Several boxes fell off the truck and landed on the _____. Luckily, none of the glass bottles inside were broken.",
    "options": [
      "region",
      "territory",
      "ground",
      "boundary"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new four-wheel-drive vans can handle rough _____ easily. Our drivers now reach the mountain villages without any problems.",
    "options": [
      "boundary",
      "terrain",
      "acre",
      "estate"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Guests at the mountain hotel love the view from their balconies. Many take photos of the peaceful _____ every morning.",
    "options": [
      "boundary",
      "acre",
      "soil",
      "landscape"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The farmer let the company use his empty _____ for the summer festival. More than three hundred staff and their families attended.",
    "options": [
      "acre",
      "coast",
      "field",
      "boundary"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The city plans to turn three hundred hectares of _____ into a business park. Local farmers strongly oppose the project.",
    "options": [
      "farmland",
      "shore",
      "boundary",
      "hill"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The train runs through a deep _____ between two tall mountains. Passengers often enjoy the view of the river below.",
    "options": [
      "plateau",
      "desert",
      "coast",
      "valley"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our new office stands at the top of a small _____ outside town. Staff can see the whole city from the meeting room.",
    "options": [
      "valley",
      "hill",
      "shore",
      "field"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The team climbed the highest _____ in the national park last weekend. It took them six hours to reach the top.",
    "options": [
      "mountain",
      "valley",
      "shore",
      "field"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Very little rain falls in the _____, so the solar company built its plant there. The panels receive strong sunshine all year.",
    "options": [
      "forest",
      "jungle",
      "desert",
      "valley"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The paper company plants ten thousand trees every year. This helps the _____ grow back after old trees are cut down.",
    "options": [
      "desert",
      "forest",
      "shore",
      "boundary"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Our tour group walked through the hot, wet _____ for three hours. The guide pointed out monkeys and colorful birds in the trees.",
    "options": [
      "desert",
      "shore",
      "plateau",
      "jungle"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The hotel chain is opening a new resort on the east _____. Every room will have a view of the ocean.",
    "options": [
      "valley",
      "desert",
      "coast",
      "plateau"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The ferry finally reached the _____ after a two-hour trip across the lake. Passengers quickly carried their bags off the boat.",
    "options": [
      "shore",
      "hill",
      "desert",
      "plateau"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The bank asked for documents showing who owns the _____. The house and land will be used as security for the loan.",
    "options": [
      "terrain",
      "landscape",
      "region",
      "property"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The wealthy family owns a large country _____ with gardens, a lake, and a vineyard. They sometimes rent it out for weddings.",
    "options": [
      "terrain",
      "estate",
      "soil",
      "boundary"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The farmer sold one _____ of his land to the city for a new park. It is roughly the size of a soccer field.",
    "options": [
      "acre",
      "boundary",
      "region",
      "terrain"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The new fence marks the _____ between the factory and the farm next door. Workers must not cross it without permission.",
    "options": [
      "landscape",
      "terrain",
      "boundary",
      "soil"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Each employee received a small _____ of land in the company garden. Many staff grow herbs and tomatoes there during lunch breaks.",
    "options": [
      "coast",
      "plot",
      "valley",
      "boundary"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Sales of winter jackets increased in the northern _____ last month. Temperatures there dropped much earlier than usual.",
    "options": [
      "plot",
      "acre",
      "soil",
      "region"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Vegetables grow quickly in the _____ soil near the river. Farmers there usually harvest two crops every year.",
    "options": [
      "barren",
      "rocky",
      "fertile",
      "grassy"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Years of pollution left the land completely _____. Nothing has grown there since the old chemical plant closed.",
    "options": [
      "barren",
      "fertile",
      "grassy",
      "green"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The ground was too _____ for normal machines to dig. The builders had to break the hard stones first.",
    "options": [
      "fertile",
      "grassy",
      "sandy",
      "rocky"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Customers can relax on the _____ hill behind the café. It is a perfect place for a picnic in spring.",
    "options": [
      "barren",
      "grassy",
      "rocky",
      "sandy"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The cooperative plans to _____ rice and beans on the land next year. The harvest will be sold to local restaurants.",
    "options": [
      "cultivate",
      "settle",
      "explore",
      "fence"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Because of the dry summer, farmers had to _____ their fields every morning. The new water pipes made the job much easier.",
    "options": [
      "settle",
      "develop",
      "irrigate",
      "explore"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "A construction company wants to _____ the empty land near the station. It will build apartments, shops, and offices there.",
    "options": [
      "irrigate",
      "develop",
      "cultivate",
      "settle"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Many young families decided to _____ in the small town after the new factory opened. Jobs and cheap housing attracted them.",
    "options": [
      "irrigate",
      "cultivate",
      "develop",
      "settle"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The hotel stays _____ cool in summer because of the shade from tall trees. It does not need much air conditioning.",
    "options": [
      "widely",
      "loudly",
      "naturally",
      "heavily"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The new organic rice is now _____ available in supermarkets across the country. Customers can find it almost everywhere.",
    "options": [
      "widely",
      "naturally",
      "loudly",
      "heavily"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "soil": {
    "pos": "n.",
    "en_def": "the top layer of earth in which plants grow",
    "cn_def": "土壤"
  },
  "ground": {
    "pos": "n.",
    "en_def": "the surface of the earth",
    "cn_def": "地面"
  },
  "terrain": {
    "pos": "n.",
    "en_def": "an area of land and its physical features, such as hills or rocks",
    "cn_def": "地形；地勢"
  },
  "landscape": {
    "pos": "n.",
    "en_def": "everything you can see when you look across an area of land",
    "cn_def": "風景；景觀"
  },
  "field": {
    "pos": "n.",
    "en_def": "an area of open land used for growing crops or keeping animals",
    "cn_def": "田地；原野"
  },
  "farmland": {
    "pos": "n.",
    "en_def": "land used for growing crops or keeping animals",
    "cn_def": "農地"
  },
  "meadow": {
    "pos": "n.",
    "en_def": "a field of grass and wild flowers",
    "cn_def": "草地；牧草地"
  },
  "plain": {
    "pos": "n.",
    "en_def": "a large area of flat land",
    "cn_def": "平原"
  },
  "valley": {
    "pos": "n.",
    "en_def": "low land between hills or mountains",
    "cn_def": "山谷"
  },
  "hill": {
    "pos": "n.",
    "en_def": "an area of land higher than the land around it, but lower than a mountain",
    "cn_def": "小山；丘陵"
  },
  "mountain": {
    "pos": "n.",
    "en_def": "a very high hill",
    "cn_def": "山"
  },
  "plateau": {
    "pos": "n.",
    "en_def": "a large area of high, flat land",
    "cn_def": "高原"
  },
  "desert": {
    "pos": "n.",
    "en_def": "a large, dry area with very little rain and few plants",
    "cn_def": "沙漠"
  },
  "forest": {
    "pos": "n.",
    "en_def": "a large area of land covered with trees",
    "cn_def": "森林"
  },
  "jungle": {
    "pos": "n.",
    "en_def": "a thick tropical forest",
    "cn_def": "叢林"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of a sea or lake",
    "cn_def": "岸邊；海濱"
  },
  "property": {
    "pos": "n.",
    "en_def": "land or buildings that someone owns",
    "cn_def": "房地產；財產"
  },
  "estate": {
    "pos": "n.",
    "en_def": "a large area of land in the countryside, usually with a big house, owned by one person or family",
    "cn_def": "莊園；地產"
  },
  "acre": {
    "pos": "n.",
    "en_def": "a unit for measuring land, about 4,047 square meters",
    "cn_def": "英畝"
  },
  "boundary": {
    "pos": "n.",
    "en_def": "a line that marks the edge of an area of land",
    "cn_def": "邊界；界線"
  },
  "plot": {
    "pos": "n.",
    "en_def": "a small piece of land used for a special purpose",
    "cn_def": "小塊土地"
  },
  "territory": {
    "pos": "n.",
    "en_def": "an area of land that a country, person, or group controls or is responsible for",
    "cn_def": "領土；轄區；區域"
  },
  "region": {
    "pos": "n.",
    "en_def": "a large area of a country or the world",
    "cn_def": "地區"
  },
  "fertile": {
    "pos": "adj.",
    "en_def": "able to produce a lot of good crops",
    "cn_def": "肥沃的"
  },
  "barren": {
    "pos": "adj.",
    "en_def": "too poor to produce plants or crops",
    "cn_def": "貧瘠的；荒蕪的"
  },
  "rocky": {
    "pos": "adj.",
    "en_def": "covered with or made of rocks",
    "cn_def": "多岩石的"
  },
  "sandy": {
    "pos": "adj.",
    "en_def": "covered with sand",
    "cn_def": "多沙的；沙質的"
  },
  "grassy": {
    "pos": "adj.",
    "en_def": "covered with grass",
    "cn_def": "長滿草的"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to prepare land and grow crops on it",
    "cn_def": "耕種；栽培"
  },
  "irrigate": {
    "pos": "v.",
    "en_def": "to supply water to land or crops through pipes or channels",
    "cn_def": "灌溉"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to build new houses, offices, or other buildings on land",
    "cn_def": "開發"
  },
  "settle": {
    "pos": "v.",
    "en_def": "to go to live in a new place and make it your home",
    "cn_def": "定居"
  },
  "naturally": {
    "pos": "adv.",
    "en_def": "in a way that is not made or caused by people",
    "cn_def": "自然地；天然地"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "in many places or by many people",
    "cn_def": "廣泛地"
  }
};

const EXTRA_GLOSSES = {};
