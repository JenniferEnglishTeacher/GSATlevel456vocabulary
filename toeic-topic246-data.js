// Topic 246 Quiz Data: Motivate 激勵
// Source word list: https://www.examword.com/group-topic/motivate — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T246 - Motivate 激勵",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；動力",
    "en_def": "the reason or desire that makes you want to do something",
    "sentence": "A: Why did the sales team suddenly start reaching their monthly targets after a whole year of poor results and frequent complaints? B: The new manager offered a weekly bonus and more flexible hours, and that gave everyone the {{BLANK}} they needed to call more customers and close bigger deals.",
    "cn": "A：為什麼業務團隊在一整年業績不佳又抱怨不斷之後，突然開始達成每月目標？ B：新經理提供了每週獎金和更彈性的工時，這給了大家所需要的【動力】，去打更多電話給客戶並談成更大的交易。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to make someone want to do something good or creative",
    "sentence": "A: What did you think of the speaker at yesterday's leadership conference, and was her talk really worth the long trip downtown? B: Yes, her story about starting a small bakery with no money and growing it into a national chain will {{BLANK}} many young employees to start their own projects.",
    "cn": "A：你覺得昨天領導力研討會的講者怎麼樣？她的演講真的值得大老遠跑到市中心嗎？ B：值得，她從身無分文開一家小麵包店、一路發展成全國連鎖的故事，將會【激勵】許多年輕員工開始自己的計畫。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感；鼓舞人心的人事物",
    "en_def": "a person or thing that gives you new ideas or makes you want to do something",
    "sentence": "A: Where did the design team get the idea for the new office layout with all those plants, open spaces, and comfortable reading corners? B: They visited several modern libraries in Tokyo last spring, and those calm and bright buildings became the main {{BLANK}} for the whole project.",
    "cn": "A：設計團隊是從哪裡得到新辦公室格局的點子，有那麼多植物、開放空間和舒適的閱讀角落？ B：他們去年春天參觀了東京幾座現代化圖書館，那些寧靜明亮的建築成了整個專案的主要【靈感】來源。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone confidence or hope to do something",
    "sentence": "A: How can we get more staff members to join the free English classes that the company holds every Thursday evening after work? B: I think we should {{BLANK}} them by offering a small certificate at the end of the course and letting them leave thirty minutes early on class days.",
    "cn": "A：我們要怎麼讓更多員工參加公司每週四下班後開設的免費英文課？ B：我認為我們應該在課程結束時頒發一張小證書，並讓他們在上課日提早三十分鐘下班，以此來【鼓勵】他們。"
  },
  {
    "word": "encouragement",
    "pos": "n.",
    "cn_def": "鼓勵；激勵",
    "en_def": "words or actions that give someone confidence",
    "sentence": "A: You seemed really nervous before your first presentation to the board of directors, so how did you finally manage to calm down? B: My supervisor sat in the front row, smiled at me, and gave me a lot of {{BLANK}} during the break, so I felt much more relaxed in the second half.",
    "cn": "A：你第一次向董事會做簡報前看起來非常緊張，你最後是怎麼冷靜下來的？ B：我的主管坐在第一排對我微笑，並在休息時間給了我很多【鼓勵】，所以下半場我放鬆多了。"
  },
  {
    "word": "drive",
    "pos": "n.",
    "cn_def": "幹勁；衝勁",
    "en_def": "strong energy and desire to achieve something",
    "sentence": "A: Why did the director choose Kevin to lead the new branch in Singapore when he has only been with the company for two years? B: Although he is young, he has amazing {{BLANK}} and energy, often staying late to finish reports and always looking for ways to win new clients.",
    "cn": "A：凱文才進公司兩年，為什麼主管選他去帶領新加坡的新分公司？ B：雖然他很年輕，但他有驚人的【幹勁】和活力，常常留到很晚完成報告，而且總是在想辦法爭取新客戶。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "抱負；雄心",
    "en_def": "a strong wish to achieve something, such as success or power",
    "sentence": "A: Do you know why Linda decided to leave her stable job at the bank and move to a small startup in Taipei last month? B: Her {{BLANK}} has always been to manage her own marketing department one day, and the startup offered her a chance to lead a team much sooner.",
    "cn": "A：你知道琳達上個月為什麼決定離開銀行的穩定工作，轉到台北一家小型新創公司嗎？ B：她的【抱負】一直是有一天能管理自己的行銷部門，而那家新創公司讓她有機會更早帶領團隊。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you hope to achieve",
    "sentence": "A: What did the regional manager say about our sales plan during the online meeting this morning while I was visiting the client? B: She said our main {{BLANK}} for the next quarter is to increase online orders by fifteen percent, so we need to update our website and advertising.",
    "cn": "A：今天早上我去拜訪客戶時，區域經理在線上會議中對我們的銷售計畫說了什麼？ B：她說我們下一季的主要【目標】是讓網路訂單增加百分之十五，所以我們需要更新網站和廣告。"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的；意義",
    "en_def": "the reason why something is done",
    "sentence": "A: Could you explain why the company is asking every department to fill out this long questionnaire before the end of the week? B: The main {{BLANK}} of the survey is to find out what makes employees feel satisfied, so the managers can plan better benefits and training next year.",
    "cn": "A：你能解釋一下為什麼公司要求每個部門在本週結束前填完這份冗長的問卷嗎？ B：這份調查的主要【目的】是了解什麼讓員工感到滿意，好讓主管們明年能規劃更好的福利和訓練。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心；毅力",
    "en_def": "the quality of continuing to try even when something is difficult",
    "sentence": "A: How did the small factory team finish the huge order on time even though two machines broke down last week? B: It was pure {{BLANK}}; the workers took turns on night shifts, the engineers repaired the machines in two days, and nobody gave up until every box was shipped.",
    "cn": "A：上週有兩台機器故障，這個小工廠團隊是怎麼準時完成那筆大訂單的？ B：完全靠【決心】；工人們輪流上夜班，工程師兩天內修好機器，直到每一箱貨都出貨前沒有人放棄。"
  },
  {
    "word": "commit",
    "pos": "v.",
    "cn_def": "承諾；投入",
    "en_def": "to promise to give your time or energy to something",
    "sentence": "A: Are you going to join the volunteer team that cleans the beach every month, or are you too busy with your new job? B: I'd love to help, but I can only {{BLANK}} to one Saturday every two months because I often have to travel to visit customers on weekends.",
    "cn": "A：你要加入每個月淨灘的志工團隊嗎？還是你新工作太忙了？ B：我很想幫忙，但我只能【承諾】每兩個月參加一個星期六，因為我週末常常要出差拜訪客戶。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；投入；奉獻",
    "en_def": "a promise to do something or a strong loyalty to something",
    "sentence": "A: Why did the hotel give Mr. Chen the employee of the year award at the party last night in front of all the guests? B: He has shown a strong {{BLANK}} to customer service for ten years, always answering complaints quickly and even helping guests on his days off.",
    "cn": "A：飯店昨晚為什麼在派對上當著所有賓客的面頒發年度最佳員工獎給陳先生？ B：他十年來對顧客服務展現了堅定的【投入】，總是迅速處理客訴，甚至在休假日也幫助客人。"
  },
  {
    "word": "enthusiasm",
    "pos": "n.",
    "cn_def": "熱忱；熱情",
    "en_def": "a feeling of strong interest and excitement",
    "sentence": "A: What impressed you most about the new intern who joined the advertising team in our Kaohsiung office last Monday? B: Her {{BLANK}} was amazing; she asked many good questions, volunteered for every task, and even brought fresh ideas for the summer campaign on her first day.",
    "cn": "A：上週一加入我們高雄辦公室廣告團隊的新實習生，最讓你印象深刻的是什麼？ B：她的【熱忱】令人驚艷；她問了很多好問題、自願接下每項任務，第一天甚至就為夏季活動帶來新點子。"
  },
  {
    "word": "passion",
    "pos": "n.",
    "cn_def": "熱愛；熱情",
    "en_def": "a very strong interest in or love for something",
    "sentence": "A: Why did Daniel give up his well-paid engineering job to open a small coffee shop near the train station in Tainan? B: He has always had a real {{BLANK}} for coffee, and after taking classes for two years, he decided he wanted to spend his life doing what he loves.",
    "cn": "A：丹尼爾為什麼放棄高薪的工程師工作，在台南火車站附近開一家小咖啡店？ B：他一直對咖啡有真正的【熱愛】，上了兩年的課之後，他決定要一輩子做自己喜歡的事。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的",
    "en_def": "hopeful and confident; thinking about good things",
    "sentence": "A: How did the team react when the client said the first design for the new logo was too simple and asked for more changes? B: Everyone stayed {{BLANK}} and saw the comments as useful advice, so we held a quick meeting and created three better versions before the next deadline.",
    "cn": "A：客戶說新標誌的第一版設計太簡單並要求更多修改時，團隊有什麼反應？ B：大家都保持【積極】，把意見視為有用的建議，所以我們開了個簡短會議，並在下個截止日前做出三個更好的版本。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有自信的；有把握的",
    "en_def": "sure about your own abilities",
    "sentence": "A: Do you think Amy is ready to give the product presentation to the Japanese buyers by herself at next week's trade show? B: Yes, she has practiced it many times with her manager, and she feels {{BLANK}} that she can answer any questions about prices, delivery, and quality.",
    "cn": "A：你覺得艾咪準備好在下週的商展上獨自向日本買家做產品簡報了嗎？ B：是的，她已經和經理練習很多次了，她【有信心】能回答任何關於價格、交貨和品質的問題。"
  },
  {
    "word": "empower",
    "pos": "v.",
    "cn_def": "授權；使有能力",
    "en_def": "to give someone the power or confidence to do something",
    "sentence": "A: Why does our new CEO keep asking team leaders to make their own decisions instead of waiting for approval from head office? B: She wants to {{BLANK}} local managers so they can solve customer problems faster, and she believes people work harder when they have more control.",
    "cn": "A：我們的新執行長為什麼一直要求團隊領導自己做決定，而不是等總公司核准？ B：她想要【授權】給各地經理，讓他們更快解決顧客問題，而且她相信人們有更多掌控權時會更努力工作。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；援助",
    "en_def": "to help someone, especially in a practical or emotional way",
    "sentence": "A: How will the company help the employees who have to move to the new factory in the south of the country next spring? B: The human resources department will {{BLANK}} them by paying for moving costs, helping them find apartments, and offering free language classes for their children.",
    "cn": "A：公司要如何幫助明年春天必須調到南部新工廠的員工？ B：人資部門會【支援】他們，包括支付搬家費用、協助找公寓，並為他們的孩子提供免費語言課程。"
  },
  {
    "word": "reward",
    "pos": "n.",
    "cn_def": "獎勵；報酬",
    "en_def": "something given to someone because they have done something good",
    "sentence": "A: What will the staff receive if the store reaches its holiday sales target before the end of December this year? B: As a {{BLANK}}, the owner promised every employee an extra day off and a dinner at the famous seafood restaurant near the harbor in January.",
    "cn": "A：如果商店在今年十二月底前達成假期銷售目標，員工會得到什麼？ B：作為【獎勵】，老闆答應每位員工多放一天假，並在一月請大家到港口附近那家有名的海鮮餐廳吃晚餐。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "表揚；認可",
    "en_def": "praise or attention for something someone has done",
    "sentence": "A: Why did Peter seem so happy when he came back from the monthly staff meeting this afternoon with a big smile? B: The general manager thanked him in front of everyone for fixing the computer system, and he said that kind of public {{BLANK}} means more to him than money.",
    "cn": "A：彼得今天下午從每月員工會議回來時，為什麼笑得那麼開心？ B：總經理當著大家的面感謝他修好電腦系統，他說那種公開的【表揚】對他來說比金錢更有意義。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something difficult that tests your ability",
    "sentence": "A: How do you feel about leading the new project in Vietnam, since you have never worked overseas or managed such a large team before? B: It will be a big {{BLANK}} for me, but I am excited because I can learn about a new market and build my leadership skills at the same time.",
    "cn": "A：你從來沒有在海外工作過，也沒管理過這麼大的團隊，對於帶領越南的新專案你有什麼感覺？ B：這對我來說會是很大的【挑戰】，但我很興奮，因為我可以同時了解新市場並培養領導能力。"
  },
  {
    "word": "stimulate",
    "pos": "v.",
    "cn_def": "刺激；激發",
    "en_def": "to make something more active or make someone more interested",
    "sentence": "A: Why is the government offering lower taxes to small businesses that open shops in the old downtown area this year? B: Officials hope the plan will {{BLANK}} the local economy by bringing more customers, creating new jobs, and making the quiet streets busy again.",
    "cn": "A：政府今年為什麼要給在舊市區開店的小型企業較低的稅率？ B：官員希望這個計畫能帶來更多顧客、創造新工作，讓冷清的街道再度熱鬧起來，藉此【刺激】地方經濟。"
  },
  {
    "word": "energize",
    "pos": "v.",
    "cn_def": "使充滿活力；激勵",
    "en_def": "to give someone more energy or enthusiasm",
    "sentence": "A: Why does our team leader always start the Monday morning meeting with a short game or a funny video before discussing the weekly schedule? B: She says it helps {{BLANK}} everyone after the weekend, so people feel more awake and are ready to share ideas instead of just sitting quietly.",
    "cn": "A：我們的組長為什麼總是在討論每週行程前，用一個小遊戲或有趣的影片開始週一早上的會議？ B：她說這有助於在週末過後讓大家【充滿活力】，讓人們更清醒、願意分享想法，而不是只是安靜地坐著。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give all your attention to something",
    "sentence": "A: Why did you turn off your phone and close your email during the afternoon yesterday when the clients were trying to reach you? B: I had to {{BLANK}} on the annual budget report because the director needed it by five o'clock, so my assistant answered all the calls for me.",
    "cn": "A：昨天下午客戶想聯絡你時，你為什麼把手機關機又關掉電子郵件？ B：我必須【專注】於年度預算報告，因為主管五點前就要，所以我的助理幫我接了所有電話。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展；進步",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: Has the construction company finished the new parking lot next to the office, or will we still have to park on the street next month? B: They have made good {{BLANK}} this week because the weather was dry, and the manager says the parking lot should open before the end of the month.",
    "cn": "A：建設公司完成辦公室旁邊的新停車場了嗎？還是我們下個月還得把車停在路邊？ B：因為這週天氣乾燥，他們有不錯的【進展】，經理說停車場應該會在月底前啟用。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；提升",
    "en_def": "to become better or make something better",
    "sentence": "A: What is the reason for the new training program that every customer service worker has to attend starting next Tuesday? B: The company wants to {{BLANK}} the way staff handle phone complaints, because many customers said they waited too long and did not get clear answers.",
    "cn": "A：從下週二開始每位客服人員都必須參加的新訓練課程，原因是什麼？ B：公司想要【改善】員工處理電話客訴的方式，因為很多顧客說他們等太久，而且沒有得到清楚的答覆。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達成；實現",
    "en_def": "to succeed in doing something after effort",
    "sentence": "A: Do you think our department can finish the online sales training and reach the new target before the end of the year? B: If everyone works together and we plan carefully, I believe we can {{BLANK}} it, but we may need to hire two more assistants to help with the extra orders.",
    "cn": "A：你覺得我們部門能在年底前完成線上銷售訓練並達到新目標嗎？ B：如果大家同心協力並仔細規劃，我相信我們能【達成】，但我們可能需要再雇用兩名助理來處理額外的訂單。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功",
    "en_def": "the achievement of something you have tried to do",
    "sentence": "A: Why is the marketing director so pleased with the campaign that we launched on social media at the beginning of the summer? B: It was a huge {{BLANK}}; online sales doubled in just two months, and thousands of new customers signed up for the company's monthly newsletter.",
    "cn": "A：行銷總監為什麼對我們初夏在社群媒體上推出的活動那麼滿意？ B：那是一次巨大的【成功】；線上銷售在短短兩個月內翻倍，還有數千名新顧客訂閱了公司的每月電子報。"
  },
  {
    "word": "persist",
    "pos": "v.",
    "cn_def": "堅持；持續",
    "en_def": "to continue doing something even though it is difficult",
    "sentence": "A: The client has rejected our proposal twice already, so should we stop trying and look for a different customer instead? B: I think we should {{BLANK}} a little longer, because the client said they like our prices, and if we change the delivery plan, they might finally agree.",
    "cn": "A：客戶已經拒絕我們的提案兩次了，我們是不是該放棄，改找別的客戶？ B：我認為我們應該再【堅持】一下，因為客戶說他們喜歡我們的價格，如果我們修改交貨計畫，他們最後可能會同意。"
  },
  {
    "word": "resilient",
    "pos": "adj.",
    "cn_def": "有韌性的；能迅速恢復的",
    "en_def": "able to recover quickly after problems",
    "sentence": "A: How did the small restaurant down the street manage to stay open after the flood damaged its kitchen and dining room last year? B: The owners were very {{BLANK}}; they started a delivery service from a friend's kitchen, repaired the restaurant slowly, and reopened with a new menu six months later.",
    "cn": "A：街尾那家小餐廳去年廚房和用餐區被水災破壞後，是怎麼撐下來繼續營業的？ B：老闆們非常【有韌性】；他們借朋友的廚房開始外送服務，慢慢修復餐廳，六個月後推出新菜單重新開張。"
  },
  {
    "word": "optimistic",
    "pos": "adj.",
    "cn_def": "樂觀的",
    "en_def": "hopeful that good things will happen",
    "sentence": "A: What does the finance manager think about next year's sales, considering that prices for materials have gone up so much recently? B: She is quite {{BLANK}} because several large customers have already signed new contracts, and she expects our profits to grow even if costs stay high.",
    "cn": "A：考慮到最近原料價格上漲這麼多，財務經理對明年的銷售有什麼看法？ B：她相當【樂觀】，因為幾個大客戶已經簽了新合約，而且她預期即使成本居高不下，我們的利潤仍會成長。"
  },
  {
    "word": "self-discipline",
    "pos": "n.",
    "cn_def": "自律",
    "en_def": "the ability to control yourself and make yourself work hard",
    "sentence": "A: How do you manage to get so much done when you work from home three days a week with your kids and pets around? B: It takes a lot of {{BLANK}}; I start at eight every morning, keep my phone in another room, and only check social media during my lunch break.",
    "cn": "A：你每週有三天在家工作，身邊還有小孩和寵物，你是怎麼完成那麼多事情的？ B：這需要很強的【自律】；我每天早上八點開始工作，把手機放在另一個房間，只在午休時間看社群媒體。"
  },
  {
    "word": "initiative",
    "pos": "n.",
    "cn_def": "主動性；進取心",
    "en_def": "the ability to decide and act without being told",
    "sentence": "A: Why did the supervisor praise Jenny at the end of the meeting even though fixing the printer is not part of her job? B: She took the {{BLANK}} to call the repair company and arrange a visit when everyone else was too busy, so the office didn't lose a whole day of work.",
    "cn": "A：修理印表機並不是珍妮的工作，為什麼主管在會議結束時稱讚她？ B：在其他人都太忙的時候，她【主動】打電話給維修公司並安排到府維修，所以辦公室沒有損失一整天的工作。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；有生產力的",
    "en_def": "producing a lot of good work or results",
    "sentence": "A: How was the planning meeting with the designers and the engineers this morning, and did you agree on the launch date? B: It was very {{BLANK}}; we solved the problems with the battery, chose the final colors, and agreed to launch the new phone in early March.",
    "cn": "A：今天早上和設計師及工程師的企劃會議怎麼樣？你們有談定上市日期嗎？ B：會議非常【有成效】；我們解決了電池的問題、選定了最終顏色，並同意在三月初推出新手機。"
  }
];

