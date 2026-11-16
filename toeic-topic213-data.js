// Topic 213 Quiz Data: Law 法律
// Source word list: https://www.examword.com/group-topic/law — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T213 - Law 法律",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "legal",
    "pos": "adj.",
    "cn_def": "合法的；法律（上）的",
    "en_def": "relating to the law; allowed by law",
    "sentence": "A: Before we start selling our new energy drink in Japan next spring, do we need to check anything with the head office in Tokyo? B: Yes, our {{BLANK}} team must review the labels and the advertising plan carefully, because every country has different requirements for health products and ingredients.",
    "cn": "A：明年春天我們開始在日本販售新的能量飲料之前，需要先跟東京總公司確認什麼事情嗎？ B：需要，我們的【法務】團隊必須仔細審查標籤和廣告計畫，因為每個國家對健康產品和成分都有不同的規定。"
  },
  {
    "word": "illegal",
    "pos": "adj.",
    "cn_def": "違法的；非法的",
    "en_def": "not allowed by law",
    "sentence": "A: Can we just park the delivery van in front of the store entrance for twenty minutes while we unload the new furniture? B: I'm afraid not, because it is {{BLANK}} to stop there during business hours, and the city police often give expensive tickets to drivers who block the busy sidewalk.",
    "cn": "A：我們卸新家具的時候，可以把送貨車停在店門口二十分鐘嗎？ B：恐怕不行，因為營業時間在那裡停車是【違法的】，而且市警常常對擋住繁忙人行道的駕駛開高額罰單。"
  },
  {
    "word": "rule",
    "pos": "n.",
    "cn_def": "規定；規則",
    "en_def": "an official instruction about what you must or must not do",
    "sentence": "A: Why did the security guard stop the new intern at the front gate this morning when she arrived for her first day? B: She forgot her ID card, and the company has a strict {{BLANK}} that nobody can enter the building without one, even if a manager is waiting for them upstairs.",
    "cn": "A：今天早上新實習生第一天報到時，警衛為什麼在大門口攔下她？ B：她忘了帶識別證，而公司有一條嚴格的【規定】：沒有識別證的人都不能進入大樓，即使有經理在樓上等他們也一樣。"
  },
  {
    "word": "regulation",
    "pos": "n.",
    "cn_def": "法規；規章",
    "en_def": "an official rule made by a government or organization",
    "sentence": "A: Why does the factory need to buy so many new safety helmets and gloves before the inspection at the end of this month? B: A new government {{BLANK}} says that every worker on the production line must wear protective equipment, and we could pay a large penalty if inspectors find anyone without it.",
    "cn": "A：工廠為什麼要在這個月底檢查之前買這麼多新的安全帽和手套？ B：一項新的政府【法規】規定生產線上的每位員工都必須穿戴防護裝備，如果檢查員發現有人沒有穿戴，我們可能要繳一大筆罰款。"
  },
  {
    "word": "constitution",
    "pos": "n.",
    "cn_def": "憲法",
    "en_def": "the basic laws and principles of a country",
    "sentence": "A: Why are so many people gathering outside city hall this afternoon, and why are the TV reporters interviewing them? B: The government wants to change part of the national {{BLANK}}, so citizens are discussing whether the new rights and limits on power will be good for the country in the future.",
    "cn": "A：今天下午為什麼有這麼多人聚集在市政府外面，電視記者又為什麼在採訪他們？ B：政府想修改國家【憲法】的一部分，所以民眾正在討論新的權利和權力限制將來對國家是否有好處。"
  },
  {
    "word": "court",
    "pos": "n.",
    "cn_def": "法院；法庭",
    "en_def": "the place where legal cases are heard and decided",
    "sentence": "A: Why isn't Mr. Chen coming to the sales meeting this morning, since he was the one who organized it last week? B: He has to go to {{BLANK}} to give information about a business disagreement with a former supplier, so he asked me to lead the meeting and share the results with him tonight.",
    "cn": "A：陳先生上週明明是籌辦這場業務會議的人，為什麼今天早上不來開會？ B：他必須去【法院】說明和一家前供應商之間的商業糾紛，所以他請我主持會議，今晚再把結果告訴他。"
  },
  {
    "word": "judge",
    "pos": "n.",
    "cn_def": "法官",
    "en_def": "the person who controls a trial and makes decisions in court",
    "sentence": "A: How long will the hearing about the landlord's unpaid repair costs take, and when will we know the result? B: The lawyers say the {{BLANK}} will listen to both sides this morning, read all the documents during the afternoon, and probably announce a decision before the end of next week.",
    "cn": "A：關於房東未付修繕費用的聽證會要開多久？我們什麼時候會知道結果？ B：律師說【法官】今天早上會聽取雙方說法，下午閱讀所有文件，大概在下週結束前宣布判決。"
  },
  {
    "word": "jury",
    "pos": "n.",
    "cn_def": "陪審團",
    "en_def": "a group of ordinary people who decide a case in court",
    "sentence": "A: Why did your brother take two weeks off work when his company is so busy with the end-of-year orders? B: He was chosen to serve on a {{BLANK}}, so he must sit in court every day, listen to the evidence carefully, and then help the other members decide the result of the case.",
    "cn": "A：你哥哥的公司年底訂單這麼忙，他為什麼還請了兩週假？ B：他被選為【陪審團】成員，所以每天都得到法院出席、仔細聽取證據，然後和其他成員一起決定案件的結果。"
  },
  {
    "word": "lawyer",
    "pos": "n.",
    "cn_def": "律師",
    "en_def": "a person whose job is to give legal advice and help with legal cases",
    "sentence": "A: Our company wants to rent a bigger office downtown, but the agreement from the landlord is twenty pages long and very confusing. B: Before you sign anything, you should ask a {{BLANK}} to read every page carefully and explain any hidden costs or conditions that might cause problems for the business later.",
    "cn": "A：我們公司想在市中心租一間更大的辦公室，但房東給的協議有二十頁，而且非常難懂。 B：在你簽任何東西之前，應該請一位【律師】仔細閱讀每一頁，並說明任何可能日後對公司造成問題的隱藏費用或條件。"
  },
  {
    "word": "attorney",
    "pos": "n.",
    "cn_def": "律師（美式）；代理人",
    "en_def": "a lawyer who acts for someone (mainly American English)",
    "sentence": "A: Who will speak for the company at the meeting with the government officials about the tax problem next Thursday? B: Our {{BLANK}}, Ms. Lopez, will represent us, because she has handled many similar tax cases and knows exactly which documents the officials will want to see.",
    "cn": "A：下週四和政府官員討論稅務問題的會議上，誰會代表公司發言？ B：我們的【律師】羅培茲女士會代表我們，因為她處理過許多類似的稅務案件，很清楚官員會想看哪些文件。"
  },
  {
    "word": "defendant",
    "pos": "n.",
    "cn_def": "被告",
    "en_def": "the person or company accused or sued in court",
    "sentence": "A: Why does the newspaper say the shopping mall company is in court this week, and who is suing it? B: A customer slipped on a wet floor last year, so the mall company is the {{BLANK}} in the case, and its managers must prove that they put up clear warning signs at the time.",
    "cn": "A：報紙為什麼說那家購物中心公司這週要上法院？是誰在告它？ B：去年有位顧客在濕滑的地板上滑倒，所以購物中心公司是這個案件的【被告】，經理們必須證明他們當時有放置清楚的警告標示。"
  },
  {
    "word": "plaintiff",
    "pos": "n.",
    "cn_def": "原告",
    "en_def": "the person who starts a legal case against someone",
    "sentence": "A: Who started the legal case against the construction company that built the new apartment building near the river? B: The {{BLANK}} is a local family whose house was damaged by the heavy machines, and they are asking the company to pay for all the repairs and their hotel costs.",
    "cn": "A：是誰對那家在河邊蓋新公寓大樓的建設公司提起訴訟的？ B：【原告】是一個房子被重型機具損壞的當地家庭，他們要求公司支付所有修繕費和他們住飯店的費用。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or things that show something is true",
    "sentence": "A: The customer says our driver damaged her front gate during the delivery, but the driver says it was already broken. What should we do? B: Let's check the camera on the delivery truck first, because a video would give us clear {{BLANK}} about what really happened before we agree to pay for any repairs.",
    "cn": "A：那位顧客說我們的司機送貨時弄壞了她的前門，但司機說門本來就壞了。我們該怎麼辦？ B：我們先檢查送貨車上的攝影機吧，因為在同意支付任何修理費之前，影片能給我們關於實際情況的清楚【證據】。"
  },
  {
    "word": "trial",
    "pos": "n.",
    "cn_def": "審判",
    "en_def": "a legal process in court to decide whether someone is guilty",
    "sentence": "A: Why has the company postponed the announcement about the new president until the end of next month? B: The former president is facing a {{BLANK}} for using company money for personal travel, and the board wants to wait until the court reaches a final decision before choosing someone new.",
    "cn": "A：公司為什麼把新總裁的宣布延到下個月底？ B：前總裁因為挪用公司資金私人旅遊而面臨【審判】，董事會想等法院做出最終判決後再選新人。"
  },
  {
    "word": "sentence",
    "pos": "n.",
    "cn_def": "判決；刑罰",
    "en_def": "the punishment a judge gives to someone found guilty",
    "sentence": "A: What happened to the manager who was caught stealing money from the company's bank account over three years? B: The judge gave him a {{BLANK}} of two years in prison, and he must also return all the money, so the company will finally get back what it lost.",
    "cn": "A：那位三年來從公司銀行帳戶偷錢被抓到的經理後來怎麼了？ B：法官判處他兩年徒刑的【刑罰】，他也必須歸還所有的錢，所以公司終於能拿回損失的金額。"
  },
  {
    "word": "punishment",
    "pos": "n.",
    "cn_def": "懲罰；處罰",
    "en_def": "something bad that is done to a person because they broke a rule or law",
    "sentence": "A: What will happen to the employees who shared private customer information on social media without permission? B: The company is still deciding on their {{BLANK}}, but the human resources director said they will probably lose their bonus this year and must attend extra training about data protection.",
    "cn": "A：那些未經許可在社群媒體上分享客戶私人資料的員工會怎麼樣？ B：公司仍在決定對他們的【懲罰】，但人資主管說他們今年可能會失去獎金，而且必須參加額外的資料保護訓練。"
  },
  {
    "word": "fine",
    "pos": "n.",
    "cn_def": "罰款；罰金",
    "en_def": "money you must pay as a punishment for breaking a rule or law",
    "sentence": "A: Why do you look so upset after checking the mail at the reception desk this morning? B: I got a {{BLANK}} of two hundred dollars for driving too fast near the school last week, and I have to pay it within thirty days or the amount will increase.",
    "cn": "A：你今天早上在櫃台看完信件後為什麼看起來這麼沮喪？ B：我上週在學校附近開太快，收到一張兩百美元的【罰款】單，必須在三十天內繳清，否則金額會增加。"
  },
  {
    "word": "prison",
    "pos": "n.",
    "cn_def": "監獄",
    "en_def": "a building where criminals are kept as punishment",
    "sentence": "A: Why is the old building next to the train station being turned into a hotel and shopping center? B: It used to be a {{BLANK}} for people who broke the law, but the city closed it ten years ago and sold the land to a developer who wants to attract more tourists to the area.",
    "cn": "A：火車站旁邊那棟舊建築為什麼要改建成飯店和購物中心？ B：那裡以前是關押違法者的【監獄】，但市政府十年前關閉了它，並把土地賣給一位想吸引更多觀光客到這一帶的開發商。"
  },
  {
    "word": "crime",
    "pos": "n.",
    "cn_def": "犯罪；罪行",
    "en_def": "an action that is against the law",
    "sentence": "A: Why is the shopping mall adding more security cameras and guards in the parking garage this month? B: There has been more {{BLANK}} in the area recently, especially stolen bikes and broken car windows, so the managers want customers to feel safe when they shop late in the evening.",
    "cn": "A：購物中心這個月為什麼要在停車場增加更多監視器和警衛？ B：最近這一帶的【犯罪】增加了，尤其是腳踏車被偷和車窗被打破，所以經理們希望顧客晚上購物時能感到安心。"
  },
  {
    "word": "criminal",
    "pos": "n.",
    "cn_def": "罪犯",
    "en_def": "a person who has done something against the law",
    "sentence": "A: Why did the bank send all its customers an email warning them about fake text messages this week? B: A {{BLANK}} has been pretending to be a bank employee and asking people for their passwords, so the bank wants everyone to know it will never request that information by phone or text.",
    "cn": "A：銀行這週為什麼寄電子郵件給所有客戶，提醒他們注意假簡訊？ B：有一名【罪犯】一直假冒銀行員工向民眾索取密碼，所以銀行要大家知道它絕不會透過電話或簡訊要求這些資料。"
  },
  {
    "word": "arrest",
    "pos": "v.",
    "cn_def": "逮捕",
    "en_def": "(of the police) to take a person away because they may have broken the law",
    "sentence": "A: Did you hear why the police came to the electronics store across the street yesterday afternoon? B: Yes, they came to {{BLANK}} a man who had been selling fake phones to customers for months, and the store owner was glad because many people had complained about the poor quality.",
    "cn": "A：你有聽說昨天下午警察為什麼來對街的電子產品店嗎？ B：有，他們來【逮捕】一名幾個月來一直賣假手機給顧客的男子，店主很高興，因為很多人抱怨過品質很差。"
  },
  {
    "word": "charge",
    "pos": "v.",
    "cn_def": "起訴；指控",
    "en_def": "to officially say that someone has done a crime",
    "sentence": "A: What did the police decide about the driver who hit the parked delivery truck outside our warehouse last night? B: They will {{BLANK}} him with dangerous driving, because tests showed that he had been drinking, and our insurance company will use the police report to cover the repair costs.",
    "cn": "A：昨晚撞到我們倉庫外停著的送貨卡車的那位駕駛，警方怎麼處理？ B：他們會以危險駕駛【起訴】他，因為檢測顯示他喝了酒，而我們的保險公司會用警方報告來支付修理費用。"
  },
  {
    "word": "convict",
    "pos": "v.",
    "cn_def": "定罪；判決有罪",
    "en_def": "to officially decide in court that someone is guilty",
    "sentence": "A: Do you think the former sales director will go to prison for selling the company's secret designs to a competitor? B: If the court decides to {{BLANK}} him, he could spend several years there, but his lawyer believes the evidence is not strong enough to prove what really happened.",
    "cn": "A：你認為前業務總監會因為把公司的機密設計賣給競爭對手而坐牢嗎？ B：如果法院決定將他【定罪】，他可能要在那裡待好幾年，但他的律師認為證據不足以證明真正發生了什麼事。"
  },
  {
    "word": "acquit",
    "pos": "v.",
    "cn_def": "宣判無罪",
    "en_def": "to officially decide in court that someone is not guilty",
    "sentence": "A: Why is the accountant from the finance department smiling so much and buying coffee for everyone this morning? B: Yesterday the jury decided to {{BLANK}} her of all the charges about the missing money, because the records showed that another employee had actually changed the numbers in the system.",
    "cn": "A：財務部的那位會計今天早上為什麼笑得這麼開心，還請大家喝咖啡？ B：昨天陪審團決定就遺失款項的所有指控對她【宣判無罪】，因為紀錄顯示其實是另一名員工更改了系統裡的數字。"
  },
  {
    "word": "appeal",
    "pos": "v.",
    "cn_def": "上訴",
    "en_def": "to ask a higher court to change a legal decision",
    "sentence": "A: The court decided that our company must pay the supplier five hundred thousand dollars. Is there anything we can still do about it? B: Our lawyers plan to {{BLANK}} to a higher court next month, because they believe the judge did not consider some important emails that show we delivered everything on time.",
    "cn": "A：法院判決我們公司必須付給供應商五十萬美元。我們還能做些什麼嗎？ B：我們的律師打算下個月向更高層級的法院【上訴】，因為他們認為法官沒有考慮到一些能證明我們準時交貨的重要電子郵件。"
  },
  {
    "word": "justice",
    "pos": "n.",
    "cn_def": "正義；公道",
    "en_def": "fair treatment of people by the law",
    "sentence": "A: Why did the workers from the closed factory gather outside the company headquarters with signs this morning? B: They have not received their final salaries for three months, and they say they want {{BLANK}}, which means the owners must pay them everything they earned before the factory shut down.",
    "cn": "A：那家關閉工廠的工人今天早上為什麼舉著標語聚集在公司總部外面？ B：他們已經三個月沒拿到最後的薪水了，他們說要討回【公道】，也就是老闆必須支付他們在工廠關閉前賺得的所有薪資。"
  },
  {
    "word": "right",
    "pos": "n.",
    "cn_def": "權利",
    "en_def": "something the law says you are allowed to have or do",
    "sentence": "A: My manager told me I cannot take any vacation days this year because the office is too busy. Is that allowed? B: Every full-time employee has the {{BLANK}} to paid leave under the labor law, so you should politely remind him and talk to the human resources department if he still refuses.",
    "cn": "A：我的主管說因為辦公室太忙，我今年不能休任何假。這樣可以嗎？ B：根據勞動法，每位全職員工都有帶薪休假的【權利】，所以你應該禮貌地提醒他，如果他還是拒絕，就去找人資部門談。"
  },
  {
    "word": "duty",
    "pos": "n.",
    "cn_def": "責任；義務",
    "en_def": "something you must do because it is your job or the law",
    "sentence": "A: Why does the new security manager check every fire exit and alarm before he goes home each evening? B: He says it is his {{BLANK}} to make sure everyone in the building is safe, and the law also requires companies to keep emergency equipment working at all times.",
    "cn": "A：新來的保全經理為什麼每天晚上回家前都要檢查每一個逃生出口和警報器？ B：他說確保大樓內每個人的安全是他的【職責】，而且法律也要求公司隨時保持緊急設備正常運作。"
  },
  {
    "word": "contract",
    "pos": "n.",
    "cn_def": "合約；契約",
    "en_def": "a written legal agreement between people or companies",
    "sentence": "A: Have you finished discussing the price and delivery dates with the new packaging supplier from Vietnam? B: Yes, we agreed on everything during the video call this morning, and both companies will sign the {{BLANK}} next Monday, so the first shipment should arrive at our warehouse in early March.",
    "cn": "A：你和新的越南包裝供應商談完價格和交貨日期了嗎？ B：談完了，我們今天早上在視訊會議中達成所有共識，雙方公司下週一會簽【合約】，所以第一批貨應該會在三月初抵達我們的倉庫。"
  },
  {
    "word": "agreement",
    "pos": "n.",
    "cn_def": "協議；同意",
    "en_def": "a decision or arrangement accepted by two or more people or groups",
    "sentence": "A: Why are the two airline companies holding a press conference at the airport this afternoon? B: They have reached an {{BLANK}} to share flights between Taipei and Tokyo, which means passengers will have more travel times to choose from and can collect points with either company.",
    "cn": "A：那兩家航空公司今天下午為什麼在機場舉行記者會？ B：他們達成了一項共享台北和東京航班的【協議】，這表示旅客將有更多班次可以選擇，也能在任一家公司累積點數。"
  },
  {
    "word": "property",
    "pos": "n.",
    "cn_def": "財產；房地產",
    "en_def": "things, land or buildings that belong to someone",
    "sentence": "A: Can I take one of the old laptops home this weekend to finish my report, since nobody in the office uses them anymore? B: Please ask the IT department first, because those computers are still company {{BLANK}}, and every item that leaves the building must be recorded in the system for security reasons.",
    "cn": "A：既然辦公室已經沒人用那些舊筆電了，我這個週末可以帶一台回家完成報告嗎？ B：請先問資訊部門，因為那些電腦仍是公司【財產】，而且基於安全理由，每件離開大樓的物品都必須登記在系統中。"
  },
  {
    "word": "witness",
    "pos": "n.",
    "cn_def": "證人；目擊者",
    "en_def": "a person who sees something happen and tells others about it",
    "sentence": "A: Why did the police officer want to speak to you after the car accident in front of the bank yesterday? B: I was standing at the bus stop when it happened, so I was the only {{BLANK}}, and the officer needed me to describe which driver drove through the red light.",
    "cn": "A：昨天銀行前面發生車禍後，警察為什麼要找你談話？ B：事發時我正站在公車站，所以我是唯一的【目擊者】，警察需要我描述是哪一位駕駛闖了紅燈。"
  },
  {
    "word": "investigation",
    "pos": "n.",
    "cn_def": "調查",
    "en_def": "an official process of finding out the facts about something",
    "sentence": "A: Why are those people from the tax office going through all the boxes of receipts in the accounting department? B: They are carrying out an {{BLANK}} into some unusual payments from last year, and the finance manager has asked everyone to answer their questions honestly and provide any documents they need.",
    "cn": "A：國稅局的那些人為什麼在翻會計部所有的收據箱？ B：他們正在針對去年一些異常的付款進行【調查】，財務經理要求大家誠實回答他們的問題，並提供他們需要的任何文件。"
  },
  {
    "word": "verdict",
    "pos": "n.",
    "cn_def": "裁決；判決",
    "en_def": "the official decision made by a jury or judge in a trial",
    "sentence": "A: Has the court finally made a decision in the case between our company and the software developer who copied our app? B: The jury will announce its {{BLANK}} tomorrow morning, so the managers have prepared two different press releases, one for winning the case and one for losing it.",
    "cn": "A：法院終於對我們公司和抄襲我們應用程式的軟體開發商之間的案件做出決定了嗎？ B：陪審團明天早上會宣布【裁決】，所以經理們準備了兩份不同的新聞稿，一份是勝訴用的，一份是敗訴用的。"
  },
  {
    "word": "guilty",
    "pos": "adj.",
    "cn_def": "有罪的",
    "en_def": "having done something against the law",
    "sentence": "A: What was the final result of the case against the restaurant owner who did not pay his workers for overtime? B: The court found him {{BLANK}} of breaking the labor law, so he has to pay each worker the missing money and a large penalty to the city government.",
    "cn": "A：那位沒付員工加班費的餐廳老闆，案件最後的結果是什麼？ B：法院判定他違反勞動法【有罪】，所以他必須補發每位員工短少的薪資，並向市政府繳納一大筆罰款。"
  },
  {
    "word": "innocent",
    "pos": "adj.",
    "cn_def": "無罪的；清白的",
    "en_def": "not guilty of a crime or a wrong action",
    "sentence": "A: Why was the cashier so relieved when the store manager called her into the office this afternoon? B: The security video proved that she was {{BLANK}}, because it clearly showed a customer taking the missing money from the counter while she was helping another shopper with a return.",
    "cn": "A：今天下午店經理把那位收銀員叫進辦公室時，她為什麼這麼如釋重負？ B：監視器影片證明她是【清白的】，因為影片清楚拍到她在幫另一位顧客辦理退貨時，有一位顧客從櫃台拿走了那筆不見的錢。"
  },
  {
    "word": "lawful",
    "pos": "adj.",
    "cn_def": "合法的；法定的",
    "en_def": "allowed or accepted by the law",
    "sentence": "A: Is it okay for our shop to record customers with cameras near the entrance and the cash registers? B: Yes, it is {{BLANK}} as long as we put up clear signs that tell customers about the cameras and we keep the videos private and only use them for security purposes.",
    "cn": "A：我們店可以在入口和收銀台附近用攝影機錄下顧客嗎？ B：可以，只要我們張貼清楚的標示告知顧客有攝影機，並且將影片保密、只用於安全用途，這就是【合法的】。"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "cn_def": "執行；實施",
    "en_def": "to make people obey a law or rule",
    "sentence": "A: The new no-smoking policy started last month, but people are still smoking near the back door. What should we do? B: The building manager has asked the security guards to {{BLANK}} the policy more strictly, so anyone who smokes there will now receive a written warning and their department head will be informed.",
    "cn": "A：新的禁菸政策上個月就開始了，但大家還是在後門附近抽菸。我們該怎麼辦？ B：大樓經理已要求警衛更嚴格地【執行】這項政策，所以現在在那裡抽菸的人都會收到書面警告，而且會通知他們的部門主管。"
  }
];

