// Topic 90 Quiz Data: Crop 農作物
// Source word list: https://www.examword.com/group-topic/crop — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T90 - Crop 農作物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "harvest",
    "pos": "n.",
    "cn_def": "收成；收割",
    "en_def": "the time or act of gathering crops from the fields",
    "sentence": "A: Why is the food company asking all its drivers to work extra hours in the countryside next month? B: The rice {{BLANK}} starts in early October, so the trucks must collect the crops from local farms quickly and bring them to our factory before the rainy season begins.",
    "cn": "A：為什麼食品公司要求所有司機下個月在鄉下加班？ B：稻米的【收成】十月初開始，所以卡車必須盡快從當地農場收集作物，並在雨季開始前送到我們的工廠。"
  },
  {
    "word": "plant",
    "pos": "v.",
    "cn_def": "種植",
    "en_def": "to put seeds or young plants in the ground so they grow",
    "sentence": "A: What is the hotel going to do with the empty land behind the parking lot now that the old storage building has been removed? B: The manager wants to {{BLANK}} tomatoes, herbs and lettuce there, so the chefs can pick fresh ingredients every morning for the restaurant's breakfast menu.",
    "cn": "A：舊倉庫拆除後，飯店打算怎麼處理停車場後面的空地？ B：經理想在那裡【種植】番茄、香草和萵苣，這樣廚師每天早上都能為餐廳的早餐菜單採摘新鮮食材。"
  },
  {
    "word": "seed",
    "pos": "n.",
    "cn_def": "種子",
    "en_def": "a small part of a plant from which a new plant grows",
    "sentence": "A: Why did the garden center order so many packets from the supplier in Japan this spring? B: Customers have been asking for a special kind of pumpkin {{BLANK}} that grows well on small balconies, and we expect sales to be very strong before the planting season starts in April.",
    "cn": "A：園藝中心今年春天為什麼向日本供應商訂了這麼多包貨？ B：顧客一直在詢問一種適合在小陽台生長的特殊南瓜【種子】，我們預計在四月種植季開始前銷量會非常好。"
  },
  {
    "word": "soil",
    "pos": "n.",
    "cn_def": "土壤",
    "en_def": "the top layer of the earth in which plants grow",
    "sentence": "A: Why did the farm manager hire a scientist from the university before buying the new land near the river? B: She wanted someone to test the {{BLANK}} first, because if it contains too much salt or chemicals, the vegetables will not grow well and the company could lose a lot of money.",
    "cn": "A：農場經理為什麼在買下河邊那塊新地之前，先從大學請了一位科學家？ B：她想先請人檢測【土壤】，因為如果裡面含有太多鹽分或化學物質，蔬菜就長不好，公司可能會損失很多錢。"
  },
  {
    "word": "fertilizer",
    "pos": "n.",
    "cn_def": "肥料",
    "en_def": "a substance added to the ground to help plants grow",
    "sentence": "A: Why have our sales to farmers in the south increased so much during the last three months? B: Our new natural {{BLANK}}, which is made from food waste collected from local restaurants, helps crops grow faster without harming the environment, so many farmers have switched from more expensive chemical products.",
    "cn": "A：為什麼過去三個月我們賣給南部農民的銷售量增加這麼多？ B：我們新的天然【肥料】是用從當地餐廳收集的廚餘製成的，能幫助作物長得更快又不傷害環境，所以許多農民已經從較貴的化學產品改用它。"
  },
  {
    "word": "irrigation",
    "pos": "n.",
    "cn_def": "灌溉",
    "en_def": "supplying water to land or crops through pipes or channels",
    "sentence": "A: How did the farm manage to keep growing vegetables last summer when it hardly rained for two months? B: The owners had installed a modern {{BLANK}} system the year before, which sends water through underground pipes directly to the roots, so they used less water and still had a good harvest.",
    "cn": "A：去年夏天兩個月幾乎沒下雨，那座農場怎麼還能持續種蔬菜？ B：農場主人前一年就安裝了現代化的【灌溉】系統，透過地下管線把水直接送到根部，所以他們用水更少，仍然有很好的收成。"
  },
  {
    "word": "pesticide",
    "pos": "n.",
    "cn_def": "殺蟲劑；農藥",
    "en_def": "a chemical used to kill insects that damage crops",
    "sentence": "A: Why did the supermarket remove all the strawberries from that supplier from its shelves this week? B: A government test found that the fruit contained too much {{BLANK}}, which farmers had sprayed to kill insects, so the company decided to stop selling them until the supplier passes a new safety inspection.",
    "cn": "A：超市這週為什麼把那家供應商的草莓全部下架？ B：政府檢驗發現那些水果含有過多的【農藥】，是農民為了殺蟲而噴灑的，所以公司決定在供應商通過新的安全檢查之前暫停販售。"
  },
  {
    "word": "herbicide",
    "pos": "n.",
    "cn_def": "除草劑",
    "en_def": "a chemical used to kill unwanted plants",
    "sentence": "A: Why are the gardeners at the business park pulling out the unwanted plants by hand instead of using machines? B: The management decided to stop using {{BLANK}} on the lawns last year, because many employees eat lunch on the grass and were worried that the chemicals might be bad for their health.",
    "cn": "A：商業園區的園丁為什麼用手拔除不要的植物，而不是用機器？ B：管理部門去年決定停止在草坪上使用【除草劑】，因為許多員工在草地上吃午餐，擔心那些化學物質可能對健康有害。"
  },
  {
    "word": "weed",
    "pos": "n.",
    "cn_def": "雜草",
    "en_def": "a wild plant that grows where it is not wanted",
    "sentence": "A: Why does the vegetable garden on the roof of our office building look so messy these days? B: The volunteer who usually takes care of it has been on vacation for three weeks, so every {{BLANK}} has grown tall between the tomatoes, and nobody else in the office has had time to pull them out.",
    "cn": "A：我們辦公大樓屋頂上的菜園最近為什麼看起來這麼凌亂？ B：平常照顧它的志工已經休假三週了，所以每一株【雜草】都在番茄之間長得很高，辦公室裡其他人都沒有時間把它們拔掉。"
  },
  {
    "word": "yield",
    "pos": "n.",
    "cn_def": "產量",
    "en_def": "the amount of crops that a piece of land produces",
    "sentence": "A: Why is the farming company planning to buy new machines and hire more workers for its fields next year? B: Last year the {{BLANK}} per hectare was twenty percent higher than expected thanks to better seeds and careful watering, so the company wants to grow more corn and sell it overseas.",
    "cn": "A：那家農業公司為什麼計畫明年替田地購買新機器並雇用更多工人？ B：去年因為種子更好、澆水更仔細，每公頃的【產量】比預期高出百分之二十，所以公司想種更多玉米並賣到海外。"
  },
  {
    "word": "farmland",
    "pos": "n.",
    "cn_def": "農地",
    "en_def": "land that is used for farming",
    "sentence": "A: Why are so many local residents attending the city council meeting about the new shopping mall tonight? B: The developer wants to build it on a large area of {{BLANK}} outside town, and many people are worried that we will lose the fields where farmers have grown rice for more than a hundred years.",
    "cn": "A：為什麼今晚有那麼多當地居民參加關於新購物中心的市議會會議？ B：開發商想把它蓋在城外一大片【農地】上，許多人擔心我們會失去農民種植稻米超過一百年的田地。"
  },
  {
    "word": "field",
    "pos": "n.",
    "cn_def": "田地",
    "en_def": "an area of land used for growing crops",
    "sentence": "A: Where are the new interns going to spend their first week, since the main office is being painted? B: They will join our team in the countryside and visit a large corn {{BLANK}} owned by one of our suppliers, so they can see how the raw materials for our snacks are grown and collected.",
    "cn": "A：主辦公室正在油漆，新實習生第一週要去哪裡？ B：他們會跟我們團隊一起去鄉下，參觀一家供應商擁有的一大片玉米【田】，讓他們了解我們零食的原料是如何種植和採收的。"
  },
  {
    "word": "plow",
    "pos": "v.",
    "cn_def": "犁（田）；耕地",
    "en_def": "to turn over the soil with a machine or tool before planting",
    "sentence": "A: Why did the farm rent two large tractors from the equipment company at the end of February? B: The workers need to {{BLANK}} all the fields before the spring planting begins, and the old machines broke down last year, so the manager wanted to make sure the job would be finished on time.",
    "cn": "A：農場為什麼在二月底向設備公司租了兩台大型拖拉機？ B：工人們必須在春季播種開始前【犁】完所有田地，而舊機器去年壞了，所以經理想確保工作能準時完成。"
  },
  {
    "word": "sow",
    "pos": "v.",
    "cn_def": "播種",
    "en_def": "to put seeds in the ground so that they grow",
    "sentence": "A: When should our garden center start advertising the new flower collection to customers in the north? B: Most people in that area {{BLANK}} their flower seeds in late March, after the cold weather ends, so we should send out the online advertisements and email discounts by the beginning of the month.",
    "cn": "A：我們園藝中心應該什麼時候開始向北部顧客宣傳新的花卉系列？ B：那一帶大多數人在三月下旬寒冷天氣結束後【播】下花卉種子，所以我們應該在月初前發出網路廣告和電子郵件折扣。"
  },
  {
    "word": "sprout",
    "pos": "v.",
    "cn_def": "發芽",
    "en_def": "to begin to grow and produce new leaves",
    "sentence": "A: How long will it take before the children in our company's weekend gardening class can see their beans growing? B: If they water the pots every day and keep them in a warm, sunny place, the beans should {{BLANK}} in about five days, and the children can measure the little plants each week.",
    "cn": "A：我們公司週末園藝課的孩子們要多久才能看到他們種的豆子長出來？ B：如果他們每天替花盆澆水，並放在溫暖、陽光充足的地方，豆子大約五天就會【發芽】，孩子們可以每週測量小植物的高度。"
  },
  {
    "word": "ripen",
    "pos": "v.",
    "cn_def": "成熟",
    "en_def": "to become ready to be picked or eaten",
    "sentence": "A: Why does the fruit company pick its bananas while they are still green instead of waiting? B: The trip to Europe by ship takes about three weeks, so the bananas slowly {{BLANK}} during the journey and arrive yellow and ready to eat when they reach the supermarkets in Germany and France.",
    "cn": "A：那家水果公司為什麼在香蕉還是綠色時就採收，而不是等待？ B：坐船到歐洲大約需要三週，所以香蕉在運送途中慢慢【成熟】，到達德國和法國的超市時已經變黃可以吃了。"
  },
  {
    "word": "grain",
    "pos": "n.",
    "cn_def": "穀物",
    "en_def": "the seeds of plants such as wheat and rice used as food",
    "sentence": "A: Why did the price of bread at our bakery chain go up again at the beginning of this month? B: Bad weather in several countries reduced the amount of {{BLANK}} that farmers could produce, so the cost of flour increased by almost fifteen percent, and we had to raise our prices to cover it.",
    "cn": "A：我們連鎖麵包店的麵包價格為什麼這個月初又漲了？ B：幾個國家的惡劣天氣減少了農民能生產的【穀物】數量，所以麵粉成本上漲了將近百分之十五，我們只好提高價格來因應。"
  },
  {
    "word": "wheat",
    "pos": "n.",
    "cn_def": "小麥",
    "en_def": "a plant whose grain is used to make flour and bread",
    "sentence": "A: Where does the company get the flour for its popular noodles that are sold in convenience stores across Asia? B: We buy high-quality {{BLANK}} from farmers in Australia and Canada, and then our factory in Taichung turns it into flour, which is mixed with water and salt to make the noodles every day.",
    "cn": "A：公司那款在亞洲便利商店熱賣的麵條，麵粉是從哪裡來的？ B：我們向澳洲和加拿大的農民購買高品質的【小麥】，然後由台中工廠磨成麵粉，每天和水、鹽混合製成麵條。"
  },
  {
    "word": "corn",
    "pos": "n.",
    "cn_def": "玉米",
    "en_def": "a tall plant with yellow seeds that grow on a cob",
    "sentence": "A: What new snack is the marketing team planning to introduce at the food fair in Taipei next month? B: They are going to sell sweet {{BLANK}} soup and grilled cobs with butter, because the recipe uses fresh crops from local farmers, and visitors at last year's fair loved healthy snacks.",
    "cn": "A：行銷團隊打算在下個月台北的食品展推出什麼新點心？ B：他們要賣甜【玉米】濃湯和奶油烤玉米棒，因為食譜使用當地農民的新鮮作物，而去年展覽的訪客很喜歡健康點心。"
  },
  {
    "word": "rice",
    "pos": "n.",
    "cn_def": "稻米；米飯",
    "en_def": "small white or brown grains eaten as a main food in Asia",
    "sentence": "A: Why did the restaurant chain decide to sign a long contract with the farmers' group in Hualien? B: The farmers there grow excellent {{BLANK}} without chemicals, and the agreement means we will get a steady supply for our lunch boxes at a fixed cost for the next five years, even if the market changes.",
    "cn": "A：那家連鎖餐廳為什麼決定和花蓮的農民團體簽長期合約？ B：那裡的農民不用化學物質種出優質的【稻米】，這份協議表示未來五年即使市場變動，我們的便當也能以固定成本獲得穩定供應。"
  },
  {
    "word": "barley",
    "pos": "n.",
    "cn_def": "大麥",
    "en_def": "a grain used for food, drinks and animal feed",
    "sentence": "A: What is the main ingredient in the new drink that our beverage company will launch in convenience stores this summer? B: It is made from roasted {{BLANK}}, which gives it a light, nutty flavor, and our research shows that many office workers want a healthy drink with no sugar and no caffeine.",
    "cn": "A：我們飲料公司今年夏天要在便利商店推出的新飲料，主要成分是什麼？ B：它是用烘焙過的【大麥】製成，帶有淡淡的堅果風味，我們的研究顯示許多上班族想要無糖、無咖啡因的健康飲料。"
  },
  {
    "word": "oats",
    "pos": "n.",
    "cn_def": "燕麥",
    "en_def": "a grain often cooked with milk or water for breakfast",
    "sentence": "A: Why has the hotel added a new section to its breakfast buffet next to the fresh fruit and yogurt? B: Many business guests asked for a healthier option, so the kitchen now cooks warm {{BLANK}} with milk and honey every morning, and guests can add nuts, berries or cinnamon on top.",
    "cn": "A：飯店為什麼在早餐自助餐的新鮮水果和優格旁邊新增了一區？ B：許多商務客人要求更健康的選擇，所以廚房現在每天早上用牛奶和蜂蜜煮溫熱的【燕麥】，客人可以在上面加堅果、莓果或肉桂。"
  },
  {
    "word": "soybean",
    "pos": "n.",
    "cn_def": "黃豆；大豆",
    "en_def": "a bean used to make tofu, soy milk and oil",
    "sentence": "A: Why is the food factory in Tainan building a new production line next to the tofu section? B: Demand for plant-based milk has grown quickly, so the company will use the same {{BLANK}} supply from its partner farms to make soy milk and sell it to coffee shops around the island.",
    "cn": "A：台南的食品工廠為什麼在豆腐區旁邊建新的生產線？ B：植物奶的需求成長很快，所以公司會用合作農場相同的【黃豆】供應來製作豆漿，並賣給全島的咖啡店。"
  },
  {
    "word": "vegetable",
    "pos": "n.",
    "cn_def": "蔬菜",
    "en_def": "a plant or part of a plant eaten as food, such as carrots or spinach",
    "sentence": "A: Why did the company cafeteria change its lunch menu after the health survey last month? B: The survey showed that many employees were not eating enough fresh food, so now every meal comes with at least one green {{BLANK}}, such as spinach or broccoli, and the price has not changed.",
    "cn": "A：員工餐廳上個月健康調查後為什麼改變了午餐菜單？ B：調查顯示許多員工沒吃到足夠的新鮮食物，所以現在每份餐點都至少附一種綠色【蔬菜】，例如菠菜或花椰菜，而且價格沒有改變。"
  },
  {
    "word": "fruit",
    "pos": "n.",
    "cn_def": "水果",
    "en_def": "the sweet part of a plant that contains seeds, such as apples",
    "sentence": "A: What gifts is the sales team going to send to our most important customers before the Lunar New Year holiday? B: We ordered beautiful boxes of seasonal {{BLANK}}, such as oranges and apples from local orchards, because they are healthy, look attractive and represent good luck in Taiwanese culture.",
    "cn": "A：業務團隊在農曆新年假期前要送什麼禮物給最重要的客戶？ B：我們訂了精美的當季【水果】禮盒，例如當地果園的柳丁和蘋果，因為它們健康、外觀漂亮，而且在台灣文化中象徵好運。"
  },
  {
    "word": "orchard",
    "pos": "n.",
    "cn_def": "果園",
    "en_def": "a piece of land where fruit trees are grown",
    "sentence": "A: Where is the company holding its family day this year, since the beach resort is fully booked? B: We rented an apple {{BLANK}} in the mountains near Taichung, where employees and their children can pick fruit from the trees, enjoy a picnic lunch and join a short tour about how the farm works.",
    "cn": "A：海灘度假村客滿了，公司今年的家庭日要在哪裡舉辦？ B：我們租了台中附近山區的一座蘋果【園】，員工和孩子可以從樹上摘水果、享用野餐午餐，並參加一個介紹農場運作的簡短導覽。"
  },
  {
    "word": "greenhouse",
    "pos": "n.",
    "cn_def": "溫室",
    "en_def": "a glass building where plants are grown in warm conditions",
    "sentence": "A: How can the farm sell fresh strawberries to hotels even during the cold winter months? B: They grow them inside a large {{BLANK}} made of glass, where the temperature and light are controlled by computers, so the plants stay warm and produce sweet fruit all year round.",
    "cn": "A：那座農場怎麼能在寒冷的冬季也賣新鮮草莓給飯店？ B：他們在一座玻璃製的大型【溫室】裡種植，溫度和光線都由電腦控制，所以植物保持溫暖，一年四季都能結出甜美的果實。"
  },
  {
    "word": "drought",
    "pos": "n.",
    "cn_def": "乾旱",
    "en_def": "a long period of time with little or no rain",
    "sentence": "A: Why did the coffee company warn its customers that prices might rise later this year? B: A long {{BLANK}} in Brazil has lasted almost six months, and without rain many coffee plants have died, so the supply of beans will be much smaller and the cost of buying them will go up.",
    "cn": "A：咖啡公司為什麼警告顧客今年稍晚價格可能上漲？ B：巴西一場長期的【乾旱】已經持續將近六個月，沒有雨水，許多咖啡樹都死了，所以咖啡豆供應會少很多，購買成本也會上升。"
  },
  {
    "word": "flood",
    "pos": "n.",
    "cn_def": "洪水；水災",
    "en_def": "a large amount of water covering land that is usually dry",
    "sentence": "A: Why were the deliveries of fresh vegetables to our restaurants so late and so small last week? B: Heavy rain caused a serious {{BLANK}} in the farming area along the river, and many fields were under water for days, so the farmers could not harvest their crops or reach the main roads.",
    "cn": "A：上週送到我們餐廳的新鮮蔬菜為什麼這麼晚又這麼少？ B：大雨在沿河的農業區造成嚴重【水災】，許多田地被水淹了好幾天，所以農民無法收成作物，也無法到達主要道路。"
  },
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the usual weather conditions in a place",
    "sentence": "A: Why did the tea company decide to open a new farm in the mountains instead of near the coast? B: The cool, wet {{BLANK}} at high altitudes is perfect for growing tea leaves with a rich flavor, and the experts believe the plants there will produce better quality tea than our older farm.",
    "cn": "A：茶葉公司為什麼決定在山區而不是海邊開新的茶園？ B：高海拔涼爽潮濕的【氣候】非常適合種出風味濃郁的茶葉，專家認為那裡的茶樹會比我們舊茶園產出品質更好的茶。"
  },
  {
    "word": "organic",
    "pos": "adj.",
    "cn_def": "有機的",
    "en_def": "grown without artificial chemicals",
    "sentence": "A: Why is the new supermarket near our office always so busy on weekday evenings? B: It sells {{BLANK}} vegetables and fruit grown without any chemicals, and many young office workers are willing to pay a little more because they believe this kind of food is healthier for their families.",
    "cn": "A：我們辦公室附近的新超市為什麼平日晚上總是那麼忙？ B：它販售不使用任何化學物質種植的【有機】蔬菜和水果，許多年輕上班族願意多付一點錢，因為他們相信這類食物對家人更健康。"
  },
  {
    "word": "rotation",
    "pos": "n.",
    "cn_def": "輪作；輪換",
    "en_def": "changing the crops grown in a field from season to season",
    "sentence": "A: How does the farm keep its soil healthy without using a lot of expensive chemicals every year? B: The manager follows a careful crop {{BLANK}} plan, so the same field grows rice one year, beans the next year and vegetables the year after that, which helps the land stay rich and productive.",
    "cn": "A：那座農場如何在不每年使用大量昂貴化學物質的情況下保持土壤健康？ B：經理遵循仔細的作物【輪作】計畫，同一塊田第一年種稻米、第二年種豆類、第三年種蔬菜，這樣有助於土地保持肥沃和高產。"
  },
  {
    "word": "agriculture",
    "pos": "n.",
    "cn_def": "農業",
    "en_def": "the work of farming and growing crops",
    "sentence": "A: Why is the bank offering special low-interest loans to young people in the countryside this year? B: The government wants to support {{BLANK}}, because many farmers are getting old and few young people want to grow crops, so the loans help new farmers buy land, machines and seeds.",
    "cn": "A：銀行今年為什麼提供特別的低利貸款給鄉下的年輕人？ B：政府想要扶持【農業】，因為許多農民年紀漸長，很少年輕人願意種植作物，所以這些貸款幫助新農民購買土地、機器和種子。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "耕種；栽培",
    "en_def": "to prepare land and grow crops on it",
    "sentence": "A: What will the company do with the large piece of land it bought near the lake last autumn? B: We plan to {{BLANK}} herbs and flowers there for our natural skin care products, and we will hire local workers to look after the plants and collect them by hand during the busy summer season.",
    "cn": "A：公司去年秋天在湖邊買的那一大片土地要做什麼用？ B：我們打算在那裡【栽種】香草和花卉，用於我們的天然保養品，並雇用當地工人照顧植物，在忙碌的夏季用手採收。"
  }
];

