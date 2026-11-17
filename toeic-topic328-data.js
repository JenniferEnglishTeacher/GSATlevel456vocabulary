// Topic 328 Quiz Data: Replace 替換
// Source word list: https://www.examword.com/group-topic/replace — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T328 - Replace 替換",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "replacement",
    "pos": "n.",
    "cn_def": "替代者；替換品；接替的人",
    "en_def": "a person or thing that takes the place of another",
    "sentence": "A: The new receptionist is leaving at the end of the month to study abroad, so what is the plan for the front desk while we look for someone else? B: Human resources has already posted the job online, and they hope to hire a {{BLANK}} within two weeks so that she can train the new person before she goes.",
    "cn": "A：新的接待員月底就要離職出國念書了，在我們找其他人的期間，前台有什麼安排？ B：人資部已經在網路上張貼職缺了，他們希望在兩週內聘到一位【接替人選】，好讓她在離開前能訓練新人。"
  },
  {
    "word": "substitute",
    "pos": "v.",
    "cn_def": "代替；用…替換",
    "en_def": "to use one thing in place of another",
    "sentence": "A: The supplier just called to say they have run out of the organic butter we use for our pastries, and the bakery opens in three hours. What should we do? B: Let's {{BLANK}} olive oil for butter in the muffins this morning, and I will ask the manager to put a small note on the menu for our customers.",
    "cn": "A：供應商剛打電話說，我們做糕點用的有機奶油已經缺貨了，而麵包店三小時後就要開門。我們該怎麼辦？ B：今天早上我們就用橄欖油【代替】瑪芬裡的奶油吧，我也會請經理在菜單上放一張小字條告知顧客。"
  },
  {
    "word": "swap",
    "pos": "v.",
    "cn_def": "交換；調換",
    "en_def": "to give something and get something else in return",
    "sentence": "A: I'm supposed to work the night shift at the hotel on Friday, but my sister is getting married that evening, and I really can't miss the ceremony. B: Why don't you ask Kevin if he would like to {{BLANK}} shifts with you? He told me yesterday that he wants Monday off to visit his parents.",
    "cn": "A：我週五應該在飯店值夜班，但我姊姊那天晚上結婚，我真的不能錯過典禮。 B：你何不問問凱文是否願意跟你【交換】班？他昨天跟我說他想要週一休假去探望父母。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "交換；更換（商品）",
    "en_def": "to give something back and get another thing instead",
    "sentence": "A: I bought this jacket online for my business trip to Seoul next week, but it is much too small around the shoulders. Can I still get a different one? B: Of course. As long as you still have the receipt and the tags, you can {{BLANK}} it for a larger size at any of our stores within thirty days.",
    "cn": "A：我在網路上買了這件外套要穿去下週的首爾出差，但肩膀的地方太小了。我還能換一件嗎？ B：當然可以。只要您還留著收據和吊牌，三十天內都可以到我們任何一家門市【換】大一號的尺寸。"
  },
  {
    "word": "switch",
    "pos": "v.",
    "cn_def": "轉換；改換",
    "en_def": "to change from one thing to another",
    "sentence": "A: Our monthly phone bills have gone up again, and the finance department has asked every team to find ways to cut costs before the end of the quarter. B: I compared several companies last week, and if we {{BLANK}} to a cheaper mobile provider, we could save almost three hundred dollars a month without losing any service.",
    "cn": "A：我們每個月的電話費又漲了，財務部要求每個團隊在本季結束前想辦法削減成本。 B：我上週比較了好幾家公司，如果我們【改用】比較便宜的電信業者，每個月可以省下將近三百美元，而且服務完全不受影響。"
  },
  {
    "word": "renew",
    "pos": "v.",
    "cn_def": "更新；續約；延長期限",
    "en_def": "to make something valid for a longer time",
    "sentence": "A: I just noticed that my passport expires in two months, and I have to travel to Singapore for the trade fair in early spring. Is that going to be a problem? B: It might be, because many countries require six months of validity, so you should {{BLANK}} it online this week before the busy holiday season begins.",
    "cn": "A：我剛發現我的護照兩個月後就到期了，而我初春必須去新加坡參加貿易展。這會有問題嗎？ B：可能會，因為很多國家要求護照效期要有六個月，所以你應該在忙碌的假期開始前，這週就上網【更新】護照。"
  },
  {
    "word": "renewal",
    "pos": "n.",
    "cn_def": "更新；續約；續期",
    "en_def": "the act of making an agreement or document valid for longer",
    "sentence": "A: The lease on our downtown office ends in March, and the landlord wants to raise the rent by ten percent. Have you decided what to do yet? B: Not yet. The {{BLANK}} of the contract must be signed by the end of January, so the directors will meet next week to compare it with two cheaper buildings nearby.",
    "cn": "A：我們市中心辦公室的租約三月到期，房東想把租金調漲百分之十。你決定好怎麼做了嗎？ B：還沒。合約的【續約】必須在一月底前簽署，所以董事們下週會開會，把它和附近兩棟比較便宜的大樓做比較。"
  },
  {
    "word": "update",
    "pos": "v.",
    "cn_def": "更新；使最新",
    "en_def": "to add the newest information to something",
    "sentence": "A: The client said the prices in our product catalog are wrong, and she was confused when she placed her order this morning. Who is responsible for the website? B: That's Mark in the marketing team. I'll ask him to {{BLANK}} the price list on the website this afternoon and send the client a short apology email.",
    "cn": "A：客戶說我們產品目錄上的價格是錯的，她今天早上下單時覺得很困惑。誰負責網站？ B：是行銷團隊的馬克。我會請他今天下午【更新】網站上的價目表，並寄一封簡短的道歉信給客戶。"
  },
  {
    "word": "upgrade",
    "pos": "v.",
    "cn_def": "升級；提升",
    "en_def": "to improve something by replacing it with a better or newer version",
    "sentence": "A: Our computers are so slow that the designers often wait ten minutes just to open a large file, and they are getting really frustrated. B: I know. The IT manager has finally approved the budget, so next month we will {{BLANK}} all the laptops in the design department to faster models with more memory.",
    "cn": "A：我們的電腦慢到設計師常常光是開一個大檔案就要等十分鐘，他們真的越來越沮喪。 B：我知道。資訊部經理終於核准預算了，所以下個月我們會把設計部所有的筆電【升級】成速度更快、記憶體更大的機型。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to change something to make it better or more correct",
    "sentence": "A: The director read our sales proposal last night, and she said some of the numbers in the second section are already out of date. B: Then we need to {{BLANK}} the report before tomorrow's meeting with the investors, so let's check the latest figures from accounting and correct each page together after lunch.",
    "cn": "A：主任昨晚看了我們的銷售企劃案，她說第二部分有些數據已經過時了。 B：那我們必須在明天和投資人開會前【修改】報告，所以我們午餐後一起核對會計部最新的數字，並逐頁修正。"
  },
  {
    "word": "change",
    "pos": "v.",
    "cn_def": "改變；更改",
    "en_def": "to make something different",
    "sentence": "A: The airline just sent me a message saying that my flight to Tokyo has been delayed by five hours, so I will miss my first meeting with the client. B: In that case, you should call the client right away and ask if she is willing to {{BLANK}} the meeting time to Thursday afternoon instead.",
    "cn": "A：航空公司剛傳訊息說我飛東京的班機延誤五小時，所以我會錯過和客戶的第一場會議。 B：既然這樣，你應該馬上打電話給客戶，問她是否願意把會議時間【改】到週四下午。"
  },
  {
    "word": "alternate",
    "pos": "v.",
    "cn_def": "輪流；交替",
    "en_def": "to take turns doing two things, one after the other",
    "sentence": "A: Working at the reception desk every morning is boring for me, and I feel I'm not learning anything new about the hotel business. B: Talk to the supervisor. Some staff members {{BLANK}} between the front desk and the reservations office each week, which helps them build different skills and keeps the job interesting.",
    "cn": "A：每天早上在櫃台工作對我來說很無聊，我覺得自己沒有學到任何飯店業的新東西。 B：去跟主管談談吧。有些員工每週在櫃台和訂房部之間【輪流】工作，這能幫助他們培養不同的技能，也讓工作保持有趣。"
  },
  {
    "word": "supersede",
    "pos": "v.",
    "cn_def": "取代；接替（舊規定等）",
    "en_def": "to take the place of an older rule, law or system",
    "sentence": "A: I'm confused about the travel rules, because the handbook says we can book business class for flights over six hours. Is that still true? B: No, it isn't. The new expense policy that the board approved last month will {{BLANK}} the old handbook, so all staff must now fly economy unless the trip is longer than ten hours.",
    "cn": "A：我對差旅規定很困惑，因為手冊上說六小時以上的航班可以訂商務艙。現在還是這樣嗎？ B：不是了。董事會上個月核准的新費用政策將【取代】舊手冊，所以現在除非行程超過十小時，否則所有員工都必須搭經濟艙。"
  },
  {
    "word": "overwrite",
    "pos": "v.",
    "cn_def": "覆寫；覆蓋（檔案）",
    "en_def": "to replace old computer data by saving new data in the same place",
    "sentence": "A: I spent all morning working on the budget spreadsheet, but now I'm worried because Lisa is also editing the same file from the shared drive. B: Be careful, because if she saves her version after you, the system will {{BLANK}} your changes, so you should save a copy with a different name right now.",
    "cn": "A：我整個早上都在弄預算試算表，但現在我很擔心，因為麗莎也在共用雲端硬碟上編輯同一個檔案。 B：小心點，因為如果她在你之後儲存她的版本，系統就會【覆蓋】你的修改，所以你應該現在就用不同的檔名另存一份。"
  },
  {
    "word": "remove",
    "pos": "v.",
    "cn_def": "移除；拿走",
    "en_def": "to take something away from a place",
    "sentence": "A: The visitors from the head office will arrive at ten, but the meeting room is still full of old boxes and broken chairs from last week's training session. B: Don't worry. I've asked the cleaning staff to {{BLANK}} everything from the room before nine and set up new chairs and a projector for the presentation.",
    "cn": "A：總公司的訪客十點會到，但會議室裡還堆滿上週訓練課程留下的舊箱子和壞掉的椅子。 B：別擔心。我已經請清潔人員在九點前把房間裡的東西全部【清走】，並擺好新的椅子和投影機準備簡報。"
  },
  {
    "word": "displace",
    "pos": "v.",
    "cn_def": "取代；排擠；使離開原位",
    "en_def": "to force someone or something out of its usual place or job",
    "sentence": "A: Many of the cashiers at the supermarket chain are worried about the new self-checkout machines that the company installed in all its stores this year. B: I understand why. Some experts believe the machines could {{BLANK}} hundreds of workers over the next few years, although the company says it will retrain staff for other positions.",
    "cn": "A：連鎖超市的許多收銀員都很擔心公司今年在所有門市安裝的新自助結帳機。 B：我能理解。有些專家認為，這些機器在未來幾年可能會【取代】數百名員工，不過公司表示會重新培訓員工擔任其他職位。"
  },
  {
    "word": "replacement part",
    "pos": "n.phr.",
    "cn_def": "替換零件；備用零件",
    "en_def": "a new piece used to take the place of a broken piece of a machine",
    "sentence": "A: The printer on the third floor has been broken since Monday, and everyone has to walk upstairs to print their documents. When will it be fixed? B: The technician said the motor is damaged, so he has ordered a {{BLANK}} from the manufacturer, and it should arrive by Thursday at the latest.",
    "cn": "A：三樓的印表機從週一就壞了，每個人都得走上樓去印文件。什麼時候會修好？ B：技術人員說馬達壞了，所以他已經向製造商訂了一個【替換零件】，最晚週四應該會送到。"
  },
  {
    "word": "stand-in",
    "pos": "n.",
    "cn_def": "代替者；代理人；替身",
    "en_def": "a person who takes someone's place for a short time",
    "sentence": "A: Our main speaker for the product launch just called in sick, and the event starts in less than two hours. Who can talk to the reporters instead? B: The sales director knows the new phone very well, so she has agreed to act as a {{BLANK}} and give the presentation in his place.",
    "cn": "A：我們產品發表會的主講人剛打電話請病假，而活動不到兩小時就要開始了。誰能代替他和記者說明？ B：業務總監對這支新手機非常熟悉，所以她已經同意擔任【代理人】，代替他上台簡報。"
  },
  {
    "word": "cover",
    "pos": "v.",
    "cn_def": "代班；代替（某人工作）",
    "en_def": "to do someone's work while they are away",
    "sentence": "A: I have a dentist appointment tomorrow morning at ten, but I'm scheduled to answer customer calls at the help desk until noon. B: No problem. I don't have any meetings tomorrow, so I can {{BLANK}} for you until you come back, and you can take my afternoon shift next week.",
    "cn": "A：我明天早上十點要看牙醫，但我排班要在服務台接聽客戶電話到中午。 B：沒問題。我明天沒有任何會議，所以在你回來之前我可以【代】你的班，下週你再幫我上下午班就好。"
  },
  {
    "word": "phase out",
    "pos": "v.phr.",
    "cn_def": "逐步淘汰；逐步停止使用",
    "en_def": "to stop using something slowly, in stages",
    "sentence": "A: Why did the restaurant stop giving customers plastic straws and paper cups with their drinks? Some regular diners have been complaining about it. B: The owners decided to gradually {{BLANK}} all single-use plastics over the next year, because the city is introducing new environmental rules and they want to save money too.",
    "cn": "A：餐廳為什麼不再隨飲料提供顧客塑膠吸管和紙杯？有些常客一直在抱怨。 B：老闆們決定在接下來一年內逐步【淘汰】所有一次性塑膠製品，因為市政府要實施新的環保法規，而且他們也想省錢。"
  },
  {
    "word": "phase in",
    "pos": "v.phr.",
    "cn_def": "逐步導入；分階段實施",
    "en_def": "to start using something slowly, in stages",
    "sentence": "A: Will all the employees have to start using the new time-tracking app on the first day of next month, or will we have some time to learn it? B: Management plans to {{BLANK}} the app over three months, starting with the sales team in January and then moving on to the other departments once any problems are fixed.",
    "cn": "A：所有員工下個月一號就必須開始使用新的工時記錄應用程式，還是我們會有時間學習？ B：管理階層計畫在三個月內逐步【導入】這個應用程式，一月先從業務團隊開始，等問題都解決後再推廣到其他部門。"
  },
  {
    "word": "reinstall",
    "pos": "v.",
    "cn_def": "重新安裝",
    "en_def": "to put a computer program or machine in again",
    "sentence": "A: My laptop keeps freezing whenever I open the accounting program, and I have to finish the monthly report for my manager before five o'clock today. B: The IT support team usually tells people to delete the program and {{BLANK}} it from the company website, which fixes the problem in most cases and only takes about twenty minutes.",
    "cn": "A：我每次打開會計軟體筆電就當機，而我今天五點前必須完成給經理的月報。 B：資訊支援團隊通常會叫大家把程式刪除，再從公司網站上【重新安裝】，這在大多數情況下都能解決問題，而且只要二十分鐘左右。"
  },
  {
    "word": "reissue",
    "pos": "v.",
    "cn_def": "重新發行；重新開立",
    "en_def": "to give out a document or ticket again, often with changes",
    "sentence": "A: I just noticed that the invoice we sent to the hotel last week has the wrong company address and an old tax number on it. B: That's a serious mistake, so please ask the accounting department to {{BLANK}} the invoice with the correct details today and send it to the hotel manager by email.",
    "cn": "A：我剛發現我們上週寄給飯店的發票上，公司地址寫錯了，統一編號也是舊的。 B：這是很嚴重的錯誤，所以請會計部今天用正確的資料【重新開立】發票，並用電子郵件寄給飯店經理。"
  },
  {
    "word": "refill",
    "pos": "v.",
    "cn_def": "重新裝滿；補充",
    "en_def": "to fill something again",
    "sentence": "A: The water dispenser in the staff lounge has been empty since this morning, and several people have complained that they have nothing to drink at their desks. B: I'll call the delivery company right away and ask them to come and {{BLANK}} it this afternoon, and I'll also order extra bottles for next week's busy schedule.",
    "cn": "A：員工休息室的飲水機從今天早上就空了，好幾個人抱怨他們在座位上沒水喝。 B：我馬上打電話給配送公司，請他們今天下午過來【重新裝滿】，我也會為下週忙碌的行程多訂幾桶水。"
  },
  {
    "word": "revamp",
    "pos": "v.",
    "cn_def": "改造；翻新；改進",
    "en_def": "to change something a lot so that it looks or works better",
    "sentence": "A: Sales at our café have been falling for six months, and younger customers say the place looks old and the menu is boring. What can we do? B: The owners have hired a designer to {{BLANK}} the whole shop, with brighter lights, comfortable sofas, and a new menu that includes healthy breakfast choices.",
    "cn": "A：我們咖啡店的業績已經連續下滑六個月了，年輕顧客說店面看起來很老舊，菜單也很無聊。我們能怎麼做？ B：老闆們已經請了一位設計師來【全面翻新】整間店，換上更明亮的燈光、舒適的沙發，以及包含健康早餐選擇的新菜單。"
  },
  {
    "word": "modernize",
    "pos": "v.",
    "cn_def": "使現代化",
    "en_def": "to make something more modern by using new methods or equipment",
    "sentence": "A: The factory still uses machines from the 1990s, and our competitors can produce twice as many parts in the same amount of time. B: That's why the board has agreed to spend five million dollars to {{BLANK}} the production line next year, which should make the factory faster, safer, and much more efficient.",
    "cn": "A：工廠還在使用一九九○年代的機器，而我們的競爭對手在同樣時間內能生產兩倍的零件。 B：所以董事會已經同意明年花五百萬美元來【現代化】生產線，這應該能讓工廠更快、更安全，也更有效率。"
  }
];

