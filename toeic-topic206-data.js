// Topic 206 Quiz Data: Job 工作
// Source word list: https://www.examword.com/group-topic/job — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T206 - Job 工作",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "a job or type of work that someone does for a long time",
    "sentence": "A: Why did Daniel decide to leave the bank after working there for almost ten years, even though everyone said he was doing very well? B: He told me he wanted to start a new {{BLANK}} in marketing, because he enjoys working with creative people and believes the industry offers more chances to grow.",
    "cn": "A：為什麼丹尼爾在銀行工作將近十年後決定離開，即使大家都說他表現得很好？ B：他告訴我他想在行銷領域展開新的【職業生涯】，因為他喜歡和有創意的人一起工作，而且相信這個產業提供更多成長的機會。"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "cn_def": "職業",
    "en_def": "a person's job",
    "sentence": "A: The form for the new health insurance plan asks a lot of personal questions, so what should I write in the box near the bottom of the second page? B: Just write your {{BLANK}}, which in your case is accountant, and then add the name of our company and the city where our main office is located.",
    "cn": "A：新健康保險方案的表格問了很多個人問題，那我在第二頁底部附近的欄位裡應該填什麼？ B：只要寫你的【職業】就好，以你的情況來說就是會計師，然後再加上我們公司的名稱和總公司所在的城市。"
  },
  {
    "word": "profession",
    "pos": "n.",
    "cn_def": "（需專業訓練的）職業；專業",
    "en_def": "a job that needs special training or education",
    "sentence": "A: Your sister has been working at the city hospital for many years now, so does she still enjoy taking care of patients during those long night hours? B: Yes, she says nursing is a difficult {{BLANK}} because the hours are long and the work is stressful, but helping sick people recover makes her feel proud every single day.",
    "cn": "A：你姊姊在市立醫院工作很多年了，她還喜歡在那些漫長的夜間時段照顧病人嗎？ B：是的，她說護理是一個辛苦的【專業職業】，因為工時長、工作壓力大，但幫助病人康復讓她每天都感到驕傲。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業；工作",
    "en_def": "paid work; the state of having a job",
    "sentence": "A: Since the new car factory opened outside the town last spring, have you noticed any changes in the local shops and restaurants downtown? B: Definitely, the factory has provided stable {{BLANK}} for more than two thousand people, so families have more money to spend and many stores are busier than they have been in years.",
    "cn": "A：自從新的汽車工廠去年春天在鎮外開幕後，你有注意到市中心的商店和餐廳有什麼改變嗎？ B：當然有，這家工廠為兩千多人提供了穩定的【就業機會】，所以家庭有更多錢可以花，很多商店比這幾年都還要忙碌。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work",
    "sentence": "A: Did you finally get the letter you needed for your apartment rental application, or is the landlord still waiting for it? B: I got it yesterday, because my {{BLANK}} wrote a short note confirming that I have worked at the company for three years and that my monthly income is stable and reliable.",
    "cn": "A：你終於拿到租公寓申請需要的那封信了嗎？還是房東還在等？ B：我昨天拿到了，因為我的【雇主】寫了一張簡短的證明，確認我已經在公司工作三年，而且我的月收入穩定可靠。"
  },
  {
    "word": "employee",
    "pos": "n.",
    "cn_def": "員工；受僱者",
    "en_def": "a person who is paid to work for a company or person",
    "sentence": "A: Why is the human resources department handing out gift cards and small thank-you notes at the front entrance this morning? B: The company wants to thank every {{BLANK}} for the hard work during the busy holiday season, because sales were much higher than expected and the customers gave us excellent reviews.",
    "cn": "A：為什麼人力資源部今天早上在正門發放禮物卡和小感謝卡？ B：公司想要感謝每一位【員工】在忙碌的假期旺季中的辛勤工作，因為銷售額比預期高很多，顧客也給了我們很棒的評價。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；薪資",
    "en_def": "a fixed amount of money paid for work, usually every month",
    "sentence": "A: You seemed really excited after your phone call with the director, so did the company agree to your request after your performance review last week? B: Yes, they agreed to raise my {{BLANK}} by ten percent starting next month, so I can finally afford to move into a bigger apartment closer to the office.",
    "cn": "A：你和主任通完電話後看起來很興奮，公司在上週績效考核後同意你的要求了嗎？ B：是的，他們同意從下個月開始把我的【薪水】調高百分之十，所以我終於負擔得起搬到離辦公室更近、更大的公寓了。"
  },
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "工資",
    "en_def": "money paid for work, usually by the hour or week",
    "sentence": "A: Why are so many students applying for jobs at the new coffee shop on Main Street instead of the restaurants near the university? B: The owner pays an hourly {{BLANK}} that is higher than most other places in town, and he also gives his workers free meals and flexible hours during exam periods.",
    "cn": "A：為什麼這麼多學生去應徵主街上那家新咖啡店的工作，而不是大學附近的餐廳？ B：老闆付的時薪【工資】比鎮上大部分地方都高，而且考試期間他也提供員工免費餐點和彈性工時。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入",
    "en_def": "money that a person receives, especially from work",
    "sentence": "A: Your brother used to work only at the bookstore, so why does he now spend his weekends teaching guitar lessons at the community center? B: He wants some extra {{BLANK}} because he and his wife are saving money to buy a house next year, and the lessons pay quite well for just a few hours.",
    "cn": "A：你哥哥以前只在書店工作，為什麼他現在週末都在社區中心教吉他課？ B：他想要一些額外的【收入】，因為他和太太正在存錢明年要買房子，而且這些課只要幾個小時，報酬就相當不錯。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試",
    "en_def": "a formal meeting where someone is asked questions to see if they are right for a job",
    "sentence": "A: You look really nervous this morning, and I noticed you are wearing a suit instead of your usual jeans, so is something important happening today? B: I have a job {{BLANK}} with a large software company at two o'clock, and I have been practicing answers to common questions with my roommate all week.",
    "cn": "A：你今天早上看起來很緊張，我還注意到你穿了西裝而不是平常的牛仔褲，今天有什麼重要的事嗎？ B：我兩點要去一家大型軟體公司參加工作【面試】，這整個星期我都在和室友練習回答常見的問題。"
  },
  {
    "word": "resume",
    "pos": "n.",
    "cn_def": "履歷",
    "en_def": "a short document listing your education and work history",
    "sentence": "A: I am going to apply for the sales assistant position at the department store, but could you look at my documents before I send them tomorrow? B: Sure, but your {{BLANK}} is four pages long, so you should shorten it to one page and list your most recent jobs and language skills at the top.",
    "cn": "A：我要應徵百貨公司的銷售助理職位，可以請你在我明天寄出之前看一下我的文件嗎？ B：當然，不過你的【履歷】有四頁長，你應該把它縮短成一頁，並把最近的工作和語言能力列在最上面。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "申請；申請書",
    "en_def": "a formal written request for a job, place, etc.",
    "sentence": "A: Have you heard anything from the airline about the customer service job you wanted, or are you still waiting for an answer? B: Not yet, they told me they are still reviewing every {{BLANK}} because more than five hundred people applied, so it may take another two weeks before I hear back.",
    "cn": "A：你應徵的那個航空公司客服工作有消息了嗎？還是你還在等回覆？ B：還沒有，他們說因為有五百多人應徵，所以還在審查每一份【申請書】，可能還要再兩週我才會收到回音。"
  },
  {
    "word": "hire",
    "pos": "v.",
    "cn_def": "僱用",
    "en_def": "to give someone a job and pay them",
    "sentence": "A: The customer service team has been answering phones until eight o'clock every night this month, so is the company going to do anything about it? B: Yes, the director has decided to {{BLANK}} three more workers next month, which should reduce our workload and allow everyone to go home at a normal time again.",
    "cn": "A：客服團隊這個月每天晚上都接電話接到八點，公司會採取什麼措施嗎？ B：會，主任已決定下個月再【僱用】三名員工，這應該可以減輕我們的工作量，讓大家能再次準時下班。"
  },
  {
    "word": "recruit",
    "pos": "v.",
    "cn_def": "招募；招聘",
    "en_def": "to find new people to work for a company",
    "sentence": "A: Why are people from the hotel group setting up a booth at the university job fair this weekend? B: They hope to {{BLANK}} young graduates who speak at least two languages, because the hotel is opening three new branches in Asia and needs friendly staff for the front desk.",
    "cn": "A：為什麼飯店集團的人這個週末要在大學就業博覽會設攤位？ B：他們希望【招募】至少會說兩種語言的年輕畢業生，因為飯店要在亞洲開三家新分店，需要親切的櫃檯人員。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升遷；升職",
    "en_def": "a move to a higher position at work",
    "sentence": "A: Why is everyone in the accounting department bringing cake and balloons to Linda's desk this afternoon? B: She just got a {{BLANK}} to senior accountant after five years of excellent work, so we are celebrating before she moves to her new office on the tenth floor next Monday.",
    "cn": "A：為什麼會計部的大家今天下午都帶蛋糕和氣球到琳達的座位？ B：她在五年的優秀表現後剛【升職】為資深會計師，所以我們在她下週一搬到十樓新辦公室之前幫她慶祝。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "培訓；訓練",
    "en_def": "the process of learning the skills needed for a job",
    "sentence": "A: The new cashiers started on Monday, but they still seem confused about the computer system and the return policy, so what should we do? B: Let's give them two more days of {{BLANK}} with an experienced staff member, so they can practice handling refunds before they work alone at the busy front counter.",
    "cn": "A：新收銀員星期一開始上班，但他們對電腦系統和退貨政策似乎還很困惑，我們該怎麼辦？ B：讓他們跟著一位有經驗的員工再接受兩天【培訓】，這樣他們在獨自站忙碌的前台櫃檯之前就能練習處理退款。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing a job for some time",
    "sentence": "A: There were many people who applied for the restaurant manager job, so why did the owner choose Peter Chen over the others? B: Peter has more than fifteen years of {{BLANK}} running busy kitchens in hotels, so the owner believes he can handle large groups and train the young cooks well.",
    "cn": "A：有很多人應徵餐廳經理的工作，為什麼老闆選了陳彼得而不是其他人？ B：彼得有十五年以上在飯店管理忙碌廚房的【經驗】，所以老闆相信他能應付大型團體，也能好好訓練年輕廚師。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well, learned through practice",
    "sentence": "A: The job advertisement for the office assistant position lists many requirements, so which one do you think is the most important? B: Communication is the most useful {{BLANK}} for that role, because the assistant must answer calls, write clear emails, and explain problems politely to customers who are often upset.",
    "cn": "A：辦公室助理職位的徵才廣告列了很多條件，你覺得哪一項最重要？ B：溝通是那個職位最有用的【技能】，因為助理必須接電話、寫清楚的電子郵件，並禮貌地向常常心情不好的顧客解釋問題。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；資歷",
    "en_def": "a skill, degree, or experience that makes you suitable for a job",
    "sentence": "A: Can I apply for the accounting job at the bank even though I studied history at university and have never worked with numbers? B: Unfortunately, the most important {{BLANK}} for that job is a degree in finance or accounting, so you might need to take some evening courses before you send your documents.",
    "cn": "A：即使我大學念的是歷史，也從沒處理過數字，我還能應徵銀行的會計工作嗎？ B：很遺憾，那份工作最重要的【資格條件】是財務或會計學位，所以你在寄出文件之前可能需要去上一些夜間課程。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "職責；責任",
    "en_def": "a duty that is part of your job",
    "sentence": "A: Now that you have moved from the sales team to the customer service department, what exactly do you do every day? B: My main {{BLANK}} is handling complaints from customers by phone and email, and I also need to report any common problems to the product team every Friday afternoon.",
    "cn": "A：既然你從業務團隊調到客服部門了，你每天具體做些什麼？ B：我主要的【職責】是透過電話和電子郵件處理顧客的抱怨，而且每週五下午我還需要把常見的問題回報給產品團隊。"
  },
  {
    "word": "task",
    "pos": "n.",
    "cn_def": "任務；工作",
    "en_def": "a piece of work that you have to do",
    "sentence": "A: The new intern seems to finish everything very quickly, so what should I ask her to do this afternoon while the team is in the meeting? B: You could give her the {{BLANK}} of organizing the customer files and updating the contact list, because that job is simple but needs careful attention to detail.",
    "cn": "A：新來的實習生似乎每件事都做得很快，團隊開會時我今天下午該請她做什麼？ B：你可以交給她整理顧客檔案和更新聯絡人名單的【任務】，因為那份工作很簡單，但需要細心注意細節。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the time or date by which something must be finished",
    "sentence": "A: Why are all the designers still working in the office so late tonight, even though most people went home hours ago? B: The {{BLANK}} for the new advertising campaign is tomorrow morning at nine, so they must finish all the posters and videos before the client arrives for the final presentation.",
    "cn": "A：為什麼所有設計師今晚還在辦公室工作到這麼晚，即使大部分人幾個小時前就回家了？ B：新廣告活動的【截止期限】是明天早上九點，所以他們必須在客戶來參加最後簡報之前完成所有的海報和影片。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "行程表；時間表",
    "en_def": "a plan of times when things will happen",
    "sentence": "A: Will you be able to join the planning meeting with the clients from Japan on Thursday afternoon at two o'clock? B: Let me check my {{BLANK}} first, because I think I have a training session that afternoon, but if it ends early I will come straight to the meeting room on the fifth floor.",
    "cn": "A：你星期四下午兩點能參加和日本客戶的規劃會議嗎？ B：讓我先看看我的【行程表】，因為我想那天下午我有一場培訓課程，不過如果它提早結束，我會直接到五樓的會議室。"
  },
  {
    "word": "shift",
    "pos": "n.",
    "cn_def": "輪班；班",
    "en_def": "a period of time when a group of people work",
    "sentence": "A: You look really tired today, so did you stay up late watching movies again, or is something else keeping you awake at night? B: No, I worked the night {{BLANK}} at the hospital from ten until six this morning, and I only slept for two hours before I came here for our lunch.",
    "cn": "A：你今天看起來好累，你又熬夜看電影了嗎？還是有別的事讓你晚上睡不著？ B：不是，我在醫院上了從十點到今天早上六點的夜【班】，在來這裡吃午餐之前只睡了兩個小時。"
  },
  {
    "word": "overtime",
    "pos": "n.",
    "cn_def": "加班；加班時間",
    "en_def": "extra time worked after your normal hours",
    "sentence": "A: Why have you been leaving the office after nine o'clock every evening this month, when you usually go home at six? B: Our team is preparing for the big product launch, so we have been doing a lot of {{BLANK}}, but at least the company pays us extra for every additional hour we spend there.",
    "cn": "A：為什麼你這個月每天晚上都九點以後才離開辦公室，你平常六點就回家了？ B：我們團隊正在準備大型產品發表會，所以我們一直在大量【加班】，但至少公司會為每多待的一小時付我們額外的錢。"
  },
  {
    "word": "colleague",
    "pos": "n.",
    "cn_def": "同事",
    "en_def": "a person you work with",
    "sentence": "A: Who was the woman you were having lunch with at the Italian restaurant across the street yesterday afternoon? B: That was Maria, a {{BLANK}} from the marketing department, and we were discussing ideas for the new advertising campaign that our two teams are working on together this month.",
    "cn": "A：昨天下午你在對街義大利餐廳一起吃午餐的那位女士是誰？ B：那是瑪麗亞，行銷部的一位【同事】，我們在討論這個月兩個團隊合作的新廣告活動的點子。"
  },
  {
    "word": "supervisor",
    "pos": "n.",
    "cn_def": "主管；監督者",
    "en_def": "a person who watches and directs workers",
    "sentence": "A: I need to leave work two hours early on Friday to take my son to the dentist, so who should I ask for permission? B: You should talk to your {{BLANK}} first, because she makes the weekly work plan for our team and can find someone to cover your duties at the front desk.",
    "cn": "A：我星期五需要提早兩個小時下班帶兒子去看牙醫，我該向誰請示？ B：你應該先跟你的【主管】談，因為她負責安排我們團隊的每週工作計畫，也能找人接替你在櫃檯的職務。"
  },
  {
    "word": "manager",
    "pos": "n.",
    "cn_def": "經理",
    "en_def": "a person in charge of a business, store, or team",
    "sentence": "A: A customer just called to complain that his order arrived broken for the second time, and he wants to speak with someone in charge. B: Please transfer the call to the store {{BLANK}}, because she has the authority to offer a full refund or send a replacement by express delivery today.",
    "cn": "A：有位顧客剛打電話來抱怨他的訂單第二次送到時是壞的，他想跟負責人說話。 B：請把電話轉給店【經理】，因為她有權提供全額退款，或今天用快遞寄送替換品。"
  },
  {
    "word": "workplace",
    "pos": "n.",
    "cn_def": "工作場所；職場",
    "en_def": "the place where people work",
    "sentence": "A: Why did the company spend so much money on new chairs, plants, and a bright break room with a coffee machine this year? B: The directors believe that a comfortable {{BLANK}} helps people stay healthy and happy, and they hope it will also reduce the number of staff who quit each year.",
    "cn": "A：為什麼公司今年花這麼多錢買新椅子、植物，還弄了一間有咖啡機的明亮休息室？ B：董事們相信舒適的【工作場所】能幫助大家保持健康和快樂，他們也希望這能減少每年離職的員工人數。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "suitable for work; showing good skill and behavior at work",
    "sentence": "A: I have a meeting with an important client from London tomorrow, but I am not sure what kind of clothes I should wear. B: You should wear something {{BLANK}}, like a dark suit and clean shoes, because first impressions matter a lot and the client will judge our company by how we look.",
    "cn": "A：我明天要和一位來自倫敦的重要客戶開會，但我不確定該穿什麼樣的衣服。 B：你應該穿得【專業】一點，像是深色西裝和乾淨的鞋子，因為第一印象很重要，客戶會從我們的外表來評價我們公司。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "暫時的；臨時的",
    "en_def": "lasting for only a short time",
    "sentence": "A: Is Kevin going to stay in our office permanently, or will he go back to the head office after the busy season is over? B: His job here is only {{BLANK}}, because he is replacing Susan while she is on maternity leave, so he will return to the head office in March.",
    "cn": "A：凱文會一直待在我們辦公室嗎？還是旺季結束後他會回總公司？ B：他在這裡的工作只是【暫時的】，因為他是在蘇珊請產假期間代替她，所以他三月就會回總公司了。"
  },
  {
    "word": "full-time",
    "pos": "adj.",
    "cn_def": "全職的",
    "en_def": "working the full number of hours in a normal work week",
    "sentence": "A: You have been working at the bakery only on weekends for two years, so are you planning to continue like that after graduation? B: No, the owner offered me a {{BLANK}} job starting in July, so I will work forty hours a week and also receive health insurance and paid vacation days.",
    "cn": "A：你這兩年都只在週末在麵包店工作，你畢業後打算繼續這樣嗎？ B：不，老闆提供我一份從七月開始的【全職】工作，所以我每週會工作四十小時，還會有健康保險和帶薪假。"
  },
  {
    "word": "part-time",
    "pos": "adj.",
    "cn_def": "兼職的",
    "en_def": "working only some of the hours in a normal work week",
    "sentence": "A: How do you manage to pay for your university fees and your rent while you are still studying every day? B: I have a {{BLANK}} job at a convenience store near campus, where I work twenty hours a week, mostly in the evenings after my classes are finished.",
    "cn": "A：你每天還在讀書，是怎麼付得起大學學費和房租的？ B：我在校園附近的便利商店有一份【兼職】工作，每週工作二十小時，大多是在下課後的晚上。"
  },
  {
    "word": "efficiently",
    "pos": "adv.",
    "cn_def": "有效率地",
    "en_def": "in a quick and well-organized way, without wasting time",
    "sentence": "A: How did the new warehouse team manage to ship all the holiday orders two days earlier than last year? B: They organized the shelves by product type and used a new computer system, so they could work much more {{BLANK}} and pack hundreds of boxes every hour without making mistakes.",
    "cn": "A：新的倉庫團隊是怎麼做到比去年提早兩天寄出所有節日訂單的？ B：他們依照產品類型整理貨架並使用新的電腦系統，所以能夠更有【效率地】工作，每小時打包數百個箱子而不出錯。"
  }
];

