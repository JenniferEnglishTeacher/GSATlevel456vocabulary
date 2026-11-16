// Topic 200 Quiz Data: Invention 發明
// Source word list: https://www.examword.com/group-topic/invention — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T200 - Invention 發明",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "inventor",
    "pos": "n.",
    "cn_def": "發明家",
    "en_def": "a person who creates something new that did not exist before",
    "sentence": "A: Who is the woman giving the speech at the technology fair this afternoon, and why are so many reporters waiting near the stage? B: She is the {{BLANK}} of a small solar charger that many hikers now use, so journalists want to ask her about her next product and her company's plans.",
    "cn": "A：今天下午在科技展上演講的那位女士是誰？為什麼有這麼多記者在舞台附近等候？ B：她是一款小型太陽能充電器的【發明家】，現在很多登山客都在使用，所以記者們想問她關於下一個產品和公司計畫的事。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新；新發明",
    "en_def": "a new idea, method, or product",
    "sentence": "A: Why did our sales team receive a special bonus from the head office last month? B: Their latest {{BLANK}}, a system that lets customers order products through short online videos, brought in many new customers, and the managers were so impressed that they asked other branches to copy the same idea next year.",
    "cn": "A：為什麼我們的銷售團隊上個月收到總公司的特別獎金？ B：他們最新的【創新】——一套讓顧客透過線上短片訂購產品的系統——帶來了許多新客戶，經理們非常佩服，要求其他分公司明年也採用同樣的點子。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new and creative ideas",
    "sentence": "A: What did the judges say about the restaurant that won the city's small business award this year? B: They said the owner's {{BLANK}} idea of using a phone app to reduce food waste saved a lot of money, and other restaurants in the area are now trying the same approach.",
    "cn": "A：評審對今年贏得市政府小型企業獎的那家餐廳有什麼評價？ B：他們說老闆利用手機應用程式減少食物浪費的【創新的】點子省下了很多錢，現在附近其他餐廳也在嘗試同樣的做法。"
  },
  {
    "word": "device",
    "pos": "n.",
    "cn_def": "裝置；設備",
    "en_def": "a small machine or tool made for a special purpose",
    "sentence": "A: Why does the security guard ask every visitor to stop at the front desk before entering the lab? B: Each visitor has to wear a small {{BLANK}} that tracks where they go in the building, because the company wants to protect its secret projects and keep everyone safe during an emergency.",
    "cn": "A：為什麼警衛要求每位訪客在進入實驗室之前先到前台停留？ B：每位訪客都必須佩戴一個小型【裝置】來追蹤他們在大樓裡的行蹤，因為公司想要保護機密計畫，並在緊急情況時確保每個人的安全。"
  },
  {
    "word": "prototype",
    "pos": "n.",
    "cn_def": "原型；樣品",
    "en_def": "the first model of something, made to test it",
    "sentence": "A: Are we ready to show the new coffee machine to the investors at next Tuesday's meeting in Taipei? B: The engineers finished a working {{BLANK}} yesterday, but it still makes too much noise, so they plan to fix a few parts over the weekend before the investors see it.",
    "cn": "A：我們準備好在下週二台北的會議上向投資人展示新的咖啡機了嗎？ B：工程師昨天完成了一台可以運作的【原型】，但它的噪音還是太大，所以他們打算在週末修好幾個零件，再讓投資人看。"
  },
  {
    "word": "design",
    "pos": "v.",
    "cn_def": "設計",
    "en_def": "to plan and draw how something will look and work",
    "sentence": "A: Who is going to plan the layout of the new office on the fifth floor after the old furniture is moved out? B: We hired an architect to {{BLANK}} the space so that every team has a quiet meeting room, more natural light, and enough storage for files and supplies.",
    "cn": "A：舊家具搬走之後，誰要規劃五樓新辦公室的格局？ B：我們聘請了一位建築師來【設計】這個空間，讓每個團隊都有安靜的會議室、更多自然光，以及足夠存放文件和用品的空間。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造；建立",
    "en_def": "to make something new",
    "sentence": "A: Why is the marketing department working late every night this week, even though the product launch is still a month away? B: They need to {{BLANK}} a completely new advertising campaign, because the director didn't like the first version and wants something more exciting for younger customers.",
    "cn": "A：為什麼行銷部門這週每天晚上都工作到很晚，即使產品發表會還有一個月？ B：他們需要【創造】一個全新的廣告活動，因為主管不喜歡第一個版本，想要一些對年輕顧客更有吸引力的東西。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "開發；發展",
    "en_def": "to make a new product or idea grow and become ready",
    "sentence": "A: How long will it take your team to finish the new mobile app that our customers keep asking about? B: We need about six more months to {{BLANK}} it properly, because we must add online payment, test the security carefully, and translate everything into three languages before the launch.",
    "cn": "A：你們團隊還要多久才能完成客戶一直在詢問的新手機應用程式？ B：我們大約還需要六個月才能好好地【開發】它，因為我們必須加入線上付款功能、仔細測試安全性，並在上線前把所有內容翻譯成三種語言。"
  },
  {
    "word": "technology",
    "pos": "n.",
    "cn_def": "科技；技術",
    "en_def": "scientific knowledge used to make useful machines and tools",
    "sentence": "A: Why did the factory replace so many old machines on the production line last spring? B: The new {{BLANK}} lets one worker control several machines from a single computer screen, so the factory can produce more goods every day while using less electricity and making fewer mistakes.",
    "cn": "A：為什麼工廠去年春天把生產線上那麼多舊機器換掉了？ B：新的【科技】讓一名員工可以從一個電腦螢幕控制好幾台機器，所以工廠每天可以生產更多商品，同時用更少的電，也犯更少錯誤。"
  },
  {
    "word": "engineering",
    "pos": "n.",
    "cn_def": "工程學；工程",
    "en_def": "the work of designing and building machines, roads, bridges, etc.",
    "sentence": "A: What kind of job is your younger brother looking for now that he has finished his university studies? B: He studied {{BLANK}} for four years, so he hopes to work for a company that builds bridges and railways, and he has already sent his resume to several large firms.",
    "cn": "A：你弟弟大學畢業了，現在在找什麼樣的工作？ B：他念了四年的【工程學】，所以他希望到建造橋樑和鐵路的公司工作，而且他已經把履歷寄給好幾家大公司了。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究",
    "en_def": "careful study to find new facts",
    "sentence": "A: Why does the company spend so much money every year on its laboratory near the science park? B: The managers believe that careful {{BLANK}} helps us find better ingredients for our skin products, and that is the main reason customers trust our brand more than cheaper ones.",
    "cn": "A：為什麼公司每年都在科學園區附近的實驗室花那麼多錢？ B：經理們相信仔細的【研究】能幫助我們為護膚產品找到更好的成分，這也是顧客比起便宜品牌更信任我們品牌的主要原因。"
  },
  {
    "word": "experiment",
    "pos": "n.",
    "cn_def": "實驗",
    "en_def": "a scientific test to see what happens",
    "sentence": "A: Why are the scientists in the lab wearing special glasses and gloves this morning? B: They are doing an important {{BLANK}} with several chemicals to see which one cleans metal best, and the safety officer told them to protect their eyes and hands in case something spills.",
    "cn": "A：為什麼實驗室裡的科學家今天早上都戴著特殊的護目鏡和手套？ B：他們正在用幾種化學物質做一項重要的【實驗】，看看哪一種清潔金屬的效果最好，安全主管要求他們保護眼睛和手，以防有東西潑灑出來。"
  },
  {
    "word": "discovery",
    "pos": "n.",
    "cn_def": "發現",
    "en_def": "the act of finding something new",
    "sentence": "A: Why is everyone in the lab so excited this morning, and why did the director order cake for the whole team? B: Our scientists made an amazing {{BLANK}} last night: a plant from the mountains can help wounds heal faster, and the director thinks it could become our next big product.",
    "cn": "A：為什麼實驗室裡的每個人今天早上都這麼興奮，主管還為整個團隊訂了蛋糕？ B：我們的科學家昨晚有了驚人的【發現】：一種山上的植物能幫助傷口更快癒合，主管認為它可能成為我們下一個重要產品。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力",
    "en_def": "the ability to make new and original things",
    "sentence": "A: What qualities is the advertising agency looking for in the new graphic designer they plan to hire next month? B: They want someone with a lot of {{BLANK}}, because clients expect fresh and unusual ideas, and the designer will also need to work well under tight deadlines.",
    "cn": "A：廣告公司打算下個月聘請的新平面設計師，需要具備什麼特質？ B：他們想要一位很有【創造力】的人，因為客戶期待新鮮又獨特的點子，而且這位設計師也必須能在緊迫的截止期限下好好工作。"
  },
  {
    "word": "imagination",
    "pos": "n.",
    "cn_def": "想像力",
    "en_def": "the ability to form pictures or ideas in your mind",
    "sentence": "A: How did the children's book author come up with such strange and wonderful characters for her new series? B: She has a great {{BLANK}} and spends hours walking in the park every morning, thinking about animals that could talk, before she sits down to write in her small studio.",
    "cn": "A：那位童書作家是怎麼想出新系列裡那些奇特又美妙的角色的？ B：她有很豐富的【想像力】，每天早上都會在公園散步好幾個小時，想像會說話的動物，然後才坐在她的小工作室裡寫作。"
  },
  {
    "word": "concept",
    "pos": "n.",
    "cn_def": "概念",
    "en_def": "a general idea or plan",
    "sentence": "A: Did the clients like the ideas we showed them for their new shopping mall during yesterday's meeting? B: They loved the basic {{BLANK}} of a mall with a large garden on the roof, but they asked us to lower the cost and add more parking spaces before they make a final decision.",
    "cn": "A：客戶喜歡我們昨天開會時為他們新購物中心提出的點子嗎？ B：他們很喜歡屋頂上有大花園的購物中心這個基本【概念】，但他們要求我們降低成本、增加更多停車位，然後才會做最後決定。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決辦法",
    "en_def": "a way to solve a problem",
    "sentence": "A: Our customers keep complaining that they wait too long on the phone when they call the service center, so what should we do? B: One simple {{BLANK}} is to add an online chat service on our website, so customers can get quick answers without waiting, and our staff can help several people at once.",
    "cn": "A：我們的顧客一直抱怨打電話到客服中心時要等太久，我們該怎麼辦？ B：一個簡單的【解決辦法】是在我們網站上增加線上聊天服務，讓顧客不用等待就能得到快速的回答，我們的員工也能同時協助好幾個人。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "the quality of doing something well without wasting time or money",
    "sentence": "A: Why did the warehouse manager decide to buy robots that move boxes from the trucks to the shelves? B: He wanted to improve {{BLANK}}, because the workers were spending too much time carrying heavy boxes, and now orders leave the warehouse almost twice as fast as before.",
    "cn": "A：為什麼倉庫經理決定購買把箱子從卡車搬到貨架上的機器人？ B：他想要提高【效率】，因為員工花太多時間搬運沉重的箱子，現在訂單出貨的速度幾乎是以前的兩倍。"
  },
  {
    "word": "function",
    "pos": "n.",
    "cn_def": "功能",
    "en_def": "the purpose or job that something does",
    "sentence": "A: Why are so many customers returning the new kitchen blender we started selling last month? B: The main {{BLANK}} works well, but the button that cleans the machine automatically often breaks after a few days, so the engineers are trying to fix the problem as quickly as possible.",
    "cn": "A：為什麼這麼多顧客退回我們上個月開始販售的新款廚房果汁機？ B：主要【功能】運作得很好，但自動清潔機器的按鈕常常在幾天後就壞掉，所以工程師們正努力盡快解決這個問題。"
  },
  {
    "word": "mechanism",
    "pos": "n.",
    "cn_def": "機械裝置；機制",
    "en_def": "a set of moving parts in a machine that do a job",
    "sentence": "A: Why did the factory stop the production line for two hours this morning? B: The locking {{BLANK}} on one of the large doors was broken, and the safety manager said nobody could work nearby until a technician replaced the parts and checked that the door closed properly.",
    "cn": "A：為什麼工廠今天早上讓生產線停了兩個小時？ B：其中一扇大門上的鎖定【機械裝置】壞了，安全主管說在技術人員更換零件並確認門可以正常關閉之前，沒有人可以在附近工作。"
  },
  {
    "word": "material",
    "pos": "n.",
    "cn_def": "材料",
    "en_def": "a substance used to make things",
    "sentence": "A: Why are these new running shoes so much lighter than the ones we sold in our stores last year? B: The company found a new {{BLANK}} made from recycled plastic bottles, which is soft, strong, and cheap, so the shoes are lighter and also better for the environment.",
    "cn": "A：為什麼這些新款跑鞋比我們店裡去年賣的輕這麼多？ B：公司找到了一種用回收塑膠瓶製成的新【材料】，它柔軟、堅固又便宜，所以鞋子更輕，也對環境更好。"
  },
  {
    "word": "process",
    "pos": "n.",
    "cn_def": "過程；程序",
    "en_def": "a series of steps for doing or making something",
    "sentence": "A: Why does it take three weeks to get a new laptop from the IT department, even for urgent requests? B: The ordering {{BLANK}} has too many steps, because three different managers must sign the form, and the director plans to make it simpler before the end of the year.",
    "cn": "A：為什麼向資訊部門申請一台新筆電要花三週，就算是緊急需求也一樣？ B：訂購【程序】的步驟太多，因為必須有三位不同的經理在表格上簽名，主管打算在年底前把它簡化。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；改進",
    "en_def": "a change that makes something better",
    "sentence": "A: Have the customers said anything about the new version of our phone app that we released last week? B: Yes, most of them noticed a big {{BLANK}} in speed, because pages now open much faster, but a few people still want a bigger font for older users.",
    "cn": "A：顧客對我們上週推出的新版手機應用程式有什麼意見嗎？ B：有，大部分的人都注意到速度上有很大的【改善】，因為頁面現在開得快多了，不過還是有一些人希望為年長的使用者提供更大的字體。"
  },
  {
    "word": "patent",
    "pos": "n.",
    "cn_def": "專利",
    "en_def": "an official right to be the only one who makes or sells an invention",
    "sentence": "A: Why does the company's lawyer want to meet our engineers before we show the new battery at the trade fair? B: She wants to apply for a {{BLANK}} first, so other companies cannot legally copy our design and sell the same battery for the next twenty years.",
    "cn": "A：為什麼公司的律師想在我們於商展展示新電池之前先和工程師見面？ B：她想先申請【專利】，這樣其他公司在未來二十年內就無法合法抄襲我們的設計並販售相同的電池。"
  },
  {
    "word": "intellectual property",
    "pos": "n.phr.",
    "cn_def": "智慧財產",
    "en_def": "ideas, inventions, and creative work that belong to a person or company by law",
    "sentence": "A: Why do all new employees have to attend a two-hour training session with the legal team during their first week? B: The company wants them to understand how to protect our {{BLANK}}, such as software code, product designs, and brand names, so that no secrets are shared with competitors by mistake.",
    "cn": "A：為什麼所有新進員工在第一週都必須參加法務團隊兩小時的訓練課程？ B：公司希望他們了解如何保護我們的【智慧財產】，例如軟體程式碼、產品設計和品牌名稱，這樣才不會不小心把機密洩漏給競爭對手。"
  },
  {
    "word": "commercialize",
    "pos": "v.",
    "cn_def": "使商業化",
    "en_def": "to start selling a product or idea to make money",
    "sentence": "A: The university lab has invented a cheap water filter that works very well, so what are they planning to do next? B: They want to {{BLANK}} the filter by working with a local company, so it can be sold in supermarkets and help families in areas where clean water is hard to find.",
    "cn": "A：大學實驗室發明了一種便宜又非常有效的濾水器，他們接下來打算怎麼做？ B：他們想透過與一家本地公司合作，將這款濾水器【商業化】，讓它能在超市販售，幫助那些難以取得乾淨水源地區的家庭。"
  },
  {
    "word": "manufacture",
    "pos": "v.",
    "cn_def": "製造",
    "en_def": "to make goods in large numbers, usually in a factory",
    "sentence": "A: Why did the company decide to open a second factory in Vietnam instead of expanding the one here? B: It is much cheaper to {{BLANK}} the toys there, because land and wages cost less, and the new factory is also closer to many of our customers in Asia.",
    "cn": "A：為什麼公司決定在越南開設第二座工廠，而不是擴建這裡的工廠？ B：在那裡【製造】玩具便宜得多，因為土地和薪資成本較低，而且新工廠也更靠近我們許多亞洲的客戶。"
  },
  {
    "word": "market",
    "pos": "v.",
    "cn_def": "行銷；推銷",
    "en_def": "to advertise and sell a product",
    "sentence": "A: How will we tell young people about the new energy drink that comes out next month? B: We plan to {{BLANK}} it mainly through social media, with short videos made by popular online stars, because most of our target customers rarely watch TV or read newspapers.",
    "cn": "A：我們要如何讓年輕人知道下個月推出的新能量飲料？ B：我們計畫主要透過社群媒體來【行銷】它，搭配受歡迎網紅拍的短片，因為大多數目標顧客很少看電視或讀報紙。"
  },
  {
    "word": "breakthrough",
    "pos": "n.",
    "cn_def": "突破",
    "en_def": "an important new discovery or development",
    "sentence": "A: Why did the company's share price rise so sharply this morning? B: The research team announced a major {{BLANK}} in battery technology yesterday afternoon: their new battery can charge an electric car in only ten minutes, so investors expect strong sales in the coming years.",
    "cn": "A：為什麼公司的股價今天早上漲得這麼快？ B：研究團隊昨天下午宣布了電池科技的重大【突破】：他們的新電池只要十分鐘就能把電動車充飽電，所以投資人預期未來幾年銷售會很強勁。"
  },
  {
    "word": "practical",
    "pos": "adj.",
    "cn_def": "實用的",
    "en_def": "useful and suitable for real situations",
    "sentence": "A: Which of the two kitchen tools should we sell in our stores during the holiday season this year? B: I think the smaller one is more {{BLANK}}, because it is easy to clean, fits in any drawer, and many busy parents want simple tools that save time when they cook dinner.",
    "cn": "A：今年節慶期間我們店裡應該賣這兩種廚房工具中的哪一種？ B：我覺得比較小的那個更【實用】，因為它容易清洗，任何抽屜都放得下，而且很多忙碌的父母都想要能在做晚餐時節省時間的簡單工具。"
  },
  {
    "word": "experimental",
    "pos": "adj.",
    "cn_def": "實驗性的",
    "en_def": "new and still being tested",
    "sentence": "A: Can our hospital start using the new heart medicine for all of its patients next month? B: Not yet, because the drug is still {{BLANK}}, and the doctors can only give it to a small group of volunteers until the government checks the results of the tests.",
    "cn": "A：我們醫院下個月可以開始對所有病人使用這種新的心臟藥物嗎？ B：還不行，因為這種藥仍是【實驗性的】，在政府審查試驗結果之前，醫生只能讓一小群志願者使用。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原創的；獨創的",
    "en_def": "new and different from anything that existed before",
    "sentence": "A: Why did the judges choose our team's poster for first prize in the city's design competition? B: They said our idea was very {{BLANK}}, because nobody else had used old bus tickets to make a picture of the city, and they also liked the bright colors we chose.",
    "cn": "A：為什麼評審在市政府的設計比賽中選我們團隊的海報為第一名？ B：他們說我們的點子非常【原創】，因為沒有其他人用舊公車票拼出城市的圖案，而且他們也喜歡我們選的鮮豔顏色。"
  },
  {
    "word": "feasible",
    "pos": "adj.",
    "cn_def": "可行的",
    "en_def": "possible and likely to work",
    "sentence": "A: Is it really possible to move our whole office to the new building before the end of next month? B: The facilities manager says it is {{BLANK}} if we hire two moving companies and work over the weekends, but it will cost more than we planned in this year's budget.",
    "cn": "A：我們真的有可能在下個月底前把整個辦公室搬到新大樓嗎？ B：設施經理說，如果我們聘請兩家搬家公司並在週末加班，這是【可行的】，但花費會比我們今年預算中規劃的還要多。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響；衝擊",
    "en_def": "a strong effect on someone or something",
    "sentence": "A: How has the new online booking system changed things at the hotel since it started in June? B: It has had a huge {{BLANK}} on our business, because guests can now book rooms at any time, and the front desk staff have more time to help visitors with their questions.",
    "cn": "A：自從六月啟用新的線上訂房系統之後，飯店有了什麼改變？ B：它對我們的業務產生了巨大的【影響】，因為客人現在隨時都可以訂房，櫃台人員也有更多時間協助訪客解答問題。"
  }
];

