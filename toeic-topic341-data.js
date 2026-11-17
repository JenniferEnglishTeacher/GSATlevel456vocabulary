// Topic 341 Quiz Data: Sale 銷售
// Source word list: https://www.examword.com/group-topic/sale — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T341 - Sale 銷售",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual price",
    "sentence": "A: Our office printer is getting old, and the finance team says we only have a small budget left this quarter, so where should we buy a new one? B: The electronics store near the train station is giving a twenty percent {{BLANK}} to companies that order before Friday, so I think we should call them this afternoon.",
    "cn": "A：我們辦公室的印表機越來越舊了，財務部說這一季只剩下少量預算，我們應該去哪裡買新的？ B：火車站附近的電器行對週五前下單的公司提供兩成的【折扣】，所以我想我們今天下午應該打電話給他們。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "促銷活動",
    "en_def": "a special activity to help sell a product",
    "sentence": "A: The new coffee machine has been on the shelves for two weeks, but very few customers seem to notice it, so what is the marketing team planning to do next? B: They are starting a special {{BLANK}} this weekend, where shoppers who buy the machine will get a free bag of coffee beans and a reusable cup.",
    "cn": "A：新咖啡機已經上架兩週了，但似乎很少顧客注意到它，行銷團隊下一步打算怎麼做？ B：他們這個週末要展開一個特別的【促銷活動】，購買咖啡機的顧客可以免費獲得一包咖啡豆和一個環保杯。"
  },
  {
    "word": "bargain",
    "pos": "n.",
    "cn_def": "便宜貨；划算的東西",
    "en_def": "something bought for less than its real value",
    "sentence": "A: I heard you finally bought new chairs for the meeting room, but weren't you worried about spending too much money before the end of the year? B: Not at all, because the furniture shop was closing its old branch, and I got eight leather chairs for half price, which was a real {{BLANK}}.",
    "cn": "A：聽說你終於幫會議室買了新椅子，你不擔心年底前花太多錢嗎？ B：一點也不，因為那家家具行要關閉舊分店，我用半價買到八張皮椅，真是【划算的好貨】。"
  },
  {
    "word": "deal",
    "pos": "n.",
    "cn_def": "交易；協議",
    "en_def": "an agreement in business",
    "sentence": "A: Did you manage to talk to the supplier about the paper cups we need for the café, since our current stock will run out next Monday? B: Yes, I called their sales manager this morning, and we made a {{BLANK}} that gives us free delivery if we order at least five hundred boxes each month.",
    "cn": "A：你有跟供應商談到咖啡廳需要的紙杯嗎？因為我們目前的庫存下週一就會用完。 B：有，我今天早上打電話給他們的業務經理，我們達成了一項【協議】，只要每個月訂至少五百箱就免運費。"
  },
  {
    "word": "offer",
    "pos": "n.",
    "cn_def": "優惠",
    "en_def": "a lower price or special chance to buy something",
    "sentence": "A: The hotel down the street is full of guests every weekend, while our rooms are often empty, so how do you think they attract so many visitors? B: They have a special {{BLANK}} on their website, which lets families stay three nights for the price of two, and it includes breakfast and free parking.",
    "cn": "A：街尾那家飯店每個週末都客滿，而我們的房間卻常常空著，你覺得他們是怎麼吸引這麼多旅客的？ B：他們的網站上有一個特別【優惠】，家庭可以用兩晚的價格住三晚，還包含早餐和免費停車。"
  },
  {
    "word": "clearance",
    "pos": "n.",
    "cn_def": "清倉",
    "en_def": "the selling of old goods cheaply to remove them",
    "sentence": "A: Why are there so many signs with red letters in the windows of the clothing store, and why are people waiting outside before it even opens? B: The store is moving to a bigger location next month, so it is having a {{BLANK}} sale to get rid of all its old stock as quickly as possible.",
    "cn": "A：為什麼那家服飾店的櫥窗貼了這麼多紅字標語，而且還沒開門就有人在外面排隊？ B：那家店下個月要搬到更大的地點，所以正在舉辦【清倉】拍賣，想盡快把所有舊庫存賣掉。"
  },
  {
    "word": "markdown",
    "pos": "n.",
    "cn_def": "降價；減價",
    "en_def": "a cut in the price of an item",
    "sentence": "A: The winter coats in our shop have not sold well this season, and the warehouse is already full of spring clothes, so what should we do with them? B: The store manager has approved a thirty percent {{BLANK}} on all the coats, so please change the price tags before the doors open tomorrow morning.",
    "cn": "A：我們店裡的冬季大衣這一季賣得不好，倉庫又已經堆滿春裝了，我們該怎麼處理它們？ B：店長已經核准所有大衣【降價】三成，所以請在明天早上開門前換好價格標籤。"
  },
  {
    "word": "coupon",
    "pos": "n.",
    "cn_def": "優惠券",
    "en_def": "a small paper or digital ticket that gives you money off",
    "sentence": "A: I always see you paying less than I do when we buy lunch at the sandwich shop across from our office, so what is your secret? B: I downloaded their mobile app last month, and every Monday it sends me a {{BLANK}} that I can show to the cashier for two dollars off any meal.",
    "cn": "A：我們在辦公室對面的三明治店買午餐時，我總是看到你付得比我少，你的祕訣是什麼？ B：我上個月下載了他們的手機應用程式，每週一它都會傳給我一張【優惠券】，我只要出示給收銀員，任何餐點都能折兩美元。"
  },
  {
    "word": "voucher",
    "pos": "n.",
    "cn_def": "禮券；兌換券",
    "en_def": "a ticket that can be used instead of money",
    "sentence": "A: The sales team worked very hard this year and beat its target by almost fifteen percent, so how is the company going to thank them? B: The director has decided to give each person a gift {{BLANK}} worth one hundred dollars, which they can spend at any restaurant or department store in the city.",
    "cn": "A：業務團隊今年非常努力，超越目標將近百分之十五，公司打算怎麼感謝他們？ B：主管決定送每個人一張價值一百美元的【禮券】，可以在市內任何餐廳或百貨公司使用。"
  },
  {
    "word": "revenue",
    "pos": "n.",
    "cn_def": "營收；收入",
    "en_def": "the money a business receives from sales",
    "sentence": "A: The board meeting is tomorrow, and the directors want to know whether opening the new branch in the city center last spring was a good decision, so what should I tell them? B: You can tell them that the branch has doubled our monthly {{BLANK}}, mainly because many office workers now come in during lunch.",
    "cn": "A：董事會明天開會，董事們想知道去年春天在市中心開新分店是否是個好決定，我該怎麼跟他們說？ B：你可以告訴他們，這家分店讓我們每月的【營收】翻倍，主要是因為現在很多上班族會在午餐時間來店。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤；獲利",
    "en_def": "money earned after all costs are paid",
    "sentence": "A: Our bakery sold more cakes this year than ever before, so why does the accountant look so worried when she reads the financial report? B: Although sales went up, the price of butter and flour rose sharply, so after paying for ingredients and staff, our {{BLANK}} was much smaller than we expected.",
    "cn": "A：我們的麵包店今年賣出的蛋糕比以往都多，為什麼會計師看財務報表時看起來這麼擔心？ B：雖然銷售量上升，但奶油和麵粉的價格大漲，所以付完食材和員工的費用後，我們的【利潤】比預期少得多。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "虧損",
    "en_def": "money lost when costs are higher than income",
    "sentence": "A: Why did the company decide to close the small shop at the airport, even though it seemed busy with travelers every time I passed by? B: The rent there was extremely high, and after three years of paying staff and bills, the shop was still running at a {{BLANK}}, so management ended the lease.",
    "cn": "A：為什麼公司決定關掉機場那家小店？我每次經過時那裡似乎都有很多旅客。 B：那裡的租金非常高，支付了三年的員工薪資和各項帳單之後，那家店仍然處於【虧損】狀態，所以管理階層終止了租約。"
  },
  {
    "word": "transaction",
    "pos": "n.",
    "cn_def": "交易",
    "en_def": "an act of buying or selling; a payment",
    "sentence": "A: A customer just called and said she was charged twice when she paid for her shoes with a credit card yesterday afternoon, so what should I do? B: Please check the computer system for her name and the time of the {{BLANK}}, and if you find two payments, ask the manager to return one of them.",
    "cn": "A：有位顧客剛打電話來，說她昨天下午用信用卡買鞋時被扣了兩次款，我該怎麼辦？ B：請在電腦系統中查詢她的名字和那筆【交易】的時間，如果發現有兩筆付款，就請經理退還其中一筆。"
  },
  {
    "word": "retail",
    "pos": "n.",
    "cn_def": "零售業",
    "en_def": "the business of selling goods to the public in stores",
    "sentence": "A: You worked at a bank for many years before joining our team, so what made you decide to change your career and start working with customers in stores? B: I wanted a job where I could meet people every day, so I moved into {{BLANK}}, and now I manage three clothing shops in the downtown area.",
    "cn": "A：你加入我們團隊之前在銀行工作了很多年，是什麼讓你決定轉換跑道，開始在店裡服務顧客？ B：我想要一份每天都能接觸人群的工作，所以轉入【零售業】，現在我管理市中心的三家服飾店。"
  },
  {
    "word": "wholesale",
    "pos": "adj.",
    "cn_def": "批發的",
    "en_def": "sold in large amounts at lower prices, usually to businesses",
    "sentence": "A: Our café uses a lot of milk and sugar every week, and buying them at the supermarket is costing us too much money, so do you have any ideas? B: My cousin runs a food company that sells to restaurants at {{BLANK}} prices, so if we buy large amounts from him, we can save quite a lot.",
    "cn": "A：我們咖啡廳每週用掉很多牛奶和糖，在超市買花費太高了，你有什麼點子嗎？ B：我表哥經營一家食品公司，以【批發】價格賣給餐廳，所以如果我們向他大量購買，可以省下不少錢。"
  },
  {
    "word": "sell",
    "pos": "v.",
    "cn_def": "賣；銷售",
    "en_def": "to give something to someone for money",
    "sentence": "A: We have too many old laptops sitting in the storage room since the IT department gave everyone new computers last month, so what should we do with them? B: The manager suggested that we {{BLANK}} them to a second-hand shop nearby and use the money to buy new chairs for the staff lounge.",
    "cn": "A：自從資訊部上個月給大家換了新電腦後，儲藏室裡堆了太多舊筆電，我們該怎麼處理？ B：經理建議我們把它們【賣】給附近的二手店，再用那筆錢替員工休息室買新椅子。"
  },
  {
    "word": "purchase",
    "pos": "v.",
    "cn_def": "購買",
    "en_def": "to buy something",
    "sentence": "A: The new printer for the marketing department is broken again, and the repair company says it will take two weeks to fix, so what do you suggest? B: I think we should {{BLANK}} a better model from a reliable brand, because paying for repairs every month is wasting our time and money.",
    "cn": "A：行銷部的新印表機又壞了，維修公司說要兩週才能修好，你有什麼建議？ B：我認為我們應該【購買】可靠品牌的更好機型，因為每個月付維修費既浪費時間又浪費錢。"
  },
  {
    "word": "advertise",
    "pos": "v.",
    "cn_def": "打廣告；宣傳",
    "en_def": "to tell the public about a product so they will buy it",
    "sentence": "A: Our new fitness center opens next month, but not many people in the neighborhood know about it yet, so how can we get more members quickly? B: We could {{BLANK}} on local radio and social media, and also hand out flyers at the train station to office workers on their way home.",
    "cn": "A：我們的新健身中心下個月開幕，但附近還沒多少人知道，我們要怎樣才能快速招到更多會員？ B：我們可以在地方電台和社群媒體上【打廣告】，也可以在火車站發傳單給下班回家的上班族。"
  },
  {
    "word": "market",
    "pos": "v.",
    "cn_def": "行銷",
    "en_def": "to try to sell a product by planning how to reach buyers",
    "sentence": "A: Our company has developed a healthy energy drink for students, but the sales team isn't sure how to reach young people, so what is your plan? B: We will {{BLANK}} it through popular video channels and sports events, because teenagers spend a lot of time watching them after school.",
    "cn": "A：我們公司研發了一款給學生喝的健康能量飲料，但業務團隊不確定該怎麼接觸年輕人，你的計畫是什麼？ B：我們會透過熱門影音頻道和運動賽事來【行銷】它，因為青少年放學後花很多時間觀看這些內容。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "協商；談判",
    "en_def": "to discuss something to reach an agreement",
    "sentence": "A: The landlord wants to raise the rent for our office by ten percent next year, and our budget is already very tight, so should we look for another place? B: Before we make any decision, let's {{BLANK}} with him, because we have always paid on time and he may agree to a smaller change.",
    "cn": "A：房東想把我們辦公室明年的租金調漲一成，而我們的預算已經很緊了，我們該另找地方嗎？ B：在做任何決定之前，我們先跟他【協商】吧，因為我們一向準時付款，他或許會同意小一點的調幅。"
  },
  {
    "word": "increase",
    "pos": "v.",
    "cn_def": "增加",
    "en_def": "to make something bigger in amount or number",
    "sentence": "A: Our online store had fewer visitors this summer than last year, and the director is asking why sales have been so slow, so what should we report? B: We should explain that we plan to {{BLANK}} our advertising budget next quarter and add more photos and customer reviews to every product page.",
    "cn": "A：我們網路商店今年夏天的訪客比去年少，主管在問為什麼銷售這麼慢，我們該怎麼報告？ B：我們應該說明下一季打算【增加】廣告預算，並在每個商品頁面加入更多照片和顧客評論。"
  },
  {
    "word": "decline",
    "pos": "v.",
    "cn_def": "下降；衰退",
    "en_def": "to become smaller or fewer",
    "sentence": "A: Why does the bookstore manager look so stressed lately, even though the shop was crowded with students at the start of the school year? B: Since more people now read on their phones and tablets, sales of printed books have started to {{BLANK}}, so she is worried about paying the rent next year.",
    "cn": "A：為什麼書店經理最近看起來壓力這麼大？開學時店裡明明擠滿了學生。 B：因為現在越來越多人用手機和平板閱讀，紙本書的銷售開始【下滑】，所以她擔心明年付不出租金。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Which item on our menu should we put on the poster outside the restaurant, since we only have space for one picture and the printer needs the file today? B: We should use the chicken curry, because it is our most {{BLANK}} dish, and almost every table orders it during lunch time on weekdays.",
    "cn": "A：我們菜單上的哪一道菜應該放在餐廳外的海報上？我們只有放一張照片的空間，而且印刷廠今天就要檔案。 B：我們應該用咖哩雞，因為那是我們最【受歡迎的】菜色，平日午餐時間幾乎每桌都會點。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "有現貨的；可取得的",
    "en_def": "able to be bought or used",
    "sentence": "A: A customer wants to buy the blue version of this jacket in a large size, but I cannot find it on the shelves, so can you help me? B: Let me check the computer, because if it is not {{BLANK}} in our shop, we can order it from another branch and deliver it to her home.",
    "cn": "A：有位顧客想買這件外套的藍色大號，但我在架上找不到，你可以幫我嗎？ B：讓我查一下電腦，如果我們店裡【沒有現貨】，我們可以從其他分店調貨並送到她家。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的；實惠的",
    "en_def": "not too expensive; cheap enough for most people",
    "sentence": "A: Many young workers in this area have just started their careers and don't earn much money, so what kind of furniture should our new store sell? B: We should focus on simple, {{BLANK}} tables and chairs that look nice but don't cost too much, so that people can furnish their first apartment easily.",
    "cn": "A：這一帶很多年輕上班族才剛開始工作，賺的錢不多，我們的新店應該賣什麼樣的家具？ B：我們應該主打簡單、【價格實惠的】桌椅，外觀好看但不會太貴，讓大家能輕鬆布置他們的第一間公寓。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: Why did you decide not to buy the new phone you were talking about all last week, since you said your old one was too slow? B: When I went to the shop, I found out it was far too {{BLANK}} for me, so I'll wait until the price goes down after the holiday season.",
    "cn": "A：你上週一直在談那支新手機，也說舊手機太慢了，為什麼後來決定不買？ B：我去店裡時才發現它對我來說太【貴】了，所以我會等到假期過後價格下降再買。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "costing little money",
    "sentence": "A: The tickets for the concert next month are selling fast, but I'm worried about spending too much because I'm saving for a trip, so what should I do? B: If you book them before Friday, the seats at the back are quite {{BLANK}}, and you can still see the stage clearly from there.",
    "cn": "A：下個月演唱會的票賣得很快，但我在存錢準備旅行，擔心花太多，我該怎麼辦？ B：如果你在週五前訂，後排的座位相當【便宜】，而且從那裡仍然可以清楚看到舞台。"
  },
  {
    "word": "limited",
    "pos": "adj.",
    "cn_def": "有限的",
    "en_def": "small in amount or number",
    "sentence": "A: Should I tell customers that they can buy as many of the new headphones as they want during the opening weekend of our store? B: No, because we only received a {{BLANK}} number from the factory, so each customer can buy just two pairs, and we will get more next month.",
    "cn": "A：我應該告訴顧客，在我們商店開幕週末期間，新耳機想買多少就買多少嗎？ B：不行，因為我們從工廠只收到【有限的】數量，所以每位顧客只能買兩副，下個月我們會再進貨。"
  },
  {
    "word": "exclusive",
    "pos": "adj.",
    "cn_def": "獨家的；專屬的",
    "en_def": "only for certain people or one group",
    "sentence": "A: Why are so many people signing up for the store's membership card this month, even though it costs twenty dollars a year? B: Members get {{BLANK}} access to special sales before everyone else, and they also receive birthday gifts and free delivery on large orders of furniture.",
    "cn": "A：為什麼這個月有這麼多人申辦這家店的會員卡，即使一年要二十美元？ B：會員可以比其他人早一步享有特賣的【專屬】資格，還能收到生日禮物，大量訂購家具時也免運費。"
  },
  {
    "word": "seasonal",
    "pos": "adj.",
    "cn_def": "季節性的",
    "en_def": "happening or available only at a certain time of year",
    "sentence": "A: The fruit shop on the corner changes its displays so often, and sometimes the prices go up and down every few weeks, so why is that? B: The owner mainly sells {{BLANK}} fruit, such as strawberries in winter and mangoes in summer, because they taste better and farmers sell them at lower prices.",
    "cn": "A：轉角那家水果店的陳列常常更換，價格有時每幾週就上下變動，為什麼會這樣？ B：老闆主要賣【當季的】水果，例如冬天的草莓和夏天的芒果，因為它們比較好吃，農民的售價也比較低。"
  },
  {
    "word": "online",
    "pos": "adv.",
    "cn_def": "在網路上",
    "en_def": "using the internet",
    "sentence": "A: My grandmother wants to buy a new rice cooker, but the stores near her house are always crowded on weekends, so how can she get one easily? B: She can order it {{BLANK}} from the department store's website, and they will deliver it to her apartment within two days at no extra cost.",
    "cn": "A：我奶奶想買一台新電鍋，但她家附近的店週末總是很擁擠，她要怎樣才能輕鬆買到？ B：她可以【在網路上】從百貨公司的網站訂購，他們會在兩天內免費送到她的公寓。"
  },
  {
    "word": "directly",
    "pos": "adv.",
    "cn_def": "直接地",
    "en_def": "without anyone or anything in between",
    "sentence": "A: Why are the vegetables at the new supermarket so fresh and also a little cheaper than at the other shops in our neighborhood? B: The supermarket buys them {{BLANK}} from farmers in the countryside instead of using a middle company, so they arrive faster and cost less for shoppers.",
    "cn": "A：為什麼新超市的蔬菜這麼新鮮，而且比我們附近其他店便宜一點？ B：那家超市【直接】向鄉下的農民購買，不經過中間商，所以蔬菜送達得更快，顧客也付得更少。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that achieves the result you wanted",
    "sentence": "A: The company launched its new line of sports shoes last spring, so how did the product do in the first six months after it reached the stores? B: The sales team {{BLANK}} reached its target in just four months, and the shoes became one of our best-selling products in both Asia and Europe this year.",
    "cn": "A：公司去年春天推出了新系列運動鞋，上市後的頭六個月表現如何？ B：業務團隊只花四個月就【成功地】達成目標，這款鞋也成為我們今年在亞洲和歐洲最暢銷的產品之一。"
  }
];

