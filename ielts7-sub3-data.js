// Topic 7 Subunit 3 Quiz Data: Service, Home & Medical Robots 服務、家用與醫療機器人
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S03 - Service, Home & Medical Robots 服務、家用與醫療機器人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "robot vacuum",
    "pos": "n.phr.",
    "cn_def": "掃地機器人",
    "en_def": "a small machine that cleans floors by itself",
    "sentence": "Our {{BLANK}} cleans the living room while we are at work, but it often gets stuck under the sofa.",
    "cn": "我們的掃地機器人在我們上班時打掃客廳,但它常常卡在沙發底下。"
  },
  {
    "word": "lawnmower",
    "pos": "n.",
    "cn_def": "割草機",
    "en_def": "a machine for cutting grass",
    "sentence": "My neighbour bought a robot {{BLANK}} that cuts the grass every morning, so his garden always looks tidy.",
    "cn": "我的鄰居買了一台機器人割草機,每天早上割草,所以他的花園總是看起來很整齊。"
  },
  {
    "word": "dishwasher",
    "pos": "n.",
    "cn_def": "洗碗機",
    "en_def": "a machine that washes plates and cups",
    "sentence": "We load the {{BLANK}} after dinner, and the clean plates are ready before we go to bed.",
    "cn": "我們晚餐後把碗盤放進洗碗機,睡覺前乾淨的盤子就準備好了。"
  },
  {
    "word": "appliance",
    "pos": "n.",
    "cn_def": "家電;家用電器",
    "en_def": "a machine used in the home, like a fridge",
    "sentence": "Many new kitchen {{BLANK}} can connect to the internet, so you can start the rice cooker from your phone.",
    "cn": "許多新的廚房家電可以連上網路,所以你可以用手機啟動電鍋。"
  },
  {
    "word": "smart home",
    "pos": "n.phr.",
    "cn_def": "智慧家庭;智慧住宅",
    "en_def": "a house where devices are controlled by the internet",
    "sentence": "In our {{BLANK}}, the lights turn on when we walk in, and the heater starts before we wake up.",
    "cn": "在我們的智慧家庭裡,我們一走進去燈就會亮,而暖氣在我們起床前就開始運作。"
  },
  {
    "word": "voice command",
    "pos": "n.phr.",
    "cn_def": "語音指令",
    "en_def": "a spoken order that a machine follows",
    "sentence": "Grandpa uses a {{BLANK}} to turn on the TV, because the small buttons on the remote are hard to see.",
    "cn": "爺爺用語音指令打開電視,因為遙控器上的小按鈕很難看清楚。"
  },
  {
    "word": "vending machine",
    "pos": "n.phr.",
    "cn_def": "自動販賣機",
    "en_def": "a machine that sells drinks or snacks",
    "sentence": "The {{BLANK}} at the station takes phone payments, so I bought a drink without any coins.",
    "cn": "車站的自動販賣機接受手機付款,所以我沒用任何硬幣就買了一杯飲料。"
  },
  {
    "word": "self-checkout",
    "pos": "n.",
    "cn_def": "自助結帳機",
    "en_def": "a machine where shoppers pay without a cashier",
    "sentence": "The supermarket added six {{BLANK}} machines, but older customers still prefer to queue for a person.",
    "cn": "超市增加了六台自助結帳機,但年長的顧客仍然比較喜歡排隊找人結帳。"
  },
  {
    "word": "kiosk",
    "pos": "n.",
    "cn_def": "自助點餐機;服務亭",
    "en_def": "a small screen or booth where you order or buy things",
    "sentence": "I ordered my burger at the touchscreen {{BLANK}}, and a robot brought it to my table ten minutes later.",
    "cn": "我在觸控自助點餐機點了漢堡,十分鐘後一台機器人把它送到我的桌上。"
  },
  {
    "word": "cashier",
    "pos": "n.",
    "cn_def": "收銀員",
    "en_def": "a person who takes money in a shop",
    "sentence": "The friendly {{BLANK}} at the corner shop knows all the customers, so people still visit even though machines are faster.",
    "cn": "街角商店那位友善的收銀員認識所有顧客,所以即使機器比較快,人們仍然會去光顧。"
  },
  {
    "word": "receptionist",
    "pos": "n.",
    "cn_def": "接待員;櫃台人員",
    "en_def": "a person who greets visitors at a front desk",
    "sentence": "The hotel replaced its night {{BLANK}} with a talking robot, but guests complained that it could not answer simple questions.",
    "cn": "飯店用一台會說話的機器人取代了夜班接待員,但客人抱怨它無法回答簡單的問題。"
  },
  {
    "word": "waiter",
    "pos": "n.",
    "cn_def": "服務生",
    "en_def": "a person who serves food in a restaurant",
    "sentence": "The restaurant uses a robot {{BLANK}} to carry dishes, while the staff spend more time chatting with customers.",
    "cn": "這家餐廳使用機器人服務生送菜,而員工則花更多時間和顧客聊天。"
  },
  {
    "word": "chore",
    "pos": "n.",
    "cn_def": "家事;雜務",
    "en_def": "a small, regular job in the house",
    "sentence": "Washing clothes used to be a hard {{BLANK}}, but now machines do most of the work for us.",
    "cn": "洗衣服以前是一件辛苦的家事,但現在機器幫我們做了大部分的工作。"
  },
  {
    "word": "errand",
    "pos": "n.",
    "cn_def": "跑腿;差事",
    "en_def": "a short trip to buy or deliver something",
    "sentence": "My mother asked a delivery robot to do a quick {{BLANK}}, so it brought medicine from the pharmacy next door.",
    "cn": "我媽媽請一台送貨機器人去跑腿,於是它從隔壁藥局送來了藥。"
  },
  {
    "word": "mop",
    "pos": "v.",
    "cn_def": "拖(地)",
    "en_def": "to clean a floor with a wet cloth on a stick",
    "sentence": "This robot can vacuum and {{BLANK}} the floor at the same time, so our kitchen stays clean every day.",
    "cn": "這台機器人能同時吸塵和拖地,所以我們的廚房每天都保持乾淨。"
  },
  {
    "word": "hospitality",
    "pos": "n.",
    "cn_def": "餐旅業;款待",
    "en_def": "the business of hotels, restaurants and serving guests",
    "sentence": "Robots are becoming common in the {{BLANK}} industry, but many travellers still want a warm smile from a real person.",
    "cn": "機器人在餐旅業越來越常見,但許多旅客仍然希望得到真人溫暖的微笑。"
  },
  {
    "word": "greet",
    "pos": "v.",
    "cn_def": "迎接;打招呼",
    "en_def": "to say hello to someone when they arrive",
    "sentence": "A small robot at the bank door will {{BLANK}} you by name, and then it tells you which counter to visit.",
    "cn": "銀行門口的小機器人會叫著你的名字跟你打招呼,然後告訴你要去哪個櫃台。"
  },
  {
    "word": "social robot",
    "pos": "n.phr.",
    "cn_def": "社交機器人",
    "en_def": "a robot designed to talk and interact with people",
    "sentence": "The {{BLANK}} in the care home tells jokes and plays games, so the residents feel less bored in the afternoon.",
    "cn": "安養院裡的社交機器人會講笑話和玩遊戲,所以住民下午比較不會無聊。"
  },
  {
    "word": "surgical",
    "pos": "adj.",
    "cn_def": "外科的;手術的",
    "en_def": "connected with medical operations",
    "sentence": "The hospital bought a {{BLANK}} robot that can make very small cuts, so patients recover faster after their operations.",
    "cn": "醫院買了一台能做出非常小切口的手術機器人,所以病人手術後恢復得更快。"
  },
  {
    "word": "surgeon",
    "pos": "n.",
    "cn_def": "外科醫生",
    "en_def": "a doctor who performs operations",
    "sentence": "The {{BLANK}} controlled the robot from a screen beside the bed, and the operation finished an hour early.",
    "cn": "外科醫生從病床旁的螢幕控制機器人,而手術提早了一個小時完成。"
  },
  {
    "word": "incision",
    "pos": "n.",
    "cn_def": "切口",
    "en_def": "a cut made into the body during an operation",
    "sentence": "The robot made a tiny {{BLANK}} in my father's side, so he could walk around the next day.",
    "cn": "機器人在我爸爸的側腹做了一個很小的切口,所以他隔天就能四處走動。"
  },
  {
    "word": "keyhole surgery",
    "pos": "n.phr.",
    "cn_def": "微創手術;內視鏡手術",
    "en_def": "an operation done through very small cuts",
    "sentence": "My aunt had {{BLANK}} on her knee, and she was back at work in less than two weeks.",
    "cn": "我阿姨的膝蓋做了微創手術,不到兩週她就回去上班了。"
  },
  {
    "word": "prosthetic",
    "pos": "adj.",
    "cn_def": "義肢的;假體的",
    "en_def": "artificial and used to replace a missing body part",
    "sentence": "The runner lost her leg in an accident, but with a {{BLANK}} leg she now competes in international races.",
    "cn": "這位跑者在意外中失去了一條腿,但靠著義肢腿,她現在參加國際比賽。"
  },
  {
    "word": "carer",
    "pos": "n.",
    "cn_def": "照顧者;看護",
    "en_def": "a person who looks after someone who is ill or old",
    "sentence": "Robots can remind patients to take medicine, but they cannot replace a kind {{BLANK}} who listens and understands.",
    "cn": "機器人能提醒病人吃藥,但它們無法取代一位會傾聽和理解的親切照顧者。"
  },
  {
    "word": "care home",
    "pos": "n.phr.",
    "cn_def": "安養院;養護中心",
    "en_def": "a place where old people live and are looked after",
    "sentence": "The {{BLANK}} has a robot that delivers meals to each room, so the nurses have more time to talk with residents.",
    "cn": "這家安養院有一台把餐點送到每個房間的機器人,所以護理師有更多時間和住民聊天。"
  },
  {
    "word": "ward",
    "pos": "n.",
    "cn_def": "病房",
    "en_def": "a large room in a hospital for several patients",
    "sentence": "A robot moves through the children's {{BLANK}} at night, and it checks each child's temperature without waking them up.",
    "cn": "一台機器人夜間在兒童病房裡移動,它會在不吵醒孩子的情況下量每個孩子的體溫。"
  },
  {
    "word": "disinfect",
    "pos": "v.",
    "cn_def": "消毒",
    "en_def": "to clean something to kill germs",
    "sentence": "The hospital uses robots with strong lights to {{BLANK}} the rooms, so nurses are less likely to catch infections.",
    "cn": "醫院使用帶有強光的機器人來消毒房間,所以護理師比較不容易被感染。"
  },
  {
    "word": "dispense",
    "pos": "v.",
    "cn_def": "配(藥);分發",
    "en_def": "to give out medicine or other things",
    "sentence": "The machine can {{BLANK}} the right pills for each patient, and it keeps a record so nurses can check later.",
    "cn": "這台機器能為每位病人配發正確的藥丸,並且會保存紀錄讓護理師之後檢查。"
  }
];