const MCQS = [
  {
    "q": "Many workers lost their _____ after the company canceled the yearly bonus. The manager is now looking for new ways to encourage them.",
    "options": [
      "motivation",
      "progress",
      "recognition",
      "success"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The founder's speech will _____ young employees to share their own ideas. Many of them plan to start new projects next year.",
    "options": [
      "improve",
      "inspire",
      "achieve",
      "persist"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The designer said that old Taiwanese temples were the main _____ for her new hotel lobby. Guests love the colorful details.",
    "options": [
      "determination",
      "commitment",
      "inspiration",
      "recognition"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The company wants to _____ staff to cycle to work. It has built a new bike parking area beside the main entrance.",
    "options": [
      "achieve",
      "persist",
      "focus",
      "encourage"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Thanks to the coach's constant _____, the new salespeople felt ready to visit clients alone. Their first week went very well.",
    "options": [
      "ambition",
      "encouragement",
      "purpose",
      "challenge"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Helen's _____ is to become the youngest regional director in the company's history. She studies management every evening after work.",
    "options": [
      "recognition",
      "encouragement",
      "enthusiasm",
      "ambition"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our main _____ this quarter is to reduce shipping costs by ten percent. The logistics team will review every delivery route.",
    "options": [
      "goal",
      "passion",
      "reward",
      "initiative"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The _____ of today's meeting is to choose a supplier for the new uniforms. Please bring the price lists you received.",
    "options": [
      "enthusiasm",
      "drive",
      "purpose",
      "reward"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "With great _____, the small team finished the website before the deadline. They worked through two weekends to fix every problem.",
    "options": [
      "determination",
      "recognition",
      "reward",
      "purpose"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The hotel is proud of its strong _____ to protecting the environment. It uses solar power and recycles all kitchen waste.",
    "options": [
      "success",
      "commitment",
      "challenge",
      "reward"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new interns showed great _____ during their first week at the agency. They volunteered for every task and asked many questions.",
    "options": [
      "purpose",
      "goal",
      "enthusiasm",
      "reward"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Tom has a real _____ for cooking, so he left his office job to open a restaurant. His dishes are already very popular.",
    "options": [
      "purpose",
      "success",
      "recognition",
      "passion"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Despite the poor sales figures, the manager stayed _____ and praised the team's hard work. She believes next month will be better.",
    "options": [
      "crowded",
      "positive",
      "expensive",
      "broken"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "After weeks of practice, Ken felt _____ that he could lead the meeting in English. He spoke clearly and answered every question.",
    "options": [
      "productive",
      "resilient",
      "crowded",
      "confident"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The new software will _____ store managers to change prices without asking head office. This should help them respond to customers faster.",
    "options": [
      "empower",
      "persist",
      "achieve",
      "focus"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "As a _____ for finishing the project early, the director gave the whole team a free trip to Kenting. Everyone was delighted.",
    "options": [
      "challenge",
      "purpose",
      "reward",
      "goal"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Anna received public _____ for her excellent customer service at the annual staff party. The CEO thanked her in front of everyone.",
    "options": [
      "recognition",
      "ambition",
      "determination",
      "passion"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Opening a new branch overseas will be a big _____ for our small company. We must find staff and learn local laws quickly.",
    "options": [
      "reward",
      "challenge",
      "passion",
      "recognition"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The city plans to lower parking fees to _____ business in the old market area. Shop owners hope more visitors will come.",
    "options": [
      "persist",
      "commit",
      "stimulate",
      "focus"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Please turn off your phones so we can _____ on the training materials. The session will end at noon.",
    "options": [
      "achieve",
      "empower",
      "stimulate",
      "focus"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The engineers have made good _____ on the new factory, and it should open in May. The manager is very pleased.",
    "options": [
      "purpose",
      "progress",
      "ambition",
      "passion"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The restaurant hired a new chef to _____ the quality of its lunch menu. Customer reviews have already become more positive.",
    "options": [
      "persist",
      "empower",
      "focus",
      "improve"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "If we work together, we can _____ our sales target before the end of December. Let's meet every Monday to check the numbers.",
    "options": [
      "achieve",
      "persist",
      "focus",
      "energize"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The product launch was a great _____, with over ten thousand orders in the first week. The marketing team celebrated with dinner.",
    "options": [
      "ambition",
      "purpose",
      "success",
      "determination"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "If you _____ with your English studies, you will pass the TOEIC test next year. Many coworkers have raised their scores this way.",
    "options": [
      "persist",
      "empower",
      "stimulate",
      "energize"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The local hotel industry proved _____ after the storm and reopened within two weeks. Bookings are now back to normal levels.",
    "options": [
      "crowded",
      "resilient",
      "careless",
      "silent"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Analysts are _____ about the economy because exports rose sharply last month. They expect more companies to hire new workers.",
    "options": [
      "productive",
      "resilient",
      "optimistic",
      "expensive"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Working from home requires a lot of _____, so set a clear schedule each morning. Avoid checking social media during work hours.",
    "options": [
      "recognition",
      "encouragement",
      "reward",
      "self-discipline"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Mark took the _____ to organize a cleanup of the office kitchen. His manager thanked him for acting without being asked.",
    "options": [
      "success",
      "initiative",
      "purpose",
      "ambition"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The workshop was very _____, and we finished planning the entire summer campaign in three hours. Everyone left with clear tasks.",
    "options": [
      "resilient",
      "confident",
      "optimistic",
      "productive"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "motivation": {
    "pos": "n.",
    "en_def": "the reason or desire that makes you want to do something",
    "cn_def": "動機；動力"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to make someone want to do something good or creative",
    "cn_def": "激勵；啟發"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "a person or thing that gives you new ideas or makes you want to do something",
    "cn_def": "靈感；鼓舞人心的人事物"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or hope to do something",
    "cn_def": "鼓勵"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence",
    "cn_def": "鼓勵；激勵"
  },
  "drive": {
    "pos": "n.",
    "en_def": "strong energy and desire to achieve something",
    "cn_def": "幹勁；衝勁"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to achieve something, such as success or power",
    "cn_def": "抱負；雄心"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you hope to achieve",
    "cn_def": "目標"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason why something is done",
    "cn_def": "目的；意義"
  },
  "determination": {
    "pos": "n.",
    "en_def": "the quality of continuing to try even when something is difficult",
    "cn_def": "決心；毅力"
  },
  "commit": {
    "pos": "v.",
    "en_def": "to promise to give your time or energy to something",
    "cn_def": "承諾；投入"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise to do something or a strong loyalty to something",
    "cn_def": "承諾；投入；奉獻"
  },
  "enthusiasm": {
    "pos": "n.",
    "en_def": "a feeling of strong interest and excitement",
    "cn_def": "熱忱；熱情"
  },
  "passion": {
    "pos": "n.",
    "en_def": "a very strong interest in or love for something",
    "cn_def": "熱愛；熱情"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "hopeful and confident; thinking about good things",
    "cn_def": "正面的；積極的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure about your own abilities",
    "cn_def": "有自信的；有把握的"
  },
  "empower": {
    "pos": "v.",
    "en_def": "to give someone the power or confidence to do something",
    "cn_def": "授權；使有能力"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help someone, especially in a practical or emotional way",
    "cn_def": "支持；援助"
  },
  "reward": {
    "pos": "n.",
    "en_def": "something given to someone because they have done something good",
    "cn_def": "獎勵；報酬"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "praise or attention for something someone has done",
    "cn_def": "表揚；認可"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "stimulate": {
    "pos": "v.",
    "en_def": "to make something more active or make someone more interested",
    "cn_def": "刺激；激發"
  },
  "energize": {
    "pos": "v.",
    "en_def": "to give someone more energy or enthusiasm",
    "cn_def": "使充滿活力；激勵"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to something",
    "cn_def": "專注；集中"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進展；進步"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to become better or make something better",
    "cn_def": "改善；提升"
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in doing something after effort",
    "cn_def": "達成；實現"
  },
  "success": {
    "pos": "n.",
    "en_def": "the achievement of something you have tried to do",
    "cn_def": "成功"
  },
  "persist": {
    "pos": "v.",
    "en_def": "to continue doing something even though it is difficult",
    "cn_def": "堅持；持續"
  },
  "resilient": {
    "pos": "adj.",
    "en_def": "able to recover quickly after problems",
    "cn_def": "有韌性的；能迅速恢復的"
  },
  "optimistic": {
    "pos": "adj.",
    "en_def": "hopeful that good things will happen",
    "cn_def": "樂觀的"
  },
  "self-discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and make yourself work hard",
    "cn_def": "自律"
  },
  "initiative": {
    "pos": "n.",
    "en_def": "the ability to decide and act without being told",
    "cn_def": "主動性；進取心"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "producing a lot of good work or results",
    "cn_def": "有成效的；有生產力的"
  }
};

const EXTRA_GLOSSES = {};
