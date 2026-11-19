// Topic 446 Quiz Data: Work 工作
// Source word list: https://www.examword.com/group-topic/work — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T446 - Work 工作",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "職位；職務",
    "en_def": "a job in a company or organization",
    "sentence": "A: I heard that the marketing department is hiring again; do you know what kind of person they are looking for this time? B: Yes, they want someone with at least three years of experience in social media for the new {{BLANK}}, and the interviews will start next Monday in the main conference room.",
    "cn": "A：我聽說行銷部門又在徵人了，你知道他們這次要找什麼樣的人嗎？ B：知道，他們想為這個新【職位】找一位至少有三年社群媒體經驗的人，面試下週一會在主會議室開始。"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "cn_def": "職業",
    "en_def": "the kind of job a person does",
    "sentence": "A: The visa application form asks for a lot of personal details, and I'm not sure what to write in one of the boxes; can you help me? B: Sure, in that box you just write your {{BLANK}}, such as accountant or engineer, and then add the name and address of the company where you work.",
    "cn": "A：簽證申請表要填很多個人資料，其中一格我不確定要寫什麼，你可以幫我嗎？ B：當然，那一格你只要寫上你的【職業】，像是會計師或工程師，然後再加上你工作的公司名稱和地址。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "the jobs a person does over many years of working life",
    "sentence": "A: You have worked at this bank for almost twenty years, so what advice would you give to new employees who have just joined the team? B: I would tell them to keep learning, find a good mentor early, and think carefully about where they want their {{BLANK}} to go in the next ten years.",
    "cn": "A：你在這家銀行工作快二十年了，你會給剛加入團隊的新員工什麼建議？ B：我會告訴他們要持續學習、及早找到好的導師，並且仔細思考未來十年想讓自己的【職業生涯】往哪個方向發展。"
  },
  {
    "word": "commute",
    "pos": "n.",
    "cn_def": "通勤",
    "en_def": "the trip between home and work",
    "sentence": "A: You look really tired this morning; did you stay up late finishing the sales report for the regional manager? B: No, the report was done yesterday, but the trains were delayed because of a signal problem, so my {{BLANK}} took almost two hours instead of the usual forty minutes.",
    "cn": "A：你今天早上看起來好累，你是不是熬夜趕完給區域經理的銷售報告？ B：沒有，報告昨天就完成了，但火車因為號誌故障而延誤，所以我的【通勤】花了將近兩個小時，而不是平常的四十分鐘。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；固定程序",
    "en_def": "the usual order in which you do things every day",
    "sentence": "A: How do you manage to answer so many customer emails every day without feeling stressed or forgetting any important requests? B: I follow a simple {{BLANK}}: I check urgent messages first thing in the morning, reply to the others after lunch, and update my task list before I leave the office.",
    "cn": "A：你每天要回這麼多客戶郵件，怎麼能不覺得有壓力，也不會漏掉任何重要的要求？ B：我遵循一套簡單的【例行程序】：早上一到先查看緊急訊息，午餐後回覆其他郵件，下班前更新我的待辦清單。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；薪資",
    "en_def": "the fixed amount of money you are paid for your job, usually every month",
    "sentence": "A: The software company in Hsinchu offered me a job yesterday, but I still haven't decided whether I should accept it or stay here. B: Before you decide, compare the {{BLANK}}, the health insurance, and the number of vacation days, because a higher monthly payment is not the only thing that matters.",
    "cn": "A：新竹那家軟體公司昨天給了我工作機會，但我還沒決定要接受還是留在這裡。 B：在你決定之前，比較一下【薪水】、健康保險和休假天數，因為每月領得多並不是唯一重要的事。"
  },
  {
    "word": "overtime",
    "pos": "n.",
    "cn_def": "加班；加班時間",
    "en_def": "extra time you work after your normal working hours",
    "sentence": "A: Why is everyone still in the office at nine o'clock tonight when we usually go home around six? B: The client moved the product launch forward by a week, so the manager asked the design team to do three hours of {{BLANK}} every night until all the packaging samples are approved.",
    "cn": "A：我們平常六點左右就回家了，為什麼今晚九點大家還在辦公室？ B：客戶把產品發表提前了一週，所以經理要求設計團隊每晚【加班】三小時，直到所有包裝樣品都通過核准為止。"
  },
  {
    "word": "shift",
    "pos": "n.",
    "cn_def": "輪班；班次",
    "en_def": "a set period of working time, often at different times of day",
    "sentence": "A: The hospital cafeteria is open twenty-four hours a day, so how do the kitchen staff decide who works at night? B: They take turns every month, and this month I have the night {{BLANK}}, which starts at ten in the evening and ends at six in the morning, so I sleep during the day.",
    "cn": "A：醫院自助餐廳二十四小時營業，廚房員工是怎麼決定誰上夜班的？ B：他們每個月輪流，這個月我上夜【班】，從晚上十點開始到早上六點結束，所以我白天睡覺。"
  },
  {
    "word": "flexitime",
    "pos": "n.",
    "cn_def": "彈性工時",
    "en_def": "a system where workers can choose when they start and finish work",
    "sentence": "A: I need to pick up my daughter from school at four every afternoon, so I'm worried that this new job will be difficult for my family. B: Don't worry too much, because our company offers {{BLANK}}, which means you can start at seven and leave at three-thirty as long as you finish eight hours.",
    "cn": "A：我每天下午四點要去學校接女兒，所以我擔心這份新工作對我的家庭來說會很困難。 B：別太擔心，因為我們公司提供【彈性工時】，也就是說只要你做滿八小時，就可以七點上班、三點半下班。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升遷；晉升",
    "en_def": "a move to a higher and more important job",
    "sentence": "A: Congratulations! I heard the general manager announced some good news about you at the meeting this morning; is it true? B: Yes, after five years in the customer service department, I finally got a {{BLANK}} to team leader, so next month I will be responsible for training eight new staff members.",
    "cn": "A：恭喜！我聽說總經理今天早上在會議上宣布了關於你的好消息，是真的嗎？ B：是的，在客服部門待了五年後，我終於【升遷】為組長，所以下個月我將負責訓練八位新進員工。"
  },
  {
    "word": "nominate",
    "pos": "v.",
    "cn_def": "提名",
    "en_def": "to officially suggest someone for a job, prize, or position",
    "sentence": "A: The company is giving an award to the most helpful employee of the year, but I don't know how the winner is chosen. B: First, every department manager must {{BLANK}} one person from their team, and then a small committee reads the reasons and votes for the final winner in December.",
    "cn": "A：公司要頒獎給年度最樂於助人的員工，但我不知道得獎者是怎麼選出來的。 B：首先，每位部門經理必須從自己團隊中【提名】一個人，然後一個小型委員會會看過理由，在十二月投票選出最後的得獎者。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表現；績效",
    "en_def": "how well a person or group does a job",
    "sentence": "A: Why does the human resources manager want to meet with each of us for thirty minutes next week? B: It's the annual review, so she will talk about your {{BLANK}} this year, look at the sales targets you reached, and discuss which training courses could help you improve next year.",
    "cn": "A：為什麼人資經理下週要和我們每個人各談三十分鐘？ B：那是年度考核，所以她會談你今年的【績效】，看看你達成了哪些銷售目標，並討論哪些訓練課程可以幫助你明年進步。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任；職責",
    "en_def": "a duty or job that you must take care of",
    "sentence": "A: Now that you are the new office manager, what will be different about your daily work compared with your old job as a receptionist? B: The biggest change is that ordering supplies and paying the cleaning company is now my {{BLANK}}, so I have to check the budget carefully every week.",
    "cn": "A：現在你是新的辦公室經理了，跟你以前當櫃台接待的工作比起來，你的日常工作會有什麼不同？ B：最大的改變是訂購用品和付款給清潔公司現在是我的【責任】，所以我每週都必須仔細檢查預算。"
  },
  {
    "word": "objective",
    "pos": "n.",
    "cn_def": "目標；目的",
    "en_def": "something you plan and work hard to achieve",
    "sentence": "A: Before we start planning the advertising campaign for the new coffee machine, shouldn't we agree on what we want it to achieve? B: You're right; our main {{BLANK}} is to increase online sales by twenty percent before the end of the year, so every idea should support that goal.",
    "cn": "A：在我們開始規劃新咖啡機的廣告活動之前，我們是不是應該先對想達成的目的取得共識？ B：你說得對，我們的主要【目標】是在年底前把網路銷售額提高百分之二十，所以每個點子都應該支持這個目的。"
  },
  {
    "word": "demand",
    "pos": "n.",
    "cn_def": "需求",
    "en_def": "the need or wish of people to buy something",
    "sentence": "A: Why has the factory hired thirty extra workers and added a weekend team since the beginning of the summer? B: Because the weather has been so hot, the {{BLANK}} for our electric fans has grown much faster than we expected, and the stores keep calling us for more.",
    "cn": "A：為什麼工廠從夏天一開始就多雇了三十名工人，還增加了一組週末班？ B：因為天氣一直很熱，我們電風扇的【需求】成長得比預期快很多，商店一直打電話來要更多貨。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well because you have learned and practiced it",
    "sentence": "A: I'd like to move from the sales team to the data analysis team next year, but I'm not sure I'm ready for it. B: The most important {{BLANK}} for that team is using spreadsheets well, so I suggest taking the online course the company pays for and practicing with real sales reports.",
    "cn": "A：我明年想從業務團隊調到資料分析團隊，但我不確定自己準備好了沒有。 B：那個團隊最重要的【技能】是熟練使用試算表，所以我建議你去上公司出錢的線上課程，並用真實的銷售報告來練習。"
  },
  {
    "word": "aspiring",
    "pos": "adj.",
    "cn_def": "有抱負的；立志成為…的",
    "en_def": "hoping and working to become a particular kind of person",
    "sentence": "A: Who are all those young people with laptops sitting in the lobby of our office building this afternoon? B: They are {{BLANK}} designers from a local college, and our art director invited them to visit the studio, watch how we work, and show her their portfolios after the tour.",
    "cn": "A：今天下午坐在我們辦公大樓大廳、帶著筆電的那群年輕人是誰？ B：他們是來自本地大學、【有抱負的】年輕設計師，我們的藝術總監邀請他們來參觀工作室、看我們怎麼工作，並在參觀後給她看作品集。"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱情的；熱衷的",
    "en_def": "having very strong feelings of love or interest for something",
    "sentence": "A: What made you choose Kevin for the job at the bookstore when two other people had more experience in retail? B: During the interview he was so {{BLANK}} about children's books and reading clubs that I knew he would make our customers excited about visiting the store.",
    "cn": "A：明明另外兩個人有更多零售經驗，你為什麼選 Kevin 來書店工作？ B：面試時他對童書和讀書會非常【熱衷】，所以我知道他會讓顧客對來店裡感到興奮。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: Our usual posters for the summer sale don't seem to bring many people into the shop anymore, so what should we try this year? B: Let's ask the new marketing assistant, because she is very {{BLANK}} and might think of a fun video or game that customers would share online.",
    "cn": "A：我們平常的夏季特賣海報好像已經吸引不了太多人來店裡了，今年我們該試試什麼？ B：我們去問新來的行銷助理吧，因為她很【有創意】，可能會想出顧客願意在網路上分享的有趣影片或遊戲。"
  },
  {
    "word": "rewarding",
    "pos": "adj.",
    "cn_def": "有回報的；值得的",
    "en_def": "making you feel happy and satisfied because it is useful or important",
    "sentence": "A: Being a nurse means working long hours and dealing with stressful situations, so why do you still enjoy your job so much? B: It can be tiring, but it is very {{BLANK}} when patients go home healthy and their families come back to thank our team for taking care of them.",
    "cn": "A：當護理師意味著長時間工作又要應付壓力很大的狀況，你為什麼還是這麼喜歡你的工作？ B：雖然可能很累，但當病人健康出院、家屬回來感謝我們團隊的照顧時，就覺得非常【值得】。"
  },
  {
    "word": "knowledgeable",
    "pos": "adj.",
    "cn_def": "知識淵博的；很在行的",
    "en_def": "knowing a lot about a subject",
    "sentence": "A: I need to buy a new laptop for editing videos, but there are so many models in this store that I feel completely lost. B: Ask the man in the blue shirt near the counter, because he is very {{BLANK}} about computers and can explain which model fits your budget and needs.",
    "cn": "A：我需要買一台新筆電來剪輯影片，但這家店的型號太多了，我完全不知道該怎麼選。 B：去問櫃台旁邊穿藍色襯衫的那位先生，因為他對電腦非常【在行】，可以解釋哪一款符合你的預算和需求。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的",
    "en_def": "hopeful and thinking about the good side of things",
    "sentence": "A: The project was delayed twice and the client complained a lot, so how did the team stay motivated until the end? B: Our leader kept a {{BLANK}} attitude, thanked everyone for their hard work at every meeting, and reminded us that each problem we solved made us stronger.",
    "cn": "A：這個專案延誤了兩次，客戶又抱怨很多，團隊是怎麼一直保持動力直到最後的？ B：我們的領導人保持【積極】的態度，每次開會都感謝大家的辛勞，並提醒我們每解決一個問題就讓我們更強大。"
  },
  {
    "word": "utilize",
    "pos": "v.",
    "cn_def": "利用；使用",
    "en_def": "to use something in a useful way",
    "sentence": "A: We bought that expensive video-conference system last year, but most departments still prefer to travel to meetings in Taipei. B: That's why the manager wants us to {{BLANK}} the system more often, since it would save the company a lot of money on train tickets and hotels.",
    "cn": "A：我們去年買了那套很貴的視訊會議系統，但大多數部門還是比較喜歡出差到台北開會。 B：所以經理才希望我們更常【利用】這套系統，因為這樣可以幫公司省下很多火車票和住宿的錢。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "寶貴的；有價值的",
    "en_def": "very useful or important",
    "sentence": "A: Do you think it was worth spending three months working as an intern at that advertising agency without getting paid? B: Yes, it gave me {{BLANK}} experience with real clients and deadlines, and the manager there later wrote a strong recommendation letter that helped me get this job.",
    "cn": "A：你覺得在那家廣告公司無薪實習三個月值得嗎？ B：值得，那讓我有了與真實客戶和截止期限打交道的【寶貴】經驗，而且那裡的經理後來寫了一封很有力的推薦信，幫助我得到這份工作。"
  },
  {
    "word": "realize",
    "pos": "v.",
    "cn_def": "意識到；了解",
    "en_def": "to understand or notice something that you did not know before",
    "sentence": "A: Why did you call the supplier back so quickly after our meeting with them this morning? B: When I read the contract again at lunch, I began to {{BLANK}} that the delivery date was wrong, so I phoned them before they started packing the order and sending it out.",
    "cn": "A：今天早上和供應商開完會後，你為什麼這麼快就回電給他們？ B：我午餐時重讀合約，開始【意識到】交貨日期寫錯了，所以在他們開始打包並寄出訂單前就打電話給他們。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry because you have to do a lot or do it well",
    "sentence": "A: You have looked worried all week, and you've been staying late at the office almost every night; is everything all right? B: Not really, because the boss wants the budget plan finished by Friday, and the {{BLANK}} to get every number correct before the board meeting is making me lose sleep.",
    "cn": "A：你整個星期看起來都很擔心，而且幾乎每晚都很晚才離開辦公室，一切還好嗎？ B：不太好，因為老闆要預算計畫在星期五前完成，要在董事會議前把每個數字都弄對的【壓力】讓我睡不好。"
  },
  {
    "word": "satisfaction",
    "pos": "n.",
    "cn_def": "滿意；滿足",
    "en_def": "the good feeling you have when you get what you want or need",
    "sentence": "A: Why did the hotel manager decide to give every guest a short survey when they check out this month? B: She wants to measure customer {{BLANK}} with the new rooms and the breakfast buffet, so she can find out what to improve before the busy holiday season.",
    "cn": "A：為什麼飯店經理決定這個月在每位客人退房時給他們一份簡短問卷？ B：她想衡量顧客對新客房和早餐自助餐的【滿意度】，這樣她就能在忙碌的假期旺季前找出需要改進的地方。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "認可；表揚",
    "en_def": "public praise or thanks for someone's work",
    "sentence": "A: Why did the company hold a special dinner last night for the engineers who built the new mobile app? B: The app was downloaded a million times in one month, so the president gave them an award in {{BLANK}} of their hard work and clever ideas.",
    "cn": "A：為什麼公司昨晚為開發新手機應用程式的工程師們舉辦了一場特別晚宴？ B：這個應用程式一個月內被下載了一百萬次，所以總裁頒獎給他們，以【表彰】他們的辛勤努力和聰明點子。"
  },
  {
    "word": "flexibility",
    "pos": "n.",
    "cn_def": "彈性；靈活性",
    "en_def": "the ability to change easily to suit different situations",
    "sentence": "A: You turned down a job with a higher salary last month, so why did you decide to stay at this smaller company? B: I value the {{BLANK}} here, because I can work from home two days a week, which gives me more time to look after my elderly parents.",
    "cn": "A：你上個月拒絕了一份薪水更高的工作，為什麼決定留在這家比較小的公司？ B：我很重視這裡的【彈性】，因為我每週可以在家工作兩天，讓我有更多時間照顧年邁的父母。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "sentence": "A: Your English presentation at the international conference was excellent, but weren't you nervous about speaking in front of so many people? B: I was very nervous at first, but I practiced every evening with my colleagues, and that helped me {{BLANK}} my fear of making mistakes on stage.",
    "cn": "A：你在國際研討會上的英文簡報非常精彩，但在那麼多人面前說話你不緊張嗎？ B：我一開始非常緊張，但我每天晚上都跟同事練習，那幫助我【克服】了怕在台上犯錯的恐懼。"
  },
  {
    "word": "puzzle",
    "pos": "v.",
    "cn_def": "使困惑",
    "en_def": "to make someone confused because they cannot understand something",
    "sentence": "A: The new expense system was supposed to make things easier, so why are so many people calling the accounting department today? B: The instructions are written with lots of technical terms, and they seem to {{BLANK}} most employees, so we're preparing a simple guide with pictures for everyone.",
    "cn": "A：新的報帳系統本來應該讓事情更簡單，為什麼今天這麼多人打電話到會計部？ B：說明書裡寫了很多專業術語，似乎讓大多數員工感到【困惑】，所以我們正在為大家準備一份有圖片的簡易指南。"
  },
  {
    "word": "encounter",
    "pos": "v.",
    "cn_def": "遇到；遭遇",
    "en_def": "to meet or experience something, especially a problem",
    "sentence": "A: Our team is going to set up the new computer system at the Kaohsiung branch next week, and I've never done this before. B: If you {{BLANK}} any technical problems while you are there, call the IT help desk at once, because they can connect to the computers remotely and fix them.",
    "cn": "A：我們團隊下週要去高雄分公司安裝新的電腦系統，我以前從來沒做過這件事。 B：如果你在那裡【遇到】任何技術問題，就立刻打電話給資訊服務台，因為他們可以遠端連線到電腦並修好它們。"
  },
  {
    "word": "bear",
    "pos": "v.",
    "cn_def": "承擔；負擔",
    "en_def": "to accept or pay for something, such as a cost",
    "sentence": "A: The new office printer keeps breaking down, and the repair company says the warranty ended last month, so who will pay for it? B: Because the printer is used by everyone on this floor, our department will {{BLANK}} the cost of the repairs this time, but we'll ask for a new machine next year.",
    "cn": "A：新的辦公室印表機一直故障，維修公司說保固上個月就到期了，費用由誰支付？ B：因為這台印表機是這層樓每個人都在用的，這次維修的費用由我們部門【承擔】，但我們明年會申請一台新機器。"
  }
];

