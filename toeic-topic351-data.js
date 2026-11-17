// Topic 351 Quiz Data: Shop 商店
// Source word list: https://www.examword.com/group-topic/shop — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T351 - Shop 商店",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "store",
    "pos": "n.",
    "cn_def": "商店；店鋪",
    "en_def": "a building or room where goods are sold",
    "sentence": "A: Our printer ran out of ink just before the client presentation, so where can I buy a new cartridge quickly? B: There is an office supply {{BLANK}} on the corner of Main Street, and it opens at eight, so you can get there and back before the meeting starts.",
    "cn": "A：我們的印表機在客戶簡報前剛好沒墨水了，我可以去哪裡快速買到新的墨水匣？ B：主街轉角有一家辦公用品【商店】，八點就開門，所以你可以在會議開始前來回一趟。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場",
    "en_def": "a place, often outdoors, where people buy and sell food and goods",
    "sentence": "A: The company picnic is on Saturday, and we still need fresh fruit and vegetables for about fifty people, so do you know a good place to buy them? B: The farmers' {{BLANK}} near the train station sells everything we need at low prices, but we should arrive early because it gets busy.",
    "cn": "A：公司野餐在星期六，我們還需要大約五十人份的新鮮水果和蔬菜，你知道哪裡買比較好嗎？ B：火車站附近的農夫【市場】以低價販售我們需要的一切，但我們應該早點到，因為那裡人會很多。"
  },
  {
    "word": "mall",
    "pos": "n.",
    "cn_def": "購物中心",
    "en_def": "a large building with many shops and restaurants inside",
    "sentence": "A: Where should we hold the new phone launch event so that a lot of young shoppers will notice it this weekend? B: We could rent a space in the center of the shopping {{BLANK}} downtown, because thousands of people walk past there every Saturday and the manager offered us a good rate.",
    "cn": "A：我們這個週末應該在哪裡舉辦新手機發表活動，才能讓很多年輕購物者注意到？ B：我們可以在市中心的購物【中心】中央租一個場地，因為每個星期六都有成千上萬的人經過那裡，而且經理給了我們不錯的價格。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客",
    "en_def": "a person who buys goods or services from a shop or business",
    "sentence": "A: Why did the manager ask everyone to stay for a short meeting after the shop closed last night? B: A {{BLANK}} wrote a long online review saying our staff ignored her for twenty minutes, so the manager wants all of us to greet people as soon as they walk in.",
    "cn": "A：為什麼經理昨晚在店打烊後要大家留下來開個簡短的會？ B：有位【顧客】在網路上寫了一篇長評論，說我們的員工二十分鐘都沒理她，所以經理希望我們所有人在客人一進門就打招呼。"
  },
  {
    "word": "cashier",
    "pos": "n.",
    "cn_def": "收銀員",
    "en_def": "a person whose job is to take payments in a shop",
    "sentence": "A: The lines at the front of the supermarket are very long this afternoon, and some shoppers look annoyed, so what should we do? B: Please ask Tom to open the third register and work as a {{BLANK}} for an hour, because two of our regular staff called in sick today.",
    "cn": "A：今天下午超市前面的隊伍很長，有些購物者看起來很不耐煩，我們該怎麼辦？ B：請叫湯姆開第三台收銀機，當一個小時的【收銀員】，因為我們兩名正職員工今天請病假。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a piece of paper that shows what you bought and how much you paid",
    "sentence": "A: I bought this jacket for a business trip last week, but it is too small, so can I still get my money back? B: Yes, you can, as long as you bring the {{BLANK}} with you and the tags are still attached, because we need proof of when and where you bought it.",
    "cn": "A：我上週為了出差買了這件夾克，但它太小了，我還能退錢嗎？ B：可以，只要您帶著【收據】而且標籤還在，因為我們需要證明您是何時在哪裡購買的。"
  },
  {
    "word": "counter",
    "pos": "n.",
    "cn_def": "櫃檯",
    "en_def": "a long flat surface in a shop where customers are served",
    "sentence": "A: Excuse me, I ordered a set of business cards online yesterday, and the website said I could collect them here today, so where should I go? B: Please go to the service {{BLANK}} at the back of the store, and the staff there will check your name and order number.",
    "cn": "A：不好意思，我昨天在網路上訂了一盒名片，網站說今天可以來這裡領，我應該去哪裡？ B：請到店後方的服務【櫃檯】，那裡的員工會核對您的姓名和訂單號碼。"
  },
  {
    "word": "shelf",
    "pos": "n.",
    "cn_def": "架子；貨架",
    "en_def": "a flat board on a wall or in a cupboard used for putting things on",
    "sentence": "A: A customer just told me she can't find the green tea that was on sale in our weekly newspaper ad, so where did we put it? B: We moved it to the top {{BLANK}} in aisle five last night, so please help her reach it and check whether we need more boxes from the storeroom.",
    "cn": "A：一位顧客剛告訴我，她找不到我們每週報紙廣告上特價的綠茶，我們把它放哪了？ B：我們昨晚把它移到第五排走道的最上層【貨架】了，所以請幫她拿下來，並看看是否需要從倉庫補更多盒。"
  },
  {
    "word": "cart",
    "pos": "n.",
    "cn_def": "購物推車",
    "en_def": "a large metal basket on wheels used for carrying goods in a store",
    "sentence": "A: We need to buy paper, coffee, and cleaning supplies for the whole office this month, so how will we carry everything to the car? B: Let's take a large shopping {{BLANK}} from the entrance, because the boxes of printer paper are heavy and the parking lot is quite far from the door.",
    "cn": "A：我們這個月要為整間辦公室買紙、咖啡和清潔用品，要怎麼把所有東西搬到車上？ B：我們從入口拿一台大的購物【推車】吧，因為一箱箱的印表紙很重，而且停車場離門口相當遠。"
  },
  {
    "word": "basket",
    "pos": "n.",
    "cn_def": "籃子；購物籃",
    "en_def": "a container with handles used for carrying a few items while shopping",
    "sentence": "A: I only need a few things for lunch, like a sandwich, a drink, and some fruit, so should I take a big trolley? B: No, a small {{BLANK}} is enough for that, and it will be easier to carry through the narrow aisles while the shop is so crowded at noon.",
    "cn": "A：我只需要買幾樣午餐的東西，像是三明治、飲料和一些水果，我應該拿大推車嗎？ B：不用，一個小【購物籃】就夠了，而且中午店裡這麼擁擠，提著它穿過狹窄的走道會比較方便。"
  },
  {
    "word": "price",
    "pos": "n.",
    "cn_def": "價格",
    "en_def": "the amount of money you must pay to buy something",
    "sentence": "A: Why are so many customers complaining about the coffee machines in our electronics department this week? B: The supplier raised the {{BLANK}} by thirty percent, so we had to change all the labels on Monday, and many people think the machines are now too costly for what they offer.",
    "cn": "A：為什麼這週有這麼多顧客抱怨我們電器部門的咖啡機？ B：供應商把【價格】調漲了百分之三十，所以我們星期一必須更換所有標籤，很多人認為以這些機器的功能來說現在太貴了。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual cost of something",
    "sentence": "A: Our team wants to order twenty new office chairs from your shop, so can you give us a better deal than the website shows? B: Since you are buying so many at once, I can offer you a fifteen percent {{BLANK}}, and we will also deliver them to your building for free next week.",
    "cn": "A：我們團隊想從你們店訂二十張新的辦公椅，你可以給我們比網站上更好的價錢嗎？ B：既然您一次買這麼多，我可以給您百分之十五的【折扣】，下週也會免費送到您的大樓。"
  },
  {
    "word": "sale",
    "pos": "n.",
    "cn_def": "特賣；拍賣",
    "en_def": "a time when a shop sells goods at lower prices than usual",
    "sentence": "A: Why is the department store so full of people today, even though it is only Tuesday morning? B: They started their end-of-season {{BLANK}} today, so winter coats and boots are half the usual cost, and many office workers came in before work to get the best items.",
    "cn": "A：為什麼百貨公司今天這麼多人，明明只是星期二早上？ B：他們今天開始季末【特賣】，所以冬季外套和靴子都是半價，很多上班族上班前就來搶購最好的商品。"
  },
  {
    "word": "display",
    "pos": "n.",
    "cn_def": "陳列；展示",
    "en_def": "an arrangement of goods in a shop for people to look at",
    "sentence": "A: The new summer sunglasses arrived this morning, so where do you want me to put them so that customers will see them first? B: Please set up an attractive {{BLANK}} in the front window, with some beach photos and bright colors, because people walking past on the street will notice it.",
    "cn": "A：新的夏季太陽眼鏡今天早上到貨了，你要我放哪裡才能讓顧客第一眼就看到？ B：請在前面櫥窗設一個吸引人的【陳列】，搭配一些海灘照片和鮮豔的顏色，因為街上經過的人會注意到。"
  },
  {
    "word": "stock",
    "pos": "n.",
    "cn_def": "存貨；庫存",
    "en_def": "the supply of goods that a shop has available to sell",
    "sentence": "A: A customer wants to buy ten more of these blue notebooks for her company, but there are only three left on the shelf. B: Let me check our {{BLANK}} in the computer system first, and if we don't have enough in the storeroom, I can order more from the factory by Friday.",
    "cn": "A：一位顧客想為她公司再買十本這種藍色筆記本，但架上只剩三本了。 B：讓我先在電腦系統裡查一下我們的【庫存】，如果倉庫裡不夠，我可以在星期五前向工廠多訂一些。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a type of product made by a particular company with its own name",
    "sentence": "A: Which laptop should I buy for the new employees, since there are so many different models and they all look almost the same? B: I would choose a well-known {{BLANK}} with a good warranty, because cheaper models often break after a year and the repairs cost our department a lot.",
    "cn": "A：我應該替新員工買哪一款筆電？型號這麼多，看起來又幾乎都一樣。 B：我會選一個有良好保固的知名【品牌】，因為便宜的機型常常一年後就壞了，而且維修會花我們部門很多錢。"
  },
  {
    "word": "purchase",
    "pos": "v.",
    "cn_def": "購買",
    "en_def": "to buy something",
    "sentence": "A: Our printers in the sales office keep breaking down, and the repair costs are getting higher every month, so what should we do? B: I think we should {{BLANK}} two new printers from the electronics store downtown, because they are offering free setup and a three-year warranty this month.",
    "cn": "A：我們業務辦公室的印表機一直故障，維修費每個月都越來越高，我們該怎麼辦？ B：我認為我們應該向市中心的電器行【購買】兩台新印表機，因為他們這個月提供免費安裝和三年保固。"
  },
  {
    "word": "pay",
    "pos": "v.",
    "cn_def": "付款；支付",
    "en_def": "to give money for goods or services",
    "sentence": "A: I'd like to buy these three boxes of envelopes for the office, but I left my wallet at my desk upstairs. B: Don't worry, you can {{BLANK}} with your phone at this machine, or I can keep the boxes behind the counter while you go back and get your card.",
    "cn": "A：我想替辦公室買這三盒信封，可是我把錢包留在樓上的座位了。 B：別擔心，您可以在這台機器用手機【付款】，或者您回去拿卡的時候，我可以把盒子先放在櫃檯後面。"
  },
  {
    "word": "choose",
    "pos": "v.",
    "cn_def": "選擇；挑選",
    "en_def": "to decide which one you want from several things",
    "sentence": "A: The bakery has so many kinds of cakes for Linda's farewell party this afternoon, and I can't decide which one she would like best. B: Let's {{BLANK}} the chocolate one with fresh strawberries, because she always orders chocolate desserts at lunch and it is big enough for the whole team.",
    "cn": "A：這家麵包店有好多種蛋糕可以給今天下午琳達的歡送會，我無法決定她會最喜歡哪一個。 B：我們就【挑選】那個有新鮮草莓的巧克力蛋糕吧，因為她午餐總是點巧克力甜點，而且它夠大，全隊都能吃。"
  },
  {
    "word": "browse",
    "pos": "v.",
    "cn_def": "瀏覽；隨意看看",
    "en_def": "to look at things in a shop without a clear plan to buy",
    "sentence": "A: Good morning, can I help you find something special today, or are you looking for a gift for someone at work? B: Thank you, but I'm just going to {{BLANK}} for a few minutes while I wait for my colleague, and I'll ask you if I see something I like.",
    "cn": "A：早安，今天需要我幫您找特別的東西嗎？還是您在找要送給同事的禮物？ B：謝謝，不過我在等同事的時候只是想【隨意看看】幾分鐘，如果看到喜歡的東西我會再問您。"
  },
  {
    "word": "return",
    "pos": "v.",
    "cn_def": "退回；退貨",
    "en_def": "to take something back to the shop where you bought it",
    "sentence": "A: The coffee machine we bought for the break room last Friday stopped working after only two days, and the staff are very disappointed. B: We should {{BLANK}} it to the shop with the box and the receipt this afternoon, because they promised a full refund within thirty days.",
    "cn": "A：我們上星期五替休息室買的咖啡機才用兩天就壞了，員工們都很失望。 B：我們今天下午應該帶著盒子和收據把它【退回】店裡，因為他們承諾三十天內可以全額退款。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "更換；交換",
    "en_def": "to give back something you bought and get a different one",
    "sentence": "A: I bought this white shirt for my job interview tomorrow, but the sleeves are too long and it doesn't fit well. B: You can {{BLANK}} it for a smaller size at any of our branches, but please do it today, because the shirts are very popular and might sell out soon.",
    "cn": "A：我為了明天的工作面試買了這件白襯衫，可是袖子太長，不太合身。 B：您可以到我們任何一家分店把它【更換】成小一號，但請今天就去，因為這款襯衫很受歡迎，可能很快就會賣完。"
  },
  {
    "word": "open",
    "pos": "v.",
    "cn_def": "開門營業；開張",
    "en_def": "to start business for the day or for the first time",
    "sentence": "A: I heard the bookstore company is planning to expand into our neighborhood, and many people are excited about it. B: Yes, they will {{BLANK}} a new branch next to the train station in March, and they are already looking for staff who can work weekends and help with events.",
    "cn": "A：我聽說那家書店公司打算拓展到我們這一區，很多人都很期待。 B：對，他們三月會在火車站旁【開】一家新分店，而且已經在找能在週末上班、幫忙辦活動的員工了。"
  },
  {
    "word": "close",
    "pos": "v.",
    "cn_def": "關門；打烊",
    "en_def": "to stop business for the day or for a period of time",
    "sentence": "A: I need to pick up the printed brochures for tomorrow's trade show, but my meeting won't finish until seven tonight. B: The print shop will {{BLANK}} at six o'clock today because of the holiday, so you should ask someone from your team to collect them earlier this afternoon.",
    "cn": "A：我需要去拿明天商展用的印刷手冊，可是我的會議今晚七點才會結束。 B：因為假日，印刷店今天六點就會【關門】，所以你應該請團隊裡的人今天下午早點去拿。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "忙碌的；熱鬧的",
    "en_def": "full of people or activity",
    "sentence": "A: Should we go to the supermarket after work on Friday to buy drinks and snacks for the office party next week? B: Friday evening is always very {{BLANK}} there because everyone shops for the weekend, so let's go on Thursday morning when the aisles are empty and the lines are short.",
    "cn": "A：我們星期五下班後要不要去超市，替下週的辦公室派對買飲料和零食？ B：星期五晚上那裡總是非常【熱鬧】，因為大家都在採購週末用品，所以我們星期四早上去吧，那時走道空、隊伍也短。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of too many people",
    "sentence": "A: How was your trip to the electronics fair downtown yesterday, and did you find the new tablets for our sales team? B: It was so {{BLANK}} that I could hardly move between the booths, but I finally talked to a supplier and got a good offer for twelve tablets.",
    "cn": "A：你昨天去市中心的電子展怎麼樣？有找到給我們業務團隊用的新平板嗎？ B：那裡【擁擠】得我在攤位間幾乎動彈不得，不過我最後跟一家供應商談過，拿到了十二台平板的好價格。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "當地的；本地的",
    "en_def": "in or near the area where you live or work",
    "sentence": "A: Our company wants to support small businesses in this town, so where should we order the snacks for the monthly staff meeting? B: Let's buy them from the {{BLANK}} bakery across the street, because the owner uses fresh ingredients and can deliver everything to our office before nine.",
    "cn": "A：我們公司想支持本鎮的小商家，那每月員工會議的點心應該向哪裡訂？ B：我們就向對街那家【本地】麵包店買吧，因為老闆用新鮮的食材，而且能在九點前把所有東西送到我們辦公室。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的；便利的",
    "en_def": "easy to use or reach; suitable",
    "sentence": "A: Why do so many of our employees buy their lunch at the shop on the ground floor instead of going to restaurants outside? B: It is very {{BLANK}} for them, because they can get a hot meal in five minutes without leaving the building, especially on rainy days or when they have meetings.",
    "cn": "A：為什麼我們很多員工都在一樓的店買午餐，而不是去外面的餐廳？ B：這對他們來說很【方便】，因為不用離開大樓，五分鐘就能買到熱騰騰的餐點，尤其是下雨天或要開會的時候。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: Should we buy the leather bags from that famous designer shop as gifts for our most important clients this year? B: They are too {{BLANK}} for our budget, since each one costs more than three hundred dollars, so let's choose nice pens or tea sets from a cheaper store instead.",
    "cn": "A：我們今年要不要買那家知名設計師店的皮包，當作送給最重要客戶的禮物？ B：以我們的預算來說它們太【昂貴】了，每個都要三百多美元，所以我們還是改從便宜一點的店挑好筆或茶具吧。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "costing little money; low in price",
    "sentence": "A: Where did you buy all these folders and pens for the training workshop, because they look nice and there are so many? B: I found them at a {{BLANK}} stationery shop near the university, where students buy their supplies, and the whole bag cost less than twenty dollars.",
    "cn": "A：你在哪裡買到這些研習會用的資料夾和筆？看起來不錯，而且數量好多。 B：我在大學附近一家【便宜】的文具店找到的，學生都在那裡買用品，整袋還不到二十美元。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "迅速地；快速地",
    "en_def": "fast; in a short time",
    "sentence": "A: The shop is about to close in ten minutes, and I still need to buy a birthday card and some wrapping paper for my manager. B: Then you should go {{BLANK}} to the gift section on the second floor, because the staff will start turning off the lights very soon.",
    "cn": "A：店再十分鐘就要打烊了，我還需要替經理買一張生日卡和一些包裝紙。 B：那你應該【趕快】去二樓的禮品區，因為店員很快就要開始關燈了。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "with attention so that nothing goes wrong",
    "sentence": "A: The new glass vases for the hotel lobby just arrived at the store, and the customer wants them delivered this afternoon. B: Please wrap each one {{BLANK}} in thick paper and put them in separate boxes, because the road to the hotel is bumpy and they break very easily.",
    "cn": "A：飯店大廳要用的新玻璃花瓶剛送到店裡，顧客希望今天下午就送過去。 B：請用厚紙把每一個都【小心地】包好，分別放進不同的盒子，因為去飯店的路很顛簸，它們又很容易破。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常地",
    "en_def": "often, at the same times or in the same way",
    "sentence": "A: How does the manager of the corner shop always know which products are popular and which ones nobody buys anymore? B: She {{BLANK}} checks the sales reports every Monday morning and talks with her customers, so she can change the order quickly when people's tastes start to change.",
    "cn": "A：轉角那家店的經理怎麼總是知道哪些商品受歡迎、哪些已經沒人買了？ B：她每週一早上都會【定期】查看銷售報告，也會跟顧客聊天，所以當大家口味開始改變時，她能很快調整進貨。"
  }
];

