// Topic 163 Quiz Data: Habits 習慣
// Source word list: https://www.examword.com/group-topic/habits — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T163 - Habits 習慣",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "a regular way of doing things in a fixed order",
    "sentence": "A: Since you started working from home last month, how do you keep yourself organized when there is nobody around to remind you about meetings and deadlines? B: I follow a simple morning {{BLANK}}: I make coffee, check my email at eight, write a to-do list, and then start the most difficult task before lunch.",
    "cn": "A：自從你上個月開始在家工作，沒有人提醒你開會和截止日期，你怎麼讓自己保持有條理？ B：我遵循一套簡單的早晨【例行程序】：泡咖啡、八點檢查電子郵件、寫待辦清單，然後在午餐前先處理最困難的工作。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "慣例；習慣做法",
    "en_def": "something that is usually or regularly done, often as a rule",
    "sentence": "A: Why does our manager always ask everyone to save their files to the shared drive before they leave the office on Friday afternoons? B: It is standard {{BLANK}} in our department, because last year a laptop was stolen and we lost two weeks of important client reports that nobody had copied anywhere else.",
    "cn": "A：為什麼我們經理總是要求大家週五下午離開辦公室前把檔案存到共用硬碟？ B：這是我們部門的標準【慣例】，因為去年有一台筆電被偷，我們損失了兩週沒有人另外備份的重要客戶報告。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗；風俗",
    "en_def": "a traditional way of behaving that a group of people accepts",
    "sentence": "A: I am visiting our partner company in Japan next week for the first time, so is there anything special I should know before I meet their managers? B: It is a local {{BLANK}} to exchange business cards with both hands and a small bow, so bring plenty of cards and read each one carefully before putting it away.",
    "cn": "A：我下週第一次去拜訪我們在日本的合作公司，在和他們的經理見面前有什麼特別要知道的嗎？ B：用雙手交換名片並微微鞠躬是當地的【習俗】，所以要帶足夠的名片，並在收起來之前仔細看過每一張。"
  },
  {
    "word": "pattern",
    "pos": "n.",
    "cn_def": "模式；規律",
    "en_def": "a regular way in which something happens again and again",
    "sentence": "A: Have you looked at the sales figures from our online store over the past six months, and did you notice anything interesting about when customers buy the most? B: Yes, there is a clear {{BLANK}}: orders rise sharply on Sunday evenings, so the marketing team plans to send its weekly discount emails on Sunday afternoons from now on.",
    "cn": "A：你看過我們網路商店過去六個月的銷售數字嗎？有沒有注意到顧客什麼時候買最多？ B：有，有一個很明顯的【模式】：訂單在週日晚上大幅增加，所以行銷團隊打算從現在開始在週日下午寄出每週折扣郵件。"
  },
  {
    "word": "behavior",
    "pos": "n.",
    "cn_def": "行為；舉止",
    "en_def": "the way a person acts",
    "sentence": "A: Why did the hotel manager call a meeting with all the front desk staff this morning before the busy holiday weekend begins? B: A guest complained about rude {{BLANK}} at check-in last night, so she wanted to remind everyone to stay polite and patient, even when guests are tired and angry after long flights.",
    "cn": "A：為什麼飯店經理今天早上在忙碌的假日週末開始前，召集所有櫃檯人員開會？ B：昨晚有位客人抱怨入住時遇到無禮的【行為】，所以她想提醒大家，即使客人在長途飛行後又累又生氣，也要保持禮貌和耐心。"
  },
  {
    "word": "tendency",
    "pos": "n.",
    "cn_def": "傾向；趨勢",
    "en_def": "a habit of acting in a certain way",
    "sentence": "A: Is there anything I should be careful about when I take over the team's weekly reports from Daniel, who is moving to the Singapore office next month? B: He had a {{BLANK}} to leave everything until Friday night, so I suggest you start collecting the numbers on Wednesday to avoid working late at the end of the week.",
    "cn": "A：我從下個月要調到新加坡辦公室的丹尼爾手上接手團隊週報時，有什麼需要注意的嗎？ B：他有把所有事情拖到週五晚上的【傾向】，所以我建議你週三就開始收集數字，以免週末前加班到很晚。"
  },
  {
    "word": "addiction",
    "pos": "n.",
    "cn_def": "成癮；沉迷",
    "en_def": "a strong need to keep doing or using something that is hard to stop",
    "sentence": "A: Why has the company decided to block social media websites on office computers during working hours starting next Monday? B: A recent survey showed that many employees spent over two hours a day online, and the HR manager believes this {{BLANK}} to phones and the internet is hurting productivity and team communication.",
    "cn": "A：為什麼公司決定從下週一開始，上班時間在辦公室電腦上封鎖社群網站？ B：最近一項調查顯示，許多員工每天上網超過兩小時，人資經理認為這種對手機和網路的【成癮】正在損害生產力和團隊溝通。"
  },
  {
    "word": "ritual",
    "pos": "n.",
    "cn_def": "儀式；例行習慣",
    "en_def": "something you always do in the same way, often at a special time",
    "sentence": "A: I noticed that the whole sales team meets in the staff lounge every Monday at nine with coffee and pastries, so is that an official meeting? B: Not really, it is more like a weekly {{BLANK}}: we share our goals, celebrate last week's deals, and enjoy a few minutes together before the phones start ringing.",
    "cn": "A：我注意到整個業務團隊每週一九點會帶著咖啡和點心在員工休息室集合，那是正式會議嗎？ B：其實不算，比較像是每週的【儀式】：我們分享目標、慶祝上週談成的生意，並在電話開始響之前一起享受幾分鐘。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "自律；紀律",
    "en_def": "the ability to control yourself and keep working in an organized way",
    "sentence": "A: How did you manage to finish your online accounting course while working full-time and taking care of two young children at home? B: It took a lot of {{BLANK}}, because I studied for one hour every night after the kids went to bed, even when I was tired or wanted to watch TV instead.",
    "cn": "A：你是怎麼一邊全職工作、一邊在家照顧兩個小孩，還完成線上會計課程的？ B：這需要很大的【自律】，因為我每天晚上孩子睡了以後都讀書一小時，即使累了或想看電視也一樣。"
  },
  {
    "word": "consistency",
    "pos": "n.",
    "cn_def": "一致性；持續性",
    "en_def": "the quality of always doing something in the same good way",
    "sentence": "A: Our coffee shop has three branches now, so why do customers still sometimes complain that the latte tastes different at each location? B: We need more {{BLANK}} in training, so next month every barista will attend the same workshop and follow the same recipe card to make sure each drink tastes exactly the same.",
    "cn": "A：我們的咖啡店現在有三家分店，為什麼顧客有時還會抱怨每家店的拿鐵味道不同？ B：我們的訓練需要更多【一致性】，所以下個月每位咖啡師都會參加同一個工作坊，並按照同一張配方卡，確保每杯飲料的味道完全相同。"
  },
  {
    "word": "repetition",
    "pos": "n.",
    "cn_def": "重複；反覆",
    "en_def": "doing or saying the same thing many times",
    "sentence": "A: What is the best way for new staff members to remember the long list of product codes we use when we take orders over the phone? B: The key is {{BLANK}}: they should read the codes aloud, write them down every morning, and use them in role-play calls until they can recall each one without checking the list.",
    "cn": "A：新進員工要記住我們電話接單時使用的一長串產品代碼，最好的方法是什麼？ B：關鍵在於【反覆練習】：他們應該大聲唸出代碼、每天早上寫下來，並在角色扮演的通話中使用，直到不看清單也能記起每一個。"
  },
  {
    "word": "lifestyle",
    "pos": "n.",
    "cn_def": "生活方式",
    "en_def": "the way a person lives",
    "sentence": "A: Why did you decide to sell your car and start riding a bicycle to the office, even on rainy days when the roads are wet and slippery? B: My doctor told me that I needed a healthier {{BLANK}}, so I am trying to exercise more, eat less fast food, and spend less time sitting in traffic every morning.",
    "cn": "A：你為什麼決定賣掉車子改騎腳踏車上班，連路面濕滑的雨天也一樣？ B：醫生告訴我需要更健康的【生活方式】，所以我正努力多運動、少吃速食，並減少每天早上塞在車陣中的時間。"
  },
  {
    "word": "adopt",
    "pos": "v.",
    "cn_def": "採用；養成",
    "en_def": "to start using a new method, idea or habit",
    "sentence": "A: Our team keeps missing deadlines because people forget what tasks they were given at our meetings, so do you have any suggestions? B: I think we should {{BLANK}} a new system where every task is written in an online planner with a name and due date, so everyone can check their responsibilities at any time.",
    "cn": "A：我們團隊一直錯過截止日期，因為大家會忘記開會時被分配了哪些任務，你有什麼建議嗎？ B：我認為我們應該【採用】新的系統，把每項任務連同負責人和截止日期寫在線上規劃表中，讓每個人隨時都能查看自己的職責。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "培養；發展",
    "en_def": "to make something grow or become stronger over time",
    "sentence": "A: You always seem so calm and prepared at our monthly client presentations, so were you naturally good at public speaking when you joined the firm? B: Not at all, I was very nervous at first, but I managed to {{BLANK}} the habit of rehearsing in front of a mirror three times before every important meeting.",
    "cn": "A：你在每月的客戶簡報中總是看起來很冷靜、準備充分，你剛進公司時就天生擅長公開演講嗎？ B：完全不是，我一開始非常緊張，但我設法【養成】了在每次重要會議前對著鏡子排練三次的習慣。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維持；保持",
    "en_def": "to keep something at the same level or in good condition",
    "sentence": "A: Now that the busy holiday season is over and many of our customers have gone back to normal spending, how will we keep our profits up? B: We plan to {{BLANK}} strong relationships with our loyal customers by sending personal thank-you notes and offering small discounts on their birthdays throughout the coming year.",
    "cn": "A：既然忙碌的假期季節已經結束，許多顧客的消費也恢復正常，我們要怎麼維持利潤？ B：我們打算在接下來的一年裡寄送親筆感謝卡並在顧客生日時提供小折扣，以【維持】和忠實顧客的良好關係。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "培養；建立",
    "en_def": "to develop a skill, attitude or relationship carefully over time",
    "sentence": "A: How does your company help young employees become future leaders, since many of them have never managed a team before? B: We {{BLANK}} their leadership skills slowly by giving them small projects first, pairing them with experienced mentors, and letting them lead short meetings before they take charge of larger departments.",
    "cn": "A：你們公司如何幫助年輕員工成為未來的領導者？因為他們之中許多人從沒管理過團隊。 B：我們會先給他們小型專案、安排資深導師陪伴，並讓他們主持簡短會議，慢慢【培養】他們的領導能力，之後才讓他們負責較大的部門。"
  },
  {
    "word": "break",
    "pos": "v.",
    "cn_def": "改掉；打破（習慣）",
    "en_def": "to stop doing something that you have done for a long time",
    "sentence": "A: You used to drink four cans of soda every afternoon at your desk, but I haven't seen you with one for weeks, so what changed? B: I wanted to {{BLANK}} that bad habit before my health check in March, so I replaced the soda with green tea and now keep a large water bottle next to my computer.",
    "cn": "A：你以前每天下午都在座位上喝四罐汽水，但我已經好幾週沒看到你拿汽水了，發生什麼事了？ B：我想在三月健康檢查之前【改掉】那個壞習慣，所以我用綠茶取代汽水，現在還在電腦旁邊放一大瓶水。"
  },
  {
    "word": "reinforce",
    "pos": "v.",
    "cn_def": "強化；加強",
    "en_def": "to make an idea, feeling, habit or structure stronger",
    "sentence": "A: Why does the safety manager send a short reminder email about wearing helmets in the warehouse every single Monday, even though everyone already knows the rule? B: She says weekly reminders {{BLANK}} safe habits, and since the warehouse started doing this, the number of minor accidents has dropped by almost half compared with last year.",
    "cn": "A：為什麼安全經理每個星期一都會寄一封關於在倉庫戴安全帽的簡短提醒信，即使大家都已經知道這項規定？ B：她說每週的提醒能【強化】安全習慣，自從倉庫開始這麼做，小事故的數量和去年相比已經減少了將近一半。"
  },
  {
    "word": "automatic",
    "pos": "adj.",
    "cn_def": "自動的；不假思索的",
    "en_def": "done without thinking because you have done it many times; working by itself",
    "sentence": "A: How long did it take you to remember all the steps for locking up the store, setting the alarm, and checking the back door at closing time? B: About a month, but now the whole process is completely {{BLANK}} for me, so I can do it quickly without looking at the checklist taped beside the door.",
    "cn": "A：你花了多久才記住打烊時鎖店、設定警報和檢查後門的所有步驟？ B：大約一個月，但現在整個過程對我來說完全是【自動的】，所以我不用看貼在門旁的檢查表就能快速完成。"
  },
  {
    "word": "regular",
    "pos": "adj.",
    "cn_def": "規律的；定期的；經常的",
    "en_def": "happening often or at fixed times",
    "sentence": "A: Our new accountant seems very tired every morning, so do you think the long hours at the end of the quarter are causing problems for her? B: Probably, she told me she hasn't had {{BLANK}} sleep for weeks, so I suggested she ask the manager whether she could finish earlier on some evenings next week.",
    "cn": "A：我們的新會計每天早上看起來都很累，你覺得是季末的長時間工作造成她的困擾嗎？ B：大概是，她告訴我她已經好幾週沒有【規律的】睡眠了，所以我建議她問問經理，下週是否有幾個晚上可以早點下班。"
  },
  {
    "word": "daily",
    "pos": "adj.",
    "cn_def": "每日的",
    "en_def": "happening or done every day",
    "sentence": "A: How do the managers at your hotel keep track of guest complaints and room problems when there are different staff working each shift? B: Every supervisor writes a short {{BLANK}} report before going home, and the general manager reads all of them each morning so nothing important is forgotten or ignored.",
    "cn": "A：你們飯店每班的員工都不同，經理們如何追蹤房客的抱怨和客房問題？ B：每位主管下班前都會寫一份簡短的【每日】報告，總經理每天早上都會閱讀全部報告，這樣就不會遺忘或忽略任何重要的事。"
  },
  {
    "word": "habitual",
    "pos": "adj.",
    "cn_def": "習慣性的",
    "en_def": "done often, as a habit",
    "sentence": "A: Why is the store manager planning to have a serious talk with Kevin this afternoon, since he seems friendly and works hard during his shifts? B: The problem is that he is a {{BLANK}} latecomer who has arrived after nine almost every day this month, and other cashiers have had to cover the counter for him.",
    "cn": "A：店長為什麼打算今天下午和凱文認真談談？他看起來很友善，上班時也很努力。 B：問題是他是個【習慣性】遲到的人，這個月幾乎每天都在九點之後才到，其他收銀員只好替他顧櫃台。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；有生產力的",
    "en_def": "getting a lot of useful work done",
    "sentence": "A: You seem to finish your reports much faster now than you did last year, so what has changed in the way you plan your working day? B: I do my hardest tasks first thing in the morning because that is when I am most {{BLANK}}, and I leave emails and phone calls until after lunch.",
    "cn": "A：你現在完成報告的速度似乎比去年快很多，你安排工作日的方式有什麼改變嗎？ B：我會在一大早先處理最困難的工作，因為那是我最【有生產力】的時候，而電子郵件和電話則留到午餐後再處理。"
  },
  {
    "word": "unhealthy",
    "pos": "adj.",
    "cn_def": "不健康的",
    "en_def": "not good for your health",
    "sentence": "A: Why did the company replace the snack machine on the third floor with a fridge full of fresh fruit and yogurt last week? B: The HR team noticed that many employees were eating chips and candy every afternoon, and they wanted to reduce these {{BLANK}} eating habits and help people stay healthier at work.",
    "cn": "A：為什麼公司上週把三樓的零食販賣機換成裝滿新鮮水果和優格的冰箱？ B：人資團隊注意到許多員工每天下午都在吃洋芋片和糖果，他們想減少這些【不健康的】飲食習慣，幫助大家在上班時保持更健康。"
  },
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的",
    "en_def": "having a good or helpful effect",
    "sentence": "A: Do you really think the short walking meetings that our department started last month are worth continuing during the cold winter months? B: Yes, they have been very {{BLANK}} for everyone, because people feel more awake, share ideas more freely, and the meetings rarely last longer than twenty minutes now.",
    "cn": "A：你真的認為我們部門上個月開始的簡短散步會議，在寒冷的冬季也值得繼續嗎？ B：是的，這對大家都非常【有益】，因為大家覺得更清醒、更自在地分享想法，而且現在會議很少超過二十分鐘。"
  },
  {
    "word": "mindful",
    "pos": "adj.",
    "cn_def": "留意的；注意的",
    "en_def": "aware of something and careful about it",
    "sentence": "A: How can we keep the office pleasant next month when the new design team moves into the open area right next to our desks? B: We should all be {{BLANK}} of noise levels, keep phone calls short, and use the meeting rooms for long conversations so that everyone else can concentrate on their work.",
    "cn": "A：下個月新的設計團隊搬進我們座位旁的開放區時，我們要怎麼讓辦公室保持舒適？ B：我們都應該【留意】音量、講電話簡短一點，長時間的談話就到會議室進行，讓其他人可以專心工作。"
  },
  {
    "word": "gradually",
    "pos": "adv.",
    "cn_def": "逐漸地",
    "en_def": "slowly over a period of time",
    "sentence": "A: Will the new rule about using reusable cups instead of paper cups in the staff kitchen start for everyone on the first day of next month? B: No, the company will introduce it {{BLANK}}: first the managers will try it for two weeks, then each department will join one by one until the whole building is involved.",
    "cn": "A：員工茶水間用環保杯取代紙杯的新規定，會從下個月第一天開始對所有人實施嗎？ B：不會，公司會【逐漸地】推行：先由經理們試行兩週，然後各部門依序加入，直到整棟大樓都參與。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常地",
    "en_def": "often and at fixed times",
    "sentence": "A: The printer on the second floor broke down again this morning, so how can we stop this from happening every few weeks? B: The technician said it needs to be cleaned and checked {{BLANK}}, so I have booked him to visit on the first Monday of every month starting in December.",
    "cn": "A：二樓的印表機今天早上又壞了，我們要怎麼避免每隔幾週就發生一次？ B：技術人員說它需要【定期】清潔和檢查，所以我已經預約他從十二月起每個月第一個週一來一次。"
  },
  {
    "word": "frequently",
    "pos": "adv.",
    "cn_def": "經常地；頻繁地",
    "en_def": "often",
    "sentence": "A: Why has the customer service team created a new page on the company website with short answers about shipping, returns, and payments? B: Customers {{BLANK}} call us with the same simple questions, so the page should save time for both our staff and the people who just want quick answers.",
    "cn": "A：客服團隊為什麼在公司網站上新增一個頁面，提供關於運送、退貨和付款的簡短解答？ B：顧客【經常】打電話來問同樣簡單的問題，所以這個頁面應該能為我們的員工和只想快速得到答案的人節省時間。"
  },
  {
    "word": "consistently",
    "pos": "adv.",
    "cn_def": "一貫地；始終如一地",
    "en_def": "always in the same way or at the same good level",
    "sentence": "A: Why did the board choose Ms. Chen as the new regional manager instead of someone with more years of experience at the company? B: Her team has {{BLANK}} reached its sales targets every quarter for three years, and the directors trust her to bring the same steady results to the whole region.",
    "cn": "A：為什麼董事會選陳小姐擔任新的區域經理，而不是在公司資歷更久的人？ B：她的團隊三年來每季都【始終如一地】達成銷售目標，董事們相信她能為整個地區帶來同樣穩定的成果。"
  },
  {
    "word": "consciously",
    "pos": "adv.",
    "cn_def": "有意識地",
    "en_def": "knowing what you are doing; on purpose",
    "sentence": "A: How did you stop interrupting your coworkers during meetings, since you used to do it so often that people complained to the manager? B: I {{BLANK}} reminded myself to wait three seconds after others stopped talking, and after a few weeks I found it much easier to listen patiently before giving my opinion.",
    "cn": "A：你以前開會時常打斷同事，甚至有人向經理抱怨，你是怎麼改掉的？ B：我【有意識地】提醒自己在別人說完話後等三秒，幾週後我發現在發表意見前耐心傾聽變得容易多了。"
  },
  {
    "word": "intentionally",
    "pos": "adv.",
    "cn_def": "故意地；刻意地",
    "en_def": "on purpose; not by accident",
    "sentence": "A: I printed the annual report for the board meeting, but page twelve is completely empty, so should I ask the design team to fix it? B: No need, that page was left blank {{BLANK}}, because the next section starts on the right-hand page, which is how most printed company reports are arranged.",
    "cn": "A：我為董事會會議印了年度報告，但第十二頁完全空白，要請設計團隊修正嗎？ B：不用，那頁是【刻意】留白的，因為下一節從右頁開始，大多數印刷的公司報告都是這樣安排的。"
  },
  {
    "word": "eventually",
    "pos": "adv.",
    "cn_def": "最後；終於",
    "en_def": "in the end, after a long time",
    "sentence": "A: Was it difficult to get your team to use the new project software, since many of them had used spreadsheets for more than ten years? B: At first they complained a lot, but {{BLANK}} they saw how much time it saved, and now nobody wants to go back to the old way of tracking tasks.",
    "cn": "A：要讓你的團隊使用新的專案軟體很困難嗎？他們之中很多人用試算表已經十多年了。 B：一開始他們抱怨很多，但【最後】他們看到它省了多少時間，現在沒有人想回到以前追蹤任務的舊方法。"
  }
];

