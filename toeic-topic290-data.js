// Topic 290 Quiz Data: Plastic Waste 塑膠垃圾
// Source word list: https://www.examword.com/group-topic/plastic-waste — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T290 - Plastic Waste 塑膠垃圾",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "waste",
    "pos": "n.",
    "cn_def": "廢棄物；垃圾",
    "en_def": "things that are thrown away because they are no longer useful",
    "sentence": "A: Why did the building manager put new signs next to every trash can on our office floor last week? B: The company discovered that we produce too much plastic {{BLANK}} from lunch boxes and coffee cups, so everyone must now sort their garbage into separate bins before leaving work.",
    "cn": "A：大樓管理員上週為什麼在我們辦公室樓層的每個垃圾桶旁貼了新告示？ B：公司發現我們的便當盒和咖啡杯產生了太多塑膠【廢棄物】，所以現在每個人下班前都必須把垃圾分類到不同的桶子裡。"
  },
  {
    "word": "pollution",
    "pos": "n.",
    "cn_def": "污染",
    "en_def": "dirty or harmful things in the air, water, or land",
    "sentence": "A: Why has the hotel by the beach lost so many guests this summer, even though the rooms were recently renovated? B: Reports about plastic {{BLANK}} along the shore spread online, and many travelers decided to book resorts in cleaner areas instead of staying there.",
    "cn": "A：海邊那家飯店的客房最近才翻新，為什麼今年夏天還是流失了這麼多房客？ B：關於海岸塑膠【污染】的報導在網路上流傳，許多旅客決定改訂較乾淨地區的度假村，不住那裡了。"
  },
  {
    "word": "litter",
    "pos": "n.",
    "cn_def": "（公共場所的）垃圾",
    "en_def": "trash left on the ground in public places",
    "sentence": "A: Did the city council say anything about the park near our office during yesterday's public meeting? B: Yes, they complained that workers leave too much {{BLANK}} on the grass after lunch, so they will place more trash cans there and fine anyone who throws cups on the ground.",
    "cn": "A：市議會在昨天的公開會議上有提到我們辦公室附近的公園嗎？ B：有，他們抱怨上班族午餐後在草地上留下太多【垃圾】，所以會在那裡增設垃圾桶，並對任何把杯子丟在地上的人開罰。"
  },
  {
    "word": "recycle",
    "pos": "v.",
    "cn_def": "回收；再利用",
    "en_def": "to treat used things so they can be made into new things",
    "sentence": "A: What should we do with all the empty plastic bottles from the conference we held in the main hall this morning? B: Please collect them in the blue boxes near the elevator, because the cleaning company will {{BLANK}} them and send the material to a factory that makes new products.",
    "cn": "A：今天早上在大廳舉辦的會議留下這麼多空塑膠瓶，我們該怎麼處理？ B：請把它們收集到電梯旁的藍色箱子裡，因為清潔公司會將它們【回收】，再把材料送到製造新產品的工廠。"
  },
  {
    "word": "recycling",
    "pos": "n.",
    "cn_def": "資源回收",
    "en_def": "the process of making used things into new products",
    "sentence": "A: Why does the new apartment building downstairs have so many colored bins in the basement next to the parking area? B: The management office started a strict {{BLANK}} program, and residents must separate paper, plastic, and metal every day or they will pay an extra cleaning fee.",
    "cn": "A：樓下那棟新公寓大樓的地下室停車區旁為什麼有這麼多彩色垃圾桶？ B：管理處開始實施嚴格的【資源回收】計畫，住戶每天都必須把紙類、塑膠和金屬分開，否則要支付額外的清潔費。"
  },
  {
    "word": "landfill",
    "pos": "n.",
    "cn_def": "垃圾掩埋場",
    "en_def": "a large area where trash is buried under the ground",
    "sentence": "A: Why is the local government asking every company in the industrial park to cut its garbage by half this year? B: The only {{BLANK}} outside the city is almost full, and officials say it will take at least five years to build a new site for all that trash.",
    "cn": "A：地方政府為什麼要求工業區的每家公司今年把垃圾量減半？ B：城外唯一的【垃圾掩埋場】幾乎滿了，官員說至少要花五年才能為那些垃圾建好新的場地。"
  },
  {
    "word": "incinerate",
    "pos": "v.",
    "cn_def": "焚化；焚燒",
    "en_def": "to burn something completely, especially trash",
    "sentence": "A: What happens to the plastic trash that the factory cannot sell or send to other companies for reuse? B: A special truck takes it to a power plant, where workers {{BLANK}} it at very high temperatures and turn the heat into electricity for nearby homes.",
    "cn": "A：工廠無法賣掉或送給其他公司再利用的塑膠垃圾會怎麼處理？ B：一輛特殊卡車會把它載到發電廠，工人會在極高溫下將其【焚化】，並把熱能轉換成附近住家的電力。"
  },
  {
    "word": "decompose",
    "pos": "v.",
    "cn_def": "分解；腐爛",
    "en_def": "to slowly break down and become part of the soil",
    "sentence": "A: Why did our supplier stop using the cheap plastic wrap for the boxes of fresh vegetables they deliver every Monday? B: Customers complained because that material takes hundreds of years to {{BLANK}}, so the supplier switched to paper that breaks down in a few months.",
    "cn": "A：我們的供應商為什麼不再用便宜的塑膠膜包裝每週一送來的新鮮蔬菜箱？ B：顧客抱怨那種材料要花好幾百年才能【分解】，所以供應商改用幾個月內就會腐化的紙。"
  },
  {
    "word": "biodegradable",
    "pos": "adj.",
    "cn_def": "可生物分解的",
    "en_def": "able to break down naturally without harming nature",
    "sentence": "A: Have you chosen the cups and plates for the company picnic next Saturday, or do you still need help with the order? B: I ordered {{BLANK}} ones made from corn, because our manager wants everything to break down naturally in the soil after the event is over.",
    "cn": "A：你選好下週六公司野餐的杯子和盤子了嗎，還是你仍需要幫忙下訂？ B：我訂了用玉米做的【可生物分解的】杯盤，因為經理希望活動結束後所有東西都能在土壤中自然分解。"
  },
  {
    "word": "microplastic",
    "pos": "n.",
    "cn_def": "塑膠微粒；微塑膠",
    "en_def": "a very tiny piece of plastic",
    "sentence": "A: Why is the seafood restaurant down the street testing all of its fish before cooking and serving them to customers? B: Scientists found that tiny bits of plastic are now inside many sea animals, so the owner wants to make sure no {{BLANK}} ends up in the meals his guests eat every night.",
    "cn": "A：街尾那家海鮮餐廳為什麼在烹煮並供應給客人之前，要檢測所有的魚？ B：科學家發現許多海洋動物體內現在都有細小的塑膠碎片，所以老闆想確保客人每晚吃的餐點裡沒有任何【塑膠微粒】。"
  },
  {
    "word": "marine",
    "pos": "adj.",
    "cn_def": "海洋的",
    "en_def": "connected with the sea and the things that live in it",
    "sentence": "A: Who is the speaker at tomorrow's lunch seminar about the company's new environmental goals for the next three years? B: She is a {{BLANK}} biologist from the university, and she will explain how plastic bags and fishing nets harm turtles, whales, and other sea creatures.",
    "cn": "A：明天午餐研討會上談公司未來三年新環保目標的講者是誰？ B：她是大學的【海洋】生物學家，她會解釋塑膠袋和漁網如何傷害海龜、鯨魚和其他海洋生物。"
  },
  {
    "word": "ocean",
    "pos": "n.",
    "cn_def": "海洋",
    "en_def": "the very large area of salt water that covers most of the earth",
    "sentence": "A: Why did the travel agency add a beach cleanup activity to the island tour package that we are offering to clients this spring? B: Many customers care about the environment, and they want to help remove the plastic that the {{BLANK}} washes onto the sand after every storm.",
    "cn": "A：旅行社為什麼在我們今年春天提供給客戶的海島旅遊套裝中加入淨灘活動？ B：許多客戶關心環境，他們想幫忙清除每次暴風雨後【海洋】沖上沙灘的塑膠垃圾。"
  },
  {
    "word": "toxic",
    "pos": "adj.",
    "cn_def": "有毒的",
    "en_def": "poisonous and harmful to people or nature",
    "sentence": "A: Why did the safety inspector tell us to stop burning old plastic boxes behind the warehouse last Friday afternoon? B: He explained that the smoke releases {{BLANK}} chemicals into the air, which can make workers sick and also damage the health of families living nearby.",
    "cn": "A：上週五下午安全檢查員為什麼叫我們停止在倉庫後面燒舊塑膠箱？ B：他解釋說那些煙會把【有毒的】化學物質釋放到空氣中，可能讓員工生病，也會損害附近居民的健康。"
  },
  {
    "word": "disposable",
    "pos": "adj.",
    "cn_def": "拋棄式的；一次性的",
    "en_def": "made to be used once and then thrown away",
    "sentence": "A: Why did the café on the first floor raise the price of takeaway drinks by five dollars starting this month? B: The owner wants to discourage customers from using {{BLANK}} cups, so people who bring their own mugs from home or the office now get a discount instead.",
    "cn": "A：一樓的咖啡店為什麼從這個月開始把外帶飲料漲價五元？ B：老闆想減少顧客使用【拋棄式】杯子，所以從家裡或辦公室自備杯子的人現在反而可以享有折扣。"
  },
  {
    "word": "packaging",
    "pos": "n.",
    "cn_def": "包裝；包裝材料",
    "en_def": "the boxes, bags, and wrapping that products are sold in",
    "sentence": "A: Why are so many online shoppers leaving negative reviews about our electronics store on the website this month? B: They say we use too much plastic {{BLANK}} for small items like phone cases, so the boxes arrive full of foam and wrap that customers have to throw away.",
    "cn": "A：這個月為什麼有這麼多網購顧客在網站上給我們電子產品店負評？ B：他們說我們連手機殼這類小東西都用太多塑膠【包裝】，所以箱子送到時塞滿了泡棉和包材，顧客只能丟掉。"
  },
  {
    "word": "container",
    "pos": "n.",
    "cn_def": "容器",
    "en_def": "a box, bottle, or other object used to hold things",
    "sentence": "A: How should I store the leftover food from the department lunch so that people can eat it tomorrow morning? B: Put the noodles and salad in that glass {{BLANK}} with the blue lid, and keep it in the office fridge, because we are trying to avoid plastic wrap.",
    "cn": "A：部門午餐剩下的食物我該怎麼保存，讓大家明天早上可以吃？ B：把麵和沙拉放進那個藍色蓋子的玻璃【容器】裡，然後放在辦公室冰箱，因為我們正努力避免使用保鮮膜。"
  },
  {
    "word": "bottle",
    "pos": "n.",
    "cn_def": "瓶子",
    "en_def": "a container with a narrow top for holding liquids",
    "sentence": "A: Did you notice that the vending machines in the lobby no longer sell drinks in plastic cups or cans? B: Yes, the company installed water stations on every floor instead, and each employee received a free metal {{BLANK}} that they can fill up as many times as they like.",
    "cn": "A：你有注意到大廳的自動販賣機不再賣塑膠杯或罐裝飲料了嗎？ B：有，公司改在每層樓都裝了飲水站，每位員工都拿到一個免費的金屬【瓶子】，想裝幾次水都可以。"
  },
  {
    "word": "bag",
    "pos": "n.",
    "cn_def": "袋子",
    "en_def": "a soft container used for carrying things",
    "sentence": "A: Why did the cashier at the supermarket ask whether I needed anything else to carry my groceries home? B: Stores here must now charge customers for each plastic {{BLANK}}, so most shoppers bring their own cloth ones from home to save money and protect the environment.",
    "cn": "A：超市收銀員為什麼問我是否還需要其他東西來把雜貨提回家？ B：這裡的商店現在必須對每個塑膠【袋】向顧客收費，所以大多數購物者會從家裡自備布袋，既省錢又保護環境。"
  },
  {
    "word": "straw",
    "pos": "n.",
    "cn_def": "吸管",
    "en_def": "a thin tube used for drinking",
    "sentence": "A: Why did the juice bar near the train station start giving customers paper cups with special lids last month? B: The city passed a new rule against plastic, so the shop no longer offers a {{BLANK}} with each drink, and customers can now sip directly from the lid instead.",
    "cn": "A：火車站附近的果汁吧上個月為什麼開始給客人附特殊杯蓋的紙杯？ B：市政府通過了一項限制塑膠的新規定，所以店家不再隨每杯飲料附【吸管】，客人現在可以直接從杯蓋喝。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少",
    "en_def": "to make something smaller in amount or number",
    "sentence": "A: What is the main goal of the new environmental plan that the board of directors approved at Monday's meeting? B: The company hopes to {{BLANK}} its use of plastic by forty percent within two years by changing suppliers and asking every department to print and package less.",
    "cn": "A：董事會在週一會議上通過的新環保計畫主要目標是什麼？ B：公司希望透過更換供應商並要求每個部門少印刷、少包裝，在兩年內把塑膠使用量【減少】百分之四十。"
  },
  {
    "word": "reuse",
    "pos": "v.",
    "cn_def": "重複使用",
    "en_def": "to use something again instead of throwing it away",
    "sentence": "A: Why are there piles of cardboard boxes and plastic trays in the corner of the shipping department this week? B: The warehouse manager told us to {{BLANK}} them for small orders instead of buying new ones, because it saves money and creates much less garbage.",
    "cn": "A：這週出貨部門的角落為什麼堆滿了紙箱和塑膠托盤？ B：倉庫經理叫我們把它們【重複使用】來裝小訂單，而不是買新的，因為這樣省錢又能大幅減少垃圾。"
  },
  {
    "word": "ban",
    "pos": "v.",
    "cn_def": "禁止",
    "en_def": "to officially say that something is not allowed",
    "sentence": "A: Have you heard about the new law that the government is planning to introduce for restaurants and food stalls next year? B: Yes, it will {{BLANK}} plastic forks and spoons completely, so restaurant owners are already looking for cheap wooden or bamboo ones to replace them.",
    "cn": "A：你聽說政府明年打算對餐廳和小吃攤實施的新法律了嗎？ B：聽說了，它將全面【禁止】塑膠叉子和湯匙，所以餐廳老闆們已經在找便宜的木製或竹製餐具來替代。"
  },
  {
    "word": "campaign",
    "pos": "n.",
    "cn_def": "活動；宣傳運動",
    "en_def": "a planned set of activities to reach a goal",
    "sentence": "A: Why are there so many posters about saving the sea in the elevators and hallways of our building this month? B: The marketing team launched a {{BLANK}} to encourage employees to stop buying bottled water, and the department that uses the least plastic will win a free dinner.",
    "cn": "A：這個月我們大樓的電梯和走廊為什麼貼了這麼多拯救海洋的海報？ B：行銷團隊發起了一項【活動】，鼓勵員工不要再買瓶裝水，用最少塑膠的部門將贏得一頓免費晚餐。"
  },
  {
    "word": "cleanup",
    "pos": "n.",
    "cn_def": "清潔活動；清理",
    "en_def": "an event or job of cleaning a place",
    "sentence": "A: Are you going to join the volunteer event that human resources organized for this Saturday morning by the river? B: Of course, the whole sales team signed up for the {{BLANK}}, and we will spend three hours collecting bottles, bags, and other plastic trash along the riverbank.",
    "cn": "A：你會參加人資部安排在這週六早上河邊的志工活動嗎？ B：當然，整個業務團隊都報名了這次【清潔活動】，我們會花三個小時沿著河岸撿拾瓶子、袋子和其他塑膠垃圾。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the natural world of land, water, air, plants, and animals",
    "sentence": "A: Why did the company decide to replace all the plastic folders and pens with paper and wooden ones this year? B: The president believes that businesses must protect the {{BLANK}}, and she also thinks customers will trust a brand that cares about nature and the future.",
    "cn": "A：公司今年為什麼決定把所有塑膠文件夾和筆換成紙製和木製的？ B：總裁認為企業必須保護【環境】，她也認為顧客會信任一個關心自然與未來的品牌。"
  },
  {
    "word": "ecosystem",
    "pos": "n.",
    "cn_def": "生態系統",
    "en_def": "all the living things in an area and how they depend on each other",
    "sentence": "A: Why are the fishermen in the small harbor town so worried about the new plastics factory opening near the coast? B: They believe that waste water from the factory could damage the whole {{BLANK}} of the bay, harming the fish, birds, and plants that their income depends on.",
    "cn": "A：小港鎮的漁民為什麼這麼擔心海岸附近即將開幕的新塑膠工廠？ B：他們認為工廠排放的廢水可能會破壞整個海灣的【生態系統】，傷害他們賴以維生的魚類、鳥類和植物。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的；可持續的",
    "en_def": "able to continue for a long time without harming nature",
    "sentence": "A: What kind of suppliers is the purchasing department looking for now that our contract with the old packaging company has ended? B: We want partners who offer {{BLANK}} materials, such as recycled paper and plant-based plastics, so that our products can be good for both business and the planet.",
    "cn": "A：我們和舊包裝公司的合約結束了，採購部門現在在找什麼樣的供應商？ B：我們想要能提供【永續的】材料的合作夥伴，例如再生紙和植物性塑膠，讓我們的產品對商業和地球都有好處。"
  },
  {
    "word": "alternative",
    "pos": "n.",
    "cn_def": "替代品；替代方案",
    "en_def": "something you can use or do instead of something else",
    "sentence": "A: Our customers keep asking for a greener option, but plastic boxes are still the cheapest way to ship our cookies, right? B: Not anymore, because I found a cheap {{BLANK}} made from recycled cardboard, and it protects the cookies just as well during long deliveries.",
    "cn": "A：我們的顧客一直要求更環保的選擇，但塑膠盒仍是運送餅乾最便宜的方式，對吧？ B：現在不是了，因為我找到一種用再生紙板製成的便宜【替代品】，在長途運送中保護餅乾的效果一樣好。"
  },
  {
    "word": "overuse",
    "pos": "v.",
    "cn_def": "過度使用",
    "en_def": "to use something too much",
    "sentence": "A: Why did the training manager remind everyone in the kitchen staff meeting to be careful with plastic gloves and wrap? B: She noticed that new employees often {{BLANK}} them, throwing away several pairs of gloves every hour, which wastes money and creates far too much garbage.",
    "cn": "A：訓練經理為什麼在廚房員工會議上提醒大家要小心使用塑膠手套和保鮮膜？ B：她注意到新員工常常【過度使用】它們，每小時丟掉好幾雙手套，既浪費錢又製造太多垃圾。"
  },
  {
    "word": "wasteful",
    "pos": "adj.",
    "cn_def": "浪費的",
    "en_def": "using more of something than is needed",
    "sentence": "A: Why did the new regional director cancel the order for printed plastic name badges for next month's sales conference? B: She said it was {{BLANK}} to make thousands of badges that people would throw away after two days, so we will use a free mobile app instead.",
    "cn": "A：新任區域總監為什麼取消了下個月業務會議要印製塑膠名牌的訂單？ B：她說製作數千個大家兩天後就會丟掉的名牌太【浪費】了，所以我們會改用免費的手機應用程式。"
  },
  {
    "word": "contaminate",
    "pos": "v.",
    "cn_def": "污染；弄髒",
    "en_def": "to make something dirty or unsafe by adding harmful things",
    "sentence": "A: Why did the water company send a warning letter to all the farms and factories along the northern river last week? B: Tests showed that plastic waste and chemicals could {{BLANK}} the drinking water supply, so businesses must stop throwing any trash near the riverbanks immediately.",
    "cn": "A：自來水公司上週為什麼寄警告信給北邊河流沿岸的所有農場和工廠？ B：檢測顯示塑膠廢棄物和化學物質可能會【污染】飲用水供應，所以企業必須立即停止在河岸附近丟棄任何垃圾。"
  },
  {
    "word": "dump",
    "pos": "v.",
    "cn_def": "傾倒；丟棄",
    "en_def": "to throw away trash in a careless or illegal way",
    "sentence": "A: Why did the police officer stop the delivery truck outside the empty field behind our factory yesterday evening? B: Someone reported that the driver tried to {{BLANK}} bags of plastic trash there illegally, so the company now faces a heavy fine and an investigation.",
    "cn": "A：昨天傍晚警察為什麼在我們工廠後面的空地外攔下那輛送貨卡車？ B：有人檢舉司機想在那裡非法【傾倒】一袋袋的塑膠垃圾，所以那家公司現在面臨高額罰款和調查。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；認識",
    "en_def": "knowing about and understanding a problem",
    "sentence": "A: Why does the school down the street invite speakers from environmental groups to talk to the students every month? B: The principal wants to raise {{BLANK}} about plastic pollution, so children understand how their daily choices affect the sea and can teach their parents better habits.",
    "cn": "A：街上那所學校為什麼每個月都邀請環保團體的講者來對學生演講？ B：校長想提高對塑膠污染的【意識】，讓孩子了解日常選擇如何影響海洋，並能教父母更好的習慣。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任",
    "en_def": "a duty to deal with or take care of something",
    "sentence": "A: Who should pay for collecting and processing the plastic boxes that our products are sold in at stores across the country? B: Under the new law, it is the manufacturer's {{BLANK}} to take back used packaging, so we need to set up a collection system with our retail partners soon.",
    "cn": "A：我們產品在全國商店販售時所用的塑膠盒，回收和處理的費用應該由誰支付？ B：根據新法，回收用過的包裝是製造商的【責任】，所以我們需要盡快與零售夥伴建立回收系統。"
  }
];

