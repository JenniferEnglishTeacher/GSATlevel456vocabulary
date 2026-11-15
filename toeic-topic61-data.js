// Topic 61 Quiz Data: Clothes 服裝
// Source word list: https://www.examword.com/group-topic/clothes — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T61 - Clothes 服裝",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fashionable",
    "pos": "adj.",
    "cn_def": "時髦的；流行的",
    "en_def": "following the latest style; popular now",
    "sentence": "A: I'm meeting an important client from Milan for lunch tomorrow, and I'm worried my old gray jacket looks a bit boring, so what do you think I should wear? B: You could try that navy blazer you bought last month, because it looks very {{BLANK}} but still professional enough for a business meal.",
    "cn": "A：我明天要和一位來自米蘭的重要客戶吃午餐，我擔心我那件舊灰色外套看起來有點無聊，你覺得我該穿什麼？ B：你可以試試上個月買的那件海軍藍西裝外套，因為它看起來很【時髦】，但對商務餐敘來說也夠正式。"
  },
  {
    "word": "fashion house",
    "pos": "n.phr.",
    "cn_def": "時裝公司；服裝品牌",
    "en_def": "a company that designs and sells expensive clothes",
    "sentence": "A: Our marketing team has been asked to design the online campaign for a luxury brand next season, but do you know much about the company? B: Yes, it is a famous French {{BLANK}} that has made elegant dresses and handbags since 1920, so we should keep the style simple and classic.",
    "cn": "A：我們行銷團隊被要求為一個奢侈品牌設計下一季的線上活動，你對這家公司了解多少？ B：知道，它是一家有名的法國【時裝公司】，從1920年起就製作優雅的洋裝和手提包，所以我們應該讓風格保持簡單經典。"
  },
  {
    "word": "fashion icon",
    "pos": "n.phr.",
    "cn_def": "時尚偶像；時尚指標人物",
    "en_def": "a famous person whose style many people copy",
    "sentence": "A: Why did the department store decide to put a large photo of that famous actress at the main entrance of the new shop? B: She is a real {{BLANK}} whom many young shoppers admire, so the managers believe her picture will attract more customers to the new clothing section this winter.",
    "cn": "A：為什麼百貨公司決定在新店的正門口放那位知名女演員的大照片？ B：她是許多年輕購物者崇拜的真正【時尚偶像】，所以經理們相信她的照片會在今年冬天吸引更多顧客到新的服飾區。"
  },
  {
    "word": "fashion show",
    "pos": "n.phr.",
    "cn_def": "時裝秀",
    "en_def": "an event where models wear new clothes for an audience",
    "sentence": "A: The hotel ballroom looks very busy this afternoon, with workers carrying lights and a long stage, so what event is happening tonight? B: A local designer is holding a {{BLANK}} to present her spring collection, and about three hundred buyers and reporters have already registered to attend.",
    "cn": "A：今天下午飯店宴會廳看起來很忙，工人們搬著燈光和一座長舞台，今晚有什麼活動？ B：一位本地設計師要舉辦一場【時裝秀】來發表她的春季系列，已經有大約三百位買家和記者報名參加。"
  },
  {
    "word": "old fashioned",
    "pos": "adj.phr.",
    "cn_def": "過時的；老式的",
    "en_def": "no longer modern or popular",
    "sentence": "A: Should we keep using the brown uniforms for the front desk staff, or is it time to order new ones before the hotel reopens in March? B: I think we should replace them, because several guests said the design looks {{BLANK}} and does not match our modern lobby.",
    "cn": "A：我們應該繼續讓櫃檯人員穿那套咖啡色制服，還是該在飯店三月重新開幕前訂新的？ B：我覺得應該換掉，因為好幾位客人說那個設計看起來很【過時】，和我們現代化的大廳不搭。"
  },
  {
    "word": "tie",
    "pos": "n.",
    "cn_def": "領帶",
    "en_def": "a long narrow piece of cloth worn around the neck with a shirt",
    "sentence": "A: I have a job interview at the bank tomorrow morning, and I already ironed my white shirt, but do you think I need anything else? B: Yes, you should wear a dark blue {{BLANK}} with that shirt, because most managers at the bank dress formally and will notice small details.",
    "cn": "A：我明天早上在銀行有工作面試，我已經燙好白襯衫了，你覺得我還需要什麼嗎？ B：需要，你應該搭配一條深藍色【領帶】，因為銀行大部分主管都穿著正式，會注意到小細節。"
  },
  {
    "word": "suit",
    "pos": "n.",
    "cn_def": "西裝；套裝",
    "en_def": "a jacket and trousers or skirt made of the same cloth",
    "sentence": "A: The sales director is flying to Singapore next week to sign a large contract with a new partner, so has he prepared everything? B: Almost, but he still needs to pick up his gray {{BLANK}} from the dry cleaner, since he wants to look professional at the signing ceremony.",
    "cn": "A：業務總監下週要飛去新加坡和新合作夥伴簽一份大合約，他都準備好了嗎？ B：差不多了，但他還要去乾洗店拿他的灰色【西裝】，因為他想在簽約儀式上看起來很專業。"
  },
  {
    "word": "shorts",
    "pos": "n.",
    "cn_def": "短褲",
    "en_def": "short trousers that end above the knee",
    "sentence": "A: The company picnic is at the beach on Saturday, and the weather report says it will be very hot, so what should employees wear? B: The organizers said comfortable {{BLANK}} and sandals are fine, but everyone should bring a hat and sunscreen because we will be outdoors all afternoon.",
    "cn": "A：公司野餐週六在海邊，氣象預報說會很熱，員工應該穿什麼？ B：主辦人說穿舒適的【短褲】和涼鞋就可以，但大家都應該帶帽子和防曬乳，因為我們整個下午都會在戶外。"
  },
  {
    "word": "T-shirt",
    "pos": "n.",
    "cn_def": "T恤",
    "en_def": "a simple cotton shirt with short sleeves and no collar",
    "sentence": "A: We are planning a charity run for our staff next month, and many people want something to remember the event, so do you have any ideas? B: We could print our company logo on a bright orange {{BLANK}} for every runner, because it is cheap, useful, and easy to see in photos.",
    "cn": "A：我們正在計畫下個月為員工舉辦慈善路跑，很多人想要紀念這次活動的東西，你有什麼點子嗎？ B：我們可以在每位跑者的亮橘色【T恤】上印公司標誌，因為它便宜、實用，在照片裡也很顯眼。"
  },
  {
    "word": "trousers",
    "pos": "n.",
    "cn_def": "長褲",
    "en_def": "a piece of clothing that covers each leg separately",
    "sentence": "A: You ordered a new uniform from the online store last week, but you looked unhappy when the package arrived this morning, so was something wrong with it? B: Yes, the jacket fits perfectly, but the {{BLANK}} are about five centimeters too long, so I need to send them back and ask for a shorter pair.",
    "cn": "A：你上週在網路商店訂了一套新制服，但今天早上包裹到的時候你看起來不太高興，是有什麼問題嗎？ B：對，外套非常合身，但【長褲】長了大約五公分，所以我得退回去，請他們換一條短一點的。"
  },
  {
    "word": "suitcase",
    "pos": "n.",
    "cn_def": "行李箱",
    "en_def": "a large case with a handle for carrying clothes when traveling",
    "sentence": "A: You are leaving for the trade fair in Frankfurt early tomorrow morning, so have you finished packing all your clothes and product samples yet? B: Not yet, because my old {{BLANK}} broke last month, so I need to buy a new one with strong wheels at the mall after work today.",
    "cn": "A：你明天一早要出發去法蘭克福參加商展，你的衣服和產品樣品都打包好了嗎？ B：還沒，因為我那個舊【行李箱】上個月壞了，所以我今天下班後得去購物中心買一個輪子堅固的新的。"
  },
  {
    "word": "dress",
    "pos": "n.",
    "cn_def": "洋裝；連身裙",
    "en_def": "a piece of women's clothing that covers the body and legs",
    "sentence": "A: My sister is getting married in a garden in May, and I want to look nice without spending too much money, so where should I shop? B: The new boutique near our office is having a sale this week, and I saw a lovely light blue {{BLANK}} there for only half the usual price.",
    "cn": "A：我姊姊五月要在花園裡結婚，我想穿得好看但又不想花太多錢，我該去哪裡買？ B：我們辦公室附近那家新精品店這週在特價，我在那裡看到一件很漂亮的淺藍色【洋裝】，只要平常價格的一半。"
  },
  {
    "word": "flip flop",
    "pos": "n.",
    "cn_def": "夾腳拖鞋",
    "en_def": "a light open sandal held on by a strap between the toes",
    "sentence": "A: Why are you walking with only one shoe on after the team-building trip to the beach this afternoon? B: A big wave took my left {{BLANK}} away while we were playing volleyball near the water, so I have to buy a new pair at the hotel shop before dinner.",
    "cn": "A：今天下午去海邊參加團隊建立活動後，你為什麼只穿一隻鞋走路？ B：我們在水邊打排球的時候，一個大浪把我左腳的【夾腳拖】捲走了，所以我晚餐前得去飯店商店買一雙新的。"
  },
  {
    "word": "waistcoat",
    "pos": "n.",
    "cn_def": "背心（西裝背心）",
    "en_def": "a sleeveless jacket with buttons worn over a shirt",
    "sentence": "A: The restaurant manager wants all the waiters to look more elegant at the wedding dinner on Sunday, so what will they wear? B: Each waiter will wear a white shirt, black trousers, and a dark red {{BLANK}} over the shirt, which matches the colors of the wedding decorations.",
    "cn": "A：餐廳經理希望週日婚宴上所有服務生看起來更優雅，他們會穿什麼？ B：每位服務生都會穿白襯衫、黑長褲，再在襯衫外加一件深紅色【西裝背心】，和婚禮佈置的顏色相配。"
  },
  {
    "word": "backpack",
    "pos": "n.",
    "cn_def": "背包",
    "en_def": "a bag carried on your back with two straps",
    "sentence": "A: You ride your bicycle to the office every day, so how do you carry your laptop, lunch box, and documents without dropping anything? B: I put everything in a large waterproof {{BLANK}}, which keeps my hands free and protects my computer when it suddenly starts raining on the way.",
    "cn": "A：你每天騎腳踏車上班，你是怎麼帶筆電、便當和文件而不掉東西的？ B：我把所有東西都放進一個大的防水【背包】，這樣雙手可以空出來，在路上突然下雨時也能保護我的電腦。"
  },
  {
    "word": "briefcase",
    "pos": "n.",
    "cn_def": "公事包",
    "en_def": "a flat case for carrying papers to work",
    "sentence": "A: The new lawyer seems very organized, and she always arrives at meetings with every contract ready, so how does she keep her papers so neat? B: She carries a brown leather {{BLANK}} with several sections inside, so each client's documents stay separate and she can find them quickly.",
    "cn": "A：新來的律師看起來很有條理，每次開會都把所有合約準備好，她是怎麼讓文件保持這麼整齊的？ B：她帶著一個裡面分好幾格的咖啡色皮革【公事包】，所以每位客戶的文件都分開放，她能很快找到。"
  },
  {
    "word": "casual clothes",
    "pos": "n.phr.",
    "cn_def": "便服；休閒服",
    "en_def": "comfortable, informal clothes such as jeans",
    "sentence": "A: The company has announced a new rule about what we can wear on Fridays, but I missed the meeting this morning, so what did they say? B: From next week, employees may wear {{BLANK}} such as jeans and polo shirts on Fridays, unless they have meetings with important customers.",
    "cn": "A：公司宣布了一項關於星期五可以穿什麼的新規定，但我錯過了今天早上的會議，他們說了什麼？ B：從下週開始，員工星期五可以穿牛仔褲和Polo衫之類的【便服】，除非他們要和重要客戶開會。"
  },
  {
    "word": "vintage clothes",
    "pos": "n.phr.",
    "cn_def": "復古服裝；古著",
    "en_def": "good-quality old clothes from an earlier time",
    "sentence": "A: That small shop on Second Avenue always has a long line of young people outside on weekends, so what does it sell? B: It sells {{BLANK}} from the 1970s and 1980s, such as old leather jackets and colorful shirts, which have become very popular with university students recently.",
    "cn": "A：第二大道上那家小店週末外面總是排著一長串年輕人，它賣什麼？ B：它賣1970和1980年代的【復古服裝】，像是舊皮夾克和色彩鮮豔的襯衫，最近在大學生之間變得非常受歡迎。"
  },
  {
    "word": "smart clothes",
    "pos": "n.phr.",
    "cn_def": "體面的服裝；正式服裝",
    "en_def": "neat, formal clothes for special or business events",
    "sentence": "A: I've been invited to the annual awards dinner at the Grand Hotel next Friday, but the invitation does not mention a dress code, so what should I do? B: You should wear {{BLANK}}, like a jacket and nice shoes, because the CEO and many important guests will give speeches there.",
    "cn": "A：我受邀參加下週五在大飯店舉辦的年度頒獎晚宴，但邀請函沒提到服裝規定，我該怎麼辦？ B：你應該穿【體面的服裝】，像是西裝外套和好看的鞋子，因為執行長和許多重要來賓都會在那裡致詞。"
  },
  {
    "word": "second-hand",
    "pos": "adj.",
    "cn_def": "二手的",
    "en_def": "already used or owned by someone else",
    "sentence": "A: Our small startup needs desks and chairs for the five new employees, but the budget is very limited this year, so how can we save money? B: We could buy {{BLANK}} furniture from the office that is closing downstairs, because the owner is selling everything in good condition at low prices.",
    "cn": "A：我們小新創公司需要為五位新員工準備桌椅，但今年預算很有限，我們要怎麼省錢？ B：我們可以向樓下要歇業的辦公室買【二手】家具，因為老闆正以低價出售所有狀況良好的東西。"
  },
  {
    "word": "keen on",
    "pos": "adj.phr.",
    "cn_def": "熱衷於；很喜歡",
    "en_def": "very interested in something or liking it a lot",
    "sentence": "A: We need someone to help choose the new uniforms for our hotel staff, and the deadline is next Monday, so who should we ask? B: Lisa from reception is very {{BLANK}} fashion and often reads design magazines, so I'm sure she would be happy to join the project.",
    "cn": "A：我們需要有人幫忙挑選飯店員工的新制服，截止日是下週一，我們該問誰？ B：櫃檯的Lisa非常【熱衷於】時尚，常常看設計雜誌，所以我相信她會很樂意加入這個專案。"
  },
  {
    "word": "stylish",
    "pos": "adj.",
    "cn_def": "有型的；時尚的",
    "en_def": "attractive and fashionable in appearance",
    "sentence": "A: The interior designer showed us three ideas for the new reception area yesterday, so which one do you think the visitors will like best? B: I prefer the second design, because the gray sofas and gold lamps look modern and {{BLANK}}, and they will give clients a good first impression.",
    "cn": "A：室內設計師昨天給我們看了新接待區的三個構想，你覺得訪客會最喜歡哪一個？ B：我比較喜歡第二個設計，因為灰色沙發和金色燈具看起來既現代又【有型】，會給客戶好的第一印象。"
  },
  {
    "word": "abandon",
    "pos": "v.",
    "cn_def": "放棄；中止",
    "en_def": "to stop doing or planning something before it is finished",
    "sentence": "A: The clothing company spent two years developing a line of paper jackets, so why did they stop selling them so suddenly last month? B: Customers complained that the jackets tore easily in the rain, so the managers decided to {{BLANK}} the project and focus on cotton products instead.",
    "cn": "A：那家服飾公司花了兩年開發一系列紙製外套，為什麼上個月突然停止販售？ B：顧客抱怨外套在雨中很容易破，所以經理們決定【放棄】這個計畫，改為專注於棉製產品。"
  },
  {
    "word": "fancy",
    "pos": "adj.",
    "cn_def": "高級的；花俏的",
    "en_def": "expensive and of high quality, often with decoration",
    "sentence": "A: The sales team reached its yearly target in only ten months, so how is the manager planning to thank everyone for their hard work? B: She has booked a {{BLANK}} restaurant on the top floor of a hotel downtown, where we will enjoy a seven-course dinner and a view of the city.",
    "cn": "A：業務團隊只用了十個月就達成年度目標，經理打算怎麼感謝大家的辛勞？ B：她在市中心一家飯店頂樓訂了一間【高級】餐廳，我們會在那裡享用七道菜的晚餐，還能欣賞城市景色。"
  },
  {
    "word": "mix and match",
    "pos": "v.phr.",
    "cn_def": "混搭",
    "en_def": "to combine different pieces of clothing in different ways",
    "sentence": "A: I'm going on a ten-day business trip to three countries, but my suitcase is small, so how can I bring enough outfits for every meeting? B: Pack a few pieces in simple colors like black, white, and navy, so you can {{BLANK}} them easily and create a different look each day.",
    "cn": "A：我要去三個國家出差十天，但我的行李箱很小，要怎麼帶足夠每場會議穿的衣服？ B：帶幾件黑色、白色和海軍藍等簡單顏色的單品，這樣你就能輕鬆【混搭】它們，每天打造不同的造型。"
  },
  {
    "word": "heap",
    "pos": "n.",
    "cn_def": "一堆",
    "en_def": "an untidy pile of things",
    "sentence": "A: The storeroom behind the clothing shop is such a mess, and the new manager is visiting tomorrow, so what happened in there? B: The delivery company dropped all the winter coats in a big {{BLANK}} on the floor this morning, and nobody has had time to hang them up yet.",
    "cn": "A：服飾店後面的倉庫好亂，新經理明天就要來了，裡面發生什麼事了？ B：貨運公司今天早上把所有冬季大衣在地上丟成一大【堆】，到現在還沒有人有時間把它們掛起來。"
  },
  {
    "word": "ridiculous",
    "pos": "adj.",
    "cn_def": "荒謬的；離譜的",
    "en_def": "very silly or unreasonable",
    "sentence": "A: Did you see the price of the plain white T-shirt in the new designer shop at the airport while we were waiting for our flight? B: Yes, it cost almost two hundred dollars, which is a {{BLANK}} amount for a simple cotton shirt that you can buy anywhere for much less.",
    "cn": "A：我們等班機的時候，你有看到機場那家新設計師商店裡素白T恤的價格嗎？ B：有，要價將近兩百美元，對一件到處都能用便宜得多的價格買到的簡單棉衫來說，真是【離譜的】金額。"
  },
  {
    "word": "denim",
    "pos": "n.",
    "cn_def": "丹寧布；牛仔布",
    "en_def": "a strong cotton cloth, usually blue, used to make jeans",
    "sentence": "A: Our factory received a large order from a jeans company in Europe, so what kind of material do we need to buy in the next few weeks? B: We need about five thousand meters of strong blue {{BLANK}}, and the supplier promised to deliver it before the end of the month.",
    "cn": "A：我們工廠接到歐洲一家牛仔褲公司的大訂單，接下來幾週我們需要買什麼布料？ B：我們需要大約五千公尺耐用的藍色【丹寧布】，供應商答應會在月底前送到。"
  },
  {
    "word": "trendy",
    "pos": "adj.",
    "cn_def": "新潮的；流行的",
    "en_def": "very fashionable and modern at the moment",
    "sentence": "A: The café on the corner has completely changed its look since it reopened last week, so why is it suddenly so crowded with young customers? B: The new owner turned it into a {{BLANK}} place with bright lights, colorful chairs, and pretty desserts that people love to share online.",
    "cn": "A：轉角那家咖啡館上週重新開幕後外觀完全變了，為什麼突然擠滿了年輕顧客？ B：新老闆把它改造成一個【新潮的】地方，有明亮的燈光、彩色椅子和漂亮的甜點，大家都很喜歡在網路上分享。"
  }
];

