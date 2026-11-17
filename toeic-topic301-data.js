// Topic 301 Quiz Data: Presentation 簡報
// Source word list: https://www.examword.com/group-topic/presentation — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T301 - Presentation 簡報",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講；演說",
    "en_def": "a formal talk given to a group of people",
    "sentence": "A: Who is going to give the opening {{BLANK}} at the annual sales meeting next Friday, and how long will it last? B: Our new CEO will speak for about fifteen minutes about last year's results, and then the regional managers will share their plans for the coming year with everyone in the main hall.",
    "cn": "A：下週五的年度業務會議上，誰要發表開場【演講】，會講多久？ B：我們的新執行長會花大約十五分鐘談去年的成果，之後各區經理會在大廳向大家分享他們明年的計畫。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "講座；演講課",
    "en_def": "a talk that teaches people about a subject",
    "sentence": "A: Are you going to the evening {{BLANK}} on digital marketing at the city library, or do you have to stay late at the office again? B: I already signed up, because the speaker is a famous professor who teaches online advertising, and my manager said the ideas could really help our team's next campaign.",
    "cn": "A：你要去參加市立圖書館晚上那場關於數位行銷的【講座】嗎？還是你又得在辦公室加班？ B：我已經報名了，因為主講人是一位教網路廣告的知名教授，而且我的經理說那些想法對我們團隊下一個宣傳活動很有幫助。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；研習會",
    "en_def": "a meeting where people learn about and discuss a topic",
    "sentence": "A: How many employees from our department will join the two-day {{BLANK}} on customer service in Taichung next month? B: Five of us are going, and the company will pay for the train tickets and the hotel, so we only need to bring our notebooks and some questions for the trainers.",
    "cn": "A：下個月在台中舉辦的兩天客戶服務【研討會】，我們部門有多少員工會參加？ B：我們有五個人要去，公司會支付火車票和飯店費用，所以我們只需要帶筆記本和一些要問講師的問題。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "會議；大會",
    "en_def": "a large formal meeting where people discuss shared interests",
    "sentence": "A: Did you book a hotel room near the convention center for the international technology {{BLANK}} in Singapore this spring? B: Not yet, because the rooms near the center are very expensive, so I am comparing prices online and might stay a little farther away and take the subway every morning instead.",
    "cn": "A：你今年春天去新加坡參加國際科技【會議】，有訂會展中心附近的飯店房間嗎？ B：還沒，因為中心附近的房間很貴，所以我正在網路上比價，可能會住遠一點，每天早上改搭地鐵過去。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊；研習班",
    "en_def": "a training meeting where people practice a skill",
    "sentence": "A: What did you learn at the writing {{BLANK}} that the training department organized last Saturday morning? B: We practiced writing short, clear emails to customers in small groups, and the trainer checked our work and showed us how to make our messages more polite and much easier to understand.",
    "cn": "A：你在訓練部門上週六早上舉辦的寫作【工作坊】學到了什麼？ B：我們分成小組練習寫簡短清楚的客戶電子郵件，講師檢查我們的作品，並示範如何讓訊息更有禮貌、也更容易理解。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "示範；展示",
    "en_def": "an act of showing how something works",
    "sentence": "A: Will the sales representative show us how the new coffee machine works before we decide to buy ten of them for the office? B: Yes, she is coming on Thursday afternoon to give a short {{BLANK}} in the kitchen, and we can try making a few drinks ourselves after she finishes.",
    "cn": "A：在我們決定為辦公室買十台新咖啡機之前，業務代表會示範它怎麼使用嗎？ B：會的，她星期四下午會來茶水間做一個簡短的【示範】，她示範完之後我們還可以自己試著做幾杯飲料。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "related to seeing or looking",
    "sentence": "A: Why do you think the customers remembered our booth so well at the trade show last weekend? B: I believe it was the strong {{BLANK}} design of the booth, with bright colors, large photos, and a video screen, which attracted people walking by even before they read any of our product information.",
    "cn": "A：你覺得為什麼上週末商展的顧客對我們的攤位印象那麼深？ B：我認為是攤位強烈的【視覺】設計，有鮮豔的顏色、大幅照片和影片螢幕，甚至在路過的人還沒看我們的產品資訊之前就吸引了他們。"
  },
  {
    "word": "slide",
    "pos": "n.",
    "cn_def": "投影片；幻燈片",
    "en_def": "one page of a presentation shown on a screen",
    "sentence": "A: How much information should I put in the presentation for tomorrow's meeting with the clients from Japan? B: Try to keep it short, and on each {{BLANK}} use only a few key points and one simple chart, because the clients prefer to discuss the details and ask questions rather than read long paragraphs.",
    "cn": "A：明天和日本客戶的會議，我的簡報應該放多少資訊？ B：盡量簡短，每張【投影片】只放幾個重點和一張簡單的圖表，因為客戶比較喜歡討論細節和提問，而不是讀長篇段落。"
  },
  {
    "word": "outline",
    "pos": "n.",
    "cn_def": "大綱；綱要",
    "en_def": "a short plan that lists the main points",
    "sentence": "A: The manager asked me to give a talk about our new delivery service, but I don't know where to begin. B: First write a simple {{BLANK}} with the three main points you want to cover, then add examples and numbers under each point, and finally show it to me so I can check it before Monday.",
    "cn": "A：經理要我針對我們新的配送服務做一場報告，但我不知道從哪裡開始。 B：先寫一份簡單的【大綱】，列出你想講的三個重點，然後在每個重點下加上例子和數字，最後拿給我看，讓我在星期一之前幫你檢查。"
  },
  {
    "word": "introduction",
    "pos": "n.",
    "cn_def": "開場介紹；引言",
    "en_def": "the first part that starts a talk",
    "sentence": "A: How should I start my talk to the new staff so that they feel relaxed and interested from the beginning? B: In your {{BLANK}}, tell them your name and job, share a short funny story about your first day at the company, and then explain what they will learn during the next hour.",
    "cn": "A：我該如何開始對新進員工的演講，讓他們一開始就感到放鬆又有興趣？ B：在你的【開場介紹】中，告訴他們你的名字和職務，分享一個你第一天到公司時的有趣小故事，然後說明他們在接下來一小時會學到什麼。"
  },
  {
    "word": "conclusion",
    "pos": "n.",
    "cn_def": "結論；結尾",
    "en_def": "the final part of a talk or report",
    "sentence": "A: I have finished most of my presentation about the marketing budget, but I am not sure how to end it. B: In the {{BLANK}}, repeat the two most important numbers, thank everyone for listening, and ask the directors to approve the budget before the end of the month so the campaign can start on time.",
    "cn": "A：我的行銷預算簡報大部分都完成了，但我不確定要怎麼結尾。 B：在【結論】中，重複兩個最重要的數字，感謝大家聆聽，並請董事們在月底前核准預算，好讓宣傳活動能準時開始。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "聽眾；觀眾",
    "en_def": "the people who watch or listen to something",
    "sentence": "A: Do you know who will be listening to your talk at the trade fair, so you can choose the right examples? B: Most of the {{BLANK}} will be small shop owners from southern Taiwan, so I will use simple language, show real prices, and explain how our products can help them increase sales quickly.",
    "cn": "A：你知道在商展上誰會來聽你的演講嗎？這樣你才能選擇合適的例子。 B：大部分的【聽眾】會是來自台灣南部的小商店老闆，所以我會用簡單的語言、展示實際價格，並說明我們的產品如何幫助他們快速提升銷售。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "吸引參與；使投入",
    "en_def": "to get someone interested and involved",
    "sentence": "A: Last time, many people looked at their phones during my training session, and I felt very disappointed. B: This time, try to {{BLANK}} them by asking a question every ten minutes, giving small prizes for good answers, and letting them discuss real problems from their own departments in pairs.",
    "cn": "A：上次我上培訓課時，很多人都在看手機，我覺得很失望。 B：這次試著每十分鐘問一個問題、為好的答案提供小獎品，並讓他們兩兩討論自己部門的實際問題，以此來【吸引他們參與】。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有自信的",
    "en_def": "sure of your own ability",
    "sentence": "A: How do you feel about presenting the new product to the board of directors tomorrow morning? B: I feel quite {{BLANK}} now, because I have practiced many times with my team, I know all the numbers well, and my manager has already answered most of the difficult questions with me.",
    "cn": "A：明天早上要向董事會介紹新產品，你感覺如何？ B：我現在覺得相當【有自信】，因為我已經和團隊練習了很多次，所有數字我都很熟，而且我的經理已經和我一起準備了大部分困難的問題。"
  },
  {
    "word": "nervous",
    "pos": "adj.",
    "cn_def": "緊張的",
    "en_def": "worried and a little afraid",
    "sentence": "A: Why were your hands shaking before you went on stage at the company's year-end party last night? B: I was really {{BLANK}} because it was my first time speaking in front of more than three hundred colleagues, and I was afraid I would forget my words or drop the microphone.",
    "cn": "A：昨晚公司尾牙你上台前，手為什麼在發抖？ B：我真的很【緊張】，因為那是我第一次在三百多位同事面前講話，我很怕自己會忘詞或把麥克風掉在地上。"
  },
  {
    "word": "rehearse",
    "pos": "v.",
    "cn_def": "排練；預演",
    "en_def": "to practice something before the real event",
    "sentence": "A: The sales presentation for the hotel group is on Wednesday, so what should our team do before then? B: Let's book the small meeting room on Tuesday afternoon and {{BLANK}} the whole presentation at least twice, so everyone knows when to speak and we can finish within the thirty minutes we were given.",
    "cn": "A：給飯店集團的業務簡報在星期三，我們團隊在那之前應該做些什麼？ B：我們預約星期二下午的小會議室，把整場簡報至少【排練】兩次，讓每個人都知道什麼時候發言，也能在給我們的三十分鐘內講完。"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰；清楚",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "A: What did the director say about the training video that our team made for the new factory workers? B: She liked it very much and praised its {{BLANK}}, because every step was explained slowly in simple words, and the workers could understand the safety rules without needing extra help from their supervisors.",
    "cn": "A：主管對我們團隊為新工廠員工製作的培訓影片有什麼看法？ B：她非常喜歡，並稱讚它的【清晰度】，因為每個步驟都用簡單的字慢慢解釋，員工不需要主管額外協助就能理解安全規定。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "語氣；語調",
    "en_def": "the feeling shown in the way someone speaks",
    "sentence": "A: The client sounded upset during the video call this morning, so how should I talk to him in tomorrow's meeting? B: Use a calm and friendly {{BLANK}} of voice, listen carefully to his complaints first, and then explain clearly what our company will do to fix the delivery problem as soon as possible.",
    "cn": "A：今天早上視訊通話時客戶聽起來很不高興，明天開會時我該怎麼跟他說話？ B：用冷靜友善的【語氣】，先仔細聽他的抱怨，然後清楚說明我們公司會怎麼盡快解決配送問題。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "手勢；姿勢",
    "en_def": "a movement of the hands or body that shows meaning",
    "sentence": "A: My manager said I stood too still during my sales talk, so what can I do differently next time? B: Use a simple {{BLANK}}, like opening your hands or pointing to the screen, when you mention an important number, because moving naturally makes you look relaxed and helps people follow your ideas.",
    "cn": "A：經理說我在業務報告時站得太僵硬，下次我可以有什麼不同的做法？ B：提到重要數字時，用一個簡單的【手勢】，像是張開雙手或指向螢幕，因為自然地移動會讓你看起來很放鬆，也能幫助大家跟上你的想法。"
  },
  {
    "word": "eye contact",
    "pos": "n.phr.",
    "cn_def": "眼神接觸",
    "en_def": "looking directly into another person's eyes",
    "sentence": "A: Why do the customers seem to trust Michael so quickly when he explains our insurance plans to them? B: He always makes {{BLANK}} with each person at the table, smiles warmly, and listens to their worries before he answers, so they feel he is honest and really cares about their families.",
    "cn": "A：為什麼Michael向客戶解釋我們的保險方案時，客戶似乎很快就信任他？ B：他總是和桌上的每個人保持【眼神接觸】，親切地微笑，並在回答前先傾聽他們的擔憂，所以他們覺得他很誠實，而且真的關心他們的家人。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "自信；信心",
    "en_def": "a feeling of being sure of yourself",
    "sentence": "A: How did Sarah become such a good speaker after joining the company only two years ago? B: She practiced at every team meeting and took a public speaking course at night, and slowly her {{BLANK}} grew, so now she can present to large groups of customers without feeling worried.",
    "cn": "A：Sarah才進公司兩年，怎麼就變成這麼好的講者？ B：她在每次團隊會議中練習，晚上也去上公眾演說課，她的【自信心】慢慢增加，所以現在她能在一大群客戶面前做簡報而不感到擔心。"
  },
  {
    "word": "persuasive",
    "pos": "adj.",
    "cn_def": "有說服力的",
    "en_def": "able to make people agree or believe something",
    "sentence": "A: Do you think the bank will agree to lend us the money to open our second restaurant downtown? B: I think so, because your business plan was very {{BLANK}}, with clear numbers, strong reasons, and real examples of our success, and the bank manager smiled and nodded many times during the meeting.",
    "cn": "A：你覺得銀行會同意借錢給我們在市中心開第二家餐廳嗎？ B：我覺得會，因為你的營運計畫非常有【說服力】，有清楚的數字、充分的理由和我們成功的真實例子，而且銀行經理在會議中多次微笑點頭。"
  },
  {
    "word": "informative",
    "pos": "adj.",
    "cn_def": "提供資訊的；內容豐富的",
    "en_def": "giving useful information",
    "sentence": "A: Was the talk about the new tax rules for small companies worth the two hours you spent there yesterday? B: Yes, it was really {{BLANK}}, because the accountant explained every change with clear examples, and now I know exactly which forms our company must send to the government before the deadline.",
    "cn": "A：昨天你花兩小時去聽關於小公司新稅務規定的演講，值得嗎？ B：值得，內容真的很【豐富實用】，因為會計師用清楚的例子解釋每一項改變，現在我很清楚我們公司在截止日期前必須向政府提交哪些表格。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動的",
    "en_def": "involving people who act and respond to each other",
    "sentence": "A: What kind of training does the new manager want for the sales staff this year? B: She wants a more {{BLANK}} program, with group games, short quizzes on tablets, and role plays with real customer problems, instead of long talks where people just sit, listen, and feel sleepy after lunch.",
    "cn": "A：新經理今年想給業務人員什麼樣的培訓？ B：她想要更具【互動性】的課程，有團體遊戲、平板上的小測驗，以及模擬真實客戶問題的角色扮演，而不是讓大家只能坐著聽、午餐後昏昏欲睡的冗長演講。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋",
    "en_def": "opinions about how well something was done",
    "sentence": "A: How did the clients react after you presented the new website design to them yesterday afternoon? B: They gave us very useful {{BLANK}}; they liked the colors and the menu, but they asked us to make the text larger and add a search box before we show the final version next week.",
    "cn": "A：你昨天下午向客戶介紹新網站設計後，他們有什麼反應？ B：他們給了我們很有用的【意見回饋】；他們喜歡顏色和選單，但要求我們在下週展示最終版本之前把字體放大，並加上搜尋欄。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to get something or someone ready",
    "sentence": "A: You have to present the quarterly sales report to the whole department on Friday, so are you ready? B: Not yet, so I will stay late tonight to {{BLANK}} my notes and charts, and tomorrow I will ask my supervisor to check my numbers to make sure everything is correct.",
    "cn": "A：你星期五要向全部門報告季度銷售報告，你準備好了嗎？ B：還沒，所以我今晚會留下來【準備】我的筆記和圖表，明天再請主管檢查數字，確保一切正確。"
  },
  {
    "word": "projector",
    "pos": "n.",
    "cn_def": "投影機",
    "en_def": "a machine that shows pictures on a screen or wall",
    "sentence": "A: Why did the meeting with the new clients start twenty minutes late this morning? B: The {{BLANK}} in Room 5 suddenly stopped working, so nobody could see our slides on the wall, and we had to wait for the technician to bring another one from the storage room downstairs.",
    "cn": "A：為什麼今天早上和新客戶的會議晚了二十分鐘才開始？ B：五號會議室的【投影機】突然故障，大家看不到牆上的投影片，我們只好等技術人員從樓下儲藏室搬另一台上來。"
  },
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "講稿；腳本",
    "en_def": "the written words that someone will say",
    "sentence": "A: Are you going to speak without notes when you introduce the new phone at the launch event next week? B: No, the marketing team wrote a short {{BLANK}} for me, so I will practice it every evening and keep a copy on the table in case I forget any of the important details.",
    "cn": "A：下週發表會介紹新手機時，你會不看筆記直接講嗎？ B：不會，行銷團隊幫我寫了一份簡短的【講稿】，所以我每天晚上都會練習，並在桌上放一份，以免我忘記任何重要細節。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興發揮；臨場應變",
    "en_def": "to do or say something without planning it first",
    "sentence": "A: What happened when the power went off in the middle of your presentation at the hotel yesterday? B: I had to {{BLANK}}, so I drew a simple chart on the whiteboard, told the guests a few stories about our customers, and kept them interested until the lights came back about ten minutes later.",
    "cn": "A：昨天你在飯店做簡報做到一半停電時，發生了什麼事？ B：我只好【即興發揮】，在白板上畫了一張簡單的圖表，跟來賓分享幾個關於我們客戶的故事，讓他們保持興趣，直到大約十分鐘後燈亮了為止。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "強調；突顯",
    "en_def": "to make something stand out as important",
    "sentence": "A: There is so much information in this report, so what should I focus on when I talk to the managers? B: You should {{BLANK}} the fifteen percent increase in online sales, because it is our best result this year, and the managers will want to know why it happened and how we can continue it.",
    "cn": "A：這份報告資訊太多了，我向經理們報告時應該著重在哪裡？ B：你應該【強調】線上銷售成長百分之十五，因為這是我們今年最好的成績，經理們會想知道原因以及我們如何能持續下去。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；架構",
    "en_def": "the way the parts of something are organized",
    "sentence": "A: My presentation feels confusing even though I have a lot of good ideas, so what should I change? B: Give it a clear {{BLANK}}: start with the problem, then show your solution, explain the cost, and end with the next steps, so the listeners always know where you are and what is coming.",
    "cn": "A：雖然我有很多好點子，但我的簡報感覺很混亂，我應該改什麼？ B：給它一個清楚的【架構】：先講問題，再提出你的解決方案，說明成本，最後講接下來的步驟，這樣聽眾隨時都知道你講到哪裡、接下來是什麼。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "suitable for work; skilled and serious",
    "sentence": "A: What should I wear when I present our company's services to the bank's managers on Monday? B: Choose something neat and {{BLANK}}, like a dark suit and simple shoes, because the bank is very formal, and looking serious will help them trust you before you even start your first slide.",
    "cn": "A：星期一向銀行經理們介紹我們公司的服務時，我應該穿什麼？ B：選擇整潔且【專業】的服裝，像是深色西裝和簡單的鞋子，因為銀行非常正式，看起來穩重會讓他們在你還沒開始第一張投影片前就信任你。"
  },
  {
    "word": "visual aid",
    "pos": "n.phr.",
    "cn_def": "視覺輔助工具",
    "en_def": "a picture, chart, or video used to help explain something",
    "sentence": "A: The new employees found the safety training boring last month, so how can we make it better? B: Let's use a {{BLANK}} such as a short video or a large poster that shows each step, because people remember pictures more easily than long lists of rules read aloud by the trainer.",
    "cn": "A：上個月新員工覺得安全訓練很無聊，我們要怎麼改善？ B：我們可以使用【視覺輔助工具】，例如短片或展示每個步驟的大海報，因為人們記住圖片比記住講師大聲念出來的長串規則更容易。"
  },
  {
    "word": "summarize",
    "pos": "v.",
    "cn_def": "總結；摘要",
    "en_def": "to give the main points briefly",
    "sentence": "A: The director only has five minutes before her flight, but she wants to know what happened at the client meeting. B: Then {{BLANK}} the main results for her quickly: the client accepted our price, wants the first delivery in March, and asked for a small change to the contract about the payment dates.",
    "cn": "A：主管搭飛機前只剩五分鐘，但她想知道客戶會議的情況。 B：那就快速為她【總結】主要結果：客戶接受了我們的價格，希望三月第一次交貨，並要求在合約中付款日期的部分做一點小修改。"
  }
];

