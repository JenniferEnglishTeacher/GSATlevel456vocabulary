// Topic 419 Quiz Data: Truth 真相
// Source word list: https://www.examword.com/group-topic/truth — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T419 - Truth 真相",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fact",
    "pos": "n.",
    "cn_def": "事實",
    "en_def": "something that is known to be true",
    "sentence": "A: Before we present the sales report to the board on Friday, should we include the customer survey results that some managers are still questioning? B: Yes, but we should separate each {{BLANK}} from personal opinions, so the directors can see which numbers are proven and make a fair decision about next year's budget.",
    "cn": "A：在我們週五向董事會報告銷售報告之前，是否應該納入一些經理仍在質疑的顧客調查結果？ B：應該，但我們要把每一項【事實】和個人意見分開，這樣董事們才能看出哪些數字是經過證實的，並對明年的預算做出公正的決定。"
  },
  {
    "word": "reality",
    "pos": "n.",
    "cn_def": "現實；實際情況",
    "en_def": "the way things actually are, not as imagined",
    "sentence": "A: The new manager promised that the online store would double our profits in three months, but sales have barely changed since it opened. B: I think the plan looked great on paper, but the {{BLANK}} is that our customers still prefer to shop in person and talk to our staff.",
    "cn": "A：新經理承諾網路商店會在三個月內讓我們的利潤翻倍，但自從開幕以來銷售幾乎沒有變化。 B：我認為這個計畫在紙上看起來很棒，但【現實】是我們的顧客仍然比較喜歡親自到店購物並和我們的員工交談。"
  },
  {
    "word": "honesty",
    "pos": "n.",
    "cn_def": "誠實",
    "en_def": "the quality of telling the truth",
    "sentence": "A: Why did the hiring committee choose Kevin over the other candidates, even though he has less experience in sales than most of them? B: During the interview, he talked about a mistake he made at his last job and how he fixed it, and the committee valued his {{BLANK}} more than a perfect résumé.",
    "cn": "A：為什麼招聘委員會選了凱文而不是其他候選人，即使他的銷售經驗比大多數人少？ B：在面試中，他談到了他在上一份工作中犯的錯誤以及他如何改正，委員會重視他的【誠實】勝過一份完美的履歷。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or things that show something is true",
    "sentence": "A: The client says our delivery driver damaged the boxes, but the driver insists that everything was fine when he left the warehouse. B: Let's check the security camera recordings and the signed delivery form, because we need clear {{BLANK}} before we decide who should pay for the broken goods.",
    "cn": "A：客戶說我們的送貨司機弄壞了箱子，但司機堅稱他離開倉庫時一切都完好無缺。 B：我們來檢查監視器錄影和簽收單吧，因為在決定誰該賠償損壞的貨物之前，我們需要明確的【證據】。"
  },
  {
    "word": "proof",
    "pos": "n.",
    "cn_def": "證明；證據",
    "en_def": "something that shows that a fact is true",
    "sentence": "A: The hotel says it will refund the second night of my business trip, but the front desk wants something from me first. B: They probably need {{BLANK}} that you checked out early, so ask the receptionist for a printed receipt with the date and time, and then email it to their accounting team.",
    "cn": "A：飯店說會退還我出差第二晚的費用，但櫃檯要我先提供一些東西。 B：他們可能需要你提早退房的【證明】，所以請櫃檯人員給你一張印有日期和時間的收據，然後把它寄給他們的會計部門。"
  },
  {
    "word": "statement",
    "pos": "n.",
    "cn_def": "聲明；陳述",
    "en_def": "something said or written officially",
    "sentence": "A: Reporters have been calling the office all morning about the product recall, and the receptionist doesn't know what to tell them. B: The communications director is writing an official {{BLANK}} right now, and it will be posted on our website before noon, so ask everyone to wait until then.",
    "cn": "A：記者們整個早上一直打電話到辦公室詢問產品召回的事，櫃檯人員不知道該怎麼回答他們。 B：公關總監現在正在撰寫一份正式【聲明】，中午之前會發布在我們的網站上，所以請大家等到那時候。"
  },
  {
    "word": "claim",
    "pos": "n.",
    "cn_def": "說法；聲稱",
    "en_def": "a statement that something is true, which may not be proven",
    "sentence": "A: This advertisement says the new air purifier removes ninety-nine percent of dust within ten minutes, which sounds amazing for our office. B: I'd be careful, because that kind of {{BLANK}} is often based on tests in a tiny room, so let's read some independent reviews before we order twenty of them.",
    "cn": "A：這則廣告說新的空氣清淨機能在十分鐘內清除百分之九十九的灰塵，對我們辦公室來說聽起來很棒。 B：我會謹慎一點，因為那種【說法】通常是根據在很小的房間裡做的測試，所以我們在訂購二十台之前先看看一些獨立的評論吧。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認；證實",
    "en_def": "to say or show that something is true or will happen",
    "sentence": "A: I booked a meeting room for the visitors from Japan on Thursday afternoon, but I haven't heard anything back from the facilities office yet. B: You should call them this morning to {{BLANK}} the reservation, because last month two departments showed up for the same room at the same time.",
    "cn": "A：我為週四下午來訪的日本客人預訂了一間會議室，但我到現在還沒收到總務處的任何回覆。 B：你應該今天早上打電話給他們【確認】預約，因為上個月有兩個部門在同一時間跑到同一間會議室。"
  },
  {
    "word": "verify",
    "pos": "v.",
    "cn_def": "核實；查證",
    "en_def": "to check that something is correct or true",
    "sentence": "A: A new supplier has sent us an invoice with a different bank account number from the one we used last time. B: Before we transfer any money, please call their office directly to {{BLANK}} the account details, because many companies have lost money to fake emails like this one.",
    "cn": "A：一家新的供應商寄給我們一張發票，上面的銀行帳號和我們上次用的不一樣。 B：在我們匯任何款項之前，請直接打電話到他們的辦公室【核實】帳戶資料，因為很多公司都因為像這樣的假電子郵件而損失金錢。"
  },
  {
    "word": "discover",
    "pos": "v.",
    "cn_def": "發現；查明",
    "en_def": "to find out something that was not known before",
    "sentence": "A: Why is the accounting team staying late every night this week, even though the quarterly report was already finished? B: They're checking every receipt from the past year, because the manager wants to {{BLANK}} why the travel expenses were so much higher than the budget we planned in January.",
    "cn": "A：為什麼會計團隊這週每晚都加班，即使季報已經完成了？ B：他們在檢查過去一年的每一張收據，因為經理想要【查明】為什麼差旅費比我們一月規劃的預算高出那麼多。"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "cn_def": "揭露；透露；揭曉",
    "en_def": "to show or tell something that was secret or hidden",
    "sentence": "A: Do you know when the company is going to announce the name of the new branch manager for the Taichung office? B: The CEO plans to {{BLANK}} the name at the end-of-year party next Friday, so nobody in human resources is allowed to talk about it until then.",
    "cn": "A：你知道公司什麼時候要宣布台中分公司新經理的名字嗎？ B：執行長打算在下週五的尾牙上【揭曉】這個名字，所以在那之前人資部的人都不准談論這件事。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to agree that something bad is true, often unwillingly",
    "sentence": "A: The shipment to our biggest customer arrived three days late, and they're asking for an explanation and a discount on the next order. B: I think we should {{BLANK}} that our warehouse made a scheduling mistake, apologize sincerely, and offer them free express shipping for the next two months.",
    "cn": "A：給我們最大客戶的貨晚了三天才到，他們要求解釋並在下一筆訂單打折。 B：我認為我們應該【承認】我們的倉庫在排程上出了錯，誠懇地道歉，並提供他們接下來兩個月的免費快遞服務。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something easy to understand by giving details",
    "sentence": "A: The new expense software looks very complicated, and many of the older employees are worried that they won't be able to use it correctly. B: The IT team will hold a short training session on Monday morning to {{BLANK}} each step, and they'll also hand out a simple guide with pictures.",
    "cn": "A：新的報帳軟體看起來很複雜，許多資深員工擔心他們沒辦法正確使用。 B：資訊團隊週一早上會舉辦一個簡短的訓練課程來【說明】每個步驟，而且他們還會發一份附有圖片的簡易指南。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清；釐清",
    "en_def": "to make something clearer and easier to understand",
    "sentence": "A: Some customers think our new return policy means they can return used items for a full refund at any time, and the store staff are confused too. B: We should send an email to {{BLANK}} the rules, explaining that only unused products with a receipt can be returned within thirty days.",
    "cn": "A：有些顧客以為我們新的退貨政策代表他們隨時都能退回用過的商品並全額退款，連店員也搞糊塗了。 B：我們應該寄一封電子郵件來【釐清】規則，說明只有附收據、未使用的商品才能在三十天內退貨。"
  },
  {
    "word": "accurate",
    "pos": "adj.",
    "cn_def": "準確的；精確的",
    "en_def": "correct and exact, with no mistakes",
    "sentence": "A: The marketing team wants to use last year's sales figures in the presentation to the new investors next week. B: That's fine, but please ask the finance department to check them first, because the numbers must be completely {{BLANK}} if we want the investors to trust our company.",
    "cn": "A：行銷團隊想在下週給新投資人的簡報中使用去年的銷售數字。 B：可以，但請先讓財務部檢查一下，因為如果我們希望投資人信任我們公司，這些數字必須完全【準確】。"
  },
  {
    "word": "true",
    "pos": "adj.",
    "cn_def": "真的；真實的",
    "en_def": "correct; based on facts",
    "sentence": "A: I heard from someone in the cafeteria that the company is moving our whole department to the new building in Hsinchu next spring. B: I'm not sure that's {{BLANK}}, because the manager told us yesterday that no final decision has been made, so let's wait for an official announcement.",
    "cn": "A：我在員工餐廳聽到有人說，公司明年春天要把我們整個部門搬到新竹的新大樓。 B：我不確定那是不是【真的】，因為經理昨天告訴我們還沒有做出最終決定，所以我們等官方公告吧。"
  },
  {
    "word": "honest",
    "pos": "adj.",
    "cn_def": "誠實的",
    "en_def": "telling the truth and not cheating",
    "sentence": "A: I have to give feedback on my coworker's presentation, but I'm afraid she'll be upset if I mention the problems with her slides. B: Try to be {{BLANK}} but kind, so start with what she did well, then explain one or two things that could make her next presentation even better.",
    "cn": "A：我必須對同事的簡報給意見，但我怕如果提到她投影片的問題，她會不高興。 B：試著【誠實】但友善一點，先說她做得好的地方，然後說明一兩件能讓她下一次簡報更好的事情。"
  },
  {
    "word": "genuine",
    "pos": "adj.",
    "cn_def": "真正的；真誠的；正品的",
    "en_def": "real and not fake; sincere",
    "sentence": "A: A customer bought an expensive leather bag from an online seller and now wants our store to repair it under our warranty. B: First we need to check the serial number inside to see whether the bag is {{BLANK}}, because our warranty only covers products made by our own factory.",
    "cn": "A：一位顧客向網路賣家買了一個昂貴的皮包，現在想要我們店依保固幫她修理。 B：我們首先要檢查包包內的序號，看看這個包是不是【正品】，因為我們的保固只涵蓋我們自家工廠生產的商品。"
  },
  {
    "word": "real",
    "pos": "adj.",
    "cn_def": "真正的；實際的",
    "en_def": "actually existing or happening; not imagined",
    "sentence": "A: Our team has fixed the slow website three times this month, but customers are still complaining that the pages take forever to load. B: Maybe we've only been fixing small issues, so let's ask an outside expert to find the {{BLANK}} cause of the problem before we spend more money.",
    "cn": "A：我們團隊這個月已經修了三次很慢的網站，但顧客還是抱怨網頁載入要很久。 B：也許我們一直只在修小問題，所以在花更多錢之前，我們請一位外部專家找出問題的【真正】原因吧。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "清楚的；明確的",
    "en_def": "easy to understand or see",
    "sentence": "A: The new interns keep making mistakes when they fill out the shipping forms, and the warehouse has sent back several orders this week. B: Maybe the instructions aren't {{BLANK}} enough, so let's rewrite them in simple steps, add a sample form, and go through it with the interns on Monday.",
    "cn": "A：新來的實習生填寫出貨單時一直出錯，倉庫這週已經退回好幾張訂單了。 B：也許說明不夠【清楚】，所以我們用簡單的步驟重寫，附上一份範例表單，然後週一和實習生一起看過一遍。"
  },
  {
    "word": "obvious",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "easy to see or understand",
    "sentence": "A: Why did the restaurant owner decide to close the branch near the train station after only six months? B: It was {{BLANK}} from the start that the rent was too high and there weren't enough customers at night, but he wanted to give the location a fair chance before giving up.",
    "cn": "A：為什麼那位餐廳老闆在短短六個月後就決定關掉火車站附近的分店？ B：從一開始就很【明顯】租金太高，晚上的客人也不夠多，但他想在放棄之前給那個地點一個公平的機會。"
  },
  {
    "word": "certain",
    "pos": "adj.",
    "cn_def": "確定的",
    "en_def": "completely sure",
    "sentence": "A: Should I tell the client that their order will be ready by next Tuesday, or should I wait until the factory sends an update? B: Don't promise anything until you're {{BLANK}}, because the factory had a power problem last week, and we don't want to disappoint an important client again.",
    "cn": "A：我應該告訴客戶他們的訂單下週二前會準備好，還是應該等工廠傳來最新消息？ B：在你【確定】之前什麼都不要承諾，因為工廠上週有電力問題，我們不想再讓重要客戶失望了。"
  },
  {
    "word": "frank",
    "pos": "adj.",
    "cn_def": "坦白的；直率的",
    "en_def": "honest and direct in what you say",
    "sentence": "A: My manager asked me what I really think about the new working schedule, but I don't want to sound negative in front of the whole team. B: You can be {{BLANK}} without being rude, so explain politely why the late shifts are difficult and suggest a solution that could work for everyone.",
    "cn": "A：我的經理問我對新的工作排班真正的想法，但我不想在整個團隊面前聽起來很負面。 B：你可以【坦白】而不失禮，所以禮貌地說明為什麼晚班很辛苦，並提出一個對大家都可行的解決方案。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；誠懇的",
    "en_def": "honest and really meaning what you say or feel",
    "sentence": "A: Our delivery team made a big mistake with the wedding cake order, and the customer was very upset at the party last night. B: The manager should call her today and offer a {{BLANK}} apology, and we could also refund the full price and send her a small gift.",
    "cn": "A：我們的外送團隊把婚禮蛋糕的訂單搞砸了，昨晚那位顧客在派對上非常生氣。 B：經理今天應該打電話給她並表達【誠摯的】歉意，我們也可以全額退款並送她一份小禮物。"
  },
  {
    "word": "truly",
    "pos": "adv.",
    "cn_def": "真正地；真心地",
    "en_def": "really; in a sincere way",
    "sentence": "A: Do you think the customers will notice the changes we made to the menu and the way the waiters serve the tables? B: I hope so, because we {{BLANK}} want every guest to feel welcome, and the feedback cards from last weekend already show that people enjoy the friendlier service.",
    "cn": "A：你覺得顧客會注意到我們對菜單和服務生上菜方式所做的改變嗎？ B：我希望會，因為我們【真心】希望每位客人都感到賓至如歸，而且上週末的意見卡已經顯示大家喜歡更親切的服務。"
  },
  {
    "word": "honestly",
    "pos": "adv.",
    "cn_def": "誠實地；老實說",
    "en_def": "in a truthful way; used to show you mean what you say",
    "sentence": "A: How did you feel about the training workshop yesterday, since you were the only one from our team who attended all three sessions? B: {{BLANK}}, I found the first session a little boring, but the afternoon sessions about customer service were really useful, and I'd recommend them to the new staff.",
    "cn": "A：你覺得昨天的訓練工作坊怎麼樣，因為你是我們團隊中唯一參加全部三堂課的人？ B：【老實說】，我覺得第一堂課有點無聊，但下午關於顧客服務的課程真的很有用，我會推薦給新員工。"
  },
  {
    "word": "clearly",
    "pos": "adv.",
    "cn_def": "清楚地",
    "en_def": "in a way that is easy to see, hear, or understand",
    "sentence": "A: The visitors from our overseas office will join the meeting by video call, and last time they said they couldn't hear us very well. B: This time we'll use a better microphone and ask each speaker to talk slowly and {{BLANK}}, so everyone can follow the discussion without any problems.",
    "cn": "A：海外辦公室的訪客會透過視訊參加會議，上次他們說聽不太到我們說話。 B：這次我們會用比較好的麥克風，並請每位發言者說話慢一點、【清楚】一點，這樣大家都能毫無問題地跟上討論。"
  },
  {
    "word": "openly",
    "pos": "adv.",
    "cn_def": "公開地；坦率地",
    "en_def": "in an honest way, without hiding anything",
    "sentence": "A: Why does our department have so few complaints compared with the other teams in the company this year? B: Our manager holds a short meeting every Friday where staff can {{BLANK}} share their problems and ideas, so small issues are solved quickly before they become serious conflicts.",
    "cn": "A：為什麼今年我們部門的抱怨比公司其他團隊少這麼多？ B：我們經理每週五都會舉行一個簡短的會議，讓員工可以【坦率地】分享他們的問題和想法，所以小問題在變成嚴重衝突之前就很快被解決了。"
  },
  {
    "word": "frankly",
    "pos": "adv.",
    "cn_def": "坦白說；坦率地",
    "en_def": "in an honest and direct way",
    "sentence": "A: What do you think of the design that the advertising agency sent us for our new product package? B: {{BLANK}}, I don't like the colors at all, because they look too dark for a children's snack, but the logo and the shape of the box are very attractive.",
    "cn": "A：你覺得廣告公司寄給我們的新產品包裝設計怎麼樣？ B：【坦白說】，我一點也不喜歡那些顏色，因為對兒童零食來說看起來太暗了，但商標和盒子的形狀非常吸引人。"
  },
  {
    "word": "mislead",
    "pos": "v.",
    "cn_def": "誤導",
    "en_def": "to make someone believe something that is not true",
    "sentence": "A: Our new advertisement says the phone battery lasts three days, but that only happens if you turn off almost every function. B: We should change the wording before it goes online, because we don't want to {{BLANK}} customers, and the government could fine us for false advertising.",
    "cn": "A：我們的新廣告說手機電池可以撐三天，但那只有在你幾乎關掉所有功能時才會發生。 B：我們應該在廣告上線前修改用字，因為我們不想【誤導】顧客，而且政府可能會因為不實廣告而罰我們錢。"
  },
  {
    "word": "lie",
    "pos": "v.",
    "cn_def": "說謊",
    "en_def": "to say something that you know is not true",
    "sentence": "A: A job applicant wrote on his résumé that he speaks fluent Japanese, but he couldn't answer a single question in Japanese during the interview. B: It's never a good idea to {{BLANK}} on a job application, because employers usually check your skills and references before they offer you a position.",
    "cn": "A：一位求職者在履歷上寫說他日文流利，但面試時他連一個日文問題都答不出來。 B：在求職申請上【說謊】從來都不是好主意，因為雇主通常會在錄取你之前檢查你的能力和推薦人。"
  },
  {
    "word": "false",
    "pos": "adj.",
    "cn_def": "錯誤的；不實的",
    "en_def": "not true or correct",
    "sentence": "A: Several customers have called to ask whether our company is closing all its stores, because they read something on social media last night. B: That information is completely {{BLANK}}, so please tell them we're actually opening two new branches next month, and our manager will post an official message online today.",
    "cn": "A：好幾位顧客打電話來問我們公司是不是要關掉所有店面，因為他們昨晚在社群媒體上看到一些消息。 B：那個消息完全是【不實的】，所以請告訴他們我們下個月其實要開兩家新分店，經理今天也會在網路上發布正式訊息。"
  },
  {
    "word": "rumor",
    "pos": "n.",
    "cn_def": "謠言；傳聞",
    "en_def": "a story people talk about that may not be true",
    "sentence": "A: Everyone in the office is worried because they heard the company might cut jobs after the merger with the Korean firm. B: The director told me it's just a {{BLANK}} that started in the cafeteria, and she plans to explain the real situation at the staff meeting tomorrow morning.",
    "cn": "A：辦公室裡每個人都很擔心，因為他們聽說公司和那家韓國企業合併後可能會裁員。 B：主管告訴我那只是從員工餐廳開始流傳的【謠言】，她打算在明天早上的員工會議上說明真實情況。"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查",
    "en_def": "to examine facts carefully to find out the truth",
    "sentence": "A: Three laptops have disappeared from the meeting room on the fifth floor in the past two weeks, and nobody knows what happened. B: The security manager has agreed to {{BLANK}} the problem, so he'll check the camera recordings and talk to everyone who used the room on those days.",
    "cn": "A：過去兩週內，五樓會議室已經有三台筆電不見了，沒有人知道發生了什麼事。 B：保全經理已經同意【調查】這個問題，所以他會檢查監視器錄影，並和那幾天使用過那間會議室的每個人談話。"
  }
];

