// Topic 292 Quiz Data: Polite 有禮貌
// Source word list: https://www.examword.com/group-topic/polite — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T292 - Polite 有禮貌",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "courteous",
    "pos": "adj.",
    "cn_def": "有禮貌的；謙恭的",
    "en_def": "polite and showing respect to others",
    "sentence": "A: Why did so many guests leave positive reviews about our hotel after the conference last weekend, even though the rooms were fully booked? B: Most of them said the front desk staff were very {{BLANK}}, answering every question calmly and helping them carry their luggage to the elevator without being asked.",
    "cn": "A：上週末會議結束後，為什麼有這麼多客人給我們飯店好評，即使房間全都客滿？ B：他們大多數說櫃檯人員非常【有禮貌】，冷靜地回答每個問題，還主動幫他們把行李搬到電梯。"
  },
  {
    "word": "respectful",
    "pos": "adj.",
    "cn_def": "尊重人的；恭敬的",
    "en_def": "showing that you value someone's feelings, ideas or customs",
    "sentence": "A: How should I behave during the meeting with our new partners from Japan next Tuesday, since I have never worked with them before? B: Just be {{BLANK}} of their customs, listen carefully when the senior managers speak, and wait until they finish before you share your own ideas about the project.",
    "cn": "A：下週二和日本新合作夥伴開會時我該怎麼表現？我以前從沒和他們合作過。 B：只要【尊重】他們的習俗，資深經理發言時仔細聆聽，等他們說完再分享你對這個專案的想法就好。"
  },
  {
    "word": "manner",
    "pos": "n.",
    "cn_def": "態度；舉止",
    "en_def": "the way a person behaves toward other people",
    "sentence": "A: What did the customers say about the new sales assistant who started working in our electronics store at the beginning of this month? B: They really liked her friendly {{BLANK}}, because she always explains the products patiently and never pushes anyone to buy something expensive they don't need.",
    "cn": "A：顧客對這個月初開始在我們電器行工作的新銷售助理有什麼評價？ B：他們很喜歡她友善的【態度】，因為她總是耐心地解說產品，從不強迫任何人買他們不需要的昂貴商品。"
  },
  {
    "word": "etiquette",
    "pos": "n.",
    "cn_def": "禮儀；禮節",
    "en_def": "the rules of polite behavior in a group or situation",
    "sentence": "A: Is there anything special I should know before I attend the formal business dinner with our clients in Seoul next month? B: Yes, you should learn some basic dining {{BLANK}}, such as waiting for the oldest person to start eating and pouring drinks for others before yourself.",
    "cn": "A：下個月在首爾和客戶參加正式商務晚宴之前，有什麼特別需要知道的嗎？ B：有，你應該學一些基本的用餐【禮儀】，例如等最年長的人先開動，並且先幫別人倒飲料再倒給自己。"
  },
  {
    "word": "civil",
    "pos": "adj.",
    "cn_def": "有禮的；客氣的",
    "en_def": "polite but not very friendly, especially in a difficult situation",
    "sentence": "A: How did you manage to stay calm when that angry customer shouted at you about the late delivery in front of everyone yesterday afternoon? B: I tried hard to remain {{BLANK}}, so I spoke quietly, explained the reason for the delay, and offered him a discount on his next order.",
    "cn": "A：昨天下午那位生氣的顧客當著大家的面因延遲送貨對你大吼，你是怎麼保持冷靜的？ B：我努力保持【客氣】，所以我輕聲說話、解釋延遲的原因，並提供他下次訂單的折扣。"
  },
  {
    "word": "considerate",
    "pos": "adj.",
    "cn_def": "體貼的；考慮周到的",
    "en_def": "thinking about other people's needs and feelings",
    "sentence": "A: Why does everyone in the accounting department enjoy working with Mr. Lin so much, even during the busy tax season every spring? B: He is very {{BLANK}}; he never makes loud phone calls near our desks, and he always asks whether we need help before leaving the office.",
    "cn": "A：為什麼會計部的每個人都那麼喜歡和林先生共事，即使在每年春天忙碌的報稅季也一樣？ B：他非常【體貼】；他從不在我們座位附近大聲講電話，離開辦公室前也總會問我們需不需要幫忙。"
  },
  {
    "word": "kind",
    "pos": "adj.",
    "cn_def": "親切的；好心的",
    "en_def": "friendly, helpful and caring",
    "sentence": "A: Did anyone help you when your car broke down on the way to the airport for your business trip to Singapore last week? B: Yes, a {{BLANK}} taxi driver stopped, called a repair shop for me, and then drove me to the terminal so I could still catch my flight on time.",
    "cn": "A：上週你去新加坡出差、在前往機場途中車子拋錨時，有人幫你嗎？ B：有，一位【好心的】計程車司機停下來，幫我打電話給修車廠，然後載我到航廈，讓我還能準時趕上班機。"
  },
  {
    "word": "grateful",
    "pos": "adj.",
    "cn_def": "感激的",
    "en_def": "feeling thankful because someone has helped you",
    "sentence": "A: How did the new interns feel after the senior engineers spent the whole weekend teaching them how to use the complicated design software? B: They were very {{BLANK}} for the extra training, so they wrote a card for the team and bought everyone coffee on Monday morning.",
    "cn": "A：資深工程師花了整個週末教新實習生使用那套複雜的設計軟體後，實習生們有什麼感受？ B：他們非常【感激】額外的訓練，所以寫了一張卡片給團隊，並在星期一早上請大家喝咖啡。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感謝；感激",
    "en_def": "to be thankful for something",
    "sentence": "A: Should I tell the shipping company that their driver came early this morning and helped us move the heavy boxes into the storage room? B: Yes, please send them a short email saying that we really {{BLANK}} his extra effort, because good feedback helps workers earn better performance reviews.",
    "cn": "A：我該告訴貨運公司他們的司機今天早上提早來，還幫我們把重箱子搬進倉庫嗎？ B：好，請寄封簡短的電子郵件給他們，說我們非常【感謝】他額外的付出，因為好的回饋能幫助員工得到更好的績效評價。"
  },
  {
    "word": "apologize",
    "pos": "v.",
    "cn_def": "道歉",
    "en_def": "to say that you are sorry",
    "sentence": "A: What should we do about the customers whose online orders were sent to the wrong address because of the computer problem last Friday? B: First, we must call each of them to {{BLANK}} for the mistake, and then we should send the correct items by express delivery at no extra cost.",
    "cn": "A：上週五因電腦問題，有些顧客的網購訂單被寄到錯誤地址，我們該怎麼處理？ B：首先，我們必須打電話給每一位顧客為這個錯誤【道歉】，然後免費以快遞寄出正確的商品。"
  },
  {
    "word": "apology",
    "pos": "n.",
    "cn_def": "道歉",
    "en_def": "something you say or write to show you are sorry",
    "sentence": "A: Did the airline do anything for the passengers after the flight to Tokyo was delayed for six hours because of the storm yesterday? B: Yes, the manager made a formal {{BLANK}} at the gate, and every passenger received a free meal coupon and extra miles for their membership account.",
    "cn": "A：昨天飛往東京的班機因暴風雨延誤六小時後，航空公司有為乘客做些什麼嗎？ B：有，經理在登機門正式【道歉】，每位乘客都獲得一張免費餐券，會員帳戶也多了額外的里程數。"
  },
  {
    "word": "please",
    "pos": "v.",
    "cn_def": "使高興；使滿意",
    "en_def": "to make someone happy or satisfied",
    "sentence": "A: Why is the restaurant manager changing the menu again, when the new dishes were only added two months ago? B: Some regular customers complained that the food was too spicy, and she really wants to {{BLANK}} them, so she asked the chef to create milder versions of several dishes.",
    "cn": "A：新菜才加入兩個月，為什麼餐廳經理又要更改菜單？ B：有些常客抱怨食物太辣，她很想讓他們【滿意】，所以請主廚把幾道菜改成比較不辣的版本。"
  },
  {
    "word": "thank",
    "pos": "v.",
    "cn_def": "感謝；道謝",
    "en_def": "to tell someone you are grateful for something",
    "sentence": "A: What are you planning to say at the farewell party for our retiring director on Friday evening in the hotel ballroom? B: I want to {{BLANK}} her for leading our department for fifteen years and for always supporting young employees who wanted to learn new skills and grow.",
    "cn": "A：星期五晚上在飯店宴會廳為即將退休的主管舉辦的歡送會上，你打算說什麼？ B：我想【感謝】她領導我們部門十五年，也感謝她一直支持想學習新技能、想成長的年輕員工。"
  },
  {
    "word": "thanks",
    "pos": "n.",
    "cn_def": "感謝；謝意",
    "en_def": "words or actions that show you are grateful",
    "sentence": "A: Did you send anything to the volunteers who helped organize the charity run in the city park last Sunday morning? B: Yes, I sent each of them a letter of {{BLANK}} and a small gift card, because the event raised much more money than we expected this year.",
    "cn": "A：你有寄任何東西給上週日早上幫忙在市立公園籌辦慈善路跑的志工嗎？ B：有，我寄給每個人一封【感謝】信和一張小禮券，因為今年活動募得的錢比我們預期的多很多。"
  },
  {
    "word": "excuse",
    "pos": "v.",
    "cn_def": "原諒；寬恕",
    "en_def": "to forgive someone for something small",
    "sentence": "A: Do you think the client will be upset that I arrived twenty minutes late to the presentation because the train broke down this morning? B: I'm sure she will {{BLANK}} your lateness this time, since the delay wasn't your fault and you sent her a message before the meeting started.",
    "cn": "A：今天早上因火車故障，我晚了二十分鐘才到簡報現場，你覺得客戶會不高興嗎？ B：我相信她這次會【原諒】你遲到，因為延誤不是你的錯，而且你在會議開始前就傳訊息給她了。"
  },
  {
    "word": "forgive",
    "pos": "v.",
    "cn_def": "原諒",
    "en_def": "to stop being angry with someone for something they did",
    "sentence": "A: Is the supplier still angry that we cancelled the large order last month without giving them enough notice? B: I think they will {{BLANK}} us eventually, but we should apologize properly and place a new order soon to show that we still value the business relationship.",
    "cn": "A：上個月我們沒有提前足夠時間通知就取消了大筆訂單，供應商還在生氣嗎？ B：我想他們最終會【原諒】我們，但我們應該好好道歉，並盡快下新訂單，表示我們仍然重視這段合作關係。"
  },
  {
    "word": "humble",
    "pos": "adj.",
    "cn_def": "謙虛的；謙遜的",
    "en_def": "not thinking you are better than other people",
    "sentence": "A: Why do you admire the new CEO so much, even though she has only been working at our company for three months? B: Although she is very successful, she stays {{BLANK}}, eats lunch with ordinary staff in the cafeteria, and always gives the credit for good results to her team.",
    "cn": "A：新執行長才來我們公司三個月，你為什麼這麼欣賞她？ B：雖然她非常成功，卻依然【謙虛】，會在員工餐廳和一般職員一起吃午餐，而且總是把好成果歸功於她的團隊。"
  },
  {
    "word": "gentle",
    "pos": "adj.",
    "cn_def": "溫和的；溫柔的",
    "en_def": "kind, calm and careful, not rough",
    "sentence": "A: How does the new nurse at the company clinic deal with nervous employees who are afraid of getting their flu shots every autumn? B: She speaks in a {{BLANK}} voice, explains each step slowly, and tells funny stories to help them relax before she gives them the injection.",
    "cn": "A：公司診所的新護士如何應對每年秋天害怕打流感疫苗的緊張員工？ B：她用【溫柔的】聲音說話，慢慢解釋每個步驟，並講有趣的故事幫助他們放鬆，然後才幫他們打針。"
  },
  {
    "word": "patient",
    "pos": "adj.",
    "cn_def": "有耐心的",
    "en_def": "able to wait calmly without getting angry",
    "sentence": "A: What is the most important quality for staff who work at the customer service hotline, where people often call with angry complaints? B: They must be {{BLANK}}, because many callers need a long time to explain their problems, and rushing them usually makes the situation even worse.",
    "cn": "A：在客服專線工作的員工最重要的特質是什麼？那裡常有人打來生氣地抱怨。 B：他們必須【有耐心】，因為很多來電者需要很長時間才能說明問題，催促他們通常只會讓情況更糟。"
  },
  {
    "word": "tolerant",
    "pos": "adj.",
    "cn_def": "寬容的；包容的",
    "en_def": "accepting other people's ideas or behavior even if you disagree",
    "sentence": "A: How do the managers at your international office handle the different working styles of employees from so many countries? B: They try to be {{BLANK}} of different opinions and habits, and they hold monthly workshops so everyone can learn about their coworkers' cultures and holidays.",
    "cn": "A：你們國際辦公室的主管如何處理來自這麼多國家的員工不同的工作風格？ B：他們試著【包容】不同的意見和習慣，並每月舉辦工作坊，讓大家認識同事的文化和節日。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "following official rules; serious and polite in style",
    "sentence": "A: What should I wear to the awards ceremony that the company is holding at the Grand Hotel next Saturday night? B: It is a {{BLANK}} event, so men should wear a dark suit and tie, and women usually choose an elegant dress or a smart business outfit.",
    "cn": "A：公司下週六晚上在大飯店舉辦的頒獎典禮，我該穿什麼？ B：那是【正式】場合，所以男士應穿深色西裝打領帶，女士通常會選擇優雅的洋裝或得體的商務服裝。"
  },
  {
    "word": "greet",
    "pos": "v.",
    "cn_def": "迎接；問候",
    "en_def": "to say hello to or welcome someone",
    "sentence": "A: Who will be waiting at the airport when the visiting investors from Germany arrive late on Thursday evening? B: Our sales director will {{BLANK}} them at the arrival hall with a sign, and then a driver will take everyone directly to their hotel downtown.",
    "cn": "A：德國來訪的投資人星期四晚上抵達時，誰會在機場等候？ B：我們的業務總監會拿著牌子在入境大廳【迎接】他們，然後司機會直接載大家到市中心的飯店。"
  },
  {
    "word": "greeting",
    "pos": "n.",
    "cn_def": "問候；招呼",
    "en_def": "something friendly you say or do when you meet someone",
    "sentence": "A: Why did the hotel ask all the front desk staff to attend a training session last Wednesday afternoon? B: The manager wanted everyone to use the same warm {{BLANK}} when guests arrive, including a smile, eye contact, and a simple welcome in both English and Chinese.",
    "cn": "A：為什麼飯店上週三下午要求所有櫃檯人員參加訓練課程？ B：經理希望客人抵達時，每個人都使用同樣溫暖的【問候】，包括微笑、眼神接觸，以及用中英文簡單地說聲歡迎。"
  },
  {
    "word": "smile",
    "pos": "v.",
    "cn_def": "微笑",
    "en_def": "to make a happy expression with your mouth",
    "sentence": "A: What advice did the trainer give the new waiters before the restaurant opened for its very first dinner service last night? B: She told them to {{BLANK}} at every table, speak clearly when describing the specials, and never let guests wait more than five minutes for their drinks.",
    "cn": "A：昨晚餐廳第一次晚餐營業前，訓練師給新服務生什麼建議？ B：她告訴他們要對每一桌【微笑】，介紹特餐時要說清楚，而且絕不能讓客人等飲料超過五分鐘。"
  },
  {
    "word": "courtesy",
    "pos": "n.",
    "cn_def": "禮貌；禮節",
    "en_def": "polite behavior that shows respect for others",
    "sentence": "A: Why do you always send a short reply to every job applicant, even the ones we decide not to invite for an interview? B: It is a matter of basic {{BLANK}}; people spend time preparing their applications, so they deserve to know the result instead of waiting without any news.",
    "cn": "A：為什麼你總會簡短回覆每位求職者，連我們決定不邀請面試的人也一樣？ B：這是基本的【禮貌】；大家花時間準備申請資料，所以他們應該知道結果，而不是毫無音訊地等待。"
  },
  {
    "word": "behavior",
    "pos": "n.",
    "cn_def": "行為；舉止",
    "en_def": "the way someone acts",
    "sentence": "A: Why did the manager call a meeting with the two sales representatives after the trade fair in Taichung last weekend? B: Several visitors complained about their rude {{BLANK}} at the booth, because they argued loudly with each other and ignored customers who asked questions.",
    "cn": "A：上週末台中商展結束後，經理為什麼找那兩位業務代表開會？ B：好幾位參觀者抱怨他們在攤位上的無禮【行為】，因為他們彼此大聲爭吵，還不理會提問的顧客。"
  },
  {
    "word": "proper",
    "pos": "adj.",
    "cn_def": "適當的；合宜的",
    "en_def": "correct or suitable for the situation",
    "sentence": "A: Can I just send the client a quick text message to tell her that we cannot meet the deadline for her project? B: No, that is not the {{BLANK}} way to share bad news; you should call her first and then follow up with a detailed email explaining the new schedule.",
    "cn": "A：我可以直接傳個簡訊給客戶，告訴她我們趕不上她專案的截止日嗎？ B：不行，那不是傳達壞消息的【適當】方式；你應該先打電話給她，再寄一封詳細說明新時程的電子郵件。"
  },
  {
    "word": "modest",
    "pos": "adj.",
    "cn_def": "謙虛的；不誇耀的",
    "en_def": "not talking much about your own abilities or success",
    "sentence": "A: Why didn't Jessica mention during the meeting that she was the one who found the mistake that saved the company so much money? B: She is very {{BLANK}} and doesn't like to talk about her own success, so her manager had to tell everyone about it at the end of the meeting.",
    "cn": "A：為什麼潔西卡在會議中沒有提到是她發現了那個替公司省下一大筆錢的錯誤？ B：她非常【謙虛】，不喜歡談論自己的成就，所以她的經理在會議最後只好告訴大家這件事。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；誠摯的",
    "en_def": "honest and really meant",
    "sentence": "A: How did the hotel respond after a guest posted an online review complaining about the noisy air conditioner in her room? B: The general manager wrote a {{BLANK}} reply, admitted the problem, explained how it had been fixed, and invited her to stay again for free next time.",
    "cn": "A：一位客人在網路上評論抱怨房間冷氣很吵後，飯店如何回應？ B：總經理寫了一封【誠懇的】回覆，承認問題，說明已如何修好，並邀請她下次免費再來入住。"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "cn_def": "打斷；插話",
    "en_def": "to stop someone while they are speaking",
    "sentence": "A: Why did the director look so annoyed during the budget presentation that the new assistant gave this morning? B: Some people kept checking their phones, and one manager would {{BLANK}} the speaker every few minutes with questions that could easily have waited until the end.",
    "cn": "A：今天早上新助理做預算簡報時，主管為什麼看起來那麼不悅？ B：有些人一直看手機，還有一位經理每隔幾分鐘就提問【打斷】講者，而那些問題其實可以等到最後再問。"
  },
  {
    "word": "rude",
    "pos": "adj.",
    "cn_def": "無禮的；粗魯的",
    "en_def": "not polite; showing no respect",
    "sentence": "A: Why did the restaurant owner decide to give the new waiter some extra training before he works on the busy weekend shifts? B: A couple complained that he was {{BLANK}} to them, because he rolled his eyes when they asked for more water and dropped the bill on the table without a word.",
    "cn": "A：為什麼餐廳老闆決定在新服務生上忙碌的週末班之前，給他額外的訓練？ B：有一對夫妻抱怨他對他們很【無禮】，因為他們要求加水時他翻白眼，還一句話也不說就把帳單丟在桌上。"
  },
  {
    "word": "thoughtful",
    "pos": "adj.",
    "cn_def": "體貼的；細心周到的",
    "en_def": "showing that you think about other people's feelings",
    "sentence": "A: Did you see the small gift that the visiting team from Osaka left on each of our desks before they flew home yesterday? B: Yes, it was very {{BLANK}} of them; each box had local snacks and a handwritten note thanking us for helping them during the training week.",
    "cn": "A：你有看到昨天大阪來訪團隊回國前，在我們每個人桌上留下的小禮物嗎？ B：有，他們真是【貼心】；每個盒子裡都有當地零食和一張手寫卡片，感謝我們在訓練週期間的協助。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重；敬意",
    "en_def": "a feeling that someone's ideas, rights or feelings are important",
    "sentence": "A: Why are the employees at the factory so loyal to their supervisor, even though the work there is often hard and the hours are long? B: He treats every worker with {{BLANK}}, listens to their ideas for improving safety, and always explains the reasons behind new rules instead of simply giving orders.",
    "cn": "A：雖然工廠的工作常常很辛苦、工時又長，為什麼員工對主管那麼忠誠？ B：他以【尊重】的態度對待每位員工，傾聽他們改善安全的想法，並總是說明新規定背後的原因，而不只是下命令。"
  }
];

