// Topic 294 Quiz Data: Pollution 污染
// Source word list: https://www.examword.com/group-topic/pollution — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T294 - Pollution 污染",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "contamination",
    "pos": "n.",
    "cn_def": "污染；汙染物",
    "en_def": "the state of being made dirty or harmful by something",
    "sentence": "A: Why did the restaurant manager close the kitchen early yesterday afternoon and send all the cooks home before the dinner rush? B: A health inspector found {{BLANK}} in the water tank behind the building, so nobody can prepare food until a plumber cleans the pipes and the water passes another test.",
    "cn": "A：為什麼餐廳經理昨天下午提早關閉廚房，並在晚餐尖峰時段前讓所有廚師回家？ B：衛生稽查員在建築物後方的水塔中發現了【污染】，所以在水電工清潔管線且水質再次通過檢測之前，沒有人可以準備食物。"
  },
  {
    "word": "emission",
    "pos": "n.",
    "cn_def": "排放；排放物",
    "en_def": "the act of sending out gas, heat, or smoke into the air",
    "sentence": "A: Why is the factory spending so much money on new machines this year when sales have been slow since the spring? B: The city introduced stricter rules on the {{BLANK}} of harmful gases, so the company must install cleaner equipment by December or pay a large fine every month.",
    "cn": "A：今年春天以來銷售一直不好，為什麼工廠今年還花這麼多錢買新機器？ B：市政府對有害氣體的【排放】制定了更嚴格的規定，所以公司必須在十二月前安裝更乾淨的設備，否則每個月都得繳一大筆罰款。"
  },
  {
    "word": "smog",
    "pos": "n.",
    "cn_def": "霧霾；煙霧",
    "en_def": "dirty air that looks like a mix of smoke and fog",
    "sentence": "A: Is the outdoor sales event in the city square still happening this Saturday, or should I tell our customers that it has been canceled? B: It has been moved indoors because the thick {{BLANK}} over downtown makes it hard to breathe, and the weather report says the air will stay dirty all weekend.",
    "cn": "A：這週六在市中心廣場的戶外促銷活動還會照常舉行嗎？還是我應該告訴客戶活動取消了？ B：活動改到室內舉行了，因為市中心上空濃厚的【霧霾】讓人呼吸困難，而且氣象報告說整個週末空氣都會很髒。"
  },
  {
    "word": "garbage",
    "pos": "n.",
    "cn_def": "垃圾",
    "en_def": "things such as old food and paper that people throw away",
    "sentence": "A: Why are there so many black bags piled up next to the back door of our office building this morning? B: The company that collects our {{BLANK}} did not come on Monday because of the holiday, so the cleaners stored everything outside until the truck returns tomorrow morning at seven.",
    "cn": "A：為什麼今天早上我們辦公大樓的後門旁堆了這麼多黑色袋子？ B：負責收我們【垃圾】的公司因為連假週一沒有來，所以清潔人員把所有東西暫時放在外面，直到明天早上七點垃圾車再來。"
  },
  {
    "word": "litter",
    "pos": "n.",
    "cn_def": "(公共場所的)垃圾；廢棄物",
    "en_def": "paper, cans, and other trash left on the ground in public places",
    "sentence": "A: Did the hotel guests complain about anything after the big music festival in the park next to our building last weekend? B: Yes, several guests said the paths were covered with {{BLANK}} such as cups and food wrappers, so the manager asked our staff to help the city clean the area.",
    "cn": "A：上週末我們大樓旁公園舉辦大型音樂節之後，飯店客人有抱怨什麼嗎？ B：有，好幾位客人說步道上滿是杯子和食物包裝紙之類的【垃圾】，所以經理請我們的員工協助市政府清理那個區域。"
  },
  {
    "word": "waste",
    "pos": "n.",
    "cn_def": "廢棄物；浪費",
    "en_def": "things that are thrown away because they are no longer useful",
    "sentence": "A: Why did the operations manager call a meeting with the kitchen staff right after lunch today? B: She noticed that we throw away too much food at the end of each day, so she wants everyone to cut {{BLANK}} by ordering smaller amounts and donating extra meals to a local shelter.",
    "cn": "A：為什麼營運經理今天午餐後立刻召集廚房員工開會？ B：她注意到我們每天結束時都丟掉太多食物，所以她希望大家透過訂購較少的量並把多餘的餐點捐給當地收容所來減少【浪費】。"
  },
  {
    "word": "sewage",
    "pos": "n.",
    "cn_def": "污水；下水道污物",
    "en_def": "dirty water and waste from toilets and drains",
    "sentence": "A: Why is the beach in front of our hotel closed to swimmers today, even though the weather is perfect and the guests are disappointed? B: A broken pipe released {{BLANK}} from the town into the sea last night, so health officials will test the water before anyone is allowed to swim again.",
    "cn": "A：今天天氣很好，客人們也很失望，為什麼我們飯店前面的海灘還是禁止游泳？ B：昨晚一條破裂的管線把鎮上的【污水】排進了海裡，所以衛生官員會先檢測海水，之後才會允許大家再下水游泳。"
  },
  {
    "word": "toxic",
    "pos": "adj.",
    "cn_def": "有毒的",
    "en_def": "poisonous and able to harm people, animals, or plants",
    "sentence": "A: Why are the workers in the paint department wearing masks and gloves when they usually work without them? B: The new cleaning product we ordered contains {{BLANK}} chemicals that can hurt your lungs and skin, so the safety officer made protective equipment required until we find a safer brand.",
    "cn": "A：為什麼油漆部門的員工今天戴著口罩和手套，他們平常工作時都不戴？ B：我們新訂購的清潔產品含有會傷害肺部和皮膚的【有毒的】化學物質，所以安全主管規定在找到更安全的品牌之前必須穿戴防護裝備。"
  },
  {
    "word": "hazardous",
    "pos": "adj.",
    "cn_def": "有害的；危險的",
    "en_def": "dangerous, especially to people's health or safety",
    "sentence": "A: Can I put these old batteries and empty paint cans in the normal trash bin next to the printer room? B: No, they count as {{BLANK}} materials, so you need to take them to the special collection point in the basement, where a licensed company picks them up every Friday afternoon.",
    "cn": "A：我可以把這些舊電池和空油漆罐丟進影印室旁邊的一般垃圾桶嗎？ B：不行，它們屬於【有害的】物質，所以你必須拿到地下室的特別回收點，那裡每週五下午會有一家合格的公司來收走。"
  },
  {
    "word": "industrial",
    "pos": "adj.",
    "cn_def": "工業的；產業的",
    "en_def": "related to factories and the making of goods",
    "sentence": "A: Why did the company decide to build the new warehouse so far from the city center instead of near our main office? B: The land in the {{BLANK}} zone outside town is much cheaper, and trucks can reach the highway quickly without driving through crowded neighborhoods or disturbing local residents.",
    "cn": "A：為什麼公司決定把新倉庫蓋在離市中心這麼遠的地方，而不是蓋在總公司附近？ B：鎮外【工業的】區域土地便宜得多，而且卡車可以很快開上高速公路，不用穿過擁擠的住宅區或打擾當地居民。"
  },
  {
    "word": "vehicle",
    "pos": "n.",
    "cn_def": "車輛；交通工具",
    "en_def": "a machine such as a car, bus, or truck that carries people or goods",
    "sentence": "A: Has the sales department decided which cars to buy for the staff who visit clients in the countryside every week? B: Yes, the manager chose an electric {{BLANK}} for each salesperson because it costs less to run and produces no dirty air, which matches our new environmental policy.",
    "cn": "A：業務部決定好要為每週去鄉下拜訪客戶的員工買哪些車了嗎？ B：決定了，經理為每位業務員選了一台電動【車輛】，因為它的使用成本較低而且不會排放髒空氣，符合我們新的環保政策。"
  },
  {
    "word": "exhaust",
    "pos": "n.",
    "cn_def": "廢氣；排氣",
    "en_def": "the gas that comes out of an engine when it runs",
    "sentence": "A: Why do you always keep the windows of the delivery office closed, even on warm afternoons when it gets really hot inside? B: The loading area is right below us, and the {{BLANK}} from the trucks waiting there with their engines running smells terrible and gives everyone a headache.",
    "cn": "A：為什麼你總是把配送辦公室的窗戶關著，即使在室內非常熱的溫暖下午也是？ B：裝卸區就在我們正下方，那些引擎沒熄火、在那裡等候的卡車排出的【廢氣】味道很難聞，讓大家都頭痛。"
  },
  {
    "word": "climate",
    "pos": "n.",
    "cn_def": "氣候",
    "en_def": "the usual weather conditions of a place over a long time",
    "sentence": "A: Why is the hotel chain building new resorts in the mountains instead of on the beaches like it did in the past? B: Because the {{BLANK}} is changing, summers near the coast are becoming too hot and stormy, so the company believes cooler mountain areas will attract more tourists in the future.",
    "cn": "A：為什麼這家連鎖飯店現在把新度假村蓋在山區，而不是像以前一樣蓋在海灘？ B：因為【氣候】正在改變，海岸附近的夏天變得太熱、暴風雨也多，所以公司認為較涼爽的山區未來會吸引更多遊客。"
  },
  {
    "word": "global warming",
    "pos": "n.phr.",
    "cn_def": "全球暖化",
    "en_def": "the slow rise in the earth's temperature caused by pollution",
    "sentence": "A: Why did our insurance company raise the price of flood protection for the warehouse by the river this year? B: Experts say {{BLANK}} is making sea levels rise and storms stronger, so insurers expect more damage along rivers and coasts and are charging businesses higher fees.",
    "cn": "A：為什麼我們的保險公司今年調高了河邊倉庫的防洪保費？ B：專家說【全球暖化】正讓海平面上升、暴風雨變強，所以保險公司預期河邊和海岸會有更多損害，因此向企業收取更高的費用。"
  },
  {
    "word": "greenhouse",
    "pos": "n.",
    "cn_def": "溫室",
    "en_def": "a glass building for plants; used in 'greenhouse gas' for gases that trap heat",
    "sentence": "A: Why does the report from the environmental team say our office building uses too much energy compared with others? B: Our old heating system burns a lot of gas, which releases {{BLANK}} gases into the air, so the team suggests switching to solar panels and better windows next year.",
    "cn": "A：為什麼環境小組的報告說我們的辦公大樓比其他大樓使用太多能源？ B：我們老舊的暖氣系統燃燒大量瓦斯，會把【溫室】氣體釋放到空氣中，所以小組建議明年改用太陽能板和更好的窗戶。"
  },
  {
    "word": "carbon",
    "pos": "n.",
    "cn_def": "碳",
    "en_def": "a chemical element; often used to mean carbon dioxide that pollutes the air",
    "sentence": "A: Why does the new travel policy ask us to take the train instead of flying to the branch office in the south? B: The company has promised to cut its {{BLANK}} footprint by half within five years, and short flights produce much more pollution than a comfortable train ride does.",
    "cn": "A：為什麼新的差旅政策要求我們搭火車而不是搭飛機去南部分公司？ B：公司承諾要在五年內把【碳】足跡減少一半，而短程航班產生的污染比舒適的火車旅程多得多。"
  },
  {
    "word": "deforestation",
    "pos": "n.",
    "cn_def": "森林砍伐",
    "en_def": "the cutting down of large areas of forest",
    "sentence": "A: Why did the furniture company stop buying wood from that cheap supplier, even though it saved a lot of money? B: Customers discovered that the supplier was cutting down huge areas of rain forest, and they were angry about the {{BLANK}}, so our managers chose a certified supplier instead.",
    "cn": "A：為什麼這家家具公司停止向那家便宜的供應商買木材，即使可以省很多錢？ B：顧客發現那家供應商砍伐了大片雨林，對這種【森林砍伐】非常憤怒，所以我們的經理改選了一家有認證的供應商。"
  },
  {
    "word": "recycle",
    "pos": "v.",
    "cn_def": "回收；再利用",
    "en_def": "to treat used things so that they can be made into new products",
    "sentence": "A: What should we do with all the old printer paper and cardboard boxes left in the storage room after the office move? B: Please put them in the blue bins near the elevator, because the building manager wants us to {{BLANK}} as much paper as possible instead of sending it to the dump.",
    "cn": "A：辦公室搬遷後，儲藏室裡留下的那些舊影印紙和紙箱要怎麼處理？ B：請把它們放進電梯旁的藍色回收桶，因為大樓管理員希望我們盡量【回收】紙張，而不是送到垃圾場。"
  },
  {
    "word": "reuse",
    "pos": "v.",
    "cn_def": "重複使用",
    "en_def": "to use something again instead of throwing it away",
    "sentence": "A: Why did the café stop giving customers paper cups for their coffee, and are people unhappy about the change? B: Most customers like it, because they can bring their own mugs and {{BLANK}} them every day, and the café gives them a small discount each time they do.",
    "cn": "A：為什麼咖啡店不再提供紙杯給客人裝咖啡？大家對這個改變不滿意嗎？ B：大部分客人都很喜歡，因為他們可以自己帶杯子並每天【重複使用】，而且每次這樣做咖啡店都會給他們一點折扣。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to make something smaller in amount or size",
    "sentence": "A: How is the hotel planning to save money on its electricity bills now that prices have gone up so much? B: The manager wants to {{BLANK}} energy use by installing motion sensors in the hallways, so the lights turn off automatically when no guests or workers are walking past.",
    "cn": "A：電價漲了這麼多，飯店打算怎麼節省電費？ B：經理想在走廊安裝感應器來【減少】能源使用，這樣沒有客人或員工經過時燈就會自動關掉。"
  },
  {
    "word": "renewable",
    "pos": "adj.",
    "cn_def": "可再生的",
    "en_def": "coming from a natural source that will not run out, like wind or sun",
    "sentence": "A: Why did the board vote to install solar panels on the roof of our factory, even though they were expensive? B: The directors believe {{BLANK}} energy will be cheaper than oil and gas in the long run, and our biggest customers prefer suppliers that use clean power.",
    "cn": "A：為什麼董事會投票決定在工廠屋頂安裝太陽能板，即使它們很昂貴？ B：董事們相信長期來看【可再生的】能源會比石油和天然氣便宜，而且我們最大的客戶比較喜歡使用乾淨電力的供應商。"
  },
  {
    "word": "conservation",
    "pos": "n.",
    "cn_def": "保育；保護",
    "en_def": "the protection of nature, animals, and plants",
    "sentence": "A: Why is the tour company asking every visitor to pay an extra fee when they enter the national park this season? B: The money goes to a {{BLANK}} program that protects rare birds and plants, and visitors seem happy to help because the guides explain clearly where the money is spent.",
    "cn": "A：為什麼這季旅行社要求每位遊客進入國家公園時多付一筆費用？ B：這筆錢會用於一項保護稀有鳥類和植物的【保育】計畫，而且導遊清楚說明了錢的用途，所以遊客似乎都很樂意幫忙。"
  },
  {
    "word": "ecosystem",
    "pos": "n.",
    "cn_def": "生態系統",
    "en_def": "all the plants and animals in an area and how they live together",
    "sentence": "A: Why did the city refuse to let our company build a new shopping center next to the wetlands near the airport? B: Officials said the construction would damage the local {{BLANK}}, because many fish, birds, and plants depend on the clean water there to survive throughout the year.",
    "cn": "A：為什麼市政府拒絕讓我們公司在機場附近的濕地旁蓋新的購物中心？ B：官員說施工會破壞當地的【生態系統】，因為許多魚類、鳥類和植物一整年都依賴那裡乾淨的水生存。"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "cn_def": "棲息地",
    "en_def": "the natural home of an animal or plant",
    "sentence": "A: Why has the construction of the new hotel by the lake been delayed for another three months? B: Scientists found that a rare kind of frog lives in the area, so the builders must create a new {{BLANK}} for the animals nearby before they can continue working on the site.",
    "cn": "A：為什麼湖邊新飯店的工程又延後了三個月？ B：科學家發現該區域住著一種稀有的青蛙，所以建商必須先在附近為這些動物打造一個新的【棲息地】，才能繼續在工地施工。"
  },
  {
    "word": "acid rain",
    "pos": "n.phr.",
    "cn_def": "酸雨",
    "en_def": "rain that has been made harmful by pollution in the air",
    "sentence": "A: Why does the old stone statue in front of the city museum look so damaged compared with the photos from fifty years ago? B: Pollution from nearby factories created {{BLANK}} for decades, which slowly ate away at the stone, so the museum is now raising money to repair it.",
    "cn": "A：為什麼市立博物館前面那座古老石像跟五十年前的照片相比看起來損壞得這麼嚴重？ B：附近工廠的污染數十年來造成了【酸雨】，慢慢侵蝕了石頭，所以博物館現在正在募款修復它。"
  },
  {
    "word": "oil spill",
    "pos": "n.phr.",
    "cn_def": "漏油事件",
    "en_def": "an accident in which oil pours into the sea or onto land",
    "sentence": "A: Why have the fishing companies along the coast stopped sending their boats out to sea this week? B: A tanker hit some rocks and caused a huge {{BLANK}} near the harbor, so the government has closed the fishing areas until the cleanup teams remove the black liquid from the water.",
    "cn": "A：為什麼海岸沿線的漁業公司這週都停止派船出海？ B：一艘油輪撞上岩石，在港口附近造成大規模的【漏油事件】，所以政府在清理小組把黑色液體從海水中清除之前關閉了漁區。"
  },
  {
    "word": "noise",
    "pos": "n.",
    "cn_def": "噪音",
    "en_def": "a loud or unpleasant sound",
    "sentence": "A: Why did so many employees ask to work from home on the days when the road outside is being repaired? B: The {{BLANK}} from the drilling machines is so loud that people cannot concentrate or hear each other on phone calls, and the workers will not finish until the end of next month.",
    "cn": "A：為什麼在外面道路施工的那幾天有這麼多員工要求在家工作？ B：鑽地機發出的【噪音】太大聲了，大家無法專心，講電話時也聽不清楚對方，而且工人要到下個月底才會完工。"
  },
  {
    "word": "radiation",
    "pos": "n.",
    "cn_def": "輻射",
    "en_def": "a form of energy that can be dangerous to health in large amounts",
    "sentence": "A: Why do the technicians in the hospital's X-ray department wear those heavy aprons whenever they take pictures of patients? B: The aprons block {{BLANK}}, which can be harmful if a person is exposed to it every day, so the hospital requires all staff to wear them and check their safety badges monthly.",
    "cn": "A：為什麼醫院X光部門的技術人員每次幫病人照相時都要穿那種很重的圍裙？ B：圍裙可以阻擋【輻射】，人如果每天接觸可能會有害，所以醫院規定所有員工都要穿，並每個月檢查他們的安全徽章。"
  },
  {
    "word": "plastic",
    "pos": "n.",
    "cn_def": "塑膠",
    "en_def": "a light, strong material made from chemicals, used for bags and bottles",
    "sentence": "A: Why did the supermarket change the packaging of its fresh fruit and vegetables last month? B: Many shoppers complained that too much {{BLANK}} was being thrown away after every trip to the store, so the company switched to paper bags and boxes that break down more easily.",
    "cn": "A：為什麼超市上個月更改了新鮮蔬果的包裝？ B：許多顧客抱怨每次去購物後都要丟掉太多【塑膠】，所以公司改用比較容易分解的紙袋和紙盒。"
  },
  {
    "word": "dump",
    "pos": "v.",
    "cn_def": "傾倒；丟棄",
    "en_def": "to throw away waste in a careless or illegal way",
    "sentence": "A: Why was the owner of that small chemical company fined so heavily by the government last week? B: Inspectors caught his workers trying to {{BLANK}} dangerous liquids into the river late at night instead of paying a licensed company to remove them safely from the factory.",
    "cn": "A：為什麼那家小型化學公司的老闆上週被政府重罰？ B：稽查人員抓到他的員工深夜試圖把危險液體【傾倒】進河裡，而不是付錢給合格的公司從工廠安全地清除。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep someone or something safe from harm",
    "sentence": "A: Why does the company give every new employee a reusable water bottle on their first day at work? B: Our managers want to {{BLANK}} the environment by cutting the number of plastic bottles we buy, and they hope the gift reminds staff that small daily choices really matter.",
    "cn": "A：為什麼公司在每位新員工第一天上班時都送一個可重複使用的水壺？ B：主管們想透過減少我們購買的塑膠瓶數量來【保護】環境，並希望這份禮物能提醒員工日常的小選擇真的很重要。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；認知",
    "en_def": "knowledge or understanding that something is important",
    "sentence": "A: Why is the marketing team putting posters about saving water and electricity in every hallway and meeting room? B: The company wants to raise {{BLANK}} among employees about how much energy we waste, because many people simply do not realize how quickly small habits add up.",
    "cn": "A：為什麼行銷團隊在每條走廊和會議室都張貼節約用水用電的海報？ B：公司想提高員工對我們浪費多少能源的【意識】，因為很多人根本沒發現小習慣累積起來有多快。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的；可持續的",
    "en_def": "able to continue for a long time without harming the environment",
    "sentence": "A: Why are more investors asking about our company's environmental plans during the annual shareholders' meeting this year? B: Many of them now only invest in businesses that grow in a {{BLANK}} way, which means using resources carefully so that future generations will still have clean air, water, and land.",
    "cn": "A：為什麼今年的年度股東大會上有更多投資人詢問我們公司的環保計畫？ B：他們之中很多人現在只投資以【永續的】方式成長的企業，也就是謹慎使用資源，讓未來世代仍然擁有乾淨的空氣、水和土地。"
  }
];