const MCQS = [
  {
    "q": "After working as a teacher for twenty years, Mina Park changed her _____ completely. She now runs a small travel agency in Busan.",
    "options": [
      "career",
      "wage",
      "deadline",
      "colleague"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please write your name, address, and _____ on the visitor form. Security staff need this information before guests enter the building.",
    "options": [
      "overtime",
      "promotion",
      "occupation",
      "deadline"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Law is a demanding _____ that requires years of study. Many lawyers work long hours during their first years at large firms.",
    "options": [
      "wage",
      "profession",
      "overtime",
      "income"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new shopping mall will provide _____ for about eight hundred local residents. Most of the positions will be in retail and food service.",
    "options": [
      "qualification",
      "deadline",
      "colleague",
      "employment"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Ellen Wong's _____ paid for her evening business course. In return, she agreed to stay with the company for at least two more years.",
    "options": [
      "employee",
      "employer",
      "occupation",
      "resume"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Every new _____ must wear an ID badge while inside the factory. Visitors receive a different badge at the reception desk.",
    "options": [
      "employee",
      "employer",
      "deadline",
      "salary"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The position offers a competitive annual _____ and four weeks of paid vacation. Interested candidates should apply before the end of the month.",
    "options": [
      "shift",
      "task",
      "career",
      "salary"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The government raised the minimum _____ by five percent this year. Many restaurant workers will now earn more money for each hour they work.",
    "options": [
      "profession",
      "deadline",
      "wage",
      "resume"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Renting out the extra room provides the Lee family with a second source of _____. They plan to use the money for their children's education.",
    "options": [
      "income",
      "deadline",
      "interview",
      "shift"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The hotel invited Ken Tanaka for a second _____ next Tuesday. This time he will meet the general manager and answer questions in English.",
    "options": [
      "application",
      "interview",
      "promotion",
      "overtime"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Please attach an updated _____ to your email when you apply. It should include your education, work history, and any language certificates.",
    "options": [
      "salary",
      "colleague",
      "resume",
      "workplace"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "We received your _____ for the position of sales assistant. Our HR team will contact you within ten working days.",
    "options": [
      "occupation",
      "employer",
      "deadline",
      "application"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The bakery plans to _____ two more bakers before the holiday season. The owner expects orders to double in December.",
    "options": [
      "resign",
      "delay",
      "hire",
      "borrow"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Tech companies often visit university campuses to _____ talented engineering students. Some students receive job offers months before they graduate.",
    "options": [
      "recruit",
      "resign",
      "retire",
      "complain"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "After three years of excellent sales results, Jenny received a _____ to regional manager. She will now lead a team of fifteen people.",
    "options": [
      "wage",
      "promotion",
      "shift",
      "resume"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "All new staff must complete two weeks of safety _____ before using the machines. The course is held in the factory's second-floor classroom.",
    "options": [
      "income",
      "salary",
      "career",
      "training"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Applicants must have at least three years of _____ in customer service. Previous work in a hotel or airline is a plus.",
    "options": [
      "experience",
      "deadline",
      "employer",
      "wage"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Typing quickly is a useful _____ for anyone who works at a reception desk. Our receptionists enter dozens of visitor records every day.",
    "options": [
      "wage",
      "employer",
      "skill",
      "deadline"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "A nursing license is the main _____ for this hospital position. Candidates without one cannot be considered, even with years of experience.",
    "options": [
      "promotion",
      "overtime",
      "workplace",
      "qualification"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Checking the daily sales reports is the store manager's _____. She must send a summary to the head office every evening.",
    "options": [
      "income",
      "responsibility",
      "interview",
      "wage"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The _____ for submitting travel expense reports is the last Friday of each month. Late reports will be processed the following month.",
    "options": [
      "salary",
      "colleague",
      "deadline",
      "career"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Due to the snowstorm, the conference _____ has been changed. The opening speech will now begin at eleven instead of nine.",
    "options": [
      "wage",
      "schedule",
      "employee",
      "resume"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Factory workers on the morning _____ start at six o'clock. They usually finish just after lunch and go home early.",
    "options": [
      "shift",
      "salary",
      "career",
      "application"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The accounting team worked a lot of _____ during tax season. The company paid them one and a half times their normal rate.",
    "options": [
      "workplace",
      "resume",
      "colleague",
      "overtime"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "I'd like you to meet my _____, Peter Grant, from the finance department. We have worked together on many projects since 2019.",
    "options": [
      "salary",
      "colleague",
      "deadline",
      "occupation"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "If you need to change your working hours, please speak to your _____ first. She is responsible for the team's weekly plan.",
    "options": [
      "income",
      "resume",
      "workplace",
      "supervisor"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The company installed better lights and quieter air conditioners to improve the _____. Staff now say the office feels more comfortable.",
    "options": [
      "deadline",
      "interview",
      "workplace",
      "qualification"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The store is hiring _____ staff for the holiday season only. These positions will end on January fifth.",
    "options": [
      "temporary",
      "permanent",
      "annual",
      "generous"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Many university students take _____ jobs in the evenings to pay their rent. Most of them work fewer than twenty hours a week.",
    "options": [
      "full-time",
      "senior",
      "permanent",
      "part-time"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The new software helps the warehouse team work more _____. Orders that took two days to process now take only a few hours.",
    "options": [
      "slowly",
      "efficiently",
      "rarely",
      "loudly"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "career": {
    "pos": "n.",
    "en_def": "a job or type of work that someone does for a long time",
    "cn_def": "職業生涯；事業"
  },
  "occupation": {
    "pos": "n.",
    "en_def": "a person's job",
    "cn_def": "職業"
  },
  "profession": {
    "pos": "n.",
    "en_def": "a job that needs special training or education",
    "cn_def": "（需專業訓練的）職業；專業"
  },
  "employment": {
    "pos": "n.",
    "en_def": "paid work; the state of having a job",
    "cn_def": "就業；工作"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work",
    "cn_def": "雇主"
  },
  "employee": {
    "pos": "n.",
    "en_def": "a person who is paid to work for a company or person",
    "cn_def": "員工；受僱者"
  },
  "salary": {
    "pos": "n.",
    "en_def": "a fixed amount of money paid for work, usually every month",
    "cn_def": "薪水；薪資"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid for work, usually by the hour or week",
    "cn_def": "工資"
  },
  "income": {
    "pos": "n.",
    "en_def": "money that a person receives, especially from work",
    "cn_def": "收入"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a formal meeting where someone is asked questions to see if they are right for a job",
    "cn_def": "面試"
  },
  "resume": {
    "pos": "n.",
    "en_def": "a short document listing your education and work history",
    "cn_def": "履歷"
  },
  "application": {
    "pos": "n.",
    "en_def": "a formal written request for a job, place, etc.",
    "cn_def": "申請；申請書"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job and pay them",
    "cn_def": "僱用"
  },
  "recruit": {
    "pos": "v.",
    "en_def": "to find new people to work for a company",
    "cn_def": "招募；招聘"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher position at work",
    "cn_def": "升遷；升職"
  },
  "training": {
    "pos": "n.",
    "en_def": "the process of learning the skills needed for a job",
    "cn_def": "培訓；訓練"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing a job for some time",
    "cn_def": "經驗"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well, learned through practice",
    "cn_def": "技能；技巧"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "a skill, degree, or experience that makes you suitable for a job",
    "cn_def": "資格；資歷"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty that is part of your job",
    "cn_def": "職責；責任"
  },
  "task": {
    "pos": "n.",
    "en_def": "a piece of work that you have to do",
    "cn_def": "任務；工作"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the time or date by which something must be finished",
    "cn_def": "截止期限"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan of times when things will happen",
    "cn_def": "行程表；時間表"
  },
  "shift": {
    "pos": "n.",
    "en_def": "a period of time when a group of people work",
    "cn_def": "輪班；班"
  },
  "overtime": {
    "pos": "n.",
    "en_def": "extra time worked after your normal hours",
    "cn_def": "加班；加班時間"
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a person who watches and directs workers",
    "cn_def": "主管；監督者"
  },
  "manager": {
    "pos": "n.",
    "en_def": "a person in charge of a business, store, or team",
    "cn_def": "經理"
  },
  "workplace": {
    "pos": "n.",
    "en_def": "the place where people work",
    "cn_def": "工作場所；職場"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "suitable for work; showing good skill and behavior at work",
    "cn_def": "專業的"
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting for only a short time",
    "cn_def": "暫時的；臨時的"
  },
  "full-time": {
    "pos": "adj.",
    "en_def": "working the full number of hours in a normal work week",
    "cn_def": "全職的"
  },
  "part-time": {
    "pos": "adj.",
    "en_def": "working only some of the hours in a normal work week",
    "cn_def": "兼職的"
  },
  "efficiently": {
    "pos": "adv.",
    "en_def": "in a quick and well-organized way, without wasting time",
    "cn_def": "有效率地"
  }
};

const EXTRA_GLOSSES = {};
