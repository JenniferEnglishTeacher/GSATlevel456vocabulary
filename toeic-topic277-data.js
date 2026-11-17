// Topic 277 Quiz Data: Person 人
// Source word list: https://www.examword.com/group-topic/person — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T277 - Person 人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "individual",
    "pos": "n.",
    "cn_def": "個人；個體",
    "en_def": "a single person, thought of separately from a group",
    "sentence": "A: Why did the HR manager decide to meet each new employee separately instead of holding one big training session for everyone on Monday? B: She believes that every {{BLANK}} learns in a different way, so she wants to understand each person's goals and experience before planning their first month at the company.",
    "cn": "A：為什麼人資經理決定星期一分別和每位新員工見面，而不是為大家舉辦一場大型訓練課程？ B：她認為每一個【個人】的學習方式都不同，所以她想在規劃他們在公司的第一個月之前，先了解每個人的目標和經驗。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "性格；品格",
    "en_def": "the qualities that make a person who they are",
    "sentence": "A: Why did the director choose Mr. Lin to manage the new branch when several other candidates had more years of sales experience than him? B: She said that his strong {{BLANK}} matters more than experience, because he stays calm under pressure, keeps his promises, and always treats his team members fairly and kindly.",
    "cn": "A：當其他幾位候選人的銷售經驗都比林先生多時，為什麼主管選擇他來管理新分店？ B：她說他堅強的【品格】比經驗更重要，因為他在壓力下能保持冷靜、信守承諾，而且總是公平又親切地對待團隊成員。"
  },
  {
    "word": "personality",
    "pos": "n.",
    "cn_def": "個性；人格",
    "en_def": "the qualities that make up how a person thinks, feels and acts",
    "sentence": "A: What did the hiring team think about the young woman who applied for the receptionist position at our hotel last Thursday afternoon? B: They were very impressed, because she has a warm and cheerful {{BLANK}}, and they believe guests will feel welcome the moment they walk through the front door and see her smile.",
    "cn": "A：招聘團隊對上週四下午來應徵我們飯店櫃檯接待員職位的那位年輕女子有什麼看法？ B：他們印象非常深刻，因為她有溫暖又開朗的【個性】，他們相信客人一走進大門看到她的笑容就會覺得受到歡迎。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身分",
    "en_def": "who a person is; proof of who someone is",
    "sentence": "A: Why did the security guard at the front desk ask the visitor to wait before letting him go up to the tenth floor this morning? B: Company rules say that every guest must show a photo card so the guard can check his {{BLANK}}, and the visitor had left his wallet in the taxi.",
    "cn": "A：今天早上櫃台的保全為什麼要那位訪客先等一下，才讓他上十樓？ B：公司規定每位訪客都必須出示有照片的證件，好讓保全核對他的【身分】，而那位訪客把錢包忘在計程車上了。"
  },
  {
    "word": "appearance",
    "pos": "n.",
    "cn_def": "外表；外觀",
    "en_def": "the way someone or something looks",
    "sentence": "A: Should I wear a suit and tie to the job interview at the bank tomorrow, or is a simple shirt and pants good enough? B: I think you should wear the suit, because interviewers at banks usually pay attention to a candidate's {{BLANK}}, and looking neat and professional will help you make a good first impression.",
    "cn": "A：明天去銀行面試我應該穿西裝打領帶，還是簡單的襯衫和長褲就夠了？ B：我覺得你應該穿西裝，因為銀行的面試官通常會注意應徵者的【外表】，看起來整潔又專業會幫助你留下良好的第一印象。"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "cn_def": "態度",
    "en_def": "the way you think and feel about something, shown in how you act",
    "sentence": "A: Why did the store manager give Kevin the employee of the month award even though his sales numbers were not the highest? B: She said that his positive {{BLANK}} helps the whole team, because he always greets customers with a smile and volunteers to help coworkers when the shop gets very busy.",
    "cn": "A：為什麼店長把本月最佳員工獎頒給凱文，即使他的業績不是最高的？ B：她說他積極的【態度】對整個團隊都有幫助，因為他總是面帶微笑地招呼顧客，而且在店裡很忙時會主動幫忙同事。"
  },
  {
    "word": "behavior",
    "pos": "n.",
    "cn_def": "行為；舉止",
    "en_def": "the way a person acts",
    "sentence": "A: Why did the restaurant owner ask one of the customers to leave during the busy dinner service last Saturday night? B: The man was shouting at the waiters and disturbing other diners, and the owner explained that rude {{BLANK}} like that is not acceptable, even if the customer is unhappy with his meal.",
    "cn": "A：上週六晚上晚餐尖峰時段，為什麼餐廳老闆請一位客人離開？ B：那個男人對服務生大吼大叫並打擾其他用餐的客人，老闆解釋說，即使顧客對餐點不滿意，那樣粗魯的【行為】也是不被接受的。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天賦；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: How did the new designer create such beautiful posters for our product launch when she only joined the company two weeks ago? B: She has a natural {{BLANK}} for drawing and color, and she has been practicing art since she was a child, so she can produce excellent work very quickly.",
    "cn": "A：新來的設計師兩週前才加入公司，她是怎麼為我們的產品發表會做出這麼漂亮的海報的？ B：她在繪畫和色彩方面有天生的【天賦】，而且她從小就開始練習藝術，所以她能很快地做出很棒的作品。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability you get through training and practice",
    "sentence": "A: Why is the company paying for all the sales staff to take an evening course at the business school this spring? B: The manager wants everyone to learn an important new {{BLANK}}, which is how to negotiate with large overseas clients, because we will be signing several big contracts this year and need better prices.",
    "cn": "A：為什麼公司今年春天要出錢讓所有業務人員去商學院上夜間課程？ B：經理希望每個人都學會一項重要的新【技能】，也就是如何和大型海外客戶談判，因為我們今年將簽下好幾份大合約，需要爭取更好的價格。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often, sometimes without thinking",
    "sentence": "A: How do you always finish your reports so early when everyone else in the department is working late every Friday evening? B: I have a good {{BLANK}} of writing a short to-do list every morning before I check my email, so I always know what is most important and never waste time.",
    "cn": "A：當部門其他人每個星期五晚上都在加班時，你怎麼總是那麼早就完成報告？ B：我有一個好【習慣】，就是每天早上在查看電子郵件之前先寫一份簡短的待辦清單，所以我總是知道什麼最重要，從不浪費時間。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "優點；長處",
    "en_def": "a good quality or something you do well",
    "sentence": "A: What should I say when the interviewer asks me about myself at the marketing company tomorrow morning? B: Tell her that your greatest {{BLANK}} is organizing events, and give an example, like the large charity concert you planned last year, which brought in over five hundred guests and raised a lot of money.",
    "cn": "A：明天早上行銷公司的面試官請我介紹自己時，我應該說什麼？ B：告訴她你最大的【長處】是籌辦活動，並舉個例子，像是你去年策劃的大型慈善音樂會，吸引了超過五百位來賓並募到很多錢。"
  },
  {
    "word": "weakness",
    "pos": "n.",
    "cn_def": "缺點；弱點",
    "en_def": "a fault or something you are not good at",
    "sentence": "A: Did the team leader say anything about your work during the yearly review meeting with her yesterday afternoon? B: She said I do excellent work with customers, but my main {{BLANK}} is public speaking, so she suggested that I join a presentation workshop next month to build my confidence in front of large groups.",
    "cn": "A：昨天下午你和組長年度考核面談時，她對你的工作有說什麼嗎？ B：她說我與客戶的互動表現很好，但我主要的【弱點】是公開演說，所以她建議我下個月參加簡報工作坊，以建立在一大群人面前說話的信心。"
  },
  {
    "word": "honest",
    "pos": "adj.",
    "cn_def": "誠實的",
    "en_def": "telling the truth; not lying or cheating",
    "sentence": "A: Why did the customer write such a nice comment about our car repair shop on the internet last week? B: Our mechanic was {{BLANK}} with her and said the old car only needed a cheap new battery, even though he could have charged her for a much more expensive repair.",
    "cn": "A：上週那位顧客為什麼在網路上給我們的汽車修理廠寫了那麼好的評論？ B：我們的技師對她很【誠實】，告訴她那輛舊車只需要換一顆便宜的新電池，即使他其實可以向她收取貴得多的修理費。"
  },
  {
    "word": "brave",
    "pos": "adj.",
    "cn_def": "勇敢的",
    "en_def": "not afraid to do something dangerous or difficult",
    "sentence": "A: Is it true that one of the hotel staff helped the guests leave the building when the fire alarm went off last night? B: Yes, a {{BLANK}} young receptionist went back up to the third floor, knocked on every door, and made sure that all the elderly guests got downstairs safely before the firefighters arrived.",
    "cn": "A：昨晚火災警報響起時，真的有一位飯店員工幫助客人離開大樓嗎？ B：是的，一位【勇敢的】年輕櫃台人員回到三樓，敲了每一扇門，確保所有年長的客人在消防員抵達前都安全地下樓。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的",
    "en_def": "happy to give money, time or help to others",
    "sentence": "A: How did the children's hospital pay for the new playroom and all the toys and books that were delivered last month? B: A {{BLANK}} local businessman donated fifty thousand dollars after his own daughter stayed there for treatment, and he also asked his employees to volunteer there on weekends.",
    "cn": "A：兒童醫院是如何支付新遊戲室以及上個月送來的所有玩具和書籍的費用？ B：一位【慷慨的】當地商人在自己的女兒在那裡接受治療後捐了五萬美元，他還請他的員工週末去那裡當志工。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責的；有責任的",
    "en_def": "having the duty to take care of something",
    "sentence": "A: Who should I call if the projector in the main meeting room stops working during the client presentation this afternoon? B: You should call Tom in the IT department, because he is {{BLANK}} for all the computers and equipment in the meeting rooms, and he can usually fix problems in a few minutes.",
    "cn": "A：如果今天下午客戶簡報時主會議室的投影機壞了，我應該打電話給誰？ B：你應該打給資訊部的湯姆，因為他【負責】會議室裡所有的電腦和設備，而且他通常幾分鐘內就能解決問題。"
  },
  {
    "word": "friendly",
    "pos": "adj.",
    "cn_def": "友善的",
    "en_def": "kind and pleasant to other people",
    "sentence": "A: Why do you always buy your coffee at the small café on the corner instead of the big chain store across from the office? B: The staff there are so {{BLANK}} and they remember my name and my usual order, so it feels like visiting old neighbors every morning before work.",
    "cn": "A：為什麼你總是在轉角的小咖啡店買咖啡，而不是在辦公室對面的大型連鎖店？ B：那裡的店員非常【友善】，而且記得我的名字和我平常點的東西，所以每天早上上班前去那裡就像拜訪老鄰居一樣。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有自信的；有信心的",
    "en_def": "sure about your own abilities",
    "sentence": "A: Are you worried about giving the sales presentation to the board of directors tomorrow morning at nine o'clock? B: Not really, because I have practiced it many times with my team this week, so I feel {{BLANK}} that I can answer their questions and explain our new plan clearly.",
    "cn": "A：你擔心明天早上九點要向董事會做的業務簡報嗎？ B：不太擔心，因為這週我已經和我的團隊練習了很多次，所以我【有信心】能回答他們的問題，並清楚地說明我們的新計畫。"
  },
  {
    "word": "shy",
    "pos": "adj.",
    "cn_def": "害羞的",
    "en_def": "nervous and uncomfortable with people you do not know",
    "sentence": "A: Why didn't the new intern say anything during the team lunch on Friday, even when people asked about her hobbies? B: She is a little {{BLANK}} around people she doesn't know well, but her supervisor says she is very hard-working and will probably start talking more once she gets used to everyone.",
    "cn": "A：為什麼新來的實習生在星期五的團隊午餐時都不說話，即使有人問她的嗜好也一樣？ B：她在不太熟的人面前有點【害羞】，但她的主管說她非常努力，等她習慣大家之後可能就會開始多說話了。"
  },
  {
    "word": "optimistic",
    "pos": "adj.",
    "cn_def": "樂觀的",
    "en_def": "expecting good things to happen",
    "sentence": "A: What did the sales director say about next year's business when she spoke at the company meeting this morning? B: She was very {{BLANK}}, because we signed three new contracts in Asia last month, and she expects our profits to grow by at least ten percent in the coming year.",
    "cn": "A：業務總監今天早上在公司會議上談到明年的業務時說了什麼？ B：她非常【樂觀】，因為我們上個月在亞洲簽了三份新合約，她預期明年我們的利潤至少會成長百分之十。"
  },
  {
    "word": "pessimistic",
    "pos": "adj.",
    "cn_def": "悲觀的",
    "en_def": "expecting bad things to happen",
    "sentence": "A: Why does the finance manager think we should delay opening the new store in the shopping mall until next spring? B: He is quite {{BLANK}} about the economy this winter, because prices keep rising and many families are spending less money, so he worries that sales would be too low.",
    "cn": "A：為什麼財務經理認為我們應該把購物中心新店的開幕延到明年春天？ B：他對今年冬天的經濟相當【悲觀】，因為物價持續上漲，許多家庭都減少花費，所以他擔心銷售額會太低。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: Who came up with the idea of using short funny videos to advertise our new juice drinks on social media last month? B: It was Amy from the marketing team; she is very {{BLANK}}, and her videos got over a million views in two weeks, which helped sales double in many supermarkets.",
    "cn": "A：上個月是誰想出用簡短有趣的影片在社群媒體上宣傳我們新果汁飲料的點子？ B：是行銷團隊的艾咪，她非常【有創意】，她的影片在兩週內獲得超過一百萬次觀看，幫助許多超市的銷售量翻倍。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的",
    "en_def": "able to do things without help from others",
    "sentence": "A: Does the new assistant still need help from you every time she prepares the monthly reports for the manager? B: Not anymore; she has become very {{BLANK}} over the past three months, so she now collects the data, makes the charts, and sends the reports by herself before every deadline.",
    "cn": "A：新助理每次幫經理準備月報時還需要你幫忙嗎？ B：已經不用了，她在過去三個月裡變得非常【獨立】，現在她都自己收集資料、製作圖表，並在每個截止日期前把報告寄出。"
  },
  {
    "word": "patient",
    "pos": "adj.",
    "cn_def": "有耐心的",
    "en_def": "able to wait or deal with problems calmly",
    "sentence": "A: How does the bank teller stay so calm when customers get angry about long lines on busy Friday afternoons? B: She is a very {{BLANK}} person, so she listens carefully, apologizes for the delay, and explains each step slowly, even when an elderly customer asks the same question three or four times.",
    "cn": "A：在忙碌的星期五下午，當顧客因為大排長龍而生氣時，那位銀行行員怎麼能保持那麼冷靜？ B：她是一個非常【有耐心】的人，所以她會仔細聆聽、為延誤道歉，並慢慢解釋每個步驟，即使年長的顧客把同一個問題問了三、四次也一樣。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；領袖",
    "en_def": "a person who guides or is in charge of a group",
    "sentence": "A: Who will take charge of the project team after Mr. Park retires from the company at the end of this year? B: The director has chosen Linda as the new team {{BLANK}}, because she has worked on the project from the beginning and everyone respects her calm and fair way of making decisions.",
    "cn": "A：今年年底朴先生從公司退休後，誰會接管專案團隊？ B：主管已選了琳達當新的團隊【領導者】，因為她從一開始就參與這個專案，而且大家都尊重她冷靜又公平的決策方式。"
  },
  {
    "word": "follower",
    "pos": "n.",
    "cn_def": "追隨者；追蹤者",
    "en_def": "a person who supports someone or follows them, for example online",
    "sentence": "A: Why did the cosmetics company pay that young woman to talk about its new lipstick in her online videos last month? B: She has more than two hundred thousand fans, and almost every {{BLANK}} of her channel trusts her advice about beauty products, so the company believed her videos would reach many young customers quickly.",
    "cn": "A：上個月那家化妝品公司為什麼付錢請那位年輕女子在她的網路影片中介紹新口紅？ B：她有超過二十萬名粉絲，而且她頻道的幾乎每一位【追隨者】都信任她對美妝產品的建議，所以公司相信她的影片能很快接觸到許多年輕顧客。"
  },
  {
    "word": "mentor",
    "pos": "n.",
    "cn_def": "導師；良師",
    "en_def": "an experienced person who advises and helps someone with less experience",
    "sentence": "A: How did you learn so much about the hotel business in only your first year working at the front desk? B: The manager gave me an experienced {{BLANK}}, a woman who had worked in hotels for twenty years, and she met me every week to answer my questions and share useful advice.",
    "cn": "A：你在櫃台工作的第一年，怎麼就學到這麼多飯店業的知識？ B：經理為我安排了一位經驗豐富的【導師】，她是一位在飯店業工作了二十年的女士，每週都和我見面回答我的問題，並分享實用的建議。"
  },
  {
    "word": "role model",
    "pos": "n.phr.",
    "cn_def": "榜樣；模範",
    "en_def": "a person whose good behavior others want to copy",
    "sentence": "A: Why did the school invite the owner of the bakery chain to speak to the students at the graduation ceremony this year? B: She started her business with very little money and now employs three hundred people, so the principal thought she would be a great {{BLANK}} for young people with big dreams.",
    "cn": "A：今年學校為什麼邀請那家連鎖麵包店的老闆在畢業典禮上對學生演講？ B：她用很少的錢創業，現在雇用了三百名員工，所以校長認為她會是有遠大夢想的年輕人的絕佳【榜樣】。"
  },
  {
    "word": "ambitious",
    "pos": "adj.",
    "cn_def": "有抱負的；有雄心的",
    "en_def": "having a strong wish to be successful",
    "sentence": "A: Did you hear that Jason wants to become the manager of the whole sales department within the next three years? B: Yes, he is very {{BLANK}}; he takes evening classes twice a week, reads business books on the train, and always volunteers for difficult projects that the other staff try to avoid.",
    "cn": "A：你有聽說傑森想在未來三年內成為整個業務部的經理嗎？ B：有啊，他非常【有抱負】，每週上兩次夜間課程，在火車上讀商業書籍，而且總是自願接下其他同事想避開的困難專案。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to do what is expected",
    "sentence": "A: Why does the restaurant always order its vegetables from the same small farm instead of trying a cheaper supplier? B: The farm is very {{BLANK}}, because its truck arrives at six o'clock every morning with fresh vegetables, so the chefs never have to worry about running out of food during busy lunch hours.",
    "cn": "A：為什麼那家餐廳總是向同一個小農場訂購蔬菜，而不嘗試更便宜的供應商？ B：那個農場非常【可靠】，它的卡車每天早上六點都會準時送來新鮮蔬菜，所以廚師們從不需要擔心在忙碌的午餐時段食材用完。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的",
    "en_def": "honest and true in what you feel and say",
    "sentence": "A: What did the airline manager say to the passengers after their flight to Tokyo was cancelled because of the storm last night? B: She offered a {{BLANK}} apology, explained the safety reasons clearly, and gave every passenger a free hotel room and meal vouchers until the next flight left this morning.",
    "cn": "A：昨晚因為暴風雨飛往東京的班機取消後，航空公司經理對乘客說了什麼？ B：她致上【真誠的】道歉，清楚地說明安全上的理由，並提供每位乘客免費的飯店房間和餐券，直到今天早上下一班飛機起飛。"
  },
  {
    "word": "sociable",
    "pos": "adj.",
    "cn_def": "善於交際的；愛社交的",
    "en_def": "enjoying meeting and talking with other people",
    "sentence": "A: Who do you think should welcome the overseas visitors at the trade fair and show them around our booth next week? B: I think Mark should do it, because he is very {{BLANK}} and enjoys chatting with strangers, so the visitors will feel comfortable asking him questions about our products.",
    "cn": "A：你覺得下週在商展上應該由誰來接待海外訪客，並帶他們參觀我們的攤位？ B：我覺得應該由馬克來做，因為他非常【善於交際】，喜歡和陌生人聊天，所以訪客會很自在地向他詢問我們產品的問題。"
  },
  {
    "word": "mature",
    "pos": "adj.",
    "cn_def": "成熟的",
    "en_def": "behaving in a sensible way, like an adult",
    "sentence": "A: How did the youngest member of the team handle the angry client who complained loudly about the late delivery yesterday? B: He was surprisingly {{BLANK}} for his age; he stayed calm, listened carefully to the complaint, and offered a fair solution, so the client calmed down and even thanked him later.",
    "cn": "A：昨天那位大聲抱怨延遲送貨的生氣客戶，團隊裡最年輕的成員是怎麼處理的？ B：以他的年紀來說，他出奇地【成熟】，他保持冷靜、仔細聆聽抱怨並提出公平的解決方案，所以客戶冷靜下來，後來甚至還向他道謝。"
  },
  {
    "word": "selfish",
    "pos": "adj.",
    "cn_def": "自私的",
    "en_def": "caring only about yourself and not about others",
    "sentence": "A: Why are the other staff members in the office so upset with the new sales assistant this week? B: They think he is {{BLANK}}, because he took the best parking space every day, ate the cake that was meant for everyone, and never helped anyone answer the phones when they were busy.",
    "cn": "A：為什麼這週辦公室的其他員工對新來的業務助理那麼不滿？ B：他們認為他很【自私】，因為他每天都佔用最好的停車位、吃掉了原本要給大家的蛋糕，而且在大家忙的時候從不幫忙接電話。"
  }
];

