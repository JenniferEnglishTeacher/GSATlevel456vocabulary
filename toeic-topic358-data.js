// Topic 358 Quiz Data: Smart 聰明
// Source word list: https://www.examword.com/group-topic/smart — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T358 - Smart 聰明",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "intelligent",
    "pos": "adj.",
    "cn_def": "聰明的；有智慧的",
    "en_def": "able to learn and understand things quickly",
    "sentence": "A: Why did the hotel decide to replace its old booking program with the new one last month? B: The new system is very {{BLANK}}, so it can learn what guests usually want, suggest the best rooms, and answer simple questions even at night when the front desk is busy.",
    "cn": "A：飯店上個月為什麼決定把舊的訂房程式換成新的？ B：新系統非常【聰明】，能學習客人通常想要什麼、推薦最合適的房間，甚至在晚上櫃台很忙的時候也能回答簡單的問題。"
  },
  {
    "word": "clever",
    "pos": "adj.",
    "cn_def": "聰明的；機靈的",
    "en_def": "good at thinking of new ideas or ways to do things",
    "sentence": "A: How did the small bakery on Main Street get so many new customers this spring? B: The owner had a {{BLANK}} idea: she gave free coffee to anyone who posted a photo of her cakes online, and soon people from all over the city started visiting.",
    "cn": "A：主街上那家小麵包店今年春天怎麼吸引到那麼多新客人？ B：老闆有個【聰明】的點子：凡是把她的蛋糕照片貼上網的人都能免費喝咖啡，很快全市各地的人都開始來光顧了。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "聰明的；前途光明的",
    "en_def": "intelligent and quick to learn; also full of hope",
    "sentence": "A: Do you think the new intern in the design department will stay with us after the summer? B: I hope so, because she is very {{BLANK}}, she learns our software faster than anyone, and the director already said he wants to offer her a full-time job.",
    "cn": "A：你覺得設計部的新實習生暑假後會留下來嗎？ B：希望如此，因為她非常【聰明】，學我們軟體的速度比誰都快，而且主管已經說想給她一份全職工作了。"
  },
  {
    "word": "brilliant",
    "pos": "adj.",
    "cn_def": "傑出的；出色的",
    "en_def": "extremely clever or extremely good",
    "sentence": "A: Have you heard how the new advertising campaign for our sports drinks is doing in Asia? B: Yes, it has been a {{BLANK}} success, because sales doubled in just one month, and the marketing team is planning to use the same idea in Europe next year.",
    "cn": "A：你有聽說我們運動飲料的新廣告活動在亞洲的表現如何嗎？ B：有，它是一次【輝煌】的成功，因為銷量在短短一個月內就翻倍了，行銷團隊打算明年在歐洲也採用同樣的點子。"
  },
  {
    "word": "wise",
    "pos": "adj.",
    "cn_def": "明智的",
    "en_def": "showing good judgment based on knowledge and experience",
    "sentence": "A: Should I book my flight to the trade fair in Tokyo now, or wait until next month when I know my schedule? B: It would be {{BLANK}} to book now, because ticket prices usually go up quickly before big events and the hotels near the hall fill up early.",
    "cn": "A：我應該現在就訂去東京商展的機票，還是等下個月確定行程後再訂？ B：現在訂會比較【明智】，因為大型活動前機票價格通常漲得很快，而且展場附近的飯店也很早就客滿。"
  },
  {
    "word": "wisdom",
    "pos": "n.",
    "cn_def": "智慧；明智",
    "en_def": "good judgment and knowledge that come from experience",
    "sentence": "A: Why does the company invite retired managers to speak to the new employees every year? B: They share the {{BLANK}} they gained over forty years in business, such as how to deal with difficult clients and how to stay calm when a project goes wrong.",
    "cn": "A：公司為什麼每年都邀請退休經理來對新員工演講？ B：他們分享在商界四十年累積的【智慧】，例如如何應付難纏的客戶，以及專案出問題時如何保持冷靜。"
  },
  {
    "word": "sharp",
    "pos": "adj.",
    "cn_def": "敏銳的；急劇的",
    "en_def": "quick to notice and understand things; also sudden and large",
    "sentence": "A: How did the accountant find the mistake in last year's report when nobody else noticed it? B: She has a very {{BLANK}} mind for numbers, so after only a few minutes she saw that two sales figures had been entered twice in the spreadsheet.",
    "cn": "A：其他人都沒發現，會計師是怎麼找到去年報告中的錯誤？ B：她對數字的頭腦非常【敏銳】，只看了幾分鐘就發現試算表裡有兩筆銷售數字被重複輸入了。"
  },
  {
    "word": "quick-witted",
    "pos": "adj.",
    "cn_def": "反應快的；機智的",
    "en_def": "able to think and answer quickly and cleverly",
    "sentence": "A: What happened when the projector stopped working in the middle of your sales presentation yesterday? B: Luckily, our team leader is very {{BLANK}}, so she made a funny joke, drew the main chart on the whiteboard, and the clients were still happy and signed the contract.",
    "cn": "A：昨天你們銷售簡報做到一半投影機壞掉時發生了什麼事？ B：幸好我們組長反應很【機智】，她開了個好笑的玩笑，把主要圖表畫在白板上，客戶仍然很滿意並簽了合約。"
  },
  {
    "word": "insightful",
    "pos": "adj.",
    "cn_def": "有洞察力的；見解深刻的",
    "en_def": "showing a clear and deep understanding of a situation",
    "sentence": "A: Did you find the speaker at this morning's marketing conference helpful for our project? B: Yes, her talk was really {{BLANK}}, because she explained why young customers stop using an app after one week and gave us several ideas we can try right away.",
    "cn": "A：你覺得今天早上行銷研討會的講者對我們的專案有幫助嗎？ B：有，她的演講真的很【有見解】，因為她解釋了年輕客戶為什麼用一個應用程式一週後就不再使用，還給了我們幾個可以馬上試試看的點子。"
  },
  {
    "word": "perceptive",
    "pos": "adj.",
    "cn_def": "觀察敏銳的；有洞察力的",
    "en_def": "quick to notice and understand things that are not obvious",
    "sentence": "A: How did the store manager know that the new customer was unhappy even though he didn't complain? B: She is very {{BLANK}}, so she noticed that he kept looking at his watch and frowning, and she quickly asked another cashier to open a second line.",
    "cn": "A：雖然那位新顧客沒有抱怨，店經理怎麼知道他不高興？ B：她觀察非常【敏銳】，注意到他一直看手錶又皺眉頭，於是很快請另一位收銀員開第二條結帳通道。"
  },
  {
    "word": "knowledgeable",
    "pos": "adj.",
    "cn_def": "知識淵博的；很懂的",
    "en_def": "knowing a lot about a subject",
    "sentence": "A: Where can I get some advice about which tourist attractions to visit during my free afternoon in the city? B: Ask the staff at the front desk, because they are very {{BLANK}} about local museums and restaurants and can also book tickets for you.",
    "cn": "A：我在城裡有一個空閒的下午，可以去哪裡請教該參觀哪些景點？ B：去問櫃台人員吧，因為他們對當地的博物館和餐廳非常【了解】，還可以幫你訂票。"
  },
  {
    "word": "educated",
    "pos": "adj.",
    "cn_def": "受過教育的；有學識的",
    "en_def": "having received a good education",
    "sentence": "A: Why is the tech company opening its new research center in this city instead of the capital? B: The city has two large universities, so there are many highly {{BLANK}} young people here who can work as engineers, and office rent is much cheaper too.",
    "cn": "A：那家科技公司為什麼把新研發中心設在這座城市而不是首都？ B：這座城市有兩所大型大學，所以這裡有許多受過良好【教育】、能當工程師的年輕人，而且辦公室租金也便宜得多。"
  },
  {
    "word": "logical",
    "pos": "adj.",
    "cn_def": "合乎邏輯的；合理的",
    "en_def": "reasonable and sensible; following clear thinking",
    "sentence": "A: Now that the customers have tested the first version of our app, what should we do next? B: The next {{BLANK}} step is to fix the problems they reported, then run a second test in two weeks before we start the full marketing campaign.",
    "cn": "A：既然客戶已經測試過我們應用程式的第一版，接下來該做什麼？ B：下一個【合理】的步驟是修正他們回報的問題，然後在兩週內進行第二次測試，再開始全面的行銷活動。"
  },
  {
    "word": "analytical",
    "pos": "adj.",
    "cn_def": "分析的；善於分析的",
    "en_def": "using careful study of facts and details to understand something",
    "sentence": "A: What kind of person are you looking for to fill the new position in the finance department? B: We need someone with strong {{BLANK}} skills who can study sales data every week, find trends, and explain them clearly to managers who are not experts.",
    "cn": "A：財務部的新職位，你們在找什麼樣的人？ B：我們需要一位有很強【分析】能力的人，能每週研究銷售數據、找出趨勢，並清楚地向非專業的經理們說明。"
  },
  {
    "word": "rational",
    "pos": "adj.",
    "cn_def": "理性的；合理的",
    "en_def": "based on clear thinking and reason, not feelings",
    "sentence": "A: The stock market dropped again today, so should we sell all our shares before we lose more money? B: Let's stay calm and make a {{BLANK}} decision based on the numbers, because selling in a panic often leads to bigger losses than waiting a few weeks.",
    "cn": "A：今天股市又跌了，我們應該在虧更多錢之前把股票全部賣掉嗎？ B：我們保持冷靜，根據數字做出【理性】的決定吧，因為恐慌拋售往往比等幾週造成更大的損失。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new methods or ideas",
    "sentence": "A: Why did our company win the national business award at the ceremony last night? B: The judges liked our {{BLANK}} delivery system, which uses small electric robots to bring packages to customers' doors and has cut delivery times by half.",
    "cn": "A：我們公司昨晚為什麼在頒獎典禮上贏得全國企業獎？ B：評審很欣賞我們【創新】的送貨系統，它用小型電動機器人把包裹送到客戶家門口，讓送貨時間減少了一半。"
  },
  {
    "word": "inventive",
    "pos": "adj.",
    "cn_def": "有創造力的；善於發明的",
    "en_def": "good at creating new and original things",
    "sentence": "A: How did the restaurant manage to stay busy even after the price of beef went up so much? B: The chef is very {{BLANK}}, so she created several new dishes with chicken and local vegetables, and many customers say they like the new menu even more.",
    "cn": "A：牛肉價格漲那麼多之後，那家餐廳怎麼還能保持生意興隆？ B：主廚非常【有創意】，她用雞肉和在地蔬菜研發了幾道新菜，很多客人說他們更喜歡新菜單。"
  },
  {
    "word": "resourceful",
    "pos": "adj.",
    "cn_def": "足智多謀的；善於應變的",
    "en_def": "good at finding ways to solve problems with what is available",
    "sentence": "A: How did the event team finish decorating the hall when the supplier forgot to deliver the flowers? B: They were very {{BLANK}}: they borrowed plants from the hotel lobby, made paper decorations, and everything looked lovely when the guests arrived at seven.",
    "cn": "A：供應商忘了送花，活動團隊是怎麼完成會場布置的？ B：他們非常【善於應變】：向飯店大廳借了植物，又做了紙製裝飾，賓客七點到場時一切看起來都很漂亮。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的；能幹的",
    "en_def": "having the skill or ability to do something",
    "sentence": "A: Can the new machine in the factory really replace the two old ones we have been using for years? B: Yes, it is {{BLANK}} of producing five hundred bottles per hour, and it uses less electricity, so the manager expects to save a lot of money.",
    "cn": "A：工廠的新機器真的能取代我們用了好幾年的兩台舊機器嗎？ B：可以，它【能夠】每小時生產五百瓶，而且用電量較少，所以經理預計可以省下很多錢。"
  },
  {
    "word": "competent",
    "pos": "adj.",
    "cn_def": "能幹的；稱職的",
    "en_def": "having enough skill to do something well",
    "sentence": "A: Are you worried about leaving the office for two weeks during the busiest season of the year? B: Not really, because my assistant is very {{BLANK}}, she knows all our clients, and she has handled the monthly reports by herself several times before.",
    "cn": "A：在一年中最忙的季節離開辦公室兩週，你會擔心嗎？ B：不太會，因為我的助理非常【稱職】，她認識我們所有的客戶，之前也自己處理過好幾次月報。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的",
    "en_def": "having a natural ability to do something well",
    "sentence": "A: Who designed the beautiful posters for the music festival that are hanging all over the train station? B: A very {{BLANK}} young artist from our graphic design team made them, and several companies have already called to ask if she can work for them too.",
    "cn": "A：掛滿火車站的那些音樂節漂亮海報是誰設計的？ B：是我們平面設計團隊一位很【有才華】的年輕藝術家做的，已經有好幾家公司打電話來問她能不能也幫他們工作。"
  },
  {
    "word": "gifted",
    "pos": "adj.",
    "cn_def": "有天賦的；資優的",
    "en_def": "having a special natural ability or very high intelligence",
    "sentence": "A: Why does the language school offer an extra evening class for some of its younger students? B: The class is for {{BLANK}} children who learn much faster than others, so they can study advanced reading and writing without getting bored in the normal lessons.",
    "cn": "A：語言學校為什麼要為部分年紀較小的學生開設額外的晚間課程？ B：這門課是給學得比別人快很多的【資優】孩子上的，讓他們能學習進階的閱讀和寫作，不會在一般課堂上感到無聊。"
  },
  {
    "word": "alert",
    "pos": "adj.",
    "cn_def": "警覺的；機警的",
    "en_def": "quick to notice things and ready to act",
    "sentence": "A: Why do the security guards at the warehouse drink so much coffee during the night shift? B: They need to stay {{BLANK}} until morning, because they must watch all the cameras and walk around the building every hour to make sure nobody breaks in.",
    "cn": "A：倉庫的保全為什麼在夜班時喝那麼多咖啡？ B：他們必須一直保持【警覺】到早上，因為要監看所有監視器，每小時還要繞建築物巡邏一圈，確保沒有人闖入。"
  },
  {
    "word": "savvy",
    "pos": "adj.",
    "cn_def": "精明的；懂行的",
    "en_def": "having practical knowledge and good sense about something",
    "sentence": "A: Why did the store hire a university student to manage its online accounts instead of an older employee? B: She is very social-media {{BLANK}}, so she knows which photos and videos young shoppers like, and our number of online followers grew quickly this year.",
    "cn": "A：商店為什麼雇用一位大學生而不是資深員工來管理網路帳號？ B：她非常【精通】社群媒體，知道年輕消費者喜歡哪些照片和影片，今年我們的網路追蹤人數成長得很快。"
  },
  {
    "word": "astute",
    "pos": "adj.",
    "cn_def": "精明的；敏銳的",
    "en_def": "clever at understanding situations and using them to your advantage",
    "sentence": "A: How did Mr. Wang's small trading company become so successful in only ten years? B: He is a very {{BLANK}} businessman who bought land near the new airport before prices rose, and he always seems to know which products will become popular.",
    "cn": "A：王先生的小貿易公司怎麼能在短短十年內就這麼成功？ B：他是個非常【精明】的商人，在地價上漲前就買下新機場附近的土地，而且他似乎總是知道哪些產品會流行。"
  },
  {
    "word": "ingenious",
    "pos": "adj.",
    "cn_def": "巧妙的；獨創的",
    "en_def": "very clever and original",
    "sentence": "A: How did the building manager solve the problem of too many cars in the small parking lot? B: She came up with an {{BLANK}} plan: employees who share a car get the best spaces, so now fewer people drive alone and there is enough room for visitors.",
    "cn": "A：大樓管理員是怎麼解決小停車場車太多的問題？ B：她想出一個【巧妙】的計畫：共乘的員工可以停最好的車位，所以現在獨自開車的人變少了，訪客也有足夠的停車空間。"
  },
  {
    "word": "scholarly",
    "pos": "adj.",
    "cn_def": "學術的；學者的",
    "en_def": "related to serious academic study",
    "sentence": "A: Why does the bank pay a university professor to give a talk to its managers every year? B: She has written many {{BLANK}} books about world economics, and her careful research helps our managers understand what may happen to interest rates next year.",
    "cn": "A：銀行為什麼每年付錢請一位大學教授來對經理們演講？ B：她寫過許多關於世界經濟的【學術】著作，她嚴謹的研究幫助我們的經理了解明年利率可能會有什麼變化。"
  },
  {
    "word": "thoughtful",
    "pos": "adj.",
    "cn_def": "體貼的；深思熟慮的",
    "en_def": "kind and thinking about other people's needs; also showing careful thought",
    "sentence": "A: Did you know that our client sent the whole team a thank-you card after the project ended last week? B: Yes, it was very {{BLANK}} of her, and she also included a small box of cookies for each of us, which made everyone in the office smile.",
    "cn": "A：你知道上週專案結束後，我們的客戶寄了感謝卡給全組嗎？ B：知道，她真的很【體貼】，還給我們每個人附上一小盒餅乾，讓辦公室裡每個人都笑了。"
  },
  {
    "word": "mindful",
    "pos": "adj.",
    "cn_def": "留心的；注意的",
    "en_def": "remembering something and thinking about it carefully",
    "sentence": "A: Is there anything I should remember when I make phone calls in the shared office downstairs? B: Please be {{BLANK}} of the other people working there, so keep your voice low, take long calls in the meeting room, and turn off your ringtone.",
    "cn": "A：在樓下的共享辦公室打電話時，有什麼我該注意的嗎？ B：請【留意】在那裡工作的其他人，所以要放低音量，長時間的電話到會議室去講，並把鈴聲關掉。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why were so many people standing outside the new electronics store when it opened on Saturday morning? B: They were {{BLANK}} about the robot that greets customers at the door, so many of them took photos and asked the staff how it works.",
    "cn": "A：週六早上那家新電子產品店開幕時，為什麼有那麼多人站在外面？ B：他們對在門口迎接顧客的機器人很【好奇】，所以很多人拍照，還問店員它是怎麼運作的。"
  },
  {
    "word": "decisive",
    "pos": "adj.",
    "cn_def": "果斷的；決定性的",
    "en_def": "able to make decisions quickly and firmly; also very important to a result",
    "sentence": "A: How did the new CEO stop the company from losing more money after the terrible first quarter? B: She took {{BLANK}} action right away: she closed three stores that were losing money, cut travel costs, and moved more of our sales online.",
    "cn": "A：第一季表現很糟之後，新執行長是如何阻止公司繼續虧損的？ B：她立刻採取【果斷】的行動：關閉三家虧錢的門市、削減差旅費用，並把更多銷售轉到網路上。"
  },
  {
    "word": "strategic",
    "pos": "adj.",
    "cn_def": "策略性的；戰略的",
    "en_def": "carefully planned to achieve a long-term goal",
    "sentence": "A: Why are the two airlines working together now when they used to be such strong competitors? B: They formed a {{BLANK}} partnership so they can share airport lounges and flight routes, which helps both companies attract more business travelers in Asia.",
    "cn": "A：那兩家航空公司以前是很強的競爭對手，為什麼現在要合作？ B：他們建立了【策略】合作夥伴關係，可以共享機場貴賓室和航線，幫助兩家公司在亞洲吸引更多商務旅客。"
  },
  {
    "word": "intellect",
    "pos": "n.",
    "cn_def": "智力；才智",
    "en_def": "the ability to think and understand ideas",
    "sentence": "A: Why do so many young researchers want to work in Dr. Lin's laboratory at the university? B: She is respected for her powerful {{BLANK}} and her kindness, and she spends a lot of time helping each team member plan their research and write reports.",
    "cn": "A：為什麼那麼多年輕研究人員都想在大學的林博士實驗室工作？ B：她以過人的【才智】和親切而受人敬重，而且會花很多時間幫助每位團隊成員規劃研究和撰寫報告。"
  },
  {
    "word": "intellectually",
    "pos": "adv.",
    "cn_def": "在智力上；理智上",
    "en_def": "in a way that relates to thinking and understanding",
    "sentence": "A: How do the new staff members feel about the three-month leadership training program so far? B: Most of them say it is {{BLANK}} challenging because they must solve real business cases every day, but they also feel they are learning much more than in school.",
    "cn": "A：新進員工目前對三個月的領導力培訓課程感覺如何？ B：大多數人說這在【智力上】很有挑戰性，因為每天都得解決真實的商業案例，但他們也覺得學到的比在學校多得多。"
  }
];

