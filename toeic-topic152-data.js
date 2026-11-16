// Topic 152 Quiz Data: Gathering 聚會
// Source word list: https://www.examword.com/group-topic/gathering — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T152 - Gathering 聚會",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "an event where people come together to talk about work",
    "sentence": "A: Why did the marketing team cancel lunch with the new clients from Osaka this afternoon? B: The director called an urgent {{BLANK}} at noon to talk about the falling sales numbers, so everyone had to stay in the conference room until almost three o'clock.",
    "cn": "A：行銷團隊為什麼取消了今天下午和大阪新客戶的午餐？ B：主管中午召開了一場緊急【會議】討論下滑的銷售數字，所以每個人都得待在會議室裡直到將近三點。"
  },
  {
    "word": "party",
    "pos": "n.",
    "cn_def": "派對；聚會",
    "en_def": "a social event where people eat, drink, talk and have fun",
    "sentence": "A: Are you going to the restaurant downtown on Friday night to say goodbye to Mr. Lin before he retires next month? B: Yes, the whole accounting department is going to the farewell {{BLANK}}, and I've already bought him a nice pen as a small present from all of us.",
    "cn": "A：你星期五晚上會去市中心那家餐廳，在林先生下個月退休前跟他道別嗎？ B：會啊，整個會計部門都會去參加歡送【派對】，我已經買了一支好筆，當作我們大家送他的小禮物。"
  },
  {
    "word": "celebration",
    "pos": "n.",
    "cn_def": "慶祝活動；慶典",
    "en_def": "a special event to enjoy an important day or success",
    "sentence": "A: Why are there balloons and a huge chocolate cake in the staff lounge this morning? B: Our company just reached its sales goal for the whole year three weeks early, so the manager planned a small {{BLANK}} for everyone during the lunch break to thank us for our hard work.",
    "cn": "A：為什麼今天早上員工休息室裡有氣球和一個超大的巧克力蛋糕？ B：我們公司提早三週達成了全年的銷售目標，所以經理在午休時間為大家安排了一個小型【慶祝活動】，感謝我們的辛勞。"
  },
  {
    "word": "reunion",
    "pos": "n.",
    "cn_def": "團聚；重聚會",
    "en_def": "a gathering of people who have not seen each other for a long time",
    "sentence": "A: You look really excited today, so are you doing anything special after work this weekend? B: Yes, I'm flying back to Kaohsiung for my high school class {{BLANK}}, and I'm going to see many classmates I haven't talked to since we graduated twenty years ago.",
    "cn": "A：你今天看起來好興奮，這個週末下班後有什麼特別的安排嗎？ B：有啊，我要飛回高雄參加高中同學【聚會】，會見到很多二十年前畢業後就沒再聯絡的同學。"
  },
  {
    "word": "assembly",
    "pos": "n.",
    "cn_def": "集會；大會",
    "en_def": "a large meeting of a group of people, often for a formal reason",
    "sentence": "A: Why is everyone walking toward the main hall instead of going back to their desks after lunch? B: The CEO asked all employees to attend a general {{BLANK}} at one-thirty because she wants to explain the new company policies and answer questions about the upcoming merger.",
    "cn": "A：為什麼大家午餐後都往大禮堂走，而不是回到座位上？ B：執行長要求全體員工一點半參加全體【大會】，因為她想說明公司的新政策，並回答有關即將合併的問題。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "研討會；會議",
    "en_def": "a large formal meeting where people discuss a subject for one or more days",
    "sentence": "A: Will you be in the office next week to help me finish the budget report for the board? B: Unfortunately not, because I'm traveling to Singapore for a three-day technology {{BLANK}}, where I'm giving a short presentation and meeting several possible business partners.",
    "cn": "A：你下週會在辦公室幫我完成要給董事會的預算報告嗎？ B：恐怕不行，因為我要去新加坡參加為期三天的科技【研討會】，我會在那裡做一個簡短的報告，並和幾位潛在的商業夥伴見面。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "活動；盛事",
    "en_def": "something important or special that is planned for people to go to",
    "sentence": "A: How many people do you think will come to the product launch at the hotel on Saturday? B: We've sent out about three hundred invitations, so the hotel staff are preparing the ballroom for a large {{BLANK}} with plenty of seats, drinks, and a big screen for the demonstration.",
    "cn": "A：你覺得星期六在飯店舉辦的產品發表會會有多少人來？ B：我們寄出了大約三百張邀請函，所以飯店員工正在把宴會廳布置成一場大型【活動】的場地，有充足的座位、飲料和一個用來示範的大螢幕。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；藝術節",
    "en_def": "a special time of celebration, often with music, food or performances",
    "sentence": "A: Why are so many hotels in the city fully booked in the second week of October? B: The city holds a famous food and music {{BLANK}} in the park every autumn, so thousands of tourists come from all over the country to enjoy the concerts and try local dishes.",
    "cn": "A：為什麼市區很多飯店在十月第二週都客滿了？ B：這座城市每年秋天都會在公園舉辦著名的美食音樂【節】，所以成千上萬的遊客從全國各地前來欣賞演唱會並品嚐當地料理。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal event held for an important occasion",
    "sentence": "A: Do you know why the security guards are setting up a red carpet and rows of chairs in front of the new building? B: The mayor is coming tomorrow morning for the opening {{BLANK}}, and our president will cut the ribbon and give a short speech to the reporters and guests.",
    "cn": "A：你知道為什麼警衛在新大樓前面鋪紅地毯、擺好一排排椅子嗎？ B：市長明天早上會來參加開幕【典禮】，我們的董事長會剪綵，並向記者和來賓發表簡短的致詞。"
  },
  {
    "word": "get-together",
    "pos": "n.",
    "cn_def": "（非正式的）聚會",
    "en_def": "an informal social meeting of friends or co-workers",
    "sentence": "A: Are you free on Thursday evening after work, or do you have to finish the sales report? B: I should be free, so why don't we invite a few people from the design team for a casual {{BLANK}} at the café across the street to relax and talk about something other than work?",
    "cn": "A：你星期四晚上下班後有空嗎？還是得完成銷售報告？ B：應該有空，我們何不邀請設計團隊的幾個人，到對街的咖啡館來個輕鬆的【聚會】，放鬆一下，聊聊工作以外的事？"
  },
  {
    "word": "social",
    "pos": "adj.",
    "cn_def": "社交的；聯誼的",
    "en_def": "relating to meeting and spending time with other people for fun",
    "sentence": "A: Why does the human resources department organize a dinner for new employees every three months? B: It's an important {{BLANK}} activity because it helps people from different departments get to know each other, and new staff feel more comfortable asking for help later.",
    "cn": "A：為什麼人資部每三個月就為新進員工辦一次晚餐？ B：這是一個重要的【社交】活動，因為它能幫助不同部門的人互相認識，新員工之後也比較敢開口求助。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群",
    "en_def": "a large number of people together in one place",
    "sentence": "A: Why did it take you almost an hour to get through the entrance of the trade show this morning? B: A huge {{BLANK}} of visitors was waiting outside when the doors opened at nine, and the security staff had to check everyone's badge before letting them into the exhibition hall.",
    "cn": "A：為什麼你今天早上花了將近一小時才通過商展入口？ B：九點開門時外面有一大群【人潮】在等，保全人員必須在讓大家進入展覽館前檢查每個人的識別證。"
  },
  {
    "word": "group",
    "pos": "n.",
    "cn_def": "團體；群組",
    "en_def": "a number of people who are together or do something together",
    "sentence": "A: How should we organize the forty visitors from our partner company during tomorrow's factory tour? B: Let's put ten visitors in each {{BLANK}} and give each one an experienced guide from the production line, so everyone can see the machines clearly and ask questions easily during the two-hour visit.",
    "cn": "A：明天參觀工廠時，我們該怎麼安排合作公司來的四十位訪客？ B：我們把每十位訪客分成一【組】，每組配一位來自生產線、經驗豐富的導覽員，這樣在兩小時的參觀中大家都能清楚看到機器，也方便發問。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "客人；來賓",
    "en_def": "a person who is invited to an event or someone's home",
    "sentence": "A: Who is the woman sitting next to the CEO at the front table of the awards dinner? B: She's a special {{BLANK}} from our biggest customer in Japan, and the CEO invited her because her company helped us increase our overseas sales so much this year.",
    "cn": "A：坐在頒獎晚宴主桌、執行長旁邊的那位女士是誰？ B：她是我們在日本最大客戶派來的特別【來賓】，執行長邀請她是因為她的公司今年幫我們大幅提升了海外業績。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；主持",
    "en_def": "to organize an event and welcome the people who come",
    "sentence": "A: Has the company decided where the annual sales conference will take place next spring? B: Yes, our Taipei office will {{BLANK}} it for the first time, so we need to book hotel rooms, plan the meals, and arrange transportation for about two hundred visitors from overseas.",
    "cn": "A：公司決定明年春天的年度業務大會要在哪裡舉行了嗎？ B：決定了，我們台北辦公室將首次【主辦】，所以我們得為大約兩百位海外訪客預訂飯店房間、規劃餐點並安排交通。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone to come to an event",
    "sentence": "A: The new restaurant on the corner looks great, so should we take our clients there after the contract signing? B: That's a good idea, and we should also {{BLANK}} the sales manager to join us because she worked very hard on this deal for the last six months.",
    "cn": "A：轉角那家新餐廳看起來很棒，我們簽約後要不要帶客戶去那裡？ B：好主意，我們也應該【邀請】業務經理一起來，因為她過去六個月為這筆交易非常努力。"
  },
  {
    "word": "invitation",
    "pos": "n.",
    "cn_def": "邀請；邀請函",
    "en_def": "a written or spoken request asking someone to come to an event",
    "sentence": "A: Did you get any information about the holiday dinner that the company is holding next month? B: Yes, I received an {{BLANK}} by email this morning, and it says we need to reply by Friday and tell them if we are bringing a family member.",
    "cn": "A：你有收到公司下個月舉辦的節日晚宴的相關資訊嗎？ B：有，我今天早上透過電子郵件收到了【邀請函】，上面說我們必須在星期五前回覆，並告知是否會攜帶家人。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "出席；參加",
    "en_def": "to go to an event such as a meeting or class",
    "sentence": "A: Is it necessary for the whole sales team to come to the training session on Wednesday afternoon? B: Yes, everyone must {{BLANK}} because the trainer will explain the new customer system, and we can't use it next week if we haven't learned how it works.",
    "cn": "A：整個業務團隊都必須參加星期三下午的訓練課程嗎？ B：是的，每個人都必須【出席】，因為講師會說明新的客戶系統，如果沒學會怎麼用，我們下週就沒辦法使用。"
  },
  {
    "word": "arrive",
    "pos": "v.",
    "cn_def": "抵達；到達",
    "en_def": "to reach a place",
    "sentence": "A: What time should the catering staff come to set up the food for tomorrow's lunch reception? B: They should {{BLANK}} at the hotel by ten-thirty at the latest, because the guests will start coming in at noon and we need enough time to prepare the tables.",
    "cn": "A：外燴人員明天應該幾點來布置午宴的餐點？ B：他們最晚要在十點半【抵達】飯店，因為賓客中午就會陸續進場，我們需要足夠的時間準備餐桌。"
  },
  {
    "word": "welcome",
    "pos": "v.",
    "cn_def": "歡迎；迎接",
    "en_def": "to greet someone in a friendly way when they come",
    "sentence": "A: Who will stand at the front door when the visitors from the German company come in tomorrow morning? B: The general manager and I will {{BLANK}} them in the lobby, and then we'll take them upstairs to the conference room for coffee and a short introduction.",
    "cn": "A：明天早上德國公司的訪客到來時，誰會站在大門口？ B：總經理和我會在大廳【迎接】他們，然後帶他們上樓到會議室喝咖啡，並做個簡短的介紹。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹",
    "en_def": "to tell people each other's names when they meet for the first time",
    "sentence": "A: I don't know anyone at this networking dinner except you, so could you help me meet some people? B: Of course, let me {{BLANK}} you to Mr. Chen first, since he works in the same industry as you and he's always looking for new suppliers.",
    "cn": "A：在這場交流晚宴上除了你我誰都不認識，你可以幫我認識一些人嗎？ B：當然，我先把你【介紹】給陳先生，因為他和你在同一個產業，而且他一直在找新的供應商。"
  },
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "聊天；閒談",
    "en_def": "to talk in a friendly and informal way",
    "sentence": "A: What did you do during the coffee break at the seminar this morning? B: I had a chance to {{BLANK}} with a few engineers from other companies about their projects, and one of them gave me some useful tips for our new software design.",
    "cn": "A：你今天早上研討會的茶歇時間做了什麼？ B：我有機會和幾位其他公司的工程師【聊天】，談他們的專案，其中一位還給了我一些對我們新軟體設計很有用的建議。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with other people to share ideas",
    "sentence": "A: Why are the department heads meeting in the director's office so late on a Friday evening? B: They need to {{BLANK}} the budget for next year's company trip, because the hotel prices went up and they must decide whether to change the location.",
    "cn": "A：為什麼各部門主管星期五這麼晚還在主管辦公室開會？ B：他們需要【討論】明年員工旅遊的預算，因為飯店價格上漲，他們必須決定是否要換地點。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享",
    "en_def": "to tell other people about your ideas or experiences",
    "sentence": "A: What happens at the monthly lunch meeting that the new manager started in March? B: Every team member gets five minutes to {{BLANK}} their ideas and experiences from the past month, so we learn from each other and solve problems together more quickly.",
    "cn": "A：新經理三月開始舉辦的每月午餐會都在做什麼？ B：每位成員有五分鐘可以【分享】過去一個月的想法和經驗，所以我們能互相學習，也能更快一起解決問題。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable because of a special day or success",
    "sentence": "A: Our team finally won the large contract with the airline after months of hard work, didn't we? B: Yes, and the manager is taking all of us out to a nice Italian restaurant tonight to {{BLANK}}, so please don't make any other plans after work.",
    "cn": "A：經過幾個月的努力，我們團隊終於拿下航空公司的大合約了，對吧？ B：對，經理今晚要帶我們大家去一家不錯的義大利餐廳【慶祝】，所以下班後請不要安排其他事。"
  },
  {
    "word": "mingle",
    "pos": "v.",
    "cn_def": "（在社交場合）交際；與人打成一片",
    "en_def": "to move around and talk to many different people at a social event",
    "sentence": "A: I'm a little nervous about going to the reception for new clients tonight, because I'm not good at talking to strangers. B: Just relax and {{BLANK}} with the guests for a while, because most people there are friendly and happy to talk about their businesses.",
    "cn": "A：我對今晚的新客戶招待會有點緊張，因為我不擅長和陌生人說話。 B：放輕鬆，和賓客們【交際】一下就好，因為那裡大部分的人都很友善，也樂意聊聊自己的生意。"
  },
  {
    "word": "network",
    "pos": "v.",
    "cn_def": "建立人脈；交流",
    "en_def": "to meet and talk with people who may help you in your work",
    "sentence": "A: Why do you go to so many business breakfasts and industry events every month? B: They give me a chance to {{BLANK}} with managers from other companies, and several of the clients I have now came from people I first met at those events.",
    "cn": "A：你為什麼每個月要參加那麼多商務早餐會和產業活動？ B：它們讓我有機會和其他公司的主管【建立人脈】，我現在有好幾位客戶就是來自我在那些活動中初次認識的人。"
  },
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "自助餐",
    "en_def": "a meal where people serve themselves from many dishes on a table",
    "sentence": "A: What kind of food will the hotel serve at the company's year-end dinner this Friday? B: They're preparing a large {{BLANK}} with Chinese, Japanese, and Western dishes, so the guests can walk around the tables and choose whatever they want to eat.",
    "cn": "A：這週五公司尾牙飯店會提供什麼樣的餐點？ B：他們正在準備一場大型【自助餐】，有中式、日式和西式料理，賓客可以在餐桌間走動，想吃什麼就拿什麼。"
  },
  {
    "word": "refreshments",
    "pos": "n.",
    "cn_def": "茶點；點心飲料",
    "en_def": "small amounts of food and drinks served at an event",
    "sentence": "A: Will there be anything to eat during the three-hour training workshop on Saturday morning? B: Yes, light {{BLANK}} such as coffee, tea, cookies, and fresh fruit will be served in the hallway outside the training room during the short break at ten-thirty.",
    "cn": "A：星期六早上三小時的訓練研習會期間會有東西吃嗎？ B：會，十點半短暫休息時會在訓練教室外的走廊提供咖啡、茶、餅乾和新鮮水果等簡單的【茶點】。"
  },
  {
    "word": "entertainment",
    "pos": "n.",
    "cn_def": "娛樂；餘興節目",
    "en_def": "performances or activities that people enjoy watching or doing",
    "sentence": "A: Besides dinner and the awards, what else has the planning team prepared for the year-end party? B: They hired a band and a magician for {{BLANK}}, and there will also be a lucky draw with prizes like a new phone and a weekend hotel stay.",
    "cn": "A：除了晚餐和頒獎，籌備小組還為尾牙準備了什麼？ B：他們請了一個樂團和一位魔術師當作【餘興節目】，還會有摸彩，獎品包括新手機和週末飯店住宿。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds arranged in a pleasant way by singing or playing instruments",
    "sentence": "A: What did you think of the welcome dinner for the visiting clients at the hotel last night? B: The food was excellent, and the soft piano {{BLANK}} in the background made the atmosphere relaxing, so our guests seemed to enjoy the evening very much.",
    "cn": "A：你覺得昨晚在飯店為來訪客戶辦的歡迎晚宴如何？ B：食物非常棒，背景輕柔的鋼琴【音樂】讓氣氛很放鬆，所以我們的客人似乎非常享受那個晚上。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講；致詞",
    "en_def": "a formal talk given to a group of people",
    "sentence": "A: Why does the president look so nervous while he's waiting near the stage at the anniversary dinner? B: He has to give a {{BLANK}} in front of five hundred employees and guests, and he wants to thank everyone properly for the company's thirty years of success.",
    "cn": "A：為什麼董事長在週年晚宴的舞台旁等待時看起來那麼緊張？ B：他必須在五百位員工和來賓面前發表【演講】，而且他想好好感謝大家為公司三十年來的成功所做的一切。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的；輕鬆的",
    "en_def": "relaxed and friendly, not official",
    "sentence": "A: Do I need to wear a suit and tie to the team lunch with the new manager on Friday? B: No, it's a very {{BLANK}} lunch at a small noodle shop near the office, so jeans and a simple shirt are perfectly fine, and everyone will just be chatting.",
    "cn": "A：星期五和新經理的團隊午餐，我需要穿西裝打領帶嗎？ B：不用，那是在公司附近一家小麵店的【非正式】午餐，穿牛仔褲和簡單的襯衫就完全沒問題，大家只是聊聊天而已。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "following official rules or customs; serious and proper",
    "sentence": "A: What should I wear to the dinner with the bank's board members next Thursday evening? B: It's a {{BLANK}} dinner at a five-star hotel, so you should wear a dark suit, and remember that the guests will be seated according to a name card on each table.",
    "cn": "A：下週四晚上和銀行董事們的晚宴我該穿什麼？ B：那是在五星級飯店舉辦的【正式】晚宴，所以你應該穿深色西裝，還有記得賓客會依照每桌上的名牌入座。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的；值得紀念的",
    "en_def": "special or enjoyable enough to be remembered easily",
    "sentence": "A: How was the company trip to Hualien that the whole office went on last weekend? B: It was really {{BLANK}}, because we hiked through a beautiful gorge, ate fresh seafood by the ocean, and got to know colleagues from other departments much better.",
    "cn": "A：上週末全辦公室一起去的花蓮員工旅遊怎麼樣？ B：真的很【難忘】，因為我們健行穿越美麗的峽谷、在海邊吃新鮮海鮮，還和其他部門的同事變得更熟。"
  }
];

