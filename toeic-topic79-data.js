// Topic 79 Quiz Data: Consume 消費；消耗
// Source word list: https://www.examword.com/group-topic/consume — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T79 - Consume 消費；消耗",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "consumption",
    "pos": "n.",
    "cn_def": "消耗；消費量",
    "en_def": "the amount of something that is used",
    "sentence": "A: Why did the factory manager ask everyone to turn off their computers and the lights before leaving the office every evening this month? B: Our electricity bill rose by almost twenty percent last quarter, so the company wants to reduce energy {{BLANK}} and save money before the new budget starts in January.",
    "cn": "A：為什麼工廠經理這個月要求大家每天晚上離開辦公室前都關掉電腦和電燈？ B：我們上一季的電費上漲了將近百分之二十，所以公司希望在一月新預算開始前減少能源【消耗】並省錢。"
  },
  {
    "word": "consumer",
    "pos": "n.",
    "cn_def": "消費者",
    "en_def": "a person who buys goods or services",
    "sentence": "A: What did the marketing team learn from the online survey that they sent to our customers after the summer sale? B: They found that the average {{BLANK}} now compares prices on at least three websites before buying anything, so we need to make our online store faster and our prices clearer.",
    "cn": "A：行銷團隊從暑期特賣後寄給顧客的線上問卷中得到了什麼結論？ B：他們發現一般【消費者】現在買任何東西前都會在至少三個網站比價，所以我們需要讓線上商店更快、價格更清楚。"
  },
  {
    "word": "consumable",
    "pos": "adj.",
    "cn_def": "消耗性的",
    "en_def": "used up and needing to be bought again",
    "sentence": "A: Why does the office manager check the supply room every Friday afternoon before she goes home? B: She makes a list of {{BLANK}} items such as printer ink, paper, coffee and cleaning products, because the department runs out of them quickly and she must order more before Monday morning.",
    "cn": "A：為什麼辦公室經理每週五下午回家前都要檢查儲藏室？ B：她會列出【消耗性】物品的清單，例如印表機墨水、紙張、咖啡和清潔用品，因為部門很快就會用完，她必須在週一早上前訂購更多。"
  },
  {
    "word": "ingest",
    "pos": "v.",
    "cn_def": "攝入；吞下",
    "en_def": "to take food, drink or another substance into the body",
    "sentence": "A: Why are the workers in the chemical plant required to wear masks and gloves all day, even when the weather is very hot? B: The safety officer explained that some of the powders are dangerous, and workers could accidentally {{BLANK}} small amounts if they touch their mouths or breathe the dust.",
    "cn": "A：為什麼化學工廠的工人整天都必須戴口罩和手套，即使天氣非常炎熱？ B：安全主管解釋說，有些粉末很危險，如果工人碰到嘴巴或吸入粉塵，可能會不小心【攝入】少量。"
  },
  {
    "word": "devour",
    "pos": "v.",
    "cn_def": "狼吞虎嚥",
    "en_def": "to eat something quickly because you are very hungry",
    "sentence": "A: How was the lunch meeting with the new sales team at the Italian restaurant near the station yesterday? B: It went well, although everyone was so hungry after the long morning training that they started to {{BLANK}} the pizzas as soon as the waiter put them on the table.",
    "cn": "A：昨天和新業務團隊在車站附近義大利餐廳的午餐會議如何？ B：很順利，不過經過一整個早上的長時間訓練大家都很餓，服務生一把披薩放上桌，他們就開始【狼吞虎嚥】。"
  },
  {
    "word": "eat",
    "pos": "v.",
    "cn_def": "吃；用餐",
    "en_def": "to put food in your mouth and swallow it",
    "sentence": "A: Why do so many staff members leave the building at noon instead of having lunch in the company cafeteria on the third floor? B: Most of them prefer to {{BLANK}} at the small noodle shop across the street, because the food is cheaper, the portions are bigger, and they can relax away from their desks for an hour.",
    "cn": "A：為什麼這麼多員工中午都離開大樓，而不在三樓的公司餐廳吃午餐？ B：他們大多數比較喜歡在對街的小麵店【吃飯】，因為食物比較便宜、份量比較大，而且可以離開辦公桌放鬆一個小時。"
  },
  {
    "word": "drink",
    "pos": "v.",
    "cn_def": "喝；飲用",
    "en_def": "to take liquid into your mouth and swallow it",
    "sentence": "A: Why did the doctor at the company health check tell you to change your habits at work? B: She said I should {{BLANK}} more water during the day instead of so much coffee, because I often feel tired and get headaches in the afternoon while I am sitting at my computer.",
    "cn": "A：為什麼公司健康檢查的醫生要你改變工作時的習慣？ B：她說我白天應該【喝】更多水，而不是喝那麼多咖啡，因為我下午坐在電腦前時常覺得疲倦和頭痛。"
  },
  {
    "word": "absorb",
    "pos": "v.",
    "cn_def": "吸收",
    "en_def": "to take in liquid, sound, heat or information",
    "sentence": "A: Why did the hotel decide to replace all the old carpets in the conference rooms on the second floor last month? B: The new carpets {{BLANK}} noise much better, so guests in the nearby rooms are no longer disturbed when large groups hold meetings or parties in the evening.",
    "cn": "A：為什麼飯店上個月決定更換二樓會議室所有的舊地毯？ B：新地毯【吸收】噪音的效果好得多，所以當大型團體晚上舉行會議或派對時，附近房間的客人不會再被打擾。"
  },
  {
    "word": "utilize",
    "pos": "v.",
    "cn_def": "利用；使用",
    "en_def": "to use something in a practical and useful way",
    "sentence": "A: How is the new manager planning to improve the warehouse without hiring more workers or buying more machines this year? B: She wants to {{BLANK}} the empty space at the back of the building more effectively, so she is adding tall shelves and a better labeling system to store more products.",
    "cn": "A：新經理打算如何在今年不增聘工人、不添購機器的情況下改善倉庫？ B：她想更有效地【利用】大樓後方的空間，所以正在增加高的貨架和更好的標籤系統，以存放更多產品。"
  },
  {
    "word": "use",
    "pos": "v.",
    "cn_def": "使用；用",
    "en_def": "to do something with an object or method for a purpose",
    "sentence": "A: Our printer on the fifth floor stopped working again this morning, so what should I do with the contract that the client needs by noon? B: You can {{BLANK}} the new color printer in the meeting room next to the elevator, but remember to enter your staff code first so the system can record the copies.",
    "cn": "A：五樓的印表機今天早上又壞了，客戶中午前需要的合約我該怎麼辦？ B：你可以【使用】電梯旁會議室裡的新彩色印表機，但記得先輸入你的員工代碼，這樣系統才能記錄影印張數。"
  },
  {
    "word": "expend",
    "pos": "v.",
    "cn_def": "耗費；花費",
    "en_def": "to use time, money or effort to do something",
    "sentence": "A: Why does the sales director look so tired after the trade fair in Singapore last week? B: She had to {{BLANK}} a great deal of time and effort meeting more than sixty possible buyers in three days, and she also gave two long presentations about our new products.",
    "cn": "A：為什麼業務總監上週參加新加坡貿易展後看起來那麼疲倦？ B：她必須在三天內【耗費】大量時間和精力與六十多位潛在買家會面，而且還做了兩場關於我們新產品的長篇簡報。"
  },
  {
    "word": "exhaust",
    "pos": "v.",
    "cn_def": "用盡；耗盡",
    "en_def": "to use all of something so that none is left",
    "sentence": "A: Why did the project team ask the finance department for extra money only two months after the project started? B: The unexpected repairs to the old building will {{BLANK}} most of the original budget by next month, so they need more funds to finish the work on time and pay the contractors.",
    "cn": "A：為什麼專案團隊在專案開始僅兩個月後就向財務部要求額外資金？ B：舊大樓意外的維修費用到下個月就會【用光】大部分的原始預算，所以他們需要更多資金來準時完工並支付承包商。"
  },
  {
    "word": "deplete",
    "pos": "v.",
    "cn_def": "耗盡；大量減少",
    "en_def": "to reduce the amount of something until little is left",
    "sentence": "A: Why has the hotel restaurant stopped serving fresh tuna on its dinner menu this season? B: The chef read a report that overfishing could {{BLANK}} the tuna population in the Pacific within a few years, so he decided to offer local fish that are easier to find and protect.",
    "cn": "A：為什麼飯店餐廳這一季的晚餐菜單停止供應新鮮鮪魚？ B：主廚讀到一份報告指出，過度捕撈可能在幾年內【耗盡】太平洋的鮪魚數量，所以他決定改供應較容易取得、也較能保護的當地魚類。"
  },
  {
    "word": "waste",
    "pos": "v.",
    "cn_def": "浪費",
    "en_def": "to use something badly or more than you need",
    "sentence": "A: Why did the manager cancel the weekly meeting that usually takes place every Monday morning at nine? B: He said we {{BLANK}} too much time discussing the same small problems every week, so now each team will send a short written report by email instead.",
    "cn": "A：為什麼經理取消了通常每週一早上九點舉行的週會？ B：他說我們每週都【浪費】太多時間討論同樣的小問題，所以現在每個團隊改為用電子郵件寄一份簡短的書面報告。"
  },
  {
    "word": "spend",
    "pos": "v.",
    "cn_def": "花費（金錢、時間）",
    "en_def": "to use money to pay for things; to pass time",
    "sentence": "A: How much does the company plan to invest in the new training program for the customer service staff next year? B: The board agreed to {{BLANK}} about fifty thousand dollars on online courses and workshops, because they believe better training will reduce complaints and help us keep more customers.",
    "cn": "A：公司明年打算在客服人員的新訓練計畫上投資多少錢？ B：董事會同意在線上課程和工作坊上【花費】大約五萬美元，因為他們相信更好的訓練能減少客訴，並幫助我們留住更多顧客。"
  },
  {
    "word": "purchase",
    "pos": "v.",
    "cn_def": "購買",
    "en_def": "to buy something",
    "sentence": "A: Why are so many people waiting outside the electronics store at seven o'clock on a Saturday morning? B: The store is offering half price on laptops for the first hundred customers, so people want to {{BLANK}} a new computer before the sale ends and the prices go back up.",
    "cn": "A：為什麼週六早上七點會有那麼多人在電子產品店外等候？ B：這家店對前一百名顧客提供筆電半價優惠，所以大家想在特價結束、價格回升前【購買】一台新電腦。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "取得；收購",
    "en_def": "to get or buy something, such as a company",
    "sentence": "A: Why did the small software company suddenly hire twenty new engineers and move to a bigger office downtown? B: A large international firm plans to {{BLANK}} the company next spring, so it is growing quickly and preparing to develop more products for customers in Europe and Asia.",
    "cn": "A：為什麼那家小型軟體公司突然雇用二十名新工程師，並搬到市中心更大的辦公室？ B：一家大型國際企業計畫明年春天【收購】這家公司，所以它正在快速成長，並準備為歐洲和亞洲的客戶開發更多產品。"
  },
  {
    "word": "intake",
    "pos": "n.",
    "cn_def": "攝取量",
    "en_def": "the amount of food or drink that you take in",
    "sentence": "A: Why did the company nurse suggest changes to the snacks that are sold in the vending machines on every floor? B: Many employees sit at their desks all day, and she wants to help them lower their daily sugar {{BLANK}} by offering fruit, nuts and yogurt instead of candy and soda.",
    "cn": "A：為什麼公司護理師建議更改每層樓自動販賣機裡販售的零食？ B：許多員工整天坐在辦公桌前，她希望提供水果、堅果和優格來取代糖果和汽水，幫助他們降低每日的糖分【攝取量】。"
  },
  {
    "word": "digestion",
    "pos": "n.",
    "cn_def": "消化",
    "en_def": "the process of breaking down food in the body",
    "sentence": "A: Why does your manager always take a short walk around the park after lunch, even when he is very busy? B: He says that walking for fifteen minutes helps his {{BLANK}}, so he does not feel heavy and sleepy during the long meetings that usually start at two o'clock.",
    "cn": "A：為什麼你的經理午餐後總是在公園散步一下，即使他很忙？ B：他說散步十五分鐘有助於他的【消化】，所以在通常兩點開始的冗長會議中，他不會覺得肚子脹、昏昏欲睡。"
  },
  {
    "word": "appetite",
    "pos": "n.",
    "cn_def": "食慾；胃口；渴望",
    "en_def": "the wish to eat; a strong wish for something",
    "sentence": "A: How did the new marketing campaign for our frozen meals perform in the first three months? B: It was very successful, because the colorful photos of hot food really increased customers' {{BLANK}} for our products, and our sales in supermarkets went up by thirty percent.",
    "cn": "A：我們冷凍餐點的新行銷活動在前三個月表現如何？ B：非常成功，因為熱騰騰食物的繽紛照片真的提升了顧客對我們產品的【胃口】，我們在超市的銷售量增加了百分之三十。"
  },
  {
    "word": "gluttony",
    "pos": "n.",
    "cn_def": "暴飲暴食；貪吃",
    "en_def": "the habit of eating and drinking too much",
    "sentence": "A: Why did the restaurant critic give the new all-you-can-eat buffet such a negative review in the magazine? B: She wrote that the place encourages {{BLANK}} rather than good taste, because guests pile huge amounts of food on their plates and then throw much of it away.",
    "cn": "A：為什麼餐廳評論家在雜誌上給新開的吃到飽自助餐這麼負面的評價？ B：她寫道那個地方鼓勵的是【暴飲暴食】而不是好品味，因為客人把大量食物堆在盤子上，然後又丟掉很多。"
  },
  {
    "word": "voracious",
    "pos": "adj.",
    "cn_def": "貪婪的；求知若渴的",
    "en_def": "wanting a lot of food or a lot of something",
    "sentence": "A: Why is the new intern always the first person to finish the reports and manuals that the manager hands out? B: She is a {{BLANK}} reader who often reads two or three business books every week, so she can understand long documents quickly and remember the important details.",
    "cn": "A：為什麼新來的實習生總是第一個讀完經理發下來的報告和手冊？ B：她是個【求知若渴的】讀者，常常每週讀兩三本商業書籍，所以能快速理解長篇文件並記住重要細節。"
  },
  {
    "word": "edible",
    "pos": "adj.",
    "cn_def": "可食用的",
    "en_def": "safe or good enough to eat",
    "sentence": "A: What did the catering company use to decorate the cake for the director's retirement party last Friday? B: They covered it with {{BLANK}} flowers made from sugar and colored chocolate, so the guests could enjoy every part of the cake and nothing had to be thrown away.",
    "cn": "A：外燴公司上週五用什麼來裝飾總監退休派對的蛋糕？ B：他們用糖和彩色巧克力做成的【可食用的】花朵覆蓋蛋糕，所以客人可以享用蛋糕的每一部分，沒有任何東西需要丟掉。"
  },
  {
    "word": "potable",
    "pos": "adj.",
    "cn_def": "可飲用的",
    "en_def": "(of water) clean and safe to drink",
    "sentence": "A: Why does the construction company need to bring large water tanks to the new building site outside the city? B: There is no {{BLANK}} water in the area yet, so the workers need clean water for drinking and cooking until the local government connects the site to the main pipes.",
    "cn": "A：為什麼建設公司需要把大型水箱運到城外的新工地？ B：那個地區還沒有【可飲用的】水，所以在地方政府把工地接上主要水管之前，工人需要乾淨的水來飲用和煮飯。"
  },
  {
    "word": "disposable",
    "pos": "adj.",
    "cn_def": "用完即丟的；一次性的",
    "en_def": "made to be used once and then thrown away",
    "sentence": "A: Why did the café near our office start charging customers ten dollars extra for each cup this month? B: The city introduced a new rule to reduce plastic waste, so shops must charge for {{BLANK}} cups, and customers who bring their own mugs now get a small discount.",
    "cn": "A：為什麼我們辦公室附近的咖啡館這個月開始每杯向顧客多收十元？ B：市政府推出減少塑膠垃圾的新規定，所以商店必須對【一次性】杯子收費，而自備杯子的顧客現在可以享有小折扣。"
  },
  {
    "word": "recyclable",
    "pos": "adj.",
    "cn_def": "可回收的",
    "en_def": "able to be processed and used again",
    "sentence": "A: Why did our company change the packaging for all of its skin care products this year? B: Many customers complained that the old boxes were too heavy and full of plastic, so we switched to {{BLANK}} paper packaging that people can put in the blue bins at home.",
    "cn": "A：為什麼我們公司今年更換了所有護膚產品的包裝？ B：許多顧客抱怨舊盒子太重而且充滿塑膠，所以我們改用【可回收的】紙製包裝，讓大家可以在家丟進藍色回收桶。"
  },
  {
    "word": "overuse",
    "pos": "v.",
    "cn_def": "過度使用",
    "en_def": "to use something too much",
    "sentence": "A: Why did the IT department send everyone an email about the shared online storage system yesterday afternoon? B: Some teams {{BLANK}} the system by saving large video files there every day, so it has become very slow, and the department now asks staff to delete old files.",
    "cn": "A：為什麼資訊部門昨天下午寄電子郵件給大家，說明共用線上儲存系統的事？ B：有些團隊每天在那裡存放大型影片檔，【過度使用】這個系統，導致它變得很慢，所以部門現在要求員工刪除舊檔案。"
  },
  {
    "word": "misuse",
    "pos": "v.",
    "cn_def": "濫用；誤用",
    "en_def": "to use something in a wrong or dishonest way",
    "sentence": "A: Why was the regional manager asked to leave the company after the annual audit last month? B: The auditors discovered that he continued to {{BLANK}} the company credit card for personal trips and expensive dinners with friends, even after he had been warned twice by the finance director.",
    "cn": "A：為什麼區域經理在上個月的年度稽核後被要求離開公司？ B：稽核人員發現他持續【濫用】公司信用卡支付私人旅行和與朋友的昂貴晚餐，即使財務總監已經警告過他兩次。"
  },
  {
    "word": "depletion",
    "pos": "n.",
    "cn_def": "耗盡；枯竭",
    "en_def": "a big reduction in the amount of something",
    "sentence": "A: Why is the fishing company investing so much money in fish farms along the coast instead of buying new boats? B: The managers are worried about the {{BLANK}} of wild fish in the ocean, and they believe farming will give them a more stable supply for many years.",
    "cn": "A：為什麼漁業公司把那麼多錢投資在沿海的養殖場，而不是購買新船？ B：經理們擔心海洋中野生魚類的【枯竭】，他們相信養殖能在未來多年提供更穩定的供應。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "能源；精力",
    "en_def": "power from electricity, fuel, the sun, etc. used to run machines",
    "sentence": "A: Why did the company install solar panels on the roof of the main factory last summer? B: The managers wanted to produce clean {{BLANK}} for the machines and lights, and they expect the panels to cut the monthly electricity bill by almost a third over the next ten years.",
    "cn": "A：為什麼公司去年夏天在主工廠屋頂安裝太陽能板？ B：經理們想為機器和照明生產乾淨的【能源】，他們預期這些太陽能板在未來十年能把每月電費減少將近三分之一。"
  },
  {
    "word": "resource",
    "pos": "n.",
    "cn_def": "資源",
    "en_def": "something useful that a person or company can use",
    "sentence": "A: Why does the training manager always tell new employees to talk to Ms. Chen in the accounting department? B: She has worked here for twenty years and knows every system and client, so she is a valuable {{BLANK}} for anyone who has questions about company rules or old projects.",
    "cn": "A：為什麼訓練經理總是叫新員工去找會計部的陳小姐談談？ B：她在這裡工作了二十年，熟悉每個系統和客戶，所以對任何有公司規定或舊專案問題的人來說，她都是寶貴的【資源】。"
  },
  {
    "word": "fuel",
    "pos": "n.",
    "cn_def": "燃料",
    "en_def": "something such as gas or oil that is burned to make power",
    "sentence": "A: Why did the delivery company decide to replace half of its old trucks with electric vans this year? B: The price of {{BLANK}} has risen sharply over the past two years, and electric vans are cheaper to run, so the company expects to save money while also reducing pollution in the city.",
    "cn": "A：為什麼快遞公司今年決定把一半的舊卡車換成電動廂型車？ B：過去兩年【燃料】價格大幅上漲，而電動廂型車的營運成本較低，所以公司預期能省錢，同時減少城市的污染。"
  },
  {
    "word": "calorie",
    "pos": "n.",
    "cn_def": "卡路里；熱量",
    "en_def": "a unit for measuring the energy in food",
    "sentence": "A: What kind of lunch boxes is the company cafeteria going to offer for staff who want to eat more healthily? B: The chef is creating a new low-{{BLANK}} menu with grilled chicken, brown rice and fresh vegetables, and each box will show nutrition information so people can choose wisely.",
    "cn": "A：公司餐廳打算為想吃得更健康的員工提供什麼樣的便當？ B：主廚正在設計一份新的低【熱量】菜單，有烤雞、糙米和新鮮蔬菜，而且每個便當都會標示營養資訊，讓大家能聰明地選擇。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的；可持續的",
    "en_def": "able to continue without harming the environment",
    "sentence": "A: Why did the hotel group stop buying cheap furniture from its old supplier in Southeast Asia? B: Investors asked the company to become more {{BLANK}}, so it now buys tables and chairs made from wood that comes from carefully managed forests, even though they cost a little more.",
    "cn": "A：為什麼這家飯店集團停止向東南亞的舊供應商購買便宜家具？ B：投資人要求公司變得更具【永續性】，所以現在改買來自妥善管理森林的木材製成的桌椅，即使價格稍微貴一點。"
  }
];

