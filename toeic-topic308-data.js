// Topic 308 Quiz Data: Product 產品
// Source word list: https://www.examword.com/group-topic/product — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T308 - Product 產品",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "goods",
    "pos": "n.",
    "cn_def": "商品；貨物",
    "en_def": "things that are made to be sold",
    "sentence": "A: Why is the warehouse so crowded this week, and when will the trucks finally take everything to the stores downtown? B: A large shipment of {{BLANK}} arrived from our supplier in Vietnam on Monday, so the staff are still checking every box before the drivers deliver them on Thursday morning.",
    "cn": "A：為什麼這個星期倉庫這麼擁擠，卡車到底什麼時候才會把東西全部送到市區的店裡？ B：週一從我們越南的供應商那裡到了一大批【貨物】，所以員工還在逐箱檢查，司機們會在星期四早上送貨。"
  },
  {
    "word": "item",
    "pos": "n.",
    "cn_def": "品項；物品",
    "en_def": "one thing in a list or group of things",
    "sentence": "A: I ordered a desk lamp, a chair, and some printer paper online last week, but why did only two boxes arrive at the office this morning? B: The store sent me an email explaining that one {{BLANK}} was out of stock, so it will be shipped separately next Tuesday at no extra cost.",
    "cn": "A：我上週在網路上訂了一盞檯燈、一張椅子和一些影印紙，為什麼今天早上辦公室只收到兩個箱子？ B：店家寄了一封電子郵件給我，說明有一個【品項】缺貨，所以會在下週二另外寄出，不另收費。"
  },
  {
    "word": "merchandise",
    "pos": "n.",
    "cn_def": "商品；貨品",
    "en_def": "goods that are bought and sold, especially in a shop",
    "sentence": "A: The souvenir shop near the museum entrance looks completely different now, so what exactly did the new manager change after she started working there? B: She moved all the {{BLANK}} into clear display cases, added brighter lights, and placed the popular T-shirts and mugs near the door so tourists notice them immediately.",
    "cn": "A：博物館入口附近的紀念品店現在看起來完全不一樣了，新經理上任後到底改了什麼？ B：她把所有【商品】都移到透明展示櫃裡，加裝了更亮的燈，並且把熱門的T恤和馬克杯放在門口附近，讓遊客一眼就看到。"
  },
  {
    "word": "commodity",
    "pos": "n.",
    "cn_def": "大宗商品；原物料",
    "en_def": "a basic product, such as oil, rice or coffee, that is bought and sold in large amounts",
    "sentence": "A: Our coffee shop chain raised the price of a latte again this month, so why are the costs going up so quickly for the company? B: Coffee beans are a {{BLANK}} traded around the world, and bad weather in Brazil reduced the harvest, so the price our buyers pay has increased sharply since spring.",
    "cn": "A：我們的咖啡連鎖店這個月又調漲了拿鐵的價格，為什麼公司的成本漲得這麼快？ B：咖啡豆是全球交易的【大宗商品】，巴西的惡劣天氣使收成減少，所以從春天起我們採購人員支付的價格大幅上漲。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a name that a company gives to its products",
    "sentence": "A: Most customers in our survey said they trust the more expensive shampoo, even though the ingredients are almost the same, so why do you think that happens? B: People usually choose a {{BLANK}} they have seen in advertisements for years, because a familiar name makes them feel the product is safe and good quality.",
    "cn": "A：我們調查中大部分顧客都說他們信任比較貴的洗髮精，即使成分幾乎一樣，你覺得為什麼會這樣？ B：人們通常會選擇多年來在廣告中看到的【品牌】，因為熟悉的名字讓他們覺得產品安全又有品質。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤",
    "en_def": "a piece of paper or material on a product that gives information about it",
    "sentence": "A: A customer called this afternoon and complained that she could not find any information about the ingredients in our new energy drink, so what should we do? B: Please ask the design team to print a larger {{BLANK}} on every bottle that clearly lists the ingredients, the sugar content, and the expiration date.",
    "cn": "A：今天下午有位顧客打電話抱怨，說她在我們新的能量飲料上找不到任何成分資訊，我們該怎麼辦？ B：請設計團隊在每一瓶上印一張更大的【標籤】，清楚列出成分、含糖量和有效期限。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "型號；款式",
    "en_def": "one particular type or design of a product, such as a car or phone",
    "sentence": "A: My laptop keeps shutting down during video meetings with clients, and the repair shop says fixing it will cost a lot, so should I just replace it? B: Yes, I think you should buy the newest {{BLANK}} from the same company, because it has a faster processor, a longer battery life, and the office will pay half.",
    "cn": "A：我的筆電在和客戶視訊開會時一直關機，維修店說修理會很貴，我是不是乾脆換一台？ B：對，我覺得你應該買同一家公司最新的【型號】，因為它的處理器更快、電池續航力更長，而且公司會出一半的錢。"
  },
  {
    "word": "version",
    "pos": "n.",
    "cn_def": "版本",
    "en_def": "a form of something that is slightly different from earlier or other forms",
    "sentence": "A: Several users wrote to us saying that the shopping app crashes whenever they try to pay with a credit card, so has the technical team found the cause yet? B: Yes, they found the error last night, and a new {{BLANK}} of the app will be available to download tomorrow morning before the weekend sale starts.",
    "cn": "A：好幾位使用者寫信說購物應用程式只要用信用卡付款就會當掉，技術團隊找到原因了嗎？ B：有，他們昨晚找到錯誤了，新【版本】的應用程式明天早上就可以下載，趕在週末特賣開始之前。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "設計",
    "en_def": "the way something is planned and made, including how it looks and works",
    "sentence": "A: Our new water bottle sold much better than the old one, even though the price is higher, so what do you think customers like most about it? B: Many reviewers said the simple, elegant {{BLANK}} fits easily into a bag, and the shape is comfortable to hold while walking or riding a bike.",
    "cn": "A：我們的新水壺即使價格比較高，卻比舊款賣得好很多，你覺得顧客最喜歡它哪一點？ B：很多評論者說它簡單又優雅的【設計】很容易放進包包，而且形狀在走路或騎腳踏車時握起來很舒服。"
  },
  {
    "word": "feature",
    "pos": "n.",
    "cn_def": "特色；功能",
    "en_def": "an important or interesting part or quality of a product",
    "sentence": "A: The sales team has to explain the new smartphone to store managers next week, so which point should they mention first during the presentation? B: They should start with the camera, because its most impressive {{BLANK}} is taking clear photos at night, which is something our competitors still cannot do very well.",
    "cn": "A：業務團隊下週要向門市經理介紹新的智慧型手機，簡報時他們應該先講哪一點？ B：他們應該從相機開始講，因為它最令人印象深刻的【特色】是能在夜間拍出清晰的照片，這是我們的競爭對手仍然做不太好的。"
  },
  {
    "word": "function",
    "pos": "n.",
    "cn_def": "功能；作用",
    "en_def": "the job or purpose that something has",
    "sentence": "A: I bought this kitchen machine because the salesperson said it could do many things, but I only use it to make juice, so is that a waste? B: Not really, but you should try the chopping {{BLANK}}, because it can cut vegetables in seconds and save you a lot of time when you cook dinner after work.",
    "cn": "A：我買這台廚房機器是因為銷售員說它能做很多事，但我只用來打果汁，這樣是不是很浪費？ B：其實不會，不過你應該試試切碎的【功能】，因為它幾秒內就能切好蔬菜，下班後煮晚餐時可以幫你省很多時間。"
  },
  {
    "word": "quality",
    "pos": "n.",
    "cn_def": "品質",
    "en_def": "how good or bad something is",
    "sentence": "A: Our factory found a cheaper supplier for the cotton we use in our shirts, so why did the manager decide not to sign the contract with them? B: She tested their samples and found that the {{BLANK}} was much lower, because the fabric became thin and lost its color after only three washes.",
    "cn": "A：我們工廠找到一家棉花比較便宜的供應商，為什麼經理決定不跟他們簽約？ B：她測試了他們的樣品，發現【品質】差很多，因為布料才洗三次就變薄又褪色了。"
  },
  {
    "word": "standard",
    "pos": "n.",
    "cn_def": "標準；水準",
    "en_def": "a level of quality that is expected or required",
    "sentence": "A: The inspectors from the government visited our toy factory yesterday and spent hours checking the production line, so did we pass the safety check? B: Yes, they said every toy they tested met the national safety {{BLANK}}, so we can start shipping the new collection to stores before the holiday season.",
    "cn": "A：政府的稽查員昨天來我們玩具工廠，花了好幾個小時檢查生產線，我們通過安全檢查了嗎？ B：通過了，他們說測試的每一件玩具都符合國家安全【標準】，所以我們可以在假期前開始把新系列送到店裡。"
  },
  {
    "word": "durable",
    "pos": "adj.",
    "cn_def": "耐用的",
    "en_def": "able to last for a long time without breaking",
    "sentence": "A: Our hiking customers often complain that their backpacks tear after a few trips in the mountains, so what kind of bag should we sell instead? B: We should sell bags made of thick nylon with strong zippers, because they are light but very {{BLANK}}, and they can handle rain, rocks, and heavy loads for years.",
    "cn": "A：我們的登山客常抱怨背包在山上走幾趟就破了，那我們應該改賣哪一種背包？ B：我們應該賣厚尼龍、拉鍊牢固的背包，因為它們很輕卻非常【耐用】，可以承受雨水、岩石和重物好幾年。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to work well",
    "sentence": "A: Our delivery company needs to buy twenty new vans this year, so why did the operations manager choose the Japanese brand instead of the cheaper one? B: She said the Japanese vans are more {{BLANK}}, because they rarely break down on the road, which means fewer late deliveries and lower repair costs.",
    "cn": "A：我們的貨運公司今年需要買二十輛新廂型車，為什麼營運經理選擇日本品牌而不選比較便宜的那個？ B：她說日本的廂型車比較【可靠】，因為很少在路上拋錨，這表示延遲送貨比較少，維修費也比較低。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；價格實惠的",
    "en_def": "not too expensive; cheap enough for most people to buy",
    "sentence": "A: Our company wants to sell electric scooters to university students in Taipei, but most students do not have much money, so how should we plan the price? B: We should offer a basic model that is {{BLANK}}, perhaps under twenty thousand dollars, and let students pay in small monthly amounts.",
    "cn": "A：我們公司想把電動機車賣給台北的大學生，但大部分學生沒什麼錢，我們該如何規劃價格？ B：我們應該推出一款價格【實惠】的基本款，或許在兩萬元以下，並讓學生每月分小額付款。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: My manager asked me to order new office chairs for the whole team, but the ones she likes cost almost ten thousand dollars each, so what should I do? B: Those chairs are too {{BLANK}} for our budget, so you should show her a cheaper choice that is still comfortable and has good back support.",
    "cn": "A：經理要我幫整個團隊訂新的辦公椅，但她喜歡的那款每張將近一萬元，我該怎麼辦？ B：那些椅子對我們的預算來說太【昂貴】了，所以你應該給她看一個比較便宜、但仍然舒適又有良好背部支撐的選擇。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new methods or ideas",
    "sentence": "A: Why did so many investors want to meet the young engineers at the technology fair in Taichung last weekend? B: Their company created an {{BLANK}} kitchen system that uses sensors to tell you which food in the refrigerator will go bad soon, so families can waste less food and save money.",
    "cn": "A：為什麼上週末在台中的科技展上有那麼多投資人想見那些年輕工程師？ B：他們公司開發了一套【創新的】廚房系統，利用感應器告訴你冰箱裡哪些食物快要壞了，讓家庭可以減少浪費食物並省錢。"
  },
  {
    "word": "launch",
    "pos": "v.",
    "cn_def": "推出；發表",
    "en_def": "to make a new product available to the public for the first time",
    "sentence": "A: The marketing department has been working late every night this month, so when exactly is the new line of skin care products going to reach the stores? B: We plan to {{BLANK}} the products at a big event in Taipei on March first, and then they will be sold online and in department stores the next day.",
    "cn": "A：行銷部這個月每天晚上都加班，新的保養品系列到底什麼時候會上架？ B：我們計劃三月一日在台北的一場大型活動上【推出】這些產品，隔天就會在網路和百貨公司販售。"
  },
  {
    "word": "manufacture",
    "pos": "v.",
    "cn_def": "製造；生產",
    "en_def": "to make goods in large numbers, usually in a factory using machines",
    "sentence": "A: Our company sells a lot of bicycles in Europe, so why did the board decide to build a new factory in central Taiwan instead of buying from overseas suppliers? B: They believe that if we {{BLANK}} the frames ourselves, we can control the quality better, deliver faster, and lower our costs within three years.",
    "cn": "A：我們公司在歐洲賣很多腳踏車，為什麼董事會決定在台灣中部蓋新工廠，而不向海外供應商購買？ B：他們認為如果我們自己【製造】車架，就能更好地控管品質、更快交貨，並在三年內降低成本。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "生產；製造",
    "en_def": "to make or grow something, especially in large amounts",
    "sentence": "A: The orders for our canned fruit have doubled since the summer, so can the factory in Pingtung keep up with the demand from supermarkets? B: Yes, after we added a second production line, the factory can {{BLANK}} about fifty thousand cans a day, which should be enough for the busy season.",
    "cn": "A：我們的水果罐頭訂單從夏天起已經翻倍，屏東的工廠跟得上超市的需求嗎？ B：可以，我們加開第二條生產線後，工廠每天能【生產】大約五萬罐，應該足以應付旺季。"
  },
  {
    "word": "distribute",
    "pos": "v.",
    "cn_def": "配送；經銷",
    "en_def": "to send goods to shops or businesses so they can be sold",
    "sentence": "A: Our small tea company has received orders from shops all over Taiwan, but we only have one van, so how can we send the products everywhere on time? B: We should sign a contract with a logistics company that can {{BLANK}} our tea to stores across the island, while we focus on growing and packing the leaves.",
    "cn": "A：我們的小茶葉公司收到全台各地商店的訂單，但我們只有一輛廂型車，要怎麼準時把產品送到各地？ B：我們應該和一家物流公司簽約，讓他們把我們的茶【配送】到全島的店家，而我們專心種植和包裝茶葉。"
  },
  {
    "word": "market",
    "pos": "v.",
    "cn_def": "行銷；推銷",
    "en_def": "to advertise and sell a product in a planned way",
    "sentence": "A: Our new sports drink tastes great, but sales have been slow for two months, so what does the consultant think we are doing wrong? B: She thinks we should {{BLANK}} the drink to young people who exercise, using social media, gym posters, and free samples at running events instead of TV commercials.",
    "cn": "A：我們的新運動飲料很好喝，但銷量已經兩個月表現不佳，顧問認為我們哪裡做錯了？ B：她認為我們應該把這款飲料【行銷】給有運動習慣的年輕人，利用社群媒體、健身房海報和路跑活動的免費試飲，而不是電視廣告。"
  },
  {
    "word": "advertise",
    "pos": "v.",
    "cn_def": "為……做廣告；宣傳",
    "en_def": "to tell the public about a product so that they will buy it",
    "sentence": "A: We only have a small budget for the opening of our new bakery near the train station, so how can we let people in the neighborhood know about it? B: We can {{BLANK}} the bakery on local community websites and give out coupons for free bread to commuters during the first week.",
    "cn": "A：我們在火車站附近新開的麵包店預算很少，要怎麼讓附近的人知道這家店？ B：我們可以在當地社區網站上【宣傳】麵包店，並在第一週發免費麵包的優惠券給通勤族。"
  },
  {
    "word": "purchase",
    "pos": "v.",
    "cn_def": "購買",
    "en_def": "to buy something",
    "sentence": "A: The accounting department has asked every team to save money this year, so how should we get the new printers that the design team needs? B: We should {{BLANK}} them through the company's main supplier, because they give us a fifteen percent discount when we order more than ten machines at once.",
    "cn": "A：會計部要求每個團隊今年都要省錢，那設計團隊需要的新印表機我們該怎麼取得？ B：我們應該透過公司的主要供應商【購買】，因為一次訂超過十台，他們會給我們打八五折。"
  },
  {
    "word": "consumer",
    "pos": "n.",
    "cn_def": "消費者",
    "en_def": "a person who buys goods or services for their own use",
    "sentence": "A: The research team spent three months studying shopping habits in Taiwan, so what was the most surprising result of their report? B: They discovered that the average {{BLANK}} now compares prices on a phone before buying almost anything, even simple things like milk, bread, or toothpaste.",
    "cn": "A：研究團隊花了三個月研究台灣的購物習慣，他們報告中最令人驚訝的結果是什麼？ B：他們發現一般【消費者】現在幾乎買任何東西前都會先用手機比價，甚至連牛奶、麵包或牙膏這種簡單的東西也一樣。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客；客戶",
    "en_def": "a person who buys things from a shop or business",
    "sentence": "A: A woman came to the service desk this morning because the blender she bought last week stopped working, so how did you handle the situation? B: I apologized, gave her a new blender right away, and added a small gift, because a happy {{BLANK}} will probably come back and tell her friends about our store.",
    "cn": "A：今天早上有位女士因為上週買的果汁機壞了而到服務台來，你是怎麼處理的？ B：我向她道歉，馬上給她一台新的果汁機，還附上一份小禮物，因為滿意的【顧客】很可能會再回來，並向朋友介紹我們的店。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；評價",
    "en_def": "a written opinion about how good or bad something is",
    "sentence": "A: Sales of our wireless headphones suddenly increased last weekend, even though we did not run any special discounts, so what caused this change? B: A famous technology blogger posted a very positive {{BLANK}} of the headphones online, praising the sound quality and the long battery life, and thousands of people read it.",
    "cn": "A：我們的無線耳機上週末銷量突然增加，即使我們沒有任何特別折扣，是什麼造成這個變化？ B：一位知名的科技部落客在網路上發表了一篇對這款耳機非常正面的【評論】，稱讚它的音質和長效電池，有好幾千人讀過。"
  },
  {
    "word": "guarantee",
    "pos": "n.",
    "cn_def": "保證",
    "en_def": "a promise that something will be done or that a product will work",
    "sentence": "A: Many customers are worried about buying expensive furniture online because they cannot touch it first, so how can our website make them feel more confident? B: We can offer a thirty-day money-back {{BLANK}}, so anyone who is not happy with a sofa or table can return it and get a full refund.",
    "cn": "A：許多顧客擔心在網路上買昂貴的家具，因為沒辦法先摸摸看，我們的網站要怎麼讓他們更有信心？ B：我們可以提供三十天退款【保證】，這樣任何對沙發或桌子不滿意的人都可以退貨並獲得全額退款。"
  },
  {
    "word": "warranty",
    "pos": "n.",
    "cn_def": "保固；保修單",
    "en_def": "a written promise that a company will repair or replace a product if it breaks within a certain time",
    "sentence": "A: The screen on my new tablet cracked by itself after only five months, even though I never dropped it, so do I have to pay for the repair? B: No, the {{BLANK}} covers two years, so just take it back to the store with your receipt and they will fix or replace it for free.",
    "cn": "A：我的新平板才五個月螢幕就自己裂了，我從來沒摔過它，我需要付維修費嗎？ B：不用，【保固】涵蓋兩年，所以只要帶著收據拿回店裡，他們就會免費修理或更換。"
  },
  {
    "word": "package",
    "pos": "n.",
    "cn_def": "包裹；包裝",
    "en_def": "an object or objects wrapped in paper or put in a box so they can be sent or sold",
    "sentence": "A: The customer service team received many complaints that cups were broken when they arrived, so what is the shipping department doing about it? B: They now wrap each cup in bubble paper and put a strong layer of cardboard around the whole {{BLANK}} before it leaves the warehouse.",
    "cn": "A：客服團隊收到很多杯子送達時破掉的抱怨，出貨部門怎麼處理這件事？ B：他們現在把每個杯子都用泡泡紙包好，並在整個【包裹】離開倉庫前外面再加一層堅固的紙板。"
  },
  {
    "word": "supply",
    "pos": "n.",
    "cn_def": "供應；供應量",
    "en_def": "an amount of something that is available to be used or sold",
    "sentence": "A: Our restaurant chain is planning a big promotion for mango desserts in June, but what will happen if there are not enough fresh mangoes that month? B: Don't worry, because we signed a contract with three farms in Tainan, so we will have a steady {{BLANK}} of fruit throughout the whole summer.",
    "cn": "A：我們的連鎖餐廳計劃在六月大力促銷芒果甜點，但如果那個月新鮮芒果不夠怎麼辦？ B：別擔心，我們已經和台南的三座農場簽約，所以整個夏天都會有穩定的水果【供應】。"
  },
  {
    "word": "demand",
    "pos": "n.",
    "cn_def": "需求",
    "en_def": "the need or desire that people have for goods or services",
    "sentence": "A: Why did the electronics store order so many more air conditioners and fans this year than it did last year at the same time? B: The weather report says this summer will be extremely hot, so the manager expects {{BLANK}} for cooling products to rise quickly in the next few weeks.",
    "cn": "A：為什麼這家電器行今年同期訂的冷氣和電風扇比去年多那麼多？ B：氣象報告說今年夏天會非常炎熱，所以經理預期接下來幾週降溫產品的【需求】會快速上升。"
  },
  {
    "word": "inventory",
    "pos": "n.",
    "cn_def": "存貨；庫存清單",
    "en_def": "a complete list or the total amount of goods a business has in stock",
    "sentence": "A: The bookstore will be closed to customers all day on Sunday, so what are the employees going to be doing inside the shop? B: They will count every book and magazine on the shelves and in the storeroom to update the {{BLANK}}, so the manager knows exactly what to order for next month.",
    "cn": "A：書店星期天整天不對顧客營業，員工們在店裡要做什麼？ B：他們會清點架上和倉庫裡的每一本書和雜誌來更新【庫存清單】，讓經理清楚知道下個月要訂什麼。"
  }
];

