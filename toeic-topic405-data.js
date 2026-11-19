// Topic 405 Quiz Data: Time 時間
// Source word list: https://www.examword.com/group-topic/time — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T405 - Time 時間",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "second",
    "pos": "n.",
    "cn_def": "秒",
    "en_def": "a very short unit of time; one sixtieth of a minute",
    "sentence": "A: How fast does the new online payment system process an order compared with the old one we used last year? B: It is much quicker now, because each payment takes only about one {{BLANK}} to confirm, so customers rarely complain about waiting at the checkout page anymore.",
    "cn": "A：和我們去年用的舊系統相比，新的線上付款系統處理一筆訂單有多快？ B：現在快多了，因為每筆付款只需要大約一【秒】就能確認，所以顧客幾乎不再抱怨在結帳頁面等待了。"
  },
  {
    "word": "minute",
    "pos": "n.",
    "cn_def": "分鐘",
    "en_def": "a unit of time equal to sixty seconds",
    "sentence": "A: Do you think we still have enough time to grab a coffee before the client meeting starts in the main conference room? B: I'm afraid not, because the receptionist just told me the clients arrived early, and the meeting will start in about one {{BLANK}}, so we should go upstairs right away and get our laptops ready.",
    "cn": "A：你覺得在主會議室的客戶會議開始前，我們還有時間去買杯咖啡嗎？ B：恐怕沒有，因為接待員剛告訴我客戶提早到了，會議大約一【分鐘】後就要開始，所以我們應該馬上上樓把筆電準備好。"
  },
  {
    "word": "hour",
    "pos": "n.",
    "cn_def": "小時",
    "en_def": "a unit of time equal to sixty minutes",
    "sentence": "A: How long will it take the technicians to repair the broken air conditioner in the sales office this afternoon? B: They said the job should take about an {{BLANK}}, so the sales team can work in the meeting room until the office cools down again and everyone feels comfortable at their desks.",
    "cn": "A：技術人員今天下午修理業務辦公室壞掉的冷氣要花多久時間？ B：他們說這項工作大約需要一個【小時】，所以業務團隊可以先在會議室工作，直到辦公室再次涼下來、大家坐在座位上覺得舒服為止。"
  },
  {
    "word": "day",
    "pos": "n.",
    "cn_def": "天；日",
    "en_def": "a period of twenty-four hours; the part of it when people work",
    "sentence": "A: When will the replacement parts for the printing machine arrive at our factory, and will production be delayed? B: The supplier promised that the parts will be delivered within one working {{BLANK}}, so production should start again by Thursday afternoon without any serious problems for our customers.",
    "cn": "A：印刷機的替換零件什麼時候會送到我們工廠，生產會不會延誤？ B：供應商承諾零件會在一個工作【天】內送達，所以生產應該在星期四下午前就能恢復，不會對我們的客戶造成嚴重問題。"
  },
  {
    "word": "week",
    "pos": "n.",
    "cn_def": "週；星期",
    "en_def": "a period of seven days",
    "sentence": "A: How often does the marketing team meet to review sales figures and discuss new advertising ideas for our products? B: We usually meet once a {{BLANK}}, every Monday morning, so that everyone can share updates, solve problems together, and plan their tasks for the next few days.",
    "cn": "A：行銷團隊多久開一次會，檢討銷售數字並討論我們產品的新廣告點子？ B：我們通常每【週】開一次會，在每個星期一早上，好讓大家分享最新進度、一起解決問題，並規劃接下來幾天的工作。"
  },
  {
    "word": "month",
    "pos": "n.",
    "cn_def": "月",
    "en_def": "one of the twelve periods that a year is divided into",
    "sentence": "A: Has the company decided when the new branch office in Kaohsiung will finally open to customers? B: Yes, the manager announced that it will open next {{BLANK}}, after the workers finish painting the walls and installing the computers, so we have about four weeks to hire and train new staff.",
    "cn": "A：公司決定高雄的新分公司什麼時候正式對顧客開放了嗎？ B：決定了，經理宣布下個【月】開幕，等工人漆完牆壁、裝好電腦之後，所以我們大約有四週的時間招募並訓練新員工。"
  },
  {
    "word": "year",
    "pos": "n.",
    "cn_def": "年",
    "en_def": "a period of twelve months",
    "sentence": "A: How long have you been working in the customer service department at this hotel, and do you still enjoy it? B: I joined the team exactly one {{BLANK}} ago, and although the job is sometimes stressful, I really enjoy helping guests solve problems and learning new skills every day.",
    "cn": "A：你在這家飯店的客服部門工作多久了，你還喜歡這份工作嗎？ B：我剛好在一【年】前加入團隊，雖然這份工作有時壓力很大，但我真的很喜歡幫客人解決問題，也喜歡每天學習新技能。"
  },
  {
    "word": "decade",
    "pos": "n.",
    "cn_def": "十年",
    "en_def": "a period of ten years",
    "sentence": "A: How long has your family's bakery been serving customers in this neighborhood near the train station? B: My grandfather opened it more than a {{BLANK}} ago, about twelve years now, and many of our regular customers still come every morning to buy fresh bread before they go to work.",
    "cn": "A：你家的麵包店在火車站附近這一帶服務顧客多久了？ B：我祖父在超過【十年】前開了這家店，到現在大約十二年了，很多老顧客仍然每天早上上班前來買新鮮的麵包。"
  },
  {
    "word": "century",
    "pos": "n.",
    "cn_def": "世紀；百年",
    "en_def": "a period of one hundred years",
    "sentence": "A: Why do so many tourists visit that old building beside the river, even though it is quite small? B: It was built more than a {{BLANK}} ago, over one hundred years now, and it is one of the few places in the city that survived several big earthquakes and two serious floods.",
    "cn": "A：為什麼這麼多遊客去參觀河邊那棟老建築，即使它相當小？ B：它是在一【世紀】多以前建造的，到現在已經超過一百年了，而且它是城裡少數幾個撐過好幾次大地震和兩次嚴重水災的地方之一。"
  },
  {
    "word": "past",
    "pos": "n.",
    "cn_def": "過去",
    "en_def": "the time before now",
    "sentence": "A: Why does the manager keep talking about mistakes the company made with its marketing plan several years ago? B: She believes we should learn from the {{BLANK}}, so she wants everyone to remember what went wrong and avoid making the same expensive errors with the new product launch.",
    "cn": "A：為什麼經理一直提到公司幾年前在行銷計畫上犯的錯誤？ B：她認為我們應該從【過去】學習，所以她希望大家記得當時哪裡出了問題，避免在新產品上市時犯下同樣昂貴的錯誤。"
  },
  {
    "word": "present",
    "pos": "n.",
    "cn_def": "現在；目前",
    "en_def": "the time now",
    "sentence": "A: Are you still worried about the problems you had with your old team last year, or are you feeling better now? B: I've decided to stop thinking about what happened before and focus on the {{BLANK}}, because my new team is friendly and the projects we are working on are really interesting.",
    "cn": "A：你還在擔心去年和舊團隊之間的問題嗎，還是現在感覺好多了？ B：我決定不再去想以前發生的事，而是專注於【現在】，因為我的新團隊很友善，我們正在做的專案也非常有趣。"
  },
  {
    "word": "future",
    "pos": "n.",
    "cn_def": "未來",
    "en_def": "the time after now",
    "sentence": "A: Why did the company decide to send so many young employees to the overseas training program this year? B: The directors believe these employees will become our leaders in the {{BLANK}}, so they want them to gain international experience and learn how our offices in other countries operate.",
    "cn": "A：為什麼公司今年決定派這麼多年輕員工參加海外培訓計畫？ B：董事們相信這些員工【未來】會成為我們的領導者，所以希望他們累積國際經驗，並了解我們在其他國家的辦公室如何運作。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程",
    "en_def": "a plan that shows when things will happen",
    "sentence": "A: Could you tell me when the factory tour for the visiting clients from Japan will start tomorrow? B: According to the {{BLANK}} that the office manager sent this morning, the tour starts right after lunch, and the clients will have a short meeting with our director before they leave.",
    "cn": "A：你可以告訴我明天為來訪的日本客戶安排的工廠參觀幾點開始嗎？ B：根據辦公室經理今天早上寄出的【行程表】，參觀在午餐後馬上開始，客戶離開前還會和我們的主管開個簡短的會議。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time by which something must be finished",
    "sentence": "A: Why is everyone in the design department staying so late at the office tonight? B: The {{BLANK}} for the new advertising project is tomorrow at noon, and the client has made several changes, so the team must finish the final version before they can go home.",
    "cn": "A：為什麼設計部門的每個人今晚都在辦公室待到這麼晚？ B：新廣告專案的【截止期限】是明天中午，而客戶又做了好幾項修改，所以團隊必須完成最終版本才能回家。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "約會；預約",
    "en_def": "a fixed time to meet or visit someone",
    "sentence": "A: Are you coming to the department lunch with us today, or do you have other plans? B: I'm sorry, but I can't join you because I have a dental {{BLANK}} at one o'clock, and I need to leave early since the clinic is on the other side of the city.",
    "cn": "A：你今天要跟我們一起參加部門午餐嗎，還是你有其他安排？ B：很抱歉，我不能參加，因為我一點有看牙醫的【預約】，而且診所在城市的另一頭，所以我得提早出發。"
  },
  {
    "word": "punctual",
    "pos": "adj.",
    "cn_def": "準時的",
    "en_def": "arriving or doing something at the right time; not late",
    "sentence": "A: What do you think the interview panel liked most about the candidate who applied for the receptionist position? B: They were impressed that she was always {{BLANK}}, arriving before every interview, and she also spoke politely to everyone and answered the difficult questions calmly and clearly.",
    "cn": "A：你覺得面試小組最欣賞那位應徵接待員職位的應徵者哪一點？ B：他們很欣賞她總是很【準時】，每次面試都提前到達，而且她對每個人都很有禮貌，回答困難的問題時也冷靜又清楚。"
  },
  {
    "word": "late",
    "pos": "adj.",
    "cn_def": "遲到的；晚的",
    "en_def": "arriving or happening after the expected time",
    "sentence": "A: Why did the manager look so upset during the morning meeting today? B: Three people were {{BLANK}} because the subway broke down, and since the clients were already sitting in the conference room, the presentation had to start twenty minutes after the planned time.",
    "cn": "A：為什麼經理在今天早上的會議中看起來那麼不高興？ B：有三個人因為捷運故障而【遲到】，而客戶早已坐在會議室裡，所以簡報比原定時間晚了二十分鐘才開始。"
  },
  {
    "word": "early",
    "pos": "adv.",
    "cn_def": "提早地；早",
    "en_def": "before the usual or expected time",
    "sentence": "A: How did you manage to get such good seats at the conference yesterday when the hall was so crowded? B: I left home very {{BLANK}} and arrived at the convention center before the doors opened, so I could choose a seat near the stage and see the speakers clearly.",
    "cn": "A：昨天會場那麼擁擠，你是怎麼在研討會拿到這麼好的位子的？ B：我很【早】就出門了，在大門開放前就到了會展中心，所以我可以選靠近舞台的座位，清楚地看到講者。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "臨時的；暫時的",
    "en_def": "lasting for only a short time; not permanent",
    "sentence": "A: Is the new receptionist going to stay with our company for a long time, or is she only helping out? B: She has a {{BLANK}} contract for three months while our regular receptionist is on leave, but the manager may offer her a full-time job if she does well.",
    "cn": "A：新來的接待員會在我們公司待很久嗎，還是她只是來幫忙？ B：她簽的是三個月的【臨時】合約，在我們的正職接待員休假期間代班，但如果她表現好，經理可能會給她一份全職工作。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "永久的；固定的",
    "en_def": "lasting for a long time or forever",
    "sentence": "A: Have you heard whether the company will keep the new office in the city center after the trial period ends? B: Yes, the directors decided to make it our {{BLANK}} headquarters, because it is close to the train station and many clients find it easy to visit.",
    "cn": "A：你有沒有聽說試用期結束後，公司是否會保留市中心的新辦公室？ B：有，董事們決定把它作為我們的【永久】總部，因為它靠近火車站，很多客戶都覺得去那裡拜訪很方便。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤；耽擱",
    "en_def": "a period when something happens later than planned",
    "sentence": "A: Why haven't the boxes of new laptops arrived at our office yet, even though they were supposed to come yesterday? B: The shipping company told us there was a {{BLANK}} at the port because of the typhoon, so the delivery will probably reach us on Friday morning instead.",
    "cn": "A：為什麼那幾箱新筆電還沒送到我們辦公室，明明應該昨天就到了？ B：貨運公司告訴我們因為颱風，港口出現了【延誤】，所以貨物可能要改到星期五早上才會送到。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延期；延後",
    "en_def": "to move an event to a later time",
    "sentence": "A: Is the company picnic still happening this Saturday, even though the weather report says it will rain all weekend? B: The organizers decided to {{BLANK}} the event until next month, because they don't want anyone to get wet or sick, and the park might be closed anyway.",
    "cn": "A：即使氣象報告說整個週末都會下雨，公司野餐這星期六還是照常舉行嗎？ B：主辦人決定把活動【延期】到下個月，因為他們不希望任何人淋濕或生病，而且公園可能也會關閉。"
  },
  {
    "word": "hurry",
    "pos": "v.",
    "cn_def": "趕快；匆忙",
    "en_def": "to move or do something quickly",
    "sentence": "A: Do we still have enough time to catch the last train back to Taipei after the trade show ends tonight? B: Only if we {{BLANK}}, because the train leaves in fifteen minutes and the station is about a ten-minute walk from the exhibition hall, so let's pack our things now.",
    "cn": "A：今晚商展結束後，我們還來得及趕上回台北的末班火車嗎？ B：除非我們【趕快】，因為火車十五分鐘後就要開了，而車站離展覽館大約要走十分鐘，所以我們現在就收拾東西吧。"
  },
  {
    "word": "wait",
    "pos": "v.",
    "cn_def": "等待",
    "en_def": "to stay somewhere until someone comes or something happens",
    "sentence": "A: The dentist is still with another patient, so would you like to reschedule your visit for another day? B: No, I don't mind if I have to {{BLANK}} a little longer, because I took the whole afternoon off work, and I really want to get my tooth checked today.",
    "cn": "A：牙醫還在看另一位病人，您想把看診改到別天嗎？ B：不用，我不介意再多【等】一下，因為我請了整個下午的假，而且我真的想今天就把牙齒檢查好。"
  },
  {
    "word": "spend",
    "pos": "v.",
    "cn_def": "花費（時間、金錢）",
    "en_def": "to use time or money on something",
    "sentence": "A: How much time do you usually need to prepare the monthly sales report for the department meeting? B: I usually {{BLANK}} about two days collecting the figures from each branch, checking them carefully, and making clear charts, so I always start the work early in the week.",
    "cn": "A：你通常需要多少時間準備部門會議要用的每月銷售報告？ B：我通常【花】大約兩天的時間收集各分店的數據、仔細檢查並做出清楚的圖表，所以我總是在一週的前幾天就開始做。"
  },
  {
    "word": "waste",
    "pos": "v.",
    "cn_def": "浪費",
    "en_def": "to use something badly or when it is not necessary",
    "sentence": "A: Why did the manager ask everyone to send short email updates instead of having a long meeting every morning? B: She thinks long meetings {{BLANK}} too much of our time, and she would rather we use those hours to call customers and finish our important projects.",
    "cn": "A：為什麼經理要大家改寄簡短的電子郵件報告進度，而不是每天早上開很長的會？ B：她認為冗長的會議【浪費】我們太多時間，她寧願我們用那些時間打電話給客戶，並完成重要的專案。"
  },
  {
    "word": "manage",
    "pos": "v.",
    "cn_def": "管理；安排",
    "en_def": "to control or organize something well",
    "sentence": "A: How do you handle so many projects at the same time without feeling stressed or missing important deadlines? B: I try to {{BLANK}} my time carefully by writing a daily to-do list, putting the most urgent tasks first, and turning off my phone notifications when I need to concentrate.",
    "cn": "A：你是怎麼同時處理這麼多專案，卻不會感到壓力大或錯過重要期限的？ B：我會試著仔細【管理】我的時間，每天寫待辦清單、把最緊急的工作放在最前面，並在需要專心時關掉手機通知。"
  },
  {
    "word": "occasionally",
    "pos": "adv.",
    "cn_def": "偶爾",
    "en_def": "sometimes, but not often",
    "sentence": "A: Do you work from home every day now, or do you still go to the main office downtown? B: I mostly work from home, but I {{BLANK}} go to the office when there is an important meeting with clients or when my manager wants to discuss a new project in person.",
    "cn": "A：你現在每天都在家工作嗎，還是仍然會去市中心的總公司？ B：我大部分時間在家工作，但當有重要的客戶會議，或主管想當面討論新專案時，我【偶爾】會去辦公室。"
  },
  {
    "word": "frequently",
    "pos": "adv.",
    "cn_def": "經常；頻繁地",
    "en_def": "often; many times",
    "sentence": "A: Why does the sales director always look so tired when she comes to the office on Monday mornings? B: She travels {{BLANK}} to visit customers in other countries, sometimes three times a month, so she often has jet lag and doesn't get enough sleep.",
    "cn": "A：為什麼業務總監星期一早上進辦公室時總是看起來那麼累？ B：她【經常】出差拜訪其他國家的客戶，有時一個月三次，所以她常常有時差，睡眠也不足。"
  },
  {
    "word": "rarely",
    "pos": "adv.",
    "cn_def": "很少；難得",
    "en_def": "not often",
    "sentence": "A: Is the new restaurant across from our office usually crowded at lunchtime, or can we find a table easily? B: It is {{BLANK}} crowded on weekdays, because most office workers prefer the cheaper food court downstairs, so we can usually get a table by the window without waiting.",
    "cn": "A：我們辦公室對面那家新餐廳午餐時間通常很擠嗎，還是很容易找到位子？ B：平日那裡【很少】客滿，因為大部分上班族比較喜歡樓下比較便宜的美食街，所以我們通常不用等就能坐到靠窗的位子。"
  },
  {
    "word": "eventually",
    "pos": "adv.",
    "cn_def": "最後；終於",
    "en_def": "in the end, after a long time",
    "sentence": "A: Did the engineers ever find out what was causing the problem with the company's computer network last week? B: After checking every cable and server for three long days, they {{BLANK}} discovered that a small piece of old equipment was slowing down the whole system.",
    "cn": "A：工程師們最後有查出上星期公司電腦網路出問題的原因嗎？ B：在花了漫長的三天檢查每一條線路和每一台伺服器之後，他們【最後】發現是一個老舊的小設備拖慢了整個系統。"
  },
  {
    "word": "meanwhile",
    "pos": "adv.",
    "cn_def": "同時；在此期間",
    "en_def": "at the same time; while something else is happening",
    "sentence": "A: The technician says it will take about an hour to fix the projector in the training room, so what should we do? B: Let's start the workshop with a group discussion, and {{BLANK}}, I'll ask the receptionist to print copies of the slides so everyone can still follow the presentation.",
    "cn": "A：技術人員說修理訓練室的投影機大約要一個小時，那我們該怎麼辦？ B：我們先用小組討論開始工作坊，【同時】我會請接待員把投影片印出來，讓大家還是可以跟上簡報內容。"
  },
  {
    "word": "duration",
    "pos": "n.",
    "cn_def": "持續期間",
    "en_def": "the length of time that something lasts",
    "sentence": "A: Will the new employees be paid during the training program, and how long does it usually last? B: Yes, they receive a full salary for the entire {{BLANK}} of the program, which is about six weeks, and the company also pays for their meals and transportation.",
    "cn": "A：新進員工在培訓期間有薪水嗎？培訓通常持續多久？ B：有，他們在整個培訓【期間】都領全薪，培訓大約六週，而且公司還會負擔他們的餐費和交通費。"
  },
  {
    "word": "era",
    "pos": "n.",
    "cn_def": "時代；紀元",
    "en_def": "a long period of time in history with special features",
    "sentence": "A: Why does the company want all staff to attend the workshop about artificial intelligence next month? B: The director believes we are entering a new {{BLANK}} of technology, and if we don't learn how to use these tools now, our competitors will quickly become faster and more efficient than us.",
    "cn": "A：為什麼公司要求所有員工參加下個月的人工智慧工作坊？ B：主管認為我們正進入一個科技的新【時代】，如果我們現在不學會使用這些工具，競爭對手很快就會變得比我們更快、更有效率。"
  },
  {
    "word": "moment",
    "pos": "n.",
    "cn_def": "片刻；時刻",
    "en_def": "a very short period of time",
    "sentence": "A: Excuse me, is the manager available to speak with me about the problem with my order? B: She is on another call right now, so could you please hold on for a {{BLANK}} while I check whether she can talk to you, or would you prefer to leave a message?",
    "cn": "A：不好意思，經理現在有空和我談談我訂單的問題嗎？ B：她現在正在接另一通電話，可以請您稍等【片刻】，讓我確認她是否能和您通話嗎？還是您想留言？"
  },
  {
    "word": "lifetime",
    "pos": "n.",
    "cn_def": "一生；終身",
    "en_def": "the whole time that a person is alive",
    "sentence": "A: Why did you decide to accept the job offer in London, even though it means moving so far away from your family? B: It is a chance that comes only once in a {{BLANK}} to work with some of the best designers in the world, and I know I would regret it later if I said no.",
    "cn": "A：你為什麼決定接受倫敦的工作機會，即使這代表要搬到離家人那麼遠的地方？ B：能和世界上最優秀的一些設計師共事，是【一生】只有一次的機會，我知道如果拒絕了，以後一定會後悔。"
  },
  {
    "word": "timetable",
    "pos": "n.",
    "cn_def": "時刻表",
    "en_def": "a list showing the times when buses, trains, or events happen",
    "sentence": "A: Do you know when the next shuttle bus leaves the airport for the hotel where the conference is being held? B: According to the {{BLANK}} posted near the exit, buses leave every thirty minutes, so the next one should depart at a quarter past four this afternoon.",
    "cn": "A：你知道下一班從機場開往會議飯店的接駁車什麼時候出發嗎？ B：根據貼在出口附近的【時刻表】，巴士每三十分鐘一班，所以下一班應該在今天下午四點十五分出發。"
  }
];

