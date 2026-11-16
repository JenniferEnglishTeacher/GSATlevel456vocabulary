// Topic 195 Quiz Data: Interesting Place 有趣的地方
// Source word list: https://www.examword.com/group-topic/interesting-place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T195 - Interesting Place 有趣的地方",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "attractive",
    "pos": "adj.",
    "cn_def": "有吸引力的",
    "en_def": "pleasing, or interesting enough to make people want it",
    "sentence": "A: Why did the marketing team choose this small coastal town for the company's spring retreat instead of a big city hotel? B: The town has clean beaches, friendly local shops, and very reasonable prices, so it was the most {{BLANK}} option for our budget and for staff who want to relax.",
    "cn": "A：為什麼行銷團隊選擇這個海邊小鎮作為公司春季員工旅遊的地點，而不是大城市的飯店？ B：這個小鎮有乾淨的海灘、友善的在地商店，價格也很合理，所以對我們的預算和想放鬆的員工來說，它是最【有吸引力的】選擇。"
  },
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "迷人的；極有趣的",
    "en_def": "extremely interesting",
    "sentence": "A: How was the guided tour of the old silk factory that the sales department visited during the conference last Friday? B: It was really {{BLANK}}, because the guide showed us how workers made cloth by hand a hundred years ago, and nobody wanted to leave when the tour ended.",
    "cn": "A：上週五開會期間，業務部參觀那座老絲綢工廠的導覽怎麼樣？ B：真的非常【精彩有趣】，因為導覽員讓我們看到一百年前工人如何用手工織布，導覽結束時大家都不想離開。"
  },
  {
    "word": "scenic",
    "pos": "adj.",
    "cn_def": "風景優美的",
    "en_def": "having beautiful natural views",
    "sentence": "A: Should we take the highway or the mountain road when we drive our clients to the countryside hotel on Saturday morning? B: Let's take the {{BLANK}} route along the lake, because it only adds about twenty minutes, and our guests will enjoy the green hills and the views of the water.",
    "cn": "A：星期六早上我們開車載客戶去鄉間飯店時，應該走高速公路還是山路？ B：我們走沿著湖邊那條【風景優美的】路線吧，因為只多花大約二十分鐘，而且客人會很喜歡綠色的山丘和湖景。"
  },
  {
    "word": "picturesque",
    "pos": "adj.",
    "cn_def": "如畫的；景色優美的",
    "en_def": "very pretty, like a painting",
    "sentence": "A: Have you found a good place for the photo shoot for our new travel brochure, or are you still searching online? B: Yes, I found a {{BLANK}} fishing town with colorful wooden houses and small boats, and the mayor has already given us permission to take pictures there next week.",
    "cn": "A：我們新旅遊手冊的拍攝地點找到了嗎，還是你還在網路上搜尋？ B：找到了，我找到一個【如詩如畫的】漁港小鎮，有色彩繽紛的木屋和小船，而且鎮長已經同意我們下週去那裡拍照。"
  },
  {
    "word": "historic",
    "pos": "adj.",
    "cn_def": "有歷史意義的；歷史性的",
    "en_def": "important in history",
    "sentence": "A: Why is the city council spending so much money to repair that old brick building next to the train station downtown? B: It is a {{BLANK}} building where the first city government met over two hundred years ago, so officials want to protect it and open it to visitors.",
    "cn": "A：市議會為什麼花這麼多錢整修市中心火車站旁那棟老磚房？ B：那是一棟【具有歷史意義的】建築，兩百多年前第一屆市政府就在那裡開會，所以官員們想保護它並開放給遊客參觀。"
  },
  {
    "word": "cultural",
    "pos": "adj.",
    "cn_def": "文化的",
    "en_def": "related to the arts, customs and traditions of a group",
    "sentence": "A: What kinds of activities are planned for the overseas partners who are arriving in Taipei next Monday for the trade fair? B: Besides the business meetings, we've arranged several {{BLANK}} events, such as a tea ceremony, a temple visit, and a traditional music performance in the evening.",
    "cn": "A：下週一為了商展抵達台北的海外合作夥伴，安排了哪些活動？ B：除了商務會議之外，我們還安排了幾場【文化】活動，例如茶道、參觀廟宇，以及晚上的傳統音樂表演。"
  },
  {
    "word": "vibrant",
    "pos": "adj.",
    "cn_def": "充滿活力的",
    "en_def": "full of energy, color and activity",
    "sentence": "A: Why did the restaurant group decide to open its new branch in that area near the university instead of the business center? B: The area has a {{BLANK}} night life with street music, colorful shops, and lots of young people, so the owners believe the restaurant will stay busy every evening.",
    "cn": "A：為什麼餐飲集團決定把新分店開在大學附近那一區，而不是商業中心？ B：那一區的夜生活【充滿活力】，有街頭音樂、色彩繽紛的商店和許多年輕人，所以老闆們相信餐廳每天晚上都會很忙。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "熱鬧的；活潑的",
    "en_def": "full of activity and cheerful noise",
    "sentence": "A: Is the café across from our office a good place to hold a quiet meeting with the new supplier this afternoon? B: Probably not, because it gets very {{BLANK}} after lunch, with students chatting loudly and music playing, so I suggest we book the small meeting room upstairs instead.",
    "cn": "A：我們辦公室對面的咖啡廳，適合今天下午和新供應商開個安靜的會議嗎？ B：大概不適合，因為午餐後那裡會變得很【熱鬧】，學生大聲聊天、還放著音樂，所以我建議我們改訂樓上的小會議室。"
  },
  {
    "word": "bustling",
    "pos": "adj.",
    "cn_def": "熙熙攘攘的；繁忙的",
    "en_def": "busy and full of people moving around",
    "sentence": "A: Why did it take you so long to get back to the hotel after shopping for souvenirs with the clients yesterday? B: The night market was so {{BLANK}} that we could hardly walk through the crowds, and it took us almost an hour to find a taxi on the main street.",
    "cn": "A：昨天你和客戶買完紀念品後，為什麼過了那麼久才回到飯店？ B：夜市實在太【熙熙攘攘】了，我們幾乎擠不過人群，而且在大街上花了將近一個小時才叫到計程車。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的；獨一無二的",
    "en_def": "the only one of its kind",
    "sentence": "A: What makes this small island so special that our travel agency wants to add it to every summer tour package next year? B: It has a {{BLANK}} kind of black sand beach that you cannot find anywhere else in the region, and customers keep asking us to include it.",
    "cn": "A：這座小島有什麼特別之處，讓我們旅行社明年想把它加進每個夏季旅遊套裝行程？ B：它有一種【獨特的】黑沙海灘，在這個地區其他地方都找不到，而且客人一直要求我們把它納入行程。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；值得注意的",
    "en_def": "unusual and worth noticing",
    "sentence": "A: Did the new hotel manager really manage to increase the number of guests during the rainy season this year? B: Yes, the results were {{BLANK}}, because bookings went up by forty percent after she started offering free cooking classes and guided walks for every guest.",
    "cn": "A：新任飯店經理今年真的在雨季增加了住客人數嗎？ B：是的，成果非常【驚人】，因為她開始為每位客人提供免費烹飪課和導覽散步之後，訂房量增加了百分之四十。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "special and easy to remember",
    "sentence": "A: How should we plan the farewell dinner for the retiring director so that everyone will talk about it for years? B: Let's hold it on the rooftop of the riverside hotel at sunset, since a beautiful view and good speeches will make the evening truly {{BLANK}} for her and her family.",
    "cn": "A：我們該如何規劃即將退休的處長的歡送晚宴，讓大家多年後還會談論它？ B：我們在日落時分辦在河畔飯店的頂樓吧，因為美麗的景色加上精彩的致詞，會讓那個晚上對她和她的家人來說真正【難忘】。"
  },
  {
    "word": "charming",
    "pos": "adj.",
    "cn_def": "迷人的；可愛的",
    "en_def": "very pleasant and attractive",
    "sentence": "A: What did you think of the little guesthouse where the design team stayed during the workshop in the countryside last month? B: It was a {{BLANK}} place with flower boxes on every window and a friendly owner who baked fresh bread for us each morning, so several of us want to go back.",
    "cn": "A：上個月設計團隊去鄉下參加工作坊時住的那間小民宿，你覺得怎麼樣？ B：那是個【迷人的】地方，每扇窗戶都有花箱，友善的老闆每天早上都為我們烤新鮮麵包，所以我們好幾個人都想再去一次。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平和的",
    "en_def": "quiet and calm",
    "sentence": "A: Where would you recommend I go this weekend after such a stressful month of reports and late meetings at the office? B: Try the small temple garden on the hill behind the city, because it is a {{BLANK}} spot where you can sit by the pond, listen to the birds, and forget about work.",
    "cn": "A：在辦公室經歷了一個月壓力很大的報告和深夜會議之後，你推薦我這個週末去哪裡？ B：去城市後山上的小寺廟花園吧，那是個【寧靜的】地方，你可以坐在池塘邊聽鳥叫，把工作忘掉。"
  },
  {
    "word": "tranquil",
    "pos": "adj.",
    "cn_def": "寧靜的；安靜的",
    "en_def": "calm and quiet, without any disturbance",
    "sentence": "A: Why are so many companies booking that lakeside resort for their management training programs this autumn? B: The lake is very {{BLANK}} in the early morning, with no traffic noise at all, so managers can concentrate during the sessions and take relaxing walks during their breaks.",
    "cn": "A：為什麼今年秋天有這麼多公司預訂那間湖畔度假村來辦主管訓練課程？ B：那座湖在清晨非常【寧靜】，完全沒有車聲，所以主管們上課時能專心，休息時也能輕鬆散步。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的",
    "en_def": "far away from towns and people",
    "sentence": "A: Is it difficult to deliver office supplies to the new research center that the company built in the mountains? B: Yes, it is in a {{BLANK}} area about three hours from the nearest town, so our trucks can only go there twice a week when the weather is good.",
    "cn": "A：把辦公用品送到公司在山裡蓋的新研究中心很困難嗎？ B：是的，它位於【偏遠的】地區，離最近的城鎮大約三小時，所以我們的卡車只能在天氣好的時候每週去兩次。"
  },
  {
    "word": "exotic",
    "pos": "adj.",
    "cn_def": "異國情調的；外來的",
    "en_def": "unusual and exciting because it comes from a faraway place",
    "sentence": "A: What kind of trip is the travel agency planning to offer as the top prize in this year's customer contest? B: The winner will receive a week on a tropical island with {{BLANK}} flowers, unusual birds, and food that most of our customers have never tasted before, so we expect many entries.",
    "cn": "A：旅行社打算拿什麼樣的旅遊當作今年顧客競賽的頭獎？ B：得獎者將獲得在熱帶島嶼待一週的行程，那裡有【充滿異國風情的】花朵、罕見的鳥類，以及大多數顧客從沒吃過的食物，所以我們預期會有很多人報名。"
  },
  {
    "word": "touristy",
    "pos": "adj.",
    "cn_def": "觀光客多的；過度商業化的",
    "en_def": "full of tourists and things made for them, often in a bad way",
    "sentence": "A: Do you think we should take the visiting engineers to the famous old street near the harbor for dinner tonight? B: I'd rather not, because it has become too {{BLANK}}, with crowds, expensive souvenir stands, and average food, so let's take them to a family restaurant that local people prefer.",
    "cn": "A：你覺得今晚我們該帶來訪的工程師去港口附近那條有名的老街吃晚餐嗎？ B：我寧可不要，因為那裡已經變得太【觀光化】了，人潮擁擠、紀念品攤很貴、食物也普普通通，我們還是帶他們去在地人比較喜歡的家庭餐廳吧。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Why do we need to reserve the tickets for the night river cruise more than two weeks before the clients arrive? B: The cruise is extremely {{BLANK}} with both tourists and local families, so it is usually fully booked on weekends, especially during the summer festival season.",
    "cn": "A：為什麼我們需要在客戶抵達前兩週以上就預訂夜間遊河的船票？ B：這個遊船行程非常【受】觀光客和本地家庭【歡迎】，所以週末通常都會客滿，尤其是在夏季節慶期間。"
  },
  {
    "word": "hidden",
    "pos": "adj.",
    "cn_def": "隱藏的；隱密的",
    "en_def": "difficult to find or see",
    "sentence": "A: How did you find that wonderful little noodle shop where we had lunch with the new interns yesterday? B: A taxi driver told me about it, since it is {{BLANK}} at the end of a narrow lane behind the post office, and most visitors walk right past without seeing it.",
    "cn": "A：昨天我們和新實習生吃午餐的那家很棒的小麵店，你是怎麼找到的？ B：是一位計程車司機告訴我的，因為它【隱身】在郵局後面一條窄巷的盡頭，大部分遊客都直接走過而沒看到。"
  },
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "a famous building or place that is easy to recognize",
    "sentence": "A: How will the visitors from the Tokyo office find our new headquarters if they do not speak any Chinese? B: Tell them to look for Taipei 101, because that famous {{BLANK}} is right across the street from our building, and any taxi driver can take them there easily.",
    "cn": "A：東京辦公室的訪客如果完全不會說中文，要怎麼找到我們的新總部？ B：告訴他們找台北101，因為那個著名的【地標】就在我們大樓對面，任何計程車司機都能輕鬆載他們過去。"
  },
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "the place someone is traveling to",
    "sentence": "A: Which city did the board finally choose for next year's sales incentive trip, and why did it take so long to decide? B: They chose Kyoto as the {{BLANK}}, because it offers temples, good hotels, and short flights, but they needed time to compare costs with Bangkok and Seoul.",
    "cn": "A：董事會最後選了哪個城市作為明年業務獎勵旅遊的地點？為什麼花了那麼久才決定？ B：他們選擇京都作為【目的地】，因為那裡有寺廟、好飯店，而且航程短，但他們需要時間和曼谷、首爾比較費用。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "景點；吸引人的事物",
    "en_def": "a place people visit for interest or fun",
    "sentence": "A: What should our guests see if they only have one free afternoon after the trade show finishes on Thursday? B: The main {{BLANK}} in this city is the National Palace Museum, so I suggest booking a guided tour there and having dinner at the night market afterward.",
    "cn": "A：如果我們的客人在星期四商展結束後只有一個下午的空閒，他們應該去看什麼？ B：這個城市的主要【景點】是故宮博物院，所以我建議預約那裡的導覽，之後再去夜市吃晚餐。"
  },
  {
    "word": "resort",
    "pos": "n.",
    "cn_def": "度假村；度假勝地",
    "en_def": "a place where people go on holiday, with many services",
    "sentence": "A: Where will the annual staff trip be held this year, and will employees be able to bring their families along? B: We have booked a beach {{BLANK}} in Kenting with three pools, a spa, and a kids' club, and each employee may bring up to two family members at a discount.",
    "cn": "A：今年的年度員工旅遊會在哪裡舉辦？員工可以帶家人一起去嗎？ B：我們訂了墾丁一間有三座泳池、水療中心和兒童俱樂部的海灘【度假村】，每位員工最多可以用優惠價帶兩位家人同行。"
  },
  {
    "word": "neighborhood",
    "pos": "n.",
    "cn_def": "街坊；社區；鄰近地區",
    "en_def": "an area of a town where people live",
    "sentence": "A: Why are you thinking about moving to a new apartment when your current one is so close to the office? B: My {{BLANK}} has become very noisy since a new bar opened downstairs, and I would like to live somewhere quieter with a park and a good school nearby.",
    "cn": "A：你現在的公寓離辦公室那麼近，為什麼還考慮搬到新公寓？ B：自從樓下開了一家新酒吧後，我住的【社區】就變得很吵，我想住在比較安靜、附近有公園和好學校的地方。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港口；港灣",
    "en_def": "a sheltered area of water where ships and boats stay",
    "sentence": "A: Why will the shipment of furniture from Vietnam arrive three days later than the date on the original contract? B: A typhoon closed the {{BLANK}} in Kaohsiung for two days, so the cargo ship had to wait at sea until the port authorities said it was safe to enter.",
    "cn": "A：為什麼從越南運來的家具會比原合約上的日期晚三天抵達？ B：颱風讓高雄的【港口】關閉了兩天，所以貨輪必須在海上等待，直到港務單位宣布可以安全進港。"
  },
  {
    "word": "waterfront",
    "pos": "n.",
    "cn_def": "濱水區；海濱",
    "en_def": "the part of a town next to a river, lake or sea",
    "sentence": "A: Where is the company holding its end-of-year party, and is it easy to get there by public transportation? B: It will be at a restaurant on the {{BLANK}} in Tamsui, so guests can watch the sunset over the river, and the MRT station is only a five-minute walk away.",
    "cn": "A：公司的尾牙辦在哪裡？搭大眾運輸容易到嗎？ B：會辦在淡水【河岸邊】的一家餐廳，客人可以欣賞河上的夕陽，而且捷運站走路只要五分鐘。"
  },
  {
    "word": "viewpoint",
    "pos": "n.",
    "cn_def": "觀景點",
    "en_def": "a place from which you can see a beautiful view",
    "sentence": "A: Is there a good place on the mountain trail where the hiking group can stop to rest and take photos during Saturday's team-building trip? B: Yes, about halfway up there is a {{BLANK}} with benches and a wooden platform, and from there you can see the whole city and the ocean.",
    "cn": "A：星期六團隊建立活動時，登山步道上有沒有適合健行隊伍停下來休息和拍照的地方？ B：有，大約在半山腰有一個設有長椅和木平台的【觀景點】，從那裡可以看到整座城市和海洋。"
  },
  {
    "word": "monument",
    "pos": "n.",
    "cn_def": "紀念碑；紀念建築",
    "en_def": "a structure built to help people remember a person or event",
    "sentence": "A: What is that tall stone structure in the middle of the square in front of the city hall where we are meeting? B: It is a {{BLANK}} built in honor of the workers who built the first railway here, and many tour groups stop there to take photos and read the history.",
    "cn": "A：我們要碰面的市政府前廣場中央，那座高高的石造建築是什麼？ B：那是一座為了紀念在這裡興建第一條鐵路的工人而建的【紀念碑】，很多旅行團會停在那裡拍照、閱讀歷史介紹。"
  },
  {
    "word": "gallery",
    "pos": "n.",
    "cn_def": "美術館；畫廊",
    "en_def": "a room or building where art is shown",
    "sentence": "A: Where are we going to hold the launch event for the new line of designer furniture next month? B: We have rented a modern art {{BLANK}} downtown, so guests can look at paintings and sculptures while they try the new chairs and enjoy drinks.",
    "cn": "A：下個月新系列設計師家具的發表會要在哪裡舉辦？ B：我們租了市中心一間現代藝術【畫廊】，讓客人可以一邊欣賞畫作和雕塑，一邊試坐新椅子、享用飲料。"
  },
  {
    "word": "marketplace",
    "pos": "n.",
    "cn_def": "市集；市場",
    "en_def": "an open area where people buy and sell goods",
    "sentence": "A: What should I do if I want to buy fresh local fruit and handmade gifts for my colleagues before I fly home tomorrow? B: Go to the old {{BLANK}} in the center of town early in the morning, because farmers and craftspeople set up stalls there and sell their goods at fair prices.",
    "cn": "A：如果我想在明天搭機回家前，買些新鮮的在地水果和手工禮物給同事，該怎麼做？ B：一大早去鎮中心的老【市集】吧，因為農夫和工匠會在那裡擺攤，用公道的價格販售商品。"
  },
  {
    "word": "district",
    "pos": "n.",
    "cn_def": "區；地區",
    "en_def": "a particular area of a city or country",
    "sentence": "A: Why are so many technology companies opening offices in that part of the city near the new metro line? B: The government made it a special business {{BLANK}} with lower taxes and fast internet, so rents there are attractive for startups and large firms alike.",
    "cn": "A：為什麼這麼多科技公司在城市新捷運線附近那一帶開設辦公室？ B：政府把那裡劃為享有較低稅率和高速網路的特別商業【區】，所以那裡的租金對新創公司和大企業都很有吸引力。"
  },
  {
    "word": "village",
    "pos": "n.",
    "cn_def": "村莊",
    "en_def": "a very small town in the countryside",
    "sentence": "A: Where does the tea we serve in our office lounge actually come from, and why does it taste so fresh? B: It comes from a small mountain {{BLANK}} in Nantou where farmers grow it by hand, and our supplier picks it up directly from them every two weeks.",
    "cn": "A：我們辦公室休息室提供的茶到底是從哪裡來的？為什麼喝起來這麼新鮮？ B：它來自南投一個小山【村】，那裡的農夫用手工種植，我們的供應商每兩週直接向他們取貨。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；文化資產",
    "en_def": "the history, traditions and buildings passed down from the past",
    "sentence": "A: Why can't the developer simply knock down the old houses on that street and build a new shopping mall there? B: The houses are listed as part of the city's {{BLANK}}, so they are protected by law, and any changes need approval from the cultural affairs office first.",
    "cn": "A：為什麼建商不能直接拆掉那條街上的老房子，在那裡蓋一座新的購物中心？ B：那些房子被列為城市【文化資產】的一部分，所以受到法律保護，任何改變都必須先經過文化局核准。"
  },
  {
    "word": "panorama",
    "pos": "n.",
    "cn_def": "全景",
    "en_def": "a wide view of a large area",
    "sentence": "A: Why is the hotel charging so much more for the rooms on the top floor than for the ones below? B: From the top floor, guests can enjoy a wide {{BLANK}} of the mountains, the river, and the city lights at night, so many travelers are happy to pay extra for it.",
    "cn": "A：為什麼飯店頂樓的房間比樓下的房間貴那麼多？ B：從頂樓，客人可以欣賞到山巒、河流和夜晚城市燈火的寬廣【全景】，所以很多旅客都很樂意為此多付錢。"
  },
  {
    "word": "hotspot",
    "pos": "n.",
    "cn_def": "熱門地點",
    "en_def": "a popular place where many people like to go",
    "sentence": "A: Why is the new rooftop café near our office always full, even on weekday afternoons when people should be working? B: It has become a social media {{BLANK}}, because influencers post photos of its colorful drinks and city views, so young customers line up there every day.",
    "cn": "A：為什麼我們辦公室附近那家新開的頂樓咖啡廳總是客滿，連平日下午大家應該在上班的時候也一樣？ B：它已經成為社群媒體上的【熱門地點】，因為網紅會發布它色彩繽紛的飲料和城市景觀的照片，所以年輕顧客每天都去排隊。"
  }
];

