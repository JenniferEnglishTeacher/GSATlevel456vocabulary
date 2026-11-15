// Topic 81 Quiz Data: Conversation 對話
// Source word list: https://www.examword.com/group-topic/conversation — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T81 - Conversation 對話",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "lecturer",
    "pos": "n.",
    "cn_def": "講師",
    "en_def": "a person who teaches at a university or gives talks",
    "sentence": "A: Who will lead the two-day training course on business writing that the human resources department has organized for new employees next month? B: A {{BLANK}} from the local university will teach it, because she has taught report writing to adults for many years and also worked as an editor for a newspaper.",
    "cn": "A：人資部門為新進員工安排了下個月為期兩天的商業寫作訓練課程，由誰來帶？ B：當地大學的一位【講師】會來教，因為她多年來一直教成人寫報告，也曾在報社擔任編輯。"
  },
  {
    "word": "impress",
    "pos": "v.",
    "cn_def": "使印象深刻；使欽佩",
    "en_def": "to make someone admire or respect you",
    "sentence": "A: Why did the sales director invite you to join the meeting with the new clients from Singapore this afternoon? B: She wants me to {{BLANK}} them with the short video I made about our factory, because she thinks it shows our quality control better than any long report could.",
    "cn": "A：業務總監為什麼邀請你參加今天下午和新加坡新客戶的會議？ B：她希望我用我製作的那支關於我們工廠的短片讓他們【留下深刻印象】，因為她認為那支影片比任何冗長的報告都更能展現我們的品質管控。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to agree that something is true, often something bad",
    "sentence": "A: How did the project manager react when the client asked why the new website was still not working last Friday? B: He decided to {{BLANK}} that our team had made a mistake in the payment system, and then he promised to fix the problem before the end of the weekend.",
    "cn": "A：上週五客戶問為什麼新網站還不能用時，專案經理有什麼反應？ B：他決定【承認】我們團隊在付款系統上出了錯，接著承諾在週末結束前修好問題。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；激發",
    "en_def": "to make someone want to do something or work harder",
    "sentence": "A: What do you usually say to the new sales staff when they feel tired after a long week of phone calls without many results? B: I try to {{BLANK}} them by sharing stories of my own first year, when I also failed often but slowly learned how to win customers' trust.",
    "cn": "A：新進業務人員打了一整週電話卻沒什麼成果、感到疲累時，你通常會對他們說什麼？ B：我會試著分享我自己第一年的故事來【激勵】他們，那時我也常常失敗，但慢慢學會了如何贏得客戶的信任。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and interesting ideas",
    "sentence": "A: Why did the marketing team choose Lisa to plan the opening event for our new café downtown? B: She always has {{BLANK}} ideas, such as the free coffee tasting she organized last year, and her events usually attract many young customers who share photos online.",
    "cn": "A：行銷團隊為什麼選擇麗莎來籌劃我們市中心新咖啡店的開幕活動？ B：她總是有很【有創意的】點子，像是她去年舉辦的免費咖啡品嚐會，而且她的活動通常會吸引很多會在網路上分享照片的年輕顧客。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "working well and producing the result you want",
    "sentence": "A: Have you found a good way to keep the weekly team meeting short now that so many people join it online from different offices? B: The most {{BLANK}} method has been sending the agenda one day early, so everyone comes prepared and we usually finish in under thirty minutes.",
    "cn": "A：現在有那麼多人從不同辦公室線上參加，你有找到讓每週團隊會議保持簡短的好方法嗎？ B：最【有效的】方法是提前一天寄出議程，這樣大家都有備而來，我們通常不到三十分鐘就能結束。"
  },
  {
    "word": "monopolize",
    "pos": "v.",
    "cn_def": "獨占；壟斷",
    "en_def": "to take all of something, such as a conversation, so others cannot share it",
    "sentence": "A: Why did the chairperson set a two-minute time limit for each speaker at the residents' meeting last night? B: At the last meeting, one man tried to {{BLANK}} the discussion for almost an hour, so many other neighbors never had a chance to share their opinions about the parking problem.",
    "cn": "A：主席昨晚為什麼在住戶會議上給每位發言者設兩分鐘的時間限制？ B：上次開會時有一位男士幾乎花了一個小時想【獨占】討論，所以很多其他鄰居根本沒有機會分享他們對停車問題的意見。"
  },
  {
    "word": "anxiety",
    "pos": "n.",
    "cn_def": "焦慮；不安",
    "en_def": "a feeling of worry or nervousness",
    "sentence": "A: Why does Tom always practice his presentations so many times in the empty meeting room before he talks to the board? B: He feels a lot of {{BLANK}} when he speaks in front of senior managers, so repeating the slides again and again helps him stay calm and remember the numbers.",
    "cn": "A：湯姆為什麼在向董事會報告前，總是在空會議室裡練習那麼多次？ B：他在高階主管面前說話時會感到很【焦慮】，所以一遍又一遍地練習投影片能幫助他保持冷靜並記住數字。"
  },
  {
    "word": "nearly",
    "pos": "adv.",
    "cn_def": "幾乎；將近",
    "en_def": "almost; not quite",
    "sentence": "A: How long did the phone call with the angry customer from the hotel chain last this morning? B: It went on for {{BLANK}} two hours, because he wanted to discuss every single problem with the last delivery, and I could not end the call politely until he felt satisfied.",
    "cn": "A：今天早上和那位飯店連鎖集團的憤怒客戶通電話，講了多久？ B：講了【將近】兩個小時，因為他想討論上一批貨的每一個問題，在他滿意之前我無法禮貌地結束通話。"
  },
  {
    "word": "utmost",
    "pos": "adj.",
    "cn_def": "最大的；極度的",
    "en_def": "greatest; most important",
    "sentence": "A: Why does the hotel manager spend so much time training the front desk staff on how to speak with guests? B: She believes that every guest deserves the {{BLANK}} respect, even when they are tired or rude after a long flight, because a kind conversation can change their whole stay.",
    "cn": "A：飯店經理為什麼花那麼多時間訓練櫃檯人員如何和客人說話？ B：她相信每位客人都應該得到【最大的】尊重，即使他們在長途飛行後很疲累或無禮也一樣，因為一段親切的對話可以改變他們整個住宿的體驗。"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "cn_def": "提高；增強",
    "en_def": "to make something better or improve its quality",
    "sentence": "A: Why did the company pay for all customer service staff to take a weekend course on telephone skills? B: The managers want to {{BLANK}} the way we speak with callers, because last year's survey showed that many customers felt our replies were too short and not very friendly.",
    "cn": "A：公司為什麼出錢讓所有客服人員參加週末的電話技巧課程？ B：主管們想【提升】我們和來電者說話的方式，因為去年的調查顯示，很多客戶覺得我們的回覆太簡短，也不太友善。"
  },
  {
    "word": "captivating",
    "pos": "adj.",
    "cn_def": "迷人的；引人入勝的",
    "en_def": "very interesting and holding your attention",
    "sentence": "A: What did you think of the speaker who opened the marketing conference in the main hall this morning? B: She was truly {{BLANK}}, because she told funny stories about her first failed business, and the whole crowd stayed quiet and listened carefully for the full forty minutes.",
    "cn": "A：你覺得今天早上在主廳為行銷研討會開場的講者怎麼樣？ B：她真的很【引人入勝】，因為她講了自己第一次創業失敗的有趣故事，全場群眾在整整四十分鐘裡都安靜專心地聆聽。"
  },
  {
    "word": "suffer",
    "pos": "v.",
    "cn_def": "受損；受苦",
    "en_def": "to become worse or be hurt by something",
    "sentence": "A: Why did the director decide to stop sending so many emails and hold short face-to-face meetings every Monday instead? B: She noticed that teamwork began to {{BLANK}} when people only wrote messages, because small problems became big arguments that could have been solved in a quick talk.",
    "cn": "A：主任為什麼決定不再寄那麼多電子郵件，改成每週一開簡短的面對面會議？ B：她注意到大家只用寫訊息溝通時，團隊合作開始【受到影響】，因為小問題變成了大爭吵，而這些本來只要簡單談一下就能解決。"
  },
  {
    "word": "judgmental",
    "pos": "adj.",
    "cn_def": "愛評斷人的；武斷的",
    "en_def": "too quick to criticize or form opinions about people",
    "sentence": "A: Why do so many junior staff members feel comfortable sharing their problems with the new team leader? B: She listens carefully and is never {{BLANK}}, so people can explain their mistakes honestly without worrying that she will think they are lazy or not smart enough.",
    "cn": "A：為什麼那麼多資淺員工都願意跟新的組長分享他們的問題？ B：她會仔細聆聽，而且從不【愛評斷人】，所以大家可以誠實說出自己的錯誤，不用擔心她會認為他們懶惰或不夠聰明。"
  },
  {
    "word": "aspersion",
    "pos": "n.",
    "cn_def": "誹謗；中傷",
    "en_def": "an unkind remark that attacks someone's character",
    "sentence": "A: Why was the accountant so upset after the budget meeting with the finance director yesterday afternoon? B: When she asked about the missing receipts, he made a rude {{BLANK}} on her honesty in front of the whole team, even though she had done nothing wrong and had reported the problem herself.",
    "cn": "A：會計師昨天下午和財務長開完預算會議後，為什麼那麼生氣？ B：她詢問遺失的收據時，他當著整個團隊的面無禮地【中傷】她的誠信，即使她什麼都沒做錯，而且問題還是她自己報告的。"
  },
  {
    "word": "devote",
    "pos": "v.",
    "cn_def": "投入；奉獻",
    "en_def": "to give time or energy to something",
    "sentence": "A: How will the new manager improve communication between the sales team and the warehouse staff this year? B: She plans to {{BLANK}} the first hour of every Wednesday to a joint meeting, so both groups can talk about orders, delays and customer complaints before small problems grow.",
    "cn": "A：新經理今年要如何改善業務團隊和倉庫人員之間的溝通？ B：她打算把每週三的第一個小時【專門用於】聯合會議，讓兩邊可以在小問題擴大之前討論訂單、延誤和客戶抱怨。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to get ready or make something ready",
    "sentence": "A: Do you have any advice before my first phone interview with the airline company tomorrow morning? B: You should {{BLANK}} short answers to common questions about your experience, and keep your notes next to the phone, because it is easy to forget important details when you feel nervous.",
    "cn": "A：明天早上我第一次跟航空公司進行電話面試，你有什麼建議嗎？ B：你應該針對常見的經歷問題【準備】簡短的回答，並把筆記放在電話旁邊，因為緊張時很容易忘記重要的細節。"
  },
  {
    "word": "material",
    "pos": "n.",
    "cn_def": "資料；材料",
    "en_def": "information or documents used for a purpose",
    "sentence": "A: What will we give the visitors from the Japanese bank when they arrive for the product presentation on Thursday? B: Each guest will receive a folder with printed {{BLANK}} about our services, including price lists and contact details, so they can read it again on the train home.",
    "cn": "A：週四日本銀行的訪客來參加產品簡報時，我們要給他們什麼？ B：每位客人會收到一個資料夾，裡面有關於我們服務的印刷【資料】，包括價目表和聯絡方式，讓他們可以在回程的火車上再看一遍。"
  },
  {
    "word": "critique",
    "pos": "n.",
    "cn_def": "評論；評析",
    "en_def": "a careful judgment of the good and bad parts of something",
    "sentence": "A: Why did the design team ask the senior architect to look at their plans for the new library before the meeting with the city? B: They wanted an honest {{BLANK}} of their ideas, because she has built many public buildings and can quickly see weak points that the city officials might question.",
    "cn": "A：設計團隊為什麼在和市政府開會前，請資深建築師看他們的新圖書館設計圖？ B：他們想要聽到對自己構想的誠實【評論】，因為她蓋過許多公共建築，能很快看出市府官員可能會質疑的弱點。"
  },
  {
    "word": "intend",
    "pos": "v.",
    "cn_def": "打算；意圖",
    "en_def": "to plan or mean to do something",
    "sentence": "A: Are you going to tell the client about the shipping delay today, or will you wait until the goods arrive at the port? B: I {{BLANK}} to call him this afternoon, because hearing bad news early is always better than finding out at the last minute when nothing can be changed.",
    "cn": "A：你今天要告訴客戶出貨延誤的事，還是要等貨到港口再說？ B：我【打算】今天下午打電話給他，因為提早聽到壞消息總比在最後一刻、什麼都無法改變時才知道要好。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the group of people who watch or listen to a talk or show",
    "sentence": "A: How many people are expected to attend the CEO's speech at the annual meeting in the convention center next week? B: The {{BLANK}} will be about five hundred people, including investors and reporters, so the IT team is testing the microphones and the big screen several times before the event.",
    "cn": "A：下週在會議中心的年度大會上，預計有多少人會來聽執行長的演講？ B：【聽眾】大約有五百人，包括投資人和記者，所以資訊團隊在活動前會測試麥克風和大螢幕好幾次。"
  },
  {
    "word": "grab",
    "pos": "v.",
    "cn_def": "抓住；吸引",
    "en_def": "to quickly get or take something, such as attention",
    "sentence": "A: How did the speaker get everyone to listen so quickly at the start of the sales training this morning? B: She began with a surprising fact about lost customers to {{BLANK}} our attention, and after that nobody looked at their phones until the coffee break at ten thirty.",
    "cn": "A：今天早上業務訓練一開始，講者是怎麼讓大家那麼快就專心聽講的？ B：她一開始先講了一個關於流失客戶的驚人事實來【抓住】我們的注意力，之後直到十點半咖啡休息前都沒有人看手機。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維持；保持",
    "en_def": "to keep something at the same level or in good condition",
    "sentence": "A: What is the secret to keeping a good relationship with clients who live in other countries and rarely visit our office? B: We try to {{BLANK}} regular contact through video calls every month, and we also send short updates by email, so they always know what is happening with their orders.",
    "cn": "A：和住在其他國家、很少來我們辦公室的客戶保持良好關係的祕訣是什麼？ B：我們每個月透過視訊通話盡量【維持】固定聯繫，也會用電子郵件寄簡短的最新消息，讓他們隨時知道訂單的狀況。"
  },
  {
    "word": "entirely",
    "pos": "adv.",
    "cn_def": "完全地",
    "en_def": "completely",
    "sentence": "A: Do you agree with the new plan to move all customer support calls to the office in Manila next year? B: I am not {{BLANK}} sure it is a good idea, because our customers here like talking to staff who know the local market, but I understand that it will save money.",
    "cn": "A：你同意明年把所有客服電話移到馬尼拉辦公室的新計畫嗎？ B：我不【完全】確定這是個好主意，因為這裡的客戶喜歡和了解在地市場的員工說話，但我明白這樣可以省錢。"
  },
  {
    "word": "ignoring",
    "pos": "v.",
    "cn_def": "忽視；不理會",
    "en_def": "not paying attention to someone or something on purpose (the -ing form of ignore)",
    "sentence": "A: Why did the restaurant owner have a long talk with the new waiter after the lunch rush yesterday? B: Several customers said he kept {{BLANK}} them when they raised their hands, so the owner explained that guests must always feel noticed, even when the dining room is very busy.",
    "cn": "A：餐廳老闆昨天午餐尖峰過後為什麼和新來的服務生談了很久？ B：好幾位客人說他們舉手時他一直【不理會】他們，所以老闆向他說明，即使用餐區非常忙碌，也一定要讓客人覺得自己有被注意到。"
  },
  {
    "word": "pretend",
    "pos": "v.",
    "cn_def": "假裝",
    "en_def": "to act as if something is true when it is not",
    "sentence": "A: What should I do if a customer asks me a technical question about the software that I really cannot answer? B: Never {{BLANK}} to know the answer, because giving wrong information causes bigger problems later; just say you will check with the engineers and call the customer back within an hour.",
    "cn": "A：如果客戶問我一個我真的答不出來的軟體技術問題，我該怎麼辦？ B：絕對不要【假裝】知道答案，因為給錯誤的資訊之後會造成更大的問題；只要說你會向工程師確認，並在一小時內回電給客戶就好。"
  },
  {
    "word": "attentive",
    "pos": "adj.",
    "cn_def": "專心的；體貼周到的",
    "en_def": "listening or watching carefully; caring about others' needs",
    "sentence": "A: Why do so many business travelers choose to stay at that small hotel near the train station instead of the bigger ones? B: The staff are very {{BLANK}}, so they remember each guest's name and needs, and they always notice when someone needs a taxi or an early breakfast before a meeting.",
    "cn": "A：為什麼那麼多商務旅客選擇住在火車站附近那家小飯店，而不是大飯店？ B：那裡的員工非常【體貼周到】，會記得每位客人的名字和需求，也總是能注意到誰需要計程車，或在開會前需要提早吃早餐。"
  },
  {
    "word": "empathic",
    "pos": "adj.",
    "cn_def": "有同理心的",
    "en_def": "able to understand and share other people's feelings",
    "sentence": "A: What kind of person are you looking for to answer calls on the new customer care hotline next month? B: We need someone who is calm and {{BLANK}}, because many callers will be worried about their bills, and they need to feel that the person on the phone understands their situation.",
    "cn": "A：下個月新的客戶關懷專線，你們想找什麼樣的人來接電話？ B：我們需要冷靜又【有同理心的】人，因為很多來電者會擔心他們的帳單，他們需要覺得電話那頭的人理解他們的處境。"
  },
  {
    "word": "emotionally",
    "pos": "adv.",
    "cn_def": "情緒上地；感情上",
    "en_def": "in a way that is related to feelings",
    "sentence": "A: Why did the HR manager take a short break during the meeting with the employee who was leaving the company? B: The conversation became quite {{BLANK}} difficult, because the employee had worked here for twenty years and started crying while talking about her friends in the accounting team.",
    "cn": "A：人資經理和那位即將離職的員工開會時，為什麼中途休息了一下？ B：那次談話在【情緒上】變得相當難受，因為那位員工在這裡工作了二十年，談到會計組的朋友時哭了起來。"
  },
  {
    "word": "rephrase",
    "pos": "v.",
    "cn_def": "換句話說；改述",
    "en_def": "to say something again using different words",
    "sentence": "A: What did you do when the visitors from Brazil did not understand your explanation of the new return policy? B: I tried to {{BLANK}} it using shorter sentences and simpler words, and I also drew a small chart on the whiteboard, so they finally understood how the process works.",
    "cn": "A：巴西來的訪客聽不懂你對新退貨政策的說明時，你怎麼做？ B：我試著用比較短的句子和比較簡單的字【換個方式說】，還在白板上畫了一張小圖表，他們終於了解流程是怎麼運作的。"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "cn_def": "反思；深思",
    "en_def": "to think carefully about something",
    "sentence": "A: Why does our team leader always ask us to wait a day before replying to difficult emails from clients? B: She wants us to {{BLANK}} on what the client really needs, because a quick reply written when we feel angry often makes the situation worse instead of solving it.",
    "cn": "A：我們組長為什麼總是要我們等一天再回覆客戶的棘手郵件？ B：她希望我們先【仔細思考】客戶真正需要的是什麼，因為生氣時匆忙寫的回覆，常常會讓情況更糟而不是解決問題。"
  },
  {
    "word": "mimic",
    "pos": "v.",
    "cn_def": "模仿",
    "en_def": "to copy the way someone speaks or acts",
    "sentence": "A: How did you learn to speak so naturally on the phone with clients from London when you first joined the company? B: I used to listen to recorded calls of our best sales staff and {{BLANK}} their tone and polite phrases, and after a few months it felt completely natural to me.",
    "cn": "A：你剛進公司時，是怎麼學會跟倫敦客戶講電話講得那麼自然的？ B：我以前會聽我們最優秀業務人員的通話錄音，並【模仿】他們的語氣和禮貌用語，幾個月後就覺得完全自然了。"
  }
];