const MCQS = [
  {
    "q": "The client changed the design at the last _____. Our team had to work through the night to finish the new version.",
    "options": [
      "minute",
      "decade",
      "era",
      "duration"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Our company has grown quickly over the past _____. In ten years, it has opened more than fifty stores across Asia.",
    "options": [
      "moment",
      "decade",
      "minute",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "This hotel has welcomed guests for more than a _____. It first opened its doors in 1910 and has been renovated twice.",
    "options": [
      "deadline",
      "timetable",
      "century",
      "appointment"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "In the _____, employees had to fill out paper forms for every expense. Now they simply upload their receipts through a mobile app.",
    "options": [
      "duration",
      "deadline",
      "lifetime",
      "past"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The manager hopes to open another branch in the near _____. She is already looking at office spaces in Taichung and Tainan.",
    "options": [
      "era",
      "future",
      "moment",
      "past"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The construction of the new warehouse is ahead of _____. The builders expect to finish two weeks earlier than planned.",
    "options": [
      "schedule",
      "duration",
      "appointment",
      "moment"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "All applications must be submitted before the _____ on Friday. Forms received after that will not be accepted by the human resources department.",
    "options": [
      "century",
      "lifetime",
      "era",
      "deadline"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Please call the front desk if you need to make an _____ with the doctor. The clinic is open from Monday to Saturday.",
    "options": [
      "era",
      "duration",
      "appointment",
      "timetable"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Our new assistant is always _____ for meetings. She arrives at least five minutes before they begin every day.",
    "options": [
      "punctual",
      "temporary",
      "permanent",
      "late"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Several passengers were _____ for their flights because of the heavy traffic. The airline allowed them to take the next plane at no cost.",
    "options": [
      "early",
      "late",
      "punctual",
      "permanent"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The shop opens at nine, but the staff arrive _____ to prepare the shelves. They usually come in around eight o'clock.",
    "options": [
      "rarely",
      "frequently",
      "early",
      "eventually"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company hired several _____ workers for the busy holiday season. Their contracts will end in the middle of January.",
    "options": [
      "permanent",
      "punctual",
      "late",
      "temporary"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "After working as an intern for six months, Lisa was offered a _____ position. She will now receive full benefits and a higher salary.",
    "options": [
      "temporary",
      "permanent",
      "late",
      "punctual"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Due to bad weather, there will be a two-hour _____ for all flights to Tokyo. Passengers are asked to remain in the departure lounge.",
    "options": [
      "delay",
      "moment",
      "duration",
      "schedule"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The board decided to _____ the product launch until March. The engineers need more time to fix several software problems.",
    "options": [
      "hurry",
      "waste",
      "spend",
      "postpone"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "We need to _____ if we want to catch the shuttle bus. It leaves the hotel in less than five minutes.",
    "options": [
      "wait",
      "postpone",
      "hurry",
      "manage"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The printer is busy with a large job right now. Could you please _____ a few minutes before sending your file?",
    "options": [
      "wait",
      "hurry",
      "postpone",
      "manage"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Our department cannot _____ more than five thousand dollars on the holiday party. The manager has asked us to find a cheaper restaurant.",
    "options": [
      "postpone",
      "spend",
      "hurry",
      "wait"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Please don't _____ paper by printing every email you receive. Most documents can be saved and shared online instead.",
    "options": [
      "spend",
      "manage",
      "waste",
      "wait"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Good leaders know how to _____ their time and their teams effectively. They plan carefully and give clear instructions to everyone.",
    "options": [
      "waste",
      "postpone",
      "hurry",
      "manage"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The office is usually quiet, but we _____ have visitors from the head office. When they come, we book the large meeting room.",
    "options": [
      "meanwhile",
      "occasionally",
      "early",
      "eventually"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Customers _____ ask about our return policy, so we added the answer to our website. This has reduced the number of phone calls.",
    "options": [
      "frequently",
      "meanwhile",
      "early",
      "eventually"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The manager is very busy and _____ has time for lunch. She often eats a sandwich at her desk while answering emails.",
    "options": [
      "frequently",
      "early",
      "meanwhile",
      "rarely"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The negotiations took almost three months. The two companies _____ agreed on a price that was fair for both sides.",
    "options": [
      "rarely",
      "early",
      "eventually",
      "meanwhile"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The new software will be installed next week. _____, staff should continue using the old system to process orders.",
    "options": [
      "meanwhile",
      "rarely",
      "frequently",
      "early"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Visitors must wear safety helmets for the entire _____ of the factory tour. Helmets can be collected at the main entrance.",
    "options": [
      "moment",
      "duration",
      "deadline",
      "century"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Smartphones have created a new _____ of communication. People can now talk with colleagues around the world instantly and cheaply.",
    "options": [
      "deadline",
      "appointment",
      "era",
      "timetable"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "I'm sorry, but the manager is not available at the _____. Could I take a message and ask her to call you back?",
    "options": [
      "era",
      "duration",
      "decade",
      "moment"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The company offers a _____ warranty on all of its kitchen knives. If a knife ever breaks, customers can get a free replacement.",
    "options": [
      "decade",
      "lifetime",
      "moment",
      "era"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "The new train _____ will take effect on the first of next month. Several morning trains will leave ten minutes earlier than before.",
    "options": [
      "timetable",
      "era",
      "appointment",
      "lifetime"
    ],
    "answer": 0,
    "vocabIndex": 36
  }
];

const LOOKUP = {
  "second": {
    "pos": "n.",
    "en_def": "a very short unit of time; one sixtieth of a minute",
    "cn_def": "秒"
  },
  "minute": {
    "pos": "n.",
    "en_def": "a unit of time equal to sixty seconds",
    "cn_def": "分鐘"
  },
  "hour": {
    "pos": "n.",
    "en_def": "a unit of time equal to sixty minutes",
    "cn_def": "小時"
  },
  "day": {
    "pos": "n.",
    "en_def": "a period of twenty-four hours; the part of it when people work",
    "cn_def": "天；日"
  },
  "week": {
    "pos": "n.",
    "en_def": "a period of seven days",
    "cn_def": "週；星期"
  },
  "month": {
    "pos": "n.",
    "en_def": "one of the twelve periods that a year is divided into",
    "cn_def": "月"
  },
  "year": {
    "pos": "n.",
    "en_def": "a period of twelve months",
    "cn_def": "年"
  },
  "decade": {
    "pos": "n.",
    "en_def": "a period of ten years",
    "cn_def": "十年"
  },
  "century": {
    "pos": "n.",
    "en_def": "a period of one hundred years",
    "cn_def": "世紀；百年"
  },
  "past": {
    "pos": "n.",
    "en_def": "the time before now",
    "cn_def": "過去"
  },
  "present": {
    "pos": "n.",
    "en_def": "the time now",
    "cn_def": "現在；目前"
  },
  "future": {
    "pos": "n.",
    "en_def": "the time after now",
    "cn_def": "未來"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that shows when things will happen",
    "cn_def": "時間表；行程"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time by which something must be finished",
    "cn_def": "截止期限"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "a fixed time to meet or visit someone",
    "cn_def": "約會；預約"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or doing something at the right time; not late",
    "cn_def": "準時的"
  },
  "late": {
    "pos": "adj.",
    "en_def": "arriving or happening after the expected time",
    "cn_def": "遲到的；晚的"
  },
  "early": {
    "pos": "adv.",
    "en_def": "before the usual or expected time",
    "cn_def": "提早地；早"
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting for only a short time; not permanent",
    "cn_def": "臨時的；暫時的"
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "lasting for a long time or forever",
    "cn_def": "永久的；固定的"
  },
  "delay": {
    "pos": "n.",
    "en_def": "a period when something happens later than planned",
    "cn_def": "延誤；耽擱"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延期；延後"
  },
  "hurry": {
    "pos": "v.",
    "en_def": "to move or do something quickly",
    "cn_def": "趕快；匆忙"
  },
  "wait": {
    "pos": "v.",
    "en_def": "to stay somewhere until someone comes or something happens",
    "cn_def": "等待"
  },
  "spend": {
    "pos": "v.",
    "en_def": "to use time or money on something",
    "cn_def": "花費（時間、金錢）"
  },
  "waste": {
    "pos": "v.",
    "en_def": "to use something badly or when it is not necessary",
    "cn_def": "浪費"
  },
  "manage": {
    "pos": "v.",
    "en_def": "to control or organize something well",
    "cn_def": "管理；安排"
  },
  "occasionally": {
    "pos": "adv.",
    "en_def": "sometimes, but not often",
    "cn_def": "偶爾"
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "often; many times",
    "cn_def": "經常；頻繁地"
  },
  "rarely": {
    "pos": "adv.",
    "en_def": "not often",
    "cn_def": "很少；難得"
  },
  "eventually": {
    "pos": "adv.",
    "en_def": "in the end, after a long time",
    "cn_def": "最後；終於"
  },
  "meanwhile": {
    "pos": "adv.",
    "en_def": "at the same time; while something else is happening",
    "cn_def": "同時；在此期間"
  },
  "duration": {
    "pos": "n.",
    "en_def": "the length of time that something lasts",
    "cn_def": "持續期間"
  },
  "era": {
    "pos": "n.",
    "en_def": "a long period of time in history with special features",
    "cn_def": "時代；紀元"
  },
  "moment": {
    "pos": "n.",
    "en_def": "a very short period of time",
    "cn_def": "片刻；時刻"
  },
  "lifetime": {
    "pos": "n.",
    "en_def": "the whole time that a person is alive",
    "cn_def": "一生；終身"
  },
  "timetable": {
    "pos": "n.",
    "en_def": "a list showing the times when buses, trains, or events happen",
    "cn_def": "時刻表"
  }
};

const EXTRA_GLOSSES = {};
