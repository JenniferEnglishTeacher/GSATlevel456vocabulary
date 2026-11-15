// Topic 40 Quiz Data: Buy 購買
// Source word list: https://www.examword.com/group-topic/buy — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T40 - Buy 購買",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "purchase",
    "pos": "v.",
    "cn_def": "購買；採購",
    "en_def": "to buy something, especially for a business",
    "sentence": "A: Our team needs six new laptops before the training program starts next month, so who should I talk to about getting them quickly? B: You should email Mr. Chen in the finance office, because every department must get his approval before it can {{BLANK}} any equipment that is worth more than five thousand dollars.",
    "cn": "A：我們團隊在下個月培訓計畫開始前需要六台新筆電，我該找誰才能快點拿到？ B：你應該寄電子郵件給財務室的陳先生，因為每個部門在【購買】任何價值超過五千元的設備之前，都必須先得到他的核准。"
  },
  {
    "word": "pay",
    "pos": "v.",
    "cn_def": "付款；支付",
    "en_def": "to give money for something you buy or a service",
    "sentence": "A: The hotel front desk just told me that the conference room charge was not included in our package, so what should I do now? B: Don't worry, just {{BLANK}} with the company credit card, keep the receipt, and send it to accounting when we get back to the office on Monday.",
    "cn": "A：飯店櫃台剛剛告訴我，會議室的費用不包含在我們的套裝方案裡，我現在該怎麼辦？ B：別擔心，就用公司信用卡【付款】，把收據留著，等我們星期一回辦公室再交給會計部。"
  },
  {
    "word": "price",
    "pos": "n.",
    "cn_def": "價格",
    "en_def": "the amount of money you must pay to buy something",
    "sentence": "A: I found a printer online that has all the features we need, but the shop near our office sells the same model, so which one should we choose? B: Let's check the {{BLANK}} at both places first, because the website also charges a shipping fee, and the local shop might give us free setup.",
    "cn": "A：我在網路上找到一台功能完全符合我們需求的印表機，但辦公室附近的店也賣同一款，我們該選哪一個？ B：我們先查一下兩邊的【價格】吧，因為網站還要收運費，而附近的店可能會免費幫我們安裝。"
  },
  {
    "word": "cost",
    "pos": "n.",
    "cn_def": "費用；成本",
    "en_def": "the amount of money needed to buy, do, or make something",
    "sentence": "A: The manager wants to send all twenty sales staff to the trade fair in Tokyo next spring, but is there enough money in our travel budget? B: I'm not sure yet, because the total {{BLANK}} of flights, hotels, and meals for that many people could be much higher than what we spent on last year's event.",
    "cn": "A：經理想在明年春天派全部二十位業務人員去東京參加商展，但我們的差旅預算夠嗎？ B：我還不確定，因為那麼多人的機票、飯店和餐費的總【費用】，可能會比我們去年活動花的錢高出許多。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起",
    "en_def": "to have enough money to pay for something",
    "sentence": "A: The new office building downtown looks amazing, and it is very close to the subway station, so why didn't the company decide to move there? B: The rent is almost twice what we pay now, and with sales falling this year, we simply cannot {{BLANK}} such a large expense until business improves again.",
    "cn": "A：市中心那棟新辦公大樓看起來很棒，而且離捷運站很近，公司為什麼沒決定搬過去？ B：那裡的租金幾乎是我們現在的兩倍，而且今年業績下滑，在生意好轉之前我們根本【負擔不起】這麼大的開銷。"
  },
  {
    "word": "spend",
    "pos": "v.",
    "cn_def": "花費（金錢）",
    "en_def": "to use money to buy or pay for things",
    "sentence": "A: Our department received an extra two thousand dollars at the end of the year, and the director said we must use it by December, right? B: Yes, so I suggest we {{BLANK}} most of it on comfortable new chairs for the meeting room, since everyone has been complaining that the old ones hurt their backs.",
    "cn": "A：我們部門年底多拿到兩千元，主任說我們必須在十二月前用掉，對吧？ B：對，所以我建議我們把大部分的錢【花】在會議室的舒適新椅子上，因為大家一直抱怨舊椅子坐得背痛。"
  },
  {
    "word": "sale",
    "pos": "n.",
    "cn_def": "特價；拍賣",
    "en_def": "a time when a shop sells things at lower prices than usual",
    "sentence": "A: Are you going to the department store after work tonight, because I heard many people are lining up outside even though it's a Tuesday? B: Yes, they are having a huge end-of-season {{BLANK}} this week, and winter coats are fifty percent off, so I want to buy one before the popular sizes are gone.",
    "cn": "A：你今晚下班後要去百貨公司嗎？我聽說雖然今天才星期二，外面就已經大排長龍了。 B：對，他們這週在辦換季大【拍賣】，冬季外套打五折，所以我想在熱門尺寸賣完之前買一件。"
  },
  {
    "word": "discount",
    "pos": "n.",
    "cn_def": "折扣",
    "en_def": "an amount taken off the usual price",
    "sentence": "A: We want to order two hundred company T-shirts for the charity run next month, but the price on the website seems quite high for our small budget. B: Call the supplier directly and explain that it's a large order, because they usually give a ten percent {{BLANK}} to businesses that buy more than one hundred items.",
    "cn": "A：我們想為下個月的慈善路跑訂兩百件公司T恤，但網站上的價格對我們的小預算來說似乎太高了。 B：直接打電話給供應商，說明這是大量訂單，因為他們通常會給購買超過一百件的公司九折的【折扣】。"
  },
  {
    "word": "bargain",
    "pos": "n.",
    "cn_def": "便宜貨；划算的東西",
    "en_def": "something bought for much less than its usual price",
    "sentence": "A: I can't believe you bought that leather briefcase for only fifty dollars, because it looks exactly like the ones they sell in the luxury shops downtown. B: I know, it was a real {{BLANK}}, since the shop was closing down and selling everything at very low prices, so I went there during my lunch break and got it.",
    "cn": "A：真不敢相信你只花五十元就買到那個皮革公事包，它看起來跟市中心精品店賣的一模一樣。 B：我知道，真的很【划算】，因為那家店要結束營業，所有東西都超低價出清，所以我趁午休去把它買下來了。"
  },
  {
    "word": "cheap",
    "pos": "adj.",
    "cn_def": "便宜的",
    "en_def": "costing little money",
    "sentence": "A: Should we book the hotel next to the convention center for the sales team, or look for somewhere farther away to save money? B: The hotels near the center are full and expensive, but there's a clean, {{BLANK}} guesthouse two stops away by train, so we could save a lot and still arrive on time.",
    "cn": "A：我們該幫業務團隊訂會展中心旁邊的飯店，還是找遠一點的地方來省錢？ B：中心附近的飯店都客滿又貴，但搭火車兩站外有一間乾淨又【便宜】的民宿，所以我們可以省很多錢，而且還是能準時抵達。"
  },
  {
    "word": "expensive",
    "pos": "adj.",
    "cn_def": "昂貴的",
    "en_def": "costing a lot of money",
    "sentence": "A: Why did the marketing team decide to cancel the TV commercial they were planning for the new energy drink launch in the spring? B: Advertising on television turned out to be far too {{BLANK}} for a small company like ours, so we are going to promote the drink on social media and at local events instead.",
    "cn": "A：行銷團隊為什麼決定取消原本為春季新能量飲料上市規劃的電視廣告？ B：在電視上打廣告對我們這樣的小公司來說實在太【昂貴】了，所以我們改在社群媒體和地方活動上宣傳這款飲料。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值；划算程度",
    "en_def": "how useful or important something is compared with its price",
    "sentence": "A: Do you think it's worth paying more for the premium coffee machine for our office kitchen, or should we just buy the basic model? B: The premium one is pricier at first, but it lasts much longer and uses less costly coffee pods, so I think it offers better {{BLANK}} for money over the next few years.",
    "cn": "A：你覺得辦公室茶水間值得多花錢買高級咖啡機嗎？還是我們就買基本款就好？ B：高級款一開始比較貴，但它耐用得多，而且用的咖啡膠囊比較便宜，所以我認為接下來幾年它更【物超所值】。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a piece of paper that shows you have paid for something",
    "sentence": "A: I took two clients out for dinner last night after we signed the contract, so can the company pay me back for the meal? B: Yes, but you'll need to attach the original {{BLANK}} to your expense form and submit it to the accounting department before Friday, or they won't be able to process your claim this month.",
    "cn": "A：我昨晚簽完合約後請兩位客戶吃晚餐，公司可以幫我報帳嗎？ B：可以，但你需要把【收據】正本附在費用申請單上，並在星期五前交給會計部，否則他們這個月就無法處理你的申請。"
  },
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money that is given back to you when you return something",
    "sentence": "A: The projector we bought last week stopped working after only two presentations, and the technician says it can't be repaired easily. B: Take it back to the electronics shop with the box and paperwork, and ask for a full {{BLANK}}, because their policy says shoppers can return faulty items within thirty days of buying them.",
    "cn": "A：我們上週買的投影機只用了兩次簡報就壞了，技術人員說不容易修好。 B：把它連同盒子和文件一起拿回電器行，要求全額【退款】，因為他們的規定是顧客在購買後三十天內可以退回有瑕疵的商品。"
  },
  {
    "word": "checkout",
    "pos": "n.",
    "cn_def": "結帳（處）",
    "en_def": "the place or final step where you pay for what you buy",
    "sentence": "A: I've been trying to buy the plane tickets for our business trip, but the website keeps showing an error message, and I don't know why. B: That often happens at the {{BLANK}} page when your session times out, so log in again, add the tickets to your basket, and finish the payment within ten minutes this time.",
    "cn": "A：我一直想買我們出差的機票，但網站一直跳出錯誤訊息，我不知道為什麼。 B：當你的登入逾時，【結帳】頁面常常會這樣，所以重新登入，把機票加進購物籃，這次要在十分鐘內完成付款。"
  },
  {
    "word": "cart",
    "pos": "n.",
    "cn_def": "購物車",
    "en_def": "a list of items you plan to buy on a website; a shopping trolley",
    "sentence": "A: I'm ordering office supplies on the website right now, and I've already chosen paper, pens, and ink, but is there anything else we need? B: Please add two boxes of staples and some sticky notes to the shopping {{BLANK}} before you pay, because we're almost out and the next supply run won't be until next month.",
    "cn": "A：我現在正在網站上訂辦公用品，已經選了紙、筆和墨水，我們還需要什麼嗎？ B：付款前請把兩盒訂書針和一些便利貼加進【購物車】，因為快用完了，而下一次補貨要等到下個月。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客",
    "en_def": "a person who buys things from a shop or business",
    "sentence": "A: Why does the manager want all the shop assistants to attend a training session on Saturday morning, when that's usually our busiest time? B: She received several complaints last month, so she wants us to learn how to stay polite and patient when a {{BLANK}} is angry about a late delivery or a damaged product.",
    "cn": "A：經理為什麼要所有店員星期六早上參加培訓？那通常是我們最忙的時候。 B：她上個月收到好幾件客訴，所以她希望我們學會當【顧客】因為送貨延誤或商品損壞而生氣時，如何保持禮貌和耐心。"
  },
  {
    "word": "seller",
    "pos": "n.",
    "cn_def": "賣家；賣方",
    "en_def": "a person or company that sells something",
    "sentence": "A: I want to buy a used van for our flower business, and I found one online that looks good, but how can I be sure it's safe? B: Arrange to meet the {{BLANK}} in person, ask to see the service records, and bring a mechanic friend to check the engine before you agree to pay any money.",
    "cn": "A：我想為我們的花店買一台二手廂型車，在網路上找到一台看起來不錯，但我怎麼確定它安全？ B：約【賣家】當面見面，要求看保養紀錄，並帶一位當技師的朋友檢查引擎，然後再同意付錢。"
  },
  {
    "word": "order",
    "pos": "v.",
    "cn_def": "訂購；點（餐）",
    "en_def": "to ask for goods to be made, supplied, or delivered",
    "sentence": "A: We're expecting forty guests at the product launch on Friday evening, so how much food should we get from the catering company? B: Let's {{BLANK}} enough sandwiches and drinks for fifty people, just in case some guests bring colleagues, because running out of food at an important event would make our company look bad.",
    "cn": "A：星期五晚上的產品發表會預計有四十位來賓，我們該向外燴公司訂多少食物？ B：我們就【訂】夠五十人份的三明治和飲料吧，以防有些來賓帶同事來，因為在重要活動上食物不夠會讓公司很沒面子。"
  },
  {
    "word": "delivery",
    "pos": "n.",
    "cn_def": "送貨；運送",
    "en_def": "the act of bringing goods to a place",
    "sentence": "A: The new furniture for the reception area was supposed to arrive this morning, but nothing has come yet, and the visitors arrive tomorrow. B: I just called the supplier, and they said the {{BLANK}} was delayed because of heavy traffic on the highway, but the truck should reach our building before four o'clock this afternoon.",
    "cn": "A：接待區的新家具本來應該今天早上送到，但到現在什麼都還沒來，而訪客明天就到了。 B：我剛打給供應商，他們說因為高速公路塞車，【送貨】延誤了，但卡車應該會在今天下午四點前抵達我們大樓。"
  },
  {
    "word": "online",
    "pos": "adj.",
    "cn_def": "線上的；網路的",
    "en_def": "using the internet",
    "sentence": "A: Our small bakery has been getting fewer customers since the new supermarket opened across the street, so what do you think we should do? B: We could open an {{BLANK}} shop on our website, so people can order cakes and bread from home and pick them up, or even have them delivered to their door.",
    "cn": "A：自從對面新超市開幕後，我們的小麵包店客人越來越少，你覺得我們該怎麼辦？ B：我們可以在網站上開一家【網路】商店，讓大家在家就能訂蛋糕和麵包，再來店取貨，甚至直接送到家門口。"
  },
  {
    "word": "store",
    "pos": "n.",
    "cn_def": "商店",
    "en_def": "a shop, especially a large one",
    "sentence": "A: Excuse me, I'm visiting from Taipei for a business meeting and forgot my phone charger, so where can I buy a new one near this hotel? B: There's a large electronics {{BLANK}} just around the corner, next to the bank, and it stays open until ten o'clock at night, so you still have plenty of time.",
    "cn": "A：不好意思，我從台北來這裡開商務會議，忘了帶手機充電器，這間飯店附近哪裡可以買到新的？ B：轉角就有一家大型電器【商店】，就在銀行旁邊，營業到晚上十點，所以你還有很多時間。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場",
    "en_def": "an area or group of people where products can be sold",
    "sentence": "A: Our company wants to start selling its tea products overseas next year, but which country do you think we should try first? B: Japan could be a good {{BLANK}} for us, because many young people there enjoy Taiwanese bubble tea, and our research shows that demand for healthy drinks is growing quickly in big cities.",
    "cn": "A：我們公司明年想開始在海外銷售茶類產品，你覺得我們應該先試哪個國家？ B：日本可能是很好的【市場】，因為那裡很多年輕人喜歡台灣珍珠奶茶，而且我們的研究顯示大城市對健康飲品的需求成長很快。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a type of product made by a particular company with its own name",
    "sentence": "A: Why are you buying this printer paper when there's a cheaper one on the shelf right next to it that looks almost the same? B: I prefer this {{BLANK}} because the paper never jams in our office machines, and I'd rather pay a little more than waste time fixing the printer every week.",
    "cn": "A：架上旁邊就有一款更便宜、看起來幾乎一樣的影印紙，你為什麼還要買這款？ B：我比較喜歡這個【品牌】，因為它的紙從來不會卡在我們辦公室的機器裡，我寧願多付一點錢，也不想每週浪費時間修印表機。"
  },
  {
    "word": "quality",
    "pos": "n.",
    "cn_def": "品質",
    "en_def": "how good or bad something is",
    "sentence": "A: The supplier from overseas offered us shirts at half the price of our current factory, so why didn't the manager accept the deal? B: She ordered some samples first, and the {{BLANK}} was very poor, because the stitching came apart after one wash, and our customers would definitely complain about that.",
    "cn": "A：海外供應商開給我們的襯衫價格只有現在工廠的一半，經理為什麼不接受這筆交易？ B：她先訂了一些樣品，結果【品質】非常差，洗一次縫線就裂開了，我們的顧客一定會抱怨。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較",
    "en_def": "to look at two or more things to see how they are similar or different",
    "sentence": "A: I need to choose a new mobile phone plan for the whole sales team, but there are so many companies offering different deals. B: Make a simple chart and {{BLANK}} the monthly fees, data limits, and contract lengths of the three biggest providers, and then show it to the manager so she can decide by Friday.",
    "cn": "A：我需要為整個業務團隊選一個新的手機方案，但有好多公司提供不同的優惠。 B：做一張簡單的表格，【比較】三大電信業者的月租費、數據上限和合約長度，然後拿給經理看，讓她在星期五前做決定。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "the amount of money you have to spend on something",
    "sentence": "A: The design team wants to hire a famous photographer for the new catalog, but do we have enough money for that this quarter? B: Unfortunately, our marketing {{BLANK}} was cut by twenty percent this year, so we will probably need to use our own staff photographer and save the extra money for internet advertising.",
    "cn": "A：設計團隊想為新型錄請一位知名攝影師，但我們這一季有足夠的錢嗎？ B：很遺憾，我們今年的行銷【預算】被砍了百分之二十，所以我們可能得用自己公司的攝影師，把多出來的錢留給網路廣告。"
  },
  {
    "word": "installment",
    "pos": "n.",
    "cn_def": "分期付款（的一期）",
    "en_def": "one of several payments made over a period of time",
    "sentence": "A: The new accounting software costs twelve thousand dollars, and that's a lot of money for a small company like ours to pay all at once. B: The software company allows small businesses to pay the first {{BLANK}} of one thousand dollars this month, and then pay the same amount every month for the rest of the year.",
    "cn": "A：新的會計軟體要一萬兩千元，對我們這樣的小公司來說，一次付清是一大筆錢。 B：軟體公司允許小企業這個月先付第一期一千元的【分期款】，然後在今年剩下的每個月都付同樣的金額。"
  },
  {
    "word": "warranty",
    "pos": "n.",
    "cn_def": "保固；保證書",
    "en_def": "a written promise that a company will repair or replace a product if it breaks",
    "sentence": "A: My office laptop suddenly stopped charging this morning, and I have an important presentation to finish by tomorrow afternoon, so what can I do? B: Check the paperwork in the IT office, because I think that laptop is still under a two-year {{BLANK}}, which means the manufacturer will repair or replace it for free.",
    "cn": "A：我的辦公室筆電今天早上突然無法充電，而我有一份重要的簡報要在明天下午前完成，我該怎麼辦？ B：去資訊室查一下文件，因為我記得那台筆電還在兩年【保固】期內，這表示製造商會免費維修或更換。"
  }
];

