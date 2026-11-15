// Topic 51 Quiz Data: Charity 慈善
// Source word list: https://www.examword.com/group-topic/charity — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T51 - Charity 慈善",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "donation",
    "pos": "n.",
    "cn_def": "捐款；捐贈物",
    "en_def": "money or goods given to help people or a group",
    "sentence": "A: The hospital's children's ward needs new beds and toys before the winter holidays, so how can our company help them without spending too much time on planning? B: We could ask every department to make a small {{BLANK}} this month, and the finance team will collect the money and send it to the hospital together.",
    "cn": "A：醫院的兒童病房在寒假前需要新的病床和玩具，我們公司要怎麼幫忙又不必花太多時間規劃？ B：我們可以請每個部門這個月做一筆小額【捐款】，由財務團隊收齊後一起送到醫院。"
  },
  {
    "word": "donate",
    "pos": "v.",
    "cn_def": "捐贈；捐款",
    "en_def": "to give money or things to help others",
    "sentence": "A: Our office is moving to the new building downtown next month, and we have dozens of old desks, chairs, and computers that still work well, so what should we do with them? B: I called a local school yesterday, and they would be very happy if we {{BLANK}} the furniture and computers to their new library.",
    "cn": "A：我們辦公室下個月要搬到市中心的新大樓，我們有好幾十張還能用的舊桌椅和電腦，該怎麼處理？ B：我昨天打電話給一所當地學校，如果我們把家具和電腦【捐贈】給他們的新圖書館，他們會非常開心。"
  },
  {
    "word": "volunteer",
    "pos": "v.",
    "cn_def": "自願做；當志工",
    "en_def": "to offer to do work without being paid",
    "sentence": "A: The community center is organizing a beach clean-up on Saturday morning, but they still need about twenty more people to pick up trash and carry bags, so are you free that day? B: Yes, my sister and I both want to {{BLANK}}, because we often swim there and are worried about all the plastic on the sand.",
    "cn": "A：社區中心週六早上要舉辦淨灘活動，但他們還需要大約二十個人撿垃圾和搬袋子，你那天有空嗎？ B：有，我和我姊姊都想去【當志工】，因為我們常在那裡游泳，很擔心沙灘上那些塑膠垃圾。"
  },
  {
    "word": "fundraising",
    "pos": "n.",
    "cn_def": "募款",
    "en_def": "the activity of collecting money for a cause",
    "sentence": "A: The school orchestra wants to travel to Japan for an international music competition next spring, but the trip will cost a lot of money, so how will the parents pay for it? B: They are planning a big {{BLANK}} effort, including a bake sale, a concert, and an online page where friends and relatives can give money.",
    "cn": "A：學校管弦樂團明年春天想去日本參加國際音樂比賽，但這趟旅程要花很多錢，家長們要怎麼負擔？ B：他們正在規劃一場大型【募款】活動，包括義賣烘焙點心、一場音樂會，還有一個讓親友可以捐錢的網頁。"
  },
  {
    "word": "fundraiser",
    "pos": "n.",
    "cn_def": "募款活動",
    "en_def": "an event held to collect money for a cause",
    "sentence": "A: I saw on the company website that the marketing team rented the hotel ballroom next Friday evening, so is it for a product launch or a party? B: Neither, it is a {{BLANK}} for the children's hospital, and tickets cost two thousand dollars each, with all the money going to buy medical equipment.",
    "cn": "A：我在公司網站上看到行銷團隊租了下週五晚上的飯店宴會廳，是要辦產品發表會還是派對？ B：都不是，那是為兒童醫院舉辦的【募款活動】，每張票兩千元，所有收入都會用來購買醫療設備。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；援助",
    "en_def": "to help someone, often by giving money or encouragement",
    "sentence": "A: Many small farms in the mountains lost most of their fruit after the typhoon last week, and the farmers are worried about paying their bills, so is there anything our supermarket chain can do? B: We could {{BLANK}} them by buying their remaining fruit at a fair price and selling it in our stores with a special sign.",
    "cn": "A：上週颱風過後，山區許多小農場損失了大部分的水果，農民們擔心付不出帳單，我們連鎖超市能做些什麼嗎？ B：我們可以用合理的價格收購他們剩下的水果，並在店裡放上特別標示販售，以此來【支持】他們。"
  },
  {
    "word": "aid",
    "pos": "n.",
    "cn_def": "援助；救援物資",
    "en_def": "help such as food, money, or medicine given to people in need",
    "sentence": "A: After the earthquake destroyed several villages in the south, many families had no food, clean water, or blankets, so how did the government respond so quickly? B: It sent trucks full of emergency {{BLANK}} within twenty-four hours, and the army helped deliver everything to the areas that were hardest to reach.",
    "cn": "A：地震摧毀了南部幾個村莊後，許多家庭沒有食物、乾淨的水或毯子，政府怎麼能那麼快回應？ B：它在二十四小時內派出滿載緊急【援助物資】的卡車，軍隊也協助把物資送到最難抵達的地區。"
  },
  {
    "word": "relief",
    "pos": "n.",
    "cn_def": "救濟；救援",
    "en_def": "food, money, or help given to people after a disaster",
    "sentence": "A: The flood last weekend left hundreds of people in the river town without homes, and many of them are staying in schools, so what is our bank doing to help? B: We have started a disaster {{BLANK}} fund, and for every dollar that customers give, the bank will add another dollar until we reach one million.",
    "cn": "A：上週末的水災讓河邊小鎮數百人無家可歸，很多人暫住在學校裡，我們銀行在做什麼幫忙？ B：我們成立了災害【救濟】基金，客戶每捐一元，銀行就再加一元，直到達到一百萬元為止。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "the people who live in one area",
    "sentence": "A: Why did the company decide to build a small park and playground next to the new factory instead of using the land for more parking spaces? B: The managers wanted to give something back to the local {{BLANK}}, because many of our workers live nearby and their children had no safe place to play.",
    "cn": "A：公司為什麼決定在新工廠旁邊蓋一座小公園和遊樂場，而不是把那塊地拿來做更多停車位？ B：主管們想回饋當地【社區】，因為我們很多員工住在附近，他們的孩子之前沒有安全的地方可以玩。"
  },
  {
    "word": "nonprofit",
    "pos": "adj.",
    "cn_def": "非營利的",
    "en_def": "not set up to make money for its owners",
    "sentence": "A: My cousin left her well-paid job at an investment bank last year, so where is she working now, and does she still enjoy her career? B: She joined a small {{BLANK}} group that teaches computer skills to older people, and although she earns less money, she says the work makes her feel useful every day.",
    "cn": "A：我表姊去年辭掉了投資銀行的高薪工作，她現在在哪裡工作？還喜歡她的職涯嗎？ B：她加入了一個教長者電腦技能的小型【非營利】團體，雖然賺得比較少，但她說這份工作讓她每天都覺得自己有用。"
  },
  {
    "word": "organization",
    "pos": "n.",
    "cn_def": "組織；機構",
    "en_def": "a group of people who work together for a purpose",
    "sentence": "A: I would like to give some of my year-end bonus to help stray animals, but I am worried that the money will not be used properly, so do you have any advice? B: Choose an {{BLANK}} that publishes clear reports every year showing how much it spends on food, medical care, and staff.",
    "cn": "A：我想把部分年終獎金拿來幫助流浪動物，但我擔心錢沒被妥善使用，你有什麼建議嗎？ B：選擇一個每年公開清楚報告、說明在食物、醫療和人事上花了多少錢的【組織】。"
  },
  {
    "word": "cause",
    "pos": "n.",
    "cn_def": "理想；公益目標",
    "en_def": "an aim or idea that people support or work for",
    "sentence": "A: Every year our department chooses one social issue to focus on during the holiday season, so which one should we pick this December? B: I think clean drinking water in poor villages is a good {{BLANK}}, because a small amount of money can build a well that helps hundreds of people for many years.",
    "cn": "A：我們部門每年都會在假期選一個社會議題來關注，今年十二月我們該選哪一個？ B：我覺得貧困村莊的乾淨飲用水是個很好的【公益目標】，因為一小筆錢就能蓋一口井，幫助數百人許多年。"
  },
  {
    "word": "campaign",
    "pos": "n.",
    "cn_def": "（有組織的）活動；宣傳運動",
    "en_def": "a planned set of activities to reach a goal",
    "sentence": "A: The posters about recycling old phones are everywhere in the subway stations this month, so who is paying for all of them? B: A large electronics company started the {{BLANK}} in October, and it plans to collect fifty thousand phones by the end of the year and give the profits to schools.",
    "cn": "A：這個月捷運站到處都是回收舊手機的海報，是誰出錢做的？ B：一家大型電子公司在十月發起了這項【活動】，計畫在年底前收集五萬支手機，並把收益捐給學校。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動；大型聚會",
    "en_def": "a planned social occasion or activity",
    "sentence": "A: The hotel manager asked me how many guests will attend our charity dinner, but I have not finished counting the replies yet, so what should I tell her? B: Tell her that about three hundred people will come to the {{BLANK}}, and we will send the final number by Wednesday afternoon at the latest.",
    "cn": "A：飯店經理問我有多少賓客會參加我們的慈善晚宴，但我還沒算完回覆，我該怎麼跟她說？ B：告訴她大約三百人會來參加這場【活動】，最晚週三下午我們會提供最終人數。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "義演；慈善活動",
    "en_def": "an event held to raise money for people in need",
    "sentence": "A: I heard that several famous singers will perform at the stadium on Sunday night, but the tickets seem very cheap, so why is that? B: It is a {{BLANK}} concert for families who lost their homes in the fire, and the singers agreed to perform for free so that more money can go to the victims.",
    "cn": "A：我聽說幾位知名歌手週日晚上會在體育場表演，但票價看起來很便宜，為什麼？ B：那是一場為火災中失去家園的家庭舉辦的【慈善義演】音樂會，歌手們同意免費演出，好讓更多錢能送到災民手中。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的；樂於助人的",
    "en_def": "willing to help; useful",
    "sentence": "A: This was the first time our team organized a book drive for the rural schools, so how did everything go when you delivered the boxes on Thursday? B: The teachers there were very {{BLANK}}, because they carried the boxes into the library with us and showed us which books the students needed most.",
    "cn": "A：這是我們團隊第一次為偏鄉學校辦募書活動，你週四送箱子過去時一切順利嗎？ B：那裡的老師們很【樂於幫忙】，他們跟我們一起把箱子搬進圖書館，還告訴我們學生最需要哪些書。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的；大方的",
    "en_def": "happy to give money, time, or help",
    "sentence": "A: The animal shelter finally has enough money to repair its roof before the rainy season, so where did the money come from? B: A {{BLANK}} businessman who adopted a dog there last year gave half a million dollars, and he also promised to pay for food for the next three years.",
    "cn": "A：動物收容所終於有足夠的錢在雨季前修好屋頂了，錢是從哪裡來的？ B：一位去年在那裡領養了狗的【慷慨】商人捐了五十萬元，他還答應未來三年負擔飼料費。"
  },
  {
    "word": "kindness",
    "pos": "n.",
    "cn_def": "仁慈；善意",
    "en_def": "the quality of being friendly and helpful to others",
    "sentence": "A: Why did you buy a big box of chocolates for the woman who works at the reception desk downstairs? B: When I lost my wallet last Monday, she paid for my taxi home and called the police for me, so I wanted to thank her for her {{BLANK}} and let her know how much it meant to me.",
    "cn": "A：你為什麼買了一大盒巧克力送給樓下櫃檯的那位女士？ B：上週一我掉了錢包，她幫我付了回家的計程車錢，還幫我打電話報警，所以我想謝謝她的【善意】，讓她知道這對我意義有多大。"
  },
  {
    "word": "care",
    "pos": "n.",
    "cn_def": "照顧；照護",
    "en_def": "the work of looking after people who need help",
    "sentence": "A: The new center for elderly people opened near our office last month, so what kind of services does it offer to the families in this neighborhood? B: It provides daily {{BLANK}} for older people who cannot live alone, with nurses who check their health, cook healthy meals, and take them for short walks.",
    "cn": "A：我們辦公室附近上個月開了新的長者中心，它提供這一帶家庭什麼樣的服務？ B：它為無法獨居的長者提供日間【照護】，有護理師幫他們檢查健康、煮健康的餐點，還會帶他們去散步。"
  },
  {
    "word": "poor",
    "pos": "adj.",
    "cn_def": "貧窮的",
    "en_def": "having very little money",
    "sentence": "A: The volunteers from our company are going to the mountain villages again next weekend, so what will they bring to the families there this time? B: They will bring warm jackets and school supplies, because many families in that area are {{BLANK}} and cannot afford new clothes before the cold winter arrives.",
    "cn": "A：我們公司的志工下週末又要去山區村落了，這次他們要帶什麼給那裡的家庭？ B：他們會帶保暖外套和文具，因為那一帶很多家庭很【貧窮】，在寒冬來臨前買不起新衣服。"
  },
  {
    "word": "needy",
    "pos": "adj.",
    "cn_def": "貧困的；有需要的",
    "en_def": "not having enough money, food, or clothes",
    "sentence": "A: Our restaurant always has a lot of fresh bread and soup left at closing time, and it feels terrible to throw it away, so do you have a better idea? B: We could work with the local food bank, which picks up extra food every night and gives it to {{BLANK}} families in the neighborhood.",
    "cn": "A：我們餐廳打烊時總是剩很多新鮮麵包和湯，丟掉感覺很糟，你有更好的主意嗎？ B：我們可以跟當地的食物銀行合作，他們每晚會來收多餘的食物，再送給附近【有需要的】家庭。"
  },
  {
    "word": "homeless",
    "pos": "adj.",
    "cn_def": "無家可歸的",
    "en_def": "having no place to live",
    "sentence": "A: Why are so many staff members bringing sleeping bags and thick blankets to the office lobby this week? B: The human resources team is collecting them for {{BLANK}} people who sleep in the train station, because the weather report says the temperature will drop below ten degrees this weekend.",
    "cn": "A：為什麼這週有這麼多員工把睡袋和厚毯子帶到辦公室大廳？ B：人資團隊正在為睡在火車站的【無家可歸的】人收集這些物品，因為氣象預報說這個週末氣溫會降到十度以下。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "收容所；庇護所",
    "en_def": "a place where people or animals in need can stay",
    "sentence": "A: My neighbor found three small kittens in a box behind the supermarket yesterday, but she cannot keep them in her apartment, so where should she take them? B: She can bring them to the animal {{BLANK}} on Green Road, where the staff will give them medical checks and help them find new families.",
    "cn": "A：我鄰居昨天在超市後面的箱子裡發現三隻小貓，但她的公寓不能養，她該把牠們送去哪裡？ B：她可以帶去綠園路上的動物【收容所】，那裡的工作人員會幫牠們做健康檢查，並協助牠們找到新家庭。"
  },
  {
    "word": "mission",
    "pos": "n.",
    "cn_def": "使命；任務",
    "en_def": "the main purpose of a group or organization",
    "sentence": "A: The new director of the charity gave a long speech at the meeting this morning, but I arrived late, so what was the main point? B: She explained that the group's {{BLANK}} is to make sure every child in the city has three healthy meals a day, and all future projects must follow that goal.",
    "cn": "A：慈善團體的新主任今天早上在會議上發表了長篇演講，但我遲到了，重點是什麼？ B：她說明了這個團體的【使命】是確保市內每個孩子每天都有三頓健康的餐點，未來所有計畫都必須遵循這個目標。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響；衝擊",
    "en_def": "a strong effect on someone or something",
    "sentence": "A: The board members want to know whether the reading program we paid for last year really helped the students, so what results can we show them? B: The program had a clear {{BLANK}} on the children, because their test scores went up by twenty percent and more of them now borrow books every week.",
    "cn": "A：董事會想知道我們去年出資的閱讀計畫是否真的幫助了學生，我們能給他們看什麼成果？ B：這個計畫對孩子們有明顯的【影響】，他們的考試成績提高了百分之二十，而且現在有更多人每週借書。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；認識",
    "en_def": "knowing about something and understanding that it is important",
    "sentence": "A: Why is the hospital putting up colorful boards in the shopping mall and giving free health checks to everyone this weekend? B: They want to raise public {{BLANK}} of heart disease, because many people do not know the early warning signs and only see a doctor when it is too late.",
    "cn": "A：醫院為什麼這個週末在購物中心擺放彩色看板，並幫每個人做免費健康檢查？ B：他們想提高大眾對心臟病的【意識】，因為很多人不知道早期警訊，等到看醫生時已經太晚了。"
  },
  {
    "word": "fair",
    "pos": "n.",
    "cn_def": "市集；園遊會",
    "en_def": "an outdoor event where people sell goods, often to raise money",
    "sentence": "A: Our department made a lot of handmade soap and candles in the workshop last month, so where are we going to sell them? B: We will rent a table at the charity {{BLANK}} in the city park on Saturday, where many companies and schools will sell goods and give the money to the children's hospital.",
    "cn": "A：我們部門上個月在工作坊做了很多手工皂和蠟燭，要拿去哪裡賣？ B：我們會在週六市立公園的慈善【市集】租一張桌子，那裡會有很多公司和學校販售物品，並把收入捐給兒童醫院。"
  },
  {
    "word": "hope",
    "pos": "v.",
    "cn_def": "希望",
    "en_def": "to want something to happen and think it is possible",
    "sentence": "A: The team has collected almost four hundred thousand dollars for the new children's library, but the building will cost half a million, so what will happen next? B: We {{BLANK}} to reach our goal by the end of next month, because two large companies have promised to match the money that employees give.",
    "cn": "A：團隊已經為新的兒童圖書館募到將近四十萬元，但建築需要五十萬元，接下來會怎樣？ B：我們【希望】在下個月底前達成目標，因為有兩家大公司承諾會配合員工捐款金額捐出同等的錢。"
  }
];