const MCQS = [
  {
    "q": "The mayor will give a short _____ at the opening of the new library. She will thank the workers who built it.",
    "options": [
      "speech",
      "projector",
      "script",
      "audience"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Professor Lin's _____ on global trade lasted two hours. More than one hundred students took notes in the large hall.",
    "options": [
      "gesture",
      "projector",
      "lecture",
      "tone"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "All new managers must attend a one-day _____ on leadership skills. Lunch will be provided in the hotel restaurant.",
    "options": [
      "gesture",
      "seminar",
      "clarity",
      "script"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Over two thousand engineers from forty countries came to the annual _____ in Tokyo. The event included talks, exhibits, and networking dinners.",
    "options": [
      "gesture",
      "outline",
      "tone",
      "conference"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Participants in the pottery _____ will make their own cups and bowls. All tools and clay are included in the fee.",
    "options": [
      "audience",
      "conclusion",
      "workshop",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The chef gave a cooking _____ at the department store on Sunday. Shoppers watched him make three simple dishes.",
    "options": [
      "demonstration",
      "audience",
      "outline",
      "confidence"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please move to the next _____ in the presentation. It shows the sales figures for the last three months.",
    "options": [
      "gesture",
      "tone",
      "audience",
      "slide"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Before writing the full report, Kevin sent his manager a brief _____ of the main sections. She approved it the same day.",
    "options": [
      "gesture",
      "outline",
      "projector",
      "audience"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The host's warm _____ made the guest speaker feel welcome. He then began his talk about online marketing.",
    "options": [
      "introduction",
      "projector",
      "script",
      "structure"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "In the _____ of her report, the manager recommended hiring two more staff members. The board agreed with her suggestion.",
    "options": [
      "gesture",
      "projector",
      "conclusion",
      "tone"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ clapped loudly when the singer finished her last song. Many people stood up to show their appreciation.",
    "options": [
      "script",
      "audience",
      "outline",
      "slide"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Good trainers use games and questions to _____ their students. This keeps everyone active and interested during long sessions.",
    "options": [
      "rehearse",
      "summarize",
      "improvise",
      "engage"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "After months of practice, Daniel felt _____ about speaking in front of the investors. He answered every question calmly.",
    "options": [
      "interactive",
      "informative",
      "confident",
      "visual"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Many job applicants feel _____ before an interview. Taking a few deep breaths can help them stay calm.",
    "options": [
      "nervous",
      "interactive",
      "informative",
      "visual"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The actors will _____ the play every evening this week. The first public show is on Saturday night.",
    "options": [
      "engage",
      "highlight",
      "improvise",
      "rehearse"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Her friendly _____ of voice made the angry customer calm down. He thanked her before ending the call.",
    "options": [
      "script",
      "tone",
      "slide",
      "outline"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The speaker made a welcoming _____ with both hands to invite the guests to sit down. Everyone quickly found a seat.",
    "options": [
      "gesture",
      "script",
      "outline",
      "clarity"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "During a job interview, try to keep _____ with the interviewer. It shows that you are honest and interested.",
    "options": [
      "visual aid",
      "feedback",
      "eye contact",
      "structure"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Winning the regional sales award gave Amy more _____ in her abilities. She now leads team meetings without fear.",
    "options": [
      "projector",
      "confidence",
      "clarity",
      "gesture"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The lawyer made a very _____ argument in court. In the end, the judge agreed with her client.",
    "options": [
      "nervous",
      "interactive",
      "visual",
      "persuasive"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The museum's new _____ exhibit lets children touch screens and answer questions. It has become very popular with families.",
    "options": [
      "nervous",
      "confident",
      "interactive",
      "persuasive"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Customers can leave _____ about our service on the website. We read every comment and try to improve.",
    "options": [
      "feedback",
      "projector",
      "gesture",
      "introduction"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The kitchen staff begins to _____ the vegetables at six in the morning. The restaurant opens for breakfast at seven.",
    "options": [
      "improvise",
      "engage",
      "summarize",
      "prepare"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The technician connected the laptop to the _____ before the meeting. The images appeared clearly on the large white screen.",
    "options": [
      "audience",
      "projector",
      "conclusion",
      "gesture"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The actor forgot a line, so he quickly checked the _____ backstage. Then he returned to the stage and continued.",
    "options": [
      "script",
      "gesture",
      "audience",
      "tone"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "When the guitarist got sick, the other musicians had to _____ for the rest of the concert. The fans never noticed.",
    "options": [
      "summarize",
      "highlight",
      "improvise",
      "engage"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Please use a yellow pen to _____ the most important dates in the contract. This will help us avoid missing any deadlines.",
    "options": [
      "improvise",
      "highlight",
      "rehearse",
      "engage"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The hotel staff always look neat and _____ in their dark blue uniforms. Guests often praise their polite service.",
    "options": [
      "informative",
      "interactive",
      "persuasive",
      "professional"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "A simple chart is a useful _____ when you explain numbers to a group. It helps people understand the data quickly.",
    "options": [
      "eye contact",
      "feedback",
      "visual aid",
      "conclusion"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "At the end of the meeting, the chairperson will _____ the decisions in a few sentences. Then everyone can return to work.",
    "options": [
      "summarize",
      "improvise",
      "engage",
      "rehearse"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "speech": {
    "pos": "n.",
    "en_def": "a formal talk given to a group of people",
    "cn_def": "演講；演說"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk that teaches people about a subject",
    "cn_def": "講座；演講課"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting where people learn about and discuss a topic",
    "cn_def": "研討會；研習會"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where people discuss shared interests",
    "cn_def": "會議；大會"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a training meeting where people practice a skill",
    "cn_def": "工作坊；研習班"
  },
  "demonstration": {
    "pos": "n.",
    "en_def": "an act of showing how something works",
    "cn_def": "示範；展示"
  },
  "visual": {
    "pos": "adj.",
    "en_def": "related to seeing or looking",
    "cn_def": "視覺的"
  },
  "slide": {
    "pos": "n.",
    "en_def": "one page of a presentation shown on a screen",
    "cn_def": "投影片；幻燈片"
  },
  "outline": {
    "pos": "n.",
    "en_def": "a short plan that lists the main points",
    "cn_def": "大綱；綱要"
  },
  "introduction": {
    "pos": "n.",
    "en_def": "the first part that starts a talk",
    "cn_def": "開場介紹；引言"
  },
  "conclusion": {
    "pos": "n.",
    "en_def": "the final part of a talk or report",
    "cn_def": "結論；結尾"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to something",
    "cn_def": "聽眾；觀眾"
  },
  "engage": {
    "pos": "v.",
    "en_def": "to get someone interested and involved",
    "cn_def": "吸引參與；使投入"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure of your own ability",
    "cn_def": "有自信的"
  },
  "nervous": {
    "pos": "adj.",
    "en_def": "worried and a little afraid",
    "cn_def": "緊張的"
  },
  "rehearse": {
    "pos": "v.",
    "en_def": "to practice something before the real event",
    "cn_def": "排練；預演"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清晰；清楚"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the feeling shown in the way someone speaks",
    "cn_def": "語氣；語調"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hands or body that shows meaning",
    "cn_def": "手勢；姿勢"
  },
  "eye contact": {
    "pos": "n.phr.",
    "en_def": "looking directly into another person's eyes",
    "cn_def": "眼神接觸"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "a feeling of being sure of yourself",
    "cn_def": "自信；信心"
  },
  "persuasive": {
    "pos": "adj.",
    "en_def": "able to make people agree or believe something",
    "cn_def": "有說服力的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving useful information",
    "cn_def": "提供資訊的；內容豐富的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "involving people who act and respond to each other",
    "cn_def": "互動的"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "opinions about how well something was done",
    "cn_def": "意見回饋"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to get something or someone ready",
    "cn_def": "準備"
  },
  "projector": {
    "pos": "n.",
    "en_def": "a machine that shows pictures on a screen or wall",
    "cn_def": "投影機"
  },
  "script": {
    "pos": "n.",
    "en_def": "the written words that someone will say",
    "cn_def": "講稿；腳本"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to do or say something without planning it first",
    "cn_def": "即興發揮；臨場應變"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make something stand out as important",
    "cn_def": "強調；突顯"
  },
  "structure": {
    "pos": "n.",
    "en_def": "the way the parts of something are organized",
    "cn_def": "結構；架構"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "suitable for work; skilled and serious",
    "cn_def": "專業的"
  },
  "visual aid": {
    "pos": "n.phr.",
    "en_def": "a picture, chart, or video used to help explain something",
    "cn_def": "視覺輔助工具"
  },
  "summarize": {
    "pos": "v.",
    "en_def": "to give the main points briefly",
    "cn_def": "總結；摘要"
  }
};

const EXTRA_GLOSSES = {};
