// Topic 119 Quiz Data: Encourage 鼓勵
// Source word list: https://www.examword.com/group-topic/encourage — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T119 - Encourage 鼓勵",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；支援",
    "en_def": "to help someone by giving them encouragement or practical help",
    "sentence": "A: Our team has to finish the new product launch plan by Friday, but two designers are on vacation this week, so what should we do? B: Don't worry, the manager in the marketing department promised to {{BLANK}} us by lending two of her staff until the project is completed next month.",
    "cn": "A：我們團隊必須在週五前完成新產品上市計畫，但這週有兩位設計師在休假，我們該怎麼辦？ B：別擔心，行銷部門的經理答應會借調兩名員工來【支援】我們，直到下個月專案完成為止。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；使有動力",
    "en_def": "to make someone want to do something or work harder",
    "sentence": "A: Sales in our downtown store have been low for three months, and many of the staff seem tired and bored at work, so do you have any ideas? B: We could offer a small bonus to the top seller each month, which should {{BLANK}} everyone to talk with more customers and work harder.",
    "cn": "A：我們市中心門市的業績已經低迷了三個月，很多員工上班時看起來又累又無聊，你有什麼想法嗎？ B：我們可以每個月發一筆小獎金給業績最好的銷售員，這應該能【激勵】大家和更多顧客交談、更努力工作。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "啟發；激發",
    "en_def": "to give someone the idea or the wish to do something good",
    "sentence": "A: Why did you decide to start your own small bakery after working at a large bank for almost ten years? B: My grandmother ran a popular café in our hometown for forty years, and I want my shop to {{BLANK}} young people in the neighborhood to follow their own dreams just as she did.",
    "cn": "A：你在大銀行工作了將近十年，為什麼決定開一家自己的小麵包店？ B：我祖母在我們家鄉經營一家很受歡迎的咖啡館長達四十年，我希望我的店也能像她一樣【啟發】附近的年輕人去追求自己的夢想。"
  },
  {
    "word": "boost",
    "pos": "v.",
    "cn_def": "提升；促進",
    "en_def": "to increase or improve something",
    "sentence": "A: The new coffee shop on the corner has very few customers on weekday mornings, even though the coffee is excellent and the prices are fair, so what is the owner going to do about it? B: She plans to hand out free samples at the train station next week, which she hopes will {{BLANK}} sales and bring in more office workers.",
    "cn": "A：轉角那家新咖啡店平日早上客人很少，雖然咖啡很棒、價格也合理，老闆打算怎麼處理？ B：她打算下週在火車站發放免費試喝品，她希望這能【提升】銷量並吸引更多上班族。"
  },
  {
    "word": "promote",
    "pos": "v.",
    "cn_def": "促進；推廣",
    "en_def": "to help something grow, develop or become more popular",
    "sentence": "A: Why is the city giving free bus passes to all students and older people starting next month? B: The local government wants to {{BLANK}} the use of public transportation, because the roads downtown are always crowded and the air quality has become worse over the past few years.",
    "cn": "A：為什麼市政府從下個月開始要提供所有學生和長者免費公車票？ B：地方政府想要【推廣】大眾運輸的使用，因為市中心的道路總是很擁擠，而且過去幾年空氣品質也變得更差了。"
  },
  {
    "word": "reinforce",
    "pos": "v.",
    "cn_def": "加強；強化",
    "en_def": "to make an idea, feeling or habit stronger",
    "sentence": "A: The new staff learned the safety rules during their first week, but some of them still forget to wear gloves in the warehouse, so what should we do? B: Let's put large posters near every door and hold a short meeting each Monday to {{BLANK}} the rules until everyone follows them naturally.",
    "cn": "A：新進員工在第一週就學過安全規定了，但有些人在倉庫裡還是忘記戴手套，我們該怎麼辦？ B：我們在每扇門旁邊貼上大海報，並且每週一開個簡短的會議來【加強】這些規定，直到每個人都自然而然地遵守為止。"
  },
  {
    "word": "uplift",
    "pos": "v.",
    "cn_def": "振奮；使精神振奮",
    "en_def": "to make someone feel happier or more hopeful",
    "sentence": "A: Why are there so many bright paintings and green plants in the hospital waiting area now? B: The hospital director believes that a cheerful space can {{BLANK}} patients and their families while they wait, so she asked local artists and a garden company to redesign the whole floor last spring.",
    "cn": "A：為什麼醫院候診區現在有這麼多色彩明亮的畫作和綠色植物？ B：院長認為一個令人愉快的空間能在病患和家屬等候時【振奮】他們的心情，所以她去年春天請了當地藝術家和一家園藝公司重新設計整層樓。"
  },
  {
    "word": "cheer",
    "pos": "v.",
    "cn_def": "歡呼；為…加油",
    "en_def": "to shout to show support or praise",
    "sentence": "A: Are you going to the company's charity run in the park on Saturday morning, or do you have other plans this weekend? B: I hurt my knee last month, so I can't run, but I'll stand near the finish line with my kids and {{BLANK}} for our sales team as they cross it.",
    "cn": "A：你週六早上會去參加公司在公園舉辦的慈善路跑嗎？還是你這週末有其他計畫？ B：我上個月膝蓋受傷了，所以不能跑步，但我會帶孩子站在終點線附近，在我們業務團隊衝過終點時為他們【歡呼加油】。"
  },
  {
    "word": "urge",
    "pos": "v.",
    "cn_def": "力勸；敦促",
    "en_def": "to strongly advise or ask someone to do something",
    "sentence": "A: I heard that the airport will be very busy this Friday because of the national holiday, so how early should our team leave the office? B: The travel agent sent an email this morning to {{BLANK}} all passengers to arrive at least three hours before their flights, so we should leave by noon.",
    "cn": "A：我聽說因為國定假日，這週五機場會非常擁擠，那我們團隊應該多早離開辦公室？ B：旅行社今天早上寄了一封電子郵件，【敦促】所有旅客至少在班機起飛前三小時抵達，所以我們應該在中午前出發。"
  },
  {
    "word": "stimulate",
    "pos": "v.",
    "cn_def": "刺激；促進",
    "en_def": "to cause something to become more active or to grow",
    "sentence": "A: Why did the government decide to lower taxes for small businesses this year, even though it needs money for new roads and schools? B: Many shops closed during the last economic slowdown, so officials hope lower taxes will {{BLANK}} local business activity and help companies hire more workers in the coming months.",
    "cn": "A：政府今年為什麼決定為小型企業減稅，即使它需要經費來興建新道路和學校？ B：上一次經濟衰退期間有許多商店倒閉，所以官員希望降低稅負能【刺激】地方商業活動，並幫助公司在接下來幾個月僱用更多員工。"
  },
  {
    "word": "empower",
    "pos": "v.",
    "cn_def": "授權；使有能力",
    "en_def": "to give someone the power, confidence or right to do something",
    "sentence": "A: Why do the front desk staff at your hotel solve guest problems so quickly without calling a manager first? B: Our general manager believes we should {{BLANK}} employees to make their own decisions, so every receptionist can offer a free breakfast or a room upgrade when a guest has a bad experience.",
    "cn": "A：為什麼你們飯店的櫃檯人員不用先打電話給經理，就能這麼快解決房客的問題？ B：我們的總經理認為應該【授權】員工自己做決定，所以當房客有不好的體驗時，每位櫃檯人員都可以提供免費早餐或客房升等。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服",
    "en_def": "to make someone agree to do something by giving good reasons",
    "sentence": "A: Did you manage to change the client's mind about canceling their order after the shipping delay last week? B: Yes, I offered them a ten percent discount and free express delivery on their next order, and that was enough to {{BLANK}} them to stay with our company for another year.",
    "cn": "A：上週出貨延誤後，你有成功讓客戶改變取消訂單的想法嗎？ B：有，我給他們打九折，並在下一筆訂單提供免費快遞，這樣就足以【說服】他們繼續跟我們公司合作一年。"
  },
  {
    "word": "convince",
    "pos": "v.",
    "cn_def": "使確信；說服",
    "en_def": "to make someone believe that something is true",
    "sentence": "A: The board members still think the new software is too expensive, so how can we get them to approve the purchase at Thursday's meeting? B: Let's show them the report from our test in the Taipei office, because clear numbers about time and money saved will {{BLANK}} them that it is worth the cost.",
    "cn": "A：董事會成員還是覺得新軟體太貴了，我們要怎麼讓他們在週四的會議上批准這筆採購？ B：我們給他們看台北辦公室的試用報告吧，因為關於節省時間和金錢的明確數據能讓他們【確信】這筆花費是值得的。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "建議；勸告",
    "en_def": "to tell someone what you think they should do",
    "sentence": "A: I'm thinking about moving my savings into a new online investment company that a friend told me about, but I'm not sure it's safe, so what do you think? B: Before you do anything, talk to a financial expert at your bank, because they can {{BLANK}} you on the risks and help you compare other options.",
    "cn": "A：我在考慮把存款轉到一個朋友介紹的新網路投資公司，但我不確定是否安全，你覺得呢？ B：在採取任何行動之前，先跟你銀行的理財專員談談，因為他們可以就風險給你【建議】，並幫你比較其他選擇。"
  },
  {
    "word": "guide",
    "pos": "v.",
    "cn_def": "引導；指導",
    "en_def": "to show someone the way or help them understand what to do",
    "sentence": "A: Our new interns start on Monday, and none of them have worked in an office before, so who will show them how everything works here? B: Ms. Chen from human resources will {{BLANK}} them through the building on the first morning and then explain how to use the computer system after lunch.",
    "cn": "A：我們的新實習生週一開始上班，他們都沒在辦公室工作過，誰會帶他們了解這裡的一切運作？ B：人資部的陳小姐第一天早上會【引導】他們參觀整棟大樓，午餐後再說明如何使用電腦系統。"
  },
  {
    "word": "mentor",
    "pos": "v.",
    "cn_def": "指導；當…的導師",
    "en_def": "to give a less experienced person advice and help over a period of time",
    "sentence": "A: How is the new accountant doing in her first month, and does she need any extra training before the busy tax season begins? B: She is doing well, and our senior accountant has offered to {{BLANK}} her for the next six months, meeting with her every Friday to answer questions and review her work.",
    "cn": "A：新來的會計第一個月表現如何？在忙碌的報稅季開始前她需要額外的訓練嗎？ B：她表現得很好，我們的資深會計已經主動提出在接下來六個月【指導】她，每週五和她見面回答問題並檢查她的工作。"
  },
  {
    "word": "praise",
    "pos": "v.",
    "cn_def": "稱讚；讚揚",
    "en_def": "to say that someone or something is very good",
    "sentence": "A: How did the customers react to the new menu that our chef introduced at the restaurant last weekend? B: Most of them loved it, and several food bloggers wrote online reviews to {{BLANK}} the fresh local ingredients and the friendly service, so we have been fully booked every night since then.",
    "cn": "A：顧客對我們主廚上週末在餐廳推出的新菜單反應如何？ B：大部分顧客都很喜歡，還有好幾位美食部落客在網路上寫評論【稱讚】新鮮的在地食材和親切的服務，所以從那之後我們每晚都客滿。"
  },
  {
    "word": "compliment",
    "pos": "v.",
    "cn_def": "稱讚；恭維",
    "en_def": "to say something nice to someone about their work, looks or actions",
    "sentence": "A: You look very happy this afternoon, so did something good happen during your presentation to the clients from Japan? B: Yes, after the meeting their director came over to {{BLANK}} me on my clear slides and helpful answers, and she even said they would like to work with us again next year.",
    "cn": "A：你今天下午看起來很開心，你向日本客戶做簡報時發生了什麼好事嗎？ B：是啊，會議結束後他們的主管走過來【稱讚】我的投影片很清楚、回答也很有幫助，她甚至說明年還想再跟我們合作。"
  },
  {
    "word": "reassure",
    "pos": "v.",
    "cn_def": "使安心；安慰",
    "en_def": "to say or do something to make someone feel less worried",
    "sentence": "A: Many passengers are getting upset because our flight to Singapore has been delayed for two hours without any explanation, so what should we do? B: I'll ask the gate agent to make an announcement right away, because clear information about the new departure time will {{BLANK}} them and stop people from crowding around the counter.",
    "cn": "A：我們飛往新加坡的班機已經延誤兩小時卻沒有任何說明，很多乘客越來越不高興了，我們該怎麼辦？ B：我會請登機門地勤人員馬上廣播，因為關於新起飛時間的清楚資訊能讓他們【安心】，也能避免大家擠在櫃檯周圍。"
  },
  {
    "word": "comfort",
    "pos": "v.",
    "cn_def": "安慰",
    "en_def": "to make someone feel less sad or worried",
    "sentence": "A: Did you hear that Kevin's father is in the hospital, and he has to fly to his hometown tonight? B: Yes, so a few of us are going to stop by his desk this afternoon to {{BLANK}} him, and we'll also offer to handle his clients until he returns next week.",
    "cn": "A：你有聽說凱文的父親住院了，他今晚必須飛回家鄉嗎？ B：有，所以我們幾個人今天下午要去他的座位【安慰】他，我們也會主動幫他處理客戶，直到他下週回來。"
  },
  {
    "word": "back",
    "pos": "v.",
    "cn_def": "支持；資助",
    "en_def": "to give support or money to a person, plan or idea",
    "sentence": "A: Do you think the directors will approve Lisa's idea of opening a second branch in Kaohsiung next year? B: I think so, because the sales manager and the finance director have both agreed to {{BLANK}} her plan at the meeting, and their support usually carries a lot of weight with the board.",
    "cn": "A：你覺得董事們會批准麗莎明年在高雄開第二家分店的構想嗎？ B：我想會，因為業務經理和財務長都同意在會議上【支持】她的計畫，而他們的意見通常對董事會很有份量。"
  },
  {
    "word": "endorse",
    "pos": "v.",
    "cn_def": "公開支持；代言",
    "en_def": "to publicly say that you approve of or support someone or something",
    "sentence": "A: Why have sales of that new sports drink increased so quickly over the past two months in convenience stores? B: A famous basketball player agreed to {{BLANK}} the product in a series of TV commercials, so many young fans started buying it after school and before their own games.",
    "cn": "A：為什麼那款新運動飲料過去兩個月在便利商店的銷量成長得這麼快？ B：一位知名籃球員同意在一系列電視廣告中為這項產品【代言】，所以許多年輕球迷開始在放學後和自己比賽前購買。"
  },
  {
    "word": "champion",
    "pos": "v.",
    "cn_def": "擁護；倡導",
    "en_def": "to strongly support and fight for a cause or idea",
    "sentence": "A: Who started the program that lets employees work from home two days a week at our company? B: Our human resources director decided to {{BLANK}} the idea after a survey showed that many staff spent over two hours a day commuting, and she presented the plan to the CEO herself.",
    "cn": "A：是誰發起讓我們公司員工每週可以在家工作兩天的計畫？ B：一項調查顯示許多員工每天通勤超過兩小時後，我們的人資長決定【大力倡導】這個構想，並親自向執行長提出這項計畫。"
  },
  {
    "word": "foster",
    "pos": "v.",
    "cn_def": "培養；促進",
    "en_def": "to help something develop over time",
    "sentence": "A: Why does your company organize a team lunch and a sports day every month, even when everyone is busy with projects? B: Our managers believe these events {{BLANK}} good relationships between departments, so people feel more comfortable sharing ideas and asking each other for help when problems come up.",
    "cn": "A：為什麼你們公司每個月都舉辦團隊午餐和運動日，即使大家都忙於專案？ B：我們的主管認為這些活動能【促進】部門之間的良好關係，讓大家在遇到問題時更自在地分享想法、互相幫忙。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "培養；建立",
    "en_def": "to develop a skill, quality or relationship through effort",
    "sentence": "A: How did you get so many large companies to become regular customers of your small printing business? B: For years I have tried to {{BLANK}} strong relationships with clients by calling them personally, delivering orders early, and remembering small details about each company's needs and style.",
    "cn": "A：你是怎麼讓這麼多大公司成為你小型印刷公司的常客？ B：多年來我一直努力和客戶【建立】穩固的關係，像是親自打電話給他們、提早交貨，以及記住每家公司在需求和風格上的小細節。"
  },
  {
    "word": "nurture",
    "pos": "v.",
    "cn_def": "培育；栽培",
    "en_def": "to help someone or something grow and develop by caring for them",
    "sentence": "A: Your company has won the best young designer award three years in a row, so what is your secret? B: We hire talented graduates every summer and try to {{BLANK}} their creativity by giving them real projects, friendly feedback, and the chance to attend design fairs in Tokyo and Milan.",
    "cn": "A：你們公司已經連續三年贏得最佳新銳設計師獎，你們的秘訣是什麼？ B：我們每年夏天都會招募有才華的畢業生，並藉由給他們真實的專案、友善的回饋，以及參加東京和米蘭設計展的機會來【培育】他們的創造力。"
  },
  {
    "word": "spur",
    "pos": "v.",
    "cn_def": "激勵；刺激",
    "en_def": "to make something happen faster or make someone try harder",
    "sentence": "A: Why did the electronics store suddenly become so crowded last weekend when it is usually quiet? B: They advertised a one-day sale with half-price laptops and free headphones, and the special offer helped {{BLANK}} demand so much that the shelves were nearly empty by late afternoon.",
    "cn": "A：那家電子產品店平常很冷清，為什麼上週末突然這麼擁擠？ B：他們打廣告推出一日特賣，筆電半價還送免費耳機，這項優惠大大【刺激】了需求，到傍晚貨架幾乎都空了。"
  },
  {
    "word": "drive",
    "pos": "v.",
    "cn_def": "驅使；推動",
    "en_def": "to cause something to happen or make something go up",
    "sentence": "A: Why has the price of fresh fruit at the supermarket gone up so much since the beginning of the summer? B: The heavy rain and typhoons damaged many farms in the south, and the smaller harvest will {{BLANK}} prices even higher over the next few weeks, so buy what you need now.",
    "cn": "A：超市的新鮮水果價格為什麼從夏天開始漲了這麼多？ B：大雨和颱風損壞了南部許多農場，收成減少會在接下來幾週把價格【推升】得更高，所以你需要什麼就現在買吧。"
  },
  {
    "word": "energize",
    "pos": "v.",
    "cn_def": "使充滿活力；激勵",
    "en_def": "to give someone more energy or enthusiasm",
    "sentence": "A: Everyone looked tired and quiet during this morning's planning meeting, so how can we make the afternoon workshop more lively? B: Let's start with a short team game and some fresh fruit and coffee, because a fun activity at the beginning will {{BLANK}} the group before we discuss next year's budget.",
    "cn": "A：今天早上的規劃會議大家看起來都又累又安靜，我們要怎麼讓下午的研習會更有活力？ B：我們先玩一個簡短的團隊遊戲，再準備一些新鮮水果和咖啡，因為一開始的有趣活動能在討論明年預算之前讓大家【充滿活力】。"
  },
  {
    "word": "embolden",
    "pos": "v.",
    "cn_def": "使有膽量；壯膽",
    "en_def": "to give someone more courage or confidence to do something",
    "sentence": "A: Why did the quiet new engineer suddenly share so many ideas at the product meeting yesterday afternoon? B: Her manager praised her design in front of the whole team last week, and that positive feedback seemed to {{BLANK}} her to speak up and suggest changes to the project plan.",
    "cn": "A：那位安靜的新工程師昨天下午的產品會議上為什麼突然分享了這麼多想法？ B：她的主管上週在整個團隊面前稱讚她的設計，那些正面回饋似乎讓她【更有勇氣】發言，並提出對專案計畫的修改建議。"
  },
  {
    "word": "incentivize",
    "pos": "v.",
    "cn_def": "以獎勵激勵",
    "en_def": "to encourage someone to do something by offering a reward",
    "sentence": "A: Fewer customers are using our mobile app this year, even though we spent a lot of money to improve its design, so what should we try next? B: We could {{BLANK}} people to download it by offering a fifteen percent discount on their first online order and free delivery for the first month.",
    "cn": "A：今年使用我們手機應用程式的顧客變少了，即使我們花了很多錢改善它的設計，接下來我們該試試什麼？ B：我們可以提供首筆網路訂單八五折以及第一個月免運費，用獎勵【鼓勵】大家下載。"
  },
  {
    "word": "encouraging",
    "pos": "adj.",
    "cn_def": "令人鼓舞的",
    "en_def": "giving hope or confidence",
    "sentence": "A: How were the results of the customer survey for the new frozen dumplings that we launched in supermarkets last month? B: The results were very {{BLANK}}, because almost eighty percent of shoppers said they would buy them again, so the sales director wants to add two new flavors before the winter holidays.",
    "cn": "A：我們上個月在超市推出的新款冷凍水餃，顧客問卷調查結果如何？ B：結果非常【令人鼓舞】，因為將近百分之八十的購物者說他們會再買，所以業務總監想在寒假前再推出兩種新口味。"
  },
  {
    "word": "motivational",
    "pos": "adj.",
    "cn_def": "激勵人心的",
    "en_def": "making people want to work hard or achieve something",
    "sentence": "A: Who is giving the opening talk at our annual sales conference in Taichung next month, and what will it be about? B: We invited a former Olympic swimmer to give a {{BLANK}} speech about setting goals and never giving up, because the team needs some fresh energy after a difficult year.",
    "cn": "A：下個月我們在台中舉辦的年度業務大會由誰做開場演講？內容是什麼？ B：我們邀請了一位前奧運游泳選手來做一場關於設定目標、永不放棄的【激勵人心的】演講，因為團隊在艱難的一年後需要一些新的活力。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的；給予幫助的",
    "en_def": "giving help, kindness and encouragement",
    "sentence": "A: How do you like your new job at the design company after your first three months, and are you still nervous about the long hours? B: I really enjoy it, because my manager and coworkers are very {{BLANK}}, and they always explain things patiently when I make a mistake or need help with a project.",
    "cn": "A：在設計公司做了三個月，你喜歡新工作嗎？還會對長工時感到緊張嗎？ B：我真的很喜歡，因為我的主管和同事都非常【支持我】，每當我犯錯或專案需要幫忙時，他們總是很有耐心地解釋。"
  },
  {
    "word": "positively",
    "pos": "adv.",
    "cn_def": "正面地；積極地",
    "en_def": "in a good or helpful way",
    "sentence": "A: How did the staff react when the company announced the new flexible working hours at yesterday's meeting? B: Most people responded very {{BLANK}}, because parents can now pick up their children from school, and many workers said they would feel less stressed and be able to work more efficiently.",
    "cn": "A：公司在昨天的會議上宣布新的彈性工時，員工的反應如何？ B：大多數人的反應都非常【正面】，因為家長現在可以去學校接孩子，而且許多員工說他們會覺得壓力較小，工作也能更有效率。"
  }
];

