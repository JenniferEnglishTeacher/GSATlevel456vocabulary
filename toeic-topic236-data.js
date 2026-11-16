// Topic 236 Quiz Data: Meet 見面
// Source word list: https://www.examword.com/group-topic/meet — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T236 - Meet 見面",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "meeting",
    "pos": "n.",
    "cn_def": "會議",
    "en_def": "a time when people come together to talk about something",
    "sentence": "A: Do you know why the manager asked everyone in the sales department to stay late on Thursday afternoon? B: She called a {{BLANK}} in the large conference room because she wants to explain the new targets and hear our ideas before the busy holiday season begins next month.",
    "cn": "A：你知道經理為什麼要求業務部的每個人週四下午留晚一點嗎？ B：她在大會議室召開了一場【會議】，因為她想在下個月忙碌的假期旺季開始前說明新目標並聽聽我們的想法。"
  },
  {
    "word": "encounter",
    "pos": "v.",
    "cn_def": "偶遇；遭遇",
    "en_def": "to meet someone or something without planning to",
    "sentence": "A: How did you get the chance to talk with the famous designer who spoke at the trade show last weekend? B: I happened to {{BLANK}} her in the hotel lobby while I was waiting for a taxi, so I introduced myself and we talked for almost twenty minutes about our new product line.",
    "cn": "A：你怎麼有機會和上週末在商展演講的那位知名設計師聊天？ B：我在等計程車時剛好在飯店大廳【偶遇】她，所以我自我介紹，然後我們聊了將近二十分鐘關於我們新產品線的事。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集",
    "en_def": "to come together in one place as a group",
    "sentence": "A: Where should the new employees wait on their first morning before the training session starts at nine o'clock? B: Please ask them to {{BLANK}} in the main lobby near the reception desk at half past eight, because someone from human resources will give them name badges and show them around the office.",
    "cn": "A：新進員工第一天早上在九點的培訓開始前應該在哪裡等？ B：請他們八點半在接待櫃檯附近的大廳【集合】，因為人資部的人會發給他們名牌並帶他們參觀辦公室。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "約會；預約",
    "en_def": "an arrangement to meet someone at a particular time",
    "sentence": "A: Could you tell Mr. Chen that I would like to talk with him about the new contract sometime this week? B: Of course, but his calendar is quite full, so I can make an {{BLANK}} for you on Wednesday at two o'clock, right after he returns from lunch with an important client.",
    "cn": "A：你可以告訴陳先生我這週想找時間跟他談談新合約嗎？ B：當然，不過他的行程滿滿的，所以我可以幫你安排週三兩點的【預約】，就在他和一位重要客戶午餐回來之後。"
  },
  {
    "word": "conference",
    "pos": "n.",
    "cn_def": "研討會；大型會議",
    "en_def": "a large formal meeting where many people discuss a subject, often for several days",
    "sentence": "A: Are you going to travel to Singapore next month with the rest of the marketing team? B: Yes, we are attending a three-day {{BLANK}} on digital advertising there, and I am really looking forward to hearing experts speak and meeting people from companies all over Asia.",
    "cn": "A：你下個月會和行銷團隊其他人一起去新加坡嗎？ B：會，我們要去參加一場為期三天的數位廣告【研討會】，我真的很期待聽專家演講，並認識來自亞洲各地公司的人。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試",
    "en_def": "a formal meeting where someone is asked questions to see if they are right for a job",
    "sentence": "A: You look a little nervous this morning, so is everything all right with your project? B: The project is fine, but I have a job {{BLANK}} with a large bank downtown at three o'clock, and I am worried that they will ask difficult questions about my experience with financial software.",
    "cn": "A：你今天早上看起來有點緊張，你的專案都還好嗎？ B：專案沒問題，但我三點要去市中心一家大銀行參加工作【面試】，我擔心他們會問一些關於我使用財務軟體經驗的困難問題。"
  },
  {
    "word": "date",
    "pos": "n.",
    "cn_def": "約會",
    "en_def": "a planned social meeting, often between two people who like each other",
    "sentence": "A: Why are you leaving the office so early today when we still have the monthly report to finish? B: I promised my wife that we would go on a dinner {{BLANK}} tonight because it is our anniversary, but I will come in early tomorrow morning to finish the report before our manager arrives.",
    "cn": "A：我們還有月報要完成，你今天為什麼這麼早離開辦公室？ B：我答應我太太今晚要去晚餐【約會】，因為今天是我們的結婚紀念日，不過我明天早上會提早進來，在經理到之前把報告完成。"
  },
  {
    "word": "reunion",
    "pos": "n.",
    "cn_def": "團聚；同學會",
    "en_def": "a meeting of people who have not seen each other for a long time",
    "sentence": "A: I heard that you flew back to your hometown last weekend even though you were very busy at work. B: Yes, my high school class held a ten-year {{BLANK}} at a restaurant near our old school, and it was wonderful to see classmates I had not talked to since we graduated.",
    "cn": "A：我聽說你上週末飛回家鄉了，雖然你工作很忙。 B：是啊，我的高中班級在我們母校附近的一家餐廳舉辦十週年【同學會】，能見到畢業後就沒聯絡的同學真的很棒。"
  },
  {
    "word": "introduction",
    "pos": "n.",
    "cn_def": "介紹",
    "en_def": "the act of telling people each other's names when they first meet",
    "sentence": "A: I would really like to talk with the director of that design company, but I have never spoken to her before. B: My manager knows her quite well from a previous job, so I will ask him to make an {{BLANK}} at the networking event on Friday evening so that you can explain your idea.",
    "cn": "A：我真的很想和那家設計公司的總監談談，但我以前從沒跟她說過話。 B：我的經理在之前的工作就跟她很熟，所以我會請他在週五晚上的交流活動上幫你做個【介紹】，讓你可以說明你的想法。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a conversation about a subject in which people share ideas",
    "sentence": "A: Did the team finally decide whether we should move the factory to a cheaper location next year? B: Not yet, because after a long {{BLANK}} that lasted almost two hours, several managers still wanted more information about the costs, so they will meet again next Tuesday to make a final decision.",
    "cn": "A：團隊最後決定明年是否要把工廠搬到成本更低的地點了嗎？ B：還沒，因為在將近兩小時的漫長【討論】後，幾位經理仍想要更多成本資訊，所以他們下週二會再開會做最後決定。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "對話；交談",
    "en_def": "an informal talk between two or more people",
    "sentence": "A: How did you find out that our biggest client is planning to open three new stores next year? B: I had a friendly {{BLANK}} with their purchasing manager during the coffee break at the trade fair, and she mentioned their expansion plans while we were talking about the weather and our families.",
    "cn": "A：你是怎麼知道我們最大的客戶明年計畫開三家新店的？ B：我在商展的咖啡休息時間和他們的採購經理有一段愉快的【交談】，我們聊天氣和家人時，她提到了他們的擴張計畫。"
  },
  {
    "word": "contact",
    "pos": "n.",
    "cn_def": "聯絡人；人脈",
    "en_def": "a person you know who can help you, especially in business",
    "sentence": "A: Do you know anyone who could help us find a reliable shipping company in Vietnam for our new products? B: I have a useful {{BLANK}} at a logistics firm in Ho Chi Minh City, so I will send her an email this afternoon and ask whether her company could handle our orders.",
    "cn": "A：你認識誰能幫我們為新產品在越南找到可靠的貨運公司嗎？ B：我在胡志明市一家物流公司有個很有用的【聯絡人】，所以我今天下午會寄電子郵件給她，問問她的公司能否處理我們的訂單。"
  },
  {
    "word": "visitor",
    "pos": "n.",
    "cn_def": "訪客",
    "en_def": "a person who comes to see a place or a person",
    "sentence": "A: Why is there a security guard standing at the front door of our building this morning? B: Every {{BLANK}} must now sign in at the front desk and wear a special badge, because the company wants to know exactly who is inside the building after some laptops went missing last month.",
    "cn": "A：今天早上為什麼有一位警衛站在我們大樓的前門？ B：現在每位【訪客】都必須在前台登記並配戴特別的識別證，因為上個月有幾台筆電不見了，公司想確切知道誰在大樓裡。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "客人；賓客",
    "en_def": "a person who is invited to an event or someone's home",
    "sentence": "A: How many people are coming to the company's anniversary dinner at the hotel next Saturday night? B: We have invited about two hundred people, and each {{BLANK}} will receive a small gift and a printed menu when they arrive, so I need to order everything from the supplier by Friday.",
    "cn": "A：下週六晚上在飯店舉行的公司週年晚宴會有多少人來？ B：我們邀請了大約兩百人，每位【賓客】抵達時都會收到一份小禮物和一份印好的菜單，所以我必須在週五前向供應商訂好所有東西。"
  },
  {
    "word": "host",
    "pos": "v.",
    "cn_def": "主辦；招待",
    "en_def": "to organize an event and welcome the people who come",
    "sentence": "A: Which city did the company choose for next year's international sales event, and why did it make that choice? B: Our Taipei office will {{BLANK}} the event in March, because the city is easy to reach by plane and our staff there have experience organizing large meetings for overseas visitors.",
    "cn": "A：公司為明年的國際業務活動選了哪個城市，為什麼做這個選擇？ B：我們的台北辦公室將在三月【主辦】這場活動，因為從各地搭飛機到台北很方便，而且那裡的員工有為海外訪客籌辦大型會議的經驗。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "出席；參加",
    "en_def": "to go to an event such as a meeting or class",
    "sentence": "A: Is it really necessary for everyone in our department to go to the safety training session tomorrow morning? B: Yes, every employee must {{BLANK}} the session at least once a year, and anyone who misses it will not be allowed to use the machines in the factory until they complete it.",
    "cn": "A：我們部門每個人真的都必須參加明天早上的安全訓練嗎？ B：是的，每位員工每年至少要【參加】一次，沒參加的人在完成訓練之前都不能使用工廠裡的機器。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排",
    "en_def": "to plan or organize something so it can happen",
    "sentence": "A: Our clients from Japan are arriving at the airport late on Sunday night, so how will they get to their hotel? B: I will {{BLANK}} a private car to pick them up and drive them downtown, because the trains stop running after midnight and taxis can be hard to find at that time.",
    "cn": "A：我們的日本客戶週日深夜才抵達機場，他們要怎麼到飯店？ B：我會【安排】一輛專車去接他們並送到市中心，因為午夜過後火車就停駛了，而且那時候很難叫到計程車。"
  },
  {
    "word": "schedule",
    "pos": "v.",
    "cn_def": "排定；安排時間",
    "en_def": "to plan something for a certain time",
    "sentence": "A: When will the team review the new website design with the client before it goes online? B: Let's {{BLANK}} a video call with them for next Monday morning, because they are in London and the time difference makes afternoon calls very difficult for both sides.",
    "cn": "A：團隊什麼時候要在新網站上線前和客戶一起檢視設計？ B：我們把和他們的視訊通話【排定】在下週一早上吧，因為他們在倫敦，時差讓下午的通話對雙方來說都很困難。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone to come to an event",
    "sentence": "A: The new branch opens next month, so how can we make sure that local business owners hear about it? B: We should {{BLANK}} them to a small opening party with free snacks and drinks, because meeting them in person will help us build good relationships in the neighborhood.",
    "cn": "A：新分店下個月開幕，我們要怎麼確保當地商家知道這件事？ B：我們應該【邀請】他們參加一個有免費點心和飲料的小型開幕派對，因為親自和他們見面能幫助我們在這個社區建立良好關係。"
  },
  {
    "word": "join",
    "pos": "v.",
    "cn_def": "加入；與……會合",
    "en_def": "to go somewhere to be with other people",
    "sentence": "A: We are going to the new Thai restaurant across the street for lunch, so would you like to come with us? B: I would love to {{BLANK}} you, but I need to finish this sales report first, so please go ahead and I will meet you there in about fifteen minutes.",
    "cn": "A：我們要去對街那家新開的泰式餐廳吃午餐，你要一起來嗎？ B：我很想【加入】你們，但我得先完成這份業務報告，所以你們先去，我大約十五分鐘後跟你們在那裡會合。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹",
    "en_def": "to tell people each other's names when they meet for the first time",
    "sentence": "A: The new accountant starts work today, but I don't think anyone in the office has met her yet. B: I will {{BLANK}} her to the whole team at our morning meeting, and then I will ask Kevin to show her where everything is and explain how our filing system works.",
    "cn": "A：新會計今天開始上班，但我想辦公室裡還沒人見過她。 B：我會在早上的會議中把她【介紹】給整個團隊，然後請凱文帶她看看各樣東西放在哪裡，並說明我們的歸檔系統如何運作。"
  },
  {
    "word": "greet",
    "pos": "v.",
    "cn_def": "迎接；打招呼",
    "en_def": "to say hello to someone when you meet them",
    "sentence": "A: What should I do when the visitors from our partner company arrive at the front entrance this afternoon? B: Please {{BLANK}} them warmly, offer them something to drink, and take them up to the meeting room on the fifth floor, where the director will be waiting with the presentation.",
    "cn": "A：今天下午合作公司的訪客抵達大門口時，我該做什麼？ B：請熱情地【迎接】他們，請他們喝點東西，然後帶他們上五樓的會議室，總監會在那裡準備好簡報等著。"
  },
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "聊天",
    "en_def": "to talk in a friendly, informal way",
    "sentence": "A: I noticed that you and the new manager were laughing together in the kitchen this morning, so is she nice? B: Yes, we stopped to {{BLANK}} over coffee for a few minutes, and she told me that she used to work in Tokyo and loves hiking on weekends.",
    "cn": "A：我注意到你和新經理今天早上在茶水間一起笑，她人好嗎？ B：是啊，我們停下來邊喝咖啡邊【聊天】了幾分鐘，她跟我說她以前在東京工作，週末很喜歡去健行。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with other people",
    "sentence": "A: The customers have complained a lot about our slow delivery times, so what are we going to do about it? B: The managers will {{BLANK}} the problem at tomorrow's meeting, and they hope to find a better shipping company before the busy season starts next month.",
    "cn": "A：顧客對我們送貨太慢抱怨很多，我們打算怎麼處理？ B：經理們會在明天的會議上【討論】這個問題，他們希望在下個月旺季開始前找到更好的貨運公司。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "following official rules and polite behavior; serious, not relaxed",
    "sentence": "A: What should I wear to the awards dinner that the company is holding at the Grand Hotel next week? B: It is a {{BLANK}} event with important guests and government officials, so men should wear a dark suit and tie, and women should wear an evening dress or a business suit.",
    "cn": "A：公司下週在大飯店舉辦的頒獎晚宴我該穿什麼？ B：那是一場有重要賓客和政府官員出席的【正式】活動，所以男士應該穿深色西裝打領帶，女士則應穿晚禮服或套裝。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的",
    "en_def": "relaxed and friendly, not following strict rules",
    "sentence": "A: Do I need to prepare slides for the meeting with the design team on Friday afternoon? B: No, it is just an {{BLANK}} get-together over coffee, so you can simply bring your notebook and share a few ideas about the new logo without worrying about a long presentation.",
    "cn": "A：週五下午和設計團隊的會議我需要準備投影片嗎？ B：不用，那只是一場喝咖啡的【非正式】聚會，所以你只要帶筆記本，分享幾個關於新標誌的想法就好，不用擔心要做長篇簡報。"
  },
  {
    "word": "social",
    "pos": "adj.",
    "cn_def": "社交的",
    "en_def": "relating to activities where people meet and spend time together for fun",
    "sentence": "A: Besides work, what kinds of activities does your company offer to help new employees make friends? B: We have many {{BLANK}} events, such as monthly dinners, weekend hiking trips, and a bowling night, so people from different departments can get to know each other outside the office.",
    "cn": "A：除了工作以外，你們公司提供哪些活動幫助新員工交朋友？ B：我們有很多【社交】活動，例如每月聚餐、週末健行和保齡球之夜，讓不同部門的人可以在辦公室外互相認識。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "relating to a job that needs special training or skill; behaving in a correct business way",
    "sentence": "A: How can young employees like me meet more experienced people working in the finance industry? B: You should join a {{BLANK}} association for accountants, because they hold regular workshops and networking evenings where members share advice and sometimes learn about new job openings.",
    "cn": "A：像我這樣的年輕員工要怎麼認識更多在金融業工作的資深人士？ B：你應該加入會計師的【專業】協會，因為他們定期舉辦工作坊和交流晚會，會員會在那裡分享建議，有時還能得知新的職缺。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and pleasant to other people",
    "sentence": "A: What did the customers say about our new hotel in the survey we sent out last month? B: Most of them said the rooms were clean and comfortable, and many guests mentioned that the staff at the front desk were very {{BLANK}} and always ready to help with directions.",
    "cn": "A：上個月我們寄出的問卷中，顧客對我們的新飯店怎麼說？ B：大多數人說房間乾淨又舒適，很多房客還提到櫃檯人員非常【友善】，隨時樂意幫忙指路。"
  },
  {
    "word": "brief",
    "pos": "adj.",
    "cn_def": "簡短的",
    "en_def": "lasting only a short time",
    "sentence": "A: I know you are busy preparing for the trade show, but do you have time to talk about the budget? B: I can only have a {{BLANK}} meeting with you this afternoon, maybe ten minutes, because I still need to pack the samples and print the brochures before the truck arrives at five.",
    "cn": "A：我知道你正忙著準備商展，但你有空談談預算嗎？ B：我今天下午只能和你開個【簡短的】會議，大概十分鐘，因為我還要在五點貨車到之前打包樣品並印好手冊。"
  },
  {
    "word": "face-to-face",
    "pos": "adj.",
    "cn_def": "面對面的",
    "en_def": "happening with people together in the same place, not by phone or online",
    "sentence": "A: We have talked with the new supplier by email for months, so why are you flying to Korea to see them? B: I think a {{BLANK}} meeting will help us build trust much faster, because it is easier to understand each other and solve problems when we can actually sit at the same table.",
    "cn": "A：我們已經和新供應商透過電子郵件聯繫好幾個月了，你為什麼還要飛去韓國見他們？ B：我認為【面對面的】會議能幫助我們更快建立信任，因為能真正坐在同一張桌子旁時，更容易互相理解並解決問題。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地",
    "en_def": "often, at the same times each week, month, etc.",
    "sentence": "A: How do you keep in touch with all of your team members when half of them work from home? B: We meet {{BLANK}} on video calls every Monday and Thursday morning, and once a month everyone comes into the office so that we can have lunch together and talk about our progress.",
    "cn": "A：你的團隊成員有一半在家工作，你怎麼和大家保持聯繫？ B：我們每週一和週四早上【定期】開視訊會議，而且每個月大家會進辦公室一次，一起吃午餐並討論進度。"
  },
  {
    "word": "personally",
    "pos": "adv.",
    "cn_def": "親自地",
    "en_def": "by yourself, not by sending someone else",
    "sentence": "A: Should I send one of our assistants to the airport to pick up our most important client tomorrow? B: No, I would like to meet her {{BLANK}}, because she has been buying from us for ten years and I want to show her how much we value her business.",
    "cn": "A：我明天要派一位助理去機場接我們最重要的客戶嗎？ B：不用，我想【親自】去接她，因為她已經向我們採購十年了，我想讓她知道我們有多重視她的生意。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起",
    "en_def": "with each other; in a group",
    "sentence": "A: The accounting team and the sales team keep sending each other angry emails about the numbers, so what should we do? B: I think we should bring both teams {{BLANK}} in one room for an hour, so that they can compare their figures and understand where the mistakes came from.",
    "cn": "A：會計團隊和業務團隊一直為了數字互寄生氣的電子郵件，我們該怎麼辦？ B：我覺得我們應該把兩個團隊【一起】找到同一間房間開一小時的會，讓他們比對數字，並了解錯誤是從哪裡來的。"
  },
  {
    "word": "finally",
    "pos": "adv.",
    "cn_def": "終於",
    "en_def": "after a long time or after a lot of waiting",
    "sentence": "A: Have you had a chance to meet the new regional director who was supposed to visit our branch last month? B: Yes, after her trip was canceled twice because of bad weather, she {{BLANK}} arrived yesterday, and she spent the whole afternoon talking with each of us about our goals.",
    "cn": "A：你有機會見到上個月原本要來我們分行的新區域總監嗎？ B：有，她的行程因為天氣不好被取消了兩次之後，昨天【終於】到了，而且她花了整個下午和我們每個人談我們的目標。"
  }
];

