// Topic 7 Subunit 2 Quiz Data: Robots at Work: Factories & Logistics 工廠與物流中的機器人
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S02 - Robots at Work: Factories & Logistics 工廠與物流中的機器人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "assembly line",
    "pos": "n.phr.",
    "cn_def": "裝配線;生產線",
    "en_def": "a row of workers or machines that build products step by step",
    "sentence": "Robots now do most of the welding on the car {{BLANK}}, while people check the finished cars for problems.",
    "cn": "機器人現在負責汽車裝配線上大部分的焊接工作,而人們則檢查完成的汽車是否有問題。"
  },
  {
    "word": "conveyor belt",
    "pos": "n.phr.",
    "cn_def": "輸送帶",
    "en_def": "a moving belt that carries things from place to place",
    "sentence": "Boxes move along the {{BLANK}} all day, and a robot arm picks out any box with the wrong label.",
    "cn": "箱子整天沿著輸送帶移動,而一支機器手臂會挑出任何貼錯標籤的箱子。"
  },
  {
    "word": "plant",
    "pos": "n.",
    "cn_def": "工廠;廠房",
    "en_def": "a large factory where things are made",
    "sentence": "The new battery {{BLANK}} near the city uses hundreds of robots, but it still employs about two thousand workers.",
    "cn": "城市附近的新電池工廠使用了數百台機器人,但它仍然僱用了大約兩千名員工。"
  },
  {
    "word": "mass production",
    "pos": "n.phr.",
    "cn_def": "大量生產",
    "en_def": "making very large numbers of the same product",
    "sentence": "{{BLANK}} made cars cheaper in the twentieth century, and robots are making many products cheaper today.",
    "cn": "大量生產在二十世紀讓汽車變得更便宜,而機器人如今正讓許多產品變得更便宜。"
  },
  {
    "word": "industrial",
    "pos": "adj.",
    "cn_def": "工業的",
    "en_def": "connected with factories and making goods",
    "sentence": "Most {{BLANK}} robots work behind safety fences, because their heavy arms move very fast and could injure people.",
    "cn": "大多數工業機器人在安全圍欄後面工作,因為它們沉重的手臂移動得很快,可能會傷到人。"
  },
  {
    "word": "forklift",
    "pos": "n.",
    "cn_def": "堆高機",
    "en_def": "a small vehicle with two metal arms for lifting goods",
    "sentence": "The driverless {{BLANK}} carries boxes around the warehouse at night, so the shelves are full when staff arrive.",
    "cn": "這台無人駕駛的堆高機夜間在倉庫裡搬運箱子,所以員工到達時貨架已經補滿了。"
  },
  {
    "word": "pallet",
    "pos": "n.",
    "cn_def": "棧板;貨板",
    "en_def": "a flat wooden frame that goods are stacked on",
    "sentence": "The robot lifts each {{BLANK}} of bottled water onto the truck, and it never drops a single bottle.",
    "cn": "機器人把每一個裝著瓶裝水的棧板抬上卡車,而且它從不掉落任何一瓶。"
  },
  {
    "word": "logistics",
    "pos": "n.",
    "cn_def": "物流",
    "en_def": "organising how goods are stored and moved",
    "sentence": "My cousin works in {{BLANK}} for an online shop, and she says robots now pack most of the orders.",
    "cn": "我表姊在一家網路商店從事物流工作,她說現在大部分的訂單都是由機器人包裝的。"
  },
  {
    "word": "supply chain",
    "pos": "n.phr.",
    "cn_def": "供應鏈",
    "en_def": "all the steps from making a product to selling it",
    "sentence": "When the chip factory closed, the whole {{BLANK}} slowed down, so many shops had no new phones to sell.",
    "cn": "當晶片工廠關閉時,整個供應鏈都變慢了,所以許多商店沒有新手機可以賣。"
  },
  {
    "word": "parcel",
    "pos": "n.",
    "cn_def": "包裹",
    "en_def": "a package sent by post or delivery",
    "sentence": "A small robot brought the {{BLANK}} to my door, and I picked it up after typing a code on its lid.",
    "cn": "一台小機器人把包裹送到我家門口,我在它的蓋子上輸入密碼後才拿到它。"
  },
  {
    "word": "dispatch",
    "pos": "v.",
    "cn_def": "派送;發送",
    "en_def": "to send something or someone somewhere",
    "sentence": "The system can {{BLANK}} a delivery robot within minutes, so customers often receive their lunch while it is still hot.",
    "cn": "這個系統能在幾分鐘內派出一台送貨機器人,所以顧客常常在午餐還熱的時候就收到。"
  },
  {
    "word": "courier",
    "pos": "n.",
    "cn_def": "快遞員;快遞公司",
    "en_def": "a person or company that delivers packages",
    "sentence": "The {{BLANK}} usually delivers our parcels by motorbike, but last week a drone dropped one in our garden.",
    "cn": "快遞員通常騎機車送我們的包裹,但上星期一架無人機把一個包裹丟在我們的花園裡。"
  },
  {
    "word": "loading dock",
    "pos": "n.phr.",
    "cn_def": "裝卸區;卸貨平台",
    "en_def": "the place where trucks are filled or emptied",
    "sentence": "Robots carry the boxes to the {{BLANK}}, and then the drivers check them before the trucks leave.",
    "cn": "機器人把箱子搬到裝卸區,然後司機在卡車出發前檢查它們。"
  },
  {
    "word": "shelving",
    "pos": "n.",
    "cn_def": "貨架;架子",
    "en_def": "a set of shelves for storing things",
    "sentence": "The warehouse has tall metal {{BLANK}}, and small robots climb up it to bring down the boxes people order.",
    "cn": "倉庫裡有高大的金屬貨架,小機器人會爬上去把人們訂購的箱子拿下來。"
  },
  {
    "word": "barcode",
    "pos": "n.",
    "cn_def": "條碼",
    "en_def": "a pattern of lines that a machine can read",
    "sentence": "Each box has a {{BLANK}} on its side, so the robot knows exactly where to take it in the building.",
    "cn": "每個箱子側面都有一個條碼,所以機器人確切知道要把它送到大樓的哪裡。"
  },
  {
    "word": "scanner",
    "pos": "n.",
    "cn_def": "掃描器",
    "en_def": "a machine that reads codes or makes pictures of things",
    "sentence": "The {{BLANK}} at the gate reads every package, and it beeps loudly if a box goes to the wrong area.",
    "cn": "門口的掃描器會讀取每個包裹,如果有箱子送錯區域,它就會大聲嗶嗶叫。"
  },
  {
    "word": "throughput",
    "pos": "n.",
    "cn_def": "產能;處理量",
    "en_def": "the amount of work done in a period of time",
    "sentence": "After the robots arrived, the factory's {{BLANK}} doubled, but the managers still needed people to solve problems.",
    "cn": "機器人到來之後,工廠的產能翻倍了,但經理們仍然需要人來解決問題。"
  },
  {
    "word": "weld",
    "pos": "v.",
    "cn_def": "焊接",
    "en_def": "to join metal parts by melting them together",
    "sentence": "Robots can {{BLANK}} car parts faster than people, and they do not need to breathe the dangerous smoke.",
    "cn": "機器人能比人更快地焊接汽車零件,而且它們不需要吸入危險的煙霧。"
  },
  {
    "word": "welder",
    "pos": "n.",
    "cn_def": "焊接工;焊接機",
    "en_def": "a person or machine that joins metal by heating it",
    "sentence": "My uncle was a {{BLANK}} for twenty years, but now he trains young workers to use robot welding machines.",
    "cn": "我叔叔當了二十年的焊工,但現在他訓練年輕工人使用焊接機器人。"
  },
  {
    "word": "quality control",
    "pos": "n.phr.",
    "cn_def": "品質管制;品管",
    "en_def": "checking that products are made correctly",
    "sentence": "Cameras now help with {{BLANK}}, because they can spot tiny scratches that tired workers might miss.",
    "cn": "攝影機現在協助品質管制,因為它們能發現疲倦的工人可能漏看的細小刮痕。"
  },
  {
    "word": "defect",
    "pos": "n.",
    "cn_def": "瑕疵;缺陷",
    "en_def": "a fault or mistake in something that was made",
    "sentence": "The camera found a small {{BLANK}} in the phone screen, so the robot removed it from the line immediately.",
    "cn": "攝影機在手機螢幕上發現一個小瑕疵,所以機器人立刻把它從生產線上移除。"
  },
  {
    "word": "defective",
    "pos": "adj.",
    "cn_def": "有瑕疵的;故障的",
    "en_def": "not made correctly; not working properly",
    "sentence": "The company called back thousands of {{BLANK}} toys, because a loose part could hurt young children.",
    "cn": "公司召回了數千個有瑕疵的玩具,因為一個鬆脫的零件可能會傷到幼童。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修;保養",
    "en_def": "the work of keeping machines in good condition",
    "sentence": "Robots do not get tired, but they need regular {{BLANK}}, so the factory stops them every Sunday for checks.",
    "cn": "機器人不會累,但它們需要定期保養,所以工廠每個星期天讓它們停機檢查。"
  },
  {
    "word": "repetitive",
    "pos": "adj.",
    "cn_def": "重複的",
    "en_def": "doing the same thing again and again",
    "sentence": "Robots are good at {{BLANK}} jobs like packing boxes, so workers can spend more time on creative tasks.",
    "cn": "機器人擅長像包裝箱子這樣重複的工作,所以工人能花更多時間在有創意的任務上。"
  },
  {
    "word": "heavy lifting",
    "pos": "n.phr.",
    "cn_def": "搬運重物;粗重工作",
    "en_def": "the work of picking up and moving heavy things",
    "sentence": "The robots do the {{BLANK}} in the warehouse, while staff focus on checking orders and helping customers.",
    "cn": "機器人在倉庫裡負責搬運重物,而員工則專注於檢查訂單和協助顧客。"
  },
  {
    "word": "operator",
    "pos": "n.",
    "cn_def": "操作員",
    "en_def": "a person who controls a machine",
    "sentence": "The crane {{BLANK}} watched the screen carefully, because one small mistake could drop the steel on the workers below.",
    "cn": "起重機操作員仔細地看著螢幕,因為一個小錯誤就可能把鋼材掉到下面的工人身上。"
  },
  {
    "word": "machinery",
    "pos": "n.",
    "cn_def": "機械;機器(總稱)",
    "en_def": "machines in general, especially large ones",
    "sentence": "Farmers in our village bought new {{BLANK}} last year, so they can harvest rice with far fewer helpers.",
    "cn": "我們村子的農夫去年買了新機械,所以他們能用少得多的人手收割稻米。"
  },
  {
    "word": "cobot",
    "pos": "n.",
    "cn_def": "協作機器人",
    "en_def": "a robot designed to work safely next to people",
    "sentence": "The {{BLANK}} works right beside the staff, and it stops at once if someone's hand comes too close.",
    "cn": "這台協作機器人就在員工旁邊工作,如果有人的手靠得太近,它會立刻停下來。"
  },
  {
    "word": "workstation",
    "pos": "n.",
    "cn_def": "工作站;工作台",
    "en_def": "the place where a worker or machine does a job",
    "sentence": "Each {{BLANK}} on the line has one person and one robot, and they pass parts to each other all day.",
    "cn": "生產線上的每個工作站都有一個人和一台機器人,他們整天互相傳遞零件。"
  },
  {
    "word": "crane",
    "pos": "n.",
    "cn_def": "起重機;吊車",
    "en_def": "a tall machine for lifting very heavy objects",
    "sentence": "A huge {{BLANK}} lifted the containers off the ship, and it was controlled by a person in an office far away.",
    "cn": "一台巨大的起重機把貨櫃從船上吊起來,而它是由遠處辦公室裡的一個人控制的。"
  }
];

