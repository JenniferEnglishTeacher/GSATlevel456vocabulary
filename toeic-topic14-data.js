// Topic 14 Quiz Data: Apologize 道歉
// Source word list: https://www.examword.com/group-topic/apologize — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T14 - Apologize 道歉",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sorry",
    "pos": "adj.",
    "cn_def": "抱歉的；難過的",
    "en_def": "feeling sad about something you did wrong",
    "sentence": "A: Why did the hotel manager call you so early this morning, and is there a problem with the room we booked for the visiting clients? B: She called to say she was very {{BLANK}} because the air conditioner in their suite broke last night, so she has moved them to a bigger room for free.",
    "cn": "A：為什麼飯店經理今天一大早就打電話給你？我們幫來訪客戶訂的房間有問題嗎？ B：她打來說她非常【抱歉】，因為他們套房的冷氣昨晚壞了，所以她已經免費把他們換到更大的房間。"
  },
  {
    "word": "regret",
    "pos": "n.",
    "cn_def": "遺憾；懊悔",
    "en_def": "a sad feeling about something you wish you had not done",
    "sentence": "A: Have you heard back from the customer whose order was sent to the wrong address last week, and is she still angry with us? B: Yes, our director wrote to her personally to express deep {{BLANK}} for the mistake, and she was pleased that we also offered her a discount on her next purchase.",
    "cn": "A：上週訂單被寄錯地址的那位顧客有回覆了嗎？她還在生我們的氣嗎？ B：有，我們的主管親自寫信給她，對這個錯誤表達深深的【遺憾】，而且她很高興我們還提供她下次購物的折扣。"
  },
  {
    "word": "remorse",
    "pos": "n.",
    "cn_def": "懊悔；自責",
    "en_def": "a strong feeling of being sorry for doing something wrong",
    "sentence": "A: Why did Kevin stay so late at the office yesterday, even though his shift finished at five and his family was waiting for dinner? B: He felt real {{BLANK}} after he deleted the shared sales report by accident, so he stayed until midnight to rebuild every page before the morning meeting.",
    "cn": "A：為什麼凱文昨天在辦公室待到那麼晚？他的班明明五點就結束了，家人還在等他吃晚餐。 B：他不小心刪掉了共用的業績報告之後感到非常【懊悔】，所以他一直待到半夜，在早上開會前把每一頁都重新做好。"
  },
  {
    "word": "forgive",
    "pos": "v.",
    "cn_def": "原諒；寬恕",
    "en_def": "to stop being angry with someone who did something wrong",
    "sentence": "A: Do you think the restaurant owner will keep working with our catering company after we delivered the wrong cakes to her wedding event on Saturday? B: I hope she will {{BLANK}} us, because we have already returned her money, sent fresh flowers to her shop, and promised a free dessert table next month.",
    "cn": "A：我們星期六把錯的蛋糕送到那位餐廳老闆的婚禮活動上，你覺得她還會繼續跟我們的外燴公司合作嗎？ B：我希望她會【原諒】我們，因為我們已經退錢給她、送了鮮花到她店裡，還承諾下個月免費提供甜點桌。"
  },
  {
    "word": "forgiveness",
    "pos": "n.",
    "cn_def": "原諒；寬恕",
    "en_def": "the act of forgiving someone",
    "sentence": "A: What did the airline say in the email after our flight to Tokyo was cancelled without any warning and we missed the trade show? B: The customer service team asked for our {{BLANK}}, explained that a storm had closed the airport, and gave each passenger a travel voucher worth three hundred dollars.",
    "cn": "A：我們飛往東京的班機在毫無預警下被取消，害我們錯過了商展，航空公司在電子郵件裡怎麼說？ B：客服團隊請求我們的【原諒】，解釋是暴風雨導致機場關閉，並給每位乘客一張價值三百美元的旅遊抵用券。"
  },
  {
    "word": "excuse",
    "pos": "v.",
    "cn_def": "原諒（小過失）；請見諒",
    "en_def": "to forgive someone for something small, such as being rude or late",
    "sentence": "A: Why did the new trainee leave the meeting room so suddenly while the manager was still explaining the safety rules to everyone? B: She got an urgent call from her daughter's school, so she said, 'Please {{BLANK}} me,' and promised to read the meeting notes carefully later in the afternoon.",
    "cn": "A：為什麼經理還在向大家說明安全規定時，那位新來的實習生突然離開會議室？ B：她接到女兒學校打來的緊急電話，所以她說「請【原諒】我」，並承諾下午稍晚會仔細閱讀會議紀錄。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to say that something bad is true, often that you did it",
    "sentence": "A: Did anyone find out why the shipment of printers left the warehouse two days late and caused so many complaints from our stores? B: Yes, the new supervisor had the courage to {{BLANK}} that he had forgotten to sign the delivery form, and he has already created a checklist so it won't happen again.",
    "cn": "A：有人查出那批印表機為什麼晚了兩天才離開倉庫，讓我們的門市收到那麼多抱怨嗎？ B：有，新來的主管有勇氣【承認】他忘了簽出貨單，而且他已經做了一份檢查清單，以免再發生這種事。"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "cn_def": "承認；確認",
    "en_def": "to accept or say that something is true or exists",
    "sentence": "A: How did the bank respond when you called about the extra charge on your credit card statement this month? B: The manager was very helpful; she was quick to {{BLANK}} that their system had made an error, and she said the money would be returned to my account within three working days.",
    "cn": "A：你這個月打電話去問信用卡帳單上多出來的費用時，銀行怎麼回應？ B：經理非常幫忙，她很快就【承認】是他們的系統出錯，並說這筆錢會在三個工作天內退回我的帳戶。"
  },
  {
    "word": "confess",
    "pos": "v.",
    "cn_def": "坦白；招認",
    "en_def": "to admit that you did something wrong, often something you kept secret",
    "sentence": "A: Why did Mr. Lin look so nervous when he walked into the director's office after lunch today? B: He had to {{BLANK}} that he lost the company laptop on the train last Friday, and he was worried because it contained important files about our new product launch in Singapore.",
    "cn": "A：林先生今天午餐後走進主管辦公室時，為什麼看起來那麼緊張？ B：他必須【坦白】他上週五在火車上弄丟了公司的筆電，他很擔心，因為裡面有關於我們在新加坡推出新產品的重要檔案。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "過錯；責任",
    "en_def": "responsibility for a mistake or problem",
    "sentence": "A: Should we ask the customer to pay for the broken glass table, since it was damaged during the delivery to her new apartment? B: No, it was our driver's {{BLANK}} because he did not tie it down properly in the truck, so we will replace the table and pay for the shipping ourselves.",
    "cn": "A：那張玻璃桌在送到她新公寓的途中損壞了，我們應該請顧客付錢嗎？ B：不行，那是我們司機的【過錯】，因為他沒有在貨車上把它綁牢，所以我們會換一張新桌子，運費也由我們自己負擔。"
  },
  {
    "word": "blame",
    "pos": "n.",
    "cn_def": "責備；過錯責任",
    "en_def": "responsibility for something bad that happened",
    "sentence": "A: Why is the project manager so upset after the client cancelled the contract, when most of the problems came from the design team? B: He feels that he must take the {{BLANK}} as the leader of the project, so he is preparing an apology letter and a plan to win back the client's trust.",
    "cn": "A：大部分的問題都出在設計團隊，為什麼客戶取消合約後專案經理會那麼難過？ B：他覺得身為專案的負責人，他必須承擔【過錯責任】，所以他正在準備一封道歉信和一份贏回客戶信任的計畫。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任",
    "en_def": "the duty to deal with something, or being the one who caused a problem",
    "sentence": "A: What did the company president say at the press conference after customers found mistakes in the new phone's instruction booklet? B: She accepted full {{BLANK}} for the problem, thanked the customers who reported it, and announced that corrected booklets would be mailed to every buyer by the end of the month.",
    "cn": "A：顧客發現新手機的說明書有錯誤後，公司總裁在記者會上說了什麼？ B：她為這個問題承擔全部【責任】，感謝回報問題的顧客，並宣布會在月底前把更正後的說明書寄給每位買家。"
  },
  {
    "word": "make amends",
    "pos": "v.phr.",
    "cn_def": "彌補；賠罪",
    "en_def": "to do something good to show you are sorry for something bad you did",
    "sentence": "A: Why is the café giving free coffee to everyone in our office building this morning, even to people who have never been there before? B: The owner wants to {{BLANK}} for the loud construction noise last week, which bothered many workers, so she is also handing out discount cards for next month.",
    "cn": "A：為什麼那家咖啡店今天早上要送免費咖啡給我們辦公大樓裡的每個人，連從沒去過的人也有？ B：老闆想為上週吵鬧的施工噪音向大家【彌補】，那些噪音打擾了很多上班族，所以她也在發放下個月的折扣卡。"
  },
  {
    "word": "reconcile",
    "pos": "v.",
    "cn_def": "和解；和好",
    "en_def": "to become friendly again after an argument",
    "sentence": "A: Are the two sales directors still refusing to speak to each other after their argument about the bonus system last month? B: No, the general manager invited them to lunch, listened to both sides, and helped them {{BLANK}}, so now they are planning the new marketing campaign together without any problems.",
    "cn": "A：那兩位業務主管上個月為了獎金制度吵架之後，現在還是拒絕跟彼此說話嗎？ B：沒有了，總經理請他們吃午餐，聽了雙方的說法，並幫助他們【和解】，所以現在他們正一起順利地規劃新的行銷活動。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修補；修復",
    "en_def": "to fix something that is broken or damaged, such as a relationship",
    "sentence": "A: What is the hotel doing now that the online reviews about its rude front desk staff have spread so quickly across social media? B: The new manager is trying to {{BLANK}} the hotel's reputation by training every employee in customer service and personally answering each negative review with a polite apology.",
    "cn": "A：關於飯店櫃檯人員態度無禮的網路評論在社群媒體上迅速擴散，飯店現在打算怎麼做？ B：新經理正努力【修補】飯店的名聲，他訓練每位員工的客服能力，並親自以禮貌的道歉回覆每一則負評。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；誠懇的",
    "en_def": "honest and really meaning what you say",
    "sentence": "A: How did the customer react when our team leader called her to talk about the missing items in her online order? B: She was angry at first, but she calmed down because his apology sounded {{BLANK}}, and he also arranged for a courier to bring the missing items to her home that same evening.",
    "cn": "A：我們的組長打電話給那位顧客，談她網購訂單裡缺少的商品時，她有什麼反應？ B：她一開始很生氣，但後來冷靜下來了，因為他的道歉聽起來很【真誠】，而且他還安排快遞員當天晚上就把缺少的商品送到她家。"
  },
  {
    "word": "heartfelt",
    "pos": "adj.",
    "cn_def": "衷心的；真摯的",
    "en_def": "felt very deeply and honestly",
    "sentence": "A: What did the staff do for Mrs. Chen after the office party, when someone accidentally broke the vase her late mother had given her? B: Everyone signed a card with a {{BLANK}} message saying how sorry they were, and the team also bought her a beautiful new vase from her favorite shop.",
    "cn": "A：辦公室派對上有人不小心打破陳太太已故母親送她的花瓶後，同事們為她做了什麼？ B：大家在一張卡片上簽名，寫下【衷心的】話語表達他們有多抱歉，團隊也從她最喜歡的店買了一個漂亮的新花瓶送她。"
  },
  {
    "word": "humble",
    "pos": "adj.",
    "cn_def": "謙虛的；謙卑的",
    "en_def": "not proud; not thinking you are better than others",
    "sentence": "A: Why do so many employees respect the new CEO, even though she has only worked at our company for three months? B: She is very {{BLANK}}; when her plan to change the work schedule failed, she apologized to the whole staff in an email and asked for their ideas to improve it.",
    "cn": "A：新任執行長才在我們公司工作三個月，為什麼有那麼多員工尊敬她？ B：她非常【謙虛】；當她更改工作時間表的計畫失敗時，她寫電子郵件向全體員工道歉，並請大家提供改善的想法。"
  },
  {
    "word": "ashamed",
    "pos": "adj.",
    "cn_def": "羞愧的；慚愧的",
    "en_def": "feeling bad or guilty about something you did",
    "sentence": "A: Did you talk to the new assistant who shouted at a customer on the phone yesterday because the system kept crashing? B: Yes, she said she felt deeply {{BLANK}} of her behavior, so she called the customer back this morning to apologize and offered to process his order for him herself.",
    "cn": "A：昨天因為系統一直當機而在電話裡對顧客大吼的那位新助理，你跟她談過了嗎？ B：談過了，她說她對自己的行為感到非常【羞愧】，所以今天早上她回電向那位顧客道歉，並主動親自幫他處理訂單。"
  },
  {
    "word": "embarrassed",
    "pos": "adj.",
    "cn_def": "尷尬的；難為情的",
    "en_def": "feeling shy or uncomfortable because of something you did in front of others",
    "sentence": "A: Why did Tom's face turn so red during the presentation to the investors this afternoon? B: He felt really {{BLANK}} when he noticed that his slides had the wrong company name on them, so he stopped, apologized to everyone in the room, and quickly explained the correct sales figures.",
    "cn": "A：今天下午向投資人做簡報時，湯姆的臉為什麼變得那麼紅？ B：他發現投影片上的公司名稱寫錯時感到非常【尷尬】，所以他停下來向會議室裡的每個人道歉，並迅速說明正確的銷售數字。"
  },
  {
    "word": "polite",
    "pos": "adj.",
    "cn_def": "有禮貌的",
    "en_def": "speaking and acting in a kind way that shows respect for others",
    "sentence": "A: What should I write in the reply to the guest who complained that his room was not cleaned during his three-day stay? B: Keep your email short and {{BLANK}}, say that you are sorry for the trouble, and offer him a free breakfast or a discount the next time he visits our hotel.",
    "cn": "A：有位客人抱怨他住宿三天期間房間都沒有打掃，我回信時該寫些什麼？ B：信要寫得簡短又【有禮貌】，說你對造成的麻煩感到抱歉，並在他下次來我們飯店時提供免費早餐或折扣。"
  },
  {
    "word": "respectfully",
    "pos": "adv.",
    "cn_def": "恭敬地；尊重地",
    "en_def": "in a way that shows respect",
    "sentence": "A: How should I tell the client that we cannot finish the website by Friday without making her feel that we don't care about her project? B: Speak to her {{BLANK}}, apologize for the change, explain clearly why the testing needs more time, and give her a new date that you are sure the team can meet.",
    "cn": "A：我該怎麼告訴客戶我們無法在星期五前完成網站，又不讓她覺得我們不在乎她的專案？ B：【恭敬地】跟她說話，為這個變動道歉，清楚說明為什麼測試需要更多時間，並給她一個你確定團隊能趕上的新日期。"
  },
  {
    "word": "honestly",
    "pos": "adv.",
    "cn_def": "誠實地；坦白地",
    "en_def": "in a truthful way, without hiding anything",
    "sentence": "A: What happened when the shop manager found out that the new cashier had given a customer the wrong change on Monday? B: The cashier explained {{BLANK}} what had happened, so the manager did not get angry; instead, they called the customer together, apologized, and returned the money that same afternoon.",
    "cn": "A：店長發現新來的收銀員星期一找錯錢給顧客時，發生了什麼事？ B：收銀員【誠實地】說明了事情經過，所以店長沒有生氣；他們反而一起打電話給那位顧客道歉，並在當天下午就把錢退還給他。"
  },
  {
    "word": "publicly",
    "pos": "adv.",
    "cn_def": "公開地",
    "en_def": "in front of other people or in a way that everyone can see",
    "sentence": "A: Why did the food company post a video message on its website and social media accounts last night? B: The president wanted to apologize {{BLANK}} for the wrong labels on its cookie boxes, because many customers were worried, and she promised that all the boxes in stores would be replaced this week.",
    "cn": "A：那家食品公司昨晚為什麼在官網和社群媒體帳號上發布一段影片訊息？ B：總裁想要【公開地】為餅乾盒上的錯誤標示道歉，因為很多顧客都很擔心，她並承諾本週內會更換店裡所有的盒子。"
  },
  {
    "word": "formally",
    "pos": "adv.",
    "cn_def": "正式地",
    "en_def": "in an official and serious way",
    "sentence": "A: Is a phone call enough to say sorry to our biggest client for the shipping delay that cost them a week of sales? B: I don't think so; we should apologize {{BLANK}} in a signed letter from the director, and then arrange a meeting to discuss how we will prevent similar delays in the future.",
    "cn": "A：運送延誤讓我們最大的客戶損失了一週的銷售，只打一通電話道歉夠嗎？ B：我覺得不夠；我們應該用一封主管簽名的信【正式地】道歉，然後安排一場會議，討論我們將來要如何避免類似的延誤。"
  },
  {
    "word": "personally",
    "pos": "adv.",
    "cn_def": "親自地",
    "en_def": "by yourself, not by sending someone else",
    "sentence": "A: Did the regional manager send an assistant to visit the customer whose washing machine flooded her kitchen after our technician fixed it? B: No, he went {{BLANK}} to her house yesterday afternoon to apologize, check the damage, and promise that our company would pay for the new floor.",
    "cn": "A：我們技師修好那位顧客的洗衣機後卻淹了她的廚房，區經理有派助理去拜訪她嗎？ B：沒有，他昨天下午【親自】去她家道歉、查看損壞情況，並承諾我們公司會支付新地板的費用。"
  },
  {
    "word": "promptly",
    "pos": "adv.",
    "cn_def": "迅速地；立即地",
    "en_def": "quickly and without delay",
    "sentence": "A: What is the most important thing to do when a guest complains about the service in our restaurant during a busy dinner? B: You should respond {{BLANK}}, listen carefully without interrupting, apologize for the problem, and then ask the kitchen to prepare a new dish so the guest does not have to wait too long.",
    "cn": "A：在忙碌的晚餐時段，客人抱怨我們餐廳的服務時，最重要的是做什麼？ B：你應該【迅速地】回應，仔細聆聽不要打斷，為問題道歉，然後請廚房準備一道新菜，讓客人不用等太久。"
  },
  {
    "word": "graciously",
    "pos": "adv.",
    "cn_def": "親切地；寬厚地",
    "en_def": "in a kind, polite and generous way",
    "sentence": "A: How did the guest speaker react when our team forgot to prepare a microphone for her talk at the annual conference? B: She {{BLANK}} accepted our apology, smiled at the audience, and spoke loudly for the first ten minutes while our technician brought a new microphone from the hotel's storage room.",
    "cn": "A：我們團隊在年會上忘了幫演講嘉賓準備麥克風，她有什麼反應？ B：她【寬厚地】接受了我們的道歉，對觀眾微笑，並在前十分鐘大聲演講，同時我們的技術人員從飯店的儲藏室拿來一支新的麥克風。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受",
    "en_def": "to agree to take something that is offered, such as an apology",
    "sentence": "A: Has the supplier answered the letter we sent after our accountant paid their invoice two months late by mistake? B: Yes, they wrote back to say that they {{BLANK}} our apology and understand that the delay was caused by the new software, so they are happy to continue our partnership next year.",
    "cn": "A：我們的會計誤將供應商的發票晚了兩個月才付款後，我們寄了一封信，他們回覆了嗎？ B：回了，他們回信說他們【接受】我們的道歉，也理解延誤是新軟體造成的，所以很樂意明年繼續我們的合作關係。"
  }
];

