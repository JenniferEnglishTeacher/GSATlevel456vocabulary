// Topic 26 Quiz Data: Bargain 划算交易
// Source word list: https://www.examword.com/group-topic/bargain — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T26 - Bargain 划算交易",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "deal",
    "pos": "n.",
    "cn_def": "划算的交易；協議",
    "en_def": "something bought for a good price; a business agreement",
    "sentence": "A: The electronics store is selling last year's laptop model for half price this weekend, and our office needs five new computers, so should we buy them there? B: Yes, that is a great {{BLANK}}, because last year's model is still fast enough for our work, and we can save almost fifty thousand dollars.",
    "cn": "A：電器行這個週末用半價賣去年的筆電款式，我們辦公室需要五台新電腦，應該去那裡買嗎？ B：應該，那是很划算的【交易】，因為去年的款式對我們的工作來說還是夠快，而且能省下將近五萬元。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual price",
    "sentence": "A: Our company orders a lot of paper and ink from the same supplier every month, but we always pay the normal price, so is there a way to pay less? B: We should ask the supplier for a ten percent {{BLANK}}, because we are one of their biggest customers and we have ordered from them for five years.",
    "cn": "A：我們公司每個月都向同一家供應商訂很多紙張和墨水，但總是付原價，有沒有辦法少付一點？ B：我們應該向供應商要求打九折的【折扣】，因為我們是他們最大的客戶之一，而且已經跟他們訂貨五年了。"
  },
  {
    "word": "sale",
    "pos": "n.",
    "cn_def": "特價；拍賣",
    "en_def": "a time when a store sells things at lower prices",
    "sentence": "A: My suit is getting old, and I have an important job interview next month, but new suits are very expensive at the department store, so what should I do? B: Wait until next weekend, because the department store is having its big anniversary {{BLANK}}, and most clothes will be thirty to fifty percent off.",
    "cn": "A：我的西裝舊了，下個月有個重要的工作面試，但百貨公司的新西裝很貴，我該怎麼辦？ B：等到下個週末吧，因為百貨公司要舉辦週年慶【特賣】，大部分衣服都會打五到七折。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "談判；議價",
    "en_def": "to discuss something to reach an agreement, often about price",
    "sentence": "A: The office we want to rent costs eighty thousand dollars a month, which is more than our budget allows, but the location is perfect for our business. B: We should {{BLANK}} with the owner, because the office has been empty for six months, and he may accept a lower rent if we sign a long contract.",
    "cn": "A：我們想租的辦公室每個月八萬元，超出了預算，但地點對我們的業務來說很完美。 B：我們應該和房東【議價】，因為那間辦公室已經空了六個月，如果我們簽長約，他可能會接受較低的租金。"
  },
  {
    "word": "haggle",
    "pos": "v.",
    "cn_def": "討價還價；殺價",
    "en_def": "to argue about the price of something, especially at a market",
    "sentence": "A: I am taking a group of clients to a traditional market in Bangkok tomorrow, and they want to buy some silk scarves, but they are not sure about the prices. B: Tell them it is normal to {{BLANK}} with the sellers there, so they should start at about half the price the seller asks and slowly go up.",
    "cn": "A：我明天要帶一群客戶去曼谷的傳統市場，他們想買絲巾，但不確定價格。 B：告訴他們在那裡跟賣家【討價還價】是很正常的，所以他們應該從賣家開價的一半左右開始，再慢慢往上加。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "low in price",
    "sentence": "A: The new printer we bought for the office last month already stopped working, and the shop says it is not worth fixing, so what went wrong? B: It was very {{BLANK}}, but it was also badly made, so this time we should spend a little more and buy a better brand with a three-year warranty.",
    "cn": "A：我們上個月為辦公室買的新印表機已經壞了，店家說不值得修，是哪裡出了問題？ B：它很【便宜】，但做工也很差，所以這次我們應該多花一點錢，買有三年保固的好品牌。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "價格實惠的；負擔得起的",
    "en_def": "not too expensive, so most people can pay for it",
    "sentence": "A: Many young workers in our company say they cannot pay the high rents in Taipei, and some of them are leaving for jobs in other cities, so what can we do? B: The company could build staff apartments with {{BLANK}} rents, so young workers can live near the office without spending most of their salary.",
    "cn": "A：我們公司很多年輕員工說付不起台北的高房租，有些人因此離職去其他城市工作，我們能怎麼辦？ B：公司可以興建租金【負擔得起】的員工宿舍，讓年輕員工能住在辦公室附近，又不必花掉大部分薪水。"
  },
  {
    "word": "price",
    "pos": "n.",
    "cn_def": "價格",
    "en_def": "the amount of money you need to pay for something",
    "sentence": "A: Our coffee shop has been losing customers since a new chain store opened across the street, and they sell coffee for much less than we do. B: We could lower the {{BLANK}} of our basic coffee, but I think we should also offer better service and free Wi-Fi, so customers have more reasons to stay.",
    "cn": "A：自從對街開了一家新的連鎖店後，我們咖啡店的顧客一直流失，他們賣的咖啡比我們便宜很多。 B：我們可以降低基本款咖啡的【價格】，但我認為也應該提供更好的服務和免費無線網路，讓顧客有更多理由留下來。"
  },
  {
    "word": "worth",
    "pos": "adj.",
    "cn_def": "值得的；有…價值的",
    "en_def": "having a certain value; good enough to deserve the money or time spent",
    "sentence": "A: The new office chairs cost three times as much as the ones we usually buy, and the finance manager is not happy about it, so should we still order them? B: I think they are {{BLANK}} the money, because they last ten years and help prevent the back pain that has caused so many sick days.",
    "cn": "A：新的辦公椅價格是我們平常買的三倍，財務經理不太高興，我們還要訂嗎？ B：我認為它們【值得】這個價錢，因為它們可以用十年，還能預防造成那麼多病假的背痛。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值；划算程度",
    "en_def": "how useful or important something is compared with its price",
    "sentence": "A: The hotel near the airport costs a little more than the others, but the manager still wants our staff to stay there on business trips, so why is that? B: The room price includes breakfast, free airport transfers, and a gym, so it gives us better {{BLANK}} than the cheaper hotels with no extra services.",
    "cn": "A：機場附近那家飯店比其他家貴一點，但經理還是希望員工出差時住那裡，為什麼？ B：房價包含早餐、免費機場接送和健身房，所以比起沒有額外服務的便宜飯店，它對我們更【划算】。"
  },
  {
    "word": "save",
    "pos": "v.",
    "cn_def": "節省；存（錢）",
    "en_def": "to keep money instead of spending it",
    "sentence": "A: Our electricity bill has gone up a lot this year, and the manager wants every department to find ways to reduce costs, so what can our team do? B: We can {{BLANK}} money by turning off the lights and computers every evening and setting the air conditioner two degrees higher in summer.",
    "cn": "A：我們今年的電費漲了很多，經理希望每個部門都想辦法降低成本，我們團隊能做什麼？ B：我們可以每天晚上關燈和電腦，夏天把冷氣調高兩度來【節省】開支。"
  },
  {
    "word": "cost",
    "pos": "n.",
    "cn_def": "成本；費用",
    "en_def": "the amount of money needed to buy, make, or do something",
    "sentence": "A: The marketing team wants to hold a large product launch at a five-star hotel next month, but the director is worried about spending too much money. B: The total {{BLANK}} of the event will be about five hundred thousand dollars, including the room, food, and decorations, so we need her approval before we book.",
    "cn": "A：行銷團隊想在下個月於五星級飯店舉辦大型產品發表會，但主任擔心花太多錢。 B：活動總【費用】大約五十萬元，包含場地、餐點和佈置，所以我們在預訂前需要她核准。"
  },
  {
    "word": "reasonable",
    "pos": "adj.",
    "cn_def": "合理的；價格公道的",
    "en_def": "fair and not too expensive",
    "sentence": "A: We need a printing company to make two thousand brochures for the trade show, and I have received prices from four different companies, so which one should we choose? B: The company in Banqiao gave us the most {{BLANK}} price, and their quality is good, so I think we should give the order to them.",
    "cn": "A：我們需要一家印刷公司為商展印兩千份手冊，我收到了四家公司的報價，該選哪一家？ B：板橋那家給我們的價格最【合理】，品質也很好，所以我認為應該把訂單交給他們。"
  },
  {
    "word": "overpriced",
    "pos": "adj.",
    "cn_def": "定價過高的；太貴的",
    "en_def": "more expensive than it should be",
    "sentence": "A: The sandwiches at the café in our office building cost two hundred dollars each, and many people now go to the convenience store instead, so what is the problem? B: Most staff think the food there is {{BLANK}}, because the same sandwich costs less than half that price at the shop just across the street.",
    "cn": "A：我們辦公大樓裡咖啡廳的三明治一個要兩百元，很多人現在改去便利商店，問題在哪裡？ B：大多數員工認為那裡的食物【太貴了】，因為同樣的三明治在對街的店裡價格不到一半。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "the amount of money you plan to spend on something",
    "sentence": "A: The team wants to buy new laptops, chairs, and a coffee machine for the office this year, but we cannot afford everything at once, so what should we do? B: Our {{BLANK}} for equipment is only two hundred thousand dollars, so we should buy the laptops first and wait until next year for the other things.",
    "cn": "A：團隊今年想為辦公室買新筆電、椅子和咖啡機，但我們沒辦法一次買齊，該怎麼辦？ B：我們的設備【預算】只有二十萬元，所以應該先買筆電，其他東西等明年再說。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較",
    "en_def": "to look at two or more things to see how they are different",
    "sentence": "A: I need to book flights to Tokyo for five people from our sales team next month, and the prices on different websites are very different, so where should I start? B: First, {{BLANK}} the prices on three or four travel websites and the airline's own site, because the same seat can sometimes cost much less on one of them.",
    "cn": "A：我下個月要幫業務團隊五個人訂飛東京的機票，不同網站的價格差很多，我該從哪裡開始？ B：先【比較】三、四個旅遊網站和航空公司官網的價格，因為同一個座位有時在其中一個網站上便宜很多。"
  },
  {
    "word": "offer",
    "pos": "n.",
    "cn_def": "優惠；特價",
    "en_def": "a special lower price or deal for a short time",
    "sentence": "A: Our gym has fewer members this year than last year, and many people say the monthly fee is too high, so how can we attract new customers quickly? B: We can create a special {{BLANK}} for new members, such as three months for the price of two, which starts on the first day of next month.",
    "cn": "A：我們健身房今年的會員比去年少，很多人說月費太高，我們要怎麼快速吸引新顧客？ B：我們可以為新會員推出特別【優惠】，例如三個月只收兩個月的費用，從下個月第一天開始。"
  },
  {
    "word": "coupon",
    "pos": "n.",
    "cn_def": "優惠券；折價券",
    "en_def": "a piece of paper or code that lets you pay less for something",
    "sentence": "A: Our pizza restaurant wants more customers to order online on weekday evenings, because the kitchen is not very busy then, so what can we try first? B: We can send every customer a {{BLANK}} by email that gives one hundred dollars off any order placed from Monday to Thursday.",
    "cn": "A：我們披薩店希望平日晚上有更多顧客線上訂餐，因為那時廚房不太忙，我們可以先試什麼？ B：我們可以用電子郵件寄給每位顧客一張【優惠券】，週一到週四下的任何訂單都可折抵一百元。"
  },
  {
    "word": "clearance",
    "pos": "n.",
    "cn_def": "清倉拍賣",
    "en_def": "a sale to sell old products quickly and cheaply",
    "sentence": "A: The warehouse is full of last season's winter jackets, and we need the space for the new summer clothes arriving next month, so what should we do with them? B: Let's hold a {{BLANK}} sale this weekend with prices up to seventy percent off, because it is better to sell them cheaply than keep them for another year.",
    "cn": "A：倉庫堆滿了上一季的冬季外套，而下個月到貨的新夏裝需要空間，我們該怎麼處理？ B：我們這個週末辦一場【清倉】拍賣吧，價格最低打三折，因為便宜賣掉總比再留一年好。"
  },
  {
    "word": "secondhand",
    "pos": "adj.",
    "cn_def": "二手的",
    "en_def": "owned or used by someone else before",
    "sentence": "A: Our small company is opening a new branch office, but we do not have much money for furniture this year, so where can we find desks and cabinets? B: We can buy {{BLANK}} furniture from a company that is moving out of our building, because it is in good condition and costs much less than new furniture.",
    "cn": "A：我們這家小公司要開新的分公司，但今年沒有太多錢買家具，在哪裡可以找到辦公桌和櫃子？ B：我們可以向一家要搬離我們大樓的公司買【二手】家具，因為它們狀況良好，價格也比新家具便宜很多。"
  },
  {
    "word": "markdown",
    "pos": "n.",
    "cn_def": "降價；減價",
    "en_def": "a reduction in the price of something in a store",
    "sentence": "A: The new phone cases are not selling well, even though we put them right next to the cash register, so how can we sell them before the new models come out? B: We can give them a thirty percent {{BLANK}} and put red stickers with the new price on each one, so customers can see the lower price easily.",
    "cn": "A：新手機殼就算放在收銀台旁邊也賣得不好，我們要怎麼在新款推出前把它們賣掉？ B：我們可以將它們【降價】百分之三十，並在每個上面貼上標示新價格的紅色貼紙，讓顧客容易看到較低的價格。"
  },
  {
    "word": "shop",
    "pos": "v.",
    "cn_def": "購物；逛街",
    "en_def": "to go to stores to look at and buy things",
    "sentence": "A: My manager wants me to buy small gifts for twenty clients before the Lunar New Year, but I do not have much time during the day, so what should I do? B: You can {{BLANK}} online tonight, because many websites offer free gift wrapping and can deliver all twenty gifts to the office by Friday.",
    "cn": "A：經理要我在農曆新年前買小禮物送給二十位客戶，但我白天沒什麼時間，該怎麼辦？ B：你今晚可以上網【購物】，因為很多網站提供免費禮品包裝，還能在星期五前把二十份禮物全送到辦公室。"
  },
  {
    "word": "splurge",
    "pos": "v.",
    "cn_def": "揮霍；大手筆花錢",
    "en_def": "to spend a lot of money on something special that you do not really need",
    "sentence": "A: Our team finally finished the biggest project of the year, and the manager says we can use the extra money in our budget to celebrate together. B: Let's {{BLANK}} on a dinner at that famous steak restaurant, because everyone worked late every night for three months and deserves something special.",
    "cn": "A：我們團隊終於完成今年最大的專案，經理說可以用預算中多出來的錢一起慶祝。 B：我們就【大手筆】去那家知名牛排館吃一頓晚餐吧，因為大家三個月來每晚都加班，值得享受一點特別的。"
  },
  {
    "word": "thrifty",
    "pos": "adj.",
    "cn_def": "節儉的",
    "en_def": "careful about spending money and not wasting it",
    "sentence": "A: Our new accountant always brings lunch from home, uses both sides of the paper, and finds the cheapest train tickets for every business trip. B: She is very {{BLANK}}, and that is good for our small company, because her careful habits saved us almost two hundred thousand dollars last year.",
    "cn": "A：我們的新會計總是從家裡帶午餐、紙張雙面使用，每次出差都會找到最便宜的火車票。 B：她非常【節儉】，這對我們這家小公司是好事，因為她謹慎的習慣去年幫我們省下了將近二十萬元。"
  },
  {
    "word": "economical",
    "pos": "adj.",
    "cn_def": "經濟的；省錢的",
    "en_def": "using little money, fuel, or energy",
    "sentence": "A: Our delivery company needs to buy ten new vans this year, and fuel prices keep going up, so what kind of vans should we choose? B: We should choose electric or hybrid vans, because they are more {{BLANK}} to run and will save us a lot of money on fuel over the next ten years.",
    "cn": "A：我們的貨運公司今年需要買十輛新廂型車，油價又一直上漲，我們該選哪一種車？ B：我們應該選電動車或油電混合車，因為它們運作起來更【省錢】，未來十年能幫我們省下很多油錢。"
  },
  {
    "word": "steal",
    "pos": "n.",
    "cn_def": "非常便宜的東西；超值品",
    "en_def": "something that costs much less than it is really worth",
    "sentence": "A: I found a used projector online for only three thousand dollars, and it is the same model that costs twenty thousand dollars new, so should I buy it for the meeting room? B: At that price, it is a {{BLANK}}, but please ask the seller to show you that it works before you pay, just to be safe.",
    "cn": "A：我在網路上找到一台二手投影機只要三千元，和新的要兩萬元的是同一款，我該買來放會議室嗎？ B：以那個價格來說，簡直是【超值】，不過付錢前為了安全起見，請賣家先證明它能正常運作。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "公平的；合理的",
    "en_def": "reasonable and right for both sides",
    "sentence": "A: Our long-time supplier wants to raise the price of rice by five percent next year, and the restaurant owner is not sure whether he should agree. B: I think it is a {{BLANK}} price, because the cost of rice has gone up much more than that this year, and the supplier has always been reliable.",
    "cn": "A：我們長期合作的供應商明年想把米價調漲百分之五，餐廳老闆不確定是否該同意。 B：我認為那是【合理】的價格，因為今年米的成本漲得比那還多，而且這家供應商一直都很可靠。"
  },
  {
    "word": "retail",
    "pos": "n.",
    "cn_def": "零售",
    "en_def": "the sale of goods to the public in stores",
    "sentence": "A: Our company makes kitchen tools and has only sold them to hotels and restaurants until now, but the director wants to grow our business next year. B: We could start selling in {{BLANK}}, through department stores and online shops, so ordinary families can also buy our products for their homes.",
    "cn": "A：我們公司生產廚房用具，到目前為止只賣給飯店和餐廳，但主任想在明年擴大業務。 B：我們可以開始做【零售】，透過百貨公司和網路商店販售，讓一般家庭也能買我們的產品回家用。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤；獲利",
    "en_def": "money you earn after paying all your costs",
    "sentence": "A: Our store sold more items during the big sale last month than in any other month this year, but the manager does not seem very happy, so why is that? B: Because the prices were so low, our {{BLANK}} on each item was very small, and after paying the staff for extra hours, we earned almost nothing.",
    "cn": "A：我們店上個月大特賣賣出的商品數量是今年最多的，但經理似乎不太高興，為什麼？ B：因為價格太低，我們每件商品的【利潤】非常少，付完員工加班費之後幾乎沒賺到錢。"
  }
];

