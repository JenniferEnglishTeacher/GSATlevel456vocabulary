// Topic 287 Quiz Data: Plan 計畫
// Source word list: https://www.examword.com/group-topic/plan — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T287 - Plan 計畫",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: Could you tell me when the new sales staff will start their training, and whether the meeting room on the third floor is free next week? B: I just checked the {{BLANK}}, and the training begins on Monday at nine, so the room is booked for them all morning before the managers use it in the afternoon.",
    "cn": "A：你可以告訴我新進業務人員什麼時候開始受訓，以及三樓的會議室下週是否有空嗎？ B：我剛查看了【時間表】，訓練星期一早上九點開始，所以整個上午會議室都被他們預訂了，下午再由經理們使用。"
  },
  {
    "word": "allocate",
    "pos": "v.",
    "cn_def": "分配；撥出",
    "en_def": "to give a part of money, time or space for a special purpose",
    "sentence": "A: The marketing team says they need more money for online ads this year, but our total budget has not increased at all, so what should we do? B: Let's {{BLANK}} part of the printing budget to digital advertising, because fewer customers read paper brochures and most of them now shop on their phones.",
    "cn": "A：行銷團隊說他們今年需要更多經費做網路廣告，但我們的總預算完全沒有增加，我們該怎麼辦？ B：我們把一部分印刷預算【撥給】數位廣告吧，因為閱讀紙本手冊的顧客越來越少，而且大多數人現在都用手機購物。"
  },
  {
    "word": "overestimate",
    "pos": "v.",
    "cn_def": "高估",
    "en_def": "to think something is bigger, better or more than it really is",
    "sentence": "A: Why did the team need three extra weeks to finish the website, even though everyone worked late almost every night? B: I think we tend to {{BLANK}} how much work we can do in a short time, so next time we should plan more carefully and leave extra days for unexpected problems.",
    "cn": "A：為什麼團隊需要多花三週才完成網站，即使大家幾乎每晚都加班到很晚？ B：我想我們常常【高估】自己在短時間內能完成的工作量，所以下次我們應該更仔細地規劃，並為意外的問題多留幾天。"
  },
  {
    "word": "accomplish",
    "pos": "v.",
    "cn_def": "完成；達成",
    "en_def": "to succeed in doing something",
    "sentence": "A: Our department has only two months left before the end of the year, and we still haven't opened the new branch office downtown. B: If we hire a local contractor this week and hold weekly meetings with the landlord, I believe we can still {{BLANK}} this goal before the holidays begin.",
    "cn": "A：我們部門距離年底只剩兩個月，而市中心的新分公司還沒開幕。 B：如果我們這週僱用一家當地的承包商，並每週和房東開會，我相信我們仍然可以在假期開始前【達成】這個目標。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；有生產力的",
    "en_def": "getting a lot of useful work done",
    "sentence": "A: How was the meeting with the suppliers yesterday afternoon? I heard it lasted almost three hours and some people got quite tired. B: It was long, but very {{BLANK}}, because we agreed on lower prices, a faster delivery date, and a clear plan for handling any damaged goods in the future.",
    "cn": "A：昨天下午和供應商的會議怎麼樣？我聽說開了將近三個小時，有些人都很累了。 B：會議很長，但非常【有成效】，因為我們談定了更低的價格、更快的交貨日期，以及未來處理任何受損貨品的明確計畫。"
  },
  {
    "word": "prioritize",
    "pos": "v.",
    "cn_def": "排定優先順序；優先處理",
    "en_def": "to decide which task is most important and do it first",
    "sentence": "A: I have five reports due this week, a client visit on Thursday, and my manager keeps adding small jobs, so I don't know where to start. B: You should {{BLANK}} the tasks by deadline and importance, finish the client report first, and politely ask your manager whether the small jobs can wait until next week.",
    "cn": "A：我這週有五份報告要交，星期四要拜訪客戶，主管還一直增加小工作，所以我不知道該從哪裡開始。 B：你應該依照截止日期和重要性把工作【排定優先順序】，先完成客戶報告，再禮貌地問主管那些小工作能不能等到下週。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延期；延後",
    "en_def": "to move an event or activity to a later time",
    "sentence": "A: Is the company picnic still happening on Saturday, even though the weather report says there will be heavy rain all weekend? B: No, the HR manager decided to {{BLANK}} it until the following month, so everyone will get an email with the new date and the updated list of activities later today.",
    "cn": "A：雖然氣象報告說整個週末都會下大雨，公司野餐星期六還照常舉行嗎？ B：不，人資經理決定把它【延期】到下個月，所以大家今天稍晚會收到一封附有新日期和最新活動清單的電子郵件。"
  },
  {
    "word": "procrastination",
    "pos": "n.",
    "cn_def": "拖延",
    "en_def": "the habit of delaying things you should do",
    "sentence": "A: Why is Kevin always working so late on the night before every deadline, even when he had two whole weeks to finish the job? B: His {{BLANK}} is becoming a real problem for the team, so his supervisor is going to help him break big projects into smaller steps with daily targets.",
    "cn": "A：為什麼凱文總是在每個截止日的前一晚工作到很晚，即使他有整整兩週可以完成工作？ B：他的【拖延】已經成為團隊真正的問題，所以他的主管打算幫他把大型專案拆成有每日目標的小步驟。"
  },
  {
    "word": "execution",
    "pos": "n.",
    "cn_def": "執行；實行",
    "en_def": "the act of carrying out a plan",
    "sentence": "A: The board liked our idea for the new delivery service, so why are the sales figures still so disappointing after three months? B: The idea was good, but the {{BLANK}} was poor, because the drivers were not trained properly and the mobile app kept crashing when customers tried to place orders.",
    "cn": "A：董事會很喜歡我們新外送服務的點子，為什麼三個月後銷售數字仍然這麼令人失望？ B：點子是好的，但【執行】很差，因為司機沒有受到適當的訓練，而且顧客下單時手機應用程式一直當機。"
  },
  {
    "word": "to-do list",
    "pos": "n.phr.",
    "cn_def": "待辦事項清單",
    "en_def": "a list of tasks that you need to do",
    "sentence": "A: How do you manage to remember every task when you have meetings with clients, calls with suppliers, and reports to write on the same day? B: Every morning I write a short {{BLANK}} on my phone, check off each item when it is finished, and move anything unfinished to the next day.",
    "cn": "A：當你同一天要和客戶開會、和供應商通電話，還要寫報告時，你是怎麼記住每一項工作的？ B：我每天早上都會在手機上寫一份簡短的【待辦事項清單】，每完成一項就打勾，沒完成的就移到隔天。"
  },
  {
    "word": "fascinate",
    "pos": "v.",
    "cn_def": "使著迷；吸引",
    "en_def": "to attract and hold someone's strong interest",
    "sentence": "A: Why did you choose to study city design after working in a bank for almost ten years? B: Big cities have always seemed to {{BLANK}} me, especially the way roads, parks, and train lines are designed, so I finally decided to follow my real interest and change careers.",
    "cn": "A：你為什麼在銀行工作了將近十年之後，選擇去念城市設計？ B：大城市一直都很【吸引】我，尤其是道路、公園和鐵路路線的設計方式，所以我最後決定追隨我真正的興趣並轉換跑道。"
  },
  {
    "word": "fulfill",
    "pos": "v.",
    "cn_def": "履行；實現",
    "en_def": "to do what is promised or required",
    "sentence": "A: The customer is upset because the furniture order arrived late, and she says she will never buy from our store again. B: Please call her today, apologize for the delay, and explain how we will {{BLANK}} our promise of free delivery and installation within the next three days.",
    "cn": "A：那位顧客很不高興，因為家具訂單送晚了，她說她再也不會在我們店裡買東西了。 B：請今天打電話給她，為延誤道歉，並說明我們將如何在接下來三天內【履行】免費送貨和安裝的承諾。"
  },
  {
    "word": "perseverance",
    "pos": "n.",
    "cn_def": "毅力；堅持不懈",
    "en_def": "continuing to try even when something is difficult",
    "sentence": "A: How did your small bakery survive those difficult first two years, when rent was so high and very few customers knew about it? B: It took a lot of {{BLANK}}, because I worked seven days a week, kept improving my recipes, and never gave up even when I lost money every month.",
    "cn": "A：在租金那麼高、又很少顧客知道你的店的那兩年艱難時期，你的小麵包店是怎麼撐過來的？ B：這需要很大的【毅力】，因為我一週工作七天，不斷改良食譜，即使每個月都虧錢也從不放棄。"
  },
  {
    "word": "cope with",
    "pos": "v.phr.",
    "cn_def": "應付；處理",
    "en_def": "to deal successfully with a difficult situation",
    "sentence": "A: The online store received three times more orders than usual during the holiday sale, and our warehouse staff looked exhausted yesterday. B: We hired ten temporary workers this morning to help the team {{BLANK}} the extra orders, and we also extended the shipping hours until midnight.",
    "cn": "A：網路商店在假日特賣期間收到的訂單是平常的三倍，我們倉庫的員工昨天看起來累壞了。 B：我們今天早上僱用了十名臨時工來幫助團隊【應付】額外的訂單，而且我們也把出貨時間延長到午夜。"
  },
  {
    "word": "first-hand",
    "pos": "adj.",
    "cn_def": "第一手的；親身的",
    "en_def": "learned or experienced directly by yourself, not from others",
    "sentence": "A: Why is the new manager visiting every branch office this month instead of just reading the monthly reports in her office? B: She wants {{BLANK}} information about how the staff work with customers, so she can understand the real problems before she makes any big changes next year.",
    "cn": "A：為什麼新經理這個月要走訪每一間分公司，而不是只在辦公室看月報？ B：她想要獲得員工如何與顧客互動的【第一手】資訊，這樣她在明年做出任何重大改變之前，就能了解真正的問題。"
  },
  {
    "word": "concise",
    "pos": "adj.",
    "cn_def": "簡潔的",
    "en_def": "short and clear, using only a few words",
    "sentence": "A: My presentation for the client meeting tomorrow is almost forty slides long, and I'm worried it might be too much for them. B: Clients are usually busy, so keep it {{BLANK}} and clear by showing only the key numbers, the main benefits, and a short plan for the next six months.",
    "cn": "A：我明天客戶會議的簡報將近四十張投影片，我擔心對他們來說會太多。 B：客戶通常都很忙，所以要保持【簡潔】清楚，只呈現關鍵數字、主要好處，以及未來六個月的簡短計畫。"
  },
  {
    "word": "objective",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something that you plan to achieve; a goal",
    "sentence": "A: Before we start designing the new advertising campaign, what exactly does the sales director expect us to achieve this year? B: Our main {{BLANK}} is to increase online sales by twenty percent, so every ad, video, and social media post should guide customers to our website.",
    "cn": "A：在我們開始設計新的廣告活動之前，業務總監今年到底期望我們達成什麼？ B：我們的主要【目標】是讓網路銷售成長百分之二十，所以每一則廣告、影片和社群媒體貼文都應該引導顧客到我們的網站。"
  },
  {
    "word": "self-control",
    "pos": "n.",
    "cn_def": "自制力",
    "en_def": "the ability to control your feelings and actions",
    "sentence": "A: How did the hotel receptionist stay so calm when that angry guest shouted at her in front of everyone in the lobby last night? B: She showed great {{BLANK}}, listened carefully to his complaint, and offered him a better room, so he finally calmed down and even thanked her later.",
    "cn": "A：昨晚那位生氣的客人在大廳所有人面前對飯店櫃檯人員大吼時，她怎麼能保持那麼冷靜？ B：她展現了極強的【自制力】，仔細聆聽他的抱怨，並提供他一間更好的房間，所以他最後冷靜下來，後來甚至還向她道謝。"
  }
];

