// Topic 141 Quiz Data: Fish 魚
// Source word list: https://www.examword.com/group-topic/fish — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T141 - Fish 魚",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的；不可或缺的",
    "en_def": "very important and necessary",
    "sentence": "A: Why does the new seafood restaurant downtown send its kitchen staff to a two-day training course before they start working with the fresh fish? B: Knowing how to clean and cut fish safely is {{BLANK}} for the job, so the owner wants every new cook to learn the right skills before the restaurant opens next month.",
    "cn": "A：為什麼市中心那家新的海鮮餐廳要讓廚房員工在開始處理新鮮魚貨前，先去上兩天的訓練課程？ B：懂得如何安全地清理和切魚是這份工作【不可或缺的】，所以老闆希望每位新廚師在下個月餐廳開幕前學會正確的技巧。"
  },
  {
    "word": "lauded",
    "pos": "adj.",
    "cn_def": "備受讚揚的；廣受好評的",
    "en_def": "highly praised by many people",
    "sentence": "A: Why is it so hard to get a table at the little fish restaurant near the harbor, even on a rainy Tuesday night in the middle of winter? B: Its head chef is widely {{BLANK}} for his grilled salmon, and since a famous food magazine wrote about him last month, people have been booking tables weeks in advance.",
    "cn": "A：為什麼港口附近那家小魚料理餐廳這麼難訂到位子，連冬天下雨的星期二晚上都一樣？ B：它的主廚以烤鮭魚廣受【讚揚】，而且自從上個月一本知名美食雜誌報導他之後，大家都提前好幾週訂位。"
  },
  {
    "word": "nutrient",
    "pos": "n.",
    "cn_def": "營養素；養分",
    "en_def": "a substance in food that helps living things grow and stay healthy",
    "sentence": "A: Why did the company nurse put a poster about eating more fish next to the coffee machine in the staff kitchen last week? B: She says fish contains an important {{BLANK}} called omega-3 that helps the heart and brain, and many of our office workers eat too much fast food during busy weeks.",
    "cn": "A：為什麼公司護理師上週在員工茶水間的咖啡機旁邊貼了一張多吃魚的海報？ B：她說魚含有一種叫做 Omega-3 的重要【營養素】，有助於心臟和大腦，而我們很多上班族在忙碌的時候都吃太多速食了。"
  },
  {
    "word": "protein",
    "pos": "n.",
    "cn_def": "蛋白質",
    "en_def": "a substance in food such as meat, fish and eggs that helps your body grow and repair itself",
    "sentence": "A: Why did the fitness center near our office start selling grilled tuna salads at the front desk instead of the sweet snacks it used to offer? B: Many members asked for healthier meals after their workouts, and fish is a great source of {{BLANK}} that helps their muscles recover without adding much fat.",
    "cn": "A：為什麼我們辦公室附近的健身中心開始在櫃檯賣烤鮪魚沙拉，而不是以前賣的甜食？ B：很多會員要求在運動後吃更健康的餐點，而魚是很好的【蛋白質】來源，能幫助肌肉恢復，又不會增加太多脂肪。"
  },
  {
    "word": "mineral",
    "pos": "n.",
    "cn_def": "礦物質",
    "en_def": "a natural substance such as iron or calcium that the body needs",
    "sentence": "A: Why does the dietitian at the hospital cafeteria recommend the small fried fish that are served with their bones still in them? B: When you eat the soft bones, you get calcium, which is a {{BLANK}} that keeps your bones and teeth strong, so it is especially good for older patients.",
    "cn": "A：為什麼醫院餐廳的營養師推薦那種連骨頭一起上桌的炸小魚？ B：吃下柔軟的魚骨時，你會攝取到鈣，那是一種能讓骨骼和牙齒保持強壯的【礦物質】，所以對年長的病人特別好。"
  },
  {
    "word": "component",
    "pos": "n.",
    "cn_def": "組成部分；成分",
    "en_def": "one of the parts that something is made of",
    "sentence": "A: Why has the frozen food company asked the factory to stop production of its new fish burger until the end of the month? B: The laboratory found that one {{BLANK}} of the sauce, a type of imported oil, did not meet the safety standard, so they need to find another supplier first.",
    "cn": "A：為什麼冷凍食品公司要求工廠在月底之前暫停生產新的魚堡？ B：實驗室發現醬料的其中一種【成分】，也就是一種進口油，不符合安全標準，所以他們必須先找到另一家供應商。"
  },
  {
    "word": "situate",
    "pos": "v.",
    "cn_def": "使位於；把……設置在",
    "en_def": "to build or put something in a particular place",
    "sentence": "A: Where is the restaurant group planning to open its new seafood restaurant, and why did the managers spend so long looking at different locations? B: They decided to {{BLANK}} it right next to the fishing port, so the chefs can buy fish directly from the boats every morning and customers can enjoy a view of the sea.",
    "cn": "A：餐飲集團打算在哪裡開新的海鮮餐廳？為什麼經理們花了那麼久時間看不同的地點？ B：他們決定把它【設在】漁港旁邊，這樣廚師每天早上就能直接向漁船買魚，顧客也能欣賞海景。"
  },
  {
    "word": "tiny",
    "pos": "adj.",
    "cn_def": "極小的；微小的",
    "en_def": "very small",
    "sentence": "A: Did you enjoy the cooking class at the community center last Saturday, or was it too difficult for beginners like us? B: It was fun, but removing the {{BLANK}} bones from the fish took me almost twenty minutes, because they were so thin that I could hardly see them without my glasses.",
    "cn": "A：你喜歡上週六在社區中心上的烹飪課嗎？還是對我們這種初學者來說太難了？ B：很好玩，但把魚身上那些【細小的】刺挑出來花了我將近二十分鐘，因為它們細到我不戴眼鏡幾乎看不見。"
  },
  {
    "word": "plenty of",
    "pos": "phr.",
    "cn_def": "很多的；充足的",
    "en_def": "a lot of; more than enough",
    "sentence": "A: Should we order more food for the department's year-end party, or do you think the seafood buffet will be enough for forty people? B: I think we'll be fine, because the hotel will prepare {{BLANK}} grilled fish, shrimp and vegetables, and they can bring out extra dishes quickly if we start running low.",
    "cn": "A：我們應該為部門的尾牙多訂一些食物嗎？還是你覺得海鮮自助餐夠四十個人吃？ B：我想應該沒問題，因為飯店會準備【大量的】烤魚、蝦子和蔬菜，而且如果快不夠了，他們也能很快端出更多菜。"
  },
  {
    "word": "in spite of",
    "pos": "prep.",
    "cn_def": "儘管；不顧",
    "en_def": "without being stopped by something; although something happened",
    "sentence": "A: Did the fishing boat tour that our company booked for the overseas clients still go ahead on Sunday morning? B: Yes, {{BLANK}} the strong wind and light rain, the captain said the sea was safe enough, and our clients enjoyed catching their own fish and taking photos of the coast.",
    "cn": "A：我們公司幫海外客戶預訂的釣魚船之旅，星期天早上還有照常出發嗎？ B：有，【儘管】風很大又下著小雨，船長說海況夠安全，客戶們都很享受自己釣魚和拍攝海岸的照片。"
  },
  {
    "word": "hectic",
    "pos": "adj.",
    "cn_def": "忙亂的；繁忙的",
    "en_def": "very busy and full of activity",
    "sentence": "A: How was your first week working at the fish market, and are you getting used to starting work so early in the morning? B: It has been really {{BLANK}}, because restaurant owners arrive at four o'clock and everyone wants the freshest fish at the same time, but I'm learning to work faster.",
    "cn": "A：你在魚市場工作的第一週怎麼樣？習慣那麼早開始上班了嗎？ B：真的很【忙亂】，因為餐廳老闆們四點就到了，每個人都想同時買到最新鮮的魚，不過我正在學著加快速度。"
  },
  {
    "word": "enjoyable",
    "pos": "adj.",
    "cn_def": "愉快的；令人愉悅的",
    "en_def": "pleasant and fun",
    "sentence": "A: How did the team-building day at the lake go, and did the new employees from the Tokyo office join in the activities? B: It was very {{BLANK}}, because everyone tried fishing for the first time, and later we cooked what we caught together, so people from both offices got to know each other well.",
    "cn": "A：在湖邊舉辦的團隊建立日進行得如何？東京辦公室來的新員工有參加活動嗎？ B：非常【愉快】，因為大家都第一次嘗試釣魚，之後我們一起把釣到的魚煮來吃，所以兩個辦公室的人都彼此熟悉了。"
  },
  {
    "word": "vegan",
    "pos": "adj.",
    "cn_def": "純素的",
    "en_def": "not using or eating any food that comes from animals",
    "sentence": "A: What should we serve at the lunch meeting with our new partners, since the restaurant we chose is famous mostly for its fish dishes? B: Let's ask the chef to prepare a few {{BLANK}} dishes as well, because two of the partners don't eat meat, fish, eggs or milk, and we want everyone to feel welcome.",
    "cn": "A：我們和新合作夥伴的午餐會議要點什麼？我們選的那家餐廳主要以魚料理出名。 B：我們也請主廚準備幾道【純素】料理吧，因為有兩位合作夥伴不吃肉、魚、蛋或奶製品，我們希望每個人都覺得受到歡迎。"
  },
  {
    "word": "find time",
    "pos": "v.phr.",
    "cn_def": "抽出時間",
    "en_def": "to make time for something although you are busy",
    "sentence": "A: You have been working late every night this month, so how do you still manage to go fishing with your father on weekends? B: I always try to {{BLANK}} for it, even during busy seasons, because sitting by the river with him helps me relax and forget about my work for a few hours.",
    "cn": "A：你這個月每天晚上都加班，那你週末怎麼還能陪你爸爸去釣魚？ B：即使在忙碌的旺季，我也總是盡量【抽出時間】去，因為和他一起坐在河邊能幫助我放鬆，暫時忘掉工作幾個小時。"
  },
  {
    "word": "cup of tea",
    "pos": "n.phr.",
    "cn_def": "喜歡的事物；（某人的）菜",
    "en_def": "(not my cup of tea) something you like or enjoy",
    "sentence": "A: Are you coming on the deep-sea fishing trip that the sales department has planned for next Saturday, or do you have other plans? B: Actually, spending eight hours on a small boat isn't really my {{BLANK}}, because I get seasick easily, so I'll join everyone for the seafood dinner afterwards instead.",
    "cn": "A：你會參加業務部安排在下週六的深海釣魚之旅嗎？還是你有其他計畫？ B：其實在小船上待八個小時真的不是我【喜歡的事】，因為我很容易暈船，所以我會改成之後跟大家一起去吃海鮮晚餐。"
  },
  {
    "word": "delectably",
    "pos": "adv.",
    "cn_def": "美味地；可口地",
    "en_def": "in a very tasty or delicious way",
    "sentence": "A: Why did the food critic give the new seafood restaurant on Harbor Street five stars in this morning's newspaper? B: She wrote that the chef's sea bass was {{BLANK}} tender and juicy, and that the service was friendly, so she recommended it to anyone looking for a special dinner with clients or family.",
    "cn": "A：為什麼那位美食評論家在今天早上的報紙上給港口街那家新海鮮餐廳五顆星？ B：她寫說主廚的鱸魚軟嫩多汁、【美味可口】，服務也很親切，所以推薦給任何想和客戶或家人吃一頓特別晚餐的人。"
  },
  {
    "word": "inexplicable",
    "pos": "adj.",
    "cn_def": "無法解釋的；費解的",
    "en_def": "impossible to explain or understand",
    "sentence": "A: Why did the aquarium close its large fish tank to visitors for the whole weekend, right in the middle of the school holiday? B: Several fish became sick for some {{BLANK}} reason, and the staff couldn't find the cause, so they called in an expert to test the water and check every animal carefully.",
    "cn": "A：為什麼水族館在學校放假期間，整個週末都不讓遊客參觀大型魚缸？ B：有幾條魚因為某種【無法解釋的】原因生病了，工作人員找不到原因，所以請了一位專家來檢測水質並仔細檢查每隻動物。"
  },
  {
    "word": "bay",
    "pos": "n.",
    "cn_def": "海灣",
    "en_def": "a part of the sea that is partly surrounded by land",
    "sentence": "A: Where are we taking the visitors from the Singapore office for dinner on Friday evening after the factory tour? B: I've booked a table at a restaurant beside the {{BLANK}}, where the water is calm and the boats come in at sunset, so they can enjoy fresh seafood and a beautiful view.",
    "cn": "A：星期五傍晚參觀完工廠後，我們要帶新加坡辦公室的訪客去哪裡吃晚餐？ B：我在【海灣】旁邊的一家餐廳訂了位，那裡水面平靜，夕陽時分漁船會進港，所以他們可以享用新鮮海鮮和美麗的景色。"
  },
  {
    "word": "suitable",
    "pos": "adj.",
    "cn_def": "適合的；適當的",
    "en_def": "right or good for a particular person, purpose or situation",
    "sentence": "A: Why did the event planner reject the riverside park as the place for our company's family fishing day in May? B: She said it wasn't {{BLANK}} for young children, because the river bank is steep and slippery, so she found a quiet lake with a wooden platform and safety fences instead.",
    "cn": "A：為什麼活動企劃人員否決了把河濱公園當作我們公司五月家庭釣魚日的場地？ B：她說那裡不【適合】小孩子，因為河岸又陡又滑，所以她改找了一個有木製平台和安全圍欄的安靜湖泊。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕；緩解",
    "en_def": "to make pain, stress or a problem less bad",
    "sentence": "A: Why do you keep a small fish tank on your desk when the office is already so crowded with files and computers? B: Watching the fish swim slowly helps to {{BLANK}} my stress during long, busy afternoons, and several colleagues say it calms them down too when they stop by to chat.",
    "cn": "A：辦公室已經堆滿了文件和電腦，為什麼你還在桌上放一個小魚缸？ B：在漫長忙碌的下午看著魚慢慢游，可以幫助【減輕】我的壓力，而且好幾位同事順道過來聊天時也說這讓他們平靜下來。"
  },
  {
    "word": "netting",
    "pos": "n.",
    "cn_def": "網子；網狀物",
    "en_def": "material made of strings or wires tied together with spaces between them",
    "sentence": "A: Why did the fish farm by the coast have to close for three days last week, and did it lose a lot of money? B: A storm tore the {{BLANK}} around the fish pens, so hundreds of fish escaped into the sea, and the workers needed time to repair everything before they could restart operations.",
    "cn": "A：為什麼海邊那座養魚場上週必須關閉三天？他們損失很多錢嗎？ B：一場暴風雨扯破了魚欄周圍的【網子】，數百條魚逃到海裡，工人們需要時間把一切修好才能恢復營運。"
  },
  {
    "word": "hatch",
    "pos": "v.",
    "cn_def": "孵化",
    "en_def": "(of a baby animal) to come out of an egg",
    "sentence": "A: Why are the scientists at the river research center working such long hours this month, even on weekends and public holidays? B: They are waiting for thousands of salmon eggs to {{BLANK}}, and they must check the water temperature every few hours so that the baby fish survive and can be released into the river.",
    "cn": "A：為什麼河川研究中心的科學家這個月工作時間這麼長，連週末和國定假日都在上班？ B：他們正在等待數千顆鮭魚卵【孵化】，而且必須每隔幾小時檢查一次水溫，這樣小魚才能存活並被放流到河裡。"
  },
  {
    "word": "angling",
    "pos": "n.",
    "cn_def": "垂釣；釣魚",
    "en_def": "the sport or activity of catching fish with a rod and line",
    "sentence": "A: Why is the small hotel by the lake suddenly so popular with business travelers, even though it is far from the city? B: It offers {{BLANK}} lessons on the lake every evening, so guests can relax with a fishing rod after their meetings, and the hotel kitchen will even cook whatever they catch.",
    "cn": "A：湖邊那家小旅館雖然離市區很遠，為什麼突然在商務旅客之間這麼受歡迎？ B：它每天傍晚在湖上提供【垂釣】課程，所以客人開完會後可以拿著釣竿放鬆一下，飯店廚房甚至會把他們釣到的魚煮來吃。"
  },
  {
    "word": "angler",
    "pos": "n.",
    "cn_def": "釣客；垂釣者",
    "en_def": "a person who catches fish as a hobby",
    "sentence": "A: Why did the city council put new signs and rubbish bins along the river path near our office building last month? B: The river has become very popular, and on weekends you can see an {{BLANK}} at almost every corner of the path from early morning, but some of them left plastic bags and old fishing lines behind.",
    "cn": "A：為什麼市議會上個月在我們辦公大樓附近的河濱步道設置了新的告示牌和垃圾桶？ B：這條河變得很熱門，週末從一大早開始，步道幾乎每個角落都能看到【釣客】，但有些人留下了塑膠袋和舊釣線。"
  },
  {
    "word": "fanatic",
    "pos": "n.",
    "cn_def": "狂熱者；迷",
    "en_def": "a person who is extremely interested in an activity",
    "sentence": "A: Why does Mr. Lin from the accounting department always take his vacation in early October, even when the office is busy? B: He is a real fishing {{BLANK}}, and October is the best month to catch tuna off the east coast, so he plans his whole year around that trip and never misses it.",
    "cn": "A：為什麼會計部的林先生總是在十月初休假，即使辦公室很忙也一樣？ B：他是個不折不扣的釣魚【狂熱者】，而十月是在東海岸外海釣鮪魚最好的月份，所以他整年都圍繞著那趟旅程做計畫，從來不錯過。"
  },
  {
    "word": "thrill",
    "pos": "n.",
    "cn_def": "興奮；刺激；快感",
    "en_def": "a strong feeling of excitement and pleasure",
    "sentence": "A: Why do so many of our customers book the early-morning sea fishing tour, even though it starts at five o'clock and costs quite a lot? B: They love the {{BLANK}} of feeling a big fish pull hard on the line, and many of them say it is the most exciting part of their whole holiday.",
    "cn": "A：為什麼我們有這麼多顧客預訂清晨的海釣行程，即使它五點就開始而且價格不便宜？ B：他們喜歡感覺到大魚用力拉扯釣線時的那種【刺激感】，很多人說那是整個假期中最令人興奮的部分。"
  },
  {
    "word": "pastime",
    "pos": "n.",
    "cn_def": "消遣；休閒活動",
    "en_def": "something you do for fun in your free time",
    "sentence": "A: What did the retired sales director say he would do with all his free time when he left the company last month? B: He said fishing has always been his favorite {{BLANK}}, so he bought a small boat and plans to spend his mornings on the lake and his afternoons with his grandchildren.",
    "cn": "A：上個月離開公司的退休業務總監說他要怎麼運用所有的空閒時間？ B：他說釣魚一直是他最喜歡的【消遣】，所以他買了一艘小船，打算早上待在湖上，下午陪孫子孫女。"
  },
  {
    "word": "impatient",
    "pos": "adj.",
    "cn_def": "不耐煩的；沒耐心的",
    "en_def": "not willing to wait calmly",
    "sentence": "A: Why did the customers at table six complain to the manager before their main course had even arrived last night? B: They became {{BLANK}} after waiting almost an hour for their grilled fish, because the kitchen was short of staff, so the manager apologized and gave them free dessert.",
    "cn": "A：為什麼昨晚六號桌的客人在主菜還沒上之前就向經理抱怨？ B：他們等烤魚等了將近一個小時，變得很【不耐煩】，因為廚房人手不足，所以經理道了歉並招待他們免費甜點。"
  },
  {
    "word": "bucket list",
    "pos": "n.phr.",
    "cn_def": "人生願望清單",
    "en_def": "a list of things you want to do before you die",
    "sentence": "A: Why did your manager take two weeks off to go to Alaska, when she usually only takes short holidays near home? B: Catching a wild salmon in Alaska has been on her {{BLANK}} for years, and she finally saved enough money and vacation days to make the dream come true this summer.",
    "cn": "A：為什麼你的經理請兩週假去阿拉斯加？她通常只在家附近短暫度假。 B：在阿拉斯加釣到一條野生鮭魚多年來一直在她的【人生願望清單】上，她終於存夠了錢和假期，今年夏天要實現這個夢想。"
  },
  {
    "word": "crucial",
    "pos": "adj.",
    "cn_def": "至關重要的",
    "en_def": "extremely important",
    "sentence": "A: Why does the seafood company check the temperature of its delivery trucks so often during the hot summer months? B: Keeping the fish cold from the port to the supermarket is {{BLANK}}, because even a short time in the heat can make it unsafe to eat and damage the company's good reputation.",
    "cn": "A：為什麼海鮮公司在炎熱的夏季月份那麼頻繁地檢查送貨卡車的溫度？ B：從港口到超市一路讓魚保持低溫是【至關重要的】，因為即使只在高溫下放一小段時間，也可能讓魚變得不安全，並損害公司的好名聲。"
  },
  {
    "word": "optimal",
    "pos": "adj.",
    "cn_def": "最佳的；最理想的",
    "en_def": "the best or most suitable",
    "sentence": "A: Why does the fish farm manager check the water in the tanks three times a day, even on Sundays and holidays? B: The fish grow fastest when the water is at the {{BLANK}} temperature of about twenty degrees, so he adjusts the heaters carefully to keep conditions perfect all year round.",
    "cn": "A：為什麼養魚場經理一天檢查三次魚池的水，連星期天和假日也不例外？ B：魚在水溫約二十度這個【最佳】溫度下長得最快，所以他會小心調整加熱器，讓環境全年都保持完美。"
  },
  {
    "word": "texture",
    "pos": "n.",
    "cn_def": "口感；質地",
    "en_def": "the way food or a surface feels when you eat or touch it",
    "sentence": "A: Why did the chef change the cooking method for the cod on the new lunch menu after the staff tasting last Friday? B: Several staff members said the fish was dry and hard, so he now steams it gently to give it a softer {{BLANK}} that melts in your mouth.",
    "cn": "A：為什麼主廚在上週五員工試吃後，改變了新午餐菜單上鱈魚的烹調方式？ B：有幾位員工說魚又乾又硬，所以他現在用小火慢蒸，讓它有入口即化、更柔軟的【口感】。"
  },
  {
    "word": "fussy",
    "pos": "adj.",
    "cn_def": "挑剔的；難取悅的",
    "en_def": "difficult to please, especially about food",
    "sentence": "A: Why did you choose a simple grilled fish restaurant for the dinner with our Japanese clients instead of the fancy French one downtown? B: Their director is quite {{BLANK}} about food and only eats fresh, plainly cooked dishes, so I thought a place famous for simple seafood would make him happy.",
    "cn": "A：為什麼你為了和日本客戶的晚餐選了一家簡單的烤魚餐廳，而不是市中心那家高級法式餐廳？ B：他們的總監對食物相當【挑剔】，只吃新鮮、簡單烹調的料理，所以我想一家以簡單海鮮出名的餐廳會讓他開心。"
  },
  {
    "word": "elusive",
    "pos": "adj.",
    "cn_def": "難以捉摸的；難找到的",
    "en_def": "difficult to find, catch or achieve",
    "sentence": "A: Why did the TV crew stay at the remote fishing village for almost a month to film the new nature documentary? B: They were trying to film a rare, {{BLANK}} fish that only comes near the surface a few times a year, so they had to wait patiently until the conditions were right.",
    "cn": "A：為什麼電視團隊在偏遠的漁村待了將近一個月拍攝新的自然紀錄片？ B：他們想拍一種稀有又【難以捉摸的】魚，牠一年只會浮到水面附近幾次，所以他們必須耐心等到條件合適。"
  },
  {
    "word": "stalk",
    "pos": "v.",
    "cn_def": "悄悄跟蹤；潛近（獵物）",
    "en_def": "to follow an animal quietly in order to catch it",
    "sentence": "A: What was the most interesting part of the nature documentary that the marketing team watched during the lunch break yesterday? B: It showed a large bird that can {{BLANK}} fish in shallow water for several minutes, moving so slowly and quietly that the fish never notice it until it is too late.",
    "cn": "A：行銷團隊昨天午休時看的自然紀錄片，最有趣的部分是什麼？ B：它介紹了一種大型鳥類，能在淺水中【悄悄跟蹤】魚好幾分鐘，動作又慢又安靜，魚直到為時已晚才察覺牠。"
  },
  {
    "word": "marvelous",
    "pos": "adj.",
    "cn_def": "極好的；令人驚嘆的",
    "en_def": "extremely good; wonderful",
    "sentence": "A: How was the welcome dinner that the hotel prepared for the conference speakers on the first evening of the event? B: It was {{BLANK}}, because the chef served fresh lobster, grilled fish and local vegetables, and all the speakers said it was the best meal they had eaten during their trip.",
    "cn": "A：飯店在活動第一天晚上為會議講者準備的歡迎晚宴怎麼樣？ B：非常【棒】，因為主廚上了新鮮龍蝦、烤魚和在地蔬菜，所有講者都說那是他們這趟旅程中吃過最好的一餐。"
  },
  {
    "word": "dismay",
    "pos": "n.",
    "cn_def": "沮喪；驚愕；失望",
    "en_def": "a feeling of worry, disappointment and shock",
    "sentence": "A: Why did the restaurant owner look so upset when she came back from the fish market early this morning? B: To her {{BLANK}}, the price of fresh tuna had almost doubled because of the storm last week, so she now has to decide whether to raise menu prices or remove some dishes.",
    "cn": "A：為什麼餐廳老闆今天一大早從魚市場回來時看起來那麼難過？ B：令她【沮喪】的是，因為上週的暴風雨，新鮮鮪魚的價格幾乎漲了一倍，所以她現在必須決定要調漲菜單價格還是撤掉一些菜色。"
  }
];