const MCQS = [
  {
    "q": "New customers will receive a 15 percent _____ on their first order. This offer cannot be combined with other coupons.",
    "options": [
      "discount",
      "revenue",
      "transaction",
      "clearance"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The supermarket is running a two-week _____ for its new line of frozen pizzas. Shoppers who buy two boxes will get a third box free.",
    "options": [
      "revenue",
      "promotion",
      "loss",
      "voucher"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "At only forty dollars, the used office desk was a real _____. The manager bought it immediately before anyone else could take it.",
    "options": [
      "loss",
      "revenue",
      "bargain",
      "transaction"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After two weeks of talks, the two companies finally signed a _____ to share delivery trucks. The agreement will save both firms money.",
    "options": [
      "coupon",
      "markdown",
      "revenue",
      "deal"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "This special _____ is valid only until the end of the month. Customers can buy one pair of glasses and get the second pair free.",
    "options": [
      "offer",
      "profit",
      "loss",
      "retail"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Everything in the store must go before the renovation begins next week. The _____ sale will start on Monday morning at nine o'clock.",
    "options": [
      "revenue",
      "clearance",
      "profit",
      "transaction"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The manager approved a 40 percent _____ on last season's swimsuits. The new price tags will be added to the items this afternoon.",
    "options": [
      "revenue",
      "transaction",
      "markdown",
      "loss"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Please cut out the _____ at the bottom of this newspaper page. Bring it to any of our stores to get a free cup of coffee.",
    "options": [
      "revenue",
      "loss",
      "deal",
      "coupon"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "For her years of service, the receptionist got a hotel _____ worth three hundred dollars. She can use it at any of the chain's locations.",
    "options": [
      "voucher",
      "revenue",
      "loss",
      "markdown"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Thanks to strong holiday sales, the company's total _____ rose to twelve million dollars last year. This was the highest figure in its history.",
    "options": [
      "coupon",
      "revenue",
      "markdown",
      "clearance"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "After paying all costs, the bookstore made a small _____ of five thousand dollars in its first year. The owners were pleased with the result.",
    "options": [
      "coupon",
      "clearance",
      "profit",
      "promotion"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Because the new product failed to attract buyers, the company reported a _____ of two million dollars this quarter. Several managers lost their jobs.",
    "options": [
      "bargain",
      "coupon",
      "promotion",
      "loss"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Every credit card _____ is recorded by the bank within a few seconds. Customers can check the details on their mobile app at any time.",
    "options": [
      "transaction",
      "bargain",
      "clearance",
      "markdown"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "She has worked in _____ for over ten years and now manages a large department store. Her experience with customers is very valuable to the company.",
    "options": [
      "coupon",
      "retail",
      "bargain",
      "markdown"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Restaurants can buy vegetables at _____ prices if they order large amounts from the farm. Ordinary shoppers must pay the normal store price.",
    "options": [
      "popular",
      "expensive",
      "wholesale",
      "available"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The bakery plans to _____ its cakes at the weekend farmers' market. The owner hopes this will attract new customers from nearby towns.",
    "options": [
      "negotiate",
      "decline",
      "increase",
      "sell"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Employees who wish to _____ new office equipment must first get approval from their department manager. Please fill out the request form online.",
    "options": [
      "purchase",
      "decline",
      "negotiate",
      "advertise"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new gym will _____ its opening on local radio stations and in free newspapers. It hopes to sign up five hundred members quickly.",
    "options": [
      "decline",
      "advertise",
      "purchase",
      "negotiate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company plans to _____ its new energy drink mainly to university students. Its ads will appear on campus and on popular video sites.",
    "options": [
      "decline",
      "negotiate",
      "market",
      "purchase"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Our purchasing manager will try to _____ a lower price with the paper supplier next week. She hopes to cut our costs by ten percent.",
    "options": [
      "decline",
      "advertise",
      "sell",
      "negotiate"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The café hopes to _____ its sales by opening earlier in the morning. Many office workers want coffee before they start work at eight.",
    "options": [
      "increase",
      "decline",
      "negotiate",
      "purchase"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Sales of printed newspapers continue to _____ as more readers get their news on smartphones. Many small publishers have already closed their doors.",
    "options": [
      "advertise",
      "decline",
      "purchase",
      "negotiate"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The chocolate cake is the most _____ item on the café's menu. It usually sells out before two o'clock every afternoon.",
    "options": [
      "wholesale",
      "online",
      "popular",
      "limited"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "I'm sorry, but the blue sweater is no longer _____ in a medium size. Would you like me to order one from our other branch?",
    "options": [
      "wholesale",
      "affordable",
      "exclusive",
      "available"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The new apartments are designed to be _____ for young families with average incomes. Prices start at less than half of similar homes downtown.",
    "options": [
      "affordable",
      "wholesale",
      "seasonal",
      "online"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The leather sofa looked beautiful, but it was too _____ for our small office budget. We chose a simpler fabric one instead.",
    "options": [
      "seasonal",
      "expensive",
      "wholesale",
      "online"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "This special edition watch is available in _____ numbers, so only five hundred will be produced. Collectors are expected to buy them quickly.",
    "options": [
      "wholesale",
      "affordable",
      "limited",
      "popular"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Members of our loyalty program get _____ access to new products one week before the public. Sign up today at any cashier in the store.",
    "options": [
      "wholesale",
      "seasonal",
      "affordable",
      "exclusive"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The shop hires extra _____ workers every December to handle the busy holiday period. Most of them are university students on winter break.",
    "options": [
      "seasonal",
      "exclusive",
      "wholesale",
      "affordable"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "To save time, customers can now order spare parts _____ from the factory. They no longer need to visit a local dealer first.",
    "options": [
      "successfully",
      "directly",
      "politely",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual price",
    "cn_def": "折扣"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a special activity to help sell a product",
    "cn_def": "促銷活動"
  },
  "bargain": {
    "pos": "n.",
    "en_def": "something bought for less than its real value",
    "cn_def": "便宜貨；划算的東西"
  },
  "deal": {
    "pos": "n.",
    "en_def": "an agreement in business",
    "cn_def": "交易；協議"
  },
  "offer": {
    "pos": "n.",
    "en_def": "a lower price or special chance to buy something",
    "cn_def": "優惠"
  },
  "clearance": {
    "pos": "n.",
    "en_def": "the selling of old goods cheaply to remove them",
    "cn_def": "清倉"
  },
  "markdown": {
    "pos": "n.",
    "en_def": "a cut in the price of an item",
    "cn_def": "降價；減價"
  },
  "coupon": {
    "pos": "n.",
    "en_def": "a small paper or digital ticket that gives you money off",
    "cn_def": "優惠券"
  },
  "voucher": {
    "pos": "n.",
    "en_def": "a ticket that can be used instead of money",
    "cn_def": "禮券；兌換券"
  },
  "revenue": {
    "pos": "n.",
    "en_def": "the money a business receives from sales",
    "cn_def": "營收；收入"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money earned after all costs are paid",
    "cn_def": "利潤；獲利"
  },
  "loss": {
    "pos": "n.",
    "en_def": "money lost when costs are higher than income",
    "cn_def": "虧損"
  },
  "transaction": {
    "pos": "n.",
    "en_def": "an act of buying or selling; a payment",
    "cn_def": "交易"
  },
  "retail": {
    "pos": "n.",
    "en_def": "the business of selling goods to the public in stores",
    "cn_def": "零售業"
  },
  "wholesale": {
    "pos": "adj.",
    "en_def": "sold in large amounts at lower prices, usually to businesses",
    "cn_def": "批發的"
  },
  "sell": {
    "pos": "v.",
    "en_def": "to give something to someone for money",
    "cn_def": "賣；銷售"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something",
    "cn_def": "購買"
  },
  "advertise": {
    "pos": "v.",
    "en_def": "to tell the public about a product so they will buy it",
    "cn_def": "打廣告；宣傳"
  },
  "market": {
    "pos": "v.",
    "en_def": "to try to sell a product by planning how to reach buyers",
    "cn_def": "行銷"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something to reach an agreement",
    "cn_def": "協商；談判"
  },
  "increase": {
    "pos": "v.",
    "en_def": "to make something bigger in amount or number",
    "cn_def": "增加"
  },
  "decline": {
    "pos": "v.",
    "en_def": "to become smaller or fewer",
    "cn_def": "下降；衰退"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "available": {
    "pos": "adj.",
    "en_def": "able to be bought or used",
    "cn_def": "有現貨的；可取得的"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "not too expensive; cheap enough for most people",
    "cn_def": "負擔得起的；實惠的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "costing little money",
    "cn_def": "便宜的"
  },
  "limited": {
    "pos": "adj.",
    "en_def": "small in amount or number",
    "cn_def": "有限的"
  },
  "exclusive": {
    "pos": "adj.",
    "en_def": "only for certain people or one group",
    "cn_def": "獨家的；專屬的"
  },
  "seasonal": {
    "pos": "adj.",
    "en_def": "happening or available only at a certain time of year",
    "cn_def": "季節性的"
  },
  "online": {
    "pos": "adv.",
    "en_def": "using the internet",
    "cn_def": "在網路上"
  },
  "directly": {
    "pos": "adv.",
    "en_def": "without anyone or anything in between",
    "cn_def": "直接地"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that achieves the result you wanted",
    "cn_def": "成功地"
  }
};

const EXTRA_GLOSSES = {};
