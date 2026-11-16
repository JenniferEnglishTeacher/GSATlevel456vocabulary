// Topic 169 Quiz Data: Health 健康
// Source word list: https://www.examword.com/group-topic/health — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T169 - Health 健康",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fitness",
    "pos": "n.",
    "cn_def": "體能；健康",
    "en_def": "the condition of being physically strong and healthy",
    "sentence": "A: Why did the human resources team decide to open a small gym on the third floor of our office building this spring? B: They hoped that staff would improve their {{BLANK}} by working out during lunch breaks, because many people complained that they felt tired after sitting at their desks all day.",
    "cn": "A：為什麼人資團隊今年春天決定在我們辦公大樓三樓開設一間小型健身房？ B：他們希望員工能利用午休時間運動來提升【體能】，因為很多人抱怨整天坐在辦公桌前讓他們覺得很疲累。"
  },
  {
    "word": "nutrition",
    "pos": "n.",
    "cn_def": "營養",
    "en_def": "the food you eat and how it keeps your body healthy",
    "sentence": "A: The new menu in the staff cafeteria has a lot more vegetables and fewer fried dishes than last year, hasn't it? B: Yes, the company hired an expert on {{BLANK}} who explained that balanced meals help workers stay focused, so the chef changed the recipes after several meetings with her.",
    "cn": "A：員工餐廳的新菜單比去年多了很多蔬菜、少了油炸菜色，對吧？ B：是的，公司聘請了一位【營養】專家，她說明均衡的餐點能幫助員工保持專注，所以主廚在和她開了幾次會後就修改了食譜。"
  },
  {
    "word": "diet",
    "pos": "n.",
    "cn_def": "飲食；日常飲食",
    "en_def": "the kind of food a person usually eats",
    "sentence": "A: I noticed that you have stopped ordering fried chicken and bubble tea with the rest of the team at lunch recently. Is everything all right? B: Everything is fine, but my doctor told me to follow a low-sugar {{BLANK}} for three months because my blood test results last week were a little worrying.",
    "cn": "A：我注意到你最近午餐不再跟團隊其他人一起點炸雞和珍珠奶茶了。一切都還好嗎？ B：一切都好，但因為我上週的驗血結果有點令人擔心，醫生要我三個月內遵守低糖【飲食】。"
  },
  {
    "word": "exercise",
    "pos": "n.",
    "cn_def": "運動",
    "en_def": "physical activity that you do to stay healthy and strong",
    "sentence": "A: How do you manage to stay so energetic even though you work long hours and often travel to meetings in other cities? B: I try to get at least thirty minutes of {{BLANK}} every morning, such as jogging in the park near my apartment, and it really helps me handle a busy schedule.",
    "cn": "A：你經常工作很長時間，還常常到其他城市開會，怎麼還能保持這麼有活力？ B：我每天早上盡量做至少三十分鐘的【運動】，例如在我公寓附近的公園慢跑，這真的幫助我應付忙碌的行程。"
  },
  {
    "word": "wellness",
    "pos": "n.",
    "cn_def": "身心健康",
    "en_def": "the state of being healthy in body and mind",
    "sentence": "A: What exactly does the new employee {{BLANK}} program that the company announced in yesterday's email include? B: It offers free yoga classes on Tuesday evenings, monthly talks with a nurse about healthy living, and a fruit basket in every department, because management wants staff to feel better both physically and mentally.",
    "cn": "A：公司昨天在電子郵件中宣布的新員工【身心健康】計畫到底包含什麼？ B：計畫提供週二晚上的免費瑜伽課、每月一次與護理師談健康生活的講座，以及每個部門一籃水果，因為管理階層希望員工在身體和心理上都感覺更好。"
  },
  {
    "word": "hygiene",
    "pos": "n.",
    "cn_def": "衛生",
    "en_def": "the practice of keeping yourself and your surroundings clean to stop disease",
    "sentence": "A: Why did the restaurant manager put up new signs in the kitchen and ask everyone to attend a short training session on Monday? B: The city inspectors are visiting next week, and she wants every cook and server to follow strict {{BLANK}} rules, such as washing their hands often and wearing clean uniforms.",
    "cn": "A：為什麼餐廳經理在廚房貼了新告示，還要求大家週一參加一個簡短的培訓課程？ B：市府稽查員下週要來訪，她希望每位廚師和服務生都遵守嚴格的【衛生】規定，例如勤洗手和穿著乾淨的制服。"
  },
  {
    "word": "immune",
    "pos": "adj.",
    "cn_def": "免疫的",
    "en_def": "related to the body's ability to fight infection",
    "sentence": "A: Several people in the accounting department caught a cold last month, but you never seemed to get sick at all. What is your secret? B: I make sure to sleep well, eat plenty of fruit, and walk to work, because my doctor says those things keep the {{BLANK}} system strong during flu season.",
    "cn": "A：上個月會計部有好幾個人感冒了，但你似乎完全沒生病。你的秘訣是什麼？ B：我一定睡飽、多吃水果，並且走路上班，因為醫生說這些能在流感季節讓【免疫】系統保持強健。"
  },
  {
    "word": "disease",
    "pos": "n.",
    "cn_def": "疾病",
    "en_def": "a serious health problem with clear causes and signs",
    "sentence": "A: Why is the insurance company offering free blood pressure checks in the lobby of our building this Friday afternoon? B: They want to help employees discover heart {{BLANK}} early, because many people do not notice any warning signs until the problem becomes serious and much more expensive to treat.",
    "cn": "A：為什麼保險公司這週五下午要在我們大樓大廳提供免費血壓檢測？ B：他們想幫助員工及早發現心臟【疾病】，因為很多人直到問題變嚴重、治療費用也高很多時，才注意到任何警訊。"
  },
  {
    "word": "illness",
    "pos": "n.",
    "cn_def": "疾病；病痛",
    "en_def": "the state of being sick, or a particular sickness",
    "sentence": "A: Has anyone heard why Mr. Huang has not been in the office for almost two weeks, even though the big client presentation is coming up? B: His assistant said he is recovering from a serious {{BLANK}} and will probably return next month, so his manager has asked Linda to lead the presentation instead.",
    "cn": "A：有人知道為什麼黃先生快兩週沒進辦公室了嗎？重要的客戶簡報快到了。 B：他的助理說他正在從一場嚴重的【疾病】中康復，大概下個月才會回來，所以他的主管已經請琳達改為負責這次簡報。"
  },
  {
    "word": "symptom",
    "pos": "n.",
    "cn_def": "症狀",
    "en_def": "a sign of an illness, such as a fever or a cough",
    "sentence": "A: The memo says staff should work from home if they feel unwell, but how do I know when I am too sick to come in? B: If you have a fever, a bad cough, or any other {{BLANK}} of the flu, you should stay home, rest, and let your team leader know as early as possible.",
    "cn": "A：備忘錄說員工若身體不適就應該在家工作，但我要怎麼知道自己病到不能進公司？ B：如果你發燒、咳得很厲害，或有任何其他流感的【症狀】，就應該待在家休息，並盡早告訴你的組長。"
  },
  {
    "word": "treatment",
    "pos": "n.",
    "cn_def": "治療",
    "en_def": "medical care given to a sick or injured person",
    "sentence": "A: How is your father doing now? I heard he had to stay in the hospital last week after his operation. B: He is getting better every day, thanks to the excellent {{BLANK}} he received from the doctors and nurses there, and he should be able to come home by the end of this week.",
    "cn": "A：你父親現在還好嗎？我聽說他上週手術後必須住院。 B：多虧了那裡醫生和護理師提供的優良【治療】，他一天比一天好，這週末前應該就能回家了。"
  },
  {
    "word": "therapy",
    "pos": "n.",
    "cn_def": "治療；療法",
    "en_def": "treatment that helps a person recover from an illness or injury, often over a long time",
    "sentence": "A: How has the warehouse supervisor been managing since he hurt his shoulder while lifting those heavy boxes in March? B: He has been going to physical {{BLANK}} twice a week after work, and his doctor says he should be able to return to his normal duties by the end of next month.",
    "cn": "A：倉庫主管三月搬那些重箱子時傷了肩膀，從那之後他的狀況如何？ B：他每週下班後去做兩次物理【治療】，醫生說他應該在下個月底前就能恢復正常職務。"
  },
  {
    "word": "prevention",
    "pos": "n.",
    "cn_def": "預防",
    "en_def": "actions taken to stop something bad, such as illness, from happening",
    "sentence": "A: Why is the company spending so much money on free flu vaccines and hand sanitizer for every department this winter? B: Management believes that {{BLANK}} is cheaper than losing workers to sickness for weeks, especially during the busy holiday season when every team needs all of its members.",
    "cn": "A：為什麼公司今年冬天要花這麼多錢為每個部門提供免費流感疫苗和乾洗手液？ B：管理階層認為【預防】比讓員工生病請假好幾週更划算，尤其是在每個團隊都需要全員到齊的忙碌假期季節。"
  },
  {
    "word": "recovery",
    "pos": "n.",
    "cn_def": "康復；復原",
    "en_def": "the process of becoming healthy again after an illness or injury",
    "sentence": "A: Will Jessica be able to attend the sales conference in Tokyo after her knee operation next week? B: Probably not, because the surgeon expects a full {{BLANK}} to take about six weeks, so she will join the meetings online from home while another colleague travels in her place.",
    "cn": "A：潔西卡下週膝蓋手術後能參加東京的業務會議嗎？ B：恐怕不行，因為外科醫師預計完全【康復】需要大約六週，所以她會在家線上參加會議，由另一位同事代替她出差。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry and pressure caused by difficult situations",
    "sentence": "A: Why did the company start offering short meditation classes in the meeting room every Wednesday afternoon? B: A recent survey showed that many employees feel a lot of {{BLANK}} because of long hours and tight deadlines, so management wanted to give them a quiet time to relax and clear their minds.",
    "cn": "A：為什麼公司開始在每週三下午於會議室開設短時間的冥想課？ B：最近一項調查顯示，許多員工因為工時長、期限緊而感到很大的【壓力】，所以管理階層想給他們一段安靜的時間放鬆、清空思緒。"
  },
  {
    "word": "anxiety",
    "pos": "n.",
    "cn_def": "焦慮",
    "en_def": "a strong feeling of worry or nervousness about what might happen",
    "sentence": "A: You seem much calmer before presentations these days. Last year you used to get very nervous before speaking to clients. B: I joined a public speaking class, and the teacher showed us some breathing exercises that reduce {{BLANK}}, so now I can talk to large groups without my hands shaking.",
    "cn": "A：你最近在簡報前看起來冷靜多了。去年你在對客戶說話前總是非常緊張。 B：我參加了一個公開演講課，老師教我們一些能減輕【焦慮】的呼吸練習，所以現在我能對著一大群人說話，手也不會發抖。"
  },
  {
    "word": "depression",
    "pos": "n.",
    "cn_def": "憂鬱症；沮喪",
    "en_def": "a mental illness in which a person feels very sad and hopeless for a long time",
    "sentence": "A: Why did the company add free counseling sessions to the employee benefits package this year? B: Managers learned that some workers were suffering from {{BLANK}} after the long lockdown, and they wanted to make sure everyone could talk to a professional without worrying about the cost or their privacy.",
    "cn": "A：為什麼公司今年在員工福利中加入免費諮商服務？ B：主管們得知有些員工在長期封城後罹患了【憂鬱症】，他們希望確保每個人都能找專業人士談談，而不必擔心費用或隱私問題。"
  },
  {
    "word": "sleep",
    "pos": "n.",
    "cn_def": "睡眠",
    "en_def": "the natural state of rest when your eyes are closed and your mind is not conscious",
    "sentence": "A: You look really tired this morning. Were you working on the budget report again until late last night? B: Yes, I stayed up until two o'clock to finish it, and I only got about four hours of {{BLANK}}, so I will probably need a second cup of coffee before the client meeting.",
    "cn": "A：你今天早上看起來真的很累。昨晚又為了預算報告熬夜到很晚嗎？ B：是啊，我熬到兩點才完成，只有大約四個小時的【睡眠】，所以在客戶會議前我大概需要第二杯咖啡。"
  },
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a period of relaxing or sleeping to get back your energy",
    "sentence": "A: The doctor said you only have a mild cold, so are you planning to come back to the office tomorrow morning? B: She told me to get plenty of {{BLANK}} and drink warm water for two more days, so I will work from home on Thursday and return to the office on Friday.",
    "cn": "A：醫生說你只是輕微感冒，所以你打算明天早上回辦公室嗎？ B：她要我再多【休息】兩天、多喝溫水，所以我週四會在家工作，週五再回辦公室。"
  },
  {
    "word": "hydration",
    "pos": "n.",
    "cn_def": "補充水分；水分充足",
    "en_def": "having enough water in your body",
    "sentence": "A: Why are there so many water stations along the route for the company charity run next Saturday? B: The weather is expected to be very hot, and the organizers want to make sure every runner keeps proper {{BLANK}}, because drinking too little water can cause dizziness and other serious problems.",
    "cn": "A：為什麼下週六公司慈善路跑的路線上設了那麼多補水站？ B：預計天氣會非常炎熱，主辦單位想確保每位跑者都維持適當的【水分補充】，因為喝水太少可能導致頭暈和其他嚴重問題。"
  },
  {
    "word": "vitamin",
    "pos": "n.",
    "cn_def": "維生素；維他命",
    "en_def": "a natural substance in food that your body needs to stay healthy",
    "sentence": "A: Why did the nurse at the company health check suggest that I should spend more time outside during lunch breaks? B: Your blood test showed that you are low in {{BLANK}} D, and sunlight helps your body produce it, so a short walk outside each day could make a real difference.",
    "cn": "A：為什麼公司健檢的護理師建議我午休時多花點時間到戶外？ B：你的驗血結果顯示你缺乏【維生素】D，而陽光能幫助身體製造它，所以每天到外面散步一下可能會帶來明顯的改善。"
  },
  {
    "word": "mineral",
    "pos": "n.",
    "cn_def": "礦物質",
    "en_def": "a natural substance such as iron or calcium that your body needs in small amounts",
    "sentence": "A: Why does the new sports drink sold in the vending machine cost so much more than the regular brands? B: The company says it contains an important {{BLANK}} called magnesium, which helps athletes avoid muscle cramps, but the nutrition expert at our clinic thinks eating bananas and nuts works just as well.",
    "cn": "A：為什麼自動販賣機賣的新運動飲料比一般品牌貴那麼多？ B：廠商說它含有一種叫鎂的重要【礦物質】，能幫助運動員避免肌肉抽筋，但我們診所的營養專家認為吃香蕉和堅果效果也一樣好。"
  },
  {
    "word": "calorie",
    "pos": "n.",
    "cn_def": "卡路里；熱量",
    "en_def": "a unit that measures how much energy food gives you",
    "sentence": "A: Why did the café near our office start printing numbers next to every drink and sandwich on its new menu board? B: Many customers wanted to know the {{BLANK}} count of each item, because they are trying to lose weight and need to check how much energy they eat at lunch.",
    "cn": "A：為什麼我們辦公室附近的咖啡廳在新的菜單板上開始於每種飲料和三明治旁標上數字？ B：很多顧客想知道每項餐點的【卡路里】數，因為他們正在減重，需要確認午餐吃進多少熱量。"
  },
  {
    "word": "obesity",
    "pos": "n.",
    "cn_def": "肥胖",
    "en_def": "the condition of being extremely overweight in a way that is unhealthy",
    "sentence": "A: Why is the city government paying for more sports fields and healthier school lunches this year? B: A recent report showed that childhood {{BLANK}} has been rising quickly because many children eat fast food and play video games instead of going outside, and officials worry about future health costs.",
    "cn": "A：為什麼市政府今年要出資興建更多運動場並提供更健康的學校午餐？ B：最近一份報告顯示兒童【肥胖】的情況迅速增加，因為許多孩子吃速食、玩電玩而不出門活動，官員擔心未來的醫療成本。"
  },
  {
    "word": "chronic",
    "pos": "adj.",
    "cn_def": "慢性的；長期的",
    "en_def": "lasting for a long time and difficult to cure",
    "sentence": "A: Why did Peter ask the office manager for a special standing desk and a more comfortable chair last week? B: He has suffered from {{BLANK}} back pain for more than ten years, and his doctor said that sitting in the same position for many hours every day was making the problem worse.",
    "cn": "A：為什麼彼得上週向辦公室經理申請一張特殊的站立式辦公桌和一張更舒適的椅子？ B：他受【慢性】背痛所苦已經超過十年，醫生說每天長時間維持同一個坐姿讓問題變得更糟。"
  },
  {
    "word": "acute",
    "pos": "adj.",
    "cn_def": "急性的；劇烈的",
    "en_def": "very serious and starting suddenly",
    "sentence": "A: Why did the receptionist call an ambulance for one of the visitors in the lobby this morning? B: The man suddenly felt {{BLANK}} pain in his chest while he was waiting for his appointment, so she called for help right away instead of waiting to see if he would feel better.",
    "cn": "A：為什麼櫃檯人員今天早上替大廳裡的一位訪客叫了救護車？ B：那位男士在等候約會時突然感到胸口【劇烈】疼痛，所以她立刻求救，而不是等著看他會不會好轉。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a healthy situation in which different parts of your life get the right amount of time and attention",
    "sentence": "A: Why did you decide to leave your high-paying job at the bank and join this smaller company last year? B: I was working until ten every night and rarely saw my children, so I wanted a better work-life {{BLANK}}, even if it meant earning a little less money each month.",
    "cn": "A：你去年為什麼決定離開銀行的高薪工作，加入這家規模較小的公司？ B：我以前每晚工作到十點，很少見到孩子，所以我想要更好的工作與生活【平衡】，即使這代表每個月賺的錢少一點。"
  },
  {
    "word": "lifestyle",
    "pos": "n.",
    "cn_def": "生活方式",
    "en_def": "the way a person lives, including their daily activities and choices",
    "sentence": "A: Your father looks much healthier than he did at the company family day last year. What changed? B: After his heart problem, he gave up smoking, started walking every evening, and cooked more vegetables at home, so his whole {{BLANK}} is different now and his doctor is very pleased.",
    "cn": "A：你父親看起來比去年公司家庭日時健康多了。是什麼改變了？ B：他心臟出問題之後就戒菸，開始每晚散步，在家也煮更多蔬菜，所以他現在整個【生活方式】都不一樣了，醫生也非常滿意。"
  },
  {
    "word": "habit",
    "pos": "n.",
    "cn_def": "習慣",
    "en_def": "something you do often and regularly, often without thinking about it",
    "sentence": "A: How do you always manage to arrive at the office with so much energy, even on Monday mornings? B: Drinking a big glass of water and doing ten minutes of stretching as soon as I get up has become a daily {{BLANK}} for me, and it really helps me feel awake before work.",
    "cn": "A：你怎麼總能精力充沛地來到辦公室，即使是週一早上？ B：一起床就喝一大杯水並做十分鐘伸展，已經成為我每天的【習慣】，這真的能幫助我在上班前感到清醒。"
  },
  {
    "word": "screening",
    "pos": "n.",
    "cn_def": "篩檢",
    "en_def": "a medical test to check whether people have a disease before they notice any signs",
    "sentence": "A: Why did the human resources department send everyone over forty an email about a visit from the mobile clinic next month? B: The clinic is offering free cancer {{BLANK}} in the parking lot, because finding problems early makes them much easier to treat and the company wants to protect its staff.",
    "cn": "A：為什麼人資部寄電子郵件給所有四十歲以上的員工，通知下個月行動診所來訪的事？ B：診所將在停車場提供免費癌症【篩檢】，因為及早發現問題會讓治療容易得多，公司也想保護員工。"
  },
  {
    "word": "diagnosis",
    "pos": "n.",
    "cn_def": "診斷",
    "en_def": "the act of finding out what illness a person has",
    "sentence": "A: Did the doctor tell you what is causing the headaches that you have been having every afternoon at work? B: Not yet, because she could not make a {{BLANK}} until she sees the results of my blood test and eye exam, so I have another appointment at the clinic next Thursday.",
    "cn": "A：醫生有告訴你每天下午上班時頭痛的原因嗎？ B：還沒有，因為她要等看到我的驗血和眼睛檢查結果才能做出【診斷】，所以我下週四還要再去診所一趟。"
  },
  {
    "word": "medication",
    "pos": "n.",
    "cn_def": "藥物",
    "en_def": "a medicine or drug used to treat an illness",
    "sentence": "A: Can you join us for a drink after the product launch party tonight to celebrate the successful year? B: I would love to, but I am taking {{BLANK}} for my allergies at the moment, and the pharmacist warned me not to drink any alcohol until I finish the whole package next week.",
    "cn": "A：今晚產品發表派對後，你能跟我們一起喝一杯慶祝這成功的一年嗎？ B：我很想去，但我目前正在服用過敏的【藥物】，藥劑師提醒我在下週吃完整包藥之前不要喝任何酒。"
  },
  {
    "word": "rehabilitation",
    "pos": "n.",
    "cn_def": "復健",
    "en_def": "the process of helping someone return to a normal life after an injury or illness",
    "sentence": "A: When will the delivery driver who was hurt in the car accident in July be able to start working again? B: He is spending three months at a {{BLANK}} center, where nurses and trainers are helping him learn to walk without pain, and the company has promised to keep his position open.",
    "cn": "A：七月在車禍中受傷的那位送貨司機什麼時候能重新開始工作？ B：他正在一間【復健】中心待三個月，護理師和訓練師在那裡幫助他重新學會不痛地走路，公司也承諾會為他保留職位。"
  },
  {
    "word": "endurance",
    "pos": "n.",
    "cn_def": "耐力",
    "en_def": "the ability to keep doing something difficult for a long time",
    "sentence": "A: How are you preparing for the forty-kilometer charity bike ride that our department is joining in December? B: I am riding a little farther every weekend to build my {{BLANK}}, because I want to be strong enough to finish the whole route without stopping to rest in front of my colleagues.",
    "cn": "A：你如何準備我們部門十二月要參加的四十公里慈善單車騎行？ B：我每個週末都騎得比上次遠一點來培養【耐力】，因為我希望自己夠強壯，能在同事面前不停下休息就騎完全程。"
  },
  {
    "word": "vitality",
    "pos": "n.",
    "cn_def": "活力；生命力",
    "en_def": "energy and strength that makes a person seem healthy and lively",
    "sentence": "A: Have you noticed how much more cheerful and active our team leader has been since she came back from her holiday? B: Yes, she spent two weeks hiking in the mountains and eating fresh local food, and now she is full of {{BLANK}} and ready to start the new project with lots of ideas.",
    "cn": "A：你有沒有注意到我們組長度假回來後變得多開朗、多積極？ B：有啊，她花了兩週在山裡健行、吃新鮮的在地食物，現在她充滿【活力】，帶著很多點子準備開始新專案。"
  }
];

