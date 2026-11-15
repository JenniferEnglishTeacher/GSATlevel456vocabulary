// Topic 71 Quiz Data: Complaining 抱怨
// Source word list: https://www.examword.com/group-topic/complaining — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T71 - Complaining 抱怨",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "抱怨；投訴",
    "en_def": "a statement that something is wrong or not good enough",
    "sentence": "A: Why does the hotel manager look so worried this morning, and why did she cancel her meeting with the new suppliers? B: A guest on the fifth floor made a serious {{BLANK}} about the noise from the kitchen last night, so she is checking the problem herself before the guest checks out at noon.",
    "cn": "A：為什麼飯店經理今天早上看起來這麼擔心，而且她為什麼取消了和新供應商的會議？ B：五樓的一位房客昨晚針對廚房傳來的噪音提出了嚴重的【投訴】，所以她要在房客中午退房前親自檢查這個問題。"
  },
  {
    "word": "grumble",
    "pos": "v.",
    "cn_def": "發牢騷；抱怨",
    "en_def": "to complain in a quiet, unhappy way",
    "sentence": "A: How did the staff react when the company announced that the office would move to the new building outside the city? B: Some people began to {{BLANK}} about the longer journey to work, but most of them stopped complaining after they saw the bright rooms and the free parking spaces.",
    "cn": "A：公司宣布辦公室要搬到市郊的新大樓時，員工有什麼反應？ B：有些人開始【發牢騷】，抱怨通勤路程變長，但大多數人看到明亮的房間和免費停車位後就不再抱怨了。"
  },
  {
    "word": "moan",
    "pos": "v.",
    "cn_def": "抱怨；嘟囔",
    "en_def": "to complain in an annoying way about something",
    "sentence": "A: Is it true that the sales team is unhappy with the new travel policy that the finance department introduced last month? B: Yes, they often {{BLANK}} about the cheap hotels they have to book now, but the manager says the company must cut costs until sales improve next year.",
    "cn": "A：聽說業務團隊對財務部上個月推出的新差旅政策不滿意，是真的嗎？ B：是的，他們常常【抱怨】現在必須訂的便宜飯店，但經理說在明年業績好轉之前，公司必須削減開支。"
  },
  {
    "word": "whine",
    "pos": "v.",
    "cn_def": "哀訴；發牢騷",
    "en_def": "to complain in a weak, childish voice",
    "sentence": "A: Why did the trainer look so tired after the team-building trip to the mountains with the new interns last weekend? B: Several of the interns continued to {{BLANK}} about the cold weather and the long hike all day, so she had to keep encouraging them until they finally reached the camp.",
    "cn": "A：上週末和新實習生去山上參加團隊建立活動後，訓練員為什麼看起來那麼累？ B：好幾個實習生一整天不停地【發牢騷】，抱怨寒冷的天氣和漫長的健行，所以她得一直鼓勵他們，直到他們終於抵達營地。"
  },
  {
    "word": "protest",
    "pos": "v.",
    "cn_def": "抗議",
    "en_def": "to show strongly in public that you do not agree with something",
    "sentence": "A: Why were so many workers standing outside the factory gate with signs when I drove past early this morning? B: They gathered there to {{BLANK}} against the plan to close the night shift, because about two hundred people could lose their jobs if the owners decide to go ahead with it.",
    "cn": "A：我今天一大早開車經過時，為什麼有那麼多工人拿著標語站在工廠大門外？ B：他們聚集在那裡【抗議】關閉夜班的計畫，因為如果老闆決定執行，大約兩百人可能會失去工作。"
  },
  {
    "word": "object",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to say that you do not agree with or do not like something",
    "sentence": "A: Did everyone at the board meeting agree with the proposal to build a second warehouse near the airport? B: Not exactly, two directors decided to {{BLANK}} to the plan because they think the land is too expensive, so the final vote has been delayed until next month.",
    "cn": "A：董事會上每個人都同意在機場附近蓋第二座倉庫的提案嗎？ B：不完全是，有兩位董事決定【反對】這個計畫，因為他們認為土地太貴，所以最後的表決延到下個月。"
  },
  {
    "word": "criticize",
    "pos": "v.",
    "cn_def": "批評",
    "en_def": "to say what is bad or wrong about someone or something",
    "sentence": "A: Why did the marketing director look so upset when she came out of the meeting with the company president? B: The president began to {{BLANK}} her team's new advertising campaign in front of everyone, saying the photos were too dark and the message was confusing for younger customers.",
    "cn": "A：行銷總監和公司總裁開完會出來時，為什麼看起來那麼沮喪？ B：總裁當著所有人的面開始【批評】她團隊的新廣告活動，說照片太暗，而且訊息讓年輕顧客感到困惑。"
  },
  {
    "word": "blame",
    "pos": "v.",
    "cn_def": "責怪；歸咎",
    "en_def": "to say that someone is responsible for something bad",
    "sentence": "A: Who is responsible for the shipping mistake that sent two hundred boxes to the wrong store in Kaohsiung last week? B: It's hard to say, but you shouldn't {{BLANK}} the drivers, because the address in our computer system was wrong before the orders even left the warehouse.",
    "cn": "A：上週把兩百箱貨送錯到高雄門市的運送錯誤，該由誰負責？ B：很難說，但你不應該【責怪】司機，因為在訂單離開倉庫之前，我們電腦系統裡的地址就已經錯了。"
  },
  {
    "word": "accuse",
    "pos": "v.",
    "cn_def": "指控；控告",
    "en_def": "to say that someone has done something wrong",
    "sentence": "A: Why is the store manager meeting with the security team and a lawyer this afternoon? B: A customer plans to {{BLANK}} one of our cashiers of taking money from her wallet, so the manager wants to check the camera recordings carefully before anyone says anything to the police.",
    "cn": "A：店長今天下午為什麼要和保全團隊及一位律師開會？ B：一位顧客打算【指控】我們的一名收銀員從她的皮夾拿錢，所以經理想在任何人向警方說明之前，先仔細檢查監視器錄影。"
  },
  {
    "word": "dissatisfaction",
    "pos": "n.",
    "cn_def": "不滿",
    "en_def": "the feeling of not being pleased with something",
    "sentence": "A: Why did the airline decide to give every passenger on the delayed flight a free meal and a travel voucher? B: The managers noticed growing {{BLANK}} among customers on social media after many long delays this summer, and they want to win back their trust before the busy holiday season.",
    "cn": "A：為什麼航空公司決定給延誤班機上的每位乘客一份免費餐點和旅遊抵用券？ B：經理們注意到，今年夏天多次長時間延誤後，顧客在社群媒體上的【不滿】越來越多，他們想在忙碌的假期旺季前贏回顧客的信任。"
  },
  {
    "word": "frustration",
    "pos": "n.",
    "cn_def": "挫折感；沮喪",
    "en_def": "the feeling of being upset because you cannot do or change something",
    "sentence": "A: How is the IT team dealing with the computer problems that have slowed down the whole accounting department this week? B: They are working late every night, and I can understand their {{BLANK}}, because each time they fix one error, another one appears and the accountants keep calling them for help.",
    "cn": "A：IT團隊如何處理這週拖慢整個會計部門的電腦問題？ B：他們每天晚上都加班，我能理解他們的【挫折感】，因為每次修好一個錯誤，就會出現另一個，而會計人員一直打電話向他們求助。"
  },
  {
    "word": "annoyance",
    "pos": "n.",
    "cn_def": "惱怒；煩惱",
    "en_def": "the feeling of being a little angry",
    "sentence": "A: Did the passengers complain when the train stopped for almost an hour between two stations yesterday evening? B: Yes, many of them showed their {{BLANK}} by sighing and checking their watches, especially because nobody explained the reason for the delay over the speakers until much later.",
    "cn": "A：昨晚火車在兩站之間停了將近一小時，乘客有抱怨嗎？ B：有，很多人嘆氣、一直看手錶來表現他們的【惱怒】，尤其是因為直到很久之後才有人透過廣播說明延誤的原因。"
  },
  {
    "word": "issue",
    "pos": "n.",
    "cn_def": "問題；議題",
    "en_def": "a problem that people need to deal with",
    "sentence": "A: Why did the customer service team call a special meeting before the store opened this morning? B: Several shoppers wrote to us about the same {{BLANK}} with our online payment system, so the team wants to find out what went wrong and fix it before the weekend sale begins.",
    "cn": "A：客服團隊為什麼在今天早上開店前召開特別會議？ B：好幾位顧客寫信給我們反映網路付款系統的同一個【問題】，所以團隊想找出哪裡出錯，並在週末特賣開始前修好。"
  },
  {
    "word": "concern",
    "pos": "n.",
    "cn_def": "擔憂；關切的事",
    "en_def": "a feeling of worry about something",
    "sentence": "A: What did the parents say at the meeting with the school about the new bus company? B: Their main {{BLANK}} was safety, because the buses often arrive late and the drivers seem to drive too fast, so the principal promised to discuss the problem with the company director.",
    "cn": "A：家長們在跟學校開會時，對新的巴士公司說了什麼？ B：他們主要的【擔憂】是安全，因為公車常常遲到，而且司機似乎開得太快，所以校長答應會和公司主管討論這個問題。"
  },
  {
    "word": "negative",
    "pos": "adj.",
    "cn_def": "負面的；消極的",
    "en_def": "bad or harmful; showing a bad opinion",
    "sentence": "A: How did customers respond to the new menu that the restaurant introduced at the beginning of the month? B: We received a lot of {{BLANK}} comments online, because many people felt the dishes were smaller and more expensive, so the chef is already planning to bring back some old favorites.",
    "cn": "A：餐廳月初推出的新菜單，顧客的反應如何？ B：我們在網路上收到很多【負面的】評論，因為很多人覺得菜變少了又變貴，所以主廚已經打算把一些老招牌菜加回來。"
  },
  {
    "word": "critical",
    "pos": "adj.",
    "cn_def": "批評的；挑剔的",
    "en_def": "saying that someone or something is bad or wrong",
    "sentence": "A: Why did the hotel owner decide to repaint all the rooms and replace the old carpets so suddenly? B: A famous travel writer stayed here last month and wrote a very {{BLANK}} article about the poor condition of the rooms, and after that our online bookings dropped quite a lot.",
    "cn": "A：飯店老闆為什麼這麼突然決定重新粉刷所有房間並更換舊地毯？ B：一位知名的旅遊作家上個月住過這裡，寫了一篇非常【批評性的】文章，指出房間狀況很差，之後我們的網路訂房就減少了很多。"
  },
  {
    "word": "unhappy",
    "pos": "adj.",
    "cn_def": "不滿意的；不高興的",
    "en_def": "not pleased or satisfied",
    "sentence": "A: Why is the receptionist calling the cleaning company again, even though they came to the office yesterday? B: She is {{BLANK}} with their work, because the meeting rooms still look dirty and the trash in the kitchen was not taken out, so she wants them to come back today.",
    "cn": "A：清潔公司昨天已經來過辦公室了，為什麼接待員又打電話給他們？ B：她對他們的工作【不滿意】，因為會議室看起來還是很髒，廚房的垃圾也沒倒，所以她要他們今天再來一次。"
  },
  {
    "word": "dissatisfied",
    "pos": "adj.",
    "cn_def": "不滿意的",
    "en_def": "not pleased with something because it is not good enough",
    "sentence": "A: Why did the online shop decide to offer free returns on all items starting from next month? B: Too many {{BLANK}} customers were leaving bad reviews because they had to pay shipping fees to send back clothes that did not fit, so the owners decided to change the policy.",
    "cn": "A：網路商店為什麼決定從下個月起所有商品都提供免費退貨？ B：太多【不滿意的】顧客留下差評，因為他們得付運費退回不合身的衣服，所以老闆決定改變政策。"
  },
  {
    "word": "irritated",
    "pos": "adj.",
    "cn_def": "惱火的；不耐煩的",
    "en_def": "feeling annoyed or a little angry",
    "sentence": "A: Why did the manager speak so sharply to the new assistant during the meeting this morning? B: He was {{BLANK}} because the assistant had forgotten to print the sales reports again, and the clients from Japan had to wait while someone ran to the printer on the third floor.",
    "cn": "A：經理今天早上開會時為什麼對新助理說話那麼嚴厲？ B：他很【惱火】，因為助理又忘了印業務報告，日本客戶只好等著有人跑到三樓的印表機去印。"
  },
  {
    "word": "outraged",
    "pos": "adj.",
    "cn_def": "極為憤怒的",
    "en_def": "extremely angry and shocked",
    "sentence": "A: What happened after the bank suddenly raised its fees without telling its customers in advance? B: Many customers were {{BLANK}} and wrote angry letters to the local newspaper, so the bank finally apologized and promised to return the extra money to everyone by the end of the month.",
    "cn": "A：銀行在沒有事先告知客戶的情況下突然調高手續費，之後發生了什麼事？ B：許多客戶【極為憤怒】，寫了憤怒的信給當地報紙，所以銀行最後道歉，並承諾在月底前把多收的錢退還給每個人。"
  },
  {
    "word": "formally",
    "pos": "adv.",
    "cn_def": "正式地",
    "en_def": "in an official way",
    "sentence": "A: What should I do if my landlord still refuses to repair the broken heater in my apartment after three weeks? B: You should complain {{BLANK}} by writing a letter to the housing office, and keep a copy for yourself, because they usually act faster when they receive a written complaint.",
    "cn": "A：如果房東過了三週還是不肯修我公寓裡壞掉的暖氣，我該怎麼辦？ B：你應該寫信給住房管理處【正式地】投訴，並自己留一份副本，因為他們收到書面投訴時通常處理得比較快。"
  },
  {
    "word": "repeatedly",
    "pos": "adv.",
    "cn_def": "一再地；反覆地",
    "en_def": "many times, again and again",
    "sentence": "A: Why did the company finally replace the old coffee machine in the staff kitchen on the second floor? B: Employees had {{BLANK}} asked for a new one because it broke down almost every week, and last Monday it leaked water all over the floor and damaged some boxes of paper.",
    "cn": "A：公司為什麼終於更換了二樓員工廚房裡的舊咖啡機？ B：員工們【一再地】要求換新的，因為它幾乎每週都故障，上週一還漏水流得滿地都是，弄壞了幾箱紙。"
  },
  {
    "word": "publicly",
    "pos": "adv.",
    "cn_def": "公開地",
    "en_def": "in a way that many people can see or hear",
    "sentence": "A: Why is the restaurant owner so worried about the review that the food blogger posted last night? B: The blogger {{BLANK}} complained about the slow service and cold soup on her website, and more than fifty thousand people follow her, so many of them might decide not to visit us.",
    "cn": "A：餐廳老闆為什麼這麼擔心那位美食部落客昨晚發布的評論？ B：那位部落客在她的網站上【公開地】抱怨服務很慢、湯是冷的，而她有超過五萬名追蹤者，所以其中很多人可能會決定不來我們店。"
  },
  {
    "word": "loudly",
    "pos": "adv.",
    "cn_def": "大聲地",
    "en_def": "in a way that makes a lot of noise",
    "sentence": "A: Why did the security guard have to come to the front desk of the bank this morning? B: A customer was complaining very {{BLANK}} about the long line and shouting at the tellers, so the other customers felt uncomfortable and the manager asked the guard to calm him down.",
    "cn": "A：今天早上保全為什麼必須到銀行櫃台來？ B：一位顧客非常【大聲地】抱怨排隊太久，還對著行員大吼，讓其他客人覺得不舒服，所以經理請保全讓他冷靜下來。"
  },
  {
    "word": "privately",
    "pos": "adv.",
    "cn_def": "私下地",
    "en_def": "without other people being present",
    "sentence": "A: Should I tell my team leader in the meeting that her schedule for the project is not realistic? B: It's better to speak to her {{BLANK}} after the meeting, because she may feel embarrassed if you point out the problem in front of the whole team and the new clients.",
    "cn": "A：我應該在會議上跟組長說她的專案時程不切實際嗎？ B：最好在會後【私下】跟她說，因為如果你在全組和新客戶面前指出這個問題，她可能會覺得難堪。"
  },
  {
    "word": "voice",
    "pos": "v.",
    "cn_def": "表達；說出",
    "en_def": "to say what you think or feel about something",
    "sentence": "A: How can employees share their opinions about the new working hours if they don't want to speak in the big meeting? B: They can {{BLANK}} their concerns through the online survey that human resources sent out yesterday, and all the answers will be anonymous, so nobody needs to worry.",
    "cn": "A：如果員工不想在大型會議上發言，他們要怎麼分享對新工作時間的看法？ B：他們可以透過人資部昨天寄出的線上問卷【表達】他們的疑慮，而且所有回答都是匿名的，所以大家不用擔心。"
  },
  {
    "word": "raise",
    "pos": "v.",
    "cn_def": "提出（問題、議題）",
    "en_def": "to bring up a subject so people can talk about it",
    "sentence": "A: When is the best time to talk about the problems with our software supplier, who keeps missing deadlines? B: You can {{BLANK}} the matter at Thursday's management meeting, because the director will be there and she has the power to change suppliers if the problems continue.",
    "cn": "A：我們的軟體供應商一直延誤期限，什麼時候是談這個問題的最好時機？ B：你可以在週四的管理會議上【提出】這件事，因為主管會出席，而且如果問題持續，她有權更換供應商。"
  },
  {
    "word": "report",
    "pos": "v.",
    "cn_def": "報告；通報",
    "en_def": "to tell someone in charge about something that happened",
    "sentence": "A: What should I do if the air conditioner in the meeting room starts making that strange noise again? B: Please {{BLANK}} the problem to the building maintenance office on the ground floor right away, and they will send a technician to check it before the afternoon training session starts.",
    "cn": "A：如果會議室的冷氣又開始發出那種怪聲，我該怎麼辦？ B：請立刻向一樓的大樓維修辦公室【通報】這個問題，他們會在下午的訓練課程開始前派技術人員來檢查。"
  },
  {
    "word": "escalate",
    "pos": "v.",
    "cn_def": "上報；使升級",
    "en_def": "to pass a problem to a higher level or more senior person",
    "sentence": "A: The customer has called five times about her missing package, so what should I do if she phones again? B: If you cannot solve the problem yourself, you should {{BLANK}} it to the supervisor, who can contact the delivery company directly and offer the customer a full refund if necessary.",
    "cn": "A：那位顧客已經為了遺失的包裹打來五次了，如果她再打來我該怎麼辦？ B：如果你自己無法解決，就應該把問題【上報】給主管，主管可以直接聯絡貨運公司，必要時提供顧客全額退款。"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find an answer to a problem",
    "sentence": "A: How long does it usually take your team to deal with a customer complaint about a broken product? B: We try to {{BLANK}} most problems within forty-eight hours, either by sending a replacement or giving a refund, because we know that quick service keeps our customers loyal.",
    "cn": "A：你們團隊處理顧客對瑕疵產品的投訴通常需要多久？ B：我們盡量在四十八小時內【解決】大部分的問題，不是寄送替換品就是退款，因為我們知道快速的服務能留住忠實顧客。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "意見回饋",
    "en_def": "opinions about how good or bad something is",
    "sentence": "A: Why is the hotel asking every guest to fill out a short survey when they check out this month? B: The manager wants honest {{BLANK}} about the rooms, the breakfast and the staff, so she can find out what guests really think and decide which areas need improvement first.",
    "cn": "A：飯店這個月為什麼請每位房客退房時填一份簡短的問卷？ B：經理想得到有關房間、早餐和員工的真實【意見回饋】，這樣她就能了解房客真正的想法，並決定哪些部分要優先改善。"
  },
  {
    "word": "petition",
    "pos": "n.",
    "cn_def": "請願書",
    "en_def": "a written request signed by many people asking for a change",
    "sentence": "A: How are the residents trying to stop the city from building a large parking lot in the park near our office? B: They started a {{BLANK}} last week, and more than three thousand people have already signed it, so they plan to give it to the mayor at the next council meeting.",
    "cn": "A：居民們如何試著阻止市政府在我們辦公室附近的公園蓋大型停車場？ B：他們上週發起了一份【請願書】，已經有超過三千人簽名，所以他們打算在下次市議會開會時交給市長。"
  },
  {
    "word": "dispute",
    "pos": "n.",
    "cn_def": "爭端；糾紛",
    "en_def": "a serious disagreement between people or groups",
    "sentence": "A: Why hasn't the construction company finished the new shopping mall, even though it was supposed to open in May? B: There is a {{BLANK}} between the builders and the owners about the extra costs, and work has stopped until both sides agree on who should pay for the changes.",
    "cn": "A：建設公司為什麼還沒蓋完新購物中心？它原本應該在五月開幕。 B：建商和業主之間對於額外費用有【糾紛】，在雙方對誰該支付變更費用達成共識之前，工程已經停止。"
  }
];

