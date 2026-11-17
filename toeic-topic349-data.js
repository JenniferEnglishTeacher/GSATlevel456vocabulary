// Topic 349 Quiz Data: Sharing 分享
// Source word list: https://www.examword.com/group-topic/sharing — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T349 - Sharing 分享",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "long-lasting",
    "pos": "adj.",
    "cn_def": "長久的；持久的",
    "en_def": "continuing for a long time",
    "sentence": "A: Why did the HR department decide to start a mentoring program where senior staff share their experience with new employees every Friday afternoon? B: They believe that sharing knowledge in small groups builds trust, and they hope it will create {{BLANK}} friendships that keep good workers at the company for years.",
    "cn": "A：人資部門為什麼決定開始一個導師計畫，讓資深員工每週五下午和新員工分享經驗？ B：他們相信在小組中分享知識能建立信任，也希望這能創造【長久的】友誼，讓優秀員工在公司待上好幾年。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響；衝擊",
    "en_def": "a strong effect on someone or something",
    "sentence": "A: Did sharing the monthly sales figures with the whole team at the Monday meeting actually make any difference to how hard people worked? B: Yes, it had a huge {{BLANK}} on everyone, because once the staff could see the numbers clearly, they started helping each other reach the target before the deadline.",
    "cn": "A：在週一會議上和整個團隊分享每月銷售數字，真的讓大家的工作態度有所不同嗎？ B：有，這對每個人都產生了很大的【影響】，因為員工一清楚看到數字，就開始互相幫忙，在期限前達成目標。"
  },
  {
    "word": "petty",
    "pos": "adj.",
    "cn_def": "瑣碎的；小氣的",
    "en_def": "small and not important; unkind about small things",
    "sentence": "A: Why are Tom and Lisa still arguing about who should pay for the shared printer paper in their small office downstairs? B: It is a really {{BLANK}} argument about only a few dollars, but neither of them wants to give in, so the manager has asked them to split the cost equally from now on.",
    "cn": "A：為什麼湯姆和麗莎還在為樓下小辦公室共用印表機紙該由誰付錢而爭吵？ B：這真的是只為了幾塊錢的【瑣碎的】爭執，但兩人都不肯讓步，所以經理要求他們從現在起平均分攤費用。"
  },
  {
    "word": "fulfilled",
    "pos": "adj.",
    "cn_def": "有成就感的；滿足的",
    "en_def": "happy and satisfied with what you do",
    "sentence": "A: How did you feel after spending the whole weekend sharing meals and teaching English with the volunteers at the community center? B: I felt really {{BLANK}}, because the children were so happy to learn, and it reminded me that helping others matters more than working overtime at the office.",
    "cn": "A：整個週末在社區中心和志工們一起分享餐點、教英文之後，你感覺如何？ B：我覺得非常【有成就感】，因為孩子們學得好開心，這提醒了我幫助別人比在辦公室加班更重要。"
  },
  {
    "word": "exemplary",
    "pos": "adj.",
    "cn_def": "模範的；可作榜樣的",
    "en_def": "so good that others should copy it",
    "sentence": "A: Why did the director give Ms. Chen the employee of the year award at the company dinner last night? B: Her {{BLANK}} behavior impressed everyone, because she always shares her notes with new colleagues, finishes her projects early, and stays calm even when customers are angry.",
    "cn": "A：昨晚公司晚宴上，主任為什麼頒年度最佳員工獎給陳小姐？ B：她【模範的】表現讓大家印象深刻，因為她總是和新同事分享筆記、提早完成專案，而且即使顧客生氣也能保持冷靜。"
  },
  {
    "word": "endearing",
    "pos": "adj.",
    "cn_def": "討人喜歡的；惹人憐愛的",
    "en_def": "making people like you",
    "sentence": "A: What do the customers like most about the new coffee shop that opened next to our office building last month? B: The owner has an {{BLANK}} habit of sharing free cookies with regular customers on rainy days, so many office workers now go there every morning before work.",
    "cn": "A：上個月在我們辦公大樓旁開的新咖啡店，顧客最喜歡它哪一點？ B：老闆有個【討人喜歡的】習慣，雨天時會和常客分享免費餅乾，所以現在很多上班族每天早上上班前都會去那裡。"
  },
  {
    "word": "terrible",
    "pos": "adj.",
    "cn_def": "糟糕的；可怕的",
    "en_def": "very bad",
    "sentence": "A: Why did the team decide to stop using that shared online calendar after only two weeks of testing it? B: It was a {{BLANK}} system, because it kept deleting meetings without warning, and three clients waited in the lobby for over an hour while nobody came to meet them.",
    "cn": "A：為什麼團隊試用了兩週後就決定停用那個共享的線上行事曆？ B：那是個很【糟糕的】系統，因為它經常無預警地刪除會議，有三位客戶在大廳等了一個多小時都沒人去接待他們。"
  },
  {
    "word": "miss",
    "pos": "v.",
    "cn_def": "想念；錯過",
    "en_def": "to feel sad because someone or something is not there",
    "sentence": "A: Now that you have moved to the Tokyo branch, what do you think about most when you remember your old team in Taipei? B: I really {{BLANK}} the lunches we used to share every Friday, when everyone brought a different dish and we talked about our weekend plans together in the meeting room.",
    "cn": "A：既然你已經調到東京分公司，回想起台北的老團隊時，你最常想到什麼？ B：我真的很【想念】以前每週五大家一起分享的午餐，那時每個人都帶一道不同的菜，我們會在會議室裡一起聊週末計畫。"
  },
  {
    "word": "oblige",
    "pos": "v.",
    "cn_def": "迫使；使有義務",
    "en_def": "to make someone do something because of a rule or law",
    "sentence": "A: Why do all of us suddenly have to share the meeting rooms through the new booking app instead of just walking in? B: The new office policy will {{BLANK}} every department to reserve rooms one day in advance, because too many teams were arriving at the same time and arguing over space.",
    "cn": "A：為什麼我們突然都得透過新的預約程式來共用會議室，而不能直接走進去使用？ B：新的辦公室政策將【迫使】每個部門提前一天預約會議室，因為之前太多團隊同時到場，為了空間而爭吵。"
  },
  {
    "word": "toiletries",
    "pos": "n.",
    "cn_def": "盥洗用品",
    "en_def": "things you use to wash and clean yourself, like soap and toothpaste",
    "sentence": "A: What should I pack for the three-day training trip, since I heard we will be sharing hotel rooms with colleagues from other branches? B: Bring your own {{BLANK}} such as toothpaste, shampoo, and soap, because the hotel only provides small bottles and it is polite not to use your roommate's things.",
    "cn": "A：三天的培訓行程我該帶什麼？我聽說我們要和其他分公司的同事合住飯店房間。 B：帶你自己的【盥洗用品】，像是牙膏、洗髮精和肥皂，因為飯店只提供小瓶裝，而且不用室友的東西是一種禮貌。"
  },
  {
    "word": "cutlery",
    "pos": "n.",
    "cn_def": "餐具（刀、叉、湯匙）",
    "en_def": "knives, forks, and spoons used for eating",
    "sentence": "A: Why is there a new sign above the sink in the shared staff kitchen on the third floor? B: Some people kept leaving dirty {{BLANK}} like forks, knives, and spoons in the sink for days, so the office manager now asks everyone to wash their own things right after lunch.",
    "cn": "A：為什麼三樓共用員工廚房的水槽上方多了一個新告示？ B：有些人一直把用過的【餐具】，像是叉子、刀子和湯匙留在水槽裡好幾天，所以辦公室經理現在要求大家午餐後立刻洗好自己的東西。"
  },
  {
    "word": "confidential",
    "pos": "adj.",
    "cn_def": "機密的",
    "en_def": "secret; not to be told to other people",
    "sentence": "A: Can I share the new product designs with my friend who works at an advertising agency, since she might have some good ideas? B: No, those documents are strictly {{BLANK}} until the official launch next month, and anyone who shows them to people outside the company could lose their job.",
    "cn": "A：我可以和在廣告公司工作的朋友分享新產品設計嗎？她可能會有些好點子。 B：不行，那些文件在下個月正式上市前都是嚴格【機密的】，任何把它們給公司外部人士看的人都可能丟掉工作。"
  },
  {
    "word": "no-no",
    "pos": "n.",
    "cn_def": "禁忌；不該做的事",
    "en_def": "something that you should not do",
    "sentence": "A: Is it all right to share photos of our clients' offices on social media after we finish a design project for them? B: That is a big {{BLANK}} in our industry, because clients expect privacy, so you must always get written permission from them before posting any pictures online.",
    "cn": "A：我們幫客戶完成設計案後，在社群媒體上分享客戶辦公室的照片可以嗎？ B：那在我們這行是一大【禁忌】，因為客戶期望隱私，所以在網路上發布任何照片前，一定要先取得他們的書面許可。"
  }
];

