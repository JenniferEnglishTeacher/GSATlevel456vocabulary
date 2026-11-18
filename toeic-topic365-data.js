// Topic 365 Quiz Data: Speak 說話
// Source word list: https://www.examword.com/group-topic/speak — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T365 - Speak 說話",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "talk",
    "pos": "v.",
    "cn_def": "談話；交談",
    "en_def": "to speak with someone",
    "sentence": "A: Could you please ask the new interns to keep their voices down in the open office area, because some of us are on important phone calls with overseas clients? B: Sure, I'll remind them that if they want to {{BLANK}} about weekend plans, they should use the break room on the third floor instead of standing near our desks.",
    "cn": "A：可以請你提醒新來的實習生在開放式辦公區小聲一點嗎？因為我們有些人正在和海外客戶進行重要的電話會議。 B：當然，我會提醒他們，如果想【聊】週末計畫，應該去三樓的休息室，而不是站在我們的辦公桌旁。"
  },
  {
    "word": "say",
    "pos": "v.",
    "cn_def": "說；講",
    "en_def": "to speak words",
    "sentence": "A: Did the regional director give any reason during this morning's meeting for moving the product launch from March to the end of May? B: Not really, but he did {{BLANK}} that the factory in Vietnam needs more time to test the new batteries, so we should expect a full report from the engineering team next week.",
    "cn": "A：區域總監在今天早上的會議中有說明為什麼把產品發表會從三月延到五月底嗎？ B：其實沒有詳細說明，但他確實【說】越南的工廠需要更多時間測試新電池，所以我們下週應該會收到工程團隊的完整報告。"
  },
  {
    "word": "tell",
    "pos": "v.",
    "cn_def": "告訴；告知",
    "en_def": "to give information to someone by speaking",
    "sentence": "A: The client from Osaka is arriving at the airport two hours earlier than planned, so who is going to pick him up and drive him to the hotel? B: I can go, but please {{BLANK}} the receptionist to prepare his room key and welcome package, because he will probably want to rest before the dinner meeting tonight.",
    "cn": "A：大阪來的客戶會比預定時間早兩小時抵達機場，誰要去接他並載他到飯店？ B：我可以去，但請【告訴】櫃檯人員準備好他的房卡和歡迎禮包，因為他在今晚的晚餐會議前可能會想先休息。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；傳達",
    "en_def": "to share information or ideas with others",
    "sentence": "A: Our team members work in three different time zones, so what is the best way for everyone to stay updated about changes to the project schedule? B: I suggest we {{BLANK}} mainly through the shared online board, and we can also hold a short video call every Monday morning so that nobody misses important decisions.",
    "cn": "A：我們的團隊成員分散在三個不同時區，大家要怎樣才能隨時掌握專案時程的變動？ B：我建議我們主要透過共用的線上看板來【溝通】，另外每週一早上也可以開個簡短的視訊會議，這樣就沒有人會錯過重要的決定。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達；表示",
    "en_def": "to show a feeling or opinion in words",
    "sentence": "A: The customers who waited almost an hour for their meals last night were very upset, so how should we respond to their complaints on our website? B: First, we should {{BLANK}} our sincere regret in a polite message, and then we can offer each of them a free dessert coupon for their next visit to the restaurant.",
    "cn": "A：昨晚等了將近一小時才上菜的客人非常不滿，我們該如何回應他們在網站上的抱怨？ B：首先，我們應該用一則有禮貌的訊息【表達】誠摯的歉意，然後可以送他們每人一張下次來餐廳使用的免費甜點券。"
  },
  {
    "word": "mention",
    "pos": "v.",
    "cn_def": "提到；提及",
    "en_def": "to speak or write about something briefly",
    "sentence": "A: When I call the hotel to book the conference room for next Thursday, is there anything special I should ask them about? B: Yes, please {{BLANK}} that three of our guests use wheelchairs, because the hotel will need to prepare a ramp near the entrance and arrange the tables with enough space between them.",
    "cn": "A：我打電話向飯店預訂下週四的會議室時，有沒有什麼特別需要詢問的事情？ B：有，請【提到】我們有三位來賓使用輪椅，因為飯店需要在入口附近準備斜坡，並把桌子之間的空間安排得夠寬。"
  },
  {
    "word": "announce",
    "pos": "v.",
    "cn_def": "宣布；公布",
    "en_def": "to tell many people officially about something",
    "sentence": "A: The board has finally chosen the new head of the marketing department, but when will the rest of the employees find out who it is? B: The CEO plans to {{BLANK}} the decision at the staff meeting on Friday afternoon, and then the human resources team will send an email with more details about the new manager's background.",
    "cn": "A：董事會終於選出行銷部門的新主管了，但其他員工什麼時候才會知道是誰？ B：執行長打算在週五下午的員工大會上【宣布】這項決定，之後人資團隊會寄一封電子郵件，詳細介紹新經理的背景。"
  },
  {
    "word": "declare",
    "pos": "v.",
    "cn_def": "宣告；申報",
    "en_def": "to say something officially; to tell officials about goods you are carrying",
    "sentence": "A: I'm bringing some product samples and a few bottles of wine back from the trade fair in France, so do I need to do anything special at the airport? B: Yes, you must {{BLANK}} the wine and any samples worth more than the limit at customs, or the officers may charge you a large fine when they check your luggage.",
    "cn": "A：我要從法國的貿易展帶一些產品樣品和幾瓶葡萄酒回來，在機場需要做什麼特別的事嗎？ B：要，你必須在海關【申報】葡萄酒和任何超過限額的樣品，否則海關人員檢查行李時可能會對你處以高額罰款。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with other people",
    "sentence": "A: The sales numbers for our new coffee machine were much lower than expected last quarter, so what should we do before the budget meeting next week? B: I think the sales and marketing managers should sit down together to {{BLANK}} the problem, and they should come to the meeting with at least two clear plans to improve the results.",
    "cn": "A：我們新款咖啡機上一季的銷售數字比預期低很多，下週預算會議前我們該做些什麼？ B：我認為業務和行銷經理應該坐下來一起【討論】這個問題，並且帶著至少兩個明確的改善方案來開會。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand",
    "sentence": "A: Have you heard that several new employees are confused about how to fill out the online expense forms after their business trips? B: Yes, so let's ask someone from the accounting department to {{BLANK}} the steps during next week's training session, and we can also put a short guide with screenshots on the company website.",
    "cn": "A：你有聽說好幾位新員工搞不清楚出差後要怎麼填寫線上費用報銷表嗎？ B：有，所以我們請會計部的人在下週的訓練課程中【說明】步驟，另外也可以在公司網站上放一份附有截圖的簡短指南。"
  },
  {
    "word": "describe",
    "pos": "v.",
    "cn_def": "描述；形容",
    "en_def": "to say what someone or something is like",
    "sentence": "A: Hello, I left my bag on the train this morning on my way to the office, so can your lost and found department help me get it back? B: Of course, but first please {{BLANK}} the bag for me, including its color, size, and brand, and tell me which train and which car you were sitting in.",
    "cn": "A：你好，我今天早上搭火車上班時把包包忘在車上了，請問你們的失物招領處能幫我找回來嗎？ B：當然可以，不過請先為我【描述】一下這個包包，包括顏色、尺寸和品牌，並告訴我你搭的是哪一班火車、坐在哪一節車廂。"
  },
  {
    "word": "argue",
    "pos": "v.",
    "cn_def": "爭論；爭吵",
    "en_def": "to speak angrily with someone because you disagree",
    "sentence": "A: Why did the two project leaders leave the meeting room looking so annoyed, and did they agree on the new deadline in the end? B: They didn't, because they started to {{BLANK}} about who should pay for the extra workers, so the director stopped the meeting and asked them to send her their ideas in writing instead.",
    "cn": "A：為什麼兩位專案負責人走出會議室時看起來那麼不高興？他們最後對新的截止日期達成共識了嗎？ B：沒有，因為他們開始【爭論】該由誰支付額外人力的費用，所以主任中止了會議，請他們改以書面方式把想法寄給她。"
  },
  {
    "word": "debate",
    "pos": "v.",
    "cn_def": "辯論；討論",
    "en_def": "to discuss a subject formally when people have different opinions",
    "sentence": "A: Has the city council made a final decision yet about building a new parking garage next to the shopping center downtown? B: Not yet, because council members will {{BLANK}} the plan at a public meeting next Tuesday evening, and local shop owners and residents are invited to share their opinions before anyone votes.",
    "cn": "A：市議會對於在市中心購物中心旁興建新停車場的計畫做出最後決定了嗎？ B：還沒，因為議員們下週二晚上會在一場公開會議上【辯論】這項計畫，而且在投票前，當地店家和居民都受邀發表意見。"
  },
  {
    "word": "whisper",
    "pos": "v.",
    "cn_def": "低聲說；耳語",
    "en_def": "to speak very quietly",
    "sentence": "A: The concert at the city hall starts in five minutes, so is it all right if I ask you questions about the program during the performance? B: It's better to wait until the break, but if it's really important, please {{BLANK}} so you don't disturb the other people in the audience who paid a lot for their tickets.",
    "cn": "A：市政廳的音樂會再五分鐘就要開始了，演出時我可以問你節目內容的問題嗎？ B：最好等到中場休息，但如果真的很重要，請【小聲說】，這樣才不會打擾到其他花了很多錢買票的觀眾。"
  },
  {
    "word": "shout",
    "pos": "v.",
    "cn_def": "大喊；呼喊",
    "en_def": "to say something very loudly",
    "sentence": "A: The factory floor is so noisy with all the machines running that I can't hear the supervisor's instructions, so what should I do? B: You shouldn't {{BLANK}} over the noise, because it hurts your throat, so just wear the headset we gave you and use the radio to talk with the supervisor during your shift.",
    "cn": "A：工廠裡所有機器都在運轉，吵到我聽不見主管的指示，我該怎麼辦？ B：你不應該在噪音中【大喊】，因為那樣會傷喉嚨，所以只要戴上我們發給你的耳機，值班時用無線電和主管溝通就好。"
  },
  {
    "word": "yell",
    "pos": "v.",
    "cn_def": "吼叫；大叫",
    "en_def": "to shout loudly, often because you are angry or excited",
    "sentence": "A: Did you hear what happened at the customer service desk this morning when the printer broke down during the busiest hour? B: Yes, one angry customer began to {{BLANK}} at the young clerk, so the store manager came over quickly, calmed him down, and printed his receipt in the back office.",
    "cn": "A：你有聽說今天早上最忙的時段印表機故障時，客服櫃檯發生了什麼事嗎？ B：有，一位生氣的顧客開始對年輕的店員【大吼】，所以店經理很快走過來安撫他，並在後面的辦公室幫他印收據。"
  },
  {
    "word": "murmur",
    "pos": "v.",
    "cn_def": "低聲說；喃喃細語",
    "en_def": "to say something in a soft, low voice",
    "sentence": "A: How did the audience react when the speaker announced that the company would close two of its stores in the city center next year? B: People started to {{BLANK}} quietly to each other in surprise, and several employees in the front row looked worried, but nobody asked a question until the end of the speech.",
    "cn": "A：講者宣布公司明年將關閉市中心的兩家門市時，聽眾有什麼反應？ B：大家驚訝地開始彼此【低聲細語】，前排有幾位員工看起來很擔心，但直到演講結束都沒有人提問。"
  },
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "聊天；閒聊",
    "en_def": "to talk in a friendly, informal way",
    "sentence": "A: How do you usually get to know the new people who join our department, since everyone is so busy during the day? B: I often invite them to {{BLANK}} over coffee in the café downstairs after lunch, because it is a relaxed way to learn about their interests and explain how our team works.",
    "cn": "A：既然白天大家都那麼忙，你通常怎麼認識加入我們部門的新同事？ B：我常在午餐後邀請他們去樓下的咖啡廳邊喝咖啡邊【聊天】，因為這是了解他們興趣和說明我們團隊運作方式的輕鬆方法。"
  },
  {
    "word": "lecture",
    "pos": "v.",
    "cn_def": "講課；演講",
    "en_def": "to give a talk to teach a group of people",
    "sentence": "A: I heard that a famous professor from London is visiting our company next month, so what will she be doing during her stay? B: She has agreed to {{BLANK}} on digital marketing for our sales staff twice a week, and she will also meet with the managers to review our online advertising plans.",
    "cn": "A：聽說下個月有一位倫敦的知名教授要來我們公司參訪，她在這段期間會做些什麼？ B：她已同意每週兩次為我們的業務人員【講授】數位行銷，還會和經理們會面，檢視我們的線上廣告計畫。"
  },
  {
    "word": "present",
    "pos": "v.",
    "cn_def": "報告；提出；呈現",
    "en_def": "to show or explain something formally to a group",
    "sentence": "A: Who is going to show the results of the customer survey to the board of directors at tomorrow's quarterly meeting? B: Linda from the research team will {{BLANK}} the findings, because she designed the survey herself, and she has already prepared clear charts that compare this year's numbers with last year's.",
    "cn": "A：明天的季度會議上，誰要向董事會展示顧客問卷調查的結果？ B：研究團隊的琳達會【報告】調查結果，因為問卷是她自己設計的，而且她已經準備好清楚的圖表，比較今年和去年的數據。"
  },
  {
    "word": "pronounce",
    "pos": "v.",
    "cn_def": "發音",
    "en_def": "to say a word or sound in a certain way",
    "sentence": "A: Do you know how to say the last name of our guest speaker from Poland, since I have to introduce him at the conference tomorrow? B: I'm not sure, so you should call his assistant this afternoon and ask her how to {{BLANK}} it, because guests always feel more respected when the host says their name correctly in front of the audience.",
    "cn": "A：你知道我們那位波蘭演講嘉賓的姓氏怎麼念嗎？因為明天的研討會由我介紹他。 B：我不確定，所以你應該今天下午打電話給他的助理，問她要怎麼【發音】，因為主持人在觀眾面前正確念出來賓的名字時，來賓總是會覺得更受尊重。"
  },
  {
    "word": "articulate",
    "pos": "v.",
    "cn_def": "清楚表達",
    "en_def": "to express ideas clearly in words",
    "sentence": "A: What did the interview panel think of the candidate who applied for the team leader position last Wednesday afternoon? B: They were impressed, because she was able to {{BLANK}} her ideas about staff training in a simple and organized way, and she gave real examples from her previous job at a large hotel chain in Singapore.",
    "cn": "A：面試小組對上週三下午應徵組長職位的那位候選人有什麼看法？ B：他們印象深刻，因為她能以簡單又有條理的方式【清楚表達】自己對員工訓練的想法，還舉了她之前在新加坡一家大型連鎖飯店工作的實例。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應；答覆",
    "en_def": "to answer or react to something",
    "sentence": "A: Our online store received more than fifty customer emails over the holiday weekend, so how quickly do we need to answer them? B: Company policy says we must {{BLANK}} to every message within twenty-four hours, so let's divide the emails among the four of us and start with the ones about late deliveries.",
    "cn": "A：我們的網路商店在連假週末收到超過五十封顧客郵件，我們需要多快回覆？ B：公司規定我們必須在二十四小時內【回應】每一則訊息，所以我們四個人把郵件分一分，先處理關於延遲送貨的那些。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆；答覆",
    "en_def": "to answer someone in speech or writing",
    "sentence": "A: Did you see that the supplier in Thailand sent us a new price list yesterday and asked if we still want to place our usual order for next month? B: I'll check the budget with the finance manager this morning, and then I'll {{BLANK}} to their email before lunch so they have enough time to prepare the shipment.",
    "cn": "A：你有看到泰國供應商昨天寄來新的價目表，並詢問我們下個月是否仍要照常下訂單嗎？ B：我今天早上會先和財務經理確認預算，然後在午餐前【回覆】他們的郵件，讓他們有足夠時間準備出貨。"
  },
  {
    "word": "state",
    "pos": "v.",
    "cn_def": "陳述；明確說明",
    "en_def": "to say or write something clearly and formally",
    "sentence": "A: What information do I need to include in my application for the marketing assistant position at the bank? B: In your cover letter, you should clearly {{BLANK}} your reasons for applying, list your most useful skills, and mention when you would be available to start work, because the hiring manager reads hundreds of letters every week.",
    "cn": "A：應徵銀行的行銷助理職位，我的申請資料需要包含哪些資訊？ B：在求職信中，你應該清楚【說明】你應徵的理由，列出你最有用的技能，並提到你何時可以開始上班，因為招聘經理每週要讀上百封信。"
  },
  {
    "word": "voice",
    "pos": "v.",
    "cn_def": "表達；說出（意見）",
    "en_def": "to tell people your opinion or feelings",
    "sentence": "A: Many staff members are unhappy about the new rule that requires everyone to work in the office five days a week, so what can they do about it? B: They can {{BLANK}} their concerns at the open meeting with the human resources director next Thursday, or they can send written comments through the anonymous online form.",
    "cn": "A：許多員工對要求所有人每週進辦公室上班五天的新規定不滿，他們能怎麼做？ B：他們可以在下週四與人資總監的公開會議上【表達】他們的疑慮，或透過匿名線上表單提交書面意見。"
  },
  {
    "word": "recite",
    "pos": "v.",
    "cn_def": "背誦；朗誦",
    "en_def": "to say something aloud from memory",
    "sentence": "A: Why does the new waiter keep practicing in the corner of the kitchen before the restaurant opens every evening? B: He is learning to {{BLANK}} the list of daily specials without reading from a card, because the owner wants every server to describe the dishes naturally while looking at the guests.",
    "cn": "A：為什麼那位新來的服務生每天晚上餐廳開門前都在廚房角落練習？ B：他在學習不看卡片就【背誦】每日特餐清單，因為老闆希望每位服務生都能看著客人自然地介紹菜色。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服",
    "en_def": "to make someone agree to do something by giving reasons",
    "sentence": "A: The client still thinks our software package is too expensive, so is there any way we can get them to sign the contract this month? B: We could try to {{BLANK}} them by offering free training for their staff and a three-month trial period, since they mainly worry about wasting money on a system their employees cannot use.",
    "cn": "A：客戶仍然覺得我們的軟體方案太貴，有沒有什麼辦法讓他們這個月簽約？ B：我們可以試著提供員工免費訓練和三個月的試用期來【說服】他們，因為他們主要是擔心把錢浪費在員工不會用的系統上。"
  },
  {
    "word": "inform",
    "pos": "v.",
    "cn_def": "通知；告知",
    "en_def": "to tell someone facts officially",
    "sentence": "A: The elevator in the east building will be closed for repairs all day on Saturday, so who needs to know about this before the weekend? B: We should {{BLANK}} all the tenants by email today and put notices in the lobby, because several companies have deliveries planned and their drivers will have to use the service stairs.",
    "cn": "A：東棟的電梯週六整天要停機維修，週末前有誰需要知道這件事？ B：我們今天應該寄電子郵件【通知】所有租戶，並在大廳張貼公告，因為好幾家公司已安排了送貨，他們的司機將必須使用服務樓梯。"
  },
  {
    "word": "comment",
    "pos": "v.",
    "cn_def": "評論；發表意見",
    "en_def": "to give an opinion about something",
    "sentence": "A: Reporters keep calling our office to ask about the rumors that we are going to buy a smaller competitor, so what should I tell them? B: Just politely say that the company cannot {{BLANK}} on the matter at this time, and give them the phone number of our public relations manager if they want an official statement later.",
    "cn": "A：記者一直打電話到我們辦公室，詢問我們將收購一家較小競爭對手的傳言，我該怎麼回答？ B：就禮貌地說公司目前無法對此事【發表評論】，如果他們之後想要正式聲明，就給他們公關經理的電話號碼。"
  },
  {
    "word": "converse",
    "pos": "v.",
    "cn_def": "交談；談話",
    "en_def": "to have a conversation with someone (formal)",
    "sentence": "A: Why did the hotel decide to hire a new front desk clerk who speaks four languages, even though her salary will be higher? B: Many of our guests come from Japan, Korea, and Spain, so the manager wants someone who can {{BLANK}} with them easily and help them book tours without using a translation app.",
    "cn": "A：為什麼飯店決定僱用一位會說四種語言的新櫃檯人員，即使她的薪水會比較高？ B：我們很多客人來自日本、韓國和西班牙，所以經理希望找一位能輕鬆和他們【交談】的人，在不使用翻譯軟體的情況下協助他們預訂行程。"
  },
  {
    "word": "narrate",
    "pos": "v.",
    "cn_def": "敘述；旁白",
    "en_def": "to tell a story or describe events, often as the voice in a video",
    "sentence": "A: Have we found someone with a clear, friendly voice for the new training video that explains our safety procedures? B: Yes, Mr. Chen from the sales department has agreed to {{BLANK}} the video, and the recording studio has booked him for two hours next Monday morning, so the editors can finish the final version by the end of the month.",
    "cn": "A：我們找到聲音清晰親切、可以為新的安全程序教學影片配音的人了嗎？ B：找到了，業務部的陳先生已經同意為影片【旁白】，錄音室幫他預約了下週一早上兩個小時，這樣剪輯人員就能在月底前完成最終版本。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "澄清；釐清",
    "en_def": "to make something easier to understand by explaining more",
    "sentence": "A: Some of the sales staff misunderstood the new commission plan and think they will earn less money next year, so what should we do? B: The sales director should send a short email to {{BLANK}} how the new plan works, and she could include a simple example showing what a typical salesperson will earn.",
    "cn": "A：有些業務人員誤解了新的佣金方案，以為明年會賺得比較少，我們該怎麼辦？ B：業務總監應該寄一封簡短的電子郵件【釐清】新方案的運作方式，並附上一個簡單的例子，說明一般業務員能賺多少錢。"
  },
  {
    "word": "emphasize",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is especially important",
    "sentence": "A: What is the main message you want to give the new employees during their first day of training at the warehouse? B: I want to {{BLANK}} the importance of safety above everything else, so I'll show them how to lift heavy boxes correctly and where to find the first aid kits and fire exits.",
    "cn": "A：在倉庫新進員工的第一天訓練中，你最想傳達給他們的訊息是什麼？ B：我想【強調】安全比任何事都重要，所以我會示範如何正確搬運重箱子，並告訴他們急救箱和逃生出口在哪裡。"
  },
  {
    "word": "confess",
    "pos": "v.",
    "cn_def": "承認；坦白",
    "en_def": "to admit that you did something wrong",
    "sentence": "A: Did anyone find out why the important package for our client in Tokyo was sent to the wrong address last week? B: Yes, one of the new assistants decided to {{BLANK}} that she had typed the address incorrectly, and the manager thanked her for being honest and showed her how to check the information next time.",
    "cn": "A：有人查出上週要寄給東京客戶的重要包裹為什麼送錯地址嗎？ B：有，一位新來的助理主動【坦承】是她把地址打錯了，經理感謝她的誠實，並教她下次如何核對資料。"
  }
];

