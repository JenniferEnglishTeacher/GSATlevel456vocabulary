// Topic 140 Quiz Data: Festival 節慶
// Source word list: https://www.examword.com/group-topic/festival — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T140 - Festival 節慶",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "celebration",
    "pos": "n.",
    "cn_def": "慶祝；慶祝活動",
    "en_def": "a special event or party held because something good has happened",
    "sentence": "A: Why is the office kitchen full of balloons and boxes of cake this afternoon, and why did the manager ask everyone to stop work at four? B: The company won its biggest contract of the year last week, so the boss is holding a small {{BLANK}} for the whole sales team before the long weekend begins.",
    "cn": "A：為什麼辦公室的茶水間今天下午擺滿了氣球和一盒盒蛋糕，而且經理為什麼要大家四點停止工作？ B：公司上週贏得了今年最大的一份合約，所以老闆要在長週末開始前為整個業務團隊舉辦一場小型【慶祝會】。"
  },
  {
    "word": "parade",
    "pos": "n.",
    "cn_def": "遊行",
    "en_def": "a public event in which people walk or ride through the streets to celebrate something",
    "sentence": "A: Why are the buses taking a different route through the city center this Saturday morning, and will the shops on Main Street still be open? B: The city is holding a big {{BLANK}} with marching bands and decorated trucks along Main Street from nine to noon, so the road will be closed, but most shops will open as usual.",
    "cn": "A：為什麼這週六早上公車要改道穿過市中心，而且主街上的商店還會營業嗎？ B：市政府從九點到中午要在主街上舉辦一場盛大的【遊行】，有樂隊和裝飾過的卡車，所以道路會封閉，不過大部分商店還是會照常營業。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal event held to mark an important occasion",
    "sentence": "A: Will the new factory start production on Monday, or do we still need to wait for the final safety check from the government inspectors? B: Production starts on Monday, but first there will be a short opening {{BLANK}} at eight o'clock, where the mayor will cut a red ribbon and the CEO will thank all the workers.",
    "cn": "A：新工廠星期一會開始生產嗎？還是我們仍然要等政府檢查員做最後的安全檢查？ B：星期一會開始生產，不過八點會先舉行一場簡短的開幕【典禮】，市長會剪綵，執行長也會感謝所有員工。"
  },
  {
    "word": "carnival",
    "pos": "n.",
    "cn_def": "嘉年華會；狂歡節",
    "en_def": "a large public festival with music, dancing and parades in the streets",
    "sentence": "A: Why did the hotel ask us to book our rooms for the sales trip to Brazil so early, even though the meeting isn't until late February? B: That week the whole city holds a famous {{BLANK}} with street parties, music and huge numbers of visitors, so hotel rooms get very expensive and sell out months before.",
    "cn": "A：為什麼飯店要我們這麼早就預訂巴西業務出差的房間，明明會議要到二月底才舉行？ B：那一週整座城市會舉辦著名的【嘉年華會】，有街頭派對、音樂和大批遊客，所以飯店房間會變得非常貴，而且好幾個月前就會被訂光。"
  },
  {
    "word": "fair",
    "pos": "n.",
    "cn_def": "展覽會；市集；園遊會",
    "en_def": "a large event where companies show and sell their products, or an outdoor event with games and food",
    "sentence": "A: Where did you find so many new suppliers for our gift shop this year, and how did you manage to meet them all in only two days? B: I went to the big trade {{BLANK}} at the convention center last month, where hundreds of companies showed their products, so I could compare prices and talk to everyone in one place.",
    "cn": "A：你今年是在哪裡為我們的禮品店找到這麼多新供應商的？你又是怎麼在短短兩天內見到他們所有人的？ B：我上個月去了會展中心的大型貿易【展覽會】，那裡有數百家公司展示他們的產品，所以我能在同一個地方比較價格並和每個人洽談。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統；慣例",
    "en_def": "a custom or belief that has been passed down for a long time",
    "sentence": "A: Why does everyone in the office bring a small gift to the meeting room on the last Friday before the New Year holiday? B: It's a {{BLANK}} that started when the company first opened twenty years ago, so each person draws a name from a box and gives a present to that coworker to say thank you.",
    "cn": "A：為什麼辦公室裡每個人在新年假期前的最後一個星期五都會帶一份小禮物到會議室？ B：這是公司二十年前剛成立時就開始的【傳統】，所以每個人會從箱子裡抽一個名字，然後送禮物給那位同事表示感謝。"
  },
  {
    "word": "cultural",
    "pos": "adj.",
    "cn_def": "文化的",
    "en_def": "related to the customs, art and ideas of a group of people",
    "sentence": "A: What kind of activities have you planned for the visiting managers from our Japan office during their free afternoon next week? B: Since they're interested in local history, I've booked a {{BLANK}} tour of the old temple district, where a guide will explain the customs, art and festivals of the area in simple English.",
    "cn": "A：下週日本分公司的經理們來訪時，你為他們的空閒下午安排了哪些活動？ B：因為他們對當地歷史很感興趣，我預訂了老廟區的【文化】導覽，導遊會用簡單的英文解說這個地區的習俗、藝術和節慶。"
  },
  {
    "word": "religious",
    "pos": "adj.",
    "cn_def": "宗教的；虔誠的",
    "en_def": "connected with religion or faith",
    "sentence": "A: Why is the restaurant near our office closed for three days this week, even though it is usually open every day of the year? B: The owner and his family are taking part in an important {{BLANK}} festival at their temple, so they will pray, prepare special food and welcome guests until Thursday evening.",
    "cn": "A：為什麼我們辦公室附近的餐廳這週要休息三天，明明它平常一年到頭每天都營業？ B：老闆和他的家人要在他們的廟裡參加一場重要的【宗教】節慶，所以他們會祈禱、準備特別的食物並招待客人，直到星期四晚上。"
  },
  {
    "word": "holiday",
    "pos": "n.",
    "cn_def": "假日；節日",
    "en_def": "a day when most people do not work, often to celebrate something",
    "sentence": "A: Is the warehouse open next Monday, or should I tell our customers that their orders will arrive later than usual? B: Next Monday is a national {{BLANK}}, so the warehouse will be closed and no trucks will run, which means you should tell customers that their packages will arrive on Tuesday or Wednesday instead.",
    "cn": "A：倉庫下週一有開嗎？還是我應該告訴客戶他們的訂單會比平常晚到？ B：下週一是國定【假日】，所以倉庫會關閉，也沒有卡車出車，這表示你應該告訴客戶他們的包裹會改在星期二或星期三送達。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會；集會",
    "en_def": "a meeting of people for a social or special reason",
    "sentence": "A: Why did you reserve the large room at the back of the restaurant for Friday night, and how many people are you expecting to come? B: It's a small {{BLANK}} for our department to welcome the three new engineers, so about twenty people will come for dinner, and the restaurant has agreed to give us a group discount.",
    "cn": "A：你為什麼預訂了餐廳後面的大包廂在星期五晚上使用？你預計會有多少人來？ B：這是我們部門為了歡迎三位新工程師而辦的小型【聚會】，所以大約會有二十個人來吃晚餐，而餐廳也同意給我們團體折扣。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群；群眾",
    "en_def": "a large number of people in one place",
    "sentence": "A: Why are you leaving the office so early to go to the night market festival when it doesn't start until seven o'clock? B: Last year a huge {{BLANK}} filled the streets by six thirty, and we couldn't even get near the best snack shops, so this time I want to arrive early and find a good spot.",
    "cn": "A：夜市節慶七點才開始，你為什麼這麼早就要離開辦公室過去？ B：去年六點半街上就擠滿了一大群【人潮】，我們連最好的小吃店都靠近不了，所以這次我想早點到，找個好位置。"
  },
  {
    "word": "fireworks",
    "pos": "n.",
    "cn_def": "煙火",
    "en_def": "small objects that explode in the sky with bright colors and loud noises",
    "sentence": "A: Why did the hotel manager say that rooms facing the river cost more on New Year's Eve than on any other night of the year? B: At midnight the city sets off amazing {{BLANK}} over the river for fifteen minutes, so guests in those rooms can watch the bright lights from their windows without standing in the cold.",
    "cn": "A：為什麼飯店經理說面向河邊的房間在跨年夜比一年中任何一晚都貴？ B：午夜時分市政府會在河的上空施放十五分鐘壯觀的【煙火】，所以住在那些房間的客人可以從窗戶欣賞燦爛的光芒，不必站在寒冷的戶外。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds made by voices or instruments in a way that is pleasant to hear",
    "sentence": "A: What do you think made the company picnic so much more fun this year than the one we had last spring? B: The planning team hired a local band to play live {{BLANK}} all afternoon, so people sang and danced together, and even the shy new staff members joined in and started talking to everyone.",
    "cn": "A：你覺得今年公司野餐比去年春天那次有趣這麼多的原因是什麼？ B：籌備小組請了一個當地樂團整個下午現場演奏【音樂】，所以大家一起唱歌跳舞，就連害羞的新同事也加入了，並開始和每個人聊天。"
  },
  {
    "word": "dance",
    "pos": "n.",
    "cn_def": "舞蹈；跳舞",
    "en_def": "a set of movements done to music",
    "sentence": "A: Why have the young workers in the marketing team been staying in the meeting room after work every evening this month? B: They are practicing a short {{BLANK}} for the company's year-end party, and they want to surprise the managers with their moves, so they meet for an hour each night to rehearse.",
    "cn": "A：為什麼行銷團隊的年輕員工這個月每天晚上下班後都留在會議室裡？ B：他們正在為公司尾牙練習一段簡短的【舞蹈】，想用他們的舞步給主管們一個驚喜，所以他們每晚聚在一起排練一個小時。"
  },
  {
    "word": "costume",
    "pos": "n.",
    "cn_def": "（表演或節慶的）服裝；戲服",
    "en_def": "special clothes worn to look like someone or something else, often at a festival or show",
    "sentence": "A: Why is Jenny wearing a long red dress and a gold crown at the reception desk this morning instead of her normal uniform? B: The shopping mall is holding a special event for children today, so all the staff were asked to wear a {{BLANK}} from a famous story to make the young visitors smile.",
    "cn": "A：為什麼珍妮今天早上在接待櫃台穿著紅色長裙、戴著金色皇冠，而不是她平常的制服？ B：購物中心今天為孩子們舉辦一場特別活動，所以所有員工都被要求穿上著名故事中的【服裝】，讓小朋友們開心。"
  },
  {
    "word": "float",
    "pos": "n.",
    "cn_def": "（遊行的）花車",
    "en_def": "a large decorated vehicle that moves slowly in a parade",
    "sentence": "A: Why did our company spend so much money on flowers, lights and a large wooden boat this month? B: We are building a {{BLANK}} for the city's spring parade, and it will be pulled by a truck along the main road, so thousands of people will see our company's name and logo on it.",
    "cn": "A：為什麼我們公司這個月花了這麼多錢在花卉、燈飾和一艘大型木船上？ B：我們正在為市政府的春季遊行製作一輛【花車】，它會由卡車拉著沿主要道路前進，所以會有成千上萬的人看到上面我們公司的名稱和標誌。"
  },
  {
    "word": "food stall",
    "pos": "n.",
    "cn_def": "小吃攤；食物攤位",
    "en_def": "a small table or shop where food is sold, usually outdoors",
    "sentence": "A: How are you going to sell our new rice crackers to more people before they appear in supermarkets next spring? B: I've rented a small {{BLANK}} at the weekend night festival near the train station, so thousands of visitors can taste the crackers for free, and we can collect their opinions at the same time.",
    "cn": "A：在明年春天我們的新米餅上架超市之前，你打算怎麼把它賣給更多人？ B：我在火車站附近的週末夜間節慶租了一個小型【小吃攤】，讓成千上萬的遊客可以免費試吃米餅，同時我們也能收集他們的意見。"
  },
  {
    "word": "vendor",
    "pos": "n.",
    "cn_def": "小販；攤販；賣方",
    "en_def": "a person who sells things, often in the street",
    "sentence": "A: Who sold you those delicious grilled corn and sweet potatoes that you shared with the team after the festival last night? B: A friendly street {{BLANK}} was cooking them beside the temple gate, and since he only charged fifty dollars each, I bought enough for everyone who stayed late to finish the report.",
    "cn": "A：昨晚節慶結束後你和團隊分享的那些美味烤玉米和地瓜是跟誰買的？ B：一位親切的街頭【小販】在廟門旁邊烤，而且因為每個只賣五十元，我就買了足夠的份量給每個留下來加班完成報告的人。"
  },
  {
    "word": "feast",
    "pos": "n.",
    "cn_def": "盛宴；宴席",
    "en_def": "a large special meal for many people",
    "sentence": "A: Why did the hotel kitchen order so much fish, pork, chicken and fruit for tomorrow night's event in the main hall? B: The owner is holding a big {{BLANK}} for two hundred guests to celebrate the hotel's fiftieth birthday, so the chefs will cook twelve dishes and serve them on long tables.",
    "cn": "A：為什麼飯店廚房為明晚在大廳的活動訂了這麼多魚、豬肉、雞肉和水果？ B：老闆要為兩百位賓客舉辦一場盛大的【宴席】來慶祝飯店五十週年，所以廚師們會煮十二道菜，擺在長桌上供應。"
  },
  {
    "word": "lantern",
    "pos": "n.",
    "cn_def": "燈籠；提燈",
    "en_def": "a light inside a container made of paper, glass or metal",
    "sentence": "A: Why is the hotel lobby full of round paper lights in red and yellow, and will they stay up until the end of the month? B: No, they will come down on Sunday night, because they are only for the festival this week, and each guest can write a wish on a paper {{BLANK}} and hang it near the front desk.",
    "cn": "A：為什麼飯店大廳掛滿了紅色和黃色的圓形紙燈，而且會一直掛到月底嗎？ B：不會，它們星期天晚上就會拆下來，因為只是為了這週的節慶，每位客人都可以在紙【燈籠】上寫下願望，然後掛在櫃台附近。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；佈置",
    "en_def": "to make something look more attractive by adding things to it",
    "sentence": "A: What should the new staff do on Friday afternoon to get the office ready for the holiday party with our biggest clients? B: Please ask them to {{BLANK}} the reception area and the meeting room with flowers, small lights and colored ribbons, so everything looks bright and welcoming when the guests arrive at six.",
    "cn": "A：新進員工星期五下午應該做些什麼，讓辦公室為和大客戶的節日派對做好準備？ B：請他們用花、小燈和彩色緞帶【裝飾】接待區和會議室，讓客人六點到達時，一切看起來都明亮又溫馨。"
  },
  {
    "word": "exhibit",
    "pos": "v.",
    "cn_def": "展出；展示",
    "en_def": "to show something to the public, for example in a museum or show",
    "sentence": "A: Why is the local art museum so busy this week, and why are so many tour buses parked outside the front gate? B: For the city's arts festival, the museum will {{BLANK}} more than one hundred paintings by young local artists until Sunday, so schools and travel agencies are bringing large groups to see them.",
    "cn": "A：為什麼當地美術館這週這麼忙，而且為什麼有這麼多遊覽車停在大門外？ B：為了配合城市藝術節，美術館到星期天為止會【展出】一百多幅當地年輕藝術家的畫作，所以學校和旅行社都帶大批團體來參觀。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表演；演出",
    "en_def": "the act of singing, dancing, playing music or acting in front of people",
    "sentence": "A: Did you enjoy the opening night of the music festival, or was it too busy to see the stage from your seats? B: We had great seats near the front, and the singers gave a wonderful {{BLANK}} that lasted almost two hours, so everyone in our group stood up and clapped at the end.",
    "cn": "A：你喜歡音樂節的開幕夜嗎？還是人太多，從你們的座位看不到舞台？ B：我們的座位很好，靠近前面，歌手們帶來了一場將近兩小時的精彩【演出】，所以結束時我們團裡的每個人都站起來鼓掌。"
  },
  {
    "word": "outdoor",
    "pos": "adj.",
    "cn_def": "戶外的；露天的",
    "en_def": "happening or used outside, not in a building",
    "sentence": "A: Where are we having the company's summer festival this year, and should I bring an umbrella in case it rains? B: We're having it in the big park by the river because it's an {{BLANK}} event with games and food, so you should bring an umbrella and some sunscreen, just in case the weather changes.",
    "cn": "A：今年公司的夏日慶典在哪裡舉辦？我要不要帶把傘以防下雨？ B：我們會在河邊的大公園舉辦，因為這是有遊戲和食物的【戶外】活動，所以你應該帶把傘和一些防曬乳，以防天氣變化。"
  },
  {
    "word": "annual",
    "pos": "adj.",
    "cn_def": "一年一度的；每年的",
    "en_def": "happening once every year",
    "sentence": "A: Why is the hotel fully booked for the second weekend of October, even though it is not a holiday period? B: The town holds its {{BLANK}} wine festival that weekend, and it has become very famous over the past thirty years, so visitors from all over the country book rooms several months in advance.",
    "cn": "A：為什麼飯店十月的第二個週末全部客滿，明明那不是假期？ B：小鎮那個週末會舉辦【一年一度的】葡萄酒節，而且過去三十年來這個節慶變得非常有名，所以全國各地的遊客都會提前好幾個月訂房。"
  },
  {
    "word": "seasonal",
    "pos": "adj.",
    "cn_def": "季節性的；季節的",
    "en_def": "happening or needed only during a particular time of year",
    "sentence": "A: Why is the café near the station hiring five extra workers this month when it usually has only three staff members? B: The town's winter festival brings thousands of tourists every December, so the owner needs some {{BLANK}} workers to help serve hot drinks and snacks until the busy period ends in January.",
    "cn": "A：為什麼車站附近的咖啡廳這個月要多雇五名員工，明明平常只有三名員工？ B：小鎮的冬季節慶每年十二月都會吸引數千名遊客，所以老闆需要一些【季節性】員工幫忙供應熱飲和點心，直到一月忙碌期結束。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "熱鬧的；活潑的",
    "en_def": "full of energy, activity and excitement",
    "sentence": "A: How was the street festival in the old part of town last Saturday night, and would you recommend it to our visiting clients? B: Yes, it was very {{BLANK}}, with bands playing on every corner, children laughing and people chatting at busy tables, so our clients would really enjoy the friendly and exciting atmosphere.",
    "cn": "A：上週六晚上老城區的街頭節慶怎麼樣？你會推薦給來訪的客戶嗎？ B：會，那裡非常【熱鬧】，每個街角都有樂團演奏，孩子們笑著，人們在擠滿人的桌邊聊天，所以我們的客戶一定會很喜歡那種友善又令人興奮的氣氛。"
  },
  {
    "word": "colorful",
    "pos": "adj.",
    "cn_def": "色彩繽紛的；豐富多彩的",
    "en_def": "having many bright colors",
    "sentence": "A: Why did the designer choose bright red, yellow and blue for the new poster, when our company usually uses only gray and white? B: The poster is for the spring festival, and she wanted a happy, {{BLANK}} design that people would notice from far away, so the event would attract more families and young visitors.",
    "cn": "A：為什麼設計師在新海報上選用鮮紅、黃和藍色，明明我們公司平常只用灰色和白色？ B：這張海報是為了春季節慶，她想要一個快樂又【色彩繽紛】的設計，讓人從遠處就能注意到，好讓活動吸引更多家庭和年輕遊客。"
  },
  {
    "word": "joyful",
    "pos": "adj.",
    "cn_def": "歡欣的；令人高興的",
    "en_def": "very happy, or making people feel very happy",
    "sentence": "A: How did the staff feel when the manager announced that everyone would get an extra week of holiday after the busy festival season? B: The whole office became very {{BLANK}}, and people started clapping, laughing and hugging each other, because they had worked long hours for months and really needed a rest.",
    "cn": "A：經理宣布忙碌的節慶旺季過後每個人都能多放一週假時，員工們感覺如何？ B：整個辦公室變得非常【歡欣】，大家開始鼓掌、大笑並互相擁抱，因為他們好幾個月都工作很長時間，真的很需要休息。"
  },
  {
    "word": "commemorate",
    "pos": "v.",
    "cn_def": "紀念；慶祝",
    "en_def": "to do something special to remember an important person or event",
    "sentence": "A: Why is the bank putting up a large stone sign in front of its main office downtown next month? B: The bank wants to {{BLANK}} its one hundredth year in business, so the sign will show the date it first opened, and there will also be a short speech and a free concert for customers.",
    "cn": "A：為什麼銀行下個月要在市中心總行前面立一塊大石碑？ B：銀行想要【紀念】營業一百週年，所以石碑上會刻上它首次開業的日期，而且還會有簡短的致詞和為顧客舉辦的免費音樂會。"
  },
  {
    "word": "ritual",
    "pos": "n.",
    "cn_def": "儀式；例行公事",
    "en_def": "a set of actions always done in the same way, often for religious or special reasons",
    "sentence": "A: Why does the team leader always ring a small bell and offer fruit at the front door before a new shop opens? B: It's an old {{BLANK}} in this area that people believe brings good luck and many customers, so he follows the same steps every time, even though he knows some younger staff find it unusual.",
    "cn": "A：為什麼組長在新店開幕前總是在門口搖小鈴並供奉水果？ B：這是這個地區的一種古老【儀式】，人們相信它能帶來好運和許多顧客，所以他每次都按照同樣的步驟進行，即使他知道有些年輕員工覺得這很不尋常。"
  },
  {
    "word": "ticket",
    "pos": "n.",
    "cn_def": "票；門票",
    "en_def": "a piece of paper or a code that lets you enter an event or travel",
    "sentence": "A: How can our clients from Singapore get into the jazz festival on Saturday night, since it's their first time in the city? B: I've already bought a {{BLANK}} for each of them online, so they only need to show the code on their phones at the front gate, and a staff member will take them to their seats.",
    "cn": "A：我們來自新加坡的客戶星期六晚上要怎麼進入爵士音樂節？這是他們第一次來這座城市。 B：我已經在網路上幫他們每人買了一張【門票】，所以他們只要在大門口出示手機上的條碼，工作人員就會帶他們到座位。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；主持；招待",
    "en_def": "to organize an event and welcome the guests or people who take part",
    "sentence": "A: Why is the city building a new stage and hundreds of extra parking spaces near the harbor this year? B: The city will {{BLANK}} an international music festival next summer, and organizers expect more than fifty thousand visitors over three days, so it needs much more space for performers, cars and buses.",
    "cn": "A：為什麼市政府今年要在港口附近興建新舞台和數百個額外的停車位？ B：市政府明年夏天將【主辦】一場國際音樂節，主辦單位預計三天內會有超過五萬名遊客，所以需要更多空間給表演者、汽車和巴士。"
  },
  {
    "word": "tourist",
    "pos": "n.",
    "cn_def": "觀光客；遊客",
    "en_def": "a person who travels to a place for fun",
    "sentence": "A: Why does the information center near the train station stay open until ten o'clock at night during the lantern festival? B: Every {{BLANK}} who arrives late needs maps, bus times and hotel information, so the city keeps the center open longer to help visitors from other countries find their way around safely.",
    "cn": "A：為什麼火車站附近的旅客服務中心在燈會期間營業到晚上十點？ B：每位晚到的【觀光客】都需要地圖、公車時刻和飯店資訊，所以市政府延長服務中心的營業時間，幫助來自其他國家的訪客安全地找到路。"
  }
];

