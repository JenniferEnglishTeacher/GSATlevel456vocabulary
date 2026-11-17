// Topic 335 Quiz Data: Robots 機器人
// Source word list: https://www.examword.com/group-topic/robots — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T335 - Robots 機器人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "automation",
    "pos": "n.",
    "cn_def": "自動化",
    "en_def": "the use of machines and computers to do work instead of people",
    "sentence": "A: Why did the factory manager decide to cut the night shift at the packaging plant, and are the workers going to lose their jobs? B: Thanks to {{BLANK}}, the packing is now done by machines overnight, so the company is moving those workers to quality checks and customer support instead.",
    "cn": "A：為什麼工廠經理決定取消包裝廠的夜班？員工們會失去工作嗎？ B：多虧了【自動化】，包裝工作現在在夜間由機器完成，所以公司正把那些員工調去做品質檢查和客戶支援。"
  },
  {
    "word": "artificial intelligence",
    "pos": "n.phr.",
    "cn_def": "人工智慧",
    "en_def": "computer systems that can think and learn like people",
    "sentence": "A: How is the customer service team handling so many emails now that the holiday sales have started and two staff members are on vacation? B: We started using {{BLANK}} last month to sort the messages and answer simple questions, so our staff can focus on the difficult complaints that need a human touch.",
    "cn": "A：既然假期特賣已經開始，又有兩名員工在休假，客服團隊現在是怎麼處理這麼多電子郵件的？ B：我們上個月開始使用【人工智慧】來分類訊息並回答簡單的問題，所以員工可以專注在需要人情味的棘手抱怨上。"
  },
  {
    "word": "program",
    "pos": "v.",
    "cn_def": "設定程式；編寫程式",
    "en_def": "to give a machine or computer a set of instructions",
    "sentence": "A: Can the new cleaning robot in the hotel lobby work at night when the guests are asleep, or does someone need to stay and watch it? B: Yes, our technician will {{BLANK}} it to start at two in the morning, clean the whole floor, and return to its charging station before the breakfast staff arrive.",
    "cn": "A：飯店大廳那台新的清潔機器人可以在客人睡覺的夜間工作嗎？還是需要有人留下來看著它？ B：可以，我們的技術人員會【設定程式】讓它在凌晨兩點開始、清潔整個樓層，並在早餐員工抵達前回到充電站。"
  },
  {
    "word": "sensor",
    "pos": "n.",
    "cn_def": "感測器",
    "en_def": "a device that notices heat, light, movement, or sound",
    "sentence": "A: Why did the delivery robot suddenly stop in the middle of the hallway while I was walking toward the meeting room with my coffee? B: It has a {{BLANK}} on the front that notices people nearby, so it stops automatically to avoid hitting anyone, and then it continues once the path is clear.",
    "cn": "A：我拿著咖啡走向會議室時，為什麼送貨機器人突然停在走廊中間？ B：它前面有一個【感測器】能察覺附近的人，所以它會自動停下以避免撞到人，等路徑淨空後再繼續前進。"
  },
  {
    "word": "algorithm",
    "pos": "n.",
    "cn_def": "演算法",
    "en_def": "a set of steps a computer follows to solve a problem",
    "sentence": "A: How does the online shop know which products to show me on the home page every time I log in to my account after work? B: It uses an {{BLANK}} that studies what you bought and searched for before, so it can suggest items you will probably like and increase sales for the company.",
    "cn": "A：每次我下班後登入帳號，網路商店是怎麼知道要在首頁顯示哪些商品給我看的？ B：它使用一套【演算法】分析你以前買過和搜尋過的東西，因此能推薦你可能會喜歡的商品，並為公司增加銷售額。"
  },
  {
    "word": "machine",
    "pos": "n.",
    "cn_def": "機器",
    "en_def": "a piece of equipment that uses power to do work",
    "sentence": "A: Why is everyone standing in the break room instead of getting coffee from the café downstairs like they usually do on Monday mornings? B: The office manager bought a new coffee {{BLANK}} that grinds the beans and makes a latte in thirty seconds, so everyone wants to try it before the morning meeting.",
    "cn": "A：為什麼大家都站在休息室裡，而不是像平常週一早上那樣去樓下咖啡店買咖啡？ B：辦公室經理買了一台新的咖啡【機】，能研磨咖啡豆並在三十秒內做出一杯拿鐵，所以大家都想在晨會前試試看。"
  },
  {
    "word": "android",
    "pos": "n.",
    "cn_def": "仿生人；人形機器人",
    "en_def": "a robot that looks and acts like a human",
    "sentence": "A: What was the most popular display at the technology fair you visited in Tokyo last weekend with your marketing team? B: Definitely the {{BLANK}} at the entrance, because it looked just like a real woman, greeted visitors in five languages, and even smiled when people asked it questions about the company's products.",
    "cn": "A：你上週末和行銷團隊去東京參觀的科技展中，最受歡迎的展品是什麼？ B：絕對是入口處的【仿生人】，因為它看起來就像一個真正的女性，會用五種語言迎接訪客，甚至在大家問它公司產品的問題時還會微笑。"
  },
  {
    "word": "humanoid",
    "pos": "adj.",
    "cn_def": "人形的；類人的",
    "en_def": "having a body shape like a human",
    "sentence": "A: Why did the hospital choose that expensive robot with arms and legs instead of a simple machine on wheels for the children's ward? B: The doctors believe a {{BLANK}} robot feels friendlier to young patients, so it can read them stories, play simple games, and help them feel less nervous before treatment.",
    "cn": "A：為什麼醫院為兒童病房選擇那台有手有腳的昂貴機器人，而不是有輪子的簡單機器？ B：醫生們認為【人形】機器人讓年幼的病人感覺更親切，所以它能讀故事給他們聽、玩簡單的遊戲，並幫助他們在治療前不那麼緊張。"
  },
  {
    "word": "mechanical",
    "pos": "adj.",
    "cn_def": "機械的",
    "en_def": "relating to machines or moving parts",
    "sentence": "A: Why was the morning train to the airport cancelled, and how are the passengers supposed to get to their flights on time? B: The railway company found a {{BLANK}} problem with the brakes during a safety check, so they arranged free buses that leave from the station every fifteen minutes.",
    "cn": "A：為什麼早上前往機場的火車取消了？乘客要怎麼準時趕上班機？ B：鐵路公司在安全檢查時發現煞車有【機械】問題，所以安排了每十五分鐘從車站出發的免費巴士。"
  },
  {
    "word": "automated",
    "pos": "adj.",
    "cn_def": "自動化的",
    "en_def": "operated by machines or computers without people",
    "sentence": "A: Do we still need to call each customer to remind them about their appointments at the dental clinic, or is there an easier way? B: Not anymore, because we installed an {{BLANK}} system that sends text messages two days before every appointment, which saves the receptionist about three hours each week.",
    "cn": "A：我們還需要打電話提醒每位客人牙醫診所的預約嗎？還是有更簡單的方法？ B：不用了，因為我們安裝了一套【自動化】系統，會在每次預約前兩天發送簡訊，每週大約能為櫃檯人員節省三個小時。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or energy",
    "sentence": "A: Why did the warehouse decide to replace its old forklifts with the new robot carts, even though they cost so much money? B: The robot carts are much more {{BLANK}}, because they move boxes faster, use less electricity, and can work all night without breaks, so the company will save money in two years.",
    "cn": "A：為什麼倉庫決定用新的機器人推車取代舊的堆高機，即使它們花費那麼多錢？ B：機器人推車【有效率】得多，因為它們搬箱子更快、用電更少，而且可以整晚工作不休息，所以公司兩年內就能省下錢。"
  },
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精確的",
    "en_def": "exact and accurate in every detail",
    "sentence": "A: How can the robot arm in the electronics factory put such tiny parts onto the circuit boards without making any mistakes? B: Its movements are extremely {{BLANK}}, so it can place each small part within a tenth of a millimeter, which is much more accurate than even our most experienced workers.",
    "cn": "A：電子工廠裡的機械手臂怎麼能把那麼小的零件放到電路板上卻不出任何差錯？ B：它的動作極為【精確】，能把每個小零件放置在十分之一毫米的誤差內，比我們最有經驗的員工還要準確得多。"
  },
  {
    "word": "intelligent",
    "pos": "adj.",
    "cn_def": "聰明的；智能的",
    "en_def": "able to learn, understand, and think",
    "sentence": "A: Is the new vacuum cleaner you bought for your apartment worth the high price, or should I just buy a cheaper one online? B: It is quite {{BLANK}}, because it learns the shape of each room, avoids the furniture, and remembers which areas get dirty fastest, so I think it is worth every dollar.",
    "cn": "A：你為公寓買的新吸塵器值這個高價嗎？還是我該在網路上買便宜一點的就好？ B：它相當【智能】，因為它會學習每個房間的形狀、避開家具，並記住哪些區域最快變髒，所以我認為每一塊錢都花得值得。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新；新發明",
    "en_def": "a new idea, method, or product",
    "sentence": "A: Why did the small robotics company in Taipei win the national business award this year over so many larger competitors? B: The judges were impressed by its latest {{BLANK}}, a low-cost robot that helps farmers pick fruit, because it solves a real labor shortage and is cheap enough for small farms.",
    "cn": "A：為什麼台北那家小型機器人公司今年能擊敗那麼多大型競爭者，贏得國家企業獎？ B：評審對它最新的【創新】產品印象深刻，那是一台幫助農民採收水果的低成本機器人，因為它解決了實際的人力短缺，而且便宜到小農場也買得起。"
  },
  {
    "word": "manufacturing",
    "pos": "n.",
    "cn_def": "製造業；製造",
    "en_def": "the business of making goods in large numbers",
    "sentence": "A: Why is the government offering special loans to companies in the industrial park this year, and who can apply for them? B: It wants to support local {{BLANK}}, so factories that buy robots to make products faster and cheaper can apply before the end of March and receive low interest rates.",
    "cn": "A：為什麼政府今年要提供特別貸款給工業區的公司？誰可以申請？ B：政府想要扶植本地的【製造業】，所以購買機器人以更快、更便宜地生產產品的工廠，可以在三月底前申請並享有低利率。"
  },
  {
    "word": "assembly",
    "pos": "n.",
    "cn_def": "組裝；裝配",
    "en_def": "the process of putting parts together to make something",
    "sentence": "A: Where will the visitors from the German car company spend most of their time during the factory tour tomorrow afternoon? B: They will spend about an hour watching the final {{BLANK}} of the electric cars, where robots attach the doors and wheels before the workers check every vehicle by hand.",
    "cn": "A：明天下午德國汽車公司的訪客在工廠參觀期間會把大部分時間花在哪裡？ B：他們會花大約一小時觀看電動車的最後【組裝】，機器人在那裡裝上車門和輪子，然後員工再用手檢查每一輛車。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修；保養",
    "en_def": "the work of keeping machines in good condition",
    "sentence": "A: Why will the robot kitchen at the restaurant be closed every Tuesday morning starting next month, and what will the customers eat? B: The robots need regular {{BLANK}} to stay safe and clean, so a technician will check them weekly while our human chefs prepare a simple brunch menu for the customers.",
    "cn": "A：為什麼從下個月開始，餐廳的機器人廚房每週二早上都要關閉？客人要吃什麼？ B：機器人需要定期【保養】才能保持安全和乾淨，所以技術人員會每週檢查它們，同時由我們的人類廚師為客人準備簡單的早午餐菜單。"
  },
  {
    "word": "control",
    "pos": "v.",
    "cn_def": "控制；操縱",
    "en_def": "to make a machine work the way you want",
    "sentence": "A: How do the staff members in the warehouse move those heavy robots from one building to another when the rain is very heavy? B: They {{BLANK}} them from the office with a tablet, so nobody has to go outside in the bad weather, and the robots follow a covered path between the buildings.",
    "cn": "A：雨很大的時候，倉庫的員工是怎麼把那些沉重的機器人從一棟建築移到另一棟的？ B：他們用平板電腦從辦公室【控制】它們，所以沒有人需要在惡劣的天氣中外出，而機器人會沿著建築之間有遮蔽的通道移動。"
  },
  {
    "word": "operate",
    "pos": "v.",
    "cn_def": "操作；運轉",
    "en_def": "to use and make a machine work",
    "sentence": "A: Can the new employees start working on the robot packing line on Monday, or do they need special training first? B: They must finish a two-day safety course before they {{BLANK}} the robots, because the arms move very quickly and could hurt someone who does not follow the rules carefully.",
    "cn": "A：新員工可以在週一開始在機器人包裝線上工作嗎？還是他們需要先接受特別訓練？ B：他們必須先完成兩天的安全課程才能【操作】機器人，因為機械手臂移動得非常快，可能會傷到不仔細遵守規定的人。"
  },
  {
    "word": "replace",
    "pos": "v.",
    "cn_def": "取代；替換",
    "en_def": "to take the place of someone or something",
    "sentence": "A: Are the cashiers at the supermarket worried that the new self-checkout robots will take their jobs away next year? B: A little, but the manager promised the robots will not {{BLANK}} any staff, because the cashiers will be trained to help customers find products and handle home delivery orders instead.",
    "cn": "A：超市的收銀員擔心新的自助結帳機器人明年會搶走他們的工作嗎？ B：有一點，但經理承諾機器人不會【取代】任何員工，因為收銀員將接受訓練，改為幫助客人找商品並處理宅配訂單。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助",
    "en_def": "to help someone do something",
    "sentence": "A: How will the robot at the airport information desk help the travelers who cannot speak English or Chinese very well? B: It can {{BLANK}} travelers in twelve languages by showing maps on its screen, printing boarding information, and guiding them to the right gate when they feel lost.",
    "cn": "A：機場服務台的機器人要怎麼幫助英文或中文說得不太好的旅客？ B：它能用十二種語言【協助】旅客，在螢幕上顯示地圖、列印登機資訊，並在他們迷路時引導他們到正確的登機門。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探勘",
    "en_def": "to travel through a place to learn about it",
    "sentence": "A: Why did the energy company spend so much money on an underwater robot when it already has a team of experienced divers? B: The robot can {{BLANK}} the deep ocean floor where it is too dark and cold for divers, so the company can safely search for damaged pipes and collect useful information.",
    "cn": "A：既然能源公司已經有一支經驗豐富的潛水團隊，為什麼還花那麼多錢買水下機器人？ B：機器人能【探勘】對潛水員來說太黑太冷的深海海床，所以公司可以安全地搜尋受損的管線並蒐集有用的資訊。"
  },
  {
    "word": "drone",
    "pos": "n.",
    "cn_def": "無人機",
    "en_def": "a small aircraft with no pilot inside",
    "sentence": "A: How did the farm manage to check all of its rice fields so quickly after the typhoon last week? B: The owner flew a {{BLANK}} over the fields to take photos from the sky, so he found the damaged areas in one hour instead of walking around the whole farm for two days.",
    "cn": "A：上週颱風過後，農場是怎麼這麼快就檢查完所有稻田的？ B：農場主人讓【無人機】飛越田地從空中拍照，所以他在一小時內就找到受損區域，而不用花兩天走遍整個農場。"
  },
  {
    "word": "cyborg",
    "pos": "n.",
    "cn_def": "半機械人；生化人",
    "en_def": "a person whose body has machine parts",
    "sentence": "A: What is the new science fiction movie about, and do you think our team should watch it together after the project ends? B: It is about a police officer who becomes a {{BLANK}} after a terrible accident, and the robot parts in his body make him stronger, so I think the whole team would enjoy it.",
    "cn": "A：那部新的科幻電影在講什麼？你覺得我們團隊在專案結束後應該一起去看嗎？ B：它講的是一位警察在一場嚴重的意外後變成了【半機械人】，他體內的機器人零件讓他變得更強壯，所以我想整個團隊都會喜歡。"
  },
  {
    "word": "interface",
    "pos": "n.",
    "cn_def": "介面",
    "en_def": "the way a person communicates with a computer or machine",
    "sentence": "A: Why do the older customers at the bank prefer the new service robot to the old ticket machine near the entrance? B: The robot has a simple {{BLANK}} with large buttons and clear voice instructions, so even customers who are not good with technology can choose the service they need easily.",
    "cn": "A：為什麼銀行的年長顧客比較喜歡新的服務機器人，而不是入口附近舊的抽號碼機？ B：機器人有一個簡單的【介面】，有大按鍵和清楚的語音指示，所以即使不擅長科技產品的顧客也能輕鬆選擇所需的服務。"
  },
  {
    "word": "mobility",
    "pos": "n.",
    "cn_def": "行動能力；機動性",
    "en_def": "the ability to move easily from place to place",
    "sentence": "A: Why are so many nursing homes in our city buying the robot walking helpers that we saw at the health fair last month? B: They improve the {{BLANK}} of elderly residents, because the robots support their legs and keep their balance, so they can walk around the garden without a nurse holding their arms.",
    "cn": "A：為什麼我們市裡這麼多安養院都在購買上個月在健康博覽會看到的機器人助行器？ B：它們能改善年長住民的【行動能力】，因為機器人會支撐他們的腿並保持平衡，所以他們可以在花園裡走動而不需要護理師扶著手臂。"
  },
  {
    "word": "navigation",
    "pos": "n.",
    "cn_def": "導航",
    "en_def": "the act of finding a way from one place to another",
    "sentence": "A: How does the hotel's delivery robot find the correct guest room on each floor without getting lost in the long hallways? B: It uses a {{BLANK}} system with cameras and a digital map of the building, so it can take the elevator by itself and stop at the right door every time.",
    "cn": "A：飯店的送物機器人是怎麼在每層樓找到正確的客房，而不會在長長的走廊中迷路？ B：它使用一套結合攝影機和建築數位地圖的【導航】系統，所以它能自己搭電梯，每次都停在正確的門口。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "辨識；識別",
    "en_def": "the ability of a machine to identify a face, voice, or object",
    "sentence": "A: Why don't the employees need their ID cards anymore to enter the research building in the morning? B: The company installed face {{BLANK}} cameras at the main door last week, so the system checks each worker's face in one second and opens the gate automatically.",
    "cn": "A：為什麼員工早上進入研究大樓不再需要識別證了？ B：公司上週在大門安裝了人臉【辨識】攝影機，所以系統會在一秒內檢查每位員工的臉並自動開啟閘門。"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "適應；調整",
    "en_def": "to change in order to fit a new situation",
    "sentence": "A: How quickly did the warehouse staff get used to working next to the new robots after the system was installed in September? B: It took a few weeks for everyone to {{BLANK}}, but after some training and practice, most workers now say the robots make their jobs easier and less tiring.",
    "cn": "A：九月系統安裝後，倉庫員工多快就習慣在新機器人旁邊工作？ B：大家花了幾週才【適應】，但經過一些訓練和練習後，大部分員工現在都說機器人讓他們的工作更輕鬆、更不累。"
  },
  {
    "word": "future",
    "pos": "n.",
    "cn_def": "未來",
    "en_def": "the time that will come after now",
    "sentence": "A: Why is the company sending so many young engineers to the robotics conference in Singapore this year, even with a tight travel budget? B: The CEO believes robots will play a big role in our {{BLANK}}, so she wants the team to learn about the latest trends and meet possible business partners there.",
    "cn": "A：即使差旅預算吃緊，為什麼公司今年還要派這麼多年輕工程師去新加坡參加機器人研討會？ B：執行長相信機器人將在我們的【未來】扮演重要角色，所以她希望團隊去了解最新趨勢，並在那裡認識潛在的商業夥伴。"
  },
  {
    "word": "advanced",
    "pos": "adj.",
    "cn_def": "先進的；高階的",
    "en_def": "modern and highly developed",
    "sentence": "A: Why did the hospital decide to buy the surgical robot from the American company instead of the cheaper Korean model? B: The American robot is more {{BLANK}}, because it has a 3D camera and smaller tools, so doctors can perform delicate operations with less pain and shorter recovery times for patients.",
    "cn": "A：為什麼醫院決定向美國公司購買手術機器人，而不是較便宜的韓國型號？ B：美國的機器人更【先進】，因為它有立體攝影機和更小的器械，所以醫生能進行精細的手術，讓病人疼痛更少、恢復時間更短。"
  },
  {
    "word": "collaborative",
    "pos": "adj.",
    "cn_def": "協作的；合作的",
    "en_def": "involving people or things working together",
    "sentence": "A: Is it safe for our workers to stand next to the new robots on the factory floor, or should we build a fence around them? B: These are {{BLANK}} robots designed to work side by side with people, so they slow down or stop when someone gets close, and we don't need any fences at all.",
    "cn": "A：讓我們的員工站在工廠裡新機器人旁邊安全嗎？還是我們應該在它們周圍建圍欄？ B：這些是設計來和人並肩工作的【協作型】機器人，有人靠近時它們會減速或停止，所以我們完全不需要圍欄。"
  },
  {
    "word": "programming",
    "pos": "n.",
    "cn_def": "程式設計",
    "en_def": "the work of writing instructions for computers",
    "sentence": "A: What kind of training will the new technicians receive before they start working with the robots in our main factory? B: They will take a three-week course in basic {{BLANK}}, so they can write simple instructions, change the robots' tasks, and fix small software problems without calling the supplier.",
    "cn": "A：新技術人員在主工廠開始操作機器人之前會接受什麼樣的訓練？ B：他們會上為期三週的基礎【程式設計】課程，這樣就能撰寫簡單的指令、更改機器人的任務，並在不打電話給供應商的情況下修正小型軟體問題。"
  },
  {
    "word": "prototype",
    "pos": "n.",
    "cn_def": "原型；樣品",
    "en_def": "the first model of a new product, made for testing",
    "sentence": "A: When will customers be able to buy the new window-cleaning robot that your design team has been working on since last spring? B: We just finished the first {{BLANK}}, so we will test it on different buildings for three months, fix any problems, and hopefully start selling it before next summer.",
    "cn": "A：你們設計團隊從去年春天就開始研發的新型擦窗機器人，顧客什麼時候能買到？ B：我們剛完成第一台【原型機】，所以我們會在不同建築物上測試三個月、修正任何問題，並希望在明年夏天前開始銷售。"
  }
];