const MCQS = [
  {
    "q": "The company plans to _____ fifty new tablets for its delivery drivers. The devices will help them track their routes more accurately.",
    "options": [
      "purchase",
      "pay",
      "afford",
      "spend"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Guests can _____ for their rooms by credit card or cash at the front desk. Personal checks are no longer accepted at this hotel.",
    "options": [
      "purchase",
      "pay",
      "order",
      "compare"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ of the new smartphone is listed as 899 dollars on the website. Members of the rewards program can get it for less.",
    "options": [
      "refund",
      "receipt",
      "price",
      "warranty"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The _____ of repairing the old elevator was higher than buying a new one. The building manager therefore decided to replace it completely.",
    "options": [
      "market",
      "brand",
      "seller",
      "cost"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many young employees cannot _____ to rent an apartment near the city center. They usually live in the suburbs and commute by train.",
    "options": [
      "order",
      "afford",
      "compare",
      "purchase"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Most visitors _____ several hours walking around the night market before they go back to their hotels. The food stalls are the main attraction.",
    "options": [
      "pay",
      "afford",
      "compare",
      "spend"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The furniture shop is holding a clearance _____ this weekend before it moves to a new location. All sofas are forty percent off.",
    "options": [
      "sale",
      "delivery",
      "checkout",
      "quality"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Employees receive a fifteen percent _____ on all products sold in the company's shops. They must show their staff card when paying.",
    "options": [
      "warranty",
      "receipt",
      "discount",
      "market"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "At only twenty dollars, the wireless headphones were a real _____. Similar models usually sell for more than twice that amount.",
    "options": [
      "refund",
      "budget",
      "delivery",
      "bargain"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The restaurant near our office serves _____ lunch sets for under five dollars. As a result, it is always busy at noon.",
    "options": [
      "cheap",
      "expensive",
      "online",
      "quiet"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Hiring an outside consultant would be too _____ for our small team. Instead, we will train two of our own staff members.",
    "options": [
      "cheap",
      "online",
      "expensive",
      "cozy"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Customers say the new phone offers excellent _____ for money. It has many features of costlier models but sells for much less.",
    "options": [
      "cost",
      "value",
      "checkout",
      "cart"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Please keep your _____ as proof of purchase. You will need to show it if you want to exchange or return any item.",
    "options": [
      "bargain",
      "brand",
      "receipt",
      "market"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The airline cancelled our flight because of the typhoon. All passengers will receive a full _____ within fourteen business days.",
    "options": [
      "refund",
      "cart",
      "seller",
      "market"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "There was a long line at the supermarket _____ on Saturday afternoon. The manager quickly opened two more registers to help shoppers.",
    "options": [
      "warranty",
      "installment",
      "value",
      "checkout"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Online shoppers often leave items in their shopping _____ without paying. The website now sends reminder emails to encourage them to finish.",
    "options": [
      "market",
      "cart",
      "refund",
      "brand"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Every _____ who spends over 500 dollars this month will receive a free gift card. The offer ends on the last day of June.",
    "options": [
      "customer",
      "warranty",
      "quality",
      "discount"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The online platform checks every _____ before allowing them to list products on the website. This helps protect buyers from fake goods.",
    "options": [
      "bargain",
      "budget",
      "seller",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "If you _____ the printer ink before noon, it will arrive the next morning. Requests made later in the day take two business days.",
    "options": [
      "afford",
      "order",
      "compare",
      "spend"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The furniture company offers free _____ to any address within the city. Customers living outside the city must pay an extra fee.",
    "options": [
      "bargain",
      "receipt",
      "market",
      "delivery"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Staff can now attend _____ training courses from home using their laptops. This saves the company a lot of money on travel.",
    "options": [
      "crowded",
      "online",
      "cozy",
      "expensive"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new convenience _____ on the first floor of our building is open twenty-four hours a day. It sells snacks, drinks, and basic office supplies.",
    "options": [
      "store",
      "brand",
      "quality",
      "cost"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The company hopes to enter the Southeast Asian _____ next year. It plans to open sales offices in Vietnam and Thailand first.",
    "options": [
      "receipt",
      "cart",
      "warranty",
      "market"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Our sportswear _____ is well known among young people in Asia. We are now planning advertising campaigns to attract older customers as well.",
    "options": [
      "checkout",
      "installment",
      "brand",
      "refund"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "All products are checked carefully before they leave the factory. This ensures that their _____ meets international safety standards.",
    "options": [
      "quality",
      "seller",
      "cart",
      "bargain"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Before choosing a supplier, we always _____ prices from at least three different companies. This helps us get the best possible deal.",
    "options": [
      "afford",
      "spend",
      "order",
      "compare"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The manager has to stay within a strict _____ for the year-end party. She can spend no more than 2,000 dollars on food and drinks.",
    "options": [
      "warranty",
      "budget",
      "delivery",
      "brand"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The bank lets customers pay for the car in twelve equal parts. The first _____ is due at the end of next month.",
    "options": [
      "checkout",
      "bargain",
      "installment",
      "brand"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The washing machine comes with a three-year _____ from the manufacturer. Any repairs during that period will be done free of charge.",
    "options": [
      "receipt",
      "discount",
      "cart",
      "warranty"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The company will _____ all travel costs for staff attending the conference in Singapore. Employees just need to submit their receipts afterward.",
    "options": [
      "compare",
      "pay",
      "afford",
      "order"
    ],
    "answer": 1,
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something, especially for a business",
    "cn_def": "購買；採購"
  },
  "pay": {
    "pos": "v.",
    "en_def": "to give money for something you buy or a service",
    "cn_def": "付款；支付"
  },
  "price": {
    "pos": "n.",
    "en_def": "the amount of money you must pay to buy something",
    "cn_def": "價格"
  },
  "cost": {
    "pos": "n.",
    "en_def": "the amount of money needed to buy, do, or make something",
    "cn_def": "費用；成本"
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for something",
    "cn_def": "負擔得起"
  },
  "spend": {
    "pos": "v.",
    "en_def": "to use money to buy or pay for things",
    "cn_def": "花費（金錢）"
  },
  "sale": {
    "pos": "n.",
    "en_def": "a time when a shop sells things at lower prices than usual",
    "cn_def": "特價；拍賣"
  },
  "discount": {
    "pos": "n.",
    "en_def": "an amount taken off the usual price",
    "cn_def": "折扣"
  },
  "bargain": {
    "pos": "n.",
    "en_def": "something bought for much less than its usual price",
    "cn_def": "便宜貨；划算的東西"
  },
  "cheap": {
    "pos": "adj.",
    "en_def": "costing little money",
    "cn_def": "便宜的"
  },
  "expensive": {
    "pos": "adj.",
    "en_def": "costing a lot of money",
    "cn_def": "昂貴的"
  },
  "value": {
    "pos": "n.",
    "en_def": "how useful or important something is compared with its price",
    "cn_def": "價值；划算程度"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows you have paid for something",
    "cn_def": "收據"
  },
  "refund": {
    "pos": "n.",
    "en_def": "money that is given back to you when you return something",
    "cn_def": "退款"
  },
  "checkout": {
    "pos": "n.",
    "en_def": "the place or final step where you pay for what you buy",
    "cn_def": "結帳（處）"
  },
  "cart": {
    "pos": "n.",
    "en_def": "a list of items you plan to buy on a website; a shopping trolley",
    "cn_def": "購物車"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys things from a shop or business",
    "cn_def": "顧客"
  },
  "seller": {
    "pos": "n.",
    "en_def": "a person or company that sells something",
    "cn_def": "賣家；賣方"
  },
  "order": {
    "pos": "v.",
    "en_def": "to ask for goods to be made, supplied, or delivered",
    "cn_def": "訂購；點（餐）"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of bringing goods to a place",
    "cn_def": "送貨；運送"
  },
  "online": {
    "pos": "adj.",
    "en_def": "using the internet",
    "cn_def": "線上的；網路的"
  },
  "store": {
    "pos": "n.",
    "en_def": "a shop, especially a large one",
    "cn_def": "商店"
  },
  "market": {
    "pos": "n.",
    "en_def": "an area or group of people where products can be sold",
    "cn_def": "市場"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a type of product made by a particular company with its own name",
    "cn_def": "品牌"
  },
  "quality": {
    "pos": "n.",
    "en_def": "how good or bad something is",
    "cn_def": "品質"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at two or more things to see how they are similar or different",
    "cn_def": "比較"
  },
  "budget": {
    "pos": "n.",
    "en_def": "the amount of money you have to spend on something",
    "cn_def": "預算"
  },
  "installment": {
    "pos": "n.",
    "en_def": "one of several payments made over a period of time",
    "cn_def": "分期付款（的一期）"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise that a company will repair or replace a product if it breaks",
    "cn_def": "保固；保證書"
  }
};

const EXTRA_GLOSSES = {};
