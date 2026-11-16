// Topic 225 Quiz Data: Lost Touch 失去聯繫
// Source word list: https://www.examword.com/group-topic/lost-touch — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T225 - Lost Touch 失去聯繫",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "disconnect",
    "pos": "v.",
    "cn_def": "斷絕聯繫；脫離",
    "en_def": "to stop being in contact with someone",
    "sentence": "A: Why did the sales team stop hearing from our biggest supplier in Vietnam after the new manager took over the account last spring? B: I think people began to {{BLANK}} from each other when the weekly video calls were canceled, so nobody noticed the supplier was quietly working with a competitor.",
    "cn": "A：去年春天新經理接手這個客戶後，為什麼業務團隊就不再收到我們在越南最大供應商的消息？ B：我想是每週視訊會議取消後，大家就開始彼此【失去聯繫】，所以沒有人注意到那家供應商悄悄和競爭對手合作了。"
  },
  {
    "word": "drift apart",
    "pos": "v.phr.",
    "cn_def": "漸行漸遠",
    "en_def": "to slowly become less close to someone",
    "sentence": "A: You and Daniel used to have lunch together every day when you both worked in the marketing department, so why don't you talk anymore? B: After he moved to the branch office in Kaohsiung and I got promoted, our schedules changed completely, and we slowly began to {{BLANK}} without really meaning to.",
    "cn": "A：你和丹尼爾以前都在行銷部工作時每天一起吃午餐，為什麼現在都不說話了？ B：在他調到高雄分公司、我又升職之後，我們的行程完全改變了，我們就不知不覺慢慢【漸行漸遠】。"
  },
  {
    "word": "estranged",
    "pos": "adj.",
    "cn_def": "疏遠的；不和的",
    "en_def": "no longer friendly or in contact with someone close",
    "sentence": "A: Is it true that the two founders of the design company no longer speak to each other, even though they started the business together ten years ago? B: Yes, they have been {{BLANK}} since a serious argument about money last year, and now their lawyers handle every message between them.",
    "cn": "A：那家設計公司的兩位創辦人儘管十年前一起創業，現在彼此卻不再說話，這是真的嗎？ B：是的，自從去年為了錢大吵一架後，他們就一直【關係疏遠】，現在他們之間的每個訊息都由律師處理。"
  },
  {
    "word": "alienated",
    "pos": "adj.",
    "cn_def": "感到疏離的；被疏遠的",
    "en_def": "feeling that you do not belong or are not wanted",
    "sentence": "A: Why did so many experienced engineers leave the factory within six months after the new rules about overtime were announced by head office? B: Many of them felt {{BLANK}} because nobody asked for their opinions before the changes, so they decided to look for companies that respected their experience.",
    "cn": "A：為什麼總公司宣布加班新規定後六個月內，那麼多資深工程師離開了工廠？ B：他們很多人感到【被疏遠】，因為改變之前沒有人詢問他們的意見，所以他們決定去找尊重他們經驗的公司。"
  },
  {
    "word": "out of touch",
    "pos": "adj.phr.",
    "cn_def": "脫節的；不了解近況的",
    "en_def": "not knowing about recent changes or what people want",
    "sentence": "A: Our director wants to print all the advertisements in newspapers again, but most of our young customers spend their free time on social media, right? B: Exactly, I'm afraid he is a little {{BLANK}} with what younger shoppers want, so we should show him some recent survey results at Monday's meeting.",
    "cn": "A：我們的主管想再次把所有廣告刊登在報紙上，但我們大部分的年輕顧客都把空閒時間花在社群媒體上，對吧？ B：沒錯，我恐怕他有點【跟不上】年輕購物者的需求，所以我們應該在週一的會議上給他看一些最近的調查結果。"
  },
  {
    "word": "unfamiliar",
    "pos": "adj.",
    "cn_def": "不熟悉的；陌生的",
    "en_def": "not known or not seen before",
    "sentence": "A: How was your first week back at the office after spending almost two years working from home during the long project in Singapore? B: To be honest, everything felt {{BLANK}} at first, because the team had new members, new software, and even a different seating plan, so I needed several days to adjust.",
    "cn": "A：在新加坡的長期專案期間在家工作將近兩年後，你回到辦公室的第一週怎麼樣？ B：老實說，一開始一切都感覺很【陌生】，因為團隊有新成員、新軟體，甚至座位安排都不一樣，所以我需要好幾天來適應。"
  },
  {
    "word": "distant",
    "pos": "adj.",
    "cn_def": "冷淡的；疏遠的",
    "en_def": "not friendly or close to other people",
    "sentence": "A: Have you noticed that Kevin hardly joins the team lunches anymore and only answers emails with one or two short words? B: Yes, he has seemed quite {{BLANK}} since his department was combined with ours, so maybe we should invite him for coffee and ask how he is doing.",
    "cn": "A：你有沒有注意到凱文幾乎不再參加團隊午餐，回覆電子郵件也只有一兩個字？ B：有，自從他的部門和我們合併後，他似乎變得相當【冷淡疏遠】，所以也許我們應該約他喝咖啡，問問他過得如何。"
  },
  {
    "word": "detached",
    "pos": "adj.",
    "cn_def": "冷漠的；超然的",
    "en_def": "not showing feelings or personal interest",
    "sentence": "A: The new customer service agent answers every question correctly, so why are some callers complaining about her in the feedback forms? B: They say her voice sounds cold and {{BLANK}}, as if she doesn't care about their problems, so the supervisor will give her some training on showing more warmth on the phone.",
    "cn": "A：新的客服人員每個問題都回答正確，為什麼還有一些來電者在意見表上抱怨她？ B：他們說她的聲音聽起來冷淡又【漠然】，好像她不在乎他們的問題，所以主管會給她一些在電話中表現更多溫暖的訓練。"
  },
  {
    "word": "isolated",
    "pos": "adj.",
    "cn_def": "孤立的；與世隔絕的",
    "en_def": "alone and far from other people",
    "sentence": "A: How do the workers at the new mountain research station keep in contact with their families, since the nearest town is three hours away by car? B: They often feel {{BLANK}} up there in winter, so the company installed satellite internet so they can make video calls every evening after work.",
    "cn": "A：新山區研究站的工作人員要怎麼和家人保持聯繫？因為最近的城鎮開車要三小時。 B：他們冬天在那裡常常感到【孤立】，所以公司安裝了衛星網路，讓他們每天下班後晚上可以視訊通話。"
  },
  {
    "word": "separated",
    "pos": "adj.",
    "cn_def": "分開的；分隔的",
    "en_def": "kept apart from each other",
    "sentence": "A: Why does the accounting team rarely talk with the people in the warehouse, even though they work for the same company and share the same building? B: The two groups are {{BLANK}} by three floors and different working hours, so they almost never meet unless there is a problem with an order.",
    "cn": "A：為什麼會計團隊很少和倉庫的人說話，即使他們在同一家公司工作、共用同一棟大樓？ B：這兩組人被三層樓和不同的工作時間【分隔開來】，所以除非訂單出了問題，否則他們幾乎從不見面。"
  },
  {
    "word": "neglect",
    "pos": "v.",
    "cn_def": "忽視；疏忽",
    "en_def": "to not give enough care or attention to someone or something",
    "sentence": "A: Our sales numbers in the northern region dropped by twenty percent last quarter, so what do you think went wrong with our customers there? B: I believe we began to {{BLANK}} our long-term clients while we focused on finding new ones, and several of them felt unimportant and moved to other suppliers.",
    "cn": "A：我們北區的銷售數字上一季下滑了百分之二十，你認為我們那裡的客戶出了什麼問題？ B：我認為我們在專注開發新客戶時開始【忽略】長期客戶，其中幾位覺得自己不受重視，就轉向其他供應商了。"
  },
  {
    "word": "ignore",
    "pos": "v.",
    "cn_def": "忽視；不理會",
    "en_def": "to pay no attention to someone or something",
    "sentence": "A: Mrs. Chen has sent three emails about the broken air conditioner in her shop, but she says nobody from the building office has replied yet. B: We can't just {{BLANK}} her messages any longer, so please call her this afternoon and tell her a technician will visit before Friday.",
    "cn": "A：陳太太已經寄了三封關於她店裡冷氣故障的電子郵件，但她說大樓管理處到現在都沒人回覆。 B：我們不能再【不理會】她的訊息了，所以請你今天下午打電話給她，告訴她技師週五前會過去。"
  },
  {
    "word": "forget",
    "pos": "v.",
    "cn_def": "忘記",
    "en_def": "to not remember someone or something",
    "sentence": "A: It has been almost five years since you left the company, so do you still remember the names of the people who worked on our first big project? B: I could never {{BLANK}} that team, because we spent so many late nights in the office together, and I still have the photo from our celebration dinner.",
    "cn": "A：你離開公司已經快五年了，你還記得我們第一個大專案的同事名字嗎？ B：我永遠不會【忘記】那個團隊，因為我們一起在辦公室熬了那麼多夜，我到現在還留著慶功晚宴的照片。"
  },
  {
    "word": "overlook",
    "pos": "v.",
    "cn_def": "忽略；沒注意到",
    "en_def": "to fail to notice something",
    "sentence": "A: How did we miss the email from our old client in Japan asking about a new order, when it arrived in our inbox two weeks ago? B: It's easy to {{BLANK}} messages like that when we receive hundreds of emails a day, so let's set up a filter to highlight messages from past customers.",
    "cn": "A：我們在日本的老客戶兩週前寄來詢問新訂單的電子郵件，我們怎麼會漏掉？ B：當我們一天收到幾百封電子郵件時，很容易【忽略】那樣的訊息，所以我們來設定一個篩選器，把過去客戶的訊息標示出來吧。"
  },
  {
    "word": "avoid",
    "pos": "v.",
    "cn_def": "避免；避開",
    "en_def": "to stay away from someone or something on purpose",
    "sentence": "A: Why didn't Kevin come to the former employees' reunion dinner last weekend, since everyone was hoping to see him after so many years? B: I heard he wanted to {{BLANK}} meeting his old manager, who was also invited, because they had a difficult argument before Kevin quit his job.",
    "cn": "A：凱文上週末為什麼沒來前員工聚餐？大家隔了這麼多年都很希望見到他。 B：我聽說他想【避免】見到也受邀的前主管，因為凱文辭職前和他吵了一場不愉快的架。"
  },
  {
    "word": "distance",
    "pos": "n.",
    "cn_def": "距離",
    "en_def": "the amount of space between two places or people",
    "sentence": "A: Do you think it is difficult to keep a strong relationship with your business partners in Europe when you only meet them once a year? B: The {{BLANK}} does make it harder, but we hold video meetings every month and send small gifts during holidays, so we still feel close to each other.",
    "cn": "A：你覺得一年只和歐洲的生意夥伴見一次面，要維持良好的關係很困難嗎？ B：【距離】的確讓事情變得比較困難，但我們每個月開視訊會議，節日時也會寄小禮物，所以我們還是覺得彼此很親近。"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "退出；退縮",
    "en_def": "to stop taking part in something; to move away from others",
    "sentence": "A: Have you noticed that Amy rarely speaks during our team meetings now, although she used to share lots of creative ideas last year? B: Yes, she started to {{BLANK}} from group discussions after her proposal was rejected, so I plan to ask her privately whether something is bothering her.",
    "cn": "A：你有沒有注意到艾咪現在在團隊會議上很少發言，雖然她去年分享了很多有創意的點子？ B：有，她在提案被否決後就開始【退出】小組討論，所以我打算私下問她是不是有什麼困擾。"
  },
  {
    "word": "fade",
    "pos": "v.",
    "cn_def": "逐漸消失；淡去",
    "en_def": "to slowly become weaker and disappear",
    "sentence": "A: After the company moved its headquarters to Hsinchu, did you keep in contact with the friends you made in the Taipei office? B: At first we chatted online every week, but our friendships began to {{BLANK}} as everyone got busier with new projects, and now we only send messages on birthdays.",
    "cn": "A：公司把總部搬到新竹後，你還有和在台北辦公室交到的朋友保持聯繫嗎？ B：一開始我們每週都在網路上聊天，但隨著大家新專案越來越忙，我們的友誼開始【淡去】，現在只在生日時傳訊息。"
  },
  {
    "word": "decline",
    "pos": "v.",
    "cn_def": "下降；衰退",
    "en_def": "to become less in amount or quality",
    "sentence": "A: Why have fewer members been attending the monthly networking events that our business association organizes at the downtown hotel? B: Attendance started to {{BLANK}} when we moved the events to weekday mornings, because most members are busy at work then, so we should return to evenings.",
    "cn": "A：為什麼參加我們商業協會在市中心飯店舉辦的每月交流活動的會員越來越少？ B：自從我們把活動改到平日早上，出席人數就開始【下降】，因為那時大多數會員都在忙工作，所以我們應該改回晚上。"
  },
  {
    "word": "lapse",
    "pos": "v.",
    "cn_def": "失效；中斷",
    "en_def": "to end because it was not renewed or continued",
    "sentence": "A: I tried to log in to the professional network website to contact my former coworkers, but the system says my account is no longer active. B: You probably let your membership {{BLANK}} when you didn't pay the yearly fee, so you need to renew it before you can send messages again.",
    "cn": "A：我試著登入專業人脈網站聯絡以前的同事，但系統說我的帳號已經無效了。 B：你可能沒繳年費，讓會員資格【失效】了，所以你得先續約才能再傳訊息。"
  },
  {
    "word": "gap",
    "pos": "n.",
    "cn_def": "空白；間隔",
    "en_def": "an empty period of time or space",
    "sentence": "A: Your résumé looks excellent, but could you explain why you didn't work in the hotel industry between 2021 and 2023? B: I took care of my parents during that time, so there is a {{BLANK}} in my work history, but I kept taking online courses in hospitality management to stay up to date.",
    "cn": "A：你的履歷看起來很優秀，但你能解釋為什麼2021年到2023年之間沒有在飯店業工作嗎？ B：那段時間我在照顧父母，所以我的工作經歷有一段【空白】，但我持續上飯店管理的線上課程來跟上最新發展。"
  },
  {
    "word": "break",
    "pos": "n.",
    "cn_def": "中斷；暫停",
    "en_def": "a short stop or pause in an activity or relationship",
    "sentence": "A: Why haven't we heard from the design agency since the end of last year, when they were sending us new ideas every week before? B: They told me they needed a short {{BLANK}} from our project while they finished a big contract, but they promised to contact us again in March.",
    "cn": "A：設計公司以前每週都寄新點子給我們，為什麼從去年底開始就沒有他們的消息了？ B：他們告訴我，在完成一份大合約期間需要暫時【中斷】我們的專案，但他們承諾三月會再聯絡我們。"
  },
  {
    "word": "absence",
    "pos": "n.",
    "cn_def": "不在；缺席",
    "en_def": "the time when someone is away",
    "sentence": "A: Did anything important happen at the branch office while you were away on maternity leave for six months last year? B: During my {{BLANK}}, the team changed its reporting system completely, so I spent my first week back learning the new process and getting to know two new colleagues.",
    "cn": "A：你去年請六個月產假不在時，分公司有發生什麼重要的事嗎？ B：在我【不在】的期間，團隊完全改變了報告系統，所以我回來的第一週都在學習新流程，並認識兩位新同事。"
  },
  {
    "word": "silence",
    "pos": "n.",
    "cn_def": "沉默；沒有消息",
    "en_def": "a time when there is no sound or no communication",
    "sentence": "A: We sent the contract to the new client three weeks ago, but they still haven't replied to any of our emails or phone calls. B: Their long {{BLANK}} worries me, so let's ask our sales representative in Osaka to visit their office and find out whether they are still interested.",
    "cn": "A：我們三週前把合約寄給新客戶，但他們到現在都還沒回覆任何電子郵件或電話。 B：他們長時間的【沉默】讓我很擔心，所以我們請在大阪的業務代表去他們辦公室了解他們是否還有興趣吧。"
  },
  {
    "word": "estrangement",
    "pos": "n.",
    "cn_def": "疏遠；不和",
    "en_def": "the state of no longer being friendly or in contact",
    "sentence": "A: The two branches of the family business stopped cooperating years ago, so why are they suddenly planning a joint product launch this summer? B: After a long {{BLANK}}, the new managers on both sides decided that working together would help them compete with large international brands.",
    "cn": "A：這家家族企業的兩個分支好幾年前就不再合作，為什麼今年夏天突然計畫聯合推出產品？ B：在長期的【疏遠】之後，雙方的新經理決定合作能幫助他們與大型國際品牌競爭。"
  },
  {
    "word": "remoteness",
    "pos": "n.",
    "cn_def": "偏遠；遙遠",
    "en_def": "the state of being far away from other places",
    "sentence": "A: Why is it so hard for the resort on the east coast to hire and keep good staff, even though it pays higher salaries than city hotels? B: The {{BLANK}} of the location is the main problem, because young workers feel far from their friends and families and there is no public transportation nearby.",
    "cn": "A：為什麼東海岸那家度假村即使薪水比城市飯店高，還是很難雇用並留住好員工？ B：地點的【偏遠】是主要問題，因為年輕員工覺得離朋友和家人很遠，附近也沒有大眾運輸。"
  },
  {
    "word": "indifference",
    "pos": "n.",
    "cn_def": "冷漠；漠不關心",
    "en_def": "a lack of interest or care",
    "sentence": "A: Why did so few employees fill out the survey about improving the staff cafeteria, even though we sent three reminders last month? B: I think it shows a general {{BLANK}} among the staff, because they believe management never acts on their suggestions, so they no longer bother to reply.",
    "cn": "A：為什麼上個月我們寄了三次提醒，填寫改善員工餐廳問卷的員工還是那麼少？ B：我想這顯示員工普遍【漠不關心】，因為他們認為管理階層從不採納他們的建議，所以他們不再費心回覆。"
  },
  {
    "word": "disengaged",
    "pos": "adj.",
    "cn_def": "不投入的；疏離的",
    "en_def": "not interested or involved in something",
    "sentence": "A: The new interns seemed excited during their first week, so why do they now look bored and check their phones during every training session? B: They have become {{BLANK}} because the sessions are just long lectures, so let's add more group activities and real tasks to keep them interested.",
    "cn": "A：新實習生第一週看起來很興奮，為什麼現在每次訓練課程都一副無聊樣，還一直看手機？ B：他們變得【不投入】是因為課程都只是冗長的講課，所以我們加入更多小組活動和實際任務來維持他們的興趣吧。"
  },
  {
    "word": "uninvolved",
    "pos": "adj.",
    "cn_def": "未參與的；置身事外的",
    "en_def": "not taking part in something",
    "sentence": "A: Should we invite the finance department to the planning meeting for the new store, or can we decide the details on our own? B: Let's invite them, because when they stayed {{BLANK}} in the last project, they later rejected half of our budget, and we lost two weeks fixing the plan.",
    "cn": "A：我們要邀請財務部參加新店的規劃會議，還是可以自己決定細節？ B：邀請他們吧，因為上次專案他們【置身事外】，後來卻否決了我們一半的預算，害我們花了兩週修改計畫。"
  },
  {
    "word": "forgotten",
    "pos": "adj.",
    "cn_def": "被遺忘的",
    "en_def": "no longer remembered or thought about",
    "sentence": "A: While cleaning the storage room yesterday, did you find anything interesting in those old boxes from when the company first opened? B: Yes, I found a {{BLANK}} photo album from our first trade show in 1998, and I'd like to display some of the pictures in the lobby for our anniversary.",
    "cn": "A：你昨天清理儲藏室時，有在公司剛開業時留下的那些舊箱子裡發現什麼有趣的東西嗎？ B：有，我發現一本1998年我們第一次參加貿易展、【被遺忘的】相簿，我想在週年慶時把一些照片展示在大廳。"
  },
  {
    "word": "unresponsive",
    "pos": "adj.",
    "cn_def": "沒有回應的",
    "en_def": "not answering or reacting",
    "sentence": "A: Why did you decide to stop working with the printing company that produced our brochures for the last three years? B: Their staff became completely {{BLANK}} whenever we had urgent questions, and we missed an important deadline because nobody answered the phone, so we found a more reliable supplier.",
    "cn": "A：你為什麼決定不再和過去三年幫我們印製手冊的印刷公司合作？ B：每當我們有緊急問題時，他們的員工就完全【沒有回應】，而且因為沒人接電話，我們錯過了一個重要的截止期限，所以我們找了一家更可靠的供應商。"
  },
  {
    "word": "neglected",
    "pos": "adj.",
    "cn_def": "被忽視的；無人照顧的",
    "en_def": "not looked after or cared for",
    "sentence": "A: Why does the old garden behind the company building look so messy, with dead plants and broken benches everywhere? B: It has been {{BLANK}} since the maintenance staff were moved to the new factory, but the manager plans to hire a gardener next month so employees can relax there again.",
    "cn": "A：為什麼公司大樓後面的舊花園看起來那麼凌亂，到處都是枯死的植物和壞掉的長椅？ B：自從維修人員被調到新工廠後，那裡就一直【無人照顧】，但經理計畫下個月雇用一位園丁，讓員工能再到那裡放鬆。"
  },
  {
    "word": "casual",
    "pos": "adj.",
    "cn_def": "偶爾的；隨意的",
    "en_def": "not regular or serious; happening now and then",
    "sentence": "A: Do you still meet the friends you made during your training program in Tokyo, or have you lost contact with most of them? B: We only have {{BLANK}} contact now, like a quick message on social media or a short chat when someone visits Taipei, but it's still nice to hear their news.",
    "cn": "A：你還有和在東京受訓時交到的朋友見面嗎？還是已經和大部分人失去聯繫了？ B：我們現在只有【隨意偶爾的】聯繫，像是在社群媒體上傳個簡短訊息，或是有人來台北時聊一下，但聽到他們的近況還是很開心。"
  },
  {
    "word": "occasional",
    "pos": "adj.",
    "cn_def": "偶爾的",
    "en_def": "happening sometimes but not often",
    "sentence": "A: How often do you communicate with the former employees who now work for our partner companies in Korea and Thailand? B: We exchange {{BLANK}} emails, mostly when there is a new project or an industry conference, and that helps us keep a friendly relationship without much effort.",
    "cn": "A：你多久和現在在我們韓國和泰國合作公司工作的前員工聯繫一次？ B：我們【偶爾】互寄電子郵件，大多是在有新專案或產業研討會的時候，這讓我們不需太費力就能維持友好的關係。"
  },
  {
    "word": "sporadic",
    "pos": "adj.",
    "cn_def": "零星的；斷斷續續的",
    "en_def": "happening only now and then, not regularly",
    "sentence": "A: Is the new branch in the countryside receiving regular orders from local restaurants, or is business still slow there? B: The orders have been {{BLANK}} so far, with a few big ones some weeks and none at all in others, so we need a stronger marketing plan to build steady customers.",
    "cn": "A：鄉下的新分店有收到當地餐廳的固定訂單嗎？還是那邊生意還是很冷清？ B：到目前為止訂單都很【零星】，有幾週有幾筆大訂單，其他幾週則完全沒有，所以我們需要更強的行銷計畫來建立穩定的客群。"
  },
  {
    "word": "intermittent",
    "pos": "adj.",
    "cn_def": "間歇的；時斷時續的",
    "en_def": "stopping and starting again many times",
    "sentence": "A: Why did the video call with our partners in London keep stopping during this morning's meeting about the new contract? B: The hotel where they are staying has {{BLANK}} internet problems, so we agreed to send them the documents by email and continue the discussion tomorrow from their office.",
    "cn": "A：今天早上討論新合約的會議中，為什麼和倫敦合作夥伴的視訊通話一直中斷？ B：他們住的飯店網路問題【時斷時續】，所以我們同意用電子郵件寄文件給他們，明天再從他們的辦公室繼續討論。"
  }
];

