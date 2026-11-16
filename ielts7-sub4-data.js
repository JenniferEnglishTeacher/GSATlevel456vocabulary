// Topic 7 Subunit 4 Quiz Data: Control & Programming 控制與程式設計
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S04 - Control & Programming 控制與程式設計",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "reprogram",
    "pos": "v.",
    "cn_def": "重新設定程式",
    "en_def": "to give a machine new instructions",
    "sentence": "The engineers had to {{BLANK}} the robot after the factory changed its products, but the job took only one day.",
    "cn": "工廠更換產品後,工程師必須重新設定機器人的程式,但這份工作只花了一天。"
  },
  {
    "word": "operating system",
    "pos": "n.phr.",
    "cn_def": "作業系統",
    "en_def": "the main software that runs a computer or robot",
    "sentence": "The robot's {{BLANK}} needed an update, so it restarted by itself in the middle of the night.",
    "cn": "機器人的作業系統需要更新,所以它在半夜自己重新啟動了。"
  },
  {
    "word": "remote-controlled",
    "pos": "adj.",
    "cn_def": "遙控的",
    "en_def": "controlled from a distance using radio signals",
    "sentence": "My little brother got a {{BLANK}} car for his birthday, and he drove it around the kitchen all afternoon.",
    "cn": "我弟弟生日時得到一台遙控車,他整個下午都在廚房裡開著它到處跑。"
  },
  {
    "word": "joystick",
    "pos": "n.",
    "cn_def": "搖桿;操縱桿",
    "en_def": "a stick you move to control a machine or game",
    "sentence": "The pilot moved the {{BLANK}} gently to the left, and the underwater robot turned towards the shipwreck.",
    "cn": "操作員輕輕地把搖桿往左推,水下機器人就轉向了沉船。"
  },
  {
    "word": "touchscreen",
    "pos": "n.",
    "cn_def": "觸控螢幕",
    "en_def": "a screen you control by touching it",
    "sentence": "Workers tell the robot what to do on a large {{BLANK}}, so they do not need to learn any computer language.",
    "cn": "工人在一個大型觸控螢幕上告訴機器人要做什麼,所以他們不需要學任何電腦語言。"
  },
  {
    "word": "real-time",
    "pos": "adj.",
    "cn_def": "即時的",
    "en_def": "happening immediately, with no delay",
    "sentence": "The drone sends {{BLANK}} video to the firefighters, so they can see where people are trapped inside the building.",
    "cn": "無人機把即時影像傳給消防員,所以他們能看到人們被困在建築物的哪裡。"
  },
  {
    "word": "computer vision",
    "pos": "n.phr.",
    "cn_def": "電腦視覺",
    "en_def": "technology that lets computers understand images",
    "sentence": "Thanks to {{BLANK}}, the robot can tell ripe tomatoes from green ones, so it picks only the ready fruit.",
    "cn": "多虧了電腦視覺,機器人能分辨成熟和未熟的番茄,所以它只採摘成熟的果實。"
  },
  {
    "word": "deep learning",
    "pos": "n.phr.",
    "cn_def": "深度學習",
    "en_def": "a kind of AI that learns from huge amounts of examples",
    "sentence": "The robot improved its walking through {{BLANK}}, and after thousands of tries it stopped falling over.",
    "cn": "這台機器人透過深度學習改善了走路的能力,在嘗試數千次之後它不再跌倒了。"
  },
  {
    "word": "self-learning",
    "pos": "adj.",
    "cn_def": "自我學習的",
    "en_def": "able to improve by itself without new instructions",
    "sentence": "The {{BLANK}} vacuum remembers where the furniture is, so it cleans our flat faster every week.",
    "cn": "這台能自我學習的吸塵器記得家具的位置,所以它每週打掃我們公寓的速度都更快。"
  },
  {
    "word": "calibrate",
    "pos": "v.",
    "cn_def": "校準;校正",
    "en_def": "to adjust a machine so that it measures correctly",
    "sentence": "We must {{BLANK}} the robot's camera every month, or it starts to put the parts in slightly the wrong place.",
    "cn": "我們每個月都必須校準機器人的攝影機,否則它會開始把零件放在稍微錯誤的位置。"
  },
  {
    "word": "troubleshoot",
    "pos": "v.",
    "cn_def": "排除故障;檢修",
    "en_def": "to find and fix problems in a machine or system",
    "sentence": "When the robot stopped moving, the technician tried to {{BLANK}} the problem, but she finally called the company for help.",
    "cn": "當機器人停止移動時,技術人員試著排除故障,但她最後還是打電話向公司求助。"
  },
  {
    "word": "debug",
    "pos": "v.",
    "cn_def": "除錯",
    "en_def": "to find and remove mistakes in computer code",
    "sentence": "Our team spent all night trying to {{BLANK}} the program, because the robot kept turning left instead of right.",
    "cn": "我們的隊伍整晚都在試著替程式除錯,因為機器人一直向左轉而不是向右轉。"
  },
  {
    "word": "reboot",
    "pos": "v.",
    "cn_def": "重新開機",
    "en_def": "to turn a computer or machine off and on again",
    "sentence": "If the robot freezes, just {{BLANK}} it by holding the red button, and it usually works again in a minute.",
    "cn": "如果機器人當機,只要按住紅色按鈕將它重新開機,通常一分鐘後就能恢復運作。"
  },
  {
    "word": "override",
    "pos": "v.",
    "cn_def": "手動接管;推翻(決定)",
    "en_def": "to take control and cancel what a machine is doing",
    "sentence": "The driver can {{BLANK}} the self-driving system at any time, so she grabbed the wheel when a child ran into the road.",
    "cn": "駕駛隨時可以手動接管自動駕駛系統,所以當一個孩子衝到馬路上時她立刻抓住方向盤。"
  },
  {
    "word": "emergency stop",
    "pos": "n.phr.",
    "cn_def": "緊急停止(按鈕)",
    "en_def": "a button that turns a machine off immediately",
    "sentence": "Every robot in the factory has a big red {{BLANK}} button, and workers practise using it once a month.",
    "cn": "工廠裡的每台機器人都有一個紅色大緊急停止按鈕,工人每個月練習使用一次。"
  },
  {
    "word": "fail-safe",
    "pos": "adj.",
    "cn_def": "故障安全的;萬無一失的",
    "en_def": "designed to stay safe if something goes wrong",
    "sentence": "The lift has a {{BLANK}} brake, so it will not fall even if the power suddenly goes off.",
    "cn": "這部電梯有故障安全煞車,所以即使突然停電,它也不會掉下去。"
  },
  {
    "word": "crash",
    "pos": "v.",
    "cn_def": "當機;(電腦)崩潰",
    "en_def": "(of a computer) to stop working suddenly",
    "sentence": "The computer system {{BLANK}} during the busy holiday season, so the robots stopped and hundreds of orders were late.",
    "cn": "電腦系統在忙碌的假期期間當機了,所以機器人停了下來,數百筆訂單都延誤了。"
  },
  {
    "word": "freeze",
    "pos": "v.",
    "cn_def": "當住;凍結",
    "en_def": "(of a screen or machine) to stop moving or responding",
    "sentence": "The robot's screen {{BLANK}} in the middle of the demonstration, so the presenter laughed and told a joke instead.",
    "cn": "示範到一半時機器人的螢幕當住了,所以主持人笑了笑並改講一個笑話。",
    "answer": "froze",
    "alts": [
      "freeze",
      "frozen"
    ]
  },
  {
    "word": "wireless",
    "pos": "adj.",
    "cn_def": "無線的",
    "en_def": "working without wires, using radio signals",
    "sentence": "The robots talk to each other through a {{BLANK}} network, so there are no cables lying on the factory floor.",
    "cn": "機器人透過無線網路互相溝通,所以工廠地板上沒有電線散落。"
  },
  {
    "word": "tablet",
    "pos": "n.",
    "cn_def": "平板電腦",
    "en_def": "a small flat computer with a touchscreen",
    "sentence": "The farmer checks his robot tractors on a {{BLANK}}, so he can watch them while he drinks his morning tea.",
    "cn": "這位農夫用平板電腦查看他的機器人拖拉機,所以他能一邊喝早茶一邊看著它們。"
  },
  {
    "word": "engineer",
    "pos": "n.",
    "cn_def": "工程師",
    "en_def": "a person who designs and builds machines",
    "sentence": "My sister wants to become an {{BLANK}} who designs robots for hospitals, so she studies maths and physics very hard.",
    "cn": "我姊姊想成為設計醫院用機器人的工程師,所以她非常努力地學習數學和物理。"
  },
  {
    "word": "mechanical",
    "pos": "adj.",
    "cn_def": "機械的",
    "en_def": "operated by machinery; connected with machines",
    "sentence": "The old robot made loud {{BLANK}} noises when it moved, but the new model is almost completely silent.",
    "cn": "舊型機器人移動時會發出很大的機械噪音,但新型號幾乎完全安靜。"
  },
  {
    "word": "electronic",
    "pos": "adj.",
    "cn_def": "電子的",
    "en_def": "using small electrical parts like chips",
    "sentence": "Old {{BLANK}} devices should be recycled properly, because they contain metals that can harm the environment.",
    "cn": "舊的電子裝置應該妥善回收,因為它們含有會危害環境的金屬。"
  },
  {
    "word": "technician",
    "pos": "n.",
    "cn_def": "技術人員;技師",
    "en_def": "a skilled worker who repairs or looks after machines",
    "sentence": "A {{BLANK}} visits the hotel every week to check the robots, and she also teaches the staff how to fix small problems.",
    "cn": "一位技術人員每週到飯店檢查機器人,她也教員工如何修理小問題。"
  },
  {
    "word": "mechatronics",
    "pos": "n.",
    "cn_def": "機電整合",
    "en_def": "the study that combines machines, electronics and computing",
    "sentence": "My cousin is studying {{BLANK}} at university, and he hopes to build farming robots after he graduates.",
    "cn": "我表哥在大學就讀機電整合,他希望畢業後能製造農業機器人。"
  },
  {
    "word": "GPS",
    "pos": "n.",
    "cn_def": "全球定位系統",
    "en_def": "a system that uses satellites to show your location",
    "sentence": "The lawnmower uses {{BLANK}} to stay inside the garden, so it never wanders onto the road.",
    "cn": "這台割草機使用全球定位系統來保持在花園範圍內,所以它從不會跑到馬路上。"
  },
  {
    "word": "mapping",
    "pos": "n.",
    "cn_def": "製圖;建立地圖",
    "en_def": "making a map or plan of an area",
    "sentence": "The robot vacuum starts by {{BLANK}} every room, and then it plans the fastest way to clean the house.",
    "cn": "掃地機器人一開始會替每個房間建立地圖,然後規劃打掃房子最快的路線。"
  },
  {
    "word": "autopilot",
    "pos": "n.",
    "cn_def": "自動駕駛(系統)",
    "en_def": "a system that flies a plane or drives a car automatically",
    "sentence": "The plane flew on {{BLANK}} for most of the journey, but the pilots landed it themselves because of strong winds.",
    "cn": "這架飛機大部分航程都以自動駕駛飛行,但因為強風,飛行員親自讓它降落。"
  }
];

