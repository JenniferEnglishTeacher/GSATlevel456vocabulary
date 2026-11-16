// Topic 1 Subunit 5 Quiz Data: Work, Jobs & the Economy 工作、就業與經濟
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S05 - Work, Jobs & the Economy 工作、就業與經濟",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "workforce",
    "pos": "n.",
    "cn_def": "勞動力;全體員工",
    "en_def": "all the people who work in a company or country",
    "sentence": "As the {{BLANK}} gets older, Taiwan is using more robots in factories, but it still needs young skilled workers.",
    "cn": "隨著勞動力高齡化,台灣在工廠裡使用更多機器人,但仍然需要年輕的技術人才。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業;雇用",
    "en_def": "having paid work",
    "sentence": "AI may reduce {{BLANK}} in some office jobs, but it is also creating new jobs that did not exist ten years ago.",
    "cn": "人工智慧可能會減少某些辦公室工作的就業機會,但它也創造了十年前不存在的新工作。"
  },
  {
    "word": "unemployment",
    "pos": "n.",
    "cn_def": "失業",
    "en_def": "the state of not having a job",
    "sentence": "Some experts fear that {{BLANK}} will rise as machines take over simple tasks, while others expect new kinds of work to appear.",
    "cn": "有些專家擔心隨著機器接手簡單的工作,失業率會上升,而其他人則預期會出現新型態的工作。"
  },
  {
    "word": "redundant",
    "pos": "adj.",
    "cn_def": "被裁員的;多餘的",
    "en_def": "no longer needed for a job, so dismissed",
    "sentence": "Fifty call-centre workers were made {{BLANK}} after the company started using AI to answer phone calls.",
    "cn": "在公司開始使用人工智慧接聽電話後,五十名客服中心員工被裁員了。"
  },
  {
    "word": "layoff",
    "pos": "n.",
    "cn_def": "裁員",
    "en_def": "the act of ending workers' jobs because there is not enough work",
    "sentence": "The tech firm announced a big {{BLANK}} last month, so many young engineers are now looking for new positions.",
    "cn": "這家科技公司上個月宣布了大規模裁員,所以許多年輕工程師現在正在找新職位。"
  },
  {
    "word": "replace",
    "pos": "v.",
    "cn_def": "取代",
    "en_def": "to take the place of someone or something",
    "sentence": "Self-service machines have {{BLANK}}d many cashiers in supermarkets, but customers still ask staff for help with problems.",
    "cn": "自助機器已經取代了超市裡許多收銀員,但顧客遇到問題時仍會向店員求助。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力",
    "en_def": "how much work is done in a certain time",
    "sentence": "Office {{BLANK}} rose after the team began using AI to write reports, so the manager gave everyone a shorter Friday.",
    "cn": "團隊開始用人工智慧寫報告後,辦公室的生產力提升了,所以經理讓大家星期五提早下班。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "doing something well without wasting time or energy",
    "sentence": "The delivery company uses AI to plan routes, and this {{BLANK}} saves fuel and gets parcels to customers sooner.",
    "cn": "這家物流公司用人工智慧規劃路線,這樣的效率能節省燃料,並讓包裹更快送到顧客手上。"
  },
  {
    "word": "outsource",
    "pos": "v.",
    "cn_def": "外包",
    "en_def": "to pay another company to do some of your work",
    "sentence": "Many small shops {{BLANK}} their accounting to online services, because hiring a full-time accountant costs too much.",
    "cn": "許多小商店把會計工作外包給線上服務,因為聘請全職會計師的成本太高。"
  },
  {
    "word": "freelance",
    "pos": "adj.",
    "cn_def": "自由接案的",
    "en_def": "working for different companies, not employed by one",
    "sentence": "She is a {{BLANK}} designer, so she worries that AI image tools may take away some of her clients.",
    "cn": "她是一位自由接案的設計師,所以她擔心人工智慧繪圖工具可能會搶走她的一些客戶。"
  },
  {
    "word": "gig",
    "pos": "n.",
    "cn_def": "零工;臨時工作",
    "en_def": "a short job or piece of paid work",
    "sentence": "Many students do {{BLANK}} work like food delivery, because the hours are flexible, but the pay is not stable.",
    "cn": "許多學生做外送之類的零工,因為時間有彈性,但收入並不穩定。"
  },
  {
    "word": "retrain",
    "pos": "v.",
    "cn_def": "再培訓;重新訓練",
    "en_def": "to learn or teach new skills for a different job",
    "sentence": "The government pays factory workers to {{BLANK}} as technicians, so they can find jobs that machines cannot do.",
    "cn": "政府出錢讓工廠工人重新受訓成為技術人員,這樣他們就能找到機器做不來的工作。"
  },
  {
    "word": "upskill",
    "pos": "v.",
    "cn_def": "提升技能",
    "en_def": "to learn new skills to do your job better",
    "sentence": "Our company asked all staff to {{BLANK}} in data analysis, because managers now expect reports with clear charts.",
    "cn": "我們公司要求全體員工在資料分析方面提升技能,因為主管現在期望報告附有清楚的圖表。"
  },
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "工資",
    "en_def": "money paid to a worker, usually by the hour or week",
    "sentence": "Some workers fear that their {{BLANK}}s will fall if robots can do the same job for less money.",
    "cn": "有些工人擔心,如果機器人能用更少的錢做同樣的工作,他們的工資會下降。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水",
    "en_def": "fixed money paid to a worker every month",
    "sentence": "AI engineers earn a very high {{BLANK}}, so many university students now want to study computer science.",
    "cn": "人工智慧工程師的薪水非常高,所以現在許多大學生都想念資訊工程。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤;獲利",
    "en_def": "money a business makes after paying its costs",
    "sentence": "The online shop's {{BLANK}}s grew quickly after it used AI to suggest products, but some customers found the ads annoying.",
    "cn": "這家網路商店用人工智慧推薦商品後獲利快速成長,但有些顧客覺得廣告很煩人。"
  },
  {
    "word": "startup",
    "pos": "n.",
    "cn_def": "新創公司",
    "en_def": "a new small company, often in technology",
    "sentence": "My friend works at an AI {{BLANK}} in Taipei, and although the hours are long, she is learning a lot.",
    "cn": "我朋友在台北一家人工智慧新創公司工作,雖然工時很長,但她學到很多。"
  },
  {
    "word": "entrepreneur",
    "pos": "n.",
    "cn_def": "創業家;企業家",
    "en_def": "a person who starts their own business",
    "sentence": "The young {{BLANK}} used AI to design her logo and website, so she opened her online shop with very little money.",
    "cn": "這位年輕的創業家用人工智慧設計標誌和網站,所以她只花很少的錢就開了網路商店。"
  },
  {
    "word": "investor",
    "pos": "n.",
    "cn_def": "投資人",
    "en_def": "a person who puts money into a business to make more money",
    "sentence": "Many {{BLANK}}s are putting money into AI companies, but some warn that the market may be growing too fast.",
    "cn": "許多投資人正把錢投入人工智慧公司,但有些人警告市場可能成長得太快了。"
  },
  {
    "word": "manufacturing",
    "pos": "n.",
    "cn_def": "製造業",
    "en_def": "making goods in large numbers in factories",
    "sentence": "Robots now do many dangerous jobs in {{BLANK}}, so fewer workers are hurt, but the factories need fewer people.",
    "cn": "機器人現在在製造業中做許多危險的工作,所以受傷的工人變少了,但工廠需要的人力也減少了。"
  },
  {
    "word": "warehouse",
    "pos": "n.",
    "cn_def": "倉庫",
    "en_def": "a large building where goods are stored",
    "sentence": "In the online shop's {{BLANK}}, robots carry the shelves to the workers, so packing an order takes only a few minutes.",
    "cn": "在這家網路商店的倉庫裡,機器人把貨架搬到員工面前,所以包裝一張訂單只需要幾分鐘。"
  },
  {
    "word": "labour",
    "pos": "n.",
    "cn_def": "勞力;勞工",
    "en_def": "work, especially physical work; workers as a group",
    "sentence": "Farms are using drones and robots because there is not enough {{BLANK}} in the countryside, and young people prefer city jobs.",
    "cn": "農場正在使用無人機和機器人,因為鄉下的勞力不足,而且年輕人比較喜歡城市的工作。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職涯;事業",
    "en_def": "the jobs a person does during their working life",
    "sentence": "My sister changed her {{BLANK}} from accounting to data science, because she believed AI would change her old job.",
    "cn": "我姐姐把她的職涯從會計轉向資料科學,因為她相信人工智慧會改變她原本的工作。"
  },
  {
    "word": "obsolete",
    "pos": "adj.",
    "cn_def": "過時的;淘汰的",
    "en_def": "no longer used because something newer exists",
    "sentence": "Some skills, like typing fast, may become {{BLANK}}, but skills like teamwork will still be needed in the future.",
    "cn": "有些技能,例如快速打字,可能會變得過時,但團隊合作之類的技能未來仍然會被需要。"
  },
  {
    "word": "applicant",
    "pos": "n.",
    "cn_def": "申請人;應徵者",
    "en_def": "a person who applies for a job or place",
    "sentence": "Each job {{BLANK}} must complete an online test, and an AI system reads the answers before a manager sees them.",
    "cn": "每位應徵者都必須完成線上測驗,而人工智慧系統會在經理看到之前先讀過答案。"
  },
  {
    "word": "recruiter",
    "pos": "n.",
    "cn_def": "招募人員",
    "en_def": "a person who finds new workers for companies",
    "sentence": "The {{BLANK}} said she now uses AI to sort hundreds of CVs, but she still meets the final candidates in person.",
    "cn": "這位招募人員說她現在用人工智慧整理數百份履歷,但她仍會親自面試最後的人選。"
  },
  {
    "word": "shortage",
    "pos": "n.",
    "cn_def": "短缺;不足",
    "en_def": "a situation where there is not enough of something",
    "sentence": "There is a {{BLANK}} of nurses in many hospitals, so robots now deliver medicine, but patients still need human care.",
    "cn": "許多醫院護理師短缺,所以現在由機器人遞送藥物,但病人仍然需要人的照顧。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work",
    "sentence": "Many {{BLANK}}s now ask whether job seekers can use AI tools, so students should learn these skills before graduating.",
    "cn": "許多雇主現在會詢問求職者是否會使用人工智慧工具,所以學生應該在畢業前學會這些技能。"
  }
];

