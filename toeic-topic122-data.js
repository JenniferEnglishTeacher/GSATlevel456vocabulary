// Topic 122 Quiz Data: English Lesson 英語課
// Source word list: https://www.examword.com/group-topic/english-lesson — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T122 - English Lesson 英語課",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "課；一堂課",
    "en_def": "a period of time in which someone is taught something",
    "sentence": "A: Are you coming to the English {{BLANK}} that the company offers every Thursday afternoon, or do you have to meet the clients from Osaka again? B: I will be there, because my manager wants me to improve my speaking before I lead the sales meeting with our overseas partners next month.",
    "cn": "A：你會來參加公司每週四下午開設的英語【課】嗎？還是你又要和大阪來的客戶開會？ B：我會去，因為我的經理希望我在下個月主持和海外合作夥伴的業務會議之前，先加強我的口說能力。"
  },
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師；教師",
    "en_def": "a person whose job is to teach",
    "sentence": "A: Who is going to run the new business English class for the staff in the customer service department, and when will it start? B: The training office has hired an experienced {{BLANK}} from a language school downtown, and she will start next Monday morning in the large meeting room on the third floor.",
    "cn": "A：誰要負責為客服部門員工開設新的商用英語課，什麼時候開始？ B：訓練處已經從市中心一家語言學校聘請了一位經驗豐富的【老師】，她下週一早上會在三樓的大會議室開始上課。"
  },
  {
    "word": "student",
    "pos": "n.",
    "cn_def": "學生",
    "en_def": "a person who is studying at a school or university",
    "sentence": "A: Why is the new intern so quiet during our team meetings, even though everyone says he is very smart and hardworking? B: He is still a university {{BLANK}} who studies marketing part-time, so he feels nervous about speaking in front of senior staff, but he writes excellent reports and learns very quickly.",
    "cn": "A：為什麼新來的實習生在我們團隊會議中這麼安靜，明明大家都說他很聰明又勤奮？ B：他還是一名兼職修讀行銷的大學【學生】，所以在資深員工面前發言會緊張，但他寫的報告很出色，學得也很快。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room where classes are taught",
    "sentence": "A: Where will the English training session for the new sales staff take place this week, since the main conference hall is being painted? B: The human resources team has booked a small {{BLANK}} at the community center across the street, and they will provide a projector, a whiteboard, and free coffee for everyone.",
    "cn": "A：既然主會議廳正在油漆，這週新進業務人員的英語培訓課要在哪裡上？ B：人資團隊已經預訂了對街社區中心的一間小【教室】，他們會提供投影機、白板，還有免費咖啡給大家。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程（內容）",
    "en_def": "all the subjects and topics taught in a course",
    "sentence": "A: Has the training department decided what topics the new English course for our engineers will cover this year? B: Yes, they designed a {{BLANK}} that focuses on writing clear e-mails, giving short presentations, and handling phone calls with international suppliers, because those are the skills our engineers use most often.",
    "cn": "A：訓練部門決定今年為工程師開設的新英語課程要涵蓋哪些主題了嗎？ B：決定了，他們設計了一套【課程】，著重於撰寫清楚的電子郵件、做簡短的簡報，以及和國際供應商通電話，因為這些是我們的工程師最常用到的技能。"
  },
  {
    "word": "textbook",
    "pos": "n.",
    "cn_def": "課本；教科書",
    "en_def": "a book used for studying a subject",
    "sentence": "A: Do I need to buy anything before the business English class starts on Monday, or will the company provide all the materials? B: The company will give each participant a free {{BLANK}} with useful dialogues for meetings and phone calls, but you should bring a notebook and a pen to take notes during class.",
    "cn": "A：週一商用英語課開始前，我需要買什麼東西嗎？還是公司會提供所有的教材？ B：公司會發給每位學員一本免費的【課本】，裡面有會議和電話中實用的對話，不過你上課時應該帶筆記本和筆來做筆記。"
  },
  {
    "word": "worksheet",
    "pos": "n.",
    "cn_def": "學習單；練習卷",
    "en_def": "a sheet of paper with questions or tasks for learners",
    "sentence": "A: What should we do while the trainer is busy helping the new employees in the back of the room? B: She asked us to complete the {{BLANK}} on our desks, which has twenty short questions about polite phrases for meetings, and then compare our answers with a partner before the break.",
    "cn": "A：訓練師在教室後面忙著協助新員工時，我們該做什麼？ B：她要我們完成桌上的【學習單】，上面有二十個關於會議禮貌用語的簡短問題，然後在休息前和夥伴對答案。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "作業；指派的任務",
    "en_def": "a piece of work given to someone as part of a course or job",
    "sentence": "A: Why are you staying late at the office tonight when the project report is not due until next week? B: My English trainer gave us a writing {{BLANK}} about our company's products, and I want to finish it carefully tonight because I will be traveling to visit clients for the rest of the week.",
    "cn": "A：專案報告下週才要交，你為什麼今晚還留在辦公室加班？ B：我的英語訓練師給了我們一份介紹公司產品的寫作【作業】，我想今晚好好把它完成，因為這週剩下的時間我都要出差拜訪客戶。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "回家作業；功課",
    "en_def": "work that a learner is given to do at home",
    "sentence": "A: Do you think the evening English course is too difficult for people who work full-time and have families to take care of? B: Not really, because the trainer only gives a little {{BLANK}} each week, usually a short e-mail to write, so most of us can finish it during our lunch break.",
    "cn": "A：你覺得晚間英語課程對全職工作又要照顧家庭的人來說會不會太難？ B：其實還好，因為訓練師每週只出一點點【回家作業】，通常是寫一封簡短的電子郵件，所以我們大多數人都能在午休時完成。"
  },
  {
    "word": "exercise",
    "pos": "n.",
    "cn_def": "練習；練習題",
    "en_def": "an activity or set of questions done to practice a skill",
    "sentence": "A: How did the trainer help you prepare for the difficult phone calls with angry customers in yesterday's workshop? B: She gave us a role-play {{BLANK}} in which one person acted as an upset customer and the other had to stay calm, listen carefully, and offer a polite solution within three minutes.",
    "cn": "A：昨天的研習中，訓練師是怎麼幫你們準備應對憤怒客戶的困難電話的？ B：她讓我們做了一個角色扮演【練習】，其中一個人扮演不高興的客戶，另一個人必須保持冷靜、仔細聆聽，並在三分鐘內提出有禮貌的解決方法。"
  },
  {
    "word": "vocabulary",
    "pos": "n.",
    "cn_def": "字彙；詞彙",
    "en_def": "all the words a person knows or uses",
    "sentence": "A: Why do you always carry that small notebook to the weekly meetings with our partners from London? B: I write down every new business word I hear, because I want to build my {{BLANK}} before the big contract negotiation next spring, and I review the list on the train every morning.",
    "cn": "A：你為什麼每週和倫敦合作夥伴開會時都帶著那本小筆記本？ B：我會把聽到的每個新商業用字都記下來，因為我想在明年春天的大型合約談判之前增加我的【字彙】量，而且我每天早上都會在火車上複習這份清單。"
  },
  {
    "word": "grammar",
    "pos": "n.",
    "cn_def": "文法",
    "en_def": "the rules for putting words together in a language",
    "sentence": "A: Could you check this e-mail to our new supplier in Canada before I send it this afternoon? B: Sure, the message is clear and polite, but there are a few {{BLANK}} mistakes with past tenses in the second paragraph, so let me fix them quickly before you click the send button.",
    "cn": "A：你可以在我今天下午寄出之前，幫我檢查這封給加拿大新供應商的電子郵件嗎？ B：當然，內容清楚又有禮貌，但第二段有幾個過去式的【文法】錯誤，我先快速幫你改好，你再按下寄出。"
  },
  {
    "word": "pronunciation",
    "pos": "n.",
    "cn_def": "發音",
    "en_def": "the way a word is said",
    "sentence": "A: Why did the clients from Texas look confused when our new manager introduced the product during the video call? B: His ideas were excellent, but his {{BLANK}} of some technical words was unclear, so the trainer is helping him practice slowly with recordings every afternoon before the next meeting.",
    "cn": "A：我們的新經理在視訊會議中介紹產品時，德州來的客戶為什麼看起來很困惑？ B：他的想法很棒，但一些技術用字的【發音】不清楚，所以訓練師每天下午都用錄音幫他慢慢練習，為下次會議做準備。"
  },
  {
    "word": "spelling",
    "pos": "n.",
    "cn_def": "拼字；拼法",
    "en_def": "the way letters are put together to form a word",
    "sentence": "A: Did the marketing team find any problems in the new brochure before they sent it to the printing company? B: Yes, they found a {{BLANK}} mistake in the name of our main product on the front cover, so they corrected it right away and asked the printer to wait one more day.",
    "cn": "A：行銷團隊在把新手冊送去印刷公司之前，有發現任何問題嗎？ B：有，他們發現封面上我們主要產品名稱有一個【拼字】錯誤，所以馬上更正，並請印刷廠多等一天。"
  },
  {
    "word": "listening",
    "pos": "n.",
    "cn_def": "聽力",
    "en_def": "the skill of understanding spoken language",
    "sentence": "A: What part of the English test do most of our new employees find the hardest when they apply for overseas positions? B: Most of them say the {{BLANK}} section is the most difficult, because the speakers in the recordings talk quickly and use different accents from Britain, Australia, and the United States.",
    "cn": "A：我們的新員工申請海外職位時，大多認為英語測驗的哪一部分最難？ B：他們大多說【聽力】部分最難，因為錄音中的說話者講得很快，而且使用英國、澳洲和美國等不同的口音。"
  },
  {
    "word": "speaking",
    "pos": "n.",
    "cn_def": "口說；說話",
    "en_def": "the skill of talking in a language",
    "sentence": "A: Why did the human resources manager ask every applicant to have a short conversation in English during the interview? B: The job involves meeting foreign visitors every day, so she wants to check each person's {{BLANK}} ability and see whether they can answer questions clearly and confidently without notes.",
    "cn": "A：人資經理為什麼在面試時要求每位應徵者用英語簡短對話？ B：這份工作每天都要接待外國訪客，所以她想確認每個人的【口說】能力，看看他們能不能不看筆記就清楚又有自信地回答問題。"
  },
  {
    "word": "reading",
    "pos": "n.",
    "cn_def": "閱讀",
    "en_def": "the activity or skill of looking at and understanding written words",
    "sentence": "A: How can I get better at understanding the long contracts and technical reports that our overseas partners send us? B: I suggest doing some extra {{BLANK}} every evening, such as business news articles online, because it will help you learn common phrases and understand long documents much faster at work.",
    "cn": "A：我要怎麼樣才能更容易看懂海外合作夥伴寄來的長篇合約和技術報告？ B：我建議你每天晚上做一些額外的【閱讀】，例如網路上的商業新聞文章，因為這能幫你學會常用片語，在工作上更快理解長篇文件。"
  },
  {
    "word": "writing",
    "pos": "n.",
    "cn_def": "寫作",
    "en_def": "the skill or activity of putting ideas into written words",
    "sentence": "A: Why did the manager ask Kevin to take the business English course even though he speaks well in meetings? B: Kevin is very good at talking with clients, but his {{BLANK}} is weak, and several of his e-mails and reports last month were confusing, so the course will help him organize his ideas.",
    "cn": "A：Kevin在會議中英語講得很好，為什麼經理還要他去上商用英語課？ B：Kevin很擅長和客戶交談，但他的【寫作】能力較弱，上個月他寫的幾封電子郵件和報告都讓人看不懂，所以這門課能幫助他整理想法。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a conversation in which people share ideas about a topic",
    "sentence": "A: What did you do in the second half of the English workshop after the trainer finished explaining the new expressions? B: We formed small groups and had a {{BLANK}} about how to reduce delivery delays, and each group had to use at least five of the new expressions before sharing its ideas.",
    "cn": "A：訓練師講解完新的用語後，英語研習的後半段你們做了什麼？ B：我們分成小組，針對如何減少送貨延誤進行【討論】，每一組在分享想法之前都必須用到至少五個新用語。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；報告",
    "en_def": "a talk that gives information to a group of people",
    "sentence": "A: Are you ready for the meeting with the investors from Singapore tomorrow morning, or do you need more time to prepare? B: I have finished the slides, but I still want to practice my {{BLANK}} with the English trainer this afternoon, because I need to explain our sales plan clearly in only fifteen minutes.",
    "cn": "A：明天早上和新加坡投資人的會議你準備好了嗎？還是需要更多時間準備？ B：投影片我已經做好了，但我今天下午還想和英語訓練師演練我的【簡報】，因為我必須在短短十五分鐘內把我們的銷售計畫說明清楚。"
  },
  {
    "word": "quiz",
    "pos": "n.",
    "cn_def": "小考；測驗",
    "en_def": "a short test",
    "sentence": "A: Why is everyone in the training room studying their notes so carefully during the coffee break this morning? B: The trainer announced that there will be a short {{BLANK}} on the new customer service phrases after the break, and the three people with the highest scores will win free movie tickets.",
    "cn": "A：為什麼今天早上休息時間訓練室裡每個人都那麼認真看筆記？ B：訓練師宣布休息後會有一個關於新客服用語的簡短【小考】，分數最高的三個人可以贏得免費電影票。"
  },
  {
    "word": "test",
    "pos": "n.",
    "cn_def": "測驗；考試",
    "en_def": "a set of questions to measure someone's skill or knowledge",
    "sentence": "A: Do I need any special qualifications before I can apply for the new position at our office in Sydney? B: Yes, every applicant must pass an English {{BLANK}} with a high score, and the company will pay the fee if you take it before the end of this month.",
    "cn": "A：申請雪梨辦公室的新職位前，我需要具備什麼特別的資格嗎？ B：需要，每位應徵者都必須以高分通過一項英語【測驗】，如果你在這個月底前參加，公司會支付報名費。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋；反饋",
    "en_def": "comments about how well someone has done something",
    "sentence": "A: How did the trainer respond after you gave your sales presentation in English at the end of yesterday's workshop? B: She gave me some useful {{BLANK}}, saying my slides were clear and well organized, but I should speak more slowly and look at the audience more often instead of reading from my notes.",
    "cn": "A：昨天研習結束時你用英語做了業務簡報之後，訓練師怎麼回應？ B：她給了我一些很有用的【意見回饋】，說我的投影片清楚又有條理，但我應該講慢一點，並且多看觀眾，而不是一直看著筆記唸。"
  },
  {
    "word": "correction",
    "pos": "n.",
    "cn_def": "更正；訂正",
    "en_def": "a change that makes something right",
    "sentence": "A: Did you notice that the price of the new printer was wrong in the e-mail we sent to all of our customers this morning? B: Yes, the sales manager noticed it at lunch, so we will send a {{BLANK}} this afternoon with the right price and a short apology for the confusion.",
    "cn": "A：你有注意到我們今天早上寄給所有客戶的電子郵件中，新印表機的價格寫錯了嗎？ B：有，業務經理午餐時發現了，所以我們今天下午會寄出一封【更正】信，附上正確價格並為造成的困擾簡短道歉。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "doing something again and again to get better at it",
    "sentence": "A: How did you become so confident at answering the phone in English when you joined the company only six months ago? B: It took a lot of {{BLANK}}, because I recorded myself every evening, listened to my mistakes, and asked friendly coworkers to call me with difficult questions during quiet afternoons.",
    "cn": "A：你六個月前才進公司，怎麼能這麼有自信地用英語接電話？ B：那需要大量的【練習】，因為我每天晚上都錄下自己的聲音，聽自己的錯誤，還請友善的同事在不忙的下午打電話問我一些困難的問題。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參與；參加",
    "en_def": "to take part in an activity",
    "sentence": "A: Is the weekly English workshop only for people in the marketing department, or can someone from accounting join too? B: Everyone in the company is welcome to {{BLANK}}, but you need to sign up with the human resources office by Friday, because each group is limited to twelve people.",
    "cn": "A：每週的英語研習只開放給行銷部門的人嗎？還是會計部的人也可以加入？ B：公司裡的每個人都歡迎【參加】，但你必須在週五前向人資辦公室報名，因為每組限額十二人。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "複習；檢閱",
    "en_def": "to look at or study something again",
    "sentence": "A: What are you planning to do before the English interview for the team leader position next Wednesday morning? B: I am going to {{BLANK}} my notes from the business English course and prepare short answers about my experience, because I want to sound calm and professional in front of the managers.",
    "cn": "A：下週三早上團隊主管職位的英語面試之前，你打算做什麼準備？ B：我打算【複習】商用英語課的筆記，並準備一些關於我工作經驗的簡短回答，因為我想在主管們面前表現得冷靜又專業。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear and easy to understand",
    "sentence": "A: Why did the new staff members look so confused after the meeting about the updated travel expense rules this morning? B: The finance manager spoke too fast, so I asked her to {{BLANK}} the new rules again in simple English and send everyone a short summary with examples by e-mail.",
    "cn": "A：今天早上關於新版差旅費規定的會議結束後，新進員工為什麼看起來那麼困惑？ B：財務經理講得太快了，所以我請她用簡單的英語再【解釋】一次新規定，並用電子郵件寄給大家一份附有例子的簡短摘要。"
  },
  {
    "word": "translate",
    "pos": "v.",
    "cn_def": "翻譯",
    "en_def": "to change words from one language into another",
    "sentence": "A: Our new customers in Mexico cannot read Chinese, so what should we do with the product manual before the shipment leaves next week? B: We should hire a professional company to {{BLANK}} the manual into English and Spanish, so customers can understand the safety instructions and set up the machine correctly.",
    "cn": "A：我們在墨西哥的新客戶看不懂中文，下週出貨前，產品手冊該怎麼處理？ B：我們應該請專業公司把手冊【翻譯】成英文和西班牙文，讓客戶能看懂安全說明並正確安裝機器。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；傳達",
    "en_def": "to share information or ideas with others",
    "sentence": "A: Why does the company want all the warehouse supervisors to take a basic English course this year? B: We now work with drivers and suppliers from several countries, so supervisors must be able to {{BLANK}} clearly with them about delivery times, safety rules, and problems that happen during busy seasons.",
    "cn": "A：公司為什麼希望今年所有倉庫主管都去上基礎英語課？ B：我們現在和來自好幾個國家的司機及供應商合作，所以主管必須能夠清楚地和他們【溝通】送貨時間、安全規定，以及旺季時發生的問題。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動的",
    "en_def": "involving people doing things together, not just listening",
    "sentence": "A: Why do the employees enjoy the new English training program so much more than the old one with long lectures? B: The new program is very {{BLANK}}, because people play language games, answer questions on their phones, and work in pairs instead of just sitting and listening to the trainer for two hours.",
    "cn": "A：為什麼員工比起以前那種長篇講課，更喜歡新的英語培訓課程？ B：新課程非常【互動】，因為大家會玩語言遊戲、用手機回答問題，並兩人一組練習，而不是只坐著聽訓練師講兩個小時。"
  },
  {
    "word": "educational",
    "pos": "adj.",
    "cn_def": "教育性的；有教育意義的",
    "en_def": "helping people learn",
    "sentence": "A: Do you think the children of our employees will enjoy the company's family day at the science museum next Saturday? B: Yes, the museum has many {{BLANK}} activities about energy and space, and the staff there give short talks in simple English, so both parents and children can learn something new together.",
    "cn": "A：你覺得員工的孩子會喜歡下週六公司在科學博物館舉辦的家庭日嗎？ B：會的，博物館有很多關於能源和太空的【教育性】活動，那裡的工作人員還會用簡單的英語做簡短解說，讓家長和孩子都能一起學到新東西。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "serious and polite, used in official situations",
    "sentence": "A: Should I start my e-mail to the new director of our partner company in Germany with \"Hi\" and his first name? B: No, it is better to use a more {{BLANK}} greeting, such as \"Dear Mr. Weber,\" because this is your first message to him and he is a senior manager whom you have never met.",
    "cn": "A：我寫給德國合作公司新任董事的電子郵件，開頭可以用「Hi」加上他的名字嗎？ B：不行，最好用比較【正式】的問候語，例如「Dear Mr. Weber,」，因為這是你第一次寫信給他，而且他是你從未見過的資深經理。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的；輕鬆的",
    "en_def": "relaxed and friendly, not official",
    "sentence": "A: What should I wear and how should I behave at the welcome party for the new team members on Friday evening? B: The party is quite {{BLANK}}, so jeans and a nice shirt are fine, and you can chat with your coworkers about hobbies and weekend plans instead of talking about work.",
    "cn": "A：週五晚上新成員的歡迎派對，我該穿什麼、該怎麼表現？ B：那個派對相當【非正式】，所以穿牛仔褲配一件好看的襯衫就可以了，你也可以和同事聊聊嗜好和週末計畫，而不用談工作。"
  },
  {
    "word": "fluently",
    "pos": "adv.",
    "cn_def": "流利地",
    "en_def": "in a smooth and easy way, without stopping",
    "sentence": "A: Why did the hotel decide to hire Maria as the new front desk manager instead of the other three applicants? B: She has eight years of experience in hospitality, and she speaks English, Japanese, and Spanish {{BLANK}}, so she can help guests from many countries check in quickly and answer their questions.",
    "cn": "A：飯店為什麼決定聘請Maria擔任新的櫃檯經理，而不是另外三位應徵者？ B：她有八年的餐旅業經驗，而且能【流利地】說英語、日語和西班牙語，所以能協助來自許多國家的旅客快速辦理入住並回答他們的問題。"
  }
];

