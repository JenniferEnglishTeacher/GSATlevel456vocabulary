// Topic 80 Quiz Data: Contribute 貢獻
// Source word list: https://www.examword.com/group-topic/contribute — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T80 - Contribute 貢獻",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "contribution",
    "pos": "n.",
    "cn_def": "貢獻；捐款",
    "en_def": "something you give or do to help something succeed",
    "sentence": "A: Why did the director mention Linda by name during the end-of-year party at the hotel last night? B: She wanted to thank her for her important {{BLANK}} to the new online store, because Linda designed the payment system that helped us double our sales in only six months.",
    "cn": "A：昨晚在飯店的年終派對上，主任為什麼特別點名琳達？ B：她想感謝琳達對新網路商店的重要【貢獻】，因為琳達設計了付款系統，幫助我們在短短六個月內讓銷售額翻倍。"
  },
  {
    "word": "contributor",
    "pos": "n.",
    "cn_def": "貢獻者；撰稿人",
    "en_def": "a person who gives money, work or ideas to something",
    "sentence": "A: Who wrote the article about saving energy in the office that appeared in this month's company newsletter? B: It was written by Mr. Tanaka from the engineering team, and he is now a regular {{BLANK}} to the newsletter, so he will send us a new article every two months.",
    "cn": "A：這個月公司通訊裡那篇關於辦公室節能的文章是誰寫的？ B：是工程團隊的田中先生寫的，他現在是通訊的固定【撰稿人】，所以他每兩個月會寄一篇新文章給我們。"
  },
  {
    "word": "donate",
    "pos": "v.",
    "cn_def": "捐贈；捐款",
    "en_def": "to give money or goods to help a person or group",
    "sentence": "A: What are we going to do with all the old laptops and office chairs after we move to the new building next month? B: The manager has decided to {{BLANK}} them to a local school, since they still work well and the students there really need more computers for their classes.",
    "cn": "A：下個月搬到新大樓後，我們要怎麼處理那些舊筆電和辦公椅？ B：經理決定把它們【捐贈】給當地一所學校，因為它們還很好用，而那裡的學生上課很需要更多電腦。"
  },
  {
    "word": "donation",
    "pos": "n.",
    "cn_def": "捐款；捐贈物",
    "en_def": "money or goods that you give to help a person or group",
    "sentence": "A: How much money did our staff raise at the charity bake sale in the lobby last Friday afternoon? B: We collected almost two thousand dollars, and the company agreed to match every {{BLANK}}, so the children's hospital will receive four thousand dollars for new equipment.",
    "cn": "A：上週五下午我們員工在大廳舉辦的慈善烘焙義賣籌到多少錢？ B：我們募到將近兩千美元，而且公司同意對每一筆【捐款】提供相同金額，所以兒童醫院將收到四千美元購買新設備。"
  },
  {
    "word": "donor",
    "pos": "n.",
    "cn_def": "捐贈者",
    "en_def": "a person or company that gives money or goods to help",
    "sentence": "A: Why is there a new name on the wall next to the entrance of the city library this week? B: That is the name of the largest {{BLANK}}, a local businessman who gave half a million dollars to build the new reading room and buy hundreds of children's books.",
    "cn": "A：這週市立圖書館入口旁的牆上為什麼多了一個新名字？ B：那是最大【捐贈者】的名字，他是一位本地商人，捐了五十萬美元興建新閱覽室，並購買了數百本童書。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；支援",
    "en_def": "help or encouragement that you give to someone",
    "sentence": "A: How did your small team finish the huge marketing report before the deadline, even though two people were sick last week? B: We could not have done it without the {{BLANK}} of the sales department, because they sent us three extra people to collect data and check the numbers.",
    "cn": "A：雖然上週有兩個人生病，你們的小團隊是怎麼在截止日前完成那份龐大的行銷報告的？ B：沒有業務部的【支援】我們不可能做到，因為他們派了三個額外人手來幫我們蒐集資料和核對數字。"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "協助；幫助",
    "en_def": "help",
    "sentence": "A: I'm having trouble with the new booking system, and three customers are waiting at the front desk right now. B: Don't worry, just call the IT office on extension 205, and someone will give you {{BLANK}} within a few minutes, because they are on duty all morning to deal with problems like this.",
    "cn": "A：我在新的訂位系統上遇到問題，而且現在有三位客人在櫃台等著。 B：別擔心，只要打分機205給資訊室，幾分鐘內就會有人給你【協助】，因為他們整個早上都在值班處理這類問題。"
  },
  {
    "word": "aid",
    "pos": "n.",
    "cn_def": "援助；救助",
    "en_def": "help such as money, food or supplies for people in need",
    "sentence": "A: Why are so many boxes of food, water, and blankets stacked near the loading area of our warehouse today? B: Our company is sending emergency {{BLANK}} to the towns that were hit by the flood last weekend, and the trucks will leave for the south early tomorrow morning.",
    "cn": "A：今天我們倉庫的裝卸區附近為什麼堆了那麼多箱食物、水和毛毯？ B：我們公司要將緊急【援助】物資送到上週末遭受水災的城鎮，卡車明天一早就會出發前往南部。"
  },
  {
    "word": "help",
    "pos": "v.",
    "cn_def": "幫助；幫忙",
    "en_def": "to make it easier for someone to do something",
    "sentence": "A: The new intern looks a bit lost at her desk, and she has been staring at that spreadsheet for almost an hour. B: Could you go over and {{BLANK}} her with the formulas for a while, since you know the program better than anyone else in this office?",
    "cn": "A：新來的實習生坐在座位上看起來有點不知所措，她盯著那張試算表快一個小時了。 B：你可以過去【幫】她弄一下公式嗎？畢竟你比辦公室裡任何人都熟悉這個程式。"
  },
  {
    "word": "volunteer",
    "pos": "v.",
    "cn_def": "自願；當志工",
    "en_def": "to offer to do something without being asked or paid",
    "sentence": "A: Who is going to stay late on Friday to welcome the visitors from our partner company in Germany? B: Kevin and Mia decided to {{BLANK}} for the job, because they both speak some German and they thought it would be a good chance to practice and meet new people.",
    "cn": "A：週五誰會留晚一點迎接我們德國合作公司的訪客？ B：凱文和米亞決定【自願】擔任這份工作，因為他們都會說一點德語，而且他們覺得這是練習和認識新朋友的好機會。"
  },
  {
    "word": "voluntary",
    "pos": "adj.",
    "cn_def": "自願的；義務的",
    "en_def": "done because you want to, not because you must",
    "sentence": "A: Do all employees have to join the English training class that starts every Wednesday evening next month? B: No, the class is completely {{BLANK}}, so you can decide for yourself, but the manager hopes that people who often talk with foreign clients will try to attend.",
    "cn": "A：下個月每週三晚上開始的英語訓練課，所有員工都必須參加嗎？ B：不用，這門課完全是【自願參加的】，所以你可以自己決定，不過經理希望常和外國客戶交談的人能盡量出席。"
  },
  {
    "word": "sponsor",
    "pos": "v.",
    "cn_def": "贊助",
    "en_def": "to pay for an event or activity, often to advertise your company",
    "sentence": "A: Why is our company logo printed on all the T-shirts for the city marathon this year? B: The board agreed to {{BLANK}} the race for three years, because thousands of runners and their families will see our name, and it shows that we care about health in the community.",
    "cn": "A：為什麼今年城市馬拉松的所有T恤上都印著我們公司的標誌？ B：董事會同意【贊助】這場比賽三年，因為成千上萬的跑者和他們的家人都會看到我們的名字，而且這顯示我們關心社區的健康。"
  },
  {
    "word": "sponsorship",
    "pos": "n.",
    "cn_def": "贊助",
    "en_def": "money or support given to pay for an event or activity",
    "sentence": "A: How can the drama club pay for the costumes and the theater for its big show in December? B: The club leader is asking several banks and restaurants downtown for {{BLANK}}, and in return their names will appear on the posters and in the program for the show.",
    "cn": "A：戲劇社要怎麼支付十二月大型演出的服裝和劇場費用？ B：社長正在向市中心幾家銀行和餐廳尋求【贊助】，作為回報，他們的名字會出現在海報和演出節目單上。"
  },
  {
    "word": "fund",
    "pos": "v.",
    "cn_def": "資助；提供資金",
    "en_def": "to provide money for something",
    "sentence": "A: Is the government going to pay for the new bus line between the airport and the business park? B: Yes, the city will {{BLANK}} most of the project, but two large companies in the park will also pay part of the cost, because their workers will use the buses every day.",
    "cn": "A：政府會出錢興建機場和商業園區之間的新公車路線嗎？ B：會，市政府將【資助】這項計畫的大部分費用，不過園區裡的兩家大公司也會負擔部分成本，因為他們的員工每天都會搭這些公車。"
  },
  {
    "word": "funding",
    "pos": "n.",
    "cn_def": "資金；經費",
    "en_def": "money that is given for a particular purpose",
    "sentence": "A: Why did the science team stop working on the new battery project after only one year? B: They lost their {{BLANK}} when the main investor pulled out last spring, and without money they could not pay for the expensive machines and the salaries of the researchers.",
    "cn": "A：為什麼科學團隊才做了一年就停止新電池計畫？ B：去年春天主要投資者退出後，他們就失去了【資金】，沒有錢就付不起昂貴的機器和研究人員的薪水。"
  },
  {
    "word": "subsidize",
    "pos": "v.",
    "cn_def": "補助；補貼",
    "en_def": "to pay part of the cost of something",
    "sentence": "A: How can the factory workers afford such nice lunches in the staff cafeteria when food prices are rising so fast? B: The company has decided to {{BLANK}} the meals, so each worker only pays half the real price, and the rest comes out of the welfare budget.",
    "cn": "A：食物價格漲得這麼快，工廠員工怎麼吃得起員工餐廳那麼好的午餐？ B：公司決定【補貼】餐費，所以每位員工只需付實際價格的一半，其餘由福利預算支付。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity or event",
    "sentence": "A: Are you going to join the sales training in Taichung next week, or do you have too many meetings with clients? B: I plan to {{BLANK}} in the first two days, but I have to come back on Wednesday to meet an important customer from Japan at our main office.",
    "cn": "A：你下週會去參加台中的業務訓練嗎？還是你和客戶的會議太多了？ B：我打算【參加】前兩天，但週三我必須回來，在總公司和一位重要的日本客戶見面。"
  },
  {
    "word": "participation",
    "pos": "n.",
    "cn_def": "參與；參加",
    "en_def": "the act of taking part in something",
    "sentence": "A: Why did the HR manager look so pleased at the end of the staff meeting this afternoon? B: She was happy about the high level of {{BLANK}} in the health survey, because almost ninety percent of the employees answered all the questions before the deadline.",
    "cn": "A：今天下午員工會議結束時，人資經理為什麼看起來那麼滿意？ B：她很高興健康調查的【參與】度很高，因為將近百分之九十的員工都在截止日前回答了所有問題。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "吸引…參與；參與",
    "en_def": "to get someone interested and involved in something",
    "sentence": "A: What is the main goal of the new social media plan that the marketing team presented this morning? B: They want to {{BLANK}} young customers by posting short videos and asking questions, so that people will comment, share their ideas, and feel closer to our brand.",
    "cn": "A：行銷團隊今天早上提出的新社群媒體計畫，主要目標是什麼？ B：他們想藉由發布短片和提問來【吸引】年輕顧客參與，讓大家留言、分享想法，並覺得和我們的品牌更親近。"
  },
  {
    "word": "involvement",
    "pos": "n.",
    "cn_def": "參與；牽涉",
    "en_def": "the act of taking part in something",
    "sentence": "A: Why does the director want the store managers to attend the planning meetings for next year's products? B: She believes their {{BLANK}} is very important, because they talk to customers every day and know which items sell well and which ones stay on the shelves.",
    "cn": "A：為什麼主任希望門市經理參加明年產品的規劃會議？ B：她認為他們的【參與】非常重要，因為他們每天和顧客交談，知道哪些商品賣得好、哪些一直擺在架上。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作；協作",
    "en_def": "to work together with others to make or do something",
    "sentence": "A: How will the design team in Taipei and the engineers in Singapore finish the new phone app by March? B: They will {{BLANK}} closely through video meetings every morning, and they will share all their files online so that both teams can see the latest changes at any time.",
    "cn": "A：台北的設計團隊和新加坡的工程師要怎麼在三月前完成新的手機應用程式？ B：他們每天早上會透過視訊會議密切【合作】，並把所有檔案放在網路上共享，讓兩個團隊隨時都能看到最新的修改。"
  },
  {
    "word": "collaboration",
    "pos": "n.",
    "cn_def": "合作",
    "en_def": "the act of working together with others",
    "sentence": "A: Did you hear that our coffee shop chain is going to sell cakes from that famous French bakery next month? B: Yes, the new menu is the result of a {{BLANK}} between the two companies, and both sides hope it will bring more customers into the shops in the afternoon.",
    "cn": "A：你有沒有聽說我們的咖啡連鎖店下個月要販售那家知名法式麵包店的蛋糕？ B：有啊，新菜單是兩家公司【合作】的成果，雙方都希望這能在下午吸引更多顧客進店。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作；配合",
    "en_def": "to work together or do what someone asks",
    "sentence": "A: The fire safety inspectors are coming to check the whole building on Thursday morning, aren't they? B: Yes, and the manager has asked all of us to {{BLANK}} with them fully, so please open every storage room and answer their questions honestly when they visit our floor.",
    "cn": "A：消防安全檢查員週四早上要來檢查整棟大樓，對吧？ B：對，經理要求我們全力【配合】他們，所以當他們來到我們這層樓時，請打開每一間儲藏室，並誠實回答他們的問題。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作；配合",
    "en_def": "the act of working together to get something done",
    "sentence": "A: Why did the train company send an email to all passengers about the station repairs this weekend? B: They wanted to explain the changes to the timetable and thank everyone for their {{BLANK}}, because some trains will be slower and the main entrance will be closed for two days.",
    "cn": "A：火車公司為什麼寄電子郵件給所有乘客，說明本週末的車站維修？ B：他們想說明時刻表的變動，並感謝大家的【配合】，因為有些列車會比較慢，主要入口也會關閉兩天。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助；幫助",
    "en_def": "to help someone",
    "sentence": "A: The new cashier is starting work on Monday, but nobody has shown her how to use the cash register yet. B: Don't worry, Linda will stay with her for the first week to {{BLANK}} her with difficult customers and show her how to handle returns and credit card problems.",
    "cn": "A：新收銀員週一開始上班，但還沒有人教她怎麼使用收銀機。 B：別擔心，第一週琳達會陪著她，【協助】她應付難搞的顧客，並教她如何處理退貨和信用卡的問題。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享；共用",
    "en_def": "to use something together with others; to tell others something",
    "sentence": "A: Why are you moving all your things out of your office this afternoon? Is something wrong? B: Nothing is wrong, but our department is getting two new managers, so I have to {{BLANK}} a room with Peter until the renovation on the fifth floor is finished in June.",
    "cn": "A：你今天下午為什麼要把東西全部搬出辦公室？發生什麼事了嗎？ B：沒什麼事，只是我們部門要來兩位新經理，所以在五樓的整修六月完工之前，我得和彼得【共用】一間辦公室。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供",
    "en_def": "to give someone something they need",
    "sentence": "A: Do we need to bring our own lunch to the training workshop at the hotel on Saturday? B: No, the organizers will {{BLANK}} lunch and coffee for everyone, but you should bring a notebook and a pen, because the trainer will ask us to write down a lot of ideas.",
    "cn": "A：週六在飯店舉辦的培訓工作坊，我們需要自備午餐嗎？ B：不用，主辦單位會為每個人【提供】午餐和咖啡，但你應該帶筆記本和筆，因為講師會要我們寫下很多想法。"
  },
  {
    "word": "offer",
    "pos": "v.",
    "cn_def": "提供；主動提出",
    "en_def": "to say you are willing to give or do something",
    "sentence": "A: The hotel was fully booked when we arrived last night, so what did the receptionist do for us? B: She apologized many times and decided to {{BLANK}} us a free room at their sister hotel nearby, and she also called a taxi to take us there with our luggage.",
    "cn": "A：我們昨晚抵達時飯店已經客滿了，那櫃台人員幫我們做了什麼？ B：她道歉了好多次，並決定【提供】我們附近姊妹飯店的一間免費房間，還叫了計程車載我們和行李過去。"
  },
  {
    "word": "give",
    "pos": "v.",
    "cn_def": "給；給予",
    "en_def": "to let someone have something",
    "sentence": "A: What should I do with the extra tickets for the company concert, since my family can't come on Saturday? B: You could {{BLANK}} them to the new staff in the accounting department, because they just moved to the city and probably don't have many plans for the weekend yet.",
    "cn": "A：我家人週六不能來，公司音樂會多出來的票我該怎麼處理？ B：你可以把票【給】會計部的新同事，因為他們剛搬到這個城市，週末可能還沒有什麼安排。"
  },
  {
    "word": "input",
    "pos": "n.",
    "cn_def": "意見；投入",
    "en_def": "ideas, advice or information that you give to help with something",
    "sentence": "A: Why did the manager invite the delivery drivers to the meeting about the new warehouse layout? B: She wanted their {{BLANK}} before making a final decision, because the drivers load and unload the trucks every day and know exactly where the shelves and doors should go.",
    "cn": "A：經理為什麼邀請送貨司機參加新倉庫配置的會議？ B：她想在做最後決定之前聽聽他們的【意見】，因為司機每天都在裝卸貨車，非常清楚貨架和門應該放在哪裡。"
  },
  {
    "word": "back",
    "pos": "v.",
    "cn_def": "支持；支援",
    "en_def": "to support a person, plan or idea",
    "sentence": "A: Do you think the board will agree to open a new branch in Kaohsiung next year? B: I think so, because the two biggest shareholders have already said they will {{BLANK}} the plan, and the market research shows strong demand for our products in southern Taiwan.",
    "cn": "A：你覺得董事會會同意明年在高雄開設新分公司嗎？ B：我想會，因為兩位最大股東已經表示會【支持】這個計畫，而且市場調查顯示台灣南部對我們的產品需求強勁。"
  },
  {
    "word": "endorse",
    "pos": "v.",
    "cn_def": "支持；背書；代言",
    "en_def": "to say publicly that you support a person, product or idea",
    "sentence": "A: Why did sales of our new running shoes go up so quickly after the first week? B: A famous Olympic runner agreed to {{BLANK}} them on her social media, and after she posted a video of her training in our shoes, thousands of young people ordered a pair online.",
    "cn": "A：我們的新款跑鞋為什麼在第一週後銷量就迅速上升？ B：一位知名奧運跑者同意在她的社群媒體上為這款鞋【代言】，她發布穿著我們的鞋訓練的影片後，成千上萬的年輕人上網訂購了一雙。"
  },
  {
    "word": "pitch in",
    "pos": "v.phr.",
    "cn_def": "出一份力；幫忙",
    "en_def": "to join others and help with work",
    "sentence": "A: How will we get all these boxes packed before the moving company arrives at eight tomorrow morning? B: If everyone in the department can {{BLANK}} for an hour after work today, we should finish in time, and the manager has promised to buy pizza for all of us.",
    "cn": "A：搬家公司明天早上八點就要到了，我們要怎麼在那之前把這些箱子全部打包好？ B：如果部門裡每個人今天下班後都能【幫忙】一個小時，我們應該能及時完成，而且經理答應請大家吃披薩。"
  },
  {
    "word": "play a part",
    "pos": "v.phr.",
    "cn_def": "起作用；扮演角色",
    "en_def": "to help cause something; to be one of the reasons for it",
    "sentence": "A: Our team won the customer service award this year, but why did the director thank the cleaning staff in her speech? B: She said that everyone in the building helps us, and that the cleaners also {{BLANK}} in our success, because a clean and comfortable lobby makes visitors feel welcome before they even talk to us.",
    "cn": "A：我們團隊今年贏得了客服獎，但主任為什麼在致詞中感謝清潔人員？ B：她說大樓裡的每個人都在幫助我們，清潔人員也在我們的成功中【發揮了作用】，因為乾淨舒適的大廳能讓訪客在和我們交談之前就感到賓至如歸。"
  }
];

