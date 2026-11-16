// Topic 7 Subunit 10 Quiz Data: Academic Words 學術單字 3 (scrap – weaken)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S10 - Academic Words 學術單字 3 (scrap – weaken)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "scrap",
    "pos": "v.",
    "cn_def": "放棄;廢棄",
    "en_def": "to get rid of a plan or object that is not useful",
    "sentence": "The company decided to {{BLANK}} its plan for robot taxis, because the cars kept getting confused in heavy traffic.",
    "cn": "公司決定放棄機器人計程車計畫,因為那些車在交通繁忙時一直搞混方向。"
  },
  {
    "word": "tailor",
    "pos": "v.",
    "cn_def": "量身打造;調整",
    "en_def": "to make or change something for a particular person or purpose",
    "sentence": "The software can {{BLANK}} each robot's movements to the size of the worker, so nobody has to bend uncomfortably.",
    "cn": "這套軟體能根據工人的身材調整每台機器人的動作,所以沒有人需要不舒服地彎腰。"
  },
  {
    "word": "unveil",
    "pos": "v.",
    "cn_def": "發表;揭幕",
    "en_def": "to show something new to the public for the first time",
    "sentence": "The company will {{BLANK}} its newest robot at the technology fair, and journalists from fifty countries will attend.",
    "cn": "公司將在科技展上發表它最新的機器人,來自五十個國家的記者都會出席。"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "撤回;收回",
    "en_def": "to take something back or remove it",
    "sentence": "The company {{BLANK}} the toy robot from shops after parents reported that it got very hot when charging.",
    "cn": "在家長反映這款玩具機器人充電時會變得很燙後,公司把它從商店撤回了。",
    "answer": "withdrew",
    "alts": [
      "withdraw",
      "withdrawn"
    ]
  },
  {
    "word": "appraise",
    "pos": "v.",
    "cn_def": "評估;估價",
    "en_def": "to judge how good or valuable something is",
    "sentence": "Experts were invited to {{BLANK}} the robot's performance, and they agreed that it was ready for use in hospitals.",
    "cn": "專家受邀評估這台機器人的表現,他們一致認為它已經可以在醫院使用了。"
  },
  {
    "word": "compress",
    "pos": "v.",
    "cn_def": "壓縮",
    "en_def": "to press or make something smaller",
    "sentence": "The recycling robot can {{BLANK}} plastic bottles into small blocks, so the trucks can carry much more each trip.",
    "cn": "這台回收機器人能把塑膠瓶壓縮成小方塊,所以卡車每趟能載運更多。"
  },
  {
    "word": "decentralise",
    "pos": "v.",
    "cn_def": "分散(權力或管理)",
    "en_def": "to move control from one central place to many places",
    "sentence": "Small robots could help {{BLANK}} manufacturing, so products might be made in local workshops instead of giant factories.",
    "cn": "小型機器人能幫助分散製造業,所以產品可能會在當地工坊而不是巨型工廠裡製造。"
  },
  {
    "word": "disable",
    "pos": "v.",
    "cn_def": "停用;使失效",
    "en_def": "to stop a machine or system from working",
    "sentence": "Workers must {{BLANK}} the robot before they enter its area, or it could start moving without warning.",
    "cn": "工人進入機器人的區域前必須先將它停用,否則它可能會毫無預警地開始移動。"
  },
  {
    "word": "enlarge",
    "pos": "v.",
    "cn_def": "擴大;放大",
    "en_def": "to make something bigger",
    "sentence": "The factory plans to {{BLANK}} its robot testing area, because the new machines are much bigger than the old ones.",
    "cn": "工廠計畫擴大機器人測試區,因為新機器比舊機器大得多。"
  },
  {
    "word": "execute",
    "pos": "v.",
    "cn_def": "執行",
    "en_def": "to carry out a plan, order or task",
    "sentence": "The robot can {{BLANK}} hundreds of tiny movements every minute, and it never loses concentration like tired workers do.",
    "cn": "這台機器人每分鐘能執行數百個細微動作,而且它從不像疲倦的工人那樣分心。"
  },
  {
    "word": "forbid",
    "pos": "v.",
    "cn_def": "禁止",
    "en_def": "to say that someone must not do something",
    "sentence": "The park rules {{BLANK}} flying drones near the children's playground, so we took ours to an open field instead.",
    "cn": "公園的規定禁止在兒童遊樂場附近放無人機,所以我們把我們的帶到一片空地去。",
    "alts": [
      "forbade",
      "forbidden"
    ]
  },
  {
    "word": "halt",
    "pos": "v.",
    "cn_def": "停止;中止",
    "en_def": "to stop something completely",
    "sentence": "The factory had to {{BLANK}} production for a week, because a computer virus had attacked the robots' software.",
    "cn": "工廠必須停止生產一星期,因為電腦病毒攻擊了機器人的軟體。"
  },
  {
    "word": "hover",
    "pos": "v.",
    "cn_def": "盤旋;懸停",
    "en_def": "to stay in the air in one place",
    "sentence": "The drone can {{BLANK}} above the building for twenty minutes, and it sends pictures of the roof to the repair team.",
    "cn": "這架無人機能在大樓上方懸停二十分鐘,並把屋頂的照片傳給維修團隊。"
  },
  {
    "word": "manoeuvre",
    "pos": "v.",
    "cn_def": "(靈活)操控;移動",
    "en_def": "to move something carefully through a difficult space",
    "sentence": "The delivery robot must {{BLANK}} around people and dogs on busy pavements, so it moves slowly in crowded areas.",
    "cn": "送貨機器人必須在繁忙的人行道上繞過行人和狗靈活移動,所以它在擁擠區域行進得很慢。"
  },
  {
    "word": "mount",
    "pos": "v.",
    "cn_def": "安裝;架設",
    "en_def": "to fix something onto a wall, stand or vehicle",
    "sentence": "The workers will {{BLANK}} a camera on top of the robot, so it can see over the boxes in front of it.",
    "cn": "工人將在機器人頂部安裝一台攝影機,這樣它就能看到前方箱子的另一邊。"
  },
  {
    "word": "prescribe",
    "pos": "v.",
    "cn_def": "規定;開(藥)",
    "en_def": "to say officially what must be done",
    "sentence": "Safety laws {{BLANK}} how far workers must stand from moving robots, and inspectors check this every year.",
    "cn": "安全法規規定工人必須和移動中的機器人保持多遠的距離,而檢查員每年都會查核。"
  },
  {
    "word": "regain",
    "pos": "v.",
    "cn_def": "恢復;重新獲得",
    "en_def": "to get something back after losing it",
    "sentence": "After the stroke, my grandmother used a robot glove to {{BLANK}} the use of her hand, and now she can write again.",
    "cn": "中風後,我奶奶使用機器人手套來恢復手部功能,現在她又能寫字了。"
  },
  {
    "word": "reinvent",
    "pos": "v.",
    "cn_def": "徹底改造;重新發明",
    "en_def": "to change something so much that it seems completely new",
    "sentence": "The camera company had to {{BLANK}} itself when phones replaced cameras, so it started making parts for robots.",
    "cn": "當手機取代相機時,這家相機公司必須徹底改造自己,於是它開始製造機器人零件。"
  },
  {
    "word": "resume",
    "pos": "v.",
    "cn_def": "恢復;重新開始",
    "en_def": "to start again after a pause",
    "sentence": "The match will {{BLANK}} after the referee checks the video, so the players are waiting in the middle of the field.",
    "cn": "比賽將在裁判檢查影片後恢復進行,所以球員們正在球場中央等待。"
  },
  {
    "word": "rotate",
    "pos": "v.",
    "cn_def": "旋轉;輪流",
    "en_def": "to turn around a central point",
    "sentence": "The robot's wrist can {{BLANK}} in a full circle, so it can screw lids onto jars faster than any worker.",
    "cn": "機器人的手腕能旋轉一整圈,所以它把蓋子轉緊在罐子上的速度比任何工人都快。"
  },
  {
    "word": "sacrifice",
    "pos": "v.",
    "cn_def": "犧牲",
    "en_def": "to give up something valuable for something more important",
    "sentence": "Some companies {{BLANK}} quality for speed, but customers soon notice the problems and stop buying their products.",
    "cn": "有些公司為了速度而犧牲品質,但顧客很快就會注意到問題並停止購買他們的產品。"
  },
  {
    "word": "shield",
    "pos": "v.",
    "cn_def": "保護;遮擋",
    "en_def": "to protect someone or something from harm",
    "sentence": "The robot's metal cover {{BLANK}} its electronic parts from dust, so it can work in dirty factories for years.",
    "cn": "機器人的金屬外殼保護它的電子零件不受灰塵影響,所以它能在骯髒的工廠裡工作好幾年。"
  },
  {
    "word": "strengthen",
    "pos": "v.",
    "cn_def": "強化;加強",
    "en_def": "to make something stronger",
    "sentence": "The government wants to {{BLANK}} safety rules for drones, because several have crashed into homes this year.",
    "cn": "政府想要加強無人機的安全規範,因為今年已有好幾架撞進民宅。"
  },
  {
    "word": "uncover",
    "pos": "v.",
    "cn_def": "揭露;發現",
    "en_def": "to discover something that was hidden",
    "sentence": "Reporters managed to {{BLANK}} the truth about the robot accident, and the company was forced to apologise.",
    "cn": "記者成功揭露了機器人事故的真相,公司被迫道歉。"
  },
  {
    "word": "weaken",
    "pos": "v.",
    "cn_def": "削弱",
    "en_def": "to make something less strong",
    "sentence": "Cheap robots from abroad could {{BLANK}} local factories, so the government is offering them money to modernise.",
    "cn": "來自國外的便宜機器人可能會削弱本地工廠,所以政府提供資金幫助它們現代化。"
  }
];