const MCQS = [
  {
    "q": "Before signing the merger documents, the CEO asked the _____ department to check them. The review took almost three weeks to complete.",
    "options": [
      "legal",
      "guilty",
      "innocent",
      "illegal"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "In this city, it is _____ to throw used batteries into ordinary trash bins. Residents must bring them to special recycling points instead.",
    "options": [
      "guilty",
      "innocent",
      "illegal",
      "legal"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "A new _____ requires all restaurants to display calorie information on their menus. Owners have until June to update their printed menus.",
    "options": [
      "verdict",
      "regulation",
      "witness",
      "defendant"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The two companies failed to settle the dispute privately. As a result, the case will now be decided in _____ next spring.",
    "options": [
      "evidence",
      "contract",
      "witness",
      "court"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "After hearing both sides, the _____ ordered the landlord to return the tenant's deposit. The decision was final and could not be changed.",
    "options": [
      "plaintiff",
      "witness",
      "judge",
      "defendant"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The twelve members of the _____ discussed the case for two days. Finally, they agreed that the company had broken the safety law.",
    "options": [
      "jury",
      "evidence",
      "verdict",
      "contract"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Kevin hired an experienced _____ to review the terms of his new employment contract. He found two clauses that were unfair to him.",
    "options": [
      "witness",
      "defendant",
      "jury",
      "lawyer"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ sat quietly beside his lawyer while the prosecutor described the charges. He was accused of selling fake designer handbags online.",
    "options": [
      "judge",
      "defendant",
      "jury",
      "plaintiff"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The _____ claimed that the airline had lost her luggage and refused to pay for it. She is asking for two thousand dollars in damages.",
    "options": [
      "plaintiff",
      "defendant",
      "judge",
      "witness"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The security camera recording provided clear _____ that the delivery driver had left the package at the wrong house. The company apologized immediately.",
    "options": [
      "trial",
      "verdict",
      "evidence",
      "property"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The _____ of the former finance manager will begin next Monday at the city courthouse. It is expected to last about three weeks.",
    "options": [
      "evidence",
      "trial",
      "witness",
      "contract"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The judge gave the driver a _____ of six months in prison for causing the accident. He must also pay for the victim's medical bills.",
    "options": [
      "witness",
      "agreement",
      "property",
      "sentence"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our company had to pay a large _____ for failing to submit its tax forms on time. The finance team has since improved its schedule.",
    "options": [
      "crime",
      "right",
      "fine",
      "witness"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Police say that _____ in the downtown shopping district has fallen since more street lights were installed. Shop owners are very pleased with the result.",
    "options": [
      "crime",
      "justice",
      "agreement",
      "property"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Officers were able to _____ the thief only minutes after he took a laptop from the café. The owner thanked them for acting so quickly.",
    "options": [
      "appeal",
      "acquit",
      "enforce",
      "arrest"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Prosecutors decided to _____ the store owner with selling expired food to customers. He will appear in court at the end of the month.",
    "options": [
      "acquit",
      "charge",
      "appeal",
      "enforce"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "There was not enough evidence to _____ the accountant of stealing company funds. Therefore, she was allowed to return to work the next day.",
    "options": [
      "convict",
      "appeal",
      "enforce",
      "charge"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The jury voted to _____ the young engineer because the evidence clearly showed he was not at the factory that night. His family cried with joy.",
    "options": [
      "convict",
      "arrest",
      "acquit",
      "charge"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The company plans to _____ the court's decision because it believes the judge made a mistake. Its lawyers will file the papers next week.",
    "options": [
      "arrest",
      "appeal",
      "acquit",
      "enforce"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "All customers have the _____ to return unused products within thirty days. Please keep your receipt so that the store can process your refund.",
    "options": [
      "crime",
      "verdict",
      "trial",
      "right"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The singer signed a three-year _____ with the record company last week. Under its terms, she must release two albums before 2029.",
    "options": [
      "witness",
      "crime",
      "contract",
      "verdict"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "After months of discussion, the two hotel chains finally reached an _____ to share their customer reward programs. Members can now use points at both brands.",
    "options": [
      "agreement",
      "evidence",
      "investigation",
      "witness"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Visitors are not allowed to enter this private _____ without permission from the owner. Anyone who ignores the sign may be asked to leave.",
    "options": [
      "evidence",
      "justice",
      "verdict",
      "property"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "A _____ told the police that she saw a blue van leave just after the alarm rang. Her information helped officers find the driver.",
    "options": [
      "verdict",
      "witness",
      "property",
      "contract"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The safety agency has started an _____ into the cause of the fire at the warehouse. Its report will be published within two months.",
    "options": [
      "investigation",
      "agreement",
      "evidence",
      "appeal"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "After three days of discussion, the jury returned a _____ of not guilty. The defendant hugged his lawyer as he left the courtroom.",
    "options": [
      "sentence",
      "witness",
      "verdict",
      "contract"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The manager was found _____ of hiding important safety reports from inspectors. He was fired and ordered to pay a heavy penalty.",
    "options": [
      "innocent",
      "guilty",
      "legal",
      "illegal"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "The new video proved that the delivery worker was _____ and had not damaged the package. The customer later apologized for blaming him.",
    "options": [
      "guilty",
      "illegal",
      "legal",
      "innocent"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "The city will begin to _____ the new parking rules strictly from next month. Drivers who ignore them will receive a fine.",
    "options": [
      "acquit",
      "convict",
      "enforce",
      "appeal"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The office has a strict _____ that food may not be eaten at desks. Employees must use the kitchen on the second floor instead.",
    "options": [
      "rule",
      "verdict",
      "witness",
      "crime"
    ],
    "answer": 0,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "legal": {
    "pos": "adj.",
    "en_def": "relating to the law; allowed by law",
    "cn_def": "合法的；法律（上）的"
  },
  "illegal": {
    "pos": "adj.",
    "en_def": "not allowed by law",
    "cn_def": "違法的；非法的"
  },
  "rule": {
    "pos": "n.",
    "en_def": "an official instruction about what you must or must not do",
    "cn_def": "規定；規則"
  },
  "regulation": {
    "pos": "n.",
    "en_def": "an official rule made by a government or organization",
    "cn_def": "法規；規章"
  },
  "constitution": {
    "pos": "n.",
    "en_def": "the basic laws and principles of a country",
    "cn_def": "憲法"
  },
  "court": {
    "pos": "n.",
    "en_def": "the place where legal cases are heard and decided",
    "cn_def": "法院；法庭"
  },
  "judge": {
    "pos": "n.",
    "en_def": "the person who controls a trial and makes decisions in court",
    "cn_def": "法官"
  },
  "jury": {
    "pos": "n.",
    "en_def": "a group of ordinary people who decide a case in court",
    "cn_def": "陪審團"
  },
  "lawyer": {
    "pos": "n.",
    "en_def": "a person whose job is to give legal advice and help with legal cases",
    "cn_def": "律師"
  },
  "attorney": {
    "pos": "n.",
    "en_def": "a lawyer who acts for someone (mainly American English)",
    "cn_def": "律師（美式）；代理人"
  },
  "defendant": {
    "pos": "n.",
    "en_def": "the person or company accused or sued in court",
    "cn_def": "被告"
  },
  "plaintiff": {
    "pos": "n.",
    "en_def": "the person who starts a legal case against someone",
    "cn_def": "原告"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or things that show something is true",
    "cn_def": "證據"
  },
  "trial": {
    "pos": "n.",
    "en_def": "a legal process in court to decide whether someone is guilty",
    "cn_def": "審判"
  },
  "sentence": {
    "pos": "n.",
    "en_def": "the punishment a judge gives to someone found guilty",
    "cn_def": "判決；刑罰"
  },
  "punishment": {
    "pos": "n.",
    "en_def": "something bad that is done to a person because they broke a rule or law",
    "cn_def": "懲罰；處罰"
  },
  "fine": {
    "pos": "n.",
    "en_def": "money you must pay as a punishment for breaking a rule or law",
    "cn_def": "罰款；罰金"
  },
  "prison": {
    "pos": "n.",
    "en_def": "a building where criminals are kept as punishment",
    "cn_def": "監獄"
  },
  "crime": {
    "pos": "n.",
    "en_def": "an action that is against the law",
    "cn_def": "犯罪；罪行"
  },
  "criminal": {
    "pos": "n.",
    "en_def": "a person who has done something against the law",
    "cn_def": "罪犯"
  },
  "arrest": {
    "pos": "v.",
    "en_def": "(of the police) to take a person away because they may have broken the law",
    "cn_def": "逮捕"
  },
  "charge": {
    "pos": "v.",
    "en_def": "to officially say that someone has done a crime",
    "cn_def": "起訴；指控"
  },
  "convict": {
    "pos": "v.",
    "en_def": "to officially decide in court that someone is guilty",
    "cn_def": "定罪；判決有罪"
  },
  "acquit": {
    "pos": "v.",
    "en_def": "to officially decide in court that someone is not guilty",
    "cn_def": "宣判無罪"
  },
  "appeal": {
    "pos": "v.",
    "en_def": "to ask a higher court to change a legal decision",
    "cn_def": "上訴"
  },
  "justice": {
    "pos": "n.",
    "en_def": "fair treatment of people by the law",
    "cn_def": "正義；公道"
  },
  "right": {
    "pos": "n.",
    "en_def": "something the law says you are allowed to have or do",
    "cn_def": "權利"
  },
  "duty": {
    "pos": "n.",
    "en_def": "something you must do because it is your job or the law",
    "cn_def": "責任；義務"
  },
  "contract": {
    "pos": "n.",
    "en_def": "a written legal agreement between people or companies",
    "cn_def": "合約；契約"
  },
  "agreement": {
    "pos": "n.",
    "en_def": "a decision or arrangement accepted by two or more people or groups",
    "cn_def": "協議；同意"
  },
  "property": {
    "pos": "n.",
    "en_def": "things, land or buildings that belong to someone",
    "cn_def": "財產；房地產"
  },
  "witness": {
    "pos": "n.",
    "en_def": "a person who sees something happen and tells others about it",
    "cn_def": "證人；目擊者"
  },
  "investigation": {
    "pos": "n.",
    "en_def": "an official process of finding out the facts about something",
    "cn_def": "調查"
  },
  "verdict": {
    "pos": "n.",
    "en_def": "the official decision made by a jury or judge in a trial",
    "cn_def": "裁決；判決"
  },
  "guilty": {
    "pos": "adj.",
    "en_def": "having done something against the law",
    "cn_def": "有罪的"
  },
  "innocent": {
    "pos": "adj.",
    "en_def": "not guilty of a crime or a wrong action",
    "cn_def": "無罪的；清白的"
  },
  "lawful": {
    "pos": "adj.",
    "en_def": "allowed or accepted by the law",
    "cn_def": "合法的；法定的"
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make people obey a law or rule",
    "cn_def": "執行；實施"
  }
};

const EXTRA_GLOSSES = {};
