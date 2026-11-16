// Topic 118 Quiz Data: Employment 就業
// Source word list: https://www.examword.com/group-topic/employment — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T118 - Employment 就業",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "job",
    "pos": "n.",
    "cn_def": "工作；職業",
    "en_def": "work that you do regularly to earn money",
    "sentence": "A: Why does your brother look so happy this morning, and why did he bring a box of cakes to the office for everyone? B: He finally got a new {{BLANK}} at a large bank downtown, so he will start next Monday and earn more money than he does here.",
    "cn": "A：你哥哥今天早上為什麼看起來這麼開心，還帶了一盒蛋糕來辦公室給大家？ B：他終於在市中心一家大銀行找到一份新【工作】，所以他下週一開始上班，而且賺的錢會比在這裡多。"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "cn_def": "職業",
    "en_def": "a person's job or type of work",
    "sentence": "A: When I filled out the visa form at the travel agency yesterday, I wasn't sure what to write in one of the boxes. B: That box asks for your {{BLANK}}, so you should simply write sales manager and then add the name of the company where you work now.",
    "cn": "A：我昨天在旅行社填簽證表格時，不確定其中一個欄位要寫什麼。 B：那一欄是問你的【職業】，所以你只要寫業務經理，然後再加上你目前任職公司的名稱就好。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "the series of jobs a person has over a long time",
    "sentence": "A: Why did Linda decide to leave her well-paid position at the bank after working there for almost ten years? B: She wanted to start a new {{BLANK}} in graphic design, so she took evening classes for two years and finally opened her own small studio last month.",
    "cn": "A：琳達為什麼在銀行工作將近十年後，決定離開那份高薪的職位？ B：她想在平面設計領域展開新的【職業生涯】，所以她上了兩年的夜間課程，終於在上個月開了自己的小工作室。"
  },
  {
    "word": "profession",
    "pos": "n.",
    "cn_def": "專業；（需專業訓練的）職業",
    "en_def": "a job that needs special training, like doctor or lawyer",
    "sentence": "A: Your cousin always seems so busy, and I heard she rarely has time to join the family for dinner on weekends. B: That's true, because she works as a nurse, and the medical {{BLANK}} often requires long hours, night duty, and a lot of patience with patients and their families.",
    "cn": "A：你表姊似乎總是很忙，我聽說她週末很少有空和家人一起吃晚餐。 B：沒錯，因為她是護理師，而醫療【專業】常常需要長時間工作、值夜班，並且對病人和家屬要很有耐心。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work",
    "sentence": "A: Did you hear why the factory workers were so pleased when the manager spoke to them in the cafeteria this afternoon? B: Yes, their {{BLANK}} announced that every worker will receive a bonus at the end of the year because the company sold far more products than it expected.",
    "cn": "A：你有聽說今天下午經理在餐廳跟工廠工人講話時，他們為什麼那麼高興嗎？ B：有，他們的【雇主】宣布每位工人年底都會拿到獎金，因為公司賣出的產品遠遠超出預期。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工；受雇者",
    "en_def": "a person who is paid to work for a company or person",
    "sentence": "A: Who is the young man sitting at the front desk, and why is he reading the company handbook so carefully? B: He is a new {{BLANK}} in the accounting department, and he needs to learn our rules about holidays, sick leave, and expense reports before he starts working on real accounts.",
    "cn": "A：坐在前台的那位年輕人是誰？他為什麼這麼仔細地讀公司手冊？ B：他是會計部的新【員工】，在開始處理真正的帳目之前，他需要先了解我們關於假期、病假和費用報告的規定。"
  },
  {
    "word": "hire",
    "pos": "v.",
    "cn_def": "雇用；聘請",
    "en_def": "to give someone a job and pay them",
    "sentence": "A: The customer service team has been answering phone calls until late every night since the holiday sale began last week. B: I know, so the manager plans to {{BLANK}} three more assistants this month, and they will help us answer questions and handle orders until the busy season ends.",
    "cn": "A：自從上週假期特賣開始以來，客服團隊每天晚上都接電話接到很晚。 B：我知道，所以經理打算這個月再【雇用】三名助理，他們會幫我們回答問題、處理訂單，直到旺季結束。"
  },
  {
    "word": "recruit",
    "pos": "v.",
    "cn_def": "招募；招聘",
    "en_def": "to find new people to join a company or group",
    "sentence": "A: Why is our human resources manager traveling to so many universities around the country this spring? B: She wants to {{BLANK}} talented graduates for our new research center, so she is giving short talks to students and collecting their contact details at job fairs.",
    "cn": "A：我們的人資經理今年春天為什麼要跑全國這麼多所大學？ B：她想為我們新的研發中心【招募】有才華的畢業生，所以她在就業博覽會上對學生做簡短演講，並收集他們的聯絡資料。"
  },
  {
    "word": "apply",
    "pos": "v.",
    "cn_def": "申請；應徵",
    "en_def": "to ask formally for a job, usually in writing",
    "sentence": "A: I saw an advertisement for a marketing assistant position at the hotel near the station, but I'm not sure I have enough experience. B: You should still {{BLANK}} before the end of this week, because they said they will train the right person and the pay is quite good.",
    "cn": "A：我看到車站附近那家飯店在徵行銷助理，但我不確定自己的經驗夠不夠。 B：你還是應該在這週結束前去【應徵】，因為他們說會訓練合適的人選，而且薪水相當不錯。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "申請書；申請",
    "en_def": "a formal written request for a job",
    "sentence": "A: Have you finished all the paperwork for the designer position at that advertising agency in Taipei? B: Almost, I just need to attach a copy of my diploma to my {{BLANK}} and send it by email before the deadline at five o'clock this afternoon.",
    "cn": "A：你應徵台北那家廣告公司設計師職位的文件都準備好了嗎？ B：差不多了，我只需要把畢業證書影本附在我的【申請書】上，然後在今天下午五點截止前用電子郵件寄出。"
  },
  {
    "word": "resume",
    "pos": "n.",
    "cn_def": "履歷",
    "en_def": "a document listing your education and work history",
    "sentence": "A: The hiring manager said she would contact me if she wanted to meet, but what should I send her first? B: You should send her your {{BLANK}}, which clearly lists your education, your previous positions, and your computer abilities, along with a short cover letter about why you want the position.",
    "cn": "A：招聘經理說如果她想見面會跟我聯絡，但我應該先寄什麼給她？ B：你應該寄給她你的【履歷】，上面清楚列出你的學歷、過去的職位和電腦能力，再附上一封簡短的求職信，說明你為什麼想要這個職位。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試",
    "en_def": "a meeting where an employer asks a job seeker questions",
    "sentence": "A: You look very nervous this morning, and why are you wearing your best suit on a Tuesday? B: I have a job {{BLANK}} with a large shipping company at ten o'clock, and I want to make a good impression on the three managers who will ask me questions.",
    "cn": "A：你今天早上看起來很緊張，而且為什麼星期二就穿上你最好的西裝？ B：我十點要去一家大型航運公司求職【面試】，我想讓那三位要問我問題的經理留下好印象。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；學歷證書",
    "en_def": "an exam passed or a skill that makes you suitable for a job",
    "sentence": "A: Do you think Ken can get the position of head accountant at the new branch office? B: I'm not sure, because the most important {{BLANK}} for that role is a professional accounting certificate, and he is still studying for the final exam this year.",
    "cn": "A：你覺得肯能拿到新分公司首席會計師的職位嗎？ B：我不確定，因為那個職位最重要的【資格】是專業會計證照，而他今年還在準備最後一場考試。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well because of practice",
    "sentence": "A: Why did the manager choose Kevin to deal with the angry customers who called about the late deliveries? B: Kevin has a special {{BLANK}} for calming people down, so even when customers are upset, he can listen patiently and find a solution quickly.",
    "cn": "A：經理為什麼選凱文去處理那些因為延遲送貨而打電話來的生氣客戶？ B：凱文有讓人冷靜下來的特殊【技能】，所以即使客戶很不高興，他也能耐心傾聽並迅速找到解決辦法。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge you get from doing a job for some time",
    "sentence": "A: The new sales assistant seems to know exactly what to say when customers ask difficult questions about our products. B: That's because she has five years of {{BLANK}} working in a large electronics store, where she dealt with hundreds of shoppers and learned how to explain technical details simply.",
    "cn": "A：新來的銷售助理在客人問到產品的難題時，似乎總是知道該說什麼。 B：那是因為她有在大型電器行工作五年的【經驗】，在那裡她接待過數百位顧客，學會如何簡單地解釋技術細節。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；薪資",
    "en_def": "fixed money paid to a worker every month or year",
    "sentence": "A: Why is Tom thinking about leaving our company when he seems to enjoy working with everyone on the team? B: Another firm offered him a higher {{BLANK}}, so he would earn about twenty percent more each month and could finally save enough money to buy an apartment.",
    "cn": "A：湯姆似乎很喜歡和團隊的每個人一起工作，為什麼他在考慮離開公司？ B：另一家公司給他更高的【薪水】，所以他每個月大約可以多賺兩成，終於能存夠錢買一間公寓。"
  },
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "工資",
    "en_def": "money paid for work, usually by the hour or week",
    "sentence": "A: Why are so many students applying to work at the new coffee shop on the corner of our street? B: The owner pays a good hourly {{BLANK}}, and he also lets workers choose their own hours, so students can earn money without missing their classes.",
    "cn": "A：為什麼這麼多學生去應徵我們街角那家新咖啡店的工作？ B：老闆付的時薪【工資】不錯，而且還讓員工自己選上班時段，所以學生可以賺錢又不會錯過上課。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "福利",
    "en_def": "something extra a worker gets besides pay, such as insurance",
    "sentence": "A: Besides the monthly pay, why do you think so many people want to work for that large technology company? B: Free health insurance is a major {{BLANK}}, and staff members also get extra holidays, free lunches, and money to take training courses that help them improve.",
    "cn": "A：除了月薪之外，你覺得為什麼這麼多人想在那家大型科技公司上班？ B：免費健康保險是一項重要的【福利】，而且員工還有額外假期、免費午餐，以及參加進修課程的補助。"
  },
  {
    "word": "contract",
    "pos": "n.",
    "cn_def": "合約；契約",
    "en_def": "a legal written agreement between people or companies",
    "sentence": "A: Have you officially accepted the new position with the design firm, or are you still discussing the details? B: I'm meeting the manager tomorrow morning to sign the {{BLANK}}, which explains my working hours, my pay, and the length of time I agree to stay with the company.",
    "cn": "A：你正式接受那家設計公司的新職位了嗎？還是還在討論細節？ B：我明天早上要跟經理見面簽【合約】，上面說明了我的工作時數、薪資，以及我同意在公司待多久。"
  },
  {
    "word": "full-time",
    "pos": "adj.",
    "cn_def": "全職的",
    "en_def": "working the whole of a normal working week",
    "sentence": "A: Are you still working only three mornings a week at the bookstore, or has your schedule changed recently? B: The manager offered me a {{BLANK}} position last month, so now I work from nine to six, Monday to Friday, and I also get paid holidays and insurance.",
    "cn": "A：你還是一週只在書店上三個早上的班嗎？還是你的班表最近有改變？ B：經理上個月給了我一個【全職的】職位，所以我現在週一到週五從九點上到六點，還有帶薪假和保險。"
  },
  {
    "word": "part-time",
    "pos": "adj.",
    "cn_def": "兼職的",
    "en_def": "working only some hours or days of the week",
    "sentence": "A: How do you manage to study at the university and still pay for your rent and living costs every month? B: I have a {{BLANK}} job at a supermarket near my apartment, where I work about fifteen hours a week, mostly on weekends and some evenings.",
    "cn": "A：你是怎麼一邊在大學讀書，一邊每個月還能付房租和生活費的？ B：我在公寓附近的超市有一份【兼職的】工作，每週大約工作十五個小時，大多是週末和一些晚上。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "臨時的；暫時的",
    "en_def": "lasting only for a short time",
    "sentence": "A: Is the receptionist at the front desk new, because I haven't seen her before this week? B: She is only a {{BLANK}} worker from an agency, and she will help us for two months while our regular receptionist is away on maternity leave.",
    "cn": "A：前台的接待員是新來的嗎？我這週之前沒見過她。 B：她只是派遣公司派來的【臨時】員工，在我們的正職接待員休產假的這兩個月幫忙。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "長期的；永久的",
    "en_def": "lasting for a long time or without an end date",
    "sentence": "A: You've been working at the hotel as a trainee for six months now, so what happens after the training ends? B: If my manager is satisfied with my performance, the hotel will give me a {{BLANK}} position, which means I can stay as long as I want and receive full benefits.",
    "cn": "A：你在飯店當實習生已經六個月了，那訓練結束後會怎樣？ B：如果經理滿意我的表現，飯店就會給我一個【長期的】職位，這表示我可以想待多久就待多久，而且享有完整福利。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升遷；晉升",
    "en_def": "a move to a higher position at work",
    "sentence": "A: Why is everyone in the marketing department congratulating Sarah and bringing her flowers this morning? B: She got a {{BLANK}} to team leader because her advertising campaign doubled our online sales, so she will now manage six people and earn a higher salary.",
    "cn": "A：今天早上行銷部的大家為什麼都在恭喜莎拉，還送她花？ B：她【升遷】為組長了，因為她的廣告活動讓我們的網路銷售翻倍，所以她現在要管理六個人，薪水也更高。"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "cn_def": "調職；調動",
    "en_def": "to move someone to a different place or department for work",
    "sentence": "A: Why is David packing up all the files on his desk and saying goodbye to everyone in the office? B: The company decided to {{BLANK}} him to the new branch in Kaohsiung, where he will help train the local staff and manage the opening of the store next month.",
    "cn": "A：大衛為什麼在整理桌上所有的檔案，還跟辦公室的每個人道別？ B：公司決定把他【調】到高雄的新分店，他會在那裡協助訓練當地員工，並負責下個月的開幕事宜。"
  },
  {
    "word": "resign",
    "pos": "v.",
    "cn_def": "辭職",
    "en_def": "to leave your job by choice",
    "sentence": "A: Why did the sales director suddenly decide to leave the company after working here for fifteen years? B: He decided to {{BLANK}} because he wanted to spend more time with his family, so he gave the board a letter last week and will leave at the end of the month.",
    "cn": "A：業務總監在這裡工作了十五年，為什麼突然決定離開公司？ B：他決定【辭職】是因為想多陪陪家人，所以他上週向董事會遞了信，月底就會離開。"
  },
  {
    "word": "retire",
    "pos": "v.",
    "cn_def": "退休",
    "en_def": "to stop working because you have reached a certain age",
    "sentence": "A: Our factory supervisor has worked here for nearly forty years, so when is he planning to stop working? B: He will {{BLANK}} next spring when he turns sixty-five, and after that he wants to travel around Europe with his wife and spend more time in his garden.",
    "cn": "A：我們的工廠主管已經在這裡工作快四十年了，他打算什麼時候不做了？ B：他明年春天滿六十五歲時就會【退休】，之後他想和太太去歐洲旅行，並多花點時間在花園裡。"
  },
  {
    "word": "dismiss",
    "pos": "v.",
    "cn_def": "解僱；開除",
    "en_def": "to officially remove someone from their job",
    "sentence": "A: Why isn't the new cashier working at the supermarket anymore, when she only started two months ago? B: The manager had to {{BLANK}} her because she was often late, and she also made several serious mistakes with the money in the cash register.",
    "cn": "A：那位新收銀員才來兩個月，為什麼已經不在超市工作了？ B：經理不得不【解僱】她，因為她常常遲到，而且收銀機裡的錢她也出了好幾次嚴重的錯。"
  },
  {
    "word": "layoff",
    "pos": "n.",
    "cn_def": "裁員；資遣",
    "en_def": "the act of ending workers' jobs because there is not enough work",
    "sentence": "A: Why does everyone at the car factory look so worried, and why are there so many meetings this week? B: Sales have fallen sharply, so the company announced a {{BLANK}} of two hundred workers, and nobody knows yet which departments will lose people first.",
    "cn": "A：汽車工廠的大家為什麼看起來這麼擔心？這週為什麼開這麼多會議？ B：銷售量大幅下滑，所以公司宣布【裁員】兩百名工人，而且還沒有人知道哪些部門會先減少人手。"
  },
  {
    "word": "unemployment",
    "pos": "n.",
    "cn_def": "失業",
    "en_def": "the state of not having a job",
    "sentence": "A: Why are so many young people in this small town moving to big cities after they finish school? B: The {{BLANK}} rate here is very high because two factories closed last year, so it is difficult for graduates to find work, and many of them look for positions elsewhere.",
    "cn": "A：為什麼這個小鎮有這麼多年輕人畢業後搬到大城市？ B：這裡的【失業】率很高，因為去年有兩家工廠關閉了，所以畢業生很難找到工作，很多人只好到別處找職缺。"
  },
  {
    "word": "workforce",
    "pos": "n.",
    "cn_def": "勞動力；全體員工",
    "en_def": "all the people who work for a company or in a country",
    "sentence": "A: How many people does the new electronics factory near the airport employ now that it is fully open? B: Its {{BLANK}} has grown to about two thousand people, and most of them are local residents who work in production, quality control, and shipping.",
    "cn": "A：機場附近那家新的電子工廠全面開工後，現在雇用多少人？ B：它的【員工總數】已經增加到大約兩千人，其中大多數是在生產、品管和出貨部門工作的當地居民。"
  },
  {
    "word": "workplace",
    "pos": "n.",
    "cn_def": "工作場所；職場",
    "en_def": "the office, factory, or other place where people work",
    "sentence": "A: Why did the company add plants, comfortable chairs, and a small kitchen to the office last month? B: The managers want to create a friendlier {{BLANK}}, because they believe staff who feel relaxed and comfortable at work are more productive and less likely to leave.",
    "cn": "A：公司上個月為什麼在辦公室增加了植物、舒適的椅子和一間小廚房？ B：主管們想打造更友善的【工作環境】，因為他們相信在工作時感到放鬆舒適的員工更有效率，也比較不會離職。"
  },
  {
    "word": "shift",
    "pos": "n.",
    "cn_def": "班；輪班",
    "en_def": "a set period of work time, such as day or night",
    "sentence": "A: Can you cover for me at the restaurant on Saturday, because my sister is getting married that day? B: Sure, I can take your evening {{BLANK}}, which starts at five and finishes at midnight, if you agree to work my morning hours next Wednesday.",
    "cn": "A：星期六你可以幫我在餐廳代班嗎？因為我姊姊那天結婚。 B：當然，我可以幫你上晚【班】，從五點到半夜十二點，只要你同意下週三幫我上早上的時段。"
  },
  {
    "word": "overtime",
    "pos": "n.",
    "cn_def": "加班；加班時間",
    "en_def": "extra time worked after normal working hours",
    "sentence": "A: Why have you been coming home so late every night for the past two weeks? B: Our team has to finish a big order for an overseas client, so the manager asked us to put in a lot of {{BLANK}}, but at least the company pays us extra for every additional hour.",
    "cn": "A：過去兩週你為什麼每天晚上都這麼晚回家？ B：我們團隊必須完成一位海外客戶的大訂單，所以經理要我們大量【加班】，不過至少公司每多一小時都會付我們額外的錢。"
  },
  {
    "word": "probation",
    "pos": "n.",
    "cn_def": "試用期",
    "en_def": "a trial period at the start of a new job",
    "sentence": "A: Has the new office assistant become a regular employee yet, or is he still being evaluated by the manager? B: He is still on {{BLANK}} for the first three months, so his supervisor will check his work carefully before deciding whether to offer him a long-term position.",
    "cn": "A：新來的辦公室助理已經成為正式員工了嗎？還是經理還在評估他？ B：他前三個月還在【試用期】，所以他的主管會仔細檢查他的工作，再決定是否給他長期職位。"
  }
];