const MCQS = [
  {
    "q": "The company decided to _____ its plan for robot taxis, because the cars kept getting confused in heavy traffic.",
    "options": [
      "revive",
      "scrap",
      "crash",
      "overshadow"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The software can _____ each robot's movements to the size of the worker, so nobody has to bend uncomfortably.",
    "options": [
      "dictate",
      "discard",
      "redeploy",
      "tailor"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The company will _____ its newest robot at the technology fair, and journalists from fifty countries will attend.",
    "options": [
      "unveil",
      "weld",
      "dismantle",
      "expire"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The company _____ the toy robot from shops after parents reported that it got very hot when charging.",
    "options": [
      "overturn",
      "interrupt",
      "withdrew",
      "nullify"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Experts were invited to _____ the robot's performance, and they agreed that it was ready for use in hospitals.",
    "options": [
      "appraise",
      "revive",
      "outlast",
      "officiate"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The recycling robot can _____ plastic bottles into small blocks, so the trucks can carry much more each trip.",
    "options": [
      "dispense",
      "calibrate",
      "reshape",
      "compress"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Small robots could help _____ manufacturing, so products might be made in local workshops instead of giant factories.",
    "options": [
      "detach",
      "dismantle",
      "decentralise",
      "blame"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Workers must _____ the robot before they enter its area, or it could start moving without warning.",
    "options": [
      "discard",
      "disable",
      "purchase",
      "overshadow"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The factory plans to _____ its robot testing area, because the new machines are much bigger than the old ones.",
    "options": [
      "permeate",
      "dissect",
      "enlarge",
      "discard"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The robot can _____ hundreds of tiny movements every minute, and it never loses concentration like tired workers do.",
    "options": [
      "execute",
      "troubleshoot",
      "permeate",
      "complicate"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The park rules _____ flying drones near the children's playground, so we took ours to an open field instead.",
    "options": [
      "revive",
      "freeze",
      "hire",
      "forbid"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The factory had to _____ production for a week, because a computer virus had attacked the robots' software.",
    "options": [
      "saturate",
      "halt",
      "disinfect",
      "purchase"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The drone can _____ above the building for twenty minutes, and it sends pictures of the roof to the repair team.",
    "options": [
      "overturn",
      "nullify",
      "leverage",
      "hover"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The delivery robot must _____ around people and dogs on busy pavements, so it moves slowly in crowded areas.",
    "options": [
      "manoeuvre",
      "defy",
      "debug",
      "discontinue"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The workers will _____ a camera on top of the robot, so it can see over the boxes in front of it.",
    "options": [
      "mop",
      "mount",
      "interrupt",
      "dissect"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Safety laws _____ how far workers must stand from moving robots, and inspectors check this every year.",
    "options": [
      "permeate",
      "reshape",
      "prescribe",
      "dismantle"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "After the stroke, my grandmother used a robot glove to _____ the use of her hand, and now she can write again.",
    "options": [
      "lag",
      "reprogram",
      "saturate",
      "regain"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The camera company had to _____ itself when phones replaced cameras, so it started making parts for robots.",
    "options": [
      "certify",
      "reinvent",
      "repel",
      "redefine"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The match will _____ after the referee checks the video, so the players are waiting in the middle of the field.",
    "options": [
      "resume",
      "intercept",
      "entrust",
      "overtake"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The robot's wrist can _____ in a full circle, so it can screw lids onto jars faster than any worker.",
    "options": [
      "leverage",
      "permeate",
      "rotate",
      "defy"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Some companies _____ quality for speed, but customers soon notice the problems and stop buying their products.",
    "options": [
      "procure",
      "merge",
      "obstruct",
      "sacrifice"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The robot's metal cover _____ its electronic parts from dust, so it can work in dirty factories for years.",
    "options": [
      "entrust",
      "shield",
      "lag",
      "revamp"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The government wants to _____ safety rules for drones, because several have crashed into homes this year.",
    "options": [
      "display",
      "saturate",
      "strengthen",
      "dispatch"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Reporters managed to _____ the truth about the robot accident, and the company was forced to apologise.",
    "options": [
      "uncover",
      "weld",
      "officiate",
      "bypass"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Cheap robots from abroad could _____ local factories, so the government is offering them money to modernise.",
    "options": [
      "weld",
      "boost",
      "weaken",
      "mop"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "scrap": {
    "pos": "v.",
    "en_def": "to get rid of a plan or object that is not useful",
    "cn_def": "放棄;廢棄"
  },
  "tailor": {
    "pos": "v.",
    "en_def": "to make or change something for a particular person or purpose",
    "cn_def": "量身打造;調整"
  },
  "unveil": {
    "pos": "v.",
    "en_def": "to show something new to the public for the first time",
    "cn_def": "發表;揭幕"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to take something back or remove it",
    "cn_def": "撤回;收回"
  },
  "withdrew": {
    "pos": "v.",
    "en_def": "to take something back or remove it",
    "cn_def": "撤回;收回"
  },
  "appraise": {
    "pos": "v.",
    "en_def": "to judge how good or valuable something is",
    "cn_def": "評估;估價"
  },
  "compress": {
    "pos": "v.",
    "en_def": "to press or make something smaller",
    "cn_def": "壓縮"
  },
  "decentralise": {
    "pos": "v.",
    "en_def": "to move control from one central place to many places",
    "cn_def": "分散(權力或管理)"
  },
  "disable": {
    "pos": "v.",
    "en_def": "to stop a machine or system from working",
    "cn_def": "停用;使失效"
  },
  "enlarge": {
    "pos": "v.",
    "en_def": "to make something bigger",
    "cn_def": "擴大;放大"
  },
  "execute": {
    "pos": "v.",
    "en_def": "to carry out a plan, order or task",
    "cn_def": "執行"
  },
  "forbid": {
    "pos": "v.",
    "en_def": "to say that someone must not do something",
    "cn_def": "禁止"
  },
  "halt": {
    "pos": "v.",
    "en_def": "to stop something completely",
    "cn_def": "停止;中止"
  },
  "hover": {
    "pos": "v.",
    "en_def": "to stay in the air in one place",
    "cn_def": "盤旋;懸停"
  },
  "manoeuvre": {
    "pos": "v.",
    "en_def": "to move something carefully through a difficult space",
    "cn_def": "(靈活)操控;移動"
  },
  "mount": {
    "pos": "v.",
    "en_def": "to fix something onto a wall, stand or vehicle",
    "cn_def": "安裝;架設"
  },
  "prescribe": {
    "pos": "v.",
    "en_def": "to say officially what must be done",
    "cn_def": "規定;開(藥)"
  },
  "regain": {
    "pos": "v.",
    "en_def": "to get something back after losing it",
    "cn_def": "恢復;重新獲得"
  },
  "reinvent": {
    "pos": "v.",
    "en_def": "to change something so much that it seems completely new",
    "cn_def": "徹底改造;重新發明"
  },
  "resume": {
    "pos": "v.",
    "en_def": "to start again after a pause",
    "cn_def": "恢復;重新開始"
  },
  "rotate": {
    "pos": "v.",
    "en_def": "to turn around a central point",
    "cn_def": "旋轉;輪流"
  },
  "sacrifice": {
    "pos": "v.",
    "en_def": "to give up something valuable for something more important",
    "cn_def": "犧牲"
  },
  "shield": {
    "pos": "v.",
    "en_def": "to protect someone or something from harm",
    "cn_def": "保護;遮擋"
  },
  "strengthen": {
    "pos": "v.",
    "en_def": "to make something stronger",
    "cn_def": "強化;加強"
  },
  "uncover": {
    "pos": "v.",
    "en_def": "to discover something that was hidden",
    "cn_def": "揭露;發現"
  },
  "weaken": {
    "pos": "v.",
    "en_def": "to make something less strong",
    "cn_def": "削弱"
  },
  "revive": {
    "pos": "v.",
    "en_def": "to bring something back to life or use",
    "cn_def": "使復甦;重振"
  },
  "crash": {
    "pos": "v.",
    "en_def": "(of a computer) to stop working suddenly",
    "cn_def": "當機;(電腦)崩潰"
  },
  "overshadow": {
    "pos": "v.",
    "en_def": "to make something seem less important",
    "cn_def": "使相形見絀;蓋過"
  },
  "dictate": {
    "pos": "v.",
    "en_def": "to control or decide how something happens",
    "cn_def": "支配;決定"
  },
  "discard": {
    "pos": "v.",
    "en_def": "to throw away something you no longer want",
    "cn_def": "丟棄"
  },
  "redeploy": {
    "pos": "v.",
    "en_def": "to move workers to a different job or place",
    "cn_def": "重新調派;調職"
  },
  "weld": {
    "pos": "v.",
    "en_def": "to join metal parts by melting them together",
    "cn_def": "焊接"
  },
  "dismantle": {
    "pos": "v.",
    "en_def": "to take a machine apart into pieces",
    "cn_def": "拆解;拆卸"
  },
  "expire": {
    "pos": "v.",
    "en_def": "to come to the end of the time it is valid",
    "cn_def": "到期;過期"
  },
  "overturn": {
    "pos": "v.",
    "en_def": "to officially change a decision",
    "cn_def": "推翻;撤銷(判決)"
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop something or someone for a short time",
    "cn_def": "打斷;中斷"
  },
  "nullify": {
    "pos": "v.",
    "en_def": "to make something have no effect",
    "cn_def": "使無效;抵銷"
  },
  "outlast": {
    "pos": "v.",
    "en_def": "to continue working or living longer than something else",
    "cn_def": "比…更持久"
  },
  "officiate": {
    "pos": "v.",
    "en_def": "to act as the official in charge of a game",
    "cn_def": "擔任裁判;主持"
  },
  "dispense": {
    "pos": "v.",
    "en_def": "to give out medicine or other things",
    "cn_def": "配(藥);分發"
  },
  "calibrate": {
    "pos": "v.",
    "en_def": "to adjust a machine so that it measures correctly",
    "cn_def": "校準;校正"
  },
  "reshape": {
    "pos": "v.",
    "en_def": "to change the form or structure of something",
    "cn_def": "重塑;改變…的面貌"
  },
  "detach": {
    "pos": "v.",
    "en_def": "to separate one part from another",
    "cn_def": "拆下;分離"
  },
  "blame": {
    "pos": "v.",
    "en_def": "to say that someone is responsible for something bad",
    "cn_def": "責怪;歸咎"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something, especially something expensive",
    "cn_def": "購買"
  },
  "permeate": {
    "pos": "v.",
    "en_def": "to spread through every part of something",
    "cn_def": "滲透;遍及"
  },
  "dissect": {
    "pos": "v.",
    "en_def": "to examine something in great detail",
    "cn_def": "仔細剖析;解剖"
  },
  "troubleshoot": {
    "pos": "v.",
    "en_def": "to find and fix problems in a machine or system",
    "cn_def": "排除故障;檢修"
  },
  "complicate": {
    "pos": "v.",
    "en_def": "to make something more difficult to understand or do",
    "cn_def": "使複雜化"
  },
  "freeze": {
    "pos": "v.",
    "en_def": "(of a screen or machine) to stop moving or responding",
    "cn_def": "當住;凍結"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job",
    "cn_def": "僱用"
  },
  "saturate": {
    "pos": "v.",
    "en_def": "to fill something so completely that no more can be added",
    "cn_def": "使飽和;充斥"
  },
  "disinfect": {
    "pos": "v.",
    "en_def": "to clean something to kill germs",
    "cn_def": "消毒"
  },
  "leverage": {
    "pos": "v.",
    "en_def": "to use something you have to get the best result",
    "cn_def": "善用;利用"
  },
  "defy": {
    "pos": "v.",
    "en_def": "to refuse to obey, or to seem impossible",
    "cn_def": "違抗;挑戰(常理)"
  },
  "debug": {
    "pos": "v.",
    "en_def": "to find and remove mistakes in computer code",
    "cn_def": "除錯"
  },
  "discontinue": {
    "pos": "v.",
    "en_def": "to stop making or offering something",
    "cn_def": "停產;停止"
  },
  "mop": {
    "pos": "v.",
    "en_def": "to clean a floor with a wet cloth on a stick",
    "cn_def": "拖(地)"
  },
  "lag": {
    "pos": "v.",
    "en_def": "to move or develop more slowly than others",
    "cn_def": "落後;延遲"
  },
  "reprogram": {
    "pos": "v.",
    "en_def": "to give a machine new instructions",
    "cn_def": "重新設定程式"
  },
  "certify": {
    "pos": "v.",
    "en_def": "to officially say that something meets a standard",
    "cn_def": "認證;證明"
  },
  "repel": {
    "pos": "v.",
    "en_def": "to push away or keep something away",
    "cn_def": "排斥;驅趕"
  },
  "redefine": {
    "pos": "v.",
    "en_def": "to change the meaning or nature of something",
    "cn_def": "重新定義"
  },
  "intercept": {
    "pos": "v.",
    "en_def": "to stop something before it reaches its destination",
    "cn_def": "攔截"
  },
  "entrust": {
    "pos": "v.",
    "en_def": "to give someone the job of looking after something",
    "cn_def": "託付;委託"
  },
  "overtake": {
    "pos": "v.",
    "en_def": "to become greater or more successful than something",
    "cn_def": "超越;趕上"
  },
  "procure": {
    "pos": "v.",
    "en_def": "to get something, often with effort",
    "cn_def": "取得;採購"
  },
  "merge": {
    "pos": "v.",
    "en_def": "to combine two or more things into one",
    "cn_def": "合併;融合"
  },
  "obstruct": {
    "pos": "v.",
    "en_def": "to block a path or stop progress",
    "cn_def": "阻擋;妨礙"
  },
  "revamp": {
    "pos": "v.",
    "en_def": "to change something to improve it",
    "cn_def": "改造;翻新"
  },
  "display": {
    "pos": "v.",
    "en_def": "to show something so people can see it",
    "cn_def": "展示;顯示"
  },
  "dispatch": {
    "pos": "v.",
    "en_def": "to send something or someone somewhere",
    "cn_def": "派送;發送"
  },
  "bypass": {
    "pos": "v.",
    "en_def": "to go around something or avoid a rule or system",
    "cn_def": "繞過;略過"
  },
  "boost": {
    "pos": "v.",
    "en_def": "to increase or improve something",
    "cn_def": "提升;促進"
  }
};

const EXTRA_GLOSSES = {};