const MCQS = [
  {
    "q": "The sales team holds a short _____ every Monday morning. The manager uses it to review last week's results and set new goals.",
    "options": [
      "meeting",
      "buffet",
      "crowd",
      "speech"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our department is planning a surprise _____ for our director's fiftieth birthday. Please bring a snack and keep the plan a secret.",
    "options": [
      "assembly",
      "party",
      "reunion",
      "network"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The hotel offers a special package for wedding and anniversary _____. It includes a decorated hall, a cake, and a photographer.",
    "options": [
      "discussion",
      "refreshments",
      "celebration",
      "invitation"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Former employees of the company returned for a _____ last weekend. Many of them had not seen each other for over ten years.",
    "options": [
      "ceremony",
      "speech",
      "buffet",
      "reunion"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All factory workers must join the safety _____ in the main hall on Monday. The plant manager will explain the new fire exits.",
    "options": [
      "festival",
      "assembly",
      "entertainment",
      "reunion"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The marketing director will give the opening talk at the industry _____ in Tokyo. More than two thousand professionals are expected to attend.",
    "options": [
      "conference",
      "get-together",
      "party",
      "buffet"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our assistant manager is in charge of planning the charity _____ next month. She has already booked the hall and contacted several sponsors.",
    "options": [
      "speech",
      "crowd",
      "music",
      "event"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The city's lantern _____ attracts thousands of visitors every February. Local shops and hotels usually see a big increase in business.",
    "options": [
      "assembly",
      "meeting",
      "festival",
      "invitation"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The graduation _____ will begin at nine o'clock sharp. Students should be in their seats fifteen minutes early.",
    "options": [
      "ceremony",
      "buffet",
      "chat",
      "crowd"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The new interns organized a small _____ at a café on Friday. It was a relaxed way to get to know their coworkers.",
    "options": [
      "conference",
      "get-together",
      "assembly",
      "ceremony"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The new manager encourages staff to join the company's _____ club. It organizes bowling nights and weekend hiking trips for employees.",
    "options": [
      "formal",
      "legal",
      "social",
      "memorable"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The pop singer's free concert drew a huge _____ to the city square. Police closed several nearby streets for safety.",
    "options": [
      "guest",
      "host",
      "speech",
      "crowd"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Visitors to the museum must stay with their tour _____. The guide will lead everyone through each exhibition room in order.",
    "options": [
      "crowd",
      "group",
      "guest",
      "event"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Each _____ will receive a name badge at the reception desk. Please show your invitation card when you arrive.",
    "options": [
      "guest",
      "host",
      "crowd",
      "group"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Our hotel will _____ a business forum for local companies next month. We expect around three hundred people from different industries.",
    "options": [
      "arrive",
      "chat",
      "mingle",
      "host"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "We would like to _____ you to the opening of our new branch. The event starts at six in the evening with dinner and drinks.",
    "options": [
      "arrive",
      "attend",
      "invite",
      "discuss"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Thank you for your kind _____ to the award dinner. Unfortunately, I will be on a business trip that week.",
    "options": [
      "invitation",
      "entertainment",
      "refreshments",
      "assembly"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "More than five hundred people plan to _____ the job fair on Saturday. Organizers have added extra tables to handle the crowd.",
    "options": [
      "arrive",
      "attend",
      "welcome",
      "chat"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Please _____ at the airport at least two hours before your flight. Security lines can be very long during the holiday season.",
    "options": [
      "attend",
      "host",
      "arrive",
      "network"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The CEO stood at the entrance to _____ each new employee personally. She shook hands and handed out company gift bags.",
    "options": [
      "discuss",
      "arrive",
      "chat",
      "welcome"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "At the start of the meeting, I would like to _____ our new finance director. She joins us from a large bank in Hong Kong.",
    "options": [
      "celebrate",
      "introduce",
      "mingle",
      "attend"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "During the break, the participants had time to _____ over coffee and cookies. Many of them exchanged business cards before returning.",
    "options": [
      "chat",
      "host",
      "invite",
      "attend"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The board will _____ the proposal at next Tuesday's meeting. A final decision is expected by the end of the month.",
    "options": [
      "chat",
      "mingle",
      "welcome",
      "discuss"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Please come to the session ready to _____ your opinions about the new product. All feedback will help the design team improve it.",
    "options": [
      "arrive",
      "invite",
      "share",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The company will _____ its twentieth anniversary with a big dinner. Every employee will receive a special gift that evening.",
    "options": [
      "celebrate",
      "introduce",
      "mingle",
      "discuss"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "At the reception, the sales director moved around the room to _____ with clients. He spoke with nearly everyone before dinner began.",
    "options": [
      "celebrate",
      "mingle",
      "welcome",
      "invite"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Trade shows are a good place to _____ with people in your field. You can meet possible partners and learn about new trends.",
    "options": [
      "arrive",
      "celebrate",
      "network",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Lunch will be a hot _____ served in the hotel restaurant. Guests can choose from more than forty dishes and desserts.",
    "options": [
      "ceremony",
      "speech",
      "crowd",
      "buffet"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Coffee, tea, and light _____ will be available in the lobby. Please do not bring food into the training room.",
    "options": [
      "entertainment",
      "refreshments",
      "invitations",
      "speeches"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The president's _____ at the year-end dinner lasted only ten minutes. He thanked everyone and announced the yearly bonuses.",
    "options": [
      "speech",
      "buffet",
      "crowd",
      "festival"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "meeting": {
    "pos": "n.",
    "en_def": "an event where people come together to talk about work",
    "cn_def": "會議"
  },
  "party": {
    "pos": "n.",
    "en_def": "a social event where people eat, drink, talk and have fun",
    "cn_def": "派對；聚會"
  },
  "celebration": {
    "pos": "n.",
    "en_def": "a special event to enjoy an important day or success",
    "cn_def": "慶祝活動；慶典"
  },
  "reunion": {
    "pos": "n.",
    "en_def": "a gathering of people who have not seen each other for a long time",
    "cn_def": "團聚；重聚會"
  },
  "assembly": {
    "pos": "n.",
    "en_def": "a large meeting of a group of people, often for a formal reason",
    "cn_def": "集會；大會"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where people discuss a subject for one or more days",
    "cn_def": "研討會；會議"
  },
  "event": {
    "pos": "n.",
    "en_def": "something important or special that is planned for people to go to",
    "cn_def": "活動；盛事"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special time of celebration, often with music, food or performances",
    "cn_def": "節慶；藝術節"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal event held for an important occasion",
    "cn_def": "典禮；儀式"
  },
  "get-together": {
    "pos": "n.",
    "en_def": "an informal social meeting of friends or co-workers",
    "cn_def": "（非正式的）聚會"
  },
  "social": {
    "pos": "adj.",
    "en_def": "relating to meeting and spending time with other people for fun",
    "cn_def": "社交的；聯誼的"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large number of people together in one place",
    "cn_def": "人群"
  },
  "group": {
    "pos": "n.",
    "en_def": "a number of people who are together or do something together",
    "cn_def": "團體；群組"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person who is invited to an event or someone's home",
    "cn_def": "客人；來賓"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and welcome the people who come",
    "cn_def": "主辦；主持"
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone to come to an event",
    "cn_def": "邀請"
  },
  "invitation": {
    "pos": "n.",
    "en_def": "a written or spoken request asking someone to come to an event",
    "cn_def": "邀請；邀請函"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event such as a meeting or class",
    "cn_def": "出席；參加"
  },
  "arrive": {
    "pos": "v.",
    "en_def": "to reach a place",
    "cn_def": "抵達；到達"
  },
  "welcome": {
    "pos": "v.",
    "en_def": "to greet someone in a friendly way when they come",
    "cn_def": "歡迎；迎接"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to tell people each other's names when they meet for the first time",
    "cn_def": "介紹"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly and informal way",
    "cn_def": "聊天；閒談"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people to share ideas",
    "cn_def": "討論"
  },
  "share": {
    "pos": "v.",
    "en_def": "to tell other people about your ideas or experiences",
    "cn_def": "分享"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable because of a special day or success",
    "cn_def": "慶祝"
  },
  "mingle": {
    "pos": "v.",
    "en_def": "to move around and talk to many different people at a social event",
    "cn_def": "（在社交場合）交際；與人打成一片"
  },
  "network": {
    "pos": "v.",
    "en_def": "to meet and talk with people who may help you in your work",
    "cn_def": "建立人脈；交流"
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal where people serve themselves from many dishes on a table",
    "cn_def": "自助餐"
  },
  "refreshments": {
    "pos": "n.",
    "en_def": "small amounts of food and drinks served at an event",
    "cn_def": "茶點；點心飲料"
  },
  "entertainment": {
    "pos": "n.",
    "en_def": "performances or activities that people enjoy watching or doing",
    "cn_def": "娛樂；餘興節目"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds arranged in a pleasant way by singing or playing instruments",
    "cn_def": "音樂"
  },
  "speech": {
    "pos": "n.",
    "en_def": "a formal talk given to a group of people",
    "cn_def": "演講；致詞"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly, not official",
    "cn_def": "非正式的；輕鬆的"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "following official rules or customs; serious and proper",
    "cn_def": "正式的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special or enjoyable enough to be remembered easily",
    "cn_def": "難忘的；值得紀念的"
  }
};

const EXTRA_GLOSSES = {};
