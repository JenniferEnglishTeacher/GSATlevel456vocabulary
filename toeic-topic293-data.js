// Topic 293 Quiz Data: Politician 政治人物
// Source word list: https://www.examword.com/group-topic/politician — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T293 - Politician 政治人物",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "government",
    "pos": "n.",
    "cn_def": "政府",
    "en_def": "the group of people who officially control a country or city",
    "sentence": "A: Why is the city hall so crowded with business owners this morning, and why are reporters waiting outside the main gate? B: The {{BLANK}} announced a new tax plan for small companies last night, so many owners came to ask officials how the changes will affect their monthly costs.",
    "cn": "A：為什麼今天早上市政廳擠滿了企業老闆，而且記者們都在大門外等待？ B：【政府】昨晚宣布了一項針對小公司的新稅務計畫，所以許多老闆前來詢問官員這些改變會如何影響他們每月的成本。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；方針",
    "en_def": "an official plan or set of rules for how to act",
    "sentence": "A: Have you heard why our company suddenly stopped giving free parking spaces to new employees who started this month? B: Yes, the city introduced a new traffic {{BLANK}} to reduce cars downtown, so our managers now encourage everyone to take the train or ride a bike to work instead.",
    "cn": "A：你有聽說為什麼公司突然不再提供免費停車位給這個月剛開始上班的新員工嗎？ B：有，市政府推出了一項新的交通【政策】來減少市中心的車輛，所以主管們現在鼓勵大家改搭火車或騎腳踏車上班。"
  },
  {
    "word": "election",
    "pos": "n.",
    "cn_def": "選舉",
    "en_def": "the time when people choose a leader by voting",
    "sentence": "A: Why did the hotel ask us to move our sales conference from the first weekend of December to a later date? B: The national {{BLANK}} will be held that weekend, so many schools and public buildings will be closed, and the hotel expects heavy traffic around the voting stations nearby.",
    "cn": "A：為什麼飯店要求我們把業務會議從十二月的第一個週末延到之後的日期？ B：那個週末將舉行全國【選舉】，所以許多學校和公共建築都會關閉，飯店預期附近投票所周圍的交通會非常擁擠。"
  },
  {
    "word": "vote",
    "pos": "v.",
    "cn_def": "投票",
    "en_def": "to officially choose someone or something, for example by marking a paper",
    "sentence": "A: Are you coming to the staff meeting on Thursday afternoon, or will you still be visiting customers in the south? B: I'll definitely be there, because all the team members will {{BLANK}} on which design to use for the new company logo, and I want my opinion to count.",
    "cn": "A：你會來參加週四下午的員工會議嗎？還是你還會在南部拜訪客戶？ B：我一定會到，因為所有團隊成員將【投票】決定新公司標誌要用哪個設計，我希望我的意見也能算數。"
  },
  {
    "word": "voter",
    "pos": "n.",
    "cn_def": "選民；投票人",
    "en_def": "a person who chooses a candidate or idea in an election",
    "sentence": "A: Why are so many volunteers standing outside the train station handing out free coffee and colorful flyers this morning? B: The mayor's team wants to remind every young {{BLANK}} in the city to check the polling place before Saturday, because fewer students took part in the last election.",
    "cn": "A：為什麼今天早上有這麼多志工站在火車站外面發送免費咖啡和彩色傳單？ B：市長團隊想提醒市內每一位年輕【選民】在週六之前確認投票地點，因為上次選舉參與的學生比較少。"
  },
  {
    "word": "campaign",
    "pos": "n.",
    "cn_def": "競選活動；宣傳活動",
    "en_def": "a series of planned activities to win an election or reach a goal",
    "sentence": "A: Why has the printing shop down the street been so busy that they couldn't finish our brochures on time this week? B: A local candidate hired them for her {{BLANK}}, so they have been printing thousands of posters and banners every night before the big rally in the park on Sunday.",
    "cn": "A：為什麼街尾那間印刷店這週忙到無法準時完成我們的手冊？ B：一位地方候選人雇用他們處理她的【競選活動】，所以在週日公園的大型造勢活動之前，他們每晚都在印製數千張海報和布條。"
  },
  {
    "word": "candidate",
    "pos": "n.",
    "cn_def": "候選人",
    "en_def": "a person who tries to be elected or chosen for a position",
    "sentence": "A: Who was that well-dressed woman shaking hands with all the shop owners in the market during our lunch break today? B: She is a {{BLANK}} for city council, and she was explaining her plans to improve parking and reduce rent for small businesses if people choose her next month.",
    "cn": "A：今天午休時，在市場裡和所有店家老闆握手的那位穿著體面的女士是誰？ B：她是市議會的【候選人】，她在說明如果下個月大家選她，她打算如何改善停車問題並為小商家降低租金。"
  },
  {
    "word": "party",
    "pos": "n.",
    "cn_def": "政黨",
    "en_def": "an organized group of people with the same political ideas",
    "sentence": "A: Why did the reporter on the evening news say that the vote in the city council next week will be so difficult to predict? B: No single political {{BLANK}} has enough seats to control the council, so the members must work together and agree on a budget before the end of the year.",
    "cn": "A：為什麼晚間新聞的記者說下週市議會的表決很難預測？ B：沒有任何一個【政黨】擁有足夠的席次掌控議會，所以議員們必須合作，並在年底前就預算達成共識。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領袖；領導人",
    "en_def": "a person who is in charge of a group, country, or organization",
    "sentence": "A: Why are there so many police cars and security guards around the conference center near our office today? B: The {{BLANK}} of a neighboring country is visiting to discuss trade, so the streets will be closed until evening, and we should probably leave work early to avoid traffic.",
    "cn": "A：為什麼今天我們辦公室附近的會議中心周圍有這麼多警車和保全人員？ B：一位鄰國的【領導人】正在來訪討論貿易，所以街道會封閉到傍晚，我們或許應該提早下班以避開車潮。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講；演說",
    "en_def": "a formal talk given to a group of people",
    "sentence": "A: Did you watch the mayor at the opening ceremony of the new library yesterday morning, or were you too busy at the office? B: I watched it online, and her {{BLANK}} was short but very moving, because she thanked the volunteers and promised more money for reading programs for children.",
    "cn": "A：你昨天早上有看市長在新圖書館開幕典禮上的表現嗎？還是你在辦公室太忙了？ B：我在網路上看了，她的【演講】雖然很短但非常感人，因為她感謝了志工，並承諾為兒童閱讀計畫提供更多經費。"
  },
  {
    "word": "debate",
    "pos": "n.",
    "cn_def": "辯論",
    "en_def": "a public discussion in which people give different opinions",
    "sentence": "A: Why is the television in the staff lounge so loud tonight, and why are so many people still in the office? B: The two main candidates are having a live {{BLANK}} about housing prices and jobs, and several of our coworkers wanted to watch it together after the late meeting.",
    "cn": "A：為什麼今晚員工休息室的電視這麼大聲，而且還有這麼多人留在辦公室？ B：兩位主要候選人正在進行關於房價和就業的現場【辯論】，好幾位同事想在晚間會議結束後一起觀看。"
  },
  {
    "word": "parliament",
    "pos": "n.",
    "cn_def": "國會；議會",
    "en_def": "the group of elected people who make laws in some countries",
    "sentence": "A: Why do the importers in our department look so worried about the new rules for food packaging this week? B: The {{BLANK}} in London is discussing stricter labeling rules, and if the members pass them, we will have to change all the boxes we send to Britain next year.",
    "cn": "A：為什麼我們部門的進口商這週對食品包裝新規定看起來這麼擔心？ B：倫敦的【國會】正在討論更嚴格的標示規定，如果議員們通過，我們明年就得更換所有寄往英國的包裝盒。"
  },
  {
    "word": "congress",
    "pos": "n.",
    "cn_def": "（美國）國會",
    "en_def": "the group of people elected to make laws in the United States and some other countries",
    "sentence": "A: Why did our American partners delay signing the contract for the new solar panels until next spring? B: They are waiting to see whether {{BLANK}} approves a tax break for clean energy, because the decision could save their company millions of dollars on the whole project.",
    "cn": "A：為什麼我們的美國合作夥伴把新太陽能板的合約延到明年春天才簽？ B：他們在等著看【國會】是否會通過清潔能源的減稅措施，因為這項決定可能為他們公司在整個專案上省下數百萬美元。"
  },
  {
    "word": "minister",
    "pos": "n.",
    "cn_def": "部長",
    "en_def": "a person who leads a government department",
    "sentence": "A: Why will the factory tour scheduled for Friday afternoon be so carefully organized, with extra cleaning and new safety signs? B: The {{BLANK}} of economic affairs is visiting to see our new production line, and she will also meet local workers to talk about jobs and training.",
    "cn": "A：為什麼週五下午的工廠參觀要安排得這麼仔細，還要額外打掃和設置新的安全標示？ B：經濟部【部長】要來參觀我們的新生產線，她也會和當地工人見面，談談就業與培訓的事。"
  },
  {
    "word": "president",
    "pos": "n.",
    "cn_def": "總統；總裁",
    "en_def": "the leader of a country that has no king or queen; also the head of a company",
    "sentence": "A: Why are all the flights from the capital to Tokyo fully booked on Monday, even the expensive business class seats? B: The {{BLANK}} is traveling to Japan for an important trade meeting, and many business leaders and reporters are joining the trip to sign new agreements.",
    "cn": "A：為什麼週一從首都飛往東京的班機全部客滿，連昂貴的商務艙座位也是？ B：【總統】要前往日本參加一場重要的貿易會議，許多企業領袖和記者也隨行，準備簽署新的協議。"
  },
  {
    "word": "prime minister",
    "pos": "n.phr.",
    "cn_def": "首相；總理",
    "en_def": "the leader of the government in some countries, such as the UK or Japan",
    "sentence": "A: Why did the stock market go up so quickly this afternoon, right after lunch, when it had been falling all week? B: The {{BLANK}} gave a press conference and promised to lower business taxes next year, so investors felt more confident and started buying shares again.",
    "cn": "A：為什麼今天下午午餐過後股市漲得這麼快？整個星期它都在下跌。 B：【首相】召開記者會，承諾明年降低企業稅，所以投資人信心增加，又開始買進股票。"
  },
  {
    "word": "democracy",
    "pos": "n.",
    "cn_def": "民主；民主政治",
    "en_def": "a system of government in which people choose their leaders by voting",
    "sentence": "A: Why is the history museum offering free entry and special guided tours for students and office workers all this month? B: It is celebrating thirty years of {{BLANK}} in our country, so the exhibits show how ordinary citizens won the right to choose their own leaders freely.",
    "cn": "A：為什麼歷史博物館這整個月都對學生和上班族提供免費入場和特別導覽？ B：博物館正在慶祝我國實施【民主】三十週年，所以展覽呈現了一般公民如何爭取到自由選擇自己領導人的權利。"
  },
  {
    "word": "law",
    "pos": "n.",
    "cn_def": "法律",
    "en_def": "a rule made by the government that everyone must follow",
    "sentence": "A: Why did the restaurant next to our office stop giving out plastic straws and bags to customers this month? B: A new {{BLANK}} requires all food shops to reduce plastic waste, and businesses that break the rule have to pay a large fine to the city.",
    "cn": "A：為什麼我們辦公室隔壁的餐廳這個月不再提供塑膠吸管和袋子給客人？ B：一項新【法律】要求所有餐飲店減少塑膠垃圾，違反規定的商家必須向市政府繳納一大筆罰款。"
  },
  {
    "word": "legislation",
    "pos": "n.",
    "cn_def": "立法；法規",
    "en_def": "a law or a group of laws",
    "sentence": "A: Why did the human resources manager call an urgent meeting with all the department heads this morning? B: New {{BLANK}} on working hours takes effect in January, so we must update our overtime rules and make sure no employee works more than forty-eight hours a week.",
    "cn": "A：為什麼人資經理今天早上緊急召集所有部門主管開會？ B：關於工時的新【法規】將於一月生效，所以我們必須更新加班規定，並確保沒有員工每週工作超過四十八小時。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公眾的；公開的",
    "en_def": "open to or connected with all the people in a place",
    "sentence": "A: Why are there so many people waiting outside the community center with signs this evening, even in the rain? B: The city is holding a {{BLANK}} meeting about the new shopping mall, and anyone who lives nearby can come in and share their opinion with the planners.",
    "cn": "A：為什麼今天傍晚即使下雨，社區活動中心外面還有這麼多人拿著標語在等待？ B：市政府正在舉行關於新購物中心的【公開】會議，住在附近的任何人都可以進來向規劃人員表達意見。"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民；市民",
    "en_def": "a person who legally belongs to a country or city",
    "sentence": "A: Why are the tables at the front of the city hall so busy this morning, with long lines of people holding forms? B: Every {{BLANK}} over eighteen can apply for the new free health check this month, so many residents are bringing their ID cards and filling out papers before work.",
    "cn": "A：為什麼今天早上市政廳前方的桌子這麼忙碌，一長排人拿著表格排隊？ B：這個月每位年滿十八歲的【市民】都可以申請新的免費健康檢查，所以許多居民在上班前帶著身分證來填寫資料。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "權力；職權",
    "en_def": "the power or right to make decisions or give orders",
    "sentence": "A: Can you sign this contract with the overseas supplier today, so we can start production before the holiday? B: I'm sorry, but I don't have the {{BLANK}} to approve contracts over one million dollars, so we will need to wait for the director to return from Singapore on Monday.",
    "cn": "A：你今天可以簽下這份與海外供應商的合約嗎？這樣我們就能在假期前開始生產。 B：很抱歉，我沒有【權限】核准超過一百萬美元的合約，所以我們得等主任週一從新加坡回來。"
  },
  {
    "word": "corruption",
    "pos": "n.",
    "cn_def": "貪污；腐敗",
    "en_def": "dishonest or illegal behavior by people in power, such as taking money",
    "sentence": "A: Why was the construction of the new bridge near the airport suddenly stopped, even though it was almost finished? B: Investigators found evidence of {{BLANK}}, because a city official secretly accepted money from the builder in return for the contract, so the whole project is now under review.",
    "cn": "A：為什麼機場附近新橋的工程突然停工，明明幾乎快完成了？ B：調查人員發現了【貪污】的證據，因為一位市府官員私下收了建商的錢來換取合約，所以整個工程現在正在接受審查。"
  },
  {
    "word": "scandal",
    "pos": "n.",
    "cn_def": "醜聞",
    "en_def": "an event that shocks people because it involves bad or dishonest behavior",
    "sentence": "A: Why did the mayor cancel his visit to our factory and all his other public events for the rest of the week? B: A newspaper reported a {{BLANK}} about his office spending public money on luxury hotels, so he is staying away from reporters until the investigation is finished.",
    "cn": "A：為什麼市長取消了到我們工廠的參訪，以及本週其餘所有公開活動？ B：一家報社報導了他的辦公室花公款住豪華飯店的【醜聞】，所以在調查結束前他都避開記者。"
  },
  {
    "word": "promise",
    "pos": "v.",
    "cn_def": "承諾；保證",
    "en_def": "to say that you will certainly do something",
    "sentence": "A: Why are so many shop owners in our neighborhood planning to vote for the new candidate in next month's election? B: Many of them like her because she did not just {{BLANK}} lower taxes; she also explained clearly how she would pay for better roads and safer parks.",
    "cn": "A：為什麼我們社區有這麼多店家老闆打算在下個月的選舉中投給那位新候選人？ B：他們很多人喜歡她，因為她不只是【承諾】降低稅金，還清楚說明了她要如何支付更好的道路和更安全的公園的經費。"
  },
  {
    "word": "reform",
    "pos": "n.",
    "cn_def": "改革",
    "en_def": "a change that improves a system, law, or organization",
    "sentence": "A: Why do the hospital managers seem so busy with new paperwork and meetings with the city health office this month? B: The government started a major health care {{BLANK}}, so hospitals must change how they record patient visits and how they charge for medicine and services.",
    "cn": "A：為什麼醫院管理者這個月似乎忙著處理新的文件，並和市衛生局開會？ B：政府展開了一項重大的醫療【改革】，所以醫院必須改變記錄病患就診的方式，以及藥品和服務的收費方式。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持",
    "en_def": "to agree with and help a person, group, or idea",
    "sentence": "A: Did the city council finally approve the plan for the new bike lanes along Park Road near our office? B: Yes, most of the members decided to {{BLANK}} the plan after hundreds of local workers signed a letter saying it would make their trip to work much safer.",
    "cn": "A：市議會最後有核准我們辦公室附近公園路新自行車道的計畫嗎？ B：有，在數百名當地上班族簽署一封信，表示這將讓他們通勤安全許多之後，大部分議員決定【支持】這項計畫。"
  },
  {
    "word": "oppose",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to disagree with something and try to stop it",
    "sentence": "A: Why are the farmers from the villages near the river holding signs in front of the government building today? B: They strongly {{BLANK}} the plan to build a large chemical factory next to their fields, because they are afraid it will pollute the water they use for their crops.",
    "cn": "A：為什麼今天河邊村莊的農民在政府大樓前舉著標語？ B：他們強烈【反對】在他們田地旁邊興建大型化學工廠的計畫，因為他們擔心工廠會汙染他們灌溉作物的水。"
  },
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "代表",
    "en_def": "to speak or act officially for another person or group",
    "sentence": "A: Who will go to the industry meeting in Kaohsiung next week, since our general manager has to stay here for the audit? B: Ms. Lin from sales will {{BLANK}} our company, and she will present our new products and answer questions from the government officials who attend.",
    "cn": "A：既然總經理下週得留下來配合稽核，誰會去參加在高雄舉行的產業會議？ B：業務部的林小姐會【代表】我們公司出席，她會介紹我們的新產品，並回答與會政府官員的問題。"
  },
  {
    "word": "term",
    "pos": "n.",
    "cn_def": "任期",
    "en_def": "a fixed period of time that someone holds an official job",
    "sentence": "A: Why does everyone at the chamber of commerce say the mayor is pushing so hard to finish the train station this year? B: Her four-year {{BLANK}} ends next December, and she wants to open the station before then, so people will remember her for improving transportation in the city.",
    "cn": "A：為什麼商會裡大家都說市長今年這麼努力推動完成火車站？ B：她四年的【任期】明年十二月就要結束了，她想在那之前讓車站啟用，這樣大家就會記得她改善了城市的交通。"
  },
  {
    "word": "appoint",
    "pos": "v.",
    "cn_def": "任命；指派",
    "en_def": "to choose someone officially for a job or position",
    "sentence": "A: Who will lead the new department for environmental protection that the city is creating this year? B: The mayor plans to {{BLANK}} a university professor with twenty years of experience in clean energy, and she will start the job at the beginning of next month.",
    "cn": "A：市政府今年新設立的環境保護部門會由誰來領導？ B：市長計畫【任命】一位在潔淨能源方面有二十年經驗的大學教授，她將在下個月初開始上任。"
  },
  {
    "word": "resign",
    "pos": "v.",
    "cn_def": "辭職",
    "en_def": "to officially leave your job or position",
    "sentence": "A: Why did the head of the city's transport office suddenly leave the press conference without answering any questions this afternoon? B: He decided to {{BLANK}} after the bus accident last week, because many people believed his office ignored serious safety problems with the old buses for years.",
    "cn": "A：為什麼市府交通局長今天下午突然離開記者會，沒有回答任何問題？ B：他在上週公車事故後決定【辭職】，因為許多人認為他的單位多年來忽視了舊公車嚴重的安全問題。"
  },
  {
    "word": "diplomatic",
    "pos": "adj.",
    "cn_def": "外交的",
    "en_def": "connected with managing relationships between countries",
    "sentence": "A: Why are there so many black cars with flags parked outside the hotel where our trade fair is taking place? B: A {{BLANK}} meeting between officials from Taiwan and Japan is being held on the top floor, so security is tight, and visitors must show their badges at every entrance.",
    "cn": "A：為什麼我們舉辦貿易展的飯店外停了這麼多插著國旗的黑色轎車？ B：台灣和日本官員之間的【外交】會議正在頂樓舉行，所以安檢很嚴格，訪客在每個入口都必須出示識別證。"
  },
  {
    "word": "transparent",
    "pos": "adj.",
    "cn_def": "透明的；公開的",
    "en_def": "open and honest, so people can see how decisions are made",
    "sentence": "A: Why did the new council member post the full city budget on her website, including every payment to outside companies? B: She wants the government to be more {{BLANK}}, so citizens can see exactly how their tax money is spent and ask questions if something looks wrong.",
    "cn": "A：為什麼那位新市議員把完整的市府預算公布在她的網站上，包括每一筆付給外部公司的款項？ B：她希望政府更加【透明】，這樣市民可以清楚看到他們的稅金如何被使用，若有不對勁的地方也能提出質疑。"
  }
];

