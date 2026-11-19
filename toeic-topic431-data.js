// Topic 431 Quiz Data: Volunteer 志工
// Source word list: https://www.examword.com/group-topic/volunteer — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T431 - Volunteer 志工",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "charity",
    "pos": "n.",
    "cn_def": "慈善機構",
    "en_def": "an organization that collects money or goods to help people in need",
    "sentence": "A: Our company wants to give part of this year's profits to people in need, but which group should we choose to work with? B: The marketing team suggested a local {{BLANK}} that provides free meals and warm clothes to homeless families, because they report clearly how every dollar is spent.",
    "cn": "A：我們公司想把今年的部分利潤捐給有需要的人，但我們應該選擇和哪個團體合作？ B：行銷團隊建議找一家當地的【慈善機構】，他們為無家可歸的家庭提供免費餐點和保暖衣物，因為他們會清楚報告每一塊錢的用途。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "all the people who live in the same area",
    "sentence": "A: Why did the bank decide to open a free reading room on the first floor of its new branch downtown? B: The manager believes the bank should give something back to the local {{BLANK}}, so families in the neighborhood can borrow books and children can do homework there after school.",
    "cn": "A：為什麼銀行決定在市中心新分行的一樓開設免費閱覽室？ B：經理認為銀行應該回饋當地【社區】，讓附近的家庭可以借書，孩子們放學後也可以在那裡寫功課。"
  },
  {
    "word": "service",
    "pos": "n.",
    "cn_def": "服務",
    "en_def": "work done to help other people or the public",
    "sentence": "A: Do employees at your company get any paid time off to help with projects outside the office? B: Yes, every staff member can take two days a year for community {{BLANK}}, such as cleaning parks or teaching computer skills to seniors, and the company still pays their full salary for those days.",
    "cn": "A：你們公司的員工有帶薪假可以去協助辦公室以外的計畫嗎？ B：有，每位員工每年可以請兩天假去做社區【服務】，例如清理公園或教長者電腦技能，公司那幾天仍然支付全薪。"
  },
  {
    "word": "help",
    "pos": "v.",
    "cn_def": "幫助",
    "en_def": "to make it easier for someone to do something",
    "sentence": "A: The new interns look confused about the filing system, and I have a client meeting in ten minutes, so what should we do? B: Don't worry, I can stay here and {{BLANK}} them sort the documents by date, and then I will show them where the finished folders should go before lunch.",
    "cn": "A：新來的實習生似乎對檔案系統很困惑，而我十分鐘後要和客戶開會，我們該怎麼辦？ B：別擔心，我可以留下來【幫助】他們按日期整理文件，然後在午餐前告訴他們完成的資料夾要放在哪裡。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；支援",
    "en_def": "to give help, money, or encouragement to someone or something",
    "sentence": "A: Why is the hotel giving free rooms to the hospital this month instead of selling them to tourists? B: The owner wants to {{BLANK}} families who travel from far away to visit sick relatives, because many of them cannot afford to stay in the city for several weeks.",
    "cn": "A：為什麼這家飯店這個月把免費房間提供給醫院，而不是賣給觀光客？ B：老闆想【支持】那些從遠方來探望生病親人的家庭，因為他們很多人負擔不起在城市裡住好幾個星期。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助",
    "en_def": "to help someone do a job",
    "sentence": "A: The charity concert starts at seven, but who will show guests to their seats and answer their questions at the entrance? B: Ten students from the business college have agreed to {{BLANK}} the staff at the front door, and they will also hand out programs and collect the donation boxes after the show.",
    "cn": "A：慈善音樂會七點開始，但誰會在入口帶客人入座並回答他們的問題？ B：商學院的十位學生已經同意在大門口【協助】工作人員，演出結束後他們還會發節目單並收回捐款箱。"
  },
  {
    "word": "donate",
    "pos": "v.",
    "cn_def": "捐贈",
    "en_def": "to give money or goods to help a person or organization",
    "sentence": "A: Our office is moving next month, so what should we do with all the old desks, chairs, and computers that still work well? B: The manager has decided to {{BLANK}} them to a nearby school that cannot afford new furniture, and a truck will pick everything up next Friday morning.",
    "cn": "A：我們辦公室下個月要搬家，那些還很好用的舊桌子、椅子和電腦該怎麼處理？ B：經理決定把它們【捐贈】給附近一所買不起新家具的學校，下週五早上會有卡車來把所有東西載走。"
  },
  {
    "word": "donation",
    "pos": "n.",
    "cn_def": "捐款；捐贈物",
    "en_def": "money or goods that you give to help others",
    "sentence": "A: How did the animal shelter manage to build a new kitchen and buy so much food for the dogs this winter? B: A large furniture company made a generous {{BLANK}} last month after its employees visited the shelter, and several local restaurants also promised to send leftover food every week.",
    "cn": "A：這家動物收容所今年冬天是怎麼蓋了新廚房又買了那麼多狗食？ B：一家大型家具公司的員工上個月參觀收容所後，公司捐了一筆慷慨的【捐款】，好幾家當地餐廳也承諾每週送來剩餘的食物。"
  },
  {
    "word": "fundraising",
    "pos": "n.",
    "cn_def": "募款",
    "en_def": "the activity of collecting money for a charity or project",
    "sentence": "A: The children's hospital needs a new machine, but it costs a lot, so how is the staff planning to pay for it? B: They are holding a {{BLANK}} dinner at the city hotel next month, and companies can buy tables for their employees while the money from ticket sales goes straight to the hospital.",
    "cn": "A：兒童醫院需要一台新機器，但非常昂貴，工作人員打算怎麼支付？ B：他們下個月將在市區飯店舉辦一場【募款】晚宴，企業可以為員工購買整桌座位，而門票收入會直接交給醫院。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "籌辦；組織",
    "en_def": "to plan and arrange an event or activity",
    "sentence": "A: Who is responsible for planning the beach cleanup that our department is doing next Saturday morning? B: Linda from Human Resources offered to {{BLANK}} the whole event, so she is booking the bus, ordering gloves and trash bags, and making sure everyone gets lunch after the work is finished.",
    "cn": "A：我們部門下週六早上要做的淨灘活動是誰負責規劃的？ B：人資部的琳達主動提出要【籌辦】整個活動，所以她正在訂巴士、訂購手套和垃圾袋，並確保大家在工作結束後都有午餐。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity",
    "sentence": "A: How many employees have signed up to work at the food bank during the holiday season this year? B: More than forty people want to {{BLANK}} this time, which is twice as many as last year, so the manager is dividing them into small teams that will work on different weekends.",
    "cn": "A：今年假期期間有多少員工報名去食物銀行工作？ B：這次有四十多人想【參加】，是去年的兩倍，所以經理把他們分成小組，在不同的週末輪流工作。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with others to reach the same goal",
    "sentence": "A: The city wants to plant a thousand trees along the river, but how can such a small office finish a project that big? B: Several local businesses have agreed to {{BLANK}} with the city, so their workers will dig holes and water the young trees while the government pays for the plants.",
    "cn": "A：市政府想沿著河岸種一千棵樹，但這麼小的辦公室要怎麼完成那麼大的計畫？ B：好幾家當地企業已經同意與市政府【合作】，所以他們的員工會挖洞並幫小樹澆水，而政府則負擔樹苗的費用。"
  },
  {
    "word": "teamwork",
    "pos": "n.",
    "cn_def": "團隊合作",
    "en_def": "the ability of a group to work well together",
    "sentence": "A: How did the volunteers manage to pack three thousand food boxes in just one afternoon at the warehouse? B: It was excellent {{BLANK}}, because some people opened the boxes, others filled them with rice and cans, and a third group sealed and loaded them onto the trucks without stopping.",
    "cn": "A：志工們是怎麼在倉庫裡只用一個下午就打包了三千個食物箱？ B：那是絕佳的【團隊合作】，因為有些人負責打開箱子，其他人把米和罐頭裝進去，第三組則不停地封箱並裝上卡車。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力",
    "en_def": "physical or mental energy used to do something",
    "sentence": "A: The old community center looks completely different now, so who painted the walls and fixed the broken windows? B: It took a lot of {{BLANK}} from about twenty neighbors, who came every weekend for two months and used their own tools and free time to repair the building.",
    "cn": "A：舊的社區中心現在看起來完全不一樣了，是誰粉刷牆壁、修好破窗的？ B：這花了大約二十位鄰居很多的【努力】，他們連續兩個月每個週末都來，用自己的工具和空閒時間修繕這棟建築。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任",
    "en_def": "a duty to take care of something or someone",
    "sentence": "A: Why does our company spend so much time and money on volunteer projects when it could simply focus on sales? B: The CEO believes that businesses have a {{BLANK}} to help the society they depend on, and she also thinks these projects make employees feel proud of where they work.",
    "cn": "A：我們公司明明可以只專注於銷售，為什麼還要花這麼多時間和金錢在志工計畫上？ B：執行長認為企業有【責任】幫助他們所依賴的社會，她也認為這些計畫讓員工對自己的工作地點感到自豪。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "投入；承諾",
    "en_def": "a promise to give your time or energy to something",
    "sentence": "A: Can I join the weekend reading program for children even though I travel for work quite often? B: The program asks for a {{BLANK}} of at least three Saturdays a month, because the children need to see the same teacher regularly, so you might prefer the one-day events instead.",
    "cn": "A：雖然我常常出差，我還是可以參加兒童週末閱讀計畫嗎？ B：這個計畫要求每個月至少【投入】三個星期六，因為孩子們需要定期見到同一位老師，所以你可能比較適合參加單日活動。"
  },
  {
    "word": "kindness",
    "pos": "n.",
    "cn_def": "善意；仁慈",
    "en_def": "the quality of being friendly and caring to others",
    "sentence": "A: Why did the elderly woman send a thank-you card and a box of cookies to our reception desk this morning? B: Last week our receptionist noticed she was lost in the rain and walked her to the bus station, and the woman wanted to thank her for that {{BLANK}}.",
    "cn": "A：今天早上那位老太太為什麼寄了一張感謝卡和一盒餅乾到我們的接待櫃台？ B：上週我們的接待員發現她在雨中迷路了，便陪她走到公車站，那位女士想感謝她的那份【善意】。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的",
    "en_def": "happy to give money, time, or help to others",
    "sentence": "A: How did the school raise enough money for the new library in only three months? B: A {{BLANK}} businessman who grew up in the town gave half of the money, and after the newspaper reported his gift, many other families and shops decided to give whatever they could afford.",
    "cn": "A：學校是怎麼在短短三個月內籌到足夠的錢蓋新圖書館？ B：一位在鎮上長大的【慷慨的】商人捐出了一半的錢，報紙報導他的捐贈後，許多其他家庭和商店也決定盡力捐款。"
  },
  {
    "word": "care",
    "pos": "n.",
    "cn_def": "照顧；照料",
    "en_def": "the work of looking after someone",
    "sentence": "A: What exactly do the volunteers do when they visit the nursing home every Sunday afternoon? B: They help the nurses with the daily {{BLANK}} of the residents, such as serving tea, reading newspapers aloud, and taking people who use wheelchairs for walks in the garden.",
    "cn": "A：志工們每週日下午去養老院時到底做些什麼？ B：他們協助護理師做住民的日常【照顧】，例如端茶、朗讀報紙，以及推坐輪椅的人到花園散步。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone confidence or support to do something",
    "sentence": "A: Not many people from the sales department joined last year's blood drive, so how can we get more of them involved this time? B: We should ask the managers to {{BLANK}} their teams by giving everyone a free lunch afterward and letting them leave work an hour early on that day.",
    "cn": "A：去年業務部沒有多少人參加捐血活動，這次我們要怎麼讓更多人參與？ B：我們應該請主管們【鼓勵】他們的團隊，在活動後請大家吃免費午餐，並讓他們當天提早一小時下班。"
  },
  {
    "word": "train",
    "pos": "v.",
    "cn_def": "培訓；訓練",
    "en_def": "to teach someone the skills for a job or activity",
    "sentence": "A: None of the new volunteers have worked at a food bank before, so how will they know what to do on Saturday? B: The coordinator will {{BLANK}} them for an hour before the doors open, showing them how to check expiry dates, pack boxes safely, and use the computer to record each visitor.",
    "cn": "A：新志工以前都沒有在食物銀行工作過，他們週六要怎麼知道該做什麼？ B：協調員會在開門前花一小時【培訓】他們，教他們如何檢查有效期限、安全地打包箱子，以及使用電腦記錄每位來訪者。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能",
    "en_def": "the ability to do something well because you have learned and practiced it",
    "sentence": "A: I'm an accountant, so do you think there is anything useful I can do for the charity besides moving boxes? B: Absolutely, the charity really needs someone with your {{BLANK}} to check its budget and prepare the yearly financial report, which would save them a lot of money.",
    "cn": "A：我是會計師，你覺得除了搬箱子之外，我還能為這個慈善機構做什麼有用的事嗎？ B：當然，這個慈善機構非常需要具備你這種【技能】的人來檢查預算並準備年度財務報告，這會替他們省下很多錢。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing something",
    "sentence": "A: Do you think working at the summer camp for children will help me when I apply for jobs next year? B: Definitely, because the {{BLANK}} of leading a group, solving problems, and talking with parents shows employers that you can communicate well and handle responsibility.",
    "cn": "A：你覺得去兒童夏令營工作，對我明年找工作有幫助嗎？ B：當然有，因為帶領團體、解決問題和與家長溝通的【經驗】，能向雇主證明你善於溝通並能承擔責任。"
  },
  {
    "word": "rewarding",
    "pos": "adj.",
    "cn_def": "有成就感的；值得的",
    "en_def": "making you feel happy and satisfied",
    "sentence": "A: You spend every Saturday teaching English to new arrivals in the city, so don't you ever get tired after a long work week? B: Sometimes I do, but it is very {{BLANK}} to watch my students order food or talk to their doctors by themselves, so I always feel happy when I go home.",
    "cn": "A：你每個星期六都在教剛來到這座城市的人英文，忙了一整週工作之後不會累嗎？ B：有時候會，但看到我的學生能自己點餐或和醫生交談，讓人非常【有成就感】，所以我回家時總是很開心。"
  },
  {
    "word": "meaningful",
    "pos": "adj.",
    "cn_def": "有意義的",
    "en_def": "important and having a real purpose",
    "sentence": "A: Why did you leave your well-paid job at the bank to work for an environmental group instead? B: I wanted to do something more {{BLANK}} with my life, and now I spend my days helping towns protect their rivers, which makes me feel that my work really matters.",
    "cn": "A：你為什麼離開銀行的高薪工作，改去環保團體工作？ B：我想讓我的人生做些更【有意義的】事，現在我每天幫助城鎮保護他們的河流，這讓我覺得我的工作真的很重要。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "積極的；活躍的",
    "en_def": "involved in an activity and doing a lot",
    "sentence": "A: I heard that Mr. Chen from the accounting office was given an award by the city last night, so what did he do? B: He has been an {{BLANK}} member of the neighborhood safety group for ten years, and he walks around the streets every evening to make sure older residents get home safely.",
    "cn": "A：我聽說會計室的陳先生昨晚獲得市政府頒獎，他做了什麼？ B：他十年來一直是社區安全小組的【積極】成員，每天晚上都在街上巡視，確保年長的居民平安回家。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "當地的",
    "en_def": "relating to the area where you live",
    "sentence": "A: Where does the restaurant get all the vegetables for the free meals it serves to homeless people on Sundays? B: The owner buys them from {{BLANK}} farmers at the morning market, which saves on delivery costs and also helps small family farms in the area earn more money.",
    "cn": "A：這家餐廳星期天提供給無家可歸者的免費餐點，那些蔬菜是從哪裡來的？ B：老闆在早市向【當地的】農民購買，這樣可以節省運送成本，也幫助這個地區的小型家庭農場賺更多錢。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the natural world of land, water, air, plants, and animals",
    "sentence": "A: Why is our company asking all staff to bring their own cups and stop using plastic bottles in the office? B: Management wants to protect the {{BLANK}} and reduce the amount of trash we produce, so they are also planning a weekend tree-planting day for employees and their families.",
    "cn": "A：為什麼公司要求全體員工自備杯子，並停止在辦公室使用塑膠瓶？ B：管理層想保護【環境】並減少我們製造的垃圾量，所以他們也計畫為員工和家人舉辦一個週末植樹日。"
  },
  {
    "word": "cleanup",
    "pos": "n.",
    "cn_def": "清理；清掃",
    "en_def": "the process of removing dirt or trash from a place",
    "sentence": "A: The park near our office was full of plastic bags and bottles after the music festival, so has anyone done anything about it? B: Yes, about thirty employees joined a {{BLANK}} on Friday afternoon, and they collected more than fifty bags of trash before the children came to play on the weekend.",
    "cn": "A：音樂節過後，我們辦公室附近的公園滿是塑膠袋和瓶子，有人處理了嗎？ B：有，大約三十位員工在星期五下午參加了【清掃】活動，在孩子們週末來玩之前收集了五十多袋垃圾。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "收容所；庇護所",
    "en_def": "a place that gives people or animals a safe place to stay",
    "sentence": "A: What happened to the stray cats that used to live behind our warehouse during the winter? B: A volunteer from the animal {{BLANK}} came with some cages last week and took them to a warm place, where they will get medical checks and wait for new families to adopt them.",
    "cn": "A：以前冬天住在我們倉庫後面的流浪貓怎麼了？ B：上週動物【收容所】的一位志工帶著籠子來，把牠們帶到溫暖的地方，牠們在那裡會接受健康檢查，並等待新家庭領養。"
  },
  {
    "word": "deliver",
    "pos": "v.",
    "cn_def": "運送；遞送",
    "en_def": "to take goods or letters to a place",
    "sentence": "A: Many elderly people in this area cannot leave their homes, so how do they get hot meals every day? B: A group of retired drivers use their own cars to {{BLANK}} lunch boxes to more than eighty homes each morning, and they also check that everyone is healthy and safe.",
    "cn": "A：這個地區許多長者無法出門，他們每天是怎麼吃到熱騰騰的餐點？ B：一群退休司機每天早上開自己的車，把便當【運送】到八十多戶人家，他們也會確認每個人都健康平安。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善",
    "en_def": "to make something better",
    "sentence": "A: Why are so many volunteers painting the old bus stops and planting flowers along Main Street this weekend? B: The neighborhood association wants to {{BLANK}} the look of the area before the new shopping mall opens, because they hope more visitors will come and support the small shops nearby.",
    "cn": "A：為什麼這個週末有這麼多志工在粉刷舊公車站，並沿著大街種花？ B：社區協會想在新購物中心開幕前【改善】這個地區的外觀，因為他們希望更多遊客前來，並支持附近的小商店。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起",
    "en_def": "with each other",
    "sentence": "A: How did such a small team manage to build a new playground for the school in just one weekend? B: Parents, teachers, and workers from a nearby construction company all worked {{BLANK}}, and they shared tools, food, and ideas until the slides and swings were safely in place.",
    "cn": "A：這麼小的團隊是怎麼只用一個週末就為學校蓋好新遊樂場的？ B：家長、老師和附近一家建設公司的工人都【一起】努力，他們分享工具、食物和點子，直到溜滑梯和鞦韆都安全地安裝好。"
  }
];