const MCQS = [
  {
    "q": "Every employee who joins the tree-planting day will receive a small gift. The company wants to thank them for their _____ to a greener city.",
    "options": [
      "contribution",
      "donor",
      "contributor",
      "participation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Ms. Huang has written for the travel magazine for ten years. She is its most popular _____, and readers love her stories about small towns.",
    "options": [
      "donation",
      "funding",
      "contributor",
      "cooperation"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Hotel guests can leave unused soap and shampoo in their rooms. The hotel will _____ these items to homeless shelters in the city.",
    "options": [
      "participate",
      "donate",
      "collaborate",
      "subsidize"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The museum is free to visit every Sunday. However, visitors can leave a small _____ in the box near the front door.",
    "options": [
      "involvement",
      "donor",
      "cooperation",
      "donation"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hospital held a dinner to thank every _____ who gave money for the new cancer center. More than two hundred guests attended the event.",
    "options": [
      "funding",
      "assistance",
      "donor",
      "participation"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Our new manager has strong _____ from the whole team. Everyone believes in her plan to improve customer service this year.",
    "options": [
      "support",
      "donor",
      "contributor",
      "funding"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "If you need any _____ with your luggage, please call the front desk. A porter will come to your room right away.",
    "options": [
      "donor",
      "funding",
      "sponsorship",
      "assistance"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "After the earthquake, several countries sent food and medicine to the area. This international _____ helped thousands of families survive the cold winter.",
    "options": [
      "input",
      "aid",
      "donor",
      "contributor"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "We need five people to help clean the park on Saturday morning. Please _____ by writing your name on the list in the break room.",
    "options": [
      "subsidize",
      "endorse",
      "fund",
      "volunteer"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "A large bank has agreed to _____ the jazz festival this summer. Its name will appear on every poster and ticket.",
    "options": [
      "participate",
      "sponsor",
      "cooperate",
      "volunteer"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The soccer team lost its _____ when the drink company decided to cut its marketing budget. The players now need to find a new partner.",
    "options": [
      "sponsorship",
      "participation",
      "contributor",
      "input"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The city plans to _____ free English classes for taxi drivers. Officials hope this will help tourists get around more easily.",
    "options": [
      "cooperate",
      "participate",
      "fund",
      "volunteer"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The research team has applied for government _____ to study air pollution in the city. They will need about one million dollars.",
    "options": [
      "donor",
      "funding",
      "involvement",
      "contributor"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many companies _____ public transportation passes for their workers. This means employees only pay part of the monthly cost.",
    "options": [
      "participate",
      "collaborate",
      "volunteer",
      "subsidize"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "More than fifty companies will _____ in the job fair at the convention center. Students can talk to managers and hand in their résumés.",
    "options": [
      "subsidize",
      "endorse",
      "participate",
      "give"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The workshop is very practical and includes many group activities. Active _____ from every attendee is expected.",
    "options": [
      "participation",
      "donor",
      "funding",
      "sponsorship"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Good teachers use games and real stories to _____ their students. When learners are interested, they remember new words more easily.",
    "options": [
      "subsidize",
      "donate",
      "engage",
      "sponsor"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The report showed that the manager had no _____ in the pricing mistake. The error was made by an outside supplier.",
    "options": [
      "involvement",
      "donor",
      "sponsorship",
      "funding"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The two universities will _____ on a study of ocean plastic. Researchers from both schools will share their data and lab equipment.",
    "options": [
      "donate",
      "collaborate",
      "subsidize",
      "endorse"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new cookbook was written in _____ with a famous chef from Paris. It includes fifty easy recipes for busy families.",
    "options": [
      "donation",
      "contributor",
      "funding",
      "collaboration"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Passengers are asked to _____ with security staff at the airport. Please follow their instructions and keep your bags with you at all times.",
    "options": [
      "cooperate",
      "donate",
      "fund",
      "endorse"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The road repairs will cause some noise and traffic delays this week. We thank all local residents for their patience and _____.",
    "options": [
      "donor",
      "funding",
      "cooperation",
      "contributor"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Two trained nurses will _____ the doctor during the health check event. They will measure blood pressure and record each patient's results.",
    "options": [
      "donate",
      "subsidize",
      "volunteer",
      "assist"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "There are not enough desks for the new interns this month. Two of them will have to _____ a desk until more furniture arrives.",
    "options": [
      "sponsor",
      "share",
      "endorse",
      "fund"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The hotel will _____ free shuttle buses to the airport every hour. Guests should wait in front of the main entrance.",
    "options": [
      "participate",
      "collaborate",
      "cooperate",
      "provide"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The sales clerk saw that the shirt had a small stain. She decided to _____ the customer a twenty percent discount on it.",
    "options": [
      "participate",
      "offer",
      "collaborate",
      "endorse"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Before you leave the office tonight, please _____ this envelope to Mr. Lin at the front desk. It contains his new contract.",
    "options": [
      "give",
      "participate",
      "subsidize",
      "cooperate"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Before we change the office layout, we would like your _____. Please send us your ideas and suggestions by Friday.",
    "options": [
      "donor",
      "contributor",
      "input",
      "funding"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The mayor has promised to _____ the plan for a new bike lane downtown. Many local shop owners also support the idea.",
    "options": [
      "participate",
      "back",
      "cooperate",
      "volunteer"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The famous tennis player was paid to _____ the new sports drink. Her photo now appears on the bottles and in TV ads.",
    "options": [
      "participate",
      "collaborate",
      "cooperate",
      "endorse"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "contribution": {
    "pos": "n.",
    "en_def": "something you give or do to help something succeed",
    "cn_def": "貢獻；捐款"
  },
  "contributor": {
    "pos": "n.",
    "en_def": "a person who gives money, work or ideas to something",
    "cn_def": "貢獻者；撰稿人"
  },
  "donate": {
    "pos": "v.",
    "en_def": "to give money or goods to help a person or group",
    "cn_def": "捐贈；捐款"
  },
  "donation": {
    "pos": "n.",
    "en_def": "money or goods that you give to help a person or group",
    "cn_def": "捐款；捐贈物"
  },
  "donor": {
    "pos": "n.",
    "en_def": "a person or company that gives money or goods to help",
    "cn_def": "捐贈者"
  },
  "support": {
    "pos": "n.",
    "en_def": "help or encouragement that you give to someone",
    "cn_def": "支持；支援"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help",
    "cn_def": "協助；幫助"
  },
  "aid": {
    "pos": "n.",
    "en_def": "help such as money, food or supplies for people in need",
    "cn_def": "援助；救助"
  },
  "help": {
    "pos": "v.",
    "en_def": "to make it easier for someone to do something",
    "cn_def": "幫助；幫忙"
  },
  "volunteer": {
    "pos": "v.",
    "en_def": "to offer to do something without being asked or paid",
    "cn_def": "自願；當志工"
  },
  "voluntary": {
    "pos": "adj.",
    "en_def": "done because you want to, not because you must",
    "cn_def": "自願的；義務的"
  },
  "sponsor": {
    "pos": "v.",
    "en_def": "to pay for an event or activity, often to advertise your company",
    "cn_def": "贊助"
  },
  "sponsorship": {
    "pos": "n.",
    "en_def": "money or support given to pay for an event or activity",
    "cn_def": "贊助"
  },
  "fund": {
    "pos": "v.",
    "en_def": "to provide money for something",
    "cn_def": "資助；提供資金"
  },
  "funding": {
    "pos": "n.",
    "en_def": "money that is given for a particular purpose",
    "cn_def": "資金；經費"
  },
  "subsidize": {
    "pos": "v.",
    "en_def": "to pay part of the cost of something",
    "cn_def": "補助；補貼"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參加；參與"
  },
  "participation": {
    "pos": "n.",
    "en_def": "the act of taking part in something",
    "cn_def": "參與；參加"
  },
  "engage": {
    "pos": "v.",
    "en_def": "to get someone interested and involved in something",
    "cn_def": "吸引…參與；參與"
  },
  "involvement": {
    "pos": "n.",
    "en_def": "the act of taking part in something",
    "cn_def": "參與；牽涉"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with others to make or do something",
    "cn_def": "合作；協作"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "the act of working together with others",
    "cn_def": "合作"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together or do what someone asks",
    "cn_def": "合作；配合"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "the act of working together to get something done",
    "cn_def": "合作；配合"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone",
    "cn_def": "協助；幫助"
  },
  "share": {
    "pos": "v.",
    "en_def": "to use something together with others; to tell others something",
    "cn_def": "分享；共用"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give someone something they need",
    "cn_def": "提供"
  },
  "offer": {
    "pos": "v.",
    "en_def": "to say you are willing to give or do something",
    "cn_def": "提供；主動提出"
  },
  "give": {
    "pos": "v.",
    "en_def": "to let someone have something",
    "cn_def": "給；給予"
  },
  "input": {
    "pos": "n.",
    "en_def": "ideas, advice or information that you give to help with something",
    "cn_def": "意見；投入"
  },
  "back": {
    "pos": "v.",
    "en_def": "to support a person, plan or idea",
    "cn_def": "支持；支援"
  },
  "endorse": {
    "pos": "v.",
    "en_def": "to say publicly that you support a person, product or idea",
    "cn_def": "支持；背書；代言"
  },
  "pitch in": {
    "pos": "v.phr.",
    "en_def": "to join others and help with work",
    "cn_def": "出一份力；幫忙"
  },
  "play a part": {
    "pos": "v.phr.",
    "en_def": "to help cause something; to be one of the reasons for it",
    "cn_def": "起作用；扮演角色"
  }
};

const EXTRA_GLOSSES = {};
