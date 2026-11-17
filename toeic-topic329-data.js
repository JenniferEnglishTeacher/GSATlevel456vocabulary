// Topic 329 Quiz Data: Request Letter 請求信
// Source word list: https://www.examword.com/group-topic/request-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T329 - Request Letter 請求信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ask for",
    "pos": "v.phr.",
    "cn_def": "要求；請求",
    "en_def": "to say that you want someone to give you something",
    "sentence": "A: The printer in our office keeps breaking down, and the sales team can't print contracts for tomorrow's client meeting, so what should we do? B: I think we should write a short letter to the facilities manager to {{BLANK}} a new machine, and explain how much time and money the old one is costing us every week.",
    "cn": "A：我們辦公室的印表機一直故障，業務團隊沒辦法列印明天客戶會議要用的合約，我們該怎麼辦？ B：我覺得我們應該寫一封簡短的信給設施經理，【要求】一台新機器，並說明舊機器每週讓我們浪費多少時間和金錢。"
  },
  {
    "word": "inquire",
    "pos": "v.",
    "cn_def": "詢問；打聽",
    "en_def": "to ask someone for information",
    "sentence": "A: I saw an advertisement for a conference room downtown, but it doesn't mention the price or whether it has a projector, so how can I find out? B: You should send a polite email to the building manager to {{BLANK}} about the rental fee, the equipment, and which dates are still open next month.",
    "cn": "A：我看到市中心一間會議室的廣告，但上面沒提到價格，也沒說有沒有投影機，我要怎麼查清楚？ B：你應該寄一封有禮貌的電子郵件給大樓管理員，【詢問】租金、設備，以及下個月還有哪些日期可以預訂。"
  },
  {
    "word": "inquiry",
    "pos": "n.",
    "cn_def": "詢問；查詢",
    "en_def": "a question you ask to get information",
    "sentence": "A: Has anyone answered the customer who wrote to us last Friday asking whether we can ship our furniture to Japan before the end of the year? B: Not yet, but I passed her {{BLANK}} to the shipping department this morning, and they promised to check the costs and get back to her by Wednesday.",
    "cn": "A：有人回覆上週五寫信來問我們能否在年底前把家具運到日本的那位顧客了嗎？ B：還沒，不過我今天早上已經把她的【詢問】轉給運輸部門，他們答應會查一下費用，並在星期三前回覆她。"
  },
  {
    "word": "seek",
    "pos": "v.",
    "cn_def": "尋求；設法得到",
    "en_def": "to try to get something, such as help or advice",
    "sentence": "A: Our small company wants to open a new branch in Taichung next year, but we don't have enough money to rent an office and hire staff, do we? B: That's right, so the manager is writing a formal letter to the bank to {{BLANK}} a loan, and she will explain our sales growth and future plans clearly.",
    "cn": "A：我們這家小公司明年想在台中開一間新分公司，但我們沒有足夠的錢租辦公室和聘請員工，對吧？ B：沒錯，所以經理正在寫一封正式信函給銀行來【尋求】貸款，她會清楚說明我們的業績成長和未來計畫。"
  },
  {
    "word": "permission",
    "pos": "n.",
    "cn_def": "許可；准許",
    "en_def": "the act of allowing someone to do something",
    "sentence": "A: I'd like to use some photos from the city museum's website in our new travel brochure, but is it legal to copy them without telling anyone? B: No, you need to write to the museum and request {{BLANK}} first, because the pictures belong to them, and using them without asking could cause serious legal problems for our company.",
    "cn": "A：我想在我們新的旅遊手冊裡使用市立博物館網站上的一些照片，但不告訴任何人就直接複製合法嗎？ B：不合法，你必須先寫信給博物館申請【許可】，因為那些照片屬於他們，未經詢問就使用可能會給公司帶來嚴重的法律問題。"
  },
  {
    "word": "approval",
    "pos": "n.",
    "cn_def": "批准；核准",
    "en_def": "official agreement that a plan or request is acceptable",
    "sentence": "A: The marketing team has finished planning the summer advertising campaign, so can we start printing the posters and buying ads on social media this week? B: Not yet, because the plan costs more than our usual budget, and we still need the director's {{BLANK}} before we spend any money, so I sent her a request letter yesterday.",
    "cn": "A：行銷團隊已經規劃好夏季廣告活動了，我們這週可以開始印海報和在社群媒體上買廣告了嗎？ B：還不行，因為這個計畫的花費超出我們平常的預算，花錢之前我們還需要主任的【批准】，所以我昨天寄了一封請求信給她。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；援助",
    "en_def": "help, such as money or encouragement, that you give someone",
    "sentence": "A: The community center wants to hold a free English workshop for local children this summer, but where will the money for books and teachers come from? B: The organizer has written letters to several local businesses asking for their {{BLANK}}, and two bookstores have already agreed to donate materials and help with advertising.",
    "cn": "A：社區中心今年夏天想為當地兒童舉辦免費的英語工作坊，但買書和請老師的錢要從哪裡來？ B：主辦人已經寫信給幾家當地企業請求他們的【支持】，而且已經有兩家書店同意捐贈教材並協助宣傳。"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "協助；幫助",
    "en_def": "help",
    "sentence": "A: Our new accounting software keeps showing an error message whenever we try to print the monthly reports, and nobody in the office knows how to fix it, right? B: That's correct, so I emailed the software company's technical team to request {{BLANK}}, and they said an engineer will connect to our computers remotely this afternoon.",
    "cn": "A：我們新的會計軟體每次要列印月報時都一直跳出錯誤訊息，辦公室裡沒有人知道怎麼修，對吧？ B：沒錯，所以我寄電子郵件給軟體公司的技術團隊請求【協助】，他們說今天下午會有工程師從遠端連線到我們的電腦。"
  },
  {
    "word": "favor",
    "pos": "n.",
    "cn_def": "幫忙；恩惠",
    "en_def": "something kind that you do to help someone",
    "sentence": "A: I need to finish this report for the client by Friday, but my laptop is being repaired, and the shop says it won't be ready until next Monday. B: Why don't you ask Kevin for a {{BLANK}}? He has an extra laptop at home, and he's usually happy to lend it to coworkers when they are in trouble.",
    "cn": "A：我必須在星期五前替客戶完成這份報告，但我的筆電正在送修，店家說要到下週一才會好。 B：你何不請凱文【幫個忙】？他家裡有一台多的筆電，而且同事遇到困難時，他通常很樂意借出去。"
  },
  {
    "word": "arrangement",
    "pos": "n.",
    "cn_def": "安排；協議",
    "en_def": "a plan made so that something can happen",
    "sentence": "A: Our visitors from the Tokyo office arrive next Tuesday, and they will need hotel rooms, airport pickup, and lunch on the first day, so who is handling it? B: Linda is in charge of the whole {{BLANK}}, and she has already booked three rooms near the office and asked a driver to meet them at the airport.",
    "cn": "A：東京辦公室的訪客下週二抵達，他們需要飯店房間、機場接送和第一天的午餐，是誰在處理這件事？ B：琳達負責整個【安排】，她已經在辦公室附近訂了三間房，也請了一位司機去機場接他們。"
  },
  {
    "word": "schedule",
    "pos": "v.",
    "cn_def": "安排（時間）；預定",
    "en_def": "to plan something for a certain time",
    "sentence": "A: The new manager wants to meet each member of the sales team individually before the end of the month, but everyone has a very busy calendar, don't they? B: Yes, so I sent an email asking each person to choose a free hour, and then I will {{BLANK}} the meetings for next Thursday and Friday in the small conference room.",
    "cn": "A：新經理想在月底前和業務團隊的每位成員個別面談，但大家的行程都很滿，不是嗎？ B：是的，所以我寄了電子郵件請每個人選一個空檔，然後我會把面談【安排】在下週四和週五的小會議室。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "約會；預約",
    "en_def": "an arranged time to meet someone",
    "sentence": "A: I've had a terrible toothache since yesterday, and I can barely concentrate on my work, so should I just leave the office and go to a dentist right now? B: Most clinics are very busy, so you should call first and make an {{BLANK}}, or you might wait for hours in the waiting room without seeing anyone.",
    "cn": "A：我從昨天開始牙齒就痛得很厲害，幾乎無法專心工作，我應該現在就離開辦公室去看牙醫嗎？ B：大部分的診所都很忙，所以你應該先打電話【預約】，不然你可能會在候診室等上好幾個小時都看不到醫生。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a chance to do something",
    "sentence": "A: Why did you write a letter to the head office in Singapore last week, when you're already happy with your job here in Taipei? B: I heard that they need someone to manage a new project there, and I requested the {{BLANK}} to work abroad for a year, because it would be great experience for my career.",
    "cn": "A：你在台北這裡的工作已經很愉快了，為什麼上週還寫信給新加坡總公司？ B：我聽說他們需要有人去那裡管理一個新專案，所以我申請了到國外工作一年的【機會】，因為這對我的職涯會是很棒的經驗。"
  },
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮",
    "en_def": "to think carefully about something before deciding",
    "sentence": "A: Our customers keep complaining that the store closes too early on weekends, but would the owners really be willing to change the opening hours? B: I wrote a letter asking them to {{BLANK}} staying open until ten on Saturdays and Sundays, and I included a survey showing that many shoppers want to come in the evening.",
    "cn": "A：顧客一直抱怨店裡週末太早打烊，但老闆們真的願意更改營業時間嗎？ B：我寫了一封信請他們【考慮】週六和週日營業到十點，並附上一份調查，顯示很多購物者想在晚上來店。"
  },
  {
    "word": "consideration",
    "pos": "n.",
    "cn_def": "考慮；斟酌",
    "en_def": "careful thought about something",
    "sentence": "A: I just finished my application letter for the design position at the advertising agency, but I'm not sure how I should end it politely. B: You could finish by thanking them for their time and {{BLANK}}, and then mention that you look forward to hearing from them and discussing your portfolio in an interview.",
    "cn": "A：我剛寫完應徵廣告公司設計職位的求職信，但不確定該怎麼有禮貌地結尾。 B：你可以在結尾感謝他們撥冗【考慮】，然後提到你期待收到他們的消息，並在面試時討論你的作品集。"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "cn_def": "安排；籌備",
    "en_def": "to plan or organize something",
    "sentence": "A: The clients from Germany want to see our factory in Taoyuan during their visit next week, but none of them speaks Chinese, so is that a problem? B: Not at all, I'll {{BLANK}} a tour with the factory manager and ask one of our bilingual engineers to guide them and explain each step of the production line.",
    "cn": "A：德國客戶下週來訪時想參觀我們在桃園的工廠，但他們都不會說中文，這會是個問題嗎？ B：一點也不會，我會和廠長【安排】一次參觀，並請一位會說雙語的工程師帶他們參觀，解說生產線的每個步驟。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供",
    "en_def": "to give someone something they need",
    "sentence": "A: The hotel says it can host our company's year-end party for two hundred people, but what exactly do we have to bring ourselves? B: According to their letter, they will {{BLANK}} the tables, chairs, sound system, and a buffet dinner, so we only need to prepare the decorations, prizes, and the program for the evening.",
    "cn": "A：飯店說可以承辦我們公司兩百人的尾牙，但我們到底得自己帶哪些東西？ B：根據他們的來信，他們會【提供】桌椅、音響設備和自助晚餐，所以我們只需要準備布置、獎品和當晚的節目流程。"
  },
  {
    "word": "grant",
    "pos": "v.",
    "cn_def": "准予；同意",
    "en_def": "to officially give or allow what someone asks for",
    "sentence": "A: Did the city government answer our letter about holding a weekend market in the park next to the train station? B: Yes, they decided to {{BLANK}} our request, so we can set up fifty booths on the first Saturday of every month, as long as we clean up the area and finish before six.",
    "cn": "A：市政府回覆我們想在火車站旁公園舉辦週末市集的那封信了嗎？ B：回覆了，他們決定【准許】我們的請求，所以只要我們打掃好場地並在六點前結束，就可以在每個月第一個星期六擺五十個攤位。"
  },
  {
    "word": "allow",
    "pos": "v.",
    "cn_def": "允許；准許",
    "en_def": "to let someone do something",
    "sentence": "A: Many of our employees have asked whether they can work from home on Fridays, since their commute takes more than an hour each way. B: The manager read their request letter carefully and agreed to {{BLANK}} staff to work remotely one day a week, as long as they attend all online meetings and finish their tasks on time.",
    "cn": "A：很多員工問星期五能不能在家工作，因為他們單程通勤就要一個多小時。 B：經理仔細看了他們的請求信，同意【允許】員工每週遠距工作一天，只要他們參加所有線上會議並準時完成工作。"
  },
  {
    "word": "permit",
    "pos": "v.",
    "cn_def": "允許；許可",
    "en_def": "to allow something, especially by rules or law",
    "sentence": "A: Can we put a large sign advertising our new coffee shop on the sidewalk in front of the building, or will the neighbors complain about it? B: The building rules don't {{BLANK}} signs on the sidewalk, so I wrote to the property manager to ask whether we could hang one above the front door instead.",
    "cn": "A：我們可以在大樓前面的人行道上放一個宣傳新咖啡店的大招牌嗎？還是鄰居會抱怨？ B：大樓規定不【允許】在人行道上放招牌，所以我寫信給物業經理，問我們能不能改掛在大門上方。"
  },
  {
    "word": "possible",
    "pos": "adj.",
    "cn_def": "可能的；可行的",
    "en_def": "able to happen or be done",
    "sentence": "A: Our client in Kaohsiung needs the new product samples for an important meeting on Thursday, but our normal shipping takes about a week, doesn't it? B: Yes, so I wrote to the delivery company to ask whether it is {{BLANK}} to send the package by express service, even if it costs a little more than usual.",
    "cn": "A：我們高雄的客戶星期四有個重要會議需要新產品樣品，但我們一般的運送大約要一週，不是嗎？ B：是的，所以我寫信問貨運公司是否【有可能】用快遞寄送這個包裹，就算費用比平常高一點也沒關係。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "可用的；有空的",
    "en_def": "free to be used or to do something",
    "sentence": "A: I'd like to book the large meeting room for a training session with the new staff next Wednesday morning, but who should I talk to first? B: Please send a short request to the office manager, because she keeps the booking calendar and can tell you whether the room is {{BLANK}} at that time or already reserved.",
    "cn": "A：我想預訂大會議室，下週三早上為新進員工上培訓課，我應該先找誰？ B：請寄一份簡短的申請給辦公室經理，因為她管理預約行事曆，可以告訴你那個時段會議室是【可以使用的】還是已經被預訂了。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的；合宜的",
    "en_def": "easy for you and not causing problems",
    "sentence": "A: The supplier wants to visit our office next week to show us their new packaging materials, but my schedule is quite full, so what should I tell them? B: Just reply to their letter and suggest two or three times that are {{BLANK}} for you, such as Tuesday afternoon or Thursday morning, and let them choose one.",
    "cn": "A：供應商下週想來我們辦公室展示新的包裝材料，但我的行程很滿，我該怎麼回覆他們？ B：就回信給他們，提出兩三個你【方便的】時間，例如星期二下午或星期四早上，讓他們選一個。"
  },
  {
    "word": "suitable",
    "pos": "adj.",
    "cn_def": "合適的；適當的",
    "en_def": "right or good for a certain purpose",
    "sentence": "A: We need a larger venue for our annual sales conference this year, because more than three hundred people have already signed up, haven't they? B: Yes, so I wrote to several hotels asking whether they have a hall {{BLANK}} for a large group, with good parking, a stage, and strong internet for our online guests.",
    "cn": "A：我們今年的年度業務大會需要更大的場地，因為已經有三百多人報名了，不是嗎？ B：是的，所以我寫信問了幾家飯店，看他們有沒有【適合】大型團體的大廳，要有方便的停車場、舞台，以及給線上來賓用的穩定網路。"
  },
  {
    "word": "urgent",
    "pos": "adj.",
    "cn_def": "緊急的；急迫的",
    "en_def": "needing attention or action immediately",
    "sentence": "A: Why did you mark the email to the IT department in red and send it to the manager as well, instead of just waiting for their reply? B: Because the online payment system on our website stopped working an hour ago, and this is an {{BLANK}} problem, since customers can't buy anything until it is fixed.",
    "cn": "A：你為什麼把寄給資訊部的電子郵件標成紅色，還同時寄給經理，而不是等他們回覆就好？ B：因為我們網站的線上付款系統一小時前停擺了，這是個【緊急的】問題，在修好之前顧客什麼都買不了。"
  },
  {
    "word": "kindly",
    "pos": "adv.",
    "cn_def": "敬請；親切地",
    "en_def": "a polite word used when asking someone to do something",
    "sentence": "A: I'm writing to a hotel to ask them to change our reservation from three nights to four, but I'm worried my email sounds too direct and rude. B: Try adding polite phrases like \"Could you {{BLANK}} extend our booking by one night?\" because hotel staff usually respond better when the message sounds respectful and friendly.",
    "cn": "A：我正在寫信給飯店，請他們把我們的訂房從三晚改成四晚，但我擔心我的信聽起來太直接、太沒禮貌。 B：試著加上一些客氣的說法，像是「能否【敬請】將我們的訂房延長一晚？」因為訊息聽起來尊重又友善時，飯店人員通常回應得比較好。"
  },
  {
    "word": "hope",
    "pos": "v.",
    "cn_def": "希望；盼望",
    "en_def": "to want something to happen",
    "sentence": "A: Have you finished the letter to the training center about holding our two-day workshop in their classrooms next month? B: Almost, I just need to write the last line, where I say that we {{BLANK}} to hear from them soon, because we need to confirm the dates before we announce the event.",
    "cn": "A：你寫完給訓練中心的信了嗎？就是關於下個月借他們教室辦兩天工作坊的那封。 B：快好了，我只需要寫最後一句，說我們【希望】很快收到他們的回覆，因為在宣布活動之前我們得先確認日期。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感激；感謝",
    "en_def": "to be thankful for something",
    "sentence": "A: The supplier delivered our missing order on a Sunday so that we could open the new store on time, so how should we thank them? B: I think we should send a short letter to their manager saying that we really {{BLANK}} their quick help, and maybe order a gift basket for the delivery team as well.",
    "cn": "A：供應商在星期天把我們漏送的貨送來，讓我們新店能準時開幕，我們該怎麼感謝他們？ B：我覺得我們應該寄一封簡短的信給他們的經理，說我們非常【感謝】他們迅速的幫忙，也許再訂一個禮籃送給送貨團隊。"
  },
  {
    "word": "grateful",
    "pos": "adj.",
    "cn_def": "感激的",
    "en_def": "feeling thankful",
    "sentence": "A: The volunteers from the university helped us organize the charity concert for free, and the event raised more money than we expected, didn't it? B: Yes, so the director wrote each of them a personal letter saying how {{BLANK}} she was for their hard work, time, and creative ideas that made the evening a big success.",
    "cn": "A：大學來的志工免費幫我們籌辦慈善音樂會，而且這次活動募到的錢比我們預期的還多，對吧？ B：對，所以主任親自寫信給每一位志工，說她非常【感激】他們的辛勞、付出的時間，以及讓當晚大獲成功的創意點子。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆；答覆",
    "en_def": "to answer someone, especially a letter or email",
    "sentence": "A: I sent a letter to the landlord two weeks ago asking him to fix the broken air conditioner in our office, but nothing has happened since then. B: If he doesn't {{BLANK}} by Friday, you should call his office directly, because the weather is getting hotter and the staff can't work comfortably in such a warm room.",
    "cn": "A：我兩週前寫信請房東修理我們辦公室壞掉的冷氣，但從那之後就毫無動靜。 B：如果他星期五前還沒【回覆】，你應該直接打電話到他的辦公室，因為天氣越來越熱，員工在這麼悶熱的房間裡沒辦法舒服地工作。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應；回覆",
    "en_def": "to answer or react to something",
    "sentence": "A: How long does the customer service team usually take to answer the request letters and emails that customers send through our website? B: Our goal is to {{BLANK}} within twenty-four hours, but during holiday sales we receive so many messages that it sometimes takes two or three days to answer everyone.",
    "cn": "A：客服團隊通常要多久才會回答顧客透過我們網站寄來的請求信和電子郵件？ B：我們的目標是在二十四小時內【回應】，但節日特賣期間我們收到太多訊息，有時要兩三天才能回答完所有人。"
  },
  {
    "word": "prompt",
    "pos": "adj.",
    "cn_def": "迅速的；及時的",
    "en_def": "done quickly and without delay",
    "sentence": "A: The client wrote to us this morning asking for a price list and delivery dates for five hundred office chairs, and she sounded quite impatient. B: Then let's send her a {{BLANK}} answer before lunch, because a quick reply shows that we are professional and could help us win this large order from her company.",
    "cn": "A：客戶今天早上寫信來，要五百張辦公椅的價目表和交貨日期，她聽起來相當不耐煩。 B：那我們午餐前就給她一個【迅速的】答覆吧，因為快速回覆能顯示我們很專業，也可能幫我們贏得她公司的這筆大訂單。"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "in a short time from now",
    "sentence": "A: Our team needs the sales figures from the Taichung branch to finish the quarterly report, and the deadline for the report is this Friday afternoon. B: I already wrote to their manager this morning and asked her to send the numbers as {{BLANK}} as possible, and she promised to email them before the end of the day.",
    "cn": "A：我們團隊需要台中分公司的業績數字來完成季報，而報告的截止時間是這週五下午。 B：我今天早上已經寫信給他們的經理，請她【盡快】把數字寄來，她答應會在今天下班前用電子郵件寄出。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認；證實",
    "en_def": "to say or check that something is true or will happen",
    "sentence": "A: I booked a table for twelve people at the Italian restaurant for our team dinner on Friday, but I haven't heard anything from them since then. B: You should call or email them today to {{BLANK}} the reservation, because popular restaurants sometimes cancel bookings that are not checked again a few days before.",
    "cn": "A：我在那家義大利餐廳訂了十二人的位子，要辦星期五的團隊聚餐，但之後就沒有收到他們任何消息。 B：你今天應該打電話或寄信給他們【確認】訂位，因為熱門餐廳有時會取消那些在前幾天沒有再次確認的訂位。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清；闡明",
    "en_def": "to make something easier to understand",
    "sentence": "A: The new contract from our supplier says that delivery costs are \"included in some cases,\" but it doesn't explain which cases, does it? B: No, it's very confusing, so I'm writing them a letter asking them to {{BLANK}} that sentence and tell us exactly when we will have to pay the shipping fees ourselves.",
    "cn": "A：供應商的新合約上寫著運費「在某些情況下已包含」，但沒說明是哪些情況，對吧？ B：沒錯，這很令人困惑，所以我正在寫信請他們【說明清楚】那句話，並告訴我們到底什麼時候得自己付運費。"
  },
  {
    "word": "information",
    "pos": "n.",
    "cn_def": "資訊；資料",
    "en_def": "facts or details about something",
    "sentence": "A: I'm thinking about taking an evening course in business English at the language school near our office, but I don't know how much it costs. B: You can send them a short email requesting more {{BLANK}} about the fees, class times, and teachers, and they usually answer with a brochure within a day or two.",
    "cn": "A：我在考慮去辦公室附近的語言學校上商用英語夜間課程，但不知道要多少錢。 B：你可以寄一封簡短的電子郵件給他們，索取更多關於費用、上課時間和老師的【資訊】，他們通常一兩天內就會回覆並附上簡介手冊。"
  },
  {
    "word": "detail",
    "pos": "n.",
    "cn_def": "細節；詳情",
    "en_def": "a small fact or piece of information",
    "sentence": "A: The manager approved our request to hold a team-building trip next month, but she wants to know exactly what we will do on each day. B: Then we should write her a plan that explains every {{BLANK}}, including the bus times, the hotel, the activities, the meals, and how much each part will cost the company.",
    "cn": "A：經理批准了我們下個月舉辦團隊建立旅遊的請求，但她想確切知道我們每天要做什麼。 B：那我們應該寫一份計畫給她，說明每個【細節】，包括巴士時間、飯店、活動、餐點，以及每個部分要花公司多少錢。"
  },
  {
    "word": "document",
    "pos": "n.",
    "cn_def": "文件",
    "en_def": "an official paper that gives information",
    "sentence": "A: The bank asked us to send more paperwork before they can approve our company's loan application, but which papers do they still need? B: According to their letter, we must send one more {{BLANK}} that shows our sales for the past three years, and it has to be signed by our accountant.",
    "cn": "A：銀行要我們再寄更多書面資料，他們才能核准我們公司的貸款申請，但他們還需要哪些文件？ B：根據他們的來信，我們還必須寄一份顯示過去三年營業額的【文件】，而且要有我們會計師的簽名。"
  },
  {
    "word": "matter",
    "pos": "n.",
    "cn_def": "事情；問題",
    "en_def": "a subject or situation that you must deal with",
    "sentence": "A: Have you heard back from the head office about the mistake in our salaries last month, when everyone in our department was paid less than usual? B: Yes, the HR director wrote back and said she is looking into the {{BLANK}} personally, and the missing money will be added to our paychecks at the end of this month.",
    "cn": "A：關於上個月我們部門每個人薪水都少發的錯誤，總公司有回覆你了嗎？ B：有，人資主任回信說她正親自調查這件【事】，少發的錢會在這個月底加進我們的薪資裡。"
  },
  {
    "word": "situation",
    "pos": "n.",
    "cn_def": "情況；處境",
    "en_def": "the things happening at a certain time and place",
    "sentence": "A: Because of the typhoon, our shipment of raw materials from Vietnam will arrive almost a week late, so what should we tell our customers? B: I think we should write to them right away, explain the {{BLANK}} honestly, and ask whether they can accept a later delivery date or a partial shipment this week.",
    "cn": "A：因為颱風，我們從越南進口的原料會晚將近一週才到，我們該怎麼跟客戶說？ B：我認為我們應該馬上寫信給他們，誠實說明【情況】，並詢問他們能否接受延後交貨，或是這週先部分出貨。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意；處理",
    "en_def": "the act of noticing or dealing with something",
    "sentence": "A: I wrote a letter to the company about a problem with my order, but I don't know the name of the person who handles customer complaints. B: In that case, you can address it to the customer service manager and write \"For the {{BLANK}} of the Customer Service Department\" at the top so it reaches the right person.",
    "cn": "A：我寫了一封信給那家公司反映我訂單的問題，但我不知道負責處理顧客投訴的人叫什麼名字。 B：這樣的話，你可以把信寄給客服經理，並在最上方寫上「客服部【收】」，這樣信就會送到對的人手上。"
  },
  {
    "word": "time off",
    "pos": "n.phr.",
    "cn_def": "休假；請假",
    "en_def": "a period when you are allowed not to work",
    "sentence": "A: My sister is getting married in Tainan next month, and I need to help my family prepare for the wedding, so what should I do about work? B: You should write a short letter to your manager to request some {{BLANK}}, and explain the dates clearly so the team can plan who will cover your tasks.",
    "cn": "A：我妹妹下個月要在台南結婚，我得幫家人準備婚禮，那工作方面我該怎麼辦？ B：你應該寫一封簡短的信給經理申請【休假】，並清楚說明日期，好讓團隊安排誰來接手你的工作。"
  },
  {
    "word": "extension",
    "pos": "n.",
    "cn_def": "延期；延長",
    "en_def": "extra time given to finish something",
    "sentence": "A: The client wants us to add three more chapters to the training manual, but we only have one week left before the original deadline, right? B: Yes, so I'm writing to them to ask for an {{BLANK}} of two weeks, because we can't finish the extra work properly in such a short period.",
    "cn": "A：客戶要我們在培訓手冊裡再加三章，但離原定截止日只剩一週了，對吧？ B：對，所以我正在寫信給他們，請求【延期】兩週，因為在這麼短的時間內我們沒辦法把額外的工作做好。"
  },
  {
    "word": "recommendation",
    "pos": "n.",
    "cn_def": "推薦；推薦信",
    "en_def": "a statement that someone is good for a job or a purpose",
    "sentence": "A: I'm applying for a marketing position at an international company, and they want a letter from someone who knows my work well, so who should I ask? B: Your former supervisor would be perfect, so send her a polite email asking for a {{BLANK}}, and remind her of the projects you completed together last year.",
    "cn": "A：我正在應徵一家國際公司的行銷職位，他們要一封由熟悉我工作表現的人寫的信，我該請誰寫？ B：你之前的主管會是最佳人選，寄一封有禮貌的電子郵件請她幫你寫【推薦信】，並提醒她你們去年一起完成的專案。"
  },
  {
    "word": "sincerely",
    "pos": "adv.",
    "cn_def": "誠摯地；謹啟",
    "en_def": "in an honest way; also used to end a formal letter",
    "sentence": "A: I've finished writing the formal request letter to the university asking to use their auditorium for our company event, but how should I sign it? B: For a formal letter like this, you can end with \"Yours {{BLANK}},\" followed by your full name, your job title, and your company's contact information.",
    "cn": "A：我寫完了給大學的正式請求信，想借用他們的禮堂辦公司活動，但我該怎麼署名？ B：像這樣的正式信函，你可以用「【謹啟】」作結尾，後面接上你的全名、職稱和公司的聯絡資訊。"
  }
];

