// Topic 215 Quiz Data: Lecture 講座
// Source word list: https://www.examword.com/group-topic/lecture — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T215 - Lecture 講座",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "present",
    "pos": "v.",
    "cn_def": "發表；呈現",
    "en_def": "to show or give information to a group of people",
    "sentence": "A: Who is going to {{BLANK}} the new marketing plan at Friday's meeting, since our manager will be flying to Tokyo that morning? B: Linda from the sales team will do it, because she worked on the customer survey for three months and knows the numbers better than anyone else in the office.",
    "cn": "A：既然經理星期五早上要飛往東京，誰會在星期五的會議上【發表】新的行銷計畫？ B：業務團隊的琳達會負責，因為她做了三個月的顧客調查，比辦公室裡任何人都更了解這些數字。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告",
    "en_def": "a talk that shows and explains something to a group",
    "sentence": "A: How did your {{BLANK}} at the training center go yesterday afternoon, and did the new employees seem interested in the safety rules? B: It went quite well, although the computer stopped working for a few minutes, so I had to keep talking without any pictures until the technician arrived to fix it.",
    "cn": "A：你昨天下午在訓練中心的【簡報】進行得如何？新員工對安全規則有興趣嗎？ B：進行得還不錯，雖然電腦當機了幾分鐘，所以在技術人員來修好之前，我只好在沒有任何圖片的情況下繼續講。"
  },
  {
    "word": "speaker",
    "pos": "n.",
    "cn_def": "演講者；講者",
    "en_def": "a person who gives a talk at an event",
    "sentence": "A: Have you heard who the main {{BLANK}} will be at the business conference next month, because I need to decide whether to buy a ticket soon? B: Yes, it is the founder of a famous online bookstore, and she plans to talk about how small companies can grow quickly without spending too much money.",
    "cn": "A：你聽說下個月商業會議的主要【演講者】是誰了嗎？因為我得盡快決定要不要買票。 B：聽說了，是一家知名網路書店的創辦人，她打算談談小公司如何在不花太多錢的情況下快速成長。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "聽眾；觀眾",
    "en_def": "the people who watch or listen to a talk or show",
    "sentence": "A: Why did the organizers move the event from the small meeting room to the hotel ballroom at the last minute? B: More than three hundred people signed up online this week, so they needed a bigger space to make sure the whole {{BLANK}} could sit comfortably and see the stage clearly.",
    "cn": "A：為什麼主辦單位在最後一刻把活動從小會議室移到飯店宴會廳？ B：這週有三百多人在網路上報名，所以他們需要更大的空間，確保所有【聽眾】都能坐得舒適並清楚看到舞台。"
  },
  {
    "word": "topic",
    "pos": "n.",
    "cn_def": "主題；話題",
    "en_def": "the thing that a talk or discussion is about",
    "sentence": "A: Have you chosen a {{BLANK}} for your talk at the staff development day, or are you still thinking about several different ideas? B: I have finally decided to talk about time management, because many of my coworkers say they feel stressed and often stay late to finish their daily tasks.",
    "cn": "A：你已經為員工發展日的演講選好【主題】了嗎？還是仍在考慮幾個不同的點子？ B：我終於決定談時間管理，因為很多同事說他們感到壓力很大，而且常常留到很晚才完成每天的工作。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "科目；主題",
    "en_def": "the main thing that is being studied or talked about",
    "sentence": "A: What {{BLANK}} does Professor Chen teach at the evening business school, and do you think his class would help me in my new job? B: He teaches international trade, and since you will be working with suppliers in Vietnam and Thailand, his course would probably be very useful for you.",
    "cn": "A：陳教授在夜間商學院教什麼【科目】？你覺得他的課對我的新工作有幫助嗎？ B：他教國際貿易，既然你將和越南及泰國的供應商合作，他的課對你應該會非常有用。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear and easy to understand",
    "sentence": "A: Could you {{BLANK}} how the new expense system works before lunch, because I need to submit my receipts from last week's business trip today? B: Sure, it is actually quite simple; you just take a photo of each receipt with your phone, upload it to the website, and your manager approves it online.",
    "cn": "A：你能在午餐前【解釋】一下新的報帳系統怎麼運作嗎？因為我今天得交上週出差的收據。 B：當然，其實很簡單；你只要用手機拍下每張收據，上傳到網站，經理就會在線上核准。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示範；展示",
    "en_def": "to show how something works by doing it",
    "sentence": "A: Will someone from the company {{BLANK}} the new coffee machine before we start using it in the staff kitchen next Monday? B: Yes, a technician is coming on Friday afternoon to show everyone how to clean it properly, change the filters, and make different kinds of drinks without wasting milk.",
    "cn": "A：下週一我們開始在員工廚房使用新咖啡機之前，公司會派人來【示範】嗎？ B：會，星期五下午會有一位技術人員來教大家如何正確清潔、更換濾網，以及在不浪費牛奶的情況下做出各種飲品。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "舉例說明；圖解",
    "en_def": "to explain something by using examples or pictures",
    "sentence": "A: How can I make my talk about our sales results more interesting for the new staff, since many of them are not good with numbers? B: You should {{BLANK}} your main points with simple charts and a few real stories about customers, because people usually remember pictures and examples much better than long lists.",
    "cn": "A：既然很多新員工不擅長數字，我要怎麼讓關於銷售成果的演講更有趣？ B：你應該用簡單的圖表和幾個真實的顧客故事來【說明】你的重點，因為人們通常記得圖片和例子遠勝於冗長的清單。"
  },
  {
    "word": "note",
    "pos": "n.",
    "cn_def": "筆記；便條",
    "en_def": "a short written record that helps you remember something",
    "sentence": "A: Did you write down the important dates the manager mentioned during the meeting this morning, because I was answering a phone call and missed them? B: Yes, I made a {{BLANK}} of every deadline on my notepad, and I will send you a photo of it right after I finish checking these customer orders.",
    "cn": "A：你有寫下經理今天早上開會時提到的重要日期嗎？因為我當時在接電話，所以錯過了。 B：有，我在記事本上把每個截止日期都做了【筆記】，等我檢查完這些顧客訂單就馬上拍照傳給你。"
  },
  {
    "word": "handout",
    "pos": "n.",
    "cn_def": "講義；發放的資料",
    "en_def": "a sheet of paper with information that is given to people at a talk",
    "sentence": "A: How many copies of the {{BLANK}} should I print for this afternoon's training session, and should they be in color or black and white? B: Please print forty copies in black and white, because about thirty-five people registered, and we always need a few extra for latecomers or guests from other departments.",
    "cn": "A：今天下午的訓練課程我該印幾份【講義】？要印彩色還是黑白的？ B：請印四十份黑白的，因為大約有三十五人報名，而且我們總是需要幾份額外的給遲到的人或其他部門的來賓。"
  },
  {
    "word": "slide",
    "pos": "n.",
    "cn_def": "投影片",
    "en_def": "one page of a computer presentation that is shown on a screen",
    "sentence": "A: Why did the audience look so confused during the sales manager's talk this morning, even though the topic was not very difficult? B: Every {{BLANK}} he showed was full of tiny words and long numbers, so nobody in the back rows could read anything, and he spoke much too quickly as well.",
    "cn": "A：今天早上業務經理演講時，為什麼聽眾看起來那麼困惑，雖然主題並不難？ B：他放的每一張【投影片】都塞滿了小字和長串數字，所以後排的人什麼都看不清楚，而且他講得也太快了。"
  },
  {
    "word": "projector",
    "pos": "n.",
    "cn_def": "投影機",
    "en_def": "a machine that shows pictures or video on a screen or wall",
    "sentence": "A: Is everything ready in Meeting Room B for the client visit at two o'clock, or do we still need to set up the equipment? B: Almost everything is ready, but the {{BLANK}} is not working because its bulb burned out, so I have asked the IT department to bring a new one before the clients arrive.",
    "cn": "A：B會議室為兩點的客戶來訪準備好了嗎？還是我們仍需架設設備？ B：幾乎都準備好了，但【投影機】的燈泡燒壞了不能用，所以我已經請資訊部在客戶到達前送一台新的來。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "螢幕；銀幕",
    "en_def": "a flat surface on which pictures or information are shown",
    "sentence": "A: Why are people in the last rows of the conference hall complaining that they cannot see the speaker's charts very clearly? B: The {{BLANK}} at the front is too small for such a large room, so the hotel staff are bringing a bigger one from the ballroom during the coffee break.",
    "cn": "A：為什麼會議廳最後幾排的人抱怨看不清楚講者的圖表？ B：前面的【螢幕】對這麼大的房間來說太小了，所以飯店員工會在茶歇時從宴會廳搬一個更大的過來。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論會",
    "en_def": "a meeting where a group of people learn about or discuss a subject",
    "sentence": "A: Are you going to the free {{BLANK}} on online marketing that the chamber of commerce is holding downtown next Thursday afternoon? B: I would love to go, but I have to meet an important client that day, so I will ask my assistant to attend and take careful notes for me.",
    "cn": "A：你會去參加商會下週四下午在市中心舉辦的免費網路行銷【研討會】嗎？ B：我很想去，但那天我得跟一位重要客戶見面，所以我會請助理代我出席並仔細做筆記。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊；研習會",
    "en_def": "a meeting where people learn by doing practical activities",
    "sentence": "A: What did you learn at the customer service {{BLANK}} last weekend, and was it worth giving up your Saturday for it? B: It was really useful, because we practiced handling angry customers in small groups, and the trainer gave each of us helpful advice on how to stay calm and polite.",
    "cn": "A：你上週末在客服【工作坊】學到了什麼？值得犧牲你的星期六嗎？ B：真的很有用，因為我們分成小組練習處理生氣的顧客，而且培訓師給了我們每個人如何保持冷靜和禮貌的實用建議。"
  },
  {
    "word": "tutorial",
    "pos": "n.",
    "cn_def": "教學；教程",
    "en_def": "a lesson or video that teaches you how to do something step by step",
    "sentence": "A: How did you learn to use the new accounting software so quickly, when the rest of us are still having trouble with it? B: I watched a short online {{BLANK}} on the company website during my lunch break, and it showed every step clearly, so I was able to create reports by the afternoon.",
    "cn": "A：我們其他人還在為新的會計軟體傷腦筋，你怎麼這麼快就學會了？ B：我午休時在公司網站上看了一段簡短的線上【教學】，它把每個步驟都講得很清楚，所以下午我就能製作報表了。"
  },
  {
    "word": "instructor",
    "pos": "n.",
    "cn_def": "講師；教練",
    "en_def": "a person who teaches a skill or a class",
    "sentence": "A: Who will be the {{BLANK}} for the first aid training course that all office staff must complete before the end of this month? B: A nurse from the city hospital will teach it, and she has many years of experience, so I am sure the lessons will be practical and easy to follow.",
    "cn": "A：所有辦公室員工必須在本月底前完成的急救訓練課程，【講師】會是誰？ B：市立醫院的一位護理師會來教，她有多年經驗，所以我相信課程會很實用又容易跟上。"
  },
  {
    "word": "professor",
    "pos": "n.",
    "cn_def": "教授",
    "en_def": "a senior teacher at a university",
    "sentence": "A: Who gave that excellent talk about global supply chains at the trade fair yesterday, because I would like to invite the same person to speak to our team? B: It was a {{BLANK}} from National Taiwan University, and I have her business card in my bag, so I can send you her email address this afternoon.",
    "cn": "A：昨天在商展上那場關於全球供應鏈的精彩演講是誰講的？因為我想邀請同一位來對我們團隊演講。 B：是一位臺灣大學的【教授】，我包包裡有她的名片，今天下午可以把她的電子郵件地址寄給你。"
  },
  {
    "word": "educator",
    "pos": "n.",
    "cn_def": "教育工作者",
    "en_def": "a person whose job is teaching people",
    "sentence": "A: Why did the company hire a professional {{BLANK}} instead of asking our senior managers to train the new employees this year? B: Last year many new staff said the training was boring and confusing, so the director wanted someone with real teaching experience who knows how to make lessons clear and interesting.",
    "cn": "A：為什麼公司今年聘請專業的【教育工作者】，而不是請資深經理來訓練新員工？ B：去年很多新員工說訓練既無聊又令人困惑，所以主管想找一位有真正教學經驗、知道如何讓課程清楚又有趣的人。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "吸引（注意）；使投入",
    "en_def": "to get and keep someone's interest or attention",
    "sentence": "A: What is the best way to {{BLANK}} a large group of tired employees during a training session that starts right after lunch? B: I usually begin with a short game or a funny story, and then I ask people to work in pairs, because moving around and talking keeps everyone awake and interested.",
    "cn": "A：在午餐後馬上開始的訓練課程中，【吸引】一大群疲倦員工的最好方法是什麼？ B：我通常先玩個小遊戲或講個好笑的故事，然後請大家兩人一組合作，因為走動和交談能讓每個人保持清醒和興趣。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity or event",
    "sentence": "A: Do all employees have to {{BLANK}} in the safety training next week, or is it only for the workers in the factory and the warehouse? B: Everyone must join, including the office staff, because the new fire rules apply to the whole building, and the managers want to check that people know the emergency exits.",
    "cn": "A：所有員工都必須【參加】下週的安全訓練嗎？還是只有工廠和倉庫的工人？ B：每個人都必須參加，包括辦公室員工，因為新的消防規定適用於整棟大樓，而且經理們想確認大家都知道緊急出口在哪裡。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a conversation in which people share ideas about something",
    "sentence": "A: What happened after the speaker finished her talk on remote working at the conference yesterday afternoon? B: There was a long {{BLANK}} with the audience about whether staff should work from home two or three days a week, and many managers shared their own experiences and problems.",
    "cn": "A：昨天下午會議上那位講者講完遠距工作的演講後，發生了什麼事？ B：她和聽眾進行了一段很長的【討論】，談員工每週應該在家工作兩天還是三天，很多經理也分享了他們自己的經驗和問題。"
  },
  {
    "word": "question",
    "pos": "n.",
    "cn_def": "問題；提問",
    "en_def": "a sentence or phrase that asks for information",
    "sentence": "A: Did anyone ask the lecturer anything at the end of the talk on new tax rules, or did everyone leave as soon as it was over? B: One accountant from our firm asked a very good {{BLANK}} about small business deductions, and the lecturer spent almost ten minutes explaining the details to the whole room.",
    "cn": "A：在新稅法演講結束時有人向講師提問嗎？還是大家一結束就離開了？ B：我們公司有一位會計師提出了一個關於小企業扣除額的好【問題】，講師花了將近十分鐘向全場解釋細節。"
  },
  {
    "word": "answer",
    "pos": "v.",
    "cn_def": "回答",
    "en_def": "to reply to a question",
    "sentence": "A: Will the speaker {{BLANK}} questions from the audience after her talk on digital banking, or will there be no time left? B: She will take questions for about fifteen minutes at the end, so you should write yours down during the talk and raise your hand as soon as she finishes.",
    "cn": "A：講者在數位銀行的演講結束後會【回答】聽眾的問題嗎？還是會沒有時間？ B：她最後會接受大約十五分鐘的提問，所以你應該在演講時把你的問題寫下來，等她一講完就舉手。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清；闡明",
    "en_def": "to make something clearer by explaining it more",
    "sentence": "A: I am still confused about the new travel rules that the finance manager described in yesterday's meeting, especially the part about hotel costs. B: You should send her a short email and ask her to {{BLANK}} that point, because several other people in our department were also unsure what the limit is.",
    "cn": "A：我對財務經理在昨天會議上說明的新差旅規定還是很困惑，尤其是住宿費用的部分。 B：你應該寄一封簡短的電子郵件請她【說明清楚】那一點，因為我們部門還有好幾個人也不確定上限是多少。"
  },
  {
    "word": "summarize",
    "pos": "v.",
    "cn_def": "總結；概述",
    "en_def": "to give the main points of something in a short form",
    "sentence": "A: Our director missed the two-hour lecture on market trends this morning, and he wants to know the main ideas before tomorrow's board meeting. B: I will {{BLANK}} the most important points in one page and send it to him this afternoon, so he can read it quickly on the train home.",
    "cn": "A：我們的主管錯過了今天早上兩小時的市場趨勢講座，他想在明天董事會之前知道主要內容。 B：我會把最重要的重點【總結】成一頁，今天下午寄給他，這樣他就能在回家的火車上快速讀完。"
  },
  {
    "word": "outline",
    "pos": "n.",
    "cn_def": "大綱；概要",
    "en_def": "a short plan that shows the main parts of a talk or piece of writing",
    "sentence": "A: How should I start preparing my thirty-minute talk for the sales conference, since I have never spoken in front of so many people? B: First, write a simple {{BLANK}} with three or four main points, and then add examples and numbers under each one, so your talk will be clear and well organized.",
    "cn": "A：我從來沒在這麼多人面前說過話，該怎麼開始準備業務會議上三十分鐘的演講？ B：首先，寫一份包含三、四個重點的簡單【大綱】，然後在每個重點下加入例子和數字，這樣你的演講就會清楚又有條理。"
  },
  {
    "word": "emphasize",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is especially important",
    "sentence": "A: What did the safety officer {{BLANK}} most strongly during this morning's talk to the new warehouse workers? B: He said again and again that everyone must wear a hard hat and gloves at all times, because two workers were badly injured last year when boxes fell from the shelves.",
    "cn": "A：今天早上安全主管對新進倉庫工人演講時，最【強調】的是什麼？ B：他一再說每個人隨時都必須戴安全帽和手套，因為去年有兩名工人在箱子從架上掉下來時受了重傷。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give all your attention to one thing",
    "sentence": "A: Why did you move your desk to the quiet corner near the window, away from the busy reception area? B: I am preparing for an important lecture next week, and I need to {{BLANK}} on my notes without hearing phones ringing and visitors talking all day long.",
    "cn": "A：你為什麼把辦公桌搬到靠窗的安靜角落，遠離忙碌的接待區？ B：我正在準備下週一場重要的講座，我需要【專注】在我的筆記上，而不是整天聽到電話鈴響和訪客說話。"
  },
  {
    "word": "conclude",
    "pos": "v.",
    "cn_def": "結束；作結",
    "en_def": "to end a talk, meeting or event",
    "sentence": "A: How do you usually {{BLANK}} your training sessions, so that the new staff remember what they learned during the day? B: I always end with a short review of the three most important points, and then I give everyone a simple quiz with small prizes, which makes the last few minutes fun.",
    "cn": "A：你通常怎麼【結束】你的訓練課程，讓新員工記住當天學到的東西？ B：我總是以簡短複習三個最重要的重點作結，然後給大家一個有小獎品的簡單測驗，讓最後幾分鐘變得很有趣。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋意見",
    "en_def": "comments about how good or useful something is",
    "sentence": "A: How did the participants feel about the leadership course you ran last month, and are you planning to change anything next time? B: Most of the {{BLANK}} was positive, but a few people said the sessions were too long, so I will add more short breaks and group activities in the next course.",
    "cn": "A：參加者對你上個月開的領導力課程感覺如何？你打算下次改變什麼嗎？ B：大部分的【回饋意見】都是正面的，但有幾個人說每堂課太長了，所以下一期我會增加更多短暫休息和小組活動。"
  },
  {
    "word": "attentive",
    "pos": "adj.",
    "cn_def": "專心的；注意的",
    "en_def": "listening to or watching something carefully",
    "sentence": "A: How were the new interns during your talk on company history this morning, since it was their very first day at work? B: They were very {{BLANK}} and took lots of notes, and several of them stayed after the session to ask me about the different departments and future training programs.",
    "cn": "A：今天早上你講公司歷史時，新實習生表現如何？畢竟那是他們上班的第一天。 B：他們非常【專心】，做了很多筆記，而且有幾個人在課後留下來問我各部門和未來的培訓計畫。"
  },
  {
    "word": "informative",
    "pos": "adj.",
    "cn_def": "提供有用資訊的；增長見識的",
    "en_def": "giving useful information",
    "sentence": "A: Did you enjoy the lecture about saving energy in the office that the building manager organized on Tuesday afternoon? B: Yes, it was very {{BLANK}}, because he gave us many simple tips, such as turning off computers at night, which could cut our electricity bill by almost twenty percent.",
    "cn": "A：你喜歡大樓經理星期二下午舉辦的辦公室節能講座嗎？ B：喜歡，內容非常【有用又有資訊量】，因為他給了我們很多簡單的小訣竅，像是晚上關掉電腦，這能讓我們的電費減少將近百分之二十。"
  }
];

