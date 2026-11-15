// Topic 78 Quiz Data: Consultation Letter 諮詢信
// Source word list: https://www.examword.com/group-topic/consultation-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T78 - Consultation Letter 諮詢信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "建議；勸告",
    "en_def": "an opinion about what someone should do",
    "sentence": "A: You look worried about the new office lease, so what are you going to do before you sign the contract next Monday? B: I'm going to ask our company lawyer for some {{BLANK}}, because the contract is twenty pages long and I don't fully understand the rules about repairs and early cancellation.",
    "cn": "A：你看起來很擔心新辦公室的租約，下週一簽約前你打算怎麼做？ B：我要向公司的律師尋求一些【建議】，因為合約有二十頁長，我不完全了解有關維修和提前解約的規定。"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "cn_def": "建議；提議",
    "en_def": "to give an idea for someone to think about",
    "sentence": "A: The customers keep complaining that our online store is too slow during the holiday season, so what should we tell the manager at today's meeting? B: I would {{BLANK}} that we move the website to a faster server before December, since a short delay can make shoppers leave and buy from our competitors instead.",
    "cn": "A：顧客一直抱怨我們的網路商店在假期旺季太慢，今天開會時我們該跟經理說什麼？ B：我會【建議】我們在十二月前把網站移到更快的伺服器，因為短暫的延遲就可能讓購物者離開，轉而向競爭對手購買。"
  },
  {
    "word": "suggestion",
    "pos": "n.",
    "cn_def": "建議；提議",
    "en_def": "an idea or plan that someone offers",
    "sentence": "A: Did anyone come up with a good way to cut our printing costs before the end of the financial year? B: Yes, Maria from accounting made a useful {{BLANK}} at the staff meeting: we should print reports on both sides of the paper and send most documents by email instead.",
    "cn": "A：有人想出在會計年度結束前降低印刷成本的好方法嗎？ B：有，會計部的瑪麗亞在員工會議上提出了一個實用的【建議】：我們應該雙面列印報告，而且大部分文件改用電子郵件寄送。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that someone or something is good or suitable",
    "sentence": "A: I need to book a hotel near the convention center for three clients who are flying in from Tokyo next week, but I've never stayed in that area. B: I can {{BLANK}} the Harbor View Hotel, because it is only five minutes away on foot, the rooms are quiet, and breakfast is included in the price.",
    "cn": "A：我需要為下週從東京飛來的三位客戶在會議中心附近訂飯店，但我從沒住過那一區。 B：我可以【推薦】港景飯店，因為走路只要五分鐘，房間很安靜，而且價格包含早餐。"
  },
  {
    "word": "recommendation",
    "pos": "n.",
    "cn_def": "推薦；建議",
    "en_def": "advice about what is best to do or choose",
    "sentence": "A: Why did the company decide to hire an outside firm to manage its computer security this year? B: The board followed the {{BLANK}} of the IT consultant, who found several weak points in our network last spring and said a specialist team could protect our customer data much better.",
    "cn": "A：公司今年為什麼決定聘請外部公司來管理電腦安全？ B：董事會採納了資訊顧問的【建議】，他去年春天在我們的網路中發現了幾個弱點，並表示專業團隊能更妥善地保護我們的客戶資料。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見；看法",
    "en_def": "what a person thinks about something",
    "sentence": "A: The design team has finished two different logos for our new coffee brand, and we have to choose one by Friday afternoon. B: Before we decide, let's ask a few regular customers for their {{BLANK}}, because they are the people who will see the logo on every cup they buy.",
    "cn": "A：設計團隊已經完成兩個不同的新咖啡品牌標誌，我們必須在週五下午前選出一個。 B：在決定之前，我們先問問幾位常客的【意見】吧，因為他們是每買一杯都會看到這個標誌的人。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；輔導",
    "en_def": "help and advice about how to do something",
    "sentence": "A: How are the new sales assistants getting on in their first month at the downtown branch? B: They're doing well, mainly because each of them works with a senior colleague who gives them {{BLANK}} on how to handle difficult customers and use the new payment system.",
    "cn": "A：新來的銷售助理在市中心分店的第一個月表現如何？ B：他們表現不錯，主要是因為每個人都跟著一位資深同事，由他提供如何應對難搞顧客以及使用新付款系統的【指導】。"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "協助；幫助",
    "en_def": "help or support",
    "sentence": "A: The airline lost my suitcase on the flight from Singapore, and my important presentation notes were inside it. B: Go to the service desk next to baggage claim right away, because the staff there can give you {{BLANK}} with the lost-luggage form and send the bag to your hotel once they find it.",
    "cn": "A：航空公司在新加坡飛來的航班上弄丟了我的行李箱，我重要的簡報筆記就在裡面。 B：馬上去行李提領區旁的服務台，那裡的員工可以【協助】你填寫遺失行李表格，找到後也會把行李送到你的飯店。"
  },
  {
    "word": "request",
    "pos": "n.",
    "cn_def": "請求；要求",
    "en_def": "an act of politely asking for something",
    "sentence": "A: Have you heard back from the head office about the extra staff we need for the busy summer season? B: Yes, they approved our {{BLANK}} for two part-time workers this morning, so we can start interviewing college students next week and train them before July.",
    "cn": "A：總公司有回覆我們在夏季旺季需要額外人手的事嗎？ B：有，他們今天早上批准了我們招募兩名兼職人員的【請求】，所以下週我們就能開始面試大學生，並在七月前訓練他們。"
  },
  {
    "word": "concern",
    "pos": "n.",
    "cn_def": "擔憂；關切",
    "en_def": "a feeling of worry about something",
    "sentence": "A: Why did the residents call a meeting with the construction company last night? B: They wanted to express their {{BLANK}} about the noise and dust from the new shopping center, because the workers start at six in the morning and many families have small children who can't sleep.",
    "cn": "A：居民昨晚為什麼要求跟建設公司開會？ B：他們想表達對新購物中心噪音和灰塵的【擔憂】，因為工人早上六點就開工，很多家庭有睡不著的小孩。"
  },
  {
    "word": "issue",
    "pos": "n.",
    "cn_def": "問題；議題",
    "en_def": "a problem or subject that people talk about",
    "sentence": "A: Why hasn't the online payment page worked since this morning, even though the website itself is still running? B: There's a technical {{BLANK}} with the bank's system, and our IT staff are working with them to fix it, so customers will have to pay by phone for a few hours.",
    "cn": "A：為什麼網站本身還在運作，但線上付款頁面從今天早上就無法使用？ B：銀行的系統出了技術【問題】，我們的資訊人員正在和他們一起修復，所以顧客在接下來幾小時必須用電話付款。"
  },
  {
    "word": "matter",
    "pos": "n.",
    "cn_def": "事情；問題",
    "en_def": "a subject or situation that you must deal with",
    "sentence": "A: Should I tell my team leader that two of our suppliers have sent the wrong products three times this month? B: Yes, this is a serious {{BLANK}}, so you should report it to her today, and she will probably want to discuss it with the purchasing manager before we place any more orders.",
    "cn": "A：我該告訴組長我們有兩家供應商這個月已經三次送錯貨嗎？ B：該，這是件嚴重的【事情】，你今天就應該向她報告，她很可能會想在我們再下訂單前和採購經理討論。"
  },
  {
    "word": "situation",
    "pos": "n.",
    "cn_def": "情況；處境",
    "en_def": "the things that are happening at a certain time and place",
    "sentence": "A: How is the hotel dealing with the power cut that started during the wedding dinner last night? B: The manager explained the {{BLANK}} to all the guests, moved the party to the garden with candles, and gave everyone a free breakfast, so most people were actually quite happy in the end.",
    "cn": "A：飯店怎麼處理昨晚婚宴晚餐期間開始的停電？ B：經理向所有賓客說明了【情況】，把派對移到點著蠟燭的花園，並招待大家免費早餐，所以到最後多數人其實都相當開心。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand",
    "sentence": "A: Many of our older customers say the new banking app is confusing, and some of them have stopped using it completely. B: Then let's make a short video that can {{BLANK}} each step slowly, from logging in to paying bills, and post it on our website and in every branch.",
    "cn": "A：許多年長的顧客說新的銀行應用程式很難懂，有些人已經完全不用了。 B：那我們來做一支短片，從登入到繳費，慢慢【解釋】每個步驟，並放在我們的網站和每家分行。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "釐清；闡明",
    "en_def": "to make something clearer by giving more details",
    "sentence": "A: The client's email says they want the brochures 'as soon as possible,' but I'm not sure whether that means this week or next month. B: You should call them this afternoon to {{BLANK}} the delivery date, because we need to know how many workers to put on the printing machines.",
    "cn": "A：客戶的電子郵件說要「盡快」拿到小冊子，但我不確定那是指這週還是下個月。 B：你今天下午應該打電話給他們【釐清】交貨日期，因為我們需要知道要安排多少工人操作印刷機。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with other people",
    "sentence": "A: Why are the department heads meeting in the large conference room this afternoon instead of their usual office? B: They need to {{BLANK}} next year's budget with the finance director, and since about fifteen people are coming, the small room simply doesn't have enough chairs for everyone.",
    "cn": "A：各部門主管今天下午為什麼在大會議室開會，而不是平常的辦公室？ B：他們需要和財務長【討論】明年的預算，而且約有十五人會來，小會議室根本沒有足夠的椅子。"
  },
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮",
    "en_def": "to think carefully about something before deciding",
    "sentence": "A: The software company in Taichung offered me a higher salary, but it would mean moving away from my family. B: You should {{BLANK}} all the costs before you say yes, because rent, travel and time away from home can be more important than the extra money you earn each month.",
    "cn": "A：台中那家軟體公司開給我更高的薪水，但那代表我得離開家人。 B：你答應之前應該【考慮】所有代價，因為房租、交通和離家的時間可能比你每個月多賺的錢更重要。"
  },
  {
    "word": "alternative",
    "pos": "n.",
    "cn_def": "替代方案；其他選擇",
    "en_def": "another thing you can choose instead",
    "sentence": "A: The train workers are on strike tomorrow, so how will our staff get to the trade fair in Kaohsiung on time? B: The best {{BLANK}} is to rent a large bus for the whole team, which costs a little more but lets us leave from the office together at seven o'clock.",
    "cn": "A：鐵路員工明天罷工，我們的員工要怎麼準時到高雄參加商展？ B：最好的【替代方案】是為整個團隊租一輛大巴士，雖然貴一點，但我們可以七點一起從辦公室出發。"
  },
  {
    "word": "option",
    "pos": "n.",
    "cn_def": "選項；選擇",
    "en_def": "something you can choose",
    "sentence": "A: Our customers want faster delivery, but we can't afford to open another warehouse this year, so what can we do? B: One {{BLANK}} is to work with a local delivery company in each city, which would let us send most orders within one day without buying new trucks.",
    "cn": "A：顧客想要更快的配送，但我們今年負擔不起再開一間倉庫，那能怎麼辦？ B：一個【選項】是在每個城市和當地的快遞公司合作，這樣不用買新卡車，就能在一天內寄出大部分訂單。"
  },
  {
    "word": "decision",
    "pos": "n.",
    "cn_def": "決定",
    "en_def": "a choice that you make after thinking",
    "sentence": "A: Has the manager chosen which of the two candidates will lead the new marketing team in Hong Kong? B: Not yet, she says she will make a final {{BLANK}} after the second interviews on Thursday, because both people have strong skills and she wants to see how they work with the team.",
    "cn": "A：經理選好兩位應徵者中誰要帶領香港的新行銷團隊了嗎？ B：還沒，她說會在週四第二次面試後做出最後【決定】，因為兩人能力都很強，她想看看他們和團隊合作的情形。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments about how good or useful something is",
    "sentence": "A: How do you know whether the new training course for sales staff is actually working? B: At the end of every class, we ask the trainees to fill out a short online form and give us honest {{BLANK}}, and then we change the lessons that they found boring or hard to follow.",
    "cn": "A：你怎麼知道銷售人員的新訓練課程到底有沒有效？ B：每堂課結束時，我們都請學員填寫一份簡短的線上表單並給我們誠實的【回饋】，然後我們會修改他們覺得無聊或難以理解的課程。"
  },
  {
    "word": "expert",
    "pos": "n.",
    "cn_def": "專家",
    "en_def": "a person who knows a lot about a subject",
    "sentence": "A: Our factory uses too much electricity, and the monthly bills have nearly doubled since last winter. B: Let's invite an energy {{BLANK}} to visit the factory next week, because someone with special knowledge can show us which machines waste the most power and how to save money.",
    "cn": "A：我們工廠用電太多，每月電費從去年冬天以來幾乎翻倍了。 B：我們邀請一位能源【專家】下週來參觀工廠吧，因為有專業知識的人可以告訴我們哪些機器最耗電，以及如何省錢。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing something",
    "sentence": "A: Why did you choose Mr. Chen to manage the new restaurant, even though he is younger than the other applicants? B: He has ten years of {{BLANK}} in busy hotel kitchens, and he has already trained many young cooks, so I believe he can lead the team well from the first day.",
    "cn": "A：為什麼你選陳先生管理新餐廳，即使他比其他應徵者年輕？ B：他有十年在忙碌飯店廚房工作的【經驗】，也已經訓練過許多年輕廚師，所以我相信他從第一天起就能把團隊帶好。"
  },
  {
    "word": "qualified",
    "pos": "adj.",
    "cn_def": "合格的；有資格的",
    "en_def": "having the right training or skills for a job",
    "sentence": "A: The hospital needs to hire three new nurses for the night shift, but only a few people have applied so far. B: We should keep the job ad online for another month, because we must find {{BLANK}} staff who hold a nursing license and can safely care for patients on their own.",
    "cn": "A：醫院需要為夜班招聘三名新護理師，但目前只有少數人應徵。 B：我們應該讓徵才廣告再刊登一個月，因為我們必須找到持有護理執照、能獨立安全照顧病人的【合格】人員。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a chance to do something",
    "sentence": "A: Are you going to apply for the six-month job in our London office that the manager mentioned this morning? B: Definitely, because it's a great {{BLANK}} to improve my English, meet international clients, and learn how the European market works before I return to Taipei next year.",
    "cn": "A：你要申請經理今天早上提到的倫敦辦公室六個月職缺嗎？ B：一定會，因為這是一個提升英文、認識國際客戶、並在明年回台北前了解歐洲市場運作的好【機會】。"
  },
  {
    "word": "helpful",
    "pos": "adj.",
    "cn_def": "有幫助的；樂於助人的",
    "en_def": "useful or ready to help",
    "sentence": "A: How was your first week at the new branch, and did you have any trouble learning the computer system? B: It went well, because my coworkers were very {{BLANK}}; they showed me how to enter orders, answered all my questions, and even invited me to lunch on my first day.",
    "cn": "A：你在新分店的第一週如何？學電腦系統有遇到困難嗎？ B：很順利，因為我的同事都很【樂於助人】，他們教我怎麼輸入訂單、回答我所有問題，第一天甚至還邀我一起吃午餐。"
  },
  {
    "word": "useful",
    "pos": "adj.",
    "cn_def": "有用的；實用的",
    "en_def": "helping you to do or get something",
    "sentence": "A: Do you think the time-management workshop last Saturday was worth the money the company paid for it? B: Yes, it was really {{BLANK}}, because the trainer showed us simple ways to plan our week, and I have already finished two reports early by following her ideas.",
    "cn": "A：你覺得上週六的時間管理工作坊值得公司付的錢嗎？ B：值得，真的很【實用】，因為講師教我們簡單規劃一週的方法，我照著她的點子已經提早完成兩份報告了。"
  },
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的；有利的",
    "en_def": "having a good effect",
    "sentence": "A: Why is the company giving everyone a free gym membership starting next month? B: The managers believe that regular exercise is {{BLANK}} for both health and work, because staff who feel fit usually take fewer sick days and have more energy in the afternoon.",
    "cn": "A：公司為什麼從下個月開始給每個人免費的健身房會員？ B：主管們認為規律運動對健康和工作都【有益】，因為覺得身體健康的員工通常請病假較少，下午也更有精神。"
  },
  {
    "word": "appropriate",
    "pos": "adj.",
    "cn_def": "適當的；合適的",
    "en_def": "suitable or right for a situation",
    "sentence": "A: I've been invited to a formal dinner with our Japanese partners next Friday, but I'm not sure what to wear. B: A dark suit and a simple tie would be {{BLANK}}, because the dinner is at an expensive restaurant and the partners will probably be dressed quite formally too.",
    "cn": "A：我受邀參加下週五和日本合作夥伴的正式晚宴，但不確定要穿什麼。 B：深色西裝配簡單的領帶會很【合適】，因為晚宴在一家昂貴的餐廳，合作夥伴很可能也會穿得相當正式。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "producing the result that you want",
    "sentence": "A: Sales of our new juice were very low in the first month, so what changed after that? B: We started giving free samples in supermarkets on weekends, and it was a very {{BLANK}} way to attract shoppers, because sales doubled within three weeks without any TV advertising.",
    "cn": "A：我們的新果汁第一個月銷量很差，之後有什麼改變？ B：我們開始在週末於超市提供免費試喝，這是吸引購物者非常【有效】的方法，因為不靠任何電視廣告，銷量在三週內就翻倍了。"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find an answer to a problem",
    "sentence": "A: Two of our designers have been arguing for days about the colors for the new catalog, and the work has stopped. B: I'll meet with both of them tomorrow morning to {{BLANK}} the disagreement, because the catalog must go to the printer by Friday and we can't lose any more time.",
    "cn": "A：我們兩位設計師為了新型錄的配色已經爭論好幾天，工作都停擺了。 B：我明天早上會和他們兩人見面來【解決】這個分歧，因為型錄週五前一定要送印，我們不能再浪費時間了。"
  },
  {
    "word": "problem",
    "pos": "n.",
    "cn_def": "問題；難題",
    "en_def": "something difficult that needs to be dealt with",
    "sentence": "A: Why are so many passengers waiting at the gate when the flight to Seoul was supposed to leave an hour ago? B: There is a {{BLANK}} with one of the engines, so the mechanics are checking it carefully, and the airline is giving everyone meal coupons while they wait.",
    "cn": "A：飛首爾的班機一小時前就該起飛了，為什麼還有這麼多乘客在登機門等候？ B：其中一具引擎有【問題】，所以技師正在仔細檢查，航空公司也在乘客等待時發放餐券給大家。"
  },
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "困難",
    "en_def": "something that makes it hard to do something",
    "sentence": "A: Why is the new branch in Bangkok opening two months later than we planned in the spring? B: The managers had great {{BLANK}} finding a building in a good location at a fair price, and after that the local government took several weeks to approve the business license.",
    "cn": "A：曼谷新分店為什麼比我們春天計畫的晚了兩個月開幕？ B：主管們在尋找地點好、價格合理的建築物時遇到很大的【困難】，之後當地政府又花了好幾週才核准營業執照。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something new and difficult that tests your ability",
    "sentence": "A: How do you feel about leading the project to open our first store in Vietnam next year? B: It will be a big {{BLANK}} for me, because I don't speak the language and the market is new to us, but I'm excited and I've already started taking Vietnamese lessons.",
    "cn": "A：你對明年帶領在越南開設第一家店的專案有什麼感想？ B：這對我來說會是一大【挑戰】，因為我不會說當地語言，市場對我們也很陌生，但我很興奮，而且已經開始上越南語課了。"
  },
  {
    "word": "inquiry",
    "pos": "n.",
    "cn_def": "詢問；查詢",
    "en_def": "a question asking for information",
    "sentence": "A: Did anyone reply to the customer who emailed yesterday about our prices for large group tours to Hualien? B: Yes, I answered her {{BLANK}} this morning and sent a full price list, and she said she will book a tour for forty employees from her company in October.",
    "cn": "A：昨天寄電子郵件詢問花蓮大型團體旅遊價格的那位顧客，有人回覆她嗎？ B：有，我今天早上回覆了她的【詢問】並寄了完整價目表，她說十月會幫公司四十位員工預訂行程。"
  },
  {
    "word": "thank you in advance",
    "pos": "phr.",
    "cn_def": "先謝謝您；預先致謝",
    "en_def": "a polite phrase to thank someone before they help you",
    "sentence": "A: How should I end my email to the hotel manager asking whether we can use their meeting room for free next month? B: Write that you would be very grateful for their help, then finish with '{{BLANK}} for your time,' because it sounds polite and shows that you expect a kind reply.",
    "cn": "A：我寫給飯店經理、詢問下個月能否免費使用他們會議室的電子郵件該怎麼結尾？ B：寫上你會非常感謝他們的協助，然後用「【先謝謝您】撥冗回覆」結尾，因為這聽起來很有禮貌，也表示你期待友善的回覆。"
  }
];