const MCQS = [
  {
    "q": "Every December, our firm sells handmade cards to raise money. All profits go to a children's _____ that runs free after-school classes.",
    "options": [
      "charity",
      "invoice",
      "warehouse",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new branch manager wants the bank to build stronger ties with nearby residents. She plans monthly events for the local _____.",
    "options": [
      "invoice",
      "equipment",
      "community",
      "shipment"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Employees may take two paid days each year for community _____. Many choose to tutor students or repair homes for seniors.",
    "options": [
      "invoice",
      "service",
      "refund",
      "payroll"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The bakery gives bread every evening to a nearby shelter. The owner says it is a simple way to _____ families who are struggling.",
    "options": [
      "refuse",
      "delay",
      "cancel",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Two volunteers will stand at the registration desk on Saturday. They will _____ visitors who need help filling out the forms.",
    "options": [
      "postpone",
      "prevent",
      "assist",
      "reject"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Before moving to the new office, the company decided to _____ its old laptops. A local school will receive all forty machines next week.",
    "options": [
      "donate",
      "borrow",
      "purchase",
      "request"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Thanks to a large _____ from a furniture company, the shelter bought new beds. The manager thanked the firm in its newsletter.",
    "options": [
      "complaint",
      "penalty",
      "delay",
      "donation"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The hospital is holding a _____ dinner next month to buy new equipment. Tickets cost one hundred dollars, and companies can reserve whole tables.",
    "options": [
      "recruitment",
      "fundraising",
      "maintenance",
      "inspection"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Linda offered to _____ the beach cleanup this year. She will book the bus, order supplies, and send everyone a schedule.",
    "options": [
      "organize",
      "ignore",
      "forget",
      "criticize"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "More than forty employees signed up to _____ in the food drive. That is twice as many people as joined last year.",
    "options": [
      "depend",
      "insist",
      "participate",
      "consist"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Several local firms have agreed to _____ with the city on the tree-planting project. Their staff will dig holes and water young trees.",
    "options": [
      "compete",
      "argue",
      "disagree",
      "cooperate"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The volunteers packed three thousand boxes in one afternoon. The manager praised their excellent _____ and invited everyone to a celebration lunch.",
    "options": [
      "absence",
      "teamwork",
      "delay",
      "mistake"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Repairing the old community center took a lot of _____ from neighbors. They spent every weekend for two months painting walls and fixing windows.",
    "options": [
      "luck",
      "silence",
      "effort",
      "permission"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The CEO believes companies have a _____ to help the society around them. That is why all staff receive paid volunteer days.",
    "options": [
      "responsibility",
      "weakness",
      "hesitation",
      "suspicion"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The reading program requires a _____ of at least three Saturdays a month. Children need to see the same tutor regularly to make progress.",
    "options": [
      "decrease",
      "commitment",
      "departure",
      "discount"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "A hotel guest sent cookies to the front desk last week. She wanted to thank the receptionist for her _____ during a stressful trip.",
    "options": [
      "rudeness",
      "carelessness",
      "laziness",
      "kindness"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "A _____ businessman gave half the money for the school's new library. Many local shops soon followed his example and gave money too.",
    "options": [
      "generous",
      "selfish",
      "careless",
      "jealous"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Managers were asked to _____ their teams to join the blood drive. Staff who take part will receive a free lunch afterward.",
    "options": [
      "punish",
      "delay",
      "encourage",
      "blame"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The coordinator will _____ new volunteers for one hour before the food bank opens. They will learn to check dates and pack boxes safely.",
    "options": [
      "dismiss",
      "train",
      "ignore",
      "scold"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Mia used her design _____ to create a free website for the shelter. The new site has already attracted many new volunteers.",
    "options": [
      "debt",
      "fee",
      "complaint",
      "skill"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Working at the summer camp gave Tom valuable _____ in leading groups. He mentioned it in every job interview he had afterward.",
    "options": [
      "debt",
      "penalty",
      "experience",
      "damage"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Teaching English to new arrivals is very _____ for Sarah. She feels proud when her students can talk to doctors by themselves.",
    "options": [
      "rewarding",
      "boring",
      "painful",
      "annoying"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Peter left his bank job to do more _____ work with an environmental group. He says his daily tasks now truly make a difference.",
    "options": [
      "pointless",
      "useless",
      "harmful",
      "meaningful"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Mr. Chen has been an _____ member of the safety group for ten years. He patrols the streets every evening without fail.",
    "options": [
      "idle",
      "active",
      "absent",
      "anxious"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The company stopped using plastic bottles in order to protect the _____. It also plans a tree-planting day for staff and their families.",
    "options": [
      "environment",
      "salary",
      "contract",
      "inventory"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "After the festival, thirty employees joined a park _____ on Friday afternoon. They collected over fifty bags of trash before sunset.",
    "options": [
      "interview",
      "merger",
      "audit",
      "cleanup"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Volunteers from the animal _____ rescued the stray cats behind our warehouse. The cats will stay there until new families adopt them.",
    "options": [
      "invoice",
      "ladder",
      "shelter",
      "lecture"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Retired drivers use their own cars to _____ hot lunches to elderly residents. They visit more than eighty homes every morning.",
    "options": [
      "borrow",
      "deliver",
      "cancel",
      "forget"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The neighborhood association hopes to _____ the look of Main Street before the mall opens. Volunteers will paint bus stops and plant flowers.",
    "options": [
      "improve",
      "damage",
      "ruin",
      "hide"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Parents and teachers worked _____ to build the school playground in one weekend. They shared tools, food, and ideas the whole time.",
    "options": [
      "apart",
      "separately",
      "rarely",
      "together"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "charity": {
    "pos": "n.",
    "en_def": "an organization that collects money or goods to help people in need",
    "cn_def": "慈善機構"
  },
  "community": {
    "pos": "n.",
    "en_def": "all the people who live in the same area",
    "cn_def": "社區；社群"
  },
  "service": {
    "pos": "n.",
    "en_def": "work done to help other people or the public",
    "cn_def": "服務"
  },
  "help": {
    "pos": "v.",
    "en_def": "to make it easier for someone to do something",
    "cn_def": "幫助"
  },
  "support": {
    "pos": "v.",
    "en_def": "to give help, money, or encouragement to someone or something",
    "cn_def": "支持；支援"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone do a job",
    "cn_def": "協助"
  },
  "donate": {
    "pos": "v.",
    "en_def": "to give money or goods to help a person or organization",
    "cn_def": "捐贈"
  },
  "donation": {
    "pos": "n.",
    "en_def": "money or goods that you give to help others",
    "cn_def": "捐款；捐贈物"
  },
  "fundraising": {
    "pos": "n.",
    "en_def": "the activity of collecting money for a charity or project",
    "cn_def": "募款"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to plan and arrange an event or activity",
    "cn_def": "籌辦；組織"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity",
    "cn_def": "參加；參與"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others to reach the same goal",
    "cn_def": "合作"
  },
  "teamwork": {
    "pos": "n.",
    "en_def": "the ability of a group to work well together",
    "cn_def": "團隊合作"
  },
  "effort": {
    "pos": "n.",
    "en_def": "physical or mental energy used to do something",
    "cn_def": "努力"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to take care of something or someone",
    "cn_def": "責任"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise to give your time or energy to something",
    "cn_def": "投入；承諾"
  },
  "kindness": {
    "pos": "n.",
    "en_def": "the quality of being friendly and caring to others",
    "cn_def": "善意；仁慈"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "happy to give money, time, or help to others",
    "cn_def": "慷慨的"
  },
  "care": {
    "pos": "n.",
    "en_def": "the work of looking after someone",
    "cn_def": "照顧；照料"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or support to do something",
    "cn_def": "鼓勵"
  },
  "train": {
    "pos": "v.",
    "en_def": "to teach someone the skills for a job or activity",
    "cn_def": "培訓；訓練"
  },
  "skill": {
    "pos": "n.",
    "en_def": "the ability to do something well because you have learned and practiced it",
    "cn_def": "技能"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing something",
    "cn_def": "經驗"
  },
  "rewarding": {
    "pos": "adj.",
    "en_def": "making you feel happy and satisfied",
    "cn_def": "有成就感的；值得的"
  },
  "meaningful": {
    "pos": "adj.",
    "en_def": "important and having a real purpose",
    "cn_def": "有意義的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "involved in an activity and doing a lot",
    "cn_def": "積極的；活躍的"
  },
  "local": {
    "pos": "adj.",
    "en_def": "relating to the area where you live",
    "cn_def": "當地的"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the natural world of land, water, air, plants, and animals",
    "cn_def": "環境"
  },
  "cleanup": {
    "pos": "n.",
    "en_def": "the process of removing dirt or trash from a place",
    "cn_def": "清理；清掃"
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a place that gives people or animals a safe place to stay",
    "cn_def": "收容所；庇護所"
  },
  "deliver": {
    "pos": "v.",
    "en_def": "to take goods or letters to a place",
    "cn_def": "運送；遞送"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other",
    "cn_def": "一起"
  }
};

const EXTRA_GLOSSES = {};