const MCQS = [
  {
    "q": "After joining the gym, Mark changed his evening _____ completely. He now exercises at six and eats dinner afterward at home.",
    "options": [
      "addiction",
      "consistency",
      "routine",
      "repetition"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Checking references before hiring new staff is common _____ in most large firms. It helps managers avoid costly mistakes.",
    "options": [
      "practice",
      "addiction",
      "lifestyle",
      "repetition"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "In many Asian countries, it is a _____ to remove your shoes before entering a home. Visitors should follow this tradition politely.",
    "options": [
      "pattern",
      "discipline",
      "consistency",
      "custom"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The analyst studied last year's data and found a clear _____ in customer complaints. Most of them came in on Monday mornings.",
    "options": [
      "ritual",
      "pattern",
      "custom",
      "discipline"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The new employee handbook explains what kind of _____ is expected in the office. Shouting at colleagues will not be tolerated.",
    "options": [
      "behavior",
      "lifestyle",
      "repetition",
      "addiction"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Ms. Lin has a _____ to speak too quickly during presentations. Her manager advised her to slow down and pause more often.",
    "options": [
      "routine",
      "custom",
      "tendency",
      "lifestyle"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The clinic offers free counseling for people struggling with gambling _____. Many patients have recovered after six months of support.",
    "options": [
      "consistency",
      "addiction",
      "pattern",
      "ritual"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The festival begins with an ancient _____ in which villagers light candles at the temple. Tourists are welcome to watch quietly.",
    "options": [
      "discipline",
      "addiction",
      "consistency",
      "ritual"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Saving money every month takes a lot of _____. Ms. Park avoids shopping online so that she can stick to her budget.",
    "options": [
      "pattern",
      "custom",
      "discipline",
      "repetition"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Customers return to the café because of the _____ of its service. The coffee tastes just as good on every single visit.",
    "options": [
      "addiction",
      "consistency",
      "tendency",
      "ritual"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Language teachers believe that _____ helps students remember new vocabulary. Learners should review each word several times a week.",
    "options": [
      "repetition",
      "addiction",
      "behavior",
      "custom"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "After moving to the countryside, the Wangs enjoy a slower and quieter _____. They grow vegetables and rarely drive into the city.",
    "options": [
      "tendency",
      "discipline",
      "addiction",
      "lifestyle"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The factory decided to _____ new safety procedures after the accident last spring. All workers must now attend monthly training.",
    "options": [
      "break",
      "adopt",
      "cultivate",
      "maintain"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The company plans to _____ a new mobile app for its customers next year. The design team will begin work in January.",
    "options": [
      "break",
      "reinforce",
      "develop",
      "cultivate"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Workers must _____ a temperature below five degrees in the storage room. Otherwise, the fresh seafood will spoil very quickly.",
    "options": [
      "maintain",
      "break",
      "cultivate",
      "adopt"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Farmers in this valley _____ rice and tea on the hillsides. Their products are sold in markets across the whole region.",
    "options": [
      "break",
      "reinforce",
      "adopt",
      "cultivate"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Mr. Hsu tried hard to _____ his habit of checking emails during dinner. His family was happy when he finally put his phone away.",
    "options": [
      "adopt",
      "break",
      "develop",
      "cultivate"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Workers added steel bars to _____ the old bridge before winter. Engineers say it can now carry heavier trucks safely.",
    "options": [
      "reinforce",
      "adopt",
      "cultivate",
      "break"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The doors at the hotel entrance are _____ and open as soon as guests approach. This helps people carrying heavy luggage.",
    "options": [
      "unhealthy",
      "mindful",
      "automatic",
      "productive"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Ms. Kao is one of the bakery's most _____ customers. She comes in every morning to buy bread and a cup of coffee.",
    "options": [
      "automatic",
      "unhealthy",
      "mindful",
      "regular"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The manager reads the _____ sales report every morning before the store opens. It shows how much each section sold yesterday.",
    "options": [
      "daily",
      "mindful",
      "unhealthy",
      "beneficial"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The workshop was very _____, and the team finished planning the whole project in one afternoon. Everyone left feeling satisfied.",
    "options": [
      "unhealthy",
      "productive",
      "automatic",
      "mindful"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Doctors warn that sitting at a desk for ten hours a day is very _____. Employees should stand up and stretch every hour.",
    "options": [
      "productive",
      "mindful",
      "automatic",
      "unhealthy"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The new partnership will be mutually _____ for both companies. Each side will gain access to new customers in Asia.",
    "options": [
      "unhealthy",
      "automatic",
      "beneficial",
      "mindful"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Passengers should be _____ of others and keep their voices down on the train. Phone calls are not allowed in the quiet carriage.",
    "options": [
      "productive",
      "mindful",
      "automatic",
      "beneficial"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Sales rose _____ over the year as more people learned about the brand. By December, they had nearly doubled.",
    "options": [
      "gradually",
      "consciously",
      "intentionally",
      "frequently"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Please back up your computer files _____ to avoid losing important work. The IT team recommends doing this once a week.",
    "options": [
      "gradually",
      "intentionally",
      "regularly",
      "eventually"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Please read our list of _____ asked questions before contacting the help desk. Most common problems are explained there.",
    "options": [
      "gradually",
      "intentionally",
      "eventually",
      "frequently"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "This page of the user manual has been _____ left blank. The next chapter begins on the following page.",
    "options": [
      "intentionally",
      "gradually",
      "frequently",
      "eventually"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The negotiations lasted for several months, but the two firms _____ reached an agreement. The contract will be signed next Tuesday.",
    "options": [
      "frequently",
      "eventually",
      "regularly",
      "intentionally"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "routine": {
    "pos": "n.",
    "en_def": "a regular way of doing things in a fixed order",
    "cn_def": "例行公事；慣例"
  },
  "practice": {
    "pos": "n.",
    "en_def": "something that is usually or regularly done, often as a rule",
    "cn_def": "慣例；習慣做法"
  },
  "custom": {
    "pos": "n.",
    "en_def": "a traditional way of behaving that a group of people accepts",
    "cn_def": "習俗；風俗"
  },
  "pattern": {
    "pos": "n.",
    "en_def": "a regular way in which something happens again and again",
    "cn_def": "模式；規律"
  },
  "behavior": {
    "pos": "n.",
    "en_def": "the way a person acts",
    "cn_def": "行為；舉止"
  },
  "tendency": {
    "pos": "n.",
    "en_def": "a habit of acting in a certain way",
    "cn_def": "傾向；趨勢"
  },
  "addiction": {
    "pos": "n.",
    "en_def": "a strong need to keep doing or using something that is hard to stop",
    "cn_def": "成癮；沉迷"
  },
  "ritual": {
    "pos": "n.",
    "en_def": "something you always do in the same way, often at a special time",
    "cn_def": "儀式；例行習慣"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the ability to control yourself and keep working in an organized way",
    "cn_def": "自律；紀律"
  },
  "consistency": {
    "pos": "n.",
    "en_def": "the quality of always doing something in the same good way",
    "cn_def": "一致性；持續性"
  },
  "repetition": {
    "pos": "n.",
    "en_def": "doing or saying the same thing many times",
    "cn_def": "重複；反覆"
  },
  "lifestyle": {
    "pos": "n.",
    "en_def": "the way a person lives",
    "cn_def": "生活方式"
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to start using a new method, idea or habit",
    "cn_def": "採用；養成"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to make something grow or become stronger over time",
    "cn_def": "培養；發展"
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to keep something at the same level or in good condition",
    "cn_def": "維持；保持"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to develop a skill, attitude or relationship carefully over time",
    "cn_def": "培養；建立"
  },
  "break": {
    "pos": "v.",
    "en_def": "to stop doing something that you have done for a long time",
    "cn_def": "改掉；打破（習慣）"
  },
  "reinforce": {
    "pos": "v.",
    "en_def": "to make an idea, feeling, habit or structure stronger",
    "cn_def": "強化；加強"
  },
  "automatic": {
    "pos": "adj.",
    "en_def": "done without thinking because you have done it many times; working by itself",
    "cn_def": "自動的；不假思索的"
  },
  "regular": {
    "pos": "adj.",
    "en_def": "happening often or at fixed times",
    "cn_def": "規律的；定期的；經常的"
  },
  "daily": {
    "pos": "adj.",
    "en_def": "happening or done every day",
    "cn_def": "每日的"
  },
  "habitual": {
    "pos": "adj.",
    "en_def": "done often, as a habit",
    "cn_def": "習慣性的"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "getting a lot of useful work done",
    "cn_def": "有成效的；有生產力的"
  },
  "unhealthy": {
    "pos": "adj.",
    "en_def": "not good for your health",
    "cn_def": "不健康的"
  },
  "beneficial": {
    "pos": "adj.",
    "en_def": "having a good or helpful effect",
    "cn_def": "有益的"
  },
  "mindful": {
    "pos": "adj.",
    "en_def": "aware of something and careful about it",
    "cn_def": "留意的；注意的"
  },
  "gradually": {
    "pos": "adv.",
    "en_def": "slowly over a period of time",
    "cn_def": "逐漸地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often and at fixed times",
    "cn_def": "定期地；經常地"
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "often",
    "cn_def": "經常地；頻繁地"
  },
  "consistently": {
    "pos": "adv.",
    "en_def": "always in the same way or at the same good level",
    "cn_def": "一貫地；始終如一地"
  },
  "consciously": {
    "pos": "adv.",
    "en_def": "knowing what you are doing; on purpose",
    "cn_def": "有意識地"
  },
  "intentionally": {
    "pos": "adv.",
    "en_def": "on purpose; not by accident",
    "cn_def": "故意地；刻意地"
  },
  "eventually": {
    "pos": "adv.",
    "en_def": "in the end, after a long time",
    "cn_def": "最後；終於"
  }
};

const EXTRA_GLOSSES = {};