const MCQS = [
  {
    "q": "Mr. Lee always wears _____ clothes that follow the latest trends. His coworkers often ask him where he shops.",
    "options": [
      "old fashioned",
      "fashionable",
      "keen on",
      "ridiculous"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The famous Italian _____ will open its first store in Taipei next spring. It plans to sell handbags, shoes, and evening dresses.",
    "options": [
      "briefcase",
      "heap",
      "fashion house",
      "denim"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The singer became a _____ after millions of fans copied her hairstyle and clothes. Many brands now want her to model their products.",
    "options": [
      "fashion icon",
      "suitcase",
      "waistcoat",
      "heap"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Hundreds of buyers watched the models walk down the stage at the _____. The designer received orders from twenty stores afterward.",
    "options": [
      "backpack",
      "denim",
      "tie",
      "fashion show"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hotel's carpets and curtains look _____ because they have not been changed since 1985. The owner plans to redecorate next year.",
    "options": [
      "old fashioned",
      "keen on",
      "trendy",
      "stylish"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "All male staff must wear a shirt and _____ at the reception desk. The rule helps the hotel look professional to guests.",
    "options": [
      "heap",
      "suitcase",
      "fashion show",
      "tie"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "He bought a new black _____ for the wedding, including a jacket and matching trousers. The tailor will shorten the sleeves by Friday.",
    "options": [
      "heap",
      "suit",
      "backpack",
      "fashion icon"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "It was so hot during the outdoor event that most volunteers wore _____ instead of long pants. The organizers also provided free water.",
    "options": [
      "briefcase",
      "heap",
      "shorts",
      "fashion house"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Every participant in the marathon received a free cotton _____ with the sponsor's logo. Many runners wore it during the race.",
    "options": [
      "suitcase",
      "briefcase",
      "heap",
      "T-shirt"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "These _____ are too long, so the shop will shorten the legs for free. You can pick them up tomorrow afternoon.",
    "options": [
      "suitcase",
      "fashion icon",
      "trousers",
      "heap"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Please label your _____ with your name before you check it in at the airport. Lost luggage is easier to return that way.",
    "options": [
      "tie",
      "suitcase",
      "denim",
      "fashion show"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "She wore a long red _____ to the company's anniversary party. Several guests said she looked like a movie star.",
    "options": [
      "dress",
      "briefcase",
      "heap",
      "fashion house"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "One _____ broke while I was walking on the beach, so I had to walk back barefoot. I will buy stronger sandals next time.",
    "options": [
      "tie",
      "briefcase",
      "waistcoat",
      "flip flop"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The waiter wore a black _____ over his white shirt and buttoned it neatly. It made him look smart without a full jacket.",
    "options": [
      "heap",
      "waistcoat",
      "suitcase",
      "fashion icon"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Students carried their books and laptops in a _____ on their shoulders. The school recommends bags with two padded straps.",
    "options": [
      "backpack",
      "tie",
      "dress",
      "fashion show"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The lawyer opened her leather _____ and took out the signed contract. She handed a copy to each client.",
    "options": [
      "shorts",
      "fashion icon",
      "briefcase",
      "heap"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Employees may wear _____ such as jeans on Fridays. However, they should dress formally when meeting important clients.",
    "options": [
      "fashion show",
      "casual clothes",
      "heap",
      "briefcase"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "This store sells _____ from the 1960s, such as old dresses and leather jackets. Many items are rare and quite expensive.",
    "options": [
      "vintage clothes",
      "fashion icon",
      "waistcoat",
      "fashion show"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Visitors to the banquet should wear _____, such as jackets and formal shoes. Jeans and sneakers will not be allowed.",
    "options": [
      "fashion show",
      "heap",
      "fashion house",
      "smart clothes"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "We saved money by buying _____ computers from a company that was closing. They still work perfectly after two years.",
    "options": [
      "keen on",
      "ridiculous",
      "second-hand",
      "fashionable"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "My manager is very _____ outdoor sports, so she often organizes hiking trips for the team. Last month we climbed Yangmingshan together.",
    "options": [
      "stylish",
      "keen on",
      "fancy",
      "trendy"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new office chairs are comfortable and _____, with a modern shape and soft leather seats. Visitors often ask where we bought them.",
    "options": [
      "keen on",
      "ridiculous",
      "old fashioned",
      "stylish"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Because of rising costs, the company had to _____ its plan to open a factory overseas. It will expand the local plant instead.",
    "options": [
      "mix and match",
      "borrow",
      "abandon",
      "repair"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "We celebrated the contract at a _____ restaurant with white tablecloths and live piano music. The meal was expensive but excellent.",
    "options": [
      "fancy",
      "second-hand",
      "keen on",
      "ridiculous"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "With only five basic items, you can _____ them to make many different outfits. This saves space when you travel.",
    "options": [
      "abandon",
      "borrow",
      "deliver",
      "mix and match"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "After the sale, unwanted shirts were left in a large _____ on the floor. Staff spent an hour folding them again.",
    "options": [
      "tie",
      "heap",
      "fashion icon",
      "briefcase"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Charging fifty dollars for a cup of coffee is _____. Most customers will simply go to another café.",
    "options": [
      "ridiculous",
      "keen on",
      "second-hand",
      "old fashioned"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "These jeans are made of thick blue _____ that lasts for years. The factory buys the fabric from a supplier in Japan.",
    "options": [
      "tie",
      "heap",
      "denim",
      "fashion show"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The _____ café near the station is popular with young people who post photos online. It always follows the newest style.",
    "options": [
      "trendy",
      "second-hand",
      "keen on",
      "ridiculous"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Reporters took photos as the models appeared at the spring _____. The event was held in a large hotel ballroom.",
    "options": [
      "fashion icon",
      "denim",
      "suitcase",
      "fashion show"
    ],
    "answer": 3,
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "fashionable": {
    "pos": "adj.",
    "en_def": "following the latest style; popular now",
    "cn_def": "時髦的；流行的"
  },
  "fashion house": {
    "pos": "n.phr.",
    "en_def": "a company that designs and sells expensive clothes",
    "cn_def": "時裝公司；服裝品牌"
  },
  "fashion icon": {
    "pos": "n.phr.",
    "en_def": "a famous person whose style many people copy",
    "cn_def": "時尚偶像；時尚指標人物"
  },
  "fashion show": {
    "pos": "n.phr.",
    "en_def": "an event where models wear new clothes for an audience",
    "cn_def": "時裝秀"
  },
  "old fashioned": {
    "pos": "adj.phr.",
    "en_def": "no longer modern or popular",
    "cn_def": "過時的；老式的"
  },
  "tie": {
    "pos": "n.",
    "en_def": "a long narrow piece of cloth worn around the neck with a shirt",
    "cn_def": "領帶"
  },
  "suit": {
    "pos": "n.",
    "en_def": "a jacket and trousers or skirt made of the same cloth",
    "cn_def": "西裝；套裝"
  },
  "shorts": {
    "pos": "n.",
    "en_def": "short trousers that end above the knee",
    "cn_def": "短褲"
  },
  "t-shirt": {
    "pos": "n.",
    "en_def": "a simple cotton shirt with short sleeves and no collar",
    "cn_def": "T恤"
  },
  "trousers": {
    "pos": "n.",
    "en_def": "a piece of clothing that covers each leg separately",
    "cn_def": "長褲"
  },
  "suitcase": {
    "pos": "n.",
    "en_def": "a large case with a handle for carrying clothes when traveling",
    "cn_def": "行李箱"
  },
  "dress": {
    "pos": "n.",
    "en_def": "a piece of women's clothing that covers the body and legs",
    "cn_def": "洋裝；連身裙"
  },
  "flip flop": {
    "pos": "n.",
    "en_def": "a light open sandal held on by a strap between the toes",
    "cn_def": "夾腳拖鞋"
  },
  "waistcoat": {
    "pos": "n.",
    "en_def": "a sleeveless jacket with buttons worn over a shirt",
    "cn_def": "背心（西裝背心）"
  },
  "backpack": {
    "pos": "n.",
    "en_def": "a bag carried on your back with two straps",
    "cn_def": "背包"
  },
  "briefcase": {
    "pos": "n.",
    "en_def": "a flat case for carrying papers to work",
    "cn_def": "公事包"
  },
  "casual clothes": {
    "pos": "n.phr.",
    "en_def": "comfortable, informal clothes such as jeans",
    "cn_def": "便服；休閒服"
  },
  "vintage clothes": {
    "pos": "n.phr.",
    "en_def": "good-quality old clothes from an earlier time",
    "cn_def": "復古服裝；古著"
  },
  "smart clothes": {
    "pos": "n.phr.",
    "en_def": "neat, formal clothes for special or business events",
    "cn_def": "體面的服裝；正式服裝"
  },
  "second-hand": {
    "pos": "adj.",
    "en_def": "already used or owned by someone else",
    "cn_def": "二手的"
  },
  "keen on": {
    "pos": "adj.phr.",
    "en_def": "very interested in something or liking it a lot",
    "cn_def": "熱衷於；很喜歡"
  },
  "stylish": {
    "pos": "adj.",
    "en_def": "attractive and fashionable in appearance",
    "cn_def": "有型的；時尚的"
  },
  "abandon": {
    "pos": "v.",
    "en_def": "to stop doing or planning something before it is finished",
    "cn_def": "放棄；中止"
  },
  "fancy": {
    "pos": "adj.",
    "en_def": "expensive and of high quality, often with decoration",
    "cn_def": "高級的；花俏的"
  },
  "mix and match": {
    "pos": "v.phr.",
    "en_def": "to combine different pieces of clothing in different ways",
    "cn_def": "混搭"
  },
  "heap": {
    "pos": "n.",
    "en_def": "an untidy pile of things",
    "cn_def": "一堆"
  },
  "ridiculous": {
    "pos": "adj.",
    "en_def": "very silly or unreasonable",
    "cn_def": "荒謬的；離譜的"
  },
  "denim": {
    "pos": "n.",
    "en_def": "a strong cotton cloth, usually blue, used to make jeans",
    "cn_def": "丹寧布；牛仔布"
  },
  "trendy": {
    "pos": "adj.",
    "en_def": "very fashionable and modern at the moment",
    "cn_def": "新潮的；流行的"
  }
};

const EXTRA_GLOSSES = {};