const MCQS = [
  {
    "q": "Professor Chen is a popular _____ at the business school. Her classes on negotiation are always full by the first week.",
    "options": [
      "lecturer",
      "audience",
      "critique",
      "anxiety"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The young engineer worked late every night to _____ his new boss. His hard work was finally noticed at the end of the month.",
    "options": [
      "pretend",
      "impress",
      "suffer",
      "intend"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The supplier finally had to _____ that the parts were damaged before shipping. It agreed to send replacements at no extra cost.",
    "options": [
      "grab",
      "devote",
      "admit",
      "mimic"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Bonuses are not the only way to _____ staff. Many workers also want clear goals and praise from their managers.",
    "options": [
      "rephrase",
      "suffer",
      "pretend",
      "motivate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The agency is looking for a _____ designer for its new campaign. Applicants should send examples of their most original work.",
    "options": [
      "judgmental",
      "utmost",
      "creative",
      "captivating"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Short, clear emails are the most _____ way to share updates with busy clients. Long messages are often left unread.",
    "options": [
      "effective",
      "utmost",
      "judgmental",
      "empathic"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please do not _____ the meeting with your own questions. Everyone on the team should have a chance to speak.",
    "options": [
      "enhance",
      "rephrase",
      "devote",
      "monopolize"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Many new employees feel great _____ before their first presentation. Practicing with a coworker can help them feel calmer.",
    "options": [
      "lecturer",
      "anxiety",
      "aspersion",
      "material"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The museum staff handled the old paintings with the _____ care. Each one was wrapped and packed by hand.",
    "options": [
      "creative",
      "judgmental",
      "captivating",
      "utmost"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The hotel added a new spa to _____ the experience of its guests. Bookings rose by twenty percent in the first month.",
    "options": [
      "admit",
      "pretend",
      "enhance",
      "monopolize"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The tour guide told _____ stories about the old castle. The visitors listened quietly and asked many questions afterward.",
    "options": [
      "judgmental",
      "captivating",
      "utmost",
      "attentive"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Product quality began to _____ when the factory reduced its number of inspectors. Customer complaints doubled within six months.",
    "options": [
      "suffer",
      "impress",
      "grab",
      "mimic"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Good managers listen to problems without being _____. Their staff then feel safe to report mistakes early.",
    "options": [
      "utmost",
      "judgmental",
      "captivating",
      "creative"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The lawyer said the article cast an unfair _____ on his client's honesty. He asked the newspaper to print a correction.",
    "options": [
      "audience",
      "lecturer",
      "material",
      "aspersion"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The company will _____ two days a month to staff training. Employees can choose courses in languages, sales or computer skills.",
    "options": [
      "devote",
      "intend",
      "grab",
      "suffer"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Please _____ a short report on last month's sales before Friday. The director wants to review it on Monday morning.",
    "options": [
      "monopolize",
      "pretend",
      "prepare",
      "suffer"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The training _____ will be sent to all participants by email. Please read it before the first session begins.",
    "options": [
      "material",
      "audience",
      "anxiety",
      "aspersion"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The editor gave a detailed _____ of my article. She pointed out both its strong points and its weak points.",
    "options": [
      "lecturer",
      "anxiety",
      "critique",
      "audience"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "We _____ to open three new stores in Taichung next year. The first one will be near the high-speed rail station.",
    "options": [
      "grab",
      "intend",
      "reflect",
      "maintain"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The concert hall can hold an _____ of two thousand people. Tickets for Saturday's show sold out in one hour.",
    "options": [
      "critique",
      "material",
      "anxiety",
      "audience"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The first line of an advertisement must _____ the reader's attention. Otherwise, people will simply turn the page.",
    "options": [
      "suffer",
      "intend",
      "grab",
      "admit"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "It is important to _____ eye contact during a job interview. It shows the interviewer that you are confident and honest.",
    "options": [
      "devote",
      "pretend",
      "rephrase",
      "maintain"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Do not _____ to understand the client's request if you are confused. Ask questions until everything is completely clear.",
    "options": [
      "pretend",
      "grab",
      "suffer",
      "impress"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The waiter was polite and _____ throughout the dinner. He refilled our glasses before we even had to ask.",
    "options": [
      "utmost",
      "attentive",
      "judgmental",
      "captivating"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Nurses need to be _____ when they talk to worried families. A kind word can make a stressful day much easier.",
    "options": [
      "utmost",
      "captivating",
      "judgmental",
      "empathic"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "If the customer looks confused, try to _____ your explanation in simpler words. Avoid technical terms they may not know.",
    "options": [
      "monopolize",
      "rephrase",
      "suffer",
      "admit"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "After each project, the team meets to _____ on what went well. They also discuss what they can improve next time.",
    "options": [
      "impress",
      "grab",
      "reflect",
      "devote"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Children often _____ the way their parents speak. They copy their words, their tone and even their hand movements.",
    "options": [
      "mimic",
      "devote",
      "admit",
      "intend"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The new manager worked hard to _____ good relations with the labor union. As a result, there were no strikes that year.",
    "options": [
      "suffer",
      "maintain",
      "rephrase",
      "pretend"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The speaker used funny stories to keep her _____ interested. Nobody left the hall before the end of the talk.",
    "options": [
      "audience",
      "anxiety",
      "aspersion",
      "lecturer"
    ],
    "answer": 0,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "lecturer": {
    "pos": "n.",
    "en_def": "a person who teaches at a university or gives talks",
    "cn_def": "講師"
  },
  "impress": {
    "pos": "v.",
    "en_def": "to make someone admire or respect you",
    "cn_def": "使印象深刻；使欽佩"
  },
  "admit": {
    "pos": "v.",
    "en_def": "to agree that something is true, often something bad",
    "cn_def": "承認"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to do something or work harder",
    "cn_def": "激勵；激發"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and interesting ideas",
    "cn_def": "有創意的"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "working well and producing the result you want",
    "cn_def": "有效的"
  },
  "monopolize": {
    "pos": "v.",
    "en_def": "to take all of something, such as a conversation, so others cannot share it",
    "cn_def": "獨占；壟斷"
  },
  "anxiety": {
    "pos": "n.",
    "en_def": "a feeling of worry or nervousness",
    "cn_def": "焦慮；不安"
  },
  "nearly": {
    "pos": "adv.",
    "en_def": "almost; not quite",
    "cn_def": "幾乎；將近"
  },
  "utmost": {
    "pos": "adj.",
    "en_def": "greatest; most important",
    "cn_def": "最大的；極度的"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to make something better or improve its quality",
    "cn_def": "提高；增強"
  },
  "captivating": {
    "pos": "adj.",
    "en_def": "very interesting and holding your attention",
    "cn_def": "迷人的；引人入勝的"
  },
  "suffer": {
    "pos": "v.",
    "en_def": "to become worse or be hurt by something",
    "cn_def": "受損；受苦"
  },
  "judgmental": {
    "pos": "adj.",
    "en_def": "too quick to criticize or form opinions about people",
    "cn_def": "愛評斷人的；武斷的"
  },
  "aspersion": {
    "pos": "n.",
    "en_def": "an unkind remark that attacks someone's character",
    "cn_def": "誹謗；中傷"
  },
  "devote": {
    "pos": "v.",
    "en_def": "to give time or energy to something",
    "cn_def": "投入；奉獻"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to get ready or make something ready",
    "cn_def": "準備"
  },
  "material": {
    "pos": "n.",
    "en_def": "information or documents used for a purpose",
    "cn_def": "資料；材料"
  },
  "critique": {
    "pos": "n.",
    "en_def": "a careful judgment of the good and bad parts of something",
    "cn_def": "評論；評析"
  },
  "intend": {
    "pos": "v.",
    "en_def": "to plan or mean to do something",
    "cn_def": "打算；意圖"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the group of people who watch or listen to a talk or show",
    "cn_def": "觀眾；聽眾"
  },
  "grab": {
    "pos": "v.",
    "en_def": "to quickly get or take something, such as attention",
    "cn_def": "抓住；吸引"
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to keep something at the same level or in good condition",
    "cn_def": "維持；保持"
  },
  "entirely": {
    "pos": "adv.",
    "en_def": "completely",
    "cn_def": "完全地"
  },
  "ignoring": {
    "pos": "v.",
    "en_def": "not paying attention to someone or something on purpose (the -ing form of ignore)",
    "cn_def": "忽視；不理會"
  },
  "pretend": {
    "pos": "v.",
    "en_def": "to act as if something is true when it is not",
    "cn_def": "假裝"
  },
  "attentive": {
    "pos": "adj.",
    "en_def": "listening or watching carefully; caring about others' needs",
    "cn_def": "專心的；體貼周到的"
  },
  "empathic": {
    "pos": "adj.",
    "en_def": "able to understand and share other people's feelings",
    "cn_def": "有同理心的"
  },
  "emotionally": {
    "pos": "adv.",
    "en_def": "in a way that is related to feelings",
    "cn_def": "情緒上地；感情上"
  },
  "rephrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "換句話說；改述"
  },
  "reflect": {
    "pos": "v.",
    "en_def": "to think carefully about something",
    "cn_def": "反思；深思"
  },
  "mimic": {
    "pos": "v.",
    "en_def": "to copy the way someone speaks or acts",
    "cn_def": "模仿"
  }
};

const EXTRA_GLOSSES = {};