const MCQS = [
  {
    "q": "The bank introduced _____ to process loan applications more quickly. As a result, customers now receive a decision within one hour.",
    "options": [
      "automation",
      "navigation",
      "mobility",
      "recognition"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our new chat service uses _____ to understand customer questions. It can answer most simple requests without help from a human agent.",
    "options": [
      "maintenance",
      "manufacturing",
      "artificial intelligence",
      "mobility"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Before the trade show, the engineers will _____ the robot to greet visitors by name. They need the guest list by Friday afternoon.",
    "options": [
      "explore",
      "program",
      "replace",
      "adapt"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The automatic doors did not open this morning because a _____ was covered with dust. The cleaning staff wiped it, and the doors worked again.",
    "options": [
      "prototype",
      "drone",
      "cyborg",
      "sensor"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The delivery company developed a new _____ to plan the shortest routes for its drivers. It has reduced fuel costs by fifteen percent.",
    "options": [
      "sensor",
      "drone",
      "algorithm",
      "prototype"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The ticket _____ at the station only accepts coins. Passengers who have no change should buy their tickets at the service counter.",
    "options": [
      "machine",
      "drone",
      "sensor",
      "algorithm"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The flight was delayed for two hours because of a _____ problem with one of the engines. Passengers received meal vouchers while they waited.",
    "options": [
      "collaborative",
      "intelligent",
      "efficient",
      "mechanical"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The parking garage now has a fully _____ payment system. Drivers simply leave, and the fee is charged to their registered credit card.",
    "options": [
      "collaborative",
      "automated",
      "precise",
      "humanoid"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The new heating system is far more _____ than the old one. It keeps the office warm while using thirty percent less energy.",
    "options": [
      "efficient",
      "precise",
      "humanoid",
      "collaborative"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Please give the delivery driver _____ directions to the loading area. Last week a driver got lost and arrived two hours late.",
    "options": [
      "automated",
      "mechanical",
      "precise",
      "collaborative"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The new security camera is _____ enough to tell the difference between a cat and a person. It only sends alerts when a stranger appears.",
    "options": [
      "humanoid",
      "intelligent",
      "mechanical",
      "collaborative"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The company holds an annual contest to encourage _____ among its staff. The winning idea this year was a robot that waters office plants.",
    "options": [
      "maintenance",
      "navigation",
      "assembly",
      "innovation"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The firm moved its _____ to a larger plant outside the city. The new site can produce twice as many cars each month.",
    "options": [
      "navigation",
      "recognition",
      "manufacturing",
      "mobility"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Workers on the _____ line put together more than five hundred phones every hour. Robots handle the smallest parts to avoid mistakes.",
    "options": [
      "assembly",
      "navigation",
      "recognition",
      "interface"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The elevators will be closed on Sunday morning for routine _____. Please use the stairs or the elevators in the east building.",
    "options": [
      "recognition",
      "innovation",
      "navigation",
      "maintenance"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Using this app, you can _____ the lights and air conditioning from anywhere. Many guests turn on the heat before returning to their rooms.",
    "options": [
      "explore",
      "control",
      "adapt",
      "assist"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Only trained staff are allowed to _____ the forklift in the warehouse. Anyone without a license must ask a supervisor for help.",
    "options": [
      "operate",
      "adapt",
      "explore",
      "assist"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The printer on the third floor is too old to repair. The office manager has decided to _____ it with a faster model.",
    "options": [
      "assist",
      "explore",
      "replace",
      "adapt"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Two staff members will be at the entrance to _____ visitors with registration. They will also hand out name badges and conference schedules.",
    "options": [
      "operate",
      "assist",
      "explore",
      "replace"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The research team sent a robot to _____ the inside of the old mine. It was too dangerous for people to enter.",
    "options": [
      "replace",
      "adapt",
      "assist",
      "explore"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The real estate agent used a _____ to take photos of the house from above. The pictures show the large garden and the nearby lake.",
    "options": [
      "sensor",
      "prototype",
      "drone",
      "interface"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Customers complained that the app's _____ was confusing and hard to use. The designers are now making the menus simpler and the buttons larger.",
    "options": [
      "interface",
      "algorithm",
      "sensor",
      "drone"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new office chairs have wheels to improve _____ around the desk. Staff can move between their computer and the printer easily.",
    "options": [
      "recognition",
      "navigation",
      "innovation",
      "mobility"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Most delivery drivers rely on a GPS _____ system to find addresses. It also warns them about traffic jams on the route.",
    "options": [
      "recognition",
      "navigation",
      "maintenance",
      "mobility"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The new phone uses voice _____ to understand simple commands. You can ask it to call a colleague or set a reminder.",
    "options": [
      "recognition",
      "navigation",
      "mobility",
      "maintenance"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "New employees usually need a few weeks to _____ to the company's working style. Their team leaders meet with them every Friday.",
    "options": [
      "operate",
      "explore",
      "adapt",
      "replace"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "This course is designed for _____ students who already understand basic robot design. Beginners should take the introductory course first.",
    "options": [
      "humanoid",
      "advanced",
      "mechanical",
      "collaborative"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The project was a _____ effort between our engineers and a local university. Both teams shared their data and met every week.",
    "options": [
      "mechanical",
      "humanoid",
      "automated",
      "collaborative"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Applicants for the position must have experience in computer _____. They will write software that runs our warehouse robots.",
    "options": [
      "navigation",
      "mobility",
      "programming",
      "innovation"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The engineers built a _____ of the new vacuum cleaner for testing. If the tests go well, mass production will begin in May.",
    "options": [
      "prototype",
      "sensor",
      "drone",
      "interface"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "automation": {
    "pos": "n.",
    "en_def": "the use of machines and computers to do work instead of people",
    "cn_def": "自動化"
  },
  "artificial intelligence": {
    "pos": "n.phr.",
    "en_def": "computer systems that can think and learn like people",
    "cn_def": "人工智慧"
  },
  "program": {
    "pos": "v.",
    "en_def": "to give a machine or computer a set of instructions",
    "cn_def": "設定程式；編寫程式"
  },
  "sensor": {
    "pos": "n.",
    "en_def": "a device that notices heat, light, movement, or sound",
    "cn_def": "感測器"
  },
  "algorithm": {
    "pos": "n.",
    "en_def": "a set of steps a computer follows to solve a problem",
    "cn_def": "演算法"
  },
  "machine": {
    "pos": "n.",
    "en_def": "a piece of equipment that uses power to do work",
    "cn_def": "機器"
  },
  "android": {
    "pos": "n.",
    "en_def": "a robot that looks and acts like a human",
    "cn_def": "仿生人；人形機器人"
  },
  "humanoid": {
    "pos": "adj.",
    "en_def": "having a body shape like a human",
    "cn_def": "人形的；類人的"
  },
  "mechanical": {
    "pos": "adj.",
    "en_def": "relating to machines or moving parts",
    "cn_def": "機械的"
  },
  "automated": {
    "pos": "adj.",
    "en_def": "operated by machines or computers without people",
    "cn_def": "自動化的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or energy",
    "cn_def": "有效率的"
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact and accurate in every detail",
    "cn_def": "精確的"
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "able to learn, understand, and think",
    "cn_def": "聰明的；智能的"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method, or product",
    "cn_def": "創新；新發明"
  },
  "manufacturing": {
    "pos": "n.",
    "en_def": "the business of making goods in large numbers",
    "cn_def": "製造業；製造"
  },
  "assembly": {
    "pos": "n.",
    "en_def": "the process of putting parts together to make something",
    "cn_def": "組裝；裝配"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping machines in good condition",
    "cn_def": "維修；保養"
  },
  "control": {
    "pos": "v.",
    "en_def": "to make a machine work the way you want",
    "cn_def": "控制；操縱"
  },
  "operate": {
    "pos": "v.",
    "en_def": "to use and make a machine work",
    "cn_def": "操作；運轉"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to take the place of someone or something",
    "cn_def": "取代；替換"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone do something",
    "cn_def": "協助"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel through a place to learn about it",
    "cn_def": "探索；探勘"
  },
  "drone": {
    "pos": "n.",
    "en_def": "a small aircraft with no pilot inside",
    "cn_def": "無人機"
  },
  "cyborg": {
    "pos": "n.",
    "en_def": "a person whose body has machine parts",
    "cn_def": "半機械人；生化人"
  },
  "interface": {
    "pos": "n.",
    "en_def": "the way a person communicates with a computer or machine",
    "cn_def": "介面"
  },
  "mobility": {
    "pos": "n.",
    "en_def": "the ability to move easily from place to place",
    "cn_def": "行動能力；機動性"
  },
  "navigation": {
    "pos": "n.",
    "en_def": "the act of finding a way from one place to another",
    "cn_def": "導航"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "the ability of a machine to identify a face, voice, or object",
    "cn_def": "辨識；識別"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change in order to fit a new situation",
    "cn_def": "適應；調整"
  },
  "future": {
    "pos": "n.",
    "en_def": "the time that will come after now",
    "cn_def": "未來"
  },
  "advanced": {
    "pos": "adj.",
    "en_def": "modern and highly developed",
    "cn_def": "先進的；高階的"
  },
  "collaborative": {
    "pos": "adj.",
    "en_def": "involving people or things working together",
    "cn_def": "協作的；合作的"
  },
  "programming": {
    "pos": "n.",
    "en_def": "the work of writing instructions for computers",
    "cn_def": "程式設計"
  },
  "prototype": {
    "pos": "n.",
    "en_def": "the first model of a new product, made for testing",
    "cn_def": "原型；樣品"
  }
};

const EXTRA_GLOSSES = {};