const MCQS = [
  {
    "q": "Our receptionist will retire in June after twenty years. The manager has started interviewing candidates to find a suitable _____ for her.",
    "options": [
      "replacement",
      "inspection",
      "renewal",
      "attendance"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The kitchen ran out of fresh cream this afternoon. The chef decided to _____ milk for cream in tonight's soup.",
    "options": [
      "remove",
      "overwrite",
      "substitute",
      "revise"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Tom and Jenny both wanted different holidays this year. They agreed to _____ vacation dates so that each could attend a family event.",
    "options": [
      "displace",
      "swap",
      "reissue",
      "modernize"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The shoes I ordered online were the wrong color. The store let me _____ them for a black pair at no extra cost.",
    "options": [
      "supersede",
      "reinstall",
      "revamp",
      "exchange"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our electricity bills were much too high last winter. The company decided to _____ to a cheaper energy provider in March.",
    "options": [
      "renew",
      "overwrite",
      "switch",
      "refill"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "My gym membership expires at the end of this month. I plan to _____ it for another year because the price is reasonable.",
    "options": [
      "renew",
      "displace",
      "alternate",
      "overwrite"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please check the date on your business license carefully. The application for _____ must be submitted at least thirty days before it expires.",
    "options": [
      "stand-in",
      "collection",
      "entrance",
      "renewal"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Customers have complained that our online store shows old prices. The web team will _____ the product information by Friday morning.",
    "options": [
      "displace",
      "update",
      "swap",
      "alternate"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The hotel guest was unhappy with his small, noisy room. The manager offered to _____ him to a suite on the top floor for free.",
    "options": [
      "upgrade",
      "refill",
      "overwrite",
      "reissue"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The editor found several errors in the first draft of the annual report. The writers must _____ it carefully before it goes to print.",
    "options": [
      "swap",
      "displace",
      "revise",
      "refill"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My train was cancelled because of the heavy snow. I had to _____ my travel plans and stay at a hotel near the station.",
    "options": [
      "supersede",
      "change",
      "reinstall",
      "refill"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The two nurses share the evening duty at the clinic. They _____ between the front desk and the patient rooms every other day.",
    "options": [
      "refill",
      "reissue",
      "modernize",
      "alternate"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The updated safety guidelines will take effect on May 1. They _____ all earlier instructions about using the warehouse forklifts.",
    "options": [
      "refill",
      "alternate",
      "supersede",
      "reinstall"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Always save your file under a new name before you edit it. Otherwise, you might _____ the original version by mistake.",
    "options": [
      "overwrite",
      "renew",
      "alternate",
      "modernize"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The new office policy does not allow personal items on the desks. Please _____ all photos and plants before the inspection on Monday.",
    "options": [
      "renew",
      "supersede",
      "reissue",
      "remove"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Officials warn that the planned highway may _____ around two hundred families. Many residents are worried about where they will live.",
    "options": [
      "refill",
      "displace",
      "revise",
      "reinstall"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The coffee machine in the break room stopped working yesterday. The technician has ordered a _____ that should arrive within three days.",
    "options": [
      "replacement part",
      "stand-in",
      "renewal",
      "job title"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The lead actor in the company play caught a cold before the show. Luckily, a _____ learned his lines in just one day.",
    "options": [
      "replacement part",
      "renewal",
      "stand-in",
      "refund"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Sarah is attending a training course all day tomorrow. Could you _____ for her at the front desk until five o'clock?",
    "options": [
      "swap",
      "cover",
      "revise",
      "overwrite"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The bank will stop printing paper statements for its customers. It plans to _____ them over the next two years and use email instead.",
    "options": [
      "phase in",
      "show off",
      "look up",
      "phase out"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The new uniforms will not be given to all staff at once. The hotel will _____ them gradually, starting with the restaurant team.",
    "options": [
      "phase out",
      "put off",
      "phase in",
      "give up"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "After the virus attack, many files on my computer were damaged. The technician had to _____ the operating system completely.",
    "options": [
      "reinstall",
      "alternate",
      "renew",
      "swap"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Your train ticket was printed with the wrong date by mistake. The station office will _____ it free of charge if you bring your receipt.",
    "options": [
      "alternate",
      "displace",
      "supersede",
      "reissue"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many cafés now let customers bring their own cups. Some will even _____ your coffee for half price after the first cup.",
    "options": [
      "revise",
      "refill",
      "displace",
      "supersede"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The museum has had fewer visitors for several years. Its directors plan to _____ the main exhibition hall with interactive displays.",
    "options": [
      "revamp",
      "refill",
      "overwrite",
      "reissue"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The city's train system has not changed in fifty years. The government will spend billions to _____ the stations and trains.",
    "options": [
      "refill",
      "alternate",
      "modernize",
      "overwrite"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "I lost my company ID card at the airport yesterday. The security office will issue a _____ after I complete a short form.",
    "options": [
      "applicant",
      "replacement",
      "attitude",
      "journey"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Our contract with the cleaning company ends next month. The manager is negotiating the terms of its _____ for another two years.",
    "options": [
      "stand-in",
      "pedestrian",
      "landfill",
      "renewal"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our phone company has a special offer this month. Customers can _____ to the newest model for only ten dollars more.",
    "options": [
      "overwrite",
      "displace",
      "upgrade",
      "reissue"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Many car makers are planning to stop selling gas-powered vehicles. They will _____ these models by 2035 and focus on electric cars.",
    "options": [
      "phase out",
      "phase in",
      "take in",
      "end up"
    ],
    "answer": 0,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "replacement": {
    "pos": "n.",
    "en_def": "a person or thing that takes the place of another",
    "cn_def": "替代者；替換品；接替的人"
  },
  "substitute": {
    "pos": "v.",
    "en_def": "to use one thing in place of another",
    "cn_def": "代替；用…替換"
  },
  "swap": {
    "pos": "v.",
    "en_def": "to give something and get something else in return",
    "cn_def": "交換；調換"
  },
  "exchange": {
    "pos": "v.",
    "en_def": "to give something back and get another thing instead",
    "cn_def": "交換；更換（商品）"
  },
  "switch": {
    "pos": "v.",
    "en_def": "to change from one thing to another",
    "cn_def": "轉換；改換"
  },
  "renew": {
    "pos": "v.",
    "en_def": "to make something valid for a longer time",
    "cn_def": "更新；續約；延長期限"
  },
  "renewal": {
    "pos": "n.",
    "en_def": "the act of making an agreement or document valid for longer",
    "cn_def": "更新；續約；續期"
  },
  "update": {
    "pos": "v.",
    "en_def": "to add the newest information to something",
    "cn_def": "更新；使最新"
  },
  "upgrade": {
    "pos": "v.",
    "en_def": "to improve something by replacing it with a better or newer version",
    "cn_def": "升級；提升"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something to make it better or more correct",
    "cn_def": "修改；修訂"
  },
  "change": {
    "pos": "v.",
    "en_def": "to make something different",
    "cn_def": "改變；更改"
  },
  "alternate": {
    "pos": "v.",
    "en_def": "to take turns doing two things, one after the other",
    "cn_def": "輪流；交替"
  },
  "supersede": {
    "pos": "v.",
    "en_def": "to take the place of an older rule, law or system",
    "cn_def": "取代；接替（舊規定等）"
  },
  "overwrite": {
    "pos": "v.",
    "en_def": "to replace old computer data by saving new data in the same place",
    "cn_def": "覆寫；覆蓋（檔案）"
  },
  "remove": {
    "pos": "v.",
    "en_def": "to take something away from a place",
    "cn_def": "移除；拿走"
  },
  "displace": {
    "pos": "v.",
    "en_def": "to force someone or something out of its usual place or job",
    "cn_def": "取代；排擠；使離開原位"
  },
  "replacement part": {
    "pos": "n.phr.",
    "en_def": "a new piece used to take the place of a broken piece of a machine",
    "cn_def": "替換零件；備用零件"
  },
  "stand-in": {
    "pos": "n.",
    "en_def": "a person who takes someone's place for a short time",
    "cn_def": "代替者；代理人；替身"
  },
  "cover": {
    "pos": "v.",
    "en_def": "to do someone's work while they are away",
    "cn_def": "代班；代替（某人工作）"
  },
  "phase out": {
    "pos": "v.phr.",
    "en_def": "to stop using something slowly, in stages",
    "cn_def": "逐步淘汰；逐步停止使用"
  },
  "phase in": {
    "pos": "v.phr.",
    "en_def": "to start using something slowly, in stages",
    "cn_def": "逐步導入；分階段實施"
  },
  "reinstall": {
    "pos": "v.",
    "en_def": "to put a computer program or machine in again",
    "cn_def": "重新安裝"
  },
  "reissue": {
    "pos": "v.",
    "en_def": "to give out a document or ticket again, often with changes",
    "cn_def": "重新發行；重新開立"
  },
  "refill": {
    "pos": "v.",
    "en_def": "to fill something again",
    "cn_def": "重新裝滿；補充"
  },
  "revamp": {
    "pos": "v.",
    "en_def": "to change something a lot so that it looks or works better",
    "cn_def": "改造；翻新；改進"
  },
  "modernize": {
    "pos": "v.",
    "en_def": "to make something more modern by using new methods or equipment",
    "cn_def": "使現代化"
  }
};

const EXTRA_GLOSSES = {};
