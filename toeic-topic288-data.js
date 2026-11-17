// Topic 288 Quiz Data: Planting 種植
// Source word list: https://www.examword.com/group-topic/planting — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T288 - Planting 種植",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "seed",
    "pos": "n.",
    "cn_def": "種子",
    "en_def": "a small part of a plant from which a new plant grows",
    "sentence": "A: Our company is giving gifts to customers at the spring trade fair, so what do you think we should hand out at the booth this year? B: Let's give each visitor a small packet with one sunflower {{BLANK}} inside, because people love growing something at home and it will remind them of our green brand.",
    "cn": "A：我們公司今年要在春季商展上送禮物給客戶，你覺得我們在攤位上應該發什麼？ B：我們送每位訪客一小包裝有一顆向日葵【種子】的小袋子吧，因為大家都喜歡在家種東西，而且這會讓他們想起我們的環保品牌。"
  },
  {
    "word": "soil",
    "pos": "n.",
    "cn_def": "土壤",
    "en_def": "the top layer of earth in which plants grow",
    "sentence": "A: The tomato plants on the office rooftop look weak and yellow, even though the cleaning staff water them every morning before work starts, so what is wrong? B: The gardener tested the {{BLANK}} last week and found that it doesn't have enough nutrients, so she is going to add fresh compost this Friday afternoon.",
    "cn": "A：辦公室頂樓的番茄植株看起來又弱又黃，即使清潔人員每天早上上班前都會澆水，到底出了什麼問題？ B：園丁上週檢測了【土壤】，發現養分不足，所以她打算這週五下午加入新的堆肥。"
  },
  {
    "word": "root",
    "pos": "n.",
    "cn_def": "根",
    "en_def": "the part of a plant that grows under the ground and takes in water",
    "sentence": "A: Why did the landscaping company say it would take three extra days to move the old tree from the front of our hotel to the new parking area? B: The tree has a very deep {{BLANK}} system under the sidewalk, so the workers must dig carefully to avoid damaging the pipes and the tree itself.",
    "cn": "A：為什麼景觀公司說要把飯店前面那棵老樹移到新停車區需要多花三天？ B：那棵樹在人行道下有很深的【根】系，所以工人必須小心挖掘，避免損壞水管和樹本身。"
  },
  {
    "word": "stem",
    "pos": "n.",
    "cn_def": "莖；梗",
    "en_def": "the main long thin part of a plant that holds the leaves and flowers",
    "sentence": "A: The flowers we ordered for the reception desk arrived this morning, but several of them are already bending over, so should I call the florist and complain? B: Yes, please call her, because each {{BLANK}} should be strong enough to hold the flower up, and we paid extra for fresh roses for the visitors from Tokyo.",
    "cn": "A：我們為接待櫃檯訂的花今天早上送到了，但有好幾朵已經彎下來了，我該打電話向花店抱怨嗎？ B：是的，請打給她，因為每根【莖】都應該夠強壯能撐起花朵，而且我們為了東京來的訪客多付錢買了新鮮玫瑰。"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "cn_def": "葉子",
    "en_def": "one of the flat green parts that grow from a plant's stem",
    "sentence": "A: How can the new staff tell whether the plants in the lobby need more water while the building manager is away on her business trip next week? B: She said they should check each large {{BLANK}} on the plants every morning, and if it looks dry, brown, or curled at the edges, they should water the pot right away.",
    "cn": "A：大樓經理下週出差期間，新員工要怎麼判斷大廳的植物需不需要更多水？ B：她說他們每天早上應該檢查植物上的每片大【葉子】，如果看起來乾燥、變褐色或邊緣捲曲，就應該立刻替盆栽澆水。"
  },
  {
    "word": "garden",
    "pos": "n.",
    "cn_def": "花園；菜園",
    "en_def": "a piece of land where people grow flowers, vegetables, or plants",
    "sentence": "A: Our employees have been feeling stressed lately because of the long hours, so do you have any ideas for a simple activity that could help them relax at lunch? B: We could create a small vegetable {{BLANK}} on the empty land behind the cafeteria, where staff can plant herbs and lettuce together during their breaks.",
    "cn": "A：最近因為工時很長，我們的員工一直覺得壓力很大，你有什麼簡單的活動點子可以幫他們在午餐時放鬆嗎？ B：我們可以在員工餐廳後面的空地上建一座小型蔬菜【菜園】，員工可以在休息時間一起種香草和萵苣。"
  },
  {
    "word": "farmer",
    "pos": "n.",
    "cn_def": "農夫；農民",
    "en_def": "a person who owns or manages a farm",
    "sentence": "A: Where does the restaurant get the fresh vegetables for its new salad menu, and why are the prices a little higher than at the other places downtown? B: The chef buys directly from a local {{BLANK}} who grows everything without chemicals, so the quality is excellent, but the cost of each delivery is higher.",
    "cn": "A：餐廳新沙拉菜單的新鮮蔬菜是從哪裡來的？為什麼價格比市中心其他地方高一點？ B：主廚直接向一位不使用化學藥劑種植所有作物的當地【農夫】購買，所以品質很好，但每次送貨的成本比較高。"
  },
  {
    "word": "crop",
    "pos": "n.",
    "cn_def": "農作物",
    "en_def": "a plant such as grain, fruit, or vegetables grown in large amounts",
    "sentence": "A: Why are the prices of rice and vegetables at the supermarket so high this month, and will they come down before the holiday season starts? B: Heavy rain damaged almost every {{BLANK}} in the southern region in October, so farmers have less to sell, but experts expect prices to drop by December.",
    "cn": "A：為什麼這個月超市的米和蔬菜價格這麼高？假期開始前會降下來嗎？ B：十月的大雨幾乎毀壞了南部地區的每一種【農作物】，所以農民能賣的比較少，但專家預期價格到十二月會下跌。"
  },
  {
    "word": "harvest",
    "pos": "n.",
    "cn_def": "收成；收穫",
    "en_def": "the time or act of gathering crops from the fields",
    "sentence": "A: Why did the juice company decide to delay the launch of its new mango drink until next summer instead of selling it this autumn as planned? B: The mango {{BLANK}} was much smaller than expected because of the dry weather, so the factory could not get enough fresh fruit to produce the drinks.",
    "cn": "A：為什麼果汁公司決定把新的芒果飲料延到明年夏天才上市，而不是按計畫在今年秋天販售？ B：因為天氣乾燥，芒果的【收成】比預期少很多，所以工廠拿不到足夠的新鮮水果來生產飲料。"
  },
  {
    "word": "water",
    "pos": "v.",
    "cn_def": "澆水",
    "en_def": "to pour water on plants to help them grow",
    "sentence": "A: I'll be away at the conference in Singapore for two weeks, so could you please help me take care of the small plants on my desk while I'm gone? B: Of course, I'll {{BLANK}} them every Monday and Thursday morning, and I'll also move them closer to the window so they get enough light.",
    "cn": "A：我要去新加坡開會兩週，我不在的時候可以請你幫我照顧桌上的小植物嗎？ B：當然，我每週一和週四早上會幫它們【澆水】，也會把它們移近窗邊，讓它們有足夠的光線。"
  },
  {
    "word": "fertilizer",
    "pos": "n.",
    "cn_def": "肥料",
    "en_def": "a natural or chemical substance added to soil to help plants grow",
    "sentence": "A: The garden supply store has been very busy this spring, so which product should we order more of before the weekend sale begins on Saturday morning? B: We should order more {{BLANK}}, because many customers want to help their vegetables grow faster, and the last shipment sold out in only three days.",
    "cn": "A：園藝用品店今年春天一直很忙，在週六早上週末特賣開始前，我們應該多訂哪項產品？ B：我們應該多訂一些【肥料】，因為很多顧客想讓他們的蔬菜長得更快，而上一批貨只三天就賣完了。"
  },
  {
    "word": "compost",
    "pos": "n.",
    "cn_def": "堆肥",
    "en_def": "a mixture of dead plants and food waste used to make soil richer",
    "sentence": "A: Our office throws away a lot of fruit peels and coffee grounds every day, so is there a way we can reduce this waste and help the environment? B: We could put a special bin in the kitchen and turn the food scraps into {{BLANK}}, which the gardeners can then use to feed the plants around the building.",
    "cn": "A：我們辦公室每天丟掉很多果皮和咖啡渣，有沒有辦法可以減少這些廢棄物並幫助環境？ B：我們可以在茶水間放一個特別的桶子，把廚餘變成【堆肥】，園丁就能用它來滋養大樓周圍的植物。"
  },
  {
    "word": "shovel",
    "pos": "n.",
    "cn_def": "鏟子",
    "en_def": "a tool with a long handle and a wide blade used for digging",
    "sentence": "A: The volunteers are arriving at nine tomorrow morning to plant trees in the city park, so what equipment do we still need to bring from the storage room? B: Each person will need a {{BLANK}} to dig the holes, plus gloves and water bottles, because the ground is hard and the weather will be hot.",
    "cn": "A：志工明天早上九點會到市立公園種樹，我們還需要從儲藏室帶什麼工具？ B：每個人都需要一把【鏟子】來挖洞，再加上手套和水瓶，因為地面很硬而且天氣會很熱。"
  },
  {
    "word": "hoe",
    "pos": "n.",
    "cn_def": "鋤頭",
    "en_def": "a garden tool with a long handle and a flat blade used to remove weeds and break up soil",
    "sentence": "A: The hardware store manager asked me what tools to put on display for our gardening event next month, so what do you think customers will buy most? B: I think a light {{BLANK}} with a strong wooden handle will sell well, since many home gardeners need one to break up the soil and remove unwanted plants.",
    "cn": "A：五金行經理問我下個月園藝活動要展示哪些工具，你覺得顧客最常買什麼？ B：我認為一把有堅固木柄的輕便【鋤頭】會賣得很好，因為很多家庭園藝愛好者需要用它來鬆土和清除雜草。"
  },
  {
    "word": "weed",
    "pos": "n.",
    "cn_def": "雜草",
    "en_def": "a wild plant that grows where it is not wanted",
    "sentence": "A: Why does the lawn in front of the company headquarters look so messy this month, even though we pay a gardening service to look after it? B: Every {{BLANK}} grows quickly in this warm, rainy weather, and the gardening team has been short of staff, so they haven't been able to come as often as usual.",
    "cn": "A：為什麼公司總部前的草坪這個月看起來這麼凌亂？我們明明有付錢請園藝公司照顧它。 B：在這種溫暖多雨的天氣裡，每株【雜草】都長得很快，而且園藝團隊一直人手不足，所以他們沒辦法像平常那樣常來。"
  },
  {
    "word": "dig",
    "pos": "v.",
    "cn_def": "挖；挖掘",
    "en_def": "to make a hole in the ground by moving soil",
    "sentence": "A: The new apple trees for the hotel garden will be delivered on Wednesday afternoon, so what should the maintenance team do before the truck arrives? B: They need to {{BLANK}} twelve deep holes along the fence in the morning, so the trees can go straight into the ground as soon as they are unloaded.",
    "cn": "A：飯店花園的新蘋果樹週三下午會送到，卡車抵達前維修團隊應該做什麼？ B：他們需要在早上沿著圍籬【挖】十二個深洞，這樣樹一卸下來就能直接種進土裡。"
  },
  {
    "word": "sow",
    "pos": "v.",
    "cn_def": "播種",
    "en_def": "to put seeds in the ground so that they will grow",
    "sentence": "A: When is the best time for the farm workers to plant the carrot seeds this year, since the weather has been so unusual lately? B: The manager says we should {{BLANK}} them in early March, after the last cold nights, so the young plants won't be damaged by frost.",
    "cn": "A：最近天氣這麼反常，今年農場工人什麼時候種胡蘿蔔種子最好？ B：經理說我們應該在三月初最後幾個寒冷的夜晚過後【播種】，這樣幼苗就不會被霜凍傷。"
  },
  {
    "word": "transplant",
    "pos": "v.",
    "cn_def": "移植",
    "en_def": "to move a growing plant from one place and plant it in another",
    "sentence": "A: The little pepper plants in the small plastic cups on the office windowsill are getting quite tall, so what should we do with them now? B: We should {{BLANK}} them into bigger pots this weekend, because their roots need more space, and then we can put them on the sunny balcony.",
    "cn": "A：辦公室窗台上小塑膠杯裡的辣椒苗長得滿高了，我們現在該怎麼處理它們？ B：我們應該這個週末把它們【移植】到更大的盆子裡，因為它們的根需要更多空間，然後就可以把它們放到陽光充足的陽台上。"
  },
  {
    "word": "seedling",
    "pos": "n.",
    "cn_def": "幼苗；秧苗",
    "en_def": "a very young plant that has grown from a seed",
    "sentence": "A: The school asked our company to donate something useful for its Earth Day event next month, so what do you suggest we give the students? B: We could give every student a tiny tomato {{BLANK}} in a paper pot, so they can take it home, plant it, and watch it grow during the summer.",
    "cn": "A：學校請我們公司為下個月的地球日活動捐一些實用的東西，你建議我們送學生什麼？ B：我們可以送每位學生一株裝在紙盆裡的小番茄【幼苗】，讓他們帶回家種，並在夏天看著它長大。"
  },
  {
    "word": "sprout",
    "pos": "v.",
    "cn_def": "發芽",
    "en_def": "to start to grow and produce new leaves or shoots",
    "sentence": "A: How long will it take for the bean seeds in the science display at our garden center to start growing, since customers keep asking about it? B: In this warm room with plenty of light, they should {{BLANK}} in about five days, so we can show the children the first green shoots next week.",
    "cn": "A：顧客一直在問，我們園藝中心科學展示區的豆子種子要多久才會開始生長？ B：在這個溫暖又光線充足的房間裡，它們應該大約五天就會【發芽】，所以下週我們就能給孩子們看第一批綠芽。"
  },
  {
    "word": "nursery",
    "pos": "n.",
    "cn_def": "苗圃",
    "en_def": "a place where young plants and trees are grown for sale",
    "sentence": "A: Where did the office manager buy all the beautiful trees and flowering bushes for the new courtyard, and were they very expensive? B: She bought them from a large {{BLANK}} outside the city that sells young plants at wholesale prices, so we saved almost forty percent on the total cost.",
    "cn": "A：辦公室經理在哪裡買到新中庭裡那些漂亮的樹和開花灌木的？很貴嗎？ B：她是在城外一間以批發價販售幼株的大型【苗圃】買的，所以我們總共省了將近四成的費用。"
  },
  {
    "word": "orchard",
    "pos": "n.",
    "cn_def": "果園",
    "en_def": "a piece of land where fruit trees are grown",
    "sentence": "A: The marketing team wants to hold the staff outing somewhere outdoors in October, so do you know a good place where everyone can enjoy fresh air together? B: There's an apple {{BLANK}} about an hour from the office where visitors can pick fruit, take a tour, and have lunch, so I think everyone would enjoy it.",
    "cn": "A：行銷團隊想在十月找個戶外地點舉辦員工旅遊，你知道有什麼好地方能讓大家一起享受新鮮空氣嗎？ B：離辦公室大約一小時車程有一座蘋果【果園】，遊客可以採果、參觀導覽並享用午餐，所以我想大家會很喜歡。"
  },
  {
    "word": "greenhouse",
    "pos": "n.",
    "cn_def": "溫室",
    "en_def": "a building with glass walls and roof used for growing plants",
    "sentence": "A: How does the farm manage to sell fresh strawberries to supermarkets even in the middle of winter, when the weather outside is so cold? B: They grow them inside a large heated {{BLANK}}, where the temperature and light are controlled all year, so the fruit ripens no matter what the season is.",
    "cn": "A：農場怎麼能在外面天氣這麼冷的隆冬時節，仍然賣新鮮草莓給超市？ B：他們在一座有暖氣的大型【溫室】裡種植，那裡全年控制溫度和光線，所以不論什麼季節果實都能成熟。"
  },
  {
    "word": "irrigation",
    "pos": "n.",
    "cn_def": "灌溉",
    "en_def": "the supply of water to land or crops through pipes or channels",
    "sentence": "A: Why did the farm company ask the bank for a large loan this year, when its sales have been growing steadily for three years? B: It wants to install a new {{BLANK}} system that delivers water directly to the plants' roots, which will save money and protect the crops during dry summers.",
    "cn": "A：這家農業公司的銷售額三年來穩定成長，為什麼今年還要向銀行申請一大筆貸款？ B：它想安裝一套新的【灌溉】系統，把水直接送到植物的根部，這樣能省錢，也能在乾旱的夏天保護農作物。"
  },
  {
    "word": "mulch",
    "pos": "n.",
    "cn_def": "覆蓋物；護根物",
    "en_def": "a layer of material such as dead leaves or wood chips spread on soil to keep it moist",
    "sentence": "A: The flower beds around the hotel entrance dry out so quickly in the hot afternoons, so what can the gardeners do to keep them healthy? B: They can spread a thick layer of {{BLANK}} made from wood chips over the soil, which keeps the moisture in and also stops weeds from growing.",
    "cn": "A：飯店入口周圍的花圃在炎熱的下午乾得很快，園丁可以怎麼做讓它們保持健康？ B：他們可以在土壤上鋪一層厚厚的木屑【覆蓋物】，這樣可以保住水分，也能防止雜草生長。"
  },
  {
    "word": "prune",
    "pos": "v.",
    "cn_def": "修剪",
    "en_def": "to cut off some branches of a tree or bush to help it grow better",
    "sentence": "A: The bushes along the company parking lot are so tall that drivers can't see people walking near the exit, so what should we do about it? B: I'll ask the gardening service to {{BLANK}} them back to about one meter next week, which will make the area safer and also help the plants grow thicker.",
    "cn": "A：公司停車場旁的灌木長得太高，駕駛看不到出口附近行走的人，我們該怎麼處理？ B：我會請園藝公司下週把它們【修剪】到大約一公尺高，這樣能讓那一區更安全，也能幫助植物長得更茂密。"
  },
  {
    "word": "bloom",
    "pos": "v.",
    "cn_def": "開花",
    "en_def": "to produce flowers",
    "sentence": "A: We're planning the grand opening of our new café in the botanical garden, so when would be the best time to invite customers and reporters? B: Let's hold it in early April, when the cherry trees along the path {{BLANK}}, because the pink flowers will look wonderful in the photos and news stories.",
    "cn": "A：我們正在籌備植物園內新咖啡館的盛大開幕，什麼時候邀請顧客和記者最好？ B：我們在四月初舉辦吧，那時步道旁的櫻花樹會【開花】，粉紅色的花朵在照片和新聞報導中會很好看。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "耕種；栽培",
    "en_def": "to prepare land and grow crops on it",
    "sentence": "A: What is the agricultural company planning to do with the large piece of land it bought near the river last year, since nothing has been built there yet? B: It plans to {{BLANK}} rice and vegetables there using modern methods, and it will hire about fifty local workers when the project starts next spring.",
    "cn": "A：那家農業公司去年在河邊買的那一大塊地打算做什麼？那裡到現在什麼都還沒蓋。 B：它打算用現代化的方法在那裡【栽種】稻米和蔬菜，並在明年春天計畫開始時雇用大約五十名當地員工。"
  },
  {
    "word": "organic",
    "pos": "adj.",
    "cn_def": "有機的",
    "en_def": "grown without using artificial chemicals",
    "sentence": "A: Why are so many customers asking for the more expensive vegetables at our grocery store lately, even though the cheaper ones look almost the same? B: People want {{BLANK}} food that is grown without chemical sprays, because they believe it is healthier for their families and better for the environment.",
    "cn": "A：為什麼最近有那麼多顧客在我們的雜貨店裡指名要比較貴的蔬菜，即使便宜的看起來幾乎一樣？ B：大家想要不噴灑化學藥劑種植的【有機】食物，因為他們相信這對家人比較健康，對環境也比較好。"
  },
  {
    "word": "moist",
    "pos": "adj.",
    "cn_def": "濕潤的",
    "en_def": "slightly wet",
    "sentence": "A: The orchids we bought for the hotel lobby are expensive and quite delicate, so how should the front desk staff take care of them every day? B: They should keep the soil slightly {{BLANK}} but never too wet, and they should keep the plants away from the air conditioner and strong afternoon sunlight.",
    "cn": "A：我們為飯店大廳買的蘭花很貴又很嬌貴，櫃檯人員每天應該怎麼照顧它們？ B：他們應該讓土壤保持微微【濕潤】但不能太濕，並且讓植物遠離冷氣和強烈的午後陽光。"
  },
  {
    "word": "sunlight",
    "pos": "n.",
    "cn_def": "陽光",
    "en_def": "the light that comes from the sun",
    "sentence": "A: Why are the herbs in the restaurant kitchen growing so slowly, even though the chef waters them carefully and adds fertilizer once a month? B: The kitchen window faces north, so the plants don't get enough {{BLANK}} during the day, and I think we should move them to the bright terrace outside.",
    "cn": "A：為什麼餐廳廚房裡的香草長得這麼慢？主廚明明細心澆水，每個月還會施一次肥。 B：廚房的窗戶朝北，所以植物白天曬不到足夠的【陽光】，我認為我們應該把它們移到外面明亮的露台上。"
  },
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the usual weather conditions in a particular area",
    "sentence": "A: Our company wants to start growing coffee beans for our own cafés, so which region of the country did the research team recommend for the new farm? B: They recommended the central mountains, because the cool, wet {{BLANK}} there is perfect for coffee plants, and the land is cheaper than near the coast.",
    "cn": "A：我們公司想自己種咖啡豆供應自家咖啡館，研究團隊建議在國內哪個地區設立新農場？ B：他們建議中部山區，因為那裡涼爽潮濕的【氣候】非常適合咖啡樹，而且土地比沿海便宜。"
  },
  {
    "word": "seasonal",
    "pos": "adj.",
    "cn_def": "季節性的；當季的",
    "en_def": "available or happening only at a certain time of the year",
    "sentence": "A: Why does the restaurant change its menu four times a year, since printing new menus costs money and the staff must learn new dishes each time? B: The chef only uses {{BLANK}} vegetables from local farms, because they are fresher and cheaper when they are harvested at the right time of year.",
    "cn": "A：餐廳為什麼一年換四次菜單？印新菜單要花錢，員工每次也都得學新菜色。 B：主廚只用當地農場的【當季】蔬菜，因為在一年中適當的時節採收時，它們比較新鮮也比較便宜。"
  },
  {
    "word": "yield",
    "pos": "n.",
    "cn_def": "產量",
    "en_def": "the amount of crops produced from an area of land",
    "sentence": "A: The farmers in our program started using the new seeds and better irrigation last year, so have the results been worth the extra investment so far? B: Yes, the rice {{BLANK}} per hectare increased by almost thirty percent, so most farmers earned more money and plan to continue with the program next year.",
    "cn": "A：我們計畫裡的農民去年開始使用新種子和更好的灌溉方式，到目前為止結果值得額外的投資嗎？ B：值得，每公頃的稻米【產量】增加了將近三成，所以大部分農民賺了更多錢，並打算明年繼續參加這個計畫。"
  }
];