const MCQS = [
  {
    "q": "Mr. Lin made a large _____ to the city museum last week. His gift will pay for a new art room for children.",
    "options": [
      "campaign",
      "mission",
      "shelter",
      "donation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Employees who _____ blood at the health center on Friday will receive a free lunch. The nurses expect over one hundred visitors.",
    "options": [
      "donate",
      "support",
      "hope",
      "volunteer"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Students who _____ at the library for ten hours will receive a certificate. They shelve books and assist visitors without any pay.",
    "options": [
      "donate",
      "support",
      "volunteer",
      "hope"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The school's _____ efforts brought in over two million dollars this year. The money will be used to build a new gym.",
    "options": [
      "kindness",
      "fundraising",
      "shelter",
      "mission"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The tennis club held a _____ last night to collect money for new equipment. More than two hundred members bought tickets.",
    "options": [
      "shelter",
      "kindness",
      "fundraiser",
      "awareness"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Many customers choose to _____ small local shops instead of large chains. They believe this keeps the neighborhood strong and lively.",
    "options": [
      "donate",
      "volunteer",
      "hope",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The ship carried food and medical _____ to the island after the storm. Local workers helped unload the boxes at the port.",
    "options": [
      "aid",
      "kindness",
      "mission",
      "fair"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The government announced a new _____ program for farmers hurt by the drought. Each family will receive money and free seeds.",
    "options": [
      "kindness",
      "relief",
      "fair",
      "mission"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The new library will serve the whole _____, not just the students at the nearby university. It will open seven days a week.",
    "options": [
      "community",
      "mission",
      "impact",
      "fair"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Green Path is a _____ group, so all of its income goes to helping families rather than owners. It depends on gifts.",
    "options": [
      "homeless",
      "nonprofit",
      "needy",
      "poor"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The Red Leaf Foundation is a large _____ with offices in twelve countries. It employs over three thousand staff members worldwide.",
    "options": [
      "kindness",
      "awareness",
      "organization",
      "relief"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Protecting the ocean is a _____ that many young people care deeply about. They join beach clean-ups and avoid plastic bags.",
    "options": [
      "shelter",
      "fair",
      "benefit",
      "cause"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The city launched a three-month _____ to encourage people to ride bicycles to work. Free bike repairs are offered every Friday.",
    "options": [
      "campaign",
      "kindness",
      "shelter",
      "community"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The company's annual sports _____ will take place at the stadium on May 3. All employees and their families are welcome.",
    "options": [
      "kindness",
      "event",
      "awareness",
      "impact"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The famous pianist gave a _____ concert to raise money for flood victims. Every seat in the hall was sold within two days.",
    "options": [
      "kindness",
      "awareness",
      "shelter",
      "benefit"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The staff at the information desk were very _____ and gave us a free map of the city. They also suggested several good restaurants.",
    "options": [
      "homeless",
      "needy",
      "helpful",
      "nonprofit"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Thanks to a _____ gift from a local businesswoman, the hospital can buy two new machines. She gave over one million dollars.",
    "options": [
      "generous",
      "homeless",
      "needy",
      "nonprofit"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The hotel guest wrote a letter to thank the staff for their _____ during her stay. They helped her when she became sick.",
    "options": [
      "shelter",
      "campaign",
      "kindness",
      "fundraiser"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Patients at the clinic receive excellent _____ from a team of experienced nurses. Many families travel from other cities to visit.",
    "options": [
      "fundraiser",
      "care",
      "campaign",
      "fair"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The new program provides free school meals for children from _____ families. Parents earning less than a certain amount can apply online.",
    "options": [
      "helpful",
      "generous",
      "nonprofit",
      "poor"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The food bank gives rice, oil, and canned food to _____ residents every Tuesday. Volunteers deliver the boxes to people who cannot travel.",
    "options": [
      "helpful",
      "needy",
      "generous",
      "nonprofit"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The city opened a new center where _____ people can sleep, shower, and eat a hot meal. It has two hundred beds.",
    "options": [
      "helpful",
      "generous",
      "homeless",
      "nonprofit"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The storm damaged hundreds of houses, so the school gym was turned into a temporary _____. Families stayed there for nearly a week.",
    "options": [
      "campaign",
      "mission",
      "awareness",
      "shelter"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The company's _____ is to provide clean energy to every home in the region. All of its projects support this main goal.",
    "options": [
      "mission",
      "fair",
      "kindness",
      "relief"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The new highway will have a huge _____ on local businesses along the old road. Some shop owners are worried about losing customers.",
    "options": [
      "fair",
      "kindness",
      "shelter",
      "impact"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The poster series aims to raise _____ about the dangers of using a phone while driving. It will run on buses and trains.",
    "options": [
      "shelter",
      "awareness",
      "fair",
      "kindness"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The school will hold a book _____ in the main hall next Saturday. Visitors can buy used books, and all profits go to the library.",
    "options": [
      "fair",
      "kindness",
      "impact",
      "mission"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "We _____ that the weather will be sunny for the outdoor charity run on Sunday. Over five hundred runners have signed up.",
    "options": [
      "donate",
      "volunteer",
      "hope",
      "support"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "All money from the _____ box at the front door goes to the children's hospital. Visitors can also give online using a phone.",
    "options": [
      "donation",
      "kindness",
      "mission",
      "impact"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Retired teachers often _____ as tutors at the community center in the evenings. They are not paid, but they enjoy helping students.",
    "options": [
      "donate",
      "support",
      "volunteer",
      "hope"
    ],
    "answer": 2,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "donation": {
    "pos": "n.",
    "en_def": "money or goods given to help people or a group",
    "cn_def": "捐款；捐贈物"
  },
  "donate": {
    "pos": "v.",
    "en_def": "to give money or things to help others",
    "cn_def": "捐贈；捐款"
  },
  "volunteer": {
    "pos": "v.",
    "en_def": "to offer to do work without being paid",
    "cn_def": "自願做；當志工"
  },
  "fundraising": {
    "pos": "n.",
    "en_def": "the activity of collecting money for a cause",
    "cn_def": "募款"
  },
  "fundraiser": {
    "pos": "n.",
    "en_def": "an event held to collect money for a cause",
    "cn_def": "募款活動"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help someone, often by giving money or encouragement",
    "cn_def": "支持；援助"
  },
  "aid": {
    "pos": "n.",
    "en_def": "help such as food, money, or medicine given to people in need",
    "cn_def": "援助；救援物資"
  },
  "relief": {
    "pos": "n.",
    "en_def": "food, money, or help given to people after a disaster",
    "cn_def": "救濟；救援"
  },
  "community": {
    "pos": "n.",
    "en_def": "the people who live in one area",
    "cn_def": "社區；社群"
  },
  "nonprofit": {
    "pos": "adj.",
    "en_def": "not set up to make money for its owners",
    "cn_def": "非營利的"
  },
  "organization": {
    "pos": "n.",
    "en_def": "a group of people who work together for a purpose",
    "cn_def": "組織；機構"
  },
  "cause": {
    "pos": "n.",
    "en_def": "an aim or idea that people support or work for",
    "cn_def": "理想；公益目標"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned set of activities to reach a goal",
    "cn_def": "（有組織的）活動；宣傳運動"
  },
  "event": {
    "pos": "n.",
    "en_def": "a planned social occasion or activity",
    "cn_def": "活動；大型聚會"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "an event held to raise money for people in need",
    "cn_def": "義演；慈善活動"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "willing to help; useful",
    "cn_def": "有幫助的；樂於助人的"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "happy to give money, time, or help",
    "cn_def": "慷慨的；大方的"
  },
  "kindness": {
    "pos": "n.",
    "en_def": "the quality of being friendly and helpful to others",
    "cn_def": "仁慈；善意"
  },
  "care": {
    "pos": "n.",
    "en_def": "the work of looking after people who need help",
    "cn_def": "照顧；照護"
  },
  "poor": {
    "pos": "adj.",
    "en_def": "having very little money",
    "cn_def": "貧窮的"
  },
  "needy": {
    "pos": "adj.",
    "en_def": "not having enough money, food, or clothes",
    "cn_def": "貧困的；有需要的"
  },
  "homeless": {
    "pos": "adj.",
    "en_def": "having no place to live",
    "cn_def": "無家可歸的"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place where people or animals in need can stay",
    "cn_def": "收容所；庇護所"
  },
  "mission": {
    "pos": "n.",
    "en_def": "the main purpose of a group or organization",
    "cn_def": "使命；任務"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on someone or something",
    "cn_def": "影響；衝擊"
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowing about something and understanding that it is important",
    "cn_def": "意識；認識"
  },
  "fair": {
    "pos": "n.",
    "en_def": "an outdoor event where people sell goods, often to raise money",
    "cn_def": "市集；園遊會"
  },
  "hope": {
    "pos": "v.",
    "en_def": "to want something to happen and think it is possible",
    "cn_def": "希望"
  }
};

const EXTRA_GLOSSES = {};