const MCQS = [
  {
    "q": "Please bring your ID card to the training center tomorrow. It is _____ for entering the building, and no one can get in without it.",
    "options": [
      "elusive",
      "essential",
      "fussy",
      "tiny"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Vitamin C is a _____ that helps the body fight colds. You can find it in oranges and many other fruits.",
    "options": [
      "bay",
      "angler",
      "thrill",
      "nutrient"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The company decided to _____ its new warehouse close to the airport. This will make international deliveries much faster.",
    "options": [
      "situate",
      "relieve",
      "hatch",
      "stalk"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The museum's new exhibition has been _____ by critics around the world. Tickets for next month are already sold out.",
    "options": [
      "hectic",
      "impatient",
      "lauded",
      "vegan"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Athletes often eat eggs and chicken after training. These foods are high in _____, which helps build strong muscles.",
    "options": [
      "bay",
      "protein",
      "pastime",
      "dismay"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The new phone is so _____ that it fits easily into a shirt pocket. Many customers like how light it is.",
    "options": [
      "tiny",
      "lauded",
      "hectic",
      "crucial"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Iron is a _____ that our blood needs to carry oxygen. People who lack it often feel tired and weak.",
    "options": [
      "angler",
      "texture",
      "mineral",
      "thrill"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Monday was a _____ day at the post office. Hundreds of customers came in to send packages before the holiday.",
    "options": [
      "optimal",
      "vegan",
      "inexplicable",
      "hectic"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "This cream can _____ the pain from small burns and insect bites. Apply it two or three times a day.",
    "options": [
      "stalk",
      "situate",
      "relieve",
      "hatch"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The factory makes every _____ of the bicycle, from the wheels to the brakes. Then workers put all the parts together.",
    "options": [
      "bay",
      "component",
      "dismay",
      "pastime"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Thank you for the wonderful trip to the hot springs. Our whole team found it very _____ and relaxing.",
    "options": [
      "enjoyable",
      "fussy",
      "elusive",
      "impatient"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The cruise ship stopped in a quiet _____ surrounded by green hills. Passengers swam in the calm water for an hour.",
    "options": [
      "fanatic",
      "thrill",
      "nutrient",
      "bay"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The café now offers a _____ sandwich made only with vegetables and beans. It contains no meat, eggs, or cheese.",
    "options": [
      "impatient",
      "lauded",
      "vegan",
      "hectic"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The lake is popular for _____, especially in early spring. Visitors must buy a permit before they put a line in the water.",
    "options": [
      "dismay",
      "angling",
      "angler",
      "component"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The printer stopped working for no reason this morning. The technician said the problem was _____ and ordered a new one.",
    "options": [
      "inexplicable",
      "marvelous",
      "enjoyable",
      "vegan"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The children watched closely as the chicken eggs began to _____. Soon several small yellow chicks appeared in the box.",
    "options": [
      "stalk",
      "situate",
      "relieve",
      "hatch"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "An experienced _____ caught a huge trout in the river yesterday. Local reporters took photos of him holding the fish.",
    "options": [
      "angling",
      "mineral",
      "angler",
      "texture"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "This small meeting room is not _____ for a training session with forty people. Please book the large hall instead.",
    "options": [
      "lauded",
      "elusive",
      "impatient",
      "suitable"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "My brother is a football _____ who never misses a match. He even flew to Europe last year to watch his favorite team.",
    "options": [
      "bay",
      "fanatic",
      "texture",
      "nutrient"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The passengers grew _____ after the train was delayed for over an hour. Some of them started shouting at the station staff.",
    "options": [
      "impatient",
      "optimal",
      "tiny",
      "essential"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Riding the new roller coaster gave the children a real _____. They wanted to go on it again and again.",
    "options": [
      "mineral",
      "component",
      "thrill",
      "bay"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Good communication is _____ to the success of any project. Without it, team members may misunderstand their tasks and miss deadlines.",
    "options": [
      "vegan",
      "fussy",
      "tiny",
      "crucial"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "In the video, a cat tries to _____ a bird slowly across the garden. The bird flies away just before the cat jumps.",
    "options": [
      "stalk",
      "relieve",
      "situate",
      "hatch"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Gardening is a relaxing _____ for many retired people. It keeps them active and gives them fresh vegetables.",
    "options": [
      "protein",
      "pastime",
      "angler",
      "bay"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The engineers tested many settings to find the _____ speed for the machine. At that speed, it uses the least energy.",
    "options": [
      "impatient",
      "fussy",
      "vegan",
      "optimal"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Customers loved the soft, creamy _____ of the new ice cream. The company plans to sell it in more stores next year.",
    "options": [
      "texture",
      "angler",
      "fanatic",
      "bay"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Our new client is very _____ about details. She asked us to change the font on the report three times.",
    "options": [
      "inexplicable",
      "fussy",
      "optimal",
      "crucial"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Much to our _____, the concert was canceled an hour before it started. The organizers promised to return all ticket money.",
    "options": [
      "component",
      "bay",
      "dismay",
      "protein"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "Finding a cheap apartment near the city center has proved _____ for many young workers. Most of them live in the suburbs.",
    "options": [
      "lauded",
      "enjoyable",
      "vegan",
      "elusive"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The hotel room had a _____ view of the mountains. Guests often take photos from the balcony at sunrise.",
    "options": [
      "marvelous",
      "impatient",
      "fussy",
      "hectic"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "essential": {
    "pos": "adj.",
    "en_def": "very important and necessary",
    "cn_def": "必要的；不可或缺的"
  },
  "lauded": {
    "pos": "adj.",
    "en_def": "highly praised by many people",
    "cn_def": "備受讚揚的；廣受好評的"
  },
  "nutrient": {
    "pos": "n.",
    "en_def": "a substance in food that helps living things grow and stay healthy",
    "cn_def": "營養素；養分"
  },
  "protein": {
    "pos": "n.",
    "en_def": "a substance in food such as meat, fish and eggs that helps your body grow and repair itself",
    "cn_def": "蛋白質"
  },
  "mineral": {
    "pos": "n.",
    "en_def": "a natural substance such as iron or calcium that the body needs",
    "cn_def": "礦物質"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts that something is made of",
    "cn_def": "組成部分；成分"
  },
  "situate": {
    "pos": "v.",
    "en_def": "to build or put something in a particular place",
    "cn_def": "使位於；把……設置在"
  },
  "tiny": {
    "pos": "adj.",
    "en_def": "very small",
    "cn_def": "極小的；微小的"
  },
  "plenty of": {
    "pos": "phr.",
    "en_def": "a lot of; more than enough",
    "cn_def": "很多的；充足的"
  },
  "in spite of": {
    "pos": "prep.",
    "en_def": "without being stopped by something; although something happened",
    "cn_def": "儘管；不顧"
  },
  "hectic": {
    "pos": "adj.",
    "en_def": "very busy and full of activity",
    "cn_def": "忙亂的；繁忙的"
  },
  "enjoyable": {
    "pos": "adj.",
    "en_def": "pleasant and fun",
    "cn_def": "愉快的；令人愉悅的"
  },
  "vegan": {
    "pos": "adj.",
    "en_def": "not using or eating any food that comes from animals",
    "cn_def": "純素的"
  },
  "find time": {
    "pos": "v.phr.",
    "en_def": "to make time for something although you are busy",
    "cn_def": "抽出時間"
  },
  "cup of tea": {
    "pos": "n.phr.",
    "en_def": "(not my cup of tea) something you like or enjoy",
    "cn_def": "喜歡的事物；（某人的）菜"
  },
  "delectably": {
    "pos": "adv.",
    "en_def": "in a very tasty or delicious way",
    "cn_def": "美味地；可口地"
  },
  "inexplicable": {
    "pos": "adj.",
    "en_def": "impossible to explain or understand",
    "cn_def": "無法解釋的；費解的"
  },
  "bay": {
    "pos": "n.",
    "en_def": "a part of the sea that is partly surrounded by land",
    "cn_def": "海灣"
  },
  "suitable": {
    "pos": "adj.",
    "en_def": "right or good for a particular person, purpose or situation",
    "cn_def": "適合的；適當的"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to make pain, stress or a problem less bad",
    "cn_def": "減輕；緩解"
  },
  "netting": {
    "pos": "n.",
    "en_def": "material made of strings or wires tied together with spaces between them",
    "cn_def": "網子；網狀物"
  },
  "hatch": {
    "pos": "v.",
    "en_def": "(of a baby animal) to come out of an egg",
    "cn_def": "孵化"
  },
  "angling": {
    "pos": "n.",
    "en_def": "the sport or activity of catching fish with a rod and line",
    "cn_def": "垂釣；釣魚"
  },
  "angler": {
    "pos": "n.",
    "en_def": "a person who catches fish as a hobby",
    "cn_def": "釣客；垂釣者"
  },
  "fanatic": {
    "pos": "n.",
    "en_def": "a person who is extremely interested in an activity",
    "cn_def": "狂熱者；迷"
  },
  "thrill": {
    "pos": "n.",
    "en_def": "a strong feeling of excitement and pleasure",
    "cn_def": "興奮；刺激；快感"
  },
  "pastime": {
    "pos": "n.",
    "en_def": "something you do for fun in your free time",
    "cn_def": "消遣；休閒活動"
  },
  "impatient": {
    "pos": "adj.",
    "en_def": "not willing to wait calmly",
    "cn_def": "不耐煩的；沒耐心的"
  },
  "bucket list": {
    "pos": "n.phr.",
    "en_def": "a list of things you want to do before you die",
    "cn_def": "人生願望清單"
  },
  "crucial": {
    "pos": "adj.",
    "en_def": "extremely important",
    "cn_def": "至關重要的"
  },
  "optimal": {
    "pos": "adj.",
    "en_def": "the best or most suitable",
    "cn_def": "最佳的；最理想的"
  },
  "texture": {
    "pos": "n.",
    "en_def": "the way food or a surface feels when you eat or touch it",
    "cn_def": "口感；質地"
  },
  "fussy": {
    "pos": "adj.",
    "en_def": "difficult to please, especially about food",
    "cn_def": "挑剔的；難取悅的"
  },
  "elusive": {
    "pos": "adj.",
    "en_def": "difficult to find, catch or achieve",
    "cn_def": "難以捉摸的；難找到的"
  },
  "stalk": {
    "pos": "v.",
    "en_def": "to follow an animal quietly in order to catch it",
    "cn_def": "悄悄跟蹤；潛近（獵物）"
  },
  "marvelous": {
    "pos": "adj.",
    "en_def": "extremely good; wonderful",
    "cn_def": "極好的；令人驚嘆的"
  },
  "dismay": {
    "pos": "n.",
    "en_def": "a feeling of worry, disappointment and shock",
    "cn_def": "沮喪；驚愕；失望"
  }
};

const EXTRA_GLOSSES = {};