const MCQS = [
  {
    "q": "The airline trained its cabin crew to stay _____ even with difficult passengers. As a result, customer satisfaction scores rose sharply last quarter.",
    "options": [
      "courteous",
      "grateful",
      "formal",
      "proper"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Visitors to the temple are asked to be _____ of local customs. They should remove their shoes and speak quietly inside the main hall.",
    "options": [
      "grateful",
      "respectful",
      "patient",
      "formal"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new receptionist greets every visitor in a warm and friendly _____. Several clients have already praised her in their feedback forms.",
    "options": [
      "etiquette",
      "courtesy",
      "manner",
      "respect"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Before the overseas assignment, staff attend a workshop on Japanese business _____. They learn how to exchange cards and bow correctly.",
    "options": [
      "behavior",
      "apology",
      "greeting",
      "etiquette"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please be _____ of your coworkers and keep phone calls short in the open office. Longer calls should be made in the meeting rooms.",
    "options": [
      "grateful",
      "considerate",
      "humble",
      "sincere"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "It was very _____ of you to drive me to the station after the late meeting. I would have missed the last train otherwise.",
    "options": [
      "rude",
      "grateful",
      "patient",
      "kind"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The charity is deeply _____ for the generous donations it received this year. The money will help build a new library in the village.",
    "options": [
      "grateful",
      "considerate",
      "respectful",
      "modest"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "We truly _____ your patience while our website was being repaired. As a thank-you, all customers will receive free shipping this week.",
    "options": [
      "apologize",
      "interrupt",
      "appreciate",
      "greet"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The store manager called the customer to _____ for the damaged package. She also promised to send a replacement by express mail.",
    "options": [
      "appreciate",
      "forgive",
      "greet",
      "apologize"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The company issued a public _____ after customer data was accidentally shared online. It also offered free security checks to everyone affected.",
    "options": [
      "apology",
      "courtesy",
      "greeting",
      "etiquette"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Our chef works hard to _____ even the most demanding diners. Every dish is prepared with fresh ingredients from local farms.",
    "options": [
      "excuse",
      "please",
      "forgive",
      "interrupt"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "At the end of the speech, the director stood up to _____ all the volunteers. Without their help, the festival could not have happened.",
    "options": [
      "apologize",
      "forgive",
      "thank",
      "interrupt"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please _____ the noise on the third floor this week. Workers are replacing the old carpets and will finish by Friday.",
    "options": [
      "excuse",
      "appreciate",
      "greet",
      "smile"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "I hope you can _____ me for missing your presentation yesterday. My flight from Hong Kong was delayed for over four hours.",
    "options": [
      "appreciate",
      "greet",
      "forgive",
      "thank"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Despite winning the national sales award, Kevin remained _____ and thanked his whole team. His coworkers admired him even more afterwards.",
    "options": [
      "rude",
      "humble",
      "tolerant",
      "formal"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The dentist is known for her _____ touch and calm voice. Even nervous children feel relaxed in her clinic.",
    "options": [
      "formal",
      "rude",
      "grateful",
      "gentle"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Please be _____ while our technicians fix the system error. Online banking services should return within the next two hours.",
    "options": [
      "humble",
      "modest",
      "patient",
      "formal"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "A good team leader is _____ of different working styles. She allows each member to complete tasks in his or her own way.",
    "options": [
      "tolerant",
      "grateful",
      "proper",
      "formal"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The invitation says the gala dinner requires _____ dress. Guests should wear evening gowns or dark suits with ties.",
    "options": [
      "gentle",
      "humble",
      "sincere",
      "formal"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A hostess will _____ guests at the entrance and show them to their tables. Reservations are recommended on weekends.",
    "options": [
      "forgive",
      "greet",
      "interrupt",
      "apologize"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Sales staff are reminded to _____ and make eye contact with every shopper. Small gestures like these make customers feel welcome.",
    "options": [
      "smile",
      "interrupt",
      "apologize",
      "forgive"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "As a _____, we will call you one day before your appointment. You may reschedule at that time if necessary.",
    "options": [
      "manner",
      "behavior",
      "etiquette",
      "courtesy"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Employees who show unprofessional _____ at company events may face disciplinary action. Please read the updated code of conduct carefully.",
    "options": [
      "greeting",
      "apology",
      "behavior",
      "courtesy"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "All visitors must wear _____ safety equipment in the factory area. Helmets and gloves are available at the security desk.",
    "options": [
      "humble",
      "proper",
      "sincere",
      "gentle"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Although the new restaurant has only a _____ budget for advertising, it is always full. Most customers hear about it from friends.",
    "options": [
      "rude",
      "grateful",
      "tolerant",
      "modest"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Please accept our _____ apologies for the billing error on your account. The extra charge will be refunded within five business days.",
    "options": [
      "rude",
      "sincere",
      "tolerant",
      "patient"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Please do not _____ the speaker during the presentation. There will be time for questions at the end of the session.",
    "options": [
      "interrupt",
      "greet",
      "appreciate",
      "thank"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The customer complained that the waiter was _____ and ignored her requests. The manager apologized and gave her a free dessert.",
    "options": [
      "humble",
      "gentle",
      "rude",
      "considerate"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Leaving a card for the cleaning staff was a _____ gesture. They were happy that someone noticed their hard work.",
    "options": [
      "rude",
      "thoughtful",
      "formal",
      "tolerant"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Our company treats all customers with _____, whatever the size of their order. Every inquiry receives a reply within one working day.",
    "options": [
      "respect",
      "apology",
      "greeting",
      "etiquette"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "courteous": {
    "pos": "adj.",
    "en_def": "polite and showing respect to others",
    "cn_def": "有禮貌的；謙恭的"
  },
  "respectful": {
    "pos": "adj.",
    "en_def": "showing that you value someone's feelings, ideas or customs",
    "cn_def": "尊重人的；恭敬的"
  },
  "manner": {
    "pos": "n.",
    "en_def": "the way a person behaves toward other people",
    "cn_def": "態度；舉止"
  },
  "etiquette": {
    "pos": "n.",
    "en_def": "the rules of polite behavior in a group or situation",
    "cn_def": "禮儀；禮節"
  },
  "civil": {
    "pos": "adj.",
    "en_def": "polite but not very friendly, especially in a difficult situation",
    "cn_def": "有禮的；客氣的"
  },
  "considerate": {
    "pos": "adj.",
    "en_def": "thinking about other people's needs and feelings",
    "cn_def": "體貼的；考慮周到的"
  },
  "kind": {
    "pos": "adj.",
    "en_def": "friendly, helpful and caring",
    "cn_def": "親切的；好心的"
  },
  "grateful": {
    "pos": "adj.",
    "en_def": "feeling thankful because someone has helped you",
    "cn_def": "感激的"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be thankful for something",
    "cn_def": "感謝；感激"
  },
  "apologize": {
    "pos": "v.",
    "en_def": "to say that you are sorry",
    "cn_def": "道歉"
  },
  "apology": {
    "pos": "n.",
    "en_def": "something you say or write to show you are sorry",
    "cn_def": "道歉"
  },
  "please": {
    "pos": "v.",
    "en_def": "to make someone happy or satisfied",
    "cn_def": "使高興；使滿意"
  },
  "thank": {
    "pos": "v.",
    "en_def": "to tell someone you are grateful for something",
    "cn_def": "感謝；道謝"
  },
  "thanks": {
    "pos": "n.",
    "en_def": "words or actions that show you are grateful",
    "cn_def": "感謝；謝意"
  },
  "excuse": {
    "pos": "v.",
    "en_def": "to forgive someone for something small",
    "cn_def": "原諒；寬恕"
  },
  "forgive": {
    "pos": "v.",
    "en_def": "to stop being angry with someone for something they did",
    "cn_def": "原諒"
  },
  "humble": {
    "pos": "adj.",
    "en_def": "not thinking you are better than other people",
    "cn_def": "謙虛的；謙遜的"
  },
  "gentle": {
    "pos": "adj.",
    "en_def": "kind, calm and careful, not rough",
    "cn_def": "溫和的；溫柔的"
  },
  "patient": {
    "pos": "adj.",
    "en_def": "able to wait calmly without getting angry",
    "cn_def": "有耐心的"
  },
  "tolerant": {
    "pos": "adj.",
    "en_def": "accepting other people's ideas or behavior even if you disagree",
    "cn_def": "寬容的；包容的"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "following official rules; serious and polite in style",
    "cn_def": "正式的"
  },
  "greet": {
    "pos": "v.",
    "en_def": "to say hello to or welcome someone",
    "cn_def": "迎接；問候"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "something friendly you say or do when you meet someone",
    "cn_def": "問候；招呼"
  },
  "smile": {
    "pos": "v.",
    "en_def": "to make a happy expression with your mouth",
    "cn_def": "微笑"
  },
  "courtesy": {
    "pos": "n.",
    "en_def": "polite behavior that shows respect for others",
    "cn_def": "禮貌；禮節"
  },
  "behavior": {
    "pos": "n.",
    "en_def": "the way someone acts",
    "cn_def": "行為；舉止"
  },
  "proper": {
    "pos": "adj.",
    "en_def": "correct or suitable for the situation",
    "cn_def": "適當的；合宜的"
  },
  "modest": {
    "pos": "adj.",
    "en_def": "not talking much about your own abilities or success",
    "cn_def": "謙虛的；不誇耀的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "honest and really meant",
    "cn_def": "真誠的；誠摯的"
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop someone while they are speaking",
    "cn_def": "打斷；插話"
  },
  "rude": {
    "pos": "adj.",
    "en_def": "not polite; showing no respect",
    "cn_def": "無禮的；粗魯的"
  },
  "thoughtful": {
    "pos": "adj.",
    "en_def": "showing that you think about other people's feelings",
    "cn_def": "體貼的；細心周到的"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling that someone's ideas, rights or feelings are important",
    "cn_def": "尊重；敬意"
  }
};

const EXTRA_GLOSSES = {};