const MCQS = [
  {
    "q": "Helen has applied for the open _____ in the accounting department. She will have a second interview with the finance director on Thursday.",
    "options": [
      "commute",
      "position",
      "pressure",
      "demand"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "After ten years in banking, Tom decided to start a new _____ in teaching. He is now taking evening classes to earn a teaching certificate.",
    "options": [
      "career",
      "shift",
      "demand",
      "salary"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Many employees move closer to the office to shorten their daily _____. Some of them now walk to work in less than fifteen minutes.",
    "options": [
      "objective",
      "recognition",
      "commute",
      "satisfaction"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The cleaning staff follow the same _____ every night before the office opens. They empty the bins first and then vacuum all the carpets.",
    "options": [
      "promotion",
      "salary",
      "demand",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The company raised the starting _____ for new engineers to attract more graduates. Each new engineer will now earn about fifty thousand dollars a month.",
    "options": [
      "routine",
      "objective",
      "salary",
      "skill"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Factory workers receive extra pay for every hour of _____ they do on weekends. The rate is one and a half times normal pay.",
    "options": [
      "recognition",
      "flexibility",
      "performance",
      "overtime"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Nurses at the city hospital work a twelve-hour _____ three or four days a week. The night team arrives at seven in the evening.",
    "options": [
      "shift",
      "commute",
      "objective",
      "satisfaction"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Thanks to _____, staff can choose to start work any time between seven and ten in the morning. Many parents find this very helpful.",
    "options": [
      "overtime",
      "flexitime",
      "pressure",
      "demand"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "After three years of excellent sales results, Linda finally received a _____ to regional manager. She will move to the Taichung office next month.",
    "options": [
      "commute",
      "routine",
      "promotion",
      "pressure"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Each department may _____ one employee for the Best Team Player award. The winner will be announced at the year-end party.",
    "options": [
      "nominate",
      "utilize",
      "overcome",
      "encounter"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The manager praised the team's _____ during the busy holiday season. Sales were thirty percent higher than in the same period last year.",
    "options": [
      "commute",
      "flexitime",
      "occupation",
      "performance"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Checking the safety equipment every morning is the warehouse supervisor's main _____. He must report any problems to the manager immediately.",
    "options": [
      "salary",
      "responsibility",
      "overtime",
      "commute"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The main _____ of the training workshop is to help new staff use the booking system. By the end, everyone should feel comfortable with it.",
    "options": [
      "overtime",
      "salary",
      "objective",
      "commute"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Because of the cold winter, _____ for electric heaters rose sharply in December. Several stores sold out within a week.",
    "options": [
      "demand",
      "routine",
      "skill",
      "shift"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Good communication is an important _____ for anyone working at the front desk. Receptionists talk to dozens of guests and callers every day.",
    "options": [
      "salary",
      "commute",
      "overtime",
      "skill"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The workshop is designed for _____ writers who hope to publish their first novel. Several famous authors will give advice on finding a publisher.",
    "options": [
      "knowledgeable",
      "aspiring",
      "rewarding",
      "valuable"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Our tour guides are _____ about local history and love sharing stories with visitors. Many guests say the tours are the highlight of their trip.",
    "options": [
      "rewarding",
      "valuable",
      "aspiring",
      "passionate"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The advertising agency is looking for a _____ designer who can produce fresh, original ideas. Applicants should send three examples of their work.",
    "options": [
      "rewarding",
      "valuable",
      "creative",
      "aspiring"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Volunteering at the children's hospital was a very _____ experience for our staff. Many of them have asked to join again next year.",
    "options": [
      "rewarding",
      "aspiring",
      "knowledgeable",
      "passionate"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The sales assistants at the camera shop are very _____ about lenses and lighting. They can answer almost any question a customer asks.",
    "options": [
      "rewarding",
      "knowledgeable",
      "valuable",
      "aspiring"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new product received very _____ reviews from customers in its first month. Most buyers gave it five stars and praised its design.",
    "options": [
      "aspiring",
      "knowledgeable",
      "positive",
      "passionate"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The new software allows the warehouse to _____ its storage space more efficiently. As a result, the company no longer needs to rent a second building.",
    "options": [
      "utilize",
      "nominate",
      "encounter",
      "realize"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Please keep your _____ items, such as passports and jewelry, in the hotel safe. The hotel is not responsible for lost property.",
    "options": [
      "aspiring",
      "valuable",
      "rewarding",
      "passionate"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Many shoppers do not _____ that the store offers free delivery for orders over one thousand dollars. We should advertise this service more clearly.",
    "options": [
      "nominate",
      "utilize",
      "overcome",
      "realize"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Employees in the customer service center often work under great _____ during the holiday season. The company has hired extra staff to help them.",
    "options": [
      "pressure",
      "flexitime",
      "recognition",
      "occupation"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The hotel sends a short survey to every guest to measure customer _____. The results help managers decide which services to improve.",
    "options": [
      "overtime",
      "commute",
      "satisfaction",
      "shift"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The award was given to the volunteers in _____ of their twenty years of service to the community. Each of them received a certificate and flowers.",
    "options": [
      "flexibility",
      "pressure",
      "routine",
      "recognition"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Working from home gives employees more _____ to plan their own day. However, some people miss chatting with their coworkers in the office.",
    "options": [
      "recognition",
      "flexibility",
      "demand",
      "commute"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "With the help of a language tutor, Peter was able to _____ his fear of speaking English at meetings. He now leads the weekly team call.",
    "options": [
      "nominate",
      "utilize",
      "encounter",
      "overcome"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "If you _____ any problems logging in to the system, please contact the IT help desk. The staff there are available until nine every evening.",
    "options": [
      "nominate",
      "overcome",
      "encounter",
      "utilize"
    ],
    "answer": 2,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "position": {
    "pos": "n.",
    "en_def": "a job in a company or organization",
    "cn_def": "職位；職務"
  },
  "occupation": {
    "pos": "n.",
    "en_def": "the kind of job a person does",
    "cn_def": "職業"
  },
  "career": {
    "pos": "n.",
    "en_def": "the jobs a person does over many years of working life",
    "cn_def": "職業生涯；事業"
  },
  "commute": {
    "pos": "n.",
    "en_def": "the trip between home and work",
    "cn_def": "通勤"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order in which you do things every day",
    "cn_def": "例行公事；固定程序"
  },
  "salary": {
    "pos": "n.",
    "en_def": "the fixed amount of money you are paid for your job, usually every month",
    "cn_def": "薪水；薪資"
  },
  "overtime": {
    "pos": "n.",
    "en_def": "extra time you work after your normal working hours",
    "cn_def": "加班；加班時間"
  },
  "shift": {
    "pos": "n.",
    "en_def": "a set period of working time, often at different times of day",
    "cn_def": "輪班；班次"
  },
  "flexitime": {
    "pos": "n.",
    "en_def": "a system where workers can choose when they start and finish work",
    "cn_def": "彈性工時"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher and more important job",
    "cn_def": "升遷；晉升"
  },
  "nominate": {
    "pos": "v.",
    "en_def": "to officially suggest someone for a job, prize, or position",
    "cn_def": "提名"
  },
  "performance": {
    "pos": "n.",
    "en_def": "how well a person or group does a job",
    "cn_def": "表現；績效"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty or job that you must take care of",
    "cn_def": "責任；職責"
  },
  "objective": {
    "pos": "n.",
    "en_def": "something you plan and work hard to achieve",
    "cn_def": "目標；目的"
  },
  "demand": {
    "pos": "n.",
    "en_def": "the need or wish of people to buy something",
    "cn_def": "需求"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well because you have learned and practiced it",
    "cn_def": "技能；技巧"
  },
  "aspiring": {
    "pos": "adj.",
    "en_def": "hoping and working to become a particular kind of person",
    "cn_def": "有抱負的；立志成為…的"
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "having very strong feelings of love or interest for something",
    "cn_def": "熱情的；熱衷的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的"
  },
  "rewarding": {
    "pos": "adj.",
    "en_def": "making you feel happy and satisfied because it is useful or important",
    "cn_def": "有回報的；值得的"
  },
  "knowledgeable": {
    "pos": "adj.",
    "en_def": "knowing a lot about a subject",
    "cn_def": "知識淵博的；很在行的"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "hopeful and thinking about the good side of things",
    "cn_def": "正面的；積極的"
  },
  "utilize": {
    "pos": "v.",
    "en_def": "to use something in a useful way",
    "cn_def": "利用；使用"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "very useful or important",
    "cn_def": "寶貴的；有價值的"
  },
  "realize": {
    "pos": "v.",
    "en_def": "to understand or notice something that you did not know before",
    "cn_def": "意識到；了解"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of worry because you have to do a lot or do it well",
    "cn_def": "壓力"
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "the good feeling you have when you get what you want or need",
    "cn_def": "滿意；滿足"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "public praise or thanks for someone's work",
    "cn_def": "認可；表揚"
  },
  "flexibility": {
    "pos": "n.",
    "en_def": "the ability to change easily to suit different situations",
    "cn_def": "彈性；靈活性"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "cn_def": "克服"
  },
  "puzzle": {
    "pos": "v.",
    "en_def": "to make someone confused because they cannot understand something",
    "cn_def": "使困惑"
  },
  "encounter": {
    "pos": "v.",
    "en_def": "to meet or experience something, especially a problem",
    "cn_def": "遇到；遭遇"
  },
  "bear": {
    "pos": "v.",
    "en_def": "to accept or pay for something, such as a cost",
    "cn_def": "承擔；負擔"
  }
};

const EXTRA_GLOSSES = {};
