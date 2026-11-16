// Topic 183 Quiz Data: Ideas 想法
// Source word list: https://www.examword.com/group-topic/ideas — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T183 - Ideas 想法",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "concept",
    "pos": "n.",
    "cn_def": "概念",
    "en_def": "a general idea of what something is or how it should be",
    "sentence": "A: Our marketing team has been arguing about the new coffee shop design all week, so what exactly did the owner decide at Friday's meeting? B: She chose a simple {{BLANK}} built around local farmers, so every cup, poster, and menu will tell customers where the beans come from and why that matters.",
    "cn": "A：我們的行銷團隊整個星期都在為新咖啡店的設計爭論，老闆在週五的會議上到底決定了什麼？ B：她選了一個以在地農民為核心的簡單【概念】，所以每一杯咖啡、每張海報和菜單都會告訴顧客咖啡豆來自哪裡，以及為什麼這很重要。"
  },
  {
    "word": "notion",
    "pos": "n.",
    "cn_def": "觀念；想法",
    "en_def": "an idea or belief about something",
    "sentence": "A: Why does the new manager keep asking us to take proper lunch breaks and leave the office on time every evening? B: She rejects the old {{BLANK}} that staying late shows hard work, because she believes tired employees make more mistakes and lose the energy they need for creative tasks.",
    "cn": "A：為什麼新經理一直要求我們好好休息午餐時間，並且每天晚上準時下班？ B：她不認同「留得晚代表努力工作」這種舊【觀念】，因為她相信疲累的員工會犯更多錯，也會失去做創意工作所需的精力。"
  },
  {
    "word": "thought",
    "pos": "n.",
    "cn_def": "想法；念頭",
    "en_def": "an idea or opinion that you have",
    "sentence": "A: Before I send this budget to the finance department this afternoon, do you have any comments about the travel costs for the sales trip? B: Just one {{BLANK}}: we could save a lot of money if the team takes the train instead of flying, since the city is only three hours away.",
    "cn": "A：我今天下午把這份預算送去財務部之前，你對這趟業務出差的旅費有什麼意見嗎？ B：只有一個【想法】：如果團隊改搭火車而不搭飛機，我們可以省下很多錢，因為那座城市只有三小時車程。"
  },
  {
    "word": "insight",
    "pos": "n.",
    "cn_def": "洞察；深刻見解",
    "en_def": "a clear and deep understanding of something",
    "sentence": "A: What did you learn from the customer survey that the research company finished for us last week? B: It gave us a valuable {{BLANK}} into why younger shoppers prefer our online store, mainly because they can compare prices quickly and read honest reviews from other buyers before they pay.",
    "cn": "A：研究公司上週幫我們完成的顧客調查，你從中學到了什麼？ B：它讓我們對年輕消費者為什麼偏好我們的網路商店有了寶貴的【深入了解】，主要是因為他們可以快速比價，並在付款前閱讀其他買家的真實評論。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感",
    "en_def": "something that gives you new ideas",
    "sentence": "A: Where did the designer find the ideas for the colorful new packaging that everyone in the office is talking about? B: She said her {{BLANK}} came from the night markets in Taipei, where bright signs, busy crowds, and delicious street food made her want to create something lively and fun.",
    "cn": "A：辦公室裡大家都在討論的那款色彩繽紛的新包裝，設計師是從哪裡找到點子的？ B：她說她的【靈感】來自台北的夜市，那裡明亮的招牌、熱鬧的人潮和美味的街頭小吃讓她想創作出活潑有趣的作品。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力",
    "en_def": "the ability to make pictures or ideas in your mind",
    "sentence": "A: Our children's book publisher wants a new writer for the summer series, so what kind of person should we hire for the job? B: We need someone with a strong {{BLANK}} who can create magical worlds and funny characters, because young readers quickly lose interest when the stories feel ordinary or predictable.",
    "cn": "A：我們的童書出版社想為暑期系列找一位新作家，我們應該雇用什麼樣的人來做這份工作？ B：我們需要一位【想像力】豐富的人，能創造出神奇的世界和有趣的角色，因為故事一旦平淡或可預測，年輕讀者很快就會失去興趣。"
  },
  {
    "word": "vision",
    "pos": "n.",
    "cn_def": "願景",
    "en_def": "an idea of what the future should be like",
    "sentence": "A: Why are so many talented engineers applying to work at that small startup even though the salary is lower than at big companies? B: The founder has a clear {{BLANK}} for the future, where clean energy is cheap for every family, and people want to be part of something meaningful.",
    "cn": "A：為什麼這麼多優秀的工程師都去應徵那家小型新創公司，即使薪水比大公司低？ B：創辦人對未來有清楚的【願景】，希望讓每個家庭都能用上便宜的乾淨能源，而大家都想參與有意義的事情。"
  },
  {
    "word": "suggestion",
    "pos": "n.",
    "cn_def": "建議",
    "en_def": "an idea that you offer for someone to think about",
    "sentence": "A: The staff room is always messy after lunch, and nobody wants to clean the fridge, so how can we solve this problem fairly? B: I have a {{BLANK}}: let's create a weekly cleaning schedule on the notice board, so each team member takes one turn every month and nobody feels it is unfair.",
    "cn": "A：員工休息室午餐後總是很亂，也沒人想清冰箱，我們要怎麼公平地解決這個問題？ B：我有個【建議】：我們在布告欄上排一份每週打掃值日表，讓每位組員每個月輪一次，這樣就沒人會覺得不公平。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "提案；建議書",
    "en_def": "a formal plan or idea that is offered for people to accept",
    "sentence": "A: Have you heard whether the directors accepted our idea to open a second branch in Kaohsiung next spring? B: Not yet, but they asked us to send a detailed written {{BLANK}} by Friday, including the expected costs, the number of new staff, and how long it will take to make a profit.",
    "cn": "A：你有聽說董事們是否接受了我們明年春天在高雄開第二家分店的構想嗎？ B：還沒有，不過他們要求我們在週五前送出一份詳細的書面【提案】，內容包括預估成本、新員工人數，以及需要多久才能獲利。"
  },
  {
    "word": "plan",
    "pos": "n.",
    "cn_def": "計畫",
    "en_def": "a set of steps you decide on to do something",
    "sentence": "A: The office is moving to a new building in March, so how will we make sure that nothing gets lost or damaged during the move? B: The manager has made a careful {{BLANK}} that lists which team packs each room, when the trucks arrive, and who will check every box at the new address.",
    "cn": "A：辦公室三月要搬到新大樓，我們要怎麼確保搬遷時沒有東西遺失或損壞？ B：經理已經訂了一份周詳的【計畫】，列出哪個團隊負責打包哪個房間、卡車何時抵達，以及誰會在新地址檢查每一個箱子。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a careful plan to reach a goal",
    "sentence": "A: Sales of our sports drinks fell sharply last quarter, so what are we going to do to win back customers from our competitors? B: The marketing director introduced a new {{BLANK}} that focuses on social media videos and free samples at gyms, since young athletes are our most important buyers.",
    "cn": "A：我們的運動飲料上一季銷量大幅下滑，我們要怎麼從競爭對手那裡贏回顧客？ B：行銷總監推出了一套新【策略】，重點放在社群媒體影片和在健身房發送免費試用品，因為年輕運動員是我們最重要的買家。"
  },
  {
    "word": "approach",
    "pos": "n.",
    "cn_def": "方法；處理方式",
    "en_def": "a way of dealing with something",
    "sentence": "A: Training new employees used to take two whole weeks, but this year it only took five days, so what changed in the program? B: We tried a different {{BLANK}}, pairing each new worker with an experienced colleague who explains the tasks while they work together, instead of giving long lectures in a classroom.",
    "cn": "A：以前訓練新員工要整整兩週，但今年只花了五天，課程有什麼改變？ B：我們試了一種不同的【方法】，讓每位新員工和一位有經驗的同事搭檔，一邊一起工作一邊解說任務，而不是在教室裡上冗長的課。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決辦法",
    "en_def": "a way to solve a problem",
    "sentence": "A: Customers keep complaining that they wait too long on the phone when they call our service center during busy lunch hours. B: One possible {{BLANK}} is adding an online chat service on our website, so people can ask simple questions without waiting, and our phone staff can handle the difficult cases.",
    "cn": "A：顧客一直抱怨在午餐尖峰時段打電話到我們的客服中心時，要在電話上等太久。 B：一個可行的【解決辦法】是在網站上增加線上即時客服，這樣大家問簡單問題就不必等待，電話客服人員也能專心處理困難的案件。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新；新發明",
    "en_def": "a new idea, method, or product",
    "sentence": "A: Why did the electronics company win so many awards at the technology fair in Berlin this year? B: Judges praised its latest {{BLANK}}, a folding laptop that charges with sunlight, because it helps travelers and students work anywhere without searching for a power outlet in airports or cafés.",
    "cn": "A：為什麼這家電子公司今年在柏林的科技展上贏得這麼多獎項？ B：評審們稱讚它最新的【創新產品】——一台用陽光充電的折疊筆電，因為它讓旅客和學生在任何地方都能工作，不必在機場或咖啡館到處找插座。"
  },
  {
    "word": "theory",
    "pos": "n.",
    "cn_def": "理論；推測",
    "en_def": "an idea that tries to explain why something happens",
    "sentence": "A: Nobody understands why our online sales always increase on rainy weekends, even when we don't run any special promotions. B: My {{BLANK}} is that people stay indoors when the weather is bad, so they spend more time browsing shopping websites on their phones and end up buying things.",
    "cn": "A：沒有人明白為什麼我們的網路銷售在下雨的週末總是增加，即使我們沒有做任何特別促銷。 B：我的【推測】是天氣不好時大家都待在室內，所以會花更多時間用手機瀏覽購物網站，最後就買了東西。"
  },
  {
    "word": "hypothesis",
    "pos": "n.",
    "cn_def": "假設",
    "en_def": "an idea that has not yet been proven and needs testing",
    "sentence": "A: What is the research team trying to prove in the experiment they started at our three downtown stores last month? B: Their {{BLANK}} is that soft background music makes shoppers stay longer and spend more, so they are comparing sales in stores with and without music for eight weeks.",
    "cn": "A：研究團隊上個月在我們市中心三家店開始的實驗，他們想證明什麼？ B：他們的【假設】是輕柔的背景音樂會讓顧客停留更久、花更多錢，所以他們正在比較有音樂和沒音樂的門市八週的銷售額。"
  },
  {
    "word": "belief",
    "pos": "n.",
    "cn_def": "信念；信仰",
    "en_def": "a strong feeling that something is true or right",
    "sentence": "A: Why does the owner of the bakery refuse to sell bread that is more than one day old, even though it wastes money? B: It's her strong {{BLANK}} that customers deserve only the freshest products, and she donates the leftover bread to a local shelter every night instead of throwing it away.",
    "cn": "A：為什麼麵包店老闆拒絕販售超過一天的麵包，即使這樣很浪費錢？ B：她堅定的【信念】是顧客只該得到最新鮮的產品，而且她每天晚上都把剩下的麵包捐給當地的收容所，而不是丟掉。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見；看法",
    "en_def": "what you think or feel about something",
    "sentence": "A: I'm thinking about buying the new laptop for my design work, but it's quite expensive, so do you think it's worth the money? B: In my {{BLANK}}, it's a good choice, because the screen is bright and accurate, the battery lasts all day, and it will probably save you time on big projects.",
    "cn": "A：我在考慮買那台新筆電來做設計工作，但它相當貴，你覺得值得嗎？ B：依我【看】，它是個好選擇，因為螢幕明亮又準確，電池可以撐一整天，而且在大型案子上大概能幫你省下時間。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "觀點；角度",
    "en_def": "a particular way of looking at something",
    "sentence": "A: Why did the hotel manager ask the cleaning staff to join the meeting about improving guest rooms next year? B: She wanted to hear their {{BLANK}}, because they visit every room each day and know exactly which beds, lamps, and showers guests complain about most often.",
    "cn": "A：為什麼飯店經理要請清潔人員參加明年改善客房的會議？ B：她想聽聽他們的【觀點】，因為他們每天進出每個房間，最清楚房客最常抱怨哪些床、檯燈和淋浴設備。"
  },
  {
    "word": "brainstorm",
    "pos": "v.",
    "cn_def": "腦力激盪；集思廣益",
    "en_def": "to think of many ideas quickly in a group",
    "sentence": "A: We need a fresh name for our new line of healthy snacks before the trade show next month, but nobody has any good ideas yet. B: Let's book the meeting room for an hour tomorrow morning and {{BLANK}} together, writing every possible name on the whiteboard before we choose the best three.",
    "cn": "A：下個月商展前，我們需要替新的健康零食系列取個新名字，但目前還沒人有好點子。 B：我們明天早上訂一小時的會議室，一起【腦力激盪】，先把所有可能的名字寫在白板上，再選出最好的三個。"
  },
  {
    "word": "conceive",
    "pos": "v.",
    "cn_def": "構想出；想出",
    "en_def": "to think of a new idea or plan",
    "sentence": "A: Who first came up with the free shuttle bus that takes employees from the train station to the factory every morning? B: Our human resources manager helped {{BLANK}} the service three years ago, after noticing that many workers arrived late because the walk from the station took almost forty minutes.",
    "cn": "A：每天早上把員工從火車站載到工廠的免費接駁車，最早是誰想出來的？ B：我們的人資經理三年前協助【構想出】這項服務，因為她注意到很多員工遲到，原因是從車站走過來要將近四十分鐘。"
  },
  {
    "word": "propose",
    "pos": "v.",
    "cn_def": "提議；提出",
    "en_def": "to suggest an idea or plan for others to consider",
    "sentence": "A: The team is tired of the long Monday meetings that often last until lunch, so what are you going to say to the director? B: I'm going to {{BLANK}} a shorter fifteen-minute meeting where everyone stands up and shares only their main tasks, so we can start working much earlier.",
    "cn": "A：團隊已經受夠常常開到午餐時間的冗長週一會議了，你打算跟總監說什麼？ B：我打算【提議】改成十五分鐘的短會，大家站著開，只分享自己的主要任務，這樣我們就能早一點開始工作。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to form a picture of something in your mind",
    "sentence": "A: The architect showed us drawings of the new office, but it is hard to understand how the space will really look and feel. B: Try to {{BLANK}} a large bright room with plants everywhere, comfortable sofas near the windows, and quiet booths where you can make phone calls without any noise.",
    "cn": "A：建築師給我們看了新辦公室的圖，但很難理解這個空間實際上看起來和感覺起來會是怎樣。 B：試著【想像】一個寬敞明亮、到處都有植物的房間，窗邊有舒服的沙發，還有安靜的小隔間讓你不受噪音干擾地講電話。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "開發；發展",
    "en_def": "to create and build something new over time",
    "sentence": "A: Our customers keep asking for an easier way to order food from our restaurant without calling during the busy dinner hours. B: That's why we hired a programmer to {{BLANK}} a mobile app, which will let people choose dishes, pay online, and see exactly when their order will be ready for pickup.",
    "cn": "A：我們的顧客一直希望有更簡單的方式向餐廳點餐，不必在忙碌的晚餐時段打電話。 B：所以我們請了一位程式設計師來【開發】手機應用程式，讓大家可以選菜、線上付款，並清楚看到餐點何時可以取餐。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at making new and interesting things or ideas",
    "sentence": "A: What kind of person is the advertising agency looking for to lead its new campaign for the sports shoe company? B: They want a {{BLANK}} designer who can produce surprising videos and posters, because the client believes that ordinary advertisements will not attract the attention of busy teenagers today.",
    "cn": "A：廣告公司在找什麼樣的人來帶領運動鞋公司的新宣傳活動？ B：他們想要一位【有創意的】設計師，能做出令人驚喜的影片和海報，因為客戶認為普通的廣告吸引不了現今忙碌的青少年的注意。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new methods or ideas",
    "sentence": "A: How did that small local bank manage to attract so many young customers in such a short period of time? B: It introduced an {{BLANK}} service that lets people open an account in five minutes with their phone, without visiting a branch or filling in long paper forms.",
    "cn": "A：那家地方小銀行是怎麼在這麼短時間內吸引這麼多年輕客戶的？ B：它推出了一項【創新的】服務，讓大家用手機五分鐘就能開戶，不必去分行，也不用填冗長的紙本表格。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原創的；獨到的",
    "en_def": "new and different from anything else",
    "sentence": "A: Why didn't the judges choose the poster from the large design company, even though it looked very professional? B: They thought it was too similar to last year's winner, and they preferred a student's {{BLANK}} idea that used recycled paper and showed the city in a completely new way.",
    "cn": "A：為什麼評審沒有選那家大型設計公司的海報，即使它看起來很專業？ B：他們認為它和去年的得獎作品太像了，他們比較喜歡一位學生的【獨創】點子，用回收紙並以全新的方式呈現這座城市。"
  },
  {
    "word": "abstract",
    "pos": "adj.",
    "cn_def": "抽象的",
    "en_def": "based on general ideas, not real examples",
    "sentence": "A: Why did so many employees look confused after the CEO's speech about the company's new values this morning? B: His ideas were too {{BLANK}}, with big words like trust and growth but no real examples, so people didn't understand what they should actually do differently at work.",
    "cn": "A：為什麼今天早上執行長談公司新價值觀的演講後，這麼多員工看起來一頭霧水？ B：他的想法太【抽象】了，只有「信任」、「成長」這類大字眼卻沒有實際例子，所以大家不明白在工作上實際該做哪些改變。"
  },
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實用的；務實的",
    "en_def": "useful and sensible in real situations",
    "sentence": "A: The consultant gave us twenty pages of advice about saving energy, but which changes can we actually make this month? B: The most {{BLANK}} step is turning off computers and lights every evening, because it costs nothing, takes only a few minutes, and could reduce our electricity bill noticeably.",
    "cn": "A：顧問給了我們二十頁關於節能的建議，但哪些改變是我們這個月真的能做到的？ B：最【實際】的一步是每天晚上關掉電腦和電燈，因為它不花錢、只要幾分鐘，而且能明顯降低我們的電費。"
  },
  {
    "word": "clearly",
    "pos": "adv.",
    "cn_def": "清楚地",
    "en_def": "in a way that is easy to understand",
    "sentence": "A: The new interns seemed lost during their first week, so what can we do to help the next group understand their tasks better? B: Supervisors should explain each job {{BLANK}} on the first day, give written instructions with examples, and check in with the interns every afternoon to answer any questions.",
    "cn": "A：新來的實習生第一週似乎很迷惘，我們能做些什麼來幫助下一批人更了解他們的工作？ B：主管應該在第一天就【清楚地】說明每項工作，提供附有範例的書面指示，並每天下午關心實習生，回答他們的任何問題。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地",
    "en_def": "in a way that uses new and interesting ideas",
    "sentence": "A: Our budget for the company's anniversary party is very small this year, so how can we still make it a fun event for everyone? B: We'll have to think {{BLANK}}, perhaps by asking staff to perform music, cook their favorite dishes, and decorate the hall with drawings made by their children.",
    "cn": "A：今年公司週年派對的預算很少，我們要怎麼還是讓它成為大家都開心的活動？ B：我們得【有創意地】思考，也許請員工表演音樂、煮他們最喜歡的菜，並用他們孩子畫的圖來布置會場。"
  },
  {
    "word": "openly",
    "pos": "adv.",
    "cn_def": "公開地；坦率地",
    "en_def": "in an honest way, without hiding anything",
    "sentence": "A: How does the new team leader make sure that problems are reported early instead of being hidden until it's too late? B: She encourages everyone to speak {{BLANK}} at the weekly meeting, and she never blames people for mistakes, so staff feel safe sharing bad news quickly.",
    "cn": "A：新的組長如何確保問題能及早被回報，而不是被隱瞞到為時已晚？ B：她鼓勵每個人在每週會議上【坦率地】發言，而且她從不因為錯誤責怪別人，所以員工覺得可以放心地盡快分享壞消息。"
  },
  {
    "word": "actively",
    "pos": "adv.",
    "cn_def": "積極地；主動地",
    "en_def": "in a way that involves doing things with energy",
    "sentence": "A: Why was Kevin chosen as employee of the month, when he has only worked in the sales department for six months? B: He {{BLANK}} looks for ways to improve our service, regularly visiting customers, collecting feedback, and sharing useful ideas with the team without waiting for the manager to ask.",
    "cn": "A：凱文才在業務部工作六個月，為什麼會被選為本月最佳員工？ B：他【積極地】尋找改善我們服務的方法，經常拜訪客戶、收集意見，而且不等經理要求就主動和團隊分享有用的點子。"
  },
  {
    "word": "widely",
    "pos": "adv.",
    "cn_def": "廣泛地",
    "en_def": "by many people or in many places",
    "sentence": "A: Is it true that the new recycling program started by our office is now being used by other companies in the city? B: Yes, the idea has been {{BLANK}} accepted, and more than fifty businesses have joined because it saves money and the local newspaper wrote a positive story about it.",
    "cn": "A：我們辦公室發起的新回收計畫，現在城裡其他公司也在使用，是真的嗎？ B：是的，這個點子已被【廣泛】接受，超過五十家企業加入了，因為它能省錢，而且當地報紙也寫了一篇正面的報導。"
  }
];

