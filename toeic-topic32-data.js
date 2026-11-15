// Topic 32 Quiz Data: Bookstore 書店
// Source word list: https://www.examword.com/group-topic/bookstore — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T32 - Bookstore 書店",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bookshelf",
    "pos": "n.",
    "cn_def": "書架",
    "en_def": "a piece of furniture with shelves for books",
    "sentence": "A: The new store manager wants the travel guides to be easier for visitors to find, so where should we put the boxes that arrived from the publisher this morning? B: Let's move them to the tall {{BLANK}} next to the front window, because tourists usually walk in from the street and look there first before they explore the rest of the shop.",
    "cn": "A：新店長希望旅遊指南能讓客人更容易找到，那今天早上出版社送來的那幾箱書我們該放在哪裡？ B：我們把它們移到前窗旁邊那個高高的【書架】上吧，因為觀光客通常從街上走進來，會先看那裡，再逛店裡其他地方。"
  },
  {
    "word": "aisle",
    "pos": "n.",
    "cn_def": "走道",
    "en_def": "a long, narrow path between rows of shelves or seats",
    "sentence": "A: A woman just called to ask where she can find our cookbooks, but I only started working here yesterday, so do you know where they are? B: Tell her to walk past the cashier and turn left into the third {{BLANK}}, where the cookbooks are on the lower shelves right beside the gardening magazines.",
    "cn": "A：有位女士剛打電話來問我們的食譜書在哪裡，但我昨天才開始在這裡上班，你知道在哪嗎？ B：告訴她走過收銀員後左轉進入第三條【走道】，食譜書就在園藝雜誌旁邊的下層架子上。"
  },
  {
    "word": "section",
    "pos": "n.",
    "cn_def": "區；部分",
    "en_def": "one part or area of a store, book, or place",
    "sentence": "A: Our sales report shows that more parents are buying learning materials for young kids this year, so how should we change the layout of the second floor? B: I think we should make the children's {{BLANK}} bigger and add some small chairs and tables, so families can sit together and read before they decide what to buy.",
    "cn": "A：我們的銷售報告顯示今年有更多家長購買幼兒學習教材，那我們應該怎麼調整二樓的配置？ B：我認為我們應該把兒童【區】擴大，並增加一些小椅子和小桌子，讓家人可以先坐在一起閱讀，再決定要買什麼。"
  },
  {
    "word": "genre",
    "pos": "n.",
    "cn_def": "類型；體裁",
    "en_def": "a type or style of book, film, or music",
    "sentence": "A: Since the store is planning a summer promotion for adult readers, which kind of story do you think we should feature on the big table near the entrance? B: Mystery is the most popular {{BLANK}} among our regular shoppers, especially office workers who like exciting stories during their long train rides home, so let's choose that.",
    "cn": "A：既然書店計畫為成人讀者舉辦夏季促銷，你覺得我們應該在入口附近的大桌子上主打哪一類故事？ B：推理小說是我們常客最喜歡的【類型】，尤其是喜歡在漫長回家火車上看刺激故事的上班族，所以就選這個吧。"
  },
  {
    "word": "display",
    "pos": "n.",
    "cn_def": "陳列；展示",
    "en_def": "an arrangement of things put out for people to see",
    "sentence": "A: The publisher is sending us fifty copies of the new cookbook next Monday, so how can we make sure people notice it as soon as they come in? B: We could build a colorful {{BLANK}} near the front door with a few sample dishes, some posters, and a sign showing the special opening price for the first week.",
    "cn": "A：出版社下週一會寄五十本新食譜書給我們，我們要怎麼確保客人一進門就注意到它？ B：我們可以在前門附近佈置一個色彩繽紛的【陳列】，擺上幾道範例菜餚、一些海報，以及標示第一週特別開幕價的牌子。"
  },
  {
    "word": "counter",
    "pos": "n.",
    "cn_def": "櫃檯",
    "en_def": "a long, flat surface where customers are served",
    "sentence": "A: Where should customers pick up the books they ordered online, since many of them complain that they can't find anyone to help them when they arrive? B: From next week, they can go straight to the service {{BLANK}} beside the entrance, where one employee will check their order number and hand them their package.",
    "cn": "A：顧客應該在哪裡領取他們網路訂購的書？很多人抱怨到店時找不到人幫忙。 B：從下週開始，他們可以直接到入口旁的服務【櫃檯】，會有一位員工核對訂單編號並把包裹交給他們。"
  },
  {
    "word": "cashier",
    "pos": "n.",
    "cn_def": "收銀員",
    "en_def": "a person whose job is to take payments in a store",
    "sentence": "A: The lines at the front of the store were really long on Saturday afternoon, and several shoppers left without buying anything, so what can we do about it? B: The manager has decided to hire another part-time {{BLANK}} for weekends, so two people can take payments at the same time when the store gets busy.",
    "cn": "A：星期六下午店門口排隊的人潮很長，好幾位客人什麼都沒買就走了，我們能怎麼辦？ B：經理決定在週末再雇用一位兼職【收銀員】，這樣店裡忙碌時就能有兩個人同時收款。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客",
    "en_def": "a person who buys things from a store or business",
    "sentence": "A: Why does the store manager want everyone to learn the names of the people who come in every week, even though we are always so busy? B: She believes that when a regular {{BLANK}} feels welcome and remembered, he or she will keep coming back and will probably tell friends about our shop too.",
    "cn": "A：為什麼店長要大家記住每週都來的人的名字，即使我們總是這麼忙？ B：她相信當一位常來的【顧客】覺得受到歡迎、被記住時，就會一直回來，而且很可能也會跟朋友介紹我們的店。"
  },
  {
    "word": "browse",
    "pos": "v.",
    "cn_def": "瀏覽；隨意看看",
    "en_def": "to look at things in a store without a clear plan to buy",
    "sentence": "A: Do you think it is a good idea to put some comfortable chairs near the travel section, even though people might sit there for hours without buying anything? B: Yes, because many visitors like to {{BLANK}} for a while before they choose something, and if they feel relaxed, they usually end up buying more than one item.",
    "cn": "A：你覺得在旅遊區附近放幾張舒適的椅子是個好主意嗎？即使有人可能在那裡坐上好幾個小時卻什麼都不買。 B：是的，因為很多客人喜歡先【瀏覽】一會兒再做選擇，而且如果他們感到放鬆，最後通常會買不只一樣東西。"
  },
  {
    "word": "purchase",
    "pos": "v.",
    "cn_def": "購買",
    "en_def": "to buy something",
    "sentence": "A: The school librarian called this morning and said she has a budget for new English readers, but she isn't sure how many copies she can afford this year. B: If she decides to {{BLANK}} more than thirty copies at once, we can give her a fifteen percent discount and deliver the boxes to her school for free.",
    "cn": "A：學校圖書館員今天早上打電話來說她有預算買新的英文讀本，但她不確定今年能負擔幾本。 B：如果她決定一次【購買】超過三十本，我們可以給她八五折，並免費把書送到她的學校。"
  },
  {
    "word": "checkout",
    "pos": "n.",
    "cn_def": "結帳處；結帳",
    "en_def": "the place in a store where you pay for things; the act of paying",
    "sentence": "A: Several shoppers wrote online that paying at our store takes too long, especially in the evening after work, so what is the company planning to do? B: Head office is installing a self-service {{BLANK}} machine next month, so people with only one or two items can pay by card quickly without waiting in line.",
    "cn": "A：好幾位顧客在網路上寫說在我們店裡付款太久，尤其是下班後的晚上，公司打算怎麼做？ B：總公司下個月會安裝一台自助【結帳】機，這樣只買一兩樣東西的人就能快速刷卡付款，不用排隊。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據",
    "en_def": "a piece of paper that shows you paid for something",
    "sentence": "A: A woman wants to return a cookbook she bought as a gift last week because her friend already has a copy, so can we give her the money back? B: Yes, as long as she shows the {{BLANK}} and the book is still in good condition, we can return the money to her credit card or give her store credit.",
    "cn": "A：有位女士想退回她上週買來送人的食譜，因為她朋友已經有一本了，我們可以退錢給她嗎？ B：可以，只要她出示【收據】而且書的狀況仍然良好，我們就可以把錢退到她的信用卡，或給她店內購物金。"
  },
  {
    "word": "bestseller",
    "pos": "n.",
    "cn_def": "暢銷書",
    "en_def": "a book that sells a very large number of copies",
    "sentence": "A: Why did the store order so many extra copies of that new business book, even though most new titles only sell a few copies each week? B: The author was interviewed on a popular TV program last night, and the book has become a {{BLANK}} in just a few days, so we expect lots of people to ask for it.",
    "cn": "A：為什麼書店多訂了那麼多本那本新的商業書？大部分新書每週只賣出幾本而已。 B：作者昨晚上了一個熱門電視節目接受訪問，這本書短短幾天就成了【暢銷書】，所以我們預期會有很多人來問。"
  },
  {
    "word": "staff",
    "pos": "n.",
    "cn_def": "員工；職員",
    "en_def": "the people who work for a business",
    "sentence": "A: The holiday season is our busiest time of the year, so what is the manager doing to make sure customers get help quickly when they come in? B: She is hiring extra {{BLANK}} for December, and every new employee will get two days of training on the cash register and our online ordering system.",
    "cn": "A：假期是一年中最忙的時候，經理打算怎麼確保顧客一進來就能很快得到協助？ B：她正在為十二月招募額外的【員工】，每位新進人員都會接受兩天的收銀機和線上訂購系統訓練。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦",
    "en_def": "to say that something is good and suggest it to someone",
    "sentence": "A: A businessman just asked me for a good book to read on his long flight to London tomorrow, but I don't know much about his interests at all. B: Ask him what kinds of stories he enjoyed in the past, and then {{BLANK}} two or three titles from our staff favorites table near the cashier.",
    "cn": "A：一位商人剛問我有沒有好書可以在他明天飛往倫敦的長途航班上看，但我完全不了解他的興趣。 B：問問他以前喜歡哪類故事，然後從收銀台附近的員工推薦桌上【推薦】兩三本書給他。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making little or no noise",
    "sentence": "A: Why do so many university students come to our café on the second floor in the afternoon, even though there is a larger coffee shop across the street? B: They say our place is much more {{BLANK}} than other cafés nearby, so they can study for their exams and read without being disturbed by loud music or noisy groups.",
    "cn": "A：為什麼下午有那麼多大學生來我們二樓的咖啡廳，即使對街就有一家更大的咖啡店？ B：他們說我們這裡比附近其他咖啡廳【安靜】多了，所以他們可以準備考試、看書，不會被大聲的音樂或吵鬧的團體打擾。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "溫暖舒適的",
    "en_def": "warm, comfortable, and relaxing",
    "sentence": "A: The designer has shown us the plans for the new reading corner, but what kind of feeling does the owner want customers to have when they sit down there? B: She wants it to feel warm and {{BLANK}}, like a living room at home, with soft lamps, a thick carpet, and comfortable armchairs where people can relax for hours.",
    "cn": "A：設計師已經給我們看了新閱讀角的規劃，但老闆希望顧客坐在那裡時有什麼樣的感覺？ B：她希望那裡感覺溫暖又【舒適】，就像家裡的客廳一樣，有柔和的檯燈、厚地毯和舒服的扶手椅，讓人可以放鬆好幾個小時。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的",
    "en_def": "not owned or controlled by a larger company",
    "sentence": "A: How is your small shop able to survive when the big online companies sell most books at much lower prices than you can offer? B: As an {{BLANK}} store that is not owned by a large company, we can choose unusual titles, hold local events, and give personal advice that people cannot get from a website.",
    "cn": "A：當大型網路公司賣的書大多比你們便宜很多時，你們這家小店要怎麼生存？ B：身為一家不屬於大公司的【獨立】書店，我們可以挑選特別的書、舉辦地方活動，並提供網站無法給的個人化建議。"
  },
  {
    "word": "chain",
    "pos": "n.",
    "cn_def": "連鎖店",
    "en_def": "a group of shops owned by the same company",
    "sentence": "A: I heard the old bookshop on Main Street was sold last month, so do you know whether the new owners are going to keep the same name and employees? B: It was bought by a national {{BLANK}} with more than two hundred stores, so they will probably change the sign and use the same design as their other branches.",
    "cn": "A：我聽說主街上那家老書店上個月被賣掉了，你知道新老闆會保留原來的店名和員工嗎？ B：它被一家擁有兩百多家門市的全國【連鎖店】買下了，所以他們可能會換招牌，並採用和其他分店一樣的設計。"
  },
  {
    "word": "inventory",
    "pos": "n.",
    "cn_def": "存貨；庫存清單",
    "en_def": "all the goods a store has; a list of these goods",
    "sentence": "A: Why is the store closing early this Sunday afternoon, since weekends are usually when we make most of our sales? B: All employees need to count every book and magazine on the shelves and in the storeroom, because the accountant needs an exact record of our {{BLANK}} before the end of the financial year.",
    "cn": "A：為什麼書店這週日下午要提早打烊？週末通常是我們銷售最多的時候。 B：所有員工都需要清點架上和倉庫裡的每一本書和雜誌，因為會計師需要在會計年度結束前取得我們【存貨】的精確紀錄。"
  },
  {
    "word": "hardcover",
    "pos": "n.",
    "cn_def": "精裝本",
    "en_def": "a book with a strong, stiff cover",
    "sentence": "A: A customer wants to buy the new history book as a birthday gift for her grandfather, so which version should I suggest to her? B: Suggest the {{BLANK}}, because it has a strong, beautiful cover that will last for many years, even though it costs about ten dollars more than the soft version.",
    "cn": "A：有位顧客想買那本新的歷史書當作送給祖父的生日禮物，我該建議她哪一個版本？ B：建議她買【精裝本】，因為它有堅固又漂亮的封面，可以保存很多年，雖然比軟皮版貴大約十元。"
  },
  {
    "word": "paperback",
    "pos": "n.",
    "cn_def": "平裝本",
    "en_def": "a book with a soft paper cover",
    "sentence": "A: Many students say our textbooks and novels are too heavy to carry around in their school bags every day, so is there anything cheaper and lighter we can offer? B: Yes, most of those titles are also available in {{BLANK}}, which is much lighter and usually costs about half the price of the hard version.",
    "cn": "A：很多學生說我們的教科書和小說太重，不適合每天放在書包裡帶著走，有沒有更便宜、更輕的選擇？ B：有，那些書大多也有【平裝本】，輕很多，價格通常只有精裝版的一半左右。"
  },
  {
    "word": "magazine",
    "pos": "n.",
    "cn_def": "雜誌",
    "en_def": "a thin publication with articles and photos that comes out regularly",
    "sentence": "A: The owner wants to attract more young office workers who stop by during their lunch break, so what kind of products should we add near the entrance? B: Let's add a rack with a monthly business {{BLANK}}, some fashion titles, and a few travel guides, because people can read them quickly while they wait for their coffee.",
    "cn": "A：老闆想吸引更多午休時間順道進來的年輕上班族，我們應該在入口附近加哪類商品？ B：我們加一個架子，擺放每月出刊的商業【雜誌】、一些時尚刊物和幾本旅遊指南吧，因為大家等咖啡時可以快速翻閱。"
  },
  {
    "word": "stationery",
    "pos": "n.",
    "cn_def": "文具",
    "en_def": "paper, pens, envelopes, and other writing materials",
    "sentence": "A: Sales of books have been slow this spring, so is there anything else we can sell to bring more students and office workers into the shop? B: The manager plans to add a {{BLANK}} corner with notebooks, pens, envelopes, and greeting cards, since people often need these items for school, work, and special occasions.",
    "cn": "A：今年春天書籍銷售一直很慢，我們有沒有其他東西可以賣，吸引更多學生和上班族來店裡？ B：經理打算增設一個【文具】區，販售筆記本、筆、信封和賀卡，因為大家上學、上班和特殊場合常常需要這些東西。"
  },
  {
    "word": "signing",
    "pos": "n.",
    "cn_def": "簽書會；簽名活動",
    "en_def": "an event where an author signs copies of a book",
    "sentence": "A: Why are there so many people waiting outside the store with copies of that new novel this morning, even though we don't open until ten o'clock? B: The famous author is coming at eleven for a book {{BLANK}}, so fans want to be first in line to meet her and get their copies autographed.",
    "cn": "A：為什麼今天早上有這麼多人拿著那本新小說在店外等？我們十點才開門。 B：那位知名作家十一點會來舉辦新書【簽書會】，所以書迷們想排在最前面跟她見面並取得簽名書。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "a planned public or social occasion",
    "sentence": "A: The owner wants to bring more families into the shop on weekends, so do you have any ideas that won't cost the company too much money? B: We could hold a free storytelling {{BLANK}} for children every Saturday morning, and parents could look around and buy books while their kids listen to the stories.",
    "cn": "A：老闆想在週末吸引更多家庭來店裡，你有沒有不會讓公司花太多錢的點子？ B：我們可以每週六早上為孩子舉辦免費的說故事【活動】，家長可以在孩子聽故事時四處逛逛、買書。"
  },
  {
    "word": "reading",
    "pos": "n.",
    "cn_def": "朗讀會；閱讀",
    "en_def": "an event where a writer reads his or her work aloud to an audience",
    "sentence": "A: The poet who wrote that new collection is visiting our city next week, so is the store planning anything special for her visit? B: Yes, she will give a public {{BLANK}} of her poems in the café on Thursday evening, and afterwards guests can ask her questions about her work and her writing habits.",
    "cn": "A：寫那本新詩集的詩人下週要來我們城市，書店有計畫為她的來訪安排什麼特別活動嗎？ B：有，她星期四晚上會在咖啡廳舉行公開詩作【朗讀會】，之後來賓可以問她有關作品和寫作習慣的問題。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "the people who live in one area",
    "sentence": "A: Why does our store offer its meeting room for free to local book clubs and parent groups, even though we could rent it out to companies instead? B: The owner believes a bookstore should be an important part of the neighborhood {{BLANK}}, and when local people feel connected to the shop, they support it for many years.",
    "cn": "A：為什麼我們書店免費提供會議室給當地讀書會和家長團體使用，明明可以租給公司？ B：老闆相信書店應該成為鄰近【社區】重要的一部分，而當地居民對書店有歸屬感時，他們會支持它很多年。"
  },
  {
    "word": "literary",
    "pos": "adj.",
    "cn_def": "文學的",
    "en_def": "connected with literature or serious writing",
    "sentence": "A: The store has been asked to organize a weekend festival with famous writers, poets, and university professors, so what should we call it on the posters? B: Let's call it a {{BLANK}} festival, because the program focuses on novels, poetry, and serious writing, and that name will attract readers who love good books.",
    "cn": "A：書店受邀籌辦一場有知名作家、詩人和大學教授參加的週末節慶，我們在海報上該怎麼稱呼它？ B：就叫它【文學】節吧，因為節目重點是小說、詩和嚴肅寫作，這個名稱會吸引喜愛好書的讀者。"
  }
];

