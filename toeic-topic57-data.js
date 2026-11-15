// Topic 57 Quiz Data: Chocolate 巧克力
// Source word list: https://www.examword.com/group-topic/chocolate — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T57 - Chocolate 巧克力",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cocoa",
    "pos": "n.",
    "cn_def": "可可（粉）",
    "en_def": "powder made from roasted cacao beans, used in drinks and baking",
    "sentence": "A: The café wants to add a warm winter drink to the menu before the holiday season, so what ingredients should we order from the supplier this week? B: Let's order a large bag of good-quality {{BLANK}} powder, because customers love hot chocolate on cold evenings and we can also use it in our brownies.",
    "cn": "A：咖啡館想在節慶季節前在菜單上新增一款冬季熱飲，我們這週該向供應商訂哪些材料？ B：我們訂一大袋優質的【可可】粉吧，因為顧客在寒冷的晚上很喜歡熱巧克力，我們也可以把它用在布朗尼裡。"
  },
  {
    "word": "cacao",
    "pos": "n.",
    "cn_def": "可可樹；可可豆",
    "en_def": "the tree or raw beans that chocolate is made from",
    "sentence": "A: Our marketing team wants to explain where our chocolate comes from on the new website, so do you have any photos from the farm visit last spring? B: Yes, I took dozens of pictures of the farmers in Ghana picking {{BLANK}} pods and drying the beans in the sun before shipping them to our factory.",
    "cn": "A：我們的行銷團隊想在新網站上說明我們的巧克力來自哪裡，你有去年春天參訪農場的照片嗎？ B：有，我拍了幾十張迦納農民採摘【可可】果莢、並在運往我們工廠前把豆子放在陽光下曬乾的照片。"
  },
  {
    "word": "bar",
    "pos": "n.",
    "cn_def": "條；塊",
    "en_def": "a small flat block of chocolate or other food",
    "sentence": "A: I want to buy something small for each member of my team to thank them for working late during the busy season, but I don't have much money left. What do you suggest? B: You could give everyone a {{BLANK}} of dark chocolate from the shop downstairs, because it is cheap, nicely wrapped, and easy to leave on their desks.",
    "cn": "A：我想買點小東西送給團隊的每位成員，感謝他們在旺季加班，但我剩的錢不多了。你有什麼建議？ B：你可以從樓下的店買一【條】黑巧克力送給每個人，因為它便宜、包裝漂亮，又方便放在他們的桌上。"
  },
  {
    "word": "truffle",
    "pos": "n.",
    "cn_def": "松露巧克力",
    "en_def": "a soft, round chocolate candy, often with a creamy center",
    "sentence": "A: The hotel manager asked us to choose a small sweet to leave on each guest's pillow at night, so which option did the kitchen staff recommend? B: They suggested a handmade chocolate {{BLANK}} rolled in cocoa powder, because it looks elegant, tastes wonderful, and guests often mention it in their online reviews.",
    "cn": "A：飯店經理請我們選一款晚上放在每位客人枕頭上的小甜點，廚房員工推薦哪一種？ B：他們建議裹上可可粉的手工【松露巧克力】，因為它看起來高雅、味道很棒，而且客人常在網路評論中提到它。"
  },
  {
    "word": "bonbon",
    "pos": "n.",
    "cn_def": "夾心糖；糖果",
    "en_def": "a small sweet candy, often covered in chocolate",
    "sentence": "A: The front desk wants to put a bowl of candy in the lobby for visitors who wait for their appointments, so what kind should we order? B: Let's order a large box from the local chocolate maker, because each {{BLANK}} is wrapped in colorful paper, easy to share, and won't melt in the air-conditioned waiting area.",
    "cn": "A：櫃檯想在大廳放一碗糖果給等候預約的訪客，我們該訂哪一種？ B：我們向本地巧克力商訂一大盒吧，因為每顆【夾心糖】都包著彩色糖紙，方便分享，而且在有空調的等候區也不會融化。"
  },
  {
    "word": "filling",
    "pos": "n.",
    "cn_def": "餡料；內餡",
    "en_def": "the soft food inside a cake, candy, or pastry",
    "sentence": "A: Several customers said our new chocolate pastries were too dry last week, so has the bakery team found a way to improve the recipe before the weekend? B: Yes, they added a soft orange {{BLANK}} inside each pastry, and the testers in the office said it tastes fresher and much more interesting now.",
    "cn": "A：上週有幾位顧客說我們新的巧克力酥皮點心太乾，烘焙團隊在週末前找到改良食譜的方法了嗎？ B：有，他們在每個點心裡加了柔軟的柳橙【內餡】，辦公室的試吃人員說現在吃起來更清爽，也有趣多了。"
  },
  {
    "word": "cocoa butter",
    "pos": "n.phr.",
    "cn_def": "可可脂",
    "en_def": "the natural fat from cacao beans, used in chocolate and skin creams",
    "sentence": "A: Why does the expensive chocolate from the Swiss supplier feel so much smoother than the cheaper brand we sold last year? B: The Swiss company uses pure {{BLANK}} instead of vegetable oil, so the chocolate melts slowly on your tongue, and that is why many customers are happy to pay a higher price.",
    "cn": "A：為什麼瑞士供應商的高價巧克力吃起來比我們去年賣的便宜品牌滑順這麼多？ B：那家瑞士公司使用純【可可脂】而不是植物油，所以巧克力會在舌頭上慢慢融化，這就是很多顧客樂意付更高價格的原因。"
  },
  {
    "word": "sweet",
    "pos": "adj.",
    "cn_def": "甜的",
    "en_def": "tasting of sugar",
    "sentence": "A: The new energy bar we are testing is popular with the younger staff, but why did the older managers give it such low scores in the survey? B: Most of them said it was far too {{BLANK}} for their taste, so the product team plans to reduce the sugar and add more nuts before the official launch in March.",
    "cn": "A：我們正在測試的新能量棒很受年輕員工歡迎，但為什麼年長的主管在調查中給它這麼低的分數？ B：他們大多說它對他們來說太【甜】了，所以產品團隊打算在三月正式上市前減少糖分，並加入更多堅果。"
  },
  {
    "word": "bitter",
    "pos": "adj.",
    "cn_def": "苦的",
    "en_def": "having a strong, sharp taste that is not sweet",
    "sentence": "A: I tried the ninety-percent chocolate that the sales representative left in the meeting room this morning, but I could only finish one small piece. Did you like it? B: Not really, because it was much too {{BLANK}} for me, although our director said it tastes perfect with a strong cup of black coffee after lunch.",
    "cn": "A：我試了業務代表今天早上留在會議室的百分之九十巧克力，但我只吃得完一小塊。你喜歡嗎？ B：不太喜歡，因為對我來說太【苦】了，不過我們主任說它午餐後配一杯濃黑咖啡吃剛剛好。"
  },
  {
    "word": "rich",
    "pos": "adj.",
    "cn_def": "濃郁的",
    "en_def": "having a strong, full flavor, often with a lot of butter, cream, or chocolate",
    "sentence": "A: We need a dessert for the client dinner on Thursday night, but some guests may feel full after the main course, so should we serve the chocolate cake? B: I'd choose something lighter, because that cake is very {{BLANK}} and heavy, and people usually prefer fresh fruit or sorbet after a big meal.",
    "cn": "A：週四晚上的客戶晚宴我們需要一道甜點，但有些客人吃完主菜可能會很飽，我們該上巧克力蛋糕嗎？ B：我會選清淡一點的，因為那個蛋糕非常【濃郁】又厚重，大家大餐後通常比較喜歡新鮮水果或雪酪。"
  },
  {
    "word": "smooth",
    "pos": "adj.",
    "cn_def": "滑順的",
    "en_def": "having an even texture without lumps",
    "sentence": "A: The chocolate sauce in our new dessert looked lumpy in the photos for the menu, so did the kitchen staff find out what went wrong yesterday? B: They heated it too quickly, so today the chef stirred it slowly over low heat until it became completely {{BLANK}} and shiny, and the new photos look excellent.",
    "cn": "A：菜單照片中我們新甜點的巧克力醬看起來結塊了，廚房員工昨天找出問題出在哪裡了嗎？ B：他們加熱得太快了，所以今天主廚用小火慢慢攪拌，直到它變得完全【滑順】又有光澤，新照片看起來很棒。"
  },
  {
    "word": "creamy",
    "pos": "adj.",
    "cn_def": "綿密的；含奶油的",
    "en_def": "soft and thick like cream",
    "sentence": "A: Our café is planning a new cold drink for the summer months, and the owner wants something that feels special, so what did the test group prefer? B: Most people chose the chocolate milkshake made with fresh ice cream, because it was thick and {{BLANK}}, and it reminded them of the drinks they had as children.",
    "cn": "A：我們咖啡館正在規劃夏季的新冷飲，老闆想要一款感覺特別的，試飲小組比較喜歡哪一款？ B：大多數人選了用新鮮冰淇淋做的巧克力奶昔，因為它濃稠又【綿密】，讓他們想起小時候喝的飲料。"
  },
  {
    "word": "dark",
    "pos": "adj.",
    "cn_def": "黑的；深色的",
    "en_def": "(of chocolate) containing a lot of cocoa and little or no milk",
    "sentence": "A: The health company wants to give its members a small chocolate gift, but it should match its healthy image, so which type do you think fits best? B: I'd recommend {{BLANK}} chocolate with at least seventy percent cocoa, because it has less sugar than other kinds, and many people believe it is better for the heart.",
    "cn": "A：那家健康公司想送會員一份小巧克力禮物，但要符合它健康的形象，你覺得哪一種最合適？ B：我會推薦可可含量至少百分之七十的【黑】巧克力，因為它的糖比其他種類少，而且很多人認為它對心臟比較好。"
  },
  {
    "word": "milk",
    "pos": "n.",
    "cn_def": "牛奶",
    "en_def": "the white liquid from cows; \"milk chocolate\" is chocolate made with milk",
    "sentence": "A: The children's hospital asked us to donate chocolate for its holiday party next Saturday, so which kind should we send to make the kids happy? B: Most young children find dark chocolate too strong, so let's send {{BLANK}} chocolate in small fun shapes, because it is softer, sweeter, and much more popular with kids.",
    "cn": "A：兒童醫院請我們為下週六的節日派對捐贈巧克力，我們該送哪一種才能讓孩子們開心？ B：大多數小孩覺得黑巧克力太濃烈，所以我們送造型有趣的小塊【牛奶】巧克力吧，因為它更軟、更甜，也更受孩子歡迎。"
  },
  {
    "word": "white",
    "pos": "adj.",
    "cn_def": "白的",
    "en_def": "(of chocolate) made from cocoa butter, sugar, and milk, without dark cocoa solids",
    "sentence": "A: The bakery wants to decorate the wedding cookies for Saturday's big order with a different color, because the brown chocolate looks too plain. Any ideas? B: We could melt some {{BLANK}} chocolate and draw thin lines on top, because it stands out nicely against the brown, and the bride said she wants an elegant look.",
    "cn": "A：麵包店想用不同的顏色裝飾週六那筆大訂單的婚禮餅乾，因為咖啡色巧克力看起來太單調了。有什麼點子嗎？ B：我們可以融化一些【白】巧克力在上面畫細線，因為它在咖啡色上很顯眼，而且新娘說她想要高雅的感覺。"
  },
  {
    "word": "melt",
    "pos": "v.",
    "cn_def": "融化",
    "en_def": "to change from solid to liquid because of heat",
    "sentence": "A: We are shipping two hundred boxes of chocolate to our client in Kaohsiung next week, but the weather forecast says it will be very hot. How can we protect them? B: We should use the refrigerated delivery service, because the chocolates will quickly {{BLANK}} in a normal truck, and the client would definitely ask for a refund.",
    "cn": "A：我們下週要運兩百盒巧克力給高雄的客戶，但氣象預報說天氣會很熱。我們要怎麼保護它們？ B：我們應該用冷藏配送服務，因為巧克力在一般貨車裡很快就會【融化】，客戶一定會要求退款。"
  },
  {
    "word": "temper",
    "pos": "v.",
    "cn_def": "為（巧克力）調溫",
    "en_def": "to heat and cool chocolate carefully so it becomes shiny and firm",
    "sentence": "A: The chocolates from the new trainee look dull and gray instead of shiny, and some of them break too easily. What do you think the problem is? B: He probably didn't {{BLANK}} the chocolate correctly, so I will show him how to heat and cool it to the right temperatures during tomorrow's training session.",
    "cn": "A：新實習生做的巧克力看起來暗沉灰白而不是有光澤，有些還很容易斷裂。你覺得問題出在哪裡？ B：他可能沒有正確地為巧克力【調溫】，所以我明天培訓時會教他如何把它加熱和冷卻到正確的溫度。"
  },
  {
    "word": "coat",
    "pos": "v.",
    "cn_def": "裹上；覆蓋",
    "en_def": "to cover something with a thin layer",
    "sentence": "A: The strawberries we bought for the company's anniversary party look fresh, but they seem a little plain for such a special event. Any suggestions? B: We could {{BLANK}} them in melted dark chocolate and add some nuts on top, because guests usually love dipped fruit, and it looks very attractive on the dessert table.",
    "cn": "A：我們為公司週年派對買的草莓看起來很新鮮，但對這麼特別的活動來說似乎有點單調。有什麼建議嗎？ B：我們可以把它們【裹上】融化的黑巧克力，再在上面撒些堅果，因為客人通常很喜歡沾醬水果，而且放在甜點桌上看起來很吸引人。"
  },
  {
    "word": "bake",
    "pos": "v.",
    "cn_def": "烘烤",
    "en_def": "to cook food such as bread or cake in an oven",
    "sentence": "A: Our team wants to raise money for the local animal shelter next Friday, but we have a very small budget for the event. Do you have any ideas? B: Several of us could {{BLANK}} chocolate brownies at home on Thursday night and sell them in the lobby, because people always buy homemade treats for a good cause.",
    "cn": "A：我們團隊想在下週五為本地動物收容所募款，但活動預算非常少。你有什麼點子嗎？ B：我們幾個人可以週四晚上在家【烤】巧克力布朗尼，然後在大廳販售，因為大家總是會為了好的目的買自製點心。"
  },
  {
    "word": "flavor",
    "pos": "n.",
    "cn_def": "口味；風味",
    "en_def": "the particular taste of a food or drink",
    "sentence": "A: The marketing department wants to launch a limited chocolate product for the summer, so what did customers ask for in last month's online survey? B: Many of them asked for a new {{BLANK}} like mango or passion fruit, because they think tropical tastes feel more refreshing during the hot months in Taiwan.",
    "cn": "A：行銷部想在夏天推出一款限定巧克力產品，顧客在上個月的線上調查中提出了什麼要求？ B：很多人希望有像芒果或百香果這樣的新【口味】，因為他們覺得熱帶風味在台灣炎熱的月份裡感覺更清爽。"
  },
  {
    "word": "aroma",
    "pos": "n.",
    "cn_def": "香氣",
    "en_def": "a strong, pleasant smell",
    "sentence": "A: Why do so many people walk into the chocolate shop near the train station, even when they are in a hurry to catch the morning train? B: The owner makes hot chocolate near the front door every morning, so the sweet {{BLANK}} fills the whole street, and commuters find it hard to walk past without buying something.",
    "cn": "A：為什麼這麼多人走進火車站附近的巧克力店，即使他們正趕著搭早班火車？ B：老闆每天早上都在門口附近做熱巧克力，所以甜甜的【香氣】瀰漫整條街，通勤族很難不買點東西就走過去。"
  },
  {
    "word": "dessert",
    "pos": "n.",
    "cn_def": "甜點",
    "en_def": "sweet food eaten at the end of a meal",
    "sentence": "A: The restaurant is preparing the set menu for the company's year-end banquet, and the manager wants to know what we would like to serve after the main course. B: Let's choose a warm chocolate cake with vanilla ice cream for {{BLANK}}, because almost everyone likes it, and it is the chef's most famous dish.",
    "cn": "A：餐廳正在準備公司尾牙的套餐菜單，經理想知道主菜之後我們想上什麼。 B：我們選溫熱的巧克力蛋糕配香草冰淇淋當【甜點】吧，因為幾乎每個人都喜歡，而且這是主廚最有名的料理。"
  },
  {
    "word": "treat",
    "pos": "n.",
    "cn_def": "犒賞；點心",
    "en_def": "something special and pleasant, such as food, that you give or enjoy",
    "sentence": "A: Our sales team finally reached its yearly target this afternoon after months of hard work, so how should the manager thank everyone before the weekend? B: She is planning to bring a box of fancy Belgian chocolates as a special {{BLANK}} for the team, and she will also let everyone leave an hour early on Friday.",
    "cn": "A：我們業務團隊經過幾個月的努力，今天下午終於達成年度目標，經理在週末前該怎麼感謝大家？ B：她打算帶一盒精緻的比利時巧克力作為團隊的特別【犒賞】，而且週五還會讓大家提早一小時下班。"
  },
  {
    "word": "indulgence",
    "pos": "n.",
    "cn_def": "放縱；享受",
    "en_def": "something you enjoy that is not really necessary, often a little unhealthy",
    "sentence": "A: You usually eat a very healthy lunch every day, so why did you buy that expensive chocolate cake at the café downstairs this afternoon? B: I finished a difficult project report after working late all week, so this cake is my small {{BLANK}}, and I will go back to salads and fruit on Monday.",
    "cn": "A：你平常每天午餐都吃得很健康，那為什麼今天下午在樓下咖啡館買了那個昂貴的巧克力蛋糕？ B：我整週加班，終於完成了一份困難的專案報告，所以這塊蛋糕是我的小小【放縱】，週一我就會回去吃沙拉和水果。"
  },
  {
    "word": "craving",
    "pos": "n.",
    "cn_def": "渴望；嘴饞",
    "en_def": "a very strong wish to eat or have something",
    "sentence": "A: Why do you always keep a few pieces of chocolate in your desk drawer, even though you say you are trying to eat less sugar this year? B: I often get a strong {{BLANK}} for something sweet around three o'clock, so one small piece helps me stay focused until the end of the working day.",
    "cn": "A：你說今年想少吃糖，為什麼總是在桌子抽屜裡放幾塊巧克力？ B：我常在三點左右非常【渴望】吃點甜的，所以吃一小塊能幫我保持專注到下班。"
  },
  {
    "word": "snack",
    "pos": "n.",
    "cn_def": "點心；零食",
    "en_def": "a small amount of food eaten between meals",
    "sentence": "A: The training session on Wednesday will last from nine to five, and the trainer is worried that people will get tired after lunch. What should we prepare? B: Let's put a basket of chocolate cookies and fruit at the back of the room, so everyone can grab a quick {{BLANK}} during the short afternoon break.",
    "cn": "A：週三的培訓從九點持續到五點，講師擔心大家午餐後會累。我們該準備什麼？ B：我們在教室後面放一籃巧克力餅乾和水果吧，這樣大家在下午短暫休息時可以快速拿點【點心】吃。"
  },
  {
    "word": "luxury",
    "pos": "n.",
    "cn_def": "奢侈品；奢華",
    "en_def": "something expensive and enjoyable that you do not really need",
    "sentence": "A: Why does the department store charge almost two thousand dollars for that small box of chocolates, when the supermarket sells similar ones for much less? B: That brand sells itself as a {{BLANK}}, so every piece is handmade in France, wrapped in gold paper, and packed in a beautiful wooden box.",
    "cn": "A：為什麼百貨公司那一小盒巧克力要價將近兩千元，超市類似的卻便宜得多？ B：那個品牌把自己定位為【奢侈品】，所以每一顆都是在法國手工製作，用金色紙包裝，再裝進漂亮的木盒裡。"
  },
  {
    "word": "handmade",
    "pos": "adj.",
    "cn_def": "手工製的",
    "en_def": "made by hand, not by machine",
    "sentence": "A: The small shop on Lin Street sells chocolates at twice the price of the big brands, but it always has a long line on weekends. Why is that? B: Everything there is {{BLANK}} by the owner and two assistants in the kitchen behind the shop, so customers know each piece is fresh and made with care.",
    "cn": "A：林街那家小店的巧克力價格是大品牌的兩倍，但週末總是大排長龍。為什麼會這樣？ B：那裡的每樣東西都是老闆和兩位助手在店後面的廚房【手工製作】的，所以顧客知道每一顆都新鮮又用心。"
  },
  {
    "word": "organic",
    "pos": "adj.",
    "cn_def": "有機的",
    "en_def": "grown without chemical fertilizers or pesticides",
    "sentence": "A: Our supermarket chain wants to attract more health-conscious shoppers this year, so which new chocolate products should we put on the shelves first? B: Let's start with bars made from {{BLANK}} cocoa grown without chemicals, because younger customers check labels carefully, and they are willing to pay more for natural products.",
    "cn": "A：我們的連鎖超市今年想吸引更多注重健康的顧客，我們該先把哪些新的巧克力產品上架？ B：我們先從用不含化學物質種植的【有機】可可做成的巧克力條開始吧，因為年輕顧客會仔細看標籤，而且願意為天然產品多付錢。"
  },
  {
    "word": "packaging",
    "pos": "n.",
    "cn_def": "包裝",
    "en_def": "the boxes, paper, or plastic used to wrap and sell a product",
    "sentence": "A: Sales of our chocolate gift boxes dropped last quarter, even though customers still say the taste is excellent. What do you think went wrong? B: The design team believes the {{BLANK}} looks old-fashioned compared with our competitors' products, so they are creating a brighter box with a modern logo for the holiday season.",
    "cn": "A：雖然顧客仍然說味道很棒，但我們巧克力禮盒上一季的銷量下滑了。你覺得哪裡出了問題？ B：設計團隊認為和競爭對手的產品相比，我們的【包裝】看起來很過時，所以他們正在為節慶季節設計一款有現代標誌、更明亮的盒子。"
  },
  {
    "word": "gift",
    "pos": "n.",
    "cn_def": "禮物",
    "en_def": "something you give to someone, often on a special occasion",
    "sentence": "A: Our most important client in Tokyo is retiring at the end of this month after thirty years, so what should we send to thank her for her support? B: Let's send a beautiful box of local chocolates with a handwritten card as a farewell {{BLANK}}, because she always enjoyed tasting Taiwanese sweets during her visits.",
    "cn": "A：我們在東京最重要的客戶做了三十年，這個月底就要退休了，我們該送什麼感謝她的支持？ B：我們送一盒漂亮的在地巧克力配上手寫卡片作為臨別【禮物】吧，因為她每次來訪時都很喜歡品嚐台灣甜點。"
  },
  {
    "word": "satisfying",
    "pos": "adj.",
    "cn_def": "令人滿足的",
    "en_def": "making you feel pleased because it gives you what you need or want",
    "sentence": "A: I usually feel hungry again an hour after eating a regular candy bar, so why do you choose the chocolate with nuts for your afternoon break? B: The nuts give it more protein and fiber, so it is much more {{BLANK}} and keeps me full until dinner, especially on days when I have long meetings.",
    "cn": "A：我平常吃完一般的糖果棒一小時後又會餓，為什麼你下午休息時都選有堅果的巧克力？ B：堅果讓它有更多蛋白質和纖維，所以更【令人滿足】，能讓我一直飽到晚餐，尤其是在我有長時間會議的日子。"
  },
  {
    "word": "decadent",
    "pos": "adj.",
    "cn_def": "極致奢華的；濃郁享受的",
    "en_def": "very rich and enjoyable, in a way that feels like a bit too much",
    "sentence": "A: The hotel's new chocolate dessert costs almost five hundred dollars, so why are so many guests posting photos of it on social media this month? B: It is a truly {{BLANK}} creation with three layers of chocolate, gold leaf, and a warm sauce poured at the table, so people feel it is worth the price.",
    "cn": "A：飯店新推出的巧克力甜點要價將近五百元，為什麼這個月有這麼多客人在社群媒體上貼它的照片？ B：它是一道真正【極致奢華】的作品，有三層巧克力、金箔，還有在桌邊淋上的熱醬汁，所以大家覺得物有所值。"
  }
];