const MCQS = [
  {
    "q": "The team finished the project two weeks early. The manager ordered pizza and cake for a small _____ in the meeting room.",
    "options": [
      "celebration",
      "tourist",
      "vendor",
      "ticket"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Main Street will be closed on Saturday morning. Thousands of people will watch the _____ of bands and dancers move through the city.",
    "options": [
      "feast",
      "parade",
      "ticket",
      "lantern"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new library will officially open next Monday. The mayor will cut a ribbon during a short _____ at the front entrance.",
    "options": [
      "crowd",
      "vendor",
      "ceremony",
      "costume"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Over two hundred companies showed their products at the trade _____ last week. Our sales team collected many new business cards there.",
    "options": [
      "lantern",
      "tourist",
      "feast",
      "fair"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Every December, the staff exchange small gifts at the office party. This _____ began when the company first opened thirty years ago.",
    "options": [
      "crowd",
      "ticket",
      "tradition",
      "vendor"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Students from ten countries will join the _____ exchange program this summer. They will learn about local food, music and customs.",
    "options": [
      "cultural",
      "seasonal",
      "joyful",
      "colorful"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The bank will be closed on Monday because it is a national _____. All online services will still work as usual.",
    "options": [
      "ritual",
      "costume",
      "lantern",
      "holiday"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The staff will _____ the lobby with flowers and small lights next week. They want the hotel to look cheerful for the New Year.",
    "options": [
      "exhibit",
      "decorate",
      "commemorate",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "About thirty relatives came to my grandmother's house for dinner. It was the biggest family _____ we have had in years.",
    "options": [
      "gathering",
      "ticket",
      "parade",
      "vendor"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The temple holds _____ services every morning, and people come to pray for their families' health. Visitors must take off their shoes inside.",
    "options": [
      "seasonal",
      "colorful",
      "annual",
      "religious"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Please arrive at the stadium early on the night of the concert. A large _____ is expected, and the gates will close at seven.",
    "options": [
      "costume",
      "crowd",
      "lantern",
      "ritual"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "At midnight, bright _____ lit up the sky above the river. Families cheered as the loud bangs echoed across the city.",
    "options": [
      "ticket",
      "vendor",
      "fireworks",
      "ceremony"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Because the weather is so nice, the manager chose _____ seating for the lunch event. Everyone will eat at tables on the roof garden.",
    "options": [
      "religious",
      "joyful",
      "annual",
      "outdoor"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Every child at the Halloween party wore a _____. My son dressed up as a pirate with a black hat and a sword.",
    "options": [
      "costume",
      "crowd",
      "holiday",
      "feast"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The museum will _____ more than fifty old photos of the city this month. Visitors can see them for free on weekends.",
    "options": [
      "decorate",
      "host",
      "exhibit",
      "commemorate"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "My uncle sells grilled sausages at the night market every weekend. His small _____ is always surrounded by hungry customers.",
    "options": [
      "parade",
      "food stall",
      "ceremony",
      "holiday"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The company holds its _____ meeting for shareholders in May. This is the only time each year when all the owners meet together.",
    "options": [
      "annual",
      "outdoor",
      "lively",
      "cultural"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "A street _____ near the station sells hot sweet potatoes in winter. Many office workers buy one on their way home.",
    "options": [
      "holiday",
      "ritual",
      "vendor",
      "celebration"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The chefs worked all day to prepare twelve dishes for the wedding. Guests enjoyed a huge _____ of seafood, meat and fruit.",
    "options": [
      "parade",
      "tourist",
      "tradition",
      "feast"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The farm hires _____ workers every autumn to pick apples. Most of them leave again when the harvest ends in November.",
    "options": [
      "religious",
      "seasonal",
      "colorful",
      "joyful"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "During the festival, children carried a paper _____ with a small candle inside. The soft light made the dark streets look magical.",
    "options": [
      "crowd",
      "holiday",
      "lantern",
      "gathering"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "A statue was built in the town square to _____ the soldiers who died in the war. Many people leave flowers there every year.",
    "options": [
      "decorate",
      "commemorate",
      "exhibit",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The actors received a long round of applause after the show. Critics called it the best _____ of the theater season.",
    "options": [
      "performance",
      "lantern",
      "vendor",
      "ticket"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The night market is quiet on Mondays, but it becomes very _____ on weekends. Music, laughter and shouting sellers fill the streets.",
    "options": [
      "annual",
      "religious",
      "seasonal",
      "lively"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Before every important meeting, the director drinks green tea and reads the news quietly. This morning _____ helps her stay calm.",
    "options": [
      "tourist",
      "ritual",
      "parade",
      "vendor"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The designer added bright red, yellow and green flags to the stage. The _____ decorations made the hall look cheerful.",
    "options": [
      "annual",
      "outdoor",
      "colorful",
      "religious"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "You must show your _____ at the gate to enter the festival. Children under six can enter for free.",
    "options": [
      "crowd",
      "ceremony",
      "feast",
      "ticket"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Our city will _____ the international trade conference next year. Hotels expect thousands of business visitors from around the world.",
    "options": [
      "host",
      "commemorate",
      "decorate",
      "exhibit"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Each summer, thousands of foreign visitors come to the island. The local government is building a new _____ information center near the port.",
    "options": [
      "costume",
      "ritual",
      "feast",
      "tourist"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "Everyone cheered and hugged when the team won the national award. It was a truly _____ moment for the whole company.",
    "options": [
      "joyful",
      "outdoor",
      "annual",
      "seasonal"
    ],
    "answer": 0,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "celebration": {
    "pos": "n.",
    "en_def": "a special event or party held because something good has happened",
    "cn_def": "慶祝；慶祝活動"
  },
  "parade": {
    "pos": "n.",
    "en_def": "a public event in which people walk or ride through the streets to celebrate something",
    "cn_def": "遊行"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal event held to mark an important occasion",
    "cn_def": "典禮；儀式"
  },
  "carnival": {
    "pos": "n.",
    "en_def": "a large public festival with music, dancing and parades in the streets",
    "cn_def": "嘉年華會；狂歡節"
  },
  "fair": {
    "pos": "n.",
    "en_def": "a large event where companies show and sell their products, or an outdoor event with games and food",
    "cn_def": "展覽會；市集；園遊會"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief that has been passed down for a long time",
    "cn_def": "傳統；慣例"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "related to the customs, art and ideas of a group of people",
    "cn_def": "文化的"
  },
  "religious": {
    "pos": "adj.",
    "en_def": "connected with religion or faith",
    "cn_def": "宗教的；虔誠的"
  },
  "holiday": {
    "pos": "n.",
    "en_def": "a day when most people do not work, often to celebrate something",
    "cn_def": "假日；節日"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people for a social or special reason",
    "cn_def": "聚會；集會"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large number of people in one place",
    "cn_def": "人群；群眾"
  },
  "fireworks": {
    "pos": "n.",
    "en_def": "small objects that explode in the sky with bright colors and loud noises",
    "cn_def": "煙火"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds made by voices or instruments in a way that is pleasant to hear",
    "cn_def": "音樂"
  },
  "dance": {
    "pos": "n.",
    "en_def": "a set of movements done to music",
    "cn_def": "舞蹈；跳舞"
  },
  "costume": {
    "pos": "n.",
    "en_def": "special clothes worn to look like someone or something else, often at a festival or show",
    "cn_def": "（表演或節慶的）服裝；戲服"
  },
  "float": {
    "pos": "n.",
    "en_def": "a large decorated vehicle that moves slowly in a parade",
    "cn_def": "（遊行的）花車"
  },
  "food stall": {
    "pos": "n.",
    "en_def": "a small table or shop where food is sold, usually outdoors",
    "cn_def": "小吃攤；食物攤位"
  },
  "vendor": {
    "pos": "n.",
    "en_def": "a person who sells things, often in the street",
    "cn_def": "小販；攤販；賣方"
  },
  "feast": {
    "pos": "n.",
    "en_def": "a large special meal for many people",
    "cn_def": "盛宴；宴席"
  },
  "lantern": {
    "pos": "n.",
    "en_def": "a light inside a container made of paper, glass or metal",
    "cn_def": "燈籠；提燈"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make something look more attractive by adding things to it",
    "cn_def": "裝飾；佈置"
  },
  "exhibit": {
    "pos": "v.",
    "en_def": "to show something to the public, for example in a museum or show",
    "cn_def": "展出；展示"
  },
  "performance": {
    "pos": "n.",
    "en_def": "the act of singing, dancing, playing music or acting in front of people",
    "cn_def": "表演；演出"
  },
  "outdoor": {
    "pos": "adj.",
    "en_def": "happening or used outside, not in a building",
    "cn_def": "戶外的；露天的"
  },
  "annual": {
    "pos": "adj.",
    "en_def": "happening once every year",
    "cn_def": "一年一度的；每年的"
  },
  "seasonal": {
    "pos": "adj.",
    "en_def": "happening or needed only during a particular time of year",
    "cn_def": "季節性的；季節的"
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of energy, activity and excitement",
    "cn_def": "熱鬧的；活潑的"
  },
  "colorful": {
    "pos": "adj.",
    "en_def": "having many bright colors",
    "cn_def": "色彩繽紛的；豐富多彩的"
  },
  "joyful": {
    "pos": "adj.",
    "en_def": "very happy, or making people feel very happy",
    "cn_def": "歡欣的；令人高興的"
  },
  "commemorate": {
    "pos": "v.",
    "en_def": "to do something special to remember an important person or event",
    "cn_def": "紀念；慶祝"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "a set of actions always done in the same way, often for religious or special reasons",
    "cn_def": "儀式；例行公事"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a piece of paper or a code that lets you enter an event or travel",
    "cn_def": "票；門票"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and welcome the guests or people who take part",
    "cn_def": "主辦；主持；招待"
  },
  "tourist": {
    "pos": "n.",
    "en_def": "a person who travels to a place for fun",
    "cn_def": "觀光客；遊客"
  }
};

const EXTRA_GLOSSES = {};
