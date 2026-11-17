// Topic 352 Quiz Data: Shopping 購物
// Source word list: https://www.examword.com/group-topic/shopping — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T352 - Shopping 購物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "customer service",
    "pos": "n.phr.",
    "cn_def": "客戶服務",
    "en_def": "the help a company gives to people who buy its products",
    "sentence": "A: The new blender I ordered last week stopped working after two days, so what should I do before the weekend sale ends? B: Call the {{BLANK}} team at the number on your receipt, because they usually arrange a free replacement within three working days and even pay for the delivery.",
    "cn": "A：我上週訂的新果汁機用了兩天就壞了，週末特賣結束前我該怎麼辦？ B：打收據上的電話給【客戶服務】團隊，因為他們通常會在三個工作天內安排免費更換，甚至還會負擔運費。"
  },
  {
    "word": "carrier bag",
    "pos": "n.phr.",
    "cn_def": "購物袋；手提袋",
    "en_def": "a plastic or paper bag a shop gives you to carry things you buy",
    "sentence": "A: Do you need anything else for the office party, or should we head to the checkout now before the line gets longer? B: Let's pay now, but remember that the supermarket charges five dollars for each {{BLANK}}, so I brought two cloth ones from home to save money.",
    "cn": "A：辦公室派對還需要買別的東西嗎？還是我們趁排隊人潮變多之前現在去結帳？ B：我們現在去付錢吧，不過記得超市每個【購物袋】要收五元，所以我從家裡帶了兩個布袋來省錢。"
  },
  {
    "word": "shopping cart",
    "pos": "n.phr.",
    "cn_def": "購物推車",
    "en_def": "a large metal basket on wheels that you push around a store",
    "sentence": "A: We have to buy drinks, snacks, and paper plates for forty employees, so how are we going to carry everything to the car? B: Let's grab a {{BLANK}} near the entrance, because a small basket will be full after the drinks, and the parking lot is quite far from here.",
    "cn": "A：我們要幫四十位員工買飲料、零食和紙盤，要怎麼把東西全部搬到車上？ B：我們去入口附近拿一台【購物推車】吧，因為小籃子放完飲料就滿了，而且停車場離這裡相當遠。"
  },
  {
    "word": "big brand names",
    "pos": "n.phr.",
    "cn_def": "知名大品牌",
    "en_def": "famous companies whose products are well known and often expensive",
    "sentence": "A: Why does the new department store downtown always look so crowded, even on weekday afternoons when most people are at work? B: It sells clothes and watches from many {{BLANK}} at lower prices than other shops, so tourists and office workers stop by during their lunch breaks.",
    "cn": "A：為什麼市中心那家新百貨公司總是那麼擁擠，連大部分人都在上班的平日下午也一樣？ B：它以比其他商店更低的價格販售許多【知名大品牌】的服飾和手錶，所以觀光客和上班族會在午休時順道去逛。"
  },
  {
    "word": "must-have product",
    "pos": "n.phr.",
    "cn_def": "必買商品；必備產品",
    "en_def": "something that many people feel they need to buy",
    "sentence": "A: Why is there a long line outside the electronics store so early on a Monday morning, before the doors even open? B: The company is releasing its newest wireless earphones today, and many young customers see them as this year's {{BLANK}}, so they arrived before sunrise to get one.",
    "cn": "A：為什麼週一一大早、電器行還沒開門，外面就排了長長的人龍？ B：那家公司今天推出最新的無線耳機，許多年輕顧客把它視為今年的【必買商品】，所以他們天還沒亮就來排隊想買一副。"
  },
  {
    "word": "advertising campaign",
    "pos": "n.phr.",
    "cn_def": "廣告宣傳活動",
    "en_def": "a planned series of advertisements to sell a product",
    "sentence": "A: Sales of our new organic juice were very slow last month, so what is the marketing department planning to do about it? B: They will start a big {{BLANK}} next week with TV commercials, posters in subway stations, and short videos on social media to reach younger buyers.",
    "cn": "A：我們新推出的有機果汁上個月銷量很差，行銷部門打算怎麼處理？ B：他們下週會展開大型的【廣告宣傳活動】，包括電視廣告、捷運站海報和社群媒體短片，以吸引年輕買家。"
  },
  {
    "word": "shopping mall",
    "pos": "n.phr.",
    "cn_def": "購物中心",
    "en_def": "a large building with many shops, restaurants and other services",
    "sentence": "A: Where should we take the visiting clients on Saturday afternoon if it keeps raining all weekend and the outdoor market is closed? B: Let's take them to the new {{BLANK}} near the train station, because it has over two hundred stores, a food court, and even a cinema under one roof.",
    "cn": "A：如果整個週末一直下雨、露天市集又關閉，週六下午我們該帶來訪的客戶去哪裡？ B：我們帶他們去火車站附近新開的【購物中心】吧，因為那裡有兩百多家店、美食街，甚至還有電影院，全都在同一棟建築裡。"
  },
  {
    "word": "local shop",
    "pos": "n.phr.",
    "cn_def": "當地商店；社區小店",
    "en_def": "a small store in your own neighborhood",
    "sentence": "A: Why do you still buy your printer paper and pens in the neighborhood instead of ordering everything online like everyone else in the office? B: I like to support the {{BLANK}} on my street, because the owner knows me well, gives me good advice, and often delivers urgent orders himself.",
    "cn": "A：為什麼你還是在附近買影印紙和筆，而不是像辦公室其他人一樣全部上網訂購？ B：我喜歡支持我家那條街上的【社區小店】，因為老闆跟我很熟，會給我好建議，而且常常親自送來急件。"
  },
  {
    "word": "loyalty card",
    "pos": "n.phr.",
    "cn_def": "會員集點卡",
    "en_def": "a card from a store that gives you points or discounts when you shop there often",
    "sentence": "A: The cashier just asked whether I wanted to join their membership program, but is it really worth filling out the form while people are waiting behind me? B: Yes, because with a free {{BLANK}} you collect points every time you shop, and you can exchange them for coupons or free coffee later.",
    "cn": "A：收銀員剛問我要不要加入他們的會員計畫，但後面有人在排隊時填表格真的值得嗎？ B：值得，因為有了免費的【會員集點卡】，你每次購物都能累積點數，之後還能換成折價券或免費咖啡。"
  },
  {
    "word": "pay the full price",
    "pos": "v.phr.",
    "cn_def": "付全額；以原價購買",
    "en_def": "to pay the normal price with no discount",
    "sentence": "A: Should I buy the new laptop for my design work today, or is it better to wait a little longer for a special offer? B: I would wait, because the store always has a big discount at the end of the month, and there is no reason to {{BLANK}} if you can save almost a third.",
    "cn": "A：我應該今天就買設計工作用的新筆電，還是再等一下特價比較好？ B：我會等，因為那家店月底總是有大折扣，如果能省下將近三分之一，就沒理由【付全額】。"
  },
  {
    "word": "tight budget",
    "pos": "n.phr.",
    "cn_def": "預算緊縮；預算有限",
    "en_def": "a small amount of money that you must spend carefully",
    "sentence": "A: The manager wants us to buy new chairs, a coffee machine, and plants for the break room, but how much money do we actually have? B: We are on a {{BLANK}} this quarter because of the new computers, so we should compare prices carefully and maybe skip the plants for now.",
    "cn": "A：經理要我們幫休息室買新椅子、咖啡機和植物，但我們實際上有多少錢？ B：因為買了新電腦，這一季我們的【預算有限】，所以應該仔細比價，或許植物先暫時不買。"
  },
  {
    "word": "pay in cash",
    "pos": "v.phr.",
    "cn_def": "付現金",
    "en_def": "to pay with paper money and coins instead of a card",
    "sentence": "A: The small noodle shop across from our office looks great, but can I use my credit card there when I invite the new interns to lunch? B: Unfortunately not, because the owner only lets customers {{BLANK}}, so you should stop at the convenience store machine to withdraw money first.",
    "cn": "A：我們公司對面那家小麵店看起來很棒，但我請新實習生吃午餐時能在那裡刷信用卡嗎？ B：很遺憾不行，因為老闆只讓顧客【付現金】，所以你應該先去便利商店的提款機領錢。"
  },
  {
    "word": "pick up a bargain",
    "pos": "v.phr.",
    "cn_def": "買到便宜貨；撿便宜",
    "en_def": "to buy something for much less than its usual price",
    "sentence": "A: How did you manage to furnish your entire new apartment so quickly, even though you told me you didn't have much money to spend? B: I went to the furniture warehouse on its closing day, and it was easy to {{BLANK}} because almost everything was seventy percent off.",
    "cn": "A：你是怎麼這麼快就把整間新公寓布置好的？你明明跟我說沒有太多錢可以花。 B：我在家具倉儲店結束營業那天去，因為幾乎所有東西都打三折，所以很容易就【撿到便宜】。"
  },
  {
    "word": "run something up",
    "pos": "v.phr.",
    "cn_def": "累積（帳單、債務）",
    "en_def": "to let a bill or debt become large",
    "sentence": "A: Why did the finance department suddenly cancel most of the company credit cards that the sales staff used during business trips? B: A few employees managed to {{BLANK}} on their cards without receipts, such as hotel bills worth thousands of dollars, so the managers decided to stop the problem quickly.",
    "cn": "A：為什麼財務部突然停掉了業務人員出差時使用的大部分公司信用卡？ B：有幾位員工在卡上【累積】了沒有收據的費用，像是價值數千美元的飯店帳單，所以主管們決定迅速解決這個問題。"
  },
  {
    "word": "shop around",
    "pos": "v.phr.",
    "cn_def": "貨比三家；四處比價",
    "en_def": "to compare prices in different stores before buying",
    "sentence": "A: The first company we called wants twenty thousand dollars to repair the roof of our warehouse, so should we just accept their offer today? B: No, let's {{BLANK}} for a few more days, because other contractors might offer a lower price, a faster schedule, or a longer warranty.",
    "cn": "A：我們打電話問的第一家公司要價兩萬元修理倉庫屋頂，我們今天就接受他們的報價嗎？ B：不，我們再【貨比三家】幾天吧，因為其他承包商可能會提供更低的價格、更快的工期或更長的保固。"
  },
  {
    "word": "slash prices",
    "pos": "v.phr.",
    "cn_def": "大幅降價；削價",
    "en_def": "to make prices much lower suddenly",
    "sentence": "A: Why are so many people rushing into the electronics store across the street this afternoon, and why is there a sign saying 'Last Week'? B: The store is moving to a new location next month, so the manager decided to {{BLANK}} on all televisions and cameras to sell the old stock quickly.",
    "cn": "A：為什麼今天下午這麼多人湧進對街的電器行，而且還有一張寫著「最後一週」的告示？ B：那家店下個月要搬到新地點，所以店長決定把所有電視和相機【大幅降價】，好快速出清舊庫存。"
  },
  {
    "word": "summer sale",
    "pos": "n.phr.",
    "cn_def": "夏季特賣",
    "en_def": "a period in summer when shops sell things at lower prices",
    "sentence": "A: I need new shirts and a light jacket for my business trip to Singapore next month, but the prices at the mall seem very high right now. B: Wait until the {{BLANK}} starts in July, because most clothing stores give up to half off, and you will still have time before you leave.",
    "cn": "A：我下個月去新加坡出差需要新襯衫和一件薄外套，但現在購物中心的價格好像很高。 B：等到七月【夏季特賣】開始吧，因為大部分服飾店最多會打五折，而且你出發前還來得及買。"
  },
  {
    "word": "snap up a bargain",
    "pos": "v.phr.",
    "cn_def": "搶購便宜貨",
    "en_def": "to quickly buy something cheap before other people do",
    "sentence": "A: The furniture store opens at ten o'clock, so why are you leaving the house before eight on a Saturday morning when you could sleep in? B: The store is selling only twenty office desks at half price today, and I want to arrive early enough to {{BLANK}} before everyone else.",
    "cn": "A：家具店十點才開門，為什麼週六早上可以睡晚一點，你卻八點不到就出門？ B：那家店今天只有二十張辦公桌半價出售，我想早點到，趕在其他人之前【搶購便宜貨】。"
  },
  {
    "word": "online store",
    "pos": "n.phr.",
    "cn_def": "網路商店",
    "en_def": "a shop on the internet where you can buy things",
    "sentence": "A: How did your small tea shop keep making money when fewer tourists came to the night market during the long rainy season? B: We opened an {{BLANK}} with free delivery, so customers from other cities could order our tea leaves on their phones and receive them within two days.",
    "cn": "A：在漫長雨季期間，來夜市的觀光客變少了，你們的小茶行是怎麼繼續賺錢的？ B：我們開了一家提供免運的【網路商店】，讓其他城市的顧客可以用手機訂購我們的茶葉，並在兩天內收到。"
  }
];