const MCQS = [
  {
    "q": "Many remote workers _____ from their teams when they never join video calls. Managers should schedule regular check-ins to prevent this.",
    "options": [
      "disconnect",
      "decline",
      "overlook",
      "neglect"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Old classmates often _____ after graduation as they move to different cities. Social media can help them stay in contact.",
    "options": [
      "overlook",
      "drift apart",
      "ignore",
      "avoid"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The CEO has been _____ from his brother since their argument over the family company. They have not spoken for five years.",
    "options": [
      "unfamiliar",
      "sporadic",
      "estranged",
      "occasional"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The director is completely _____ with younger customers' habits. He still believes most people read printed newspapers every morning.",
    "options": [
      "intermittent",
      "sporadic",
      "unresponsive",
      "out of touch"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Since the new accounting software is _____ to most staff, a two-day training course will be held next week. Attendance is required.",
    "options": [
      "estranged",
      "unfamiliar",
      "sporadic",
      "intermittent"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Relations between the two sales teams became cold and _____ after the merger. Members rarely spoke to each other in the office.",
    "options": [
      "intermittent",
      "occasional",
      "unfamiliar",
      "distant"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The judge listened to both sides in a calm and _____ manner. She did not let personal feelings affect her final decision.",
    "options": [
      "detached",
      "isolated",
      "neglected",
      "forgotten"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Staff at the mountain weather station often feel _____ during the long winter. The company provides satellite phones so they can call home.",
    "options": [
      "unresponsive",
      "sporadic",
      "isolated",
      "intermittent"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Busy managers should not _____ their regular customers while chasing new accounts. Loyal clients bring in most of our profits.",
    "options": [
      "withdraw",
      "fade",
      "decline",
      "neglect"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Please do not _____ the warning lights on the printer. Call the technician immediately if one of them starts flashing red.",
    "options": [
      "ignore",
      "lapse",
      "fade",
      "drift apart"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Don't _____ to update your contact details on the alumni website. Otherwise, you may miss invitations to future reunion events.",
    "options": [
      "avoid",
      "forget",
      "withdraw",
      "overlook"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "It is easy to _____ small errors in long contracts when you are tired. Always ask a colleague to read the document again.",
    "options": [
      "withdraw",
      "fade",
      "overlook",
      "decline"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "To _____ delays at customs, please check that all shipping documents are complete. Missing forms can hold up packages for weeks.",
    "options": [
      "avoid",
      "forget",
      "lapse",
      "fade"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Despite the _____ between our offices in Taipei and Toronto, the two teams work closely together. They hold video meetings every Monday.",
    "options": [
      "silence",
      "indifference",
      "absence",
      "distance"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Due to rising costs, the company decided to _____ from the trade fair in Berlin this year. The deposit will be refunded.",
    "options": [
      "fade",
      "withdraw",
      "lapse",
      "drift apart"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The colors on the store's outdoor sign have begun to _____ after years in strong sunlight. We will order a new one next month.",
    "options": [
      "lapse",
      "withdraw",
      "fade",
      "decline"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Sales of printed magazines continued to _____ last year as more readers switched to digital editions. The trend is expected to continue.",
    "options": [
      "forget",
      "decline",
      "lapse",
      "withdraw"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "If you do not renew your membership by March 31, it will _____ automatically. You will then lose access to the online member directory.",
    "options": [
      "lapse",
      "decline",
      "fade",
      "withdraw"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "There is a two-year _____ in her employment history. She explained that she spent that time caring for her elderly parents.",
    "options": [
      "silence",
      "distance",
      "indifference",
      "gap"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "After working on the project for six hours, the team took a short _____ for coffee. They returned to the meeting room at three o'clock.",
    "options": [
      "silence",
      "indifference",
      "break",
      "remoteness"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "During the manager's _____, all urgent questions should be sent to her assistant, David Wu. She will return from Paris on Thursday.",
    "options": [
      "absence",
      "distance",
      "indifference",
      "gap"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The client's long _____ after receiving our proposal worried the sales team. Finally, they called to ask whether the client had any questions.",
    "options": [
      "estrangement",
      "remoteness",
      "silence",
      "distance"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Management's _____ to staff complaints about overtime led several employees to resign. The new director has promised to listen more carefully.",
    "options": [
      "remoteness",
      "indifference",
      "absence",
      "distance"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Employees who feel _____ at work are less productive and more likely to quit. Regular feedback can help keep them motivated.",
    "options": [
      "intermittent",
      "sporadic",
      "occasional",
      "disengaged"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The museum displayed several _____ paintings that had been stored in its basement for decades. Visitors were surprised by their beauty.",
    "options": [
      "unresponsive",
      "intermittent",
      "forgotten",
      "disengaged"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The supplier has been _____ to our emails for two weeks. We will contact another company if we do not hear from them soon.",
    "options": [
      "unresponsive",
      "unfamiliar",
      "detached",
      "isolated"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The old warehouse has been _____ for years and is now full of dust and broken equipment. The city plans to renovate it.",
    "options": [
      "unresponsive",
      "disengaged",
      "intermittent",
      "neglected"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Apart from _____ phone calls, I rarely hear from my former colleagues in Hong Kong. We all became busy with new jobs.",
    "options": [
      "detached",
      "occasional",
      "estranged",
      "unfamiliar"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Reports of the software problem have been _____, with only a few cases each month. Engineers are still trying to find the cause.",
    "options": [
      "estranged",
      "detached",
      "alienated",
      "sporadic"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "Guests complained about _____ Wi-Fi in the hotel rooms, which kept disconnecting every few minutes. The manager offered them a discount.",
    "options": [
      "intermittent",
      "estranged",
      "detached",
      "alienated"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "disconnect": {
    "pos": "v.",
    "en_def": "to stop being in contact with someone",
    "cn_def": "斷絕聯繫；脫離"
  },
  "drift apart": {
    "pos": "v.phr.",
    "en_def": "to slowly become less close to someone",
    "cn_def": "漸行漸遠"
  },
  "estranged": {
    "pos": "adj.",
    "en_def": "no longer friendly or in contact with someone close",
    "cn_def": "疏遠的；不和的"
  },
  "alienated": {
    "pos": "adj.",
    "en_def": "feeling that you do not belong or are not wanted",
    "cn_def": "感到疏離的；被疏遠的"
  },
  "out of touch": {
    "pos": "adj.phr.",
    "en_def": "not knowing about recent changes or what people want",
    "cn_def": "脫節的；不了解近況的"
  },
  "unfamiliar": {
    "pos": "adj.",
    "en_def": "not known or not seen before",
    "cn_def": "不熟悉的；陌生的"
  },
  "distant": {
    "pos": "adj.",
    "en_def": "not friendly or close to other people",
    "cn_def": "冷淡的；疏遠的"
  },
  "detached": {
    "pos": "adj.",
    "en_def": "not showing feelings or personal interest",
    "cn_def": "冷漠的；超然的"
  },
  "isolated": {
    "pos": "adj.",
    "en_def": "alone and far from other people",
    "cn_def": "孤立的；與世隔絕的"
  },
  "separated": {
    "pos": "adj.",
    "en_def": "kept apart from each other",
    "cn_def": "分開的；分隔的"
  },
  "neglect": {
    "pos": "v.",
    "en_def": "to not give enough care or attention to someone or something",
    "cn_def": "忽視；疏忽"
  },
  "ignore": {
    "pos": "v.",
    "en_def": "to pay no attention to someone or something",
    "cn_def": "忽視；不理會"
  },
  "forget": {
    "pos": "v.",
    "en_def": "to not remember someone or something",
    "cn_def": "忘記"
  },
  "overlook": {
    "pos": "v.",
    "en_def": "to fail to notice something",
    "cn_def": "忽略；沒注意到"
  },
  "avoid": {
    "pos": "v.",
    "en_def": "to stay away from someone or something on purpose",
    "cn_def": "避免；避開"
  },
  "distance": {
    "pos": "n.",
    "en_def": "the amount of space between two places or people",
    "cn_def": "距離"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to stop taking part in something; to move away from others",
    "cn_def": "退出；退縮"
  },
  "fade": {
    "pos": "v.",
    "en_def": "to slowly become weaker and disappear",
    "cn_def": "逐漸消失；淡去"
  },
  "decline": {
    "pos": "v.",
    "en_def": "to become less in amount or quality",
    "cn_def": "下降；衰退"
  },
  "lapse": {
    "pos": "v.",
    "en_def": "to end because it was not renewed or continued",
    "cn_def": "失效；中斷"
  },
  "gap": {
    "pos": "n.",
    "en_def": "an empty period of time or space",
    "cn_def": "空白；間隔"
  },
  "break": {
    "pos": "n.",
    "en_def": "a short stop or pause in an activity or relationship",
    "cn_def": "中斷；暫停"
  },
  "absence": {
    "pos": "n.",
    "en_def": "the time when someone is away",
    "cn_def": "不在；缺席"
  },
  "silence": {
    "pos": "n.",
    "en_def": "a time when there is no sound or no communication",
    "cn_def": "沉默；沒有消息"
  },
  "estrangement": {
    "pos": "n.",
    "en_def": "the state of no longer being friendly or in contact",
    "cn_def": "疏遠；不和"
  },
  "remoteness": {
    "pos": "n.",
    "en_def": "the state of being far away from other places",
    "cn_def": "偏遠；遙遠"
  },
  "indifference": {
    "pos": "n.",
    "en_def": "a lack of interest or care",
    "cn_def": "冷漠；漠不關心"
  },
  "disengaged": {
    "pos": "adj.",
    "en_def": "not interested or involved in something",
    "cn_def": "不投入的；疏離的"
  },
  "uninvolved": {
    "pos": "adj.",
    "en_def": "not taking part in something",
    "cn_def": "未參與的；置身事外的"
  },
  "forgotten": {
    "pos": "adj.",
    "en_def": "no longer remembered or thought about",
    "cn_def": "被遺忘的"
  },
  "unresponsive": {
    "pos": "adj.",
    "en_def": "not answering or reacting",
    "cn_def": "沒有回應的"
  },
  "neglected": {
    "pos": "adj.",
    "en_def": "not looked after or cared for",
    "cn_def": "被忽視的；無人照顧的"
  },
  "casual": {
    "pos": "adj.",
    "en_def": "not regular or serious; happening now and then",
    "cn_def": "偶爾的；隨意的"
  },
  "occasional": {
    "pos": "adj.",
    "en_def": "happening sometimes but not often",
    "cn_def": "偶爾的"
  },
  "sporadic": {
    "pos": "adj.",
    "en_def": "happening only now and then, not regularly",
    "cn_def": "零星的；斷斷續續的"
  },
  "intermittent": {
    "pos": "adj.",
    "en_def": "stopping and starting again many times",
    "cn_def": "間歇的；時斷時續的"
  }
};

const EXTRA_GLOSSES = {};