const MCQS = [
  {
    "q": "Before buying a new car, Tom asked his father for _____. His father told him to compare prices at three dealers.",
    "options": [
      "inquiry",
      "difficulty",
      "advice",
      "experience"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Several staff members said the meeting room was too cold. One of them decided to _____ that we buy a small heater.",
    "options": [
      "explain",
      "clarify",
      "resolve",
      "suggest"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The hotel guest asked which local restaurant was best for seafood. The receptionist was happy to _____ a small place near the harbor.",
    "options": [
      "recommend",
      "clarify",
      "resolve",
      "discuss"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The doctor's _____ was to rest for one week. Mr. Lin followed it and returned to work feeling much better.",
    "options": [
      "difficulty",
      "recommendation",
      "inquiry",
      "situation"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Everyone at the meeting shared a different _____ about the new logo. Some people loved it, but others thought it looked old-fashioned.",
    "options": [
      "opinion",
      "guidance",
      "assistance",
      "difficulty"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "New employees receive careful _____ from a mentor during their first three months. This helps them learn the company's rules quickly.",
    "options": [
      "concern",
      "guidance",
      "inquiry",
      "problem"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "If you need _____ with your luggage, please call the front desk. A porter will come to your room within five minutes.",
    "options": [
      "opinion",
      "decision",
      "expert",
      "assistance"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The customer made a _____ for a quieter room. The hotel moved him to the top floor the same evening.",
    "options": [
      "situation",
      "difficulty",
      "request",
      "opportunity"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Parents expressed strong _____ about the safety of the new playground. The city agreed to check all the equipment again.",
    "options": [
      "option",
      "concern",
      "alternative",
      "experience"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The printer has a paper jam again. Please report the _____ to the IT department so they can fix it today.",
    "options": [
      "opinion",
      "opportunity",
      "expert",
      "issue"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Thank you for your letter about the late payment. We will look into the _____ and contact you by Friday.",
    "options": [
      "expert",
      "experience",
      "matter",
      "opportunity"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Heavy snow closed the airport for two days. The airline explained the _____ to passengers and gave them free hotel rooms.",
    "options": [
      "situation",
      "expert",
      "assistance",
      "opportunity"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The new tax rules are hard to understand. Our accountant will _____ them to the staff at Monday's meeting.",
    "options": [
      "suggest",
      "explain",
      "resolve",
      "recommend"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Some points in the contract are not clear. Could you please _____ what 'final payment' means in section four?",
    "options": [
      "clarify",
      "resolve",
      "recommend",
      "suggest"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The two managers sat down together to _____ the budget over coffee. They talked for two hours about every cost.",
    "options": [
      "resolve",
      "suggest",
      "discuss",
      "recommend"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Please take a few days to _____ our job offer carefully. You can give us your answer next Wednesday.",
    "options": [
      "explain",
      "clarify",
      "resolve",
      "consider"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The main road is closed for repairs this week. Drivers should use the coastal highway as an _____.",
    "options": [
      "expert",
      "inquiry",
      "alternative",
      "issue"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Customers can pay by cash, card, or phone. The new mobile payment _____ is the most popular with young shoppers.",
    "options": [
      "option",
      "concern",
      "difficulty",
      "challenge"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "After weeks of discussion, the board reached a _____. The company will move its head office to Taichung next year.",
    "options": [
      "guidance",
      "decision",
      "assistance",
      "experience"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "We sent a short survey to every customer after the event. Their _____ will help us plan a better event next year.",
    "options": [
      "difficulty",
      "challenge",
      "situation",
      "feedback"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The museum invited an art _____ to check the old painting. She said it was over three hundred years old.",
    "options": [
      "expert",
      "opinion",
      "inquiry",
      "option"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Applicants must have at least five years of _____ in sales. Please include details of past jobs in your application.",
    "options": [
      "problem",
      "concern",
      "request",
      "experience"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Only _____ electricians are allowed to repair the wiring in this building. They must show their license before starting work.",
    "options": [
      "beneficial",
      "qualified",
      "useful",
      "effective"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The conference is a great _____ to meet buyers from other countries. Many small companies find new partners there.",
    "options": [
      "difficulty",
      "concern",
      "opportunity",
      "issue"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The staff at the information desk were very _____. They gave us a free map and showed us the fastest way to the museum.",
    "options": [
      "qualified",
      "helpful",
      "beneficial",
      "appropriate"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "These old boxes are no longer _____ to us. Please throw them away or take them to the recycling center.",
    "options": [
      "useful",
      "qualified",
      "appropriate",
      "effective"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The new trade agreement will be _____ to both countries. Exports are expected to rise by ten percent next year.",
    "options": [
      "qualified",
      "appropriate",
      "beneficial",
      "effective"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Jeans and T-shirts are not _____ for the awards dinner. Guests should wear formal clothes such as suits or evening dresses.",
    "options": [
      "qualified",
      "beneficial",
      "effective",
      "appropriate"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The new medicine is highly _____ against headaches. Most patients feel better within twenty minutes of taking it.",
    "options": [
      "effective",
      "qualified",
      "appropriate",
      "helpful"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The two companies hired a lawyer to _____ their dispute. They signed a new agreement after three long meetings.",
    "options": [
      "explain",
      "suggest",
      "resolve",
      "consider"
    ],
    "answer": 2,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "advice": {
    "pos": "n.",
    "en_def": "an opinion about what someone should do",
    "cn_def": "建議；勸告"
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to give an idea for someone to think about",
    "cn_def": "建議；提議"
  },
  "suggestion": {
    "pos": "n.",
    "en_def": "an idea or plan that someone offers",
    "cn_def": "建議；提議"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that someone or something is good or suitable",
    "cn_def": "推薦；建議"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "advice about what is best to do or choose",
    "cn_def": "推薦；建議"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what a person thinks about something",
    "cn_def": "意見；看法"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about how to do something",
    "cn_def": "指導；輔導"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help or support",
    "cn_def": "協助；幫助"
  },
  "request": {
    "pos": "n.",
    "en_def": "an act of politely asking for something",
    "cn_def": "請求；要求"
  },
  "concern": {
    "pos": "n.",
    "en_def": "a feeling of worry about something",
    "cn_def": "擔憂；關切"
  },
  "issue": {
    "pos": "n.",
    "en_def": "a problem or subject that people talk about",
    "cn_def": "問題；議題"
  },
  "matter": {
    "pos": "n.",
    "en_def": "a subject or situation that you must deal with",
    "cn_def": "事情；問題"
  },
  "situation": {
    "pos": "n.",
    "en_def": "the things that are happening at a certain time and place",
    "cn_def": "情況；處境"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand",
    "cn_def": "解釋；說明"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something clearer by giving more details",
    "cn_def": "釐清；闡明"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論"
  },
  "consider": {
    "pos": "v.",
    "en_def": "to think carefully about something before deciding",
    "cn_def": "考慮"
  },
  "alternative": {
    "pos": "n.",
    "en_def": "another thing you can choose instead",
    "cn_def": "替代方案；其他選擇"
  },
  "option": {
    "pos": "n.",
    "en_def": "something you can choose",
    "cn_def": "選項；選擇"
  },
  "decision": {
    "pos": "n.",
    "en_def": "a choice that you make after thinking",
    "cn_def": "決定"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or useful something is",
    "cn_def": "回饋；意見"
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person who knows a lot about a subject",
    "cn_def": "專家"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing something",
    "cn_def": "經驗"
  },
  "qualified": {
    "pos": "adj.",
    "en_def": "having the right training or skills for a job",
    "cn_def": "合格的；有資格的"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something",
    "cn_def": "機會"
  },
  "helpful": {
    "pos": "adj.",
    "en_def": "useful or ready to help",
    "cn_def": "有幫助的；樂於助人的"
  },
  "useful": {
    "pos": "adj.",
    "en_def": "helping you to do or get something",
    "cn_def": "有用的；實用的"
  },
  "beneficial": {
    "pos": "adj.",
    "en_def": "having a good effect",
    "cn_def": "有益的；有利的"
  },
  "appropriate": {
    "pos": "adj.",
    "en_def": "suitable or right for a situation",
    "cn_def": "適當的；合適的"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "producing the result that you want",
    "cn_def": "有效的"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find an answer to a problem",
    "cn_def": "解決"
  },
  "problem": {
    "pos": "n.",
    "en_def": "something difficult that needs to be dealt with",
    "cn_def": "問題；難題"
  },
  "difficulty": {
    "pos": "n.",
    "en_def": "something that makes it hard to do something",
    "cn_def": "困難"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something new and difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "inquiry": {
    "pos": "n.",
    "en_def": "a question asking for information",
    "cn_def": "詢問；查詢"
  },
  "thank you in advance": {
    "pos": "phr.",
    "en_def": "a polite phrase to thank someone before they help you",
    "cn_def": "先謝謝您；預先致謝"
  }
};

const EXTRA_GLOSSES = {};
