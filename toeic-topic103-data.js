// Topic 103 Quiz Data: Dessert 甜點
// Source word list: https://www.examword.com/group-topic/dessert — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T103 - Dessert 甜點",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "store",
    "pos": "v.",
    "cn_def": "存放；儲存",
    "en_def": "to keep something somewhere until you need it",
    "sentence": "A: We have three chocolate cakes left over from the staff party this afternoon, so what should we do with them before we lock the office tonight? B: Let's cut them into small pieces and {{BLANK}} them in the kitchen fridge, and then everyone can enjoy a slice with their coffee tomorrow morning.",
    "cn": "A：今天下午員工派對剩下三個巧克力蛋糕，我們今晚鎖辦公室之前該怎麼處理？ B：我們把它們切成小塊，【存放】在茶水間的冰箱裡，這樣明天早上大家就能配咖啡享用一片。"
  },
  {
    "word": "consumption",
    "pos": "n.",
    "cn_def": "消耗量；攝取量",
    "en_def": "the amount of something that people eat, drink or use",
    "sentence": "A: Why did the café owner decide to offer smaller cups of ice cream and more fresh fruit on the new summer menu? B: She read a report showing that sugar {{BLANK}} among young office workers has risen sharply, so she wants to give her customers healthier choices without losing any of her regular guests.",
    "cn": "A：咖啡店老闆為什麼決定在新的夏季菜單上提供較小杯的冰淇淋和更多新鮮水果？ B：她讀到一份報告，顯示年輕上班族的糖分【攝取量】大幅上升，所以她想給顧客更健康的選擇，同時不流失任何常客。"
  },
  {
    "word": "pastry",
    "pos": "n.",
    "cn_def": "酥皮點心；糕點",
    "en_def": "a baked sweet food made with flour, butter and often fruit",
    "sentence": "A: What should we order for the breakfast meeting with the new clients on Friday, since some of them are coming straight from the airport? B: Let's get hot coffee, orange juice and a large apple {{BLANK}} that we can cut into slices, because the French bakery downstairs makes them light and buttery, and visitors always love them.",
    "cn": "A：週五和新客戶的早餐會議我們該訂什麼？有些人會直接從機場過來。 B：我們訂熱咖啡、柳橙汁，再加一個可以切片的大蘋果【酥皮點心】，因為樓下的法式麵包店做得又輕又有奶油香，訪客總是很喜歡。"
  },
  {
    "word": "avoid",
    "pos": "v.",
    "cn_def": "避免；避開",
    "en_def": "to stay away from something or not do it",
    "sentence": "A: Do you know why Mark never takes any of the cookies or doughnuts that people bring into the office on Friday afternoons? B: His doctor told him to {{BLANK}} sweet snacks for a few months after his last health check, so he brings his own nuts and fruit and drinks plenty of water instead.",
    "cn": "A：你知道為什麼馬克從不拿大家週五下午帶來辦公室的餅乾或甜甜圈嗎？ B：上次健康檢查後，醫生要他幾個月內【避免】吃甜食，所以他改帶自己的堅果和水果，並且多喝水。"
  },
  {
    "word": "conscious",
    "pos": "adj.",
    "cn_def": "意識到的；注意的；在意的",
    "en_def": "knowing about something and paying attention to it",
    "sentence": "A: Why has the bakery near the train station started printing the number of calories next to every cake in the display window? B: Many customers have become more {{BLANK}} of what they eat these days, and the manager noticed that people often asked about sugar and fat, so clear labels help them choose quickly and feel better about buying something sweet.",
    "cn": "A：火車站附近的麵包店為什麼開始在櫥窗裡每個蛋糕旁邊標示熱量？ B：最近很多顧客對自己吃的東西變得更加【在意】，經理注意到大家常詢問糖分和脂肪，所以清楚的標示能幫助他們快速選擇，買甜食時也比較安心。"
  },
  {
    "word": "splurge",
    "pos": "v.",
    "cn_def": "揮霍；花大錢買",
    "en_def": "to spend a lot of money on something special",
    "sentence": "A: You have been bringing a simple sandwich for lunch every day this month, so why did you buy that expensive cake from the hotel café today? B: I finally finished the big sales report that my manager needed, so I decided to {{BLANK}} on a special treat to celebrate before I start the next project.",
    "cn": "A：你這個月每天都帶簡單的三明治當午餐，今天為什麼在飯店咖啡廳買了那個昂貴的蛋糕？ B：我終於完成經理需要的大型業績報告了，所以決定【揮霍】一下買個特別的點心慶祝，然後再開始下一個專案。"
  },
  {
    "word": "weight",
    "pos": "n.",
    "cn_def": "體重；重量",
    "en_def": "how heavy a person or thing is",
    "sentence": "A: How is your new plan to walk to work and skip dessert after dinner going, and do you feel any different after the first month? B: It is going well, because I have already lost some {{BLANK}}, I sleep better at night, and I have more energy during long meetings in the afternoon.",
    "cn": "A：你走路上班、晚餐後不吃甜點的新計畫進行得如何？第一個月後有覺得哪裡不一樣嗎？ B：進行得很順利，因為我已經減了一些【體重】，晚上睡得比較好，下午開長會時也更有精神。"
  },
  {
    "word": "diet",
    "pos": "n.",
    "cn_def": "飲食；節食",
    "en_def": "the food a person eats, or a plan to eat less or eat healthier food",
    "sentence": "A: Why didn't Sarah eat any of the birthday cake at the office party yesterday, even though chocolate is her favorite flavor? B: She is on a strict {{BLANK}} because she is training for a marathon next month, so she only eats lean meat, vegetables and rice until the race is over.",
    "cn": "A：莎拉昨天在辦公室派對上為什麼一口生日蛋糕都沒吃？巧克力明明是她最喜歡的口味。 B：她正在進行嚴格的【飲食控制】，因為她在為下個月的馬拉松訓練，所以比賽結束前她只吃瘦肉、蔬菜和米飯。"
  },
  {
    "word": "random",
    "pos": "adj.",
    "cn_def": "隨機的；任意的",
    "en_def": "chosen by chance, without any plan",
    "sentence": "A: How does the coffee shop decide which customers get a free slice of cheesecake every Friday afternoon? B: The computer at the counter picks a {{BLANK}} receipt number each hour, so any customer who has bought a drink can win, and the staff announce the lucky number loudly to everyone in the shop.",
    "cn": "A：那家咖啡店每週五下午是怎麼決定哪些顧客可以免費獲得一片起司蛋糕的？ B：櫃檯的電腦每小時會挑選一個【隨機的】收據號碼，所以任何買過飲料的顧客都可能中獎，店員會大聲向店裡的每個人宣布幸運號碼。"
  },
  {
    "word": "culprit",
    "pos": "n.",
    "cn_def": "罪魁禍首；元兇",
    "en_def": "the person or thing that causes a problem",
    "sentence": "A: Do you know why so many people in our department have felt tired and sleepy after lunch this week? B: I think the {{BLANK}} is the large box of sugary doughnuts that the sales team leaves in the break room every morning, because everyone eats two or three before noon.",
    "cn": "A：你知道為什麼我們部門這週有那麼多人午餐後覺得又累又想睡嗎？ B：我想【罪魁禍首】是業務團隊每天早上放在休息室的那一大盒含糖甜甜圈，因為大家中午前都會吃兩三個。"
  },
  {
    "word": "obese",
    "pos": "adj.",
    "cn_def": "肥胖的",
    "en_def": "very fat in a way that is unhealthy",
    "sentence": "A: Why is the company offering free gym memberships and healthy cooking classes to all employees starting next month? B: The latest health survey showed that many staff members are overweight and some are even {{BLANK}}, so the managers want to help everyone eat better and exercise more before serious health problems begin.",
    "cn": "A：公司為什麼從下個月開始提供所有員工免費健身房會員和健康烹飪課？ B：最新的健康調查顯示，許多員工體重過重，有些甚至已經【肥胖】，所以主管們想在嚴重的健康問題出現之前，幫助大家吃得更好、多運動。"
  },
  {
    "word": "obesity",
    "pos": "n.",
    "cn_def": "肥胖（症）",
    "en_def": "the state of being very fat in an unhealthy way",
    "sentence": "A: What was the main topic of the speech that the doctor gave at the parents' meeting at the local school yesterday evening? B: She talked about childhood {{BLANK}} and explained that too many sweet drinks and desserts can cause serious health problems, so she asked parents to pack fruit instead of candy in lunch boxes.",
    "cn": "A：昨晚那位醫生在當地學校家長會上的演講主題是什麼？ B：她談到了兒童【肥胖】問題，並解釋太多含糖飲料和甜點會造成嚴重的健康問題，所以她請家長在午餐盒裡放水果而不是糖果。"
  },
  {
    "word": "sweet tooth",
    "pos": "n.phr.",
    "cn_def": "愛吃甜食；嗜甜",
    "en_def": "a strong love of sweet food",
    "sentence": "A: Why does our manager always keep a jar of chocolates on her desk, and why does she visit the bakery across the street every afternoon? B: She has a real {{BLANK}}, so she can't get through a busy day without something sugary, but she always shares her treats with anyone who stops by her office.",
    "cn": "A：為什麼我們經理總是在桌上放一罐巧克力，而且每天下午都去對街的麵包店？ B：她真的很【愛吃甜食】，所以忙碌的一天裡沒有甜的東西就撐不下去，不過她總是會把點心分給來她辦公室的人。"
  },
  {
    "word": "fluffy",
    "pos": "adj.",
    "cn_def": "蓬鬆的；鬆軟的",
    "en_def": "soft and light, full of air",
    "sentence": "A: What makes the pancakes at the new breakfast café near our office so popular with customers, even though they are quite expensive? B: The cooks beat the eggs for a long time and add a little sparkling water, so every pancake comes out soft, light and {{BLANK}}, almost like a cloud on your plate.",
    "cn": "A：我們辦公室附近那家新早餐店的鬆餅為什麼那麼受顧客歡迎，雖然價格相當貴？ B：廚師會把蛋打很久，再加一點氣泡水，所以每一片鬆餅都又軟又輕又【蓬鬆】，盤子裡的鬆餅幾乎像一朵雲。"
  },
  {
    "word": "fundamental",
    "pos": "adj.",
    "cn_def": "基本的；根本的",
    "en_def": "basic and most important",
    "sentence": "A: What did the head baker teach the new kitchen staff on their first morning, before they started making any cakes for customers? B: She explained the {{BLANK}} rules of baking, such as measuring every ingredient carefully and keeping the kitchen clean, because even small mistakes can ruin a whole batch of desserts.",
    "cn": "A：新的廚房員工在第一天早上、開始為顧客做蛋糕之前，烘焙主廚教了他們什麼？ B：她講解了烘焙的【基本】規則，例如仔細測量每一種食材以及保持廚房乾淨，因為即使是小錯誤也可能毀掉整批甜點。"
  },
  {
    "word": "approach",
    "pos": "n.",
    "cn_def": "方法；處理方式",
    "en_def": "a way of dealing with something",
    "sentence": "A: How is the new café manager trying to sell more desserts without making customers feel that they are eating too much sugar? B: She is trying a fresh {{BLANK}}, offering smaller portions at lower prices and adding fruit to every plate, and so far both sales and customer reviews have improved.",
    "cn": "A：新的咖啡廳經理要怎麼在不讓顧客覺得吃太多糖的情況下賣出更多甜點？ B：她正在嘗試一種新的【方法】，以較低的價格供應較小的份量，並在每盤加上水果，到目前為止，銷售量和顧客評價都提升了。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的；職業的",
    "en_def": "doing a job that needs special training; done with skill",
    "sentence": "A: Should we bake the cake for the company's tenth anniversary party ourselves, or should we order one from a shop? B: I think we should hire a {{BLANK}} baker, because more than two hundred guests are coming, and the cake needs to look perfect in the photos for our website and the local newspaper.",
    "cn": "A：公司十週年派對的蛋糕我們要自己烤，還是向店家訂？ B：我認為我們應該請一位【專業的】烘焙師，因為會有兩百多位賓客來參加，而且蛋糕在我們網站和地方報紙的照片中必須看起來完美無缺。"
  },
  {
    "word": "preheat",
    "pos": "v.",
    "cn_def": "預熱",
    "en_def": "to heat an oven before you put food in it",
    "sentence": "A: I followed the recipe exactly, so why did my chocolate cake come out of the oven flat and heavy instead of tall and soft? B: You probably forgot to {{BLANK}} the oven before you put the cake in, because the batter needs high heat from the very first minute to rise properly.",
    "cn": "A：我完全照食譜做，為什麼我的巧克力蛋糕出爐時又扁又硬，而不是又高又鬆軟？ B：你可能忘了在放蛋糕進去之前先【預熱】烤箱，因為麵糊從第一分鐘起就需要高溫才能好好膨脹。"
  },
  {
    "word": "grease",
    "pos": "v.",
    "cn_def": "塗油；抹油",
    "en_def": "to put butter or oil on something",
    "sentence": "A: Why do the cakes at our café sometimes break into pieces when the kitchen staff take them out of the pans in the morning? B: Some of the new workers forget to {{BLANK}} the pans with butter before they pour in the batter, so the cakes stick to the metal and tear when they are removed.",
    "cn": "A：為什麼我們咖啡廳的蛋糕早上有時候在廚房員工脫模時會碎掉？ B：有些新員工在倒入麵糊之前忘了用奶油在烤模上【抹油】，所以蛋糕會黏在金屬上，取出時就裂開了。"
  },
  {
    "word": "pastry chef",
    "pos": "n.phr.",
    "cn_def": "甜點師傅；糕點主廚",
    "en_def": "a cook whose job is making cakes and desserts",
    "sentence": "A: Who designed the amazing chocolate sculpture that was standing in the hotel lobby during the international conference last weekend? B: The hotel's {{BLANK}} spent three days making it by hand, and many guests took photos with it, so the marketing team has asked her to create another one for the holiday season.",
    "cn": "A：上週末國際會議期間擺在飯店大廳那座很棒的巧克力雕塑是誰設計的？ B：飯店的【甜點師傅】花了三天親手製作，許多賓客都和它合照，所以行銷團隊已經請她在節慶期間再做一座。"
  },
  {
    "word": "tedious",
    "pos": "adj.",
    "cn_def": "單調乏味的；冗長的",
    "en_def": "boring because it takes a long time and does not change",
    "sentence": "A: You look really tired this afternoon, so what have you been doing in the bakery kitchen since early this morning? B: I have been decorating four hundred small cookies with colored icing for a wedding, and the work is so {{BLANK}} that my hands and eyes feel sore after doing the same pattern again and again.",
    "cn": "A：你今天下午看起來很累，從一大早開始你在麵包店廚房裡做了什麼？ B：我一直在為一場婚禮用彩色糖霜裝飾四百塊小餅乾，這工作非常【單調乏味】，同樣的圖案重複做了一次又一次，我的手和眼睛都痠了。"
  },
  {
    "word": "reliant",
    "pos": "adj.",
    "cn_def": "依賴的；依靠的",
    "en_def": "needing someone or something in order to work or succeed",
    "sentence": "A: Why did the bakery have to close early yesterday, even though there were still many customers waiting in line outside? B: The shop is completely {{BLANK}} on one supplier for flour and butter, and when that delivery truck broke down, the bakers simply had nothing left to make bread or cakes with.",
    "cn": "A：為什麼那家麵包店昨天必須提早打烊，雖然外面還有很多顧客在排隊？ B：這家店的麵粉和奶油完全【依賴】一家供應商，當那輛送貨卡車拋錨時，麵包師傅就再也沒有材料可以做麵包或蛋糕了。"
  },
  {
    "word": "constant",
    "pos": "adj.",
    "cn_def": "恆定的；持續不斷的",
    "en_def": "staying the same; happening all the time",
    "sentence": "A: Why did the café owner decide to buy a new freezer for the ice cream, even though the old one still works? B: The old freezer couldn't keep a {{BLANK}} temperature, so the ice cream sometimes melted and froze again, and customers complained that it tasted icy and hard.",
    "cn": "A：為什麼咖啡店老闆決定為冰淇淋買一台新的冷凍櫃，雖然舊的還能用？ B：舊冷凍櫃無法維持【恆定的】溫度，所以冰淇淋有時會融化後再結凍，顧客抱怨吃起來有冰渣又很硬。"
  },
  {
    "word": "indulge",
    "pos": "v.",
    "cn_def": "縱情享受；放縱一下",
    "en_def": "to let yourself enjoy something special, such as rich food",
    "sentence": "A: Are you going to try the famous chocolate lava cake at the restaurant tonight, or are you still trying to eat healthily? B: I usually choose fruit for dessert, but since we are celebrating the end of this busy project, I think I will {{BLANK}} just this once and enjoy every bite.",
    "cn": "A：你今晚要試試那家餐廳有名的巧克力熔岩蛋糕嗎？還是你還在努力吃得健康？ B：我通常選水果當甜點，不過既然我們在慶祝這個忙碌的專案結束，我想就這一次【放縱一下】，好好享受每一口。"
  },
  {
    "word": "picky",
    "pos": "adj.",
    "cn_def": "挑剔的；挑食的",
    "en_def": "liking only a few things and hard to please",
    "sentence": "A: What kind of cake should we order for Mr. Lee's retirement party, since he has worked here for over thirty years? B: We should ask his secretary first, because he is very {{BLANK}} about food and only likes plain vanilla cake without cream, nuts or any kind of fruit on top.",
    "cn": "A：李先生在這裡工作超過三十年了，他的退休派對我們該訂哪種蛋糕？ B：我們應該先問他的秘書，因為他對食物非常【挑剔】，只喜歡不加鮮奶油、堅果或任何水果的原味香草蛋糕。"
  }
];