const MCQS = [
  {
    "q": "The _____ will give small businesses free training on digital marketing next year. Owners can apply online through the city website.",
    "options": [
      "government",
      "debate",
      "scandal",
      "speech"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our company has a strict _____ against accepting gifts from suppliers. Employees who break this rule may lose their jobs.",
    "options": [
      "candidate",
      "voter",
      "policy",
      "term"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Residents will choose a new mayor in the _____ next month. Polling stations will open early in the morning on Saturday.",
    "options": [
      "reform",
      "election",
      "authority",
      "corruption"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "All shareholders are invited to _____ on the merger at the annual meeting. The results will be announced on Friday.",
    "options": [
      "resign",
      "appoint",
      "represent",
      "vote"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The candidate spent most of her _____ budget on online advertising. Her team believed young people rarely watch television news.",
    "options": [
      "parliament",
      "democracy",
      "campaign",
      "legislation"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Each _____ for city council must collect five hundred signatures before March. Applications without enough signatures will not be accepted.",
    "options": [
      "candidate",
      "policy",
      "scandal",
      "reform"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "After losing the election, the _____ chose a new chairperson to lead it. Members hope the change will attract younger supporters.",
    "options": [
      "speech",
      "law",
      "term",
      "party"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The _____ of the union met with factory managers to discuss safety. Workers are waiting to hear what was agreed.",
    "options": [
      "policy",
      "leader",
      "election",
      "legislation"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The CEO gave a short _____ at the opening of the new branch. She thanked the staff for their hard work.",
    "options": [
      "speech",
      "vote",
      "law",
      "corruption"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Students from five universities will take part in a _____ on climate change. Each team will have ten minutes to present arguments.",
    "options": [
      "citizen",
      "minister",
      "debate",
      "authority"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The new trade law must be approved by _____ before it can take effect. Members will discuss it in a special session.",
    "options": [
      "speech",
      "parliament",
      "scandal",
      "campaign"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The finance _____ announced that interest rates would stay the same this year. Banks welcomed the news after months of uncertainty.",
    "options": [
      "voter",
      "election",
      "debate",
      "minister"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The company _____ will visit our Taichung office next Tuesday. Please make sure the meeting room is clean and ready.",
    "options": [
      "democracy",
      "legislation",
      "president",
      "corruption"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The _____ of Japan will meet business leaders in Taipei next week. They will discuss investment in green energy.",
    "options": [
      "prime minister",
      "legislation",
      "democracy",
      "reform"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Under the new _____, companies must give workers at least two weeks of paid leave. Many employers are updating their contracts now.",
    "options": [
      "speech",
      "debate",
      "scandal",
      "law"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The government plans to introduce _____ to protect online shoppers from fraud. The new rules should be passed by the end of the year.",
    "options": [
      "corruption",
      "legislation",
      "democracy",
      "election"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The company will hold a _____ meeting next week to explain the factory plans. Anyone living nearby is welcome to attend.",
    "options": [
      "public",
      "diplomatic",
      "guilty",
      "elected"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Only the branch manager has the _____ to approve refunds over five thousand dollars. Please send all such requests to her office.",
    "options": [
      "campaign",
      "election",
      "authority",
      "speech"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The official was arrested for _____ after taking money from a construction company. He denied all of the charges in court.",
    "options": [
      "reform",
      "corruption",
      "democracy",
      "policy"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The accounting _____ damaged the company's reputation, and its share price fell sharply. Several senior managers lost their jobs.",
    "options": [
      "candidate",
      "president",
      "speech",
      "scandal"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Our managers always _____ to reply to customer complaints within one day. However, the service team sometimes needs more time.",
    "options": [
      "oppose",
      "resign",
      "promise",
      "appoint"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The new president announced a major tax _____ to help small businesses grow. The changes will take effect next January.",
    "options": [
      "reform",
      "voter",
      "scandal",
      "citizen"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Most employees _____ the plan to offer flexible working hours. The manager will start the new schedule next month.",
    "options": [
      "resign",
      "appoint",
      "represent",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Local residents _____ the plan to build a factory near the school. They worry about noise and air pollution.",
    "options": [
      "appoint",
      "oppose",
      "resign",
      "represent"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Our sales director will _____ the company at the trade fair in Berlin. She will meet several possible buyers there.",
    "options": [
      "represent",
      "resign",
      "vote",
      "oppose"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The mayor is now serving her second _____ in office. She cannot run again in the next election.",
    "options": [
      "speech",
      "debate",
      "term",
      "party"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The board will _____ a new chief financial officer next week. The person chosen will start work in March.",
    "options": [
      "oppose",
      "appoint",
      "vote",
      "resign"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The sales manager decided to _____ after twenty years with the company. Her team held a farewell party on her last day.",
    "options": [
      "appoint",
      "oppose",
      "represent",
      "resign"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The two countries restored _____ relations after ten years of tension. Both sides will soon open new embassies in their capitals.",
    "options": [
      "transparent",
      "elected",
      "diplomatic",
      "guilty"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Investors want the company to be more _____ about how it spends their money. The CEO promised to publish detailed monthly reports.",
    "options": [
      "transparent",
      "guilty",
      "elected",
      "rural"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "government": {
    "pos": "n.",
    "en_def": "the group of people who officially control a country or city",
    "cn_def": "政府"
  },
  "policy": {
    "pos": "n.",
    "en_def": "an official plan or set of rules for how to act",
    "cn_def": "政策；方針"
  },
  "election": {
    "pos": "n.",
    "en_def": "the time when people choose a leader by voting",
    "cn_def": "選舉"
  },
  "vote": {
    "pos": "v.",
    "en_def": "to officially choose someone or something, for example by marking a paper",
    "cn_def": "投票"
  },
  "voter": {
    "pos": "n.",
    "en_def": "a person who chooses a candidate or idea in an election",
    "cn_def": "選民；投票人"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a series of planned activities to win an election or reach a goal",
    "cn_def": "競選活動；宣傳活動"
  },
  "candidate": {
    "pos": "n.",
    "en_def": "a person who tries to be elected or chosen for a position",
    "cn_def": "候選人"
  },
  "party": {
    "pos": "n.",
    "en_def": "an organized group of people with the same political ideas",
    "cn_def": "政黨"
  },
  "leader": {
    "pos": "n.",
    "en_def": "a person who is in charge of a group, country, or organization",
    "cn_def": "領袖；領導人"
  },
  "speech": {
    "pos": "n.",
    "en_def": "a formal talk given to a group of people",
    "cn_def": "演講；演說"
  },
  "debate": {
    "pos": "n.",
    "en_def": "a public discussion in which people give different opinions",
    "cn_def": "辯論"
  },
  "parliament": {
    "pos": "n.",
    "en_def": "the group of elected people who make laws in some countries",
    "cn_def": "國會；議會"
  },
  "congress": {
    "pos": "n.",
    "en_def": "the group of people elected to make laws in the United States and some other countries",
    "cn_def": "（美國）國會"
  },
  "minister": {
    "pos": "n.",
    "en_def": "a person who leads a government department",
    "cn_def": "部長"
  },
  "president": {
    "pos": "n.",
    "en_def": "the leader of a country that has no king or queen; also the head of a company",
    "cn_def": "總統；總裁"
  },
  "prime minister": {
    "pos": "n.phr.",
    "en_def": "the leader of the government in some countries, such as the UK or Japan",
    "cn_def": "首相；總理"
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system of government in which people choose their leaders by voting",
    "cn_def": "民主；民主政治"
  },
  "law": {
    "pos": "n.",
    "en_def": "a rule made by the government that everyone must follow",
    "cn_def": "法律"
  },
  "legislation": {
    "pos": "n.",
    "en_def": "a law or a group of laws",
    "cn_def": "立法；法規"
  },
  "public": {
    "pos": "adj.",
    "en_def": "open to or connected with all the people in a place",
    "cn_def": "公眾的；公開的"
  },
  "citizen": {
    "pos": "n.",
    "en_def": "a person who legally belongs to a country or city",
    "cn_def": "公民；市民"
  },
  "authority": {
    "pos": "n.",
    "en_def": "the power or right to make decisions or give orders",
    "cn_def": "權力；職權"
  },
  "corruption": {
    "pos": "n.",
    "en_def": "dishonest or illegal behavior by people in power, such as taking money",
    "cn_def": "貪污；腐敗"
  },
  "scandal": {
    "pos": "n.",
    "en_def": "an event that shocks people because it involves bad or dishonest behavior",
    "cn_def": "醜聞"
  },
  "promise": {
    "pos": "v.",
    "en_def": "to say that you will certainly do something",
    "cn_def": "承諾；保證"
  },
  "reform": {
    "pos": "n.",
    "en_def": "a change that improves a system, law, or organization",
    "cn_def": "改革"
  },
  "support": {
    "pos": "v.",
    "en_def": "to agree with and help a person, group, or idea",
    "cn_def": "支持"
  },
  "oppose": {
    "pos": "v.",
    "en_def": "to disagree with something and try to stop it",
    "cn_def": "反對"
  },
  "represent": {
    "pos": "v.",
    "en_def": "to speak or act officially for another person or group",
    "cn_def": "代表"
  },
  "term": {
    "pos": "n.",
    "en_def": "a fixed period of time that someone holds an official job",
    "cn_def": "任期"
  },
  "appoint": {
    "pos": "v.",
    "en_def": "to choose someone officially for a job or position",
    "cn_def": "任命；指派"
  },
  "resign": {
    "pos": "v.",
    "en_def": "to officially leave your job or position",
    "cn_def": "辭職"
  },
  "diplomatic": {
    "pos": "adj.",
    "en_def": "connected with managing relationships between countries",
    "cn_def": "外交的"
  },
  "transparent": {
    "pos": "adj.",
    "en_def": "open and honest, so people can see how decisions are made",
    "cn_def": "透明的；公開的"
  }
};

const EXTRA_GLOSSES = {};