const MCQS = [
  {
    "q": "The new air conditioners use much less electricity than the old ones. Our monthly power _____ has dropped by fifteen percent.",
    "options": [
      "consumption",
      "appetite",
      "calorie",
      "gluttony"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Before launching the new drink, the company tested it with two hundred people. Every _____ was asked to rate its taste and price.",
    "options": [
      "digestion",
      "depletion",
      "consumer",
      "calorie"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Toner, paper and staples are _____ supplies that we order every month. Please tell the office manager when stocks are low.",
    "options": [
      "voracious",
      "consumable",
      "potable",
      "edible"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Employees are not allowed to _____ at their desks in the design studio. Food must be kept in the staff kitchen.",
    "options": [
      "acquire",
      "deplete",
      "utilize",
      "eat"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Visitors may _____ only bottled water inside the laboratory. Coffee and juice must be finished in the lobby.",
    "options": [
      "devour",
      "exhaust",
      "drink",
      "acquire"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "These new towels can _____ twice as much water as cotton ones. Several hotel chains have already placed large orders.",
    "options": [
      "absorb",
      "waste",
      "spend",
      "misuse"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The new software helps managers _____ their staff more efficiently. It shows who is free and who is overloaded with work.",
    "options": [
      "devour",
      "drink",
      "ingest",
      "utilize"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Guests may _____ the fitness center free of charge during their stay. It is open from 6 a.m. to 10 p.m. daily.",
    "options": [
      "devour",
      "use",
      "deplete",
      "ingest"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The long negotiations will _____ the team's patience if they continue much longer. The manager hopes to sign the deal by Friday.",
    "options": [
      "purchase",
      "drink",
      "eat",
      "exhaust"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Heavy fishing in the bay may _____ fish stocks within a decade. The government is considering strict limits on catches.",
    "options": [
      "drink",
      "deplete",
      "absorb",
      "acquire"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please do not _____ paper by printing every email you receive. Most documents can be read and stored on screen.",
    "options": [
      "waste",
      "devour",
      "absorb",
      "acquire"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Our department will _____ most of its budget on new computers this year. The old machines are more than eight years old.",
    "options": [
      "drink",
      "ingest",
      "spend",
      "devour"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Customers who _____ two items will receive a third one free. The offer is valid until the end of the month.",
    "options": [
      "deplete",
      "purchase",
      "ingest",
      "exhaust"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The bank hopes to _____ a smaller rival to expand its branch network. The deal is expected to close next spring.",
    "options": [
      "drink",
      "eat",
      "waste",
      "acquire"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The nutritionist advised the staff to reduce their salt _____. Too much salt can raise blood pressure over time.",
    "options": [
      "consumer",
      "resource",
      "intake",
      "gluttony"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Eating slowly and chewing well can improve your _____. Many people feel less tired after a light, relaxed lunch.",
    "options": [
      "digestion",
      "fuel",
      "consumer",
      "resource"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "After the long hike up the mountain, everyone had a huge _____. We finished all the sandwiches in ten minutes.",
    "options": [
      "resource",
      "depletion",
      "appetite",
      "digestion"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Mr. Park is a _____ learner who signs up for every training course. He has finished six online programs this year.",
    "options": [
      "voracious",
      "potable",
      "recyclable",
      "disposable"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Some of the mushrooms in this forest are not _____. Never pick and cook wild plants without an expert's advice.",
    "options": [
      "voracious",
      "recyclable",
      "disposable",
      "edible"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The hotel's tap water is not _____, so guests should use the bottled water provided. Each room receives four free bottles a day.",
    "options": [
      "voracious",
      "potable",
      "edible",
      "disposable"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The hospital uses _____ gloves that are thrown away after each patient. This helps prevent the spread of infection.",
    "options": [
      "disposable",
      "voracious",
      "potable",
      "sustainable"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "All of our shipping boxes are now _____. Customers can put them in the paper bin after they unpack their orders.",
    "options": [
      "edible",
      "voracious",
      "recyclable",
      "potable"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Staff who _____ company laptops for personal business may face disciplinary action. Please read the IT policy carefully.",
    "options": [
      "drink",
      "misuse",
      "devour",
      "ingest"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Scientists warn that the _____ of groundwater could cause serious problems for farmers. Some wells in the region are already dry.",
    "options": [
      "appetite",
      "consumer",
      "calorie",
      "depletion"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The new building uses solar panels to produce most of its own _____. As a result, its electricity bills are very low.",
    "options": [
      "appetite",
      "consumer",
      "energy",
      "digestion"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Fresh water is a precious _____ in desert cities. Hotels there ask guests to reuse their towels and take short showers.",
    "options": [
      "appetite",
      "resource",
      "consumer",
      "digestion"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The airline raised ticket prices because the cost of jet _____ went up again. Passengers will pay about five percent more.",
    "options": [
      "appetite",
      "intake",
      "digestion",
      "fuel"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The menu lists the _____ count of every dish. Customers who are on a diet find this information very useful.",
    "options": [
      "calorie",
      "consumer",
      "resource",
      "digestion"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The company aims to use only _____ materials in its products by 2030. It has already stopped using plastic from oil.",
    "options": [
      "voracious",
      "sustainable",
      "edible",
      "potable"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The hungry players _____ every sandwich on the table within minutes. The coach had to order more food for the team.",
    "options": [
      "absorb",
      "acquire",
      "misuse",
      "devour"
    ],
    "answer": 3,
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "consumption": {
    "pos": "n.",
    "en_def": "the amount of something that is used",
    "cn_def": "消耗；消費量"
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services",
    "cn_def": "消費者"
  },
  "consumable": {
    "pos": "adj.",
    "en_def": "used up and needing to be bought again",
    "cn_def": "消耗性的"
  },
  "ingest": {
    "pos": "v.",
    "en_def": "to take food, drink or another substance into the body",
    "cn_def": "攝入；吞下"
  },
  "devour": {
    "pos": "v.",
    "en_def": "to eat something quickly because you are very hungry",
    "cn_def": "狼吞虎嚥"
  },
  "eat": {
    "pos": "v.",
    "en_def": "to put food in your mouth and swallow it",
    "cn_def": "吃；用餐"
  },
  "drink": {
    "pos": "v.",
    "en_def": "to take liquid into your mouth and swallow it",
    "cn_def": "喝；飲用"
  },
  "absorb": {
    "pos": "v.",
    "en_def": "to take in liquid, sound, heat or information",
    "cn_def": "吸收"
  },
  "utilize": {
    "pos": "v.",
    "en_def": "to use something in a practical and useful way",
    "cn_def": "利用；使用"
  },
  "use": {
    "pos": "v.",
    "en_def": "to do something with an object or method for a purpose",
    "cn_def": "使用；用"
  },
  "expend": {
    "pos": "v.",
    "en_def": "to use time, money or effort to do something",
    "cn_def": "耗費；花費"
  },
  "exhaust": {
    "pos": "v.",
    "en_def": "to use all of something so that none is left",
    "cn_def": "用盡；耗盡"
  },
  "deplete": {
    "pos": "v.",
    "en_def": "to reduce the amount of something until little is left",
    "cn_def": "耗盡；大量減少"
  },
  "waste": {
    "pos": "v.",
    "en_def": "to use something badly or more than you need",
    "cn_def": "浪費"
  },
  "spend": {
    "pos": "v.",
    "en_def": "to use money to pay for things; to pass time",
    "cn_def": "花費（金錢、時間）"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something",
    "cn_def": "購買"
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to get or buy something, such as a company",
    "cn_def": "取得；收購"
  },
  "intake": {
    "pos": "n.",
    "en_def": "the amount of food or drink that you take in",
    "cn_def": "攝取量"
  },
  "digestion": {
    "pos": "n.",
    "en_def": "the process of breaking down food in the body",
    "cn_def": "消化"
  },
  "appetite": {
    "pos": "n.",
    "en_def": "the wish to eat; a strong wish for something",
    "cn_def": "食慾；胃口；渴望"
  },
  "gluttony": {
    "pos": "n.",
    "en_def": "the habit of eating and drinking too much",
    "cn_def": "暴飲暴食；貪吃"
  },
  "voracious": {
    "pos": "adj.",
    "en_def": "wanting a lot of food or a lot of something",
    "cn_def": "貪婪的；求知若渴的"
  },
  "edible": {
    "pos": "adj.",
    "en_def": "safe or good enough to eat",
    "cn_def": "可食用的"
  },
  "potable": {
    "pos": "adj.",
    "en_def": "(of water) clean and safe to drink",
    "cn_def": "可飲用的"
  },
  "disposable": {
    "pos": "adj.",
    "en_def": "made to be used once and then thrown away",
    "cn_def": "用完即丟的；一次性的"
  },
  "recyclable": {
    "pos": "adj.",
    "en_def": "able to be processed and used again",
    "cn_def": "可回收的"
  },
  "overuse": {
    "pos": "v.",
    "en_def": "to use something too much",
    "cn_def": "過度使用"
  },
  "misuse": {
    "pos": "v.",
    "en_def": "to use something in a wrong or dishonest way",
    "cn_def": "濫用；誤用"
  },
  "depletion": {
    "pos": "n.",
    "en_def": "a big reduction in the amount of something",
    "cn_def": "耗盡；枯竭"
  },
  "energy": {
    "pos": "n.",
    "en_def": "power from electricity, fuel, the sun, etc. used to run machines",
    "cn_def": "能源；精力"
  },
  "resource": {
    "pos": "n.",
    "en_def": "something useful that a person or company can use",
    "cn_def": "資源"
  },
  "fuel": {
    "pos": "n.",
    "en_def": "something such as gas or oil that is burned to make power",
    "cn_def": "燃料"
  },
  "calorie": {
    "pos": "n.",
    "en_def": "a unit for measuring the energy in food",
    "cn_def": "卡路里；熱量"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue without harming the environment",
    "cn_def": "永續的；可持續的"
  }
};

const EXTRA_GLOSSES = {};