const MCQS = [
  {
    "q": "We are very _____ for the delay in shipping your order. A new package will arrive at your office tomorrow morning.",
    "options": [
      "humble",
      "sorry",
      "polite",
      "heartfelt"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The CEO expressed deep _____ that the factory had to close. He promised to help every worker find a new job nearby.",
    "options": [
      "blame",
      "fault",
      "forgiveness",
      "regret"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The driver showed real _____ after hitting the parked delivery van. He paid for the repairs right away and apologized to the owner.",
    "options": [
      "remorse",
      "fault",
      "forgiveness",
      "blame"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Please _____ me for missing your call this morning. I was in a long meeting with the new clients from Osaka.",
    "options": [
      "admit",
      "confess",
      "forgive",
      "repair"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "After the billing mistake, the bank manager asked for the customer's _____. She also removed the extra fee from his account.",
    "options": [
      "remorse",
      "fault",
      "regret",
      "forgiveness"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "_____ me, but could you tell me where the conference room is? I have a meeting there with the sales director at ten.",
    "options": [
      "admit",
      "excuse",
      "confess",
      "acknowledge"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The engineer had to _____ that he made an error in the design. The team fixed the problem before the product went on sale.",
    "options": [
      "forgive",
      "reconcile",
      "admit",
      "repair"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Please _____ receipt of this email by replying before Friday. We need to know that you have received the new contract.",
    "options": [
      "acknowledge",
      "admit",
      "confess",
      "forgive"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The employee decided to _____ to breaking the office printer. He told his manager the truth before anyone else found out.",
    "options": [
      "reconcile",
      "repair",
      "confess",
      "excuse"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The late delivery was not the driver's _____. The truck was stopped for two hours because of a big accident on the highway.",
    "options": [
      "fault",
      "forgiveness",
      "remorse",
      "regret"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The store manager took the _____ for the pricing error on the signs. She said her team had followed her wrong instructions.",
    "options": [
      "forgiveness",
      "remorse",
      "regret",
      "blame"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "As team leader, Ms. Park takes full _____ for meeting the deadline. She checks everyone's progress every Monday morning.",
    "options": [
      "remorse",
      "responsibility",
      "forgiveness",
      "regret"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The hotel offered the family a free dinner to _____ for the noisy room. They also moved them to a quieter floor.",
    "options": [
      "make amends",
      "reconcile",
      "confess",
      "admit"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The two business partners finally decided to _____ after a long argument about money. Now they are opening a second shop together.",
    "options": [
      "confess",
      "excuse",
      "reconcile",
      "acknowledge"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The airline is working hard to _____ its image after many flight delays this summer. It has hired more staff and bought new planes.",
    "options": [
      "confess",
      "repair",
      "admit",
      "excuse"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Our manager gave a _____ apology to the customers who waited an hour. Everyone could tell that he really meant every word.",
    "options": [
      "ashamed",
      "embarrassed",
      "sorry",
      "sincere"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The staff wrote a _____ thank-you letter to the retiring director. Many of them cried while reading it aloud at her farewell party.",
    "options": [
      "ashamed",
      "heartfelt",
      "embarrassed",
      "sorry"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Although she won the top sales award, Ms. Wu remained _____. She thanked her whole team and said she could not succeed alone.",
    "options": [
      "ashamed",
      "embarrassed",
      "sorry",
      "humble"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Mark felt _____ of his rude comments during the meeting. The next day, he apologized to his coworkers in person.",
    "options": [
      "ashamed",
      "humble",
      "polite",
      "heartfelt"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Lisa was _____ when she called the client by the wrong name. Luckily, he laughed and said it happens to everyone.",
    "options": [
      "humble",
      "heartfelt",
      "embarrassed",
      "polite"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "All front desk staff must be _____ to guests, even when they are upset. Good manners help the hotel keep its high ratings.",
    "options": [
      "ashamed",
      "embarrassed",
      "heartfelt",
      "polite"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Mr. Lee spoke _____ to the director, even though he disagreed with her plan. He chose his words carefully and never raised his voice.",
    "options": [
      "respectfully",
      "promptly",
      "publicly",
      "personally"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please answer the survey questions _____. Your true opinions will help us improve our products and service for next year.",
    "options": [
      "formally",
      "publicly",
      "honestly",
      "graciously"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The company _____ announced the recall on national television. It wanted every customer to know about the safety problem quickly.",
    "options": [
      "respectfully",
      "publicly",
      "graciously",
      "honestly"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The new manager will be _____ introduced at the company dinner on Friday. The president will give a short welcome speech.",
    "options": [
      "formally",
      "honestly",
      "graciously",
      "respectfully"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The director will _____ call each client to explain the price change. She does not want her assistants to handle such important news.",
    "options": [
      "honestly",
      "graciously",
      "personally",
      "respectfully"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Please reply _____ to this message, since the offer ends tomorrow. Late answers cannot be accepted by our booking system.",
    "options": [
      "graciously",
      "respectfully",
      "publicly",
      "promptly"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The famous chef _____ agreed to sign photos for every guest at the event. She smiled and talked kindly with each person in line.",
    "options": [
      "formally",
      "graciously",
      "honestly",
      "publicly"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "We are pleased to _____ your invitation to the trade fair in Taipei. Our sales team will arrive on the morning of June 3.",
    "options": [
      "accept",
      "confess",
      "admit",
      "repair"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Mr. Hall felt _____ for the young intern who lost the important file. He stayed late to help her find a backup copy.",
    "options": [
      "humble",
      "polite",
      "sorry",
      "heartfelt"
    ],
    "answer": 2,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "sorry": {
    "pos": "adj.",
    "en_def": "feeling sad about something you did wrong",
    "cn_def": "抱歉的；難過的"
  },
  "regret": {
    "pos": "n.",
    "en_def": "a sad feeling about something you wish you had not done",
    "cn_def": "遺憾；懊悔"
  },
  "remorse": {
    "pos": "n.",
    "en_def": "a strong feeling of being sorry for doing something wrong",
    "cn_def": "懊悔；自責"
  },
  "forgive": {
    "pos": "v.",
    "en_def": "to stop being angry with someone who did something wrong",
    "cn_def": "原諒；寬恕"
  },
  "forgiveness": {
    "pos": "n.",
    "en_def": "the act of forgiving someone",
    "cn_def": "原諒；寬恕"
  },
  "excuse": {
    "pos": "v.",
    "en_def": "to forgive someone for something small, such as being rude or late",
    "cn_def": "原諒（小過失）；請見諒"
  },
  "admit": {
    "pos": "v.",
    "en_def": "to say that something bad is true, often that you did it",
    "cn_def": "承認"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to accept or say that something is true or exists",
    "cn_def": "承認；確認"
  },
  "confess": {
    "pos": "v.",
    "en_def": "to admit that you did something wrong, often something you kept secret",
    "cn_def": "坦白；招認"
  },
  "fault": {
    "pos": "n.",
    "en_def": "responsibility for a mistake or problem",
    "cn_def": "過錯；責任"
  },
  "blame": {
    "pos": "n.",
    "en_def": "responsibility for something bad that happened",
    "cn_def": "責備；過錯責任"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "the duty to deal with something, or being the one who caused a problem",
    "cn_def": "責任"
  },
  "make amends": {
    "pos": "v.phr.",
    "en_def": "to do something good to show you are sorry for something bad you did",
    "cn_def": "彌補；賠罪"
  },
  "reconcile": {
    "pos": "v.",
    "en_def": "to become friendly again after an argument",
    "cn_def": "和解；和好"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken or damaged, such as a relationship",
    "cn_def": "修補；修復"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "honest and really meaning what you say",
    "cn_def": "真誠的；誠懇的"
  },
  "heartfelt": {
    "pos": "adj.",
    "en_def": "felt very deeply and honestly",
    "cn_def": "衷心的；真摯的"
  },
  "humble": {
    "pos": "adj.",
    "en_def": "not proud; not thinking you are better than others",
    "cn_def": "謙虛的；謙卑的"
  },
  "ashamed": {
    "pos": "adj.",
    "en_def": "feeling bad or guilty about something you did",
    "cn_def": "羞愧的；慚愧的"
  },
  "embarrassed": {
    "pos": "adj.",
    "en_def": "feeling shy or uncomfortable because of something you did in front of others",
    "cn_def": "尷尬的；難為情的"
  },
  "polite": {
    "pos": "adj.",
    "en_def": "speaking and acting in a kind way that shows respect for others",
    "cn_def": "有禮貌的"
  },
  "respectfully": {
    "pos": "adv.",
    "en_def": "in a way that shows respect",
    "cn_def": "恭敬地；尊重地"
  },
  "honestly": {
    "pos": "adv.",
    "en_def": "in a truthful way, without hiding anything",
    "cn_def": "誠實地；坦白地"
  },
  "publicly": {
    "pos": "adv.",
    "en_def": "in front of other people or in a way that everyone can see",
    "cn_def": "公開地"
  },
  "formally": {
    "pos": "adv.",
    "en_def": "in an official and serious way",
    "cn_def": "正式地"
  },
  "personally": {
    "pos": "adv.",
    "en_def": "by yourself, not by sending someone else",
    "cn_def": "親自地"
  },
  "promptly": {
    "pos": "adv.",
    "en_def": "quickly and without delay",
    "cn_def": "迅速地；立即地"
  },
  "graciously": {
    "pos": "adv.",
    "en_def": "in a kind, polite and generous way",
    "cn_def": "親切地；寬厚地"
  },
  "accept": {
    "pos": "v.",
    "en_def": "to agree to take something that is offered, such as an apology",
    "cn_def": "接受"
  }
};

const EXTRA_GLOSSES = {};