const MCQS = [
  {
    "q": "Please check the train _____ before you leave the office. The last train to the airport departs at half past ten tonight.",
    "options": [
      "schedule",
      "objective",
      "execution",
      "perseverance"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The manager will _____ extra funds to the IT department next quarter. The money will be used to replace old computers.",
    "options": [
      "postpone",
      "fascinate",
      "allocate",
      "overestimate"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Many new business owners _____ how quickly they will earn a profit. As a result, they often run out of cash early.",
    "options": [
      "allocate",
      "overestimate",
      "postpone",
      "fulfill"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The team worked overtime for two weeks to _____ its sales target. Everyone received a bonus at the end of the month.",
    "options": [
      "postpone",
      "fascinate",
      "overestimate",
      "accomplish"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Working from home has made our design team more _____ than before. They now finish projects faster and with fewer mistakes.",
    "options": [
      "concise",
      "first-hand",
      "productive",
      "expensive"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "When customers complain, staff should _____ urgent safety problems over small requests. This helps prevent accidents in the store.",
    "options": [
      "prioritize",
      "fascinate",
      "overestimate",
      "allocate"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Because the guest speaker's flight was canceled, we had to _____ the seminar. It will now take place next Friday.",
    "options": [
      "accomplish",
      "fascinate",
      "allocate",
      "postpone"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Constant _____ caused the report to be submitted three days late. The manager asked the team to start earlier next time.",
    "options": [
      "perseverance",
      "procrastination",
      "execution",
      "self-control"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The plan looked perfect on paper, but its _____ was full of mistakes. Several stores opened without enough staff or stock.",
    "options": [
      "execution",
      "procrastination",
      "self-control",
      "perseverance"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Before leaving work each day, Maria writes a _____ for the next morning. It helps her remember every important task.",
    "options": [
      "self-control",
      "perseverance",
      "to-do list",
      "execution"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Stories about successful start-ups always _____ young employees at our company. Many of them dream of running their own business.",
    "options": [
      "postpone",
      "fascinate",
      "allocate",
      "overestimate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The factory hired extra workers to _____ the large order from the overseas client. The goods must be shipped by May.",
    "options": [
      "fascinate",
      "overestimate",
      "postpone",
      "fulfill"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Thanks to her _____, Linda finally passed the accounting exam on her fourth try. Her coworkers threw her a small party.",
    "options": [
      "procrastination",
      "execution",
      "perseverance",
      "to-do list"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "New staff members often find it hard to _____ the busy holiday season. Senior employees are asked to help them.",
    "options": [
      "cope with",
      "fascinate",
      "allocate",
      "accomplish"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The tour gives visitors _____ experience of how chocolate is made in the factory. Guests can also taste fresh samples.",
    "options": [
      "concise",
      "productive",
      "nervous",
      "first-hand"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Please keep your email _____ and to the point. Our director receives hundreds of messages every day and reads quickly.",
    "options": [
      "first-hand",
      "concise",
      "productive",
      "patient"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The main _____ of the training program is to improve customer service skills. All front desk staff must attend.",
    "options": [
      "objective",
      "procrastination",
      "self-control",
      "to-do list"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Customer service agents need strong _____ when callers become rude. Staying calm helps solve the problem more quickly.",
    "options": [
      "procrastination",
      "execution",
      "self-control",
      "schedule"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Our delivery trucks are running behind _____ because of road construction downtown. Customers may receive packages one day late.",
    "options": [
      "objective",
      "schedule",
      "execution",
      "to-do list"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The hotel will _____ ten rooms on the top floor for conference speakers. Other guests will stay on the lower floors.",
    "options": [
      "fascinate",
      "accomplish",
      "overestimate",
      "allocate"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Do not _____ the number of visitors at the trade fair. Last year, only about two hundred people came to our booth.",
    "options": [
      "accomplish",
      "fulfill",
      "overestimate",
      "fascinate"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "With better planning, the small team was able to _____ more in one week than in a whole month. Their manager was impressed.",
    "options": [
      "accomplish",
      "postpone",
      "allocate",
      "fascinate"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Short breaks during the workday can help employees stay _____. Studies show that tired workers make more errors.",
    "options": [
      "concise",
      "first-hand",
      "empty",
      "productive"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "With limited time before the launch, we must _____ the most important features. Less urgent changes can wait until the next update.",
    "options": [
      "fascinate",
      "prioritize",
      "overestimate",
      "allocate"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Heavy snow forced the airline to _____ all morning flights until the afternoon. Passengers were offered free coffee while they waited.",
    "options": [
      "postpone",
      "accomplish",
      "fulfill",
      "fascinate"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Breaking a big project into small steps is a good way to fight _____. Each finished step gives workers a sense of progress.",
    "options": [
      "perseverance",
      "objective",
      "procrastination",
      "execution"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Careful _____ of the safety plan helped the factory avoid accidents this year. Every worker followed the new rules exactly.",
    "options": [
      "procrastination",
      "execution",
      "self-control",
      "to-do list"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "My _____ for Monday includes three client calls and a budget review. I will cross off each task when it is done.",
    "options": [
      "objective",
      "self-control",
      "perseverance",
      "to-do list"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The new virtual reality display continues to _____ shoppers at the mall. Crowds gather around it every weekend.",
    "options": [
      "allocate",
      "postpone",
      "fascinate",
      "overestimate"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The company promised to _____ all its customer orders before the holiday. Extra drivers were hired to deliver packages on time.",
    "options": [
      "fulfill",
      "fascinate",
      "overestimate",
      "allocate"
    ],
    "answer": 0,
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；行程"
  },
  "allocate": {
    "pos": "v.",
    "en_def": "to give a part of money, time or space for a special purpose",
    "cn_def": "分配；撥出"
  },
  "overestimate": {
    "pos": "v.",
    "en_def": "to think something is bigger, better or more than it really is",
    "cn_def": "高估"
  },
  "accomplish": {
    "pos": "v.",
    "en_def": "to succeed in doing something",
    "cn_def": "完成；達成"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "getting a lot of useful work done",
    "cn_def": "有成效的；有生產力的"
  },
  "prioritize": {
    "pos": "v.",
    "en_def": "to decide which task is most important and do it first",
    "cn_def": "排定優先順序；優先處理"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event or activity to a later time",
    "cn_def": "延期；延後"
  },
  "procrastination": {
    "pos": "n.",
    "en_def": "the habit of delaying things you should do",
    "cn_def": "拖延"
  },
  "execution": {
    "pos": "n.",
    "en_def": "the act of carrying out a plan",
    "cn_def": "執行；實行"
  },
  "to-do list": {
    "pos": "n.phr.",
    "en_def": "a list of tasks that you need to do",
    "cn_def": "待辦事項清單"
  },
  "fascinate": {
    "pos": "v.",
    "en_def": "to attract and hold someone's strong interest",
    "cn_def": "使著迷；吸引"
  },
  "fulfill": {
    "pos": "v.",
    "en_def": "to do what is promised or required",
    "cn_def": "履行；實現"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "continuing to try even when something is difficult",
    "cn_def": "毅力；堅持不懈"
  },
  "cope with": {
    "pos": "v.phr.",
    "en_def": "to deal successfully with a difficult situation",
    "cn_def": "應付；處理"
  },
  "first-hand": {
    "pos": "adj.",
    "en_def": "learned or experienced directly by yourself, not from others",
    "cn_def": "第一手的；親身的"
  },
  "concise": {
    "pos": "adj.",
    "en_def": "short and clear, using only a few words",
    "cn_def": "簡潔的"
  },
  "objective": {
    "pos": "n.",
    "en_def": "something that you plan to achieve; a goal",
    "cn_def": "目標"
  },
  "self-control": {
    "pos": "n.",
    "en_def": "the ability to control your feelings and actions",
    "cn_def": "自制力"
  }
};

const EXTRA_GLOSSES = {};