const MCQS = [
  {
    "q": "The laboratory found serious _____ in the drinking water supplied to the factory. Employees were told to use bottled water until further notice.",
    "options": [
      "contamination",
      "habitat",
      "awareness",
      "conservation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new engines will cut the _____ of harmful gases by thirty percent. The manufacturer hopes this will attract buyers who care about clean air.",
    "options": [
      "habitat",
      "awareness",
      "emission",
      "deforestation"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "A thick layer of _____ covered the city for three days. The airport delayed several flights because pilots could not see the runway clearly.",
    "options": [
      "sewage",
      "smog",
      "radiation",
      "litter"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The building manager reminded tenants to put their _____ out before Tuesday morning. The collection truck will not return until the following week.",
    "options": [
      "habitat",
      "emission",
      "radiation",
      "garbage"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Volunteers spent Saturday morning picking up _____ along the beach. They collected over two hundred bottles, cans, and food wrappers.",
    "options": [
      "smog",
      "radiation",
      "litter",
      "emission"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The restaurant reduced its food _____ by donating unsold meals to a local charity. The owner says the program also improved staff morale.",
    "options": [
      "waste",
      "habitat",
      "smog",
      "radiation"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The town is building a new _____ treatment plant near the river. Officials say it will keep dirty water from flowing into the sea.",
    "options": [
      "climate",
      "vehicle",
      "habitat",
      "sewage"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Workers must wear masks when handling these _____ chemicals. Breathing the fumes for even a few minutes can cause serious illness.",
    "options": [
      "renewable",
      "toxic",
      "sustainable",
      "comfortable"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Old batteries are classified as _____ waste and must not go in regular bins. A licensed company collects them every month.",
    "options": [
      "hazardous",
      "renewable",
      "sustainable",
      "grateful"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company moved its factory to the _____ park outside the city. The new location offers cheaper land and easy access to the highway.",
    "options": [
      "toxic",
      "renewable",
      "industrial",
      "sustainable"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Each salesperson will receive a company _____ for visiting clients in rural areas. Fuel costs will be paid by the accounting department.",
    "options": [
      "habitat",
      "vehicle",
      "emission",
      "ecosystem"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The mechanic said the black smoke from the _____ pipe means the engine needs repair. He recommended fixing it before the long delivery trip.",
    "options": [
      "habitat",
      "awareness",
      "conservation",
      "exhaust"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Scientists warn that the global _____ is changing faster than expected. Businesses near the coast are preparing for stronger storms and higher sea levels.",
    "options": [
      "habitat",
      "litter",
      "climate",
      "sewage"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Rising sea levels are one of the most serious effects of _____. Many coastal hotels are now building walls to protect their property.",
    "options": [
      "global warming",
      "acid rain",
      "oil spill",
      "radiation"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Large-scale _____ in the region has destroyed the homes of many wild animals. The government now limits how many trees companies may cut.",
    "options": [
      "emission",
      "radiation",
      "sewage",
      "deforestation"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Please _____ empty bottles and cans in the blue bins by the elevator. The building sends them to a processing center every week.",
    "options": [
      "protect",
      "recycle",
      "reduce",
      "pollute"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Guests who _____ their towels instead of asking for new ones help the hotel save water. Many travelers are happy to support this program.",
    "options": [
      "reuse",
      "protect",
      "dump",
      "reduce"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The company plans to _____ its energy use by twenty percent next year. Motion sensors will turn off lights in empty rooms.",
    "options": [
      "recycle",
      "reuse",
      "reduce",
      "dump"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The factory now gets half of its power from _____ sources such as wind and solar. Managers expect electricity costs to fall over time.",
    "options": [
      "toxic",
      "renewable",
      "hazardous",
      "industrial"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The park charges a small fee to support its wildlife _____ program. The money helps protect rare birds and their nesting areas.",
    "options": [
      "emission",
      "contamination",
      "radiation",
      "conservation"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Building a resort on the island could damage its fragile _____. Many plants and animals there exist nowhere else in the world.",
    "options": [
      "emission",
      "sewage",
      "ecosystem",
      "exhaust"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The construction company must create a new _____ for the frogs before building near the lake. The animals will be moved to a protected wetland.",
    "options": [
      "habitat",
      "emission",
      "smog",
      "exhaust"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Pollution from nearby power plants caused _____ that damaged the old stone buildings downtown. The city is now spending millions on repairs.",
    "options": [
      "global warming",
      "oil spill",
      "sewage",
      "acid rain"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The tanker accident caused a large _____ off the coast. Cleanup crews worked for weeks to remove the black liquid from the beaches.",
    "options": [
      "acid rain",
      "oil spill",
      "global warming",
      "smog"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Employees complained about the _____ from the construction site next door. The loud drilling made it hard to concentrate on phone calls.",
    "options": [
      "noise",
      "habitat",
      "awareness",
      "climate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Hospital staff wear special aprons to block _____ during X-ray exams. Their exposure levels are checked by the safety office every month.",
    "options": [
      "litter",
      "garbage",
      "radiation",
      "habitat"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The company was fined for trying to _____ chemical waste into the river at night. Inspectors had been watching the factory for weeks.",
    "options": [
      "reuse",
      "dump",
      "protect",
      "recycle"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Our new policy aims to _____ the environment by reducing paper use across all departments. Staff are encouraged to share documents online instead.",
    "options": [
      "dump",
      "reuse",
      "recycle",
      "protect"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The campaign aims to raise public _____ of the dangers of air pollution. Posters will appear in subway stations across the city.",
    "options": [
      "habitat",
      "exhaust",
      "awareness",
      "sewage"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Investors increasingly prefer companies with _____ business practices that protect natural resources for future generations. Our annual report highlights these efforts.",
    "options": [
      "sustainable",
      "toxic",
      "hazardous",
      "rural"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "contamination": {
    "pos": "n.",
    "en_def": "the state of being made dirty or harmful by something",
    "cn_def": "污染；汙染物"
  },
  "emission": {
    "pos": "n.",
    "en_def": "the act of sending out gas, heat, or smoke into the air",
    "cn_def": "排放；排放物"
  },
  "smog": {
    "pos": "n.",
    "en_def": "dirty air that looks like a mix of smoke and fog",
    "cn_def": "霧霾；煙霧"
  },
  "garbage": {
    "pos": "n.",
    "en_def": "things such as old food and paper that people throw away",
    "cn_def": "垃圾"
  },
  "litter": {
    "pos": "n.",
    "en_def": "paper, cans, and other trash left on the ground in public places",
    "cn_def": "(公共場所的)垃圾；廢棄物"
  },
  "waste": {
    "pos": "n.",
    "en_def": "things that are thrown away because they are no longer useful",
    "cn_def": "廢棄物；浪費"
  },
  "sewage": {
    "pos": "n.",
    "en_def": "dirty water and waste from toilets and drains",
    "cn_def": "污水；下水道污物"
  },
  "toxic": {
    "pos": "adj.",
    "en_def": "poisonous and able to harm people, animals, or plants",
    "cn_def": "有毒的"
  },
  "hazardous": {
    "pos": "adj.",
    "en_def": "dangerous, especially to people's health or safety",
    "cn_def": "有害的；危險的"
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "related to factories and the making of goods",
    "cn_def": "工業的；產業的"
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "a machine such as a car, bus, or truck that carries people or goods",
    "cn_def": "車輛；交通工具"
  },
  "exhaust": {
    "pos": "n.",
    "en_def": "the gas that comes out of an engine when it runs",
    "cn_def": "廢氣；排氣"
  },
  "climate": {
    "pos": "n.",
    "en_def": "the usual weather conditions of a place over a long time",
    "cn_def": "氣候"
  },
  "global warming": {
    "pos": "n.phr.",
    "en_def": "the slow rise in the earth's temperature caused by pollution",
    "cn_def": "全球暖化"
  },
  "greenhouse": {
    "pos": "n.",
    "en_def": "a glass building for plants; used in 'greenhouse gas' for gases that trap heat",
    "cn_def": "溫室"
  },
  "carbon": {
    "pos": "n.",
    "en_def": "a chemical element; often used to mean carbon dioxide that pollutes the air",
    "cn_def": "碳"
  },
  "deforestation": {
    "pos": "n.",
    "en_def": "the cutting down of large areas of forest",
    "cn_def": "森林砍伐"
  },
  "recycle": {
    "pos": "v.",
    "en_def": "to treat used things so that they can be made into new products",
    "cn_def": "回收；再利用"
  },
  "reuse": {
    "pos": "v.",
    "en_def": "to use something again instead of throwing it away",
    "cn_def": "重複使用"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller in amount or size",
    "cn_def": "減少；降低"
  },
  "renewable": {
    "pos": "adj.",
    "en_def": "coming from a natural source that will not run out, like wind or sun",
    "cn_def": "可再生的"
  },
  "conservation": {
    "pos": "n.",
    "en_def": "the protection of nature, animals, and plants",
    "cn_def": "保育；保護"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the plants and animals in an area and how they live together",
    "cn_def": "生態系統"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲息地"
  },
  "acid rain": {
    "pos": "n.phr.",
    "en_def": "rain that has been made harmful by pollution in the air",
    "cn_def": "酸雨"
  },
  "oil spill": {
    "pos": "n.phr.",
    "en_def": "an accident in which oil pours into the sea or onto land",
    "cn_def": "漏油事件"
  },
  "noise": {
    "pos": "n.",
    "en_def": "a loud or unpleasant sound",
    "cn_def": "噪音"
  },
  "radiation": {
    "pos": "n.",
    "en_def": "a form of energy that can be dangerous to health in large amounts",
    "cn_def": "輻射"
  },
  "plastic": {
    "pos": "n.",
    "en_def": "a light, strong material made from chemicals, used for bags and bottles",
    "cn_def": "塑膠"
  },
  "dump": {
    "pos": "v.",
    "en_def": "to throw away waste in a careless or illegal way",
    "cn_def": "傾倒；丟棄"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep someone or something safe from harm",
    "cn_def": "保護"
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowledge or understanding that something is important",
    "cn_def": "意識；認知"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue for a long time without harming the environment",
    "cn_def": "永續的；可持續的"
  }
};

const EXTRA_GLOSSES = {};