const MCQS = [
  {
    "q": "The gardener placed one _____ in each small pot on the windowsill. Within two weeks, tiny green plants appeared in every pot.",
    "options": [
      "seed",
      "root",
      "shovel",
      "climate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Before planting the vegetables, the team mixed compost into the dry _____ along the fence. This made the ground richer and easier to dig.",
    "options": [
      "sunlight",
      "harvest",
      "soil",
      "nursery"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The old tree fell during the storm because its main _____ had been damaged by construction work. Engineers now check the ground before building near trees.",
    "options": [
      "leaf",
      "root",
      "crop",
      "orchard"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Each _____ on the office plant turned yellow after the air conditioner was moved beside it. The manager moved the pot to a warmer corner.",
    "options": [
      "root",
      "seed",
      "yield",
      "leaf"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The hotel opened a rooftop _____ where guests can relax among flowers and herbs. The chef also picks fresh basil there for the restaurant.",
    "options": [
      "garden",
      "climate",
      "irrigation",
      "fertilizer"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The supermarket signed a contract with a local _____ who grows strawberries without chemicals. Customers can now buy the fruit one day after picking.",
    "options": [
      "orchard",
      "harvest",
      "farmer",
      "greenhouse"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Corn is the most important _____ in this region, and most families depend on it for their income. A poor season can hurt the local economy.",
    "options": [
      "soil",
      "crop",
      "nursery",
      "shovel"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Thanks to the warm, sunny summer, this year's grape _____ was the largest in ten years. The winery will hire extra workers to process the fruit.",
    "options": [
      "shovel",
      "compost",
      "climate",
      "harvest"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Please remember to _____ the plants in the lobby every Monday morning. If the soil becomes too dry, the leaves will start to fall.",
    "options": [
      "water",
      "dig",
      "prune",
      "sow"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The farm reduced its use of chemical _____ last year to protect the river nearby. Instead, the workers now add natural compost to the fields.",
    "options": [
      "sunlight",
      "orchard",
      "fertilizer",
      "climate"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The cafeteria collects fruit peels and vegetable scraps to make _____ for the company garden. This program has cut the building's food waste by half.",
    "options": [
      "irrigation",
      "compost",
      "harvest",
      "climate"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Each volunteer will receive gloves and a _____ to dig holes for the new trees. Please return all tools to the storage room after the event.",
    "options": [
      "seed",
      "crop",
      "climate",
      "shovel"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The gardening team pulled out every _____ from the flower beds before the opening ceremony. The entrance now looks neat and well cared for.",
    "options": [
      "weed",
      "harvest",
      "climate",
      "yield"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The workers will _____ a deep hole near the gate on Tuesday morning. The new cherry tree will be planted there in the afternoon.",
    "options": [
      "prune",
      "bloom",
      "dig",
      "sprout"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Farmers in the north usually _____ wheat seeds in late autumn. The young plants survive the winter and grow quickly when spring arrives.",
    "options": [
      "prune",
      "sow",
      "bloom",
      "dig"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The young tomato plants are too big for their small cups now. Next week, we will _____ them into larger pots on the balcony.",
    "options": [
      "bloom",
      "prune",
      "cultivate",
      "transplant"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The bean seeds usually _____ within five days if the room stays warm. Children in the class enjoy watching the first green shoots appear.",
    "options": [
      "sprout",
      "prune",
      "dig",
      "transplant"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The landscaping company buys young trees from a _____ outside the city at wholesale prices. It then plants them in office parks and hotel gardens.",
    "options": [
      "harvest",
      "climate",
      "nursery",
      "fertilizer"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The company picnic will be held at a peach _____ in the hills this year. Employees can pick fruit straight from the trees.",
    "options": [
      "climate",
      "orchard",
      "irrigation",
      "fertilizer"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The farm grows tomatoes inside a heated _____ so it can sell them all winter. The glass walls let in light while keeping the plants warm.",
    "options": [
      "orchard",
      "harvest",
      "soil",
      "greenhouse"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Because rain is rare in this area, the farm installed a new _____ system last spring. It sends water directly to the roots of every plant.",
    "options": [
      "irrigation",
      "harvest",
      "climate",
      "compost"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The gardener will _____ the rose bushes in early spring to remove dead branches. This helps the plants produce more flowers later in the year.",
    "options": [
      "sow",
      "sprout",
      "prune",
      "bloom"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The cherry trees along the river usually _____ in early April. Thousands of tourists visit the area to take photos of the pink flowers.",
    "options": [
      "prune",
      "bloom",
      "dig",
      "transplant"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The company plans to _____ tea on the hillside land it bought last year. Local workers will be hired to plant and care for the bushes.",
    "options": [
      "bloom",
      "sprout",
      "dig",
      "cultivate"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The café uses only _____ vegetables grown without chemical sprays. Although its prices are higher, many customers say the food tastes fresher.",
    "options": [
      "organic",
      "moist",
      "rainy",
      "empty"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Keep the soil slightly _____ but not wet while the seeds are growing. Too much water can cause the young roots to rot.",
    "options": [
      "organic",
      "seasonal",
      "moist",
      "loud"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The herbs on the kitchen windowsill grow slowly because they get very little _____ during the day. Moving them to the sunny terrace should help.",
    "options": [
      "soil",
      "sunlight",
      "harvest",
      "yield"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Coffee plants grow best in the cool, wet _____ found in mountain regions. That is why the company chose a farm in the central highlands.",
    "options": [
      "harvest",
      "shovel",
      "nursery",
      "climate"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The restaurant changes its menu four times a year to feature _____ vegetables from local farms. Winter dishes, for example, include fresh cabbage and radish.",
    "options": [
      "seasonal",
      "moist",
      "broken",
      "quiet"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Using the new seeds, the farm's rice _____ per hectare rose by twenty percent. Higher production means more income for the local farmers.",
    "options": [
      "climate",
      "soil",
      "yield",
      "nursery"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "seed": {
    "pos": "n.",
    "en_def": "a small part of a plant from which a new plant grows",
    "cn_def": "種子"
  },
  "soil": {
    "pos": "n.",
    "en_def": "the top layer of earth in which plants grow",
    "cn_def": "土壤"
  },
  "root": {
    "pos": "n.",
    "en_def": "the part of a plant that grows under the ground and takes in water",
    "cn_def": "根"
  },
  "stem": {
    "pos": "n.",
    "en_def": "the main long thin part of a plant that holds the leaves and flowers",
    "cn_def": "莖；梗"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "one of the flat green parts that grow from a plant's stem",
    "cn_def": "葉子"
  },
  "garden": {
    "pos": "n.",
    "en_def": "a piece of land where people grow flowers, vegetables, or plants",
    "cn_def": "花園；菜園"
  },
  "farmer": {
    "pos": "n.",
    "en_def": "a person who owns or manages a farm",
    "cn_def": "農夫；農民"
  },
  "crop": {
    "pos": "n.",
    "en_def": "a plant such as grain, fruit, or vegetables grown in large amounts",
    "cn_def": "農作物"
  },
  "harvest": {
    "pos": "n.",
    "en_def": "the time or act of gathering crops from the fields",
    "cn_def": "收成；收穫"
  },
  "water": {
    "pos": "v.",
    "en_def": "to pour water on plants to help them grow",
    "cn_def": "澆水"
  },
  "fertilizer": {
    "pos": "n.",
    "en_def": "a natural or chemical substance added to soil to help plants grow",
    "cn_def": "肥料"
  },
  "compost": {
    "pos": "n.",
    "en_def": "a mixture of dead plants and food waste used to make soil richer",
    "cn_def": "堆肥"
  },
  "shovel": {
    "pos": "n.",
    "en_def": "a tool with a long handle and a wide blade used for digging",
    "cn_def": "鏟子"
  },
  "hoe": {
    "pos": "n.",
    "en_def": "a garden tool with a long handle and a flat blade used to remove weeds and break up soil",
    "cn_def": "鋤頭"
  },
  "weed": {
    "pos": "n.",
    "en_def": "a wild plant that grows where it is not wanted",
    "cn_def": "雜草"
  },
  "dig": {
    "pos": "v.",
    "en_def": "to make a hole in the ground by moving soil",
    "cn_def": "挖；挖掘"
  },
  "sow": {
    "pos": "v.",
    "en_def": "to put seeds in the ground so that they will grow",
    "cn_def": "播種"
  },
  "transplant": {
    "pos": "v.",
    "en_def": "to move a growing plant from one place and plant it in another",
    "cn_def": "移植"
  },
  "seedling": {
    "pos": "n.",
    "en_def": "a very young plant that has grown from a seed",
    "cn_def": "幼苗；秧苗"
  },
  "sprout": {
    "pos": "v.",
    "en_def": "to start to grow and produce new leaves or shoots",
    "cn_def": "發芽"
  },
  "nursery": {
    "pos": "n.",
    "en_def": "a place where young plants and trees are grown for sale",
    "cn_def": "苗圃"
  },
  "orchard": {
    "pos": "n.",
    "en_def": "a piece of land where fruit trees are grown",
    "cn_def": "果園"
  },
  "greenhouse": {
    "pos": "n.",
    "en_def": "a building with glass walls and roof used for growing plants",
    "cn_def": "溫室"
  },
  "irrigation": {
    "pos": "n.",
    "en_def": "the supply of water to land or crops through pipes or channels",
    "cn_def": "灌溉"
  },
  "mulch": {
    "pos": "n.",
    "en_def": "a layer of material such as dead leaves or wood chips spread on soil to keep it moist",
    "cn_def": "覆蓋物；護根物"
  },
  "prune": {
    "pos": "v.",
    "en_def": "to cut off some branches of a tree or bush to help it grow better",
    "cn_def": "修剪"
  },
  "bloom": {
    "pos": "v.",
    "en_def": "to produce flowers",
    "cn_def": "開花"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to prepare land and grow crops on it",
    "cn_def": "耕種；栽培"
  },
  "organic": {
    "pos": "adj.",
    "en_def": "grown without using artificial chemicals",
    "cn_def": "有機的"
  },
  "moist": {
    "pos": "adj.",
    "en_def": "slightly wet",
    "cn_def": "濕潤的"
  },
  "sunlight": {
    "pos": "n.",
    "en_def": "the light that comes from the sun",
    "cn_def": "陽光"
  },
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather conditions in a particular area",
    "cn_def": "氣候"
  },
  "seasonal": {
    "pos": "adj.",
    "en_def": "available or happening only at a certain time of the year",
    "cn_def": "季節性的；當季的"
  },
  "yield": {
    "pos": "n.",
    "en_def": "the amount of crops produced from an area of land",
    "cn_def": "產量"
  }
};

const EXTRA_GLOSSES = {};