const MCQS = [
  {
    "q": "The new office building includes a _____ center on the second floor. Employees can use the treadmills and weights before or after work.",
    "options": [
      "fitness",
      "diagnosis",
      "hygiene",
      "screening"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The cafeteria manager hired an expert in _____ to improve the lunch menu. Meals now include more vegetables, whole grains, and lean protein.",
    "options": [
      "rehabilitation",
      "nutrition",
      "depression",
      "endurance"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Doctor Lin advised her patient to follow a low-salt _____ for three months. He has stopped eating instant noodles and fried snacks.",
    "options": [
      "therapy",
      "symptom",
      "diet",
      "prevention"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Regular _____ such as walking or swimming can lower your blood pressure. The company now offers every staff member a free gym membership.",
    "options": [
      "obesity",
      "diagnosis",
      "hydration",
      "exercise"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All kitchen staff must follow strict _____ rules, including washing their hands every hour. The restaurant passed its health inspection last week.",
    "options": [
      "calorie",
      "hygiene",
      "endurance",
      "depression"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Getting enough sleep helps keep your _____ system strong during flu season. Fewer employees called in sick after overtime hours were reduced.",
    "options": [
      "immune",
      "chronic",
      "acute",
      "empty"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Heart _____ is one of the leading causes of death in many countries. The clinic offers free checkups to help people find problems early.",
    "options": [
      "nutrition",
      "hydration",
      "balance",
      "disease"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "A high fever is a common _____ of the flu. Staff members who notice it should stay home and contact their doctor.",
    "options": [
      "therapy",
      "lifestyle",
      "symptom",
      "fitness"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The patient responded well to the new _____ and left the hospital after five days. Her doctor will check on her again next month.",
    "options": [
      "treatment",
      "symptom",
      "obesity",
      "calorie"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "After injuring his shoulder, the warehouse worker attended physical _____ twice a week. The sessions helped him lift boxes again without pain.",
    "options": [
      "diet",
      "hygiene",
      "therapy",
      "screening"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The company's flu _____ program provides free vaccines to all employees. Workers can sign up at the front desk until Friday.",
    "options": [
      "symptom",
      "prevention",
      "obesity",
      "depression"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The surgeon expects a full _____ within six weeks after the knee operation. Until then, the sales manager will work from home.",
    "options": [
      "calorie",
      "hygiene",
      "nutrition",
      "recovery"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Long hours and tight deadlines can cause a lot of _____ at work. The firm now offers short meditation classes every Wednesday afternoon.",
    "options": [
      "vitamin",
      "mineral",
      "stress",
      "calorie"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Losing his job left him feeling hopeless, and he was later treated for _____. With counseling and family support, he slowly regained his confidence.",
    "options": [
      "depression",
      "hydration",
      "fitness",
      "nutrition"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Experts recommend at least seven hours of _____ every night. Staying up late to answer emails can make it hard to focus the next day.",
    "options": [
      "obesity",
      "screening",
      "diagnosis",
      "sleep"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Volunteers set up water stations along the marathon route to ensure proper _____ for runners. Drinking regularly prevents dizziness and muscle cramps.",
    "options": [
      "depression",
      "hydration",
      "obesity",
      "diagnosis"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Oranges and other citrus fruits are rich in _____ C. Many people drink orange juice when they feel a cold coming on.",
    "options": [
      "calorie",
      "mineral",
      "symptom",
      "vitamin"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Office workers who sit all day should watch their daily _____ intake. Choosing fresh fruit instead of cake is an easy first step.",
    "options": [
      "calorie",
      "symptom",
      "therapy",
      "screening"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Childhood _____ has increased as more children eat fast food and play fewer sports. Schools are now adding healthier lunches and more physical education classes.",
    "options": [
      "hygiene",
      "hydration",
      "obesity",
      "rehabilitation"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "She has suffered from _____ back pain for over ten years. Sitting at a desk all day makes the problem even worse.",
    "options": [
      "immune",
      "chronic",
      "wireless",
      "hopeful"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The patient was rushed to the emergency room with _____ stomach pain that started suddenly an hour ago. Doctors operated on her that night.",
    "options": [
      "acute",
      "immune",
      "wooden",
      "loyal"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Many employees struggle to find a healthy work-life _____. The company now allows staff to leave two hours early on Fridays.",
    "options": [
      "symptom",
      "diagnosis",
      "medication",
      "balance"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Quitting smoking and walking every day are simple ways to lead a healthier _____. Small changes can greatly reduce the risk of heart problems.",
    "options": [
      "symptom",
      "lifestyle",
      "obesity",
      "screening"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Eating breakfast every morning is a good _____ that helps you stay focused at work. Skipping it often leads to unhealthy snacking later.",
    "options": [
      "symptom",
      "disease",
      "habit",
      "diagnosis"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The clinic offers free cancer _____ for employees over forty. Finding problems before any signs appear makes treatment much more successful.",
    "options": [
      "obesity",
      "hygiene",
      "vitamin",
      "screening"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The doctor could not make a _____ until the blood test results came back. She asked the patient to return on Thursday morning.",
    "options": [
      "diagnosis",
      "nutrition",
      "hydration",
      "fitness"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Please take this _____ twice a day after meals. If it makes you feel sleepy, do not drive or operate heavy machinery.",
    "options": [
      "symptom",
      "disease",
      "medication",
      "fitness"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "After the car accident, the driver spent three months in a _____ center learning to walk again. His employer kept his position open.",
    "options": [
      "nutrition",
      "rehabilitation",
      "hygiene",
      "obesity"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Training for a marathon requires great physical _____. Runners slowly increase their distance each week to build the strength they need.",
    "options": [
      "endurance",
      "diagnosis",
      "depression",
      "hygiene"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The human resources department launched an employee _____ program last month. It includes yoga classes, health talks, and free fruit every Monday.",
    "options": [
      "obesity",
      "diagnosis",
      "symptom",
      "wellness"
    ],
    "answer": 3,
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "fitness": {
    "pos": "n.",
    "en_def": "the condition of being physically strong and healthy",
    "cn_def": "體能；健康"
  },
  "nutrition": {
    "pos": "n.",
    "en_def": "the food you eat and how it keeps your body healthy",
    "cn_def": "營養"
  },
  "diet": {
    "pos": "n.",
    "en_def": "the kind of food a person usually eats",
    "cn_def": "飲食；日常飲食"
  },
  "exercise": {
    "pos": "n.",
    "en_def": "physical activity that you do to stay healthy and strong",
    "cn_def": "運動"
  },
  "wellness": {
    "pos": "n.",
    "en_def": "the state of being healthy in body and mind",
    "cn_def": "身心健康"
  },
  "hygiene": {
    "pos": "n.",
    "en_def": "the practice of keeping yourself and your surroundings clean to stop disease",
    "cn_def": "衛生"
  },
  "immune": {
    "pos": "adj.",
    "en_def": "related to the body's ability to fight infection",
    "cn_def": "免疫的"
  },
  "disease": {
    "pos": "n.",
    "en_def": "a serious health problem with clear causes and signs",
    "cn_def": "疾病"
  },
  "illness": {
    "pos": "n.",
    "en_def": "the state of being sick, or a particular sickness",
    "cn_def": "疾病；病痛"
  },
  "symptom": {
    "pos": "n.",
    "en_def": "a sign of an illness, such as a fever or a cough",
    "cn_def": "症狀"
  },
  "treatment": {
    "pos": "n.",
    "en_def": "medical care given to a sick or injured person",
    "cn_def": "治療"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment that helps a person recover from an illness or injury, often over a long time",
    "cn_def": "治療；療法"
  },
  "prevention": {
    "pos": "n.",
    "en_def": "actions taken to stop something bad, such as illness, from happening",
    "cn_def": "預防"
  },
  "recovery": {
    "pos": "n.",
    "en_def": "the process of becoming healthy again after an illness or injury",
    "cn_def": "康復；復原"
  },
  "stress": {
    "pos": "n.",
    "en_def": "a feeling of worry and pressure caused by difficult situations",
    "cn_def": "壓力"
  },
  "anxiety": {
    "pos": "n.",
    "en_def": "a strong feeling of worry or nervousness about what might happen",
    "cn_def": "焦慮"
  },
  "depression": {
    "pos": "n.",
    "en_def": "a mental illness in which a person feels very sad and hopeless for a long time",
    "cn_def": "憂鬱症；沮喪"
  },
  "sleep": {
    "pos": "n.",
    "en_def": "the natural state of rest when your eyes are closed and your mind is not conscious",
    "cn_def": "睡眠"
  },
  "rest": {
    "pos": "n.",
    "en_def": "a period of relaxing or sleeping to get back your energy",
    "cn_def": "休息"
  },
  "hydration": {
    "pos": "n.",
    "en_def": "having enough water in your body",
    "cn_def": "補充水分；水分充足"
  },
  "vitamin": {
    "pos": "n.",
    "en_def": "a natural substance in food that your body needs to stay healthy",
    "cn_def": "維生素；維他命"
  },
  "mineral": {
    "pos": "n.",
    "en_def": "a natural substance such as iron or calcium that your body needs in small amounts",
    "cn_def": "礦物質"
  },
  "calorie": {
    "pos": "n.",
    "en_def": "a unit that measures how much energy food gives you",
    "cn_def": "卡路里；熱量"
  },
  "obesity": {
    "pos": "n.",
    "en_def": "the condition of being extremely overweight in a way that is unhealthy",
    "cn_def": "肥胖"
  },
  "chronic": {
    "pos": "adj.",
    "en_def": "lasting for a long time and difficult to cure",
    "cn_def": "慢性的；長期的"
  },
  "acute": {
    "pos": "adj.",
    "en_def": "very serious and starting suddenly",
    "cn_def": "急性的；劇烈的"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a healthy situation in which different parts of your life get the right amount of time and attention",
    "cn_def": "平衡"
  },
  "lifestyle": {
    "pos": "n.",
    "en_def": "the way a person lives, including their daily activities and choices",
    "cn_def": "生活方式"
  },
  "habit": {
    "pos": "n.",
    "en_def": "something you do often and regularly, often without thinking about it",
    "cn_def": "習慣"
  },
  "screening": {
    "pos": "n.",
    "en_def": "a medical test to check whether people have a disease before they notice any signs",
    "cn_def": "篩檢"
  },
  "diagnosis": {
    "pos": "n.",
    "en_def": "the act of finding out what illness a person has",
    "cn_def": "診斷"
  },
  "medication": {
    "pos": "n.",
    "en_def": "a medicine or drug used to treat an illness",
    "cn_def": "藥物"
  },
  "rehabilitation": {
    "pos": "n.",
    "en_def": "the process of helping someone return to a normal life after an injury or illness",
    "cn_def": "復健"
  },
  "endurance": {
    "pos": "n.",
    "en_def": "the ability to keep doing something difficult for a long time",
    "cn_def": "耐力"
  },
  "vitality": {
    "pos": "n.",
    "en_def": "energy and strength that makes a person seem healthy and lively",
    "cn_def": "活力；生命力"
  }
};

const EXTRA_GLOSSES = {};
