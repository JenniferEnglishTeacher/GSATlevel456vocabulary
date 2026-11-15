// Topic 22 Quiz Data: Bags 包包
// Source word list: https://www.examword.com/group-topic/bags — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T22 - Bags 包包",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "backpack",
    "pos": "n.",
    "cn_def": "背包；後背包",
    "en_def": "a bag you carry on your back with two straps",
    "sentence": "A: I have to walk from the train station to the client's office every morning this week, and my laptop and files are getting heavy, so what kind of bag should I buy? B: You should get a {{BLANK}} with padded straps, because it spreads the weight across both shoulders and leaves your hands free for your phone and umbrella.",
    "cn": "A：這週我每天早上都得從火車站走到客戶辦公室，筆電和文件越來越重，我該買什麼樣的包包？ B：你應該買一個肩帶有襯墊的【後背包】，因為它能把重量分散在兩邊肩膀上，讓你的雙手可以拿手機和雨傘。"
  },
  {
    "word": "handbag",
    "pos": "n.",
    "cn_def": "手提包",
    "en_def": "a small bag that women often use to carry money, keys, and other things",
    "sentence": "A: The department store wants to put a new display near the main entrance before Mother's Day, so which products should we show there to attract shoppers? B: We should display our new leather {{BLANK}} in red and cream, because many customers buy them as gifts for their mothers and they look great in the window.",
    "cn": "A：百貨公司想在母親節前於大門口附近擺一個新的展示區，我們該展示哪些商品來吸引顧客？ B：我們應該展示紅色和米色的新款皮革【手提包】，因為很多顧客會買來當作送給媽媽的禮物，而且放在櫥窗裡很好看。"
  },
  {
    "word": "tote",
    "pos": "n.",
    "cn_def": "托特包；大手提袋",
    "en_def": "a large open bag with two handles, used for carrying many things",
    "sentence": "A: Our company is giving away free gifts at the trade show next month, and the manager wants something useful that people will keep, so what do you suggest? B: Let's give each visitor a cotton {{BLANK}} with our logo on it, because people can use it for shopping, and our name will be seen all over the city.",
    "cn": "A：我們公司下個月要在商展上贈送免費禮物，經理想要大家會留著用的實用東西，你有什麼建議？ B：我們送每位參觀者一個印有公司商標的棉布【托特包】吧，因為大家可以拿來購物，我們的名字就會出現在城市各處。"
  },
  {
    "word": "satchel",
    "pos": "n.",
    "cn_def": "側背書包；公事包",
    "en_def": "a bag with a long strap and a flap, often used for books or papers",
    "sentence": "A: My new job is at a law office, and I need to carry a lot of papers and a small laptop to court, but I do not like backpacks, so what is a good choice? B: A brown leather {{BLANK}} would look professional, because it has a long shoulder strap, a flap that closes tightly, and enough room for your documents.",
    "cn": "A：我的新工作在律師事務所，需要帶很多文件和一台小筆電去法院，但我不喜歡後背包，有什麼好選擇？ B：一個棕色皮革【側背公事包】看起來會很專業，因為它有長肩帶、可以緊緊扣住的掀蓋，空間也夠放你的文件。"
  },
  {
    "word": "clutch",
    "pos": "n.",
    "cn_def": "手拿包",
    "en_def": "a small, flat bag without a handle, held in the hand, usually for formal events",
    "sentence": "A: The company's year-end party is at a fancy hotel this year, and everyone has to dress formally, but my everyday bag is far too big, so what should I bring? B: You could carry a small silver {{BLANK}}, because it holds your phone, keys, and a lipstick, and it looks elegant with an evening dress.",
    "cn": "A：今年公司尾牙在高級飯店舉行，大家都要穿正式服裝，但我平常的包包太大了，我該帶什麼？ B：你可以拿一個小小的銀色【手拿包】，因為它能裝手機、鑰匙和口紅，搭配晚禮服也很優雅。"
  },
  {
    "word": "duffel",
    "pos": "n.",
    "cn_def": "圓筒旅行袋；行李袋",
    "en_def": "a large soft bag shaped like a tube, used for sports clothes or travel",
    "sentence": "A: I am going on a three-day team-building trip in the mountains with my coworkers, and we have to carry our things from the bus to the cabin, so is a suitcase okay? B: A suitcase is hard to roll on the mountain path, so take a soft {{BLANK}} instead, because you can carry it on your shoulder and squeeze it into small spaces.",
    "cn": "A：我要和同事去山上參加三天的團隊建立活動，我們得自己把東西從巴士搬到小木屋，帶行李箱可以嗎？ B：行李箱在山路上很難拉，所以改帶軟的【圓筒行李袋】吧，因為你可以把它扛在肩上，也能塞進狹小的空間。"
  },
  {
    "word": "pouch",
    "pos": "n.",
    "cn_def": "小袋子；收納包",
    "en_def": "a small soft bag for keeping small things",
    "sentence": "A: Every time I travel for work, my phone charger, earphones, and cables get mixed up at the bottom of my bag, and it takes forever to find them. B: Put them all in a small zip {{BLANK}}, and then you can take everything out at once when you get to the hotel or the meeting room.",
    "cn": "A：每次出差，我的手機充電器、耳機和傳輸線都混在包包底部，要找很久才找得到。 B：把它們全部放進一個有拉鍊的小【收納包】，這樣到了飯店或會議室時，你就能一次把所有東西拿出來。"
  },
  {
    "word": "zipper",
    "pos": "n.",
    "cn_def": "拉鍊",
    "en_def": "a metal or plastic device with two rows of teeth that closes a bag or clothes",
    "sentence": "A: A customer brought back the suitcase she bought from our shop two weeks ago, and she seems quite upset, so what is wrong with it? B: The {{BLANK}} on the front pocket broke on her first trip, so we should replace the suitcase for free and tell the factory to check that part more carefully.",
    "cn": "A：有位顧客把兩週前在我們店裡買的行李箱拿回來，她看起來很不高興，是出了什麼問題？ B：前面口袋的【拉鍊】在她第一次旅行時就壞了，所以我們應該免費幫她換一個行李箱，並請工廠更仔細檢查那個零件。"
  },
  {
    "word": "strap",
    "pos": "n.",
    "cn_def": "背帶；肩帶",
    "en_def": "a narrow piece of leather or cloth used to carry a bag",
    "sentence": "A: Many customers like the design of our new laptop bag, but some of them say it hurts their shoulder after they walk for a while, so how can we improve it? B: We can make the {{BLANK}} wider and add a soft pad, so the weight of the laptop does not press so hard on one small area of the shoulder.",
    "cn": "A：很多顧客喜歡我們新筆電包的設計，但有些人說走一陣子後肩膀會痛，我們要怎麼改進？ B：我們可以把【背帶】加寬並加上軟墊，這樣筆電的重量就不會集中壓在肩膀的一小塊地方。"
  },
  {
    "word": "compartment",
    "pos": "n.",
    "cn_def": "隔層；夾層",
    "en_def": "a separate section inside a bag for keeping things apart",
    "sentence": "A: I often carry my laptop and my lunch box in the same bag on my way to the office, and I am worried that the soup might leak onto the computer. B: Choose a bag with a separate padded {{BLANK}} for the laptop, so your computer stays safe and dry even if something spills in the main part.",
    "cn": "A：我上班途中常把筆電和便當盒放在同一個包包裡，擔心湯會漏到電腦上。 B：選一個有獨立襯墊筆電【隔層】的包包，這樣即使主袋裡有東西灑出來，你的電腦也能保持安全乾燥。"
  },
  {
    "word": "pocket",
    "pos": "n.",
    "cn_def": "口袋",
    "en_def": "a small bag sewn onto or into a larger bag or clothes",
    "sentence": "A: At the airport, I always have to look through my whole bag to find my passport and boarding pass, and the people behind me in line get impatient. B: Keep them in the small outside {{BLANK}} of your backpack, because you can reach it quickly without opening the main part of the bag.",
    "cn": "A：在機場我總是得翻遍整個包包才找得到護照和登機證，排在我後面的人都不耐煩了。 B：把它們放在後背包外側的小【口袋】裡，因為你不用打開包包主袋就能很快拿到。"
  },
  {
    "word": "lining",
    "pos": "n.",
    "cn_def": "內襯；襯裡",
    "en_def": "a layer of material covering the inside of a bag",
    "sentence": "A: The outside of this handbag is made of beautiful leather, but the price is much higher than the other bags on the shelf, so why does it cost so much? B: It has a silk {{BLANK}} inside, which protects your things and makes the bag look elegant every time you open it, and it is all sewn by hand.",
    "cn": "A：這個手提包外層是用漂亮的皮革做的，但價格比架上其他包包高很多，為什麼這麼貴？ B：它裡面有絲質【內襯】，能保護你的物品，每次打開包包時看起來都很優雅，而且全部都是手工縫製。"
  },
  {
    "word": "leather",
    "pos": "n.",
    "cn_def": "皮革",
    "en_def": "animal skin that is treated and used to make bags, shoes, and clothes",
    "sentence": "A: Our company wants to give the top salespeople a special gift at the end of the year, something that lasts for many years and looks professional, so what would be good? B: A briefcase made of real {{BLANK}} would be a great choice, because it becomes softer and more beautiful with age and can last more than ten years.",
    "cn": "A：公司想在年底送一份特別的禮物給頂尖業務員，要能用很多年又看起來專業的東西，什麼比較好？ B：真【皮】製的公事包會是很好的選擇，因為它會隨著時間變得更柔軟、更漂亮，而且可以用十年以上。"
  },
  {
    "word": "canvas",
    "pos": "n.",
    "cn_def": "帆布",
    "en_def": "a strong, heavy cloth used for bags, shoes, and tents",
    "sentence": "A: The bookstore wants to sell its own shopping bags, but the manager does not want plastic because many customers care about the environment, so which material should we use? B: We should use thick cotton {{BLANK}}, because it is strong enough to carry heavy books, easy to print a logo on, and can be washed many times.",
    "cn": "A：書店想販售自己的購物袋，但經理不想用塑膠，因為很多顧客在意環保，我們該用什麼材質？ B：我們應該用厚棉【帆布】，因為它夠堅固能裝重的書、容易印上商標，而且可以洗很多次。"
  },
  {
    "word": "waterproof",
    "pos": "adj.",
    "cn_def": "防水的",
    "en_def": "not letting water go through",
    "sentence": "A: I will be visiting construction sites in Keelung all next week, and the weather report says it will rain almost every day, so how can I keep my documents dry? B: Use a {{BLANK}} bag with a roll-top opening, because even heavy rain cannot get inside, and your plans and contracts will stay completely dry.",
    "cn": "A：下週我整週都要去基隆的工地，氣象報告說幾乎每天都會下雨，我要怎麼讓文件保持乾燥？ B：用一個捲口式開口的【防水】包，因為就算大雨也進不去，你的設計圖和合約都能保持完全乾燥。"
  },
  {
    "word": "durable",
    "pos": "adj.",
    "cn_def": "耐用的",
    "en_def": "able to last a long time without breaking",
    "sentence": "A: Our delivery workers carry heavy packages in their bags all day, and the cheap bags we bought last year all fell apart within a few months, so what should we buy now? B: We need more {{BLANK}} bags made of thick nylon with strong stitching, even if they cost more, because they will last for several years and save money.",
    "cn": "A：我們的送貨員整天用包包背重物，去年買的便宜包包幾個月內就都壞了，我們現在該買什麼？ B：我們需要更【耐用】的包包，用厚尼龍和堅固的縫線製成，即使比較貴，因為它們能用好幾年，反而省錢。"
  },
  {
    "word": "lightweight",
    "pos": "adj.",
    "cn_def": "輕量的；輕便的",
    "en_def": "not heavy",
    "sentence": "A: The flight attendants at our airline walk through long airports every day with their bags, and many of them have complained about sore backs, so what can we do? B: We can give them new {{BLANK}} bags that weigh less than one kilogram when empty, so they will carry much less weight during long workdays.",
    "cn": "A：我們航空公司的空服員每天都要提著包包走過很長的機場，很多人抱怨背痛，我們能怎麼做？ B：我們可以發給他們空包重量不到一公斤的新款【輕量】包包，這樣他們在漫長的工作日中就能少背很多重量。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的；容量大的",
    "en_def": "having a lot of room inside",
    "sentence": "A: I am going to Singapore for a week-long sales conference, and I need to bring business suits, product samples, and a laptop, so will my small bag be enough? B: No, you will need a more {{BLANK}} suitcase, because the samples take up a lot of room, and you may also bring back gifts from the clients.",
    "cn": "A：我要去新加坡參加為期一週的業務會議，需要帶西裝、產品樣品和筆電，我的小包包夠用嗎？ B：不夠，你需要一個更【寬敞】的行李箱，因為樣品很佔空間，而且你可能還會帶客戶送的禮物回來。"
  },
  {
    "word": "compact",
    "pos": "adj.",
    "cn_def": "小巧的；輕巧的",
    "en_def": "small and using little space",
    "sentence": "A: Many young office workers in Taipei ride scooters to work, and they say large bags are hard to store under the seat, so what product should we design for them? B: We should design a {{BLANK}} bag that fits easily under a scooter seat but still holds a tablet, a wallet, and a raincoat.",
    "cn": "A：台北很多年輕上班族騎機車通勤，他們說大包包很難放進座墊下，我們該為他們設計什麼產品？ B：我們應該設計一款【小巧】的包包，能輕鬆放進機車座墊下，但還是能裝平板、皮夾和雨衣。"
  },
  {
    "word": "fashionable",
    "pos": "adj.",
    "cn_def": "時髦的；流行的",
    "en_def": "popular and in a style that many people like now",
    "sentence": "A: Our bags are well made and practical, but sales to young customers have been falling this year, so what do you think is the main problem? B: Young people want bags that look {{BLANK}}, so we should work with a popular designer and add brighter colors and modern shapes to our collection.",
    "cn": "A：我們的包包做工好又實用，但今年賣給年輕顧客的銷量一直下滑，你覺得主要問題是什麼？ B：年輕人想要看起來【時髦】的包包，所以我們應該和受歡迎的設計師合作，在產品系列中加入更亮的顏色和現代的造型。"
  },
  {
    "word": "functional",
    "pos": "adj.",
    "cn_def": "實用的；功能性的",
    "en_def": "practical and useful, made to do a job well",
    "sentence": "A: The customer survey shows that business travelers do not care much about the color of a bag, so what do they want most when they choose one? B: They want a {{BLANK}} bag with many pockets, a laptop section, and a charging port, because they need to work in airports and hotels.",
    "cn": "A：顧客調查顯示商務旅客不太在意包包的顏色，那他們挑選時最想要的是什麼？ B：他們想要一個【實用】的包包，有很多口袋、筆電夾層和充電孔，因為他們需要在機場和飯店工作。"
  },
  {
    "word": "capacity",
    "pos": "n.",
    "cn_def": "容量",
    "en_def": "the amount that something can hold",
    "sentence": "A: The hiking company wants to know which backpack it should rent to customers for the two-day mountain tour, because some customers carry a lot of clothes. B: Choose the one with a forty-liter {{BLANK}}, because it holds clothes, food, and water for two days, but it is still light enough for most people.",
    "cn": "A：登山公司想知道兩天山區行程該出租哪一款背包給客人，因為有些客人會帶很多衣服。 B：選四十公升【容量】的那一款，因為它能裝兩天份的衣服、食物和水，而且對大多數人來說還是夠輕。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；收納",
    "en_def": "to arrange things in a neat and useful way",
    "sentence": "A: My bag is always so messy that I cannot find my pens, business cards, or keys when a client is waiting, and it makes me look unprofessional. B: You should {{BLANK}} your things with small pouches, putting each type of item in its own place, so you can find anything in a few seconds.",
    "cn": "A：我的包包總是很亂，客戶在等的時候我都找不到筆、名片或鑰匙，讓我看起來很不專業。 B：你應該用小收納袋來【整理】你的東西，把每一類物品放在固定的位置，這樣幾秒鐘就能找到任何東西。"
  },
  {
    "word": "carry",
    "pos": "v.",
    "cn_def": "攜帶；拿",
    "en_def": "to hold something and take it with you",
    "sentence": "A: The new rules at the factory say that workers cannot bring large bags onto the production floor, so where should they keep their personal things? B: They can only {{BLANK}} a small clear bag with their phone and water bottle, and everything else must stay in the lockers near the main entrance.",
    "cn": "A：工廠的新規定說工人不能帶大包包進入生產區，那他們的私人物品要放哪裡？ B：他們只能【攜帶】一個裝手機和水壺的小透明袋，其他東西都必須放在大門附近的置物櫃裡。"
  },
  {
    "word": "pack",
    "pos": "v.",
    "cn_def": "打包；收拾（行李）",
    "en_def": "to put things into a bag or suitcase for a trip",
    "sentence": "A: My flight to Tokyo leaves at seven tomorrow morning, and I still have a lot of work to finish at the office tonight, so when will I have time to get ready? B: You should {{BLANK}} your suitcase as soon as you get home, before you do anything else, so you can sleep early and not forget anything important.",
    "cn": "A：我飛東京的班機明天早上七點起飛，今晚在辦公室還有很多工作要做，我什麼時候才有時間準備？ B：你一到家就應該先【打包】行李，再做其他事，這樣你才能早點睡，也不會忘記任何重要的東西。"
  },
  {
    "word": "travel",
    "pos": "v.",
    "cn_def": "旅行；出差",
    "en_def": "to go from one place to another, especially far away",
    "sentence": "A: Our sales manager is going to Japan, Korea, and Thailand in two weeks, and she will only have one bag, so what kind should she take? B: She will {{BLANK}} light with a carry-on suitcase, because she can take it on the plane and avoid waiting at baggage claim in every airport.",
    "cn": "A：我們業務經理兩週後要去日本、韓國和泰國，她只會帶一個包包，她該帶哪一種？ B：她會帶一個登機箱輕裝【出差】，因為可以帶上飛機，在每個機場都不必等行李。"
  },
  {
    "word": "reusable",
    "pos": "adj.",
    "cn_def": "可重複使用的",
    "en_def": "able to be used again and again",
    "sentence": "A: The supermarket wants to stop giving out plastic bags next year, but some shoppers may be unhappy about it, so how can we help them change their habits? B: We can sell cheap {{BLANK}} bags near the checkout and give a small discount to customers who bring their own bags from home.",
    "cn": "A：超市明年想停止提供塑膠袋，但有些購物者可能會不高興，我們要怎麼幫助他們改變習慣？ B：我們可以在結帳處附近販售便宜的【可重複使用】購物袋，並給自己從家裡帶袋子的顧客小折扣。"
  },
  {
    "word": "handle",
    "pos": "n.",
    "cn_def": "提把；把手",
    "en_def": "the part of a bag that you hold in your hand",
    "sentence": "A: The new shopping bags for our bakery look beautiful, but several customers said they broke when they carried heavy cakes home, so what went wrong? B: The paper {{BLANK}} is too thin for heavy boxes, so we should ask the printing company to use stronger rope instead.",
    "cn": "A：我們麵包店的新購物袋看起來很漂亮，但有幾位顧客說提重蛋糕回家時袋子壞了，問題出在哪裡？ B：紙製【提把】對重的盒子來說太薄了，所以我們應該請印刷公司改用比較堅固的繩子。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的；牢固的",
    "en_def": "safe and protected from being opened or stolen",
    "sentence": "A: Many tourists in our city have complained about pickpockets in crowded night markets, so what kind of bag should our travel shop recommend to them? B: We should recommend a {{BLANK}} bag with hidden zippers and a lock, so thieves cannot open it easily while people are walking through crowds.",
    "cn": "A：我們城市很多觀光客抱怨在擁擠的夜市遇到扒手，我們旅行用品店應該推薦他們什麼樣的包包？ B：我們應該推薦有隱藏式拉鍊和鎖的【安全】包包，這樣人們走在人群中時，小偷就不容易打開。"
  }
];