const MCQS = [
  {
    "q": "Customers trust the new branch manager completely. She is a woman of strong _____ who always keeps her promises.",
    "options": [
      "character",
      "habit",
      "identity",
      "appearance"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Our receptionist greets every guest with a big smile. Her cheerful _____ makes visitors feel welcome as soon as they arrive.",
    "options": [
      "identity",
      "weakness",
      "personality",
      "skill"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "All visitors must show a photo ID at the front desk. The guard needs to check each person's _____ before giving them a pass.",
    "options": [
      "talent",
      "identity",
      "attitude",
      "strength"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Kevin was not the top seller this month, but he still won an award. The manager praised his positive _____ toward customers and coworkers.",
    "options": [
      "identity",
      "weakness",
      "appearance",
      "attitude"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The guest shouted at the staff and broke a glass. The hotel asked him to leave because of his rude _____.",
    "options": [
      "behavior",
      "talent",
      "strength",
      "skill"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The new designer draws beautiful posters in just a few hours. Everyone agrees she has a natural _____ for art.",
    "options": [
      "attitude",
      "identity",
      "behavior",
      "talent"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Speaking a second language is a useful _____ in international business. Many companies pay more to staff who can talk with overseas clients.",
    "options": [
      "identity",
      "skill",
      "weakness",
      "behavior"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Our manager checks her email only twice a day. This simple _____ helps her focus on her most important tasks.",
    "options": [
      "identity",
      "strength",
      "habit",
      "appearance"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Organizing large events is her greatest _____. Last year she planned a conference for over five hundred guests without any problems.",
    "options": [
      "strength",
      "identity",
      "behavior",
      "appearance"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Tom does excellent work with clients, but he is nervous in front of large groups. Public speaking is his main _____.",
    "options": [
      "identity",
      "weakness",
      "attitude",
      "behavior"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The mechanic told the customer that her car only needed a cheap battery. She was happy that he was so _____ with her.",
    "options": [
      "shy",
      "pessimistic",
      "ambitious",
      "honest"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "A _____ security guard ran back into the smoking building. He helped three trapped workers escape before the firefighters arrived.",
    "options": [
      "pessimistic",
      "selfish",
      "brave",
      "shy"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "A _____ businessman donated fifty thousand dollars to the children's hospital. The money paid for a new playroom and books.",
    "options": [
      "shy",
      "generous",
      "pessimistic",
      "mature"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "If the printer breaks, please contact the IT team. They are _____ for all the office equipment on this floor.",
    "options": [
      "responsible",
      "creative",
      "honest",
      "optimistic"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Guests often praise the hotel staff in online reviews. They say the workers are _____ and always ready to help with directions.",
    "options": [
      "pessimistic",
      "selfish",
      "friendly",
      "shy"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Linda practiced her speech many times this week. Now she feels _____ that she can answer the board's questions clearly.",
    "options": [
      "generous",
      "selfish",
      "sincere",
      "confident"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The new intern rarely speaks during team meetings. She is a little _____ around people she does not know well.",
    "options": [
      "shy",
      "ambitious",
      "generous",
      "reliable"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Sales rose by twenty percent in the last quarter. The director is _____ that profits will grow again next year.",
    "options": [
      "selfish",
      "shy",
      "optimistic",
      "generous"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Prices keep rising and customers are spending less. The finance manager is _____ about opening a new store this winter.",
    "options": [
      "generous",
      "pessimistic",
      "sociable",
      "mature"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Amy suggested using funny short videos to advertise our new drinks. Her _____ idea helped double sales in many supermarkets.",
    "options": [
      "shy",
      "selfish",
      "pessimistic",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The new assistant no longer needs help with the monthly reports. She has become very _____ and now finishes them by herself.",
    "options": [
      "generous",
      "sincere",
      "independent",
      "brave"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The bank teller explained the form slowly three times. She is always _____ with elderly customers who need extra help.",
    "options": [
      "patient",
      "ambitious",
      "selfish",
      "creative"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Linda will manage the project team after the director retires. Everyone agrees she will be an excellent team _____.",
    "options": [
      "habit",
      "identity",
      "weakness",
      "leader"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Each new employee is paired with an experienced _____. This senior staff member meets them weekly to answer questions and give advice.",
    "options": [
      "habit",
      "mentor",
      "identity",
      "behavior"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The bakery owner started her business with very little money. Many young people see her as a _____ for their own future.",
    "options": [
      "role model",
      "identity",
      "habit",
      "weakness"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Jason takes evening classes and volunteers for difficult projects. He is very _____ and hopes to become a manager within three years.",
    "options": [
      "shy",
      "selfish",
      "ambitious",
      "pessimistic"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The restaurant buys its vegetables from the same farm every day. The supplier is very _____ and has never missed a delivery.",
    "options": [
      "shy",
      "selfish",
      "pessimistic",
      "reliable"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The airline manager offered passengers a _____ apology for the cancelled flight. She also gave everyone a free hotel room.",
    "options": [
      "brave",
      "sincere",
      "shy",
      "pessimistic"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Although he is only twenty-two, Daniel handled the angry client calmly. His manager said he was very _____ for his age.",
    "options": [
      "mature",
      "selfish",
      "pessimistic",
      "creative"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Nobody likes working with Peter because he never shares information. His coworkers say he is _____ and only cares about his own bonus.",
    "options": [
      "patient",
      "generous",
      "reliable",
      "selfish"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "individual": {
    "pos": "n.",
    "en_def": "a single person, thought of separately from a group",
    "cn_def": "個人；個體"
  },
  "character": {
    "pos": "n.",
    "en_def": "the qualities that make a person who they are",
    "cn_def": "性格；品格"
  },
  "personality": {
    "pos": "n.",
    "en_def": "the qualities that make up how a person thinks, feels and acts",
    "cn_def": "個性；人格"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person is; proof of who someone is",
    "cn_def": "身分"
  },
  "appearance": {
    "pos": "n.",
    "en_def": "the way someone or something looks",
    "cn_def": "外表；外觀"
  },
  "attitude": {
    "pos": "n.",
    "en_def": "the way you think and feel about something, shown in how you act",
    "cn_def": "態度"
  },
  "behavior": {
    "pos": "n.",
    "en_def": "the way a person acts",
    "cn_def": "行為；舉止"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天賦；才能"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability you get through training and practice",
    "cn_def": "技能；技巧"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often, sometimes without thinking",
    "cn_def": "習慣"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or something you do well",
    "cn_def": "優點；長處"
  },
  "weakness": {
    "pos": "n.",
    "en_def": "a fault or something you are not good at",
    "cn_def": "缺點；弱點"
  },
  "honest": {
    "pos": "adj.",
    "en_def": "telling the truth; not lying or cheating",
    "cn_def": "誠實的"
  },
  "brave": {
    "pos": "adj.",
    "en_def": "not afraid to do something dangerous or difficult",
    "cn_def": "勇敢的"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "happy to give money, time or help to others",
    "cn_def": "慷慨的"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "having the duty to take care of something",
    "cn_def": "負責的；有責任的"
  },
  "friendly": {
    "pos": "adj.",
    "en_def": "kind and pleasant to other people",
    "cn_def": "友善的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure about your own abilities",
    "cn_def": "有自信的；有信心的"
  },
  "shy": {
    "pos": "adj.",
    "en_def": "nervous and uncomfortable with people you do not know",
    "cn_def": "害羞的"
  },
  "optimistic": {
    "pos": "adj.",
    "en_def": "expecting good things to happen",
    "cn_def": "樂觀的"
  },
  "pessimistic": {
    "pos": "adj.",
    "en_def": "expecting bad things to happen",
    "cn_def": "悲觀的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "able to do things without help from others",
    "cn_def": "獨立的"
  },
  "patient": {
    "pos": "adj.",
    "en_def": "able to wait or deal with problems calmly",
    "cn_def": "有耐心的"
  },
  "leader": {
    "pos": "n.",
    "en_def": "a person who guides or is in charge of a group",
    "cn_def": "領導者；領袖"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who supports someone or follows them, for example online",
    "cn_def": "追隨者；追蹤者"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises and helps someone with less experience",
    "cn_def": "導師；良師"
  },
  "role model": {
    "pos": "n.phr.",
    "en_def": "a person whose good behavior others want to copy",
    "cn_def": "榜樣；模範"
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "having a strong wish to be successful",
    "cn_def": "有抱負的；有雄心的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do what is expected",
    "cn_def": "可靠的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "honest and true in what you feel and say",
    "cn_def": "真誠的"
  },
  "sociable": {
    "pos": "adj.",
    "en_def": "enjoying meeting and talking with other people",
    "cn_def": "善於交際的；愛社交的"
  },
  "mature": {
    "pos": "adj.",
    "en_def": "behaving in a sensible way, like an adult",
    "cn_def": "成熟的"
  },
  "selfish": {
    "pos": "adj.",
    "en_def": "caring only about yourself and not about others",
    "cn_def": "自私的"
  }
};

const EXTRA_GLOSSES = {};