const MCQS = [
  {
    "q": "The report should be based on _____, not on guesses. Please check every number with the sales department before sending it.",
    "options": [
      "fact",
      "rumor",
      "honesty",
      "statement"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Working from home sounded perfect to many employees. In _____, some of them found it hard to separate work from family life.",
    "options": [
      "evidence",
      "reality",
      "honesty",
      "rumor"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The company values _____ above all, so staff must report any mistakes immediately. Hiding problems from customers is never accepted here.",
    "options": [
      "rumor",
      "claim",
      "honesty",
      "proof"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The lawyer said there was not enough _____ to prove the supplier broke the contract. The case was closed the next week.",
    "options": [
      "honesty",
      "rumor",
      "statement",
      "evidence"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Customers must show _____ of purchase to return an item. A receipt or a bank statement is usually accepted at the counter.",
    "options": [
      "rumor",
      "proof",
      "honesty",
      "reality"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "After the accident at the factory, the company issued a public _____ to the press. It explained what happened and how workers were protected.",
    "options": [
      "honesty",
      "reality",
      "rumor",
      "statement"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The insurance company rejected his _____ because he reported the damage too late. He now has to pay for the repairs himself.",
    "options": [
      "claim",
      "honesty",
      "reality",
      "rumor"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Please call the hotel to _____ our reservation for the sales conference. We need twelve rooms from Monday to Wednesday.",
    "options": [
      "admit",
      "mislead",
      "confirm",
      "lie"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The bank will _____ your identity before opening the new account. Please bring your passport and a recent utility bill.",
    "options": [
      "verify",
      "admit",
      "lie",
      "mislead"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Engineers worked all night to _____ the cause of the power failure. By morning, they found a broken cable under the floor.",
    "options": [
      "admit",
      "discover",
      "lie",
      "mislead"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The car company will _____ its new electric model at the trade show next month. Until then, the design remains a secret.",
    "options": [
      "admit",
      "lie",
      "reveal",
      "verify"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The manager was brave enough to _____ that his plan had failed. He then asked the team for new ideas to fix it.",
    "options": [
      "mislead",
      "investigate",
      "verify",
      "admit"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Could you _____ the new refund policy to our customers? Many of them are confused about the thirty-day limit.",
    "options": [
      "mislead",
      "explain",
      "admit",
      "lie"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Our shipping records must be _____ and up to date. Even a small mistake can send a package to the wrong city.",
    "options": [
      "frank",
      "sincere",
      "obvious",
      "accurate"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Please give us your _____ opinion about our new website. Your comments will help us improve it before the official launch.",
    "options": [
      "honest",
      "obvious",
      "false",
      "certain"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The store guarantees that all its handbags are made of _____ leather. Each bag also comes with a certificate from the factory.",
    "options": [
      "frank",
      "obvious",
      "genuine",
      "honest"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The instructions on the box were not _____ enough, so many customers called for help. We will add pictures to the next version.",
    "options": [
      "clear",
      "sincere",
      "frank",
      "genuine"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "It was _____ to everyone that the new printer was broken. It made loud noises and produced only blank pages.",
    "options": [
      "sincere",
      "obvious",
      "frank",
      "genuine"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "We are not _____ that the shipment will arrive on Friday. The supplier will send an update tomorrow morning.",
    "options": [
      "frank",
      "sincere",
      "certain",
      "genuine"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Let me be _____ with you about your sales results this quarter. They were the lowest in the team, and we need a plan.",
    "options": [
      "accurate",
      "obvious",
      "false",
      "frank"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Please accept our _____ apologies for the delay in your order. We have added a free gift to your package.",
    "options": [
      "accurate",
      "sincere",
      "obvious",
      "false"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "We _____ appreciate your hard work on this difficult project. The whole team will receive a bonus at the end of the month.",
    "options": [
      "frankly",
      "openly",
      "clearly",
      "truly"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The safety rules are _____ posted on the wall near the entrance. All visitors must read them before entering the factory.",
    "options": [
      "clearly",
      "frankly",
      "truly",
      "honestly"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Unlike his secretive boss, the new director shares information _____ with all employees. Every decision and budget is posted on the company website.",
    "options": [
      "rarely",
      "truly",
      "openly",
      "barely"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "_____ speaking, the new office is too small for our growing team. We should look for a bigger space next year.",
    "options": [
      "frankly",
      "clearly",
      "openly",
      "truly"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The advertisement was designed to _____ customers about the real price. The company was fined for hiding extra fees.",
    "options": [
      "verify",
      "mislead",
      "admit",
      "confirm"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "He was fired after he was caught trying to _____ about his sales numbers. The company does not accept dishonest employees.",
    "options": [
      "verify",
      "confirm",
      "lie",
      "reveal"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The customer gave a _____ address, so the package was returned to our warehouse. We now check every address before shipping.",
    "options": [
      "sincere",
      "frank",
      "honest",
      "false"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "There is a _____ that the company will move to Kaohsiung next year. The manager says it is not true at all.",
    "options": [
      "honesty",
      "rumor",
      "proof",
      "reality"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The police were called to _____ the break-in at the warehouse last night. Several boxes of laptops were stolen.",
    "options": [
      "admit",
      "mislead",
      "lie",
      "investigate"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "fact": {
    "pos": "n.",
    "en_def": "something that is known to be true",
    "cn_def": "事實"
  },
  "reality": {
    "pos": "n.",
    "en_def": "the way things actually are, not as imagined",
    "cn_def": "現實；實際情況"
  },
  "honesty": {
    "pos": "n.",
    "en_def": "the quality of telling the truth",
    "cn_def": "誠實"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or things that show something is true",
    "cn_def": "證據"
  },
  "proof": {
    "pos": "n.",
    "en_def": "something that shows that a fact is true",
    "cn_def": "證明；證據"
  },
  "statement": {
    "pos": "n.",
    "en_def": "something said or written officially",
    "cn_def": "聲明；陳述"
  },
  "claim": {
    "pos": "n.",
    "en_def": "a statement that something is true, which may not be proven",
    "cn_def": "說法；聲稱"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or show that something is true or will happen",
    "cn_def": "確認；證實"
  },
  "verify": {
    "pos": "v.",
    "en_def": "to check that something is correct or true",
    "cn_def": "核實；查證"
  },
  "discover": {
    "pos": "v.",
    "en_def": "to find out something that was not known before",
    "cn_def": "發現；查明"
  },
  "reveal": {
    "pos": "v.",
    "en_def": "to show or tell something that was secret or hidden",
    "cn_def": "揭露；透露；揭曉"
  },
  "admit": {
    "pos": "v.",
    "en_def": "to agree that something bad is true, often unwillingly",
    "cn_def": "承認"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something easy to understand by giving details",
    "cn_def": "解釋；說明"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something clearer and easier to understand",
    "cn_def": "澄清；釐清"
  },
  "accurate": {
    "pos": "adj.",
    "en_def": "correct and exact, with no mistakes",
    "cn_def": "準確的；精確的"
  },
  "true": {
    "pos": "adj.",
    "en_def": "correct; based on facts",
    "cn_def": "真的；真實的"
  },
  "honest": {
    "pos": "adj.",
    "en_def": "telling the truth and not cheating",
    "cn_def": "誠實的"
  },
  "genuine": {
    "pos": "adj.",
    "en_def": "real and not fake; sincere",
    "cn_def": "真正的；真誠的；正品的"
  },
  "real": {
    "pos": "adj.",
    "en_def": "actually existing or happening; not imagined",
    "cn_def": "真正的；實際的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "easy to understand or see",
    "cn_def": "清楚的；明確的"
  },
  "obvious": {
    "pos": "adj.",
    "en_def": "easy to see or understand",
    "cn_def": "明顯的"
  },
  "certain": {
    "pos": "adj.",
    "en_def": "completely sure",
    "cn_def": "確定的"
  },
  "frank": {
    "pos": "adj.",
    "en_def": "honest and direct in what you say",
    "cn_def": "坦白的；直率的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "honest and really meaning what you say or feel",
    "cn_def": "真誠的；誠懇的"
  },
  "truly": {
    "pos": "adv.",
    "en_def": "really; in a sincere way",
    "cn_def": "真正地；真心地"
  },
  "honestly": {
    "pos": "adv.",
    "en_def": "in a truthful way; used to show you mean what you say",
    "cn_def": "誠實地；老實說"
  },
  "clearly": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see, hear, or understand",
    "cn_def": "清楚地"
  },
  "openly": {
    "pos": "adv.",
    "en_def": "in an honest way, without hiding anything",
    "cn_def": "公開地；坦率地"
  },
  "frankly": {
    "pos": "adv.",
    "en_def": "in an honest and direct way",
    "cn_def": "坦白說；坦率地"
  },
  "mislead": {
    "pos": "v.",
    "en_def": "to make someone believe something that is not true",
    "cn_def": "誤導"
  },
  "lie": {
    "pos": "v.",
    "en_def": "to say something that you know is not true",
    "cn_def": "說謊"
  },
  "false": {
    "pos": "adj.",
    "en_def": "not true or correct",
    "cn_def": "錯誤的；不實的"
  },
  "rumor": {
    "pos": "n.",
    "en_def": "a story people talk about that may not be true",
    "cn_def": "謠言；傳聞"
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to examine facts carefully to find out the truth",
    "cn_def": "調查"
  }
};

const EXTRA_GLOSSES = {};
