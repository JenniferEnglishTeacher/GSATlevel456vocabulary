// Topic 87 Quiz Data: COVID-19 新冠肺炎
// Source word list: https://www.examword.com/group-topic/covid-19 — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T87 - COVID-19 新冠肺炎",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "virus",
    "pos": "n.",
    "cn_def": "病毒",
    "en_def": "a very small living thing that causes illness",
    "sentence": "A: Why did the clinic ask all the staff to wear masks again in the waiting room this week? B: A new flu {{BLANK}} is spreading quickly through the city, and the doctors want to protect older patients, so everyone must also wash their hands often and stay home if they feel unwell.",
    "cn": "A：診所這週為什麼又要求所有員工在候診室戴口罩？ B：一種新的流感【病毒】正在城裡迅速傳播，醫生們想保護年長的病人，所以每個人也必須常洗手，覺得不舒服就待在家裡。"
  },
  {
    "word": "disease",
    "pos": "n.",
    "cn_def": "疾病",
    "en_def": "an illness that affects people, animals or plants",
    "sentence": "A: Why is the company offering free health checks to all employees in the main office next month? B: The HR team learned that heart {{BLANK}} is a serious problem for people who sit at desks all day, so they invited nurses from the local hospital to check everyone's blood pressure and give advice.",
    "cn": "A：公司為什麼下個月要為總公司所有員工提供免費健康檢查？ B：人資團隊得知心臟【疾病】對整天坐在辦公桌前的人來說是個嚴重問題，所以邀請了當地醫院的護士來為每個人量血壓並提供建議。"
  },
  {
    "word": "coronaviruses",
    "pos": "n.",
    "cn_def": "冠狀病毒（複數）",
    "en_def": "a group of viruses that can cause illnesses such as colds and COVID-19",
    "sentence": "A: What was the guest speaker from the university talking about at the health and safety seminar yesterday afternoon? B: She explained that {{BLANK}} are a large family of germs, and some of them only cause a mild cold, while others, like the one behind the global crisis in 2020, can be very dangerous.",
    "cn": "A：昨天下午健康安全研討會上，那位大學來的客座講者在談什麼？ B：她解釋說【冠狀病毒】是一個龐大的病菌家族，其中有些只會引起輕微感冒，而另一些，像是造成2020年全球危機的那一種，可能非常危險。"
  },
  {
    "word": "outbreak",
    "pos": "n.",
    "cn_def": "（疾病的）爆發",
    "en_def": "a sudden start of a disease that affects many people",
    "sentence": "A: Why did the cruise company cancel next week's trip to the islands and offer every passenger a full refund? B: There was an {{BLANK}} of stomach flu on the ship last week, and more than two hundred people got sick, so the whole ship has to be cleaned carefully before it can sail again.",
    "cn": "A：郵輪公司為什麼取消下週前往群島的行程，並提供每位乘客全額退款？ B：上週船上【爆發】了腸胃型流感，超過兩百人生病，所以整艘船必須徹底清潔後才能再次出航。"
  },
  {
    "word": "transmission",
    "pos": "n.",
    "cn_def": "傳播；傳染",
    "en_def": "the passing of a disease from one person to another",
    "sentence": "A: Why did the office manager put plastic screens between all the desks in the customer service area this morning? B: The health department says the screens can reduce the {{BLANK}} of the flu from one worker to another, especially in busy rooms where people talk on the phone all day.",
    "cn": "A：辦公室經理今天早上為什麼在客服區的所有辦公桌之間裝了塑膠隔板？ B：衛生局說隔板可以減少流感在員工之間的【傳播】，尤其是在大家整天講電話的忙碌空間裡。"
  },
  {
    "word": "symptom",
    "pos": "n.",
    "cn_def": "症狀",
    "en_def": "a sign that you have an illness",
    "sentence": "A: When should employees stay at home instead of coming into the office during the flu season this winter? B: If you have even one {{BLANK}}, such as a high fever, a sore throat or a bad cough, you should call your supervisor, work from home and see a doctor as soon as possible.",
    "cn": "A：今年冬天流感季期間，員工什麼時候應該待在家而不是進辦公室？ B：只要你有任何一種【症狀】，例如發高燒、喉嚨痛或嚴重咳嗽，就應該打電話給主管、在家工作，並儘快去看醫生。"
  },
  {
    "word": "respiratory",
    "pos": "adj.",
    "cn_def": "呼吸的；呼吸道的",
    "en_def": "connected with breathing",
    "sentence": "A: Why does the factory require all workers in the paint room to wear special masks during every shift? B: Breathing in the chemicals every day can cause serious {{BLANK}} problems, such as coughing and difficulty breathing, so the masks protect their lungs while they work with the paint.",
    "cn": "A：工廠為什麼要求噴漆室的所有工人每個班次都要戴特殊口罩？ B：每天吸入化學物質可能造成嚴重的【呼吸道】問題，例如咳嗽和呼吸困難，所以口罩能在他們處理油漆時保護肺部。"
  },
  {
    "word": "asthma",
    "pos": "n.",
    "cn_def": "氣喘；哮喘",
    "en_def": "an illness that makes it difficult to breathe",
    "sentence": "A: Why did Mr. Chen ask to move his desk away from the window near the busy road outside? B: He has {{BLANK}}, and the dust and smoke from the traffic sometimes make it hard for him to breathe, so he feels much better sitting in the quieter area near the meeting rooms.",
    "cn": "A：陳先生為什麼要求把他的辦公桌從靠近外面繁忙馬路的窗邊移開？ B：他有【氣喘】，車流造成的灰塵和廢氣有時讓他呼吸困難，所以他坐在靠近會議室較安靜的區域會舒服很多。"
  },
  {
    "word": "acute",
    "pos": "adj.",
    "cn_def": "急性的；劇烈的",
    "en_def": "very serious or severe, and starting suddenly",
    "sentence": "A: Why was the sales director taken to the hospital in the middle of the client meeting this afternoon? B: He suddenly felt {{BLANK}} pain in his stomach and could not stand up, so his assistant called an ambulance, and the doctors are now checking whether he needs an operation tonight.",
    "cn": "A：業務總監今天下午為什麼在客戶會議進行到一半時被送到醫院？ B：他突然感到胃部【劇烈的】疼痛，站不起來，所以他的助理叫了救護車，醫生們正在檢查他今晚是否需要動手術。"
  },
  {
    "word": "pneumonia",
    "pos": "n.",
    "cn_def": "肺炎",
    "en_def": "a serious illness of the lungs",
    "sentence": "A: Why has Ms. Lin been away from the office for almost three weeks, and when will she return to work? B: Her cold got much worse and turned into {{BLANK}}, so she had to stay in the hospital for several days, and her doctor says she needs another week of rest at home.",
    "cn": "A：林小姐為什麼已經快三個星期沒來辦公室？她什麼時候會回來上班？ B：她的感冒變得嚴重很多，轉成了【肺炎】，所以她必須住院好幾天，醫生說她還需要在家休息一個星期。"
  },
  {
    "word": "syndrome",
    "pos": "n.",
    "cn_def": "症候群；綜合症",
    "en_def": "a group of signs that together show a particular illness",
    "sentence": "A: Why did the airline start showing a short video about leg exercises on all of its long international flights? B: Sitting still for many hours can cause a health problem sometimes called economy class {{BLANK}}, so the video teaches passengers simple ways to move their legs and keep their blood flowing.",
    "cn": "A：航空公司為什麼開始在所有長程國際航班上播放關於腿部運動的短片？ B：長時間坐著不動可能引起一種有時被稱為經濟艙【症候群】的健康問題，所以影片教乘客用簡單的方法活動雙腿、保持血液循環。"
  },
  {
    "word": "epidemic",
    "pos": "n.",
    "cn_def": "（區域性）流行病；疫情",
    "en_def": "a disease that spreads quickly among many people in one area",
    "sentence": "A: Why did the government ask all large companies to let their staff work from home for the next two weeks? B: A flu {{BLANK}} has moved across several cities in the north, and hospitals are already full, so officials want fewer people on crowded trains and buses until the number of cases goes down.",
    "cn": "A：政府為什麼要求所有大公司讓員工在接下來兩週在家工作？ B：一場流感【疫情】已經擴散到北部好幾個城市，醫院已經爆滿，所以官員希望在病例數下降之前減少搭乘擁擠火車和公車的人。"
  },
  {
    "word": "pandemic",
    "pos": "n.",
    "cn_def": "全球大流行病",
    "en_def": "a disease that spreads over many countries at the same time",
    "sentence": "A: How did your travel agency survive when almost nobody could fly overseas a few years ago? B: During the {{BLANK}}, we stopped selling international tours and started offering local hiking trips and online cooking classes, which helped us keep most of our staff until people could travel abroad again.",
    "cn": "A：幾年前幾乎沒人能搭機出國時，你們的旅行社是怎麼撐過去的？ B：在【全球大流行】期間，我們停止銷售國際旅遊行程，改推當地健行之旅和線上烹飪課，這幫助我們留住大部分員工，直到大家能再次出國旅行。"
  },
  {
    "word": "epicentre",
    "pos": "n.",
    "cn_def": "中心；重災區",
    "en_def": "the central place where something bad is happening most strongly",
    "sentence": "A: Why did the company move its Asian sales meeting from the capital to a hotel on the coast at the last minute? B: The capital had become the {{BLANK}} of a serious flu outbreak, with thousands of new cases every day, so the managers decided it was safer to hold the meeting somewhere else.",
    "cn": "A：公司為什麼在最後一刻把亞洲業務會議從首都移到海邊的一家飯店？ B：首都成了一場嚴重流感疫情的【中心】，每天都有數千個新病例，所以經理們決定在別的地方開會比較安全。"
  },
  {
    "word": "infect",
    "pos": "v.",
    "cn_def": "傳染；感染",
    "en_def": "to give someone a disease",
    "sentence": "A: Why does the hospital ask every visitor to clean their hands at the front door before going upstairs? B: Germs on your hands can easily {{BLANK}} patients whose bodies are already weak, so washing or cleaning your hands is one of the simplest ways to keep everyone in the building safe.",
    "cn": "A：醫院為什麼要求每位訪客上樓前在正門清潔雙手？ B：手上的病菌很容易【感染】本來身體就虛弱的病人，所以洗手或清潔雙手是讓大樓裡每個人保持安全最簡單的方法之一。"
  },
  {
    "word": "infection",
    "pos": "n.",
    "cn_def": "感染",
    "en_def": "an illness caused by germs entering the body",
    "sentence": "A: Why did the dentist give you medicine after your appointment, even though the treatment didn't hurt at all? B: She took out a broken tooth, and she wants to prevent an {{BLANK}} in my mouth, so I have to take the pills twice a day for a week and avoid very hot drinks.",
    "cn": "A：牙醫為什麼在看診後給你藥，即使治療一點都不痛？ B：她拔掉了一顆斷掉的牙齒，想防止我嘴裡【感染】，所以我必須一天吃兩次藥，連吃一週，並避免喝太燙的飲料。"
  },
  {
    "word": "disinfect",
    "pos": "v.",
    "cn_def": "消毒",
    "en_def": "to clean something with chemicals to kill germs",
    "sentence": "A: What do the cleaners do every evening after the last customers leave the fitness center? B: They {{BLANK}} all the machines, door handles and changing rooms with a strong cleaning spray, so that the gym is safe and fresh for the early members who arrive at six the next morning.",
    "cn": "A：健身中心最後一批客人離開後，清潔人員每天晚上做什麼？ B：他們用強效清潔噴霧為所有器材、門把和更衣室【消毒】，讓健身房對隔天早上六點來的早鳥會員來說安全又清新。"
  },
  {
    "word": "contagious",
    "pos": "adj.",
    "cn_def": "傳染性的；會傳染的",
    "en_def": "easily passed from one person to another",
    "sentence": "A: Should I come to the team meeting tomorrow morning if I still have a slight cough and a runny nose? B: Please stay home, because the doctor said this kind of flu is very {{BLANK}} for at least five days, and we don't want the whole team to get sick before the big product launch.",
    "cn": "A：如果我明天早上還有點咳嗽和流鼻水，還應該來參加團隊會議嗎？ B：請待在家裡，因為醫生說這種流感至少五天內都很容易【傳染】，我們不希望整個團隊在大型產品發表會前全都生病。"
  },
  {
    "word": "contaminate",
    "pos": "v.",
    "cn_def": "污染",
    "en_def": "to make something dirty or harmful by adding germs or chemicals",
    "sentence": "A: Why did the restaurant throw away all the salad and chicken in the kitchen this morning? B: The fridge stopped working overnight, and the manager was worried that bacteria could {{BLANK}} the food, so she decided it was safer to throw everything away than to risk making customers sick.",
    "cn": "A：餐廳今天早上為什麼把廚房裡所有的沙拉和雞肉都丟掉了？ B：冰箱整晚故障，經理擔心細菌會【污染】食物，所以她決定把東西全丟掉比冒著讓客人生病的風險更安全。"
  },
  {
    "word": "expose",
    "pos": "v.",
    "cn_def": "使暴露於",
    "en_def": "to put someone in a situation where they could be harmed",
    "sentence": "A: Why do all the lab workers have to wear gloves, glasses and long coats, even for simple tests? B: Some of the samples carry harmful germs, and the company doesn't want to {{BLANK}} its staff to any danger, so everyone must follow the safety rules carefully from the moment they enter the lab.",
    "cn": "A：為什麼所有實驗室人員即使做簡單的檢驗也要戴手套、護目鏡和穿長袍？ B：有些樣本帶有有害病菌，公司不想讓員工【暴露】在任何危險中，所以每個人從進入實驗室的那一刻起都必須仔細遵守安全規定。"
  },
  {
    "word": "droplet",
    "pos": "n.",
    "cn_def": "小滴；飛沫",
    "en_def": "a very small drop of liquid",
    "sentence": "A: Why is the hotel asking guests to cover their mouths with a tissue or their arm when they cough in the lobby? B: Every time a sick person coughs, each tiny {{BLANK}} of water from the mouth can carry germs through the air, and it may land on tables, door handles or other guests nearby.",
    "cn": "A：飯店為什麼要求客人在大廳咳嗽時用紙巾或手臂遮住嘴巴？ B：生病的人每次咳嗽，嘴巴噴出的每一個微小【飛沫】都可能把病菌帶到空氣中，並落在附近的桌子、門把或其他客人身上。"
  },
  {
    "word": "respiratory droplet",
    "pos": "n.phr.",
    "cn_def": "呼吸道飛沫",
    "en_def": "a tiny drop of liquid that comes out when people cough, sneeze or talk",
    "sentence": "A: The new office has a fresh air system, but why do we still need to keep two meters apart in the meeting room? B: The system helps, but a single {{BLANK}} from someone who is talking or sneezing can still travel quite far, so staying apart lowers the chance of passing the flu to a colleague.",
    "cn": "A：新辦公室有新鮮空氣系統，但為什麼我們在會議室裡仍需保持兩公尺距離？ B：系統有幫助，但一個人說話或打噴嚏時的一顆【呼吸道飛沫】仍可能傳得相當遠，所以保持距離能降低把流感傳給同事的機會。"
  },
  {
    "word": "ventilator",
    "pos": "n.",
    "cn_def": "呼吸器",
    "en_def": "a machine that helps a sick person breathe",
    "sentence": "A: Why did the hospital spend so much of its budget on new equipment for the intensive care unit this year? B: It bought ten more machines, because each {{BLANK}} helps patients breathe when their lungs are too weak, and during last winter's flu season the hospital did not have enough of them.",
    "cn": "A：醫院今年為什麼把那麼多預算花在加護病房的新設備上？ B：它多買了十台機器，因為每一台【呼吸器】都能在病人肺部太虛弱時幫助他們呼吸，而去年冬天流感季時醫院的數量不夠。"
  },
  {
    "word": "asymptomatic",
    "pos": "adj.",
    "cn_def": "無症狀的",
    "en_def": "having an illness but showing no signs of it",
    "sentence": "A: Why did the company test every employee before the overseas trip, even people who felt completely healthy? B: Some people who carry the virus are {{BLANK}}, which means they feel fine and have no fever or cough, but they can still pass it to others on the plane or at the trade fair.",
    "cn": "A：公司為什麼在出國前替每位員工做檢測，甚至包括覺得完全健康的人？ B：有些帶有病毒的人是【無症狀的】，也就是說他們感覺很好，沒有發燒或咳嗽，但仍可能在飛機上或商展時傳染給別人。"
  },
  {
    "word": "target",
    "pos": "v.",
    "cn_def": "以…為目標；針對",
    "en_def": "to aim help or action at a particular group or place",
    "sentence": "A: Why is the city sending free health vans only to a few neighborhoods instead of to every part of town? B: Officials decided to {{BLANK}} the areas with the highest number of cases and the most elderly residents, so the limited number of nurses and test kits can help the people who need them most.",
    "cn": "A：市政府為什麼只派免費健康巡迴車到少數幾個社區，而不是城裡每個地方？ B：官員決定把【目標鎖定】在病例數最多、年長居民最多的地區，讓有限的護理師和檢測試劑能幫助最需要的人。"
  },
  {
    "word": "zoonotic",
    "pos": "adj.",
    "cn_def": "人畜共通的",
    "en_def": "able to pass from animals to humans",
    "sentence": "A: Why are the farm workers at the poultry company getting special health training this month? B: The trainers are teaching them about {{BLANK}} diseases, which can pass from chickens and other animals to humans, so the workers learn how to wear protective clothing and wash properly after each shift.",
    "cn": "A：家禽公司的農場工人這個月為什麼要接受特別的健康訓練？ B：訓練人員正在教他們有關【人畜共通的】疾病，這類疾病可能從雞和其他動物傳染給人，所以工人們要學習如何穿防護衣，以及每個班次後如何正確清洗。"
  },
  {
    "word": "widespread",
    "pos": "adj.",
    "cn_def": "廣泛的；普遍的",
    "en_def": "happening in many places or among many people",
    "sentence": "A: Why did the company decide to make the online shopping app its top priority for the next two years? B: Our research showed {{BLANK}} changes in how people shop since the health crisis, with many customers in every age group now ordering food and clothes on their phones instead of visiting stores.",
    "cn": "A：公司為什麼決定把線上購物應用程式列為未來兩年的首要任務？ B：我們的研究顯示，自從健康危機以來，人們的購物方式出現了【廣泛的】改變，各年齡層的許多顧客現在都用手機訂購食物和衣服，而不是去實體店。"
  },
  {
    "word": "super-spreader",
    "pos": "n.",
    "cn_def": "超級傳播者",
    "en_def": "a person who passes a disease to an unusually large number of people",
    "sentence": "A: Why did the health department contact everyone who attended the company's annual dinner last Friday? B: One guest turned out to be a {{BLANK}} who passed the flu to more than forty people at the party, so officials want everyone who was there to watch their health closely for a week.",
    "cn": "A：衛生局為什麼聯絡了上週五參加公司年度晚宴的每個人？ B：其中一位賓客原來是【超級傳播者】，在派對上把流感傳給了四十多人，所以官員希望在場的每個人在一週內密切注意自己的健康。"
  },
  {
    "word": "epidemiologist",
    "pos": "n.",
    "cn_def": "流行病學家",
    "en_def": "a scientist who studies how diseases spread",
    "sentence": "A: Who did the city council invite to speak at the public meeting about the new flu rules next week? B: They invited an {{BLANK}} from the national university, who studies how diseases move through large groups of people, so she can explain why the rules are needed and answer questions from local business owners.",
    "cn": "A：市議會邀請誰在下週關於新流感規定的公開會議上演講？ B：他們邀請了國立大學的一位【流行病學家】，她研究疾病如何在大群人之間傳播，可以解釋為什麼需要這些規定，並回答當地企業主的問題。"
  },
  {
    "word": "telehealth",
    "pos": "n.",
    "cn_def": "遠距醫療",
    "en_def": "medical advice or care given by phone or video",
    "sentence": "A: How can our employees in the small branch offices see a doctor without traveling to the city? B: The new insurance plan includes a {{BLANK}} service, so staff can talk to a doctor through a video call on their phone or laptop and even get a prescription sent to a nearby pharmacy.",
    "cn": "A：我們在小分公司的員工如何不用進城就能看醫生？ B：新的保險方案包含【遠距醫療】服務，所以員工可以用手機或筆電透過視訊通話和醫生談話，甚至可以讓處方箋送到附近的藥局。"
  },
  {
    "word": "precaution",
    "pos": "n.",
    "cn_def": "預防；防範",
    "en_def": "something you do to stop a bad thing from happening",
    "sentence": "A: Why are all the staff at the bank wearing masks today when nobody in the office is sick? B: It's just a {{BLANK}}, because several customers came in with bad colds yesterday, and the manager doesn't want anyone at the counter to get ill during the busiest week of the month.",
    "cn": "A：今天銀行所有員工為什麼都戴著口罩，明明辦公室沒人生病？ B：這只是一種【防範】，因為昨天有好幾位客人重感冒來辦事，經理不希望櫃檯的任何人在一個月中最忙的那週生病。"
  },
  {
    "word": "precautionary measures",
    "pos": "n.phr.",
    "cn_def": "預防措施",
    "en_def": "actions taken in advance to prevent danger or harm",
    "sentence": "A: What steps will the organizers take to protect the guests at next month's trade show in the convention center? B: They will introduce several {{BLANK}}, such as checking temperatures at the entrance, placing hand gel at every booth and limiting the number of people in each hall at one time.",
    "cn": "A：主辦單位將採取哪些步驟，在下個月會展中心的商展中保護來賓？ B：他們將實施幾項【預防措施】，例如在入口量體溫、在每個攤位放置乾洗手，以及限制每個展廳同時入場的人數。"
  },
  {
    "word": "severity",
    "pos": "n.",
    "cn_def": "嚴重程度",
    "en_def": "how serious or bad something is",
    "sentence": "A: Why are the doctors at the clinic asking every patient so many questions about their fever and cough? B: They need to understand the {{BLANK}} of each illness before deciding on treatment, because some patients only need rest at home, while others must go straight to the hospital for more tests.",
    "cn": "A：診所的醫生為什麼要問每位病人那麼多關於發燒和咳嗽的問題？ B：他們在決定治療方式前，需要了解每種病的【嚴重程度】，因為有些病人只需在家休息，而另一些必須直接到醫院做更多檢查。"
  },
  {
    "word": "vaccine",
    "pos": "n.",
    "cn_def": "疫苗",
    "en_def": "a substance put into the body to protect it from a disease",
    "sentence": "A: Why is the company setting up a small clinic in the staff cafeteria every Friday this month? B: Nurses from the local hospital will give the flu {{BLANK}} to any employee who wants it, which is free and fast, so nobody has to take time off work to visit a doctor.",
    "cn": "A：公司這個月為什麼每週五都在員工餐廳設置一個小診所？ B：當地醫院的護士會為任何想接種的員工施打流感【疫苗】，免費又快速，所以沒有人需要請假去看醫生。"
  },
  {
    "word": "immune",
    "pos": "adj.",
    "cn_def": "免疫的",
    "en_def": "protected from a disease and unable to catch it",
    "sentence": "A: Why did you get the flu shot this year when you said you never get sick in winter? B: My doctor explained that nobody is fully {{BLANK}} to new types of flu, and since I travel to trade fairs every month and meet hundreds of people, I decided it was better to be safe.",
    "cn": "A：你說你冬天從不生病，為什麼今年還去打流感疫苗？ B：醫生跟我解釋，沒有人對新型流感是完全【免疫的】，而且因為我每個月都去參加商展、接觸數百人，我決定還是安全一點比較好。"
  },
  {
    "word": "immune systems",
    "pos": "n.phr.",
    "cn_def": "免疫系統（複數）",
    "en_def": "the parts of the body that fight illness",
    "sentence": "A: Why does the nursing home ask visitors with even a mild cold to stay away for a few days? B: Many of the elderly residents have weak {{BLANK}}, so an illness that seems small to a healthy adult can become very dangerous for them and move quickly through the building.",
    "cn": "A：為什麼養老院要求即使只有輕微感冒的訪客也要幾天內不要來？ B：許多年長住民的【免疫系統】很弱，所以對健康成人來說似乎很小的病，對他們可能變得非常危險，並在整棟樓迅速傳開。"
  },
  {
    "word": "new strains",
    "pos": "n.phr.",
    "cn_def": "新病毒株",
    "en_def": "new types of a virus or germ",
    "sentence": "A: Why do scientists have to update the flu vaccine every single year instead of using the same one? B: The virus keeps changing, and {{BLANK}} appear each season in different parts of the world, so the medicine companies must study them and change the vaccine to give people the best protection.",
    "cn": "A：為什麼科學家每年都要更新流感疫苗，而不是一直用同一種？ B：病毒不斷變化，每一季世界各地都會出現【新病毒株】，所以藥廠必須研究它們並調整疫苗，給人們最好的保護。"
  },
  {
    "word": "life-threatening",
    "pos": "adj.",
    "cn_def": "危及生命的",
    "en_def": "so serious that it could cause death",
    "sentence": "A: Why did the flight attendant ask whether there was a doctor on board during our flight to Tokyo? B: A passenger had a {{BLANK}} reaction to some nuts in his meal and could hardly breathe, so a nurse sitting in row twelve helped him until the plane landed and an ambulance arrived.",
    "cn": "A：我們飛往東京的航班上，空服員為什麼詢問機上是否有醫生？ B：一位乘客對餐點中的堅果產生了【危及生命的】過敏反應，幾乎無法呼吸，所以坐在第十二排的一位護士幫助他，直到飛機降落、救護車抵達。"
  },
  {
    "word": "self-isolate",
    "pos": "v.",
    "cn_def": "自我隔離",
    "en_def": "to stay away from other people so you do not spread a disease",
    "sentence": "A: What should I do if someone in my family tests positive for the flu while I'm working on the team project? B: Company rules say you must {{BLANK}} at home for five days, so you can't come to the office, but you can still join our meetings online and send your reports by email.",
    "cn": "A：如果我在做團隊專案期間，家人流感檢測呈陽性，我該怎麼辦？ B：公司規定你必須在家【自我隔離】五天，所以你不能進辦公室，但你仍可以線上參加會議，並用電子郵件寄報告。"
  },
  {
    "word": "quarantine",
    "pos": "n.",
    "cn_def": "隔離；檢疫",
    "en_def": "a period when people must stay apart to stop a disease from spreading",
    "sentence": "A: Why couldn't the new engineer from Germany start work at our Taipei office on the first of the month? B: When he arrived, the government rules required a week of hotel {{BLANK}} for all travelers from overseas, so he worked online from his hotel room until he was allowed to leave.",
    "cn": "A：那位從德國來的新工程師為什麼無法在月初到我們台北辦公室上班？ B：他抵達時，政府規定所有海外旅客都要在飯店【隔離】一週，所以他在飯店房間線上工作，直到獲准離開。"
  },
  {
    "word": "hand sanitizer",
    "pos": "n.phr.",
    "cn_def": "乾洗手；手部消毒液",
    "en_def": "a liquid or gel used to clean hands without water",
    "sentence": "A: What did the hotel do to make guests feel safer after the flu season began this year? B: They placed bottles of {{BLANK}} at the front desk, beside every elevator and outside the restaurant, so guests can clean their hands quickly whenever they touch buttons or door handles.",
    "cn": "A：今年流感季開始後，飯店做了什麼讓客人感覺更安全？ B：他們在櫃檯、每部電梯旁和餐廳外放置了一瓶瓶【乾洗手】，讓客人每次碰觸按鈕或門把後都能快速清潔雙手。"
  },
  {
    "word": "antimicrobial",
    "pos": "adj.",
    "cn_def": "抗菌的",
    "en_def": "able to kill germs or stop them from growing",
    "sentence": "A: Why did the hospital choose the more expensive material for the new beds and curtains in the patient rooms? B: The fabric is {{BLANK}}, which means it stops many germs from growing on its surface, so it helps reduce illness among patients and makes the cleaners' work a little easier.",
    "cn": "A：醫院為什麼為病房的新病床和簾子選擇比較貴的材料？ B：這種布料是【抗菌的】，也就是能阻止許多病菌在表面生長，所以有助於減少病人生病，也讓清潔人員的工作輕鬆一點。"
  },
  {
    "word": "contain",
    "pos": "v.",
    "cn_def": "控制；遏止",
    "en_def": "to stop something harmful from spreading",
    "sentence": "A: Why did the factory close only one production line instead of shutting down the whole building last week? B: Three workers on that line got sick with the flu, and the managers wanted to {{BLANK}} the illness quickly, so they sent that team home while the other lines kept working safely.",
    "cn": "A：工廠上週為什麼只關閉一條生產線，而不是整棟建築停工？ B：那條生產線上有三名工人得了流感，經理們想迅速【控制】疫情，所以讓那組人回家，其他生產線則安全地繼續運作。"
  },
  {
    "word": "social distancing",
    "pos": "n.phr.",
    "cn_def": "社交距離",
    "en_def": "keeping a safe space between yourself and other people",
    "sentence": "A: Why are there yellow lines on the floor in front of every cashier in the supermarket? B: The store started {{BLANK}} during the flu season, so the lines show customers where to stand and help them keep enough space between each other while they wait to pay.",
    "cn": "A：為什麼超市每個收銀台前的地板上都有黃線？ B：商店在流感季期間開始實施【社交距離】，所以這些線告訴顧客該站在哪裡，幫助他們排隊等結帳時彼此保持足夠空間。"
  },
  {
    "word": "community spread",
    "pos": "n.phr.",
    "cn_def": "社區傳播",
    "en_def": "the passing of a disease among people in a local area without a known source",
    "sentence": "A: Why did the city close the public libraries and sports centers even though there were only a few cases at first? B: Officials found {{BLANK}}, which means people were catching the virus in shops and on buses without traveling anywhere, so they knew the number of cases could rise very quickly.",
    "cn": "A：雖然一開始只有少數病例，市政府為什麼關閉了公立圖書館和運動中心？ B：官員發現了【社區傳播】，意思是人們沒有去過任何地方，卻在商店和公車上感染病毒，所以他們知道病例數可能迅速上升。"
  },
  {
    "word": "vulnerable",
    "pos": "adj.",
    "cn_def": "易受傷害的；脆弱的",
    "en_def": "easily hurt or harmed",
    "sentence": "A: Why does the pharmacy open one hour early every Tuesday morning just for older customers? B: Elderly people are more {{BLANK}} to serious illness during the winter, so the owner wants them to shop safely before the store gets crowded with office workers on their way to work.",
    "cn": "A：藥局為什麼每週二早上提早一小時只為年長顧客開門？ B：年長者在冬天更【容易受到】重病侵襲，所以老闆希望他們在店裡擠滿趕著上班的上班族之前安全地購物。"
  },
  {
    "word": "incubation period",
    "pos": "n.phr.",
    "cn_def": "潛伏期",
    "en_def": "the time between catching a disease and showing signs of it",
    "sentence": "A: Why must the travelers who were on the same flight as the sick passenger watch their health for two weeks? B: This flu has an {{BLANK}} of up to ten days, so people may feel fine at first even though they are already carrying the illness and could become sick later.",
    "cn": "A：為什麼和那位生病乘客同班機的旅客必須觀察自己的健康兩週？ B：這種流感的【潛伏期】長達十天，所以人們一開始可能感覺沒事，即使他們已經帶有病毒，之後也可能發病。"
  },
  {
    "word": "medical care",
    "pos": "n.phr.",
    "cn_def": "醫療照護",
    "en_def": "help and treatment from doctors and nurses",
    "sentence": "A: Why did the company add a doctor and two nurses to the team at its new mine in the mountains? B: The mine is three hours from the nearest town, so workers need quick {{BLANK}} if someone gets hurt or sick, and the company wants to make sure help is always close by.",
    "cn": "A：公司為什麼在山區的新礦場團隊增加了一位醫生和兩位護理師？ B：礦場離最近的城鎮有三個小時路程，所以如果有人受傷或生病，工人需要即時的【醫療照護】，公司想確保隨時都有援助在身邊。"
  },
  {
    "word": "PPE",
    "pos": "n.",
    "cn_def": "個人防護裝備",
    "en_def": "personal protective equipment, such as masks, gloves and gowns",
    "sentence": "A: Why did the hospital order so many boxes of gloves, masks and gowns from the supplier this month? B: The nurses use a lot of {{BLANK}} every day when they care for sick patients, and the manager wants to make sure the hospital never runs out during the busy winter season.",
    "cn": "A：醫院這個月為什麼向供應商訂購了那麼多箱手套、口罩和隔離衣？ B：護理師照顧病人時每天要用大量的【個人防護裝備】，經理想確保醫院在忙碌的冬季絕不會缺貨。"
  },
  {
    "word": "spread",
    "pos": "v.",
    "cn_def": "傳播；擴散",
    "en_def": "to pass from one person or place to others",
    "sentence": "A: Why does the manager want everyone to stay home when they have a fever, even during the busiest weeks? B: When sick people come to work, they can easily {{BLANK}} germs to everyone in the office, and then half the team might be absent at the same time, which is much worse for business.",
    "cn": "A：經理為什麼要大家發燒時待在家，即使是在最忙的幾週？ B：生病的人來上班時，很容易把病菌【傳播】給辦公室裡的每個人，然後可能一半的團隊同時缺勤，這對生意更糟。"
  },
  {
    "word": "face mask",
    "pos": "n.phr.",
    "cn_def": "口罩",
    "en_def": "a cover worn over the nose and mouth",
    "sentence": "A: Do visitors need to bring anything special when they tour the food factory next Thursday? B: Everyone must wear a {{BLANK}} and a hair cap inside the production area, but we will give them to you at the entrance, so you only need comfortable shoes and your visitor pass.",
    "cn": "A：訪客下週四參觀食品工廠時需要帶什麼特別的東西嗎？ B：每個人在生產區內都必須戴【口罩】和髮帽，不過我們會在入口發給你們，所以你們只需要穿舒適的鞋子並帶訪客證。"
  },
  {
    "word": "stockpile",
    "pos": "v.",
    "cn_def": "囤積；儲備",
    "en_def": "to collect and keep a large amount of something for later",
    "sentence": "A: Why are the shelves for rice, toilet paper and canned food almost empty at the supermarket today? B: After the news report about the new flu, many shoppers started to {{BLANK}} basic goods at home, even though the government said there was no need, so the store is waiting for new deliveries.",
    "cn": "A：為什麼今天超市裡米、衛生紙和罐頭的貨架幾乎都空了？ B：新流感的新聞報導出來後，許多購物者開始在家【囤積】基本物資，儘管政府說沒有必要，所以店家正在等新的貨送到。"
  },
  {
    "word": "lockdown",
    "pos": "n.",
    "cn_def": "封城；封鎖",
    "en_def": "a time when people must stay at home and most places are closed",
    "sentence": "A: How did your restaurant manage to keep earning money when the city was closed for a month? B: During the {{BLANK}}, nobody could eat inside restaurants, so we started a delivery service and sold meal boxes online, and now those orders make up almost a third of our income.",
    "cn": "A：城市封閉一個月的時候，你的餐廳是怎麼維持收入的？ B：在【封城】期間，沒有人能在餐廳內用餐，所以我們開始外送服務並在網上賣餐盒，現在那些訂單幾乎佔我們收入的三分之一。"
  },
  {
    "word": "curfew",
    "pos": "n.",
    "cn_def": "宵禁",
    "en_def": "a rule that people must stay indoors after a certain time",
    "sentence": "A: Why did the restaurants downtown close so early during the health crisis, even on Friday nights? B: The city set a ten o'clock {{BLANK}}, so people had to be at home by then, and the owners closed their kitchens at nine to give staff enough time to clean and travel home.",
    "cn": "A：在健康危機期間，市中心的餐廳為什麼那麼早關門，連週五晚上也是？ B：市政府實施了晚上十點的【宵禁】，人們必須在那之前回到家，所以老闆們九點就關廚房，讓員工有足夠時間清潔和回家。"
  }
];

