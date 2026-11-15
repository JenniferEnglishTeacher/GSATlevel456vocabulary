// Topic 89 Quiz Data: Crime 犯罪
// Source word list: https://www.examword.com/group-topic/crime — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T89 - Crime 犯罪",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "criminal",
    "pos": "n.",
    "cn_def": "罪犯",
    "en_def": "a person who has broken the law",
    "sentence": "A: Why did the bank hire an extra security guard for the main branch downtown last month? B: The police warned the manager that a {{BLANK}} had been using stolen cards at several ATMs in the area, so the bank wanted someone to watch the machines during busy hours.",
    "cn": "A：為什麼銀行上個月要為市中心的總行多聘一位保全？ B：警方警告經理，有一名【罪犯】一直在該地區好幾台提款機使用偷來的卡片，所以銀行希望在尖峰時段有人看守這些機器。"
  },
  {
    "word": "theft",
    "pos": "n.",
    "cn_def": "竊盜；偷竊",
    "en_def": "the crime of stealing something",
    "sentence": "A: Why does everyone now need a key card to enter the storage room on the third floor? B: After the {{BLANK}} of six new laptops last month, the office manager decided that only staff from the IT department should be allowed inside, and she also put a camera above the door.",
    "cn": "A：為什麼現在大家都需要門禁卡才能進入三樓的儲藏室？ B：上個月發生六台新筆電的【竊盜】事件後，辦公室經理決定只有資訊部的員工可以進入，她還在門上方裝了一台攝影機。"
  },
  {
    "word": "robbery",
    "pos": "n.",
    "cn_def": "搶劫",
    "en_def": "the crime of taking money or things from a person or place, often by force",
    "sentence": "A: Why is the convenience store on the corner closing at ten o'clock instead of staying open all night? B: There was a {{BLANK}} there last week when two men took all the money from the cash register, so the owner feels it is too dangerous for his staff to work late.",
    "cn": "A：為什麼轉角那家便利商店十點就關門，不再整夜營業了？ B：上週那裡發生了一起【搶劫】案，兩名男子拿走了收銀機裡所有的錢，所以老闆覺得讓員工上晚班太危險了。"
  },
  {
    "word": "burglary",
    "pos": "n.",
    "cn_def": "入室竊盜",
    "en_def": "the crime of entering a building to steal things",
    "sentence": "A: Why are you calling the insurance company during your lunch break today? B: Someone broke into our apartment while we were on vacation in Japan, and I need to report the {{BLANK}} so that they can pay for the stolen television, the jewelry and my husband's camera.",
    "cn": "A：你今天午休時間為什麼在打電話給保險公司？ B：我們去日本度假時有人闖入我們的公寓，我需要通報這起【入室竊盜】案，讓他們理賠被偷的電視、珠寶和我先生的相機。"
  },
  {
    "word": "fraud",
    "pos": "n.",
    "cn_def": "詐欺",
    "en_def": "the crime of tricking people to get money",
    "sentence": "A: Why did the accounting department call a meeting with the bank this morning? B: They noticed that several payments had been sent to a supplier that does not exist, and they believe someone inside the company may be committing {{BLANK}} to steal money from our accounts.",
    "cn": "A：會計部今天早上為什麼和銀行開會？ B：他們發現有幾筆款項被匯給一家根本不存在的供應商，他們認為公司內部可能有人在進行【詐欺】，從我們的帳戶偷錢。"
  },
  {
    "word": "assault",
    "pos": "n.",
    "cn_def": "襲擊；人身攻擊",
    "en_def": "a physical attack on a person",
    "sentence": "A: Why has the shopping mall added more security guards near the parking area at night? B: Last month there was an {{BLANK}} on a cleaner who was walking to her car after her shift, and although she was not badly hurt, the managers want every worker to feel safe.",
    "cn": "A：為什麼購物中心晚上在停車區附近增加了更多保全？ B：上個月有一名清潔人員下班走去開車時遭到【襲擊】，雖然她沒有受重傷，但經理們希望每位員工都能感到安全。"
  },
  {
    "word": "violence",
    "pos": "n.",
    "cn_def": "暴力",
    "en_def": "actions that use force to hurt people",
    "sentence": "A: Why did the city council decide to put more lights and cameras in the old park near the train station? B: Residents complained about fights late at night, and the council hopes that better lighting will reduce {{BLANK}} and make families feel comfortable using the park again.",
    "cn": "A：為什麼市議會決定在火車站附近的老公園裝設更多路燈和監視器？ B：居民抱怨深夜常有人打架，議會希望更好的照明能減少【暴力】事件，讓家庭再次安心使用公園。"
  },
  {
    "word": "victim",
    "pos": "n.",
    "cn_def": "受害者",
    "en_def": "a person who is hurt or cheated by a crime",
    "sentence": "A: Why is the bank sending emails to customers about fake phone calls this week? B: An elderly customer became the {{BLANK}} of a scam last Friday when someone pretending to be a bank officer asked for her password, and she lost almost all of her savings.",
    "cn": "A：銀行這週為什麼寄電子郵件提醒客戶注意假冒電話？ B：上週五一位年長客戶成了詐騙的【受害者】，有人假裝是銀行行員向她要密碼，她幾乎失去了所有積蓄。"
  },
  {
    "word": "suspect",
    "pos": "n.",
    "cn_def": "嫌疑犯",
    "en_def": "a person who the police think may have done a crime",
    "sentence": "A: Have the police found out who took the money from the safe in the hotel office? B: Not yet, but they showed the manager a video from the lobby camera, and the main {{BLANK}} is a man who checked in under a false name and left early the next morning.",
    "cn": "A：警方查出是誰從飯店辦公室的保險箱拿走錢了嗎？ B：還沒有，不過他們給經理看了大廳監視器的影片，主要【嫌疑犯】是一名用假名入住、隔天一早就離開的男子。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or objects that show something is true",
    "sentence": "A: Why did the store manager save all the security videos from last weekend on a separate hard drive? B: The police asked her to keep them as {{BLANK}}, because one of the cameras clearly shows the person who broke the front window and took several expensive watches.",
    "cn": "A：店長為什麼把上週末所有的監視器影片存在另一個硬碟裡？ B：警方請她把影片留作【證據】，因為其中一台攝影機清楚拍到打破前窗、拿走好幾支名錶的人。"
  },
  {
    "word": "arrest",
    "pos": "v.",
    "cn_def": "逮捕",
    "en_def": "(of the police) to take someone away because they may have broken the law",
    "sentence": "A: Did you read the news about the man who was stealing packages from doorsteps in our neighborhood? B: Yes, the police were able to {{BLANK}} him yesterday afternoon because a neighbor's doorbell camera recorded his face and the number plate of the van he was driving.",
    "cn": "A：你看到我們社區有個男子偷門口包裹的新聞了嗎？ B：看到了，警方昨天下午得以【逮捕】他，因為一位鄰居的門鈴攝影機拍到了他的臉和他開的廂型車車牌。"
  },
  {
    "word": "trial",
    "pos": "n.",
    "cn_def": "審判",
    "en_def": "a meeting in a court to decide if someone is guilty",
    "sentence": "A: Why will the finance director be away from the office for most of next week? B: She has to give evidence at the {{BLANK}} of a former employee who is accused of stealing company money, and the lawyers expect it to last at least four days.",
    "cn": "A：財務長為什麼下週大部分時間不在辦公室？ B：她必須在一名前員工的【審判】中出庭作證，那人被控盜用公司資金，律師預計至少會持續四天。"
  },
  {
    "word": "court",
    "pos": "n.",
    "cn_def": "法院；法庭",
    "en_def": "the place where legal cases are decided",
    "sentence": "A: Why is the landlord of our office building not answering our emails about the broken elevator? B: We stopped paying rent until it is repaired, so now he is taking us to {{BLANK}}, and our company lawyer is preparing documents to show that the building is unsafe.",
    "cn": "A：我們辦公大樓的房東為什麼都不回覆我們關於電梯故障的電子郵件？ B：我們在電梯修好前停付房租，所以他現在要把我們告上【法院】，我們公司的律師正在準備文件，證明大樓不安全。"
  },
  {
    "word": "judge",
    "pos": "n.",
    "cn_def": "法官",
    "en_def": "the person who controls a court and decides punishments",
    "sentence": "A: How did the case between our company and the former supplier end yesterday? B: After listening to both sides for three hours, the {{BLANK}} decided that the supplier had broken the contract, so they must pay us back for the damaged goods and the delivery costs.",
    "cn": "A：我們公司和前供應商的官司昨天結果如何？ B：聽完雙方三個小時的陳述後，【法官】判定供應商違約，所以他們必須賠償我們受損的貨物和運費。"
  },
  {
    "word": "jury",
    "pos": "n.",
    "cn_def": "陪審團",
    "en_def": "a group of ordinary people who decide in court if someone is guilty",
    "sentence": "A: Why did your manager let you take two weeks off in the middle of the busy season? B: I was chosen to serve on a {{BLANK}} for a big fraud case, and in this country every company must give workers paid time off when the court calls them.",
    "cn": "A：為什麼你的主管讓你在旺季中間請兩週假？ B：我被選為一宗大型詐欺案的【陪審團】成員，在這個國家，法院傳喚時每家公司都必須給員工帶薪假。"
  },
  {
    "word": "sentence",
    "pos": "n.",
    "cn_def": "判決；刑罰",
    "en_def": "the punishment a judge gives to a criminal",
    "sentence": "A: What happened to the former manager who took money from the charity's bank account? B: The judge gave him a {{BLANK}} of three years in prison, and he must also pay back all the money that he stole from the organization over the past five years.",
    "cn": "A：那位從慈善機構銀行帳戶挪用款項的前經理後來怎麼了？ B：法官判他三年徒刑的【刑罰】，他還必須歸還過去五年從該機構偷走的所有錢。"
  },
  {
    "word": "prison",
    "pos": "n.",
    "cn_def": "監獄",
    "en_def": "a building where criminals are kept as punishment",
    "sentence": "A: Why is the company giving a job to someone who was in trouble with the law years ago? B: He spent two years in {{BLANK}} when he was young, but since then he has studied hard, earned a business degree, and every manager who has worked with him says he is reliable.",
    "cn": "A：公司為什麼要給一個多年前犯過法的人工作機會？ B：他年輕時在【監獄】待過兩年，但從那之後他努力讀書，拿到了商學學位，每位和他共事過的主管都說他很可靠。"
  },
  {
    "word": "jail",
    "pos": "n.",
    "cn_def": "拘留所；監獄",
    "en_def": "a place where people are kept by the police, often for a short time",
    "sentence": "A: Why didn't the delivery driver arrive for his shift on Saturday morning? B: He spent the night in {{BLANK}} after the police stopped him for driving too fast without a license, and his brother had to pay money before he could go home on Sunday.",
    "cn": "A：那位送貨司機星期六早上為什麼沒來上班？ B：他因為無照超速被警察攔下，在【拘留所】待了一晚，他哥哥得先付錢，他星期天才能回家。"
  },
  {
    "word": "fine",
    "pos": "n.",
    "cn_def": "罰款",
    "en_def": "money you must pay as a punishment",
    "sentence": "A: Why did the restaurant owner look so upset after the city inspector left this afternoon? B: The inspector found that the kitchen did not meet the new safety rules, so the owner has to pay a {{BLANK}} of two thousand dollars and fix the problems within one month.",
    "cn": "A：市府稽查員今天下午離開後，餐廳老闆為什麼看起來那麼沮喪？ B：稽查員發現廚房不符合新的安全規定，所以老闆必須繳交兩千元的【罰款】，並在一個月內改善問題。"
  },
  {
    "word": "illegal",
    "pos": "adj.",
    "cn_def": "違法的",
    "en_def": "not allowed by law",
    "sentence": "A: Why did the manager tell everyone to delete the music software from their office computers? B: The IT team discovered that it was an {{BLANK}} copy downloaded from the internet, and the company could face serious legal problems if the software maker found out about it.",
    "cn": "A：經理為什麼要大家刪除辦公室電腦裡的音樂軟體？ B：資訊團隊發現那是從網路下載的【違法】拷貝，如果軟體公司發現，公司可能會面臨嚴重的法律問題。"
  },
  {
    "word": "law",
    "pos": "n.",
    "cn_def": "法律",
    "en_def": "a rule made by the government that everyone must follow",
    "sentence": "A: Why are all the employees taking an online course about customer information this month? B: A new {{BLANK}} says that companies must protect people's personal data carefully, and if we make a mistake, the government can charge us a very large amount of money.",
    "cn": "A：為什麼所有員工這個月都在上關於客戶資料的線上課程？ B：一項新【法律】規定企業必須謹慎保護個人資料，如果我們出錯，政府可以向我們收取非常高額的罰金。"
  },
  {
    "word": "police",
    "pos": "n.",
    "cn_def": "警察",
    "en_def": "the people whose job is to stop crime and keep people safe",
    "sentence": "A: What should I do if I see someone trying to open the back door of the warehouse late at night? B: Don't try to stop the person yourself; call the {{BLANK}} right away, then phone the security manager and wait in a safe place until help arrives.",
    "cn": "A：如果我深夜看到有人想打開倉庫後門，我該怎麼辦？ B：不要自己試圖阻止對方；立刻打電話給【警察】，再打給保全經理，然後在安全的地方等待支援到來。"
  },
  {
    "word": "detective",
    "pos": "n.",
    "cn_def": "偵探；刑警",
    "en_def": "a police officer whose job is to find out who did a crime",
    "sentence": "A: Who was the woman asking questions at the front desk this morning? B: She is a {{BLANK}} from the city police, and she is trying to find out who has been stealing guests' wallets from the hotel gym, so she wants to see our list of visitors.",
    "cn": "A：今天早上在櫃台問問題的那位女士是誰？ B：她是市警局的【刑警】，正在調查是誰一直在飯店健身房偷房客的皮夾，所以她想看我們的訪客名單。"
  },
  {
    "word": "witness",
    "pos": "n.",
    "cn_def": "目擊者；證人",
    "en_def": "a person who sees a crime or accident happen",
    "sentence": "A: Why does the security manager want to talk to you before you go home tonight? B: I was the only {{BLANK}} when a man took a laptop bag from the reception area this afternoon, so she needs me to describe what he looked like and which way he went.",
    "cn": "A：為什麼保全經理要你今晚回家前找你談話？ B：今天下午有個男子從接待區拿走一個筆電包時，我是唯一的【目擊者】，所以她需要我描述他的長相和他往哪個方向走。"
  },
  {
    "word": "motive",
    "pos": "n.",
    "cn_def": "動機",
    "en_def": "the reason why someone does something, especially a crime",
    "sentence": "A: Why would an experienced accountant with a good salary steal money from the company? B: The investigators think his {{BLANK}} was a large gambling debt, because they found that he had borrowed money from several people and could not pay any of it back.",
    "cn": "A：一位薪水不錯、經驗豐富的會計師為什麼會偷公司的錢？ B：調查人員認為他的【動機】是一大筆賭債，因為他們發現他向好幾個人借錢，卻一毛都還不出來。"
  },
  {
    "word": "alibi",
    "pos": "n.",
    "cn_def": "不在場證明",
    "en_def": "proof that you were somewhere else when a crime happened",
    "sentence": "A: Did the police think the night guard was involved in the warehouse theft last weekend? B: At first they did, but he had a strong {{BLANK}}, because the hospital records show he was in the emergency room with his son from ten at night until six the next morning.",
    "cn": "A：警方認為上週末倉庫竊案和夜班警衛有關嗎？ B：一開始是這樣認為，但他有很有力的【不在場證明】，因為醫院紀錄顯示他從晚上十點到隔天早上六點都和兒子在急診室。"
  },
  {
    "word": "guilty",
    "pos": "adj.",
    "cn_def": "有罪的",
    "en_def": "having done a crime",
    "sentence": "A: What was the result of the trial of the sales manager who sold fake products to customers? B: After two days of discussion, the jury found him {{BLANK}} of cheating more than fifty buyers, and the judge will decide his punishment at the end of this month.",
    "cn": "A：那位賣假貨給客戶的業務經理，審判結果如何？ B：經過兩天討論，陪審團裁定他詐騙超過五十名買家【有罪】，法官將在本月底決定他的刑罰。"
  },
  {
    "word": "innocent",
    "pos": "adj.",
    "cn_def": "無辜的；清白的",
    "en_def": "not having done a crime",
    "sentence": "A: Why did the company apologize to the cashier who was accused of taking money from the register? B: The security video later proved that she was completely {{BLANK}}, because it showed a customer reaching over the counter and taking the cash while she was helping someone else.",
    "cn": "A：公司為什麼向那位被指控從收銀機拿錢的收銀員道歉？ B：監視器影片後來證明她完全是【清白的】，因為影片顯示是一名顧客在她幫忙別人時從櫃台伸手拿走現金。"
  },
  {
    "word": "felony",
    "pos": "n.",
    "cn_def": "重罪",
    "en_def": "a serious crime",
    "sentence": "A: Why is the human resources department checking the background of every new driver so carefully? B: Under our insurance contract, we cannot hire anyone who has been found guilty of a {{BLANK}}, such as robbery or selling drugs, during the past ten years.",
    "cn": "A：人資部為什麼這麼仔細地審查每位新司機的背景？ B：根據我們的保險合約，我們不能雇用過去十年內曾被判犯下【重罪】的人，例如搶劫或販毒。"
  },
  {
    "word": "misdemeanor",
    "pos": "n.",
    "cn_def": "輕罪",
    "en_def": "a crime that is not very serious",
    "sentence": "A: Will the minor charge on our new driver's record from when he was a teenager stop us from hiring him? B: No, it was only a {{BLANK}}, which is a small offense, so it is not a serious problem, but the insurance company still wants a copy of his record before he starts next Monday.",
    "cn": "A：我們新司機紀錄上那條青少年時期的小罪名，會讓我們無法雇用他嗎？ B：不會，那只是一項【輕罪】，屬於小型違法行為，所以不是嚴重的問題，但保險公司仍希望在他下週一上班前拿到一份他的紀錄。"
  },
  {
    "word": "vandalism",
    "pos": "n.",
    "cn_def": "蓄意破壞（公物）",
    "en_def": "damaging public or private property on purpose",
    "sentence": "A: Why are the walls of the parking garage being painted again so soon after the last repair? B: Some teenagers sprayed paint all over them on Saturday night, and the building manager says this kind of {{BLANK}} has cost the company more than five thousand dollars this year.",
    "cn": "A：停車場的牆壁才剛修好不久，為什麼又在重新粉刷？ B：星期六晚上有幾個青少年在牆上到處噴漆，大樓經理說今年這種【蓄意破壞】已經讓公司花了五千多元。"
  },
  {
    "word": "smuggling",
    "pos": "n.",
    "cn_def": "走私",
    "en_def": "taking goods into or out of a country secretly and against the law",
    "sentence": "A: Why are the customs officers checking every container from that shipping company so slowly this month? B: They discovered that some workers were hiding expensive phones inside boxes of toys, so the government is trying to stop the {{BLANK}} before more goods enter the country without tax.",
    "cn": "A：海關人員這個月為什麼檢查那家船運公司的每個貨櫃都那麼慢？ B：他們發現有些員工把昂貴的手機藏在玩具箱裡，所以政府想在更多貨物逃稅入境之前阻止這種【走私】行為。"
  },
  {
    "word": "corruption",
    "pos": "n.",
    "cn_def": "貪污；腐敗",
    "en_def": "dishonest behavior by people in power, such as taking secret money",
    "sentence": "A: Why did the city cancel the contract for the new bridge just before construction began? B: Reporters found that an official had accepted secret payments from the building company, and the mayor promised that there would be no {{BLANK}} in any public project during her time in office.",
    "cn": "A：市政府為什麼在新橋開工前取消了合約？ B：記者發現一名官員收受了營建公司的秘密款項，市長承諾在她任內任何公共工程都不會有【貪污】情事。"
  },
  {
    "word": "cybercrime",
    "pos": "n.",
    "cn_def": "網路犯罪",
    "en_def": "crime done using computers or the internet",
    "sentence": "A: Why does the IT department make us change our passwords every two months and take security training? B: The number of {{BLANK}} cases is growing quickly, and last year hackers stole customer data from a company just like ours, so we need to protect our systems and train every employee carefully.",
    "cn": "A：資訊部為什麼要我們每兩個月更換密碼並接受資安訓練？ B：【網路犯罪】案件正在快速增加，去年駭客從一家和我們很像的公司竊取了客戶資料，所以我們需要保護系統並仔細訓練每位員工。"
  }
];