const MCQS = [
  {
    "q": "Our new employees take a one-hour English _____ every Tuesday. The trainer focuses on phone calls and short e-mails.",
    "options": [
      "lesson",
      "textbook",
      "grammar",
      "feedback"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The language school hired a native English _____ for the company's evening class. She has taught business professionals for ten years.",
    "options": [
      "curriculum",
      "vocabulary",
      "teacher",
      "correction"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Every _____ in the training program must attend at least eight of the ten sessions. Those who miss more will not receive a certificate.",
    "options": [
      "textbook",
      "student",
      "grammar",
      "homework"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The training _____ on the fifth floor has a large screen and comfortable chairs. Up to twenty employees can use it.",
    "options": [
      "homework",
      "feedback",
      "pronunciation",
      "classroom"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The human resources team updated the course _____ this year. It now includes units on negotiation and writing clear reports.",
    "options": [
      "pronunciation",
      "homework",
      "curriculum",
      "teacher"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Each participant will receive a printed _____ on the first day of the course. It contains sample dialogues for meetings and phone calls.",
    "options": [
      "textbook",
      "grammar",
      "practice",
      "feedback"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The trainer gave us a writing _____ due next Friday. We have to describe one of our company's products in 200 words.",
    "options": [
      "pronunciation",
      "curriculum",
      "classroom",
      "assignment"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Please finish your _____ before the next class on Thursday. The trainer will check your answers at the beginning of the lesson.",
    "options": [
      "pronunciation",
      "homework",
      "vocabulary",
      "grammar"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The trainer asked us to do a short listening _____ using a recording of a business call. Afterward, we compared our answers in pairs.",
    "options": [
      "exercise",
      "classroom",
      "student",
      "teacher"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Reading business news every day is a good way to expand your _____. You will learn many useful words for meetings and reports.",
    "options": [
      "classroom",
      "homework",
      "vocabulary",
      "quiz"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Please check the _____ in this report before sending it to the client. Some of the verb tenses in the second section are wrong.",
    "options": [
      "pronunciation",
      "classroom",
      "teacher",
      "grammar"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The new sales representative practices his _____ every morning with online recordings. He wants clients to understand him clearly on the phone.",
    "options": [
      "textbook",
      "pronunciation",
      "curriculum",
      "worksheet"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The _____ section of the English test includes long e-mails and reports. Many candidates run out of time before answering every question.",
    "options": [
      "classroom",
      "teacher",
      "reading",
      "homework"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "During the job interview, the manager tested each applicant's _____ skills. Every candidate had to talk about their experience in English for five minutes.",
    "options": [
      "speaking",
      "reading",
      "writing",
      "spelling"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Our new business _____ course teaches employees how to create clear e-mails and reports. The course starts next month and lasts eight weeks.",
    "options": [
      "listening",
      "writing",
      "speaking",
      "pronunciation"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "After the presentation, the manager led a short _____ about the sales results. Everyone was invited to share their opinions and questions.",
    "options": [
      "textbook",
      "homework",
      "spelling",
      "discussion"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Mark will give a short _____ to the board tomorrow morning. He has prepared fifteen slides about the new marketing plan.",
    "options": [
      "presentation",
      "homework",
      "grammar",
      "textbook"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "All applicants for the overseas position must pass an English _____ first. The company will cover the cost of the exam.",
    "options": [
      "classroom",
      "teacher",
      "test",
      "worksheet"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The trainer gave each participant detailed _____ on their presentations. Most people were told to speak more slowly and make more eye contact.",
    "options": [
      "vocabulary",
      "feedback",
      "classroom",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The sales team sent a _____ to all customers this afternoon. The price in the morning e-mail had been listed incorrectly.",
    "options": [
      "classroom",
      "vocabulary",
      "pronunciation",
      "correction"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Speaking confidently on the phone in English takes a lot of _____. Try recording yourself every day and listening for mistakes.",
    "options": [
      "classroom",
      "curriculum",
      "practice",
      "spelling"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "All staff members are encouraged to _____ in the English workshop next week. Please register with the human resources office by Friday.",
    "options": [
      "translate",
      "participate",
      "explain",
      "review"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Before the interview, Lisa decided to _____ her notes from the business English course. She wanted to remember the most useful phrases.",
    "options": [
      "review",
      "participate",
      "communicate",
      "explain"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The new travel expense rules are confusing. The finance manager will _____ them step by step and give clear examples at Monday's meeting.",
    "options": [
      "participate",
      "translate",
      "communicate",
      "explain"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "We need to _____ the product manual into Spanish before the shipment to Mexico. The customers there cannot read English.",
    "options": [
      "participate",
      "translate",
      "review",
      "explain"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Warehouse supervisors must be able to _____ clearly with drivers from other countries. That is why they are taking a basic English course.",
    "options": [
      "translate",
      "review",
      "communicate",
      "explain"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Employees enjoy the new _____ training sessions because they play games and work in pairs. Nobody has to listen to long lectures anymore.",
    "options": [
      "interactive",
      "formal",
      "silent",
      "written"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The science museum offers many _____ programs for children on weekends. Visitors can learn about space, energy, and the environment.",
    "options": [
      "formal",
      "grammatical",
      "fluent",
      "educational"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Please use a _____ greeting in your first e-mail to the new director. Writing just his first name might seem too casual.",
    "options": [
      "interactive",
      "educational",
      "formal",
      "informal"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The new front desk manager speaks Japanese and Spanish _____. She can help guests from many countries without any difficulty.",
    "options": [
      "rarely",
      "fluently",
      "poorly",
      "quietly"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time in which someone is taught something",
    "cn_def": "課；一堂課"
  },
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to teach",
    "cn_def": "老師；教師"
  },
  "student": {
    "pos": "n.",
    "en_def": "a person who is studying at a school or university",
    "cn_def": "學生"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room where classes are taught",
    "cn_def": "教室"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and topics taught in a course",
    "cn_def": "課程（內容）"
  },
  "textbook": {
    "pos": "n.",
    "en_def": "a book used for studying a subject",
    "cn_def": "課本；教科書"
  },
  "worksheet": {
    "pos": "n.",
    "en_def": "a sheet of paper with questions or tasks for learners",
    "cn_def": "學習單；練習卷"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to someone as part of a course or job",
    "cn_def": "作業；指派的任務"
  },
  "homework": {
    "pos": "n.",
    "en_def": "work that a learner is given to do at home",
    "cn_def": "回家作業；功課"
  },
  "exercise": {
    "pos": "n.",
    "en_def": "an activity or set of questions done to practice a skill",
    "cn_def": "練習；練習題"
  },
  "vocabulary": {
    "pos": "n.",
    "en_def": "all the words a person knows or uses",
    "cn_def": "字彙；詞彙"
  },
  "grammar": {
    "pos": "n.",
    "en_def": "the rules for putting words together in a language",
    "cn_def": "文法"
  },
  "pronunciation": {
    "pos": "n.",
    "en_def": "the way a word is said",
    "cn_def": "發音"
  },
  "spelling": {
    "pos": "n.",
    "en_def": "the way letters are put together to form a word",
    "cn_def": "拼字；拼法"
  },
  "listening": {
    "pos": "n.",
    "en_def": "the skill of understanding spoken language",
    "cn_def": "聽力"
  },
  "speaking": {
    "pos": "n.",
    "en_def": "the skill of talking in a language",
    "cn_def": "口說；說話"
  },
  "reading": {
    "pos": "n.",
    "en_def": "the activity or skill of looking at and understanding written words",
    "cn_def": "閱讀"
  },
  "writing": {
    "pos": "n.",
    "en_def": "the skill or activity of putting ideas into written words",
    "cn_def": "寫作"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a conversation in which people share ideas about a topic",
    "cn_def": "討論"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information to a group of people",
    "cn_def": "簡報；報告"
  },
  "quiz": {
    "pos": "n.",
    "en_def": "a short test",
    "cn_def": "小考；測驗"
  },
  "test": {
    "pos": "n.",
    "en_def": "a set of questions to measure someone's skill or knowledge",
    "cn_def": "測驗；考試"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how well someone has done something",
    "cn_def": "意見回饋；反饋"
  },
  "correction": {
    "pos": "n.",
    "en_def": "a change that makes something right",
    "cn_def": "更正；訂正"
  },
  "practice": {
    "pos": "n.",
    "en_def": "doing something again and again to get better at it",
    "cn_def": "練習"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity",
    "cn_def": "參與；參加"
  },
  "review": {
    "pos": "v.",
    "en_def": "to look at or study something again",
    "cn_def": "複習；檢閱"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear and easy to understand",
    "cn_def": "解釋；說明"
  },
  "translate": {
    "pos": "v.",
    "en_def": "to change words from one language into another",
    "cn_def": "翻譯"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with others",
    "cn_def": "溝通；傳達"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "involving people doing things together, not just listening",
    "cn_def": "互動的"
  },
  "educational": {
    "pos": "adj.",
    "en_def": "helping people learn",
    "cn_def": "教育性的；有教育意義的"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and polite, used in official situations",
    "cn_def": "正式的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly, not official",
    "cn_def": "非正式的；輕鬆的"
  },
  "fluently": {
    "pos": "adv.",
    "en_def": "in a smooth and easy way, without stopping",
    "cn_def": "流利地"
  }
};

const EXTRA_GLOSSES = {};
