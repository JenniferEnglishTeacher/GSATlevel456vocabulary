// Topic 7 Subunit 6 Quiz Data: Jobs, Economy & the Future of Work 工作、經濟與未來職場
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S06 - Jobs, Economy & the Future of Work 工作、經濟與未來職場",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "blue-collar",
    "pos": "adj.",
    "cn_def": "藍領的;勞力工作的",
    "en_def": "doing physical work, often in factories or building",
    "sentence": "Many {{BLANK}} workers worry about robots, but plumbers and electricians are still in high demand.",
    "cn": "許多藍領工人擔心機器人,但水電工和電工的需求仍然很高。"
  },
  {
    "word": "white-collar",
    "pos": "adj.",
    "cn_def": "白領的;辦公室工作的",
    "en_def": "doing office work rather than physical work",
    "sentence": "People once believed robots would only take factory jobs, but now AI is changing {{BLANK}} jobs like accounting too.",
    "cn": "人們曾經認為機器人只會搶走工廠工作,但現在人工智慧也在改變像會計這樣的白領工作。"
  },
  {
    "word": "unskilled",
    "pos": "adj.",
    "cn_def": "非技術性的;無專業技能的",
    "en_def": "not having special training for a job",
    "sentence": "Robots have replaced many {{BLANK}} jobs in warehouses, so the government offers free training courses for those workers.",
    "cn": "機器人已經取代了倉庫裡許多非技術性的工作,所以政府為那些工人提供免費的訓練課程。"
  },
  {
    "word": "skilled",
    "pos": "adj.",
    "cn_def": "有技術的;熟練的",
    "en_def": "having the training to do a job well",
    "sentence": "The company needs {{BLANK}} workers who can repair robots, but it is hard to find enough of them.",
    "cn": "公司需要能修理機器人的有技術的工人,但很難找到足夠的人手。"
  },
  {
    "word": "labourer",
    "pos": "n.",
    "cn_def": "勞工;體力勞動者",
    "en_def": "a person who does hard physical work",
    "sentence": "My grandfather worked as a {{BLANK}} on building sites, and he says machines now do the hardest lifting.",
    "cn": "我祖父以前在工地當勞工,他說機器現在負責最吃力的搬運工作。"
  },
  {
    "word": "job loss",
    "pos": "n.phr.",
    "cn_def": "失業;工作流失",
    "en_def": "when people lose their jobs",
    "sentence": "The new robots led to some {{BLANK}} at the factory, but the company also hired fifty technicians.",
    "cn": "新機器人導致工廠出現了一些工作流失,但公司也僱用了五十名技術人員。"
  },
  {
    "word": "redeploy",
    "pos": "v.",
    "cn_def": "重新調派;調職",
    "en_def": "to move workers to a different job or place",
    "sentence": "Instead of firing staff, the bank decided to {{BLANK}} them to customer service after the machines took over counting cash.",
    "cn": "機器接手點鈔工作後,銀行決定不解僱員工,而是把他們調派到客戶服務部門。"
  },
  {
    "word": "reskill",
    "pos": "v.",
    "cn_def": "再培訓;學習新技能",
    "en_def": "to learn new skills for a different job",
    "sentence": "Many cashiers chose to {{BLANK}} as computer helpers, and the company paid for their evening classes.",
    "cn": "許多收銀員選擇學習新技能轉當電腦助理,而公司替他們支付了夜間課程的費用。"
  },
  {
    "word": "workplace",
    "pos": "n.",
    "cn_def": "工作場所;職場",
    "en_def": "the place where people do their jobs",
    "sentence": "Robots have made the {{BLANK}} much safer, because they now handle the dangerous chemicals instead of people.",
    "cn": "機器人讓工作場所安全了許多,因為現在由它們而不是人來處理危險的化學品。"
  },
  {
    "word": "colleague",
    "pos": "n.",
    "cn_def": "同事",
    "en_def": "a person you work with",
    "sentence": "My {{BLANK}} was nervous about the new robot at first, but now she says it is the best helper she has ever had.",
    "cn": "我的同事一開始對新機器人很緊張,但她現在說那是她遇過最好的幫手。"
  },
  {
    "word": "manpower",
    "pos": "n.",
    "cn_def": "人力",
    "en_def": "the number of workers available for a job",
    "sentence": "The farm lacked {{BLANK}} during the harvest, so the owner rented a fruit-picking robot for two months.",
    "cn": "農場在收成期間缺乏人力,所以農場主人租了一台採果機器人兩個月。"
  },
  {
    "word": "headcount",
    "pos": "n.",
    "cn_def": "員工人數",
    "en_def": "the total number of people employed",
    "sentence": "The company reduced its {{BLANK}} after it bought robots, but it promised that no one would lose their job suddenly.",
    "cn": "公司購買機器人後減少了員工人數,但它承諾不會有人突然失去工作。"
  },
  {
    "word": "payroll",
    "pos": "n.",
    "cn_def": "薪資名冊;薪資總額",
    "en_def": "the list of workers a company pays, or the money paid",
    "sentence": "The factory's {{BLANK}} has fallen since the robots arrived, so the owners have more money to spend on research.",
    "cn": "自從機器人到來後,工廠的薪資總額下降了,所以老闆有更多錢可以花在研發上。"
  },
  {
    "word": "overtime",
    "pos": "n.",
    "cn_def": "加班",
    "en_def": "extra hours worked after the normal working day",
    "sentence": "Before the robots came, workers often did {{BLANK}} at night, but now most of them go home at five o'clock.",
    "cn": "在機器人來之前,工人常常在晚上加班,但現在大部分的人五點就回家了。"
  },
  {
    "word": "part-time",
    "pos": "adj.",
    "cn_def": "兼職的",
    "en_def": "working only some hours of the day or week",
    "sentence": "She took a {{BLANK}} job at the robot café while studying, and she learned how to fix the coffee machine.",
    "cn": "她在求學期間在機器人咖啡館找了一份兼職工作,而且學會了如何修理咖啡機。"
  },
  {
    "word": "pension",
    "pos": "n.",
    "cn_def": "退休金;養老金",
    "en_def": "money paid regularly to people after they stop working",
    "sentence": "Some economists suggest a tax on robots to pay for {{BLANK}}, because there will be fewer young workers in the future.",
    "cn": "一些經濟學家建議對機器人課稅來支付退休金,因為未來的年輕勞工會變少。"
  },
  {
    "word": "robot tax",
    "pos": "n.phr.",
    "cn_def": "機器人稅",
    "en_def": "a tax on companies that use robots instead of workers",
    "sentence": "Supporters say a {{BLANK}} could pay for training courses, but business leaders argue that it would slow down progress.",
    "cn": "支持者說機器人稅可以支付訓練課程的費用,但企業領袖認為那會拖慢進步。"
  },
  {
    "word": "competitor",
    "pos": "n.",
    "cn_def": "競爭對手",
    "en_def": "a company that tries to sell more than another",
    "sentence": "Our {{BLANK}} started using delivery drones last year, so our company had to find a faster way to send parcels.",
    "cn": "我們的競爭對手去年開始使用送貨無人機,所以我們公司必須找到更快寄送包裹的方法。"
  },
  {
    "word": "market share",
    "pos": "n.phr.",
    "cn_def": "市占率",
    "en_def": "the part of total sales a company has",
    "sentence": "The company gained {{BLANK}} after it lowered prices, because its new robots made production much cheaper.",
    "cn": "公司降價後獲得了更多市占率,因為它的新機器人讓生產成本便宜了許多。"
  },
  {
    "word": "economies of scale",
    "pos": "n.phr.",
    "cn_def": "規模經濟",
    "en_def": "lower costs per item when you produce a lot",
    "sentence": "Big factories enjoy {{BLANK}}, so they can buy expensive robots that small workshops cannot afford.",
    "cn": "大型工廠享有規模經濟,所以它們能購買小型工坊負擔不起的昂貴機器人。"
  },
  {
    "word": "workweek",
    "pos": "n.",
    "cn_def": "工作週;每週工時",
    "en_def": "the number of hours or days people work each week",
    "sentence": "Some experts believe robots could give us a shorter {{BLANK}}, so people would have more time for family and hobbies.",
    "cn": "一些專家認為機器人能讓我們的每週工時變短,這樣人們就會有更多時間陪伴家人和從事嗜好。"
  },
  {
    "word": "hire",
    "pos": "v.",
    "cn_def": "僱用",
    "en_def": "to give someone a job",
    "sentence": "The hospital plans to {{BLANK}} more nurses this year, although it has also bought robots to deliver medicine.",
    "cn": "醫院計畫今年僱用更多護理師,雖然它也買了送藥的機器人。"
  },
  {
    "word": "vacancy",
    "pos": "n.",
    "cn_def": "職缺",
    "en_def": "a job that is available for someone to do",
    "sentence": "There is a {{BLANK}} for a robot technician at the airport, and the job offers good training for young people.",
    "cn": "機場有一個機器人技術員的職缺,而且這份工作為年輕人提供很好的訓練。"
  },
  {
    "word": "jobseeker",
    "pos": "n.",
    "cn_def": "求職者",
    "en_def": "a person who is looking for a job",
    "sentence": "Every {{BLANK}} at the job fair was asked about computer skills, because most companies now use some kind of automation.",
    "cn": "就業博覽會上的每一位求職者都被問到電腦技能,因為大多數公司現在都使用某種自動化。"
  },
  {
    "word": "craftsman",
    "pos": "n.",
    "cn_def": "工匠;手藝人",
    "en_def": "a skilled person who makes things by hand",
    "sentence": "The old {{BLANK}} still makes chairs by hand, and customers pay more because no machine can copy his work exactly.",
    "cn": "這位老工匠仍然手工製作椅子,顧客願意付更多錢,因為沒有機器能完全複製他的作品。"
  },
  {
    "word": "understaffed",
    "pos": "adj.",
    "cn_def": "人手不足的",
    "en_def": "not having enough workers",
    "sentence": "The restaurant was {{BLANK}} during the holidays, so the owner borrowed a robot waiter from his brother's shop.",
    "cn": "這家餐廳在假期期間人手不足,所以老闆向他哥哥的店借了一台機器人服務生。"
  },
  {
    "word": "time-consuming",
    "pos": "adj.",
    "cn_def": "耗時的",
    "en_def": "taking a lot of time",
    "sentence": "Checking every bottle by hand was {{BLANK}}, so the company bought a camera system that checks them in seconds.",
    "cn": "用人工檢查每個瓶子很耗時,所以公司買了一套能在幾秒內檢查完畢的攝影系統。"
  },
  {
    "word": "cost-saving",
    "pos": "adj.",
    "cn_def": "節省成本的",
    "en_def": "helping to spend less money",
    "sentence": "The robots were a {{BLANK}} idea at first, but the repair bills were higher than the managers expected.",
    "cn": "機器人起初是一個節省成本的點子,但維修費用比經理們預期的還要高。"
  }
];