const MCQS = [
  {
    "q": "The man in the photo has stolen from three hotels in the city. Staff should call security if they see this _____ in the lobby.",
    "options": [
      "criminal",
      "judge",
      "jury",
      "motive"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Several staff members reported missing wallets after the holiday party. The company is now investigating the _____ with help from the building's security team.",
    "options": [
      "alibi",
      "jury",
      "sentence",
      "theft"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Two men with masks took cash from the bank on Main Street. Nobody was hurt during the _____, but the branch closed early.",
    "options": [
      "evidence",
      "motive",
      "robbery",
      "law"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Someone broke into the empty office over the weekend and took two computers. The manager reported the _____ to the police on Monday morning.",
    "options": [
      "court",
      "burglary",
      "alibi",
      "jury"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The employee created fake invoices to receive extra payments. He was fired after the auditors discovered the _____.",
    "options": [
      "fraud",
      "jury",
      "witness",
      "police"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The new film shows a lot of fighting and blood. Parents should know that it contains strong _____ and is not suitable for children.",
    "options": [
      "alibi",
      "violence",
      "jury",
      "court"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Mr. Lee lost his savings after answering a fake email from his bank. He is the latest _____ of an online scam.",
    "options": [
      "suspect",
      "judge",
      "victim",
      "detective"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The police have stopped a man near the station who matches the description. He is now the main _____ in the case.",
    "options": [
      "alibi",
      "fine",
      "prison",
      "suspect"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The lawyer showed the court several emails and bank records. This _____ proved that the manager had lied about the payments.",
    "options": [
      "evidence",
      "jury",
      "victim",
      "violence"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Officers found the stolen car early this morning. They made an _____ after a short chase through the city center.",
    "options": [
      "prison",
      "arrest",
      "judge",
      "court"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The case against the former director will begin next month. The _____ is expected to last about two weeks.",
    "options": [
      "motive",
      "witness",
      "alibi",
      "trial"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our company could not agree with the supplier about the damaged goods. We finally decided to take the matter to _____.",
    "options": [
      "prison",
      "law",
      "court",
      "jury"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Both lawyers stood up when she entered the room. The _____ listened to each side and then made her decision.",
    "options": [
      "judge",
      "suspect",
      "victim",
      "criminal"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Twelve ordinary citizens listened to the case for five days. Then the _____ decided that the accountant was not guilty.",
    "options": [
      "detective",
      "victim",
      "witness",
      "jury"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The judge was not happy with the driver's careless behavior. She gave him a _____ of six months in prison.",
    "options": [
      "trial",
      "motive",
      "sentence",
      "law"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The businessman was found guilty of stealing millions from investors. He will spend the next eight years in _____.",
    "options": [
      "jury",
      "prison",
      "police",
      "evidence"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Drivers who park in front of the hospital entrance will be punished. They must pay a _____ of one hundred dollars.",
    "options": [
      "fine",
      "sentence",
      "trial",
      "motive"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Employees are not allowed to copy software from the internet onto company laptops. Downloading _____ programs can cause serious legal problems.",
    "options": [
      "guilty",
      "innocent",
      "criminal",
      "illegal"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "All restaurants must now show calorie information on their menus. The new _____ will take effect on the first of July.",
    "options": [
      "jury",
      "prison",
      "law",
      "theft"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "A customer noticed smoke and broken glass at the back of the store. She immediately called the _____ for help.",
    "options": [
      "jury",
      "police",
      "prison",
      "evidence"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The insurance company hired a private _____ to look into the fire. He spent three weeks interviewing workers and checking records.",
    "options": [
      "victim",
      "jury",
      "detective",
      "suspect"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "A taxi driver saw the accident at the crossing. As the only _____, he told the officers exactly what happened.",
    "options": [
      "witness",
      "suspect",
      "victim",
      "judge"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Investigators still do not understand why the manager stole the files. They are trying to find his _____ for the crime.",
    "options": [
      "jury",
      "motive",
      "prison",
      "court"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The cleaner said she was at her sister's wedding on the night of the theft. Photos from the party supported her _____.",
    "options": [
      "motive",
      "sentence",
      "violence",
      "alibi"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The jury discussed the evidence for two full days. In the end, they found the director _____, and the judge sent him to prison.",
    "options": [
      "innocent",
      "guilty",
      "illegal",
      "criminal"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The video showed that the young waiter had not taken the money. The manager apologized because he was completely _____.",
    "options": [
      "innocent",
      "guilty",
      "illegal",
      "criminal"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Someone broke the windows of the bus shelter and painted on the walls. The city spends thousands each year repairing damage from _____.",
    "options": [
      "fraud",
      "cybercrime",
      "smuggling",
      "vandalism"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Customs officers found hidden boxes of cigarettes inside a shipment of furniture. The company is now under investigation for _____.",
    "options": [
      "vandalism",
      "cybercrime",
      "smuggling",
      "violence"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The minister accepted secret payments from a large construction company. He resigned last week after newspapers reported the _____.",
    "options": [
      "vandalism",
      "corruption",
      "alibi",
      "jury"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Hackers broke into the hotel's computer system and stole guests' credit card numbers. Experts say this kind of _____ is increasing every year.",
    "options": [
      "cybercrime",
      "vandalism",
      "smuggling",
      "violence"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "criminal": {
    "pos": "n.",
    "en_def": "a person who has broken the law",
    "cn_def": "罪犯"
  },
  "theft": {
    "pos": "n.",
    "en_def": "the crime of stealing something",
    "cn_def": "竊盜；偷竊"
  },
  "robbery": {
    "pos": "n.",
    "en_def": "the crime of taking money or things from a person or place, often by force",
    "cn_def": "搶劫"
  },
  "burglary": {
    "pos": "n.",
    "en_def": "the crime of entering a building to steal things",
    "cn_def": "入室竊盜"
  },
  "fraud": {
    "pos": "n.",
    "en_def": "the crime of tricking people to get money",
    "cn_def": "詐欺"
  },
  "assault": {
    "pos": "n.",
    "en_def": "a physical attack on a person",
    "cn_def": "襲擊；人身攻擊"
  },
  "violence": {
    "pos": "n.",
    "en_def": "actions that use force to hurt people",
    "cn_def": "暴力"
  },
  "victim": {
    "pos": "n.",
    "en_def": "a person who is hurt or cheated by a crime",
    "cn_def": "受害者"
  },
  "suspect": {
    "pos": "n.",
    "en_def": "a person who the police think may have done a crime",
    "cn_def": "嫌疑犯"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or objects that show something is true",
    "cn_def": "證據"
  },
  "arrest": {
    "pos": "v.",
    "en_def": "(of the police) to take someone away because they may have broken the law",
    "cn_def": "逮捕"
  },
  "trial": {
    "pos": "n.",
    "en_def": "a meeting in a court to decide if someone is guilty",
    "cn_def": "審判"
  },
  "court": {
    "pos": "n.",
    "en_def": "the place where legal cases are decided",
    "cn_def": "法院；法庭"
  },
  "judge": {
    "pos": "n.",
    "en_def": "the person who controls a court and decides punishments",
    "cn_def": "法官"
  },
  "jury": {
    "pos": "n.",
    "en_def": "a group of ordinary people who decide in court if someone is guilty",
    "cn_def": "陪審團"
  },
  "sentence": {
    "pos": "n.",
    "en_def": "the punishment a judge gives to a criminal",
    "cn_def": "判決；刑罰"
  },
  "prison": {
    "pos": "n.",
    "en_def": "a building where criminals are kept as punishment",
    "cn_def": "監獄"
  },
  "jail": {
    "pos": "n.",
    "en_def": "a place where people are kept by the police, often for a short time",
    "cn_def": "拘留所；監獄"
  },
  "fine": {
    "pos": "n.",
    "en_def": "money you must pay as a punishment",
    "cn_def": "罰款"
  },
  "illegal": {
    "pos": "adj.",
    "en_def": "not allowed by law",
    "cn_def": "違法的"
  },
  "law": {
    "pos": "n.",
    "en_def": "a rule made by the government that everyone must follow",
    "cn_def": "法律"
  },
  "police": {
    "pos": "n.",
    "en_def": "the people whose job is to stop crime and keep people safe",
    "cn_def": "警察"
  },
  "detective": {
    "pos": "n.",
    "en_def": "a police officer whose job is to find out who did a crime",
    "cn_def": "偵探；刑警"
  },
  "witness": {
    "pos": "n.",
    "en_def": "a person who sees a crime or accident happen",
    "cn_def": "目擊者；證人"
  },
  "motive": {
    "pos": "n.",
    "en_def": "the reason why someone does something, especially a crime",
    "cn_def": "動機"
  },
  "alibi": {
    "pos": "n.",
    "en_def": "proof that you were somewhere else when a crime happened",
    "cn_def": "不在場證明"
  },
  "guilty": {
    "pos": "adj.",
    "en_def": "having done a crime",
    "cn_def": "有罪的"
  },
  "innocent": {
    "pos": "adj.",
    "en_def": "not having done a crime",
    "cn_def": "無辜的；清白的"
  },
  "felony": {
    "pos": "n.",
    "en_def": "a serious crime",
    "cn_def": "重罪"
  },
  "misdemeanor": {
    "pos": "n.",
    "en_def": "a crime that is not very serious",
    "cn_def": "輕罪"
  },
  "vandalism": {
    "pos": "n.",
    "en_def": "damaging public or private property on purpose",
    "cn_def": "蓄意破壞（公物）"
  },
  "smuggling": {
    "pos": "n.",
    "en_def": "taking goods into or out of a country secretly and against the law",
    "cn_def": "走私"
  },
  "corruption": {
    "pos": "n.",
    "en_def": "dishonest behavior by people in power, such as taking secret money",
    "cn_def": "貪污；腐敗"
  },
  "cybercrime": {
    "pos": "n.",
    "en_def": "crime done using computers or the internet",
    "cn_def": "網路犯罪"
  }
};

const EXTRA_GLOSSES = {};