const MCQS = [
  {
    "q": "The cafeteria now weighs the food and plastic _____ it throws away each day. Managers hope the numbers will encourage staff to order less.",
    "options": [
      "waste",
      "campaign",
      "awareness",
      "alternative"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Air _____ from the factory chimneys has become a serious problem in the area. Residents have asked the city to inspect the plant.",
    "options": [
      "landfill",
      "packaging",
      "pollution",
      "container"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visitors who leave _____ on the beach will be fined two hundred dollars. Signs explaining the rule have been placed near every entrance.",
    "options": [
      "ecosystem",
      "litter",
      "campaign",
      "environment"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our office will _____ old computers by sending them to a company that removes useful metals. This service is free for local businesses.",
    "options": [
      "decompose",
      "contaminate",
      "ban",
      "recycle"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please put empty cans in the _____ bin next to the copy machine. The cleaning staff collects them every Friday afternoon.",
    "options": [
      "environment",
      "recycling",
      "awareness",
      "responsibility"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Most of the town's garbage is buried in a _____ about ten kilometers away. Officials say it will be full within three years.",
    "options": [
      "landfill",
      "ecosystem",
      "campaign",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The hospital must _____ used medical supplies at high temperatures to kill any germs. The ash is then taken to a safe disposal site.",
    "options": [
      "reuse",
      "overuse",
      "ban",
      "incinerate"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Food scraps _____ quickly in the garden compost bin during warm weather. Plastic wrappers, however, can stay in the soil for centuries.",
    "options": [
      "contaminate",
      "incinerate",
      "decompose",
      "dump"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The new shopping bags are _____, so they break down naturally within a few months. Customers can also use them as compost bags.",
    "options": [
      "biodegradable",
      "toxic",
      "wasteful",
      "marine"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Researchers found tiny pieces of plastic in bottled water from several brands. Each _____ was smaller than a grain of sand.",
    "options": [
      "container",
      "landfill",
      "microplastic",
      "ecosystem"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Plastic nets left in the sea kill thousands of _____ animals every year. Volunteers now remove old nets from the harbor each month.",
    "options": [
      "disposable",
      "marine",
      "sustainable",
      "wasteful"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Workers must wear masks when handling the _____ chemicals used to make cheap plastic. Breathing the fumes can cause serious health problems.",
    "options": [
      "biodegradable",
      "marine",
      "sustainable",
      "toxic"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The hotel no longer provides _____ razors and toothbrushes in its rooms. Guests can request reusable items from the front desk if needed.",
    "options": [
      "toxic",
      "disposable",
      "marine",
      "wasteful"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The company redesigned its _____ so that every box is made from recycled paper. The new design also uses less tape and no foam.",
    "options": [
      "packaging",
      "pollution",
      "awareness",
      "responsibility"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Customers who bring their own _____ to the deli receive a ten percent discount on salads. The store hopes this will cut plastic use.",
    "options": [
      "campaign",
      "landfill",
      "pollution",
      "container"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The new printers will help us _____ paper use by printing on both sides automatically. The IT department will install them next week.",
    "options": [
      "incinerate",
      "decompose",
      "reduce",
      "dump"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Guests who _____ their towels instead of asking for fresh ones help the hotel save water. A small card in each bathroom explains the program.",
    "options": [
      "reuse",
      "incinerate",
      "contaminate",
      "dump"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Several cities plan to _____ plastic bags in supermarkets starting next year. Shoppers will have to bring their own bags or buy paper ones.",
    "options": [
      "decompose",
      "incinerate",
      "ban",
      "overuse"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The marketing team launched a social media _____ to encourage customers to return empty bottles. More than five thousand people joined in the first week.",
    "options": [
      "landfill",
      "campaign",
      "pollution",
      "ecosystem"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "About fifty employees volunteered for the beach _____ last Saturday morning. They collected over two hundred kilograms of plastic trash in three hours.",
    "options": [
      "container",
      "landfill",
      "packaging",
      "cleanup"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Our new office building was designed to protect the _____ by using solar power and rainwater. It has won two national design awards.",
    "options": [
      "litter",
      "environment",
      "landfill",
      "packaging"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The oil spill damaged the delicate _____ of the bay, affecting fish, birds, and plants. Scientists expect recovery to take many years.",
    "options": [
      "ecosystem",
      "awareness",
      "packaging",
      "container"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The café only buys coffee from farms that use _____ methods to protect the soil and forests. Prices are slightly higher, but customers appreciate it.",
    "options": [
      "toxic",
      "disposable",
      "marine",
      "sustainable"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Bamboo toothbrushes are a popular _____ to plastic ones among environmentally aware shoppers. Sales have doubled at our stores this year.",
    "options": [
      "landfill",
      "campaign",
      "alternative",
      "pollution"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Doctors warn that people who _____ air conditioners waste energy and may feel tired more often. Setting the temperature at 26 degrees is recommended.",
    "options": [
      "overuse",
      "incinerate",
      "decompose",
      "ban"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Printing every email is _____ and costly, so the manager asked staff to read messages on screen. Paper use has dropped by half.",
    "options": [
      "biodegradable",
      "marine",
      "wasteful",
      "toxic"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Chemicals from the old factory may _____ the soil where the new park will be built. The city will test the ground before construction begins.",
    "options": [
      "recycle",
      "contaminate",
      "reuse",
      "decompose"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Companies that _____ waste into the river will face heavy fines under the new law. Inspectors will check the water every month.",
    "options": [
      "recycle",
      "reduce",
      "decompose",
      "dump"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The poster campaign aims to raise _____ of how plastic harms sea life. Copies will be displayed in train stations across the city.",
    "options": [
      "landfill",
      "awareness",
      "litter",
      "packaging"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Each department manager has _____ for making sure staff sort their trash correctly. Reports will be checked by the facilities team monthly.",
    "options": [
      "responsibility",
      "pollution",
      "packaging",
      "landfill"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "waste": {
    "pos": "n.",
    "en_def": "things that are thrown away because they are no longer useful",
    "cn_def": "廢棄物；垃圾"
  },
  "pollution": {
    "pos": "n.",
    "en_def": "dirty or harmful things in the air, water, or land",
    "cn_def": "污染"
  },
  "litter": {
    "pos": "n.",
    "en_def": "trash left on the ground in public places",
    "cn_def": "（公共場所的）垃圾"
  },
  "recycle": {
    "pos": "v.",
    "en_def": "to treat used things so they can be made into new things",
    "cn_def": "回收；再利用"
  },
  "recycling": {
    "pos": "n.",
    "en_def": "the process of making used things into new products",
    "cn_def": "資源回收"
  },
  "landfill": {
    "pos": "n.",
    "en_def": "a large area where trash is buried under the ground",
    "cn_def": "垃圾掩埋場"
  },
  "incinerate": {
    "pos": "v.",
    "en_def": "to burn something completely, especially trash",
    "cn_def": "焚化；焚燒"
  },
  "decompose": {
    "pos": "v.",
    "en_def": "to slowly break down and become part of the soil",
    "cn_def": "分解；腐爛"
  },
  "biodegradable": {
    "pos": "adj.",
    "en_def": "able to break down naturally without harming nature",
    "cn_def": "可生物分解的"
  },
  "microplastic": {
    "pos": "n.",
    "en_def": "a very tiny piece of plastic",
    "cn_def": "塑膠微粒；微塑膠"
  },
  "marine": {
    "pos": "adj.",
    "en_def": "connected with the sea and the things that live in it",
    "cn_def": "海洋的"
  },
  "ocean": {
    "pos": "n.",
    "en_def": "the very large area of salt water that covers most of the earth",
    "cn_def": "海洋"
  },
  "toxic": {
    "pos": "adj.",
    "en_def": "poisonous and harmful to people or nature",
    "cn_def": "有毒的"
  },
  "disposable": {
    "pos": "adj.",
    "en_def": "made to be used once and then thrown away",
    "cn_def": "拋棄式的；一次性的"
  },
  "packaging": {
    "pos": "n.",
    "en_def": "the boxes, bags, and wrapping that products are sold in",
    "cn_def": "包裝；包裝材料"
  },
  "container": {
    "pos": "n.",
    "en_def": "a box, bottle, or other object used to hold things",
    "cn_def": "容器"
  },
  "bottle": {
    "pos": "n.",
    "en_def": "a container with a narrow top for holding liquids",
    "cn_def": "瓶子"
  },
  "bag": {
    "pos": "n.",
    "en_def": "a soft container used for carrying things",
    "cn_def": "袋子"
  },
  "straw": {
    "pos": "n.",
    "en_def": "a thin tube used for drinking",
    "cn_def": "吸管"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller in amount or number",
    "cn_def": "減少"
  },
  "reuse": {
    "pos": "v.",
    "en_def": "to use something again instead of throwing it away",
    "cn_def": "重複使用"
  },
  "ban": {
    "pos": "v.",
    "en_def": "to officially say that something is not allowed",
    "cn_def": "禁止"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned set of activities to reach a goal",
    "cn_def": "活動；宣傳運動"
  },
  "cleanup": {
    "pos": "n.",
    "en_def": "an event or job of cleaning a place",
    "cn_def": "清潔活動；清理"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the natural world of land, water, air, plants, and animals",
    "cn_def": "環境"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the living things in an area and how they depend on each other",
    "cn_def": "生態系統"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue for a long time without harming nature",
    "cn_def": "永續的；可持續的"
  },
  "alternative": {
    "pos": "n.",
    "en_def": "something you can use or do instead of something else",
    "cn_def": "替代品；替代方案"
  },
  "overuse": {
    "pos": "v.",
    "en_def": "to use something too much",
    "cn_def": "過度使用"
  },
  "wasteful": {
    "pos": "adj.",
    "en_def": "using more of something than is needed",
    "cn_def": "浪費的"
  },
  "contaminate": {
    "pos": "v.",
    "en_def": "to make something dirty or unsafe by adding harmful things",
    "cn_def": "污染；弄髒"
  },
  "dump": {
    "pos": "v.",
    "en_def": "to throw away trash in a careless or illegal way",
    "cn_def": "傾倒；丟棄"
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowing about and understanding a problem",
    "cn_def": "意識；認識"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to deal with or take care of something",
    "cn_def": "責任"
  }
};

const EXTRA_GLOSSES = {};