const MCQS = [
  {
    "q": "Please _____ the leftover cream in the refrigerator after the event. It will go bad quickly if it stays on the counter.",
    "options": [
      "store",
      "avoid",
      "grease",
      "splurge"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The café tracked coffee and cake sales for six months. Weekend _____ was nearly double the weekday amount.",
    "options": [
      "culprit",
      "approach",
      "consumption",
      "pastry"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The hotel serves a warm cherry _____ with every breakfast order. Guests often ask the waiter for the recipe.",
    "options": [
      "obesity",
      "pastry",
      "weight",
      "culprit"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Drivers should _____ Main Street this morning because of the food festival. Several roads near the park are closed until noon.",
    "options": [
      "grease",
      "preheat",
      "indulge",
      "avoid"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our customers are very _____ of price. Most of them compare our cake prices with the supermarket before they buy.",
    "options": [
      "fluffy",
      "tedious",
      "conscious",
      "random"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many shoppers _____ on luxury chocolates during the holiday season. Stores usually order extra stock in early December.",
    "options": [
      "splurge",
      "preheat",
      "store",
      "avoid"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Each box of cookies must be checked on the scale before shipping. The _____ printed on the label has to be accurate.",
    "options": [
      "diet",
      "approach",
      "consumption",
      "weight"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The company cafeteria now offers meals for people on a low-sugar _____. These dishes are marked with a green leaf.",
    "options": [
      "pastry",
      "diet",
      "culprit",
      "sweet tooth"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Inspectors made a _____ check of the bakery last Tuesday. They did not tell the owner before they arrived.",
    "options": [
      "picky",
      "obese",
      "reliant",
      "random"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The kitchen smelled of smoke all morning. The _____ turned out to be an old toaster that needed cleaning.",
    "options": [
      "obesity",
      "culprit",
      "diet",
      "consumption"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The study followed two thousand adults for ten years. People who drank sugary sodas daily were more likely to become _____.",
    "options": [
      "obese",
      "professional",
      "constant",
      "fundamental"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The government has launched a campaign against childhood _____. Schools will remove sweet drinks from their vending machines next year.",
    "options": [
      "pastry chef",
      "approach",
      "obesity",
      "culprit"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Our new advertising campaign targets customers with a _____. It mainly promotes our chocolate cakes and caramel drinks.",
    "options": [
      "weight",
      "sweet tooth",
      "approach",
      "culprit"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The new bread recipe uses extra yeast. As a result, every loaf comes out soft, light and _____.",
    "options": [
      "picky",
      "reliant",
      "conscious",
      "fluffy"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Clear communication is _____ to running a busy kitchen. Without it, orders get mixed up and customers wait too long.",
    "options": [
      "obese",
      "fluffy",
      "fundamental",
      "picky"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The new manager has a friendly _____ to customer complaints. She listens carefully and always offers a free dessert.",
    "options": [
      "approach",
      "weight",
      "obesity",
      "pastry"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The company hired a _____ photographer for the new menu. The pictures make every dish look fresh and attractive.",
    "options": [
      "tedious",
      "obese",
      "professional",
      "fluffy"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Staff should _____ the ovens at six every morning. That way, the first loaves are ready when the shop opens.",
    "options": [
      "avoid",
      "preheat",
      "splurge",
      "indulge"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Mechanics _____ the moving parts of the delivery van every month. This simple step keeps the engine running smoothly.",
    "options": [
      "preheat",
      "splurge",
      "indulge",
      "grease"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The restaurant is looking for an experienced _____. The successful applicant will create new cakes and tarts each season.",
    "options": [
      "pastry chef",
      "culprit",
      "consumption",
      "obesity"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Entering every receipt into the system by hand is _____. The new scanner will save the accounting team many hours.",
    "options": [
      "fluffy",
      "tedious",
      "obese",
      "picky"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Small cafés are often _____ on local customers. When a nearby office closes, their sales can drop sharply.",
    "options": [
      "reliant",
      "random",
      "fluffy",
      "tedious"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The chocolate must be kept at a _____ temperature during delivery. Even small changes can spoil its smooth texture.",
    "options": [
      "picky",
      "obese",
      "constant",
      "conscious"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "On Friday afternoons, the staff _____ in cake and coffee together. It is a pleasant way to end a busy week.",
    "options": [
      "grease",
      "store",
      "preheat",
      "indulge"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Young children are often _____ eaters. Our kids' menu offers simple dishes such as plain pasta and fruit cups.",
    "options": [
      "picky",
      "tedious",
      "professional",
      "fundamental"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "To _____ long lines at lunch, many employees order online. Their meals are ready for pickup at a set time.",
    "options": [
      "splurge",
      "grease",
      "preheat",
      "avoid"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Doctors say a balanced _____ includes fruit, vegetables and whole grains. Desserts should be enjoyed only once in a while.",
    "options": [
      "culprit",
      "diet",
      "pastry chef",
      "consumption"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Please wear _____ clothing to the client dinner tonight. Jeans and T-shirts are not suitable for this restaurant.",
    "options": [
      "fluffy",
      "obese",
      "professional",
      "picky"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Customers can _____ their reward points in the app. The points can later be used for free drinks and desserts.",
    "options": [
      "indulge",
      "avoid",
      "preheat",
      "store"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The bakery has a _____ flow of customers on weekends. Extra staff are hired every Saturday and Sunday.",
    "options": [
      "constant",
      "obese",
      "picky",
      "fluffy"
    ],
    "answer": 0,
    "vocabIndex": 22
  }
];

const LOOKUP = {
  "store": {
    "pos": "v.",
    "en_def": "to keep something somewhere until you need it",
    "cn_def": "存放；儲存"
  },
  "consumption": {
    "pos": "n.",
    "en_def": "the amount of something that people eat, drink or use",
    "cn_def": "消耗量；攝取量"
  },
  "pastry": {
    "pos": "n.",
    "en_def": "a baked sweet food made with flour, butter and often fruit",
    "cn_def": "酥皮點心；糕點"
  },
  "avoid": {
    "pos": "v.",
    "en_def": "to stay away from something or not do it",
    "cn_def": "避免；避開"
  },
  "conscious": {
    "pos": "adj.",
    "en_def": "knowing about something and paying attention to it",
    "cn_def": "意識到的；注意的；在意的"
  },
  "splurge": {
    "pos": "v.",
    "en_def": "to spend a lot of money on something special",
    "cn_def": "揮霍；花大錢買"
  },
  "weight": {
    "pos": "n.",
    "en_def": "how heavy a person or thing is",
    "cn_def": "體重；重量"
  },
  "diet": {
    "pos": "n.",
    "en_def": "the food a person eats, or a plan to eat less or eat healthier food",
    "cn_def": "飲食；節食"
  },
  "random": {
    "pos": "adj.",
    "en_def": "chosen by chance, without any plan",
    "cn_def": "隨機的；任意的"
  },
  "culprit": {
    "pos": "n.",
    "en_def": "the person or thing that causes a problem",
    "cn_def": "罪魁禍首；元兇"
  },
  "obese": {
    "pos": "adj.",
    "en_def": "very fat in a way that is unhealthy",
    "cn_def": "肥胖的"
  },
  "obesity": {
    "pos": "n.",
    "en_def": "the state of being very fat in an unhealthy way",
    "cn_def": "肥胖（症）"
  },
  "sweet tooth": {
    "pos": "n.phr.",
    "en_def": "a strong love of sweet food",
    "cn_def": "愛吃甜食；嗜甜"
  },
  "fluffy": {
    "pos": "adj.",
    "en_def": "soft and light, full of air",
    "cn_def": "蓬鬆的；鬆軟的"
  },
  "fundamental": {
    "pos": "adj.",
    "en_def": "basic and most important",
    "cn_def": "基本的；根本的"
  },
  "approach": {
    "pos": "n.",
    "en_def": "a way of dealing with something",
    "cn_def": "方法；處理方式"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "doing a job that needs special training; done with skill",
    "cn_def": "專業的；職業的"
  },
  "preheat": {
    "pos": "v.",
    "en_def": "to heat an oven before you put food in it",
    "cn_def": "預熱"
  },
  "grease": {
    "pos": "v.",
    "en_def": "to put butter or oil on something",
    "cn_def": "塗油；抹油"
  },
  "pastry chef": {
    "pos": "n.phr.",
    "en_def": "a cook whose job is making cakes and desserts",
    "cn_def": "甜點師傅；糕點主廚"
  },
  "tedious": {
    "pos": "adj.",
    "en_def": "boring because it takes a long time and does not change",
    "cn_def": "單調乏味的；冗長的"
  },
  "reliant": {
    "pos": "adj.",
    "en_def": "needing someone or something in order to work or succeed",
    "cn_def": "依賴的；依靠的"
  },
  "constant": {
    "pos": "adj.",
    "en_def": "staying the same; happening all the time",
    "cn_def": "恆定的；持續不斷的"
  },
  "indulge": {
    "pos": "v.",
    "en_def": "to let yourself enjoy something special, such as rich food",
    "cn_def": "縱情享受；放縱一下"
  },
  "picky": {
    "pos": "adj.",
    "en_def": "liking only a few things and hard to please",
    "cn_def": "挑剔的；挑食的"
  }
};

const EXTRA_GLOSSES = {};