const MCQS = [
  {
    "q": "The new grocery _____ on Pine Street opens at seven every morning. Many office workers stop there to buy breakfast on their way to work.",
    "options": [
      "store",
      "receipt",
      "cashier",
      "shelf"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Every Sunday, local farmers sell fresh vegetables at the open-air _____ near the river. Prices are usually lower than in the big supermarkets.",
    "options": [
      "counter",
      "receipt",
      "market",
      "brand"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new shopping _____ has more than two hundred stores and a large food court. It also offers free parking for the first three hours.",
    "options": [
      "basket",
      "mall",
      "cashier",
      "price"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our staff should greet every _____ with a smile as soon as they enter. Good service is the main reason people come back to our shop.",
    "options": [
      "shelf",
      "discount",
      "stock",
      "customer"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The supermarket is hiring a part-time _____ to work at the checkout on weekends. Applicants must be good with numbers and friendly to shoppers.",
    "options": [
      "cashier",
      "brand",
      "display",
      "cart"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Please keep your _____ in case you need to return the item. Without it, we can only offer store credit instead of cash.",
    "options": [
      "shelf",
      "market",
      "receipt",
      "basket"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Customers who ordered online can collect their packages at the service _____ near the main entrance. Please bring photo ID when you come.",
    "options": [
      "price",
      "counter",
      "customer",
      "sale"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The staff placed the most popular snacks on the middle _____ at eye level. This made it easier for shoppers to see and reach them.",
    "options": [
      "receipt",
      "cashier",
      "purchase",
      "shelf"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "He pushed a large shopping _____ full of office supplies to the parking lot. The boxes of paper were too heavy to carry by hand.",
    "options": [
      "cart",
      "price",
      "counter",
      "stock"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "She only needed bread and milk, so she picked up a small _____ at the door. It was easier to carry than a big trolley.",
    "options": [
      "brand",
      "mall",
      "basket",
      "discount"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The _____ of fresh fruit has gone up sharply because of the bad weather. Many shoppers are now buying frozen fruit instead.",
    "options": [
      "counter",
      "price",
      "cashier",
      "shelf"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Members of our loyalty program receive a ten percent _____ on all purchases. They also get free delivery on orders over fifty dollars.",
    "options": [
      "receipt",
      "basket",
      "display",
      "discount"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The bookstore is holding a clearance _____ this weekend before it moves to a new location. All books will be at least half off.",
    "options": [
      "sale",
      "shelf",
      "customer",
      "cart"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The staff spent the whole evening setting up a holiday _____ in the front window. It attracted many shoppers walking past on the street.",
    "options": [
      "receipt",
      "cashier",
      "display",
      "price"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "We are sorry, but this model is currently out of _____. New units should arrive from the factory by the end of next week.",
    "options": [
      "market",
      "stock",
      "counter",
      "basket"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many shoppers prefer this _____ of running shoes because of its comfort and quality. The company has been popular for over thirty years.",
    "options": [
      "receipt",
      "cart",
      "counter",
      "brand"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Customers can _____ tickets for the concert at the information desk on the first floor. Payment by credit card is accepted.",
    "options": [
      "purchase",
      "browse",
      "close",
      "return"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "You can _____ for your groceries at the self-checkout machines by the exit. They accept cash, cards, and mobile payments.",
    "options": [
      "choose",
      "open",
      "pay",
      "browse"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "It was difficult to _____ a gift for the retiring manager. In the end, the team bought her a beautiful watch.",
    "options": [
      "close",
      "choose",
      "pay",
      "exchange"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Many people like to _____ in the bookstore during their lunch break. They often leave with a magazine or a new novel.",
    "options": [
      "purchase",
      "exchange",
      "pay",
      "browse"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "If the product is damaged, you may _____ it within thirty days for a full refund. Please bring the original packaging with you.",
    "options": [
      "return",
      "choose",
      "open",
      "browse"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The sweater was too small, so she went back to the shop to _____ it for a larger size. The clerk found the right one.",
    "options": [
      "browse",
      "close",
      "exchange",
      "pay"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The coffee chain plans to _____ ten new branches across the city next year. Each location will hire about fifteen staff members.",
    "options": [
      "exchange",
      "open",
      "pay",
      "return"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Most shops in the station will _____ early on New Year's Eve. Shoppers are advised to finish their purchases before five o'clock.",
    "options": [
      "browse",
      "choose",
      "purchase",
      "close"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The bakery is always _____ in the morning when office workers stop by. The owner hired an extra assistant to serve customers faster.",
    "options": [
      "busy",
      "expensive",
      "cheap",
      "local"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The night market was so _____ that we could hardly walk. Thousands of tourists had come to try the famous street food.",
    "options": [
      "convenient",
      "cheap",
      "crowded",
      "expensive"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Our company buys all its office snacks from a _____ bakery down the street. We like supporting small businesses in our neighborhood.",
    "options": [
      "crowded",
      "local",
      "busy",
      "expensive"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The store's new location is very _____ for commuters because it is right next to the subway station. Sales have doubled since the move.",
    "options": [
      "crowded",
      "cheap",
      "busy",
      "convenient"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The designer handbags in that boutique are too _____ for most shoppers. Some of them cost more than two thousand dollars each.",
    "options": [
      "expensive",
      "local",
      "convenient",
      "crowded"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Students like the stationery shop near campus because its notebooks are very _____. A pack of five costs only three dollars.",
    "options": [
      "busy",
      "crowded",
      "cheap",
      "local"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "store": {
    "pos": "n.",
    "en_def": "a building or room where goods are sold",
    "cn_def": "商店；店鋪"
  },
  "market": {
    "pos": "n.",
    "en_def": "a place, often outdoors, where people buy and sell food and goods",
    "cn_def": "市場"
  },
  "mall": {
    "pos": "n.",
    "en_def": "a large building with many shops and restaurants inside",
    "cn_def": "購物中心"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services from a shop or business",
    "cn_def": "顧客"
  },
  "cashier": {
    "pos": "n.",
    "en_def": "a person whose job is to take payments in a shop",
    "cn_def": "收銀員"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows what you bought and how much you paid",
    "cn_def": "收據"
  },
  "counter": {
    "pos": "n.",
    "en_def": "a long flat surface in a shop where customers are served",
    "cn_def": "櫃檯"
  },
  "shelf": {
    "pos": "n.",
    "en_def": "a flat board on a wall or in a cupboard used for putting things on",
    "cn_def": "架子；貨架"
  },
  "cart": {
    "pos": "n.",
    "en_def": "a large metal basket on wheels used for carrying goods in a store",
    "cn_def": "購物推車"
  },
  "basket": {
    "pos": "n.",
    "en_def": "a container with handles used for carrying a few items while shopping",
    "cn_def": "籃子；購物籃"
  },
  "price": {
    "pos": "n.",
    "en_def": "the amount of money you must pay to buy something",
    "cn_def": "價格"
  },
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual cost of something",
    "cn_def": "折扣"
  },
  "sale": {
    "pos": "n.",
    "en_def": "a time when a shop sells goods at lower prices than usual",
    "cn_def": "特賣；拍賣"
  },
  "display": {
    "pos": "n.",
    "en_def": "an arrangement of goods in a shop for people to look at",
    "cn_def": "陳列；展示"
  },
  "stock": {
    "pos": "n.",
    "en_def": "the supply of goods that a shop has available to sell",
    "cn_def": "存貨；庫存"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a type of product made by a particular company with its own name",
    "cn_def": "品牌"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something",
    "cn_def": "購買"
  },
  "pay": {
    "pos": "v.",
    "en_def": "to give money for goods or services",
    "cn_def": "付款；支付"
  },
  "choose": {
    "pos": "v.",
    "en_def": "to decide which one you want from several things",
    "cn_def": "選擇；挑選"
  },
  "browse": {
    "pos": "v.",
    "en_def": "to look at things in a shop without a clear plan to buy",
    "cn_def": "瀏覽；隨意看看"
  },
  "return": {
    "pos": "v.",
    "en_def": "to take something back to the shop where you bought it",
    "cn_def": "退回；退貨"
  },
  "exchange": {
    "pos": "v.",
    "en_def": "to give back something you bought and get a different one",
    "cn_def": "更換；交換"
  },
  "open": {
    "pos": "v.",
    "en_def": "to start business for the day or for the first time",
    "cn_def": "開門營業；開張"
  },
  "close": {
    "pos": "v.",
    "en_def": "to stop business for the day or for a period of time",
    "cn_def": "關門；打烊"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "full of people or activity",
    "cn_def": "忙碌的；熱鬧的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of too many people",
    "cn_def": "擁擠的"
  },
  "local": {
    "pos": "adj.",
    "en_def": "in or near the area where you live or work",
    "cn_def": "當地的；本地的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or reach; suitable",
    "cn_def": "方便的；便利的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "costing little money; low in price",
    "cn_def": "便宜的"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "迅速地；快速地"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with attention so that nothing goes wrong",
    "cn_def": "小心地；仔細地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at the same times or in the same way",
    "cn_def": "定期地；經常地"
  }
};

const EXTRA_GLOSSES = {};
