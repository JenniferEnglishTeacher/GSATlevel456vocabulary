// Topic 7 Subunit 9 Quiz Data: Academic Words 學術單字 2 (expire – revive)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S09 - Academic Words 學術單字 2 (expire – revive)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "expire",
    "pos": "v.",
    "cn_def": "到期;過期",
    "en_def": "to come to the end of the time it is valid",
    "sentence": "The robot's software licence will {{BLANK}} next month, so the school must pay again or it will stop working.",
    "cn": "機器人的軟體授權下個月將到期,所以學校必須再付費,否則它會停止運作。"
  },
  {
    "word": "falter",
    "pos": "v.",
    "cn_def": "衰退;動搖",
    "en_def": "to become weaker or less certain",
    "sentence": "Sales of home robots began to {{BLANK}} last year, because many families felt they were too expensive.",
    "cn": "家用機器人的銷售去年開始衰退,因為許多家庭覺得它們太貴了。"
  },
  {
    "word": "forfeit",
    "pos": "v.",
    "cn_def": "喪失;被沒收",
    "en_def": "to lose something because you broke a rule",
    "sentence": "The robot team had to {{BLANK}} the match, because their machine was heavier than the competition rules allowed.",
    "cn": "這支機器人隊伍必須棄權這場比賽,因為他們的機器比比賽規則允許的還重。"
  },
  {
    "word": "fuel",
    "pos": "v.",
    "cn_def": "助長;加劇",
    "en_def": "to make something increase or grow stronger",
    "sentence": "News stories about killer robots {{BLANK}} public fear, although most robots simply clean floors or pack boxes.",
    "cn": "有關殺手機器人的新聞助長了大眾的恐懼,雖然大多數機器人只是拖地或包裝箱子。"
  },
  {
    "word": "ignite",
    "pos": "v.",
    "cn_def": "引發;點燃",
    "en_def": "to start a strong feeling, argument or interest",
    "sentence": "The robot umpire's first wrong call managed to {{BLANK}} a heated debate, and fans argued about it online for days.",
    "cn": "機器人裁判的第一次誤判就引發了激烈的爭論,球迷們在網路上爭論了好幾天。"
  },
  {
    "word": "imitate",
    "pos": "v.",
    "cn_def": "模仿",
    "en_def": "to copy the way someone does something",
    "sentence": "The robot learned to {{BLANK}} the chef's movements, so it can now make noodles almost as well as he does.",
    "cn": "這台機器人學會了模仿廚師的動作,所以它現在幾乎能做出跟他一樣好的麵。"
  },
  {
    "word": "inflict",
    "pos": "v.",
    "cn_def": "造成(傷害);施加",
    "en_def": "to cause something bad to happen to someone",
    "sentence": "A heavy factory robot could {{BLANK}} serious injuries, so workers must stay outside the yellow line at all times.",
    "cn": "一台沉重的工廠機器人可能會造成嚴重的傷害,所以工人必須隨時待在黃線外面。"
  },
  {
    "word": "intercept",
    "pos": "v.",
    "cn_def": "攔截",
    "en_def": "to stop something before it reaches its destination",
    "sentence": "Security staff used a special device to {{BLANK}} the drone, because it was flying too close to the airport.",
    "cn": "保全人員使用一種特殊裝置來攔截無人機,因為它飛得太靠近機場了。"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "cn_def": "打斷;中斷",
    "en_def": "to stop something or someone for a short time",
    "sentence": "A power cut can {{BLANK}} the whole production line, so the factory keeps a backup generator ready.",
    "cn": "一次停電就可能中斷整條生產線,所以工廠準備了一台備用發電機。"
  },
  {
    "word": "lag",
    "pos": "v.",
    "cn_def": "落後;延遲",
    "en_def": "to move or develop more slowly than others",
    "sentence": "Small companies often {{BLANK}} behind in using robots, because they cannot afford the high starting costs.",
    "cn": "小公司在使用機器人方面常常落後,因為它們負擔不起高昂的初期成本。"
  },
  {
    "word": "merge",
    "pos": "v.",
    "cn_def": "合併;融合",
    "en_def": "to combine two or more things into one",
    "sentence": "The two robot companies decided to {{BLANK}}, so they could share their research and compete with bigger firms.",
    "cn": "這兩家機器人公司決定合併,這樣它們就能分享研究成果並和更大的公司競爭。"
  },
  {
    "word": "nullify",
    "pos": "v.",
    "cn_def": "使無效;抵銷",
    "en_def": "to make something have no effect",
    "sentence": "A single loose cable can {{BLANK}} months of careful work, so the team checks everything twice before each test.",
    "cn": "一條鬆脫的電纜就可能抵銷好幾個月的細心努力,所以團隊在每次測試前都會檢查兩遍。"
  },
  {
    "word": "obstruct",
    "pos": "v.",
    "cn_def": "阻擋;妨礙",
    "en_def": "to block a path or stop progress",
    "sentence": "Parked bicycles often {{BLANK}} the delivery robots on the pavement, so they have to wait or find another way.",
    "cn": "停放的腳踏車常常阻擋人行道上的送貨機器人,所以它們必須等待或另找路線。"
  },
  {
    "word": "outperform",
    "pos": "v.",
    "cn_def": "表現優於;勝過",
    "en_def": "to do better than someone or something",
    "sentence": "The new robot can {{BLANK}} human workers at sorting letters, but it still struggles with handwritten addresses.",
    "cn": "新機器人在分類信件方面能勝過人類員工,但它在處理手寫地址時仍有困難。"
  },
  {
    "word": "outnumber",
    "pos": "v.",
    "cn_def": "數量超過",
    "en_def": "to be greater in number than another group",
    "sentence": "In some factories, robots now {{BLANK}} human workers, but people are still needed to plan and repair.",
    "cn": "在一些工廠裡,機器人的數量現在已經超過人類員工,但仍然需要人來規劃和修理。"
  },
  {
    "word": "outpace",
    "pos": "v.",
    "cn_def": "超越;比…發展更快",
    "en_def": "to go faster or develop more quickly than others",
    "sentence": "Technology often {{BLANK}} the law, so new robots appear before governments have written rules for them.",
    "cn": "科技常常發展得比法律更快,所以新機器人在政府制定相關規則之前就出現了。"
  },
  {
    "word": "overshadow",
    "pos": "v.",
    "cn_def": "使相形見絀;蓋過",
    "en_def": "to make something seem less important",
    "sentence": "The robot's mistake seemed to {{BLANK}} the team's great result, although they had won every other match.",
    "cn": "機器人的失誤似乎蓋過了這支隊伍的好成績,雖然他們贏了其他每一場比賽。"
  },
  {
    "word": "overtake",
    "pos": "v.",
    "cn_def": "超越;趕上",
    "en_def": "to become greater or more successful than something",
    "sentence": "Online shopping {{BLANK}} store shopping in many cities last year, so warehouses needed many more robots.",
    "cn": "去年在許多城市,網路購物超越了實體店購物,所以倉庫需要多得多的機器人。",
    "answer": "overtook",
    "alts": [
      "overtake",
      "overtaken"
    ]
  },
  {
    "word": "procure",
    "pos": "v.",
    "cn_def": "取得;採購",
    "en_def": "to get something, often with effort",
    "sentence": "The school worked hard to {{BLANK}} funding for a robot club, and now forty students meet there every Friday.",
    "cn": "學校努力取得機器人社團的經費,現在每週五有四十名學生在那裡聚會。"
  },
  {
    "word": "redefine",
    "pos": "v.",
    "cn_def": "重新定義",
    "en_def": "to change the meaning or nature of something",
    "sentence": "Robots will {{BLANK}} what it means to have a job, because many tasks will be shared between people and machines.",
    "cn": "機器人將重新定義擁有一份工作的意義,因為許多任務將由人和機器共同分擔。"
  },
  {
    "word": "renew",
    "pos": "v.",
    "cn_def": "更新;續約",
    "en_def": "to start again or make something valid for longer",
    "sentence": "The factory decided to {{BLANK}} its contract with the robot company, because the machines had worked well for five years.",
    "cn": "工廠決定和機器人公司續約,因為這些機器已經運作良好五年了。"
  },
  {
    "word": "repel",
    "pos": "v.",
    "cn_def": "排斥;驅趕",
    "en_def": "to push away or keep something away",
    "sentence": "The farm uses small robots that {{BLANK}} birds from the fields, so farmers no longer need loud noise machines.",
    "cn": "農場使用能驅趕田裡鳥類的小型機器人,所以農夫不再需要吵鬧的噪音機器。"
  },
  {
    "word": "reshape",
    "pos": "v.",
    "cn_def": "重塑;改變…的面貌",
    "en_def": "to change the form or structure of something",
    "sentence": "Robots will {{BLANK}} the job market over the next twenty years, so students should learn skills that machines cannot copy.",
    "cn": "機器人將在未來二十年重塑就業市場,所以學生應該學習機器無法複製的技能。"
  },
  {
    "word": "revamp",
    "pos": "v.",
    "cn_def": "改造;翻新",
    "en_def": "to change something to improve it",
    "sentence": "The supermarket decided to {{BLANK}} its checkout area, so it added robots and removed half of the old counters.",
    "cn": "超市決定改造它的結帳區,所以它增加了機器人並撤掉一半的舊櫃台。"
  },
  {
    "word": "revive",
    "pos": "v.",
    "cn_def": "使復甦;重振",
    "en_def": "to bring something back to life or use",
    "sentence": "Some people hope robots will {{BLANK}} small towns, because companies could open factories there without needing many workers.",
    "cn": "有些人希望機器人能重振小鎮,因為公司可以在那裡開設工廠而不需要很多工人。"
  }
];

