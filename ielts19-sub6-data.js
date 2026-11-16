// Topic 19 Subunit 6 Quiz Data: Healthy Lifestyle & Wellness 健康生活型態
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S06 - Healthy Lifestyle & Wellness 健康生活型態",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "healthy eating",
    "pos": "n.phr.",
    "cn_def": "健康飲食",
    "en_def": "choosing food that is good for your body",
    "sentence": "Our school promotes {{BLANK}}, so the canteen now serves more vegetables and fewer fried foods.",
    "cn": "我們學校推廣健康飲食,所以餐廳現在供應更多蔬菜、更少油炸食物。"
  },
  {
    "word": "physical activity",
    "pos": "n.phr.",
    "cn_def": "身體活動",
    "en_def": "movement of the body, such as walking or sport",
    "sentence": "Children need at least an hour of {{BLANK}} every day, but many spend most of their free time on phones.",
    "cn": "孩子每天至少需要一小時的身體活動,但許多人把大部分空閒時間花在手機上。"
  },
  {
    "word": "overweight",
    "pos": "adj.",
    "cn_def": "過重的",
    "en_def": "heavier than is healthy",
    "sentence": "The doctor told my uncle that he was {{BLANK}}, so he started walking to work instead of driving.",
    "cn": "醫生告訴我叔叔他體重過重,所以他開始走路上班而不是開車。"
  },
  {
    "word": "underweight",
    "pos": "adj.",
    "cn_def": "過輕的",
    "en_def": "lighter than is healthy",
    "sentence": "Some teenage girls are {{BLANK}} because they eat too little, so the school nurse talks to them about healthy meals.",
    "cn": "有些少女因為吃得太少而體重過輕,所以學校護理師會和她們談健康的飲食。"
  },
  {
    "word": "body mass index",
    "pos": "n.phr.",
    "cn_def": "身體質量指數;BMI",
    "en_def": "a number based on weight and height used to judge health",
    "sentence": "Your {{BLANK}} is calculated from your height and weight, but it does not show how much muscle you have.",
    "cn": "你的身體質量指數是由身高和體重計算出來的,但它無法顯示你有多少肌肉。"
  },
  {
    "word": "waistline",
    "pos": "n.",
    "cn_def": "腰圍",
    "en_def": "the size of the middle of your body",
    "sentence": "Doctors say a large {{BLANK}} is a warning sign, because fat around the stomach is linked to heart disease.",
    "cn": "醫生說腰圍過大是一個警訊,因為腹部脂肪與心臟病有關。"
  },
  {
    "word": "fast food",
    "pos": "n.phr.",
    "cn_def": "速食",
    "en_def": "quick, cheap food such as burgers and fries",
    "sentence": "Eating {{BLANK}} every day is bad for your health, but it is popular because it is quick and cheap.",
    "cn": "每天吃速食對健康不好,但它因為又快又便宜而很受歡迎。"
  },
  {
    "word": "portion size",
    "pos": "n.phr.",
    "cn_def": "份量",
    "en_def": "the amount of food served to one person",
    "sentence": "{{BLANK}} in restaurants have grown over the years, so many people eat more than they really need.",
    "cn": "多年來餐廳的份量越來越大,所以許多人吃得比實際需要的更多。"
  },
  {
    "word": "salt",
    "pos": "n.",
    "cn_def": "鹽",
    "en_def": "a white substance used to flavour food",
    "sentence": "Instant noodles contain a lot of {{BLANK}}, so you should not drink all the soup if you have high blood pressure.",
    "cn": "泡麵含有大量的鹽,所以如果你有高血壓,就不應該把湯喝光。"
  },
  {
    "word": "sleep deprivation",
    "pos": "n.phr.",
    "cn_def": "睡眠不足",
    "en_def": "not getting enough sleep",
    "sentence": "Many high school students suffer from {{BLANK}}, because they study late and use their phones in bed.",
    "cn": "許多高中生睡眠不足,因為他們讀書讀到很晚,又在床上滑手機。"
  },
  {
    "word": "bedtime",
    "pos": "n.",
    "cn_def": "就寢時間",
    "en_def": "the time when you usually go to bed",
    "sentence": "Experts say you should stop using screens an hour before {{BLANK}}, or you may find it hard to fall asleep.",
    "cn": "專家說你應該在就寢時間前一小時停止使用螢幕,否則可能難以入睡。"
  },
  {
    "word": "step count",
    "pos": "n.phr.",
    "cn_def": "步數",
    "en_def": "the number of steps you walk in a day",
    "sentence": "My father checks his {{BLANK}} every evening, and he takes a walk if it is under eight thousand.",
    "cn": "我爸爸每天晚上都會查看他的步數,如果不到八千步他就會出去散步。"
  },
  {
    "word": "tai chi",
    "pos": "n.",
    "cn_def": "太極拳",
    "en_def": "a slow Chinese exercise of gentle movements",
    "sentence": "Every morning a group of seniors practise {{BLANK}} in the park, because it improves balance and calms the mind.",
    "cn": "每天早上一群長者在公園練太極拳,因為它能改善平衡感並讓心情平靜。"
  },
  {
    "word": "health app",
    "pos": "n.phr.",
    "cn_def": "健康應用程式",
    "en_def": "a phone program that tracks your health",
    "sentence": "I use a {{BLANK}} to record how much water I drink, and it reminds me when I forget.",
    "cn": "我用一個健康應用程式記錄我喝了多少水,我忘記時它會提醒我。"
  },
  {
    "word": "smartwatch",
    "pos": "n.",
    "cn_def": "智慧手錶",
    "en_def": "a watch that works like a small computer",
    "sentence": "My mother's {{BLANK}} measures her heart rate while she sleeps, so she knows how well she rested.",
    "cn": "我媽媽的智慧手錶會在她睡覺時測量心率,所以她知道自己休息得好不好。"
  },
  {
    "word": "mental health",
    "pos": "n.phr.",
    "cn_def": "心理健康",
    "en_def": "the health of a person's mind and feelings",
    "sentence": "Our school now has a counsellor for {{BLANK}}, because many students feel worried about exams.",
    "cn": "我們學校現在有一位負責心理健康的輔導老師,因為許多學生對考試感到焦慮。"
  },
  {
    "word": "sunscreen",
    "pos": "n.",
    "cn_def": "防曬乳",
    "en_def": "a cream that protects skin from the sun",
    "sentence": "Put on {{BLANK}} before you go to the beach, or your skin may burn badly in the strong sun.",
    "cn": "去海灘前要先擦防曬乳,否則你的皮膚可能在強烈的陽光下嚴重曬傷。"
  },
  {
    "word": "dentist",
    "pos": "n.",
    "cn_def": "牙醫",
    "en_def": "a doctor who looks after teeth",
    "sentence": "I visit the {{BLANK}} every six months, so any small problems with my teeth can be fixed early.",
    "cn": "我每六個月去看一次牙醫,所以牙齒的小問題都能及早處理。"
  },
  {
    "word": "dental",
    "pos": "adj.",
    "cn_def": "牙齒的",
    "en_def": "relating to teeth",
    "sentence": "Good {{BLANK}} health starts in childhood, so parents should help young children brush their teeth.",
    "cn": "良好的牙齒健康從童年開始,所以父母應該幫小孩刷牙。"
  },
  {
    "word": "toothache",
    "pos": "n.",
    "cn_def": "牙痛",
    "en_def": "a pain in a tooth",
    "sentence": "I had a terrible {{BLANK}} during the holiday, but all the dental clinics were closed.",
    "cn": "假期中我牙痛得很厲害,但所有的牙科診所都休診了。"
  },
  {
    "word": "cavity",
    "pos": "n.",
    "cn_def": "蛀牙;齲齒",
    "en_def": "a hole in a tooth caused by decay",
    "sentence": "The dentist found two {{BLANK}} in my teeth, because I drink too many sweet drinks.",
    "cn": "牙醫在我的牙齒上發現兩顆蛀牙,因為我喝了太多含糖飲料。"
  },
  {
    "word": "floss",
    "pos": "v.",
    "cn_def": "用牙線清潔",
    "en_def": "to clean between your teeth with a thin thread",
    "sentence": "You should {{BLANK}} every night before bed, because a toothbrush cannot reach between your teeth.",
    "cn": "你應該每晚睡前用牙線清潔,因為牙刷刷不到牙齒之間的縫隙。"
  },
  {
    "word": "eyesight",
    "pos": "n.",
    "cn_def": "視力",
    "en_def": "the ability to see",
    "sentence": "Too much screen time can harm your {{BLANK}}, so look at something far away every thirty minutes.",
    "cn": "過長的螢幕時間會傷害你的視力,所以每三十分鐘要看看遠方。"
  },
  {
    "word": "short-sighted",
    "pos": "adj.",
    "cn_def": "近視的",
    "en_def": "able to see near things clearly but not far things",
    "sentence": "More than eighty percent of high school students in Taiwan are {{BLANK}}, so glasses are very common in class.",
    "cn": "台灣超過百分之八十的高中生近視,所以教室裡戴眼鏡的人非常普遍。"
  },
  {
    "word": "myopia",
    "pos": "n.",
    "cn_def": "近視",
    "en_def": "the condition of being unable to see far things clearly",
    "sentence": "Doctors believe that playing outdoors can slow {{BLANK}} in children, so schools encourage outdoor lessons.",
    "cn": "醫生認為戶外活動可以減緩兒童的近視,所以學校鼓勵在戶外上課。"
  },
  {
    "word": "hearing loss",
    "pos": "n.phr.",
    "cn_def": "聽力損失",
    "en_def": "a reduced ability to hear",
    "sentence": "Listening to loud music with earphones can cause {{BLANK}}, so keep the volume below sixty percent.",
    "cn": "用耳機聽大聲的音樂可能造成聽力損失,所以音量要保持在百分之六十以下。"
  },
  {
    "word": "quit",
    "pos": "v.",
    "cn_def": "戒除;停止",
    "en_def": "to stop doing something, such as smoking",
    "sentence": "My grandfather finally {{BLANK}} smoking at seventy, and he says he can now climb stairs without stopping.",
    "cn": "我爺爺七十歲時終於戒菸了,他說現在爬樓梯都不用停下來休息。"
  },
  {
    "word": "health-conscious",
    "pos": "adj.",
    "cn_def": "注重健康的",
    "en_def": "careful about doing things that are good for your health",
    "sentence": "More {{BLANK}} customers are choosing drinks with less sugar, so shops have added new options.",
    "cn": "越來越多注重健康的顧客選擇少糖飲料,所以店家增加了新的選項。"
  },
  {
    "word": "home-cooked",
    "pos": "adj.",
    "cn_def": "家常的;自己煮的",
    "en_def": "made at home rather than bought",
    "sentence": "{{BLANK}} meals usually contain less oil and salt, so my mother cooks dinner even when she is busy.",
    "cn": "自己煮的飯菜通常油和鹽都比較少,所以我媽媽即使很忙也會煮晚餐。"
  },
  {
    "word": "addiction",
    "pos": "n.",
    "cn_def": "成癮",
    "en_def": "a strong need to keep doing or using something harmful",
    "sentence": "Phone {{BLANK}} is a growing problem among teenagers, so some schools ask students to leave their phones in lockers.",
    "cn": "手機成癮在青少年中是日益嚴重的問題,所以有些學校要求學生把手機放在置物櫃裡。"
  }
];