const MCQS = [
  {
    "q": "Our hotel guests often praise the friendly front desk staff. Good _____ is the main reason many of them return every year.",
    "options": [
      "customer service",
      "carrier bag",
      "summer sale",
      "tight budget"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please remember to bring your own bag tomorrow. The supermarket no longer gives out a free _____ at the checkout.",
    "options": [
      "loyalty card",
      "carrier bag",
      "shopping mall",
      "online store"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "A child left a full _____ in the middle of aisle five. Staff moved it so other customers could pass.",
    "options": [
      "local shop",
      "summer sale",
      "shopping cart",
      "customer service"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The new outlet center has attracted many famous companies. Shoppers can find _____ such as Nike and Sony there at lower prices.",
    "options": [
      "carrier bag",
      "tight budget",
      "loyalty card",
      "big brand names"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Smart watches have become a _____ for busy office workers. Almost everyone in our department bought one this year.",
    "options": [
      "must-have product",
      "shopping cart",
      "local shop",
      "customer service"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The marketing team spent three months planning the new _____. It includes TV commercials, posters, and online videos.",
    "options": [
      "carrier bag",
      "advertising campaign",
      "summer sale",
      "tight budget"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The company will hold its product demonstration at the _____ downtown. Thousands of shoppers pass through the main hall every weekend.",
    "options": [
      "loyalty card",
      "carrier bag",
      "shopping mall",
      "tight budget"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Mr. Lin buys his office supplies from a _____ on his street. The owner sometimes delivers orders to his desk.",
    "options": [
      "summer sale",
      "shopping cart",
      "must-have product",
      "local shop"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Members can scan their _____ at the register to collect points. Every hundred points can be exchanged for a free coffee.",
    "options": [
      "loyalty card",
      "advertising campaign",
      "big brand names",
      "tight budget"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "I refused to _____ for the new printer last week. The same model was thirty percent cheaper at another store.",
    "options": [
      "shop around",
      "pay the full price",
      "pay in cash",
      "snap up a bargain"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The department is working with a _____ this year. Every purchase over five hundred dollars must be approved by the manager.",
    "options": [
      "shopping mall",
      "carrier bag",
      "tight budget",
      "customer service"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The taxi driver's card machine was broken this morning. Luckily, I was able to _____ because I had some bills in my wallet.",
    "options": [
      "shop around",
      "slash prices",
      "pick up a bargain",
      "pay in cash"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Second-hand furniture markets are a great place to furnish a new office. You can easily _____ there if you arrive early.",
    "options": [
      "pick up a bargain",
      "pay the full price",
      "run something up",
      "slash prices"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Employees should not use company cards for personal purchases. Anyone who tries to _____ on a business card will lose it.",
    "options": [
      "shop around",
      "run something up",
      "pick up a bargain",
      "pay in cash"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Before signing a contract with a cleaning company, it is wise to _____. Prices for the same service can differ greatly.",
    "options": [
      "slash prices",
      "run something up",
      "shop around",
      "pay the full price"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Sales fell sharply after the holidays. The store manager decided to _____ on all winter coats to clear the shelves.",
    "options": [
      "pay in cash",
      "shop around",
      "run something up",
      "slash prices"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Most clothing stores in the city start their _____ in early July. Prices on swimwear and T-shirts are often cut in half.",
    "options": [
      "summer sale",
      "loyalty card",
      "carrier bag",
      "local shop"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Only fifty laptops were offered at half price on Friday. Shoppers lined up before dawn to _____ before stock ran out.",
    "options": [
      "pay the full price",
      "snap up a bargain",
      "shop around",
      "run something up"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Our bakery now takes orders through its new _____. Customers can choose a delivery time when they pay online.",
    "options": [
      "carrier bag",
      "tight budget",
      "online store",
      "summer sale"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The airline improved its _____ after many complaints last year. Passengers can now reach a helpful agent within two minutes.",
    "options": [
      "carrier bag",
      "shopping cart",
      "summer sale",
      "customer service"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Please return your _____ to the collection area after unloading your groceries. Leaving it in the parking lot can damage cars.",
    "options": [
      "shopping cart",
      "loyalty card",
      "carrier bag",
      "tight budget"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The small company could not compete with _____ on television advertising. Instead, it focused on word-of-mouth recommendations.",
    "options": [
      "carrier bag",
      "big brand names",
      "shopping cart",
      "tight budget"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Sales of our new running shoes doubled within a month. The national _____ clearly helped customers notice the product.",
    "options": [
      "shopping cart",
      "loyalty card",
      "advertising campaign",
      "carrier bag"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Many families must shop on a _____ these days. They compare prices carefully and avoid buying things they do not need.",
    "options": [
      "carrier bag",
      "shopping mall",
      "customer service",
      "tight budget"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Customers who _____ at this restaurant receive a five percent discount. The owner prefers it because card fees are high.",
    "options": [
      "pay in cash",
      "slash prices",
      "snap up a bargain",
      "run something up"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Ms. Chen loves visiting flea markets on Sundays. She always manages to _____ on old lamps and picture frames.",
    "options": [
      "run something up",
      "pick up a bargain",
      "pay the full price",
      "slash prices"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Smart shoppers _____ for insurance before choosing a plan. Online comparison sites make this much easier than before.",
    "options": [
      "pay in cash",
      "slash prices",
      "shop around",
      "run something up"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Competition from online sellers forced the bookstore to _____ this month. Most novels now cost less than ten dollars.",
    "options": [
      "shop around",
      "pay in cash",
      "pick up a bargain",
      "slash prices"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Within ten minutes of the website sale, every discounted tablet was gone. Thousands of customers rushed to _____ during their lunch break.",
    "options": [
      "snap up a bargain",
      "pay the full price",
      "run something up",
      "shop around"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Last year, the furniture maker moved most of its sales to its new _____. It closed two expensive showrooms to save money.",
    "options": [
      "shopping cart",
      "online store",
      "carrier bag",
      "summer sale"
    ],
    "answer": 1,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "customer service": {
    "pos": "n.phr.",
    "en_def": "the help a company gives to people who buy its products",
    "cn_def": "客戶服務"
  },
  "carrier bag": {
    "pos": "n.phr.",
    "en_def": "a plastic or paper bag a shop gives you to carry things you buy",
    "cn_def": "購物袋；手提袋"
  },
  "shopping cart": {
    "pos": "n.phr.",
    "en_def": "a large metal basket on wheels that you push around a store",
    "cn_def": "購物推車"
  },
  "big brand names": {
    "pos": "n.phr.",
    "en_def": "famous companies whose products are well known and often expensive",
    "cn_def": "知名大品牌"
  },
  "must-have product": {
    "pos": "n.phr.",
    "en_def": "something that many people feel they need to buy",
    "cn_def": "必買商品；必備產品"
  },
  "advertising campaign": {
    "pos": "n.phr.",
    "en_def": "a planned series of advertisements to sell a product",
    "cn_def": "廣告宣傳活動"
  },
  "shopping mall": {
    "pos": "n.phr.",
    "en_def": "a large building with many shops, restaurants and other services",
    "cn_def": "購物中心"
  },
  "local shop": {
    "pos": "n.phr.",
    "en_def": "a small store in your own neighborhood",
    "cn_def": "當地商店；社區小店"
  },
  "loyalty card": {
    "pos": "n.phr.",
    "en_def": "a card from a store that gives you points or discounts when you shop there often",
    "cn_def": "會員集點卡"
  },
  "pay the full price": {
    "pos": "v.phr.",
    "en_def": "to pay the normal price with no discount",
    "cn_def": "付全額；以原價購買"
  },
  "tight budget": {
    "pos": "n.phr.",
    "en_def": "a small amount of money that you must spend carefully",
    "cn_def": "預算緊縮；預算有限"
  },
  "pay in cash": {
    "pos": "v.phr.",
    "en_def": "to pay with paper money and coins instead of a card",
    "cn_def": "付現金"
  },
  "pick up a bargain": {
    "pos": "v.phr.",
    "en_def": "to buy something for much less than its usual price",
    "cn_def": "買到便宜貨；撿便宜"
  },
  "run something up": {
    "pos": "v.phr.",
    "en_def": "to let a bill or debt become large",
    "cn_def": "累積（帳單、債務）"
  },
  "shop around": {
    "pos": "v.phr.",
    "en_def": "to compare prices in different stores before buying",
    "cn_def": "貨比三家；四處比價"
  },
  "slash prices": {
    "pos": "v.phr.",
    "en_def": "to make prices much lower suddenly",
    "cn_def": "大幅降價；削價"
  },
  "summer sale": {
    "pos": "n.phr.",
    "en_def": "a period in summer when shops sell things at lower prices",
    "cn_def": "夏季特賣"
  },
  "snap up a bargain": {
    "pos": "v.phr.",
    "en_def": "to quickly buy something cheap before other people do",
    "cn_def": "搶購便宜貨"
  },
  "online store": {
    "pos": "n.phr.",
    "en_def": "a shop on the internet where you can buy things",
    "cn_def": "網路商店"
  }
};

const EXTRA_GLOSSES = {};
