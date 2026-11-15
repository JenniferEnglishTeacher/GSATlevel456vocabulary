// Topic 63 Quiz Data: Coins 硬幣
// Source word list: https://www.examword.com/group-topic/coins — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T63 - Coins 硬幣",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "currency",
    "pos": "n.",
    "cn_def": "貨幣",
    "en_def": "the money used in a particular country",
    "sentence": "A: I'm flying to Tokyo for the trade fair next Monday, and I won't have time to visit a bank after I land, so what should I do about money? B: You should exchange some local {{BLANK}} at the airport counter here before you leave, because taxis and small restaurants in Japan often prefer cash.",
    "cn": "A：我下週一要飛去東京參加貿易展，落地後沒時間去銀行，錢的部分該怎麼辦？ B：你應該出發前在這裡的機場櫃檯換一些當地【貨幣】，因為日本的計程車和小餐廳常常比較喜歡收現金。"
  },
  {
    "word": "change",
    "pos": "n.",
    "cn_def": "零錢",
    "en_def": "coins or small amounts of money",
    "sentence": "A: The vending machine on the third floor keeps rejecting my five-hundred-dollar bill, and I really need a coffee before the client meeting starts at ten, so can you help me? B: Sure, I have some small {{BLANK}} in my desk drawer, so take a few coins and pay me back after lunch.",
    "cn": "A：三樓的自動販賣機一直不收我的五百元鈔票，客戶會議十點開始前我真的需要一杯咖啡，你可以幫我嗎？ B：當然，我書桌抽屜裡有一些【零錢】，拿幾個硬幣去用，午餐後再還我就好。"
  },
  {
    "word": "denomination",
    "pos": "n.",
    "cn_def": "面額",
    "en_def": "the value printed on a coin or bill",
    "sentence": "A: The bank teller asked how I wanted the cash for the staff party prizes, but I wasn't sure what to say, so what would you suggest? B: Ask for a mix of every {{BLANK}}, from ten-dollar coins to thousand-dollar bills, so that we can prepare envelopes with different amounts for each winner.",
    "cn": "A：銀行行員問我員工派對獎金的現金要怎麼領，但我不確定該怎麼回答，你有什麼建議？ B：每種【面額】都換一些，從十元硬幣到千元鈔票都要，這樣我們就能為每位得獎者準備不同金額的紅包。"
  },
  {
    "word": "mint",
    "pos": "v.",
    "cn_def": "鑄造（硬幣）",
    "en_def": "to make coins from metal",
    "sentence": "A: Our museum shop wants to sell special coins to celebrate the city's two-hundredth anniversary next spring, but who can actually produce them for us? B: The national coin factory will {{BLANK}} a limited number of silver pieces for us, but we must send them the final drawings before the end of this month.",
    "cn": "A：我們博物館商店想販售特別的硬幣，慶祝明年春天城市兩百週年，但誰真的能幫我們製作？ B：國家造幣廠會為我們【鑄造】限量的銀幣，但我們必須在這個月底前把最終設計圖寄給他們。"
  },
  {
    "word": "metal",
    "pos": "n.",
    "cn_def": "金屬",
    "en_def": "a hard material such as gold, copper, or iron",
    "sentence": "A: Why does the new one-dollar coin feel so much lighter than the old one when I hold it in my hand? B: The government decided to use a cheaper {{BLANK}} to lower production costs, so the coin is thinner and weighs less, although it still looks very similar to the previous version.",
    "cn": "A：為什麼新的一元硬幣拿在手上感覺比舊的輕這麼多？ B：政府為了降低生產成本，決定使用比較便宜的【金屬】，所以硬幣變得更薄更輕，不過外觀還是和之前的版本很像。"
  },
  {
    "word": "alloy",
    "pos": "n.",
    "cn_def": "合金",
    "en_def": "a metal made by mixing two or more metals",
    "sentence": "A: The supplier says the souvenir coins for our hotel guests will not turn green or rust, even after many years, so what are they made of? B: They use a strong {{BLANK}} of copper and nickel, which is cheaper than pure silver but stays bright and resists damage from water and air.",
    "cn": "A：供應商說我們給飯店客人的紀念幣即使過了很多年也不會變綠或生鏽，它們是用什麼做的？ B：他們使用銅和鎳的堅固【合金】，比純銀便宜，但能保持光亮，並且不受水和空氣損害。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "圖案設計",
    "en_def": "the pattern or picture on something",
    "sentence": "A: The marketing team voted on three ideas for the company's tenth-anniversary coin yesterday afternoon, so which one did they finally choose? B: They picked the {{BLANK}} with our first office building on one side and a small tree on the other, because it shows how the business has grown since 2016.",
    "cn": "A：行銷團隊昨天下午針對公司十週年紀念幣的三個點子投票，他們最後選了哪一個？ B：他們選了一面是我們第一棟辦公大樓、另一面是一棵小樹的【圖案設計】，因為它展現了公司自2016年以來的成長。"
  },
  {
    "word": "engraving",
    "pos": "n.",
    "cn_def": "雕刻圖案",
    "en_def": "a picture or words cut into metal or stone",
    "sentence": "A: This old coin from my grandfather's drawer looks quite ordinary, so why did the dealer at the antique market offer me such a high price for it? B: Look closely at the tiny {{BLANK}} of a ship near the bottom, because only a few hundred coins were made with that detail before the factory changed it.",
    "cn": "A：這枚從我祖父抽屜找到的舊硬幣看起來很普通，為什麼古董市場的商人出這麼高的價錢？ B：仔細看底部附近那個小小的船隻【雕刻圖案】，因為在工廠改版之前，只有幾百枚硬幣有這個細節。"
  },
  {
    "word": "edge",
    "pos": "n.",
    "cn_def": "邊緣",
    "en_def": "the outer side or rim of a flat object",
    "sentence": "A: Visitors with poor eyesight sometimes find it hard to tell the fifty-dollar coin from the ten-dollar coin, so how can they separate them quickly? B: They can feel the {{BLANK}} with their fingers, because the larger coin has small lines around it while the smaller one is completely smooth.",
    "cn": "A：視力不好的訪客有時很難分辨五十元和十元硬幣，他們要怎麼快速區分？ B：他們可以用手指摸硬幣的【邊緣】，因為較大的硬幣周圍有細紋，而較小的那枚則完全光滑。"
  },
  {
    "word": "face",
    "pos": "n.",
    "cn_def": "（硬幣的）正面",
    "en_def": "the front side of a coin, usually with a picture of a person",
    "sentence": "A: The new trainee at the bank wants to know which side of each coin should point up in the visitors' display case, so what should I tell him? B: Put the {{BLANK}} with the president's portrait on top, because customers usually want to see the famous picture first and the number on the back second.",
    "cn": "A：銀行的新進實習生想知道訪客展示櫃裡每枚硬幣該哪一面朝上，我該怎麼告訴他？ B：把印有總統肖像的【正面】朝上，因為顧客通常想先看到有名的人像，再看背面的數字。"
  },
  {
    "word": "reverse",
    "pos": "n.",
    "cn_def": "（硬幣的）背面",
    "en_def": "the back side of a coin",
    "sentence": "A: The catalog photo only shows the portrait of the queen, so how can our buyers tell which year this coin was made before they place an order? B: Ask the seller to send another picture of the {{BLANK}}, because the year and the name of the factory are printed on that side beneath the eagle.",
    "cn": "A：目錄照片只顯示女王的肖像，我們的買家下單前要怎麼知道這枚硬幣是哪一年鑄造的？ B：請賣家再寄一張【背面】的照片，因為年份和造幣廠名稱就印在那一面的老鷹下方。"
  },
  {
    "word": "circulation",
    "pos": "n.",
    "cn_def": "流通",
    "en_def": "the movement of money from person to person in daily use",
    "sentence": "A: I found a strange two-dollar coin in my change at the supermarket this morning, and the cashier had never seen one before, so is it still valid? B: Yes, but very few people use it, because the government took most of them out of {{BLANK}} in 2010 after shoppers complained that they looked too similar to other coins.",
    "cn": "A：今天早上我在超市找的零錢裡發現一枚奇怪的兩元硬幣，收銀員也從沒見過，它還能用嗎？ B：可以，但很少人使用，因為2010年購物者抱怨它和其他硬幣太像之後，政府就把大部分收回、不再【流通】。"
  },
  {
    "word": "legal tender",
    "pos": "n.phr.",
    "cn_def": "法定貨幣",
    "en_def": "money that must be accepted by law for payments",
    "sentence": "A: A tourist at our gift shop wants to pay with old coins from the 1980s that she found at home, so should we accept them or not? B: Please check the list from the central bank first, because those coins are no longer {{BLANK}}, and we cannot deposit them into our business account.",
    "cn": "A：禮品店有位觀光客想用她在家裡找到的1980年代舊硬幣付款，我們該不該收？ B：請先查看中央銀行的清單，因為那些硬幣已經不是【法定貨幣】，我們也無法把它們存進公司帳戶。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值",
    "en_def": "how much money something is worth",
    "sentence": "A: My uncle left me a box of foreign coins when he moved overseas last year, so how can I find out whether they are worth anything? B: Take them to the coin dealer near the train station, because she can check their condition and age and tell you the real {{BLANK}} of each piece for free.",
    "cn": "A：我叔叔去年搬到國外時留給我一盒外國硬幣，我要怎麼知道它們值不值錢？ B：拿去火車站附近的錢幣商那裡，她可以檢查它們的狀況和年代，並免費告訴你每一枚的真正【價值】。"
  },
  {
    "word": "worth",
    "pos": "n.",
    "cn_def": "價值；等值的量",
    "en_def": "the amount of something that a sum of money equals or buys",
    "sentence": "A: The children's charity asked our office to collect spare coins for three months, so how much money did the staff finally give to them yesterday? B: We handed over about five thousand dollars' {{BLANK}} of coins in two heavy glass jars, and the bank needed nearly an hour to count everything by machine.",
    "cn": "A：兒童慈善機構請我們辦公室收集零錢三個月，員工們昨天最後給了他們多少錢？ B：我們交出了兩個沉重玻璃罐、大約【價值】五千元的硬幣，銀行用機器數了將近一個小時才數完。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "稀有的",
    "en_def": "not common; hard to find",
    "sentence": "A: Why is everyone at the collectors' fair crowding around that small table in the corner instead of visiting the other booths this afternoon? B: The man there is selling an extremely {{BLANK}} coin from 1933, and experts believe fewer than twenty of them still exist anywhere in the world today.",
    "cn": "A：為什麼今天下午收藏展上大家都擠在角落那張小桌子旁，而不去逛其他攤位？ B：那裡的男士正在賣一枚1933年極為【稀有的】硬幣，專家認為現今全世界剩下不到二十枚。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的",
    "en_def": "very old; from a long time ago",
    "sentence": "A: The history museum downtown is planning a new exhibition for the summer holidays, so what kind of objects will visitors be able to see there? B: They will show {{BLANK}} coins from Greece and Rome that are more than two thousand years old, along with tools that people used to make money back then.",
    "cn": "A：市中心的歷史博物館正在規劃暑假的新展覽，訪客會在那裡看到什麼樣的展品？ B：他們會展出來自希臘和羅馬、超過兩千年歷史的【古代】硬幣，還有當時人們用來製作錢幣的工具。"
  },
  {
    "word": "collectible",
    "pos": "adj.",
    "cn_def": "具收藏價值的",
    "en_def": "worth collecting because it is special or limited",
    "sentence": "A: The post office is selling a set of coins with pictures of Taiwan's national parks, so do you think they are just for tourists or for serious buyers? B: They are highly {{BLANK}} because only five thousand sets were produced, so many people buy them as gifts or as a long-term investment.",
    "cn": "A：郵局在賣一組印有台灣國家公園圖案的硬幣，你覺得它們只是給觀光客的，還是給認真的買家？ B：它們非常【具收藏價值】，因為只生產了五千組，所以很多人買來當禮物或長期投資。"
  },
  {
    "word": "shiny",
    "pos": "adj.",
    "cn_def": "閃亮的",
    "en_def": "bright and reflecting light",
    "sentence": "A: The jewelry store wants to give each customer a lucky coin during the Lunar New Year sale next week, so what should the coins look like? B: They should be bright and {{BLANK}}, like new gold, because customers believe clean coins bring good fortune, so please ask the bank for freshly made ones.",
    "cn": "A：珠寶店下週農曆新年特賣時想送每位客人一枚幸運硬幣，硬幣應該是什麼樣子？ B：應該要明亮又【閃亮】，像新的金子一樣，因為客人相信乾淨的硬幣會帶來好運，所以請向銀行要剛鑄好的硬幣。"
  },
  {
    "word": "worn",
    "pos": "adj.",
    "cn_def": "磨損的",
    "en_def": "damaged or thin from long use",
    "sentence": "A: The ticket machine at the parking garage keeps returning one of my coins, even though it looks normal, so what could be wrong with it? B: It is probably too {{BLANK}} after many years of use, because the machine checks the weight and thickness, and old coins slowly become lighter as people handle them.",
    "cn": "A：停車場的售票機一直退回我的一枚硬幣，雖然它看起來很正常，可能是哪裡出了問題？ B：它大概用了很多年、太【磨損】了，因為機器會檢查重量和厚度，而舊硬幣經過人們經手後會慢慢變輕。"
  },
  {
    "word": "counterfeit",
    "pos": "adj.",
    "cn_def": "偽造的",
    "en_def": "fake; made to look real in order to cheat people",
    "sentence": "A: The cashier at our convenience store noticed that several fifty-dollar coins in the drawer felt lighter than usual today, so what should she do? B: She should put them aside and call the police, because they might be {{BLANK}} coins, and a gang was caught making fake money in this area last month.",
    "cn": "A：我們便利商店的收銀員今天發現抽屜裡好幾枚五十元硬幣比平常輕，她該怎麼辦？ B：她應該把它們放在一旁並報警，因為它們可能是【偽造的】硬幣，上個月這一帶才抓到一個製造假錢的集團。"
  },
  {
    "word": "authentic",
    "pos": "adj.",
    "cn_def": "真品的；真正的",
    "en_def": "real, not a copy",
    "sentence": "A: An online seller is offering a silver coin from the eighteenth century for only three thousand dollars, so should our gallery buy it for the new display? B: Not yet, because we must first ask an expert to confirm that it is {{BLANK}}, since many cheap copies of old coins are sold on the internet.",
    "cn": "A：有位網路賣家只要三千元就賣一枚十八世紀的銀幣，我們畫廊要買來放新展區嗎？ B：先不要，因為我們必須先請專家確認它是【真品】，網路上有很多便宜的舊硬幣仿製品。"
  },
  {
    "word": "collect",
    "pos": "v.",
    "cn_def": "收集",
    "en_def": "to get and keep things of one kind as a hobby",
    "sentence": "A: Your desk is always full of small plastic bags and boxes, so what are you doing with all those coins from different countries? B: I {{BLANK}} coins from every place I visit on business trips, and so far I have pieces from twenty-three countries, which I plan to show my children someday.",
    "cn": "A：你的桌上總是放滿小塑膠袋和盒子，你拿那些來自不同國家的硬幣做什麼？ B：我出差到每個地方都會【收集】當地的硬幣，到目前為止已經有二十三個國家的硬幣，打算有一天給我的孩子看。"
  },
  {
    "word": "trade",
    "pos": "v.",
    "cn_def": "交換",
    "en_def": "to exchange one thing for another",
    "sentence": "A: You and Mr. Lin from accounting seem to spend every lunch break looking at coins together, so what exactly are you two doing? B: We {{BLANK}} coins with each other, because he has extra pieces from Europe that I need, and I have several Japanese ones that are missing from his set.",
    "cn": "A：你和會計部的林先生好像每天午休都一起看硬幣，你們兩個到底在做什麼？ B：我們彼此【交換】硬幣，因為他有我需要的多餘歐洲硬幣，而我有幾枚他那套收藏缺少的日本硬幣。"
  },
  {
    "word": "spend",
    "pos": "v.",
    "cn_def": "花（錢）",
    "en_def": "to use money to buy things",
    "sentence": "A: I still have a lot of euro coins left over from the conference in Paris, and banks here will not exchange them, so what can I do? B: Try to {{BLANK}} them at the airport shops before your next flight to Europe, because coins are usually impossible to change back into Taiwan dollars.",
    "cn": "A：我在巴黎開會後還剩很多歐元硬幣，這裡的銀行不收，我該怎麼辦？ B：下次飛歐洲時試著在機場商店把它們【花掉】，因為硬幣通常沒辦法換回台幣。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "存（錢）",
    "en_def": "to keep money instead of spending it",
    "sentence": "A: Your daughter told me she wants to buy a new bicycle before the summer vacation starts, so how is she planning to pay for it? B: She has decided to {{BLANK}} all the coins she receives as pocket money in a large piggy bank, and I promised to pay half if she reaches her goal.",
    "cn": "A：你女兒跟我說她想在暑假開始前買一台新腳踏車，她打算怎麼付錢？ B：她決定把收到的零用錢硬幣全部【存】進一個大撲滿裡，我答應她如果達到目標就幫她出一半。"
  },
  {
    "word": "flip",
    "pos": "v.",
    "cn_def": "擲（硬幣）",
    "en_def": "to throw a coin into the air so that it turns over",
    "sentence": "A: Both teams want to present first at tomorrow's sales competition, and the manager doesn't want to treat either side unfairly, so how will she decide? B: She will {{BLANK}} a coin in front of both team leaders before the meeting starts, and the winner of the toss can choose to go first or second.",
    "cn": "A：明天的業務比賽兩隊都想先報告，經理又不想對任何一方不公平，她會怎麼決定？ B：她會在會議開始前當著兩位隊長的面【擲】硬幣，猜贏的一方可以選擇先報告或後報告。"
  },
  {
    "word": "deposit",
    "pos": "v.",
    "cn_def": "存入",
    "en_def": "to put money into a bank account",
    "sentence": "A: Our café collects a huge bag of coins from the tip jar every week, and it is getting too heavy to keep in the office, so what do you suggest? B: You can {{BLANK}} them at the bank's coin machine on Friday mornings, and the money goes straight into the café account without any extra fee.",
    "cn": "A：我們咖啡館每週從小費罐收到一大袋硬幣，重到不適合放在辦公室，你有什麼建議？ B：你可以在週五早上用銀行的硬幣機把它們【存入】，錢會直接進到咖啡館的帳戶，不收額外手續費。"
  },
  {
    "word": "count",
    "pos": "v.",
    "cn_def": "數；計算",
    "en_def": "to find the total number of something",
    "sentence": "A: The night manager says the cash register was short by about two hundred dollars yesterday, so what will we do differently from now on? B: Two staff members will {{BLANK}} all the coins and bills together at the end of every shift, and then both of them will sign the report before going home.",
    "cn": "A：夜班經理說昨天收銀機短少了大約兩百元，從現在起我們要怎麼做？ B：每班結束時會由兩位員工一起【數】所有硬幣和鈔票，然後兩人都在報告上簽名才下班。"
  },
  {
    "word": "collector",
    "pos": "n.",
    "cn_def": "收藏家",
    "en_def": "a person who collects things as a hobby",
    "sentence": "A: Who was that elderly gentleman asking so many questions at the information desk about the coin exhibition this morning? B: He is a famous {{BLANK}} from Tainan who owns more than ten thousand old coins, and he offered to lend us some of his best pieces for next year's show.",
    "cn": "A：今天早上在服務台問了很多硬幣展覽問題的那位老先生是誰？ B：他是來自台南的知名【收藏家】，擁有超過一萬枚舊硬幣，還主動借我們幾枚他最好的硬幣參加明年的展覽。"
  },
  {
    "word": "numismatics",
    "pos": "n.",
    "cn_def": "錢幣學",
    "en_def": "the study or collecting of coins and money",
    "sentence": "A: The university is offering evening courses for adults next semester, and I am interested in history and money, so which class would you recommend? B: You should try the class on {{BLANK}}, because the professor teaches how to study old coins and what they tell us about trade and daily life in the past.",
    "cn": "A：大學下學期開設成人夜間課程，我對歷史和金錢有興趣，你推薦哪一門課？ B：你應該試試【錢幣學】這門課，因為教授會教大家如何研究舊硬幣，以及它們能告訴我們過去的貿易和日常生活。"
  },
  {
    "word": "treasure",
    "pos": "n.",
    "cn_def": "寶藏",
    "en_def": "a collection of valuable things such as gold or coins",
    "sentence": "A: I read in the news that workers building the new subway station downtown found something unusual underground last week, so what was it? B: They discovered a hidden {{BLANK}} of about three hundred gold coins inside an old clay pot, and historians think a rich family buried it during a war.",
    "cn": "A：我在新聞上看到，在市中心興建新捷運站的工人上週在地底發現不尋常的東西，那是什麼？ B：他們在一個舊陶罐裡發現了大約三百枚金幣的隱藏【寶藏】，歷史學家認為是某個富有家族在戰爭時埋下的。"
  }
];