const MCQS = [
  {
    "q": "Our school promotes _____, so the canteen now serves more vegetables and fewer fried foods.",
    "options": [
      "heart disease",
      "day care centre",
      "healthy eating",
      "night shift"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Children need at least an hour of _____ every day, but many spend most of their free time on phones.",
    "options": [
      "physical activity",
      "sore throat",
      "eye drops",
      "early detection"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The doctor told my uncle that he was _____, so he started walking to work instead of driving.",
    "options": [
      "critical",
      "malignant",
      "clinical",
      "overweight"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Some teenage girls are _____ because they eat too little, so the school nurse talks to them about healthy meals.",
    "options": [
      "nutritional",
      "underweight",
      "inactive",
      "malignant"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Your _____ is calculated from your height and weight, but it does not show how much muscle you have.",
    "options": [
      "operating theatre",
      "palliative care",
      "nursing home",
      "body mass index"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Doctors say a large _____ is a warning sign, because fat around the stomach is linked to heart disease.",
    "options": [
      "intolerance",
      "tuberculosis",
      "waistline",
      "radiotherapy"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Eating _____ every day is bad for your health, but it is popular because it is quick and cheap.",
    "options": [
      "fast food",
      "night shift",
      "medical staff",
      "health authority"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "_____ in restaurants have grown over the years, so many people eat more than they really need.",
    "options": [
      "health inequality",
      "portion size",
      "second-hand smoke",
      "care worker"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Instant noodles contain a lot of _____, so you should not drink all the soup if you have high blood pressure.",
    "options": [
      "tumour",
      "appointment",
      "salt",
      "recommendation"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Many high school students suffer from _____, because they study late and use their phones in bed.",
    "options": [
      "universal health care",
      "sleep deprivation",
      "super-aged society",
      "nursing home"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Experts say you should stop using screens an hour before _____, or you may find it hard to fall asleep.",
    "options": [
      "bedtime",
      "disruption",
      "allowance",
      "licensing"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "My father checks his _____ every evening, and he takes a walk if it is under eight thousand.",
    "options": [
      "the picture of health",
      "border control",
      "healthcare worker",
      "step count"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Every morning a group of seniors practise _____ in the park, because it improves balance and calms the mind.",
    "options": [
      "vaccine hesitancy",
      "tai chi",
      "second-hand smoke",
      "medical staff"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "I use a _____ to record how much water I drink, and it reminds me when I forget.",
    "options": [
      "a clean bill of health",
      "herd immunity",
      "health app",
      "the picture of health"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "My mother's _____ measures her heart rate while she sleeps, so she knows how well she rested.",
    "options": [
      "smartwatch",
      "reduction",
      "inpatient",
      "replacement"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Our school now has a counsellor for _____, because many students feel worried about exams.",
    "options": [
      "the picture of health",
      "general practitioner",
      "smoking ban",
      "mental health"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Put on _____ before you go to the beach, or your skin may burn badly in the strong sun.",
    "options": [
      "detriment",
      "sunscreen",
      "consultation",
      "centenarian"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "I visit the _____ every six months, so any small problems with my teeth can be fixed early.",
    "options": [
      "association",
      "facility",
      "dentist",
      "droplet"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Good _____ health starts in childhood, so parents should help young children brush their teeth.",
    "options": [
      "dental",
      "unhealthy",
      "optional",
      "physiological"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "I had a terrible _____ during the holiday, but all the dental clinics were closed.",
    "options": [
      "ailment",
      "morbidity",
      "operation",
      "toothache"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The dentist found two _____ in my teeth, because I drink too many sweet drinks.",
    "options": [
      "concern",
      "cavity",
      "antiseptic",
      "standard"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "You should _____ every night before bed, because a toothbrush cannot reach between your teeth.",
    "options": [
      "supervise",
      "heal",
      "floss",
      "overstretch"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Too much screen time can harm your _____, so look at something far away every thirty minutes.",
    "options": [
      "eyesight",
      "inpatient",
      "pensioner",
      "wheelchair"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "More than eighty percent of high school students in Taiwan are _____, so glasses are very common in class.",
    "options": [
      "sanitary",
      "inactive",
      "frontline",
      "short-sighted"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Doctors believe that playing outdoors can slow _____ in children, so schools encourage outdoor lessons.",
    "options": [
      "myopia",
      "spending",
      "tumour",
      "insurer"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Listening to loud music with earphones can cause _____, so keep the volume below sixty percent.",
    "options": [
      "assisted living",
      "the picture of health",
      "hearing loss",
      "infant mortality"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "My grandfather finally _____ smoking at seventy, and he says he can now climb stairs without stopping.",
    "options": [
      "recommend",
      "halve",
      "inject",
      "quit"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "More _____ customers are choosing drinks with less sugar, so shops have added new options.",
    "options": [
      "long-lasting",
      "health-conscious",
      "dysfunctional",
      "nutritional"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "_____ meals usually contain less oil and salt, so my mother cooks dinner even when she is busy.",
    "options": [
      "home-cooked",
      "airborne",
      "respiratory",
      "hygienic"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Phone _____ is a growing problem among teenagers, so some schools ask students to leave their phones in lockers.",
    "options": [
      "wheelchair",
      "enrolment",
      "addiction",
      "expectancy"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "healthy eating": {
    "pos": "n.phr.",
    "en_def": "choosing food that is good for your body",
    "cn_def": "健康飲食"
  },
  "physical activity": {
    "pos": "n.phr.",
    "en_def": "movement of the body, such as walking or sport",
    "cn_def": "身體活動"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "heavier than is healthy",
    "cn_def": "過重的"
  },
  "underweight": {
    "pos": "adj.",
    "en_def": "lighter than is healthy",
    "cn_def": "過輕的"
  },
  "body mass index": {
    "pos": "n.phr.",
    "en_def": "a number based on weight and height used to judge health",
    "cn_def": "身體質量指數;BMI"
  },
  "waistline": {
    "pos": "n.",
    "en_def": "the size of the middle of your body",
    "cn_def": "腰圍"
  },
  "fast food": {
    "pos": "n.phr.",
    "en_def": "quick, cheap food such as burgers and fries",
    "cn_def": "速食"
  },
  "portion size": {
    "pos": "n.phr.",
    "en_def": "the amount of food served to one person",
    "cn_def": "份量"
  },
  "salt": {
    "pos": "n.",
    "en_def": "a white substance used to flavour food",
    "cn_def": "鹽"
  },
  "sleep deprivation": {
    "pos": "n.phr.",
    "en_def": "not getting enough sleep",
    "cn_def": "睡眠不足"
  },
  "bedtime": {
    "pos": "n.",
    "en_def": "the time when you usually go to bed",
    "cn_def": "就寢時間"
  },
  "step count": {
    "pos": "n.phr.",
    "en_def": "the number of steps you walk in a day",
    "cn_def": "步數"
  },
  "tai chi": {
    "pos": "n.",
    "en_def": "a slow Chinese exercise of gentle movements",
    "cn_def": "太極拳"
  },
  "health app": {
    "pos": "n.phr.",
    "en_def": "a phone program that tracks your health",
    "cn_def": "健康應用程式"
  },
  "smartwatch": {
    "pos": "n.",
    "en_def": "a watch that works like a small computer",
    "cn_def": "智慧手錶"
  },
  "mental health": {
    "pos": "n.phr.",
    "en_def": "the health of a person's mind and feelings",
    "cn_def": "心理健康"
  },
  "sunscreen": {
    "pos": "n.",
    "en_def": "a cream that protects skin from the sun",
    "cn_def": "防曬乳"
  },
  "dentist": {
    "pos": "n.",
    "en_def": "a doctor who looks after teeth",
    "cn_def": "牙醫"
  },
  "dental": {
    "pos": "adj.",
    "en_def": "relating to teeth",
    "cn_def": "牙齒的"
  },
  "toothache": {
    "pos": "n.",
    "en_def": "a pain in a tooth",
    "cn_def": "牙痛"
  },
  "cavity": {
    "pos": "n.",
    "en_def": "a hole in a tooth caused by decay",
    "cn_def": "蛀牙;齲齒"
  },
  "floss": {
    "pos": "v.",
    "en_def": "to clean between your teeth with a thin thread",
    "cn_def": "用牙線清潔"
  },
  "eyesight": {
    "pos": "n.",
    "en_def": "the ability to see",
    "cn_def": "視力"
  },
  "short-sighted": {
    "pos": "adj.",
    "en_def": "able to see near things clearly but not far things",
    "cn_def": "近視的"
  },
  "myopia": {
    "pos": "n.",
    "en_def": "the condition of being unable to see far things clearly",
    "cn_def": "近視"
  },
  "hearing loss": {
    "pos": "n.phr.",
    "en_def": "a reduced ability to hear",
    "cn_def": "聽力損失"
  },
  "quit": {
    "pos": "v.",
    "en_def": "to stop doing something, such as smoking",
    "cn_def": "戒除;停止"
  },
  "health-conscious": {
    "pos": "adj.",
    "en_def": "careful about doing things that are good for your health",
    "cn_def": "注重健康的"
  },
  "home-cooked": {
    "pos": "adj.",
    "en_def": "made at home rather than bought",
    "cn_def": "家常的;自己煮的"
  },
  "addiction": {
    "pos": "n.",
    "en_def": "a strong need to keep doing or using something harmful",
    "cn_def": "成癮"
  },
  "heart disease": {
    "pos": "n.phr.",
    "en_def": "any illness that affects the heart",
    "cn_def": "心臟病"
  },
  "day care centre": {
    "pos": "n.phr.",
    "en_def": "a place that looks after older people during the day",
    "cn_def": "日間照顧中心"
  },
  "night shift": {
    "pos": "n.phr.",
    "en_def": "a period of work during the night",
    "cn_def": "夜班"
  },
  "sore throat": {
    "pos": "n.phr.",
    "en_def": "pain in the throat, often from a cold",
    "cn_def": "喉嚨痛"
  },
  "eye drops": {
    "pos": "n.phr.",
    "en_def": "liquid medicine that you put into your eyes",
    "cn_def": "眼藥水"
  },
  "early detection": {
    "pos": "n.phr.",
    "en_def": "finding a disease at an early stage",
    "cn_def": "早期發現"
  },
  "critical": {
    "pos": "adj.",
    "en_def": "very serious and dangerous",
    "cn_def": "危急的;嚴重的"
  },
  "malignant": {
    "pos": "adj.",
    "en_def": "(of a tumour) dangerous and likely to spread",
    "cn_def": "惡性的"
  },
  "clinical": {
    "pos": "adj.",
    "en_def": "relating to the treatment of patients",
    "cn_def": "臨床的"
  },
  "nutritional": {
    "pos": "adj.",
    "en_def": "relating to the food you need to be healthy",
    "cn_def": "營養的"
  },
  "inactive": {
    "pos": "adj.",
    "en_def": "not doing much physical activity",
    "cn_def": "不活動的;缺乏活動的"
  },
  "operating theatre": {
    "pos": "n.phr.",
    "en_def": "a room in a hospital where operations are done",
    "cn_def": "手術室"
  },
  "palliative care": {
    "pos": "n.phr.",
    "en_def": "care that reduces pain for people who cannot be cured",
    "cn_def": "安寧緩和照護"
  },
  "nursing home": {
    "pos": "n.phr.",
    "en_def": "a place where old or ill people live and receive care",
    "cn_def": "護理之家;養護機構"
  },
  "intolerance": {
    "pos": "n.",
    "en_def": "the inability of the body to accept certain food or drugs",
    "cn_def": "不耐;不耐症"
  },
  "tuberculosis": {
    "pos": "n.",
    "en_def": "a serious infectious disease that mainly affects the lungs",
    "cn_def": "肺結核"
  },
  "radiotherapy": {
    "pos": "n.",
    "en_def": "treatment of cancer using radiation",
    "cn_def": "放射治療;放療"
  },
  "medical staff": {
    "pos": "n.phr.",
    "en_def": "the doctors and nurses who work in a hospital",
    "cn_def": "醫護人員"
  },
  "health authority": {
    "pos": "n.phr.",
    "en_def": "a government body in charge of health",
    "cn_def": "衛生主管機關"
  },
  "health inequality": {
    "pos": "n.phr.",
    "en_def": "unfair differences in health between groups of people",
    "cn_def": "健康不平等"
  },
  "second-hand smoke": {
    "pos": "n.phr.",
    "en_def": "smoke breathed in by people near a smoker",
    "cn_def": "二手菸"
  },
  "care worker": {
    "pos": "n.phr.",
    "en_def": "a person whose job is to look after old or sick people",
    "cn_def": "照顧服務員"
  },
  "tumour": {
    "pos": "n.",
    "en_def": "a lump that grows inside the body",
    "cn_def": "腫瘤"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arranged time to meet a doctor or other person",
    "cn_def": "預約;掛號"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "a suggestion about what should be done",
    "cn_def": "建議"
  },
  "universal health care": {
    "pos": "n.phr.",
    "en_def": "a system that gives medical care to everyone",
    "cn_def": "全民健康照護"
  },
  "super-aged society": {
    "pos": "n.phr.",
    "en_def": "a society where over 20% of people are 65 or older",
    "cn_def": "超高齡社會"
  },
  "disruption": {
    "pos": "n.",
    "en_def": "a problem that stops something from continuing normally",
    "cn_def": "中斷;干擾"
  },
  "allowance": {
    "pos": "n.",
    "en_def": "money given regularly for a special purpose",
    "cn_def": "津貼;補助"
  },
  "licensing": {
    "pos": "n.",
    "en_def": "giving official permission to do something",
    "cn_def": "核發執照;許可"
  },
  "the picture of health": {
    "pos": "n.phr.",
    "en_def": "a person who looks very healthy",
    "cn_def": "健康的典範;看起來非常健康"
  },
  "border control": {
    "pos": "n.phr.",
    "en_def": "checks on people entering a country",
    "cn_def": "邊境管制"
  },
  "healthcare worker": {
    "pos": "n.phr.",
    "en_def": "a person who works in medical care, such as a nurse",
    "cn_def": "醫事人員;醫療工作者"
  },
  "vaccine hesitancy": {
    "pos": "n.phr.",
    "en_def": "unwillingness or delay in getting vaccinated",
    "cn_def": "疫苗猶豫"
  },
  "a clean bill of health": {
    "pos": "n.phr.",
    "en_def": "a report saying that someone is healthy",
    "cn_def": "健康證明;一切健康的診斷"
  },
  "herd immunity": {
    "pos": "n.phr.",
    "en_def": "protection that happens when most people in a group are immune",
    "cn_def": "群體免疫"
  },
  "reduction": {
    "pos": "n.",
    "en_def": "a decrease in size or amount",
    "cn_def": "減少;降低"
  },
  "inpatient": {
    "pos": "n.",
    "en_def": "a patient who stays in a hospital for treatment",
    "cn_def": "住院病人"
  },
  "replacement": {
    "pos": "n.",
    "en_def": "a new part that takes the place of an old one",
    "cn_def": "置換;替代品"
  },
  "general practitioner": {
    "pos": "n.phr.",
    "en_def": "a family doctor who treats common illnesses",
    "cn_def": "家庭醫師;一般科醫師"
  },
  "smoking ban": {
    "pos": "n.phr.",
    "en_def": "a law that stops people smoking in certain places",
    "cn_def": "禁菸令"
  },
  "detriment": {
    "pos": "n.",
    "en_def": "harm or damage",
    "cn_def": "損害;傷害"
  },
  "consultation": {
    "pos": "n.",
    "en_def": "a meeting with a doctor to discuss a health problem",
    "cn_def": "看診;諮詢"
  },
  "centenarian": {
    "pos": "n.",
    "en_def": "a person who is 100 years old or more",
    "cn_def": "百歲人瑞"
  },
  "association": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or place for a particular purpose",
    "cn_def": "設施"
  },
  "droplet": {
    "pos": "n.",
    "en_def": "a very small drop of liquid",
    "cn_def": "飛沫"
  },
  "unhealthy": {
    "pos": "adj.",
    "en_def": "bad for your health",
    "cn_def": "不健康的"
  },
  "optional": {
    "pos": "adj.",
    "en_def": "that you can choose to do or not",
    "cn_def": "可選擇的;非強制的"
  },
  "physiological": {
    "pos": "adj.",
    "en_def": "relating to how the body works",
    "cn_def": "生理的"
  },
  "ailment": {
    "pos": "n.",
    "en_def": "a minor illness",
    "cn_def": "小病;疾病"
  },
  "morbidity": {
    "pos": "n.",
    "en_def": "the rate of illness in a population",
    "cn_def": "罹病率"
  },
  "operation": {
    "pos": "n.",
    "en_def": "cutting the body open to repair or remove something",
    "cn_def": "手術"
  },
  "concern": {
    "pos": "n.",
    "en_def": "a feeling of worry",
    "cn_def": "擔憂;關切"
  },
  "antiseptic": {
    "pos": "n.",
    "en_def": "a liquid or cream that kills germs on cuts",
    "cn_def": "消毒劑;抗菌劑"
  },
  "standard": {
    "pos": "n.",
    "en_def": "a level of quality",
    "cn_def": "標準;水準"
  },
  "supervise": {
    "pos": "v.",
    "en_def": "to watch over someone to make sure they act correctly",
    "cn_def": "監督;督導"
  },
  "heal": {
    "pos": "v.",
    "en_def": "to become healthy again after an injury",
    "cn_def": "癒合;痊癒"
  },
  "overstretch": {
    "pos": "v.",
    "en_def": "to make a system try to do more than it can",
    "cn_def": "使不堪負荷"
  },
  "pensioner": {
    "pos": "n.",
    "en_def": "a person who receives a pension after retiring",
    "cn_def": "領退休金的人"
  },
  "wheelchair": {
    "pos": "n.",
    "en_def": "a chair with wheels for people who cannot walk",
    "cn_def": "輪椅"
  },
  "sanitary": {
    "pos": "adj.",
    "en_def": "clean and not likely to cause disease",
    "cn_def": "衛生的;衛生設備的"
  },
  "frontline": {
    "pos": "adj.",
    "en_def": "working directly in the most important or dangerous place",
    "cn_def": "第一線的"
  },
  "spending": {
    "pos": "n.",
    "en_def": "the amount of money spent",
    "cn_def": "支出"
  },
  "insurer": {
    "pos": "n.",
    "en_def": "a company that provides insurance",
    "cn_def": "保險公司"
  },
  "assisted living": {
    "pos": "n.phr.",
    "en_def": "housing where older people get some help with daily tasks",
    "cn_def": "協助型生活住宅"
  },
  "infant mortality": {
    "pos": "n.phr.",
    "en_def": "the number of babies who die before age one",
    "cn_def": "嬰兒死亡率"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to advise that something should be done",
    "cn_def": "建議"
  },
  "halve": {
    "pos": "v.",
    "en_def": "to reduce something by half",
    "cn_def": "減半"
  },
  "inject": {
    "pos": "v.",
    "en_def": "to put medicine into the body with a needle",
    "cn_def": "注射"
  },
  "long-lasting": {
    "pos": "adj.",
    "en_def": "continuing for a long time",
    "cn_def": "持久的"
  },
  "dysfunctional": {
    "pos": "adj.",
    "en_def": "not working normally or properly",
    "cn_def": "失能的;運作不良的"
  },
  "airborne": {
    "pos": "adj.",
    "en_def": "carried through the air",
    "cn_def": "經由空氣傳播的"
  },
  "respiratory": {
    "pos": "adj.",
    "en_def": "relating to breathing and the lungs",
    "cn_def": "呼吸的;呼吸系統的"
  },
  "hygienic": {
    "pos": "adj.",
    "en_def": "clean and free of germs",
    "cn_def": "衛生的"
  },
  "enrolment": {
    "pos": "n.",
    "en_def": "the act of officially joining a programme",
    "cn_def": "登記;報名"
  },
  "expectancy": {
    "pos": "n.",
    "en_def": "how long something is expected to last",
    "cn_def": "預期;預期壽命"
  }
};

const EXTRA_GLOSSES = {};
