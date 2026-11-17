// Topic 338 Quiz Data: Rule 規則
// Source word list: https://www.examword.com/group-topic/rule — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T338 - Rule 規則",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "regulation",
    "pos": "n.",
    "cn_def": "規定；法規",
    "en_def": "an official rule made by a government or company",
    "sentence": "A: Why did the restaurant manager close the kitchen early yesterday afternoon and send all the cooks home before the dinner rush? B: A health inspector found that the fridges were too warm, which breaks a city {{BLANK}} about food safety, so they must be repaired before the kitchen can open again.",
    "cn": "A：為什麼餐廳經理昨天下午提早關閉廚房，還在晚餐尖峰前就讓所有廚師回家？ B：一位衛生稽查員發現冰箱溫度太高，這違反了市政府有關食品安全的【規定】，所以必須先修好冰箱，廚房才能重新營業。"
  },
  {
    "word": "law",
    "pos": "n.",
    "cn_def": "法律",
    "en_def": "the system of rules that a country or area must follow",
    "sentence": "A: Why are all the shops on this street putting up new signs in both English and Chinese this week? B: A new city {{BLANK}} says that every store must show its prices and opening hours clearly in two languages, and owners who ignore it may have to pay a large fine next year.",
    "cn": "A：為什麼這條街上所有的店家這週都在掛中英雙語的新招牌？ B：一條新的市政【法律】規定每家商店都必須以兩種語言清楚標示價格和營業時間，不理會的店主明年可能必須繳納一大筆罰款。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；方針",
    "en_def": "a plan or set of ideas that a company or government follows",
    "sentence": "A: Can I bring my own laptop to the office and use it for work instead of the old computer at my desk? B: I'm afraid not, because our company {{BLANK}} says that staff may only use computers provided by the IT department, so that customer information stays safe from viruses and hackers.",
    "cn": "A：我可以帶自己的筆電到辦公室工作，而不用桌上那台舊電腦嗎？ B：恐怕不行，因為我們公司的【政策】規定員工只能使用資訊部門提供的電腦，這樣客戶資料才能避免受到病毒和駭客的威脅。"
  },
  {
    "word": "guideline",
    "pos": "n.",
    "cn_def": "指導方針；準則",
    "en_def": "advice or a rule that tells you how to do something",
    "sentence": "A: I'm writing my first press release for the new product launch, but I'm not sure how long it should be or what to include. B: The marketing team has a {{BLANK}} on the shared drive that explains the format, the length, and the tone we use, so please read it before you start.",
    "cn": "A：我正在為新產品發表會寫第一份新聞稿，但我不確定應該寫多長，也不知道該包含哪些內容。 B：行銷團隊在共用硬碟上有一份【準則】，說明了我們使用的格式、長度和語氣，所以請你在開始前先讀一讀。"
  },
  {
    "word": "principle",
    "pos": "n.",
    "cn_def": "原則",
    "en_def": "a basic belief or idea that guides how you act",
    "sentence": "A: Why did the owner refuse that big order from the new client, even though it would have brought in a lot of money this quarter? B: She has a {{BLANK}} that the company never promises a delivery date it cannot meet, and the client wanted everything finished in only three days.",
    "cn": "A：為什麼老闆拒絕了新客戶的那筆大訂單，即使那會在這一季帶來很多收入？ B：她有一個【原則】，就是公司絕不承諾做不到的交貨日期，而那位客戶希望所有東西在短短三天內完成。"
  },
  {
    "word": "code",
    "pos": "n.",
    "cn_def": "規範；守則",
    "en_def": "a set of written rules about how people should behave",
    "sentence": "A: Is it okay to wear jeans and sneakers to the office on Fridays, or should I still wear a suit and tie? B: Our dress {{BLANK}} allows casual clothes on Fridays, but if you are meeting clients that day, you should dress more formally to look professional.",
    "cn": "A：週五可以穿牛仔褲和球鞋來辦公室嗎？還是我仍然應該穿西裝打領帶？ B：我們的服裝【規範】允許週五穿便服，但如果你那天要和客戶見面，就應該穿得正式一點，看起來才專業。"
  },
  {
    "word": "standard",
    "pos": "n.",
    "cn_def": "標準；水準",
    "en_def": "a level of quality that people expect",
    "sentence": "A: Why did the factory send back the whole shipment of plastic parts that arrived from the supplier last Monday? B: Our quality team tested them and found that many pieces were weak and cracked easily, so they did not meet the safety {{BLANK}} we need for children's toys.",
    "cn": "A：為什麼工廠把上週一從供應商那裡送來的整批塑膠零件都退回去了？ B：我們的品管團隊測試後發現很多零件很脆弱、容易破裂，所以不符合我們兒童玩具所需要的安全【標準】。"
  },
  {
    "word": "order",
    "pos": "n.",
    "cn_def": "秩序",
    "en_def": "a situation in which rules are followed and people behave calmly",
    "sentence": "A: How did the event staff manage such a large crowd when the doors opened for the concert last night? B: They set up metal barriers and asked fans to line up by ticket number, which kept good {{BLANK}} at the entrance and helped everyone get inside safely within an hour.",
    "cn": "A：昨晚演唱會開門時，活動工作人員是怎麼管理那麼龐大的人群的？ B：他們架設了金屬圍欄，並請歌迷依照票號排隊，這讓入口處保持了良好的【秩序】，也幫助每個人在一小時內安全入場。"
  },
  {
    "word": "command",
    "pos": "n.",
    "cn_def": "命令；指令",
    "en_def": "an instruction that someone in power gives",
    "sentence": "A: Why did all the workers suddenly leave the building and wait in the parking lot during the meeting this morning? B: The fire alarm went off, and the safety officer gave a clear {{BLANK}} to evacuate immediately, so everyone followed it even though it turned out to be only a drill.",
    "cn": "A：為什麼今天早上開會時，所有員工突然離開大樓，到停車場等候？ B：火災警報響了，安全主任下達了立即疏散的明確【命令】，所以大家都照做了，雖然結果只是一場演習。"
  },
  {
    "word": "restriction",
    "pos": "n.",
    "cn_def": "限制；約束",
    "en_def": "a rule that limits what you can do",
    "sentence": "A: Why can't we take the company van to visit the client in the city center on Friday afternoon? B: There is a new parking {{BLANK}} downtown, so large vehicles are not allowed on the main streets during weekday business hours, and we should take the train instead.",
    "cn": "A：為什麼週五下午我們不能開公司的廂型車去市中心拜訪客戶？ B：市中心有一項新的停車【限制】，平日上班時間大型車輛不能開上主要街道，所以我們應該改搭火車。"
  },
  {
    "word": "requirement",
    "pos": "n.",
    "cn_def": "必要條件；要求",
    "en_def": "something that you must have or do",
    "sentence": "A: I'd like to apply for the sales manager position, but I'm worried because I've only worked here for a year. B: Two years of experience in sales is the main {{BLANK}} for that job, so you may need to wait until next year before HR will consider your application.",
    "cn": "A：我想申請業務經理的職位，但我有點擔心，因為我才在這裡工作一年。 B：兩年的業務經驗是那份工作的主要【必要條件】，所以你可能需要等到明年，人資部門才會考慮你的申請。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；自制力",
    "en_def": "the practice of making people follow rules and behave well",
    "sentence": "A: How does the new team leader get everyone to finish their reports on time every single week? B: She has strong {{BLANK}} herself, arriving early and planning carefully, and she explains clearly what happens if deadlines are missed, so the whole team now takes the schedule seriously.",
    "cn": "A：新的組長是怎麼讓大家每週都準時完成報告的？ B：她本身就很有【紀律】，總是提早到、仔細規劃，並清楚說明錯過截止期限的後果，所以現在整個團隊都很認真看待進度表。"
  },
  {
    "word": "control",
    "pos": "n.",
    "cn_def": "控制；管制",
    "en_def": "the power to manage or limit something",
    "sentence": "A: Why do visitors have to show an ID card and sign in at the front desk before going upstairs in this building? B: Security keeps strict {{BLANK}} over who enters the offices, because the research department stores important product designs on the upper floors and wants to protect them.",
    "cn": "A：為什麼這棟大樓的訪客上樓前都必須在櫃檯出示身分證並登記？ B：保全對誰能進入辦公室有嚴格的【管制】，因為研發部門把重要的產品設計存放在樓上，想要保護它們。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "權力；職權",
    "en_def": "the power to give orders or make decisions",
    "sentence": "A: Can the assistant manager approve my request for an extra week of vacation in December while the boss is away? B: Only the department head has the {{BLANK}} to approve holidays longer than five days, so you'll have to send her an email and wait for her reply.",
    "cn": "A：老闆不在的時候，副理可以核准我十二月多請一週假的申請嗎？ B：只有部門主管有【權力】核准超過五天的假期，所以你得寄電子郵件給她，然後等她回覆。"
  },
  {
    "word": "obey",
    "pos": "v.",
    "cn_def": "服從；遵守",
    "en_def": "to do what a rule or person tells you to do",
    "sentence": "A: Why did the delivery driver get stopped by the police on his way to the warehouse this morning? B: He was in a hurry and did not {{BLANK}} the traffic signs near the school, so he drove too fast through the area where children were crossing the street.",
    "cn": "A：那位送貨司機今天早上去倉庫的路上，為什麼被警察攔下來？ B：他很趕時間，沒有【遵守】學校附近的交通標誌，所以在孩子們過馬路的區域開得太快。"
  },
  {
    "word": "violate",
    "pos": "v.",
    "cn_def": "違反；違背",
    "en_def": "to break a rule, law, or agreement",
    "sentence": "A: Why did the supplier suddenly end its contract with that electronics company after working together for ten years? B: The electronics company shared secret price information with a competitor, which seemed to {{BLANK}} the agreement both sides signed, so the supplier's lawyers decided to stop the partnership.",
    "cn": "A：為什麼那家供應商在合作十年之後突然終止和那家電子公司的合約？ B：那家電子公司把機密的價格資訊透露給競爭對手，這似乎【違反】了雙方簽訂的協議，所以供應商的律師決定終止合作關係。"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "cn_def": "執行；實施",
    "en_def": "to make people obey a rule or law",
    "sentence": "A: Everyone knows that smoking is not allowed near the main entrance, so why do so many people still do it? B: The sign is there, but nobody has tried to {{BLANK}} the rule, so building management plans to hire a guard and give a warning to anyone who smokes there.",
    "cn": "A：大家都知道大門入口附近禁止吸菸，為什麼還有那麼多人照抽？ B：告示牌是有，但從來沒有人去【執行】這條規定，所以大樓管理處打算僱用一名警衛，並警告在那裡吸菸的人。"
  },
  {
    "word": "ban",
    "pos": "v.",
    "cn_def": "禁止",
    "en_def": "to officially say that something is not allowed",
    "sentence": "A: Why are the cafes near our office giving out paper straws instead of the plastic ones they used before? B: The city government decided to {{BLANK}} single-use plastic straws this year to reduce waste, so all restaurants and drink shops had to change to paper or metal ones.",
    "cn": "A：為什麼我們辦公室附近的咖啡店都改發紙吸管，而不是以前用的塑膠吸管？ B：市政府決定今年【禁止】一次性塑膠吸管以減少垃圾，所以所有餐廳和飲料店都必須改用紙吸管或金屬吸管。"
  },
  {
    "word": "permit",
    "pos": "v.",
    "cn_def": "允許；准許",
    "en_def": "to allow someone to do something",
    "sentence": "A: Can we hold the company barbecue in the park next to the river on Saturday, or do we need to find another place? B: The park rules do not {{BLANK}} open fires, so we should book the community center's garden instead, which has a safe cooking area and plenty of tables.",
    "cn": "A：我們可以在週六於河邊的公園舉辦公司烤肉嗎？還是需要另找地點？ B：公園的規定不【允許】明火，所以我們應該改訂社區中心的花園，那裡有安全的烹調區和很多桌子。"
  },
  {
    "word": "prohibit",
    "pos": "v.",
    "cn_def": "禁止",
    "en_def": "to officially stop something by making it against the rules",
    "sentence": "A: Why did the hotel staff ask the guests in room 512 to stop cooking noodles with their own small stove last night? B: Hotel rules {{BLANK}} cooking in the rooms because it could easily start a fire, so the guests were asked to eat in the restaurant or order room service.",
    "cn": "A：為什麼飯店員工昨晚請512號房的客人停止用他們自己的小爐子煮麵？ B：飯店規定【禁止】在房間內烹煮，因為很容易引發火災，所以請客人到餐廳用餐或點客房服務。"
  },
  {
    "word": "comply",
    "pos": "v.",
    "cn_def": "遵守；遵從",
    "en_def": "to act according to a rule or request",
    "sentence": "A: Do we really need to update all the price labels in the store before the end of this month? B: Yes, every product label must {{BLANK}} with the new consumer rules by the first of next month, or the store may receive a warning and a fine from the inspectors.",
    "cn": "A：我們真的需要在這個月底前更新店裡所有的價格標籤嗎？ B：是的，每個產品標籤都必須在下個月一號前【遵守】新的消費者規定，否則商店可能會收到稽查人員的警告和罰款。"
  },
  {
    "word": "legal",
    "pos": "adj.",
    "cn_def": "合法的；法律上的",
    "en_def": "allowed by law",
    "sentence": "A: Is it okay for us to use music from popular songs in the background of our new online advertisement? B: We should check with our lawyer first, because it is only {{BLANK}} if we buy the right to use those songs, and the artists could ask for money if we don't.",
    "cn": "A：我們可以在新的網路廣告背景中使用流行歌曲的音樂嗎？ B：我們應該先問問律師，因為只有在我們購買那些歌曲的使用權後才是【合法的】，如果沒買，藝人可能會要求賠償。"
  },
  {
    "word": "illegal",
    "pos": "adj.",
    "cn_def": "違法的；非法的",
    "en_def": "not allowed by law",
    "sentence": "A: Why did the police come to the night market last weekend and talk to some of the food sellers? B: Several sellers were running {{BLANK}} stalls on the sidewalk without a license, so the police told them to move away and apply for the proper papers at the city office.",
    "cn": "A：為什麼上週末警察到夜市找幾個食物攤販談話？ B：有幾個攤販在人行道上經營沒有執照的【違法】攤位，所以警察要他們離開，並到市政府申請正式文件。"
  },
  {
    "word": "lawful",
    "pos": "adj.",
    "cn_def": "合法的；法定的",
    "en_def": "allowed by law or done according to the law",
    "sentence": "A: Can the landlord really make us leave the shop before our lease ends next summer because he wants to sell the building? B: No, our lawyer said that would not be a {{BLANK}} reason to end the contract early, so we can stay until the agreed date.",
    "cn": "A：房東真的可以因為想賣掉大樓，就要我們在明年夏天租約到期前搬離店面嗎？ B：不行，我們的律師說那不是提前終止合約的【合法】理由，所以我們可以待到約定的日期。"
  },
  {
    "word": "mandatory",
    "pos": "adj.",
    "cn_def": "強制的；義務的",
    "en_def": "required by a rule; something you must do",
    "sentence": "A: Do I have to attend the fire safety training on Thursday afternoon, even though I have a busy schedule that day? B: Yes, the training is {{BLANK}} for all new employees, and the HR department will check the sign-in sheet, so please move your other meetings to another day.",
    "cn": "A：週四下午的消防安全訓練我一定要參加嗎？我那天的行程很滿。 B：是的，這個訓練對所有新進員工都是【強制的】，而且人資部門會檢查簽到表，所以請把你的其他會議改到別天。"
  },
  {
    "word": "compulsory",
    "pos": "adj.",
    "cn_def": "強制的；必修的",
    "en_def": "that must be done because of a rule or law",
    "sentence": "A: Why is everyone on the construction site wearing a bright yellow helmet, even the office staff who are just visiting? B: Wearing a helmet is {{BLANK}} for anyone who enters the site, because falling tools or bricks could cause serious injuries, so the guard won't let you in without one.",
    "cn": "A：為什麼工地上每個人都戴著鮮黃色的安全帽，連只是來參觀的辦公室職員也是？ B：任何進入工地的人都【必須】戴安全帽，因為掉落的工具或磚塊可能造成嚴重傷害，所以沒戴的話警衛不會讓你進去。"
  },
  {
    "word": "strict",
    "pos": "adj.",
    "cn_def": "嚴格的",
    "en_def": "demanding that rules are followed exactly",
    "sentence": "A: Why does the new hospital require visitors to wash their hands and wear a mask before entering any of the patient rooms? B: The hospital has very {{BLANK}} rules about cleanliness, because many patients are weak after surgery and could easily catch an infection from visitors.",
    "cn": "A：為什麼那家新醫院要求訪客在進入任何病房前都要洗手並戴口罩？ B：醫院對清潔有非常【嚴格的】規定，因為很多病人手術後身體虛弱，很容易被訪客傳染。"
  },
  {
    "word": "flexible",
    "pos": "adj.",
    "cn_def": "有彈性的；靈活的",
    "en_def": "able to change easily to fit a new situation",
    "sentence": "A: Is it true that employees at your new company can start work at any time between seven and ten in the morning? B: Yes, they have {{BLANK}} working hours, so parents can drop their children off at school first and still finish a full eight-hour day.",
    "cn": "A：聽說你們新公司的員工可以在早上七點到十點之間的任何時間開始上班，是真的嗎？ B：是的，他們的上班時間很【有彈性】，所以父母可以先送孩子上學，仍然能完成整整八小時的工作。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "公平的",
    "en_def": "treating everyone equally and in the right way",
    "sentence": "A: How did the manager decide who would get the two extra days off during the busy holiday season? B: She wanted the process to be {{BLANK}} to everyone, so she put all the names in a box and chose two at random during the team meeting.",
    "cn": "A：經理是怎麼決定誰能在忙碌的假期旺季多放兩天假的？ B：她希望整個過程對每個人都【公平】，所以她把所有人的名字放進一個盒子裡，在團隊會議時隨機抽出兩個。"
  },
  {
    "word": "unfair",
    "pos": "adj.",
    "cn_def": "不公平的",
    "en_def": "not treating people equally or in the right way",
    "sentence": "A: Why are the part-time workers at the supermarket so upset about the new schedule that came out this week? B: They think it is {{BLANK}} that they have to work every weekend while full-time staff always get Saturdays and Sundays off, so they plan to talk to the store manager.",
    "cn": "A：為什麼超市的兼職員工對這週公布的新班表那麼不滿？ B：他們覺得兼職人員每個週末都要上班，而正職員工總是週六日休假，這很【不公平】，所以他們打算去找店長談談。"
  },
  {
    "word": "limit",
    "pos": "n.",
    "cn_def": "限制；限度",
    "en_def": "the largest amount that is allowed",
    "sentence": "A: Can I use the company credit card to pay for dinner with the clients from Japan tomorrow evening? B: Sure, but there is a spending {{BLANK}} of two hundred dollars per meal, so please choose a restaurant that isn't too expensive and keep the receipt for the finance team.",
    "cn": "A：明天晚上和日本客戶吃飯，我可以用公司信用卡付款嗎？ B：當然，但每餐有兩百美元的消費【上限】，所以請挑一家不要太貴的餐廳，並把收據留給財務團隊。"
  },
  {
    "word": "boundary",
    "pos": "n.",
    "cn_def": "界線；分界",
    "en_def": "a line that marks the edge of an area, or a limit on behavior",
    "sentence": "A: Why did our neighbor ask us to move the new fence that the builders put up behind the warehouse last month? B: The fence was built about one meter over the {{BLANK}} of his land, so we had to measure everything again and move it back to the right place.",
    "cn": "A：為什麼我們的鄰居要求我們移動上個月工人在倉庫後面架設的新圍籬？ B：那道圍籬蓋得超過他土地的【界線】大約一公尺，所以我們必須重新測量，並把它移回正確的位置。"
  },
  {
    "word": "norm",
    "pos": "n.",
    "cn_def": "規範；常態",
    "en_def": "a usual or expected way of behaving in a group",
    "sentence": "A: Should I bring a small gift when I visit the clients' office in Tokyo next week for our first meeting? B: Yes, it is the {{BLANK}} in many Japanese companies to give a small present at a first meeting, and it shows that you respect them and want a long relationship.",
    "cn": "A：下週我第一次去東京拜訪客戶的辦公室時，應該帶個小禮物嗎？ B：應該，在許多日本公司裡，初次見面送個小禮物是一種【常態】，這表示你尊重他們，也希望建立長久的關係。"
  },
  {
    "word": "custom",
    "pos": "n.",
    "cn_def": "習俗；慣例",
    "en_def": "a traditional way of doing something in a place or group",
    "sentence": "A: Why does everyone in the office bring cakes and cookies to share whenever someone has a birthday? B: It's an old {{BLANK}} that started when the company was small, and the staff still enjoy it because it gives them a chance to relax and chat for a few minutes.",
    "cn": "A：為什麼每當有人過生日時，辦公室裡的每個人都會帶蛋糕和餅乾來分享？ B：這是公司還很小的時候就開始的老【慣例】，員工們仍然很喜歡，因為這讓他們有機會放鬆並聊上幾分鐘。"
  }
];