const MCQS = [
  {
    "q": "Our company signed a three-year _____ with the new supplier. It includes free delivery and lower prices.",
    "options": [
      "coupon",
      "clearance",
      "markdown",
      "deal"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Students can get a ten percent _____ on all books. They only need to show their student card at the counter.",
    "options": [
      "discount",
      "profit",
      "retail",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The store's summer _____ starts next Friday. Most items will be sold at half price for one week.",
    "options": [
      "profit",
      "cost",
      "sale",
      "value"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The two companies will _____ the terms of the contract next week. Both sides hope to reach an agreement quickly.",
    "options": [
      "splurge",
      "negotiate",
      "shop",
      "save"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Tourists often _____ with sellers at the night market. They can usually get a lower price if they ask politely.",
    "options": [
      "splurge",
      "save",
      "haggle",
      "compare"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The hotel was very _____, but the rooms were small and dirty. Next time, we will pay a little more.",
    "options": [
      "cheap",
      "thrifty",
      "secondhand",
      "worth"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new phone is _____ for most students. It costs less than half the price of other popular models.",
    "options": [
      "overpriced",
      "worth",
      "thrifty",
      "affordable"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The _____ of fresh vegetables went up after the typhoon. Many restaurants had to change their menus.",
    "options": [
      "budget",
      "price",
      "coupon",
      "profit"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The training course is expensive, but it is _____ the money. Most people get a better job after finishing it.",
    "options": [
      "worth",
      "affordable",
      "reasonable",
      "economical"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "This hotel offers great _____ for money. The price includes breakfast, parking, and free use of the pool.",
    "options": [
      "profit",
      "retail",
      "clearance",
      "value"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "You can _____ twenty percent on train tickets if you book online. The discount is only for early bookings.",
    "options": [
      "splurge",
      "haggle",
      "save",
      "shop"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of shipping has risen sharply this year. Many companies are raising their prices as a result.",
    "options": [
      "coupon",
      "cost",
      "clearance",
      "markdown"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The repair shop charges a _____ price for its work. Most customers return to the same shop again and again.",
    "options": [
      "reasonable",
      "overpriced",
      "secondhand",
      "thrifty"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Many visitors complain that the airport restaurants are _____. A small bottle of water costs three times more than in town.",
    "options": [
      "affordable",
      "economical",
      "reasonable",
      "overpriced"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The marketing team must stay within its _____ this year. It cannot spend more than one million dollars.",
    "options": [
      "coupon",
      "markdown",
      "budget",
      "steal"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Before buying a new phone plan, _____ the prices of several companies. Some offer much better deals than others.",
    "options": [
      "splurge",
      "compare",
      "haggle",
      "negotiate"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The bank has a special _____ for new customers this month. Anyone who opens an account receives a free gift.",
    "options": [
      "profit",
      "retail",
      "cost",
      "offer"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Please bring this _____ to the restaurant to receive a free dessert. It is valid until the end of May.",
    "options": [
      "coupon",
      "budget",
      "profit",
      "retail"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Everything in the _____ section is seventy percent off. The store must sell old stock before the new products arrive.",
    "options": [
      "profit",
      "budget",
      "clearance",
      "cost"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The company bought _____ computers for its training room. They were used, but they still work very well.",
    "options": [
      "overpriced",
      "secondhand",
      "thrifty",
      "economical"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "There is a forty percent _____ on all winter coats. The new prices are shown on red stickers.",
    "options": [
      "profit",
      "budget",
      "retail",
      "markdown"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Many people now _____ online instead of going to stores. They can compare prices easily from home.",
    "options": [
      "haggle",
      "negotiate",
      "shop",
      "splurge"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "After getting her first bonus, Amy decided to _____ on a designer handbag. She usually spends very little money.",
    "options": [
      "splurge",
      "haggle",
      "compare",
      "negotiate"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "My grandmother is very _____ and never wastes anything. She even saves old jars to use as containers.",
    "options": [
      "overpriced",
      "thrifty",
      "affordable",
      "worth"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "This new washing machine is very _____. It uses less water and electricity than older models.",
    "options": [
      "economical",
      "overpriced",
      "secondhand",
      "worth"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "This designer jacket costs only two thousand dollars. At that price, it is a real _____.",
    "options": [
      "budget",
      "cost",
      "profit",
      "steal"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Both sides agreed that the new contract was _____. Each company will receive an equal share of the income.",
    "options": [
      "cheap",
      "overpriced",
      "fair",
      "secondhand"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The _____ price of the new tablet is twenty thousand dollars. Online shops may sell it for a little less.",
    "options": [
      "clearance",
      "retail",
      "coupon",
      "markdown"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The bakery made a large _____ last year. The owner used the money to open a second shop.",
    "options": [
      "budget",
      "coupon",
      "profit",
      "markdown"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The new store manager found a _____ on office furniture. The company saved over thirty percent on desks and chairs.",
    "options": [
      "deal",
      "profit",
      "retail",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "deal": {
    "pos": "n.",
    "en_def": "something bought for a good price; a business agreement",
    "cn_def": "划算的交易；協議"
  },
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual price",
    "cn_def": "折扣"
  },
  "sale": {
    "pos": "n.",
    "en_def": "a time when a store sells things at lower prices",
    "cn_def": "特價；拍賣"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something to reach an agreement, often about price",
    "cn_def": "談判；議價"
  },
  "haggle": {
    "pos": "v.",
    "en_def": "to argue about the price of something, especially at a market",
    "cn_def": "討價還價；殺價"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "low in price",
    "cn_def": "便宜的"
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "not too expensive, so most people can pay for it",
    "cn_def": "價格實惠的；負擔得起的"
  },
  "price": {
    "pos": "n.",
    "en_def": "the amount of money you need to pay for something",
    "cn_def": "價格"
  },
  "worth": {
    "pos": "adj.",
    "en_def": "having a certain value; good enough to deserve the money or time spent",
    "cn_def": "值得的；有…價值的"
  },
  "value": {
    "pos": "n.",
    "en_def": "how useful or important something is compared with its price",
    "cn_def": "價值；划算程度"
  },
  "save": {
    "pos": "v.",
    "en_def": "to keep money instead of spending it",
    "cn_def": "節省；存（錢）"
  },
  "cost": {
    "pos": "n.",
    "en_def": "the amount of money needed to buy, make, or do something",
    "cn_def": "成本；費用"
  },
  "reasonable": {
    "pos": "adj.",
    "en_def": "fair and not too expensive",
    "cn_def": "合理的；價格公道的"
  },
  "overpriced": {
    "pos": "adj.",
    "en_def": "more expensive than it should be",
    "cn_def": "定價過高的；太貴的"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money you plan to spend on something",
    "cn_def": "預算"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at two or more things to see how they are different",
    "cn_def": "比較"
  },
  "offer": {
    "pos": "n.",
    "en_def": "a special lower price or deal for a short time",
    "cn_def": "優惠；特價"
  },
  "coupon": {
    "pos": "n.",
    "en_def": "a piece of paper or code that lets you pay less for something",
    "cn_def": "優惠券；折價券"
  },
  "clearance": {
    "pos": "n.",
    "en_def": "a sale to sell old products quickly and cheaply",
    "cn_def": "清倉拍賣"
  },
  "secondhand": {
    "pos": "adj.",
    "en_def": "owned or used by someone else before",
    "cn_def": "二手的"
  },
  "markdown": {
    "pos": "n.",
    "en_def": "a reduction in the price of something in a store",
    "cn_def": "降價；減價"
  },
  "shop": {
    "pos": "v.",
    "en_def": "to go to stores to look at and buy things",
    "cn_def": "購物；逛街"
  },
  "splurge": {
    "pos": "v.",
    "en_def": "to spend a lot of money on something special that you do not really need",
    "cn_def": "揮霍；大手筆花錢"
  },
  "thrifty": {
    "pos": "adj.",
    "en_def": "careful about spending money and not wasting it",
    "cn_def": "節儉的"
  },
  "economical": {
    "pos": "adj.",
    "en_def": "using little money, fuel, or energy",
    "cn_def": "經濟的；省錢的"
  },
  "steal": {
    "pos": "n.",
    "en_def": "something that costs much less than it is really worth",
    "cn_def": "非常便宜的東西；超值品"
  },
  "fair": {
    "pos": "adj.",
    "en_def": "reasonable and right for both sides",
    "cn_def": "公平的；合理的"
  },
  "retail": {
    "pos": "n.",
    "en_def": "the sale of goods to the public in stores",
    "cn_def": "零售"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money you earn after paying all your costs",
    "cn_def": "利潤；獲利"
  }
};

const EXTRA_GLOSSES = {};