const MCQS = [
  {
    "q": "Thank you for your _____ about our office furniture. A price list and a product catalog are attached to this email.",
    "options": [
      "inquiry",
      "permission",
      "extension",
      "favor"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Employees must get written _____ from a supervisor before using the company car. Requests should be sent at least two days in advance.",
    "options": [
      "opportunity",
      "matter",
      "permission",
      "situation"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The budget for the new website still needs the board's _____. The directors will vote on it at Monday's meeting.",
    "options": [
      "extension",
      "approval",
      "inquiry",
      "situation"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "If you have trouble logging in to the system, please contact the IT desk. A technician will be happy to provide _____.",
    "options": [
      "permission",
      "extension",
      "matter",
      "assistance"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Ms. Lee is fully booked this morning. Please call her assistant to make an _____ for some time later this week.",
    "options": [
      "attention",
      "extension",
      "appointment",
      "information"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The internship offers students a valuable _____ to work with experienced engineers. Applications are due by the end of March.",
    "options": [
      "opportunity",
      "situation",
      "document",
      "matter"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The manager promised to _____ our proposal for flexible working hours. She will announce her decision after talking with the directors.",
    "options": [
      "inquire",
      "reply",
      "respond",
      "consider"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Our travel agent will _____ airport transportation for all conference speakers. Please send her your flight numbers by Friday.",
    "options": [
      "clarify",
      "arrange",
      "reply",
      "inquire"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The city council decided to _____ the theater's request for a late-night license. Performances may now continue until midnight on weekends.",
    "options": [
      "grant",
      "inquire",
      "clarify",
      "respond"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new policy will _____ employees to leave early on Fridays during the summer. Staff must still complete forty hours each week.",
    "options": [
      "consider",
      "clarify",
      "allow",
      "confirm"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Unfortunately, the large conference room is not _____ on Tuesday afternoon. It has already been reserved by the finance department.",
    "options": [
      "grateful",
      "available",
      "urgent",
      "prompt"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Please let us know which time is most _____ for you. Our technician can visit any weekday between nine and five.",
    "options": [
      "grateful",
      "prompt",
      "possible",
      "convenient"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The server has stopped working, and customers cannot place orders. This is an _____ issue that must be fixed immediately.",
    "options": [
      "grateful",
      "available",
      "urgent",
      "suitable"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "We would _____ it if you could send the signed contract by Thursday. Our legal team needs time to review it carefully.",
    "options": [
      "appreciate",
      "consider",
      "clarify",
      "confirm"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The hospital staff were very _____ for the donation of new wheelchairs. They wrote a thank-you letter to every donor last week.",
    "options": [
      "available",
      "convenient",
      "urgent",
      "grateful"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Customer service agents are expected to _____ to all complaints within one business day. Late answers may lead to unhappy customers.",
    "options": [
      "arrange",
      "respond",
      "consider",
      "grant"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Thank you for your _____ reply to our request. Your quick answer allowed us to finish the project on schedule.",
    "options": [
      "prompt",
      "possible",
      "suitable",
      "available"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Please call the hotel the day before your arrival to _____ your reservation. Bookings that are not checked may be canceled without notice.",
    "options": [
      "clarify",
      "inquire",
      "confirm",
      "appreciate"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The instructions in the manual are confusing to many users. We asked the manufacturer to _____ the steps for installing the software.",
    "options": [
      "grant",
      "clarify",
      "allow",
      "appreciate"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "For more _____ about the job opening, please visit our website. You can also contact the human resources office directly.",
    "options": [
      "situation",
      "extension",
      "approval",
      "information"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "Please sign the attached _____ and return it to our office by Friday. We cannot process your application without your signature.",
    "options": [
      "matter",
      "situation",
      "document",
      "attention"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "Because of the heavy snow, many flights have been canceled. The airline sent customers an email explaining the _____ and offering refunds.",
    "options": [
      "situation",
      "permission",
      "extension",
      "favor"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "Employees who need _____ for family events should submit a request two weeks in advance. Managers will try to approve every request.",
    "options": [
      "attention",
      "inquiry",
      "document",
      "time off"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The construction company asked for a two-week _____ on the project deadline. Heavy rain had delayed work on the new building.",
    "options": [
      "permission",
      "extension",
      "recommendation",
      "attention"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "Mr. Chen wrote a strong letter of _____ for his former assistant. It helped her get a job at a large international bank.",
    "options": [
      "recommendation",
      "permission",
      "inquiry",
      "extension"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "Small businesses often _____ advice from consultants before expanding overseas. Expert guidance can help them avoid costly mistakes in new markets.",
    "options": [
      "grant",
      "permit",
      "seek",
      "clarify"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Could you do me a _____ and pick up the visitors from the train station? My car is being repaired this afternoon.",
    "options": [
      "matter",
      "favor",
      "document",
      "detail"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "All guests are _____ requested to turn off their mobile phones during the presentation. Thank you for your cooperation this evening.",
    "options": [
      "soon",
      "sincerely",
      "nearly",
      "kindly"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Please direct your _____ to the screen at the front of the room. The speaker will now explain the new safety rules.",
    "options": [
      "permission",
      "approval",
      "attention",
      "information"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "The charity relies on the _____ of local businesses to run its programs. Last year, donations paid for over five hundred school meals.",
    "options": [
      "support",
      "inquiry",
      "extension",
      "permission"
    ],
    "answer": 0,
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "ask for": {
    "pos": "v.phr.",
    "en_def": "to say that you want someone to give you something",
    "cn_def": "要求；請求"
  },
  "inquire": {
    "pos": "v.",
    "en_def": "to ask someone for information",
    "cn_def": "詢問；打聽"
  },
  "inquiry": {
    "pos": "n.",
    "en_def": "a question you ask to get information",
    "cn_def": "詢問；查詢"
  },
  "seek": {
    "pos": "v.",
    "en_def": "to try to get something, such as help or advice",
    "cn_def": "尋求；設法得到"
  },
  "permission": {
    "pos": "n.",
    "en_def": "the act of allowing someone to do something",
    "cn_def": "許可；准許"
  },
  "approval": {
    "pos": "n.",
    "en_def": "official agreement that a plan or request is acceptable",
    "cn_def": "批准；核准"
  },
  "support": {
    "pos": "n.",
    "en_def": "help, such as money or encouragement, that you give someone",
    "cn_def": "支持；援助"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help",
    "cn_def": "協助；幫助"
  },
  "favor": {
    "pos": "n.",
    "en_def": "something kind that you do to help someone",
    "cn_def": "幫忙；恩惠"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "a plan made so that something can happen",
    "cn_def": "安排；協議"
  },
  "schedule": {
    "pos": "v.",
    "en_def": "to plan something for a certain time",
    "cn_def": "安排（時間）；預定"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arranged time to meet someone",
    "cn_def": "約會；預約"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something",
    "cn_def": "機會"
  },
  "consider": {
    "pos": "v.",
    "en_def": "to think carefully about something before deciding",
    "cn_def": "考慮"
  },
  "consideration": {
    "pos": "n.",
    "en_def": "careful thought about something",
    "cn_def": "考慮；斟酌"
  },
  "arrange": {
    "pos": "v.",
    "en_def": "to plan or organize something",
    "cn_def": "安排；籌備"
  },
  "provide": {
    "pos": "v.",
    "en_def": "to give someone something they need",
    "cn_def": "提供"
  },
  "grant": {
    "pos": "v.",
    "en_def": "to officially give or allow what someone asks for",
    "cn_def": "准予；同意"
  },
  "allow": {
    "pos": "v.",
    "en_def": "to let someone do something",
    "cn_def": "允許；准許"
  },
  "permit": {
    "pos": "v.",
    "en_def": "to allow something, especially by rules or law",
    "cn_def": "允許；許可"
  },
  "possible": {
    "pos": "adj.",
    "en_def": "able to happen or be done",
    "cn_def": "可能的；可行的"
  },
  "available": {
    "pos": "adj.",
    "en_def": "free to be used or to do something",
    "cn_def": "可用的；有空的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy for you and not causing problems",
    "cn_def": "方便的；合宜的"
  },
  "suitable": {
    "pos": "adj.",
    "en_def": "right or good for a certain purpose",
    "cn_def": "合適的；適當的"
  },
  "urgent": {
    "pos": "adj.",
    "en_def": "needing attention or action immediately",
    "cn_def": "緊急的；急迫的"
  },
  "kindly": {
    "pos": "adv.",
    "en_def": "a polite word used when asking someone to do something",
    "cn_def": "敬請；親切地"
  },
  "hope": {
    "pos": "v.",
    "en_def": "to want something to happen",
    "cn_def": "希望；盼望"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be thankful for something",
    "cn_def": "感激；感謝"
  },
  "grateful": {
    "pos": "adj.",
    "en_def": "feeling thankful",
    "cn_def": "感激的"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer someone, especially a letter or email",
    "cn_def": "回覆；答覆"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to answer or react to something",
    "cn_def": "回應；回覆"
  },
  "prompt": {
    "pos": "adj.",
    "en_def": "done quickly and without delay",
    "cn_def": "迅速的；及時的"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "in a short time from now",
    "cn_def": "很快；不久"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or check that something is true or will happen",
    "cn_def": "確認；證實"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "澄清；闡明"
  },
  "information": {
    "pos": "n.",
    "en_def": "facts or details about something",
    "cn_def": "資訊；資料"
  },
  "detail": {
    "pos": "n.",
    "en_def": "a small fact or piece of information",
    "cn_def": "細節；詳情"
  },
  "document": {
    "pos": "n.",
    "en_def": "an official paper that gives information",
    "cn_def": "文件"
  },
  "matter": {
    "pos": "n.",
    "en_def": "a subject or situation that you must deal with",
    "cn_def": "事情；問題"
  },
  "situation": {
    "pos": "n.",
    "en_def": "the things happening at a certain time and place",
    "cn_def": "情況；處境"
  },
  "attention": {
    "pos": "n.",
    "en_def": "the act of noticing or dealing with something",
    "cn_def": "注意；處理"
  },
  "time off": {
    "pos": "n.phr.",
    "en_def": "a period when you are allowed not to work",
    "cn_def": "休假；請假"
  },
  "extension": {
    "pos": "n.",
    "en_def": "extra time given to finish something",
    "cn_def": "延期；延長"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "a statement that someone is good for a job or a purpose",
    "cn_def": "推薦；推薦信"
  },
  "sincerely": {
    "pos": "adv.",
    "en_def": "in an honest way; also used to end a formal letter",
    "cn_def": "誠摯地；謹啟"
  }
};

const EXTRA_GLOSSES = {};