const MCQS = [
  {
    "q": "Our company uses high-quality materials in every product. Customers choose our office chairs because they are strong and _____.",
    "options": [
      "long-lasting",
      "petty",
      "terrible",
      "endearing"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The training workshop was short but very useful. It had a _____ effect on how our sales team speaks with customers.",
    "options": [
      "confidential",
      "petty",
      "long-lasting",
      "fulfilled"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Good managers try to build trust with their partners over many years. Their goal is a _____ relationship that benefits both companies.",
    "options": [
      "petty",
      "long-lasting",
      "terrible",
      "fulfilled"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The new parking fee has caused many complaints. It has had a serious _____ on the number of shoppers visiting the mall.",
    "options": [
      "cutlery",
      "no-no",
      "toiletries",
      "impact"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Experts studied how working from home affects employees. They found that it has a positive _____ on job satisfaction and productivity.",
    "options": [
      "toiletries",
      "cutlery",
      "impact",
      "no-no"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The manager wants to measure the _____ of the new advertising campaign. She will compare sales figures from before and after the launch.",
    "options": [
      "impact",
      "no-no",
      "cutlery",
      "toiletries"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Please do not waste the meeting time on _____ complaints about coffee cups. We need to focus on the budget for next year.",
    "options": [
      "exemplary",
      "long-lasting",
      "fulfilled",
      "petty"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The two supervisors stopped speaking to each other over a _____ disagreement. The director finally asked them to settle it calmly.",
    "options": [
      "endearing",
      "petty",
      "exemplary",
      "fulfilled"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "After many years of hard work, David finally opened his own bakery. He says he has never felt more _____ in his life.",
    "options": [
      "fulfilled",
      "petty",
      "confidential",
      "long-lasting"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Volunteering at the hospital every weekend makes Sarah very happy. She feels _____ because she can help patients and their families.",
    "options": [
      "terrible",
      "confidential",
      "fulfilled",
      "petty"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The hotel received an award for its _____ service last year. Guests praised the staff for being polite, fast, and helpful.",
    "options": [
      "petty",
      "exemplary",
      "terrible",
      "confidential"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Jenny has never been late in ten years at the firm. Her _____ attendance record was mentioned in the annual report.",
    "options": [
      "endearing",
      "petty",
      "terrible",
      "exemplary"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The principal praised the student volunteers for their _____ conduct during the conference. They helped guests and kept every room tidy.",
    "options": [
      "petty",
      "terrible",
      "exemplary",
      "confidential"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new receptionist has a truly _____ way of greeting visitors by name. Everyone who comes to the office remembers her warm welcome.",
    "options": [
      "endearing",
      "petty",
      "confidential",
      "terrible"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Customers find the shop owner's old dog quite _____. It sleeps by the door and wags its tail at every visitor.",
    "options": [
      "confidential",
      "petty",
      "exemplary",
      "endearing"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The storm caused _____ damage to the warehouse roof last night. Workers will need at least two weeks to repair it.",
    "options": [
      "endearing",
      "terrible",
      "fulfilled",
      "exemplary"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The traffic on the highway was _____ this morning. As a result, half of the staff arrived late for the important meeting.",
    "options": [
      "terrible",
      "endearing",
      "exemplary",
      "fulfilled"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Many employees say they _____ the old cafeteria after it closed. The food was cheap, and it was a great place to chat.",
    "options": [
      "oblige",
      "borrow",
      "miss",
      "lend"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "If you leave the office after five, you will _____ the last shuttle bus. Please plan your schedule carefully on Fridays.",
    "options": [
      "oblige",
      "miss",
      "deliver",
      "invite"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The contract will _____ the supplier to deliver all goods by the end of March. Late deliveries will result in a financial penalty.",
    "options": [
      "miss",
      "suggest",
      "insist",
      "oblige"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Safety laws _____ all factories to provide helmets for their workers. Inspectors visit regularly to check that the rules are followed.",
    "options": [
      "miss",
      "insist",
      "oblige",
      "explain"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The hotel provides free _____ in every room, including shampoo and soap. Guests can ask the front desk for extra towels.",
    "options": [
      "toiletries",
      "cutlery",
      "impact",
      "no-no"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Passengers may carry small bottles of _____ in their hand luggage. Each bottle must hold no more than 100 milliliters of liquid.",
    "options": [
      "cutlery",
      "impact",
      "no-no",
      "toiletries"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The caterer forgot to bring plates and _____ to the company picnic. Guests had to eat their sandwiches with their hands.",
    "options": [
      "toiletries",
      "cutlery",
      "impact",
      "no-no"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Staff should put used _____ into the gray box next to the sink. The cleaners will wash the forks and spoons every afternoon.",
    "options": [
      "cutlery",
      "toiletries",
      "impact",
      "no-no"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Salary details are _____ and should never be discussed with other employees. Only the HR manager may view these records.",
    "options": [
      "endearing",
      "fulfilled",
      "confidential",
      "long-lasting"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The lawyer asked us to keep the merger plans strictly _____. Nobody outside the board should know about them until June.",
    "options": [
      "endearing",
      "confidential",
      "petty",
      "exemplary"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "All job applications are treated as _____ by our recruiting team. Personal details are never shared with other companies.",
    "options": [
      "terrible",
      "endearing",
      "petty",
      "confidential"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Using your phone during a client presentation is a real _____. It makes the speaker feel that you are not listening.",
    "options": [
      "cutlery",
      "toiletries",
      "no-no",
      "impact"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "In many Asian countries, sticking chopsticks upright in rice is a _____. Visitors should learn local table manners before business dinners.",
    "options": [
      "no-no",
      "impact",
      "toiletries",
      "cutlery"
    ],
    "answer": 0,
    "vocabIndex": 12
  }
];

const LOOKUP = {
  "long-lasting": {
    "pos": "adj.",
    "en_def": "continuing for a long time",
    "cn_def": "長久的；持久的"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on someone or something",
    "cn_def": "影響；衝擊"
  },
  "petty": {
    "pos": "adj.",
    "en_def": "small and not important; unkind about small things",
    "cn_def": "瑣碎的；小氣的"
  },
  "fulfilled": {
    "pos": "adj.",
    "en_def": "happy and satisfied with what you do",
    "cn_def": "有成就感的；滿足的"
  },
  "exemplary": {
    "pos": "adj.",
    "en_def": "so good that others should copy it",
    "cn_def": "模範的；可作榜樣的"
  },
  "endearing": {
    "pos": "adj.",
    "en_def": "making people like you",
    "cn_def": "討人喜歡的；惹人憐愛的"
  },
  "terrible": {
    "pos": "adj.",
    "en_def": "very bad",
    "cn_def": "糟糕的；可怕的"
  },
  "miss": {
    "pos": "v.",
    "en_def": "to feel sad because someone or something is not there",
    "cn_def": "想念；錯過"
  },
  "oblige": {
    "pos": "v.",
    "en_def": "to make someone do something because of a rule or law",
    "cn_def": "迫使；使有義務"
  },
  "toiletries": {
    "pos": "n.",
    "en_def": "things you use to wash and clean yourself, like soap and toothpaste",
    "cn_def": "盥洗用品"
  },
  "cutlery": {
    "pos": "n.",
    "en_def": "knives, forks, and spoons used for eating",
    "cn_def": "餐具（刀、叉、湯匙）"
  },
  "confidential": {
    "pos": "adj.",
    "en_def": "secret; not to be told to other people",
    "cn_def": "機密的"
  },
  "no-no": {
    "pos": "n.",
    "en_def": "something that you should not do",
    "cn_def": "禁忌；不該做的事"
  }
};

const EXTRA_GLOSSES = {};