const MCQS = [
  {
    "q": "Linda Wang will _____ the results of the customer survey at tomorrow's meeting. She has prepared several charts for the managers.",
    "options": [
      "participate",
      "focus",
      "present",
      "conclude"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The sales director gave a short _____ on the new product line. Everyone in the room watched the slides carefully.",
    "options": [
      "audience",
      "presentation",
      "handout",
      "projector"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The keynote _____ at this year's conference is a famous business author. Tickets for her talk sold out within two days.",
    "options": [
      "audience",
      "handout",
      "outline",
      "speaker"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "More than five hundred people were in the _____ for the opening lecture. The hall was so full that some guests had to stand.",
    "options": [
      "audience",
      "speaker",
      "instructor",
      "projector"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The _____ of next week's lunchtime talk is managing stress at work. Staff who wish to attend should sign up by Friday.",
    "options": [
      "projector",
      "topic",
      "handout",
      "audience"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Could you please _____ why the shipment was delayed again? The client wants a clear reason before the end of the day.",
    "options": [
      "participate",
      "focus",
      "conclude",
      "explain"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "A technician will _____ how to operate the new printer on Monday morning. All office staff are asked to watch carefully.",
    "options": [
      "demonstrate",
      "participate",
      "conclude",
      "focus"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The lecturer used real company examples to _____ her main points. This made the difficult theory much easier to understand.",
    "options": [
      "participate",
      "illustrate",
      "engage",
      "answer"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Each participant received a two-page _____ at the start of the workshop. It listed the key terms and several useful websites.",
    "options": [
      "projector",
      "speaker",
      "handout",
      "audience"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The final _____ of the presentation showed the company's sales targets for next year. The manager left it up during the questions.",
    "options": [
      "slide",
      "projector",
      "audience",
      "instructor"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The _____ in Conference Room A is broken, so no images can be shown on the wall. Please use Room C for your meeting instead.",
    "options": [
      "handout",
      "outline",
      "audience",
      "projector"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The bank is holding a free _____ on retirement planning next Saturday morning. Seats are limited, so please register online soon.",
    "options": [
      "projector",
      "seminar",
      "handout",
      "speaker"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "During the hands-on _____, participants practiced writing business emails in small groups. The trainer checked the work of each group.",
    "options": [
      "workshop",
      "audience",
      "projector",
      "outline"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "New users can watch a five-minute video _____ that explains each feature of the app. It is available on our help page.",
    "options": [
      "audience",
      "projector",
      "professor",
      "tutorial"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Our yoga _____ asks everyone to arrive ten minutes early for each class. She also reminds us to bring our own mats.",
    "options": [
      "audience",
      "instructor",
      "handout",
      "projector"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Linda Lin is a _____ of economics at a university in Taichung. She often gives public talks about local business trends.",
    "options": [
      "audience",
      "handout",
      "projector",
      "professor"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "As an experienced _____, Ken Huang has trained hundreds of teachers across Asia. He now designs courses for adult learners.",
    "options": [
      "educator",
      "audience",
      "handout",
      "projector"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Good speakers use stories and questions to _____ their listeners. This keeps people interested until the very end of the talk.",
    "options": [
      "conclude",
      "clarify",
      "engage",
      "summarize"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "All new employees are required to _____ in the two-day orientation program. Lunch will be provided for everyone on both days.",
    "options": [
      "explain",
      "conclude",
      "focus",
      "participate"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "After the talk, there will be an open _____ about the future of remote work. Everyone is welcome to share their opinions.",
    "options": [
      "projector",
      "handout",
      "discussion",
      "outline"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The speaker will _____ questions from the audience for fifteen minutes after her talk. Please raise your hand if you wish to speak.",
    "options": [
      "answer",
      "focus",
      "conclude",
      "participate"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "If any part of the contract is unclear, please ask our lawyer to _____ it. We want both sides to fully understand the terms.",
    "options": [
      "participate",
      "focus",
      "conclude",
      "clarify"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "At the end of the meeting, the chairperson will briefly _____ the main decisions. The minutes will then be emailed to all members.",
    "options": [
      "summarize",
      "participate",
      "focus",
      "engage"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Please send me a short _____ of your presentation by Wednesday. I only need the main points, not the full text.",
    "options": [
      "audience",
      "outline",
      "projector",
      "instructor"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The manager wanted to _____ that safety always comes first in the factory. She repeated this point several times during the meeting.",
    "options": [
      "participate",
      "engage",
      "emphasize",
      "focus"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Please turn off your phones so that everyone can _____ on the speaker. Questions can be asked at the end of the session.",
    "options": [
      "conclude",
      "focus",
      "explain",
      "demonstrate"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The president will _____ the annual meeting with a short speech of thanks. After that, dinner will be served in the main hall.",
    "options": [
      "participate",
      "focus",
      "conclude",
      "engage"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "We would appreciate your _____ on today's training session. Please fill out the short form before you leave the room.",
    "options": [
      "feedback",
      "projector",
      "audience",
      "speaker"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The students were very _____ during the guest lecture and took careful notes. The speaker praised them for their strong interest.",
    "options": [
      "informative",
      "attentive",
      "expensive",
      "empty"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The museum guide gave a very _____ talk about the history of the building. Visitors learned many facts they had never heard before.",
    "options": [
      "attentive",
      "nervous",
      "informative",
      "absent"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "present": {
    "pos": "v.",
    "en_def": "to show or give information to a group of people",
    "cn_def": "發表；呈現"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that shows and explains something to a group",
    "cn_def": "簡報；報告"
  },
  "speaker": {
    "pos": "n.",
    "en_def": "a person who gives a talk at an event",
    "cn_def": "演講者；講者"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to a talk or show",
    "cn_def": "聽眾；觀眾"
  },
  "topic": {
    "pos": "n.",
    "en_def": "the thing that a talk or discussion is about",
    "cn_def": "主題；話題"
  },
  "subject": {
    "pos": "n.",
    "en_def": "the main thing that is being studied or talked about",
    "cn_def": "科目；主題"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear and easy to understand",
    "cn_def": "解釋；說明"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show how something works by doing it",
    "cn_def": "示範；展示"
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to explain something by using examples or pictures",
    "cn_def": "舉例說明；圖解"
  },
  "note": {
    "pos": "n.",
    "en_def": "a short written record that helps you remember something",
    "cn_def": "筆記；便條"
  },
  "handout": {
    "pos": "n.",
    "en_def": "a sheet of paper with information that is given to people at a talk",
    "cn_def": "講義；發放的資料"
  },
  "slide": {
    "pos": "n.",
    "en_def": "one page of a computer presentation that is shown on a screen",
    "cn_def": "投影片"
  },
  "projector": {
    "pos": "n.",
    "en_def": "a machine that shows pictures or video on a screen or wall",
    "cn_def": "投影機"
  },
  "screen": {
    "pos": "n.",
    "en_def": "a flat surface on which pictures or information are shown",
    "cn_def": "螢幕；銀幕"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting where a group of people learn about or discuss a subject",
    "cn_def": "研討會；專題討論會"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a meeting where people learn by doing practical activities",
    "cn_def": "工作坊；研習會"
  },
  "tutorial": {
    "pos": "n.",
    "en_def": "a lesson or video that teaches you how to do something step by step",
    "cn_def": "教學；教程"
  },
  "instructor": {
    "pos": "n.",
    "en_def": "a person who teaches a skill or a class",
    "cn_def": "講師；教練"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a senior teacher at a university",
    "cn_def": "教授"
  },
  "educator": {
    "pos": "n.",
    "en_def": "a person whose job is teaching people",
    "cn_def": "教育工作者"
  },
  "engage": {
    "pos": "v.",
    "en_def": "to get and keep someone's interest or attention",
    "cn_def": "吸引（注意）；使投入"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參加；參與"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a conversation in which people share ideas about something",
    "cn_def": "討論"
  },
  "question": {
    "pos": "n.",
    "en_def": "a sentence or phrase that asks for information",
    "cn_def": "問題；提問"
  },
  "answer": {
    "pos": "v.",
    "en_def": "to reply to a question",
    "cn_def": "回答"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something clearer by explaining it more",
    "cn_def": "澄清；闡明"
  },
  "summarize": {
    "pos": "v.",
    "en_def": "to give the main points of something in a short form",
    "cn_def": "總結；概述"
  },
  "outline": {
    "pos": "n.",
    "en_def": "a short plan that shows the main parts of a talk or piece of writing",
    "cn_def": "大綱；概要"
  },
  "emphasize": {
    "pos": "v.",
    "en_def": "to show that something is especially important",
    "cn_def": "強調"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注；集中"
  },
  "conclude": {
    "pos": "v.",
    "en_def": "to end a talk, meeting or event",
    "cn_def": "結束；作結"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or useful something is",
    "cn_def": "回饋意見"
  },
  "attentive": {
    "pos": "adj.",
    "en_def": "listening to or watching something carefully",
    "cn_def": "專心的；注意的"
  },
  "informative": {
    "pos": "adj.",
    "en_def": "giving useful information",
    "cn_def": "提供有用資訊的；增長見識的"
  }
};

const EXTRA_GLOSSES = {};