const MCQS = [
  {
    "q": "The quarterly sales _____ has been moved to Room 402 on Friday. All department heads are expected to bring updated figures.",
    "options": [
      "meeting",
      "menu",
      "receipt",
      "shelf"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Travelers may _____ heavy traffic near the airport during the holiday weekend. Please allow extra time to reach your gate.",
    "options": [
      "refund",
      "encounter",
      "install",
      "deliver"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "All tour participants should _____ at the hotel entrance at 8:00 a.m. The bus to the factory will leave promptly.",
    "options": [
      "divide",
      "print",
      "gather",
      "repair"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Patients who cannot keep their _____ are asked to call the clinic at least 24 hours in advance. A fee may otherwise apply.",
    "options": [
      "invoice",
      "warranty",
      "discount",
      "appointment"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "More than 500 engineers registered for the annual technology _____ in Kaohsiung. The event will include workshops, keynote speeches, and a product exhibition.",
    "options": [
      "receipt",
      "conference",
      "coupon",
      "drawer"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Ms. Lin has been invited to a second _____ for the marketing position. The hiring manager was impressed by her portfolio.",
    "options": [
      "interview",
      "delivery",
      "refund",
      "shipment"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company is planning a _____ for retired employees next spring. Former staff will tour the new factory and enjoy lunch together.",
    "options": [
      "refund",
      "outlet",
      "budget",
      "reunion"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "After a short _____ by the host, the guest speaker began her talk on online marketing. The audience listened with great interest.",
    "options": [
      "inventory",
      "shipment",
      "introduction",
      "deduction"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The proposal to extend store hours is still under _____ by the board. A final decision is expected by the end of the month.",
    "options": [
      "discussion",
      "warehouse",
      "signature",
      "purchase"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Sales staff are trained to start a friendly _____ with every customer who enters the shop. This helps them understand what shoppers need.",
    "options": [
      "construction",
      "conversation",
      "inspection",
      "subscription"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Mr. Patel is our main _____ at the supplier's head office. Please send all questions about orders directly to him.",
    "options": [
      "deposit",
      "ticket",
      "contact",
      "package"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Every _____ to the laboratory must wear safety glasses at all times. Badges can be collected from the security desk.",
    "options": [
      "engine",
      "factory",
      "document",
      "visitor"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Each hotel _____ receives a free breakfast voucher at check-in. The restaurant on the second floor opens at 6:30 a.m.",
    "options": [
      "product",
      "guest",
      "ingredient",
      "vehicle"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Our Taichung branch will _____ this year's regional sales awards. Staff from all five offices are expected to attend.",
    "options": [
      "host",
      "repair",
      "borrow",
      "ship"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Employees who wish to _____ the leadership workshop must register by Friday. Space is limited to thirty participants.",
    "options": [
      "deliver",
      "print",
      "rent",
      "attend"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Ms. Wu will _____ transportation for the visiting clients during their stay. She has already booked a car service for three days.",
    "options": [
      "borrow",
      "repair",
      "arrange",
      "fold"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Please _____ the product demonstration for a time when the director is available. She would like to see the new features in person.",
    "options": [
      "schedule",
      "purchase",
      "calculate",
      "wrap"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The museum plans to _____ local business leaders to the opening of its new gallery. Printed cards will be mailed next week.",
    "options": [
      "charge",
      "invite",
      "weigh",
      "store"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "New members are welcome to _____ the hiking club on its monthly trips. Information is available on the staff notice board.",
    "options": [
      "lend",
      "pack",
      "join",
      "rent"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "At the start of the workshop, each participant was asked to _____ himself or herself to the group. This helped everyone feel more comfortable.",
    "options": [
      "deliver",
      "invest",
      "measure",
      "introduce"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Front desk staff should stand up and _____ every guest who walks into the lobby. A warm welcome creates a good first impression.",
    "options": [
      "charge",
      "greet",
      "polish",
      "sort"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The managers met yesterday to _____ ways to reduce energy costs at the factory. Several practical ideas were suggested.",
    "options": [
      "discuss",
      "ship",
      "install",
      "paint"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Applicants will receive a _____ job offer by email after the reference checks are complete. The offer will include salary details.",
    "options": [
      "empty",
      "hungry",
      "broken",
      "formal"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new manager held an _____ lunch to get to know her team. Everyone was encouraged to share ideas freely.",
    "options": [
      "expensive",
      "damaged",
      "informal",
      "frozen"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The company organizes several _____ events each year, including a summer picnic and a year-end party. Attendance is optional but encouraged.",
    "options": [
      "social",
      "chemical",
      "electric",
      "financial"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "All consultants are expected to maintain a _____ appearance when meeting clients. Business attire is required during office hours.",
    "options": [
      "delicious",
      "professional",
      "wooden",
      "noisy"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Customers often praise our shop for its _____ staff and fast service. Many of them return again and again.",
    "options": [
      "broken",
      "empty",
      "friendly",
      "heavy"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The director gave a _____ speech before the ribbon-cutting ceremony. She thanked the workers who helped build the new store.",
    "options": [
      "heavy",
      "empty",
      "wooden",
      "brief"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Although most training is now online, new managers still complete one _____ session at headquarters. This allows them to meet senior leaders.",
    "options": [
      "waterproof",
      "face-to-face",
      "full-time",
      "second-hand"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The CEO will _____ welcome the overseas partners at the airport on Monday. She wants to show how much the company values the relationship.",
    "options": [
      "personally",
      "loudly",
      "rarely",
      "partly"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "meeting": {
    "pos": "n.",
    "en_def": "a time when people come together to talk about something",
    "cn_def": "會議"
  },
  "encounter": {
    "pos": "v.",
    "en_def": "to meet someone or something without planning to",
    "cn_def": "偶遇；遭遇"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in one place as a group",
    "cn_def": "聚集"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arrangement to meet someone at a particular time",
    "cn_def": "約會；預約"
  },
  "conference": {
    "pos": "n.",
    "en_def": "a large formal meeting where many people discuss a subject, often for several days",
    "cn_def": "研討會；大型會議"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a formal meeting where someone is asked questions to see if they are right for a job",
    "cn_def": "面試"
  },
  "date": {
    "pos": "n.",
    "en_def": "a planned social meeting, often between two people who like each other",
    "cn_def": "約會"
  },
  "reunion": {
    "pos": "n.",
    "en_def": "a meeting of people who have not seen each other for a long time",
    "cn_def": "團聚；同學會"
  },
  "introduction": {
    "pos": "n.",
    "en_def": "the act of telling people each other's names when they first meet",
    "cn_def": "介紹"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a conversation about a subject in which people share ideas",
    "cn_def": "討論"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "an informal talk between two or more people",
    "cn_def": "對話；交談"
  },
  "contact": {
    "pos": "n.",
    "en_def": "a person you know who can help you, especially in business",
    "cn_def": "聯絡人；人脈"
  },
  "visitor": {
    "pos": "n.",
    "en_def": "a person who comes to see a place or a person",
    "cn_def": "訪客"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person who is invited to an event or someone's home",
    "cn_def": "客人；賓客"
  },
  "host": {
    "pos": "v.",
    "en_def": "to organize an event and welcome the people who come",
    "cn_def": "主辦；招待"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event such as a meeting or class",
    "cn_def": "出席；參加"
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to plan or organize something so it can happen",
    "cn_def": "安排"
  },
  "schedule": {
    "pos": "v.",
    "en_def": "to plan something for a certain time",
    "cn_def": "排定；安排時間"
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone to come to an event",
    "cn_def": "邀請"
  },
  "join": {
    "pos": "v.",
    "en_def": "to go somewhere to be with other people",
    "cn_def": "加入；與……會合"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to tell people each other's names when they meet for the first time",
    "cn_def": "介紹"
  },
  "greet": {
    "pos": "v.",
    "en_def": "to say hello to someone when you meet them",
    "cn_def": "迎接；打招呼"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "聊天"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "following official rules and polite behavior; serious, not relaxed",
    "cn_def": "正式的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly, not following strict rules",
    "cn_def": "非正式的"
  },
  "social": {
    "pos": "adj.",
    "en_def": "relating to activities where people meet and spend time together for fun",
    "cn_def": "社交的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "relating to a job that needs special training or skill; behaving in a correct business way",
    "cn_def": "專業的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and pleasant to other people",
    "cn_def": "友善的"
  },
  "brief": {
    "pos": "adj.",
    "en_def": "lasting only a short time",
    "cn_def": "簡短的"
  },
  "face-to-face": {
    "pos": "adj.",
    "en_def": "happening with people together in the same place, not by phone or online",
    "cn_def": "面對面的"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, at the same times each week, month, etc.",
    "cn_def": "定期地"
  },
  "personally": {
    "pos": "adv.",
    "en_def": "by yourself, not by sending someone else",
    "cn_def": "親自地"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other; in a group",
    "cn_def": "一起"
  },
  "finally": {
    "pos": "adv.",
    "en_def": "after a long time or after a lot of waiting",
    "cn_def": "終於"
  }
};

const EXTRA_GLOSSES = {};