const MCQS = [
  {
    "q": "The guest was not happy with the noisy room next door. She went to the front desk to make a _____.",
    "options": [
      "complaint",
      "frustration",
      "feedback",
      "dissatisfaction"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Some staff members began to _____ about the new parking fees. However, they stopped complaining once the manager explained the reason.",
    "options": [
      "accuse",
      "escalate",
      "grumble",
      "resolve"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Hundreds of workers gathered outside the head office. They wanted to _____ against the plan to close two factories.",
    "options": [
      "blame",
      "protest",
      "report",
      "raise"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Two board members strongly _____ to the new budget. They believe it spends too much money on advertising.",
    "options": [
      "criticize",
      "accuse",
      "resolve",
      "object"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The director did not like the design of the new brochure. She began to _____ it in front of the whole team.",
    "options": [
      "object",
      "grumble",
      "criticize",
      "resolve"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The shipment arrived three days late. Please don't _____ the drivers for the delay, because the warehouse made the mistake.",
    "options": [
      "blame",
      "accuse",
      "object",
      "protest"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The customer decided to _____ the cashier of taking money from her purse. The manager checked the camera recordings at once.",
    "options": [
      "blame",
      "report",
      "criticize",
      "accuse"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The survey showed growing _____ among customers with the slow delivery. The company plans to hire more drivers next month.",
    "options": [
      "feedback",
      "dissatisfaction",
      "petition",
      "dispute"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Each time the computer crashed, the accountants lost their work. Their _____ grew as the deadline came closer and closer.",
    "options": [
      "petition",
      "feedback",
      "dispute",
      "frustration"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "To the _____ of many passengers, the train stopped for an hour without any explanation. Some people began to shout at the staff.",
    "options": [
      "feedback",
      "annoyance",
      "petition",
      "concern"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Several shoppers wrote to us about the same _____ with the online payment system. Our technicians fixed it within two hours.",
    "options": [
      "issue",
      "petition",
      "feedback",
      "dispute"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Parents said their main _____ was the safety of the school buses. The principal promised to talk to the bus company.",
    "options": [
      "petition",
      "feedback",
      "concern",
      "dispute"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The new menu received many _____ reviews online. Customers said the dishes were smaller and more expensive than before.",
    "options": [
      "irritated",
      "negative",
      "outraged",
      "dissatisfied"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The travel writer was very _____ of the hotel's dirty rooms. Her article caused online bookings to drop sharply.",
    "options": [
      "negative",
      "irritated",
      "dissatisfied",
      "critical"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Customers who are _____ with their purchase can return it within thirty days. The store will give a full refund.",
    "options": [
      "negative",
      "critical",
      "dissatisfied",
      "outraged"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The manager was _____ by the constant noise from the construction site next door. He closed the window and turned on music.",
    "options": [
      "irritated",
      "negative",
      "critical",
      "dissatisfied"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The public was _____ by the news that the company had dumped chemicals into the river. Thousands of people protested outside its office.",
    "options": [
      "negative",
      "critical",
      "outraged",
      "dissatisfied"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "To complain _____, you must fill out the official form and send it to the head office. Phone calls are not accepted.",
    "options": [
      "loudly",
      "formally",
      "privately",
      "repeatedly"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The old printer has broken down _____ this month. The office manager finally ordered a new one.",
    "options": [
      "formally",
      "publicly",
      "privately",
      "repeatedly"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Instead of sending a private email, the CEO apologized _____ at a press conference. Every major newspaper reported his words the next day.",
    "options": [
      "publicly",
      "loudly",
      "privately",
      "repeatedly"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The angry passenger complained so _____ that everyone in the waiting area could hear him. A staff member asked him to lower his voice.",
    "options": [
      "privately",
      "loudly",
      "formally",
      "repeatedly"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Please don't point out her mistakes in front of the clients. It is better to speak to her _____ after the meeting.",
    "options": [
      "privately",
      "publicly",
      "loudly",
      "repeatedly"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Employees can _____ their opinions about the new schedule through an online survey. All answers will remain anonymous.",
    "options": [
      "resolve",
      "accuse",
      "voice",
      "escalate"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "If you have any questions about the budget, please _____ them at Thursday's meeting. The finance director will answer them.",
    "options": [
      "object",
      "grumble",
      "accuse",
      "raise"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "If you notice any damage to the equipment, please _____ it to the maintenance office immediately. They will send a technician.",
    "options": [
      "report",
      "blame",
      "resolve",
      "object"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The agent could not solve the customer's problem on her own. She decided to _____ the case to her supervisor.",
    "options": [
      "resolve",
      "accuse",
      "protest",
      "escalate"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Our goal is to _____ every customer problem within forty-eight hours. Quick service helps keep our customers loyal.",
    "options": [
      "accuse",
      "resolve",
      "protest",
      "grumble"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Residents are collecting signatures to save the old library. They will hand the _____ to the mayor next Friday.",
    "options": [
      "feedback",
      "concern",
      "petition",
      "frustration"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The builders and the owners cannot agree on who should pay the extra costs. Until the _____ is settled, work on the mall has stopped.",
    "options": [
      "feedback",
      "frustration",
      "concern",
      "dispute"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The hotel asks guests to fill out a short survey at checkout. The manager reads all the _____ carefully every week.",
    "options": [
      "feedback",
      "complaint",
      "petition",
      "dispute"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that something is wrong or not good enough",
    "cn_def": "抱怨；投訴"
  },
  "grumble": {
    "pos": "v.",
    "en_def": "to complain in a quiet, unhappy way",
    "cn_def": "發牢騷；抱怨"
  },
  "moan": {
    "pos": "v.",
    "en_def": "to complain in an annoying way about something",
    "cn_def": "抱怨；嘟囔"
  },
  "whine": {
    "pos": "v.",
    "en_def": "to complain in a weak, childish voice",
    "cn_def": "哀訴；發牢騷"
  },
  "protest": {
    "pos": "v.",
    "en_def": "to show strongly in public that you do not agree with something",
    "cn_def": "抗議"
  },
  "object": {
    "pos": "v.",
    "en_def": "to say that you do not agree with or do not like something",
    "cn_def": "反對"
  },
  "criticize": {
    "pos": "v.",
    "en_def": "to say what is bad or wrong about someone or something",
    "cn_def": "批評"
  },
  "blame": {
    "pos": "v.",
    "en_def": "to say that someone is responsible for something bad",
    "cn_def": "責怪；歸咎"
  },
  "accuse": {
    "pos": "v.",
    "en_def": "to say that someone has done something wrong",
    "cn_def": "指控；控告"
  },
  "dissatisfaction": {
    "pos": "n.",
    "en_def": "the feeling of not being pleased with something",
    "cn_def": "不滿"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do or change something",
    "cn_def": "挫折感；沮喪"
  },
  "annoyance": {
    "pos": "n.",
    "en_def": "the feeling of being a little angry",
    "cn_def": "惱怒；煩惱"
  },
  "issue": {
    "pos": "n.",
    "en_def": "a problem that people need to deal with",
    "cn_def": "問題；議題"
  },
  "concern": {
    "pos": "n.",
    "en_def": "a feeling of worry about something",
    "cn_def": "擔憂；關切的事"
  },
  "negative": {
    "pos": "adj.",
    "en_def": "bad or harmful; showing a bad opinion",
    "cn_def": "負面的；消極的"
  },
  "critical": {
    "pos": "adj.",
    "en_def": "saying that someone or something is bad or wrong",
    "cn_def": "批評的；挑剔的"
  },
  "unhappy": {
    "pos": "adj.",
    "en_def": "not pleased or satisfied",
    "cn_def": "不滿意的；不高興的"
  },
  "dissatisfied": {
    "pos": "adj.",
    "en_def": "not pleased with something because it is not good enough",
    "cn_def": "不滿意的"
  },
  "irritated": {
    "pos": "adj.",
    "en_def": "feeling annoyed or a little angry",
    "cn_def": "惱火的；不耐煩的"
  },
  "outraged": {
    "pos": "adj.",
    "en_def": "extremely angry and shocked",
    "cn_def": "極為憤怒的"
  },
  "formally": {
    "pos": "adv.",
    "en_def": "in an official way",
    "cn_def": "正式地"
  },
  "repeatedly": {
    "pos": "adv.",
    "en_def": "many times, again and again",
    "cn_def": "一再地；反覆地"
  },
  "publicly": {
    "pos": "adv.",
    "en_def": "in a way that many people can see or hear",
    "cn_def": "公開地"
  },
  "loudly": {
    "pos": "adv.",
    "en_def": "in a way that makes a lot of noise",
    "cn_def": "大聲地"
  },
  "privately": {
    "pos": "adv.",
    "en_def": "without other people being present",
    "cn_def": "私下地"
  },
  "voice": {
    "pos": "v.",
    "en_def": "to say what you think or feel about something",
    "cn_def": "表達；說出"
  },
  "raise": {
    "pos": "v.",
    "en_def": "to bring up a subject so people can talk about it",
    "cn_def": "提出（問題、議題）"
  },
  "report": {
    "pos": "v.",
    "en_def": "to tell someone in charge about something that happened",
    "cn_def": "報告；通報"
  },
  "escalate": {
    "pos": "v.",
    "en_def": "to pass a problem to a higher level or more senior person",
    "cn_def": "上報；使升級"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find an answer to a problem",
    "cn_def": "解決"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "opinions about how good or bad something is",
    "cn_def": "意見回饋"
  },
  "petition": {
    "pos": "n.",
    "en_def": "a written request signed by many people asking for a change",
    "cn_def": "請願書"
  },
  "dispute": {
    "pos": "n.",
    "en_def": "a serious disagreement between people or groups",
    "cn_def": "爭端；糾紛"
  }
};

const EXTRA_GLOSSES = {};