const MCQS = [
  {
    "q": "Before traveling to Thailand, Ms. Chen changed her savings into the local _____. She wanted to pay for taxis in cash.",
    "options": [
      "currency",
      "edge",
      "collector",
      "alloy"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The parking meter only accepts coins, so Mr. Ho searched his pockets for some _____. Luckily, he found three ten-dollar coins.",
    "options": [
      "reverse",
      "circulation",
      "change",
      "engraving"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new fifty-dollar coin is the largest _____ in the country's coin system. It replaced the old paper note last year.",
    "options": [
      "edge",
      "denomination",
      "treasure",
      "collector"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The factory will _____ two million new coins next year from copper and nickel. Each coin will show the national flower.",
    "options": [
      "deposit",
      "collect",
      "flip",
      "mint"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Gold is a soft _____, so it is rarely used for everyday coins. Coins made from it would wear down too quickly.",
    "options": [
      "face",
      "metal",
      "design",
      "collector"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The coin is made from a strong _____ of copper, zinc, and nickel. This mixture does not rust easily.",
    "options": [
      "alloy",
      "value",
      "edge",
      "treasure"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Students were invited to submit a _____ for the city's new souvenir coin. The winning picture showed the harbor at sunset.",
    "options": [
      "metal",
      "circulation",
      "design",
      "denomination"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The artist spent three months creating the detailed _____ of a mountain on the silver coin. Every tree was cut by hand.",
    "options": [
      "collector",
      "change",
      "currency",
      "engraving"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The ten-dollar coin has small lines all around its _____. This helps blind people recognize it quickly by touch.",
    "options": [
      "collector",
      "edge",
      "treasure",
      "currency"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The king's portrait appears on the _____ of every coin. The value is printed on the other side.",
    "options": [
      "change",
      "alloy",
      "currency",
      "face"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The front of the coin shows a famous scientist. On the _____, you can see the year it was made and a small bird.",
    "options": [
      "denomination",
      "currency",
      "reverse",
      "collector"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The old one-dollar coins were removed from _____ in 2015. Shops in the city no longer accept them for payment.",
    "options": [
      "circulation",
      "treasure",
      "metal",
      "design"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Commemorative coins are _____, but few people use them in stores. Most owners keep them at home as souvenirs.",
    "options": [
      "edge",
      "design",
      "engraving",
      "legal tender"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Experts say the _____ of this rare coin has doubled in five years. It is now sold for over a million dollars.",
    "options": [
      "edge",
      "value",
      "alloy",
      "design"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Coins with printing mistakes are very _____ because most are destroyed at the factory. Collectors pay high prices for them.",
    "options": [
      "rare",
      "shiny",
      "worn",
      "ancient"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "These silver coins are truly _____. Roman soldiers used them in Britain almost two thousand years ago during a long war.",
    "options": [
      "counterfeit",
      "worn",
      "ancient",
      "shiny"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Only one thousand of these gold coins were made, so they are highly _____. Many buyers hope their value will rise.",
    "options": [
      "shiny",
      "collectible",
      "worn",
      "ancient"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The newly made coins were so _____ that they reflected the light like mirrors. The bank gave them out during the holiday.",
    "options": [
      "worn",
      "counterfeit",
      "shiny",
      "ancient"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "After fifty years of daily use, the coin is so _____ that you can hardly see the portrait. Vending machines no longer accept it.",
    "options": [
      "authentic",
      "shiny",
      "collectible",
      "worn"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Police arrested two men for making _____ coins in a small garage. The fake coins looked real but were much lighter.",
    "options": [
      "counterfeit",
      "authentic",
      "rare",
      "ancient"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The expert examined the old coin under a microscope for an hour. She confirmed that it was _____, not a modern copy.",
    "options": [
      "worn",
      "shiny",
      "counterfeit",
      "authentic"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Mr. Park began to _____ stamps and coins when he was ten years old. Today his hobby fills an entire room.",
    "options": [
      "spend",
      "collect",
      "deposit",
      "flip"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "At the weekend fair, collectors _____ coins with one another instead of paying cash. Each person hopes to complete a set.",
    "options": [
      "trade",
      "flip",
      "count",
      "mint"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Tourists often try to _____ their last foreign coins at the airport. Banks at home usually refuse to exchange coins.",
    "options": [
      "collect",
      "mint",
      "spend",
      "flip"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Emma decided to _____ every coin she received for a whole year. By December, she had enough money for a new camera.",
    "options": [
      "mint",
      "save",
      "spend",
      "flip"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The referee will _____ a coin to decide which team kicks off first. The two captains must call heads or tails.",
    "options": [
      "save",
      "mint",
      "flip",
      "deposit"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Every Friday, the shop manager goes to the bank to _____ the week's coins. The money goes directly into the store's account.",
    "options": [
      "spend",
      "flip",
      "mint",
      "deposit"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The cashier had to _____ all the coins in the drawer before closing the store. The total was exactly 3,450 dollars.",
    "options": [
      "count",
      "mint",
      "trade",
      "flip"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The famous _____ owns over five thousand coins from sixty countries. He plans to donate them to the national museum.",
    "options": [
      "alloy",
      "collector",
      "edge",
      "denomination"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Divers found a sunken ship full of _____ near the island. It included hundreds of Spanish gold coins and silver cups.",
    "options": [
      "treasure",
      "design",
      "face",
      "edge"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "currency": {
    "pos": "n.",
    "en_def": "the money used in a particular country",
    "cn_def": "貨幣"
  },
  "change": {
    "pos": "n.",
    "en_def": "coins or small amounts of money",
    "cn_def": "零錢"
  },
  "denomination": {
    "pos": "n.",
    "en_def": "the value printed on a coin or bill",
    "cn_def": "面額"
  },
  "mint": {
    "pos": "v.",
    "en_def": "to make coins from metal",
    "cn_def": "鑄造（硬幣）"
  },
  "metal": {
    "pos": "n.",
    "en_def": "a hard material such as gold, copper, or iron",
    "cn_def": "金屬"
  },
  "alloy": {
    "pos": "n.",
    "en_def": "a metal made by mixing two or more metals",
    "cn_def": "合金"
  },
  "design": {
    "pos": "n.",
    "en_def": "the pattern or picture on something",
    "cn_def": "圖案設計"
  },
  "engraving": {
    "pos": "n.",
    "en_def": "a picture or words cut into metal or stone",
    "cn_def": "雕刻圖案"
  },
  "edge": {
    "pos": "n.",
    "en_def": "the outer side or rim of a flat object",
    "cn_def": "邊緣"
  },
  "face": {
    "pos": "n.",
    "en_def": "the front side of a coin, usually with a picture of a person",
    "cn_def": "（硬幣的）正面"
  },
  "reverse": {
    "pos": "n.",
    "en_def": "the back side of a coin",
    "cn_def": "（硬幣的）背面"
  },
  "circulation": {
    "pos": "n.",
    "en_def": "the movement of money from person to person in daily use",
    "cn_def": "流通"
  },
  "legal tender": {
    "pos": "n.phr.",
    "en_def": "money that must be accepted by law for payments",
    "cn_def": "法定貨幣"
  },
  "value": {
    "pos": "n.",
    "en_def": "how much money something is worth",
    "cn_def": "價值"
  },
  "worth": {
    "pos": "n.",
    "en_def": "the amount of something that a sum of money equals or buys",
    "cn_def": "價值；等值的量"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not common; hard to find",
    "cn_def": "稀有的"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a long time ago",
    "cn_def": "古代的"
  },
  "collectible": {
    "pos": "adj.",
    "en_def": "worth collecting because it is special or limited",
    "cn_def": "具收藏價值的"
  },
  "shiny": {
    "pos": "adj.",
    "en_def": "bright and reflecting light",
    "cn_def": "閃亮的"
  },
  "worn": {
    "pos": "adj.",
    "en_def": "damaged or thin from long use",
    "cn_def": "磨損的"
  },
  "counterfeit": {
    "pos": "adj.",
    "en_def": "fake; made to look real in order to cheat people",
    "cn_def": "偽造的"
  },
  "authentic": {
    "pos": "adj.",
    "en_def": "real, not a copy",
    "cn_def": "真品的；真正的"
  },
  "collect": {
    "pos": "v.",
    "en_def": "to get and keep things of one kind as a hobby",
    "cn_def": "收集"
  },
  "trade": {
    "pos": "v.",
    "en_def": "to exchange one thing for another",
    "cn_def": "交換"
  },
  "spend": {
    "pos": "v.",
    "en_def": "to use money to buy things",
    "cn_def": "花（錢）"
  },
  "save": {
    "pos": "v.",
    "en_def": "to keep money instead of spending it",
    "cn_def": "存（錢）"
  },
  "flip": {
    "pos": "v.",
    "en_def": "to throw a coin into the air so that it turns over",
    "cn_def": "擲（硬幣）"
  },
  "deposit": {
    "pos": "v.",
    "en_def": "to put money into a bank account",
    "cn_def": "存入"
  },
  "count": {
    "pos": "v.",
    "en_def": "to find the total number of something",
    "cn_def": "數；計算"
  },
  "collector": {
    "pos": "n.",
    "en_def": "a person who collects things as a hobby",
    "cn_def": "收藏家"
  },
  "numismatics": {
    "pos": "n.",
    "en_def": "the study or collecting of coins and money",
    "cn_def": "錢幣學"
  },
  "treasure": {
    "pos": "n.",
    "en_def": "a collection of valuable things such as gold or coins",
    "cn_def": "寶藏"
  }
};

const EXTRA_GLOSSES = {};