const MCQS = [
  {
    "q": "Customers who need help with their bills can call our hotline. They can _____ to a representative from eight in the morning until six at night.",
    "options": [
      "talk",
      "tell",
      "discuss",
      "inform"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please don't worry about the small delay. The manager called to _____ that the shipment will arrive by Friday.",
    "options": [
      "tell",
      "discuss",
      "say",
      "persuade"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Before you leave the office tonight, please _____ the receptionist about the change. The client meeting has moved to nine o'clock tomorrow.",
    "options": [
      "say",
      "tell",
      "talk",
      "explain"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our managers work in different cities. They _____ with each other mainly through video calls and a shared online calendar.",
    "options": [
      "persuade",
      "declare",
      "pronounce",
      "communicate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "On behalf of the whole team, I would like to _____ my thanks to everyone. Your hard work made the event a great success.",
    "options": [
      "argue",
      "inform",
      "express",
      "whisper"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "When you book a room, please _____ that you are attending the conference. The hotel offers a special discount to all participants.",
    "options": [
      "mention",
      "persuade",
      "argue",
      "discuss"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company will _____ the winner of the design contest on Friday. All employees are invited to the ceremony in the main hall.",
    "options": [
      "whisper",
      "converse",
      "argue",
      "announce"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Travelers must _____ any goods worth more than the limit at customs. Failing to do so may result in a heavy fine.",
    "options": [
      "chat",
      "declare",
      "murmur",
      "persuade"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The board members met this morning to _____ the proposed budget. They will vote on the final plan next week.",
    "options": [
      "discuss",
      "chat",
      "argue",
      "talk"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The new system looks complicated at first. A technician will _____ how to use it during tomorrow's training session.",
    "options": [
      "talk",
      "persuade",
      "explain",
      "argue"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "If you lose your luggage, go to the airline counter. Staff will ask you to _____ the bag's size, color, and brand.",
    "options": [
      "yell",
      "describe",
      "converse",
      "argue"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The two managers began to _____ about who should pay for the repairs. Finally, the director stepped in and made a decision.",
    "options": [
      "discuss",
      "mention",
      "declare",
      "argue"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Members of the city council will _____ the new parking plan at a public meeting. Residents may also share their opinions before the vote.",
    "options": [
      "whisper",
      "pronounce",
      "debate",
      "chat"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The movie had already started when we arrived. We had to _____ so that we would not disturb the people sitting nearby.",
    "options": [
      "whisper",
      "shout",
      "announce",
      "yell"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The fire alarm was so loud that nobody could hear the instructions. The safety officer had to _____ to get everyone's attention.",
    "options": [
      "whisper",
      "pronounce",
      "confess",
      "shout"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Employees often _____ with their coworkers in the break room. It is a relaxed way to build friendships at work.",
    "options": [
      "declare",
      "chat",
      "recite",
      "pronounce"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "A famous professor will _____ on digital marketing at the business school next month. Her talks are always popular with young managers.",
    "options": [
      "lecture",
      "confess",
      "persuade",
      "pronounce"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Our sales director will _____ the quarterly results to the board tomorrow. She has prepared several charts for the meeting.",
    "options": [
      "whisper",
      "chat",
      "present",
      "converse"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Many guests find our hotel's French name difficult to say. Please learn how to _____ it correctly before you answer the phone.",
    "options": [
      "persuade",
      "pronounce",
      "confess",
      "argue"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Our customer service team tries to _____ to every complaint within one day. Fast answers help keep our customers happy and loyal.",
    "options": [
      "discuss",
      "inform",
      "persuade",
      "respond"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Thank you for your email about the job opening. I will _____ to your questions as soon as I return from my trip.",
    "options": [
      "explain",
      "tell",
      "reply",
      "describe"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Applicants should clearly _____ their reasons for applying in the cover letter. Letters without this information will not be reviewed.",
    "options": [
      "state",
      "chat",
      "whisper",
      "converse"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Staff members are welcome to _____ their concerns at the monthly meeting. Managers will try to answer every question openly.",
    "options": [
      "yell",
      "murmur",
      "narrate",
      "voice"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The sales team hopes to _____ the client to sign a two-year contract. They will offer free training as an extra benefit.",
    "options": [
      "discuss",
      "persuade",
      "mention",
      "declare"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "We regret to _____ you that your order has been delayed. A new delivery date will be sent to you by email.",
    "options": [
      "inform",
      "say",
      "discuss",
      "announce"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "When reporters asked about the merger, the spokesperson refused to _____ on the rumors. She said an official statement would follow soon.",
    "options": [
      "mention",
      "tell",
      "comment",
      "persuade"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Several employees misunderstood the new vacation policy. The personnel manager sent an email to _____ the rules and answer common questions.",
    "options": [
      "whisper",
      "clarify",
      "confess",
      "yell"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The trainer wanted to _____ the importance of safety on the first day. She repeated the main rules several times during the session.",
    "options": [
      "murmur",
      "converse",
      "chat",
      "emphasize"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The assistant decided to _____ that she had sent the file to the wrong client. Her manager appreciated her honesty and fixed the problem.",
    "options": [
      "whisper",
      "shout",
      "confess",
      "lecture"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "A good team leader must be able to _____ goals clearly. Then every member understands exactly what needs to be done next.",
    "options": [
      "articulate",
      "yell",
      "murmur",
      "recite"
    ],
    "answer": 0,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "talk": {
    "pos": "v.",
    "en_def": "to speak with someone",
    "cn_def": "談話；交談"
  },
  "say": {
    "pos": "v.",
    "en_def": "to speak words",
    "cn_def": "說；講"
  },
  "tell": {
    "pos": "v.",
    "en_def": "to give information to someone by speaking",
    "cn_def": "告訴；告知"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with others",
    "cn_def": "溝通；傳達"
  },
  "express": {
    "pos": "v.",
    "en_def": "to show a feeling or opinion in words",
    "cn_def": "表達；表示"
  },
  "mention": {
    "pos": "v.",
    "en_def": "to speak or write about something briefly",
    "cn_def": "提到；提及"
  },
  "announce": {
    "pos": "v.",
    "en_def": "to tell many people officially about something",
    "cn_def": "宣布；公布"
  },
  "declare": {
    "pos": "v.",
    "en_def": "to say something officially; to tell officials about goods you are carrying",
    "cn_def": "宣告；申報"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand",
    "cn_def": "解釋；說明"
  },
  "describe": {
    "pos": "v.",
    "en_def": "to say what someone or something is like",
    "cn_def": "描述；形容"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to speak angrily with someone because you disagree",
    "cn_def": "爭論；爭吵"
  },
  "debate": {
    "pos": "v.",
    "en_def": "to discuss a subject formally when people have different opinions",
    "cn_def": "辯論；討論"
  },
  "whisper": {
    "pos": "v.",
    "en_def": "to speak very quietly",
    "cn_def": "低聲說；耳語"
  },
  "shout": {
    "pos": "v.",
    "en_def": "to say something very loudly",
    "cn_def": "大喊；呼喊"
  },
  "yell": {
    "pos": "v.",
    "en_def": "to shout loudly, often because you are angry or excited",
    "cn_def": "吼叫；大叫"
  },
  "murmur": {
    "pos": "v.",
    "en_def": "to say something in a soft, low voice",
    "cn_def": "低聲說；喃喃細語"
  },
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "聊天；閒聊"
  },
  "lecture": {
    "pos": "v.",
    "en_def": "to give a talk to teach a group of people",
    "cn_def": "講課；演講"
  },
  "present": {
    "pos": "v.",
    "en_def": "to show or explain something formally to a group",
    "cn_def": "報告；提出；呈現"
  },
  "pronounce": {
    "pos": "v.",
    "en_def": "to say a word or sound in a certain way",
    "cn_def": "發音"
  },
  "articulate": {
    "pos": "v.",
    "en_def": "to express ideas clearly in words",
    "cn_def": "清楚表達"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to answer or react to something",
    "cn_def": "回應；答覆"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer someone in speech or writing",
    "cn_def": "回覆；答覆"
  },
  "state": {
    "pos": "v.",
    "en_def": "to say or write something clearly and formally",
    "cn_def": "陳述；明確說明"
  },
  "voice": {
    "pos": "v.",
    "en_def": "to tell people your opinion or feelings",
    "cn_def": "表達；說出（意見）"
  },
  "recite": {
    "pos": "v.",
    "en_def": "to say something aloud from memory",
    "cn_def": "背誦；朗誦"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服"
  },
  "inform": {
    "pos": "v.",
    "en_def": "to tell someone facts officially",
    "cn_def": "通知；告知"
  },
  "comment": {
    "pos": "v.",
    "en_def": "to give an opinion about something",
    "cn_def": "評論；發表意見"
  },
  "converse": {
    "pos": "v.",
    "en_def": "to have a conversation with someone (formal)",
    "cn_def": "交談；談話"
  },
  "narrate": {
    "pos": "v.",
    "en_def": "to tell a story or describe events, often as the voice in a video",
    "cn_def": "敘述；旁白"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something easier to understand by explaining more",
    "cn_def": "澄清；釐清"
  },
  "emphasize": {
    "pos": "v.",
    "en_def": "to show that something is especially important",
    "cn_def": "強調"
  },
  "confess": {
    "pos": "v.",
    "en_def": "to admit that you did something wrong",
    "cn_def": "承認；坦白"
  }
};

const EXTRA_GLOSSES = {};