const MCQS = [
  {
    "q": "Several local businesses have agreed to _____ the charity concert financially. Their donations will cover the cost of the venue and sound equipment.",
    "options": [
      "support",
      "reassure",
      "compliment",
      "urge"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The manager offered a weekend trip to the top team. She hoped the prize would _____ her staff to reach the quarterly sales target.",
    "options": [
      "praise",
      "comfort",
      "motivate",
      "reassure"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new advertising campaign on social media helped _____ online sales by thirty percent. The marketing team will use the same strategy next quarter.",
    "options": [
      "mentor",
      "boost",
      "comfort",
      "advise"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The city is holding a food festival this weekend. The event aims to _____ local tourism and attract visitors from other countries.",
    "options": [
      "reassure",
      "comfort",
      "compliment",
      "promote"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Trainers repeat the key safety steps at the end of every session. This helps _____ what workers learned earlier in the day.",
    "options": [
      "persuade",
      "compliment",
      "reinforce",
      "comfort"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The founder's story of starting a business in her garage continues to _____ young entrepreneurs. Many of them mention her in their own speeches.",
    "options": [
      "inspire",
      "advise",
      "endorse",
      "reinforce"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Due to the approaching typhoon, the city government will _____ residents to stay indoors tonight. All offices and schools will also be closed tomorrow.",
    "options": [
      "compliment",
      "comfort",
      "praise",
      "urge"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Lower interest rates are expected to _____ economic growth this year. Banks are already reporting more loan applications from small companies.",
    "options": [
      "reassure",
      "stimulate",
      "mentor",
      "compliment"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The new training program is designed to _____ frontline workers to solve customer problems on their own. Managers will only step in for serious cases.",
    "options": [
      "empower",
      "compliment",
      "nurture",
      "praise"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "After a long discussion, the sales team finally managed to _____ the client to sign a three-year contract. The deal is the biggest in company history.",
    "options": [
      "praise",
      "reassure",
      "persuade",
      "foster"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The engineer used test data to _____ the board that the new machine was safe. Production will start next month as planned.",
    "options": [
      "motivate",
      "foster",
      "empower",
      "convince"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Our accountant will _____ you on how to reduce your business taxes. Please bring last year's receipts to the meeting on Tuesday.",
    "options": [
      "boost",
      "advise",
      "foster",
      "cultivate"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "A museum staff member will _____ the visitors through the new exhibition hall. The tour takes about forty-five minutes and is free.",
    "options": [
      "boost",
      "urge",
      "guide",
      "endorse"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Each new employee is paired with an experienced colleague. That person will _____ the newcomer during the first year at the company.",
    "options": [
      "mentor",
      "stimulate",
      "endorse",
      "boost"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The CEO took a moment at the annual dinner to _____ the factory workers for their hard work. Production had doubled despite the supply problems.",
    "options": [
      "stimulate",
      "praise",
      "convince",
      "drive"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Several guests stopped by the kitchen to _____ the chef on the excellent seafood dishes. She was delighted by their kind words.",
    "options": [
      "stimulate",
      "nurture",
      "drive",
      "compliment"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The airline sent text messages to _____ passengers that their luggage would arrive on the next flight. Most travelers were relieved by the update.",
    "options": [
      "reassure",
      "stimulate",
      "foster",
      "cultivate"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The nurse sat beside the frightened child to _____ him before the doctor arrived. She held his hand and spoke in a calm voice.",
    "options": [
      "endorse",
      "stimulate",
      "comfort",
      "incentivize"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Several major investors have agreed to _____ the start-up's plan with five million dollars. The money will be used to open a new factory.",
    "options": [
      "comfort",
      "back",
      "reassure",
      "compliment"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A popular tennis player has signed a contract to _____ the company's new line of running shoes. Her face will appear in all the advertisements.",
    "options": [
      "comfort",
      "mentor",
      "reassure",
      "endorse"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "As mayor, she continued to _____ the cause of clean energy throughout her career. She built the city's first large solar power plant.",
    "options": [
      "comfort",
      "compliment",
      "champion",
      "reassure"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Open-plan offices are often designed to _____ teamwork and communication among employees. However, some workers find them too noisy for focused tasks.",
    "options": [
      "foster",
      "reassure",
      "comfort",
      "persuade"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Sales representatives should _____ long-term relationships with their key clients. Regular visits and quick replies to emails make a big difference.",
    "options": [
      "urge",
      "persuade",
      "comfort",
      "cultivate"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The art school works hard to _____ young talent from poor neighborhoods. It offers free classes and materials to students every weekend.",
    "options": [
      "persuade",
      "nurture",
      "reassure",
      "urge"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Rising fuel costs will _____ up the price of airline tickets this summer. Travelers are advised to book their holidays as early as possible.",
    "options": [
      "drive",
      "comfort",
      "mentor",
      "reassure"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The company plans to _____ staff to cycle to work by paying them a small monthly bonus. It hopes to reduce parking problems near the office.",
    "options": [
      "comfort",
      "compliment",
      "incentivize",
      "praise"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The first-quarter sales figures were very _____ for the new branch. The manager expects profits to rise even further during the holiday season.",
    "options": [
      "motivational",
      "encouraging",
      "supportive",
      "talkative"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The company invited a famous mountain climber to give a _____ speech at the annual meeting. Many employees said they felt inspired afterward.",
    "options": [
      "supportive",
      "careless",
      "punctual",
      "motivational"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Our team leader is very _____ of new ideas from junior staff. She always listens carefully and helps them develop their suggestions.",
    "options": [
      "supportive",
      "motivational",
      "expensive",
      "punctual"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Upbeat music and bright lighting help _____ shoppers as they walk through the store. The owner believes this increases how much they buy.",
    "options": [
      "mentor",
      "endorse",
      "energize",
      "cultivate"
    ],
    "answer": 2,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "support": {
    "pos": "v.",
    "en_def": "to help someone by giving them encouragement or practical help",
    "cn_def": "支持；支援"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to do something or work harder",
    "cn_def": "激勵；使有動力"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the idea or the wish to do something good",
    "cn_def": "啟發；激發"
  },
  "boost": {
    "pos": "v.",
    "en_def": "to increase or improve something",
    "cn_def": "提升；促進"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to help something grow, develop or become more popular",
    "cn_def": "促進；推廣"
  },
  "reinforce": {
    "pos": "v.",
    "en_def": "to make an idea, feeling or habit stronger",
    "cn_def": "加強；強化"
  },
  "uplift": {
    "pos": "v.",
    "en_def": "to make someone feel happier or more hopeful",
    "cn_def": "振奮；使精神振奮"
  },
  "cheer": {
    "pos": "v.",
    "en_def": "to shout to show support or praise",
    "cn_def": "歡呼；為…加油"
  },
  "urge": {
    "pos": "v.",
    "en_def": "to strongly advise or ask someone to do something",
    "cn_def": "力勸；敦促"
  },
  "stimulate": {
    "pos": "v.",
    "en_def": "to cause something to become more active or to grow",
    "cn_def": "刺激；促進"
  },
  "empower": {
    "pos": "v.",
    "en_def": "to give someone the power, confidence or right to do something",
    "cn_def": "授權；使有能力"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving good reasons",
    "cn_def": "說服"
  },
  "convince": {
    "pos": "v.",
    "en_def": "to make someone believe that something is true",
    "cn_def": "使確信；說服"
  },
  "advise": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "建議；勸告"
  },
  "guide": {
    "pos": "v.",
    "en_def": "to show someone the way or help them understand what to do",
    "cn_def": "引導；指導"
  },
  "mentor": {
    "pos": "v.",
    "en_def": "to give a less experienced person advice and help over a period of time",
    "cn_def": "指導；當…的導師"
  },
  "praise": {
    "pos": "v.",
    "en_def": "to say that someone or something is very good",
    "cn_def": "稱讚；讚揚"
  },
  "compliment": {
    "pos": "v.",
    "en_def": "to say something nice to someone about their work, looks or actions",
    "cn_def": "稱讚；恭維"
  },
  "reassure": {
    "pos": "v.",
    "en_def": "to say or do something to make someone feel less worried",
    "cn_def": "使安心；安慰"
  },
  "comfort": {
    "pos": "v.",
    "en_def": "to make someone feel less sad or worried",
    "cn_def": "安慰"
  },
  "back": {
    "pos": "v.",
    "en_def": "to give support or money to a person, plan or idea",
    "cn_def": "支持；資助"
  },
  "endorse": {
    "pos": "v.",
    "en_def": "to publicly say that you approve of or support someone or something",
    "cn_def": "公開支持；代言"
  },
  "champion": {
    "pos": "v.",
    "en_def": "to strongly support and fight for a cause or idea",
    "cn_def": "擁護；倡導"
  },
  "foster": {
    "pos": "v.",
    "en_def": "to help something develop over time",
    "cn_def": "培養；促進"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to develop a skill, quality or relationship through effort",
    "cn_def": "培養；建立"
  },
  "nurture": {
    "pos": "v.",
    "en_def": "to help someone or something grow and develop by caring for them",
    "cn_def": "培育；栽培"
  },
  "spur": {
    "pos": "v.",
    "en_def": "to make something happen faster or make someone try harder",
    "cn_def": "激勵；刺激"
  },
  "drive": {
    "pos": "v.",
    "en_def": "to cause something to happen or make something go up",
    "cn_def": "驅使；推動"
  },
  "energize": {
    "pos": "v.",
    "en_def": "to give someone more energy or enthusiasm",
    "cn_def": "使充滿活力；激勵"
  },
  "embolden": {
    "pos": "v.",
    "en_def": "to give someone more courage or confidence to do something",
    "cn_def": "使有膽量；壯膽"
  },
  "incentivize": {
    "pos": "v.",
    "en_def": "to encourage someone to do something by offering a reward",
    "cn_def": "以獎勵激勵"
  },
  "encouraging": {
    "pos": "adj.",
    "en_def": "giving hope or confidence",
    "cn_def": "令人鼓舞的"
  },
  "motivational": {
    "pos": "adj.",
    "en_def": "making people want to work hard or achieve something",
    "cn_def": "激勵人心的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help, kindness and encouragement",
    "cn_def": "支持的；給予幫助的"
  },
  "positively": {
    "pos": "adv.",
    "en_def": "in a good or helpful way",
    "cn_def": "正面地；積極地"
  }
};

const EXTRA_GLOSSES = {};