const MCQS = [
  {
    "q": "Our store will receive a large shipment next week. The _____ must be checked carefully before they are placed on the shelves.",
    "options": [
      "goods",
      "brands",
      "features",
      "versions"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The online store sent the order in two boxes. One _____ was out of stock, so it will arrive three days later.",
    "options": [
      "standard",
      "item",
      "demand",
      "label"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Visitors to the museum shop can buy postcards, mugs, and T-shirts. All official _____ is displayed near the main exit.",
    "options": [
      "consumer",
      "warranty",
      "merchandise",
      "function"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Rice is an important _____ in Asian markets. Its price can change quickly when the harvest is poor.",
    "options": [
      "review",
      "design",
      "package",
      "commodity"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many shoppers stay loyal to the same _____ for years. They trust the familiar name and the quality it represents.",
    "options": [
      "inventory",
      "brand",
      "supply",
      "guarantee"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Please read the _____ on the bottle before you use this cleaner. It explains the safety instructions clearly.",
    "options": [
      "label",
      "model",
      "demand",
      "customer"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company will release its latest car _____ in May. It uses less fuel than the older ones.",
    "options": [
      "commodity",
      "merchandise",
      "review",
      "model"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Users should download the newest _____ of the software. It fixes several security problems found last month.",
    "options": [
      "package",
      "consumer",
      "version",
      "quality"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Customers love the simple _____ of our new kettle. It looks modern and is easy to clean.",
    "options": [
      "design",
      "supply",
      "inventory",
      "warranty"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The phone's most popular _____ is its waterproof camera. Users can take photos while swimming at the beach.",
    "options": [
      "goods",
      "feature",
      "label",
      "commodity"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "This printer has a scanning _____ as well. Office staff can copy and scan documents with one machine.",
    "options": [
      "brand",
      "demand",
      "function",
      "guarantee"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The factory rejected the cheaper fabric. Its _____ was too low for the company's high-end clothing line.",
    "options": [
      "version",
      "customer",
      "package",
      "quality"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "All toys sold in Taiwan must meet the national safety _____. Inspectors test samples from every new production batch.",
    "options": [
      "feature",
      "standard",
      "item",
      "review"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Hikers need _____ boots that last for many years. These are made from thick leather and strong rubber soles.",
    "options": [
      "durable",
      "expensive",
      "innovative",
      "affordable"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "We chose this delivery company because it is very _____. Its trucks almost always arrive exactly on time.",
    "options": [
      "expensive",
      "innovative",
      "durable",
      "reliable"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The new laptop is aimed at university students. Its price is _____, so most young people can buy one.",
    "options": [
      "innovative",
      "durable",
      "affordable",
      "reliable"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The designer handbag costs over three thousand dollars. It is too _____ for most of our regular customers.",
    "options": [
      "expensive",
      "affordable",
      "reliable",
      "durable"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The start-up won an award for its _____ ideas. It created a smart bottle that tracks how much water you drink.",
    "options": [
      "durable",
      "innovative",
      "affordable",
      "expensive"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company plans to _____ its new tablet next month. A large event will be held in Taipei for the media.",
    "options": [
      "purchase",
      "advertise",
      "launch",
      "distribute"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The firm will _____ the parts in its own factory. This will help it control quality and reduce costs.",
    "options": [
      "advertise",
      "purchase",
      "market",
      "manufacture"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The farm can _____ about five tons of oranges each season. Most of the fruit is sold to local supermarkets.",
    "options": [
      "advertise",
      "produce",
      "purchase",
      "launch"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A logistics partner will _____ our products to stores across Asia. This allows our small team to focus on design.",
    "options": [
      "distribute",
      "purchase",
      "advertise",
      "manufacture"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The team decided to _____ the drink mainly to young athletes. Social media will be the main sales channel.",
    "options": [
      "manufacture",
      "produce",
      "purchase",
      "market"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Small shops often _____ on local radio stations. It is cheaper than placing commercials on national television.",
    "options": [
      "manufacture",
      "distribute",
      "advertise",
      "produce"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Employees must get approval before they _____ any new equipment. Large orders need a signature from the finance manager.",
    "options": [
      "purchase",
      "advertise",
      "launch",
      "market"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Every _____ has the right to clear information about a product. Prices and ingredients should be easy to find.",
    "options": [
      "commodity",
      "consumer",
      "version",
      "function"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The manager gave the _____ a full refund for the broken blender. She thanked the staff for their quick help.",
    "options": [
      "model",
      "feature",
      "customer",
      "standard"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "A famous blogger wrote a positive _____ of our headphones. Sales doubled within a week of the article.",
    "options": [
      "label",
      "supply",
      "inventory",
      "review"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The two-year _____ covers all repairs to the washing machine. Customers only need to show their original receipt.",
    "options": [
      "design",
      "warranty",
      "brand",
      "item"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The store counts its _____ every three months. This helps managers know which products need to be reordered.",
    "options": [
      "inventory",
      "feature",
      "version",
      "function"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "goods": {
    "pos": "n.",
    "en_def": "things that are made to be sold",
    "cn_def": "商品；貨物"
  },
  "item": {
    "pos": "n.",
    "en_def": "one thing in a list or group of things",
    "cn_def": "品項；物品"
  },
  "merchandise": {
    "pos": "n.",
    "en_def": "goods that are bought and sold, especially in a shop",
    "cn_def": "商品；貨品"
  },
  "commodity": {
    "pos": "n.",
    "en_def": "a basic product, such as oil, rice or coffee, that is bought and sold in large amounts",
    "cn_def": "大宗商品；原物料"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a name that a company gives to its products",
    "cn_def": "品牌"
  },
  "label": {
    "pos": "n.",
    "en_def": "a piece of paper or material on a product that gives information about it",
    "cn_def": "標籤"
  },
  "model": {
    "pos": "n.",
    "en_def": "one particular type or design of a product, such as a car or phone",
    "cn_def": "型號；款式"
  },
  "version": {
    "pos": "n.",
    "en_def": "a form of something that is slightly different from earlier or other forms",
    "cn_def": "版本"
  },
  "design": {
    "pos": "n.",
    "en_def": "the way something is planned and made, including how it looks and works",
    "cn_def": "設計"
  },
  "feature": {
    "pos": "n.",
    "en_def": "an important or interesting part or quality of a product",
    "cn_def": "特色；功能"
  },
  "function": {
    "pos": "n.",
    "en_def": "the job or purpose that something has",
    "cn_def": "功能；作用"
  },
  "quality": {
    "pos": "n.",
    "en_def": "how good or bad something is",
    "cn_def": "品質"
  },
  "standard": {
    "pos": "n.",
    "en_def": "a level of quality that is expected or required",
    "cn_def": "標準；水準"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "able to last for a long time without breaking",
    "cn_def": "耐用的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to work well",
    "cn_def": "可靠的"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "not too expensive; cheap enough for most people to buy",
    "cn_def": "負擔得起的；價格實惠的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new methods or ideas",
    "cn_def": "創新的"
  },
  "launch": {
    "pos": "v.",
    "en_def": "to make a new product available to the public for the first time",
    "cn_def": "推出；發表"
  },
  "manufacture": {
    "pos": "v.",
    "en_def": "to make goods in large numbers, usually in a factory using machines",
    "cn_def": "製造；生產"
  },
  "produce": {
    "pos": "v.",
    "en_def": "to make or grow something, especially in large amounts",
    "cn_def": "生產；製造"
  },
  "distribute": {
    "pos": "v.",
    "en_def": "to send goods to shops or businesses so they can be sold",
    "cn_def": "配送；經銷"
  },
  "market": {
    "pos": "v.",
    "en_def": "to advertise and sell a product in a planned way",
    "cn_def": "行銷；推銷"
  },
  "advertise": {
    "pos": "v.",
    "en_def": "to tell the public about a product so that they will buy it",
    "cn_def": "為……做廣告；宣傳"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something",
    "cn_def": "購買"
  },
  "consumer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services for their own use",
    "cn_def": "消費者"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys things from a shop or business",
    "cn_def": "顧客；客戶"
  },
  "review": {
    "pos": "n.",
    "en_def": "a written opinion about how good or bad something is",
    "cn_def": "評論；評價"
  },
  "guarantee": {
    "pos": "n.",
    "en_def": "a promise that something will be done or that a product will work",
    "cn_def": "保證"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise that a company will repair or replace a product if it breaks within a certain time",
    "cn_def": "保固；保修單"
  },
  "package": {
    "pos": "n.",
    "en_def": "an object or objects wrapped in paper or put in a box so they can be sent or sold",
    "cn_def": "包裹；包裝"
  },
  "supply": {
    "pos": "n.",
    "en_def": "an amount of something that is available to be used or sold",
    "cn_def": "供應；供應量"
  },
  "demand": {
    "pos": "n.",
    "en_def": "the need or desire that people have for goods or services",
    "cn_def": "需求"
  },
  "inventory": {
    "pos": "n.",
    "en_def": "a complete list or the total amount of goods a business has in stock",
    "cn_def": "存貨；庫存清單"
  }
};

const EXTRA_GLOSSES = {};