const MCQS = [
  {
    "q": "The new restaurant is based on a simple _____ of farm-to-table dining. Every ingredient is bought from farms within fifty kilometers.",
    "options": [
      "concept",
      "opinion",
      "suggestion",
      "hypothesis"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The customer survey gave managers a clear _____ into why shoppers leave items in their online carts. They now plan to simplify the payment page.",
    "options": [
      "plan",
      "insight",
      "theory",
      "proposal"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The designer said the old harbor buildings were her main source of _____ for the hotel's new lobby. She copied their colors and shapes.",
    "options": [
      "solution",
      "opinion",
      "inspiration",
      "strategy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Children's book writers need a lively _____ to create magical worlds for young readers. Our editors look for stories that are fresh and surprising.",
    "options": [
      "theory",
      "proposal",
      "solution",
      "imagination"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The founder shared her _____ for the company's future at the annual meeting. She hopes to open stores in five Asian countries by 2030.",
    "options": [
      "hypothesis",
      "vision",
      "solution",
      "insight"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Thank you for your helpful _____ about the office layout. We will move the printers closer to the sales team next week.",
    "options": [
      "hypothesis",
      "imagination",
      "innovation",
      "suggestion"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The board of directors approved the _____ to build a new warehouse near the port. Construction will begin in early spring.",
    "options": [
      "proposal",
      "opinion",
      "insight",
      "imagination"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Before applying for a bank loan, small business owners must prepare a detailed business _____. It should include sales forecasts and expected costs.",
    "options": [
      "theory",
      "insight",
      "plan",
      "belief"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The company's new marketing _____ focuses on short videos for social media. Sales to young customers have already risen by twelve percent.",
    "options": [
      "hypothesis",
      "imagination",
      "belief",
      "strategy"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "After the first design failed, the engineers decided to take a completely different _____ to the problem. The second version worked perfectly.",
    "options": [
      "approach",
      "opinion",
      "inspiration",
      "theory"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Adding an online chat service may be the best _____ to the long waiting times. Customers could then get quick answers without phoning.",
    "options": [
      "insight",
      "belief",
      "solution",
      "imagination"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The smartphone maker is famous for its constant _____ in camera technology. Each new model takes clearer photos in low light.",
    "options": [
      "opinion",
      "innovation",
      "hypothesis",
      "proposal"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "According to one economic _____, lower interest rates encourage people to borrow and spend more money. Some experts, however, disagree with this view.",
    "options": [
      "vision",
      "suggestion",
      "theory",
      "inspiration"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The bakery owner has a strong _____ in using only fresh, natural ingredients. She never adds preservatives to her bread or cakes.",
    "options": [
      "belief",
      "proposal",
      "strategy",
      "insight"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "In my _____, the new office chairs are much more comfortable than the old ones. Most of my colleagues seem to agree with me.",
    "options": [
      "concept",
      "opinion",
      "vision",
      "solution"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Looking at the problem from the customer's _____ helped the team understand the complaints. They then redesigned the whole returns process.",
    "options": [
      "proposal",
      "hypothesis",
      "innovation",
      "perspective"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The marketing team will meet on Monday morning to _____ ideas for the holiday campaign. Every suggestion will be written on the whiteboard.",
    "options": [
      "brainstorm",
      "deliver",
      "borrow",
      "persuade"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The two founders managed to _____ the idea for their delivery app during a long train journey. They launched it only six months later.",
    "options": [
      "attend",
      "deny",
      "conceive",
      "reduce"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "At tomorrow's meeting, the finance manager will _____ a new policy for travel expenses. Staff will then have two weeks to comment on it.",
    "options": [
      "imagine",
      "apologize",
      "arrive",
      "propose"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "It is hard to _____ how crowded the airport will be during the holidays. Travelers should arrive at least three hours before their flights.",
    "options": [
      "propose",
      "imagine",
      "develop",
      "brainstorm"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Our research team needs another year to _____ a battery that fully charges in five minutes. Testing with customers will start next spring.",
    "options": [
      "brainstorm",
      "apologize",
      "complain",
      "develop"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The advertising agency is hiring a _____ designer who can produce eye-catching posters. Applicants should send examples of their best work.",
    "options": [
      "abstract",
      "creative",
      "nervous",
      "empty"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Judges chose the student's poster because it was the most _____ entry in the competition. No other design looked anything like it.",
    "options": [
      "original",
      "careless",
      "empty",
      "previous"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The trainer gave us some _____ advice on handling difficult customers. We can use her tips on the phone right away.",
    "options": [
      "abstract",
      "absent",
      "practical",
      "eager"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Please explain the safety rules _____ to all new workers on their first day. Mistakes in the factory can cause serious injuries.",
    "options": [
      "widely",
      "clearly",
      "nearly",
      "lately"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "With such a small budget, the planners had to think _____ to make the party fun. They asked staff to perform music and cook dishes.",
    "options": [
      "creatively",
      "widely",
      "loudly",
      "recently"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Our team leader encourages everyone to speak _____ about problems at weekly meetings. Nobody is ever blamed for honest mistakes.",
    "options": [
      "widely",
      "hardly",
      "lately",
      "openly"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Kevin _____ looks for ways to improve customer service in his department. He regularly collects feedback and shares useful ideas with the team.",
    "options": [
      "widely",
      "nearly",
      "actively",
      "lately"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The new recycling program has been _____ accepted by businesses across the city. More than fifty companies have already joined it.",
    "options": [
      "widely",
      "creatively",
      "lately",
      "hardly"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Scientists will test the _____ that background music increases sales in supermarkets. The results of their study will be shared in March.",
    "options": [
      "vision",
      "hypothesis",
      "inspiration",
      "imagination"
    ],
    "answer": 1,
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "concept": {
    "pos": "n.",
    "en_def": "a general idea of what something is or how it should be",
    "cn_def": "概念"
  },
  "notion": {
    "pos": "n.",
    "en_def": "an idea or belief about something",
    "cn_def": "觀念；想法"
  },
  "thought": {
    "pos": "n.",
    "en_def": "an idea or opinion that you have",
    "cn_def": "想法；念頭"
  },
  "insight": {
    "pos": "n.",
    "en_def": "a clear and deep understanding of something",
    "cn_def": "洞察；深刻見解"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas",
    "cn_def": "靈感"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to make pictures or ideas in your mind",
    "cn_def": "想像力"
  },
  "vision": {
    "pos": "n.",
    "en_def": "an idea of what the future should be like",
    "cn_def": "願景"
  },
  "suggestion": {
    "pos": "n.",
    "en_def": "an idea that you offer for someone to think about",
    "cn_def": "建議"
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a formal plan or idea that is offered for people to accept",
    "cn_def": "提案；建議書"
  },
  "plan": {
    "pos": "n.",
    "en_def": "a set of steps you decide on to do something",
    "cn_def": "計畫"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan to reach a goal",
    "cn_def": "策略"
  },
  "approach": {
    "pos": "n.",
    "en_def": "a way of dealing with something",
    "cn_def": "方法；處理方式"
  },
  "solution": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "解決辦法"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method, or product",
    "cn_def": "創新；新發明"
  },
  "theory": {
    "pos": "n.",
    "en_def": "an idea that tries to explain why something happens",
    "cn_def": "理論；推測"
  },
  "hypothesis": {
    "pos": "n.",
    "en_def": "an idea that has not yet been proven and needs testing",
    "cn_def": "假設"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a strong feeling that something is true or right",
    "cn_def": "信念；信仰"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what you think or feel about something",
    "cn_def": "意見；看法"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a particular way of looking at something",
    "cn_def": "觀點；角度"
  },
  "brainstorm": {
    "pos": "v.",
    "en_def": "to think of many ideas quickly in a group",
    "cn_def": "腦力激盪；集思廣益"
  },
  "conceive": {
    "pos": "v.",
    "en_def": "to think of a new idea or plan",
    "cn_def": "構想出；想出"
  },
  "propose": {
    "pos": "v.",
    "en_def": "to suggest an idea or plan for others to consider",
    "cn_def": "提議；提出"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to create and build something new over time",
    "cn_def": "開發；發展"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at making new and interesting things or ideas",
    "cn_def": "有創意的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new methods or ideas",
    "cn_def": "創新的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "new and different from anything else",
    "cn_def": "原創的；獨到的"
  },
  "abstract": {
    "pos": "adj.",
    "en_def": "based on general ideas, not real examples",
    "cn_def": "抽象的"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "useful and sensible in real situations",
    "cn_def": "實用的；務實的"
  },
  "clearly": {
    "pos": "adv.",
    "en_def": "in a way that is easy to understand",
    "cn_def": "清楚地"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a way that uses new and interesting ideas",
    "cn_def": "有創意地"
  },
  "openly": {
    "pos": "adv.",
    "en_def": "in an honest way, without hiding anything",
    "cn_def": "公開地；坦率地"
  },
  "actively": {
    "pos": "adv.",
    "en_def": "in a way that involves doing things with energy",
    "cn_def": "積極地；主動地"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "by many people or in many places",
    "cn_def": "廣泛地"
  }
};

const EXTRA_GLOSSES = {};