const MCQS = [
  {
    "q": "We need a new _____ for the office meeting room. The old one is full of training manuals and company reports.",
    "options": [
      "cashier",
      "bookshelf",
      "receipt",
      "signing"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The cleaning supplies have moved to a different _____ of the supermarket. Shoppers can now find them next to the pet food.",
    "options": [
      "signing",
      "genre",
      "receipt",
      "aisle"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Please read the safety _____ of the employee handbook before Friday. It explains what to do during a fire alarm.",
    "options": [
      "section",
      "paperback",
      "cashier",
      "bestseller"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Science fiction is not my favorite _____ of film. I usually prefer comedies or documentaries about nature and travel.",
    "options": [
      "inventory",
      "receipt",
      "genre",
      "counter"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The jewelry shop changed its window _____ for the holiday season. It now shows gold rings on a bed of fake snow.",
    "options": [
      "checkout",
      "display",
      "chain",
      "staff"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Hotel guests should leave their room keys at the reception _____ before noon. A staff member will then print their final bill.",
    "options": [
      "genre",
      "community",
      "magazine",
      "counter"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The supermarket is looking for a friendly _____ to work on weekends. The job includes taking payments and helping shoppers pack bags.",
    "options": [
      "cashier",
      "receipt",
      "inventory",
      "chain"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Our company values every _____ who calls the help line. Please answer each call politely and solve the problem as quickly as possible.",
    "options": [
      "paperback",
      "stationery",
      "customer",
      "aisle"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Visitors are welcome to _____ through the online catalog before they place an order. It lists all products with prices and photos.",
    "options": [
      "browse",
      "recommend",
      "display",
      "purchase"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Employees who _____ office supplies with their own money must keep the receipts. The finance team will pay them back within two weeks.",
    "options": [
      "display",
      "browse",
      "purchase",
      "recommend"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The online store added a faster _____ process last month. Customers can now pay with one click after they choose their items.",
    "options": [
      "genre",
      "checkout",
      "signing",
      "aisle"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Please attach the original _____ to your travel expense form. The accounting department cannot pay you back without proof of payment.",
    "options": [
      "magazine",
      "genre",
      "bookshelf",
      "receipt"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The marketing director's book on leadership became a _____ within one month. More than one million copies have now been sold worldwide.",
    "options": [
      "bestseller",
      "aisle",
      "inventory",
      "cashier"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "All _____ must attend the training session on the new computer system. It will take place in Conference Room B on Tuesday.",
    "options": [
      "receipt",
      "genre",
      "staff",
      "checkout"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Could you _____ a good restaurant near the convention center? I need to take three important clients to dinner tomorrow night.",
    "options": [
      "browse",
      "recommend",
      "display",
      "purchase"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Please keep your voices _____ in the library study area. Many students are preparing for their final exams this week.",
    "options": [
      "independent",
      "literary",
      "cozy",
      "quiet"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The small hotel has warm blankets and a fireplace in every room. Guests often say it feels very _____ on cold winter nights.",
    "options": [
      "literary",
      "independent",
      "cozy",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The film was made by an _____ studio with a very small budget. It still won three awards at the international festival.",
    "options": [
      "cozy",
      "independent",
      "literary",
      "quiet"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The coffee _____ plans to open twenty new stores across Asia next year. Each shop will hire about fifteen local workers.",
    "options": [
      "chain",
      "section",
      "display",
      "counter"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The warehouse manager checks the _____ every Friday afternoon. This helps the company know when to order more products from suppliers.",
    "options": [
      "signing",
      "community",
      "genre",
      "inventory"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The library bought the _____ edition of the dictionary because it is stronger. Students use it every day, so it must last for years.",
    "options": [
      "paperback",
      "magazine",
      "hardcover",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The novel will come out in _____ next month at a much lower price. Many readers have been waiting for this cheaper version.",
    "options": [
      "magazine",
      "inventory",
      "hardcover",
      "paperback"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Our company placed a full-page advertisement in a popular travel _____. It will appear in the June issue next week.",
    "options": [
      "magazine",
      "cashier",
      "aisle",
      "receipt"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The office manager orders _____ such as pens, envelopes, and printer paper every month. Staff can request extra items by email.",
    "options": [
      "signing",
      "stationery",
      "community",
      "genre"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The famous chef will hold a book _____ at the mall on Saturday afternoon. Fans can meet her and get their cookbooks autographed.",
    "options": [
      "signing",
      "chain",
      "section",
      "counter"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The hotel ballroom can hold up to five hundred guests. It is a perfect place for a large company _____ such as an awards dinner.",
    "options": [
      "aisle",
      "genre",
      "receipt",
      "event"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The author gave a short _____ from her new novel at the city library. Afterward, she answered questions from the audience.",
    "options": [
      "receipt",
      "inventory",
      "reading",
      "checkout"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The company donates money to the local _____ every year. Last spring it helped build a new playground in the neighborhood park.",
    "options": [
      "checkout",
      "community",
      "genre",
      "cashier"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The newspaper hired a new _____ critic to review novels and poetry. Her first article will appear in this Sunday's edition.",
    "options": [
      "literary",
      "quiet",
      "cozy",
      "genre"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Doctors usually _____ that office workers stand up and stretch every hour. This simple habit can reduce back pain and stress.",
    "options": [
      "display",
      "browse",
      "recommend",
      "purchase"
    ],
    "answer": 2,
    "vocabIndex": 14
  }
];

const LOOKUP = {
  "bookshelf": {
    "pos": "n.",
    "en_def": "a piece of furniture with shelves for books",
    "cn_def": "書架"
  },
  "aisle": {
    "pos": "n.",
    "en_def": "a long, narrow path between rows of shelves or seats",
    "cn_def": "走道"
  },
  "section": {
    "pos": "n.",
    "en_def": "one part or area of a store, book, or place",
    "cn_def": "區；部分"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type or style of book, film, or music",
    "cn_def": "類型；體裁"
  },
  "display": {
    "pos": "n.",
    "en_def": "an arrangement of things put out for people to see",
    "cn_def": "陳列；展示"
  },
  "counter": {
    "pos": "n.",
    "en_def": "a long, flat surface where customers are served",
    "cn_def": "櫃檯"
  },
  "cashier": {
    "pos": "n.",
    "en_def": "a person whose job is to take payments in a store",
    "cn_def": "收銀員"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys things from a store or business",
    "cn_def": "顧客"
  },
  "browse": {
    "pos": "v.",
    "en_def": "to look at things in a store without a clear plan to buy",
    "cn_def": "瀏覽；隨意看看"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something",
    "cn_def": "購買"
  },
  "checkout": {
    "pos": "n.",
    "en_def": "the place in a store where you pay for things; the act of paying",
    "cn_def": "結帳處；結帳"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows you paid for something",
    "cn_def": "收據"
  },
  "bestseller": {
    "pos": "n.",
    "en_def": "a book that sells a very large number of copies",
    "cn_def": "暢銷書"
  },
  "staff": {
    "pos": "n.",
    "en_def": "the people who work for a business",
    "cn_def": "員工；職員"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that something is good and suggest it to someone",
    "cn_def": "推薦"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making little or no noise",
    "cn_def": "安靜的"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable, and relaxing",
    "cn_def": "溫暖舒適的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "not owned or controlled by a larger company",
    "cn_def": "獨立的"
  },
  "chain": {
    "pos": "n.",
    "en_def": "a group of shops owned by the same company",
    "cn_def": "連鎖店"
  },
  "inventory": {
    "pos": "n.",
    "en_def": "all the goods a store has; a list of these goods",
    "cn_def": "存貨；庫存清單"
  },
  "hardcover": {
    "pos": "n.",
    "en_def": "a book with a strong, stiff cover",
    "cn_def": "精裝本"
  },
  "paperback": {
    "pos": "n.",
    "en_def": "a book with a soft paper cover",
    "cn_def": "平裝本"
  },
  "magazine": {
    "pos": "n.",
    "en_def": "a thin publication with articles and photos that comes out regularly",
    "cn_def": "雜誌"
  },
  "stationery": {
    "pos": "n.",
    "en_def": "paper, pens, envelopes, and other writing materials",
    "cn_def": "文具"
  },
  "signing": {
    "pos": "n.",
    "en_def": "an event where an author signs copies of a book",
    "cn_def": "簽書會；簽名活動"
  },
  "event": {
    "pos": "n.",
    "en_def": "a planned public or social occasion",
    "cn_def": "活動"
  },
  "reading": {
    "pos": "n.",
    "en_def": "an event where a writer reads his or her work aloud to an audience",
    "cn_def": "朗讀會；閱讀"
  },
  "community": {
    "pos": "n.",
    "en_def": "the people who live in one area",
    "cn_def": "社區；社群"
  },
  "literary": {
    "pos": "adj.",
    "en_def": "connected with literature or serious writing",
    "cn_def": "文學的"
  }
};

const EXTRA_GLOSSES = {};