const MCQS = [
  {
    "q": "Robots now do most of the welding on the car _____, while people check the finished cars for problems.",
    "options": [
      "uncanny valley",
      "assembly line",
      "second nature",
      "slow motion"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Boxes move along the _____ all day, and a robot arm picks out any box with the wrong label.",
    "options": [
      "conveyor belt",
      "voice command",
      "public opinion",
      "killer robot"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The new battery _____ near the city uses hundreds of robots, but it still employs about two thousand workers.",
    "options": [
      "ingredient",
      "stadium",
      "plant",
      "umpire"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "_____ made cars cheaper in the twentieth century, and robots are making many products cheaper today.",
    "options": [
      "slow motion",
      "killer robot",
      "robot vacuum",
      "mass production"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Most _____ robots work behind safety fences, because their heavy arms move very fast and could injure people.",
    "options": [
      "delicate",
      "industrial",
      "offside",
      "applicable"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The driverless _____ carries boxes around the warehouse at night, so the shelves are full when staff arrive.",
    "options": [
      "foothold",
      "array",
      "gear",
      "forklift"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The robot lifts each _____ of bottled water onto the truck, and it never drops a single bottle.",
    "options": [
      "pallet",
      "axle",
      "joint",
      "vicinity"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "My cousin works in _____ for an online shop, and she says robots now pack most of the orders.",
    "options": [
      "utility",
      "chore",
      "logistics",
      "titanium"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "When the chip factory closed, the whole _____ slowed down, so many shops had no new phones to sell.",
    "options": [
      "supply chain",
      "science fiction",
      "robot rights",
      "killer robot"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "A small robot brought the _____ to my door, and I picked it up after typing a code on its lid.",
    "options": [
      "array",
      "parcel",
      "coach",
      "deadlock"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The system can _____ a delivery robot within minutes, so customers often receive their lunch while it is still hot.",
    "options": [
      "overtake",
      "devalue",
      "discredit",
      "dispatch"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The _____ usually delivers our parcels by motorbike, but last week a drone dropped one in our garden.",
    "options": [
      "surgeon",
      "replay",
      "courier",
      "contract"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Robots carry the boxes to the _____, and then the drivers check them before the trucks leave.",
    "options": [
      "loading dock",
      "second nature",
      "economies of scale",
      "voice command"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The warehouse has tall metal _____, and small robots climb up it to bring down the boxes people order.",
    "options": [
      "actuator",
      "workplace",
      "mechatronics",
      "shelving"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Each box has a _____ on its side, so the robot knows exactly where to take it in the building.",
    "options": [
      "payroll",
      "hurdle",
      "barcode",
      "foul"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The _____ at the gate reads every package, and it beeps loudly if a box goes to the wrong area.",
    "options": [
      "environment",
      "scanner",
      "batter",
      "umpire"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "After the robots arrived, the factory's _____ doubled, but the managers still needed people to solve problems.",
    "options": [
      "cyborg",
      "pension",
      "headcount",
      "throughput"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Robots can _____ car parts faster than people, and they do not need to breathe the dangerous smoke.",
    "options": [
      "discontinue",
      "troubleshoot",
      "weld",
      "procure"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "My uncle was a _____ for twenty years, but now he trains young workers to use robot welding machines.",
    "options": [
      "welder",
      "monopoly",
      "verdict",
      "standpoint"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Cameras now help with _____, because they can spot tiny scratches that tired workers might miss.",
    "options": [
      "early adopter",
      "quality control",
      "robot vacuum",
      "robot rights"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The camera found a small _____ in the phone screen, so the robot removed it from the line immediately.",
    "options": [
      "defect",
      "lawnmower",
      "dishwasher",
      "axle"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The company called back thousands of _____ toys, because a loose part could hurt young children.",
    "options": [
      "cost-saving",
      "wholesale",
      "defective",
      "economic"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Robots do not get tired, but they need regular _____, so the factory stops them every Sunday for checks.",
    "options": [
      "analytics",
      "maintenance",
      "gear",
      "viewpoint"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Robots are good at _____ jobs like packing boxes, so workers can spend more time on creative tasks.",
    "options": [
      "lengthy",
      "modular",
      "mobile",
      "repetitive"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The robots do the _____ in the warehouse, while staff focus on checking orders and helping customers.",
    "options": [
      "strike zone",
      "heavy lifting",
      "voice command",
      "second nature"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The crane _____ watched the screen carefully, because one small mistake could drop the steel on the workers below.",
    "options": [
      "championship",
      "workplace",
      "deadlock",
      "operator"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Farmers in our village bought new _____ last year, so they can harvest rice with far fewer helpers.",
    "options": [
      "rival",
      "wiring",
      "machinery",
      "acclaim"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The _____ works right beside the staff, and it stops at once if someone's hand comes too close.",
    "options": [
      "cobot",
      "realm",
      "payload",
      "coach"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Each _____ on the line has one person and one robot, and they pass parts to each other all day.",
    "options": [
      "lens",
      "workstation",
      "hinge",
      "venture"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "A huge _____ lifted the containers off the ship, and it was controlled by a person in an office far away.",
    "options": [
      "league",
      "umpire",
      "microcontroller",
      "crane"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "assembly line": {
    "pos": "n.phr.",
    "en_def": "a row of workers or machines that build products step by step",
    "cn_def": "裝配線;生產線"
  },
  "conveyor belt": {
    "pos": "n.phr.",
    "en_def": "a moving belt that carries things from place to place",
    "cn_def": "輸送帶"
  },
  "plant": {
    "pos": "n.",
    "en_def": "a large factory where things are made",
    "cn_def": "工廠;廠房"
  },
  "mass production": {
    "pos": "n.phr.",
    "en_def": "making very large numbers of the same product",
    "cn_def": "大量生產"
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "connected with factories and making goods",
    "cn_def": "工業的"
  },
  "forklift": {
    "pos": "n.",
    "en_def": "a small vehicle with two metal arms for lifting goods",
    "cn_def": "堆高機"
  },
  "pallet": {
    "pos": "n.",
    "en_def": "a flat wooden frame that goods are stacked on",
    "cn_def": "棧板;貨板"
  },
  "logistics": {
    "pos": "n.",
    "en_def": "organising how goods are stored and moved",
    "cn_def": "物流"
  },
  "supply chain": {
    "pos": "n.phr.",
    "en_def": "all the steps from making a product to selling it",
    "cn_def": "供應鏈"
  },
  "parcel": {
    "pos": "n.",
    "en_def": "a package sent by post or delivery",
    "cn_def": "包裹"
  },
  "dispatch": {
    "pos": "v.",
    "en_def": "to send something or someone somewhere",
    "cn_def": "派送;發送"
  },
  "courier": {
    "pos": "n.",
    "en_def": "a person or company that delivers packages",
    "cn_def": "快遞員;快遞公司"
  },
  "loading dock": {
    "pos": "n.phr.",
    "en_def": "the place where trucks are filled or emptied",
    "cn_def": "裝卸區;卸貨平台"
  },
  "shelving": {
    "pos": "n.",
    "en_def": "a set of shelves for storing things",
    "cn_def": "貨架;架子"
  },
  "barcode": {
    "pos": "n.",
    "en_def": "a pattern of lines that a machine can read",
    "cn_def": "條碼"
  },
  "scanner": {
    "pos": "n.",
    "en_def": "a machine that reads codes or makes pictures of things",
    "cn_def": "掃描器"
  },
  "throughput": {
    "pos": "n.",
    "en_def": "the amount of work done in a period of time",
    "cn_def": "產能;處理量"
  },
  "weld": {
    "pos": "v.",
    "en_def": "to join metal parts by melting them together",
    "cn_def": "焊接"
  },
  "welder": {
    "pos": "n.",
    "en_def": "a person or machine that joins metal by heating it",
    "cn_def": "焊接工;焊接機"
  },
  "quality control": {
    "pos": "n.phr.",
    "en_def": "checking that products are made correctly",
    "cn_def": "品質管制;品管"
  },
  "defect": {
    "pos": "n.",
    "en_def": "a fault or mistake in something that was made",
    "cn_def": "瑕疵;缺陷"
  },
  "defective": {
    "pos": "adj.",
    "en_def": "not made correctly; not working properly",
    "cn_def": "有瑕疵的;故障的"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping machines in good condition",
    "cn_def": "維修;保養"
  },
  "repetitive": {
    "pos": "adj.",
    "en_def": "doing the same thing again and again",
    "cn_def": "重複的"
  },
  "heavy lifting": {
    "pos": "n.phr.",
    "en_def": "the work of picking up and moving heavy things",
    "cn_def": "搬運重物;粗重工作"
  },
  "operator": {
    "pos": "n.",
    "en_def": "a person who controls a machine",
    "cn_def": "操作員"
  },
  "machinery": {
    "pos": "n.",
    "en_def": "machines in general, especially large ones",
    "cn_def": "機械;機器(總稱)"
  },
  "cobot": {
    "pos": "n.",
    "en_def": "a robot designed to work safely next to people",
    "cn_def": "協作機器人"
  },
  "workstation": {
    "pos": "n.",
    "en_def": "the place where a worker or machine does a job",
    "cn_def": "工作站;工作台"
  },
  "crane": {
    "pos": "n.",
    "en_def": "a tall machine for lifting very heavy objects",
    "cn_def": "起重機;吊車"
  },
  "uncanny valley": {
    "pos": "n.phr.",
    "en_def": "the uneasy feeling when a robot looks almost but not quite human",
    "cn_def": "恐怖谷(效應)"
  },
  "second nature": {
    "pos": "n.phr.",
    "en_def": "something you do easily without thinking",
    "cn_def": "第二天性;習以為常"
  },
  "slow motion": {
    "pos": "n.phr.",
    "en_def": "showing a video more slowly than real speed",
    "cn_def": "慢動作"
  },
  "voice command": {
    "pos": "n.phr.",
    "en_def": "a spoken order that a machine follows",
    "cn_def": "語音指令"
  },
  "public opinion": {
    "pos": "n.phr.",
    "en_def": "what most people in a society think",
    "cn_def": "輿論;民意"
  },
  "killer robot": {
    "pos": "n.phr.",
    "en_def": "a machine that can choose and attack targets by itself",
    "cn_def": "殺手機器人"
  },
  "ingredient": {
    "pos": "n.",
    "en_def": "one of the things needed to make something successful",
    "cn_def": "要素;成分"
  },
  "stadium": {
    "pos": "n.",
    "en_def": "a large sports ground with seats around it",
    "cn_def": "體育場"
  },
  "umpire": {
    "pos": "n.",
    "en_def": "an official who makes decisions in tennis, cricket or baseball",
    "cn_def": "裁判(網球、棒球等)"
  },
  "robot vacuum": {
    "pos": "n.phr.",
    "en_def": "a small machine that cleans floors by itself",
    "cn_def": "掃地機器人"
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "easily broken or damaged; needing care",
    "cn_def": "脆弱的;精細的"
  },
  "offside": {
    "pos": "adj.",
    "en_def": "in a position on the field that breaks the rules",
    "cn_def": "越位的"
  },
  "applicable": {
    "pos": "adj.",
    "en_def": "affecting or relevant to a person or situation",
    "cn_def": "適用的"
  },
  "foothold": {
    "pos": "n.",
    "en_def": "a secure position from which to make progress",
    "cn_def": "立足點;據點"
  },
  "array": {
    "pos": "n.",
    "en_def": "a large group or range of things",
    "cn_def": "一系列;大量"
  },
  "gear": {
    "pos": "n.",
    "en_def": "a wheel with teeth that turns other wheels",
    "cn_def": "齒輪"
  },
  "axle": {
    "pos": "n.",
    "en_def": "a rod that connects and turns two wheels",
    "cn_def": "車軸;輪軸"
  },
  "joint": {
    "pos": "n.",
    "en_def": "a place where two parts connect and can bend",
    "cn_def": "關節;接頭"
  },
  "vicinity": {
    "pos": "n.",
    "en_def": "the area near a particular place",
    "cn_def": "附近;鄰近地區"
  },
  "utility": {
    "pos": "n.",
    "en_def": "the quality of being useful",
    "cn_def": "效用;實用性"
  },
  "chore": {
    "pos": "n.",
    "en_def": "a small, regular job in the house",
    "cn_def": "家事;雜務"
  },
  "titanium": {
    "pos": "n.",
    "en_def": "a strong, light, silver-coloured metal",
    "cn_def": "鈦"
  },
  "science fiction": {
    "pos": "n.phr.",
    "en_def": "stories about imagined future science and technology",
    "cn_def": "科幻小說;科幻作品"
  },
  "robot rights": {
    "pos": "n.phr.",
    "en_def": "the idea that advanced robots should have legal protections",
    "cn_def": "機器人權利"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains a sports team or player",
    "cn_def": "教練"
  },
  "deadlock": {
    "pos": "n.",
    "en_def": "a situation where no progress can be made because people disagree",
    "cn_def": "僵局"
  },
  "overtake": {
    "pos": "v.",
    "en_def": "to become greater or more successful than something",
    "cn_def": "超越;趕上"
  },
  "devalue": {
    "pos": "v.",
    "en_def": "to make something seem less important or worth less",
    "cn_def": "貶低;使貶值"
  },
  "discredit": {
    "pos": "v.",
    "en_def": "to make people stop trusting someone or something",
    "cn_def": "使不可信;敗壞名聲"
  },
  "surgeon": {
    "pos": "n.",
    "en_def": "a doctor who performs operations",
    "cn_def": "外科醫生"
  },
  "replay": {
    "pos": "n.",
    "en_def": "a recording of part of a game shown again",
    "cn_def": "重播"
  },
  "contract": {
    "pos": "n.",
    "en_def": "a written legal agreement between people or companies",
    "cn_def": "合約"
  },
  "economies of scale": {
    "pos": "n.phr.",
    "en_def": "lower costs per item when you produce a lot",
    "cn_def": "規模經濟"
  },
  "actuator": {
    "pos": "n.",
    "en_def": "a part that makes a machine move",
    "cn_def": "致動器;驅動器"
  },
  "workplace": {
    "pos": "n.",
    "en_def": "the place where people do their jobs",
    "cn_def": "工作場所;職場"
  },
  "mechatronics": {
    "pos": "n.",
    "en_def": "the study that combines machines, electronics and computing",
    "cn_def": "機電整合"
  },
  "payroll": {
    "pos": "n.",
    "en_def": "the list of workers a company pays, or the money paid",
    "cn_def": "薪資名冊;薪資總額"
  },
  "hurdle": {
    "pos": "n.",
    "en_def": "a problem you must solve before you can make progress",
    "cn_def": "障礙;難關"
  },
  "foul": {
    "pos": "n.",
    "en_def": "an action that breaks the rules of a game",
    "cn_def": "犯規"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the conditions and surroundings where something works",
    "cn_def": "環境"
  },
  "batter": {
    "pos": "n.",
    "en_def": "the baseball player who tries to hit the ball",
    "cn_def": "打者"
  },
  "cyborg": {
    "pos": "n.",
    "en_def": "a person whose body has machine parts added",
    "cn_def": "半機械人;生化人"
  },
  "pension": {
    "pos": "n.",
    "en_def": "money paid regularly to people after they stop working",
    "cn_def": "退休金;養老金"
  },
  "headcount": {
    "pos": "n.",
    "en_def": "the total number of people employed",
    "cn_def": "員工人數"
  },
  "discontinue": {
    "pos": "v.",
    "en_def": "to stop making or offering something",
    "cn_def": "停產;停止"
  },
  "troubleshoot": {
    "pos": "v.",
    "en_def": "to find and fix problems in a machine or system",
    "cn_def": "排除故障;檢修"
  },
  "procure": {
    "pos": "v.",
    "en_def": "to get something, often with effort",
    "cn_def": "取得;採購"
  },
  "monopoly": {
    "pos": "n.",
    "en_def": "complete control of a market by one company",
    "cn_def": "壟斷;獨占"
  },
  "verdict": {
    "pos": "n.",
    "en_def": "an opinion or decision after testing or judging something",
    "cn_def": "評價;裁決"
  },
  "standpoint": {
    "pos": "n.",
    "en_def": "a way of looking at or judging a situation",
    "cn_def": "立場;觀點"
  },
  "early adopter": {
    "pos": "n.phr.",
    "en_def": "a person who uses new technology as soon as it appears",
    "cn_def": "早期使用者;嘗鮮者"
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
  "cost-saving": {
    "pos": "adj.",
    "en_def": "helping to spend less money",
    "cn_def": "節省成本的"
  },
  "wholesale": {
    "pos": "adj.",
    "en_def": "happening on a very large scale, affecting many things",
    "cn_def": "全面的;大規模的"
  },
  "economic": {
    "pos": "adj.",
    "en_def": "connected with trade, industry and money",
    "cn_def": "經濟的"
  },
  "analytics": {
    "pos": "n.",
    "en_def": "the study of data to find useful patterns",
    "cn_def": "數據分析"
  },
  "viewpoint": {
    "pos": "n.",
    "en_def": "a particular way of thinking about something",
    "cn_def": "觀點;看法"
  },
  "lengthy": {
    "pos": "adj.",
    "en_def": "continuing for a long time",
    "cn_def": "冗長的;漫長的"
  },
  "modular": {
    "pos": "adj.",
    "en_def": "made of separate parts that can be joined or replaced",
    "cn_def": "模組化的"
  },
  "mobile": {
    "pos": "adj.",
    "en_def": "able to move easily from place to place",
    "cn_def": "可移動的"
  },
  "strike zone": {
    "pos": "n.phr.",
    "en_def": "the area over home plate where a pitch counts as a strike",
    "cn_def": "好球帶"
  },
  "championship": {
    "pos": "n.",
    "en_def": "a competition to find the best player or team",
    "cn_def": "冠軍賽;錦標賽"
  },
  "rival": {
    "pos": "n.",
    "en_def": "a person or company competing with another",
    "cn_def": "競爭者;對手"
  },
  "wiring": {
    "pos": "n.",
    "en_def": "the system of wires inside a machine",
    "cn_def": "線路;配線"
  },
  "acclaim": {
    "pos": "n.",
    "en_def": "public praise for something",
    "cn_def": "讚譽;喝采"
  },
  "realm": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範疇"
  },
  "payload": {
    "pos": "n.",
    "en_def": "the load that a vehicle or drone carries",
    "cn_def": "酬載;載重"
  },
  "lens": {
    "pos": "n.",
    "en_def": "curved glass that helps a camera see clearly",
    "cn_def": "鏡頭;透鏡"
  },
  "hinge": {
    "pos": "n.",
    "en_def": "a metal part that lets a door or lid swing",
    "cn_def": "鉸鏈"
  },
  "venture": {
    "pos": "n.",
    "en_def": "a new business activity that involves risk",
    "cn_def": "(冒險)事業;新創企業"
  },
  "league": {
    "pos": "n.",
    "en_def": "a group of teams that play against each other",
    "cn_def": "聯盟"
  },
  "microcontroller": {
    "pos": "n.",
    "en_def": "a very small computer that controls a device",
    "cn_def": "微控制器"
  }
};

const EXTRA_GLOSSES = {};