const MCQS = [
  {
    "q": "Many airlines lost money when people stopped flying during the _____. Travel finally returned to normal two years later.",
    "options": [
      "pandemic",
      "curfew",
      "droplet",
      "syndrome"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The cleaning team will _____ all the desks and keyboards tonight. Staff can return to the office tomorrow morning.",
    "options": [
      "contaminate",
      "disinfect",
      "stockpile",
      "target"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The doctor told Ms. Park to stay home for five days. Her cold is still _____ and could spread to coworkers.",
    "options": [
      "antimicrobial",
      "zoonotic",
      "contagious",
      "immune"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Travelers arriving from abroad must spend seven days in hotel _____. Meals are delivered to their rooms three times a day.",
    "options": [
      "outbreak",
      "ventilator",
      "telehealth",
      "quarantine"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "A sore throat is often the first _____ of a cold. Employees who have one should tell their manager.",
    "options": [
      "virus",
      "droplet",
      "symptom",
      "curfew"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The clinic will offer a free flu _____ to all employees next Friday. Staff should sign up at the front desk.",
    "options": [
      "vaccine",
      "lockdown",
      "syndrome",
      "epicentre"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The hotel closed its restaurant after a sudden _____ of food poisoning. More than thirty guests became sick after dinner.",
    "options": [
      "severity",
      "transmission",
      "ventilator",
      "outbreak"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please do not come to work with a fever. You could easily _____ your colleagues in the crowded office.",
    "options": [
      "expose",
      "infect",
      "contain",
      "stockpile"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The patient could not breathe on her own after the surgery. Doctors connected her to a _____ for two days.",
    "options": [
      "telehealth",
      "precaution",
      "syndrome",
      "ventilator"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Smoking can cause serious _____ problems such as coughing and shortness of breath. The company offers free classes to help staff quit.",
    "options": [
      "asymptomatic",
      "antimicrobial",
      "respiratory",
      "zoonotic"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "During the city's month-long _____, all shops except supermarkets and pharmacies were closed. Many people worked from home.",
    "options": [
      "droplet",
      "lockdown",
      "symptom",
      "virus"
    ],
    "answer": 1,
    "vocabIndex": 52
  },
  {
    "q": "Doctors decide the treatment based on the _____ of the illness. Mild cases can usually be treated at home.",
    "options": [
      "severity",
      "droplet",
      "asthma",
      "pneumonia"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Staff who test positive for the flu must _____ at home for five days. They can still join meetings online.",
    "options": [
      "disinfect",
      "self-isolate",
      "contaminate",
      "target"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The _____ from the national university studied how the flu moved across the city. Her report was sent to every hospital.",
    "options": [
      "ventilator",
      "super-spreader",
      "telehealth",
      "epidemiologist"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Please use the _____ near the elevator before entering the meeting room. It only takes a few seconds to clean your hands.",
    "options": [
      "hand sanitizer",
      "incubation period",
      "community spread",
      "medical care"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "Doctors say no one is completely _____ to this new type of flu. Everyone should wash their hands often.",
    "options": [
      "contagious",
      "acute",
      "immune",
      "respiratory"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The factory closed one line to _____ the outbreak quickly. The other lines continued working as usual.",
    "options": [
      "contain",
      "infect",
      "stockpile",
      "disinfect"
    ],
    "answer": 0,
    "vocabIndex": 42
  },
  {
    "q": "His cold became much worse and turned into _____. He spent four days in the hospital before returning to work.",
    "options": [
      "curfew",
      "epicentre",
      "pneumonia",
      "outbreak"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "This virus has a short _____ of only three days. People may feel healthy at first even after catching it.",
    "options": [
      "social distancing",
      "incubation period",
      "medical care",
      "face mask"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "The new rules caused _____ confusion among shop owners across the country. Many of them called the city office for help.",
    "options": [
      "zoonotic",
      "antimicrobial",
      "asymptomatic",
      "widespread"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Heart _____ is a serious problem for people who sit all day. The company now offers free exercise classes at lunchtime.",
    "options": [
      "droplet",
      "precaution",
      "disease",
      "curfew"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "With the new insurance plan, staff can use a _____ service from home. They can talk to a doctor through a video call.",
    "options": [
      "quarantine",
      "outbreak",
      "lockdown",
      "telehealth"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Some shoppers began to _____ rice and toilet paper after the news report. As a result, the shelves were empty by noon.",
    "options": [
      "stockpile",
      "disinfect",
      "self-isolate",
      "infect"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "Visitors must wear a _____ and a hair cap in the production area. We will give them one at the entrance.",
    "options": [
      "hand sanitizer",
      "face mask",
      "medical care",
      "social distancing"
    ],
    "answer": 1,
    "vocabIndex": 50
  },
  {
    "q": "One guest at the party was a _____ who passed the flu to forty people. Health officials contacted everyone who attended.",
    "options": [
      "epicentre",
      "ventilator",
      "symptom",
      "super-spreader"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Mr. Lee keeps an inhaler in his desk drawer because he has _____. Dust from the road sometimes makes breathing difficult for him.",
    "options": [
      "syndrome",
      "asthma",
      "curfew",
      "transmission"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Wearing masks in the lobby is just a _____ during flu season. Nobody in the office is sick at the moment.",
    "options": [
      "outbreak",
      "droplet",
      "precaution",
      "epicentre"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The city set a ten o'clock _____ during the crisis. All restaurants had to close before then so staff could get home.",
    "options": [
      "curfew",
      "syndrome",
      "pneumonia",
      "ventilator"
    ],
    "answer": 0,
    "vocabIndex": 53
  },
  {
    "q": "Plastic screens between desks can reduce the _____ of germs between workers. The office installed them in the call center last week.",
    "options": [
      "severity",
      "transmission",
      "asthma",
      "virus"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Older people are more _____ to serious illness in winter. The pharmacy opens early on Tuesdays just for them.",
    "options": [
      "vulnerable",
      "antimicrobial",
      "zoonotic",
      "respiratory"
    ],
    "answer": 0,
    "vocabIndex": 45
  }
];

const LOOKUP = {
  "virus": {
    "pos": "n.",
    "en_def": "a very small living thing that causes illness",
    "cn_def": "病毒"
  },
  "disease": {
    "pos": "n.",
    "en_def": "an illness that affects people, animals or plants",
    "cn_def": "疾病"
  },
  "coronaviruses": {
    "pos": "n.",
    "en_def": "a group of viruses that can cause illnesses such as colds and COVID-19",
    "cn_def": "冠狀病毒（複數）"
  },
  "outbreak": {
    "pos": "n.",
    "en_def": "a sudden start of a disease that affects many people",
    "cn_def": "（疾病的）爆發"
  },
  "transmission": {
    "pos": "n.",
    "en_def": "the passing of a disease from one person to another",
    "cn_def": "傳播；傳染"
  },
  "symptom": {
    "pos": "n.",
    "en_def": "a sign that you have an illness",
    "cn_def": "症狀"
  },
  "respiratory": {
    "pos": "adj.",
    "en_def": "connected with breathing",
    "cn_def": "呼吸的；呼吸道的"
  },
  "asthma": {
    "pos": "n.",
    "en_def": "an illness that makes it difficult to breathe",
    "cn_def": "氣喘；哮喘"
  },
  "acute": {
    "pos": "adj.",
    "en_def": "very serious or severe, and starting suddenly",
    "cn_def": "急性的；劇烈的"
  },
  "pneumonia": {
    "pos": "n.",
    "en_def": "a serious illness of the lungs",
    "cn_def": "肺炎"
  },
  "syndrome": {
    "pos": "n.",
    "en_def": "a group of signs that together show a particular illness",
    "cn_def": "症候群；綜合症"
  },
  "epidemic": {
    "pos": "n.",
    "en_def": "a disease that spreads quickly among many people in one area",
    "cn_def": "（區域性）流行病；疫情"
  },
  "pandemic": {
    "pos": "n.",
    "en_def": "a disease that spreads over many countries at the same time",
    "cn_def": "全球大流行病"
  },
  "epicentre": {
    "pos": "n.",
    "en_def": "the central place where something bad is happening most strongly",
    "cn_def": "中心；重災區"
  },
  "infect": {
    "pos": "v.",
    "en_def": "to give someone a disease",
    "cn_def": "傳染；感染"
  },
  "infection": {
    "pos": "n.",
    "en_def": "an illness caused by germs entering the body",
    "cn_def": "感染"
  },
  "disinfect": {
    "pos": "v.",
    "en_def": "to clean something with chemicals to kill germs",
    "cn_def": "消毒"
  },
  "contagious": {
    "pos": "adj.",
    "en_def": "easily passed from one person to another",
    "cn_def": "傳染性的；會傳染的"
  },
  "contaminate": {
    "pos": "v.",
    "en_def": "to make something dirty or harmful by adding germs or chemicals",
    "cn_def": "污染"
  },
  "expose": {
    "pos": "v.",
    "en_def": "to put someone in a situation where they could be harmed",
    "cn_def": "使暴露於"
  },
  "droplet": {
    "pos": "n.",
    "en_def": "a very small drop of liquid",
    "cn_def": "小滴；飛沫"
  },
  "respiratory droplet": {
    "pos": "n.phr.",
    "en_def": "a tiny drop of liquid that comes out when people cough, sneeze or talk",
    "cn_def": "呼吸道飛沫"
  },
  "ventilator": {
    "pos": "n.",
    "en_def": "a machine that helps a sick person breathe",
    "cn_def": "呼吸器"
  },
  "asymptomatic": {
    "pos": "adj.",
    "en_def": "having an illness but showing no signs of it",
    "cn_def": "無症狀的"
  },
  "target": {
    "pos": "v.",
    "en_def": "to aim help or action at a particular group or place",
    "cn_def": "以…為目標；針對"
  },
  "zoonotic": {
    "pos": "adj.",
    "en_def": "able to pass from animals to humans",
    "cn_def": "人畜共通的"
  },
  "widespread": {
    "pos": "adj.",
    "en_def": "happening in many places or among many people",
    "cn_def": "廣泛的；普遍的"
  },
  "super-spreader": {
    "pos": "n.",
    "en_def": "a person who passes a disease to an unusually large number of people",
    "cn_def": "超級傳播者"
  },
  "epidemiologist": {
    "pos": "n.",
    "en_def": "a scientist who studies how diseases spread",
    "cn_def": "流行病學家"
  },
  "telehealth": {
    "pos": "n.",
    "en_def": "medical advice or care given by phone or video",
    "cn_def": "遠距醫療"
  },
  "precaution": {
    "pos": "n.",
    "en_def": "something you do to stop a bad thing from happening",
    "cn_def": "預防；防範"
  },
  "precautionary measures": {
    "pos": "n.phr.",
    "en_def": "actions taken in advance to prevent danger or harm",
    "cn_def": "預防措施"
  },
  "severity": {
    "pos": "n.",
    "en_def": "how serious or bad something is",
    "cn_def": "嚴重程度"
  },
  "vaccine": {
    "pos": "n.",
    "en_def": "a substance put into the body to protect it from a disease",
    "cn_def": "疫苗"
  },
  "immune": {
    "pos": "adj.",
    "en_def": "protected from a disease and unable to catch it",
    "cn_def": "免疫的"
  },
  "immune systems": {
    "pos": "n.phr.",
    "en_def": "the parts of the body that fight illness",
    "cn_def": "免疫系統（複數）"
  },
  "new strains": {
    "pos": "n.phr.",
    "en_def": "new types of a virus or germ",
    "cn_def": "新病毒株"
  },
  "life-threatening": {
    "pos": "adj.",
    "en_def": "so serious that it could cause death",
    "cn_def": "危及生命的"
  },
  "self-isolate": {
    "pos": "v.",
    "en_def": "to stay away from other people so you do not spread a disease",
    "cn_def": "自我隔離"
  },
  "quarantine": {
    "pos": "n.",
    "en_def": "a period when people must stay apart to stop a disease from spreading",
    "cn_def": "隔離；檢疫"
  },
  "hand sanitizer": {
    "pos": "n.phr.",
    "en_def": "a liquid or gel used to clean hands without water",
    "cn_def": "乾洗手；手部消毒液"
  },
  "antimicrobial": {
    "pos": "adj.",
    "en_def": "able to kill germs or stop them from growing",
    "cn_def": "抗菌的"
  },
  "contain": {
    "pos": "v.",
    "en_def": "to stop something harmful from spreading",
    "cn_def": "控制；遏止"
  },
  "social distancing": {
    "pos": "n.phr.",
    "en_def": "keeping a safe space between yourself and other people",
    "cn_def": "社交距離"
  },
  "community spread": {
    "pos": "n.phr.",
    "en_def": "the passing of a disease among people in a local area without a known source",
    "cn_def": "社區傳播"
  },
  "vulnerable": {
    "pos": "adj.",
    "en_def": "easily hurt or harmed",
    "cn_def": "易受傷害的；脆弱的"
  },
  "incubation period": {
    "pos": "n.phr.",
    "en_def": "the time between catching a disease and showing signs of it",
    "cn_def": "潛伏期"
  },
  "medical care": {
    "pos": "n.phr.",
    "en_def": "help and treatment from doctors and nurses",
    "cn_def": "醫療照護"
  },
  "ppe": {
    "pos": "n.",
    "en_def": "personal protective equipment, such as masks, gloves and gowns",
    "cn_def": "個人防護裝備"
  },
  "spread": {
    "pos": "v.",
    "en_def": "to pass from one person or place to others",
    "cn_def": "傳播；擴散"
  },
  "face mask": {
    "pos": "n.phr.",
    "en_def": "a cover worn over the nose and mouth",
    "cn_def": "口罩"
  },
  "stockpile": {
    "pos": "v.",
    "en_def": "to collect and keep a large amount of something for later",
    "cn_def": "囤積；儲備"
  },
  "lockdown": {
    "pos": "n.",
    "en_def": "a time when people must stay at home and most places are closed",
    "cn_def": "封城；封鎖"
  },
  "curfew": {
    "pos": "n.",
    "en_def": "a rule that people must stay indoors after a certain time",
    "cn_def": "宵禁"
  }
};

const EXTRA_GLOSSES = {};