const MCQS = [
  {
    "q": "Our _____ cleans the living room while we are at work, but it often gets stuck under the sofa.",
    "options": [
      "assembly line",
      "robot vacuum",
      "line judge",
      "job loss"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "My neighbour bought a robot _____ that cuts the grass every morning, so his garden always looks tidy.",
    "options": [
      "arena",
      "jobseeker",
      "channel",
      "lawnmower"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "We load the _____ after dinner, and the clean plates are ready before we go to bed.",
    "options": [
      "dishwasher",
      "welder",
      "colleague",
      "joint"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Many new kitchen _____ can connect to the internet, so you can start the rice cooker from your phone.",
    "options": [
      "android",
      "operator",
      "appliance",
      "lidar"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "In our _____, the lights turn on when we walk in, and the heater starts before we wake up.",
    "options": [
      "wear and tear",
      "smart home",
      "quality control",
      "early adopter"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Grandpa uses a _____ to turn on the TV, because the small buttons on the remote are hard to see.",
    "options": [
      "loading dock",
      "supply chain",
      "voice command",
      "wear and tear"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The _____ at the station takes phone payments, so I bought a drink without any coins.",
    "options": [
      "mass production",
      "heavy lifting",
      "robot rights",
      "vending machine"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The supermarket added six _____ machines, but older customers still prefer to queue for a person.",
    "options": [
      "self-checkout",
      "wiring",
      "showcase",
      "microcontroller"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "I ordered my burger at the touchscreen _____, and a robot brought it to my table ten minutes later.",
    "options": [
      "pulley",
      "kiosk",
      "outlay",
      "dignity"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The friendly _____ at the corner shop knows all the customers, so people still visit even though machines are faster.",
    "options": [
      "cashier",
      "pitfall",
      "portfolio",
      "joint"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The hotel replaced its night _____ with a talking robot, but guests complained that it could not answer simple questions.",
    "options": [
      "analytics",
      "stakeholder",
      "titanium",
      "receptionist"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The restaurant uses a robot _____ to carry dishes, while the staff spend more time chatting with customers.",
    "options": [
      "workstation",
      "labourer",
      "waiter",
      "tiebreak"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Washing clothes used to be a hard _____, but now machines do most of the work for us.",
    "options": [
      "upheaval",
      "chore",
      "welder",
      "overtime"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "My mother asked a delivery robot to do a quick _____, so it brought medicine from the pharmacy next door.",
    "options": [
      "outlay",
      "verdict",
      "errand",
      "realm"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "This robot can vacuum and _____ the floor at the same time, so our kitchen stays clean every day.",
    "options": [
      "redeploy",
      "debug",
      "expire",
      "mop"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Robots are becoming common in the _____ industry, but many travellers still want a warm smile from a real person.",
    "options": [
      "hospitality",
      "channel",
      "payroll",
      "manipulator"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "A small robot at the bank door will _____ you by name, and then it tells you which counter to visit.",
    "options": [
      "override",
      "discard",
      "certify",
      "greet"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The _____ in the care home tells jokes and plays games, so the residents feel less bored in the afternoon.",
    "options": [
      "robot rights",
      "social robot",
      "goal-line technology",
      "robot tax"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The hospital bought a _____ robot that can make very small cuts, so patients recover faster after their operations.",
    "options": [
      "inferior",
      "sentient",
      "surgical",
      "offside"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The _____ controlled the robot from a screen beside the bed, and the operation finished an hour early.",
    "options": [
      "surgeon",
      "watchdog",
      "defect",
      "cobot"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The robot made a tiny _____ in my father's side, so he could walk around the next day.",
    "options": [
      "transaction",
      "payload",
      "incision",
      "championship"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "My aunt had _____ on her knee, and she was back at work in less than two weeks.",
    "options": [
      "science fiction",
      "a close call",
      "motion capture",
      "keyhole surgery"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The runner lost her leg in an accident, but with a _____ leg she now competes in international races.",
    "options": [
      "humanlike",
      "prosthetic",
      "industrial",
      "adjustable"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Robots can remind patients to take medicine, but they cannot replace a kind _____ who listens and understands.",
    "options": [
      "carer",
      "rival",
      "colleague",
      "bottleneck"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The _____ has a robot that delivers meals to each room, so the nurses have more time to talk with residents.",
    "options": [
      "line judge",
      "care home",
      "wear and tear",
      "motion capture"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "A robot moves through the children's _____ at night, and it checks each child's temperature without waking them up.",
    "options": [
      "ruling",
      "axle",
      "ward",
      "generation"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The hospital uses robots with strong lights to _____ the rooms, so nurses are less likely to catch infections.",
    "options": [
      "disinfect",
      "purchase",
      "withdraw",
      "outpace"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The machine can _____ the right pills for each patient, and it keeps a record so nurses can check later.",
    "options": [
      "dismantle",
      "execute",
      "complicate",
      "dispense"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "robot vacuum": {
    "pos": "n.phr.",
    "en_def": "a small machine that cleans floors by itself",
    "cn_def": "掃地機器人"
  },
  "lawnmower": {
    "pos": "n.",
    "en_def": "a machine for cutting grass",
    "cn_def": "割草機"
  },
  "dishwasher": {
    "pos": "n.",
    "en_def": "a machine that washes plates and cups",
    "cn_def": "洗碗機"
  },
  "appliance": {
    "pos": "n.",
    "en_def": "a machine used in the home, like a fridge",
    "cn_def": "家電;家用電器"
  },
  "smart home": {
    "pos": "n.phr.",
    "en_def": "a house where devices are controlled by the internet",
    "cn_def": "智慧家庭;智慧住宅"
  },
  "voice command": {
    "pos": "n.phr.",
    "en_def": "a spoken order that a machine follows",
    "cn_def": "語音指令"
  },
  "vending machine": {
    "pos": "n.phr.",
    "en_def": "a machine that sells drinks or snacks",
    "cn_def": "自動販賣機"
  },
  "self-checkout": {
    "pos": "n.",
    "en_def": "a machine where shoppers pay without a cashier",
    "cn_def": "自助結帳機"
  },
  "kiosk": {
    "pos": "n.",
    "en_def": "a small screen or booth where you order or buy things",
    "cn_def": "自助點餐機;服務亭"
  },
  "cashier": {
    "pos": "n.",
    "en_def": "a person who takes money in a shop",
    "cn_def": "收銀員"
  },
  "receptionist": {
    "pos": "n.",
    "en_def": "a person who greets visitors at a front desk",
    "cn_def": "接待員;櫃台人員"
  },
  "waiter": {
    "pos": "n.",
    "en_def": "a person who serves food in a restaurant",
    "cn_def": "服務生"
  },
  "chore": {
    "pos": "n.",
    "en_def": "a small, regular job in the house",
    "cn_def": "家事;雜務"
  },
  "errand": {
    "pos": "n.",
    "en_def": "a short trip to buy or deliver something",
    "cn_def": "跑腿;差事"
  },
  "mop": {
    "pos": "v.",
    "en_def": "to clean a floor with a wet cloth on a stick",
    "cn_def": "拖(地)"
  },
  "hospitality": {
    "pos": "n.",
    "en_def": "the business of hotels, restaurants and serving guests",
    "cn_def": "餐旅業;款待"
  },
  "greet": {
    "pos": "v.",
    "en_def": "to say hello to someone when they arrive",
    "cn_def": "迎接;打招呼"
  },
  "social robot": {
    "pos": "n.phr.",
    "en_def": "a robot designed to talk and interact with people",
    "cn_def": "社交機器人"
  },
  "surgical": {
    "pos": "adj.",
    "en_def": "connected with medical operations",
    "cn_def": "外科的;手術的"
  },
  "surgeon": {
    "pos": "n.",
    "en_def": "a doctor who performs operations",
    "cn_def": "外科醫生"
  },
  "incision": {
    "pos": "n.",
    "en_def": "a cut made into the body during an operation",
    "cn_def": "切口"
  },
  "keyhole surgery": {
    "pos": "n.phr.",
    "en_def": "an operation done through very small cuts",
    "cn_def": "微創手術;內視鏡手術"
  },
  "prosthetic": {
    "pos": "adj.",
    "en_def": "artificial and used to replace a missing body part",
    "cn_def": "義肢的;假體的"
  },
  "carer": {
    "pos": "n.",
    "en_def": "a person who looks after someone who is ill or old",
    "cn_def": "照顧者;看護"
  },
  "care home": {
    "pos": "n.phr.",
    "en_def": "a place where old people live and are looked after",
    "cn_def": "安養院;養護中心"
  },
  "ward": {
    "pos": "n.",
    "en_def": "a large room in a hospital for several patients",
    "cn_def": "病房"
  },
  "disinfect": {
    "pos": "v.",
    "en_def": "to clean something to kill germs",
    "cn_def": "消毒"
  },
  "dispense": {
    "pos": "v.",
    "en_def": "to give out medicine or other things",
    "cn_def": "配(藥);分發"
  },
  "assembly line": {
    "pos": "n.phr.",
    "en_def": "a row of workers or machines that build products step by step",
    "cn_def": "裝配線;生產線"
  },
  "line judge": {
    "pos": "n.phr.",
    "en_def": "an official who decides if a ball is in or out",
    "cn_def": "司線員;邊線裁判"
  },
  "job loss": {
    "pos": "n.phr.",
    "en_def": "when people lose their jobs",
    "cn_def": "失業;工作流失"
  },
  "arena": {
    "pos": "n.",
    "en_def": "a large place for sports or shows; an area of activity",
    "cn_def": "競技場;舞台(領域)"
  },
  "jobseeker": {
    "pos": "n.",
    "en_def": "a person who is looking for a job",
    "cn_def": "求職者"
  },
  "channel": {
    "pos": "n.",
    "en_def": "a way of sending information or goods",
    "cn_def": "管道;頻道"
  },
  "welder": {
    "pos": "n.",
    "en_def": "a person or machine that joins metal by heating it",
    "cn_def": "焊接工;焊接機"
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事"
  },
  "joint": {
    "pos": "n.",
    "en_def": "a place where two parts connect and can bend",
    "cn_def": "關節;接頭"
  },
  "android": {
    "pos": "n.",
    "en_def": "a robot made to look very much like a human",
    "cn_def": "仿生人;擬真機器人"
  },
  "operator": {
    "pos": "n.",
    "en_def": "a person who controls a machine",
    "cn_def": "操作員"
  },
  "lidar": {
    "pos": "n.",
    "en_def": "a system that measures distance using laser light",
    "cn_def": "光達;雷射雷達"
  },
  "wear and tear": {
    "pos": "n.phr.",
    "en_def": "damage that happens through normal use over time",
    "cn_def": "(正常使用造成的)磨損"
  },
  "quality control": {
    "pos": "n.phr.",
    "en_def": "checking that products are made correctly",
    "cn_def": "品質管制;品管"
  },
  "early adopter": {
    "pos": "n.phr.",
    "en_def": "a person who uses new technology as soon as it appears",
    "cn_def": "早期使用者;嘗鮮者"
  },
  "loading dock": {
    "pos": "n.phr.",
    "en_def": "the place where trucks are filled or emptied",
    "cn_def": "裝卸區;卸貨平台"
  },
  "supply chain": {
    "pos": "n.phr.",
    "en_def": "all the steps from making a product to selling it",
    "cn_def": "供應鏈"
  },
  "mass production": {
    "pos": "n.phr.",
    "en_def": "making very large numbers of the same product",
    "cn_def": "大量生產"
  },
  "heavy lifting": {
    "pos": "n.phr.",
    "en_def": "the work of picking up and moving heavy things",
    "cn_def": "搬運重物;粗重工作"
  },
  "robot rights": {
    "pos": "n.phr.",
    "en_def": "the idea that advanced robots should have legal protections",
    "cn_def": "機器人權利"
  },
  "wiring": {
    "pos": "n.",
    "en_def": "the system of wires inside a machine",
    "cn_def": "線路;配線"
  },
  "showcase": {
    "pos": "n.",
    "en_def": "an event that shows the best qualities of something",
    "cn_def": "展示會;展示的機會"
  },
  "microcontroller": {
    "pos": "n.",
    "en_def": "a very small computer that controls a device",
    "cn_def": "微控制器"
  },
  "pulley": {
    "pos": "n.",
    "en_def": "a wheel with a rope used to lift things",
    "cn_def": "滑輪"
  },
  "outlay": {
    "pos": "n.",
    "en_def": "the money spent on something, especially at the start",
    "cn_def": "(初期)支出;花費"
  },
  "dignity": {
    "pos": "n.",
    "en_def": "the feeling of being respected and valued",
    "cn_def": "尊嚴"
  },
  "pitfall": {
    "pos": "n.",
    "en_def": "a hidden problem or danger",
    "cn_def": "陷阱;隱患"
  },
  "portfolio": {
    "pos": "n.",
    "en_def": "a range of products, or a collection of someone's work",
    "cn_def": "產品組合;作品集"
  },
  "analytics": {
    "pos": "n.",
    "en_def": "the study of data to find useful patterns",
    "cn_def": "數據分析"
  },
  "stakeholder": {
    "pos": "n.",
    "en_def": "a person or group affected by a decision",
    "cn_def": "利害關係人"
  },
  "titanium": {
    "pos": "n.",
    "en_def": "a strong, light, silver-coloured metal",
    "cn_def": "鈦"
  },
  "workstation": {
    "pos": "n.",
    "en_def": "the place where a worker or machine does a job",
    "cn_def": "工作站;工作台"
  },
  "labourer": {
    "pos": "n.",
    "en_def": "a person who does hard physical work",
    "cn_def": "勞工;體力勞動者"
  },
  "tiebreak": {
    "pos": "n.",
    "en_def": "an extra game played to decide a winner when scores are equal",
    "cn_def": "搶七;決勝局"
  },
  "upheaval": {
    "pos": "n.",
    "en_def": "a big change that causes confusion or difficulty",
    "cn_def": "劇變;動盪"
  },
  "overtime": {
    "pos": "n.",
    "en_def": "extra hours worked after the normal working day",
    "cn_def": "加班"
  },
  "verdict": {
    "pos": "n.",
    "en_def": "an opinion or decision after testing or judging something",
    "cn_def": "評價;裁決"
  },
  "realm": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範疇"
  },
  "redeploy": {
    "pos": "v.",
    "en_def": "to move workers to a different job or place",
    "cn_def": "重新調派;調職"
  },
  "debug": {
    "pos": "v.",
    "en_def": "to find and remove mistakes in computer code",
    "cn_def": "除錯"
  },
  "expire": {
    "pos": "v.",
    "en_def": "to come to the end of the time it is valid",
    "cn_def": "到期;過期"
  },
  "payroll": {
    "pos": "n.",
    "en_def": "the list of workers a company pays, or the money paid",
    "cn_def": "薪資名冊;薪資總額"
  },
  "manipulator": {
    "pos": "n.",
    "en_def": "a robot arm that picks up and moves objects",
    "cn_def": "機械手臂;操作臂"
  },
  "override": {
    "pos": "v.",
    "en_def": "to take control and cancel what a machine is doing",
    "cn_def": "手動接管;推翻(決定)"
  },
  "discard": {
    "pos": "v.",
    "en_def": "to throw away something you no longer want",
    "cn_def": "丟棄"
  },
  "certify": {
    "pos": "v.",
    "en_def": "to officially say that something meets a standard",
    "cn_def": "認證;證明"
  },
  "goal-line technology": {
    "pos": "n.phr.",
    "en_def": "cameras that show whether a ball crossed the goal line",
    "cn_def": "門線技術"
  },
  "robot tax": {
    "pos": "n.phr.",
    "en_def": "a tax on companies that use robots instead of workers",
    "cn_def": "機器人稅"
  },
  "inferior": {
    "pos": "adj.",
    "en_def": "lower in quality than others",
    "cn_def": "較差的;次等的"
  },
  "sentient": {
    "pos": "adj.",
    "en_def": "able to feel and experience things",
    "cn_def": "有知覺的;有感知能力的"
  },
  "offside": {
    "pos": "adj.",
    "en_def": "in a position on the field that breaks the rules",
    "cn_def": "越位的"
  },
  "watchdog": {
    "pos": "n.",
    "en_def": "a group that checks that companies follow the rules",
    "cn_def": "監督機構"
  },
  "defect": {
    "pos": "n.",
    "en_def": "a fault or mistake in something that was made",
    "cn_def": "瑕疵;缺陷"
  },
  "cobot": {
    "pos": "n.",
    "en_def": "a robot designed to work safely next to people",
    "cn_def": "協作機器人"
  },
  "transaction": {
    "pos": "n.",
    "en_def": "an act of buying or selling something",
    "cn_def": "交易"
  },
  "payload": {
    "pos": "n.",
    "en_def": "the load that a vehicle or drone carries",
    "cn_def": "酬載;載重"
  },
  "championship": {
    "pos": "n.",
    "en_def": "a competition to find the best player or team",
    "cn_def": "冠軍賽;錦標賽"
  },
  "science fiction": {
    "pos": "n.phr.",
    "en_def": "stories about imagined future science and technology",
    "cn_def": "科幻小說;科幻作品"
  },
  "a close call": {
    "pos": "n.phr.",
    "en_def": "a situation where something bad almost happened",
    "cn_def": "千鈞一髮;險些出事"
  },
  "motion capture": {
    "pos": "n.phr.",
    "en_def": "recording body movements with sensors to study them",
    "cn_def": "動作捕捉"
  },
  "humanlike": {
    "pos": "adj.",
    "en_def": "similar to a human in looks or behaviour",
    "cn_def": "像人類的;擬人的"
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "connected with factories and making goods",
    "cn_def": "工業的"
  },
  "adjustable": {
    "pos": "adj.",
    "en_def": "able to be changed to suit different needs",
    "cn_def": "可調整的"
  },
  "rival": {
    "pos": "n.",
    "en_def": "a person or company competing with another",
    "cn_def": "競爭者;對手"
  },
  "bottleneck": {
    "pos": "n.",
    "en_def": "a point where things slow down and cause delays",
    "cn_def": "瓶頸"
  },
  "ruling": {
    "pos": "n.",
    "en_def": "an official decision",
    "cn_def": "裁決;判決"
  },
  "axle": {
    "pos": "n.",
    "en_def": "a rod that connects and turns two wheels",
    "cn_def": "車軸;輪軸"
  },
  "generation": {
    "pos": "n.",
    "en_def": "a stage in the development of a product",
    "cn_def": "世代;代"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something, especially something expensive",
    "cn_def": "購買"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to take something back or remove it",
    "cn_def": "撤回;收回"
  },
  "outpace": {
    "pos": "v.",
    "en_def": "to go faster or develop more quickly than others",
    "cn_def": "超越;比…發展更快"
  },
  "dismantle": {
    "pos": "v.",
    "en_def": "to take a machine apart into pieces",
    "cn_def": "拆解;拆卸"
  },
  "execute": {
    "pos": "v.",
    "en_def": "to carry out a plan, order or task",
    "cn_def": "執行"
  },
  "complicate": {
    "pos": "v.",
    "en_def": "to make something more difficult to understand or do",
    "cn_def": "使複雜化"
  }
};

const EXTRA_GLOSSES = {};