const MCQS = [
  {
    "q": "Maria left her _____ at the bank last spring. She now works as a sales manager for a small software company.",
    "options": [
      "job",
      "salary",
      "layoff",
      "resume"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "After twenty years in teaching, Helen started a new _____ in tourism. She now leads tour groups across Asia every month.",
    "options": [
      "wage",
      "career",
      "probation",
      "overtime"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The company was named the city's best _____ this year. It offers its staff flexible hours and free training courses.",
    "options": [
      "employee",
      "interview",
      "employer",
      "layoff"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Every new _____ must attend a safety training session in the first week. The session explains the rules for using the factory machines.",
    "options": [
      "employer",
      "salary",
      "wage",
      "employee"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The restaurant plans to _____ five more waiters before the summer season. The manager will hold interviews next Monday afternoon.",
    "options": [
      "retire",
      "hire",
      "resign",
      "dismiss"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The technology firm is visiting several universities to _____ young engineers. It hopes to fill thirty new positions by next June.",
    "options": [
      "recruit",
      "retire",
      "resign",
      "transfer"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Anyone who wants to _____ for the assistant position should send an email to the HR office. The deadline is this Friday.",
    "options": [
      "hire",
      "retire",
      "dismiss",
      "apply"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Please complete the online _____ form carefully and honestly. Incomplete forms will not be reviewed by the hiring committee.",
    "options": [
      "promotion",
      "probation",
      "application",
      "unemployment"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Your _____ should be no longer than two pages. Clearly list your education, work history, and computer skills on it.",
    "options": [
      "resume",
      "wage",
      "layoff",
      "workplace"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The candidates will have a second _____ with the general manager next week. She will ask them about their leadership experience.",
    "options": [
      "layoff",
      "wage",
      "interview",
      "workforce"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "A teaching certificate is the most important _____ for this position. Applicants without one will not be considered.",
    "options": [
      "layoff",
      "qualification",
      "overtime",
      "unemployment"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Applicants must have at least three years of _____ in customer service. Previous work in a hotel is a plus.",
    "options": [
      "probation",
      "unemployment",
      "layoff",
      "experience"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The company raised Jenny's annual _____ by ten percent this year. Her manager was very pleased with her sales results.",
    "options": [
      "shift",
      "resume",
      "salary",
      "layoff"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Free parking is one _____ that all our employees enjoy. The company also provides health insurance and paid holidays.",
    "options": [
      "benefit",
      "layoff",
      "resume",
      "shift"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Please read the _____ carefully before you sign it. It explains your working hours, pay, and holiday rights.",
    "options": [
      "workforce",
      "contract",
      "layoff",
      "promotion"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The store is looking for a _____ cashier who can work forty hours a week. Weekend work is also required.",
    "options": [
      "part-time",
      "jobless",
      "careless",
      "full-time"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Many students take _____ jobs for a few hours each evening. These jobs let them earn money while keeping their days free for classes.",
    "options": [
      "part-time",
      "full-time",
      "permanent",
      "retired"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "We need a _____ assistant for two months while Karen is on leave. The position will end when she returns in March.",
    "options": [
      "permanent",
      "retired",
      "unemployed",
      "temporary"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "After a six-month trial period, Mark was offered a _____ position. He can now stay with the firm as long as he wants.",
    "options": [
      "temporary",
      "permanent",
      "jobless",
      "retired"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Lisa received a _____ to department manager last week. She will now lead a team of twelve people.",
    "options": [
      "layoff",
      "resume",
      "promotion",
      "probation"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The bank will _____ Alan to its Tokyo branch next year. He is already taking Japanese lessons to prepare for the move.",
    "options": [
      "resign",
      "retire",
      "apply",
      "transfer"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Tina decided to _____ from her position after accepting a better offer. Her last day at the office will be Friday.",
    "options": [
      "resign",
      "hire",
      "recruit",
      "dismiss"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "My father plans to _____ at the age of sixty-five. He wants to spend more time traveling with my mother.",
    "options": [
      "hire",
      "recruit",
      "retire",
      "apply"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The manager had to _____ the driver for repeatedly arriving late. The company has strict rules about being on time.",
    "options": [
      "retire",
      "dismiss",
      "apply",
      "resign"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The factory announced a large _____ because of falling sales. About three hundred workers will lose their jobs next month.",
    "options": [
      "layoff",
      "promotion",
      "benefit",
      "salary"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The government created new training programs to reduce _____ among young people. Many graduates still cannot find work.",
    "options": [
      "promotion",
      "unemployment",
      "workplace",
      "contract"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The company wants to make the _____ safer for all staff. New fire exits and first-aid kits will be installed this month.",
    "options": [
      "salary",
      "layoff",
      "resume",
      "workplace"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Nurses at this hospital work a twelve-hour _____ three days a week. Many of them prefer this schedule to shorter workdays.",
    "options": [
      "career",
      "resume",
      "shift",
      "layoff"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Staff will be paid for any _____ they do during the holiday season. Please record your extra hours on the timesheet.",
    "options": [
      "probation",
      "overtime",
      "layoff",
      "unemployment"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "New staff members are on _____ for their first three months. Their supervisors review their work before offering long-term contracts.",
    "options": [
      "unemployment",
      "workforce",
      "promotion",
      "probation"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "job": {
    "pos": "n.",
    "en_def": "work that you do regularly to earn money",
    "cn_def": "工作；職業"
  },
  "occupation": {
    "pos": "n.",
    "en_def": "a person's job or type of work",
    "cn_def": "職業"
  },
  "career": {
    "pos": "n.",
    "en_def": "the series of jobs a person has over a long time",
    "cn_def": "職業生涯；事業"
  },
  "profession": {
    "pos": "n.",
    "en_def": "a job that needs special training, like doctor or lawyer",
    "cn_def": "專業；（需專業訓練的）職業"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work",
    "cn_def": "雇主"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company or person",
    "cn_def": "員工；受雇者"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job and pay them",
    "cn_def": "雇用；聘請"
  },
  "recruit": {
    "pos": "v.",
    "en_def": "to find new people to join a company or group",
    "cn_def": "招募；招聘"
  },
  "apply": {
    "pos": "v.",
    "en_def": "to ask formally for a job, usually in writing",
    "cn_def": "申請；應徵"
  },
  "application": {
    "pos": "n.",
    "en_def": "a formal written request for a job",
    "cn_def": "申請書；申請"
  },
  "resume": {
    "pos": "n.",
    "en_def": "a document listing your education and work history",
    "cn_def": "履歷"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a meeting where an employer asks a job seeker questions",
    "cn_def": "面試"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an exam passed or a skill that makes you suitable for a job",
    "cn_def": "資格；學歷證書"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well because of practice",
    "cn_def": "技能；技巧"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge you get from doing a job for some time",
    "cn_def": "經驗"
  },
  "salary": {
    "pos": "n.",
    "en_def": "fixed money paid to a worker every month or year",
    "cn_def": "薪水；薪資"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid for work, usually by the hour or week",
    "cn_def": "工資"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "something extra a worker gets besides pay, such as insurance",
    "cn_def": "福利"
  },
  "contract": {
    "pos": "n.",
    "en_def": "a legal written agreement between people or companies",
    "cn_def": "合約；契約"
  },
  "full-time": {
    "pos": "adj.",
    "en_def": "working the whole of a normal working week",
    "cn_def": "全職的"
  },
  "part-time": {
    "pos": "adj.",
    "en_def": "working only some hours or days of the week",
    "cn_def": "兼職的"
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting only for a short time",
    "cn_def": "臨時的；暫時的"
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "lasting for a long time or without an end date",
    "cn_def": "長期的；永久的"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher position at work",
    "cn_def": "升遷；晉升"
  },
  "transfer": {
    "pos": "v.",
    "en_def": "to move someone to a different place or department for work",
    "cn_def": "調職；調動"
  },
  "resign": {
    "pos": "v.",
    "en_def": "to leave your job by choice",
    "cn_def": "辭職"
  },
  "retire": {
    "pos": "v.",
    "en_def": "to stop working because you have reached a certain age",
    "cn_def": "退休"
  },
  "dismiss": {
    "pos": "v.",
    "en_def": "to officially remove someone from their job",
    "cn_def": "解僱；開除"
  },
  "layoff": {
    "pos": "n.",
    "en_def": "the act of ending workers' jobs because there is not enough work",
    "cn_def": "裁員；資遣"
  },
  "unemployment": {
    "pos": "n.",
    "en_def": "the state of not having a job",
    "cn_def": "失業"
  },
  "workforce": {
    "pos": "n.",
    "en_def": "all the people who work for a company or in a country",
    "cn_def": "勞動力；全體員工"
  },
  "workplace": {
    "pos": "n.",
    "en_def": "the office, factory, or other place where people work",
    "cn_def": "工作場所；職場"
  },
  "shift": {
    "pos": "n.",
    "en_def": "a set period of work time, such as day or night",
    "cn_def": "班；輪班"
  },
  "overtime": {
    "pos": "n.",
    "en_def": "extra time worked after normal working hours",
    "cn_def": "加班；加班時間"
  },
  "probation": {
    "pos": "n.",
    "en_def": "a trial period at the start of a new job",
    "cn_def": "試用期"
  }
};

const EXTRA_GLOSSES = {};