const MCQS = [
  {
    "q": "As the _____ gets older, Taiwan is using more robots in factories, but it still needs young skilled workers.",
    "options": [
      "textbook",
      "lecture",
      "impact",
      "workforce"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "AI may reduce _____ in some office jobs, but it is also creating new jobs that did not exist ten years ago.",
    "options": [
      "stereotype",
      "companionship",
      "employment",
      "minority"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Some experts fear that _____ will rise as machines take over simple tasks, while others expect new kinds of work to appear.",
    "options": [
      "unemployment",
      "infrastructure",
      "data",
      "syllabus"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Fifty call-centre workers were made _____ after the company started using AI to answer phone calls.",
    "options": [
      "dependent",
      "redundant",
      "sustainable",
      "reliable"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The tech firm announced a big _____ last month, so many young engineers are now looking for new positions.",
    "options": [
      "ethics",
      "framework",
      "layoff",
      "tutor"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Self-service machines have _____d many cashiers in supermarkets, but customers still ask staff for help with problems.",
    "options": [
      "malfunction",
      "replace",
      "clone",
      "customise"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Office _____ rose after the team began using AI to write reports, so the manager gave everyone a shorter Friday.",
    "options": [
      "productivity",
      "coursework",
      "resource",
      "concept"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The delivery company uses AI to plan routes, and this _____ saves fuel and gets parcels to customers sooner.",
    "options": [
      "stance",
      "homework",
      "originality",
      "efficiency"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Many small shops _____ their accounting to online services, because hiring a full-time accountant costs too much.",
    "options": [
      "expand",
      "plagiarise",
      "outsource",
      "argue"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "She is a _____ designer, so she worries that AI image tools may take away some of her clients.",
    "options": [
      "substantial",
      "freelance",
      "evident",
      "scarce"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Many students do _____ work like food delivery, because the hours are flexible, but the pay is not stable.",
    "options": [
      "keyword",
      "manipulation",
      "database",
      "gig"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The government pays factory workers to _____ as technicians, so they can find jobs that machines cannot do.",
    "options": [
      "retrain",
      "identify",
      "emphasise",
      "confront"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our company asked all staff to _____ in data analysis, because managers now expect reports with clear charts.",
    "options": [
      "transcribe",
      "digitise",
      "upskill",
      "indicate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Some workers fear that their _____s will fall if robots can do the same job for less money.",
    "options": [
      "wage",
      "coursework",
      "loophole",
      "bandwidth"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "AI engineers earn a very high _____, so many university students now want to study computer science.",
    "options": [
      "virus",
      "salary",
      "healthcare",
      "authentication"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The online shop's _____s grew quickly after it used AI to suggest products, but some customers found the ads annoying.",
    "options": [
      "aspect",
      "majority",
      "sector",
      "profit"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "My friend works at an AI _____ in Taipei, and although the hours are long, she is learning a lot.",
    "options": [
      "scam",
      "startup",
      "ramification",
      "smartphone"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The young _____ used AI to design her logo and website, so she opened her online shop with very little money.",
    "options": [
      "entrepreneur",
      "syllabus",
      "spam",
      "encryption"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Many _____s are putting money into AI companies, but some warn that the market may be growing too fast.",
    "options": [
      "percentage",
      "uncertainty",
      "investor",
      "sensor"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Robots now do many dangerous jobs in _____, so fewer workers are hurt, but the factories need fewer people.",
    "options": [
      "equivalent",
      "conflict",
      "approach",
      "manufacturing"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "In the online shop's _____, robots carry the shelves to the workers, so packing an order takes only a few minutes.",
    "options": [
      "guideline",
      "identity",
      "warehouse",
      "impact"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Farms are using drones and robots because there is not enough _____ in the countryside, and young people prefer city jobs.",
    "options": [
      "originality",
      "labour",
      "telemedicine",
      "computing"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "My sister changed her _____ from accounting to data science, because she believed AI would change her old job.",
    "options": [
      "drone",
      "dataset",
      "cooperation",
      "career"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Some skills, like typing fast, may become _____, but skills like teamwork will still be needed in the future.",
    "options": [
      "obsolete",
      "fundamental",
      "wearable",
      "self-paced"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Each job _____ must complete an online test, and an AI system reads the answers before a manager sees them.",
    "options": [
      "database",
      "quiz",
      "applicant",
      "dimension"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The _____ said she now uses AI to sort hundreds of CVs, but she still meets the final candidates in person.",
    "options": [
      "chip",
      "recruiter",
      "bias",
      "mechanism"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "There is a _____ of nurses in many hospitals, so robots now deliver medicine, but patients still need human care.",
    "options": [
      "shortage",
      "backup",
      "caption",
      "e-commerce"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Many _____s now ask whether job seekers can use AI tools, so students should learn these skills before graduating.",
    "options": [
      "function",
      "likelihood",
      "drone",
      "employer"
    ],
    "answer": 3,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "workforce": {
    "pos": "n.",
    "en_def": "all the people who work in a company or country",
    "cn_def": "勞動力;全體員工"
  },
  "employment": {
    "pos": "n.",
    "en_def": "having paid work",
    "cn_def": "就業;雇用"
  },
  "unemployment": {
    "pos": "n.",
    "en_def": "the state of not having a job",
    "cn_def": "失業"
  },
  "redundant": {
    "pos": "adj.",
    "en_def": "no longer needed for a job, so dismissed",
    "cn_def": "被裁員的;多餘的"
  },
  "layoff": {
    "pos": "n.",
    "en_def": "the act of ending workers' jobs because there is not enough work",
    "cn_def": "裁員"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to take the place of someone or something",
    "cn_def": "取代"
  },
  "productivity": {
    "pos": "n.",
    "en_def": "how much work is done in a certain time",
    "cn_def": "生產力"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "doing something well without wasting time or energy",
    "cn_def": "效率"
  },
  "outsource": {
    "pos": "v.",
    "en_def": "to pay another company to do some of your work",
    "cn_def": "外包"
  },
  "freelance": {
    "pos": "adj.",
    "en_def": "working for different companies, not employed by one",
    "cn_def": "自由接案的"
  },
  "gig": {
    "pos": "n.",
    "en_def": "a short job or piece of paid work",
    "cn_def": "零工;臨時工作"
  },
  "retrain": {
    "pos": "v.",
    "en_def": "to learn or teach new skills for a different job",
    "cn_def": "再培訓;重新訓練"
  },
  "upskill": {
    "pos": "v.",
    "en_def": "to learn new skills to do your job better",
    "cn_def": "提升技能"
  },
  "wage": {
    "pos": "n.",
    "en_def": "money paid to a worker, usually by the hour or week",
    "cn_def": "工資"
  },
  "salary": {
    "pos": "n.",
    "en_def": "fixed money paid to a worker every month",
    "cn_def": "薪水"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money a business makes after paying its costs",
    "cn_def": "利潤;獲利"
  },
  "startup": {
    "pos": "n.",
    "en_def": "a new small company, often in technology",
    "cn_def": "新創公司"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts their own business",
    "cn_def": "創業家;企業家"
  },
  "investor": {
    "pos": "n.",
    "en_def": "a person who puts money into a business to make more money",
    "cn_def": "投資人"
  },
  "manufacturing": {
    "pos": "n.",
    "en_def": "making goods in large numbers in factories",
    "cn_def": "製造業"
  },
  "warehouse": {
    "pos": "n.",
    "en_def": "a large building where goods are stored",
    "cn_def": "倉庫"
  },
  "labour": {
    "pos": "n.",
    "en_def": "work, especially physical work; workers as a group",
    "cn_def": "勞力;勞工"
  },
  "career": {
    "pos": "n.",
    "en_def": "the jobs a person does during their working life",
    "cn_def": "職涯;事業"
  },
  "obsolete": {
    "pos": "adj.",
    "en_def": "no longer used because something newer exists",
    "cn_def": "過時的;淘汰的"
  },
  "applicant": {
    "pos": "n.",
    "en_def": "a person who applies for a job or place",
    "cn_def": "申請人;應徵者"
  },
  "recruiter": {
    "pos": "n.",
    "en_def": "a person who finds new workers for companies",
    "cn_def": "招募人員"
  },
  "shortage": {
    "pos": "n.",
    "en_def": "a situation where there is not enough of something",
    "cn_def": "短缺;不足"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work",
    "cn_def": "雇主"
  },
  "textbook": {
    "pos": "n.",
    "en_def": "a book used for studying a subject",
    "cn_def": "教科書;課本"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to students on a subject",
    "cn_def": "講課;演講"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on something",
    "cn_def": "影響;衝擊"
  },
  "stereotype": {
    "pos": "n.",
    "en_def": "a fixed, too-simple idea about a group of people",
    "cn_def": "刻板印象"
  },
  "companionship": {
    "pos": "n.",
    "en_def": "the pleasure of having friendly company",
    "cn_def": "陪伴;友誼"
  },
  "minority": {
    "pos": "n.",
    "en_def": "less than half of a group",
    "cn_def": "少數"
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "basic systems like roads, power and internet that a society needs",
    "cn_def": "基礎建設"
  },
  "data": {
    "pos": "n.",
    "en_def": "facts and numbers collected for study",
    "cn_def": "數據;資料"
  },
  "syllabus": {
    "pos": "n.",
    "en_def": "a list of topics and plans for a course",
    "cn_def": "課程大綱"
  },
  "dependent": {
    "pos": "adj.",
    "en_def": "needing someone or something to survive or work",
    "cn_def": "依賴的"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue without harming the environment",
    "cn_def": "永續的;可持續的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted",
    "cn_def": "可靠的"
  },
  "ethics": {
    "pos": "n.",
    "en_def": "moral rules about what is right and wrong",
    "cn_def": "倫理;道德規範"
  },
  "framework": {
    "pos": "n.",
    "en_def": "a set of ideas or rules used to make decisions",
    "cn_def": "架構;框架"
  },
  "tutor": {
    "pos": "n.",
    "en_def": "a teacher who helps one student or a small group",
    "cn_def": "家教;導師"
  },
  "malfunction": {
    "pos": "v.",
    "en_def": "to fail to work in the correct way",
    "cn_def": "故障;運作失常"
  },
  "clone": {
    "pos": "v.",
    "en_def": "to make an exact copy of something",
    "cn_def": "複製;仿製"
  },
  "customise": {
    "pos": "v.",
    "en_def": "to change something to suit your own needs",
    "cn_def": "客製化;自訂"
  },
  "coursework": {
    "pos": "n.",
    "en_def": "work students do during a course that counts towards a grade",
    "cn_def": "課堂作業;平時作業"
  },
  "resource": {
    "pos": "n.",
    "en_def": "something useful such as money, materials or information",
    "cn_def": "資源"
  },
  "concept": {
    "pos": "n.",
    "en_def": "an idea or general understanding of something",
    "cn_def": "概念"
  },
  "stance": {
    "pos": "n.",
    "en_def": "a public opinion on an issue",
    "cn_def": "立場"
  },
  "homework": {
    "pos": "n.",
    "en_def": "schoolwork that students do at home",
    "cn_def": "家庭作業"
  },
  "originality": {
    "pos": "n.",
    "en_def": "the quality of being new and not copied",
    "cn_def": "原創性"
  },
  "expand": {
    "pos": "v.",
    "en_def": "to become or make bigger",
    "cn_def": "擴大;擴展"
  },
  "plagiarise": {
    "pos": "v.",
    "en_def": "to copy someone else's words or ideas as your own",
    "cn_def": "抄襲"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "substantial": {
    "pos": "adj.",
    "en_def": "large in amount or importance",
    "cn_def": "大量的;可觀的"
  },
  "evident": {
    "pos": "adj.",
    "en_def": "clear and easy to notice",
    "cn_def": "顯而易見的"
  },
  "scarce": {
    "pos": "adj.",
    "en_def": "not easy to find; not enough",
    "cn_def": "稀少的;缺乏的"
  },
  "keyword": {
    "pos": "n.",
    "en_def": "an important word you type to search for information",
    "cn_def": "關鍵字"
  },
  "manipulation": {
    "pos": "n.",
    "en_def": "dishonest control of people, facts or images",
    "cn_def": "操縱;竄改"
  },
  "database": {
    "pos": "n.",
    "en_def": "an organised collection of information stored on a computer",
    "cn_def": "資料庫"
  },
  "identify": {
    "pos": "v.",
    "en_def": "to recognise and name someone or something",
    "cn_def": "辨識;找出"
  },
  "emphasise": {
    "pos": "v.",
    "en_def": "to show that something is very important",
    "cn_def": "強調"
  },
  "confront": {
    "pos": "v.",
    "en_def": "to face and deal with a difficult problem",
    "cn_def": "面對;正視"
  },
  "transcribe": {
    "pos": "v.",
    "en_def": "to write down exactly what someone says",
    "cn_def": "轉錄;謄寫"
  },
  "digitise": {
    "pos": "v.",
    "en_def": "to change paper documents or pictures into computer files",
    "cn_def": "數位化"
  },
  "indicate": {
    "pos": "v.",
    "en_def": "to show or suggest that something is true",
    "cn_def": "顯示;表明"
  },
  "loophole": {
    "pos": "n.",
    "en_def": "a gap in a rule that lets people avoid it",
    "cn_def": "漏洞"
  },
  "bandwidth": {
    "pos": "n.",
    "en_def": "the amount of data an internet connection can carry",
    "cn_def": "頻寬"
  },
  "virus": {
    "pos": "n.",
    "en_def": "a program that copies itself and harms computers",
    "cn_def": "(電腦)病毒"
  },
  "healthcare": {
    "pos": "n.",
    "en_def": "services for looking after people's health",
    "cn_def": "醫療照護"
  },
  "authentication": {
    "pos": "n.",
    "en_def": "the process of proving who you are to a system",
    "cn_def": "身分驗證"
  },
  "aspect": {
    "pos": "n.",
    "en_def": "one part or feature of something",
    "cn_def": "方面;層面"
  },
  "majority": {
    "pos": "n.",
    "en_def": "more than half of a group",
    "cn_def": "大多數"
  },
  "sector": {
    "pos": "n.",
    "en_def": "one part of a country's economy or society",
    "cn_def": "部門;產業"
  },
  "scam": {
    "pos": "n.",
    "en_def": "a dishonest plan to get money from people",
    "cn_def": "詐騙"
  },
  "ramification": {
    "pos": "n.",
    "en_def": "a possible result of an action, often unexpected",
    "cn_def": "(意外的)後果;影響"
  },
  "smartphone": {
    "pos": "n.",
    "en_def": "a mobile phone that can use the internet and apps",
    "cn_def": "智慧型手機"
  },
  "spam": {
    "pos": "n.",
    "en_def": "unwanted messages sent to many people",
    "cn_def": "垃圾郵件"
  },
  "encryption": {
    "pos": "n.",
    "en_def": "changing data into a secret code so others cannot read it",
    "cn_def": "加密"
  },
  "percentage": {
    "pos": "n.",
    "en_def": "an amount shown as part of 100",
    "cn_def": "百分比"
  },
  "uncertainty": {
    "pos": "n.",
    "en_def": "a feeling of not being sure about something",
    "cn_def": "不確定性"
  },
  "sensor": {
    "pos": "n.",
    "en_def": "a device that notices light, heat, movement or sound",
    "cn_def": "感測器"
  },
  "equivalent": {
    "pos": "n.",
    "en_def": "something that has the same value or meaning",
    "cn_def": "相等物;同等的東西"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement",
    "cn_def": "衝突"
  },
  "approach": {
    "pos": "n.",
    "en_def": "a way of dealing with something",
    "cn_def": "方法;途徑"
  },
  "guideline": {
    "pos": "n.",
    "en_def": "advice or a rule about how to do something",
    "cn_def": "指引;準則"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person is; their name and personal details",
    "cn_def": "身分"
  },
  "telemedicine": {
    "pos": "n.",
    "en_def": "seeing a doctor through video or phone instead of in person",
    "cn_def": "遠距醫療"
  },
  "computing": {
    "pos": "n.",
    "en_def": "the use or study of computers",
    "cn_def": "電腦運算;計算"
  },
  "drone": {
    "pos": "n.",
    "en_def": "a small aircraft without a pilot, controlled from the ground",
    "cn_def": "無人機"
  },
  "dataset": {
    "pos": "n.",
    "en_def": "a large collection of information used by a computer",
    "cn_def": "資料集"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "working together to reach a shared goal",
    "cn_def": "合作;協力"
  },
  "fundamental": {
    "pos": "adj.",
    "en_def": "basic and very important",
    "cn_def": "基本的;根本的"
  },
  "wearable": {
    "pos": "adj.",
    "en_def": "designed to be worn on the body",
    "cn_def": "可穿戴的"
  },
  "self-paced": {
    "pos": "adj.",
    "en_def": "letting you learn at your own speed",
    "cn_def": "自主進度的"
  },
  "quiz": {
    "pos": "n.",
    "en_def": "a short test",
    "cn_def": "小考;測驗"
  },
  "dimension": {
    "pos": "n.",
    "en_def": "a part or feature of a situation",
    "cn_def": "面向;層面"
  },
  "chip": {
    "pos": "n.",
    "en_def": "a very small piece of material inside electronic devices",
    "cn_def": "晶片"
  },
  "bias": {
    "pos": "n.",
    "en_def": "unfair support for or against a group",
    "cn_def": "偏見;偏差"
  },
  "mechanism": {
    "pos": "n.",
    "en_def": "a system or process that does a particular job",
    "cn_def": "機制"
  },
  "backup": {
    "pos": "n.",
    "en_def": "an extra copy of data kept in case the original is lost",
    "cn_def": "備份"
  },
  "caption": {
    "pos": "n.",
    "en_def": "words on a screen that show what people are saying",
    "cn_def": "字幕;圖說"
  },
  "e-commerce": {
    "pos": "n.",
    "en_def": "buying and selling goods on the internet",
    "cn_def": "電子商務"
  },
  "function": {
    "pos": "n.",
    "en_def": "the job that something is designed to do",
    "cn_def": "功能"
  },
  "likelihood": {
    "pos": "n.",
    "en_def": "how probable something is",
    "cn_def": "可能性"
  }
};

const EXTRA_GLOSSES = {};