const MCQS = [
  {
    "q": "Many _____ workers worry about robots, but plumbers and electricians are still in high demand.",
    "options": [
      "adjustable",
      "blue-collar",
      "superior",
      "defective"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "People once believed robots would only take factory jobs, but now AI is changing _____ jobs like accounting too.",
    "options": [
      "modular",
      "seamless",
      "white-collar",
      "industrial"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Robots have replaced many _____ jobs in warehouses, so the government offers free training courses for those workers.",
    "options": [
      "applicable",
      "tireless",
      "mechanical",
      "unskilled"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The company needs _____ workers who can repair robots, but it is hard to find enough of them.",
    "options": [
      "skilled",
      "customary",
      "minute",
      "seamless"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "My grandfather worked as a _____ on building sites, and he says machines now do the hardest lifting.",
    "options": [
      "overview",
      "labourer",
      "stadium",
      "courier"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The new robots led to some _____ at the factory, but the company also hired fifty technicians.",
    "options": [
      "robot vacuum",
      "robot rights",
      "job loss",
      "motion capture"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Instead of firing staff, the bank decided to _____ them to customer service after the machines took over counting cash.",
    "options": [
      "dispatch",
      "shield",
      "halt",
      "redeploy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Many cashiers chose to _____ as computer helpers, and the company paid for their evening classes.",
    "options": [
      "reskill",
      "nullify",
      "entrust",
      "withdraw"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Robots have made the _____ much safer, because they now handle the dangerous chemicals instead of people.",
    "options": [
      "channel",
      "proposition",
      "incision",
      "workplace"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "My _____ was nervous about the new robot at first, but now she says it is the best helper she has ever had.",
    "options": [
      "lawnmower",
      "colleague",
      "watchdog",
      "esports"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The farm lacked _____ during the harvest, so the owner rented a fruit-picking robot for two months.",
    "options": [
      "sportsmanship",
      "upheaval",
      "manpower",
      "dignity"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The company reduced its _____ after it bought robots, but it promised that no one would lose their job suddenly.",
    "options": [
      "headcount",
      "advancement",
      "cluster",
      "adversary"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The factory's _____ has fallen since the robots arrived, so the owners have more money to spend on research.",
    "options": [
      "GPS",
      "wiring",
      "watchdog",
      "payroll"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Before the robots came, workers often did _____ at night, but now most of them go home at five o'clock.",
    "options": [
      "vicinity",
      "demise",
      "overtime",
      "lens"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "She took a _____ job at the robot café while studying, and she learned how to fix the coffee machine.",
    "options": [
      "economic",
      "part-time",
      "eligible",
      "delicate"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Some economists suggest a tax on robots to pay for _____, because there will be fewer young workers in the future.",
    "options": [
      "pension",
      "tournament",
      "payload",
      "joystick"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Supporters say a _____ could pay for training courses, but business leaders argue that it would slow down progress.",
    "options": [
      "public opinion",
      "keyhole surgery",
      "robot tax",
      "uncanny valley"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Our _____ started using delivery drones last year, so our company had to find a faster way to send parcels.",
    "options": [
      "axle",
      "competitor",
      "errand",
      "patent"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company gained _____ after it lowered prices, because its new robots made production much cheaper.",
    "options": [
      "vending machine",
      "care home",
      "science fiction",
      "market share"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Big factories enjoy _____, so they can buy expensive robots that small workshops cannot afford.",
    "options": [
      "economies of scale",
      "smart home",
      "line judge",
      "conveyor belt"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Some experts believe robots could give us a shorter _____, so people would have more time for family and hobbies.",
    "options": [
      "breakdown",
      "hallmark",
      "workweek",
      "channel"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The hospital plans to _____ more nurses this year, although it has also bought robots to deliver medicine.",
    "options": [
      "counter",
      "execute",
      "dispense",
      "hire"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "There is a _____ for a robot technician at the airport, and the job offers good training for young people.",
    "options": [
      "vacancy",
      "machinery",
      "titanium",
      "limb"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Every _____ at the job fair was asked about computer skills, because most companies now use some kind of automation.",
    "options": [
      "sportsmanship",
      "jobseeker",
      "championship",
      "transaction"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The old _____ still makes chairs by hand, and customers pay more because no machine can copy his work exactly.",
    "options": [
      "pitfall",
      "yardstick",
      "craftsman",
      "realm"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The restaurant was _____ during the holidays, so the owner borrowed a robot waiter from his brother's shop.",
    "options": [
      "lightweight",
      "understaffed",
      "sleek",
      "applicable"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Checking every bottle by hand was _____, so the company bought a camera system that checks them in seconds.",
    "options": [
      "wireless",
      "delicate",
      "rogue",
      "time-consuming"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The robots were a _____ idea at first, but the repair bills were higher than the managers expected.",
    "options": [
      "cost-saving",
      "trustworthy",
      "specialised",
      "practical"
    ],
    "answer": 0,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "blue-collar": {
    "pos": "adj.",
    "en_def": "doing physical work, often in factories or building",
    "cn_def": "藍領的;勞力工作的"
  },
  "white-collar": {
    "pos": "adj.",
    "en_def": "doing office work rather than physical work",
    "cn_def": "白領的;辦公室工作的"
  },
  "unskilled": {
    "pos": "adj.",
    "en_def": "not having special training for a job",
    "cn_def": "非技術性的;無專業技能的"
  },
  "skilled": {
    "pos": "adj.",
    "en_def": "having the training to do a job well",
    "cn_def": "有技術的;熟練的"
  },
  "labourer": {
    "pos": "n.",
    "en_def": "a person who does hard physical work",
    "cn_def": "勞工;體力勞動者"
  },
  "job loss": {
    "pos": "n.phr.",
    "en_def": "when people lose their jobs",
    "cn_def": "失業;工作流失"
  },
  "redeploy": {
    "pos": "v.",
    "en_def": "to move workers to a different job or place",
    "cn_def": "重新調派;調職"
  },
  "reskill": {
    "pos": "v.",
    "en_def": "to learn new skills for a different job",
    "cn_def": "再培訓;學習新技能"
  },
  "workplace": {
    "pos": "n.",
    "en_def": "the place where people do their jobs",
    "cn_def": "工作場所;職場"
  },
  "colleague": {
    "pos": "n.",
    "en_def": "a person you work with",
    "cn_def": "同事"
  },
  "manpower": {
    "pos": "n.",
    "en_def": "the number of workers available for a job",
    "cn_def": "人力"
  },
  "headcount": {
    "pos": "n.",
    "en_def": "the total number of people employed",
    "cn_def": "員工人數"
  },
  "payroll": {
    "pos": "n.",
    "en_def": "the list of workers a company pays, or the money paid",
    "cn_def": "薪資名冊;薪資總額"
  },
  "overtime": {
    "pos": "n.",
    "en_def": "extra hours worked after the normal working day",
    "cn_def": "加班"
  },
  "part-time": {
    "pos": "adj.",
    "en_def": "working only some hours of the day or week",
    "cn_def": "兼職的"
  },
  "pension": {
    "pos": "n.",
    "en_def": "money paid regularly to people after they stop working",
    "cn_def": "退休金;養老金"
  },
  "robot tax": {
    "pos": "n.phr.",
    "en_def": "a tax on companies that use robots instead of workers",
    "cn_def": "機器人稅"
  },
  "competitor": {
    "pos": "n.",
    "en_def": "a company that tries to sell more than another",
    "cn_def": "競爭對手"
  },
  "market share": {
    "pos": "n.phr.",
    "en_def": "the part of total sales a company has",
    "cn_def": "市占率"
  },
  "economies of scale": {
    "pos": "n.phr.",
    "en_def": "lower costs per item when you produce a lot",
    "cn_def": "規模經濟"
  },
  "workweek": {
    "pos": "n.",
    "en_def": "the number of hours or days people work each week",
    "cn_def": "工作週;每週工時"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job",
    "cn_def": "僱用"
  },
  "vacancy": {
    "pos": "n.",
    "en_def": "a job that is available for someone to do",
    "cn_def": "職缺"
  },
  "jobseeker": {
    "pos": "n.",
    "en_def": "a person who is looking for a job",
    "cn_def": "求職者"
  },
  "craftsman": {
    "pos": "n.",
    "en_def": "a skilled person who makes things by hand",
    "cn_def": "工匠;手藝人"
  },
  "understaffed": {
    "pos": "adj.",
    "en_def": "not having enough workers",
    "cn_def": "人手不足的"
  },
  "time-consuming": {
    "pos": "adj.",
    "en_def": "taking a lot of time",
    "cn_def": "耗時的"
  },
  "cost-saving": {
    "pos": "adj.",
    "en_def": "helping to spend less money",
    "cn_def": "節省成本的"
  },
  "adjustable": {
    "pos": "adj.",
    "en_def": "able to be changed to suit different needs",
    "cn_def": "可調整的"
  },
  "superior": {
    "pos": "adj.",
    "en_def": "better than others in quality",
    "cn_def": "較優的;優越的"
  },
  "defective": {
    "pos": "adj.",
    "en_def": "not made correctly; not working properly",
    "cn_def": "有瑕疵的;故障的"
  },
  "modular": {
    "pos": "adj.",
    "en_def": "made of separate parts that can be joined or replaced",
    "cn_def": "模組化的"
  },
  "seamless": {
    "pos": "adj.",
    "en_def": "smooth and without problems or breaks",
    "cn_def": "無縫的;流暢的"
  },
  "industrial": {
    "pos": "adj.",
    "en_def": "connected with factories and making goods",
    "cn_def": "工業的"
  },
  "applicable": {
    "pos": "adj.",
    "en_def": "affecting or relevant to a person or situation",
    "cn_def": "適用的"
  },
  "tireless": {
    "pos": "adj.",
    "en_def": "working hard without getting tired",
    "cn_def": "不知疲倦的"
  },
  "mechanical": {
    "pos": "adj.",
    "en_def": "operated by machinery; connected with machines",
    "cn_def": "機械的"
  },
  "customary": {
    "pos": "adj.",
    "en_def": "usual or traditional in a situation",
    "cn_def": "慣例的;習慣的"
  },
  "minute": {
    "pos": "adj.",
    "en_def": "extremely small",
    "cn_def": "微小的"
  },
  "overview": {
    "pos": "n.",
    "en_def": "a short description of the main points",
    "cn_def": "概述;概要"
  },
  "stadium": {
    "pos": "n.",
    "en_def": "a large sports ground with seats around it",
    "cn_def": "體育場"
  },
  "courier": {
    "pos": "n.",
    "en_def": "a person or company that delivers packages",
    "cn_def": "快遞員;快遞公司"
  },
  "robot vacuum": {
    "pos": "n.phr.",
    "en_def": "a small machine that cleans floors by itself",
    "cn_def": "掃地機器人"
  },
  "robot rights": {
    "pos": "n.phr.",
    "en_def": "the idea that advanced robots should have legal protections",
    "cn_def": "機器人權利"
  },
  "motion capture": {
    "pos": "n.phr.",
    "en_def": "recording body movements with sensors to study them",
    "cn_def": "動作捕捉"
  },
  "dispatch": {
    "pos": "v.",
    "en_def": "to send something or someone somewhere",
    "cn_def": "派送;發送"
  },
  "shield": {
    "pos": "v.",
    "en_def": "to protect someone or something from harm",
    "cn_def": "保護;遮擋"
  },
  "halt": {
    "pos": "v.",
    "en_def": "to stop something completely",
    "cn_def": "停止;中止"
  },
  "nullify": {
    "pos": "v.",
    "en_def": "to make something have no effect",
    "cn_def": "使無效;抵銷"
  },
  "entrust": {
    "pos": "v.",
    "en_def": "to give someone the job of looking after something",
    "cn_def": "託付;委託"
  },
  "withdraw": {
    "pos": "v.",
    "en_def": "to take something back or remove it",
    "cn_def": "撤回;收回"
  },
  "channel": {
    "pos": "n.",
    "en_def": "a way of sending information or goods",
    "cn_def": "管道;頻道"
  },
  "proposition": {
    "pos": "n.",
    "en_def": "an idea, offer or plan to consider",
    "cn_def": "提議;主張"
  },
  "incision": {
    "pos": "n.",
    "en_def": "a cut made into the body during an operation",
    "cn_def": "切口"
  },
  "lawnmower": {
    "pos": "n.",
    "en_def": "a machine for cutting grass",
    "cn_def": "割草機"
  },
  "watchdog": {
    "pos": "n.",
    "en_def": "a group that checks that companies follow the rules",
    "cn_def": "監督機構"
  },
  "esports": {
    "pos": "n.",
    "en_def": "competitive video gaming watched by audiences",
    "cn_def": "電子競技"
  },
  "sportsmanship": {
    "pos": "n.",
    "en_def": "fair and polite behaviour when playing sports",
    "cn_def": "運動家精神"
  },
  "upheaval": {
    "pos": "n.",
    "en_def": "a big change that causes confusion or difficulty",
    "cn_def": "劇變;動盪"
  },
  "dignity": {
    "pos": "n.",
    "en_def": "the feeling of being respected and valued",
    "cn_def": "尊嚴"
  },
  "advancement": {
    "pos": "n.",
    "en_def": "progress or development in something",
    "cn_def": "進步;發展"
  },
  "cluster": {
    "pos": "n.",
    "en_def": "a group of similar things close together",
    "cn_def": "群聚;聚落"
  },
  "adversary": {
    "pos": "n.",
    "en_def": "an enemy or opponent",
    "cn_def": "對手;敵手"
  },
  "gps": {
    "pos": "n.",
    "en_def": "a system that uses satellites to show your location",
    "cn_def": "全球定位系統"
  },
  "wiring": {
    "pos": "n.",
    "en_def": "the system of wires inside a machine",
    "cn_def": "線路;配線"
  },
  "vicinity": {
    "pos": "n.",
    "en_def": "the area near a particular place",
    "cn_def": "附近;鄰近地區"
  },
  "demise": {
    "pos": "n.",
    "en_def": "the end or failure of something",
    "cn_def": "消亡;倒閉"
  },
  "lens": {
    "pos": "n.",
    "en_def": "curved glass that helps a camera see clearly",
    "cn_def": "鏡頭;透鏡"
  },
  "economic": {
    "pos": "adj.",
    "en_def": "connected with trade, industry and money",
    "cn_def": "經濟的"
  },
  "eligible": {
    "pos": "adj.",
    "en_def": "allowed to do or receive something",
    "cn_def": "有資格的;符合條件的"
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "easily broken or damaged; needing care",
    "cn_def": "脆弱的;精細的"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a sports competition with many games or rounds",
    "cn_def": "錦標賽;聯賽"
  },
  "payload": {
    "pos": "n.",
    "en_def": "the load that a vehicle or drone carries",
    "cn_def": "酬載;載重"
  },
  "joystick": {
    "pos": "n.",
    "en_def": "a stick you move to control a machine or game",
    "cn_def": "搖桿;操縱桿"
  },
  "public opinion": {
    "pos": "n.phr.",
    "en_def": "what most people in a society think",
    "cn_def": "輿論;民意"
  },
  "keyhole surgery": {
    "pos": "n.phr.",
    "en_def": "an operation done through very small cuts",
    "cn_def": "微創手術;內視鏡手術"
  },
  "uncanny valley": {
    "pos": "n.phr.",
    "en_def": "the uneasy feeling when a robot looks almost but not quite human",
    "cn_def": "恐怖谷(效應)"
  },
  "axle": {
    "pos": "n.",
    "en_def": "a rod that connects and turns two wheels",
    "cn_def": "車軸;輪軸"
  },
  "errand": {
    "pos": "n.",
    "en_def": "a short trip to buy or deliver something",
    "cn_def": "跑腿;差事"
  },
  "patent": {
    "pos": "n.",
    "en_def": "an official right to be the only one to make an invention",
    "cn_def": "專利"
  },
  "vending machine": {
    "pos": "n.phr.",
    "en_def": "a machine that sells drinks or snacks",
    "cn_def": "自動販賣機"
  },
  "care home": {
    "pos": "n.phr.",
    "en_def": "a place where old people live and are looked after",
    "cn_def": "安養院;養護中心"
  },
  "science fiction": {
    "pos": "n.phr.",
    "en_def": "stories about imagined future science and technology",
    "cn_def": "科幻小說;科幻作品"
  },
  "smart home": {
    "pos": "n.phr.",
    "en_def": "a house where devices are controlled by the internet",
    "cn_def": "智慧家庭;智慧住宅"
  },
  "line judge": {
    "pos": "n.phr.",
    "en_def": "an official who decides if a ball is in or out",
    "cn_def": "司線員;邊線裁判"
  },
  "conveyor belt": {
    "pos": "n.phr.",
    "en_def": "a moving belt that carries things from place to place",
    "cn_def": "輸送帶"
  },
  "breakdown": {
    "pos": "n.",
    "en_def": "a failure of a machine to work",
    "cn_def": "故障;崩潰"
  },
  "hallmark": {
    "pos": "n.",
    "en_def": "a typical feature that shows what something is like",
    "cn_def": "特點;標誌"
  },
  "counter": {
    "pos": "v.",
    "en_def": "to act against something or reply to an argument",
    "cn_def": "反駁;對抗"
  },
  "execute": {
    "pos": "v.",
    "en_def": "to carry out a plan, order or task",
    "cn_def": "執行"
  },
  "dispense": {
    "pos": "v.",
    "en_def": "to give out medicine or other things",
    "cn_def": "配(藥);分發"
  },
  "machinery": {
    "pos": "n.",
    "en_def": "machines in general, especially large ones",
    "cn_def": "機械;機器(總稱)"
  },
  "titanium": {
    "pos": "n.",
    "en_def": "a strong, light, silver-coloured metal",
    "cn_def": "鈦"
  },
  "limb": {
    "pos": "n.",
    "en_def": "an arm or a leg",
    "cn_def": "肢體;四肢"
  },
  "championship": {
    "pos": "n.",
    "en_def": "a competition to find the best player or team",
    "cn_def": "冠軍賽;錦標賽"
  },
  "transaction": {
    "pos": "n.",
    "en_def": "an act of buying or selling something",
    "cn_def": "交易"
  },
  "pitfall": {
    "pos": "n.",
    "en_def": "a hidden problem or danger",
    "cn_def": "陷阱;隱患"
  },
  "yardstick": {
    "pos": "n.",
    "en_def": "a standard used to judge or compare things",
    "cn_def": "衡量標準;準繩"
  },
  "realm": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範疇"
  },
  "lightweight": {
    "pos": "adj.",
    "en_def": "not heavy; easy to carry",
    "cn_def": "輕量的;重量輕的"
  },
  "sleek": {
    "pos": "adj.",
    "en_def": "smooth, shiny and attractive in shape",
    "cn_def": "線條流暢的;時髦的"
  },
  "wireless": {
    "pos": "adj.",
    "en_def": "working without wires, using radio signals",
    "cn_def": "無線的"
  },
  "rogue": {
    "pos": "adj.",
    "en_def": "behaving differently from what is expected, often dangerously",
    "cn_def": "失控的;脫序的"
  },
  "trustworthy": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "值得信賴的"
  },
  "specialised": {
    "pos": "adj.",
    "en_def": "designed for one particular purpose",
    "cn_def": "專門的;專業化的"
  },
  "practical": {
    "pos": "adj.",
    "en_def": "useful and suitable for real situations",
    "cn_def": "實用的"
  }
};

const EXTRA_GLOSSES = {};
