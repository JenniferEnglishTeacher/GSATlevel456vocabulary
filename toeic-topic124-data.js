// Topic 124 Quiz Data: Environment 環境
// Source word list: https://www.examword.com/group-topic/environment — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T124 - Environment 環境",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "air pollution",
    "pos": "n.phr.",
    "cn_def": "空氣污染",
    "en_def": "dirty or harmful things in the air",
    "sentence": "A: Why did the city government ask all the factories near the river to reduce their working hours during the coming holiday week? B: Because {{BLANK}} has reached a dangerous level this month, and doctors say that children and older people may have trouble breathing if they stay outside too long.",
    "cn": "A：為什麼市政府要求河邊附近所有的工廠在即將到來的假期週減少工作時數？ B：因為這個月的【空氣污染】已經達到危險的程度，醫生說如果兒童和老人在戶外待太久，可能會呼吸困難。"
  },
  {
    "word": "noise pollution",
    "pos": "n.phr.",
    "cn_def": "噪音污染",
    "en_def": "loud, unpleasant sounds that disturb people",
    "sentence": "A: Have the employees on the third floor been complaining again about the construction work going on next to our office building? B: Yes, the {{BLANK}} from the drills and trucks starts at seven every morning, so several people have asked if they can work from home until the project is finished next month.",
    "cn": "A：三樓的員工又在抱怨我們辦公大樓旁邊正在進行的施工嗎？ B：是的，鑽孔機和卡車造成的【噪音污染】每天早上七點就開始了，所以有好幾個人詢問能否在下個月工程結束前在家工作。"
  },
  {
    "word": "marine pollution",
    "pos": "n.phr.",
    "cn_def": "海洋污染",
    "en_def": "harmful waste and chemicals in the sea",
    "sentence": "A: Why is our seafood restaurant changing its main supplier after working with the same fishing company for more than ten years? B: The manager read a report saying that {{BLANK}} near their fishing area has become serious, and she does not want to take any risks with the quality and safety of our dishes.",
    "cn": "A：我們的海鮮餐廳為什麼在跟同一家漁業公司合作十多年後要更換主要供應商？ B：經理看到一份報告說他們捕魚區附近的【海洋污染】變得很嚴重，她不想在我們菜餚的品質和安全上冒任何風險。"
  },
  {
    "word": "overpopulation",
    "pos": "n.",
    "cn_def": "人口過剩",
    "en_def": "too many people living in one place",
    "sentence": "A: Why are housing prices and rents in the capital rising so quickly, even though the government has built many new apartment buildings this year? B: Many experts believe that {{BLANK}} is the main reason, because more and more young people move there for jobs, and the city simply does not have enough space for everyone.",
    "cn": "A：為什麼首都的房價和房租漲得這麼快，即使政府今年已經蓋了很多新的公寓大樓？ B：許多專家認為【人口過剩】是主要原因，因為越來越多年輕人為了工作搬到那裡，而這座城市根本沒有足夠的空間容納所有人。"
  },
  {
    "word": "result",
    "pos": "n.",
    "cn_def": "結果",
    "en_def": "something that happens because of something else",
    "sentence": "A: Did the marketing team share the findings of the customer survey about our new recycling program at this morning's meeting? B: Yes, and the main {{BLANK}} was very encouraging, since almost eighty percent of the people who answered said they would be happy to return used bottles to our stores every week.",
    "cn": "A：行銷團隊在今天早上的會議中有分享關於我們新回收計畫的顧客調查發現嗎？ B：有，主要的【結果】非常令人鼓舞，因為幾乎百分之八十的受訪者表示他們很樂意每週把用過的瓶子拿回我們的門市。"
  },
  {
    "word": "drain",
    "pos": "v.",
    "cn_def": "排水；流掉",
    "en_def": "to flow away, or to make liquid flow away",
    "sentence": "A: Why is the maintenance crew working in the parking lot so late this evening, and when will we be allowed to use it again? B: After yesterday's heavy storm, the water could not {{BLANK}} away properly because the pipes were blocked with leaves, so they need to clear them before the morning shift arrives.",
    "cn": "A：為什麼維修人員今晚這麼晚還在停車場工作？我們什麼時候才能再使用停車場？ B：昨天的暴風雨過後，因為管子被落葉堵住，水無法正常【排】走，所以他們必須在早班人員抵達之前把管子清通。"
  },
  {
    "word": "oxygen",
    "pos": "n.",
    "cn_def": "氧氣",
    "en_def": "the gas in the air that people need to breathe",
    "sentence": "A: Why does the new office design include so many large plants in the hallways and meeting rooms on every floor of the building? B: The designer explained that plants add {{BLANK}} to the air and remove some harmful chemicals, so the staff should feel fresher and more focused during long working days.",
    "cn": "A：為什麼新的辦公室設計在大樓每層樓的走廊和會議室都放了這麼多大型植物？ B：設計師解釋說植物會為空氣增加【氧氣】並去除一些有害化學物質，所以員工在漫長的工作日裡應該會覺得更有精神、更專注。"
  },
  {
    "word": "carbon dioxide",
    "pos": "n.phr.",
    "cn_def": "二氧化碳",
    "en_def": "a gas that people and animals breathe out and that burning produces",
    "sentence": "A: What exactly does the new sensor on the meeting room wall measure, and why did the facilities team decide to install it last week? B: It measures the level of {{BLANK}} in the room, so when too many people breathe in a small space for hours, it reminds us to open the windows for fresh air.",
    "cn": "A：會議室牆上的新感測器到底在測量什麼？設施團隊為什麼上週決定安裝它？ B：它測量室內【二氧化碳】的濃度，所以當太多人在狹小的空間裡呼吸好幾個小時，它就會提醒我們打開窗戶讓新鮮空氣進來。"
  },
  {
    "word": "carbon emissions",
    "pos": "n.phr.",
    "cn_def": "碳排放",
    "en_def": "carbon gases sent into the air by cars, factories, etc.",
    "sentence": "A: Why has the company decided to replace all of its old delivery vans with electric vehicles over the next two years, even though they cost more? B: The board wants to cut our {{BLANK}} by half before 2030, and many of our biggest customers now prefer to work with suppliers that protect the environment.",
    "cn": "A：為什麼公司決定在未來兩年內把所有舊的送貨廂型車換成電動車，即使電動車比較貴？ B：董事會希望在2030年前把我們的【碳排放】減半，而且我們許多最大的客戶現在比較喜歡與保護環境的供應商合作。"
  },
  {
    "word": "climate change",
    "pos": "n.phr.",
    "cn_def": "氣候變遷",
    "en_def": "long-term changes in the Earth's weather and temperature",
    "sentence": "A: Why did the insurance company raise the price of our flood protection policy so much when we renewed the contract this spring? B: Their agent said that {{BLANK}} is causing stronger storms and heavier rain in our area every year, so the risk of serious damage to our warehouse is much higher now.",
    "cn": "A：今年春天續約時，保險公司為什麼把我們的防洪保單價格調漲這麼多？ B：他們的業務員說【氣候變遷】讓我們地區每年的暴風雨更強、雨量更大，所以我們倉庫遭受嚴重損害的風險現在高很多。"
  },
  {
    "word": "environmentally friendly",
    "pos": "adj.phr.",
    "cn_def": "環保的；對環境友善的",
    "en_def": "not harmful to the environment",
    "sentence": "A: Have you decided which cleaning company we should hire for the new office, since the two price offers we received are almost the same? B: I prefer the second one because all of their products are {{BLANK}}, and our staff have complained about the strong chemical smell left by the previous cleaners.",
    "cn": "A：既然我們收到的兩份報價幾乎一樣，你決定好新辦公室要雇用哪一家清潔公司了嗎？ B：我比較喜歡第二家，因為他們所有的產品都是【環保的】，而且我們的員工曾抱怨之前的清潔人員留下很重的化學味道。"
  },
  {
    "word": "waste disposal",
    "pos": "n.phr.",
    "cn_def": "廢棄物處理",
    "en_def": "the process of getting rid of garbage",
    "sentence": "A: Why is the restaurant's monthly operating cost so much higher than last year, even though our food and staff costs have stayed the same? B: The city introduced new rules for {{BLANK}}, so we now pay a private company to collect our kitchen garbage and used oil three times a week.",
    "cn": "A：為什麼餐廳每月的營運成本比去年高出這麼多，即使我們的食材和人事成本都沒變？ B：市政府推出了新的【廢棄物處理】規定，所以我們現在要付錢請一家民營公司每週三次來收廚餘和廢油。"
  },
  {
    "word": "combustion",
    "pos": "n.",
    "cn_def": "燃燒",
    "en_def": "the process of burning",
    "sentence": "A: Why did the factory safety officer ask everyone to move the boxes of paper away from the heating equipment in the storage room yesterday? B: He explained that the high temperature could cause {{BLANK}} if anything burnable stays too close to the machines, and a fire there would destroy most of our stock.",
    "cn": "A：工廠安全官昨天為什麼要求大家把紙箱搬離儲藏室的加熱設備？ B：他解釋說如果任何可燃物離機器太近，高溫可能引起【燃燒】，而那裡一旦發生火災會燒毀我們大部分的庫存。"
  },
  {
    "word": "automobiles",
    "pos": "n.",
    "cn_def": "汽車",
    "en_def": "cars",
    "sentence": "A: Why is the city planning to close the downtown shopping street to traffic every weekend starting next month? B: The mayor wants to reduce the number of {{BLANK}} in the busy center, so shoppers can walk safely, breathe cleaner air, and spend more time visiting the small local stores.",
    "cn": "A：為什麼市政府計畫從下個月開始每個週末封閉市中心購物街禁止車輛通行？ B：市長想減少繁忙市中心的【汽車】數量，讓購物者能安全地步行、呼吸更乾淨的空氣，並花更多時間逛當地的小商店。"
  },
  {
    "word": "potential",
    "pos": "adj.",
    "cn_def": "潛在的；可能的",
    "en_def": "possible in the future",
    "sentence": "A: Why did our team spend the whole afternoon visiting that small village outside the city instead of preparing the sales report? B: The director thinks it is a {{BLANK}} location for our new solar farm, because it gets lots of sunshine all year and the land there is quite cheap.",
    "cn": "A：為什麼我們團隊花了整個下午去參觀城外的那個小村莊，而不是準備銷售報告？ B：主管認為那裡是我們新太陽能發電廠的【潛在】地點，因為那裡全年日照充足，土地也相當便宜。"
  },
  {
    "word": "endanger",
    "pos": "v.",
    "cn_def": "危及；使瀕臨危險",
    "en_def": "to put someone or something in danger",
    "sentence": "A: Why did the local residents protest outside the city hall about the plan to build a new shopping mall near the lake last weekend? B: They believe the construction will {{BLANK}} the rare birds that live there, and they also worry that the extra traffic will make the quiet neighborhood much noisier.",
    "cn": "A：上週末當地居民為什麼在市政府外抗議在湖邊興建新購物中心的計畫？ B：他們認為施工會【危及】住在那裡的稀有鳥類，而且他們也擔心額外的車流會讓這個安靜的社區變得吵雜許多。"
  },
  {
    "word": "ecosystem",
    "pos": "n.",
    "cn_def": "生態系統",
    "en_def": "all the plants and animals in an area and how they live together",
    "sentence": "A: Why does the tour company ask visitors to stay on the wooden paths when they walk through the wetland park during the guided tour? B: The guide says the {{BLANK}} there is very delicate, and stepping on the plants can harm the insects, frogs, and birds that all depend on one another to survive.",
    "cn": "A：為什麼旅行社要求遊客在導覽行程中穿越濕地公園時要待在木棧道上？ B：導遊說那裡的【生態系統】非常脆弱，踩到植物可能會傷害昆蟲、青蛙和鳥類，而牠們都彼此依賴才能生存。"
  },
  {
    "word": "smog",
    "pos": "n.",
    "cn_def": "霧霾；煙霧",
    "en_def": "dirty air that looks like fog, found in cities",
    "sentence": "A: Why was this morning's outdoor sales event at the city park canceled at the last minute, after we had already set up all the tables? B: The government warned that thick {{BLANK}} would cover the city until the evening, so the organizers decided it was not safe for people to stand outside for hours.",
    "cn": "A：為什麼今天早上在市立公園的戶外促銷活動在我們已經擺好所有桌子之後臨時取消？ B：政府警告濃厚的【霧霾】會籠罩城市直到傍晚，所以主辦單位認為讓民眾在戶外站好幾個小時並不安全。"
  },
  {
    "word": "smoke",
    "pos": "n.",
    "cn_def": "煙",
    "en_def": "the gray or black gas that comes from something burning",
    "sentence": "A: Why did the fire alarm go off on the fifth floor during our training session this afternoon, and was anyone hurt? B: Nobody was hurt, but someone left toast in the machine in the staff kitchen, and the {{BLANK}} quickly filled the hallway, so everyone had to leave the building for twenty minutes.",
    "cn": "A：為什麼今天下午我們培訓課程期間五樓的火災警報響了？有人受傷嗎？ B：沒有人受傷，但有人把吐司留在員工廚房的機器裡，【煙】很快就充滿了走廊，所以大家必須離開大樓二十分鐘。"
  },
  {
    "word": "hazardous",
    "pos": "adj.",
    "cn_def": "有害的；危險的",
    "en_def": "dangerous, especially to health or safety",
    "sentence": "A: Why do the workers in the laboratory have to attend a special safety class before they can start their first day on the job? B: They will handle {{BLANK}} chemicals that can burn the skin or cause serious illness, so they must learn how to store, use, and throw them away correctly.",
    "cn": "A：為什麼實驗室的工作人員在開始第一天上班前必須參加特別的安全課程？ B：他們會處理可能灼傷皮膚或導致嚴重疾病的【有害的】化學物質，所以他們必須學會如何正確地存放、使用和丟棄這些物質。"
  },
  {
    "word": "chronic",
    "pos": "adj.",
    "cn_def": "慢性的；長期的",
    "en_def": "lasting for a long time",
    "sentence": "A: Why has the health insurance company started a new program that sends nurses to visit our older customers at home every month? B: Many of those customers suffer from {{BLANK}} health problems, such as heart disease or breathing trouble, and regular visits help them manage their conditions before they become serious.",
    "cn": "A：為什麼健康保險公司開始了一項新計畫，每個月派護士到我們年長客戶的家中拜訪？ B：那些客戶當中有許多人患有【慢性的】健康問題，例如心臟病或呼吸困難，定期拜訪可以幫助他們在病情變嚴重前控制病況。"
  },
  {
    "word": "estimate",
    "pos": "v.",
    "cn_def": "估計",
    "en_def": "to guess a number or amount carefully",
    "sentence": "A: How much money do you think the company will save after we install solar panels on the roof of the main factory next year? B: The engineers {{BLANK}} that we will cut our electricity bill by about thirty percent, but the exact amount will depend on the weather and how much we produce.",
    "cn": "A：你認為明年我們在主要工廠的屋頂上安裝太陽能板後，公司可以省下多少錢？ B：工程師【估計】我們的電費會減少大約百分之三十，但確切的金額將取決於天氣和我們的產量。"
  },
  {
    "word": "premature",
    "pos": "adj.",
    "cn_def": "過早的；提早的",
    "en_def": "happening too early",
    "sentence": "A: Why did the health department publish a new report about the air quality in our city's industrial areas this week? B: The report shows that dirty air causes thousands of {{BLANK}} deaths every year, so officials want factories to install better filters and use cleaner fuels as soon as possible.",
    "cn": "A：衛生部門這週為什麼發表一份關於我們城市工業區空氣品質的新報告？ B：報告顯示，骯髒的空氣每年造成數千人【過早的】死亡，所以官員希望工廠盡快安裝更好的過濾器並使用更乾淨的燃料。"
  },
  {
    "word": "deforestation",
    "pos": "n.",
    "cn_def": "森林砍伐",
    "en_def": "the cutting down of large areas of forest",
    "sentence": "A: Why did our furniture company stop buying wood from that supplier in South America, even though their prices were the lowest? B: We discovered that they were causing serious {{BLANK}} by clearing huge areas of rainforest, and our customers would be very upset if they knew we supported that.",
    "cn": "A：為什麼我們家具公司停止向那家南美洲的供應商購買木材，即使他們的價格最低？ B：我們發現他們砍伐大片雨林，造成嚴重的【森林砍伐】，如果顧客知道我們支持這種做法會非常不高興。"
  },
  {
    "word": "destroy",
    "pos": "v.",
    "cn_def": "摧毀；破壞",
    "en_def": "to damage something so badly that it cannot be used",
    "sentence": "A: Why is the farm owner so worried about the weather forecast for the coming weekend, when the harvest is almost finished? B: A strong typhoon is expected to hit the area on Saturday, and the heavy wind and rain could {{BLANK}} the remaining crops before the workers can pick them.",
    "cn": "A：既然收成快結束了，農場主人為什麼還那麼擔心這個週末的天氣預報？ B：預計週六會有強烈颱風侵襲這個地區，強風豪雨可能會在工人採收之前【摧毀】剩下的農作物。"
  },
  {
    "word": "destruction",
    "pos": "n.",
    "cn_def": "破壞；毀滅",
    "en_def": "very serious damage",
    "sentence": "A: Why did the environmental group send a letter to our company about the new hotel we are planning to build on the coast? B: They are worried about the {{BLANK}} of the beach and the coral reef nearby, so they want us to change the design and keep the building farther from the sea.",
    "cn": "A：為什麼環保團體寫信給我們公司，談我們計畫在海岸興建的新飯店？ B：他們擔心附近海灘和珊瑚礁遭到【破壞】，所以希望我們修改設計，讓建築物離海遠一點。"
  },
  {
    "word": "cutting down",
    "pos": "n.phr.",
    "cn_def": "砍伐；砍倒",
    "en_def": "the act of cutting trees so that they fall",
    "sentence": "A: Why are so many people in the neighborhood signing that petition at the community center this week? B: They want to stop the {{BLANK}} of the old trees along Park Avenue, because the city plans to widen the road there for more traffic and parking spaces.",
    "cn": "A：為什麼這週有這麼多社區居民在社區中心簽署那份請願書？ B：他們想阻止公園大道沿路老樹的【砍伐】，因為市政府計畫在那裡拓寬道路，以容納更多車流和停車位。"
  },
  {
    "word": "large scale",
    "pos": "n.phr.",
    "cn_def": "大規模",
    "en_def": "a very big size or level",
    "sentence": "A: Is the company still testing the new recycling machines in only one store, or are they planning to put them in every branch soon? B: After the successful trial, the managers decided to introduce them on a {{BLANK}} next year, so all our branches across the country will get two machines by June.",
    "cn": "A：公司還在只有一家門市測試新的回收機嗎？還是他們打算很快就在每家分店都放置？ B：試驗成功後，經理們決定明年【大規模】引進這些機器，所以全國所有分店在六月前都會有兩台機器。"
  },
  {
    "word": "affect",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to cause a change in someone or something",
    "sentence": "A: Why did the airline send all of us an email about our flight to Tokyo this evening, and do we need to change our plans? B: The volcanic ash in the sky may {{BLANK}} several flights in the region tonight, so we should check the website before leaving for the airport after work.",
    "cn": "A：航空公司為什麼寄電子郵件給我們所有人，說明今晚飛往東京的班機？我們需要改變計畫嗎？ B：天空中的火山灰今晚可能會【影響】該地區的幾個航班，所以我們下班後出發去機場前應該先查看網站。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "大氣層",
    "en_def": "the layer of gases around the Earth",
    "sentence": "A: Why did the science museum add a new section about space and the air around our planet to its main exhibition this year? B: The curator wants visitors to understand how the {{BLANK}} protects the Earth from the sun's strong rays and keeps the temperature comfortable enough for life.",
    "cn": "A：為什麼科學博物館今年在主要展覽中新增了一個關於太空和地球周圍空氣的展區？ B：策展人希望參觀者了解【大氣層】如何保護地球免受太陽強烈光線的傷害，並讓溫度保持在適合生命生存的範圍。"
  },
  {
    "word": "water cycle",
    "pos": "n.phr.",
    "cn_def": "水循環",
    "en_def": "the way water moves from the sea to the sky and back again",
    "sentence": "A: What topic will the science teachers cover during the summer camp that our company is sponsoring for the employees' children next month? B: They will explain the {{BLANK}}, showing the kids how rain falls, flows into rivers, rises into the sky again as vapor, and finally forms new clouds.",
    "cn": "A：下個月我們公司為員工子女贊助的夏令營中，科學老師會講什麼主題？ B：他們會講解【水循環】，讓孩子們了解雨如何落下、流入河川、再以水蒸氣的形式升上天空，最後形成新的雲。"
  },
  {
    "word": "biodiversity",
    "pos": "n.",
    "cn_def": "生物多樣性",
    "en_def": "the variety of plants and animals in a place",
    "sentence": "A: Why is the government giving money to farmers who leave small areas of their land wild instead of planting crops there? B: Officials want to increase {{BLANK}} in the countryside, because many kinds of bees, birds, and wild plants have disappeared in recent years, and farms need them to stay healthy.",
    "cn": "A：政府為什麼要補助那些保留一小塊土地讓它野生、而不種植作物的農民？ B：官員希望增加鄉村地區的【生物多樣性】，因為近年來許多種類的蜜蜂、鳥類和野生植物已經消失，而農場需要牠們才能保持健康。"
  },
  {
    "word": "species",
    "pos": "n.",
    "cn_def": "物種",
    "en_def": "a group of animals or plants of the same kind",
    "sentence": "A: Why are so many reporters and photographers waiting outside the zoo's main entrance so early this morning? B: The zoo is announcing the birth of a baby panda, which is great news because the {{BLANK}} is still rare in the wild, and the staff have worked hard for years to protect it.",
    "cn": "A：為什麼今天一大早有這麼多記者和攝影師在動物園正門外等候？ B：動物園要宣布一隻熊貓寶寶誕生了，這是個好消息，因為這個【物種】在野外仍然很稀少，工作人員多年來一直努力保護牠們。"
  },
  {
    "word": "remain",
    "pos": "v.",
    "cn_def": "維持；保持；留下",
    "en_def": "to stay in the same place or condition",
    "sentence": "A: Has the government finally decided when the beach near our hotel will reopen to tourists after the oil spill last month? B: Not yet, the beach will {{BLANK}} closed until the cleanup team removes all the oil from the sand, which could take at least three more weeks.",
    "cn": "A：上個月漏油事件後，政府終於決定我們飯店附近的海灘何時重新對遊客開放了嗎？ B：還沒有，在清理團隊把沙灘上的油全部清除之前，海灘將【維持】關閉，這可能至少還需要三個星期。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "A: Why did the developers change the location of the new golf course after the first plans were shown to the public last year? B: Scientists found that the original site was the natural {{BLANK}} of a rare kind of frog, so building there would have forced the animals to lose their home.",
    "cn": "A：為什麼開發商在去年公開首批計畫後更換了新高爾夫球場的地點？ B：科學家發現原本的地點是一種稀有青蛙的天然【棲息地】，所以在那裡興建會讓這些動物失去牠們的家。"
  },
  {
    "word": "absorb",
    "pos": "v.",
    "cn_def": "吸收",
    "en_def": "to take in liquid, gas, or heat",
    "sentence": "A: Why did the city plant thousands of new trees along the highways and around the industrial park this spring? B: Trees can {{BLANK}} harmful gases from the air and reduce noise from the traffic, so the people living nearby should enjoy cleaner air and quieter evenings.",
    "cn": "A：為什麼市政府今年春天在高速公路沿線和工業園區周圍種了好幾千棵新樹？ B：樹木可以【吸收】空氣中的有害氣體並減少交通噪音，所以住在附近的人應該能享受更乾淨的空氣和更安靜的夜晚。"
  },
  {
    "word": "give sth off",
    "pos": "v.phr.",
    "cn_def": "散發出；放出",
    "en_def": "to send out a smell, gas, heat, or light",
    "sentence": "A: Why did the office manager ask the cleaning staff to stop using that new floor polish in the meeting rooms after only one week? B: Like many cheap cleaning products, it can {{BLANK}} — in this case, a strong chemical smell — which causes headaches for some employees, so she wants them to return to the old product.",
    "cn": "A：為什麼辦公室經理在一週後就要求清潔人員停止在會議室使用那款新的地板蠟？ B：它容易【散發出】一股強烈的化學氣味，讓一些員工頭痛，所以她希望他們改回原本的產品。"
  },
  {
    "word": "soil erosion",
    "pos": "n.phr.",
    "cn_def": "土壤侵蝕",
    "en_def": "the loss of the top layer of earth because of wind or rain",
    "sentence": "A: Why are the workers placing large stones and planting grass along the hillside next to the new highway this month? B: The engineers want to prevent {{BLANK}}, because heavy summer rain could wash the earth down onto the road and cause dangerous accidents for drivers.",
    "cn": "A：為什麼工人這個月在新高速公路旁的山坡上放置大石頭並種草？ B：工程師想防止【土壤侵蝕】，因為夏季大雨可能會把泥土沖到路上，對駕駛人造成危險的意外。"
  },
  {
    "word": "expose",
    "pos": "v.",
    "cn_def": "使暴露於",
    "en_def": "to put someone in a situation where something can harm them",
    "sentence": "A: Why does the factory require every worker in the paint section to wear a mask and gloves, even for very short tasks? B: The managers do not want to {{BLANK}} anyone to the strong chemicals in the paint, since breathing them in or touching them can cause serious health problems later.",
    "cn": "A：為什麼工廠要求油漆部門的每位工人都要戴口罩和手套，即使是非常短的工作也一樣？ B：經理們不想讓任何人【暴露】在油漆中的強烈化學物質之下，因為吸入或接觸這些物質之後可能會導致嚴重的健康問題。"
  },
  {
    "word": "evaporate",
    "pos": "v.",
    "cn_def": "蒸發",
    "en_def": "to change from a liquid into a gas",
    "sentence": "A: Why does the water level in the hotel's outdoor swimming pool drop so quickly during the summer months, even when nobody is swimming? B: The hot sun makes a lot of the water {{BLANK}} every afternoon, so the maintenance staff have to refill the pool almost every other day.",
    "cn": "A：為什麼飯店戶外游泳池的水位在夏季月份下降得那麼快，即使沒有人在游泳？ B：炎熱的陽光每天下午都讓大量的池水【蒸發】，所以維修人員幾乎每隔一天就得把泳池補滿。"
  },
  {
    "word": "nutrients",
    "pos": "n.",
    "cn_def": "養分；營養素",
    "en_def": "substances that plants and animals need to grow",
    "sentence": "A: Why did the farm manager decide to buy that new organic fertilizer, even though it costs more than the one we used before? B: She tested the land and found that the soil had lost many of its {{BLANK}}, so the vegetables were growing smaller and the harvest was getting worse every year.",
    "cn": "A：為什麼農場經理決定購買那款新的有機肥料，即使它比我們以前用的貴？ B：她檢測了土地，發現土壤已經失去了許多【養分】，所以蔬菜長得越來越小，收成也一年比一年差。"
  },
  {
    "word": "reverse",
    "pos": "v.",
    "cn_def": "扭轉；使逆轉",
    "en_def": "to change something back to how it was before",
    "sentence": "A: Do you think the new rules on plastic bags will really help the sea, since so much damage has already been done over many years? B: Experts say we can still {{BLANK}} some of the damage if companies and shoppers work together, but it will take time, money, and a lot of patience.",
    "cn": "A：你認為新的塑膠袋規定真的能幫助海洋嗎？畢竟多年來已經造成了這麼多的破壞。 B：專家說如果企業和購物者共同努力，我們仍然可以【扭轉】部分的損害，但這需要時間、金錢和很大的耐心。"
  },
  {
    "word": "acid rain",
    "pos": "n.phr.",
    "cn_def": "酸雨",
    "en_def": "rain that contains harmful chemicals from factories and cars",
    "sentence": "A: Why does the old stone statue in front of the city library look so damaged, with parts of its face almost gone? B: For many years, {{BLANK}} caused by the smoke from nearby factories slowly ate away at the stone, so the city now plans to repair it and move it indoors.",
    "cn": "A：為什麼市立圖書館前那座古老的石雕像看起來損壞得這麼嚴重，臉的部分幾乎不見了？ B：多年來，附近工廠的煙所造成的【酸雨】慢慢地侵蝕了石頭，所以市政府現在計畫修復它並移到室內。"
  },
  {
    "word": "contain",
    "pos": "v.",
    "cn_def": "含有；包含",
    "en_def": "to have something inside",
    "sentence": "A: Why did the supermarket remove that brand of children's juice from all its shelves so suddenly this morning? B: A government test showed that the drinks {{BLANK}} too much sugar and a chemical that is not allowed, so the store wants to protect its customers until the problem is solved.",
    "cn": "A：為什麼超市今天早上突然把那個品牌的兒童果汁從所有貨架上撤下？ B：政府檢測顯示這些飲料【含有】過多的糖和一種不被允許的化學物質，所以在問題解決之前，商店想保護顧客。"
  },
  {
    "word": "particle",
    "pos": "n.",
    "cn_def": "微粒；顆粒",
    "en_def": "a very small piece of something",
    "sentence": "A: Why did the company buy expensive air cleaners for every office, even though the windows are usually kept closed? B: Even a very small {{BLANK}} of dust from the busy road outside can get through gaps in the windows, and the cleaners catch these before employees breathe them in during the long workday.",
    "cn": "A：為什麼公司幫每間辦公室都買了昂貴的空氣清淨機，即使窗戶通常都是關著的？ B：即使是外面繁忙道路上非常微小的一顆灰塵【微粒】也能從窗戶縫隙進來，而清淨機能在員工漫長的工作日中吸入之前把這些捕捉起來。"
  },
  {
    "word": "lung",
    "pos": "n.",
    "cn_def": "肺",
    "en_def": "one of the two organs in the chest used for breathing",
    "sentence": "A: Why did the doctor tell our sales director to stop jogging along the main road every morning before coming to the office? B: Her tests showed that one {{BLANK}} was not working as well as it should, and the dirty air from the traffic was making her breathing problems even worse.",
    "cn": "A：為什麼醫生要我們的業務總監停止每天早上進辦公室前沿著大馬路慢跑？ B：她的檢查顯示一邊的【肺】功能不如應有的好，而交通造成的骯髒空氣讓她的呼吸問題更加惡化。"
  },
  {
    "word": "seep",
    "pos": "v.",
    "cn_def": "滲出；滲入",
    "en_def": "to flow slowly through small holes or spaces",
    "sentence": "A: Why did the residents near the old gas station complain to the city about the water from their kitchen taps last month? B: Tests showed that oil from a broken underground tank had started to {{BLANK}} into the ground, and some of it had reached the pipes that carry drinking water to their homes.",
    "cn": "A：上個月為什麼舊加油站附近的居民向市政府投訴他們廚房水龍頭的水？ B：檢測顯示，一個破損的地下儲油槽裡的油已經開始【滲】入地下，有些已經流到輸送飲用水到他們家中的水管。"
  },
  {
    "word": "exhaust fumes",
    "pos": "n.phr.",
    "cn_def": "廢氣",
    "en_def": "the gases that come out of a car or engine",
    "sentence": "A: Why did the company decide to move the staff break area from the side of the building to the rooftop garden? B: The old break area was right next to the loading dock, and the {{BLANK}} from the delivery trucks made it unpleasant and unhealthy for people to sit there.",
    "cn": "A：為什麼公司決定把員工休息區從大樓側邊移到屋頂花園？ B：舊的休息區就在卸貨區旁邊，送貨卡車排放的【廢氣】讓人坐在那裡既不舒服又不健康。"
  },
  {
    "word": "fossil fuel",
    "pos": "n.phr.",
    "cn_def": "化石燃料",
    "en_def": "fuel such as coal, oil, or gas formed from old plants and animals",
    "sentence": "A: Why is the power company building so many wind turbines along the coast, and will it change our electricity bills? B: The company wants to depend less on coal, oil, and other kinds of {{BLANK}}, and prices may actually go down once the new turbines start producing power next year.",
    "cn": "A：為什麼電力公司沿著海岸興建這麼多風力發電機？這會改變我們的電費嗎？ B：公司希望減少對煤、石油和其他種類【化石燃料】的依賴，而且等新的發電機明年開始發電後，價格實際上可能會下降。"
  },
  {
    "word": "global warming",
    "pos": "n.phr.",
    "cn_def": "全球暖化",
    "en_def": "the slow rise in the Earth's temperature",
    "sentence": "A: Why did the ski resort decide to spend so much money on machines that make artificial snow this winter? B: Because of {{BLANK}}, the temperature in the mountains has risen over the past ten years, and there is not enough natural snow to keep the slopes open all season.",
    "cn": "A：為什麼滑雪度假村今年冬天決定花這麼多錢購買人工造雪機？ B：由於【全球暖化】，山區的氣溫在過去十年來上升了，自然降雪已經不足以讓雪道整季開放。"
  },
  {
    "word": "greenhouse effect",
    "pos": "n.phr.",
    "cn_def": "溫室效應",
    "en_def": "the warming of the Earth when gases trap the sun's heat",
    "sentence": "A: What did the speaker at this morning's environmental conference say about the rising temperatures around the world? B: She explained that the {{BLANK}} happens when certain gases trap the sun's heat near the Earth, and this process is getting stronger because we burn too much coal and oil.",
    "cn": "A：今天早上環境研討會的講者對全球氣溫上升說了什麼？ B：她解釋說，當某些氣體把太陽的熱困在地球附近時就會產生【溫室效應】，而這個過程正在加劇，因為我們燃燒了太多煤和石油。"
  },
  {
    "word": "natural disaster",
    "pos": "n.phr.",
    "cn_def": "天然災害",
    "en_def": "a flood, earthquake, storm, etc. that causes great damage",
    "sentence": "A: Why is the head office asking every branch to update its emergency plan and check its supplies of water and flashlights this month? B: After last year's earthquake, the managers want to make sure every office is ready if another {{BLANK}} like a flood or a typhoon hits suddenly.",
    "cn": "A：為什麼總公司這個月要求每家分公司更新緊急應變計畫，並檢查水和手電筒的庫存？ B：去年地震之後，主管們想確保萬一又有像水災或颱風這樣的【天然災害】突然來襲時，每間辦公室都已經做好準備。"
  },
  {
    "word": "recycle",
    "pos": "v.",
    "cn_def": "回收；再利用",
    "en_def": "to treat used things so they can be used again",
    "sentence": "A: What should we do with all the old printers and computer screens that are sitting in the storage room on the second floor? B: Please do not throw them in the garbage, because the city has a special center where we can {{BLANK}} electronic products for free, and they will reuse the metal parts.",
    "cn": "A：我們該怎麼處理二樓儲藏室裡所有的舊印表機和電腦螢幕？ B：請不要把它們丟進垃圾桶，因為市政府有一個特別的中心，我們可以在那裡免費【回收】電子產品，他們會再利用金屬零件。"
  },
  {
    "word": "poacher",
    "pos": "n.",
    "cn_def": "盜獵者",
    "en_def": "a person who illegally hunts animals",
    "sentence": "A: Why did the safari company hire extra guards for the national park, even though the number of tourists has dropped this year? B: Last month, a {{BLANK}} was caught trying to kill an elephant for its tusks, so the company wants to protect the animals and keep its guests safe.",
    "cn": "A：為什麼野生動物旅遊公司為國家公園增聘了額外的警衛，即使今年遊客人數已經減少？ B：上個月有一名【盜獵者】被抓到企圖為了象牙而殺害一頭大象，所以公司想保護動物並確保遊客的安全。"
  },
  {
    "word": "dry up",
    "pos": "v.phr.",
    "cn_def": "乾涸；枯竭",
    "en_def": "to become completely dry",
    "sentence": "A: Why are the farmers in the southern region asking the government for help with water supplies this summer? B: It has not rained for almost three months, and the farmers are afraid the river will {{BLANK}} completely before the rice is ready to harvest in August.",
    "cn": "A：為什麼南部地區的農民今年夏天要請求政府協助供水？ B：已經將近三個月沒下雨了，農民擔心河流會在八月稻米可以收割之前完全【乾涸】。"
  }
];