const MCQS = [
  {
    "q": "Students and office workers often carry a _____ to save their hands for other things. It sits comfortably on the back.",
    "options": [
      "clutch",
      "handle",
      "zipper",
      "backpack"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The store sells leather _____ in many colors for women. They are especially popular as birthday gifts.",
    "options": [
      "zipper",
      "lining",
      "handbag",
      "capacity"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visitors to the book fair received a free cotton _____. It is large enough to carry several books at once.",
    "options": [
      "tote",
      "zipper",
      "lining",
      "strap"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "She held a small _____ in her hand at the awards dinner. It was just big enough for her phone and keys.",
    "options": [
      "duffel",
      "clutch",
      "backpack",
      "capacity"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "He packed his gym clothes in a soft _____. He carries it on his shoulder to the fitness center every evening.",
    "options": [
      "zipper",
      "lining",
      "handle",
      "duffel"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Keep your earphones and cables in a small _____. That way they will not get lost at the bottom of your bag.",
    "options": [
      "capacity",
      "pouch",
      "lining",
      "handle"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The _____ on my suitcase got stuck at the airport. I could not open the bag to find my passport.",
    "options": [
      "zipper",
      "capacity",
      "leather",
      "canvas"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The bag has an adjustable shoulder _____. You can make it longer or shorter to fit your height.",
    "options": [
      "lining",
      "capacity",
      "strap",
      "pouch"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The laptop goes into a padded _____ inside the bag. It keeps the computer safe from bumps and spills.",
    "options": [
      "compartment",
      "handle",
      "strap",
      "zipper"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Please keep your boarding pass in an outside _____. You will need to show it several times at the airport.",
    "options": [
      "lining",
      "capacity",
      "leather",
      "pocket"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The bag has a soft red _____ inside. It protects your things and makes them easy to see.",
    "options": [
      "handle",
      "strap",
      "lining",
      "zipper"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "This briefcase is made of real _____. It will become softer and look better as it gets older.",
    "options": [
      "capacity",
      "leather",
      "compartment",
      "pocket"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The shoes are made of thick cotton _____. They are light, cool, and cheaper than leather ones.",
    "options": [
      "canvas",
      "capacity",
      "compartment",
      "pouch"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "This jacket is fully _____, so you will stay dry in heavy rain. It is perfect for hiking trips.",
    "options": [
      "fashionable",
      "reusable",
      "spacious",
      "waterproof"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "These tools are made of _____ steel. They can be used every day for many years without breaking.",
    "options": [
      "fashionable",
      "durable",
      "spacious",
      "reusable"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new laptop is very _____. It weighs less than one kilogram, so it is easy to carry everywhere.",
    "options": [
      "spacious",
      "reusable",
      "lightweight",
      "fashionable"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The hotel rooms are _____ and bright. Each one has a large desk, a sofa, and a big window.",
    "options": [
      "compact",
      "lightweight",
      "waterproof",
      "spacious"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "This _____ camera fits easily into a coat pocket. It is popular with travelers who do not want heavy equipment.",
    "options": [
      "spacious",
      "waterproof",
      "compact",
      "reusable"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The store sells _____ clothes for young professionals. Its styles change every season to follow new trends.",
    "options": [
      "fashionable",
      "waterproof",
      "reusable",
      "durable"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The new office chairs are both stylish and _____. They can be adjusted easily to support the back.",
    "options": [
      "waterproof",
      "functional",
      "reusable",
      "spacious"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The concert hall has a _____ of two thousand people. Tickets for the opening night have already sold out.",
    "options": [
      "lining",
      "handle",
      "pocket",
      "capacity"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Please _____ the files by date before the meeting. The manager wants to find each report quickly.",
    "options": [
      "travel",
      "organize",
      "carry",
      "pack"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Passengers may _____ one small bag onto the plane. Larger bags must be checked in at the counter.",
    "options": [
      "travel",
      "organize",
      "carry",
      "pack"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Please _____ your suitcase the night before the trip. The bus to the airport leaves at five in the morning.",
    "options": [
      "pack",
      "travel",
      "organize",
      "carry"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Our sales staff often _____ abroad to meet clients. Last year, they visited more than ten countries.",
    "options": [
      "organize",
      "pack",
      "carry",
      "travel"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The café gives a discount to customers who bring _____ cups. This helps reduce paper waste every day.",
    "options": [
      "reusable",
      "spacious",
      "fashionable",
      "compact"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The _____ of the shopping bag broke when I lifted it. All my groceries fell onto the sidewalk.",
    "options": [
      "lining",
      "handle",
      "capacity",
      "canvas"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Keep your passport in a _____ place during the trip. A hotel safe is better than an open bag.",
    "options": [
      "fashionable",
      "spacious",
      "secure",
      "lightweight"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The lawyer carries an old brown _____ to court. It has a long strap and a flap that holds her papers.",
    "options": [
      "zipper",
      "lining",
      "capacity",
      "satchel"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "This hiking backpack has a large _____ of fifty liters. It can hold enough food and clothes for three days.",
    "options": [
      "capacity",
      "lining",
      "handle",
      "zipper"
    ],
    "answer": 0,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "backpack": {
    "pos": "n.",
    "en_def": "a bag you carry on your back with two straps",
    "cn_def": "背包；後背包"
  },
  "handbag": {
    "pos": "n.",
    "en_def": "a small bag that women often use to carry money, keys, and other things",
    "cn_def": "手提包"
  },
  "tote": {
    "pos": "n.",
    "en_def": "a large open bag with two handles, used for carrying many things",
    "cn_def": "托特包；大手提袋"
  },
  "satchel": {
    "pos": "n.",
    "en_def": "a bag with a long strap and a flap, often used for books or papers",
    "cn_def": "側背書包；公事包"
  },
  "clutch": {
    "pos": "n.",
    "en_def": "a small, flat bag without a handle, held in the hand, usually for formal events",
    "cn_def": "手拿包"
  },
  "duffel": {
    "pos": "n.",
    "en_def": "a large soft bag shaped like a tube, used for sports clothes or travel",
    "cn_def": "圓筒旅行袋；行李袋"
  },
  "pouch": {
    "pos": "n.",
    "en_def": "a small soft bag for keeping small things",
    "cn_def": "小袋子；收納包"
  },
  "zipper": {
    "pos": "n.",
    "en_def": "a metal or plastic device with two rows of teeth that closes a bag or clothes",
    "cn_def": "拉鍊"
  },
  "strap": {
    "pos": "n.",
    "en_def": "a narrow piece of leather or cloth used to carry a bag",
    "cn_def": "背帶；肩帶"
  },
  "compartment": {
    "pos": "n.",
    "en_def": "a separate section inside a bag for keeping things apart",
    "cn_def": "隔層；夾層"
  },
  "pocket": {
    "pos": "n.",
    "en_def": "a small bag sewn onto or into a larger bag or clothes",
    "cn_def": "口袋"
  },
  "lining": {
    "pos": "n.",
    "en_def": "a layer of material covering the inside of a bag",
    "cn_def": "內襯；襯裡"
  },
  "leather": {
    "pos": "n.",
    "en_def": "animal skin that is treated and used to make bags, shoes, and clothes",
    "cn_def": "皮革"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "a strong, heavy cloth used for bags, shoes, and tents",
    "cn_def": "帆布"
  },
  "waterproof": {
    "pos": "adj.",
    "en_def": "not letting water go through",
    "cn_def": "防水的"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "able to last a long time without breaking",
    "cn_def": "耐用的"
  },
  "lightweight": {
    "pos": "adj.",
    "en_def": "not heavy",
    "cn_def": "輕量的；輕便的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of room inside",
    "cn_def": "寬敞的；容量大的"
  },
  "compact": {
    "pos": "adj.",
    "en_def": "small and using little space",
    "cn_def": "小巧的；輕巧的"
  },
  "fashionable": {
    "pos": "adj.",
    "en_def": "popular and in a style that many people like now",
    "cn_def": "時髦的；流行的"
  },
  "functional": {
    "pos": "adj.",
    "en_def": "practical and useful, made to do a job well",
    "cn_def": "實用的；功能性的"
  },
  "capacity": {
    "pos": "n.",
    "en_def": "the amount that something can hold",
    "cn_def": "容量"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a neat and useful way",
    "cn_def": "整理；收納"
  },
  "carry": {
    "pos": "v.",
    "en_def": "to hold something and take it with you",
    "cn_def": "攜帶；拿"
  },
  "pack": {
    "pos": "v.",
    "en_def": "to put things into a bag or suitcase for a trip",
    "cn_def": "打包；收拾（行李）"
  },
  "travel": {
    "pos": "v.",
    "en_def": "to go from one place to another, especially far away",
    "cn_def": "旅行；出差"
  },
  "reusable": {
    "pos": "adj.",
    "en_def": "able to be used again and again",
    "cn_def": "可重複使用的"
  },
  "handle": {
    "pos": "n.",
    "en_def": "the part of a bag that you hold in your hand",
    "cn_def": "提把；把手"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe and protected from being opened or stolen",
    "cn_def": "安全的；牢固的"
  }
};

const EXTRA_GLOSSES = {};