const MCQS = [
  {
    "q": "The farmers worked from sunrise to sunset for two weeks. This year's apple _____ was the largest in the history of the village.",
    "options": [
      "harvest",
      "drought",
      "herbicide",
      "climate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The city will _____ two hundred trees along the new highway next spring. The project aims to reduce noise and improve air quality.",
    "options": [
      "ripen",
      "sprout",
      "plant",
      "plow"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The vegetables in this area grow very quickly. Scientists say the dark _____ here is full of minerals that plants need.",
    "options": [
      "drought",
      "soil",
      "orchard",
      "rotation"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The company sells a natural _____ made from chicken waste. Farmers mix it into the ground to help their crops grow bigger.",
    "options": [
      "greenhouse",
      "drought",
      "irrigation",
      "fertilizer"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The desert farm receives almost no rain all year. It depends completely on an _____ system that brings water from the river.",
    "options": [
      "irrigation",
      "orchard",
      "agriculture",
      "oats"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Insects destroyed half of the cabbages last summer. This year the farmer will spray a safe _____ to protect the young plants.",
    "options": [
      "soybean",
      "drought",
      "rotation",
      "pesticide"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The gardener spends an hour every morning in the vegetable garden. She removes every _____ so it cannot steal water from the tomatoes.",
    "options": [
      "grain",
      "flood",
      "weed",
      "climate"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "New seeds and better watering have raised the farm's rice _____. It now produces thirty percent more per hectare than before.",
    "options": [
      "drought",
      "yield",
      "herbicide",
      "orchard"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The government plans to protect the _____ around the city from developers. Only farmers will be allowed to use the land.",
    "options": [
      "fertilizer",
      "harvest",
      "pesticide",
      "farmland"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Before planting corn, the workers must _____ the hard ground with a tractor. This turns the earth over and makes it soft.",
    "options": [
      "plow",
      "ripen",
      "sprout",
      "sow"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "In early spring, the farmers _____ wheat seeds across the wide fields by hand. A few weeks later, green shoots appear.",
    "options": [
      "ripen",
      "sow",
      "plow",
      "cultivate"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Keep the seeds in a warm, wet place for a few days. They will soon _____ and show tiny green leaves.",
    "options": [
      "plow",
      "sow",
      "sprout",
      "cultivate"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The bananas are still green when they leave the farm. They _____ slowly in the warehouse before they are sent to stores.",
    "options": [
      "plow",
      "ripen",
      "sow",
      "plant"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Rice, wheat and corn are the most important types of _____ in the world. Billions of people eat them every day.",
    "options": [
      "fertilizer",
      "drought",
      "orchard",
      "grain"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Most bread is made from flour. The flour comes from _____ that is grown on huge farms in Canada and Australia.",
    "options": [
      "wheat",
      "orchard",
      "rotation",
      "drought"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The snack company makes its popular chips from yellow _____. The farmers pick the cobs in late summer when they are sweet.",
    "options": [
      "barley",
      "wheat",
      "corn",
      "soybean"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "In Taiwan, many people eat a bowl of steamed white _____ with every meal. It is grown in wet paddy fields.",
    "options": [
      "barley",
      "oats",
      "wheat",
      "rice"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Our new tea has no caffeine at all. It is made from roasted _____, which is a grain similar to wheat.",
    "options": [
      "soybean",
      "barley",
      "vegetable",
      "fruit"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The hotel breakfast includes a warm bowl of _____ with milk and honey. Many guests choose it because it is healthy and filling.",
    "options": [
      "fertilizer",
      "orchard",
      "oats",
      "drought"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Tofu and soy milk are both made from the _____. Taiwan imports most of this crop from the United States and Brazil.",
    "options": [
      "soybean",
      "wheat",
      "corn",
      "rice"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Doctors say we should eat more green food. Spinach is a healthy _____ that is full of iron and vitamins.",
    "options": [
      "fruit",
      "grain",
      "vegetable",
      "weed"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The family owns a large _____ with over five hundred peach trees. Visitors can pick fresh peaches there every July.",
    "options": [
      "orchard",
      "drought",
      "harvest",
      "rotation"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Tomatoes cannot grow outside in the cold winter here. The farm grows them in a heated glass _____ instead.",
    "options": [
      "field",
      "orchard",
      "farmland",
      "greenhouse"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "There has been no rain in the region for eight months. The long _____ has killed many crops and animals.",
    "options": [
      "flood",
      "drought",
      "harvest",
      "irrigation"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The river rose quickly after three days of heavy rain. The _____ covered the rice fields and destroyed the harvest.",
    "options": [
      "flood",
      "drought",
      "climate",
      "yield"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Coffee plants need a warm and wet _____ to grow well. That is why most coffee comes from tropical countries.",
    "options": [
      "harvest",
      "orchard",
      "climate",
      "rotation"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Growing the same crop every year makes the land weak. Crop _____ keeps the soil healthy by changing plants each season.",
    "options": [
      "yield",
      "rotation",
      "harvest",
      "irrigation"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Most people in the village work in _____. They grow rice, vegetables and fruit on small family farms.",
    "options": [
      "drought",
      "rotation",
      "climate",
      "agriculture"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The company plans to _____ lavender on the hills behind its factory. The flowers will be used in its new soap.",
    "options": [
      "cultivate",
      "ripen",
      "sprout",
      "plow"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Each sunflower _____ needs plenty of sun and water. Plant it about two centimeters deep in soft soil.",
    "options": [
      "weed",
      "orchard",
      "seed",
      "harvest"
    ],
    "answer": 2,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "harvest": {
    "pos": "n.",
    "en_def": "the time or act of gathering crops from the fields",
    "cn_def": "收成；收割"
  },
  "plant": {
    "pos": "v.",
    "en_def": "to put seeds or young plants in the ground so they grow",
    "cn_def": "種植"
  },
  "seed": {
    "pos": "n.",
    "en_def": "a small part of a plant from which a new plant grows",
    "cn_def": "種子"
  },
  "soil": {
    "pos": "n.",
    "en_def": "the top layer of the earth in which plants grow",
    "cn_def": "土壤"
  },
  "fertilizer": {
    "pos": "n.",
    "en_def": "a substance added to the ground to help plants grow",
    "cn_def": "肥料"
  },
  "irrigation": {
    "pos": "n.",
    "en_def": "supplying water to land or crops through pipes or channels",
    "cn_def": "灌溉"
  },
  "pesticide": {
    "pos": "n.",
    "en_def": "a chemical used to kill insects that damage crops",
    "cn_def": "殺蟲劑；農藥"
  },
  "herbicide": {
    "pos": "n.",
    "en_def": "a chemical used to kill unwanted plants",
    "cn_def": "除草劑"
  },
  "weed": {
    "pos": "n.",
    "en_def": "a wild plant that grows where it is not wanted",
    "cn_def": "雜草"
  },
  "yield": {
    "pos": "n.",
    "en_def": "the amount of crops that a piece of land produces",
    "cn_def": "產量"
  },
  "farmland": {
    "pos": "n.",
    "en_def": "land that is used for farming",
    "cn_def": "農地"
  },
  "field": {
    "pos": "n.",
    "en_def": "an area of land used for growing crops",
    "cn_def": "田地"
  },
  "plow": {
    "pos": "v.",
    "en_def": "to turn over the soil with a machine or tool before planting",
    "cn_def": "犁（田）；耕地"
  },
  "sow": {
    "pos": "v.",
    "en_def": "to put seeds in the ground so that they grow",
    "cn_def": "播種"
  },
  "sprout": {
    "pos": "v.",
    "en_def": "to begin to grow and produce new leaves",
    "cn_def": "發芽"
  },
  "ripen": {
    "pos": "v.",
    "en_def": "to become ready to be picked or eaten",
    "cn_def": "成熟"
  },
  "grain": {
    "pos": "n.",
    "en_def": "the seeds of plants such as wheat and rice used as food",
    "cn_def": "穀物"
  },
  "wheat": {
    "pos": "n.",
    "en_def": "a plant whose grain is used to make flour and bread",
    "cn_def": "小麥"
  },
  "corn": {
    "pos": "n.",
    "en_def": "a tall plant with yellow seeds that grow on a cob",
    "cn_def": "玉米"
  },
  "rice": {
    "pos": "n.",
    "en_def": "small white or brown grains eaten as a main food in Asia",
    "cn_def": "稻米；米飯"
  },
  "barley": {
    "pos": "n.",
    "en_def": "a grain used for food, drinks and animal feed",
    "cn_def": "大麥"
  },
  "oats": {
    "pos": "n.",
    "en_def": "a grain often cooked with milk or water for breakfast",
    "cn_def": "燕麥"
  },
  "soybean": {
    "pos": "n.",
    "en_def": "a bean used to make tofu, soy milk and oil",
    "cn_def": "黃豆；大豆"
  },
  "vegetable": {
    "pos": "n.",
    "en_def": "a plant or part of a plant eaten as food, such as carrots or spinach",
    "cn_def": "蔬菜"
  },
  "fruit": {
    "pos": "n.",
    "en_def": "the sweet part of a plant that contains seeds, such as apples",
    "cn_def": "水果"
  },
  "orchard": {
    "pos": "n.",
    "en_def": "a piece of land where fruit trees are grown",
    "cn_def": "果園"
  },
  "greenhouse": {
    "pos": "n.",
    "en_def": "a glass building where plants are grown in warm conditions",
    "cn_def": "溫室"
  },
  "drought": {
    "pos": "n.",
    "en_def": "a long period of time with little or no rain",
    "cn_def": "乾旱"
  },
  "flood": {
    "pos": "n.",
    "en_def": "a large amount of water covering land that is usually dry",
    "cn_def": "洪水；水災"
  },
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather conditions in a place",
    "cn_def": "氣候"
  },
  "organic": {
    "pos": "adj.",
    "en_def": "grown without artificial chemicals",
    "cn_def": "有機的"
  },
  "rotation": {
    "pos": "n.",
    "en_def": "changing the crops grown in a field from season to season",
    "cn_def": "輪作；輪換"
  },
  "agriculture": {
    "pos": "n.",
    "en_def": "the work of farming and growing crops",
    "cn_def": "農業"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to prepare land and grow crops on it",
    "cn_def": "耕種；栽培"
  }
};

const EXTRA_GLOSSES = {};