const MCQS = [
  {
    "q": "The young _____ showed her new folding bicycle at the trade fair. Several companies offered to buy the rights to produce it.",
    "options": [
      "patent",
      "inventor",
      "material",
      "mechanism"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The company's latest _____ allows customers to pay for groceries simply by scanning their faces. Many shoppers say it saves them time.",
    "options": [
      "efficiency",
      "imagination",
      "creativity",
      "innovation"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The firm is known as one of the most _____ companies in Asia. It launches several creative new products every year.",
    "options": [
      "innovative",
      "feasible",
      "absent",
      "sudden"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Please turn off any electronic _____ before the presentation begins. The speaker has asked the audience not to record the session.",
    "options": [
      "concept",
      "patent",
      "device",
      "discovery"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The engineers built a _____ of the new drone to test it before mass production. It crashed twice, so they changed the wings.",
    "options": [
      "concept",
      "impact",
      "efficiency",
      "prototype"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The architect was hired to _____ a modern library for the city center. Her plans include a rooftop garden and large windows.",
    "options": [
      "market",
      "design",
      "commercialize",
      "invent"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The new shopping mall is expected to _____ more than five hundred jobs for local residents. Construction will begin early next year.",
    "options": [
      "market",
      "commercialize",
      "create",
      "manufacture"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Our software team needs another six months to _____ the new accounting program. Testing will start after the main features are finished.",
    "options": [
      "develop",
      "manufacture",
      "experiment",
      "decline"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The bank invested heavily in new security _____ to protect customer data. Online fraud has dropped sharply since the system was installed.",
    "options": [
      "creativity",
      "technology",
      "imagination",
      "discovery"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "According to recent _____, workers who take short breaks are more productive. The study followed two hundred office employees for a year.",
    "options": [
      "prototype",
      "mechanism",
      "patent",
      "research"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The scientists repeated the _____ three times to make sure the results were correct. Each test took about four hours in the lab.",
    "options": [
      "experiment",
      "innovation",
      "patent",
      "material"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The _____ of oil off the coast brought many new jobs to the small town. Several hotels and restaurants opened within a year.",
    "options": [
      "efficiency",
      "creativity",
      "discovery",
      "prototype"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The art director values _____ above everything else when she hires new designers. She wants staff who can produce fresh and unusual ideas.",
    "options": [
      "mechanism",
      "patent",
      "material",
      "creativity"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Children's book writers need a lot of _____ to invent magical worlds and talking animals. Many of them start by drawing pictures.",
    "options": [
      "efficiency",
      "imagination",
      "technology",
      "engineering"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The manager liked the basic _____ of the advertisement but asked for brighter colors. The final version is due next Friday.",
    "options": [
      "mechanism",
      "efficiency",
      "concept",
      "breakthrough"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The IT team finally found a _____ to the slow internet problem in the office. They installed a faster router on each floor.",
    "options": [
      "solution",
      "prototype",
      "patent",
      "material"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new conveyor belts have greatly improved the _____ of the packing department. Workers now pack twice as many boxes per hour.",
    "options": [
      "imagination",
      "efficiency",
      "concept",
      "patent"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The main _____ of this app is to help travelers find cheap hotels nearby. It also shows reviews from previous guests.",
    "options": [
      "material",
      "patent",
      "engineering",
      "function"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The door would not close because the locking _____ was broken. A technician replaced the old parts the next morning.",
    "options": [
      "mechanism",
      "concept",
      "imagination",
      "discovery"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The jackets are made from a light, waterproof _____ that dries quickly. They are popular with hikers and cyclists.",
    "options": [
      "concept",
      "innovation",
      "material",
      "research"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The company applied for a _____ to stop competitors from copying its new battery design. The application may take two years to approve.",
    "options": [
      "mechanism",
      "material",
      "creativity",
      "patent"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Scientists announced a major _____ in cancer treatment at the conference yesterday. The new drug will be tested on patients next year.",
    "options": [
      "material",
      "breakthrough",
      "mechanism",
      "prototype"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Our customers prefer _____ gifts, such as umbrellas and water bottles, that they can use every day. Decorative items rarely sell well.",
    "options": [
      "experimental",
      "feasible",
      "practical",
      "absent"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The engineers studied whether it was _____ to build a bridge across the river within two years. They decided the plan was too risky.",
    "options": [
      "feasible",
      "innovative",
      "original",
      "experimental"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Rising fuel prices have had a serious _____ on airline profits this year. Several airlines have raised ticket prices to cover costs.",
    "options": [
      "concept",
      "impact",
      "prototype",
      "creativity"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The university hopes to _____ its new water filter by partnering with a large company. The product could reach stores by next spring.",
    "options": [
      "experiment",
      "decline",
      "rely",
      "commercialize"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The factory in Kaohsiung will _____ about ten thousand phones a day once the new machines arrive. Most of them will be shipped to Europe.",
    "options": [
      "manufacture",
      "research",
      "experiment",
      "imagine"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The company plans to _____ its new shampoo mainly to young adults through social media. Short videos will be posted on several platforms.",
    "options": [
      "manufacture",
      "experiment",
      "market",
      "invent"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The judges praised the student's _____ idea, which no one had ever tried before. She received a scholarship and a small cash prize.",
    "options": [
      "feasible",
      "punctual",
      "nervous",
      "original"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The new medicine is still _____ and has not yet been approved by the government. Only volunteers can take it during the trial.",
    "options": [
      "original",
      "experimental",
      "practical",
      "innovative"
    ],
    "answer": 1,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "inventor": {
    "pos": "n.",
    "en_def": "a person who creates something new that did not exist before",
    "cn_def": "發明家"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method, or product",
    "cn_def": "創新；新發明"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new and creative ideas",
    "cn_def": "創新的"
  },
  "device": {
    "pos": "n.",
    "en_def": "a small machine or tool made for a special purpose",
    "cn_def": "裝置；設備"
  },
  "prototype": {
    "pos": "n.",
    "en_def": "the first model of something, made to test it",
    "cn_def": "原型；樣品"
  },
  "design": {
    "pos": "v.",
    "en_def": "to plan and draw how something will look and work",
    "cn_def": "設計"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創造；建立"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to make a new product or idea grow and become ready",
    "cn_def": "開發；發展"
  },
  "technology": {
    "pos": "n.",
    "en_def": "scientific knowledge used to make useful machines and tools",
    "cn_def": "科技；技術"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads, bridges, etc.",
    "cn_def": "工程學；工程"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to find new facts",
    "cn_def": "研究"
  },
  "experiment": {
    "pos": "n.",
    "en_def": "a scientific test to see what happens",
    "cn_def": "實驗"
  },
  "discovery": {
    "pos": "n.",
    "en_def": "the act of finding something new",
    "cn_def": "發現"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new and original things",
    "cn_def": "創造力"
  },
  "imagination": {
    "pos": "n.",
    "en_def": "the ability to form pictures or ideas in your mind",
    "cn_def": "想像力"
  },
  "concept": {
    "pos": "n.",
    "en_def": "a general idea or plan",
    "cn_def": "概念"
  },
  "solution": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "解決辦法"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "the quality of doing something well without wasting time or money",
    "cn_def": "效率"
  },
  "function": {
    "pos": "n.",
    "en_def": "the purpose or job that something does",
    "cn_def": "功能"
  },
  "mechanism": {
    "pos": "n.",
    "en_def": "a set of moving parts in a machine that do a job",
    "cn_def": "機械裝置；機制"
  },
  "material": {
    "pos": "n.",
    "en_def": "a substance used to make things",
    "cn_def": "材料"
  },
  "process": {
    "pos": "n.",
    "en_def": "a series of steps for doing or making something",
    "cn_def": "過程；程序"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better",
    "cn_def": "改善；改進"
  },
  "patent": {
    "pos": "n.",
    "en_def": "an official right to be the only one who makes or sells an invention",
    "cn_def": "專利"
  },
  "intellectual property": {
    "pos": "n.phr.",
    "en_def": "ideas, inventions, and creative work that belong to a person or company by law",
    "cn_def": "智慧財產"
  },
  "commercialize": {
    "pos": "v.",
    "en_def": "to start selling a product or idea to make money",
    "cn_def": "使商業化"
  },
  "manufacture": {
    "pos": "v.",
    "en_def": "to make goods in large numbers, usually in a factory",
    "cn_def": "製造"
  },
  "market": {
    "pos": "v.",
    "en_def": "to advertise and sell a product",
    "cn_def": "行銷；推銷"
  },
  "breakthrough": {
    "pos": "n.",
    "en_def": "an important new discovery or development",
    "cn_def": "突破"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "useful and suitable for real situations",
    "cn_def": "實用的"
  },
  "experimental": {
    "pos": "adj.",
    "en_def": "new and still being tested",
    "cn_def": "實驗性的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "new and different from anything that existed before",
    "cn_def": "原創的；獨創的"
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible and likely to work",
    "cn_def": "可行的"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on someone or something",
    "cn_def": "影響；衝擊"
  }
};

const EXTRA_GLOSSES = {};