const MCQS = [
  {
    "q": "Drivers who are not in a hurry often take the _____ route along the coast. It is slower, but the ocean views are beautiful.",
    "options": [
      "scenic",
      "cultural",
      "historic",
      "exotic"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The brochure shows a _____ village with stone bridges and flower-covered cottages. Many readers say the photos look just like paintings.",
    "options": [
      "bustling",
      "cultural",
      "picturesque",
      "touristy"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The old customs house was built in 1895 and once served as the city's first government office. It is now a protected _____ building.",
    "options": [
      "scenic",
      "historic",
      "vibrant",
      "exotic"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The company sponsors several _____ events each year, such as opera performances and calligraphy classes. They help foreign staff understand local traditions.",
    "options": [
      "remote",
      "scenic",
      "hidden",
      "cultural"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The new office is located in a _____ area full of colorful street art, busy cafés, and young creative workers. Employees enjoy its energy.",
    "options": [
      "tranquil",
      "remote",
      "vibrant",
      "peaceful"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The main train station is especially _____ during rush hour, when thousands of commuters hurry to their platforms. Travelers should allow extra time.",
    "options": [
      "bustling",
      "tranquil",
      "picturesque",
      "exotic"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Each handmade lamp in the shop is _____, so no two customers will ever own exactly the same design. Prices reflect the careful craftsmanship.",
    "options": [
      "popular",
      "remote",
      "historic",
      "unique"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Sales at the seaside hotel rose by sixty percent in just one year. The manager received an award for this _____ achievement.",
    "options": [
      "remote",
      "remarkable",
      "touristy",
      "exotic"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The farewell party on the river cruise was so special that staff still talk about it. It was the most _____ event of the year.",
    "options": [
      "memorable",
      "remote",
      "hidden",
      "touristy"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "After a week of noisy meetings, Ms. Lin spent her Sunday at a _____ mountain temple. She enjoyed the silence and the fresh air.",
    "options": [
      "bustling",
      "vibrant",
      "peaceful",
      "touristy"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The research station is in a _____ area far from any town or road. Supplies arrive by helicopter only once a month.",
    "options": [
      "popular",
      "remote",
      "vibrant",
      "bustling"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The hotel restaurant serves _____ fruits imported from South America and Africa. Many guests have never tasted them before.",
    "options": [
      "historic",
      "scenic",
      "touristy",
      "exotic"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Local residents avoid the old street because it has become too _____. It is now full of souvenir shops and crowds of visitors.",
    "options": [
      "remote",
      "tranquil",
      "touristy",
      "hidden"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The night river cruise is extremely _____ with both visitors and residents. Tickets for weekend trips usually sell out a week in advance.",
    "options": [
      "popular",
      "remote",
      "hidden",
      "tranquil"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The small jazz bar is _____ behind an ordinary bookshelf in a used bookstore. Only regular customers know how to find the entrance.",
    "options": [
      "popular",
      "bustling",
      "scenic",
      "hidden"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The tall clock tower is the town's most famous _____. Visitors often use it to find their way around the old center.",
    "options": [
      "harbor",
      "landmark",
      "village",
      "resort"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Bali remains a favorite _____ for honeymoon couples from Asia. Travel agencies report strong bookings for the coming spring season.",
    "options": [
      "destination",
      "monument",
      "district",
      "gallery"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The new aquarium has become the city's top tourist _____. It welcomed more than one million visitors in its first year.",
    "options": [
      "harbor",
      "heritage",
      "attraction",
      "village"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The luxury ski _____ offers private cabins, a heated pool, and lessons for beginners. It is fully booked every winter.",
    "options": [
      "monument",
      "resort",
      "gallery",
      "district"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Mr. Chen moved to a quiet residential _____ with good schools and parks. His children can now walk safely to class.",
    "options": [
      "harbor",
      "monument",
      "gallery",
      "neighborhood"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Dozens of fishing boats returned to the _____ before the typhoon arrived. The port authority closed it to all traffic until Monday.",
    "options": [
      "gallery",
      "monument",
      "harbor",
      "district"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The developers plan to build restaurants and a walking path along the city's _____. Residents will soon enjoy evening views of the river.",
    "options": [
      "waterfront",
      "monument",
      "heritage",
      "marketplace"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Hikers can rest at the _____ halfway up the trail. From there, they can see the whole valley and the ocean beyond it.",
    "options": [
      "harbor",
      "district",
      "heritage",
      "viewpoint"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "A bronze _____ was built in the square to honor the workers who built the railway. A ceremony is held there every year.",
    "options": [
      "harbor",
      "monument",
      "panorama",
      "district"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The art _____ will display paintings by young local artists throughout this month. Admission is free on Friday evenings.",
    "options": [
      "gallery",
      "harbor",
      "district",
      "panorama"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Farmers sell fresh vegetables and handmade goods at the open-air _____ every Saturday morning. Shoppers are asked to bring their own bags.",
    "options": [
      "monument",
      "heritage",
      "marketplace",
      "viewpoint"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Most banks and law firms have offices in the central business _____. Rents there are the highest in the whole city.",
    "options": [
      "harbor",
      "district",
      "village",
      "monument"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Fewer than two hundred people live in the small mountain _____. Most residents grow tea or work on nearby farms.",
    "options": [
      "gallery",
      "monument",
      "harbor",
      "village"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The ancient temple was listed as a World _____ Site last year. Since then, the number of visitors has doubled.",
    "options": [
      "harbor",
      "panorama",
      "heritage",
      "landmark"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The tiny island has become a diving _____ since its coral reef appeared in a documentary. Dive shops there are now busy all year.",
    "options": [
      "hotspot",
      "harbor",
      "heritage",
      "monument"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "attractive": {
    "pos": "adj.",
    "en_def": "pleasing, or interesting enough to make people want it",
    "cn_def": "有吸引力的"
  },
  "fascinating": {
    "pos": "adj.",
    "en_def": "extremely interesting",
    "cn_def": "迷人的；極有趣的"
  },
  "scenic": {
    "pos": "adj.",
    "en_def": "having beautiful natural views",
    "cn_def": "風景優美的"
  },
  "picturesque": {
    "pos": "adj.",
    "en_def": "very pretty, like a painting",
    "cn_def": "如畫的；景色優美的"
  },
  "historic": {
    "pos": "adj.",
    "en_def": "important in history",
    "cn_def": "有歷史意義的；歷史性的"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "related to the arts, customs and traditions of a group",
    "cn_def": "文化的"
  },
  "vibrant": {
    "pos": "adj.",
    "en_def": "full of energy, color and activity",
    "cn_def": "充滿活力的"
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of activity and cheerful noise",
    "cn_def": "熱鬧的；活潑的"
  },
  "bustling": {
    "pos": "adj.",
    "en_def": "busy and full of people moving around",
    "cn_def": "熙熙攘攘的；繁忙的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "the only one of its kind",
    "cn_def": "獨特的；獨一無二的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual and worth noticing",
    "cn_def": "非凡的；值得注意的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special and easy to remember",
    "cn_def": "難忘的"
  },
  "charming": {
    "pos": "adj.",
    "en_def": "very pleasant and attractive",
    "cn_def": "迷人的；可愛的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平和的"
  },
  "tranquil": {
    "pos": "adj.",
    "en_def": "calm and quiet, without any disturbance",
    "cn_def": "寧靜的；安靜的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from towns and people",
    "cn_def": "偏遠的"
  },
  "exotic": {
    "pos": "adj.",
    "en_def": "unusual and exciting because it comes from a faraway place",
    "cn_def": "異國情調的；外來的"
  },
  "touristy": {
    "pos": "adj.",
    "en_def": "full of tourists and things made for them, often in a bad way",
    "cn_def": "觀光客多的；過度商業化的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "hidden": {
    "pos": "adj.",
    "en_def": "difficult to find or see",
    "cn_def": "隱藏的；隱密的"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "a famous building or place that is easy to recognize",
    "cn_def": "地標"
  },
  "destination": {
    "pos": "n.",
    "en_def": "the place someone is traveling to",
    "cn_def": "目的地"
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a place people visit for interest or fun",
    "cn_def": "景點；吸引人的事物"
  },
  "resort": {
    "pos": "n.",
    "en_def": "a place where people go on holiday, with many services",
    "cn_def": "度假村；度假勝地"
  },
  "neighborhood": {
    "pos": "n.",
    "en_def": "an area of a town where people live",
    "cn_def": "街坊；社區；鄰近地區"
  },
  "harbor": {
    "pos": "n.",
    "en_def": "a sheltered area of water where ships and boats stay",
    "cn_def": "港口；港灣"
  },
  "waterfront": {
    "pos": "n.",
    "en_def": "the part of a town next to a river, lake or sea",
    "cn_def": "濱水區；海濱"
  },
  "viewpoint": {
    "pos": "n.",
    "en_def": "a place from which you can see a beautiful view",
    "cn_def": "觀景點"
  },
  "monument": {
    "pos": "n.",
    "en_def": "a structure built to help people remember a person or event",
    "cn_def": "紀念碑；紀念建築"
  },
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where art is shown",
    "cn_def": "美術館；畫廊"
  },
  "marketplace": {
    "pos": "n.",
    "en_def": "an open area where people buy and sell goods",
    "cn_def": "市集；市場"
  },
  "district": {
    "pos": "n.",
    "en_def": "a particular area of a city or country",
    "cn_def": "區；地區"
  },
  "village": {
    "pos": "n.",
    "en_def": "a very small town in the countryside",
    "cn_def": "村莊"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "the history, traditions and buildings passed down from the past",
    "cn_def": "遺產；文化資產"
  },
  "panorama": {
    "pos": "n.",
    "en_def": "a wide view of a large area",
    "cn_def": "全景"
  },
  "hotspot": {
    "pos": "n.",
    "en_def": "a popular place where many people like to go",
    "cn_def": "熱門地點"
  }
};

const EXTRA_GLOSSES = {};