const MCQS = [
  {
    "q": "Many residents wear masks when they go outside in winter. The _____ in the city is worst when factories are busiest.",
    "options": [
      "air pollution",
      "water cycle",
      "biodiversity",
      "natural disaster"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel installed double windows in every guest room. This reduced the _____ from the busy airport nearby.",
    "options": [
      "acid rain",
      "soil erosion",
      "noise pollution",
      "marine pollution"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The cruise company no longer throws any trash into the ocean. It wants to help reduce _____ along popular tourist routes.",
    "options": [
      "soil erosion",
      "marine pollution",
      "noise pollution",
      "water cycle"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The company tested a new packaging design for six months. As a _____, it cut its plastic waste by forty percent.",
    "options": [
      "habitat",
      "species",
      "particle",
      "result"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The divers checked their tanks carefully before the tour began. Each tank held enough _____ for about one hour underwater.",
    "options": [
      "smog",
      "oxygen",
      "smoke",
      "nutrients"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The conference will focus on how businesses can adapt to _____. Speakers will discuss rising sea levels and extreme weather.",
    "options": [
      "climate change",
      "waste disposal",
      "soil erosion",
      "water cycle"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Our new shopping bags are made from recycled paper. Customers like them because they are _____ and strong.",
    "options": [
      "hazardous",
      "chronic",
      "premature",
      "environmentally friendly"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The new factory must follow strict safety rules. Any leak of chemicals could _____ the health of local residents.",
    "options": [
      "evaporate",
      "seep",
      "endanger",
      "recycle"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Visitors are asked not to feed the animals in the wetland. Human food can harm the balance of the local _____.",
    "options": [
      "ecosystem",
      "lung",
      "particle",
      "combustion"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "All _____ materials must be stored in locked cabinets. Only trained staff are allowed to open them.",
    "options": [
      "chronic",
      "premature",
      "hazardous",
      "potential"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new medical center offers support for patients with _____ illnesses. Many of them need care for the rest of their lives.",
    "options": [
      "hazardous",
      "chronic",
      "premature",
      "environmentally friendly"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Before signing the contract, the manager asked the builder to _____ the total cost. She needed the number for next year's budget.",
    "options": [
      "absorb",
      "evaporate",
      "seep",
      "estimate"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The paper company now plants two trees for every tree it uses. This program helps reduce _____ in the region.",
    "options": [
      "oxygen",
      "deforestation",
      "lung",
      "habitat"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The earthquake caused widespread _____ in the downtown area. Many office buildings will need major repairs before they reopen.",
    "options": [
      "destruction",
      "oxygen",
      "biodiversity",
      "habitat"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The heavy snow is expected to _____ train services tomorrow morning. Passengers should check the schedule before leaving home.",
    "options": [
      "absorb",
      "evaporate",
      "recycle",
      "affect"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Factories in the area release large amounts of gas into the _____. The government plans to set stricter limits next year.",
    "options": [
      "habitat",
      "lung",
      "atmosphere",
      "species"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The national park is home to more than two hundred bird _____. Many visitors come in spring to photograph them.",
    "options": [
      "species",
      "particle",
      "lung",
      "poacher"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The museum will _____ closed until the repairs are finished. Visitors can still buy tickets online for next month.",
    "options": [
      "absorb",
      "seep",
      "remain",
      "reverse"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The new highway will cut through the forest. Environmental groups say it will destroy the natural _____ of many animals.",
    "options": [
      "lung",
      "habitat",
      "atmosphere",
      "combustion"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "This special paper towel can _____ twice as much water as regular towels. It is popular with restaurants and hotels.",
    "options": [
      "endanger",
      "expose",
      "reverse",
      "absorb"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "Workers should not _____ their skin to strong sunlight for long periods. The company provides hats and sunscreen for outdoor staff.",
    "options": [
      "estimate",
      "expose",
      "reverse",
      "recycle"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "Keep the lid on the paint can when you take a break. Otherwise, the liquid will _____ and the paint will become too thick.",
    "options": [
      "evaporate",
      "endanger",
      "expose",
      "estimate"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "The new manager hopes to _____ the drop in sales from last year. She has introduced several changes to the marketing plan.",
    "options": [
      "absorb",
      "seep",
      "evaporate",
      "reverse"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "Please read the label before you buy this sauce. Some of the company's products _____ nuts, which can be dangerous for some customers.",
    "options": [
      "endanger",
      "reverse",
      "contain",
      "expose"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "The parking garage has large fans on every level. They remove _____ from cars and keep the air safe to breathe.",
    "options": [
      "exhaust fumes",
      "acid rain",
      "soil erosion",
      "water cycle"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "Coal is the most common _____ used by the power plant. The company plans to switch to solar energy within ten years.",
    "options": [
      "natural disaster",
      "water cycle",
      "fossil fuel",
      "climate change"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "The insurance policy covers damage from any _____, including floods and earthquakes. Customers should keep photos of their property for claims.",
    "options": [
      "fossil fuel",
      "natural disaster",
      "water cycle",
      "exhaust fumes"
    ],
    "answer": 1,
    "vocabIndex": 51
  },
  {
    "q": "Our office collects used paper in the blue boxes near the printers. A local company will _____ it into new notebooks.",
    "options": [
      "evaporate",
      "seep",
      "endanger",
      "recycle"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "Without rain this spring, the small lake behind the factory may _____. The company is looking for another water source.",
    "options": [
      "give sth off",
      "dry up",
      "show up",
      "take off"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "The sales team has found several _____ customers in the new market. They will contact each company next week.",
    "options": [
      "potential",
      "chronic",
      "hazardous",
      "premature"
    ],
    "answer": 0,
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "air pollution": {
    "pos": "n.phr.",
    "en_def": "dirty or harmful things in the air",
    "cn_def": "空氣污染"
  },
  "noise pollution": {
    "pos": "n.phr.",
    "en_def": "loud, unpleasant sounds that disturb people",
    "cn_def": "噪音污染"
  },
  "marine pollution": {
    "pos": "n.phr.",
    "en_def": "harmful waste and chemicals in the sea",
    "cn_def": "海洋污染"
  },
  "overpopulation": {
    "pos": "n.",
    "en_def": "too many people living in one place",
    "cn_def": "人口過剩"
  },
  "result": {
    "pos": "n.",
    "en_def": "something that happens because of something else",
    "cn_def": "結果"
  },
  "drain": {
    "pos": "v.",
    "en_def": "to flow away, or to make liquid flow away",
    "cn_def": "排水；流掉"
  },
  "oxygen": {
    "pos": "n.",
    "en_def": "the gas in the air that people need to breathe",
    "cn_def": "氧氣"
  },
  "carbon dioxide": {
    "pos": "n.phr.",
    "en_def": "a gas that people and animals breathe out and that burning produces",
    "cn_def": "二氧化碳"
  },
  "carbon emissions": {
    "pos": "n.phr.",
    "en_def": "carbon gases sent into the air by cars, factories, etc.",
    "cn_def": "碳排放"
  },
  "climate change": {
    "pos": "n.phr.",
    "en_def": "long-term changes in the Earth's weather and temperature",
    "cn_def": "氣候變遷"
  },
  "environmentally friendly": {
    "pos": "adj.phr.",
    "en_def": "not harmful to the environment",
    "cn_def": "環保的；對環境友善的"
  },
  "waste disposal": {
    "pos": "n.phr.",
    "en_def": "the process of getting rid of garbage",
    "cn_def": "廢棄物處理"
  },
  "combustion": {
    "pos": "n.",
    "en_def": "the process of burning",
    "cn_def": "燃燒"
  },
  "automobiles": {
    "pos": "n.",
    "en_def": "cars",
    "cn_def": "汽車"
  },
  "potential": {
    "pos": "adj.",
    "en_def": "possible in the future",
    "cn_def": "潛在的；可能的"
  },
  "endanger": {
    "pos": "v.",
    "en_def": "to put someone or something in danger",
    "cn_def": "危及；使瀕臨危險"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the plants and animals in an area and how they live together",
    "cn_def": "生態系統"
  },
  "smog": {
    "pos": "n.",
    "en_def": "dirty air that looks like fog, found in cities",
    "cn_def": "霧霾；煙霧"
  },
  "smoke": {
    "pos": "n.",
    "en_def": "the gray or black gas that comes from something burning",
    "cn_def": "煙"
  },
  "hazardous": {
    "pos": "adj.",
    "en_def": "dangerous, especially to health or safety",
    "cn_def": "有害的；危險的"
  },
  "chronic": {
    "pos": "adj.",
    "en_def": "lasting for a long time",
    "cn_def": "慢性的；長期的"
  },
  "estimate": {
    "pos": "v.",
    "en_def": "to guess a number or amount carefully",
    "cn_def": "估計"
  },
  "premature": {
    "pos": "adj.",
    "en_def": "happening too early",
    "cn_def": "過早的；提早的"
  },
  "deforestation": {
    "pos": "n.",
    "en_def": "the cutting down of large areas of forest",
    "cn_def": "森林砍伐"
  },
  "destroy": {
    "pos": "v.",
    "en_def": "to damage something so badly that it cannot be used",
    "cn_def": "摧毀；破壞"
  },
  "destruction": {
    "pos": "n.",
    "en_def": "very serious damage",
    "cn_def": "破壞；毀滅"
  },
  "cutting down": {
    "pos": "n.phr.",
    "en_def": "the act of cutting trees so that they fall",
    "cn_def": "砍伐；砍倒"
  },
  "large scale": {
    "pos": "n.phr.",
    "en_def": "a very big size or level",
    "cn_def": "大規模"
  },
  "affect": {
    "pos": "v.",
    "en_def": "to cause a change in someone or something",
    "cn_def": "影響"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the layer of gases around the Earth",
    "cn_def": "大氣層"
  },
  "water cycle": {
    "pos": "n.phr.",
    "en_def": "the way water moves from the sea to the sky and back again",
    "cn_def": "水循環"
  },
  "biodiversity": {
    "pos": "n.",
    "en_def": "the variety of plants and animals in a place",
    "cn_def": "生物多樣性"
  },
  "species": {
    "pos": "n.",
    "en_def": "a group of animals or plants of the same kind",
    "cn_def": "物種"
  },
  "remain": {
    "pos": "v.",
    "en_def": "to stay in the same place or condition",
    "cn_def": "維持；保持；留下"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲息地"
  },
  "absorb": {
    "pos": "v.",
    "en_def": "to take in liquid, gas, or heat",
    "cn_def": "吸收"
  },
  "give sth off": {
    "pos": "v.phr.",
    "en_def": "to send out a smell, gas, heat, or light",
    "cn_def": "散發出；放出"
  },
  "soil erosion": {
    "pos": "n.phr.",
    "en_def": "the loss of the top layer of earth because of wind or rain",
    "cn_def": "土壤侵蝕"
  },
  "expose": {
    "pos": "v.",
    "en_def": "to put someone in a situation where something can harm them",
    "cn_def": "使暴露於"
  },
  "evaporate": {
    "pos": "v.",
    "en_def": "to change from a liquid into a gas",
    "cn_def": "蒸發"
  },
  "nutrients": {
    "pos": "n.",
    "en_def": "substances that plants and animals need to grow",
    "cn_def": "養分；營養素"
  },
  "reverse": {
    "pos": "v.",
    "en_def": "to change something back to how it was before",
    "cn_def": "扭轉；使逆轉"
  },
  "acid rain": {
    "pos": "n.phr.",
    "en_def": "rain that contains harmful chemicals from factories and cars",
    "cn_def": "酸雨"
  },
  "contain": {
    "pos": "v.",
    "en_def": "to have something inside",
    "cn_def": "含有；包含"
  },
  "particle": {
    "pos": "n.",
    "en_def": "a very small piece of something",
    "cn_def": "微粒；顆粒"
  },
  "lung": {
    "pos": "n.",
    "en_def": "one of the two organs in the chest used for breathing",
    "cn_def": "肺"
  },
  "seep": {
    "pos": "v.",
    "en_def": "to flow slowly through small holes or spaces",
    "cn_def": "滲出；滲入"
  },
  "exhaust fumes": {
    "pos": "n.phr.",
    "en_def": "the gases that come out of a car or engine",
    "cn_def": "廢氣"
  },
  "fossil fuel": {
    "pos": "n.phr.",
    "en_def": "fuel such as coal, oil, or gas formed from old plants and animals",
    "cn_def": "化石燃料"
  },
  "global warming": {
    "pos": "n.phr.",
    "en_def": "the slow rise in the Earth's temperature",
    "cn_def": "全球暖化"
  },
  "greenhouse effect": {
    "pos": "n.phr.",
    "en_def": "the warming of the Earth when gases trap the sun's heat",
    "cn_def": "溫室效應"
  },
  "natural disaster": {
    "pos": "n.phr.",
    "en_def": "a flood, earthquake, storm, etc. that causes great damage",
    "cn_def": "天然災害"
  },
  "recycle": {
    "pos": "v.",
    "en_def": "to treat used things so they can be used again",
    "cn_def": "回收；再利用"
  },
  "poacher": {
    "pos": "n.",
    "en_def": "a person who illegally hunts animals",
    "cn_def": "盜獵者"
  },
  "dry up": {
    "pos": "v.phr.",
    "en_def": "to become completely dry",
    "cn_def": "乾涸；枯竭"
  }
};

const EXTRA_GLOSSES = {};