const MCQS = [
  {
    "q": "All restaurants must follow the new hygiene rules from next month. The city will check whether kitchens comply with every safety _____.",
    "options": [
      "regulation",
      "boundary",
      "custom",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Driving without a valid license is against the _____ in every country. Offenders may lose their cars and pay heavy fines.",
    "options": [
      "norm",
      "law",
      "principle",
      "limit"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Customers can return unused items within thirty days. This return _____ is printed on the back of every receipt.",
    "options": [
      "command",
      "boundary",
      "policy",
      "discipline"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Please read the style document before designing the brochure. It contains every _____ for logos, fonts, and colors.",
    "options": [
      "authority",
      "custom",
      "control",
      "guideline"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Honesty is a basic _____ of our business. We never hide problems from our customers or partners.",
    "options": [
      "restriction",
      "principle",
      "command",
      "limit"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Employees must wear dark suits when meeting clients. The company dress _____ is explained in the staff handbook.",
    "options": [
      "code",
      "order",
      "norm",
      "boundary"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new hotel has excellent service and spotless rooms. Its high _____ of cleanliness has attracted many business travelers.",
    "options": [
      "authority",
      "command",
      "boundary",
      "standard"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The police arrived quickly after the fight outside the stadium. They worked hard to restore law and _____ in the area.",
    "options": [
      "norm",
      "standard",
      "order",
      "custom"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The captain gave the _____ to leave the ship immediately. All passengers moved calmly toward the lifeboats.",
    "options": [
      "command",
      "principle",
      "standard",
      "custom"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Because of the drought, there is a water _____ in the city. Residents cannot wash their cars until the rain returns.",
    "options": [
      "principle",
      "authority",
      "restriction",
      "custom"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "A university degree is a basic _____ for this position. Applicants must also speak fluent English and Japanese.",
    "options": [
      "boundary",
      "requirement",
      "command",
      "custom"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Working from home requires a lot of self-_____. Without a manager nearby, you must plan and manage your own time.",
    "options": [
      "authority",
      "requirement",
      "restriction",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The engineers check every product before shipping. Quality _____ is the most important step in our production process.",
    "options": [
      "custom",
      "principle",
      "control",
      "boundary"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The branch manager does not have the _____ to sign contracts over $10,000. Those must be approved at head office.",
    "options": [
      "authority",
      "requirement",
      "discipline",
      "norm"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "All workers in the lab must _____ the safety instructions. Anyone who ignores them will be asked to leave.",
    "options": [
      "ban",
      "obey",
      "enforce",
      "violate"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The supplier delivered the goods two months late. This seemed to _____ the terms of the contract we signed.",
    "options": [
      "comply",
      "obey",
      "permit",
      "violate"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Security guards will _____ the no-parking rule more strictly next week. Cars left near the entrance will be towed away.",
    "options": [
      "enforce",
      "comply",
      "obey",
      "violate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Many cities have decided to _____ smoking in public places. Smokers must now use special areas outside buildings.",
    "options": [
      "comply",
      "obey",
      "ban",
      "violate"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The building rules do not _____ pets in the apartments. Tenants with dogs or cats must find another place to live.",
    "options": [
      "comply",
      "violate",
      "obey",
      "permit"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The new law will _____ the sale of alcohol to anyone under eighteen. Shops that break it will lose their licenses.",
    "options": [
      "obey",
      "prohibit",
      "comply",
      "violate"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "All factories must _____ with the new environmental rules by January. Those that fail will receive large fines.",
    "options": [
      "comply",
      "obey",
      "enforce",
      "prohibit"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Drivers who leave their cars on the sidewalk will be fined. _____ parking is a serious problem in the city center.",
    "options": [
      "lawful",
      "flexible",
      "fair",
      "illegal"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Attendance at the safety briefing is _____ for all staff. Anyone who misses it cannot enter the factory floor.",
    "options": [
      "flexible",
      "mandatory",
      "unfair",
      "lawful"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Our project manager sets very _____ deadlines for every task. Late work is never accepted without a good reason.",
    "options": [
      "lawful",
      "illegal",
      "strict",
      "fair"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The company now offers _____ working hours. Staff can start any time between seven and ten in the morning.",
    "options": [
      "strict",
      "illegal",
      "mandatory",
      "flexible"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The shop sells fresh vegetables at a very _____ price. Many local families buy their weekly groceries there.",
    "options": [
      "fair",
      "strict",
      "illegal",
      "mandatory"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Several workers complained about _____ treatment by their supervisor. HR has started to look into the matter.",
    "options": [
      "lawful",
      "legal",
      "unfair",
      "flexible"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Each speaker has a time _____ of ten minutes. Please finish your presentation before the bell rings.",
    "options": [
      "norm",
      "limit",
      "custom",
      "principle"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The river forms the _____ between the two cities. Each city takes care of the bridges on its own side.",
    "options": [
      "custom",
      "authority",
      "requirement",
      "boundary"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Taking off your shoes before entering a home is a local _____ here. Visitors should follow it to show respect.",
    "options": [
      "authority",
      "limit",
      "custom",
      "requirement"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "regulation": {
    "pos": "n.",
    "en_def": "an official rule made by a government or company",
    "cn_def": "規定；法規"
  },
  "law": {
    "pos": "n.",
    "en_def": "the system of rules that a country or area must follow",
    "cn_def": "法律"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a plan or set of ideas that a company or government follows",
    "cn_def": "政策；方針"
  },
  "guideline": {
    "pos": "n.",
    "en_def": "advice or a rule that tells you how to do something",
    "cn_def": "指導方針；準則"
  },
  "principle": {
    "pos": "n.",
    "en_def": "a basic belief or idea that guides how you act",
    "cn_def": "原則"
  },
  "code": {
    "pos": "n.",
    "en_def": "a set of written rules about how people should behave",
    "cn_def": "規範；守則"
  },
  "standard": {
    "pos": "n.",
    "en_def": "a level of quality that people expect",
    "cn_def": "標準；水準"
  },
  "order": {
    "pos": "n.",
    "en_def": "a situation in which rules are followed and people behave calmly",
    "cn_def": "秩序"
  },
  "command": {
    "pos": "n.",
    "en_def": "an instruction that someone in power gives",
    "cn_def": "命令；指令"
  },
  "restriction": {
    "pos": "n.",
    "en_def": "a rule that limits what you can do",
    "cn_def": "限制；約束"
  },
  "requirement": {
    "pos": "n.",
    "en_def": "something that you must have or do",
    "cn_def": "必要條件；要求"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the practice of making people follow rules and behave well",
    "cn_def": "紀律；自制力"
  },
  "control": {
    "pos": "n.",
    "en_def": "the power to manage or limit something",
    "cn_def": "控制；管制"
  },
  "authority": {
    "pos": "n.",
    "en_def": "the power to give orders or make decisions",
    "cn_def": "權力；職權"
  },
  "obey": {
    "pos": "v.",
    "en_def": "to do what a rule or person tells you to do",
    "cn_def": "服從；遵守"
  },
  "violate": {
    "pos": "v.",
    "en_def": "to break a rule, law, or agreement",
    "cn_def": "違反；違背"
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make people obey a rule or law",
    "cn_def": "執行；實施"
  },
  "ban": {
    "pos": "v.",
    "en_def": "to officially say that something is not allowed",
    "cn_def": "禁止"
  },
  "permit": {
    "pos": "v.",
    "en_def": "to allow someone to do something",
    "cn_def": "允許；准許"
  },
  "prohibit": {
    "pos": "v.",
    "en_def": "to officially stop something by making it against the rules",
    "cn_def": "禁止"
  },
  "comply": {
    "pos": "v.",
    "en_def": "to act according to a rule or request",
    "cn_def": "遵守；遵從"
  },
  "legal": {
    "pos": "adj.",
    "en_def": "allowed by law",
    "cn_def": "合法的；法律上的"
  },
  "illegal": {
    "pos": "adj.",
    "en_def": "not allowed by law",
    "cn_def": "違法的；非法的"
  },
  "lawful": {
    "pos": "adj.",
    "en_def": "allowed by law or done according to the law",
    "cn_def": "合法的；法定的"
  },
  "mandatory": {
    "pos": "adj.",
    "en_def": "required by a rule; something you must do",
    "cn_def": "強制的；義務的"
  },
  "compulsory": {
    "pos": "adj.",
    "en_def": "that must be done because of a rule or law",
    "cn_def": "強制的；必修的"
  },
  "strict": {
    "pos": "adj.",
    "en_def": "demanding that rules are followed exactly",
    "cn_def": "嚴格的"
  },
  "flexible": {
    "pos": "adj.",
    "en_def": "able to change easily to fit a new situation",
    "cn_def": "有彈性的；靈活的"
  },
  "fair": {
    "pos": "adj.",
    "en_def": "treating everyone equally and in the right way",
    "cn_def": "公平的"
  },
  "unfair": {
    "pos": "adj.",
    "en_def": "not treating people equally or in the right way",
    "cn_def": "不公平的"
  },
  "limit": {
    "pos": "n.",
    "en_def": "the largest amount that is allowed",
    "cn_def": "限制；限度"
  },
  "boundary": {
    "pos": "n.",
    "en_def": "a line that marks the edge of an area, or a limit on behavior",
    "cn_def": "界線；分界"
  },
  "norm": {
    "pos": "n.",
    "en_def": "a usual or expected way of behaving in a group",
    "cn_def": "規範；常態"
  },
  "custom": {
    "pos": "n.",
    "en_def": "a traditional way of doing something in a place or group",
    "cn_def": "習俗；慣例"
  }
};

const EXTRA_GLOSSES = {};