const MCQS = [
  {
    "q": "The warehouse now uses _____ software that predicts which products will sell out. Managers receive a short report every morning before nine.",
    "options": [
      "intelligent",
      "gifted",
      "talented",
      "curious"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Giving free coffee to early shoppers was a _____ trick to bring in more customers. The store was crowded before nine every day.",
    "options": [
      "decisive",
      "clever",
      "alert",
      "scholarly"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Chen has a _____ future in this company. The directors plan to promote her to team leader next spring.",
    "options": [
      "sharp",
      "alert",
      "bright",
      "savvy"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The new advertising campaign was a _____ success. Sales of the sports drink doubled within the first month in Asia.",
    "options": [
      "mindful",
      "curious",
      "alert",
      "brilliant"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "It would be _____ to back up all your files before the system update. Some data may be lost during the process.",
    "options": [
      "wise",
      "talented",
      "gifted",
      "curious"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Conventional _____ says that prices fall after the holidays. However, this year most retailers kept their prices high until March.",
    "options": [
      "budget",
      "wisdom",
      "schedule",
      "decision"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Delivery costs went up after a _____ rise in fuel prices. Several shipping companies have already raised their fees by ten percent.",
    "options": [
      "wise",
      "gifted",
      "sharp",
      "scholarly"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Thank you for your _____ comments on our sales report. They helped the team see the real problem much more clearly.",
    "options": [
      "gifted",
      "alert",
      "decisive",
      "insightful"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our front desk staff are very _____ about local tourist attractions. Feel free to ask them for advice during your stay.",
    "options": [
      "knowledgeable",
      "decisive",
      "gifted",
      "alert"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The next _____ step is to test the product with real customers. After that, the factory can start mass production in June.",
    "options": [
      "curious",
      "logical",
      "talented",
      "mindful"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Applicants should have strong _____ skills and experience with spreadsheets. The successful candidate will review sales data every week.",
    "options": [
      "curious",
      "mindful",
      "analytical",
      "gifted"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Let's try to make a _____ decision based on the numbers. Emotions should not guide our investment choices during a market drop.",
    "options": [
      "talented",
      "gifted",
      "curious",
      "rational"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our firm invests heavily in _____ technologies such as robotics and artificial intelligence. Last year we opened two new research centers.",
    "options": [
      "innovative",
      "mindful",
      "curious",
      "decisive"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The event team had to be very _____ when the flowers never arrived. They borrowed plants from the lobby to decorate the hall.",
    "options": [
      "scholarly",
      "resourceful",
      "gifted",
      "curious"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The new printer is _____ of producing fifty color pages per minute. It will replace the two old machines on the third floor.",
    "options": [
      "competent",
      "talented",
      "capable",
      "alert"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "We need a _____ accountant to handle the year-end audit. The candidate must have at least five years of experience in finance.",
    "options": [
      "curious",
      "mindful",
      "alert",
      "competent"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The agency represents many _____ young musicians from Taiwan and Japan. Several of them have recorded new albums this year.",
    "options": [
      "talented",
      "logical",
      "rational",
      "analytical"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The school runs a special program for _____ children with very high test scores. Parents can apply for it after an interview.",
    "options": [
      "decisive",
      "gifted",
      "alert",
      "rational"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Security guards must stay _____ throughout the night shift. They check all the cameras and walk around the building every hour.",
    "options": [
      "gifted",
      "scholarly",
      "alert",
      "innovative"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Our new marketing assistant is very social-media _____. She grew our online followers by forty percent in only six months.",
    "options": [
      "rational",
      "scholarly",
      "logical",
      "savvy"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Mr. Wang is a highly _____ investor who bought land near the airport early. His company is now worth several million dollars.",
    "options": [
      "astute",
      "sleepy",
      "noisy",
      "scholarly"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The engineer came up with a truly _____ solution to the parking problem. Employees who share cars now get the best spaces.",
    "options": [
      "nervous",
      "ingenious",
      "empty",
      "rude"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The professor has published many _____ articles on world economics. Her research is often quoted in business newspapers and on television.",
    "options": [
      "decisive",
      "alert",
      "scholarly",
      "savvy"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "It was very _____ of you to send flowers to the client's office. She called this morning to thank the whole team.",
    "options": [
      "analytical",
      "logical",
      "scholarly",
      "thoughtful"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Please be _____ of other passengers when you use your phone on the train. Keep your voice low and your calls short.",
    "options": [
      "mindful",
      "capable",
      "curious",
      "decisive"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Many diners were _____ about the new items on the lunch menu. They asked the waiters lots of questions before ordering.",
    "options": [
      "decisive",
      "curious",
      "competent",
      "logical"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The manager took _____ action to stop the losses. She closed two stores that were losing money within a single week.",
    "options": [
      "curious",
      "mindful",
      "decisive",
      "scholarly"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The two firms formed a _____ partnership to enter the Asian market. They will share offices, warehouses and delivery networks.",
    "options": [
      "curious",
      "alert",
      "gifted",
      "strategic"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Dr. Lin is respected for her powerful _____ and her kindness to students. Many of them visit her office long after graduation.",
    "options": [
      "intellect",
      "salary",
      "schedule",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The leadership course is _____ challenging but very rewarding. Participants must solve real business cases with their teams every day.",
    "options": [
      "politely",
      "intellectually",
      "loudly",
      "carelessly"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "intelligent": {
    "pos": "adj.",
    "en_def": "able to learn and understand things quickly",
    "cn_def": "聰明的；有智慧的"
  },
  "clever": {
    "pos": "adj.",
    "en_def": "good at thinking of new ideas or ways to do things",
    "cn_def": "聰明的；機靈的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "intelligent and quick to learn; also full of hope",
    "cn_def": "聰明的；前途光明的"
  },
  "brilliant": {
    "pos": "adj.",
    "en_def": "extremely clever or extremely good",
    "cn_def": "傑出的；出色的"
  },
  "wise": {
    "pos": "adj.",
    "en_def": "showing good judgment based on knowledge and experience",
    "cn_def": "明智的"
  },
  "wisdom": {
    "pos": "n.",
    "en_def": "good judgment and knowledge that come from experience",
    "cn_def": "智慧；明智"
  },
  "sharp": {
    "pos": "adj.",
    "en_def": "quick to notice and understand things; also sudden and large",
    "cn_def": "敏銳的；急劇的"
  },
  "quick-witted": {
    "pos": "adj.",
    "en_def": "able to think and answer quickly and cleverly",
    "cn_def": "反應快的；機智的"
  },
  "insightful": {
    "pos": "adj.",
    "en_def": "showing a clear and deep understanding of a situation",
    "cn_def": "有洞察力的；見解深刻的"
  },
  "perceptive": {
    "pos": "adj.",
    "en_def": "quick to notice and understand things that are not obvious",
    "cn_def": "觀察敏銳的；有洞察力的"
  },
  "knowledgeable": {
    "pos": "adj.",
    "en_def": "knowing a lot about a subject",
    "cn_def": "知識淵博的；很懂的"
  },
  "educated": {
    "pos": "adj.",
    "en_def": "having received a good education",
    "cn_def": "受過教育的；有學識的"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "reasonable and sensible; following clear thinking",
    "cn_def": "合乎邏輯的；合理的"
  },
  "analytical": {
    "pos": "adj.",
    "en_def": "using careful study of facts and details to understand something",
    "cn_def": "分析的；善於分析的"
  },
  "rational": {
    "pos": "adj.",
    "en_def": "based on clear thinking and reason, not feelings",
    "cn_def": "理性的；合理的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new methods or ideas",
    "cn_def": "創新的"
  },
  "inventive": {
    "pos": "adj.",
    "en_def": "good at creating new and original things",
    "cn_def": "有創造力的；善於發明的"
  },
  "resourceful": {
    "pos": "adj.",
    "en_def": "good at finding ways to solve problems with what is available",
    "cn_def": "足智多謀的；善於應變的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the skill or ability to do something",
    "cn_def": "有能力的；能幹的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill to do something well",
    "cn_def": "能幹的；稱職的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having a special natural ability or very high intelligence",
    "cn_def": "有天賦的；資優的"
  },
  "alert": {
    "pos": "adj.",
    "en_def": "quick to notice things and ready to act",
    "cn_def": "警覺的；機警的"
  },
  "savvy": {
    "pos": "adj.",
    "en_def": "having practical knowledge and good sense about something",
    "cn_def": "精明的；懂行的"
  },
  "astute": {
    "pos": "adj.",
    "en_def": "clever at understanding situations and using them to your advantage",
    "cn_def": "精明的；敏銳的"
  },
  "ingenious": {
    "pos": "adj.",
    "en_def": "very clever and original",
    "cn_def": "巧妙的；獨創的"
  },
  "scholarly": {
    "pos": "adj.",
    "en_def": "related to serious academic study",
    "cn_def": "學術的；學者的"
  },
  "thoughtful": {
    "pos": "adj.",
    "en_def": "kind and thinking about other people's needs; also showing careful thought",
    "cn_def": "體貼的；深思熟慮的"
  },
  "mindful": {
    "pos": "adj.",
    "en_def": "remembering something and thinking about it carefully",
    "cn_def": "留心的；注意的"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "decisive": {
    "pos": "adj.",
    "en_def": "able to make decisions quickly and firmly; also very important to a result",
    "cn_def": "果斷的；決定性的"
  },
  "strategic": {
    "pos": "adj.",
    "en_def": "carefully planned to achieve a long-term goal",
    "cn_def": "策略性的；戰略的"
  },
  "intellect": {
    "pos": "n.",
    "en_def": "the ability to think and understand ideas",
    "cn_def": "智力；才智"
  },
  "intellectually": {
    "pos": "adv.",
    "en_def": "in a way that relates to thinking and understanding",
    "cn_def": "在智力上；理智上"
  }
};

const EXTRA_GLOSSES = {};