const MCQS = [
  {
    "q": "The engineers had to _____ the robot after the factory changed its products, but the job took only one day.",
    "options": [
      "reprogram",
      "compress",
      "dismantle",
      "saturate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The robot's _____ needed an update, so it restarted by itself in the middle of the night.",
    "options": [
      "job loss",
      "loading dock",
      "operating system",
      "killer robot"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "My little brother got a _____ car for his birthday, and he drove it around the kitchen all afternoon.",
    "options": [
      "technical",
      "practical",
      "unattended",
      "remote-controlled"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The pilot moved the _____ gently to the left, and the underwater robot turned towards the shipwreck.",
    "options": [
      "plant",
      "joystick",
      "cluster",
      "conundrum"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Workers tell the robot what to do on a large _____, so they do not need to learn any computer language.",
    "options": [
      "scoreboard",
      "throughput",
      "lidar",
      "touchscreen"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The drone sends _____ video to the firefighters, so they can see where people are trapped inside the building.",
    "options": [
      "real-time",
      "portable",
      "rogue",
      "sentient"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Thanks to _____, the robot can tell ripe tomatoes from green ones, so it picks only the ready fruit.",
    "options": [
      "killer robot",
      "computer vision",
      "job loss",
      "strike zone"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The robot improved its walking through _____, and after thousands of tries it stopped falling over.",
    "options": [
      "the benefit of the doubt",
      "goal-line technology",
      "deep learning",
      "second nature"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The _____ vacuum remembers where the furniture is, so it cleans our flat faster every week.",
    "options": [
      "repetitive",
      "self-learning",
      "sentient",
      "technical"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "We must _____ the robot's camera every month, or it starts to put the parts in slightly the wrong place.",
    "options": [
      "detach",
      "purchase",
      "calibrate",
      "intercept"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "When the robot stopped moving, the technician tried to _____ the problem, but she finally called the company for help.",
    "options": [
      "troubleshoot",
      "purchase",
      "mount",
      "pioneer"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Our team spent all night trying to _____ the program, because the robot kept turning left instead of right.",
    "options": [
      "mop",
      "dictate",
      "conceal",
      "debug"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "If the robot freezes, just _____ it by holding the red button, and it usually works again in a minute.",
    "options": [
      "reboot",
      "overshadow",
      "mount",
      "weld"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The driver can _____ the self-driving system at any time, so she grabbed the wheel when a child ran into the road.",
    "options": [
      "dismantle",
      "outlast",
      "override",
      "decentralise"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Every robot in the factory has a big red _____ button, and workers practise using it once a month.",
    "options": [
      "a close call",
      "emergency stop",
      "loading dock",
      "quality control"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The lift has a _____ brake, so it will not fall even if the power suddenly goes off.",
    "options": [
      "military",
      "moral",
      "extraordinary",
      "fail-safe"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The computer system _____ during the busy holiday season, so the robots stopped and hundreds of orders were late.",
    "options": [
      "crash",
      "redefine",
      "merge",
      "hire"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The robot's screen _____ in the middle of the demonstration, so the presenter laughed and told a joke instead.",
    "options": [
      "discard",
      "froze",
      "reshape",
      "revamp"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The robots talk to each other through a _____ network, so there are no cables lying on the factory floor.",
    "options": [
      "customary",
      "dire",
      "wireless",
      "skilled"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The farmer checks his robot tractors on a _____, so he can watch them while he drinks his morning tea.",
    "options": [
      "cashier",
      "appliance",
      "chore",
      "tablet"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "My sister wants to become an _____ who designs robots for hospitals, so she studies maths and physics very hard.",
    "options": [
      "array",
      "engineer",
      "colleague",
      "welder"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The old robot made loud _____ noises when it moved, but the new model is almost completely silent.",
    "options": [
      "sentient",
      "lifelike",
      "groundbreaking",
      "mechanical"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Old _____ devices should be recycled properly, because they contain metals that can harm the environment.",
    "options": [
      "cost-saving",
      "physical",
      "electronic",
      "eligible"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "A _____ visits the hotel every week to check the robots, and she also teaches the staff how to fix small problems.",
    "options": [
      "technician",
      "currency",
      "replay",
      "utility"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "My cousin is studying _____ at university, and he hopes to build farming robots after he graduates.",
    "options": [
      "analytics",
      "mechatronics",
      "maintenance",
      "foul"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The lawnmower uses _____ to stay inside the garden, so it never wanders onto the road.",
    "options": [
      "GPS",
      "joint",
      "kiosk",
      "lens"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The robot vacuum starts by _____ every room, and then it plans the fastest way to clean the house.",
    "options": [
      "vehicle",
      "arena",
      "mapping",
      "standpoint"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The plane flew on _____ for most of the journey, but the pilots landed it themselves because of strong winds.",
    "options": [
      "forklift",
      "realm",
      "android",
      "autopilot"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "reprogram": {
    "pos": "v.",
    "en_def": "to give a machine new instructions",
    "cn_def": "重新設定程式"
  },
  "operating system": {
    "pos": "n.phr.",
    "en_def": "the main software that runs a computer or robot",
    "cn_def": "作業系統"
  },
  "remote-controlled": {
    "pos": "adj.",
    "en_def": "controlled from a distance using radio signals",
    "cn_def": "遙控的"
  },
  "joystick": {
    "pos": "n.",
    "en_def": "a stick you move to control a machine or game",
    "cn_def": "搖桿;操縱桿"
  },
  "touchscreen": {
    "pos": "n.",
    "en_def": "a screen you control by touching it",
    "cn_def": "觸控螢幕"
  },
  "real-time": {
    "pos": "adj.",
    "en_def": "happening immediately, with no delay",
    "cn_def": "即時的"
  },
  "computer vision": {
    "pos": "n.phr.",
    "en_def": "technology that lets computers understand images",
    "cn_def": "電腦視覺"
  },
  "deep learning": {
    "pos": "n.phr.",
    "en_def": "a kind of AI that learns from huge amounts of examples",
    "cn_def": "深度學習"
  },
  "self-learning": {
    "pos": "adj.",
    "en_def": "able to improve by itself without new instructions",
    "cn_def": "自我學習的"
  },
  "calibrate": {
    "pos": "v.",
    "en_def": "to adjust a machine so that it measures correctly",
    "cn_def": "校準;校正"
  },
  "troubleshoot": {
    "pos": "v.",
    "en_def": "to find and fix problems in a machine or system",
    "cn_def": "排除故障;檢修"
  },
  "debug": {
    "pos": "v.",
    "en_def": "to find and remove mistakes in computer code",
    "cn_def": "除錯"
  },
  "reboot": {
    "pos": "v.",
    "en_def": "to turn a computer or machine off and on again",
    "cn_def": "重新開機"
  },
  "override": {
    "pos": "v.",
    "en_def": "to take control and cancel what a machine is doing",
    "cn_def": "手動接管;推翻(決定)"
  },
  "emergency stop": {
    "pos": "n.phr.",
    "en_def": "a button that turns a machine off immediately",
    "cn_def": "緊急停止(按鈕)"
  },
  "fail-safe": {
    "pos": "adj.",
    "en_def": "designed to stay safe if something goes wrong",
    "cn_def": "故障安全的;萬無一失的"
  },
  "crash": {
    "pos": "v.",
    "en_def": "(of a computer) to stop working suddenly",
    "cn_def": "當機;(電腦)崩潰"
  },
  "freeze": {
    "pos": "v.",
    "en_def": "(of a screen or machine) to stop moving or responding",
    "cn_def": "當住;凍結"
  },
  "froze": {
    "pos": "v.",
    "en_def": "(of a screen or machine) to stop moving or responding",
    "cn_def": "當住;凍結"
  },
  "wireless": {
    "pos": "adj.",
    "en_def": "working without wires, using radio signals",
    "cn_def": "無線的"
  },
  "tablet": {
    "pos": "n.",
    "en_def": "a small flat computer with a touchscreen",
    "cn_def": "平板電腦"
  },
  "engineer": {
    "pos": "n.",
    "en_def": "a person who designs and builds machines",
    "cn_def": "工程師"
  },
  "mechanical": {
    "pos": "adj.",
    "en_def": "operated by machinery; connected with machines",
    "cn_def": "機械的"
  },
  "electronic": {
    "pos": "adj.",
    "en_def": "using small electrical parts like chips",
    "cn_def": "電子的"
  },
  "technician": {
    "pos": "n.",
    "en_def": "a skilled worker who repairs or looks after machines",
    "cn_def": "技術人員;技師"
  },
  "mechatronics": {
    "pos": "n.",
    "en_def": "the study that combines machines, electronics and computing",
    "cn_def": "機電整合"
  },
  "gps": {
    "pos": "n.",
    "en_def": "a system that uses satellites to show your location",
    "cn_def": "全球定位系統"
  },
  "mapping": {
    "pos": "n.",
    "en_def": "making a map or plan of an area",
    "cn_def": "製圖;建立地圖"
  },
  "autopilot": {
    "pos": "n.",
    "en_def": "a system that flies a plane or drives a car automatically",
    "cn_def": "自動駕駛(系統)"
  },
  "compress": {
    "pos": "v.",
    "en_def": "to press or make something smaller",
    "cn_def": "壓縮"
  },
  "dismantle": {
    "pos": "v.",
    "en_def": "to take a machine apart into pieces",
    "cn_def": "拆解;拆卸"
  },
  "saturate": {
    "pos": "v.",
    "en_def": "to fill something so completely that no more can be added",
    "cn_def": "使飽和;充斥"
  },
  "job loss": {
    "pos": "n.phr.",
    "en_def": "when people lose their jobs",
    "cn_def": "失業;工作流失"
  },
  "loading dock": {
    "pos": "n.phr.",
    "en_def": "the place where trucks are filled or emptied",
    "cn_def": "裝卸區;卸貨平台"
  },
  "killer robot": {
    "pos": "n.phr.",
    "en_def": "a machine that can choose and attack targets by itself",
    "cn_def": "殺手機器人"
  },
  "technical": {
    "pos": "adj.",
    "en_def": "connected with practical skills or machines",
    "cn_def": "技術的"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "useful and suitable for real situations",
    "cn_def": "實用的"
  },
  "unattended": {
    "pos": "adj.",
    "en_def": "not watched or looked after by anyone",
    "cn_def": "無人看管的"
  },
  "plant": {
    "pos": "n.",
    "en_def": "a large factory where things are made",
    "cn_def": "工廠;廠房"
  },
  "cluster": {
    "pos": "n.",
    "en_def": "a group of similar things close together",
    "cn_def": "群聚;聚落"
  },
  "conundrum": {
    "pos": "n.",
    "en_def": "a confusing and difficult problem",
    "cn_def": "難題;謎題"
  },
  "scoreboard": {
    "pos": "n.",
    "en_def": "a large board showing the score of a game",
    "cn_def": "記分板"
  },
  "throughput": {
    "pos": "n.",
    "en_def": "the amount of work done in a period of time",
    "cn_def": "產能;處理量"
  },
  "lidar": {
    "pos": "n.",
    "en_def": "a system that measures distance using laser light",
    "cn_def": "光達;雷射雷達"
  },
  "portable": {
    "pos": "adj.",
    "en_def": "light and easy to carry",
    "cn_def": "可攜帶的;輕便的"
  },
  "rogue": {
    "pos": "adj.",
    "en_def": "behaving differently from what is expected, often dangerously",
    "cn_def": "失控的;脫序的"
  },
  "sentient": {
    "pos": "adj.",
    "en_def": "able to feel and experience things",
    "cn_def": "有知覺的;有感知能力的"
  },
  "strike zone": {
    "pos": "n.phr.",
    "en_def": "the area over home plate where a pitch counts as a strike",
    "cn_def": "好球帶"
  },
  "the benefit of the doubt": {
    "pos": "n.phr.",
    "en_def": "believing someone when you are not completely sure",
    "cn_def": "(在不確定時)姑且相信"
  },
  "goal-line technology": {
    "pos": "n.phr.",
    "en_def": "cameras that show whether a ball crossed the goal line",
    "cn_def": "門線技術"
  },
  "second nature": {
    "pos": "n.phr.",
    "en_def": "something you do easily without thinking",
    "cn_def": "第二天性;習以為常"
  },
  "repetitive": {
    "pos": "adj.",
    "en_def": "doing the same thing again and again",
    "cn_def": "重複的"
  },
  "detach": {
    "pos": "v.",
    "en_def": "to separate one part from another",
    "cn_def": "拆下;分離"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something, especially something expensive",
    "cn_def": "購買"
  },
  "intercept": {
    "pos": "v.",
    "en_def": "to stop something before it reaches its destination",
    "cn_def": "攔截"
  },
  "mount": {
    "pos": "v.",
    "en_def": "to fix something onto a wall, stand or vehicle",
    "cn_def": "安裝;架設"
  },
  "pioneer": {
    "pos": "v.",
    "en_def": "to be the first to develop a new idea or method",
    "cn_def": "開創;率先開發"
  },
  "mop": {
    "pos": "v.",
    "en_def": "to clean a floor with a wet cloth on a stick",
    "cn_def": "拖(地)"
  },
  "dictate": {
    "pos": "v.",
    "en_def": "to control or decide how something happens",
    "cn_def": "支配;決定"
  },
  "conceal": {
    "pos": "v.",
    "en_def": "to hide something carefully",
    "cn_def": "隱藏;隱瞞"
  },
  "overshadow": {
    "pos": "v.",
    "en_def": "to make something seem less important",
    "cn_def": "使相形見絀;蓋過"
  },
  "weld": {
    "pos": "v.",
    "en_def": "to join metal parts by melting them together",
    "cn_def": "焊接"
  },
  "outlast": {
    "pos": "v.",
    "en_def": "to continue working or living longer than something else",
    "cn_def": "比…更持久"
  },
  "decentralise": {
    "pos": "v.",
    "en_def": "to move control from one central place to many places",
    "cn_def": "分散(權力或管理)"
  },
  "a close call": {
    "pos": "n.phr.",
    "en_def": "a situation where something bad almost happened",
    "cn_def": "千鈞一髮;險些出事"
  },
  "quality control": {
    "pos": "n.phr.",
    "en_def": "checking that products are made correctly",
    "cn_def": "品質管制;品管"
  },
  "military": {
    "pos": "adj.",
    "en_def": "connected with soldiers or the armed forces",
    "cn_def": "軍事的"
  },
  "moral": {
    "pos": "adj.",
    "en_def": "connected with what is right and wrong",
    "cn_def": "道德的"
  },
  "extraordinary": {
    "pos": "adj.",
    "en_def": "very unusual or surprising",
    "cn_def": "非凡的;驚人的"
  },
  "redefine": {
    "pos": "v.",
    "en_def": "to change the meaning or nature of something",
    "cn_def": "重新定義"
  },
  "merge": {
    "pos": "v.",
    "en_def": "to combine two or more things into one",
    "cn_def": "合併;融合"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job",
    "cn_def": "僱用"
  },
  "discard": {
    "pos": "v.",
    "en_def": "to throw away something you no longer want",
    "cn_def": "丟棄"
  },
  "reshape": {
    "pos": "v.",
    "en_def": "to change the form or structure of something",
    "cn_def": "重塑;改變…的面貌"
  },
  "revamp": {
    "pos": "v.",
    "en_def": "to change something to improve it",
    "cn_def": "改造;翻新"
  },
  "customary": {
    "pos": "adj.",
    "en_def": "usual or traditional in a situation",
    "cn_def": "慣例的;習慣的"
  },
  "dire": {
    "pos": "adj.",
    "en_def": "very serious or terrible",
    "cn_def": "極嚴重的;可怕的"
  },
  "skilled": {
    "pos": "adj.",
    "en_def": "having the training to do a job well",
    "cn_def": "有技術的;熟練的"
  },
  "cashier": {
    "pos": "n.",
    "en_def": "a person who takes money in a shop",
    "cn_def": "收銀員"
  },
  "appliance": {
    "pos": "n.",
    "en_def": "a machine used in the home, like a fridge",
    "cn_def": "家電;家用電器"
  },
  "chore": {
    "pos": "n.",
    "en_def": "a small, regular job in the house",
    "cn_def": "家事;雜務"
  },
  "array": {
    "pos": "n.",
    "en_def": "a large group or range of things",
    "cn_def": "一系列;大量"
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事"
  },
  "welder": {
    "pos": "n.",
    "en_def": "a person or machine that joins metal by heating it",
    "cn_def": "焊接工;焊接機"
  },
  "lifelike": {
    "pos": "adj.",
    "en_def": "looking very real or alive",
    "cn_def": "栩栩如生的;逼真的"
  },
  "groundbreaking": {
    "pos": "adj.",
    "en_def": "new and very important; never done before",
    "cn_def": "開創性的;突破性的"
  },
  "cost-saving": {
    "pos": "adj.",
    "en_def": "helping to spend less money",
    "cn_def": "節省成本的"
  },
  "physical": {
    "pos": "adj.",
    "en_def": "connected with the body or real objects",
    "cn_def": "身體的;實體的"
  },
  "eligible": {
    "pos": "adj.",
    "en_def": "allowed to do or receive something",
    "cn_def": "有資格的;符合條件的"
  },
  "currency": {
    "pos": "n.",
    "en_def": "the money used in a country",
    "cn_def": "貨幣"
  },
  "replay": {
    "pos": "n.",
    "en_def": "a recording of part of a game shown again",
    "cn_def": "重播"
  },
  "utility": {
    "pos": "n.",
    "en_def": "the quality of being useful",
    "cn_def": "效用;實用性"
  },
  "analytics": {
    "pos": "n.",
    "en_def": "the study of data to find useful patterns",
    "cn_def": "數據分析"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping machines in good condition",
    "cn_def": "維修;保養"
  },
  "foul": {
    "pos": "n.",
    "en_def": "an action that breaks the rules of a game",
    "cn_def": "犯規"
  },
  "joint": {
    "pos": "n.",
    "en_def": "a place where two parts connect and can bend",
    "cn_def": "關節;接頭"
  },
  "kiosk": {
    "pos": "n.",
    "en_def": "a small screen or booth where you order or buy things",
    "cn_def": "自助點餐機;服務亭"
  },
  "lens": {
    "pos": "n.",
    "en_def": "curved glass that helps a camera see clearly",
    "cn_def": "鏡頭;透鏡"
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "a machine that carries people or goods, like a car",
    "cn_def": "車輛;交通工具"
  },
  "arena": {
    "pos": "n.",
    "en_def": "a large place for sports or shows; an area of activity",
    "cn_def": "競技場;舞台(領域)"
  },
  "standpoint": {
    "pos": "n.",
    "en_def": "a way of looking at or judging a situation",
    "cn_def": "立場;觀點"
  },
  "forklift": {
    "pos": "n.",
    "en_def": "a small vehicle with two metal arms for lifting goods",
    "cn_def": "堆高機"
  },
  "realm": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範疇"
  },
  "android": {
    "pos": "n.",
    "en_def": "a robot made to look very much like a human",
    "cn_def": "仿生人;擬真機器人"
  }
};

const EXTRA_GLOSSES = {};