const MCQS = [
  {
    "q": "The robot's software licence will _____ next month, so the school must pay again or it will stop working.",
    "options": [
      "tailor",
      "enlist",
      "freeze",
      "expire"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Sales of home robots began to _____ last year, because many families felt they were too expensive.",
    "options": [
      "falter",
      "scrap",
      "troubleshoot",
      "greet"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The robot team had to _____ the match, because their machine was heavier than the competition rules allowed.",
    "options": [
      "disinfect",
      "blame",
      "forfeit",
      "greet"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "News stories about killer robots _____ public fear, although most robots simply clean floors or pack boxes.",
    "options": [
      "freeze",
      "fuel",
      "hover",
      "regain"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The robot umpire's first wrong call managed to _____ a heated debate, and fans argued about it online for days.",
    "options": [
      "entrust",
      "pioneer",
      "override",
      "ignite"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The robot learned to _____ the chef's movements, so it can now make noodles almost as well as he does.",
    "options": [
      "embed",
      "override",
      "imitate",
      "certify"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "A heavy factory robot could _____ serious injuries, so workers must stay outside the yellow line at all times.",
    "options": [
      "inflict",
      "outlast",
      "appraise",
      "redeploy"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Security staff used a special device to _____ the drone, because it was flying too close to the airport.",
    "options": [
      "compress",
      "intercept",
      "permeate",
      "enlist"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "A power cut can _____ the whole production line, so the factory keeps a backup generator ready.",
    "options": [
      "interrupt",
      "reinvent",
      "hire",
      "troubleshoot"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Small companies often _____ behind in using robots, because they cannot afford the high starting costs.",
    "options": [
      "permeate",
      "hover",
      "lag",
      "appraise"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The two robot companies decided to _____, so they could share their research and compete with bigger firms.",
    "options": [
      "complicate",
      "merge",
      "hire",
      "decentralise"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "A single loose cable can _____ months of careful work, so the team checks everything twice before each test.",
    "options": [
      "dismantle",
      "reinvent",
      "dissect",
      "nullify"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Parked bicycles often _____ the delivery robots on the pavement, so they have to wait or find another way.",
    "options": [
      "obstruct",
      "reskill",
      "troubleshoot",
      "defy"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The new robot can _____ human workers at sorting letters, but it still struggles with handwritten addresses.",
    "options": [
      "reboot",
      "mount",
      "outperform",
      "overturn"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "In some factories, robots now _____ human workers, but people are still needed to plan and repair.",
    "options": [
      "override",
      "outnumber",
      "crash",
      "compress"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Technology often _____ the law, so new robots appear before governments have written rules for them.",
    "options": [
      "rotate",
      "complicate",
      "leverage",
      "outpace"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The robot's mistake seemed to _____ the team's great result, although they had won every other match.",
    "options": [
      "overshadow",
      "manoeuvre",
      "dispense",
      "reinvent"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Online shopping _____ store shopping in many cities last year, so warehouses needed many more robots.",
    "options": [
      "resume",
      "overtook",
      "permeate",
      "weaken"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The school worked hard to _____ funding for a robot club, and now forty students meet there every Friday.",
    "options": [
      "weld",
      "forbid",
      "redeploy",
      "procure"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Robots will _____ what it means to have a job, because many tasks will be shared between people and machines.",
    "options": [
      "bypass",
      "purchase",
      "redefine",
      "discontinue"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The factory decided to _____ its contract with the robot company, because the machines had worked well for five years.",
    "options": [
      "weld",
      "pioneer",
      "permeate",
      "renew"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The farm uses small robots that _____ birds from the fields, so farmers no longer need loud noise machines.",
    "options": [
      "discard",
      "detach",
      "repel",
      "dispense"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Robots will _____ the job market over the next twenty years, so students should learn skills that machines cannot copy.",
    "options": [
      "infringe",
      "reshape",
      "dispatch",
      "strengthen"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The supermarket decided to _____ its checkout area, so it added robots and removed half of the old counters.",
    "options": [
      "revamp",
      "devalue",
      "sacrifice",
      "withdraw"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Some people hope robots will _____ small towns, because companies could open factories there without needing many workers.",
    "options": [
      "leverage",
      "revive",
      "resume",
      "enlist"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "expire": {
    "pos": "v.",
    "en_def": "to come to the end of the time it is valid",
    "cn_def": "到期;過期"
  },
  "falter": {
    "pos": "v.",
    "en_def": "to become weaker or less certain",
    "cn_def": "衰退;動搖"
  },
  "forfeit": {
    "pos": "v.",
    "en_def": "to lose something because you broke a rule",
    "cn_def": "喪失;被沒收"
  },
  "fuel": {
    "pos": "v.",
    "en_def": "to make something increase or grow stronger",
    "cn_def": "助長;加劇"
  },
  "ignite": {
    "pos": "v.",
    "en_def": "to start a strong feeling, argument or interest",
    "cn_def": "引發;點燃"
  },
  "imitate": {
    "pos": "v.",
    "en_def": "to copy the way someone does something",
    "cn_def": "模仿"
  },
  "inflict": {
    "pos": "v.",
    "en_def": "to cause something bad to happen to someone",
    "cn_def": "造成(傷害);施加"
  },
  "intercept": {
    "pos": "v.",
    "en_def": "to stop something before it reaches its destination",
    "cn_def": "攔截"
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop something or someone for a short time",
    "cn_def": "打斷;中斷"
  },
  "lag": {
    "pos": "v.",
    "en_def": "to move or develop more slowly than others",
    "cn_def": "落後;延遲"
  },
  "merge": {
    "pos": "v.",
    "en_def": "to combine two or more things into one",
    "cn_def": "合併;融合"
  },
  "nullify": {
    "pos": "v.",
    "en_def": "to make something have no effect",
    "cn_def": "使無效;抵銷"
  },
  "obstruct": {
    "pos": "v.",
    "en_def": "to block a path or stop progress",
    "cn_def": "阻擋;妨礙"
  },
  "outperform": {
    "pos": "v.",
    "en_def": "to do better than someone or something",
    "cn_def": "表現優於;勝過"
  },
  "outnumber": {
    "pos": "v.",
    "en_def": "to be greater in number than another group",
    "cn_def": "數量超過"
  },
  "outpace": {
    "pos": "v.",
    "en_def": "to go faster or develop more quickly than others",
    "cn_def": "超越;比…發展更快"
  },
  "overshadow": {
    "pos": "v.",
    "en_def": "to make something seem less important",
    "cn_def": "使相形見絀;蓋過"
  },
  "overtook": {
    "pos": "v.",
    "en_def": "to become greater or more successful than something",
    "cn_def": "超越;趕上"
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
  "redefine": {
    "pos": "v.",
    "en_def": "to change the meaning or nature of something",
    "cn_def": "重新定義"
  },
  "renew": {
    "pos": "v.",
    "en_def": "to start again or make something valid for longer",
    "cn_def": "更新;續約"
  },
  "repel": {
    "pos": "v.",
    "en_def": "to push away or keep something away",
    "cn_def": "排斥;驅趕"
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
  "revive": {
    "pos": "v.",
    "en_def": "to bring something back to life or use",
    "cn_def": "使復甦;重振"
  },
  "tailor": {
    "pos": "v.",
    "en_def": "to make or change something for a particular person or purpose",
    "cn_def": "量身打造;調整"
  },
  "enlist": {
    "pos": "v.",
    "en_def": "to ask for and get someone's help or support",
    "cn_def": "爭取(協助);徵召"
  },
  "freeze": {
    "pos": "v.",
    "en_def": "(of a screen or machine) to stop moving or responding",
    "cn_def": "當住;凍結"
  },
  "scrap": {
    "pos": "v.",
    "en_def": "to get rid of a plan or object that is not useful",
    "cn_def": "放棄;廢棄"
  },
  "troubleshoot": {
    "pos": "v.",
    "en_def": "to find and fix problems in a machine or system",
    "cn_def": "排除故障;檢修"
  },
  "greet": {
    "pos": "v.",
    "en_def": "to say hello to someone when they arrive",
    "cn_def": "迎接;打招呼"
  },
  "disinfect": {
    "pos": "v.",
    "en_def": "to clean something to kill germs",
    "cn_def": "消毒"
  },
  "blame": {
    "pos": "v.",
    "en_def": "to say that someone is responsible for something bad",
    "cn_def": "責怪;歸咎"
  },
  "hover": {
    "pos": "v.",
    "en_def": "to stay in the air in one place",
    "cn_def": "盤旋;懸停"
  },
  "regain": {
    "pos": "v.",
    "en_def": "to get something back after losing it",
    "cn_def": "恢復;重新獲得"
  },
  "entrust": {
    "pos": "v.",
    "en_def": "to give someone the job of looking after something",
    "cn_def": "託付;委託"
  },
  "pioneer": {
    "pos": "v.",
    "en_def": "to be the first to develop a new idea or method",
    "cn_def": "開創;率先開發"
  },
  "override": {
    "pos": "v.",
    "en_def": "to take control and cancel what a machine is doing",
    "cn_def": "手動接管;推翻(決定)"
  },
  "embed": {
    "pos": "v.",
    "en_def": "to fix something firmly inside something else",
    "cn_def": "嵌入"
  },
  "certify": {
    "pos": "v.",
    "en_def": "to officially say that something meets a standard",
    "cn_def": "認證;證明"
  },
  "outlast": {
    "pos": "v.",
    "en_def": "to continue working or living longer than something else",
    "cn_def": "比…更持久"
  },
  "appraise": {
    "pos": "v.",
    "en_def": "to judge how good or valuable something is",
    "cn_def": "評估;估價"
  },
  "redeploy": {
    "pos": "v.",
    "en_def": "to move workers to a different job or place",
    "cn_def": "重新調派;調職"
  },
  "compress": {
    "pos": "v.",
    "en_def": "to press or make something smaller",
    "cn_def": "壓縮"
  },
  "permeate": {
    "pos": "v.",
    "en_def": "to spread through every part of something",
    "cn_def": "滲透;遍及"
  },
  "reinvent": {
    "pos": "v.",
    "en_def": "to change something so much that it seems completely new",
    "cn_def": "徹底改造;重新發明"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job",
    "cn_def": "僱用"
  },
  "complicate": {
    "pos": "v.",
    "en_def": "to make something more difficult to understand or do",
    "cn_def": "使複雜化"
  },
  "decentralise": {
    "pos": "v.",
    "en_def": "to move control from one central place to many places",
    "cn_def": "分散(權力或管理)"
  },
  "dismantle": {
    "pos": "v.",
    "en_def": "to take a machine apart into pieces",
    "cn_def": "拆解;拆卸"
  },
  "dissect": {
    "pos": "v.",
    "en_def": "to examine something in great detail",
    "cn_def": "仔細剖析;解剖"
  },
  "reskill": {
    "pos": "v.",
    "en_def": "to learn new skills for a different job",
    "cn_def": "再培訓;學習新技能"
  },
  "defy": {
    "pos": "v.",
    "en_def": "to refuse to obey, or to seem impossible",
    "cn_def": "違抗;挑戰(常理)"
  },
  "reboot": {
    "pos": "v.",
    "en_def": "to turn a computer or machine off and on again",
    "cn_def": "重新開機"
  },
  "mount": {
    "pos": "v.",
    "en_def": "to fix something onto a wall, stand or vehicle",
    "cn_def": "安裝;架設"
  },
  "overturn": {
    "pos": "v.",
    "en_def": "to officially change a decision",
    "cn_def": "推翻;撤銷(判決)"
  },
  "crash": {
    "pos": "v.",
    "en_def": "(of a computer) to stop working suddenly",
    "cn_def": "當機;(電腦)崩潰"
  },
  "rotate": {
    "pos": "v.",
    "en_def": "to turn around a central point",
    "cn_def": "旋轉;輪流"
  },
  "leverage": {
    "pos": "v.",
    "en_def": "to use something you have to get the best result",
    "cn_def": "善用;利用"
  },
  "manoeuvre": {
    "pos": "v.",
    "en_def": "to move something carefully through a difficult space",
    "cn_def": "(靈活)操控;移動"
  },
  "dispense": {
    "pos": "v.",
    "en_def": "to give out medicine or other things",
    "cn_def": "配(藥);分發"
  },
  "resume": {
    "pos": "v.",
    "en_def": "to start again after a pause",
    "cn_def": "恢復;重新開始"
  },
  "weaken": {
    "pos": "v.",
    "en_def": "to make something less strong",
    "cn_def": "削弱"
  },
  "weld": {
    "pos": "v.",
    "en_def": "to join metal parts by melting them together",
    "cn_def": "焊接"
  },
  "forbid": {
    "pos": "v.",
    "en_def": "to say that someone must not do something",
    "cn_def": "禁止"
  },
  "bypass": {
    "pos": "v.",
    "en_def": "to go around something or avoid a rule or system",
    "cn_def": "繞過;略過"
  },
  "purchase": {
    "pos": "v.",
    "en_def": "to buy something, especially something expensive",
    "cn_def": "購買"
  },
  "discontinue": {
    "pos": "v.",
    "en_def": "to stop making or offering something",
    "cn_def": "停產;停止"
  },
  "discard": {
    "pos": "v.",
    "en_def": "to throw away something you no longer want",
    "cn_def": "丟棄"
  },
  "detach": {
    "pos": "v.",
    "en_def": "to separate one part from another",
    "cn_def": "拆下;分離"
  },
  "infringe": {
    "pos": "v.",
    "en_def": "to break a law or limit someone's rights",
    "cn_def": "侵犯;違反"
  },
  "dispatch": {
    "pos": "v.",
    "en_def": "to send something or someone somewhere",
    "cn_def": "派送;發送"
  },
  "strengthen": {
    "pos": "v.",
    "en_def": "to make something stronger",
    "cn_def": "強化;加強"
  },
  "devalue": {
    "pos": "v.",
    "en_def": "to make something seem less important or worth less",
    "cn_def": "貶低;使貶值"
  },
  "sacrifice": {
    "pos": "v.",
    "en_def": "to give up something valuable for something more important",
    "cn_def": "犧牲"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to take something back or remove it",
    "cn_def": "撤回;收回"
  }
};

const EXTRA_GLOSSES = {};