const MCQS = [
  {
    "q": "Eating a whole box of expensive chocolates is a rare _____ for me. I usually try to avoid sugar.",
    "options": [
      "filling",
      "aroma",
      "bar",
      "indulgence"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "After the main course, the waiter asked if we wanted any _____. We ordered one chocolate cake to share.",
    "options": [
      "craving",
      "packaging",
      "dessert",
      "aroma"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "After the long meeting, I had a strong _____ for something sweet. I walked to the café and bought a brownie.",
    "options": [
      "craving",
      "packaging",
      "bar",
      "filling"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The company switched to paper _____ to reduce plastic waste. Customers can now recycle the chocolate boxes easily.",
    "options": [
      "flavor",
      "packaging",
      "dessert",
      "aroma"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The ice cream shop offers a new _____ every month. This month customers can try chocolate mixed with sea salt.",
    "options": [
      "cocoa",
      "craving",
      "flavor",
      "luxury"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "We will _____ the almonds in dark chocolate and let them dry on a tray. They make a great snack.",
    "options": [
      "temper",
      "coat",
      "melt",
      "bake"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Each guest received a round chocolate _____ covered in cocoa powder. The soft center was filled with fresh cream.",
    "options": [
      "packaging",
      "craving",
      "aroma",
      "truffle"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The soup is thick and _____ because the chef adds fresh milk at the end. Many guests ask for the recipe.",
    "options": [
      "creamy",
      "organic",
      "handmade",
      "dark"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Coffee without milk or sugar tastes _____ to many people. They usually add cream to make it milder.",
    "options": [
      "decadent",
      "bitter",
      "organic",
      "handmade"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The manager bought the whole team ice cream as a special _____. Everyone had worked hard to finish the project early.",
    "options": [
      "cocoa",
      "filling",
      "aroma",
      "treat"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "I wrapped a box of chocolates as a birthday _____ for my coworker. She was very surprised when she opened it.",
    "options": [
      "gift",
      "filling",
      "cocoa",
      "aroma"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "My sister likes to _____ chocolate cookies in her new oven on weekends. She often brings some to the office.",
    "options": [
      "coat",
      "melt",
      "bake",
      "temper"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "This chocolate cake is very _____ because it is made with lots of butter and cream. A small slice is enough.",
    "options": [
      "handmade",
      "dark",
      "organic",
      "rich"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "A bowl of hot noodles is a _____ lunch on a cold day. It keeps me full all afternoon.",
    "options": [
      "satisfying",
      "dark",
      "bitter",
      "handmade"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "These chocolates are _____ by local artists rather than produced in a factory. That is why each one looks slightly different.",
    "options": [
      "bitter",
      "creamy",
      "handmade",
      "satisfying"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The hotel's chocolate fountain with gold decorations was truly _____. Guests felt like royalty as they enjoyed it.",
    "options": [
      "bitter",
      "decadent",
      "organic",
      "dark"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Please add two spoons of _____ powder to the hot milk. The drink will taste richer and smell like chocolate.",
    "options": [
      "luxury",
      "packaging",
      "craving",
      "cocoa"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "_____ chocolate contains more cocoa and less sugar than milk chocolate. It also has a stronger taste.",
    "options": [
      "sweet",
      "handmade",
      "dark",
      "creamy"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The farm grows _____ cocoa without using any chemical fertilizers. Its products are sold in health food stores.",
    "options": [
      "organic",
      "satisfying",
      "creamy",
      "decadent"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "I bought a _____ of chocolate at the convenience store for the long train ride. It was small enough to fit in my pocket.",
    "options": [
      "flavor",
      "bar",
      "luxury",
      "aroma"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The receptionist offered each visitor a small chocolate _____ from a glass bowl. It was wrapped in shiny red paper.",
    "options": [
      "bonbon",
      "packaging",
      "indulgence",
      "flavor"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "This pastry has a soft lemon _____ inside. Customers love the surprise when they take the first bite.",
    "options": [
      "craving",
      "gift",
      "luxury",
      "filling"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Students may bring a small _____ to eat during the morning break. Fruit, nuts, and crackers are good choices.",
    "options": [
      "flavor",
      "aroma",
      "snack",
      "luxury"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The _____ of fresh chocolate filled the factory as soon as we opened the door. Everyone suddenly felt hungry.",
    "options": [
      "packaging",
      "aroma",
      "bonbon",
      "indulgence"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Do not leave chocolate in a hot car in summer. It will _____ quickly and lose its shape.",
    "options": [
      "temper",
      "coat",
      "melt",
      "bake"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "This drink is too _____ for me because it contains so much sugar. Could you make one with less syrup?",
    "options": [
      "dark",
      "handmade",
      "organic",
      "sweet"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Fine Swiss chocolate was once a _____ that only rich families could afford. Today it is sold in most supermarkets.",
    "options": [
      "luxury",
      "craving",
      "aroma",
      "filling"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Stir the sauce slowly until it becomes _____ with no lumps. Then pour it over the ice cream.",
    "options": [
      "organic",
      "smooth",
      "bitter",
      "handmade"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "This hand cream contains natural _____ from Ghana. It keeps your skin soft during the dry winter months.",
    "options": [
      "cocoa butter",
      "dessert",
      "snack",
      "craving"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Chocolate makers carefully _____ chocolate by heating and cooling it. This step gives the chocolate a shiny finish.",
    "options": [
      "bake",
      "coat",
      "melt",
      "temper"
    ],
    "answer": 3,
    "vocabIndex": 16
  }
];

const LOOKUP = {
  "cocoa": {
    "pos": "n.",
    "en_def": "powder made from roasted cacao beans, used in drinks and baking",
    "cn_def": "可可（粉）"
  },
  "cacao": {
    "pos": "n.",
    "en_def": "the tree or raw beans that chocolate is made from",
    "cn_def": "可可樹；可可豆"
  },
  "bar": {
    "pos": "n.",
    "en_def": "a small flat block of chocolate or other food",
    "cn_def": "條；塊"
  },
  "truffle": {
    "pos": "n.",
    "en_def": "a soft, round chocolate candy, often with a creamy center",
    "cn_def": "松露巧克力"
  },
  "bonbon": {
    "pos": "n.",
    "en_def": "a small sweet candy, often covered in chocolate",
    "cn_def": "夾心糖；糖果"
  },
  "filling": {
    "pos": "n.",
    "en_def": "the soft food inside a cake, candy, or pastry",
    "cn_def": "餡料；內餡"
  },
  "cocoa butter": {
    "pos": "n.phr.",
    "en_def": "the natural fat from cacao beans, used in chocolate and skin creams",
    "cn_def": "可可脂"
  },
  "sweet": {
    "pos": "adj.",
    "en_def": "tasting of sugar",
    "cn_def": "甜的"
  },
  "bitter": {
    "pos": "adj.",
    "en_def": "having a strong, sharp taste that is not sweet",
    "cn_def": "苦的"
  },
  "rich": {
    "pos": "adj.",
    "en_def": "having a strong, full flavor, often with a lot of butter, cream, or chocolate",
    "cn_def": "濃郁的"
  },
  "smooth": {
    "pos": "adj.",
    "en_def": "having an even texture without lumps",
    "cn_def": "滑順的"
  },
  "creamy": {
    "pos": "adj.",
    "en_def": "soft and thick like cream",
    "cn_def": "綿密的；含奶油的"
  },
  "dark": {
    "pos": "adj.",
    "en_def": "(of chocolate) containing a lot of cocoa and little or no milk",
    "cn_def": "黑的；深色的"
  },
  "milk": {
    "pos": "n.",
    "en_def": "the white liquid from cows; \"milk chocolate\" is chocolate made with milk",
    "cn_def": "牛奶"
  },
  "white": {
    "pos": "adj.",
    "en_def": "(of chocolate) made from cocoa butter, sugar, and milk, without dark cocoa solids",
    "cn_def": "白的"
  },
  "melt": {
    "pos": "v.",
    "en_def": "to change from solid to liquid because of heat",
    "cn_def": "融化"
  },
  "temper": {
    "pos": "v.",
    "en_def": "to heat and cool chocolate carefully so it becomes shiny and firm",
    "cn_def": "為（巧克力）調溫"
  },
  "coat": {
    "pos": "v.",
    "en_def": "to cover something with a thin layer",
    "cn_def": "裹上；覆蓋"
  },
  "bake": {
    "pos": "v.",
    "en_def": "to cook food such as bread or cake in an oven",
    "cn_def": "烘烤"
  },
  "flavor": {
    "pos": "n.",
    "en_def": "the particular taste of a food or drink",
    "cn_def": "口味；風味"
  },
  "aroma": {
    "pos": "n.",
    "en_def": "a strong, pleasant smell",
    "cn_def": "香氣"
  },
  "dessert": {
    "pos": "n.",
    "en_def": "sweet food eaten at the end of a meal",
    "cn_def": "甜點"
  },
  "treat": {
    "pos": "n.",
    "en_def": "something special and pleasant, such as food, that you give or enjoy",
    "cn_def": "犒賞；點心"
  },
  "indulgence": {
    "pos": "n.",
    "en_def": "something you enjoy that is not really necessary, often a little unhealthy",
    "cn_def": "放縱；享受"
  },
  "craving": {
    "pos": "n.",
    "en_def": "a very strong wish to eat or have something",
    "cn_def": "渴望；嘴饞"
  },
  "snack": {
    "pos": "n.",
    "en_def": "a small amount of food eaten between meals",
    "cn_def": "點心；零食"
  },
  "luxury": {
    "pos": "n.",
    "en_def": "something expensive and enjoyable that you do not really need",
    "cn_def": "奢侈品；奢華"
  },
  "handmade": {
    "pos": "adj.",
    "en_def": "made by hand, not by machine",
    "cn_def": "手工製的"
  },
  "organic": {
    "pos": "adj.",
    "en_def": "grown without chemical fertilizers or pesticides",
    "cn_def": "有機的"
  },
  "packaging": {
    "pos": "n.",
    "en_def": "the boxes, paper, or plastic used to wrap and sell a product",
    "cn_def": "包裝"
  },
  "gift": {
    "pos": "n.",
    "en_def": "something you give to someone, often on a special occasion",
    "cn_def": "禮物"
  },
  "satisfying": {
    "pos": "adj.",
    "en_def": "making you feel pleased because it gives you what you need or want",
    "cn_def": "令人滿足的"
  },
  "decadent": {
    "pos": "adj.",
    "en_def": "very rich and enjoyable, in a way that feels like a bit too much",
    "cn_def": "極致奢華的；濃郁享受的"
  }
};

const EXTRA_GLOSSES = {};
